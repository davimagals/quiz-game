
listaPerguntas = [
  {
    pergunta: "Qual o maior ser vivo?",
    opcoes: [
      "Baleia Azul",
      "Fungo de Mel",
      "Elefante",
      "Girafa"
    ],
    correta: 1
  },
  {
    pergunta: "Qual a primeira capital do Brasil?",
    opcoes: [
      "Taquara",
      "Brasilia",
      "Salvador",
      "Rio de Janeiro"
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano o Brasil ganhou sua segunda Copa do Mundo?",
    opcoes: [
      "1974",
      "1970",
      "1966",
      "1962"
    ],
    correta: 3
  },
]

pergunta = null

botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telaPerg = document.querySelector(".tela-pergunta")
  telaPerg.style.display = "block"
  
  mostrarPergunta()
}

function mostrarPergunta() {
  pergunta = listaPerguntas[0]
  
  console.log(pergunta)
}