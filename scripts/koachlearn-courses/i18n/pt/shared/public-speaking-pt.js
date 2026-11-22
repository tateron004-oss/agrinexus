"use strict";

// Koach Learn course (Portuguese translation of shared/public-speaking.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "public-speaking-pt",
  lang: "pt",
  translationOf: "public-speaking",
  category: "Athletes",
  name: "Falar em Público e Fazer Apresentações",
  skills: "Planear uma fala curta, Organizar uma mensagem, Fazer slides simples, Praticar e controlar o nervosismo, Usar a voz e a linguagem corporal, Responder a perguntas",
  outcome: "planear, praticar e fazer uma fala clara de 2 minutos com um início forte, três pontos principais e um fecho claro, controlar o nervosismo, usar bem a voz e o corpo, e responder a perguntas com calma.",
  about: [
    "Falar diante de pessoas é um dos medos mais comuns, e uma das capacidades mais úteis. Você usa-a em entrevistas de emprego, reuniões de equipa, apresentações a clientes ou investidores, falas a doadores e voluntários, entrevistas aos meios de comunicação, reuniões da comunidade e no balneário da equipa.",
    "Este curso é para atletas, donos de negócios, pessoal de organizações sem fins lucrativos, veteranos, jovens, trabalhadores e qualquer pessoa que queira falar com confiança. Não precisa de ter um dom natural. Os bons oradores fazem-se com planeamento e prática.",
    "Você vai planear uma fala curta, dar-lhe uma estrutura clara, fazer slides simples se precisar, praticar, controlar o nervosismo, usar a voz e o corpo, e responder a perguntas. Cada lição dura cerca de cinco minutos e termina com uma prática. A tarefa final é uma fala de 2 minutos que você grava no telefone. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Grave-se no telefone a fazer uma fala de 2 minutos sobre um tema que conhece bem (o seu desporto, o seu negócio, a sua causa, o seu trabalho ou uma capacidade que tem). Ela deve ter um gancho, três pontos principais e um fecho claro. Veja a gravação, anote uma coisa que fez bem e uma a melhorar, e depois grave-a mais uma vez.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas, donos de negócios, pessoal de organizações sem fins lucrativos, veteranos, jovens, trabalhadores e qualquer pessoa que precise de falar em entrevistas, reuniões de equipa, apresentações de negócio, falas a doadores, entrevistas aos meios de comunicação, reuniões da comunidade ou no balneário.",
    startingPoint: "Falam com pessoas todos os dias e conhecem bem alguns temas, como o seu desporto, negócio, causa ou trabalho. Muitos ficam nervosos ao falar para um grupo, divagam sem estrutura, leem os slides e nunca se viram em vídeo.",
    gap: "Falar com clareza ajuda as pessoas a serem contratadas, a ganhar clientes e doadores, a liderar equipas e a serem ouvidas na sua comunidade. Os alunos precisam de uma forma simples de planear, praticar e fazer uma fala curta e responder a perguntas, para que o medo não os trave.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone com câmara e cronómetro; os slides são opcionais",
      "A prática e a gravação fazem-se a sós ou com um amigo, para diminuir a pressão",
      "Privacidade: as gravações ficam no telefone do aluno, a menos que ele escolha partilhá-las",
      "Tempo: lições de cerca de cinco minutos, com uma fala final de 2 minutos"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para um tema que conhece bem", action: "escrever quem é o seu público, o que quer dele e a sua grande ideia", standard: "com a grande ideia numa só frase" },
    { id: "O2", condition: "Para uma fala de 2 minutos", action: "fazer um esquema com um gancho, três pontos principais com exemplos e um fecho com um apelo à ação", standard: "numa página de notas curtas" },
    { id: "O3", condition: "Para a sua fala", action: "decidir se precisa de slides e, se precisar, fazer no máximo três slides simples", standard: "com uma ideia por slide e todos os dados verificados" },
    { id: "O4", condition: "Antes de fazer a fala", action: "praticar em voz alta com um cronómetro e usar a respiração para controlar o nervosismo", standard: "terminando em 2 minutos ou menos" },
    { id: "O5", condition: "Enquanto fala", action: "usar a voz, o olhar e a postura para soar e parecer confiante", standard: "corrigindo pelo menos uma coisa que notou na sua gravação" },
    { id: "O6", condition: "Depois de uma fala", action: "responder a perguntas com calma, incluindo as que não sabe responder", standard: "repetindo cada pergunta e terminando com a sua grande ideia" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear a sua fala",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear uma fala curta: público, objetivo e uma grande ideia",
          minutes: 5,
          goal: "Escrever o seu público, o seu objetivo e a sua grande ideia para uma fala curta.",
          text: [
            "Antes de escrever uma única palavra, responda a três perguntas. Quem está a ouvir? O que quero que façam, pensem ou sintam depois? Qual é a grande ideia que quero que lembrem?",
            "O mesmo tema muda com o público. Se falar do banco alimentar da sua organização a doadores, pode concentrar-se nos resultados e no que o dinheiro deles faz. A novos voluntários, falaria de como é um turno. A uma equipa de jovens, um treinador que fala de disciplina usaria os jogos deles como exemplo.",
            "Escreva a sua grande ideia como uma frase que uma criança de 12 anos consiga repetir: \"Chegar cedo todos os dias é o que ganha os jogos renhidos.\" ou \"A nossa aplicação poupa duas horas por semana às pequenas lojas.\" Tudo na sua fala deve apoiar essa frase. Se alguma coisa não apoia, corte-a."
          ],
          steps: ["Escreva quem está a ouvir e o que lhes interessa.", "Escreva o que quer que façam, pensem ou sintam depois.", "Escreva a sua grande ideia numa frase simples.", "Verifique: cada coisa que vai dizer apoia a grande ideia?"],
          words: [["Público", "as pessoas que ouvem a sua fala."], ["Grande ideia", "a mensagem principal que quer que as pessoas lembrem."]],
          slides: [
            { title: "Primeiro, três perguntas", bullets: ["Quem está a ouvir?", "O que devem fazer, pensar ou sentir depois?", "Qual é a minha grande ideia?"] },
            { title: "Adapte ao público", bullets: ["Doadores: resultados e impacto", "Novos voluntários: como é um turno", "Equipa de jovens: os jogos deles como exemplo"] },
            { title: "Uma grande ideia", bullets: ["Uma frase que uma criança de 12 anos consiga repetir", "\"A nossa aplicação poupa duas horas por semana às pequenas lojas.\"", "Se não apoia a ideia, corte"] }
          ],
          tryIt: "Escolha um tema que conhece bem para a sua fala de 2 minutos. Escreva o seu público, o que quer dele e a sua grande ideia numa frase.",
          youCanNow: "planear uma fala escolhendo o público, o objetivo e uma grande ideia.",
          quickCheck: [
            { objective: "O1", q: "Porque pensar no público antes de escrever uma fala?", options: ["Para usar palavras mais difíceis", "Para a fala servir o que eles precisam e o que lhes interessa", "Para falar mais tempo", "Para não ter de praticar"], answer: 1, why: "Conhecer o público ajuda a escolher o que é importante para ele." },
            { objective: "O1", q: "Vai falar a jovens jogadores sobre entrarem no seu clube. Qual seria a sua grande ideia?", options: ["Toda a história do clube desde o início", "Uma lista de todas as regras", "Porque entrar no clube os vai ajudar a crescer e a divertir-se", "As suas próprias vitórias"], answer: 2, why: "A grande ideia deve ser a mensagem que este público precisa de lembrar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Estrutura: gancho, três pontos, fecho",
          minutes: 5,
          goal: "Fazer o esquema de uma fala de 2 minutos com um gancho, três pontos principais e um fecho claro.",
          text: [
            "Uma estrutura simples ajuda quem ouve a acompanhar e ajuda você a lembrar o que vem a seguir. Use: gancho, três pontos, fecho.",
            "O gancho prende a atenção nos primeiros 15 segundos: uma história curta, um dado surpreendente ou uma pergunta. \"Na época passada perdemos quatro jogos por um ponto.\" Depois dê três pontos principais. Três é fácil de lembrar. Apoie cada um com um exemplo ou um número. Depois feche: repita a grande ideia e diga às pessoas o que fazer a seguir. \"Venham cedo esta semana. Eu estarei lá às 6.\" ou \"Inscreva-se num turno até sexta-feira.\"",
            "Numa fala de 2 minutos, são mais ou menos 15 segundos para o gancho, 30 segundos por ponto e 15 segundos para o fecho. Escreva o esquema como notas curtas, não como um texto completo, para soar natural."
          ],
          steps: ["Escreva um gancho: história, dado surpreendente ou pergunta.", "Escreva três pontos principais, cada um com um exemplo ou número.", "Escreva um fecho: repita a grande ideia e peça uma ação.", "Controle o tempo: cerca de 15 s de gancho, 30 s por ponto, 15 s de fecho."],
          words: [["Gancho", "um início que prende a atenção."], ["Apelo à ação", "dizer ao público a única coisa que deve fazer a seguir."], ["Esquema", "uma lista curta das partes da sua fala, por ordem."]],
          slides: [
            { title: "Gancho, três pontos, fecho", bullets: ["Fácil de acompanhar para quem ouve", "Fácil de lembrar para você"] },
            { title: "O gancho (cerca de 15 segundos)", bullets: ["Uma história curta", "Um dado surpreendente", "Uma pergunta ao público"] },
            { title: "Três pontos (cerca de 30 segundos cada)", bullets: ["Três é fácil de lembrar", "Apoie cada um com um exemplo ou número"] },
            { title: "O fecho (cerca de 15 segundos)", bullets: ["Repita a sua grande ideia", "Uma ação clara: \"Inscreva-se até sexta-feira.\"", "Use notas, não um texto completo"] }
          ],
          tryIt: "Escreva o esquema da sua fala de 2 minutos: um gancho, três pontos com um exemplo cada e um fecho com um apelo à ação. Use notas curtas numa página ou numa nota do telefone.",
          youCanNow: "fazer o esquema de uma fala curta com um gancho, três pontos principais e um fecho com um apelo à ação.",
          quickCheck: [
            { objective: "O2", q: "Para que serve um gancho?", options: ["Para prender a atenção nos primeiros segundos", "Para terminar a fala", "Para listar os seus três pontos", "Para agradecer ao público"], answer: 0, why: "Um gancho põe as pessoas a ouvir logo." },
            { objective: "O2", q: "O seu esquema tem sete pontos principais para uma fala de 2 minutos. O que faria?", options: ["Falar mais depressa para caberem todos", "Juntar mais slides", "Manter todos e saltar o fecho", "Escolher os três pontos mais importantes"], answer: 3, why: "Três pontos cabem no tempo e são fáceis de lembrar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Slides simples que ajudam, e não atrapalham",
          minutes: 4,
          goal: "Fazer slides simples, ou decidir que não precisa de nenhum.",
          text: [
            "Os slides devem ajudar o público, não guardar o seu texto. Muitas falas curtas excelentes não usam slides. Use-os quando uma imagem, um gráfico ou algumas palavras-chave tornam a sua ideia mais clara.",
            "Regras que funcionam: uma ideia por slide; um título curto; no máximo poucas palavras ou uma imagem; letra grande que as pessoas lá atrás consigam ler; contraste forte, como letra escura em fundo claro. Nunca leia os slides em voz alta palavra por palavra; o público lê mais depressa do que você fala.",
            "Ferramentas gratuitas como Google Slides, Microsoft PowerPoint para a web e Canva permitem fazer slides no navegador. Um assistente de IA pode sugerir títulos de slides a partir do seu esquema, mas corte bem o texto dele e verifique todos os dados e números que ele dá."
          ],
          steps: ["Pergunte: um slide torna esta ideia mais clara? Se não, salte-o.", "Uma ideia por slide, com um título curto.", "Use poucas palavras ou uma imagem.", "Use letra grande com contraste forte.", "Pratique sem ler os slides em voz alta."],
          words: [["Conjunto de slides", "os slides de uma fala, todos juntos."], ["Contraste", "o quanto o texto se destaca do fundo."]],
          slides: [
            { title: "Os slides ajudam o público", bullets: ["Não são o seu texto", "Muitas falas curtas excelentes não usam nenhum"] },
            { title: "Regras dos slides", bullets: ["Uma ideia por slide", "Poucas palavras ou uma imagem", "Letra grande, contraste forte"] },
            { title: "Não os leia", bullets: ["As pessoas leem mais depressa do que você fala", "Em vez disso, fale sobre o slide"] },
            { title: "Ferramentas gratuitas", bullets: ["Google Slides, PowerPoint para a web, Canva", "A IA pode sugerir títulos; corte e verifique"] }
          ],
          tryIt: "Decida se a sua fala de 2 minutos precisa de slides. Se sim, faça no máximo três numa ferramenta gratuita, com uma ideia cada. Se não, escreva uma frase a explicar porque a fala funciona sem eles.",
          youCanNow: "fazer slides simples e fáceis de ler ou decidir com confiança falar sem eles.",
          quickCheck: [
            { objective: "O3", q: "Quando é que um slide ajuda uma fala?", options: ["Quando tem todo o seu texto", "Quando uma imagem, um gráfico ou poucas palavras tornam uma ideia mais clara", "Quando não tem nada para dizer", "Sempre, em cada frase"], answer: 1, why: "Os slides só ajudam quando tornam uma ideia mais clara." },
            { objective: "O3", q: "Um assistente de IA dá-lhe um slide cheio, com 80 palavras. O que faria?", options: ["Lê-lo palavra por palavra", "Pôr a letra mais pequena", "Juntar mais palavras", "Reduzi-lo a um título curto e poucas palavras, e verificar os dados"], answer: 3, why: "Slides simples com dados verificados ajudam; paredes de texto atrapalham." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear a sua fala",
        questions: [
          { objective: "O1", q: "O que deve decidir antes de escrever a sua fala?", options: ["Só a roupa que vai usar", "Quantos slides vai usar", "O seu público, o seu objetivo e a sua grande ideia", "Quanto tempo vão durar as perguntas"], answer: 2, why: "Essas três coisas decidem tudo o resto na fala." },
          { objective: "O2", q: "Qual é um bom gancho?", options: ["\"Na época passada perdemos quatro jogos por um ponto.\"", "\"Hum, então, vou falar agora.\"", "\"Desculpem, não sou bom nisto.\"", "Ler o slide do título"], answer: 0, why: "Uma história curta ou um dado surpreendente prende a atenção." },
          { objective: "O2", q: "Porque usar três pontos principais?", options: ["É uma lei", "Mais pontos parecem sempre mais inteligentes", "Enche o tempo", "Três é fácil de as pessoas lembrarem"], answer: 3, why: "Três pontos são fáceis de acompanhar e de lembrar." },
          { objective: "O2", q: "Um bom fecho faz o quê?", options: ["Termina com \"É isso, acho eu\"", "Repete a grande ideia e pede uma ação", "Junta um quarto ponto novo", "Pede desculpa pela fala"], answer: 1, why: "Um fecho claro deixa as pessoas a saber o que fazer." },
          { objective: "O3", q: "Qual é o melhor slide?", options: ["Dez tópicos em letra pequena", "Uma página inteira do seu texto", "Uma ideia, um título curto e letra grande", "Letra cinzenta clara em fundo branco"], answer: 2, why: "Slides simples e fáceis de ler ajudam o público." }
        ]
      }
    },
    {
      name: "Capítulo 2: Falar com confiança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Prática e nervosismo",
          minutes: 5,
          goal: "Praticar uma fala em voz alta e usar ferramentas simples para controlar o nervosismo.",
          text: [
            "O nervosismo é normal, mesmo para oradores profissionais e para atletas antes de um grande jogo. O coração acelerado e as mãos a tremer são o seu corpo a preparar-se. Não precisa de se livrar do nervosismo; precisa de o usar.",
            "A prática é o melhor remédio. Diga a fala em voz alta pelo menos três vezes, de pé, com um cronómetro. Depois grave-a no telefone e veja a gravação. Depois experimente diante de um amigo, familiar, treinador ou colega. A cada vez, fica mais fácil.",
            "No dia: respire devagar (inspire em 4, expire em 6) antes de começar; segure as suas notas ou descanse as mãos; procure uma cara simpática na sala; e lembre-se de que o público quer que corra bem. Se se perder, faça uma pausa, olhe para as notas e continue. Uma pausa parece longa para você, mas curta para eles."
          ],
          steps: ["Diga a fala em voz alta três vezes, de pé, com um cronómetro.", "Grave-a no telefone e veja a gravação.", "Pratique uma vez diante de uma pessoa e peça uma dica.", "Antes de começar: inspire em 4, expire em 6.", "Se se perder: pausa, olhe para as notas, continue."],
          words: [["Ensaiar", "praticar uma fala em voz alta antes de a fazer."], ["Nervosismo", "a sensação de nervos antes de algo importante; normal e útil."]],
          slides: [
            { title: "O nervosismo é normal", bullets: ["Até profissionais e atletas o sentem", "O seu corpo está a preparar-se", "Use-o; não lute contra ele"] },
            { title: "Pratique em voz alta", bullets: ["Três vezes, de pé, com um cronómetro", "Grave e veja a gravação", "Experimente diante de uma pessoa"] },
            { title: "No dia", bullets: ["Respire: inspire em 4, expire em 6", "Procure uma cara simpática", "O público quer que corra bem"] },
            { title: "Perdeu-se?", bullets: ["Faça uma pausa", "Olhe para as suas notas", "Continue: para eles, a pausa parece mais curta"] }
          ],
          tryIt: "Levante-se e diga a sua fala de 2 minutos em voz alta três vezes, com um cronómetro. Anote quanto tempo demora cada vez e corte o que o faz passar dos 2 minutos.",
          youCanNow: "ensaiar uma fala em voz alta, medir o tempo e usar a respiração e as pausas para controlar o nervosismo.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer o coração bater depressa antes de uma fala?", options: ["O seu corpo está a preparar-se, o que é normal", "Deve cancelar a fala", "Não está preparado", "Está doente"], answer: 0, why: "O nervosismo é um sinal normal de que o corpo se está a preparar." },
            { objective: "O4", q: "O seu ensaio demora 3 minutos, mas só tem 2. O que faria?", options: ["Falar muito mais depressa", "Saltar o fecho no dia", "Cortar as partes que não apoiam a grande ideia e medir o tempo outra vez", "Pedir mais tempo no dia"], answer: 2, why: "Cortar o que sobra mantém a fala no tempo e com foco." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Voz e linguagem corporal",
          minutes: 5,
          goal: "Usar a voz, o olhar e o corpo para soar e parecer confiante.",
          text: [
            "A forma como diz é tão importante como o que diz. Fale um pouco mais devagar e um pouco mais alto do que numa conversa normal. Faça uma pausa depois dos pontos importantes para as pessoas os absorverem. Varie o tom para não soar monótono, e corte palavras de enchimento como \"hum\" e \"tipo\", fazendo uma pausa em vez delas.",
            "Fique direito, com os pés mais ou menos à largura dos ombros e o peso bem distribuído. Mantenha as mãos relaxadas ao lado do corpo ou use-as para gestos naturais; evite cruzar os braços ou ter as mãos nos bolsos. Olhe para pessoas reais, uma de cada vez, durante uma ou duas frases cada. Numa videochamada, olhe para a câmara, não para a sua própria cara no ecrã.",
            "Culturas diferentes entendem o olhar e os gestos de formas diferentes, por isso observe o seu público e adapte-se. O objetivo é parecer calmo, aberto e interessado nas pessoas."
          ],
          steps: ["Fale um pouco mais devagar e mais alto do que o normal.", "Faça uma pausa depois dos pontos importantes.", "Troque o \"hum\" por uma pausa curta.", "Fique direito, pés à largura dos ombros, mãos relaxadas.", "Olhe para uma pessoa durante uma frase, depois para outra.", "Em vídeo, olhe para a câmara."],
          words: [["Linguagem corporal", "o que a sua postura, cara, mãos e olhos dizem sem palavras."], ["Palavras de enchimento", "sons como \"hum\", \"éé\" e \"tipo\" que enchem o silêncio."]],
          slides: [
            { title: "A sua voz", bullets: ["Um pouco mais devagar e mais alto", "Pausa depois dos pontos principais", "Varie o tom; troque o \"hum\" por uma pausa"] },
            { title: "O seu corpo", bullets: ["Fique direito, pés à largura dos ombros", "Mãos relaxadas ou gestos naturais", "Nada de braços cruzados ou mãos nos bolsos"] },
            { title: "O seu olhar", bullets: ["Uma pessoa, uma frase, depois a seguinte", "Em vídeo: olhe para a câmara"] },
            { title: "Observe a sala", bullets: ["As culturas diferem no olhar e nos gestos", "Procure parecer calmo, aberto e interessado"] }
          ],
          tryIt: "Grave 30 segundos da sua fala no telefone. Veja sem som: observe a postura, as mãos e o olhar. Depois ouça de olhos fechados: conte os \"hum\" e repare na sua velocidade. Escolha uma coisa para corrigir.",
          youCanNow: "usar a voz, a postura, as mãos e o olhar para transmitir calma e confiança.",
          quickCheck: [
            { objective: "O5", q: "O que é uma palavra de enchimento?", options: ["Uma palavra-chave da sua grande ideia", "Uma palavra como \"hum\" ou \"tipo\" que enche uma pausa", "Uma palavra num slide", "A última palavra da sua fala"], answer: 1, why: "As palavras de enchimento enchem o silêncio; uma pausa curta funciona melhor." },
            { objective: "O5", q: "Ao ver a sua gravação, repara que está a olhar para o chão. O que faria?", options: ["Olhar para uma pessoa durante uma frase, depois para outra", "Fechar os olhos enquanto fala", "Ler as notas o tempo todo", "Olhar só para o teto"], answer: 0, why: "Olhar para uma pessoa de cada vez transmite confiança." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Responder a perguntas",
          minutes: 5,
          goal: "Responder a perguntas depois de uma fala com calma e clareza, incluindo as que não sabe responder.",
          text: [
            "As perguntas mostram que as pessoas estiveram a ouvir. Prepare-se escrevendo as três perguntas que é mais provável receber e uma resposta curta para cada uma.",
            "Quando alguém pergunta: ouça a pergunta toda, agradeça e repita-a ou diga-a por outras palavras para todos ouvirem. Responda de forma breve, em 30 segundos ou menos se conseguir, e depois confirme: \"Isto responde à sua pergunta?\" Se não souber, diga-o com honestidade: \"Não sei, mas vou descobrir e dou-lhe uma resposta até sexta-feira.\" Depois cumpra. Nunca invente nada.",
            "Perante uma pergunta hostil ou fora do tema, mantenha a calma e a educação: \"É uma preocupação justa. Vamos falar no fim para lhe darmos o tempo que merece.\" Um jornalista ou um patrocinador também pode fazer perguntas difíceis; faça uma ponte de volta à sua grande ideia: \"O que posso dizer-lhe é...\". Termine o tempo das perguntas com o seu fecho outra vez, para que a grande ideia seja a última coisa que as pessoas ouvem."
          ],
          steps: ["Antes: escreva três perguntas prováveis e respostas curtas.", "Ouça a pergunta toda.", "Agradeça e repita-a para todos.", "Responda de forma breve e confirme se respondeu.", "Não sabe? Diga-o e prometa dar uma resposta depois.", "Termine repetindo o seu fecho."],
          words: [["Perguntas e respostas", "o tempo depois de uma fala para as pessoas fazerem perguntas."], ["Ponte", "uma frase que leva uma resposta difícil de volta à sua mensagem principal."]],
          slides: [
            { title: "Prepare-se", bullets: ["Escreva três perguntas prováveis", "Escreva uma resposta curta para cada uma"] },
            { title: "Responder", bullets: ["Ouça a pergunta toda", "Agradeça e repita-a", "Responda de forma breve e confirme"] },
            { title: "Quando não sabe", bullets: ["Diga-o com honestidade", "\"Vou descobrir e dou-lhe uma resposta até sexta-feira.\"", "Nunca invente"] },
            { title: "Perguntas difíceis", bullets: ["Mantenha a calma e a educação", "Ofereça-se para falar no fim", "Ponte: \"O que posso dizer-lhe é...\""] }
          ],
          tryIt: "Tarefa final: grave a sua fala de 2 minutos no telefone. Depois peça a um amigo que lhe faça duas perguntas (ou faça-as a si mesmo) e grave as suas respostas. Veja a gravação, anote um ponto forte e uma coisa a corrigir, e grave a fala mais uma vez.",
          youCanNow: "fazer uma fala curta e responder a perguntas com calma, incluindo as que ainda não sabe responder.",
          quickCheck: [
            { objective: "O6", q: "O que é uma ponte ao responder a perguntas?", options: ["Um slide que liga dois pontos", "Uma pausa antes da sua fala", "Uma frase que o leva da pergunta de volta à sua mensagem principal", "Uma forma de fugir a todas as perguntas"], answer: 2, why: "Uma ponte como \"O que posso dizer-lhe é...\" leva-o de volta à sua mensagem." },
            { objective: "O6", q: "Alguém faz uma pergunta a que não sabe responder. O que diria?", options: ["Inventar uma resposta", "Ignorar a pergunta", "Dizer que é uma má pergunta", "\"Não sei, mas vou descobrir e dou-lhe uma resposta até sexta-feira.\""], answer: 3, why: "Honestidade e um dia marcado para responder mantêm a confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Falar com confiança",
        questions: [
          { objective: "O4", q: "Qual é a melhor forma de se preparar para uma fala?", options: ["Lê-la uma vez em silêncio", "Dizê-la em voz alta várias vezes, de pé, com um cronómetro", "Decorar só os slides", "Improvisar"], answer: 1, why: "Praticar em voz alta é o melhor remédio para o nervosismo." },
          { objective: "O4", q: "Perde-se a meio da fala. O que faz?", options: ["Pede desculpa muitas vezes", "Sai do palco", "Começa tudo de novo", "Faz uma pausa, olha para as notas e continua"], answer: 3, why: "Uma pausa curta é normal e quase ninguém repara." },
          { objective: "O5", q: "Numa videochamada, para onde deve olhar quando fala?", options: ["Para a câmara", "Para a sua própria cara no ecrã", "Para o teclado", "Pela janela"], answer: 0, why: "Olhar para a câmara parece olhar nos olhos." },
          { objective: "O5", q: "Qual é uma boa forma de cortar palavras de enchimento como \"hum\"?", options: ["Falar mais depressa", "Trocá-las por uma pausa curta", "Dizer \"tipo\" em vez disso", "Nunca parar de falar"], answer: 1, why: "Uma pausa soa confiante; as palavras de enchimento não." },
          { objective: "O6", q: "Alguém faz uma pergunta a que não sabe responder. O que é melhor?", options: ["Inventar uma resposta", "Ignorar a pessoa", "Dizer que não sabe e prometer responder até um dia marcado", "Mudar de assunto sem dizer nada"], answer: 2, why: "Honestidade e uma resposta depois mantêm a confiança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Falar em Público e Fazer Apresentações",
    questions: [
      { objective: "O1", q: "A \"grande ideia\" de uma fala é:", options: ["A parte mais longa", "A mensagem principal que quer que as pessoas lembrem", "O design dos seus slides", "O título do primeiro slide"], answer: 1, why: "Tudo na fala apoia a grande ideia." },
      { objective: "O1", q: "Vai falar a novos voluntários sobre o seu banco alimentar. Em que se deve concentrar?", options: ["Nos seus formulários de impostos", "Nas atas da direção do ano passado", "Em todos os programas que tem", "Em como é um turno de voluntário"], answer: 3, why: "Adapte a fala ao que esse público precisa." },
      { objective: "O1", q: "Se uma parte da sua fala não apoia a grande ideia, deve:", options: ["Cortá-la", "Torná-la mais longa", "Pô-la em primeiro lugar", "Pô-la num slide"], answer: 0, why: "Cortar mantém a fala clara e curta." },
      { objective: "O2", q: "A estrutura simples de fala deste curso é:", options: ["Desculpa, detalhes, adeus", "Slides, mais slides, perguntas", "Gancho, três pontos, fecho", "História, história, história"], answer: 2, why: "Gancho, três pontos e fecho são fáceis de acompanhar." },
      { objective: "O2", q: "Numa fala de 2 minutos, quanto tempo dura mais ou menos cada ponto principal?", options: ["5 segundos", "30 segundos", "2 minutos", "10 minutos"], answer: 1, why: "Cerca de 15 s de gancho, 30 s por ponto, 15 s de fecho." },
      { objective: "O2", q: "Qual é um apelo à ação claro?", options: ["\"Obrigado, acho eu.\"", "\"Perguntas? Não? Está bem.\"", "\"Talvez pensem nisso um dia.\"", "\"Inscreva-se num turno até sexta-feira.\""], answer: 3, why: "Diz às pessoas exatamente o que fazer e quando." },
      { objective: "O2", q: "Porque usar notas em vez de um texto completo?", options: ["Soa mais natural", "Os textos não são permitidos", "As notas são mais longas", "Para poder ler cada palavra"], answer: 0, why: "Notas curtas mantêm-no natural e no caminho certo." },
      { objective: "O3", q: "Quando deve usar um slide?", options: ["Em cada frase", "Quando uma imagem, um gráfico ou poucas palavras tornam uma ideia mais clara", "Nunca", "Só para o seu texto"], answer: 1, why: "Os slides devem ajudar o público a entender." },
      { objective: "O3", q: "Porque não ler os slides palavra por palavra?", options: ["É rápido demais", "Os slides são secretos", "O público lê mais depressa do que você fala", "É contra as regras"], answer: 2, why: "Ler os slides faz perder o público." },
      { objective: "O3", q: "Um assistente de IA dá-lhe o texto de um slide. O que deve fazer?", options: ["Usá-lo todo como está", "Reduzi-lo e verificar todos os dados e números", "Lê-lo em voz alta palavra por palavra", "Juntar mais texto"], answer: 1, why: "A IA pode errar e usar palavras demais; quem manda é você." },
      { objective: "O4", q: "O nervosismo antes de uma fala é:", options: ["Um sinal de que deve cancelar", "Raro", "Só para principiantes", "Normal, é o seu corpo a preparar-se"], answer: 3, why: "Até os profissionais ficam nervosos; você pode usar isso." },
      { objective: "O4", q: "Que passo da prática vem depois de dizer a fala em voz alta três vezes?", options: ["Gravá-la no telefone e ver a gravação", "Apagar as suas notas", "Juntar mais dez pontos", "Parar de praticar"], answer: 0, why: "Ver uma gravação mostra o que corrigir." },
      { objective: "O4", q: "Uma forma rápida de se acalmar mesmo antes de começar é:", options: ["Beber muito café", "Inspirar em 4, expirar em 6", "Correr no lugar durante 5 minutos", "Ler todos os seus e-mails"], answer: 1, why: "Respirar devagar acalma o corpo." },
      { objective: "O5", q: "Que postura parece confiante?", options: ["Braços cruzados", "Mãos nos bolsos", "De pé e direito, pés à largura dos ombros, mãos relaxadas", "Encostado à parede"], answer: 2, why: "Uma postura aberta e firme parece calma e confiante." },
      { objective: "O5", q: "Olhar bem para um grupo quer dizer:", options: ["Fixar uma pessoa o tempo todo", "Olhar para o chão", "Olhar para o teto", "Olhar para uma pessoa durante uma frase, depois para outra"], answer: 3, why: "Assim cria ligação com muitas pessoas, uma de cada vez." },
      { objective: "O5", q: "Comparado com uma conversa normal, deve falar:", options: ["Um pouco mais devagar e mais alto", "Muito mais depressa", "Aos sussurros", "Sem nenhuma pausa"], answer: 0, why: "Mais devagar e mais alto ajuda todos a ouvir e a acompanhar." },
      { objective: "O6", q: "Porque repetir uma pergunta antes de responder?", options: ["Para perder tempo", "Para todos a ouvirem e para confirmar que a entendeu", "Para se mostrar", "Porque quem perguntou se esqueceu"], answer: 1, why: "Repetir ajuda a sala e confirma que entendeu." },
      { objective: "O6", q: "Um patrocinador faz uma pergunta difícil. Uma boa \"ponte\" é:", options: ["\"Sem comentários.\" e ir embora", "\"Que pergunta estúpida.\"", "\"O que posso dizer-lhe é...\" e depois voltar à sua mensagem principal", "Inventar números"], answer: 2, why: "Uma ponte responde com educação e volta à sua mensagem." },
      { objective: "O6", q: "Alguém faz uma queixa fora do tema durante as perguntas e respostas. O que é melhor?", options: ["Discutir até a pessoa parar", "Ignorá-la por completo", "Terminar a fala mais cedo", "Manter a educação e oferecer-se para falar no fim"], answer: 3, why: "Respeita a pessoa e protege o tempo de todos." },
      { objective: "O6", q: "Qual deve ser a última coisa que as pessoas ouvem depois das perguntas?", options: ["O seu fecho e a grande ideia outra vez", "Um pedido de desculpa", "\"Hum, OK, adeus.\"", "Um tema novo"], answer: 0, why: "Terminar com o fecho faz a grande ideia ficar na memória." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 5, 8, 10, 12, 13, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Grande ideia", objective: "O1", notYet: "A fala não tem uma mensagem principal clara.", meets: "Uma grande ideia que quem ouve consegue repetir numa frase.", exceeds: "A grande ideia serve o público e o que ele precisa." },
      { name: "Estrutura", objective: "O2", notYet: "Falta um gancho, um ponto ou o fecho.", meets: "Um gancho, três pontos principais com exemplos e um fecho com um apelo à ação.", exceeds: "O fecho repete a grande ideia e o apelo à ação é concreto." },
      { name: "Tempo", objective: "O4", notYet: "Passa dos 2 minutos, ou nota-se que não foi praticada.", meets: "Termina em 2 minutos ou menos, a partir de notas e não de um texto completo.", exceeds: "Soa natural e calmo do início ao fim." },
      { name: "Voz e corpo", objective: "O5", notYet: "Difícil de ouvir, muitas palavras de enchimento ou nenhum olhar para o público.", meets: "Voz clara, ritmo firme, boa postura e olhar para a câmara.", exceeds: "A segunda gravação mostra a correção escolhida depois de ver a primeira." },
      { name: "Responder a perguntas", objective: "O6", notYet: "Inventou respostas ou ficou na defensiva.", meets: "Repetiu cada pergunta e respondeu com calma, ou prometeu dar uma resposta depois.", exceeds: "Fez uma ponte de volta à grande ideia no fim." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que fazem uma fala, uma apresentação de negócio ou uma apresentação no trabalho, na escola, numa equipa ou na sua comunidade em 60 dias (inquérito de acompanhamento)",
      "Alunos que dizem sentir-se mais confiantes a falar em entrevistas ou reuniões",
      "Alunos cuja segunda gravação tem uma nota mais alta na grelha do que a primeira",
      "Alunos que começam outro curso de carreira ou de relações humanas da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com câmara e cronómetro",
      "Papel ou uma nota no telefone para o esquema",
      "Uma ferramenta gratuita de slides como Google Slides ou Canva (opcional)",
      "Cerca de 60 minutos no total, mais o tempo para gravar a fala final"
    ],
    facilitatorNotes: [
      "Comece com pequenos grupos ou pares, para que os alunos nervosos possam praticar com menos pressão.",
      "Dê feedback com um ponto forte primeiro e depois uma coisa a corrigir.",
      "Deixe os alunos manterem as gravações privadas; só as partilham se quiserem.",
      "Deixe os alunos escolherem temas que conhecem bem, como o seu desporto, trabalho, negócio ou causa.",
      "Avalie a gravação final com a grelha e dê feedback sobre uma linha em Ainda não de cada vez."
    ]
  }
};
