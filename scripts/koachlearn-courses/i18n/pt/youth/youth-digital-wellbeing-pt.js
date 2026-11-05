"use strict";

// Koach Learn course (Portuguese translation of youth/youth-digital-wellbeing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Phone menu names differ by phone and language, so the English names (Settings, Screen Time, Digital Wellbeing) are given next to the Portuguese ones.

module.exports = {
  id: "youth-digital-wellbeing-pt",
  lang: "pt",
  translationOf: "youth-digital-wellbeing",
  category: "Youth",
  name: "Bem-estar Digital e Tempo de Ecrã Saudável",
  skills: "Verificar o seu tempo de ecrã real, Reconhecer as funções feitas para o manter a deslizar, Proteger o seu sono dos ecrãs, Controlar as notificações e definir limites nas aplicações, Criar um feed mais saudável, Fazer e testar um plano de ecrã",
  outcome: "verificar como usa realmente o seu telefone, reconhecer as funções que o puxam de volta, mudar as suas definições e hábitos para proteger o seu sono, a sua concentração e o seu humor, e seguir um plano de ecrã pessoal durante uma semana.",
  about: [
    "Os telefones, os jogos e as redes sociais podem ser ótimos: amigos, música, aprender, criar, pedir ajuda. Mas também são feitos para o manter neles o máximo de tempo possível. Bem-estar digital quer dizer usar os ecrãs de uma forma que o ajuda, e não de uma forma que toma conta do seu sono, da escola, do desporto, do trabalho ou do seu humor.",
    "Este curso é para jovens que querem ter mais controlo, não um sermão. Ninguém lhe vai dizer para deitar fora o telefone. Você vai olhar para os seus próprios números, aprender os truques que as aplicações usam, mudar algumas definições e fazer um plano que se ajusta à sua vida.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" no seu próprio telefone ou aparelho. Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva o seu plano de ecrã pessoal e teste-o durante sete dias: a sua meta de tempo de ecrã, as duas aplicações principais a limitar (com os limites definidos no telefone), as mudanças nas notificações, uma hora para desligar os ecrãs antes de dormir e um lugar para estacionar o telefone à noite, duas coisas para fazer em vez de deslizar no ecrã e uma mudança no seu feed. No fim da semana, compare o seu tempo de ecrã e o seu sono com a semana anterior.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens, sobretudo adolescentes, que usam telefones, jogos e redes sociais todos os dias e querem ter mais controlo sobre o seu tempo de ecrã sem ouvir sermões.",
    startingPoint: "Usam o telefone com confiança para aplicações, jogos e mensagens. A maioria pensa que o seu tempo de ecrã é menor do que é, tem quase todas as notificações ligadas, desliza no ecrã até tarde e nunca definiu limites nas aplicações nem mudou o seu feed de propósito.",
    gap: "As aplicações são feitas para manter as pessoas nelas, e isso pode tirar tempo ao sono, à escola, ao desporto, ao trabalho e afetar o humor. Os jovens precisam de ver os seus números reais, reconhecer os ganchos, mudar as definições e os hábitos e testar um plano, para que os ecrãs os ajudem em vez de tomarem conta deles.",
    constraints: [
      "É preciso um telefone ou aparelho próprio para as tarefas de prática; os menus mudam de telefone para telefone",
      "Sem sermões: os alunos escolhem as suas próprias metas",
      "Saúde mental: os alunos que se sentem muitas vezes em baixo são encaminhados para um adulto de confiança, um médico ou uma linha de crise, e não são tratados no curso",
      "Privacidade: os alunos guardam os seus números e notas para si, a não ser que queiram partilhar",
      "Lições curtas e palavras simples"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando as definições do seu próprio telefone", action: "encontrar o seu tempo de ecrã diário, as aplicações que mais usa e as vezes que pega no telefone ou as notificações, e compará-los com as suas metas", standard: "anotando os três números" },
    { id: "O2", condition: "Numa aplicação que usa muito", action: "identificar os ganchos de design que o puxam de volta e desligar ou contornar um deles", standard: "nomeando pelo menos três ganchos" },
    { id: "O3", condition: "Para as suas noites", action: "definir uma hora para desligar os ecrãs, um lugar para estacionar o telefone longe da cama e um modo de sono", standard: "com os ecrãs afastados cerca de 30 minutos antes da hora de dormir" },
    { id: "O4", condition: "Usando as definições do seu telefone", action: "desligar as notificações que não são essenciais e definir um limite diário na aplicação que mais usa", standard: "desligando as notificações de pelo menos três aplicações" },
    { id: "O5", condition: "Na sua rede social principal", action: "mudar o seu feed silenciando ou deixando de seguir contas que o fazem sentir pior e seguindo contas que o ajudam a crescer", standard: "mudando pelo menos duas contas em cada sentido" },
    { id: "O6", condition: "Usando o que preparou neste curso", action: "escrever um plano de ecrã pessoal, segui-lo durante sete dias e comparar os resultados com os seus números iniciais", standard: "com todas as partes do plano e uma comparação de antes e depois" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer os seus hábitos de ecrã",
      lessons: [
        {
          objectives: ["O1"],
          title: "Verificar o seu tempo de ecrã real",
          minutes: 4,
          goal: "Encontrar o seu tempo de ecrã diário e as aplicações que mais usa no seu próprio telefone.",
          text: [
            "A maioria das pessoas pensa que passa menos tempo no ecrã do que passa. O seu telefone já mede isso. Num iPhone, abra as Definições (Settings) e procure Tempo de ecrã (Screen Time). Em muitos telefones Android, abra as Definições e procure Bem-estar digital (Digital Wellbeing). Os nomes podem mudar de telefone para telefone; se não encontrar, procure \"tempo de ecrã\" nas Definições.",
            "Olhe para três números: a sua média diária, as aplicações que mais usa e quantas vezes pega no telefone ou recebe notificações. As vezes que pega no telefone e as notificações mostram com que frequência o telefone o puxa de volta.",
            "Não existe um número perfeito para todos. O que importa é se o seu tempo de ecrã se ajusta às suas metas: dormir o suficiente, fazer os trabalhos da escola ou do emprego, ter tempo para estar com os amigos em pessoa, desporto, descanso e passatempos. Os seus números são um ponto de partida, não uma nota."
          ],
          steps: ["Abra as Definições do seu telefone.", "Encontre Tempo de ecrã (iPhone) ou Bem-estar digital (muitos telefones Android), ou procure \"tempo de ecrã\" nas Definições.", "Anote a sua média diária, as três aplicações que mais usa e as vezes que pega no telefone ou as notificações.", "Pergunte a si mesmo: isto ajusta-se às minhas metas?"],
          words: [["Tempo de ecrã", "o tempo que passa a olhar para um ecrã."], ["Pegar no telefone (em inglês, \"pickup\")", "cada vez que pega no telefone ou o desbloqueia."], ["Bem-estar digital", "usar a tecnologia de uma forma que apoia a sua saúde, as suas metas e o seu humor."]],
          slides: [
            { title: "O seu telefone já mede isso", bullets: ["iPhone: Definições e depois Tempo de ecrã", "Muitos Android: Definições e depois Bem-estar digital", "Não encontra? Procure \"tempo de ecrã\" nas Definições"] },
            { title: "Três números para verificar", bullets: ["Média diária", "Aplicações que mais usa", "Vezes que pega no telefone e notificações"] },
            { title: "Não há um número perfeito", bullets: ["Ajusta-se às suas metas?", "Sono, escola ou trabalho, amigos, desporto, descanso", "Um ponto de partida, não uma nota"] }
          ],
          tryIt: "Abra a página de tempo de ecrã do seu telefone. Anote a sua média diária, as três aplicações que mais usa e as vezes que pega no telefone ou as notificações por dia. Depois escreva uma meta que os ecrãs estão a atrapalhar, se houver.",
          youCanNow: "encontrar no seu próprio telefone o seu tempo de ecrã real, as aplicações que mais usa e as vezes que pega no telefone.",
          quickCheck: [
            { objective: "O1", q: "O que mostra o número de vezes que pega no telefone (\"pickups\")?", options: ["Quanto pesa o seu telefone", "Quantas aplicações tem", "Com que frequência o telefone o puxa de volta", "O nível da bateria"], answer: 2, why: "As vezes que pega no telefone e as notificações mostram com que frequência o telefone o puxa de volta." },
            { objective: "O1", q: "Não encontra Tempo de ecrã nem Bem-estar digital no seu telefone. O que faz?", options: ["Procura \"tempo de ecrã\" nas Definições", "Adivinha o número", "Desiste", "Descarrega uma aplicação qualquer a partir de um anúncio que aparece no ecrã"], answer: 0, why: "Os nomes mudam de telefone para telefone, por isso procure \"tempo de ecrã\" nas Definições." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Como as aplicações o mantêm a deslizar",
          minutes: 5,
          goal: "Reconhecer as funções de design que o puxam de volta.",
          text: [
            "Muitas aplicações ganham dinheiro com a sua atenção: quanto mais tempo fica, mais anúncios mostram. Por isso são feitas para ser difíceis de largar. Conhecer os truques torna mais fácil escolher por si mesmo.",
            "Ganchos comuns: o deslizar sem fim (nunca há um fim), a reprodução automática (o vídeo seguinte começa sozinho), as notificações e os números vermelhos nos ícones (fazem-no ir ver), as sequências de dias seguidos (\"streaks\", o medo de as perder), os gostos e as visualizações (continua a ver se há mais) e os feeds \"para você\" que aprendem exatamente o que o mantém a ver.",
            "Nada disto quer dizer que você é fraco. Estas funções são criadas por equipas de especialistas. A resposta é acrescentar os seus próprios pontos de paragem: desligar a reprodução automática, definir limites de tempo e decidir, antes de abrir uma aplicação, o que vai lá fazer."
          ],
          steps: ["Abra a aplicação que mais usa, da Lição 1.", "Encontre cada gancho: deslizar sem fim, reprodução automática, notificações, sequências, gostos.", "Escolha um gancho para desligar ou contornar.", "Antes de abrir uma aplicação, diga o que vai lá fazer."],
          words: [["Deslizar sem fim", "um feed que continua a carregar mais coisas, por isso não há um ponto natural para parar."], ["Reprodução automática (autoplay)", "quando o vídeo seguinte começa sozinho."], ["Algoritmo", "as regras de computador que uma aplicação usa para escolher o que lhe mostrar a seguir."]],
          slides: [
            { title: "A sua atenção é o produto", bullets: ["Mais tempo na aplicação = mais anúncios", "Por isso as aplicações são feitas para ser difíceis de largar"] },
            { title: "Ganchos comuns", bullets: ["Deslizar sem fim e reprodução automática", "Notificações e números vermelhos nos ícones", "Sequências, gostos e visualizações", "Feeds \"para você\""] },
            { title: "Acrescente os seus pontos de paragem", bullets: ["Desligue a reprodução automática", "Defina limites de tempo", "Decida primeiro o que vai fazer"] }
          ],
          tryIt: "Abra a aplicação que mais usa e faça a lista de todos os ganchos que encontrar. Desligue um (por exemplo a reprodução automática ou um tipo de notificação), se a aplicação deixar. Escreva qual mudou.",
          youCanNow: "reconhecer as funções que as aplicações usam para o manter a deslizar e acrescentar os seus próprios pontos de paragem.",
          quickCheck: [
            { objective: "O2", q: "O que é a reprodução automática?", options: ["Um modo de jogo", "O vídeo seguinte a começar sozinho", "Uma poupança de bateria", "Uma definição de privacidade"], answer: 1, why: "A reprodução automática começa o vídeo seguinte sem você escolher, e isso torna difícil parar." },
            { objective: "O2", q: "Abre uma aplicação para responder a uma mensagem e acaba a deslizar durante uma hora. Que hábito ajuda da próxima vez?", options: ["Ligar mais notificações", "Abrir mais aplicações ao mesmo tempo", "Manter uma sequência de dias", "Decidir o que vai fazer antes de abrir a aplicação"], answer: 3, why: "Decidir o que vai fazer acrescenta o seu próprio ponto de paragem." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Os ecrãs, o sono e o seu humor",
          minutes: 5,
          goal: "Definir uma hora para desligar os ecrãs e um lugar para estacionar o telefone à noite.",
          text: [
            "O sono é quando o seu corpo e o seu cérebro recuperam. O CDC (a agência de saúde pública dos Estados Unidos) diz que os adolescentes dos 13 aos 17 anos precisam de 8 a 10 horas por noite, e os adultos a partir dos 18 anos precisam de 7 ou mais. Deslizar no ecrã, jogar e trocar mensagens até tarde são dos maiores ladrões de sono: deita-se mais tarde e acorda com notificações.",
            "Os conselhos do CDC para dormir incluem ter uma hora regular para deitar e para acordar, manter o quarto escuro, calmo e fresco, e afastar os ecrãs cerca de 30 minutos antes de dormir. Um lugar para estacionar o telefone fora da cama, ou do outro lado do quarto, torna isto mais fácil. Use um despertador barato se o telefone for o seu despertador.",
            "Repare também em como os ecrãs afetam o seu humor. Se certas aplicações o deixam ansioso, zangado ou a sentir-se pior consigo mesmo, essa é uma informação útil. Se muitas vezes se sente em baixo, não consegue dormir ou sente que não há esperança, fale com um adulto de confiança ou com um médico. Nos Estados Unidos pode ligar ou enviar uma SMS para o 988 a qualquer hora; fora dos Estados Unidos, ligue para a linha de crise local ou para o número de emergência."
          ],
          steps: ["Escolha a sua hora de dormir e conte 30 minutos para trás: essa é a hora de desligar os ecrãs.", "Escolha um lugar para estacionar o telefone longe da cama.", "Ligue o modo de sono ou o modo não incomodar do telefone para a noite.", "Repare em que aplicações mudam o seu humor, e como."],
          words: [["Não incomodar", "uma definição do telefone que silencia as chamadas e as notificações durante um tempo escolhido."], ["Horário de sono", "deitar-se e acordar mais ou menos à mesma hora todos os dias."]],
          slides: [
            { title: "Quanto sono (CDC)", bullets: ["Adolescentes dos 13 aos 17: 8 a 10 horas", "Adultos a partir dos 18: 7 horas ou mais"] },
            { title: "Proteja o seu sono", bullets: ["A mesma hora para deitar e para acordar", "Quarto escuro, calmo e fresco", "Ecrãs afastados cerca de 30 minutos antes de dormir"] },
            { title: "Estacione o seu telefone", bullets: ["Longe da cama", "Modo de sono ou não incomodar ligado", "Use um despertador se precisar"] },
            { title: "Verifique o seu humor", bullets: ["Que aplicações o deixam a sentir-se pior?", "Muitas vezes em baixo ou sem dormir? Fale com alguém", "EUA: ligue ou envie SMS para o 988 a qualquer hora"] }
          ],
          sources: [{ name: "CDC: About Sleep (sobre o sono)", url: "https://www.cdc.gov/sleep/about/index.html" }, { name: "988 Suicide and Crisis Lifeline (linha de apoio em crise, EUA)", url: "https://988lifeline.org/" }],
          tryIt: "Defina a sua hora de desligar os ecrãs e o lugar para estacionar o telefone esta noite. Ligue o modo de sono ou não incomodar. Amanhã, escreva como dormiu e como se sentiu de manhã.",
          youCanNow: "proteger o seu sono com uma hora para desligar os ecrãs, um lugar para estacionar o telefone e o modo não incomodar.",
          quickCheck: [
            { objective: "O3", q: "O que é um lugar para estacionar o telefone?", options: ["Uma capa para o telefone", "Um cabo de carregar", "Uma definição de uma aplicação", "Um lugar longe da cama onde o telefone fica à noite"], answer: 3, why: "Deixar o telefone longe da cama torna mais difícil deslizar no ecrã até tarde." },
            { objective: "O3", q: "A sua hora de dormir é às 22h30. Quando afasta os ecrãs?", options: ["Às 22h30", "Por volta das 22h00", "Quando se sentir cansado", "Depois de mais um vídeo"], answer: 1, why: "Afastar os ecrãs cerca de 30 minutos antes de dormir ajuda-o a dormir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer os seus hábitos de ecrã",
        questions: [
          { objective: "O1", q: "Onde costuma encontrar o seu tempo de ecrã num iPhone?", options: ["Na aplicação da câmara", "Nas Definições, depois Tempo de ecrã", "Na calculadora", "Na App Store"], answer: 1, why: "O iPhone mede-o em Tempo de ecrã, nas Definições." },
          { objective: "O1", q: "O que lhe diz um número alto de vezes que pega no telefone?", options: ["A sua bateria é velha", "O seu telefone puxa-o de volta muitas vezes", "Tem um telefone rápido", "Nada"], answer: 1, why: "Esse número mostra com que frequência volta ao telefone." },
          { objective: "O2", q: "Porque é que muitas aplicações usam o deslizar sem fim e a reprodução automática?", options: ["Para o manter mais tempo na aplicação", "Para poupar a sua bateria", "Para o ajudar a dormir", "Porque a lei obriga"], answer: 0, why: "Mais tempo na aplicação quer dizer mais anúncios e mais dinheiro para a aplicação." },
          { objective: "O3", q: "Quantas horas de sono o CDC diz que os adolescentes dos 13 aos 17 anos precisam?", options: ["4 a 5", "5 a 6", "12 a 14", "8 a 10"], answer: 3, why: "O CDC indica 8 a 10 horas para os adolescentes dos 13 aos 17 anos." },
          { objective: "O3", q: "Que hábito protege o seu sono?", options: ["Deslizar no ecrã na cama até adormecer", "Deixar as notificações com som alto", "Afastar os ecrãs cerca de 30 minutos antes de dormir", "Jogar até às 2 da manhã em noites de escola"], answer: 2, why: "O CDC aconselha afastar os ecrãs antes de dormir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Assumir o controlo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Controlar as notificações e definir limites nas aplicações",
          minutes: 5,
          goal: "Desligar as notificações que não são essenciais e definir um limite numa aplicação.",
          text: [
            "Cada notificação é uma interrupção. Depois de ir ver o telefone, pode demorar algum tempo a voltar a concentrar-se, e isso atrasa os trabalhos de casa, o treino, o estudo ou o trabalho. É você que decide que aplicações o podem interromper.",
            "Mantenha as notificações para as pessoas e as coisas que importam (chamadas e mensagens da família, avisos da escola ou do trabalho, a sua boleia). Desligue-as para os jogos, as compras e a maior parte das redes sociais. Normalmente pode fazer isto nas Definições, em Notificações, aplicação a aplicação.",
            "Tanto o iPhone como o Android deixam definir limites de tempo diários nas aplicações, e modos de concentração ou não incomodar para a escola, o trabalho ou o treino. Quando chega a um limite, o telefone avisa. Pode ignorar o aviso, mas a pausa dá-lhe uma escolha. Algumas pessoas também tiram as aplicações tentadoras do ecrã principal ou terminam a sessão depois de as usar, para que abri-las dê um pouco mais de trabalho."
          ],
          steps: ["Abra as Definições e depois Notificações.", "Mantenha as pessoas e os avisos importantes; desligue os jogos, as compras e a maior parte das redes sociais.", "Defina um limite diário na aplicação que mais usa (Tempo de ecrã ou Bem-estar digital).", "Ligue um modo de concentração ou não incomodar durante a escola, o trabalho ou o treino.", "Tire uma aplicação tentadora do ecrã principal."],
          words: [["Notificação", "uma mensagem ou aviso de uma aplicação que aparece no seu telefone."], ["Limite de aplicação", "um limite de tempo diário que você define para uma aplicação."], ["Modo de concentração (Focus)", "uma definição que silencia as distrações enquanto trabalha, estuda ou descansa."]],
          slides: [
            { title: "Você escolhe quem o interrompe", bullets: ["Cada aviso quebra a sua concentração", "Mantenha as pessoas e os avisos importantes", "Desligue jogos, compras e quase todas as redes sociais"] },
            { title: "Defina limites nas aplicações", bullets: ["Limite diário na aplicação que mais usa", "O aviso dá-lhe uma escolha"] },
            { title: "Modos de concentração", bullets: ["Hora da escola, do trabalho ou do treino", "Silencie o barulho"] },
            { title: "Dê um pouco mais de trabalho", bullets: ["Tire as aplicações tentadoras do ecrã principal", "Termine a sessão depois de usar"] }
          ],
          tryIt: "Veja as suas notificações e desligue pelo menos três aplicações que não precisam de o interromper. Depois defina um limite de tempo diário na aplicação que mais usa, da Lição 1.",
          youCanNow: "controlar que aplicações o podem interromper, definir limites nas aplicações e usar os modos de concentração.",
          quickCheck: [
            { objective: "O4", q: "Porque é que as notificações podem atrasar os seus trabalhos de casa?", options: ["Cada uma interrompe-o, e demora tempo a voltar a concentrar-se", "Ocupam espaço no telefone", "Deixam o ecrã mais escuro", "Mudam as suas notas"], answer: 0, why: "Cada notificação é uma interrupção que tira a sua concentração." },
            { objective: "O4", q: "Uma aplicação de compras envia-lhe avisos de promoções o dia todo. O que faz?", options: ["Mantém-nos; pode perder uma promoção", "Vê cada um logo", "Desliga as notificações dessa aplicação nas Definições", "Desliga antes as suas chamadas e mensagens"], answer: 2, why: "Mantenha as notificações para as pessoas e os avisos importantes; desligue as compras e os jogos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Um feed mais saudável e menos comparações",
          minutes: 5,
          goal: "Mudar o seu feed para que o deixe a sentir-se melhor, e não pior.",
          text: [
            "As redes sociais mostram só os melhores momentos: as melhores fotos, filtros e edições. Comparar a sua vida de todos os dias com os melhores momentos de outra pessoa pode fazê-lo sentir que não é suficiente. Lembre-se de que o que vê foi escolhido e editado.",
            "Pode treinar o seu feed. Deixe de seguir ou silencie as contas que o fazem sentir-se mal com o seu corpo, o seu dinheiro ou a sua vida. Siga pessoas que lhe ensinam alguma coisa, que o fazem rir ou que apoiam as suas metas: o seu desporto, a música, a arte, uma profissão que deseja, a sua cultura. Use as opções \"não tenho interesse\" quando a aplicação as oferecer. O algoritmo aprende com o que você vê, por isso veja de propósito.",
            "Pergunte a si mesmo: \"Como me sinto depois de 10 minutos nesta aplicação?\" Se a resposta for muitas vezes \"pior\", mude o que segue ou o tempo que lá fica. Se alguém na internet estiver a ser cruel consigo, conte a um adulto de confiança; o curso da Koach Learn «Proteger-se do Cyberbullying» mostra o que fazer."
          ],
          steps: ["Deslize no seu feed durante dois minutos e repare em como cada conta o faz sentir.", "Deixe de seguir ou silencie duas contas que o fazem sentir pior.", "Siga duas contas que ensinam, inspiram ou o fazem rir.", "Use \"não tenho interesse\" nos conteúdos que não quer."],
          words: [["Melhores momentos", "só os melhores momentos, escolhidos e editados para parecerem bonitos."], ["Silenciar", "esconder as publicações de alguém sem deixar de o seguir e sem lhe dizer."]],
          slides: [
            { title: "São só os melhores momentos", bullets: ["Melhores fotos, filtros e edições", "Não compare o seu dia a dia com o melhor dos outros"] },
            { title: "Treine o seu feed", bullets: ["Deixe de seguir ou silencie o que o faz sentir pior", "Siga o que ensina, inspira ou o faz rir", "Use \"não tenho interesse\""] },
            { title: "Pergunte a si mesmo", bullets: ["Como me sinto depois de 10 minutos?", "Muitas vezes pior? Mude o que segue"] }
          ],
          tryIt: "Passe dois minutos na sua aplicação principal e dê uma nota a cada uma das primeiras dez publicações pela forma como o faz sentir (melhor, igual, pior). Silencie ou deixe de seguir duas contas \"pior\" e siga duas que o ajudam a crescer.",
          youCanNow: "moldar o seu feed para que apoie o seu humor e as suas metas, em vez de o levar a comparar-se.",
          quickCheck: [
            { objective: "O5", q: "Com que aprende o algoritmo da aplicação?", options: ["Com o que vê e faz na aplicação", "Com as suas notas da escola", "Com o tempo que faz lá fora", "Com nada; os feeds são ao acaso"], answer: 0, why: "O algoritmo aprende com o que você vê, por isso ver de propósito molda o seu feed." },
            { objective: "O5", q: "Na maior parte dos dias sente-se pior depois de 10 minutos numa aplicação. O que experimenta?", options: ["Deslizar mais tempo para se sentir melhor", "Seguir mais contas como as que o incomodam", "Ignorar como se sente", "Mudar quem segue ou o tempo que lá fica"], answer: 3, why: "Se uma aplicação o deixa muitas vezes a sentir-se pior, mude o seu feed ou o tempo que passa nela." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer e testar o seu plano de ecrã",
          minutes: 6,
          goal: "Escrever um plano de ecrã e testá-lo durante sete dias.",
          text: [
            "Um plano transforma boas ideias em hábitos. O seu plano de ecrã é curto e concreto, e é seu: é você que escolhe as metas.",
            "Inclua: a sua meta diária de tempo de ecrã, as duas aplicações principais a limitar (com os limites definidos no telefone), as mudanças nas notificações, a hora de desligar os ecrãs e o lugar para estacionar o telefone, duas coisas para fazer em vez de deslizar no ecrã quando está aborrecido (caminhar, treinar o seu desporto, desenhar, ligar a um amigo, ler, cozinhar) e uma mudança no feed.",
            "Teste-o durante sete dias e depois compare o seu tempo de ecrã, as vezes que pegou no telefone e o seu sono com os números da Lição 1. Mantenha o que resultou e mude o que não resultou. Falhar um dia é normal; basta recomeçar no dia seguinte. Contar o seu plano a um amigo ou a alguém da família, ou fazê-lo em conjunto, torna tudo mais fácil."
          ],
          steps: ["Escreva a sua meta de tempo de ecrã.", "Defina limites nas duas aplicações que mais usa.", "Faça a lista das mudanças nas notificações e da hora de desligar os ecrãs.", "Escreva duas coisas para fazer em vez de deslizar no ecrã.", "Teste durante sete dias e compare com a Lição 1."],
          words: [["Plano de ecrã", "as suas próprias regras escritas sobre quando, onde e quanto usa os ecrãs."]],
          slides: [
            { title: "O seu plano de ecrã", bullets: ["Meta de tempo de ecrã e dois limites de aplicações", "Mudanças nas notificações", "Hora de desligar os ecrãs e lugar para o telefone"] },
            { title: "Em vez de deslizar no ecrã", bullets: ["Caminhar, treinar, desenhar, ler, cozinhar", "Ligar a um amigo ou estar com ele"] },
            { title: "Teste durante sete dias", bullets: ["Compare com os números da Lição 1", "Mantenha o que resulta, mude o que não resulta", "Falhou? Recomece amanhã"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de ecrã com todas as partes, defina os limites no telefone e siga-o durante sete dias. No sétimo dia, compare o seu tempo de ecrã, as vezes que pegou no telefone e o seu sono com os números da Lição 1.",
          youCanNow: "fazer, seguir e ajustar um plano de ecrã pessoal que protege o seu sono, a sua concentração e o seu humor.",
          quickCheck: [
            { objective: "O6", q: "O que compara no fim do seu teste de sete dias?", options: ["O seu tempo de ecrã, as vezes que pegou no telefone e o sono com os números da Lição 1", "O tempo de ecrã dos seus amigos", "O preço do seu telefone", "O seu número de seguidores"], answer: 0, why: "Comparar com os seus números iniciais mostra o que resultou." },
            { objective: "O6", q: "Está aborrecido e pega no telefone. O que diz o seu plano para fazer?", options: ["Abrir a aplicação que mais usa", "Desligar os limites das aplicações", "Fazer uma das suas duas coisas em vez de deslizar, como caminhar ou telefonar", "Ficar acordado até mais tarde"], answer: 2, why: "O seu plano tem duas coisas para fazer em vez de deslizar no ecrã quando está aborrecido." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Assumir o controlo",
        questions: [
          { objective: "O4", q: "Que notificações normalmente vale a pena manter ligadas?", options: ["Mensagens da família e avisos da escola ou do trabalho", "Todos os jogos", "Promoções de compras", "Todos os gostos das redes sociais"], answer: 0, why: "Mantenha os avisos que importam; desligue os outros." },
          { objective: "O4", q: "O que acontece quando chega a um limite de aplicação que definiu?", options: ["O telefone fica bloqueado para sempre", "A aplicação é apagada", "O telefone avisa-o e dá-lhe uma escolha", "A sua conta é banida"], answer: 2, why: "O limite acrescenta uma pausa para você poder escolher." },
          { objective: "O5", q: "Porque é que comparar-se com as publicações das redes sociais é injusto para si?", options: ["As publicações são sempre falsas", "Os telefones são pequenos demais", "Ninguém publica nada verdadeiro", "As publicações são muitas vezes só os melhores momentos, escolhidos e editados"], answer: 3, why: "Está a comparar o seu dia a dia com os melhores momentos de outra pessoa." },
          { objective: "O5", q: "Uma conta faz-lhe muitas vezes sentir-se pior consigo mesmo. O que pode fazer?", options: ["Ver mais essa conta", "Silenciá-la ou deixar de a seguir", "Enviar-lhe a sua palavra-passe", "Apagar o seu telefone"], answer: 1, why: "Silenciar ou deixar de seguir muda o que o seu feed lhe mostra." },
          { objective: "O6", q: "Falhou o seu plano de ecrã no terceiro dia. E agora?", options: ["Desiste de vez", "Apaga todas as suas aplicações", "Recomeça no dia seguinte e ajusta se for preciso", "Esconde-o de toda a gente"], answer: 2, why: "Falhar é normal; continue e ajuste o plano." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Bem-estar Digital e Tempo de Ecrã Saudável",
    questions: [
      { objective: "O1", q: "Bem-estar digital quer dizer:", options: ["Nunca usar um telefone", "Usar os ecrãs de uma forma que apoia a sua saúde, as suas metas e o seu humor", "Ter o telefone mais recente", "Ter o maior número de seguidores"], answer: 1, why: "Trata-se de os ecrãs o ajudarem, e não tomarem conta de si." },
      { objective: "O1", q: "Em muitos telefones Android, o tempo de ecrã está nas Definições em:", options: ["Bem-estar digital", "Câmara", "Fundo de ecrã", "Bluetooth"], answer: 0, why: "Muitos telefones Android chamam-lhe Bem-estar digital; os nomes podem mudar." },
      { objective: "O1", q: "Que três números são mais úteis para verificar primeiro?", options: ["Bateria, armazenamento, brilho", "Seguidores, gostos, comentários", "Média diária, aplicações que mais usa, vezes que pega no telefone ou notificações", "Preço, idade e cor do telefone"], answer: 2, why: "Estes números mostram quanto e com que frequência usa o telefone." },
      { objective: "O1", q: "Existe um número de tempo de ecrã perfeito para todos?", options: ["Sim, exatamente 1 hora", "Sim, exatamente 3 horas", "Sim, zero", "Não; o que importa é se se ajusta às suas metas"], answer: 3, why: "O seu tempo de ecrã deve ajustar-se ao seu sono, à escola, ao trabalho e à sua vida." },
      { objective: "O2", q: "O deslizar sem fim é um gancho porque:", options: ["Não há um ponto natural para parar", "Poupa dados", "A lei obriga", "Deixa o ecrã mais claro"], answer: 0, why: "Sem um fim, é fácil continuar." },
      { objective: "O2", q: "Um \"algoritmo\" numa aplicação é:", options: ["Um tipo de capa de telefone", "Uma pessoa que lê as suas mensagens", "As regras de computador que escolhem o que lhe mostrar a seguir", "Um nível de um jogo"], answer: 2, why: "Os algoritmos aprendem o que o mantém a ver." },
      { objective: "O2", q: "Qual é um bom ponto de paragem para acrescentar?", options: ["Ligar a reprodução automática", "Desligar a reprodução automática", "Acrescentar mais notificações", "Tirar todos os limites"], answer: 1, why: "Desligar a reprodução automática impede o vídeo seguinte de começar sozinho." },
      { objective: "O2", q: "Antes de abrir uma aplicação, um hábito útil é:", options: ["Pôr o som no máximo", "Abrir mais cinco aplicações", "Ver todas as notificações", "Decidir o que vai lá fazer"], answer: 3, why: "Um objetivo claro torna mais fácil fechar a aplicação." },
      { objective: "O3", q: "Quantas horas de sono o CDC diz que os adultos a partir dos 18 anos precisam?", options: ["7 ou mais", "4", "5", "3 a 4"], answer: 0, why: "O CDC diz que os adultos precisam de 7 horas ou mais." },
      { objective: "O3", q: "À noite, o lugar para estacionar o telefone deve ser:", options: ["Debaixo da almofada", "Na sua mão", "Longe da cama", "Com o som alto"], answer: 2, why: "A distância da cama protege o seu sono." },
      { objective: "O3", q: "Sente-se muitas vezes em baixo e não consegue dormir. Nos Estados Unidos, onde pode pedir ajuda a qualquer hora?", options: ["Escrever isso nos comentários", "Ligar ou enviar SMS para o 988", "Esperar e não contar a ninguém", "Perguntar a uma aplicação qualquer"], answer: 1, why: "O 988 é gratuito e funciona 24 horas por dia, 7 dias por semana; fale também com um adulto de confiança ou um médico." },
      { objective: "O4", q: "Que notificação é melhor desligar?", options: ["A sua boleia chegou", "Uma mensagem do seu pai ou da sua mãe", "Um aviso da escola", "Um jogo a pedir que volte"], answer: 3, why: "Os avisos de jogos e de compras raramente precisam de o interromper." },
      { objective: "O4", q: "O que é um modo de concentração?", options: ["Uma definição que silencia as distrações enquanto estuda, trabalha ou descansa", "Um filtro da câmara", "Uma aplicação paga", "Um jogo"], answer: 0, why: "Os modos de concentração silenciam os avisos durante um tempo escolhido." },
      { objective: "O4", q: "Tirar uma aplicação tentadora do ecrã principal ajuda porque:", options: ["Apaga a sua conta", "Abri-la passa a dar um pouco mais de trabalho", "Deixa a aplicação mais rápida", "Ganha pontos"], answer: 1, why: "Um pequeno passo a mais dá-lhe tempo para escolher." },
      { objective: "O5", q: "\"Só os melhores momentos\" quer dizer:", options: ["Uma ferramenta de pesca", "Uma transmissão ao vivo, sem edição", "O seu relatório de tempo de ecrã", "Só os melhores momentos, escolhidos e editados"], answer: 3, why: "As redes sociais muitas vezes mostram só os melhores momentos, editados." },
      { objective: "O5", q: "O que faz silenciar uma conta?", options: ["Denuncia a pessoa à polícia", "Apaga a conta dela", "Esconde as publicações dela sem deixar de a seguir e sem lhe dizer", "Envia-lhe uma mensagem"], answer: 2, why: "Silenciar esconde as publicações dela sem fazer barulho." },
      { objective: "O5", q: "Uma boa pergunta para fazer a si mesmo depois de usar uma aplicação é:", options: ["Quantos gostos recebi?", "Como me sinto depois de 10 minutos nesta aplicação?", "Quem tem mais seguidores?", "O que devo comprar?"], answer: 1, why: "Reparar em como se sente ajuda-o a mudar o que usa." },
      { objective: "O6", q: "O que faz parte do seu plano de ecrã?", options: ["As suas palavras-passe", "Uma lista de pessoas com quem discutir", "Ligar todas as notificações", "Duas coisas para fazer em vez de deslizar no ecrã"], answer: 3, why: "Ter outras atividades prontas torna mais fácil largar o telefone." },
      { objective: "O6", q: "Durante quanto tempo deve testar o seu plano de ecrã antes de o avaliar?", options: ["Um minuto", "Uma hora", "Sete dias", "Nunca o testar"], answer: 2, why: "Uma semana dá-lhe números reais para comparar." },
      { objective: "O6", q: "O que torna mais fácil cumprir um plano de ecrã?", options: ["Contar a um amigo ou a alguém da família, ou fazê-lo em conjunto", "Guardá-lo em segredo", "Torná-lo o mais rígido possível", "Mudá-lo a cada hora"], answer: 0, why: "O apoio dos outros ajuda-o a continuar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Meta e limites nas aplicações",
        objective: "O4",
        notYet: "Não há meta de tempo de ecrã, ou os limites não foram definidos no telefone.",
        meets: "Uma meta diária de tempo de ecrã e limites definidos nas duas aplicações que mais usa.",
        exceeds: "Também usa um modo de concentração para a escola, o trabalho ou o treino."
      },
      {
        name: "Notificações",
        objective: "O4",
        notYet: "Nenhuma mudança nas notificações.",
        meets: "Notificações desligadas em pelo menos três aplicações não essenciais, mantendo as pessoas e os avisos importantes.",
        exceeds: "Também tirou uma aplicação tentadora do ecrã principal."
      },
      {
        name: "Plano de sono",
        objective: "O3",
        notYet: "Não há hora para desligar os ecrãs nem lugar para estacionar o telefone.",
        meets: "Uma hora para desligar os ecrãs cerca de 30 minutos antes de dormir e um lugar para o telefone longe da cama.",
        exceeds: "O modo de sono ou não incomodar está ligado em todas as noites do teste."
      },
      {
        name: "Feed e alternativas",
        objective: "O5",
        notYet: "Nenhuma mudança no feed, ou nenhuma alternativa a deslizar no ecrã.",
        meets: "Uma mudança no feed e duas coisas para fazer em vez de deslizar no ecrã.",
        exceeds: "Anota como a mudança no feed afetou o seu humor."
      },
      {
        name: "Teste de sete dias",
        objective: "O6",
        notYet: "O plano não foi testado, ou os resultados não foram comparados.",
        meets: "Seguido durante sete dias, com o tempo de ecrã, as vezes que pegou no telefone e o sono comparados com a Lição 1.",
        exceeds: "Diz o que manter e o que mudar na próxima semana."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos cujo tempo de ecrã ou número de vezes que pegam no telefone desce depois do teste de sete dias (dito pelos próprios)",
      "Alunos que dizem dormir mais horas no seguimento aos 30 dias",
      "Alunos que ainda usam o seu plano de ecrã depois de 30 dias (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "O telefone ou aparelho do próprio aluno",
      "Papel ou uma aplicação de notas para o plano de ecrã e as notas diárias",
      "Um despertador barato, se o telefone for usado como despertador (opcional)",
      "Cerca de 60 minutos no total, mais um teste de sete dias"
    ],
    facilitatorNotes: [
      "Mantenha isto como uma escolha, não um sermão: os alunos definem as suas próprias metas e guardam os seus números para si, a não ser que queiram partilhar.",
      "Ajude os alunos com telefones diferentes a encontrar as definições certas; os menus mudam de aparelho para aparelho.",
      "Partilhe os recursos locais de saúde mental e de crise, incluindo o 988 nos Estados Unidos, e diga aos alunos com quem falar se se sentirem muitas vezes em baixo.",
      "Faça o teste de sete dias como um desafio de grupo, com um encontro no fim da semana.",
      "Avalie o plano de ecrã com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
