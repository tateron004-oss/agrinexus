"use strict";

// Koach Learn course (Portuguese translation of shared/bookkeeping-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Spreadsheet formulas stay exactly as in the English (tab name "Ledger", category "Supplies").

module.exports = {
  id: "bookkeeping-basics-pt",
  lang: "pt",
  translationOf: "bookkeeping-basics",
  category: "Entrepreneurs",
  name: "Contabilidade Básica",
  skills: "Registar receitas e despesas, Guardar recibos, Separar o dinheiro do negócio do dinheiro pessoal, Criar um livro de registos numa folha de cálculo, Comparar os registos com o banco, Ler uma conta de lucros e perdas",
  outcome: "manter um livro de registos simples numa folha de cálculo com as receitas e despesas do seu negócio, com recibos como prova, compará-lo com o extrato do banco ou do dinheiro móvel e ler uma conta de lucros e perdas de um mês para ver se ganhou dinheiro.",
  about: [
    "Este curso é para quem gere algo em que entra e sai dinheiro: um cabeleireiro, uma banca de comida, um negócio de limpezas, uma igreja ou uma associação de jovens, um agricultor que vende ovos ou legumes, ou alguém com um pequeno negócio pela internet.",
    "Você vai aprender a registar cada venda e cada custo, guardar os recibos que os provam, separar o dinheiro do negócio do dinheiro pessoal, montar um livro de registos simples numa folha de cálculo gratuita, verificá-lo todos os meses e ler uma conta de lucros e perdas básica.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\", feita com os seus próprios números ou com um exemplo. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. A contabilidade é o registo. Para impostos e questões legais, fale com um contabilista ou um profissional de impostos."
  ],
  finalTask: "Monte um livro de registos numa folha de cálculo e registe um mês de movimentos reais ou de exemplo do negócio (pelo menos 10), cada um com data, descrição, categoria, valor e número do recibo. Compare o livro de registos com o extrato do banco ou do dinheiro móvel e depois faça uma conta de lucros e perdas de um mês que mostre o total das receitas, as despesas por categoria e o lucro ou o prejuízo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que gerem algo em que entra e sai dinheiro: donos de pequenos negócios, vendedores de mercado, agricultores que vendem a sua produção, pequenos negócios pela internet e tesoureiros de igrejas ou de pequenas associações. Muitos guardam as contas na cabeça, numa caixa de dinheiro ou numa única conta pessoal.",
    startingPoint: "Sabem lidar com dinheiro vivo e com dinheiro móvel ou uma conta bancária, e sabem abrir um telefone ou um computador. Poucos fazem registos escritos e muitos nunca usaram uma fórmula numa folha de cálculo.",
    gap: "Sem registos, não conseguem saber se o negócio dá dinheiro, que produtos compensam ou o que mostrar a quem empresta dinheiro, a quem dá subsídios ou às finanças. Um livro de registos simples com recibos, uma verificação mensal com o extrato e uma conta de lucros e perdas de um mês resolvem isso.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; números simples",
      "Aparelhos: um telefone ou um computador partilhado com uma folha de cálculo gratuita (Google Sheets ou Excel)",
      "Tempo: cerca de 5 minutos por lição, com prática com os próprios números ou com um exemplo",
      "Privacidade: não colocar números de contas bancárias nem dados pessoais de clientes em ferramentas de IA",
      "As regras de impostos mudam de país para país; o curso ensina a fazer registos e envia as questões de impostos para um contabilista"
    ],
    prerequisites: "Nenhum. Quem é novo nas folhas de cálculo pode achar útil fazer primeiro o curso \"Excel e Folhas de Cálculo\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista do dinheiro que entra e sai de um negócio ou de uma associação", action: "identificar que movimentos são receitas e quais são despesas", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com uma semana de vendas e compras", action: "guardar um recibo, uma fatura ou uma folha de vendas do dia numerados como prova de cada movimento", standard: "para que cada linha do livro de registos tenha um número de recibo que você consegue encontrar" },
    { id: "O3", condition: "Usando uma conta, uma conta de dinheiro móvel ou uma carteira só para o negócio", action: "separar o dinheiro do negócio do dinheiro pessoal e registar o que paga a si mesmo como levantamento do dono", standard: "sem nenhum gasto pessoal misturado nos registos do negócio" },
    { id: "O4", condition: "Usando uma folha de cálculo gratuita como o Google Sheets ou o Excel", action: "criar um livro de registos com sete colunas, categorias fixas e uma fórmula de saldo corrido", standard: "para que o saldo se atualize bem depois de cada registo" },
    { id: "O5", condition: "Com o seu livro de registos e o extrato de um mês do banco ou do dinheiro móvel", action: "reconciliar o livro de registos com o extrato e corrigir as diferenças", standard: "até os saldos baterem certo, tendo em conta o dinheiro vivo e os pagamentos ainda não compensados" },
    { id: "O6", condition: "Com um mês de registos no livro", action: "fazer uma conta de lucros e perdas com SUMIF e explicar o que ela mostra", standard: "com totais certos e duas frases verdadeiras sobre o resultado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fazer bons registos",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a contabilidade e porque é importante",
          minutes: 4,
          goal: "Explicar o que a contabilidade regista e dizer os dois tipos de dinheiro que ela acompanha.",
          text: [
            "Fazer a contabilidade é anotar cada vez que entra ou sai dinheiro do seu negócio, num só lugar e por ordem. Não é matemática difícil. É um hábito.",
            "O dinheiro que entra são as receitas: vendas, pagamentos de clientes, taxas e, numa associação, donativos e subsídios. O dinheiro que sai são as despesas: materiais, renda, combustível, sementes, telefone, publicidade, salários.",
            "O IRS (a autoridade de impostos dos Estados Unidos) diz que bons registos ajudam a acompanhar o progresso do negócio e a preparar as declarações de impostos. Também mostram que custos pode deduzir. Registos organizados ajudam a conseguir um empréstimo, a pedir um subsídio, a responder a uma pergunta das finanças e a ver que produtos ou serviços dão mesmo dinheiro.",
            "Exemplo: uma mulher vende bolos e pão num mercado ao fim de semana. Acha que está a correr bem porque a caixa está cheia. Quando anota a farinha, a manteiga, as caixas e a taxa do mercado, descobre que os queques dão dinheiro, mas o pão quase não paga o seu custo. Agora ela pode decidir o que fazer."
          ],
          words: [["Contabilidade", "manter um registo escrito de todo o dinheiro que entra e sai de um negócio."], ["Receita", "dinheiro que entra: vendas, taxas, donativos, subsídios."], ["Despesa", "dinheiro gasto para fazer o negócio funcionar, como materiais, renda e combustível."], ["Deduzir", "tirar um custo do negócio permitido por lei ao calcular o imposto que deve."]],
          slides: [
            { title: "A contabilidade é um hábito", bullets: ["Anote todo o dinheiro que entra e sai", "Num só lugar, por ordem", "Não é matemática difícil"] },
            { title: "Dois tipos de dinheiro", bullets: ["Receitas: vendas, taxas, donativos, subsídios", "Despesas: materiais, renda, combustível, sementes, salários"] },
            { title: "Porque é importante", bullets: ["Ver como o negócio está mesmo a correr", "Preparar os impostos e mostrar as deduções", "Conseguir empréstimos e subsídios; responder a perguntas"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Pense no seu negócio, ou num que gostaria de começar. Escreva cinco tipos de receitas, ou de dinheiro que entra, e oito tipos de despesas, ou de dinheiro que sai, que ele teria.",
          youCanNow: "dizer o que é a contabilidade, separar o dinheiro em receitas e despesas e explicar porque os registos são importantes.",
          quickCheck: [
            { objective: "O1", q: "O que é a contabilidade?", options: ["Anotar cada vez que entra ou sai dinheiro, num só lugar e por ordem", "Fazer contas difíceis uma vez por ano", "Entregar a declaração de impostos", "Contar a caixa à noite"], answer: 0, why: "A lição diz que a contabilidade é o hábito de anotar cada entrada e saída de dinheiro, por ordem." },
            { objective: "O1", q: "Uma padeira acha que está a correr bem porque a caixa está cheia. O que lhe mostraria que produtos dão mesmo dinheiro?", options: ["Contar o dinheiro outra vez", "Perguntar aos clientes do que gostam", "Anotar os custos, como a farinha, as caixas e a taxa do mercado, ao lado das vendas", "Subir todos os preços"], answer: 2, why: "Anotar os custos ao lado das vendas mostrou que os queques davam dinheiro e o pão quase não pagava o seu custo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Guardar recibos e outras provas",
          minutes: 5,
          goal: "Criar um sistema simples para guardar cada recibo e cada fatura.",
          text: [
            "Cada registo nas suas contas deve ter uma prova por trás. O IRS chama a isto documentos de suporte. Para as vendas, incluem livros de recibos, faturas, talões da caixa registadora e registos de depósitos. Para as compras e despesas, incluem recibos, faturas, extratos do cartão e registos de pagamentos eletrónicos.",
            "Os recibos de papel desbotam e perdem-se. Um sistema simples: tire uma fotografia a cada recibo no mesmo dia, dê-lhe um número e guarde-a numa pasta desse mês, por exemplo 2026-10. Guarde o papel num envelope com o mesmo mês escrito. Escreva o número do recibo no livro de registos, para encontrar a prova de qualquer linha.",
            "Quanto tempo guardar os registos: o IRS diz para os guardar enquanto possa precisar de provar as receitas ou as deduções de uma declaração de impostos. Para muitas declarações nos Estados Unidos isso são 3 anos, mas alguns casos são mais longos, como pelo menos 4 anos para os registos de impostos sobre salários. Veja a página do IRS para o seu caso. Fora dos Estados Unidos, consulte a autoridade de impostos do seu país, como a Kenya Revenue Authority, ou pergunte a um contabilista.",
            "Para vendas em dinheiro sem recibo, como ovos vendidos à porta da machamba, faça uma folha de vendas do dia simples: data, o que vendeu, quantos e o total. Essa folha é a sua prova."
          ],
          steps: ["Crie uma pasta por mês no telefone ou no computador, e um envelope por mês para o papel.", "Fotografe cada recibo no mesmo dia.", "Dê um número a cada recibo e escreva-o no papel.", "Escreva as vendas em dinheiro numa folha de vendas do dia.", "Guarde os registos durante o tempo que a sua autoridade de impostos disser, ou pergunte a um contabilista."],
          words: [["Recibo", "um registo em papel ou eletrónico de que você pagou ou recebeu um pagamento."], ["Fatura", "uma conta que envia a um cliente, ou recebe de um fornecedor, com o que foi vendido e o preço."], ["Documento de suporte", "a prova por trás de um registo nas suas contas, como um recibo, uma fatura ou um extrato."]],
          slides: [
            { title: "Cada registo precisa de prova", bullets: ["Vendas: faturas, livros de recibos, registos de depósitos", "Custos: recibos, faturas, extratos do cartão"] },
            { title: "Um sistema simples de recibos", bullets: ["Fotografe no mesmo dia", "Numere e arquive por mês", "Escreva o número no livro de registos"] },
            { title: "Vendas em dinheiro sem recibo", bullets: ["Faça uma folha de vendas do dia", "Data, produto, quantos, total"] },
            { title: "Quanto tempo guardar os registos", bullets: ["EUA: muitas vezes 3 anos, alguns casos mais", "Registos de impostos sobre salários: pelo menos 4 anos", "Veja irs.gov, a sua autoridade de impostos ou um contabilista"] }
          ],
          sources: [
            { name: "IRS: What kind of records should I keep", url: "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" },
            { name: "IRS: How long should I keep records?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }
          ],
          tryIt: "Crie a pasta de recibos deste mês no telefone ou no computador. Fotografe três recibos que tenha (do negócio ou do dia a dia, para praticar), numere-os 1, 2 e 3 e guarde-os na pasta.",
          youCanNow: "guardar, numerar e arquivar recibos para que cada registo nas suas contas tenha uma prova por trás.",
          quickCheck: [
            { objective: "O2", q: "Como é que o IRS chama aos recibos, faturas e registos de depósitos?", options: ["Declarações de impostos", "Documentos de suporte", "Livros de registos", "Contas de lucros e perdas"], answer: 1, why: "O IRS chama documentos de suporte aos papéis que provam cada registo." },
            { objective: "O2", q: "Acabou de pagar materiais e recebeu um recibo de papel. O que faz no mesmo dia?", options: ["Põe-no no bolso para depois", "Deita-o fora quando se lembrar do valor", "Escreve o valor na mão", "Fotografa-o, numera-o e guarda-o na pasta deste mês"], answer: 3, why: "Fotografar e numerar um recibo no mesmo dia evita que ele desbote ou se perca." }
          ]
        },
        {
          objectives: ["O1","O3"],
          title: "Separar o dinheiro do negócio do dinheiro pessoal",
          minutes: 5,
          goal: "Criar um lugar separado para o dinheiro do negócio e pagar a si mesmo de forma planeada.",
          text: [
            "Quando o dinheiro do negócio e o dinheiro pessoal estão misturados na mesma conta ou na mesma carteira, você não consegue saber se o negócio dá dinheiro. Um almoço de trabalho, as compras da família e uma encomenda de materiais parecem todos iguais.",
            "Abra uma conta separada para o negócio: uma conta de empresa num banco ou numa cooperativa de crédito, ou uma conta de dinheiro móvel separada usada só para o negócio. Ponha nela todas as vendas. Pague a partir dela todos os custos do negócio.",
            "Quando precisar de dinheiro para si, passe um valor fixo da conta do negócio para a sua conta pessoal e registe-o como levantamento do dono, ou o seu pagamento. Isso não é uma despesa do negócio; é você a tirar lucro. Se alguma vez pagar um custo do negócio com dinheiro pessoal, escreva-o no livro de registos e guarde o recibo.",
            "As associações têm mais um passo: se um doador der dinheiro para um fim, como um programa de desporto para jovens, acompanhe-o para que seja gasto nesse fim. Uma coluna ou uma categoria simples para isso chega para começar."
          ],
          steps: ["Abra uma conta, uma conta de dinheiro móvel ou uma carteira só para o negócio.", "Ponha nela todas as vendas e donativos.", "Pague a partir dela todos os custos do negócio.", "Pague a si mesmo passando um valor fixo e registe-o como levantamento do dono.", "Se usar dinheiro pessoal para o negócio, registe-o e guarde o recibo."],
          words: [["Levantamento do dono", "dinheiro que o dono tira do negócio para uso pessoal. Não é uma despesa do negócio."], ["Mistura de dinheiro", "juntar o dinheiro do negócio e o dinheiro pessoal na mesma conta."], ["Donativo com fim definido", "um donativo que o doador diz que tem de ser usado para um certo fim."]],
          slides: [
            { title: "Dinheiro misturado esconde a verdade", bullets: ["Não se sabe se o negócio dá dinheiro", "Os custos pessoais e do negócio parecem iguais"] },
            { title: "Dê ao negócio o seu próprio dinheiro", bullets: ["Conta separada no banco, cooperativa de crédito ou dinheiro móvel", "Todas as vendas entram, todos os custos do negócio saem"] },
            { title: "Pague a si mesmo de forma planeada", bullets: ["Passe um valor fixo para a sua conta pessoal", "Registe-o como levantamento do dono, não como despesa"] },
            { title: "Associações", bullets: ["Acompanhe os donativos dados para um certo fim", "Gaste-os nesse fim"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Veja os últimos 10 pagamentos da conta ou carteira que usa para o negócio (ou da sua conta pessoal, para praticar). Marque cada um com N de negócio ou P de pessoal. Escreva como os vai separar daqui para a frente.",
          youCanNow: "separar o dinheiro do negócio do dinheiro pessoal e pagar a si mesmo de uma forma que pode acompanhar.",
          quickCheck: [
            { objective: "O1", q: "O que é um levantamento do dono?", options: ["Uma despesa do negócio", "Um empréstimo do banco", "Dinheiro que passa do negócio para si, tirado do lucro", "Um donativo ao negócio"], answer: 2, why: "Um levantamento do dono é você a tirar lucro; não é uma despesa do negócio." },
            { objective: "O1", q: "Você gere o negócio a partir da sua conta pessoal e não consegue saber se ele dá dinheiro. Qual é a primeira solução?", options: ["Abrir uma conta ou uma conta de dinheiro móvel só para o negócio", "Gastar menos nas compras da casa", "Deixar de guardar recibos", "Usar só dinheiro vivo"], answer: 0, why: "Uma conta separada mantém o dinheiro do negócio à parte, para ver o que o negócio ganha e gasta." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fazer bons registos",
        questions: [
          { objective: "O1", q: "Qual é uma despesa de uma pequena machamba?", options: ["Dinheiro da venda de tomate", "Um subsídio de um doador", "O pagamento de um cliente", "Sementes e adubo"], answer: 3, why: "As despesas são custos para fazer o negócio funcionar, como sementes e adubo." },
          { objective: "O1", q: "Segundo o IRS, bons registos ajudam a:", options: ["Nunca pagar impostos", "Acompanhar o progresso do negócio e preparar as declarações de impostos", "Não ter de passar recibos", "Ter materiais de graça"], answer: 1, why: "O IRS diz que os registos ajudam a acompanhar o negócio e a preparar as declarações." },
          { objective: "O2", q: "Você vende ovos a dinheiro, sem recibos. Qual é a sua prova?", options: ["Uma folha de vendas do dia com data, produto, quantos e total", "A sua memória", "Não é precisa nenhuma", "Uma fotografia das suas galinhas"], answer: 0, why: "Uma folha de vendas do dia escrita regista as vendas em dinheiro." },
          { objective: "O2", q: "Porque escrever o número do recibo no livro de registos?", options: ["Faz o livro parecer mais comprido", "O banco obriga", "Para encontrar a prova de qualquer linha", "Muda o total"], answer: 2, why: "A numeração liga cada registo à sua prova." },
          { objective: "O3", q: "Você passa dinheiro da conta do negócio para a sua conta pessoal para se pagar. Como regista isso?", options: ["Como uma despesa do negócio", "Como levantamento do dono", "Como uma venda", "Não regista"], answer: 1, why: "O dinheiro que o dono tira é um levantamento do dono, não uma despesa do negócio." }
        ]
      }
    },
    {
      name: "Capítulo 2: O seu livro de registos e o seu lucro",
      lessons: [
        {
          objectives: ["O4"],
          title: "Montar um livro de registos simples numa folha de cálculo",
          minutes: 6,
          goal: "Criar um livro de registos numa folha de cálculo gratuita com as colunas certas e um saldo corrido.",
          text: [
            "Um livro de registos é uma lista de todo o dinheiro que entra e sai, uma linha por movimento. Uma folha de cálculo gratuita, como o Google Sheets ou o Microsoft Excel, funciona bem e faz as somas por você.",
            "Use sete colunas: Data, Descrição, Categoria, Entradas, Saídas, Saldo, N.º do recibo. Ponha o saldo inicial na primeira linha. Na célula do Saldo da linha seguinte, escreva uma fórmula que pega no saldo de cima, soma as entradas e tira as saídas. Por exemplo, se o Saldo for a coluna F, as Entradas a D e as Saídas a E, a linha 3 fica =F2+D3-E3. Copie essa fórmula para baixo.",
            "Escolha uma lista curta de categorias e use sempre as mesmas palavras, por exemplo: Vendas, Donativos, Materiais, Renda, Combustível, Telefone, Publicidade, Salários, Levantamento do dono. As mesmas palavras tornam fácil somar cada categoria depois.",
            "Um assistente de IA pode ajudar a montar a folha: peça-lhe para explicar uma fórmula ou sugerir categorias para o seu tipo de negócio. Não cole números de contas bancárias nem dados pessoais de clientes."
          ],
          steps: ["Abra uma folha de cálculo nova em branco, dê-lhe um nome, por exemplo \"Registos 2026\", e chame Ledger ao primeiro separador.", "Escreva os títulos das colunas: Data, Descrição, Categoria, Entradas, Saídas, Saldo, N.º do recibo.", "Ponha o saldo inicial na coluna Saldo da linha 2.", "Na linha 3 do Saldo, escreva =F2+D3-E3 e copie para baixo.", "Escreva a lista de categorias num canto ou num segundo separador, e use só essas palavras."],
          words: [["Livro de registos", "uma lista de todo o dinheiro que entra e sai, uma linha por movimento."], ["Movimento", "cada vez que o dinheiro se move: uma venda, um pagamento, uma compra."], ["Fórmula", "um cálculo numa célula da folha de cálculo que começa com =."], ["Categoria", "um nome que junta dinheiro parecido, como Combustível ou Materiais."]],
          slides: [
            { title: "Livro de registos: uma linha por movimento", bullets: ["Todo o dinheiro que entra e sai", "Uma folha de cálculo gratuita faz as somas"] },
            { title: "Sete colunas", bullets: ["Data, Descrição, Categoria", "Entradas, Saídas", "Saldo, N.º do recibo"] },
            { title: "Um saldo corrido", bullets: ["Comece com o saldo inicial", "Linha seguinte: =F2+D3-E3", "Copie a fórmula para baixo"] },
            { title: "Sempre as mesmas palavras de categoria", bullets: ["Vendas, Donativos, Materiais, Renda, Combustível", "Telefone, Publicidade, Salários, Levantamento do dono"] }
          ],
          tryIt: "Monte já o livro de registos no Google Sheets ou no Excel, com as sete colunas, um saldo inicial e a fórmula do saldo corrido. Registe três movimentos desta semana, reais ou de exemplo, e veja se o saldo muda bem.",
          youCanNow: "criar um livro de registos numa folha de cálculo com categorias e um saldo corrido.",
          quickCheck: [
            { objective: "O4", q: "Num livro de registos, o que tem cada linha?", options: ["Um mês inteiro", "Um movimento", "O nome e a morada de um cliente", "O total de uma categoria"], answer: 1, why: "Um livro de registos lista todo o dinheiro que entra e sai, uma linha por movimento." },
            { objective: "O4", q: "Escreveu \"materiais\" numa semana e \"artigos\" na seguinte para os mesmos custos. O que deve fazer?", options: ["Manter as duas palavras", "Apagar essas linhas", "Mudá-las para uma só palavra de categoria e usar só essa palavra daqui para a frente", "Juntar uma coluna nova para cada palavra"], answer: 2, why: "Usar sempre as mesmas palavras de categoria torna fácil somar cada categoria depois." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Registar todas as semanas e comparar com o banco",
          minutes: 5,
          goal: "Manter o livro de registos em dia e compará-lo com o extrato do banco ou do dinheiro móvel.",
          text: [
            "A contabilidade funciona melhor como um pequeno hábito semanal, por exemplo 20 minutos todas as segundas-feiras de manhã. Junte os recibos, as folhas de vendas e as faturas da semana e registe cada um como uma linha no livro de registos, com a sua categoria e o número do recibo.",
            "Uma vez por mês, compare o livro de registos com o extrato do banco, da cooperativa de crédito ou do dinheiro móvel. Isto chama-se reconciliar. Marque cada linha do extrato que corresponde a uma linha do livro. Tudo o que está no extrato e não está no livro, como uma taxa do banco ou o pagamento de um cliente que esqueceu, é acrescentado. O que está no livro e não está no extrato pode ser dinheiro vivo ou um erro a corrigir.",
            "No fim, o saldo do livro de registos deve bater certo com o saldo do extrato, tendo em conta o dinheiro vivo que tem e os pagamentos ainda não compensados. Se não bater certo, procure uma linha em falta, um número escrito duas vezes ou algarismos trocados, como 54 escrito como 45.",
            "Exemplo: o livro de registos de uma associação de futebol juvenil tem 15 dólares a menos do que o banco. O tesoureiro encontra um donativo de 15 dólares que entrou por uma aplicação no telefone e nunca foi anotado, acrescenta-o, e agora batem certo."
          ],
          steps: ["Escolha uma hora por semana para pôr o livro de registos em dia.", "Registe cada recibo, folha de vendas e fatura com uma categoria e um número de recibo.", "Uma vez por mês, obtenha o extrato do banco ou do dinheiro móvel.", "Marque cada linha do extrato que corresponde ao livro; acrescente as que faltam.", "Compare os saldos. Se forem diferentes, procure linhas em falta, repetidas ou com algarismos trocados."],
          words: [["Reconciliar", "comparar os seus registos com o extrato do banco ou do dinheiro móvel e corrigir as diferenças."], ["Extrato", "a lista de movimentos que o banco ou o serviço de dinheiro móvel lhe dá para um período."], ["Compensado", "quando um pagamento já passou e aparece no extrato."]],
          slides: [
            { title: "Um hábito semanal", bullets: ["Cerca de 20 minutos, no mesmo dia todas as semanas", "Registe recibos, folhas de vendas e faturas"] },
            { title: "Reconciliar uma vez por mês", bullets: ["Obtenha o extrato do banco ou do dinheiro móvel", "Marque cada linha que corresponde", "Acrescente o que falta, como taxas"] },
            { title: "Quando não bate certo", bullets: ["Uma linha em falta", "Um número escrito duas vezes", "Algarismos trocados: 54 escrito como 45"] }
          ],
          tryIt: "Descarregue ou abra o extrato do mês passado da conta do negócio ou do dinheiro móvel (ou da sua conta pessoal, para praticar). Escolha cinco linhas do extrato e veja se cada uma está no seu livro de registos. Acrescente as que faltam.",
          youCanNow: "manter o livro de registos em dia todas as semanas e reconciliá-lo com o extrato todos os meses.",
          quickCheck: [
            { objective: "O5", q: "O que quer dizer reconciliar?", options: ["Fazer um orçamento para o próximo mês", "Pagar todas as contas", "Escrever um livro de registos novo", "Comparar o livro de registos com o extrato do banco ou do dinheiro móvel"], answer: 3, why: "Reconciliar é marcar cada linha do extrato no livro de registos e corrigir o que falta." },
            { objective: "O5", q: "O pagamento de um cliente está no extrato, mas não no livro de registos. O que faz?", options: ["Acrescenta-o ao livro de registos", "Ignora-o", "Apaga-o do extrato", "Espera até ao próximo ano"], answer: 0, why: "Tudo o que está no extrato e falta no livro de registos é acrescentado." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ler uma conta de lucros e perdas básica",
          minutes: 6,
          goal: "Fazer uma conta de lucros e perdas de um mês a partir do livro de registos e dizer o que ela mostra.",
          text: [
            "Uma conta de lucros e perdas, também chamada P&L ou demonstração de resultados, é um resumo curto de um período, como um mês. Mostra o total das receitas, o total das despesas por categoria e a diferença. Receitas menos despesas é o lucro. Se as despesas forem maiores, é um prejuízo.",
            "Pode fazê-la a partir do livro de registos. Num separador novo, liste cada categoria. Ao lado de cada uma, use uma fórmula SUMIF para somar essa categoria. Por exemplo, =SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E) soma todas as Saídas cuja categoria é Supplies (materiais), se o separador do livro se chamar Ledger (a coluna C é a Categoria e a coluna E são as Saídas). Troque \"Supplies\" pela palavra da sua categoria. Some as categorias de receitas, some as categorias de despesas e subtraia. O levantamento do dono não é uma despesa, por isso deixe-o fora das despesas.",
            "Depois leia-a. Teve lucro? Qual é a maior despesa? Cresceu desde o mês passado? Numa machamba, o mês da colheita cobriu os meses fracos? Numa associação, os custos do programa ficaram dentro do subsídio?",
            "Uma conta de lucros e perdas diz como o negócio está a correr. Não é a sua declaração de impostos. As regras de impostos decidem o que conta e quando, e mudam de país para país. Leve o livro de registos, os recibos e a conta de lucros e perdas a um contabilista ou a um profissional de impostos para tratar dos impostos."
          ],
          steps: ["Junte um separador novo chamado P&L e liste as suas categorias.", "Ao lado de cada categoria, use SUMIF para a somar a partir do livro de registos.", "Some as categorias de receitas e as categorias de despesas (deixe de fora o levantamento do dono).", "Subtraia: receitas menos despesas = lucro ou prejuízo.", "Escreva duas frases sobre o que os números lhe dizem."],
          words: [["Conta de lucros e perdas (P&L)", "um resumo das receitas, despesas e lucro ou prejuízo de um período."], ["Lucro", "o que sobra quando as receitas são maiores do que as despesas."], ["Prejuízo", "quando as despesas são maiores do que as receitas."], ["SUMIF", "uma fórmula da folha de cálculo que soma só as linhas com um certo nome (no Excel em português chama-se SOMA.SE)."]],
          slides: [
            { title: "Lucros e perdas numa linha", bullets: ["Receitas menos despesas = lucro", "Despesas maiores? Isso é um prejuízo"] },
            { title: "Faça-a a partir do livro de registos", bullets: ["Liste as categorias num separador novo", "Use SUMIF para somar cada uma", "Deixe o levantamento do dono fora das despesas"] },
            { title: "Leia-a", bullets: ["Lucro ou prejuízo?", "Maior despesa? Está a crescer?", "Os meses bons cobriram os fracos?"] },
            { title: "Não é uma declaração de impostos", bullets: ["As regras de impostos decidem o que conta", "Leve os seus registos a um contabilista"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Tarefa final: registe pelo menos 10 movimentos reais ou de exemplo de um mês no livro de registos, com categorias e números de recibo, e compare-os com um extrato. Depois faça o separador P&L com SUMIF, encontre o seu lucro ou prejuízo e escreva duas frases sobre o que ele lhe diz.",
          youCanNow: "fazer e ler uma conta de lucros e perdas de um mês a partir do seu próprio livro de registos.",
          quickCheck: [
            { objective: "O6", q: "Como se chama receitas menos despesas quando as receitas são maiores?", options: ["Levantamento do dono", "Prejuízo", "Lucro", "O saldo"], answer: 2, why: "Receitas menos despesas é o lucro; se as despesas forem maiores, é um prejuízo." },
            { objective: "O6", q: "Está a fazer a sua conta de lucros e perdas. Onde entra o levantamento do dono?", options: ["Na maior categoria de despesas", "Nas receitas", "Nos materiais", "Fica fora das despesas"], answer: 3, why: "O levantamento do dono não é uma despesa do negócio, por isso fica fora das despesas na conta de lucros e perdas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: O seu livro de registos e o seu lucro",
        questions: [
          { objective: "O4", q: "Que conjunto de colunas faz um bom livro de registos simples?", options: ["Data, Descrição, Categoria, Entradas, Saídas, Saldo, N.º do recibo", "Nome, Aniversário, Passatempo", "Só o Total", "Palavra-passe e número do cartão do cliente"], answer: 0, why: "Estas colunas registam cada movimento e ligam-no à sua prova." },
          { objective: "O4", q: "Porque usar sempre as mesmas palavras de categoria?", options: ["Senão a folha de cálculo não abre", "Para o livro ficar colorido", "Para poder somar cada categoria depois", "Porque o banco obriga"], answer: 2, why: "Palavras iguais deixam o SUMIF somar bem cada categoria." },
          { objective: "O5", q: "O seu livro de registos tem 15 dólares a menos do que o extrato do banco. O que procura primeiro?", options: ["Um banco novo", "Uma aplicação de folha de cálculo nova", "Nada; pequenas diferenças nunca importam", "Um depósito ou pagamento que está no extrato, mas não no livro de registos"], answer: 3, why: "Uma diferença normalmente quer dizer uma linha em falta, repetida ou mal escrita." },
          { objective: "O6", q: "As receitas são 2,000, as despesas 1,500 e o levantamento do dono 300. Qual é o lucro?", options: ["200", "500", "3,800", "1,500"], answer: 1, why: "O lucro é receitas menos despesas: 2,000 - 1,500 = 500. O levantamento do dono não é uma despesa." },
          { objective: "O6", q: "Com quem deve falar sobre os seus impostos?", options: ["Com um contabilista ou um profissional de impostos", "Com um desconhecido num comentário na internet", "Com ninguém; a conta de lucros e perdas é a sua declaração de impostos", "Com os seus clientes"], answer: 0, why: "A conta de lucros e perdas não é uma declaração de impostos; um contabilista conhece as regras de impostos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Contabilidade Básica",
    questions: [
      { objective: "O1", q: "Fazer a contabilidade quer dizer:", options: ["Ler livros sobre negócios", "Adivinhar o lucro no fim do ano", "Anotar todo o dinheiro que entra e sai", "Escrever um diário"], answer: 2, why: "A contabilidade regista cada entrada e saída de dinheiro." },
      { objective: "O1", q: "Numa associação, o que é uma receita?", options: ["Um donativo", "A renda do escritório", "Lanches para os voluntários", "Tinta para a impressora"], answer: 0, why: "Os donativos e subsídios são dinheiro que entra." },
      { objective: "O2", q: "Qual é um exemplo de documento de suporte de uma despesa?", options: ["Uma mensagem de um amigo", "Um cartão de visita", "A sua lista de tarefas", "Um recibo ou uma fatura"], answer: 3, why: "O IRS indica recibos, faturas e extratos como prova das despesas." },
      { objective: "O2", q: "Qual é a forma mais fácil de evitar que os recibos de papel desbotem ou se percam?", options: ["Guardá-los no bolso", "Fotografá-los e arquivá-los no mesmo dia", "Deitá-los fora depois de uma semana", "Dá-los aos clientes"], answer: 1, why: "Uma fotografia no mesmo dia, arquivada por mês, mantém a prova segura." },
      { objective: "O2", q: "Para muitas declarações de impostos nos Estados Unidos, a regra básica do IRS é guardar os registos durante:", options: ["1 semana", "3 anos, mais em alguns casos", "1 mês", "Nunca; os registos não são precisos"], answer: 1, why: "O IRS diz 3 anos na maioria dos casos, com prazos mais longos em alguns casos." },
      { objective: "O2", q: "Os registos de impostos sobre salários devem ser guardados durante pelo menos:", options: ["1 mês", "1 ano", "4 anos", "10 dias"], answer: 2, why: "O IRS diz pelo menos 4 anos depois de o imposto ser devido ou pago." },
      { objective: "O3", q: "Porque manter o dinheiro do negócio numa conta ou carteira própria?", options: ["Para saber se o negócio está a dar dinheiro", "Porque misturar dinheiro é divertido", "Para não precisar de recibos", "Para esconder vendas"], answer: 0, why: "O dinheiro misturado esconde como o negócio está mesmo a correr." },
      { objective: "O3", q: "Pagou materiais do negócio com o seu cartão pessoal. O que faz?", options: ["Esquece", "Regista como uma venda", "Deita fora o recibo", "Regista no livro de registos e guarda o recibo"], answer: 3, why: "Registar mantém as contas completas e a prova segura." },
      { objective: "O3", q: "Um doador dá dinheiro só para um programa de desporto para jovens. A associação deve:", options: ["Gastá-lo em qualquer coisa", "Devolvê-lo logo", "Não o registar", "Acompanhá-lo para que seja gasto nesse programa"], answer: 3, why: "Os donativos com fim definido têm de ser acompanhados e usados para esse fim." },
      { objective: "O4", q: "Um livro de registos tem:", options: ["Uma página por cliente", "Uma linha por movimento", "Só o total do ano", "Só as despesas"], answer: 1, why: "Cada venda, pagamento ou compra é uma linha própria." },
      { objective: "O4", q: "Numa folha de cálculo, uma fórmula começa com:", options: ["#", "$", "=", "?"], answer: 2, why: "As fórmulas da folha de cálculo começam com um sinal de igual." },
      { objective: "O4", q: "O Saldo é a coluna F, as Entradas a D e as Saídas a E. O saldo corrido na linha 3 é:", options: ["=F2+D3-E3", "=D3*E3", "=F2-D3-E3", "=E3"], answer: 0, why: "Pegue no saldo de cima, some as entradas e tire as saídas." },
      { objective: "O5", q: "Qual é um bom hábito para manter as contas em dia?", options: ["Atualizar uma vez por semana a uma hora fixa", "Atualizar só quando as finanças escrevem", "Atualizar uma vez em cada poucos anos", "Nunca atualizar"], answer: 0, why: "Um pequeno hábito semanal mantém os registos completos e fáceis." },
      { objective: "O5", q: "Reconciliar quer dizer:", options: ["Fazer as pazes com um cliente", "Apagar recibos antigos", "Comparar o livro de registos com o extrato do banco ou do dinheiro móvel", "Abrir uma conta nova"], answer: 2, why: "Reconciliar encontra e corrige as diferenças entre as suas contas e o extrato." },
      { objective: "O5", q: "Uma taxa do banco está no extrato, mas não no seu livro de registos. Você deve:", options: ["Ignorá-la", "Acrescentá-la ao livro de registos", "Fechar a conta", "Apagar o extrato"], answer: 1, why: "Tudo o que é real no extrato pertence ao livro de registos." },
      { objective: "O5", q: "Escreveu 45 em vez de 54. Este tipo de erro é:", options: ["Uma linha em falta", "Um registo repetido", "Uma categoria nova", "Algarismos trocados"], answer: 3, why: "Os algarismos trocados são uma razão comum para as contas não baterem certo." },
      { objective: "O6", q: "Uma conta de lucros e perdas mostra:", options: ["Só o saldo do banco", "Os nomes dos seus clientes", "As receitas, as despesas e a diferença de um período", "A sua pontuação de crédito"], answer: 2, why: "Uma conta de lucros e perdas resume as receitas, as despesas e o lucro ou prejuízo." },
      { objective: "O6", q: "Que fórmula soma todos os valores de Supplies (materiais) do livro de registos?", options: ["=SUM(Supplies)", "=Supplies+1", "=AVERAGE(C:C)", "=SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E)"], answer: 3, why: "O SUMIF soma só as linhas cuja categoria é Supplies." },
      { objective: "O6", q: "Este mês as despesas são maiores do que as receitas. Isso é:", options: ["Um prejuízo", "Um lucro", "Um levantamento do dono", "Um recibo"], answer: 0, why: "Quando as despesas são maiores do que as receitas, o resultado é um prejuízo." },
      { objective: "O6", q: "A sua conta de lucros e perdas está pronta. É a sua declaração de impostos?", options: ["Sim, envie-a às finanças tal como está", "Não; leve os seus registos a um contabilista para os impostos", "Sim, se mostrar lucro", "Só para as associações"], answer: 1, why: "As regras de impostos decidem o que conta; um contabilista pode preparar os seus impostos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      2,
      6,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Livro de registos montado",
        objective: "O4",
        notYet: "Faltam colunas ou o saldo não se atualiza.",
        meets: "Todas as sete colunas, um saldo inicial e um saldo corrido certo depois de cada linha.",
        exceeds: "Também tem uma lista fixa de categorias no seu próprio separador, usada sempre com as mesmas palavras."
      },
      {
        name: "Receitas e despesas separadas",
        objective: "O1",
        notYet: "Algumas linhas estão na categoria errada ou não têm categoria.",
        meets: "Pelo menos 10 movimentos, cada um com a categoria certa de receita ou despesa.",
        exceeds: "O levantamento do dono e qualquer dinheiro pessoal usado no negócio estão registados da forma certa."
      },
      {
        name: "Prova para cada linha",
        objective: "O2",
        notYet: "Algumas linhas não têm número de recibo nem prova.",
        meets: "Cada linha tem um número de recibo que corresponde a um recibo ou folha de vendas guardados.",
        exceeds: "Os recibos estão numa pasta do mês e o papel está guardado num envelope igual."
      },
      {
        name: "Comparado com o extrato",
        objective: "O5",
        notYet: "O livro de registos não foi comparado com um extrato.",
        meets: "As linhas do extrato foram marcadas, as linhas em falta acrescentadas, e os saldos batem certo ou a diferença está explicada.",
        exceeds: "Sabe dizer cada diferença encontrada e como foi corrigida."
      },
      {
        name: "Conta de lucros e perdas lida",
        objective: "O6",
        notYet: "Não há conta de lucros e perdas, ou os totais estão errados.",
        meets: "Uma conta de lucros e perdas com totais SUMIF, sem o levantamento do dono, e com o lucro ou prejuízo indicado.",
        exceeds: "Duas frases claras dizem o que os números querem dizer e uma coisa a mudar no próximo mês."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que continuam a atualizar o livro de registos todas as semanas e a reconciliar todos os meses no seguimento aos 30 dias",
      "Alunos que usam os seus registos para pedir um empréstimo ou um subsídio, ou que os levam a um contabilista na época dos impostos",
      "Alunos que começam outro curso de negócios da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com uma folha de cálculo gratuita: Google Sheets ou Microsoft Excel",
      "Um mês de recibos reais ou de exemplo, e um extrato do banco ou do dinheiro móvel (ou um de exemplo)",
      "A câmara de um telefone para fotografar os recibos, e envelopes para os recibos de papel",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Tenha prontos um mês de movimentos de exemplo e um extrato de exemplo para os alunos que não querem usar os seus próprios números.",
      "Montem juntos o livro de registos e a fórmula do saldo corrido num só ecrã, e depois deixe os alunos copiarem.",
      "Lembre os alunos de não colarem números de contas nem dados de clientes em ferramentas de IA ou em ecrãs partilhados.",
      "Não dê conselhos sobre impostos; envie as questões de impostos para um contabilista ou para a autoridade de impostos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha em Ainda não de cada vez."
    ]
  }
};
