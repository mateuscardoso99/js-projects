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