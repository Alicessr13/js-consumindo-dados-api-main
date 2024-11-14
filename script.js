//síncrono = uma tarefa e concluida após a outra
//assíncrono = há tarefas executadas em segundo plano

let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse cep não existe!');
        }
        else
            console.log(r)
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído'));
//fetch = metodo assincrono que recebe a url da api, then = então, pega a resposta e faz algo, só faz se a promessa for resolvida, 
//catch = pegue, captura o erro que acontecer
//promise = promesa de que algo vai acontecer, pode retornar resolvida ou rejeitada

console.log(consultaCEP);