//são métodos usados em arrays

const numeros = [3,7,12,9,30,8]

let novoArray = []

for(let i=0;i<numeros.length;i++){
    novoArray.push(numeros[i]*2)
}
console.log(novoArray)//novo array com os valores modificados



//USANDO MAP para fazer a mesma coisa:
const novoArray2 = numeros.map(function(valor){
    return valor * 2
})
console.log(novoArray2)
//método map espera uma função como parametro, e depois
//percorre todo o array
//* o 'valor' no parametro da function é como se fosse o 'i' do
//laço for


//simplicando com arrow functions:
let arrayArrow = numeros.map(valor => valor * 2)
console.log(arrayArrow)


//outro exemplo:
let nomes = ['JOSE', 'JOAO', 'MARIA']
let nomeMinusculo = nomes.map(valor => valor.toLowerCase())

console.log(nomes)
console.log(nomeMinusculo)









//FILTER:
let numerosPares = []
for(let i=0;i<numeros.length;i++){
    if(numeros[i] % 2 == 0){
        numerosPares.push(numeros[i])
    }
}
console.log(numerosPares)

//fazendo a mesma coisa com filter:
let numerosParesComFilter = numeros.filter(function(valor){
    if(valor % 2 === 0)
        return true
    else
        return false
})
console.log('usando filter(): ',numerosParesComFilter)
//o método filter() retorna sempre true ou false, se for true ele cria
// um array com o filtro, se for false ele não cria


//simplificando:
numerosParesComFilter = numeros.filter(function(valor){
    return valor % 2 === 0
})
console.log(numerosParesComFilter)

//usando arrow functions:
numerosParesComFilter = numeros.filter(valor => valor % 2 === 0)
console.log('usando arrow functions: ',numerosParesComFilter)


//USANDO FILTER E MAP JUNTOS:
let arrayComMapFilter = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
console.log('map e filter juntos: ',arrayComMapFilter)










//REDUCE:
//somando os elementos com for:
let soma = 0
for(let i=0;i<numeros.length;i++){
    soma += numeros[i]
}
console.log('somando com for:', soma)


//somando com reduce():
var somaReduce = numeros.reduce(function(i,valor){
    return i + valor;
}, 0)
console.log('soma com reduce: ',somaReduce)
//o parametro 'i' é tem o mesmo valor do parametro '0', portanto vale zero
//o parametro '0' é o valor inicial, poderia ser uma string vazia, um objeto {} etc..
//o parametro 'valor, é o valor de dentro do array que será percorrido
//o método reduce pode retornar qualquer coisa(objeto, numero, array, string etc..) para
//ser armazenado em uma variável por exemplo

//usando arrow function:
var somaReduce = numeros.reduce((i,valor) => i + valor, 0)
console.log('soma reduce arrow function: ',somaReduce)


//outro exemplo:
const pessoas = [
    {
        nome: 'joao',
        idade: 16
    },
    {
        nome: 'marcos',
        idade: 38
    },
    {
        nome: 'maria',
        idade: 45
    },
    {
        nome: 'joana',
        idade: 20
    },
    {
        nome: 'cassio',
        idade: 36
    },
    {
        nome: 'fernanda',
        idade: 12
    },
    {
        nome: 'paulo',
        idade: 15
    }
]

var pessoasAgrupadas = pessoas.reduce(function(i, valor){
    const maior_menor = valor.idade >= 18 ? 'maiores' : 'menores'
    
    i[maior_menor].push(valor)
    return i

},{maiores: [], menores:[]})

console.log(pessoasAgrupadas)