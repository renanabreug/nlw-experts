const perguntas = [
    {
      pergunta: "O que significa o acrônimo 'DOM' em JavaScript?",
      respostas: [
        "Documento de Objetos Múltiplos",
        "Modelo de Objeto de Documento",
        "Domínio de Operações Múltiplas",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara valores sem verificar o tipo",
        "Compara valores e verifica o tipo",
        "Realiza uma atribuição",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar =;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Levantamento de objetos",
        "Elevação de variáveis",
        "Execução de funções",
      ],
      correta: 1
    },
    {
      pergunta: "Como você adiciona um evento de clique a um elemento HTML em JavaScript?",
      respostas: [
        "elemento.onClick = function() {...}",
        "elemento.addEventListener('click', function() {...})",
        "elemento.click(function() {...})",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São equivalentes e podem ser usados de forma intercambiável",
        "'null' é atribuído quando uma variável é declarada, 'undefined' quando não é inicializada",
        "'undefined' é atribuído quando uma variável é declarada, 'null' quando não é inicializada",
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "string.toNumber()",
        "parseInt(string)",
        "number(string)",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma 'closure' em JavaScript?",
      respostas: [
        "Um tipo de variável global",
        "Uma função aninhada que tem acesso às variáveis de sua função externa",
        "Um operador utilizado para fechar loops",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis que não podem ser modificadas, 'const' para variáveis que podem",
        "'let' permite reatribuição, 'const' cria variáveis de escopo local",
        "'let' cria variáveis de escopo local, 'const' permite reatribuição",
      ],
      correta: 2
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Um novo tipo de estrutura de dados",
        "Uma técnica para atualizar parcialmente uma página sem recarregar a página inteira",
        "Um método para manipular arrays em JavaScript",
      ],
      correta: 1
    },
  ];
  
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
    
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
          
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
          quizItem.querySelector('dl').appendChild(dt)
        }
      
      quizItem.querySelector('dl dt').remove()
      
      
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }