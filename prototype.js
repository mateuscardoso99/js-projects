//tudo em JS são objetos

/*
O JavaScript é frequentemente descrito como uma linguagem baseada em protótipos — para fornecer herança, 
os objetos podem ter um objeto de protótipo, que atua como um objeto de modelo do qual herda métodos e propriedades. 
O objeto de protótipo de um objeto também pode ter um objeto de protótipo, do qual herda métodos e propriedades, 
e assim por diante. Isso geralmente é chamado de cadeia de protótipos e explica por que objetos diferentes têm 
propriedades e métodos definidos em outros objetos disponíveis para eles. como hasOwnProperty() que pertence ao prototipo Pai no JS que é Object
as propriedades e os métodos são definidos na propriedade prototype nas funções construtoras dos Objetos, não nas próprias instâncias do objeto.
Em JavaScript, é feito um link entre a instância do objeto e seu protótipo (sua propriedade __proto__, que é derivada da propriedade prototype no construtor), e as propriedades e os métodos são encontrados percorrendo a cadeia de protótipos.
*/

//Prototype ou protótipo, atua como um modelo do qual herda métodos e propriedades. Todos os objetos em JavaScript herdam de pelo menos um outro objeto
//tudo tem uma propriedade Prototype
//uma classe Pessoa por exemplo, o seu protótipo é o próprio Object que é encontrado em sua raiz, e a classe que possui como prototype um Object, irá herdar métodos dessa classe nativa(Object), como o valueOf e hasOwnProperty, por exemplo.

function Person(first, last, age, gender, interests) {
    // property and method definitions
    this.first = first;
    this.last = last;
    //...
}

var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

//adicionando no prototype da classe Person uma nova propriedade, isso fará com que todas as instâncias de Person possam usufruir disso
Person.prototype.farewell = function () {
    alert(this.name.first + " has left the building. Bye for now!");
};


/*
Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado prototype. 
Esse objeto prototype também tem um atributo prototype, e assim por diante até o que o valor null seja encontrado como sendo o seu prototype. 
Null que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos (prototype chain).
*/

let f = function () {
   this.a = 1;
   this.b = 2;
}
let ola = new f(); // {a: 1, b: 2}
// adicionar propriedades no prototype da função f
f.prototype.b = 3;
f.prototype.c = 4;

//'ola'.prototype possui propriedades 'b' e 'c'.
//'ola'.prototype.prototype é Object.prototype.
//Finalmente, o.prototype.prototype.prototype é nulo.
//Este é o fim da cadeia de protótipos, como nulo, por definição, não possui prototype.

// Assim, a cadeia completa de protótipos se parece com:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(ola.b); // 2
// Existe uma propriedade própria 'b' em 'ola'? Sim, e seu valor é 2.
// O protótipo também tem uma propriedade 'b', mas não é visitado.
// Isso é chamado de sombreamento de propriedade(Property Shadowing)

console.log(ola.c); // 4
// Existe uma propriedade própria 'c' em 'ola'? Não, então verifique seu protótipo.
// Existe uma propriedade 'c' própria em 'ola'.prototype? Sim, seu valor é 4.

console.log(ola.d); // undefined
// Existe uma propriedade 'd' própria em 'ola'? Não, verifique seu prototype.
// Existe uma propriedade 'd' em 'ola'.prototype? Não, verifique seu prototype.
// o.prototype.prototype é Object.prototype e não há propriedade 'd' por padrão, verifique seu prototype.
// o.prototype.prototype.prototype é nulo, pare de pesquisar, nenhuma propriedade encontrada, retorne undefined.



var a = ["yo", "whadup", "?"];

// Arrays herdam de Array.prototype (que tem métodos como indexOf, forEach, map, filter, etc.)
// A cadeia de protótipos se parece com isso:
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Funções herdam de Function.prototype (que tem métodos como call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null




var a = { a: 1 };
// a ---> Object.prototype ---> null
var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)
var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null



//Quando uma herança de função é executada, o valor de this aponta para o objeto que herdou as propriedades, não para o objeto prototype onde as propriedades foram escritas originalmente.
var o = {
  a: 2,
  m: function (b) {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// Ao chamar 'o.m' neste caso, "this" refere-se a 'o'

var p = Object.create(o);
// 'p' é um objeto que foi herdado de 'o'

p.a = 12; // cria uma propriedade 'a' no objeto 'p'
console.log(p.m()); // 13
// Ao chamar 'p.m', 'this' refere-se a 'p'
// Então, quando 'p' herda a função de 'm' de 'o', 'this.a' representa 'p.a' que é a própria propriedade 'a' de 'p'





function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = { //dessa forma todas as instancias de Graph poderão adicionar 'vertexes' usando esse método no prototype, pois estará disponível pra todas as instâncias
  addVertex: function (v) {
    this.vertexes.push(v);
  },
};

var g = new Graph();
// 'g' é um objeto com as propriedades 'vertexes' e 'edges'.
// g.prototype é o valor de Graph.prototype quando new Graph() é executada.


// PRA ACESSAR O PROTOTYPE DE UM OBJETO SE USA A PROPRIEDADE __PROTO__





