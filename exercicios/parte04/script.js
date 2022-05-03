function tabuada(){
    let numero = document.getElementById("txtnum")
    let div = document.getElementById("combobox")

    if(numero.value.length != 0){
        let n = Number(numero.value)

       // let contador = 0
        div.innerHTML = ''

        //USANDO WHILE:
        /*while(contador <= 10){
            let item = document.createElement("option")//CRIANDO ELEMENTO NO COMBOBOX
            item.text = `${n} X ${contador} = ${n*contador}`
            item.value = `div${contador}`//IMPORTANTE NO PHP POR EXEMPLO
            div.appendChild(item)
            contador++
        }*/

        for(let contador = 0; contador <= 10; contador++){
            let item = document.createElement("option")
            item.text = `${n} X ${contador} = ${n*contador}`
            div.appendChild(item)

        }

    }else{
        alert("preencha o campo")
    }
}