"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-conservation-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_CA = { name: "FAO: Agricultura de Conservação (definição e os três princípios)", url: "https://www.fao.org/conservation-agriculture/en/" };
const WOCAT_ZAI = { name: "WOCAT: Covas de plantio zai ou tassa (Níger)", url: "https://qcat.wocat.net/en/wocat/technologies/view/permalink/1220" };
const ZIM_CA = { name: "Efeito da agricultura de conservação no rendimento do milho nas zonas semiáridas do Zimbabué (revista Experimental Agriculture)", url: "https://www.cambridge.org/core/product/36E50D9D434ADE25762F6D8E4E185FB7" };
const CIMMYT_ZM = { name: "CIMMYT: Ensaios de agricultura de conservação em machambas na Zâmbia (covas, ripagem, sementeira direta versus lavoura, 2006-2015)", url: "https://hdl.handle.net/11529/10825" };
const PCPB = { name: "Pest Control Products Board, Quénia (produtos registados)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC, Nigéria (agroquímicos registados)", url: "https://www.nafdac.gov.ng" };
const EPA_GH = { name: "Environmental Protection Agency, Gana (registo de pesticidas)", url: "https://www.epa.gov.gh" };
const FAO_SOM = { name: "FAO: A importância da matéria orgânica do solo", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };

