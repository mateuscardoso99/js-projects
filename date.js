new Date() //pega data e hora corrente de acordo com as configurações do sistema.
new Date(valor); //criando assim deve-se passar um valor inteiro representando o número de milisegundos desde 1 de Janeiro de 1970 00:00:00
new Date(dataString); //Um valor do tipo String que representa uma data. A string deverá estar uma formato reconhecido pelo método Date.parse()
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
new Date(2013, 13, 1) //é equivalente a new Date(2014, 1, 1) pois o mes 13 não existe então assume a próxima data válida 01/01/2014

//Invocar o objeto Date no JavaScript como uma função (i.e., sem o operador new) retornatá uma string representando a data e hora corrente.
Date.now() //Retorna o valor numérico correspondente ao tempo corrente - o número de milisegundos passados desde 1 de Janeiro de 1970 00:00:00 UTC.
Date.parse() //Analisa uma string que representa uma data e retorna o número de milisegundos desde 1 de Janeiro, 1970, 00:00:00, hora local.
Date.UTC() //aceita os mesmos parâmetros que o construtor mais longo de Date e retorna o total de milisegundos desde 1º de Janeiro de 1970 às 00:00:00 (horário universal). Date.UTC() utiliza o horário universal em vez do horário local. Date.UTC() retorna um valor inteiro em vez de uma instância de Date.
getTime() //Um número representando os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual.
toString() //retorna a data em um formato legível mas sem poder configurar local
toLocaleString() //formata data e hora baseado no local ex  new Date().toLocaleString() saida: '09/07/2024, 14:16:33'
toDateString() //retorna a porção da data de um objeto Date em um formato legível para humanos em inglês dos Estados Unidos.
toLocaleDateString() //retorna uma string com a representação de parte da data baseando-se no idioma, // toLocaleDateString() sem argumentos depende da implementação, o locale padrão, e o time zone padrão
toLocaleTimeString() // o mesmo que toLocaleDateString() só que pra hora
new Intl.DateTimeFormat('pt-BR').format(new Date()) // 09/07/2024

var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// os formatos abaixo assumem o time zone local do locale;
// America/Los_Angeles for the US

// Inglês americano usa a ordem mês-dia-ano
console.log(date.toLocaleDateString("en-US"));
// → "12/19/2012"

// Inglês Britânico usa a ordem dia-mês-ano
console.log(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// Coreano usa a ordem ano-mês-dia
console.log(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// Árabe na maioria dos países de língua árabe usa dígitos árabes reais
console.log(date.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// para Japonês, aplicações podem querer usar o calendário japonês,
// onde 2012 foi o ano 24 da era Heisei
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// quando um idioma que pode não ser suportado é requerido, tal como
// Balinês, inclua um idioma de reserva, nesse caso Indonésio
console.log(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options)); 
// → "Donnerstag, 20. Dezember 2012"



//ex:
var birthday = new Date("1995-12-17T03:24:00");
//Anos com dois dígitos são mapeados para 1900 - 1999


//Ao formatar um grande número de datas, é melhor usar a API de internacionalização do JS (Intl) criar um objeto Intl.DateTimeFormat e usar a função fornecido porsua propriedade format.



