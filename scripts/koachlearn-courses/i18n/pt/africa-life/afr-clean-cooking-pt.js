"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-clean-cooking.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Follows WHO guidance (cited). Fuel and stove prices are never given as facts: money figures are examples only. No medical treatment advice.

const WHO_HAP = { name: "Ficha informativa da OMS (WHO): Poluição do ar doméstico (combustíveis poluentes, efeitos na saúde, combustíveis limpos, petróleo de iluminação)", url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" };
const WHO_BURNS = { name: "Ficha informativa da OMS (WHO): Queimaduras (primeiros socorros e prevenção em casa)", url: "https://www.who.int/news-room/fact-sheets/detail/burns" };
const WHO_CHEST = { name: "OMS (WHO): Clean Household Energy Solutions Toolkit (combustíveis limpos, de transição e poluentes)", url: "https://www.who.int/tools/clean-household-energy-solutions-toolkit" };
const CCA = { name: "Clean Cooking Alliance (Aliança para a Cozinha Limpa)", url: "https://www.cleancooking.org/" };

module.exports = {
  id: "afr-clean-cooking-pt",
  lang: "pt",
  translationOf: "afr-clean-cooking",
  category: "Africa: Life and Work",
  name: "Cozinha Limpa: Fogões Mais Seguros e Cozinhas Sem Fumo",
  skills: "Explicar como o fumo da cozinha prejudica a saúde, Reduzir o fumo na cozinha hoje, Usar o fogo e o carvão e o gás e o petróleo com segurança, Comparar fogões e combustíveis mais limpos, Calcular o custo da mudança, Escrever um plano de segurança e de mudança para a cozinha",
  outcome: "tornar a sua cozinha mais segura e com menos fumo: explicar como o fumo prejudica a sua família, reduzir o fumo hoje com o que já tem, usar o fogo, o carvão, o gás e o petróleo com segurança, comparar fogões e combustíveis mais limpos pelo custo e pela segurança, e escrever um plano com que a sua família concorde.",
  about: [
    "Este curso é para todas as pessoas que cozinham com lenha, carvão ou petróleo, em casa ou num pequeno negócio de comida, nas cidades e nas aldeias de toda a África: mães, pais, avós, filhos mais velhos que ajudam a cozinhar e vendedores de comida.",
    "O Capítulo 1 fala do fumo e da segurança: como o fumo da cozinha prejudica a saúde, como reduzir o fumo hoje com o que já tem e como ficar seguro com o fogo, o carvão, o gás e o petróleo. O Capítulo 2 fala da mudança para uma cozinha mais limpa: comparar fogões e combustíveis, calcular o custo e escrever um plano para a cozinha com a sua família.",
    "Este curso segue os conselhos da Organização Mundial da Saúde (OMS, em inglês WHO). Não recomenda nenhuma marca nem nenhum vendedor. Os preços dos fogões e dos combustíveis mudam e são diferentes em cada lugar; todos os valores do curso são exemplos, por isso use os seus próprios preços. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de uma página de segurança e de mudança para a cozinha da sua família ou do seu negócio de comida (ou um exemplo, como uma família em Kisumu que cozinha num fogareiro a carvão (jiko), uma vendedora de comida em Lagos que usa lenha, ou uma família em Ouagadougou que cozinha em três pedras): com o que cozinha agora e quanto custa por mês; três passos para reduzir o fumo esta semana; as suas regras de segurança para o fogo, o carvão, o gás ou o petróleo e as crianças; duas opções mais limpas comparadas pelo custo, pelo fornecimento de combustível e pela segurança; a sua escolha, como vai pagar e a data da mudança; e quem na família concordou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que cozinham para uma família ou para um pequeno negócio de comida no Quénia, na Nigéria, no Gana, no Burkina Faso, no Senegal, nos Camarões, no Egito e em toda a África, sobretudo com lenha, carvão ou petróleo. Muitas são mulheres e raparigas que também vão buscar o combustível, e muitas têm um telefone simples e pouco dinheiro.",
    startingPoint: "A maioria cozinha numa fogueira aberta, em três pedras, num fogareiro a carvão ou num fogão a petróleo, muitas vezes dentro de uma cozinha pequena com pouco ar. Muitas sabem que o fumo arde nos olhos, mas não o ligam às doenças do peito nas crianças. Poucas compararam o que gastam em combustível por mês com o custo de um fogão mais limpo, e algumas têm medo do gás.",
    gap: "A OMS conta cerca de 2,1 mil milhões de pessoas no mundo que cozinham com combustíveis e fogões poluentes, e milhões de mortes por ano causadas pela poluição do ar doméstico, sendo as mulheres e as crianças pequenas as mais expostas. As fogueiras abertas, o carvão e o petróleo também causam queimaduras, intoxicação por monóxido de carbono e envenenamento de crianças. Os alunos que reduzem o fumo, cozinham com segurança e planeiam uma mudança protegem a saúde da família e muitas vezes poupam tempo e dinheiro.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; todos os termos são explicados",
      "Orçamento: apertado; o curso nunca dá preços reais, só exemplos, e os alunos usam os preços locais",
      "O fornecimento de combustível muda de lugar para lugar: o gás, a eletricidade e os fogões melhorados não existem em todo o lado, por isso os alunos escolhem o que lhes serve",
      "Segurança: nenhum trabalho em tubos de gás, instalações elétricas ou na rede elétrica; os alunos usam vendedores autorizados e seguem as instruções do fabricante",
      "Nenhum conselho de tratamento médico: queimaduras e problemas de respiração vão para o centro de saúde"
    ],
    prerequisites: "Nenhum. Somar e multiplicar de forma simples ajuda na Lição 5; a calculadora do telefone serve."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Numa cozinha que usa lenha, carvão ou petróleo", action: "explicar como o fumo da cozinha prejudica a saúde e a quem prejudica mais", standard: "indicando pelo menos três efeitos na saúde e as pessoas mais expostas" },
    { id: "O2", condition: "Usando o fogão e o combustível que tem agora", action: "fazer a lista dos passos que reduzem o fumo na sua cozinha esta semana", standard: "com pelo menos três passos que custam pouco ou nada" },
    { id: "O3", condition: "Quando cozinha com fogo, carvão, gás ou petróleo", action: "seguir regras de segurança que evitam queimaduras, intoxicação por monóxido de carbono, incêndios de gás e envenenamento por petróleo", standard: "escolhendo a ação segura em pelo menos 4 de 5 situações" },
    { id: "O4", condition: "Com duas ou mais opções de fogão e de combustível que existem onde vive", action: "comparar fogões e combustíveis mais limpos pelo fumo, pelo custo, pelo fornecimento de combustível e pela segurança", standard: "com uma razão correta para a opção que escolhe" },
    { id: "O5", condition: "Usando o que gasta em combustível e os preços locais", action: "calcular o seu custo mensal de combustível e compará-lo com o custo de uma opção mais limpa", standard: "com as contas certas e os riscos de pagamento indicados" },
    { id: "O6", condition: "Com a sua família ou o seu negócio", action: "escrever um plano de segurança e de mudança para a cozinha com que a família concorde", standard: "com todas as partes preenchidas e uma data para a mudança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fumo e segurança na cozinha",
      lessons: [
        {
          title: "Como o fumo da cozinha prejudica a sua família",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar como o fumo da cozinha prejudica a saúde e a quem prejudica mais.",
          text: [
            "O fumo da lenha, do carvão, dos restos das colheitas, do estrume e do petróleo está cheio de partículas muito pequenas e de gases. Não consegue ver a maior parte delas, mas elas entram fundo nos pulmões. A isto chama-se poluição do ar doméstico.",
            "A OMS diz que a poluição do ar doméstico causa pneumonia e outras infeções do peito nas crianças, e AVC, doenças do coração, doenças dos pulmões de longa duração e cancro do pulmão nos adultos. Também está ligada ao baixo peso à nascença e a doenças dos olhos. A OMS conta cerca de 2,1 mil milhões de pessoas no mundo que cozinham com combustíveis e fogões poluentes, a maioria em África e na Ásia.",
            "As mulheres e as crianças pequenas respiram mais fumo, porque passam mais tempo perto do fogo, e os bebés muitas vezes vão às costas enquanto a mãe cozinha. As raparigas e as mulheres também perdem horas a apanhar lenha, tempo que podia ser para a escola, o trabalho ou o descanso.",
            "O fumo que não se vê também faz mal. O cheiro a fumo, os olhos a arder, a tosse enquanto cozinha e as paredes ou o teto pretos são sinais de que a sua família respira fumo demais."
          ],
          words: [["Poluição do ar doméstico", "fumo e gases dentro e à volta de casa, sobretudo de cozinhar, aquecer e iluminar com combustíveis poluentes."], ["Combustíveis poluentes", "combustíveis que fazem muito fumo quando queimados em fogões simples: lenha, carvão, restos das colheitas, estrume, carvão mineral e petróleo."], ["Pneumonia", "uma infeção grave do peito; é uma das principais causas de morte de crianças pequenas."]],
          slides: [
            { title: "O que há no fumo", bullets: ["Partículas muito pequenas e gases", "Entram fundo nos pulmões", "Não consegue ver a maior parte"] },
            { title: "Como faz mal (OMS)", bullets: ["Crianças: pneumonia e infeções do peito", "Adultos: AVC, doenças do coração e dos pulmões, cancro do pulmão", "Ligado ao baixo peso à nascença e a doenças dos olhos"] },
            { title: "Quem respira mais fumo", bullets: ["As mulheres que cozinham", "Os bebés às costas e as crianças pequenas", "As raparigas que apanham lenha perdem tempo de escola"] },
            { title: "Sinais de fumo demais", bullets: ["Olhos a arder, tosse enquanto cozinha", "Paredes ou teto pretos", "Cheiro a fumo na roupa"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Observe a sua cozinha durante uma refeição. Escreva quanto tempo o fogo fica aceso, quem está perto dele, se há um bebé ou uma criança pequena e os sinais de fumo que vê. Escreva três maneiras como o fumo pode prejudicar a sua família.",
          youCanNow: "explicar como o fumo da cozinha prejudica a saúde e quem em sua casa respira mais fumo.",
          quickCheck: [
            { objective: "O1", q: "Que doença das crianças pequenas a OMS liga ao fumo da cozinha?", options: ["Pneumonia e infeções do peito", "Ossos partidos", "Dor de dentes", "Varicela"], answer: 0, why: "A poluição do ar doméstico causa infeções respiratórias como a pneumonia." },
            { objective: "O1", q: "Quem costuma respirar mais fumo da cozinha?", options: ["As visitas", "Os homens que trabalham na machamba", "As mulheres que cozinham e as crianças pequenas perto delas", "Ninguém; o fumo sobe"], answer: 2, why: "As mulheres e as crianças pequenas passam mais tempo perto do fogo." }
          ]
        },
        {
          title: "Reduzir o fumo hoje com o que já tem",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fazer a lista dos passos que reduzem o fumo na sua cozinha esta semana, com o fogão que tem agora.",
          text: [
            "Um fogão novo ajuda mais, mas pode reduzir o fumo já hoje. Deixe entrar o ar e sair o fumo: cozinhe lá fora ou debaixo de um abrigo quando puder, mantenha as portas e as janelas abertas enquanto cozinha e, se puder, faça uma janela, uma abertura entre a parede e o telhado ou uma chaminé perto do fogo.",
            "Queime menos e queime melhor. Use lenha seca: a lenha molhada faz muito mais fumo. Parta a lenha em pedaços finos e empurre-a devagar. Use uma tampa na panela, ponha o feijão e o milho de molho antes de cozinhar e apague o fogo logo que a comida estiver pronta.",
            "Mantenha as crianças longe. Mantenha os bebés e as crianças pequenas fora da cozinha enquanto o fogo está aceso, e não cozinhe com um bebé às costas se outra pessoa puder segurar o bebé.",
            "Nunca queime plástico, borracha ou madeira pintada: o fumo deles é venenoso."
          ],
          steps: ["Deixe entrar o ar: cozinhe lá fora ou abra as portas e as janelas.", "Use lenha seca e partida e empurre-a devagar.", "Tape as panelas; ponha o feijão e o milho de molho antes.", "Apague o fogo quando a comida estiver pronta.", "Mantenha os bebés e as crianças pequenas longe do fumo."],
          words: [["Ventilação", "deixar entrar ar fresco e sair o ar com fumo."], ["Abertura do beiral", "uma abertura entre o cimo da parede e o telhado que deixa sair o fumo."]],
          slides: [
            { title: "Deixe entrar o ar e sair o fumo", bullets: ["Cozinhe lá fora ou debaixo de um abrigo", "Abra as portas e as janelas", "Faça uma janela ou abertura no beiral perto do fogo"] },
            { title: "Queime menos, queime melhor", bullets: ["Lenha seca e fina", "Tampas nas panelas; feijão e milho de molho", "Apague o fogo quando a comida estiver pronta"] },
            { title: "Proteja as crianças", bullets: ["Mantenha-as fora da cozinha com fumo", "Outra pessoa segura o bebé", "Nunca queime plástico ou borracha"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Escolha três passos desta lição que pode começar esta semana sem dinheiro ou com muito pouco. Escreva-os, experimente-os durante três dias e anote o que mudou (menos fumo, menos lenha, menos tempo).",
          youCanNow: "reduzir o fumo na sua cozinha com passos que custam pouco ou nada.",
          quickCheck: [
            { objective: "O2", q: "Que lenha faz menos fumo?", options: ["Lenha molhada e verde", "Toros grandes metidos todos de uma vez", "Madeira pintada de uma porta velha", "Pedaços secos e finos empurrados devagar"], answer: 3, why: "A lenha seca e fina queima melhor e faz menos fumo." },
            { objective: "O2", q: "Que passo reduz o fumo e o combustível ao mesmo tempo?", options: ["Cozinhar com a tampa na panela", "Deixar o fogo aceso depois de cozinhar", "Fechar as janelas", "Queimar plástico para acender o fogo"], answer: 0, why: "A tampa cozinha a comida mais depressa, por isso queima menos combustível e faz menos fumo." }
          ]
        },
        {
          title: "Segurança com o fogo, o carvão, o gás e o petróleo",
          objectives: ["O3"],
          minutes: 6,
          goal: "Seguir regras de segurança que evitam queimaduras, intoxicação por monóxido de carbono, incêndios de gás e envenenamento por petróleo.",
          text: [
            "Queimaduras: mantenha o fogão firme e, se puder, levantado do chão, com uma proteção à volta da fogueira aberta. Vire os cabos das panelas para dentro. Mantenha as crianças longe do lugar onde se cozinha. Se alguém se queimar, os primeiros socorros da OMS são: pare a queimadura, arrefeça-a debaixo de água fresca a correr (cerca de 20 minutos para queimaduras pequenas), tire anéis e roupa apertada e cubra-a com um pano limpo. Não ponha manteiga, óleo, pasta de dentes nem pastas tradicionais. Vá ao centro de saúde se a queimadura for grande ou funda, ou se for na cara, nas mãos, nos pés ou nas partes íntimas.",
            "Carvão: um fogareiro a carvão aceso solta monóxido de carbono, um gás que não se vê nem se cheira e que pode matar. Nunca leve um fogareiro a carvão aceso para um quarto fechado para cozinhar ou aquecer o quarto, e nunca durma com um lá dentro. Dor de cabeça, tonturas e sono perto do fogareiro são sinais de alerta: leve todos para o ar livre.",
            "Gás (GPL): compre as botijas a um vendedor autorizado, mantenha a botija de pé e verifique a mangueira e o regulador. Se cheirar a gás: não acenda um fósforo nem ligue nenhum interruptor, feche a válvula da botija, abra as portas e as janelas e leve as pessoas para fora. Feche a válvula depois de cozinhar.",
            "Petróleo: a OMS desaconselha o petróleo para cozinhar e iluminar, e beber petróleo é uma das principais causas de envenenamento de crianças. Guarde-o num recipiente fechado e com etiqueta, nunca numa garrafa de bebida, e fora do alcance das crianças. Se uma criança o beber, vá já ao centro de saúde."
          ],
          steps: ["Mantenha o fogão firme e as crianças longe; vire os cabos para dentro.", "Nunca use carvão num quarto fechado nem enquanto dorme.", "Gás: vendedor autorizado, botija de pé, válvula fechada depois de cozinhar.", "Cheira a gás: sem chamas nem interruptores, feche a válvula, abra tudo, saia.", "Petróleo: recipiente com etiqueta, nunca uma garrafa de bebida, fora do alcance."],
          words: [["Monóxido de carbono", "um gás venenoso que vem da queima de combustível; não se vê nem se cheira."], ["GPL", "gás de petróleo liquefeito (em inglês LPG): o gás de cozinha vendido em botijas."], ["Regulador", "a peça em cima da botija de gás que controla o gás que vai para o fogão."]],
          slides: [
            { title: "Queimaduras", bullets: ["Fogão firme, cabos para dentro, crianças longe", "Socorro: água fresca a correr cerca de 20 minutos, pano limpo", "Nada de manteiga, óleo ou pastas; queimaduras grandes ao centro de saúde"] },
            { title: "Carvão", bullets: ["Solta monóxido de carbono: sem cor, sem cheiro", "Nunca num quarto fechado; nunca enquanto dorme", "Dor de cabeça ou tonturas perto dele: vá para o ar livre"] },
            { title: "Gás (GPL)", bullets: ["Vendedor autorizado; botija de pé", "Cheira a gás: sem chama nem interruptor, feche a válvula, abra, saia", "Feche a válvula depois de cozinhar"] },
            { title: "Petróleo", bullets: ["A OMS desaconselha", "Recipiente com etiqueta, nunca uma garrafa de bebida", "A criança bebeu: centro de saúde já"] }
          ],
          sources: [WHO_BURNS, WHO_HAP],
          tryIt: "Percorra a sua cozinha e escreva cinco regras de segurança para a sua casa: uma para as queimaduras e as crianças, uma para o carvão, uma para o gás ou o petróleo (o que usar), uma para guardar o combustível e uma para o que fazer numa emergência, com o centro de saúde mais próximo.",
          youCanNow: "cozinhar com segurança com fogo, carvão, gás e petróleo e agir depressa se alguma coisa correr mal.",
          quickCheck: [
            { objective: "O3", q: "Faz frio em Ouagadougou à noite. É seguro levar o fogareiro a carvão aceso para o quarto fechado?", options: ["Sim, se a porta estiver fechada", "Sim, se o carvão for de boa qualidade", "Sim, se dormir longe dele", "Não: solta monóxido de carbono, que pode matar"], answer: 3, why: "O monóxido de carbono acumula-se num quarto fechado e pode matar quem dorme." },
            { objective: "O3", q: "Sente cheiro a gás na cozinha. O que faz primeiro?", options: ["Acende um fósforo para encontrar a fuga", "Fecha a válvula e abre as portas e as janelas", "Liga a luz", "Não faz caso"], answer: 1, why: "Sem chamas nem interruptores; feche o gás e deixe-o sair." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fumo e segurança na cozinha",
        questions: [
          { objective: "O1", q: "Que doença dos adultos a OMS liga à poluição do ar doméstico?", options: ["AVC e doenças do coração", "Malária", "Febre tifoide", "Ossos partidos"], answer: 0, why: "A OMS indica AVC, doenças do coração, doenças dos pulmões e cancro do pulmão." },
          { objective: "O1", q: "Além do fumo, porque é que as raparigas perdem com a cozinha a lenha?", options: ["Ganham mais dinheiro", "Perdem tempo a apanhar lenha, o que pode custar-lhes a escola", "Dormem mais", "Não as afeta"], answer: 1, why: "Ir buscar combustível tira tempo à escola e ao trabalho." },
          { objective: "O2", q: "Que passo reduz o fumo na cozinha hoje?", options: ["Fechar todas as janelas", "Usar lenha molhada", "Cozinhar lá fora ou abrir as portas e as janelas", "Queimar plástico velho"], answer: 2, why: "A ventilação deixa sair o fumo." },
          { objective: "O3", q: "Uma criança em Yaoundé queimou-se com sopa quente. Quais são os primeiros socorros certos?", options: ["Pôr manteiga", "Cobrir com pasta de dentes", "Rebentar as bolhas", "Arrefecer debaixo de água fresca a correr e cobrir com um pano limpo"], answer: 3, why: "Os primeiros socorros da OMS são água fresca a correr e uma cobertura limpa; nada de manteiga nem pastas." },
          { objective: "O3", q: "Onde se deve guardar o petróleo?", options: ["Num recipiente fechado e com etiqueta, fora do alcance das crianças", "Numa garrafa velha de refresco", "No chão ao lado da cama", "Num copo em cima da mesa"], answer: 0, why: "As crianças bebem petróleo de garrafas e copos; é uma das principais causas de envenenamento de crianças." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mudar para uma cozinha mais limpa",
      lessons: [
        {
          title: "Fogões e combustíveis mais limpos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Comparar fogões e combustíveis mais limpos pelo fumo, pelo custo, pelo fornecimento de combustível e pela segurança.",
          text: [
            "A OMS indica as opções mais limpas: solar, eletricidade, biogás, GPL (gás de cozinha), gás natural, combustíveis de álcool como o etanol, e fogões a biomassa que cumprem as metas de emissões da OMS. A OMS desaconselha o petróleo e o carvão mineral não processado.",
            "Os fogões melhorados a lenha ou a carvão (também chamados fogões eficientes ou melhorados) queimam menos combustível e fazem menos fumo do que as três pedras ou uma fogueira aberta. São um passo em frente, mas a maioria ainda faz muito fumo, por isso mantenha a cozinha bem ventilada. Pergunte ao vendedor se o modelo foi testado.",
            "O gás (GPL) e a cozinha elétrica quase não fazem fumo na cozinha. Uma panela de pressão elétrica ou uma placa elétrica podem ser baratas de usar onde a eletricidade não falha, e são boas para feijão e guisados. O biogás serve para uma machamba com gado e espaço para um digestor. Uma caixa térmica (um cesto ou uma caixa bem isolados) acaba de cozinhar sem combustível extra e funciona com qualquer fogão.",
            "Escolha o que serve para o seu lugar: o combustível vende-se perto de si todo o ano? Consegue pagar as recargas? É seguro para a sua casa? Em muitas cidades o gás ou a eletricidade podem servir; nas aldeias longe dos fornecedores, um fogão melhorado com boa ventilação pode ser o primeiro passo."
          ],
          steps: ["Faça a lista dos fogões e combustíveis vendidos perto de si.", "Para cada um, anote o fumo (muito, algum, quase nenhum).", "Anote o fornecimento de combustível: sempre, às vezes, raramente.", "Anote o que é preciso para a segurança e o custo inicial e de funcionamento.", "Escolha a opção mais limpa que consegue abastecer e pagar."],
          words: [["Fogão melhorado", "um fogão a lenha ou a carvão feito para queimar menos combustível e fazer menos fumo do que uma fogueira aberta."], ["Biogás", "gás feito de estrume de animais e restos de plantas num tanque fechado chamado digestor."], ["Caixa térmica", "um cesto ou uma caixa isolados que mantêm uma panela quente a cozinhar sem mais combustível."]],
          slides: [
            { title: "As opções mais limpas (OMS)", bullets: ["Solar, eletricidade, biogás, GPL, gás natural, etanol", "Fogões a biomassa que cumprem as metas de emissões da OMS", "A OMS desaconselha o petróleo e o carvão mineral"] },
            { title: "Fogões melhorados a lenha e a carvão", bullets: ["Menos combustível e menos fumo do que uma fogueira aberta", "Ainda fazem fumo: continue a ventilar", "Pergunte se o modelo foi testado"] },
            { title: "Gás e eletricidade", bullets: ["Quase nenhum fumo na cozinha", "Panela de pressão elétrica: boa para feijão e guisados", "A caixa térmica poupa combustível com qualquer fogão"] },
            { title: "Escolha o que serve", bullets: ["O combustível vende-se perto de si todo o ano?", "Consegue pagar as recargas?", "É seguro para a sua casa?"] }
          ],
          sources: [WHO_HAP, WHO_CHEST, CCA],
          tryIt: "Pergunte no mercado, na loja ou ao vendedor de gás da sua zona que fogões e combustíveis se vendem perto de si. Faça uma pequena tabela com duas ou três opções e quatro colunas: fumo, fornecimento de combustível, segurança e custo (use os preços reais que lhe disserem).",
          youCanNow: "comparar fogões e combustíveis mais limpos pelo fumo, pelo custo, pelo fornecimento de combustível e pela segurança, e escolher um que lhe sirva.",
          quickCheck: [
            { objective: "O4", q: "Qual destes a OMS indica como combustível limpo para cozinhar?", options: ["Petróleo", "Carvão mineral não processado", "GPL (gás de cozinha)", "Lixo de plástico"], answer: 2, why: "A OMS indica o GPL, a eletricidade, o biogás, o solar e o etanol entre os combustíveis limpos." },
            { objective: "O4", q: "Uma família numa aldeia longe de qualquer vendedor de gás quer menos fumo já. Qual é um primeiro passo sensato?", options: ["Um fogão melhorado com boa ventilação", "Comprar uma botija de gás que não consegue recarregar", "Mudar para o petróleo", "Cozinhar dentro de casa com as janelas fechadas"], answer: 0, why: "Um fogão melhorado com ventilação reduz o fumo onde ainda não há combustíveis mais limpos." }
          ]
        },
        {
          title: "Calcular o custo e pagar a mudança",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular o seu custo mensal de combustível e compará-lo com o custo de uma opção mais limpa.",
          text: [
            "Muitas famílias acham que cozinhar de forma limpa é caro demais, mas nunca somam o que já gastam. Escreva o que gasta em lenha, carvão ou petróleo numa semana normal e multiplique por 4 para ter um custo mensal aproximado. Se vai buscar lenha, conte também as horas gastas.",
            "Para a opção mais limpa, conte dois custos: o custo inicial (o fogão, a botija e o regulador) e o custo de funcionamento (recargas ou eletricidade todos os meses). Depois compare o custo de funcionamento com o que gasta agora e calcule quantos meses a poupança leva a pagar o custo inicial.",
            "Exemplo com números inventados, não preços reais: uma família em Kisumu gasta KES 300 por semana em carvão, cerca de KES 1,200 por mês. Uma opção mais limpa custa KES 900 por mês a funcionar e KES 3,600 no início. Poupam KES 300 por mês, por isso o custo inicial fica pago em 12 meses (3,600 a dividir por 300). Use os seus próprios preços.",
            "Formas de pagar: poupe um pouco todas as semanas, compre em conjunto através de um grupo de poupança (como o xitique, o chama, a tontine ou o esusu), ou pergunte por planos de gás ou de fogão a pagar conforme usa onde vive. Antes de assinar, pergunte o preço total, o que acontece se falhar um pagamento e quem faz a reparação. Não pague a um desconhecido que promete um fogão grátis em troca de uma taxa, e compre gás só a vendedores autorizados."
          ],
          steps: ["Escreva o que gasta em combustível por semana e multiplique por 4.", "Escreva o custo inicial e o custo mensal de uma opção mais limpa.", "Subtraia para encontrar a poupança mensal (ou o custo a mais).", "Divida o custo inicial pela poupança mensal para saber em quantos meses fica pago.", "Escolha como pagar e verifique as condições."],
          words: [["Custo inicial", "o dinheiro que paga uma vez no início, por exemplo pelo fogão."], ["Custo de funcionamento", "o dinheiro que paga muitas vezes, como as recargas de combustível."], ["Ficar pago", "o tempo que a poupança leva a cobrir o que pagou no início."], ["Pagar conforme usa", "pagar em pequenos valores, muitas vezes por dinheiro móvel, à medida que usa o combustível ou o fogão."]],
          slides: [
            { title: "Quanto gasta agora?", bullets: ["Gasto semanal em combustível x 4 = custo mensal", "Conte também as horas a apanhar lenha"] },
            { title: "Dois custos da mudança", bullets: ["Inicial: fogão, botija, regulador", "De funcionamento: recargas ou eletricidade todos os meses"] },
            { title: "Exemplo (números inventados)", bullets: ["Carvão KES 1,200 por mês; opção mais limpa KES 900", "Poupança de KES 300 por mês", "Inicial KES 3,600 / 300 = 12 meses para ficar pago"] },
            { title: "Pagar com segurança", bullets: ["Poupe todas as semanas ou compre pelo grupo de poupança", "Pergunte o preço total e as regras se falhar um pagamento", "Nada de taxas por \"fogões grátis\"; só vendedores de gás autorizados"] }
          ],
          tryIt: "Escreva o que a sua família gasta em combustível de cozinha numa semana normal (na sua moeda, por exemplo NGN, GHS, XOF, XAF ou EGP) e calcule o mês. Depois use os preços reais que encontrou na Lição 4 para calcular a poupança mensal e os meses para ficar pago de uma opção mais limpa.",
          youCanNow: "calcular quanto lhe custa o combustível de cozinha por mês e se uma opção mais limpa fica paga.",
          quickCheck: [
            { objective: "O5", q: "Só um exemplo: uma família gasta GHS 50 por semana em carvão. Quanto é isso, mais ou menos, por mês?", options: ["GHS 50", "GHS 100", "GHS 500", "GHS 200"], answer: 3, why: "50 por semana vezes 4 semanas é cerca de 200 por mês." },
            { objective: "O5", q: "Um homem telefona a oferecer um \"fogão grátis do governo\" se primeiro enviar uma taxa por dinheiro móvel. O que é isto?", options: ["Um bom negócio", "Um sinal de alerta de burla; não pague", "Um imposto normal", "Um depósito obrigatório"], answer: 1, why: "Pedir uma taxa para receber uma coisa grátis é um sinal comum de burla." }
          ]
        },
        {
          title: "O seu plano de segurança e de mudança para a cozinha",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escrever um plano de segurança e de mudança para a cozinha com que a sua família concorde.",
          text: [
            "Um plano transforma o que aprendeu em ação. Tem seis partes: com o que cozinha agora e o custo mensal; três passos para reduzir o fumo esta semana; as suas regras de segurança; duas opções mais limpas comparadas; a sua escolha, como vai pagar e a data da mudança; e quem concordou.",
            "Fale com toda a família. A pessoa que paga e a pessoa que cozinha podem ver as coisas de maneira diferente. Partilhe o que o fumo faz ao peito das crianças, o dinheiro que contou e o tempo poupado a apanhar lenha. Pergunte a todos o que os preocupa, como o medo do gás ou o sabor da comida, e responda.",
            "Se tem um negócio de comida, como uma casa de pasto em Kumasi, uma barraca de comida (mama put) em Lagos ou uma dibiterie em Dakar, junte os seus clientes e trabalhadores: menos fumo quer dizer um lugar mais limpo e trabalhadores mais saudáveis, e o combustível é muitas vezes um dos seus maiores custos.",
            "Ponha o plano na parede. Depois de um mês, verifique: há menos fumo, e quanto custou o combustível? Mude o plano se for preciso."
          ],
          steps: ["Escreva as seis partes do plano.", "Converse sobre ele com a família ou os trabalhadores.", "Responda às preocupações deles.", "Combinem a escolha, o pagamento e a data da mudança.", "Verifique depois de um mês e ajuste."],
          words: [["Plano de mudança", "um plano escrito para passar a uma forma de cozinhar mais limpa e mais segura."]],
          slides: [
            { title: "Seis partes do plano", bullets: ["Agora: combustível e custo mensal", "Três passos contra o fumo; regras de segurança", "Duas opções comparadas; escolha, pagamento, data; quem concordou"] },
            { title: "Combinem juntos", bullets: ["Quem cozinha e quem paga podem ser pessoas diferentes", "Partilhe os factos sobre saúde, dinheiro e tempo", "Responda às preocupações, como o medo do gás"] },
            { title: "Para negócios de comida", bullets: ["Lugar mais limpo, trabalhadores mais saudáveis", "O combustível é muitas vezes um custo grande"] },
            { title: "Verifique depois de um mês", bullets: ["Menos fumo?", "Quanto custou o combustível?", "Mude o plano se for preciso"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de uma página de segurança e de mudança para a cozinha com as seis partes. Converse sobre ele com a sua família ou os trabalhadores e escreva os nomes de quem concordou.",
          youCanNow: "escrever um plano de segurança e de mudança para a cozinha e combiná-lo com a sua família.",
          quickCheck: [
            { objective: "O6", q: "O que faz parte de um plano de mudança para a cozinha?", options: ["Uma data para a mudança e como vai pagar", "Só a cor do fogão", "Nada sobre segurança", "Uma promessa de cozinhar a carvão dentro de casa"], answer: 0, why: "O plano precisa de uma escolha, de um plano de pagamento e de uma data para a mudança acontecer." },
            { objective: "O6", q: "A pessoa que cozinha quer gás, mas a pessoa que paga está preocupada com o custo. O que ajuda mais?", options: ["Não fazer caso da preocupação", "Comprar sem lhe dizer", "Mostrar o custo mensal de combustível que contou e os factos sobre a saúde", "Desistir"], answer: 2, why: "Números reais e factos sobre a saúde ajudam a família a chegar a acordo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Mudar para uma cozinha mais limpa",
        questions: [
          { objective: "O4", q: "Qual quase não faz fumo na cozinha?", options: ["Três pedras", "Fogão a petróleo", "Fogueira aberta", "Panela de pressão elétrica"], answer: 3, why: "Cozinhar com eletricidade ou gás quase não faz fumo na cozinha." },
          { objective: "O4", q: "O que faz uma caixa térmica?", options: ["Faz gás a partir de estrume", "Mantém uma panela quente a cozinhar sem combustível extra", "Queima plástico sem fumo", "Carrega o telefone"], answer: 1, why: "O isolamento guarda o calor, e a comida acaba de cozinhar sem mais combustível." },
          { objective: "O5", q: "Só um exemplo: uma opção mais limpa poupa XAF 5,000 por mês e custa XAF 30,000 no início. Em quantos meses fica paga?", options: ["6 meses", "3 meses", "25 meses", "35 meses"], answer: 0, why: "30,000 a dividir por 5,000 é 6." },
          { objective: "O5", q: "Antes de assinar um plano de fogão a pagar conforme usa, o que deve perguntar?", options: ["Nada", "Só a cor", "O preço total e o que acontece se falhar um pagamento", "A comida preferida do vendedor"], answer: 2, why: "O custo total e as regras para pagamentos falhados mostram o risco real." },
          { objective: "O6", q: "Depois da mudança, o que deve a família fazer?", options: ["Nunca mais pensar nisso", "Verificar depois de um mês o fumo e o custo, e ajustar", "Voltar ao petróleo", "Deitar o plano fora"], answer: 1, why: "Verificar mostra se o plano funcionou e o que mudar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Cozinha Limpa: Fogões Mais Seguros e Cozinhas Sem Fumo",
    questions: [
      { objective: "O1", q: "A poluição do ar doméstico vem sobretudo de:", options: ["Buzinas dos carros", "Cozinhar com combustíveis poluentes em fogões simples", "Telemóveis", "Água de beber"], answer: 1, why: "O fumo da lenha, do carvão, do estrume e do petróleo é a principal fonte." },
      { objective: "O1", q: "Qual é um sinal de que a sua família respira fumo demais?", options: ["Olhos a arder e tosse enquanto cozinha", "Paredes brancas e limpas", "Nenhum cheiro na roupa", "Ar fresco na cozinha"], answer: 0, why: "Olhos a arder, tosse e paredes pretas são sinais de muito fumo." },
      { objective: "O1", q: "Porque é arriscado cozinhar numa fogueira aberta com um bebé às costas?", options: ["O bebé aborrece-se", "Não é arriscado", "O bebé respira muito fumo", "A comida cozinha mais devagar"], answer: 2, why: "Os bebés perto do fogo respiram o fumo e podem apanhar infeções do peito." },
      { objective: "O2", q: "O que reduz o fumo sem custar nada?", options: ["Fechar a porta", "Usar lenha molhada", "Queimar borracha", "Abrir as portas e as janelas enquanto cozinha"], answer: 3, why: "A ventilação deixa sair o fumo sem custo." },
      { objective: "O2", q: "Pôr o feijão de molho antes de cozinhar ajuda porque:", options: ["Coze mais depressa, usa menos combustível e faz menos fumo", "Acrescenta sal", "Faz mais fumo", "Não serve para nada"], answer: 0, why: "Cozinhar menos tempo quer dizer menos combustível e menos fumo." },
      { objective: "O2", q: "O que nunca deve queimar?", options: ["Lenha seca", "Carvão num espaço aberto", "Plástico e borracha", "Carolos de milho"], answer: 2, why: "Queimar plástico e borracha solta fumo venenoso." },
      { objective: "O3", q: "O monóxido de carbono do carvão é perigoso porque:", options: ["Tem um cheiro forte", "Não se vê nem se cheira, e pode matar", "Tem cor", "Só afeta as plantas"], answer: 1, why: "Não dá nenhum aviso, por isso as pessoas podem ficar intoxicadas em quartos fechados." },
      { objective: "O3", q: "Os primeiros socorros da OMS para queimaduras dizem para:", options: ["Pôr manteiga", "Usar gelo", "Rebentar as bolhas", "Arrefecer debaixo de água fresca a correr"], answer: 3, why: "Água fresca a correr durante cerca de 20 minutos é o conselho da OMS para queimaduras pequenas." },
      { objective: "O3", q: "Se cheirar a gás, NÃO deve:", options: ["Abrir as janelas", "Fechar a válvula da botija", "Acender um fósforo ou ligar um interruptor", "Levar as pessoas para fora"], answer: 2, why: "Uma chama ou uma faísca pode fazer explodir o gás." },
      { objective: "O3", q: "Uma criança em Kano bebeu petróleo de uma garrafa de refresco. A família deve:", options: ["Ir já ao centro de saúde", "Esperar para ver", "Dar óleo à criança", "Fazer a criança vomitar"], answer: 0, why: "O envenenamento por petróleo precisa de cuidados já; o centro de saúde decide o tratamento." },
      { objective: "O4", q: "O que a OMS desaconselha para cozinhar?", options: ["GPL", "Eletricidade", "Petróleo", "Biogás"], answer: 2, why: "A OMS desaconselha o petróleo e o carvão mineral não processado." },
      { objective: "O4", q: "Um fogão melhorado a carvão:", options: ["Não faz fumo nenhum", "Usa menos combustível e faz menos fumo, mas ainda precisa de ventilação", "É igual a uma fogueira aberta", "Pode ser usado num quarto fechado"], answer: 1, why: "Os fogões melhorados ajudam, mas a maioria ainda faz fumo e monóxido de carbono." },
      { objective: "O4", q: "O biogás serve melhor para:", options: ["Uma machamba com gado e espaço para um digestor", "Um apartamento sem animais", "Uma banca de mercado sem espaço", "Um carro"], answer: 0, why: "O biogás é feito de estrume e restos de plantas num digestor." },
      { objective: "O4", q: "Antes de escolher um combustível, a pergunta mais importante é:", options: ["De que cor é o fogão?", "Vende-se perto de mim todo o ano, e consigo pagar as recargas?", "O que acham os vizinhos da marca?", "A caixa é grande?"], answer: 1, why: "Um fogão limpo só ajuda se conseguir continuar a comprar o combustível dele." },
      { objective: "O5", q: "Para saber o seu custo mensal de combustível, pode:", options: ["Adivinhar", "Multiplicar o gasto semanal por 4", "Dividir por 4", "Perguntar a um desconhecido"], answer: 1, why: "O gasto semanal vezes 4 dá um custo mensal aproximado." },
      { objective: "O5", q: "Só um exemplo: poupança mensal EGP 100, custo inicial EGP 800. Em quantos meses fica pago?", options: ["100", "900", "700", "8"], answer: 3, why: "800 a dividir por 100 é 8." },
      { objective: "O5", q: "Onde deve comprar as botijas de gás?", options: ["A um vendedor autorizado", "A qualquer pessoa à beira da estrada", "Numa loja de recargas sem etiqueta, à noite", "A um desconhecido na internet que quer o pagamento primeiro"], answer: 0, why: "Os vendedores autorizados seguem as regras de segurança para as botijas e as recargas." },
      { objective: "O6", q: "Quem deve concordar com o plano de mudança para a cozinha?", options: ["Só o vendedor", "Ninguém", "A família, incluindo a pessoa que cozinha e a pessoa que paga", "Só as crianças"], answer: 2, why: "Todas as pessoas afetadas devem concordar para o plano funcionar." },
      { objective: "O6", q: "Um bom plano de mudança inclui:", options: ["Nenhuma data", "Só o nome da marca", "Nada sobre segurança", "Duas opções comparadas, uma escolha, como pagar e uma data de mudança"], answer: 3, why: "Estas partes tornam o plano claro e possível de cumprir." },
      { objective: "O6", q: "Uma vendedora de comida em Dakar junta que ponto extra ao seu plano?", options: ["Menos fumo para os trabalhadores e os clientes, e os custos de combustível", "A cor dos pratos", "Nada", "Mais petróleo"], answer: 0, why: "Num negócio, a saúde dos trabalhadores e o custo do combustível contam." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 10, 13, 14, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Porque é importante", objective: "O1", notYet: "Não dá nenhuma razão de saúde, ou as razões estão erradas.", meets: "Indica pelo menos três efeitos do fumo na saúde e quem em casa respira mais fumo.", exceeds: "Também indica o tempo perdido a ir buscar combustível e quem é afetado." },
      { name: "Fumo reduzido esta semana", objective: "O2", notYet: "Menos de três passos, ou passos que custam muito.", meets: "Três passos que custam pouco ou nada, como ventilação, lenha seca e tampas.", exceeds: "Os passos foram experimentados, com uma nota do que mudou." },
      { name: "Regras de segurança", objective: "O3", notYet: "Faltam regras para o combustível usado, ou há uma regra perigosa.", meets: "Regras claras para as queimaduras e as crianças e para os combustíveis que a família usa, com o centro de saúde mais próximo.", exceeds: "Inclui os passos para uma fuga de gás ou a regra do monóxido de carbono do carvão, e como guardar o combustível." },
      { name: "Opções comparadas", objective: "O4", notYet: "Só uma opção, ou nenhuma comparação.", meets: "Duas opções comparadas pelo fumo, pelo fornecimento de combustível, pela segurança e pelo custo, com uma razão correta para a escolha.", exceeds: "Os preços vêm de vendedores locais reais e o fornecimento de combustível foi verificado." },
      { name: "Custo e pagamento", objective: "O5", notYet: "Não há custo mensal, ou as contas estão erradas.", meets: "O custo mensal de combustível agora, os custos da opção mais limpa e uma forma de pagar, com as contas certas.", exceeds: "Mostra os meses para ficar pago e indica as perguntas a fazer antes de assinar." },
      { name: "Plano combinado", objective: "O6", notYet: "Não há data de mudança, ou mais ninguém o viu.", meets: "As seis partes estão preenchidas, com uma data de mudança e os nomes de quem concordou.", exceeds: "Inclui uma verificação do fumo e do custo depois de um mês." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Famílias que dizem usar pelo menos três passos contra o fumo 30 dias depois (inquérito de seguimento)",
      "Famílias que dizem não usar nenhum fogareiro a carvão em quartos fechados e guardar o petróleo com segurança",
      "Famílias ou negócios de comida que mudam para um fogão ou combustível mais limpo em 6 meses",
      "Alunos que dizem gastar menos dinheiro ou tempo com o combustível de cozinha"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone simples com calculadora, ou papel e caneta",
      "Preços locais de fogões e combustíveis, recolhidos pelo aluno ou pelo facilitador",
      "Se possível, um fogão melhorado, um fogão a gás ou uma caixa térmica para mostrar ao grupo",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Bons parceiros: grupos de mulheres, grupos de poupança, escolas, centros de saúde, agentes comunitários de saúde e empresas locais de cozinha limpa (não promova nenhuma marca).",
      "Recolha preços reais locais de fogões e combustíveis antes da sessão; o curso usa só números de exemplo inventados.",
      "Uma demonstração ao ar livre funciona bem: compare o fumo da lenha molhada e da lenha seca, ou das três pedras e de um fogão melhorado.",
      "Segurança do gás: mostre como fechar a válvula e verificar a mangueira; nunca procure fugas com uma chama. Não deixe os alunos mexer em instalações elétricas nem em tubos de gás.",
      "Queimaduras e envenenamento: ensine os primeiros socorros da OMS e mande os alunos para o centro de saúde; não dê conselhos de tratamento.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
