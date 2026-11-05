"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-extension-farmer-trainer.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept from the English: no drug, vaccine or hormone doses or withdrawal periods; registered pesticides only, as the label says.

const FAO_FFS = { name: "Plataforma Global das Escolas na Machamba do Camponês da FAO (Farmer Field Schools): apresentação", url: "https://www.fao.org/farmer-field-schools/overview/en/" };
const IDE_FBA = { name: "iDE: Conselheiros de Negócios Agrícolas (Farm Business Advisors)", url: "https://www.ideglobal.org/story/fbas" };
const GIZ_FBS = { name: "GIZ: Agronegócio Sustentável dos Pequenos Produtores (Farmer Business School, África Ocidental e Central)", url: "https://www.giz.de/en/projects/sustainable-smallholder-agribusiness" };
const ICRAF_VFT = { name: "CGIAR / ICRAF: a abordagem dos formadores agrícolas voluntários na África Oriental", url: "https://cgspace.cgiar.org/handle/10568/123260" };
const NAERLS = { name: "National Agricultural Extension and Research Liaison Services (NAERLS), Nigéria", url: "https://www.naerls.gov.ng/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO), Quénia", url: "https://www.kalro.org" };
const PCPB = { name: "Pest Control Products Board (Quénia): produtos registados", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigéria): registo de agroquímicos", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (Quénia): proteção de dados", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC): proteção de dados na Nigéria", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-extension-farmer-trainer-pt",
  lang: "pt",
  translationOf: "agri-extension-farmer-trainer",
  category: "Agriculture (Africa)",
  name: "Tornar-se Formador de Agricultores: Extensão Agrícola e Conselheiros de Negócios Agrícolas",
  skills: "Conhecer os papéis na extensão agrícola, Planear uma sessão de formação mostrar-experimentar-conversar, Conduzir um campo de demonstração e uma sessão de escola de campo, Aconselhar com responsabilidade e encaminhar, Ganhar dinheiro de forma ética com insumos e serviços, Manter registos das formações",
  outcome: "planear e conduzir um dia curto de formação para os agricultores da sua comunidade: uma lição prática baseada em mostrar, experimentar e conversar, um campo de demonstração que compara a prática habitual com uma melhor, conselhos honestos que sabem quando encaminhar, e registos de quem você formou e do que mudou.",
  about: [
    "Este curso é para agricultores que querem ensinar os seus vizinhos: agricultores líderes, formadores agrícolas voluntários, pessoas que querem ser Conselheiros de Negócios Agrícolas (Farm ou Farmer Business Advisors), jovens empreendedores agrícolas, líderes de cooperativas e novos extensionistas no Quénia, na Nigéria, no Gana, na Costa do Marfim, nos Camarões e em toda a África.",
    "Você vai aprender como funciona a extensão agrícola e qual é o seu lugar nela, como os adultos aprendem melhor, como conduzir um campo de demonstração e uma sessão de escola na machamba do camponês, como planear uma sessão curta, como usar telefones e vídeos para chegar a mais agricultores, como aconselhar com responsabilidade e quando encaminhar para um especialista, como ganhar a vida de forma ética a vender insumos e serviços, e como registar quem formou e o que mudou.",
    "No fim, você terá um plano de lição e um plano de campo de demonstração para um dia de formação real na sua comunidade. Os valores em dinheiro são só exemplos. Cada lição termina com uma tarefa; uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Planeie um dia de formação para 15 a 25 agricultores da sua comunidade sobre uma prática que conhece bem (por exemplo semear milho em linhas com composto, guardar grão em sacos herméticos, ou vacinar galinhas através do veterinário). Escreva: (1) um plano de lição de 60 a 90 minutos que siga mostrar, experimentar, conversar, com a única habilidade, os materiais, os tempos e como vai verificar que cada agricultor consegue fazê-la; (2) um plano de campo de demonstração com dois talhões lado a lado (prática habitual e prática nova), do mesmo tamanho, com placas, com o que vai registar e as datas das visitas de campo; (3) a sua lista de encaminhamento (veterinário, serviço de extensão, entidade reguladora dos insumos) e aquilo sobre que não vai aconselhar; (4) uma folha de registo da formação com consentimento e uma data de acompanhamento.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agricultores líderes, formadores agrícolas voluntários, futuros Conselheiros de Negócios Agrícolas, jovens empreendedores agrícolas, líderes de cooperativas e novos extensionistas em toda a África, incluindo o Quénia, a Nigéria, o Gana, a Costa do Marfim e os Camarões. A maioria são agricultores respeitados, com habilidade prática mas sem formação para ensinar ou aconselhar.",
    startingPoint: "Sabem cultivar bem ou criar bem animais e muitas vezes dão conselhos informais aos vizinhos. Poucos já planearam uma lição, montaram um talhão de comparação justo, registaram quem ensinaram ou pensaram até onde devem ir os seus conselhos. Alguns vendem insumos e não sabem bem como o fazer de forma justa.",
    gap: "Há muito poucos extensionistas para o número de agricultores, por isso os formadores e conselheiros agrícolas levam grande parte do trabalho. Sem habilidades de ensino, limites honestos e registos, a ajuda deles é menos eficaz e pode causar dano (doses erradas, produtos não registados, vendas com pressão). Os alunos precisam de ensinar de forma que fique, aconselhar com segurança, ganhar de forma justa e mostrar resultados.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o curso também existe em espanhol, francês e árabe",
      "Aparelhos: um smartphone simples; os agricultores dos formandos podem ter só telefones simples",
      "Local: a formação acontece nas machambas, com pouco equipamento e sem projetor",
      "Segurança: nenhuma dose de medicamentos, vacinas ou hormonas e nenhum intervalo de segurança; só pesticidas registados, como diz o rótulo",
      "Dinheiro: todos os valores são exemplos; os conselhos sobre ganhos são sobre justiça, não sobre investimento",
      "Os dados pessoais dos trabalhadores e dos agricultores são protegidos pelas leis nacionais de proteção de dados"
    ],
    prerequisites: "Experiência prática com pelo menos uma cultura ou uma criação de animais. Um curso de culturas ou de pecuária deste catálogo ajuda a preparar o conteúdo que vai ensinar."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Conhecendo as pessoas que apoiam os agricultores na sua zona", action: "descrever os papéis de um agricultor líder, de um Conselheiro de Negócios Agrícolas e de um extensionista e com quem vai trabalhar", standard: "indicando um contacto ou serviço local para cada um, onde existam" },
    { id: "O2", condition: "Com uma prática que conhece bem", action: "planear uma sessão de formação de 60 a 90 minutos que siga mostrar, experimentar, conversar", standard: "com uma habilidade clara, tempos, materiais e uma verificação de que cada agricultor consegue fazê-la" },
    { id: "O3", condition: "Para uma prática que quer que os agricultores adotem", action: "montar um campo de demonstração que compara a prática habitual com a prática nova", standard: "com talhões do mesmo tamanho, com placas, registados e visitados em datas marcadas" },
    { id: "O4", condition: "Quando um agricultor pede um conselho que vai além da sua formação", action: "dar só os conselhos para que tem formação e encaminhar o agricultor para o especialista certo", standard: "usando uma lista de encaminhamento escrita e nunca dando doses de medicamentos nem recomendando pesticidas não registados" },
    { id: "O5", condition: "Se vende insumos ou serviços aos agricultores que forma", action: "explicar como ganha dinheiro e as regras éticas que segue", standard: "com preços escritos, comissões declaradas e sem pressão para comprar" },
    { id: "O6", condition: "Depois de cada formação", action: "registar quem formou, sobre o quê, e os resultados", standard: "com consentimento, guardado em privado, e com pelo menos um acompanhamento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ensinar os agricultores para que fique",
      lessons: [
        {
          title: "Agricultores líderes, Conselheiros de Negócios e extensionistas",
          objectives: ["O1"],
          minutes: 5,
          goal: "Descrever os papéis na extensão agrícola e dizer com quem vai trabalhar.",
          text: [
            "Extensão agrícola quer dizer ajudar os agricultores a aprender e a usar práticas melhores. Os extensionistas do governo (na Nigéria, os Programas de Desenvolvimento Agrícola dos estados, apoiados pelo NAERLS; no Quénia, os técnicos agrícolas dos condados, que trabalham com instituições de investigação como o KALRO) são conselheiros com formação, mas cada um serve muitíssimos agricultores. Por isso, os próprios agricultores fazem grande parte do ensino.",
            "Um agricultor líder ou formador agrícola voluntário é um agricultor respeitado que recebe demonstrações e ensina os vizinhos, normalmente formado e apoiado por um projeto ou pelo serviço de extensão. Na África Oriental, o ICRAF e os seus parceiros usaram muito os formadores agrícolas voluntários, por exemplo na produção de leite; uma avaliação no Uganda concluiu que os conhecimentos, a produção de leite e o rendimento dos agricultores melhoraram.",
            "Um Conselheiro de Negócios Agrícolas (em inglês Farm ou Farmer Business Advisor, FBA) é um empreendedor local que vende insumos e conselhos aos agricultores vizinhos e ganha com comissões e taxas. A iDE forma FBAs na Zâmbia e em Moçambique, e cada um serve cerca de 80 a 120 agricultores. Na África Ocidental e Central, a Farmer Business School da GIZ formou produtores de cacau e de culturas alimentares na Costa do Marfim, no Gana, no Togo, na Nigéria e nos Camarões em gestão do negócio agrícola, em conjunto com os serviços de extensão. Seja qual for o seu título, você complementa o extensionista; não o substitui."
          ],
          steps: ["Faça a lista de quem apoia os agricultores na sua zona: serviço de extensão, projetos, cooperativas, lojas agrovet.", "Decida que papel serve para você: agricultor líder, FBA, ou os dois.", "Encontre-se com o seu extensionista local e explique o que pensa fazer.", "Escreva um contacto para cada papel e quando vai voltar a falar com ele."],
          words: [["Extensão agrícola", "serviços que ajudam os agricultores a aprender e a usar práticas melhores."], ["Agricultor líder", "um agricultor respeitado que recebe demonstrações e ensina os vizinhos, muitas vezes com apoio de um projeto ou da extensão."], ["Conselheiro de Negócios Agrícolas (FBA)", "um empreendedor local que vende insumos e dá conselhos aos agricultores vizinhos em troca de uma comissão ou taxa."]],
          slides: [
            { title: "Extensionistas", bullets: ["Conselheiros do governo com formação", "Nigéria: ADPs, NAERLS; Quénia: técnicos dos condados, KALRO", "Cada um serve muitíssimos agricultores"] },
            { title: "Agricultores líderes e formadores voluntários", bullets: ["Recebem demonstrações, ensinam os vizinhos", "Muito usados na África Oriental (ICRAF, leite)"] },
            { title: "Conselheiros de Negócios Agrícolas", bullets: ["Empreendedores locais: insumos mais conselhos", "iDE: Zâmbia, Moçambique; 80-120 agricultores cada", "Farmer Business School da GIZ: África Ocidental e Central"] },
            { title: "Trabalhar em conjunto", bullets: ["Você complementa o extensionista", "Fale primeiro com o serviço local"] }
          ],
          sources: [NAERLS, KALRO, ICRAF_VFT, IDE_FBA, GIZ_FBS],
          tryIt: "Faça uma tabela de quem apoia os agricultores na sua zona: o serviço de extensão, algum projeto ou cooperativa, e a loja agrovet ou o vendedor de insumos mais perto. Escreva que papel vai ter (agricultor líder, FBA ou os dois) e um contacto para cada papel.",
          youCanNow: "explicar os papéis na extensão agrícola e qual é o seu lugar.",
          quickCheck: [
            { objective: "O1", q: "O que torna um Conselheiro de Negócios Agrícolas diferente de um agricultor líder voluntário?", options: ["Um FBA ganha dinheiro a vender insumos e serviços", "Um FBA é funcionário do governo", "Um FBA nunca dá conselhos", "Um FBA só trabalha nas cidades"], answer: 0, why: "Os FBAs são empreendedores locais que ganham com comissões e taxas." },
            { objective: "O1", q: "Você quer começar a formar os vizinhos. Com quem deve falar primeiro?", options: ["Um comprador na cidade", "Uma rádio", "O seu extensionista local", "Ninguém; comece logo"], answer: 2, why: "Trabalhar com a extensão mantém os seus conselhos atualizados e dá-lhe apoio." }
          ]
        },
        {
          title: "Como os adultos aprendem, e planear uma sessão curta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Planear uma sessão de formação de 60 a 90 minutos que siga mostrar, experimentar, conversar.",
          text: [
            "Os agricultores adultos aprendem melhor a fazer, com pessoas em quem confiam, sobre problemas que têm agora. Trazem experiência: respeite-a e pergunte o que já fazem. As palestras longas esquecem-se; o que se faz com as próprias mãos fica. Use três passos: mostrar (você demonstra a habilidade devagar, a explicar porquê), experimentar (cada agricultor faz enquanto você observa e ajuda), conversar (o grupo fala sobre o que viu, o que é difícil e se vai funcionar nas suas machambas).",
            "Ensine uma habilidade por sessão, como \"medir e semear milho em linhas com uma mão-cheia de composto por cova\", e não \"tudo sobre o milho\". Planeie: a habilidade; materiais para todos experimentarem; os tempos (por exemplo 10 minutos de boas-vindas e do que fazem agora, 15 a mostrar, 30 a experimentar, 20 a conversar, 10 a planear e verificar); e como vai verificar que cada agricultor consegue fazê-la, por exemplo vendo cada um semear três covas bem.",
            "Escolha uma hora boa para os agricultores (depois do trabalho da manhã, não no dia de mercado), um lugar a que consigam chegar e uma língua que falem. Inclua as mulheres e os jovens: pergunte quem faz o trabalho em casa e convide essas pessoas. Mantenha os grupos pequenos para que todos possam experimentar, cerca de 15 a 25 pessoas por formador."
          ],
          steps: ["Escolha uma habilidade de que os agricultores precisam agora.", "Planeie mostrar, experimentar e conversar, com os tempos.", "Faça a lista de materiais para que todos possam experimentar.", "Decida como vai verificar que cada agricultor consegue fazê-la.", "Escolha uma hora, um lugar e uma língua que sirvam aos agricultores."],
          words: [["Mostrar, experimentar, conversar", "um método de ensino: demonstrar, deixar todos praticarem e depois falar sobre isso."], ["Plano de lição", "um plano curto e escrito do que vai ensinar, como, com quê e quanto tempo leva cada parte."], ["Aprender a fazer", "aprender uma habilidade praticando-a com as próprias mãos."]],
          slides: [
            { title: "Como os adultos aprendem", bullets: ["A fazer, com pessoas em quem confiam", "Sobre problemas que têm agora", "Respeite o que já sabem"] },
            { title: "Mostrar, experimentar, conversar", bullets: ["Mostrar: demonstre devagar, diga porquê", "Experimentar: todos fazem", "Conversar: o que é difícil, vai funcionar aqui?"] },
            { title: "Uma habilidade por sessão", bullets: ["Exemplo: linhas com composto em cada cova", "Tempos, materiais, uma verificação para todos"] },
            { title: "Facilite a vinda", bullets: ["Boa hora e bom lugar", "A língua dos próprios agricultores", "Convide mulheres e jovens"] }
          ],
          tryIt: "Escreva um plano de lição para uma habilidade que conhece bem: a habilidade numa frase, os materiais, os tempos de mostrar-experimentar-conversar para 60 a 90 minutos, e como vai verificar que cada agricultor consegue fazê-la.",
          youCanNow: "planear uma sessão de formação curta que ensina uma habilidade com mostrar, experimentar e conversar.",
          quickCheck: [
            { objective: "O2", q: "Qual é a melhor habilidade para uma sessão de 90 minutos?", options: ["Tudo sobre o milho", "Toda a saúde dos animais", "A agricultura em geral", "Semear milho em linhas com uma mão-cheia de composto por cova"], answer: 3, why: "Uma habilidade clara pode ser mostrada, praticada e verificada numa só sessão." },
            { objective: "O2", q: "O que acontece no passo \"experimentar\"?", options: ["O formador faz uma palestra longa", "Cada agricultor faz a habilidade enquanto o formador observa e ajuda", "Os agricultores vão para casa", "O grupo vende insumos"], answer: 1, why: "Praticar com as próprias mãos é como os adultos se lembram." }
          ]
        },
        {
          title: "Campos de demonstração e escolas na machamba do camponês",
          objectives: ["O3"],
          minutes: 6,
          goal: "Montar um campo de demonstração que compare de forma justa a prática habitual com uma nova.",
          text: [
            "Os agricultores acreditam no que veem numa machamba como a sua. Um campo de demonstração mostra uma prática nova lado a lado com a habitual. Escolha um lugar à vista, perto de um caminho, com solo uniforme. Marque dois talhões do mesmo tamanho (por exemplo 10 m x 10 m cada): o talhão A, a prática habitual; o talhão B, a prática nova. Mude só uma coisa entre eles, como a variedade, o espaçamento ou o composto, para que a diferença tenha uma só causa. Ponha uma placa clara em cada um.",
            "Registe desde o início: a data da sementeira, os insumos e a mão de obra de cada talhão, fotografias de duas em duas semanas, os problemas, e a colheita pesada em separado. Planeie dias de campo nas fases importantes (depois da germinação, na floração, na colheita) para que os agricultores possam ver e comparar. Seja honesto se a prática nova não ganhar: isso também é uma aprendizagem útil.",
            "Uma Escola na Machamba do Camponês (em inglês Farmer Field School, FFS) vai mais longe. A FAO descreve-a como um grupo de agricultores que se reúne com regularidade num campo durante todo um ciclo de produção, guiado por um facilitador com formação. Comparam talhões (a prática local e uma prática melhor proposta) e fazem a Análise do Agroecossistema: em pequenos grupos, observam as plantas, as pragas, os inimigos naturais, o solo e o tempo, desenham o que veem e decidem juntos o que fazer. A FFS já foi usada em mais de 90 países. Se quiser facilitar uma, pergunte ao serviço de extensão ou a um projeto sobre a formação de facilitadores."
          ],
          steps: ["Escolha um lugar à vista com solo uniforme.", "Marque dois talhões do mesmo tamanho: prática habitual e prática nova.", "Mude só uma coisa entre eles; ponha uma placa em cada um.", "Registe datas, insumos, mão de obra, fotografias e a colheita de cada talhão.", "Planeie dias de campo na germinação, na floração e na colheita."],
          words: [["Campo de demonstração", "um pequeno talhão que mostra uma prática para que os agricultores a vejam a funcionar."], ["Escola na Machamba do Camponês (FFS)", "um grupo que se reúne com regularidade num campo durante uma época, guiado por um facilitador, para aprender a observar e a testar."], ["Análise do Agroecossistema (AESA)", "observar as plantas, as pragas, os inimigos naturais, o solo e o tempo num campo e depois decidir juntos o que fazer."]],
          slides: [
            { title: "Ver para crer", bullets: ["Prática habitual ao lado da prática nova", "Mesmo tamanho, à vista, com placas"] },
            { title: "Uma comparação justa", bullets: ["Mude só uma coisa", "Solo uniforme, o resto dos cuidados igual"] },
            { title: "Registar e mostrar", bullets: ["Datas, insumos, mão de obra, fotografias", "Colheita pesada por talhão", "Dias de campo nas fases importantes"] },
            { title: "Escola na Machamba do Camponês (FAO)", bullets: ["Reúne-se com regularidade durante a época", "Facilitador com formação, comparar talhões", "Análise do Agroecossistema, decidir juntos"] }
          ],
          sources: [FAO_FFS],
          tryIt: "Desenhe o plano de um campo de demonstração para a habilidade que planeou na Lição 2: dois talhões do mesmo tamanho, a única coisa que muda, as placas, o que vai registar e as datas de três dias de campo.",
          youCanNow: "montar um campo de demonstração justo e explicar como funciona uma escola na machamba do camponês.",
          quickCheck: [
            { objective: "O3", q: "Na sua demonstração, o talhão B tem uma variedade nova E composto E espaçamento maior. Qual é o problema?", options: ["Nenhum; mais mudanças é melhor", "Os talhões são pequenos demais", "Não se sabe que mudança fez a diferença", "Os agricultores não gostam de placas"], answer: 2, why: "Mude uma só coisa para que a diferença tenha uma só causa." },
            { objective: "O3", q: "O que fazem os agricultores de uma escola de campo da FAO na Análise do Agroecossistema?", options: ["Observam o campo em pequenos grupos e decidem juntos o que fazer", "Só ouvem uma palestra", "Compram insumos", "Preenchem pedidos de empréstimo"], answer: 0, why: "A AESA é observar plantas, pragas, solo e tempo e depois decidir em grupo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ensinar os agricultores para que fique",
        questions: [
          { objective: "O1", q: "Porque é que os formadores agrícolas são tão importantes na extensão em África?", options: ["Os extensionistas não têm formação", "Cada extensionista serve muitíssimos agricultores", "Os agricultores não gostam de especialistas", "A lei obriga"], answer: 1, why: "Os formadores agrícolas ajudam a extensão a chegar a mais pessoas." },
          { objective: "O1", q: "Em que países a Farmer Business School da GIZ trabalhou com produtores de cacau?", options: ["Só no Quénia", "Só na Ásia", "Só na Zâmbia e em Moçambique", "Costa do Marfim, Gana, Togo, Nigéria e Camarões"], answer: 3, why: "O projeto cobre esses cinco países da África Ocidental e Central." },
          { objective: "O2", q: "Quais são os três passos do método de ensino deste curso?", options: ["Mostrar, experimentar, conversar", "Falar, falar, testar", "Ler, escrever, assinar", "Comprar, vender, pagar"], answer: 0, why: "Demonstrar, praticar e falar sobre isso." },
          { objective: "O2", q: "Como verifica que uma sessão resultou?", options: ["Contando quantas pessoas vieram", "Perguntando se gostaram", "Vendo cada agricultor fazer a habilidade bem", "Distribuindo um folheto longo"], answer: 2, why: "A prova de uma sessão de habilidade é que cada agricultor consegue fazê-la." },
          { objective: "O3", q: "Um campo de demonstração deve ficar:", options: ["Escondido atrás da casa", "Num lugar à vista, perto de um caminho, com solo uniforme", "Só no pior solo", "Longe de todos os agricultores"], answer: 1, why: "Os agricultores têm de o ver, e o solo uniforme mantém a comparação justa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aconselhar, ganhar e mostrar resultados",
      lessons: [
        {
          title: "Chegar aos agricultores por telefone, e saber quando encaminhar",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dar só os conselhos para que tem formação e encaminhar os agricultores para o especialista certo.",
          text: [
            "Os telefones ajudam a chegar a mais agricultores entre as visitas. Grave no telefone um vídeo curto (um a dois minutos) do passo \"mostrar\" e partilhe-o num grupo de WhatsApp; envie lembretes por SMS aos agricultores com telefones simples; use mensagens de voz na língua local; faça uma chamada de grupo curta antes de um dia de campo. Peça autorização antes de filmar pessoas ou as suas machambas, e use o grupo só para assuntos de agricultura.",
            "Um conselho pode ajudar ou fazer mal. Aconselhe só sobre aquilo para que teve formação e que já viu funcionar. Nunca dê doses de medicamentos, vacinas ou hormonas para animais, e nunca dê intervalos de segurança: diga \"siga o veterinário e o rótulo do produto\". Recomende só pesticidas registados no seu país (por exemplo no Pest Control Products Board do Quénia ou na NAFDAC da Nigéria), usados como diz o rótulo, com equipamento de proteção. Consulte a lista da entidade de registo se tiver dúvidas.",
            "Encaminhe depressa quando algo está acima de você: animais doentes ou a morrer vão para o veterinário; mortes repentinas de porcos ou de aves podem ser Peste Suína Africana ou gripe aviária, que são de declaração obrigatória, por isso diga ao agricultor para avisar logo o veterinário ou os serviços veterinários e não mover nem vender os animais. Pragas ou doenças desconhecidas nas culturas vão para o serviço de extensão ou um instituto de investigação. Empréstimos e contratos vão para um conselheiro de confiança. Tenha uma lista de encaminhamento escrita com nomes e números de telefone, e acompanhe para saber o que aconteceu."
          ],
          steps: ["Partilhe vídeos curtos, lembretes por SMS e mensagens de voz; peça autorização antes de filmar.", "Aconselhe só sobre aquilo para que teve formação.", "Nada de doses nem de intervalos de segurança: só o veterinário e o rótulo.", "Só pesticidas registados, como diz o rótulo.", "Encaminhe depressa com a sua lista de encaminhamento escrita, e acompanhe."],
          words: [["Encaminhamento", "mandar um agricultor a um especialista que pode ajudar com algo que está acima das suas habilidades."], ["Doença de declaração obrigatória", "uma doença que a lei obriga a comunicar aos serviços veterinários, como a Peste Suína Africana ou a gripe aviária."], ["Pesticida registado", "um produto aprovado para uso pela entidade reguladora nacional."]],
          slides: [
            { title: "Os telefones chegam a mais agricultores", bullets: ["Vídeos de 1-2 minutos do passo \"mostrar\"", "Lembretes por SMS, mensagens de voz, chamadas de grupo", "Peça antes de filmar"] },
            { title: "Aconselhe dentro da sua formação", bullets: ["Nada de doses de medicamentos, vacinas ou hormonas", "Só o veterinário e o rótulo do produto", "Pesticidas registados, como diz o rótulo"] },
            { title: "Encaminhe depressa", bullets: ["Animais doentes: o veterinário", "Mortes de porcos ou aves: avise logo", "Problemas desconhecidos nas culturas: a extensão"] },
            { title: "A sua lista de encaminhamento", bullets: ["Nomes e números de telefone", "Acompanhe para saber o que aconteceu"] }
          ],
          sources: [PCPB, NAFDAC],
          tryIt: "Escreva a sua lista de encaminhamento: o veterinário ou serviço veterinário mais perto, o serviço de extensão, a entidade de registo de pesticidas do seu país, e um conselheiro de confiança para dinheiro e contratos, com números de telefone. Depois escreva três perguntas a que NÃO vai responder você mesmo e a quem as vai mandar.",
          youCanNow: "chegar aos agricultores por telefone e aconselhar dentro dos seus limites, encaminhando o resto para o especialista certo.",
          quickCheck: [
            { objective: "O4", q: "Um agricultor pergunta quanto antibiótico deve dar a uma cabra doente. Você diz:", options: ["\"Dê duas colheres por dia.\"", "\"Use o mais barato.\"", "\"Dê o dobro para ter a certeza.\"", "\"Ligue ao veterinário e siga o rótulo do produto; eu não posso dar doses.\""], answer: 3, why: "As doses vêm do veterinário e do rótulo, não de um formador agrícola." },
            { objective: "O4", q: "Vários porcos de uma aldeia morrem de repente. O que diz aos agricultores?", options: ["Vendam depressa os restantes", "Avisem logo o veterinário ou os serviços veterinários e não movam os porcos", "Esperem uma semana", "Comam a carne"], answer: 1, why: "Pode ser Peste Suína Africana, uma doença de declaração obrigatória que tem de ser comunicada logo." }
          ]
        },
        {
          title: "Ganhar a vida como Conselheiro de Negócios Agrícolas, de forma ética",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explicar como vai ganhar com insumos e serviços e as regras éticas que vai seguir.",
          text: [
            "Um FBA ganha ao levar insumos e serviços a agricultores que estão longe das lojas: comissão sobre as sementes, o adubo, os sacos herméticos ou as ferramentas que vende; taxas por serviços como pulverizar com o equipamento certo, lavrar, recolher amostras de solo, juntar as colheitas para os compradores, ou fazer registos. A iDE nota que os laços de longo prazo de um FBA com a comunidade lhe dão uma razão forte para recomendar só produtos que compensam para os agricultores.",
            "A ética é um bom negócio. Venda só produtos genuínos e registados, de fornecedores licenciados. Escreva os seus preços e diga aos agricultores quando ganha uma comissão. Recomende aquilo de que o agricultor precisa, não o que lhe paga mais; diga claramente quando a melhor resposta é \"não precisa de comprar nada\". Nunca pressione as pessoas, nunca venda a crédito a quem sabe que não pode pagar, e mantenha a formação separada da venda: todos podem ir à formação, comprem ou não.",
            "Conheça os seus números. Só como exemplo: se ganha uma comissão de XOF 500 por saco e vende 120 sacos numa época, são XOF 60,000, antes do transporte e do seu tempo. Mantenha um registo simples das vendas, comissões e taxas de serviço, e veja se no seu país é preciso algum registo de empresa ou licença para vender insumos, sobretudo agroquímicos."
          ],
          steps: ["Faça a lista dos insumos e serviços que pode oferecer.", "Escreva os seus preços e a sua comissão em cada um.", "Escreva as suas regras éticas: produtos genuínos, comissões declaradas, sem pressão, formação aberta a todos.", "Registe vendas, comissões e taxas.", "Veja as regras de registo e de licença para vendedores de insumos."],
          words: [["Comissão", "dinheiro que um vendedor ganha por cada artigo vendido, pago pelo fornecedor."], ["Taxa de serviço", "dinheiro cobrado por fazer um trabalho, como pulverizar ou lavrar."], ["Conflito de interesses", "quando o que lhe paga mais não é o melhor para a pessoa que você aconselha."]],
          slides: [
            { title: "Como os FBAs ganham", bullets: ["Comissão sobre os insumos vendidos", "Taxas por serviços: pulverizar, lavrar, juntar colheitas", "Levar os insumos para perto dos agricultores"] },
            { title: "A ética é um bom negócio", bullets: ["Só produtos genuínos e registados", "Preços escritos, comissões declaradas", "Primeiro o conselho, depois a venda"] },
            { title: "Sem pressão", bullets: ["Dizer \"não precisa de comprar\" é permitido", "Formação aberta a todos, comprem ou não", "Nada de crédito que as pessoas não podem pagar"] },
            { title: "Conheça os seus números", bullets: ["Só exemplo: XOF 500 x 120 sacos = XOF 60,000", "Menos o transporte e o tempo", "Veja as regras de licença"] }
          ],
          sources: [IDE_FBA],
          tryIt: "Escreva uma nota de negócio de FBA numa página: três insumos ou serviços que poderia oferecer, um preço e uma comissão de exemplo para cada um, um exemplo de ganhos numa época, e as suas cinco regras éticas.",
          youCanNow: "planear como ganhar como FBA com insumos e serviços e manter a confiança dos agricultores.",
          quickCheck: [
            { objective: "O5", q: "Qual é uma regra ética de um FBA?", options: ["Dizer aos agricultores quando ganha uma comissão", "Formar só quem compra a você", "Empurrar o produto com a comissão mais alta", "Vender produtos não registados se forem mais baratos"], answer: 0, why: "Declarar as comissões mantém o conselho honesto e cria confiança." },
            { objective: "O5", q: "A cultura de um agricultor não precisa de adubo nesta época. Você deve:", options: ["Vendê-lo na mesma", "Não dizer nada e vender um saco mais pequeno", "Dizer-lhe com honestidade que não precisa de o comprar", "Recusar visitá-lo outra vez"], answer: 2, why: "A confiança a longo prazo vale mais do que uma venda." }
          ]
        },
        {
          title: "Manter registos das formações e planear o seu dia de formação",
          objectives: ["O6", "O2", "O3"],
          minutes: 6,
          goal: "Manter um registo das formações com consentimento e planear um dia de formação completo.",
          text: [
            "Os registos mostram o que o seu trabalho consegue, ajudam a acompanhar, e são o que os projetos, as cooperativas e os empregadores pedem. Mantenha um registo de cada sessão: data, lugar, tema, o nome de cada agricultor, o sexo, o grupo de idade (jovem ou não) e a aldeia, e um número de telefone só se a pessoa concordar. Anote se cada agricultor conseguia fazer a habilidade no fim.",
            "Acompanhe pelo menos uma vez, por exemplo um mês depois ou na colheita: usaram a prática, em quanta terra ou em quantos animais, e o que aconteceu? Registe os resultados do campo de demonstração por talhão. Com o tempo, pode dizer, por exemplo, \"formei 60 agricultores; 35 semeiam agora em linhas; o rendimento do milho deles subiu em média\", com registos que o provam. Não invente números: se não mediu, diga-o.",
            "Peça autorização para registar os dados das pessoas, explique porquê, e mantenha o registo em privado: em papel num lugar seguro ou num telefone com bloqueio, não num grupo de WhatsApp público. O Quénia, a Nigéria e outros países têm leis de proteção de dados. Agora junte tudo para o seu dia de formação: o plano de lição, o campo de demonstração, a sua lista de encaminhamento e este registo."
          ],
          steps: ["Faça um registo: data, lugar, tema, nome, sexo, grupo de idade, aldeia, telefone com consentimento.", "Anote quem conseguia fazer a habilidade no fim.", "Acompanhe pelo menos uma vez e registe o que mudou.", "Registe os resultados do campo de demonstração por talhão.", "Mantenha o registo em privado; peça autorização primeiro."],
          words: [["Registo da formação", "uma lista de quem foi a uma formação, sobre o quê, e os resultados."], ["Acompanhamento", "verificar mais tarde se os agricultores usaram o que aprenderam e o que aconteceu."], ["Consentimento", "a autorização de uma pessoa para registar ou partilhar os seus dados."]],
          slides: [
            { title: "Porquê manter registos", bullets: ["Mostram o que o seu trabalho consegue", "Ajudam a acompanhar os agricultores", "Os projetos e os empregadores pedem-nos"] },
            { title: "O registo da formação", bullets: ["Data, lugar, tema", "Nome, sexo, grupo de idade, aldeia", "Telefone só com consentimento; conseguiu fazer?"] },
            { title: "Acompanhar", bullets: ["Pelo menos uma vez: um mês depois ou na colheita", "Usaram a prática? O que aconteceu?", "Nunca invente números"] },
            { title: "Guarde em privado", bullets: ["Peça autorização, explique porquê", "Papel em lugar seguro ou telefone com bloqueio", "Não num grupo público"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Tarefa final: planeie o seu dia de formação. Escreva o plano de lição de 60 a 90 minutos (mostrar, experimentar, conversar, com a habilidade, os materiais, os tempos e a verificação), o plano do campo de demonstração (dois talhões do mesmo tamanho com placas, a única diferença, os registos e as datas dos dias de campo), a sua lista de encaminhamento e aquilo sobre que não vai aconselhar, e uma folha de registo da formação com uma linha de consentimento e uma data de acompanhamento.",
          youCanNow: "planear um dia de formação completo e manter registos que mostram quem formou e o que mudou.",
          quickCheck: [
            { objective: "O6", q: "Antes de escrever o número de telefone de um agricultor no registo, você deve:", options: ["Publicá-lo no grupo", "Pedir-lhe autorização e explicar porquê", "Copiá-lo de outra pessoa", "Escrevê-lo sem perguntar"], answer: 1, why: "É preciso consentimento para registar dados pessoais." },
            { objective: "O6", q: "Você não mediu o rendimento depois da formação. No seu relatório deve:", options: ["Adivinhar um número alto", "Copiar os números de outro formador", "Deixar a formação de fora", "Dizer que o rendimento não foi medido"], answer: 3, why: "Registos honestos valem mais do que resultados inventados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Aconselhar, ganhar e mostrar resultados",
        questions: [
          { objective: "O4", q: "Que pesticida pode um formador agrícola recomendar?", options: ["Qualquer um barato do mercado", "Um produto registado no país, usado como diz o rótulo", "Uma mistura caseira de vários químicos", "O que um vizinho usou"], answer: 1, why: "Só produtos registados, usados como diz o rótulo, com equipamento de proteção." },
          { objective: "O4", q: "Antes de filmar um agricultor para um vídeo de formação, você:", options: ["Pede-lhe autorização", "Filma às escondidas", "Publica primeiro e pergunta depois", "Nunca lhe diz"], answer: 0, why: "Pedir autorização respeita as pessoas e as suas machambas." },
          { objective: "O5", q: "A formação deve ser:", options: ["Só para quem compra a você", "Paga só com comissões", "Aberta a todos, comprem ou não", "Cancelada se as vendas forem baixas"], answer: 2, why: "Manter a formação separada da venda protege a confiança." },
          { objective: "O5", q: "Só exemplo: comissão de XOF 500 por saco, 120 sacos vendidos. A comissão bruta é:", options: ["XOF 6,000", "XOF 600", "XOF 620", "XOF 60,000"], answer: 3, why: "500 x 120 = 60,000, antes dos custos." },
          { objective: "O6", q: "Onde deve ficar guardado um registo da formação?", options: ["Em privado: em papel num lugar seguro ou num telefone com bloqueio", "Num grupo de WhatsApp público", "Num quadro de avisos", "Entregue a qualquer comprador"], answer: 0, why: "Os dados pessoais têm de ser guardados em privado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Tornar-se Formador de Agricultores: Extensão Agrícola e Conselheiros de Negócios Agrícolas",
    questions: [
      { objective: "O1", q: "Extensão agrícola quer dizer:", options: ["Aumentar uma machamba", "Ajudar os agricultores a aprender e a usar práticas melhores", "Vender terra", "Emprestar dinheiro"], answer: 1, why: "A extensão é conselho e aprendizagem para os agricultores." },
      { objective: "O1", q: "Um agricultor líder é normalmente:", options: ["Um agricultor respeitado que recebe demonstrações e ensina os vizinhos", "Um funcionário de banco", "Um ministro do governo", "Um comprador"], answer: 0, why: "Os agricultores líderes ensinam pelo exemplo nas suas próprias machambas." },
      { objective: "O1", q: "Que organização forma Conselheiros de Negócios Agrícolas na Zâmbia e em Moçambique?", options: ["A NAFDAC", "O Serviço Meteorológico do Quénia", "A iDE", "A WOAH"], answer: 2, why: "A iDE gere redes de FBAs nesses países." },
      { objective: "O2", q: "Os adultos aprendem melhor uma habilidade agrícola:", options: ["A ouvir uma palestra longa", "A ler um folheto longo", "A ver televisão", "A fazê-la com as próprias mãos"], answer: 3, why: "O que se aprende a fazer fica na memória." },
      { objective: "O2", q: "Numa sessão de 90 minutos, a maior parte do tempo deve ir para:", options: ["As boas-vindas", "Experimentar a habilidade", "Vender insumos", "Esperar"], answer: 1, why: "É a praticar que se aprende a habilidade." },
      { objective: "O2", q: "O que ajuda mais mulheres e jovens a participar?", options: ["Perguntar quem faz o trabalho em casa e convidar essas pessoas, a uma hora adequada", "Fazer a sessão no dia de mercado", "Usar uma língua que não falam", "Convidar só os chefes de família"], answer: 0, why: "Convidar quem faz o trabalho, a uma boa hora, faz a formação chegar a essas pessoas." },
      { objective: "O3", q: "Um campo de demonstração justo compara:", options: ["Dois talhões com muitas diferenças", "Um só talhão", "Talhões do mesmo tamanho que diferem numa só prática", "A sua machamba com a de um vizinho"], answer: 2, why: "Mude uma só coisa para que o resultado tenha uma só causa." },
      { objective: "O3", q: "Quando deve fazer dias de campo num campo de demonstração?", options: ["Só depois da colheita", "Nunca", "Só antes da sementeira", "Nas fases importantes, como a germinação, a floração e a colheita"], answer: 3, why: "Os agricultores veem a diferença enquanto a cultura cresce." },
      { objective: "O3", q: "Segundo a FAO, uma Escola na Machamba do Camponês reúne-se:", options: ["Com regularidade durante todo um ciclo de produção, com um facilitador com formação", "Uma vez, durante uma hora", "Só pela internet", "Só numa sala de aula"], answer: 0, why: "Os grupos FFS aprendem no campo ao longo da época." },
      { objective: "O4", q: "Um formador agrícola deve dar doses de medicamentos ou vacinas:", options: ["Quando lhe pedem", "Nunca; mande o agricultor ao veterinário e ao rótulo", "Só para as aves", "Se o agricultor insistir"], answer: 1, why: "As doses vêm do veterinário e do rótulo." },
      { objective: "O4", q: "Várias galinhas de uma machamba morrem de repente. Você diz ao agricultor para:", options: ["Vender as restantes no mercado", "Esperar para ver", "Avisar logo o veterinário ou os serviços veterinários", "Enterrá-las e não dizer nada"], answer: 2, why: "Pode ser gripe aviária, uma doença de declaração obrigatória." },
      { objective: "O4", q: "Na Nigéria, os agroquímicos são registados:", options: ["Pelo Banco Central", "Pelo NiMet", "Pela polícia", "Pela NAFDAC"], answer: 3, why: "A NAFDAC regista os agroquímicos na Nigéria." },
      { objective: "O4", q: "Um agricultor pergunta sobre um contrato de empréstimo. Você:", options: ["Diz-lhe para assinar depressa", "Encaminha-o para um conselheiro de confiança e sugere que o leia todo", "Assina por ele", "Aconselha-o a pedir mais emprestado"], answer: 1, why: "Dinheiro e contratos estão fora do papel de um formador agrícola." },
      { objective: "O5", q: "Um FBA ganha normalmente com:", options: ["Comissões sobre insumos e taxas por serviços", "Só salários do governo", "Multas aos agricultores", "A venda dos dados dos agricultores"], answer: 0, why: "Os FBAs são empreendedores pagos com comissões e taxas." },
      { objective: "O5", q: "O que é um conflito de interesses para um FBA?", options: ["Vender sementes genuínas", "Registar as vendas", "Quando o produto que lhe paga mais não é o melhor para o agricultor", "Dar uma formação"], answer: 2, why: "As regras éticas existem para lidar com este conflito." },
      { objective: "O5", q: "Qual é uma boa prática de um FBA?", options: ["Esconder a comissão", "Vender a crédito a quem não pode pagar", "Vender produtos sem rótulo", "Escrever os seus preços"], answer: 3, why: "Preços escritos mantêm a venda justa e clara." },
      { objective: "O6", q: "Um registo da formação deve ter:", options: ["Data, tema, nomes e se cada agricultor conseguia fazer a habilidade", "Os PINs de dinheiro móvel dos agricultores", "Só o nome do formador", "Nada; a memória chega"], answer: 0, why: "Isto mostra quem foi formado e com que resultado." },
      { objective: "O6", q: "Porquê acompanhar os agricultores depois da formação?", options: ["Para vender mais", "Para ver se usaram a prática e o que aconteceu", "Porque lhe devem algo", "Não é preciso"], answer: 1, why: "O acompanhamento mostra os resultados e onde ajudar mais." },
      { objective: "O6", q: "Se não mediu os resultados, você deve:", options: ["Inventar bons números", "Usar os números do ano passado", "Dizer que não foram medidos", "Copiar outro relatório"], answer: 2, why: "Nunca invente resultados." },
      { objective: "O6", q: "Registar o número de telefone de um agricultor precisa de:", options: ["Nada", "Um pagamento", "A aprovação de um comprador", "O consentimento dele"], answer: 3, why: "Os dados pessoais só se registam com autorização." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 9, 10, 13, 14, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano de lição", objective: "O2", notYet: "Uma palestra sem prática, ou várias habilidades ao mesmo tempo.", meets: "Uma habilidade, mostrar-experimentar-conversar com tempos e materiais, em 60 a 90 minutos, com uma verificação de que cada agricultor consegue fazê-la.", exceeds: "Também planeia a participação de mulheres e jovens e inclui um vídeo curto no telefone ou um acompanhamento por SMS." },
      { name: "Campo de demonstração", objective: "O3", notYet: "Sem comparação, ou talhões que diferem em várias coisas.", meets: "Dois talhões do mesmo tamanho, com placas, que diferem numa só prática, com registos e datas dos dias de campo.", exceeds: "Inclui como as colheitas serão pesadas por talhão e partilhadas com honestidade, mesmo que a prática nova não ganhe." },
      { name: "Conselho seguro e encaminhamento", objective: "O4", notYet: "Dá doses ou indica produtos não registados; sem lista de encaminhamento.", meets: "Uma lista de encaminhamento com contactos, e aquilo sobre que o formador não vai aconselhar, incluindo as doenças de declaração obrigatória.", exceeds: "Indica a entidade nacional de registo de pesticidas e como consultar a sua lista." },
      { name: "Ganhos justos", objective: "O5", notYet: "Formação ligada à compra, ou comissões escondidas.", meets: "Se vende, preços escritos, comissões declaradas e formação aberta a todos.", exceeds: "Inclui um exemplo de ganhos numa época depois dos custos e uma regra para dizer \"não precisa de comprar\"." },
      { name: "Registos e papéis", objective: "O6", notYet: "Sem registo, ou dados pessoais partilhados abertamente.", meets: "Um registo com consentimento, uma data de acompanhamento e guardado em privado; o contacto local da extensão está indicado.", exceeds: "Regista tanto os resultados do campo de demonstração como a adoção pelos agricultores no acompanhamento." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (rubrica)",
      "Alunos que fazem pelo menos um dia de formação em 30 dias (inquérito de acompanhamento)",
      "Número de agricultores formados por aluno, segundo os registos das formações",
      "Parte dos agricultores formados que usam a prática no acompanhamento",
      "Resultados do campo de demonstração comparados com a prática habitual depois de uma época",
      "Alunos que trabalham com o serviço de extensão local ou com um programa como agricultores líderes ou FBAs"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone para vídeos curtos, SMS e WhatsApp",
      "Papel, caneta e um caderno para o plano de lição, o plano do campo de demonstração e o registo",
      "Acesso a um pequeno pedaço de terra para um campo de demonstração, estacas, corda e placas",
      "Contactos do serviço de extensão local, de um veterinário e da entidade nacional de registo de pesticidas",
      "Cerca de 90 minutos no total, mais o tempo para fazer o dia de formação"
    ],
    facilitatorNotes: [
      "Ensine este curso da forma como ele pede aos alunos que ensinem: mostrar, experimentar, conversar, com o plano de lição e o plano do campo de demonstração feitos na sessão.",
      "Envolva o serviço de extensão local; se possível, convide um extensionista para a Lição 1.",
      "Nunca deixe os alunos dar doses de medicamentos, vacinas ou hormonas para animais nem intervalos de segurança nas dramatizações; pratique antes o encaminhamento.",
      "Para os futuros FBAs, dramatize uma conversa de venda em que a resposta certa é \"não precisa de comprar\".",
      "Verifique que os registos de prática usam nomes inventados, a não ser que agricultores reais tenham dado consentimento.",
      "Avalie a tarefa final com a rubrica e dê feedback sobre uma linha Ainda não de cada vez."
    ]
  }
};
