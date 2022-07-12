/* 
VAR:
Declarações com var tem escopo global ou escopo de função/local.
O escopo é global quando uma variável var é declarada fora de uma função. 
Isso significa que qualquer variável que seja declarada com var fora de um bloco de 
função pode ser utilizada na janela inteira.
var tem escopo de função quando é declarado dentro de uma função. 
Isso significa que ele está disponível e pode ser acessado somente de dentro daquela função.
*/

/**
   LET tem escopo global, escopo função/local etem escopo de bloco ao contrario do VAR
   Um bloco é uma porção de código cercado por {}. 
   Um bloco vive dentro dessas chaves. Tudo o que estiver cercado por chaves é um bloco.
   Assim, uma variável declarada com let em um bloco estará disponível apenas 
   dentro daquele bloco
 */


/**
 * CONST: tem escopo global, escopo função/local etem escopo de bloco ao contrario do VAR
 * Declarações com const têm escopo de bloco 
 * Assim como as declarações de let, as declarações de const somente podem 
 * ser acessadas dentro do bloco onde foram declaradas.
 */

 var tester = "hey hi";
    
 function newFunction() {
	var hello = "hello";
}
 console.log(hello); // erro: hello não está definido


//  Variáveis de var podem ser declaradas de novo e atualizadas
//  Isso significa que é possível fazer o seguinte dentro do mesmo escopo e 
//	não gerar um erro:
 
var greeter = "hey hi";
var greeter = "say Hello instead";
var greeter = "hey hi";
greeter = "say Hello instead";


//problema:
var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
console.log(greeter) // o resultado será "say Hello instead" 

//Se você já usou greeter em outras partes do seu código, pode se surpreender com 
//o resultado que vai obter. Isso provavelmente causará vários bugs no seu código. 


//LET
let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// dirá "say Hello instead"
}
console.log(hello) // hello não está definido


//Vemos que o uso de hello fora de seu bloco 
//(as chaves dentro das quais a variável foi definida) retorna um erro. 
//Isso ocorre porque as variáveis de let têm escopo de bloco.

//let pode ser atualizado, mas não declarado novamente.
//Assim como var, uma variável declarada com let pode ser atualizada dentro de seu escopo. 
//Diferente de var, no entanto, uma variável let não pode ser declarada novamente dentro 
//de seu escopo. O código a seguir funciona:

    let greeting = "say Hi";
    greeting = "say Hello instead";


//Este outro código, no entanto, retornará um erro:
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // erro: identificador 'greeting' já foi declarado


//Porém, se a mesma variável for definida em escopos diferentes, não haverá erro:
    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // retornará "say Hello instead"
    }
    console.log(greeting); // retornará "say Hi"



////////////////////

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
console.log(nome)//nome que foi declarada com 'var' continua sendo acessivel fora do bloco
//console.log(nome2)//nome2 que foi declarada com 'let' só existe dentro do bloco e não existe fora

//variaveis let e const não podem ser redeclaradas ex.: (var pode)
//(só podem ser redeclaradas se estiverem em blocos diferentes)
let numero = 34
const e = 3
console.log(numero)

{
	const e = 2
	let numero = 20
	console.log(numero)
}