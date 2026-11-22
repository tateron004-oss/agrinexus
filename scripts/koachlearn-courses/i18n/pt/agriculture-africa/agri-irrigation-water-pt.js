"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-irrigation-water.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_WATERNEEDS = { name: "FAO, Manual de formação em gestão da água de rega n.º 3: necessidades de água de rega", url: "https://www.fao.org/4/s2022e/s2022e00.htm" };
const FAO_HARVEST = { name: "FAO: Captação de água, manual para desenhar e construir sistemas de captação de água para a produção vegetal", url: "https://www.fao.org/4/u3160e/u3160e00.htm" };
const FAO_DRIP = { name: "FAO: Manual técnico de técnicas de rega sob pressão (inclui sistemas familiares de gota a gota de baixo custo)", url: "https://www.fao.org/4/a1336e/a1336e.pdf" };
const FAO_SOLAR = { name: "FAO: Boas perspetivas para os sistemas de rega com energia solar", url: "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/en" };
const FAO_SALINITY = { name: "FAO: Qualidade da água para a agricultura (salinidade, lavagem e drenagem)", url: "https://www.fao.org/4/t0234e/t0234e03.htm" };
const WRA = { name: "Water Resources Authority, Quénia (autoridade dos recursos hídricos; licenças de uso da água)", url: "https://wra.go.ke" };

