//ARMAZENAR PROPRIEDADE DE UM OBJETO NUMA VARIÁVEL:
var pessoa = {
    nome: 'manoel',
    idade: '70',
    pais: 'brasil'
}
/*var nome = pessoa.nome
var pais = pessoa.pais
console.log(nome)
console.log(pais)*/

//OUTRA FORMA MELHOR:
var { idade, pais, nome: primeiroNome } = pessoa
console.log(idade, pais, primeiroNome)//* as variáveis devem ter o mesmo
//nome da propriedade do objeto, mas isso pode ser modificado como
//no exemplo acima.

//dessa forma serão criadas as variáveis nome,idade e pais
//com os dados do objeto.





//PEGAR PROPRIEDADE DE UM OBJETO ANINHADO DENTRO DE OUTRO
let pessoa2 = {
    nome: {
        primeiro: 'joao',
        segundo: 'silva'
    }
}

let nome1 = pessoa2.nome.primeiro
console.log(nome1)
//OUTA FORMA:
let {nome: {segundo}} = pessoa2
console.log(segundo)

//definindo um valor padrão se caso a propriedade não existir:
let {nome: {terceiro = 'propriedade inexistente'}} = pessoa2
console.log(terceiro)





//PASSANDO OBJETO PRA FUNÇÃO E EXTRAINDO O OBJETO DENTRO DA FUNÇÃO:
/*function imprimir(usuario){
    console.log(usuario.nome)
    console.log(usuario.idade)
}*/
function imprimir({nome, idade}){
    console.log(nome, idade)
}
let usuario = {
    nome: 'claudio',
    idade: 41
}
imprimir(usuario)




console.log(Object.keys(usuario))//mostra as chaves do objeto
console.log(Object.values(usuario))//mostra os valores do objeto





//PERCORRER OBJETO ATRAVÉS DO FOR:
var propriedades = Object.keys(usuario)//pegando o total de propriedades
    for(let i=0; i<propriedades.length; i++){
        console.log(usuario[propriedades[i]])
    }
    //outra forma:
    for(var valores of propriedades){
        console.log(usuario[valores])
    }
    //outra forma:
    for (let valores2 in usuario) {
        if (usuario.hasOwnProperty(valores2)) {
            console.log(valores2, usuario[valores2])
        }
//o método hasOwnProperty() faz com que seja mostrado somente propriedades
//nativas do objeto, propriedades herdadas, ou que não são nativas são ignoradas
    }