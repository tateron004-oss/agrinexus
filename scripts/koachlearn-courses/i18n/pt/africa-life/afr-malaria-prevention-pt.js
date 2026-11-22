"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-malaria-prevention.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Prevention and when to get help only: no medicine names for self-treatment, no doses, no treatment plans and no diagnosis.

const WHO_MALARIA = { name: "OMS (Organização Mundial da Saúde): ficha informativa sobre a malária (transmissão, sintomas, sinais de perigo, redes, pulverização, quimioprevenção, vacinas, testes)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" };
const CDC_MALARIA = { name: "CDC (Centros de Controlo e Prevenção de Doenças dos EUA): sobre a malária (picadas ao fim da tarde e à noite, sintomas, procurar cuidados depressa)", url: "https://www.cdc.gov/malaria/about/index.html" };
const WHO_WATER = { name: "OMS: ficha informativa sobre a água potável (recipientes de água em casa como criadouros de mosquitos; tapá-los)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };

module.exports = {
  id: "afr-malaria-prevention-pt",
  lang: "pt",
  translationOf: "afr-malaria-prevention",
  category: "Africa: Life and Work",
  name: "Prevenir a Malária na Sua Família",
  skills: "Saber como a malária se transmite e quem corre mais risco, Usar uma rede mosquiteira tratada todas as noites, Reduzir os mosquitos à volta de casa, Usar os serviços da unidade sanitária para grávidas e crianças, Fazer o teste a cada febre no mesmo dia, Reconhecer os sinais de perigo da malária grave",
  outcome: "proteger a sua família da malária: dormir debaixo de uma rede tratada todas as noites, reduzir os mosquitos à volta de casa, usar os serviços da unidade sanitária para grávidas e crianças pequenas, fazer o teste a cada febre no mesmo dia e reconhecer os sinais de perigo que querem dizer ir já à unidade sanitária.",
  about: [
    "A malária transmite-se pela picada de mosquitos, e a África tem a maior parte dos casos e das mortes do mundo. A OMS (Organização Mundial da Saúde) diz que, em 2024, a Região Africana da OMS teve cerca de 95% dos casos e das mortes por malária do mundo, e que as crianças com menos de 5 anos foram cerca de três em cada quatro dessas mortes. A malária pode ser prevenida e pode ser tratada quando é descoberta cedo. Este curso é para mães, pais, avós, cuidadores e jovens na Nigéria, na RD Congo, no Quénia, no Gana, no Burkina Faso, no Mali, nos Camarões e em toda a África.",
    "Vai aprender como a malária se transmite e quem corre mais risco, como pendurar e cuidar de uma rede mosquiteira tratada, como reduzir os lugares onde os mosquitos se reproduzem e picam à volta de casa, que serviços da unidade sanitária protegem as grávidas e as crianças pequenas, como fazer o teste a cada febre no mesmo dia e como reconhecer os sinais de perigo da malária grave.",
    "Este curso ensina a prevenção e quando pedir ajuda. Não diz que medicamento tomar nem quanto: só um profissional de saúde pode fazer o teste da malária e decidir o tratamento. Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\", e juntas formam o plano da sua casa contra a malária."
  ],
  finalTask: "Faça numa só página o plano da sua casa contra a malária: quem na sua casa corre mais risco; quantas redes tratadas tem e de quantas precisa, onde cada pessoa dorme debaixo de uma e como vai cuidar delas; três coisas que vai fazer para reduzir os mosquitos à volta de casa; as consultas marcadas para qualquer grávida ou criança pequena; o que vai fazer no mesmo dia em que alguém tiver febre; e um cartão dos sinais de perigo com o nome e o número da unidade sanitária mais próxima ou do agente de saúde comunitário.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Mães, pais, avós, cuidadores e jovens em toda a África, sobretudo em zonas com muita malária, em aldeias, vilas e bairros informais. Muitos já tiveram malária e cuidam de crianças pequenas ou de uma familiar grávida.",
    startingPoint: "Sabem que os mosquitos causam a malária e muitos têm uma rede mosquiteira. Mas muitas vezes as redes não são usadas todas as noites nem por todos, as redes têm buracos, há água parada à volta de casa, as febres são tratadas em casa com restos de medicamentos ou medicamentos do mercado sem teste, e os sinais de perigo só são vistos tarde.",
    gap: "A malária ainda mata muitas crianças pequenas e faz mal às grávidas e aos seus bebés. As famílias precisam de hábitos simples do dia a dia (uma rede todas as noites, menos mosquitos) e de agir depressa (um teste para cada febre, ir logo à unidade sanitária com sinais de perigo) para evitar mortes. Estes hábitos são grátis ou baratos e funcionam melhor juntos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos falam português como segunda língua",
      "Aparelhos: um telefone simples com dados caros; as lições funcionam sem internet depois de carregadas",
      "Dinheiro: orçamentos baixos; muitas redes, testes e serviços são grátis ou baratos nas unidades sanitárias e nos programas nacionais, mas isto varia",
      "Saúde: só prevenção e sinais de alerta; sem nomes de medicamentos para tratar sozinho, sem doses, sem planos de tratamento, sem diagnóstico; os alunos seguem a sua unidade sanitária, o agente de saúde comunitário e o ministério da saúde",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho de casa e o emprego"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Pensando na sua própria casa", action: "explicar como a malária se transmite e fazer a lista de quem na sua casa corre mais risco", standard: "dizendo que é a picada do mosquito à noite e nomeando as crianças pequenas e as grávidas" },
    { id: "O2", condition: "Com uma rede mosquiteira tratada e os lugares onde a sua família dorme", action: "pendurar uma rede tratada, prendê-la por baixo e consertar os buracos", standard: "com todas as pessoas, a começar pelas crianças pequenas e pelas grávidas, a dormir debaixo de uma rede todas as noites" },
    { id: "O3", condition: "Com a zona à volta da sua casa", action: "tirar ou tapar os lugares onde os mosquitos se reproduzem e impedir que entrem em casa", standard: "fazendo pelo menos três ações numa semana" },
    { id: "O4", condition: "Com uma grávida ou uma criança pequena na sua família", action: "fazer a lista dos serviços contra a malária que a unidade sanitária lhes oferece e planear as consultas", standard: "nomeando as consultas pré-natais cedo e perguntando por vacinas e medicamentos preventivos onde existam" },
    { id: "O5", condition: "Com um familiar com febre numa zona de malária", action: "levar a pessoa a fazer o teste da malária no mesmo dia e seguir o tratamento do profissional de saúde", standard: "sem nunca tratar com restos de medicamentos ou medicamentos desconhecidos e sem nunca parar antes do fim" },
    { id: "O6", condition: "Com um familiar doente", action: "reconhecer os sinais de perigo da malária grave e levar logo a pessoa à unidade sanitária", standard: "nomeando pelo menos quatro sinais de perigo e a unidade sanitária ou o agente de saúde comunitário mais próximo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Travar a picada",
      lessons: [
        {
          title: "Como a malária se transmite e quem corre mais risco",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar como a malária se transmite e fazer a lista de quem na sua casa corre mais risco.",
          text: [
            "A malária é causada por um parasita muito pequeno. Transmite-se pela picada de certos mosquitos fêmea (Anopheles). Um mosquito pica uma pessoa com malária, depois pica outra pessoa e passa-lhe a doença. A malária não passa diretamente de pessoa para pessoa pelo toque, pela comida ou pelo ar.",
            "Estes mosquitos picam sobretudo ao fim da tarde e à noite, muitas vezes enquanto as pessoas dormem. Os sinais da malária costumam começar 10 a 15 dias depois da picada, com febre, arrepios de frio e dor de cabeça.",
            "A OMS diz que quem corre mais risco de malária grave são os bebés e as crianças com menos de 5 anos, as grávidas, as pessoas com VIH e os viajantes que vêm de lugares sem malária. Em África, a maior parte das mortes por malária são de crianças pequenas. A OMS diz que só a Nigéria e a RD Congo tiveram mais de 40% das mortes por malária da região em 2024. Em grande parte do Norte de África a malária local é rara, mas as pessoas de Marrocos, do Egito ou da Tunísia que viajam para zonas de malária correm muito risco e devem consultar um profissional de saúde antes de partir."
          ],
          words: [["Parasita", "um ser vivo muito pequeno que vive dentro de outro corpo e lhe faz mal."], ["Anopheles", "o tipo de mosquito que transmite a malária."], ["Correr risco", "ter mais probabilidade de ficar doente ou muito doente."]],
          slides: [
            { title: "Como a malária se transmite", bullets: ["Um parasita levado pelos mosquitos Anopheles", "Pica uma pessoa doente, depois a pessoa seguinte", "Não passa pelo toque, pela comida nem pelo ar"] },
            { title: "Quando picam", bullets: ["Sobretudo ao fim da tarde e à noite", "Os sinais começam 10 a 15 dias depois da picada", "Febre, arrepios de frio, dor de cabeça"] },
            { title: "Quem corre mais risco", bullets: ["Bebés e crianças com menos de 5 anos", "Grávidas", "Pessoas com VIH; viajantes de lugares sem malária"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Escreva os nomes de todas as pessoas que dormem na sua casa. Faça um círculo à volta de quem corre mais risco: crianças com menos de 5 anos, qualquer grávida, quem tem VIH e visitas de lugares sem malária.",
          youCanNow: "explicar como a malária se transmite e dizer quem na sua casa corre mais risco.",
          quickCheck: [
            { objective: "O1", q: "Como se transmite a malária?", options: ["Por apertar as mãos", "Pela picada de certos mosquitos", "Por comer mangas", "Pela chuva fria"], answer: 1, why: "A malária passa pela picada de mosquitos Anopheles infetados, não pelo toque, pela comida nem pelo tempo." },
            { objective: "O1", q: "Quem numa família corre mais risco de malária grave?", options: ["As crianças com menos de 5 anos e as grávidas", "Só os rapazes adolescentes", "Só os avós", "Ninguém corre mais risco"], answer: 0, why: "A OMS inclui as crianças pequenas e as grávidas entre quem corre mais risco." }
          ]
        },
        {
          title: "Uma rede tratada todas as noites",
          objectives: ["O2"],
          minutes: 5,
          goal: "Pendurar uma rede mosquiteira tratada, prendê-la por baixo e consertar os buracos.",
          text: [
            "Uma rede mosquiteira tratada com inseticida (muitas vezes chamada REMTI ou rede de longa duração) é uma das principais formas que a OMS recomenda para prevenir a malária. A rede impede os mosquitos de chegarem até você enquanto dorme, e o inseticida mata ou enfraquece os que pousam nela. A OMS diz que os tipos de redes mais novos protegem melhor onde os mosquitos já não morrem com o inseticida antigo.",
            "A rede só funciona quando é usada todas as noites, o ano todo, e não só na época das chuvas. Pendure-a por cima da cama ou da esteira para que chegue ao chão, prenda as pontas debaixo do colchão ou da esteira antes de escurecer e entre sem deixar aberturas. Se não houver redes para todos, as crianças pequenas e as grávidas dormem primeiro debaixo de uma, e depois procure redes para os outros.",
            "Cuide dela: veja se tem buracos todas as semanas e cosa-os ou dê-lhes um nó logo. Lave-a com cuidado e não muitas vezes, e seque-a à sombra, seguindo as instruções do pacote ou do profissional de saúde. Não use as redes para pescar, fazer cercas ou proteger hortas. Muitos programas nacionais dão redes grátis nas unidades sanitárias, nas consultas pré-natais, nas escolas ou em campanhas: pergunte na unidade sanitária ou ao agente de saúde comunitário."
          ],
          steps: ["Pendure a rede por cima da cama ou da esteira para que chegue ao chão.", "Prenda as pontas debaixo do colchão ou da esteira antes de escurecer.", "Entre sem deixar aberturas, todas as noites.", "Veja se há buracos todas as semanas e feche-os logo.", "Lave com cuidado, não muitas vezes, e seque à sombra.", "Pergunte na unidade sanitária ou ao agente de saúde comunitário por redes grátis."],
          words: [["Inseticida", "um produto químico que mata insetos."], ["REMTI (rede mosquiteira tratada com inseticida)", "uma rede para dormir tratada com inseticida para afastar e matar os mosquitos. Em inglês chama-se ITN."], ["Campanha", "um tempo em que os profissionais de saúde dão redes ou serviços a muitas pessoas."]],
          slides: [
            { title: "Porque uma rede tratada funciona", bullets: ["Trava os mosquitos enquanto você dorme", "O inseticida mata-os ou enfraquece-os", "Uma das principais formas da OMS de prevenir a malária"] },
            { title: "Todas as noites, o ano todo", bullets: ["A rede chega ao chão", "Presa por baixo antes de escurecer, sem aberturas", "Faltam redes? Crianças e grávidas primeiro"] },
            { title: "Cuide dela", bullets: ["Veja se há buracos todas as semanas; feche-os", "Lave com cuidado, não muitas vezes; seque à sombra", "Nunca para pescar nem para hortas"] },
            { title: "Arranjar redes", bullets: ["Unidades sanitárias, consultas pré-natais, escolas, campanhas", "Pergunte na unidade sanitária ou ao agente de saúde comunitário"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Esta noite, veja todas as redes da sua casa. Pendure cada uma para que chegue ao chão, prenda-a por baixo e feche os buracos. Conte quantas redes a mais a sua família precisa.",
          youCanNow: "pendurar, prender e cuidar de uma rede tratada para que todos, a começar por quem corre mais risco, durmam debaixo de uma todas as noites.",
          quickCheck: [
            { objective: "O2", q: "Quando deve a sua família dormir debaixo da rede?", options: ["Só na época das chuvas", "Só quando alguém está doente", "Todas as noites, o ano todo", "Só ao fim de semana"], answer: 2, why: "Os mosquitos podem picar e transmitir a malária o ano todo; a rede só funciona se for usada todas as noites." },
            { objective: "O2", q: "Encontra um pequeno buraco na rede. O que faz?", options: ["Deita a rede fora", "Usa-a para pescar", "Espera até o buraco ficar maior", "Cose-o ou dá-lhe um nó logo"], answer: 3, why: "Os mosquitos passam por buracos pequenos; fechá-los logo mantém a rede a funcionar." }
          ]
        },
        {
          title: "Menos mosquitos e menos picadas à volta de casa",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tirar ou tapar os lugares onde os mosquitos se reproduzem e impedir que entrem em casa.",
          text: [
            "Os mosquitos põem os ovos em água parada. Poças, pneus velhos, latas, potes partidos, valas entupidas, bidões de água destapados e baldes podem tornar-se criadouros perto de onde a sua família dorme.",
            "À volta de casa: esvazie ou vire ao contrário as coisas que guardam água; tape os bidões, os baldes e os tanques com uma tampa ou um pano bem preso; limpe as caleiras e as valas entupidas; encha as poças com terra. Faça isto todas as semanas, sobretudo na época das chuvas, e trabalhe com os vizinhos, porque os mosquitos voam de casa em casa.",
            "Mantenha-os fora e evite as picadas: feche as portas e as janelas ao anoitecer e ponha redes nas janelas e nos beirais, se puder. À noite, use mangas compridas e calças compridas ou uma capulana comprida. Os repelentes com DEET, IR3535 ou icaridina podem ajudar depois do anoitecer; use-os como diz o rótulo. As espirais e os difusores também podem ajudar, mas nunca substituem a rede. Se as equipas de pulverização do programa de saúde vierem pulverizar o interior das casas (pulverização intradomiciliária), deixe-as entrar e siga os conselhos delas sobre não lavar nem pintar as paredes depois."
          ],
          steps: ["Dê uma volta à sua casa e encontre tudo o que guarda água parada.", "Esvazie, vire ao contrário, tape ou tire isso.", "Limpe as valas entupidas e encha as poças.", "Feche as portas e as janelas ao anoitecer; ponha redes nas janelas, se puder.", "Cubra os braços e as pernas à noite; use repelente como diz o rótulo.", "Deixe entrar as equipas de pulverização do programa de saúde."],
          words: [["Criadouro", "água parada onde os mosquitos põem os ovos."], ["Repelente", "um creme ou spray que afasta os mosquitos da pele."], ["Pulverização intradomiciliária (PIDOM)", "os profissionais de saúde pulverizam inseticida nas paredes de dentro para matar os mosquitos que lá descansam. Em inglês chama-se IRS."]],
          slides: [
            { title: "Os mosquitos reproduzem-se em água parada", bullets: ["Poças, pneus, latas, potes partidos", "Valas entupidas, bidões e baldes abertos"] },
            { title: "Todas as semanas à volta de casa", bullets: ["Esvazie ou vire as coisas que guardam água", "Tape bidões, baldes e tanques", "Limpe valas; encha poças; trabalhe com os vizinhos"] },
            { title: "Mantenha-os fora, evite picadas", bullets: ["Feche portas e janelas ao anoitecer; redes nas janelas", "Mangas e calças compridas à noite", "Repelente como diz o rótulo; nunca em vez da rede"] },
            { title: "Equipas de pulverização", bullets: ["A pulverização de dentro mata os mosquitos que descansam", "Deixe entrar as equipas do programa de saúde", "Siga os conselhos delas depois"] }
          ],
          sources: [WHO_MALARIA, WHO_WATER],
          tryIt: "Dê já uma volta à sua casa. Escreva todos os lugares com água parada. Esvazie, tape ou tire pelo menos três hoje e planeie voltar a ver todas as semanas.",
          youCanNow: "tirar os criadouros de mosquitos à volta de casa e reduzir as picadas à noite.",
          quickCheck: [
            { objective: "O3", q: "Onde põem os mosquitos os ovos?", options: ["Em areia seca", "Em água parada como poças, pneus e baldes abertos", "No fogo da cozinha", "No pão"], answer: 1, why: "Os mosquitos precisam de água parada para pôr os ovos." },
            { objective: "O3", q: "Usa uma espiral contra mosquitos à noite. O que é verdade?", options: ["Pode ajudar, mas continua a dormir debaixo de uma rede", "Já não precisa de rede", "Cura a malária", "Tem de queimar a noite toda ao lado do bebé"], answer: 0, why: "As espirais e os repelentes dão mais proteção, mas nunca substituem a rede." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Travar a picada",
        questions: [
          { objective: "O1", q: "Quando picam sobretudo os mosquitos da malária?", options: ["Ao meio-dia", "Só de manhã", "Ao fim da tarde e à noite", "Só na época seca"], answer: 2, why: "Os mosquitos Anopheles picam sobretudo ao fim da tarde e à noite, muitas vezes enquanto as pessoas dormem." },
          { objective: "O2", q: "A sua família tem três redes e cinco pessoas. Quem dorme primeiro debaixo das redes?", options: ["O pai e os filhos mais velhos", "As visitas", "Quem se deitar primeiro", "As crianças pequenas e a grávida"], answer: 3, why: "As crianças pequenas e as grávidas correm mais risco, por isso vêm primeiro enquanto arranja mais redes." },
          { objective: "O2", q: "Como deve ser pendurada uma rede?", options: ["A chegar ao chão e presa por baixo antes de escurecer", "Enrolada por cima da cama", "Só a cobrir metade da cama", "Só por cima da cara"], answer: 0, why: "Uma rede que chega ao chão e está presa por baixo não deixa aberturas para os mosquitos." },
          { objective: "O3", q: "Há pneus velhos cheios de água da chuva atrás da sua casa. O que faz?", options: ["Deixa-os; não são seus", "Esvazia-os e guarda-os secos, ou tira-os", "Põe mais água", "Tapa-os com uma rede"], answer: 1, why: "A água nos pneus é um criadouro; esvaziá-los ou tirá-los impede os mosquitos de se reproduzirem." },
          { objective: "O3", q: "Os profissionais de saúde vêm pulverizar as paredes de dentro da sua casa. O que faz?", options: ["Recusa", "Lava as paredes logo a seguir", "Deixa-os entrar e segue os conselhos deles depois", "Pinta por cima no mesmo dia"], answer: 2, why: "A pulverização intradomiciliária é uma medida principal da OMS; lavar ou pintar as paredes faz com que deixe de funcionar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger quem corre mais risco e agir depressa",
      lessons: [
        {
          title: "Proteger as grávidas e as crianças pequenas",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fazer a lista dos serviços contra a malária que a unidade sanitária oferece às grávidas e às crianças pequenas e planear as consultas.",
          text: [
            "A malária na gravidez pode fazer mal à mãe e ao bebé: a OMS diz que pode fazer o bebé nascer antes do tempo ou pequeno demais. Uma grávida deve começar as consultas pré-natais cedo e ir a todas. Nas consultas pré-natais, em muitos países, ela pode receber uma rede tratada, o teste da malária e, onde o programa nacional oferece, um medicamento preventivo contra a malária na gravidez (a OMS chama-lhe TIP, em inglês IPTp). O profissional de saúde decide o que ela precisa e quando. Nunca tome medicamentos para a malária na gravidez sem um profissional de saúde.",
            "Para as crianças pequenas: a OMS recomenda duas vacinas contra a malária (RTS,S e R21) para crianças em zonas com muita malária, e estão a ser juntadas às vacinas de rotina das crianças em muitos países africanos. Em algumas zonas, por exemplo partes do Sahel como o Burkina Faso e o Mali, os profissionais de saúde também dão às crianças pequenas um medicamento preventivo na época das chuvas (quimioprevenção sazonal da malária). Pergunte na unidade sanitária o que é oferecido onde você vive e mantenha o cartão de saúde da criança em dia.",
            "As vacinas e os medicamentos preventivos dão mais proteção, mas a OMS diz que funcionam melhor junto com as redes. Continue a usar a rede todas as noites. Escreva as datas das consultas no seu plano e peça ajuda ao agente de saúde comunitário se não conseguir ir à unidade sanitária."
          ],
          steps: ["Grávida: comece as consultas pré-natais cedo e vá a todas.", "Nas consultas pré-natais, pergunte por uma rede, pelo teste e pelo medicamento preventivo contra a malária.", "Criança: pergunte na unidade sanitária se as vacinas contra a malária são dadas onde vive e mantenha o cartão de saúde em dia.", "Pergunte se há campanhas de medicamento preventivo na época das chuvas na sua zona.", "Escreva todas as datas das consultas no seu plano e continue a usar as redes."],
          words: [["Consulta pré-natal", "consultas de saúde para a mulher durante a gravidez."], ["Vacina", "um medicamento, normalmente uma injeção, que ajuda o corpo a proteger-se de uma doença."], ["Medicamento preventivo", "um medicamento que o profissional de saúde dá para impedir uma doença antes de começar."], ["Cartão de saúde", "o cartão ou caderneta onde a unidade sanitária regista as vacinas e as consultas da criança."]],
          slides: [
            { title: "Malária na gravidez", bullets: ["Pode fazer mal à mãe e ao bebé", "O bebé nasce antes do tempo ou pequeno demais", "Comece as consultas pré-natais cedo; vá a todas"] },
            { title: "Na consulta pré-natal, pergunte por", bullets: ["Uma rede tratada e o teste da malária", "Medicamento preventivo onde existir (TIP, em inglês IPTp)", "Nunca tome medicamento da malária sem um profissional de saúde"] },
            { title: "Crianças pequenas", bullets: ["Vacinas contra a malária RTS,S e R21 onde existirem", "Medicamento preventivo na época das chuvas em algumas zonas", "Mantenha o cartão de saúde em dia"] },
            { title: "Continue a usar a rede", bullets: ["Vacinas e medicamentos funcionam melhor com redes", "Escreva as datas das consultas no seu plano", "Peça ajuda ao agente de saúde comunitário"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Se alguém na sua casa está grávida ou tem menos de 5 anos, escreva a próxima data de consulta de cada um e as perguntas que vai fazer sobre redes, vacinas e medicamentos preventivos. Se não houver ninguém, escreva-o para um vizinho ou familiar que possa ajudar.",
          youCanNow: "nomear os serviços da unidade sanitária que protegem as grávidas e as crianças pequenas da malária e planear as consultas.",
          quickCheck: [
            { objective: "O4", q: "Uma mulher da sua família está grávida. Qual é o primeiro passo para a proteger da malária?", options: ["Esperar até ao último mês", "Comprar medicamento para a malária no mercado", "Começar as consultas pré-natais cedo, dormir debaixo de uma rede e perguntar pela proteção contra a malária", "Deixar de comer fruta"], answer: 2, why: "As consultas pré-natais cedo e uma rede dão-lhe a proteção que a unidade sanitária oferece." },
            { objective: "O4", q: "O seu filho levou a vacina contra a malária. E a rede?", options: ["Deita-a fora", "Usa-a só na época das chuvas", "Dá-a aos vizinhos", "Continua a usá-la todas as noites; as vacinas funcionam melhor com redes"], answer: 3, why: "A OMS diz que as vacinas dão mais benefício juntas com as redes e outras medidas." }
          ]
        },
        {
          title: "Febre: faça o teste no mesmo dia",
          objectives: ["O5"],
          minutes: 5,
          goal: "Levar um familiar com febre a fazer o teste da malária no mesmo dia.",
          text: [
            "Numa zona de malária, trate cada febre como possível malária até um teste dizer o contrário. A malária muitas vezes começa como muitas outras doenças, com febre, arrepios de frio, dor de cabeça e dores no corpo, por isso não se sabe só de olhar. A OMS recomenda que cada caso suspeito seja confirmado com um teste, um teste rápido ou um microscópio, antes do tratamento.",
            "Vá no mesmo dia a uma unidade sanitária, um centro de saúde ou um agente de saúde comunitário formado que possa fazer o teste. Um teste rápido usa uma gota de sangue do dedo e dá o resultado em minutos. Numa criança com menos de 5 anos, a febre nunca deve esperar até amanhã.",
            "Se o teste mostrar malária, o profissional de saúde escolhe o medicamento e diz como o tomar. Tome-o todo, exatamente como lhe disseram, mesmo que a pessoa se sinta melhor. Não use restos de medicamentos, medicamentos de outra pessoa nem medicamentos desconhecidos do mercado ou de vendedores ambulantes: podem ser do tipo errado, pouco demais ou falsos. Se o teste for negativo, o profissional de saúde procura outra causa. Se a pessoa não melhorar, ou piorar, volte."
          ],
          steps: ["Febre numa zona de malária? Trate-a como possível malária.", "Vá no mesmo dia a uma unidade sanitária ou a um agente de saúde comunitário que possa fazer o teste.", "Se encontrarem malária: tome o medicamento exatamente como o profissional de saúde diz, todo.", "Nunca use restos de medicamentos, medicamentos emprestados ou desconhecidos.", "Não melhorou ou piorou? Volte logo."],
          words: [["Teste de diagnóstico rápido (TDR)", "um teste rápido com uma gota de sangue do dedo que mostra a malária em minutos. Em inglês chama-se RDT."], ["Resultado negativo", "o teste não encontrou malária."], ["Medicamento falso", "um medicamento que parece verdadeiro mas tem a quantidade errada ou nada que funcione."]],
          slides: [
            { title: "Cada febre pode ser malária", bullets: ["Febre, arrepios de frio, dor de cabeça, dores", "Não se sabe só de olhar", "OMS: teste antes do tratamento"] },
            { title: "Teste no mesmo dia", bullets: ["Unidade sanitária ou agente de saúde comunitário formado", "Teste rápido: uma gota de sangue, minutos", "Criança com menos de 5 anos: nunca espere até amanhã"] },
            { title: "Se for malária", bullets: ["O profissional de saúde escolhe o medicamento", "Tome-o todo exatamente como lhe disseram", "Não melhorou ou piorou? Volte"] },
            { title: "Nunca", bullets: ["Restos de medicamentos ou medicamentos emprestados", "Medicamentos desconhecidos de um vendedor ambulante", "Podem ser errados, pouco demais ou falsos"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Descubra onde a sua família pode fazer o teste da malária no mesmo dia: a unidade sanitária ou o agente de saúde comunitário mais próximo, o horário e como chegaria lá. Escreva isto no seu plano.",
          youCanNow: "fazer o teste a cada febre no mesmo dia e seguir só o tratamento do profissional de saúde, até ao fim.",
          quickCheck: [
            { objective: "O5", q: "O seu filho tem febre à noite. O que faz?", options: ["Faz o teste da malária no mesmo dia numa unidade sanitária ou com um agente de saúde comunitário", "Espera três dias", "Dá restos de medicamento da última vez", "Compra medicamento a um vendedor ambulante"], answer: 0, why: "A OMS aconselha o teste antes do tratamento, e a febre de uma criança não deve esperar." },
            { objective: "O5", q: "Depois de dois dias de medicamento para a malária, o seu marido sente-se melhor. O que deve fazer?", options: ["Parar e guardar o resto para a próxima vez", "Tomar tudo até ao fim exatamente como o profissional de saúde disse", "Dar o resto a um vizinho", "Tomar o dobro na próxima vez"], answer: 1, why: "Parar antes do fim pode deixar a malária voltar; tome tudo como lhe disseram." }
          ]
        },
        {
          title: "Sinais de perigo da malária grave e o plano da família",
          objectives: ["O6"],
          minutes: 5,
          goal: "Reconhecer os sinais de perigo da malária grave e levar logo a pessoa à unidade sanitária.",
          text: [
            "A malária pode ficar grave depressa, sobretudo nas crianças pequenas e nas grávidas. A malária grave é uma emergência.",
            "A OMS indica estes sinais de perigo. Vá JÁ à unidade sanitária ou ao hospital, de dia ou de noite, se a pessoa: está muito cansada ou fraca, ou não consegue sentar-se nem ficar de pé; está confusa, com muito sono ou difícil de acordar; tem convulsões (ataques), sobretudo mais de uma vez; tem dificuldade em respirar; tem urina escura ou com sangue; tem os olhos ou a pele amarelos; ou tem sangramentos fora do normal. Uma criança que não consegue beber nem mamar, ou que vomita tudo, também precisa já da unidade sanitária.",
            "Esteja preparado antes de acontecer: escreva os sinais de perigo e o nome, o lugar e o número de telefone da unidade sanitária, do hospital e do agente de saúde comunitário mais próximos num cartão na parede; saiba como vai chegar lá à noite; e guarde algum dinheiro para o transporte, se puder. Depois junte tudo o que aprendeu neste curso no plano da sua casa contra a malária."
          ],
          steps: ["Aprenda os sinais de perigo.", "Se vir algum: vá já à unidade sanitária ou ao hospital, de dia ou de noite.", "Faça um cartão com os sinais e os nomes e números da unidade sanitária e do agente de saúde mais próximos.", "Planeie como vai viajar à noite e guarde dinheiro para o transporte, se puder.", "Escreva o plano da sua casa contra a malária."],
          words: [["Malária grave", "malária que ficou perigosa para a vida e precisa logo de um hospital ou de uma unidade sanitária."], ["Convulsões (ataques)", "tremores repentinos do corpo que a pessoa não consegue controlar."], ["Icterícia", "cor amarela nos olhos ou na pele."]],
          slides: [
            { title: "A malária grave é uma emergência", bullets: ["Pode acontecer depressa", "Mais perigosa para crianças pequenas e grávidas"] },
            { title: "Vá JÁ, de dia ou de noite, se houver", bullets: ["Fraqueza extrema; confusão ou difícil de acordar", "Convulsões (ataques); dificuldade em respirar", "Urina escura ou com sangue; olhos ou pele amarelos; sangramentos", "Criança não consegue beber nem mamar, ou vomita tudo"] },
            { title: "Esteja preparado", bullets: ["Cartão dos sinais de perigo na parede", "Números da unidade sanitária, do hospital e do agente de saúde", "Plano de transporte à noite; dinheiro guardado, se puder"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Faça já o seu cartão dos sinais de perigo com pelo menos quatro sinais e o nome e número da unidade sanitária ou do agente de saúde comunitário mais próximo. Depois escreva o plano completo da sua casa contra a malária, da tarefa final.",
          youCanNow: "reconhecer os sinais de perigo da malária grave, pedir ajuda logo e manter um plano da sua casa contra a malária.",
          quickCheck: [
            { objective: "O6", q: "Uma criança com malária começa a ter convulsões. O que faz?", options: ["Espera para ver se para", "Dá mais do mesmo medicamento", "Vai já à unidade sanitária ou ao hospital", "Deixa a criança dormir para passar"], answer: 2, why: "As convulsões são um sinal de perigo da malária grave; é uma emergência." },
            { objective: "O6", q: "Qual destes é um sinal de perigo da malária grave?", options: ["Uma dor de cabeça leve", "Sentir um pouco de calor depois do trabalho", "Ter vontade de comer", "Olhos amarelos, ou urina escura ou com sangue"], answer: 3, why: "A OMS indica a icterícia e a urina escura ou com sangue como sinais de perigo que precisam de cuidados de emergência." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Proteger quem corre mais risco e agir depressa",
        questions: [
          { objective: "O4", q: "O que pode uma grávida receber nas consultas pré-natais em muitos países?", options: ["Redes de pesca grátis", "Uma rede tratada, o teste da malária e medicamento preventivo onde o programa oferece", "Medicamento para a malária para guardar em casa", "Nada sobre a malária"], answer: 1, why: "As consultas pré-natais são onde muitos programas dão redes, testes e medicamento preventivo na gravidez." },
          { objective: "O4", q: "Que vacinas contra a malária a OMS recomenda para crianças em zonas com muita malária?", options: ["RTS,S e R21", "Pólio e sarampo", "Só tétano", "Não há vacina contra a malária"], answer: 0, why: "A OMS recomenda a RTS,S (desde 2021) e a R21 (desde 2023) para crianças em zonas com malária moderada a alta." },
          { objective: "O5", q: "Porque fazer o teste antes de tratar uma febre?", options: ["Os testes são divertidos", "Para poder vender o medicamento", "Porque muitas doenças parecem malária; o teste mostra se é", "Os testes substituem as redes"], answer: 2, why: "A malária parece outras febres; o teste garante que é dado o tratamento certo." },
          { objective: "O5", q: "Um vendedor ambulante oferece comprimidos baratos para a malária. O que faz?", options: ["Compra-os para a família", "Compra-os só para as crianças", "Partilha-os com os vizinhos", "Não compra; faz o teste e o tratamento com um profissional de saúde"], answer: 3, why: "Um medicamento desconhecido pode ser errado ou falso; o teste e o tratamento de um profissional de saúde são seguros." },
          { objective: "O6", q: "À meia-noite, a sua filha com malária está confusa e muito difícil de acordar. O que faz?", options: ["Vai já à unidade sanitária ou ao hospital", "Espera pela manhã", "Dá-lhe mais medicamento", "Põe-na debaixo da rede e deixa-a dormir"], answer: 0, why: "A confusão e ser difícil de acordar são sinais de perigo; vá já, de dia ou de noite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Prevenir a Malária na Sua Família",
    questions: [
      { objective: "O1", q: "O que leva a malária de pessoa para pessoa?", options: ["As moscas", "Certos mosquitos (Anopheles)", "A água suja", "A tosse"], answer: 1, why: "A malária passa pela picada de mosquitos Anopheles infetados." },
      { objective: "O1", q: "Cerca de quanto tempo depois da picada costumam começar os sinais da malária?", options: ["Na mesma hora", "Depois de um ano", "10 a 15 dias", "Nunca"], answer: 2, why: "A OMS diz que os sintomas costumam aparecer 10 a 15 dias depois da picada infetada." },
      { objective: "O1", q: "Uma prima da Tunísia, onde a malária local é rara, visita você numa zona de malária. O que é verdade?", options: ["Está segura porque é adulta", "Não pode apanhar malária", "Só precisa de rede na época das chuvas", "Corre muito risco e deve consultar um profissional de saúde antes de viajar e dormir debaixo de uma rede"], answer: 3, why: "Os viajantes de lugares sem malária correm muito risco, por isso planeiam com um profissional de saúde." },
      { objective: "O2", q: "O que faz o inseticida numa rede tratada?", options: ["Mata ou enfraquece os mosquitos que pousam nela", "Dá um cheiro bom à rede", "Cura a malária", "Mantém a rede limpa"], answer: 0, why: "O inseticida mata ou enfraquece os mosquitos, por isso a rede protege mais." },
      { objective: "O2", q: "Como deve secar uma rede lavada?", options: ["Ao sol forte durante uma semana", "À sombra, depois de a lavar com cuidado", "Por cima do fogo da cozinha", "Molhada, em cima da cama"], answer: 1, why: "Lavar com cuidado e secar à sombra ajudam a rede a continuar a funcionar." },
      { objective: "O2", q: "Qual uso de uma rede está errado?", options: ["Por cima de uma esteira de dormir", "Por cima do berço de um bebé", "Fazer uma cerca para a horta", "Por cima da cama de uma grávida"], answer: 2, why: "As redes são para dormir debaixo delas; usá-las em hortas ou para pescar deixa as pessoas sem proteção." },
      { objective: "O3", q: "Que tarefa reduz os criadouros de mosquitos em casa?", options: ["Deixar os baldes destapados", "Guardar pneus velhos no quintal", "Dormir lá fora", "Esvaziar, tapar ou tirar as coisas que guardam água parada"], answer: 3, why: "Tirar a água parada acaba com os lugares onde os mosquitos põem os ovos." },
      { objective: "O3", q: "Quando deve fechar as portas e as janelas para não deixar entrar os mosquitos?", options: ["Ao anoitecer", "Ao meio-dia", "Só aos domingos", "Nunca"], answer: 0, why: "Os mosquitos da malária picam sobretudo a partir do fim da tarde e à noite." },
      { objective: "O3", q: "Porque trabalhar com os vizinhos contra a água parada?", options: ["Para pedir emprestados os pneus deles", "Porque os mosquitos voam de casa em casa", "Para eles pagarem", "Não faz diferença"], answer: 1, why: "Os criadouros na casa ao lado também mandam mosquitos para a sua casa." },
      { objective: "O4", q: "A OMS diz que a malária na gravidez pode fazer...", options: ["Nada", "Gémeos", "O bebé nascer antes do tempo ou pequeno demais", "Só uma constipação leve"], answer: 2, why: "A malária na gravidez pode levar ao parto antes do tempo e ao baixo peso à nascença." },
      { objective: "O4", q: "Onde pode saber se as vacinas contra a malária são dadas às crianças onde você vive?", options: ["Numa publicação nas redes sociais", "No mercado", "No palpite de um vizinho", "Na unidade sanitária ou com o agente de saúde comunitário"], answer: 3, why: "Os programas de vacinas mudam de lugar para lugar; a unidade sanitária sabe o que é oferecido." },
      { objective: "O4", q: "Em partes do Sahel, o que dão os profissionais de saúde às crianças pequenas na época das chuvas?", options: ["Medicamento preventivo contra a malária em campanhas", "Telefones grátis", "Redes de pesca", "Nada"], answer: 0, why: "A quimioprevenção sazonal da malária é dada às crianças pequenas nas épocas de alto risco em algumas zonas." },
      { objective: "O5", q: "O que recomenda a OMS antes de tratar um caso suspeito de malária?", options: ["Esperar uma semana", "Um teste rápido ou ao microscópio", "Perguntar a um vizinho", "Comprar dois tipos de medicamento"], answer: 1, why: "A OMS recomenda confirmar cada caso suspeito com um teste antes do tratamento." },
      { objective: "O5", q: "Tem comprimidos que sobraram da malária do ano passado. O seu filho tem febre. O que faz?", options: ["Dá-lhe os comprimidos velhos", "Dá-lhe metade dos comprimidos velhos", "Leva-o hoje a fazer o teste; não usa restos de medicamentos", "Espera para ver"], answer: 2, why: "Os restos de medicamentos podem ser do tipo errado ou pouco demais; faça primeiro o teste e siga o profissional de saúde." },
      { objective: "O5", q: "O teste da malária deu negativo, mas o seu filho ainda tem febre dois dias depois. O que faz?", options: ["Deixa de se preocupar", "Dá medicamento para a malária mesmo assim", "Espera mais uma semana", "Volta ao profissional de saúde"], answer: 3, why: "Se a febre continua ou piora, o profissional de saúde tem de ver outra vez." },
      { objective: "O5", q: "Quem decide que medicamento para a malária tomar e quanto?", options: ["Um profissional de saúde formado, depois de um teste", "A pessoa doente", "Um vendedor do mercado", "Uma mensagem SMS"], answer: 0, why: "Só um profissional de saúde pode escolher o medicamento e a quantidade certos depois de um teste." },
      { objective: "O6", q: "Qual destes quer dizer ir já à unidade sanitária?", options: ["O nariz a pingar", "Dificuldade em respirar", "Ter fome", "Um pequeno corte"], answer: 1, why: "A dificuldade em respirar é um sinal de perigo da malária grave." },
      { objective: "O6", q: "Um bebé com febre não quer mamar e vomita tudo. O que faz?", options: ["Tenta outra vez amanhã", "Dá só água e espera", "Vai já à unidade sanitária", "Dá medicamento de adulto"], answer: 2, why: "Uma criança que não consegue beber ou vomita tudo precisa logo da unidade sanitária." },
      { objective: "O6", q: "O que ajuda a agir depressa à noite numa emergência?", options: ["Nada; vai lembrar-se", "Uma lista de medicamentos e doses", "O PIN do seu dinheiro móvel", "Um cartão dos sinais de perigo com os números da unidade sanitária e um plano de transporte à noite"], answer: 3, why: "Saber os sinais, a quem ligar e como chegar lá poupa tempo." },
      { objective: "O1", q: "A malária pode passar de pessoa para pessoa pelo toque ou por partilhar comida?", options: ["Não; transmite-se pelas picadas de mosquitos", "Sim, pelo toque", "Sim, por partilhar comida", "Sim, pelo ar"], answer: 0, why: "A OMS diz que a malária não passa diretamente de pessoa para pessoa; são os mosquitos que a levam." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 3, 6, 9, 12, 13, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Quem corre risco", objective: "O1", notYet: "Ninguém está marcado como correndo mais risco, ou o plano não diz como a malária se transmite.", meets: "As crianças pequenas, as grávidas e outras pessoas de alto risco da casa estão nomeadas, com a picada do mosquito à noite como causa.", exceeds: "Também planeia para visitas ou viajantes de lugares sem malária." },
      { name: "Redes todas as noites", objective: "O2", notYet: "As redes estão contadas, mas não quem dorme debaixo delas, ou os buracos não são mencionados.", meets: "Cada lugar de dormir está na lista com uma rede, quem corre mais risco primeiro, com a verificação de buracos todas as semanas e cuidado ao lavar.", exceeds: "As redes que faltam estão contadas e o aluno já perguntou na unidade sanitária ou ao agente de saúde comunitário como as arranjar." },
      { name: "Menos mosquitos", objective: "O3", notYet: "Menos de três ações, ou ações que não tiram a água parada nem evitam as picadas.", meets: "Pelo menos três ações, como esvaziar recipientes, tapar bidões, limpar valas e fechar as portas ao anoitecer.", exceeds: "Há um dia de verificação marcado todas as semanas e os vizinhos participam." },
      { name: "Serviços da unidade sanitária", objective: "O4", notYet: "Nenhuma consulta planeada para uma grávida ou uma criança pequena da casa.", meets: "As datas das consultas pré-natais e das consultas da criança estão escritas, com perguntas sobre redes, vacinas e medicamentos preventivos.", exceeds: "As consultas estão marcadas ou feitas, e o cartão de saúde da criança está em dia." },
      { name: "O que fazer com a febre", objective: "O5", notYet: "O plano inclui tratar em casa com restos de medicamentos ou medicamentos do mercado, ou esperar para ver.", meets: "Um teste no mesmo dia numa unidade sanitária ou com um agente de saúde comunitário com nome, e o tratamento completo como o profissional de saúde diz.", exceeds: "O horário e um segundo lugar para fazer o teste também estão escritos." },
      { name: "Cartão dos sinais de perigo", objective: "O6", notYet: "Menos de quatro sinais de perigo, ou nenhum contacto da unidade sanitária.", meets: "Pelo menos quatro sinais de perigo e o nome e número da unidade sanitária ou do agente de saúde mais próximo.", exceeds: "Também um plano de transporte à noite, sem nomes de medicamentos nem doses no cartão." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Casas onde todas as pessoas, a começar pelas crianças pequenas e pelas grávidas, dormem debaixo de uma rede 30 dias depois (inquérito de seguimento)",
      "Famílias que fazem o teste da malária no mesmo dia para a febre de uma criança, segundo as famílias ou os agentes de saúde comunitários",
      "Mais grávidas a começar cedo as consultas pré-natais e mais crianças com as vacinas em dia onde as vacinas contra a malária são oferecidas",
      "Menos crianças a chegar tarde à unidade sanitária com malária grave na próxima época das chuvas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Uma rede mosquiteira tratada para praticar a pendurar e a verificar (ou a do próprio aluno)",
      "Uma agulha e linha para fechar os buracos",
      "Papel e caneta para o plano da casa e o cartão dos sinais de perigo",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Funciona bem com grupos de mães, grupos de consulta pré-natal, escolas, grupos religiosos, grupos de agricultores e visitas do agente de saúde comunitário; façam o teste inicial juntos.",
      "Pendurem uma rede juntos na Lição 2 e deem uma volta ao lugar da reunião para encontrar água parada na Lição 3.",
      "Convide o agente de saúde comunitário ou a enfermeira da unidade sanitária local para dizer o que a unidade sanitária oferece: as redes grátis, os testes, as vacinas e os medicamentos preventivos mudam de país para país e de zona para zona.",
      "Não diga nomes de medicamentos para a malária nem dê doses; mande todas as perguntas sobre tratamento para a unidade sanitária, o agente de saúde comunitário ou o ministério da saúde.",
      "Use as mensagens atuais do programa nacional de controlo da malária durante as campanhas e a época das chuvas.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
