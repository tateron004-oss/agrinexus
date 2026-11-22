"use strict";

// Koach Learn course (Portuguese translation of shared/agile-project-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Scrum names (Product Owner, Scrum Master, Sprint, Daily Scrum, Backlog...) stay in English, as Portuguese-speaking teams use them, and are explained in "words".

module.exports = {
  id: "agile-project-management-pt",
  lang: "pt",
  translationOf: "agile-project-management",
  category: "Veterans (military)",
  name: "Gestão Ágil de Projetos",
  skills: "Escrever histórias de utilizador, Construir um backlog, Planear um sprint, Gerir um quadro de tarefas, Fazer uma revisão e uma retrospetiva",
  outcome: "gerir um pequeno projeto à maneira Ágil: transformar o trabalho num backlog de histórias de utilizador por ordem de prioridade, planear um sprint de uma ou duas semanas, acompanhá-lo num quadro de tarefas e fechá-lo com uma revisão e uma retrospetiva.",
  about: [
    "Ágil (em inglês, \"Agile\") é uma forma de gerir projetos em rondas curtas de trabalho, verificando os resultados muitas vezes e mudando de rumo quando aprende algo novo. Muitos empregadores na tecnologia, no governo, na saúde e na logística usam-na, e os anúncios de emprego pedem-na muitas vezes.",
    "Este curso é para quem lidera ou trabalha numa equipa: veteranos que passam para funções civis de projeto, trabalhadores que querem um emprego de coordenador ou analista, e pessoas que gerem um projeto no trabalho, na igreja ou na comunidade. Hábitos de planeamento militar, como o briefing de missão e a revisão pós-ação, encaixam bem no Ágil.",
    "Vai praticar com um projeto real e pequeno seu, da primeira à última lição. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escolha um projeto real que leve de duas a seis semanas (por exemplo um esforço para fazer o currículo e procurar emprego, um evento comunitário ou um pequeno site). Construa um backlog de pelo menos oito histórias de utilizador por ordem de prioridade, planeie um sprint de uma semana com um objetivo do sprint, gira-o num quadro de tarefas gratuito e termine com uma revisão do sprint por escrito e uma retrospetiva que diga uma coisa a manter, uma a parar e uma a experimentar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição que passam para funções civis, como coordenador de projetos, operações, informática ou gestão de programas. Muitos lideraram equipas, cumpriram missões e fizeram revisões pós-ação nas forças armadas.",
    startingPoint: "Têm experiência em planear, fazer briefings, cadeias de responsabilidade e revisões pós-ação. A maioria não conhece as palavras do Ágil, as histórias de utilizador nem os quadros de tarefas digitais.",
    gap: "Muitos empregadores civis gerem projetos à maneira Ágil e pedem experiência em Scrum ou Kanban nos anúncios de emprego. Os alunos precisam de mostrar que sabem gerir um pequeno projeto em sprints com termos civis, e ligar isso às capacidades de liderança que já têm, para concorrer a estas funções.",
    constraints: [
      "Nível de leitura: palavras simples; os termos do Ágil são explicados da primeira vez",
      "Aparelhos: um telefone ou computador para um quadro gratuito, ou notas autocolantes numa parede",
      "Tempo: lições de 5 minutos, mais um sprint de uma semana para a tarefa final",
      "Os preços e os requisitos das certificações mudam; os alunos verificam no site da entidade certificadora",
      "Nenhum dado privado ou classificado nos projetos de prática nem nos pedidos à IA"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a descrição de um projeto", action: "explicar como o Ágil faz o trabalho em rondas curtas e quando o modelo em cascata serve melhor", standard: "com as suas palavras, com um exemplo de cada" },
    { id: "O2", condition: "Com uma pequena equipa Scrum", action: "dizer as três responsabilidades do Scrum, os cinco eventos e os três artefactos", standard: "acertando pelo menos 9 de 11" },
    { id: "O3", condition: "Para um projeto real de duas a seis semanas", action: "escrever um backlog de pelo menos oito histórias de utilizador com critérios de aceitação, por ordem de prioridade", standard: "com cada história no modelo \"Como..., eu quero... para que...\"" },
    { id: "O4", condition: "Com o seu backlog e as horas que tem de verdade", action: "planear um sprint de uma semana com um objetivo do sprint numa frase e tarefas de um dia ou menos", standard: "para que o trabalho planeado caiba no tempo que tem" },
    { id: "O5", condition: "Durante o seu sprint", action: "acompanhar o trabalho num quadro de tarefas com um limite WIP e um ponto de situação diário de 15 minutos", standard: "movendo cada cartão à medida que o trabalho avança" },
    { id: "O6", condition: "No fim do seu sprint", action: "fazer uma revisão do sprint e uma retrospetiva Manter, Parar, Experimentar e acrescentar uma melhoria ao sprint seguinte", standard: "com os comentários escritos no backlog" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear à maneira Ágil",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é o Ágil e como é diferente de um grande plano",
          minutes: 4,
          goal: "Explicar com as suas palavras como o Ágil gere um projeto em rondas curtas.",
          text: [
            "Num projeto tradicional ou \"em cascata\" (em inglês, \"waterfall\"), planeia tudo no início, depois constrói, depois testa e entrega no fim. Isto funciona quando o trabalho é bem conhecido, como fazer as fundações de uma casa. Falha quando as necessidades mudam a meio.",
            "O Ágil entrega em rondas curtas, muitas vezes de uma a quatro semanas. Cada ronda produz algo que se pode usar, a equipa mostra-o às pessoas para quem é, e o plano é ajustado com base no que elas dizem. O Manifesto Ágil (2001) diz de forma simples: resultados que funcionam e responder à mudança valem mais do que seguir um plano fixo.",
            "O Scrum e o Kanban são as duas formas mais comuns de fazer Ágil. O Scrum usa rondas de duração fixa chamadas sprints. O Kanban usa um quadro e um fluxo de trabalho constante, com um limite de quanto trabalho está em curso ao mesmo tempo. Pode usar ideias dos dois."
          ],
          words: [["Ágil (Agile)", "uma forma de gerir projetos em rondas curtas, com verificações e mudanças frequentes."], ["Cascata (waterfall)", "uma forma de gerir projetos em que cada fase termina antes de a seguinte começar."], ["Scrum", "um método Ágil que trabalha em rondas de duração fixa chamadas sprints."], ["Kanban", "um método Ágil que usa um quadro e limita quanto trabalho está em curso."]],
          slides: [
            { title: "Cascata e Ágil", bullets: ["Cascata: planear tudo, construir tudo, entregar no fim", "Ágil: entregar algo que se pode usar a cada poucas semanas", "O Ágil ajusta o plano à medida que aprende"] },
            { title: "Porque as equipas usam o Ágil", bullets: ["As necessidades mudam a meio", "Os problemas aparecem cedo, não no fim", "As pessoas que serve veem o progresso muitas vezes"] },
            { title: "Dois métodos comuns", bullets: ["Scrum: sprints de duração fixa, de um mês ou menos", "Kanban: um quadro e um limite de trabalho em curso"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Escolha um projeto real que quer terminar nas próximas duas a seis semanas. Escreva uma frase a descrevê-lo e uma frase sobre para quem ele é.",
          youCanNow: "explicar como o Ágil é diferente de um grande plano feito no início e dizer o que são o Scrum e o Kanban.",
          quickCheck: [
            { objective: "O1", q: "O que é o Kanban?", options: ["Um plano fixo de quatro semanas", "Um tipo de história de utilizador", "Um exame de certificação", "Uma forma de fazer Ágil com um quadro e um limite de trabalho em curso"], answer: 3, why: "O Kanban usa um quadro e um fluxo de trabalho constante, com um limite de quanto está em curso." },
            { objective: "O1", q: "O seu grupo de veteranos está a fazer um site novo e os membros estão sempre a mudar o que querem. Que forma de trabalhar serve?", options: ["Cascata: planear tudo no início e entregar no fim", "Ágil: entregar em rondas curtas e ajustar depois de cada uma", "Nenhum plano", "Esperar até todos concordarem com tudo"], answer: 1, why: "O Ágil serve para trabalho em que as necessidades mudam, porque cada ronda é mostrada e o plano é ajustado." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Papéis, eventos e artefactos do Scrum",
          minutes: 5,
          goal: "Dizer quem faz o quê no Scrum e os cinco eventos que um sprint usa.",
          text: [
            "O Guia do Scrum (versão de 2020) define três responsabilidades. O Product Owner (dono do produto) decide o que importa mais e mantém a lista de trabalho em ordem. Os Developers (desenvolvedores) são as pessoas que fazem o trabalho, de qualquer tipo, não só software. O Scrum Master ajuda a equipa a seguir o Scrum e tira os obstáculos.",
            "Há cinco eventos. O Sprint é o contentor, de um mês ou menos. O Sprint Planning (planeamento do sprint) define o objetivo do sprint e escolhe o trabalho. O Daily Scrum é uma verificação de 15 minutos do progresso em direção ao objetivo. A Sprint Review (revisão do sprint) mostra os resultados às pessoas para quem é o trabalho. A Sprint Retrospective (retrospetiva do sprint) olha para a forma como a equipa trabalhou e escolhe melhorias.",
            "Há três artefactos: o Product Backlog (todo o trabalho, por ordem), o Sprint Backlog (o trabalho escolhido para este sprint) e o Increment (incremento: o resultado que se pode usar). Num projeto pequeno, uma pessoa pode ter mais de um papel. Não há problema, desde que cada tarefa seja feita."
          ],
          words: [["Product Owner", "a pessoa que decide que trabalho importa mais e põe o backlog em ordem."], ["Scrum Master", "a pessoa que ajuda a equipa a usar bem o Scrum e tira os obstáculos."], ["Incremento (Increment)", "o resultado que se pode usar, produzido por um sprint."], ["Retrospetiva", "uma reunião no fim de um sprint sobre a forma como a equipa trabalhou; parecida com uma revisão pós-ação."]],
          slides: [
            { title: "Três responsabilidades", bullets: ["Product Owner: o que importa mais", "Developers: fazem o trabalho", "Scrum Master: ajuda a equipa e tira os obstáculos"] },
            { title: "Cinco eventos", bullets: ["Sprint: um mês ou menos", "Sprint Planning e o Daily Scrum (15 minutos)", "Sprint Review e Sprint Retrospective"] },
            { title: "Três artefactos", bullets: ["Product Backlog: todo o trabalho, por ordem", "Sprint Backlog: o trabalho deste sprint", "Increment: o resultado que se pode usar"] }
          ],
          sources: [{ name: "The Scrum Guide (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Para o seu projeto, escreva quem vai ser o Product Owner, o Scrum Master e os Developers. Se for só você, escreva que papel vai assumir em cada evento.",
          youCanNow: "dizer as três responsabilidades do Scrum, os cinco eventos e os três artefactos, e distribuí-los no seu projeto.",
          quickCheck: [
            { objective: "O2", q: "O que é o Increment (incremento) no Scrum?", options: ["O resultado que se pode usar, produzido pelo sprint", "A lista de todo o trabalho", "Uma reunião diária", "O relatório do Scrum Master"], answer: 0, why: "O Increment é o resultado que se pode usar; o Product Backlog é a lista de todo o trabalho." },
            { objective: "O2", q: "Você é a única pessoa num pequeno projeto. O que faz com os papéis do Scrum?", options: ["Para, porque o Scrum precisa de pelo menos três pessoas", "Contrata primeiro um Scrum Master", "Assume mais de um papel e garante que cada tarefa é feita", "Salta o trabalho do Product Owner"], answer: 2, why: "Num projeto pequeno, uma pessoa pode ter mais de um papel, desde que cada tarefa seja feita." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever histórias de utilizador e construir um backlog",
          minutes: 6,
          goal: "Transformar um projeto num backlog de histórias de utilizador por ordem de prioridade, com metas claras de fim.",
          text: [
            "Uma história de utilizador descreve uma parte do trabalho do ponto de vista da pessoa que ela ajuda: \"Como [tipo de pessoa], eu quero [alguma coisa] para que [razão].\" Por exemplo: \"Como responsável de recrutamento, eu quero um currículo de uma página para que possa ver depressa as capacidades do candidato.\"",
            "Cada história precisa de critérios de aceitação: duas ou três verificações que dizem quando está feita. Para a história do currículo: cabe numa página, mostra três resultados que se podem medir, não tem erros de ortografia. Metas de fim claras evitam discussões mais tarde.",
            "Ponha as histórias por ordem: as de mais valor e mais urgentes em cima. Um assistente de IA como o ChatGPT, o Microsoft Copilot ou o Google Gemini pode ajudar a escrever rascunhos de histórias a partir da descrição de um projeto, mas é você que decide a ordem e verifica que cada história é trabalho real."
          ],
          steps: ["Liste tudo o que o projeto precisa, um item por linha.", "Reescreva cada item como \"Como..., eu quero... para que...\".", "Acrescente dois ou três critérios de aceitação a cada um.", "Divida qualquer história grande demais para terminar num sprint.", "Ponha as histórias por ordem de prioridade, de cima para baixo."],
          words: [["História de utilizador (user story)", "uma descrição curta de trabalho, do ponto de vista da pessoa que ele ajuda."], ["Critérios de aceitação", "as verificações que dizem que uma história está feita."], ["Backlog", "a lista ordenada de todo o trabalho do projeto."]],
          slides: [
            { title: "O modelo da história de utilizador", bullets: ["Como [tipo de pessoa]", "eu quero [alguma coisa]", "para que [razão]"] },
            { title: "Critérios de aceitação", bullets: ["Duas ou três verificações que querem dizer \"feito\"", "Exemplo: cabe numa página, três resultados, sem erros"] },
            { title: "Ordenar o backlog", bullets: ["O de mais valor e mais urgente em cima", "Dividir histórias grandes demais para um sprint", "A IA pode fazer rascunhos; você decide a ordem"] }
          ],
          tryIt: "Escreva pelo menos oito histórias de utilizador para o seu projeto, cada uma com critérios de aceitação, e ponha-as por ordem de prioridade. Pode pedir a um assistente de IA: \"Transforme este projeto em histórias de utilizador com critérios de aceitação\" e depois corrigir o resultado.",
          youCanNow: "escrever histórias de utilizador com critérios de aceitação e ordená-las num backlog.",
          quickCheck: [
            { objective: "O3", q: "O que dá a parte \"para que\" de uma história de utilizador?", options: ["O prazo", "A pessoa que faz o trabalho", "A razão por que o trabalho importa", "O custo"], answer: 2, why: "\"Para que\" diz a razão ou o benefício para a pessoa que a história ajuda." },
            { objective: "O3", q: "Um assistente de IA escreve histórias para o seu evento comunitário. Uma é \"Planear o evento todo\". O que faz?", options: ["Divide-a em histórias mais pequenas que cabem num sprint", "Mantém-na como a primeira história", "Apaga todas as histórias da IA", "Acrescenta-a a todos os sprints"], answer: 0, why: "Uma história grande demais para um sprint deve ser dividida em partes mais pequenas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear à maneira Ágil",
        questions: [
          { objective: "O1", q: "Qual é a principal diferença entre o Ágil e o modelo em cascata?", options: ["O Ágil não tem nenhum plano", "O Ágil entrega em rondas curtas e ajusta-se à medida que aprende", "A cascata usa sprints", "O Ágil só funciona para software"], answer: 1, why: "O Ágil trabalha em rondas curtas que entregam algo cada uma, e depois ajusta o plano." },
          { objective: "O2", q: "Segundo o Guia do Scrum, quanto tempo pode durar um sprint?", options: ["Um mês ou menos", "O tempo que o chefe quiser", "Um ano", "Exatamente seis meses"], answer: 0, why: "O Guia do Scrum diz que os sprints duram um mês ou menos." },
          { objective: "O2", q: "Quem decide que trabalho importa mais e mantém o backlog em ordem?", options: ["Quem terminar primeiro", "O Scrum Master", "O advogado do cliente", "O Product Owner"], answer: 3, why: "O Product Owner põe o Product Backlog em ordem." },
          { objective: "O3", q: "Qual é uma história de utilizador bem escrita?", options: ["\"Currículo\"", "\"Arranjar coisas\"", "\"Como responsável de recrutamento, eu quero um currículo de uma página para que possa ver as capacidades depressa\"", "\"Fazer tudo até sexta-feira\""], answer: 2, why: "Diz a pessoa, o que ela quer e porquê." },
          { objective: "O3", q: "Uma história é grande demais para terminar num sprint. O que faz?", options: ["Faz um sprint de um ano", "Apaga-a", "Divide-a em histórias mais pequenas", "Salta os critérios de aceitação"], answer: 2, why: "As histórias grandes dividem-se para que cada parte possa terminar num sprint." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir um sprint",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planear um sprint com um objetivo claro",
          minutes: 5,
          goal: "Planear um sprint de uma ou duas semanas com um objetivo do sprint e a quantidade certa de trabalho.",
          text: [
            "O Sprint Planning responde a três perguntas: porque este sprint tem valor (o objetivo do sprint), o que pode ser feito (que histórias) e como vai ser feito (as tarefas).",
            "O objetivo do sprint é uma frase, como a intenção do comandante: \"Até sexta-feira, tenho um currículo pronto e cinco candidaturas adaptadas enviadas.\" Se os planos mudarem a meio, o objetivo diz a todos o que ainda importa.",
            "Tire histórias do topo do backlog até o tempo da equipa estar cheio, e deixe alguma folga. As equipas novas quase sempre planeiam demais. Divida cada história em tarefas de um dia ou menos."
          ],
          steps: ["Decida a duração do sprint (uma ou duas semanas é bom para quem começa).", "Escreva um objetivo do sprint numa frase.", "Tire do topo do backlog as histórias que servem o objetivo.", "Divida cada história em tarefas de um dia ou menos.", "Compare o total com as horas que tem de verdade e corte se for preciso."],
          words: [["Objetivo do sprint (sprint goal)", "uma frase que diz o que o sprint deve conseguir."], ["Capacidade", "quanto tempo a equipa tem de verdade durante o sprint."]],
          slides: [
            { title: "O Sprint Planning responde", bullets: ["Porquê: o objetivo do sprint", "O quê: que histórias", "Como: as tarefas"] },
            { title: "Um bom objetivo do sprint", bullets: ["Uma frase, como a intenção do comandante", "Diz o que ainda importa se os planos mudarem"] },
            { title: "Não sobrecarregue", bullets: ["Tire do topo do backlog", "Tarefas de um dia ou menos", "Deixe folga: as equipas novas planeiam demais"] }
          ],
          tryIt: "Planeie um sprint de uma semana para o seu projeto: escreva o objetivo do sprint, escolha as histórias, divida-as em tarefas e compare-as com as horas que tem de facto esta semana.",
          youCanNow: "planear um sprint com um objetivo, histórias escolhidas e tarefas que cabem no seu tempo real.",
          quickCheck: [
            { objective: "O4", q: "Quanto tempo deve durar, idealmente, uma tarefa num plano de sprint?", options: ["Um sprint inteiro", "Um dia ou menos", "Pelo menos uma semana", "Um mês"], answer: 1, why: "Dividir as histórias em tarefas de um dia ou menos torna o progresso fácil de acompanhar." },
            { objective: "O4", q: "A meio do sprint, os planos mudam. O que diz à equipa o que ainda importa?", options: ["O cartão mais antigo do quadro", "Quem fala mais alto", "A retrospetiva do ano passado", "O objetivo do sprint"], answer: 3, why: "Como a intenção do comandante, o objetivo do sprint diz o que ainda importa quando os planos mudam." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gerir o trabalho num quadro de tarefas",
          minutes: 5,
          goal: "Montar um quadro de tarefas e usar um ponto de situação diário para manter o trabalho a avançar.",
          text: [
            "Um quadro de tarefas mostra o trabalho em colunas: Por fazer, Em curso e Feito. Cada tarefa é um cartão que anda para a direita à medida que o trabalho avança. Pode usar notas autocolantes numa parede, uma folha de cálculo ou um quadro gratuito como o Trello, o Microsoft Planner ou o GitHub Projects.",
            "O Kanban acrescenta um limite de trabalho em curso (limite WIP, do inglês \"work in progress\"): por exemplo, no máximo dois cartões Em curso por pessoa. Terminar trabalho vale mais do que começar trabalho novo.",
            "O Daily Scrum dura 15 minutos. Cada pessoa partilha o progresso em direção ao objetivo do sprint, o que vem a seguir e o que a está a bloquear. Os obstáculos resolvem-se depois da reunião, não durante."
          ],
          steps: ["Faça três colunas: Por fazer, Em curso, Feito.", "Acrescente um cartão por cada tarefa do seu plano de sprint.", "Defina um limite WIP, como dois cartões Em curso.", "Todos os dias, mova os cartões e faça um ponto de situação de 15 minutos.", "Escreva os obstáculos e quem os vai resolver."],
          words: [["Quadro de tarefas", "um quadro com colunas que mostra em que ponto está cada tarefa."], ["Limite WIP", "um máximo de tarefas que podem estar em curso ao mesmo tempo."], ["Obstáculo (blocker)", "qualquer coisa que impede uma tarefa de avançar."]],
          slides: [
            { title: "Um quadro de tarefas simples", bullets: ["Por fazer, Em curso, Feito", "Um cartão por tarefa", "Notas autocolantes, uma folha de cálculo ou um quadro gratuito"] },
            { title: "Limitar o trabalho em curso", bullets: ["Por exemplo: dois cartões por pessoa", "Terminar trabalho antes de começar trabalho novo"] },
            { title: "O Daily Scrum de 15 minutos", bullets: ["Progresso em direção ao objetivo do sprint", "O que vem a seguir", "Obstáculos: resolvê-los depois da reunião"] }
          ],
          tryIt: "Monte um quadro de tarefas para o seu sprint com três colunas e um cartão por tarefa. Defina um limite WIP. Nos próximos três dias, mova os cartões e escreva um ponto de situação diário de duas linhas.",
          youCanNow: "gerir um sprint num quadro de tarefas com um limite WIP e um curto ponto de situação diário.",
          quickCheck: [
            { objective: "O5", q: "Que três coisas cada pessoa partilha no Daily Scrum?", options: ["O salário, o cargo e as horas", "Todos os detalhes de todas as tarefas", "A sua opinião sobre o Product Owner", "O progresso em direção ao objetivo, o que vem a seguir e os obstáculos"], answer: 3, why: "O Daily Scrum é uma verificação curta do progresso em direção ao objetivo do sprint, dos próximos passos e dos obstáculos." },
            { objective: "O5", q: "Terminou uma tarefa. O que faz com o cartão dela?", options: ["Deixa-o em Em curso", "Move-o para Feito", "Deita-o fora antes que alguém o veja", "Volta a pô-lo em Por fazer"], answer: 1, why: "Os cartões andam para a direita à medida que o trabalho avança, por isso uma tarefa terminada vai para Feito." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fechar o sprint: revisão e retrospetiva",
          minutes: 5,
          goal: "Fazer uma revisão do sprint e uma retrospetiva e transformá-las numa mudança para o sprint seguinte.",
          text: [
            "A Sprint Review mostra o trabalho terminado às pessoas para quem é e pergunta o que acham. Mostre só trabalho que cumpre os seus critérios de aceitação. Os comentários delas voltam para o backlog.",
            "A Sprint Retrospective é sobre a forma como trabalhou, não sobre o que construiu. Funciona como uma revisão pós-ação: o que devia acontecer, o que aconteceu, porquê, e o que fazer de outra forma. Um formato simples é Manter, Parar, Experimentar.",
            "Escolha uma melhoria e ponha-a no sprint seguinte como uma tarefa real. Uma retrospetiva que não muda nada é só uma reunião. As certificações Ágeis, como a Certified ScrumMaster da Scrum Alliance ou a Professional Scrum Master da Scrum.org, podem vir mais tarde; veja nos sites delas os requisitos e os preços atuais."
          ],
          steps: ["Liste o que ficou terminado e cumpre os seus critérios de aceitação.", "Mostre-o às pessoas para quem é e escreva os comentários delas.", "Acrescente os comentários ao backlog.", "Faça uma retrospetiva Manter / Parar / Experimentar.", "Ponha uma melhoria no sprint seguinte."],
          words: [["Sprint Review", "uma reunião para mostrar o trabalho terminado e receber comentários."], ["Revisão pós-ação", "uma análise militar depois de uma missão sobre o que foi planeado, o que aconteceu e o que mudar."], ["Manter / Parar / Experimentar", "um formato simples de retrospetiva."]],
          slides: [
            { title: "Sprint Review", bullets: ["Mostre só trabalho terminado", "Pergunte às pessoas para quem é", "Os comentários vão para o backlog"] },
            { title: "Retrospetiva = revisão pós-ação", bullets: ["Sobre a forma como trabalhou", "Manter, Parar, Experimentar"] },
            { title: "Faça valer a pena", bullets: ["Escolha uma melhoria", "Ponha-a no sprint seguinte como tarefa"] }
          ],
          sources: [{ name: "Scrum Alliance: Certified ScrumMaster", url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" }, { name: "Scrum.org assessments", url: "https://www.scrum.org/assessments" }],
          tryIt: "Tarefa final: termine o seu sprint de uma semana. Escreva uma curta revisão do sprint (o que está feito, quem viu, o que disseram) e uma retrospetiva Manter / Parar / Experimentar, e depois acrescente uma melhoria ao sprint seguinte.",
          youCanNow: "fechar um sprint com uma revisão e uma retrospetiva e levar uma melhoria para o sprint seguinte.",
          quickCheck: [
            { objective: "O6", q: "Uma retrospetiva parece-se mais com que prática militar?", options: ["Uma revisão pós-ação", "Uma cerimónia de passagem de comando", "Um pedido de abastecimento", "Uma inspeção de fardas"], answer: 0, why: "Como uma revisão pós-ação, pergunta o que foi planeado, o que aconteceu, porquê e o que mudar." },
            { objective: "O6", q: "A sua equipa listou cinco coisas a experimentar no próximo sprint. O que faz a retrospetiva valer a pena?", options: ["Experimentar as cinco ao mesmo tempo", "Escrevê-las e esquecê-las", "Escolher uma e acrescentá-la ao sprint seguinte como uma tarefa real", "Fazer outra reunião para falar delas"], answer: 2, why: "Uma melhoria transformada numa tarefa real é o que muda a forma como a equipa trabalha." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir um sprint",
        questions: [
          { objective: "O4", q: "O que é o objetivo do sprint?", options: ["Uma lista de todas as tarefas", "O salário da equipa", "Uma frase que diz o que o sprint deve conseguir", "Um prazo para o projeto inteiro"], answer: 2, why: "O objetivo do sprint é uma meta numa frase que orienta as escolhas durante o sprint." },
          { objective: "O4", q: "A sua equipa planeou 60 horas de trabalho mas tem 40 horas disponíveis. O que deve fazer?", options: ["Manter as 60 horas e trabalhar aos fins de semana", "Cortar histórias até o plano caber no tempo real", "Saltar o Daily Scrum", "Fazer o sprint mais longo sem dizer a ninguém"], answer: 1, why: "Planeie para a capacidade real; sprints sobrecarregados falham." },
          { objective: "O5", q: "O que faz um limite WIP?", options: ["Põe um máximo de tarefas em curso ao mesmo tempo", "Limita quantas pessoas podem entrar", "Define o orçamento do projeto", "Tira a coluna Feito"], answer: 0, why: "Um limite WIP leva a equipa a terminar trabalho antes de começar mais." },
          { objective: "O5", q: "Um colega fala de um obstáculo no Daily Scrum. Quando deve ser resolvido?", options: ["Durante a reunião, durante uma hora", "Nunca", "No fim do projeto", "Depois da reunião, pelas pessoas que podem ajudar"], answer: 3, why: "O Daily Scrum fica nos 15 minutos; os obstáculos tratam-se logo a seguir." },
          { objective: "O6", q: "Sobre o que é a retrospetiva?", options: ["Vender o produto", "Escolher um novo Product Owner", "Escrever o orçamento", "A forma como a equipa trabalhou e o que mudar"], answer: 3, why: "A retrospetiva analisa a forma como a equipa trabalhou, como uma revisão pós-ação." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gestão Ágil de Projetos",
    questions: [
      { objective: "O1", q: "Os projetos Ágeis entregam:", options: ["Tudo só no fim", "Só papelada", "Algo que se pode usar, em rondas curtas", "Nada até o orçamento acabar"], answer: 2, why: "O Ágil entrega trabalho que se pode usar a cada poucas semanas." },
      { objective: "O1", q: "Que situação serve melhor o modelo em cascata do que o Ágil?", options: ["Uma aplicação nova em que as necessidades dos utilizadores não são claras", "Um trabalho bem conhecido que não vai mudar, como fazer as fundações de uma casa", "Um teste de marketing com resultados desconhecidos", "Um projeto em que os comentários mudam o plano todas as semanas"], answer: 1, why: "A cascata funciona quando o trabalho é bem conhecido e estável." },
      { objective: "O1", q: "O Scrum e o Kanban são:", options: ["Duas formas comuns de fazer Ágil", "Duas linguagens de programação", "Dois exames de certificação", "Dois tipos de orçamento"], answer: 0, why: "Os dois são métodos Ágeis populares." },
      { objective: "O2", q: "Quem ajuda a equipa a usar bem o Scrum e tira os obstáculos?", options: ["O Product Owner", "O contabilista", "O cliente", "O Scrum Master"], answer: 3, why: "Esse é o trabalho do Scrum Master." },
      { objective: "O2", q: "No Scrum, \"Developers\" quer dizer:", options: ["Só programadores de software", "Os gestores", "Construtores de imóveis", "As pessoas que fazem o trabalho, de qualquer tipo"], answer: 3, why: "Os Developers são quem faz o trabalho do sprint." },
      { objective: "O2", q: "Quanto tempo dura o Daily Scrum?", options: ["Um dia inteiro", "Duas horas", "15 minutos", "Não há limite"], answer: 2, why: "O Guia do Scrum fixa o Daily Scrum em 15 minutos." },
      { objective: "O2", q: "Qual NÃO é um dos três artefactos do Scrum?", options: ["Product Backlog", "Relatório anual", "Increment", "Sprint Backlog"], answer: 1, why: "Os artefactos são o Product Backlog, o Sprint Backlog e o Increment." },
      { objective: "O3", q: "Complete o modelo da história de utilizador: \"Como ___, eu quero ___ ...\"", options: ["\"...para que [razão]\"", "\"...até sexta-feira\"", "\"...de graça\"", "\"...senão\""], answer: 0, why: "O modelo termina com a razão: para que..." },
      { objective: "O3", q: "Os critérios de aceitação são:", options: ["As verificações que dizem que uma história está feita", "As candidaturas de emprego da equipa", "O preço do projeto", "Uma lista dos membros da equipa"], answer: 0, why: "Definem quando uma história conta como terminada." },
      { objective: "O3", q: "Um assistente de IA escreve dez histórias de utilizador para você. Qual é o seu trabalho?", options: ["Usá-las sem as ler", "Pedir à IA para gerir o sprint", "Apagar o backlog", "Verificá-las, corrigi-las e decidir a ordem"], answer: 3, why: "A IA pode fazer rascunhos; você verifica o trabalho e define as prioridades." },
      { objective: "O3", q: "Os itens do topo do backlog devem ser:", options: ["Os mais fáceis", "Escolhidos ao acaso", "Os de mais valor e mais urgentes", "Os mais antigos"], answer: 2, why: "O backlog é ordenado por valor e urgência." },
      { objective: "O4", q: "O Sprint Planning responde a que três perguntas?", options: ["Quem, onde, quando", "Porquê, o quê e como", "Custo, preço, lucro", "Começar, parar, pausar"], answer: 1, why: "Porquê (o objetivo), o quê (as histórias), como (as tarefas)." },
      { objective: "O4", q: "O objetivo do sprint parece-se mais com que ideia militar?", options: ["Inspeção de fardas", "Intenção do comandante", "Escalão salarial", "Pedido de licença"], answer: 1, why: "Os dois dizem o que importa se os planos mudarem." },
      { objective: "O4", q: "As tarefas num sprint devem durar, idealmente:", options: ["Um dia ou menos", "Um mês cada", "Um ano", "Nenhum tempo"], answer: 0, why: "Tarefas pequenas mostram o progresso e revelam os problemas cedo." },
      { objective: "O5", q: "Um quadro de tarefas básico tem que colunas?", options: ["Vermelho, branco, azul", "Sim e Não", "Segunda a sexta-feira", "Por fazer, Em curso, Feito"], answer: 3, why: "Essas três colunas mostram em que ponto está cada tarefa." },
      { objective: "O5", q: "Tem cinco cartões Em curso e um limite WIP de dois. O que deve fazer?", options: ["Começar uma sexta tarefa", "Tirar o limite", "Terminar trabalho antes de começar algo novo", "Mover todos para Feito"], answer: 2, why: "Um limite WIP quer dizer que terminar vale mais do que começar." },
      { objective: "O6", q: "Na Sprint Review deve mostrar:", options: ["Nada; é uma reunião de planeamento", "Trabalho a meio como se estivesse feito", "Só trabalho que cumpre os seus critérios de aceitação", "Os horários pessoais da equipa"], answer: 2, why: "Só se mostra trabalho terminado, para que os comentários sejam honestos." },
      { objective: "O6", q: "Os comentários da Sprint Review vão:", options: ["Para o lixo", "Para o backlog", "Só para a retrospetiva", "Para um advogado"], answer: 1, why: "Os novos comentários tornam-se itens do backlog." },
      { objective: "O6", q: "Manter / Parar / Experimentar é um formato para:", options: ["A retrospetiva", "O orçamento", "Contratar pessoas", "As histórias de utilizador"], answer: 0, why: "É uma forma simples de fazer uma retrospetiva." },
      { objective: "O6", q: "Onde deve confirmar os requisitos e o preço atuais de uma certificação Ágil?", options: ["Numa mensagem qualquer de um fórum", "Num anúncio nas redes sociais", "Só numa resposta de uma conversa com IA", "No site oficial da entidade certificadora, como a Scrum Alliance ou a Scrum.org"], answer: 3, why: "Os requisitos e os preços mudam; o site oficial é a fonte." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      3,
      6,
      7,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Backlog de histórias de utilizador",
        objective: "O3",
        notYet: "Menos de oito histórias, ou itens escritos como simples tarefas sem \"para que\".",
        meets: "Pelo menos oito histórias no modelo, cada uma com dois ou três critérios de aceitação, por ordem de prioridade.",
        exceeds: "As histórias grandes estão divididas e o aluno sabe explicar porque a primeira história está em primeiro."
      },
      {
        name: "Plano do sprint",
        objective: "O4",
        notYet: "Não há objetivo do sprint, ou o trabalho é mais do que o tempo disponível.",
        meets: "Um objetivo do sprint numa frase, histórias do topo do backlog e tarefas de um dia ou menos que cabem nas horas.",
        exceeds: "Deixa alguma folga e diz o que cortaria primeiro."
      },
      {
        name: "Quadro de tarefas",
        objective: "O5",
        notYet: "O quadro foi montado, mas os cartões não foram movidos durante a semana.",
        meets: "Colunas Por fazer, Em curso e Feito, um limite WIP e cartões movidos todos os dias.",
        exceeds: "Os obstáculos foram escritos, com quem os resolveu."
      },
      {
        name: "Revisão e retrospetiva",
        objective: "O6",
        notYet: "Falta a revisão ou a retrospetiva.",
        meets: "Uma revisão por escrito com os comentários acrescentados ao backlog, e Manter, Parar e Experimentar listados.",
        exceeds: "Uma melhoria já é uma tarefa no sprint seguinte."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que acrescentam experiência em Ágil ou Scrum ao currículo ou ao perfil do LinkedIn em 30 dias",
      "Alunos que se candidatam ou começam uma função de projeto, programa ou operações em 90 dias",
      "Alunos que avançam para uma certificação Ágil, como a Certified ScrumMaster ou a Professional Scrum Master"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um quadro de tarefas gratuito (Trello, Microsoft Planner ou GitHub Projects), uma folha de cálculo ou notas autocolantes numa parede",
      "Um telefone ou computador; um assistente de IA é opcional para os rascunhos das histórias",
      "Papel e caneta, ou um documento, para o backlog, o plano do sprint, a revisão e a retrospetiva",
      "Cerca de 60 minutos para as lições e as verificações, mais uma semana para fazer o sprint"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; mostre um quadro de exemplo num ecrã partilhado.",
      "Ligue cada ideia à experiência militar: objetivo do sprint e intenção do comandante, retrospetiva e revisão pós-ação.",
      "Peça aos alunos para escolherem um projeto pessoal ou comunitário real, para que o sprint seja trabalho a sério.",
      "Faça um curto ponto de situação em grupo durante a semana do sprint, para os alunos praticarem o Daily Scrum em voz alta.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