module.exports = {
  id: "agri-irrigation-water-pt",
  lang: "pt",
  translationOf: "agri-irrigation-water",
  category: "Agriculture (Africa)",
  name: "Rega e Gestão da Água",
  skills: "Saber quando uma cultura precisa de água, Captar a água da chuva, Guardar a água com segurança, Montar um kit de gota a gota de baixo custo, Planear a rega sem encharcar o solo nem acumular sal, Escolher uma bomba, incluindo a solar",
  outcome: "planear a rega de uma pequena parcela: saber quando a sua cultura precisa mais de água, captar e guardar a água da chuva, montar e usar um kit de gota a gota de baixo custo com um horário, evitar o encharcamento e a acumulação de sal, e escolher uma bomba adequada.",
  about: [
    "Este curso é para pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas e jovens agricultores no Quénia, na Nigéria, no Gana e em toda a África que querem produzir durante os períodos secos, fazer uma segunda cultura na época seca ou usar melhor a água que têm. Trata de métodos de baixo custo que pode começar numa pequena parcela, como uma horta de tomate e couve ou um viveiro de mudas de café.",
    "O Capítulo 1 trata de onde vem a água: quanta água as culturas precisam e quando, como captar a água da chuva dos telhados e dos campos, e como guardá-la com segurança. O Capítulo 2 trata de levar a água à cultura: a rega gota a gota de baixo custo, o horário de rega sem encharcar o solo nem acumular sal, e a escolha de uma bomba, incluindo as bombas solares.",
    "As regras e licenças da água mudam de país para país. Por isso, fale com a autoridade da água e com o seu extensionista antes de abrir um furo, bombear de um rio ou construir uma charca grande. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria machamba. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano de rega de uma página para uma pequena parcela (a sua, ou um exemplo, como 200 metros quadrados de tomate perto de Nakuru ou 500 metros quadrados de cebola e pimento perto de Kano): a cultura e as fases em que precisa mais de água, de onde virá a água e quanta pode guardar, o sistema de gota a gota ou outro que vai usar, um horário de rega semanal e como vai verificar o solo, como vai evitar o encharcamento e a acumulação de sal, e a bomba que escolheria e porquê.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas e jovens agricultores no Quénia, na Nigéria, no Gana e em toda a África que querem produzir durante os períodos secos, fazer uma cultura na época seca ou usar melhor a água em pequenas parcelas de hortícolas, milho ou mudas.",
    startingPoint: "A maioria depende da chuva e rega à mão com regadores ou baldes quando pode. Poucos verificam a humidade do solo na zona das raízes, conhecem as fases em que a cultura precisa mais de água, captam a água que escorre do telhado ou do campo, usam um kit de gota a gota ou sabem escolher o tamanho de uma bomba.",
    gap: "A falta de água na floração e na formação dos frutos é o que mais baixa a colheita, e a água desperdiçada, suja ou mal gerida traz doenças, encharcamento e solo salgado. Planear a água de uma pequena parcela ajuda os agricultores a colher mais, a produzir na época seca e a gastar menos em água e combustível.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo sobre a água é explicado",
      "Aparelhos: um telefone simples e um caderno; uma pequena parcela para praticar",
      "Dinheiro: primeiro os métodos de baixo custo; os alunos comparam eles próprios os preços dos fornecedores",
      "As regras e licenças da água mudam de país para país: fale com a autoridade da água antes de abrir furos, fazer represas ou bombear",
      "Segurança: charcas e tanques ficam tapados e vedados; para a água de beber, peça conselho ao serviço de saúde sobre o tratamento"
    ],
    prerequisites: "Nenhum. O curso \"Saúde e Fertilidade do Solo\" ajuda com a cobertura morta e a drenagem."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para a sua cultura principal", action: "dizer as fases em que ela precisa mais de água e verificar à mão a humidade do solo na zona das raízes", standard: "decidindo bem se deve regar ou esperar" },
    { id: "O2", condition: "Para o seu telhado e o seu terreno", action: "calcular quanta chuva um telhado pode captar e escolher um método no campo para manter a chuva no seu terreno", standard: "usando cerca de 1 litro por metro quadrado por cada milímetro de chuva e contando com menos" },
    { id: "O3", condition: "Para a água captada", action: "escolher um reservatório e mantê-lo limpo, tapado e dentro da lei", standard: "com o reservatório tapado ou vedado e a licença verificada, se for precisa" },
    { id: "O4", condition: "Para uma parcela de cerca de 100 a 500 metros quadrados", action: "montar e cuidar de um kit de gota a gota por gravidade", standard: "com o bidão a pelo menos 1 metro de altura, o filtro limpo e nenhum gotejador entupido" },
    { id: "O5", condition: "Durante uma época de cultivo", action: "fazer um horário de rega semanal e detetar cedo o encharcamento e a acumulação de sal", standard: "verificando o solo antes de cada rega" },
    { id: "O6", condition: "Quando a água tem de ser elevada ou levada para longe", action: "comparar bombas de pedal, a combustível e solares e fazer a lista do que perguntar a um fornecedor", standard: "dando a necessidade diária de água, a altura de elevação e a distância, e bombeando só o que a cultura precisa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar e guardar a água",
      lessons: [
        {
          objectives: ["O1"],
          title: "Quanta água a sua cultura precisa, e quando?",
          minutes: 5,
          goal: "Dizer as fases em que a sua cultura precisa mais de água e verificar à mão a humidade do solo.",
          text: [
            "O manual de formação da FAO (a Organização das Nações Unidas para a Alimentação e a Agricultura) sobre as necessidades de água de rega explica que a água de que uma cultura precisa depende de três coisas: o clima, o tipo de cultura e a fase de crescimento. Dias quentes, de sol, secos e com vento fazem as culturas usar mais água; dias frescos, nublados e sem vento, menos. Culturas altas e com muitas folhas usam mais do que as pequenas.",
            "Para planear, a fase de crescimento é o mais importante. Uma cultura precisa de pouca água quando é pequena, da maior quantidade na floração e quando o grão ou o fruto se está a formar, e de menos quando amadurece. O milho sofre mais com a seca no pendoamento e no aparecimento das barbas; o tomate na floração e no vingamento dos frutos; o feijão na floração e no enchimento das vagens. Um período seco nestas fases é o que mais baixa a colheita.",
            "Verifique o solo, não só a superfície. Enfie um dedo ou um pauzinho no solo perto das raízes, a cerca de 10 a 15 cm de profundidade, ou abra um pequeno buraco e aperte um punhado de terra. Se a terra fica unida e parece húmida, espere. Se se desfaz e parece seca na zona das raízes, é hora de regar. Parte da chuva que cai perde-se a escorrer ou desce fundo demais; a parte que a cultura pode usar chama-se chuva efetiva."
          ],
          steps: ["Escreva a sua cultura e quantos dias vão da sementeira à colheita.", "Marque as fases em que precisa mais de água (por exemplo, no milho: pendoamento e aparecimento das barbas).", "Todas as semanas, verifique o solo na zona das raízes com um dedo, um pauzinho ou um buraco.", "Anote o tempo: dias quentes, com vento e secos fazem usar mais água.", "Regue antes de o solo secar na zona das raízes, sobretudo nas fases em que a cultura precisa mais de água."],
          words: [["Necessidade de água da cultura", "a quantidade de água que uma cultura usa para crescer bem."], ["Fase de crescimento", "um período na vida de uma cultura, como a fase de muda, a floração ou o amadurecimento."], ["Chuva efetiva", "a parte da chuva que fica na zona das raízes e que a cultura pode usar."], ["Zona das raízes", "a camada de solo onde está a maior parte das raízes da cultura."]],
          slides: [
            { title: "Três coisas decidem a água necessária (FAO)", bullets: ["Clima: quente, sol, seco, vento = mais água", "Tipo de cultura: alta e com muitas folhas = mais água", "Fase: mais na floração e no enchimento do fruto ou do grão"] },
            { title: "Fases que precisam de mais água", bullets: ["Milho: pendoamento e aparecimento das barbas", "Tomate: floração e vingamento dos frutos", "Feijão: floração e enchimento das vagens"] },
            { title: "Verifique o solo, não a superfície", bullets: ["Dedo ou pauzinho a 10 a 15 cm de fundo, perto das raízes", "Fica unida e húmida: espere", "Desfaz-se e está seca: é hora de regar"] }
          ],
          sources: [FAO_WATERNEEDS],
          tryIt: "Para uma cultura que produz, escreva em que semanas depois da sementeira ela chega às fases em que precisa mais de água. Depois, verifique hoje o seu solo na zona das raízes com um dedo, um pauzinho ou um pequeno buraco e escreva: húmido ou seco.",
          youCanNow: "dizer quando a sua cultura precisa mais de água e verificar a humidade do solo na zona das raízes.",
          quickCheck: [
            { objective: "O1", q: "Quando é que o feijão precisa mais de água?", options: ["Logo depois da colheita", "Na floração e no enchimento das vagens", "Só quando ainda é semente", "Quando as vagens estão secas"], answer: 1, why: "O feijão sofre mais com a seca na floração e no enchimento das vagens." },
            { objective: "O1", q: "Abre um pequeno buraco perto das raízes. A terra desfaz-se e parece seca a essa profundidade. O que faz?", options: ["Espera mais uma semana", "Rega só as folhas", "Põe adubo em vez de água", "Rega a cultura agora"], answer: 3, why: "Se a terra se desfaz e parece seca na zona das raízes, é hora de regar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Captar a água da chuva dos telhados e dos campos",
          minutes: 5,
          goal: "Calcular quanta chuva o seu telhado pode captar e escolher um método no campo para manter a chuva no seu terreno.",
          text: [
            "Captar água quer dizer apanhar a chuva onde ela cai ou escorre e guardá-la para as culturas, os animais ou a casa. O manual da FAO sobre captação de água descreve muitos métodos usados no campo em zonas secas: covas de plantação (como as covas zai), meias-luas de terra, camalhões em curva de nível, pequenas bacias em forma de losango à volta das árvores (negarim) e cordões de pedra.",
            "O telhado é a forma mais simples de começar. Cada 1 milímetro de chuva sobre 1 metro quadrado de telhado dá cerca de 1 litro de água. Um telhado de 50 metros quadrados num lugar com 600 mm de chuva por ano pode dar até 30.000 litros por ano, mas perde-se sempre alguma, por isso conte com menos. Coloque caleiras, um tubo de desvio das primeiras águas, que deita fora a primeira água suja, e um tanque tapado.",
            "A água que escorre das estradas, dos caminhos e das encostas pode ser levada para uma charca revestida ou um pequeno reservatório da machamba. As covas de plantação cheias de composto ou estrume apanham a chuva mesmo junto às raízes do milho, da mapira ou das árvores de fruto jovens. Comece pequeno e, na próxima chuvada forte, observe por onde corre a água no seu terreno."
          ],
          steps: ["Meça o seu telhado: comprimento vezes largura, em metros.", "Saiba a chuva anual da sua zona no serviço de meteorologia ou com o extensionista.", "Multiplique a área do telhado pela chuva em mm para ter os litros e depois conte com menos por causa das perdas.", "Coloque caleiras, um tubo de desvio das primeiras águas e um tanque tapado.", "Escolha um método no campo (covas, meias-luas ou camalhões em curva de nível) para uma parcela."],
          words: [["Captação de água", "apanhar e guardar a água da chuva ou a que escorre para usar mais tarde."], ["Captação no telhado", "recolher a chuva de um telhado através de caleiras para um tanque."], ["Desvio das primeiras águas", "um tubo que deita fora a primeira chuva do telhado, a mais suja."], ["Cova zai", "uma pequena cova de plantação cheia de estrume que apanha a chuva junto às raízes."]],
          slides: [
            { title: "Apanhe a chuva onde ela cai", bullets: ["Covas de plantação (zai), meias-luas de terra", "Camalhões em curva de nível, cordões de pedra", "Bacias negarim à volta das árvores (FAO)"] },
            { title: "As contas do telhado", bullets: ["1 mm de chuva em 1 metro quadrado = cerca de 1 litro", "Telhado de 50 m2 x 600 mm = até 30.000 litros por ano", "Conte com menos: perde-se sempre alguma"] },
            { title: "Monte o sistema", bullets: ["Caleiras e um tubo de desvio das primeiras águas", "Tanque tapado", "Leve a água da estrada para uma charca revestida"] }
          ],
          sources: [FAO_HARVEST],
          tryIt: "Meça o telhado da sua casa ou do seu armazém e saiba a chuva anual da sua zona. Calcule quantos litros ele poderia captar num ano. Use a calculadora do telefone, ou peça a um assistente de IA no telefone para verificar a sua conta.",
          youCanNow: "calcular quanta água da chuva pode captar e escolher um método no campo para manter a chuva no seu terreno.",
          quickCheck: [
            { objective: "O2", q: "Qual é um método no campo que mantém a chuva no seu terreno?", options: ["Covas de plantação ou camalhões em curva de nível", "Queimar o capim", "Lavrar a encosta de cima para baixo", "Deixar o solo descoberto"], answer: 0, why: "As covas de plantação, as meias-luas e os camalhões em curva de nível apanham a chuva onde ela cai." },
            { objective: "O2", q: "Na próxima chuvada forte, a água corre com força pela estrada da sua machamba. O que pode fazer com ela?", options: ["Deixá-la ir para o rio", "Fechar a estrada", "Levá-la para uma charca revestida ou um reservatório da machamba", "Abrir um buraco no meio da estrada"], answer: 2, why: "A água que escorre das estradas e dos caminhos pode ser levada para uma charca revestida ou um reservatório para usar mais tarde." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Guardar a água com segurança",
          minutes: 4,
          goal: "Escolher um reservatório e mantê-lo limpo, tapado e dentro da lei.",
          text: [
            "Os reservatórios mais comuns são os tanques de plástico ou de ferrocimento, os tanques enterrados e as charcas ou reservatórios da machamba. As charcas perdem muita água para o solo se não forem revestidas (por exemplo, com uma lona de impermeabilização) e muita água para o sol se não tiverem sombra ou cobertura.",
            "Mantenha a água guardada limpa e segura. Tape os tanques e as charcas para não entrarem sujidade, animais e crianças, e para os mosquitos não se reproduzirem. Vede as charcas. Limpe as caleiras e os tanques antes das chuvas. A água para beber precisa de mais cuidado do que a água para as culturas; pergunte ao serviço de saúde como a tratar.",
            "Um uso maior de água pode precisar de uma licença. No Quénia, a Water Resources Authority (WRA, a autoridade dos recursos hídricos) controla o uso da água e passa licenças, por exemplo para furos e para bombear dos rios. Os outros países têm as suas próprias autoridades da água. Informe-se antes de abrir um furo, fazer uma represa ou bombear."
          ],
          steps: ["Decida para que é a água: culturas, animais ou casa.", "Escolha um reservatório: tanque, tanque enterrado ou charca revestida.", "Tape-o e vede as charcas.", "Limpe as caleiras e os tanques antes de cada época das chuvas.", "Antes de abrir um furo ou bombear de um rio, informe-se na autoridade da água."],
          words: [["Charca", "um reservatório escavado na terra que recolhe a água que escorre."], ["Lona de impermeabilização", "uma folha de plástico forte que impede a charca de perder água para o solo."], ["Licença", "autorização oficial para usar ou tirar água."]],
          slides: [
            { title: "Reservatórios", bullets: ["Tanques de plástico ou de ferrocimento", "Tanques enterrados", "Charcas revestidas e reservatórios da machamba"] },
            { title: "Mantenha-a segura", bullets: ["Tape: sujidade, animais, mosquitos", "Vede as charcas; há crianças que se afogam nelas", "Limpe caleiras e tanques antes das chuvas"] },
            { title: "Conheça as regras", bullets: ["Quénia: Water Resources Authority (WRA)", "Outros países: a sua autoridade da água", "Pergunte antes de abrir furos, fazer represas ou bombear"] }
          ],
          sources: [WRA],
          tryIt: "Escreva que reservatório serve para a sua machamba e para o seu orçamento, como o vai tapar e vedar, e o nome do serviço do seu país a que perguntaria antes de abrir um furo ou bombear.",
          youCanNow: "escolher um reservatório, mantê-lo seguro e saber quando precisa de uma licença.",
          quickCheck: [
            { objective: "O3", q: "Que reservatório perde mais água se não for revestido e tapado?", options: ["Um tanque de plástico tapado", "Um tanque de ferrocimento", "Um tanque enterrado", "Uma charca aberta e sem revestimento"], answer: 3, why: "As charcas perdem água para o solo se não forem revestidas, e para o sol se não tiverem sombra ou cobertura." },
            { objective: "O3", q: "Quer usar um pouco da água da chuva guardada para beber. O que faz?", options: ["Bebe-a diretamente da charca", "Pergunta ao serviço de saúde como a tratar", "Põe adubo para a limpar", "Usa a água do desvio das primeiras águas"], answer: 1, why: "A água para beber precisa de mais cuidado do que a água para as culturas; pergunte ao serviço de saúde como a tratar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar e guardar a água",
        questions: [
          { objective: "O1", q: "Quando é que o milho sofre mais com a seca?", options: ["No pendoamento e no aparecimento das barbas", "Logo depois da colheita", "Antes da sementeira", "Quando as maçarocas estão secas"], answer: 0, why: "As fases da floração são as mais sensíveis; um período seco nessa altura é o que mais baixa a colheita." },
          { objective: "O1", q: "Como deve verificar se uma cultura precisa de água?", options: ["Olhar só para a parte de cima do solo", "Esperar até as folhas morrerem", "Verificar a humidade na zona das raízes com um dedo, um pauzinho ou um pequeno buraco", "Regar de hora a hora"], answer: 2, why: "As raízes sentem o solo abaixo da superfície, por isso verifique aí." },
          { objective: "O2", q: "Um telhado tem 40 metros quadrados e recebe 500 mm de chuva por ano. No máximo, cerca de quanto poderia captar?", options: ["200 litros", "2.000 litros", "540 litros", "20.000 litros"], answer: 3, why: "40 x 500 = 20.000 litros; na prática, vai captar um pouco menos." },
          { objective: "O2", q: "Para que serve um tubo de desvio das primeiras águas?", options: ["Bombeia a água para cima", "Deita fora a primeira chuva do telhado, a mais suja", "Aquece a água", "Mede a chuva"], answer: 1, why: "Impede que o pó e os excrementos de aves entrem no tanque." },
          { objective: "O3", q: "Porque se deve tapar um tanque ou uma charca?", options: ["Para não entrarem sujidade e animais e para os mosquitos não se reproduzirem", "Para a água ficar mais quente", "Para ficar mais pesado", "As coberturas não servem para nada"], answer: 0, why: "A cobertura mantém a água limpa e segura." }
        ]
      }
    },
    {
      name: "Capítulo 2: Levar a água à cultura",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rega gota a gota de baixo custo",
          minutes: 6,
          goal: "Montar e cuidar de um kit de gota a gota com balde ou bidão para uma pequena parcela.",
          text: [
            "A rega gota a gota põe a água devagar no pé de cada planta, através de tubos finos com pequenos furos (gotejadores). Perde-se menos água para o sol e o vento, as folhas ficam secas e por isso há menos doenças, e o capim entre as linhas recebe menos água.",
            "O manual da FAO sobre rega sob pressão descreve sistemas familiares de gota a gota de baixo custo para parcelas de cerca de 100 a 500 metros quadrados: um balde ou um bidão, colocado a pelo menos 1 metro acima dos canteiros, alimenta um filtro, um tubo principal e linhas de gotejamento ao longo de cada linha de plantas. É a gravidade que dá a pressão, por isso não é preciso bomba para o fazer funcionar. Os kits vendem-se nas lojas de insumos agrícolas e nos fornecedores de rega; compare os preços e peça peças sobresselentes.",
            "O maior problema é o entupimento. Use água limpa, mantenha o filtro no lugar e limpe-o muitas vezes, e lave as pontas das linhas de gotejamento com frequência. Cubra o solo por cima das linhas com cobertura morta para perder ainda menos água por evaporação. Verifique se cada gotejador está a pingar; uma planta seca quer dizer, quase sempre, um furo entupido."
          ],
          steps: ["Nivele os canteiros e estenda as linhas de gotejamento ao longo de cada linha de plantas.", "Ponha o balde ou o bidão num suporte a pelo menos 1 metro acima dos canteiros.", "Ligue o bidão, a torneira, o filtro, o tubo principal e as linhas de gotejamento; feche as pontas das linhas.", "Encha com água limpa, abra a torneira e verifique se todos os gotejadores pingam.", "Ponha cobertura morta por cima das linhas.", "Limpe o filtro e lave as pontas das linhas de uma em uma ou de duas em duas semanas."],
          words: [["Rega gota a gota", "regar as plantas gota a gota junto às raízes através de tubos finos."], ["Gotejador", "o pequeno furo ou peça que deixa sair a água perto de cada planta."], ["Filtro", "uma rede que impede a sujidade de entupir os gotejadores."], ["Por gravidade", "empurrado pela altura do tanque de água, e não por uma bomba."]],
          slides: [
            { title: "Porquê o gota a gota", bullets: ["A água vai para as raízes", "Perde-se menos para o sol e o vento", "Folhas secas, menos doenças e menos capim"] },
            { title: "Kit familiar de gota a gota (FAO)", bullets: ["Para parcelas de cerca de 100 a 500 metros quadrados", "Balde ou bidão a pelo menos 1 m acima dos canteiros", "Filtro, tubo principal, linhas de gotejamento ao longo das linhas"] },
            { title: "Mantenha-o a funcionar", bullets: ["Água limpa e filtro limpo", "Lave as pontas das linhas com frequência", "Verifique cada gotejador; cobertura morta por cima das linhas"] }
          ],
          sources: [FAO_DRIP],
          tryIt: "Desenhe um esquema de gota a gota para uma pequena parcela: onde fica o bidão (a pelo menos 1 m de altura), o filtro, o tubo principal e cada linha de gotejamento. Depois pergunte a dois fornecedores ou lojas de insumos agrícolas o preço de um kit para esse tamanho e anote os dois.",
          youCanNow: "montar, usar e cuidar de um kit de gota a gota por gravidade de baixo custo.",
          quickCheck: [
            { objective: "O4", q: "O que é um gotejador numa linha de gotejamento?", options: ["O tanque de água", "A bomba", "Um pequeno furo ou peça que deixa sair a água em cada planta", "O filtro"], answer: 2, why: "Os gotejadores são os pequenos furos que pingam água no pé de cada planta." },
            { objective: "O4", q: "A sua água vem de uma charca com lama. Como protege o seu kit de gota a gota?", options: ["Mantém o filtro no lugar, limpa-o muitas vezes e lava as pontas das linhas", "Tira o filtro para a água correr mais depressa", "Nunca verifica os gotejadores", "Só usa o kit ao meio-dia"], answer: 0, why: "Água limpa, filtro limpo e lavagens frequentes evitam o entupimento, o maior problema do gota a gota." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Horário de rega: sem encharcar nem acumular sal",
          minutes: 5,
          goal: "Fazer um horário de rega semanal e detetar cedo o encharcamento e a acumulação de sal.",
          text: [
            "Um horário responde a duas perguntas: quando regar e quanto. Regue de manhã cedo ou ao fim da tarde, quando se perde menos água para o sol. Regue mais vezes quando está quente e com vento e nas fases em que a cultura precisa mais de água, e não regue depois de uma boa chuva. Continue a verificar o solo na zona das raízes; o horário é um guia, mas quem decide é o solo.",
            "Água a mais faz tanto mal como água a menos. Num solo encharcado não há ar para as raízes: as plantas ficam amarelas e murcham, mesmo com o solo molhado, e as raízes apodrecem. Os sinais são água parada, um cheiro azedo e folhas amarelas. Regue menos, abra valas de drenagem e use canteiros altos ou camalhões nos solos de argila pesada.",
            "A FAO explica que o sal se acumula quando a água de rega traz mais sal do que aquele que sai com a drenagem, e que regar demais e a má drenagem são causas comuns. Esteja atento a uma crosta branca no solo, às pontas das folhas queimadas e ao mau crescimento. Uma boa drenagem, a cobertura morta e água suficiente (mas não a mais) ajudam. Se vir estes sinais, ou se usar água de furo numa zona seca, peça ao seu extensionista ou a um laboratório de solos para analisar a água e o solo."
          ],
          steps: ["Escreva um plano semanal: que dias, de manhã ou ao fim da tarde, quanto tempo.", "Regue mais nas fases em que a cultura precisa mais de água e nas semanas quentes e com vento.", "Não regue depois de uma boa chuva.", "Verifique o solo na zona das raízes antes de cada rega.", "Procure água parada, cheiro azedo e folhas amarelas (encharcamento).", "Procure uma crosta branca e pontas das folhas queimadas (sal); peça uma análise da água e do solo."],
          words: [["Horário de rega", "um plano de quando e quanto regar."], ["Encharcamento", "solo tão cheio de água que as raízes não têm ar."], ["Salinidade", "sal a mais no solo ou na água, que faz mal às culturas."], ["Drenagem", "a forma como a água a mais sai do solo."]],
          slides: [
            { title: "Quando e quanto", bullets: ["Regue de manhã cedo ou ao fim da tarde", "Mais nas fases sensíveis e nas semanas quentes e com vento", "Não regue depois de uma boa chuva; quem decide é o solo"] },
            { title: "Encharcamento", bullets: ["Água parada, cheiro azedo, plantas amarelas e murchas", "Regue menos e abra valas de drenagem", "Canteiros altos ou camalhões na argila pesada"] },
            { title: "Acumulação de sal (FAO)", bullets: ["Causada por regar demais e por má drenagem", "Crosta branca, pontas das folhas queimadas, mau crescimento", "Drene bem, use cobertura morta, analise a água e o solo"] }
          ],
          sources: [FAO_WATERNEEDS, FAO_SALINITY],
          tryIt: "Escreva um horário de rega de uma semana para uma cultura: os dias, a hora do dia e quanto tempo. Ao lado, escreva os dois sinais de alerta de encharcamento e os dois de acumulação de sal que vai procurar sempre que regar.",
          youCanNow: "fazer o horário de rega e detetar o encharcamento e a acumulação de sal antes que estraguem uma cultura.",
          quickCheck: [
            { objective: "O5", q: "O que decide um horário de rega?", options: ["Que semente comprar", "Quando regar e quanto", "Onde vender", "Que bomba comprar"], answer: 1, why: "Um horário responde a quando regar e quanto, e quem decide no fim é a verificação do solo." },
            { objective: "O5", q: "Rega com água de furo numa zona seca, e as plantas crescem pior a cada época. O que faz?", options: ["Rega o dobro", "Deixa de regar de todo", "Põe mais adubo", "Pede ao extensionista ou a um laboratório de solos para analisar a água e o solo"], answer: 3, why: "A água de furo nas zonas secas pode trazer sal; uma análise da água e do solo mostra o que está mal." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escolher uma bomba, incluindo as bombas solares",
          minutes: 5,
          goal: "Comparar bombas de pedal, a combustível e solares e fazer a lista do que perguntar a um fornecedor.",
          text: [
            "Se a água está abaixo ou longe da sua parcela, precisa de uma bomba. As bombas de pedal e as bombas manuais são baratas e usam a sua própria força; servem para pequenas parcelas perto de água pouco funda. As bombas a gasolina e a gasóleo são baratas de comprar e fáceis de mudar de lugar, mas o combustível e as reparações custam dinheiro todas as semanas. As bombas solares custam mais a comprar, mas usam a luz do sol, que é grátis, por isso custam muito pouco a funcionar.",
            "Para escolher, precisa de saber três coisas: quanta água precisa por dia, a que altura a água tem de ser elevada (desde o nível da água até ao tanque ou ao campo) e que distância tem de percorrer. O fornecedor precisa destes dados para escolher o tamanho da bomba. Uma bomba pequena demais não dá água suficiente; uma grande demais é dinheiro desperdiçado.",
            "A FAO chama a atenção para um risco das bombas solares: como cada hora a mais de bombeamento é grátis, os agricultores podem bombear mais do que o rio ou a água do subsolo aguentam. Bombeie só o que a sua cultura precisa, partilhe a água de forma justa com os vizinhos e siga as regras da sua autoridade da água. Mantenha os painéis limpos e bem protegidos, e peça por escrito a garantia, as peças sobresselentes e o serviço pós-venda. Alguns fornecedores oferecem planos de pagamento à medida que usa (pay-as-you-go); leia primeiro o preço total e as condições."
          ],
          steps: ["Calcule a água necessária por dia para a sua parcela.", "Meça a altura de elevação: do nível da água até ao tanque ou ao campo.", "Meça a distância da fonte até à parcela.", "Compare as bombas de pedal, a combustível e solares no preço de compra, no custo de funcionamento e no trabalho.", "Peça ao fornecedor, por escrito, o tamanho certo, a garantia, as peças e o serviço.", "Verifique as licenças da água antes de bombear de um rio ou de um furo."],
          words: [["Bomba de pedal", "uma bomba movida com os pés para tirar água de fontes pouco fundas."], ["Bomba solar", "uma bomba que funciona com painéis solares."], ["Altura de elevação", "a altura a que a bomba tem de subir a água."], ["Sobre-exploração", "tirar mais água de um rio ou do subsolo do que a natureza repõe."]],
          slides: [
            { title: "Tipos de bomba", bullets: ["De pedal ou manual: barata, usa a sua própria força", "A gasolina ou a gasóleo: barata de comprar, cara de usar", "Solar: cara de comprar, custa muito pouco a funcionar"] },
            { title: "Escolha o tamanho certo", bullets: ["Água necessária por dia", "Altura de elevação: a que altura", "Distância: a que distância"] },
            { title: "Solar: use-a com juízo (FAO)", bullets: ["Bombear de graça pode levar a bombear demais", "Bombeie só o que a cultura precisa", "Siga as regras da sua autoridade da água"] },
            { title: "Pergunte ao fornecedor", bullets: ["O tamanho certo para a sua altura de elevação e distância", "Garantia, peças e serviço por escrito", "Preço total e condições de qualquer plano pay-as-you-go"] }
          ],
          sources: [FAO_SOLAR, WRA],
          tryIt: "Tarefa final: escreva o seu plano de rega de uma página. Inclua as fases em que a sua cultura precisa mais de água, a sua fonte de água e o reservatório, o seu sistema de gota a gota ou outro, um horário semanal, como vai evitar o encharcamento e o sal, e a bomba que escolheria, com a altura de elevação, a distância e a água necessária por dia.",
          youCanNow: "escolher o tipo certo de bomba e fazer um plano de rega completo para uma pequena parcela.",
          quickCheck: [
            { objective: "O6", q: "Que bomba usa a sua própria força e serve para uma pequena parcela perto de água pouco funda?", options: ["Uma bomba de pedal ou manual", "Uma grande bomba a gasóleo", "Um grande sistema solar", "Nenhuma bomba"], answer: 0, why: "As bombas de pedal e manuais são baratas e servem para pequenas parcelas perto de água pouco funda." },
            { objective: "O6", q: "A sua bomba solar nova pode funcionar o dia todo de graça, mas o rio está a baixar. O que faz?", options: ["Bombeia o dia todo porque é grátis", "Vende a água que sobra", "Bombeia só o que a cultura precisa e partilha a água de forma justa com os vizinhos", "Muda a bomba para mais acima no rio"], answer: 2, why: "Bombear de graça pode tirar água demais; bombeie só o que a cultura precisa e siga as regras da autoridade da água." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Levar a água à cultura",
        questions: [
          { objective: "O4", q: "Qual é o maior problema a evitar com os kits de gota a gota?", options: ["Pressão a mais", "Gotejadores entupidos", "Plantas a mais", "Folhas molhadas"], answer: 1, why: "A sujidade entope os gotejadores; um filtro limpo e as lavagens evitam isso." },
          { objective: "O4", q: "A que altura se deve pôr o bidão de um kit de gota a gota por gravidade?", options: ["No chão", "Enterrado abaixo dos canteiros", "A pelo menos 1 metro acima dos canteiros", "Não importa"], answer: 2, why: "A FAO diz que os bidões devem ficar a pelo menos 1 metro de altura para dar pressão suficiente." },
          { objective: "O5", q: "As plantas estão amarelas e murchas, o solo cheira a azedo e há água parada. O que se passa?", options: ["Água a menos", "Sol a mais", "Sal no ar", "Encharcamento"], answer: 3, why: "Água parada e cheiro azedo querem dizer que as raízes não têm ar." },
          { objective: "O5", q: "Vê uma crosta branca no solo e as pontas das folhas queimadas. O que deve fazer?", options: ["Pedir uma análise da água e do solo e melhorar a drenagem", "Regar muito mais todos os dias", "Pôr mais sal", "Não ligar"], answer: 0, why: "São sinais de acumulação de sal; a FAO liga-a a regar demais e à má drenagem." },
          { objective: "O6", q: "Porque é que a FAO avisa sobre as bombas solares?", options: ["Nunca funcionam", "Fazem muito barulho", "Bombear de graça pode levar a tirar água demais", "Precisam de gasolina"], answer: 2, why: "Como quase não custam nada a funcionar, os agricultores podem bombear demais dos rios e da água do subsolo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Rega e Gestão da Água",
    questions: [
      { objective: "O1", q: "Segundo a FAO, a água de que uma cultura precisa depende de:", options: ["Só do preço da água", "Clima, tipo de cultura e fase de crescimento", "A cor da cultura", "O dia da semana"], answer: 1, why: "A FAO indica o clima, o tipo de cultura e a fase de crescimento." },
      { objective: "O1", q: "Com que tempo as culturas usam mais água?", options: ["Fresco e nublado", "Sem vento e com neblina", "Quente, com sol, seco e com vento", "Frio e chuvoso"], answer: 2, why: "O calor, o sol, o ar seco e o vento aumentam o uso de água." },
      { objective: "O1", q: "O tomate é mais sensível à falta de água:", options: ["Na floração e no vingamento dos frutos", "Quando se compra a semente", "Depois da última colheita", "Quando o campo está vazio"], answer: 0, why: "A floração e o vingamento dos frutos são as fases em que precisa mais de água." },
      { objective: "O1", q: "A chuva efetiva é:", options: ["Toda a chuva que cai", "A chuva que cai à noite", "A chuva medida pela rádio", "A parte da chuva que a cultura consegue mesmo usar"], answer: 3, why: "Alguma chuva escorre ou desce fundo demais; o resto é a chuva efetiva." },
      { objective: "O2", q: "Cerca de quanta água dá 1 mm de chuva em 1 metro quadrado de telhado?", options: ["1 litro", "10 litros", "100 litros", "1.000 litros"], answer: 0, why: "1 mm em 1 metro quadrado dá cerca de 1 litro." },
      { objective: "O2", q: "Uma cova zai é:", options: ["Um furo", "Uma pequena cova de plantação com estrume que apanha a chuva junto às raízes", "Um tipo de bomba", "Um tanque de água"], answer: 1, why: "As covas zai juntam a chuva e os nutrientes junto à planta." },
      { objective: "O3", q: "Porque se reveste um reservatório da machamba?", options: ["Para a água ficar salgada", "Para atrair animais", "Para a água não se perder para o solo", "Nunca é preciso revestir"], answer: 2, why: "As charcas sem revestimento perdem muita água para o solo." },
      { objective: "O3", q: "Porque se devem vedar as charcas da machamba?", options: ["Para proteger as crianças e os animais", "Para ficarem mais fundas", "Para parar a chuva", "Para aquecer a água"], answer: 0, why: "As charcas abertas são um perigo de afogamento." },
      { objective: "O3", q: "No Quénia, que organismo passa licenças de uso da água, por exemplo para furos?", options: ["Kenya Bureau of Standards", "Kenya Revenue Authority", "Kenya Power", "Water Resources Authority (WRA)"], answer: 3, why: "A WRA controla o uso da água e passa as licenças." },
      { objective: "O4", q: "Uma grande vantagem da rega gota a gota é:", options: ["Molha as folhas", "A água vai para as raízes e perde-se menos", "Não precisa de água", "Faz o capim crescer mais depressa"], answer: 1, why: "O gota a gota leva a água às raízes com pouco desperdício." },
      { objective: "O4", q: "A FAO diz que os kits familiares de gota a gota servem para parcelas de cerca de:", options: ["1 a 5 metros quadrados", "100 hectares", "Um distrito inteiro, de qualquer tamanho", "100 a 500 metros quadrados"], answer: 3, why: "O manual da FAO trata do gota a gota familiar simples para cerca de 100 a 500 metros quadrados." },
      { objective: "O4", q: "Uma planta da sua linha de gotejamento está seca. A causa mais provável é:", options: ["Um gotejador entupido", "Sol a mais no bidão", "A planta está verde demais", "O filtro está limpo demais"], answer: 0, why: "Uma planta seca quer dizer, quase sempre, que o seu gotejador está entupido." },
      { objective: "O4", q: "Porque se põe cobertura morta por cima das linhas de gotejamento?", options: ["Só para as esconder do sol", "Para a água ficar mais quente", "Para entupir os gotejadores", "Para perder menos água do solo por evaporação"], answer: 3, why: "A cobertura morta impede que a humidade do solo se evapore." },
      { objective: "O5", q: "A melhor hora do dia para regar costuma ser:", options: ["Ao meio-dia, em pleno sol", "De manhã cedo ou ao fim da tarde", "Só à meia-noite", "Qualquer hora; não faz diferença"], answer: 1, why: "Nas horas frescas do dia perde-se menos água para o sol." },
      { objective: "O5", q: "Choveu bem ontem à noite. O seu horário diz para regar hoje. O que faz?", options: ["Rega o dobro", "Rega na mesma, como planeado", "Verifica o solo; não rega se estiver húmido na zona das raízes", "Drena o campo"], answer: 2, why: "Quem decide é o solo; não regue depois de uma boa chuva." },
      { objective: "O5", q: "Num solo de argila pesada que encharca facilmente, uma boa prática é:", options: ["Inundar o campo", "Pôr mais água", "Plantar numa baixa", "Canteiros altos ou camalhões e valas de drenagem abertas"], answer: 3, why: "Os canteiros altos e as valas deixam sair a água a mais." },
      { objective: "O5", q: "Segundo a FAO, uma causa comum da acumulação de sal no solo regado é:", options: ["A cobertura morta", "Plantar leguminosas", "Regar demais e a má drenagem", "Usar um filtro"], answer: 2, why: "Entra mais sal do que sai quando há água a mais e má drenagem." },
      { objective: "O6", q: "Para escolher o tamanho de uma bomba, o fornecedor precisa de saber:", options: ["A sua cor preferida", "A água necessária por dia, a altura de elevação e a distância", "Só o seu orçamento", "O PIN do seu banco"], answer: 1, why: "A água necessária, a altura de elevação e a distância decidem a bomba certa." },
      { objective: "O6", q: "Comparada com uma bomba a gasolina, uma bomba solar normalmente:", options: ["Custa mais a comprar, mas muito pouco a funcionar", "Custa menos a comprar e mais a funcionar", "Precisa de gasóleo", "Só funciona à noite"], answer: 0, why: "As bombas solares têm um preço de compra mais alto, mas usam a luz do sol, que é grátis." },
      { objective: "O6", q: "Um fornecedor oferece uma bomba solar com um plano pay-as-you-go (pagar à medida que usa). O que deve fazer primeiro?", options: ["Assinar logo", "Dar-lhe o seu PIN", "Ler por escrito o preço total, as condições, a garantia e o serviço", "Comprar duas"], answer: 2, why: "Saiba o custo total e o apoio que vai ter antes de assinar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 6, 8, 9, 11, 13, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique-a outra vez.",
    criteria: [
      { name: "Cultura e fases sensíveis", objective: "O1", notYet: "Faltam as fases em que a cultura precisa mais de água, ou estão erradas.", meets: "Diz a cultura e as fases em que ela precisa mais de água, e como vai verificar o solo.", exceeds: "Anota a data da sementeira para ter as fases sensíveis no calendário." },
      { name: "Fonte de água e reservatório", objective: "O2", notYet: "Não há fonte de água, ou não há uma conta de quanta água se pode guardar.", meets: "Fonte de água, uma conta da água do telhado ou da que escorre, e um reservatório tapado, com a licença verificada, se for precisa.", exceeds: "Inclui um método no campo, como as covas de plantação, para manter a chuva no terreno." },
      { name: "Sistema de rega", objective: "O4", notYet: "Não há sistema, ou não há plano para evitar o entupimento.", meets: "Um sistema de gota a gota ou outro que serve para a parcela, com a altura do bidão, o filtro e as lavagens.", exceeds: "Inclui cobertura morta por cima das linhas e uma lista de peças sobresselentes." },
      { name: "Horário e verificação do solo", objective: "O5", notYet: "Não há horário, ou rega ao meio-dia sem verificar o solo.", meets: "Um horário semanal com a hora do dia, mais água nas fases sensíveis e uma verificação do solo antes de regar.", exceeds: "Diz o que fazer depois de uma boa chuva e nas semanas quentes e com vento." },
      { name: "Encharcamento e sal", objective: "O5", notYet: "Não há plano para o encharcamento nem para o sal.", meets: "Os sinais a procurar e medidas como valas de drenagem, canteiros altos e não regar demais.", exceeds: "Planeia uma análise da água e do solo se usar água de furo numa zona seca." },
      { name: "Escolha da bomba", objective: "O6", notYet: "Não escolhe bomba, ou não dá a razão.", meets: "Um tipo de bomba com a razão, a água necessária por dia, a altura de elevação e a distância.", exceeds: "Faz a lista da garantia, das peças sobresselentes e do serviço a pedir por escrito." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano de rega",
      "Alunos que dizem ter montado um reservatório de água da chuva ou um kit de gota a gota numa época (inquérito de seguimento)",
      "Alunos que dizem ter feito uma cultura na época seca ou perdido menos colheita num período seco",
      "Alunos que começam outro curso de agricultura da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno, uma caneta e um telefone simples com calculadora",
      "Uma pequena parcela para praticar a verificação da humidade do solo",
      "Um kit de gota a gota de baixo custo ou um balde, se houver, para uma demonstração",
      "Cerca de 60 minutos no total, em sessões curtas, mais o tempo para escrever o plano de rega"
    ],
    facilitatorNotes: [
      "Num grupo de agricultores ou numa escola na machamba: façam o teste inicial juntos e depois verifiquem a humidade do solo numa parcela verdadeira.",
      "Façam juntos uma conta da água de um telhado, usando um telhado verdadeiro no local.",
      "Montem em grupo um kit de gota a gota com balde ou bidão e pratiquem a limpeza do filtro e a lavagem das linhas.",
      "Lembre aos alunos que verifiquem as licenças da água na sua autoridade da água e que vedem e tapem as charcas e os tanques.",
      "Avalie o plano de rega com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
