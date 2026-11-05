"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-intro.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KCAA_UAS = { name: "Autoridade de Aviação Civil do Quénia (KCAA): sistemas de aeronaves não tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Sistema online da KCAA para drones (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autoridade de Aviação Civil da Nigéria (NCAA): Nig.CARs 2023 Parte 21, sistemas de aeronaves pilotadas remotamente", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO e UIT: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO e OMS: orientações para a aplicação aérea de pesticidas (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-intro-pt",
  lang: "pt",
  translationOf: "agri-drones-intro",
  category: "Agriculture (Africa)",
  name: "Drones para a Monitorização Agrícola 1: Introdução, Regulamentos e Segurança",
  skills: "Explicar o que fazem os drones agrícolas, Escolher um tipo de drone para um trabalho, Encontrar as regras da sua autoridade de aviação, Avaliar os riscos de um local de voo, Fazer uma reunião de segurança antes do voo",
  outcome: "decidir se um drone é a ferramenta certa para um problema da exploração agrícola, dizer qual é a autoridade de aviação e que documentos precisa antes de voar, e escrever um plano simples de uso de drone com uma lista de verificação de segurança para uma exploração.",
  about: [
    "Este curso é para agricultores, extensionistas, donos de agronegócios e jovens no Quénia, na Nigéria e em toda a África que querem começar a usar drones para vigiar culturas, animais e terras. Ainda não precisa de ter um drone.",
    "No Capítulo 1 aprende o que um drone pode e não pode fazer numa exploração agrícola, os principais tipos de drones, e como avaliar quando um drone vale o custo, em comparação com andar pelo campo ou usar imagens de satélite gratuitas. No Capítulo 2 aprende quem faz as regras dos drones no seu país, que documentos costumam ser pedidos, e como verificar um local de voo e preparar a sua equipa para que ninguém se magoe.",
    "As regras dos drones são lei e mudam. Este curso nunca lhe diz que pode voar: mostra-lhe como encontrar as regras oficiais do seu país e cumpri-las. É o Curso 1 de uma série de seis; os cursos seguintes ensinam a voar, a captar imagens, a saúde das culturas, a agricultura de precisão e a gestão de programas com drones.",
    "Cada lição dura cerca de cinco minutos: leia, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de uso de drone de uma página para uma exploração real ou de exemplo (por exemplo 3 acres de milho e feijão em Nakuru, ou 5 hectares de mandioca no Estado de Oyo): o problema em que o drone vai ajudar, o tipo de drone e porquê, a autoridade de aviação e os documentos que tem de verificar ou obter, os perigos que encontrou no local e uma lista de verificação de segurança antes do voo com pelo menos oito pontos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agricultores, extensionistas, donos de agronegócios e jovens no Quénia, na Nigéria e em toda a África que querem começar a usar drones para vigiar culturas, animais e terras. A maioria ainda não tem um drone.",
    startingPoint: "A maioria já viu drones em vídeos ou em demonstrações e anda pelos seus campos para ver as culturas. Poucos sabem que drone e que câmara servem para cada trabalho agrícola, quando um drone vale o custo, quem faz as regras dos drones no seu país, ou como verificar um local e preparar uma equipa antes de um voo.",
    gap: "Há pessoas que compram drones que não servem para o trabalho, voam sem o registo e as licenças que a lei exige, ou põem pessoas e aeronaves em perigo. Saber o que um drone pode e não pode fazer, as regras e a segurança básica do local permite aos alunos decidir bem e começar a série de drones de forma segura e legal.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo de drones é explicado",
      "Aparelhos: um telefone com internet para encontrar a página de drones da autoridade de aviação; não é preciso drone",
      "As regras são lei e mudam: o curso nunca diz que um aluno pode voar; os alunos verificam as regras oficiais do seu país",
      "Tempo: lições de cerca de 5 minutos, que cabem entre os trabalhos da exploração",
      "Segurança e privacidade: não se voa no curso; não filme pessoas nem casas"
    ],
    prerequisites: "Nenhum. Este é o Curso 1 da série de seis cursos sobre drones."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de problemas da exploração agrícola", action: "identificar em quais um drone pode ajudar e em quais não pode", standard: "dizendo pelo menos quatro trabalhos em que ajuda e dois que não consegue fazer" },
    { id: "O2", condition: "Com um trabalho agrícola e o tamanho da exploração", action: "escolher um tipo de drone e uma câmara que sirvam para o trabalho", standard: "com uma razão para cada escolha" },
    { id: "O3", condition: "Para um problema da exploração agrícola", action: "comparar um drone, imagens de satélite gratuitas e andar pelo campo, e escolher a melhor ferramenta", standard: "contando todos os custos e a decisão que as imagens vão mudar" },
    { id: "O4", condition: "Para o seu país", action: "encontrar a autoridade de aviação e fazer a lista dos documentos de drone que ela pode exigir", standard: "usando só o site ou o escritório da própria autoridade" },
    { id: "O5", condition: "Antes de qualquer voo numa exploração agrícola", action: "percorrer o local e marcar os perigos e as zonas proibidas", standard: "e avisar o agricultor e os vizinhos de quando vai voar" },
    { id: "O6", condition: "Antes e durante um voo", action: "fazer uma reunião e uma lista de verificação de segurança antes do voo e dizer os primeiros passos numa emergência", standard: "com pelo menos oito pontos na lista" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Drones na exploração agrícola",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que um drone pode fazer por uma exploração agrícola",
          minutes: 5,
          goal: "Dizer quatro trabalhos agrícolas em que um drone pode ajudar e dois que não consegue fazer.",
          text: [
            "Um drone é uma pequena aeronave sem piloto a bordo. Uma pessoa pilota-o a partir do chão com um comando ou um telefone, ou programa-o para voar sozinho numa rota planeada. As autoridades de aviação chamam-lhe sistema de aeronave não tripulada (UAS) ou sistema de aeronave pilotada remotamente (RPAS).",
            "Numa exploração agrícola, a maioria dos drones leva uma câmara. De cima, vê o campo todo de uma vez: falhas onde a semente não nasceu, manchas amarelas ou murchas, cantos encharcados, erosão do solo, vedações partidas e animais fora do lugar. A FAO e a UIT apontam a monitorização das culturas, o alerta precoce, a vigilância de pragas, o seguimento de animais e a monitorização de florestas entre os principais usos agrícolas.",
            "Alguns drones maiores pulverizam ou espalham sementes e adubo. Pulverizar pesticidas com drone é um trabalho especial e de maior risco, que precisa das suas próprias autorizações da autoridade de aviação e da entidade que regula os pesticidas; por isso, este curso trata só da monitorização.",
            "Um drone não lhe diz PORQUE é que uma mancha está amarela. Mostra-lhe ONDE deve ir ver. Continua a ter de ir ao local, ver as folhas, o solo e os insetos, e decidir o que fazer. Também não pode voar com chuva forte ou vento forte, e a bateria costuma durar bem menos de uma hora."
          ],
          words: [["Drone", "uma pequena aeronave pilotada sem ninguém a bordo."], ["UAS / RPAS", "os nomes oficiais (em inglês): sistema de aeronave não tripulada e sistema de aeronave pilotada remotamente. É a aeronave mais o seu comando e a ligação entre eles."], ["Inspeção do campo", "andar por um campo à procura de problemas como pragas, doenças ou ervas daninhas."]],
          slides: [
            { title: "Um drone é", bullets: ["Uma pequena aeronave sem piloto a bordo", "Pilotada a partir do chão, ou numa rota planeada", "Oficialmente chamada UAS ou RPAS"] },
            { title: "Em que ajuda", bullets: ["Ver o campo todo de uma vez", "Encontrar falhas, manchas amarelas ou murchas", "Ver encharcamento, erosão, vedações partidas", "Contar e encontrar animais"] },
            { title: "O que não consegue fazer", bullets: ["Dizer PORQUE uma mancha está doente: tem de ir lá", "Voar com chuva forte ou vento forte", "Ficar no ar durante horas com uma bateria"] },
            { title: "Pulverizar é diferente", bullets: ["Drones de pulverização precisam de mais autorizações", "Da autoridade de aviação E da entidade dos pesticidas", "Este curso trata só da monitorização"] }
          ],
          sources: [FAO_ITU_DRONES, FAO_WHO_AERIAL],
          tryIt: "Pense numa exploração agrícola que conhece. Escreva três problemas dessa exploração que poderia VER do ar, e um problema em que um drone não poderia ajudar (por exemplo, preços baixos no mercado).",
          youCanNow: "explicar o que faz um drone agrícola, dizer trabalhos em que ajuda e porque continua a ter de andar pelo campo.",
          quickCheck: [
            { objective: "O1", q: "O que pode um drone com câmara mostrar a um agricultor?", options: ["Porque é que uma planta está doente", "O nome exato da doença", "Onde estão as falhas, as manchas amarelas ou os cantos encharcados", "Por quanto vai vender a colheita"], answer: 2, why: "Um drone mostra onde ir ver; continua a ter de ir ao local para saber porquê." },
            { objective: "O1", q: "Um agricultor quer voar com um drone com câmara durante chuva forte para ver uma inundação. O que lhe diz?", options: ["Voe mais alto na chuva", "Espere; os drones não podem voar com chuva forte, por isso veja depois de parar", "Voe enquanto a bateria durar", "Pulverize o campo ao mesmo tempo"], answer: 1, why: "Um drone não pode voar com chuva forte ou vento forte." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escolher o tipo certo de drone",
          minutes: 5,
          goal: "Combinar um tipo de drone e uma câmara com um trabalho agrícola.",
          text: [
            "Há três tipos principais de drones agrícolas. Um multirrotor tem quatro ou mais hélices, como um pequeno helicóptero. Descola de um espaço pequeno, pode ficar parado no ar e é fácil de aprender, mas cobre menos terreno com cada bateria. Serve para pequenas machambas e lavras, estufas e verificações rápidas.",
            "Um drone de asa fixa parece um pequeno avião. Plana, por isso cobre áreas grandes, como uma plantação de chá de 200 hectares ou uma fazenda de gado, mas precisa de espaço para descolar e aterrar e é mais difícil de pilotar. Um drone híbrido (VTOL) descola na vertical como um multirrotor e depois voa como um avião.",
            "A câmara conta tanto como o drone. Uma câmara normal a cores (RGB) chega para ver falhas, ervas daninhas, encharcamento e animais. Uma câmara multiespectral mede luz que o olho não vê e ajuda a mostrar mais cedo o stress das plantas. Uma câmara térmica mostra o calor: é útil para a falta de água, fugas na rega e encontrar animais.",
            "Comece pequeno. Muitos extensionistas e jovens prestadores de serviços começam com um pequeno multirrotor com câmara RGB, aprendem bem e acrescentam sensores mais tarde."
          ],
          steps: ["Escreva o trabalho: o que precisa de ver e qual é o tamanho da área?", "Área pequena ou precisa de ficar parado no ar: multirrotor. Área grande: asa fixa ou híbrido.", "Escolha a câmara: RGB para a maioria dos trabalhos, multiespectral para ver cedo o stress das plantas, térmica para calor e água.", "Antes de comprar, confirme que o drone é permitido e pode ser registado no seu país."],
          words: [["Multirrotor", "um drone com quatro ou mais hélices que pode ficar parado no ar."], ["Asa fixa", "um drone com a forma de um pequeno avião, que plana e cobre áreas grandes."], ["Câmara RGB", "uma câmara normal a cores (vermelho, verde, azul; em inglês red, green, blue)."], ["Câmara multiespectral", "uma câmara que também mede luz que o olho não vê, como o infravermelho próximo."]],
          slides: [
            { title: "Três tipos de drone agrícola", bullets: ["Multirrotor: fica parado no ar, espaço pequeno, áreas menores", "Asa fixa: plana, áreas grandes, precisa de espaço para descolar", "Híbrido (VTOL): descola na vertical, voa como um avião"] },
            { title: "Três tipos de câmara", bullets: ["RGB: cores normais, chega para a maioria dos trabalhos", "Multiespectral: mostra mais cedo o stress das plantas", "Térmica: mostra calor, falta de água, animais"] },
            { title: "Combine o drone com o trabalho", bullets: ["Lavra de milho de 2 acres: pequeno multirrotor, RGB", "Plantação de chá de 200 hectares: asa fixa ou híbrido", "Fazenda de gado ao amanhecer: câmara térmica para achar o gado"] },
            { title: "Comece pequeno", bullets: ["Aprenda com um pequeno multirrotor com RGB", "Acrescente sensores quando precisar", "Veja as regras de registo antes de comprar"] }
          ],
          tryIt: "Para cada um destes trabalhos, escolha um tipo de drone e uma câmara e escreva uma razão: (a) ver a germinação em 2 acres de feijão, (b) mapear 150 hectares de cana-de-açúcar, (c) encontrar uma vaca perdida no mato ao amanhecer.",
          youCanNow: "escolher um tipo de drone e uma câmara que sirvam para um trabalho agrícola e para o tamanho da área.",
          quickCheck: [
            { objective: "O2", q: "O que é um drone multirrotor?", options: ["Um drone com quatro ou mais hélices que pode ficar parado no ar", "Um drone com a forma de um avião", "Um satélite", "Um drone que só pulveriza"], answer: 0, why: "Um multirrotor tem quatro ou mais hélices, descola de um espaço pequeno e pode ficar parado no ar." },
            { objective: "O2", q: "Quer encontrar fugas na rega numa exploração de hortícolas. Que câmara escolhe?", options: ["Uma câmara normal de telefone num pau", "Nenhuma câmara", "Só uma câmara RGB à noite", "Uma câmara térmica"], answer: 3, why: "Uma câmara térmica mostra o calor, o que é útil para a falta de água e as fugas na rega." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Um drone vale a pena? Drone, satélite ou andar a pé",
          minutes: 5,
          goal: "Decidir se um drone, imagens de satélite gratuitas ou andar pelo campo é a melhor ferramenta para um problema da exploração.",
          text: [
            "Um drone nem sempre é a melhor ferramenta. Para uma horta de um quarto de acre, andar pelas linhas é mais rápido e grátis. Para uma província ou um distrito inteiro, as imagens de satélite gratuitas (por exemplo dos satélites europeus Sentinel-2, que se veem em ferramentas online gratuitas) mostram padrões gerais de poucos em poucos dias, mas cada píxel tem cerca de 10 metros, grosseiro demais para ver plantas uma a uma.",
            "Os drones ficam no meio. Veem até poucos centímetros, no dia que você escolhe, mesmo com nuvens finas. Isso torna-os bons para explorações médias e grandes, para cooperativas que partilham um drone pelos campos de muitos membros, e para culturas de alto valor como o chá, o café, o abacate e as hortícolas.",
            "Conte os custos, não só o preço do drone: taxas de registo e de licença, formação, baterias e hélices de reserva, um telefone ou tablet, dados de internet, transporte e o seu tempo. Depois pergunte: que decisão as imagens vão mudar, e essa decisão vale mais do que o custo?"
          ],
          steps: ["Escreva a decisão que quer tomar (por exemplo: onde voltar a semear, ou que talhão tratar).", "Pergunte qual é o tamanho da área e qual é o tamanho da coisa que precisa de ver.", "Compare andar a pé, satélite e drone para esse tamanho e esse detalhe.", "Faça a lista de todos os custos do drone e compare-a com o valor de uma decisão melhor."],
          words: [["Imagem de satélite", "uma imagem da Terra tirada do espaço; as gratuitas mostram áreas grandes mas com menos detalhe."], ["Resolução", "o tamanho da coisa mais pequena que uma imagem consegue mostrar; as imagens de drone mostram poucos centímetros, as de satélite gratuitas cerca de 10 metros."]],
          slides: [
            { title: "Três maneiras de vigiar uma exploração", bullets: ["A pé: grátis, melhor para lavras pequenas, lento nas grandes", "Satélite: grátis, áreas grandes, detalhe de cerca de 10 m", "Drone: detalhe de centímetros, no dia que escolher"] },
            { title: "Onde os drones compensam", bullets: ["Explorações médias e grandes", "Cooperativas que partilham um drone", "Culturas de alto valor: chá, café, abacate, hortícolas"] },
            { title: "Conte todos os custos", bullets: ["Registo, licença e formação", "Baterias, hélices, telefone ou tablet, dados", "Transporte e o seu tempo"] },
            { title: "A pergunta-chave", bullets: ["Que decisão as imagens vão mudar?", "Essa decisão vale mais do que o custo?"] }
          ],
          tryIt: "Escolha um problema da exploração da Lição 1. Escreva que ferramenta usaria (andar a pé, satélite ou drone), porquê, e faça a lista de pelo menos cinco custos se escolhesse o drone.",
          youCanNow: "decidir se um drone vale a pena para um problema da exploração, comparando-o com andar a pé e com imagens de satélite.",
          quickCheck: [
            { objective: "O3", q: "Porque é que as imagens de satélite gratuitas são grosseiras demais para ver plantas uma a uma?", options: ["Só são a preto e branco", "São tiradas uma vez por ano", "Custam caro demais", "Cada píxel tem cerca de 10 metros"], answer: 3, why: "Os píxeis do Sentinel-2 têm cerca de 10 metros, por isso mostram padrões gerais, não plantas uma a uma." },
            { objective: "O3", q: "Uma agricultora com uma horta de um quarto de acre pergunta se deve comprar um drone. O que sugere?", options: ["Andar pelas linhas; é mais rápido e grátis numa lavra tão pequena", "Comprar o maior drone de asa fixa", "Usar uma câmara térmica todos os dias", "Alugar um drone de pulverização"], answer: 0, why: "Numa lavra muito pequena, andar pelas linhas é mais rápido e não custa nada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Drones na exploração agrícola",
        questions: [
          { objective: "O1", q: "Um mapa de drone mostra uma mancha amarela num campo de milho. O que deve fazer a seguir?", options: ["Pulverizar o campo todo de uma vez", "Ir à mancha e ver as plantas, o solo e os insetos", "Ignorar; os mapas de drone estão sempre errados", "Voar outra vez até a mancha desaparecer"], answer: 1, why: "Um drone mostra ONDE ir ver; descobre PORQUÊ no terreno." },
          { objective: "O2", q: "Que drone é melhor para mapear uma plantação de chá de 200 hectares?", options: ["Um drone de brinquedo", "Um pequeno drone para interiores", "Um drone de asa fixa ou híbrido", "Nenhum drone consegue fazer isto"], answer: 2, why: "Os drones de asa fixa e híbridos planam e cobrem áreas grandes com cada bateria." },
          { objective: "O2", q: "Que câmara ajuda mais a encontrar gado no mato ao amanhecer?", options: ["Câmara térmica", "Só uma câmara normal de telefone", "Uma câmara sem lente", "Um bico de pulverização"], answer: 0, why: "Uma câmara térmica mostra o calor dos animais quando há pouca luz." },
          { objective: "O4", q: "Pulverizar pesticida com um drone:", options: ["Não precisa de mais papéis", "É o mesmo que tirar fotos", "Precisa das suas próprias autorizações da autoridade de aviação e da entidade dos pesticidas", "É permitido em qualquer lugar se o campo for seu"], answer: 2, why: "Pulverizar é uma operação especial e de maior risco, com autorizações extra." },
          { objective: "O3", q: "Para uma horta de um quarto de acre, a melhor ferramenta costuma ser:", options: ["Um drone de asa fixa", "Um drone multiespectral", "Imagens de satélite", "Andar pelas linhas"], answer: 3, why: "Numa lavra muito pequena, andar a pé é mais rápido, mais barato e mostra mais." }
        ]
      }
    },
    {
      name: "Capítulo 2: Regras e segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Quem faz as regras dos drones no seu país",
          minutes: 6,
          goal: "Encontrar a autoridade de aviação do seu país e fazer a lista dos documentos de drone que ela pode exigir.",
          text: [
            "Cada país controla o seu próprio espaço aéreo. Em cada país, uma autoridade de aviação civil faz e aplica as regras dos drones. No Quénia é a Autoridade de Aviação Civil do Quénia (KCAA), segundo o Regulamento de Aviação Civil (Sistemas de Aeronaves Não Tripuladas) de 2020. Na Nigéria é a Autoridade de Aviação Civil da Nigéria (NCAA), segundo a Parte 21 do Regulamento de Aviação Civil da Nigéria de 2023. Outros países, como o Gana, o Ruanda, o Uganda, a Tanzânia e a África do Sul, têm a sua própria autoridade e as suas próprias regras.",
            "Os documentos costumam incluir: o registo do drone; uma licença para o importar; uma licença de piloto remoto para a pessoa que pilota (sobretudo para trabalho comercial ou de maior risco); um certificado de operador para uma empresa que voa a troco de pagamento (a KCAA chama-lhe Remote Air Operator Certificate, a NCAA RPAS Operator Certificate); e autorização para alguns tipos de voo. A KCAA e a NCAA têm ambas sistemas online para drones.",
            "Não confie num amigo, num vendedor ou nas redes sociais para saber as regras. Leia a página de drones da própria autoridade, ou telefone ou envie um e-mail à autoridade. As taxas e os passos mudam, por isso verifique-os no dia em que faz o pedido.",
            "Nunca voe antes de ter o registo, a licença e as autorizações que o seu país exige para esse voo. Voar sem eles pode dar multas, a apreensão do drone ou pior, e põe pessoas e aeronaves em perigo."
          ],
          steps: ["Procure a autoridade de aviação civil do seu país e abra o seu site oficial.", "Encontre a página sobre drones, UAS ou RPAS.", "Escreva: registo, licença de importação, licença de piloto, certificado de operador e autorização de voo: quais se aplicam a você?", "Anote as taxas, o sistema online e a data em que verificou.", "Se alguma coisa não estiver clara, contacte diretamente a autoridade."],
          words: [["Autoridade de aviação civil", "o organismo do governo que faz e aplica as regras para tudo o que voa num país."], ["Registo", "inscrever o seu drone na autoridade para que tenha um número oficial."], ["Licença de piloto remoto (RPL)", "a licença oficial para uma pessoa que pilota um drone."], ["Certificado de operador", "a autorização de que uma empresa precisa para voar drones a troco de pagamento."]],
          slides: [
            { title: "Cada país tem uma autoridade", bullets: ["Quénia: KCAA, Regulamento UAS de 2020", "Nigéria: NCAA, Nig.CARs 2023 Parte 21", "Outros países: a sua própria autoridade e regras"] },
            { title: "Documentos de que pode precisar", bullets: ["Registo do drone e licença de importação", "Licença de piloto remoto para quem pilota", "Certificado de operador para voar a troco de pagamento", "Autorização para alguns voos"] },
            { title: "Tire as regras da fonte", bullets: ["Leia a página de drones da própria autoridade", "Telefone ou envie um e-mail à autoridade", "Veja taxas e passos no dia em que faz o pedido"] },
            { title: "A regra de ouro", bullets: ["Sem registo, licença ou autorização: não há voo", "Multas, drones apreendidos, perigo para pessoas e aeronaves"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Abra o site da autoridade de aviação civil do seu país (KCAA, NCAA ou a do seu país). Encontre a página de drones e escreva a lista dos documentos que exige, o endereço do sistema online e a data de hoje.",
          youCanNow: "dizer qual é a sua autoridade de aviação, encontrar as suas regras sobre drones e fazer a lista dos documentos que tem de ter antes de voar.",
          quickCheck: [
            { objective: "O4", q: "Para que serve uma licença de piloto remoto?", options: ["Para o próprio drone", "Para a pessoa que pilota o drone", "Para o dono da exploração", "Para a loja de drones"], answer: 1, why: "A licença de piloto remoto é para a pessoa que pilota, sobretudo em trabalho comercial ou de maior risco." },
            { objective: "O4", q: "Um vendedor de drones diz que não precisa de papéis para voar para agricultores que lhe pagam. O que faz?", options: ["Confia no vendedor", "Pergunta nas redes sociais", "Verifica a página de drones da própria autoridade de aviação ou contacta a autoridade", "Voa e faz o pedido depois"], answer: 2, why: "Só a página ou o escritório da própria autoridade dá as regras e os documentos atuais." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar os perigos de um local de voo",
          minutes: 5,
          goal: "Percorrer uma exploração e marcar os perigos e as zonas proibidas antes de qualquer voo.",
          text: [
            "Antes de qualquer voo, veja o local no terreno e num mapa. Muitas regras mantêm os drones longe de aeroportos e pistas de aviação, instalações militares, prisões, multidões e zonas do governo. Por exemplo, a Parte 21 da Nigéria tem regras de distância à volta dos aeródromos e limites para voar sobre zonas povoadas e perto de pessoas que não fazem parte da operação. As regras do seu país dão as distâncias exatas; verifique-as.",
            "Na própria exploração, procure linhas elétricas, árvores altas, torres de telecomunicações, edifícios, estradas, casas, escolas, mercados e animais a pastar. Procure um lugar limpo e plano para descolar e aterrar, longe de pessoas e de poeira.",
            "Fale com as pessoas: o agricultor, os vizinhos e quem estiver a trabalhar perto. Diga-lhes quando vai voar. Peça autorização antes de voar sobre o terreno ou a casa de um vizinho. Respeite a privacidade: não filme pessoas nem casas."
          ],
          steps: ["Abra uma aplicação de mapas e veja a área à volta da exploração: pistas de aviação, estradas, vilas, locais sensíveis.", "Verifique as regras da sua autoridade sobre distâncias a aeroportos e a pessoas.", "Percorra a exploração e marque linhas elétricas, árvores, torres, edifícios e animais.", "Escolha um lugar limpo para descolar e aterrar.", "Diga ao agricultor e aos vizinhos quando vai voar, e peça autorização antes de passar sobre o terreno deles."],
          words: [["Zona proibida", "uma área onde os drones não podem voar sem autorização especial, como perto de aeroportos."], ["Perigo", "qualquer coisa que possa causar dano: linhas elétricas, árvores, pessoas, animais."], ["Aeródromo", "qualquer aeroporto, pista de aviação ou heliporto."]],
          slides: [
            { title: "Olhe para além da exploração", bullets: ["Aeroportos, pistas de aviação e heliportos", "Instalações militares, prisões, multidões", "Verifique as distâncias exatas do seu país"] },
            { title: "Olhe para a exploração", bullets: ["Linhas elétricas, árvores altas, torres", "Casas, estradas, escolas, mercados", "Animais a pastar"] },
            { title: "Escolha um lugar seguro", bullets: ["Área limpa e plana para descolar e aterrar", "Longe de pessoas e de poeira"] },
            { title: "Fale com as pessoas", bullets: ["Diga ao agricultor e aos vizinhos quando voa", "Peça autorização antes de passar sobre o terreno deles", "Não filme pessoas nem casas"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Desenhe um mapa simples de uma exploração. Marque o lugar de descolagem, todos os perigos que encontrar, as casas e estradas perto, e qualquer pista de aviação a poucos quilómetros que encontre numa aplicação de mapas.",
          youCanNow: "verificar os perigos e as zonas proibidas de um local e escolher um lugar seguro para descolar.",
          quickCheck: [
            { objective: "O5", q: "Que perigo deve procurar na exploração antes de voar?", options: ["Um campo limpo e plano", "Uma cultura de milho saudável", "Uma torre de telecomunicações ou árvores altas", "Uma manhã seca e com sol"], answer: 2, why: "Torres, árvores, linhas elétricas e edifícios são perigos a marcar antes de um voo." },
            { objective: "O5", q: "O voo que planeou passa sobre a casa de um vizinho. O que faz?", options: ["Pede primeiro ao vizinho, e não filma pessoas nem casas", "Voa depressa para ele não reparar", "Filma a casa para o relatório", "Voa à noite"], answer: 0, why: "Peça autorização antes de voar sobre o terreno ou a casa de um vizinho, e respeite a privacidade." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reunião antes do voo e o que fazer se algo correr mal",
          minutes: 5,
          goal: "Fazer uma reunião de segurança antes do voo e saber os primeiros passos numa emergência.",
          text: [
            "As equipas profissionais de drones começam cada voo com uma reunião curta. Todos ouvem o plano: onde o drone vai voar, a que altura, durante quanto tempo, quem é o piloto, quem é o observador que vigia o céu e o drone, e onde é o lugar de aterragem.",
            "Veja o tempo: não se voa com chuva, trovoada, vento forte ou com rajadas, tempestades de poeira ou pouca luz, a não ser que o seu drone e as suas autorizações o permitam. Verifique o drone: bateria carregada, hélices sem danos, câmara limpa, comando ligado.",
            "Combinem o que fazer se algo correr mal: se a bateria estiver fraca, aterre; se uma pessoa ou um animal passar por baixo do drone, afaste-se ou aterre; se aparecer uma aeronave tripulada ou um helicóptero, desça e aterre imediatamente. Se o drone se perder ou cair, torne a área segura e comunique os incidentes graves à sua autoridade, como as regras dela exigem."
          ],
          steps: ["Faça a reunião com a equipa: área, altura, tempo, piloto, observador, lugar de aterragem.", "Veja o tempo: chuva, vento, poeira, luz.", "Verifique o drone: bateria, hélices, câmara, ligação do comando.", "Combinem o plano de emergência: bateria fraca, pessoas por baixo, aeronave perto, drone perdido.", "Depois do voo, escreva o que aconteceu num livro de registo."],
          words: [["Observador", "um membro da equipa que vigia o drone e o céu e avisa o piloto."], ["Reunião antes do voo", "uma conversa curta antes de um voo para que todos saibam o plano."], ["Livro de registo", "um registo de cada voo: data, local, hora, piloto, problemas."]],
          slides: [
            { title: "Reunião com a equipa", bullets: ["Onde, a que altura, durante quanto tempo", "Quem é o piloto, quem é o observador", "Onde vão aterrar"] },
            { title: "Veja o tempo e o drone", bullets: ["Sem chuva, trovoada, vento forte nem poeira", "Bateria, hélices, câmara, comando"] },
            { title: "Se algo correr mal", bullets: ["Bateria fraca: aterre", "Pessoas ou animais por baixo: afaste-se ou aterre", "Aeronave perto: desça e aterre imediatamente"] },
            { title: "Depois do voo", bullets: ["Escreva-o no livro de registo", "Comunique incidentes graves como as regras exigem"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de uso de drone de uma página para uma exploração: o problema, o tipo de drone e a câmara, a autoridade e os documentos, os perigos do seu mapa desenhado e uma lista de verificação antes do voo com pelo menos oito pontos, incluindo o plano de emergência.",
          youCanNow: "fazer uma reunião com a equipa antes de um voo, verificar o tempo e o drone, e seguir um plano de emergência simples.",
          quickCheck: [
            { objective: "O6", q: "O que acontece numa reunião antes do voo?", options: ["O piloto cobra ao cliente", "A equipa escreve o relatório final", "O drone é vendido", "Todos ouvem onde, a que altura e durante quanto tempo o drone vai voar, e quem faz o quê"], answer: 3, why: "A reunião partilha com todos o plano, as funções e o lugar de aterragem." },
            { objective: "O6", q: "Aparece um helicóptero enquanto o seu drone está a voar. O que faz?", options: ["Sobe mais para o ver", "Desce e aterra imediatamente", "Continua a filmar", "Voa na direção dele"], answer: 1, why: "Se aparecer uma aeronave tripulada ou um helicóptero, o drone desce e aterra imediatamente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Regras e segurança",
        questions: [
          { objective: "O4", q: "Quem faz e aplica as regras dos drones no Quénia?", options: ["A Autoridade de Aviação Civil do Quénia (KCAA)", "O serviço de agricultura do condado", "O vendedor do drone", "O chefe local"], answer: 0, why: "A KCAA é a autoridade de aviação civil do Quénia e regula os drones." },
          { objective: "O4", q: "Um amigo diz que pode voar com um drone novo na exploração de um cliente sem nenhum papel. O que faz?", options: ["Voa; o seu amigo já fez isso", "Verifica as regras oficiais da autoridade de aviação e obtém o que é exigido antes de voar", "Voa muito cedo para ninguém ver", "Voa só sobre o terreno do cliente"], answer: 1, why: "Só contam as regras da autoridade oficial; sem papéis, não há voo." },
          { objective: "O5", q: "Que perigo deve marcar antes de voar?", options: ["Um céu limpo", "Um lugar seco e plano para descolar", "Linhas elétricas a atravessar o campo", "Uma bateria carregada"], answer: 2, why: "As linhas elétricas podem prender ou danificar o drone e são um perigo real." },
          { objective: "O6", q: "Durante um voo aparece um pequeno avião perto. O que deve fazer o piloto?", options: ["Subir mais para ver melhor", "Continuar a filmar", "Voar na direção dele", "Descer e aterrar imediatamente"], answer: 3, why: "As aeronaves tripuladas têm sempre prioridade; desça o drone e saia do caminho." },
          { objective: "O6", q: "Qual é o trabalho do observador?", options: ["Vigiar o drone e o céu e avisar o piloto", "Pilotar o drone", "Só carregar as baterias", "Filmar os vizinhos"], answer: 0, why: "O observador vigia para que o piloto se possa concentrar em voar com segurança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones para a Monitorização Agrícola 1: Introdução, Regulamentos e Segurança",
    questions: [
      { objective: "O1", q: "O que é um drone?", options: ["Uma pequena aeronave sem piloto a bordo", "Um trator", "Um satélite meteorológico", "Uma aplicação de telefone"], answer: 0, why: "Um drone é pilotado a partir do chão ou numa rota planeada, sem ninguém a bordo." },
      { objective: "O1", q: "Em que trabalho agrícola pode ajudar um drone com câmara?", options: ["Subir os preços no mercado", "Encontrar falhas onde a semente não nasceu", "Arranjar uma bomba avariada", "Assinar um contrato"], answer: 1, why: "De cima, vê depressa as falhas numa cultura." },
      { objective: "O1", q: "Um drone mostra uma mancha murcha de mandioca. O drone diz-lhe:", options: ["Exatamente que doença é", "Que pesticida comprar", "Onde ir ver", "Nada de útil"], answer: 2, why: "Mostra onde; descobre porquê no terreno." },
      { objective: "O2", q: "Que drone pode ficar parado no ar e descolar de um espaço pequeno?", options: ["Asa fixa", "Um planador de papel", "Um satélite", "Multirrotor"], answer: 3, why: "Os multirrotores têm várias hélices e podem ficar parados no ar." },
      { objective: "O2", q: "Uma câmara multiespectral é útil porque:", options: ["Mede luz que o olho não vê e mostra mais cedo o stress das plantas", "Só tira fotos a preto e branco", "Faz o drone voar mais depressa", "Pulveriza adubo"], answer: 0, why: "Mede o infravermelho próximo e outras faixas ligadas à saúde das plantas." },
      { objective: "O2", q: "Uma câmara térmica mostra:", options: ["Só cores", "Calor", "Diretamente os nutrientes do solo", "Preços"], answer: 1, why: "As câmaras térmicas medem o calor, útil para a falta de água e para os animais." },
      { objective: "O3", q: "Uma cooperativa de 300 pequenas explorações quer vigiar o milho dos membros. Uma boa opção é:", options: ["Cada agricultor compra um drone de asa fixa", "Nunca usar drones", "Um serviço de drone partilhado por todos os membros", "Só chamadas telefónicas"], answer: 2, why: "Partilhar um drone por muitos campos divide o custo." },
      { objective: "O3", q: "As imagens de satélite gratuitas são menos úteis para plantas uma a uma porque:", options: ["Têm sempre nuvens", "São a preto e branco", "Custam muito", "Cada píxel tem cerca de 10 metros"], answer: 3, why: "Píxeis grosseiros mostram padrões em áreas grandes, não plantas uma a uma." },
      { objective: "O3", q: "Qual é um custo de usar um drone além de o comprar?", options: ["Baterias e hélices de reserva", "Chuva grátis", "Luz do sol", "Mais nada"], answer: 0, why: "Baterias, hélices, taxas, formação, dados e transporte custam todos dinheiro." },
      { objective: "O3", q: "Antes de comprar um drone, a pergunta-chave é:", options: ["De que cor é?", "Que decisão as imagens vão mudar, e vale o custo?", "É o modelo mais novo?", "Os meus amigos têm um?"], answer: 1, why: "Um drone só compensa se melhorar uma decisão em mais do que custa." },
      { objective: "O4", q: "As regras dos drones da Nigéria estão em:", options: ["O folheto de um vendedor", "Um grupo nas redes sociais", "Nig.CARs 2023 Parte 21, da NCAA", "O livro de recibos da exploração"], answer: 2, why: "A Parte 21 da NCAA trata do registo, da certificação e das operações de RPAS." },
      { objective: "O4", q: "As regras dos drones do Gana, do Ruanda e do Uganda são:", options: ["Exatamente iguais às do Quénia", "Desnecessárias", "Feitas só pelas Nações Unidas", "Feitas pela autoridade de aviação de cada país"], answer: 3, why: "Cada país controla o seu próprio espaço aéreo e tem as suas próprias regras." },
      { objective: "O4", q: "Uma empresa que voa drones para agricultores que lhe pagam costuma precisar de:", options: ["Um certificado de operador da autoridade de aviação", "Nada mais", "Só um telefone", "Só um cartão de visita"], answer: 0, why: "A KCAA e a NCAA têm ambas certificados de operador para trabalho comercial com drones." },
      { objective: "O4", q: "Onde deve verificar as taxas atuais dos drones?", options: ["Num jornal antigo", "Na página oficial da autoridade de aviação, no dia em que faz o pedido", "Num boato", "Na caixa do drone"], answer: 1, why: "As taxas mudam; a página oficial é a fonte de confiança." },
      { objective: "O4", q: "Pulverizar pesticida com drone precisa de autorização de:", options: ["Só o agricultor", "Só o vendedor", "A autoridade de aviação e a entidade dos pesticidas", "Ninguém"], answer: 2, why: "Pulverizar é uma operação especial abrangida pelas regras de aviação e de pesticidas." },
      { objective: "O5", q: "Que lugar costuma ter restrições a drones à sua volta?", options: ["Um campo de milho longe das vilas", "A margem de um rio", "Uma lavra de feijão", "Uma pista de aviação"], answer: 3, why: "As regras mantêm os drones longe de aeroportos e pistas de aviação." },
      { objective: "O5", q: "Antes de voar sobre a casa de um vizinho, deve:", options: ["Pedir-lhe primeiro", "Voar baixo para o surpreender", "Filmá-lo", "Voar à noite"], answer: 0, why: "Respeite o terreno e a privacidade das pessoas; peça primeiro." },
      { objective: "O6", q: "Que tempo quer dizer que não deve voar com um drone pequeno?", options: ["Calmo e limpo", "Vento forte e com rajadas, ou trovoada", "Nuvens finas sem vento", "Sol da manhã"], answer: 1, why: "O vento, as tempestades e a chuva podem fazê-lo perder o controlo." },
      { objective: "O6", q: "O aviso da bateria diz fraca durante um voo. Você deve:", options: ["Voar mais uma linha", "Subir mais", "Aterrar", "Desligar o comando"], answer: 2, why: "Bateria fraca quer dizer trazer o drone para baixo com segurança, já." },
      { objective: "O6", q: "Depois de cada voo deve:", options: ["Apagar todas as fotos", "Vender o drone", "Esquecer o assunto", "Escrever o voo num livro de registo"], answer: 3, why: "Um livro de registo guarda cada voo e qualquer problema." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 3, 5, 6, 9, 10, 12, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique-a outra vez.",
    criteria: [
      { name: "Problema da exploração", objective: "O1", notYet: "O problema é vago, ou é algo que um drone não consegue fazer.", meets: "Diz um problema claro da exploração em que um drone pode ajudar, e o que ainda vai ser verificado a pé.", exceeds: "Diz que decisão as imagens vão mudar." },
      { name: "Drone e câmara", objective: "O2", notYet: "Não há tipo de drone nem câmara, ou não há razão.", meets: "Um tipo de drone e uma câmara que servem para o trabalho e para o tamanho da exploração, com uma razão.", exceeds: "Compara-o com um drone, imagens de satélite ou andar a pé e explica o custo." },
      { name: "Autoridade e documentos", objective: "O4", notYet: "Falta a autoridade ou os documentos.", meets: "Diz qual é a autoridade de aviação do país e os documentos a verificar ou obter, tirados do site dela.", exceeds: "Inclui o link e a data em que as regras foram verificadas." },
      { name: "Perigos do local", objective: "O5", notYet: "Não há perigos na lista.", meets: "Faz a lista dos perigos e das zonas proibidas encontrados, e de quem vai ser avisado do voo.", exceeds: "Inclui um mapa simples desenhado com o lugar de descolagem." },
      { name: "Lista de verificação de segurança", objective: "O6", notYet: "Menos de oito pontos, ou sem passos de emergência.", meets: "Pelo menos oito pontos antes do voo sobre o tempo, o drone, a equipa e o local, com passos de emergência.", exceeds: "Diz as funções de piloto e de observador e como os incidentes são comunicados." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha do plano de uso de drone",
      "Alunos que procuram as regras de drones da sua autoridade de aviação em 30 dias (inquérito de seguimento)",
      "Alunos que continuam para o Curso 2 da série de drones",
      "Programas parceiros que dizem que os utilizadores de drones se registam e obtêm licenças antes de voar"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com internet para abrir a página de drones da autoridade de aviação",
      "Um caderno e uma caneta para o plano de uso de drone e a lista de verificação",
      "Uma exploração real ou de exemplo para percorrer na verificação do local",
      "Cerca de 60 minutos no total, em sessões curtas, mais o tempo para escrever o plano"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois abram ao vivo com o grupo a página de drones da autoridade.",
      "Não voe com um drone como parte deste curso, a não ser que o piloto, o drone e o voo tenham todas as autorizações que o país exige.",
      "Percorram juntos uma exploração real para praticar a identificação de perigos, e lembre aos alunos que não devem filmar pessoas nem casas.",
      "Verifique no site da autoridade se as regras mudaram antes de cada edição do curso.",
      "Avalie o plano de uso de drone com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
