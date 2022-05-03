//DECLARANDO UM OBJETO:
let pessoa = {nome:"joao",sexo:"masculino",idade:46,peso:85.4,engordar(parametro=0){
        console.log("engordou!")
        this.peso += parametro
    }
}
//console.log(typeof(pessoa));//MOSTRANDO O TIPO
//console.log(pessoa.sexo);//MOSTRANDO UMA PROPRIEDADE EXCEPECÍFICA
//console.log(pessoa['idade'])//OUTRA FORMA DE MOSTRAR
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)
pessoa.engordar(2)
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, e pesa ${pessoa.peso}Kg`)


//ADICIONANDO NOVA PROPRIEDADE AO OBJETO
pessoa.anoNascimento = 1970


//APAGANDO PROPRIEDADE
delete pessoa.anoNascimento



//ADICIONANDO UM ARRAY COMO NOVA PROPRIEDADE
pessoa.profissao = ['cantor, compositor']



//ADICIONANDO UM OBJETO DENTRO DO PRÓPRIO OBJETO PESSOA
pessoa.competencias = {linguagens:['ingles','espanhol'],
    instrumentos:['piano','violão']
}//PODERIA SER ADICIONADO NO MOMENTO DA CRIAÇÃO DO OBJETO TAMBÉM

console.log(pessoa)