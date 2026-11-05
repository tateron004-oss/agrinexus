"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-emerging-economies.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "veterans-emerging-economies-pt",
  lang: "pt",
  translationOf: "veterans-emerging-economies",
  category: "Veterans (military)",
  name: "Empreendedorismo em Economias Emergentes",
  skills: "Explicar o que é uma economia emergente, Transformar competências militares numa ideia de negócio, Pesquisar um mercado com IA e guias oficiais, Escrever um modelo de negócio de uma página, Planear custos e riscos, Encontrar ajuda oficial para negócios",
  outcome: "escrever um modelo de negócio de uma página para um pequeno negócio numa economia emergente, ou que vende para ela, baseado nas suas competências militares, com um plano de pesquisa que verifica o mercado e as regras em fontes oficiais.",
  about: [
    "Este curso é para veteranos que têm curiosidade em abrir um negócio numa economia que cresce depressa, como países de África, do Sul e Sudeste Asiático ou da América Latina, ou em vender a clientes desses países a partir dos Estados Unidos. Muitos veteranos já conhecem esses lugares das missões e percebem de logística, segurança, formação e trabalho com outras culturas.",
    "Você vai aprender o que torna as economias emergentes diferentes, transformar as suas competências militares numa ideia de negócio que resolve um problema real, pesquisar o mercado com um assistente de IA gratuito e com guias oficiais do governo, e escrever um modelo de negócio de uma página. Vai planear o dinheiro, os riscos e a lei, e encontrar ajuda oficial gratuita, como o Boots to Business da SBA (a agência dos EUA para pequenas empresas).",
    "Este curso ensina a planear e testar uma ideia; não é aconselhamento jurídico, fiscal nem de investimento. Verifique as regras em fontes oficiais e com profissionais locais qualificados. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva um modelo de negócio de uma página para uma ideia de negócio numa economia emergente que você indica pelo nome: o cliente, o problema, a sua solução e como as suas competências militares se encaixam, como vai chegar aos clientes, como vai ganhar dinheiro, os seus custos principais e os seus três maiores riscos. Acrescente um plano de pesquisa que indique as fontes oficiais que vai verificar (o Country Commercial Guide do país e a sua agência de registo de empresas) e um programa oficial de ajuda gratuito que vai contactar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos com curiosidade em abrir um negócio numa economia que cresce depressa (África, Sul e Sudeste Asiático, América Latina) ou em vender a clientes desses lugares a partir dos Estados Unidos. Muitos conhecem estas regiões das missões.",
    startingPoint: "Trazem experiência em logística, segurança, formação e trabalho com outras culturas, e sabem usar um computador ou um smartphone. A maioria nunca escreveu um modelo de negócio nem pesquisou um mercado estrangeiro e as suas regras.",
    gap: "Ideias de negócio feitas de palpites podem gastar as poupanças depressa, e os mercados estrangeiros têm as suas próprias regras, riscos e leis contra a corrupção. Os alunos precisam de transformar uma competência militar numa ideia de negócio clara, escrever um modelo de uma página e planear verificar o mercado e as regras em fontes oficiais antes de gastar dinheiro.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; não se espera experiência em negócios",
      "Aparelhos: um computador ou smartphone com internet e um assistente de IA gratuito",
      "Os dados que mudam (passos de registo, impostos, licenças, moeda) são verificados em fontes oficiais, como os Country Commercial Guides do trade.gov e o registo de empresas do país",
      "Limites legais: nenhum suborno de nenhum tipo (FCPA dos EUA); as questões de contratos, impostos e registo vão para um advogado ou contabilista local qualificado",
      "Tempo: lições de cerca de 5 minutos; este curso planeia um negócio, não o abre"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e ao Futuro do Trabalho\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para uma economia emergente à sua escolha", action: "explicar o que é uma economia emergente e indicar duas oportunidades e dois desafios nesse país", standard: "marcando cada dado que precisa de ser verificado" },
    { id: "O2", condition: "Com as suas competências militares", action: "escrever uma ideia de negócio numa frase que liga uma competência a um problema local real", standard: "indicando o serviço, o cliente, o lugar e como o cliente paga" },
    { id: "O3", condition: "Para a sua ideia de negócio", action: "planear a pesquisa de mercado com IA e verificar os dados principais no Country Commercial Guide oficial e no registo de empresas", standard: "respondendo a pelo menos duas perguntas de pesquisa com fontes oficiais" },
    { id: "O4", condition: "Usando a sua ideia numa frase", action: "escrever um modelo de negócio de uma página com a ajuda da IA", standard: "com as sete partes e cada palpite marcado \"a testar\"" },
    { id: "O5", condition: "Para o seu modelo de negócio", action: "fazer a lista dos custos de arranque e dos seus três maiores riscos, com uma forma de reduzir cada um", standard: "com preços de orçamentos reais e nenhum plano que dependa de um suborno" },
    { id: "O6", condition: "Antes de gastar dinheiro a sério", action: "planear um piloto pequeno e barato da sua ideia e escolher um programa oficial de ajuda para contactar", standard: "com o programa indicado pelo nome e uma data para o contactar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar a oportunidade",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é uma economia emergente",
          minutes: 5,
          goal: "Explicar o que é uma economia emergente e indicar duas oportunidades e dois desafios.",
          text: [
            "Uma economia emergente é um país cuja economia cresce e muda depressa, passando sobretudo da agricultura ou das matérias-primas para mais indústria, serviços e tecnologia. Exemplos muitas vezes citados são o Quénia, a Nigéria, o Gana, a Índia, o Vietname, a Indonésia e o Brasil.",
            "Oportunidades: populações jovens e a crescer; crescimento rápido do telefone e da internet; dinheiro móvel, como o M-Pesa no Quénia, que deixa as pessoas pagar pelo telefone; e falhas reais em serviços como energia, transporte, armazenamento frio, formação e segurança.",
            "Desafios: regras que mudam, papelada mais lenta, oscilações da moeda, estradas ou energia mais fracas em algumas zonas, e risco de corrupção. O sucesso depende de parceiros locais, de paciência e de verificar os dados em fontes oficiais."
          ],
          words: [["Economia emergente", "um país cuja economia cresce e muda depressa."], ["Dinheiro móvel", "uma forma de enviar, receber e guardar dinheiro no telefone, muitas vezes sem conta bancária."], ["Oscilação da moeda", "quando o valor do dinheiro de um país sobe ou desce em relação a outras moedas."]],
          slides: [
            { title: "Economia emergente", bullets: ["Cresce e muda depressa", "Exemplos: Quénia, Nigéria, Gana, Índia, Vietname, Brasil"] },
            { title: "Oportunidades", bullets: ["Populações jovens e a crescer", "Crescimento rápido do telefone e do dinheiro móvel", "Falhas em energia, transporte, armazenamento, formação"] },
            { title: "Desafios", bullets: ["Regras que mudam e papelada mais lenta", "Oscilações da moeda", "Risco de corrupção: parceiros locais e dados contam"] }
          ],
          tryIt: "Escolha uma economia emergente que conhece ou que lhe desperta curiosidade. Pergunte a um assistente de IA: \"Com palavras simples, indique três necessidades que estão a crescer e três desafios para negócios em [país].\" Marque cada dado que vai precisar de verificar.",
          youCanNow: "explicar o que é uma economia emergente e indicar as suas oportunidades e desafios.",
          quickCheck: [
            { objective: "O1", q: "O que faz de um país uma economia emergente?", options: ["Ainda não tem negócios", "A sua economia cresce e muda depressa", "Só vende petróleo", "Tem as mesmas regras que os Estados Unidos"], answer: 1, why: "As economias emergentes crescem e mudam depressa, o que traz oportunidades e desafios." },
            { objective: "O1", q: "Uma IA dá uma lista de três desafios para negócios num país que escolheu. O que faz?", options: ["Trata-os como factos provados", "Apaga a resposta", "Escolhe logo outro país", "Marca cada dado que vai precisar de verificar numa fonte oficial"], answer: 3, why: "As respostas da IA sobre outros países podem estar erradas ou desatualizadas, por isso marca os dados a verificar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Transformar competências militares numa ideia de negócio",
          minutes: 5,
          goal: "Ligar uma das suas competências militares a um problema local real e escrever uma ideia de negócio numa frase.",
          text: [
            "As melhores ideias resolvem um problema real que as pessoas pagam para resolver. Comece pelo que sabe fazer. Competências militares que se encaixam bem em mercados emergentes: logística e abastecimento (transportar e guardar mercadorias), manutenção de energia e geradores, reparação de veículos e equipamento, planeamento de segurança, comunicações e informática, formação em apoio médico, e ensinar e formar pessoas.",
            "Depois ligue uma competência a um problema. Exemplo: um antigo sargento de logística do Exército vê que os pequenos agricultores perdem produtos antes de chegarem ao mercado. Ideia: \"Um serviço partilhado de armazenamento frio e recolha para pequenos agricultores perto de Nakuru, pago por caixa com dinheiro móvel.\"",
            "Peça à IA para dar ideias, mas quem escolhe é você. Pedido: \"Fui eletricista da Marinha durante 8 anos. Faça uma lista de 10 ideias de pequenos negócios no Gana que usam estas competências para resolver um problema local. Uma linha cada.\" Escolha a que pode testar com pouco dinheiro."
          ],
          steps: ["Faça a lista de três competências militares em que é bom.", "Faça a lista de três problemas reais no país que escolheu.", "Peça à IA ideias que liguem umas aos outros.", "Escolha uma ideia que pode testar com pouco dinheiro.", "Escreva-a numa frase: serviço, cliente, lugar, como pagam."],
          words: [["Ideia de negócio", "um produto ou serviço que resolve um problema para um cliente que vai pagar."], ["Pequeno agricultor", "um agricultor com um terreno pequeno, comum em muitas economias emergentes."]],
          slides: [
            { title: "Competências militares que se encaixam", bullets: ["Logística, abastecimento e armazenamento", "Energia, geradores, veículos", "Segurança, comunicações, formação"] },
            { title: "Competência + problema real = ideia", bullets: ["Sargento de logística vê agricultores a perder produtos", "Ideia: armazenamento frio partilhado, pago por caixa"] },
            { title: "Escreva numa frase", bullets: ["Serviço", "Cliente", "Lugar", "Como pagam"] }
          ],
          tryIt: "Peça a um assistente de IA dez ideias de negócio que usam as suas competências militares no país que escolheu. Escolha uma e escreva-a numa frase: serviço, cliente, lugar, como pagam.",
          youCanNow: "transformar uma competência militar numa ideia de negócio numa frase que resolve um problema local.",
          quickCheck: [
            { objective: "O2", q: "O que torna forte uma ideia de negócio?", options: ["Resolve um problema real que as pessoas pagam para resolver", "Copia a maior empresa", "Não precisa de clientes", "Parece emocionante para você"], answer: 0, why: "Um negócio dura quando resolve um problema real pelo qual os clientes pagam." },
            { objective: "O2", q: "A IA dá-lhe dez ideias de negócio. O que faz?", options: ["Começa as dez", "Deixa a IA escolher uma", "Escolhe uma que usa as suas competências e escreve-a numa frase", "Escolhe a que tem os números maiores"], answer: 2, why: "Você escolhe a ideia que encaixa nas suas competências e escreve-a com clareza: serviço, cliente, lugar, como pagam." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pesquisar o mercado com IA e guias oficiais",
          minutes: 6,
          goal: "Usar a IA para planear a pesquisa de mercado e verificar os dados principais no Country Commercial Guide oficial.",
          text: [
            "A IA pode ajudar a planear a pesquisa e a fazer a lista de perguntas, mas pode estar errada ou desatualizada sobre mercados e leis estrangeiros. Use-a para fazer rascunhos; use fontes oficiais para verificar.",
            "A International Trade Administration (Administração do Comércio Internacional) do Departamento do Comércio dos EUA publica os Country Commercial Guides (guias comerciais por país), preparados por funcionários das embaixadas dos EUA, sobre como funciona um mercado, as oportunidades, as regras e os costumes de negócio. O seu U.S. Commercial Service também ajuda as empresas dos EUA que vendem no estrangeiro com pesquisa de mercado e contactos.",
            "Para abrir uma empresa no próprio país, encontre o seu registo oficial de empresas. No Quénia é o Business Registration Service (brs.go.ke); na Nigéria é a Corporate Affairs Commission (cac.gov.ng). Leia você mesmo os passos e as taxas atuais, e fale com cinco possíveis clientes antes de gastar dinheiro a sério."
          ],
          steps: ["Pergunte à IA: \"Que 10 perguntas devo responder antes de começar [ideia] em [país]?\"", "Leia o Country Commercial Guide do país no trade.gov.", "Encontre o registo oficial de empresas do país e leia os passos atuais.", "Fale com cinco possíveis clientes sobre o problema.", "Anote o que confirmou e o que ainda não sabe."],
          words: [["Country Commercial Guide", "um relatório do governo dos EUA sobre como funcionam os negócios num país estrangeiro."], ["Registo de empresas", "o serviço oficial do governo onde se registam as empresas e os nomes comerciais."], ["Pesquisa de mercado", "descobrir quem são os seus clientes, o que precisam e quanto vão pagar."]],
          slides: [
            { title: "A IA faz o rascunho, as fontes oficiais verificam", bullets: ["IA: planear perguntas e pesquisa", "Guias oficiais: confirmar os dados"] },
            { title: "Country Commercial Guides", bullets: ["Da International Trade Administration", "Preparados por funcionários das embaixadas dos EUA", "Mercado, regras, oportunidades, costumes"] },
            { title: "Abrir a empresa no país", bullets: ["Quénia: Business Registration Service", "Nigéria: Corporate Affairs Commission", "Leia você mesmo os passos e as taxas atuais"] },
            { title: "Fale com clientes", bullets: ["Primeiro, cinco conversas reais", "Antes de gastar dinheiro a sério"] }
          ],
          sources: [
            { name: "International Trade Administration: Country Commercial Guides", url: "https://www.trade.gov/country-commercial-guides" },
            { name: "International Trade Administration: soluções para exportar (U.S. Commercial Service)", url: "https://www.trade.gov/export-solutions" },
            { name: "Quénia: Business Registration Service", url: "https://brs.go.ke/" },
            { name: "Nigéria: Corporate Affairs Commission", url: "https://www.cac.gov.ng/" }
          ],
          tryIt: "Peça a um assistente de IA as dez perguntas que tem de responder antes de começar a sua ideia. Depois abra o Country Commercial Guide do seu país no trade.gov e responda a duas delas com ele.",
          youCanNow: "planear a pesquisa de mercado com IA e verificar os dados principais em guias e registos oficiais.",
          quickCheck: [
            { objective: "O3", q: "O que é um Country Commercial Guide?", options: ["Um guia de viagem para turistas", "Um guia escrito por uma IA", "Uma lista de hotéis", "Um guia oficial para fazer negócios num país, da International Trade Administration"], answer: 3, why: "Os Country Commercial Guides são guias oficiais de mercado preparados por funcionários das embaixadas dos EUA e publicados pela ITA." },
            { objective: "O3", q: "A IA diz-lhe os passos para registar uma empresa no Quénia. O que faz?", options: ["Segue-os como estão", "Verifica-os no Business Registration Service do Quénia", "Pergunta a um amigo na internet", "Não faz o registo"], answer: 1, why: "Os passos de registo vêm do registo oficial do próprio país." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar a oportunidade",
        questions: [
          { objective: "O1", q: "A melhor descrição de uma economia emergente é:", options: ["Um país cuja economia cresce e muda depressa", "Um país sem negócios", "Qualquer país que é uma ilha", "Um país sem telefones"], answer: 0, why: "As economias emergentes crescem e mudam depressa." },
          { objective: "O1", q: "O que é dinheiro móvel?", options: ["Dinheiro guardado num carro", "Enviar, receber e guardar dinheiro no telefone", "Um tipo de cartão de crédito", "Um programa do governo dos EUA"], answer: 1, why: "Serviços como o M-Pesa deixam as pessoas pagar pelo telefone, muitas vezes sem conta bancária." },
          { objective: "O2", q: "Um antigo sargento de logística quer uma ideia de negócio. O melhor ponto de partida é:", options: ["O que está na moda na internet", "A ideia com o preço mais alto", "Uma competência sua ligada a um problema local real", "Copiar a ideia de um amigo"], answer: 2, why: "As boas ideias resolvem problemas reais que as pessoas pagam para resolver." },
          { objective: "O3", q: "Quem prepara os Country Commercial Guides?", options: ["Uma empresa de IA", "Um grupo de redes sociais", "Jornais locais", "Funcionários das embaixadas dos EUA, com publicação da International Trade Administration"], answer: 3, why: "A International Trade Administration publica-os, e são preparados por funcionários das embaixadas dos EUA." },
          { objective: "O3", q: "Onde verifica os passos para registar uma empresa na Nigéria?", options: ["Na Corporate Affairs Commission (CAC)", "Num anúncio que aparece no ecrã", "Só num chatbot de IA", "Num site de um estado dos EUA"], answer: 0, why: "A CAC é o registo oficial de empresas da Nigéria." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear o negócio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever um modelo de negócio de uma página",
          minutes: 6,
          goal: "Escrever um modelo de negócio de uma página com a ajuda da IA.",
          text: [
            "Um modelo de negócio de uma página responde às perguntas principais numa só página: Quem é o cliente? Que problema tem? Qual é a sua solução? Porquê você (as suas competências e a sua vantagem)? Como vai chegar aos clientes? Como vai ganhar dinheiro? Quais são os seus custos principais?",
            "Dê à IA a sua ideia numa frase e as suas notas, e depois peça: \"Transforme isto num modelo de negócio de uma página com estes títulos: cliente, problema, solução, porquê eu, canais, receitas, custos. Duas ou três linhas em cada um.\"",
            "Leia com olhar crítico. Se a IA diz \"os agricultores vão pagar com gosto\", pergunte a si mesmo: algum agricultor me disse isso? Troque os palpites pelo que aprendeu com clientes reais e marque o resto como \"a testar\"."
          ],
          steps: ["Dê à IA a sua ideia numa frase e as notas da pesquisa.", "Peça um modelo de uma página com cliente, problema, solução, porquê eu, canais, receitas e custos.", "Troque os palpites pelo que os clientes reais lhe disseram.", "Marque tudo o que não está provado como \"a testar\"."],
          words: [["Modelo de negócio", "como um negócio cria valor para os clientes e ganha dinheiro."], ["Receitas", "o dinheiro que entra vindo dos clientes."], ["Canal", "a forma como chega aos clientes e lhes vende."]],
          slides: [
            { title: "Uma página, sete perguntas", bullets: ["Cliente e problema", "Solução e porquê você", "Canais e receitas", "Custos"] },
            { title: "Deixe a IA fazer o rascunho", bullets: ["Dê a sua ideia e as suas notas", "Peça duas ou três linhas por título"] },
            { title: "Depois questione-o", bullets: ["Algum cliente real disse isso?", "Troque palpites por factos", "Marque o resto \"a testar\""] }
          ],
          tryIt: "Peça a um assistente de IA para transformar a sua ideia numa frase num modelo de negócio de uma página com os sete títulos. Marque cada linha que é um palpite como \"a testar\".",
          youCanNow: "escrever um modelo de negócio de uma página e separar os factos dos palpites.",
          quickCheck: [
            { objective: "O4", q: "Num modelo de negócio, o que são as receitas?", options: ["O dinheiro que gasta em equipamento", "As suas poupanças totais", "O dinheiro que entra vindo dos clientes", "O número de funcionários"], answer: 2, why: "As receitas são o dinheiro que entra vindo dos clientes." },
            { objective: "O4", q: "O seu modelo diz que os clientes vão pagar $20 por mês, mas ninguém lhe disse isso. O que faz?", options: ["Marca \"a testar\" e pergunta a clientes reais", "Sobe para $40", "Deixa como facto", "Apaga a parte das receitas"], answer: 0, why: "Os palpites ficam marcados \"a testar\" até clientes reais os confirmarem." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear o dinheiro, os riscos e a lei",
          minutes: 5,
          goal: "Fazer a lista dos custos de arranque, dos três maiores riscos e de como vai reduzir cada um.",
          text: [
            "Faça a lista do que precisa para começar: equipamento, transporte, espaço, registo e licenças, um parceiro local ou funcionários, e dinheiro suficiente para funcionar vários meses antes de as vendas cobrirem os custos. Peça à IA uma lista de verificação e depois obtenha preços reais no local. Não confie nos preços que a IA adivinha.",
            "Riscos comuns: oscilações da moeda (os seus custos e preços em moedas diferentes), energia ou transporte pouco fiáveis, atrasos nos pagamentos, parceiros que não cumprem, roubo e regras que mudam. Para cada um, escreva como o vai reduzir: por exemplo, preços em moeda local revistos a cada trimestre, um gerador de reserva ou um acordo escrito.",
            "Nunca pague um suborno. Além das leis locais, a lei dos EUA chamada Foreign Corrupt Practices Act (FCPA) torna crime que pessoas dos EUA ofereçam ou paguem qualquer coisa de valor a um funcionário estrangeiro para ganhar ou manter negócios. Para contratos, impostos e registo, use um advogado ou contabilista local qualificado."
          ],
          steps: ["Peça à IA uma lista de verificação dos custos de arranque para a sua ideia.", "Obtenha preços locais reais para cada item.", "Faça a lista dos seus três maiores riscos.", "Escreva uma forma de reduzir cada risco.", "Anote que perguntas precisam de um advogado ou contabilista local."],
          words: [["Custos de arranque", "o dinheiro de que precisa antes de o negócio ganhar o suficiente para se pagar."], ["Suborno", "algo de valor dado a um funcionário para ter uma vantagem injusta; é ilegal."], ["Foreign Corrupt Practices Act", "uma lei dos EUA que torna crime subornar funcionários estrangeiros para ter negócios."]],
          slides: [
            { title: "Custos de arranque", bullets: ["Equipamento, transporte, espaço", "Registo, licenças, funcionários", "Meses de custos antes de as vendas os cobrirem"] },
            { title: "Maiores riscos e soluções", bullets: ["Oscilações da moeda: reveja os preços muitas vezes", "Energia ou transporte: tenha uma reserva", "Parceiros: acordos escritos"] },
            { title: "Fique dentro da lei", bullets: ["Nunca pague um suborno", "A FCPA dos EUA torna crime o suborno no estrangeiro", "Use um advogado ou contabilista local qualificado"] }
          ],
          sources: [{ name: "Departamento de Justiça dos EUA: Foreign Corrupt Practices Act", url: "https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act" }],
          tryIt: "Peça a um assistente de IA uma lista de verificação dos custos de arranque para a sua ideia. Depois escreva os seus três maiores riscos e uma forma de reduzir cada um.",
          youCanNow: "planear os custos de arranque, indicar os seus maiores riscos com soluções e conhecer os limites legais que não pode ultrapassar.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um custo de arranque?", options: ["O dinheiro que os clientes lhe pagam", "Taxas de registo e equipamento", "O número de telefone de um cliente", "A frase da sua ideia de negócio"], answer: 1, why: "Os custos de arranque incluem equipamento, registo, funcionários e meses de custos de funcionamento." },
            { objective: "O5", q: "Um funcionário diz que um pequeno pagamento em dinheiro vai acelerar a sua licença. O que faz?", options: ["Paga às escondidas", "Paga através de um amigo", "Promete pagar mais tarde", "Recusa, porque o suborno é ilegal, incluindo pela FCPA dos EUA"], answer: 3, why: "Pagar a um funcionário estrangeiro para ter negócios é crime pela Foreign Corrupt Practices Act dos EUA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Testar a ideia e obter ajuda oficial",
          minutes: 5,
          goal: "Planear um teste pequeno e barato da sua ideia e escolher um programa oficial de ajuda para contactar.",
          text: [
            "Antes de ir viver para o estrangeiro ou gastar as suas poupanças, teste em pequeno. Faça um piloto: sirva dez clientes, venda um pequeno lote ou trabalhe com um negócio local durante um mês. Registe o que os clientes pagam, quanto lhe custa e o que corre mal. A IA pode ajudar a criar uma folha de registo simples.",
            "Ajuda oficial gratuita: o Boots to Business da SBA é um curso de empreendedorismo oferecido pelo Transition Assistance Program (programa de transição para a vida civil) a militares, à Guarda Nacional, à Reserva e aos cônjuges de militares; o Boots to Business Reboot alarga-o a veteranos de todas as épocas. Os Veterans Business Outreach Centers oferecem workshops, mentoria e ajuda com planos de negócio. O U.S. Commercial Service ajuda as empresas dos EUA que vendem no estrangeiro.",
            "Leve-lhes o seu modelo de uma página. Um mentor que já fez negócios no estrangeiro pode poupá-lo a erros caros."
          ],
          steps: ["Desenhe um piloto pequeno: quantos clientes, quanto tempo, o que medir.", "Peça à IA uma folha de registo simples: vendas, custos, problemas.", "Escolha um programa oficial de ajuda.", "Contacte-o e leve o seu modelo de uma página."],
          words: [["Piloto", "um teste pequeno e curto de uma ideia de negócio antes de apostar tudo."], ["Boots to Business", "um curso gratuito de empreendedorismo da SBA para militares, veteranos e cônjuges de militares."], ["Veterans Business Outreach Center", "um centro apoiado pela SBA que dá formação e mentoria em negócios a veteranos."]],
          slides: [
            { title: "Primeiro, teste em pequeno", bullets: ["Dez clientes, um lote ou um mês", "Registe vendas, custos e problemas", "A IA pode criar a folha de registo"] },
            { title: "Ajuda oficial gratuita", bullets: ["SBA Boots to Business e Reboot", "Veterans Business Outreach Centers", "U.S. Commercial Service para vender no estrangeiro"] },
            { title: "Leve o seu modelo de uma página", bullets: ["Peça um mentor que já o fez", "Aprenda antes de gastar muito"] }
          ],
          sources: [
            { name: "SBA: Boots to Business", url: "https://www.sba.gov/sba-learning-platform/boots-business" },
            { name: "SBA: empresas de veteranos (VBOCs, Boots to Business Reboot)", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "International Trade Administration: soluções para exportar", url: "https://www.trade.gov/export-solutions" }
          ],
          tryIt: "Tarefa final: termine o seu modelo de negócio de uma página com cliente, problema, solução e encaixe das competências militares, canais, receitas, custos e três maiores riscos. Acrescente um plano de pesquisa que indique o Country Commercial Guide, o registo de empresas do país e um programa oficial de ajuda que vai contactar.",
          youCanNow: "planear um teste pequeno da sua ideia de negócio e obter ajuda oficial gratuita para a construir.",
          quickCheck: [
            { objective: "O6", q: "O que é um piloto?", options: ["Um teste pequeno e curto da sua ideia", "Um lançamento completo em todas as cidades", "Um empréstimo para negócios", "Um tipo de licença"], answer: 0, why: "Um piloto testa a sua ideia com pouco dinheiro antes de gastar dinheiro a sério." },
            { objective: "O6", q: "Terminou o seu modelo de uma página. Que ajuda oficial acrescenta ao seu plano?", options: ["Um seminário pago de um anúncio na internet", "Nenhuma ajuda, só começar", "O Boots to Business ou outro programa oficial gratuito", "Um desconhecido que promete lucros rápidos"], answer: 2, why: "Programas oficiais gratuitos como o Boots to Business da SBA ensinam veteranos a abrir negócios." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear o negócio",
        questions: [
          { objective: "O4", q: "Qual destes faz parte de um modelo de negócio de uma página?", options: ["A sua cor preferida", "O cliente, o problema e como ganha dinheiro", "A lista das suas condecorações militares", "A palavra-passe do seu banco"], answer: 1, why: "O modelo responde a quem, que problema, que solução e como ganha dinheiro." },
          { objective: "O4", q: "O modelo da IA diz que os clientes \"vão pagar com gosto\". Nenhum cliente lhe disse isso. Você:", options: ["Deixa como facto", "Apaga o modelo todo", "Marca \"a testar\" e pergunta a clientes reais", "Duplica o preço"], answer: 2, why: "Os palpites têm de ser testados com clientes reais." },
          { objective: "O5", q: "De onde devem vir os preços dos custos de arranque?", options: ["Dos palpites da IA", "Do palpite de um amigo", "Das notícias do ano passado", "De orçamentos reais de fornecedores locais"], answer: 3, why: "Os preços que a IA adivinha podem estar muito longe; obtenha preços locais reais." },
          { objective: "O5", q: "Um funcionário dá a entender que um pagamento aceleraria a sua licença. Você:", options: ["Recusa; o suborno é ilegal, incluindo pela FCPA dos EUA", "Paga uma pequena quantia", "Paga através de um amigo", "Pergunta à IA como esconder"], answer: 0, why: "A FCPA torna crime que pessoas dos EUA paguem a funcionários estrangeiros para ter negócios." },
          { objective: "O6", q: "Que programa gratuito da SBA ensina empreendedorismo a militares em transição para a vida civil?", options: ["VET TEC 2.0", "Boots to Business", "TRICARE", "The Military Crosswalk"], answer: 1, why: "O Boots to Business é o curso de empreendedorismo da SBA no TAP (programa de transição)." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Empreendedorismo em Economias Emergentes",
    questions: [
      { objective: "O1", q: "Qual destas é uma oportunidade comum nas economias emergentes?", options: ["Populações a diminuir", "Crescimento rápido do telefone e do dinheiro móvel", "Nenhuma necessidade de serviços", "Regras fixas que nunca mudam"], answer: 1, why: "O crescimento do telefone e do dinheiro móvel abre novas formas de chegar aos clientes." },
      { objective: "O1", q: "Qual destes é um desafio comum nas economias emergentes?", options: ["Poucos clientes em todo o lado", "Nenhum telefone", "Oscilações da moeda e regras que mudam", "Nenhuma pessoa jovem"], answer: 2, why: "As oscilações da moeda e as regras que mudam são riscos comuns." },
      { objective: "O1", q: "O M-Pesa no Quénia é um exemplo de:", options: ["Um assalto a um banco", "Um registo do governo", "Uma unidade militar", "Dinheiro móvel"], answer: 3, why: "O M-Pesa deixa as pessoas pagar e guardar dinheiro pelo telefone." },
      { objective: "O2", q: "Uma ideia de negócio forte:", options: ["Resolve um problema real que as pessoas pagam para resolver", "Copia o que está na moda", "Não tem clientes", "Não precisa de ser testada"], answer: 0, why: "Os clientes pagam para resolver problemas reais." },
      { objective: "O2", q: "Que competência militar se encaixa muitas vezes nos mercados emergentes?", options: ["Nenhuma", "Logística, abastecimento e armazenamento", "Só marchar", "Só papelada"], answer: 1, why: "Transportar e guardar mercadorias é uma falha comum." },
      { objective: "O2", q: "Uma ideia de negócio numa frase deve incluir:", options: ["O seu posto", "O seu número da Segurança Social (SSN)", "Serviço, cliente, lugar e como pagam", "Só o preço"], answer: 2, why: "Estas quatro partes tornam a ideia clara." },
      { objective: "O2", q: "Quando a IA lhe dá ideias de negócio, quem escolhe?", options: ["A IA", "Um desconhecido na internet", "A primeira ideia da lista", "Você"], answer: 3, why: "A IA sugere; você decide com base nas suas competências e no mercado." },
      { objective: "O3", q: "Para que deve usar a IA na pesquisa de mercado?", options: ["Planear perguntas e fazer rascunhos, e depois verificar os dados em fontes oficiais", "Respostas jurídicas finais", "Preços locais exatos", "Registar a sua empresa"], answer: 0, why: "A IA faz os rascunhos; as fontes oficiais e os clientes reais confirmam." },
      { objective: "O3", q: "Os Country Commercial Guides são publicados por:", options: ["Um blogue privado", "A International Trade Administration", "O VA", "Uma empresa de IA"], answer: 1, why: "Vêm da International Trade Administration do Departamento do Comércio dos EUA." },
      { objective: "O3", q: "O serviço oficial do Quénia para registar um negócio é:", options: ["O VA", "A SBA", "O Business Registration Service", "A Corporate Affairs Commission"], answer: 2, why: "O Business Registration Service do Quénia trata do registo de empresas." },
      { objective: "O3", q: "Antes de gastar dinheiro a sério, deve falar com:", options: ["Ninguém", "Só a família", "Só a IA", "Pelo menos cinco possíveis clientes"], answer: 3, why: "Os clientes reais dizem-lhe se o problema e o preço são reais." },
      { objective: "O4", q: "As receitas são:", options: ["O dinheiro que entra vindo dos clientes", "O dinheiro que gasta na renda", "Um tipo de empréstimo", "Um formulário de impostos"], answer: 0, why: "As receitas são o dinheiro das vendas." },
      { objective: "O4", q: "Num modelo de negócio, um \"canal\" é:", options: ["Uma estação de televisão", "A forma como chega aos clientes e lhes vende", "Um rio", "Uma conta bancária"], answer: 1, why: "Os canais são a forma como os clientes o encontram e compram a você." },
      { objective: "O4", q: "As linhas do seu modelo que nenhum cliente confirmou devem ser:", options: ["Apagadas", "Aumentadas", "Marcadas \"a testar\"", "Tratadas como factos"], answer: 2, why: "Os palpites não provados precisam de ser testados." },
      { objective: "O5", q: "Os custos de arranque incluem:", options: ["Só a primeira venda", "Só a conta do telefone", "Nada; os negócios são grátis", "Equipamento, registo, funcionários e meses de custos de funcionamento"], answer: 3, why: "Precisa de dinheiro para funcionar até as vendas cobrirem os custos." },
      { objective: "O5", q: "Uma forma de reduzir o risco da moeda é:", options: ["Rever os seus preços muitas vezes", "Ignorar as taxas de câmbio", "Manter todos os preços fixos para sempre", "Pagar com cartões-presente"], answer: 0, why: "Rever os preços com regularidade ajuda a acompanhar as oscilações da moeda." },
      { objective: "O5", q: "A Foreign Corrupt Practices Act dos EUA torna crime:", options: ["Abrir um negócio no estrangeiro", "Pagar a um funcionário estrangeiro para ganhar ou manter negócios", "Usar dinheiro móvel", "Contratar funcionários locais"], answer: 1, why: "A FCPA proíbe subornar funcionários estrangeiros para ter negócios." },
      { objective: "O5", q: "Para questões de contratos, impostos e registo, deve usar:", options: ["Só a IA", "Uma sondagem nas redes sociais", "Um advogado ou contabilista local qualificado", "Palpites"], answer: 2, why: "As regras jurídicas e fiscais precisam de um profissional qualificado." },
      { objective: "O6", q: "Um piloto é:", options: ["Ir viver para o estrangeiro com as suas poupanças", "Um empréstimo", "Um formulário do governo", "Um teste pequeno e curto da sua ideia"], answer: 3, why: "Um piloto testa a ideia antes de apostar tudo." },
      { objective: "O6", q: "O Boots to Business Reboot alarga o curso da SBA a:", options: ["Veteranos de todas as épocas", "Só oficiais no ativo", "Só cidadãos estrangeiros", "Ninguém"], answer: 0, why: "A SBA diz que o Reboot alarga o Boots to Business a veteranos de todas as épocas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 3, 5, 7, 8, 11, 13, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Cliente, problema e encaixe", objective: "O2", notYet: "O cliente ou o problema é vago, ou a competência militar não está ligada.", meets: "Um cliente indicado, um problema real, uma solução e como uma competência militar se encaixa.", exceeds: "O aluno sabe dizer como sabe que o problema é real." },
      { name: "Modelo de negócio completo", objective: "O4", notYet: "Faltam os canais, as receitas ou os custos.", meets: "As sete partes numa página, com os palpites marcados \"a testar\".", exceeds: "Cada linha \"a testar\" tem uma forma de a testar." },
      { name: "Riscos", objective: "O5", notYet: "Menos de três riscos, ou nenhuma forma de os reduzir.", meets: "Os três maiores riscos, cada um com uma forma de o reduzir, e nenhum plano que dependa de um suborno.", exceeds: "Os riscos incluem a moeda e as regras, com um profissional indicado a quem perguntar." },
      { name: "Plano de pesquisa", objective: "O3", notYet: "Nenhuma fonte oficial indicada.", meets: "Indica o Country Commercial Guide e a agência de registo de empresas do país.", exceeds: "Mostra duas perguntas de pesquisa já respondidas com essas fontes." },
      { name: "Ajuda oficial", objective: "O6", notYet: "Nenhum programa de ajuda indicado.", meets: "Um programa oficial de ajuda gratuito que o aluno vai contactar.", exceeds: "Inclui uma data para o contactar e um piloto pequeno para fazer primeiro." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que falam com pelo menos cinco possíveis clientes em 30 dias (inquérito de seguimento)",
      "Alunos que se inscrevem no Boots to Business ou noutro programa oficial em 90 dias",
      "Alunos que fazem um piloto pequeno ou registam um negócio em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou smartphone com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os Country Commercial Guides gratuitos do trade.gov e o site do registo de empresas do país escolhido",
      "Papel ou um documento para o modelo de negócio de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Deixe os alunos escolher países que conhecem; junte em grupo os alunos que escolheram a mesma região para partilharem fontes.",
      "Insista que cada dado sobre registo, impostos ou licenças vem de uma fonte oficial, não da IA.",
      "Deixe claro que os subornos nunca fazem parte de um plano, e que as questões de contratos e impostos vão para um advogado ou contabilista local qualificado.",
      "Avalie o modelo de negócio final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Indique aos alunos o Boots to Business da SBA e os Veterans Business Outreach Centers como próximos passos."
    ]
  }
};
