function soma(a,b){
    return a + b
}
var res = soma(4,8)
//console.log(res)



//RECEBER ARRAY POR PARAMETRO E RETORNAR A SOMA DOS ELEMENTOS
function somaVetor(vetor){
    let soma = 0

    /*for (var i=0;i<vetor.length;i++){
        soma += vetor[i]
    }*/

    //outra maneira de somar os elementos:
    /*for(let c in vetor){
        soma += vetor[c]
    }*/

    //outra maneira de somar os elementos:
    for (var s of vetor) {
        soma += s
    }
    console.log(soma)
}
let vetor = [4,8,5,9]
somaVetor(vetor)





//FUNÇÃO QUANDO NÃO SE SABE O NUMERO EXATO DE PARAMETROS QUE ELA VAI RECEBER:
//USA-SE "..." (3 PONTOS)
function endereco(rua, numero, cidade, ...outros){
    console.log(rua, numero, cidade)
    console.log(outros)
}
endereco('rua d',478,'caxias','rio grande do sul','brasil','cep:45.90');
//os parametros adicionais que foram passados são tratados como um vetor





//FUNÇÃO AUTO-EXECUTAVEL (EXECUTADA NA HORA EM QUE É CRIADA):
(function autoExecutar(){
    console.log('executada imediatamente')
}());
//passando parametro:
(function autoSomar(num1,num2){
    console.log(num1 + num2)
}(5,9))






//VARIAVEL QUE RECEBE UMA FUNÇÃO:
let diminuir = function subtrair(a,b){
    return a - b
}
console.log(diminuir(4,3))

//outra maneira: (usando arrow function)
let diminuir2 = (a,b) => {
    return a - b
}
console.log(diminuir2(5,2))





//FUNÇÃO ANÔNIMA (NOME PODE SER OMITIDO):
var multiplicar = function(x,y){
    return x*y
}
console.log(multiplicar(8,24))




//FUNÇÕES DE CALLBACK (FUNÇÕES QUE SÃO PASSADAS COMO PARAMETRO EM OUTRA FUNÇÃO):
function somaCallback(a, b, funcCallback){
    return funcCallback(a + b)
}
console.log(somaCallback(10, 8, function(total){
    return total * 2
}))

//outra forma:
var divide = function(valor){
    return valor / 2
}
console.log(somaCallback(28, 20, divide))



//VALOR PADRÃO EM UMA FUNÇÃO (CASO NÃO SEJA PASSADO UM PARAMETRO):
function escrever(nome="valor padrao"){
    console.log(nome)
}
escrever()