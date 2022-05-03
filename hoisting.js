//HOISTING É A FORMA COMO A ENGINE DO NAVEGADOR
//COMPILA UM CÓDIGO JAVASCRIPT


//EXEMPLO DE HOISTING:
console.log(soma(34,8))
function soma(a, b){
    return a + b
}
/*mesmo chamando a função antes de cria-la a engine
compila como se estivesse desse jeito: */
/*function soma(a, b){
    return a + b
}
console.log(soma(34,8))*/

//* a engine move a declaração da variável ou função pro topo do escopo
//antes de mostrar o valor (no caso de variaveis definidas
//com let e const haverá uma mensagem de erro ao invés de undefined)



//UTILIZANDO HOISTING NUMA FUNÇÃO:
function calcula(){
    return geraResultado()

    function soma(a, b){
        return a + b
    }
    function geraResultado(){
        return soma(29,11) / 2
    }
}
console.log(calcula())