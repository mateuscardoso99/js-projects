// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)//{ativo: true, nome: 'Maria', salario: 12348.99}

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)//['Maria', 'João', 'Pedro', 'Gloria', 'Rafaela']



//objetos

const pessoa = {
	nome: 'joao',
	idade: 80,
	endereco: {
		logradouro: 'rua A',
		numero: 33
	}
}

const {nome, idade} = pessoa
const {nome: n, endereco = null} = pessoa //pegando propriedades e com um nome diferente e atribuindo valor padrão caso nao exista
const { endereco: { logradouro }  } = pessoa //desestruturando dado aninhado

console.log(nome, idade) //joao 80
console.log(n, idade) //joao 80
console.log(logradouro) //rua A


//arrays
const [a] = [10] //em arrays se usa colchetes
console.log(a) //10

const [n1, , n3, n4=0] = [1,2,3] //pegando elementos do array e pulando o segundo
console.log(n1,n3,n4) //1,3,0

const [, [, nota]] = [[,3,5], [4,9]] 
//ignora o primeiro elemeto [,3,5] pega o segundo elemento [4,9], depois pega o segundo elemento do array [4,9] e igonra o primeiro elemento do segundo array

console.log(nota) //9


//funcoes

//objetos
function rand({ min = 0, max = 1000 }) {//destructuring do objeto recebido por parametro
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 })) //na funcao sera desestruturado o atributo min, mas o max nao terá entao sera atribuido o valor padrao
console.log(rand({}))//passando objeto vazio, a funcao assume os valores padrao
//console.log(rand())//erro não foi passado nenhum objeto


//arrays (mesma ideia das funcoes com objetos acima)
function rand2([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]//inverte posicoes do array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))
//console.log(rand())
