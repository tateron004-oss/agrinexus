"use strict";

// Koach Learn course (Portuguese translation of shared/quickbooks-bookkeeping.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Product, credential and organization names (QuickBooks, Intuit, Certiport, IRS, Form W-9) stay in English. Words used: invoice = "fatura", bill = "fatura de fornecedor".

const CERTIPORT = { name: "Certiport (Pearson VUE): Intuit certifications, including QuickBooks Certified User and Intuit Certified Bookkeeping Professional", url: "https://certiport.pearsonvue.com/Certifications/QuickBooks/Certified-User/Overview" };
const ACADEMY = { name: "Intuit Academy (Intuit's training and certification site)", url: "https://academy.intuit.com/" };
const TESTDRIVE = { name: "Intuit QuickBooks help: Test drive and practice using QuickBooks Online", url: "https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business-processes/test-drive-quickbooks-online/L9C12ODlA_US_en_US" };
const PROADVISOR = { name: "QuickBooks ProAdvisor training and certification (for accountants)", url: "https://quickbooks.intuit.com/accountants/training-certification/" };

module.exports = {
  id: "quickbooks-bookkeeping-pt",
  lang: "pt",
  translationOf: "quickbooks-bookkeeping",
  category: "Workforce Development",
  name: "Contabilidade com QuickBooks",
  skills: "Montar um plano de contas, Registar faturas e pagamentos, Lançar faturas de fornecedores e despesas, Reconciliar uma conta bancária, Ler os relatórios principais, Planear uma certificação QuickBooks",
  outcome: "manter a contabilidade de um pequeno negócio no QuickBooks Online durante um mês: separar o dinheiro pelas contas certas, registar vendas, pagamentos, faturas de fornecedores e despesas, comparar e reconciliar o banco, gerar os relatórios principais e seguir um plano para obter uma certificação QuickBooks.",
  about: [
    "Quase todos os pequenos negócios, igrejas e associações sem fins lucrativos precisam de alguém que faça a sua contabilidade, e muitos usam o QuickBooks. A contabilidade pode ser um trabalho a tempo inteiro, um trabalho a tempo parcial feito a partir de casa ou um negócio próprio com vários clientes. Este curso é para quem procura emprego, trabalhadores de escritório que querem um cargo melhor, donos de pequenos negócios e voluntários de associações.",
    "Você vai praticar o trabalho real: o plano de contas, as faturas e os pagamentos dos clientes, as faturas de fornecedores e as despesas, os movimentos do banco, uma reconciliação bancária, a conta de lucros e perdas, o balanço e uma lista de fecho do mês. Pratica no test drive do QuickBooks Online da Intuit, uma empresa de exemplo que se abre num navegador de internet e onde nada do que faz fica guardado, ou em papel, se não tiver computador.",
    "O curso prepara-o para o trabalho de contabilidade e para certificações da Intuit, como a QuickBooks Certified User e a Intuit Certified Bookkeeping Professional, cujos exames são feitos pela Certiport. O curso não dá nenhuma certificação; você ganha-a passando no exame oficial. Consulte as páginas oficiais para ver os dados e os preços atuais.",
    "Se já fez o curso \"Contabilidade Básica\", este é o passo seguinte. Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" e uma verificação rápida de duas perguntas. Há uma verificação de conhecimentos depois de cada capítulo, um questionário de 20 perguntas no final e uma tarefa final que pode mostrar a um empregador ou a um cliente."
  ],
  finalTask: "Prepare o seu pacote de fecho do mês no QuickBooks para um negócio de exemplo (uma empresa de limpezas, uma carrinha de comida ou uma pequena associação): (1) um plano de contas com pelo menos 12 contas, cada uma marcada como receita, despesa, ativo, passivo ou capital próprio; (2) um registo de pelo menos 10 movimentos que lançou no test drive do QuickBooks Online ou em papel (pelo menos 3 faturas, 2 pagamentos de clientes e 4 faturas de fornecedores ou despesas), cada um com a data, o cliente ou fornecedor, a conta e o valor; (3) uma reconciliação bancária do mês que termine com uma diferença de zero, ou uma nota escrita sobre o que ainda não bate certo e porquê; (4) um resumo de um parágrafo sobre a conta de lucros e perdas do mês; e (5) um plano de 60 dias para a certificação, com datas: que certificação da Intuit vai preparar, quando vai consultar a página oficial e quando vai fazer testes de prática.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos que querem trabalho de escritório ou de contabilidade: pessoas à procura de emprego, trabalhadores de escritório e de lojas que querem subir, pessoas que voltam para casa depois da prisão, imigrantes com experiência em negócios, donos de pequenos negócios que fazem a sua própria contabilidade e voluntários de associações que tratam do dinheiro.",
    startingPoint: "Sabem usar um navegador de internet e fazer contas do dia a dia com uma calculadora. Alguns já registaram dinheiro em papel ou numa folha de cálculo. A maioria nunca usou o QuickBooks nem ouviu falar de plano de contas, reconciliação ou balanço.",
    gap: "Os empregadores e os clientes querem contabilistas que já saibam como o QuickBooks regista vendas, faturas de fornecedores e movimentos do banco, e que consigam pôr os registos a bater certo com o banco todos os meses. Sem isso, pequenos erros acumulam-se e dão impostos errados, contas por pagar esquecidas e faturas por cobrar. Aprender os passos e os relatórios, e ter um plano para uma certificação da Intuit, torna o aluno mais fácil de contratar e capaz de servir os seus próprios clientes.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 7.º ao 8.º ano); todas as palavras de contabilidade são explicadas",
      "Aparelhos: um computador ou tablet com navegador de internet para o test drive; todas as práticas também se fazem em papel",
      "Custo: o test drive abre num navegador sem comprar o QuickBooks; não guarda as mudanças, por isso os alunos tomam notas",
      "O QuickBooks muda os ecrãs com frequência, por isso o curso ensina ações e nomes de relatórios, não caminhos exatos nos menus",
      "Privacidade: a prática usa a empresa de exemplo ou números inventados, nunca acessos bancários nem números de conta verdadeiros",
      "As regras dos impostos mudam e variam de lugar para lugar: as lições indicam o irs.gov ou um profissional de impostos e não dão conselhos fiscais"
    ],
    prerequisites: "Nenhum, mas os cursos \"Contabilidade Básica\" ou \"Excel e Folhas de Cálculo\" ajudam quem nunca registou o dinheiro que entra e que sai."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um anúncio de emprego de contabilidade ou um pedido de um cliente", action: "listar as principais tarefas de um contabilista que usa QuickBooks e indicar uma certificação da Intuit adequada ao trabalho", standard: "indicando pelo menos quatro tarefas e a página oficial onde se consulta a certificação" },
    { id: "O2", condition: "Com uma lista dos movimentos de dinheiro de um pequeno negócio", action: "colocar cada item no tipo de conta certo de um plano de contas", standard: "acertando o tipo de conta em pelo menos 9 de 10 itens" },
    { id: "O3", condition: "Com uma venda, um cliente e um pagamento", action: "registar no QuickBooks a fatura ou o recibo de venda e o pagamento do cliente", standard: "com o cliente, a data, o valor e a conta de receita certos, e nenhuma fatura aberta depois de paga" },
    { id: "O4", condition: "Com uma fatura de fornecedor, um recibo e um fornecedor", action: "lançar no QuickBooks a fatura do fornecedor, a despesa e o pagamento da fatura do fornecedor", standard: "com o fornecedor, a data, o valor e a conta de despesa certos, e o recibo anexado ou anotado" },
    { id: "O5", condition: "Com um mês de movimentos do banco e um extrato bancário", action: "fazer corresponder os movimentos do banco e reconciliar a conta bancária", standard: "terminando com uma diferença de zero, ou uma nota escrita sobre o que ainda não bate certo" },
    { id: "O6", condition: "No final de um mês", action: "gerar e explicar a conta de lucros e perdas, o balanço e o relatório das faturas em aberto", standard: "dizendo o lucro ou o prejuízo do mês e quem ainda deve dinheiro" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar e registar as vendas",
      lessons: [
        {
          title: "O trabalho de contabilista com QuickBooks e o caminho até lá",
          objectives: ["O1"],
          minutes: 5,
          goal: "Listar as principais tarefas de um contabilista que usa QuickBooks e indicar uma certificação que pode ajudar a ser contratado.",
          text: [
            "Um contabilista regista o dinheiro de um negócio para que o dono saiba sempre como está. No QuickBooks isso quer dizer: enviar faturas e registar os pagamentos dos clientes, lançar faturas de fornecedores e despesas, rever os movimentos do banco, reconciliar o banco todos os meses, gerar relatórios e guardar os recibos. Os contabilistas trabalham para uma empresa, para um gabinete de contabilidade ou para vários pequenos clientes, como negócio próprio. As igrejas e as associações também precisam deles.",
            "O QuickBooks Online é a versão da Intuit que funciona na internet, num navegador. O QuickBooks Desktop é instalado num computador. A maioria dos novos clientes de pequenos negócios usa o QuickBooks Online, por isso este curso usa-o, mas as ideias são as mesmas nos dois.",
            "Duas certificações da Intuit combinam com este curso. A QuickBooks Certified User mostra que você sabe usar o QuickBooks. A Intuit Certified Bookkeeping Professional mostra que você conhece as bases da contabilidade. Os dois exames são feitos pela Certiport, uma empresa da Pearson VUE, e a Intuit Academy oferece formação. Os contabilistas certificados também podem obter a certificação QuickBooks ProAdvisor. Este curso prepara-o; não dá nenhuma certificação. Os preços, as condições e os dados dos exames mudam, por isso consulte as páginas oficiais.",
            "Um contabilista de registos não é um preparador de impostos nem um contabilista público certificado (CPA). Você mantém os registos limpos; as perguntas sobre impostos vão para um profissional de impostos ou para o irs.gov."
          ],
          words: [["Contabilista", "pessoa que regista o dinheiro que entra e sai de um negócio e mantém os registos certos (em inglês, bookkeeper)."], ["QuickBooks Online", "o programa de contabilidade da Intuit que funciona num navegador de internet."], ["Certificação", "um certificado que mostra que você passou num exame oficial."], ["Certiport", "uma empresa da Pearson VUE que faz os exames de certificação da Intuit."], ["CPA", "contabilista público certificado (certified public accountant): um contabilista com licença que pode fazer trabalhos que um contabilista de registos não pode, como auditorias."]],
          slides: [
            { title: "O que faz um contabilista com QuickBooks", bullets: ["Faturas e pagamentos dos clientes", "Faturas de fornecedores e despesas", "Movimentos do banco e reconciliação mensal", "Relatórios e recibos"] },
            { title: "Onde trabalham os contabilistas", bullets: ["Numa empresa ou num gabinete de contabilidade", "Para vários pequenos clientes, como negócio próprio", "Em igrejas e associações"] },
            { title: "Certificações que podem ajudar", bullets: ["QuickBooks Certified User", "Intuit Certified Bookkeeping Professional", "Exames feitos pela Certiport; consulte a página oficial"] },
            { title: "Conheça o seu papel", bullets: ["Você mantém os registos limpos", "Perguntas sobre impostos: profissional de impostos ou irs.gov", "Este curso prepara-o; o exame dá a certificação"] }
          ],
          sources: [CERTIPORT, ACADEMY, PROADVISOR],
          tryIt: "Procure na internet um anúncio de emprego de contabilidade (pesquise \"bookkeeper QuickBooks\" ou \"contabilista QuickBooks\" num site de emprego). Escreva quatro tarefas que o anúncio lista e se pede uma certificação QuickBooks. Depois abra a página da Certiport nas fontes e escreva os nomes das duas certificações da Intuit que combinam.",
          youCanNow: "listar o que faz um contabilista com QuickBooks e indicar uma certificação adequada ao trabalho.",
          quickCheck: [
            { objective: "O1", q: "Que tarefa faz parte do trabalho mensal de um contabilista?", options: ["Assinar a declaração de impostos da empresa como CPA", "Reconciliar a conta bancária", "Fazer a auditoria de outra empresa", "Dar conselhos de investimento"], answer: 1, why: "Reconciliar o banco todos os meses é uma parte central do trabalho de contabilidade." },
            { objective: "O1", q: "Quem faz o exame QuickBooks Certified User?", options: ["O IRS", "O serviço de trabalho do seu estado", "Qualquer utilizador do QuickBooks", "A Certiport, para a Intuit"], answer: 3, why: "A Certiport, uma empresa da Pearson VUE, faz os exames de certificação da Intuit." }
          ]
        },
        {
          title: "O plano de contas e os lançamentos com dois lados",
          objectives: ["O2"],
          minutes: 6,
          goal: "Colocar os movimentos de dinheiro de um negócio nos cinco tipos de contas.",
          text: [
            "O plano de contas é a lista de todos os lugares onde o dinheiro pode ser arrumado no QuickBooks. Cada conta pertence a um de cinco tipos. Receitas: dinheiro ganho, como vendas ou donativos. Despesas: custos de funcionamento do negócio, como materiais, renda e combustível. Ativos: coisas que o negócio tem ou que lhe devem, como a conta bancária, o equipamento e o dinheiro que os clientes ainda devem. Passivos: dinheiro que o negócio deve, como um empréstimo, um cartão de crédito ou faturas de fornecedores ainda por pagar. Capital próprio: a parte do dono, incluindo o dinheiro que o dono pôs ou tirou.",
            "Cada lançamento mexe em pelo menos duas contas. Isso chama-se contabilidade de dupla entrada (ou partidas dobradas). Quando envia uma fatura de $200, as receitas sobem e o dinheiro que os clientes lhe devem (contas a receber) também sobe. Quando o cliente paga, as contas a receber descem e o banco sobe. O QuickBooks faz o segundo lado por você quando usa o formulário certo, e é por isso que escolher o formulário e a conta certos é importante.",
            "O QuickBooks dá a cada nova empresa um plano de contas inicial, conforme o tipo de negócio. Um contabilista arruma-o: acrescenta as contas que o negócio usa de verdade, muda o nome das contas pouco claras e mantém os mesmos nomes todos os meses. Uma associação pode acrescentar contas como Donativos, Subsídios e Materiais dos programas.",
            "No test drive, pesquise \"chart of accounts\" (plano de contas) para abrir a lista e ver o tipo de cada conta."
          ],
          steps: ["Abra o plano de contas (pesquise-o se não o encontrar).", "Leia o tipo de cada conta: receita, despesa, ativo, passivo ou capital próprio.", "Acrescente as contas que o negócio usa de verdade.", "Mude o nome das contas pouco claras para que qualquer pessoa as entenda.", "Use sempre a mesma conta para o mesmo tipo de dinheiro."],
          words: [["Plano de contas", "a lista de todas as contas onde o dinheiro pode ser arrumado (em inglês, chart of accounts)."], ["Ativo", "algo que o negócio tem ou que lhe devem, como dinheiro no banco ou equipamento."], ["Passivo", "dinheiro que o negócio deve, como um empréstimo ou uma fatura por pagar."], ["Capital próprio", "a parte do dono no negócio (em inglês, equity)."], ["Contas a receber (A/R)", "dinheiro que os clientes devem ao negócio."], ["Contas a pagar (A/P)", "dinheiro que o negócio deve aos fornecedores por faturas ainda por pagar."], ["Dupla entrada", "cada lançamento muda pelo menos duas contas para que os registos fiquem equilibrados."]],
          slides: [
            { title: "Cinco tipos de contas", bullets: ["Receitas e despesas", "Ativos e passivos", "Capital próprio: a parte do dono"] },
            { title: "Cada lançamento tem dois lados", bullets: ["Fatura: receitas sobem, A/R sobe", "Pagamento: A/R desce, banco sobe", "O formulário certo faz o QuickBooks tratar dos dois"] },
            { title: "Arrume a lista", bullets: ["Acrescente as contas que o negócio usa", "Mude o nome das contas pouco claras", "A mesma conta para o mesmo tipo de dinheiro"] },
            { title: "Exemplo de uma associação", bullets: ["Receitas: Donativos, Subsídios", "Despesas: Materiais dos programas, Renda"] }
          ],
          tryIt: "Em papel, faça duas colunas: Item e Tipo de conta. Arrume estes dez itens: materiais de limpeza, dinheiro na conta à ordem do negócio, um cliente que deve $150, um empréstimo para a carrinha, vendas de serviços de limpeza, o dono a pôr $500 para começar, a renda, o saldo de um cartão de crédito, um subsídio recebido (para uma associação) e um aspirador novo. Depois abra o plano de contas no test drive e compare como a empresa de exemplo arruma itens parecidos.",
          youCanNow: "arrumar os movimentos de dinheiro em contas de receitas, despesas, ativos, passivos e capital próprio.",
          quickCheck: [
            { objective: "O2", q: "Um negócio deve $3,000 de um empréstimo para uma carrinha. Que tipo de conta é o empréstimo?", options: ["Passivo", "Receita", "Despesa", "Capital próprio"], answer: 0, why: "O dinheiro que o negócio deve é um passivo." },
            { objective: "O2", q: "O dinheiro que os clientes ainda devem ao negócio é registado em:", options: ["Contas a pagar", "Despesa de renda", "Contas a receber", "Capital próprio do dono"], answer: 2, why: "As contas a receber (A/R) são o dinheiro que os clientes devem." }
          ]
        },
        {
          title: "Faturas, recibos de venda e pagamentos dos clientes",
          objectives: ["O3"],
          minutes: 6,
          goal: "Registar no QuickBooks uma fatura, um recibo de venda e um pagamento de um cliente.",
          text: [
            "Use uma fatura quando o cliente paga mais tarde. A fatura mostra o cliente, a data, os produtos ou serviços, o valor e a data de pagamento. Use um recibo de venda quando o cliente paga no momento da venda, como numa venda de uma carrinha de comida. Os dois registam receitas; só a fatura cria dinheiro a receber (contas a receber).",
            "Quando uma fatura é paga, registe o pagamento nessa fatura. Não crie uma nova venda, senão a receita é contada duas vezes. O QuickBooks marca então a fatura como paga. Se o cliente pagou em dinheiro ou com cheque, o QuickBooks pode guardar o pagamento até você registar o depósito no banco, para que o depósito bata certo com o que o banco mostra.",
            "Crie cada cliente uma vez, com o nome e os contactos, e crie cada produto ou serviço uma vez, com o preço e a conta de receita. Assim, todas as faturas usam as mesmas contas.",
            "No QuickBooks Online, os novos formulários, como faturas, recibos de venda e pagamentos, começam no botão Novo (+). No test drive nada fica guardado, por isso escreva o que lançou."
          ],
          steps: ["Escolha o formulário: fatura (paga mais tarde) ou recibo de venda (pago agora).", "Escolha o cliente ou acrescente um novo.", "Escreva a data, o produto ou serviço, o valor e a data de pagamento.", "Guarde o formulário.", "Quando o cliente pagar uma fatura, registe o pagamento nessa fatura.", "Registe o depósito no banco se o QuickBooks guardar o pagamento para depositar mais tarde.", "Confirme que a fatura aparece agora como paga."],
          words: [["Fatura", "um documento de cobrança que envia a um cliente que vai pagar mais tarde (em inglês, invoice)."], ["Recibo de venda", "o registo de uma venda paga no momento da venda (em inglês, sales receipt)."], ["Pagamento do cliente", "o registo de que um cliente pagou uma fatura."], ["Depósito", "dinheiro posto no banco, que deve bater certo com o extrato bancário."]],
          slides: [
            { title: "Fatura ou recibo de venda?", bullets: ["Fatura: o cliente paga mais tarde", "Recibo de venda: pago no momento da venda", "Só a fatura cria A/R"] },
            { title: "Registe o pagamento na fatura", bullets: ["Nunca faça uma segunda venda para ele", "Senão a receita é contada duas vezes", "A fatura aparece então como paga"] },
            { title: "Crie uma vez, use sempre", bullets: ["Clientes com os seus contactos", "Produtos e serviços com preço e conta de receita"] },
            { title: "Os depósitos batem certo com o banco", bullets: ["Dinheiro e cheques podem esperar para ser depositados", "Registe o depósito para bater certo com o extrato"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Abra o test drive do QuickBooks Online (link nas fontes; abra-o numa janela privada do navegador). Crie uma fatura de $250 de serviços de jardinagem para um cliente de exemplo, a pagar em 30 dias. Depois receba um pagamento dessa fatura e confirme que a fatura aparece como paga. Escreva em papel o cliente, a data, o valor e a conta de receita, porque o test drive não guarda nada. Não tem computador? Desenhe a fatura e o pagamento em papel.",
          youCanNow: "registar uma fatura, um recibo de venda e um pagamento de um cliente para que a receita seja contada uma só vez.",
          quickCheck: [
            { objective: "O3", q: "Um cliente de uma carrinha de comida paga ao balcão. Que formulário usa?", options: ["Fatura", "Fatura de fornecedor", "Nota de encomenda", "Recibo de venda"], answer: 3, why: "Um recibo de venda regista uma venda paga no momento da venda." },
            { objective: "O3", q: "Um cliente paga uma fatura de $250. O que regista?", options: ["Um novo recibo de venda de $250", "Um pagamento nessa fatura", "Uma fatura de fornecedor de $250", "Nada; o QuickBooks já sabe"], answer: 1, why: "Registar o pagamento na fatura fecha-a sem contar a receita duas vezes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar e registar as vendas",
        questions: [
          { objective: "O1", q: "Que frase sobre este curso é verdadeira?", options: ["Prepara-o; o exame oficial dá a certificação", "Dá a certificação QuickBooks Certified User", "Faz de você um CPA", "Substitui um preparador de impostos"], answer: 0, why: "O curso prepara-o; a Certiport faz o exame que dá a certificação." },
          { objective: "O2", q: "A renda paga pela loja é que tipo de conta?", options: ["Ativo", "Passivo", "Despesa", "Receita"], answer: 2, why: "A renda é um custo de funcionamento do negócio, por isso é uma despesa." },
          { objective: "O2", q: "O dono põe $500 do seu próprio dinheiro no negócio. Isso vai para:", options: ["Receitas de vendas", "Capital próprio", "Contas a pagar", "Despesa de materiais"], answer: 1, why: "O dinheiro que o dono põe faz parte do capital próprio do dono, não é receita." },
          { objective: "O3", q: "Um cliente de limpezas vai pagar em 30 dias. Que formulário cria?", options: ["Um recibo de venda", "Uma fatura de fornecedor", "Um depósito", "Uma fatura"], answer: 3, why: "Uma fatura é para um cliente que paga mais tarde." },
          { objective: "O3", q: "Um contabilista criou uma nova venda para o pagamento de um cliente em vez de registar o pagamento na fatura. O que corre mal?", options: ["A receita é contada duas vezes e a fatura fica aberta", "Nada corre mal", "O saldo do banco desce", "O cliente paga uma taxa"], answer: 0, why: "A fatura e a nova venda contam ambas como receita, e a fatura continua a parecer por pagar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Faturas de fornecedores, o banco e o fecho do mês",
      lessons: [
        {
          title: "Faturas de fornecedores, despesas e fornecedores",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lançar uma fatura de fornecedor, uma despesa e um pagamento de fatura de fornecedor com o fornecedor e a conta certos.",
          text: [
            "Um fornecedor é qualquer pessoa ou empresa a quem o negócio compra: a loja de materiais, o senhorio, a empresa de telefone. Crie cada fornecedor uma vez.",
            "Use uma fatura de fornecedor quando o negócio vai pagar mais tarde, como uma fatura de um fornecedor a pagar em 30 dias. A fatura de fornecedor vai para as contas a pagar. Quando a pagar, registe um pagamento nessa fatura de fornecedor para que não seja contada duas vezes. Use uma despesa quando o negócio paga logo, como uma compra com cartão na loja de ferragens.",
            "Escolha a conta de despesa que combina com o que foi comprado: Materiais, Combustível, Renda, Telefone. Anexe no QuickBooks uma foto do recibo ou escreva o número do recibo na nota. Os recibos provam cada despesa se alguém perguntar mais tarde.",
            "Se o negócio paga a trabalhadores independentes (contratados), peça a cada um o Form W-9 antes de pagar e marque-os como contratados, porque alguns negócios têm de entregar declarações de informação sobre eles. As regras e os valores mudam, por isso consulte o irs.gov ou um profissional de impostos."
          ],
          steps: ["Escolha o fornecedor ou acrescente um novo.", "Escolha fatura de fornecedor (paga mais tarde) ou despesa (paga agora).", "Escreva a data, o valor e a conta de despesa que combina.", "Anexe o recibo ou anote o seu número.", "Quando pagar uma fatura de fornecedor, registe um pagamento nessa fatura.", "Confirme que a fatura de fornecedor aparece agora como paga."],
          words: [["Fornecedor", "uma pessoa ou empresa a quem o negócio compra (em inglês, vendor)."], ["Fatura de fornecedor", "o registo de algo que o negócio vai pagar mais tarde (em inglês, bill)."], ["Despesa", "o registo de algo que o negócio pagou logo (em inglês, expense)."], ["Pagamento de fatura de fornecedor", "o registo de que uma fatura de fornecedor foi paga (em inglês, bill payment)."], ["Form W-9", "um formulário do IRS (a autoridade fiscal dos EUA) que um contratado preenche com o nome e o número fiscal, para os registos do negócio."]],
          slides: [
            { title: "Fatura de fornecedor ou despesa?", bullets: ["Fatura de fornecedor: paga mais tarde, vai para A/P", "Despesa: paga logo", "Pague a fatura com um pagamento de fatura, não com uma nova despesa"] },
            { title: "Escolha a conta certa", bullets: ["Materiais, Combustível, Renda, Telefone", "Sempre a mesma conta"] },
            { title: "Uma prova para cada despesa", bullets: ["Anexe uma foto do recibo", "Ou escreva o número do recibo na nota"] },
            { title: "Pagar a contratados", bullets: ["Peça um Form W-9 antes de pagar", "Marque-os como contratados", "Consulte o irs.gov para as regras atuais de declaração"] }
          ],
          sources: [{ name: "IRS: About Form W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" }, TESTDRIVE],
          tryIt: "No test drive ou em papel, lance três itens: uma fatura de fornecedor de materiais de $120 a pagar em 30 dias, uma compra de combustível de $45 paga hoje com cartão e o pagamento da fatura de $120 duas semanas depois. Para cada um, escreva o fornecedor, o formulário que usou, a conta e o valor. Depois explique numa frase porque é que o pagamento da fatura de fornecedor não é uma nova despesa.",
          youCanNow: "lançar faturas de fornecedores, despesas e pagamentos de faturas com o fornecedor, a conta e o recibo certos.",
          quickCheck: [
            { objective: "O4", q: "Um fornecedor envia uma fatura a pagar em 30 dias. O que lança hoje?", options: ["Uma despesa", "Uma fatura de fornecedor", "Uma fatura", "Um recibo de venda"], answer: 1, why: "Uma fatura de fornecedor regista algo que o negócio vai pagar mais tarde." },
            { objective: "O4", q: "Você paga essa fatura duas semanas depois. O que regista?", options: ["Uma nova despesa do mesmo valor", "Um depósito", "Um pagamento nessa fatura de fornecedor", "Nada"], answer: 2, why: "Um pagamento de fatura de fornecedor fecha a fatura sem contar o custo duas vezes." }
          ]
        },
        {
          title: "Os movimentos do banco e a reconciliação bancária",
          objectives: ["O5"],
          minutes: 6,
          goal: "Fazer corresponder as linhas dos movimentos do banco aos lançamentos e reconciliar a conta bancária até uma diferença de zero.",
          text: [
            "O QuickBooks pode ligar-se ao banco do negócio e descarregar os seus movimentos. Isso chama-se bank feed (movimentos do banco). Cada linha descarregada espera que você a reveja. Se já a lançou, faça-a corresponder a esse lançamento. Se não, acrescente-a com o beneficiário e a conta certos. Nunca acrescente uma linha que já está lançada, senão conta duas vezes. É o dono do negócio que liga o banco; um contabilista nunca pede a palavra-passe do banco do dono.",
            "Uma reconciliação bancária prova que o QuickBooks está de acordo com o extrato bancário. Uma vez por mês, pegue no extrato, escreva o saldo final e a data, e marque no QuickBooks cada depósito e cada pagamento que está no extrato. Quando a diferença for zero, termine a reconciliação.",
            "Se a diferença não for zero, procure as causas habituais: uma taxa ou juros do banco que não foram lançados, um lançamento com o valor errado, um duplicado ou um lançamento no mês errado. Os cheques que ainda não foram pagos pelo banco ficam por marcar; serão pagos no mês seguinte.",
            "Nunca force uma reconciliação a dar zero inventando um lançamento. Se não encontrar o problema, escreva uma nota e pergunte ao dono ou a um contabilista certificado."
          ],
          steps: ["Reveja cada nova linha dos movimentos do banco.", "Faça-a corresponder a um lançamento que já existe, ou acrescente-a com o beneficiário e a conta certos.", "Arranje o extrato bancário do mês.", "Comece uma reconciliação e escreva a data e o saldo final do extrato.", "Marque cada lançamento que aparece no extrato.", "Encontre e corrija o que impede a diferença de chegar a zero.", "Termine quando a diferença for zero, ou escreva uma nota e peça ajuda."],
          words: [["Bank feed (movimentos do banco)", "os movimentos bancários que o QuickBooks descarrega para você rever."], ["Fazer corresponder", "ligar uma linha descarregada do banco a um lançamento que já está no QuickBooks (em inglês, match)."], ["Reconciliar", "verificar, linha a linha, que os seus registos estão de acordo com o extrato bancário."], ["Diferença", "a distância entre o QuickBooks e o extrato bancário durante uma reconciliação; deve ser zero."], ["Cheque por pagar", "um cheque que você passou e que o banco ainda não pagou."]],
          slides: [
            { title: "Reveja os movimentos do banco", bullets: ["Já lançado? Faça corresponder", "Não lançado? Acrescente com a conta certa", "Nunca acrescente uma linha duas vezes"] },
            { title: "Reconcilie uma vez por mês", bullets: ["Escreva a data e o saldo final do extrato", "Marque cada linha que está no extrato", "Termine com uma diferença de zero"] },
            { title: "Quando não bate certo", bullets: ["Falta uma taxa ou juros", "Valor errado, duplicado ou mês errado", "Os cheques por pagar esperam pelo mês seguinte"] },
            { title: "Seja honesto e seguro", bullets: ["Nunca force com um lançamento inventado", "Escreva uma nota e peça ajuda", "Nunca peça a palavra-passe do banco do dono"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Faça um extrato de prática em papel: saldo inicial $1,000; depósitos de $250 e $400; pagamentos de $120, $45 e $60; uma taxa do banco de $5; saldo final $1,420. O seu registo tem todas as linhas menos a taxa do banco, e tem ainda um cheque de $75 que o banco ainda não pagou. Marque as linhas que correspondem, encontre o que impede a diferença de chegar a zero e escreva o que lançaria. No test drive, abra a página do banco e veja como as linhas descarregadas esperam para ser correspondidas ou acrescentadas.",
          youCanNow: "fazer corresponder os movimentos do banco e reconciliar uma conta bancária até uma diferença de zero, ou escrever o que ainda não bate certo.",
          quickCheck: [
            { objective: "O5", q: "Uma linha dos movimentos do banco é um pagamento que já lançou como pagamento de fatura de fornecedor. O que faz?", options: ["Faz corresponder a esse pagamento", "Acrescenta como nova despesa", "Apaga a fatura de fornecedor", "Ignora para sempre"], answer: 0, why: "Fazer corresponder liga a linha do banco ao seu lançamento sem contar duas vezes." },
            { objective: "O5", q: "A sua reconciliação tem uma diferença de $5 e o extrato mostra uma taxa do banco de $5. Qual é o melhor passo?", options: ["Inventar um lançamento de qualquer valor", "Saltar a reconciliação este mês", "Mudar o saldo do extrato", "Lançar a taxa do banco de $5 como despesa"], answer: 3, why: "Uma taxa do banco em falta é uma causa comum; lançá-la corrige a diferença de forma honesta." }
          ]
        },
        {
          title: "Os relatórios e o fecho do mês",
          objectives: ["O6"],
          minutes: 6,
          goal: "Gerar e explicar a conta de lucros e perdas, o balanço e o relatório das faturas em aberto.",
          text: [
            "A conta de lucros e perdas (P&L) mostra as receitas menos as despesas de um período, como um mês. Se as receitas forem maiores, o negócio teve lucro; se as despesas forem maiores, teve prejuízo. O balanço mostra, numa data, o que o negócio tem (ativos), o que deve (passivos) e a parte do dono (capital próprio).",
            "O relatório de antiguidade das contas a receber mostra que clientes ainda devem dinheiro e há quanto tempo estão atrasados. O relatório de antiguidade das contas a pagar mostra que faturas de fornecedores o negócio ainda deve. Estes dois relatórios dizem ao dono a quem telefonar e o que pagar a seguir.",
            "O fecho do mês é a lista que um contabilista segue todos os meses: todas as vendas, pagamentos, faturas de fornecedores e despesas lançados; os movimentos do banco revistos; todas as contas bancárias e de cartão reconciliadas; os recibos anexados; os relatórios gerados e enviados ao dono com uma nota curta. As associações também podem gerar relatórios por programa ou por subsídio.",
            "Gere os relatórios na área Relatórios (Reports); pesquise o relatório pelo nome. Um relatório só é tão bom como os lançamentos que estão por trás dele, por isso reconcilie primeiro."
          ],
          steps: ["Termine de lançar as vendas, os pagamentos, as faturas de fornecedores e as despesas do mês.", "Reveja os movimentos do banco e reconcilie todas as contas bancárias e de cartão.", "Gere a conta de lucros e perdas do mês.", "Gere o balanço do último dia do mês.", "Gere o relatório de antiguidade das contas a receber.", "Escreva uma nota curta ao dono: lucro ou prejuízo, quem deve dinheiro e as faturas a pagar em breve."],
          words: [["Conta de lucros e perdas (P&L)", "um relatório das receitas menos as despesas de um período; também se chama demonstração de resultados."], ["Balanço", "um relatório dos ativos, passivos e capital próprio numa data (em inglês, balance sheet)."], ["Relatório de antiguidade", "um relatório do dinheiro em dívida, organizado pelo número de dias de atraso (em inglês, aging report)."], ["Fecho do mês", "a lista de tarefas que termina a contabilidade de um mês (em inglês, month-end close)."]],
          slides: [
            { title: "Conta de lucros e perdas", bullets: ["Receitas menos despesas de um período", "Lucro ou prejuízo do mês"] },
            { title: "Balanço", bullets: ["Numa data", "Ativos, passivos e capital próprio"] },
            { title: "Quem deve o quê", bullets: ["Antiguidade A/R: clientes que devem ao negócio", "Antiguidade A/P: faturas de fornecedores que o negócio deve"] },
            { title: "Lista do fecho do mês", bullets: ["Tudo lançado, movimentos do banco revistos", "Todas as contas bancárias e de cartão reconciliadas", "Relatórios gerados, nota curta ao dono"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "No test drive, gere a conta de lucros e perdas do mês passado e o relatório de antiguidade das contas a receber. Escreva três frases para o dono: o total das receitas e o total das despesas do mês, se houve lucro ou prejuízo e que cliente deve mais. Não tem computador? Use o seu trabalho das lições anteriores e escreva a mesma nota em papel.",
          youCanNow: "gerar os relatórios principais, explicá-los a um dono e fechar um mês.",
          quickCheck: [
            { objective: "O6", q: "Que relatório mostra se o negócio ganhou dinheiro no mês passado?", options: ["O balanço", "A conta de lucros e perdas", "A lista de fornecedores", "O plano de contas"], answer: 1, why: "A conta de lucros e perdas mostra as receitas menos as despesas de um período." },
            { objective: "O6", q: "O dono pergunta que clientes estão atrasados a pagar. Que relatório gera?", options: ["Antiguidade das contas a pagar", "Conta de lucros e perdas", "Antiguidade das contas a receber", "Balanço"], answer: 2, why: "O relatório de antiguidade A/R lista os clientes que devem dinheiro e há quanto tempo estão atrasados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Faturas de fornecedores, o banco e o fecho do mês",
        questions: [
          { objective: "O4", q: "Hoje pagou $45 de combustível com o cartão do negócio. Que formulário serve?", options: ["Uma fatura de fornecedor", "Uma fatura", "Uma despesa", "Um recibo de venda"], answer: 2, why: "Uma despesa regista algo que foi pago logo." },
          { objective: "O4", q: "Antes de pagar a um novo contratado, um contabilista cuidadoso:", options: ["Pede um Form W-9 e consulta o irs.gov para as regras de declaração", "Paga em dinheiro sem registo", "Regista o pagamento como receita", "Pede a palavra-passe do banco do contratado"], answer: 0, why: "Um W-9 dá ao negócio os dados do contratado para os seus registos e declarações." },
          { objective: "O5", q: "Uma reconciliação não chega a zero e você não descobre porquê. O que faz?", options: ["Acrescenta um lançamento inventado para forçar", "Apaga lançamentos antigos", "Muda o saldo do extrato", "Escreve uma nota e pergunta ao dono ou a um contabilista certificado"], answer: 3, why: "Forçar esconde o problema real; uma nota e uma pergunta mantêm os registos honestos." },
          { objective: "O5", q: "Um cheque de $75 que passou não está no extrato deste mês. Na reconciliação, você:", options: ["Apaga o cheque", "Deixa-o por marcar; deve ser pago mais tarde", "Lança-o outra vez", "Marca-o como receita"], answer: 1, why: "Um cheque por pagar fica por marcar até aparecer num extrato." },
          { objective: "O6", q: "O balanço mostra:", options: ["Ativos, passivos e capital próprio numa data", "Só as vendas do mês passado", "O número de telefone de cada cliente", "As linhas dos movimentos do banco"], answer: 0, why: "O balanço é uma fotografia dos ativos, passivos e capital próprio numa data." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Contabilidade com QuickBooks",
    questions: [
      { objective: "O1", q: "Qual é uma das principais tarefas de um contabilista com QuickBooks?", options: ["Dar conselhos jurídicos", "Registar faturas, faturas de fornecedores e movimentos do banco", "Assinar auditorias como CPA", "Escolher investimentos para o dono"], answer: 1, why: "Registar com rigor as vendas, as faturas de fornecedores e os movimentos do banco é o centro do trabalho." },
      { objective: "O1", q: "Onde deve consultar os dados e os preços atuais do exame QuickBooks Certified User?", options: ["Numa publicação nas redes sociais", "Nas notas antigas de um amigo", "Em qualquer fórum na internet", "Na página oficial da Certiport para as certificações da Intuit"], answer: 3, why: "Os preços e os dados dos exames mudam, por isso a página oficial é o lugar para consultar." },
      { objective: "O1", q: "Um cliente pergunta como pagar menos impostos. Como contabilista, você:", options: ["Envia-o para um profissional de impostos ou para o irs.gov", "Adivinha uma resposta", "Muda os números dele", "Diz-lhe que os impostos são opcionais"], answer: 0, why: "Um contabilista de registos mantém os registos; os conselhos fiscais vêm de um profissional de impostos ou do IRS." },
      { objective: "O2", q: "Um aspirador novo que pertence ao negócio de limpezas é que tipo de conta?", options: ["Receita", "Despesa", "Ativo", "Passivo"], answer: 2, why: "O equipamento que o negócio tem é um ativo." },
      { objective: "O2", q: "O saldo em dívida no cartão de crédito do negócio é:", options: ["Um passivo", "Um ativo", "Uma receita", "Capital próprio"], answer: 0, why: "O dinheiro que o negócio deve num cartão é um passivo." },
      { objective: "O2", q: "O que quer dizer contabilidade de dupla entrada?", options: ["Escreve cada lançamento duas vezes", "Duas pessoas têm de aprovar cada lançamento", "Só se registam as receitas", "Cada lançamento muda pelo menos duas contas"], answer: 3, why: "Cada lançamento tem dois lados, o que mantém os registos equilibrados." },
      { objective: "O3", q: "Quando é que um contabilista usa uma fatura?", options: ["Quando o cliente pagou no momento da venda", "Quando o cliente vai pagar mais tarde", "Quando o negócio compra materiais", "Quando o banco cobra uma taxa"], answer: 1, why: "Uma fatura é para um cliente que paga mais tarde." },
      { objective: "O3", q: "Enviar uma fatura de $200 aumenta as receitas e:", options: ["As contas a pagar", "O saldo do banco", "As contas a receber", "A despesa de renda"], answer: 2, why: "Uma fatura cria dinheiro que o cliente deve: contas a receber." },
      { objective: "O3", q: "Um cliente paga com cheque uma fatura em aberto. O que regista?", options: ["Um pagamento nessa fatura e depois o depósito no banco", "Um novo recibo de venda", "Uma fatura de fornecedor", "Uma nova fatura"], answer: 0, why: "Registar o pagamento na fatura fecha-a, e o depósito bate certo com o banco." },
      { objective: "O4", q: "Quem é um fornecedor?", options: ["Um cliente que deve dinheiro", "O dono do negócio", "Uma linha dos movimentos do banco", "Uma empresa a quem compra, como uma loja de materiais"], answer: 3, why: "Um fornecedor é qualquer pessoa ou empresa a quem o negócio compra." },
      { objective: "O4", q: "A fatura de um fornecedor vence em 30 dias. Quando é lançada, vai para:", options: ["Contas a receber", "Contas a pagar", "Receitas de vendas", "Capital próprio do dono"], answer: 1, why: "As faturas de fornecedores por pagar são dinheiro que o negócio deve: contas a pagar." },
      { objective: "O4", q: "O que prova cada despesa se alguém perguntar mais tarde?", options: ["Um valor adivinhado", "O número de telefone do fornecedor", "Um recibo anexado ou o seu número anotado", "A memória do dono"], answer: 2, why: "Os recibos são a prova por trás de cada despesa." },
      { objective: "O5", q: "O que é o bank feed (movimentos do banco)?", options: ["Movimentos bancários que o QuickBooks descarrega para você rever", "Uma taxa que o banco cobra", "Uma lista de clientes", "A palavra-passe do banco do dono"], answer: 0, why: "O bank feed traz as linhas do banco para fazer corresponder ou acrescentar." },
      { objective: "O5", q: "Uma reconciliação está terminada quando:", options: ["Marcou metade das linhas", "O dono está contente", "O mês acabou", "A diferença é zero"], answer: 3, why: "Uma diferença de zero mostra que o QuickBooks está de acordo com o extrato." },
      { objective: "O5", q: "Uma linha descarregada do banco já está lançada no QuickBooks. Acrescentá-la outra vez iria:", options: ["Corrigir a reconciliação", "Contá-la duas vezes", "Fechar o mês", "Pagar ao fornecedor"], answer: 1, why: "Acrescentar outra vez uma linha já lançada cria um duplicado; faça-a corresponder." },
      { objective: "O6", q: "No mês, as receitas foram $4,000 e as despesas $3,100. A conta de lucros e perdas mostra:", options: ["Um prejuízo de $900", "Um lucro de $7,100", "Um lucro de $900", "Nenhuma mudança"], answer: 2, why: "Receitas menos despesas: $4,000 menos $3,100 dá um lucro de $900." },
      { objective: "O6", q: "Antes de gerar os relatórios do fecho do mês, um contabilista deve primeiro:", options: ["Reconciliar todas as contas bancárias e de cartão", "Apagar faturas antigas", "Enviar os relatórios sem verificar", "Mudar o plano de contas"], answer: 0, why: "Os relatórios só são tão bons como os lançamentos por trás deles, por isso reconcilie primeiro." },
      { objective: "O6", q: "Que relatório mostra as faturas de fornecedores que o negócio ainda deve?", options: ["Conta de lucros e perdas", "Antiguidade das contas a receber", "Plano de contas", "Antiguidade das contas a pagar"], answer: 3, why: "O relatório de antiguidade A/P lista as faturas por pagar e há quanto tempo estão em aberto." },
      { objective: "O2", q: "Porque é que um contabilista deve usar sempre a mesma conta para o mesmo tipo de custo?", options: ["O QuickBooks cobra pelas contas novas", "Para que os relatórios se comparem bem de mês para mês", "Porque não se pode mudar o nome das contas", "Para que os movimentos do banco parem"], answer: 1, why: "Contas consistentes tornam os relatórios certos e comparáveis." },
      { objective: "O5", q: "Um cliente oferece-lhe a palavra-passe do banco na internet para você ligar os movimentos do banco. O que faz?", options: ["Aceita e guarda-a numa nota", "Envia-a para si mesmo por SMS", "Recusa; o dono liga o banco ou dá-lhe o seu próprio acesso de utilizador", "Coloca-a na pasta partilhada"], answer: 2, why: "Os contabilistas nunca aceitam a palavra-passe do banco do dono; o dono liga o banco ou acrescenta-o como utilizador." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno ganhou
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 6, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano de contas", objective: "O2", notYet: "Menos de 12 contas, ou várias estão marcadas com o tipo errado.", meets: "Pelo menos 12 contas, cada uma com o tipo certo e com nomes claros.", exceeds: "Também explica porque é que cada conta é precisa para este negócio, incluindo contas de associações ou do setor." },
      { name: "Vendas e pagamentos", objective: "O3", notYet: "Um pagamento foi registado como nova venda, ou falta numa fatura o cliente, a data ou o valor.", meets: "Pelo menos 3 faturas e 2 pagamentos, cada um com cliente, data, valor e conta de receita; as faturas pagas aparecem como pagas.", exceeds: "Também regista o depósito no banco de cada pagamento e anota que faturas ainda estão em aberto." },
      { name: "Faturas de fornecedores e despesas", objective: "O4", notYet: "Uma fatura de fornecedor foi paga com uma nova despesa, ou os lançamentos não têm conta nem recibo.", meets: "Pelo menos 4 faturas de fornecedores ou despesas com fornecedor, data, valor, conta e recibo anotado.", exceeds: "Também mostra um pagamento de fatura de fornecedor e um contratado criado com uma nota sobre o W-9." },
      { name: "Reconciliação bancária", objective: "O5", notYet: "Não há reconciliação, ou foi forçada a zero com um lançamento inventado.", meets: "A reconciliação termina com uma diferença de zero, ou tem uma nota honesta sobre o que ainda não bate certo.", exceeds: "Também lista a causa de cada diferença (taxa, erro de escrita, duplicado, cheque por pagar) e como foi corrigida." },
      { name: "Resumo dos relatórios", objective: "O6", notYet: "Falta no resumo o lucro ou o prejuízo, ou os números não batem certo com os lançamentos.", meets: "Diz o total das receitas, o total das despesas e o lucro ou o prejuízo, e quem ainda deve dinheiro.", exceeds: "Também indica as faturas de fornecedores a pagar em breve e uma coisa que o dono pode fazer." },
      { name: "Plano de certificação", objective: "O1", notYet: "Nenhuma certificação indicada, ou sem datas.", meets: "Indica uma certificação da Intuit, a página oficial a consultar e datas para a consultar e para os testes de prática.", exceeds: "Também lista três empregadores ou clientes a contactar e uma data para contactar cada um." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem um exame de certificação da Intuit em QuickBooks ou contabilidade em 90 dias (inquérito de seguimento)",
      "Alunos que conseguem um emprego de contabilidade, um cargo de escritório que usa QuickBooks ou um cliente pagante de contabilidade em 6 meses",
      "Donos de pequenos negócios e associações no curso que reconciliam a sua própria contabilidade todos os meses (seguimento aos 30 dias)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou tablet com navegador de internet para o test drive gratuito do QuickBooks Online (aberto numa janela privada); o ecrã de um telefone é pequeno demais para a maior parte da prática",
      "Papel, caneta e calculadora para as notas do \"Experimente agora\", porque o test drive não guarda nada",
      "Cópias impressas do extrato bancário de prática e da lista de movimentos para grupos sem computadores",
      "Cerca de 75 a 90 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Numa sala de informática ou numa turma: façam o teste inicial juntos e depois um capítulo por sessão, com o test drive aberto em cada ecrã.",
      "O test drive volta ao início e não guarda nada; lembre os alunos de escreverem cada lançamento para a tarefa final.",
      "Os ecrãs e os nomes dos menus mudam; se um aluno não encontrar algo, mostre-lhe a caixa de pesquisa em vez de um caminho fixo no menu.",
      "Nunca deixe os alunos escreverem acessos bancários, números de conta ou dados de clientes verdadeiros na prática; use a empresa de exemplo ou números inventados.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Antes de os alunos planearem uma certificação, peça-lhes que abram eles próprios as páginas oficiais da Certiport e da Intuit Academy para confirmar os preços e as condições atuais."
    ]
  }
};
