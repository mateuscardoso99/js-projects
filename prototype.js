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