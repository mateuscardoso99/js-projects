function contar(){
    let inicio = document.getElementById("txtinicio")
    let final = document.getElementById("txtfim")
    let passo = document.getElementById("txtpasso")
    let resultado = document.getElementById("res")

    if(inicio.value.length == 0 || final.value.length == 0 ||
         passo.value.length == 0){
            alert("preencha os campos")
            resultado.innerHTML = "impossível contar"
    }else{
        resultado.innerHTML = "contando: <br>"
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert("passo inválido, considerando 1")
            p = 1
        }

        if(i < f){
            for(var a=i; a<=f; a+=p){
                resultado.innerHTML += `${a} \u{1f449} `
            }
        }
        else if(i > f){
            for(var a=i; a>=f; a-=p){
                resultado.innerHTML += `${a} \u{1f449} `
            }
        }
        resultado.innerHTML += ` \u{1f3c1}`
        
    }

}