"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-marketing-content.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-marketing-content-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-marketing-content",
  category: "Entrepreneurs",
  name: "Marketing e Criação de Conteúdos com IA",
  skills: "Descrever o seu cliente ideal, Escrever uma oferta clara, Planear um mês de conteúdos, Criar publicações e imagens com IA, Escrever um email de marketing que cumpre as regras",
  outcome: "descrever o seu cliente ideal, escrever uma oferta clara e usar a IA para planear e criar um mês de publicações nas redes sociais e um email de marketing, honestos e de acordo com as regras de publicidade e de email dos Estados Unidos.",
  about: [
    "Este curso é para donos de negócios que sabem que deviam fazer marketing, mas não têm tempo, dinheiro para uma agência ou ideias. A IA pode ajudar nas três coisas, se você lhe der a direção certa.",
    "Você vai descrever o cliente que quer, escrever uma oferta que fale com ele, planear um mês de conteúdos, criar publicações e imagens com ferramentas gratuitas como o ChatGPT, o Copilot, o Gemini e o Canva, e escrever um email de marketing. Também vai aprender as regras básicas dos EUA: os anúncios têm de ser verdadeiros, as recomendações pagas têm de ser declaradas, as avaliações falsas são proibidas e os emails de marketing têm de cumprir a lei CAN-SPAM.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa para o seu próprio negócio. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso explica as regras com palavras simples; não é aconselhamento jurídico."
  ],
  finalTask: "Crie um pacote de marketing de um mês para o seu negócio: um perfil do cliente ideal num parágrafo, uma oferta numa frase, um calendário de conteúdos com 12 publicações, três publicações prontas com imagens e um email de marketing com um assunto honesto, a sua morada física e uma linha para cancelar a subscrição que funcione.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios nos EUA que sabem que deviam fazer marketing, mas têm pouco tempo, nenhum orçamento para uma agência e poucas ideias, como pasteleiros, serviços de limpeza, salões de beleza, profissionais de ofícios e vendedores pela internet.",
    startingPoint: "Publicam nas redes sociais de vez em quando e podem ter uma lista de emails de clientes. Poucos têm um perfil de cliente escrito, uma oferta ou um plano de conteúdos, e muitos não conhecem o básico da FTC e da lei CAN-SPAM.",
    gap: "Publicações ao acaso chegam às pessoas erradas, e a IA pode facilmente criar afirmações falsas, resultados que parecem falsos ou emails que violam as regras dos EUA. Os donos precisam de apontar o marketing a um cliente real, planear um mês de conteúdos honestos e enviar emails que cumprem as regras, para que o marketing traga negócio sem problemas legais nem de confiança.",
    constraints: [
      "Palavras simples; regras explicadas de forma simples e não como aconselhamento jurídico",
      "Aparelhos: um telefone ou computador com um assistente de IA gratuito e o Canva",
      "Tempo: cerca de cinco minutos por lição, mais o tempo para criar publicações para o próprio negócio",
      "Os anúncios têm de ser verdadeiros, as recomendações pagas declaradas, as avaliações falsas são proibidas e os emails têm de cumprir a CAN-SPAM",
      "Histórias e fotos de clientes só são usadas com autorização"
    ],
    prerequisites: "\"Introdução à IA para Empreendedores\". \"Ferramentas de IA que Todo o Empreendedor Deve Conhecer\" ajuda com o Canva."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a IA e pelo menos uma conversa real com um cliente ou um registo de vendas", action: "escrever um perfil do seu cliente ideal num parágrafo", standard: "com cada suposição confirmada com pessoas reais" },
    { id: "O2", condition: "Com o seu perfil de cliente", action: "escrever uma oferta numa frase que diga para quem é, o que a pessoa recebe e porque é importante", standard: "com cada afirmação verdadeira e possível de provar" },
    { id: "O3", condition: "Com a sua oferta", action: "criar com a IA um calendário de conteúdos com 12 publicações para um mês", standard: "com uma mistura de tipos de publicação em uma ou duas plataformas que os seus clientes usam, guardado com datas" },
    { id: "O4", condition: "Com três ideias do calendário", action: "criar publicações prontas com legendas da IA revistas e imagens do Canva", standard: "usando fotos reais sempre que possível e nunca fingindo resultados" },
    { id: "O5", condition: "Quando pede avaliações ou trabalha com promotores pagos", action: "escrever um pedido de avaliação e declarações que cumprem as regras da FTC", standard: "pedindo a todos os clientes, sem oferecer prémio por boas notas e declarando cada ligação paga" },
    { id: "O6", condition: "Usando a IA para escrever o rascunho de um email de marketing", action: "verificar o email com o básico da lei CAN-SPAM", standard: "com um assunto honesto, a sua morada física e uma linha para cancelar a subscrição que funcione" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Saiba com quem está a falar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Descrever o seu cliente ideal",
          minutes: 5,
          goal: "Escrever num parágrafo o perfil do cliente que mais quer.",
          text: [
            "Fazer marketing para \"toda a gente\" não chega a ninguém. O seu cliente ideal é a pessoa que precisa do que você vende, pode pagar e é fácil de alcançar. O cliente ideal de uma pastelaria caseira pode ser \"pais ocupados a menos de 10 milhas que encomendam bolos de aniversário duas a quatro vezes por ano\".",
            "A IA pode ajudar você a pensar nisso. Diga-lhe o que vende e quem compra agora, e depois peça: \"Ajude-me a descrever o meu cliente ideal: a sua situação, o seu maior problema, o que o preocupa antes de comprar e onde passa tempo na internet.\"",
            "A IA está a adivinhar a partir de padrões gerais. Confirme as suposições com clientes reais: veja quem já comprou de você, leia as mensagens deles e pergunte a três clientes porque o escolheram."
          ],
          steps: ["Escreva o que vende e quem já comprou de você até agora.", "Peça à IA para ajudar a descrever a situação, o problema, as preocupações do cliente ideal e onde ele passa tempo.", "Confirme as suposições com três clientes reais ou com os seus registos de vendas.", "Escreva um perfil num parágrafo."],
          words: [["Cliente ideal", "a pessoa que mais precisa do que você vende, pode pagar e é fácil de alcançar."], ["Perfil", "uma descrição curta de um tipo de cliente."]],
          slides: [
            { title: "\"Toda a gente\" não é um cliente", bullets: ["Precisa do que você vende", "Pode pagar", "É fácil de alcançar"] },
            { title: "Peça à IA para ajudar a descrever", bullets: ["A situação e o maior problema", "O que o preocupa antes de comprar", "Onde passa tempo na internet"] },
            { title: "Confirme com pessoas reais", bullets: ["Veja quem já comprou", "Pergunte a três clientes porque o escolheram", "Depois escreva o seu perfil"] }
          ],
          tryIt: "Use um assistente de IA para escrever o rascunho do perfil do seu cliente ideal e depois confirme-o com pelo menos uma conversa real com um cliente ou com os seus registos de vendas. Guarde o parágrafo final.",
          youCanNow: "descrever o cliente a quem o seu marketing se dirige, confirmado com pessoas reais.",
          quickCheck: [
            { objective: "O1", q: "O que é um perfil do cliente ideal?", options: ["Uma descrição curta do cliente que mais quer alcançar", "Uma lista de todas as pessoas da sua cidade", "A lista de clientes do seu concorrente", "Os contactos privados de um cliente"], answer: 0, why: "Um perfil descreve a pessoa a quem o seu marketing se dirige." },
            { objective: "O1", q: "A IA diz que os seus clientes usam sobretudo uma aplicação, mas os seus registos de vendas mostram outra coisa. O que faz?", options: ["Confia na IA", "Segue o que os seus registos reais mostram", "Usa todas as aplicações", "Para de fazer marketing"], answer: 1, why: "Clientes e registos reais valem mais do que as suposições da IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever uma oferta clara e honesta",
          minutes: 5,
          goal: "Escrever uma oferta numa frase que diga para quem é, o que a pessoa recebe e porque é importante.",
          text: [
            "Uma oferta responde depressa a três perguntas: Para quem é? O que a pessoa recebe? Porque é que ela se deve importar? Exemplo: \"Pais ocupados em Decatur: bolos de aniversário personalizados entregues à sua porta, para a festa ser uma preocupação a menos.\"",
            "Dê à IA o seu perfil de cliente e peça: \"Escreva cinco ofertas de uma frase para este cliente. Palavras simples, sem exageros.\" Escolha a melhor e reveja-a com a sua própria voz.",
            "Seja honesto. Nos EUA, a FTC (a Comissão Federal de Comércio) diz que os anúncios têm de ser verdadeiros, não podem enganar e têm de ter provas. Não diga \"o melhor da cidade\", \"resultados garantidos\" ou \"com IA\" a não ser que seja verdade e consiga provar."
          ],
          steps: ["Cole o seu perfil de cliente num assistente de IA.", "Peça cinco ofertas de uma frase com palavras simples.", "Escolha uma e reveja-a para soar como você.", "Tire qualquer afirmação que não consiga provar."],
          words: [["Oferta", "o que você vende, para quem é e porque é importante, dito de forma simples."], ["Afirmação", "algo que o seu anúncio diz que é verdade."]],
          slides: [
            { title: "Uma oferta responde a três perguntas", bullets: ["Para quem é?", "O que a pessoa recebe?", "Porque se deve importar?"] },
            { title: "Deixe a IA dar opções", bullets: ["Cole o seu perfil de cliente", "Peça cinco ofertas de uma frase", "Escolha uma e reveja-a com a sua voz"] },
            { title: "Seja honesto", bullets: ["FTC: os anúncios têm de ser verdadeiros e não enganar", "As afirmações precisam de provas", "Nada de \"garantido\" ou \"o melhor\" que não consiga provar"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Peça à IA cinco ofertas com base no seu perfil de cliente, escolha uma, reveja-a e confirme que cada afirmação nela é verdadeira e possível de provar.",
          youCanNow: "escrever uma oferta curta e honesta que fale com o seu cliente ideal.",
          quickCheck: [
            { objective: "O2", q: "Como tem de ser cada afirmação da sua oferta?", options: ["O maior possível", "Copiada de um concorrente", "Verdadeira e possível de provar", "Escrita só pela IA"], answer: 2, why: "As regras da FTC exigem afirmações verdadeiras e com provas." },
            { objective: "O2", q: "A IA escreve \"o serviço mais rápido da cidade\", mas você não tem provas. O que faz?", options: ["Deixa ficar", "Acrescenta um ponto de exclamação", "Põe em letra pequena", "Tira-a ou troca-a por algo que consiga provar"], answer: 3, why: "Afirmações que não consegue provar não devem estar na sua oferta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear um mês de conteúdos",
          minutes: 5,
          goal: "Usar a IA para criar um calendário de conteúdos com 12 publicações para um mês.",
          text: [
            "Publicar três vezes por semana durante um mês dá 12 publicações. Uma mistura simples mantém o interesse: ensine algo útil, mostre o seu trabalho ou a sua equipa, partilhe a história de um cliente (com autorização) e apresente a sua oferta.",
            "Peça à IA: \"Faça um calendário de conteúdos com 12 publicações para [negócio] para [cliente]. Mistura: 4 dicas úteis, 3 bastidores, 2 histórias de clientes, 3 publicações com a oferta. Dê a cada uma uma data, uma ideia numa linha e a plataforma.\"",
            "Escolha plataformas onde o seu cliente já passa tempo (do seu perfil). É melhor publicar bem em uma ou duas plataformas do que mal em cinco."
          ],
          steps: ["Escolha uma ou duas plataformas onde o seu cliente passa tempo.", "Peça à IA um calendário de 12 publicações com uma mistura de tipos.", "Reveja as ideias que não servem para o seu negócio.", "Ponha o calendário numa folha de cálculo ou num documento, com datas."],
          words: [["Calendário de conteúdos", "um plano que mostra o que vai publicar e quando."], ["Plataforma", "um site ou aplicação de redes sociais, como o Facebook, o Instagram, o TikTok ou o LinkedIn."]],
          slides: [
            { title: "12 publicações = 3 por semana durante um mês", bullets: ["Dicas úteis", "Bastidores", "Histórias de clientes (com autorização)", "A sua oferta"] },
            { title: "Peça o calendário à IA", bullets: ["Negócio + cliente + mistura de tipos de publicação", "Data, ideia numa linha e plataforma para cada uma"] },
            { title: "Escolha as suas plataformas", bullets: ["Onde o seu cliente já está", "Uma ou duas bem feitas valem mais do que cinco mal feitas"] }
          ],
          tryIt: "Peça à IA para criar o seu calendário de 12 publicações, reveja-o para servir o seu negócio e guarde-o com datas numa folha de cálculo ou num documento.",
          youCanNow: "planear um mês de conteúdos variados para as plataformas que os seus clientes usam.",
          quickCheck: [
            { objective: "O3", q: "O que inclui uma boa mistura de conteúdos?", options: ["Dicas, bastidores, histórias de clientes e ofertas", "Só ofertas de venda", "Só memes", "A mesma publicação todos os dias"], answer: 0, why: "Uma mistura mantém as pessoas interessadas e cria confiança." },
            { objective: "O3", q: "Os seus clientes estão sobretudo numa plataforma. Onde publica?", options: ["Em todas as plataformas ao mesmo tempo", "Começa onde os seus clientes já estão", "Só numa plataforma nova", "Em lado nenhum até ter mais tempo"], answer: 1, why: "Uma ou duas plataformas onde os clientes já estão chegam para começar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Saiba com quem está a falar",
        questions: [
          { objective: "O1", q: "Qual é a melhor descrição de cliente ideal para uma pastelaria caseira?", options: ["Toda a gente que come", "Pais ocupados a menos de 10 milhas que encomendam bolos de aniversário algumas vezes por ano", "Pessoas na internet", "Outras pastelarias"], answer: 1, why: "Diz uma pessoa, uma necessidade e um alcance concretos." },
          { objective: "O1", q: "A IA adivinhou o que preocupa os seus clientes. O que deve fazer?", options: ["Ignorar os seus clientes", "Confiar totalmente", "Publicar como se fosse um facto", "Confirmar com clientes reais ou registos de vendas"], answer: 3, why: "A IA adivinha a partir de padrões gerais; os clientes reais confirmam." },
          { objective: "O2", q: "Uma oferta deve responder a que três perguntas?", options: ["Para quem é, o que a pessoa recebe, porque se deve importar", "Que idade tem, onde mora, qual é a sua palavra-passe", "Como está o tempo, que horas são, que dia é", "Quem são os seus concorrentes, quanto cobram, onde estão"], answer: 0, why: "Essas três tornam uma oferta clara." },
          { objective: "O2", q: "A IA escreveu \"Resultados garantidos ou devolvemos o seu dinheiro\" na sua oferta, mas você não faz reembolsos. O que faz?", options: ["Põe maior", "Deixa ficar porque soa bem", "Tira", "Acrescenta também \"com IA\""], answer: 2, why: "Os anúncios têm de ser verdadeiros; tire as promessas que não consegue cumprir." },
          { objective: "O3", q: "Com quantas plataformas deve começar um pequeno negócio?", options: ["Nenhuma", "Todas as que existem", "Uma ou duas onde os seus clientes já estão", "Só as que os concorrentes evitam"], answer: 2, why: "Fazer bem uma ou duas vale mais do que espalhar-se demais." }
        ]
      }
    },
    {
      name: "Capítulo 2: Criar, publicar e cumprir as regras",
      lessons: [
        {
          objectives: ["O4"],
          title: "Criar publicações e imagens com IA",
          minutes: 5,
          goal: "Transformar ideias do calendário em publicações prontas, com legendas e imagens.",
          text: [
            "Para cada publicação, peça uma legenda a um assistente de conversa: \"Escreva uma legenda para o Instagram para esta ideia: [ideia]. Para [cliente]. Simpática, com menos de 80 palavras, uma pergunta para convidar comentários e um apelo à ação.\" Peça duas ou três versões e escolha uma.",
            "Crie a imagem no Canva a partir de um modelo, com as cores da sua marca. Use as suas próprias fotos sempre que puder; fotos reais do seu trabalho criam confiança. Se usar uma imagem feita por IA, verifique se tem erros e nunca a faça parecer um cliente real ou um resultado real que não entregou.",
            "Segundo as orientações do Copyright Office dos EUA (o serviço de direitos de autor), o material feito só pela IA não é protegido por direitos de autor, mas as suas próprias escolhas criativas e alterações podem ser. Se for importante ser dono do seu logótipo ou da arte principal da marca, envolva um designer humano e fale com um advogado."
          ],
          steps: ["Escolha uma publicação do seu calendário.", "Peça à IA duas ou três versões da legenda e escolha uma.", "Crie a imagem no Canva a partir de um modelo, com uma foto sua se puder.", "Verifique a ortografia, os factos e as imagens.", "Guarde a publicação pronta para publicar."],
          words: [["Legenda", "o texto que acompanha uma publicação nas redes sociais."], ["Direitos de autor", "o direito legal de controlar as cópias de uma obra criativa (em inglês, \"copyright\")."]],
          slides: [
            { title: "Legenda com IA", bullets: ["Dê a ideia e o cliente", "Peça 2-3 versões curtas", "Inclua uma pergunta e um apelo à ação"] },
            { title: "Imagem no Canva", bullets: ["Comece a partir de um modelo", "As cores da sua marca", "As suas próprias fotos criam confiança"] },
            { title: "Imagens de IA: cuidado", bullets: ["Verifique se tem erros", "Nunca finja um cliente ou um resultado"] },
            { title: "Direitos de autor e IA", bullets: ["Material feito só pela IA não é protegido", "As suas alterações criativas podem ser", "Para logótipos, envolva um designer e um advogado"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Part 2 Copyrightability report announcement", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Transforme três ideias do seu calendário em publicações prontas: uma legenda feita com ajuda da IA e revista por você, e uma imagem do Canva com uma foto sua sempre que possível.",
          youCanNow: "criar publicações prontas para as redes sociais com legendas e imagens da IA, sem fingir resultados.",
          quickCheck: [
            { objective: "O4", q: "O que faz um bom pedido de legenda à IA?", options: ["Só \"escreva uma legenda\"", "A sua palavra-passe", "A ideia, o cliente, o tamanho e um apelo à ação", "A legenda de um concorrente para copiar"], answer: 2, why: "Uma direção concreta dá uma legenda que pode usar." },
            { objective: "O4", q: "A IA cria uma foto perfeita de antes e depois de uma cozinha que você não limpou. O que faz?", options: ["Publica como trabalho seu", "Publica sem legenda", "Altera um pouco e publica", "Não a usa; usa uma foto real do seu trabalho"], answer: 3, why: "As imagens não podem sugerir resultados que você não entregou." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Avaliações, testemunhos e recomendações: as regras",
          minutes: 5,
          goal: "Usar avaliações e promoções pagas de uma forma que cumpre as regras da FTC.",
          text: [
            "Avaliações reais de clientes são um marketing forte. As falsas são ilegais. A regra da FTC sobre avaliações falsas proíbe criar, comprar ou vender avaliações e testemunhos falsos, incluindo avaliações feitas por IA que fingem vir de pessoas que não existem. Também proíbe oferecer um prémio só por avaliações positivas.",
            "Você PODE pedir a clientes satisfeitos e insatisfeitos que deixem uma avaliação honesta, e pode partilhar avaliações reais com autorização. Não use a IA para escrever avaliações e não altere uma avaliação para mudar o seu sentido.",
            "Se pagar ou der produtos grátis a alguém para promover o seu negócio, essa ligação tem de ser declarada com clareza, como \"#ad\" (anúncio) ou \"Sponsored\" (patrocinado) no início da publicação, e no próprio vídeo, no caso de vídeos. Você é responsável pelo que os seus promotores dizem por você."
          ],
          steps: ["Peça avaliações honestas a todos os clientes, não só aos satisfeitos.", "Partilhe avaliações reais só com autorização e sem mudar o seu sentido.", "Nunca use a IA para escrever avaliações.", "Exija que quem você paga ou presenteia o declare com clareza, como \"#ad\" no início."],
          words: [["Testemunho", "o que um cliente diz sobre o seu negócio, usado no marketing."], ["Recomendação", "uma mensagem que as pessoas vão achar que mostra a opinião sincera de outra pessoa, como a publicação de um influenciador."], ["Declarar", "dizer às pessoas com clareza."]],
          slides: [
            { title: "Avaliações falsas são proibidas", bullets: ["Não comprar, vender nem escrever avaliações falsas", "Inclui avaliações falsas feitas por IA", "Nenhum prémio só por avaliações positivas"] },
            { title: "O que você pode fazer", bullets: ["Pedir a cada cliente uma avaliação honesta", "Partilhar avaliações reais com autorização", "Não mudar o sentido de uma avaliação"] },
            { title: "Promoção paga ou oferecida", bullets: ["Tem de ser declarada com clareza", "\"#ad\" ou \"Sponsored\" no início", "No próprio vídeo, no caso de vídeos"] }
          ],
          sources: [{ name: "FTC: Final rule banning fake reviews and testimonials (press release)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }, { name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Use a IA para escrever o rascunho de uma mensagem curta e honesta a pedir uma avaliação aos clientes recentes (não só aos satisfeitos, e sem prémio por uma boa nota). Reveja-a e guarde-a.",
          youCanNow: "recolher e usar avaliações e promoções pagas da forma honesta e legal.",
          quickCheck: [
            { objective: "O5", q: "Que pedido de avaliação cumpre as regras da FTC?", options: ["Pedir a todos os clientes recentes uma avaliação honesta", "Oferecer um desconto só por avaliações de cinco estrelas", "Escrever você mesmo as avaliações", "Pedir só aos clientes satisfeitos"], answer: 0, why: "Pedir avaliações honestas a todos, sem prémio por boas notas, é permitido." },
            { objective: "O5", q: "Um amigo recebe produtos grátis para publicar sobre a sua loja. O que lhe pede?", options: ["Que esconda que recebeu alguma coisa", "Que o declare com clareza, como \"#ad\" no início", "Que publique só nos comentários", "Que use um nome falso"], answer: 1, why: "Ligações pagas ou com ofertas têm de ser declaradas com clareza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever um email de marketing que cumpre a CAN-SPAM",
          minutes: 5,
          goal: "Escrever com a IA um email de marketing que cumpre o básico da CAN-SPAM.",
          text: [
            "O email chega a pessoas que já conhecem você. Peça à IA: \"Escreva um email de marketing curto para antigos clientes de [negócio] sobre [oferta]. Simpático, com menos de 150 palavras, um apelo à ação claro e três opções de assunto honestas.\"",
            "Nos EUA, a lei CAN-SPAM aplica-se aos emails comerciais. O guia da FTC lista o básico: informação correta no campo \"De\", um assunto que não engana, deixar claro que é um anúncio, a sua morada postal física válida e uma forma clara de deixar de receber. Tem de atender os pedidos para deixar de receber em 10 dias úteis. As multas podem ser grandes por cada email, por isso veja a página da FTC.",
            "Envie emails só a pessoas que lhe deram o endereço e aceitaram receber notícias suas, e use um serviço de email que trate os cancelamentos de subscrição por você. Outros países têm as suas próprias regras; verifique-as se enviar emails a clientes no estrangeiro."
          ],
          steps: ["Peça à IA o email e três assuntos honestos.", "Verifique cada facto e cada afirmação.", "Confirme que mostra o nome do seu negócio, a sua morada física e um link para cancelar a subscrição.", "Envie só a pessoas que aceitaram receber notícias suas.", "Atenda os pedidos para deixar de receber em 10 dias úteis."],
          words: [["Lei CAN-SPAM", "a lei dos EUA com regras para os emails comerciais (de marketing)."], ["Deixar de receber", "pedir para parar de receber mensagens; cancelar a subscrição."]],
          slides: [
            { title: "Escreva-o com a IA", bullets: ["Curto, simpático, um apelo à ação", "Três assuntos honestos para escolher"] },
            { title: "O básico da CAN-SPAM (FTC)", bullets: ["Campo \"De\" correto, assunto honesto", "Deixar claro que é um anúncio", "A sua morada postal física", "Uma forma clara de deixar de receber"] },
            { title: "Pedidos para deixar de receber", bullets: ["Atenda-os em 10 dias úteis", "Use um serviço de email que trate os cancelamentos"] },
            { title: "Só para quem aceitou", bullets: ["Antigos clientes e pessoas que se inscreveram", "Outros países têm as suas próprias regras"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Tarefa final: escreva o seu email de marketing com a IA, verifique-o com o básico da CAN-SPAM (assunto honesto, anúncio identificado, morada, cancelar a subscrição) e junte-o ao seu perfil, oferta, calendário e três publicações, formando o seu pacote de marketing de um mês.",
          youCanNow: "planear, criar e enviar marketing honesto que cumpre as regras de publicidade e de email dos EUA.",
          quickCheck: [
            { objective: "O6", q: "O que tem de incluir um email de marketing segundo a CAN-SPAM?", options: ["Um cupão", "Uma foto", "Uma morada postal física válida", "O telefone da sua casa"], answer: 2, why: "A CAN-SPAM exige uma morada postal física válida." },
            { objective: "O6", q: "Comprou uma lista de endereços de email a um desconhecido. O que faz?", options: ["Envia email a todos", "Envia a metade deles", "Junta-os à sua newsletter sem dizer nada", "Não a usa; envia só a pessoas que aceitaram"], answer: 3, why: "Envie emails de marketing a pessoas que lhe deram o endereço e aceitaram." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Criar, publicar e cumprir as regras",
        questions: [
          { objective: "O4", q: "Que foto cria mais confiança numa publicação?", options: ["Uma foto real do seu próprio trabalho", "Uma imagem de IA de um cliente feliz falso", "A foto de um concorrente", "Uma imagem de banco de imagens desfocada"], answer: 0, why: "Fotos reais de trabalho real criam confiança; clientes falsos enganam." },
          { objective: "O4", q: "Segundo o Copyright Office dos EUA, o material feito só pela IA:", options: ["É automaticamente uma marca registada", "É sempre seu", "Pertence ao seu cliente", "Não é protegido por direitos de autor"], answer: 3, why: "Os direitos de autor protegem a criação humana; as suas alterações criativas podem ser protegidas." },
          { objective: "O5", q: "Pode usar a IA para escrever avaliações de clientes para o seu negócio?", options: ["Sim, se parecerem reais", "Não, as avaliações falsas são proibidas pela FTC", "Sim, se as publicar devagar", "Só aos fins de semana"], answer: 1, why: "A regra da FTC proíbe avaliações falsas, incluindo as feitas por IA." },
          { objective: "O5", q: "Deu produtos grátis a um influenciador para publicar sobre você. O que tem de acontecer?", options: ["A ligação tem de ser declarada com clareza, como \"#ad\" no início", "Nada", "Esconder nos comentários", "Pôr no fim de uma legenda longa"], answer: 0, why: "As ligações materiais têm de ser declaradas de forma clara e visível." },
          { objective: "O6", q: "Segundo a CAN-SPAM, em quanto tempo tem de atender um pedido para cancelar a subscrição?", options: ["Nunca", "Em um ano", "Em 10 dias úteis", "Só se pedirem duas vezes"], answer: 2, why: "O guia da FTC diz que os pedidos para deixar de receber têm de ser atendidos em 10 dias úteis." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Marketing e Criação de Conteúdos com IA",
    questions: [
      { objective: "O1", q: "O seu cliente ideal é alguém que:", options: ["Mora em qualquer parte do mundo", "Precisa do que você vende, pode pagar e é fácil de alcançar", "Já trabalha para você", "É o seu concorrente"], answer: 1, why: "É a definição usada no curso." },
      { objective: "O1", q: "Que pedido à IA ajuda a descrever o seu cliente ideal?", options: ["\"Encontre as moradas das casas deles.\"", "\"Faça os meus impostos.\"", "\"Invente avaliações.\"", "\"Descreva a situação deles, o maior problema, as preocupações e onde passam tempo na internet.\""], answer: 3, why: "Essas perguntas criam um perfil útil." },
      { objective: "O1", q: "Depois de a IA escrever o rascunho de um perfil de cliente, você deve:", options: ["Vendê-lo", "Publicá-lo", "Nunca o mudar", "Confirmá-lo com clientes reais"], answer: 3, why: "A IA adivinha; os clientes reais confirmam." },
      { objective: "O2", q: "Qual é uma oferta clara?", options: ["\"Fazemos coisas.\"", "\"Pais ocupados em Decatur: bolos de aniversário personalizados entregues, para a festa ser uma preocupação a menos.\"", "\"O melhor de sempre, garantido!\"", "\"Ligue-nos.\""], answer: 1, why: "Diz para quem, o quê e porquê." },
      { objective: "O2", q: "Segundo as regras da FTC, as afirmações dos anúncios têm de ser:", options: ["Escritas pela IA", "Engraçadas", "Verdadeiras, sem enganar e com provas", "Muito longas"], answer: 2, why: "É a regra básica de verdade na publicidade." },
      { objective: "O2", q: "Deve dizer que o seu serviço é \"com IA\" se não usa IA?", options: ["Não, é uma afirmação falsa", "Sim, soa moderno", "Só em letra pequena", "Só nas redes sociais"], answer: 0, why: "Afirmações falsas sobre IA são publicidade enganosa." },
      { objective: "O3", q: "Um calendário de 12 publicações para um mês é cerca de:", options: ["Doze publicações por dia", "Uma publicação por mês", "Três publicações por semana", "Uma publicação por ano"], answer: 2, why: "12 publicações em quatro semanas são três por semana." },
      { objective: "O3", q: "Uma boa mistura de conteúdos inclui:", options: ["Dicas, bastidores, histórias de clientes e ofertas", "Só publicações de venda", "Só memes", "Só notícias de concorrentes"], answer: 0, why: "Uma mistura mantém os seguidores interessados." },
      { objective: "O3", q: "As histórias de clientes devem ser partilhadas:", options: ["Sem perguntar", "Com a autorização do cliente", "Com o número de telefone dele", "Só se a IA as tiver escrito"], answer: 1, why: "A autorização respeita os clientes e evita problemas." },
      { objective: "O4", q: "Um bom pedido de legenda inclui:", options: ["A legenda de outra pessoa", "Os seus dados bancários", "Só uma palavra", "A ideia, o cliente, o tamanho e um apelo à ação"], answer: 3, why: "Detalhes claros dão uma legenda que pode usar." },
      { objective: "O4", q: "Quando usa uma imagem feita por IA, não pode:", options: ["Fazê-la parecer um resultado real que não entregou", "Verificar se tem erros", "Usar as cores da sua marca", "Acrescentar o seu logótipo"], answer: 0, why: "Resultados falsos enganam os clientes." },
      { objective: "O4", q: "Quem pode ajudar se for importante ser dono da arte do seu logótipo?", options: ["Ninguém", "Só uma ferramenta de imagens de IA", "Um seguidor qualquer", "Um designer humano e um advogado"], answer: 3, why: "A arte feita só pela IA não é protegida por direitos de autor." },
      { objective: "O5", q: "A regra da FTC sobre avaliações falsas também proíbe:", options: ["Agradecer aos clientes", "Pedir avaliações honestas aos clientes", "Oferecer prémios só por avaliações positivas", "Responder a avaliações"], answer: 2, why: "Prémios que dependem de uma opinião positiva são proibidos." },
      { objective: "O5", q: "Que prática com avaliações é permitida?", options: ["Comprar 50 avaliações de cinco estrelas", "Pedir a todos os clientes uma avaliação honesta", "Escrever avaliações com a IA", "Alterar uma avaliação má para parecer boa"], answer: 1, why: "Avaliações honestas de clientes reais são aceitáveis." },
      { objective: "O5", q: "Onde deve ficar \"#ad\" numa publicação paga?", options: ["Em lado nenhum", "Escondido nos comentários", "Mesmo no fim de uma legenda longa", "No início, onde as pessoas o vão ver"], answer: 3, why: "As declarações têm de ser fáceis de notar." },
      { objective: "O5", q: "Num vídeo pago, a declaração deve estar:", options: ["Só num link", "Só na descrição", "No próprio vídeo", "Não é precisa"], answer: 2, why: "A FTC diz que as declarações devem estar no vídeo." },
      { objective: "O6", q: "A CAN-SPAM exige que os emails de marketing incluam:", options: ["Uma morada postal física válida", "O número da sua conta bancária", "A morada de um cliente", "A sua palavra-passe"], answer: 0, why: "Uma morada física é uma das regras básicas." },
      { objective: "O6", q: "O assunto de um email de marketing tem de:", options: ["Estar todo em maiúsculas", "Não enganar", "Ser um segredo", "Ser escrito pela IA"], answer: 1, why: "Assuntos que enganam não são permitidos." },
      { objective: "O6", q: "Quem deve receber os seus emails de marketing?", options: ["Todos os endereços de email que encontrar", "Pessoas que lhe deram o endereço e aceitaram", "Os clientes do seu concorrente", "Pessoas ao acaso de uma lista comprada"], answer: 1, why: "Envie emails a pessoas que aceitaram receber notícias suas." },
      { objective: "O6", q: "Se enviar emails a clientes noutros países, deve:", options: ["Verificar também as regras desse país", "Achar que as regras dos EUA cobrem tudo", "Parar de fazer marketing", "Tirar a sua morada"], answer: 0, why: "Cada país pode ter as suas próprias regras de email." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Cliente ideal",
        objective: "O1",
        notYet: "Amplo demais, como \"toda a gente\", ou não confirmado com clientes reais.",
        meets: "Um parágrafo sobre quem são, o seu problema e onde passam tempo, confirmado com pessoas reais.",
        exceeds: "Anota que suposições da IA estavam erradas e foram corrigidas."
      },
      {
        name: "Oferta",
        objective: "O2",
        notYet: "Falta para quem, o quê ou porquê, ou tem uma afirmação que não se consegue provar.",
        meets: "Uma frase que diz para quem é, o que a pessoa recebe e porque é importante, tudo verdadeiro.",
        exceeds: "Usa as próprias palavras do cliente, de uma conversa real."
      },
      {
        name: "Calendário de conteúdos",
        objective: "O3",
        notYet: "Menos de 12 publicações, sem datas, ou só um tipo de publicação.",
        meets: "12 publicações com datas e uma mistura de tipos em uma ou duas plataformas.",
        exceeds: "Cada publicação liga-se à oferta ou ao problema do cliente."
      },
      {
        name: "Publicações prontas",
        objective: "O4",
        notYet: "Legendas sem revisão, ou imagens que sugerem resultados não entregues.",
        meets: "Três publicações com legendas revistas, imagens e um apelo à ação, com imagens honestas.",
        exceeds: "Usa fotos reais do trabalho do dono, com autorização de qualquer cliente que apareça."
      },
      {
        name: "Email que cumpre as regras",
        objective: "O6",
        notYet: "Falta um assunto honesto, a morada ou a linha para cancelar a subscrição.",
        meets: "Assunto honesto, identificado como anúncio, morada física e cancelamento da subscrição que funciona.",
        exceeds: "Também anota como os cancelamentos vão ser atendidos em 10 dias úteis."
      }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que publicam pelo menos oito publicações planeadas em 30 dias (inquérito de seguimento)",
      "Novos contactos de clientes ou vendas que o dono liga ao pacote de marketing",
      "Alunos que começam outro curso da Koach Learn para empreendedores em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com um assistente de IA gratuito e uma conta gratuita do Canva",
      "Fotos reais do seu trabalho e uma conversa real com um cliente ou um registo de vendas",
      "Uma folha de cálculo ou um documento para o calendário de conteúdos",
      "Cerca de 60 a 75 minutos no total para as lições, as tarefas, as verificações e o pacote de marketing"
    ],
    facilitatorNotes: [
      "Peça aos donos que entrevistem um cliente real antes da Lição 1, para o perfil ter base real.",
      "Revejam cada oferta e cada publicação em pares, marcando com um círculo qualquer afirmação que não se consiga provar.",
      "Explique que o curso cobre as regras básicas dos EUA com palavras simples e não é aconselhamento jurídico.",
      "Lembre aos donos que peçam autorização antes de partilhar histórias ou fotos de clientes.",
      "Avalie o pacote de marketing com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
