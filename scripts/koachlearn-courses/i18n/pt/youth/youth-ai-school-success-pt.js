"use strict";

// Koach Learn course (Portuguese translation of youth/youth-ai-school-success.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-ai-school-success-pt",
  lang: "pt",
  translationOf: "youth-ai-school-success",
  category: "Youth",
  name: "IA para o Sucesso na Escola",
  skills: "Planear uma semana de escola, Dividir um grande projeto em passos, Entender uma leitura difícil, Receber comentários sobre a sua própria escrita, Fazer um plano de estudo para um teste, Usar a IA dentro das regras da escola",
  outcome: "usar um assistente de IA gratuito, dentro das regras da sua escola, para planear a sua semana, dividir um grande trabalho em passos, entender uma leitura difícil, receber comentários sobre a sua própria escrita e fazer um plano de estudo para um teste verdadeiro.",
  about: [
    "Este curso é para alunos do ensino básico e secundário, com cerca de 13 a 18 anos, que querem que a escola pese menos. Trata a IA como uma agenda, um treinador e um colega de estudo, nunca como alguém que faz o trabalho por você.",
    "Você vai planear uma semana verdadeira, dividir um grande projeto em pequenos passos, ter ajuda para entender uma leitura difícil, receber comentários sobre um rascunho que escreveu e fazer um plano de estudo para um teste que está para vir.",
    "Primeiro as regras: cada escola e cada professor tem as suas próprias regras sobre a IA. Confirme-as, confirme a idade mínima da ferramenta e fale com um pai, uma mãe ou um responsável antes de criar qualquer conta. Use a conta da escola para as ferramentas aprovadas pela escola. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\"."
  ],
  finalTask: "Escolha um teste ou projeto verdadeiro que tenha nas próximas duas semanas. Use a IA para fazer um plano de estudo dia a dia que caiba entre as aulas, as atividades e o trabalho ou as tarefas de casa. Depois peça-lhe 5 perguntas de prática com as respostas escondidas, responda você mesmo, confira-as com as suas notas e escreva uma linha sobre como cumpriu as regras de IA da sua escola.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Alunos do ensino básico e secundário, com cerca de 13 a 18 anos, que se sentem sobrecarregados pela escola e que muitas vezes juntam as aulas com desporto, clubes, um trabalho a tempo parcial ou tarefas em casa.",
    startingPoint: "Usam telefones e computadores da escola todos os dias e talvez já tenham experimentado um assistente de conversa. Muitos estudam tudo na véspera, adiam os grandes projetos e não sabem bem que uso da IA a escola permite.",
    gap: "Os alunos podem usar a IA para planear, entender leituras difíceis e estudar melhor, mas usá-la para fazer o trabalho por eles pode contar como fraude e salta a aprendizagem. Precisam de usar a IA como agenda, treinador e colega de estudo, dentro das regras da escola, para acompanhar as aulas e ter melhores resultados nos testes.",
    constraints: [
      "As regras de IA mudam de escola para escola e de professor para professor; vale a regra do professor para cada trabalho",
      "Idade mínima e autorização de um pai, mãe ou responsável para contas novas; contas da escola para as ferramentas da escola",
      "Aparelhos: um telefone, um computador da escola ou da biblioteca; só ferramentas gratuitas",
      "Privacidade: nenhuma informação privada colada em ferramentas de IA",
      "Horários cheios: lições de 5 minutos e palavras simples"
    ],
    prerequisites: "Nenhum. O curso \"O que é a IA? (para Jovens)\" ajuda quem nunca usou um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as suas tarefas, os prazos e os horários fixos da semana", action: "fazer um plano semanal simples com a IA e mudá-lo para caber na sua vida real", standard: "com o trabalho mais difícil primeiro, pausas, e o plano copiado para uma agenda ou um calendário" },
    { id: "O2", condition: "Com um grande trabalho e o seu prazo", action: "dividir o trabalho em passos de 30 minutos com datas e conferi-los com os critérios de avaliação do professor", standard: "terminando dois dias antes, com todas as partes pedidas incluídas" },
    { id: "O3", condition: "Com um parágrafo difícil de uma leitura da aula", action: "lê-lo você mesmo, pedir à IA que o explique e que diga o que querem dizer as palavras difíceis, e depois relê-lo", standard: "escrevendo uma frase certa, com as suas próprias palavras, sobre o que ele quer dizer" },
    { id: "O4", condition: "Com um rascunho que você escreveu e a autorização do professor", action: "pedir à IA três coisas para melhorar em vez de uma nova versão, e rever o rascunho com as suas próprias palavras", standard: "com todas as mudanças escritas por você" },
    { id: "O5", condition: "Com a data de um teste verdadeiro, os seus temas e o tempo que tem por dia", action: "fazer um plano de estudo dia a dia com perguntas de prática, responder primeiro e conferir as respostas com as suas notas", standard: "passando mais tempo nas perguntas que errou" },
    { id: "O6", condition: "Em qualquer trabalho em que talvez use a IA", action: "cumprir a regra de IA do professor, verificar você mesmo cada dado ou fonte e escrever uma linha sobre como usou a IA", standard: "sem entregar nenhum trabalho escrito pela IA que não seja permitido" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Organizar-se",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear a sua semana de escola",
          minutes: 5,
          goal: "Transformar uma lista confusa de tarefas num plano semanal simples.",
          text: [
            "A escola, os treinos, os clubes, um trabalho a tempo parcial, as tarefas de casa e os amigos disputam o seu tempo. Um assistente de IA pode ajudar a pôr tudo em ordem, se você lhe der os dados.",
            "Faça a lista do que tem de entregar e quando, e junte os seus horários fixos, como os treinos ou o trabalho. Depois peça: \"Esta é a minha semana. Faça um plano simples com tempo de estudo todos os dias, o trabalho mais difícil primeiro e pausas. Que caiba num só ecrã.\"",
            "O plano é um rascunho. Mude as coisas de lugar até caber na sua vida real e depois passe-o para uma agenda, para o Google Calendar ou para a aplicação de calendário da escola."
          ],
          steps: ["Escreva todas as tarefas e os prazos.", "Junte os horários fixos: aulas, treinos, trabalho, família.", "Peça à IA um plano semanal simples com pausas.", "Mude-o para caber na sua vida e copie-o para a agenda ou o calendário."],
          words: [["Prazo", "o dia em que o trabalho tem de ser entregue."], ["Dar prioridade", "decidir o que fazer primeiro porque é mais importante ou tem o prazo mais perto."]],
          slides: [
            { title: "Dê os dados à IA", bullets: ["O que tem de entregar e quando", "Horários de treino, de trabalho e da família"] },
            { title: "Peça um plano simples", bullets: ["Tempo de estudo todos os dias", "O trabalho mais difícil primeiro", "Com pausas", "Cabe num só ecrã"] },
            { title: "Torne-o real", bullets: ["Mude as coisas para caber na sua vida", "Copie-o para uma agenda ou um calendário"] }
          ],
          tryIt: "Faça a lista de tudo o que tem de entregar esta semana e dos seus horários fixos. Peça a um assistente de IA que pode usar um plano semanal simples. Mude uma coisa para caber na sua vida e copie o plano para uma agenda ou um calendário.",
          youCanNow: "fazer um plano semanal realista com a ajuda da IA.",
          quickCheck: [
            { objective: "O1", q: "O que são \"horários fixos\" quando planeia a sua semana?", options: ["Horários que não pode mudar, como aulas, treinos ou trabalho", "Horários em que pensa descansar", "Só os prazos dos trabalhos de casa", "Horários que a IA escolhe por você"], answer: 0, why: "Os horários fixos são compromissos à volta dos quais o plano tem de caber." },
            { objective: "O1", q: "O plano da IA põe tempo de estudo durante o seu turno de trabalho. O que faz?", options: ["Falta ao trabalho", "Ignora o plano", "Muda o tempo de estudo para caber no seu horário real", "Pede à IA para cancelar o seu turno"], answer: 2, why: "O plano da IA é um rascunho; você muda-o para caber na sua vida real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dividir um grande projeto em pequenos passos",
          minutes: 5,
          goal: "Dividir um grande trabalho em pequenos passos com datas.",
          text: [
            "Os grandes projetos metem medo porque parecem uma coisa enorme. Dividi-los em pequenos passos torna-os possíveis.",
            "Dê à IA as instruções do trabalho (com as suas palavras ou coladas, sem informações privadas) e o prazo. Peça: \"Divida isto em pequenos passos que eu possa fazer em 30 minutos cada, com uma data para cada passo, terminando dois dias antes.\"",
            "Leia os passos e confirme que correspondem ao que o professor pediu. As instruções e os critérios de avaliação do professor valem sempre mais do que o plano da IA."
          ],
          steps: ["Partilhe as instruções e o prazo.", "Peça passos de 30 minutos com datas.", "Peça para terminar dois dias antes.", "Confira os passos com os critérios de avaliação do professor."],
          words: [["Critérios de avaliação", "a lista que o professor usa para dar nota ao trabalho (em inglês, \"rubric\")."], ["Etapa", "um pequeno objetivo no caminho para terminar um grande."]],
          slides: [
            { title: "Grande projeto, pequenos passos", bullets: ["Tarefas enormes metem medo", "Pequenos passos parecem possíveis"] },
            { title: "Peça à IA para dividir", bullets: ["Passos de 30 minutos", "Uma data para cada um", "Terminar dois dias antes"] },
            { title: "Os critérios do professor ganham", bullets: ["Confira os passos com as instruções", "As regras do professor vêm primeiro"] }
          ],
          tryIt: "Pegue num grande trabalho que tem agora ou que teve há pouco tempo. Peça à IA para o dividir em passos de 30 minutos com datas. Confira-os com as instruções e corrija qualquer passo que não corresponda.",
          youCanNow: "transformar um grande trabalho em pequenos passos com datas.",
          quickCheck: [
            { objective: "O2", q: "Porque pedir à IA para terminar os passos dois dias antes?", options: ["Os professores dão pontos extra", "Torna o projeto mais curto", "A IA trabalha mais rápido assim", "Deixa tempo para surpresas ou correções"], answer: 3, why: "Terminar antes dá-lhe margem se alguma coisa demorar mais do que o previsto." },
            { objective: "O2", q: "Os passos da IA esquecem a bibliografia que o professor pede. O que faz?", options: ["Deixa-a de fora, porque a IA sabe mais", "Junta um passo para ela, porque as instruções do professor ganham", "Pede a um amigo para a fazer", "Começa outro projeto"], answer: 1, why: "As instruções e os critérios de avaliação do professor valem sempre mais do que o plano da IA." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Entender uma leitura difícil",
          minutes: 5,
          goal: "Usar a IA para entender um texto difícil, continuando a lê-lo você mesmo.",
          text: [
            "Algumas leituras são difíceis: linguagem antiga, palavras de ciência ou parágrafos longos. A IA pode ajudar a entendê-las, desde que você continue a ler o texto.",
            "Experimente assim: leia primeiro um parágrafo. Depois peça à IA: \"Explique este parágrafo com palavras simples\" ou \"O que querem dizer estas 3 palavras?\" ou \"Dê-me 3 perguntas para pensar enquanto leio.\"",
            "Um resumo da IA pode esquecer coisas ou errá-las, e não substitui a leitura para a aula. Use-o para abrir o texto e depois volte a lê-lo."
          ],
          steps: ["Leia primeiro o parágrafo você mesmo.", "Peça à IA para o explicar de forma simples ou dizer o que querem dizer as palavras difíceis.", "Peça perguntas para guiar a sua leitura.", "Releia o parágrafo com o que agora entende."],
          words: [["Resumo", "uma versão curta das ideias principais."], ["Contexto", "as palavras e ideias à volta de uma palavra que ajudam a explicar o que ela quer dizer."]],
          slides: [
            { title: "Leia primeiro", bullets: ["Tente o parágrafo sozinho", "Marque as palavras que não conhece"] },
            { title: "Depois pergunte à IA", bullets: ["\"Explique isto com palavras simples\"", "\"O que querem dizer estas 3 palavras?\"", "\"Dê-me perguntas para guiar a minha leitura\""] },
            { title: "Depois releia", bullets: ["Os resumos da IA podem esquecer coisas", "Não substituem a leitura"] }
          ],
          tryIt: "Pegue num parágrafo difícil de uma leitura da aula. Leia-o, peça à IA para o explicar com palavras simples e para dizer o que querem dizer duas palavras difíceis, depois releia-o e escreva uma frase, com as suas próprias palavras, sobre o que ele quer dizer.",
          youCanNow: "usar a IA para abrir uma leitura difícil e depois entendê-la você mesmo.",
          quickCheck: [
            { objective: "O3", q: "Porque é que um resumo da IA não substitui a leitura?", options: ["Os resumos são sempre longos demais", "Os professores conseguem ver o seu ecrã", "Pode esquecer coisas ou errá-las", "A IA não sabe ler inglês"], answer: 2, why: "Um resumo da IA pode esquecer ou errar detalhes, por isso você continua a ler o texto." },
            { objective: "O3", q: "Está preso num parágrafo cheio de palavras de ciência. Qual é o melhor primeiro passo?", options: ["Lê-lo você mesmo e depois perguntar à IA o que querem dizer as palavras difíceis", "Pedir à IA para resumir o livro todo", "Saltar a leitura", "Copiar o resumo da IA para as suas notas"], answer: 0, why: "Leia primeiro, use a IA para abrir as partes difíceis e depois releia." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Organizar-se",
        questions: [
          { objective: "O1", q: "O que deve dar à IA para ajudar a planear a sua semana?", options: ["A sua palavra-passe", "O que tem de entregar e os seus horários fixos", "A morada de casa", "Nada"], answer: 1, why: "A IA precisa das suas tarefas e horários para fazer um plano útil." },
          { objective: "O1", q: "A IA fez um plano semanal que não cabe no seu horário de treinos. Você:", options: ["Segue-o na mesma", "Deixa os treinos", "Apaga o seu calendário", "Muda-o para caber na sua vida real"], answer: 3, why: "O plano é um rascunho; você faz com que ele caiba." },
          { objective: "O2", q: "O que são os critérios de avaliação?", options: ["A lista que o professor usa para dar nota ao trabalho", "Um tipo de quebra-cabeças", "Uma aplicação de estudo", "Uma palavra-passe"], answer: 0, why: "Os critérios de avaliação mostram o que o professor avalia." },
          { objective: "O2", q: "Os passos da IA para o projeto deixam de fora uma parte que o professor pediu. Você:", options: ["Salta essa parte", "Pede à IA para lhe dar nota", "Junta-a, porque as instruções do professor ganham", "Muda os prazos"], answer: 2, why: "As instruções do professor vêm primeiro." },
          { objective: "O3", q: "Qual é a melhor forma de usar a IA com uma leitura difícil?", options: ["Saltar a leitura e usar só o resumo da IA", "Pedir à IA para fazer o teste", "Ler primeiro, pedir à IA para explicar e depois reler", "Nunca a ler"], answer: 2, why: "A IA ajuda a entender, mas você continua a ler." }
        ]
      }
    },
    {
      name: "Capítulo 2: Escrever e estudar de forma mais inteligente",
      lessons: [
        {
          objectives: ["O4"],
          title: "Receber comentários sobre a sua própria escrita",
          minutes: 5,
          goal: "Pedir à IA comentários sobre um rascunho que escreveu e depois revê-lo você mesmo.",
          text: [
            "É ao escrever o seu próprio rascunho que se aprende. Depois, a IA pode agir como um treinador: pode mostrar frases pouco claras, provas que faltam ou erros de gramática.",
            "Peça comentários, não uma nova versão: \"Este é o meu parágrafo. Não o reescreva. Diga-me 3 coisas para melhorar e porquê.\" Depois é você que faz as mudanças, com as suas próprias palavras.",
            "Se o professor não permite comentários da IA, procure outra ajuda: um colega de turma, o centro de escrita da escola ou o professor nas horas de atendimento."
          ],
          steps: ["Escreva primeiro o seu próprio rascunho.", "Confirme que o professor permite comentários da IA.", "Peça 3 coisas para melhorar, não uma nova versão.", "Reveja com as suas próprias palavras."],
          words: [["Rascunho", "uma primeira versão da sua escrita."], ["Rever", "melhorar a sua escrita mudando as ideias, a ordem ou as palavras."]],
          slides: [
            { title: "Escreva primeiro", bullets: ["É no seu rascunho que aprende", "A IA vem depois, como treinador"] },
            { title: "Peça comentários, não uma nova versão", bullets: ["\"Não o reescreva\"", "\"Diga-me 3 coisas para melhorar e porquê\""] },
            { title: "Você faz as mudanças", bullets: ["Reveja com as suas próprias palavras", "IA não permitida? Pergunte a um colega ou ao professor"] }
          ],
          tryIt: "Pegue num parágrafo que escreveu (se o professor permite comentários da IA). Peça 3 coisas para melhorar, sem uma nova versão. Faça as mudanças você mesmo e compare as duas versões.",
          youCanNow: "receber comentários da IA e rever a sua própria escrita.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer \"comentários, não uma nova versão\"?", options: ["A IA escreve uma nova versão por você", "A IA dá nota ao seu trabalho", "A IA apaga o seu rascunho", "A IA mostra o que melhorar e você faz as mudanças"], answer: 3, why: "Os comentários dizem o que corrigir; você revê com as suas próprias palavras." },
            { objective: "O4", q: "O professor não permite comentários da IA nesta redação. O que faz?", options: ["Usa a IA na mesma", "Pede comentários a um colega, ao centro de escrita ou ao professor", "Entrega o primeiro rascunho sem o ler", "Pede à IA para a reescrever às escondidas"], answer: 1, why: "Quando a IA não é permitida, outras pessoas podem dar-lhe comentários." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um plano de estudo para um teste",
          minutes: 5,
          goal: "Fazer um plano de estudo dia a dia e perguntas de prática para um teste verdadeiro.",
          text: [
            "Estudar tudo na véspera normalmente não funciona bem. Estudar um pouco todos os dias e testar-se a si mesmo funciona.",
            "Diga à IA a data do teste, os temas e quanto tempo tem por dia: \"O meu teste de biologia é na sexta-feira, sobre as células e o ADN. Tenho 30 minutos por dia. Faça um plano de estudo com um pequeno teste de prática todos os dias.\"",
            "Peça perguntas de prática com as respostas escondidas, responda você mesmo e depois confira com as suas notas ou o livro. Passe mais tempo nas perguntas que errou."
          ],
          steps: ["Diga à IA a data do teste, os temas e o seu tempo por dia.", "Peça um plano dia a dia com prática.", "Responda às perguntas de prática antes de ver as respostas.", "Confira com as suas notas e concentre-se no que errou."],
          words: [["Estudar na véspera", "tentar aprender tudo mesmo antes de um teste."], ["Prática espaçada", "estudar um pouco durante vários dias em vez de tudo de uma vez."]],
          slides: [
            { title: "Pouco e muitas vezes vale mais do que tudo na véspera", bullets: ["Estude um pouco todos os dias", "Teste-se pelo caminho"] },
            { title: "Peça um plano", bullets: ["Data do teste e temas", "Os minutos que tem por dia", "Um pequeno teste de prática por dia"] },
            { title: "Pratique da forma certa", bullets: ["Responda antes de olhar", "Confira com as suas notas", "Concentre-se no que errou"] }
          ],
          tryIt: "Escolha um teste verdadeiro que está para vir. Peça à IA um plano de estudo dia a dia com o tempo que realmente tem. Faça as perguntas de prática do primeiro dia e confira-as com as suas notas.",
          youCanNow: "fazer um plano de estudo e praticar com a IA para um teste verdadeiro.",
          quickCheck: [
            { objective: "O5", q: "O que funciona melhor do que estudar tudo na véspera?", options: ["Reler as notas uma vez", "Estudar um pouco todos os dias e testar-se a si mesmo", "Dormir com o livro", "Ler só o plano da IA"], answer: 1, why: "Estudar um pouco todos os dias, com testes a si mesmo, ajuda a lembrar mais." },
            { objective: "O5", q: "Errou 3 de 5 perguntas de prática sobre as partes da célula. O que faz a seguir?", options: ["Passa para um tema novo", "Apaga as perguntas", "Pede as respostas à IA e decora-as", "Passa mais tempo nas partes da célula e confere as suas notas"], answer: 3, why: "Concentre o seu tempo de estudo no que errou." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar a IA com honestidade na escola",
          minutes: 5,
          goal: "Cumprir as regras de IA da escola e dizer como usou a IA.",
          text: [
            "As escolas têm regras de IA diferentes. Algumas permitem-na para ter ideias e receber comentários, outras querem que diga quando a usou, e outras proíbem-na em certos trabalhos. A regra do professor para aquele trabalho é a que vale.",
            "Nunca entregue como seu um trabalho escrito pela IA quando isso não é permitido. Pode contar como fraude, e você perde a aprendizagem. Se a IA ajudou, diga como: \"Usei a IA para fazer perguntas de prática e para ter comentários sobre o meu segundo parágrafo.\"",
            "A IA pode inventar dados e fontes. Nunca copie uma citação ou o título de um livro da IA para o seu trabalho sem o encontrar você mesmo. Não coloque informações privadas em ferramentas de IA e use a conta da escola para as ferramentas da escola."
          ],
          steps: ["Leia a regra de IA do professor para este trabalho.", "Use a IA só das formas permitidas.", "Escreva uma linha a dizer como a usou.", "Verifique você mesmo cada dado ou fonte antes de o usar."],
          words: [["Integridade académica", "ser honesto no trabalho escolar: o que entrega mostra o que você fez."], ["Citar a fonte", "dizer de onde veio uma informação."]],
          slides: [
            { title: "As regras são diferentes", bullets: ["Algumas permitem a IA para ideias ou comentários", "Algumas proíbem-na em certos trabalhos", "Vale a regra do professor"] },
            { title: "Diga abertamente como a IA ajudou", bullets: ["Nunca faça passar o trabalho da IA como seu", "Diga numa linha como a IA ajudou"] },
            { title: "Verifique dados e fontes", bullets: ["A IA pode inventar citações e livros", "Encontre você mesmo cada fonte", "Nenhuma informação privada na IA"] }
          ],
          tryIt: "Tarefa final: para um teste ou projeto verdadeiro nas próximas duas semanas, faça com a IA um plano de estudo dia a dia, faça 5 perguntas de prática com as respostas escondidas, confira-as com as suas notas e escreva uma linha sobre como cumpriu as regras de IA da sua escola.",
          youCanNow: "usar a IA na escola de formas permitidas, honestas e que ajudam mesmo a aprender.",
          quickCheck: [
            { objective: "O6", q: "De quem é a regra de IA que vale para um certo trabalho?", options: ["A do seu amigo", "A da empresa da IA", "A do seu professor", "A que for mais fácil"], answer: 2, why: "As escolas são diferentes, e a regra do professor para aquele trabalho é a que vale." },
            { objective: "O6", q: "A IA dá-lhe uma ótima citação para a sua redação. O que faz antes de a usar?", options: ["Encontra-a você mesmo na fonte verdadeira", "Usa-a; a IA não erra", "Muda algumas palavras", "Junta um número de página inventado"], answer: 0, why: "A IA pode inventar citações e fontes, por isso primeiro encontre-as você mesmo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Escrever e estudar de forma mais inteligente",
        questions: [
          { objective: "O4", q: "Que pedido dá comentários úteis sem fazer o trabalho por você?", options: ["\"Não o reescreva. Diga-me 3 coisas para melhorar e porquê.\"", "\"Reescreva a minha redação\"", "\"Escreva-a por mim\"", "\"Torne-a perfeita\""], answer: 0, why: "Pedir comentários faz com que a escrita continue a ser sua." },
          { objective: "O4", q: "O professor não permite comentários da IA. Você pode:", options: ["Usar a IA às escondidas", "Não escrever", "Copiar um amigo", "Perguntar a um colega, ao centro de escrita ou ao professor"], answer: 3, why: "Outras pessoas podem dar comentários dentro das regras." },
          { objective: "O5", q: "O que é a prática espaçada?", options: ["Estudar a noite toda antes do teste", "Estudar um pouco durante vários dias", "Não estudar", "Estudar no espaço"], answer: 1, why: "Distribuir o estudo por vários dias ajuda a lembrar." },
          { objective: "O6", q: "A IA dá-lhe uma citação de um livro para a sua redação. Deve:", options: ["Primeiro encontrar você mesmo a citação no livro verdadeiro", "Copiá-la", "Inventar um número de página", "Perguntar à IA se é verdadeira"], answer: 0, why: "A IA pode inventar citações; verifique a fonte verdadeira." },
          { objective: "O6", q: "De quem é a regra de IA que vale para um trabalho?", options: ["A de um amigo", "A da empresa da IA", "A do seu professor", "De ninguém"], answer: 2, why: "O professor define a regra para aquele trabalho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Sucesso na Escola",
    questions: [
      { objective: "O1", q: "Para planear a sua semana com a IA, faça a lista de:", options: ["As suas palavras-passe", "Tarefas, prazos e horários fixos", "Os números de telefone dos seus amigos", "Nada"], answer: 1, why: "Esses dados deixam a IA fazer um plano real." },
      { objective: "O1", q: "Um bom plano semanal tem:", options: ["Nenhuma pausa", "Só jogos de vídeo", "Tudo no domingo à noite", "O trabalho mais difícil primeiro e pausas"], answer: 3, why: "As pausas e fazer primeiro o trabalho difícil ajudam a terminar." },
      { objective: "O1", q: "Depois de a IA fazer um plano, você deve:", options: ["Ignorá-lo", "Partilhá-lo com desconhecidos", "Apagá-lo", "Mudá-lo para caber na sua vida e copiá-lo para um calendário"], answer: 3, why: "O plano só ajuda quando cabe na sua vida e você o consegue ver." },
      { objective: "O2", q: "Porque dividir um grande projeto em passos?", options: ["Torna-o mais longo", "Pequenos passos parecem possíveis", "Os professores detestam isso", "A lei obriga"], answer: 1, why: "Pequenos passos tornam um grande trabalho possível de gerir." },
      { objective: "O2", q: "Um bom pedido para dividir um projeto é:", options: ["\"projeto\"", "\"Faça o meu projeto\"", "\"Divida isto em passos de 30 minutos com datas, terminando dois dias antes\"", "\"Faça-o desaparecer\""], answer: 2, why: "Diz o tamanho dos passos, as datas e uma margem." },
      { objective: "O2", q: "Se os passos da IA e os critérios de avaliação do professor não batem certo:", options: ["Siga os critérios de avaliação", "Siga a IA", "Não siga nenhum", "Pergunte a um desconhecido"], answer: 0, why: "O professor dá a nota com os critérios de avaliação." },
      { objective: "O3", q: "Ao usar a IA com uma leitura difícil, primeiro:", options: ["Salte para o resumo", "Leia você mesmo o parágrafo", "Feche o livro", "Peça à IA as respostas do teste"], answer: 1, why: "Ler primeiro quer dizer que a IA ajuda a entender, não a saltar." },
      { objective: "O3", q: "Porque é que um resumo da IA não substitui a leitura?", options: ["É longo demais", "Custa dinheiro", "É sempre perfeito", "Pode esquecer coisas ou errá-las"], answer: 3, why: "Os resumos podem deixar de fora ou torcer partes importantes." },
      { objective: "O3", q: "Qual é um pedido útil para a leitura?", options: ["\"O que querem dizer estas 3 palavras?\"", "\"Escreva o meu relatório de leitura\"", "\"Dê-me a minha nota\"", "\"Leia por mim para sempre\""], answer: 0, why: "Explicar as palavras difíceis ajuda a entender." },
      { objective: "O4", q: "Onde acontece sobretudo a aprendizagem na escrita?", options: ["Ao copiar o texto da IA", "Ao imprimir a página", "Ao escrever o seu próprio rascunho e revê-lo", "Ao escolher o tipo de letra"], answer: 2, why: "Escrever rascunhos e revê-los constrói a competência." },
      { objective: "O4", q: "Quando a IA dá comentários, quem faz as mudanças?", options: ["A IA", "Um desconhecido", "Você, com as suas próprias palavras", "Ninguém"], answer: 2, why: "Rever você mesmo faz com que o trabalho continue a ser seu." },
      { objective: "O4", q: "O que quer dizer rever?", options: ["Melhorar a sua escrita mudando-a", "Apagá-la", "Imprimi-la", "Entregá-la atrasada"], answer: 0, why: "Rever é melhorar um rascunho." },
      { objective: "O5", q: "Que hábito de estudo funciona melhor?", options: ["Estudar tudo na véspera", "Só reler", "Não estudar", "Um pouco todos os dias, com testes a si mesmo"], answer: 3, why: "A prática espaçada com testes a si mesmo funciona bem." },
      { objective: "O5", q: "Que três coisas dizer à IA para um plano de estudo?", options: ["A palavra-passe, a morada e a idade", "Data do teste, temas e tempo por dia", "Cor, comida e música favoritas", "Nada"], answer: 1, why: "Isso deixa a IA fazer um plano à sua medida." },
      { objective: "O5", q: "Depois das perguntas de prática, passe mais tempo:", options: ["Nas que errou", "Nas que acertou", "Em nenhuma", "Em temas novos ao acaso"], answer: 0, why: "Concentrar-se nos erros preenche as falhas." },
      { objective: "O6", q: "Entregar um trabalho escrito pela IA quando não é permitido:", options: ["Está sempre bem", "É obrigatório", "Pode contar como fraude", "Dá pontos extra"], answer: 2, why: "Quebra as regras e salta a aprendizagem." },
      { objective: "O6", q: "Uma boa linha sobre o uso da IA é:", options: ["Nada de nada", "\"Usei a IA para fazer perguntas de prática e ter comentários sobre o parágrafo 2\"", "\"A IA fez tudo\", quando não fez", "\"Nunca uso computadores\""], answer: 1, why: "Diz com honestidade como a IA ajudou." },
      { objective: "O6", q: "A IA dá um livro como fonte para o seu projeto. Você deve:", options: ["Copiá-lo para a sua lista", "Inventar um autor", "Ignorar todas as fontes", "Encontrar você mesmo o livro antes de o usar"], answer: 3, why: "A IA pode inventar fontes." },
      { objective: "O6", q: "Que conta deve usar para as ferramentas aprovadas pela escola?", options: ["A conta de um amigo", "Uma conta falsa", "Nunca nenhuma conta", "A sua conta da escola"], answer: 3, why: "As ferramentas da escola estão preparadas para a sua conta da escola." },
      { objective: "O6", q: "Antes de criar uma conta numa aplicação de IA nova, deve:", options: ["Usar uma data de nascimento qualquer", "Confirmar a idade mínima e falar com um pai, uma mãe ou um responsável", "Dar-lhe a sua palavra-passe da escola", "Saltar as condições"], answer: 1, why: "A idade mínima e a autorização de um pai, mãe ou responsável vêm primeiro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      6,
      7,
      9,
      10,
      12,
      14,
      15
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "O plano de estudo cabe na vida real",
        objective: "O5",
        notYet: "Não há plano, ou o plano ignora as aulas, as atividades e o trabalho.",
        meets: "Um plano dia a dia até à data do teste, que cabe à volta dos horários fixos.",
        exceeds: "O plano foi mudado depois do primeiro dia, com base no que errou."
      },
      {
        name: "Planear o tempo da semana",
        objective: "O1",
        notYet: "O tempo de estudo não está num calendário nem numa agenda.",
        meets: "As sessões de estudo estão copiadas para uma agenda ou um calendário, com pausas.",
        exceeds: "Os temas mais difíceis estão marcados primeiro em cada sessão."
      },
      {
        name: "Prática e verificação",
        objective: "O5",
        notYet: "Viu as respostas antes de tentar, ou não as conferiu.",
        meets: "Respondeu primeiro a cinco perguntas de prática e depois conferiu-as com as notas.",
        exceeds: "As respostas erradas estão numa lista, com o que precisa de estudar mais."
      },
      {
        name: "Uso honesto da IA",
        objective: "O6",
        notYet: "Não há linha sobre o uso da IA, ou a IA foi usada de uma forma que o professor não permite.",
        meets: "Uma linha clara sobre como a IA foi usada, de acordo com a regra do professor.",
        exceeds: "Também indica os dados ou fontes da IA que foram verificados."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter tido melhor nota num teste ou projeto depois de usar o seu plano de estudo (seguimento de 30 dias)",
      "Alunos que dizem ter entregado os grandes projetos a tempo no seguimento de 30 dias",
      "Professores ou programas que dizem haver menos problemas com as regras de IA entre os alunos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, um computador da escola ou da biblioteca com internet",
      "Um assistente de IA gratuito que o aluno pode usar, de preferência com uma conta da escola",
      "Uma agenda, o Google Calendar ou a aplicação de calendário da escola",
      "As notas das aulas e as instruções de um teste ou projeto verdadeiro",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Partilhe a política de IA da sua escola no início e peça aos alunos que tragam a regra de cada professor para o teste ou projeto que escolheram.",
      "Peça aos alunos que usem um teste ou projeto verdadeiro que está para vir, para que o plano seja útil logo.",
      "Lembre aos alunos que nunca colem informações privadas e que usem as contas da escola para as ferramentas da escola.",
      "Fale com os alunos uma semana depois para ver se cumpriram os seus planos de estudo e ajustem-nos juntos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
