let respostas = [];
const respostasCorretas = [
    { pergunta: "Qual é o sentimento que você tem ao escutar Beatriz?", respostaCorreta: "amor" },
    { pergunta: "Qual estilo de música que mais gosta em relação a names?", respostaCorreta: true },
    { pergunta: "Qual música da mixtape você mais se identificou?", respostaCorreta: true },
    { pergunta: "Qual música da mixtape 'Names' tem uma vibe mais romântica e suave?", respostaCorreta: "Beatriz" },
    { pergunta: "Qual música da mixtape 'Names' poderia ser descrita como a mais energética e dançante?", respostaCorreta: "Lorena" },
    { pergunta: "Qual música da mixtape 'Names' foi a última a ser produzida e finalizada?", respostaCorreta: "Guilherme" },
    { pergunta: "Quantas músicas estão incluídas na mixtape 'Names'?", respostaCorreta: '5' },
    { pergunta: "Qual é o título da mixtape que inclui as músicas 'Beatriz', 'Melissa', 'Maria', 'Lorena' e 'Guilherme'?", respostaCorreta: "Names" },
    { pergunta: "Em qual música da mixtape 'Names' o protagonista parece estar se despedindo de alguém querido?", respostaCorreta: "Guilherme" },
    { pergunta: "Se você quisesse escolher uma música da mixtape 'Names' para tocar em um evento de celebração, qual seria?", respostaCorreta: true },
];


function nextQuestion1() {
    const selectValue = document.getElementById('q1').value;
    const currentContainer = document.getElementById('q1-container');
    const nextContainer = document.getElementById('q2-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}

function nextQuestion2() {
    const selectValue = document.getElementById('q2').value;
    const currentContainer = document.getElementById('q2-container');
    const nextContainer = document.getElementById('q3-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}

function nextQuestion3() {
    const selectValue = document.getElementById('q3').value;
    const currentContainer = document.getElementById('q3-container');
    const nextContainer = document.getElementById('q4-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}

function nextQuestion4() {
    const selectValue = document.getElementById('q4').value;
    const currentContainer = document.getElementById('q4-container');
    const nextContainer = document.getElementById('q5-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}

function nextQuestion5() {
    const selectValue = document.getElementById('q5').value;
    const currentContainer = document.getElementById('q5-container');
    const nextContainer = document.getElementById('q6-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}

function nextQuestion6() {
    const selectValue = document.getElementById('q6').value;
    const currentContainer = document.getElementById('q6-container');
    const nextContainer = document.getElementById('q7-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}

function nextQuestion7() {
    const selectValue = document.getElementById('q7').value;
    const currentContainer = document.getElementById('q7-container');
    const nextContainer = document.getElementById('q8-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}

function nextQuestion8() {
    const selectValue = document.getElementById('q8').value;
    const currentContainer = document.getElementById('q8-container');
    const nextContainer = document.getElementById('q9-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}

function nextQuestion9() {
    const selectValue = document.getElementById('q9').value;
    const currentContainer = document.getElementById('q9-container');
    const nextContainer = document.getElementById('q10-container');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção antes de avançar.');
    }
}
let totalAcertos = 0
let totalErros = 0
var id_usuario = sessionStorage.ID_USUARIO
function enviar() {
    const selectValue = document.getElementById('q10').value;
    const currentContainer = document.getElementById('q10-container');
    const nextContainer = document.getElementById('container_final');

    if (selectValue !== '') {
        respostas.push(selectValue);
        currentContainer.style.display = 'none';
        nextContainer.style.display = 'block';
        exibirRespostas()
    } else {
        alert('Por favor, selecione uma opção antes de enviar.');
    }
    fetch("/quizRoute/cadastrarDadosQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/quiz.js
          id_UsuarioServer: id_usuario,
          totalAcertosServer: totalAcertos

        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
  
          if (resposta.ok) {

            console.log("Dados do quiz cadastrados com sucesso!");
  
            setTimeout(() => {
             // window.location = "Login.html";
            }, "2000");
  
          } else {
            throw "Houve um erro ao tentar realizar o cadastro do dados do quiz!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
  
      return false;
    }

    
function exibirRespostas() {
    const respostasContainer = document.getElementById('respostas_quiz');


    for (let i = 0; i < respostas.length; i++) {
        const resposta = respostas[i];
        const elementoResposta = document.createElement('p');
        const perguntaNumero = i + 1; // Definindo o número da pergunta
        // Verifica se a resposta está correta
        if (i === 1 || i === 2 || i === 9) {
            elementoResposta.textContent = `${perguntaNumero}: ${resposta}`;
            elementoResposta.classList.add('resposta-correta');
            totalAcertos++
        }else if (resposta === respostasCorretas[i].respostaCorreta) {
            elementoResposta.textContent = `${perguntaNumero}: ${resposta}`;
            elementoResposta.classList.add('resposta-correta');
            totalAcertos++
        } else {
            elementoResposta.textContent = `${perguntaNumero}: ${resposta}`;
            elementoResposta.classList.add('resposta-incorreta');
            totalErros++
        }

        // Adiciona a resposta ao contêiner
        respostasContainer.appendChild(elementoResposta);
    }
}


function recomecarQuiz() {
    respostas = []
    totalAcertos = 0
    totalErros = 0
    const respostasContainer = document.getElementById('respostas_quiz');
    respostasContainer.innerHTML = ''; // Limpa o conteúdo anterior
    // Ocultar a div de respostas
    const containerFinal = document.getElementById('container_final');
    containerFinal.style.display = 'none';

    // Exibir a primeira pergunta
    const primeiraPergunta = document.getElementById('q1-container');
    primeiraPergunta.style.display = 'block';

    const selects = document.querySelectorAll('select');
       // Limpa os selects
       selects.forEach(select => {
        select.value = ''; // Define o valor padrão como vazio
    });
}
