"use strict";

// Koach Learn course (Portuguese translation of leadership/lead-coaching-mentoring.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// GROW and SMART keep their English letters, with the Portuguese meaning given beside each word.

module.exports = {
  id: "lead-coaching-mentoring-pt",
  lang: "pt",
  translationOf: "lead-coaching-mentoring",
  category: "Leadership Development",
  name: "Coaching e Mentoria",
  skills: "Distinguir coaching de mentoria, Ouvir com toda a atenção, Fazer perguntas poderosas, Conduzir uma conversa GROW, Definir um objetivo de desenvolvimento, Acordos de mentoria e acompanhamento do crescimento",
  outcome: "conduzir uma conversa de coaching com o modelo GROW, ouvindo bem e fazendo perguntas abertas, ajudar alguém a definir um objetivo de desenvolvimento claro, combinar como vai funcionar uma relação de mentoria e acompanhar o crescimento da pessoa ao longo do tempo.",
  about: [
    "Este curso é para quem ajuda outras pessoas a crescer: gestores, chefes de equipa, professores, treinadores, pastores, líderes de jovens e trabalhadores com experiência que orientam os mais novos.",
    "Coaching e mentoria são habilidades que se podem praticar. Você vai aprender a diferença entre os dois, como ouvir para que as pessoas se sintam ouvidas, como fazer perguntas que ajudam a pensar, como conduzir uma conversa com o modelo GROW e como definir e acompanhar um objetivo de desenvolvimento.",
    "Cada lição dura cerca de cinco minutos. Se puder, arranje um parceiro de prática (um colega, um amigo ou um familiar) para as tarefas \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça uma conversa de coaching de 20 minutos com um parceiro de prática usando o GROW. Ouça mais do que fala e faça pelo menos cinco perguntas abertas. Juntos, escrevam o objetivo de desenvolvimento dele de forma clara e mensurável, um acordo de mentoria de um parágrafo (com que frequência se encontram, como, durante quanto tempo, o que é privado) e um registo simples com três datas de encontro de acompanhamento.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Chefes de equipa, supervisores, gestores, professores, líderes comunitários e de organizações sem fins lucrativos, e trabalhadores com experiência que querem fazer coaching ou mentoria com outras pessoas.",
    startingPoint: "Muitas vezes pedem-lhes ajuda e costumam responder dando conselhos. Poucos praticaram ouvir com toda a atenção, fazer perguntas abertas, conduzir uma conversa de coaching organizada ou escrever um acordo de mentoria.",
    gap: "Dar respostas deixa as pessoas dependentes e não chega ao que elas realmente precisam. Os líderes precisam de ouvir, fazer perguntas abertas, guiar uma conversa com o GROW, ajudar a definir um objetivo de desenvolvimento claro e acompanhar o crescimento, para que as pessoas que apoiam aprendam a pensar por si mesmas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Tempo: lições curtas, mais uma conversa de prática de 20 minutos",
      "Precisa de um parceiro de prática para a tarefa final",
      "Privacidade: o que se diz no coaching e na mentoria fica em privado, a não ser que se combine outra coisa",
      "As instruções de segurança dizem-se diretamente; não se fazem com coaching"
    ],
    prerequisites: "Nenhum. O curso \"Gerir Equipas\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Perante uma situação em que alguém precisa de ajuda", action: "escolher se a situação pede coaching, mentoria ou simplesmente dizer o que fazer", standard: "acertando pelo menos 4 de 5 situações" },
    { id: "O2", condition: "Numa conversa", action: "ouvir sem interromper e resumir o que ouviu", standard: "de forma que a pessoa confirme que você entendeu ou o corrija" },
    { id: "O3", condition: "Quando alguém lhe pede um conselho", action: "fazer perguntas abertas que começam por \"o quê\" ou \"como\" em vez de dar conselhos", standard: "fazendo pelo menos cinco perguntas abertas numa conversa" },
    { id: "O4", condition: "Numa conversa de coaching de 20 minutos", action: "guiar a conversa pelo Objetivo, pela Realidade, pelas Opções e pela Vontade (GROW)", standard: "terminando com um primeiro passo, uma data e uma nota de compromisso" },
    { id: "O5", condition: "Perante o desejo de desenvolver uma habilidade", action: "escrever um objetivo de desenvolvimento claro, com pequenos passos de aprendizagem", standard: "dizendo o quê, quanto e até quando, e que pertença à própria pessoa" },
    { id: "O6", condition: "Ao começar uma relação de mentoria", action: "escrever um acordo de mentoria de um parágrafo e um registo com três datas de acompanhamento", standard: "cobrindo com que frequência, como, durante quanto tempo e o que é privado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conversas de coaching",
      lessons: [
        {
          objectives: ["O1"],
          title: "Coaching e mentoria: qual é a diferença?",
          minutes: 4,
          goal: "Escolher se uma situação pede coaching, mentoria ou simplesmente dizer o que fazer.",
          text: [
            "O coaching ajuda uma pessoa a encontrar as suas próprias respostas através de perguntas e de escuta. Quem faz o coaching (o coach) não precisa de conhecer o trabalho melhor; é a pessoa acompanhada que pensa a maior parte. Funciona bem quando alguém tem a habilidade ou o conhecimento mas está bloqueado, ou precisa de desenvolver o seu discernimento.",
            "A mentoria é uma relação mais longa em que alguém com mais experiência partilha conselhos, histórias, contactos e lições aprendidas. Muitas vezes o mentor trabalha na mesma área. Funciona bem para escolhas de carreira, para aprender \"como as coisas funcionam de verdade\" e para construir uma rede de contactos.",
            "Às vezes nenhum dos dois é o certo e você deve simplesmente dizer o que fazer. Um trabalhador novo prestes a cometer um erro de segurança precisa de instruções, não de perguntas. Os bons líderes alternam entre dizer, fazer coaching e fazer mentoria, conforme o que a pessoa precisa."
          ],
          words: [["Coaching", "ajudar alguém a encontrar as suas próprias respostas fazendo perguntas e ouvindo."], ["Mentoria", "uma relação mais longa em que alguém com mais experiência partilha conselhos e lições."], ["Mentorado", "a pessoa que recebe a mentoria."], ["Coachee", "a pessoa que recebe o coaching."]],
          slides: [
            { title: "Coaching", bullets: ["Perguntas e escuta", "É a pessoa que pensa", "Bom quando ela está bloqueada ou a desenvolver o discernimento"] },
            { title: "Mentoria", bullets: ["Relação mais longa", "Partilha experiência, conselhos e contactos", "Boa para carreiras e para saber como as coisas funcionam de verdade"] },
            { title: "Às vezes, basta dizer", bullets: ["Riscos de segurança", "Tarefas completamente novas", "Mude de estilo conforme a necessidade"] }
          ],
          tryIt: "Escreva três situações reais do seu trabalho ou da sua vida em que alguém lhe pediu ajuda. Para cada uma, escreva se ajudaria mais o coaching, a mentoria ou dizer o que fazer, e porquê.",
          youCanNow: "distinguir coaching de mentoria e escolher a abordagem certa para cada situação.",
          quickCheck: [
            { objective: "O1", q: "O que é a mentoria?", options: ["Uma instrução de segurança dada uma só vez", "Uma relação mais longa em que alguém com mais experiência partilha conselhos e lições", "Fazer só perguntas de sim ou não", "Uma avaliação de desempenho"], answer: 1, why: "A mentoria partilha experiência ao longo do tempo, muitas vezes na mesma área." },
            { objective: "O1", q: "Um membro da equipa quer saber como as promoções funcionam de verdade na sua área. Que abordagem serve melhor?", options: ["Dizer-lhe para ler as regras sozinho", "Fazer coaching só com perguntas", "Ignorar até à altura da avaliação", "Fazer mentoria, partilhando a sua experiência e os seus contactos"], answer: 3, why: "A mentoria serve para escolhas de carreira e para aprender como as coisas funcionam de verdade." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ouvir para que as pessoas se sintam ouvidas",
          minutes: 5,
          goal: "Ouvir com toda a atenção e mostrar que entendeu, fazendo um resumo.",
          text: [
            "A maioria de nós ouve enquanto pensa no que vai dizer a seguir. No coaching, isso atrapalha. Ouvir com toda a atenção quer dizer dar toda a sua atenção à outra pessoa: telefone guardado, olhos nela, sem interromper e sem saltar para a sua própria história.",
            "Mostre que está a ouvir. Acene com a cabeça, diga \"continue\" e, de poucos em poucos minutos, faça um resumo: \"Então, o que estou a ouvir é que quer liderar o projeto, mas tem medo de que a equipa não o siga. É isso?\" Um bom resumo deixa a pessoa ouvir o seu próprio pensamento e corrigi-lo se você entendeu mal.",
            "Ouça os sentimentos e os valores, não só os factos: \"Parece frustrado\" ou \"Parece que a justiça é muito importante para si.\" Habitue-se ao silêncio. Muitas vezes, uma pausa vem logo antes da melhor ideia da pessoa."
          ],
          steps: ["Guarde o telefone e fique de frente para a pessoa.", "Não interrompa nem salte para a sua própria história.", "Encoraje-a: acene, diga \"continue\".", "Resuma o que ouviu e pergunte se está certo.", "Diga em voz alta os sentimentos que nota.", "Deixe haver silêncio."],
          words: [["Escuta ativa", "ouvir com toda a atenção e mostrar que entendeu, por exemplo fazendo um resumo."], ["Resumir", "repetir as ideias principais em poucas palavras, com as suas palavras."]],
          slides: [
            { title: "Ouvir com toda a atenção", bullets: ["Telefone guardado, olhos na pessoa", "Sem interromper", "Sem saltar para a sua própria história"] },
            { title: "Mostre que está a ouvir", bullets: ["Acene, diga \"continue\"", "Resuma: \"Então, o que estou a ouvir é...\"", "Pergunte: \"É isso?\""] },
            { title: "Ouvir mais fundo", bullets: ["Ouça sentimentos e valores, não só factos", "Deixe haver silêncio: muitas vezes vêm boas ideias"] }
          ],
          tryIt: "Peça a um parceiro para falar durante três minutos sobre algo que quer melhorar. Não dê conselhos. Depois resuma o que ouviu em duas frases e pergunte: \"Entendi bem?\"",
          youCanNow: "ouvir com toda a atenção e resumir para que a outra pessoa se sinta ouvida.",
          quickCheck: [
            { objective: "O2", q: "O que atrapalha ouvir com toda a atenção?", options: ["Pensar no que vai dizer a seguir", "Acenar com a cabeça", "Resumir", "Deixar haver silêncio"], answer: 0, why: "Se está a preparar a sua resposta, não está a ouvir com toda a atenção." },
            { objective: "O2", q: "Enquanto alguém fala de um problema, você lembra-se de uma história parecida sua. O que faria?", options: ["Contar logo a sua história", "Interromper para dar um conselho", "Continuar a ouvir e resumir o que a pessoa disse", "Ver o telefone"], answer: 2, why: "Ouvir com toda a atenção quer dizer não saltar para a sua própria história." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer perguntas poderosas",
          minutes: 5,
          goal: "Transformar conselhos em perguntas abertas que ajudam as pessoas a pensar por si mesmas.",
          text: [
            "Uma pergunta poderosa é aberta (não se responde com sim ou não), curta e sobre o pensamento da outra pessoa. Muitas vezes começa por \"o quê\" ou \"como\": \"Como seria o sucesso?\" \"O que é que já tentou?\" \"O que é que realmente o impede?\"",
            "Cuidado com o conselho disfarçado de pergunta, como \"Já pensou em ligar-lhe?\" Essa é a sua ideia, não a da pessoa. Tenha também cuidado com as perguntas \"porquê\", que podem soar a acusação. \"O que o levou a isso?\" costuma soar mais gentil do que \"Porque fez isso?\"",
            "Uma pergunta forte é \"E que mais?\" Ajuda as pessoas a ir além da primeira resposta. Faça uma pergunta de cada vez e depois pare e ouça."
          ],
          steps: ["Comece por \"o quê\" ou \"como\".", "Seja curto e fale do pensamento da pessoa.", "Evite conselhos disfarçados de pergunta.", "Troque \"porquê\" por \"o que o levou a...\".", "Pergunte \"E que mais?\"", "Faça uma pergunta, depois pare e ouça."],
          words: [["Pergunta aberta", "uma pergunta que não se pode responder só com sim ou não."], ["Pergunta fechada", "uma pergunta que se responde com sim, não ou um único dado."]],
          slides: [
            { title: "As perguntas poderosas são", bullets: ["Abertas e curtas", "Sobre o pensamento da pessoa", "Muitas vezes começam por \"o quê\" ou \"como\""] },
            { title: "Exemplos", bullets: ["\"Como seria o sucesso?\"", "\"O que é que já tentou?\"", "\"O que é que realmente o impede?\"", "\"E que mais?\""] },
            { title: "Cuidado com", bullets: ["Conselhos disfarçados de pergunta", "Perguntas \"porquê\" que soam a acusação", "Fazer duas perguntas ao mesmo tempo"] }
          ],
          tryIt: "Escreva três conselhos que costuma dar às pessoas. Transforme cada um numa pergunta aberta. Por exemplo, \"Devia falar com o seu chefe\" passa a \"Quem o poderia ajudar com isto?\"",
          youCanNow: "fazer perguntas curtas e abertas que ajudam as pessoas a encontrar as suas próprias respostas.",
          quickCheck: [
            { objective: "O3", q: "O que torna uma pergunta \"aberta\"?", options: ["É muito comprida", "Não se pode responder com sim ou não", "Inclui o seu conselho", "Começa por \"porquê\""], answer: 1, why: "As perguntas abertas convidam a pessoa a pensar e a explicar." },
            { objective: "O3", q: "Quer sugerir a sua ideia: \"Fale com o seu supervisor.\" Como a transformaria numa pergunta de coaching?", options: ["\"Já pensou em falar com o seu supervisor?\"", "\"Porque ainda não falou com o seu supervisor?\"", "\"Devia falar com o seu supervisor.\"", "\"Quem o poderia ajudar com isto?\""], answer: 3, why: "Uma pergunta aberta deixa a pessoa encontrar a ideia; as outras são conselhos ou acusações." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conversas de coaching",
        questions: [
          { objective: "O1", q: "No coaching, quem pensa a maior parte?", options: ["O coach", "A pessoa que recebe o coaching", "O chefe", "Um livro"], answer: 1, why: "O coaching ajuda a pessoa a encontrar as suas próprias respostas." },
          { objective: "O1", q: "Um trabalhador novo está prestes a usar uma máquina de forma insegura. Que abordagem serve melhor?", options: ["Uma longa conversa de coaching", "Um acordo de mentoria", "Dizer-lhe claramente como o fazer com segurança", "Perguntar \"E que mais?\""], answer: 2, why: "Os riscos de segurança pedem instruções claras." },
          { objective: "O2", q: "Qual é um bom resumo enquanto ouve?", options: ["\"Isso também me aconteceu uma vez...\"", "\"Devia simplesmente despedir-se.\"", "\"Bem, vamos passar à frente.\"", "\"Então quer liderar o projeto mas tem medo de que a equipa não o siga. É isso?\""], answer: 3, why: "Repete as ideias principais da pessoa e confirma que você entendeu." },
          { objective: "O3", q: "Qual é uma pergunta aberta?", options: ["\"O que é que já tentou?\"", "\"Ligou-lhe?\"", "\"É terça-feira?\"", "\"Já acabou?\""], answer: 0, why: "Não se pode responder com sim ou não." },
          { objective: "O3", q: "\"Já pensou em ligar-lhe?\" é um problema porque é:", options: ["Comprida demais", "Um conselho disfarçado de pergunta", "Aberta demais", "Sobre sentimentos"], answer: 1, why: "Traz a sua ideia em vez de fazer sair a ideia da pessoa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Um crescimento que dura",
      lessons: [
        {
          objectives: ["O4"],
          title: "Conduzir uma conversa com o modelo GROW",
          minutes: 6,
          goal: "Guiar uma conversa de coaching pelo Objetivo, pela Realidade, pelas Opções e pela Vontade.",
          text: [
            "O GROW é um mapa simples e muito usado para uma conversa de coaching. As letras vêm do inglês. G é Goal, o Objetivo: o que a pessoa quer desta conversa e a mais longo prazo? R é Reality, a Realidade: o que está a acontecer agora, o que já tentou? O é Options, as Opções: o que poderia fazer? W é Will, a Vontade (ou o caminho em frente): o que vai fazer, e quando?",
            "Dê tempo à Realidade antes de correr para as Opções. Muitas vezes a pessoa vê a resposta quando a situação fica clara. Nas Opções, peça várias ideias, e \"e que mais?\", antes de escolher. Se você tem uma ideia, pode oferecê-la no fim, como uma opção entre muitas.",
            "Termine com um compromisso claro: \"Qual é o seu primeiro passo, e quando o vai dar?\" Pergunte quanta certeza tem, numa escala de 1 a 10. Se for baixa, pergunte o que a faria subir."
          ],
          steps: ["Objetivo (Goal): \"O que quer tirar desta conversa?\"", "Realidade (Reality): \"O que está a acontecer agora? O que já tentou?\"", "Opções (Options): \"O que poderia fazer? E que mais?\"", "Vontade (Will): \"O que vai fazer, e até quando?\"", "Confirme o compromisso: \"Quanta certeza tem, de 1 a 10?\""],
          words: [["Modelo GROW", "um mapa de coaching em quatro passos (em inglês Goal, Reality, Options, Will): Objetivo, Realidade, Opções, Vontade."], ["Compromisso", "uma promessa clara de fazer uma ação concreta até um certo momento."]],
          slides: [
            { title: "O modelo GROW", bullets: ["Goal (Objetivo): o que quer?", "Reality (Realidade): o que está a acontecer agora?", "Options (Opções): o que poderia fazer?", "Will (Vontade): o que vai fazer, até quando?"] },
            { title: "Dê tempo à Realidade", bullets: ["A resposta aparece muitas vezes quando tudo fica claro", "Não corra para as soluções"] },
            { title: "Opções, depois compromisso", bullets: ["Peça várias ideias, e \"e que mais?\"", "Ofereça a sua ideia no fim, como uma opção", "\"Quanta certeza tem, de 1 a 10?\""] }
          ],
          tryIt: "Escreva num cartão uma pergunta GROW para cada passo. Com um parceiro, faça uma conversa GROW de 15 minutos sobre algo que ele quer melhorar. Termine com o primeiro passo dele e uma data.",
          youCanNow: "guiar uma conversa de coaching desde o objetivo até um próximo passo claro e assumido, com o GROW.",
          quickCheck: [
            { objective: "O4", q: "No GROW, o que quer dizer o O?", options: ["Options (Opções)", "Outcome (Resultado)", "Order (Ordem)", "Opinion (Opinião)"], answer: 0, why: "GROW é Goal, Reality, Options, Will: Objetivo, Realidade, Opções, Vontade." },
            { objective: "O4", q: "Passados dez minutos, a pessoa só disse uma opção. O que perguntaria?", options: ["\"É a sua resposta final?\"", "\"Eu faria assim.\"", "\"E que mais?\"", "\"Porque só uma?\""], answer: 2, why: "\"E que mais?\" ajuda as pessoas a ir além da primeira resposta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Definir um objetivo de desenvolvimento",
          minutes: 5,
          goal: "Ajudar alguém a transformar um desejo num objetivo de desenvolvimento claro e mensurável.",
          text: [
            "Um objetivo de desenvolvimento é sobre fazer crescer uma habilidade, não só acabar uma tarefa. \"Falar melhor em público\" é um desejo. Um objetivo claro diz o quê, quanto e até quando: \"Conduzir sozinho a reunião rápida da equipa de segunda-feira, três semanas seguidas, até ao fim de março.\"",
            "Muitas pessoas usam o SMART para verificar um objetivo. As letras vêm do inglês: Específico, Mensurável, Alcançável, Relevante e com Prazo. O objetivo deve pertencer à própria pessoa. Pergunte o que ela quer desenvolver, e porque isso é importante para ela, antes de acrescentar o que o trabalho pede.",
            "Divida o objetivo em pequenos passos de aprendizagem: algo para ler ou ver, alguém para observar ou acompanhar no trabalho, uma oportunidade de praticar e alguém que dê comentários. A maior parte do crescimento vem de fazer, não só de cursos."
          ],
          steps: ["Pergunte o que a pessoa quer desenvolver e porque isso é importante.", "Escreva-o como o quê, quanto e até quando.", "Verifique-o com o SMART.", "Liste os passos de aprendizagem: ler, observar alguém, praticar, receber comentários.", "Combinem o primeiro passo."],
          words: [["Objetivo de desenvolvimento", "um objetivo para fazer crescer uma habilidade ou capacidade."], ["SMART", "uma verificação de objetivos (do inglês Specific, Measurable, Achievable, Relevant, Time-bound): Específico, Mensurável, Alcançável, Relevante, com Prazo."], ["Acompanhar no trabalho", "aprender observando alguém a fazer o trabalho (em inglês, \"shadowing\")."]],
          slides: [
            { title: "Desejo e objetivo", bullets: ["Desejo: \"Falar melhor em público\"", "Objetivo: \"Conduzir sozinho a reunião de segunda, 3 semanas seguidas, até ao fim de março\""] },
            { title: "Verifique com o SMART", bullets: ["Específico e Mensurável", "Alcançável e Relevante", "Com Prazo"] },
            { title: "O objetivo e as razões são da pessoa", bullets: ["Pergunte o que ela quer desenvolver", "Pergunte porque isso é importante para ela"] },
            { title: "Passos de aprendizagem", bullets: ["Ler ou ver", "Acompanhar alguém no trabalho", "Praticar", "Receber comentários"] }
          ],
          tryIt: "Com o seu parceiro de prática, transforme um desejo num objetivo de desenvolvimento SMART. Depois liste três passos de aprendizagem, incluindo pelo menos uma oportunidade de praticar.",
          youCanNow: "ajudar alguém a escrever um objetivo de desenvolvimento claro e os passos de aprendizagem para o alcançar.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um desejo e não um objetivo de desenvolvimento claro?", options: ["\"Apresentar sozinho o relatório mensal em duas reuniões até junho\"", "\"Falar melhor em público\"", "\"Fazer sozinho três reuniões de segurança até ao fim do trimestre\"", "\"Formar dois funcionários novos na caixa registadora até 1 de maio\""], answer: 1, why: "Um objetivo claro diz o quê, quanto e até quando; um desejo não diz." },
            { objective: "O5", q: "O seu mentorado quer lidar melhor com clientes zangados. Que passo de aprendizagem acrescentaria primeiro?", options: ["Só um curso longo na internet", "Nada até ao próximo ano", "Acompanhar um colega experiente e depois praticar com comentários", "Ler a história da empresa"], answer: 2, why: "A maior parte do crescimento vem de fazer e de praticar com comentários." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Acordos de mentoria e acompanhamento do crescimento",
          minutes: 5,
          goal: "Escrever um acordo de mentoria simples e um registo para acompanhar o crescimento de alguém.",
          text: [
            "Uma relação de mentoria funciona melhor com um acordo curto no início. Combinem o objetivo, com que frequência se vão encontrar (por exemplo uma vez por mês durante seis meses), como (pessoalmente, por telefone ou por vídeo), o que é privado, quem decide os temas dos encontros (normalmente o mentorado) e como qualquer um dos dois pode terminar a relação com gentileza.",
            "Acompanhe o crescimento para que os dois vejam o progresso. Um registo simples pode ser um documento ou uma folha de cálculo partilhados, com o objetivo, os passos de aprendizagem, as datas dos encontros, o que se tentou, o que se aprendeu e o próximo passo. Celebre o progresso, mesmo os passos pequenos.",
            "Em cada encontro de acompanhamento, olhem de novo para o objetivo, pergunte o que correu bem e o que foi difícil, e combinem o próximo passo. No fim, revejam juntos o que mudou e falem do que vem a seguir: um novo objetivo, um novo mentor, ou a própria pessoa tornar-se mentora."
          ],
          steps: ["Combinem o objetivo, a frequência, a forma e a duração.", "Combinem o que fica privado e quem decide os temas.", "Combinem como qualquer um pode terminar com gentileza.", "Criem um registo: objetivo, passos, datas, aprendizagens, próximo passo.", "Em cada encontro: rever, refletir, próximo passo.", "No fim, revejam o que mudou e o que vem a seguir."],
          words: [["Acordo de mentoria", "um pequeno texto escrito que diz como vai funcionar uma relação de mentoria."], ["Registo", "um registo simples do progresso em direção a um objetivo, com datas."], ["Encontro de acompanhamento", "um encontro marcado para rever o progresso."]],
          slides: [
            { title: "O acordo de mentoria", bullets: ["Objetivo, frequência, forma, duração", "O que fica privado", "Normalmente é o mentorado que decide os temas", "Como terminar com gentileza"] },
            { title: "Um registo simples", bullets: ["Objetivo e passos de aprendizagem", "Datas dos encontros", "O que se tentou e aprendeu, próximo passo"] },
            { title: "Em cada encontro", bullets: ["Olhar de novo para o objetivo", "O que correu bem? O que foi difícil?", "Combinar o próximo passo; celebrar o progresso"] }
          ],
          tryIt: "Tarefa final: faça uma conversa GROW de 20 minutos com o seu parceiro. Depois escrevam juntos o objetivo de desenvolvimento SMART dele, um acordo de mentoria de um parágrafo e um registo com três datas de encontro.",
          youCanNow: "começar uma relação de mentoria com um acordo claro e acompanhar o crescimento de alguém ao longo do tempo.",
          quickCheck: [
            { objective: "O6", q: "Quem normalmente decide os temas de um encontro de mentoria?", options: ["O chefe do mentor", "O mentor", "Os recursos humanos", "O mentorado"], answer: 3, why: "Normalmente é o mentorado que decide os temas, porque o crescimento é dele." },
            { objective: "O6", q: "Num encontro de acompanhamento, o seu mentorado deu um pequeno passo em frente. O que faria?", options: ["Celebrava e combinava o próximo passo", "Dizia que não é suficiente", "Passava logo a um novo objetivo", "Cancelava o próximo encontro"], answer: 0, why: "Celebrar um pequeno progresso mantém as pessoas motivadas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Um crescimento que dura",
        questions: [
          { objective: "O4", q: "O que quer dizer o R no GROW?", options: ["Results (Resultados)", "Rules (Regras)", "Reward (Recompensa)", "Reality (Realidade)"], answer: 3, why: "Realidade: o que está a acontecer agora." },
          { objective: "O4", q: "Quando deve oferecer a sua própria ideia no passo das Opções?", options: ["Primeiro, para a pessoa não perder tempo", "No fim, como uma opção entre muitas", "Nunca, em nenhum caso", "Só por escrito"], answer: 1, why: "Oferecê-la no fim deixa o pensamento da pessoa em primeiro lugar." },
          { objective: "O5", q: "Qual é um objetivo de desenvolvimento claro?", options: ["\"Ser um líder melhor\"", "\"Esforçar-me mais\"", "\"Conduzir sozinho a reunião de segunda-feira três semanas seguidas até ao fim de março\"", "\"Aprender coisas\""], answer: 2, why: "Diz o quê, quanto e até quando." },
          { objective: "O6", q: "Quem normalmente decide os temas de um encontro de mentoria?", options: ["O mentorado", "O chefe do mentor", "Os recursos humanos", "Ninguém"], answer: 0, why: "A relação existe para o crescimento do mentorado." },
          { objective: "O6", q: "O que tem um registo simples de crescimento?", options: ["Só as opiniões do mentor", "Palavras-passe privadas", "Nada escrito", "O objetivo, os passos, as datas dos encontros, o que se aprendeu e o próximo passo"], answer: 3, why: "Isto deixa as duas pessoas verem o progresso." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Coaching e Mentoria",
    questions: [
      { objective: "O1", q: "O coaching é sobretudo:", options: ["Dizer às pessoas o que fazer", "Ajudar as pessoas a encontrar as suas próprias respostas com perguntas e escuta", "Dar prémios", "Controlar as presenças"], answer: 1, why: "É a pessoa acompanhada que pensa." },
      { objective: "O1", q: "A mentoria é normalmente:", options: ["Uma ordem dada uma só vez", "Um teste", "Uma relação mais longa em que se partilha experiência", "Um castigo"], answer: 2, why: "Os mentores partilham experiência ao longo do tempo." },
      { objective: "O1", q: "Um trabalhador com experiência está bloqueado a escolher entre duas boas formas de fazer. O que serve melhor?", options: ["Coaching", "Dizer-lhe a resposta", "Ignorar", "Uma advertência por escrito"], answer: 0, why: "Ele tem a habilidade; o coaching ajuda-o a usar o seu discernimento." },
      { objective: "O2", q: "Ouvir com toda a atenção quer dizer:", options: ["Ver o telefone enquanto a pessoa fala", "Preparar a sua resposta", "Contar logo a sua própria história", "Dar toda a sua atenção, sem interromper"], answer: 3, why: "Atenção sem interrupções ajuda as pessoas a pensar." },
      { objective: "O2", q: "Porque resumir o que ouviu?", options: ["Para acabar a conversa", "Para a pessoa ouvir o seu próprio pensamento e o poder corrigir", "Para mostrar que é mais esperto", "Para mudar de assunto"], answer: 1, why: "Um resumo confirma que entendeu e ajuda a pessoa a refletir." },
      { objective: "O2", q: "A pessoa fica calada depois de uma pergunta. Você deve:", options: ["Encher o silêncio com conselhos", "Fazer mais três perguntas", "Deixar haver silêncio; muitas vezes vem uma boa ideia", "Terminar a reunião"], answer: 2, why: "O silêncio dá às pessoas espaço para pensar." },
      { objective: "O3", q: "Qual é a pergunta de coaching mais poderosa?", options: ["\"Fez isso?\"", "\"Não é óbvio?\"", "\"Porque faria isso?\"", "\"O que é que realmente o impede?\""], answer: 3, why: "É aberta e vai ao centro do problema." },
      { objective: "O3", q: "Uma forma mais gentil de perguntar \"Porque fez isso?\" é:", options: ["\"O que o levou a isso?\"", "\"Quem lhe disse para fazer isso?\"", "\"Está a falar a sério?\"", "\"Não sabia que não devia?\""], answer: 0, why: "Explora o pensamento sem soar a acusação." },
      { objective: "O3", q: "A pergunta \"E que mais?\" ajuda as pessoas a:", options: ["Parar de falar", "Ir além da primeira resposta", "Concordar consigo", "Sentir-se acusadas"], answer: 1, why: "A primeira resposta raramente é a única." },
      { objective: "O4", q: "GROW quer dizer:", options: ["Grade, Review, Order, Wait (Nota, Revisão, Ordem, Espera)", "Give, Rest, Own, Win (Dar, Descansar, Possuir, Ganhar)", "Goal, Reality, Options, Will (Objetivo, Realidade, Opções, Vontade)", "Growth, Rules, Outcome, Work (Crescimento, Regras, Resultado, Trabalho)"], answer: 2, why: "Objetivo, Realidade, Opções, Vontade (ou caminho em frente)." },
      { objective: "O4", q: "Que pergunta GROW pertence ao passo da Vontade?", options: ["\"O que vai fazer, e até quando?\"", "\"O que está a acontecer agora?\"", "\"O que quer desta conversa?\"", "\"O que poderia fazer?\""], answer: 0, why: "A Vontade é o compromisso de agir." },
      { objective: "O4", q: "Alguém dá ao seu compromisso a nota 4 em 10. Você pergunta:", options: ["\"Porque tão baixo?\"", "Nada", "\"Faça na mesma.\"", "\"O que o faria subir?\""], answer: 3, why: "Ajuda a pessoa a tirar o que a está a travar." },
      { objective: "O4", q: "Porque dar tempo à Realidade antes das Opções?", options: ["Para encher o tempo", "Muitas vezes a resposta aparece quando a situação fica clara", "As opções nunca são úteis", "Para encontrar um culpado"], answer: 1, why: "Ver bem o presente leva a escolhas melhores." },
      { objective: "O5", q: "SMART quer dizer:", options: ["Simples, Moderno, Ativo, Pronto, Verdadeiro", "Específico, Mensurável, Alcançável, Relevante, com Prazo", "Forte, Muitos, Capaz, Real, Total", "Curto, Principal, Tudo, Certo, Hoje"], answer: 1, why: "Estas cinco verificações tornam um objetivo claro." },
      { objective: "O5", q: "A quem deve pertencer um objetivo de desenvolvimento?", options: ["À pessoa que está a crescer", "Só ao gestor", "Ao advogado da empresa", "A ninguém"], answer: 0, why: "As pessoas comprometem-se com objetivos que são seus." },
      { objective: "O5", q: "De onde vem a maior parte do crescimento?", options: ["Só de ler", "Só de certificados", "De fazer e praticar, com comentários", "De esperar"], answer: 2, why: "Praticar com comentários desenvolve a habilidade." },
      { objective: "O6", q: "Um acordo de mentoria deve incluir:", options: ["O salário do mentor", "Com que frequência se encontram, o que é privado e como terminar com gentileza", "Só a data de início", "Uma lista dos defeitos do mentorado"], answer: 1, why: "Regras claras evitam confusões mais tarde." },
      { objective: "O6", q: "Em cada encontro de acompanhamento de mentoria, você deve:", options: ["Começar um novo objetivo todas as vezes", "Falar só de si", "Cancelar se as coisas estiverem a correr bem", "Olhar de novo para o objetivo, refletir e combinar o próximo passo"], answer: 3, why: "Rever com regularidade mantém o crescimento no caminho certo." },
      { objective: "O6", q: "Porque celebrar um pequeno progresso?", options: ["Mantém as pessoas motivadas", "Substitui o objetivo", "É exigido por lei", "Termina a relação"], answer: 0, why: "Ver o progresso faz as pessoas continuarem." },
      { objective: "O6", q: "No fim de uma relação de mentoria, um bom passo é:", options: ["Deixar de falar", "Esconder o registo", "Rever o que mudou e falar do que vem a seguir", "Recomeçar do início"], answer: 2, why: "Uma revisão fecha bem e aponta para o próximo passo de crescimento." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 3, 6, 9, 10, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Escuta", objective: "O2", notYet: "Falou mais do que o parceiro ou interrompeu muitas vezes.", meets: "Ouviu mais do que falou e fez pelo menos um resumo.", exceeds: "Disse em voz alta um sentimento ou valor que ouviu, e o parceiro concordou." },
      { name: "Perguntas abertas", objective: "O3", notYet: "Menos de cinco perguntas abertas, ou sobretudo conselhos.", meets: "Pelo menos cinco perguntas abertas, uma de cada vez.", exceeds: "Usou \"E que mais?\" e evitou perguntas \"porquê\" que soam a acusação." },
      { name: "Conversa GROW", objective: "O4", notYet: "Saltou um passo ou passou logo para os conselhos.", meets: "Passou pelo Objetivo, Realidade, Opções e Vontade e terminou com um primeiro passo e uma data.", exceeds: "Pediu uma nota de compromisso de 1 a 10 e o que a faria subir." },
      { name: "Objetivo de desenvolvimento", objective: "O5", notYet: "O objetivo é um desejo, como \"falar melhor em público\".", meets: "Um objetivo claro que diz o quê, quanto e até quando, e que pertence ao parceiro.", exceeds: "Dividido em pequenos passos de aprendizagem, com prática e comentários." },
      { name: "Acordo e registo", objective: "O6", notYet: "Falta o acordo ou o registo.", meets: "Um acordo de um parágrafo (frequência, forma, duração, o que é privado) e um registo com três datas de encontro.", exceeds: "Também diz como qualquer um pode terminar com gentileza." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que começam uma relação de coaching ou de mentoria em 30 dias (inquérito de seguimento)",
      "Mentorados que alcançam o seu objetivo de desenvolvimento até à data marcada",
      "Alunos que fazem outro curso de liderança da Koach Learn"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador para ver as lições",
      "Um parceiro de prática para a conversa de 20 minutos",
      "Papel ou um documento partilhado para o objetivo, o acordo e o registo",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Ponha os alunos em pares para a prática GROW; peça-lhes para trocar os papéis de coach e de pessoa acompanhada.",
      "Use uma terceira pessoa como observadora, que conta as perguntas abertas e os resumos.",
      "Peça aos parceiros para usar um objetivo real mas de pouco risco, e para manter em privado o que se diz.",
      "Lembre aos alunos que os erros de segurança pedem que se diga o que fazer, não coaching.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
