function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoDigitado = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(anoDigitado.value.length == 0 || anoDigitado.value > ano){
        alert('Verifique os dados e tente novamente')
    }else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(anoDigitado.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
//CRIANDO IMAGEM E DEFININDO UM ID PELO JAVASCRIPT

        if(sexo[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade <= 12){
                imagem.setAttribute('src', 'criancaguri.jpg')
            }else if(idade <= 30){
                imagem.setAttribute('src', 'jovemhomem.jpg')
            }else if(idade < 60){
                imagem.setAttribute('src', 'homem.jpg')
            }else{
                imagem.setAttribute('src', 'idoso.jpg')
            }

        }else{
            genero = 'Mulher'

            if(idade >= 0 && idade <= 12){
                imagem.setAttribute('src', 'criancamenina.jpg')
            }else if(idade <= 30){
                imagem.setAttribute('src', 'jovemmulher.jpg')
            }else if(idade < 60){
                imagem.setAttribute('src', 'mulher.jpg')
            }else{
                imagem.setAttribute('src', 'idosa.jpg')
            }
        }

        res.style.textAlign = 'center' //CENTRALIZANDO CONTEÚDO PELO JAVASCRIPT
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(imagem)
    }
}