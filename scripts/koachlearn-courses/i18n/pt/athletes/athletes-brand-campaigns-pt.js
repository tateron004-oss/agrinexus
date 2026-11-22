"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-brand-campaigns.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-brand-campaigns-pt",
  lang: "pt",
  translationOf: "athletes-brand-campaigns",
  category: "Athletes",
  name: "Campanhas Educativas com Marcas",
  skills: "Reconhecer uma campanha educativa, Escolher uma causa que combina com você, Verificar factos em fontes de confiança, Planear uma campanha de 3 publicações com IA, Propor uma parceria a uma marca ou organização sem fins lucrativos com divulgação clara",
  outcome: "planear uma campanha educativa de três publicações sobre uma causa que lhe importa (por exemplo segurança na água, leitura, consciência sobre concussões ou literacia financeira), com os factos verificados em fontes oficiais, uma proposta a um parceiro e uma divulgação clara de qualquer apoio de uma marca.",
  about: [
    "Este curso é para atletas e treinadores que querem usar a sua plataforma para ensinar algo útil, sozinhos ou com uma marca ou uma organização sem fins lucrativos. As marcas fazem muitas vezes campanhas educativas com atletas sobre temas como saúde, segurança, leitura, gestão do dinheiro e comunidade.",
    "Uma campanha educativa primeiro ensina e só depois vende, se vender. Você vai aprender o que faz uma boa campanha, escolher uma causa que combina com você, verificar factos em fontes oficiais, planear três publicações com IA e propor uma parceria com honestidade.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Qualquer trabalho pago ou oferecido por uma marca precisa de uma divulgação clara e, para estudantes, de uma verificação das regras NIL (sobre ganhar dinheiro com o seu nome, imagem e semelhança) da sua escola e do seu estado."
  ],
  finalTask: "Planeie uma campanha educativa de três publicações sobre uma causa: um objetivo de aprendizagem claro, três planos de publicação escritos com IA, cada facto ligado a uma fonte oficial ou de especialistas, um apelo à ação e uma proposta curta a uma marca ou organização sem fins lucrativos. Inclua como vai divulgar qualquer apoio de uma marca e com quem, na sua escola ou no seu estado, verificou as regras NIL.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas e treinadores do ensino secundário, da universidade e do início da carreira que querem usar a sua plataforma para ensinar algo útil, sozinhos ou com uma marca ou uma organização sem fins lucrativos.",
    startingPoint: "Têm seguidores nas redes sociais e uma causa da sua própria vida que lhes importa. Poucos já planearam uma campanha, verificaram factos em fontes oficiais, propuseram uma parceria ou mediram se as pessoas aprenderam.",
    gap: "Publicações bem-intencionadas com factos errados podem prejudicar pessoas e a reputação do atleta e do parceiro, e um apoio não divulgado viola as regras da publicidade. Uma campanha pequena, com factos verificados e divulgação honesta, permite aos atletas ajudar a sua comunidade e criar parcerias de confiança.",
    constraints: [
      "Linguagem simples, de cerca do 8.º ano de escolaridade",
      "Um telefone com redes sociais e um assistente de IA gratuito",
      "Cerca de 60 minutos no total",
      "Cada facto vem de uma fonte oficial ou de especialistas; só consciência geral, e os conselhos pessoais ficam para os profissionais",
      "Regras de divulgação da FTC e regras NIL da escola e do estado; atletas com menos de 18 anos envolvem um pai, mãe ou encarregado de educação"
    ],
    prerequisites: "Nenhum. O curso \"Criação de Conteúdos para Atletas\" ajuda a fazer as publicações."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com exemplos de publicações", action: "explicar em que uma campanha educativa é diferente de um anúncio normal", standard: "dizendo as quatro partes de uma boa campanha: um objetivo de aprendizagem, factos certos, uma ação simples e honestidade sobre quem paga" },
    { id: "O2", condition: "Com causas ligadas à sua vida", action: "escolher uma causa e escrever um objetivo de aprendizagem para o seu público", standard: "com uma ligação à sua história em duas frases e um objetivo que diz quem vai saber ou fazer o quê" },
    { id: "O3", condition: "Com os factos que quer partilhar", action: "verificar cada facto numa fonte oficial ou de especialistas e registá-lo numa ficha de factos", standard: "com um link e uma data para cada facto, e retirando qualquer facto que não consiga confirmar" },
    { id: "O4", condition: "Usando a sua ficha de factos e um assistente de IA", action: "criar um plano de três publicações: porque é importante, o que saber e passar à ação", standard: "com um gancho, os pontos principais e um apelo à ação em cada publicação, só factos da sua ficha e um tom de esperança" },
    { id: "O5", condition: "Com parceiros que já se importam com a sua causa", action: "escrever uma proposta curta a uma marca ou organização sem fins lucrativos", standard: "com menos de 150 palavras, com a sua causa, história, objetivo, plano, público e um pedido claro, e as regras NIL verificadas" },
    { id: "O6", condition: "Numa campanha com qualquer apoio de uma marca", action: "escrever uma divulgação clara para cada publicação e escolher duas formas de medir a aprendizagem", standard: "com a divulgação perto do início, nenhuma afirmação além da sua ficha de factos e os resultados partilhados com o parceiro" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que faz uma boa campanha educativa",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é uma campanha educativa",
          minutes: 4,
          goal: "Distinguir uma campanha educativa de um anúncio normal.",
          text: [
            "Um anúncio normal diz \"compre isto\". Uma campanha educativa diz \"aqui está algo útil para saber ou fazer\". As marcas usam atletas nestas campanhas porque os jovens e as famílias confiam nos atletas.",
            "Exemplos de temas de campanha: aprender a nadar e a segurança na água, reconhecer os sinais de uma concussão, ler todos os dias, beber água suficiente, poupar dinheiro, segurança na internet ou consciência sobre a saúde mental.",
            "As boas campanhas têm um objetivo de aprendizagem, factos certos de fontes de confiança, uma ação simples que as pessoas podem fazer e honestidade sobre quem as paga."
          ],
          words: [["Campanha educativa", "uma série de mensagens que ensina às pessoas algo útil, muitas vezes apoiada por uma marca ou uma organização sem fins lucrativos."], ["Objetivo de aprendizagem", "a única coisa que quer que o seu público saiba ou faça depois da campanha."]],
          slides: [
            { title: "Anúncio e campanha educativa", bullets: ["Anúncio: \"compre isto\"", "Campanha: \"aqui está algo útil para saber ou fazer\""] },
            { title: "Exemplos de temas", bullets: ["Segurança na água, sinais de concussão", "Leitura, gestão do dinheiro", "Segurança na internet, saúde mental"] },
            { title: "Uma boa campanha tem", bullets: ["Um objetivo de aprendizagem", "Factos certos, com fontes", "Uma ação simples", "Honestidade sobre quem paga"] }
          ],
          tryIt: "Encontre uma campanha educativa que já viu com um atleta ou uma marca. Escreva o objetivo de aprendizagem, a ação que pedia e se dizia quem a pagou.",
          youCanNow: "distinguir uma campanha educativa de um anúncio normal e dizer o que a torna boa.",
          quickCheck: [
            { objective: "O1", q: "O que diz uma campanha educativa?", options: ["\"Compre isto já\"", "\"Aqui está algo útil para saber ou fazer\"", "\"Siga-me para ganhar prémios\"", "\"A nossa equipa é a melhor\""], answer: 1, why: "Um anúncio normal diz compre isto; uma campanha educativa ensina algo útil." },
            { objective: "O1", q: "Uma marca oferece-lhe uma \"campanha\" que é só códigos de desconto, sem nenhuma lição. O que é?", options: ["Uma campanha educativa", "Uma ficha de factos", "Um anúncio normal", "Uma parceria com uma organização sem fins lucrativos"], answer: 2, why: "Sem objetivo de aprendizagem nem ação útil, é um anúncio normal." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escolher a sua causa",
          minutes: 5,
          goal: "Escolher uma causa que combina com a sua história e com o seu público.",
          text: [
            "As campanhas mais fortes vêm da vida real. Um treinador ensinou-lhe sobre concussões depois de um colega de equipa se magoar? A leitura ajudou-o a continuar apto para jogar? Aprender a fazer um orçamento com o seu dinheiro NIL mudou alguma coisa? A sua história faz as pessoas ouvirem.",
            "Escolha uma causa que também combine com o seu público. Os fãs mais novos e os pais deles podem importar-se com a segurança e a leitura; os colegas da universidade podem importar-se com a gestão do dinheiro e a saúde mental.",
            "Escreva um objetivo de aprendizagem: \"Depois da minha campanha, os jogadores do 2.º ciclo vão saber três sinais de uma concussão e que devem avisar logo um treinador.\""
          ],
          steps: ["Faça uma lista de três causas ligadas à sua vida.", "Marque a que combina melhor com o seu público.", "Escreva a ligação à sua história em duas frases.", "Escreva um objetivo de aprendizagem."],
          words: [["Causa", "um problema ou objetivo que lhe importa e com que quer ajudar."], ["Autêntico", "real e fiel a quem você é."]],
          slides: [
            { title: "Comece pela sua história", bullets: ["O que lhe aconteceu?", "Porque é que isto lhe importa?"] },
            { title: "Combine com o seu público", bullets: ["Fãs mais novos: segurança, leitura", "Colegas da universidade: dinheiro, saúde mental"] },
            { title: "Um objetivo de aprendizagem", bullets: ["Quem vai aprender o quê", "E o que vai fazer"] }
          ],
          tryIt: "Peça a um assistente de IA para o ajudar a fazer uma lista de causas ligadas ao seu desporto e à sua vida. Escolha uma e escreva a sua história em duas frases e um objetivo de aprendizagem.",
          youCanNow: "escolher uma causa autêntica e escrever um objetivo de aprendizagem claro.",
          quickCheck: [
            { objective: "O2", q: "De onde vêm as causas de campanha mais fortes?", options: ["Da sua vida real", "Do que está na moda", "Do que uma marca lhe diz", "De temas ao acaso dados pela IA"], answer: 0, why: "A sua história faz as pessoas ouvirem." },
            { objective: "O2", q: "Os seus fãs são sobretudo jogadores do 2.º ciclo e os pais deles. Que causa combina melhor?", options: ["Investir para a reforma", "Seguro automóvel", "Formulários de impostos da universidade", "Reconhecer os sinais de uma concussão"], answer: 3, why: "Os fãs mais novos e os pais deles podem importar-se com temas de segurança como as concussões." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Acertar nos factos",
          minutes: 5,
          goal: "Verificar cada facto da sua campanha numa fonte oficial ou de especialistas.",
          text: [
            "Se ensinar algo errado, as pessoas podem magoar-se, e a sua reputação e a do seu parceiro sofrem. Cada facto precisa de uma fonte de confiança.",
            "Use fontes oficiais e de especialistas: os serviços do governo de saúde e segurança (por exemplo as páginas HEADS UP sobre concussões do CDC, o serviço de saúde pública dos Estados Unidos), organizações nacionais e especialistas como fisioterapeutas desportivos, médicos, professores ou conselheiros financeiros. Peça a um assistente de IA para explicar um tema de forma simples e depois confirme cada facto na própria fonte.",
            "Tenha uma ficha de factos: cada facto, o link da fonte e a data em que o verificou. Ensine consciência geral e encaminhe as pessoas para profissionais para conselhos pessoais."
          ],
          steps: ["Faça uma lista dos factos que quer partilhar.", "Encontre uma fonte oficial ou de especialistas para cada um.", "Escreva o link e a data em que verificou.", "Retire qualquer facto que não consiga confirmar.", "Encaminhe as pessoas para profissionais para conselhos pessoais."],
          words: [["Fonte oficial", "informação de um serviço do governo ou da organização responsável pelo tema."], ["Ficha de factos", "uma lista dos seus factos com as fontes e as datas em que os verificou."]],
          slides: [
            { title: "Factos errados fazem mal", bullets: ["As pessoas podem magoar-se", "O seu nome e o do seu parceiro sofrem"] },
            { title: "Fontes de confiança", bullets: ["Serviços do governo, como o CDC HEADS UP", "Organizações nacionais", "Especialistas: fisioterapeutas, médicos, professores"] },
            { title: "A sua ficha de factos", bullets: ["Facto, link da fonte, data da verificação", "Não consegue confirmar? Retire-o"] }
          ],
          sources: [{ name: "CDC: HEADS UP (consciência sobre concussões)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Escreva três factos para a sua campanha. Encontre uma fonte oficial ou de especialistas para cada um e faça a sua ficha de factos com links e datas.",
          youCanNow: "verificar os factos da campanha em fontes oficiais e manter uma ficha de factos.",
          quickCheck: [
            { objective: "O3", q: "O que vai numa ficha de factos?", options: ["O seu número de seguidores", "Cada facto, o link da fonte e a data em que o verificou", "Só a resposta da IA", "Os preços do seu parceiro"], answer: 1, why: "Uma ficha de factos guarda cada facto com a sua fonte e a data da verificação." },
            { objective: "O3", q: "Um seguidor pergunta-lhe o que fazer com a sua própria lesão. O que faz?", options: ["Dá-lhe um plano de tratamento", "Pergunta a uma IA e publica a resposta", "Encaminha-o para um médico ou fisioterapeuta desportivo", "Ignora-o"], answer: 2, why: "Ensine consciência geral e encaminhe as pessoas para profissionais para conselhos pessoais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que faz uma boa campanha educativa",
        questions: [
          { objective: "O1", q: "Em que é que uma campanha educativa é diferente de um anúncio normal?", options: ["É sempre mais longa", "Não tem atletas", "Primeiro ensina algo útil", "Nunca tem marcas"], answer: 2, why: "As campanhas ensinam; os anúncios sobretudo vendem." },
          { objective: "O2", q: "Qual é um objetivo de aprendizagem claro?", options: ["\"Os jogadores do 2.º ciclo vão saber três sinais de concussão e avisar um treinador\"", "\"Estejam atentos\"", "\"Passem a palavra\"", "\"Ficar viral\""], answer: 0, why: "Diz quem aprende o quê e o que vai fazer." },
          { objective: "O2", q: "Porque começar pela sua própria história?", options: ["A lei obriga", "Torna as publicações mais longas", "Esconde a marca", "Torna a campanha real e as pessoas ouvem"], answer: 3, why: "As histórias autênticas criam confiança." },
          { objective: "O3", q: "A IA dá-lhe um facto de saúde. O que faz?", options: ["Publica-o logo", "Confirma-o numa fonte oficial ou de especialistas", "Torna-o mais assustador", "Pergunta a um fã"], answer: 1, why: "A IA pode estar errada; confirme na fonte." },
          { objective: "O3", q: "Não encontra uma fonte para um facto. Você:", options: ["Publica-o na mesma", "Retira-o", "Inventa uma fonte", "Muda os números"], answer: 1, why: "Partilhe só o que consegue confirmar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear e criar parcerias",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planear três publicações com IA",
          minutes: 5,
          goal: "Escrever com IA um plano de campanha de três publicações e revê-lo.",
          text: [
            "Três publicações chegam para uma campanha focada: 1. Porque é importante (a sua história). 2. O que saber ou fazer (a lição principal). 3. Passar à ação (um passo simples, como \"partilhe isto com a sua equipa\" ou \"faça a formação gratuita\").",
            "Peça a um assistente de IA: \"Aqui estão a minha causa, o objetivo de aprendizagem, a minha história e a minha ficha de factos. Planeie três publicações curtas: porque é importante, o que saber, passar à ação. Dê um gancho, os pontos principais e um apelo à ação para cada uma. Use só factos da minha ficha de factos.\"",
            "Reveja para soar como você e volte a verificar cada facto na sua ficha de factos. Mantenha um tom de esperança e prático, não assustador."
          ],
          steps: ["Cole a sua causa, o objetivo, a história e a ficha de factos.", "Peça três publicações: porquê, o quê, ação.", "Verifique cada facto na sua ficha de factos.", "Reveja para soar como você.", "Dê um tom de esperança e prático."],
          words: [["Apelo à ação", "o passo simples que pede às pessoas para fazer."], ["Tom", "o sentimento da sua mensagem, como de esperança ou sério."]],
          slides: [
            { title: "Três publicações", bullets: ["1. Porque é importante: a sua história", "2. O que saber ou fazer", "3. Passar à ação"] },
            { title: "Dê à IA", bullets: ["Causa, objetivo, história", "Só a sua ficha de factos"] },
            { title: "Depois reveja", bullets: ["Os factos são iguais aos da sua ficha", "Soa como você", "Com esperança, não assustador"] }
          ],
          tryIt: "Use a IA para escrever o seu plano de três publicações a partir da sua ficha de factos. Reveja-o e volte a verificar cada facto.",
          youCanNow: "planear com IA uma campanha focada de três publicações e manter os factos certos.",
          quickCheck: [
            { objective: "O4", q: "De que trata a publicação 2 da campanha?", options: ["A sua história", "Os preços do parceiro", "Agradecimentos", "O que saber ou fazer: a lição principal"], answer: 3, why: "As três publicações são porque é importante, o que saber e passar à ação." },
            { objective: "O4", q: "O rascunho da IA acrescenta uma estatística que não está na sua ficha de factos. O que faz?", options: ["Retira-a ou confirma-a primeiro numa fonte oficial", "Mantém-na; soa bem", "Arredonda-a para cima", "Dá a IA como fonte"], answer: 0, why: "Use só factos da sua ficha de factos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Propor uma parceria a uma marca ou organização sem fins lucrativos",
          minutes: 5,
          goal: "Escrever uma proposta curta a uma marca ou organização sem fins lucrativos que combina com a sua causa.",
          text: [
            "Os parceiros podem trazer mais alcance, dinheiro ou recursos. Procure os que já se importam com a sua causa: uma escola de natação para a segurança na água, uma biblioteca ou livraria para a leitura, uma cooperativa de crédito local para a gestão do dinheiro, uma clínica de medicina desportiva para a consciência sobre lesões. As organizações sem fins lucrativos podem aceitar de bom grado uma parceria voluntária.",
            "Uma proposta mostra a sua causa, a sua história, o seu objetivo de aprendizagem, o seu plano de três publicações e o seu público. Peça algo claro: partilhar as publicações, dar materiais ou patrocinar a campanha.",
            "Use a IA para escrever o rascunho e depois torne-o pessoal. Tem menos de 18 anos? Envolva um pai, mãe ou encarregado de educação. Estudantes-atletas: verifiquem as regras NIL da vossa escola e do vosso estado antes de aceitar qualquer pagamento ou produto."
          ],
          steps: ["Faça uma lista de três parceiros que já se importam com a sua causa.", "Escreva o que vai pedir.", "Use a IA para escrever uma proposta com menos de 150 palavras.", "Torne-a pessoal.", "Verifique as regras NIL antes de aceitar pagamentos ou produtos."],
          words: [["Parceiro", "uma marca ou organização sem fins lucrativos que trabalha consigo na campanha."], ["Organização sem fins lucrativos", "uma organização que trabalha por uma causa em vez de procurar lucro."]],
          slides: [
            { title: "Bons parceiros", bullets: ["Já se importam com a sua causa", "Escola de natação, biblioteca, cooperativa de crédito, clínica"] },
            { title: "A sua proposta mostra", bullets: ["Causa, história, objetivo de aprendizagem", "Plano de três publicações e público", "Um pedido claro"] },
            { title: "Antes de dizer sim", bullets: ["Menos de 18 anos: envolva um pai ou mãe", "Verifique as regras NIL da escola e do estado"] }
          ],
          sources: [{ name: "NCAA: Name, Image and Likeness (Nome, Imagem e Semelhança)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Escolha um parceiro e escreva uma proposta com menos de 150 palavras com a ajuda da IA. Peça a um treinador ou a um pai ou mãe para a ler.",
          youCanNow: "propor uma parceria para a sua campanha a uma marca ou organização sem fins lucrativos.",
          quickCheck: [
            { objective: "O5", q: "Que parceiro combina com uma campanha de segurança na água?", options: ["Um vendedor de carros", "Uma escola de natação", "Uma loja de videojogos", "Uma pizzaria"], answer: 1, why: "Procure parceiros que já se importam com a sua causa." },
            { objective: "O5", q: "Um parceiro oferece-lhe equipamento grátis para a sua campanha, e você é estudante-atleta. O que faz primeiro?", options: ["Aceita logo", "Publica sobre isso sem dizer a ninguém", "Verifica as regras NIL da sua escola e do seu estado", "Vende o equipamento"], answer: 2, why: "Verifique as regras NIL antes de aceitar qualquer pagamento ou produto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Divulgação, honestidade e medir o impacto",
          minutes: 5,
          goal: "Divulgar claramente o apoio de uma marca e medir se as pessoas aprenderam.",
          text: [
            "Se uma marca lhe paga ou lhe dá alguma coisa pela campanha, a FTC (a comissão de comércio dos Estados Unidos) diz para o divulgar claramente em cada publicação, perto do início: \"Parceria paga com [marca]\" ou \"Obrigado a [marca] por apoiar esta campanha\". Nos vídeos, diga-o e mostre-o.",
            "Diga só o que acredita e o que a sua ficha de factos apoia. Não deixe um parceiro acrescentar afirmações que não consegue provar, sobretudo afirmações de saúde.",
            "Meça a aprendizagem, não só os gostos: conte as partilhas, os guardados, os comentários com perguntas, as pessoas que fizeram a ação (como inscrever-se numa formação), ou faça uma sondagem de duas perguntas no fim. Partilhe os resultados com o seu parceiro."
          ],
          steps: ["Acrescente uma divulgação clara em cada publicação patrocinada.", "Verifique cada afirmação na sua ficha de factos.", "Escolha duas medidas de impacto.", "Faça uma sondagem curta depois da publicação 3.", "Envie os resultados ao seu parceiro."],
          words: [["Divulgação", "uma frase clara a dizer que uma marca lhe pagou ou o apoiou."], ["Impacto", "a mudança real que a sua campanha fez, como pessoas que aprenderam ou agiram."]],
          slides: [
            { title: "Divulgue claramente", bullets: ["Em cada publicação patrocinada, perto do início", "\"Parceria paga com [marca]\"", "Vídeo: diga-o e mostre-o"] },
            { title: "Seja honesto", bullets: ["Só afirmações que a sua ficha de factos apoia", "Nenhuma afirmação de saúde sem provas"] },
            { title: "Meça a aprendizagem", bullets: ["Partilhas, guardados, perguntas", "Pessoas que fizeram a ação", "Uma sondagem de duas perguntas"] }
          ],
          sources: [{ name: "FTC: Disclosures 101 for Social Media Influencers (divulgação para influenciadores)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Tarefa final: junte o seu plano de campanha com o objetivo de aprendizagem, as três publicações, a ficha de factos, o apelo à ação, a proposta ao parceiro, o texto da divulgação e a pessoa com quem verificou as regras NIL.",
          youCanNow: "fazer uma campanha educativa honesta, com divulgação clara, e medir o seu impacto.",
          quickCheck: [
            { objective: "O6", q: "Onde deve ficar a divulgação numa publicação patrocinada da campanha?", options: ["Perto do início de cada publicação", "Só na última publicação", "Só na sua biografia", "No fim de muitas hashtags"], answer: 0, why: "A FTC diz para divulgar claramente em cada publicação, perto do início." },
            { objective: "O6", q: "A sua campanha teve muitos gostos. Como sabe se as pessoas aprenderam?", options: ["Os gostos provam-no", "Pergunta à marca", "Conta os seguidores", "Faz uma sondagem curta e conta as pessoas que fizeram a ação"], answer: 3, why: "Meça a aprendizagem, não só os gostos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear e criar parcerias",
        questions: [
          { objective: "O4", q: "De que trata a publicação 1 da campanha?", options: ["Comprar o produto", "As suas estatísticas", "Um sorteio de prémios", "Porque é importante: a sua história"], answer: 3, why: "A sua história faz as pessoas importarem-se." },
          { objective: "O5", q: "Que parceiro combina com uma campanha de leitura?", options: ["Uma biblioteca ou livraria local", "Uma aplicação de apostas", "Uma bebida energética", "Um vendedor de carros"], answer: 0, why: "Já se importam com a leitura." },
          { objective: "O6", q: "Uma marca apoia a sua campanha com dinheiro. Cada publicação deve incluir:", options: ["Nada", "Uma hashtag escondida", "Uma divulgação clara perto do início", "Um nome falso"], answer: 2, why: "A FTC exige uma divulgação clara." },
          { objective: "O6", q: "Um parceiro quer que diga que a bebida dele evita concussões. Você:", options: ["Diz", "Diz baixinho", "Diz sem divulgação", "Recusa; é uma afirmação de saúde sem provas"], answer: 3, why: "Não faça afirmações que não consegue provar." },
          { objective: "O6", q: "O que mede melhor a aprendizagem?", options: ["Só os gostos", "As pessoas que fizeram a ação e os resultados da sondagem", "O seu número de seguidores", "O número de emojis"], answer: 1, why: "O impacto tem a ver com aprendizagem e ação." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Campanhas Educativas com Marcas",
    questions: [
      { objective: "O1", q: "Uma campanha educativa sobretudo:", options: ["Vende sapatilhas", "Mostra os melhores momentos", "Ensina algo útil", "Mostra estatísticas"], answer: 2, why: "Ensinar é o objetivo principal." },
      { objective: "O1", q: "Porque é que as marcas usam atletas nas campanhas?", options: ["Os jovens e as famílias confiam nos atletas", "Os atletas trabalham de graça", "É obrigatório", "Os atletas são médicos"], answer: 0, why: "A confiança faz a mensagem chegar." },
      { objective: "O1", q: "Qual é um exemplo de tema de campanha?", options: ["Segurança na água", "Mexericos sobre rivais", "Dicas de apostas", "Dietas falsas"], answer: 0, why: "É útil e seguro de ensinar." },
      { objective: "O2", q: "Quantos objetivos de aprendizagem deve ter uma campanha?", options: ["Dez", "Nenhum", "Um", "O maior número possível"], answer: 2, why: "Um objetivo mantém a campanha focada." },
      { objective: "O2", q: "As causas mais fortes vêm:", options: ["Do que está na moda", "Da sua vida real", "De uma lista ao acaso", "De um concorrente"], answer: 1, why: "As histórias reais são autênticas." },
      { objective: "O2", q: "Autêntico quer dizer:", options: ["Caro", "Viral", "Longo", "Real e fiel a você"], answer: 3, why: "A autenticidade cria confiança." },
      { objective: "O3", q: "Qual é uma fonte oficial sobre concussões?", options: ["Uma página de memes", "Um anúncio", "CDC HEADS UP", "Uma secção de comentários"], answer: 2, why: "Vem de um serviço de saúde do governo." },
      { objective: "O3", q: "Uma ficha de factos inclui:", options: ["A sua palavra-passe", "Só opiniões", "Estatísticas dos rivais", "Cada facto, a sua fonte e a data da verificação"], answer: 3, why: "Prova os seus factos." },
      { objective: "O3", q: "Para conselhos pessoais, a sua campanha deve:", options: ["Encaminhar as pessoas para profissionais", "Fazer diagnósticos", "Dar doses", "Ignorar"], answer: 0, why: "Você ensina consciência geral; os profissionais aconselham." },
      { objective: "O4", q: "A publicação 3 da campanha é:", options: ["Uma selfie qualquer", "Passar à ação", "Uma queixa", "Um sorteio de prémios"], answer: 1, why: "A ação transforma a aprendizagem em mudança." },
      { objective: "O4", q: "Quando pede publicações à IA, diga-lhe para:", options: ["Inventar estatísticas", "Acrescentar histórias assustadoras", "Usar só factos da sua ficha de factos", "Copiar outros atletas"], answer: 2, why: "Isto mantém os factos certos." },
      { objective: "O4", q: "O melhor tom para temas de segurança é:", options: ["De esperança e prático", "Assustador", "Zangado", "A brincar com as lesões"], answer: 0, why: "As pessoas agem com mensagens práticas e de esperança." },
      { objective: "O5", q: "Uma cooperativa de crédito é um bom parceiro para:", options: ["Consciência sobre concussões", "Natação", "Leitura", "Gestão do dinheiro"], answer: 3, why: "Já se importa com a literacia financeira." },
      { objective: "O5", q: "Uma proposta deve incluir:", options: ["Só um preço", "A sua causa, história, objetivo, plano, público e um pedido claro", "Só as suas estatísticas", "Uma exigência"], answer: 1, why: "Os parceiros precisam de ver o quadro completo." },
      { objective: "O5", q: "Antes de aceitar os produtos de um parceiro, um estudante-atleta deve:", options: ["Publicar logo", "Verificar as regras NIL da escola e do estado", "Esconder", "Perguntar a um rival"], answer: 1, why: "As regras NIL variam." },
      { objective: "O5", q: "Se tem menos de 18 anos e propõe uma parceria:", options: ["Usa uma idade falsa", "Esconde", "Não faz a proposta", "Envolve um pai, mãe ou encarregado de educação"], answer: 3, why: "Os adultos ajudam a proteger os menores." },
      { objective: "O6", q: "Que divulgação é clara?", options: ["\"Parceria paga com [marca]\" perto do início", "\"#sp\" no fim", "Nada", "Só na sua biografia"], answer: 0, why: "É clara e difícil de não ver." },
      { objective: "O6", q: "Num vídeo patrocinado, a divulgação deve ser:", options: ["Só na descrição", "Num comentário", "Dita e mostrada", "Deixada de fora"], answer: 2, why: "A divulgação de um vídeo vai dentro do vídeo." },
      { objective: "O6", q: "Impacto quer dizer:", options: ["O seu número de seguidores", "Só os gostos", "A duração do vídeo", "A mudança real que a sua campanha fez"], answer: 3, why: "Impacto é aprendizagem e ação." },
      { objective: "O6", q: "Depois da campanha, você deve:", options: ["Apagar tudo", "Partilhar os resultados com o seu parceiro", "Esconder os números", "Pedir mais dinheiro sem resultados"], answer: 1, why: "Mostrar os resultados cria parcerias duradouras." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      6,
      9,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Causa e objetivo de aprendizagem",
        objective: "O2",
        notYet: "Não há um objetivo claro, ou a causa não combina com o público.",
        meets: "Uma causa ligada à sua história e um objetivo de aprendizagem que diz quem vai saber ou fazer o quê.",
        exceeds: "O objetivo pode ser medido e corresponde às medidas de impacto escolhidas."
      },
      {
        name: "Ficha de factos",
        objective: "O3",
        notYet: "Factos sem fontes, ou ficaram factos que não foi possível confirmar.",
        meets: "Cada facto tem o link de uma fonte oficial ou de especialistas e a data da verificação.",
        exceeds: "Um especialista, como um fisioterapeuta desportivo ou um professor, reviu os factos."
      },
      {
        name: "Plano de três publicações",
        objective: "O4",
        notYet: "Menos de três publicações, ou publicações sem gancho ou sem apelo à ação.",
        meets: "Publicações do porquê, do quê e da ação, cada uma com gancho, pontos principais e apelo à ação, só com factos da ficha.",
        exceeds: "O tom é de esperança e prático, e cada publicação encaminha para um profissional ou um recurso gratuito."
      },
      {
        name: "Proposta ao parceiro",
        objective: "O5",
        notYet: "Não há um pedido claro, ou o parceiro não combina com a causa.",
        meets: "Menos de 150 palavras a um parceiro adequado, com causa, história, objetivo, plano, público e um pedido claro.",
        exceeds: "Pessoal, com uma razão verdadeira para escolher esse parceiro e um pai ou mãe envolvido quando é preciso."
      },
      {
        name: "Divulgação e regras",
        objective: "O6",
        notYet: "Não há plano de divulgação, ou as regras NIL não foram verificadas.",
        meets: "Uma divulgação clara para cada publicação e a pessoa da escola ou do estado que confirmou as regras NIL.",
        exceeds: "Também indica duas medidas de impacto e como os resultados vão ser partilhados com o parceiro."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o plano de campanha e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que fazem a sua campanha de três publicações em 30 dias (inquérito de seguimento)",
      "Pessoas que fizeram a ação da campanha, como inscrever-se numa formação, ou resultados de sondagens que mostram aprendizagem",
      "Parcerias criadas com uma marca ou organização sem fins lucrativos, e parceiros que aceitam uma segunda campanha"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com redes sociais",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Acesso a fontes oficiais sobre a sua causa, como as páginas CDC HEADS UP",
      "As regras NIL da sua escola ou da associação desportiva do seu estado",
      "Cerca de 60 minutos"
    ],
    facilitatorNotes: [
      "Ajude os alunos a escolher causas que podem ensinar com segurança; as campanhas de saúde e de saúde mental devem encaminhar para profissionais, sem dar conselhos pessoais.",
      "Peça a um especialista local, como um fisioterapeuta desportivo, um bibliotecário ou um conselheiro financeiro, para rever as fichas de factos.",
      "Envolva os pais ou encarregados de educação dos atletas com menos de 18 anos antes de contactarem parceiros.",
      "Envie as perguntas sobre NIL ao gabinete de conformidade ou à associação do estado antes de aceitar qualquer pagamento ou produto.",
      "Verifique que cada publicação patrocinada tem uma divulgação clara e nenhuma afirmação além da ficha de factos."
    ]
  }
};
