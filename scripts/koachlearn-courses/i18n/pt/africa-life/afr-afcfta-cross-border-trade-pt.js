"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-afcfta-cross-border-trade.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const AFCFTA = { name: "Secretariado da AfCFTA (ZCLCA): sobre a AfCFTA (55 países da UA, comércio desde 1 de janeiro de 2021, Secretariado em Acra)", url: "https://au-afcfta.org/about/" };
const GTI = { name: "Secretariado da AfCFTA: Iniciativa de Comércio Guiado (lançada a 7 de outubro de 2022)", url: "https://au-afcfta.org/operational-instruments/guided-trade-initiative/" };
const ROO = { name: "Secretariado da AfCFTA: Regras de Origem (Anexo 2 e Manual das Regras de Origem)", url: "https://au-afcfta.org/operational-instruments/rules-of-origin/" };
const NTB = { name: "Mecanismo da AfCFTA para comunicar, acompanhar e eliminar barreiras não tarifárias", url: "https://www.tradebarriers.africa/" };
const PAPSS = { name: "Sistema Pan-Africano de Pagamentos e Liquidação (PAPSS)", url: "https://papss.com/" };
const ETLS = { name: "Esquema de Liberalização do Comércio da CEDEAO (ETLS), Comissão da CEDEAO", url: "https://etls.ecowas.int/" };
const COMESA = { name: "COMESA: Comércio e Alfândegas (incluindo o Regime Comercial Simplificado para pequenos comerciantes)", url: "https://www.comesa.int/trade-customs-division-2/" };

