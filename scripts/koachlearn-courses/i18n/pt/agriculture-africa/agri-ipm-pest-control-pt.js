"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-ipm-pest-control.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// No product names, rates or pre-harvest intervals, as in the English.

const FAO_IPM = { name: "FAO: Maneio Integrado de Pragas (Integrated Pest Management)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const CIMMYT_FAW = { name: "CIMMYT, USAID e parceiros: Lagarta-do-funil-do-milho em África: Guia de Maneio Integrado de Pragas (2018)", url: "https://repository.cimmyt.org/handle/10883/19204" };
const FAO_FAMEWS = { name: "FAO: aplicação móvel para apoiar a luta contra a lagarta-do-funil-do-milho em África (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_TUTA = { name: "icipe: Inseto do mês: a traça-do-tomateiro, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const ICIPE_PP_FAW = { name: "icipe: A tecnologia push-pull trava a lagarta-do-funil-do-milho", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const ICIPE_PP_HOW = { name: "icipe: Novo estudo mostra como o push-pull vence a lagarta-do-funil-do-milho (como funcionam o desmódio e a braquiária)", url: "https://www.icipe.org/news/new-study-unravels-mechanisms-through-which-icipe-push-pull-technology-conquers-fall-armyworm" };
const ICIPE_PP_GUIDE = { name: "icipe: Guia do agricultor do push-pull climaticamente inteligente (edição revista, em inglês)", url: "https://technologytransfer.icipe.org/wp-content/uploads/2021/04/Climate_Smart_Push-Pull_English_Revised_Edition_Web_Version.pdf" };
const PCPB = { name: "Pest Control Products Board (PCPB, Quénia): Conselho de Produtos de Controlo de Pragas", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigéria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (EPA, Gana): Autoridade de Proteção Ambiental", url: "https://www.epa.gov.gh" };
const CILSS_CSP = { name: "CILSS / INSAH: guia de registo do Comité Saheliano dos Pesticidas (CSP)", url: "https://insah.cilss.int/wp-content/uploads/2023/08/GUIDE_CSP_FINAL_nov_2017_anglais.pdf" };

module.exports = {
  id: "agri-ipm-pest-control-pt",
  lang: "pt",
  translationOf: "agri-ipm-pest-control",
  category: "Agriculture (Africa)",
  name: "Maneio Integrado de Pragas e Controlo Biológico de Pragas",
  skills: "Prevenir as pragas antes de aparecerem, Fazer a monitorização e identificar a lagarta-do-funil-do-milho e a Tuta absoluta, Decidir quando agir com limiares e registos, Usar push-pull, inimigos naturais, armadilhas e controlo biológico, Usar pesticidas com segurança e dentro da lei como último passo",
  outcome: "escrever e pôr em prática um plano de maneio integrado de pragas (MIP) para uma cultura na sua machamba: prevenir as pragas, fazer a monitorização todas as semanas, decidir com um limiar quando agir, usar primeiro controlos sem químicos e usar um pesticida registado com segurança só quando for mesmo preciso.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, trabalhadores agrícolas, jovens agroempreendedores e extensionistas que estão cansados de pulverizar vezes sem conta e mesmo assim perder colheitas. Os exemplos são milho, mapira (sorgo), feijão e tomate no Quénia, na Nigéria, no Gana e no Burkina Faso.",
    "O Capítulo 1 ensina a travar as pragas cedo: os quatro passos do MIP (prevenir, monitorizar, decidir, agir), como monitorizar um campo e distinguir a lagarta-do-funil-do-milho e a traça-do-tomateiro (Tuta absoluta) de outros danos, e como usar um limiar e registos simples para decidir quando vale a pena agir. O Capítulo 2 ensina a controlar com menos veneno: o push-pull do icipe, os inimigos naturais, as armadilhas, os produtos botânicos e biológicos e, como último passo, o uso seguro e legal de pesticidas que também atrasa a resistência.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" no seu próprio campo. As pragas e os produtos permitidos mudam de país para país, por isso use este curso com o seu extensionista, uma clínica de plantas e a entidade nacional que regula os pesticidas. Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Escreva um plano de MIP para uma época, para uma cultura na sua própria machamba (por exemplo meio acre de milho ou um talhão de tomate): as principais pragas e doenças que espera, pelo menos três passos de prevenção, uma rotina semanal de monitorização com uma folha de registo, o limiar de ação que recebeu da extensão para cada praga principal, os controlos sem químicos que vai usar primeiro e um plano de pesticida para o último passo (um produto verificado na lista da entidade reguladora, as regras do rótulo que vai seguir, o equipamento de proteção que vai usar e como vai alternar os grupos para atrasar a resistência).",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, trabalhadores agrícolas, jovens agroempreendedores e extensionistas de toda a África, que cultivam milho, mapira, arroz, feijão, amendoim, hortícolas e tomate. Muitos enfrentam a lagarta-do-funil-do-milho desde que chegou a África em 2016, e quem produz tomate enfrenta a Tuta absoluta.",
    startingPoint: "Sabem o nome de algumas pragas e costumam pulverizar quando veem danos, muitas vezes com o que o vendedor de insumos sugere. Poucos monitorizam com um calendário, guardam registos de pragas, usam limiares ou sabem que inimigos naturais os ajudam. Muitos pulverizam sem o equipamento de proteção completo.",
    gap: "Pulverizar por hábito custa dinheiro, mata os inimigos naturais, cria resistência, faz mal à saúde e pode deixar resíduos que os compradores rejeitam. Os alunos precisam de prevenir as pragas, monitorizar e registar, agir só quando um limiar mostra que vale a pena, usar primeiro controlos sem químicos e usar pesticidas registados com segurança como último passo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos usam o português como segunda língua, e o curso também existe em inglês, espanhol, francês e árabe",
      "Aparelhos: um telefone simples ou um smartphone; uma lupa ajuda mas não é essencial",
      "Tempo: lições de cerca de 5 minutos que cabem entre o trabalho no campo; a prática faz-se no campo do próprio aluno",
      "As regras mudam de país para país: os produtos têm de estar na lista da entidade reguladora nacional (por exemplo o PCPB no Quénia, a NAFDAC na Nigéria, a EPA no Gana, o Comité Saheliano dos Pesticidas para países do CILSS como o Senegal e o Burkina Faso)",
      "Segurança: o curso nunca dá nomes de produtos, doses nem intervalos de segurança antes da colheita; os alunos seguem o rótulo e o seu extensionista"
    ],
    prerequisites: "Nenhum. O curso \"Produção Sustentável de Culturas e Hortícolas\" dá primeiro uma visão curta do MIP, e \"Saúde e Fertilidade do Solo\" ajuda na prevenção."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para uma cultura na sua própria machamba", action: "fazer uma lista de passos de prevenção que impedem as pragas de se multiplicarem antes do início da época", standard: "indicando pelo menos três passos adequados à sua cultura" },
    { id: "O2", condition: "Ao percorrer o seu campo uma vez por semana", action: "monitorizar um número fixo de plantas e identificar pelos sinais a lagarta-do-funil-do-milho, a Tuta absoluta e os inimigos naturais mais comuns", standard: "verificando pelo menos 50 plantas (ou 20 tomateiros) e registando o que encontra" },
    { id: "O3", condition: "Com as suas contagens da monitorização e um limiar dado pela extensão", action: "decidir se age já ou se continua a observar, e registar a decisão", standard: "seguindo a regra do limiar todas as vezes" },
    { id: "O4", condition: "Perante um problema de pragas na sua cultura", action: "escolher e montar controlos sem químicos, como o push-pull, os inimigos naturais, as armadilhas e os produtos biológicos", standard: "antes de usar qualquer pesticida sintético" },
    { id: "O5", condition: "Quando um pesticida for mesmo preciso", action: "verificar se o produto está registado, seguir o seu rótulo e usar o equipamento de proteção que ele indica", standard: "sem saltar nenhum passo" },
    { id: "O6", condition: "Ao longo de uma época de decisões de pulverização", action: "alternar os grupos de pesticidas e guardar um registo das pulverizações para atrasar a resistência", standard: "nunca usando o mesmo grupo duas vezes seguidas contra a mesma geração da praga" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Travar as pragas cedo",
      lessons: [
        {
          title: "Os quatro passos do MIP, a começar pela prevenção",
          objectives: ["O1"],
          minutes: 5,
          goal: "Fazer uma lista dos passos de prevenção que impedem as pragas de se multiplicarem numa das suas culturas.",
          text: [
            "A FAO descreve o maneio integrado de pragas (MIP) como olhar para todas as formas de controlar as pragas, juntar as certas e usar pesticidas só quando se justifica. Funciona em quatro passos: prevenir, monitorizar, decidir e agir. A maior parte da poupança vem do primeiro passo.",
            "Prevenir é tornar o campo uma má casa para as pragas e uma boa casa para a cultura. Semeie semente certificada de uma variedade adequada à sua zona e, onde existam, variedades resistentes ou tolerantes. Faça rotação de culturas para que as pragas que vivem no solo ou nos restos da cultura percam a comida: por exemplo, milho, depois feijão, depois mapira. Semeie a tempo e ao mesmo tempo que os seus vizinhos, para que as pragas não passem dos campos tardios para os precoces. Alimente o solo, porque as plantas fracas são atacadas primeiro.",
            "Mantenha o campo limpo: arranque e destrua as plantas com vírus ou doença, tire as plantas espontâneas e as ervas daninhas que abrigam pragas, e limpe as ferramentas e as botas. No tomate, crie as mudas num viveiro limpo e coberto com rede, para que vão para o campo sem Tuta absoluta nem mosca-branca. Deixe bordaduras com flores e sebes, porque alimentam os insetos que comem as pragas.",
            "Uma agricultora no Gana que faz rotação de milho com amendoim, semeia cedo com os vizinhos e arranca as plantas doentes todas as semanas costuma pulverizar muito menos do que quem semeia milho no mesmo talhão todas as épocas."
          ],
          steps: ["Escreva as principais pragas e doenças da sua cultura (pergunte à extensão ou a uma clínica de plantas).", "Escolha semente certificada de uma variedade adequada, resistente ou tolerante.", "Planeie uma rotação e semeie a tempo, ao mesmo tempo que os seus vizinhos.", "Planeie a higiene do campo: tire as plantas doentes, as espontâneas e as ervas hospedeiras; limpe as ferramentas.", "Deixe bordaduras com flores para os inimigos naturais."],
          words: [["MIP", "maneio integrado de pragas: prevenir as pragas, vigiá-las, decidir quando vale a pena agir e juntar vários controlos, com pesticidas só quando se justifica."], ["Prevenção", "passos dados antes de as pragas chegarem, para que não se possam multiplicar."], ["Rotação", "cultivar uma cultura diferente no mesmo talhão em cada época."], ["Planta espontânea", "uma planta da cultura que nasce sozinha da semente da época passada e pode levar pragas."]],
          slides: [
            { title: "O MIP em quatro passos", bullets: ["1. Prevenir", "2. Monitorizar (vigiar o campo)", "3. Decidir: vale a pena agir?", "4. Agir: primeiro sem químicos, pesticida no fim"] },
            { title: "A prevenção começa na semente", bullets: ["Semente certificada de uma variedade adequada", "Variedades resistentes ou tolerantes, onde existam", "Alimente o solo: as plantas fracas são atacadas primeiro"] },
            { title: "Deixe as pragas sem comida", bullets: ["Rotação: milho, depois feijão, depois mapira", "Semeie a tempo, junto com os vizinhos", "Tire as plantas espontâneas e as ervas hospedeiras"] },
            { title: "Mantenha tudo limpo", bullets: ["Arranque e destrua as plantas doentes", "Limpe as ferramentas e as botas", "Viveiro de tomate limpo e coberto com rede", "As bordaduras com flores alimentam os inimigos naturais"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Escolha uma cultura que vai semear na próxima época. Escreva as suas três piores pragas ou doenças e depois pelo menos três passos de prevenção que vai dar antes de semear (semente, rotação, época de sementeira, higiene, bordaduras).",
          youCanNow: "dizer os quatro passos do MIP e fazer uma lista de passos de prevenção que impedem as pragas de se multiplicarem na sua cultura.",
          quickCheck: [
            { objective: "O1", q: "Que passo do MIP costuma poupar mais dinheiro ao agricultor?", options: ["Pulverizar todas as semanas", "Comprar um produto mais forte", "A prevenção antes de as pragas chegarem", "Pulverizar o campo do vizinho"], answer: 2, why: "A prevenção impede as pragas de se multiplicarem, por isso são precisos menos controlos depois." },
            { objective: "O1", q: "O seu milho teve muitos danos de pragas no mesmo talhão três épocas seguidas. Que passo de prevenção é o melhor?", options: ["Fazer rotação do talhão para feijão ou amendoim na próxima época", "Semear milho mais tarde do que os vizinhos", "Deixar de pé os caules de milho da época passada", "Semear semente não certificada guardada de maçarocas danificadas"], answer: 0, why: "A rotação corta o ciclo da praga, porque lhe tira a planta de que se alimenta." }
          ]
        },
        {
          title: "Monitorizar e identificar a lagarta-do-funil-do-milho e a Tuta absoluta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Monitorizar um campo num percurso fixo e identificar pelos sinais a lagarta-do-funil-do-milho, a Tuta absoluta e os inimigos naturais.",
          text: [
            "Monitorizar é percorrer o seu campo num calendário fixo e verificar um número fixo de plantas, para ver os problemas cedo e poder contá-los. Monitorize pelo menos uma vez por semana, mais vezes no milho novo e no tomate. Ande num percurso em W ou em zigue-zague para verificar todo o campo, não só as bordas. No milho, pare em cinco sítios e verifique 10 plantas seguidas em cada um, 50 plantas no total. Num pequeno talhão de tomate, verifique 20 plantas espalhadas pelos canteiros.",
            "A lagarta-do-funil-do-milho chegou a África em 2016 e hoje existe na maior parte do continente. No milho novo, procure pequenas \"janelas\" (manchas finas e transparentes) nas folhas, depois buracos irregulares e excrementos húmidos, parecidos com serradura, no funil (cartucho). A lagarta tem um Y claro virado ao contrário na cabeça e quatro pintas escuras em quadrado perto da cauda. As posturas de ovos ficam nas folhas, por baixo de uma camada de escamas felpudas. Uma planta conta como infestada se tiver danos frescos ou uma lagarta viva.",
            "A Tuta absoluta, a traça-do-tomateiro, veio da América do Sul e espalhou-se por África em poucos anos; o icipe conta que no norte da Nigéria, em 2016, destruiu a maior parte da produção de tomate. As suas lagartas minúsculas abrem túneis dentro das folhas, fazendo manchas claras e transparentes (minas) com excrementos escuros, e furam pequenos buracos nos caules e nos frutos. O adulto é uma pequena traça cinzento-acastanhada que se esconde durante o dia.",
            "Procure também os amigos: as joaninhas e as suas larvas, os crisopídeos, as aranhas, as tesourinhas, as formigas e pequenas vespas parasitas, e lagartas que parecem doentes, moles ou cobertas de fungo. A FAO diz que os inimigos naturais já matam muitas lagartas-do-funil-do-milho nos campos africanos. Se não tiver a certeza do que vê, tire uma foto nítida e pergunte a um extensionista ou a uma clínica de plantas; em alguns países, a aplicação FAMEWS da FAO regista os casos de lagarta-do-funil-do-milho."
          ],
          steps: ["Escolha um dia de monitorização por semana e leve um caderno ou o telefone.", "Ande num percurso em W; pare em 5 sítios no milho (10 plantas em cada) ou veja 20 tomateiros espalhados.", "Em cada planta, verifique as folhas, o funil ou a ponta de crescimento, os caules e os frutos.", "Conte as plantas com danos frescos ou pragas vivas; anote as posturas de ovos.", "Anote os inimigos naturais que vê.", "Tire foto a tudo o que não consegue identificar e pergunte à extensão ou a uma clínica de plantas."],
          words: [["Monitorização", "percorrer um campo num calendário fixo e verificar um número fixo de plantas para ver pragas, doenças e inimigos naturais."], ["Funil (cartucho)", "as folhas novas enroladas no topo de um pé de milho novo."], ["Mina da folha", "um túnel ou mancha clara dentro de uma folha, feito por uma lagarta minúscula que come entre as duas faces da folha."], ["Inimigo natural", "um inseto, aranha, fungo ou outro ser vivo que mata as pragas."]],
          slides: [
            { title: "Como monitorizar", bullets: ["Todas as semanas, no mesmo dia", "Percurso em W ou zigue-zague, não só as bordas", "Milho: 5 paragens x 10 plantas = 50", "Tomate: 20 plantas espalhadas"] },
            { title: "Sinais da lagarta-do-funil-do-milho", bullets: ["\"Janelas\" nas folhas novas, depois buracos irregulares", "Excrementos húmidos, como serradura, no funil", "Y ao contrário na cabeça, 4 pintas escuras perto da cauda"] },
            { title: "Sinais da Tuta absoluta", bullets: ["Minas claras com excrementos escuros nas folhas", "Pequenos buracos nos caules e nos frutos", "Pequena traça cinzento-acastanhada que se esconde de dia"] },
            { title: "Procure também os amigos", bullets: ["Joaninhas, crisopídeos, aranhas, tesourinhas, formigas", "Vespas parasitas; lagartas doentes ou cobertas de fungo", "Não tem a certeza? Foto para a extensão ou uma clínica de plantas"] }
          ],
          sources: [CIMMYT_FAW, ICIPE_TUTA, FAO_FAMEWS],
          tryIt: "Monitorize hoje um dos seus campos num percurso em W: 50 pés de milho ou 20 tomateiros. Escreva quantas plantas tinham danos frescos ou pragas vivas, as posturas de ovos que viu e todos os inimigos naturais que encontrou.",
          youCanNow: "monitorizar um campo num percurso fixo, identificar pelos sinais a lagarta-do-funil-do-milho e a Tuta absoluta e reconhecer os inimigos naturais.",
          quickCheck: [
            { objective: "O2", q: "Vê excrementos húmidos, como serradura, e buracos irregulares no funil do milho novo. Qual é a praga mais provável?", options: ["A traça-do-tomateiro", "Os pulgões", "A lagarta-do-funil-do-milho", "As térmitas"], answer: 2, why: "Buracos irregulares e excrementos húmidos no funil são sinais típicos da lagarta-do-funil-do-milho." },
            { objective: "O2", q: "Porque é que se anda num percurso em W ao monitorizar, em vez de ver as plantas perto do portão?", options: ["É mais rápido", "As pragas só vivem no meio", "Gasta menos água", "Verifica todo o campo, não só as bordas"], answer: 3, why: "Um percurso em W vê todas as partes do campo, por isso a contagem mostra o nível real." }
          ]
        },
        {
          title: "Limiares e registos: decidir quando agir",
          objectives: ["O3"],
          minutes: 5,
          goal: "Comparar a sua contagem da monitorização com um limiar de ação e registar se age ou se continua a observar.",
          text: [
            "Ver uma praga não quer dizer que tem de pulverizar. Um limiar de ação é o nível de praga ou de dano a partir do qual o controlo compensa o seu custo. Abaixo dele, os inimigos naturais e a cultura costumam aguentar, e pulverizar seria gastar dinheiro e matar os seus ajudantes. Peça o limiar para cada praga principal, fase da cultura e zona ao seu extensionista ou a um instituto de investigação (como o KALRO no Quénia), porque muda com a fase da cultura, o preço e a investigação local.",
            "Transforme a contagem numa percentagem: plantas com danos frescos ou pragas vivas, a dividir pelas plantas verificadas, vezes 100. Exemplo: verificou 50 pés de milho e 9 tinham danos frescos de lagarta-do-funil-do-milho, então 9 / 50 x 100 = 18%. Se a extensão lhe disse para agir aos 20% nesta fase, continua a observar e volta a monitorizar dentro de poucos dias. Se na semana seguinte estiver em 26%, age. O milho novo costuma aguentar menos danos do que o milho mais velho, por isso os limiares muitas vezes mudam com a fase.",
            "Escreva cada visita. Um registo simples tem a data, o campo, a fase da cultura, as plantas verificadas, as plantas infestadas, a percentagem, os inimigos naturais vistos, o limiar, a sua decisão e o que fez. Depois de algumas épocas, os seus registos mostram quando as pragas chegam à sua machamba, que controlos funcionaram e quanto custaram. Um caderno de papel serve; uma folha de cálculo no telefone ou uma aplicação agrícola também."
          ],
          steps: ["Peça à extensão o limiar para cada praga principal e cada fase da cultura.", "Depois de monitorizar, conte as plantas verificadas e as plantas infestadas.", "Calcule a percentagem: infestadas / verificadas x 100.", "Compare com o limiar: abaixo = continue a observar; igual ou acima = aja.", "Escreva no registo a data, os números, os inimigos naturais, a decisão e a ação."],
          words: [["Limiar de ação", "o nível de praga ou de dano a partir do qual o controlo compensa o custo."], ["Infestada", "que tem pragas ou danos frescos de pragas."], ["Fase da cultura", "o quanto a cultura já cresceu, por exemplo plântula, à altura do joelho, pendoamento, floração, frutificação."]],
          slides: [
            { title: "Ver uma praga não é razão para pulverizar", bullets: ["Limiar: o nível em que agir compensa", "Abaixo dele, os inimigos naturais muitas vezes aguentam", "Peça os limiares à extensão, por fase da cultura"] },
            { title: "Calcule a percentagem", bullets: ["Plantas infestadas / plantas verificadas x 100", "Exemplo: 9 / 50 x 100 = 18%", "Limiar de 20%: continue a observar, monitorize outra vez em breve"] },
            { title: "Registe cada visita", bullets: ["Data, campo, fase da cultura", "Verificadas, infestadas, %, inimigos naturais", "Limiar, decisão, ação, custo"] }
          ],
          sources: [FAO_IPM, CIMMYT_FAW],
          tryIt: "Use a contagem da sua monitorização da última lição. Calcule a percentagem de plantas infestadas, peça ao seu extensionista o limiar para a fase da sua cultura e preencha a primeira linha do seu registo com a sua decisão.",
          youCanNow: "transformar uma contagem da monitorização numa percentagem, compará-la com um limiar e registar a sua decisão.",
          quickCheck: [
            { objective: "O3", q: "Verificou 50 plantas e 15 tinham danos frescos. Qual é a infestação?", options: ["15%", "30%", "50%", "35%"], answer: 1, why: "15 / 50 x 100 = 30%." },
            { objective: "O3", q: "A sua contagem é de 12% e o limiar da extensão para esta fase é de 20%. O que faz?", options: ["Pulverizar hoje por segurança", "Arrancar a cultura", "Dobrar a dose da pulverização", "Continuar a observar, monitorizar outra vez em breve e registar"], answer: 3, why: "Abaixo do limiar, o controlo ainda não compensa; continua a monitorizar e a registar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Travar as pragas cedo",
        questions: [
          { objective: "O1", q: "Qual destes é um passo de prevenção no MIP?", options: ["Pulverizar quando vê uma lagarta", "Semear a tempo semente certificada de uma variedade adequada", "Misturar dois pesticidas", "Queimar a cultura do vizinho"], answer: 1, why: "Boa semente e sementeira a tempo impedem as pragas de se multiplicarem antes de começarem." },
          { objective: "O2", q: "Manchas claras com excrementos escuros dentro das folhas do tomate, e pequenos buracos nos frutos, indicam:", options: ["Tuta absoluta (traça-do-tomateiro)", "Lagarta-do-funil-do-milho", "Excesso de adubo", "Falta de água"], answer: 0, why: "As minas nas folhas e os buracos nos frutos são os sinais da Tuta absoluta." },
          { objective: "O2", q: "Ao monitorizar, encontra joaninhas e uma lagarta coberta de fungo branco. Deve:", options: ["Pulverizar para as matar também", "Ignorá-las; não interessam", "Registá-las como inimigos naturais a trabalhar", "Queimar a planta"], answer: 2, why: "Os inimigos naturais mantêm as pragas baixas, por isso regista-os e protege-os." },
          { objective: "O3", q: "O que é um limiar de ação?", options: ["O dia em que semeia", "O preço de um pesticida", "O número de trabalhadores de que precisa", "O nível de praga a partir do qual o controlo compensa o custo"], answer: 3, why: "Abaixo do limiar, o controlo custa mais do que poupa." },
          { objective: "O3", q: "Porque é que se deve registar por escrito cada visita de monitorização?", options: ["Para ver quando as pragas chegam, o que funcionou e quanto custou", "Porque o vendedor de insumos pede", "Para o campo parecer arrumado", "Não serve para nada"], answer: 0, why: "Os registos transformam cada época em lições para a seguinte." }
        ]
      }
    },
    {
      name: "Capítulo 2: Controlar as pragas com menos veneno",
      lessons: [
        {
          title: "O push-pull e os inimigos naturais",
          objectives: ["O4"],
          minutes: 6,
          goal: "Planear um talhão de push-pull e proteger os inimigos naturais da sua machamba.",
          text: [
            "O push-pull (\"empurrar e puxar\") foi criado pelo icipe, com parceiros, para o milho e a mapira na África Oriental. Semeia desmódio entre as linhas do milho. O desmódio solta cheiros que empurram as borboletas da broca-do-colmo para longe da cultura. À volta do talhão semeia uma bordadura de um capim forrageiro (braquiária na versão climaticamente inteligente para zonas mais secas, capim-elefante ou napier na versão original), que puxa as borboletas para si e as prende. O desmódio também trava a erva daninha estriga e junta azoto ao solo, e as duas plantas são boa comida para o gado.",
            "Estudos do icipe no Quénia, no Uganda e na Tanzânia encontraram muito menos danos de lagarta-do-funil-do-milho nos campos de push-pull climaticamente inteligente do que no milho semeado sozinho, e colheitas de grão maiores. O push-pull dá trabalho a montar e precisa de semente ou ramas de desmódio e de estacas de capim, por isso comece com um talhão pequeno, peça a disposição à extensão ou a um agricultor formado pelo icipe e siga o guia do agricultor do icipe.",
            "Os inimigos naturais são trabalhadores gratuitos. As formigas, as tesourinhas, as aranhas, as joaninhas e os crisopídeos comem ovos e lagartas novas; pequenas vespas põem os ovos dentro das pragas; fungos e vírus matam lagartas. A FAO diz que eles já matam uma grande parte das lagartas-do-funil-do-milho nos campos africanos. O icipe soltou no Quénia uma vespa minúscula da América do Sul que só ataca a Tuta absoluta. Para os proteger: pulverize só quando o limiar o indica, escolha produtos seletivos, mantenha plantas com flores e sebes à volta dos campos e deixe alguma cobertura no solo."
          ],
          steps: ["Marque um pequeno talhão de push-pull (peça a disposição à extensão ou veja o guia do icipe).", "Semeie primeiro o capim da bordadura (braquiária ou napier) à volta do talhão.", "Semeie o desmódio entre as linhas de milho ou de mapira.", "Corte o capim e o desmódio para dar ao gado, deixando as plantas voltar a crescer.", "Proteja os inimigos naturais: nada de pulverizações sem necessidade, mantenha flores e cobertura do solo."],
          words: [["Push-pull", "um sistema do icipe em que uma consociação (desmódio) empurra as pragas para longe e um capim de bordadura as puxa para fora da cultura."], ["Desmódio", "uma leguminosa rasteira semeada entre as linhas de cereais; afasta as borboletas da broca-do-colmo, trava a estriga e junta azoto ao solo."], ["Estriga", "uma erva daninha parasita com flores cor-de-rosa ou roxas que se agarra às raízes do milho e da mapira e lhes rouba a comida."], ["Vespa parasita", "uma vespa minúscula que põe os ovos dentro ou em cima de uma praga; as suas crias matam a praga."]],
          slides: [
            { title: "O push-pull (icipe)", bullets: ["O desmódio entre as linhas empurra as borboletas para longe", "O capim da bordadura (braquiária ou napier) puxa-as para fora", "Para o milho e a mapira"] },
            { title: "Benefícios extra", bullets: ["O desmódio trava a estriga e junta azoto", "As duas plantas alimentam o gado", "Ensaios do icipe: muito menos danos de lagarta-do-funil-do-milho"] },
            { title: "Os seus trabalhadores gratuitos", bullets: ["Formigas, tesourinhas, aranhas, joaninhas, crisopídeos", "Vespas parasitas; fungos e vírus", "Uma vespa solta no Quénia só ataca a Tuta absoluta"] },
            { title: "Proteja os inimigos naturais", bullets: ["Pulverize só acima do limiar", "Escolha produtos seletivos", "Mantenha flores, sebes e cobertura do solo"] }
          ],
          sources: [ICIPE_PP_FAW, ICIPE_PP_HOW, ICIPE_PP_GUIDE, ICIPE_TUTA],
          tryIt: "Faça um desenho de um pequeno talhão de push-pull para o seu milho ou mapira, com o capim da bordadura, as linhas de desmódio e as linhas da cultura. Depois escreva duas coisas que vai mudar na sua machamba para proteger os inimigos naturais.",
          youCanNow: "explicar como funciona o push-pull, desenhar um talhão de push-pull e dizer formas de proteger os inimigos naturais.",
          quickCheck: [
            { objective: "O4", q: "No push-pull, o que faz o desmódio entre as linhas do milho?", options: ["Puxa as pragas para dentro do milho", "Empurra as borboletas da broca-do-colmo para longe e trava a estriga", "Faz sombra ao milho para crescer mais alto", "Mata as joaninhas"], answer: 1, why: "O cheiro do desmódio afasta as borboletas e ele trava a estriga; é o capim da bordadura que puxa." },
            { objective: "O4", q: "Que hábito protege melhor os inimigos naturais?", options: ["Pulverizar todas as semanas um pesticida de largo espetro", "Tirar todas as flores e sebes à volta do campo", "Queimar os restos da cultura e toda a cobertura do solo", "Pulverizar só acima do limiar e manter bordaduras com flores"], answer: 3, why: "Menos pulverizações e plantas com flores mantêm os inimigos naturais vivos e alimentados." }
          ]
        },
        {
          title: "Armadilhas, opções botânicas e biológicas",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escolher e montar armadilhas e controlos botânicos ou biológicos aprovados para um problema de pragas.",
          text: [
            "As armadilhas ajudam a vigiar e a baixar o número de pragas. As armadilhas de feromona usam o cheiro de uma borboleta fêmea para apanhar os machos: o icipe usa a captura em massa como parte do seu MIP para a Tuta absoluta, e as armadilhas de feromona para a lagarta-do-funil-do-milho mostram quando as borboletas chegam, para monitorizar com mais atenção. Os cartões amarelos com cola apanham moscas-brancas, pulgões e adultos de mineiras; os azuis apanham tripes. Troque os atrativos e os cartões quando o fornecedor disser, e conte as capturas todas as semanas no seu registo.",
            "A apanha à mão funciona em talhões pequenos: esmague as posturas de ovos e as lagartas novas da lagarta-do-funil-do-milho, e apanhe e destrua as folhas minadas pela Tuta e os frutos danificados (enterre-os fundo ou feche-os num saco ao sol, nunca os deixe no chão).",
            "Os produtos biológicos usam seres vivos ou os seus produtos naturais contra as pragas: por exemplo produtos à base da bactéria Bt (Bacillus thuringiensis), de fungos que infetam insetos ou de vírus de insetos. O icipe desenvolve biopesticidas à base de fungos. Costumam ser suaves para os inimigos naturais, mas atuam devagar, têm de atingir lagartas novas e têm de ser guardados como diz o rótulo. Em muitos países têm de ser registados como qualquer pesticida, por isso veja a lista da entidade reguladora.",
            "As opções botânicas vêm de plantas, como o nim. Os produtos de nim registados têm um rótulo que pode seguir. Os extratos caseiros são muito usados, mas a sua força varia e podem fazer mal aos inimigos naturais, à pele e aos olhos, por isso pergunte ao seu extensionista como se usam na sua zona, use luvas e experimente primeiro em poucas plantas."
          ],
          steps: ["Escolha a ferramenta para a praga: armadilhas de feromona para borboletas, cartões amarelos para moscas-brancas e pulgões, azuis para tripes.", "Pendure as armadilhas à altura da cultura e conte as capturas todas as semanas.", "Apanhe à mão e destrua as posturas, as lagartas novas e as folhas minadas.", "Se for preciso mais, escolha um produto biológico ou botânico registado.", "Aplique-o nas lagartas novas, como diz o rótulo, e registe."],
          words: [["Armadilha de feromona", "uma armadilha com o cheiro de acasalamento de um inseto; apanha os machos e mostra quando as pragas chegam."], ["Biopesticida", "um produto de controlo de pragas feito de seres vivos, como bactérias, fungos ou vírus, ou dos seus produtos naturais."], ["Bt", "Bacillus thuringiensis, uma bactéria do solo usada em biopesticidas; mata algumas lagartas quando elas a comem."], ["Botânico", "um produto de controlo de pragas feito de plantas, como o nim."]],
          slides: [
            { title: "Armadilhas para vigiar e reduzir", bullets: ["As armadilhas de feromona apanham as borboletas machos", "Cartões amarelos: moscas-brancas, pulgões; azuis: tripes", "Conte as capturas todas as semanas; troque os atrativos a tempo"] },
            { title: "A apanha à mão funciona", bullets: ["Esmague as posturas de ovos e as lagartas novas", "Tire as folhas minadas pela Tuta e os frutos danificados", "Enterre fundo ou feche num saco, nunca deixe no chão"] },
            { title: "Produtos biológicos", bullets: ["Bt, fungos que matam insetos, vírus de insetos", "Suaves para os inimigos naturais, mas lentos", "Atinja as lagartas novas; veja o registo"] },
            { title: "Botânicos como o nim", bullets: ["Os produtos registados têm rótulo: siga-o", "A força dos extratos caseiros varia", "Pergunte à extensão, use luvas, experimente em poucas plantas"] }
          ],
          sources: [ICIPE_TUTA, CIMMYT_FAW, PCPB, NAFDAC],
          tryIt: "Para a pior praga da sua cultura, escreva que armadilha usaria e onde a penduraria, o que apanharia à mão e uma opção biológica ou botânica. Depois veja se esse produto está na lista de produtos registados do seu país ou peça ao vendedor de insumos que lhe mostre o registo.",
          youCanNow: "escolher armadilhas, apanha à mão e controlos biológicos ou botânicos aprovados para uma praga, e montá-los.",
          quickCheck: [
            { objective: "O4", q: "Produz tomate e quer saber quando chegam as traças da Tuta absoluta. O que monta?", options: ["Uma armadilha de feromona para a Tuta absoluta", "Um cartão azul com cola", "Um balde de água no armazém", "Um espantalho"], answer: 0, why: "Uma armadilha de feromona para a Tuta apanha as traças machos e mostra quando chegam." },
            { objective: "O4", q: "Um biopesticida à base de Bt funciona melhor quando:", options: ["O pulveriza em lagartas grandes e velhas ao meio-dia", "O mistura com qualquer outro químico", "O aplica em lagartas novas, como diz o rótulo", "O guarda ao sol"], answer: 2, why: "Os produtos biológicos atuam devagar e funcionam melhor em lagartas novas, usados como diz o rótulo." }
          ]
        },
        {
          title: "Os pesticidas como último passo, e atrasar a resistência",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Verificar o registo de um pesticida, seguir o seu rótulo com equipamento de proteção e planear a alternância de grupos para atrasar a resistência.",
          text: [
            "Use um pesticida sintético só quando a sua contagem estiver acima do limiar e os outros controlos não chegarem. Primeiro verifique se o produto está registado para a sua cultura e a sua praga no seu país: o Pest Control Products Board (PCPB) no Quénia, a NAFDAC na Nigéria, a Environmental Protection Authority (EPA) no Gana e o Comité Saheliano dos Pesticidas (CSP) para países do CILSS como o Senegal e o Burkina Faso. Cada um tem uma lista de produtos registados; consulte-a e compre só embalagens seladas e com rótulo, num vendedor de insumos licenciado. Os produtos falsos e não registados são comuns.",
            "O rótulo é a lei. Leia-o todo antes de abrir a embalagem: as culturas e pragas a que se destina, a dose, como misturar, quando pulverizar, o equipamento de proteção, quanto tempo esperar antes da colheita (o intervalo de segurança) e antes de as pessoas voltarem ao campo, e os primeiros socorros. Use o que o rótulo indica, normalmente luvas, botas, mangas compridas e calças, proteção para os olhos e uma máscara ou respirador. Pulverize nas horas calmas e frescas, nunca na direção de pessoas, animais ou água. Não coma, não beba nem fume enquanto pulveriza, lave-se depois e guarde os produtos fechados à chave, longe das crianças e da comida. Nunca ponha pesticida numa garrafa de bebida ou de comida.",
            "As pragas ficam resistentes quando o mesmo tipo de químico é usado vezes sem conta: as poucas que sobrevivem reproduzem-se. A lagarta-do-funil-do-milho e a Tuta absoluta são ambas conhecidas por isto. Os rótulos muitas vezes mostram um número de grupo ou a substância ativa. Alterne entre grupos, não use o mesmo grupo duas vezes seguidas contra a mesma geração da praga, nunca use menos do que a dose nem faça misturas por sua conta, e guarde um registo de pulverizações com a data, o produto, o grupo, a dose, o campo e a data a partir da qual pode colher. No Quénia, uma produtora de tomate que pulveriza o mesmo produto de poucos em poucos dias muitas vezes vê-o deixar de funcionar; uma que monitoriza, usa armadilhas e alterna os grupos mantém as suas poucas pulverizações a funcionar."
          ],
          steps: ["Confirme que a contagem está acima do limiar e que os outros controlos não chegam.", "Verifique se o produto está registado para a sua cultura e praga (PCPB, NAFDAC, EPA do Gana, CSP).", "Compre uma embalagem selada e com rótulo num vendedor de insumos licenciado.", "Leia o rótulo todo; vista todo o equipamento de proteção que ele indica.", "Pulverize nas horas calmas e frescas, com a dose do rótulo; lave-se e guarde com segurança.", "Registe o produto, o grupo, a dose e a data a partir da qual pode colher; alterne os grupos da próxima vez."],
          words: [["Pesticida registado", "um produto que a entidade reguladora nacional aprovou para culturas e pragas indicadas."], ["Rótulo", "as instruções na embalagem; segui-las é a lei."], ["EPI", "equipamento de proteção individual: luvas, botas, roupa comprida, proteção para os olhos e uma máscara ou respirador."], ["Intervalo de segurança", "o tempo que tem de esperar depois de pulverizar antes de colher; vem escrito no rótulo."], ["Resistência", "quando uma praga já não morre com um produto que antes a matava."], ["Grupo de modo de ação", "um número ou nome que mostra como um pesticida mata; alterne entre grupos para atrasar a resistência."]],
          slides: [
            { title: "O pesticida: o último passo", bullets: ["Só acima do limiar", "Só quando os outros controlos não chegam", "Só registado para a sua cultura e praga"] },
            { title: "Verifique o registo", bullets: ["Quénia: PCPB; Nigéria: NAFDAC", "Gana: EPA; Senegal, Burkina Faso: CSP (CILSS)", "Selado, com rótulo, vendedor de insumos licenciado"] },
            { title: "O rótulo é a lei", bullets: ["Cultura, praga, dose, momento", "EPI: luvas, botas, mangas compridas, olhos, máscara", "Intervalo de segurança e tempo de reentrada no campo"] },
            { title: "Atrase a resistência", bullets: ["Alterne os grupos de modo de ação", "Nunca use menos do que a dose nem faça misturas suas", "Guarde um registo de pulverizações"] }
          ],
          sources: [PCPB, NAFDAC, GHANA_EPA, CILSS_CSP, FAO_IPM],
          tryIt: "Tarefa final: escreva o seu plano de MIP para uma época, para uma cultura da sua machamba: as principais pragas, pelo menos três passos de prevenção, a sua rotina semanal de monitorização e a folha de registo, os limiares que recebeu da extensão, os controlos sem químicos que vai usar primeiro e um plano de pesticida para o último passo (um produto verificado na lista da entidade reguladora, as regras do rótulo, o seu EPI e como vai alternar os grupos).",
          youCanNow: "verificar se um pesticida está registado, seguir o seu rótulo com o equipamento de proteção certo, e alternar os grupos e guardar registos para atrasar a resistência.",
          quickCheck: [
            { objective: "O5", q: "Um vendedor de insumos oferece-lhe uma garrafa de inseticida sem rótulo a um preço baixo. O que faz?", options: ["Compra; é mais barato", "Mistura com água e experimenta", "Recusa e compra um produto registado, selado e com rótulo", "Usa metade da garrafa"], answer: 2, why: "Sem rótulo não pode saber o que é, como usá-lo com segurança nem se está registado." },
            { objective: "O6", q: "Da última vez pulverizou um produto do grupo A. A praga continua acima do limiar. O que é melhor?", options: ["Pulverizar outra vez o grupo A com o dobro da dose", "Pulverizar um produto registado de outro grupo", "Misturar por sua conta o grupo A com outro produto", "Pulverizar o grupo A todos os dias"], answer: 1, why: "Mudar para outro grupo atrasa a resistência; o dobro da dose e as misturas caseiras são perigosos e ilegais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Controlar as pragas com menos veneno",
        questions: [
          { objective: "O4", q: "No push-pull, o capim da bordadura à volta do milho:", options: ["Puxa as borboletas da broca-do-colmo para longe do milho", "Empurra as borboletas para dentro do milho", "Mata o milho", "Substitui o adubo"], answer: 0, why: "O capim da bordadura (braquiária ou napier) atrai e prende as borboletas." },
          { objective: "O4", q: "Qual destes é um controlo biológico?", options: ["Um inseticida de largo espetro", "Um produto à base da bactéria Bt", "Queimar o campo", "Regar à noite"], answer: 1, why: "Os produtos de Bt usam uma bactéria para matar algumas lagartas." },
          { objective: "O5", q: "Quem guarda a lista de pesticidas registados no Quénia?", options: ["O serviço de estradas do condado", "O vendedor de insumos", "O Pest Control Products Board (PCPB)", "A empresa de sementes"], answer: 2, why: "O PCPB regista os produtos de controlo de pragas no Quénia." },
          { objective: "O5", q: "Onde encontra quanto tempo esperar entre pulverizar e colher?", options: ["Perguntando a um vizinho", "Adivinhando pelo tempo", "É sempre um dia", "No rótulo do produto (o intervalo de segurança)"], answer: 3, why: "O rótulo dá o intervalo de segurança para cada cultura." },
          { objective: "O6", q: "Porque é que se alternam os grupos de pesticidas?", options: ["Para atrasar o aparecimento de pragas resistentes", "Para o campo cheirar diferente", "Porque um dos grupos é sempre ilegal", "Para gastar o stock antigo"], answer: 0, why: "Usar o mesmo grupo vezes sem conta seleciona as pragas que lhe sobrevivem." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Maneio Integrado de Pragas e Controlo Biológico de Pragas",
    questions: [
      { objective: "O1", q: "Quais são os quatro passos do MIP, por ordem?", options: ["Pulverizar, esperar, pulverizar, colher", "Prevenir, monitorizar, decidir, agir", "Comprar, misturar, pulverizar, vender", "Lavrar, semear, pulverizar, armazenar"], answer: 1, why: "O MIP começa pela prevenção e só usa pesticidas depois de monitorizar e decidir." },
      { objective: "O1", q: "Que passo ajuda a impedir que as pragas passem de campo em campo?", options: ["Semear em datas diferentes das dos vizinhos", "Deixar as plantas espontâneas", "Semear a tempo, junto com os vizinhos", "Manter as ervas hospedeiras"], answer: 2, why: "Semear em conjunto não deixa campos tardios para onde as pragas possam passar." },
      { objective: "O1", q: "Porque é que se criam as mudas de tomate num viveiro limpo e coberto com rede?", options: ["Para que as mudas vão para o campo sem Tuta absoluta nem mosca-branca", "Para não precisarem de água", "Porque a rede junta adubo", "Para crescerem mais depressa no escuro"], answer: 0, why: "Mudas limpas e protegidas com rede impedem que as pragas cheguem com a cultura." },
      { objective: "O2", q: "Quantos pés de milho verifica o método de monitorização deste curso?", options: ["5", "10", "100 junto ao portão", "50: 10 plantas em 5 sítios num percurso em W"], answer: 3, why: "Cinco paragens de 10 plantas num percurso em W dão uma ideia justa do campo." },
      { objective: "O2", q: "Uma lagarta tem um Y ao contrário na cabeça e quatro pintas escuras em quadrado perto da cauda. É:", options: ["A lagarta-do-funil-do-milho", "Uma larva de joaninha", "A Tuta absoluta", "Um crisopídeo"], answer: 0, why: "Essas marcas identificam a lagarta-do-funil-do-milho." },
      { objective: "O2", q: "Qual destes é um inimigo natural que deve registar e proteger?", options: ["A borboleta da lagarta-do-funil-do-milho", "A mosca-branca", "A joaninha", "A estriga"], answer: 2, why: "As joaninhas comem pulgões e outras pragas pequenas." },
      { objective: "O2", q: "Encontra danos que não consegue identificar. O melhor passo seguinte é:", options: ["Pulverizar o produto mais forte que tem", "Tirar uma foto e perguntar à extensão ou a uma clínica de plantas", "Ignorar", "Queimar o campo todo"], answer: 1, why: "Um diagnóstico certo vem antes de qualquer controlo." },
      { objective: "O3", q: "Verificou 40 plantas e 10 estavam infestadas. Qual é a percentagem?", options: ["10%", "40%", "4%", "25%"], answer: 3, why: "10 / 40 x 100 = 25%." },
      { objective: "O3", q: "De onde deve vir o seu limiar de ação?", options: ["Do anúncio do pesticida", "Do seu extensionista ou de um instituto de investigação, para a fase da sua cultura", "Do número mais alto que conseguir imaginar", "De um palpite do vizinho"], answer: 1, why: "Os limiares dependem da fase da cultura e da investigação local." },
      { objective: "O3", q: "A sua contagem está acima do limiar. O que faz?", options: ["Age, começando pela melhor opção sem químicos, e regista", "Espera até à colheita", "Deixa de monitorizar", "Volta a semear"], answer: 0, why: "Acima do limiar, agir compensa; o MIP começa pelos controlos sem químicos." },
      { objective: "O4", q: "O push-pull foi criado por:", options: ["Uma empresa de pesticidas", "O icipe e parceiros", "Uma loja de sementes", "Um banco"], answer: 1, why: "O icipe criou o push-pull com parceiros na África Oriental." },
      { objective: "O4", q: "Além das pragas, o desmódio no push-pull também:", options: ["Atrai mais estriga", "Precisa de pulverização diária", "Mata o gado", "Trava a estriga e junta azoto"], answer: 3, why: "O desmódio trava a estriga, fixa azoto e é boa forragem." },
      { objective: "O4", q: "Os cartões azuis com cola servem sobretudo para apanhar:", options: ["Tripes", "Lagartas-do-funil-do-milho", "Ratos", "Térmitas"], answer: 0, why: "Os cartões azuis atraem tripes; os amarelos atraem moscas-brancas e pulgões." },
      { objective: "O4", q: "O que deve fazer com as folhas minadas pela Tuta e os frutos danificados que apanha?", options: ["Deixá-los no chão", "Dá-los à próxima cultura de tomate", "Vendê-los", "Enterrá-los fundo ou fechá-los num saco ao sol"], answer: 3, why: "Se ficarem no chão, as lagartas lá dentro acabam de crescer e voltam a atacar." },
      { objective: "O5", q: "Na Nigéria, que entidade regista os pesticidas?", options: ["O Banco Central", "A Agência Meteorológica da Nigéria", "A NAFDAC", "O conselho de sementes"], answer: 2, why: "A NAFDAC regista os pesticidas na Nigéria." },
      { objective: "O5", q: "Qual é a regra certa sobre o equipamento de proteção?", options: ["Usar o que o rótulo indica, como luvas, botas, mangas compridas, proteção para os olhos e máscara", "Calções servem nos dias quentes", "As luvas são só para mulheres", "O equipamento de proteção é só para machambas grandes"], answer: 0, why: "O rótulo indica o equipamento de proteção necessário para esse produto." },
      { objective: "O5", q: "Onde nunca deve guardar pesticida?", options: ["Na embalagem original", "Num armazém fechado à chave", "Numa garrafa de refresco ou de água", "Longe da comida e das crianças"], answer: 2, why: "O pesticida em garrafas de bebida causa muitos envenenamentos." },
      { objective: "O6", q: "Uma praga já não morre com um produto que antes funcionava. A isto chama-se:", options: ["Rotação", "Resistência", "Limiar", "Polinização"], answer: 1, why: "A resistência cresce quando o mesmo grupo químico é usado vezes sem conta." },
      { objective: "O6", q: "Que hábito acelera a resistência?", options: ["Alternar os grupos", "Pulverizar só acima do limiar", "Guardar um registo de pulverizações", "Pulverizar o mesmo produto de poucos em poucos dias"], answer: 3, why: "Usar repetidamente o mesmo grupo seleciona as pragas que lhe sobrevivem." },
      { objective: "O6", q: "O que deve constar de um registo de pulverizações?", options: ["Data, produto, grupo, dose, campo e data a partir da qual pode colher", "Só o preço", "Só o tempo que fez", "Nada; os registos não são precisos"], answer: 0, why: "Estes dados permitem alternar os grupos e respeitar o intervalo de segurança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e volte a verificá-la com o seu extensionista.",
    criteria: [
      { name: "Prevenção", objective: "O1", notYet: "Nenhum passo de prevenção, ou só \"pulverizar cedo\".", meets: "Pelo menos três passos de prevenção adequados à cultura (semente, rotação, época de sementeira, higiene ou bordaduras).", exceeds: "Os passos de prevenção estão marcados num calendário e combinados com os vizinhos, como semear em conjunto." },
      { name: "Rotina de monitorização", objective: "O2", notYet: "A monitorização é \"quando vejo danos\", sem contagem de plantas.", meets: "Um dia por semana, um percurso em W, um número fixo de plantas e uma folha de registo com colunas para pragas e inimigos naturais.", exceeds: "Inclui fotos das principais pragas e inimigos naturais para os identificar, e o registo já foi usado durante pelo menos duas semanas." },
      { name: "Limiares e decisões", objective: "O3", notYet: "Sem limiares; age-se por hábito.", meets: "Um limiar da extensão para cada praga principal, com o método da percentagem escrito.", exceeds: "Os limiares estão listados por fase da cultura, e inclui um exemplo calculado com as contagens do próprio aluno." },
      { name: "Primeiro os controlos sem químicos", objective: "O4", notYet: "O pesticida é o primeiro e único controlo.", meets: "Pelo menos dois controlos sem químicos (push-pull, armadilhas, apanha à mão, inimigos naturais, biológicos ou botânicos) planeados antes de qualquer pesticida.", exceeds: "Os controlos sem químicos já estão montados, como armadilhas penduradas ou um talhão de push-pull semeado." },
      { name: "Último passo seguro e legal", objective: "O5", notYet: "O produto não foi verificado ou o plano salta o rótulo ou o EPI.", meets: "O produto foi verificado na lista da entidade reguladora nacional, e o plano segue o rótulo, lista o EPI e indica o intervalo de segurança do rótulo.", exceeds: "Inclui também o armazenamento seguro, a eliminação das embalagens vazias como diz o rótulo e os passos de primeiros socorros." },
      { name: "Resistência e registos", objective: "O6", notYet: "Um só produto durante toda a época, sem registo de pulverizações.", meets: "Um registo de pulverizações e a alternância entre pelo menos dois grupos.", exceeds: "A alternância está planeada por geração da praga, e os registos incluem o custo de cada controlo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (rubrica)",
      "Alunos que dizem monitorizar todas as semanas e guardar registos de pragas 30 dias depois (inquérito de seguimento)",
      "Menos pulverizações por época referidas pelos alunos, com a colheita mantida ou melhorada",
      "Alunos que montam pelo menos um controlo sem químicos (push-pull, armadilhas, produtos biológicos) dentro de uma época",
      "Menos casos de envenenamento por pesticidas ou de produtos rejeitados nos grupos de alunos (informação da extensão e dos compradores)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone (a câmara ajuda) ou um caderno e uma caneta para os registos de monitorização",
      "Acesso a um campo com uma cultura, de preferência milho, mapira ou tomate",
      "Opcional: uma lupa, uma armadilha de feromona e cartões com cola para mostrar ao grupo",
      "Os contactos do extensionista local ou da clínica de plantas, e o site da entidade nacional que regula os pesticidas",
      "Cerca de 60 a 90 minutos no total para as lições, as pequenas verificações e os questionários, mais a monitorização semanal no campo"
    ],
    facilitatorNotes: [
      "Se puder, dê o curso como uma escola de campo de agricultores: façam juntos o teste inicial e depois monitorizem um campo real em grupo depois das Lições 2 e 3.",
      "Leve amostras reais ou fotos da lagarta-do-funil-do-milho, da Tuta absoluta e dos inimigos naturais para os alunos praticarem a identificação.",
      "Peça os limiares locais ao serviço de extensão ou ao instituto de investigação antes da sessão; não os invente.",
      "Nunca recomende um produto pesticida, uma dose ou um intervalo de segurança; em vez disso, mostre aos alunos como ler o rótulo e a lista da entidade reguladora.",
      "Não manuseie pesticidas na sessão sem EPI completo; use uma embalagem vazia, limpa e com rótulo para praticar a leitura do rótulo.",
      "Avalie o plano final de MIP com a rubrica e combine com cada aluno uma melhoria para a próxima época."
    ]
  }
};
