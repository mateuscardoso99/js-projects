/*
Nodes: No DOM, todas as partes do documento, como elementos, atributos, texto, etc. são organizadas em uma estrutura hierárquica semelhante a uma árvore; 
composto por pais e filhos. Essas partes individuais do documento são conhecidas como nós ou nodes

Element: é um tipo específico de nó que representa um elemento HTML ou XML

attributes: atributos do elemento (name, id, value, class...)
childNodes: coleção ordenada de objetos node que são filhos do elemento corrente. Se o elemento não tem filhos, então listaNos não contém nenhum nó
classList: retorna lista de classes do elemento
children: retorna um HTMLCollection que contém todos os filhos do element sobre o qual foi chamada
firstChild: retorna o primeiro filho do nó na árvore, ou null se o nó não tiver filhos.
firstElementChild: retorna o primeiro filho de Element ou null se não houver elementos filhos.
lastChild: retorna o último elemento filho (node) de uma estrutura DOM
lastElementChild: retorna o último filho de um Element ou null se não houver elementos filhos.
nextSibling: próximo irmão do nó atual, ou null se não houver nenhum.
parentNode: retorna o pai do nó especificado na árvore DOM.
parentElement: retorna o pai do de um Element ou null se o nó não tiver pai ou se seu pai não for um DOM Element.
previousElementSibling: retorna o irmão anterior ou null se não houver nenhum.
previousSibling: retorna o irmão anterior de um Node ou null se não houver nenhum.
innerText: altera o conteúdo de um elemento de sua página (DOM) com o conteúdo tratado apenas como texto. ex: document.getElementById('Teste').innerText = '<b>teste</b>' Irá exibir: <b>teste</b>
innerHTML altera o conteúdo de um elemento com o conteúdo tratado como HTML. ex: document.getElementById('Teste').innerHTML = '<b>teste</b>' Irá exibir: teste
textContent: representa o conteúdo de texto do nó e seus descendentes, não permite inserir HTML, se tentar vai mostrar tudo como texto
removeChild(child): remove um nó filho do DOM e retorna o nó removido. **antigo
remove(child): remove um nó filho do DOM e NÂO retorna o nó removido.
createElement(): Cria um novo nó de elemento com a tag fornecida.
appendChild(): adiciona um nó ao final da lista de filhos de um nó pai especificado. **antigo
append(): adiciona um nó ou uma string ao final da lista de filhos de um nó pai especificado, se tentar inserir HTML como texto "<p>teste</p>" vai mostrar tudo como texto, parâmetro precisa ser um nó
prepend(): insira nós ou strings no início de node.
before(): insira nós ou strings antes node.
after(): insira nós ou strings depois node.
insertAdjacentHTML(): insere uma string como uma tag html ex: div.insertAdjacentHTML('beforebegin', '<p>Hello</p>'); beforebegin: inserir html imediatamente antes de div, exite tbm afterbegin, beforeend, afterend
insertBefore(): insere um nó antes do nó de referência como um filho de um nó pai especificado. **antigo
cloneNode(): clona o elemento


XSS:



*/
