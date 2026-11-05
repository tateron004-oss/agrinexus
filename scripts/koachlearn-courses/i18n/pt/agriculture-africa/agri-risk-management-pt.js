"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-risk-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// No investment advice and no recommendation to trade. All money figures are examples except the confirmed Cote d'Ivoire cocoa prices.

const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), Ministry of Agriculture (Ministério da Agricultura do Quénia): preços de mercado", url: "https://kamis.kilimo.go.ke" };
const NBS = { name: "National Bureau of Statistics, Nigeria (Instituto Nacional de Estatística da Nigéria: preços mensais dos alimentos e inflação)", url: "https://nigerianstat.gov.ng" };
const CI_COCOA = { name: "Financial Afrik (5 de março de 2026): a Costa do Marfim fixa o preço ao produtor do cacau da campanha intermédia em 1.200 FCFA/kg", url: "https://www.financialafrik.com/2026/03/05/cote-divoire-le-prix-de-la-campagne-intermediaire-de-cacao-fixe-a-1-200-fcfa-kg/" };
const PICS = { name: "Purdue University: sacos herméticos Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const NCX = { name: "Nigeria Commodity Exchange (NCX, Bolsa de Mercadorias da Nigéria): sobre nós (licenciada pela Securities and Exchange Commission)", url: "https://ncx.com.ng/about-us/" };
const GCX = { name: "Ghana Commodity Exchange (GCX, Bolsa de Mercadorias do Gana), site oficial", url: "https://www.gcx.com.gh" };
const GCX_FIRST = { name: "MyJoyOnline: a Ghana Commodity Exchange faz a primeira transação eletrónica (contratos à vista de milho, 2018)", url: "https://www.myjoyonline.com/ghana-commodity-exchange-executes-first-electronic-trade/" };
const ACRE = { name: "ACRE Africa: seguro por índice meteorológico (um intermediário de seguros autorizado)", url: "https://acreafrica.com/crop-insurance/weather-index-insurance/" };
const IBLI = { name: "ILRI: Index-Based Livestock Insurance (IBLI, seguro de gado por índice) e o Kenya Livestock Insurance Programme (KLIP)", url: "https://ibli.ilri.org/" };
const ILRI_KLIP = { name: "ILRI: o governo do Quénia dá aos pastores seguro de gado com imagens de satélite", url: "https://www.ilri.org/news/eyes-sky-kenyas-government-provides-pastoralists-livestock-insurance-through-satellite-imagery" };
const CNAAS = { name: "CNAAS, Compagnie Nationale d'Assurance Agricole du Sénégal (companhia nacional de seguros agrícolas do Senegal)", url: "https://www.cnaas.sn" };
const BCEAO = { name: "BCEAO, Banco Central dos Estados da África Ocidental: principais indicadores, incluindo a inflação", url: "https://www.bceao.int/fr/content/principaux-indicateurs-et-taux-directeurs" };
const CBK = { name: "Central Bank of Kenya (Banco Central do Quénia: inflação e instituições licenciadas)", url: "https://www.centralbank.go.ke" };
const SASRA = { name: "SASRA, Quénia: lista das SACCO de depósitos licenciadas", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };

module.exports = {
  id: "agri-risk-management-pt",
  lang: "pt",
  translationOf: "agri-risk-management",
  category: "Agriculture (Africa)",
  name: "Gestão do Risco Agrícola: Preços, Clima e Seguros",
  skills: "Classificar os riscos da machamba num registo de riscos, Acompanhar os preços e ler as tendências do mercado, Repartir o risco com diversificação, venda por etapas e armazenamento, Avaliar contratos a prazo e a cobertura de risco, Verificar uma oferta de seguro por índice, Proteger as poupanças da inflação",
  outcome: "fazer a lista dos riscos da sua machamba e classificá-los, acompanhar os preços e ler a sua tendência, decidir quando compensa armazenar e vender por etapas, verificar um contrato de preço fixo e uma oferta de seguro por índice antes de assinar e proteger melhor as suas poupanças da inflação, tudo escrito num plano de riscos da machamba de uma página.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, criadores de gado, jovens empreendedores agrícolas, líderes de cooperativas e extensionistas no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim e em toda a África. O mau tempo, a queda dos preços, os animais doentes e a subida dos custos podem acabar com o trabalho de um ano. Não pode eliminar o risco, mas pode vê-lo chegar, reparti-lo e passar uma parte para outros.",
    "O Capítulo 1 trata de ver e repartir o risco: os tipos de risco na machamba e um registo de riscos, as oscilações dos preços e as tendências do mercado, e repartir o risco com diversificação, venda por etapas e armazenamento. O Capítulo 2 trata de passar o risco para outros e proteger o seu dinheiro: contratos a prazo e de preço fixo e o que quer dizer cobertura de risco numa bolsa de mercadorias, seguros de culturas e de gado por índice, e a inflação e as poupanças.",
    "Este curso explica como funcionam os contratos, as bolsas, os seguros e as poupanças, e os seus riscos. Não dá conselhos de investimento e não recomenda negociar em nenhuma bolsa. Leia cada contrato e cada apólice até ao fim, verifique se a empresa é licenciada e pergunte a um conselheiro de confiança, como a sua cooperativa, o extensionista ou um advogado, antes de assinar. Os valores em dinheiro são exemplos, a não ser que se indique uma fonte."
  ],
  finalTask: "Escreva um plano de riscos de uma página para a sua machamba (ou uma machamba de exemplo): os seus cinco riscos principais classificados por probabilidade e impacto, com uma ação para cada um; um registo de preços de quatro semanas para a sua cultura ou animal principal, de pelo menos duas fontes, com a tendência que vê; um plano de venda que diz quanto vai vender na colheita e quanto vai armazenar, com o preço de equilíbrio do armazenamento; as perguntas que vai fazer antes de assinar um contrato de preço fixo ou comprar um seguro por índice; e como vai proteger melhor as suas poupanças da inflação.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, pastores, jovens empreendedores agrícolas, líderes de cooperativas e extensionistas no Quénia, na Nigéria, no Gana e na África Ocidental francófona, que cultivam milho, arroz, mapira, feijão, amendoim, tomate, café e cacau, ou criam bois, cabritos, porcos, aves ou peixe.",
    startingPoint: "Sabem por experiência que o clima, os preços e as doenças podem estragar uma época. A maioria vende na colheita ao primeiro comprador, guarda as poupanças em dinheiro, animais ou cereal, e nunca leu uma apólice de seguro nem um contrato de preço fixo. Alguns já ouviram falar de bolsas de mercadorias ou de seguros por índice, mas não sabem como funcionam.",
    gap: "Sem um plano, uma seca, uma queda de preços ou um surto de doença podem obrigar os agricultores a vender animais e terra, pedir empréstimos caros ou deixar a agricultura. Os agricultores que acompanham os preços, repartem o risco, leem as condições dos contratos e dos seguros e protegem as suas poupanças recuperam mais depressa e ganham mais confiança dos compradores e de quem empresta.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra de finanças é explicada",
      "Aparelhos: um telefone simples para preços por SMS, rádio ou chamadas; um caderno para o registo de preços",
      "Tempo: lições de 5 a 6 minutos, que cabem no trabalho da machamba",
      "Os seguros, as bolsas e os programas variam de país para país e mudam; os alunos verificam a oferta atual e a entidade reguladora",
      "Nenhum conselho de investimento e nenhuma recomendação para negociar; os alunos perguntam a um conselheiro de confiança antes de assinar"
    ],
    prerequisites: "Nenhum. Os cursos \"Agronegócio e Gestão da Machamba\" e \"Contabilidade Agrícola e Gestão de Investimentos\" (preço de equilíbrio) ajudam com as contas."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Pensando na sua própria machamba e família", action: "fazer a lista dos principais riscos que enfrenta e classificá-los num registo de riscos pela probabilidade e pelo dano que fariam", standard: "com pelo menos um risco de cada tipo (produção, mercado, dinheiro, regras e pessoas) e uma ação para cada um dos cinco principais" },
    { id: "O2", condition: "Para a sua cultura ou animal principal, durante quatro semanas", action: "anotar os preços todas as semanas de pelo menos duas fontes, incluindo um serviço oficial de informação de mercado onde exista, e descrever a tendência", standard: "com o mesmo produto, qualidade e unidade todas as semanas" },
    { id: "O3", condition: "Com uma colheita, o preço de hoje, um preço esperado mais tarde e os custos de armazenamento", action: "calcular o preço de equilíbrio do armazenamento e escrever um plano para vender por etapas e repartir o risco", standard: "com as contas certas e as necessidades de dinheiro na colheita cobertas" },
    { id: "O4", condition: "Com uma oferta de contrato a prazo ou de preço fixo", action: "fazer a lista das condições a verificar e explicar o que ganha e o que perde, incluindo como funciona a cobertura de risco numa bolsa de mercadorias", standard: "nomeando pelo menos cinco condições, um ganho e um risco" },
    { id: "O5", condition: "Com uma oferta de seguro de culturas ou de gado por índice", action: "verificar o índice, o gatilho, o prémio, o risco de base e a licença da seguradora", standard: "antes de pagar, anotando a resposta a cada ponto" },
    { id: "O6", condition: "Com as suas poupanças e a taxa de inflação atual", action: "comparar pelo menos três formas de guardar poupanças e escolher uma combinação que as proteja da inflação e do roubo", standard: "nomeando um risco para cada forma e verificando se a SACCO, o banco ou a instituição de microfinanças é licenciado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ver e repartir o risco",
      lessons: [
        {
          title: "Os tipos de risco na machamba e um registo de riscos",
          objectives: ["O1"],
          minutes: 5,
          goal: "Fazer a lista dos principais riscos da sua machamba e classificá-los num registo de riscos simples.",
          text: [
            "Os riscos da machamba são de cinco tipos. Riscos de produção: seca, cheias, pragas como a lagarta-do-funil-do-milho, doenças nas culturas e nos animais, roubo. Riscos de mercado: queda dos preços, compradores que não pagam ou não vêm buscar, subida dos preços dos insumos. Riscos de dinheiro: dívidas que não consegue pagar, perda de poupanças, inflação, taxas de câmbio nas exportações como o café e o cacau. Riscos de regras: novos impostos, proibições de exportação, mudanças nas regras da terra ou do mercado. Riscos de pessoas: doença, ferimento ou morte na família, ou perder um trabalhador importante.",
            "Um registo de riscos é uma tabela com uma linha para cada risco. Para cada um, dê uma nota à probabilidade (1 baixa, 2 média, 3 alta) e ao dano que faria (1 pequeno, 2 médio, 3 grande). Multiplique as duas notas para ter uma pontuação de 1 a 9. As pontuações mais altas vêm primeiro.",
            "Para cada risco principal, escolha uma ação: evitá-lo (não plantar tomate no mês mais chuvoso), reduzi-lo (semente tolerante à seca, vacinas como o veterinário aconselhar, armazenamento), partilhá-lo ou passá-lo (seguro, um contrato, uma cooperativa), ou aceitá-lo e guardar poupanças para ele. Reveja o registo antes de cada época."
          ],
          steps: ["Faça a lista dos riscos de cada tipo: produção, mercado, dinheiro, regras, pessoas.", "Dê uma nota à probabilidade de cada um: 1, 2 ou 3.", "Dê uma nota ao dano que cada um faria: 1, 2 ou 3.", "Multiplique as notas e classifique os riscos.", "Para os cinco principais, escolha evitar, reduzir, partilhar ou aceitar, e uma ação.", "Reveja antes de cada época."],
          words: [["Risco", "algo que pode acontecer e que prejudicaria a sua machamba ou o seu rendimento."], ["Registo de riscos", "uma tabela com os seus riscos, a probabilidade e o dano de cada um, e o que vai fazer."], ["Probabilidade", "a possibilidade de uma coisa acontecer."], ["Impacto", "o dano que faria se acontecesse."]],
          slides: [
            { title: "Cinco tipos de risco na machamba", bullets: ["Produção: clima, pragas, doenças, roubo", "Mercado: preços, compradores, custo dos insumos", "Riscos de dinheiro, de regras e de pessoas"] },
            { title: "Dê uma nota a cada risco", bullets: ["Probabilidade 1-3 x impacto 1-3 = pontuação 1-9", "As pontuações mais altas primeiro"] },
            { title: "Quatro formas de responder", bullets: ["Evitá-lo", "Reduzi-lo", "Partilhá-lo ou passá-lo: seguro, contratos, grupos", "Aceitá-lo e guardar poupanças para ele"] }
          ],
          tryIt: "Escreva um registo de riscos para a sua machamba com pelo menos oito riscos dos cinco tipos. Dê nota a cada um, classifique-os e escreva uma ação de evitar, reduzir, partilhar ou aceitar para os cinco principais.",
          youCanNow: "fazer a lista dos riscos da sua machamba, classificá-los e escolher uma ação para os mais graves.",
          quickCheck: [
            { objective: "O1", q: "Os preços do milho caem para metade na colheita. Que tipo de risco é este?", options: ["Um risco de produção", "Um risco de pessoas", "Um risco de mercado", "Um risco de regras"], answer: 2, why: "As mudanças de preço são riscos de mercado." },
            { objective: "O1", q: "Um risco tem probabilidade 3 e impacto 2. Qual é a sua pontuação?", options: ["6", "5", "1", "9"], answer: 0, why: "3 x 2 = 6." }
          ]
        },
        {
          title: "As oscilações dos preços e a leitura das tendências do mercado",
          objectives: ["O2"],
          minutes: 6,
          goal: "Manter um registo semanal de preços de pelo menos duas fontes e descrever a tendência.",
          text: [
            "Os preços das culturas e dos animais sobem e descem com a época, o clima, as importações e exportações, o custo do combustível e a procura. Muitos alimentos básicos têm o preço mais baixo na colheita, quando todos vendem, e mais alto nos meses antes da colheita seguinte. Até um preço fixado pelo governo pode mudar muito de uma época para outra: na Costa do Marfim, o preço garantido ao produtor do cacau era de 2.800 francos CFA por kg na campanha principal de 2025-2026, e o governo fixou-o em 1.200 por kg para a campanha intermédia a partir de março de 2026, depois de os preços mundiais do cacau caírem.",
            "Use os serviços oficiais de informação de mercado onde existirem. No Quénia, o KAMIS do Ministério da Agricultura publica os preços de mercado. Na Nigéria, o Instituto Nacional de Estatística (National Bureau of Statistics, NBS) publica um relatório mensal dos preços dos alimentos por estado. No Gana, a Bolsa de Mercadorias do Gana (GCX) publica os preços das suas transações. Junte as informações de mercado da rádio, a sua cooperativa e pelo menos dois compradores.",
            "Mantenha um registo de preços: cada semana, a data, o mercado ou a fonte, o produto, a qualidade e a unidade (por exemplo um saco de 90 kg de milho seco) e o preço. Depois de quatro semanas ou mais, veja a direção: a subir, a descer ou estável. Compare com os mesmos meses do ano passado, se puder. Uma tendência é um guia, não uma promessa: os preços podem virar depressa."
          ],
          steps: ["Escolha o seu produto principal, a qualidade e a unidade.", "Escolha pelo menos duas fontes, incluindo um serviço oficial onde exista.", "Cada semana escreva: data, fonte, produto, qualidade, unidade, preço.", "Depois de quatro semanas, marque a direção: a subir, a descer ou estável.", "Compare com os mesmos meses do ano passado.", "Partilhe o registo com o seu grupo."],
          words: [["Serviço de informação de mercado", "um serviço que recolhe e partilha os preços dos mercados, por site, SMS ou rádio."], ["Tendência", "a direção geral em que os preços se movem ao longo de várias semanas ou meses."], ["Preço ao produtor", "o preço pago ao agricultor na machamba, antes do transporte para o mercado."]],
          slides: [
            { title: "Porque os preços oscilam", bullets: ["Época, clima, importações e exportações", "Custo do combustível e procura", "Muitas vezes mais baixos na colheita"] },
            { title: "Até os preços fixados mudam", bullets: ["Cacau na Costa do Marfim: 2.800 CFA/kg, campanha principal 2025-26", "Fixado em 1.200 CFA/kg a partir de março de 2026", "Depois de os preços mundiais caírem"] },
            { title: "Onde encontrar os preços", bullets: ["Quénia: KAMIS", "Nigéria: preços mensais dos alimentos do NBS", "Gana: transações da Bolsa de Mercadorias; rádio; compradores"] },
            { title: "O seu registo semanal de preços", bullets: ["Data, fonte, produto, qualidade, unidade, preço", "Depois de 4 semanas: a subir, a descer ou estável?", "Uma tendência é um guia, não uma promessa"] }
          ],
          sources: [KAMIS, NBS, GCX, CI_COCOA],
          tryIt: "Comece hoje um registo de preços para a sua cultura ou animal principal. Escreva o preço desta semana de duas fontes, com produto, qualidade e unidade, e ponha um lembrete no telefone para o mesmo dia de cada semana.",
          youCanNow: "manter um registo semanal de preços de fontes oficiais e locais e descrever a tendência dos preços.",
          quickCheck: [
            { objective: "O2", q: "Porque escrever a qualidade e a unidade com cada preço no seu registo?", options: ["Para o registo parecer oficial", "Os compradores precisam de o ver", "Não é preciso", "Para comparar a mesma coisa todas as semanas"], answer: 3, why: "O preço de um saco de 50 kg de milho húmido não se pode comparar com o de um saco de 90 kg de milho seco." },
            { objective: "O2", q: "Em cinco semanas, o preço do tomate num mercado foi 400, 420, 450, 470, 500 por caixa. Qual é a tendência?", options: ["A descer", "A subir", "Estável", "Não se pode saber"], answer: 1, why: "Cada semana o preço é mais alto do que na semana anterior." }
          ]
        },
        {
          title: "Repartir o risco: diversificação, venda por etapas e armazenamento",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular se compensa armazenar e escrever um plano para vender por etapas.",
          text: [
            "Diversificar quer dizer não pôr os ovos todos no mesmo cesto: duas ou mais culturas com épocas ou mercados diferentes, alguns cabritos ou galinhas, peixe, árvores ou um rendimento fora da machamba. Quando uma falha, outra pode ainda render. Não se espalhe tanto que não consiga gerir bem nenhuma delas.",
            "Vender por etapas quer dizer vender uma parte da colheita em momentos diferentes, em vez de tudo de uma vez. Por exemplo, venda um terço na colheita para pagar as propinas da escola e as dívidas, um terço dois meses depois e um terço quatro meses depois. Evita vender tudo ao preço mais baixo e evita apostar tudo num preço alto que pode não chegar.",
            "Armazenar só compensa se o preço mais tarde cobrir os custos de armazenamento e as perdas. Preço de equilíbrio do armazenamento = (preço na colheita x sacos + custos de armazenamento) / sacos que vai vender mais tarde. Exemplo (números inventados, em xelins quenianos): 10 sacos de milho, preço na colheita 3.000 por saco, custos de armazenamento 3.000 durante quatro meses (sacos herméticos, armazém, verificações). Equilíbrio = (30.000 + 3.000) / 10 = 3.300 por saco. Se o preço chegar a 4.200, ganha; se só chegar a 3.200, perde. Armazene só cereal limpo e seco em sacos herméticos ou num armazém certificado, e verifique se tem pragas e bolor."
          ],
          steps: ["Faça a lista do que mais poderia cultivar, criar ou ganhar para que uma falha não o arruíne.", "Calcule de quanto dinheiro precisa na colheita.", "Planeie vender na colheita o suficiente para esse dinheiro e armazenar o resto por etapas.", "Equilíbrio do armazenamento = (preço na colheita x sacos + custos de armazenamento) / sacos.", "Compare-o com a tendência dos preços no seu registo.", "Armazene só produtos limpos e secos, com segurança, e verifique-os."],
          words: [["Diversificação", "repartir a sua produção e o seu rendimento por várias atividades, para que uma falha não o arruíne."], ["Venda por etapas", "vender uma colheita em partes, em momentos diferentes, em vez de tudo de uma vez."], ["Preço de equilíbrio do armazenamento", "o preço mais tarde de que precisa para cobrir o preço da colheita de que abdicou mais os custos de armazenamento."], ["Saco hermético", "um saco de armazenamento fechado ao ar que impede os insetos de respirar, para o cereal ficar seguro sem químicos."]],
          slides: [
            { title: "Diversifique", bullets: ["Culturas com épocas ou mercados diferentes", "Pequenos animais, peixe, árvores, rendimento fora da machamba", "Não tantas que não as consiga gerir"] },
            { title: "Venda por etapas", bullets: ["Um terço na colheita para as necessidades de dinheiro", "Um terço após 2 meses, um terço após 4", "Nenhuma aposta de tudo ou nada no preço"] },
            { title: "Armazenar compensa? (exemplo em KES)", bullets: ["(3.000 x 10 + 3.000) / 10 = 3.300 por saco", "Preço 4.200: ganho; preço 3.200: perda", "Compare com o seu registo de preços"] },
            { title: "Armazene com segurança", bullets: ["Só cereal limpo e seco", "Sacos herméticos ou um armazém certificado", "Verifique se há pragas e bolor"] }
          ],
          sources: [PICS],
          tryIt: "Para a sua cultura principal, escreva quantos sacos ou kg espera, de quanto dinheiro precisa na colheita e quanto vai vender na colheita, depois de dois meses e depois de quatro meses. Calcule o preço de equilíbrio do armazenamento para a parte que vai armazenar.",
          youCanNow: "calcular se compensa armazenar, planear vender por etapas e repartir o risco por mais de uma atividade.",
          quickCheck: [
            { objective: "O3", q: "Preço na colheita 5.000 por saco, 20 sacos, custos de armazenamento 10.000. Qual é o preço de equilíbrio do armazenamento?", options: ["5.000", "10.500", "5.500", "500"], answer: 2, why: "(5.000 x 20 + 10.000) / 20 = 110.000 / 20 = 5.500 por saco." },
            { objective: "O3", q: "Qual é a principal vantagem de vender por etapas?", options: ["Evita vender tudo ao preço mais baixo ou apostar tudo num preço alto", "Os compradores pagam sempre mais por pequenas quantidades", "Nunca precisa de armazenar", "Elimina todo o risco de preço"], answer: 0, why: "Vender em partes reparte o risco de preço por várias datas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ver e repartir o risco",
        questions: [
          { objective: "O1", q: "Qual é um risco de produção?", options: ["Um novo imposto de exportação", "Um comprador que paga tarde", "A inflação", "A lagarta-do-funil-do-milho no seu milho"], answer: 3, why: "As pragas e o clima afetam o que produz, por isso são riscos de produção." },
          { objective: "O1", q: "Comprar um seguro por índice contra a seca é que resposta a um risco?", options: ["Evitá-lo", "Partilhá-lo ou passá-lo", "Aceitá-lo", "Ignorá-lo"], answer: 1, why: "O seguro passa uma parte da perda para a seguradora." },
          { objective: "O2", q: "Qual é um serviço oficial de preços de mercado no Quénia?", options: ["O KAMIS do Ministério da Agricultura", "O estado de WhatsApp de um comerciante", "O palpite de um vizinho", "O recibo do ano passado"], answer: 0, why: "O KAMIS é o sistema de informação de mercado do Ministério da Agricultura." },
          { objective: "O3", q: "Preço na colheita 2.000 por saco, 10 sacos, custos de armazenamento 4.000. O preço mais tarde é 2.300. Compensa armazenar?", options: ["Sim, porque 2.300 é mais do que 2.000", "Sim, armazenar compensa sempre", "Não, o equilíbrio é 2.400, por isso perde", "Não se pode calcular"], answer: 2, why: "(2.000 x 10 + 4.000) / 10 = 2.400; 2.300 fica abaixo disso." },
          { objective: "O3", q: "Um agricultor só cultiva tomate para um único comprador. O que repartiria o risco?", options: ["Plantar mais tomate para o mesmo comprador", "Juntar uma cultura de outra época e encontrar um segundo comprador", "Vender tudo no dia da colheita", "Deixar de fazer registos"], answer: 1, why: "Uma segunda cultura e um segundo comprador fazem com que uma falha não leve tudo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Passar o risco e proteger o seu dinheiro",
      lessons: [
        {
          title: "Contratos de preço fixo, cobertura de risco e bolsas de mercadorias",
          objectives: ["O4"],
          minutes: 6,
          goal: "Fazer a lista das condições a verificar num contrato de preço fixo e explicar o que é a cobertura de risco.",
          text: [
            "Um contrato a prazo ou de preço fixo é um acordo feito agora para vender uma quantidade e qualidade definidas, a um preço definido, numa data futura. Ganha certeza: sabe o seu preço antes da colheita, o que ajuda a planear e a pedir empréstimos. Abdica de algo: se o preço de mercado subir, recebe na mesma o preço acordado. Se a sua colheita falhar ou vender a outro (venda paralela), pode quebrar o contrato e ter de pagar uma multa. Antes de assinar, verifique: o produto e a qualidade, a quantidade, o preço ou como é fixado, a data e o local de entrega, quem paga o transporte, os testes de qualidade e a rejeição, a data e a forma de pagamento, e o que acontece se a colheita falhar ou o comprador não vier buscar.",
            "Fazer cobertura de risco (em inglês, \"hedging\") quer dizer tomar uma posição que ganha quando a sua colheita perde valor, para que as duas se equilibrem. Numa bolsa de mercadorias, os grandes comerciantes e as fábricas fazem isto com futuros: contratos padrão para comprar ou vender mais tarde a um preço acordado hoje. Se os preços caírem, a posição em futuros ganha enquanto a colheita rende menos; se os preços subirem, a posição em futuros perde enquanto a colheita rende mais. Precisa de um corretor, de depósitos chamados margem que podem ser exigidos de um momento para o outro, e de experiência. Pode perder dinheiro e não é coisa para tentar sem formação e conselho.",
            "Em África, a Bolsa de Mercadorias da Nigéria (NCX) é licenciada pela Comissão de Valores Mobiliários da Nigéria (Securities and Exchange Commission, SEC) e oferece comércio, descoberta de preços, armazenamento e classificação de mercadorias. A Bolsa de Mercadorias do Gana (GCX), regulada pela Comissão de Valores Mobiliários do Gana, começou o comércio eletrónico à vista de milho em 2018 e liga os agricultores a armazéns certificados. A maioria dos pequenos agricultores chega às bolsas através de uma cooperativa, de um agregador ou de um armazém certificado, e não negociando sozinha. Este curso não recomenda negociar. Quem lhe prometer lucros com o comércio de mercadorias pode ser um burlão: verifique junto da entidade reguladora dos valores mobiliários."
          ],
          steps: ["Leia o contrato todo, em voz alta com o seu grupo se possível.", "Verifique o produto, a qualidade, a quantidade, o preço, a data e o local de entrega, e o transporte.", "Verifique os testes de qualidade, a rejeição, a data e a forma de pagamento.", "Pergunte o que acontece se a colheita falhar ou o comprador não vier buscar.", "Compare o preço fixo com o seu preço de equilíbrio e o seu registo de preços.", "Pergunte à sua cooperativa, ao extensionista ou a um advogado antes de assinar."],
          words: [["Contrato a prazo", "um acordo feito agora para vender uma quantidade definida, a um preço definido, numa data futura."], ["Cobertura de risco (hedging)", "tomar uma posição que ganha quando a sua colheita perde valor, para que as perdas se equilibrem."], ["Futuros", "contratos padrão negociados numa bolsa para comprar ou vender uma mercadoria mais tarde a um preço acordado agora."], ["Bolsa de mercadorias", "um mercado regulado onde compradores e vendedores negociam culturas e outros bens com qualidades e regras acordadas."], ["Venda paralela", "vender a outra pessoa um produto prometido a um comprador."]],
          slides: [
            { title: "Contrato de preço fixo", bullets: ["Quantidade, qualidade e preço definidos para mais tarde", "Ganho: um preço conhecido para planear e pedir empréstimos", "Abdica: do extra se os preços subirem"] },
            { title: "Verifique cada condição", bullets: ["Produto, qualidade, quantidade, preço", "Data e local de entrega, transporte", "Testes de qualidade, rejeição, pagamento", "Colheita falhada; comprador que não vem buscar"] },
            { title: "O que é a cobertura de risco", bullets: ["Uma posição que ganha quando a colheita perde valor", "Os futuros precisam de corretor, margem e experiência", "Pode perder dinheiro: não é para principiantes"] },
            { title: "Bolsas em África", bullets: ["Nigéria: NCX, licenciada pela SEC", "Gana: GCX, comércio de milho à vista desde 2018", "A maioria entra por cooperativas ou armazéns"] }
          ],
          sources: [NCX, GCX, GCX_FIRST],
          tryIt: "Pegue num contrato de comprador real ou de exemplo. Escreva cada uma das oito condições dos passos e o que o contrato diz (ou \"falta\"). Depois escreva uma coisa que ganha e um risco que corre se o assinar.",
          youCanNow: "verificar um contrato de preço fixo condição a condição e explicar o que é a cobertura de risco numa bolsa de mercadorias e porque tem riscos.",
          quickCheck: [
            { objective: "O4", q: "Assina um preço fixo de 30.000 por saco. Na entrega, o preço de mercado é 36.000. Quanto recebe?", options: ["36.000 por saco", "33.000 por saco", "Nada", "30.000 por saco, o preço acordado"], answer: 3, why: "Um contrato de preço fixo paga o preço acordado mesmo que o mercado suba." },
            { objective: "O4", q: "Um desconhecido oferece-se para negociar futuros de mercadorias por você com \"lucros garantidos\". O que deve fazer?", options: ["Recusar e verificar a empresa junto da entidade reguladora dos valores mobiliários", "Enviar um pequeno depósito para testar", "Dar o seu PIN do dinheiro móvel para eles negociarem", "Assinar depressa antes de a oferta acabar"], answer: 0, why: "Ninguém pode garantir lucros no comércio; é um sinal de burla." }
          ]
        },
        {
          title: "Seguros de culturas e de gado por índice",
          objectives: ["O5"],
          minutes: 6,
          goal: "Verificar numa oferta de seguro por índice o índice, o gatilho, o prémio, o risco de base e a licença.",
          text: [
            "O seguro comum manda alguém medir a perda na sua machamba. O seguro por índice paga quando um índice passa um nível definido, chamado gatilho: por exemplo, a chuva medida por satélite ou por uma estação meteorológica fica abaixo do normal, o rendimento médio da sua zona cai, ou as imagens de satélite mostram o pasto a secar. Ninguém visita o seu campo, por isso pode ser mais barato e pagar mais depressa.",
            "Exemplos: a ACRE Africa, um intermediário de seguros autorizado com sede no Quénia, trabalha com seguradoras locais para oferecer seguros por índice meteorológico, por índice de rendimento da zona e de gado por índice, muitas vezes vendidos através de grupos de agricultores e pagos por dinheiro móvel. O governo do Quénia gere o Programa de Seguro de Gado do Quénia (KLIP), lançado em 2015 com o seguro de gado por índice desenvolvido com o ILRI (Instituto Internacional de Investigação Pecuária): o governo paga o prémio dos pastores vulneráveis registados, e os pagamentos são ativados quando as imagens de satélite mostram que o pasto está a falhar, para os criadores terem dinheiro para manter os animais vivos. No Senegal, a companhia nacional de seguros agrícolas, a CNAAS, segura culturas e gado e oferece seguros por índice.",
            "O grande ponto fraco é o risco de base: o índice pode não corresponder ao seu próprio campo. A sua cultura pode falhar por causa de uma chuva de granizo local enquanto a chuva da zona parece normal, e então não vem nenhum pagamento, ou o índice pode ser ativado quando o seu campo correu bem. Antes de pagar, pergunte: que risco está coberto, que índice e onde é medido, qual é o gatilho, quanto é o pagamento, qual é o prémio e o prazo para comprar, como e quando paga, e se a seguradora é licenciada (Quénia: Insurance Regulatory Authority; Nigéria: NAICOM; Gana: National Insurance Commission; países do franco CFA: a CIMA e a direção nacional de seguros)."
          ],
          steps: ["Pergunte que risco está coberto: seca, chuva a mais, perda de rendimento da zona ou falta de pasto.", "Pergunte qual é o índice e onde é medido.", "Pergunte o gatilho e o valor do pagamento.", "Pergunte o prémio, o prazo para comprar e como os pagamentos lhe chegam.", "Pense no risco de base: o índice corresponderia ao seu campo?", "Verifique se a seguradora ou o agente é licenciado pela entidade reguladora dos seguros."],
          words: [["Seguro por índice", "um seguro que paga quando um índice medido, como a chuva ou o pasto, passa um nível definido, e não depois de uma visita à sua machamba."], ["Gatilho", "o nível do índice que faz a seguradora pagar."], ["Prémio", "o preço que paga pela cobertura do seguro."], ["Risco de base", "a possibilidade de o índice não corresponder ao que realmente aconteceu na sua machamba."]],
          slides: [
            { title: "Como funciona o seguro por índice", bullets: ["Paga quando um índice passa o gatilho", "Chuva, rendimento da zona ou pasto por satélite", "Sem visita ao campo: mais barato e mais rápido"] },
            { title: "Exemplos", bullets: ["ACRE Africa: índice de clima, de rendimento da zona, de gado", "KLIP no Quénia: o governo paga o prémio dos criadores", "Senegal: seguros de culturas e de gado da CNAAS"] },
            { title: "Risco de base", bullets: ["O índice pode não corresponder ao seu campo", "Granizo local: perda mas sem pagamento", "Pergunte a que distância fica o ponto de medição"] },
            { title: "Pergunte antes de pagar", bullets: ["Risco, índice, gatilho, pagamento", "Prémio, prazo, como paga", "Licenciada? IRA, NAICOM, NIC, CIMA"] }
          ],
          sources: [ACRE, IBLI, ILRI_KLIP, CNAAS],
          tryIt: "Pergunte à sua cooperativa, ao vendedor de insumos ou ao extensionista sobre um seguro por índice perto de você (ou use um exemplo). Escreva as respostas às oito perguntas dos passos e escreva uma forma como o risco de base poderia afetar a sua machamba.",
          youCanNow: "verificar numa oferta de seguro por índice o índice, o gatilho, o prémio, o risco de base e a licença antes de pagar.",
          quickCheck: [
            { objective: "O5", q: "O que faz uma apólice de seguro por índice pagar?", options: ["Uma visita da seguradora ao seu campo", "O índice passar o nível do gatilho", "Você pedir um pagamento", "Qualquer perda que comunique"], answer: 1, why: "O seguro por índice paga pelo índice medido, e não por uma visita ao campo." },
            { objective: "O5", q: "O seu milho foi destruído por uma chuva de granizo local, mas o índice de chuva da zona ficou normal. Como se chama isto?", options: ["Um prémio", "Um gatilho", "Risco de base", "Cobertura de risco"], answer: 2, why: "O risco de base é quando o índice não corresponde ao que aconteceu na sua machamba." }
          ]
        },
        {
          title: "A inflação e as suas poupanças",
          objectives: ["O6"],
          minutes: 5,
          goal: "Comparar formas de guardar poupanças e escolher uma combinação que as proteja da inflação e do roubo.",
          text: [
            "Inflação quer dizer que os preços em geral estão a subir, por isso o mesmo dinheiro compra menos. Exemplo: se os preços subirem 10% num ano, 10.000 guardados numa lata em casa só vão comprar o que cerca de 9.100 compram hoje. Encontre a taxa de inflação atual no seu banco central ou no instituto de estatística (Quénia: Central Bank of Kenya; Nigéria: National Bureau of Statistics; países do franco CFA da África Ocidental: BCEAO).",
            "Cada forma de poupar tem um risco. Dinheiro em casa: fácil de ter à mão, mas perde valor com a inflação e pode ser roubado. Um grupo de poupança ou VSLA: cria o hábito e pode dar uma divisão no fim do ciclo, mas depende de registos honestos. Uma conta numa SACCO, banco ou instituição de microfinanças licenciada: mais segura e pode pagar juros, mas compare os juros com a inflação e veja as taxas. Gado: pode valer mais com o tempo, mas pode morrer de seca ou doença. Cereal armazenado: o preço pode subir, mas pode estragar-se ou baixar de preço. Comprar cedo os insumos principais: evita as subidas de preço, mas precisa de armazenamento seguro.",
            "Reparta as suas poupanças por mais de uma forma. Tenha um fundo de emergência a que possa chegar depressa. Verifique se qualquer SACCO, banco ou instituição de microfinanças é licenciado (no Quénia, a SASRA tem a lista das SACCO de depósitos licenciadas). Tenha muito cuidado com qualquer esquema que prometa ganhos altos e rápidos: muitas vezes é uma fraude. Esta lição explica como funciona a poupança; não é um conselho de investimento. Pergunte a um conselheiro de confiança sobre a sua situação."
          ],
          steps: ["Encontre a taxa de inflação atual no seu banco central ou instituto de estatística.", "Faça a lista de onde estão agora as suas poupanças: dinheiro, grupo, SACCO, banco, animais, cereal.", "Escreva um risco para cada uma.", "Escolha uma combinação de pelo menos três, com um fundo de emergência a que chegue depressa.", "Verifique se cada SACCO, banco ou instituição de microfinanças é licenciado.", "Recuse esquemas que prometem ganhos altos e rápidos."],
          words: [["Inflação", "uma subida geral dos preços, por isso o mesmo dinheiro compra menos."], ["Juros", "dinheiro que um banco ou uma SACCO lhe paga por guardar as suas poupanças, ou que você paga para pedir emprestado."], ["Fundo de emergência", "poupanças guardadas para problemas repentinos, como doença ou uma colheita falhada, a que pode chegar depressa."], ["VSLA", "associação de poupança e crédito da aldeia: um grupo que poupa em conjunto, empresta aos membros e divide as poupanças e os lucros."]],
          slides: [
            { title: "A inflação come o dinheiro", bullets: ["Preços +10%: 10.000 compram o que cerca de 9.100 compram hoje", "Encontre a taxa: banco central ou instituto de estatística"] },
            { title: "Cada forma de poupar tem um risco", bullets: ["Dinheiro: inflação e roubo", "Grupo, SACCO, banco: registos, taxas, juros vs inflação", "Animais e cereal: doença, estragos, preços"] },
            { title: "Proteja as suas poupanças", bullets: ["Reparta por pelo menos três formas", "Tenha um fundo de emergência à mão", "Verifique licenças (Quénia: lista da SASRA)", "Ganhos altos e rápidos? Muitas vezes é fraude"] }
          ],
          sources: [CBK, NBS, BCEAO, SASRA],
          tryIt: "Tarefa final: escreva o seu plano de riscos da machamba de uma página: os cinco riscos principais com ações, um registo de preços de quatro semanas e a sua tendência, o seu plano de venda e armazenamento com o preço de equilíbrio do armazenamento, as suas perguntas para um contrato e para um seguro por índice, e a sua combinação de poupanças contra a inflação.",
          youCanNow: "proteger as suas poupanças da inflação com uma combinação repartida e licenciada e juntar todas as suas ferramentas de risco num só plano.",
          quickCheck: [
            { objective: "O6", q: "Os preços subiram 10% este ano. O que aconteceu a 10.000 guardados numa lata em casa?", options: ["Compram menos do que há um ano", "Compram mais do que antes", "Passaram a 11.000", "Nada mudou"], answer: 0, why: "O mesmo dinheiro compra menos quando os preços sobem." },
            { objective: "O6", q: "Um grupo promete duplicar as suas poupanças em três meses. O que é mais provável que isto mostre?", options: ["Uma boa SACCO", "Uma oferta normal de um banco", "Um apoio do governo", "Uma provável fraude: ganhos altos e rápidos são um sinal de alerta"], answer: 3, why: "As promessas de ganhos altos e rápidos são um sinal comum de fraude." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Passar o risco e proteger o seu dinheiro",
        questions: [
          { objective: "O4", q: "De que abdica quando assina um contrato de preço fixo?", options: ["Do dinheiro extra se os preços de mercado subirem", "Da sua terra", "De todas as suas outras culturas", "De nada"], answer: 0, why: "O preço está fixado, por isso não ganha se o mercado subir mais." },
          { objective: "O4", q: "Que entidade licencia a Bolsa de Mercadorias da Nigéria?", options: ["A Agência Meteorológica da Nigéria", "A Securities and Exchange Commission (comissão de valores mobiliários)", "A NAFDAC", "O Banco Central do Quénia"], answer: 1, why: "A NCX diz que é licenciada pela Securities and Exchange Commission." },
          { objective: "O5", q: "O que usa o KLIP no Quénia para decidir quando pagar aos criadores?", options: ["Uma visita do veterinário a cada manada", "O preço de mercado do gado", "Imagens de satélite que mostram o pasto a falhar", "O número de animais vendidos"], answer: 2, why: "O KLIP funciona por índice: as medições do pasto por satélite ativam o pagamento." },
          { objective: "O5", q: "Que pergunta verifica o risco de base?", options: ["De que cor é a apólice?", "O agente é rápido?", "Quem mais o comprou?", "Onde é medido o índice e a que distância fica do meu campo?"], answer: 3, why: "Quanto mais longe o ponto de medição, mais o índice pode ser diferente do seu campo." },
          { objective: "O6", q: "Qual é uma forma sensata de proteger melhor as poupanças?", options: ["Reparti-las por contas licenciadas, um grupo e outras formas, com um fundo de emergência", "Guardar todo o dinheiro numa só lata", "Pôr tudo no esquema que promete o ganho mais alto", "Emprestar tudo a um desconhecido"], answer: 0, why: "Repartir as poupanças por lugares verificados limita o dano de qualquer perda." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gestão do Risco Agrícola: Preços, Clima e Seguros",
    questions: [
      { objective: "O1", q: "Uma doença na família que impede o trabalho na machamba é que tipo de risco?", options: ["Risco de mercado", "Risco de regras", "Risco de pessoas", "Risco de produção"], answer: 2, why: "Os riscos para as pessoas que gerem a machamba são riscos de pessoas." },
      { objective: "O1", q: "Probabilidade 2 e impacto 3 dão uma pontuação de risco de:", options: ["6", "5", "1", "9"], answer: 0, why: "2 x 3 = 6." },
      { objective: "O1", q: "Decidir não plantar tomate no mês mais chuvoso é que resposta?", options: ["Partilhá-lo", "Aceitá-lo", "Ignorá-lo", "Evitá-lo"], answer: 3, why: "Evita o risco ao não o correr." },
      { objective: "O1", q: "Quando deve rever o seu registo de riscos?", options: ["Nunca", "Antes de cada época", "Só depois de um desastre", "De dez em dez anos"], answer: 1, why: "Os riscos mudam, por isso verifique antes das decisões de cada época." },
      { objective: "O2", q: "Os preços de muitos alimentos básicos costumam ser mais baixos:", options: ["Mesmo antes da sementeira", "Nos meses de fome", "Logo a seguir à colheita", "Nunca mudam"], answer: 2, why: "Na colheita muitos agricultores vendem ao mesmo tempo, o que faz baixar os preços." },
      { objective: "O2", q: "Na Nigéria, que entidade publica um relatório mensal dos preços dos alimentos por estado?", options: ["O National Bureau of Statistics (instituto de estatística)", "A Agência Meteorológica da Nigéria", "A NAFDAC", "A Securities and Exchange Commission"], answer: 0, why: "O NBS publica todos os meses o Selected Food Prices Watch." },
      { objective: "O2", q: "O que mostra a mudança do preço do cacau na Costa do Marfim de 2.800 para 1.200 francos CFA por kg?", options: ["Os preços fixos nunca mudam", "O cacau não tem risco", "Só os comerciantes enfrentam risco de preço", "Até os preços fixados pelo governo podem mudar muito de uma época para outra"], answer: 3, why: "O preço ao produtor foi cortado depois de os preços mundiais do cacau caírem." },
      { objective: "O2", q: "A melhor descrição de uma tendência de preços é:", options: ["Uma promessa do preço do próximo mês", "A direção geral em que os preços se movem ao longo de semanas ou meses", "A oferta de um comprador", "O preço do governo"], answer: 1, why: "Uma tendência é um guia tirado dos preços passados, não uma promessa." },
      { objective: "O3", q: "Diversificação quer dizer:", options: ["Cultivar só a sua melhor cultura", "Vender tudo na colheita", "Repartir a produção e o rendimento por várias atividades", "Pedir mais emprestado"], answer: 2, why: "Várias atividades fazem com que uma falha não o arruíne." },
      { objective: "O3", q: "Preço na colheita 4.000 por saco, 10 sacos, custos de armazenamento 2.000. Qual é o preço de equilíbrio do armazenamento?", options: ["4.200", "4.000", "2.000", "6.000"], answer: 0, why: "(4.000 x 10 + 2.000) / 10 = 4.200 por saco." },
      { objective: "O3", q: "Antes de armazenar cereal para vender mais tarde, deve primeiro:", options: ["Armazená-lo húmido para manter o peso", "Misturá-lo com o cereal do ano passado", "Vender na colheita o que precisa em dinheiro e armazenar só cereal limpo e seco, com segurança", "Armazenar tudo, mesmo que precise de dinheiro agora"], answer: 2, why: "Cobrir as necessidades de dinheiro e armazenar só cereal limpo e seco evita vendas forçadas e estragos." },
      { objective: "O4", q: "Um contrato a prazo é:", options: ["Um empréstimo de um banco", "Um acordo feito agora para vender uma quantidade definida a um preço definido mais tarde", "Uma apólice de seguro", "Uma conta poupança"], answer: 1, why: "Fixa hoje a quantidade e o preço para uma venda futura." },
      { objective: "O4", q: "Que condição tem de estar num contrato de preço fixo?", options: ["A cultura preferida do comprador", "Só a cor dos sacos", "O tamanho da sua família", "O que acontece se a colheita falhar ou o comprador não vier buscar"], answer: 3, why: "Estes casos decidem quem fica com a perda quando as coisas correm mal." },
      { objective: "O4", q: "Porque a cobertura de risco com futuros não é para principiantes?", options: ["Precisa de corretor, depósitos de margem e experiência, e pode perder dinheiro", "É ilegal em África", "Só funciona para o cacau", "Dá sempre dinheiro"], answer: 0, why: "As posições em futuros podem perder dinheiro e exigir depósitos de um momento para o outro." },
      { objective: "O4", q: "Como chega a maioria dos pequenos agricultores a uma bolsa de mercadorias como a GCX?", options: ["Negociando futuros no telefone", "Através de uma cooperativa, um agregador ou um armazém certificado", "Visitando a bolsa todos os dias", "Não a podem usar de forma nenhuma"], answer: 1, why: "Os grupos e os armazéns levam os produtos dos agricultores à bolsa." },
      { objective: "O5", q: "O seguro por índice paga quando:", options: ["Você comunica uma perda", "Um agente visita a sua machamba", "O índice medido passa o gatilho", "O prémio é pago"], answer: 2, why: "Os pagamentos seguem o índice, e não uma visita ao campo." },
      { objective: "O5", q: "Quem paga o prémio dos pastores vulneráveis registados no KLIP do Quénia?", options: ["Os próprios pastores", "O comprador do gado", "O banco", "O governo"], answer: 3, why: "O KLIP é um programa do governo que compra a cobertura para eles." },
      { objective: "O5", q: "Antes de comprar um seguro por índice, deve verificar se a seguradora é licenciada. Na Nigéria, a entidade reguladora é:", options: ["A NAICOM", "A NAFDAC", "A NiMet", "O NBS"], answer: 0, why: "A NAICOM, a National Insurance Commission (comissão nacional de seguros), regula as seguradoras na Nigéria." },
      { objective: "O6", q: "Onde encontra a taxa de inflação atual?", options: ["Num comerciante do mercado", "No seu banco central ou no instituto nacional de estatística", "Numa publicação nas redes sociais", "No agente de seguros"], answer: 1, why: "Os bancos centrais e os institutos de estatística publicam os números oficiais da inflação." },
      { objective: "O6", q: "Qual é um risco de guardar poupanças em gado?", options: ["Os animais nunca mudam de valor", "Os bancos não os aceitam", "Podem morrer de seca ou doença", "Não há risco"], answer: 2, why: "A seca e as doenças podem acabar com as poupanças guardadas em animais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 5, 7, 9, 11, 13, 15, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique-a outra vez.",
    criteria: [
      { name: "Registo de riscos", objective: "O1", notYet: "Menos de cinco riscos, ou riscos sem nota ou sem ações.", meets: "Pelo menos oito riscos dos cinco tipos, com nota e classificados, e uma ação para cada um dos cinco principais.", exceeds: "As ações têm datas e custos, e o plano diz quando o registo vai ser revisto." },
      { name: "Registo de preços e tendência", objective: "O2", notYet: "Menos de quatro semanas, uma só fonte, ou unidades e qualidades misturadas.", meets: "Quatro semanas de pelo menos duas fontes, o mesmo produto, qualidade e unidade, com a tendência descrita.", exceeds: "Inclui um serviço oficial e os mesmos meses do ano passado, e diz o que a tendência significa para a venda." },
      { name: "Plano de venda e armazenamento", objective: "O3", notYet: "Sem preço de equilíbrio do armazenamento, ou as necessidades de dinheiro na colheita são esquecidas.", meets: "Preço de equilíbrio do armazenamento certo, necessidades de dinheiro cobertas na colheita e vendas planeadas por etapas.", exceeds: "Junta também uma segunda atividade ou mercado para repartir o risco, e passos de armazenamento seguro." },
      { name: "Perguntas sobre contrato e seguro", objective: "O4", notYet: "Menos de cinco condições do contrato, ou nenhuma pergunta sobre o seguro.", meets: "Pelo menos oito condições do contrato com um ganho e um risco, e o que é a cobertura de risco numa frase.", exceeds: "Compara o preço fixo com o preço de equilíbrio e o registo de preços." },
      { name: "Verificação do seguro por índice", objective: "O5", notYet: "Falta o índice, o gatilho, o prémio ou o risco de base.", meets: "O índice, o gatilho, o pagamento, o prémio, o prazo, o risco de base e a verificação da licença estão todos respondidos.", exceeds: "As respostas vêm de uma oferta real perto da machamba, com a entidade reguladora nomeada." },
      { name: "Poupanças contra a inflação", objective: "O6", notYet: "Uma só forma de poupar, ou nenhum risco nomeado.", meets: "Pelo menos três formas comparadas, cada uma com um risco, a taxa de inflação anotada e as licenças verificadas.", exceeds: "Inclui o valor de um fundo de emergência e uma data para rever a combinação." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha do plano de riscos da machamba",
      "Alunos que ainda mantêm um registo semanal de preços 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem vender por etapas ou armazenar com segurança em vez de vender tudo na colheita",
      "Alunos que dizem ler um contrato ou uma oferta de seguro condição a condição, ou recusar quem empresta, segura ou oferece esquemas de comércio sem licença",
      "As cooperativas parceiras dizem que menos membros são obrigados a vender animais ou terra depois de uma má época"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, e um telefone simples para preços por SMS, chamadas ou rádio",
      "Uma calculadora no telefone",
      "Um contrato de comprador real ou de exemplo e um folheto de seguro por índice da zona, se houver",
      "Cerca de 80 minutos no total, em sessões curtas, mais quatro semanas de registo de preços para a tarefa final"
    ],
    facilitatorNotes: [
      "Num grupo de agricultores ou numa sessão de extensão: façam o teste inicial juntos e depois um capítulo por sessão; façam primeiro o registo de riscos em pequenos grupos.",
      "Peça aos alunos para começarem o registo de preços depois da Lição 2, para terem quatro semanas para a tarefa final; recolham os preços em grupo e partilhem-nos.",
      "Convide uma seguradora licenciada, uma cooperativa ou um operador de armazém para explicar um produto real, mas não recomende nenhuma empresa; deixe os alunos fazer as perguntas da lição.",
      "Não recomende negociar em nenhuma bolsa nem comprar nenhum produto financeiro; diga claramente que o curso explica como as coisas funcionam e os seus riscos.",
      "Avalie o plano de riscos com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
