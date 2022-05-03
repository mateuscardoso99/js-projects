//ADICIONANDO UMA FUNÇÃO
/*var objeto = {digaOi: function(nome){
        return `olá ${nome}`
    }
}*/
//OUTRA FORMA:
var objeto = {digaOi(nome){
    return `olá ${nome}`
}
}
console.log(objeto.digaOi("joao"))




//PASSANDO VARIÁVEL PRA DENTRO DO OBJETO:
let cor = 'azul'
var idade = 38

let pessoa = {
    nome:'maria',
    cor,
    idade
}
console.log(pessoa)

let info = {
    cidade:'caxias',
    estado: 'RS'
}




//JUNTANDO DOIS OBJETOS OU MAIS EM UM SÓ:
var novoObjeto = Object.assign({}, pessoa, info)
//* AS CHAVES VAZIAS SEGUIDA DO NOME DOS OBJETOS SIGNIFICA 
//QUE SERÁ CRIADO UM NOVO OBJETO
console.log(novoObjeto)

//OUTRA FORMA DE FAZER
var novoObjeto2 = {
    ...pessoa,
    ...info
}
console.log(novoObjeto2)



//JOGANDO AS INFORMAÇÕES DE UM OBJETO PRA DENTRO DE OUTRO
Object.assign(pessoa,info)
console.log(pessoa)



//PASSAR VALOR DA VARIÁVEL PRA DENTRO DO OBJETO
let variavel = 'pais'
let dados = {
    nome: 'paulo',
    [variavel]: 'uruguai'
}
console.log(dados)



//GETTERS E SETTERS
var usuarios = [
    {
        nome: 'alberto',
        idade: 34
    },
    {
        nome: 'pablo',
        idade: 19
    },
    {
        nome: 'joana',
        idade: 30
    }
]//array de objetos
console.log(usuarios)
console.log(usuarios[1].nome)

var usuario = {
    posicao: 0,
    get atual(){
        return usuarios[this.posicao]
    },
    set trocarAtual(posicao){
        this.posicao = posicao
    },
    proximo(){
        ++this.posicao
    },
    anterior(){
        --this.posicao
    }
}//usar o get e set faz com que não precise escrever parênteses
//quando for chamar a função
console.log(usuario.atual)
usuario.proximo()
console.log(usuario.atual)
usuario.anterior()
console.log(usuario.atual)
usuario.trocarAtual = 2
console.log(usuario.atual)