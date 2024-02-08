const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um framework",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variable myVar = 10;",
        "let myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita",
        "Concatenação",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Seleciona múltiplos elementos",
        "Seleciona um elemento pelo ID",
        "Seleciona um elemento pelo nome da classe",
      ],
      correta: 2
    },
    {
      pergunta: "Como você pode comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "' Este é um comentário",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '2 + '2' em JavaScript?",
      respostas: [
        "4",
        "22",
        "Erro",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
      respostas: [
        "Math.floor()",
        "Math.round()",
        "Math.ceil()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (var i = 0; i < 5; i++)",
        "for i = 0; i < 5; i++",
        "para (i = 0; i < 5; i++)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de 'typeof null' em JavaScript?",
      respostas: [
        "'null'",
        "'object'",
        "'undefined'",
      ],
      correta: 2
    }
  ];
  
  //pegar o template do html
  // objeto document = transforma tudo em javascript
  //queryselector é uma ferramenta de pesquisa
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // CloneNode - loop ou laço de repetição (for) 
  // Content - conteúdo
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let respostas of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta -' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
  
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
  
     mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
    }
  
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  