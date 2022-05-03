/*var x = '10' + "56";

function soma(){
	return x;
}

alert(soma());
console.log(soma());*/
/*var x = 11;

function verifica(){
	if(x == '34'){
		alert("igual a 34");
	}else if(x == 11){
		alert("igual a 11");
	}else{
		alert("diferente de 11 e 34");
	}
}

verifica();
*/

//OBJETOS
/*var pessoa = {
	idade: 34,
	nome: 'jonas',
	peso: 78,
	casado: false,
};

var fun = function(){
	console.log("variavel como funcao");
}

function objeto(){
	var verifica;
		if(pessoa.casado == false){
			verifica = "nao";
		}else{
			verifica = "sim";
		}

	alert("nome: "+ pessoa.nome 
		+ "\tidade: " + pessoa.idade 
		+ "\npeso: " + pessoa.peso 
		+ "\tcasado?: " + verifica);
}

objeto();
fun();
*/

//MÉTODOS DE OBJETOS
/*var pessoa = {
	idade: 24,
	nome: 'carlos',
	sobrenome: 'silva',
	peso: 69,
	casado: false,
	aniversario: function (){
		pessoa.idade++;
	},
	nomeComSobreNome: function (){
		pessoa.nome = pessoa.nome +
		 " " + pessoa.sobrenome;
	}
};

pessoa.nomeComSobreNome();
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa);
*/
//TRUTHY OU FALSY
/*var numero = 1;
var booleano;
function func(){
	if (numero) {
		booleano = true;
		console.log(booleano);
	}else{
		booleano = false;
		console.log(booleano);
	}
}
func();
*/
//CONDICIONAL TERNÁRIO
/*var carro = {
	portas: 4,
	marca: "BMW"
};

var modelo;
var ternario = 
carro.portas === 4 ? (modelo = "4 portas") : 
	(modelo = "2 portas");
	console.log(ternario);
*/
//FUNÇÃO RETORNANDO ARRAYS E OBJETOS
/*
function arr(){
	return [1,2,3,4,5,6,7,8,9,10];
}
console.log(arr()[2]);//pegando posição específica

function calculo(){
	var soma = arr()[8]+arr()[2];
	return soma;
}
console.log(calculo());

function retornaObjeto(){
	return {
		peso: 90,
		idade: 43,
		nome: 'julio'
	};
}
console.log(retornaObjeto().nome);
alert(retornaObjeto().nome);
*/
//RECEBENDO ARRAY OU OBJETO COMO PARÂMETRO
/*var arr = [5,89,30,11,259];
function func(arg){
	return arg;
}
alert(func(arr)[3]);
console.log(func(arr));
*/
/*var obj = {
	nome: 'joao',
	idade: 33,
};

function func1(arg){
	return arg;
}
alert(func1(obj).nome);
console.log(func1(obj));
*/
//SWITCH CASE
/*function func(x) {
	switch(x) {
		case 1:
			console.log("um");
			break;
		case 2:
			console.log("dois");
			break;
		default:
			console.log("default");
			break;
	}
}
func(2);
*/
//WHILE
/*var abc = 14;

while (abc !== 20){
	console.log(abc);
	abc++;
}
*/
//MÓDULO
//var modulo = 10 % 4;
//console.log(modulo);
/*var numero = 0;
while(numero <= 20){
	numero % 2 === 0 ? console.log(numero) : '';
	numero++;
}
*/
//ARRAYS
/*
var array = ["joao", "cesar",
 "maria", {idade: "29 anos"}];
var tamanho = array.length;/*total de 
itens dentro do array*/

/*console.log(tamanho);
console.log(array);

while(tamanho > 0){
	console.log(array[--tamanho]);
	if(tamanho === 3){
		console.log(array[tamanho].idade);
	}
}
*/
//FOR E PUSH
/*var array = ["jonas", "bruna", 4, 9.2];
function add(){
	//array.push('elemento adicionado');
	//array.push(function soma(x,y){
	array.push(['um','dois']);
		return array;
	//});
	return array;
}
console.log(add());
//PUSH ADICIONA ELEMENTOS NO ARRAY
// SEM SOBRESCREVER

for (var i = 0; i <= 20; i+=2) {
	console.log([i]);
}
*/
//FUNÇÕES AUTO EXECUTÁVEIS
/*(function(){
	console.log(60+5);
})();
*/
//CONSTRUTOR E WRAPPER
/*var nome = 'joao';
var nome = new String('joao');//construtor
var b = Boolean(0);
console.log(b.valueOf());
*/
//TYPEOF (VERIFICA TIPO DA VARIÁVEL)
//document.write escreve no arquivo html
var nome = 'jonas';
var num = 3;
var b = false;
document.write(`<h1>${typeof nome}</h1>`);
document.write(`<h1>${typeof num}</h1>`);
document.write(`<h1>${typeof b}</h1>`);

function soma(a,b){
	if (typeof a === 'number' 
		&& typeof b === 'number') {
		document.write(`<h1>${a+b}</h1>`);
	}else{
		alert('insira números')
	}
}
soma(3,8);