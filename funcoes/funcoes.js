function parimpar(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
console.log(parimpar(4))

///////////////////////////////////////////////

function somar(n1=0, n2=0){
    return n1 + n2
}
console.log(somar('',6))

/////////////////////////////////////////////////

let v = function(x){
    return x*2
}
console.log(v(5))

/////////////////////////////////////////////////////

function fatorial(num){
    let f = 1
    for(let c=num;c>1;c--){
        f *= c
    }
    return f
}
console.log(fatorial(5))


////////////////////////////////////////////////////
//USANDO RECURSIVIDADE PARA CALCULAR FATORIAL
function fatrec(n){
    if(n == 1){
        return 1
    }else{
        return n * fatrec(n-1)
    }
}
console.log(fatrec(5))