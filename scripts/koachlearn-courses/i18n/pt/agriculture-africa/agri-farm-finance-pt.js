"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-farm-finance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const VSLA = { name: "VSL Associates: a metodologia VSLA (ações, fundo de empréstimos, fundo social, ciclo de um ano, divisão final)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Quénia: lista das SACCO de depósitos licenciadas", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: regras para as instituições de microfinanças (systèmes financiers décentralisés) nos países do franco CFA (XOF)", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Banco Central da Nigéria: bancos de microfinanças", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const NIRSAL = { name: "NIRSAL Plc, Nigéria: apresentação (garantias de risco de crédito para empréstimos agrícolas)", url: "https://nirsal.com/who-we-are/overview/" };
const GIRSAL = { name: "Graphic Online, Gana: a GIRSAL homenageia instituições financeiras pelos empréstimos agrícolas", url: "https://www.graphic.com.gh/news/general-news/increasing-lending-support-for-agriculture-sector-girsal-honours-11-financial-institutions-individuals.html" };
const WRSC = { name: "Conselho do Sistema de Recibos de Armazém, Quénia (Warehouse Receipt System Council: armazéns certificados e recibos de armazém)", url: "https://www.wrsc.go.ke" };
const GCX_EWR = { name: "MyJoyOnline (31 de outubro de 2019): a GCX e o ARB Apex Bank lançam o financiamento com recibos de armazém eletrónicos", url: "https://www.myjoyonline.com/gcx-arb-apex-bank-launch-gha%C2%A250m-support-for-ghanaian-smallholder-farmers/" };
const GCX_ADEHYEMAN = { name: "Ghana News Agency (junho de 2023): a Adehyeman Savings and Loans e a Bolsa de Mercadorias do Gana fazem parceria para apoiar os agricultores", url: "https://gna.org.gh/2023/06/adehyeman-ghana-commodity-exchange-partner-to-support-farmers/" };
const OAF = { name: "One Acre Fund: quem somos (financiamento, insumos agrícolas e formação; países)", url: "https://oneacrefund.org/about-us" };
const ENABLE = { name: "IITA: o Sudão lança o programa ENABLE Youth (programa do Banco Africano de Desenvolvimento para jovens empreendedores agrícolas)", url: "https://iita.org/news-item/sudan-launches-enable-youth-program/" };
const YEDF = { name: "Fundo de Desenvolvimento de Empresas de Jovens, Quénia (Youth Enterprise Development Fund: empréstimos a empresas de jovens, incluindo um empréstimo Agri-Biz)", url: "https://www.youthfund.go.ke" };
const DERFJ = { name: "DER/FJ, Senegal: Delegação Geral para o Empreendedorismo Rápido das Mulheres e dos Jovens", url: "https://der.sn" };
const FCCPC = { name: "FCCPC, Nigéria: estado do registo dos credores digitais (aplicações de empréstimo aprovadas)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const CBK_DCP = { name: "Banco Central do Quénia: supervisão bancária, incluindo a lista dos fornecedores de crédito digital licenciados", url: "https://www.centralbank.go.ke/bank-supervision/" };

module.exports = {
  id: "agri-farm-finance-pt",
  lang: "pt",
  translationOf: "agri-farm-finance",
  category: "Agriculture (Africa)",
  name: "Financiar a Sua Machamba: Empréstimos, Subsídios e Investidores",
  skills: "Calcular quanto dinheiro precisa, Usar grupos de poupança, VSLA e SACCO, Comparar empréstimos agrícolas e planos de reembolso, Usar recibos de armazém e crédito em insumos, Encontrar subsídios verdadeiros e evitar burlas, Escrever um pedido de financiamento de uma página",
  outcome: "calcular exatamente quanto dinheiro a sua machamba precisa e quando, comparar grupos de poupança, SACCO, empréstimos, recibos de armazém, crédito em insumos e subsídios, reconhecer uma burla de empréstimo ou de subsídio, e escrever um pedido de financiamento de uma página a que um credor, um programa ou um investidor possa dizer sim.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, jovens empreendedores agrícolas, grupos de mulheres e de jovens, líderes de cooperativas e extensionistas no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim e em toda a África, que precisam de dinheiro para começar, continuar ou crescer.",
    "O Capítulo 1 trata do dinheiro mais perto de você: calcular quanto precisa e para quê, grupos de poupança, VSLA e SACCO, e empréstimos agrícolas de microfinanças e de bancos. O Capítulo 2 trata de outras portas: o financiamento com recibos de armazém e o crédito em insumos de compradores e de esquemas de contrato, os subsídios e programas para jovens e como evitar burlas, e escrever um pedido de financiamento de uma página. Parte do curso \"Agronegócio e Gestão da Machamba\", que mostra como calcular o custo total de um empréstimo.",
    "Todos os valores em dinheiro são exemplos inventados; as taxas de juro, as comissões e os programas mudam, por isso verifique a oferta atual. Este curso explica como funciona cada tipo de financiamento e os seus riscos. Não dá conselhos sobre empréstimos nem investimentos. Peça emprestado só o que o seu plano precisa, leia o contrato inteiro, verifique se o credor está licenciado e pergunte a um conselheiro de confiança, como a sua cooperativa, a sua SACCO, o extensionista ou um advogado, antes de assinar."
  ],
  finalTask: "Escreva um pedido de financiamento de uma página para a sua machamba (ou uma machamba de exemplo): quem você é e a sua machamba; para que é exatamente o dinheiro, quanto é no total, quanto você mesmo põe e a diferença que pede; como o dinheiro vai render (custo por unidade, margem bruta ou retorno); o tipo de financiamento que pede e porque serve; um plano de reembolso que acompanhe quando o seu dinheiro entra; as suas garantias ou bens dados em garantia; os seus principais riscos e como os gere; e os seus registos ou o seu historial.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, jovens empreendedores agrícolas, grupos de mulheres e de jovens, líderes de cooperativas e extensionistas no Quénia, na Nigéria, no Gana e na África Ocidental francófona, que cultivam ou criam animais e peixe, e que querem dinheiro para começar, crescer ou aguentar a época.",
    startingPoint: "Muitos já pediram emprestado à família, a um chama ou grupo de poupança, a uma loja ou a uma aplicação de empréstimo no telefone. Poucos prepararam um orçamento escrito para um empréstimo, compararam ofertas pelo custo total e pelas datas de reembolso, usaram um recibo de armazém ou verificaram se um credor ou um programa é verdadeiro. Alguns já receberam ofertas falsas de subsídios e de empréstimos.",
    gap: "Os agricultores muitas vezes pedem a quantia errada, na altura errada, ao credor errado, com reembolsos antes da colheita, ou perdem dinheiro com subsídios falsos e aplicações de empréstimo sem licença. Conhecer a sua verdadeira diferença de financiamento e as opções que servem deixa-os pedir menos e melhor, usar a poupança em grupo e o crédito ligado à colheita, e apresentar um pedido claro que os credores e os programas levam a sério.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra de finanças é explicada",
      "Aparelhos: um telefone simples e uma calculadora; um caderno para os orçamentos e o pedido",
      "Tempo: lições de 5 a 6 minutos, que cabem no trabalho da machamba",
      "As taxas, as comissões e os programas mudam e são diferentes em cada país: não se dão taxas nem prazos; os alunos verificam a oferta atual e o regulador",
      "Nenhum conselho sobre empréstimos ou investimentos; nunca escreva PIN, palavras-passe ou dados do banco em aplicações ou ferramentas de IA para praticar"
    ],
    prerequisites: "Nenhum. Os cursos \"Agronegócio e Gestão da Machamba\" (registos, fluxo de caixa, custo do empréstimo) e \"Contabilidade Agrícola e Gestão de Investimentos\" (custo por unidade, retorno) ajudam com os números."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um plano da machamba e os seus custos", action: "calcular o dinheiro total necessário, a sua própria contribuição e a diferença de financiamento, separados em capital de giro e equipamento, com o mês em que cada um é preciso", standard: "com as contas certas e sem gastos da casa misturados" },
    { id: "O2", condition: "Com um grupo de poupança, VSLA ou SACCO em que poderia entrar", action: "explicar como funcionam nele a poupança, os empréstimos, as garantias e a divisão final, e fazer a lista dos seus riscos", standard: "dizendo pelo menos três regras a verificar antes de entrar" },
    { id: "O3", condition: "Com duas ofertas de empréstimo", action: "comparar o custo total, as garantias e as datas de reembolso de cada uma e escolher a que serve para a sua colheita", standard: "com o total a reembolsar calculado para cada uma e os meses de reembolso comparados com o seu fluxo de caixa" },
    { id: "O4", condition: "Com uma oferta de recibo de armazém ou de crédito em insumos", action: "fazer a lista dos seus custos, do que você tem de fazer e do que acontece se os preços ou a colheita caírem", standard: "dizendo pelo menos quatro condições e dois riscos" },
    { id: "O5", condition: "Com um subsídio, um programa para jovens ou uma oferta de empréstimo", action: "verificá-lo no site oficial ou na lista do regulador e reconhecer os sinais de alerta de uma burla", standard: "antes de pagar, partilhar dados ou candidatar-se" },
    { id: "O6", condition: "Usando os números da sua própria machamba", action: "escrever um pedido de financiamento de uma página que um credor, um programa ou um investidor possa avaliar", standard: "com o objetivo, o valor, a contribuição própria, como rende, o reembolso, as garantias e os riscos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A sua necessidade e o dinheiro mais perto de você",
      lessons: [
        {
          title: "Quanto dinheiro precisa, e para quê",
          objectives: ["O1"],
          minutes: 5,
          goal: "Calcular o dinheiro total que precisa, a sua contribuição própria e a diferença de financiamento, mês a mês.",
          text: [
            "Antes de procurar dinheiro, escreva exatamente para que é. O capital de giro paga um ciclo de produção: semente, adubo, ração, pintos ou alevinos, mão de obra, serviços de veterinário e transporte. Volta quando você vende. O equipamento e as construções (uma bomba, um curral, um armazém) duram muitos anos e pagam-se devagar. Os credores muitas vezes tratam-nos de forma diferente, com prazos de empréstimo diferentes, por isso faça listas separadas.",
            "Exemplo (números inventados em naira), um lote de frangos na Nigéria: pintos, ração, serviços de veterinário e mão de obra 1,200,000 (capital de giro); bebedouros, comedouros e reparações no pavilhão 300,000 (equipamento). Total 1,500,000. Você poupou 500,000. Diferença de financiamento = 1,500,000 - 500,000 = 1,000,000. É essa diferença, e não o total, que você pede.",
            "Depois ponha cada custo no mês em que é preciso, usando o seu plano de fluxo de caixa, para pedir o dinheiro quando precisa dele e não pagar juros por dinheiro parado. Guarde uma pequena margem para subidas de preço. Não misture gastos da casa, como as propinas da escola: peça para a machamba só o que a machamba consegue reembolsar."
          ],
          steps: ["Faça a lista de todos os custos do seu plano.", "Marque cada um como capital de giro ou equipamento.", "Some-os para ter a necessidade total.", "Tire o dinheiro que você mesmo vai pôr.", "A diferença é a sua diferença de financiamento.", "Ponha cada custo no mês em que é preciso e acrescente uma pequena margem."],
          words: [["Capital de giro", "dinheiro que paga um ciclo de produção e volta quando você vende."], ["Diferença de financiamento", "o dinheiro que ainda falta depois da sua contribuição própria: necessidade total - dinheiro próprio."], ["Contribuição própria", "o dinheiro ou os bens que você mesmo põe no plano."]],
          slides: [
            { title: "Dois tipos de necessidade", bullets: ["Capital de giro: um ciclo, volta na venda", "Equipamento e construções: duram anos, pagam-se devagar", "Faça listas separadas"] },
            { title: "Exemplo dos frangos (NGN, inventado)", bullets: ["Capital de giro 1,200,000 + equipamento 300,000 = 1,500,000", "Dinheiro próprio 500,000", "Diferença de financiamento 1,000,000: peça isto"] },
            { title: "Calendário e disciplina", bullets: ["Ponha cada custo no seu mês", "Pequena margem para subidas de preço", "Nenhum gasto da casa num empréstimo da machamba"] }
          ],
          tryIt: "Para um plano da sua machamba, faça a lista de todos os custos, marque cada um como capital de giro ou equipamento, some o total, tire o seu dinheiro próprio e escreva a diferença de financiamento e o mês em que cada parte é precisa.",
          youCanNow: "calcular exatamente quanto dinheiro o plano da sua machamba precisa, para quê e quando, e a diferença que tem de financiar.",
          quickCheck: [
            { objective: "O1", q: "Um plano custa 800,000 e você tem 300,000 seus. Qual é a diferença de financiamento?", options: ["1,100,000", "800,000", "500,000", "300,000"], answer: 2, why: "800,000 - 300,000 = 500,000." },
            { objective: "O1", q: "Num tanque de peixe, o que é capital de giro?", options: ["Alevinos e ração para um ciclo", "Escavar o tanque", "Uma bomba de água", "Uma vedação"], answer: 0, why: "Os alevinos e a ração gastam-se num ciclo e voltam quando o peixe é vendido." }
          ]
        },
        {
          title: "Grupos de poupança, VSLA e SACCO",
          objectives: ["O2"],
          minutes: 6,
          goal: "Explicar como funcionam uma VSLA e uma SACCO e fazer a lista das regras a verificar antes de entrar.",
          text: [
            "Uma associação de poupança e crédito da aldeia (VSLA, do inglês) é um grupo, muitas vezes de 10 a 25 membros, que se reúne todas as semanas. Em cada reunião, os membros compram de 1 a 5 ações a um preço por ação que o grupo fixa para o ano. A poupança vai para um fundo de empréstimos. Normalmente, os membros podem pedir emprestado até três vezes a sua poupança, por até três meses, pagando uma taxa de serviço que o grupo decide. Muitos grupos também têm um pequeno fundo social para emergências. Depois de cerca de um ano, todos os empréstimos são reembolsados e o dinheiro, incluindo as taxas de serviço, é dividido na proporção da poupança de cada membro.",
            "Uma SACCO (cooperativa de poupança e crédito; na África Ocidental francófona, uma mutuelle ou caisse) é uma cooperativa financeira que pertence aos membros, muitas vezes maior e mais formal. Você poupa com regularidade, e os empréstimos costumam depender de quanto poupou e precisam de fiadores: membros que prometem reembolsar se você não o fizer. No Quénia, a SASRA (o regulador das SACCO) licencia as SACCO de depósitos e publica a lista. Nos países do franco CFA, as instituições de microfinanças e as caixas de crédito seguem as regras do BCEAO (o banco central da África Ocidental).",
            "Antes de entrar, verifique: a constituição ou os estatutos escritos, o preço da ação ou o valor da poupança, as regras e as taxas dos empréstimos, como o dinheiro é guardado em segurança (um cofre com cadeados ou uma conta licenciada), como os registos são feitos e lidos em voz alta, e o que quer dizer ser fiador. Se você for fiador do empréstimo de um amigo e ele não pagar, pode ter de pagar você."
          ],
          steps: ["Peça para ver as regras escritas do grupo.", "Verifique o preço da ação ou o valor da poupança e os dias de reunião.", "Verifique o valor, o prazo e a taxa de serviço dos empréstimos.", "Verifique como o dinheiro e os registos são guardados em segurança.", "Pergunte o que quer dizer ser fiador para você.", "Numa SACCO, verifique se está registada ou licenciada."],
          words: [["VSLA", "associação de poupança e crédito da aldeia: um grupo que poupa todas as semanas, empresta aos membros e divide tudo no fim de um ciclo."], ["Divisão final", "o dia em que o grupo paga toda a poupança e os ganhos aos membros, na proporção da poupança de cada um."], ["SACCO", "cooperativa de poupança e crédito: um grupo que pertence aos membros, recebe poupança e faz empréstimos."], ["Fiador", "uma pessoa que promete reembolsar um empréstimo se quem pediu não o fizer."]],
          slides: [
            { title: "VSLA: como funciona", bullets: ["10-25 membros reúnem-se todas as semanas; compram 1-5 ações", "Empréstimo até 3x a poupança, por até 3 meses", "Divisão final depois de cerca de um ano"] },
            { title: "SACCO", bullets: ["Cooperativa de poupança e crédito dos membros", "Empréstimos ligados à poupança; fiadores", "Quénia: veja a lista de licenciadas da SASRA"] },
            { title: "Verifique antes de entrar", bullets: ["Regras escritas; valor da poupança", "Valor, prazo e taxa do empréstimo", "Dinheiro e registos seguros; deveres do fiador"] }
          ],
          sources: [VSLA, SASRA, BCEAO_SFD],
          tryIt: "Peça as regras a um grupo de poupança, VSLA ou SACCO perto de você (ou use o exemplo). Escreva o valor da poupança, o valor do empréstimo, o prazo, a taxa, como o dinheiro é guardado em segurança e o que um fiador tem de fazer.",
          youCanNow: "explicar como funcionam os grupos de poupança, as VSLA e as SACCO e verificar as suas regras antes de entrar ou de ser fiador de um empréstimo.",
          quickCheck: [
            { objective: "O2", q: "Numa VSLA, como é dividido o dinheiro no fim do ciclo?", options: ["Em partes iguais, seja qual for a poupança de cada um", "Para o presidente", "Para quem pediu mais emprestado", "Na proporção da poupança de cada membro"], answer: 3, why: "Os membros que compraram mais ações recebem uma parte maior do total." },
            { objective: "O2", q: "Você é fiador do empréstimo de um amigo na SACCO e ele deixa de pagar. O que pode acontecer?", options: ["Nada; ser fiador é só uma formalidade", "Pode ter de reembolsar uma parte ou tudo", "A SACCO cancela o empréstimo", "A família do seu amigo paga automaticamente"], answer: 1, why: "Um fiador promete reembolsar se quem pediu não o fizer." }
          ]
        },
        {
          title: "Empréstimos agrícolas de microfinanças e de bancos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Comparar duas ofertas de empréstimo pelo custo total, pelas garantias e por quanto os reembolsos acompanham a sua colheita.",
          text: [
            "Os bancos e as instituições de microfinanças emprestam valores mais pequenos, muitas vezes a grupos; os bancos comerciais e agrícolas emprestam valores maiores, muitas vezes com mais garantias. Pergunte se a taxa é por mês ou por ano, e se é fixa sobre o valor inicial (taxa plana) ou sobre o saldo em dívida. Uma taxa plana cobra juros sobre o valor todo durante todo o empréstimo; uma taxa sobre o saldo em dívida cobra só sobre o que você ainda deve, por isso o mesmo número custa menos. Some todas as comissões e o seguro para saber o total que vai reembolsar.",
            "A garantia é o que o credor pode levar se você não reembolsar: um título de terra, um veículo, equipamento, poupança guardada pelo credor, uma garantia do grupo ou um recibo de armazém. Alguns governos apoiam os credores com garantias de crédito, como a NIRSAL na Nigéria (cobertura de até 75% para os credores) e a GIRSAL no Gana. Estas protegem o credor e podem deixar os bancos com mais vontade de emprestar aos agricultores, mas você continua a dever o empréstimo todo.",
            "Faça os reembolsos acompanharem a colheita. Exemplo (números inventados em xelins do Quénia), pedir 100,000 para uma época de milho: a Oferta A é de 10,000 por mês durante 12 meses, a começar no próximo mês, num total de 120,000. A Oferta B é um só pagamento de 112,000 no mês 6, depois da colheita. A B custa menos e reembolsa quando o seu dinheiro entra; a A pede reembolsos antes de você ter vendido alguma coisa. Peça um período de carência ou um reembolso na altura da colheita, e verifique se o credor está licenciado pelo banco central."
          ],
          steps: ["Pergunte: taxa por mês ou por ano? Plana ou sobre o saldo em dívida?", "Some juros, comissões e seguro para ter o total a reembolsar.", "Pergunte que garantia é precisa.", "Ponha as datas de reembolso no seu plano de fluxo de caixa.", "Peça um período de carência ou o reembolso na colheita, se precisar.", "Verifique se o credor está licenciado; leia o contrato inteiro."],
          words: [["Taxa plana", "juros cobrados sobre o valor todo emprestado durante todo o empréstimo, mesmo enquanto você reembolsa."], ["Saldo em dívida", "juros cobrados só sobre o valor que você ainda deve."], ["Garantia", "algo que o credor pode levar se você não reembolsar."], ["Período de carência", "tempo no início de um empréstimo em que você não tem de reembolsar."], ["Garantia de crédito", "uma promessa de outra entidade de cobrir parte da perda do credor se quem pediu não reembolsar."]],
          slides: [
            { title: "Conheça a taxa", bullets: ["Por mês ou por ano?", "Plana: juros sobre o valor todo, sempre", "Saldo em dívida: só sobre o que ainda deve"] },
            { title: "Garantias", bullets: ["Título de terra, equipamento, poupança, garantia do grupo", "NIRSAL (Nigéria), GIRSAL (Gana) apoiam os credores", "Você continua a dever o empréstimo todo"] },
            { title: "Reembolsos e colheita (exemplo KES)", bullets: ["A: 10,000 x 12 desde o próximo mês = 120,000", "B: 112,000 uma vez no mês 6, depois da colheita", "A B custa menos e acompanha quando o dinheiro entra"] }
          ],
          sources: [CBN_MFB, NIRSAL, GIRSAL],
          tryIt: "Pegue em duas ofertas de empréstimo, verdadeiras ou de exemplo. Para cada uma, escreva o valor, a taxa (por mês ou ano, plana ou sobre o saldo), as comissões, o total a reembolsar, a garantia e os meses de reembolso. Marque os meses de reembolso no seu plano de fluxo de caixa e escolha a que serve melhor.",
          youCanNow: "comparar ofertas de empréstimo pelo custo total, pelas garantias e pelas datas de reembolso e escolher a que serve para a sua colheita.",
          quickCheck: [
            { objective: "O3", q: "Dois empréstimos mostram o mesmo número, 2% por mês. Um é de taxa plana, o outro sobre o saldo em dívida. Qual costuma custar menos?", options: ["O de taxa plana", "Custam sempre o mesmo", "O de taxa sobre o saldo em dívida", "Depende da cor do formulário"], answer: 2, why: "A taxa sobre o saldo em dívida cobra só sobre o que ainda deve, por isso o total de juros é menor." },
            { objective: "O3", q: "O seu milho vende-se no mês 6. Que plano de reembolso serve melhor?", options: ["Reembolsos semanais desde a semana 1", "Reembolsos mensais desde o próximo mês", "Reembolsos diários", "Um período de carência com reembolso depois da colheita"], answer: 3, why: "Reembolsar quando entra o dinheiro da colheita evita pagamentos falhados e vendas forçadas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A sua necessidade e o dinheiro mais perto de você",
        questions: [
          { objective: "O1", q: "Porque fazer listas separadas de capital de giro e de equipamento?", options: ["Os credores podem tratá-los de forma diferente porque se pagam em tempos diferentes", "Deixa a lista mais comprida", "O equipamento nunca precisa de financiamento", "Não há nenhuma razão"], answer: 0, why: "O capital de giro volta num ciclo; o equipamento paga-se ao longo de anos." },
          { objective: "O1", q: "Deve juntar as propinas da escola a um pedido de empréstimo para a machamba?", options: ["Sim, sempre", "Sim, se o credor não perguntar", "Não, peça para a machamba só o que a machamba consegue reembolsar", "Só na época seca"], answer: 2, why: "Os gastos da casa não rendem, por isso tornam um empréstimo da machamba mais difícil de reembolsar." },
          { objective: "O2", q: "Numa VSLA normal, quanto pode um membro pedir emprestado?", options: ["Qualquer valor", "Até cerca de três vezes a sua poupança", "Só a sua própria poupança", "Dez vezes a sua poupança"], answer: 1, why: "Os empréstimos da VSLA costumam ter um limite de cerca de três vezes a poupança do membro." },
          { objective: "O2", q: "Que entidade no Quénia licencia as SACCO de depósitos?", options: ["KALRO", "KAMIS", "O Departamento de Meteorologia do Quénia", "SASRA"], answer: 3, why: "A SASRA licencia e supervisiona as SACCO de depósitos e publica a lista." },
          { objective: "O3", q: "Pede 50,000 e reembolsa 5,000 por mês durante 12 meses, mais uma comissão de 2,000. Qual é o custo total do empréstimo?", options: ["12,000", "60,000", "10,000", "2,000"], answer: 0, why: "Reembolsa 60,000 + 2,000 = 62,000, que são 12,000 a mais do que pediu." }
        ]
      }
    },
    {
      name: "Capítulo 2: Outras portas para o dinheiro, e como pedi-lo",
      lessons: [
        {
          title: "Recibos de armazém e crédito em insumos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Fazer a lista dos custos, deveres e riscos de um empréstimo com recibo de armazém e de uma oferta de crédito em insumos.",
          text: [
            "Financiamento com recibo de armazém: você entrega produção limpa, seca e classificada a um armazém certificado. É pesada e testada, e você recebe um recibo que prova que é dono dessa quantidade e qualidade. Um banco parceiro pode emprestar com base no recibo, para você ter dinheiro agora e vender mais tarde, quando os preços podem estar melhores; o empréstimo é reembolsado com a venda. No Quénia, o Conselho do Sistema de Recibos de Armazém (WRS Council) certifica os armazéns. No Gana, a Bolsa de Mercadorias do Gana (GCX) e o ARB Apex Bank lançaram empréstimos com recibos de armazém eletrónicos em 2019, e em 2023 uma empresa de poupança e crédito juntou-se para oferecer empréstimos garantidos por produtos, que os agricultores reembolsam depois de vender. Pergunte ao credor quanto do valor da produção empresta e por quanto tempo.",
            "Custos e riscos: taxas de armazenamento e de manuseamento, seguro, juros e transporte. Se os preços caírem em vez de subirem, a venda pode não cobrir o empréstimo e as taxas. A produção tem de cumprir a classificação, por isso uma má secagem ou escolha baixa o seu valor. Calcule o preço de que precisa com o método do ponto de equilíbrio do armazenamento do curso de gestão de riscos.",
            "Crédito em insumos: um comprador, uma fábrica, um esquema de produtores contratados ou uma organização fornece semente, adubo ou pintos a crédito, muitas vezes com formação, e você reembolsa em prestações ou o custo é tirado do pagamento da sua colheita. A One Acre Fund trabalha assim com agricultores no Quénia, na Nigéria e noutros países. Verifique: os preços dos insumos comparados com os preços a pronto pagamento, todas as taxas, quanto é descontado na colheita, se tem de vender só a eles, o que acontece se a colheita falhar, e a multa por venda paralela."
          ],
          steps: ["Recibo de armazém: encontre um armazém certificado e os seus credores parceiros.", "Pergunte as taxas de armazenamento, manuseamento, seguro e empréstimo.", "Pergunte quanto pode pedir emprestado com base na produção e por quanto tempo.", "Calcule o preço de venda de que precisa para reembolsar tudo.", "Crédito em insumos: compare os preços dos insumos com os preços a pronto e faça a lista de todas as taxas.", "Pergunte o que acontece se a colheita falhar e se tem de vender só a eles."],
          words: [["Recibo de armazém", "um documento de um armazém certificado que prova que você é dono de produção guardada, com uma quantidade e qualidade definidas."], ["Armazém certificado", "um armazém verificado e aprovado para guardar a produção com segurança e passar recibos."], ["Crédito em insumos", "semente, adubo ou outros insumos fornecidos agora e pagos mais tarde, muitas vezes com a colheita."], ["Esquema de produtores contratados", "um acordo em que uma empresa dá aos agricultores insumos e conselhos e compra a sua colheita."]],
          slides: [
            { title: "Empréstimos com recibo de armazém", bullets: ["Entregue produção classificada; receba um recibo", "Peça emprestado com base nele; venda mais tarde", "Quénia: WRS Council; Gana: armazéns da GCX"] },
            { title: "Custos e riscos", bullets: ["Armazenamento, manuseamento, seguro, juros", "Os preços podem cair em vez de subir", "A produção tem de cumprir a classificação"] },
            { title: "Crédito em insumos", bullets: ["Insumos agora, pagos em prestações ou na colheita", "Compradores, fábricas, esquemas contratados, One Acre Fund", "Compare com os preços a pronto; liste todas as taxas"] },
            { title: "Pergunte antes de assinar", bullets: ["O que é descontado na colheita?", "Tem de vender só a eles?", "E se a colheita falhar?"] }
          ],
          sources: [WRSC, GCX_EWR, GCX_ADEHYEMAN, OAF],
          tryIt: "Escolha um empréstimo com recibo de armazém ou uma oferta de crédito em insumos perto de você (ou um exemplo). Escreva pelo menos quatro condições (custos, valor, prazo, descontos ou regras de venda) e dois riscos, e diga se serve para a sua machamba.",
          youCanNow: "explicar como funcionam os empréstimos com recibo de armazém e o crédito em insumos e verificar os seus custos e riscos antes de assinar.",
          quickCheck: [
            { objective: "O4", q: "O que prova um recibo de armazém?", options: ["Que você é dono de uma quantidade e qualidade definidas de produção guardada", "Que pagou os seus impostos", "Que o preço vai subir", "Que o banco aprovou um empréstimo"], answer: 0, why: "O recibo prova que você é dono de produção classificada e guardada, e um credor pode aceitá-lo." },
            { objective: "O4", q: "Um esquema de crédito em insumos tira o custo dos insumos do pagamento da sua colheita. O que tem de verificar?", options: ["Só a variedade da semente", "Nada; a empresa decide", "Os preços dos insumos comparados com os preços a pronto, todas as taxas e o que acontece se a colheita falhar", "Só a data da formação"], answer: 2, why: "Estas condições decidem quanto você paga de verdade e quem fica com a perda se a colheita falhar." }
          ]
        },
        {
          title: "Subsídios, programas para jovens e como evitar burlas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Verificar um subsídio, um programa para jovens ou uma oferta de empréstimo numa fonte oficial e reconhecer os sinais de uma burla.",
          text: [
            "Os subsídios não têm de ser reembolsados, mas há muita concorrência, têm regras sobre como gastar o dinheiro e pedem relatórios. Muitos \"fundos para jovens\" são, na verdade, empréstimos ou formação. Exemplos que pode verificar: o programa ENABLE Youth do Banco Africano de Desenvolvimento forma e apoia jovens empreendedores agrícolas em vários países africanos, com parceiros como o IITA (um instituto de investigação agrícola); o Fundo de Desenvolvimento de Empresas de Jovens do Quénia oferece empréstimos a empresas de jovens, incluindo um empréstimo Agri-Biz; a DER/FJ do Senegal financia projetos de mulheres e de jovens, também na agricultura, sobretudo com crédito. Os programas abrem e fecham e mudam as regras: verifique sempre no site ou no escritório oficial que um concurso está aberto agora, antes de se candidatar.",
            "As burlas copiam os nomes e os logótipos de programas verdadeiros nas redes sociais e no WhatsApp. Sinais de alerta: tem de pagar uma taxa de \"processamento\" ou de \"inscrição\" antes de receber um subsídio ou um empréstimo; a aprovação é \"garantida\"; apressam você; pedem o seu PIN, um código de uso único ou fotos do seu documento de identidade por chat; o contacto usa um número ou um email pessoal; ou uma aplicação de empréstimo quer acesso a todos os seus contactos. Os programas verdadeiros não cobram para se candidatar e nunca pedem o seu PIN.",
            "Verifique cada credor e cada aplicação de empréstimo: no Quénia, o Banco Central do Quénia publica a lista dos fornecedores de crédito digital licenciados e a SASRA lista as SACCO licenciadas; na Nigéria, a FCCPC (a entidade de defesa do consumidor) publica o registo dos credores digitais aprovados e o Banco Central da Nigéria licencia os bancos de microfinanças; nos países do franco CFA, verifique junto do BCEAO ou do serviço nacional de microfinanças. Na dúvida, pergunte à sua cooperativa ou ao extensionista."
          ],
          steps: ["Encontre o programa no seu site ou escritório oficial, não numa publicação das redes sociais.", "Verifique que o concurso está aberto agora e leia as regras.", "Nunca pague uma taxa para se candidatar ou para receber um subsídio.", "Nunca partilhe o seu PIN, um código de uso único ou palavras-passe.", "Verifique os credores e as aplicações de empréstimo na lista do regulador.", "Na dúvida, pergunte à sua cooperativa ou ao extensionista."],
          words: [["Subsídio", "dinheiro dado para um fim, que não tem de ser reembolsado, normalmente com regras e relatórios."], ["Concurso (convite a candidaturas)", "um aviso de que um programa está a aceitar candidaturas, com data de início e de fim."], ["Burla", "um truque para roubar dinheiro ou informações."], ["Regulador", "a entidade oficial que licencia e supervisiona credores, SACCO ou seguradoras."]],
          slides: [
            { title: "Subsídios e programas para jovens", bullets: ["Subsídios: não se reembolsam, mas há concorrência e regras", "Muitos fundos para jovens são empréstimos ou formação", "Verifique no site oficial que o concurso está aberto"] },
            { title: "Exemplos para verificar", bullets: ["ENABLE Youth do BAD (com o IITA)", "Quénia: empréstimos do Youth Enterprise Development Fund", "Senegal: DER/FJ para mulheres e jovens"] },
            { title: "Sinais de alerta de burla", bullets: ["Uma taxa para se candidatar ou para receber dinheiro", "Aprovação \"garantida\"; apressam você", "Pedem PIN, código ou fotos do documento por chat"] },
            { title: "Verifique o regulador", bullets: ["Quénia: credores digitais no CBK; SACCO na SASRA", "Nigéria: aplicações na FCCPC; microfinanças no CBN", "Países do franco CFA: BCEAO ou serviço nacional"] }
          ],
          sources: [ENABLE, YEDF, DERFJ, CBK_DCP, FCCPC],
          tryIt: "Encontre um subsídio, um programa para jovens ou uma aplicação de empréstimo de que já ouviu falar. Verifique-o no site oficial ou na lista do regulador e escreva: é verdadeiro, está aberto agora, é um subsídio ou um empréstimo, e que sinais de alerta vê.",
          youCanNow: "verificar se um subsídio, um programa ou um credor é verdadeiro e está aberto, e reconhecer os sinais de alerta de uma burla.",
          quickCheck: [
            { objective: "O5", q: "Uma mensagem de WhatsApp diz que ganhou um subsídio para a machamba e tem de pagar uma taxa de processamento de 5,000. O que é isto?", options: ["Um passo normal de um subsídio", "Um sinal de alerta de burla", "Uma regra do governo", "Um reembolso de empréstimo"], answer: 1, why: "Os subsídios verdadeiros não cobram para você receber dinheiro." },
            { objective: "O5", q: "Na Nigéria, onde pode verificar se uma aplicação de empréstimo está aprovada?", options: ["No anúncio da própria aplicação", "Na opinião de um amigo", "No número de descargas", "No registo de credores digitais da FCCPC"], answer: 3, why: "A FCCPC publica a lista dos credores digitais aprovados." }
          ]
        },
        {
          title: "Escrever um pedido de financiamento de uma página",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever um pedido de financiamento de uma página para a sua machamba.",
          text: [
            "Um pedido de financiamento diz a um credor, a um programa ou a um investidor o que você precisa, porquê, e como vai ser reembolsado ou dar retorno. Mantenha-o numa página, com títulos claros: quem você é e a sua machamba (local, terra, atividades, anos de agricultura); o objetivo e o valor (necessidade total, contribuição própria, a diferença que pede, separada em capital de giro e equipamento); como rende (custo por unidade, margem bruta ou retorno, a partir dos seus registos); o financiamento que pede e porque serve; o plano de reembolso por mês, de acordo com o seu fluxo de caixa; as garantias; os riscos e como os gere (seguro, contratos, diversificação, armazenamento); e o seu historial (registos feitos, empréstimos anteriores reembolsados, participação num grupo).",
            "Os investidores são diferentes dos credores. Um investidor põe dinheiro em troca de uma parte do negócio e dos seus lucros futuros (capital próprio), em vez de ser reembolsado com juros. Os investidores em capital próprio costumam procurar negócios a crescer, como fábricas de transformação ou machambas maiores, com registos e uma equipa. Você entrega uma parte da propriedade e algum controlo, por isso peça conselho jurídico e nunca assine o que não entende.",
            "Antes de o enviar, verifique os números duas vezes, peça a um líder da cooperativa, ao extensionista ou a um conselheiro para o ler, e junte os seus registos. Nunca ponha palavras-passe, PIN ou dados bancários completos no pedido; dê-os só pelo processo oficial do credor."
          ],
          steps: ["Quem você é e a sua machamba.", "Objetivo, necessidade total, contribuição própria e a diferença.", "Como rende: custo por unidade, margem ou retorno.", "Tipo de financiamento e plano de reembolso por mês.", "Garantias; riscos e como os gere.", "Historial; verifique os números e peça a um conselheiro para o ler."],
          words: [["Pedido de financiamento", "um documento curto que pede dinheiro a um credor, programa ou investidor, mostrando o objetivo, o valor e o reembolso."], ["Capital próprio", "uma parte da propriedade de um negócio que um investidor recebe pelo seu dinheiro."], ["Historial", "prova do que já fez antes, como registos feitos e empréstimos reembolsados."]],
          slides: [
            { title: "Uma página, títulos claros", bullets: ["Quem você é e a sua machamba", "Objetivo, necessidade total, dinheiro próprio, a diferença", "Como rende: custo por unidade, margem, retorno"] },
            { title: "Reembolso e garantias", bullets: ["Reembolso por mês, de acordo com o fluxo de caixa", "Garantias", "Riscos e como os gere"] },
            { title: "Os investidores são diferentes", bullets: ["Dinheiro em troca de uma parte do negócio (capital próprio)", "Você entrega parte da propriedade e do controlo", "Peça primeiro conselho jurídico"] },
            { title: "Antes de enviar", bullets: ["Verifique os números duas vezes; junte os registos", "Peça a um conselheiro para o ler", "Nenhum PIN nem palavra-passe no pedido"] }
          ],
          tryIt: "Tarefa final: escreva o seu pedido de financiamento de uma página com o objetivo, a necessidade total, a contribuição própria e a diferença, como rende, o tipo de financiamento e porquê, um plano de reembolso por mês, as garantias, os riscos e o seu historial. Peça a uma pessoa de confiança para o ler.",
          youCanNow: "escrever um pedido de financiamento claro, de uma página, apoiado nos seus próprios números, que um credor, um programa ou um investidor possa avaliar.",
          quickCheck: [
            { objective: "O6", q: "Que valor deve o seu pedido pedir?", options: ["A diferença de financiamento depois da sua contribuição própria", "O custo total, sem contar o seu dinheiro", "O máximo que o credor der", "O dobro do custo total, por segurança"], answer: 0, why: "Pedir a diferença mostra o seu próprio compromisso e mantém o empréstimo o mais pequeno possível." },
            { objective: "O6", q: "O que recebe um investidor em capital próprio pelo seu dinheiro?", options: ["Só juros mensais fixos", "Nada", "Uma parte do negócio e dos seus lucros futuros", "O seu título de terra"], answer: 2, why: "Capital próprio quer dizer ser dono de uma parte do negócio." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Outras portas para o dinheiro, e como pedi-lo",
        questions: [
          { objective: "O4", q: "Num empréstimo com recibo de armazém, o que acontece se os preços caírem em vez de subirem?", options: ["O banco cancela o empréstimo", "A venda pode não cobrir o empréstimo e as taxas", "O armazém paga a diferença", "Nada muda"], answer: 1, why: "Você continua a dever o empréstimo e as taxas, seja qual for o preço." },
          { objective: "O4", q: "Qual é uma regra comum num esquema de produtores contratados ou de crédito em insumos?", options: ["Nunca reembolsa", "Tem de vender a qualquer um menos a eles", "Os insumos são sempre grátis", "O custo dos insumos é tirado do pagamento da sua colheita"], answer: 3, why: "Muitos esquemas recuperam o custo dos insumos quando compram a sua colheita." },
          { objective: "O5", q: "Antes de se candidatar a um programa para jovens empreendedores agrícolas, deve primeiro:", options: ["Verificar no site oficial que o concurso está aberto agora", "Pagar a taxa de inscrição", "Enviar o seu PIN aos organizadores", "Partilhá-lo nas redes sociais"], answer: 0, why: "Os programas abrem e fecham; o site oficial mostra o que é verdadeiro e atual." },
          { objective: "O5", q: "Uma aplicação de empréstimo pede acesso a todos os contactos do seu telefone. Isto é:", options: ["Uma regra normal dos bancos", "Obrigatório por lei", "Um sinal de alerta; verifique primeiro se a aplicação está licenciada", "Um sinal de um bom credor"], answer: 2, why: "As aplicações sem licença usam as listas de contactos para envergonhar quem deve; verifique a lista do regulador." },
          { objective: "O6", q: "O que deve estar num pedido de financiamento de uma página?", options: ["O PIN do seu dinheiro móvel", "Um plano de reembolso por mês de acordo com o seu fluxo de caixa", "Só dez páginas de fotos", "As dívidas dos seus vizinhos"], answer: 1, why: "Os credores precisam de ver como e quando você vai reembolsar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Financiar a Sua Machamba: Empréstimos, Subsídios e Investidores",
    questions: [
      { objective: "O1", q: "Necessidade total 2,000,000; dinheiro próprio 600,000. A diferença de financiamento é:", options: ["2,600,000", "600,000", "1,400,000", "2,000,000"], answer: 2, why: "2,000,000 - 600,000 = 1,400,000." },
      { objective: "O1", q: "O capital de giro é dinheiro que:", options: ["Paga um ciclo de produção e volta quando você vende", "Compra terra", "Paga as propinas da escola", "Nunca é reembolsado"], answer: 0, why: "Financia os insumos e a mão de obra de um ciclo." },
      { objective: "O1", q: "Porque pôr cada custo no mês em que é preciso?", options: ["Os credores gostam de listas compridas", "Para pedir mais do que precisa", "Não faz diferença", "Para ter o dinheiro quando precisa e não pagar juros por dinheiro parado"], answer: 3, why: "Um bom calendário mantém os empréstimos e os juros o mais baixos possível." },
      { objective: "O2", q: "Com que frequência se reúne uma VSLA normal?", options: ["Uma vez por ano", "Todas as semanas", "Só na divisão final", "Nunca"], answer: 1, why: "É nas reuniões semanais que os membros compram ações e reembolsam empréstimos." },
      { objective: "O2", q: "Para que serve o fundo social de uma VSLA?", options: ["Pagar ao presidente", "Comprar terra", "As emergências dos membros", "Só festas"], answer: 2, why: "O fundo social ajuda os membros em emergências." },
      { objective: "O2", q: "Antes de entrar num grupo de poupança, o que deve verificar?", options: ["As regras escritas, as taxas dos empréstimos e como o dinheiro é guardado em segurança", "Só quem é o presidente", "Só o lugar das reuniões", "Nada"], answer: 0, why: "Regras claras e dinheiro seguro protegem a sua poupança." },
      { objective: "O3", q: "Uma taxa sobre o saldo em dívida cobra juros sobre:", options: ["O valor todo durante todo o empréstimo", "Nada", "Só as comissões", "Só o valor que ainda deve"], answer: 3, why: "À medida que reembolsa, os juros descem." },
      { objective: "O3", q: "O que faz um sistema de garantia de crédito como a NIRSAL?", options: ["Cancela os empréstimos dos agricultores", "Cobre parte da perda do credor se quem pediu não reembolsar", "Paga os juros dos agricultores", "Dá subsídios grátis"], answer: 1, why: "Protege os credores para emprestarem mais; você continua a dever o empréstimo todo." },
      { objective: "O3", q: "O que é uma garantia?", options: ["A sua cultura preferida", "Um título de terra ou equipamento que o credor pode levar se você não reembolsar", "O seu número de telefone", "Um preço de mercado"], answer: 1, why: "A garantia é a segurança do credor." },
      { objective: "O3", q: "Oferta A: reembolsar 120,000 em prestações mensais desde o próximo mês. Oferta B: reembolsar 112,000 de uma vez depois da colheita. Para quem cultiva, a B:", options: ["Custa mais e serve pior", "É sempre ilegal", "Custa menos e reembolsa quando entra o dinheiro da colheita", "É igual à A"], answer: 2, why: "O total da B é menor e vence quando o agricultor tem dinheiro." },
      { objective: "O4", q: "Onde entrega a produção para receber um recibo de armazém?", options: ["Em qualquer loja", "Em casa", "A um comerciante que acabou de conhecer", "Num armazém certificado"], answer: 3, why: "Só os armazéns certificados passam recibos que os credores aceitam." },
      { objective: "O4", q: "No Quénia, que entidade certifica os armazéns para os recibos de armazém?", options: ["O Conselho do Sistema de Recibos de Armazém", "KAMIS", "NAFDAC", "O Departamento de Meteorologia do Quénia"], answer: 0, why: "O WRS Council certifica e regula os armazéns." },
      { objective: "O4", q: "O que é a venda paralela?", options: ["Vender à beira da estrada", "Vender a outra pessoa a produção prometida a um comprador", "Vender a uma cooperativa", "Vender por fases"], answer: 1, why: "Quebra um acordo de crédito em insumos ou um contrato e pode trazer multas." },
      { objective: "O5", q: "Um programa de subsídios verdadeiro:", options: ["Pede uma taxa antes de lhe pagar", "Pede o seu PIN", "Não cobra para se candidatar", "Garante a aprovação a todos"], answer: 2, why: "Taxas, pedidos de PIN e garantias são sinais de burla." },
      { objective: "O5", q: "O Fundo de Desenvolvimento de Empresas de Jovens do Quénia oferece sobretudo:", options: ["Terra grátis", "Empréstimos a empresas de jovens", "Seguro agrícola", "Previsões do tempo"], answer: 1, why: "Dá empréstimos, incluindo um empréstimo Agri-Biz, e apoio aos negócios." },
      { objective: "O5", q: "Onde deve verificar uma aplicação de empréstimo digital do Quénia?", options: ["Na sua página das redes sociais", "No seu número de estrelas", "Num grupo de chat de um amigo", "Na lista do Banco Central do Quénia de fornecedores de crédito digital licenciados"], answer: 3, why: "O CBK licencia os fornecedores de crédito digital e publica a lista." },
      { objective: "O6", q: "Que título mostra a um credor como o dinheiro vai render?", options: ["Custo por unidade, margem bruta ou retorno", "A sua cor preferida", "Os nomes dos seus vizinhos", "O seu PIN"], answer: 0, why: "Estes números mostram que o dinheiro vai criar rendimento para reembolsar." },
      { objective: "O6", q: "O seu historial num pedido de financiamento quer dizer:", options: ["A sua velocidade a correr", "Prova do que já fez, como registos feitos e empréstimos reembolsados", "Os contactos do seu telefone", "Uma lista de desejos"], answer: 1, why: "O que fez no passado ajuda os credores a confiar no seu plano." },
      { objective: "O6", q: "Antes de enviar um pedido de financiamento, deve:", options: ["Juntar o seu PIN para ser mais rápido", "Aumentar os números", "Verificar os números duas vezes e pedir a um conselheiro para o ler", "Enviá-lo a todos os números que encontrar na internet"], answer: 2, why: "Números verificados e um segundo leitor tornam o pedido mais forte e mais seguro." },
      { objective: "O6", q: "O que entrega quando aceita capital próprio de um investidor?", options: ["Nada", "A sua participação no grupo de poupança", "Toda a sua terra, automaticamente", "Parte da propriedade e algum controlo do negócio"], answer: 3, why: "Capital próprio quer dizer que o investidor é dono de parte do negócio." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 3, 5, 6, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do pedido e verifique outra vez.",
    criteria: [
      { name: "Necessidade e diferença de financiamento", objective: "O1", notYet: "O valor é um palpite, ou há gastos da casa misturados.", meets: "A necessidade total, a contribuição própria e a diferença estão certas, separadas em capital de giro e equipamento, com os meses.", exceeds: "Inclui uma pequena margem e mostra de onde veio cada número de custo." },
      { name: "O tipo certo de financiamento", objective: "O2", notYet: "Não dá nenhuma razão para o tipo de financiamento escolhido.", meets: "Diz o tipo de financiamento (grupo, SACCO, empréstimo, recibo de armazém, crédito em insumos, subsídio ou capital próprio) e porque serve.", exceeds: "Compara pelo menos duas opções, incluindo a poupança em grupo, e explica a escolha." },
      { name: "Plano de reembolso", objective: "O3", notYet: "Não há plano de reembolso, ou os reembolsos caem antes de qualquer rendimento.", meets: "Reembolsos mensais com o custo total, de acordo com o plano de fluxo de caixa e a colheita.", exceeds: "Mostra o que acontece numa má época e como os reembolsos seriam mesmo assim cumpridos." },
      { name: "Garantias e condições", objective: "O4", notYet: "Faltam as garantias ou as principais condições.", meets: "As garantias estão indicadas, com as principais condições e dois riscos.", exceeds: "Explica como um recibo de armazém, um contrato ou um seguro baixam o risco do credor." },
      { name: "Verificado e seguro", objective: "O5", notYet: "O credor ou o programa não foi verificado, ou há dados privados como um PIN.", meets: "O credor ou o programa foi verificado num site oficial ou na lista do regulador, e não há códigos privados.", exceeds: "Anota a data da verificação e que o concurso ou a oferta está aberto agora." },
      { name: "Pedido claro de uma página", objective: "O6", notYet: "Tem mais de uma página ou falta o objetivo, o valor ou como rende.", meets: "Uma página com o objetivo, o valor, a contribuição própria, como rende, o reembolso, as garantias, os riscos e o historial.", exceeds: "Foi lido por um conselheiro, com os registos juntos e os seus comentários resolvidos." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do pedido de financiamento",
      "Alunos que dizem ter entrado num grupo de poupança ou numa SACCO, ou ter pedido financiamento com um pedido escrito, em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter escolhido um empréstimo com reembolsos depois da colheita, ou ter pedido menos do que planeavam",
      "Alunos que dizem ter verificado um credor, uma aplicação de empréstimo ou uma oferta de subsídio numa lista oficial, ou ter recusado uma burla de subsídio com taxa",
      "As cooperativas ou credores parceiros dizem receber candidaturas mais completas e menos reembolsos falhados dos alunos que terminaram o curso"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, e um telefone simples com calculadora",
      "O plano da machamba, os registos e o plano de fluxo de caixa do aluno, ou os números de exemplo do curso",
      "Ofertas de empréstimo verdadeiras ou de exemplo, regras de um grupo de poupança e um folheto local de crédito em insumos ou de recibo de armazém, se houver",
      "Cerca de 80 minutos no total, em sessões curtas, mais o tempo para escrever o pedido de financiamento"
    ],
    facilitatorNotes: [
      "Num grupo de agricultores ou numa sessão de extensão: façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas em pares.",
      "Convide uma SACCO, uma VSLA ou um credor licenciado para explicar as suas regras, mas não recomende nenhum credor; deixe os alunos fazer as perguntas da lição.",
      "Antes de falar de um subsídio ou de um programa para jovens, verifique no site oficial que está aberto; nunca passe links das redes sociais.",
      "Nunca peça aos alunos para partilhar PIN, palavras-passe, números de identificação ou dados bancários na prática; use marcadores.",
      "Avalie o pedido de financiamento com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez; incentive os alunos a mostrá-lo à sua cooperativa ou ao credor."
    ]
  }
};
