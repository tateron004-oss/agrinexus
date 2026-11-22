"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-climate-resilient-agribusiness.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Figures in KES, NGN, GHS and XOF are made-up examples, as in the English. No investment advice.

const FAO_CSA = { name: "FAO: Guia de referência sobre a agricultura inteligente face ao clima (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const CGIAR_MAIZE = { name: "CGIAR: Milho inteligente face ao clima (tolerante à seca)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const CBK = { name: "Banco Central do Quénia (listas de bancos e bancos de microfinanças licenciados)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Banco Central da Nigéria (instituições licenciadas e proteção do consumidor)", url: "https://www.cbn.gov.ng" };
const BOA = { name: "Bank of Agriculture, Nigéria (banco agrícola)", url: "https://www.boanig.com" };
const ADB_GH = { name: "Agricultural Development Bank, Gana (banco de desenvolvimento agrícola)", url: "https://agricbank.com" };
const GCF = { name: "Fundo Verde para o Clima (Green Climate Fund; trabalha através de governos, bancos e agências acreditadas, não diretamente com os agricultores)", url: "https://www.greenclimate.fund" };
const IRA = { name: "Insurance Regulatory Authority, Quénia (verificar se uma seguradora está licenciada)", url: "https://www.ira.go.ke" };
const ABPP = { name: "SNV/Hivos: ficha do Programa de Parceria de Biogás para África (biodigestores domésticos e bio-chorume)", url: "https://snv.org/assets/explore/download/20200526_-_abpp-4bf_factsheet.pdf" };
const FAO_AGROFOR = { name: "FAO: Agrofloresta", url: "https://www.fao.org/agroforestry/en/" };
const KE_CARBON = { name: "Quénia: Regulamento sobre Alterações Climáticas (Mercados de Carbono) de 2024 (resumo e texto completo)", url: "https://climate-laws.org/document/the-climate-change-carbon-markets-regulations-2024_e0fd" };
const VERRA = { name: "Registo Verra (procurar um projeto de carbono pelo nome ou ID)", url: "https://registry.verra.org" };
const GOLD = { name: "Registo Gold Standard (procurar um projeto de carbono pelo nome ou ID)", url: "https://registry.goldstandard.org" };

module.exports = {
  id: "agri-climate-resilient-agribusiness-pt",
  lang: "pt",
  translationOf: "agri-climate-resilient-agribusiness",
  category: "Agriculture (Africa)",
  name: "Agronegócio Resiliente ao Clima",
  skills: "Avaliar o risco climático em dinheiro, Calcular o custo dos investimentos de adaptação, Encontrar e verificar financiamento climático, Cortar custos e emissões ao mesmo tempo, Reconhecer burlas com créditos de carbono, Escrever um plano de resiliência climática",
  outcome: "escrever um plano de resiliência climática de uma página para o seu negócio agrícola: os riscos climáticos que mais lhe custam, os investimentos de adaptação que vai fazer e quanto custam, como os vai pagar, que práticas para poupar dinheiro vai acrescentar e como vai avaliar qualquer oferta de créditos de carbono.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, jovens agro-empreendedores, líderes de grupos de agricultores e extensionistas no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim e em toda a África, que já veem as alterações climáticas nas suas machambas e querem tratá-las como um problema de negócio, com um plano de negócio.",
    "O Capítulo 1 põe o risco climático em dinheiro: você avalia os riscos para o seu negócio agrícola, escolhe e calcula o custo de investimentos de adaptação, como semente tolerante à seca, armazenamento de água, sombra e novas atividades, e aprende os tipos de financiamento climático e de empréstimos verdes e como os verificar. O Capítulo 2 trata de práticas que cortam emissões e custos ao mesmo tempo, de esquemas de créditos de carbono e de como evitar burlas e contratos injustos, e de como juntar tudo isto ao seu plano de negócio.",
    "O curso \"Agricultura Climaticamente Inteligente\" trata das previsões sazonais e do calendário de riscos climáticos; faça-o primeiro, se puder. Todos os valores em dinheiro aqui são exemplos inventados: use os seus próprios preços locais. Este curso explica como funcionam o financiamento e os contratos; não lhe diz em que investir. Leia cada contrato do princípio ao fim e fale com um conselheiro de confiança antes de assinar. Cada lição dura cerca de cinco minutos e termina com uma tarefa para a sua própria machamba."
  ],
  finalTask: "Escreva um plano de resiliência climática de uma página para o seu negócio agrícola (ou para uma machamba de exemplo, como 3 acres de milho e feijão com 6 cabras leiteiras em Makueni, 4 hectares de cacau na Região Ocidental do Gana, ou 2 hectares de arroz e amendoim perto de Kaolack, no Senegal): os seus três maiores riscos climáticos, com um custo estimado para cada um; dois ou três investimentos de adaptação, com o custo, o benefício anual e o retorno; como vai pagar (poupanças, grupo, empréstimo, subsídio), com as perguntas que vai fazer a quem empresta; pelo menos duas práticas que cortam custos e emissões; as suas regras para avaliar qualquer oferta de créditos de carbono; e a data em que vai rever o plano.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, trabalhadores agrícolas, jovens agro-empreendedores e extensionistas em toda a África (Quénia, Nigéria, Gana e África Ocidental francófona). Muitos têm machambas mistas, com culturas e animais, e vendem parte do que produzem. Alguns têm registos simples; muitos não têm.",
    startingPoint: "Sabem dizer as mudanças do clima que veem (chuvas atrasadas, períodos secos, calor, cheias) e muitos conhecem algumas práticas inteligentes face ao clima. Poucos dão um valor em dinheiro ao risco climático, comparam investimentos de adaptação pelo retorno ou sabem verificar um empréstimo verde ou um contrato de créditos de carbono.",
    gap: "Os choques climáticos atingem o rendimento e o pagamento dos empréstimos, mas muitos agricultores gastam em adaptação sem calcular o custo, pedem emprestado sem comparar o custo total, ou assinam contratos de carbono que não entendem. Os alunos precisam de planear a resiliência climática como uma decisão de negócio, proteger-se das burlas e apresentar um plano credível a quem empresta, aos compradores e aos programas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos usam o português como segunda língua, e o curso existe também em inglês, espanhol, francês, árabe e outras línguas",
      "Aparelhos: um telemóvel simples ou smartphone, papel e uma calculadora; a internet pode ser lenta ou cara",
      "Tempo: lições de 4 a 6 minutos, que cabem no trabalho da machamba",
      "Dinheiro: todos os valores são exemplos; nenhum preço, taxa de juro ou subsídio é dado como facto",
      "Segurança financeira: nenhum conselho de investimento; os alunos nunca partilham PIN, documentos de identificação ou números de conta nas tarefas de prática"
    ],
    prerequisites: "Ajuda ter registos simples da machamba e saber a margem bruta (\"Agronegócio e Gestão da Machamba\"). Recomenda-se fazer primeiro \"Agricultura Climaticamente Inteligente\" (previsões e calendário de riscos climáticos)."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as atividades da sua machamba e o que aconteceu nas últimas cinco épocas", action: "classificar os principais riscos climáticos para o seu negócio agrícola pela probabilidade e pelo dinheiro que podem custar", standard: "indicando pelo menos três riscos, cada um com um custo estimado na moeda local" },
    { id: "O2", condition: "Com dois ou três investimentos de adaptação possíveis", action: "calcular o custo de cada investimento e comparar o seu benefício anual com o custo", standard: "usando os seus próprios preços locais e mostrando o retorno em épocas ou anos" },
    { id: "O3", condition: "Antes de pedir um empréstimo climático ou verde, um subsídio ou um programa", action: "fazer a lista das perguntas a fazer a quem empresta e verificar se está licenciado", standard: "cobrindo o custo total, as datas de pagamento, as condições e quem o regula" },
    { id: "O4", condition: "Com as práticas que usa agora", action: "identificar duas práticas que cortam as emissões de gases com efeito de estufa e também cortam os seus custos", standard: "dizendo o insumo ou o dinheiro que cada uma poupa" },
    { id: "O5", condition: "Com uma oferta ou um contrato de créditos de carbono", action: "verificar a oferta à procura dos sinais de alerta de uma burla ou de um negócio injusto", standard: "respondendo a pelo menos quatro verificações antes de assinar ou pagar alguma coisa" },
    { id: "O6", condition: "Usando o seu trabalho deste curso", action: "escrever um plano de resiliência climática de uma página para o seu negócio agrícola", standard: "com riscos, investimentos, custos, financiamento, práticas para poupar dinheiro e uma data de revisão" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O risco climático é um risco de negócio",
      lessons: [
        {
          title: "Uma avaliação do risco climático para o seu negócio agrícola",
          objectives: ["O1"],
          minutes: 5,
          goal: "Classificar os riscos climáticos para o seu negócio agrícola pela probabilidade e pelo impacto em dinheiro.",
          text: [
            "Um calendário de riscos climáticos mostra quando o tempo prejudica a sua machamba. Uma avaliação do risco climático vai um passo mais longe: pergunta quanto cada risco pode custar ao seu negócio, para saber em quais deve gastar dinheiro primeiro.",
            "Para cada atividade (milho, tomate, cabras, cacau, tilápia), escreva os perigos climáticos: chuvas que começam tarde, um período seco na floração, stress de calor nos animais, cheias, ventos fortes, novas pragas. Faça duas perguntas sobre cada um: Qual é a probabilidade de acontecer nas próximas cinco épocas (baixa, média ou alta)? E, se acontecer, quanto rendimento vai perder? Use os seus registos e pergunte aos agricultores mais velhos o que aconteceu nos anos maus do passado.",
            "Depois pense no negócio todo, não só no campo: Consegue ainda pagar um empréstimo num ano mau? Os compradores ainda vão aceitar a sua produção se a qualidade baixar? Os trabalhadores conseguem chegar à machamba com cheias? Um período seco que reduz 40 sacos de milho para 25 não é só um problema de produção; é um problema de dinheiro em caixa.",
            "Ponha os riscos numa tabela simples e ordene-os. Os riscos que são ao mesmo tempo prováveis e caros vão para o topo do seu plano."
          ],
          steps: ["Escreva as suas atividades.", "Debaixo de cada uma, escreva os perigos climáticos da sua experiência e do seu calendário de riscos.", "Marque a probabilidade de cada perigo: baixa, média ou alta.", "Estime o dinheiro perdido se acontecer, na sua moeda.", "Ordene: primeiro os riscos prováveis e caros.", "Acrescente os efeitos no negócio: pagamento de empréstimos, contratos com compradores, mão de obra, transporte."],
          words: [["Avaliação do risco climático", "uma lista dos perigos climáticos que o seu negócio enfrenta, da probabilidade de cada um e de quanto pode custar."], ["Perigo", "um acontecimento que pode causar dano, como a seca, a cheia ou o calor."], ["Probabilidade", "a possibilidade de uma coisa acontecer."], ["Impacto", "o tamanho do dano ou da perda de dinheiro que um acontecimento causa."]],
          slides: [
            { title: "Do calendário ao custo", bullets: ["Calendário: quando o tempo prejudica", "Avaliação: quanto custa ao seu negócio", "Gaste primeiro nos maiores riscos"] },
            { title: "Duas perguntas por perigo", bullets: ["Qual a probabilidade nas próximas cinco épocas?", "Quanto rendimento perde se acontecer?", "Use registos e a memória dos agricultores mais velhos"] },
            { title: "Pense além do campo", bullets: ["Pagamento de empréstimos num ano mau", "Contratos com compradores e qualidade", "Mão de obra, transporte, armazenamento"] },
            { title: "Ordene os riscos", bullets: ["Provável + caro = topo do plano", "Exemplo: período seco reduz 40 sacos para 25", "Também é um problema de dinheiro em caixa"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Faça uma tabela com quatro colunas: perigo, probabilidade (baixa, média, alta), dinheiro perdido estimado e efeito no negócio. Preencha pelo menos três perigos para a sua própria machamba e faça um círculo à volta do maior.",
          youCanNow: "classificar os riscos climáticos para o seu negócio agrícola pela probabilidade e por quanto podem custar.",
          quickCheck: [
            { objective: "O1", q: "Que risco deve ficar no topo do plano de riscos climáticos de uma machamba?", options: ["Um que é pouco provável e barato", "Um que é provável e custaria muito", "Um que só afeta o vizinho", "Um que aconteceu uma vez há 40 anos"], answer: 1, why: "Os riscos que são ao mesmo tempo prováveis e caros fazem mais dano ao negócio, por isso vêm primeiro." },
            { objective: "O1", q: "Um período seco reduz a colheita de milho de uma agricultora e ela não consegue pagar o empréstimo a tempo. O que mostra isto?", options: ["O risco climático só afeta a produção", "Os empréstimos nunca são afetados pelo tempo", "O risco climático também atinge o dinheiro em caixa e os pagamentos", "A agricultora deve deixar de ter registos"], answer: 2, why: "Uma avaliação do risco climático olha para o negócio todo, incluindo o dinheiro em caixa e as dívidas." }
          ]
        },
        {
          title: "Escolher investimentos de adaptação e calcular o seu custo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular o custo de dois investimentos de adaptação e comparar o seu retorno.",
          text: [
            "Um investimento de adaptação é dinheiro ou trabalho que gasta agora para perder menos nos anos maus. Os mais comuns em África são: semente tolerante à seca ou de ciclo curto (centros do CGIAR, como o CIMMYT, criaram milho tolerante à seca), armazenamento de água (tanques, charcos revestidos), árvores de sombra para o cacau, o café ou os animais, melhores abrigos para os animais, e diversificação: acrescentar uma segunda cultura, cabras, aves ou peixe, para que uma época má não o arruíne.",
            "Para cada opção, escreva o custo (compra, construção, mão de obra, manutenção) e o benefício anual (colheita a mais num ano mau, menos ração comprada, um novo rendimento). Depois calcule o retorno: o custo dividido pelo benefício anual dá mais ou menos quantos anos faltam para o investimento se pagar. Lembre-se de que alguns benefícios só chegam nos anos maus, por isso faça a média ao longo de várias épocas.",
            "Exemplo com valores inventados: um agricultor em Machakos compara um tanque de água de KES 60,000 que poupa cerca de KES 20,000 por ano em água comprada e hortícolas perdidas (retorno de cerca de 3 anos) com semente tolerante à seca que custa KES 2,000 a mais por acre e poupa cerca de KES 8,000 num ano seco, que vem um ano em cada dois (média de KES 4,000 por ano, retorno na primeira época). Os dois podem valer a pena; a semente é mais barata para começar.",
            "Verifique também: Consegue fazer a manutenção? Cabe na sua mão de obra e na sua terra? Também funciona num ano bom? Pergunte ao seu extensionista que variedades e modelos servem para a sua zona."
          ],
          steps: ["Escolha o seu maior risco da Lição 1.", "Escreva dois ou três investimentos que o reduzem.", "Escreva o custo total de cada um: compra, construção, mão de obra, manutenção.", "Estime o benefício anual, com a média dos anos bons e maus.", "Retorno = custo ÷ benefício anual.", "Verifique a mão de obra, a manutenção e se serve, com o conselho do extensionista."],
          words: [["Investimento de adaptação", "dinheiro ou trabalho gasto agora para perder menos quando o clima ataca."], ["Retorno", "o tempo que o dinheiro que um investimento poupa ou ganha leva a cobrir o seu custo."], ["Diversificação", "ter mais do que uma fonte de rendimento, para que uma falha não arruíne o negócio."]],
          slides: [
            { title: "Investimentos de adaptação comuns", bullets: ["Semente tolerante à seca ou de ciclo curto", "Armazenamento de água: tanques, charcos revestidos", "Árvores de sombra, melhores abrigos para animais", "Novas atividades: cabras, aves, peixe"] },
            { title: "Custo e benefício", bullets: ["Custo: compra, construção, mão de obra, manutenção", "Benefício: perdas evitadas, novo rendimento", "Faça a média dos benefícios dos anos maus"] },
            { title: "Retorno (exemplo inventado em KES)", bullets: ["Tanque 60,000 ÷ 20,000 por ano = cerca de 3 anos", "Semente +2,000 por acre ÷ 4,000 por ano = primeira época", "Use os seus próprios preços locais"] },
            { title: "Antes de escolher", bullets: ["Consegue fazer a manutenção?", "Cabe na sua terra e na sua mão de obra?", "Pergunte à extensão o que serve para a sua zona"] }
          ],
          sources: [CGIAR_MAIZE, FAO_CSA],
          tryIt: "Para o seu maior risco, calcule o custo de dois investimentos de adaptação com os seus próprios preços locais. Escreva o custo, o benefício anual médio e o retorno de cada um, depois faça um círculo à volta daquele por onde começaria e diga porquê.",
          youCanNow: "calcular o custo dos investimentos de adaptação e compará-los pelo retorno.",
          quickCheck: [
            { objective: "O2", q: "Uma rede de sombra custa GHS 3,000 e poupa cerca de GHS 1,000 por ano em tomate perdido. Qual é o retorno aproximado?", options: ["3 meses", "1 ano", "10 anos", "Cerca de 3 anos"], answer: 3, why: "O retorno é o custo dividido pelo benefício anual: 3,000 ÷ 1,000 = cerca de 3 anos (valores de exemplo)." },
            { objective: "O2", q: "A semente tolerante à seca só ajuda nos anos secos, que vêm cerca de um ano em cada três. Como deve contar o seu benefício?", options: ["Fazer a média da poupança do ano seco ao longo de todos os anos", "Contar a poupança do ano seco todos os anos", "Não contar nenhum benefício", "Contar só nos anos de chuva"], answer: 0, why: "Os benefícios que só chegam nos anos maus devem ter a média feita ao longo dos anos bons e maus." }
          ]
        },
        {
          title: "Financiamento climático e empréstimos verdes",
          objectives: ["O3"],
          minutes: 5,
          goal: "Fazer a lista das perguntas antes de um empréstimo climático ou verde e verificar se quem empresta está licenciado.",
          text: [
            "Financiamento climático é dinheiro destinado a adaptar-se às alterações climáticas ou a cortar emissões. Os grandes fundos, como o Fundo Verde para o Clima, não emprestam diretamente aos agricultores; trabalham através de governos, bancos e agências. O que chega aos agricultores costuma vir assim: empréstimos verdes ou climáticos de bancos, bancos de microfinanças e SACCO (para tanques, bombas solares, kits de rega gota a gota, biogás); planos de pagamento a prestações dos fornecedores de equipamento; programas do governo ou de ONG que dividem o custo da semente, dos tanques ou das árvores; e subsídios ou fundos de contrapartida para grupos e cooperativas.",
            "Onde perguntar: no seu banco ou SACCO, na sua cooperativa, no serviço de agricultura do seu distrito, condado ou estado e ao seu extensionista, e em bancos agrícolas como o Bank of Agriculture na Nigéria ou o Agricultural Development Bank no Gana. Os programas mudam muitas vezes, por isso pergunte o que está aberto agora e peça os detalhes por escrito.",
            "Um rótulo verde não torna um empréstimo barato nem seguro. Compare o custo total (juros, taxas, seguro), quando caem os pagamentos (coincidem com a sua colheita?), o que acontece se a colheita falhar, e as condições (fornecedores aprovados, formação, seguro). Verifique se quem empresta está licenciado: no Quénia, nas listas do Banco Central do Quénia; na Nigéria, com o Banco Central da Nigéria; noutros países, com o seu banco central ou o regulador das cooperativas.",
            "Nunca pague uma \"taxa de processamento\" a um agente para ter um subsídio ou um empréstimo, e nunca partilhe o seu PIN nem o código do dinheiro móvel."
          ],
          steps: ["Decida o que o dinheiro vai comprar e o seu retorno (Lição 2).", "Pergunte ao seu banco, SACCO, cooperativa e serviço de agricultura o que está aberto agora.", "Peça por escrito o custo total, as datas de pagamento e as condições.", "Verifique quem empresta na lista do banco central ou do regulador.", "Pergunte: o que acontece se a minha colheita falhar?", "Fale com um conselheiro de confiança antes de assinar."],
          words: [["Financiamento climático", "dinheiro para se adaptar às alterações climáticas ou cortar emissões."], ["Empréstimo verde", "um empréstimo para uma coisa que ajuda o ambiente, como uma bomba solar ou uma unidade de biogás."], ["SACCO", "uma cooperativa de poupança e crédito que pertence aos seus membros."], ["Pagamento a prestações (pay-as-you-go)", "pagar um equipamento em pequenas quantias regulares, muitas vezes por dinheiro móvel."]],
          slides: [
            { title: "Como o dinheiro do clima chega aos agricultores", bullets: ["Empréstimos verdes: bancos, microfinanças, SACCO", "Planos de equipamento pagos a prestações", "Programas que dividem custos e subsídios a grupos"] },
            { title: "Onde perguntar", bullets: ["O seu banco, SACCO ou cooperativa", "Serviço de agricultura e extensionista", "Bancos agrícolas, ex.: Bank of Agriculture (NG), ADB (GH)"] },
            { title: "Verde não quer dizer barato", bullets: ["Custo total: juros + taxas + seguro", "Os pagamentos coincidem com a colheita?", "E se a colheita falhar?"] },
            { title: "Proteja-se", bullets: ["Quem empresta está licenciado? Veja as listas do banco central", "Nunca pague a um agente uma \"taxa de processamento\"", "Nunca partilhe o seu PIN nem o código"] }
          ],
          sources: [GCF, CBK, CBN, BOA, ADB_GH],
          tryIt: "Escreva cinco perguntas que vai fazer a quem empresta ou a um programa sobre o investimento que escolheu na Lição 2. Inclua o custo total, as datas de pagamento, as condições, o que acontece se a colheita falhar e como vai verificar se estão licenciados.",
          youCanNow: "fazer a lista das perguntas sobre um empréstimo climático ou verde e verificar se quem empresta está licenciado.",
          quickCheck: [
            { objective: "O3", q: "Um agente diz que vai receber um subsídio climático se primeiro enviar KES 3,000 como taxa de processamento. O que deve fazer?", options: ["Pagar depressa antes de o subsídio fechar", "Enviar metade agora e metade depois", "Recusar; os programas verdadeiros não pedem a agentes para cobrar taxas assim", "Dar ao agente o seu PIN do dinheiro móvel"], answer: 2, why: "As \"taxas de processamento\" pagas antes a agentes são uma burla comum; verifique o programa no serviço oficial." },
            { objective: "O3", q: "Que pergunta conta mais ao comparar dois empréstimos verdes para uma bomba solar?", options: ["Qual tem o logótipo mais bonito", "O custo total e se os pagamentos coincidem com a sua colheita", "Qual agente é mais simpático", "Qual se chama verde"], answer: 1, why: "O custo total e as datas de pagamento decidem se consegue pagar o empréstimo, seja qual for o rótulo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O risco climático é um risco de negócio",
        questions: [
          { objective: "O1", q: "O que acrescenta uma avaliação do risco climático a um calendário de riscos climáticos?", options: ["Os nomes dos meses", "A previsão da chuva", "A probabilidade de cada risco e quanto pode custar ao negócio", "Uma lista de culturas para deixar de produzir"], answer: 2, why: "A avaliação junta a probabilidade e o impacto em dinheiro a cada risco, para os poder ordenar." },
          { objective: "O1", q: "As cheias cortam a estrada para o seu comprador durante duas semanas todos os anos. Onde entra isto?", options: ["Em lado nenhum; não tem a ver com a produção", "Nos efeitos no negócio da sua avaliação do risco climático", "Só no seu diário", "No plano do comprador, não no seu"], answer: 1, why: "Os riscos climáticos para o transporte, os compradores e a mão de obra são riscos de negócio e entram na avaliação." },
          { objective: "O2", q: "Um produtor de tilápia na Nigéria avalia um revestimento de tanque de NGN 400,000 que poupa NGN 200,000 por ano. Qual é o retorno?", options: ["Cerca de 2 anos", "Cerca de 20 anos", "Cerca de 2 meses", "Nunca se paga"], answer: 0, why: "400,000 ÷ 200,000 = cerca de 2 anos (valores de exemplo)." },
          { objective: "O2", q: "Qual é um exemplo de diversificação como investimento de adaptação?", options: ["Plantar a mesma variedade de milho em mais terra", "Vender todas as suas cabras", "Pedir mais emprestado para a mesma cultura", "Acrescentar aves a uma machamba de milho, para que uma época má não o arruíne"], answer: 3, why: "Uma segunda fonte de rendimento espalha o risco climático pelo negócio." },
          { objective: "O3", q: "Como pode um agricultor no Quénia verificar se quem oferece um empréstimo verde está licenciado?", options: ["Perguntar ao agente de quem empresta", "Ver as listas de instituições licenciadas do Banco Central do Quénia", "Olhar para os gostos nas redes sociais", "Confiar se disser \"verde\""], answer: 1, why: "O banco central publica listas dos bancos e bancos de microfinanças licenciados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cortar custos, carbono e planear",
      lessons: [
        {
          title: "Mitigação que também poupa dinheiro",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identificar duas práticas na sua machamba que cortam emissões e custos ao mesmo tempo.",
          text: [
            "Mitigação quer dizer cortar os gases com efeito de estufa que uma machamba liberta, ou guardar mais carbono no solo e nas árvores. Para um agricultor, a melhor mitigação é a que também poupa dinheiro, porque ganha mesmo que ninguém lhe pague pelo carbono.",
            "Menos desperdício de adubo: o adubo perdido com a chuva, o vento ou na altura errada é dinheiro perdido e também liberta gases. Pô-lo perto das raízes na altura certa, e juntar estrume e composto, dá mais colheita de cada saco. Biogás: um biodigestor doméstico transforma o estrume de vaca ou de porco em gás para cozinhar, cortando o que gasta em lenha ou carvão, e o bio-chorume que sobra é um adubo. O Programa de Parceria de Biogás para África ajudou a instalar biodigestores domésticos no Quénia, no Burkina Faso e noutros países.",
            "Agrofloresta: as árvores na machamba guardam carbono e podem dar fruta, forragem, lenha, madeira e sombra (por exemplo, árvores de sombra no cacau na Costa do Marfim e no Gana), cortando o que compra. Outras formas de poupar: não queimar os restos das culturas (guarda os nutrientes e poupa adubo), melhor alimentação para os animais (mais leite por animal), e bombas solares em vez de gasóleo (custo de funcionamento mais baixo).",
            "Escreva a poupança em dinheiro. Se um biodigestor custa XOF 500,000 e poupa XOF 120,000 por ano em carvão e adubo (valores inventados), pode calcular o seu retorno como qualquer outro investimento."
          ],
          steps: ["Escreva os insumos que mais compra: adubo, combustível, ração, lenha.", "Para cada um, encontre uma prática que use menos ou que o substitua.", "Estime o dinheiro poupado por ano.", "Verifique o custo e o retorno.", "Escolha duas para começar."],
          words: [["Mitigação", "cortar as emissões de gases com efeito de estufa, ou guardar mais carbono no solo e nas árvores."], ["Biodigestor", "um tanque fechado onde o estrume se decompõe e faz biogás para cozinhar ou para luz."], ["Bio-chorume", "o líquido que sobra depois de fazer biogás; pode ser usado como adubo."], ["Agrofloresta", "plantar árvores junto com culturas ou animais na mesma terra."]],
          slides: [
            { title: "Mitigação que compensa", bullets: ["Corta emissões ou guarda carbono", "Também corta os seus custos", "Ganha mesmo sem pagamentos pelo carbono"] },
            { title: "Três formas de poupar", bullets: ["Menos desperdício de adubo: lugar certo, altura certa", "Biogás: gás para cozinhar + bio-chorume como adubo", "Agrofloresta: fruta, forragem, lenha, sombra"] },
            { title: "Mais formas de poupar", bullets: ["Não queime os restos das culturas", "Melhor alimentação: mais leite por animal", "Bomba solar em vez de gasóleo"] },
            { title: "Ponha em dinheiro", bullets: ["Exemplo: biodigestor de XOF 500,000", "Poupa XOF 120,000 por ano (inventado)", "Retorno de cerca de 4 anos"] }
          ],
          sources: [ABPP, FAO_AGROFOR, FAO_CSA],
          tryIt: "Escreva os três insumos em que mais gasta. Para cada um, escreva uma prática que usaria menos dele e estime o dinheiro poupado por ano. Escolha duas para pôr no seu plano.",
          youCanNow: "identificar práticas que cortam ao mesmo tempo as emissões e os custos, e pôr a poupança em dinheiro.",
          quickCheck: [
            { objective: "O4", q: "Que prática corta emissões e também poupa dinheiro a um criador de porcos?", options: ["Queimar o estrume ao ar livre", "Comprar mais carvão", "Deixar o estrume num monte ao pé do rio", "Um biodigestor que faz gás para cozinhar e bio-chorume como adubo"], answer: 3, why: "O biogás substitui o combustível comprado e o bio-chorume substitui parte do adubo." },
            { objective: "O4", q: "Porque é que reduzir o desperdício de adubo é uma boa escolha de mitigação para um agricultor?", options: ["Poupa dinheiro e também corta emissões", "Torna o solo mais duro", "Quer dizer que nunca mais precisa de adubar", "Todos os compradores exigem"], answer: 0, why: "Menos desperdício quer dizer mais colheita por saco, por isso o agricultor poupa dinheiro e emite menos." }
          ]
        },
        {
          title: "Créditos de carbono: oportunidades, burlas e contratos injustos",
          objectives: ["O5"],
          minutes: 6,
          goal: "Verificar uma oferta de créditos de carbono à procura de sinais de alerta antes de assinar ou pagar alguma coisa.",
          text: [
            "Um crédito de carbono é um certificado que diz que uma tonelada de dióxido de carbono foi mantida fora do ar ou guardada, por exemplo plantando árvores, recuperando terras ou usando fogões limpos. As empresas compram créditos. Alguns projetos pagam a agricultores ou comunidades por práticas que guardam carbono. Os projetos verdadeiros estão registados num padrão como o Verra ou o Gold Standard, e os seus registos podem ser consultados pelo nome do projeto.",
            "Tenha muito cuidado. Os pagamentos pelo carbono são muitas vezes pequenos, lentos (às vezes anos depois de começar) e incertos, e os custos de medir e verificar são tirados primeiro. As burlas e os negócios injustos são comuns: pessoas que pedem aos agricultores uma taxa para \"aderir\", prometem pagamentos grandes e rápidos, ou pedem para assinar contratos longos que entregam os direitos sobre a sua terra, as suas árvores ou o seu carbono por 20 anos ou mais.",
            "Sinais de alerta: tem de pagar para aderir; prometem pagamentos grandes e rápidos; não pode levar o contrato para ler; não está numa língua que entende; dá a alguém direitos sobre a sua terra ou as suas árvores, ou impede-o de as cortar ou vender; não diz quanto recebe, quando, e que parte fica para quem gere o projeto; o projeto não está em nenhum registo.",
            "Alguns países já têm regras. O Regulamento sobre Alterações Climáticas (Mercados de Carbono) de 2024 do Quénia exige a aprovação dos projetos de carbono e, para projetos em terra comunitária, um acordo de desenvolvimento comunitário sobre como os benefícios são divididos. Verifique as regras do seu país no ministério do ambiente. Nunca assine no mesmo dia; leia tudo, pergunte à sua cooperativa, a um advogado ou a um conselheiro de confiança, e guarde uma cópia."
          ],
          steps: ["Pergunte: qual é o nome do projeto e o seu ID no registo?", "Procure-o no registo (Verra, Gold Standard ou outros).", "Pergunte quanto vai receber, quando, e que parte fica para quem gere o projeto.", "Leia que direitos sobre a terra, as árvores ou o carbono entrega, e por quanto tempo.", "Recuse qualquer taxa de adesão.", "Leve o contrato; peça conselho antes de assinar; guarde uma cópia."],
          words: [["Crédito de carbono", "um certificado por uma tonelada de dióxido de carbono mantida fora do ar ou guardada."], ["Promotor de projeto de carbono", "a empresa que gere um projeto de carbono e vende os créditos."], ["Registo", "uma lista oficial e pública de projetos de carbono e dos seus créditos."], ["Partilha de benefícios", "como o dinheiro dos créditos é dividido entre o promotor, os agricultores e a comunidade."]],
          slides: [
            { title: "O que é um crédito de carbono", bullets: ["1 tonelada de CO2 mantida fora do ar ou guardada", "As empresas compram-nos", "Projetos verdadeiros estão num registo (Verra, Gold Standard)"] },
            { title: "Olhe para a realidade", bullets: ["Pagamentos muitas vezes pequenos, lentos e incertos", "Os custos de medição são tirados primeiro", "Algumas ofertas são burlas"] },
            { title: "Sinais de alerta", bullets: ["Taxa para aderir; prometem muito dinheiro depressa", "Não pode levar o contrato para ler", "Direitos sobre a sua terra ou árvores durante décadas", "Sem ID no registo; sem divisão clara do pagamento"] },
            { title: "Proteja-se", bullets: ["Quénia: Regulamento dos Mercados de Carbono de 2024", "Verifique no ministério do ambiente do seu país", "Nunca assine no mesmo dia; peça conselho; guarde cópia"] }
          ],
          sources: [VERRA, GOLD, KE_CARBON],
          tryIt: "Escreva uma lista de pelo menos cinco perguntas que vai fazer antes de entrar em qualquer esquema de créditos de carbono. Depois imagine que um agente oferece ao seu grupo XOF 50,000 por agricultor se assinarem hoje e pagarem XOF 5,000 para se inscreverem: marque os sinais de alerta que esta oferta mostra.",
          youCanNow: "verificar uma oferta de créditos de carbono à procura dos sinais de alerta de uma burla ou de um contrato injusto.",
          quickCheck: [
            { objective: "O5", q: "Um agente de carbono pede a cada agricultor NGN 10,000 para aderir e promete o pagamento no próximo mês. O que é isto, muito provavelmente?", options: ["Um projeto normal registado", "Um subsídio do governo", "Uma burla ou uma oferta muito injusta", "Uma formação grátis"], answer: 2, why: "As taxas de adesão e as promessas grandes e rápidas são sinais de alerta clássicos das burlas de carbono." },
            { objective: "O5", q: "O que deve procurar num contrato de carbono antes de assinar?", options: ["Quanto recebe, quando, e que direitos sobre a terra ou as árvores entrega e por quanto tempo", "Só a cor do logótipo", "Se o agente é simpático", "Nada, se o projeto for sobre árvores"], answer: 0, why: "O pagamento, as datas e os direitos sobre a sua terra ou as suas árvores decidem se o negócio é justo." }
          ]
        },
        {
          title: "Juntar o risco climático ao seu plano de negócio",
          objectives: ["O6", "O1", "O2"],
          minutes: 5,
          goal: "Escrever um plano de resiliência climática de uma página para o seu negócio agrícola.",
          text: [
            "Quem empresta, os compradores e os programas perguntam cada vez mais como uma machamba vai enfrentar os choques climáticos. Uma secção curta sobre o clima no seu plano de negócio mostra que pensou nisso e ajuda-o a decidir para onde vai primeiro o seu próprio dinheiro.",
            "O seu plano de uma página tem seis partes: 1. os seus três maiores riscos climáticos, com a probabilidade e o custo (Lição 1); 2. dois ou três investimentos de adaptação, com o custo, o benefício e o retorno (Lição 2); 3. como vai pagar: poupanças, grupo, empréstimo ou programa, e as suas perguntas para quem empresta (Lição 3); 4. duas práticas que cortam custos e emissões (Lição 4); 5. as suas regras para qualquer oferta de carbono (Lição 5); 6. uma data de revisão depois de cada época.",
            "Acrescente uma linha de \"ano mau\" ao seu fluxo de caixa: que rendimento espera se o principal risco acontecer, e como vai ainda pagar os empréstimos, as propinas da escola e os insumos, por exemplo com poupanças, uma segunda atividade ou um seguro. Se usa seguro agrícola ou pecuário, verifique se a seguradora está licenciada (no Quénia, com a Insurance Regulatory Authority) e leia o que faz o seguro pagar.",
            "Pode pedir a um assistente de IA no telemóvel para transformar as suas notas numa tabela arrumada ou para lhe fazer perguntas sobre o que falta no seu plano, mas os números têm de vir dos seus próprios registos e preços locais. Não escreva números de identificação, números de conta nem PIN."
          ],
          steps: ["Copie a sua tabela de riscos da Lição 1: os três maiores riscos.", "Acrescente os seus dois ou três investimentos com custo calculado.", "Escreva como vai pagar e as suas perguntas para quem empresta.", "Acrescente duas práticas de mitigação que poupam dinheiro.", "Escreva as suas regras para ofertas de carbono.", "Acrescente uma linha de ano mau no fluxo de caixa e uma data de revisão."],
          words: [["Plano de negócio", "um plano curto e escrito do que a sua machamba faz, dos seus custos, rendimentos e objetivos."], ["Cenário de ano mau", "um plano para o que acontece ao rendimento e aos pagamentos se o principal risco acontecer."], ["Gatilho de pagamento", "o acontecimento, como pouca chuva medida numa estação, que faz um seguro pagar."]],
          slides: [
            { title: "Porque juntar o clima ao plano", bullets: ["Quem empresta e os compradores perguntam como vai enfrentar", "Mostra para onde vai primeiro o seu dinheiro"] },
            { title: "Seis partes, uma página", bullets: ["Riscos, investimentos e retorno", "Como vai pagar", "Práticas para poupar, regras para o carbono", "Data de revisão"] },
            { title: "Planeie um ano mau", bullets: ["Rendimento se o principal risco acontecer", "Como os empréstimos e as propinas são pagos na mesma", "Seguro: seguradora licenciada, gatilho claro"] },
            { title: "A IA arruma, não decide", bullets: ["Peça uma tabela ou o que falta", "Os números vêm dos seus registos", "Sem documentos, números de conta nem PIN"] }
          ],
          sources: [IRA, FAO_CSA],
          tryIt: "Tarefa final: escreva o seu plano de resiliência climática de uma página, com as seis partes e uma linha de ano mau no fluxo de caixa. Leia-o a um familiar, a um membro do grupo ou a um extensionista e peça-lhe uma pergunta a que ainda não respondeu.",
          youCanNow: "escrever um plano de resiliência climática de uma página para o seu negócio agrícola, que quem empresta, um comprador ou um programa consegue ler.",
          quickCheck: [
            { objective: "O6", q: "Que parte FALTA neste plano: riscos, investimentos com custo, como pagar, práticas de mitigação, regras para o carbono?", options: ["A cultura preferida do agricultor", "Uma lista de vizinhos", "O tempo de amanhã", "Uma data de revisão"], answer: 3, why: "Um plano precisa de uma data de revisão para ser atualizado depois de cada época." },
            { objective: "O6", q: "O que mostra uma linha de ano mau no seu fluxo de caixa?", options: ["Quanto vai ganhar no melhor ano", "Como vai ainda pagar os empréstimos e os custos se o principal risco acontecer", "O preço do adubo no ano passado", "Quantos trabalhadores conhece"], answer: 1, why: "Testa se o negócio sobrevive ao choque que classificou como mais provável e mais caro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Cortar custos, carbono e planear",
        questions: [
          { objective: "O4", q: "Um produtor de café planta árvores de sombra que também dão fruta e lenha. O que é isto?", options: ["Agrofloresta que poupa dinheiro e guarda carbono", "Queimar restos de culturas", "Uma burla de carbono", "Adubar demais"], answer: 0, why: "As árvores junto com as culturas guardam carbono e dão produtos que o agricultor teria de comprar." },
          { objective: "O4", q: "Qual NÃO é uma prática de mitigação que poupa dinheiro?", options: ["Pôr o adubo perto das raízes na altura certa", "Queimar os restos das culturas depois da colheita", "Usar um biodigestor para gás de cozinha", "Melhor alimentação para mais leite por vaca"], answer: 1, why: "Queimar os restos desperdiça nutrientes e liberta gases; as outras cortam custos e emissões." },
          { objective: "O5", q: "Como pode verificar se um projeto de carbono é verdadeiro?", options: ["Perguntar ao agente se é verdadeiro", "Contar as pessoas na reunião", "Procurá-lo pelo nome ou ID num registo como o Verra ou o Gold Standard", "Ver o carro do agente"], answer: 2, why: "Os projetos verdadeiros estão nos registos públicos mantidos pelos padrões de carbono." },
          { objective: "O5", q: "Um contrato de carbono impede-o de cortar ou vender as suas próprias árvores durante 30 anos. O que deve fazer?", options: ["Assinar; as árvores são dinheiro grátis", "Assinar agora e ler depois", "Pedir ao agente para ler as partes boas", "Levar o contrato, pedir conselho e só assinar se entender e aceitar essas condições"], answer: 3, why: "Limites longos sobre a sua terra e as suas árvores são sérios; leia tudo e peça primeiro conselho de confiança." },
          { objective: "O6", q: "Porque é que um plano de resiliência climática deve ter uma data de revisão?", options: ["Quem empresta gosta de datas", "Os riscos, os preços e os resultados mudam, por isso o plano é atualizado em cada época", "Torna a página mais comprida", "As revisões são obrigatórias por lei"], answer: 1, why: "Rever depois de cada época mantém o plano de acordo com o que realmente aconteceu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Agronegócio Resiliente ao Clima",
    questions: [
      { objective: "O1", q: "Uma avaliação do risco climático faz duas perguntas sobre cada perigo. Quais?", options: ["Qual é a probabilidade, e quanto custaria?", "Quem o causou, e quando começou?", "Que rádio falou dele, e a que horas?", "É uma boa notícia, e é justo?"], answer: 0, why: "A probabilidade e o impacto em dinheiro deixam-no ordenar os riscos." },
      { objective: "O1", q: "Onde pode encontrar perdas do passado para estimar o custo de um risco?", options: ["Só com um agente de carbono", "Num resultado da lotaria", "Nos registos da sua machamba e na memória dos agricultores mais velhos sobre os anos maus", "No preço de um telemóvel"], answer: 2, why: "Os registos e a memória local mostram quanto custaram de verdade os anos maus." },
      { objective: "O1", q: "O stress de calor reduz a postura de ovos no seu aviário na maioria dos anos. Como o classifica?", options: ["Probabilidade baixa, sem custo", "Não é um risco climático", "É só um problema de ração", "Probabilidade alta, com um custo em dinheiro pelos ovos perdidos"], answer: 3, why: "Acontece na maioria dos anos e custa ovos, por isso é provável e caro." },
      { objective: "O2", q: "O que é o retorno?", options: ["Os juros de um empréstimo", "O tempo até as poupanças ou ganhos de um investimento cobrirem o seu custo", "O preço da semente", "Um reembolso da loja"], answer: 1, why: "Retorno = custo ÷ benefício anual." },
      { objective: "O2", q: "O que conta como parte do custo de um tanque de água?", options: ["Compra, construção, mão de obra e manutenção", "Só o preço na loja", "Só o transporte", "Nada, se for uma oferta"], answer: 0, why: "O custo total inclui tudo o que é preciso para o construir e o manter a funcionar." },
      { objective: "O2", q: "Qual é um investimento de adaptação contra os períodos secos?", options: ["Vender a bomba de água", "Plantar mais tarde todos os anos sem razão", "Semente tolerante à seca ou de ciclo curto", "Queimar os restos das culturas"], answer: 2, why: "As variedades tolerantes à seca e de ciclo curto reduzem as perdas nos períodos secos." },
      { objective: "O2", q: "Dois investimentos têm o mesmo benefício. Um custa menos e é fácil de manter. Por qual costuma começar?", options: ["O caro", "Nenhum", "Os dois a crédito ao mesmo tempo", "O mais barato, que consegue manter"], answer: 3, why: "Um custo mais baixo e uma manutenção fácil dão um retorno mais rápido e mais seguro." },
      { objective: "O3", q: "Como é que os grandes fundos climáticos costumam chegar aos agricultores?", options: ["Através de bancos, governos e agências, como empréstimos e programas", "Enviando dinheiro para o telemóvel de cada agricultor", "Através de agentes de carbono que cobram uma taxa", "Nunca chegam aos agricultores"], answer: 0, why: "Fundos como o Fundo Verde para o Clima trabalham através de governos, bancos e agências acreditadas." },
      { objective: "O3", q: "Antes de pedir um empréstimo verde, qual é a pergunta principal?", options: ["O funcionário do empréstimo é simpático?", "Qual é o custo total, e os pagamentos coincidem com a minha colheita?", "Tem \"verde\" no nome?", "O escritório fica perto do mercado?"], answer: 1, why: "O custo total e as datas de pagamento decidem se consegue pagar." },
      { objective: "O3", q: "Na Nigéria, onde pode verificar se quem empresta está licenciado?", options: ["Num grupo de WhatsApp", "Com o agente de quem empresta", "Com o Banco Central da Nigéria", "Num cartaz no mercado"], answer: 2, why: "O Banco Central da Nigéria regula e publica a lista das instituições licenciadas." },
      { objective: "O3", q: "Alguém oferece-se para \"acelerar\" o seu subsídio climático por uma taxa paga para o número de dinheiro móvel dele. O que é isto?", options: ["Um sinal de alerta de burla", "Um passo normal", "Uma regra do governo", "Uma taxa da cooperativa"], answer: 0, why: "Os programas verdadeiros não lhe pedem para pagar a agentes para acelerar subsídios." },
      { objective: "O4", q: "O que é a mitigação?", options: ["Mudar para uma nova machamba", "Um seguro contra a seca", "Vender as colheitas cedo", "Cortar as emissões de gases com efeito de estufa ou guardar mais carbono"], answer: 3, why: "A mitigação reduz as emissões ou guarda carbono no solo e nas árvores." },
      { objective: "O4", q: "O que é o bio-chorume?", options: ["Um pesticida", "O líquido que sobra depois de fazer biogás, usado como adubo", "Um tipo de combustível vendido nas lojas", "Uma doença do gado"], answer: 1, why: "O bio-chorume de um biodigestor pode alimentar o solo." },
      { objective: "O4", q: "Que prática poupa dinheiro E corta emissões numa machamba de gado leiteiro?", options: ["Melhor alimentação, para cada vaca dar mais leite", "Queimar o estrume", "Comprar mais vacas do que a ração permite", "Deixar o pasto sem cobertura"], answer: 0, why: "Mais leite por animal com melhor alimentação quer dizer custos e emissões mais baixos por litro." },
      { objective: "O5", q: "O que é um crédito de carbono?", options: ["Um empréstimo para semente", "Um desconto no adubo", "Um certificado por uma tonelada de CO2 mantida fora do ar ou guardada", "Um bónus de dinheiro móvel"], answer: 2, why: "Cada crédito representa uma tonelada de dióxido de carbono evitada ou guardada." },
      { objective: "O5", q: "Qual é um sinal de alerta numa oferta de carbono?", options: ["O projeto tem um ID no registo que pode consultar", "Pode levar o contrato para casa para ler", "Os pagamentos e as partes estão escritos com clareza", "Tem de pagar uma taxa para aderir"], answer: 3, why: "As taxas de adesão são um sinal clássico de burla." },
      { objective: "O5", q: "No Quénia, de que precisam os projetos de carbono em terra comunitária?", options: ["De nada", "De um acordo de desenvolvimento comunitário sobre como os benefícios são divididos", "Só de uma promessa de boca", "De um empréstimo do agente"], answer: 1, why: "O Regulamento dos Mercados de Carbono de 2024 do Quénia exige acordos de desenvolvimento comunitário para esses projetos." },
      { objective: "O6", q: "O que entra num plano de resiliência climática de uma página?", options: ["Maiores riscos, investimentos com custo, como pagar, práticas para poupar dinheiro, regras para o carbono e uma data de revisão", "Só o nome da machamba", "O seu PIN do dinheiro móvel", "Uma lista de todos os dias de chuva do ano passado"], answer: 0, why: "Essas seis partes fazem um plano completo e útil." },
      { objective: "O6", q: "Como pode um assistente de IA no telemóvel ajudar com o seu plano?", options: ["Pode inventar os seus preços", "Deve guardar o PIN do seu banco", "Pode arrumar as suas notas numa tabela e mostrar o que falta", "Assina por você os formulários do empréstimo"], answer: 2, why: "A IA pode organizar e fazer perguntas, mas os números vêm dos seus registos." },
      { objective: "O6", q: "O seu plano mostra que não consegue pagar um empréstimo se vier um período seco. O que faz?", options: ["Ignora", "Esconde de quem empresta", "Pede mais emprestado", "Muda o plano: um empréstimo menor, poupanças, uma segunda atividade ou um seguro"], answer: 3, why: "A linha de ano mau existe para mudar o plano antes do choque, não depois." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e tente outra vez.",
    criteria: [
      { name: "Riscos climáticos em dinheiro", objective: "O1", notYet: "Os riscos estão escritos sem probabilidade nem custo, ou são menos de três.", meets: "Três riscos, cada um com a probabilidade e um custo estimado na moeda local.", exceeds: "Também mostra os efeitos no negócio (empréstimos, compradores, mão de obra) e de onde vieram as estimativas." },
      { name: "Investimentos com custo", objective: "O2", notYet: "Os investimentos têm nome mas não têm custo.", meets: "Dois ou três investimentos com custo total, benefício anual médio e retorno.", exceeds: "Usa orçamentos locais reais e explica a escolha do investimento por onde começar." },
      { name: "Financiamento e verificação de quem empresta", objective: "O3", notYet: "Não há plano para pagar, ou há quem empreste sem nenhuma verificação.", meets: "Diz como vai ser pago e faz a lista de perguntas sobre custo total, datas de pagamento, condições e licença.", exceeds: "Comparou duas opções de financiamento e verificou quem empresta na lista do regulador." },
      { name: "Práticas que poupam dinheiro", objective: "O4", notYet: "Nenhuma prática de mitigação, ou uma sem a poupança mostrada.", meets: "Duas práticas que cortam emissões, cada uma com o insumo ou o dinheiro poupado.", exceeds: "Inclui o retorno de qualquer prática que precise de gasto, como um biodigestor." },
      { name: "Regras para ofertas de carbono", objective: "O5", notYet: "Não há regras, ou assinaria ou pagaria no mesmo dia.", meets: "Pelo menos quatro verificações: registo, pagamento e parte, direitos sobre a terra e as árvores, sem taxas, conselho antes de assinar.", exceeds: "Indica as regras nacionais ou o serviço onde verificar, como o Regulamento dos Mercados de Carbono do Quénia." },
      { name: "Plano completo de uma página", objective: "O6", notYet: "Faltam partes ou não há data de revisão.", meets: "As seis partes, uma linha de ano mau no fluxo de caixa e uma data de revisão numa página.", exceeds: "Foi lido por um membro do grupo, um extensionista ou um conselheiro e atualizado com a pergunta dele." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem pelo menos um investimento de adaptação com custo calculado na época seguinte (inquérito de seguimento)",
      "Alunos ou grupos que pedem financiamento com um plano escrito e perguntas para quem empresta",
      "Burlas de carbono ou de financiamento evitadas, segundo os relatos, e menos contratos assinados sem conselho (relatórios da extensão ou da cooperativa)",
      "Perda de rendimento na próxima época má comparada com a época má anterior (dita pelos próprios, por atividade)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, caneta e uma calculadora simples (ou a calculadora do telemóvel)",
      "Os registos da sua machamba, ou uma machamba de exemplo da tarefa final",
      "Preços locais de semente, tanques, insumos e combustível (dos vendedores de insumos ou da cooperativa)",
      "Um telemóvel para procurar quem empresta e os registos de carbono (opcional)",
      "Cerca de 90 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Funciona melhor com um grupo de agricultores, uma cooperativa ou uma Escola de Negócios para Agricultores: faça as Lições 1 e 2 com registos reais de dois ou três membros.",
      "Junte orçamentos locais reais antes da sessão; nunca apresente os preços de exemplo como factos.",
      "Convide um funcionário de crédito de um banco, banco de microfinanças ou SACCO licenciado para responder às perguntas da Lição 3, e verifique a licença dele à frente do grupo.",
      "Para a Lição 5, traga um contrato ou uma oferta de carbono de exemplo (sem nomes) e marquem juntos os sinais de alerta. Não recomende nenhum projeto de carbono.",
      "Não dê conselhos de investimento; lembre aos alunos que leiam os contratos do princípio ao fim e falem com um conselheiro de confiança.",
      "Avalie o plano final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
