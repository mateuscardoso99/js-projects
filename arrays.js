let vetor = [4,9,0,34,3]
let pessoas = ['joao', 'maria', 'paulo', 'felix']

console.log(vetor)//OUTRA FORMA DE MOSTRAR UM ARRAY (MOSTRA OS COLCHETES JUNTO)
console.log(`${vetor}`)

vetor[5] = 78 //ADICIONANDO ELEMENTO NA POSIÇÃO[5] DO ARRAY

console.log(`${vetor}`)

vetor.push(50) //ADICIONANDO ELEMENTO NA ULTIMA POSIÇÃO DO ARRAY
console.log(`${vetor}`)

vetor.pop() // APAGA O ULTIMO ELEMENTO
vetor.length //TAMANHO DO ARRAY

console.log(`${vetor}`)

vetor.sort() //COLOCA EM ORDEM CRESCENTE O ARRAY
console.log(`${vetor.reverse()}`)//IMPRIME DE TRÁS PRA FRENTE
console.log(pessoas.toString())//PASSA PRA STRING

console.log(pessoas.join(' - '))//PODE ESCOLHER UM CARACTERE PARA SEPARAR OS ELEMENTOS

console.log(`ELEMENTO NA POSIÇÃO[2]:${vetor[2]}\n`)//MOSTRANDO ELEMENTO NUMA POSIÇÃO ESPECÍFICA


console.log("IMPRIMINDO ARRAY COM FOR")
for(let i=0;i<vetor.length;i++){
    console.log(vetor[i])
}

console.log("\nIMPRIMINDO ARRAY COM FOR ESPECÍFICO PARA ARRAYS E OBJETOS")
for(let i in vetor){
    console.log(vetor[i])
}


console.log("\nBUSCANDO DADOS:")
console.log(vetor.indexOf(34))//VERIFICA SE EXISTE O VALOR 34 NO VETOR, SE TIVER
//RETORNA A POSIÇÃO QUE ELE ESTÁ, SENÃO EXISTIR RETORNA -1
console.log(vetor.indexOf(200))//VALOR 200 NÃO EXISTE NO VETOR,
// NESSE CASO RETORNOU -1


//criando array usando classe Array
let teste = new Array('um','dois')
console.log(teste)

//apagando elemento
delete teste[0]

teste[0]='tres'

console.log(teste)

//splice serve para adicionar, remover ou adicionar e remove ao mesmo tempo
//splice altera o array original

teste.slice(1,1)//apaga o elemento na posicao [1], o segundo é a quantidade de elementos
teste.splice(1,2)//apaga 2 elementos apartir da posicao[1]
teste.splice(1,2,'quatro','seis')
//apartir da posicao[1] remove 2 elementos e adiciona os valores 'quatro' e 'seis'
teste.splice(1,0,'quatro','seis')
//apartir da posicao[1] não remove nenhum elementos (por isso o zero) e adiciona os valores 'quatro' e 'seis'

console.log(teste)

const array = ['1','2','3']
array.pop()//remove ultimo elemento (1,2)
array.push('3')//adiciona no fim (1,2,3)
array.shift()//remove o primeiro (2,3)
array.unshift('0')//adiciona na primeira posicao (0,2,3)

array.splice(2,0,'4','5') //adiciona apartir do indice 2 '4' e '5' e não remove nenhum elemento(0,2,4,5,3)
console.log(array)

array.splice(1,3) //apartir da posicao 1 remove 3 elementos ficando (0,3)
console.log(array)

array.push('4','9')


//slice pega partes de um array
//slice retorna um novo array, não altera o original
const novoarray = array.slice(2) //pega os valores apartir do indice 2 e retorna-os
console.log(novoarray) //(4,9)

const novoarray2 = array.slice(1,3)//pega os valores apartir do indice 1 até o 2, o 3 não entra
console.log(novoarray2)//(3,4)


//FOREACH
const nomes = ['joao','carlos','maria','felix']
nomes.forEach(function(nome,indice,array){//3° parametro é o proprio array
    console.log(`${indice} - ${nome}`)
})
// 0 - joao
// 1 - carlos
// 2 - maria
// 3 - felix


