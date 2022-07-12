//ALTERANDO O VALOR DA PROPRIEDADE THIS:
function teste(){
    this.dia = 15
    this.mes = 'abril'
}

var obj = new teste()//a propriedade new altera o valor de this
console.log(obj)



//outra forma de alterar o this:
function nome(sobrenome, apelido){
    console.log(sobrenome, apelido)
    console.log(this)
}

let novoValorThis = {
    nome:'carlos'
}
nome.call(novoValorThis, 'silva', 'jo')//método call() alterando o valor de this
//parametros podem ser passados normalmente


//outra forma: usando método apply()
nome.apply(novoValorThis, ['silva', 'jo'])
//parametros devem ser passados dentro de um array()


//outra forma: usando método bind()
var a = nome.bind(novoValorThis, 'santos')//não precisa passar todos os parametros
//o método bind() não chama a função ao contrário dos anteriores

a('marques')//pode-se armazenar o retorno de bind() em uma variavel e chama-la depois
//passando o parametro que falta









//ARROW FUNCTIONS:
/*let somar = (a,b) => {
    return b + a
}*/
//simplificando:
let somar = (a,b) => b + a
console.log(somar(45,80))
//quando a função apenas retorna algo e não faz mais nada pode-se omitir o return

var retornaObjeto = () => ({ nome: 'juan', idade: 45})
console.log(retornaObjeto())


let funcao = cidade => ({
    nome: 'paulo',
    idade: 39,
    cidade
})
console.log(funcao("belo horizonte"))
//quando a função recebe apenas um parâmetro, não precisa colocar parênteses

// * não é possível alterar o valor de this em uma arrow function





//FUNCOES ANONIMAS
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()

