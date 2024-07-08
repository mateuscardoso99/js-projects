// A API fetch provê ao navegador uma interface para a execução de requisições HTTP através de Promises.

// then - permite definir o bloco executado mediante o cumprimento de uma promise retornando um objeto do tipo Response.
// catch - permite definir o bloco executado mediante a rejeição de uma promise (Promise.reject)

//ex:
const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: Object.keys(body).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`).join('&')
}
return fetch('http://exemplo.com/usuario', options).then(resp => resp.json())

//o .catch() do fetch não captura os erros que a api retorna, só captura erros de rede, ele so considera falha quando não recebe uma resposta do servidor. então os errors precisam ser lançados manualmente
fetch('http://exemplo.com/usuario', options)
  .then(response => {
      // valida se a requisição falhou
      if (!response.ok) {
        return new Error('falhou a requisição') // cairá no catch da promise
      }

      // verificando pelo status
      if (response.status === 404) {
        return new Error('não encontrou qualquer resultado')
      }

      // retorna uma promise com os dados em JSON
      return response.json()
    })
    .catch(error => console.log(error))


//Ao receber a resposta de uma requisição o fetch conta com uma serie de métodos para fazer a conversão do conteúdo recebido que podemos ver melhor a seguir:

//json() - retorna a resposta da requisição em formato JSON.
//clone() - cria um clone da resposta da requisição.
//redirect() - cria uma nova resposta com uma URL diferente.
//formData() - retorna o resultado da requisição como um objeto do tipo FormData.
//arrayBuffer() - retorna a resposta da requisição como um ArrayBuffer.
//blob() - retorna a resposta da requisição como um Blob.
//text() - retorna a resposta da requisição como uma string.


//tratando erros
fetch("http://localhost:8090/test/error", {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            //Here body is not ready yet, throw promise
            if (!response.ok) throw result;
            return result.json();
        })
        .then(response => {
            //Successful request processing
            console.log(response);
        }).catch(error => {
            //Here is still promise
            console.log(error);
            error.json().then((body) => {
                //Here is already the payload from API
                console.log(body);
            });
        })


fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email: this.username,
      password: this.password,
    }),
  })
    .then((response) => {
      // 1. check response.ok
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response); // 2. reject instead of throw
    })
    .then((json) => {
      // all good, token is ready
      this.store.commit("token", json.access_token);
    })
    .catch((response) => {
      console.log(response.status, response.statusText);
      // 3. get error messages, if any
      response.json().then((json: any) => {
        console.log(json);
      })
    });
  
