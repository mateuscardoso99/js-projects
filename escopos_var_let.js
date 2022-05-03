function testeVariavel(){
    pais = 'brasil'
}
testeVariavel()
console.log(pais)
//* DECLARAR UMA VARIÁVEL SEM AS PALAVRAS VAR OU LET, FAZ COM QUE ELA SE TORNE
//UMA VARIÁVEL GLOBAL




//ESCOPO DINÂMICO: O VALOR DE UMA VARÁVEL PODE MUDAR DEPENDENDO DO CONTEXTO
//OU DE QUEM A CHAMA

//ESCOPO LEXICAL: VALOR DA VARÁVEL É ESTÁTICO





//LET (DEVE SER USADA DENTRO DE LAÇOS DE REPETIÇÃO):
if(true){
    var nome = 'joao'
    let nome2 = 'maria'
}
console.log(nome)//nome que foi declarada com 'var' continua sendo acessivel fora do laço
//console.log(nome2)//nome2 que foi declarada com 'let' só existe dentro do laço e não existe fora

//variaveis let não podem ser redeclaradas ex.:
//(só podem ser redeclaradas se estiverem em blocos diferentes)
let numero = 34
console.log(numero)
{
let numero = 20
console.log(numero)
}