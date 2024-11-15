//síncrono = uma tarefa e concluida após a outra
//assíncrono = há tarefas executadas em segundo plano

async function buscaEndereco(cep) {
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCEPConverida = await consultaCEP.json();
        if (consultaCEPConverida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPConverida);
        return consultaCEPConverida;
    } catch (erro) {
        console.log(erro);
    }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

//let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error('Esse cep não existe!');
//     }
//     else
//         console.log(r)
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído'));
//promise = promesa de que algo vai acontecer, pode retornar resolvida ou rejeitada
//fetch = metodo assincrono que recebe a url da api, then = então, pega a resposta e faz algo, só faz se a promessa for resolvida,
//catch = pegue, captura o erro que acontecer
//finally = finalmente, independente da resposta da promessa ele vai retornar o finally

// let ceps = ['01001000', '88506040'];
// let conjuntoCep = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCep).then(respostas => console.log(respostas));

//Retornar uma promessa em JavaScript significa que uma função irá retornar um objeto do tipo Promise
//Quando uma função retorna uma promessa, ela está indicando que a operação realizada por essa função não será concluída imediatamente, mas sim em algum momento no futuro.
// No contexto do seu código, a função buscaEndereco() retorna uma promessa. Isso significa que, quando você chamar essa função, ela não irá retornar imediatamente o resultado
// da consulta ao ViaCEP. Em vez disso, ela retornará um objeto do tipo Promise, que você poderá usar para lidar com o resultado da operação assíncrona.
// Ao usar o map() para chamar a função buscaEndereco() para cada CEP, você está criando um array de promessas, que podem ser resolvidas posteriormente usando o Promise.all().
//Usa Promise.all() para aguardar que todas as promessas sejam resolvidas.
//Quando todas as promessas forem resolvidas, imprime o resultado no console.


//Embora o Async/Await e as Promises tenham algumas semelhanças, eles não são a mesma coisa.

// As principais diferenças são:

// Sintaxe:

// Promises usam .then(), .catch() e .finally() para lidar com o código assíncrono.
// Async/Await usa as palavras-chave async e await para escrever código assíncrono de forma mais linear e legível.
// Fluxo de controle:

// Promises mantêm o fluxo de controle assíncrono, com callbacks encadeados.
// Async/Await torna o código mais síncrono, com a execução pausada até que a operação assíncrona seja concluída.
// Tratamento de erros:

// Promises usam .catch() para lidar com erros.
// Async/Await permite usar o try/catch tradicional para tratar erros.
// Então, embora o await seja usado para aguardar o resultado de uma Promise,
// assim como o .then(), a abordagem Async/Await fornece uma sintaxe mais clara e fácil de entender para lidar com código assíncrono, em comparação com o encadeamento de Promises.

//o async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido.
//O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez.