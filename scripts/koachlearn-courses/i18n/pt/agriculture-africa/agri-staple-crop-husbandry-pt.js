"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-staple-crop-husbandry.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): certificação de sementes e a lista nacional de variedades (National Crop Variety List)", url: "https://www.kephis.go.ke" };
const NASC = { name: "National Agricultural Seed Council (NASC, Nigéria): certificação de sementes", url: "https://seedcouncil.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO: instituto de investigação agrária do Quénia)", url: "https://www.kalro.org" };
const IITA = { name: "International Institute of Tropical Agriculture (IITA: Instituto Internacional de Agricultura Tropical)", url: "https://www.iita.org" };
const AFRICARICE = { name: "AfricaRice (centro de investigação do arroz, com sede em Abidjan, Côte d'Ivoire)", url: "https://www.africarice.org" };
const IITA_CASSAVA_VIRUS = { name: "IITA: Spirited effort by IITA team to manage the viruses destroying cassava in Africa (o trabalho do IITA contra os vírus da mandioca, 2017)", url: "https://iita.org/?p=16690" };
const CIMMYT_MLN = { name: "CIMMYT: Understanding and preventing seed transmission of maize lethal necrosis (MLN) in Africa (como a necrose letal do milho passa pela semente)", url: "https://mln.cimmyt.org/understanding-and-preventing-seed-transmission-of-maize-lethal-necrosis-mln-in-africa" };
const JIRCAS_BLAST = { name: "JIRCAS com a AfricaRice: Genetic variation of blast resistance in rice from West Africa (resistância à brusone no arroz da África Ocidental, 2017)", url: "https://www.jircas.go.jp/en/publication/research_results/2017_b01" };
const PCPB = { name: "Pest Control Products Board (Quénia): produtos registados", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigéria): agroquímicos registados", url: "https://www.nafdac.gov.ng" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: manual de extensão sobre a gestão dos fertilizantes", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-staple-crop-husbandry-pt",
  lang: "pt",
  translationOf: "agri-staple-crop-husbandry",
  category: "Agriculture (Africa)",
  name: "Produção Moderna de Culturas Básicas: Milho, Arroz, Mandioca e Leguminosas",
  skills: "Escolher variedades e semente certificada, Calcular a população de plantas e a semente necessária a partir do compasso, Planear a preparação da terra, a adubação e as sachas, Reconhecer a necrose letal do milho, os vírus da mandioca e a brusone do arroz, Saber a hora de colher e calcular o rendimento por hectare e por acre",
  outcome: "escrever um plano de produção para a época de uma cultura básica (milho, arroz, mandioca ou uma leguminosa) na sua própria machamba: a variedade e a semente, a população de plantas e a semente necessária, um calendário com datas para a preparação da terra, a sementeira, a adubação e as sachas, as principais doenças a vigiar e o que fazer, e uma meta de rendimento por hectare e por acre.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas que cultivam os alimentos básicos que alimentam a África: milho, arroz, mandioca, feijão, feijão-nhemba, amendoim e soja. Os exemplos vêm do Quénia, da Nigéria, do Gana e da Côte d'Ivoire.",
    "O Capítulo 1 trata de começar bem a cultura: escolher uma variedade do seu instituto nacional de investigação e comprar semente certificada ou estacas limpas, preparar a terra, calcular quantas plantas precisa e quanta semente comprar, e marcar a hora certa da adubação e das sachas. O Capítulo 2 trata de proteger e medir a cultura: reconhecer a necrose letal do milho, o mosaico e a estria castanha da mandioca e a brusone do arroz, saber quando colher e calcular o seu rendimento por hectare e por acre.",
    "A análise do solo e os fertilizantes são ensinados no curso \"Saúde e Fertilidade do Solo\", e o armazenamento no curso \"Manuseamento e Armazenamento Pós-Colheita\"; por isso este curso remete para eles em vez de os repetir. As variedades, os compassos e as doses mudam de zona para zona, por isso use este curso com o seu extensionista e o instituto de investigação. Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de produção para uma cultura básica na sua própria machamba: o tamanho da machamba em hectares e em acres, a variedade escolhida e onde vai comprar semente certificada ou estacas limpas, o compasso e a população de plantas calculada, com a semente ou as estacas necessárias, um calendário com datas (preparação da terra, sementeira, fertilizante segundo a sua análise do solo ou o extensionista, cada sacha), as duas principais doenças a vigiar com a sua primeira resposta a cada uma, como vai saber a hora de colher, e uma meta de rendimento por hectare e por acre com os seus cálculos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas em toda a África que cultivam milho, arroz, mandioca e leguminosas (feijão, feijão-nhemba, amendoim, soja), desde meio acre até alguns hectares.",
    startingPoint: "Cultivam há anos, muitas vezes com semente guardada ou estacas emprestadas, sementeira a lanço ou compasso irregular, sachas tardias e poucos registos do rendimento. Muitos não sabem a sua população de plantas, que variedade têm, nem como calcular o rendimento por hectare ou por acre.",
    gap: "Em muitas machambas africanas, o rendimento das culturas básicas fica muito abaixo do que as variedades melhoradas e uma boa condução da cultura podem dar. Os alunos precisam de escolher uma variedade adequada e semente limpa, semear a população certa, adubar e sachar a tempo, reconhecer as doenças que destroem as culturas, colher na hora certa e medir o seu rendimento para verem o que funciona.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos usam o português como segunda língua",
      "Matemática: multiplicações e divisões simples com a calculadora do telefone; cada cálculo é mostrado passo a passo",
      "Aparelhos: um telefone simples com calculadora; uma fita métrica ou uma corda marcada e uma balança ajudam",
      "As variedades, os compassos e as doses de fertilizante mudam de zona para zona e com o lançamento de novas variedades; os alunos consultam a lista nacional de variedades e o seu extensionista",
      "A fertilidade é ensinada em \"Saúde e Fertilidade do Solo\"; este curso só trata do que muda de cultura para cultura"
    ],
    prerequisites: "Nenhum, mas recomenda-se muito fazer \"Saúde e Fertilidade do Solo\" antes ou ao mesmo tempo que este curso."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para uma cultura básica que vai semear na próxima época", action: "escolher uma variedade do seu instituto nacional de investigação ou da lista de variedades e indicar uma fonte registada de semente certificada ou de estacas limpas", standard: "verificando o rótulo, o selo ou a origem antes de pagar" },
    { id: "O2", condition: "Com um compasso e o tamanho da sua machamba", action: "calcular a população de plantas por hectare e por acre e a semente ou as estacas de que precisa", standard: "mostrando cada passo do cálculo" },
    { id: "O3", condition: "Para a cultura escolhida e a data de sementeira", action: "marcar num calendário com datas a preparação da terra, a sementeira, a adubação e as sachas", standard: "com as sachas dentro das primeiras semanas críticas da cultura" },
    { id: "O4", condition: "Com os sinais de uma planta ou de um campo doente", action: "identificar a necrose letal do milho, o mosaico da mandioca, a estria castanha da mandioca ou a brusone do arroz e escolher a primeira resposta", standard: "ligando cada doença ao primeiro passo certo" },
    { id: "O5", condition: "No fim da época", action: "saber quando a cultura está pronta e calcular o rendimento por hectare e por acre a partir de uma colheita pesada", standard: "usando a área certa e mostrando os seus cálculos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Começar bem a cultura",
      lessons: [
        {
          title: "Escolher uma variedade e comprar semente certificada",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher uma variedade adequada à sua zona e indicar uma fonte registada de semente certificada ou de estacas limpas.",
          text: [
            "Uma variedade é um tipo da cultura melhorado para ter certas características: ciclo curto ou longo, tolerância à seca, resistência a doenças, cor do grão ou qualidade para cozinhar. Os institutos nacionais de investigação testam e lançam variedades para cada zona: a KALRO no Quénia, os institutos de investigação da Nigéria que trabalham com o IITA, o CSIR-Crops Research Institute no Gana e o CNRA na Côte d'Ivoire. O IITA trabalha com mandioca, milho, feijão-nhemba e soja, e a AfricaRice, com sede em Abidjan, com arroz. Pergunte ao seu extensionista que variedades são recomendadas para a sua zona, a sua chuva e o seu mercado.",
            "Escolha para as suas condições: variedades de ciclo curto para chuvas curtas ou zonas secas, variedades tolerantes ou resistentes onde uma doença é comum (por exemplo a necrose letal do milho ou a estria castanha da mandioca), e o que os compradores querem (milho branco ou amarelo, arroz para parboilizar, mandioca doce ou amarga).",
            "Semente certificada é semente inspecionada pela autoridade nacional de sementes quanto à pureza e à germinação. No Quénia, o KEPHIS certifica a semente e publica a lista nacional de variedades, e as embalagens certificadas têm um rótulo do KEPHIS que pode verificar. Na Nigéria, o National Agricultural Seed Council (NASC) certifica a semente. Compre embalagens seladas e com rótulo a um vendedor registado. A semente de milho híbrido tem de ser comprada nova em cada época, porque o rendimento cai se voltar a semear o grão colhido. As variedades de polinização aberta (OPV) e as leguminosas podem ser guardadas durante algumas épocas se escolher semente limpa de plantas saudáveis. Para a mandioca, obtenha estacas limpas de um multiplicador inspecionado ou de um campo saudável, nunca de um campo com mosaico ou estria castanha. Para a soja, pergunte por um inoculante (rizóbio) onde a extensão o aconselhar."
          ],
          steps: ["Pergunte à extensão que variedades são recomendadas para a sua zona e a sua chuva.", "Escolha pelo ciclo, pela resistência a doenças e pelo que os compradores querem.", "Verifique a variedade na lista nacional, onde houver uma publicada (por exemplo a do KEPHIS no Quénia).", "Compre semente certificada, selada e com rótulo a um vendedor registado; verifique a data e o rótulo.", "Para a mandioca, obtenha estacas limpas de um multiplicador inspecionado ou de um campo saudável."],
          words: [["Variedade", "um tipo de uma cultura melhorado para ter certas características, como ciclo curto ou resistência a doenças."], ["Semente certificada", "semente verificada pela autoridade nacional de sementes quanto à pureza e à germinação."], ["Híbrido", "semente do cruzamento de duas linhas mãe; rende bem mas tem de ser comprada nova em cada época."], ["OPV", "variedade de polinização aberta: semente que pode ser guardada e voltar a ser semeada durante algumas épocas se for mantida limpa."], ["Inoculante", "um produto com bactérias úteis que ajudam leguminosas como a soja a fixar azoto."]],
          slides: [
            { title: "As variedades vêm dos institutos de investigação", bullets: ["Quénia: KALRO; Gana: CSIR-Crops Research Institute", "Côte d'Ivoire: CNRA; arroz: AfricaRice", "Mandioca, feijão-nhemba, soja, milho: IITA"] },
            { title: "Escolha para as suas condições", bullets: ["Ciclo curto para épocas curtas ou secas", "Resistência às doenças da zona", "O que os seus compradores querem"] },
            { title: "Semente certificada", bullets: ["Quénia: rótulo do KEPHIS que pode verificar", "Nigéria: certificação do NASC", "Selada, com rótulo, de um vendedor registado"] },
            { title: "Híbrido, OPV e estacas", bullets: ["Milho híbrido: compre semente nova em cada época", "OPV e leguminosas: guarde semente limpa algumas épocas", "Mandioca: estacas limpas, nunca de campos doentes"] }
          ],
          sources: [KEPHIS, NASC, KALRO, IITA, AFRICARICE],
          tryIt: "Para uma cultura básica que vai semear na próxima época, peça ao seu extensionista ou ao vendedor de insumos duas variedades recomendadas. Anote o ciclo, a resistência a doenças e onde pode comprar semente certificada ou estacas limpas. Se estiver no Quénia, verifique a variedade e o vendedor nas listas do KEPHIS.",
          youCanNow: "escolher uma variedade adequada à sua zona e comprar semente certificada ou estacas limpas de uma fonte registada.",
          quickCheck: [
            { objective: "O1", q: "Na época passada semeou milho híbrido. Pode voltar a semear o grão que colheu?", options: ["Sim, vai render o mesmo", "Sim, se semear mais junto", "Não, o rendimento cai; compre semente híbrida certificada nova", "Só se o puser de molho em água"], answer: 2, why: "A semente híbrida perde o vigor na geração seguinte, por isso é precisa semente nova em cada época." },
            { objective: "O1", q: "A mandioca do seu vizinho tem folhas com mosaico amarelo. Ele oferece-lhe estacas. O que faz?", options: ["Aceita; as estacas são de graça", "Recusa e obtém estacas limpas de um multiplicador inspecionado ou de um campo saudável", "Aceita e semeia-as perto da estrada", "Aceita só as estacas de cima"], answer: 1, why: "Os vírus da mandioca viajam nas estacas, por isso os campos doentes passam a doença para o seu." }
          ]
        },
        {
          title: "Preparação da terra e população de plantas",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular as plantas por hectare e por acre a partir de um compasso, e a semente ou as estacas de que precisa.",
          text: [
            "Prepare a terra para a cultura. Limpe sem queimar e, onde puder, deixe os restos das culturas como cobertura. O milho, o feijão e o amendoim precisam de uma cama de sementeira firme, com terra fina à volta da semente; a mobilização mínima ou as covas de plantio funcionam em muitas zonas. Na Nigéria e no Gana, a mandioca é muitas vezes plantada em camalhões ou montículos que escoam bem a água. O arroz de baixa precisa de diques, de um campo nivelado e de um bom controlo da água; o arroz transplantado é normalmente feito em lama (puddling).",
            "A população de plantas é o número de plantas por hectare. Plantas a menos desperdiçam terra; plantas a mais competem pela luz, pela água e pelos nutrientes. Use o compasso que o seu guia de extensão dá para a sua variedade e a sua zona. Para calcular: área de uma planta = distância entre linhas x distância entre plantas (em metros). Plantas por hectare = 10,000 m2 / área por planta. Plantas por acre = 4,047 m2 / área por planta (um acre tem cerca de 4,047 m2, e um hectare tem cerca de 2.47 acres).",
            "Exemplos resolvidos, se o seu guia der estes compassos: milho a 75 cm x 25 cm, uma semente por cova: 0.75 x 0.25 = 0.1875 m2, por isso 10,000 / 0.1875 = cerca de 53,300 plantas por hectare, ou 4,047 / 0.1875 = cerca de 21,600 por acre. Mandioca a 1 m x 1 m: 10,000 plantas por hectare, cerca de 4,000 por acre. Arroz transplantado a 20 cm x 20 cm: 0.04 m2, por isso 250,000 covachos por hectare. Feijão a 50 cm x 10 cm: 0.05 m2, por isso 200,000 plantas por hectare.",
            "Semente necessária: número de sementes / sementes por kg (conte e pese 100 sementes, ou leia a embalagem) = kg, mais cerca de 10% para as falhas. Para a mandioca, conte as estacas (muitas vezes com cerca de 20 a 25 cm, de caules maduros), mais algumas de reserva. Depois retanche as falhas uma a duas semanas depois da emergência."
          ],
          steps: ["Meça a sua machamba em metros; área = comprimento x largura.", "Obtenha o compasso recomendado para a sua variedade e a sua zona.", "Área por planta = distância entre linhas x distância entre plantas (em metros).", "Plantas por hectare = 10,000 / área por planta; por acre = 4,047 / área por planta.", "Plantas na sua machamba = área da machamba / área por planta.", "Semente: plantas / sementes por kg, mais cerca de 10%."],
          words: [["População de plantas", "o número de plantas por hectare ou por acre."], ["Hectare (ha)", "uma área de 10,000 metros quadrados, cerca de 2.47 acres."], ["Acre", "uma área de cerca de 4,047 metros quadrados, cerca de 0.4 hectare."], ["Dique", "um muro baixo de terra à volta de um campo de arroz que segura a água."], ["Puddling", "trabalhar a terra molhada num campo de arroz para fazer uma lama mole que segura a água e controla as ervas daninhas."]],
          slides: [
            { title: "Prepare a terra para a cultura", bullets: ["Sem queimadas; deixe os restos como cobertura", "Cama de sementeira fina para milho, feijão e amendoim", "Camalhões ou montículos para a mandioca; diques e campos nivelados para o arroz"] },
            { title: "A fórmula da população de plantas", bullets: ["Área por planta = entre linhas x entre plantas (m)", "Por hectare = 10,000 / área por planta", "Por acre = 4,047 / área por planta"] },
            { title: "Exemplos resolvidos", bullets: ["Milho 75 x 25 cm: cerca de 53,300/ha, 21,600/acre", "Mandioca 1 x 1 m: 10,000/ha", "Arroz 20 x 20 cm: 250,000 covachos/ha"] },
            { title: "Quanta semente?", bullets: ["Plantas / sementes por kg, mais cerca de 10%", "Conte e pese 100 sementes se a embalagem não disser", "Retanche as falhas em uma a duas semanas"] }
          ],
          sources: [KALRO, IITA],
          tryIt: "Meça uma das suas machambas (ou multiplique o seu tamanho em acres por 4,047 para ter metros quadrados). Peça à extensão o compasso para a sua cultura e depois calcule as plantas por hectare, por acre e na sua machamba, e quanta semente ou quantas estacas deve comprar.",
          youCanNow: "calcular a população de plantas por hectare e por acre a partir de um compasso, e quanta semente ou quantas estacas precisa.",
          quickCheck: [
            { objective: "O2", q: "A mandioca é plantada a 1 m x 1 m. Quantas plantas por hectare?", options: ["1,000", "4,047", "100,000", "10,000"], answer: 3, why: "Cada planta usa 1 m2, e um hectare tem 10,000 m2." },
            { objective: "O2", q: "Uma machamba tem 0.5 hectare e o milho precisa de cerca de 53,300 plantas por hectare. Mais ou menos quantas plantas precisa?", options: ["26,650", "53,300", "106,600", "5,330"], answer: 0, why: "0.5 x 53,300 = 26,650 plantas." }
          ]
        },
        {
          title: "Adubar e sachar a tempo",
          objectives: ["O3"],
          minutes: 5,
          goal: "Marcar a sementeira, a adubação e as sachas num calendário com datas para a sua cultura.",
          text: [
            "A análise do solo, o estrume, o composto e os fertilizantes são ensinados em \"Saúde e Fertilidade do Solo\"; use a sua análise do solo ou o conselho do seu extensionista para saber o que aplicar e quanto. O que muda de cultura para cultura é quando e de que cada uma precisa mais. O milho tem muita fome de azoto e precisa dele cedo e outra vez quando cresce depressa. As leguminosas (feijão, feijão-nhemba, amendoim, soja) fazem grande parte do seu próprio azoto através dos nódulos das raízes, por isso precisam mais de fósforo do que de azoto. A mandioca cresce em solos mais pobres mas, com o tempo, tira muito potássio do solo. O arroz recebe normalmente o azoto em doses divididas; azoto a mais piora a brusone do arroz.",
            "As ervas daninhas roubam mais água, luz e nutrientes nas primeiras semanas depois de a cultura nascer. Este é o período crítico: é nessa altura que as ervas daninhas custam mais rendimento, e sachar mais tarde não o recupera. Muitos guias indicam uma primeira sacha cerca de duas a três semanas depois de a cultura nascer e uma segunda algumas semanas depois; confirme no seu guia local. A mandioca cresce devagar no início e precisa de ficar limpa durante mais ou menos os primeiros três meses, até as folhas cobrirem o chão. No arroz de baixa, um bom nivelamento e manter água no campo ajudam a travar as ervas daninhas.",
            "Os herbicidas podem poupar trabalho, mas têm de estar registados para a sua cultura (PCPB no Quénia, NAFDAC na Nigéria) e ser usados como diz o rótulo, com equipamento de proteção. Ponha tudo num calendário contado a partir da data de sementeira, para que o trabalho e o dinheiro estejam prontos a tempo."
          ],
          steps: ["Escreva a sua data de sementeira.", "Acrescente a preparação da terra nas semanas antes.", "Acrescente a adubação segundo a sua análise do solo ou a extensão, na fase certa da cultura.", "Acrescente a primeira sacha dentro das primeiras semanas críticas, e as seguintes.", "Anote quando precisa de mão de obra, insumos e dinheiro para cada trabalho."],
          words: [["Período crítico", "as primeiras semanas em que as ervas daninhas causam mais perda de rendimento; é nessa altura que tem de sachar."], ["Nódulos das raízes", "pequenos inchaços nas raízes das leguminosas onde bactérias transformam o azoto do ar em alimento para a planta."], ["Dose dividida", "dar o fertilizante em duas ou mais partes, em fases diferentes da cultura, em vez de tudo de uma vez."], ["Herbicida", "um químico que mata as ervas daninhas; tem de estar registado e ser usado como diz o rótulo."]],
          slides: [
            { title: "Fertilidade: veja Saúde e Fertilidade do Solo", bullets: ["Use a sua análise do solo ou o conselho da extensão", "Esta lição: o que muda de cultura para cultura"] },
            { title: "Do que cada cultura precisa mais", bullets: ["Milho: azoto, cedo e enquanto cresce", "Leguminosas: fósforo; fazem o seu próprio azoto", "Mandioca: potássio com o tempo; arroz: azoto em doses divididas"] },
            { title: "Sache no período crítico", bullets: ["As primeiras semanas depois da emergência são as que mais contam", "Muitas vezes a 1.ª sacha é a cerca de 2 a 3 semanas; confirme localmente", "Mandioca: mantenha limpa cerca dos primeiros 3 meses"] },
            { title: "Ponha num calendário", bullets: ["Conte a partir da data de sementeira", "Mão de obra, insumos e dinheiro prontos a tempo", "Herbicidas: registados, rótulo, equipamento de proteção"] }
          ],
          sources: [HANDBOOK_4R, PCPB, NAFDAC],
          tryIt: "Escreva um calendário para a sua cultura a partir da data de sementeira planeada: preparação da terra, sementeira, cada adubação que a sua análise do solo ou o extensionista aconselha, e cada sacha. Marque o período crítico das sachas com outra cor.",
          youCanNow: "planear a adubação e as sachas num calendário com datas, para que as ervas daninhas sejam controladas nas primeiras semanas críticas.",
          quickCheck: [
            { objective: "O3", q: "Quando é que as ervas daninhas causam mais perda de rendimento?", options: ["Mesmo antes da colheita", "Nas primeiras semanas depois de a cultura nascer", "Depois da colheita", "Só na época seca"], answer: 1, why: "O período crítico são as primeiras semanas; sachar mais tarde não recupera esse rendimento." },
            { objective: "O3", q: "Que cultura faz grande parte do seu próprio azoto através dos nódulos das raízes?", options: ["Milho", "Arroz", "Mandioca", "Feijão"], answer: 3, why: "As leguminosas como o feijão fixam azoto com a ajuda de bactérias nos nódulos das raízes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Começar bem a cultura",
        questions: [
          { objective: "O1", q: "No Quénia, que organismo certifica a semente e publica a lista nacional de variedades?", options: ["O KEPHIS", "O serviço distrital de estradas", "O mercado local", "O banco"], answer: 0, why: "O KEPHIS certifica a semente e publica a lista das variedades lançadas no Quénia." },
          { objective: "O1", q: "Na sua zona as chuvas costumam ser curtas. Que característica da variedade conta mais?", options: ["Ciclo longo", "Ciclo curto", "Caules altos", "Grão vermelho"], answer: 1, why: "Uma variedade de ciclo curto termina antes de acabarem as chuvas." },
          { objective: "O2", q: "O milho a 75 cm x 25 cm usa quanta área por planta?", options: ["1 m2", "0.25 m2", "0.1875 m2", "0.75 m2"], answer: 2, why: "0.75 m x 0.25 m = 0.1875 m2." },
          { objective: "O2", q: "Mais ou menos quantos metros quadrados tem um acre?", options: ["10,000", "1,000", "2,470", "4,047"], answer: 3, why: "Um acre tem cerca de 4,047 m2; um hectare tem 10,000 m2." },
          { objective: "O3", q: "Onde é que este curso o manda procurar as doses de fertilizante?", options: ["Na sua análise do solo e no seu extensionista, como em Saúde e Fertilidade do Solo", "No maior saco da loja", "No que um vizinho usou", "Numa quantidade fixa para todas as culturas"], answer: 0, why: "As doses dependem do seu solo e da sua cultura, por isso vêm de uma análise do solo ou da extensão." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger e medir a cultura",
      lessons: [
        {
          title: "Doenças principais: necrose letal do milho, vírus da mandioca e brusone",
          objectives: ["O4"],
          minutes: 6,
          goal: "Identificar a necrose letal do milho, o mosaico da mandioca, a estria castanha da mandioca e a brusone do arroz e escolher uma primeira resposta.",
          text: [
            "A necrose letal do milho (MLN) atingiu fortemente o Quénia a partir de 2011 e espalhou-se pela África Oriental. O CIMMYT explica que acontece quando o milho é infetado por dois vírus ao mesmo tempo: o vírus do mosqueado clorótico do milho e um potyvírus, como o vírus do mosaico da cana-de-açúcar. As folhas ficam com manchas amarelas e depois secam das margens para dentro; o centro da planta pode morrer, e as maçarocas ficam pequenas, vazias ou podres. Insetos como os tripes e os afídeos espalham-na no campo, e a semente infetada pode levá-la para muito longe. Resposta: semeie semente certificada de variedades tolerantes à MLN, faça rotação e deixe de semear milho durante uma época junto com os seus vizinhos, arranque o milho que nasce sozinho, controle as ervas daninhas, arranque e destrua cedo as plantas doentes, e informe a extensão.",
            "A doença do mosaico da mandioca (CMD) deixa as folhas com manchas amarelas e verdes (mosaico), torcidas e pequenas, e atrofia a planta. A doença da estria castanha da mandioca (CBSD) mostra manchas amarelas ao longo das nervuras das folhas mais velhas e estrias castanhas nos caules, mas o pior estrago está escondido: as raízes ficam com uma podridão dura, castanha e seca, às vezes quando as folhas parecem quase saudáveis. O IITA calcula que estas duas doenças custam à África cerca de US$1 mil milhões por ano. As moscas-brancas espalham as duas, mas o principal caminho para longe são os agricultores a partilharem estacas infetadas. Resposta: plante estacas limpas de variedades tolerantes, arranque e destrua cedo as plantas doentes, nunca tire estacas de campos doentes e, na África Oriental, arranque algumas raízes para ver se há podridão castanha antes da colheita.",
            "A brusone do arroz é uma doença causada por um fungo e é um grande problema na África Ocidental. Nas folhas faz manchas em forma de losango ou de olho, com o centro cinzento e as margens castanhas. Quando ataca o pescoço por baixo da panícula, a panícula fica branca e vazia. A investigação com a AfricaRice concluiu que as variedades resistentes são o controlo mais barato para os pequenos agricultores, mas o fungo pode vencer a resistência alguns anos depois de uma variedade ser muito semeada, por isso as novas variedades são importantes. Resposta: semeie uma variedade recomendada como resistente, evite azoto a mais, evite que o arroz de sequeiro sofra com a seca, use semente limpa e retire os restos infetados. Use um fungicida só se a extensão o aconselhar e se estiver registado para o arroz."
          ],
          steps: ["Inspecione o campo todas as semanas; compare o que vê com os sinais desta lição.", "Fotografe as plantas doentes e peça à extensão ou a uma clínica de plantas para confirmar.", "Arranque e destrua cedo as plantas doentes (MLN e vírus da mandioca).", "Na próxima época: semente certificada ou estacas limpas de uma variedade tolerante ou resistente.", "Combine com os vizinhos a rotação e o material de plantação limpo."],
          words: [["MLN", "necrose letal do milho: uma doença de dois vírus juntos que pode matar as plantas de milho."], ["CMD", "doença do mosaico da mandioca: uma doença de vírus que deixa as folhas da mandioca com manchas, torcidas e pequenas."], ["CBSD", "doença da estria castanha da mandioca: uma doença de vírus que causa uma podridão castanha e seca nas raízes da mandioca."], ["Brusone do arroz", "uma doença do arroz causada por um fungo, que faz manchas em forma de olho nas folhas e pode deixar as panículas brancas e vazias."], ["Arrancar plantas doentes (roguing)", "tirar e destruir as plantas doentes para não espalharem a doença."]],
          slides: [
            { title: "Necrose letal do milho (MLN)", bullets: ["Dois vírus juntos (CIMMYT)", "Manchas amarelas; as folhas secam das margens", "Espalhada por insetos e por semente infetada"] },
            { title: "Mosaico e estria castanha da mandioca", bullets: ["CMD: folhas com manchas, torcidas e pequenas", "CBSD: nervuras amarelas, estrias no caule, podridão castanha da raiz", "Espalhadas por moscas-brancas e por estacas partilhadas"] },
            { title: "Brusone do arroz", bullets: ["Manchas em forma de olho, centro cinzento, margem castanha", "Brusone do pescoço: panículas brancas e vazias", "A resistência pode cair depois de alguns anos"] },
            { title: "Primeiras respostas", bullets: ["Confirme com a extensão ou uma clínica de plantas", "Arranque cedo as plantas doentes", "Próxima época: semente limpa, variedades tolerantes, rotação"] }
          ],
          sources: [CIMMYT_MLN, IITA_CASSAVA_VIRUS, JIRCAS_BLAST, AFRICARICE],
          tryIt: "Percorra a sua machamba (ou a de um vizinho) e procure os sinais da doença que mais conta para a sua cultura. Escreva o que viu, tire uma fotografia de tudo o que for duvidoso e escreva a primeira resposta que daria a essa doença.",
          youCanNow: "reconhecer a necrose letal do milho, o mosaico da mandioca, a estria castanha da mandioca e a brusone do arroz e escolher uma primeira resposta.",
          quickCheck: [
            { objective: "O4", q: "As folhas da sua mandioca parecem quase saudáveis, mas as raízes arrancadas têm uma podridão dura, castanha e seca. A causa mais provável é:", options: ["A doença da estria castanha da mandioca", "Chuva a mais na plantação", "A lagarta-do-funil (lagarta-do-cartucho)", "A brusone do arroz"], answer: 0, why: "A CBSD apodrece as raízes, às vezes com poucos sinais nas folhas." },
            { objective: "O4", q: "As folhas do arroz têm manchas em forma de olho, com o centro cinzento e as margens castanhas. Qual é uma boa resposta?", options: ["Pôr mais fertilizante de azoto", "Semear a mesma semente na próxima época", "Pedir à extensão para confirmar a brusone e semear uma variedade resistente na próxima época", "Inundar a casa"], answer: 2, why: "São manchas de brusone; as variedades resistentes e o azoto equilibrado são os principais controlos." }
          ]
        },
        {
          title: "Saber quando colher",
          objectives: ["O5"],
          minutes: 4,
          goal: "Saber quando o seu milho, arroz, mandioca ou leguminosa está pronto para colher.",
          text: [
            "Se colher cedo demais, o grão fica leve e húmido; se colher tarde demais, perde colheita para os pássaros, os ratos, a chuva, a debulha natural e a podridão, e o grão tem mais probabilidade de ganhar aflatoxina. A secagem e o armazenamento são ensinados em \"Manuseamento e Armazenamento Pós-Colheita\".",
            "O milho está maduro quando se forma uma camada preta onde o grão se liga ao carolo e as palhas estão secas; abra algumas palhas e parta alguns grãos para verificar. Depois seque-o bem antes de o guardar. O arroz está pronto quando a maior parte dos grãos das panículas ficou dourada e dura; esperar demais traz debulha natural e perdas para os pássaros. O feijão e o feijão-nhemba estão prontos quando a maior parte das vagens está seca e chocalha; colha antes de abrirem. O amendoim está pronto quando as folhas amarelecem e o interior da maior parte das cascas escureceu; arranque algumas plantas para verificar.",
            "A mandioca não tem um único dia de colheita: cada variedade tem o seu ciclo, e as raízes podem ficar algum tempo na terra. Mas as raízes deixadas tempo demais podem ficar lenhosas e, onde a estria castanha é comum, a podridão piora. Depois de arrancada, a mandioca estraga-se em poucos dias, por isso colha só o que consegue vender ou processar depressa. No Gana e na Nigéria, muitos agricultores marcam a colheita conforme a capacidade de quem processa o gari ou o fufu."
          ],
          steps: ["Saiba o ciclo da sua variedade pela embalagem da semente ou pela extensão.", "Verifique algumas plantas em vários pontos do campo, não só uma.", "Milho: camada preta e palhas secas; arroz: a maior parte dos grãos dourados e duros.", "Leguminosas: vagens secas que chocalham; amendoim: interior das cascas escuro.", "Mandioca: colha só o que consegue vender ou processar em poucos dias."],
          words: [["Camada preta", "uma mancha escura onde o grão de milho se liga ao carolo; mostra que o grão deixou de encher."], ["Debulha natural", "grão ou vagens que caem ou se abrem no campo antes da colheita."], ["Ciclo", "o tempo que uma variedade leva da sementeira à colheita."]],
          slides: [
            { title: "Cedo demais ou tarde demais: perde sempre", bullets: ["Cedo: grão leve e húmido", "Tarde: pássaros, ratos, chuva, debulha natural, podridão", "Secagem e armazenamento: veja o curso Pós-Colheita"] },
            { title: "Cereais", bullets: ["Milho: camada preta, palhas secas", "Arroz: a maior parte dos grãos dourados e duros", "Verifique várias plantas em todo o campo"] },
            { title: "Leguminosas e mandioca", bullets: ["Feijão, feijão-nhemba: vagens secas que chocalham", "Amendoim: o interior das cascas escurece", "Mandioca: estraga-se em poucos dias depois de arrancada"] }
          ],
          tryIt: "Para a sua cultura, escreva o ciclo da variedade, os sinais que vai verificar e a data em que espera começar a verificar. Se a sua cultura já estiver no campo, verifique cinco plantas em vários pontos e escreva o que vê.",
          youCanNow: "saber quando a sua cultura básica está pronta para colher.",
          quickCheck: [
            { objective: "O5", q: "Como sabe que o grão de milho deixou de encher?", options: ["As folhas ainda estão verdes", "Forma-se uma camada preta onde o grão se liga ao carolo", "Aparece a bandeira", "Choveu duas vezes"], answer: 1, why: "A camada preta mostra a maturação fisiológica." },
            { objective: "O5", q: "Porque colher só a mandioca que consegue vender ou processar em poucos dias?", options: ["As raízes de mandioca estragam-se depressa depois de arrancadas", "As raízes de mandioca voltam a crescer depois de arrancadas", "Os compradores preferem raízes secas", "As folhas são o produto principal"], answer: 0, why: "As raízes frescas de mandioca estragam-se poucos dias depois da colheita." }
          ]
        },
        {
          title: "Calcular o rendimento e escrever o seu plano de produção",
          objectives: ["O5", "O2", "O3"],
          minutes: 6,
          goal: "Calcular o rendimento por hectare e por acre e escrever um plano de produção para uma cultura básica na sua machamba.",
          text: [
            "O rendimento é o peso da colheita por área. Para o saber, pese a colheita depois de seca e saiba a área exata de onde veio. Rendimento por hectare = kg colhidos / área em m2 x 10,000. Rendimento por acre = kg colhidos / área em m2 x 4,047. Ou, de por hectare para por acre: divida por 2.47.",
            "Exemplo, milho no Quénia: colhe 1,350 kg de grão seco numa machamba de 3,000 m2. Por hectare: 1,350 / 3,000 x 10,000 = 4,500 kg, ou 4.5 toneladas. Por acre: 4,500 / 2.47 = cerca de 1,820 kg, ou seja, cerca de 20 sacos de 90 kg. Uma estimativa rápida antes da colheita: marque um quadrado de 10 m x 10 m (100 m2) numa parte normal do campo, colha-o e seque-o, pese-o e multiplique por 100 para ter kg por hectare. Faça isto em dois ou três lugares e tire a média.",
            "Agora junte todo o curso num plano de produção para uma cultura básica na sua própria machamba: o tamanho da machamba, a variedade e a origem da semente, o compasso com a população de plantas e a semente necessária, um calendário com datas para a preparação da terra, a sementeira, a adubação e as sachas, as principais doenças e a sua primeira resposta, como vai saber a hora de colher, e uma meta de rendimento por hectare e por acre. Depois da colheita, compare o rendimento real com a meta e escreva o que vai mudar. Uma agricultora na Côte d'Ivoire que anota o rendimento do seu arroz em cada época pode mostrar a um comprador, a uma cooperativa ou a quem empresta dinheiro o que a sua machamba produz."
          ],
          steps: ["Meça a área colhida em m2.", "Pese a colheita seca em kg.", "Por hectare = kg / m2 x 10,000; por acre = kg / m2 x 4,047.", "Ou faça amostras de 100 m2 em 2 ou 3 pontos, pese e multiplique por 100 para ter kg/ha.", "Escreva o plano: variedade, semente, população, calendário, doenças, colheita, meta de rendimento.", "Depois da colheita, compare o rendimento real com a meta."],
          words: [["Rendimento", "a quantidade de colheita por área, como kg por hectare ou sacos por acre."], ["Tonelada", "1,000 quilogramas."], ["Parcela de amostra", "uma pequena área marcada que se colhe e pesa para estimar o rendimento de todo o campo."]],
          slides: [
            { title: "Fórmulas do rendimento", bullets: ["Por ha = kg / área (m2) x 10,000", "Por acre = kg / área (m2) x 4,047", "De por ha para por acre: divida por 2.47"] },
            { title: "Exemplo resolvido: milho", bullets: ["1,350 kg em 3,000 m2", "= 4,500 kg/ha (4.5 t/ha)", "= cerca de 1,820 kg/acre, cerca de 20 sacos de 90 kg"] },
            { title: "Estimativa com parcela de amostra", bullets: ["Marque 10 m x 10 m (100 m2)", "Colha, seque, pese; x 100 = kg/ha", "Faça em 2 ou 3 pontos e tire a média"] },
            { title: "O seu plano de produção", bullets: ["Variedade, semente, população, calendário", "Doenças e primeiras respostas", "Sinais de colheita e meta de rendimento por ha e por acre"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de produção para uma cultura básica na sua própria machamba: tamanho da machamba em hectares e em acres, variedade e origem da semente, compasso com a população de plantas e a semente necessária calculadas, um calendário com datas (preparação da terra, sementeira, adubação, sachas), as duas principais doenças e a sua primeira resposta a cada uma, os sinais de colheita, e uma meta de rendimento por hectare e por acre com os seus cálculos.",
          youCanNow: "calcular o rendimento por hectare e por acre e escrever um plano de produção para uma cultura básica na sua própria machamba.",
          quickCheck: [
            { objective: "O5", q: "Colheu 900 kg de feijão seco em 4,047 m2. Qual é o rendimento por acre?", options: ["Cerca de 450 kg", "Cerca de 2,224 kg", "900 kg", "Cerca de 4,047 kg"], answer: 2, why: "4,047 m2 é um acre, por isso o rendimento é 900 kg por acre." },
            { objective: "O5", q: "Uma parcela de amostra de 100 m2 dá 40 kg de milho seco. Qual é o rendimento estimado por hectare?", options: ["40 kg", "400 kg", "40,000 kg", "4,000 kg"], answer: 3, why: "Um hectare são 100 vezes 100 m2, por isso 40 x 100 = 4,000 kg por hectare." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Proteger e medir a cultura",
        questions: [
          { objective: "O4", q: "A necrose letal do milho é causada por:", options: ["Sol a mais", "Dois vírus que infetam a planta ao mesmo tempo", "Falta de potássio", "Só a lagarta-do-funil"], answer: 1, why: "O CIMMYT explica a MLN como uma infeção por dois vírus ao mesmo tempo." },
          { objective: "O4", q: "Qual é o principal caminho dos vírus da mandioca para lugares distantes?", options: ["O vento a levar as folhas", "Os salpicos da chuva", "A partilha de estacas infetadas", "Os excrementos dos pássaros"], answer: 2, why: "As moscas-brancas espalham-nos perto; as estacas infetadas levam-nos para longe." },
          { objective: "O4", q: "Que hábito piora a brusone do arroz?", options: ["Fertilizante de azoto a mais", "Usar semente limpa", "Semear uma variedade resistente", "Retirar os restos infetados"], answer: 0, why: "Muito azoto deixa o arroz mais exposto à brusone." },
          { objective: "O5", q: "O arroz está pronto para colher quando:", options: ["Abrem as primeiras flores", "As folhas estão verde-escuras", "Está há um mês no campo", "A maior parte dos grãos das panículas está dourada e dura"], answer: 3, why: "Os grãos dourados e duros mostram que a cultura está madura; colher mais tarde causa debulha natural e perdas para os pássaros." },
          { objective: "O5", q: "Tem 4,940 kg por hectare. Mais ou menos quanto é isso por acre?", options: ["2,000 kg", "12,200 kg", "4,940 kg", "494 kg"], answer: 0, why: "4,940 / 2.47 = 2,000 kg por acre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Produção Moderna de Culturas Básicas: Milho, Arroz, Mandioca e Leguminosas",
    questions: [
      { objective: "O1", q: "Onde deve procurar primeiro as variedades adequadas à sua zona?", options: ["Num anúncio nas redes sociais", "No seu instituto nacional de investigação e no seu extensionista", "Na semente mais barata do mercado", "No celeiro da época passada"], answer: 1, why: "Os institutos de investigação testam e lançam variedades para cada zona." },
      { objective: "O1", q: "Que organismo certifica a semente na Nigéria?", options: ["A NAFDAC", "O banco central", "O KEPHIS", "O National Agricultural Seed Council (NASC)"], answer: 3, why: "O NASC certifica a semente na Nigéria." },
      { objective: "O1", q: "O que deve verificar antes de pagar uma embalagem de semente certificada?", options: ["O selo, o rótulo e a data", "Só a cor do saco", "Só o preço", "Nada"], answer: 0, why: "Uma embalagem selada, com rótulo e data, de um vendedor registado protege-o contra semente falsa." },
      { objective: "O1", q: "Que centro do CGIAR trabalha com o arroz em África?", options: ["IITA", "ICIPE", "AfricaRice", "WorldFish"], answer: 2, why: "A AfricaRice, com sede em Abidjan, trabalha com o arroz." },
      { objective: "O2", q: "Quantos metros quadrados tem um hectare?", options: ["4,047", "1,000", "100", "10,000"], answer: 3, why: "Um hectare é 100 m x 100 m = 10,000 m2." },
      { objective: "O2", q: "O arroz transplantado a 20 cm x 20 cm dá quantos covachos por hectare?", options: ["25,000", "250,000", "2,500", "40,000"], answer: 1, why: "0.2 x 0.2 = 0.04 m2; 10,000 / 0.04 = 250,000." },
      { objective: "O2", q: "O feijão a 50 cm x 10 cm precisa de cerca de quantas plantas por acre?", options: ["Cerca de 80,900", "Cerca de 200,000", "Cerca de 8,090", "Cerca de 40,470"], answer: 0, why: "0.5 x 0.1 = 0.05 m2; 4,047 / 0.05 = cerca de 80,900." },
      { objective: "O2", q: "Porque juntar cerca de 10% de semente a mais?", options: ["Para alimentar os pássaros", "Para o saco ficar mais pesado", "Para cobrir as sementes que falham e retanchar", "Porque a lei manda"], answer: 2, why: "Algumas sementes não nascem; a semente a mais deixa-o retanchar as falhas." },
      { objective: "O3", q: "De que precisam mais as leguminosas do que de azoto?", options: ["Sal", "Fósforo", "Açúcar", "Calcário todas as semanas"], answer: 1, why: "As leguminosas fixam grande parte do seu próprio azoto, mas continuam a precisar de fósforo." },
      { objective: "O3", q: "Quando deve ser feita normalmente a primeira sacha?", options: ["Mesmo antes da colheita", "Só se as ervas daninhas florescerem", "Depois de a cultura chegar ao joelho e lançar a bandeira", "Nas primeiras semanas críticas, muitas vezes cerca de 2 a 3 semanas depois de a cultura nascer"], answer: 3, why: "As ervas daninhas custam mais rendimento nas primeiras semanas." },
      { objective: "O3", q: "Porque pôr a sua época num calendário contado a partir da sementeira?", options: ["Para que a mão de obra, os insumos e o dinheiro estejam prontos a tempo", "Para impressionar as visitas", "Porque as sementes leem calendários", "Não tem utilidade"], answer: 0, why: "Um calendário com datas garante que cada trabalho é feito na fase certa da cultura." },
      { objective: "O3", q: "Mais ou menos durante quanto tempo deve a mandioca ficar sem ervas daninhas?", options: ["Uma semana", "Só depois da colheita", "Cerca dos primeiros três meses, até as folhas cobrirem o chão", "Nunca"], answer: 2, why: "A mandioca cresce devagar no início e precisa de controlo das ervas daninhas até a copa fechar." },
      { objective: "O4", q: "Manchas amarelas nas folhas do milho que depois secam das margens, com maçarocas pequenas ou podres, indicam:", options: ["Necrose letal do milho", "Brusone do arroz", "Boa saúde", "Potássio a mais"], answer: 0, why: "São os sinais típicos da MLN." },
      { objective: "O4", q: "Folhas de mandioca com manchas amarelas e verdes, torcidas e pequenas indicam:", options: ["Só a estria castanha da mandioca", "Falta de luz do sol", "A doença do mosaico da mandioca", "A lagarta-do-funil"], answer: 2, why: "O desenho em mosaico e as folhas torcidas são os sinais da CMD." },
      { objective: "O4", q: "O que deve fazer primeiro com algumas plantas com sinais de MLN ou de vírus da mandioca?", options: ["Tirar estacas delas", "Confirmar com a extensão e arrancá-las e destruí-las cedo", "Deitar-lhes fertilizante", "Deixá-las recuperar"], answer: 1, why: "Arrancar cedo as plantas doentes tira a fonte do vírus." },
      { objective: "O4", q: "Porque continuam a ser lançadas novas variedades de arroz resistentes à brusone?", options: ["A semente velha muda de cor", "Os agricultores aborrecem-se", "O arroz precisa de mais água todos os anos", "O fungo pode vencer a resistência alguns anos depois de uma variedade ser muito semeada"], answer: 3, why: "A resistência à brusone pode cair, por isso os melhoradores continuam a criar novas variedades." },
      { objective: "O5", q: "O amendoim está pronto quando:", options: ["Floresce pela primeira vez", "As folhas amarelecem e o interior da maior parte das cascas escureceu", "Choveu uma vez", "As vagens estão moles e brancas por dentro"], answer: 1, why: "O interior escuro das cascas e as folhas a amarelecer mostram que está maduro." },
      { objective: "O5", q: "Colheu 600 kg de milho seco em 1,500 m2. Qual é o rendimento por hectare?", options: ["600 kg", "9,000 kg", "1,500 kg", "4,000 kg"], answer: 3, why: "600 / 1,500 x 10,000 = 4,000 kg por hectare." },
      { objective: "O5", q: "Para mudar um rendimento por hectare para um rendimento por acre, você:", options: ["Divide por 2.47", "Multiplica por 2.47", "Soma 4,047", "Divide por 10"], answer: 0, why: "Um hectare tem cerca de 2.47 acres, por isso o rendimento por acre é menor." },
      { objective: "O5", q: "Porque comparar o rendimento real com a meta do seu plano depois da colheita?", options: ["A empresa de sementes exige", "Para ver o que funcionou e o que mudar na próxima época", "Para ganhar um saco de fertilizante de graça", "Não tem utilidade"], answer: 1, why: "Comparar os resultados com o plano mostra onde melhorar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 5, 9, 12, 13, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e volte a verificá-la com o seu extensionista.",
    criteria: [
      { name: "Variedade e semente", objective: "O1", notYet: "Nenhuma variedade indicada, ou a semente é grão híbrido guardado ou estacas de um campo doente.", meets: "Está indicada uma variedade recomendada para a zona, com uma fonte registada de semente certificada ou de estacas limpas.", exceeds: "Compara duas variedades quanto ao ciclo, à resistência a doenças e ao mercado, e explica a escolha." },
      { name: "População de plantas e semente necessária", objective: "O2", notYet: "Não há compasso nem cálculo, ou as contas estão erradas.", meets: "O compasso, as plantas por hectare, por acre e na machamba, e a semente ou as estacas necessárias estão bem calculados, com os passos mostrados.", exceeds: "Também planeia o retanche e uma contagem das plantas depois da emergência para verificar a população real." },
      { name: "Calendário com datas", objective: "O3", notYet: "Os trabalhos estão listados sem datas, ou a sacha é tardia.", meets: "A preparação da terra, a sementeira, a adubação (segundo uma análise do solo ou a extensão) e cada sacha têm datas contadas a partir da sementeira, com a primeira sacha dentro do período crítico.", exceeds: "A mão de obra, os insumos e o dinheiro necessários para cada trabalho estão no calendário." },
      { name: "Vigilância das doenças", objective: "O4", notYet: "Nenhuma doença indicada, ou as respostas não servem para elas.", meets: "As duas principais doenças da cultura estão indicadas com os seus sinais e uma primeira resposta certa para cada uma.", exceeds: "Inclui prevenção para a próxima época combinada com os vizinhos, como a rotação ou o material de plantação limpo." },
      { name: "Colheita e meta de rendimento", objective: "O5", notYet: "Não há sinais de colheita nem meta de rendimento, ou as contas do rendimento estão erradas.", meets: "Os sinais de colheita para a cultura e uma meta de rendimento por hectare e por acre, com os cálculos certos.", exceeds: "Inclui um método de parcela de amostra para estimar o rendimento antes da colheita e um plano para comparar o resultado com a meta." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que semeiam semente certificada ou estacas limpas de uma variedade recomendada na época seguinte (inquérito de seguimento)",
      "Alunos que pesam a colheita e indicam um rendimento por hectare ou por acre depois da época",
      "Mudança no rendimento por hectare indicado para a cultura escolhida de uma época para a seguinte",
      "Menos campos perdidos para a necrose letal do milho ou os vírus da mandioca nos grupos de alunos (relatórios da extensão)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com calculadora, ou papel, caneta e uma calculadora simples",
      "Uma fita métrica ou uma corda marcada a cada metro, e uma balança para pesar a colheita",
      "Acesso a um campo de milho, arroz, mandioca ou leguminosas",
      "A lista nacional de variedades ou as variedades recomendadas pela extensão para a zona",
      "Cerca de 60 a 90 minutos no total para as lições, as verificações e os questionários, mais a prática no campo"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois façam os cálculos da população de plantas e do rendimento no campo, com uma fita métrica e plantas verdadeiras.",
      "Antes da sessão, obtenha do instituto de investigação ou da extensão as variedades e os compassos recomendados para a sua zona; não os invente.",
      "Traga fotografias ou amostras verdadeiras de MLN, mosaico da mandioca, estria castanha da mandioca (incluindo uma raiz cortada) e brusone do arroz, se existirem na sua zona.",
      "Os grupos de agricultores que combinam a rotação e o material de plantação limpo controlam melhor a MLN e os vírus da mandioca; use a sessão para começar essa conversa.",
      "Avalie o plano de produção com a grelha de avaliação e verifique cada cálculo com o aluno.",
      "Volte depois da colheita para comparar o rendimento real de cada aluno com a meta do plano."
    ]
  }
};
