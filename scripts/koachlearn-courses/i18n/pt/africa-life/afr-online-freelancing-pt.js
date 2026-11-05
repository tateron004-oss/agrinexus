"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-online-freelancing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const THREE_MTT = { name: "3MTT (3 Million Technical Talent), Nigéria: Ministério Federal das Comunicações, Inovação e Economia Digital, com a NITDA", url: "https://3mtt.nitda.gov.ng/" };
const AJIRA = { name: "Agência de Notícias do Quénia: jovens incentivados a aderir ao programa Ajira Digital (programa do governo para o trabalho online)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };
const KRA = { name: "Kenya Revenue Authority (KRA), a autoridade tributária do Quénia: imposto sobre o rendimento, incluindo o rendimento ganho online", url: "https://www.kra.go.ke" };
const GRA = { name: "Ghana Revenue Authority (GRA), a autoridade tributária do Gana", url: "https://gra.gov.gh" };
const SEC_NG = { name: "Nairametrics (14 de maio de 2026): a SEC da Nigéria alerta contra esquemas promovidos no WhatsApp, TikTok e Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-online-freelancing-pt",
  lang: "pt",
  translationOf: "afr-online-freelancing",
  category: "Africa: Life and Work",
  name: "Trabalho Freelancer Online e Trabalho Remoto a partir de África",
  skills: "Escolher um serviço para vender online, Escrever um perfil e criar um pequeno portefólio, Escrever uma proposta para um anúncio de trabalho, Combinar o trabalho e entregar a tempo, Receber o pagamento e manter registos, Reconhecer falsos empregos e burlas de pagamento",
  outcome: "transformar uma habilidade que já tem num serviço online: escrever um perfil com amostras de trabalho, escrever uma proposta para um anúncio real, combinar o trabalho por escrito, receber o pagamento com segurança, manter registos e recusar falsos empregos.",
  about: [
    "Em toda a África, jovens e adultos ganham dinheiro online a escrever, traduzir, fazer design, introduzir dados, dar apoio a clientes, transcrever, fazer contabilidade, gerir redes sociais e dar assistência virtual a clientes no seu próprio país e no estrangeiro. Alguns trabalham através de plataformas como o Upwork, o Fiverr e o LinkedIn; outros encontram clientes pelo WhatsApp, pelo Facebook e entre as pessoas que conhecem.",
    "Este curso é para quem procura trabalho, estudantes, recém-formados, mães e pais em casa, e qualquer pessoa com um telefone ou computador e uma habilidade. Você vai escolher um serviço, escrever um perfil, juntar pequenas amostras de trabalho, escrever uma proposta, combinar o trabalho, receber o pagamento e reconhecer os muitos falsos empregos que visam os freelancers novos. Os governos também oferecem formação gratuita, como o Ajira Digital no Quénia e o 3MTT na Nigéria.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" que pode fazer no telefone. Há uma pequena verificação depois de cada lição e de cada capítulo, e um questionário de 20 perguntas no final. As taxas e as formas de pagamento das plataformas são diferentes em cada país e mudam, por isso vai aprender a lê-las nas páginas de ajuda de cada plataforma."
  ],
  finalTask: "Faça o seu kit inicial de freelancer: uma oferta de serviço numa linha, um perfil (título e uma descrição curta), duas ou três pequenas amostras de trabalho, uma proposta escrita para um anúncio real ou de exemplo, e uma lista de segurança e pagamento (como vai receber, que registos vai manter, onde perguntar sobre impostos e os sinais de alerta de falsos empregos).",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos em toda a África, nas cidades e vilas: recém-formados e jovens que deixaram a escola à procura de trabalho, pessoas com emprego que querem um rendimento extra, pais que trabalham em casa, e artesãos e donos de pequenos negócios com habilidades para vender. Exemplos do Quénia, Nigéria, Gana, Senegal, Costa do Marfim, Camarões, Egito e Marrocos; muitos falam inglês, francês ou árabe, o que já é uma habilidade para vender.",
    startingPoint: "Sabem usar um smartphone, o WhatsApp e as redes sociais; alguns têm um portátil ou usam um cibercafé. A maioria tem uma habilidade (escrever, línguas, design, digitação, contabilidade, vendas), mas nunca a descreveu como um serviço, nunca escreveu uma proposta nem recebeu de um cliente estrangeiro. Muitos já viram anúncios de \"trabalhe a partir de casa\" que afinal eram burlas.",
    gap: "Os alunos precisam de apresentar um serviço claro, escrever propostas que ganham trabalho, combinar as condições por escrito, receber com segurança e evitar falsos empregos que pedem taxas, para que o trabalho online se torne um rendimento real e não dados e dinheiro perdidos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; traduzido para francês e árabe",
      "Aparelhos: muitas vezes só um smartphone; os dados móveis são caros; a eletricidade pode falhar",
      "Tempo: lições de 4 a 6 minutos",
      "As taxas, as regras e as formas de pagamento das plataformas são diferentes em cada país e mudam; as regras dos impostos são diferentes em cada país",
      "Nunca partilhe palavras-passe, PIN, códigos de uso único ou documentos de identificação com um cliente ou recrutador"
    ],
    prerequisites: "Saber usar o telefone e ter uma habilidade que pode fazer para outras pessoas. Um endereço de email."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista das suas próprias habilidades", action: "escolher um serviço que pode vender online e escrevê-lo como uma oferta numa linha", standard: "dizendo o que faz, para quem e o que o cliente recebe" },
    { id: "O2", condition: "Numa plataforma ou numa página online simples", action: "escrever o título e a descrição do perfil e juntar duas ou três pequenas amostras de trabalho", standard: "sem informações privadas e com amostras feitas por você" },
    { id: "O3", condition: "Com um anúncio de trabalho", action: "escrever uma proposta curta que responda à necessidade do cliente, mostre uma amostra relacionada e faça uma pergunta", standard: "em menos de 150 palavras, escrita para esse anúncio, não copiada" },
    { id: "O4", condition: "Antes de começar um trabalho", action: "combinar por escrito o âmbito, o preço, o prazo e o número de alterações, e entregar a tempo", standard: "com um plano de reserva para falhas de eletricidade ou de dados" },
    { id: "O5", condition: "Depois de combinar um trabalho", action: "escolher uma forma segura de receber e registar cada pagamento", standard: "mantendo o trabalho e o pagamento dentro da plataforma quando usa uma, e registando cada pagamento no prazo de uma semana" },
    { id: "O6", condition: "Com cinco ofertas de trabalho ou mensagens", action: "identificar as falsas e dizer o sinal de alerta em cada uma", standard: "acertando pelo menos 4 de 5, antes de pagar ou partilhar qualquer dado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se para trabalhar online",
      lessons: [
        {
          title: "Escolher um serviço que pode vender",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher um serviço e escrevê-lo como uma oferta numa linha.",
          text: [
            "Ser freelancer quer dizer fazer trabalho pago para clientes, um trabalho de cada vez, em vez de trabalhar para um só patrão. Trabalho remoto quer dizer um emprego, a tempo inteiro ou a tempo parcial, feito a partir de casa ou de qualquer lugar pela internet. Os dois começam com uma habilidade de que os clientes precisam.",
            "Faça a lista do que já sabe fazer: escrever, traduzir entre inglês, francês, árabe ou uma língua local, digitar e introduzir dados, usar o Excel ou o Google Sheets, design gráfico no Canva, redes sociais, apoio a clientes, contabilidade, transcrição, explicações. Escolha UM para começar; os clientes contratam especialistas.",
            "Escreva uma oferta numa linha: o que faz, para quem e o que recebem. Exemplo: \"Traduzo documentos de negócios de inglês para francês para pequenas empresas, com rigor e em 48 horas.\" Exemplo: o Kofi, em Acra: \"Faço panfletos simples no Canva e publicações para redes sociais para lojas e igrejas.\"",
            "Se precisar de mais habilidades, use formação gratuita. O governo do Quénia tem o Ajira Digital para o trabalho online, e o programa 3MTT da Nigéria forma jovens em áreas como dados, design e software."
          ],
          steps: ["Faça a lista de cinco coisas que sabe fazer para outras pessoas.", "Marque a que faz melhor e de que mais gosta.", "Pergunte: quem paga por isto?", "Escreva: Eu faço [o quê] para [quem] para que recebam [resultado].", "Se precisar de mais habilidade, procure formação gratuita."],
          words: [["Freelancer", "uma pessoa que faz trabalho pago para clientes, um trabalho de cada vez."], ["Trabalho remoto", "um emprego feito pela internet, a partir de casa ou de qualquer lugar."], ["Oferta de serviço", "uma frase que diz o que faz, para quem e o que recebem."]],
          slides: [
            { title: "Comece pelo que sabe fazer", bullets: ["Escrever, traduzir, digitar, folhas de cálculo", "Design, redes sociais, apoio a clientes", "Contabilidade, transcrição, explicações"] },
            { title: "Escolha UM serviço", bullets: ["Os clientes contratam especialistas", "Escolha o que faz melhor e de que mais gosta"] },
            { title: "A sua oferta numa linha", bullets: ["Eu faço [o quê] para [quem] para que recebam [resultado]", "\"Traduzo de inglês para francês para pequenas empresas, em 48 horas\""] },
            { title: "Formação gratuita", bullets: ["Quénia: Ajira Digital", "Nigéria: 3MTT", "Veja as inscrições atuais nos sites oficiais"] }
          ],
          sources: [AJIRA, THREE_MTT],
          tryIt: "Faça a lista de cinco coisas que sabe fazer para outras pessoas. Escolha uma e escreva a sua oferta numa linha: Eu faço [o quê] para [quem] para que recebam [resultado].",
          youCanNow: "escolher um serviço e descrevê-lo numa oferta clara numa linha.",
          quickCheck: [
            { objective: "O1", q: "Qual é a oferta numa linha mais clara?", options: ["\"Faço qualquer coisa online\"", "\"Contrate-me, por favor\"", "\"Passo formulários escritos à mão para o Excel para clínicas, com rigor e rapidez\"", "\"Freelancer, todas as habilidades\""], answer: 2, why: "Diz o quê, para quem e o que o cliente recebe." },
            { objective: "O1", q: "Porque escolher UM serviço para começar?", options: ["Os clientes procuram especialistas", "As plataformas só aceitam uma palavra", "É a lei", "Gasta menos dados"], answer: 0, why: "Uma especialidade clara faz com que os clientes confiem mais e contratem mais facilmente." }
          ]
        },
        {
          title: "O seu perfil e um pequeno portefólio",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escrever o título e a descrição do perfil e juntar duas ou três amostras de trabalho.",
          text: [
            "O seu perfil é a sua montra. O título diz o seu serviço em poucas palavras: \"Tradutor de Inglês-Francês para Documentos de Negócios\". A descrição, alguns parágrafos curtos, diz quem você ajuda, o que faz, como trabalha e uma prova, como um trabalho anterior ou uma formação.",
            "Os clientes querem provas. Um portefólio são algumas amostras do seu trabalho. Se ainda não tem clientes, faça você as amostras: traduza um aviso público curto, faça um panfleto para uma loja imaginária, organize uma pequena folha de cálculo de exemplo. Nunca use o trabalho de outra pessoa e nunca partilhe informações reais de um cliente sem autorização.",
            "Não ponha informações privadas no perfil: nem morada de casa, nem número de identificação, nem dados bancários. Use uma fotografia clara e simpática se a plataforma pedir.",
            "Poupe dados: escreva o perfil primeiro numa aplicação de notas e depois cole-o de uma só vez. Reduza o tamanho das imagens antes de as enviar. Exemplo: a Mariam, em Casablanca, escreve o seu perfil em árabe e francês sem internet e depois carrega-o num cibercafé em dez minutos."
          ],
          steps: ["Escreva um título: o seu serviço em poucas palavras.", "Escreva a descrição: quem ajuda, o que faz, como trabalha, uma prova.", "Faça você mesmo duas ou três pequenas amostras.", "Verifique: nenhuma informação privada, nenhum trabalho de outra pessoa.", "Escreva primeiro sem internet e depois cole."],
          words: [["Perfil", "a sua página numa plataforma que diz aos clientes quem você é e o que faz."], ["Portefólio", "algumas amostras do seu trabalho que provam a sua habilidade."], ["Título", "uma linha curta por baixo do seu nome que diz o seu serviço."]],
          slides: [
            { title: "Título e descrição", bullets: ["Título: o seu serviço em poucas palavras", "Descrição: quem ajuda, o que faz, como, uma prova"] },
            { title: "Portefólio: mostre provas", bullets: ["Duas ou três pequenas amostras", "Ainda sem clientes? Faça você as amostras", "Nunca use o trabalho de outras pessoas"] },
            { title: "Seguro e leve", bullets: ["Sem morada, identificação ou dados bancários", "Escreva sem internet, cole de uma vez", "Reduza as imagens para poupar dados"] }
          ],
          tryIt: "Escreva o seu título e uma descrição curta numa aplicação de notas. Depois faça uma pequena amostra de trabalho para o seu serviço, por exemplo um parágrafo traduzido, um panfleto ou uma folha de cálculo organizada.",
          youCanNow: "escrever um perfil claro e mostrar a sua habilidade com pequenas amostras de trabalho.",
          quickCheck: [
            { objective: "O2", q: "Ainda não tem clientes. Como pode criar um portefólio?", options: ["Copiar o trabalho de um designer famoso", "Fazer você mesmo pequenas amostras", "Usar o trabalho de um amigo com o seu nome", "Esperar até um cliente o contratar"], answer: 1, why: "As amostras feitas por você são uma prova honesta da sua habilidade." },
            { objective: "O2", q: "O que NÃO deve pôr no seu perfil?", options: ["O seu título", "O seu serviço", "Uma amostra do seu trabalho", "A sua morada de casa e o número de identificação"], answer: 3, why: "As informações privadas podem ser mal usadas; o perfil só precisa das suas habilidades e provas." }
          ]
        },
        {
          title: "Encontrar trabalho e escrever uma proposta",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escrever uma proposta curta que responda à necessidade de um cliente.",
          text: [
            "Onde encontrar trabalho: plataformas de freelancers (como o Upwork e o Fiverr), o LinkedIn, sites de emprego e pessoas que conhece, como negócios locais, igrejas, ONG e escolas que precisam de ajuda online. Os primeiros clientes estão muitas vezes perto de você.",
            "Leia o anúncio duas vezes. Encontre a necessidade do cliente, o prazo e qualquer pergunta que ele faça. Ignore anúncios vagos, que não pagam nada ou que pedem que você pague.",
            "A proposta é a sua resposta curta. Escreva menos de 150 palavras: 1. Mostre numa frase que percebeu a necessidade. 2. Diga como vai fazer o trabalho. 3. Mostre uma amostra relacionada. 4. Faça uma pergunta útil. Escreva-a para esse anúncio; os clientes reconhecem uma mensagem copiada.",
            "Exemplo: um cliente precisa de 200 nomes de produtos digitados numa folha de cálculo. A Ngozi, em Lagos, escreve: \"Precisa de 200 nomes e preços de produtos digitados numa folha de cálculo até sexta-feira. Vou digitar e verificar duas vezes cada linha. Aqui está uma folha de exemplo que fiz. Os preços devem ficar em nairas ou em dólares?\""
          ],
          steps: ["Leia o anúncio duas vezes; anote a necessidade, o prazo e qualquer pergunta.", "Ignore anúncios vagos ou que pedem que você pague.", "Frase 1: a necessidade do cliente com as suas palavras.", "Frase 2: como vai fazer o trabalho.", "Junte uma amostra relacionada.", "Faça uma pergunta útil.", "Escreva menos de 150 palavras."],
          words: [["Anúncio de trabalho", "a descrição que o cliente faz do trabalho de que precisa."], ["Proposta", "a sua resposta curta a um anúncio, que diz como vai fazer o trabalho."]],
          slides: [
            { title: "Onde encontrar trabalho", bullets: ["Plataformas como o Upwork e o Fiverr", "LinkedIn e sites de emprego", "Negócios locais, ONG, igrejas, escolas"] },
            { title: "Leia o anúncio duas vezes", bullets: ["A necessidade, o prazo, qualquer pergunta", "Ignore anúncios vagos e os que pedem que você pague"] },
            { title: "Proposta em quatro partes", bullets: ["1. A necessidade com as suas palavras  2. Como vai fazer", "3. Uma amostra relacionada  4. Uma pergunta útil", "Menos de 150 palavras, escrita para este anúncio"] }
          ],
          tryIt: "Encontre um anúncio de trabalho real para o seu serviço (ou use o exemplo da folha de cálculo). Escreva uma proposta com menos de 150 palavras e com as quatro partes.",
          youCanNow: "escrever uma proposta curta que mostre a um cliente que percebeu a necessidade dele.",
          quickCheck: [
            { objective: "O3", q: "O que deve fazer a primeira frase de uma proposta?", options: ["Mostrar que percebeu a necessidade do cliente", "Contar a história da sua vida", "Pedir o pagamento primeiro", "Fazer a lista de todas as suas habilidades"], answer: 0, why: "Mostrar que percebeu a necessidade chama a atenção do cliente." },
            { objective: "O3", q: "Porque escrever cada proposta para aquele anúncio?", options: ["As plataformas exigem propostas longas", "Os clientes reconhecem uma mensagem copiada e passam à frente", "Gasta menos dados", "As propostas copiadas são ilegais"], answer: 1, why: "Uma proposta escrita para o anúncio mostra cuidado e compreensão." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se para trabalhar online",
        questions: [
          { objective: "O1", q: "Que três coisas diz uma oferta numa linha?", options: ["A sua idade, cidade e escola", "O seu preço, o seu telefone e o seu banco", "O que faz, para quem e o que recebem", "Os seus passatempos, a sua família e os seus objetivos"], answer: 2, why: "O quê, para quem e o resultado tornam a oferta clara." },
          { objective: "O1", q: "Fala bem árabe e francês. Que serviço pode oferecer?", options: ["Tradução entre árabe e francês", "Reparar carros online", "Vender contas de outras pessoas", "Nenhum; as línguas não são uma habilidade"], answer: 0, why: "As línguas são uma habilidade pela qual muitos clientes pagam." },
          { objective: "O2", q: "O que é um portefólio?", options: ["O seu extrato bancário", "Algumas amostras do seu trabalho que provam a sua habilidade", "O seu bilhete de identidade", "Uma lista das palavras-passe dos clientes"], answer: 1, why: "Um portefólio mostra aos clientes o que você sabe fazer." },
          { objective: "O3", q: "Uma boa proposta é:", options: ["Longa, com todas as suas habilidades", "A mesma mensagem enviada para todos os anúncios", "Um pedido de pagamento adiantado de uma taxa", "Curta, escrita para o anúncio, com uma amostra e uma pergunta"], answer: 3, why: "Propostas curtas e específicas, com provas, ganham mais trabalho." },
          { objective: "O3", q: "Um anúncio pede que pague uma taxa para se candidatar. O que faz?", options: ["Paga depressa", "Paga metade", "Ignora-o", "Envia a sua identificação em vez disso"], answer: 2, why: "Os clientes verdadeiros pagam-lhe a você; não pedem que pague para se candidatar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer o trabalho e receber o pagamento",
      lessons: [
        {
          title: "Combinar o trabalho e entregar a tempo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Combinar por escrito o âmbito, o preço, o prazo e as alterações antes de começar.",
          text: [
            "Antes de começar, combine por escrito (nas mensagens da plataforma ou num email curto) quatro coisas: o âmbito (exatamente o que vai entregar), o preço, o prazo (com o fuso horário) e quantas rondas de alterações estão incluídas.",
            "Exemplo: \"Âmbito: fazer 3 publicações para as redes sociais da sua padaria. Preço: como combinado no contrato. Prazo: quinta-feira às 17h, hora local do cliente (Londres). Alterações: até 2 rondas.\" Se depois o cliente pedir mais, ofereça com educação um novo preço pelo trabalho extra.",
            "Prepare-se para falhas de eletricidade e de dados. Carregue o telefone e um powerbank, guarde o trabalho muitas vezes na nuvem, conheça um lugar de reserva para trabalhar (cibercafé, centro de inovação, biblioteca) e não deixe o trabalho para o último dia. Se alguma coisa correr mal, avise o cliente cedo e com honestidade; a maioria dos clientes aceita um pequeno atraso quando é avisada com antecedência.",
            "Exemplo: o Ibrahima, em Thiès, trabalha a partir das 6h da manhã, antes de as falhas de eletricidade costumarem começar, e guarda uma cópia de cada ficheiro no Google Drive."
          ],
          steps: ["Escreva o âmbito: exatamente o que vai entregar.", "Escreva o preço e o prazo, com o fuso horário.", "Escreva quantas rondas de alterações estão incluídas.", "Obtenha o sim do cliente por escrito.", "Guarde o trabalho muitas vezes; tenha uma reserva de energia e de dados.", "Se se for atrasar, avise o cliente cedo."],
          words: [["Âmbito", "exatamente o trabalho que vai entregar."], ["Fuso horário", "a hora local de um lugar; Londres, Lagos e Nairobi podem ter horas de diferença."], ["Revisão", "uma alteração que o cliente pede depois de ver o seu trabalho."]],
          slides: [
            { title: "Combine quatro coisas por escrito", bullets: ["Âmbito: exatamente o que entrega", "Preço", "Prazo, com fuso horário", "Rondas de alterações incluídas"] },
            { title: "Mais trabalho = novo preço", bullets: ["Pedidos extra são trabalho novo", "Ofereça um novo preço com educação"] },
            { title: "Prepare-se para falhas", bullets: ["Powerbank; guarde muitas vezes na nuvem", "Lugar de reserva para trabalhar", "Vai atrasar? Avise o cliente cedo"] }
          ],
          tryIt: "Escreva uma mensagem curta de âmbito para um trabalho do seu serviço: âmbito, preço (como exemplo), prazo com fuso horário e rondas de alterações. Depois escreva o seu plano de reserva para uma falha de eletricidade ou de dados.",
          youCanNow: "combinar por escrito o âmbito, o preço, o prazo e as alterações de um trabalho, e entregar a tempo com um plano de reserva.",
          quickCheck: [
            { objective: "O4", q: "Qual NÃO é uma das quatro coisas a combinar antes de começar?", options: ["Âmbito", "Preço", "Prazo", "A sua música preferida"], answer: 3, why: "Âmbito, preço, prazo e alterações são as quatro." },
            { objective: "O4", q: "Não há eletricidade e pode falhar o prazo de amanhã. O que faz?", options: ["Não diz nada e espera", "Avisa o cliente cedo e dá uma nova hora", "Apaga o trabalho", "Pede mais dinheiro ao cliente"], answer: 1, why: "Uma notícia dada cedo e com honestidade mantém a confiança do cliente." }
          ]
        },
        {
          title: "Receber o pagamento e manter registos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escolher uma forma segura de receber e registar cada pagamento.",
          text: [
            "Numa plataforma, mantenha o trabalho, as mensagens e o pagamento dentro da plataforma. A proteção de pagamento dela só funciona lá dentro. Os clientes que pedem para sair da plataforma para lhe pagarem \"diretamente\" são muitas vezes burlões, e isso pode ir contra as regras da plataforma.",
            "As plataformas pagam de formas diferentes: para uma conta bancária, para serviços como o Payoneer ou por outros meios. O que funciona depende da plataforma e do seu país, e as taxas mudam. Leia as páginas de pagamentos e de taxas no centro de ajuda da própria plataforma antes de aceitar o primeiro trabalho.",
            "Com clientes diretos que conhece, combine como pagam antes de começar: transferência bancária ou dinheiro móvel, e quando (por exemplo metade antes e metade na entrega). Entregue primeiro uma amostra ou uma pré-visualização se tiver dúvidas.",
            "Registe cada pagamento: data, cliente, trabalho, valor e moeda (USD, EUR, KES, NGN, GHS, XOF, MAD), taxas e o valor que recebeu. O rendimento online pode pagar impostos. Pergunte à autoridade tributária do seu país, por exemplo a Kenya Revenue Authority ou a Ghana Revenue Authority, ou a um consultor fiscal, o que tem de registar e pagar."
          ],
          steps: ["Numa plataforma, mantenha o trabalho e o pagamento lá dentro.", "Leia as páginas de pagamentos e de taxas da própria plataforma.", "Com clientes diretos, combine como e quando pagam antes de começar.", "Registe cada pagamento no prazo de uma semana: data, cliente, trabalho, valor, moeda, taxas, recebido.", "Pergunte à autoridade tributária do seu país o que se aplica a você."],
          words: [["Proteção de pagamento", "o sistema de uma plataforma que guarda ou garante o pagamento do trabalho feito dentro dela."], ["Moeda", "o tipo de dinheiro: dólares americanos, euros, nairas, cedis, xelins, francos CFA, dirhams."], ["Autoridade tributária", "o serviço do governo que cobra os impostos, como a KRA no Quénia ou a GRA no Gana."]],
          slides: [
            { title: "Fique na plataforma", bullets: ["Trabalho, mensagens e pagamento lá dentro", "A proteção só funciona lá", "\"Pago-lhe diretamente fora da plataforma\" = sinal de alerta"] },
            { title: "Formas de pagamento", bullets: ["Banco, Payoneer ou outras: depende do país", "Leia as páginas de ajuda da própria plataforma", "As taxas mudam: verifique antes do primeiro trabalho"] },
            { title: "Registos e impostos", bullets: ["Data, cliente, trabalho, valor, moeda, taxas", "Registe cada pagamento no prazo de uma semana", "Pergunte à KRA, à GRA ou à sua autoridade tributária"] }
          ],
          sources: [KRA, GRA],
          tryIt: "Faça uma tabela de registo de pagamentos com estas colunas: data, cliente, trabalho, valor, moeda, taxas, valor recebido. Junte uma linha de exemplo. Depois encontre a página de ajuda sobre pagamentos de uma plataforma que possa usar.",
          youCanNow: "escolher uma forma segura de receber, registar cada pagamento e saber onde perguntar sobre impostos.",
          quickCheck: [
            { objective: "O5", q: "Um cliente novo numa plataforma pede para passar para o WhatsApp e pagar \"diretamente\". Qual é o risco?", options: ["Perde a proteção de pagamento da plataforma, e muitas vezes é uma burla", "Nenhum; é mais rápido", "Vai receber o dobro", "A plataforma paga a taxa"], answer: 0, why: "A proteção de pagamento só funciona dentro da plataforma; pedidos para sair dela são um sinal comum de burla." },
            { objective: "O5", q: "Quem lhe pode dizer que impostos deve sobre o rendimento online?", options: ["O seu cliente", "Um grupo de WhatsApp", "A autoridade tributária do seu país ou um consultor fiscal", "Ninguém; o rendimento online nunca paga impostos"], answer: 2, why: "As regras dos impostos são diferentes em cada país; a autoridade tributária ou um consultor podem dizer-lhe." }
          ]
        },
        {
          title: "Falsos empregos e burlas de pagamento",
          objectives: ["O6"],
          minutes: 6,
          goal: "Identificar ofertas de trabalho falsas e dizer o sinal de alerta em cada uma.",
          text: [
            "Os freelancers novos são um grande alvo. Sinais de alerta: 1. Pedem que VOCÊ pague: inscrição, formação, um \"kit inicial\" ou um programa. 2. Pagamento alto demais para um trabalho fácil, como \"ganhe USD 500 por dia a pôr gostos em vídeos\". 3. Pedem as suas palavras-passe, PIN, códigos de uso único ou documentos de identificação. 4. Querem levá-lo para fora da plataforma logo. 5. \"Pagam a mais\" por cheque ou transferência e pedem que devolva o que sobra. 6. Trabalhos de \"tarefas\" ou de \"investimento\" em que deposita dinheiro para desbloquear tarefas ou ganhos, muitas vezes promovidos no WhatsApp, Telegram e TikTok.",
            "A SEC da Nigéria (a comissão que controla os investimentos) alertou contra esquemas promovidos nas redes sociais que prometem lucros altos. Os clientes verdadeiros pagam-lhe pelo trabalho; nunca lhe pedem que pague para trabalhar.",
            "Proteja as suas contas: uma palavra-passe forte e diferente para o email e para cada plataforma, a verificação em dois passos ligada, e nunca partilhe códigos. Não deixe ninguém \"alugar\" ou usar a sua conta verificada; pode ser usada para fraudes em seu nome.",
            "Depois junte o seu kit inicial: a sua oferta, o perfil, as amostras, uma proposta e a sua lista de segurança e pagamento."
          ],
          steps: ["Pergunte: querem que eu pague?", "Pergunte: o pagamento é bom demais para o trabalho?", "Pergunte: querem palavras-passe, códigos ou identificação?", "Pergunte: estão a apressar-me para sair da plataforma?", "Algum sim: pare, não pague, denuncie à plataforma.", "Ligue a verificação em dois passos e nunca partilhe códigos."],
          words: [["Burla do pagamento a mais", "um pagamento falso de dinheiro a mais, seguido de um pedido para devolver o que sobra antes de o pagamento falso ser anulado."], ["Verificação em dois passos", "uma segunda verificação, como um código enviado para o telefone, quando entra na conta."], ["Burla das tarefas", "um falso trabalho em que tem de depositar dinheiro para desbloquear tarefas ou ganhos."]],
          slides: [
            { title: "Sinais de alerta de falsos empregos", bullets: ["Pedem que você pague para trabalhar", "Pagamento alto demais para um trabalho fácil", "Querem palavras-passe, códigos ou identificação"] },
            { title: "Mais truques", bullets: ["Apressam-no para sair da plataforma", "Pagam a mais e depois \"devolva o que sobra\"", "Depósito para desbloquear tarefas ou ganhos"] },
            { title: "Proteja as suas contas", bullets: ["Palavras-passe fortes e diferentes", "Verificação em dois passos ligada", "Nunca alugue a sua conta verificada"] },
            { title: "O seu kit inicial", bullets: ["Oferta, perfil, amostras", "Uma proposta", "Lista de segurança e pagamento"] }
          ],
          sources: [SEC_NG],
          tryIt: "Tarefa final: junte o seu kit inicial de freelancer: oferta numa linha, título e descrição do perfil, duas ou três amostras, uma proposta para um anúncio real ou de exemplo, e uma lista com a sua forma de pagamento, a sua tabela de registos, onde vai perguntar sobre impostos e os seis sinais de alerta de falsos empregos.",
          youCanNow: "reconhecer falsos empregos e burlas de pagamento e apresentar-se como um freelancer pronto a ser contratado.",
          quickCheck: [
            { objective: "O6", q: "Um \"recrutador\" oferece um trabalho de introdução de dados mas pede USD 20 por um kit inicial. Qual é o sinal de alerta?", options: ["O trabalho é de introdução de dados", "O recrutador é educado", "O trabalho é a tempo parcial", "Pedem que você pague para trabalhar"], answer: 3, why: "Os clientes verdadeiros pagam-lhe a você; pedir que pague é o sinal clássico de um falso emprego." },
            { objective: "O6", q: "Um cliente envia mais do que o valor combinado e pede que devolva o que sobra depressa. O que é isto?", options: ["Um cliente generoso", "Uma burla do pagamento a mais", "Um bónus da plataforma", "Um reembolso de impostos"], answer: 1, why: "O primeiro pagamento muitas vezes é falso e é anulado depois de você devolver o seu próprio dinheiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer o trabalho e receber o pagamento",
        questions: [
          { objective: "O4", q: "Porque combinar o número de alterações antes de começar?", options: ["Para que alterações sem fim não lhe gastem o tempo sem pagamento", "Para o cliente pagar menos", "Porque as plataformas exigem cinco alterações", "Não é importante"], answer: 0, why: "As alterações combinadas protegem o seu tempo; o trabalho extra tem um novo preço." },
          { objective: "O4", q: "O seu cliente está em Londres e você está em Nairobi. Porque escrever o fuso horário com o prazo?", options: ["É educado", "A hora é diferente, por isso os dois sabem exatamente quando é a entrega", "Faz o trabalho custar mais", "As plataformas proíbem prazos sem ele"], answer: 1, why: "As horas são diferentes entre países; o fuso horário evita confusões." },
          { objective: "O5", q: "O que deve estar no seu registo de pagamentos?", options: ["A sua palavra-passe", "O seu PIN", "Data, cliente, trabalho, valor, moeda e taxas", "A morada privada do cliente"], answer: 2, why: "Estes dados mostram o seu rendimento e ajudam com os impostos." },
          { objective: "O6", q: "Que oferta é mais provável ser verdadeira?", options: ["\"Pague USD 30 para desbloquear tarefas\"", "\"Envie o seu código de acesso para criarmos a sua conta\"", "\"Ganhe USD 500 por dia a pôr gostos em vídeos\"", "Um cliente na plataforma que combina o âmbito e o preço e paga pela plataforma"], answer: 3, why: "O trabalho verdadeiro tem âmbito e preço claros e é pago por meios seguros." },
          { objective: "O6", q: "Alguém quer \"alugar\" a sua conta verificada de freelancer. O que faz?", options: ["Recusa; pode ser usada para fraudes em seu nome", "Aceita por uma pequena taxa", "Partilha só a palavra-passe", "Partilha-a primeiro com um amigo"], answer: 0, why: "A sua conta está ligada à sua identidade; outras pessoas podem usá-la mal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Trabalho Freelancer Online e Trabalho Remoto a partir de África",
    questions: [
      { objective: "O1", q: "O que é um freelancer?", options: ["Uma pessoa que trabalha de graça", "Uma pessoa que faz trabalho pago para clientes, um trabalho de cada vez", "Um funcionário do governo", "O dono de uma plataforma"], answer: 1, why: "Os freelancers vendem os seus serviços trabalho a trabalho a clientes diferentes." },
      { objective: "O1", q: "Qual é uma boa oferta numa linha?", options: ["\"Faço tudo\"", "\"Bom trabalhador, contrate-me\"", "\"Trabalhos online\"", "\"Escrevo descrições de produtos para lojas online que as ajudam a vender\""], answer: 3, why: "Diz o quê, para quem e o resultado." },
      { objective: "O1", q: "Precisa de mais habilidades antes de começar. Qual é uma boa opção gratuita na Nigéria?", options: ["O programa 3MTT", "Uma \"academia\" paga no WhatsApp que promete empregos", "Comprar uma conta verificada", "Uma aplicação de tarefas que pede um depósito"], answer: 0, why: "O 3MTT é um programa de formação do governo; os outros são sinais de alerta." },
      { objective: "O2", q: "O título do perfil deve:", options: ["Mostrar o seu número de telefone", "Dizer o seu serviço em poucas palavras", "Contar a história completa da sua vida", "Mostrar o seu número de identificação"], answer: 1, why: "Um título curto diz aos clientes, num instante, o que você faz." },
      { objective: "O2", q: "Qual é uma amostra de trabalho honesta?", options: ["Um panfleto que você fez para uma loja imaginária", "O trabalho de um designer famoso", "A redação de um amigo", "Um ficheiro privado de um cliente partilhado sem autorização"], answer: 0, why: "As amostras feitas por você são uma prova honesta." },
      { objective: "O2", q: "Como pode poupar dados ao fazer o seu perfil?", options: ["Enviar fotografias enormes", "Reescrevê-lo online muitas vezes", "Escrevê-lo primeiro sem internet e depois colá-lo de uma vez", "Usar só videochamadas"], answer: 2, why: "Escrever sem internet e reduzir as imagens poupa dados caros." },
      { objective: "O3", q: "Que tamanho deve ter, em geral, uma primeira proposta?", options: ["Duas páginas", "Uma palavra", "O mais longa possível", "Menos de cerca de 150 palavras"], answer: 3, why: "As propostas curtas são lidas; as longas são ignoradas." },
      { objective: "O3", q: "O que deve estar numa proposta?", options: ["Uma amostra relacionada e uma pergunta útil", "O PIN do seu banco", "Um pedido de pagamento adiantado de uma taxa", "Uma cópia da sua identificação"], answer: 0, why: "Uma prova e uma boa pergunta mostram que sabe fazer o trabalho." },
      { objective: "O3", q: "Onde se encontram muitas vezes os primeiros clientes?", options: ["Só no estrangeiro", "Só num site", "Negócios locais, ONG, escolas e igrejas, além das plataformas", "Em lado nenhum sem pagar a um recrutador"], answer: 2, why: "Muitos freelancers começam com pessoas e negócios perto deles." },
      { objective: "O4", q: "O que quer dizer \"âmbito\"?", options: ["O país do cliente", "Exatamente o que vai entregar", "O seu preço", "A taxa da plataforma"], answer: 1, why: "O âmbito é o trabalho exato que foi combinado." },
      { objective: "O4", q: "O cliente pede um novo design que não estava no âmbito combinado. O que faz?", options: ["Faz de graça, muitas vezes", "Ignora a mensagem", "Cancela o trabalho", "Oferece com educação um novo preço pelo trabalho extra"], answer: 3, why: "O trabalho extra fora do âmbito é trabalho novo com um novo preço." },
      { objective: "O4", q: "Qual é um bom plano de reserva para falhas de eletricidade?", options: ["Carregar um powerbank e guardar o trabalho na nuvem muitas vezes", "Esperar que a eletricidade não falhe", "Trabalhar só na noite anterior", "Não dizer nada ao cliente"], answer: 0, why: "Um powerbank, guardar na nuvem e um lugar de reserva ajudam-no a entregar a tempo." },
      { objective: "O5", q: "Porque manter o trabalho e o pagamento dentro de uma plataforma?", options: ["É mais lento", "A proteção de pagamento dela só funciona lá", "Não tem nenhuma taxa", "O cliente prefere"], answer: 1, why: "Sair da plataforma tira a proteção e é um caminho comum das burlas." },
      { objective: "O5", q: "Onde fica a saber as formas de pagamento e as taxas atuais de uma plataforma?", options: ["Num comentário do YouTube", "No palpite de um amigo", "No centro de ajuda da própria plataforma", "Com o cliente"], answer: 2, why: "As formas e as taxas são diferentes em cada país e mudam; as páginas da própria plataforma estão atualizadas." },
      { objective: "O5", q: "Quando deve registar um pagamento?", options: ["No prazo de uma semana", "No fim do ano", "Nunca", "Só os pagamentos grandes"], answer: 0, why: "Registar cedo mantém os seus registos completos para planear e para os impostos." },
      { objective: "O5", q: "No Gana, quem lhe pode falar dos impostos sobre o seu rendimento online?", options: ["O seu cliente", "Um vídeo do TikTok", "A Ghana Revenue Authority ou um consultor fiscal", "O robô de conversa da plataforma"], answer: 2, why: "A autoridade tributária do país define e explica as regras dos impostos." },
      { objective: "O6", q: "Qual é um sinal de alerta de falso emprego?", options: ["Âmbito e preço claros", "Pedem que pague uma inscrição ou um kit inicial", "Pagamento pela plataforma", "Um prazo com fuso horário"], answer: 1, why: "Os clientes verdadeiros nunca pedem que pague para trabalhar." },
      { objective: "O6", q: "Um \"trabalho\" pede que deposite dinheiro para desbloquear tarefas que pagam mais. Isto é:", options: ["Um trabalho normal", "Uma taxa de formação", "Um imposto", "Uma burla das tarefas"], answer: 3, why: "Depósitos para desbloquear tarefas ou ganhos são uma burla comum." },
      { objective: "O6", q: "O que protege as suas contas de freelancer e de email?", options: ["Uma só palavra-passe para tudo", "Partilhar códigos com clientes", "Palavras-passe fortes e diferentes e verificação em dois passos", "Alugar a sua conta a outras pessoas"], answer: 2, why: "Palavras-passe diferentes e uma segunda verificação ao entrar travam a maioria dos roubos de contas." },
      { objective: "O6", q: "Um recrutador pede uma fotografia da sua identificação e a palavra-passe do seu email \"para o verificar\". O que faz?", options: ["Recusa e denuncia", "Envia as duas", "Envia só a palavra-passe", "Envia só a identificação"], answer: 0, why: "Os clientes verdadeiros nunca precisam da sua palavra-passe; pedidos de identificação de desconhecidos são um risco de fraude." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Oferta clara", objective: "O1", notYet: "A oferta é vaga (\"Faço tudo online\").", meets: "Um serviço, dizendo o que faz, para quem e o que o cliente recebe.", exceeds: "A oferta indica um tipo concreto de cliente e um resultado ou prazo de entrega claro." },
      { name: "Perfil e amostras", objective: "O2", notYet: "Sem título nem descrição, sem amostras, ou com informações privadas à vista.", meets: "Título, descrição curta e duas ou três amostras feitas pelo aluno, sem informações privadas.", exceeds: "As amostras correspondem bem à oferta e a descrição inclui uma prova (formação ou um trabalho anterior)." },
      { name: "Proposta", objective: "O3", notYet: "Longa, copiada ou não fala da necessidade do cliente.", meets: "Menos de 150 palavras, escrita para o anúncio: a necessidade, como, uma amostra, uma pergunta.", exceeds: "A pergunta mostra que pensou a sério no trabalho, e a proposta combina com o tom do cliente." },
      { name: "Combinar o trabalho", objective: "O4", notYet: "Sem âmbito nem prazo por escrito.", meets: "Uma mensagem com âmbito, preço, prazo com fuso horário e alterações, mais um plano de reserva para falhas de eletricidade ou de dados.", exceeds: "Também diz como será cobrado o trabalho extra." },
      { name: "Pagamento e registos", objective: "O5", notYet: "Sem forma de pagamento nem tabela de registos.", meets: "Uma forma de pagamento segura (dentro da plataforma, ou combinada antes com um cliente conhecido), uma tabela de registos e onde perguntar sobre impostos.", exceeds: "A forma de pagamento foi verificada na página de ajuda da própria plataforma." },
      { name: "Atenção às burlas", objective: "O6", notYet: "Menos de quatro sinais de alerta, ou planeia pagar uma taxa para conseguir trabalho.", meets: "Indica os seis sinais de alerta de falsos empregos e diz que a verificação em dois passos está ligada.", exceeds: "Junta uma oferta falsa real que o aluno viu e como a reconheceu." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que enviam pelo menos três propostas em 30 dias",
      "Alunos que dizem ter feito o primeiro trabalho online pago em 90 dias",
      "Alunos que dizem ter recusado um falso emprego ou uma burla de pagamento em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com alguns dados, e um endereço de email",
      "Uma aplicação de notas ou papel para preparar o perfil e a proposta",
      "Ferramentas gratuitas para as amostras, como o Google Docs ou Sheets, o Canva ou o Microsoft 365",
      "Cerca de 75 minutos no total, em sessões curtas, mais tempo para fazer as amostras"
    ],
    facilitatorNotes: [
      "Funciona bem em centros de jovens, centros Ajira, grupos do 3MTT, bibliotecas e grupos de jovens de igrejas ou mesquitas: façam o teste inicial juntos e depois um capítulo por sessão.",
      "Leve anúncios de trabalho de exemplo impressos para os alunos praticarem propostas sem gastar dados.",
      "Não recomende \"academias de freelancers\" pagas nem vendedores de contas; indique formação gratuita e oficial.",
      "Nunca peça aos alunos para partilhar palavras-passe, códigos, documentos de identificação ou dados de pagamento na aula.",
      "Junte os alunos aos pares para reverem as propostas um do outro com a grelha de avaliação antes de as enviarem.",
      "Antes da sessão, veja as páginas de ajuda atuais de cada plataforma sobre pagamentos para o seu país; elas mudam."
    ]
  }
};
