"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-fish-farming.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept: no drug or chemical doses; sick fish -> fisheries extension officer or vet. Money figures are examples only.

const FAO_OXYGEN = { name: "FAO, African Regional Aquaculture Centre (Kutty, 1987): oxigénio dissolvido nos tanques de peixe", url: "https://www.fao.org/4/AC175E/AC175E04.htm" };
const GHANA_MANUAL = { name: "Manual do agricultor sobre a criação de tilápia em pequenos tanques de terra no Gana (Agyakwah et al., 2020; repositório CGIAR)", url: "https://hdl.handle.net/10568/143338" };
const WORLDFISH_NG = { name: "WorldFish: criação de tilápia GIFT na Nigéria (maternidades, crescimento, mercados), 2025", url: "https://worldfishcenter.org/impact-story/tilapia-farming-more-lucrative-catfish-inside-nigerias-aquaculture-shift" };
const ALR_CI = { name: "Aquatic Living Resources (2001): densidades altas reduzem a produção de tilápia-do-nilo em tanques na Costa do Marfim", url: "https://www.alr-journal.org/articles/alr/abs/2001/05/alr1120/alr1120.html" };
const GHANA_FC = { name: "Fisheries Commission (Comissão das Pescas do Gana): autorizações e licenças, incluindo aquacultura", url: "https://www.fishcom.gov.gh/" };
const KENYA_ACT = { name: "Quénia: Fisheries Management and Development Act, 2016 (registo e licenciamento da aquacultura), na FAOLEX", url: "https://faolex.fao.org/docs/pdf/ken160880.pdf" };

