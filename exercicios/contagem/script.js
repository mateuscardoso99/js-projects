var diaNascimento = document.getElementById('txtdia').value
var mesNascimento = document.getElementById('txtmes').value
var anoNascimento = document.getElementById('txtano').value
var result = document.querySelector('#resultado')

data = new Date()

var diaAtual = data.getDate()//retorna o numero do dia
var mesAtual = data.getMonth() + 1//retorma o mes de 0 a 11
var anoAtual = data.getFullYear()//retorna o ano

var diasDeVida
var mesesDeVida
var anosDeVida
var totalEmDias = 0

var contagem = () => {
	if(anoNascimento == anoAtual){
		anosDeVida = 0
		if(mesNascimento == mesAtual){
			mesesDeVida = 0
			if(diaNascimento == diaAtual){
				diasDeVida = 0
			}
			else if(diaNascimento < diaAtual){		
				diasDeVida = diaAtual - diaNascimento
			}
		}
		else if(mesNascimento < mesAtual){
			mesesDeVida = mesAtual - mesNascimento
			if(diaNascimento == diaAtual){
				diasDeVida = 0
			}
			else if(diaNascimento < diaAtual){
				diasDeVida = diaAtual - diaNascimento
			}
			else if(diaNascimento > diaAtual){
				mesesDeVida = mesAtual - mesNascimento - 1
				diasDeVida = 30-(diaNascimento - diaAtual)
			}
		}	
	}
	else if (mesNascimento == mesAtual && diaNascimento == diaAtual) {
		anosDeVida = anoAtual - anoNascimento
		mesesDeVida = 0
		diasDeVida = 0
	}
	else if (mesNascimento == mesAtual && diaNascimento < diaAtual) {
		anosDeVida = anoAtual - anoNascimento
		mesesDeVida = mesAtual - mesNascimento
		diasDeVida = diaAtual - diaNascimento
	}
	else if (mesNascimento == mesAtual && diaNascimento > diaAtual) {
		anosDeVida = anoAtual - anoNascimento - 1
		mesesDeVida = 12 - (mesAtual - mesNascimento) - 1
		diasDeVida = 30-(diaNascimento - diaAtual)
	}
	else if (mesNascimento < mesAtual && diaNascimento < diaAtual) {
		anosDeVida = anoAtual - anoNascimento
		mesesDeVida = mesAtual - mesNascimento
		diasDeVida = diaAtual - diaNascimento
	}
	else if (mesNascimento < mesAtual && diaNascimento > diaAtual) {
		anosDeVida = anoAtual - anoNascimento
		mesesDeVida = mesAtual - mesNascimento - 1
		diasDeVida = 30-(diaNascimento - diaAtual)
	}
	else if (mesNascimento < mesAtual && diaNascimento == diaAtual) {
		anosDeVida = anoAtual - anoNascimento
		mesesDeVida = mesAtual - mesNascimento
		diasDeVida = 0
	}
	else if (mesNascimento > mesAtual && diaNascimento < diaAtual) {
		anosDeVida = anoAtual - anoNascimento - 1
		mesesDeVida = 12 - (mesNascimento - mesAtual)
		diasDeVida = diaAtual - diaNascimento
	}
	else if (mesNascimento > mesAtual && diaNascimento > diaAtual) {
		anosDeVida = anoAtual - anoNascimento - 1
		mesesDeVida = 12 - (mesNascimento - mesAtual) - 1
		diasDeVida = 30-(diaNascimento - diaAtual)
	}
	else if (mesNascimento > mesAtual && diaNascimento == diaAtual) {
		anosDeVida = anoAtual - anoNascimento - 1
		mesesDeVida = 12 - (mesNascimento - mesAtual)
		diasDeVida = 0
	}

	totalEmDias = anosDeVida * 365 + mesesDeVida * 30 + diasDeVida
	resultado.innerHTML = `Você tem aproximadamente ${anosDeVida} anos, ${mesesDeVida} meses e ${diasDeVida} dias de idade, e ${totalEmDias} dias de vida`
}