//PROMISES SÃO FUNCIONALIDADES DO JAVASCRIPT PARA GERENCIAR
// A PARTE ASSÍNCRONA DA LINGUAGEM

//exemplo de assíncronismo do javascript:
/*
console.log("primeiro")
setTimeout(function(){
    console.log("segundo")
}, 0)
//o javascript processou a primeira linha, processou essa função
// e mandou ela para uma fila de execução, e continuou processando
// os comandos seguintes, sem interromper a aplicação
setTimeout(function(){
    console.log("terceiro")
}, 0)

console.log("quarto")

console.log("quinto")
console.log("sexto")
*/




//PROMISES POSSUEM 4 ESTADOS:
//  - PENDENTE
//  - REALIZADA
//  - REJEITADA
//  - ESTABELECIDA


function realizada(){
    return Promise.resolve(45)//podem ser passados parametros
}
function rejeitada(){
    return Promise.reject()//promise.reject e .resolve ambas retornan uma promise que precisa de um .then()
}


realizada().then(function(valor){
    console.log('promise resolvida',valor)
})
//o método then() é retornado quando a promise é resolvida
rejeitada().catch(function(){
    console.log('rejeitado')
})
//o método catch() é retornado quando a promise é rejeitada


//melhor maneira de trabalhar com promises:
function promise(){
    return new Promise(function(resolve,reject){//função sempre deve retornar uma promise
        //resolve('ola mundo')
        setTimeout(function(){
            reject('promise rejeitada')
        }, 1500)
        
    })
}

promise().catch(function(message){
    console.log(message)
})
// o método resolve() chama o método then()
// já o reject() chama o método catch()


//fazendo uma request http com promise:
window.fetch('https://viacep.com.br/ws/01001000/json').then(function(data){
    data.json().then(function(endereco){
        console.log(endereco)
    })
})



//encadeando promises (se deve fazer quando uma operação depende da outra):

function pegaCEP(cep){
    return window.fetch('https://viacep.com.br/ws/'+cep+'/json')
}
function extraiEndereco(data){
    return data.json()
}
function imprimeEndereco(endereco){
    console.log(endereco)
}
function error(e){
    console.log('houve um erro', e)
}

realizada()
    .then(pegaCEP)
    .then(extraiEndereco)
    .then(imprimeEndereco)
    .catch(error)
    .finally(function(){
        console.log('finally sempre será executado')
    })




//USANDO O MÉTODO PROMISE ALL():
Promise.all([
    realizada(),
    pegaCEP('97095540')
]).then(function(promisesResolvidas){
    console.log(promisesResolvidas)
})
//no método promise all() deve ser passado um array com as promises dentro
//quando todas as promises deste array forem resolvidas ele retorna
// um array com os valores de cada uma das promises resolvidas
// neste caso será retornado um array com o resultados das promises 'realizada'
//e 'pegaCEP'





//USANDO O MÉTODO PROMISE RACE():
Promise.race([
    realizada(),
    pegaCEP('97095540')
]).then(function(promisesResolvidas){
    console.log(promisesResolvidas)
}, function(valorRejeitado){
    console.log(valorRejeitado)
})
//é igual ao promise.all() a diferença é que ele não retorna os valores de cada 
// uma das promises resolvidas, e sim apenas o valor da primeira promise
// que for resolvida, ou da primeira que for rejeitada
