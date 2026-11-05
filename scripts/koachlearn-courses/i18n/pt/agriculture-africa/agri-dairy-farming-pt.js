"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-dairy-farming.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept from the English: no drug, vaccine or hormone doses or withdrawal periods as numbers; follow the vet and the label.

const ILRI_MANUAL = { name: "ILRI: Manual de formação para pequenos produtores de leite (Goopy e Gakige, ILRI Manual 24, 2.ª edição, 2019)", url: "https://hdl.handle.net/10568/77004" };
const FAO_PRESERVE = { name: "FAO, Produção e produtos lácteos: conservação do leite (arrefecer a 4 °C nas 3 a 4 horas após a ordenha)", url: "https://www.fao.org/dairy-production-products/processing/milk-preservation/en" };
const FAO_TESTING = { name: "FAO, Produção e produtos lácteos: qualidade e testes do leite", url: "https://www.fao.org/dairy-production-products/products/quality-and-testing/en" };
const FAO_HEALTH = { name: "FAO, Produção e produtos lácteos: saúde animal (a mastite baixa a produção e a qualidade do leite)", url: "https://www.fao.org/dairy-production-products/production/animal-health/en" };
const MU_CMT = { name: "University of Missouri Extension: Usar o California Mastitis Test (procedimento e interpretação)", url: "https://extension.missouri.edu/publications/g3653" };
const KDB = { name: "Kenya Dairy Board (regula o setor do leite no Quénia; licenças para quem manuseia leite)", url: "https://www.kdb.go.ke/" };
const KDB_PERMITS = { name: "Kenya Dairy Board: requisitos de licenciamento", url: "https://www.kdb.go.ke/licensing-requirement/" };

