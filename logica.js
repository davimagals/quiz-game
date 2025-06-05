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

telaInicial = document.querySelector(".tela-inicial");
telaPerg = document.querySelector(".tela-pergunta");
telaAcertou = document.querySelector(".tela-acertou");
telaErrou = document.querySelector(".tela-errou");

botaoIniciar = document.querySelector(".iniciar");
botaoIniciar.addEventListener("click", iniciarJogo);

divPergunta = document.querySelector(".pergunta");
botao0 = document.querySelector(".opcao0");
botao0.addEventListener("click", () => {
  if (objPergunta.correta == 0) {
    mostrarAcertou();
  } else {
    mostrarErrou();
  }
});

botao1 = document.querySelector(".opcao1");
botao1.addEventListener("click", () => {
  if (objPergunta.correta == 1) {
    mostrarAcertou();
  } else {
    mostrarErrou();
  }
});

botao2 = document.querySelector(".opcao2");
botao2.addEventListener("click", () => {
  if (objPergunta.correta == 2) {
    mostrarAcertou();
  } else {
    mostrarErrou();
  }
});

botao3 = document.querySelector(".opcao3");
botao3.addEventListener("click", () => {
  if (objPergunta.correta == 3) {
    mostrarAcertou();
  } else {
    mostrarErrou();
  }
});

telaAcertou.addEventListener("click", () => {
  telaAcertou.style.display = "none";
  iniciarJogo();
});

telaErrou.addEventListener("click", () => {
  telaErrou.style.display = "none";
  telaInicial.style.display = "block";
});

function iniciarJogo() {
  telaInicial.style.display = "none";
  telaPerg.style.display = "block";

  mostrarPergunta();
}

function mostrarPergunta() {
  aleatorio = Math.floor(Math.random() * listaPerguntas.length);
  objPergunta = listaPerguntas[aleatorio];

  textoPergunta = document.createTextNode(objPergunta.pergunta);
  divPergunta.innerHTML = "";
  divPergunta.appendChild(textoPergunta);

  txtOpcao1 = document.createTextNode(objPergunta.opcoes[0]);
  botao0.innerHTML = "";
  botao0.appendChild(txtOpcao1);

  txtOpcao2 = document.createTextNode(objPergunta.opcoes[1]);
  botao1.innerHTML = "";
  botao1.appendChild(txtOpcao2);

  txtOpcao3 = document.createTextNode(objPergunta.opcoes[2]);
  botao2.innerHTML = "";
  botao2.appendChild(txtOpcao3);

  txtOpcao4 = document.createTextNode(objPergunta.opcoes[3]);
  botao3.innerHTML = "";
  botao3.appendChild(txtOpcao4);
}

function mostrarAcertou() {
  telaPerg.style.display = "none";
  telaAcertou.style.display = "block";
}

function mostrarErrou() {
  telaPerg.style.display = "none";
  telaErrou.style.display = "block";
}
