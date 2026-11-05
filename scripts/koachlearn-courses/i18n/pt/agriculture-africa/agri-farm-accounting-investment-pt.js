"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-farm-accounting-investment.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// All money figures are made-up examples; no investment advice.

const CBK = { name: "Central Bank of Kenya (Banco Central do Quénia: bancos, bancos de microfinanças e fornecedores de crédito digital licenciados)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (Banco Central da Nigéria: bancos e bancos de microfinanças licenciados)", url: "https://www.cbn.gov.ng" };
const BCEAO = { name: "BCEAO, Banco Central dos Estados da África Ocidental (regras para bancos e microfinanças nos países do XOF)", url: "https://www.bceao.int" };

module.exports = {
  id: "agri-farm-accounting-investment-pt",
  lang: "pt",
  translationOf: "agri-farm-accounting-investment",
  category: "Agriculture (Africa)",
  name: "Contabilidade Agrícola e Gestão de Investimentos",
  skills: "Separar custos fixos e variáveis, Calcular o custo por kg, saco ou litro, Manter um registo de despesas, Planear o fluxo de caixa mensal, Encontrar o preço de equilíbrio, Avaliar um investimento com o prazo de recuperação e o retorno simples",
  outcome: "calcular quanto custa realmente produzir um kg, um saco ou um litro, registar todas as despesas, planear o seu dinheiro mês a mês, encontrar o preço mais baixo a que pode vender sem perder, e avaliar se um investimento, como uma bomba solar, uma estufa ou mais vacas, vai pagar-se.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, gestores de explorações agrícolas, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim e em toda a África, que já fazem alguns registos e querem tomar decisões de dinheiro mais acertadas.",
    "Continua o curso \"Agronegócio e Gestão da Machamba\", que trata de registos simples e da margem bruta. Aqui vai mais longe. O Capítulo 1 é sobre conhecer os seus custos: custos fixos e variáveis, o custo de produzir uma unidade e um registo de despesas. O Capítulo 2 é sobre planear e investir: um plano de fluxo de caixa mensal, o preço de equilíbrio e a avaliação de um investimento com o seu prazo de recuperação e o retorno simples.",
    "Todos os valores em dinheiro são exemplos inventados em KES, NGN, GHS e XOF para mostrar o método; use os seus próprios preços. Este curso não dá conselhos de investimento. Antes de uma compra grande ou de um empréstimo, compare ofertas, leia todo o contrato e fale com um conselheiro de confiança, como a sua cooperativa, a SACCO (cooperativa de poupança e crédito), o extensionista ou um contabilista. Cada lição acaba com uma pequena tarefa prática e uma verificação rápida de 2 perguntas, cada capítulo com uma verificação de conhecimentos, e o curso com um questionário de 20 perguntas."
  ],
  finalTask: "Faça uma folha de custos e investimento para uma atividade da sua exploração (ou de uma exploração de exemplo): a lista dos seus custos fixos e variáveis numa época, o custo por kg, saco, litro ou ovo, um mês de registo de despesas, um plano de fluxo de caixa de 12 meses com saldos acumulados e os meses de falta marcados, o preço de equilíbrio e a produção de equilíbrio comparados com o preço que espera, e o prazo de recuperação e o retorno simples de um investimento que está a pensar fazer, com a sua decisão e porquê.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, gestores de explorações, jovens empreendedores agrícolas, líderes de cooperativas e extensionistas no Quénia, na Nigéria, no Gana e na África Ocidental francófona. A maioria cultiva milho, mandioca, arroz, feijão, hortícolas, café ou cacau, ou cria vacas leiteiras, cabras, porcos, aves ou peixe.",
    startingPoint: "Sabem somar, subtrair, multiplicar e dividir com a calculadora do telefone. Muitos fazem alguns registos e sabem mais ou menos quanto gastam e ganham; alguns fizeram a lição de margem bruta em \"Agronegócio e Gestão da Machamba\". Poucos sabem o seu custo por kg ou por litro, o seu preço de equilíbrio, ou como avaliar se um equipamento se vai pagar.",
    gap: "Muitas vezes os agricultores vendem abaixo do que lhes custou produzir, ficam sem dinheiro antes da colheita mesmo num bom ano, ou compram equipamento e animais que nunca recuperam o seu preço. Conhecer o custo por unidade, o ponto de equilíbrio e o prazo de recuperação ajuda-os a recusar maus preços, planear o dinheiro e fazer investimentos que compensam, e dá aos credores e compradores números em que podem confiar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra de dinheiro é explicada",
      "Aparelhos: basta a calculadora de um telefone simples e um caderno; uma folha de cálculo no telefone é opcional",
      "Tempo: lições de 5 a 6 minutos, que cabem entre os trabalhos da exploração",
      "Dinheiro: todos os valores são exemplos; preços, juros e subsídios mudam e devem vir da zona do próprio aluno",
      "Sem conselhos de investimento: os alunos comparam opções e falam com um conselheiro de confiança antes de decisões grandes"
    ],
    prerequisites: "Nenhum, mas \"Agronegócio e Gestão da Machamba\" (registos e margem bruta) é um bom primeiro passo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista dos custos de uma atividade numa época e a sua produção", action: "separar os custos em fixos e variáveis e calcular o custo de produzir um kg, saco, litro ou ovo", standard: "com cada custo no grupo certo e o custo por unidade certo até à unidade de dinheiro mais próxima" },
    { id: "O2", condition: "Usando um caderno ou uma folha de cálculo no telefone", action: "registar todas as despesas da exploração durante um mês por data, categoria e atividade, e somá-las por categoria", standard: "sem dias em falta e com totais que batem certo com os seus registos de dinheiro vivo e de dinheiro móvel" },
    { id: "O3", condition: "Com o dinheiro que espera receber e gastar em cada mês de um ano", action: "fazer um plano de fluxo de caixa mensal com saldos de abertura e de fecho e marcar os meses de falta", standard: "com cada saldo de fecho levado para o mês seguinte e pelo menos uma ação planeada para cada mês de falta" },
    { id: "O4", condition: "Com os custos totais, a produção esperada e o preço de um comprador", action: "calcular o preço de equilíbrio e a produção de equilíbrio e decidir se a oferta cobre os seus custos", standard: "certo até à unidade de dinheiro ou de produção mais próxima" },
    { id: "O5", condition: "Com o custo de um investimento e as receitas e custos extra que deve trazer", action: "calcular o prazo de recuperação e o retorno simples e escrever uma decisão com as suas razões", standard: "com os números certos e pelo menos dois riscos verificados (duração do bem, custo do empréstimo ou produções mais fracas)" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer os seus custos",
      lessons: [
        {
          title: "Custos fixos e variáveis",
          objectives: ["O1"],
          minutes: 5,
          goal: "Separar os custos de uma atividade em fixos e variáveis, incluindo o custo anual das ferramentas e das construções.",
          text: [
            "Os custos variáveis sobem ou descem com a quantidade que produz: semente, adubo, ração, mão de obra à jorna, serviços veterinários, sacos, combustível e transporte. Se semear metade da terra ou criar metade das aves, estes custos descem.",
            "Os custos fixos ficam mais ou menos iguais, produza o que produzir na época: renda da terra, o salário de um trabalhador permanente, uma licença de água, o seguro, e o desgaste de ferramentas, bombas, armazéns e vedações. Esse desgaste chama-se depreciação. Uma forma simples de o calcular: (preço pago - valor que resta no fim) / anos que vai durar. Exemplo (números inventados em xelins quenianos): um pulverizador de dorso custa 6,000, dura 5 anos e no fim não vale nada, por isso custa à exploração 1,200 por ano.",
            "Se uma ferramenta ou uma construção serve várias atividades, divida o seu custo anual entre elas, por exemplo pela terra ou pelo tempo que cada uma usa. Conte também o trabalho da sua família, ao preço da jorna local, para ver o custo verdadeiro do seu tempo."
          ],
          steps: ["Escolha uma atividade, como milho, tilápia ou uma vaca leiteira.", "Faça a lista de todos os custos de uma época ou de um ano.", "Marque cada um com V (variável: muda com a quantidade que produz) ou F (fixo: fica igual).", "Para ferramentas, bombas e construções, calcule a depreciação: (preço - valor que resta) / anos de vida.", "Divida os custos fixos entre as atividades que usam a mesma coisa."],
          words: [["Custo variável", "um custo que sobe ou desce com a quantidade que produz, como a semente ou a ração."], ["Custo fixo", "um custo que fica mais ou menos igual, produza o que produzir na época, como a renda da terra."], ["Depreciação", "a parte do preço de uma ferramenta ou construção que se gasta em cada ano com o desgaste."], ["Atividade", "uma produção da exploração, como o milho, as aves ou o leite."]],
          slides: [
            { title: "Custos variáveis", bullets: ["Mudam com a quantidade que produz", "Semente, adubo, ração, jorna, veterinário, sacos, combustível", "Produz menos e eles descem"] },
            { title: "Custos fixos", bullets: ["Ficam mais ou menos iguais, produza o que produzir", "Renda, salários permanentes, licenças, seguro", "Desgaste de ferramentas e construções"] },
            { title: "Depreciação", bullets: ["(Preço - valor que resta) / anos de vida", "Pulverizador 6,000 KES, 5 anos: 1,200 por ano (exemplo)", "Divida-a entre as atividades que o usam"] },
            { title: "Não se esqueça", bullets: ["Trabalho da família ao preço da jorna local", "Custos pequenos: sacos, saldo para ligar a compradores, transporte"] }
          ],
          tryIt: "Escolha uma atividade da sua exploração. Faça a lista de pelo menos oito custos da última época, marque cada um com V ou F, e calcule a depreciação anual de uma ferramenta ou construção que usa nela.",
          youCanNow: "separar os custos de uma atividade em fixos e variáveis e calcular o custo anual das suas ferramentas e construções.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um custo variável numa atividade de aves?", options: ["O desgaste anual do aviário", "A renda do terreno onde está o aviário", "A ração das aves", "O salário mensal de um trabalhador permanente"], answer: 2, why: "A ração sobe e desce com o número de aves que cria, por isso é variável." },
            { objective: "O1", q: "Uma bomba custa 50,000, dura 10 anos e no fim vale 0. A sua depreciação é:", options: ["5,000 por ano", "50,000 por ano", "500 por ano", "10,000 por ano"], answer: 0, why: "(50,000 - 0) / 10 anos = 5,000 por ano." }
          ]
        },
        {
          title: "Quanto custa produzir um kg, um saco ou um litro",
          objectives: ["O1"],
          minutes: 6,
          goal: "Calcular o custo de produzir um kg, saco, litro ou ovo numa atividade.",
          text: [
            "Custo por unidade = custo total do período / unidades produzidas nesse período. O custo total são os custos variáveis mais a parte dos custos fixos que pertence a esta atividade. A unidade é aquela em que vende: um kg de tomate, um saco de 100 kg de milho, um litro de leite, uma bandeja de ovos, um kg de tilápia.",
            "Exemplo (números inventados em xelins quenianos), uma vaca leiteira durante um mês: ração 9,500, serviços veterinários e de reprodução 1,000, mão de obra 3,000, parte dos custos fixos (estábulo, picadora de forragem, água) 1,500. Total 15,000. A vaca deu 300 litros. Custo por litro = 15,000 / 300 = 50 xelins. Se o comprador de leite pagar menos de 50, cada litro dá prejuízo.",
            "Exemplo (números inventados em nairas), um hectare de milho na Nigéria: custos variáveis 600,000, parte dos custos fixos 150,000, total 750,000, colheita de 30 sacos de 100 kg. Custo por saco = 750,000 / 30 = 25,000, ou seja, 250 nairas por kg. Faça a conta em cada época: quando a produção cai ou os preços dos insumos sobem, o custo por unidade também sobe."
          ],
          steps: ["Escolha a unidade em que vende: kg, saco, litro, ovo ou bandeja.", "Some os custos variáveis do período.", "Some a parte dos custos fixos desta atividade.", "Conte as unidades produzidas no mesmo período.", "Custo por unidade = custo total / unidades produzidas.", "Compare-o com o preço que os compradores pagam."],
          words: [["Custo por unidade", "quanto lhe custa produzir um kg, saco, litro ou ovo: o custo total dividido pelas unidades produzidas."], ["Unidade", "a quantidade em que vende, como um kg, um saco de 100 kg ou um litro."]],
          slides: [
            { title: "A fórmula", bullets: ["Custo por unidade = custo total / unidades produzidas", "Custo total = variáveis + parte dos fixos", "Use a unidade em que vende"] },
            { title: "Vaca leiteira, um mês (exemplo em KES)", bullets: ["Ração 9,500 + veterinário 1,000 + mão de obra 3,000 + fixos 1,500 = 15,000", "300 litros: 15,000 / 300 = 50 por litro", "Um comprador que paga menos de 50 dá prejuízo em cada litro"] },
            { title: "Milho, um hectare (exemplo em NGN)", bullets: ["Custo total 750,000; colheita de 30 sacos", "750,000 / 30 = 25,000 por saco = 250 por kg"] },
            { title: "Faça a conta em cada época", bullets: ["Produção mais baixa = custo por unidade mais alto", "Insumos mais caros = custo por unidade mais alto"] }
          ],
          tryIt: "Use os custos da Lição 1. Some-os, divida pelas unidades que produziu e escreva o seu custo por kg, saco, litro ou ovo. Depois escreva ao lado o último preço que um comprador lhe ofereceu.",
          youCanNow: "calcular o custo de produzir uma unidade do que vende e compará-lo com o preço que lhe oferecem.",
          quickCheck: [
            { objective: "O1", q: "O custo total de um canteiro de tomate é 40,000 e produziu 800 kg. Qual é o custo por kg?", options: ["800", "40", "500", "50"], answer: 3, why: "40,000 / 800 kg = 50 por kg." },
            { objective: "O1", q: "A sua produção cai mas os custos ficam iguais. O que acontece ao custo por unidade?", options: ["Fica igual", "Sobe", "Desce", "Passa a zero"], answer: 1, why: "O mesmo custo dividido por menos unidades dá um custo mais alto para cada unidade." }
          ]
        },
        {
          title: "Um registo de despesas que consegue manter",
          objectives: ["O2"],
          minutes: 5,
          goal: "Montar um registo de despesas e anotar todas as despesas da exploração durante um mês.",
          text: [
            "Um registo de despesas é uma lista de todos os pagamentos da exploração, sempre com as mesmas colunas: data, o que comprou, categoria (semente, adubo, ração, mão de obra, veterinário, combustível, transporte, reparações, renda), que atividade, F ou V, valor, como pagou (dinheiro vivo ou dinheiro móvel) e se guardou o recibo.",
            "Anote cada despesa no mesmo dia. No fim do mês, some cada categoria e cada atividade. Depressa vê para onde vai o dinheiro. Exemplo (números inventados em cedis do Gana), uma exploração de galinhas poedeiras num mês: ração 4,200, mão de obra 1,200, veterinário e vacinas 400, transporte 300, reparações 150, total 6,250. A ração é dois terços do custo, por isso as maiores poupanças vão vir da ração.",
            "Um caderno funciona bem. No telefone, uma folha de cálculo gratuita como o Google Sheets ou o Microsoft Excel pode somar cada categoria por você com a fórmula SUMIF (SOMA.SE em português). Compare o registo com os seus extratos de dinheiro vivo e de dinheiro móvel todas as semanas, para não faltar nada."
          ],
          steps: ["Faça as colunas: data, artigo, categoria, atividade, F ou V, valor, pago com, recibo.", "Anote cada despesa no mesmo dia.", "Todas as semanas, compare com o seu extrato de dinheiro vivo e de dinheiro móvel.", "No fim do mês, some cada categoria e cada atividade.", "Encontre a maior categoria e uma forma de a reduzir."],
          words: [["Registo de despesas", "uma lista de todos os pagamentos da exploração com as mesmas colunas, para os poder somar por categoria."], ["Categoria", "um grupo de custos parecidos, como ração, mão de obra ou transporte."], ["Recibo", "um papel ou uma mensagem que prova que pagou."]],
          slides: [
            { title: "Sempre as mesmas colunas", bullets: ["Data, artigo, categoria, atividade", "Fixo ou variável, valor", "Dinheiro vivo ou móvel, guardou o recibo?"] },
            { title: "Totais do mês (exemplo em GHS, poedeiras)", bullets: ["Ração 4,200, mão de obra 1,200, veterinário 400", "Transporte 300, reparações 150: total 6,250", "A ração é dois terços: comece a poupar aí"] },
            { title: "Mantenha-o honesto", bullets: ["Anote no mesmo dia", "Compare todas as semanas com os extratos de dinheiro móvel", "Caderno ou folha de cálculo no telefone (SUMIF)"] }
          ],
          tryIt: "Monte hoje o seu registo com as oito colunas. Preencha todas as despesas da exploração dos últimos sete dias com a sua memória, os recibos e o extrato de dinheiro móvel, e depois some-as por categoria.",
          youCanNow: "manter um registo de despesas, somá-lo por categoria e por atividade, e descobrir para onde vai o seu dinheiro.",
          quickCheck: [
            { objective: "O2", q: "Porque é que se põe uma coluna para a atividade a que pertence cada despesa?", options: ["Para ver quanto custa realmente cada atividade", "Porque os bancos a exigem todos os dias", "Para a lista ficar mais comprida", "Para não precisar de recibos"], answer: 0, why: "Os totais por atividade servem logo para calcular o custo por unidade de cada uma." },
            { objective: "O2", q: "O total do seu registo é mais baixo do que o que saiu da sua carteira de dinheiro móvel este mês. O que faz?", options: ["Ignora; diferenças pequenas não importam", "Apaga o registo e recomeça no próximo ano", "Revê o extrato e acrescenta as despesas que faltam", "Acrescenta um número inventado para bater certo"], answer: 2, why: "O extrato mostra o que pagou de verdade, por isso ajuda a encontrar e acrescentar as entradas que faltam." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer os seus custos",
        questions: [
          { objective: "O1", q: "Qual é um custo fixo numa machamba de milho?", options: ["Semente", "Adubo", "Jorna para a sacha", "Renda anual da terra"], answer: 3, why: "A renda fica igual, semeie o que semear na terra, por isso é fixa." },
          { objective: "O1", q: "Uma picadora de forragem custa 30,000, dura 6 anos e no fim vale 0. Qual é a sua depreciação anual?", options: ["5,000", "6,000", "30,000", "180,000"], answer: 0, why: "(30,000 - 0) / 6 anos = 5,000 por ano." },
          { objective: "O1", q: "O custo total de uma atividade de porcos é 90,000 e vendeu 600 kg de carne. Qual é o custo por kg?", options: ["600", "150", "90", "1,500"], answer: 1, why: "90,000 / 600 kg = 150 por kg." },
          { objective: "O2", q: "Quando deve anotar uma despesa no registo?", options: ["No fim da época", "Só quando tem recibo", "No mesmo dia em que paga", "Só para pagamentos grandes"], answer: 2, why: "Os registos feitos no mesmo dia ficam completos e certos." },
          { objective: "O2", q: "Depois de um mês de registo, a ração é 65% dos custos. Qual é o próximo passo mais útil?", options: ["Procurar primeiro formas de reduzir o custo ou o desperdício de ração", "Parar o registo porque a resposta já está clara", "Cortar primeiro a categoria mais pequena", "Comprar mais ração para ter desconto, seja qual for o preço"], answer: 0, why: "É na maior categoria que as poupanças fazem mais diferença." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear e investir",
      lessons: [
        {
          title: "Um plano de fluxo de caixa mensal com saldos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Fazer um plano de fluxo de caixa de 12 meses com saldos de abertura e de fecho e marcar os meses de falta.",
          text: [
            "Um plano de fluxo de caixa mostra, mês a mês, quanto dinheiro espera ter. Para cada mês: saldo de abertura (o dinheiro com que começa) + entradas - saídas = saldo de fecho. O saldo de fecho passa a ser o saldo de abertura do mês seguinte.",
            "Exemplo (números inventados em cedis do Gana), uma exploração de milho e aves. Março: abertura 3,000 + entradas 500 - saídas 2,000 = fecho 1,500. Abril: abertura 1,500 + entradas 500 - saídas 2,500 = fecho -500. Um saldo de fecho negativo é uma falta: não vai conseguir pagar tudo nesse mês se não planear.",
            "Para cada mês de falta, planeie uma ação antes de ele chegar: poupar da última colheita, passar uma compra para um mês mais tarde, vender a produção aos poucos, juntar uma pequena atividade que dê dinheiro nesse mês (ovos, hortícolas, peixe), combinar crédito em insumos, ou acertar com antecedência um pequeno empréstimo com pagamentos depois da colheita. Atualize o plano todos os meses com o que aconteceu de verdade."
          ],
          steps: ["Faça 12 colunas de meses e quatro linhas: abertura, entradas, saídas, fecho.", "Ponha o dinheiro que tem agora como primeiro saldo de abertura.", "Preencha as entradas e saídas esperadas para cada mês.", "Fecho = abertura + entradas - saídas; leve-o para a abertura do mês seguinte.", "Faça um círculo em cada saldo de fecho negativo.", "Escreva uma ação para cada mês com círculo e atualize todos os meses."],
          words: [["Saldo de abertura", "o dinheiro que tem no início de um mês."], ["Saldo de fecho", "o dinheiro que espera ter no fim de um mês: abertura + entradas - saídas."], ["Falta", "um mês em que as saídas são maiores do que o dinheiro que tem."]],
          slides: [
            { title: "Uma só conta", bullets: ["Abertura + entradas - saídas = fecho", "O fecho passa a ser a abertura do mês seguinte"] },
            { title: "Exemplo (GHS, inventado)", bullets: ["Março: 3,000 + 500 - 2,000 = 1,500", "Abril: 1,500 + 500 - 2,500 = -500", "Negativo = falta: planeie já"] },
            { title: "Resolver uma falta", bullets: ["Poupar da colheita; passar uma compra para mais tarde", "Vender aos poucos; juntar uma atividade que dê dinheiro nesse mês", "Crédito em insumos ou pequeno empréstimo combinado antes"] },
            { title: "Mantenha-o vivo", bullets: ["Escreva o que aconteceu de verdade em cada mês", "Atualize os meses seguintes"] }
          ],
          tryIt: "Faça o seu plano de fluxo de caixa de 12 meses começando com o dinheiro que tem hoje. Calcule todos os saldos de fecho, faça um círculo nos meses de falta e escreva uma ação para cada um.",
          youCanNow: "fazer um plano de fluxo de caixa mensal com saldos acumulados, ver cedo os meses de falta e planear o que fazer.",
          quickCheck: [
            { objective: "O3", q: "Saldo de abertura 2,000, entradas 1,000, saídas 2,500. Qual é o saldo de fecho?", options: ["5,500", "-500", "3,000", "500"], answer: 3, why: "2,000 + 1,000 - 2,500 = 500." },
            { objective: "O3", q: "O seu plano mostra uma falta em agosto. Quando deve planear o que fazer?", options: ["Já, meses antes de agosto", "Em agosto, quando chegarem as contas", "Depois da colheita", "Nunca; resolve-se sozinho"], answer: 0, why: "Planear cedo dá-lhe tempo para poupar, adiar compras ou combinar crédito em boas condições." }
          ]
        },
        {
          title: "O preço e a produção de equilíbrio",
          objectives: ["O4"],
          minutes: 5,
          goal: "Calcular o preço de equilíbrio e a produção de equilíbrio e usá-los para avaliar a oferta de um comprador.",
          text: [
            "O ponto de equilíbrio é onde as receitas cobrem exatamente o custo total: sem lucro e sem prejuízo. Preço de equilíbrio = custo total / produção esperada. É o preço mais baixo que pode aceitar sem perder dinheiro. Produção de equilíbrio = custo total / preço que espera. É a colheita mais pequena que cobre os seus custos a esse preço.",
            "Exemplo (números inventados em nairas), o hectare de milho da Lição 2: custo total 750,000, colheita esperada de 30 sacos. Preço de equilíbrio = 750,000 / 30 = 25,000 por saco. Um comprador oferece 28,000: ganha 3,000 por saco, ou 90,000 nos 30 sacos. Produção de equilíbrio a 28,000 = 750,000 / 28,000 = 26.8 sacos, por isso precisa de pelo menos 27 sacos. Se a seca reduzir a colheita para 25 sacos, perde dinheiro mesmo a esse preço.",
            "Use o ponto de equilíbrio antes de semear (esta cultura compensa aos preços prováveis?) e quando um comprador faz uma oferta (cobre os meus custos?). A diferença entre o preço esperado e o seu preço de equilíbrio é a sua margem de segurança: quanto maior for, mais aguenta uma má época ou uma queda de preço."
          ],
          steps: ["Some o custo total da atividade (variáveis + parte dos fixos).", "Preço de equilíbrio = custo total / produção esperada.", "Produção de equilíbrio = custo total / preço esperado.", "Compare com a oferta do comprador e com a produção provável.", "Escreva a sua margem de segurança: preço esperado - preço de equilíbrio."],
          words: [["Ponto de equilíbrio", "o ponto em que as receitas cobrem exatamente o custo total: sem lucro nem prejuízo."], ["Preço de equilíbrio", "o preço por unidade mais baixo que cobre os seus custos: custo total / produção."], ["Produção de equilíbrio", "a colheita mais pequena que cobre os seus custos a um certo preço: custo total / preço."], ["Margem de segurança", "quanto o preço ou a produção podem cair antes de ter prejuízo."]],
          slides: [
            { title: "Dois números de equilíbrio", bullets: ["Preço de equilíbrio = custo total / produção", "Produção de equilíbrio = custo total / preço"] },
            { title: "Exemplo do milho (NGN, inventado)", bullets: ["750,000 / 30 sacos = 25,000 por saco", "Oferta de 28,000: lucro de 3,000 por saco, 90,000 no total", "Produção de equilíbrio a 28,000: cerca de 27 sacos"] },
            { title: "Quando usar", bullets: ["Antes de semear: compensa?", "Quando um comprador oferece: cobre os custos?", "Margem de segurança maior = mais folga para uma má época"] }
          ],
          tryIt: "Use o custo total e a produção esperada da sua atividade. Calcule o preço de equilíbrio e a produção de equilíbrio ao preço de hoje, e escreva a sua margem de segurança. Aceitaria a última oferta que recebeu?",
          youCanNow: "calcular o preço e a produção de equilíbrio de uma atividade e usá-los para aceitar ou recusar uma oferta.",
          quickCheck: [
            { objective: "O4", q: "Custo total 120,000, produção esperada de 40 sacos. Qual é o preço de equilíbrio?", options: ["4,000 por saco", "40 por saco", "3,000 por saco", "160,000 por saco"], answer: 2, why: "120,000 / 40 sacos = 3,000 por saco." },
            { objective: "O4", q: "O seu preço de equilíbrio do leite é 50 por litro. Um comprador oferece 45. O que quer isto dizer?", options: ["Ganha 5 de lucro em cada litro", "Perde cerca de 5 em cada litro, a não ser que reduza custos ou encontre um comprador melhor", "A oferta é justa porque está perto", "O ponto de equilíbrio não conta para o leite"], answer: 1, why: "Um preço abaixo do ponto de equilíbrio quer dizer que cada litro vendido dá prejuízo." }
          ]
        },
        {
          title: "Avaliar um investimento: prazo de recuperação e retorno simples",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular o prazo de recuperação e o retorno simples de um investimento e decidir se faz sentido.",
          text: [
            "Um investimento é dinheiro gasto agora para ganhar mais depois: uma bomba solar, uma estufa, uma câmara frigorífica, uma pocilga ou mais vacas. Primeiro calcule a receita líquida extra por ano: o dinheiro extra que traz menos os custos extra de funcionamento (combustível, reparações, ração, mão de obra, peças). Depois: prazo de recuperação = custo do investimento / receita líquida extra por ano. Retorno simples = receita líquida extra por ano / custo do investimento x 100.",
            "Exemplo (números inventados em xelins quenianos), uma bomba solar que permite uma cultura de tomate na época seca: custo 120,000; receita extra de 55,000 por ano menos custos extra de 15,000 = 40,000 de receita líquida extra. Recuperação = 120,000 / 40,000 = 3 anos. Retorno simples = 40,000 / 120,000 x 100 = cerca de 33% por ano. Exemplo (números inventados em francos CFA), uma estufa no Senegal: custo 3,000,000; receita líquida extra de 600,000 por ano. Recuperação = 5 anos; retorno simples = 20% por ano.",
            "Depois verifique os riscos. Vai durar mais do que o prazo de recuperação (o plástico da estufa e as peças da bomba gastam-se)? Se pedir emprestado, o custo anual do empréstimo é mais baixo do que o retorno, e consegue pagá-lo antes de o bem se pagar? E se a produção ou os preços forem 20% mais baixos do que esperava? Use números prudentes, peça ao fornecedor contactos de agricultores que já o usam, e fale com um conselheiro de confiança antes de comprar. Este curso explica o método; não lhe diz o que comprar."
          ],
          steps: ["Escreva o custo completo: bem, entrega, instalação, formação.", "Estime a receita extra por ano, com produções e preços prudentes.", "Tire os custos extra de funcionamento para ter a receita líquida extra por ano.", "Recuperação = custo / receita líquida extra por ano.", "Retorno simples = receita líquida extra / custo x 100.", "Verifique a duração do bem, o custo do empréstimo e um caso 20% pior; escreva a sua decisão."],
          words: [["Investimento", "dinheiro gasto agora em algo que deve render mais depois."], ["Receita líquida extra", "o dinheiro extra que um investimento traz em cada ano menos os seus custos extra de funcionamento."], ["Prazo de recuperação", "quantos anos a receita líquida extra demora a pagar o que gastou: custo / receita líquida extra por ano."], ["Retorno simples", "a receita líquida extra por ano como percentagem do custo."]],
          slides: [
            { title: "Dois números para avaliar um investimento", bullets: ["Recuperação = custo / receita líquida extra por ano", "Retorno simples = receita líquida extra / custo x 100", "Receita líquida extra = receita extra - custos extra"] },
            { title: "Bomba solar (exemplo em KES)", bullets: ["Custo 120,000; receita líquida extra de 40,000 por ano", "Recuperação em 3 anos; retorno simples de cerca de 33%"] },
            { title: "Estufa no Senegal (exemplo em XOF)", bullets: ["Custo 3,000,000; receita líquida extra de 600,000 por ano", "Recuperação em 5 anos; retorno simples de 20%"] },
            { title: "Verifique antes de comprar", bullets: ["Dura mais do que o prazo de recuperação?", "O custo do empréstimo é mais baixo do que o retorno?", "Ainda compensa se a produção ou os preços forem 20% mais baixos?", "Fale com quem já o usa e com um conselheiro de confiança"] }
          ],
          sources: [CBK, CBN, BCEAO],
          tryIt: "Tarefa final: faça a sua folha de custos e investimento. Para uma atividade, inclua os custos fixos e variáveis, o custo por unidade, um mês de registo de despesas, um plano de fluxo de caixa de 12 meses com os meses de falta marcados, o preço e a produção de equilíbrio, e o prazo de recuperação e o retorno simples de um investimento, com a sua decisão e porquê.",
          youCanNow: "avaliar se um investimento se vai pagar, usando o prazo de recuperação, o retorno simples e uma verificação dos riscos.",
          quickCheck: [
            { objective: "O5", q: "Uma câmara frigorífica custa 200,000 e traz 50,000 de receita líquida extra por ano. Qual é o prazo de recuperação?", options: ["2 anos", "25 anos", "5 anos", "4 anos"], answer: 3, why: "200,000 / 50,000 = 4 anos." },
            { objective: "O5", q: "Um bem recupera-se em 6 anos, mas o fornecedor diz que dura cerca de 4 anos. O que isto lhe diz?", options: ["Vai gastar-se antes de se pagar, por isso é provavelmente um prejuízo", "É um ótimo investimento", "A recuperação não importa se o bem é novo", "Deve pedir mais emprestado para comprar dois"], answer: 0, why: "Se o bem se gasta antes do prazo de recuperação, a sua receita extra nunca cobre o seu custo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear e investir",
        questions: [
          { objective: "O3", q: "Num plano de fluxo de caixa, qual é o saldo de abertura do mês seguinte?", options: ["Sempre zero", "O saldo de fecho deste mês", "As entradas do mês seguinte", "O lucro do ano"], answer: 1, why: "Cada mês começa com o dinheiro com que o mês anterior acabou." },
          { objective: "O3", q: "Qual é uma ação sensata para um mês de falta que vê a chegar?", options: ["Esperar e ter esperança", "Vender toda a colheita no primeiro dia", "Passar uma compra para um mês mais tarde ou poupar da colheita para esse mês", "Aceitar qualquer empréstimo oferecido por SMS"], answer: 2, why: "Adiar gastos ou poupar antes fecha a diferença sem empréstimos arriscados." },
          { objective: "O4", q: "Custo total 300,000; o comprador paga 6,000 por saco. Qual é a produção de equilíbrio?", options: ["50 sacos", "60 sacos", "5 sacos", "1,800 sacos"], answer: 0, why: "300,000 / 6,000 = 50 sacos." },
          { objective: "O5", q: "Receita líquida extra de 30,000 por ano num investimento de 150,000. Qual é o retorno simples?", options: ["5%", "50%", "30%", "20%"], answer: 3, why: "30,000 / 150,000 x 100 = 20% por ano." },
          { objective: "O5", q: "Como calcula a receita líquida extra de uma nova bomba solar?", options: ["Conta só a receita extra", "Tira o preço da bomba a uma colheita", "Receita extra que traz menos os seus custos extra de funcionamento", "Pede ao vendedor que lhe diga o lucro"], answer: 2, why: "Os custos de funcionamento, como reparações e mão de obra, reduzem o que a bomba rende de verdade." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Contabilidade Agrícola e Gestão de Investimentos",
    questions: [
      { objective: "O1", q: "Que custo muda com a quantidade que produz?", options: ["Um custo variável, como a ração", "Um custo fixo, como a renda da terra", "A depreciação de um armazém", "Uma licença de água"], answer: 0, why: "Os custos variáveis sobem e descem com a produção." },
      { objective: "O1", q: "Uma vedação custou 40,000, dura 8 anos e no fim vale 0. Qual é a sua depreciação anual?", options: ["8,000", "320,000", "40,000", "5,000"], answer: 3, why: "(40,000 - 0) / 8 = 5,000 por ano." },
      { objective: "O1", q: "Porque se conta o trabalho da família ao preço da jorna local?", options: ["Porque as Finanças o exigem", "Para ver o custo verdadeiro de produzir cada unidade", "Para a exploração parecer mais pobre", "Não é preciso"], answer: 1, why: "O tempo da sua família tem valor; deixá-lo de fora esconde o custo real." },
      { objective: "O1", q: "O custo total de um tanque de tilápia é 60,000 e colheu 300 kg. Qual é o custo por kg?", options: ["300", "2,000", "200", "20"], answer: 2, why: "60,000 / 300 kg = 200 por kg." },
      { objective: "O1", q: "Os preços dos insumos sobem mas a colheita fica igual. O seu custo por unidade:", options: ["Sobe", "Desce", "Fica igual", "Não se pode calcular"], answer: 0, why: "Um custo total maior dividido pelo mesmo número de unidades dá um custo por unidade mais alto." },
      { objective: "O2", q: "Que conjunto de colunas faz um registo de despesas útil?", options: ["Só o valor", "Artigo e cor", "Nome do comprador e preço", "Data, artigo, categoria, atividade, F ou V, valor, pago com, recibo"], answer: 3, why: "Estas colunas deixam-no somar os custos por categoria e atividade e verificá-los." },
      { objective: "O2", q: "De quanto em quanto tempo deve comparar o registo com o extrato de dinheiro móvel?", options: ["Uma vez por ano", "Todas as semanas", "Nunca", "Só quando um credor pede"], answer: 1, why: "Verificar todas as semanas apanha as despesas em falta enquanto ainda se lembra delas." },
      { objective: "O2", q: "Que fórmula de folha de cálculo pode somar todas as despesas de uma categoria?", options: ["SUMIF", "LEN", "TODAY", "UPPER"], answer: 0, why: "A SUMIF soma os valores que cumprem uma condição, como a categoria \"ração\"." },
      { objective: "O3", q: "O saldo de fecho calcula-se assim:", options: ["Só entradas - saídas", "Saldo de abertura x entradas", "Saldo de abertura + entradas - saídas", "Saídas - saldo de abertura"], answer: 2, why: "Começa com o saldo de abertura, soma o que entra e tira o que sai." },
      { objective: "O3", q: "Abertura 4,000, entradas 0, saídas 5,000. O que lhe diz o saldo de fecho?", options: ["Tem 9,000", "Vai ter uma falta de 1,000", "Tem 1,000 de sobra", "Nada de útil"], answer: 1, why: "4,000 + 0 - 5,000 = -1,000, uma falta." },
      { objective: "O3", q: "O que ajuda mais num mês de falta antes da colheita?", options: ["Ignorá-lo até chegar", "Gastar mais no mês anterior", "Pedir emprestado a um credor que não verificou", "Uma pequena atividade que dê dinheiro nesse mês, como ovos ou hortícolas"], answer: 3, why: "Uma receita no mês da fome cobre a diferença sem dívidas arriscadas." },
      { objective: "O3", q: "Porque se atualiza o plano de fluxo de caixa todos os meses?", options: ["Para corresponder ao que aconteceu de verdade e ver melhor os meses seguintes", "Porque o banco o muda", "Para os números parecerem maiores", "Não se deve atualizar"], answer: 0, why: "Um plano que acompanha a realidade avisa-o cedo de novas faltas." },
      { objective: "O4", q: "O preço de equilíbrio é:", options: ["Custo total / produção esperada", "Produção esperada / custo total", "Preço x produção", "Receitas - custo total"], answer: 0, why: "Dividir o custo total pelas unidades que espera dá o preço mais baixo que cobre os custos." },
      { objective: "O4", q: "Custo total 200,000; produção esperada de 50 sacos. Um comprador oferece 3,500 por saco. Deve aceitar, olhando aos custos?", options: ["Sim, 3,500 cobre o custo", "Sim, qualquer oferta é boa", "Não, o preço de equilíbrio é 4,000 por saco", "Não se pode saber"], answer: 2, why: "200,000 / 50 = 4,000 por saco, por isso a 3,500 perde 500 por saco." },
      { objective: "O4", q: "A produção de equilíbrio diz-lhe:", options: ["O melhor preço que pode obter", "A colheita mais pequena que cobre os seus custos a um certo preço", "Quanto adubo usar", "O seu lucro anual"], answer: 1, why: "É o custo total dividido pelo preço: a colheita de que precisa para não ter prejuízo." },
      { objective: "O4", q: "Preço esperado de 30,000 por saco, preço de equilíbrio de 25,000 por saco. A sua margem de segurança é:", options: ["55,000 por saco", "25,000 por saco", "30,000 por saco", "5,000 por saco"], answer: 3, why: "30,000 - 25,000 = 5,000 por saco antes de ter prejuízo." },
      { objective: "O5", q: "O prazo de recuperação é:", options: ["Custo do investimento / receita líquida extra por ano", "Receita líquida extra / custo x 100", "Juros do empréstimo x anos", "Custo - receita anual"], answer: 0, why: "Mostra quantos anos de receita líquida extra pagam o custo." },
      { objective: "O5", q: "Mais três vacas leiteiras custam 450,000 e trazem 150,000 de receita líquida extra por ano. Qual é o retorno simples?", options: ["3%", "15%", "33%", "300%"], answer: 2, why: "150,000 / 450,000 x 100 = cerca de 33% por ano." },
      { objective: "O5", q: "Pensa pedir um empréstimo para uma estufa. Que verificação importa mais?", options: ["A cor da estufa", "Se o custo anual do empréstimo é mais baixo do que o retorno e se os pagamentos cabem no seu fluxo de caixa", "Se os vizinhos têm uma", "Nada, se o vendedor for simpático"], answer: 1, why: "Um empréstimo que custa mais do que o retorno, ou que não consegue pagar a tempo, transforma o investimento num prejuízo." },
      { objective: "O5", q: "Um fornecedor promete que uma bomba vai duplicar a sua receita. O que deve fazer?", options: ["Comprá-la já", "Usar o número do fornecedor como a sua estimativa", "Pagar um sinal antes de perguntar seja o que for", "Usar números prudentes, falar com agricultores que a usam e consultar um conselheiro de confiança"], answer: 3, why: "Números prudentes e a experiência de quem já usa protegem-no de conversas de venda otimistas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 8, 9, 12, 13, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte da folha e verifique-a outra vez.",
    criteria: [
      { name: "Custos separados e custo por unidade", objective: "O1", notYet: "Faltam custos ou estão misturados, ou o custo por unidade está errado ou falta.", meets: "Cada custo está marcado como fixo ou variável, a depreciação está incluída e o custo por unidade está certo.", exceeds: "Os custos fixos estão divididos de forma justa entre as atividades e o trabalho da família está valorizado ao preço da jorna local." },
      { name: "Registo de despesas", objective: "O2", notYet: "Menos de metade dos dias estão registados, ou não há totais por categoria.", meets: "Um mês de despesas com todas as colunas, somado por categoria e atividade, a bater certo com o dinheiro vivo e o dinheiro móvel.", exceeds: "Também indica a maior categoria e uma forma realista de a reduzir." },
      { name: "Plano de fluxo de caixa", objective: "O3", notYet: "Faltam meses ou os saldos de fecho não passam para o mês seguinte.", meets: "Doze meses com saldos de abertura e de fecho certos, meses de falta com círculo e uma ação para cada um.", exceeds: "As ações têm data e custo, e o plano foi atualizado com um mês real." },
      { name: "Ponto de equilíbrio", objective: "O4", notYet: "O preço ou a produção de equilíbrio faltam ou estão errados.", meets: "O preço e a produção de equilíbrio estão certos e comparados com o preço e a produção esperados.", exceeds: "Também mostra a margem de segurança e o que acontece se a produção cair 20%." },
      { name: "Decisão de investimento", objective: "O5", notYet: "Não há prazo de recuperação nem retorno, ou a decisão não tem razões.", meets: "O prazo de recuperação e o retorno simples estão certos e a decisão indica pelo menos dois riscos verificados.", exceeds: "Inclui um caso 20% pior, a duração do bem e o custo de qualquer empréstimo, com um sim, não ou esperar bem claro." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da folha de custos e investimento",
      "Alunos que ainda mantêm um registo de despesas 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter recusado um preço abaixo do seu preço de equilíbrio ou mudado uma venda por causa dele",
      "Alunos que dizem ter adiado, mudado ou tomado uma decisão de investimento usando o prazo de recuperação e o retorno simples",
      "As cooperativas ou os credores parceiros dizem que mais membros trazem números de custos e de fluxo de caixa para as conversas de empréstimo ou de contrato"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, ou um telefone com uma aplicação gratuita de folha de cálculo (Google Sheets ou Microsoft Excel)",
      "A calculadora do telefone",
      "Os custos, recibos e extratos de dinheiro móvel do próprio aluno para uma atividade, ou os números de exemplo do curso",
      "Cerca de 75 minutos no total, em sessões curtas, mais um mês de registo de despesas para a tarefa final"
    ],
    facilitatorNotes: [
      "Num grupo de agricultores ou numa sessão de extensão: façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas em pares.",
      "Traga um orçamento real ou de exemplo de uma atividade para que os alunos sem registos também possam praticar; garanta que todos verificam as contas numa calculadora.",
      "Lembre aos alunos que todos os valores do curso são exemplos; peça-lhes que usem os preços do seu próprio mercado e dos seus fornecedores.",
      "Não recomende equipamentos, credores ou fornecedores específicos; peça aos alunos que comparem ofertas e falem com um conselheiro de confiança.",
      "Peça aos alunos que comecem o registo de despesas depois da Lição 3 para terem um mês completo para a tarefa final; avalie a folha com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
