"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-regulations.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KCAA_UAS = { name: "Autoridade de Aviação Civil do Quénia (KCAA): Sistemas de Aeronaves Não Tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "KCAA: sistema online para drones (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const KCAA_FEES = { name: "KCAA: Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020 (L.N. 4 of 2021), tabela de taxas", url: "https://www.kcaa.or.ke/sites/default/files/docs/uas/UASCharges.pdf" };
const KCAA_ROC = { name: "KCAA: Certificado de Operador Aéreo Remoto (ROC)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/roc" };
const KCAA_UTO = { name: "KCAA: Organizações de Formação em Sistemas de Aeronaves Não Tripuladas (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_REGS_2026 = { name: "KCAA: Regulamentos de Aviação Civil do Quénia de 2026 (regulamentos publicados)", url: "https://www.kcaa.or.ke/published-regs-2026" };
const KENYA_LAW_UAS = { name: "Kenya Law: The Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 (L.N. 42 of 2020)", url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/42" };
const NCAA_P21 = { name: "Autoridade de Aviação Civil da Nigéria (NCAA): Nig.CARs 2023 Parte 21, Sistemas de Aeronaves Pilotadas Remotamente", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_WHO_AERIAL = { name: "FAO e OMS: Orientações para a aplicação aérea de pesticidas (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const PCPB = { name: "Pest Control Products Board (PCPB, Quénia)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigéria)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (ODPC, Quénia)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC, Nigéria)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-drones-regulations-pt",
  lang: "pt",
  translationOf: "agri-drones-regulations",
  category: "Agriculture (Africa)",
  name: "Drones Agrícolas em África: Regulamentos de Aviação e Licenças",
  skills: "Encontrar e ler os regulamentos nacionais sobre drones, Classificar um drone e uma operação pelo risco, Mapear as licenças e os certificados de que um trabalho precisa, Tratar operações especiais (pulverização, BVLOS, perto de aeródromos), Montar um dossiê de conformidade, Acompanhar as mudanças das regras",
  outcome: "ler os regulamentos sobre drones do seu país, saber que registos, licenças, certificados e autorizações um trabalho agrícola com drone precisa, e montar um dossiê de conformidade completo para uma empresa de serviços com drones.",
  about: [
    "Este curso é para quem quer pilotar drones como profissional na agricultura africana: empresários de serviços com drones, gestores de agronegócios e de grandes propriedades, líderes de cooperativas e de extensão rural, e jovens em formação como pilotos remotos. Vai mais fundo do que a visão geral da série de monitorização.",
    "O Capítulo 1 explica como se constrói a lei dos drones e depois percorre as regras do Quénia e da Nigéria: os Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020, supervisionados pela Autoridade de Aviação Civil do Quénia (KCAA), e a Parte 21 dos Regulamentos de Aviação Civil da Nigéria de 2023, supervisionada pela Autoridade de Aviação Civil da Nigéria (NCAA). O Capítulo 2 trata das licenças e da certificação de operadores, de operações especiais como a pulverização e os voos perto de aeródromos, e de como montar e manter um dossiê de conformidade.",
    "Isto é educação, não aconselhamento jurídico. As regras sobre drones são lei, mudam, e os outros países africanos têm a sua própria autoridade e as suas próprias regras. Cada lição indica a fonte oficial; confirme tudo nela, ou com a autoridade ou um advogado, antes de agir. Nunca voe sem o registo, a licença e as aprovações que o seu país exige."
  ],
  finalTask: "Monte um dossiê de conformidade para uma empresa de serviços com drones no seu país que vai mapear culturas para agricultores e grandes propriedades (e, se o planear, pulverizar): a autoridade e os regulamentos que se aplicam, com links e a data em que verificou; a classificação do seu drone e a categoria de risco da operação; cada registo, autorização de importação, licença, certificado e autorização necessários, quem os emite e em que ponto estão; os documentos exigidos (manual de operações, seguro, registos de manutenção e de voo); as aprovações extra para qualquer pulverização; os passos de proteção de dados; e um calendário para verificar mudanças das regras e renovações.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que querem pilotar drones como profissionais na agricultura africana: empresários de serviços com drones, gestores de agronegócios e de grandes propriedades, líderes de cooperativas e de extensão rural, e jovens em formação como pilotos remotos, sobretudo no Quénia e na Nigéria.",
    startingPoint: "A maioria sabe o que faz um drone agrícola e talvez já tenha pilotado um pequeno. Poucos leram os regulamentos sobre drones do seu país, sabem que licenças e certificados um trabalho pago precisa, ou guardam os documentos que um inspetor, um cliente ou uma seguradora pediriam.",
    gap: "Voar a troco de pagamento sem o registo, a licença, o certificado de operador ou a autorização certos pode trazer multas, drones apreendidos e clientes perdidos, e pulverizar sem as aprovações de aviação e de pesticidas põe em risco pessoas e culturas. Saber ler as regras e montar um dossiê de conformidade deixa uma empresa de drones trabalhar dentro da lei, ganhar contratos e obter seguro.",
    constraints: [
      "Nível de leitura: palavras simples; cada termo jurídico e de aviação é explicado",
      "Aparelhos: um telefone ou computador com internet para abrir o site da autoridade e descarregar as regras",
      "As regras, as taxas e os formulários mudam: os alunos confirmam tudo no site oficial, com a autoridade ou um advogado",
      "Isto é educação, não aconselhamento jurídico; o curso não inclui voar nem pulverizar",
      "Os outros países africanos têm a sua própria autoridade e as suas próprias regras, por isso os alunos aplicam o método ao seu país"
    ],
    prerequisites: "Recomenda-se fazer primeiro o curso \"Drones para a Monitorização Agrícola 1: Introdução, Regulamentos e Segurança\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para o seu próprio país", action: "encontrar os regulamentos, as normas e a tabela de taxas da autoridade de aviação civil sobre drones e nomear cada camada da lei dos drones", standard: "com links e a data em que verificou" },
    { id: "O2", condition: "Com um trabalho agrícola comercial com drone no Quénia", action: "listar os registos, licenças, certificados e autorizações da KCAA de que ele provavelmente precisa", standard: "indicando os regulamentos de onde vêm e que as taxas atuais e as novas regras têm de ser verificadas" },
    { id: "O3", condition: "Com o peso de um drone e uma operação planeada na Nigéria", action: "classificar o drone e a categoria de risco da operação segundo a Parte 21 e listar os limites de operação que se aplicam", standard: "com a classe de peso e a categoria de risco certas" },
    { id: "O4", condition: "Para uma empresa de serviços com drones", action: "planear as licenças de piloto e o certificado de operador de que ela precisa e os documentos que o certificado de operador pede", standard: "separando as aprovações para a pessoa que pilota das aprovações para a empresa" },
    { id: "O5", condition: "Com um trabalho que inclui pulverização, BVLOS, voo noturno ou um aeródromo", action: "identificar as aprovações extra de aviação e de pesticidas de que ele precisa e quem as dá", standard: "antes de oferecer ou planear o trabalho" },
    { id: "O6", condition: "Para a sua empresa de drones", action: "montar um dossiê de conformidade e um calendário de renovações e de verificação das regras", standard: "com cada documento exigido listado e em que ponto está" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A lei dos drones em África",
      lessons: [
        {
          objectives: ["O1"],
          title: "Como se constrói a lei dos drones",
          minutes: 5,
          goal: "Encontrar e nomear as camadas da lei dos drones que se aplicam no seu país.",
          text: [
            "Os países baseiam as suas regras de aviação nas normas internacionais da ICAO, a Organização da Aviação Civil Internacional da ONU, mas cada país escreve e faz cumprir a sua própria lei dos drones. Normalmente há uma lei da aviação aprovada pelo parlamento; regulamentos sobre drones feitos ao abrigo dessa lei; normas de aplicação ou manuais com o detalhe técnico; uma tabela de taxas; e avisos ou circulares para casos especiais.",
            "A maioria das regras modernas sobre drones arruma as operações pelo risco. O voo de baixo risco (drone pequeno, à vista, baixo, longe das pessoas e dos aeroportos) tem as exigências mais leves. O voo de risco mais alto (drones pesados, para além da vista, sobre pessoas, perto de aeródromos, a pulverizar ou a largar coisas) precisa de mais: autorização, operadores certificados, pilotos licenciados e, às vezes, aeronaves certificadas.",
            "Para encontrar as regras do seu país, vá ao site da autoridade de aviação civil e procure uma secção chamada drones, UAS, RPAS ou aeronaves não tripuladas. Descarregue os regulamentos, as normas e a tabela de taxas, e anote a data. Exemplos de autoridades: a KCAA (Quénia), a NCAA (Nigéria) e as autoridades de aviação civil do Gana, do Ruanda, do Uganda, da Tanzânia e da África do Sul."
          ],
          steps: ["Abra o site da autoridade de aviação civil do seu país.", "Encontre a secção de drones / UAS / RPAS.", "Descarregue os regulamentos, as normas de aplicação e a tabela de taxas.", "Anote a data e a versão de cada um.", "Liste como as regras arrumam as operações pelo risco."],
          words: [["ICAO", "a Organização da Aviação Civil Internacional, uma agência da ONU que define normas internacionais de aviação."], ["Regulamentos", "regras obrigatórias por lei, feitas ao abrigo de uma lei do parlamento."], ["Normas de aplicação", "regras técnicas detalhadas que explicam como cumprir os regulamentos."], ["Categoria de risco", "um grupo de operações com risco parecido e exigências parecidas."]],
          slides: [
            { title: "Camadas da lei dos drones", bullets: ["Lei da aviação", "Regulamentos sobre drones ao abrigo da lei", "Normas de aplicação e tabela de taxas", "Avisos e circulares"] },
            { title: "As regras seguem o risco", bullets: ["Baixo risco: pequeno, à vista, baixo, longe das pessoas", "Alto risco: pesado, para além da vista, sobre pessoas", "Pulverizar ou largar coisas: mais aprovações"] },
            { title: "Encontre as suas regras", bullets: ["Site da autoridade: drones, UAS ou RPAS", "Descarregue regulamentos, normas, taxas", "Anote a data e a versão"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Para o seu país, escreva a autoridade de aviação, o nome e o ano dos regulamentos sobre drones, se há normas de aplicação e uma tabela de taxas, e a data em que verificou. Guarde os documentos numa só pasta.",
          youCanNow: "encontrar as camadas da lei dos drones no seu país e ver como elas arrumam as operações pelo risco.",
          quickCheck: [
            { objective: "O1", q: "O que é uma tabela de taxas na lei dos drones?", options: ["Um plano de voo", "Uma lista de pilotos", "Uma lista das aprovações que existem e do custo de cada uma", "Uma previsão do tempo"], answer: 2, why: "A tabela de taxas lista as aprovações e o seu custo, por isso mostra o que existe." },
            { objective: "O1", q: "Quer as regras sobre drones do seu país. Onde procura primeiro?", options: ["No site da autoridade de aviação civil, na secção de drones, UAS ou RPAS", "No anúncio de um vendedor de drones", "Num grupo de uma rede social", "Num vídeo de outro país"], answer: 0, why: "A autoridade de aviação civil de cada país publica os seus próprios regulamentos, normas e taxas sobre drones." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Quénia: a KCAA e os UAS Regulations 2020",
          minutes: 6,
          goal: "Listar as aprovações do Quénia de que um operador comercial de drones agrícolas provavelmente precisa.",
          text: [
            "No Quénia, os drones são regidos pelos Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 (regulamentos sobre sistemas de aeronaves não tripuladas), feitos ao abrigo da Civil Aviation Act, 2013 (lei da aviação civil), e supervisionados pela KCAA. A página de drones da KCAA publica também um Manual de Normas de Aplicação e uma tabela de taxas, os Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020.",
            "A tabela de taxas mostra as principais aprovações que existem: uma autorização de importação e o registo do drone; certificados de aeronavegabilidade; um Certificado de Operador Aéreo Remoto (ROC) para operadores; autorizações de operação para a Categoria A e para as Categorias B e C; licenças para pessoas, incluindo uma licença de piloto remoto estudante, uma licença de piloto remoto (RPL) e qualificações como o voo para além da linha de vista; e aprovações para organizações de formação e para revendedores de drones. A KCAA lista no seu site os titulares de ROC e as organizações de formação aprovados, e os pedidos são feitos pelo seu sistema online para drones.",
            "O site da KCAA lista também novos Regulamentos de Aviação Civil do Quénia publicados em 2026. Verifique se algum deles muda as regras sobre drones antes de confiar nas versões de 2020, e verifique as taxas atuais no dia em que fizer o pedido."
          ],
          words: [["KCAA", "Autoridade de Aviação Civil do Quénia, que regula os drones no Quénia."], ["ROC", "Certificado de Operador Aéreo Remoto: a aprovação da KCAA para uma organização fazer operações com drones."], ["SRPL / RPL", "licença de piloto remoto estudante / licença de piloto remoto."], ["Certificado de aeronavegabilidade", "uma confirmação oficial de que uma aeronave está em condições e é segura para voar."]],
          slides: [
            { title: "A lei dos drones do Quénia", bullets: ["Civil Aviation (UAS) Regulations, 2020", "Feitos ao abrigo da Civil Aviation Act, 2013", "Supervisionados pela KCAA"] },
            { title: "Aprovações na tabela de taxas", bullets: ["Autorização de importação e registo", "ROC para operadores", "Autorizações de operação: Categoria A; B e C", "SRPL, RPL, BVLOS e outras qualificações"] },
            { title: "Onde pedir e verificar", bullets: ["Sistema online para drones da KCAA", "Listas de titulares de ROC e de organizações de formação", "Verifique os regulamentos de 2026 e as taxas atuais"] }
          ],
          sources: [KCAA_UAS, KENYA_LAW_UAS, KCAA_FEES, KCAA_ROC, KCAA_UTO, KCAA_PORTAL, KCAA_REGS_2026],
          tryIt: "Abra a página de drones e a tabela de taxas da KCAA. Faça uma tabela com cada aprovação de que uma empresa que mapeia plantações de chá a troco de pagamento precisaria (drone, pessoas, organização, operação), com uma coluna para onde pedir. Deixe as taxas como \"verificar no dia\".",
          youCanNow: "listar os registos, licenças, certificados e autorizações do Quénia de que um operador comercial de drones agrícolas provavelmente precisa, e onde pedi-los.",
          quickCheck: [
            { objective: "O2", q: "O que é uma RPL no Quénia?", options: ["Um número de registo do drone", "Um recibo de taxa", "Uma escola de formação", "Uma licença de piloto remoto para a pessoa que pilota"], answer: 3, why: "A licença de piloto remoto (RPL) é a licença da pessoa que pilota." },
            { objective: "O2", q: "Quer fazer um pedido à KCAA no próximo mês usando as regras de 2020. O que verifica primeiro?", options: ["Nada; as regras de 2020 nunca mudam", "Se os novos regulamentos publicados pela KCAA mudam as regras sobre drones, e as taxas atuais", "Só a cor do drone", "A licença antiga de um vizinho"], answer: 1, why: "A KCAA lista os novos regulamentos publicados, e as taxas têm de ser verificadas no dia do pedido." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nigéria: a NCAA e a Parte 21 dos Nig.CARs",
          minutes: 6,
          goal: "Classificar um drone e uma operação segundo a Parte 21 da Nigéria e listar o que ela exige.",
          text: [
            "Na Nigéria, os drones estão abrangidos pela Parte 21 (Sistemas de Aeronaves Pilotadas Remotamente, RPAS) dos Regulamentos de Aviação Civil da Nigéria de 2023, documento Nig.CARs/2023/021, em vigor desde 17 de maio de 2023, supervisionada pela NCAA. Trata da certificação, do registo, das operações e da fiscalização dos RPAS.",
            "A Parte 21 classifica as aeronaves pelo peso: Nano (menos de 250 g), Micro (de 250 g a menos de 2 kg), Pequena (de 2 kg a menos de 25 kg), Média (de 25 kg a 150 kg) e Grande (mais de 150 kg), cada uma com condições e autorização prévia da Autoridade. Usa também três categorias de risco operacional: Aberta (risco mais baixo, tem de ser registada), Específica (risco mais alto, precisa de autorização) e Certificada (aeronave, operador e piloto certificados, tratada mais como a aviação tripulada). Prevê licenças de piloto remoto e certificados de operador de RPAS.",
            "A Parte 21 define também limites de operação, por exemplo voar a 120 m (400 pés) acima do solo ou menos em muitos casos, manter 30 m de distância horizontal das pessoas que não fazem parte da operação, não voar sobre zonas povoadas e ficar longe dos aeródromos (por exemplo a menos de 4 km da área de movimento de um aeródromo controlado, ou 10 km para voos privados e recreativos) a não ser com autorização. Leia o texto completo para ver as condições que se aplicam à sua operação."
          ],
          words: [["NCAA", "Autoridade de Aviação Civil da Nigéria, que regula os drones na Nigéria."], ["Nig.CARs", "Regulamentos de Aviação Civil da Nigéria."], ["Aberta / Específica / Certificada", "as três categorias de risco operacional da Parte 21, do risco mais baixo para o mais alto."], ["Área de movimento", "a parte de um aeroporto que as aeronaves usam para descolar, aterrar e circular no chão."]],
          slides: [
            { title: "A lei dos drones da Nigéria", bullets: ["Nig.CARs 2023 Parte 21: RPAS", "Em vigor desde 17 de maio de 2023", "Supervisionada pela NCAA"] },
            { title: "Classes pelo peso", bullets: ["Nano < 250 g; Micro 250 g a < 2 kg", "Pequena 2 a < 25 kg; Média 25-150 kg", "Grande > 150 kg"] },
            { title: "Categorias de risco", bullets: ["Aberta: risco mais baixo, registada", "Específica: precisa de autorização", "Certificada: aeronave, operador e piloto certificados"] },
            { title: "Exemplos de limites", bullets: ["120 m (400 pés) acima do solo em muitos casos", "30 m das pessoas que não fazem parte da operação", "Distâncias dos aeródromos, a não ser com autorização"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Um agronegócio nigeriano quer mapear campos de mandioca no Estado de Ogun com um multirrotor de 1,2 kg e pulverizar com um multirrotor de 15 kg. Usando a Parte 21, escreva a classe de peso de cada drone, a categoria de risco provável de cada trabalho e três perguntas que faria à NCAA.",
          youCanNow: "classificar um drone e uma operação segundo a Parte 21 da Nigéria e listar o que ela exige.",
          quickCheck: [
            { objective: "O3", q: "Segundo a Parte 21, que categoria exige que a aeronave, o operador e o piloto sejam certificados?", options: ["Certificada", "Aberta", "Nano", "Micro"], answer: 0, why: "A categoria Certificada é tratada mais como a aviação tripulada, com aeronave, operador e piloto certificados." },
            { objective: "O3", q: "Um agricultor na Nigéria pede-lhe para voar a 10 m de pessoas num mercado da aldeia que não fazem parte do trabalho. O que faz?", options: ["Voa mais baixo por segurança", "Voa depressa e vai-se embora", "Mantém pelo menos 30 m das pessoas que não fazem parte do trabalho e evita zonas povoadas, a não ser com autorização", "Pede às pessoas para olharem para outro lado"], answer: 2, why: "A Parte 21 mantém muitas operações a 30 m das pessoas que não fazem parte delas e longe das zonas povoadas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A lei dos drones em África",
        questions: [
          { objective: "O1", q: "De onde vem a força legal dos regulamentos nacionais sobre drones?", options: ["Do manual de um fabricante de drones", "De uma lei aprovada pelo parlamento, como uma lei da aviação civil", "Das redes sociais", "Do agricultor"], answer: 1, why: "Os regulamentos são feitos ao abrigo de uma lei aprovada pelo parlamento." },
          { objective: "O1", q: "Que operação costuma ter o risco mais alto?", options: ["Um drone pequeno, à vista, sobre um campo vazio", "Pairar a 5 metros", "Um drone pesado a pulverizar para além da linha de vista", "Um voo num simulador"], answer: 2, why: "O peso, o BVLOS e a pulverização aumentam o risco e as exigências." },
          { objective: "O2", q: "No Quénia, uma empresa que mapeia grandes propriedades a troco de pagamento precisa de que aprovação de operador?", options: ["Um Certificado de Operador Aéreo Remoto (ROC) da KCAA", "Um cartão de visita", "Só uma licença do condado", "Nada"], answer: 0, why: "A KCAA emite ROC para operadores de drones." },
          { objective: "O3", q: "Segundo a Parte 21 da Nigéria, um drone de 1,2 kg está em que classe de peso?", options: ["Nano", "Pequena", "Grande", "Micro"], answer: 3, why: "Micro vai de 250 g a menos de 2 kg." },
          { objective: "O3", q: "Na Parte 21, a categoria Específica quer dizer:", options: ["Não se aplicam regras", "Risco mais alto; é preciso autorização para operar", "Só para brinquedos", "Só para aeronaves tripuladas"], answer: 1, why: "As operações Específicas têm mais risco e precisam de autorização." }
        ]
      }
    },
    {
      name: "Capítulo 2: Licenças, certificação e conformidade",
      lessons: [
        {
          objectives: ["O4"],
          title: "Licenças de piloto e certificados de operador",
          minutes: 5,
          goal: "Planear as aprovações das pessoas e da organização para uma empresa de serviços com drones.",
          text: [
            "Para uma empresa contam dois tipos de aprovação. A pessoa que pilota precisa da licença de piloto e das qualificações que as regras exigem: no Quénia, a licença de piloto remoto (RPL), com formação numa organização de formação aprovada pela KCAA; na Nigéria, uma licença de piloto remoto segundo a Parte 21. A organização que vende serviços com drones normalmente precisa de um certificado de operador: o Certificado de Operador Aéreo Remoto da KCAA ou o Certificado de Operador de RPAS da NCAA.",
            "A certificação de operador normalmente pede provas de que a empresa consegue operar com segurança: um manual de operações (como planeia, voa, faz a manutenção e comunica incidentes), pessoas responsáveis com nome, pilotos formados e licenciados, drones registados, um sistema de manutenção, registos e seguro. A Parte 21, por exemplo, inclui os certificados de seguro de responsabilidade civil perante terceiros entre os documentos que uma operação tem de levar.",
            "Planeie tempo e dinheiro para isto. Peça à autoridade a lista de verificação e as taxas atuais, e pergunte às organizações de formação aprovadas se ajudam com os manuais de operações."
          ],
          steps: ["Liste cada piloto e a licença e as qualificações de que cada um precisa.", "Verifique o certificado de operador de que a sua empresa precisa.", "Obtenha a lista de verificação atual da autoridade para o pedido.", "Escreva um rascunho do manual de operações: planeamento, voo, manutenção, emergências, comunicação de incidentes.", "Trate do seguro e dos sistemas de registos."],
          words: [["Manual de operações", "as regras escritas de uma empresa sobre como planeia, voa, faz a manutenção dos drones e trata as emergências."], ["Seguro de responsabilidade civil perante terceiros", "um seguro que paga se a sua operação causar danos a outras pessoas ou aos seus bens."]],
          slides: [
            { title: "Dois tipos de aprovação", bullets: ["A pessoa: licença de piloto remoto e qualificações", "A empresa: certificado de operador"] },
            { title: "O certificado de operador pede", bullets: ["Manual de operações", "Pessoas responsáveis, pilotos licenciados", "Drones registados, manutenção, registos", "Seguro"] },
            { title: "Planeie", bullets: ["Obtenha a lista de verificação e as taxas atuais", "Pergunte às escolas aprovadas sobre os manuais", "Dê tempo antes de aceitar trabalho pago"] }
          ],
          sources: [KCAA_ROC, KCAA_UTO, NCAA_P21],
          tryIt: "Escreva o índice de um manual de operações para uma pequena empresa de mapeamento de culturas, com pelo menos oito secções (por exemplo: organização, responsabilidades, planeamento do voo, verificações antes do voo, emergências, manutenção, registos, comunicação de incidentes).",
          youCanNow: "planear as licenças de piloto e o certificado de operador de que uma empresa de serviços com drones precisa, e o que um manual de operações deve ter.",
          quickCheck: [
            { objective: "O4", q: "O que é um certificado de operador?", options: ["Uma licença para a pessoa que pilota", "Uma aprovação para a organização que vende serviços com drones", "O número de série de um drone", "O contrato de um cliente"], answer: 1, why: "O certificado de operador, como o ROC da KCAA ou o Certificado de Operador de RPAS da NCAA, é para a empresa." },
            { objective: "O4", q: "Está a preparar o pedido de um certificado de operador. Que documento escreve primeiro?", options: ["Uma publicação numa rede social", "Uma lista de preços para clientes", "Um logótipo de drone", "Um manual de operações para o planeamento, o voo, a manutenção e a comunicação de incidentes"], answer: 3, why: "A certificação de operador normalmente pede um manual de operações que mostre como a empresa opera com segurança." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Operações especiais: pulverização, BVLOS e aeródromos",
          minutes: 6,
          goal: "Identificar as operações que precisam de aprovações extra e quem as dá.",
          text: [
            "Pulverizar pesticidas ou largar qualquer coisa de um drone é uma operação especial. A Parte 21, por exemplo, proíbe largar ou descarregar coisas de uma forma que crie perigo e tem regras próprias para mercadorias perigosas, e a tabela de taxas do Quénia lista autorizações separadas para as categorias de risco mais alto. Muitos pesticidas são classificados como mercadorias perigosas. Conte com precisar de uma autorização de aviação específica, de uma aeronave certificada mais pesada e de equipas formadas.",
            "A pulverização também está sujeita à lei dos pesticidas. No Quénia, os produtos de controlo de pragas são regulados pelo Pest Control Products Board (PCPB); na Nigéria, os produtos agroquímicos são regulados pela NAFDAC. Pergunte-lhes se o produto pode ser aplicado do ar e que formação e equipamento de proteção os aplicadores precisam. A FAO e a OMS publicaram orientações para a aplicação aérea de pesticidas. Nunca pulverize, nem ofereça pulverização, sem as aprovações de aviação e de pesticidas.",
            "Outras operações especiais incluem voar para além da linha de vista (BVLOS), à noite, perto de aeródromos ou neles, sobre pessoas ou estradas, e em zonas restritas ou protegidas como os parques nacionais. Cada uma precisa de uma aprovação específica. Em África é comum haver grandes propriedades agrícolas perto de pistas de aterragem: verifique as distâncias e pergunte antes de planear."
          ],
          words: [["Mercadorias perigosas", "materiais que podem prejudicar a saúde, a segurança ou bens durante o transporte, como muitos pesticidas."], ["Regulador de pesticidas", "o organismo do governo que regista os pesticidas e controla como são usados."], ["BVLOS", "para além da linha de vista (em inglês, beyond visual line of sight): voar sem ver o drone com os próprios olhos."]],
          slides: [
            { title: "Pulverizar e largar coisas", bullets: ["Operações especiais, de risco mais alto", "Autorização de aviação, aeronave certificada, equipa formada", "Muitos pesticidas são mercadorias perigosas"] },
            { title: "Também a lei dos pesticidas", bullets: ["Quénia: Pest Control Products Board (PCPB)", "Nigéria: NAFDAC", "Orientações da FAO/OMS para a aplicação aérea"] },
            { title: "Outras operações especiais", bullets: ["Para além da vista, à noite", "Perto de aeródromos, sobre pessoas ou estradas", "Parques e zonas restritas"] },
            { title: "A regra", bullets: ["Não pulverize sem aprovação de aviação E de pesticidas", "Pergunte antes de planear perto de pistas de aterragem"] }
          ],
          sources: [NCAA_P21, KCAA_FEES, PCPB, NAFDAC, FAO_WHO_AERIAL],
          tryIt: "Uma plantação de cana-de-açúcar a 3 km de uma pista de aterragem pede-lhe para pulverizar um fungicida com drone. Liste cada aprovação e verificação de que precisaria (aviação, pesticidas, dono da terra, aeródromo) e quem contactaria para cada uma.",
          youCanNow: "reconhecer as operações especiais e listar as aprovações de aviação e de pesticidas de que elas precisam.",
          quickCheck: [
            { objective: "O5", q: "Que organismo regula os produtos agroquímicos na Nigéria?", options: ["NCAA", "ODPC", "KCAA", "NAFDAC"], answer: 3, why: "Na Nigéria, os produtos agroquímicos são regulados pela NAFDAC; as aprovações de aviação vêm da NCAA." },
            { objective: "O5", q: "Uma grande propriedade pede-lhe para pulverizar fungicida com drone na próxima semana. Só tem uma licença de piloto. O que faz?", options: ["Não oferece pulverização até ter as aprovações de aviação e de pesticidas", "Pulveriza de manhã cedo, quando não há ninguém", "Pulveriza só metade da propriedade", "Usa um drone mais leve e pulveriza na mesma"], answer: 0, why: "A pulverização precisa de uma autorização de aviação específica e de aprovações de pesticidas; nunca pulverize sem as duas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Montar e manter um dossiê de conformidade",
          minutes: 5,
          goal: "Montar um dossiê de conformidade e um calendário para o manter atualizado.",
          text: [
            "Um dossiê de conformidade guarda tudo o que prova que a sua operação é legal e segura, num só lugar que pode mostrar a um inspetor, a um cliente ou a uma seguradora. Guarde uma cópia em papel e uma cópia digital com cópia de segurança.",
            "Inclua: os regulamentos e as normas que segue (com as datas em que verificou); os certificados de registo de cada drone; as autorizações de importação; as licenças e qualificações dos pilotos; o certificado de operador; as autorizações de operação; o manual de operações; os certificados de seguro; os registos de manutenção; os registos de voo; os relatórios de incidentes; os acordos com clientes e as autorizações dos donos das terras; e os seus passos de proteção de dados (Quénia: ODPC; Nigéria: NDPC) se guardar dados pessoais de agricultores.",
            "As regras, as taxas e os formulários mudam. Tenha um calendário de renovações para cada licença e certificado, e veja o site da autoridade numa data fixa, por exemplo todos os meses, e antes de cada novo tipo de trabalho. Anote o que verificou e quando."
          ],
          steps: ["Crie o dossiê: em papel e digital com cópia de segurança.", "Junte os regulamentos, certificados, licenças, autorizações, o manual e o seguro.", "Junte os registos de manutenção, os registos de voo, os relatórios de incidentes e os acordos.", "Junte o registo ou os passos de proteção de dados se guardar dados pessoais.", "Faça um calendário de renovações e uma verificação mensal das regras."],
          words: [["Conformidade", "cumprir as leis e as regras que se aplicam a você."], ["Renovação", "fazer um novo pedido antes de uma licença ou um certificado expirar."]],
          slides: [
            { title: "Um só lugar para as provas", bullets: ["Para inspetores, clientes e seguradoras", "Cópia em papel e cópia digital com cópia de segurança"] },
            { title: "O que entra", bullets: ["Regulamentos, registos, autorizações de importação", "Licenças, certificado de operador, autorizações", "Manual, seguro, manutenção, registos de voo, incidentes"] },
            { title: "Inclua também", bullets: ["Acordos com clientes e donos das terras", "Passos de proteção de dados (ODPC, NDPC)"] },
            { title: "Mantenha-o atualizado", bullets: ["Calendário de renovações", "Verifique as regras todos os meses e antes de novos tipos de trabalho", "Anote o que verificou e quando"] }
          ],
          sources: [KCAA_UAS, KCAA_REGS_2026, NCAA_P21, ODPC, NDPC],
          tryIt: "Tarefa final: monte o dossiê de conformidade de uma empresa de serviços com drones no seu país: autoridade e regulamentos com datas, classificação e categoria de risco, cada aprovação e em que ponto está, documentos exigidos, aprovações extra de pulverização se a planear, passos de proteção de dados e um calendário de renovações e de verificação das regras.",
          youCanNow: "montar e manter um dossiê de conformidade que mostra que a sua operação com drones é legal e segura.",
          quickCheck: [
            { objective: "O6", q: "O que deve estar num dossiê de conformidade?", options: ["Só o recibo do drone", "Só fotos de voos anteriores", "Licenças, certificados, autorizações, o manual de operações, o seguro e os registos", "Só os pagamentos dos clientes"], answer: 2, why: "Um dossiê de conformidade guarda tudo o que prova que a sua operação é legal e segura." },
            { objective: "O6", q: "A sua licença de piloto remoto expira daqui a três meses. O que evita que se esqueça?", options: ["Esperar que a KCAA lhe telefone", "Um calendário de renovações com a data de cada licença e certificado", "Verificar só quando um cliente pergunta", "Guardar a licença na mala do drone"], answer: 1, why: "Um calendário de renovações e verificações em datas fixas mantêm cada licença e certificado em dia." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Licenças, certificação e conformidade",
        questions: [
          { objective: "O4", q: "Quem normalmente precisa de um certificado de operador?", options: ["A organização que vende serviços com drones", "Cada agricultor cujo campo é mapeado", "A loja de drones", "Ninguém"], answer: 0, why: "Os certificados de operador aprovam a empresa que faz as operações." },
          { objective: "O4", q: "O que é um manual de operações?", options: ["O guia do utilizador do drone", "As regras escritas de uma empresa para o planeamento, o voo, a manutenção e as emergências", "Um folheto de vendas", "Um recibo de taxa"], answer: 1, why: "As autoridades pedem aos operadores que mostrem como operam com segurança." },
          { objective: "O5", q: "No Quénia, que organismo regula os produtos de controlo de pragas?", options: ["KCAA", "ODPC", "Pest Control Products Board (PCPB)", "NDPC"], answer: 2, why: "O PCPB regula os produtos de controlo de pragas; a pulverização também precisa de aprovação de aviação." },
          { objective: "O5", q: "Um cliente quer um drone a pulverizar perto de uma pista de aterragem. O seu primeiro passo é:", options: ["Pulverizar de manhã cedo", "Pulverizar só metade do campo", "Ignorar a pista de aterragem", "Verificar as aprovações de aviação e de pesticidas e as regras de distância dos aeródromos"], answer: 3, why: "A pulverização e a proximidade de um aeródromo precisam, as duas, de aprovações específicas." },
          { objective: "O6", q: "Com que frequência deve verificar se as regras mudaram?", options: ["Em datas fixas, por exemplo todos os meses, e antes de novos tipos de trabalho", "Nunca", "Só quando for multado", "De dez em dez anos"], answer: 0, why: "As regras e as taxas mudam; um calendário mantém você em dia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones Agrícolas em África: Regulamentos de Aviação e Licenças",
    questions: [
      { objective: "O1", q: "A ICAO é:", options: ["O regulador de drones do Quénia", "A Organização da Aviação Civil Internacional da ONU", "Uma marca de drones", "Um pesticida"], answer: 1, why: "A ICAO define normas internacionais em que os países se baseiam." },
      { objective: "O1", q: "Quem escreve e faz cumprir a lei dos drones em cada país africano?", options: ["A ICAO diretamente", "Os fabricantes de drones", "A própria autoridade de aviação civil de cada país", "Só a União Africana"], answer: 2, why: "Cada país controla o seu espaço aéreo e as suas regras sobre drones." },
      { objective: "O1", q: "As normas de aplicação são:", options: ["Regras técnicas detalhadas que explicam como cumprir os regulamentos", "Normas de publicidade", "Variedades de culturas", "Apólices de seguro"], answer: 0, why: "Têm o detalhe técnico por trás dos regulamentos." },
      { objective: "O2", q: "Os principais regulamentos sobre drones do Quénia são:", options: ["A Parte 21 dos Nig.CARs", "A Data Protection Act 2019", "A Pest Control Products Act", "Os Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020"], answer: 3, why: "A KCAA supervisiona os UAS Regulations, 2020." },
      { objective: "O2", q: "A tabela de taxas da KCAA lista autorizações de operação para:", options: ["A Categoria A, e as Categorias B e C", "Só brinquedos", "Só aeronaves tripuladas", "Só importações"], answer: 0, why: "O Quénia autoriza as operações por categoria de risco." },
      { objective: "O2", q: "No Quénia, os pedidos de aprovações para drones são feitos:", options: ["Num escritório do condado", "Pelo sistema online para drones da KCAA", "Numa loja de drones", "Nas redes sociais"], answer: 1, why: "A KCAA tem um sistema online para RPAS." },
      { objective: "O2", q: "Antes de confiar nas regras sobre drones do Quénia de 2020, deve também verificar:", options: ["Artigos antigos de jornais", "A opinião de um amigo", "Os novos regulamentos publicados pela KCAA e as taxas atuais", "Nada"], answer: 2, why: "As regras e as taxas podem mudar; a KCAA lista os novos regulamentos." },
      { objective: "O3", q: "As regras sobre drones da Nigéria estão:", options: ["Nos UAS Regulations do Quénia", "Nas orientações da FAO", "Na Data Protection Act", "Na Parte 21 dos Nig.CARs 2023"], answer: 3, why: "A Parte 21 trata dos RPAS na Nigéria." },
      { objective: "O3", q: "Segundo a Parte 21, um drone de 15 kg está em que classe?", options: ["Pequena", "Nano", "Micro", "Grande"], answer: 0, why: "Pequena vai de 2 kg a menos de 25 kg." },
      { objective: "O3", q: "A categoria Aberta da Parte 21:", options: ["Não precisa de registo", "É de risco mais baixo, mas o drone tem de ser registado", "É para drones de pulverização pesados", "Quer dizer voar em qualquer lado"], answer: 1, why: "As operações Abertas são de baixo risco, mas mesmo assim são registadas." },
      { objective: "O3", q: "A Parte 21 limita muitas operações a:", options: ["1.000 m acima do solo", "Nenhum limite", "120 m (400 pés) acima do solo", "10 m acima do solo"], answer: 2, why: "120 m (400 pés) acima do solo é um limite comum na Parte 21." },
      { objective: "O3", q: "A Parte 21 mantém muitas operações com drones a que distância horizontal mínima das pessoas que não fazem parte delas?", options: ["1 m", "3 m", "30 m", "300 km"], answer: 2, why: "A Parte 21 usa 30 m das pessoas que não estão ligadas à operação." },
      { objective: "O4", q: "Uma licença de piloto remoto é para:", options: ["A pessoa que pilota", "O drone", "A exploração agrícola", "A empresa"], answer: 0, why: "As licenças são para pessoas; os certificados são para organizações e aeronaves." },
      { objective: "O4", q: "O seguro de responsabilidade civil perante terceiros paga quando:", options: ["O seu drone é roubado", "A sua operação causa danos a outras pessoas ou aos seus bens", "Os preços das culturas descem", "Passa num exame"], answer: 1, why: "Cobre os danos causados a outros." },
      { objective: "O5", q: "Na Nigéria, os produtos agroquímicos são regulados pela:", options: ["NCAA", "NDPC", "NAFDAC", "KCAA"], answer: 2, why: "A NAFDAC regula os produtos químicos, incluindo os agroquímicos." },
      { objective: "O5", q: "Muitos pesticidas são classificados como:", options: ["Alimentos", "Brinquedos", "Peças sobresselentes", "Mercadorias perigosas"], answer: 3, why: "As regras sobre mercadorias perigosas aplicam-se ao seu transporte por via aérea." },
      { objective: "O5", q: "Qual é uma operação especial que precisa de aprovação específica?", options: ["Voar para além da linha de vista", "Um voo num simulador", "Ler os regulamentos", "Carregar as baterias"], answer: 0, why: "O BVLOS tem risco mais alto e precisa de aprovação." },
      { objective: "O6", q: "Um dossiê de conformidade é:", options: ["Só uma lista de clientes", "Um só lugar com todas as provas de que a sua operação é legal e segura", "Uma peça de drone", "O rótulo de um pesticida"], answer: 1, why: "Guarda certificados, licenças, manuais, registos e mais." },
      { objective: "O6", q: "Se a sua empresa guarda os números de telefone de agricultores no Quénia, que lei também se aplica?", options: ["Nenhuma", "A Parte 21 dos Nig.CARs", "A Data Protection Act 2019 (lei de proteção de dados), supervisionada pelo ODPC", "Só o manual do drone"], answer: 2, why: "Os dados pessoais estão abrangidos pela lei de proteção de dados do Quénia." },
      { objective: "O1", q: "Este curso é:", options: ["Aconselhamento jurídico para o seu caso", "Uma licença de piloto remoto", "Uma permissão para voar", "Educação; confirme tudo com a autoridade oficial"], answer: 3, why: "As regras mudam; quem decide são as fontes oficiais e os profissionais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 7, 8, 12, 14, 16, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do dossiê e verifique-a outra vez.",
    criteria: [
      { name: "Autoridade e regulamentos", objective: "O1", notYet: "Falta a autoridade ou os regulamentos, ou não há links nem datas.", meets: "A autoridade, os regulamentos, as normas e a tabela de taxas estão listados com links e a data em que verificou.", exceeds: "Também indica as regras publicadas recentemente e como mudam o trabalho." },
      { name: "Classificação e risco", objective: "O3", notYet: "Falta a classe do drone ou a categoria de risco da operação, ou está errada.", meets: "A classificação do drone e a categoria de risco da operação estão certas segundo as regras do país.", exceeds: "Lista os limites de operação que se aplicam, como a altura e a distância das pessoas." },
      { name: "Aprovações necessárias", objective: "O2", notYet: "Faltam aprovações, ou não diz quem as emite.", meets: "Cada registo, autorização de importação, licença, certificado e autorização está listado com quem o emite e em que ponto está.", exceeds: "Inclui as taxas atuais e um prazo para obter cada um." },
      { name: "Documentos das pessoas e da empresa", objective: "O4", notYet: "Falta o manual de operações, o seguro ou os registos.", meets: "As licenças de piloto, o certificado de operador, o manual de operações, o seguro e os registos de manutenção e de voo estão listados.", exceeds: "Nomeia as pessoas responsáveis e onde cada documento está guardado." },
      { name: "Pulverização e operações especiais", objective: "O5", notYet: "A pulverização ou outras operações especiais estão planeadas sem aprovações extra.", meets: "As aprovações extra de aviação e de pesticidas para qualquer operação especial estão listadas com quem as dá.", exceeds: "Explica como as distâncias dos aeródromos e as regras sobre mercadorias perigosas afetam o trabalho." },
      { name: "Manter em dia", objective: "O6", notYet: "Não há datas de renovação nem calendário de verificação das regras; não há passos de proteção de dados.", meets: "Um calendário de renovações, datas fixas para verificar as regras e passos de proteção de dados para os dados dos agricultores.", exceeds: "Tem um registo que mostra as verificações feitas e o que mudou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do dossiê de conformidade",
      "Alunos que pedem um registo de drone, uma licença de piloto ou um certificado de operador em 90 dias (inquérito de seguimento)",
      "Empresas de drones geridas por antigos alunos que têm as aprovações para cada tipo de trabalho que oferecem",
      "Alunos que fazem o curso seguinte sobre drones ou começam uma formação aprovada de piloto remoto"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para abrir o site da autoridade de aviação civil",
      "Cópias descarregadas dos regulamentos, das normas e da tabela de taxas sobre drones do país",
      "Um caderno ou uma pasta para o dossiê de conformidade, com uma cópia digital de segurança",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo para montar o dossiê de conformidade"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois abra a página de drones da autoridade ao vivo para os alunos verem onde as regras estão guardadas.",
      "Antes de cada edição do curso, veja no site oficial se as regras e as taxas mudaram; não ensine a partir de notas antigas.",
      "Diga com clareza que isto é educação, não aconselhamento jurídico, e envie as perguntas específicas para a autoridade ou para um advogado.",
      "Não voe nem pulverize como parte do curso; nunca incentive a pulverização sem as aprovações de aviação e de pesticidas.",
      "Avalie o dossiê de conformidade com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