//outra forma
nomes.forEach(nome => console.log(nome))//joao, carlos, maria, felix

//outra forma
const exibirNome = nome => console.log(nome)
nomes.forEach(exibirNome)//joao, carlos, maria, felix

//criando forEach próprio
//O construtor prototype de array JavaScript é usado para permitir adicionar novos métodos e propriedades ao objeto Array().
Array.prototype.forEach22 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i,this)// o array passado no caso nomes é acessado pelo this
    }
}

nomes.forEach22(nome => console.log(nome))//joao, carlos, maria, felix



//MAP
//MAP retorna um novo array, não altera o array original
const nums = [1,2,3,4,5]
let result = nums.map(function(valor) {
    return valor*2
})
console.log(result)// [2,4,6,8,10]

const soma10 = e => e+10
const triplo = e => e*3
const converterParaDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

result = nums.map(soma10).map(triplo).map(converterParaDinheiro)
console.log(result)//[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]


const c = [
    '{"nome":"d","preco":10}',
    '{"nome":"d","preco":80}'
]
const f = c.map((item,i,array) => JSON.parse(item)).map(item=>{return {preco: item.preco}})
console.log(f)



//FILTER
//FILTER retorna um novo array, não altera o array original
const produtos = [
    {nome: "notebook", preco: 2499, fragil: true},
    {nome: "camisa", preco: 210, fragil: false},
    {nome: "fogao", preco: 3000, fragil: true}
]

console.log(produtos.filter(function(p){
    //return p.preco > 2000 //retorna produtos com preco maior que 2000
    //return false //o array retornado será vazio
}))

console.log(
    produtos.filter(p=>p.preco>2000)
            .filter(p=>p.fragil)
)//retorna produtos com preco maior que 2000 e que sejam fragil = true


//criando filter personalizado
Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i<this.length; i++) {
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

console.log(produtos.filter2(p=>p.preco>1000))



//REDUCE
//REDUCE retorna um novo array, ou um numero ou uma string etc.., não altera o array original
const alunos = [
    {nome: "joao", nota: 7.3, bolsista: false},
    {nome: "maria", nota: 9.2, bolsista: true},
    {nome: "pedro", nota: 9.8, bolsista: false},
    {nome: "ana", nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a=>a.nota)
                        .reduce(function(acumulador,valorAtual,indice,array){
                            //acumulador é o resultado da iteração anterior
                            //que é passado pra próxima iteração
                            //nesse caso o acumulador é a soma com valorAtual
                            //na 1a iteração o acumulador é valor na posicao[0]
                            //e o valorAtual é a posicao[1]
                            //é feita a soma deles e o resultado será armazenado em
                            //acumulador e passado pra próxima iteração 
                            //onde será somado o acumulador com a posicao[2] e assim por diante
                            console.log(acumulador,valorAtual)
                            return acumulador+valorAtual
                        }, /*10*/) //10 é um valor inicial passado pro reduce, o resultado seria 45
console.log(resultado)//35

//verifica se todos os alunos são bolsistas e retorna true ou false
const b = alunos.map(a=>a.bolsista)
                .reduce((acumulador,valorAtual)=>{
                    return acumulador && valorAtual
                })

console.log(b)

//verifica se algum aluno é bolsista e retorna true ou false
const v = alunos.map(a=>a.bolsista)
                .reduce((acumulador,valorAtual)=>{
                    return acumulador || valorAtual
                })
console.log(v)

//reduce personalizado

Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]

    for(let i=indiceInicial;i<this.length;i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

console.log([3,6,4].reduce2((acumulador,valorAtual)=>acumulador+valorAtual))//13

//passando valor inicial
const soma = (acumulador,valorAtual) => acumulador+valorAtual
console.log([3,6,4].reduce2(soma,10))//23




//CONCAT
//CONCAT retorna um novo array, não altera o array original
const filhas = ['ana','universina']
const filhos = ['joao','alvissimo']
const todos = filhas.concat(filhos,'fulano','ola')//pode passar quantos parametros quiser
console.log(todos)