module.exports = {
  id: "agri-dairy-farming-pt",
  lang: "pt",
  translationOf: "agri-dairy-farming",
  category: "Agriculture (Africa)",
  name: "Produção de Leite: Gado Leiteiro e Higiene do Leite",
  skills: "Escolher vacas e cabras leiteiras, Montar um estábulo de estabulação permanente, Ordenhar com higiene, Detetar e testar a mastite, Arrefecer e vender leite de qualidade, Criar vitelos e calcular o custo por litro",
  outcome: "gerir uma pequena exploração de leite que produz leite limpo que o comprador aceita: escolher e alojar as suas vacas ou cabras, ordenhá-las com uma rotina limpa, detetar cedo a mastite com o California Mastitis Test, arrefecer e vender leite que passa nos testes de qualidade, criar vitelos saudáveis e calcular quanto lhe custa cada litro.",
  about: [
    "Este curso é para pequenos produtores de leite e produtores em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, no Burkina Faso e em toda a África que têm, ou pensam ter, vacas leiteiras ou cabras leiteiras. O leite limpo vende-se mais caro, é menos rejeitado e protege a saúde da família; o leite sujo e a mastite escondida comem o seu lucro sem se notar.",
    "O Capítulo 1 monta a exploração: escolher os animais, o estábulo de estabulação permanente e a alimentação para o leite, e uma rotina de ordenha limpa. O Capítulo 2 protege e vende o leite: a mastite e o California Mastitis Test, arrefecer e vender o leite a uma cooperativa ou a uma fábrica, e a criação de vitelos, os registos e o custo por litro. A alimentação é ensinada em detalhe no curso \"Nutrição Animal e Formulação de Rações com Ingredientes Locais\"; aqui aprende como a alimentação se liga ao leite e ao custo.",
    "Este curso nunca dá doses de medicamentos, vacinas ou hormonas nem intervalos de segurança. Siga sempre o seu veterinário ou técnico de saúde animal e o rótulo do produto. Os valores em dinheiro são só exemplos; use os seus próprios preços. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria exploração. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Faça duas páginas para a sua exploração de leite (ou para um exemplo, como 3 vacas em Kiambu ou 10 cabras leiteiras perto de Kumasi). Página 1, uma rotina de higiene da ordenha para afixar no local de ordenha: os passos desde preparar quem ordenha e os utensílios até arrefecer o leite, os sinais de mastite a procurar, quando faz um CMT e o que acontece ao leite de animais doentes ou tratados. Página 2, uma folha de custo por litro de um mês: todos os custos (alimentos e forragem, mão de obra, veterinário e reprodução, outros), os litros produzidos, o custo por litro, o preço que o seu comprador paga e uma mudança que vai fazer para baixar o custo por litro.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos produtores de leite e produtores em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, na África Ocidental francófona e noutras partes de África, com 1 a 20 vacas ou um pequeno rebanho de cabras leiteiras, muitas vezes em estabulação permanente ou semipermanente.",
    startingPoint: "Sabem alimentar, dar água e ordenhar os animais à mão e vender leite no local. Muitos ordenham sem uma rotina de higiene fixa, usam recipientes de plástico, só notam a mastite quando o leite parece mau e não sabem quanto lhes custa produzir um litro.",
    gap: "Os compradores e as cooperativas testam o leite e rejeitam ou pagam menos pelo leite azedo, com água ou com resíduos de medicamentos. A mastite escondida (subclínica) baixa a produção sem sinais visíveis. Os produtores precisam de uma rotina que dê leite limpo e frio, de uma forma de detetar cedo a mastite e de registos que mostrem se cada litro dá lucro.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o curso também existe em espanhol, francês e árabe",
      "Aparelhos: um telefone simples ou um smartphone; uma calculadora; registos em papel servem",
      "Tempo: lições de 4 a 6 minutos que cabem entre as horas de ordenha",
      "Muitas explorações não têm eletricidade nem tanque de arrefecimento de leite",
      "Saúde animal: nenhuma dose de medicamentos, vacinas ou hormonas nem número de intervalo de segurança; siga o veterinário e o rótulo",
      "Os valores em dinheiro são exemplos; os preços, as licenças e as regras dos compradores mudam de país para país e de comprador para comprador"
    ],
    prerequisites: "Nenhum. Os cursos \"Saúde e Maneio do Gado\" (verificações diárias de saúde) e \"Nutrição Animal e Formulação de Rações com Ingredientes Locais\" (rações) são bons companheiros."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a sua terra, o seu dinheiro, a sua forragem e o seu mercado", action: "escolher vacas ou cabras leiteiras e desenhar um estábulo de estabulação permanente com baia, comedouro, água e escoamento", standard: "indicando pelo menos quatro verificações que fez antes de comprar" },
    { id: "O2", condition: "Em cada ordenha", action: "fazer uma rotina de ordenha limpa, desde preparar quem ordenha e os utensílios até filtrar e tapar o leite", standard: "fazendo todos os passos pela ordem, sem saltar nenhum" },
    { id: "O3", condition: "Com uma vaca ou cabra em lactação", action: "procurar os sinais de mastite e fazer um California Mastitis Test em cada teta", standard: "registando o resultado de cada quarto ou metade e chamando o veterinário para qualquer animal positivo ou doente" },
    { id: "O4", condition: "Depois da ordenha, com ou sem tanque de arrefecimento", action: "arrefecer, guardar e entregar o leite para que passe nos testes de qualidade do comprador", standard: "chegando ao tanque ou ao comprador dentro do tempo que o comprador marca, sem nada acrescentado ao leite" },
    { id: "O5", condition: "Com os registos de um mês da exploração", action: "calcular o custo por litro de leite e compará-lo com o preço que o seu comprador paga", standard: "com todos os custos incluídos e as contas certas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Montar uma exploração de leite limpa",
      lessons: [
        {
          title: "Escolher vacas e cabras leiteiras",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher animais leiteiros que combinem com a sua alimentação, o seu dinheiro e o seu mercado.",
          text: [
            "Um animal leiteiro só é tão bom como a alimentação e o cuidado que lhe pode dar. Uma vaca Frísia (Holstein) de alta produção precisa de muita comida boa e de água todos os dias; se não lhe pode dar isso, um cruzamento com uma raça local, ou uma raça mais pequena como a Jersey ou a Ayrshire, pode dar-lhe mais lucro. Nas zonas mais secas, as raças locais resistentes e os seus cruzamentos, como os cruzamentos de zebu no norte da Nigéria ou o zebu Azawak no Níger e no Burkina Faso, aguentam melhor o calor e a forragem pobre.",
            "As cabras leiteiras servem para terrenos pequenos e orçamentos mais pequenos. Comem menos, custam menos, e o leite de cabra tem os seus próprios compradores. No Quénia, as cabras Saanen, Toggenburg e Alpina e os seus cruzamentos com cabras locais são criadas para leite.",
            "Antes de comprar, verifique: Tem forragem e água durante todo o ano, incluindo a época seca? Quem vai comprar o seu leite, e a que preço? Consegue chegar a um veterinário e a um serviço de inseminação artificial (IA)? Depois verifique o animal: compre a um produtor conhecido que tenha registos, procure um animal saudável e atento, com um úbere bem formado e quatro (vaca) ou duas (cabra) tetas a funcionar, pergunte pela produção de leite, pelos partos e pelas doenças anteriores, e peça a um veterinário ou técnico de saúde animal para a examinar antes de pagar."
          ],
          steps: ["Faça a lista da sua forragem e água para a época das chuvas e a época seca.", "Encontre o seu comprador e o preço por litro.", "Encontre o veterinário e o serviço de IA mais próximos.", "Escolha a raça ou o cruzamento que a sua alimentação consegue sustentar.", "Compre a um vendedor conhecido com registos; verifique o úbere, as tetas e a saúde.", "Peça a um veterinário para examinar o animal antes de pagar."],
          words: [["Raça leiteira", "uma raça criada sobretudo para leite, como as vacas Frísia, Jersey ou Ayrshire, ou as cabras Saanen e Toggenburg."], ["Cruzamento", "um animal cujos pais são de duas raças diferentes, muitas vezes uma raça leiteira estrangeira e uma raça local."], ["Inseminação artificial (IA)", "pôr sémen de um touro ou bode escolhido na fêmea, feito por um técnico formado."]],
          slides: [
            { title: "A alimentação decide a raça", bullets: ["As grandes produtoras precisam de muita comida boa e de água", "Cruzamentos e raças mais pequenas servem para menos comida", "Raças locais resistentes aguentam o calor e a época seca"] },
            { title: "Cabras leiteiras", bullets: ["Menos comida, menos dinheiro, menos espaço", "Saanen, Toggenburg, Alpina e cruzamentos", "Encontre primeiro compradores de leite de cabra"] },
            { title: "Antes de comprar", bullets: ["Forragem e água durante todo o ano?", "Um comprador e um preço por litro?", "Um veterinário e um serviço de IA perto?"] },
            { title: "Verifique o animal", bullets: ["Vendedor conhecido com registos", "Saudável e atento; bom úbere; todas as tetas a funcionar", "O veterinário examina-a antes de pagar"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Escreva a sua própria lista de compra: a sua forragem e água para a época seca, o seu comprador e o preço, o veterinário e o serviço de IA mais próximos, a raça ou o cruzamento que consegue alimentar, e cinco coisas que vai verificar no animal antes de pagar.",
          youCanNow: "escolher uma raça leiteira que combine com a sua alimentação e o seu mercado e verificar bem um animal antes de o comprar.",
          quickCheck: [
            { objective: "O1", q: "Tem pouca forragem na época seca. Qual é a escolha mais sensata?", options: ["Comprar a Frísia de maior produção que encontrar", "Comprar um cruzamento ou uma raça mais pequena que a sua comida consiga sustentar", "Comprar mais vacas para que algumas sobrevivam", "Comprar agora e pensar na forragem depois"], answer: 1, why: "Uma vaca só dá o que a sua comida permite; um cruzamento ou uma raça mais pequena serve para pouca forragem." },
            { objective: "O1", q: "Que verificação deve fazer antes de pagar uma vaca?", options: ["Pedir a um veterinário para a examinar e ver os registos dela", "Contar as manchas dela", "Ver só a cor dela", "Perguntar ao vendedor se ela é boa"], answer: 0, why: "O exame do veterinário e os registos mostram a saúde, a produção anterior e os partos." }
          ]
        },
        {
          title: "Estabulação permanente e alimentação para o leite",
          objectives: ["O1"],
          minutes: 6,
          goal: "Desenhar um estábulo de estabulação permanente e planear a comida e a água para o leite.",
          text: [
            "Na estabulação permanente (em inglês, \"zero-grazing\"), os animais ficam num estábulo e você leva-lhes a comida, como capim-elefante (Napier) cortado, outras forragens e restos de culturas. Poupa terra e deixa-o controlar a alimentação, mas precisa de trabalho todos os dias e de boa higiene.",
            "Um bom estábulo tem: um telhado para dar sombra e proteger da chuva; uma baia para cada vaca com cama seca e macia para ela se deitar; um chão inclinado para a urina e a água escorrerem; um comedouro e um bebedouro fáceis de limpar; um lugar limpo e separado para ordenhar; um curral para os vitelos; uma fossa de estrume longe do local de ordenha; e um armazém para a comida. Para as cabras, um chão elevado de ripas mantém-nas secas. Tire o estrume todos os dias, porque a cama suja é uma das principais causas de mastite.",
            "O leite é feito de comida e água. Uma vaca em lactação precisa de muita água limpa durante todo o dia, de boa forragem grosseira e de energia, proteína e minerais extra em equilíbrio; o leite baixa depressa quando falta água ou comida. Como fazer uma ração com alimentos locais é ensinado no curso \"Nutrição Animal e Formulação de Rações com Ingredientes Locais\". Aqui, lembre-se de duas coisas: registe quanto custa cada alimento, porque a comida costuma ser o seu maior custo, e mude os alimentos devagar."
          ],
          steps: ["Marque um estábulo com telhado num terreno que escoe bem.", "Dê a cada animal uma baia com cama seca e chão inclinado.", "Ponha o comedouro e o bebedouro onde sejam fáceis de encher e limpar.", "Acrescente um lugar limpo para ordenhar, um curral para vitelos e um armazém para a comida.", "Ponha a fossa de estrume longe da ordenha e da água.", "Tire o estrume todos os dias; registe a comida comprada e o seu custo."],
          words: [["Estabulação permanente (zero-grazing)", "manter os animais num estábulo e levar-lhes toda a comida, em vez de os deixar pastar."], ["Cama", "material seco e macio no chão onde os animais se deitam, como serradura, capim seco ou areia."], ["Forragem grosseira", "comida volumosa como capim, forragem, feno e restos de culturas."]],
          slides: [
            { title: "Estabulação permanente", bullets: ["Os animais ficam no estábulo; você leva a comida", "Poupa terra; você controla a alimentação", "Precisa de trabalho diário e de higiene"] },
            { title: "Um bom estábulo", bullets: ["Telhado; uma baia por vaca; cama seca", "Chão inclinado que escoa", "Comedouro e bebedouro fáceis de limpar"] },
            { title: "Mantenha-o limpo", bullets: ["Lugar de ordenha limpo e separado", "Curral para vitelos; armazém para a comida", "Fossa de estrume longe da ordenha; limpar todos os dias"] },
            { title: "A comida faz o leite", bullets: ["Muita água limpa durante todo o dia", "Forragem grosseira mais energia, proteína e minerais em equilíbrio", "Registe o custo da comida; mude os alimentos devagar"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Desenhe uma planta simples do seu estábulo (ou do que vai construir): baias, cama, inclinação do chão, comedouro, bebedouro, lugar de ordenha, curral para vitelos, armazém para a comida e fossa de estrume. Marque uma coisa que vai corrigir primeiro.",
          youCanNow: "desenhar um estábulo de estabulação permanente que mantém os animais secos e limpos e explicar como a comida e a água se transformam em leite.",
          quickCheck: [
            { objective: "O1", q: "Porque é que o chão de uma baia de estabulação permanente deve ser inclinado?", options: ["Para a vaca poder escorregar para fora", "Para a urina e a água escorrerem e a cama ficar seca", "Para poupar cimento", "Para a comida rolar até à vaca"], answer: 1, why: "Um chão e uma cama secos mantêm os úberes limpos e baixam a mastite." },
            { objective: "O1", q: "Onde deve ficar a fossa de estrume?", options: ["Ao lado do bebedouro", "Dentro do local de ordenha", "Longe do local de ordenha e da água", "Debaixo do armazém da comida"], answer: 2, why: "O estrume perto da ordenha ou da água espalha sujidade e micróbios no leite." }
          ]
        },
        {
          title: "Uma rotina de ordenha limpa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ordenhar uma vaca ou uma cabra com uma rotina limpa, passo a passo.",
          text: [
            "Os micróbios entram no leite a partir de mãos sujas, úberes sujos, recipientes sujos e do ar de um estábulo sujo. Uma rotina fixa, feita da mesma maneira em cada ordenha, mantém-nos fora. Ordenhe às mesmas horas todos os dias, num lugar limpo, com calma: um animal assustado solta menos leite.",
            "Use recipientes de metal lisos (alumínio ou aço inoxidável) que são fáceis de limpar. Os bidões de plástico riscam-se e guardam sujidade, e muitos compradores rejeitam o leite que vem neles. Lave os recipientes depois de cada uso com água limpa e detergente, enxague e deixe-os secar virados para baixo num estrado ao sol.",
            "Ordenhe primeiro os animais saudáveis e por último qualquer animal doente ou tratado. Guarde à parte o leite de um animal tratado com um medicamento e não o venda até passar o intervalo de segurança que está no rótulo do produto, ou que o veterinário lhe der."
          ],
          steps: ["Use roupa limpa; mantenha as unhas curtas; lave as mãos com sabão.", "Traga recipientes de metal limpos e secos, uma caneca de fundo escuro e um filtro ou um coador limpo.", "Prenda ou acalme o animal com calma no lugar de ordenha limpo.", "Lave as tetas (e o úbere só se estiver sujo) com água morna limpa e seque-as com um pano limpo ou papel diferente para cada animal.", "Tire os primeiros jatos de cada teta para a caneca de fundo escuro e procure coágulos, grumos ou leite aguado.", "Ordenhe depressa e até ao fim com a mão inteira, sem puxar com os dedos.", "Mergulhe ou pulverize as tetas depois da ordenha se o veterinário aconselhar, e dê comida para o animal ficar de pé durante um tempo.", "Filtre o leite, tape-o e comece logo a arrefecê-lo."],
          words: [["Caneca de fundo escuro (strip cup)", "uma caneca com uma placa ou um pano escuro em cima; os primeiros jatos de leite mostram nela coágulos ou grumos."], ["Desinfetante de tetas", "um líquido desinfetante onde se mergulham as tetas depois da ordenha para matar micróbios; use um que o veterinário recomende, como diz o rótulo."], ["Intervalo de segurança", "o tempo depois de dar um medicamento em que o leite ou a carne não podem ser vendidos nem comidos; está escrito no rótulo ou é dado pelo veterinário."]],
          slides: [
            { title: "De onde vêm os micróbios", bullets: ["Mãos e úberes sujos", "Recipientes sujos", "Um estábulo sujo e com pó"] },
            { title: "Antes da ordenha", bullets: ["Roupa limpa, unhas curtas, mãos lavadas", "Recipientes de metal limpos e secos", "Lavar e secar as tetas: um pano por animal"] },
            { title: "Durante a ordenha", bullets: ["Caneca de fundo escuro: ver o primeiro leite", "Ordenhar depressa e até ao fim, com a mão inteira", "Saudáveis primeiro, doentes ou tratados por último"] },
            { title: "Depois da ordenha", bullets: ["Desinfetante de tetas se o veterinário aconselhar", "Filtrar, tapar e arrefecer logo o leite", "Animais tratados: não vender até o rótulo permitir"] }
          ],
          sources: [ILRI_MANUAL, FAO_TESTING],
          tryIt: "Veja ou faça uma ordenha na sua exploração e marque cada passo desta lição. Escreva todos os passos que faltaram e uma mudança para fazer amanhã, como um pano de secar por animal ou uma lata de metal em vez de um bidão.",
          youCanNow: "ordenhar uma vaca ou uma cabra com uma rotina limpa que mantém os micróbios fora do leite.",
          quickCheck: [
            { objective: "O2", q: "Porque se tiram os primeiros jatos de leite para a caneca de fundo escuro?", options: ["Para dar ao gato", "É o leite mais rico", "Para ver coágulos ou grumos que mostram mastite", "Para acalmar a vaca"], answer: 2, why: "A caneca de fundo escuro mostra cedo o leite anormal, antes de se misturar com o leite bom." },
            { objective: "O2", q: "Uma vaca foi tratada pelo veterinário há dois dias. O que faz ao leite dela?", options: ["Mistura-o com o resto; um pouco não faz mal", "Vende-o a outro comprador", "Dá-o ao vitelo dela sem perguntar", "Guarda-o à parte e não o vende até passar o intervalo de segurança do rótulo ou do veterinário"], answer: 3, why: "Os resíduos de medicamentos tornam o leite perigoso e os compradores testam-nos; o rótulo ou o veterinário dão o tempo de espera." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Montar uma exploração de leite limpa",
        questions: [
          { objective: "O1", q: "O que deve decidir a raça leiteira que compra?", options: ["A comida, a água e o cuidado que lhe pode dar durante todo o ano", "A cor de que mais gosta", "O que o seu vizinho comprou", "O animal mais barato do mercado"], answer: 0, why: "Um animal leiteiro só produz o que a sua comida e o seu cuidado permitem." },
          { objective: "O1", q: "O que NÃO faz parte de um bom estábulo de estabulação permanente?", options: ["Cama seca em cada baia", "Um chão que escoa", "Uma fossa de estrume ao lado do lugar de ordenha", "Comedouro e bebedouro fáceis de limpar"], answer: 2, why: "O estrume tem de ficar longe da ordenha para manter os micróbios fora do leite." },
          { objective: "O2", q: "Qual é o melhor recipiente para o leite?", options: ["Um bidão de plástico", "Uma lata limpa e lisa de alumínio ou aço inoxidável", "Um balde velho de tinta", "Qualquer recipiente com tampa"], answer: 1, why: "O metal liso é fácil de limpar; o plástico risca-se e guarda sujidade." },
          { objective: "O2", q: "Como deve secar as tetas antes da ordenha?", options: ["Com uma toalha partilhada por todos os animais", "Deixá-las molhadas", "Com a sua roupa", "Com um pano limpo ou papel diferente para cada animal"], answer: 3, why: "Uma toalha partilhada leva os micróbios da mastite de um animal para o outro." },
          { objective: "O2", q: "Por que ordem deve ordenhar os seus animais?", options: ["Os saudáveis primeiro, os doentes ou tratados por último", "Os doentes primeiro", "Qualquer ordem", "Os mais novos primeiro"], answer: 0, why: "Ordenhar os animais doentes por último impede os micróbios de passar para os úberes saudáveis." }
        ]
      }
    },
    {
      name: "Capítulo 2: Úberes saudáveis, leite seguro e lucro",
      lessons: [
        {
          title: "Mastite: sinais, prevenção e o CMT",
          objectives: ["O3"],
          minutes: 6,
          goal: "Verificar se um animal tem mastite e fazer um California Mastitis Test.",
          text: [
            "A mastite é uma infeção e um inchaço do úbere. Baixa a produção e a qualidade do leite e é uma das doenças que mais custam numa exploração de leite. A mastite clínica vê-se: um quarto quente, inchado ou dorido; leite com coágulos, grumos, aguado ou com sangue; e às vezes febre e falta de apetite. A mastite subclínica não mostra nada que se veja, mas o animal dá menos leite. É por isso que se faz o teste.",
            "O California Mastitis Test (CMT) encontra a mastite escondida na própria exploração. Precisa de uma raquete com quatro copos e do líquido do CMT (reagente). Tire um pouco de leite de cada teta para o seu próprio copo, junte a mesma quantidade de reagente, mexa em círculos e leia em poucos segundos. O leite que fica líquido é normal. Um gel, uma baba ou grumos mostram muitas células, o que aponta para mastite nesse quarto. Quanto mais forte o gel, mais forte a reação. Não faça o teste nos primeiros dias depois do parto, quando os resultados são naturalmente altos. O leite de cabra pode reagir mais forte mesmo quando é saudável, por isso pergunte ao veterinário como ler os resultados nas cabras.",
            "Previna a mastite com cama limpa e seca, a rotina de ordenha limpa, um desinfetante de tetas se o veterinário aconselhar, ordenhando por último os animais infetados e tratando só com o conselho do veterinário. Nunca dê antibióticos por sua conta: siga o veterinário e o rótulo. Registe cada caso e cada tratamento."
          ],
          steps: ["Veja e apalpe cada quarto para ver se está quente, inchado ou dorido.", "Veja o primeiro leite na caneca de fundo escuro para encontrar coágulos, grumos ou sangue.", "Para o CMT: deite fora os primeiros jatos e depois tire um pouco de leite de cada teta para o seu próprio copo.", "Incline a raquete para ficar a quantidade certa; junte a mesma quantidade de reagente.", "Mexa em círculos devagar e leia em poucos segundos: líquido é normal, gel quer dizer reação.", "Registe o resultado de cada quarto ou metade.", "Chame o veterinário para qualquer caso clínico ou resultado positivo; siga o veterinário e o rótulo."],
          words: [["Mastite", "infeção e inchaço do úbere que baixa a produção e a qualidade do leite."], ["Mastite subclínica", "mastite sem sinais visíveis; só um teste como o CMT a mostra."], ["Quarto", "uma das quatro partes do úbere de uma vaca, cada uma com a sua teta."], ["Reagente", "o líquido usado num teste que reage com o leite."]],
          slides: [
            { title: "A mastite custa dinheiro", bullets: ["Infeção e inchaço do úbere", "Menos leite, menos qualidade", "Clínica: vê-se. Subclínica: não se vê"] },
            { title: "Sinais clínicos", bullets: ["Quarto quente, inchado ou dorido", "Leite com coágulos, grumos, aguado ou com sangue", "Às vezes febre e sem vontade de comer"] },
            { title: "O CMT", bullets: ["Um copo por teta; a mesma quantidade de reagente", "Mexer em círculos e ler em poucos segundos", "Líquido = normal; gel ou baba = reação"] },
            { title: "Prevenir e agir", bullets: ["Cama seca, rotina limpa, desinfetante de tetas se aconselhado", "Animais infetados ordenhados por último", "O veterinário decide o tratamento; siga o rótulo"] }
          ],
          sources: [MU_CMT, FAO_HEALTH],
          tryIt: "Faça um CMT a uma vaca ou cabra (peça emprestados a raquete e o reagente à sua cooperativa, ao veterinário ou ao extensionista se não os tiver). Registe no caderno o resultado de cada quarto ou metade e escreva o que vai fazer em caso de reação.",
          youCanNow: "reconhecer os sinais de mastite, fazer um CMT em cada teta, registar o resultado e saber quando chamar o veterinário.",
          quickCheck: [
            { objective: "O3", q: "O leite da sua vaca parece normal, mas a produção dela baixou. O que pode encontrar uma mastite escondida?", options: ["Esperar até o leite mostrar coágulos", "Um California Mastitis Test", "Dar-lhe mais sal", "Cheirar o leite"], answer: 1, why: "A mastite subclínica não tem sinais visíveis; o CMT mostra-a." },
            { objective: "O3", q: "Num CMT, um copo fica com um gel grosso. O que quer dizer?", options: ["O teste foi bem feito e o quarto está saudável", "Pôs leite a menos", "O leite é muito rico", "Uma reação forte nesse quarto; registe-a e chame o veterinário"], answer: 3, why: "Um gel quer dizer muitas células, um sinal de mastite nesse quarto." }
          ]
        },
        {
          title: "Arrefecer, manusear e vender o leite",
          objectives: ["O4"],
          minutes: 6,
          goal: "Arrefecer e entregar leite que passa nos testes de qualidade do comprador.",
          text: [
            "O leite fresco tem defesas naturais que travam os micróbios só durante cerca de três a quatro horas depois da ordenha. A FAO (a agência das Nações Unidas para a alimentação e a agricultura) aconselha arrefecê-lo a 4 °C dentro desse tempo para manter a qualidade. Sem tanque de arrefecimento, ponha a lata de metal tapada em água fresca e limpa, corrente ou guardada, à sombra, e leve o leite depressa ao tanque do centro de recolha. Nunca deixe o leite ao sol.",
            "A maioria dos pequenos produtores vende a uma cooperativa de leite, a um centro de recolha, a uma fábrica, ou a uma pequena leitaria (por exemplo, no Burkina Faso as mini-leitarias compram leite a pastores e produtores). Na entrega, o comprador testa o seu leite. Os testes mais comuns são: ver e cheirar; o teste do álcool e o teste da fervura, que mostram o leite que está a azedar; o lactómetro, que mostra o leite com água acrescentada; e, em algumas fábricas, um teste de resíduos de medicamentos. O leite que falha é rejeitado ou pago a menos.",
            "Nunca acrescente água, farinha, conservantes ou qualquer outra coisa ao leite: é fazer batota, muitas vezes é ilegal, e os testes descobrem. Pergunte ao comprador como paga (por litro, às vezes com um prémio pela qualidade ou pela gordura), quando paga (muitas vezes todos os meses, pelo banco ou por dinheiro móvel) e que descontos faz. Leia todo o contrato antes de assinar. Vender leite cru ao público pode precisar de uma licença: no Quénia, o Kenya Dairy Board dá licenças a quem manuseia leite, por isso veja as regras dele ou da autoridade do leite do seu país."
          ],
          steps: ["Filtre e tape o leite logo depois da ordenha.", "Arrefeça-o logo: no tanque, ou com a lata em água fresca à sombra.", "Entregue no centro de recolha ou ao comprador dentro do tempo que eles marcam.", "Veja os testes e peça os resultados.", "Registe os litros entregues, qualquer rejeição e o motivo.", "Compare cada pagamento com os seus registos de entrega."],
          words: [["Lactómetro", "um medidor que flutua e mede quão pesado (denso) é o leite; a água acrescentada torna o leite mais leve."], ["Teste do álcool", "misturar leite com álcool; o leite que está a azedar forma coágulos."], ["Centro de recolha", "um lugar onde os produtores entregam o leite para ser testado, arrefecido e enviado para uma fábrica."]],
          slides: [
            { title: "Arrefeça depressa", bullets: ["As defesas naturais duram cerca de 3 a 4 horas", "FAO: arrefecer a 4 °C dentro desse tempo", "Sem tanque: lata em água fresca, à sombra"] },
            { title: "Os testes do comprador", bullets: ["Ver e cheirar", "Álcool e fervura: leite a azedar", "Lactómetro: água acrescentada; alguns testam medicamentos"] },
            { title: "Nunca acrescente nada", bullets: ["Nem água, nem farinha, nem conservantes", "É batota, muitas vezes ilegal, e os testes descobrem"] },
            { title: "Receber o pagamento", bullets: ["Por litro; pergunte pelos prémios de qualidade", "Quando e como pagam; descontos", "Leia os contratos; veja as licenças (Quénia: KDB)"] }
          ],
          sources: [FAO_PRESERVE, FAO_TESTING, KDB, KDB_PERMITS],
          tryIt: "Visite ou telefone para o centro de recolha, a cooperativa ou o comprador mais próximo. Pergunte: que testes fazem, a hora limite em que aceitam leite, como e quando pagam e que descontos fazem. Escreva as respostas e compare-as com a forma como trata o leite agora.",
          youCanNow: "arrefecer e manusear o leite para manter a qualidade, explicar os testes do comprador e verificar como é pago.",
          quickCheck: [
            { objective: "O4", q: "Não tem tanque de arrefecimento. Qual é a melhor coisa a fazer depois da ordenha?", options: ["Pôr a lata de metal tapada em água fresca à sombra e entregar depressa", "Deixar o leite ao sol para ficar quente", "Acrescentar um pouco de água para o manter fresco", "Guardá-lo até amanhã e entregar as duas ordenhas juntas"], answer: 0, why: "Arrefecer logo e entregar depressa impede os micróbios de se multiplicarem." },
            { objective: "O4", q: "O que descobre o teste do lactómetro no centro de recolha?", options: ["Mastite num quarto", "Leite com água acrescentada", "A raça da vaca", "Leite frio demais"], answer: 1, why: "A água acrescentada torna o leite menos denso, e o lactómetro mostra isso." }
          ]
        },
        {
          title: "Criação de vitelos, registos e custo por litro",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular o seu custo por litro e manter os registos que o alimentam.",
          text: [
            "Os seus vitelos e cabritos são o seu rebanho de amanhã. Garanta que o recém-nascido bebe colostro, o primeiro leite grosso, o mais cedo possível depois do nascimento, de preferência nas primeiras horas, porque leva a proteção da mãe contra as doenças. Mantenha os vitelos num curral limpo, seco e separado, dê água limpa, ofereça cedo bom feno ou forragem macia e uma ração para vitelos para o estômago se desenvolver, e desmame quando o extensionista ou o veterinário disser que o vitelo já come comida sólida suficiente. Siga o plano do veterinário para o cuidado do umbigo, a desparasitação e a vacinação.",
            "Faça registos simples todos os dias: litros por animal em cada ordenha, comida comprada e o seu custo, sinais de cio e datas de IA ou de cobrição, datas de parto, tratamentos com a data em que o leite pode voltar a ser vendido, leite entregue, rejeições e pagamentos. Um caderno serve; uma folha de cálculo no telefone facilita as contas.",
            "Custo por litro = todos os custos do mês divididos pelos litros produzidos. Exemplo (os números são só um exemplo): 3 vacas no Quénia produzem 1,050 litros num mês. Custos: alimentos e forragem KES 27,000, mão de obra KES 9,000, veterinário e IA KES 3,000, outros KES 3,000; total KES 42,000 (KES quer dizer xelins quenianos). Custo por litro = 42,000 / 1,050 = KES 40. Se o seu comprador paga menos do que o seu custo por litro, perde dinheiro em cada litro; veja primeiro o desperdício de comida, as perdas por mastite e o leite rejeitado."
          ],
          steps: ["Dê colostro o mais cedo possível depois do nascimento.", "Mantenha o vitelo num curral limpo e seco com água, feno e ração para vitelos.", "Registe os litros, a comida, a reprodução, os partos, os tratamentos, as entregas e os pagamentos.", "No fim do mês, some todos os custos.", "Divida o total dos custos pelos litros produzidos: é o seu custo por litro.", "Compare com o preço pago e escolha uma mudança para baixar o custo."],
          words: [["Colostro", "o primeiro leite grosso e amarelo depois do parto; protege o recém-nascido contra as doenças."], ["Desmame", "passar um animal jovem do leite para a comida sólida."], ["Custo por litro", "todos os custos do leite num período divididos pelos litros que produziu."]],
          slides: [
            { title: "Os vitelos são o rebanho de amanhã", bullets: ["Colostro o mais cedo possível depois do nascimento", "Curral limpo e seco; água, feno e ração para vitelos cedo", "Plano do veterinário para umbigo, parasitas e vacinas"] },
            { title: "Registos diários", bullets: ["Litros por animal; comida e o seu custo", "Cio, IA, partos, tratamentos", "Entregas, rejeições, pagamentos"] },
            { title: "Custo por litro", bullets: ["Todos os custos do mês / litros produzidos", "Exemplo: KES 42,000 / 1,050 L = KES 40 por litro", "Os números são exemplos: use os seus"] },
            { title: "Se não dá lucro", bullets: ["Preço abaixo do custo: perde em cada litro", "Veja o desperdício de comida, a mastite, o leite rejeitado", "Escolha uma mudança e acompanhe-a"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Tarefa final: escreva a sua rotina de higiene da ordenha para afixar no local de ordenha e depois preencha uma folha de custo por litro do mês passado (ou de um mês de exemplo): todos os custos, os litros produzidos, o custo por litro, o preço do seu comprador e uma mudança que vai fazer.",
          youCanNow: "criar vitelos saudáveis, fazer os registos da exploração de leite e calcular o custo de cada litro de leite.",
          quickCheck: [
            { objective: "O5", q: "Quando deve um vitelo recém-nascido beber colostro?", options: ["Depois de uma semana", "Só se parecer fraco", "O mais cedo possível depois do nascimento, de preferência nas primeiras horas", "Nunca; dê só água"], answer: 2, why: "O colostro leva a proteção da mãe, e o vitelo aproveita-o melhor nas primeiras horas." },
            { objective: "O5", q: "Os custos do mês são KES 36,000 e as vacas produziram 900 litros. Qual é o custo por litro?", options: ["KES 25", "KES 32", "KES 36", "KES 40"], answer: 3, why: "36,000 a dividir por 900 dá 40." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Úberes saudáveis, leite seguro e lucro",
        questions: [
          { objective: "O3", q: "Qual é um sinal de mastite clínica?", options: ["Um quarto quente e inchado e coágulos no leite", "Um pelo brilhante", "Ruminar", "Um bom apetite"], answer: 0, why: "Calor, inchaço, dor e leite anormal são sinais de mastite clínica." },
          { objective: "O3", q: "Um CMT mostra uma reação num quarto. O que faz?", options: ["Dá um antibiótico que tem em casa", "Regista e chama o veterinário; segue o conselho dele e o rótulo", "Ignora; o leite parece bom", "Vende a vaca hoje"], answer: 1, why: "O veterinário decide o tratamento; tratar em casa sem conselho arrisca resíduos e resistência aos medicamentos." },
          { objective: "O4", q: "Segundo a FAO, quanto tempo pode passar até o leite ser arrefecido a cerca de 4 °C?", options: ["Até uma semana", "Até ao dia seguinte", "Cerca de três a quatro horas depois da ordenha", "Só se arrefece com tempo quente"], answer: 2, why: "As defesas naturais do leite travam os micróbios só durante cerca de três a quatro horas." },
          { objective: "O4", q: "O centro de recolha faz um teste do álcool. O que mostra?", options: ["Água acrescentada", "A gordura do leite", "A raça da vaca", "Leite que está a azedar"], answer: 3, why: "O leite que está a azedar forma coágulos quando se mistura com álcool." },
          { objective: "O5", q: "O seu custo por litro é KES 45 e o comprador paga KES 40. O que quer dizer?", options: ["Perde cerca de KES 5 em cada litro", "Ganha KES 5 por litro", "Fica sem lucro nem perda", "Nada; os preços não importam"], answer: 0, why: "Quando o custo por litro é maior do que o preço, cada litro dá prejuízo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Produção de Leite: Gado Leiteiro e Higiene do Leite",
    questions: [
      { objective: "O1", q: "Antes de comprar vacas leiteiras, a primeira coisa a verificar é:", options: ["A cor das vacas", "Se tem forragem e água durante todo o ano, incluindo a época seca", "Qual é a raça mais famosa", "Quantas vacas tem o seu vizinho"], answer: 1, why: "A comida e a água decidem quanto leite uma vaca pode dar." },
      { objective: "O1", q: "Porque é que um produtor pode escolher cabras leiteiras em vez de vacas?", options: ["As cabras não precisam de água", "As cabras nunca ficam doentes", "As cabras comem menos e servem para terrenos e orçamentos pequenos", "O leite de cabra não precisa de higiene"], answer: 2, why: "As cabras precisam de menos comida, espaço e dinheiro, o que serve a muitos pequenos produtores." },
      { objective: "O1", q: "Na estabulação permanente, porque tem de tirar o estrume todos os dias?", options: ["A cama suja é uma das principais causas de mastite", "Para o vender todos os dias", "As vacas não gostam do cheiro", "Não é preciso"], answer: 0, why: "Os úberes deitam-se sobre a cama; a sujidade dela espalha os micróbios da mastite." },
      { objective: "O1", q: "O que ajuda a manter seca uma baia de estabulação permanente?", options: ["Um chão plano sem escoamento", "Nenhum telhado", "Palha molhada", "Um chão inclinado para um escoamento"], answer: 3, why: "Um chão inclinado faz escorrer a urina e a água." },
      { objective: "O2", q: "Qual é o primeiro passo de uma rotina de ordenha limpa?", options: ["Começar logo a ordenhar", "Quem ordenha com roupa limpa, unhas curtas e mãos lavadas com sabão", "Deitar o leite num bidão", "Dar de comer ao vitelo"], answer: 1, why: "Mãos e roupa limpas impedem os micróbios de entrar no leite desde o início." },
      { objective: "O2", q: "Porque se ordenha com a mão inteira em vez de puxar com os dedos?", options: ["É mais rápido de aprender", "Gasta menos leite", "Magoa menos a teta e ajuda a tirar o leite todo", "Os dedos são mais sujos"], answer: 2, why: "Ordenhar com a mão inteira evita ferir a teta e esvazia o úbere." },
      { objective: "O2", q: "Depois da ordenha, o que deve fazer primeiro com o leite?", options: ["Filtrá-lo, tapá-lo e começar logo a arrefecê-lo", "Deixá-lo destapado a arrefecer no estábulo", "Acrescentar água para render mais", "Misturar com o leite de ontem"], answer: 0, why: "Filtrar, tapar e arrefecer depressa mantêm a sujidade e os micróbios fora." },
      { objective: "O2", q: "Porque se dá comida à vaca logo depois da ordenha?", options: ["Para a fazer dormir", "Para aumentar a gordura", "Para ela ficar de pé enquanto a teta fecha", "Não serve para nada"], answer: 2, why: "Ficar de pé enquanto o canal da teta fecha impede a sujidade da cama de entrar nele." },
      { objective: "O3", q: "A mastite subclínica é:", options: ["Mastite com um quarto inchado e quente", "Uma doença só das cabras", "Um problema de alimentação", "Mastite sem sinais visíveis, encontrada por um teste"], answer: 3, why: "Só um teste como o CMT mostra a mastite subclínica." },
      { objective: "O3", q: "Num CMT, como se lê o resultado?", options: ["Esperar uma hora e depois cheirar", "Mexer em círculos e ler em poucos segundos: líquido é normal, gel é uma reação", "Provar", "Ferver primeiro"], answer: 1, why: "A reação lê-se em poucos segundos; gel quer dizer muitas células." },
      { objective: "O3", q: "Quando NÃO deve confiar num CMT numa vaca?", options: ["Nos primeiros dias depois do parto", "De manhã", "Quando ela está calma", "Depois de comer"], answer: 0, why: "As células estão naturalmente altas logo depois do parto, por isso os resultados enganam." },
      { objective: "O3", q: "Quem decide como tratar a mastite?", options: ["O vizinho", "O comprador do leite", "O seu veterinário, seguindo o rótulo do produto", "Um vídeo na internet"], answer: 2, why: "O tratamento e o tempo de espera antes de vender o leite vêm do veterinário e do rótulo." },
      { objective: "O4", q: "Que recipiente faz com que o leite seja mais vezes rejeitado?", options: ["Uma lata de alumínio limpa", "Uma lata de aço inoxidável", "Uma bilha de metal limpa", "Um bidão de plástico riscado"], answer: 3, why: "Os riscos do plástico guardam sujidade e micróbios, e muitos compradores rejeitam o leite que vem neles." },
      { objective: "O4", q: "Um comerciante sugere acrescentar um pouco de água a cada lata. Você:", options: ["Recusa: é batota, muitas vezes ilegal, e o lactómetro descobre", "Aceita se os preços estiverem baixos", "Acrescenta farinha em vez de água", "Acrescenta água só na época seca"], answer: 0, why: "Acrescentar qualquer coisa ao leite é batota e os testes do comprador descobrem." },
      { objective: "O4", q: "O teste da fervura verifica:", options: ["Água acrescentada", "Leite azedo ou anormal", "A idade do animal", "A gordura do leite"], answer: 1, why: "O leite azedo ou anormal coalha quando é fervido." },
      { objective: "O4", q: "No Quénia, que organismo dá licenças a quem manuseia leite?", options: ["O Kenya Wildlife Service", "O serviço de águas do condado", "O Kenya Dairy Board", "O Pest Control Products Board"], answer: 2, why: "O Kenya Dairy Board regula o setor do leite e dá licenças a quem manuseia leite." },
      { objective: "O5", q: "O custo por litro é:", options: ["O preço que o comprador paga", "Só o custo da comida", "Os litros a dividir pelas vacas", "Todos os custos do período a dividir pelos litros produzidos"], answer: 3, why: "Inclui todos os custos, não só a comida." },
      { objective: "O5", q: "Os custos do mês são KES 50,000 e produziu 1,250 litros. Custo por litro?", options: ["KES 25", "KES 40", "KES 50", "KES 62"], answer: 1, why: "50,000 a dividir por 1,250 dá 40." },
      { objective: "O5", q: "Que registo precisa para saber quando o leite de uma vaca tratada pode voltar a ser vendido?", options: ["A data do tratamento e o intervalo de segurança do rótulo ou do veterinário", "A cor dela", "O tempo que faz", "O preço da comida"], answer: 0, why: "Registar o tratamento e o seu intervalo de segurança impede que os resíduos de medicamentos cheguem aos compradores." },
      { objective: "O5", q: "O seu custo por litro é maior do que o preço. Um bom primeiro lugar para procurar é:", options: ["Comprar mais vacas de uma vez", "Vender leite sem teste", "O desperdício de comida, as perdas por mastite e o leite rejeitado", "Deixar de fazer registos"], answer: 2, why: "A comida costuma ser o maior custo, e a mastite e as rejeições desperdiçam leite que pagou para produzir." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 6, 8, 9, 13, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Animais e estábulo", objective: "O1", notYet: "Não há ligação entre os animais, o estábulo e a comida que a exploração tem.", meets: "A rotina combina com os animais e o estábulo da exploração: um lugar de ordenha limpo, cama seca e o estrume longe.", exceeds: "Indica uma melhoria no estábulo com uma data, como um escoamento melhor ou um lugar de ordenha separado." },
      { name: "Rotina de ordenha", objective: "O2", notYet: "Faltam passos ou estão fora de ordem, por exemplo sem lavar as mãos ou sem secar as tetas.", meets: "Todos os passos, desde quem ordenha e os utensílios até filtrar, tapar e arrefecer, pela ordem.", exceeds: "Diz quem faz cada passo e como a rotina é verificada todas as semanas." },
      { name: "Verificação da mastite", objective: "O3", notYet: "A rotina não tem sinais de mastite nem CMT, ou há tratamento em casa sem o veterinário.", meets: "Lista os sinais, quando se faz um CMT, como se registam os resultados e chamar o veterinário para os positivos; o leite dos animais tratados fica de fora até o rótulo ou o veterinário permitir.", exceeds: "Inclui uma tabela simples de registo do CMT para cada animal e cada quarto." },
      { name: "Arrefecimento e entrega", objective: "O4", notYet: "O leite fica quente ou é entregue tarde; usam-se recipientes de plástico.", meets: "O leite é arrefecido logo e entregue dentro do tempo do comprador, em recipientes de metal, sem nada acrescentado.", exceeds: "Regista as horas de entrega, os resultados dos testes e qualquer rejeição com a sua causa." },
      { name: "Custo por litro", objective: "O5", notYet: "Faltam custos ou a conta está errada.", meets: "Todos os custos listados, custo por litro certo, comparado com o preço do comprador.", exceeds: "Indica uma mudança para baixar o custo por litro e como vai medir o efeito dela no mês seguinte." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Menos rejeições de leite no centro de recolha ou pelo comprador em 3 meses (registos de entrega)",
      "Alunos que fazem um CMT aos seus animais pelo menos uma vez por mês (inquérito de seguimento)",
      "Alunos que conhecem e acompanham o seu custo por litro depois de 30 dias (inquérito de seguimento)",
      "Mudança na média de leite entregue por animal em 3 meses, onde os registos permitirem"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, ou um telefone com uma folha de cálculo ou uma aplicação de notas",
      "Uma calculadora (a calculadora do telefone serve)",
      "Acesso a um animal em lactação para as tarefas de prática, ou a uma exploração de demonstração",
      "Uma raquete de CMT e reagente, emprestados por uma cooperativa, um veterinário ou um serviço de extensão se for preciso",
      "Cerca de 75 minutos no total, em sessões curtas, mais prática nas horas de ordenha"
    ],
    facilitatorNotes: [
      "Faça a rotina de ordenha e o CMT como demonstrações ao vivo na exploração de um membro ou numa cooperativa; deixe cada aluno fazer o CMT ele próprio.",
      "Convide o centro de recolha ou a cooperativa local para mostrar os seus testes do leite (álcool, fervura, lactómetro).",
      "Nunca dê doses de medicamentos, vacinas ou hormonas nem intervalos de segurança; mande os alunos ao veterinário e ao rótulo do produto.",
      "Peça aos alunos para trazerem os recibos de comida e as guias de entrega de leite do mês passado para a tarefa do custo por litro; use números de exemplo para quem não tem registos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Junte este curso ao curso \"Nutrição Animal e Formulação de Rações com Ingredientes Locais\" para os alunos cujo custo por litro é alto por causa da comida."
    ]
  }
};
