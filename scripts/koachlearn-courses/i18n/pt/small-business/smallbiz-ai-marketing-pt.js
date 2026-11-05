"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US rules (FTC, CAN-SPAM); the sources are in English.

const FTC_ADS = { name: "FTC: Advertising and Marketing basics (regras básicas de publicidade, em inglês)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };
const FTC_REVIEWS = { name: "FTC: Consumer Reviews and Testimonials Rule, Questions and Answers (regra sobre avaliações e testemunhos, em inglês)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business (guia da lei CAN-SPAM, em inglês)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-marketing-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-marketing",
  category: "Small Business",
  name: "IA no Marketing para Pequenos Negócios",
  skills: "Escrever uma mensagem de marketing, Fazer publicações nas redes sociais com IA, Desenhar um folheto, Planear um calendário de conteúdos, Manter as afirmações honestas, Ver o que funciona",
  outcome: "planear e fazer um mês de marketing para o seu negócio com a ajuda da IA: uma mensagem principal clara, um calendário de conteúdos de quatro semanas, um conjunto de publicações nas redes sociais e um folheto, tudo com afirmações honestas, e uma forma simples de ver que publicações trouxeram clientes.",
  about: [
    "Este curso é para donos de pequenos negócios que fazem o seu próprio marketing: restaurantes e carrinhas de comida, salões e barbearias, lojas, serviços de limpeza e de reparações, e negócios feitos em casa. Muitos dos nossos alunos são negócios de minorias que fazem marketing para os seus bairros e comunidades.",
    "Você vai usar ferramentas de IA gratuitas para encontrar a sua mensagem principal, escrever publicações e legendas, desenhar um folheto, planear um mês de conteúdos, manter as suas afirmações honestas segundo as regras da FTC (a Comissão Federal de Comércio dos Estados Unidos) e acompanhar o que realmente traz clientes.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As tarefas juntam-se num mês de marketing pronto a publicar."
  ],
  finalTask: "Faça um mês de marketing: escreva a sua mensagem principal, um calendário de conteúdos de quatro semanas com pelo menos oito publicações, legendas prontas para quatro delas, um folheto feito numa ferramenta de design e uma tabela de acompanhamento que mostre como vai saber que publicações trouxeram clientes. Verifique que cada afirmação é verdadeira e que cada imagem é sua para usar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios que fazem o seu próprio marketing: restaurantes e carrinhas de comida, salões e barbearias, lojas, serviços de limpeza e de reparações, e negócios feitos em casa. Muitos são negócios de minorias que fazem marketing para os seus bairros e comunidades.",
    startingPoint: "Publicam nas redes sociais de vez em quando e talvez já tenham feito um folheto. Não têm mensagem principal, calendário de conteúdos nem acompanhamento, e usam pouco a IA para o marketing.",
    gap: "Publicações ao acaso gastam tempo e raramente trazem clientes, e a IA pode acrescentar afirmações ou imagens que não são verdadeiras, o que pode violar as regras da FTC e prejudicar a confiança. Os donos precisam de uma mensagem clara, de um mês de conteúdos planeados e honestos e de uma forma simples de ver o que traz clientes.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um smartphone com câmara; um computador ajuda para o folheto e a tabela",
      "Tempo: lições de cerca de 5 minutos que cabem num dia de trabalho ocupado",
      "Regras: verdade na publicidade da FTC, a regra da FTC sobre avaliações e a lei CAN-SPAM para e-mails de marketing",
      "Privacidade e direitos: autorização antes de publicar a foto de um cliente, e nomes de clientes fora da IA"
    ],
    prerequisites: "O curso \"Introdução à IA para Pequenos Negócios\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a fórmula da mensagem principal e um assistente de IA", action: "escrever uma mensagem principal que diga a quem serve, o que faz e porque é diferente", standard: "em uma ou duas frases verdadeiras que soem como você" },
    { id: "O2", condition: "Com a sua mensagem principal", action: "escrever publicações e legendas para as redes sociais com a ajuda da IA", standard: "com um detalhe real em cada uma, nada falso e autorização para qualquer foto de cliente" },
    { id: "O3", condition: "Usando uma ferramenta de design gratuita", action: "fazer um folheto para uma oferta ou um evento", standard: "com um título, uma imagem real, três detalhes e um apelo à ação, tudo verificado" },
    { id: "O4", condition: "Usando um assistente de IA e uma tabela", action: "planear um calendário de conteúdos de quatro semanas", standard: "com um número de publicações que consegue manter, uma mistura de tipos de publicação e todas as datas verificadas" },
    { id: "O5", condition: "Com as suas legendas e o seu folheto", action: "verificar no seu marketing as afirmações que não pode provar, as avaliações falsas e as regras dos e-mails", standard: "com cada afirmação não provada mudada ou retirada" },
    { id: "O6", condition: "Com as suas publicações e o seu folheto", action: "criar uma tabela de acompanhamento que mostre que marketing traz clientes", standard: "com um código promocional numa oferta e qualquer padrão dado pela IA confirmado na tabela" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A sua mensagem e as suas publicações",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar a sua mensagem principal de marketing",
          minutes: 5,
          goal: "Escrever uma ou duas frases que digam a quem serve, o que faz e porque é diferente.",
          text: [
            "A sua mensagem principal é a resposta curta a \"Porque devo escolher você?\" Cada publicação, folheto e placa deve repeti-la com palavras diferentes.",
            "Uma fórmula simples: Ajudamos [quem] a ter [o quê] com [o que nos torna diferentes]. Exemplo: \"Ajudamos famílias ocupadas do sul de Sacramento a ter refeições filipinas caseiras, prontas em 10 minutos, feitas pela mesma família desde 2009.\"",
            "Peça ajuda à IA para a encontrar: \"Isto é o que os clientes dizem da minha loja e o que faço de diferente. Escreva cinco versões de uma mensagem principal com uma frase.\" Escolha a que soa verdadeira e como você."
          ],
          steps: ["Escreva a quem serve.", "Escreva o que essas pessoas recebem.", "Escreva o que o torna diferente (verdadeiro e concreto).", "Peça cinco versões à IA e escolha uma."],
          words: [["Mensagem principal", "a frase curta que diz porque os clientes devem escolher você."], ["Diferencial", "algo verdadeiro que o torna diferente dos concorrentes."]],
          slides: [
            { title: "Porque devo escolher você?", bullets: ["A sua mensagem principal responde", "Repita-a em cada publicação e folheto"] },
            { title: "A fórmula", bullets: ["Ajudamos [quem]", "a ter [o quê]", "com [o que nos torna diferentes]"] },
            { title: "Use a IA para explorar", bullets: ["Partilhe o que os clientes dizem de você", "Peça cinco versões", "Escolha a que é verdadeira e soa como você"] }
          ],
          tryIt: "Preencha a fórmula para o seu negócio. Depois peça cinco versões a um assistente de IA e escolha a melhor.",
          youCanNow: "escrever uma mensagem principal clara para o seu negócio.",
          quickCheck: [
            { objective: "O1", q: "A que pergunta dos clientes responde uma mensagem principal?", options: ["A que horas fecha?", "Quantos funcionários tem?", "Porque devo escolher você?", "Onde comprou o seu equipamento?"], answer: 2, why: "Uma mensagem principal diz aos clientes porque devem escolher você." },
            { objective: "O1", q: "A IA dá-lhe cinco versões, e a melhor diz que você é \"o salão n.º 1 da cidade\". O que faz?", options: ["Usa-a porque soa forte", "Escolhe uma versão verdadeira e que soa como você", "Usa as cinco", "Acrescenta \"talvez\""], answer: 1, why: "A sua mensagem principal tem de ser verdadeira e soar como você." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever publicações e legendas com IA",
          minutes: 5,
          goal: "Transformar a sua mensagem principal em várias publicações com a sua própria voz.",
          text: [
            "Boas publicações de pequenos negócios mostram coisas reais: o prato do dia, um corte de cabelo antes e depois, um cliente feliz (com autorização), a sua equipa, os bastidores, uma dica, um evento. As pessoas seguem pessoas.",
            "Peça rascunhos à IA: \"Escreva quatro legendas curtas para o Instagram da minha barbearia. Mensagem principal: [a sua mensagem]. Uma sobre o horário de sábado, uma sobre um corte degradê, uma a apresentar o nosso novo barbeiro Marcus, uma com uma dica para o cabelo. Simpáticas, 2 frases cada, 3 hashtags.\"",
            "Depois edite. Acrescente detalhes reais que só você conhece. Tire tudo o que soa falso ou exagerado. Peça sempre autorização antes de publicar a foto ou o nome de um cliente."
          ],
          steps: ["Escolha quatro tipos de publicação: oferta, bastidores, equipa, dica.", "Peça legendas à IA com a sua mensagem principal e a sua voz.", "Acrescente detalhes reais e corte tudo o que é falso.", "Peça autorização para qualquer foto ou nome de cliente."],
          words: [["Legenda", "o texto que acompanha uma foto ou um vídeo nas redes sociais."], ["Hashtag", "uma palavra com # à frente, usada para juntar publicações sobre um tema."]],
          slides: [
            { title: "Publique coisas reais", bullets: ["O prato do dia ou um antes e depois", "A sua equipa e os bastidores", "Dicas e eventos"] },
            { title: "Peça rascunhos à IA", bullets: ["Dê a sua mensagem principal e a sua voz", "Diga os tipos de publicação e o tamanho", "Peça algumas hashtags"] },
            { title: "Depois torne-as reais", bullets: ["Acrescente detalhes que só você conhece", "Corte tudo o que é falso ou exagerado", "Autorização antes de fotos ou nomes de clientes"] }
          ],
          tryIt: "Peça à IA quatro legendas para o seu negócio com a sua mensagem principal. Edite cada uma para acrescentar um detalhe real e tirar tudo o que não é verdade.",
          youCanNow: "escrever publicações nas redes sociais com a ajuda da IA que soam reais e como o seu negócio.",
          quickCheck: [
            { objective: "O2", q: "O que é uma legenda?", options: ["O texto que acompanha uma foto ou um vídeo nas redes sociais", "Uma licença comercial", "Um tipo de folheto", "Uma avaliação de cliente"], answer: 0, why: "Uma legenda é o texto que vai com a sua publicação de foto ou vídeo." },
            { objective: "O2", q: "Quer publicar uma ótima foto do novo corte de cabelo de um cliente. O que faz primeiro?", options: ["Publica e marca o cliente", "Desfoca e publica", "Pergunta à IA se pode", "Pede autorização ao cliente"], answer: 3, why: "Precisa da autorização do cliente antes de publicar a foto dele." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Desenhar um folheto ou uma imagem promocional",
          minutes: 5,
          goal: "Fazer um folheto ou uma imagem clara para uma oferta ou um evento.",
          text: [
            "Um folheto funciona num balcão, num quadro da comunidade, no boletim de uma igreja ou como publicação nas redes sociais. Use uma ferramenta de design gratuita como o Canva ou o Adobe Express, a começar por um modelo.",
            "Mantenha as partes claras: um título grande (a oferta), uma imagem, três detalhes curtos (o quê, quando, onde) e um apelo à ação (\"Ligue para marcar\", \"Encomende pela internet\"). Ponha a sua mensagem principal em letras pequenas no fundo.",
            "Se usar imagens feitas por IA, confirme que não mostram comida, trabalho ou resultados que você não oferece de verdade. Use as suas próprias fotos sempre que puder; os clientes confiam em imagens reais."
          ],
          steps: ["Abra uma ferramenta de design e escolha um modelo.", "Escreva um título grande com a oferta.", "Acrescente uma imagem, três detalhes e um apelo à ação.", "Verifique a ortografia, o número de telefone, a data e a morada.", "Descarregue ou partilhe."],
          words: [["Apelo à ação", "as palavras que dizem às pessoas o que fazer a seguir, como \"Ligue para marcar\"."], ["Título", "as palavras maiores de um folheto ou anúncio."]],
          slides: [
            { title: "Partes de um folheto claro", bullets: ["Título grande: a oferta", "Uma imagem", "O quê, quando, onde", "Apelo à ação"] },
            { title: "Ferramentas de design gratuitas", bullets: ["Canva ou Adobe Express", "Comece por um modelo"] },
            { title: "Imagens em que os clientes confiam", bullets: ["Use as suas próprias fotos sempre que puder", "Imagens de IA não podem mostrar o que você não oferece"] }
          ],
          tryIt: "Faça um folheto para uma oferta ou um evento real com um título, uma imagem, três detalhes e um apelo à ação. Verifique cada detalhe antes de o guardar.",
          youCanNow: "desenhar um folheto ou uma imagem promocional clara para o seu negócio.",
          quickCheck: [
            { objective: "O3", q: "O que é um apelo à ação?", options: ["Uma chamada telefónica a um cliente", "Um título grande", "Palavras que dizem às pessoas o que fazer a seguir", "Uma lista de preços"], answer: 2, why: "Um apelo à ação diz às pessoas o próximo passo, como \"Ligue para marcar\"." },
            { objective: "O3", q: "O seu folheto tem uma imagem de IA de um bolo que você não faz. O que faz?", options: ["Mantém porque é bonita", "Põe-na mais pequena", "Acrescenta uma nota a dizer que é IA", "Troca-a por uma foto real do que vende"], answer: 3, why: "As imagens devem mostrar o que você vende de verdade." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A sua mensagem e as suas publicações",
        questions: [
          { objective: "O1", q: "A que responde uma mensagem principal?", options: ["Qual é a sua palavra-passe?", "Porque devo escolher você?", "Onde fica o banco?", "Que idade tem o dono?"], answer: 1, why: "A mensagem principal diz porque os clientes devem escolher você." },
          { objective: "O1", q: "Qual é uma mensagem principal forte?", options: ["\"Somos os melhores.\"", "\"Entre.\"", "\"Comida.\"", "\"Ajudamos famílias ocupadas do sul de Sacramento a ter refeições filipinas caseiras em 10 minutos.\""], answer: 3, why: "Diz quem, o quê e o que é diferente." },
          { objective: "O2", q: "Antes de publicar a foto de um cliente, você tem de:", options: ["Pedir a autorização dele", "Pôr um filtro", "Perguntar à IA", "Publicá-la à noite"], answer: 0, why: "A autorização respeita os clientes e evita problemas." },
          { objective: "O3", q: "O que é um apelo à ação?", options: ["Uma hashtag", "Uma conta de telefone", "Palavras que dizem às pessoas o que fazer a seguir", "Um logótipo"], answer: 2, why: "Diz às pessoas o próximo passo, como \"Ligue para marcar\"." },
          { objective: "O3", q: "Uma imagem de IA mostra um prato que você não vende. O que faz?", options: ["Usa-a na mesma", "Acrescenta mais pratos falsos", "Troca-a por uma foto real ou uma imagem do que vende", "Publica-a duas vezes"], answer: 2, why: "As imagens não podem enganar os clientes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planeamento, honestidade e resultados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planear um calendário de conteúdos mensal",
          minutes: 5,
          goal: "Planear quatro semanas de publicações num calendário simples.",
          text: [
            "Um calendário de conteúdos é uma tabela que diz o que vai publicar e quando. Acaba com o pânico do \"o que publico hoje?\".",
            "Faça colunas: Data, Plataforma, Tipo de publicação, Ideia, Legenda pronta?, Imagem pronta?. Planeie duas ou três publicações por semana que consiga mesmo manter. Misture tipos: ofertas, dicas, equipa, clientes (com autorização) e eventos da comunidade.",
            "Peça à IA: \"Faça um calendário de publicações de quatro semanas para o meu negócio de limpeza, duas publicações por semana, misturando ofertas, dicas e publicações da equipa. A nossa mensagem principal é [...]. Inclua feriados e eventos locais em [cidade] em [mês] que eu deva verificar.\" Depois verifique você mesmo cada data e evento."
          ],
          steps: ["Faça uma tabela de calendário com seis colunas.", "Escolha quantas publicações por semana consegue manter.", "Peça à IA ideias para quatro semanas.", "Verifique você mesmo as datas e os eventos locais.", "Marque as publicações feitas à medida que avança."],
          words: [["Calendário de conteúdos", "um plano do que vai publicar e quando."], ["Plataforma", "um site ou aplicação de redes sociais, como o Instagram, o Facebook ou o TikTok."]],
          slides: [
            { title: "Porquê um calendário", bullets: ["Acabou o \"o que publico hoje?\"", "Uma tabela do quê e quando"] },
            { title: "Colunas", bullets: ["Data, Plataforma, Tipo de publicação", "Ideia, Legenda pronta?, Imagem pronta?"] },
            { title: "Planeie com a IA", bullets: ["Duas ou três publicações por semana que consiga manter", "Misture ofertas, dicas, equipa, comunidade", "Verifique você mesmo cada data e evento"] }
          ],
          tryIt: "Peça à IA um calendário de quatro semanas, com duas publicações por semana, para o seu negócio. Ponha-o numa tabela e verifique cada data.",
          youCanNow: "planear um mês de publicações num calendário de conteúdos.",
          quickCheck: [
            { objective: "O4", q: "O que é um calendário de conteúdos?", options: ["Um plano do que publica e quando", "Uma lista de feriados", "Um relatório de vendas", "O seu horário de abertura"], answer: 0, why: "Um calendário de conteúdos planeia as suas publicações por data." },
            { objective: "O4", q: "O calendário da IA tem duas publicações por dia, mas você só tem tempo para duas por semana. O que faz?", options: ["Tenta publicar todos os dias na mesma", "Reduz para um número que consegue mesmo manter", "Desiste do calendário", "Contrata uma agência de marketing"], answer: 1, why: "Planeie um número de publicações que consiga mesmo manter." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Manter o seu marketing honesto e legal",
          minutes: 5,
          goal: "Verificar no seu marketing as afirmações que não pode provar, as avaliações falsas e as regras dos e-mails.",
          text: [
            "A Comissão Federal de Comércio dos Estados Unidos (FTC) diz que a publicidade tem de ser verdadeira e não enganosa, e que precisa de provas para as afirmações que faz. \"Os melhores tacos de LA\" lê-se como opinião, mas \"A nossa limpeza mata 99% dos germes\" ou \"Perca 10 libras\" é uma afirmação que tem de poder provar.",
            "A IA gosta de palavras grandes: \"garantido\", \"premiado\", \"número um\". Tire as que não pode provar. Nunca publique avaliações ou testemunhos falsos; a regra da FTC sobre avaliações proíbe-os, incluindo os escritos por IA.",
            "Os e-mails de marketing têm de seguir a lei CAN-SPAM: remetente e assunto honestos, dizer que é um anúncio, incluir a sua morada postal e uma forma fácil de cancelar a subscrição, e respeitar os cancelamentos em 10 dias úteis."
          ],
          steps: ["Sublinhe cada afirmação na sua publicação ou folheto.", "Pergunte: consigo provar isto?", "Tire ou mude as afirmações que não pode provar.", "Nada de avaliações ou testemunhos falsos.", "Verifique os pontos básicos da CAN-SPAM nos e-mails de marketing."],
          words: [["Afirmação", "uma frase que apresenta um facto num anúncio, como \"mata 99% dos germes\"."], ["Enganoso", "que pode dar às pessoas uma ideia errada."], ["Testemunho", "as palavras de um cliente a elogiar o seu negócio, usadas no marketing."]],
          slides: [
            { title: "FTC: anúncios verdadeiros", bullets: ["Os anúncios não podem enganar", "Precisa de provas para as suas afirmações"] },
            { title: "Corte palavras grandes que não pode provar", bullets: ["\"Garantido\", \"premiado\", \"número um\"", "Nada de avaliações falsas, mesmo escritas por IA"] },
            { title: "E-mails de marketing (CAN-SPAM)", bullets: ["Remetente e assunto honestos; diga que é um anúncio", "Morada postal e cancelamento fácil", "Respeite os cancelamentos em 10 dias úteis"] }
          ],
          sources: [FTC_ADS, FTC_REVIEWS, CAN_SPAM],
          tryIt: "Pegue nas suas quatro legendas e no seu folheto. Sublinhe cada afirmação e mude ou tire as que não pode provar.",
          youCanNow: "verificar no seu marketing as afirmações que não se podem provar, as avaliações falsas e os problemas com as regras dos e-mails.",
          quickCheck: [
            { objective: "O5", q: "Segundo a FTC, como têm de ser os anúncios?", options: ["Engraçados", "Curtos", "Verdadeiros e não enganosos", "Publicados todos os dias"], answer: 2, why: "As regras da FTC dizem que os anúncios têm de ser verdadeiros e não enganosos." },
            { objective: "O5", q: "A IA escreveu \"Votados os melhores tacos de LA\" na sua legenda, mas não houve nenhuma votação. O que faz?", options: ["Tira a frase", "Mantém; toda a gente diz isso", "Muda para \"Votados os melhores tacos da cidade\"", "Pede aos amigos para votarem agora"], answer: 0, why: "As afirmações que não pode provar têm de ser retiradas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ver o que funciona",
          minutes: 5,
          goal: "Acompanhar que publicações e folhetos trazem clientes.",
          text: [
            "Os gostos são bons, mas os clientes importam mais. Acompanhe sinais simples: mensagens e chamadas, marcações, pessoas que falam de uma publicação e o uso de um código especial (\"Diga FLYER10 e tenha 10% de desconto\").",
            "A maioria das redes sociais mostra números gratuitos às contas de empresa, como o alcance e as visitas ao perfil; procure a secção de estatísticas (insights) ou de análise. Escreva os números principais numa tabela de acompanhamento todas as semanas.",
            "Uma vez por mês, cole a sua tabela (sem nomes de clientes) num assistente de IA e pergunte: \"Que tipos de publicação trouxeram mais marcações? O que devo fazer mais?\" Confirme na sua tabela e depois planeie o mês seguinte."
          ],
          steps: ["Escolha os sinais: mensagens, marcações, menções, uso do código.", "Ponha um código especial numa oferta.", "Registe os números todas as semanas numa tabela.", "Peça à IA os padrões uma vez por mês e confirme-os."],
          words: [["Alcance", "quantas pessoas viram uma publicação."], ["Estatísticas (insights)", "os números que uma plataforma mostra sobre como correram as suas publicações."], ["Código promocional", "uma palavra que os clientes dizem ou escrevem para ter uma oferta, e que o ajuda a acompanhá-la."]],
          slides: [
            { title: "Clientes antes de gostos", bullets: ["Mensagens, chamadas e marcações", "Pessoas que falam de uma publicação", "Códigos especiais como FLYER10"] },
            { title: "Números gratuitos", bullets: ["As contas de empresa mostram estatísticas", "Alcance e visitas ao perfil", "Escreva-os numa tabela semanal"] },
            { title: "Revisão mensal com a IA", bullets: ["Cole a tabela, sem nomes", "Pergunte o que trouxe mais marcações", "Confirme e depois planeie o mês seguinte"] }
          ],
          tryIt: "Tarefa final: termine o seu mês de marketing: mensagem principal, calendário de quatro semanas, quatro legendas prontas, um folheto e uma tabela de acompanhamento com um código promocional numa oferta. Verifique cada afirmação e cada imagem.",
          youCanNow: "planear, fazer e medir um mês de marketing honesto para o seu negócio.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer alcance?", options: ["Quantas pessoas compraram alguma coisa", "Quantas pessoas viram uma publicação", "Que distância os clientes percorrem", "Quantas publicações fez"], answer: 1, why: "O alcance é o número de pessoas que viram uma publicação." },
            { objective: "O6", q: "Quer saber se o seu folheto trouxe clientes. O que faz?", options: ["Adivinha pelo movimento que parece haver", "Pede à IA para adivinhar", "Conta os seus gostos", "Põe um código promocional especial no folheto e acompanha-o"], answer: 3, why: "Um código especial mostra que marketing trouxe cada cliente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planeamento, honestidade e resultados",
        questions: [
          { objective: "O4", q: "O que é um calendário de conteúdos?", options: ["Um plano do que publica e quando", "Um calendário de impostos", "Um horário dos funcionários", "Um relógio de parede"], answer: 0, why: "Planeia as suas publicações." },
          { objective: "O4", q: "O calendário da IA mostra um festival local numa certa data. O que faz?", options: ["Apaga o calendário", "Confia nele", "Publica sobre o festival sem verificar", "Verifica você mesmo a data"], answer: 3, why: "A IA pode errar nas datas e nos eventos." },
          { objective: "O5", q: "Que afirmação precisa de provas?", options: ["\"Venha dizer olá\"", "\"A nossa limpeza mata 99% dos germes\"", "\"Adoramos o nosso bairro\"", "\"Aberto ao sábado\""], answer: 1, why: "As afirmações concretas sobre factos precisam de provas." },
          { objective: "O6", q: "Qual é o melhor sinal de que uma publicação funcionou?", options: ["Novas marcações de pessoas que falam dela", "Mais um gosto", "Uma cor bonita", "Uma legenda comprida"], answer: 0, why: "Os clientes importam mais do que os gostos." },
          { objective: "O6", q: "Porquê acrescentar um código especial como FLYER10?", options: ["É obrigatório por lei", "Para confundir os clientes", "Para acompanhar que marketing trouxe clientes", "Para esconder o preço"], answer: 2, why: "Os códigos mostram que peça funcionou." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA no Marketing para Pequenos Negócios",
    questions: [
      { objective: "O1", q: "A fórmula da mensagem principal é: Ajudamos [quem] a ter [o quê] com...", options: ["A nossa palavra-passe", "O que nos torna diferentes", "Sempre um desconto", "O nome do nosso concorrente"], answer: 1, why: "O diferencial completa a fórmula." },
      { objective: "O1", q: "A sua mensagem principal deve ser:", options: ["Secreta", "O maior possível", "Copiada de um concorrente", "Verdadeira e soar como você"], answer: 3, why: "Os clientes confiam em mensagens verdadeiras." },
      { objective: "O1", q: "Onde deve aparecer a sua mensagem principal?", options: ["Em lado nenhum", "Só na sua cabeça", "Só nos impostos", "Nas suas publicações, folhetos e placas"], answer: 3, why: "Repeti-la faz as pessoas reconhecerem você." },
      { objective: "O2", q: "Qual é uma boa publicação de um pequeno negócio?", options: ["Uma foto de banco de imagens de uma praia", "Um corte de cabelo antes e depois, com autorização", "Uma avaliação falsa", "Uma foto de um concorrente"], answer: 1, why: "O trabalho real cria confiança." },
      { objective: "O2", q: "Depois de a IA escrever as legendas, você deve:", options: ["Acrescentar mais afirmações grandes", "Publicá-las sem mudar nada", "Acrescentar detalhes reais e cortar tudo o que é falso", "Apagar a sua página"], answer: 2, why: "Editar torna-as reais e corretas." },
      { objective: "O2", q: "O que é uma legenda?", options: ["O texto que acompanha uma foto ou um vídeo nas redes sociais", "Um recibo", "Uma etiqueta de preço", "Um logótipo"], answer: 0, why: "As legendas descrevem as publicações." },
      { objective: "O3", q: "Que ferramentas gratuitas fazem folhetos?", options: ["Uma caixa registadora", "Uma calculadora", "Canva ou Adobe Express", "Um carregador de telefone"], answer: 2, why: "São ferramentas de design com modelos." },
      { objective: "O3", q: "O título de um folheto deve ser:", options: ["Grande e sobre a oferta", "Minúsculo", "Inexistente", "A sua palavra-passe"], answer: 0, why: "O título chama a atenção." },
      { objective: "O3", q: "Em que imagem os clientes confiam mais?", options: ["Imagens de IA de coisas que você não vende", "As suas próprias fotos reais", "Fotos ao acaso da internet", "Fotos dos concorrentes"], answer: 1, why: "As imagens reais criam confiança." },
      { objective: "O4", q: "Quantas publicações por semana deve planear?", options: ["Tantas quantas a IA sugerir", "Cinquenta", "Nenhuma", "Um número que consiga mesmo manter"], answer: 3, why: "Ser constante é melhor do que ficar esgotado." },
      { objective: "O4", q: "Qual é uma coluna do calendário de conteúdos?", options: ["Tipo de publicação", "Número do cartão do cliente", "Palavra-passe", "PIN do banco"], answer: 0, why: "O tipo de publicação ajuda a misturar os conteúdos." },
      { objective: "O4", q: "Misturar tipos de publicação quer dizer:", options: ["Só republicar", "Só descontos", "Só selfies", "Ofertas, dicas, equipa e comunidade"], answer: 3, why: "A variedade mantém os seguidores interessados." },
      { objective: "O5", q: "Segundo a FTC, os anúncios têm de ser:", options: ["Compridos", "Engraçados", "Verdadeiros e não enganosos", "A cores"], answer: 2, why: "É a regra básica da FTC." },
      { objective: "O5", q: "A IA acrescentou \"premiado\", mas você não tem nenhum prémio. Você:", options: ["Mantém", "Tira", "Inventa um prémio", "Acrescenta \"garantido\""], answer: 1, why: "As afirmações que não se podem provar enganam." },
      { objective: "O5", q: "As avaliações falsas escritas por IA são:", options: ["Obrigatórias", "Aceitáveis se forem curtas", "Aceitáveis ao fim de semana", "Proibidas pela regra da FTC sobre avaliações"], answer: 3, why: "A regra abrange as falsas feitas por IA." },
      { objective: "O5", q: "Um e-mail de marketing segundo a CAN-SPAM tem de incluir:", options: ["Um remetente falso", "O número do cartão do cliente", "A sua morada postal e uma opção para cancelar a subscrição", "Nenhum assunto"], answer: 2, why: "As duas coisas são obrigatórias." },
      { objective: "O6", q: "Alcance quer dizer:", options: ["Quantas pessoas viram uma publicação", "Quantas pessoas compraram", "Quantos funcionários tem", "A força do seu Wi-Fi"], answer: 0, why: "O alcance conta quem viu." },
      { objective: "O6", q: "Onde encontra números gratuitos das publicações numa conta de empresa?", options: ["Na sua impressora de recibos", "Na secção de estatísticas (insights) ou de análise", "No seu banco", "Em lado nenhum"], answer: 1, why: "As plataformas mostram estatísticas às contas de empresa." },
      { objective: "O6", q: "Antes de colar os números de acompanhamento na IA, tire:", options: ["As datas", "Os nomes dos clientes", "Os tipos de publicação", "Os totais"], answer: 1, why: "Os nomes dos clientes são privados." },
      { objective: "O6", q: "Depois de a IA dizer que as publicações de dicas trazem mais marcações, você:", options: ["Confirma na sua tabela e depois planeia mais", "Para todas as publicações de dicas", "Ignora", "Apaga a sua conta"], answer: 0, why: "Confirme e depois aja." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 4, 5, 7, 8, 9, 12, 13, 16]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Mensagem principal", objective: "O1", notYet: "Vaga, ou diz algo que não é verdade.", meets: "Uma ou duas frases verdadeiras: a quem serve, o que faz, porque é diferente.", exceeds: "Aparece nas publicações e no folheto." },
      { name: "Calendário de conteúdos", objective: "O4", notYet: "Menos de oito publicações, ou datas não verificadas.", meets: "Quatro semanas com pelo menos oito publicações, datas verificadas.", exceeds: "Mistura ofertas, dicas, equipa e comunidade." },
      { name: "Legendas", objective: "O2", notYet: "Menos de quatro, ou têm detalhes que não são verdade.", meets: "Quatro legendas prontas com um detalhe real em cada uma.", exceeds: "Cada uma tem um apelo à ação claro e soa como o dono." },
      { name: "Folheto", objective: "O3", notYet: "Falta o título, os detalhes ou o apelo à ação.", meets: "Título, uma imagem real, três detalhes e um apelo à ação, tudo verificado.", exceeds: "Inclui um código promocional para acompanhamento." },
      { name: "Afirmações e imagens honestas", objective: "O5", notYet: "Uma afirmação não se pode provar, ou uma imagem não é sua para usar.", meets: "Cada afirmação pode ser provada e cada imagem é sua ou usada com autorização.", exceeds: "O dono sabe dizer como prova cada afirmação." },
      { name: "Tabela de acompanhamento", objective: "O6", notYet: "Não há forma de saber que publicações funcionaram.", meets: "Uma tabela para registar os resultados, com um código promocional numa oferta.", exceeds: "Usa os números gratuitos das estatísticas e planeia rever os resultados no fim do mês." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que publicam segundo o calendário durante o mês inteiro (inquérito de seguimento aos 30 dias)",
      "Donos que sabem dizer, pela tabela de acompanhamento, que publicação ou folheto trouxe novos clientes",
      "Donos que dizem ter mais marcações ou vendas depois do mês"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com câmara e internet; um computador ajuda para o folheto e a tabela",
      "Um assistente de IA gratuito e uma ferramenta de design gratuita, como o Canva ou o Adobe Express",
      "Fotos reais do seu negócio, dos seus produtos ou do seu trabalho",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça aos donos que tragam para a sessão algumas fotos reais e uma oferta ou um evento que vem aí.",
      "Lembre aos donos que peçam autorização antes de publicar a foto de qualquer cliente.",
      "Peça aos donos que sublinhem juntos cada afirmação nas legendas e no folheto, e depois digam como provariam cada uma.",
      "Os nomes dos clientes ficam fora das ferramentas de IA quando se colam os números de acompanhamento.",
      "Avalie o mês de marketing com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
