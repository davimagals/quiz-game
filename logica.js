listaPerguntas = [
  {
    pergunta: "Qual o maior ser vivo?",
    opcoes: ["Baleia Azul", "Fungo de Mel", "Elefante", "Girafa"],
    correta: 1,
  },
  {
    pergunta: "Qual a primeira capital do Brasil?",
    opcoes: ["Taquara", "Brasilia", "Salvador", "Rio de Janeiro"],
    correta: 2,
  },
  {
    pergunta: "Em que ano o Brasil ganhou sua segunda Copa do Mundo?",
    opcoes: ["1974", "1970", "1966", "1962"],
    correta: 3,
  },
];

objPergunta = null;

botaoIniciar = document.querySelector(".iniciar");
botaoIniciar.addEventListener("click", iniciarJogo);

function iniciarJogo() {
  telaInicial = document.querySelector(".tela-inicial");
  telaInicial.style.display = "none";

  telaPerg = document.querySelector(".tela-pergunta");
  telaPerg.style.display = "block";

  mostrarPergunta();
  prepararBotoes();
}

function mostrarPergunta() {
  aleatorio = Math.floor(Math.random() * listaPerguntas.length);
  objPergunta = listaPerguntas[aleatorio];

  textoPergunta = document.createTextNode(objPergunta.pergunta);
  divPergunta = document.querySelector(".pergunta");
  divPergunta.innerHTML = "";
  divPergunta.appendChild(textoPergunta);

  txtOpcao1 = document.createTextNode(objPergunta.opcoes[0]);
  botao0 = document.querySelector(".opcao0");
  botao0.innerHTML = "";
  botao0.appendChild(txtOpcao1);

  txtOpcao2 = document.createTextNode(objPergunta.opcoes[1]);
  botao1 = document.querySelector(".opcao1");
  botao1.innerHTML = "";
  botao1.appendChild(txtOpcao2);

  txtOpcao3 = document.createTextNode(objPergunta.opcoes[2]);
  botao2 = document.querySelector(".opcao2");
  botao2.innerHTML = "";
  botao2.appendChild(txtOpcao3);

  txtOpcao4 = document.createTextNode(objPergunta.opcoes[3]);
  botao3 = document.querySelector(".opcao3");
  botao3.innerHTML = "";
  botao3.appendChild(txtOpcao4);
}

function prepararBotoes() {
  botao0 = document.querySelector(".opcao0");
  botao1 = document.querySelector(".opcao1");
  botao2 = document.querySelector(".opcao2");
  botao3 = document.querySelector(".opcao3");
  continuar = document.querySelector(".tela-acertou");
  voltar = document.querySelector(".tela-errou");

  botao0.addEventListener("click", () => {
    if (objPergunta.correta == 0) {
      mostrarTelaAcertou();
    } else {
      mostrarTelaErrou();
    }
  });

  botao1.addEventListener("click", () => {
    if (objPergunta.correta == 1) {
      mostrarTelaAcertou();
    } else {
      mostrarTelaErrou();
    }
  });

  botao2.addEventListener("click", () => {
    if (objPergunta.correta == 2) {
      mostrarTelaAcertou();
    } else {
      mostrarTelaErrou();
    }
  });

  botao3.addEventListener("click", () => {
    if (objPergunta.correta == 3) {
      mostrarTelaAcertou();
    } else {
      mostrarTelaErrou();
    }
  });

  continuar.addEventListener("click", () => {
    iniciarJogo();
  });

  voltar.addEventListener("click", () => {
    mostrarInicio();
  });
}

function mostrarTelaAcertou() {
  telaPerg = document.querySelector(".tela-pergunta");
  telaPerg.style.display = "none";

  telaAcertou = document.querySelector(".tela-acertou");
  telaAcertou.style.display = "block";
}

function mostrarTelaErrou() {
  telaPerg = document.querySelector(".tela-pergunta");
  telaPerg.style.display = "none";

  telaErrou = document.querySelector(".tela-errou");
  telaErrou.style.display = "block";
}

function mostrarInicio() {
  telaErrou = document.querySelector(".tela-errou");
  telaErrou.style.display = "none";

  telaInicial = document.querySelector(".tela-inicial");
  telaInicial.style.display = "block";
}
