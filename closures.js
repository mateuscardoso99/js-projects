//closures são importantes para memorização do escopo em que ela foi criada
function imprimeNome(){
    var nome = 'jose'
    return function(){
        return nome
    }
}
var func = imprimeNome()
console.log(func())

//função filha, que fica dentro de imprimeNome(),
//consegue acessar as propriedades do escopo em que ela foi criada

//criando funções e variáveis privadas:
function minhaBiblioteca(){
    function auxiliar(valor){
        return 10 + valor
    }//função privada, não pode ser acessada fora da função minhaBiblioeca()
    return {
        soma5(){
            return auxiliar(5)
        },
        soma7(){
            return auxiliar(7)
        }
    }
}
var biblioteca = minhaBiblioteca()
console.log(biblioteca.soma5())
console.log(biblioteca.soma7())




function imprimeNomeCompleto(nome){
    return function(){
        console.log(nome,'silva')
    }
}
function inicializar(){
    let nome = 'joao'
    setTimeout(imprimeNomeCompleto(nome), 2000)
}
inicializar()