module.exports = {
  id: "afr-afcfta-cross-border-trade-pt",
  lang: "pt",
  translationOf: "afr-afcfta-cross-border-trade",
  category: "Africa: Life and Work",
  name: "Vender do Outro Lado da Fronteira: Pequenos Comerciantes e a AfCFTA",
  skills: "Explicar a AfCFTA e os esquemas regionais de comércio, Preparar os documentos para passar uma fronteira oficial, Calcular o custo de um lote em duas moedas, Receber pagamentos de outro país com segurança, Denunciar cobranças não oficiais e barreiras ao comércio",
  outcome: "planear uma venda noutro país que seja legal, segura e com lucro: verificar as regras para os seus produtos, preparar os documentos certos, calcular o custo total e o preço nas duas moedas, escolher uma forma segura de receber o dinheiro e saber o que fazer se alguém lhe pedir um pagamento não oficial.",
  about: [
    "Este curso é para pequenos comerciantes, mulheres do mercado, artesãos e pequenos fabricantes de toda a África que vendem, ou querem vender, para um país vizinho: manteiga de karité de Tamale para Ouagadougou, tecido de Lagos para Cotonou, sapatos de Nairobi para Kampala, ou cosméticos de Dakar para Bamako.",
    "O Capítulo 1 explica a Zona de Comércio Livre Continental Africana (AfCFTA, a sigla em inglês) e os esquemas regionais que já ajudam os pequenos comerciantes, e os documentos de que precisa numa fronteira oficial. O Capítulo 2 trata do dinheiro: o custo total de um lote, como receber o pagamento com segurança e o que fazer com cobranças não oficiais e atrasos.",
    "Os direitos aduaneiros, as taxas, os formulários e os limites mudam de país para país e com o tempo. Este curso não dá valores de direitos nem de taxas. Diz-lhe a que serviço perguntar, e você verifica antes de viajar. Todos os valores em dinheiro são apenas exemplos. Cada lição dura cerca de cinco minutos e termina com uma tarefa. Há perguntas rápidas depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de comércio transfronteiriço de uma página para um produto e uma rota (a sua, ou um exemplo como manteiga de karité de Tamale, no Gana, para Ouagadougou, no Burkina Faso): o produto e a fronteira oficial, as regras que verificou e onde, a lista dos documentos que vai levar, o custo total e o seu preço de venda nas duas moedas, como vai receber o pagamento e como se vai proteger de burlas, e o que vai fazer e a quem vai denunciar se alguém lhe pedir um pagamento não oficial.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos comerciantes, mulheres do mercado, artesãos e pequenos fabricantes de cidades e zonas de fronteira de toda a África (Quénia, Nigéria, Gana, Senegal, Costa do Marfim, Burkina Faso, Camarões e outros) que vendem ou querem vender para um país vizinho.",
    startingPoint: "Muitos já fazem comércio entre países, muitas vezes de forma informal, levando produtos pelas fronteiras ou usando transportadores. Poucos conhecem a AfCFTA ou o seu esquema regional, que documentos dão direitos aduaneiros mais baixos, como calcular o custo de um lote em duas moedas, ou onde denunciar cobranças não oficiais.",
    gap: "Os comerciantes informais muitas vezes pagam cobranças não oficiais, perdem produtos na fronteira, vendem com prejuízo depois dos custos de câmbio e de transporte, e caem em burlas de pagamento. Conhecer as regras, levar os documentos certos, calcular bem os custos e denunciar as barreiras deixa-os fazer comércio legal, ficar com mais lucro e crescer.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo de comércio é explicado",
      "Aparelhos: um telefone Android simples com dados caros; uma calculadora e um caderno",
      "As regras, os direitos, as taxas e os limites mudam de país para país e com o tempo: os alunos verificam com a alfândega e os serviços de comércio; o curso não dá valores de direitos nem de taxas",
      "Segurança do dinheiro: nenhum PIN nem palavra-passe partilhados; nenhum conselho de investimento",
      "O curso também está traduzido em francês e árabe, por isso os exemplos incluem comerciantes de língua francesa e do Norte de África"
    ],
    prerequisites: "Saber ler um pouco e usar um telefone. Os cursos \"Usar o Dinheiro Móvel com Segurança\" e \"Registar e Gerir um Pequeno Negócio em África\" ajudam, mas não são obrigatórios."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o seu produto e o país para onde quer vender", action: "explicar o que a AfCFTA e o seu esquema regional de comércio podem fazer por um pequeno comerciante e dizer os serviços onde verificar as regras atuais", standard: "dizendo pelo menos dois serviços ou sites oficiais" },
    { id: "O2", condition: "Antes de levar produtos por uma fronteira oficial", action: "fazer a lista dos documentos e passos de que precisa para os seus produtos, como recibos, uma fatura, uma declaração aduaneira e um certificado de origem", standard: "com cada documento da lista confirmado com a alfândega ou um balcão de comércio" },
    { id: "O3", condition: "Com os custos de um lote e uma taxa de câmbio", action: "calcular o custo total por unidade e um preço de venda nas duas moedas", standard: "incluindo todos os custos e um lucro, com as contas certas" },
    { id: "O4", condition: "Quando um comprador de outro país lhe paga", action: "escolher uma forma segura de receber o dinheiro e reconhecer os sinais de alerta de uma burla de pagamento", standard: "sem nunca partilhar um PIN nem enviar produtos antes de confirmar o dinheiro" },
    { id: "O5", condition: "Quando alguém na fronteira ou perto dela pede um pagamento não oficial ou retém os seus produtos", action: "descrever os passos seguros a dar e denunciar o problema como uma barreira não tarifária", standard: "dizendo o canal oficial de denúncia e os factos a anotar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: As regras e os documentos",
      lessons: [
        {
          title: "O que a AfCFTA quer dizer para um pequeno comerciante",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar com as suas palavras o que é a AfCFTA e como pode ajudar o seu negócio.",
          text: [
            "A Zona de Comércio Livre Continental Africana (AfCFTA, a sigla em inglês) é um acordo entre os 55 países da União Africana para fazer um grande mercado de cerca de 1,3 mil milhões de pessoas. O comércio dentro dela começou a 1 de janeiro de 2021. O seu Secretariado fica em Acra, no Gana.",
            "A ideia principal: com o tempo, os países que aderiram baixam ou tiram os direitos de importação sobre produtos feitos noutros países membros, e trabalham para tirar outras barreiras, como grandes atrasos e documentos a mais. Para ter o direito mais baixo, os seus produtos têm de \"vir de\" um país membro segundo as regras de origem. Produtos só comprados fora de África e revendidos não contam.",
            "Nem todos os países a aplicam da mesma forma nem à mesma velocidade, e nem todos os produtos estão já incluídos. A Iniciativa de Comércio Guiado, lançada a 7 de outubro de 2022, começou o comércio real com as regras da AfCFTA num grupo de países. Por isso, antes de contar com um direito mais baixo, verifique com a sua autoridade aduaneira, o ministério do comércio ou a câmara de comércio, e o site da AfCFTA.",
            "Mesmo onde a AfCFTA ainda não funciona para o seu produto, os esquemas regionais já podem ajudar. É essa a próxima lição."
          ],
          words: [["AfCFTA", "a Zona de Comércio Livre Continental Africana: um acordo para fazer de África um grande mercado com direitos mais baixos e menos barreiras."], ["Direito de importação (tarifa)", "um imposto que um país cobra sobre os produtos que entram vindos de outro país."], ["Regras de origem", "as regras que decidem de que país um produto \"vem\", para poder ter o direito mais baixo."]],
          slides: [
            { title: "O que é a AfCFTA", bullets: ["55 países da União Africana, um grande mercado", "Cerca de 1,3 mil milhões de pessoas", "Comércio desde 1 de janeiro de 2021; Secretariado em Acra"] },
            { title: "O que pode fazer por você", bullets: ["Direito de importação mais baixo ou zero para produtos de países membros", "Menos atrasos e documentos a mais, com o tempo", "Mercados maiores ao lado"] },
            { title: "O senão", bullets: ["Os produtos têm de cumprir as regras de origem", "Os países aplicam-na a velocidades diferentes", "Nem todos os produtos estão já incluídos"] },
            { title: "Verifique antes de contar com ela", bullets: ["A sua autoridade aduaneira", "O ministério do comércio ou a câmara de comércio", "au-afcfta.org"] }
          ],
          sources: [AFCFTA, GTI, ROO],
          tryIt: "Escreva um produto que vende ou poderia vender, e um país vizinho para onde o poderia vender. Depois escreva dois lugares onde vai verificar se a AfCFTA baixa o direito sobre esse produto.",
          youCanNow: "dizer o que é a AfCFTA, como pode ajudar um pequeno comerciante e onde verificar se se aplica aos seus produtos.",
          quickCheck: [
            { objective: "O1", q: "Qual é o principal objetivo da AfCFTA para os comerciantes?", options: ["Fixar os preços de todos os produtos em África", "Baixar os direitos e as barreiras sobre produtos feitos em países membros", "Criar uma só moeda para toda a África", "Acabar com todos os controlos na fronteira"], answer: 1, why: "A AfCFTA quer baixar os direitos e as barreiras sobre produtos que vêm de países membros; não fixa preços, não cria uma moeda única nem acaba com os controlos." },
            { objective: "O1", q: "Uma comerciante compra capas de telefone feitas fora de África e quer revendê-las no país vizinho com a AfCFTA. O que é verdade?", options: ["Têm sempre direito zero", "A AfCFTA só cobre comida", "Provavelmente não contam, porque os produtos não foram feitos num país membro", "Não precisa de nenhum documento"], answer: 2, why: "Segundo as regras de origem, produtos só comprados fora de África e revendidos não vêm de um país membro." }
          ]
        },
        {
          title: "Esquemas regionais que já ajudam os pequenos comerciantes",
          objectives: ["O1"],
          minutes: 5,
          goal: "Encontrar o esquema regional de comércio para a sua rota e o balcão ou serviço que o explica.",
          text: [
            "Antes da AfCFTA, as comunidades económicas regionais de África já tornavam o comércio mais fácil. Na África Ocidental, o Esquema de Liberalização do Comércio da CEDEAO (ETLS, em inglês ECOWAS) deixa produtos aprovados de países da CEDEAO circular entre os estados membros com direito mais baixo ou sem direito. O Senegal, o Mali, a Costa do Marfim, o Gana e a Nigéria são todos membros da CEDEAO.",
            "Na África Oriental e Austral, a Comunidade da África Oriental (EAC) e o COMESA têm Regimes Comerciais Simplificados para pequenos comerciantes. Deixam passar pequenas remessas de produtos da lista com documentos mais simples, como um certificado de origem simplificado. Alguns postos de fronteira têm balcões de informação comercial onde os funcionários explicam as regras aos pequenos comerciantes, de graça.",
            "Os limites de valor, a lista de produtos e os formulários são definidos por cada esquema e podem mudar. Pergunte à alfândega da sua fronteira, ao balcão de informação comercial ou à sua associação de comerciantes transfronteiriços. Anote o que lhe disserem, com a data e o nome do funcionário.",
            "A África Central (por exemplo os Camarões) e o Norte de África (por exemplo Marrocos, o Egito e a Tunísia) também têm os seus próprios acordos regionais. Pergunte à sua autoridade aduaneira quais se aplicam à sua rota."
          ],
          steps: ["Escreva a sua rota: de que país, por que fronteira, para que país.", "Encontre a comunidade regional a que os dois países pertencem (por exemplo CEDEAO, EAC ou COMESA).", "Pergunte à alfândega, ao balcão de comércio ou à associação de comerciantes que esquema os seus produtos podem usar.", "Pergunte: que produtos contam, que limite de valor se aplica, e que formulário ou certificado precisa.", "Anote as respostas com a data e o nome do funcionário."],
          words: [["Comunidade económica regional", "um grupo de países vizinhos que trabalham juntos no comércio, por exemplo a CEDEAO, a EAC ou o COMESA."], ["Regime Comercial Simplificado", "um acordo da EAC ou do COMESA que deixa os pequenos comerciantes passar pequenas cargas de produtos da lista com documentos mais simples."], ["Remessa", "uma carga ou lote de produtos que você envia ou leva."]],
          slides: [
            { title: "Os esquemas regionais já ajudam", bullets: ["África Ocidental: Esquema de Liberalização do Comércio da CEDEAO (ETLS)", "África Oriental e Austral: Regimes Simplificados da EAC e do COMESA", "África Central e do Norte: os seus próprios acordos"] },
            { title: "Regras simples para pequenos comerciantes", bullets: ["Pequenas cargas de produtos da lista", "Documentos mais simples, como um certificado de origem simplificado", "Balcões de informação comercial em alguns postos de fronteira"] },
            { title: "Pergunte e anote", bullets: ["Que produtos contam? Que limite de valor?", "Que formulário ou certificado?", "Anote a data e o nome do funcionário"] }
          ],
          sources: [ETLS, COMESA],
          tryIt: "Para a sua rota da Lição 1, escreva a comunidade regional a que os dois países pertencem e três perguntas que vai fazer na alfândega ou no balcão de comércio.",
          youCanNow: "encontrar o esquema regional para a sua rota e fazer as perguntas certas ao serviço certo.",
          quickCheck: [
            { objective: "O1", q: "Que esquema se aplica mais provavelmente a uma comerciante que leva manteiga de karité do Gana para o Burkina Faso?", options: ["O Regime Comercial Simplificado do COMESA", "A União Aduaneira da EAC", "Nenhum esquema", "O Esquema de Liberalização do Comércio da CEDEAO"], answer: 3, why: "O Gana e o Burkina Faso estão ambos na região da CEDEAO, na África Ocidental, por isso é sobre o ETLS que se deve perguntar." },
            { objective: "O1", q: "Quer saber o limite de valor para um certificado simplificado na sua rota. O que faz?", options: ["Pergunta à alfândega ou ao balcão de comércio da fronteira e anota a resposta", "Adivinha, porque é igual em todo o lado", "Pergunta ao motorista do autocarro", "Usa o valor de uma fronteira de um amigo no ano passado"], answer: 0, why: "Os limites mudam de esquema para esquema e com o tempo, por isso deve perguntar à alfândega ou ao balcão de comércio." }
          ]
        },
        {
          title: "Os documentos que leva numa fronteira oficial",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fazer a lista dos documentos e passos para levar os seus produtos por uma fronteira oficial.",
          text: [
            "Usar uma fronteira oficial protege você. Os seus produtos ficam registados, pode pedir direitos mais baixos com os esquemas e tem provas se alguma coisa correr mal. Produtos passados às escondidas por caminhos não oficiais podem ser apreendidos, e você não tem nenhuma proteção.",
            "Documentos comuns: o seu bilhete de identidade ou passaporte; um recibo ou fatura que mostra o que comprou ou fez e o seu valor; uma lista dos seus produtos (lista de embalagem); uma declaração aduaneira, que o funcionário ou um despachante ajuda a preencher; e um certificado de origem quando quer um direito mais baixo. Comida, plantas, animais, medicamentos e cosméticos podem também precisar de um certificado sanitário, fitossanitário (das plantas) ou de aprovação do produto.",
            "Alguns produtos são restritos ou proibidos. Pergunte antes de comprar o stock. Um despachante pode ajudar com cargas maiores, mas peça sempre um recibo por cada pagamento oficial, e guarde cópias de todos os documentos no telefone e em papel.",
            "Exemplo: a Awa vende sabão feito à mão de Dakar para Bamako. Pergunta à alfândega que documentos precisa, obtém a fatura e um certificado de origem, e guarda uma foto de cada documento. Na fronteira paga só o que está no recibo oficial."
          ],
          steps: ["Pergunte à alfândega que documentos os seus produtos precisam e se algum é restrito.", "Obtenha recibos ou faturas dos seus produtos e faça uma lista de embalagem.", "Obtenha um certificado de origem se quer um direito mais baixo com um esquema.", "Pergunte por certificados sanitários, fitossanitários ou de produto para comida, plantas, animais e cosméticos.", "Use a fronteira oficial, preencha a declaração aduaneira e guarde um recibo por cada pagamento.", "Guarde cópias de todos os documentos em papel e em fotos no telefone."],
          words: [["Declaração aduaneira", "um formulário que diz à alfândega que produtos leva e o seu valor."], ["Certificado de origem", "um documento que mostra de que país vêm os seus produtos, para poder ter um direito mais baixo."], ["Despachante", "uma pessoa ou empresa com licença que ajuda os comerciantes a tratar dos documentos da alfândega, a troco de pagamento."], ["Certificado fitossanitário", "um certificado de saúde das plantas para plantas, sementes, cereais, frutas e legumes."]],
          slides: [
            { title: "Porquê usar a fronteira oficial", bullets: ["Produtos registados; pode pedir direitos mais baixos", "Provas se alguma coisa correr mal", "Produtos passados às escondidas podem ser apreendidos"] },
            { title: "Documentos comuns", bullets: ["Bilhete de identidade ou passaporte; recibo ou fatura", "Lista de embalagem; declaração aduaneira", "Certificado de origem para um direito mais baixo"] },
            { title: "Documentos a mais para alguns produtos", bullets: ["Comida, plantas, animais: certificados sanitários ou fitossanitários", "Cosméticos e medicamentos: aprovação do produto", "Alguns produtos são restritos: pergunte antes de comprar"] },
            { title: "Proteja-se", bullets: ["Um recibo por cada pagamento oficial", "Cópias em papel e fotos no telefone", "Um despachante para cargas maiores"] }
          ],
          sources: [ROO, ETLS],
          tryIt: "Faça uma lista de documentos para o seu produto e a sua rota: cada documento que acha que precisa, com um quadrado para marcar depois de a alfândega ou o balcão de comércio o confirmar.",
          youCanNow: "fazer a lista dos documentos e passos para levar os seus produtos por uma fronteira oficial, e guardar prova de cada pagamento.",
          quickCheck: [
            { objective: "O2", q: "Que documento ajuda a pedir um direito mais baixo com um esquema de comércio?", options: ["Um bilhete de autocarro", "Um certificado de origem", "Um recibo do telefone", "Um certificado escolar"], answer: 1, why: "Um certificado de origem mostra que os produtos vêm de um país membro, e é disso que depende o direito mais baixo." },
            { objective: "O2", q: "Paga uma taxa na alfândega. O que deve receber?", options: ["Nada; as taxas são sempre informais", "Um aperto de mão", "Um recibo oficial, que guarda", "Uma promessa de se verem na próxima vez"], answer: 2, why: "Um recibo oficial é a prova de uma taxa verdadeira e protege você se alguma coisa correr mal." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: As regras e os documentos",
        questions: [
          { objective: "O1", q: "Onde deve verificar se a AfCFTA baixa o direito sobre o seu produto?", options: ["Numa publicação nas redes sociais", "Com o primo do comprador", "Na sua autoridade aduaneira e no site da AfCFTA", "Com qualquer comerciante do mercado"], answer: 2, why: "A alfândega e o Secretariado da AfCFTA dão a resposta oficial e atual." },
          { objective: "O1", q: "Uma comerciante leva sapatos de Nairobi para Kampala. Sobre que esquema simplificado deve perguntar?", options: ["O Esquema de Liberalização do Comércio da CEDEAO", "Não existe nenhum na África Oriental", "Um esquema europeu", "O Regime Comercial Simplificado da EAC ou do COMESA"], answer: 3, why: "O Quénia e o Uganda estão na África Oriental, onde a EAC e o COMESA têm regimes simplificados para pequenos comerciantes." },
          { objective: "O2", q: "Porque é que uma fronteira oficial é melhor do que um caminho no mato?", options: ["Os seus produtos ficam registados e pode pedir direitos mais baixos e proteção", "É sempre mais rápida", "Ninguém controla nada", "É sempre de graça"], answer: 0, why: "As fronteiras oficiais registam os produtos, deixam usar os esquemas de comércio e dão provas e proteção." },
          { objective: "O2", q: "O Kofi vai levar peixe seco para o Togo. Que documento a mais pode precisar?", options: ["Uma carta de condução para um camião que não conduz", "Um certificado sanitário para comida", "Uma caderneta escolar", "Nada a mais para comida"], answer: 1, why: "Produtos alimentares, animais e de plantas muitas vezes precisam de um certificado sanitário ou fitossanitário; ele deve perguntar à alfândega." },
          { objective: "O2", q: "Qual é a melhor forma de guardar os seus documentos?", options: ["Só na cabeça", "Dá-los ao transportador", "Deitá-los fora depois da fronteira", "Em papel e em fotos no telefone"], answer: 3, why: "Guardar as duas cópias quer dizer que ainda tem provas se uma se perder." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dinheiro, pagamento e problemas na fronteira",
      lessons: [
        {
          title: "Calcular o custo de um lote em duas moedas",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular o custo total por unidade e um preço de venda nas duas moedas.",
          text: [
            "Muitos comerciantes perdem dinheiro do outro lado da fronteira porque só contam o custo dos produtos. Conte tudo: os produtos, a embalagem, o transporte até à fronteira e depois dela, a carga, os direitos e taxas oficiais (confirmados com a alfândega), o despachante, o armazenamento, o seu telefone e dados, a sua comida e dormida na viagem, e um pouco a mais para perdas.",
            "Some todos os custos e divida pelo número de unidades que consegue mesmo vender. É o seu custo por unidade. Some o seu lucro para ter um preço de venda. Depois passe-o para a moeda do comprador com a taxa de câmbio de hoje, e veja o preço de produtos parecidos nesse mercado.",
            "Exemplo (os valores são só exemplos): a Ama compra e embala 100 potes de manteiga de karité em Tamale por GHS 2.000 ao todo. Transporte, carga e dormida custam GHS 600. Taxas oficiais confirmadas na alfândega: GHS 200. Total GHS 2.800, ou seja GHS 28 por pote. Ela soma GHS 7 de lucro: GHS 35. Se a taxa do dia fosse 1 GHS = 40 XOF, seriam 1.400 XOF por pote. Ela confirma que as lojas de Ouagadougou vendem potes parecidos por mais ou menos esse preço.",
            "As taxas de câmbio mudam todos os dias. Veja a taxa no dia em que vende e no dia em que troca o dinheiro, e combine com o comprador em que moeda está o preço."
          ],
          steps: ["Faça a lista de todos os custos do lote, desde a compra até à venda.", "Some-os para ter o custo total.", "Divida pelo número de unidades que consegue mesmo vender: custo por unidade.", "Some o seu lucro: preço de venda na sua moeda.", "Passe-o para a moeda do comprador com a taxa de hoje e compare com o preço do mercado de lá."],
          words: [["Taxa de câmbio", "quanto recebe de uma moeda por uma unidade de outra, por exemplo quantos XOF por 1 GHS."], ["Custo por unidade", "o custo total de um lote dividido pelo número de unidades que consegue vender."], ["Custo de chegada", "o custo total dos produtos quando chegam ao mercado do comprador, incluindo transporte e direitos."]],
          slides: [
            { title: "Conte todos os custos", bullets: ["Produtos, embalagem, transporte, carga", "Direitos e taxas oficiais, despachante, armazenamento", "Telefone, comida, dormida e um pouco para perdas"] },
            { title: "Do custo ao preço", bullets: ["Custo total / unidades que consegue vender = custo por unidade", "Custo por unidade + lucro = preço de venda", "Depois passe-o para a moeda do comprador"] },
            { title: "Exemplo (os valores são só exemplos)", bullets: ["100 potes: GHS 2.800 ao todo = GHS 28 cada", "Some GHS 7 de lucro = GHS 35", "A 1 GHS = 40 XOF: 1.400 XOF por pote"] },
            { title: "Atenção à taxa", bullets: ["As taxas mudam todos os dias", "Veja no dia em que vende e troca dinheiro", "Combine com o comprador a moeda"] }
          ],
          tryIt: "Calcule o custo de um lote do seu produto para a sua rota: faça a lista de todos os custos, encontre o custo por unidade, some o seu lucro e escreva o preço nas duas moedas com a taxa de hoje.",
          youCanNow: "calcular o custo total por unidade de um lote para outro país e um preço de venda nas duas moedas.",
          quickCheck: [
            { objective: "O3", q: "Um lote de 50 sacos custa NGN 250.000 ao todo, com transporte e taxas. Qual é o custo por saco?", options: ["NGN 500", "NGN 50.000", "NGN 2.500", "NGN 5.000"], answer: 3, why: "250.000 a dividir por 50 sacos dá 5.000 por saco." },
            { objective: "O3", q: "Que custo os comerciantes mais esquecem?", options: ["A sua própria dormida, comida e perdas na viagem", "O preço dos produtos", "O preço de venda", "O número de unidades"], answer: 0, why: "Os custos da viagem, como dormida, comida e perdas, são fáceis de esquecer e comem o lucro." }
          ]
        },
        {
          title: "Receber pagamentos de outro país com segurança",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escolher uma forma segura de receber o pagamento de um comprador de outro país e reconhecer uma burla de pagamento.",
          text: [
            "Dinheiro vivo na fronteira é arriscado: pode ser roubado, e trocar dinheiro na rua pode dar-lhe uma taxa má ou notas falsas. Formas mais seguras são uma transferência bancária, um serviço de dinheiro móvel que envia para outro país na sua rota, e sistemas de pagamento como o PAPSS (Sistema Pan-Africano de Pagamentos e Liquidação), que deixa quem paga num país africano pagar na moeda local e quem recebe receber na moeda local, através dos bancos e prestadores de pagamento que aderiram. Pergunte ao seu banco ou ao seu serviço de dinheiro móvel o que funciona na sua rota e quanto custa.",
            "Com um comprador novo, peça um sinal antes de enviar, ou o pagamento todo antes de entregar os produtos. Confirme que o dinheiro chegou mesmo à sua conta vendo você mesmo o saldo, e não confiando numa mensagem que o comprador lhe envia.",
            "Sinais de alerta de burla: um comprador que envia uma mensagem ou captura de ecrã falsa a dizer \"pagamento recebido\"; alguém que diz que enviou dinheiro a mais por engano e pede para devolver a diferença; qualquer pessoa que pede o seu PIN, palavra-passe ou um código enviado para o seu telefone; e um comprador que o apressa a entregar os produtos antes de verificar. Um banco ou serviço de dinheiro móvel verdadeiro nunca pede o seu PIN."
          ],
          steps: ["Combine por escrito o preço, a moeda e a forma de pagamento.", "Peça a um comprador novo um sinal ou o pagamento todo primeiro.", "Veja você mesmo o saldo para confirmar que o dinheiro chegou.", "Só depois entregue os produtos e dê um recibo.", "Nunca partilhe o seu PIN, palavra-passe ou um código enviado para o seu telefone."],
          words: [["PAPSS", "o Sistema Pan-Africano de Pagamentos e Liquidação: deixa fazer pagamentos entre países africanos em moedas locais, através dos bancos e prestadores de pagamento que aderiram."], ["Sinal", "parte do preço paga antes de enviar os produtos."], ["PIN", "o número secreto do seu cartão do banco ou da sua conta de dinheiro móvel. Nunca o partilhe."]],
          slides: [
            { title: "Mais seguro do que dinheiro vivo na fronteira", bullets: ["Transferência bancária", "Dinheiro móvel para outro país na sua rota", "PAPSS: pagar e receber em moedas locais pelos bancos"] },
            { title: "Receba antes de entregar", bullets: ["Comprador novo: sinal ou pagamento todo primeiro", "Veja você mesmo o saldo", "Depois entregue os produtos e dê um recibo"] },
            { title: "Sinais de alerta de burla", bullets: ["Mensagem ou captura de ecrã falsa de \"pagamento recebido\"", "\"Enviei a mais, devolva\"", "Pede o seu PIN ou código; apressa você"] },
            { title: "Lembre-se", bullets: ["Um serviço verdadeiro nunca pede o seu PIN", "Nunca partilhe um código enviado para o seu telefone"] }
          ],
          sources: [PAPSS],
          tryIt: "Escreva em três linhas a regra de pagamento do seu negócio: que forma aceita, quando entrega os produtos e como confirma que o dinheiro chegou. Pergunte ao seu banco ou serviço de dinheiro móvel que serviço para outro país funciona na sua rota.",
          youCanNow: "escolher uma forma segura de receber de um comprador de outro país e reconhecer os sinais de uma burla de pagamento.",
          quickCheck: [
            { objective: "O4", q: "Um comprador novo em Abidjan envia uma captura de ecrã a dizer que pagou. O que faz antes de enviar os produtos?", options: ["Envia os produtos logo", "Vê o seu próprio saldo para confirmar que o dinheiro chegou", "Pede-lhe outra captura de ecrã", "Envia-lhe o seu PIN para ele verificar"], answer: 1, why: "As capturas de ecrã podem ser falsas; só o seu próprio saldo prova que o dinheiro chegou." },
            { objective: "O4", q: "Um comprador diz que enviou a mais e pede para devolver a diferença. O que é isto, mais provavelmente?", options: ["Um reembolso normal", "Um erro do banco que tem de corrigir depressa", "Uma burla comum: veja o seu saldo e fale com o seu serviço", "Um imposto"], answer: 2, why: "\"Enviei a mais, devolva\" é uma burla conhecida; veja o seu saldo e ligue para o número oficial do seu serviço." }
          ]
        },
        {
          title: "Cobranças não oficiais, atrasos e o seu plano de comércio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Descrever os passos seguros quando lhe pedem um pagamento não oficial e denunciá-lo como barreira não tarifária.",
          text: [
            "Uma barreira não tarifária (BNT) é tudo o que, sem ser um direito, torna o comércio mais difícil: cobranças não oficiais em barreiras na estrada, grandes atrasos, documentos que não estão nas regras, ou produtos retidos sem razão. A AfCFTA tem um sistema na internet, tradebarriers.africa, onde qualquer comerciante, incluindo comerciantes informais, mulheres e jovens, pode denunciar uma BNT. As denúncias vão para os pontos focais nacionais e para o Secretariado da AfCFTA para serem acompanhadas.",
            "Se alguém pedir dinheiro sem recibo: fique calmo e educado, e ponha a sua segurança em primeiro lugar. Peça a taxa oficial e um recibo. Peça para falar com o funcionário responsável ou com o balcão de informação comercial. Não discuta de uma forma que o ponha em perigo.",
            "Depois, anote os factos: data, hora, lugar, o que pediram, o valor, e qualquer nome ou número de crachá que viu. Denuncie em tradebarriers.africa (na internet ou pela opção do telemóvel), na linha de reclamações da sua autoridade aduaneira, ou através da sua associação de comerciantes. As mulheres comerciantes que sofrem assédio podem também pedir apoio à sua associação ou a um grupo de mulheres comerciantes.",
            "Agora junte tudo. O seu plano de comércio transfronteiriço tem: o produto e a fronteira, as regras que verificou, os seus documentos, o seu custo e preço em duas moedas, como recebe o pagamento, e o que vai fazer com cobranças não oficiais."
          ],
          steps: ["Fique calmo e educado; a sua segurança vem primeiro.", "Peça a taxa oficial e um recibo, ou o funcionário responsável ou o balcão de comércio.", "Anote os factos: data, hora, lugar, valor, nome ou número de crachá.", "Denuncie em tradebarriers.africa, na alfândega ou através da sua associação de comerciantes.", "Acrescente estes passos ao seu plano de comércio transfronteiriço."],
          words: [["Barreira não tarifária (BNT)", "tudo o que, sem ser um direito, torna o comércio mais difícil, como cobranças não oficiais, grandes atrasos ou documentos a mais."], ["Ponto focal", "a pessoa ou serviço em cada país que acompanha as denúncias de BNT."]],
          slides: [
            { title: "O que é uma barreira não tarifária?", bullets: ["Cobranças não oficiais em barreiras na estrada ou fronteiras", "Grandes atrasos; documentos que não estão nas regras", "Produtos retidos sem razão"] },
            { title: "Se pedirem dinheiro sem recibo", bullets: ["Fique calmo e educado: segurança primeiro", "Peça a taxa oficial e um recibo", "Peça o funcionário responsável ou o balcão de comércio"] },
            { title: "Anote, depois denuncie", bullets: ["Data, hora, lugar, valor, nome ou crachá", "tradebarriers.africa: na internet ou por telefone", "Linha de reclamações da alfândega ou associação de comerciantes"] },
            { title: "O seu plano de comércio transfronteiriço", bullets: ["Produto, rota, regras verificadas; documentos", "Custo e preço em duas moedas", "Forma de pagamento; o que fazer com cobranças não oficiais"] }
          ],
          sources: [NTB, AFCFTA],
          tryIt: "Escreva o seu plano de comércio transfronteiriço de uma página, como diz a tarefa final. Acrescente os factos que anotaria e onde denunciaria uma cobrança não oficial.",
          youCanNow: "lidar com segurança com uma cobrança não oficial, denunciá-la como barreira não tarifária e escrever um plano completo de comércio transfronteiriço.",
          quickCheck: [
            { objective: "O5", q: "Onde pode um pequeno comerciante denunciar uma cobrança não oficial numa fronteira africana?", options: ["Em tradebarriers.africa, na alfândega ou numa associação de comerciantes", "Só nas redes sociais", "Em lado nenhum; não se pode denunciar", "À pessoa que pediu o dinheiro"], answer: 0, why: "O sistema de BNT da AfCFTA, as linhas de reclamações da alfândega e as associações de comerciantes são os caminhos oficiais." },
            { objective: "O5", q: "O que deve anotar depois de uma cobrança não oficial?", options: ["Só como se sentiu", "A data, a hora, o lugar, o valor e qualquer nome ou número de crachá", "Nada; esqueça", "Só o preço dos seus produtos"], answer: 1, why: "Factos claros fazem uma denúncia que pode ser acompanhada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Dinheiro, pagamento e problemas",
        questions: [
          { objective: "O3", q: "O custo total do lote é XAF 300.000 para 60 unidades. Soma XAF 1.000 de lucro por unidade. Qual é o preço de venda?", options: ["XAF 6.000", "XAF 5.000", "XAF 1.000", "XAF 7.000"], answer: 0, why: "300.000 / 60 = 5.000 de custo por unidade; mais 1.000 de lucro = 6.000." },
          { objective: "O3", q: "Porquê ver a taxa de câmbio no dia em que vende?", options: ["As taxas nunca mudam", "É o comprador que a define", "As taxas mudam todos os dias e podem acabar com o seu lucro", "Só serve para os bancos"], answer: 2, why: "As taxas de câmbio mudam todos os dias, por isso uma taxa antiga pode transformar um lucro num prejuízo." },
          { objective: "O4", q: "Que pedido deve fazê-lo parar logo?", options: ["\"Posso pagar por transferência bancária?\"", "\"Envie-me um recibo.\"", "\"Qual é o seu preço em XOF?\"", "\"Diga-me o código que acabámos de enviar para o seu telefone.\""], answer: 3, why: "Nenhum comprador ou serviço verdadeiro precisa do seu código ou PIN; pedi-lo é sinal de burla." },
          { objective: "O4", q: "O que é o PAPSS?", options: ["Um formulário da alfândega", "Um sistema para pagar entre países africanos em moedas locais, através de bancos e prestadores", "Um tipo de telemóvel", "Um posto de fronteira"], answer: 1, why: "O PAPSS deixa quem paga pagar na moeda local e quem recebe receber na moeda local entre países africanos." },
          { objective: "O5", q: "Um funcionário pede dinheiro sem recibo. Qual é o primeiro passo mais seguro?", options: ["Ficar calmo, pedir a taxa oficial e um recibo ou o funcionário responsável", "Gritar e recusar-se a sair do lugar", "Passar a fronteira a correr", "Pagar o dobro para ser mais rápido"], answer: 0, why: "Ficar calmo mantém você em segurança, e pedir o recibo ou o funcionário responsável segue o caminho oficial." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Vender do Outro Lado da Fronteira: Pequenos Comerciantes e a AfCFTA",
    questions: [
      { objective: "O1", q: "Quantos países da União Africana fazem parte da AfCFTA?", options: ["15", "55", "8", "100"], answer: 1, why: "A AfCFTA junta os 55 países da União Africana." },
      { objective: "O1", q: "Quando começou o comércio com a AfCFTA?", options: ["1 de janeiro de 2021", "1 de janeiro de 2000", "Ainda não começou", "1 de janeiro de 2030"], answer: 0, why: "O comércio com a AfCFTA começou a 1 de janeiro de 2021." },
      { objective: "O1", q: "O que decide se os seus produtos podem ter o direito mais baixo da AfCFTA?", options: ["A cor da embalagem", "A distância que percorre", "As regras de origem", "O dia da semana"], answer: 2, why: "Os produtos têm de cumprir as regras de origem, que mostram que vêm de um país membro." },
      { objective: "O1", q: "O Moussa vende cosméticos de Dakar para Bamako. Sobre que esquema deve perguntar primeiro?", options: ["O Regime Comercial Simplificado da EAC", "O Regime Comercial Simplificado do COMESA", "Um esquema da Ásia", "O Esquema de Liberalização do Comércio da CEDEAO"], answer: 3, why: "O Senegal e o Mali são membros da CEDEAO, por isso é sobre o ETLS que se deve perguntar." },
      { objective: "O1", q: "Quem pode explicar as regras simplificadas para pequenos comerciantes em alguns postos de fronteira?", options: ["Um funcionário do balcão de informação comercial", "Qualquer cambista", "O cobrador do autocarro", "Um desconhecido ao telefone"], answer: 0, why: "Os balcões de informação comercial de alguns postos de fronteira explicam as regras aos pequenos comerciantes." },
      { objective: "O2", q: "Que lista mostra os documentos comuns para uma fronteira oficial?", options: ["Fotos de casamento e um diário", "Só um número de telefone", "Identificação, fatura ou recibo, lista de embalagem, declaração aduaneira", "Uma carta de um amigo"], answer: 2, why: "A identificação, uma fatura ou recibo, uma lista de embalagem e uma declaração aduaneira são os documentos comuns." },
      { objective: "O2", q: "Antes de comprar stock para levar para o outro lado, o que deve perguntar à alfândega?", options: ["De que cor devem ser os produtos", "Se os seus produtos são restritos e que documentos precisam", "Se querem comprar alguns", "Nada"], answer: 1, why: "Alguns produtos são restritos e os documentos mudam de produto para produto, por isso pergunte primeiro." },
      { objective: "O2", q: "A Grace leva tomate fresco do Quénia para a Tanzânia. Que certificado pode precisar?", options: ["Um diploma universitário", "Uma certidão de casamento", "Uma licença de condução", "Um certificado fitossanitário (de saúde das plantas)"], answer: 3, why: "Os produtos frescos de plantas muitas vezes precisam de um certificado fitossanitário; ela deve perguntar à alfândega." },
      { objective: "O2", q: "O que faz um despachante?", options: ["Ajuda a tratar dos documentos da alfândega, a troco de pagamento", "Vende os seus produtos por você", "Troca dinheiro na rua", "Define o valor dos direitos"], answer: 0, why: "Um despachante tem licença para ajudar com os documentos da alfândega a troco de pagamento." },
      { objective: "O3", q: "Qual é o primeiro passo para calcular o custo de um lote?", options: ["Escolher um preço de que gosta", "Fazer a lista de todos os custos, da compra à venda", "Copiar o preço de um vizinho", "Trocar dinheiro"], answer: 1, why: "Não pode definir um preço justo sem conhecer todos os custos." },
      { objective: "O3", q: "Custo total KES 36.000 para 120 pares de sandálias. Qual é o custo por par?", options: ["KES 30", "KES 3.000", "KES 300", "KES 120"], answer: 2, why: "36.000 a dividir por 120 dá 300." },
      { objective: "O3", q: "O custo por unidade é GHS 20 e o lucro é GHS 5. Com uma taxa de exemplo de 1 GHS = 40 XOF, qual é o preço em XOF?", options: ["800 XOF", "200 XOF", "1.000 XOF", "25 XOF"], answer: 2, why: "GHS 20 + GHS 5 = GHS 25; 25 x 40 = 1.000 XOF." },
      { objective: "O3", q: "Depois de calcular o seu preço, o que mais deve ver?", options: ["O tempo", "O preço de produtos parecidos no mercado do comprador", "Nada", "O telefone do vizinho"], answer: 1, why: "Comparar com o mercado mostra se os compradores vão pagar o seu preço." },
      { objective: "O4", q: "Um comprador novo quer os produtos já e promete pagar na próxima semana. O que é mais seguro?", options: ["Pedir um sinal ou o pagamento todo primeiro", "Enviar tudo já", "Dar o seu PIN como prova de confiança", "Enviar o dobro"], answer: 0, why: "Com um comprador novo, um sinal ou o pagamento todo primeiro protege os seus produtos." },
      { objective: "O4", q: "Como sabe que um pagamento chegou mesmo?", options: ["O comprador diz que sim", "Uma captura de ecrã", "Uma SMS de um número desconhecido", "Vê você mesmo o seu saldo"], answer: 3, why: "Só o seu próprio saldo confirma que o dinheiro está mesmo lá." },
      { objective: "O4", q: "Quem vai pedir o PIN do seu dinheiro móvel?", options: ["O seu serviço de dinheiro móvel", "O seu banco", "Nenhum serviço verdadeiro: só os burlões", "A alfândega"], answer: 2, why: "Um serviço verdadeiro nunca pede o seu PIN; quem o pede é um burlão." },
      { objective: "O4", q: "Porque é arriscado levar muito dinheiro vivo pela fronteira?", options: ["O dinheiro vivo é sempre ilegal", "Roubo, taxas más na rua e notas falsas", "O dinheiro vivo não se pode contar", "Os bancos proíbem"], answer: 1, why: "O dinheiro vivo pode ser roubado, e os cambistas de rua podem dar taxas más ou notas falsas." },
      { objective: "O5", q: "Qual destes é uma barreira não tarifária?", options: ["O direito de importação oficial", "Cobranças não oficiais numa barreira na estrada", "O preço dos seus produtos", "O seu lucro"], answer: 1, why: "Uma BNT é tudo o que, sem ser um direito, torna o comércio mais difícil, como as cobranças não oficiais." },
      { objective: "O5", q: "Quem pode fazer uma denúncia em tradebarriers.africa?", options: ["Só as grandes empresas", "Só os governos", "Só os homens", "Qualquer comerciante, incluindo comerciantes informais, mulheres e jovens"], answer: 3, why: "O sistema está aberto a negócios de todos os tamanhos, comerciantes informais, mulheres e jovens." },
      { objective: "O5", q: "Um funcionário retém os seus produtos e pede dinheiro vivo sem recibo. Qual é o melhor plano?", options: ["Ficar calmo, pedir o recibo ou o funcionário responsável, anotar os factos e denunciar", "Deixar os produtos e ir para casa", "Discutir alto até ele desistir", "Pagar e nunca dizer nada"], answer: 0, why: "Ficar em segurança, pedir o caminho oficial, anotar os factos e denunciar é o plano certo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e tente outra vez.",
    criteria: [
      { name: "Regras verificadas", objective: "O1", notYet: "O plano não diz que regras se aplicam, ou baseia-se num boato.", meets: "O plano diz o esquema regional ou a regra da AfCFTA para a rota e pelo menos dois serviços ou sites onde verificar.", exceeds: "Também anota o que um serviço disse, com a data e o nome do funcionário." },
      { name: "Documentos na lista", objective: "O2", notYet: "Não há lista de documentos, ou só a identificação.", meets: "Uma lista dos documentos para este produto e esta rota, com uma fatura e uma declaração aduaneira, e um certificado de origem quando se quer um direito mais baixo.", exceeds: "Também indica qualquer certificado sanitário, fitossanitário ou de produto e como se guardam as cópias." },
      { name: "Custo total e preço", objective: "O3", notYet: "Só conta o custo dos produtos, ou as contas estão erradas.", meets: "Todos os custos estão na lista, o custo por unidade e o preço de venda estão certos, e o preço aparece nas duas moedas.", exceeds: "Também compara o preço com o mercado do comprador e prevê uma mudança na taxa de câmbio." },
      { name: "Pagamento seguro", objective: "O4", notYet: "Os produtos são entregues antes de confirmar o pagamento, ou o plano partilha um PIN.", meets: "Diz uma forma segura, os produtos só são entregues depois de ver o saldo, e nenhum PIN é partilhado.", exceeds: "Também faz a lista dos sinais de alerta de burla a que o comerciante vai estar atento." },
      { name: "Cobranças não oficiais", objective: "O5", notYet: "Não há plano, ou o plano é pagar e não dizer nada.", meets: "Diz os passos seguros, os factos a anotar e um canal oficial de denúncia.", exceeds: "Diz dois canais de denúncia e uma associação de comerciantes para apoio." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter usado uma fronteira oficial e os documentos certos em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter feito menos pagamentos não oficiais, ou que fizeram uma denúncia de BNT, em 90 dias",
      "Alunos que dizem ter feito uma venda para outro país com o lucro planeado em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone simples com calculadora; internet para au-afcfta.org e tradebarriers.africa, se possível",
      "Papel e caneta para a lista de documentos, o cálculo dos custos e o plano de comércio",
      "A taxa de câmbio de hoje para a rota do aluno (de um banco ou do banco central)",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Antes da sessão, pergunte à alfândega local ou ao balcão de comércio que esquemas e documentos se aplicam às rotas dos seus alunos, para poder responder às perguntas; nunca diga valores de direitos de memória.",
      "Numa associação de comerciantes ou grupo do mercado: façam o teste inicial juntos e depois um capítulo por sessão, com os alunos a calcular o custo dos seus próprios lotes reais.",
      "Trate os comerciantes informais com respeito: o objetivo é um comércio mais seguro, legal e com mais lucro, não culpar ninguém.",
      "Nunca peça aos alunos para partilhar PINs, palavras-passe ou números de conta na aula.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
