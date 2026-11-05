"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-cooperatives-markets.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const ICA = { name: "Aliança Cooperativa Internacional (ICA): a identidade, os valores e os princípios cooperativos", url: "https://ica.coop/en/cooperatives/cooperative-identity" };
const KE_ACT = { name: "Kenya Law: Lei das Sociedades Cooperativas (Co-operative Societies Act; registo através do Comissário para o Desenvolvimento Cooperativo)", url: "https://new.kenyalaw.org/akn/ke/act/1997/12" };
const NG_ACT = { name: "Lei das Sociedades Cooperativas da Nigéria (Diretores Federais e Estaduais de Cooperativas; estatutos; auditoria anual)", url: "https://placng.org/lawsofnigeria/print.php?sn=356" };
const GH_COOP = { name: "Serviço de Informação do Gana (ISD): o Governo começa a reforma do setor cooperativo (Departamento de Cooperativas)", url: "https://www.isd.gov.gh/government-begins-reform-of-cooperative-sector-with-new-policy-and-legal-framework/" };
const KAMIS = { name: "Sistema de Informação de Mercados Agrícolas do Quénia (KAMIS), Ministério da Agricultura", url: "https://kamis.kilimo.go.ke" };

module.exports = {
  id: "agri-cooperatives-markets-pt",
  lang: "pt",
  translationOf: "agri-cooperatives-markets",
  category: "Agriculture (Africa)",
  name: "Cooperativas de Agricultores e Chegar ao Mercado",
  skills: "Explicar porque os agricultores se juntam em grupo, Escrever os estatutos e registar um grupo, Dirigir reuniões e manter os registos do grupo, Juntar a produção e vender em conjunto, Verificar os preços de mercado pelo telefone, Ler um contrato com um comprador",
  outcome: "ajudar a criar ou a fortalecer um grupo de agricultores: aprovar os seus estatutos, saber onde registá-lo, dirigir reuniões e manter registos claros, juntar a produção dos membros e vendê-la em conjunto a um preço verificado, e ler um contrato com um comprador antes de alguém o assinar.",
  about: [
    "Este curso é para pequenos agricultores e agricultores em crescimento, líderes de grupos de agricultores e de cooperativas, e jovens que trabalham no agronegócio no Quénia, na Nigéria, no Gana e em toda a África. Sozinho, um agricultor com cinco sacos de milho ou algumas caixas de tomate aceita o preço que o comerciante oferece. Em grupo, é possível comprar insumos mais baratos, cumprir a encomenda de um grande comprador e negociar um preço melhor.",
    "O Capítulo 1 trata de construir o grupo: porque os agricultores se juntam, como formar um grupo de produtores ou uma cooperativa (estatutos e registo) e como dirigi-lo bem, com reuniões e registos. O Capítulo 2 trata de chegar ao mercado: juntar a produção e vender em conjunto, verificar os preços pelo telefone e fazer contratos com compradores.",
    "As leis das cooperativas, os serviços de registo e as taxas são diferentes em cada país e mudam com o tempo. Este curso diz quais os serviços a contactar; confirme sempre com eles as regras atuais antes de registar. Cada lição dura cerca de cinco minutos e termina com uma tarefa que pode fazer com o seu grupo. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de venda do grupo, de uma página, para uma cultura (a do seu grupo, ou um exemplo como 25 produtores de milho em Bungoma, um grupo de mulheres que produz tomate em Kaduna, ou um grupo de cacau ou de feijão-nhemba perto de Tamale): o nome e o objetivo do grupo, cinco regras principais dos estatutos, onde registaria o grupo e o que tem de confirmar, os registos que vai manter, como os membros vão entregar, classificar e receber o pagamento, os preços que encontrou em pelo menos três fontes, e os seis termos do contrato que vai verificar antes de assinar com um comprador.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores em crescimento, líderes de grupos de agricultores e de cooperativas, e jovens que trabalham no agronegócio no Quénia, na Nigéria, no Gana e em toda a África, que querem comprar e vender em conjunto.",
    startingPoint: "A maioria vende pequenas quantidades sozinha, à porta da machamba, e aceita o preço do comerciante. Alguns fazem parte de um grupo informal ou de um grupo de poupança (chama). Poucos têm estatutos escritos, mantêm registos do grupo, organizaram um dia de recolha, verificaram preços em várias fontes ou leram um contrato com um comprador antes de assinar.",
    gap: "Sozinhos, os agricultores têm pouco poder para negociar, e muitos grupos falham por falta de confiança, maus registos, vendas paralelas e pagamentos atrasados. Um grupo bem dirigido, com regras claras, registos, preços verificados e contratos escritos, pode cumprir as encomendas de grandes compradores, comprar insumos mais baratos e ganhar mais para os membros.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo de grupo e de mercado é explicado",
      "Aparelhos: um telefone simples para SMS, WhatsApp, consulta de preços e calculadora; livros de registo em papel",
      "As leis, os serviços e as taxas das cooperativas são diferentes em cada país e mudam: os alunos confirmam no serviço de cooperativas",
      "Dinheiro e privacidade: duas pessoas aprovam os pagamentos; nunca partilhe PINs nem dados bancários com ferramentas de IA ou com quem liga",
      "Sem aconselhamento jurídico: os contratos grandes são verificados pelo serviço de cooperativas, pela extensão rural ou por um advogado"
    ],
    prerequisites: "Nenhum. O curso \"Manuseamento e Armazenamento Pós-Colheita\" ajuda na classificação e na qualidade."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para a sua machamba e os seus vizinhos", action: "fazer a lista do que um grupo pode fazer e um agricultor sozinho não pode, e dos riscos a gerir", standard: "indicando pelo menos três vantagens e três razões comuns por que os grupos falham" },
    { id: "O2", condition: "Para um grupo de agricultores novo ou já existente", action: "escrever um rascunho das regras principais dos estatutos e dizer o nome do serviço onde o grupo se registaria", standard: "com pelo menos cinco regras principais e os passos atuais confirmados no serviço" },
    { id: "O3", condition: "Para uma reunião do grupo e o seu dinheiro", action: "dirigir uma reunião com ordem de trabalhos e ata, e criar os registos básicos do grupo", standard: "com registo de membros, livro de caixa, livro de entregas e registo de pagamentos, e duas pessoas a aprovar os pagamentos" },
    { id: "O4", condition: "Num dia de recolha", action: "verificar, classificar, pesar, registar e pagar a produção de cada membro", standard: "pesando à frente do membro, dando um recibo e pagando de acordo com os registos" },
    { id: "O5", condition: "Antes de vender", action: "comparar preços de pelo menos três fontes e calcular o preço de uma oferta na sua machamba", standard: "descontando o transporte, as taxas e as perdas, e reconhecendo ofertas que são burlas" },
    { id: "O6", condition: "Com um contrato de um comprador", action: "verificar os termos principais antes de o grupo assinar", standard: "incluindo produto, classe, quantidade, preço, entrega, controlo de qualidade, pagamento, incumprimento e conflitos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Construir um grupo de agricultores forte",
      lessons: [
        {
          objectives: ["O1"],
          title: "Porque os agricultores se juntam em grupo",
          minutes: 4,
          goal: "Fazer a lista do que um grupo pode fazer pela sua machamba e você sozinho não pode, e dos riscos a gerir.",
          text: [
            "A Aliança Cooperativa Internacional (ICA, a organização mundial das cooperativas) define uma cooperativa como uma associação de pessoas que se juntam de livre vontade para responder a necessidades económicas, sociais e culturais comuns, através de uma empresa que possuem em conjunto e controlam de forma democrática. Os membros são ao mesmo tempo os donos e os utilizadores.",
            "Os grupos ajudam os agricultores a: comprar semente, adubo e ração em grande quantidade a preços mais baixos; juntar a produção em cargas de camião que os grandes compradores querem; negociar preços melhores; partilhar armazéns, secadores, transporte e equipamento; obter formação, certificação e crédito, que os credores dão mais facilmente a um grupo com registos; e falar a uma só voz com o governo e com os compradores.",
            "Os grupos também falham. As razões comuns são falta de confiança, líderes que tomam conta de tudo, maus registos, membros que vendem a outros compradores depois de o grupo ter fechado um negócio, e pagamentos atrasados. O resto deste curso ensina a evitar isto. Há desde grupos informais de entreajuda ou de produtores até sociedades cooperativas registadas; um grupo pode começar de forma informal e registar-se mais tarde."
          ],
          words: [["Cooperativa", "uma empresa que pertence aos seus membros e é controlada por eles, que também usam os seus serviços."], ["Grupo de produtores", "agricultores que produzem a mesma cultura e trabalham juntos, registados ou não."], ["Compra em grande quantidade", "comprar muito em conjunto para ter um preço mais baixo."], ["Venda paralela", "um membro vende a outro comprador depois de o grupo ter combinado vender em conjunto."]],
          slides: [
            { title: "O que é uma cooperativa (ICA)", bullets: ["Pessoas que se juntam de livre vontade", "Uma empresa que possuem em conjunto", "Controlada de forma democrática: os membros são donos e utilizadores"] },
            { title: "O que os grupos podem fazer", bullets: ["Comprar insumos em grande quantidade, mais baratos", "Encher camiões para grandes compradores; negociar", "Partilhar armazéns e transporte; ter formação e crédito"] },
            { title: "Porque os grupos falham", bullets: ["Falta de confiança; líderes que tomam conta de tudo", "Maus registos; pagamentos atrasados", "Vendas paralelas depois de um negócio do grupo"] }
          ],
          sources: [ICA],
          tryIt: "Escreva três coisas que um grupo pode fazer pela sua machamba e você sozinho não pode, e o risco que mais o preocupa. Pergunte a dois vizinhos o que eles querem de um grupo e escreva as respostas.",
          youCanNow: "explicar o que é uma cooperativa, o que um grupo pode fazer pelos agricultores e as principais razões por que os grupos falham.",
          quickCheck: [
            { objective: "O1", q: "Que tipos de grupos de agricultores existem?", options: ["Desde grupos informais de entreajuda ou de produtores até sociedades cooperativas registadas", "Só empresas registadas", "Só serviços do governo", "Só grupos com mais de 1000 agricultores"], answer: 0, why: "Há desde grupos informais de entreajuda ou de produtores até cooperativas registadas." },
            { objective: "O1", q: "Os seus vizinhos querem vender milho em conjunto, mas ainda não estão prontos para se registar. O que podem fazer?", options: ["Esperar até poderem registar-se antes de fazer qualquer coisa", "Cada um vender sozinho para sempre", "Pedir a um comerciante para ser o líder", "Começar como grupo informal e registar-se mais tarde"], answer: 3, why: "Um grupo pode começar de forma informal e registar-se mais tarde." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Formar o grupo: estatutos e registo",
          minutes: 6,
          goal: "Escrever um rascunho das regras principais dos estatutos de um grupo e saber onde registá-lo.",
          text: [
            "Comece com pessoas que produzem a mesma cultura ou precisam do mesmo serviço, vivem perto o suficiente para se reunirem e confiam umas nas outras. Combinem um objetivo claro, como \"vender o nosso milho em conjunto e comprar insumos em grande quantidade\". Façam uma primeira reunião, escrevam a ata e escolham uma comissão provisória.",
            "Os estatutos são as regras escritas do grupo. Normalmente tratam de: nome, morada e objetivo; quem pode entrar e como; joias de entrada e quotas-partes; reuniões, quórum e votação (as cooperativas usam um membro, um voto); a direção, os seus poderes e a duração dos mandatos; como o dinheiro é guardado e verificado; como se divide o excedente; e como se castigam os membros que não cumprem as regras. O serviço de cooperativas muitas vezes tem modelos de estatutos que pode adaptar.",
            "O registo dá ao grupo estatuto legal para ter bens, abrir uma conta bancária em nome do grupo, assinar contratos e pedir empréstimos. As regras são diferentes em cada país. No Quénia, as sociedades registam-se ao abrigo da Lei das Sociedades Cooperativas através do Comissário para o Desenvolvimento Cooperativo, começando no serviço de cooperativas do condado. Na Nigéria, a Lei das Sociedades Cooperativas diz que uma sociedade primária precisa de pelo menos dez membros qualificados e faz o pedido, com os seus estatutos, ao Diretor Estadual de Cooperativas. No Gana, os grupos registam-se no Departamento de Cooperativas, através do seu serviço distrital. As taxas, os formulários e os passos mudam, por isso visite ou ligue para o serviço antes de fazer o pedido."
          ],
          steps: ["Combinem o objetivo do grupo numa frase.", "Façam uma primeira reunião; escrevam a ata e os nomes dos membros.", "Escolham uma comissão provisória: presidente, secretário, tesoureiro.", "Peçam modelos de estatutos ao serviço de cooperativas e adaptem-nos.", "Aprovem as regras principais numa reunião de membros e registem a votação.", "Vão ao serviço de cooperativas: peçam os formulários, as taxas e os passos atuais."],
          words: [["Estatutos", "as regras escritas que um grupo aceita cumprir."], ["Quórum", "o número mínimo de membros que tem de estar presente para que as decisões de uma reunião contem."], ["Um membro, um voto", "cada membro tem um voto, seja qual for o número de quotas-partes que tem."], ["Registo", "o reconhecimento oficial que dá ao grupo estatuto legal."]],
          slides: [
            { title: "Começar bem", bullets: ["Mesma cultura ou necessidade; perto; confiança", "Um objetivo numa frase", "Primeira reunião, ata, comissão provisória"] },
            { title: "Os estatutos tratam de", bullets: ["Objetivo, membros, joias e quotas-partes", "Reuniões, quórum, um membro um voto", "Direção, dinheiro, excedente, disciplina"] },
            { title: "Onde registar", bullets: ["Quénia: serviço de cooperativas do condado / Comissário para o Desenvolvimento Cooperativo", "Nigéria: Diretor Estadual de Cooperativas", "Gana: serviço distrital do Departamento de Cooperativas"] },
            { title: "Antes de fazer o pedido", bullets: ["Regras, formulários e taxas mudam", "Visite ou ligue primeiro para o serviço", "Peça modelos de estatutos"] }
          ],
          sources: [KE_ACT, NG_ACT, GH_COOP],
          tryIt: "Escreva cinco regras dos estatutos do seu grupo: quem pode entrar, a joia de entrada ou a quota-parte, de quanto em quanto tempo se reúnem e o quórum, como funcionam os votos, e o que acontece se um membro fizer vendas paralelas. Depois encontre a morada ou o número de telefone do serviço de cooperativas mais perto de si.",
          youCanNow: "escrever um rascunho das regras principais dos estatutos de um grupo de agricultores e saber onde registá-lo no seu país.",
          quickCheck: [
            { objective: "O2", q: "O que o registo dá a um grupo de agricultores?", options: ["Um preço garantido", "Insumos de graça", "Estatuto legal para ter bens, abrir uma conta bancária, assinar contratos e pedir empréstimos", "Um salário do governo"], answer: 2, why: "O registo dá ao grupo estatuto legal para ter bens, ter conta no banco, assinar contratos e pedir empréstimos." },
            { objective: "O2", q: "O seu grupo está a escrever os estatutos e não sabe por onde começar. O que faz?", options: ["Copia as regras de uma empresa da internet", "Pede ao serviço de cooperativas modelos de estatutos para adaptar", "Deixa o presidente escrevê-los sozinho", "Não faz estatutos"], answer: 1, why: "Os serviços de cooperativas muitas vezes têm modelos de estatutos que os grupos podem adaptar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dirigir o grupo: reuniões e registos",
          minutes: 5,
          goal: "Dirigir uma reunião curta com ordem de trabalhos e ata, e criar os registos básicos do grupo.",
          text: [
            "Boas reuniões criam confiança. Envie a data e a ordem de trabalhos antes (uma SMS ou uma mensagem de WhatsApp serve), comece a horas, confirme o quórum, siga a ordem de trabalhos, deixe todos os membros falar, votem as decisões e escreva a ata: quem veio, o que se decidiu e quem faz o quê até quando. Leia a ata anterior no início de cada reunião. Façam uma assembleia geral anual, onde os membros ouvem as contas e elegem a direção.",
            "Os registos são a memória do grupo e a sua prova perante compradores, bancos e o serviço de cooperativas. Mantenha pelo menos: um registo de membros (nomes, contactos, quotas-partes pagas), um livro de caixa com todo o dinheiro que entra e sai, com recibos, um livro de entregas que mostra o que cada membro entregou, a classe e o peso, e um registo de pagamentos que mostra quanto cada membro recebeu. A Lei das Sociedades Cooperativas da Nigéria, por exemplo, exige que as contas de uma sociedade registada sejam auditadas todos os anos.",
            "Proteja o dinheiro: use uma conta do grupo no banco ou em dinheiro móvel (mobile money), faça com que duas pessoas assinem ou aprovem cada pagamento, dê recibo por cada xelim, naira ou cedi, e leia as contas em voz alta nas reuniões. Uma folha de cálculo no telefone ou uma aplicação gratuita pode guardar os registos, mas guarde também uma cópia em papel, e nunca partilhe PINs nem palavras-passe."
          ],
          steps: ["Envie a data e a ordem de trabalhos antes.", "Confirme o quórum; siga a ordem de trabalhos; votem as decisões.", "Escreva a ata: quem veio, o que se decidiu, quem faz o quê até quando.", "Crie quatro registos: membros, livro de caixa, entregas, pagamentos.", "Use uma conta do grupo com duas pessoas que assinam; dê recibos.", "Leia as contas em voz alta em cada reunião; faça uma auditoria uma vez por ano."],
          words: [["Ordem de trabalhos", "a lista dos assuntos de uma reunião."], ["Ata", "o registo escrito do que uma reunião decidiu."], ["Assembleia geral anual (AGA)", "a reunião anual de todos os membros para ouvir as contas e eleger os líderes."], ["Auditoria", "uma verificação independente das contas do grupo."], ["Signatário", "uma pessoa autorizada a aprovar pagamentos de uma conta."]],
          slides: [
            { title: "Boas reuniões", bullets: ["Ordem de trabalhos enviada antes; começar a horas", "Confirmar o quórum; todos falam; votar", "Ata: decisões, quem faz o quê até quando"] },
            { title: "Quatro registos básicos", bullets: ["Registo de membros", "Livro de caixa com recibos", "Livro de entregas e registo de pagamentos"] },
            { title: "Proteger o dinheiro", bullets: ["Conta do grupo; dois signatários", "Recibo por cada pagamento", "Ler as contas em voz alta; auditoria anual"] }
          ],
          sources: [NG_ACT],
          tryIt: "Escreva uma ordem de trabalhos com quatro pontos para a próxima reunião do seu grupo. Depois desenhe as colunas de um livro de entregas: data, nome do membro, cultura, classe, peso, recebido por.",
          youCanNow: "dirigir uma reunião do grupo com ordem de trabalhos e ata e manter os registos que criam confiança.",
          quickCheck: [
            { objective: "O3", q: "O que acontece numa assembleia geral anual?", options: ["O comprador decide o preço", "Os membros ouvem as contas e elegem a direção", "O grupo vende o seu armazém", "Só o presidente fala"], answer: 1, why: "Na AGA, os membros ouvem as contas e elegem a direção." },
            { objective: "O3", q: "Você preside à reunião de hoje e há quórum. O que faz primeiro?", options: ["Lê a ata da última reunião", "Pede dinheiro", "Salta a ordem de trabalhos", "Termina a reunião mais cedo"], answer: 0, why: "Ler a ata anterior no início mantém todos no caminho certo e cria confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Construir um grupo de agricultores forte",
        questions: [
          { objective: "O1", q: "Numa cooperativa, quem é dono da empresa e a controla?", options: ["O comprador", "O governo", "Os membros", "Só o presidente"], answer: 2, why: "Os membros são donos de uma cooperativa, controlam-na e usam-na." },
          { objective: "O1", q: "Um membro vende a outro comerciante depois de o grupo ter fechado um negócio. Isto chama-se:", options: ["Compra em grande quantidade", "Venda paralela", "Agregação", "Auditoria"], answer: 1, why: "A venda paralela quebra os negócios do grupo e é uma razão comum por que os grupos falham." },
          { objective: "O2", q: "Na Nigéria, onde uma sociedade cooperativa primária faz o pedido de registo?", options: ["Ao Diretor Estadual de Cooperativas", "À polícia", "À federação de futebol", "A qualquer banco"], answer: 0, why: "A Lei das Sociedades Cooperativas manda os pedidos, com os estatutos, para o Diretor de Cooperativas." },
          { objective: "O3", q: "O que é o quórum?", options: ["A conta bancária do grupo", "Um tipo de cultura", "A pausa para o chá na reunião", "O número mínimo de membros necessário para que as decisões contem"], answer: 3, why: "Sem quórum, as decisões de uma reunião não são válidas." },
          { objective: "O3", q: "Que prática protege melhor o dinheiro do grupo?", options: ["Uma pessoa guarda todo o dinheiro em casa", "Sem recibos, para poupar papel", "Dois signatários, recibos e contas lidas em voz alta", "Partilhar o PIN com todos os membros"], answer: 2, why: "Duas pessoas a aprovar, recibos e contas abertas tornam os roubos e os erros mais difíceis." }
        ]
      }
    },
    {
      name: "Capítulo 2: Chegar ao mercado em conjunto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Agregação e venda em conjunto",
          minutes: 5,
          goal: "Organizar um dia de recolha em que a produção dos membros é verificada, pesada, registada e paga de forma justa.",
          text: [
            "Agregação quer dizer juntar as pequenas quantidades de muitos membros num só lote, grande e igual. Os grandes compradores, como fábricas de transformação, moageiras, escolas, supermercados e exportadores, querem quantidades regulares de uma só qualidade, entregues a tempo. Um grupo que consegue encher um camião com produção limpa, seca e classificada pode vender-lhes e ganhar mais do que à porta da machamba.",
            "Organize um ponto ou um dia de recolha com regras claras: a qualidade que o comprador quer (por exemplo milho seco, limpo e escolhido, sem passar da humidade máxima do comprador), uma balança de confiança e um registo de cada entrega. Verifique e classifique a produção de cada membro, pese-a à frente dele, escreva-a no livro de entregas e dê um recibo. Guarde o lote em segurança até o comprador o vir buscar.",
            "Pague aos membros de acordo com os registos: o peso vezes o preço combinado para a sua classe, menos qualquer taxa do grupo combinada para transporte, armazenamento ou sacos, tudo decidido antes e escrito nos estatutos ou na ata. Pague a tempo, por dinheiro móvel ou pelo banco sempre que possível. Um pagamento rápido, justo e transparente é a melhor defesa contra as vendas paralelas."
          ],
          steps: ["Combine as regras de qualidade do comprador e informe todos os membros antes.", "Marque o dia e o local de recolha e arranje uma balança de confiança.", "Verifique, classifique e pese cada entrega à frente do membro.", "Escreva-a no livro de entregas; dê um recibo.", "Guarde o lote em segurança; entreguem ao comprador em conjunto.", "Pague a cada membro de acordo com os registos, menos as taxas combinadas, a tempo."],
          words: [["Agregação", "juntar muitas pequenas quantidades num só lote grande."], ["Ponto de recolha", "um local onde os membros levam a produção para ser verificada e registada."], ["Lote", "uma quantidade de produção do mesmo tipo e da mesma classe."]],
          slides: [
            { title: "Porquê juntar a produção", bullets: ["Os grandes compradores querem quantidade, qualidade, prazos", "Encher um camião com uma só classe", "Preço melhor do que à porta da machamba"] },
            { title: "Dia de recolha", bullets: ["Regras de qualidade do comprador conhecidas antes", "Classificar e pesar à frente do membro", "Registar e dar um recibo"] },
            { title: "Pagar de forma justa e rápida", bullets: ["Peso x preço da classe", "Menos as taxas combinadas antes", "A tempo, por dinheiro móvel ou banco"] }
          ],
          tryIt: "Planeie um dia de recolha para o seu grupo: data, local, balança, regras de qualidade do comprador, quem regista e a taxa do grupo por saco ou por quilo, combinada antes. Escreva como e quando os membros vão receber.",
          youCanNow: "organizar um dia de recolha justo e pagar aos membros de acordo com registos claros.",
          quickCheck: [
            { objective: "O4", q: "O que é um ponto ou um dia de recolha?", options: ["Uma festa para os membros", "Uma agência bancária", "O escritório de um comprador", "Um local e um dia em que os membros levam a produção para ser verificada, pesada e registada"], answer: 3, why: "No ponto de recolha, a produção é verificada, classificada, pesada, registada e guardada até o comprador a vir buscar." },
            { objective: "O4", q: "O milho de um membro está mais húmido do que o comprador aceita. O que faz no ponto de recolha?", options: ["Mistura-o com milho seco para ninguém notar", "Paga o dobro ao membro", "Não o junta ao lote até estar seco de acordo com a exigência do comprador", "Esconde-o no fundo do camião"], answer: 2, why: "O lote tem de cumprir a qualidade do comprador, por isso a produção é verificada e classificada antes de ser aceite." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar os preços de mercado pelo telefone",
          minutes: 5,
          goal: "Encontrar preços em pelo menos três fontes e calcular quanto uma oferta vale de facto na sua machamba.",
          text: [
            "Nunca venda sem saber o preço. Pergunte a pelo menos três compradores, ouça as informações de mercado na rádio e consulte os serviços oficiais de informação de mercado. No Quénia, o sistema KAMIS do Ministério da Agricultura publica os preços por grosso, a retalho e à porta da machamba de muitas culturas e animais, de mercados em todos os condados. Na Nigéria e no Gana, pergunte ao seu serviço de extensão rural, à associação do seu produto ou à união de cooperativas que serviço de preços cobre a sua cultura.",
            "Compare o que é comparável: preço por quilo ou por saco da mesma classe, no mesmo local. Um preço mais alto num mercado longe pode valer menos depois do transporte, da carga, das taxas de mercado e das perdas. Calcule o preço na sua machamba: o preço de mercado menos todos os custos de levar a produção até lá.",
            "O telefone ajuda. Mantenha um registo simples de preços todas as semanas, partilhe-o no WhatsApp do grupo e use uma calculadora ou um assistente de IA para comparar ofertas. Cuidado com as burlas: quem lhe pede para pagar uma taxa para receber um preço alto \"garantido\", ou pede o PIN do seu dinheiro móvel, não é um comprador verdadeiro."
          ],
          steps: ["Obtenha preços de pelo menos três fontes: compradores, rádio, serviço oficial.", "Confirme que cada preço é para a mesma cultura, classe e unidade.", "Desconte o transporte, a carga, as taxas e as perdas para ter o preço na machamba.", "Registe os preços todas as semanas e partilhe-os com o grupo.", "Ignore quem lhe pede uma taxa ou um PIN para lhe dar um preço."],
          words: [["Preço à porta da machamba", "o preço que um comprador lhe paga na sua machamba."], ["Preço por grosso", "o preço de grandes quantidades vendidas a comerciantes ou lojas."], ["Serviço de informação de mercado", "um serviço que publica os preços de mercado atuais."]],
          slides: [
            { title: "Pelo menos três fontes", bullets: ["Vários compradores", "Informações de mercado na rádio", "Serviços oficiais (Quénia: KAMIS)"] },
            { title: "Comparar o que é comparável", bullets: ["Mesma cultura, classe e unidade", "Preço de mercado menos transporte e taxas", "= o que vale na sua machamba"] },
            { title: "Usar bem o telefone", bullets: ["Registo semanal de preços; partilhar com o grupo", "Calculadora ou IA para comparar ofertas", "Compradores verdadeiros não pedem taxas nem PINs"] }
          ],
          sources: [KAMIS],
          tryIt: "Esta semana, obtenha o preço de uma cultura em três fontes e escreva-os numa tabela: fonte, preço, classe, unidade, local. Calcule o preço na sua machamba das duas melhores ofertas depois dos custos de transporte. Que oferta paga mais de facto?",
          youCanNow: "verificar preços em várias fontes e calcular que oferta paga mais de facto.",
          quickCheck: [
            { objective: "O5", q: "O que quer dizer \"comparar o que é comparável\" nos preços?", options: ["Comparar o preço por quilo ou por saco da mesma classe, no mesmo local", "Comparar só os preços mais altos", "Comparar este ano com há dez anos", "Comparar milho com tomate"], answer: 0, why: "Os preços só se comparam de forma justa para a mesma classe, unidade e local." },
            { objective: "O5", q: "O seu grupo quer acompanhar os preços todas as semanas. O que faz?", options: ["Pergunta a um comerciante uma vez por época", "Mantém um registo semanal simples de preços e partilha-o no WhatsApp do grupo", "Adivinha a partir do ano passado", "Espera que o comprador lhe diga"], answer: 1, why: "Um registo semanal de preços partilhado no grupo ajuda os membros a saber o preço antes de venderem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Contratos com compradores",
          minutes: 6,
          goal: "Ler um contrato com um comprador e verificar os termos principais antes de o grupo assinar.",
          text: [
            "Um contrato é um acordo escrito entre o grupo e um comprador. Um bom contrato dá um mercado seguro e um preço conhecido; um mau contrato pode deixar o grupo com produção que ninguém vem buscar, ou com dinheiro que nunca chega. Faça cada negócio por escrito, mesmo com um comprador que conhece.",
            "Verifique estes termos: que produto e que classe; quanto e quando; o preço, ou exatamente como vai ser fixado (por exemplo, o preço de mercado no dia da entrega, mais ou menos um valor); onde é a entrega e quem paga o transporte; como se verifica a qualidade e o que acontece à produção rejeitada; quando e como se faz o pagamento; o que acontece se a colheita falhar ou se o comprador não vier buscar; e como se resolvem os conflitos.",
            "Se alguma parte não estiver clara, peça ao comprador para a explicar por escrito. Leia o contrato em voz alta numa reunião de membros para que todos entendam os seus deveres, incluindo não fazer vendas paralelas. Peça ao serviço de cooperativas, ao extensionista ou a um advogado para verificar os contratos grandes. Um assistente de IA pode explicar palavras difíceis com linguagem simples, mas nunca escreva nele os dados bancários nem os PINs do grupo, e ele não substitui o aconselhamento jurídico."
          ],
          steps: ["Peça a oferta por escrito.", "Verifique o produto, a classe, a quantidade e as datas.", "Verifique o preço ou como é fixado, o local de entrega e quem paga o transporte.", "Verifique o controlo de qualidade, as regras de rejeição, a data e a forma de pagamento.", "Verifique o que acontece se a colheita falhar ou se o comprador não vier buscar, e como se resolvem os conflitos.", "Leia-o aos membros; mande verificar os contratos grandes antes de assinar."],
          words: [["Contrato", "um acordo escrito que os dois lados têm de cumprir."], ["Rejeição", "quando um comprador recusa produção que não tem a qualidade combinada."], ["Conflito", "um desacordo entre o grupo e o comprador."]],
          slides: [
            { title: "Sempre por escrito", bullets: ["Mesmo com um comprador que conhece", "Mercado seguro e preço conhecido", "Maus termos podem custar caro a todo o grupo"] },
            { title: "Verificar os termos", bullets: ["Produto, classe, quantidade, datas", "Preço ou como é fixado; entrega e transporte", "Controlo de qualidade, rejeição, data e forma de pagamento"] },
            { title: "Quando as coisas correm mal", bullets: ["A colheita falha ou o comprador não vem buscar", "Como se resolvem os conflitos", "Pedir ao comprador para explicar por escrito"] },
            { title: "Antes de assinar", bullets: ["Ler em voz alta aos membros", "Contratos grandes: serviço de cooperativas, extensão ou advogado", "A IA pode explicar palavras; sem dados bancários nem PINs"] }
          ],
          tryIt: "Tarefa final: escreva o plano de venda do seu grupo, de uma página, para uma cultura. Inclua o objetivo do grupo, cinco regras dos estatutos, onde registaria o grupo, os seus registos, como os membros entregam e recebem, preços de três fontes e os termos do contrato que vai verificar antes de assinar.",
          youCanNow: "ler um contrato com um comprador, verificar os seus termos principais e planear como o seu grupo vai vender em conjunto.",
          quickCheck: [
            { objective: "O6", q: "O que é um contrato com um comprador?", options: ["Um recibo de um saco", "Uma mensagem de WhatsApp a dizer olá", "Um acordo escrito entre o grupo e um comprador", "Um empréstimo de um banco"], answer: 2, why: "Um contrato é um acordo escrito que diz o que os dois lados vão fazer." },
            { objective: "O6", q: "Os membros não entendem os termos de qualidade do contrato. O que faz antes de assinar?", options: ["Assina depressa antes de o comprador ir embora", "Deixa o presidente assinar sozinho", "Ignora os termos de qualidade", "Pede ao comprador para explicar por escrito e lê-o em voz alta numa reunião de membros"], answer: 3, why: "As partes pouco claras são explicadas por escrito e lidas em voz alta para que cada membro entenda os seus deveres." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Chegar ao mercado em conjunto",
        questions: [
          { objective: "O4", q: "Porque os grandes compradores preferem comprar a grupos?", options: ["Os grupos vendem sempre mais barato", "Os grupos conseguem fornecer lotes grandes e iguais a tempo", "Os grupos não precisam de qualidade", "Os compradores são obrigados por lei"], answer: 1, why: "A agregação dá a quantidade e a qualidade regular de que os grandes compradores precisam." },
          { objective: "O4", q: "Num ponto de recolha, quando se deve pesar a produção de um membro?", options: ["À frente do membro, e depois registá-la com recibo", "Em segredo, à noite", "Só depois de o comprador pagar", "Nunca; faz-se uma estimativa"], answer: 0, why: "Pesar à vista e dar recibos cria confiança e prova a parte de cada membro." },
          { objective: "O5", q: "Um mercado longe paga mais 10 por cento, mas o transporte e as taxas custam 15 por cento. O que é verdade?", options: ["O mercado longe paga mais", "Os dois pagam o mesmo", "Os custos de transporte não contam", "O mercado longe paga menos na sua machamba"], answer: 3, why: "Depois dos custos, o preço na machamba do mercado longe é mais baixo." },
          { objective: "O5", q: "No Quénia, que serviço oficial publica os preços de mercado das culturas e dos animais?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "O KAMIS, gerido pelo Ministério da Agricultura, publica os preços de mercado." },
          { objective: "O6", q: "Que termo do contrato diz o que acontece se o comprador não vier buscar a produção?", options: ["O nome do grupo", "A data da reunião", "Os termos para quando não se vem buscar ou não se entrega", "A cor dos sacos"], answer: 2, why: "Os contratos devem dizer o que acontece se um dos lados não conseguir cumprir o negócio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Cooperativas de Agricultores e Chegar ao Mercado",
    questions: [
      { objective: "O1", q: "Qual é uma vantagem de um grupo de agricultores?", options: ["Pagar mais pelos insumos", "Comprar insumos em grande quantidade a preços mais baixos", "Vender sozinho à porta da machamba", "Não manter registos"], answer: 1, why: "Comprar em grande quantidade baixa o custo dos insumos." },
      { objective: "O1", q: "Segundo a Aliança Cooperativa Internacional, os membros de uma cooperativa:", options: ["São donos dela e controlam-na de forma democrática", "Trabalham para um dono privado", "Não têm voto", "Têm todos de ser funcionários do governo"], answer: 0, why: "Uma cooperativa pertence a todos os membros e é controlada de forma democrática." },
      { objective: "O1", q: "Qual é uma razão comum por que os grupos de agricultores falham?", options: ["Registos claros", "Pagamentos a tempo", "Falta de confiança e maus registos", "Reuniões abertas"], answer: 2, why: "Pouca confiança e maus registos desfazem os grupos." },
      { objective: "O2", q: "O que são os estatutos?", options: ["Empréstimos do banco", "Preços de mercado", "Contratos com compradores", "As regras escritas do grupo"], answer: 3, why: "Os estatutos dizem como o grupo funciona." },
      { objective: "O2", q: "\"Um membro, um voto\" quer dizer:", options: ["Os membros com mais quotas-partes têm mais votos", "Só os líderes votam", "Cada membro tem um voto", "Os votos são comprados"], answer: 2, why: "As cooperativas dão um voto a cada membro." },
      { objective: "O2", q: "No Quénia, as sociedades cooperativas registam-se ao abrigo da Lei das Sociedades Cooperativas através:", options: ["Do Comissário para o Desenvolvimento Cooperativo", "Do Serviço de Vida Selvagem do Quénia", "De um comprador privado", "Do serviço de meteorologia"], answer: 0, why: "O Comissário regista as sociedades, começando no serviço de cooperativas do condado." },
      { objective: "O2", q: "No Gana, onde se registam os grupos cooperativos?", options: ["Na agência de meteorologia", "Numa estação de rádio", "Em qualquer loja", "No Departamento de Cooperativas (serviço distrital)"], answer: 3, why: "O Departamento de Cooperativas do Gana regista e supervisiona as sociedades." },
      { objective: "O2", q: "Antes de fazer o pedido de registo, deve:", options: ["Adivinhar a taxa", "Confirmar no serviço de cooperativas os formulários, as taxas e os passos atuais", "Copiar as regras de outro país", "Não fazer estatutos"], answer: 1, why: "As regras e as taxas mudam, por isso confirme no serviço." },
      { objective: "O3", q: "A ata de uma reunião regista:", options: ["Só a hora a que cada pessoa chegou", "Os preços de mercado", "Os PINs dos membros", "Quem veio, o que se decidiu e quem faz o quê até quando"], answer: 3, why: "A ata é o registo das decisões e das ações." },
      { objective: "O3", q: "Qual é um dos quatro registos básicos do grupo?", options: ["Um livro de entregas", "Um diário do tempo", "Uma lista dos PINs dos telefones dos compradores", "Um álbum de fotografias"], answer: 0, why: "O livro de entregas mostra o que cada membro entregou." },
      { objective: "O3", q: "Porquê ter dois signatários na conta do grupo?", options: ["Para atrasar todos os pagamentos", "Para que nenhuma pessoa sozinha possa mexer no dinheiro", "Porque os bancos cobram menos", "Para os membros nunca verem as contas"], answer: 1, why: "Duas pessoas a aprovar protegem o dinheiro do grupo." },
      { objective: "O3", q: "A Lei das Sociedades Cooperativas da Nigéria exige que as contas de uma sociedade registada sejam:", options: ["Mantidas em segredo", "Queimadas todos os anos", "Auditadas todos os anos", "Guardadas só de memória"], answer: 2, why: "A Lei exige uma auditoria no fim de cada ano financeiro." },
      { objective: "O4", q: "Agregação quer dizer:", options: ["Vender um saco de cada vez", "Dividir o grupo", "Subir o preço sozinho", "Juntar a produção de muitos membros num só lote grande"], answer: 3, why: "A agregação junta pequenas quantidades para compradores maiores." },
      { objective: "O4", q: "Como se deve pagar aos membros depois de uma venda do grupo?", options: ["De acordo com os registos: peso x preço da classe, menos as taxas combinadas", "Todos por igual, seja o que for que entregaram", "Só os líderes recebem", "Quando o tesoureiro quiser"], answer: 0, why: "Um pagamento justo e registado mantém a confiança e reduz as vendas paralelas." },
      { objective: "O4", q: "A melhor defesa contra as vendas paralelas é:", options: ["Preços secretos", "Pagamentos atrasados", "Um pagamento rápido, justo e transparente", "Nenhum contrato"], answer: 2, why: "Os membros continuam fiéis quando o grupo paga bem e a tempo." },
      { objective: "O5", q: "Quantas fontes de preços deve verificar antes de vender?", options: ["Nenhuma", "Só um comprador", "Só a rádio", "Pelo menos três"], answer: 3, why: "Várias fontes mostram o verdadeiro preço de mercado." },
      { objective: "O5", q: "Alguém promete um preço alto garantido se primeiro pagar uma taxa e partilhar o PIN do seu dinheiro móvel. Isto é:", options: ["Um comprador normal", "Provavelmente uma burla", "Uma regra da cooperativa", "Um serviço do governo"], answer: 1, why: "Os compradores verdadeiros não pedem taxas nem PINs." },
      { objective: "O5", q: "O preço na machamba de uma oferta é:", options: ["O preço de mercado menos o transporte, as taxas e as perdas", "O preço mais alto que ouviu", "O preço na capital", "O preço a retalho"], answer: 0, why: "O que conta é o que você recebe de facto na machamba." },
      { objective: "O6", q: "O que deve estar escrito num contrato com um comprador?", options: ["Só o nome do comprador", "Preço ou como é fixado, quantidade, qualidade, entrega e termos de pagamento", "Os PINs bancários dos membros", "Nada; um aperto de mão chega"], answer: 1, why: "Estes termos protegem o grupo se alguma coisa correr mal." },
      { objective: "O6", q: "Usa um assistente de IA para entender um contrato. O que é seguro?", options: ["Escrever os dados bancários e os PINs do grupo", "Assinar o que ele disser que está bem", "Pedir-lhe para explicar palavras difíceis e depois mandar verificar os contratos grandes por um conselheiro", "Deixá-lo assinar por si"], answer: 2, why: "A IA pode explicar palavras, mas não substitui o aconselhamento jurídico, e os dados privados ficam privados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 3, 7, 8, 10, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique outra vez.",
    criteria: [
      { name: "Objetivo e estatutos", objective: "O2", notYet: "Não há objetivo claro, ou há menos de cinco regras.", meets: "O nome do grupo, o objetivo e cinco regras principais dos estatutos, como membros, votação, dinheiro e disciplina.", exceeds: "As regras também tratam das vendas paralelas e de como se divide o excedente." },
      { name: "Registo", objective: "O2", notYet: "Não diz nenhum serviço de registo.", meets: "Diz o nome do serviço onde o grupo se registaria e o que tem de confirmar lá.", exceeds: "Já ligou ou foi ao serviço e anotou os passos atuais e a data." },
      { name: "Registos e dinheiro", objective: "O3", notYet: "Faltam registos, ou uma só pessoa controla o dinheiro.", meets: "Registo de membros, livro de caixa, livro de entregas e registo de pagamentos, com duas pessoas a aprovar os pagamentos.", exceeds: "Diz como as contas vão ser lidas aos membros e verificadas todos os anos." },
      { name: "Entrega, classificação e pagamento", objective: "O4", notYet: "Não há regras de recolha nem de pagamento.", meets: "Como os membros entregam, como a produção é classificada e pesada à frente deles, e como e quando recebem.", exceeds: "As taxas do grupo e as datas de pagamento combinadas estão escritas antes." },
      { name: "Preços", objective: "O5", notYet: "Menos de três fontes de preços, ou nenhum cálculo do preço na machamba.", meets: "Preços de pelo menos três fontes, comparando o que é comparável, com o preço na machamba calculado.", exceeds: "Inclui um registo semanal de preços ao longo de várias semanas." },
      { name: "Termos do contrato", objective: "O6", notYet: "Menos de seis termos, ou faltam termos importantes como o pagamento.", meets: "Seis termos do contrato a verificar, incluindo preço, qualidade, entrega, pagamento e o que acontece se o comprador não vier buscar.", exceeds: "Diz quem vai verificar os contratos grandes, como o serviço de cooperativas ou um advogado." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano de venda do grupo",
      "Grupos que dizem ter escrito estatutos, mantido registos ou feito o registo em 90 dias (inquérito de seguimento)",
      "Grupos que dizem ter feito uma venda do grupo com contrato escrito, e o preço comparado com vender sozinho",
      "Alunos que dizem ter evitado uma burla de taxa para ter preço ou de pedido de PIN"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, ou livros de registo para o grupo",
      "Um telefone simples para preços, SMS ou WhatsApp e calculadora",
      "Modelos de estatutos do serviço de cooperativas e um exemplo de contrato com um comprador, se houver",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo com o grupo para escrever o plano de venda"
    ],
    facilitatorNotes: [
      "Faça o curso com um grupo verdadeiro ou em formação: façam o teste inicial juntos e depois uma pequena reunião de prática com ordem de trabalhos e ata.",
      "Convide um técnico de cooperativas para explicar o registo; confirme as taxas e os passos atuais antes da sessão.",
      "Pratiquem um dia de recolha a fingir, com balança, classificação e livro de entregas.",
      "Nunca peça aos membros para partilhar PINs ou dados bancários; use marcadores nos exemplos de registos.",
      "Avalie o plano de venda com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
