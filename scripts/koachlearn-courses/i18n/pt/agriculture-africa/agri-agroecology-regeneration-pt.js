"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-agroecology-regeneration.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_AE = { name: "FAO: Plataforma de conhecimentos sobre agroecologia", url: "https://www.fao.org/agroecology/en/" };
const FAO_10 = { name: "FAO: Os 10 elementos da agroecologia (adotados pelos membros da FAO em 2019)", url: "https://www.fao.org/agroecology/overview/the-10-elements-of-agroecology/en" };
const FMNR_STEPS = { name: "Tearfund Footsteps 110: Regeneração natural gerida pelos agricultores (FMNR), passos para o sucesso (com a World Vision)", url: "https://learn.tearfund.org/-/media/learn/resources/footsteps/pdfs/footsteps-101-110/2020-tearfund-footsteps-110-farming-for-the-future-en-centre-page-en.pdf" };
const FMNR_ICRAF = { name: "World Agroforestry (ICRAF) Uganda: guia prático da FMNR", url: "https://fmnrhub.com.au/wp-content/uploads/2024/05/FMNR_Uganda-near-final-v3-2018.pdf" };
const FAO_AGROFOR = { name: "FAO: Agrofloresta", url: "https://www.fao.org/agroforestry/en/" };
const GLIRICIDIA = { name: "Sileshi et al.: Pode a integração de árvores leguminosas aumentar a estabilidade da produção do milho de sequeiro na África Austral? (ensaios no Malawi e na Zâmbia)", url: "https://repository.up.ac.za/handle/2263/20631" };
const TITHONIA = { name: "Tithonia diversifolia: variações na concentração de nutrientes das folhas e consequências para a transferência de biomassa (oeste do Quénia)", url: "https://centaur.reading.ac.uk/119281" };
const FAO_SOM = { name: "FAO: A importância da matéria orgânica do solo", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const HANDBOOK_4R = { name: "Gestão 4R dos nutrientes das plantas na agricultura africana: manual de extensão", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-agroecology-regeneration-pt",
  lang: "pt",
  translationOf: "agri-agroecology-regeneration",
  category: "Agriculture (Africa)",
  name: "Agroecologia e Regeneração do Solo",
  skills: "Aplicar os princípios da agroecologia, Recuperar a terra com culturas de cobertura e adubo verde, Fazer voltar as árvores com a FMNR, Ligar culturas e animais, Reduzir a conta do adubo, Medir a melhoria do solo ao longo das épocas",
  outcome: "escrever e começar um plano de três épocas para devolver a vida a um campo degradado com a agroecologia: culturas de cobertura ou adubos verdes, árvores, ligações entre culturas e animais e nutrientes da própria machamba, com menos gasto em adubo comprado e medidas simples para ver o solo melhorar.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, jovens agroempreendedores, trabalhadores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, no Níger, no Senegal e em toda a África cuja terra está cansada: a produção a baixar, o solo duro ou levado pela água, a estriga a espalhar-se e o adubo cada ano mais caro.",
    "O Capítulo 1 apresenta os princípios da agroecologia e como fazer voltar a terra degradada: culturas de cobertura e adubos verdes, árvores fertilizantes e a regeneração natural gerida pelos agricultores (FMNR), que ajudou os agricultores do Níger a fazer voltar as árvores em milhões de hectares. O Capítulo 2 liga as culturas e os animais, põe a biodiversidade a trabalhar para você, reduz o custo do adubo importado e mostra como medir a melhoria de época para época.",
    "O curso \"Saúde e Fertilidade do Solo\" trata da análise do solo, do composto, da rotação e da cobertura morta; este curso parte daí e não o repete. A regeneração leva várias épocas, por isso comece num só campo e compare. Os valores em dinheiro são exemplos inventados. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria terra."
  ],
  finalTask: "Escreva um plano de regeneração de três épocas para um campo degradado da sua machamba (ou um exemplo: 1 acre de terra de milho cansada em Kakamega, 2 hectares de sorgo e amendoim em Zinder, no Níger, ou 1 hectare de mandioca no Estado de Oyo): como está o campo agora; que culturas de cobertura, adubos verdes ou árvores vai usar e quando; como as culturas e os animais se vão alimentar uns aos outros; quantos sacos de adubo comprado quer substituir e o dinheiro poupado; e as quatro ou mais medidas que vai registar em cada época, com um desenho do campo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, trabalhadores agrícolas, jovens agroempreendedores e extensionistas em toda a África (Quénia, Nigéria, Gana e a África Ocidental francófona, incluindo o Sahel), que cultivam milho, mandioca, sorgo, milheto, feijão, amendoim, arroz, cacau e café, muitas vezes com cabritos, gado bovino, porcos ou aves.",
    startingPoint: "Conhecem o básico do composto, do estrume, da rotação e da cobertura morta, e veem que o seu solo está degradado. Poucos usam de propósito culturas de cobertura, adubos verdes, árvores fertilizantes ou a FMNR, ligam culturas e animais como um sistema, ou medem a mudança do solo ao longo do tempo.",
    gap: "Os solos degradados e o preço do adubo a subir apertam a produção e os rendimentos. Os alunos precisam de formas práticas e baratas de reconstruir o solo e comprar menos insumos, e de uma forma de ver se está a funcionar, para continuarem durante as primeiras épocas, que são lentas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o curso também existe em espanhol, francês e árabe",
      "Terra e mão de obra: parcelas pequenas, trabalho da família, os restos das culturas também servem para outras coisas (comida dos animais, lenha)",
      "Tempo: a regeneração leva várias épocas; as lições duram de 4 a 6 minutos",
      "Dinheiro: os valores são exemplos; nenhum preço ou subsídio é dado como facto",
      "Direitos sobre a terra: as regras sobre árvores e pastagem mudam de comunidade para comunidade e de país para país; os alunos verificam as regras e posturas locais"
    ],
    prerequisites: "Recomenda-se fazer primeiro o curso \"Saúde e Fertilidade do Solo\" (análise do solo, composto, rotação, cobertura morta)."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de práticas da sua machamba", action: "ligar cada prática ao princípio da agroecologia que ela usa, como a reciclagem, a diversidade ou as sinergias", standard: "ligando corretamente pelo menos cinco práticas" },
    { id: "O2", condition: "Para um campo degradado", action: "escolher uma cultura de cobertura ou um adubo verde e planear quando a semear e quando a cortar", standard: "com uma espécie adequada à sua chuva e uma data de sementeira e de corte" },
    { id: "O3", condition: "Numa parcela com cepos de árvores vivos ou espaço para árvores", action: "planear passo a passo a regeneração natural gerida pelos agricultores ou as árvores fertilizantes", standard: "dizendo que cepos ou árvores, quantos caules, a poda e a proteção contra os animais e o fogo" },
    { id: "O4", condition: "Com as culturas e os animais da sua machamba", action: "desenhar os caminhos da ração, do estrume e dos restos das culturas entre as suas culturas e os seus animais", standard: "mostrando pelo menos três ligações e um lugar onde os nutrientes saem da machamba" },
    { id: "O5", condition: "Com o adubo usado na época passada", action: "estimar quantos sacos de adubo comprado os nutrientes da machamba podem substituir e o dinheiro poupado", standard: "na moeda local, marcado como uma estimativa a confirmar com a extensão" },
    { id: "O6", condition: "No campo que está a recuperar", action: "registar medidas simples do solo e da machamba na mesma altura de cada época", standard: "usando pelo menos quatro medidas, escritas e comparadas com a época anterior" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Princípios e fazer voltar a terra",
      lessons: [
        {
          title: "Agroecologia: princípios que pode usar na sua machamba",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ligar as práticas da sua machamba aos princípios da agroecologia.",
          text: [
            "Agroecologia quer dizer cultivar seguindo a forma como a natureza funciona: usar as plantas, os animais, a vida do solo, as árvores e o conhecimento das pessoas para que a machamba se alimente mais a si própria e compre menos de fora. A FAO (a Organização das Nações Unidas para a Alimentação e a Agricultura) descreve 10 elementos da agroecologia, adotados pelos seus países membros em 2019.",
            "Cinco são sobre como a machamba funciona: reciclagem (os nutrientes e os restos voltam para a machamba), eficiência (tirar mais da mesma água, terra e insumos), diversidade (muitas culturas, animais e árvores), sinergias (partes que se ajudam, como as leguminosas que alimentam o milho) e resiliência (aguentar os choques). Cinco são sobre as pessoas: criação conjunta de conhecimento (agricultores e investigadores a aprender juntos), valores humanos e sociais, cultura e tradições alimentares, governação responsável, e economia circular e solidária (vender e comprar localmente e de forma justa).",
            "Provavelmente já usa alguns. Dar a palha do milho aos cabritos e pôr o estrume deles de volta no campo é reciclagem e sinergia. Consociar a mandioca com o amendoim é diversidade. Uma escola na machamba (escola de campo de agricultores) é criação conjunta de conhecimento. A agroecologia pede que os use de propósito e que acrescente mais, passo a passo."
          ],
          words: [["Agroecologia", "agricultura que usa os processos da natureza e o conhecimento local, para a machamba precisar de menos insumos comprados e aguentar melhor os choques."], ["Sinergia", "quando duas partes da machamba se ajudam, e juntas dão mais do que separadas."], ["Reciclagem (numa machamba)", "devolver ao solo os restos das culturas, o estrume e os resíduos, em vez de os perder."]],
          slides: [
            { title: "A agroecologia é...", bullets: ["Cultivar com os processos da natureza", "A machamba alimenta-se mais a si própria e compra menos", "FAO: 10 elementos, adotados em 2019"] },
            { title: "Como a machamba funciona", bullets: ["Reciclagem e eficiência", "Diversidade e sinergias", "Resiliência"] },
            { title: "Pessoas e justiça", bullets: ["Criar conhecimento juntos", "Valores sociais, cultura alimentar", "Boa governação; economia circular e justa"] },
            { title: "Talvez já o faça", bullets: ["Palha do milho para os cabritos, estrume de volta ao campo", "Consociação de mandioca e amendoim", "Escolas na machamba"] }
          ],
          sources: [FAO_10, FAO_AE],
          tryIt: "Faça a lista de seis práticas da sua machamba ou da sua aldeia. Ao lado de cada uma, escreva o princípio da agroecologia que ela usa (reciclagem, eficiência, diversidade, sinergias, resiliência ou um dos elementos sobre as pessoas). Faça um círculo à volta de um princípio que quase não usa.",
          youCanNow: "ligar as práticas agrícolas aos princípios da agroecologia e ver quais poderia usar mais.",
          quickCheck: [
            { objective: "O1", q: "Uma agricultora dá a palha do feijão aos seus cabritos e espalha o estrume dos cabritos no milho. Que princípios está a usar?", options: ["Reciclagem e sinergia", "Só governação", "Eficiência do trator", "Nenhum"], answer: 0, why: "Os restos alimentam os animais e o estrume alimenta o solo: os nutrientes são reciclados e as partes ajudam-se." },
            { objective: "O1", q: "Qual é um exemplo de diversidade numa machamba?", options: ["Só milho, todas as épocas, em todos os campos", "Queimar todos os restos", "Mandioca, amendoim, árvores e cabritos na mesma machamba", "Comprar toda a ração na cidade"], answer: 2, why: "Muitas culturas, animais e árvores juntos é diversidade, um dos 10 elementos da FAO." }
          ]
        },
        {
          title: "Fazer voltar a terra degradada: culturas de cobertura e adubo verde",
          objectives: ["O2"],
          minutes: 6,
          goal: "Escolher uma cultura de cobertura ou um adubo verde para um campo degradado e planear quando semear e cortar.",
          text: [
            "A terra degradada perdeu matéria orgânica e estrutura: a chuva escorre, as culturas ficam raquíticas e ervas como a estriga tomam conta. A cobertura morta e o composto ajudam, mas raramente há que chegue. As culturas de cobertura e os adubos verdes fazem crescer a matéria orgânica no próprio campo.",
            "Uma cultura de cobertura é semeada sobretudo para cobrir e proteger o solo, muitas vezes entre épocas. Um adubo verde é semeado e depois cortado e deixado sobre o solo ou enterrado, para o alimentar. As leguminosas fazem as duas coisas e ainda acrescentam azoto: o lablab, a mucuna (feijão-veludo), a canavália (feijão-de-porco), a crotalária, o feijão-nhemba e o feijão-bóer usam-se em diferentes partes de África. Algumas, como o lablab e o feijão-nhemba, também dão comida ou forragem; a semente da mucuna precisa de um tratamento especial antes de as pessoas a comerem, por isso trate-a como uma cultura para o solo e para os animais e pergunte à extensão.",
            "Os arbustos de folhas também podem servir de adubo verde de folhas. No oeste do Quénia, os agricultores cortam folhas de titónia (girassol-mexicano) das sebes e espalham-nas nos campos; a investigação mostrou que as folhas são ricas em nutrientes, mas cortar e carregar dá muito trabalho, por isso compensa mais nas hortícolas e noutras culturas de alto valor.",
            "O momento certo conta. Semeie a cultura de cobertura cedo o suficiente para crescer bem antes da época seca, ou semeie-a dentro da cultura principal algumas semanas depois da sementeira (cultura em substituição). Corte-a antes de competir com a cultura seguinte ou de dar semente dura, e deixe o material cortado à superfície como cobertura morta. Pergunte ao seu extensionista ou ao instituto de investigação que espécies e datas servem para a sua chuva."
          ],
          steps: ["Percorra o campo: onde está nu, duro ou cheio de estriga?", "Escolha uma ou duas espécies de cultura de cobertura ou adubo verde adequadas à sua chuva.", "Decida: semear entre épocas, dentro da cultura principal, ou como pousio.", "Escreva a data de sementeira e a data de corte.", "Corte antes de competir com a sua cultura; deixe-a à superfície.", "Mantenha os animais fora até ela fazer o seu trabalho, ou planeie uma parte para forragem."],
          words: [["Terra degradada", "terra que perdeu solo, matéria orgânica ou cobertura de plantas, e por isso produz muito menos."], ["Cultura de cobertura", "uma cultura semeada sobretudo para cobrir e proteger o solo."], ["Adubo verde", "uma cultura semeada e depois cortada e deixada sobre o solo ou enterrada, para o alimentar."], ["Cultura em substituição (relay)", "semear uma segunda cultura dentro de uma cultura que ainda está no campo, antes de a primeira ser colhida."]],
          slides: [
            { title: "Fazer crescer matéria orgânica no campo", bullets: ["Terra degradada: a água escorre, plantas raquíticas, estriga", "Não há composto nem cobertura morta que cheguem", "Culturas de cobertura e adubos verdes fazem-na crescer no lugar"] },
            { title: "Escolher leguminosas", bullets: ["Lablab, feijão-nhemba, feijão-bóer: também comida ou forragem", "Mucuna, canavália, crotalária: para o solo e os animais", "Acrescentam azoto tirado do ar"] },
            { title: "Adubo verde de folhas", bullets: ["Folhas de titónia no oeste do Quénia", "Ricas em nutrientes; cortar dá muito trabalho", "Melhor nas culturas de alto valor"] },
            { title: "Acertar no momento", bullets: ["Semeie cedo ou dentro da cultura principal", "Corte antes de competir ou de dar semente dura", "Pergunte à extensão o que serve para a sua chuva"] }
          ],
          sources: [TITHONIA, FAO_SOM],
          tryIt: "Escolha o seu campo mais degradado. Escolha para ele uma cultura de cobertura ou um adubo verde e escreva: porque a escolheu, a data de sementeira, como a vai semear (entre épocas, dentro da cultura principal ou em pousio) e a data de corte. Anote uma pergunta para fazer ao seu extensionista.",
          youCanNow: "escolher uma cultura de cobertura ou um adubo verde para um campo degradado e planear quando semear e cortar.",
          quickCheck: [
            { objective: "O2", q: "Qual é a principal diferença entre uma cultura de cobertura e um adubo verde?", options: ["As culturas de cobertura são sempre árvores", "Os adubos verdes compram-se em sacos", "Não há diferença", "Um adubo verde é semeado para ser cortado e deixado a alimentar o solo"], answer: 3, why: "As culturas de cobertura protegem o solo; os adubos verdes são semeados sobretudo para serem cortados e o alimentarem (muitas culturas fazem as duas coisas)." },
            { objective: "O2", q: "Quando deve cortar uma cultura de cobertura semeada antes do milho?", options: ["Antes de competir com o milho ou de dar semente dura", "Nunca", "Depois de o milho ser colhido", "Só se der flores roxas"], answer: 0, why: "Cortar na altura certa evita a competição e deixa cobertura morta para a cultura seguinte." }
          ]
        },
        {
          title: "Árvores que voltam: FMNR e árvores fertilizantes",
          objectives: ["O3"],
          minutes: 6,
          goal: "Planear a regeneração natural gerida pelos agricultores ou árvores fertilizantes para uma parcela.",
          text: [
            "Muitos campos que parecem sem árvores ainda têm cepos e raízes vivos debaixo do solo. A regeneração natural gerida pelos agricultores (em inglês FMNR) deixa-os crescer de novo, em vez de os cortar todas as épocas. No Níger, a FMNR passou de agricultor para agricultor e fez voltar as árvores a mais de cinco milhões de hectares de terra agrícola, dando forragem, lenha, sombra e melhores colheitas.",
            "Os passos, dos guias da World Vision e dos seus parceiros: veja no campo os cepos que estão a rebentar e escolha as espécies úteis; em cada cepo, guarde três a cinco dos caules mais altos e direitos e corte os outros; pode os ramos laterais até mais ou menos metade da altura de cada caule, com uma ferramenta afiada, a cortar para cima; volte a cada poucos meses para tirar os rebentos novos; proteja os caules dos animais e do fogo; quando colher um caule, deixe um mais novo ocupar o seu lugar. Marque os caules escolhidos e combine regras com os vizinhos e a comunidade para que os animais e quem corta lenha os deixem em paz.",
            "Onde não há cepos, pode plantar árvores fertilizantes: árvores leguminosas como a gliricídia, a faidérbia (comum nos parques agroflorestais do Sahel, incluindo a bacia do amendoim do Senegal) ou a caliandra, cujas folhas alimentam o solo ou os animais. Ensaios longos no Malawi e na Zâmbia mostraram que o milho cultivado com gliricídia deu produções mais estáveis ao longo dos anos do que o milho só com adubo, mas podar as árvores duas ou três vezes por ano dá trabalho a sério.",
            "Antes de cortar ou vender árvores, verifique as regras florestais do seu país e as posturas da sua comunidade."
          ],
          steps: ["Percorra a parcela e marque os cepos vivos e as árvores novas.", "Escolha espécies úteis: forragem, lenha, fruta, solo.", "Guarde 3 a 5 caules direitos por cepo; corte os outros.", "Pode os ramos laterais até metade da altura; ferramenta afiada, cortar para cima.", "Proteja dos animais e do fogo; combine regras com os vizinhos.", "Não há cepos? Planeie árvores fertilizantes com conselho da extensão."],
          words: [["FMNR", "regeneração natural gerida pelos agricultores: deixar os cepos e as raízes de árvores da sua terra crescerem de novo, e depois escolher e podar os melhores caules."], ["Árvore fertilizante", "uma árvore, geralmente leguminosa, cujas folhas alimentam o solo."], ["Parque agroflorestal", "terra agrícola com árvores espalhadas pelos campos."], ["Postura", "uma regra combinada por uma comunidade ou um conselho local."]],
          slides: [
            { title: "Uma floresta debaixo da terra", bullets: ["Cepos e raízes vivos em campos nus", "A FMNR deixa-os crescer de novo", "Níger: árvores de volta em mais de 5 milhões de hectares"] },
            { title: "Passos da FMNR", bullets: ["Escolha os cepos e as espécies úteis", "Guarde 3 a 5 caules direitos", "Pode até metade da altura; ferramenta afiada, cortar para cima"] },
            { title: "Proteger e cuidar", bullets: ["Tire os rebentos novos a cada poucos meses", "Mantenha os animais e o fogo longe", "Combine regras com a comunidade"] },
            { title: "Não há cepos? Árvores fertilizantes", bullets: ["Gliricídia, faidérbia, caliandra", "Milho mais estável nos ensaios do Malawi e da Zâmbia", "A poda dá trabalho; verifique as regras florestais"] }
          ],
          sources: [FMNR_STEPS, FMNR_ICRAF, GLIRICIDIA, FAO_AGROFOR],
          tryIt: "Percorra uma parcela e conte os cepos vivos ou as árvores novas. Faça um desenho rápido a marcar os que guardaria. Escreva que espécies são (ou pergunte a alguém), o que quer deles e como os vai proteger dos animais e do fogo.",
          youCanNow: "planear passo a passo a regeneração natural gerida pelos agricultores ou as árvores fertilizantes para uma parcela.",
          quickCheck: [
            { objective: "O3", q: "Na FMNR, o que faz com os muitos rebentos de um cepo vivo?", options: ["Corta-os todos em cada época", "Queima o cepo", "Guarda três a cinco dos caules mais altos e direitos e corta os outros", "Deixa crescer todos os rebentos"], answer: 2, why: "Guardar poucos caules bons deixa-os crescer depressa e tornarem-se árvores úteis." },
            { objective: "O3", q: "Porque deve um agricultor combinar as regras da FMNR com os vizinhos?", options: ["Para os animais e quem corta lenha deixarem em paz os caules escolhidos", "Para vender os cepos", "Porque as árvores crescem mais depressa depois de uma reunião", "Nunca é preciso"], answer: 0, why: "Um acordo da comunidade protege os caules do pastoreio e do corte enquanto crescem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Princípios e fazer voltar a terra",
        questions: [
          { objective: "O1", q: "Uma escola na machamba onde agricultores e investigadores testam práticas juntos é um exemplo de que elemento da agroecologia?", options: ["Criação conjunta de conhecimento", "Eficiência do adubo", "Monocultura", "Insumos importados"], answer: 0, why: "Agricultores e investigadores a aprender juntos é criação conjunta de conhecimento." },
          { objective: "O1", q: "Que prática mostra uma sinergia?", options: ["Vender todos os restos das culturas", "Leguminosas que acrescentam azoto que o milho seguinte usa", "Pousio com o solo nu", "Queimar o restolho"], answer: 1, why: "A leguminosa ajuda o milho: duas partes da machamba a trabalhar juntas." },
          { objective: "O2", q: "Um campo no Gana está nu e duro depois da colheita. O que poderia semear para o proteger e alimentar antes da época seguinte?", options: ["Nada; deixá-lo nu", "A mesma cultura outra vez com mais adubo", "Uma leguminosa de cobertura como o feijão-nhemba ou o lablab", "Só ervas daninhas"], answer: 2, why: "Uma leguminosa de cobertura protege o solo e acrescenta azoto e matéria orgânica." },
          { objective: "O2", q: "As folhas de titónia são ricas em nutrientes, mas cortá-las e carregá-las dá muito trabalho. Onde compensam mais?", options: ["Espalhadas em camada fina em grandes campos de milho", "Em culturas de alto valor, como as hortícolas", "Queimadas para fazer cinza", "Dadas só aos porcos"], answer: 1, why: "A investigação no oeste do Quénia mostrou que o trabalho compensa mais nas culturas de alto valor." },
          { objective: "O3", q: "Até que altura deve podar os ramos laterais dos caules novos da FMNR?", options: ["Não se poda", "Corta-se o caule todo rente ao chão", "Até ao topo", "Até mais ou menos metade da altura do caule"], answer: 3, why: "Podar alto demais torna os caules fracos contra o vento e os animais." }
        ]
      }
    },
    {
      name: "Capítulo 2: Uma machamba que se alimenta a si própria",
      lessons: [
        {
          title: "Culturas, animais e biodiversidade a trabalhar juntos",
          objectives: ["O4"],
          minutes: 5,
          goal: "Desenhar os caminhos da ração, do estrume e dos restos das culturas entre as suas culturas e os seus animais.",
          text: [
            "Numa machamba mista, as culturas e os animais podem alimentar-se uns aos outros. Os restos das culturas, as culturas de cobertura, as folhas das árvores e os subprodutos dos grãos alimentam os animais; os animais transformam-nos em leite, carne, ovos, força de tração e estrume; o estrume e a urina voltam para alimentar o solo. Quando essas ligações são fortes, sai menos dinheiro da machamba.",
            "Desenhe-o. Ponha num papel os seus campos, os animais, a casa e o monte de composto ou de estrume, e depois desenhe setas: palha do milho para os cabritos, estrume para a horta, cama das galinhas para o composto, água do tanque para as hortícolas numa piscicultura. Depois marque as fugas: restos queimados, estrume deixado ao sol e à chuva, urina perdida, produtos vendidos sem nada voltar. Cada fuga é um lugar onde pode ganhar.",
            "A biodiversidade também faz parte do sistema. As árvores, as sebes, as faixas de capim e as plantas com flores dão casa aos insetos e às aves que comem as pragas e às abelhas que polinizam o feijão, o tomate e o café. Culturas e variedades diferentes repartem o risco. Guarde alguns cantos selvagens, não pulverize quando não for preciso e cultive mais do que uma cultura.",
            "Cuide do equilíbrio: os animais precisam de comida durante a época seca, e os restos usados como ração não ficam no solo como cobertura morta. Decida que parte vai para onde, e cultive forragem extra (faixas de capim, árvores forrageiras, lablab) para não ter de escolher."
          ],
          steps: ["Desenhe os seus campos, os animais, a casa e o monte de estrume.", "Desenhe setas para cada caminho: ração, restos, estrume, água.", "Marque as fugas: queimadas, estrume e urina perdidos, nada devolvido.", "Marque lugares para a biodiversidade: sebes, árvores, flores, cantos selvagens.", "Escolha uma fuga para fechar nesta época."],
          words: [["Agricultura mista", "cultivar e criar animais na mesma machamba para que se apoiem uns aos outros."], ["Caminho dos nutrientes", "como os nutrientes se movem pela machamba, por exemplo da ração para o estrume e do estrume para o solo."], ["Biodiversidade", "a variedade de plantas, animais, insetos e vida do solo dentro e à volta da machamba."], ["Inimigos naturais", "insetos, aves e outros animais que comem as pragas das culturas."]],
          slides: [
            { title: "As culturas alimentam os animais, os animais o solo", bullets: ["Restos, forragem e folhas de árvores para os animais", "Leite, carne, ovos, força e estrume de volta", "Ligações fortes = sai menos dinheiro"] },
            { title: "Desenhe os caminhos da sua machamba", bullets: ["Setas: ração, estrume, restos, água", "Marque as fugas: queimadas, estrume e urina perdidos", "Cada fuga é um ganho à espera"] },
            { title: "A biodiversidade trabalha para você", bullets: ["Sebes e flores dão casa a quem come pragas e às abelhas", "Várias culturas repartem o risco", "Pulverize só quando for preciso"] },
            { title: "Equilibrar ração e cobertura morta", bullets: ["Os restos não podem ser ração e cobertura ao mesmo tempo", "Cultive forragem extra: faixas de capim, lablab, árvores"] }
          ],
          sources: [FAO_10, FAO_AGROFOR],
          tryIt: "Desenhe o mapa dos caminhos da sua machamba com pelo menos três setas entre culturas e animais. Marque pelo menos uma fuga e um lugar onde podia acrescentar biodiversidade. Escreva a fuga que vai fechar nesta época.",
          youCanNow: "desenhar os caminhos da ração, do estrume e dos restos das culturas na sua machamba e encontrar as fugas a fechar.",
          quickCheck: [
            { objective: "O4", q: "Num mapa de caminhos, qual destas é uma fuga?", options: ["Palha do milho dada aos cabritos", "Estrume espalhado na horta", "Estrume deixado ao sol e à chuva até ser levado pela água", "Cama das galinhas posta no composto"], answer: 2, why: "O estrume exposto ao sol e à chuva perde nutrientes que deviam voltar ao solo." },
            { objective: "O4", q: "Porque guardar sebes, árvores e plantas com flores à volta dos campos?", options: ["Dão casa aos inimigos naturais das pragas e aos polinizadores", "Baixam sempre a produção", "São só para enfeitar", "Param a chuva"], answer: 0, why: "Dar casa a quem come pragas e às abelhas é um serviço gratuito para as suas culturas." }
          ]
        },
        {
          title: "Reduzir o custo do adubo importado",
          objectives: ["O5"],
          minutes: 5,
          goal: "Estimar quantos sacos de adubo comprado os nutrientes da machamba podem substituir e o dinheiro poupado.",
          text: [
            "A maior parte do adubo mineral usado em África é importado, por isso o seu preço segue os mercados mundiais e as taxas de câmbio. A agroecologia procura precisar de menos adubo, nem sempre de nenhum. Comece pelo que usou na época passada: quantos sacos, de que tipo, em que campo e quanto custaram.",
            "Depois faça a lista dos nutrientes da machamba que pode acrescentar: leguminosas de cobertura e em consociação (azoto), árvores fertilizantes e adubo verde de folhas, mais estrume e urina e mais bem guardados, o biofertilizante líquido (bio-slurry) se tiver um biodigestor, e os restos das culturas deixados no campo. Juntar uma quantidade menor de adubo mineral com estes nutrientes muitas vezes funciona melhor do que cada um sozinho. Nos ensaios do Malawi, o milho com gliricídia mais metade do adubo recomendado produziu mais ou menos o mesmo que o milho com a dose completa.",
            "Estime, e depois teste. Por exemplo (valores inventados): uma agricultora em Kakamega usou 4 sacos num acre, a KES 3.500 o saco. Com lablab semeado dentro da cultura e mais estrume, ela planeia experimentar 2 sacos em metade do campo e 4 na outra metade, e comparar as colheitas. Se as colheitas forem iguais, ela poupa 2 sacos, KES 7.000, nesse acre. Não corte o adubo de repente em toda a sua terra.",
            "Peça ao seu extensionista ou ao laboratório de solos para verificar o seu plano com os resultados da análise do seu solo, e compre adubo mineral só em revendedores de insumos registados, em sacos selados."
          ],
          steps: ["Escreva o adubo da época passada: sacos, tipo, campo, custo.", "Faça a lista dos nutrientes da machamba que pode acrescentar.", "Planeie uma dose menor em parte de um campo, com nutrientes da machamba.", "Guarde uma faixa com a dose completa para comparar.", "Estime os sacos e o dinheiro poupados se as colheitas se mantiverem.", "Verifique o plano com a extensão; aumente só o que funciona."],
          words: [["Adubo mineral", "adubo fabricado, como a ureia, o DAP ou o NPK, geralmente vendido em sacos."], ["Gestão integrada da fertilidade do solo", "juntar nutrientes orgânicos (estrume, leguminosas, restos das culturas) com uma quantidade menor de adubo mineral."], ["Faixa de comparação", "uma parte do campo cultivada da forma antiga, para poder comparar os resultados de forma justa."]],
          slides: [
            { title: "Porque reduzir o adubo importado", bullets: ["O preço segue os mercados mundiais e as taxas de câmbio", "Procure precisar de menos, nem sempre de nenhum", "Comece pelos sacos e custos da época passada"] },
            { title: "Nutrientes da machamba", bullets: ["Leguminosas de cobertura, consociações, árvores fertilizantes", "Estrume, urina, biofertilizante líquido, restos", "Junte-os com menos adubo mineral"] },
            { title: "Teste antes de cortar", bullets: ["Exemplo: 2 sacos contra 4 sacos em meios campos", "Mesma colheita = 2 sacos, KES 7.000 poupados (inventado)", "Nunca corte tudo de uma vez"] },
            { title: "Verificar e comprar com segurança", bullets: ["A extensão ou o laboratório de solos verifica o seu plano", "Revendedores registados, sacos selados"] }
          ],
          sources: [GLIRICIDIA, HANDBOOK_4R],
          tryIt: "Escreva o adubo usado na época passada num campo. Faça a lista de duas fontes de nutrientes da machamba que vai acrescentar. Planeie um teste em meio campo com uma dose menor e estime, na sua moeda, os sacos e o dinheiro que pouparia se as colheitas se mantiverem.",
          youCanNow: "estimar quanto adubo comprado os nutrientes da machamba podem substituir e planear um teste justo antes de cortar.",
          quickCheck: [
            { objective: "O5", q: "Quer usar menos adubo. Qual é o primeiro passo mais seguro?", options: ["Parar todo o adubo em todos os campos de uma vez", "Pôr o dobro do adubo", "Comprar adubo sem rótulo porque é mais barato", "Testar uma dose menor com nutrientes da machamba em parte de um campo, ao lado de uma faixa com a dose completa"], answer: 3, why: "Um teste lado a lado mostra se a dose menor funciona antes de arriscar a colheita toda." },
            { objective: "O5", q: "Um agricultor na Nigéria usou 6 sacos a NGN 40.000 cada e passou para 4 com a mesma colheita. Quanto poupou?", options: ["NGN 40.000", "NGN 80.000", "NGN 240.000", "Nada"], answer: 1, why: "2 sacos × NGN 40.000 = NGN 80.000 (valores de exemplo)." }
          ]
        },
        {
          title: "Medir a melhoria ao longo das épocas",
          objectives: ["O6", "O2", "O5"],
          minutes: 5,
          goal: "Registar medidas simples do solo e da machamba na mesma altura de cada época.",
          text: [
            "A regeneração é lenta. A colheita pode não subir logo na primeira época, por isso precisa de outros sinais para ver se o solo está a voltar. Meça nos mesmos lugares, no mesmo mês, em cada época, e escreva.",
            "Medidas simples: cobertura do solo (quanto do solo está coberto por plantas ou cobertura morta; estime a olho ou conte num quadrado); minhocas (cave um bloco do tamanho de uma pá e conte); infiltração (enterre no solo uma lata sem fundo nem tampa, deite água e veja quanto tempo leva a entrar); cheiro e grumos do solo (desfaz-se em grumos pequenos ou em torrões grandes e duros?); uma fotografia do solo tirada sempre do mesmo lugar; a colheita de uma parcela marcada; e os sacos de adubo e o dinheiro que gastou.",
            "A cada poucos anos, uma análise de solo em laboratório pode mostrar a matéria orgânica e os nutrientes (veja o curso \"Saúde e Fertilidade do Solo\" para tirar as amostras). Se puder, compare o campo que está a recuperar com um campo que não mudou.",
            "O telefone ajuda: tire fotografias do mesmo lugar, guarde os seus números numa aplicação de notas ou numa folha de cálculo, e peça a um assistente de IA para os pôr numa tabela ou num gráfico simples. Os números vêm do seu campo."
          ],
          steps: ["Marque três lugares no campo com paus ou pedras.", "Escolha pelo menos quatro medidas: cobertura, minhocas, infiltração, grumos, fotografia, colheita, custo.", "Registe-as no mesmo mês de cada época.", "Compare com a época passada e com um campo que não mudou.", "Reveja o seu plano: guarde o que funciona, mude o que não funciona."],
          words: [["Indicador", "um sinal simples que mede para ver se as coisas estão a melhorar ou a piorar."], ["Infiltração", "a rapidez com que a água entra no solo."], ["Cobertura do solo", "a parte da superfície do solo coberta por plantas ou cobertura morta."], ["Linha de base", "a sua primeira medição, com a qual as seguintes são comparadas."]],
          slides: [
            { title: "Uma mudança lenta precisa de ser medida", bullets: ["A colheita pode não subir na primeira época", "Mesmos lugares, mesmo mês, todas as épocas", "Escreva tudo"] },
            { title: "Medidas simples", bullets: ["Cobertura do solo e contagem de minhocas", "Infiltração: conte o tempo até a água entrar", "Grumos, fotografia, colheita, custo do adubo"] },
            { title: "Comparar", bullets: ["Com a época passada (a sua linha de base)", "Com um campo que não mudou", "Análise de laboratório a cada poucos anos"] },
            { title: "O seu telefone ajuda", bullets: ["Fotografias do mesmo lugar", "Números em notas ou numa folha de cálculo", "A IA pode arrumá-los numa tabela"] }
          ],
          sources: [FAO_SOM, FAO_AE],
          tryIt: "Tarefa final: escreva o seu plano de regeneração de três épocas para um campo, com um desenho. Depois faça hoje a sua linha de base: marque três lugares e registe pelo menos quatro medidas (por exemplo cobertura, número de minhocas, tempo de infiltração e uma fotografia).",
          youCanNow: "medir o seu solo e a sua machamba com indicadores simples em cada época e usá-los para avaliar o seu plano de regeneração.",
          quickCheck: [
            { objective: "O6", q: "Porque medir nos mesmos lugares e no mesmo mês em cada época?", options: ["Fica bonito", "Para a comparação ser justa e mostrar a mudança real", "Porque as minhocas só aparecem num mês", "Para gastar mais papel"], answer: 1, why: "O mesmo lugar e a mesma altura tiram as outras causas, por isso as mudanças mostram o solo." },
            { objective: "O6", q: "A água na sua lata de infiltração entra mais depressa do que no ano passado. O que isso indica?", options: ["O solo está a piorar", "A lata está estragada", "Nada", "A estrutura do solo está a melhorar e a guardar mais chuva"], answer: 3, why: "Uma infiltração mais rápida quer dizer que mais chuva entra no solo em vez de escorrer." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Uma machamba que se alimenta a si própria",
        questions: [
          { objective: "O4", q: "Que seta pertence a um mapa de caminhos entre culturas e animais?", options: ["Palha do milho para os cabritos, e estrume dos cabritos para o campo de milho", "Adubo da cidade para a loja", "Chuva do céu para o rio", "Saldo do telefone para o agricultor"], answer: 0, why: "A ração para os animais e o estrume de volta para os campos são os caminhos dos nutrientes da própria machamba." },
          { objective: "O4", q: "Os restos das culturas são precisos como ração na época seca e também como cobertura morta. O que ajuda mais?", options: ["Queimar metade", "Cultivar forragem extra, como faixas de capim, lablab ou árvores forrageiras", "Vender os animais", "Deixar o campo nu"], answer: 1, why: "A forragem extra reduz a competição entre alimentar os animais e cobrir o solo." },
          { objective: "O5", q: "O que mostraram os ensaios longos no Malawi para o milho com gliricídia mais metade do adubo?", options: ["Falhou sempre", "Precisou do dobro do adubo", "As colheitas foram mais ou menos tão boas como as do milho com a dose completa", "As árvores mataram o milho"], answer: 2, why: "A gliricídia com metade da dose de adubo deu colheitas comparáveis às do adubo completo em Makoka." },
          { objective: "O5", q: "Onde deve comprar o adubo mineral que ainda usa?", options: ["Em qualquer vendedor de beira da estrada com sacos abertos", "Num anúncio na internet sem morada", "Nos sacos que sobraram a um vizinho", "Num revendedor de insumos registado, em sacos selados"], answer: 3, why: "Revendedores registados e sacos selados reduzem o risco de adubo falso ou misturado." },
          { objective: "O6", q: "O que é uma linha de base?", options: ["O fundo do campo", "Um tipo de adubo", "A primeira medição, com a qual as seguintes são comparadas", "A última colheita que alguma vez faz"], answer: 2, why: "Sem uma linha de base não consegue saber se as coisas melhoraram." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Agroecologia e Regeneração do Solo",
    questions: [
      { objective: "O1", q: "Que organismo descreve os 10 elementos da agroecologia?", options: ["A FIFA", "A FAO", "Uma empresa de sementes", "Só o Banco Mundial"], answer: 1, why: "Os 10 elementos da agroecologia da FAO foram adotados pelos seus países membros em 2019." },
      { objective: "O1", q: "Devolver ao solo os restos das culturas e o estrume usa que princípio?", options: ["Monocultura", "Governação", "Importações", "Reciclagem"], answer: 3, why: "Devolver os restos e o estrume recicla os nutrientes." },
      { objective: "O1", q: "Vender hortícolas a uma escola local e comprar semente a uma cooperativa local é um exemplo de:", options: ["Eficiência dos tratores", "Sinergia das pragas", "Economia circular e solidária", "Erosão do solo"], answer: 2, why: "Comprar e vender localmente e de forma justa é o elemento da economia circular e solidária." },
      { objective: "O2", q: "Que cultura é uma leguminosa muitas vezes usada como cultura de cobertura ou adubo verde?", options: ["Milho", "Sorgo", "Arroz", "Lablab"], answer: 3, why: "O lablab é uma leguminosa que cobre o solo, acrescenta azoto e dá forragem." },
      { objective: "O2", q: "O que é uma cultura em substituição (relay)?", options: ["Semear uma segunda cultura dentro de uma cultura que ainda está no campo, antes de a primeira ser colhida", "Queimar os restos em linhas", "Semear só uma vez de dois em dois anos", "Levar as culturas de camião"], answer: 0, why: "A cultura em substituição deixa uma cultura de cobertura começar a crescer antes de a cultura principal ser colhida." },
      { objective: "O2", q: "Porque cortar um adubo verde antes de dar semente dura?", options: ["A semente é venenosa para o solo", "Evita que se torne uma erva daninha e compita com a cultura seguinte", "A semente dura faz chover", "É obrigatório por lei"], answer: 1, why: "Cortar a tempo evita a competição e as plantas que nascem sem ser desejadas." },
      { objective: "O2", q: "O que é terra degradada?", options: ["Terra com árvores demais", "Terra debaixo de água", "Terra que perdeu solo, matéria orgânica ou cobertura e produz muito menos", "Terra com título de propriedade"], answer: 2, why: "A terra degradada perdeu aquilo que a torna produtiva." },
      { objective: "O3", q: "O que usa a FMNR para fazer voltar as árvores?", options: ["Só mudas compradas", "Os cepos, as raízes e as sementes vivos que já estão no solo", "Árvores de plástico", "Injeções de adubo"], answer: 1, why: "A FMNR protege e poda o que já está a crescer de novo a partir do solo." },
      { objective: "O3", q: "Mais ou menos quanta terra agrícola no Níger tem árvores de volta graças à FMNR?", options: ["Cerca de 10 hectares", "Cerca de 500 hectares", "Nenhuma", "Mais de cinco milhões de hectares"], answer: 3, why: "A FMNR passou de agricultor para agricultor até mais de cinco milhões de hectares no Níger." },
      { objective: "O3", q: "Ao podar os caules da FMNR, você deve:", options: ["Usar uma ferramenta afiada e cortar para cima", "Usar uma ferramenta sem fio e cortar para baixo", "Tirar a casca", "Podar até ao topo"], answer: 0, why: "Cortes afiados e para cima saram mais depressa e fazem menos estrago." },
      { objective: "O3", q: "Que árvore fertilizante é comum nos parques agroflorestais do Sahel, como a bacia do amendoim do Senegal?", options: ["Eucalipto", "Faidérbia", "Mangueira", "Pinheiro"], answer: 1, why: "A faidérbia é uma árvore leguminosa muito guardada nos parques agroflorestais do Sahel." },
      { objective: "O4", q: "Qual é uma fuga no mapa de caminhos dos nutrientes de uma machamba?", options: ["Estrume espalhado no campo", "Restos dados aos cabritos", "Queimar os restos das culturas", "Cama das galinhas no composto"], answer: 2, why: "A queimada manda os nutrientes e a matéria orgânica embora no fumo." },
      { objective: "O4", q: "Como é que as sebes e as plantas com flores ajudam as culturas?", options: ["Dão casa a quem come pragas e aos polinizadores", "Atraem sempre mais pragas", "Tornam o solo ácido", "Impedem a chuva de chegar às culturas"], answer: 0, why: "Dar casa aos inimigos naturais e às abelhas é um serviço gratuito para as culturas." },
      { objective: "O4", q: "Numa machamba de tilápia e hortícolas, qual é uma ligação útil?", options: ["Deitar os restos dos peixes no rio", "Usar a água do tanque para regar as hortícolas", "Esvaziar o tanque para a estrada", "Queimar as hortícolas"], answer: 1, why: "A água do tanque, rica em nutrientes, alimenta as hortícolas: uma ligação entre culturas e animais." },
      { objective: "O5", q: "Porque é que o preço do adubo mineral muda tanto em muitos países africanos?", options: ["É cultivado nas machambas", "Depende da chuva", "Nunca muda", "A maior parte é importada, por isso segue os preços mundiais e as taxas de câmbio"], answer: 3, why: "Os insumos importados seguem os mercados mundiais e as mudanças da moeda." },
      { objective: "O5", q: "Uma agricultora do Gana usou 5 sacos a GHS 400 cada e passou para 3 com a mesma colheita. Quanto poupou?", options: ["GHS 800", "GHS 400", "GHS 2.000", "GHS 1.200"], answer: 0, why: "2 sacos × GHS 400 = GHS 800 (valores de exemplo)." },
      { objective: "O5", q: "O que é a gestão integrada da fertilidade do solo?", options: ["Usar só adubo mineral", "Não usar nenhum nutriente", "Juntar nutrientes orgânicos com uma quantidade menor de adubo mineral", "Analisar o solo todas as semanas"], answer: 2, why: "Junta fontes orgânicas e minerais para que cada uma funcione melhor." },
      { objective: "O6", q: "Qual é uma medida simples da melhoria do solo?", options: ["A cor do seu telefone", "A rapidez com que a água entra no solo", "O preço do milho na cidade", "O número de visitas"], answer: 1, why: "Uma infiltração mais rápida mostra uma melhor estrutura do solo." },
      { objective: "O6", q: "Porque comparar o campo que recuperou com um campo que não mudou?", options: ["Para ver se a mudança veio das suas práticas e não só do tempo", "Para usar mais semente", "Porque os vizinhos pedem", "Não faz diferença"], answer: 0, why: "Um campo de comparação mostra o que teria acontecido de qualquer maneira." },
      { objective: "O6", q: "Quantas medidas deve registar em cada época no campo que recupera?", options: ["Nenhuma", "Uma, só a colheita", "Só a chuva", "Pelo menos quatro, como cobertura, minhocas, infiltração e colheita"], answer: 3, why: "Várias medidas mostram a mudança antes mesmo de a colheita subir." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 6, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e tente outra vez.",
    criteria: [
      { name: "Princípios nomeados", objective: "O1", notYet: "O plano não diz que princípios da agroecologia usa.", meets: "Cada prática do plano está ligada a um princípio da agroecologia.", exceeds: "Usa pelo menos quatro princípios diferentes, incluindo um dos elementos sobre as pessoas." },
      { name: "Cultura de cobertura ou adubo verde", objective: "O2", notYet: "Nenhuma cultura de cobertura ou adubo verde, ou sem datas.", meets: "Uma espécie adequada à chuva, com datas de sementeira e de corte.", exceeds: "Explica também como se encaixa com a comida dos animais e a cultura principal, e foi verificada com a extensão." },
      { name: "Árvores", objective: "O3", notYet: "Nenhum plano de árvores, ou árvores sem proteção.", meets: "FMNR ou árvores fertilizantes com caules ou espécies, poda e proteção contra os animais e o fogo.", exceeds: "Inclui um acordo da comunidade ou uma postura, e como os caules vão ser colhidos e substituídos." },
      { name: "Ligações entre culturas e animais", objective: "O4", notYet: "Nenhum mapa de caminhos, ou só uma ligação.", meets: "Um mapa de caminhos com pelo menos três ligações e uma fuga a fechar.", exceeds: "Mostra como os restos são repartidos entre ração e cobertura morta e onde se acrescenta biodiversidade." },
      { name: "Poupança de adubo", objective: "O5", notYet: "Nenhuma estimativa, ou planeia parar o adubo em toda a terra de uma vez.", meets: "Estima os sacos e o dinheiro poupados na moeda local, com um teste justo contra uma faixa com a dose completa.", exceeds: "Plano verificado com a extensão ou com os resultados da análise do solo, com uma regra para quando aumentar." },
      { name: "Medidas ao longo das épocas", objective: "O6", notYet: "Nenhuma medida ou nenhuma linha de base.", meets: "Pelo menos quatro medidas, uma linha de base feita e uma data para cada época.", exceeds: "Inclui um campo de comparação que não mudou e fotografias tiradas de lugares fixos." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que semeiam uma cultura de cobertura ou um adubo verde, ou começam a FMNR, na época seguinte (inquérito de seguimento)",
      "Mudança no adubo comprado por acre no campo recuperado ao longo de duas épocas (registos dos alunos)",
      "Mudança nas medidas do solo (cobertura, infiltração, número de minhocas) e na colheita do campo recuperado ao longo de três épocas",
      "Número de vizinhos ou membros do grupo que copiam uma prática (relatórios da extensão)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, caneta e canetas de cores para o mapa de caminhos da machamba e o desenho do campo",
      "Uma pá, uma lata vazia sem fundo nem tampa, água e um relógio para as medidas do solo",
      "Paus ou pedras para marcar os lugares de medição",
      "Os registos e os preços do adubo da época passada (ou valores de exemplo)",
      "Um telefone para fotografias e notas (opcional)",
      "Cerca de 90 minutos no total, mais tempo no campo para as medidas"
    ],
    facilitatorNotes: [
      "Dê as Lições 3 e 6 no campo: procurem juntos os cepos para a FMNR e façam em grupo a medição da infiltração e a contagem das minhocas.",
      "Convide um extensionista ou um instituto de investigação (por exemplo KALRO, IITA, CSIR ou ISRA) para confirmar que culturas de cobertura e árvores fertilizantes servem para a chuva local.",
      "Fale abertamente das regras locais sobre pastagem e corte de árvores; a FMNR muitas vezes precisa de um acordo da comunidade.",
      "Nunca apresente os preços de exemplo como factos; recolha os preços locais do adubo antes da sessão.",
      "Incentive faixas de teste lado a lado em vez de cortes repentinos no adubo em toda a terra.",
      "Avalie o plano final com a grelha de avaliação e faça o seguimento depois de uma e de duas épocas para comparar as medidas."
    ]
  }
};