module.exports = {
  id: "agri-conservation-agriculture-pt",
  lang: "pt",
  translationOf: "agri-conservation-agriculture",
  category: "Agriculture (Africa)",
  name: "Agricultura de Conservação para as Estações Secas",
  skills: "Aplicar os três princípios da agricultura de conservação, Fazer covas de plantio e covas zai, Escolher entre ripagem e sementeira direta, Gerir a cobertura morta, Controlar as ervas daninhas sem lavrar, Planear a época e a transição",
  outcome: "planear e começar uma época de agricultura de conservação num campo: como vai preparar a terra sem lavrar, mantê-la coberta, fazer rotação de culturas, controlar as ervas daninhas e que ferramentas e datas vai usar, com uma parcela de comparação para acompanhar os resultados nos anos de transição.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, trabalhadores agrícolas, jovens agroempreendedores e extensionistas das zonas mais secas do Quénia, da Nigéria, do Gana, do Burkina Faso, do Senegal e de toda a África, onde as chuvas são curtas, os períodos secos são comuns e a lavoura deixa o solo nu, duro e sedento.",
    "O Capítulo 1 explica os três princípios da agricultura de conservação tal como a FAO (a Organização das Nações Unidas para a Alimentação e a Agricultura) os define e mostra como preparar a terra sem lavrar: covas de plantio, covas zai, ripagem e sementeira direta. O Capítulo 2 trata de manter o solo coberto com cobertura morta, controlar as ervas daninhas sem lavrar, as ferramentas e o calendário de uma época, o que esperar nos anos de seca e como passar as primeiras épocas.",
    "A rega e a recolha de água da chuva estão no curso \"Rega e Gestão da Água\", e o composto e a cobertura morta básica em \"Saúde e Fertilidade do Solo\"; este curso não os repete. Comece num campo e mantenha ao lado uma parcela lavrada para comparar. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria terra."
  ],
  finalTask: "Escreva um plano de agricultura de conservação de uma época para um campo (ou um exemplo: 1 acre de milho e feijão-nhemba em Machakos, 2 hectares de mapira no norte do Gana, ou 1 hectare de mexoeira e amendoim no Planalto Central do Burkina Faso): um desenho do campo; como o vai preparar sem lavrar (covas de plantio, covas zai, ripagem ou sementeira direta) e porquê; como vai manter pelo menos 30 por cento do solo coberto; a cultura e a rotação ou consociação; o seu plano para as ervas daninhas; um calendário mês a mês de trabalhos, ferramentas e custos; e como o vai comparar com uma parcela lavrada.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, trabalhadores agrícolas, jovens agroempreendedores e extensionistas de zonas agrícolas mais secas de toda a África (Quénia, Nigéria, Gana e o Sahel francófono), que cultivam milho, mapira, mexoeira, feijão-nhemba, feijão e amendoim, muitas vezes com gado ou cabras que comem os restolhos das culturas.",
    startingPoint: "Preparam a terra lavrando com bois, um trator ou uma enxada, e muitas vezes queimam os restolhos ou deixam o gado comê-los. Muitos já ouviram falar das covas zai ou das covas de plantio, mas nunca fizeram uma época completa de agricultura de conservação nem planearam as ervas daninhas e a disputa pelos restolhos que vêm com ela.",
    gap: "A lavoura e o solo nu desperdiçam a pouca chuva e causam erosão, e lavrar tarde atrasa a sementeira. Os alunos precisam de uma forma prática de cultivar mexendo menos no solo, com mais cobertura e rotação, de planear as ferramentas, a mão de obra e o calendário, e de continuar nas primeiras épocas, quando as ervas daninhas são muitas e os resultados são variados.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o curso existe também em espanhol, francês e árabe",
      "Mão de obra e ferramentas: enxadas, bois ou um trator alugado; as covas dão muito trabalho",
      "Restolhos: os animais comem nos campos depois da colheita, segundo o costume local",
      "Segurança com pesticidas: herbicidas só se forem registados no país, usados como diz o rótulo e com equipamento de proteção",
      "Tempo: lições de 4 a 6 minutos; os resultados crescem ao longo de várias épocas"
    ],
    prerequisites: "Nenhum. \"Saúde e Fertilidade do Solo\" e \"Agricultura Climaticamente Inteligente\" são uma boa base."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Olhando para um campo ou para a descrição de um campo", action: "identificar se ele segue cada um dos três princípios da agricultura de conservação", standard: "nomeando os três como a FAO os descreve, incluindo pelo menos 30 por cento de cobertura do solo" },
    { id: "O2", condition: "Num campo, antes das chuvas", action: "marcar e abrir covas de plantio ou covas zai com estrume ou composto em cada uma", standard: "em linhas ao longo da curva de nível, abertas na estação seca" },
    { id: "O3", condition: "Conhecendo o seu solo, a mão de obra, a tração animal ou mecânica e a chuva", action: "escolher entre covas, ripagem e sementeira direta para um campo", standard: "dando pelo menos duas razões para a escolha" },
    { id: "O4", condition: "Para um campo em agricultura de conservação", action: "planear como manter o solo coberto e controlar as ervas daninhas sem lavrar", standard: "mantendo pelo menos 30 por cento de cobertura e usando só herbicidas registados, como diz o rótulo, se usar algum" },
    { id: "O5", condition: "Para uma época num campo", action: "escrever um calendário de todos os trabalhos da agricultura de conservação com o mês, a ferramenta e o custo", standard: "desde a preparação na estação seca até à colheita e ao cuidado com os restolhos" },
    { id: "O6", condition: "Durante as primeiras épocas de agricultura de conservação", action: "comparar uma parcela em agricultura de conservação com uma parcela lavrada", standard: "registando o rendimento, os dias de trabalho e os custos das duas em cada época" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Princípios e preparar a terra sem lavrar",
      lessons: [
        {
          title: "Os três princípios da agricultura de conservação",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar se um campo segue cada um dos três princípios da agricultura de conservação.",
          text: [
            "A agricultura de conservação (AC) é uma forma de cultivar que protege o solo para que ele guarde mais da pouca chuva que cai. A FAO descreve três princípios que funcionam juntos.",
            "1. Mexer o mínimo no solo: não lavrar. A semente e o adubo entram no solo por pequenos buracos, covas ou linhas estreitas de ripagem, e o resto do solo fica como está. 2. Cobertura permanente do solo: deixar os restolhos ou culturas de cobertura à superfície, cobrindo pelo menos 30 por cento do solo, durante todo o ano. 3. Diversificação de culturas: fazer rotação ou consociação de pelo menos três culturas diferentes ao longo do tempo, por exemplo milho, feijão-nhemba e mapira, e não milho todos os anos.",
            "Fazer só um ajuda pouco; fazer os três juntos dá os benefícios verdadeiros. Lavrar sem cobertura seca o solo; cobertura sem rotação deixa as pragas aumentar; não lavrar com o solo nu deixa formar crosta e a chuva escorre. Nas zonas secas, o grande ganho é a água: o solo coberto e sem mexer deixa a chuva entrar e perde menos para o sol."
          ],
          words: [["Agricultura de conservação (AC)", "cultivar mexendo o mínimo no solo, com cobertura permanente do solo e diversificação de culturas."], ["Lavoura", "virar ou partir o solo, por exemplo com charrua ou cavando."], ["Restolhos", "os caules, folhas e palhas que ficam depois da colheita."], ["Crosta", "uma camada dura que se forma no solo nu depois da chuva e impede a água de entrar."]],
          slides: [
            { title: "Três princípios (FAO)", bullets: ["1. Mexer o mínimo no solo: não lavrar", "2. Cobertura permanente do solo: pelo menos 30 por cento", "3. Diversificação: pelo menos três culturas"] },
            { title: "Mexa só onde planta", bullets: ["Pequenos buracos, covas ou linhas de ripagem", "Deixe o resto do solo como está"] },
            { title: "Cubra e faça rotação", bullets: ["Restolhos ou culturas de cobertura por cima, todo o ano", "Ex.: milho, depois feijão-nhemba, depois mapira"] },
            { title: "Os três juntos", bullets: ["Um só ajuda pouco", "Juntos: entra e fica mais chuva", "O grande ganho nas zonas secas é a água"] }
          ],
          sources: [FAO_CA],
          tryIt: "Percorra um dos seus campos. Para cada princípio, escreva sim, em parte ou não: Está lavrado? Quanto do solo está coberto (estime em percentagem)? Quantas culturas diferentes cresceram ali nas últimas três épocas? Faça um círculo à volta do princípio mais fraco.",
          youCanNow: "nomear os três princípios da agricultura de conservação e avaliar um campo em cada um deles.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um dos três princípios da agricultura de conservação da FAO?", options: ["Lavrar fundo em cada época", "Queimar os restolhos para limpar o campo", "Cobertura permanente do solo de pelo menos 30 por cento", "Cultivar a mesma cultura todos os anos"], answer: 2, why: "A FAO indica mexer o mínimo no solo, cobertura permanente do solo (pelo menos 30 por cento) e diversificação de culturas." },
            { objective: "O1", q: "Um agricultor deixou de lavrar, mas deixa o solo nu e cultiva milho todos os anos. O que falta?", options: ["Cobertura do solo e diversificação de culturas", "Nada; é AC completa", "Lavrar mais", "Queimar mais"], answer: 0, why: "Sem cobertura e sem rotação, não lavrar sozinho dá poucos dos benefícios." }
          ]
        },
        {
          title: "Covas de plantio e covas zai",
          objectives: ["O2"],
          minutes: 6,
          goal: "Marcar e abrir covas de plantio ou covas zai com estrume em cada uma, antes das chuvas.",
          text: [
            "As covas de plantio e as covas zai são pequenos buracos abertos à mão onde se planta a cultura. Só se mexe na cova; o solo entre as covas fica coberto. Cada cova apanha a chuva e guarda o estrume ou o composto mesmo onde estão as raízes.",
            "As covas zai vêm de agricultores do Burkina Faso e do Níger, que as usaram para voltar a cultivar mexoeira e mapira em terra dura e com crosta. A WOCAT (uma rede mundial que reúne boas práticas de gestão da terra) descreve covas com cerca de 30 a 40 cm de largura e 10 a 15 cm de fundo, em linhas desencontradas ao longo da curva de nível, cerca de 10.000 por hectare, com estrume ou composto em cada uma. As covas de plantio usadas no sul e no leste de África são parecidas: buracos pequenos e regulares em linhas, abertos com o mesmo espaçamento todos os anos, para voltar sempre aos mesmos sítios.",
            "Abra-as na estação seca, depois da colheita, quando há menos outros trabalhos, para poder semear com as primeiras boas chuvas em vez de esperar pela lavoura. Ponha a terra da cova do lado de baixo da encosta, para apanhar mais água. Ponha um ou dois punhados de estrume ou composto em cada cova e cubra levemente. Pergunte ao seu extensionista qual é o espaçamento usado para a sua cultura na sua zona.",
            "É um trabalho duro, sobretudo no primeiro ano. Abra uma parte do campo por semana, divida o trabalho num grupo e volte a usar as mesmas covas nas épocas seguintes, o que é muito mais rápido."
          ],
          steps: ["Escolha o campo e marque linhas ao longo da curva de nível com um fio ou paus.", "Marque os sítios das covas com o espaçamento que a extensão recomenda para a sua cultura.", "Abra as covas na estação seca; ponha a terra do lado de baixo da encosta.", "Ponha estrume ou composto em cada cova e cubra levemente.", "Deixe o solo entre as covas coberto.", "Semeie nas covas com as primeiras boas chuvas."],
          words: [["Cova de plantio", "um buraco pequeno aberto à mão onde se põe a semente e o estrume, deixando o resto do solo sem mexer."], ["Cova zai", "uma cova de plantio cheia de estrume ou composto, usada primeiro por agricultores do Burkina Faso e do Níger para recuperar terra com crosta."], ["Ao longo da curva de nível", "de lado na encosta, à mesma altura, para que as linhas apanhem a água em vez de a levar encosta abaixo."]],
          slides: [
            { title: "Buracos pequenos, grande ganho", bullets: ["Mexa só na cova", "Apanha a chuva onde estão as raízes", "Guarda o estrume perto da cultura"] },
            { title: "Covas zai (Burkina Faso, Níger)", bullets: ["Cerca de 30-40 cm de largura, 10-15 cm de fundo (WOCAT)", "Linhas desencontradas ao longo da curva de nível", "Estrume ou composto em cada uma"] },
            { title: "Quando fazer", bullets: ["Abra na estação seca, depois da colheita", "Semeie com as primeiras boas chuvas", "Sem esperar pela lavoura"] },
            { title: "Tornar o trabalho mais leve", bullets: ["Uma parte do campo por semana", "Divida o trabalho num grupo", "Use as mesmas covas na época seguinte"] }
          ],
          sources: [WOCAT_ZAI, FAO_CA],
          tryIt: "Numa pequena parte de um campo (por exemplo 10 m por 10 m), marque linhas ao longo da curva de nível e abra cinco covas de plantio ou covas zai. Conte quanto tempo leva cada uma, ponha estrume e calcule quantos dias levaria o campo inteiro.",
          youCanNow: "marcar e abrir covas de plantio ou covas zai com estrume, ao longo da curva de nível, antes das chuvas.",
          quickCheck: [
            { objective: "O2", q: "Quando deve abrir as covas de plantio ou as covas zai?", options: ["Depois de a cultura nascer", "Só quando está a chover muito", "Na colheita, por cima da cultura", "Na estação seca, antes das chuvas"], answer: 3, why: "Abrir cedo deixa semear com as primeiras boas chuvas e reparte o trabalho." },
            { objective: "O2", q: "Para onde deve ir a terra tirada de uma cova zai?", options: ["Deitada para longe", "Para o lado de baixo da cova, para apanhar mais água", "De volta para dentro da cova logo a seguir", "Para o caminho"], answer: 1, why: "Um pequeno camalhão do lado de baixo ajuda cada cova a apanhar e a guardar a água que escorre." }
          ]
        },
        {
          title: "Ripagem e sementeira direta",
          objectives: ["O3"],
          minutes: 5,
          goal: "Escolher entre covas, ripagem e sementeira direta para um dos seus campos.",
          text: [
            "As covas servem para agricultores que trabalham com enxada em parcelas pequenas. Se tem bois ou pode alugar um trator, um ripador ou uma semeadora direta cobre mais terra com menos mão de obra.",
            "Um ripador é um dente estreito, muitas vezes montado na rabiça da charrua de bois no lugar da aiveca, que abre um sulco estreito (uma linha de ripagem) para a semente e o adubo, deixando coberto o solo entre as linhas. Ripar na estação seca também pode partir uma camada dura debaixo da superfície (o calo de lavoura), para que as raízes e a água vão mais fundo. A sementeira direta põe a semente diretamente através dos restolhos com uma plantadeira manual (jab planter, uma ferramenta de mão) ou com uma semeadora puxada por animais ou por trator, sem abrir linhas.",
            "Qual escolher? Pense na sua mão de obra (as covas pedem a maior), na tração (ripar precisa de bois ou de um trator), no solo (solos duros e com crosta beneficiam das covas ou da ripagem) e no tamanho do campo. Ensaios em toda a Zâmbia, de 2006 a 2015, compararam covas, ripagem e sementeira direta com a lavoura com charrua de aiveca em machambas verdadeiras. Pergunte ao seu extensionista ou a um projeto de AC onde pode ver estas ferramentas a funcionar e se podem ser alugadas."
          ],
          steps: ["Escreva o tamanho do campo, a sua mão de obra e se tem acesso a bois ou a um trator.", "Veja o solo: há uma camada dura ou uma crosta?", "Parcela pequena e trabalho à mão: covas.", "Bois ou trator e solo duro: ripagem.", "Bons restolhos e uma semeadora disponível: sementeira direta.", "Pergunte à extensão onde ver e alugar as ferramentas."],
          words: [["Ripador", "um dente estreito puxado por bois ou por um trator que abre um sulco para a semente sem virar o solo."], ["Calo de lavoura", "uma camada dura logo abaixo da profundidade da lavoura que impede a passagem das raízes e da água."], ["Plantadeira manual (jab planter)", "uma ferramenta de mão que se espeta no chão para pôr a semente (e às vezes o adubo) através dos restolhos."], ["Sementeira direta", "semear diretamente no solo sem mexer e com os restolhos."]],
          slides: [
            { title: "Três maneiras sem lavrar", bullets: ["Covas: enxada, parcelas pequenas", "Ripagem: bois ou trator abrem linhas", "Sementeira direta: plantadeira manual ou semeadora"] },
            { title: "Ripagem", bullets: ["Dente estreito na rabiça da charrua", "Pode partir um calo de lavoura duro", "O solo entre as linhas fica coberto"] },
            { title: "Como escolher", bullets: ["Mão de obra: as covas pedem a maior", "Tração: bois ou trator?", "Dureza do solo e tamanho do campo"] },
            { title: "Veja primeiro", bullets: ["Ensaios na Zâmbia: covas, ripagem, sementeira direta", "Pergunte à extensão onde ver as ferramentas", "Pode alugá-las?"] }
          ],
          sources: [CIMMYT_ZM, FAO_CA],
          tryIt: "Para o campo que escolheu, escreva o tamanho do campo, a sua mão de obra, o seu acesso a bois ou a um trator e quão duro é o solo. Escolha covas, ripagem ou sementeira direta e escreva duas razões para a escolha.",
          youCanNow: "escolher entre covas, ripagem e sementeira direta para um campo, com razões.",
          quickCheck: [
            { objective: "O3", q: "Um agricultor tem 3 hectares, uma junta de bois e solo duro. Que método serve melhor?", options: ["Ripagem com um ripador puxado por bois", "Covas abertas à mão nos 3 hectares numa semana", "Lavrar fundo duas vezes", "Não semear nada"], answer: 0, why: "Bois e solo duro servem para a ripagem, que cobre mais terra do que as covas à mão." },
            { objective: "O3", q: "O que é uma plantadeira manual (jab planter)?", options: ["Uma charrua de trator", "Uma ferramenta de mão que põe a semente através dos restolhos", "Uma bomba de água", "Um tipo de adubo"], answer: 1, why: "A plantadeira manual deixa semear diretamente no solo coberto e sem mexer." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Princípios e preparar a terra sem lavrar",
        questions: [
          { objective: "O1", q: "Segundo a FAO, quantas culturas diferentes deve ter uma rotação ou consociação em AC?", options: ["Uma", "No máximo duas", "Pelo menos três", "Nenhuma"], answer: 2, why: "O princípio da diversificação da FAO fala de pelo menos três culturas diferentes." },
          { objective: "O1", q: "Porque é que o solo coberto e sem mexer é especialmente útil nas zonas secas?", options: ["Deixa o solo mais frio no inverno", "Entra mais chuva e perde-se menos para o sol", "Acaba com todas as ervas daninhas para sempre", "Não precisa de semente"], answer: 1, why: "A cobertura e não lavrar melhoram a entrada da água e reduzem a evaporação." },
          { objective: "O2", q: "As covas zai espalharam-se primeiro entre agricultores de que países?", options: ["Burkina Faso e Níger", "Egito e Líbia", "África do Sul e Namíbia", "Só Quénia e Uganda"], answer: 0, why: "As covas zai vêm de agricultores do Sahel, sobretudo do Burkina Faso e do Níger." },
          { objective: "O2", q: "O que se põe em cada cova zai ou cova de plantio antes de semear?", options: ["Nada", "Plástico", "Só cinza de restolhos queimados", "Estrume ou composto"], answer: 3, why: "O estrume ou o composto na cova alimenta a cultura mesmo junto das raízes." },
          { objective: "O3", q: "Além de abrir linhas de ripagem, o que pode fazer a ripagem na estação seca?", options: ["Regar a cultura", "Partir um calo de lavoura duro para que as raízes e a água vão mais fundo", "Matar todas as pragas", "Substituir o adubo"], answer: 1, why: "Um ripador pode partir a camada dura que a lavoura muitas vezes deixa." }
        ]
      }
    },
    {
      name: "Capítulo 2: A época e a transição",
      lessons: [
        {
          title: "Gerir a cobertura morta e os restolhos",
          objectives: ["O4"],
          minutes: 5,
          goal: "Planear como manter pelo menos 30 por cento de um campo coberto durante todo o ano.",
          text: [
            "A cobertura é o princípio mais difícil para os agricultores, porque os restolhos têm outros usos: os animais comem nos campos depois da colheita, e os caules servem de lenha, para cercas e para construir. Nas zonas secas, as térmitas (salalé) também podem comer os restolhos à superfície.",
            "Planeie isto. Decida quanto restolho fica no campo e quanto vai para os animais. Corte e guarde algum restolho de milho ou mapira para alimentar os animais na estação seca, para que não entrem no campo de AC. Fale com os vizinhos e os pastores sobre o campo: algumas comunidades combinam que os campos de AC marcados não são pastados, ou o agricultor cerca um campo pequeno com uma sebe viva ou ramos de espinhos. Arranje cobertura de outros sítios: uma consociação com feijão-nhemba ou lablab, capim das bordas do campo ou ramos podados das árvores.",
            "Para ver a cobertura, olhe a direito para baixo, para um metro quadrado, em vários sítios, e estime quanto do solo não consegue ver. Quer pelo menos 30 por cento coberto (FAO); mais é melhor. Espalhe os restolhos por igual, não em montes, e deixe-os por cima em vez de os enterrar.",
            "Nunca queime os restolhos num campo de AC. A queimada tira a cobertura e a matéria orgânica que está a construir."
          ],
          steps: ["Decida a parte dos restolhos para cobertura e para alimentar os animais.", "Corte e guarde a ração para que os animais fiquem fora do campo de AC.", "Combine com os vizinhos e os pastores, ou cerque o campo.", "Junte cobertura de consociações, capim das bordas ou ramos podados.", "Veja a cobertura: olhe para um metro quadrado em vários sítios.", "Espalhe por igual; nunca queime."],
          words: [["Cobertura morta", "material espalhado na superfície do solo para o cobrir e proteger."], ["Restolho de milho ou mapira", "os caules e folhas secos do milho ou da mapira depois da colheita."], ["Sebe viva", "uma fila de arbustos ou árvores plantados juntos para não deixar entrar os animais."]],
          slides: [
            { title: "A cobertura disputa com outros usos", bullets: ["Pastagem depois da colheita", "Lenha, cercas, construção", "Térmitas nas zonas secas"] },
            { title: "Planeie os restolhos", bullets: ["Parte para cobertura e parte para ração", "Guarde a ração; animais fora", "Combine com os pastores ou cerque"] },
            { title: "Arranje mais cobertura", bullets: ["Consociação com feijão-nhemba ou lablab", "Capim das bordas do campo", "Ramos podados das árvores"] },
            { title: "Veja: pelo menos 30 por cento", bullets: ["Olhe para baixo, para um metro quadrado", "Espalhe por igual, deixe por cima", "Nunca queime num campo de AC"] }
          ],
          sources: [FAO_CA, FAO_SOM],
          tryIt: "Estime hoje a cobertura no campo que escolheu, em três sítios. Escreva de onde vai vir mais cobertura, quanto restolho vai para os animais e como vai manter os animais fora do campo (acordo, cerca ou ração guardada).",
          youCanNow: "planear como manter pelo menos 30 por cento de um campo de AC coberto, continuando a alimentar os seus animais.",
          quickCheck: [
            { objective: "O4", q: "O gado dos vizinhos come todos os restolhos do seu campo de AC em cada estação seca. O que pode ajudar?", options: ["Queimar primeiro os restolhos", "Lavrar o campo", "Combinar com os pastores, cercar o campo ou guardar ração para os animais ficarem fora", "Desistir da cobertura"], answer: 2, why: "Os acordos na comunidade, as cercas e a ração guardada protegem a cobertura." },
            { objective: "O4", q: "Como vê se um campo tem cobertura suficiente?", options: ["Contando o gado", "Olhando para um metro quadrado em vários sítios e estimando a parte do solo escondida", "Pesando a colheita", "Medindo a chuva"], answer: 1, why: "Uma estimativa rápida a olho, em vários sítios, mostra se a cobertura chega aos 30 por cento." }
          ]
        },
        {
          title: "Controlar as ervas daninhas sem lavrar",
          objectives: ["O4"],
          minutes: 5,
          goal: "Planear o controlo das ervas daninhas num campo de AC sem lavrar.",
          text: [
            "A lavoura enterra as ervas daninhas; sem ela, as ervas podem ser muitas nas primeiras épocas. Esta é a principal razão por que os agricultores desistem da AC, por isso planeie a sacha desde o início.",
            "Sache cedo e muitas vezes: as primeiras semanas depois de a cultura nascer são as que mais contam. Use a enxada com leveza, raspando logo abaixo da superfície em vez de virar o solo, ou arranque à mão. Nunca deixe as ervas daninhas dar semente; cada erva que dá semente junta milhares para o ano seguinte. A cobertura morta e uma cultura de cobertura fazem sombra no solo e travam muitas ervas, e uma consociação densa deixa menos espaço. Ao longo de várias épocas a sachar antes de as ervas darem semente, as sementes de ervas no solo diminuem e a sacha fica mais fácil.",
            "Alguns agricultores de AC também usam um herbicida. Se o fizer, use só produtos registados no seu país (no Quénia, veja a lista do Pest Control Products Board; na Nigéria, a NAFDAC; no Gana, a Environmental Protection Agency), compre a vendedores licenciados e siga o rótulo à risca quanto à cultura, ao momento e à quantidade. Use roupa de proteção, luvas e botas, mantenha as crianças e os animais longe e nunca pulverize perto da água. Pergunte ao seu extensionista antes de começar."
          ],
          steps: ["Sache cedo: as primeiras semanas depois de a cultura nascer.", "Sache com leveza ou arranque à mão; não vire o solo.", "Nunca deixe as ervas daninhas dar semente.", "Use cobertura morta, culturas de cobertura e consociações densas para fazer sombra às ervas.", "Se usar um herbicida: produto registado, rótulo, equipamento de proteção.", "Planeie a mão de obra para a sacha antes de a época começar."],
          words: [["Banco de sementes de ervas daninhas", "as sementes de ervas guardadas no solo, à espera de crescer."], ["Herbicida", "um produto químico que mata as ervas daninhas."], ["Produto registado", "um pesticida ou herbicida aprovado para uso pela autoridade nacional."]],
          slides: [
            { title: "As ervas daninhas são o grande teste", bullets: ["Mais nas primeiras épocas", "Principal razão por que se desiste", "Planeie a sacha desde o início"] },
            { title: "Sachar sem lavrar", bullets: ["Cedo e muitas vezes depois de nascer", "Enxada leve ou arrancar à mão", "Nunca deixe as ervas dar semente"] },
            { title: "Deixe a cobertura trabalhar", bullets: ["Cobertura morta e culturas de cobertura fazem sombra", "Consociações densas deixam menos espaço", "O banco de sementes diminui com as épocas"] },
            { title: "Herbicida? Só com segurança", bullets: ["Registado: PCPB (Quénia), NAFDAC (Nigéria), EPA (Gana)", "Siga o rótulo à risca", "Proteção; longe da água e das crianças"] }
          ],
          sources: [PCPB, NAFDAC, EPA_GH, FAO_CA],
          tryIt: "Escreva um plano para as ervas daninhas do seu campo: quando vai sachar (semanas depois da sementeira), com que ferramenta, quem o vai fazer e quantos dias vai levar, e como a cobertura ou uma consociação vão ajudar. Se pensar num herbicida, escreva onde vai confirmar que está registado.",
          youCanNow: "planear o controlo das ervas daninhas num campo de AC sem lavrar, usando herbicidas só de forma segura e legal, se usar algum.",
          quickCheck: [
            { objective: "O4", q: "Porque nunca deve deixar as ervas daninhas dar semente num campo de AC?", options: ["As sementes dão mau gosto à cultura", "As sementes de ervas são um bom adubo", "É proibido por lei", "Cada erva que dá semente junta milhares de sementes para o ano seguinte"], answer: 3, why: "Impedir as ervas de dar semente faz diminuir o banco de sementes ao longo das épocas." },
            { objective: "O4", q: "Uma agricultora no Quénia quer usar um herbicida no seu milho em AC. O que deve verificar primeiro?", options: ["Que está registado pelo Pest Control Products Board e como o rótulo diz para o usar", "Que é a garrafa mais barata", "Que um vizinho gostou dele", "Que não tem rótulo"], answer: 0, why: "Só os produtos registados, usados como diz o rótulo e com equipamento de proteção, são seguros e legais." }
          ]
        },
        {
          title: "Ferramentas, calendário, anos de seca e a transição",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Escrever um calendário da época com os trabalhos, as ferramentas e os custos da AC, e preparar uma parcela de comparação.",
          text: [
            "Uma época de AC começa na estação seca, não com as chuvas. Um calendário típico: depois da colheita, guarde os restolhos e combine a pastagem; na estação seca, abra ou reutilize as covas, ou faça a ripagem, e ponha o estrume; com as primeiras boas chuvas, semeie logo (sem esperar pela lavoura); nas primeiras semanas, sache cedo e muitas vezes; durante a época, junte a consociação ou a cultura de cobertura; na colheita, deixe os restolhos no campo e planeie a rotação da próxima época. Ao lado de cada trabalho, escreva a ferramenta (enxada, ripador, plantadeira manual, pulverizador e equipamento de proteção) e o custo, quer seja sua, alugada ou emprestada.",
            "Nos anos de seca, vê-se a principal vantagem da AC. As covas e a cobertura morta apanham e guardam mais água, e semear a tempo aproveita a primeira chuva. Uma revisão de muitos ensaios nas zonas semiáridas do Zimbabué mostrou que as covas de plantio deram mais milho do que a lavoura em mais de metade dos ensaios. Mas a AC não ganha à lavoura todos os anos e não pode compensar a falta total de chuva.",
            "Conte com uma transição. O rendimento pode ficar igual ou até descer nas primeiras uma ou duas épocas, enquanto as ervas daninhas são muitas e o solo se ajusta; os benefícios costumam crescer ao longo de várias épocas, à medida que aumentam a cobertura e a matéria orgânica. Comece num campo, mantenha ao lado uma parcela lavrada e registe o rendimento, os dias de trabalho e os custos das duas em cada época. Avalie a AC depois de três épocas, não de uma."
          ],
          steps: ["Faça a lista de todos os trabalhos, de uma colheita à outra.", "Ponha cada um num mês.", "Junte a ferramenta e se é sua, alugada ou emprestada.", "Junte o custo e os dias de trabalho.", "Marque uma parcela lavrada de comparação do mesmo tamanho.", "Registe o rendimento, o trabalho e o custo das duas em cada época; avalie depois de três épocas."],
          words: [["Período de transição", "as primeiras épocas depois de passar para a AC, quando as ervas daninhas são muitas e os benefícios ainda estão a crescer."], ["Parcela de comparação", "uma parcela cultivada da maneira antiga ao lado da parcela de AC, para comparar os resultados de forma justa."], ["Dia de trabalho", "uma pessoa a trabalhar durante um dia; serve para medir quanto trabalho leva uma tarefa."]],
          slides: [
            { title: "A época começa no seco", bullets: ["Depois da colheita: guarde os restolhos, combine a pastagem", "Estação seca: covas ou ripagem, estrume", "Primeiras boas chuvas: semeie logo"] },
            { title: "Calendário com ferramentas e custos", bullets: ["Enxada, ripador, plantadeira manual, equipamento de proteção", "Sua, alugada ou emprestada?", "Custo e dias de trabalho de cada tarefa"] },
            { title: "Anos de seca", bullets: ["Covas e cobertura morta guardam mais água", "Zimbabué: covas ganharam à lavoura em mais de metade dos ensaios", "Não todos os anos; sem chuva = sem colheita"] },
            { title: "Passar a transição", bullets: ["O rendimento pode descer nas épocas 1 a 2", "Mantenha uma parcela lavrada para comparar", "Registe rendimento, trabalho, custo; avalie após 3 épocas"] }
          ],
          sources: [ZIM_CA, CIMMYT_ZM, FAO_CA],
          tryIt: "Tarefa final: escreva o seu plano de AC de uma época para um campo, com um desenho, o método de preparação da terra e as razões, os planos de cobertura e de ervas daninhas, a cultura e a rotação, um calendário mês a mês de trabalhos, ferramentas e custos, e onde vai ficar a sua parcela lavrada de comparação.",
          youCanNow: "planear uma época completa de AC com ferramentas, calendário e custos, e compará-la de forma justa com a lavoura durante os anos de transição.",
          quickCheck: [
            { objective: "O5", q: "Quando começa o trabalho de uma época de AC?", options: ["Quando a cultura dá flor", "Na estação seca, depois da última colheita", "Com a primeira chuva, lavrando", "Na colheita da cultura seguinte"], answer: 1, why: "As covas, a ripagem, o estrume e o plano dos restolhos fazem-se na estação seca, para poder semear com as primeiras chuvas." },
            { objective: "O6", q: "A sua parcela de AC dá o mesmo rendimento que a parcela lavrada na primeira época. O que deve fazer?", options: ["Desistir da AC", "Lavrar a parcela de AC", "Queimar os restolhos", "Continuar a registar durante pelo menos três épocas antes de avaliar"], answer: 3, why: "Os benefícios crescem ao longo de várias épocas; uma época é cedo demais para avaliar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: A época e a transição",
        questions: [
          { objective: "O4", q: "O que nunca deve fazer com os restolhos num campo de AC?", options: ["Espalhá-los por igual", "Deixá-los à superfície", "Queimá-los", "Juntar mais das bordas do campo"], answer: 2, why: "A queimada tira a cobertura e a matéria orgânica de que a AC depende." },
          { objective: "O4", q: "Que forma de sachar serve para a AC?", options: ["Lavrar para enterrar as ervas", "Queimar o campo todo", "Sachar só na colheita", "Enxada leve ou arrancar à mão, cedo e muitas vezes"], answer: 3, why: "Sachar à superfície sem virar o solo mantém o mexer no solo no mínimo." },
          { objective: "O5", q: "Que tarefa pertence a um calendário de uma época de AC?", options: ["Abrir ou reutilizar as covas na estação seca, com a ferramenta e o custo", "Lavrar duas vezes antes de semear", "Queimar os restolhos depois da colheita", "Semear um mês depois de as chuvas começarem"], answer: 0, why: "Um calendário de AC mostra cada trabalho com o mês, a ferramenta e o custo." },
          { objective: "O5", q: "Porque é que a AC muitas vezes deixa semear mais cedo?", options: ["A semente cresce mais depressa", "Chove mais nos campos de AC", "A terra é preparada na estação seca, por isso semeia com as primeiras boas chuvas", "A semente é mais barata"], answer: 2, why: "Não ter de esperar pela lavoura quer dizer semear a tempo." },
          { objective: "O6", q: "Que três coisas deve registar tanto na parcela de AC como na parcela lavrada?", options: ["Cor, cheiro e sabor", "Só a chuva", "Rendimento, dias de trabalho e custos", "O número de visitas"], answer: 2, why: "O rendimento, o trabalho e os custos mostram se a AC está a compensar na sua machamba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Agricultura de Conservação para as Estações Secas",
    questions: [
      { objective: "O1", q: "Que lista dá os três princípios da agricultura de conservação da FAO?", options: ["Lavoura, queimada, monocultura", "Mexer o mínimo no solo, cobertura permanente do solo, diversificação de culturas", "Rega, adubo, pesticidas", "Lavoura funda, solo nu, uma só cultura"], answer: 1, why: "São os três princípios que a FAO descreve." },
      { objective: "O1", q: "Segundo a FAO, pelo menos quanto do solo deve estar coberto em AC?", options: ["5 por cento", "10 por cento", "30 por cento", "100 por cento sempre"], answer: 2, why: "A FAO fala de uma cobertura orgânica permanente de pelo menos 30 por cento." },
      { objective: "O1", q: "O que quer dizer mexer o mínimo no solo?", options: ["Mexer no solo só onde vão a semente e o adubo", "Lavrar uma vez em vez de duas", "Nunca semear", "Cavar o campo todo à mão"], answer: 0, why: "Só se mexe no sítio de plantio, na cova ou na linha de ripagem." },
      { objective: "O1", q: "Que rotação mostra diversificação de culturas?", options: ["Milho, milho, milho", "Pousio nu todos os anos", "Só mapira", "Milho, depois feijão-nhemba, depois mapira"], answer: 3, why: "Três culturas diferentes ao longo do tempo é diversificação." },
      { objective: "O2", q: "O que são as covas zai?", options: ["Tanques de peixe", "Covas de plantio com estrume ou composto que apanham a chuva", "Celeiros", "Poços para a rega"], answer: 1, why: "As covas zai concentram a água e os nutrientes junto da planta." },
      { objective: "O2", q: "As linhas de covas devem ir:", options: ["A subir e a descer a encosta", "Em círculos", "De lado na encosta, ao longo da curva de nível", "Em qualquer direção"], answer: 2, why: "As linhas ao longo da curva de nível apanham a água em vez de a levar encosta abaixo." },
      { objective: "O2", q: "Porque voltar a usar as mesmas covas nas épocas seguintes?", options: ["Poupa muito trabalho e melhora o solo nos mesmos sítios", "As covas não se podem abrir duas vezes", "É obrigatório por lei", "As covas novas atraem pragas"], answer: 0, why: "Reutilizar as covas é muito mais rápido e concentra as melhorias." },
      { objective: "O3", q: "Que agricultor está mais indicado para covas abertas à mão?", options: ["Um agricultor com 20 hectares e um trator", "Um agricultor sem nenhuma mão de obra", "Um agricultor que quer lavrar", "Um agricultor que trabalha com enxada numa parcela pequena"], answer: 3, why: "As covas servem para parcelas pequenas trabalhadas à mão." },
      { objective: "O3", q: "O que é um calo de lavoura?", options: ["Uma panela de cozinha", "Um tipo de semente", "Um charco pouco fundo", "Uma camada dura abaixo da profundidade da lavoura que trava as raízes e a água"], answer: 3, why: "Lavrar muitas vezes pode formar uma camada dura que um ripador consegue partir." },
      { objective: "O3", q: "O que quer dizer sementeira direta?", options: ["Semear diretamente no solo sem mexer e com os restolhos", "Atirar a semente à mão em solo lavrado", "Plantar mudas de um viveiro", "Comprar a semente diretamente a uma empresa"], answer: 0, why: "A sementeira direta põe a semente sem abrir o solo para além do sítio de plantio." },
      { objective: "O4", q: "De onde pode vir mais cobertura do solo se os animais comem a maior parte dos restolhos?", options: ["Da queimada", "Da lavoura", "De uma consociação com feijão-nhemba ou lablab, capim das bordas ou ramos podados", "De folhas de plástico"], answer: 2, why: "As consociações, o capim e os ramos podados dão cobertura sem tirar toda a ração." },
      { objective: "O4", q: "Na Nigéria, que entidade regista agroquímicos como os herbicidas?", options: ["NAFDAC", "O serviço de meteorologia", "O banco central", "A federação de futebol"], answer: 0, why: "A NAFDAC regista os agroquímicos na Nigéria; consulte a sua lista." },
      { objective: "O4", q: "Quando é mais importante controlar as ervas daninhas numa cultura em AC?", options: ["Só na colheita", "Nunca", "Só depois da floração", "Nas primeiras semanas depois de a cultura nascer"], answer: 3, why: "As ervas daninhas cedo são as que mais competem com a cultura nova." },
      { objective: "O4", q: "Se usar um herbicida, o que tem de fazer?", options: ["Fazer a sua própria mistura mais forte", "Usar um produto registado, seguir o rótulo à risca e usar equipamento de proteção", "Pulverizar perto do poço", "Deixar as crianças ajudar a pulverizar"], answer: 1, why: "Só os produtos registados, usados como diz o rótulo e com proteção, são seguros e legais." },
      { objective: "O5", q: "Que ferramenta põe a semente através dos restolhos à mão?", options: ["Uma charrua de aiveca", "Um regador", "Uma plantadeira manual (jab planter)", "Uma grade"], answer: 2, why: "A plantadeira manual é uma ferramenta de mão para a sementeira direta." },
      { objective: "O5", q: "O que deve ter cada linha do seu calendário de AC?", options: ["O trabalho, o mês, a ferramenta e o custo", "Só o nome da cultura", "Só a chuva", "O nome do vizinho"], answer: 0, why: "O trabalho, o mês, a ferramenta e o custo tornam o calendário útil." },
      { objective: "O5", q: "Quando se abrem ou reutilizam as covas e se põe o estrume?", options: ["Na floração", "Na estação seca, antes das chuvas", "Durante a colheita", "Depois de as chuvas acabarem"], answer: 1, why: "Preparar na estação seca deixa semear com as primeiras boas chuvas." },
      { objective: "O6", q: "Nos anos de seca, porque é que a AC muitas vezes dá melhor resultado do que a lavoura?", options: ["Faz chover", "Não precisa de semente", "Acaba com todas as pragas", "As covas e a cobertura morta apanham e guardam mais água"], answer: 3, why: "Entra mais água e evapora-se menos debaixo da cobertura." },
      { objective: "O6", q: "O que pode acontecer ao rendimento nas primeiras uma ou duas épocas de AC?", options: ["Duplica sempre", "Pode ficar igual ou descer enquanto as ervas daninhas são muitas e o solo se ajusta", "Desce sempre para zero", "Não se pode saber nada"], answer: 1, why: "A transição pode ser difícil; os benefícios crescem ao longo de várias épocas." },
      { objective: "O6", q: "Porque manter uma parcela lavrada ao lado da sua parcela de AC?", options: ["Para comparar de forma justa o rendimento, o trabalho e o custo", "Para alimentar o gado", "Porque a AC o exige por lei", "Para cultivar ervas daninhas"], answer: 0, why: "Uma parcela de comparação mostra o que a AC está mesmo a fazer na sua machamba." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 4, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e tente outra vez.",
    criteria: [
      { name: "Três princípios", objective: "O1", notYet: "O plano continua a lavrar, deixa o solo nu ou cultiva uma só cultura.", meets: "O plano mostra mexer o mínimo no solo, cobertura e uma rotação ou consociação com pelo menos três culturas ao longo do tempo.", exceeds: "Explica como os três princípios se apoiam uns aos outros neste campo." },
      { name: "Preparação da terra", objective: "O3", notYet: "Nenhum método escolhido, ou sem razões.", meets: "Covas de plantio, covas zai, ripagem ou sementeira direta escolhidas com pelo menos duas razões (mão de obra, tração, solo, tamanho).", exceeds: "Diz de onde vêm as ferramentas e já viu ou experimentou o método." },
      { name: "Covas marcadas", objective: "O2", notYet: "As covas não estão ao longo da curva de nível ou não há plano para o estrume.", meets: "Linhas ao longo da curva de nível, datas para abrir na estação seca e estrume ou composto em cada cova (se usar covas).", exceeds: "Abriu uma área de teste, contou o tempo e calculou a mão de obra para o campo inteiro." },
      { name: "Cobertura e ervas daninhas", objective: "O4", notYet: "Nenhum plano para os restolhos, a pastagem ou as ervas daninhas.", meets: "Mantém pelo menos 30 por cento de cobertura, resolve a pastagem e tem um calendário de sacha; qualquer herbicida é registado e usado como diz o rótulo, com equipamento de proteção.", exceeds: "Junta uma cultura de cobertura ou consociação e um plano para impedir as ervas de dar semente." },
      { name: "Calendário da época", objective: "O5", notYet: "Faltam trabalhos ou não têm datas.", meets: "Todos os trabalhos, da preparação na estação seca até à colheita, com o mês, a ferramenta e o custo.", exceeds: "Inclui os dias de trabalho e quem faz cada tarefa." },
      { name: "Comparação durante a transição", objective: "O6", notYet: "Sem parcela de comparação nem registos.", meets: "Uma parcela lavrada de comparação, com o rendimento, os dias de trabalho e os custos a registar em cada época.", exceeds: "Compromete-se a avaliar depois de três épocas e diz o que o faria mudar o plano." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem uma época de AC em pelo menos um campo com uma parcela de comparação (inquérito de seguimento)",
      "Rendimento, dias de trabalho e custo nas parcelas de AC e nas lavradas durante três épocas, sobretudo nos anos secos (registos dos alunos)",
      "Alunos que ainda praticam AC depois de três épocas, e a área que cultivam em AC",
      "Vizinhos ou membros do grupo que adotam a AC (relatórios da extensão)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta para o desenho do campo e o calendário",
      "Uma enxada, fio ou paus e uma fita métrica ou um pau medido para marcar as covas",
      "Estrume ou composto para as covas de teste",
      "Preços locais ou preços de aluguer de ripadores, plantadeiras manuais e mão de obra (ou valores de exemplo)",
      "Cerca de 90 minutos no total, mais o tempo no campo para o teste das covas"
    ],
    facilitatorNotes: [
      "Faça a Lição 2 no campo: marquem e abram juntos algumas covas de plantio ou covas zai, e contem o tempo do trabalho.",
      "Convide um agricultor que já pratica AC, ou organize uma visita a uma parcela de demonstração, para que os alunos vejam a ripagem ou a sementeira direta a funcionar.",
      "Fale abertamente dos costumes de pastagem; se possível, traga pastores ou líderes da comunidade para a conversa.",
      "Não recomende herbicidas específicos; mande os alunos para a lista nacional de registo e para o extensionista, e insista no rótulo e no equipamento de proteção.",
      "Dê expectativas honestas sobre a transição: o rendimento pode não subir nas primeiras épocas.",
      "Avalie o plano final com a grelha de avaliação e faça o seguimento depois de cada época para comparar as parcelas."
    ]
  }
};
