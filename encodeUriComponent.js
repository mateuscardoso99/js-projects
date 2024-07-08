/*
URLs somente podem ter alguns caracteres do conjunto padrão de 128 caracteres ASCII. Caracteres reservados que não pertençam a esse conjunto devem ser codificados.
Isso significa que precisamos codificar esses caracteres ao passarmos um URL. Caracteres especiais, como &, espaço e !, ao serem inseridos em um URL, necessitam de um "escape", ou podem causar situações imprevisíveis
encodeURI e encodeURIComponent são usados para codificar os identificadores de recurso uniformes (URIs) ao substituir determinados caracteres por uma, duas, três ou quatro sequências de escape que representem a codificação UTF-8 do caractere.
encodeURIComponent deve ser usado para codificar um componente URI – uma string que se suponha que seja parte de um URL.
encodeURI deve ser usado para codificar um URI ou um URL existente.

encodeURI() não codificará: ~!@#$&*()=:/,;?+'
encodeURIComponent() não codificará: ~!*()'

Os caracteres A-Z a-z 0-9 - _ . ! ~ * ' ( ) não recebem o "escape"

Quando codificar:
1- Ao aceitar uma entrada que possa ter espaços.
  encodeURI("http://www.mysite.com/a file with spaces.html") //Resultado: http://www.mysite.com/a%20file%20with%20spaces.html

2. Ao criar um URL a partir de parâmetros de consulta em formato de string.
  let param = encodeURIComponent('mango')
  let url = "http://mysite.com/?search=" + param + "&length=99"; //Resultado: http://mysite.com/?search=mango&length=99

3. Ao aceitar parâmetros de consulta que possam ter caracteres reservados.
   let params = encodeURIComponent('mango & pineapple')
   let url = "http://mysite.com/?search=" + params; //Resultado: http://mysite.com/?search=mango%20%26%20pineapple

Se tiver um URL completo, use encodeURI. Se, no entanto, tiver apenas parte de um URL, use encodeURIComponent.
*/
