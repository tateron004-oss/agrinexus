"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-value-addition-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Numbers and money figures are kept exactly as in the English (examples only, not real prices).

const NAFDAC_FOOD = { name: "NAFDAC (Nigéria): registo de alimentos, Divisão de Alimentos Feitos na Nigéria (Made in Nigeria Food Division; pequena escala e média/grande escala)", url: "https://www.nafdac.gov.ng/food/food-registration/" };
const GH_FDA_REG = { name: "Autoridade de Alimentos e Medicamentos do Gana (Ghana FDA): registo de produtos", url: "https://fdaghana.gov.gh/services-2/product-registration/" };
const GH_FDA_PLS = { name: "Autoridade de Alimentos e Medicamentos do Gana (Ghana FDA): Esquema de Licenciamento Progressivo para pequenos produtores (Rosa, Amarelo, Verde)", url: "https://fdaghana.gov.gh/programmes/progressive-licensing-scheme-2/" };
const KEBS = { name: "Gabinete de Normas do Quénia (KEBS): Marca de Normalização (certificação de produtos) e marcas de qualidade", url: "https://www.kebs.org" };
const CODEX_HYGIENE = { name: "Codex Alimentarius (FAO/OMS): Comité de Higiene dos Alimentos e Princípios Gerais de Higiene dos Alimentos (CXC 1-1969)", url: "https://codex.fao.org/codex-committees/general-subject-committees/CCFH" };
const FAO_ZECC = { name: "Portal TECA/STI da FAO: câmara de arrefecimento sem energia para hortícolas (Zero Energy Cooling Chamber)", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-value-addition-marketing-pt",
  lang: "pt",
  translationOf: "agri-value-addition-marketing",
  category: "Agriculture (Africa)",
  name: "Valor Acrescentado, Embalagem e Comercialização Agrícola",
  skills: "Escolher um produto de valor acrescentado, Calcular o custo e o preço de um produto, Processar com higiene, Embalar e rotular, Manter os produtos seguros no transporte, Vender diretamente aos compradores",
  outcome: "transformar uma cultura ou o leite da sua machamba num produto embalado e rotulado: escolhê-lo, calcular o seu custo, fazê-lo com higiene, saber que registo precisa e oferecê-lo diretamente a uma loja, escola, hotel ou comprador na internet a um preço que compensa.",
  about: [
    "Na colheita, os produtos frescos vendem-se muitas vezes baratos, porque todos vendem a mesma coisa. Transformá-los num produto como manga seca, farinha de mandioca, pasta de amendoim ou iogurte pode render mais, durar mais tempo e chegar a novos compradores. Este curso é para pequenos agricultores, grupos de mulheres e de jovens, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, na África Ocidental francófona e em toda a África.",
    "Você vai escolher um produto que serve para a sua machamba e para um comprador real, calcular quanto custa uma embalagem e quanto cobrar, organizar um processamento com higiene, desenhar um rótulo, saber que organismo nacional o deve aprovar, planear como mantê-lo seguro até ao comprador e preparar uma apresentação para vender diretamente.",
    "Continua os cursos Manuseamento e Armazenamento Pós-Colheita e Cooperativas de Agricultores e Chegar ao Mercado, por isso não repete o armazenamento, a secagem nem a venda em grupo. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" para a sua própria machamba. Todos os valores em dinheiro são exemplos, não preços reais."
  ],
  finalTask: "Faça um plano de produto de uma página para um produto de valor acrescentado da sua machamba: o produto e o comprador, uma folha de custos com o custo e o preço por embalagem, uma lista de higiene para o fazer, um rascunho de rótulo com o organismo nacional que deve consultar, como vai mantê-lo seguro no caminho e uma curta apresentação a um comprador direto.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas, grupos de mulheres e de jovens, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, na África Ocidental francófona e em toda a África. Muitos já vendem produtos frescos à porta da machamba ou no mercado local e querem um preço melhor.",
    startingPoint: "Sabem cultivar e colher uma cultura ou produzir leite, e sabem guardá-la e secá-la bem (ver Manuseamento e Armazenamento Pós-Colheita). Alguns já fazem pequenas quantidades de um produto para a família ou os vizinhos, sem cálculo de custos, rótulos nem registo.",
    gap: "Muitos produtos da machamba têm o preço feito a adivinhar, são feitos sem rotina de higiene, vendidos sem um rótulo adequado e entregues a intermediários que pagam tarde ou pouco. Os agricultores precisam de escolher um produto que um comprador quer de verdade, calcular o seu custo, fazê-lo com segurança, rotulá-lo, saber que aprovação nacional precisa e vendê-lo diretamente, para que o valor acrescentado dê dinheiro em vez de o fazer perder.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos falam português como segunda língua",
      "Aparelhos: um telefone simples ou um smartphone, muitas vezes partilhado; uma calculadora; papel",
      "Dinheiro: orçamentos pequenos; começar com pequenas quantidades e equipamento barato",
      "Regras: as regras de registo e de rotulagem dos alimentos são diferentes em cada país e mudam; os alunos confirmam com o seu organismo nacional",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho na machamba"
    ],
    prerequisites: "Útil: Manuseamento e Armazenamento Pós-Colheita, e Cooperativas de Agricultores e Chegar ao Mercado. Saber somar, multiplicar e dividir."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as principais culturas ou o leite da sua machamba e o que os compradores perto de si pedem", action: "escolher um produto de valor acrescentado para fazer e o comprador a quem o vender", standard: "depois de comparar pelo menos duas opções quanto à procura, matéria-prima, equipamento e regras" },
    { id: "O2", condition: "Com os custos de um lote", action: "calcular o custo de uma embalagem e fixar um preço de venda", standard: "contando a matéria-prima, a embalagem, a energia, o trabalho, o transporte e as perdas, com um preço que cobre todos os custos mais uma margem" },
    { id: "O3", condition: "Para o produto escolhido, do processamento até ao comprador", action: "escrever uma lista de verificação de higiene e de cadeia de frio", standard: "que cobre as mãos, a água, as superfícies, a matéria-prima, o embalamento e a segurança do produto no armazenamento e no transporte" },
    { id: "O4", condition: "Com o seu produto e o seu país", action: "fazer um rascunho de rótulo e dizer o nome do organismo nacional que deve aprovar o produto", standard: "com o nome do produto, os ingredientes, o peso líquido, o produtor e o contacto, o número do lote e as datas, e uma nota para confirmar as regras atuais do organismo" },
    { id: "O5", condition: "Com uma loja, escola, hotel ou comprador na internet", action: "preparar uma apresentação de venda direta com condições por escrito", standard: "que diz o produto, o preço, a quantidade, a entrega, a data de pagamento e como se tratam as reclamações" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fazer um produto que compensa",
      lessons: [
        {
          title: "Escolher um produto de valor acrescentado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparar dois produtos de valor acrescentado para a sua machamba e escolher um com um comprador real.",
          text: [
            "Acrescentar valor quer dizer fazer alguma coisa à sua produção para que o comprador pague mais: secar, moer, torrar, triturar, fermentar, limpar, separar em embalagens ou simplesmente embalar bem. Mangas frescas que apodrecem numa semana podem tornar-se manga seca que dura meses. A mandioca pode tornar-se farinha ou gari, o amendoim pode tornar-se pasta e o leite pode tornar-se iogurte.",
            "Comece pelo comprador, não pela máquina. Pergunte às lojas, às cozinheiras das escolas, aos hotéis e aos comerciantes do mercado perto de si o que compram, quanto, com que frequência, em que tamanho de embalagem e a que preço. Um produto que ninguém por perto pede é um risco.",
            "Depois verifique quatro coisas: a procura (quem vai comprar e quanto), a matéria-prima (você ou os seus vizinhos têm o suficiente, todo o ano ou só na época), o equipamento e a habilidade (pode começar pequeno, por exemplo com um secador solar ou um moinho alugado) e as regras (os produtos de leite e de carne têm mais risco e normalmente precisam de mais aprovações do que a farinha seca). Compare pelo menos duas opções antes de escolher."
          ],
          steps: ["Escreva dois ou três produtos que pode fazer com as suas culturas ou o seu leite.", "Pergunte a pelo menos três compradores o que compram, quanto e a que preço.", "Dê uma nota a cada produto quanto à procura, matéria-prima, equipamento e habilidade, e regras.", "Escolha o que tiver a melhor nota e um comprador com nome."],
          words: [["Valor acrescentado", "mudar ou embalar a sua produção para que o comprador pague mais por ela."], ["Prazo de validade", "quanto tempo um produto continua seguro e bom para comer."], ["Perecível", "um produto que se estraga depressa, como o leite, o iogurte ou o tomate fresco."]],
          slides: [
            { title: "O que quer dizer acrescentar valor", bullets: ["Secar, moer, triturar, torrar, fermentar ou embalar a sua produção", "Manga em manga seca; mandioca em farinha ou gari", "Amendoim em pasta; leite em iogurte"] },
            { title: "Comece pelo comprador", bullets: ["Pergunte às lojas, cozinheiras das escolas, hotéis e comerciantes", "O que compram, quanto e com que frequência", "Tamanho da embalagem e preço que pagam"] },
            { title: "Dê uma nota a cada opção", bullets: ["Procura: quem compra e quanto", "Matéria-prima: se chega, e em que meses", "Equipamento e habilidade; regras (o leite tem mais risco)"] }
          ],
          tryIt: "Escolha dois produtos que pode fazer. Pergunte a três compradores perto de si sobre cada um e depois dê uma nota aos dois quanto à procura, matéria-prima, equipamento e regras. Escreva o produto que escolhe e o comprador que vai procurar.",
          youCanNow: "comparar produtos de valor acrescentado quanto à procura, matéria-prima, equipamento e regras, e escolher um com um comprador real.",
          quickCheck: [
            { objective: "O1", q: "Quer acrescentar valor às suas mangas. O que deve fazer primeiro?", options: ["Comprar um secador grande a crédito", "Copiar o que o seu vizinho faz", "Perguntar aos compradores perto de si o que compram e a que preço", "Fazer o máximo possível e procurar compradores depois"], answer: 2, why: "Começar por compradores reais mostra se há procura antes de gastar dinheiro." },
            { objective: "O1", q: "Que produto normalmente precisa de MAIS aprovações e cuidado para ser feito com segurança?", options: ["Iogurte feito de leite", "Farinha de mandioca", "Fatias de manga seca", "Feijão limpo e escolhido em embalagens"], answer: 0, why: "Os produtos de leite estragam-se depressa e podem levar micróbios, por isso têm mais risco e normalmente têm regras mais apertadas." }
          ]
        },
        {
          title: "Calcular o custo e o preço do seu produto",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular o custo de uma embalagem e fixar um preço que cobre todos os custos mais uma margem.",
          text: [
            "Muitos pequenos processadores perdem dinheiro sem saber, porque só contam a matéria-prima. Conte todos os custos de um lote: matéria-prima, embalagens e rótulos, energia (combustível, carvão, eletricidade, moagem), água, trabalho (incluindo o seu próprio tempo), transporte e taxas como o registo ou as taxas do mercado, divididas pelo ano.",
            "Depois conte as perdas: algum produto estraga-se, cai ou é dado como amostra. Divida o custo total do lote pelo número de embalagens que pode mesmo vender. Exemplo (os valores são só exemplos): um grupo do Gana faz pasta de amendoim. Amendoim GHS 400, frascos e rótulos GHS 150, moagem e combustível GHS 50, trabalho GHS 100, transporte GHS 50: total GHS 750. Enchem 50 frascos mas esperam vender 48, por isso cada frasco custa cerca de GHS 15.60.",
            "O seu preço tem de cobrir o custo por embalagem mais uma margem para lucro, poupança e reparações. Depois compare o preço com produtos parecidos nas lojas. Se o seu preço estiver muito acima, procure uma forma mais barata de o fazer, uma embalagem mais pequena ou um comprador que paga pela qualidade. O mesmo método serve para manga seca em KES, gari em NGN ou iogurte em XOF."
          ],
          steps: ["Escreva todos os custos de um lote, incluindo o seu próprio trabalho.", "Conte quantas embalagens pode mesmo vender depois das perdas.", "Divida o custo total pelas embalagens que pode vender: esse é o custo por embalagem.", "Junte uma margem para ter o seu preço.", "Compare-o com produtos parecidos nas lojas e mude o seu plano se for preciso."],
          words: [["Custo por unidade", "quanto lhe custa fazer uma embalagem."], ["Margem", "o dinheiro que fica de cada venda depois de pagar os custos."], ["Lote", "uma vez que se faz o produto, por exemplo 50 frascos feitos num dia."]],
          slides: [
            { title: "Conte todos os custos de um lote", bullets: ["Matéria-prima, embalagens, rótulos", "Combustível, eletricidade, moagem, água", "Trabalho (o seu também), transporte, taxas"] },
            { title: "Custo por embalagem", bullets: ["Custo total do lote / embalagens que pode mesmo vender", "Exemplo: GHS 750 / 48 frascos = cerca de GHS 15.60", "Os valores são só exemplos"] },
            { title: "Fixar o preço", bullets: ["Custo por embalagem + margem = preço", "Compare com produtos parecidos nas lojas", "Muito alto? Método mais barato, embalagem menor ou outro comprador"] }
          ],
          tryIt: "Faça uma folha de custos para um lote do produto escolhido. Escreva todos os custos, as embalagens que espera vender, o custo por embalagem e o preço que cobraria. Compare-o com um produto parecido numa loja.",
          youCanNow: "fazer uma folha de custos, calcular o custo de uma embalagem e fixar um preço que o cobre com uma margem.",
          quickCheck: [
            { objective: "O2", q: "Que custo os pequenos processadores esquecem MAIS vezes?", options: ["A matéria-prima", "O seu próprio trabalho e as perdas", "O preço na loja", "O nome do produto"], answer: 1, why: "O seu tempo e as embalagens estragadas ou dadas como amostra são custos reais, e deixá-los de fora esconde as perdas." },
            { objective: "O2", q: "Um lote custa KES 6,000 e pode vender 40 embalagens. Qual é o custo por embalagem?", options: ["KES 240", "KES 600", "KES 1,500", "KES 150"], answer: 3, why: "O custo por embalagem é o custo total do lote a dividir pelas embalagens vendidas: 6,000 / 40 = KES 150." }
          ]
        },
        {
          title: "Higiene e segurança dos alimentos quando processa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escrever uma lista de higiene que mantém o seu produto seguro enquanto o faz.",
          text: [
            "Se um produto fizer alguém ficar doente, o comprador não volta e uma autoridade pode parar as suas vendas. Os Princípios Gerais de Higiene dos Alimentos do Codex Alimentarius, que são internacionais, cobrem toda a cadeia, da machamba até à pessoa que come o alimento. O organismo nacional de alimentos usa ideias como estas quando o inspeciona.",
            "O básico: água limpa e segura; mãos lavadas com sabão antes do trabalho e depois da casa de banho; não trabalhar quando está doente; cabelo coberto e cortes tapados; superfícies, utensílios e recipientes limpos; matéria-prima separada do produto pronto; animais, insetos e ratos mantidos fora; e um lugar limpo e seco para guardar as embalagens.",
            "Comece com matéria-prima limpa. Nunca processe amendoim ou grão com bolor, que pode ter aflatoxina (ver Manuseamento e Armazenamento Pós-Colheita). O leite para iogurte deve ser aquecido e tratado com um método testado, dado pelo seu extensionista de lacticínios ou pelo organismo de normas, e mantido frio. Escreva os seus passos para que cada lote seja feito da mesma maneira, e dê a cada lote um número e uma data."
          ],
          steps: ["Escreva os passos para fazer o seu produto, da matéria-prima até à embalagem fechada.", "Para cada passo, escreva o que o pode tornar perigoso (sujidade, micróbios, bolor, insetos).", "Escreva a regra de higiene que o evita.", "Dê a cada lote um número e uma data, e registe quem o fez."],
          words: [["Segurança dos alimentos", "manter os alimentos sem micróbios, venenos e sujidade que podem fazer as pessoas ficar doentes."], ["Contaminação", "quando sujidade, micróbios ou químicos entram nos alimentos."], ["Número do lote", "um código em cada embalagem que diz quando e como foi feita, para poder seguir a origem de um problema."]],
          slides: [
            { title: "Porque a higiene é importante", bullets: ["Um cliente doente pode acabar com o seu negócio", "Princípios de higiene do Codex: da machamba ao prato", "Os inspetores procuram este básico"] },
            { title: "O básico", bullets: ["Água segura; lavar as mãos com sabão", "Não trabalhar doente; cobrir o cabelo e os cortes", "Utensílios limpos; matéria-prima separada do produto pronto"] },
            { title: "Começar limpo e escrever", bullets: ["Nunca usar grão ou amendoim com bolor", "Leite: método testado, mantido frio", "Os mesmos passos em cada lote; número do lote e data"] }
          ],
          sources: [CODEX_HYGIENE],
          tryIt: "Escreva os passos para fazer o seu produto. Ao lado de cada passo, escreva uma coisa que o pode tornar perigoso e a regra que o evita. Esta é a sua lista de verificação de higiene.",
          youCanNow: "escrever uma lista de verificação de higiene para o seu produto e dar a cada lote um número e uma data.",
          quickCheck: [
            { objective: "O3", q: "Um trabalhador tem diarreia no dia do processamento. O que deve acontecer?", options: ["Fica longe do processamento até estar bom", "Trabalha mas lava as mãos uma vez", "Trabalha só com luvas", "Embala em vez de misturar"], answer: 0, why: "Os trabalhadores doentes podem passar micróbios para os alimentos, por isso não devem tocar neles até estarem bons." },
            { objective: "O3", q: "Algum amendoim num saco parece ter bolor. O que faz?", options: ["Torra-o mais tempo para matar o bolor", "Mistura-o com amendoim bom", "Tira-o e não o usa para a pasta", "Vende-o a um preço mais baixo"], answer: 2, why: "O bolor pode ter aflatoxina, que o cozinhar não tira, por isso o amendoim com bolor não deve ser usado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fazer um produto que compensa",
        questions: [
          { objective: "O1", q: "Qual é um exemplo de valor acrescentado?", options: ["Vender mandioca fresca à porta da machamba", "Moer mandioca em farinha e embalá-la", "Plantar mais mandioca", "Deixar a mandioca mais tempo na terra"], answer: 1, why: "Moer e embalar transformam a produção num produto pelo qual o comprador paga mais." },
          { objective: "O1", q: "Só tem leite na época das chuvas. Que verificação é mais importante antes de escolher o iogurte?", options: ["A cor do rótulo", "O nome da sua marca", "O que os seus amigos gostam", "Se tem matéria-prima suficiente todo o ano e um comprador para ela"], answer: 3, why: "A matéria-prima disponível e a procura decidem se o produto consegue manter um comprador." },
          { objective: "O2", q: "O que é o custo por embalagem?", options: ["O custo total do lote a dividir pelas embalagens que pode mesmo vender", "O preço da loja menos o seu trabalho", "Só o custo da matéria-prima", "O que o seu vizinho cobrar"], answer: 0, why: "Dividir todos os custos do lote pelas embalagens vendáveis dá o custo verdadeiro de uma embalagem." },
          { objective: "O3", q: "Qual é uma regra básica de higiene no processamento?", options: ["Deixar as galinhas andar na área de trabalho", "Usar qualquer água que tiver", "Lavar as mãos com sabão antes do trabalho e depois da casa de banho", "Guardar a matéria-prima junto do produto pronto"], answer: 2, why: "Lavar as mãos com sabão impede que os micróbios das mãos passem para os alimentos." },
          { objective: "O3", q: "Porque dar a cada lote um número e uma data?", options: ["Para a embalagem ficar bonita", "Para encontrar e corrigir um problema se um lote correr mal", "Porque os compradores gostam de números", "Para subir o preço"], answer: 1, why: "O número do lote mostra que embalagens vieram de um lote com problema e quando foi feito." }
        ]
      }
    },
    {
      name: "Capítulo 2: Embalar, rotular e vender diretamente",
      lessons: [
        {
          title: "Embalagem, rótulos, marca e registo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Fazer um rascunho de rótulo para o seu produto e encontrar o organismo nacional que o deve aprovar.",
          text: [
            "Uma boa embalagem mantém o produto seguro e faz os compradores confiarem nele. Escolha embalagens próprias para alimentos que não deixam entrar ar, água nem insetos: sacos fechados para manga seca e farinha, frascos limpos com tampas bem fechadas para pasta de amendoim, e copos limpos e selados para iogurte. A sua marca é o seu nome, logótipo e promessa, por exemplo 'limpo, local, sem açúcar acrescentado'. Mantenha-a simples e igual em todas as embalagens.",
            "Um rótulo normalmente mostra: o nome do produto, os ingredientes, o peso ou volume líquido, o nome e o contacto do produtor, o número do lote, a data de fabrico e uma data limite de consumo ou de consumo preferencial, como o guardar e qualquer número ou marca de registo. O seu país pode exigir mais, por isso confirme antes de imprimir muitos rótulos.",
            "A maior parte dos alimentos embalados precisa de aprovação antes de ser vendida nas lojas. No Quénia, o KEBS dá a Marca de Normalização aos produtos que cumprem uma Norma do Quénia. Na Nigéria, a NAFDAC regista os alimentos feitos no país através da sua Divisão de Alimentos Feitos na Nigéria, com caminhos para pequenos e também para médios e grandes produtores. No Gana, a Autoridade de Alimentos e Medicamentos (FDA) regista os produtos, e o seu Esquema de Licenciamento Progressivo deixa os produtores muito pequenos (uma a cinco pessoas) cumprir as regras por etapas. Na Costa do Marfim, consulte o organismo nacional de normas CODINORM; os outros países têm os seus. As regras, os formulários e as taxas mudam, por isso contacte o organismo antes de começar."
          ],
          steps: ["Escolha uma embalagem própria para alimentos que não deixa entrar ar, água nem insetos.", "Escreva o nome da sua marca e uma promessa de uma linha.", "Faça o rascunho do rótulo: nome, ingredientes, peso líquido, produtor e contacto, número do lote, datas, conservação.", "Encontre o seu organismo nacional (KEBS, NAFDAC, Ghana FDA, CODINORM ou outro) e pergunte o que o seu produto precisa.", "Imprima os rótulos só depois de conhecer as regras."],
          words: [["Marca", "o nome, o logótipo e a promessa que fazem os compradores reconhecer o seu produto e confiar nele."], ["Peso líquido", "o peso do alimento dentro da embalagem, sem contar a embalagem."], ["Registo", "aprovação oficial de um organismo nacional para que um alimento possa ser vendido."], ["Data de consumo preferencial", "a data até à qual o produto mantém a sua melhor qualidade, se for guardado como diz o rótulo."]],
          slides: [
            { title: "Embalagens que protegem", bullets: ["Próprias para alimentos; não deixam entrar ar, água nem insetos", "Sacos fechados, frascos limpos, copos selados", "A mesma marca simples em todas as embalagens"] },
            { title: "O que um rótulo normalmente mostra", bullets: ["Nome, ingredientes, peso líquido", "Nome e contacto do produtor", "Número do lote, data de fabrico, data de consumo preferencial ou limite", "Conservação; número ou marca de registo"] },
            { title: "Quem aprova (confirme as regras atuais)", bullets: ["Quénia: Marca de Normalização do KEBS", "Nigéria: registo na NAFDAC (também há um caminho para pequena escala)", "Gana: FDA; Esquema de Licenciamento Progressivo para produtores muito pequenos"] },
            { title: "Antes de imprimir", bullets: ["Costa do Marfim: CODINORM; outros países: o seu próprio organismo", "As regras, os formulários e as taxas mudam", "Pergunte primeiro ao organismo, depois imprima os rótulos"] }
          ],
          sources: [KEBS, NAFDAC_FOOD, GH_FDA_REG, GH_FDA_PLS],
          tryIt: "Faça o rascunho do rótulo do seu produto em papel ou com uma ferramenta gratuita como o Canva. Depois encontre o site ou o escritório do seu organismo nacional de alimentos e escreva as perguntas que lhe vai fazer sobre o registo e a rotulagem.",
          youCanNow: "fazer o rascunho do rótulo de um produto e dizer o nome do organismo nacional a consultar antes de vender nas lojas.",
          quickCheck: [
            { objective: "O4", q: "Que informação um rótulo de alimento normalmente precisa de ter?", options: ["O PIN do banco do agricultor", "O preço do amendoim cru", "Uma fotografia da machamba", "O número do lote e a data de consumo preferencial"], answer: 3, why: "O número do lote e as datas dizem aos compradores e aos inspetores quando foi feito e quanto tempo dura." },
            { objective: "O4", q: "Um pequeno processador do Gana com três trabalhadores quer a aprovação da FDA. Que programa o pode ajudar a cumprir as regras por etapas?", options: ["A Marca de Normalização", "O Esquema de Licenciamento Progressivo", "GLOBALG.A.P.", "A Divisão de Alimentos Feitos na Nigéria"], answer: 1, why: "O Esquema de Licenciamento Progressivo da FDA do Gana é para pequenos produtores de uma a cinco pessoas." }
          ]
        },
        {
          title: "Manter o produto seguro no caminho: cadeia de frio e transporte",
          objectives: ["O3"],
          minutes: 5,
          goal: "Planear como o seu produto fica seguro e sem danos desde o seu armazém até ao comprador.",
          text: [
            "Um produto pode ser feito na perfeição e mesmo assim estragar-se na estrada. Os produtos perecíveis, como o iogurte e o sumo fresco, precisam de uma cadeia de frio: têm de ficar frios em todos os passos, desde que são feitos até ao frigorífico do comprador. Se aquecerem no caminho, os micróbios crescem e o produto pode fazer as pessoas ficar doentes, mesmo que pareça bom.",
            "Para viagens curtas, use uma geleira limpa com acumuladores de gelo e entregue cedo. Combine com o comprador que o põe logo no frigorífico. Nunca volte a congelar nem a vender iogurte que esteve quente. Os produtos secos, como a farinha de mandioca, a manga seca e a pasta de amendoim, não precisam de frio, mas têm de ficar secos, fechados, à sombra e longe de combustível, químicos e pragas.",
            "Planeie a viagem: quem leva, em quê (mota, matatu, okada, autocarro ou camião), quanto tempo demora e como as embalagens ficam protegidas de serem esmagadas, do sol e da chuva. Um arrefecimento barato, como a câmara de arrefecimento sem energia da FAO, pode guardar a produção mais fresca antes de a processar. Junte os passos de cadeia de frio e de transporte à sua lista de higiene."
          ],
          steps: ["Decida se o seu produto é perecível (precisa de frio) ou seco (precisa de ficar seco e fechado).", "Para produtos frios: geleira, acumuladores de gelo, entrega cedo, frigorífico do comprador logo.", "Para produtos secos: fechados, à sombra, longe de químicos e pragas.", "Planeie quem leva, como, quanto tempo demora e como as embalagens ficam protegidas.", "Junte estes passos à sua lista de higiene."],
          words: [["Cadeia de frio", "manter um produto frio em todos os passos, desde que é feito até ser vendido."], ["Geleira", "uma caixa isolada que mantém as coisas frias com gelo ou acumuladores de gelo."]],
          slides: [
            { title: "Cadeia de frio para perecíveis", bullets: ["Iogurte e sumo têm de ficar frios em todo o caminho", "Quente na estrada = micróbios crescem, mesmo que pareça bom", "Nunca volte a vender iogurte que aqueceu"] },
            { title: "Viagens curtas, pouco custo", bullets: ["Geleira limpa com acumuladores de gelo", "Entregue cedo", "O comprador põe logo no frigorífico"] },
            { title: "Produtos secos", bullets: ["Manter secos, fechados e à sombra", "Longe de combustível, químicos e pragas", "Proteger as embalagens de serem esmagadas e da chuva"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Escreva a viagem do seu produto desde o seu armazém até ao seu comprador: quem leva, como, quanto tempo demora e o que o mantém frio ou seco e sem danos. Junte-a à sua lista de higiene.",
          youCanNow: "planear uma cadeia de frio ou um transporte a seco que mantém o seu produto seguro até chegar ao comprador.",
          quickCheck: [
            { objective: "O3", q: "O seu iogurte ficou três horas ao sol num autocarro atrasado. O que faz?", options: ["Vende-o depressa com desconto", "Põe-o outra vez no frigorífico e vende amanhã", "Não o vende; já não é seguro", "Prova-o e vende-o se parecer bom"], answer: 2, why: "O iogurte quente pode ter micróbios que não se veem nem se sentem no sabor, por isso não deve ser vendido." },
            { objective: "O3", q: "De que a manga seca mais precisa no caminho até ao comprador?", options: ["Ficar seca, fechada e à sombra", "Ficar congelada", "Ficar ao ar livre", "Ficar ao lado da lata de combustível"], answer: 0, why: "Os produtos secos estragam-se quando ficam húmidos, muito quentes ou perto de químicos, não por estarem mornos." }
          ]
        },
        {
          title: "Vender diretamente: lojas, escolas, hotéis e internet",
          objectives: ["O5"],
          minutes: 6,
          goal: "Preparar uma apresentação e condições por escrito para vender o seu produto diretamente a um comprador.",
          text: [
            "Nem todos os intermediários são maus: alguns comerciantes pagam de forma justa e levam produção que você não consegue levar. Mas fique atento aos sinais de exploração: balanças viciadas, preços mudados depois da entrega, pagamentos que chegam meses depois ou nunca, e 'compre agora, pague depois' de desconhecidos que depois desaparecem. Vender diretamente pode dar-lhe um preço melhor e um cliente certo.",
            "Cada comprador quer coisas diferentes. As lojas locais e os supermercados querem um rótulo, um fornecimento regular e às vezes vendem à consignação (só pagam depois de o produto ser vendido), o que é um risco. As escolas e os hospitais compram em grandes quantidades num calendário e muitas vezes precisam de um orçamento, de uma fatura e às vezes de um registo. Os hotéis e os restaurantes querem a mesma qualidade todas as vezes. Os compradores na internet, no WhatsApp, no Facebook ou num mercado online, querem fotografias claras, preços e entrega rápida.",
            "Uma boa apresentação é curta: o que é o produto, porque é bom (limpo, local, fresco), o preço, o tamanho da embalagem, quanto pode fornecer e com que frequência, e a entrega. Depois combine as condições por escrito, mesmo numa mensagem simples: quantidade, preço, dia de entrega, data e forma de pagamento (por exemplo dinheiro móvel) e o que acontece se uma embalagem chegar danificada. Guarde uma cópia. Nunca partilhe PINs nem palavras-passe com nenhum comprador. Para um contrato grande ou longo, peça primeiro a um conselheiro de confiança que o leia."
          ],
          steps: ["Escolha um comprador: uma loja, uma escola, um hotel ou clientes na internet.", "Escreva uma apresentação curta: produto, porque é bom, preço, tamanho da embalagem, fornecimento, entrega.", "Leve uma amostra e o seu rótulo.", "Combine as condições por escrito: quantidade, preço, entrega, data e forma de pagamento, embalagens danificadas.", "Guarde uma cópia e registe cada entrega e cada pagamento."],
          words: [["Intermediário", "um comerciante que compra aos agricultores e vende a outros."], ["Consignação", "a loja fica com os seus produtos e só lhe paga depois de os vender."], ["Apresentação de venda", "uma oferta curta e clara a um comprador."], ["Fatura", "uma conta por escrito que pede ao comprador para pagar os produtos entregues."]],
          slides: [
            { title: "Cuidado com a exploração", bullets: ["Balanças viciadas; preço mudado depois da entrega", "Pagamento meses depois ou nunca", "Desconhecidos que 'pagam depois' e desaparecem"] },
            { title: "O que cada comprador quer", bullets: ["Lojas: rótulo, fornecimento regular; risco da consignação", "Escolas: grandes quantidades, calendário, orçamento e fatura", "Hotéis: a mesma qualidade sempre; internet: fotografias, entrega rápida"] },
            { title: "Uma apresentação curta", bullets: ["O que é e porque é bom", "Preço, tamanho da embalagem, quanto e com que frequência", "Entrega; leve uma amostra e o rótulo"] },
            { title: "Ponha as condições por escrito", bullets: ["Quantidade, preço, dia de entrega", "Data e forma de pagamento; embalagens danificadas", "Guarde uma cópia; nunca partilhe PINs"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de produto de uma página. Inclua o produto e o comprador, a sua folha de custos e o preço, a sua lista de higiene e de cadeia de frio, o seu rascunho de rótulo e o organismo nacional, e uma apresentação curta com as condições que vai pedir ao comprador para aceitar por escrito.",
          youCanNow: "apresentar o seu produto a um comprador direto e combinar condições claras por escrito sobre o preço, a entrega e o pagamento.",
          quickCheck: [
            { objective: "O5", q: "Uma loja propõe ficar com a sua pasta de amendoim à consignação. Qual é o risco?", options: ["Tem de pagar primeiro à loja", "Só recebe depois de vender, e as embalagens não vendidas podem voltar", "A loja vai mudar o seu rótulo", "Não há nenhum risco"], answer: 1, why: "À consignação, o risco é seu até o produto ser vendido, por isso combine por quanto tempo e o que acontece às embalagens não vendidas." },
            { objective: "O5", q: "Um hotel aceita comprar iogurte todas as semanas. O que deve combinar por escrito?", options: ["Só o nome do hotel", "O PIN do seu dinheiro móvel", "Nada; um aperto de mão chega", "Quantidade, preço, dia de entrega, data de pagamento e o que acontece às embalagens danificadas"], answer: 3, why: "Condições por escrito sobre quantidade, preço, entrega e pagamento evitam conflitos mais tarde." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Embalar, rotular e vender diretamente",
        questions: [
          { objective: "O4", q: "Que organismo dá a Marca de Normalização aos produtos no Quénia?", options: ["NAFDAC", "Ghana FDA", "KEBS", "CODINORM"], answer: 2, why: "O KEBS, o Gabinete de Normas do Quénia, dá a Marca de Normalização." },
          { objective: "O4", q: "Quando deve imprimir muitos rótulos?", options: ["Depois de confirmar o que o seu organismo nacional exige", "Antes de escolher o produto", "Antes de falar com algum comprador", "Só depois de um comprador reclamar"], answer: 0, why: "As regras de rotulagem são diferentes em cada país e mudam, por isso confirme primeiro para não desperdiçar rótulos." },
          { objective: "O3", q: "Que produto precisa de uma cadeia de frio?", options: ["Farinha de mandioca", "Manga seca", "Pasta de amendoim num frasco fechado", "Iogurte"], answer: 3, why: "O iogurte é perecível e tem de ficar frio desde que é feito até ao comprador." },
          { objective: "O5", q: "Qual é um sinal de alerta de um intermediário que explora?", options: ["Pagar no dia combinado", "Mudar o preço depois de você entregar", "Pesar à sua frente", "Dar um recibo"], answer: 1, why: "Mudar o preço depois da entrega passa a perda para você e quebra a confiança." },
          { objective: "O5", q: "O que deve estar numa apresentação curta à cozinheira de uma escola?", options: ["A história da sua vida", "Os preços do seu vizinho", "Produto, preço, tamanho da embalagem, fornecimento e entrega", "O PIN do seu banco"], answer: 2, why: "O comprador precisa de saber o que oferece, a que preço, quanto e como chega." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Valor Acrescentado, Embalagem e Comercialização Agrícola",
    questions: [
      { objective: "O1", q: "O que quer dizer acrescentar valor?", options: ["Mudar ou embalar a produção para que os compradores paguem mais", "Plantar uma nova cultura", "Vender à porta da machamba", "Pedir dinheiro emprestado para semente"], answer: 0, why: "Secar, moer, processar ou embalar bem pode dar um preço mais alto." },
      { objective: "O1", q: "O que deve guiar primeiro a escolha do produto?", options: ["A máquina mais barata que encontrar", "O que fica bonito num rótulo", "O que os compradores perto de si compram de verdade", "O que é popular na televisão"], answer: 2, why: "Um produto com um comprador real tem menos risco do que um feito só com esperança." },
      { objective: "O1", q: "Em que quatro coisas deve dar nota a cada opção de produto?", options: ["Cor, sabor, cheiro, tamanho", "Procura, matéria-prima, equipamento e habilidade, regras", "Preço, marca, logótipo, slogan", "Chuva, sol, vento, solo"], answer: 1, why: "Estas quatro mostram se consegue fazê-lo, vendê-lo e fazê-lo dentro da lei." },
      { objective: "O1", q: "As suas mangueiras dão fruta dois meses por ano. O que isto quer dizer para a manga seca?", options: ["Não pode fazer manga seca", "Tem de vender toda a manga fresca", "O preço não importa", "Planear a matéria-prima: comprar aos vizinhos ou fazer o suficiente para vender ao longo do ano"], answer: 3, why: "Uma matéria-prima de época afeta durante quanto tempo pode fornecer um comprador." },
      { objective: "O2", q: "Que custo entra na sua folha de custos?", options: ["Só a matéria-prima", "O tempo do seu próprio trabalho", "O transporte do comprador para casa", "As propinas da escola do seu vizinho"], answer: 1, why: "O seu próprio trabalho é um custo real; deixá-lo de fora esconde se o produto compensa." },
      { objective: "O2", q: "Um lote de gari custa NGN 60,000 e pode vender 120 sacos. Qual é o custo por saco?", options: ["NGN 500", "NGN 200", "NGN 1,200", "NGN 7,200"], answer: 0, why: "60,000 a dividir por 120 sacos dá NGN 500 por saco." },
      { objective: "O2", q: "Como fixa o seu preço?", options: ["Copiar o preço mais baixo do mercado", "Cobrar o que o primeiro comprador oferecer", "Custo por embalagem mais uma margem, depois comparar com os preços das lojas", "Cobrar o mesmo que a produção fresca"], answer: 2, why: "O preço tem de cobrir todos os custos com uma margem e mesmo assim fazer sentido para os compradores." },
      { objective: "O2", q: "O seu preço está muito acima de produtos parecidos nas lojas. Qual é um bom passo a seguir?", options: ["Desistir logo", "Subir ainda mais o preço", "Esconder o preço", "Procurar um método mais barato, uma embalagem menor ou um comprador que paga pela qualidade"], answer: 3, why: "Mudar o custo, o tamanho da embalagem ou o comprador pode tornar o produto competitivo." },
      { objective: "O3", q: "O que faz parte de uma lista de higiene?", options: ["Mãos lavadas com sabão antes do trabalho", "Animais deixados na área de trabalho", "Matéria-prima e produto pronto guardados juntos", "Qualquer água que encontrar"], answer: 0, why: "Lavar as mãos com sabão mantém os micróbios fora dos alimentos." },
      { objective: "O3", q: "Porque nunca deve usar amendoim com bolor para a pasta?", options: ["É pesado demais", "Pode ter aflatoxina, que o cozinhar não tira", "Suja o frasco", "Os compradores não gostam da cor"], answer: 1, why: "A aflatoxina é um veneno escondido que a torrefação não destrói." },
      { objective: "O3", q: "O iogurte é entregue cedo numa geleira com acumuladores de gelo. Isto é um exemplo de:", options: ["Marca", "Consignação", "Uma cadeia de frio", "Registo"], answer: 2, why: "Manter um produto perecível frio em todos os passos é uma cadeia de frio." },
      { objective: "O3", q: "Como deve a farinha de mandioca viajar até ao comprador?", options: ["Em sacos abertos à chuva", "Ao lado de combustível e químicos", "Congelada", "Seca, fechada, à sombra e longe de pragas"], answer: 3, why: "Os produtos secos estragam-se quando ficam húmidos ou contaminados, por isso têm de ficar secos e protegidos." },
      { objective: "O4", q: "Que informação está normalmente num rótulo de alimento?", options: ["Os ingredientes e o peso líquido", "O PIN do agricultor", "O nome do comprador", "O preço do adubo"], answer: 0, why: "Os ingredientes e o peso líquido dizem aos compradores o que está dentro e quanto." },
      { objective: "O4", q: "Na Nigéria, que organismo regista os alimentos embalados feitos no país?", options: ["KEBS", "Ghana FDA", "CODINORM", "NAFDAC"], answer: 3, why: "A NAFDAC regista os alimentos feitos na Nigéria, incluindo os de pequenos produtores." },
      { objective: "O4", q: "O que é uma marca?", options: ["Um tipo de frasco", "O nome, o logótipo e a promessa que os compradores reconhecem", "Uma licença do governo", "Um número do lote"], answer: 1, why: "Uma marca ajuda os compradores a reconhecer o seu produto e a confiar nele." },
      { objective: "O4", q: "As regras de registo para o seu produto não estão claras. O que faz?", options: ["Vende assim mesmo e espera", "Pergunta a um comerciante o que ele acha", "Contacta o seu organismo nacional de alimentos ou de normas e confirma as regras atuais", "Copia o número de registo de outra marca"], answer: 2, why: "Só o organismo nacional pode dizer o que o seu produto precisa; as regras e as taxas mudam." },
      { objective: "O5", q: "Qual é uma boa razão para vender diretamente a uma escola?", options: ["Encomendas grandes e regulares num calendário", "Nunca há papelada", "As escolas nunca pagam tarde", "Não é preciso qualidade"], answer: 0, why: "As escolas compram muitas vezes com regularidade e em grandes quantidades, mas precisam de orçamentos, faturas e qualidade constante." },
      { objective: "O5", q: "Com o que os hotéis normalmente se importam mais?", options: ["Amostras grátis todas as semanas", "A cor da sua roupa", "O tamanho da sua machamba", "A mesma qualidade todas as vezes"], answer: 3, why: "Os hotéis servem hóspedes todos os dias e precisam de qualidade e fornecimento constantes." },
      { objective: "O5", q: "Vende manga seca no WhatsApp. O que ajuda os compradores na internet?", options: ["Não mostrar o preço", "Fotografias claras, preços e entrega rápida", "Pedir o PIN do banco deles", "Mensagens de voz longas"], answer: 1, why: "Os compradores na internet decidem pelas fotografias e pelos preços claros, e esperam uma entrega rápida." },
      { objective: "O5", q: "Um comprador aceita pelo telefone comprar 50 frascos por semana. Qual é o melhor passo a seguir?", options: ["Entregar e esperar que pague", "Enviar-lhe o PIN do seu dinheiro móvel", "Escrever numa mensagem a quantidade, o preço, o dia de entrega e a data de pagamento, e guardar uma cópia", "Esperar que ele marque as condições mais tarde"], answer: 2, why: "As condições por escrito, mesmo numa mensagem, protegem os dois lados se houver um conflito." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno ganhou
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano de produto e tente outra vez.",
    criteria: [
      { name: "Produto e comprador", objective: "O1", notYet: "Há um produto sem comprador, ou a escolha não foi comparada com outra opção.", meets: "Um produto e um comprador com nome, escolhidos depois de comparar duas opções quanto à procura, matéria-prima, equipamento e regras.", exceeds: "Também mostra como vai ter matéria-prima todo o ano, por exemplo dos vizinhos ou de um grupo." },
      { name: "Folha de custos e preço", objective: "O2", notYet: "Só a matéria-prima foi contada, ou não há custo por embalagem.", meets: "Todos os custos de um lote, incluindo o trabalho e as perdas, dão um custo por embalagem e um preço com margem.", exceeds: "O preço foi comparado com os preços das lojas e o plano mostra o que mudar se for alto demais." },
      { name: "Higiene e cadeia de frio", objective: "O3", notYet: "Não há passos por escrito, ou faltam riscos importantes como lavar as mãos, o bolor ou manter o produto frio.", meets: "Uma lista cobre a água, as mãos, as superfícies, a matéria-prima, o embalamento, os números de lote e o transporte seguro.", exceeds: "Cada passo diz o risco e a regra, e outra pessoa podia segui-lo sem ajuda." },
      { name: "Rótulo e registo", objective: "O4", notYet: "Faltam no rótulo os ingredientes, o peso líquido, o contacto ou as datas, ou não se diz nenhum organismo nacional.", meets: "O rótulo mostra o nome, os ingredientes, o peso líquido, o produtor e o contacto, o número do lote, as datas e a conservação, e diz o organismo a consultar.", exceeds: "O aluno contactou o organismo e escreveu o que ele exige e quanto custa." },
      { name: "Apresentação e condições", objective: "O5", notYet: "Não há apresentação, ou não há condições por escrito sobre o preço, a entrega e o pagamento.", meets: "Uma apresentação curta e condições por escrito: quantidade, preço, dia de entrega, data e forma de pagamento, embalagens danificadas.", exceeds: "A apresentação foi feita a um comprador real, e o aluno registou a resposta." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que vendem pelo menos um lote de um produto de valor acrescentado em 90 dias (inquérito de seguimento)",
      "Alunos que dizem receber um preço por quilo de produção mais alto do que vendê-la fresca (inquérito de seguimento)",
      "Alunos que contactam o seu organismo nacional de alimentos ou de normas ou se registam nele",
      "Alunos que dizem ter menos perdas na colheita porque processaram a produção em vez de a vender barata"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone (um smartphone ajuda) e uma calculadora",
      "Papel e caneta para a folha de custos, a lista de higiene e o rótulo",
      "Opcional: uma ferramenta de design gratuita como o Canva para o rótulo",
      "Uma amostra da sua produção fresca e um produto parecido de uma loja local para comparar",
      "Cerca de 90 minutos no total, em sessões curtas, mais tempo para visitar compradores"
    ],
    facilitatorNotes: [
      "Junte os alunos por produto (por exemplo manga seca, farinha de mandioca, pasta de amendoim, iogurte) para partilharem a pesquisa de compradores e os custos.",
      "Faça a lição de custos com um lote real que o grupo fez, e deixe os alunos verificarem as contas uns dos outros.",
      "Convide um técnico do organismo nacional de alimentos ou de normas (KEBS, NAFDAC, Ghana FDA, CODINORM ou o organismo do seu país) para explicar os passos atuais do registo; não diga taxas de memória.",
      "Faça uma visita prática de higiene a um lugar real de processamento, e insista que os produtos de leite precisam de um método testado e de cadeia de frio.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez; faça um jogo de papéis da apresentação com um aluno no papel de comprador."
    ]
  }
};