module.exports = {
  id: "agri-fish-farming-pt",
  lang: "pt",
  translationOf: "agri-fish-farming",
  category: "Agriculture (Africa)",
  name: "Noções Básicas de Piscicultura (Aquacultura)",
  skills: "Escolher tilápia ou peixe-gato, Escolher o local e construir um tanque, Verificar a qualidade da água, Comprar e povoar com alevinos de qualidade, Alimentar e calcular a conversão alimentar, Calcular o custo de um ciclo de produção",
  outcome: "planear e gerir um ciclo de produção de tilápia ou de peixe-gato africano num tanque de terra ou num tanque de cimento ou plástico: escolher a espécie e o local, verificar as autorizações, testar a água com ferramentas simples, povoar com alevinos de qualidade numa densidade segura, alimentar bem e acompanhar a conversão alimentar, resolver os problemas comuns, e colher e vender com um lucro calculado antes.",
  about: [
    "Este curso é para pequenos piscicultores e quem está a começar, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas no Gana, na Nigéria, no Quénia, na Costa do Marfim e em toda a África que querem criar tilápia ou peixe-gato africano em tanques. A piscicultura pode dar bom dinheiro e alimentar famílias, mas muitos primeiros tanques falham por causa de alevinos fracos, água má e ração que custa mais do que o peixe vale na venda.",
    "O Capítulo 1 planeia a exploração: escolher a espécie, escolher o local e construir o tanque, verificar as autorizações e manter a água boa com testes simples. O Capítulo 2 cria e vende o peixe: alevinos de qualidade e densidade de povoamento, alimentação e conversão alimentar com os problemas comuns, e colheita, venda e as contas de um ciclo.",
    "As regras e as autorizações para a piscicultura são diferentes em cada país e mudam; este curso diz a que serviços deve perguntar. Não dá doses de medicamentos nem de químicos: para peixe doente, chame o seu extensionista das pescas ou um veterinário. Os valores em dinheiro são só exemplos; use os seus próprios orçamentos. Cada lição dura cerca de cinco minutos e acaba com uma tarefa para a sua exploração. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano com custos para um ciclo de um tanque na sua exploração, ou para um exemplo como um tanque de tilápia de 300 metros quadrados perto de Kumasi ou tanques de peixe-gato perto de Ibadan: a espécie e porquê; o local, a fonte de água e a autorização que verificou; os testes da água e de quanto em quanto tempo os vai fazer; o número de alevinos, a densidade e a maternidade certificada onde vai comprar; a sobrevivência esperada, o peso na colheita e a ração necessária usando um FCR esperado; todos os custos; as vendas esperadas; o lucro ou o prejuízo; e o seu preço de equilíbrio por quilograma.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos piscicultores e quem está a começar, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas no Gana, na Nigéria, no Quénia, na África Ocidental francófona e noutras partes de África, que planeiam ou gerem um ou alguns tanques de terra, tanques com lona ou tanques de cimento ou plástico com tilápia ou peixe-gato africano.",
    startingPoint: "Sabem que se pode criar peixe e podem ter uma fonte de água e algum terreno. Muitos nunca testaram a água, compram alevinos a qualquer vendedor, dão ração a olho e nunca calcularam o custo de um ciclo antes de começar.",
    gap: "As falhas comuns são alevinos fracos ou de sexo misto, demasiados peixes no tanque, falta de oxigénio de madrugada, ração a mais e custos de ração maiores do que as vendas de peixe. Os piscicultores precisam de planear um ciclo no papel, manter a água saudável com testes simples, povoar com o número certo de bons alevinos e comparar a ração com o crescimento, para saberem antes da colheita se vão ter lucro.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o curso também existe em espanhol, francês e árabe",
      "Aparelhos: um telefone simples ou um smartphone, uma calculadora e ferramentas de teste baratas (termómetro, tiras de pH, um disco de Secchi feito em casa)",
      "Tempo: lições de 4 a 6 minutos, que cabem entre os trabalhos da exploração",
      "As autorizações e as regras sobre espécies mudam de país para país; os alunos têm de confirmar no serviço de pescas nacional ou do condado",
      "Sem doses de medicamentos nem de químicos; o peixe doente vai para um extensionista ou veterinário",
      "Os valores em dinheiro são exemplos; os preços da ração e do peixe variam muito de lugar para lugar e de época para época"
    ],
    prerequisites: "Nenhum. As ideias de \"Registos da Machamba e Margem Bruta\" do curso \"Agronegócio e Gestão da Machamba\" ajudam com os custos da Lição 6."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a sua água, o seu terreno, o seu dinheiro e o seu mercado local", action: "escolher tilápia ou peixe-gato africano e um sistema de tanque de terra ou de tanque de cimento ou plástico", standard: "dando pelo menos três razões ligadas ao seu local e aos seus compradores" },
    { id: "O2", condition: "Com um local possível", action: "verificar a água, o solo, a inclinação e o risco de cheia do local e fazer a lista das autorizações a pedir", standard: "dizendo o nome do serviço de pescas do seu país que vai contactar" },
    { id: "O3", condition: "Com um termómetro, tiras de pH e um disco de Secchi", action: "testar a água do tanque e dizer o que fazer quando o oxigénio, a temperatura ou o pH estão fora do normal", standard: "anotando cada teste com a data e a hora" },
    { id: "O4", condition: "Com o tamanho de um tanque", action: "calcular quantos alevinos deve pôr e fazer a lista do que verificar numa maternidade certificada", standard: "com as contas certas e a densidade combinada com um extensionista ou com a maternidade" },
    { id: "O5", condition: "Com registos da ração e pesos de amostras", action: "calcular o índice de conversão alimentar e notar cedo os problemas comuns", standard: "certo até uma casa decimal" },
    { id: "O6", condition: "Com os custos, a sobrevivência esperada, o peso na colheita e o preço", action: "escrever um plano com custos para um ciclo, com o lucro e o preço de equilíbrio", standard: "com todos os custos incluídos e as contas certas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear a exploração de peixe",
      lessons: [
        {
          title: "Escolher uma espécie e um sistema",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher tilápia ou peixe-gato africano e um sistema de tanque para a sua exploração.",
          text: [
            "Há dois peixes que se criam mais em África. A tilápia-do-nilo é popular no Gana, no Quénia, na Costa do Marfim e no Egito. Come ração em grânulos e o alimento natural da água verde, e vende-se fresca, frita ou grelhada. A tilápia de sexo misto reproduz-se no tanque e enche-o de peixe pequeno, por isso os piscicultores compram alevinos monossexo (quase todos machos). Raças melhoradas como a GIFT crescem mais depressa; a WorldFish diz que piscicultores na Nigéria chegam a cerca de 600 g em seis meses com a GIFT e boa alimentação.",
            "O peixe-gato africano (Clarias) é o principal peixe de criação na Nigéria e é popular fresco e fumado. Consegue respirar ar, por isso aguenta melhor a falta de oxigénio e pode ser criado em maior densidade, muitas vezes em tanques de cimento ou plástico. Mas precisa de ração mais rica em proteína, e os peixes grandes comem os pequenos, por isso é preciso separá-los por tamanho.",
            "Escolha o sistema: um tanque de terra é barato de gerir onde o solo segura a água; um tanque com lona ou um tanque de cimento ou plástico serve em solo arenoso ou em terrenos pequenos, mas custa mais a construir e precisa de mais trocas de água. O mais importante: antes de escolher, pergunte aos compradores que peixe e que tamanho querem, e a que preço."
          ],
          steps: ["Pergunte a três compradores (vendedores do mercado, hotéis, quem fuma peixe) que peixe, tamanho e preço querem.", "Verifique a sua água: quanta tem, se há o ano todo e se é limpa.", "Verifique o seu solo: segura a água?", "Escolha a espécie que os compradores querem e que a sua água aguenta.", "Escolha tanque de terra ou de cimento ou plástico conforme o solo, o espaço e o dinheiro."],
          words: [["Aquacultura", "a criação de peixes e de outros animais da água."], ["Alevino", "um peixe jovem, do tamanho de um dedo, comprado para pôr no tanque."], ["Monossexo", "alevinos quase todos do mesmo sexo (tilápia macho), para crescerem em vez de se reproduzirem."], ["GIFT", "Genetically Improved Farmed Tilapia (tilápia de criação geneticamente melhorada), uma raça de tilápia que cresce mais depressa, criada pela WorldFish."]],
          slides: [
            { title: "Tilápia-do-nilo", bullets: ["Popular no Gana, no Quénia e na Costa do Marfim", "Come grânulos e o alimento da água verde", "Compre alevinos monossexo; a GIFT cresce mais depressa"] },
            { title: "Peixe-gato africano", bullets: ["Principal peixe de criação na Nigéria; fresco ou fumado", "Respira ar; pode ficar em maior densidade, em tanques", "Precisa de ração rica em proteína; separe por tamanho"] },
            { title: "Tanque de terra ou de cimento", bullets: ["Tanque de terra: barato onde o solo segura a água", "Tanque com lona ou de cimento: solo arenoso, terreno pequeno", "Os de cimento custam mais e precisam de mais trocas de água"] },
            { title: "Comece pelo comprador", bullets: ["Que peixe? Que tamanho? Que preço?", "Pergunte a pelo menos três compradores", "Depois escolha a espécie e o sistema"] }
          ],
          sources: [WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Pergunte a pelo menos três compradores perto de você que peixe querem, de que tamanho e a que preço. Anote as respostas e depois escolha tilápia ou peixe-gato e um tanque de terra ou de cimento ou plástico, com três razões tiradas do seu local e dos seus compradores.",
          youCanNow: "escolher entre tilápia e peixe-gato africano, e entre um tanque de terra e um tanque de cimento ou plástico, olhando para a sua água, o seu solo e os seus compradores.",
          quickCheck: [
            { objective: "O1", q: "Porque é que os criadores de tilápia compram alevinos monossexo?", options: ["São mais baratos", "Para os peixes crescerem em vez de se reproduzirem e encherem o tanque de peixe pequeno", "Não precisam de ração", "Sabem melhor"], answer: 1, why: "A tilápia de sexo misto reproduz-se no tanque e acaba raquítica e pequena." },
            { objective: "O1", q: "O seu solo é arenoso e não segura a água. Que sistema serve melhor?", options: ["Um tanque de terra sem lona", "Não é possível criar peixe", "Um tanque na margem do rio", "Um tanque com lona ou um tanque de cimento ou plástico"], answer: 3, why: "Uma lona ou um tanque de cimento seguram a água onde o solo não segura." }
          ]
        },
        {
          title: "Escolher o local, construir o tanque e as autorizações",
          objectives: ["O2"],
          minutes: 6,
          goal: "Verificar um local para o tanque e fazer a lista das autorizações a pedir.",
          text: [
            "Um bom local para o tanque tem: água o ano todo, limpa e sem poluição de fábricas, minas ou campos pulverizados; solo com argila suficiente para segurar a água (aperte um punhado de terra húmida: se mantiver a forma, é bom sinal); uma inclinação suave para o tanque encher e esvaziar pela gravidade; nenhuma cheia; e fica perto o bastante para o vigiar contra ladrões e predadores.",
            "Construa o tanque com um dique (margem) firme e inclinado, com capim plantado para parar a erosão, uma entrada de água com rede para os peixes selvagens não entrarem, e uma saída ou tubo de esvaziamento para poder esvaziar o tanque na colheita. Um tanque de algumas centenas de metros quadrados é fácil de gerir para quem está a começar. Ponha uma vedação se puder e mantenha os animais e as crianças afastados. Prepare o tanque antes de pôr os peixes: seque-o, tire a lama e os peixes selvagens, e ponha cal e adubo se o seu extensionista aconselhar.",
            "As explorações de peixe muitas vezes precisam de registo ou de autorização, e às vezes de uma licença de uso da água ou ambiental. No Quénia, a Fisheries Management and Development Act, 2016 (lei das pescas) exige que a aquacultura seja registada e licenciada no Kenya Fisheries Service (Serviço de Pescas do Quénia). No Gana, a Fisheries Commission (Comissão das Pescas) passa as autorizações de aquacultura. Na Nigéria, pergunte ao Federal Department of Fisheries and Aquaculture (departamento federal das pescas) e ao ministério do seu estado; na Costa do Marfim, ao ministério responsável pelas pescas. Algumas zonas só permitem certas espécies ou raças. As regras mudam, por isso verifique antes de cavar."
          ],
          steps: ["Verifique a fonte de água: chega para o ano todo e é limpa.", "Faça o teste de apertar o solo; peça a um extensionista para confirmar.", "Escolha terreno de inclinação suave, acima do nível das cheias, perto de onde o pode vigiar.", "Planeie um dique firme, uma entrada de água com rede e uma saída para esvaziar.", "Contacte o serviço de pescas: registo, autorizações, uso da água, espécies permitidas.", "Prepare o tanque antes de pôr os peixes, como o seu extensionista aconselhar."],
          words: [["Dique", "a margem de terra à volta de um tanque."], ["Entrada e saída de água", "os tubos ou canais por onde a água entra e sai do tanque."], ["Autorização", "a permissão oficial de que precisa antes de começar ou gerir a exploração."]],
          slides: [
            { title: "Um bom local", bullets: ["Água limpa o ano todo", "Solo com argila que segura a água", "Inclinação suave; sem cheias; fácil de vigiar"] },
            { title: "Construa bem", bullets: ["Dique firme, com capim", "Entrada com rede; saída para esvaziar", "Vedação; animais e crianças afastados"] },
            { title: "Autorizações: verifique primeiro", bullets: ["Quénia: registo e licença no Kenya Fisheries Service", "Gana: autorização de aquacultura da Fisheries Commission", "Nigéria e Costa do Marfim: serviços de pescas nacionais e do estado"] },
            { title: "Antes de cavar", bullets: ["Pergunte pelas regras do uso da água e do ambiente", "Pergunte que espécies são permitidas", "As regras mudam: confirme no serviço"] }
          ],
          sources: [GHANA_MANUAL, KENYA_ACT, GHANA_FC],
          tryIt: "Percorra o seu local possível. Anote a fonte de água, o resultado do teste de apertar o solo, a inclinação, o risco de cheia e como o vai vigiar. Depois encontre o telefone ou o escritório do seu serviço de pescas e escreva três perguntas sobre autorizações e espécies.",
          youCanNow: "avaliar se um local serve para um tanque de peixe, planear as suas partes principais e saber a que serviço de pescas perguntar pelas autorizações.",
          quickCheck: [
            { objective: "O2", q: "Aperta terra húmida e ela mantém a forma. O que isto indica?", options: ["O solo tem argila e pode segurar a água", "O solo é arenoso demais", "O local vai ter cheias", "A água está poluída"], answer: 0, why: "Um solo argiloso que mantém a forma costuma segurar a água do tanque; peça a um extensionista para confirmar." },
            { objective: "O2", q: "Antes de cavar um tanque de peixe no Gana, a quem deve perguntar pelas autorizações?", options: ["Só ao banco", "A ninguém; os tanques de peixe não precisam de autorização", "À Fisheries Commission", "Ao serviço de controlo de pragas"], answer: 2, why: "A Fisheries Commission do Gana passa as autorizações de aquacultura." }
          ]
        },
        {
          title: "Qualidade da água com testes simples",
          objectives: ["O3"],
          minutes: 6,
          goal: "Testar a água do tanque e agir quando alguma coisa corre mal.",
          text: [
            "Os peixes vivem na água, por isso água má mata-os depressa. Vigie três coisas. Oxigénio: nos tanques de água verde é mais alto à tarde e mais baixo de madrugada, porque as plantas e as algas gastam oxigénio durante a noite. Dias nublados, algas a mais, ração a apodrecer e estrume pioram isto. Um documento da FAO diz que a tilápia fica muito menos ativa quando o oxigénio desce para cerca de 1 a 2 mg por litro. Temperatura: a tilápia e o peixe-gato são peixes de água quente; comem e crescem devagar em água fria, como nas zonas altas ou na época fria. pH (o quanto a água é ácida): água ácida demais ou alcalina demais causa stress aos peixes.",
            "Testes simples: um termómetro para a temperatura; tiras de papel de pH ou um kit; um disco de Secchi (um prato branco e preto num pau marcado) para ver o quanto a água está verde; e os seus olhos de madrugada. Peixes a abrir a boca à superfície de madrugada querem dizer que falta oxigénio. Se tiver dinheiro para isso, um kit ou um aparelho de medir oxigénio dá um número.",
            "Se faltar oxigénio: pare ou reduza a ração até os peixes recuperarem, junte água fresca, agite ou bombeie a água para misturar ar, e tire os peixes mortos. Se a água estiver muito verde, ponha menos adubo. Se o pH estiver errado, pergunte ao seu extensionista sobre pôr cal. Anote cada teste com a data e a hora."
          ],
          steps: ["Veja o tanque de madrugada: há peixes a abrir a boca à superfície?", "Meça a temperatura da água com um termómetro.", "Teste o pH com tiras ou um kit uma vez por semana.", "Desça o disco de Secchi até desaparecer; anote a profundidade.", "Falta de oxigénio: pare a ração, junte água fresca, agite ou areje, tire os peixes mortos.", "Anote cada resultado com a data e a hora."],
          words: [["Oxigénio dissolvido", "o oxigénio misturado na água, que os peixes respiram pelas guelras."], ["pH", "um número que mostra o quanto a água é ácida ou alcalina."], ["Disco de Secchi", "um prato preto e branco que se desce na água para ver o quanto está limpa ou verde."], ["Arejamento", "misturar ar na água, com uma bomba, uma pá ou agitando a água."]],
          slides: [
            { title: "Oxigénio", bullets: ["Mais alto à tarde, mais baixo de madrugada", "Pior em dias nublados e com ração a apodrecer", "A tilápia abranda perto de 1 a 2 mg por litro"] },
            { title: "Temperatura e pH", bullets: ["Água quente: crescimento rápido; fria: lento", "Água ácida ou alcalina demais causa stress", "Pergunte ao extensionista sobre pôr cal"] },
            { title: "Testes simples", bullets: ["Termómetro; tiras de pH", "Disco de Secchi: o quanto a água está verde?", "Ver de madrugada: peixe a abrir a boca = falta oxigénio"] },
            { title: "Falta de oxigénio: aja já", bullets: ["Pare ou reduza a ração", "Junte água fresca; agite ou areje", "Tire os peixes mortos; anote"] }
          ],
          sources: [FAO_OXYGEN, GHANA_MANUAL],
          tryIt: "Faça um disco de Secchi com um prato branco com dois quartos pintados de preto, amarrado a um pau marcado a cada 5 cm. Depois faça uma folha de registo dos testes da água com colunas para a data, a hora, a temperatura, o pH, a profundidade do Secchi, o comportamento dos peixes e o que fez, e preencha uma linha com um tanque ou uma fonte de água perto de você.",
          youCanNow: "verificar o oxigénio, a temperatura, o pH e o verde da água com ferramentas simples e agir depressa quando a água fica má.",
          quickCheck: [
            { objective: "O3", q: "Quando é que o oxigénio costuma estar mais baixo num tanque de água verde?", options: ["Ao meio-dia", "À tarde", "De madrugada", "Nunca muda"], answer: 2, why: "À noite as plantas e as algas gastam oxigénio e não produzem nenhum, por isso ele desce até de madrugada." },
            { objective: "O3", q: "De madrugada vê peixes a abrir a boca à superfície. O que faz primeiro?", options: ["Dá-lhes mais ração", "Para a ração, junta água fresca e agita ou areja", "Põe adubo", "Espera até amanhã"], answer: 1, why: "Abrir a boca à superfície quer dizer falta de oxigénio; menos ração e mais água fresca e agitada fazem-no subir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear a exploração de peixe",
        questions: [
          { objective: "O1", q: "O que é verdade sobre o peixe-gato africano?", options: ["Consegue respirar ar e aguenta melhor a falta de oxigénio", "Só come capim", "Reproduz-se e enche o tanque como a tilápia de sexo misto", "Não pode ser criado em tanques de cimento"], answer: 0, why: "O peixe-gato tem um órgão que respira ar, por isso aguenta a falta de oxigénio e os tanques de cimento." },
          { objective: "O1", q: "O que deve saber primeiro, antes de escolher um peixe?", options: ["A cor do peixe", "O que o seu primo cria", "O maior peixe possível", "Que peixe, tamanho e preço os seus compradores querem"], answer: 3, why: "Um peixe que não consegue vender a bom preço dá prejuízo, por muito bem que cresça." },
          { objective: "O2", q: "Porque é que um tanque precisa de uma saída de água?", options: ["Para deixar entrar peixes selvagens", "Para o poder esvaziar na colheita e na limpeza", "Para manter a água quente", "Não precisa"], answer: 1, why: "Esvaziar o tanque torna fácil a colheita e a preparação do tanque." },
          { objective: "O2", q: "No Quénia, a aquacultura tem de ser registada e licenciada no:", options: ["Kenya Dairy Board", "Kenya Wildlife Service", "Kenya Fisheries Service", "Serviço de estradas do condado"], answer: 2, why: "A Fisheries Management and Development Act, 2016 exige registo e licença no Kenya Fisheries Service." },
          { objective: "O3", q: "O que mostra um disco de Secchi?", options: ["O quanto a água está verde ou limpa", "O peso do peixe", "O pH do tanque", "O oxigénio em mg por litro"], answer: 0, why: "A profundidade onde o disco desaparece mostra quantas algas há na água." }
        ]
      }
    },
    {
      name: "Capítulo 2: Criar e vender o peixe",
      lessons: [
        {
          title: "Alevinos de qualidade e densidade de povoamento",
          objectives: ["O4"],
          minutes: 5,
          goal: "Calcular quantos alevinos deve pôr e verificar uma maternidade.",
          text: [
            "Bons alevinos são metade do trabalho. Compre numa maternidade registada ou certificada pelo serviço de pescas, ou recomendada pelo seu extensionista. Pergunte: As tilápias são monossexo, e de que raça? Os alevinos têm todos mais ou menos o mesmo tamanho? Quantos morrem nas primeiras semanas, e eles substituem-nos? Posso ver a maternidade? Alevinos saudáveis nadam com energia, não têm feridas e têm todos o mesmo tamanho. Peixes apanhados no rio ou de tamanhos misturados trazem doenças, reprodução e canibalismo.",
            "A densidade de povoamento é o número de peixes por metro quadrado (tanques de terra) ou por metro cúbico (tanques de cimento ou plástico). Peixes a mais querem dizer pouco oxigénio, crescimento lento e peixe pequeno. Um estudo em tanques de tilápia na Costa do Marfim, alimentados só com adubo, mostrou que 2 a 3 peixes por metro quadrado já reduziam a produção. Com boa ração em grânulos podem pôr-se mais peixes, e ainda mais em tanques com água a correr ou arejamento, sobretudo para o peixe-gato. Combine a densidade para o seu sistema com o seu extensionista ou com a maternidade.",
            "Exemplo (os números são só um exemplo): um tanque de 20 m por 15 m tem 300 metros quadrados. Com uma densidade de exemplo de 3 peixes por metro quadrado, põe 900 alevinos. Transporte os alevinos no fresco da manhã, em sacos com oxigénio ou em água limpa, e deixe os sacos a boiar no tanque durante algum tempo para as temperaturas ficarem iguais antes de os soltar."
          ],
          steps: ["Meça o tanque: comprimento x largura = área em metros quadrados.", "Combine uma densidade com o seu extensionista ou com a maternidade.", "Área x densidade = número de alevinos.", "Escolha uma maternidade registada ou recomendada; pergunte pela raça, monossexo, tamanho e perdas.", "Verifique os alevinos: ativos, sem feridas, do mesmo tamanho.", "Transporte na manhã fresca; deixe os sacos a boiar para igualar a temperatura antes de soltar."],
          words: [["Densidade de povoamento", "o número de peixes por metro quadrado de tanque de terra, ou por metro cúbico de água num tanque de cimento ou plástico."], ["Maternidade", "uma exploração que reproduz peixes e cria peixes jovens para vender."], ["Canibalismo", "peixes que comem outros peixes da mesma espécie, comum no peixe-gato de tamanhos misturados."]],
          slides: [
            { title: "Bons alevinos", bullets: ["Maternidade registada ou recomendada", "Tilápia: monossexo, raça conhecida", "Ativos, sem feridas, do mesmo tamanho"] },
            { title: "A densidade conta", bullets: ["Peixes a mais: pouco oxigénio, crescimento lento, peixe pequeno", "Estudo na Costa do Marfim: 2-3 por m2 é demais só com adubo", "Combine a densidade com o extensionista ou a maternidade"] },
            { title: "Conta de exemplo", bullets: ["20 m x 15 m = 300 m2", "300 m2 x 3 peixes por m2 = 900 alevinos", "Os números são só um exemplo"] },
            { title: "Dia de povoamento", bullets: ["Manhã fresca", "Sacos com oxigénio ou água limpa", "Deixe os sacos a boiar para igualar a temperatura"] }
          ],
          sources: [ALR_CI, WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Meça o seu tanque (ou use 20 m por 15 m). Peça a um extensionista ou a uma maternidade uma densidade para o seu sistema e calcule quantos alevinos deve comprar. Depois escreva cinco perguntas para fazer à maternidade antes de pagar.",
          youCanNow: "calcular o número de alevinos para um tanque e escolher uma maternidade que vende peixe de qualidade.",
          quickCheck: [
            { objective: "O4", q: "Um tanque tem 25 m por 10 m e a densidade combinada é de 2 peixes por metro quadrado. Quantos alevinos?", options: ["250", "350", "500", "700"], answer: 2, why: "25 x 10 = 250 metros quadrados, e 250 x 2 = 500 alevinos." },
            { objective: "O4", q: "Que lote de alevinos de peixe-gato deve recusar?", options: ["Peixes ativos e do mesmo tamanho", "Peixes de uma maternidade registada", "Peixes sem feridas", "Peixes de tamanhos muito misturados"], answer: 3, why: "Tamanhos misturados levam ao canibalismo, porque o peixe-gato grande come o pequeno." }
          ]
        },
        {
          title: "Alimentação, conversão alimentar e problemas comuns",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular o índice de conversão alimentar e notar cedo os problemas.",
          text: [
            "A ração costuma ser o maior custo na piscicultura. Use ração de boa qualidade com o tamanho de grânulo certo para a boca do peixe; os grânulos que boiam deixam ver quanto é comido. Dê de comer às mesmas horas todos os dias, e dê só o que os peixes comem em poucos minutos; a ração que sobra apodrece e gasta o oxigénio. A quantidade aumenta à medida que os peixes crescem: a cada duas a quatro semanas, apanhe com a rede e pese uma amostra de peixes, calcule o peso médio e ajuste a ração com a tabela do fabricante da ração ou do extensionista. Guarde a ração seca e fora do chão; ração com bolor é veneno.",
            "O índice de conversão alimentar (FCR, em inglês) mostra como a ração se transforma em peixe: FCR = ração dada / peso ganho. Exemplo: deu 400 kg de ração e os peixes ganharam 250 kg, por isso FCR = 400 / 250 = 1.6. Um FCR mais baixo quer dizer menos ração por kg de peixe. O FCR sobe com ração a mais, ração fraca, água má e peixe doente.",
            "Problemas comuns: falta de oxigénio de madrugada; predadores como aves, cobras e lontras, e ladrões; tilápia a reproduzir-se quando os alevinos eram de sexo misto; peixe-gato a comer-se uns aos outros quando os tamanhos são diferentes (separe-os); cheias que levam os peixes; e doenças. Os sinais de peixe doente são não comer, feridas, nadar de forma estranha ou muitas mortes. Tire os peixes mortos, pare a ração, verifique a água e chame o seu extensionista das pescas ou um veterinário; não use medicamentos nem químicos sem o conselho deles."
          ],
          steps: ["Dê ração de boa qualidade e do tamanho certo a horas fixas.", "Dê só o que os peixes comem em poucos minutos.", "A cada 2 a 4 semanas, pese uma amostra e ajuste a ração pela tabela.", "Anote toda a ração dada.", "FCR = ração dada / peso ganho.", "Vigie os problemas todos os dias; chame o extensionista ou o veterinário para peixe doente."],
          words: [["Índice de conversão alimentar (FCR)", "os quilogramas de ração usados para fazer crescer um quilograma de peixe."], ["Pesagem de amostra", "apanhar com a rede e pesar alguns peixes para saber o peso médio."], ["Predador", "um animal que come peixe, como algumas aves, cobras e lontras."]],
          slides: [
            { title: "Alimente bem", bullets: ["Boa ração, grânulo do tamanho certo", "Horas fixas; só o que comem em minutos", "Pese uma amostra a cada 2 a 4 semanas"] },
            { title: "Índice de conversão alimentar", bullets: ["FCR = ração dada / peso ganho", "400 kg de ração / 250 kg ganhos = 1.6", "Mais baixo é melhor"] },
            { title: "Problemas comuns", bullets: ["Falta de oxigénio; predadores e ladrões", "Tilápia a reproduzir-se; canibalismo do peixe-gato", "Cheias; doenças"] },
            { title: "Peixe doente", bullets: ["Não come, feridas, nada de forma estranha, mortes", "Tire os mortos; pare a ração; verifique a água", "Chame o extensionista ou o veterinário; sem remédios sem conselho"] }
          ],
          sources: [GHANA_MANUAL, FAO_OXYGEN],
          tryIt: "Faça um registo da alimentação com colunas para a data, a ração dada (kg), o peso médio da amostra e notas. Depois calcule o FCR deste exemplo: 300 kg de ração dada, os peixes ganharam 200 kg. Escreva uma maneira de o baixar.",
          youCanNow: "alimentar bem os peixes, calcular o FCR e notar cedo os problemas comuns.",
          quickCheck: [
            { objective: "O5", q: "Deu 450 kg de ração e os peixes ganharam 300 kg. Qual é o FCR?", options: ["0.7", "1.2", "1.5", "2.0"], answer: 2, why: "450 a dividir por 300 dá 1.5." },
            { objective: "O5", q: "Porque deve dar só o que os peixes comem em poucos minutos?", options: ["A ração que sobra apodrece, gasta o oxigénio e desperdiça dinheiro", "Os peixes não gostam de ração", "A ração é de graça", "Deixa a água mais limpa para nadar"], answer: 0, why: "A ração que sobra é dinheiro perdido e polui a água." }
          ]
        },
        {
          title: "Colheita, venda e as contas de um ciclo",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever um plano com custos para um ciclo, com o lucro e o preço de equilíbrio.",
          text: [
            "Planeie a venda antes de pôr os peixes. Combine com os compradores o tamanho, o dia e o preço, e faça a colheita na manhã fresca. Pare a ração um dia antes para os peixes aguentarem melhor o transporte. Esvazie parte do tanque e apanhe os peixes com a rede, ou esvazie-o todo para uma colheita completa. Mantenha o peixe fresco e limpo, em gelo ou à sombra, e venda depressa: o peixe fresco estraga-se em poucas horas com o calor. Fumar ou secar, comum para o peixe-gato na Nigéria, dá mais valor e mais tempo para vender. Colheitas parciais dos peixes maiores podem espalhar as vendas por várias semanas.",
            "Calcule primeiro o custo de um ciclo no papel. Exemplo para um tanque de tilápia de 300 metros quadrados no Gana (todos os números são só exemplos; use os seus próprios orçamentos): 900 alevinos a GHS 1.50 = GHS 1,350; ração: colheita esperada de 720 peixes (80% de sobrevivência) x 0.35 kg = 252 kg, e com um FCR esperado de 1.6 isso precisa de cerca de 400 kg de ração a GHS 12 = GHS 4,800; preparação do tanque GHS 300; mão de obra e segurança GHS 1,200; colheita e transporte GHS 300. Custos totais GHS 7,950.",
            "Vendas: 252 kg a GHS 40 por kg = GHS 10,080. Lucro = 10,080 - 7,950 = GHS 2,130. Preço de equilíbrio = custos totais / kg colhidos = 7,950 / 252 = cerca de GHS 31.50 por kg. Se o preço do comprador estiver perto do seu preço de equilíbrio, mude o plano: melhores alevinos, menos ração desperdiçada ou um comprador melhor."
          ],
          steps: ["Combine o tamanho, o dia e o preço com os compradores antes de pôr os peixes.", "Faça a lista de todos os custos: alevinos, ração, preparação do tanque, mão de obra, segurança, colheita, transporte.", "Colheita esperada = alevinos x sobrevivência x peso na colheita.", "Ração necessária = peso ganho x FCR esperado.", "Lucro = vendas - custos totais.", "Preço de equilíbrio = custos totais / kg colhidos."],
          words: [["Taxa de sobrevivência", "a parte dos peixes postos no tanque que ainda está viva na colheita."], ["Preço de equilíbrio", "o preço por kg em que as vendas pagam exatamente todos os custos."], ["Colheita parcial", "tirar os peixes maiores e deixar os outros a crescer."]],
          slides: [
            { title: "Colher e vender", bullets: ["Comprador, tamanho, dia e preço combinados primeiro", "Manhã fresca; pare a ração um dia antes", "Gelo ou sombra; venda depressa, ou fume ou seque"] },
            { title: "Custos de exemplo (GHS)", bullets: ["Alevinos 1,350; ração 4,800", "Preparação 300; mão de obra, segurança 1,200; colheita 300", "Total 7,950. Só exemplos"] },
            { title: "Resultado de exemplo", bullets: ["720 peixes x 0.35 kg = 252 kg", "252 kg x GHS 40 = GHS 10,080", "Lucro de cerca de GHS 2,130"] },
            { title: "Preço de equilíbrio", bullets: ["Custos totais / kg colhidos", "7,950 / 252 = cerca de GHS 31.50 por kg", "Perto do equilíbrio? Mude o plano"] }
          ],
          sources: [GHANA_MANUAL, WORLDFISH_NG],
          tryIt: "Tarefa final: escreva um plano com custos para um ciclo do seu próprio tanque (ou do exemplo): espécie, local e autorização verificada, testes da água, alevinos e maternidade, sobrevivência esperada, peso na colheita e ração, todos os custos, vendas esperadas, lucro e preço de equilíbrio por kg.",
          youCanNow: "planear uma colheita e uma venda e calcular o lucro e o preço de equilíbrio de um ciclo de piscicultura.",
          quickCheck: [
            { objective: "O6", q: "Os custos totais são NGN 900,000 e espera colher 600 kg de peixe-gato. Qual é o preço de equilíbrio?", options: ["NGN 600 por kg", "NGN 1,000 por kg", "NGN 1,200 por kg", "NGN 1,500 por kg"], answer: 3, why: "900,000 a dividir por 600 dá 1,500 por kg." },
            { objective: "O6", q: "Quando deve combinar a venda com os compradores?", options: ["Depois da colheita, quando o peixe já está no gelo", "Antes de pôr os peixes, e confirmar antes da colheita", "Nunca; vende-se à beira da estrada", "Só se sobrar peixe"], answer: 1, why: "O peixe fresco estraga-se depressa; um comprador combinado cedo evita vender barato à pressa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Criar e vender o peixe",
        questions: [
          { objective: "O4", q: "Onde deve comprar alevinos?", options: ["Numa maternidade registada ou recomendada", "Num rio perto de você", "A quem vender mais barato", "A qualquer vendedor que passe"], answer: 0, why: "As maternidades registadas ou recomendadas dão raça conhecida, tilápia monossexo e peixe saudável." },
          { objective: "O4", q: "Um tanque de 30 m por 10 m com 2 peixes por metro quadrado precisa de quantos alevinos?", options: ["300", "400", "500", "600"], answer: 3, why: "30 x 10 = 300 metros quadrados, e 300 x 2 = 600." },
          { objective: "O5", q: "Os peixes não comem, têm feridas e alguns estão a morrer. O que faz?", options: ["Dá-lhes mais ração", "Compra um remédio no mercado e põe na água", "Tira os peixes mortos, para a ração, verifica a água e chama o extensionista ou o veterinário", "Põe mais alevinos"], answer: 2, why: "O peixe doente precisa do conselho de um extensionista ou veterinário; remédios sem conselho podem fazer mal aos peixes e a quem os compra." },
          { objective: "O5", q: "Um FCR que desce durante o ciclo normalmente quer dizer:", options: ["Está a desperdiçar ração", "A ração está a transformar-se em peixe de forma mais eficiente", "Os peixes estão doentes", "O tanque está verde demais"], answer: 1, why: "Menos ração por kg ganho quer dizer melhor conversão alimentar." },
          { objective: "O6", q: "As vendas são GHS 12,000 e os custos totais são GHS 9,500. Qual é o lucro?", options: ["GHS 1,500", "GHS 2,000", "GHS 2,500", "GHS 21,500"], answer: 2, why: "12,000 menos 9,500 dá 2,500." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Piscicultura (Aquacultura)",
    questions: [
      { objective: "O1", q: "Qual é o principal peixe de criação na Nigéria?", options: ["Peixe-gato africano", "Salmão", "Truta", "Carpa"], answer: 0, why: "O peixe-gato africano é o principal peixe de criação da Nigéria, vendido fresco e fumado." },
      { objective: "O1", q: "Tilápia de sexo misto num tanque normalmente leva a:", options: ["Peixes maiores", "Vendas mais rápidas", "Muitos peixes pequenos e raquíticos por causa da reprodução", "Menos ração necessária"], answer: 2, why: "A tilápia reproduz-se no tanque e enche-o de peixe pequeno." },
      { objective: "O1", q: "O que é a tilápia GIFT?", options: ["Uma prenda grátis dos compradores", "Uma doença dos peixes", "Um modelo de tanque", "Uma raça de tilápia melhorada, que cresce mais depressa, da WorldFish"], answer: 3, why: "GIFT quer dizer Genetically Improved Farmed Tilapia (tilápia de criação geneticamente melhorada)." },
      { objective: "O2", q: "Qual é o melhor local para um tanque de terra?", options: ["Solo arenoso numa zona de cheias do rio", "Solo argiloso numa inclinação suave acima do nível das cheias, com água limpa o ano todo", "Um monte de pedra sem água", "Ao lado da saída de uma mina"], answer: 1, why: "A argila segura a água, a inclinação deixa encher e esvaziar, e a água limpa mantém os peixes vivos." },
      { objective: "O2", q: "Porque se põe uma rede na entrada de água do tanque?", options: ["Para não deixar entrar peixes selvagens e predadores", "Para aquecer a água", "Para alimentar os peixes", "Para atrasar a colheita"], answer: 0, why: "Os peixes selvagens competem pela comida, trazem doenças e comem os alevinos." },
      { objective: "O2", q: "Antes de construir um tanque de peixe, deve:", options: ["Começar a cavar e perguntar depois", "Perguntar só aos vizinhos", "Confirmar no serviço de pescas nacional ou do condado as autorizações e as espécies permitidas", "Pensar que não há regras"], answer: 2, why: "Muitos países exigem registo ou autorização, e alguns limitam as espécies." },
      { objective: "O3", q: "O que piora a falta de oxigénio de madrugada?", options: ["Dias de sol e poucas algas", "Dias nublados, algas a mais e ração a apodrecer", "Água limpa e fresca", "Menos peixes"], answer: 1, why: "Isto reduz a produção de oxigénio ou gasta o oxigénio durante a noite." },
      { objective: "O3", q: "A tilápia e o peixe-gato crescem devagar quando a água está:", options: ["Fria", "Quente", "Limpa", "Verde"], answer: 0, why: "Os dois são peixes de água quente; a água fria faz comer e crescer mais devagar." },
      { objective: "O3", q: "Que ferramenta mede o quanto a água do tanque é ácida?", options: ["Um disco de Secchi", "Um termómetro", "Uma rede de pesca", "Tiras de pH ou um kit de pH"], answer: 3, why: "As tiras ou os kits de pH mostram o quanto a água é ácida ou alcalina." },
      { objective: "O3", q: "Se falta oxigénio, que ação está ERRADA?", options: ["Juntar água fresca", "Agitar ou arejar a água", "Dar mais ração do que o normal", "Tirar os peixes mortos"], answer: 2, why: "A ração a mais apodrece e gasta ainda mais oxigénio." },
      { objective: "O4", q: "Densidade de povoamento quer dizer:", options: ["O peso da ração por dia", "O número de peixes por metro quadrado ou por metro cúbico", "A profundidade do tanque", "O preço de cada alevino"], answer: 1, why: "A densidade é quantos peixes partilham cada unidade de espaço." },
      { objective: "O4", q: "Um tanque de 400 metros quadrados com 2.5 peixes por metro quadrado precisa de:", options: ["600 alevinos", "800 alevinos", "1,000 alevinos", "1,600 alevinos"], answer: 2, why: "400 x 2.5 = 1,000." },
      { objective: "O4", q: "Porque se deixam os sacos de alevinos a boiar no tanque antes de os soltar?", options: ["Para as temperaturas da água ficarem iguais", "Para contar os peixes", "Para os alimentar", "Para limpar os sacos"], answer: 0, why: "Uma mudança brusca de temperatura choca os alevinos e pode matá-los." },
      { objective: "O5", q: "O FCR calcula-se assim:", options: ["Peixes vendidos / peixes postos", "Preço / custo", "Área do tanque x densidade", "Ração dada / peso ganho"], answer: 3, why: "Mostra quantos kg de ração fazem um kg de peixe." },
      { objective: "O5", q: "Deu 600 kg e os peixes ganharam 400 kg. FCR?", options: ["1.5", "0.7", "2.4", "1.0"], answer: 0, why: "600 a dividir por 400 dá 1.5." },
      { objective: "O5", q: "De quanto em quanto tempo deve pesar uma amostra de peixes para ajustar a ração?", options: ["Nunca", "Só na colheita", "A cada 2 a 4 semanas", "A cada hora"], answer: 2, why: "Pesar amostras com regularidade mostra o crescimento, para a ração acompanhar." },
      { objective: "O5", q: "Peixe-gato de tamanhos muito diferentes no mesmo tanque pode levar a:", options: ["Crescimento mais rápido para todos", "Canibalismo", "Água mais limpa", "Custos de ração mais baixos"], answer: 1, why: "O peixe-gato grande come o pequeno, por isso os piscicultores separam-nos por tamanho." },
      { objective: "O6", q: "O peso esperado da colheita calcula-se assim:", options: ["Ração x preço", "Área do tanque x profundidade", "Alevinos x sobrevivência x peso na colheita", "Custos / preço"], answer: 2, why: "Só contam os peixes que sobrevivem, com o peso esperado." },
      { objective: "O6", q: "O preço de equilíbrio por kg é:", options: ["O preço mais alto do mercado", "Custos totais / kg colhidos", "Só o custo da ração", "O preço do alevino"], answer: 1, why: "A este preço, as vendas pagam exatamente todos os custos." },
      { objective: "O6", q: "Qual costuma ser o maior custo num ciclo de peixe?", options: ["A rede", "A placa do tanque", "Os testes da água", "A ração"], answer: 3, why: "A ração costuma ser a maior parte dos custos, por isso o FCR conta." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 5, 6, 9, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Espécie e sistema", objective: "O1", notYet: "Não deu razão para a espécie, ou não perguntou a nenhum comprador.", meets: "Espécie e sistema escolhidos com três razões tiradas do local e dos compradores.", exceeds: "Diz quem são os compradores, o tamanho que querem e o preço que deram." },
      { name: "Local e autorizações", objective: "O2", notYet: "Local não verificado ou nenhum serviço de pescas indicado.", meets: "Água, solo, inclinação e cheias verificados; o serviço de pescas e as perguntas sobre autorizações na lista.", exceeds: "Já contactou o serviço de pescas e anotou a resposta." },
      { name: "Plano da qualidade da água", objective: "O3", notYet: "Nenhum teste da água no plano.", meets: "Ver de madrugada, temperatura, pH e Secchi, com a frequência e o que fazer quando estão fora do normal.", exceeds: "Inclui um registo de testes preenchido e um plano de emergência para a falta de oxigénio." },
      { name: "Alevinos e povoamento", objective: "O4", notYet: "Número de alevinos em falta ou errado, ou nenhuma maternidade indicada.", meets: "Número certo a partir da área e da densidade combinada; uma maternidade registada ou recomendada indicada, com o que verificar.", exceeds: "Anota a raça, se são monossexo e a regra da maternidade para substituir os que morrem." },
      { name: "Custos, lucro e equilíbrio", objective: "O6", notYet: "Faltam custos, a ração não está ligada ao FCR, ou as contas estão erradas.", meets: "Todos os custos, ração a partir do ganho esperado x FCR, lucro e preço de equilíbrio certos.", exceeds: "Mostra um segundo caso com menos sobrevivência ou um preço mais baixo, e o que o piscicultor faria." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que compram alevinos numa maternidade registada ou recomendada em 6 meses (inquérito de seguimento)",
      "Alunos que mantêm registos dos testes da água e da alimentação durante um ciclo (inquérito de seguimento)",
      "Taxa de sobrevivência e FCR comunicados na colheita, comparados com o plano",
      "Alunos que têm lucro no primeiro ciclo, quando os registos o permitem"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, ou um telefone com uma folha de cálculo ou uma aplicação de notas",
      "Uma calculadora (a calculadora do telefone serve)",
      "Um termómetro, tiras de pH e um disco de Secchi feito em casa (prato branco, tinta, pau)",
      "Uma fita métrica para o tanque",
      "Cerca de 75 minutos no total, em sessões curtas, mais prática num tanque"
    ],
    facilitatorNotes: [
      "Dê as Lições 3 e 4 num tanque a funcionar: façam juntos a verificação de madrugada, os testes de Secchi e de pH e uma pesagem de amostra.",
      "Convide um extensionista das pescas para explicar as autorizações e as maternidades registadas no seu país ou condado.",
      "Nunca dê doses de medicamentos nem de químicos; mande os alunos com peixe doente ao seu extensionista ou a um veterinário.",
      "Troque os preços de exemplo por orçamentos locais de alevinos, ração e peixe antes da lição dos custos, e diga claramente que são exemplos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
