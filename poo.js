//modificadores de acesso só podem ser usados com TS
//por convenção atributos privados são declarados com "_" na frente
class Teste{
   idade;
   nome;
   static abc = 45;

   constructor(nome, idade){
      this.nome = nome;
      this.setIdade(idade)
   }

   getIdade(){
      return this.idade
   }
   setIdade = (idade) => {
      this.idade = idade
   }
   getNome(){
      return this.nome;
   }
   setNome(n){
      nome = n
   }
}

class T2 extends Teste{
   t2
   constructor(nome, idade, t2){
      super(nome,idade)
      this.t2 = t2
   }
}

const teste = new Teste("joao",50)
console.log(teste.getNome(),teste.getIdade())
teste.abc = 3
console.log(Teste.abc,teste.abc)//45 3

let t2 = new T2("maria",34,33);
console.log(t2)