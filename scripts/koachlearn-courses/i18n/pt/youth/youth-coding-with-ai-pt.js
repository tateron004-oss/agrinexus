"use strict";

// Koach Learn course (Portuguese translation of youth/youth-coding-with-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python code is kept exactly as in the English.

module.exports = {
  id: "youth-coding-with-ai-pt",
  lang: "pt",
  translationOf: "youth-coding-with-ai",
  category: "Youth",
  name: "Introdução à Programação com IA",
  skills: "Executar Python num caderno online gratuito, Usar variáveis e input, Tomar decisões com if, Repetir com ciclos, Pedir à IA para explicar e corrigir código",
  outcome: "escrever e executar um pequeno jogo de perguntas em Python num caderno online gratuito, usando um assistente de IA para explicar o código e ajudar a corrigir erros, e explicar o que faz cada linha do seu programa.",
  about: [
    "Este curso é para jovens que nunca programaram, ou que já tentaram uma vez e ficaram presos. Não precisa de ser bom a matemática. Precisa de curiosidade e de cerca de cinco minutos por lição.",
    "Você vai escrever código Python verdadeiro no Google Colab, um caderno gratuito que funciona num navegador de internet, por isso pode usar um computador da escola ou da biblioteca. Vai aprender as peças básicas do código e depois aprender a usar um assistente de IA como um professor paciente: para explicar código, encontrar erros e sugerir ideias, enquanto você continua a ser quem entende e escreve o programa.",
    "Antes de criar conta em qualquer ferramenta, veja as regras da sua escola sobre o uso de IA e a idade mínima da ferramenta, e envolva um pai, uma mãe ou um responsável. Cada lição acaba com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Construa um jogo de perguntas em Python no Google Colab com pelo menos 5 perguntas sobre um tema de que gosta (um jogo, um desporto, uma banda, uma disciplina da escola). Tem de perguntar o nome do jogador, fazer as perguntas, contar os pontos e mostrar uma mensagem final. Use um assistente de IA para explicar ou corrigir pelo menos uma parte e depois escreva um comentário por cima de cada parte a dizer com as suas palavras o que ela faz.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens que nunca programaram, ou que já tentaram uma vez e ficaram presos, incluindo os que não se acham bons a matemática.",
    startingPoint: "Usam telefones, aplicações e jogos todos os dias e sabem usar um navegador de internet. Nunca escreveram nem executaram um programa, e talvez já tenham visto a IA escrever código sem saber como funciona.",
    gap: "A programação abre portas a empregos na tecnologia e torna a IA menos misteriosa, mas copiar código da IA não ensina nada e vai contra as regras da escola em muitas turmas. Os jovens precisam de escrever e executar Python verdadeiro eles próprios, usando a IA como professor para explicar código e corrigir erros.",
    constraints: [
      "Limites de idade: o Colab precisa de uma conta Google e as ferramentas de IA têm idades mínimas; um pai, uma mãe ou um responsável participa no caso de menores de 18 anos",
      "As regras das escolas sobre IA são diferentes; os trabalhos com nota podem não permitir IA",
      "Aparelhos: um computador da escola, da biblioteca ou de casa com navegador de internet; nada para instalar",
      "Privacidade: nada de palavras-passe, moradas, documentos de identificação ou números de telefone colados em ferramentas de IA",
      "Principiantes: palavras simples, cada termo explicado, cerca de cinco minutos por lição"
    ],
    prerequisites: "Nenhum. \"O que é a IA? (para Jovens)\" é um bom primeiro curso."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as suas palavras", action: "explicar o que são código e um programa, e como usar a IA como professor e não como alguém que faz o trabalho por você, dentro das regras da sua escola", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Usando uma conta Google que pode usar", action: "abrir um caderno do Google Colab e executar código Python que mostra texto", standard: "sem ajuda, com o resultado a aparecer por baixo da célula" },
    { id: "O3", condition: "Com um jogo de uma pergunta para construir", action: "escrever Python que usa uma variável, input, if e else, e um ciclo", standard: "de modo que funcione bem tanto com uma resposta certa como com uma errada" },
    { id: "O4", condition: "Com algumas linhas de código", action: "pedir a um assistente de IA para explicar o código linha a linha, depois mudar uma coisa, prever o resultado e executá-lo", standard: "sem colar nenhuma informação privada" },
    { id: "O5", condition: "Com uma mensagem de erro do Python", action: "encontrar a linha com o problema, corrigir o erro com a ajuda da IA se for preciso e executar você mesmo a correção", standard: "até o programa funcionar sem erros" },
    { id: "O6", condition: "Partindo de um plano escrito como comentários", action: "construir um jogo de 5 perguntas uma parte de cada vez e dizer como usou a IA", standard: "com o nome do jogador, os pontos, uma mensagem final e um comentário por cima de cada parte com as suas palavras" }
  ],
  chapters: [
    {
      name: "Capítulo 1: As suas primeiras linhas de código",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é código, e onde entra a IA",
          minutes: 4,
          goal: "Explicar o que é um programa e como um assistente de IA pode ajudar você a aprender a programar.",
          text: [
            "Código é uma lista de instruções que um computador segue exatamente, pela ordem. Um programa é um conjunto dessas instruções que faz um trabalho, como um jogo, uma aplicação ou uma calculadora. O Python é uma linguagem de programação conhecida porque as suas palavras se parecem muito com o inglês.",
            "Assistentes de IA como o ChatGPT, o Microsoft Copilot e o Google Gemini conseguem escrever e explicar código. Isso é útil, mas se copiar código que não entende, não aprende nada e não o consegue corrigir quando avaria. Neste curso, a IA é o seu professor, não alguém que faz o trabalho por você.",
            "As escolas têm regras diferentes sobre a IA. Algumas turmas permitem-na para praticar, mas não nos trabalhos com nota. Veja sempre as regras do seu professor e diga quando usou IA. Muitas ferramentas de IA também têm uma idade mínima, por isso leia as condições da ferramenta e pergunte a um pai, uma mãe ou um responsável antes de criar conta."
          ],
          words: [["Código", "instruções escritas para um computador seguir."], ["Programa", "um conjunto de instruções que faz um trabalho."], ["Python", "uma linguagem de programação conhecida e fácil de ler."]],
          slides: [
            { title: "Código são instruções", bullets: ["O computador segue-as exatamente, pela ordem", "Um programa é código que faz um trabalho", "O Python lê-se quase como inglês"] },
            { title: "A IA é o seu professor", bullets: ["Pode explicar código linha a linha", "Pode ajudar a encontrar erros", "Não copie código que não entende"] },
            { title: "Antes de começar", bullets: ["Veja as regras de IA da sua escola", "Veja a idade mínima da ferramenta", "Pergunte a um responsável antes de criar conta"] }
          ],
          tryIt: "Escreva um pequeno programa que gostaria de construir um dia, como um jogo de perguntas sobre o seu jogo preferido ou uma calculadora de gorjetas para o seu primeiro emprego. Depois escreva uma frase sobre como a IA podia ajudar você a aprendê-lo sem fazer o trabalho por você.",
          youCanNow: "dizer o que são código e um programa, e explicar como usar a IA como professor e não como atalho.",
          quickCheck: [
            { objective: "O1", q: "Porque é que o Python é uma primeira linguagem de programação conhecida?", options: ["Só funciona em telefones", "Não precisa de computador", "As suas palavras parecem-se muito com o inglês", "Escreve-se sozinho"], answer: 2, why: "As palavras do Python parecem-se muito com o inglês, o que o torna mais fácil de ler." },
            { objective: "O1", q: "Um amigo diz: \"Põe a IA a escrever o programa todo e entrega.\" O que responde?", options: ["Vou usar a IA como professor e escrever eu o código, seguindo as regras do professor", "Boa ideia; ninguém vai saber", "Só se parecer difícil", "Copio, mas mudo os nomes"], answer: 0, why: "Copiar código que não entende não ensina nada e pode ir contra as regras da escola." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Executar o seu primeiro código Python no Google Colab",
          minutes: 5,
          goal: "Abrir um caderno gratuito do Colab e executar uma linha de Python.",
          text: [
            "O Google Colab é um caderno gratuito que executa Python no seu navegador de internet. Não precisa de instalar nada. Precisa de uma conta Google. Veja as regras de idade e, se tiver menos de 18 anos, pergunte primeiro a um pai, uma mãe ou um responsável; uma conta Google da escola pode servir, se a escola permitir o Colab.",
            "Um caderno é feito de células. Uma célula de código é uma caixa onde escreve Python. Carrega no botão de play ao lado da célula (ou em Shift e Enter) para a executar, e o resultado aparece por baixo.",
            "O primeiro comando que a maioria dos programadores aprende é o print. Ele mostra palavras no ecrã. O texto vai entre aspas, assim: print(\"Hello, I am learning Python\")."
          ],
          steps: ["Abra um navegador de internet e vá a colab.research.google.com.", "Inicie sessão com uma conta Google que pode usar.", "Crie um caderno novo.", "Clique na primeira célula de código e escreva: print(\"Hello, I am learning Python\")", "Carregue no botão de play ou em Shift e Enter. Leia o resultado por baixo da célula."],
          words: [["Caderno (notebook)", "uma página onde escreve e executa código em pequenas caixas chamadas células."], ["Célula", "uma caixa de um caderno onde escreve código."], ["Resultado (output)", "o que o programa mostra depois de ser executado."]],
          slides: [
            { title: "Google Colab", bullets: ["Python gratuito no seu navegador de internet", "Nada para instalar", "Precisa de uma conta Google que pode usar"] },
            { title: "Cadernos e células", bullets: ["Escreva código numa célula", "Carregue em play ou em Shift + Enter", "O resultado aparece por baixo"] },
            { title: "O seu primeiro comando", bullets: ["print(\"Hello, I am learning Python\")", "O texto vai entre aspas", "O print mostra-o no ecrã"] }
          ],
          tryIt: "Num caderno novo do Colab, mostre três linhas com print: o seu primeiro nome, a sua música ou jogo preferido e um objetivo para este curso. Execute a célula e veja se as três linhas aparecem.",
          youCanNow: "abrir um caderno do Colab, escrever Python numa célula, executá-la e ler o resultado.",
          quickCheck: [
            { objective: "O2", q: "Em Python, o que faz o print?", options: ["Envia o seu código para uma impressora", "Mostra palavras ou valores no ecrã", "Apaga uma célula", "Guarda o caderno"], answer: 1, why: "O print mostra texto ou valores por baixo da célula quando ela é executada." },
            { objective: "O2", q: "Tem 14 anos e quer usar o Colab em casa. O que faz primeiro?", options: ["Cria uma conta com uma idade falsa", "Usa a conta de um desconhecido", "Desiste do Colab", "Vê as regras de idade e pergunta a um responsável, ou usa uma conta da escola permitida"], answer: 3, why: "O Colab precisa de uma conta Google; veja as regras e envolva um pai, uma mãe ou um responsável se tiver menos de 18 anos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Variáveis, input, if e ciclos",
          minutes: 6,
          goal: "Usar uma variável, pedir input, tomar uma decisão com if e repetir com um ciclo.",
          text: [
            "Uma variável é uma caixa com nome que guarda um valor. score = 0 cria uma caixa chamada score e põe 0 lá dentro. Mais tarde, score = score + 1 junta um ponto.",
            "O input pede ao jogador para escrever alguma coisa: name = input(\"What is your name? \"). Uma instrução if toma uma decisão: if answer == \"Paris\": print(\"Correct!\") else: print(\"Not quite\"). Dois sinais de igual querem dizer \"é o mesmo que\". As linhas por baixo do if e do else são empurradas para dentro com espaços; a isto chama-se indentação, e o Python precisa dela.",
            "Um ciclo repete código. for i in range(3): print(\"Go team!\") mostra a claque três vezes. Estas quatro ideias, variáveis, input, if e ciclos, chegam para construir um jogo de perguntas."
          ],
          steps: ["Crie uma variável: score = 0", "Peça input: name = input(\"What is your name? \")", "Tome uma decisão com if e else, indentando as linhas por baixo de cada um.", "Repita alguma coisa com: for i in range(3):"],
          words: [["Variável", "uma caixa com nome que guarda um valor."], ["Input", "algo que o utilizador escreve enquanto o programa funciona."], ["Instrução if", "código que só é executado quando uma coisa é verdade."], ["Ciclo (loop)", "código que se repete."], ["Indentação", "espaços no início de uma linha que mostram que linhas andam juntas."]],
          slides: [
            { title: "As variáveis guardam valores", bullets: ["score = 0", "score = score + 1 junta um ponto"] },
            { title: "Input e if", bullets: ["name = input(\"What is your name? \")", "if answer == \"Paris\": e depois mostra Correct", "== quer dizer \"é o mesmo que\""] },
            { title: "Os ciclos repetem", bullets: ["for i in range(3): repete 3 vezes", "Indente as linhas dentro do ciclo"] },
            { title: "Quatro peças básicas", bullets: ["Variáveis, input, if, ciclos", "Chegam para construir um jogo de perguntas"] }
          ],
          tryIt: "Escreva um jogo de uma pergunta: pergunte o nome do jogador, faça uma pergunta sobre a sua disciplina ou jogo preferido e use if e else para mostrar \"Certo\" ou \"Quase\". Execute-o duas vezes, uma com a resposta certa e outra com uma errada.",
          youCanNow: "usar uma variável, input, uma instrução if e um ciclo num pequeno programa em Python.",
          quickCheck: [
            { objective: "O3", q: "O que é a indentação em Python?", options: ["Um tipo de erro", "Os espaços que empurram as linhas para dentro por baixo de um if, else ou ciclo", "Uma linha de comentário", "O botão de play"], answer: 1, why: "A indentação mostra que linhas pertencem a um if, else ou ciclo, e o Python precisa dela." },
            { objective: "O3", q: "Quer que o jogo junte um ponto por cada resposta certa. Que linha escreve por baixo do if?", options: ["score = score + 1", "print(score)", "score == 1", "input(score)"], answer: 0, why: "score = score + 1 junta um ponto ao valor guardado em score." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: As suas primeiras linhas de código",
        questions: [
          { objective: "O1", q: "O que é um programa?", options: ["Um conjunto de instruções que faz um trabalho", "Um tipo de teclado", "Um endereço de site", "Uma consola de jogos"], answer: 0, why: "Um programa é código, um conjunto de instruções, que faz um trabalho." },
          { objective: "O1", q: "A sua turma permite IA para praticar, mas não nos trabalhos de casa com nota. O que faz?", options: ["Usa IA no trabalho de casa na mesma", "Usa IA para praticar e faz você mesmo o trabalho com nota", "Nunca mais programa", "Pede a um amigo para usar IA por você"], answer: 1, why: "Seguir as regras do professor faz parte de usar a IA com honestidade." },
          { objective: "O2", q: "No Colab, como executa uma célula de código?", options: ["Fecha o navegador", "Imprime a página", "Carrega no botão de play ou em Shift e Enter", "Reinicia o computador"], answer: 2, why: "O botão de play ou Shift e Enter executa a célula." },
          { objective: "O3", q: "O que faz score = score + 1?", options: ["Apaga os pontos", "Mostra a palavra score", "Pede os pontos ao jogador", "Junta um ao valor guardado em score"], answer: 3, why: "Pega nos pontos atuais e junta um." },
          { objective: "O3", q: "O que faz for i in range(3):?", options: ["Repete 3 vezes o código indentado", "Faz 3 perguntas", "Cria 3 variáveis", "Para o programa"], answer: 0, why: "Um ciclo for com range(3) repete três vezes o código que está dentro dele." }
        ]
      }
    },
    {
      name: "Capítulo 2: Programar com a ajuda da IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir à IA para explicar código",
          minutes: 5,
          goal: "Pedir a um assistente de IA para explicar um pedaço de código linha a linha e confirmar que o entende.",
          text: [
            "Cole algumas linhas de código num assistente de IA e peça: \"Explique este código Python linha a linha para um principiante. Use palavras simples.\" Uma boa explicação diz o que faz cada linha e porquê.",
            "Depois teste se entendeu. Mude uma coisa no código, adivinhe o que vai acontecer e execute-o. Se acertou, entendeu. Se não, pergunte à IA: \"Mudei isto e esperava aquilo. Porque fez outra coisa?\"",
            "Não cole informações privadas numa ferramenta de IA: nada de palavras-passe, morada de casa, números de aluno ou números de telefone. O código de um projeto da escola não precisa de nenhum deles."
          ],
          steps: ["Copie de 3 a 10 linhas de código.", "Peça: \"Explique este código Python linha a linha para um principiante.\"", "Mude uma coisa e adivinhe o que vai acontecer.", "Execute e compare. Faça uma pergunta de seguimento se não acertou."],
          words: [["Explicar linha a linha", "passar pelo código uma linha de cada vez e dizer o que cada uma faz."]],
          slides: [
            { title: "Peça uma explicação", bullets: ["Cole algumas linhas", "\"Explique isto linha a linha para um principiante\"", "Peça palavras simples"] },
            { title: "Teste se entendeu", bullets: ["Mude uma coisa", "Adivinhe o que vai acontecer", "Execute e compare"] },
            { title: "Informações privadas de fora", bullets: ["Nada de palavras-passe nem números de aluno", "Nada de morada de casa nem número de telefone"] }
          ],
          tryIt: "Cole o seu jogo de uma pergunta da Lição 3 num assistente de IA e peça-lhe para explicar cada linha. Depois troque a resposta certa por outra nova, adivinhe o que vai acontecer e execute-o.",
          youCanNow: "obter da IA uma explicação clara de código linha a linha e testar se o entende mesmo.",
          quickCheck: [
            { objective: "O4", q: "O que torna boa uma explicação de código feita pela IA?", options: ["Ser o mais longa possível", "Dar só a resposta", "Dizer o que faz cada linha e porquê", "Reescrever tudo"], answer: 2, why: "Uma boa explicação diz o que faz cada linha e porquê, com palavras simples." },
            { objective: "O4", q: "Mudou uma linha, adivinhou o resultado e o programa fez outra coisa. E agora?", options: ["Apaga o programa", "Pergunta à IA: \"Mudei isto e esperava aquilo. Porque fez outra coisa?\"", "Adivinha outra vez sem executar", "Cola a sua palavra-passe para a IA verificar"], answer: 1, why: "Uma pergunta de seguimento que explica o que esperava ajuda você a entender o código." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar e corrigir erros com a IA",
          minutes: 5,
          goal: "Ler uma mensagem de erro e usar a IA para ajudar a corrigir um erro no código.",
          text: [
            "Um bug é um erro no código. Quando o Python não consegue executar uma linha, mostra uma mensagem de erro. A última linha da mensagem costuma dizer o nome do problema, como SyntaxError (algo foi mal escrito) ou IndentationError (os espaços no início de uma linha estão errados). Também mostra o número da linha.",
            "Primeiro tente você: veja nessa linha se falta uma aspa, um parêntese, dois pontos ou um espaço. Se ficar preso, cole o código e o erro completo num assistente de IA e pergunte: \"O que quer dizer este erro e como o corrijo? Explique porquê.\"",
            "A IA também se pode enganar no código. Execute você mesmo a versão corrigida. Se o erro mudar ou continuar, diga à IA exatamente o que aconteceu."
          ],
          steps: ["Leia a última linha da mensagem de erro e o número da linha.", "Veja nessa linha se faltam aspas, parênteses, dois pontos ou espaços.", "Se ficar preso, cole o código e o erro completo num assistente de IA.", "Pergunte o que quer dizer e porque é que a correção funciona.", "Execute você mesmo a correção e veja se funciona."],
          words: [["Bug", "um erro no código."], ["Mensagem de erro", "o aviso do Python que diz o que correu mal e em que linha."], ["Depuração (debugging)", "encontrar e corrigir bugs."]],
          slides: [
            { title: "Os bugs acontecem a todos", bullets: ["As mensagens de erro são pistas, não fracassos", "Leia a última linha e o número da linha"] },
            { title: "Primeiro tente você", bullets: ["Falta uma aspa ou um parêntese?", "Faltam os dois pontos depois do if ou do for?", "Espaços errados no início de uma linha?"] },
            { title: "Depois pergunte à IA", bullets: ["Cole o código e o erro completo", "Pergunte o que quer dizer e porque a correção funciona", "Execute você mesmo a correção"] }
          ],
          tryIt: "No seu jogo, apague de propósito os dois pontos depois da linha do if e execute-o. Leia o erro. Peça a um assistente de IA para o explicar, corrija-o e execute o programa outra vez.",
          youCanNow: "ler uma mensagem de erro do Python, procurar o problema e usar a IA para entender e corrigir um bug.",
          quickCheck: [
            { objective: "O5", q: "O que costuma querer dizer um SyntaxError?", options: ["O computador está avariado", "A internet foi abaixo", "A sua resposta estava errada", "Algo foi mal escrito, como uma aspa ou dois pontos em falta"], answer: 3, why: "Um SyntaxError quer dizer que o Python não consegue ler algo que você escreveu." },
            { objective: "O5", q: "O Python mostra um erro na linha 4. O que verifica primeiro?", options: ["A linha 4, para ver se falta uma aspa, um parêntese, dois pontos ou um espaço", "Só a linha 1", "A velocidade da sua internet", "Nada; reinicia o computador"], answer: 0, why: "A mensagem mostra o número da linha; verifique primeiro você mesmo essa linha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Construir o seu jogo de perguntas",
          minutes: 6,
          goal: "Planear e construir um jogo de 5 perguntas com a IA como ajudante.",
          text: [
            "Os programas grandes são feitos de pedaços pequenos. Planeie primeiro: o que o programa diz no início, o que pergunta, como conta os pontos e o que diz no fim. Escreva o plano como comentários curtos. Um comentário começa com # e o Python ignora-o.",
            "Construa uma parte de cada vez e execute depois de cada parte. Se quiser uma ideia, pergunte à IA: \"Como posso fazer o meu jogo dizer ao jogador os pontos que teve em 5?\" Depois escreva você mesmo e peça à IA para verificar.",
            "Quando funcionar, peça a um amigo ou familiar para jogar. Veja onde ele fica confuso e melhore. Se o entregar na escola, diga como usou a IA."
          ],
          steps: ["Escreva um plano como comentários #: boas-vindas, perguntas, pontos, final.", "Programe as boas-vindas e pergunte o nome do jogador. Execute.", "Junte uma pergunta com if e else que muda os pontos. Execute.", "Junte mais quatro perguntas. Execute.", "Mostre os pontos finais e uma mensagem. Deixe alguém jogar."],
          words: [["Comentário", "uma nota no código que começa com # e que o Python ignora."], ["Plano", "uma lista curta do que o seu programa vai fazer, pela ordem."]],
          slides: [
            { title: "Planeie com comentários", bullets: ["# boas-vindas", "# fazer 5 perguntas", "# contar os pontos", "# mensagem final"] },
            { title: "Construa em pedaços pequenos", bullets: ["Junte uma parte", "Execute", "Corrija e depois junte a seguinte"] },
            { title: "A IA como ajudante", bullets: ["Peça ideias e depois escreva você mesmo", "Peça à IA para verificar o seu código", "Diga como usou a IA nos trabalhos da escola"] },
            { title: "Teste com um jogador verdadeiro", bullets: ["Deixe um amigo jogar", "Veja onde ele fica confuso", "Melhore"] }
          ],
          tryIt: "Tarefa final: construa no Colab um jogo de perguntas em Python com pelo menos 5 perguntas sobre um tema de que gosta. Pergunte o nome do jogador, conte os pontos, mostre uma mensagem final, use a IA para explicar ou corrigir uma parte e escreva um comentário por cima de cada parte com as suas palavras.",
          youCanNow: "planear, construir, testar e explicar um pequeno programa em Python, usando a IA como ajudante e não como substituto.",
          quickCheck: [
            { objective: "O6", q: "O que é um comentário em Python?", options: ["Uma linha que mostra texto", "Um tipo de ciclo", "Uma linha que começa com # e que o Python ignora", "Uma mensagem de erro"], answer: 2, why: "Os comentários começam com # e são notas para pessoas, não instruções para o Python." },
            { objective: "O6", q: "Acabou o jogo de perguntas. Qual é um bom passo a seguir?", options: ["Nunca o executar", "Apagar os comentários", "Pedir à IA para reescrever tudo", "Pedir a um amigo para jogar e ver onde ele fica confuso"], answer: 3, why: "Ver alguém a jogar mostra o que melhorar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Programar com a ajuda da IA",
        questions: [
          { objective: "O4", q: "Qual é uma boa maneira de perguntar à IA sobre código que não entende?", options: ["\"Faça os meus trabalhos de casa\"", "\"Explique este código Python linha a linha para um principiante\"", "\"Código\"", "\"Faça mais comprido\""], answer: 1, why: "Um pedido claro de explicação linha a linha ajuda você a aprender." },
          { objective: "O4", q: "Como pode verificar se entende mesmo um pedaço de código?", options: ["Mudar uma coisa, adivinhar o resultado e depois executar", "Lê-lo uma vez depressa", "Apagá-lo", "Pedir à IA para dizer que entendeu"], answer: 0, why: "Prever e testar mostra se entende de verdade." },
          { objective: "O5", q: "O Python mostra uma mensagem de erro. Onde olha primeiro?", options: ["Para a primeira palavra no ecrã", "Para a barra de endereço do navegador", "Para a última linha da mensagem e o número da linha", "Para o teclado"], answer: 2, why: "A última linha diz o nome do problema e o número da linha mostra onde está." },
          { objective: "O5", q: "A IA dá-lhe uma correção para o seu bug. E a seguir?", options: ["Supõe que funciona", "Entrega sem executar", "Apaga o seu programa", "Executa você mesmo e vê se funciona"], answer: 3, why: "A IA pode enganar-se, por isso você testa a correção." },
          { objective: "O6", q: "Em Python, o que faz uma linha que começa com #?", options: ["É um comentário que o Python ignora", "Mostra um cardinal", "Para o programa", "Cria um ciclo"], answer: 0, why: "As linhas que começam com # são comentários para pessoas, não instruções." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Programação com IA",
    questions: [
      { objective: "O1", q: "A melhor descrição de código é:", options: ["Instruções que um computador segue exatamente", "Uma palavra-passe secreta", "Um tipo de música", "Uma nota da escola"], answer: 0, why: "Código é uma lista de instruções para um computador." },
      { objective: "O1", q: "Porque é um problema copiar código da IA que não entende?", options: ["É sempre curto demais", "Não aprende nada e não o consegue corrigir quando avaria", "Os computadores não conseguem executar código da IA", "Custa dinheiro"], answer: 1, why: "Entender é a habilidade; o código copiado deixa você preso." },
      { objective: "O1", q: "Antes de criar conta numa ferramenta de IA sendo jovem, deve:", options: ["Usar uma data de nascimento falsa", "Partilhar a sua palavra-passe com amigos", "Ver a idade mínima da ferramenta e perguntar a um pai, uma mãe ou um responsável", "Não ler nada"], answer: 2, why: "Os limites de idade e a participação de um responsável mantêm você seguro e dentro das regras." },
      { objective: "O2", q: "O Google Colab permite:", options: ["Só ver vídeos", "Comprar jogos", "Enviar SMS", "Executar Python num navegador de internet sem instalar nada"], answer: 3, why: "O Colab é um caderno online gratuito para executar Python." },
      { objective: "O2", q: "Num caderno, uma célula é:", options: ["Uma caixa onde escreve e executa código", "Uma bateria de telefone", "Um tipo de erro", "Um ciclo"], answer: 0, why: "Os cadernos são feitos de células que guardam código." },
      { objective: "O2", q: "Que linha mostra palavras no ecrã em Python?", options: ["show Hello", "print(\"Hello\")", "say = Hello", "run Hello"], answer: 1, why: "O print com texto entre aspas mostra o texto." },
      { objective: "O3", q: "Uma variável é:", options: ["Uma mensagem de erro", "Um tipo de site", "Uma caixa com nome que guarda um valor", "Um ciclo que nunca acaba"], answer: 2, why: "As variáveis guardam valores com um nome, como score." },
      { objective: "O3", q: "Que linha pede ao jogador para escrever o nome?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"What is your name? \")"], answer: 3, why: "O input pede ao utilizador para escrever alguma coisa." },
      { objective: "O3", q: "Em Python, == quer dizer:", options: ["É o mesmo que", "Somar", "Guardar um valor", "Começar um comentário"], answer: 0, why: "Dois sinais de igual comparam dois valores." },
      { objective: "O3", q: "Porque é que o Python se importa com a indentação?", options: ["Deixa o código colorido", "Mostra que linhas pertencem a um if ou a um ciclo", "Poupa bateria", "É só decoração"], answer: 1, why: "As linhas indentadas pertencem ao if, else ou ciclo que está por cima delas." },
      { objective: "O3", q: "Quer mostrar \"Go team!\" 5 vezes. Qual é o melhor?", options: ["Uma instrução if", "Um comentário", "Um ciclo for com range(5)", "Uma variável chamada team"], answer: 2, why: "Um ciclo repete código um certo número de vezes." },
      { objective: "O4", q: "O que é seguro colar num assistente de IA?", options: ["A sua palavra-passe da escola", "A sua morada de casa", "O seu número de telefone", "Dez linhas do código do jogo"], answer: 3, why: "O código de um projeto não tem informações privadas." },
      { objective: "O4", q: "Depois de a IA explicar o seu código, uma boa maneira de testar se entendeu é:", options: ["Mudar uma coisa, prever e executar", "Fechar o caderno", "Só pedir uma explicação mais longa", "Copiá-lo para outro caderno sem mudar nada"], answer: 0, why: "Prever e testar prova que entende." },
      { objective: "O5", q: "Um bug é:", options: ["Uma boa funcionalidade", "Um erro no código", "Um tipo de ciclo", "Um caderno"], answer: 1, why: "Os bugs são erros; a depuração corrige-os." },
      { objective: "O5", q: "Um IndentationError costuma querer dizer:", options: ["A sua internet foi abaixo", "Precisa de um computador novo", "Os espaços no início de uma linha estão errados", "O programa funcionou"], answer: 2, why: "Aponta para espaços errados no início de uma linha." },
      { objective: "O5", q: "Está preso num erro. O que deve colar no assistente de IA?", options: ["Só a palavra erro", "A sua palavra-passe", "Nada; desiste", "O código e a mensagem de erro completa"], answer: 3, why: "O código e o erro completo dão à IA o que ela precisa para explicar o problema." },
      { objective: "O5", q: "A IA sugere uma correção, mas o erro muda. Você deve:", options: ["Dizer à IA exatamente o que acontece agora", "Desistir", "Entregar na mesma", "Apagar o Python"], answer: 0, why: "Pedidos de seguimento claros ajudam você e a IA a encontrar o problema verdadeiro." },
      { objective: "O6", q: "Qual é o melhor primeiro passo ao construir um programa maior?", options: ["Escrever tudo de uma vez", "Escrever um plano curto como comentários", "Pedir à IA para escrever tudo", "Não testar"], answer: 1, why: "Um plano divide o programa em pedaços pequenos." },
      { objective: "O6", q: "Porque executar o programa depois de juntar cada pedaço pequeno?", options: ["Deixa o código mais comprido", "O Python obriga", "Encontra os erros cedo, quando são fáceis de corrigir", "Guarda o ficheiro"], answer: 2, why: "Passos pequenos tornam os bugs fáceis de encontrar." },
      { objective: "O6", q: "Usou IA para ajudar num projeto de programação da escola. O que deve fazer?", options: ["Esconder", "Dizer que foi tudo trabalho seu", "Apagar o projeto", "Dizer como usou a IA, seguindo as regras do professor"], answer: 3, why: "Ser honesto sobre o uso de IA faz parte de seguir as regras da escola." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 3, 5, 6, 8, 11, 12, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "O programa funciona", objective: "O2", notYet: "O programa não funciona no Colab, ou para com um erro.", meets: "O programa funciona do início ao fim no Colab.", exceeds: "Também aceita um jogador que escreve a resposta de outra maneira, por exemplo com letras maiúsculas." },
      { name: "Peças básicas", objective: "O3", notYet: "Falta o input, o if e else, ou uma variável para os pontos.", meets: "Pergunta o nome do jogador, usa if e else em pelo menos 5 perguntas e guarda os pontos numa variável.", exceeds: "Também usa um ciclo para repetir uma parte do jogo." },
      { name: "Construído por partes", objective: "O6", notYet: "Não tem plano nem mensagem final.", meets: "Um plano em comentários, cinco perguntas e uma mensagem final com os pontos.", exceeds: "Um amigo jogou, e o aluno melhorou uma parte com base no que viu." },
      { name: "A IA como professor", objective: "O4", notYet: "A IA escreveu o programa, ou o uso de IA não foi dito.", meets: "A IA explicou ou ajudou a corrigir pelo menos uma parte, e o aluno diz como a usou.", exceeds: "O aluno consegue mostrar uma mudança que previu e testou depois da explicação da IA." },
      { name: "Comentários com as próprias palavras", objective: "O5", notYet: "Os comentários faltam ou foram copiados da IA.", meets: "Um comentário por cima de cada parte diz com as palavras do aluno o que ela faz.", exceeds: "Também anota um bug que corrigiu e como." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que constroem sozinhos um segundo programa em 30 dias (inquérito de seguimento)",
      "Alunos que entram num clube, curso ou campo de férias de programação em 90 dias",
      "Alunos que começam outro curso de programação ou de IA da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com navegador de internet e internet (da escola, da biblioteca ou de casa)",
      "Google Colab, com uma conta Google que o aluno pode usar",
      "Um assistente de IA gratuito que o aluno pode usar",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes da aula, veja as regras de idade do Colab e das ferramentas de IA e as definições das contas da escola; tenha uma conta de demonstração pronta para os alunos que não podem criar conta.",
      "Programe ao vivo num projetor nas Lições 2 e 3 para os principiantes copiarem cada passo.",
      "Tire de propósito os dois pontos ou uma aspa para que todos os alunos pratiquem a leitura de uma mensagem de erro.",
      "Lembre aos alunos que nunca colem informações privadas em ferramentas de IA; o código do jogo não precisa de nenhuma.",
      "Organize uma troca de jogos em que os alunos jogam os jogos uns dos outros e depois avaliam-nos com a grelha de avaliação."
    ]
  }
};
