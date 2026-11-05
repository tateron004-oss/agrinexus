"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-mechanization.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Money figures are examples only, as in the English; no investment advice.

const FAO_HIRE = { name: "FAO: Serviços de aluguer como negócio (mecanização agrícola sustentável)", url: "https://www.fao.org/sustainable-agricultural-mechanization/hire-services-as-a-business/hire-services/en/" };
const FAO_HIRE_MANUAL = { name: "FAO: Serviços de aluguer como empresa (manual de formação)", url: "https://www.fao.org/documents/card/en/c/I9207EN" };
const FAO_SAMA = { name: "FAO e Comissão da União Africana: Mecanização Agrícola Sustentável: Um Quadro para África (2018)", url: "https://www.fao.org/documents/card/en/c/ca1136en" };
const FAO_MECH = { name: "FAO: Mecanização agrícola sustentável (das ferramentas manuais ao equipamento motorizado)", url: "https://www.fao.org/sustainable-agricultural-mechanization/en" };
const HELLO = { name: "Hello Tractor: reserva de tratores por aplicação, site ou agente de reservas; seguimento da frota; compra a prestações (pay-as-you-go)", url: "https://hellotractor.com/" };
const ILO_TRACTORS = { name: "OIT: Construção e utilização seguras de tratores (código de práticas)", url: "https://www.ilo.org/resource/safe-construction-and-operation-tractors" };
const PCPB = { name: "Pest Control Products Board (Quénia): produtos registados", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigéria)", url: "https://www.nafdac.gov.ng" };

module.exports = {
  id: "agri-mechanization-pt",
  lang: "pt",
  translationOf: "agri-mechanization",
  category: "Agriculture (Africa)",
  name: "Máquinas Agrícolas e Serviços de Mecanização",
  skills: "Escolher que tarefas mecanizar, Comparar o custo de alugar e de ter, Reservar e verificar serviços de aluguer de tratores, Escolher máquinas pequenas, Trabalhar com segurança e manter registos de manutenção, Planear um negócio de serviços de mecanização",
  outcome: "decidir, com números, se deve alugar ou comprar uma máquina para uma tarefa da exploração: escolher as tarefas em que vale a pena mecanizar, comparar o custo de alugar e de ter, reservar e verificar um serviço de aluguer, escolher a máquina pequena certa, usá-la com segurança com um livro de manutenção e planear um serviço de aluguer para os seus vizinhos, se ter a máquina só compensar dessa forma.",
  about: [
    "Este curso é para pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas na Nigéria, no Gana, no Quénia, no Senegal, no Burkina Faso e em toda a África. A maior parte do trabalho agrícola em África ainda é feita à mão. As máquinas permitem semear a tempo, tirar o trabalho pesado e reduzir as perdas, mas uma máquina parada a maior parte do ano pode afundar a exploração em dívidas.",
    "O Capítulo 1 trata da decisão: que tarefas vale a pena mecanizar, alugar ou ter com um exemplo de custos calculado, e reservar serviços de aluguer de tratores, incluindo serviços por aplicação como a Hello Tractor. O Capítulo 2 trata do uso das máquinas: máquinas pequenas como tratores de duas rodas, debulhadoras de milho, trilhadeiras e pulverizadores motorizados; a segurança e os livros de manutenção; e começar um negócio de serviços de mecanização para os seus vizinhos. Partilhar máquinas em grupo é ensinado no curso \"Mobilização Comunitária: Partilhar Máquinas e Negociar a Compra de Insumos\".",
    "Os valores em dinheiro deste curso são só exemplos; use preços reais de vendedores, serviços de aluguer e credores. Este curso explica como funcionam os empréstimos e os contratos de leasing, mas não dá conselhos de investimento: leia cada contrato até ao fim e pergunte a um conselheiro de confiança. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria exploração. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Faça uma folha de decisão alugar ou comprar para uma máquina e uma tarefa da sua exploração (ou para um exemplo, como um trator para lavrar 10 hectares de milho em Kaduna, ou uma debulhadora de milho para um grupo de agricultores perto de Tamale): a tarefa e porque vale a pena mecanizá-la; o custo anual de ter a máquina (custos fixos e custos por hectare); o custo de alugar; a área de equilíbrio; a sua decisão; e as regras de segurança e o livro de manutenção que vai usar. Se decidir comprar, acrescente um plano de uma página para alugar a máquina aos vizinhos: serviços, clientes e hectares, preço, custos, ponto de equilíbrio, reservas e pagamentos, e os principais riscos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas, líderes de grupos de agricultores, jovens empreendedores agrícolas e extensionistas na Nigéria, no Gana, no Quénia, na África Ocidental francófona e noutras partes de África que alugam, ou pensam comprar, um trator ou uma máquina pequena.",
    startingPoint: "Fazem a maior parte do trabalho à mão ou com bois, e às vezes alugam um trator através de um intermediário. Poucos compararam o custo total de ter com o de alugar, verificaram o trabalho que pagaram ou mantiveram um livro de manutenção. Alguns jovens veem o aluguer de máquinas como um negócio, mas ainda não calcularam os custos.",
    gap: "Os agricultores compram máquinas que ficam pouco usadas e são caras de manter, ou esperam por tratores que chegam tarde e semeiam tarde. Precisam de escolher as tarefas em que vale a pena mecanizar, comparar alugar e ter com números reais, reservar e verificar serviços de aluguer, usar as máquinas com segurança e, se comprarem, ganhar dinheiro com o trabalho nas explorações dos vizinhos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o curso também existe em espanhol, francês e árabe",
      "Aparelhos: um telefone simples ou um smartphone e uma calculadora; as aplicações de reserva precisam de um smartphone ou de um agente de reservas",
      "Tempo: lições de 4 a 6 minutos que cabem no trabalho da exploração",
      "Os valores em dinheiro são exemplos; os preços, as taxas de juro e os preços de aluguer mudam de lugar para lugar e com o tempo",
      "Financiamento: explicar os empréstimos e o leasing e os seus riscos; sem conselhos de investimento",
      "Segurança: as máquinas podem matar; nenhum trabalho infantil perto das máquinas; pulverizadores só com pesticidas registados, como diz o rótulo"
    ],
    prerequisites: "Nenhum. O curso \"Agronegócio e Gestão da Machamba\" ajuda a calcular custos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as tarefas da sua exploração", action: "identificar em que tarefas vale a pena mecanizar", standard: "dando uma razão para cada uma: tempo certo, mão de obra, perdas ou volume" },
    { id: "O2", condition: "Com o preço, os custos de funcionamento e o preço de aluguer de uma máquina", action: "calcular o custo anual de ter a máquina, o custo de alugar e a área de equilíbrio", standard: "com as contas certas e uma decisão clara de alugar ou comprar" },
    { id: "O3", condition: "Quando aluga um trator ou um serviço de máquinas", action: "combinar antes o preço, a área, a data e a qualidade e verificar o trabalho antes de pagar", standard: "medindo o campo e recebendo um recibo" },
    { id: "O4", condition: "Com uma tarefa da exploração e o seu mercado local", action: "escolher uma máquina pequena que sirva para a tarefa, para o volume de trabalho e para as peças e mecânicos que há perto", standard: "fazendo uma lista de pelo menos quatro verificações antes de comprar" },
    { id: "O5", condition: "Antes e depois de cada uso de uma máquina", action: "fazer as verificações de segurança e registar o trabalho e a manutenção num livro de registos", standard: "sem saltar nenhuma regra de segurança e com cada registo datado" },
    { id: "O6", condition: "Com uma máquina e as explorações à sua volta", action: "escrever um plano de uma página para um serviço de aluguer de máquinas", standard: "com serviços, clientes, preço, custos, ponto de equilíbrio e riscos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Alugar ou comprar?",
      lessons: [
        {
          title: "Em que tarefas vale a pena mecanizar",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar as tarefas da sua exploração em que vale a pena mecanizar.",
          text: [
            "Mecanizar quer dizer usar ferramentas e máquinas para fazer o trabalho da exploração, desde ferramentas manuais melhores e tração animal até tratores e máquinas a motor. A FAO insiste em escolher o que serve para a exploração, para as pessoas e para o lugar. Uma máquina compensa quando ganha ou poupa mais do que custa.",
            "Tarefas que muitas vezes compensam: preparar a terra, quando lavrar ou riscar a tempo depois das primeiras chuvas permite semear a tempo; debulhar e trilhar, quando uma máquina faz em horas o que leva dias a muitas pessoas e perde menos grão no chão; transportar a colheita e os insumos; bombear água; e transformar, como ralar mandioca ou moer. Tarefas que compensam menos: talhões pequenos, trabalho que é barato e rápido à mão, ou tarefas que só faz uma vez por ano durante poucas horas.",
            "Faça quatro perguntas sobre cada tarefa. Tempo certo: fazer tarde baixa a produção? Mão de obra: falta mão de obra ou é cara nessa altura? Perdas: fazer à mão perde colheita? Volume: há trabalho suficiente para manter uma máquina ocupada? Depois compare o custo à mão e à máquina. Exemplo (os valores são só um exemplo): lavrar 1 hectare à mão leva 25 dias-pessoa a GHS 50 = GHS 1,250, enquanto alugar um trator custa GHS 600 por hectare."
          ],
          steps: ["Faça a lista de todas as tarefas grandes da sua exploração ao longo do ano.", "Para cada uma, pergunte: tempo certo, mão de obra, perdas, volume.", "Calcule o custo à mão: dias-pessoa x salário por dia.", "Encontre o custo à máquina: preço de aluguer x hectares.", "Marque as tarefas em que a máquina custa menos ou ganha mais."],
          words: [["Mecanização", "usar ferramentas e máquinas, desde ferramentas manuais melhores até tratores, para fazer o trabalho da exploração."], ["Tempo certo", "fazer uma tarefa na altura certa, como semear logo depois de começarem as chuvas."], ["Dia-pessoa", "o trabalho que uma pessoa faz num dia."]],
          slides: [
            { title: "Quando uma máquina compensa", bullets: ["Ganha ou poupa mais do que custa", "Desde ferramentas manuais melhores até tratores", "Serve para a exploração, as pessoas e o lugar"] },
            { title: "Tarefas que muitas vezes compensam", bullets: ["Preparar a terra a tempo", "Debulhar e trilhar: rápido, menos perdas", "Transportar, bombear, transformar"] },
            { title: "Quatro perguntas", bullets: ["Tempo certo: fazer tarde baixa a produção?", "Mão de obra: falta ou é cara?", "Perdas? Volume de trabalho?"] },
            { title: "Compare o custo", bullets: ["À mão: dias-pessoa x salário", "Exemplo: 25 dias x GHS 50 = GHS 1,250 por ha", "Exemplo de aluguer de máquina: GHS 600 por ha"] }
          ],
          sources: [FAO_MECH, FAO_SAMA],
          tryIt: "Faça a lista de cinco tarefas grandes da sua exploração. Para cada uma, responda às quatro perguntas (tempo certo, mão de obra, perdas, volume) e compare o custo à mão com o custo à máquina. Faça um círculo nas duas tarefas em que mais compensa mecanizar.",
          youCanNow: "escolher as tarefas da sua exploração em que vale a pena mecanizar e dizer porquê.",
          quickCheck: [
            { objective: "O1", q: "Porque é que lavrar a tempo muitas vezes compensa?", options: ["Os tratores são mais baratos na época seca", "Semear a tempo depois das chuvas pode aumentar a produção", "Lavrar tarde mata melhor as ervas daninhas", "Deixa o campo bonito"], answer: 1, why: "O tempo certo conta: semear tarde muitas vezes baixa a produção." },
            { objective: "O1", q: "Debulhar 2 toneladas de milho à mão leva 20 dias-pessoa a NGN 4,000. Um serviço de debulhadora custa NGN 50,000. Qual é mais barato?", options: ["O serviço de debulhadora", "Debulhar à mão", "Custam o mesmo", "Não se pode saber"], answer: 0, why: "Debulhar à mão custa 20 x 4,000 = NGN 80,000, mais do que NGN 50,000." }
          ]
        },
        {
          title: "Alugar ou ter: um exemplo de custos calculado",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular o custo de ter e de alugar e encontrar a área de equilíbrio.",
          text: [
            "Ter uma máquina tem custos fixos que paga todos os anos, mesmo que ela nunca saia do lugar: o valor que perde ao longo da vida (depreciação), os juros de um empréstimo ou o que o dinheiro podia ganhar noutro lado, o seguro e um abrigo. Tem também custos de funcionamento por hectare: combustível, óleo, reparações e o operador. Alugar tem um só custo: o preço de aluguer por hectare.",
            "Exemplo calculado para um trator com charrua na Nigéria (todos os valores são só exemplos; use preços reais e a taxa real do seu credor): preço NGN 30,000,000, vale NGN 6,000,000 ao fim de 10 anos, por isso a depreciação = (30,000,000 - 6,000,000) / 10 = NGN 2,400,000 por ano. Juros do empréstimo (exemplo) NGN 1,800,000 por ano, seguro e abrigo NGN 600,000. Custos fixos = NGN 4,800,000 por ano. Custos de funcionamento = NGN 25,000 por hectare. Preço de aluguer = NGN 60,000 por hectare.",
            "Cada hectare que lavra com o seu próprio trator poupa 60,000 - 25,000 = NGN 35,000 em comparação com alugar. Área de equilíbrio = custos fixos / poupança por hectare = 4,800,000 / 35,000 = cerca de 137 hectares por ano. Um agricultor com 10 hectares deve alugar; ter o trator só compensa se ele também trabalhar nas explorações dos vizinhos. Pense também no que os números não mostram: ter o trator quer dizer que lavra a tempo, e alugar quer dizer nenhum empréstimo e nenhuma reparação. O leasing e a compra a prestações (pay-as-you-go) são outras opções; leia cada contrato até ao fim e pergunte a um conselheiro de confiança."
          ],
          steps: ["Depreciação por ano = (preço - valor no fim) / anos de uso.", "Some os juros, o seguro e o abrigo: são os custos fixos por ano.", "Some o combustível, o óleo, as reparações e o operador por hectare: custos de funcionamento.", "Poupança por hectare = preço de aluguer - custos de funcionamento.", "Área de equilíbrio = custos fixos / poupança por hectare.", "Compare com os seus hectares e decida; anote o tempo certo e o risco."],
          words: [["Depreciação", "o valor que uma máquina perde em cada ano à medida que envelhece."], ["Custos fixos", "custos que paga todos os anos, quer a máquina trabalhe quer não."], ["Área de equilíbrio", "os hectares por ano em que ter a máquina custa o mesmo que alugar."]],
          slides: [
            { title: "Os custos de ter", bullets: ["Fixos: depreciação, juros, seguro, abrigo", "De funcionamento por hectare: combustível, óleo, reparações, operador", "Alugar: um só preço de aluguer por hectare"] },
            { title: "Exemplo: trator na Nigéria", bullets: ["Depreciação (30M - 6M) / 10 = NGN 2.4M por ano", "Custos fixos ao todo NGN 4.8M por ano", "Funcionamento NGN 25,000 por ha; aluguer NGN 60,000 por ha"] },
            { title: "Área de equilíbrio", bullets: ["Poupança por ha: 60,000 - 25,000 = 35,000", "4,800,000 / 35,000 = cerca de 137 ha por ano", "Exploração de 10 ha: alugar. Só exemplos"] },
            { title: "Para além dos números", bullets: ["Ter: lavra a tempo", "Alugar: sem empréstimo, sem reparações", "Leasing e empréstimos: leia tudo, pergunte a um conselheiro"] }
          ],
          sources: [FAO_HIRE, FAO_SAMA],
          tryIt: "Peça preços reais para uma máquina em que está a pensar (preço, vida esperada e valor no fim, custos de funcionamento e o preço de aluguer local). Calcule os custos fixos por ano, a poupança por hectare e a área de equilíbrio, e escreva se deve alugar ou comprar.",
          youCanNow: "comparar o custo de ter e de alugar uma máquina e encontrar a área de equilíbrio.",
          quickCheck: [
            { objective: "O2", q: "Uma debulhadora custa GHS 20,000 e vale GHS 4,000 ao fim de 8 anos. Qual é a depreciação por ano?", options: ["GHS 1,500", "GHS 2,500", "GHS 2,000", "GHS 3,000"], answer: 2, why: "(20,000 - 4,000) / 8 = 2,000 por ano." },
            { objective: "O2", q: "Os custos fixos são KES 300,000 por ano e ter a máquina poupa KES 6,000 por hectare. Qual é a área de equilíbrio?", options: ["30 hectares", "40 hectares", "60 hectares", "50 hectares"], answer: 3, why: "300,000 / 6,000 = 50 hectares por ano." }
          ]
        },
        {
          title: "Serviços de aluguer de tratores e serviços por aplicação",
          objectives: ["O3"],
          minutes: 5,
          goal: "Reservar um serviço de aluguer e verificar o trabalho antes de pagar.",
          text: [
            "Pode alugar máquinas a um vizinho ou dono de trator, a uma cooperativa ou grupo de agricultores, a um centro de aluguer do governo ou privado, ou a um serviço por aplicação. A Hello Tractor é um exemplo: os agricultores reservam serviços de trator pela sua aplicação de telefone ou pelo site, ou através de agentes de reservas (extensionistas e agentes de campo que reservam pelos agricultores), e os donos de tratores usam-na para seguir os seus tratores e o combustível por GPS. Oferece também compra a prestações (pay-as-you-go) para ajudar as pessoas a ter um trator. A empresa diz que trabalha em mais de 20 países africanos, incluindo a Nigéria; confirme o que existe na sua zona.",
            "Os tratores vão primeiro onde há muito trabalho no mesmo lugar. Reservar junto com os vizinhos, para o trator fazer muitas explorações numa só viagem, torna mais provável que ele chegue a tempo.",
            "Antes de começar o trabalho, combine por escrito ou por mensagem: o preço por acre ou hectare, como a área vai ser medida, a data, a profundidade e o tipo de trabalho, e quem paga o combustível. Meça você mesmo o campo, com uma fita métrica ou uma aplicação de GPS no telefone. Depois do trabalho, verifique: profundidade certa, nenhuma faixa por fazer, o campo todo feito. Pague só depois de verificar, pela aplicação oficial, por dinheiro móvel ou com recibo. Nunca pague adiantado a um desconhecido fora da aplicação oficial, e nunca partilhe PINs ou códigos."
          ],
          steps: ["Escolha um serviço: vizinho, grupo, centro de aluguer ou aplicação (por exemplo a Hello Tractor).", "Reserve cedo, junto com os vizinhos se puder.", "Combine antes o preço, a forma de medir a área, a data, a profundidade e o combustível.", "Meça você mesmo o campo.", "Verifique o trabalho: profundidade, nenhuma faixa por fazer, o campo todo.", "Pague depois de verificar; peça recibo ou registo na aplicação; nunca partilhe PINs."],
          words: [["Agente de reservas", "uma pessoa que reserva serviços de máquinas para os agricultores, muitas vezes com uma aplicação."], ["Compra a prestações (pay-as-you-go, PAYG)", "pagar uma coisa aos poucos enquanto a usa, até ficar sua."], ["Preço de aluguer", "o preço que o serviço cobra, muitas vezes por acre ou por hectare."]],
          slides: [
            { title: "Onde alugar", bullets: ["Vizinhos, grupos, centros de aluguer", "Aplicações como a Hello Tractor: aplicação, site ou agente de reservas", "Confirme o que funciona na sua zona"] },
            { title: "Ter o trator a tempo", bullets: ["Reserve cedo", "Reserve junto com os vizinhos", "Muitas explorações numa só viagem"] },
            { title: "Combine antes do trabalho", bullets: ["Preço por acre ou hectare; como se mede a área", "Data, profundidade, tipo de trabalho, combustível", "Por escrito ou por mensagem"] },
            { title: "Verifique, depois pague", bullets: ["Meça você mesmo o campo", "Profundidade certa; nenhuma faixa por fazer", "Pague pela aplicação, dinheiro móvel ou com recibo; sem PINs"] }
          ],
          sources: [HELLO, FAO_HIRE],
          tryIt: "Encontre dois serviços de aluguer perto de você (um dono de trator, um grupo, um centro de aluguer ou uma aplicação). Pergunte a cada um o preço por hectare, como medem a área, quando podem vir e como se paga. Escreva uma mensagem curta de reserva com todas as condições.",
          youCanNow: "reservar um trator ou um serviço de máquinas com condições claras e verificar o trabalho antes de pagar.",
          quickCheck: [
            { objective: "O3", q: "Quando deve pagar a lavoura com um trator alugado?", options: ["Depois de verificar o trabalho e a área, com recibo ou registo na aplicação", "Antes de o trator chegar, em dinheiro a quem telefonar", "Metade a um desconhecido por SMS", "Nunca"], answer: 0, why: "Verificar primeiro e ter um registo protege-o de trabalho mal feito e de burlas." },
            { objective: "O3", q: "Como pode tornar mais provável que um trator alugado chegue a tempo?", options: ["Reservar à última hora", "Reservar sozinho para um talhão muito pequeno", "Reservar cedo, junto com os vizinhos", "Pagar a mais e adiantado a um desconhecido"], answer: 2, why: "Muitas explorações no mesmo lugar fazem a viagem valer a pena para o dono do trator." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Alugar ou comprar?",
        questions: [
          { objective: "O1", q: "Em que tarefa costuma compensar MENOS mecanizar?", options: ["Lavrar 20 hectares a tempo", "Trilhar uma grande colheita de arroz", "Um trabalho de uma hora uma vez por ano num talhão muito pequeno", "Transportar a colheita para o mercado"], answer: 2, why: "Uma máquina para trabalhos pequenos e raros custa mais do que poupa." },
          { objective: "O1", q: "Que pergunta verifica o tempo certo?", options: ["A máquina é vermelha?", "Fazer a tarefa tarde baixa a produção?", "O vendedor é simpático?", "Que idade tem o agricultor?"], answer: 1, why: "O tempo certo tem a ver com saber se fazer o trabalho tarde faz perder produção." },
          { objective: "O2", q: "Qual é um custo fixo de ter um trator?", options: ["O seguro", "O combustível por hectare", "O pagamento do operador por hectare", "O óleo por hora"], answer: 0, why: "O seguro paga-se todos os anos, quer o trator trabalhe quer não." },
          { objective: "O2", q: "A área de equilíbrio é 137 hectares por ano e você cultiva 10. O que deve fazer?", options: ["Comprar já", "Comprar dois tratores", "Deixar de cultivar", "Alugar, ou comprar só se também puder servir os vizinhos"], answer: 3, why: "Muito abaixo do equilíbrio, ter custa mais do que alugar, a não ser que a máquina também trabalhe noutros lados." },
          { objective: "O3", q: "Antes de um trator alugado começar, o que deve combinar?", options: ["Só o nome do operador", "O preço por hectare, como se mede a área, a data, a profundidade e o combustível", "Nada; confie neles", "O PIN do seu dinheiro móvel"], answer: 1, why: "Condições claras evitam discussões e trabalho mal feito; os PINs nunca se partilham." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar as máquinas e um negócio de serviços",
      lessons: [
        {
          title: "Máquinas pequenas para pequenos agricultores",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escolher uma máquina pequena que sirva para a sua tarefa e para a sua zona.",
          text: [
            "Nem todas as explorações precisam de um trator de quatro rodas. Um trator de duas rodas (motocultivador) pode lavrar, fresar, bombear água e puxar um atrelado em talhões pequenos. Uma debulhadora de milho a motor ou uma trilhadeira para várias culturas (arroz, mapira, mexoeira, feijão ou soja) poupa dias de trabalho e perde menos grão. Um pulverizador de dorso a motor ou um atomizador cobre mais terreno do que um pulverizador manual. Outros exemplos são raladores de mandioca, ceifeiras de arroz e picadoras de forragem.",
            "Antes de comprar, verifique: há trabalho suficiente, na sua exploração e nas dos vizinhos, para a manter ocupada? Há um mecânico perto que a saiba reparar, e vendem-se peças perto de você? O vendedor dá formação e garantia? Pode ser levada de uma exploração para outra? As pessoas que a vão usar, incluindo mulheres e jovens, conseguem trabalhar com ela com segurança? A FAO publicou um catálogo de máquinas adequadas a mulheres agricultoras.",
            "Pulverizadores: use só pesticidas registados no seu país, como diz o rótulo, com equipamento de proteção. No Quénia, consulte a lista do Pest Control Products Board; na Nigéria, a NAFDAC. Um pulverizador a motor deita mais produto e mais depressa, por isso regule-o (calibre-o) como diz o manual antes de cada época."
          ],
          steps: ["Diga a tarefa e quantos hectares ou toneladas por ano.", "Escolha o tipo de máquina para essa tarefa.", "Verifique se há peças e um mecânico perto de você.", "Pergunte ao vendedor sobre formação e garantia.", "Verifique se pode ser transportada e usada com segurança pelos seus operadores.", "Para pulverizadores: só pesticidas registados, o rótulo e equipamento de proteção."],
          words: [["Trator de duas rodas", "um trator pequeno que se conduz a pé, atrás dele, também chamado motocultivador, que puxa alfaias e faz trabalhar bombas."], ["Trilhadeira", "uma máquina que separa o grão dos caules da planta."], ["Calibrar", "regular um pulverizador para deitar a quantidade certa, como dizem o manual e o rótulo do pesticida."]],
          slides: [
            { title: "Máquinas pequenas", bullets: ["Trator de duas rodas: lavrar, bombear, atrelado", "Debulhadora de milho; trilhadeira para várias culturas", "Pulverizador a motor; ralador de mandioca; picadora de forragem"] },
            { title: "Antes de comprar", bullets: ["Há trabalho para a manter ocupada?", "Peças e um mecânico perto?", "Formação, garantia, fácil de transportar?"] },
            { title: "Quem a vai usar?", bullets: ["Segura para os seus operadores", "Também para mulheres e jovens", "Catálogo da FAO de máquinas para mulheres agricultoras"] },
            { title: "Pulverizadores", bullets: ["Só pesticidas registados, como diz o rótulo", "Quénia: lista do PCPB. Nigéria: NAFDAC", "Equipamento de proteção; calibre primeiro"] }
          ],
          sources: [FAO_MECH, PCPB, NAFDAC],
          tryIt: "Escolha uma tarefa da Lição 1. Escolha uma máquina pequena para ela e visite ou telefone a um vendedor. Pergunte o preço, onde há peças e reparações, que formação e garantia dão e quanto trabalho ela faz num dia. Escreva as respostas.",
          youCanNow: "escolher uma máquina pequena que sirva para a sua tarefa, para a sua zona e para as pessoas que a vão usar.",
          quickCheck: [
            { objective: "O4", q: "Que máquina serve para lavrar e bombear em talhões pequenos?", options: ["Uma ceifeira-debulhadora", "Um trator de duas rodas (motocultivador)", "Uma debulhadora de milho", "Uma picadora de forragem"], answer: 1, why: "Um motocultivador lavra talhões pequenos e pode fazer trabalhar uma bomba." },
            { objective: "O4", q: "A debulhadora mais barata não tem peças nem mecânico a menos de 200 km. Qual é o risco?", options: ["Nenhum; as máquinas nunca avariam", "Vai debulhar depressa demais", "Quando avariar, pode ficar parada semanas", "Vai gastar pouco combustível"], answer: 2, why: "Uma máquina sem peças nem reparações perto pode ficar parada quando mais precisa dela." }
          ]
        },
        {
          title: "Segurança e livros de manutenção",
          objectives: ["O5"],
          minutes: 6,
          goal: "Usar uma máquina com segurança e manter o seu livro de manutenção.",
          text: [
            "As máquinas podem matar ou mutilar em segundos. Tratores que capotam, pessoas que caem debaixo das rodas e roupa presa em veios que giram são causas comuns de morte nas explorações. A OIT (Organização Internacional do Trabalho) publica um código de práticas sobre o uso seguro de tratores. As regras principais: só adultos com formação trabalham com as máquinas; nenhuma criança perto de máquinas a trabalhar; nenhum passageiro no trator nem nas alfaias; use a proteção contra capotamento e o cinto de segurança quando existirem; ande devagar e a direito nas encostas e longe das valas; mantenha todas as proteções no lugar, sobretudo no veio da tomada de força (TDF); e use roupa justa e o cabelo preso.",
            "Trilhadeiras e debulhadoras: nunca ponha a mão na boca de alimentação nem num entupimento. Desligue o motor e espere que todas as peças parem antes de desentupir. Proteja os ouvidos e os pulmões do barulho e do pó. Ponha combustível só com o motor desligado e frio, sem fumar. Tenha um estojo de primeiros socorros e um telefone por perto.",
            "Uma máquina bem cuidada dura mais e avaria menos na época de mais trabalho. Faça verificações diárias antes do trabalho: óleo do motor, combustível, água ou líquido de arrefecimento, filtro de ar, pneus, porcas e parafusos soltos, e pontos de lubrificação. Faça a manutenção pelas horas do contador, como diz o manual. Tenha um livro de registos com: data, horas, trabalho e hectares ou toneladas, combustível, reparações e peças, custo e o nome do operador. O livro mostra o custo real de funcionamento por hectare."
          ],
          steps: ["Só um operador adulto com formação; nenhuma criança, nenhum passageiro.", "Proteções no lugar; usar a proteção contra capotamento e o cinto quando existirem.", "Andar devagar nas encostas; ficar longe das valas.", "Desligar o motor e esperar antes de desentupir.", "Verificações diárias: óleo, combustível, arrefecimento, filtro de ar, pneus, parafusos, lubrificação.", "Escrever no livro o trabalho de cada dia, o combustível, as reparações e os custos."],
          words: [["Veio da tomada de força (TDF, em inglês PTO)", "um veio do trator que gira e faz trabalhar as alfaias; pode prender a roupa e matar."], ["Proteção contra capotamento", "uma estrutura por cima do lugar do condutor que o protege se o trator virar."], ["Livro de registos", "um livro onde regista cada trabalho, combustível, reparação e custo de uma máquina."]],
          slides: [
            { title: "Primeiro as pessoas", bullets: ["Só adultos com formação; nenhuma criança perto", "Nenhum passageiro", "Proteção contra capotamento e cinto de segurança"] },
            { title: "Pontos de perigo", bullets: ["Encostas e valas: devagar", "Veio da TDF: proteções no lugar; roupa justa, cabelo preso", "Entupimentos: desligar o motor, esperar, depois desentupir"] },
            { title: "Verificações diárias", bullets: ["Óleo, combustível, arrefecimento, filtro de ar", "Pneus, porcas e parafusos, lubrificação", "Manutenção pelas horas, como diz o manual"] },
            { title: "O livro de registos", bullets: ["Data, horas, trabalho, hectares ou toneladas", "Combustível, reparações, peças, custo, operador", "Mostra o custo real por hectare"] }
          ],
          sources: [ILO_TRACTORS],
          tryIt: "Faça uma lista de verificação de segurança de uma página para uma máquina que usa ou aluga, e uma página de livro de registos com colunas para data, horas, trabalho, hectares ou toneladas, combustível, reparações e peças, custo e operador. Preencha uma linha com um trabalho real ou de exemplo.",
          youCanNow: "usar uma máquina com as regras de segurança principais e manter um livro de manutenção que mostra o custo real de funcionamento.",
          quickCheck: [
            { objective: "O5", q: "Uma trilhadeira está entupida. O que faz?", options: ["Empurra a colheita com a mão enquanto ela trabalha", "Pede a uma criança para a tirar", "Dá um pontapé na máquina", "Desliga o motor, espera que todas as peças parem e depois desentope"], answer: 3, why: "As peças em movimento podem levar uma mão num segundo; só desentupa uma máquina parada." },
            { objective: "O5", q: "O que deve estar no livro de registos de uma máquina?", options: ["Data, horas, trabalho, combustível, reparações e custo", "O PIN do dinheiro móvel do operador", "Só a cor da máquina", "Nada; a memória chega"], answer: 0, why: "Estes registos mostram o custo real de funcionamento e quando é a manutenção." }
          ]
        },
        {
          title: "Começar um negócio de serviços de mecanização",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever um plano de uma página para um serviço de aluguer de máquinas.",
          text: [
            "Muitos serviços de aluguer são geridos por agricultores que compraram uma máquina para a sua exploração e depois a oferecem aos vizinhos, a dinheiro ou em troca de outro trabalho ou de colheita. O quadro da FAO e da União Africana para a mecanização em África vê os jovens a gerir serviços de aluguer como uma forma importante de levar máquinas aos pequenos agricultores. A FAO publica também um manual de formação sobre serviços de aluguer como negócio.",
            "Um plano de uma página responde: Que serviços, em que épocas (lavrar, debulhar, trilhar, transportar, bombear)? Quem são os clientes, e quantos hectares ou toneladas ao todo? Que preço, e como se compara com outros serviços? Quais são os custos (fixos por ano e de funcionamento por hectare, das Lições 2 e 5)? Qual é o ponto de equilíbrio? Como vai receber reservas e pagamentos (sinais, dinheiro móvel, recibos)? Quem é o operador, e tem formação? Quais são os riscos: avarias na época alta, trabalhos não pagos, acidentes, roubo? Como os vai reduzir (manutenção, condições por escrito, seguro, um localizador GPS)?",
            "Exemplo para um serviço de motocultivador no Senegal ou no Burkina Faso (todos os valores são só exemplos): custos fixos XOF 600,000 por ano, custos de funcionamento XOF 15,000 por hectare, preço XOF 35,000 por hectare. Ponto de equilíbrio = 600,000 / (35,000 - 15,000) = 30 hectares. Com 50 hectares reservados, lucro = 50 x 20,000 - 600,000 = XOF 400,000. Junte explorações próximas para cortar nas viagens, e acrescente trabalho fora da época, como debulhar e transportar. Há opções de financiamento como empréstimos, leasing e compra a prestações: leia cada contrato até ao fim e pergunte a um conselheiro de confiança."
          ],
          steps: ["Faça a lista dos seus serviços e épocas.", "Faça a lista dos clientes e do total de hectares ou toneladas.", "Escolha um preço que cubra o custo por hectare mais uma margem; compare com outros.", "Calcule o ponto de equilíbrio: custos fixos / (preço - custo de funcionamento por hectare).", "Planeie as reservas, o operador, os pagamentos e os registos.", "Faça a lista dos riscos e de como vai reduzir cada um."],
          words: [["Serviço de aluguer", "um negócio que faz trabalho agrícola com as suas máquinas para outros agricultores, a troco de pagamento."], ["Margem", "a parte do preço que sobra depois dos custos."], ["Trabalho fora da época", "trabalhos que uma máquina pode fazer fora da época principal, como transportar ou debulhar."]],
          slides: [
            { title: "Serviços de aluguer", bullets: ["Agricultores servem os vizinhos a troco de pagamento", "Forma importante de levar máquinas aos pequenos agricultores", "Manual de formação da FAO: serviços de aluguer como negócio"] },
            { title: "Plano de uma página", bullets: ["Serviços, épocas, clientes, hectares", "Preço, custos, ponto de equilíbrio", "Reservas, operador, pagamentos, riscos"] },
            { title: "Exemplo: motocultivador (XOF)", bullets: ["Fixos 600,000; funcionamento 15,000 por ha; preço 35,000", "Equilíbrio 600,000 / 20,000 = 30 ha", "50 ha: lucro XOF 400,000. Só exemplos"] },
            { title: "Para dar certo", bullets: ["Juntar explorações próximas; cortar nas viagens", "Acrescentar trabalhos fora da época", "Empréstimos e leasing: leia tudo, pergunte a um conselheiro"] }
          ],
          sources: [FAO_HIRE, FAO_HIRE_MANUAL, FAO_SAMA, HELLO],
          tryIt: "Tarefa final: faça a sua folha de decisão alugar ou comprar para uma máquina e uma tarefa. Se ter a máquina só compensar com o trabalho nas explorações dos vizinhos, acrescente um plano de uma página para um serviço de aluguer: serviços, clientes e hectares, preço, custos, ponto de equilíbrio, reservas e pagamentos, e os principais riscos.",
          youCanNow: "planear um serviço de aluguer de máquinas com preços, custos, ponto de equilíbrio e riscos.",
          quickCheck: [
            { objective: "O6", q: "Os custos fixos são XOF 400,000 por ano, os custos de funcionamento XOF 10,000 por hectare e o preço XOF 30,000 por hectare. Qual é a área de equilíbrio?", options: ["10 hectares", "13 hectares", "40 hectares", "20 hectares"], answer: 3, why: "400,000 / (30,000 - 10,000) = 20 hectares." },
            { objective: "O6", q: "Que passo baixa o custo das viagens de um serviço de aluguer de tratores?", options: ["Juntar reservas de explorações próximas", "Aceitar trabalhos longe uns dos outros no mesmo dia", "Recusar explorações pequenas", "Nunca planear as reservas"], answer: 0, why: "Fazer explorações próximas juntas poupa combustível e tempo na estrada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar as máquinas e um negócio de serviços",
        questions: [
          { objective: "O4", q: "Antes de comprar uma máquina pequena, que verificação conta mais para a manter a trabalhar?", options: ["A cor", "Peças e um mecânico perto de você", "O que o vizinho pagou", "O autocolante da marca"], answer: 1, why: "Sem peças e reparações perto, uma máquina avariada fica parada." },
          { objective: "O4", q: "Vai usar um pulverizador a motor. O que está certo?", options: ["Qualquer pesticida do mercado", "Misturar dois pesticidas para poupar tempo", "Só pesticidas registados, como diz o rótulo, com equipamento de proteção", "Pulverizar sem calibrar"], answer: 2, why: "Só os produtos registados, usados como diz o rótulo, são seguros e legais." },
          { objective: "O5", q: "Qual é uma regra de segurança do trator?", options: ["Nenhum passageiro no trator nem nas alfaias", "As crianças podem ir se tiverem cuidado", "Tirar a proteção da TDF para trabalhar mais depressa", "Andar depressa nas encostas"], answer: 0, why: "Os passageiros caem debaixo das rodas; é uma causa comum de morte nas explorações." },
          { objective: "O5", q: "Porque manter um livro de registos da máquina?", options: ["É só para o banco", "Para mostrar a cor da máquina", "Para o operador trabalhar mais devagar", "Para ver o custo real por hectare e quando é a manutenção"], answer: 3, why: "Registar o trabalho, o combustível e as reparações mostra os custos reais e as datas da manutenção." },
          { objective: "O6", q: "O que deve estar num plano de um serviço de aluguer?", options: ["Só o preço da máquina", "Serviços, clientes, preço, custos, ponto de equilíbrio e riscos", "O PIN do dono", "Só um logótipo"], answer: 1, why: "Um plano mostra se o serviço ganha mais do que custa e como se tratam os riscos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Máquinas Agrícolas e Serviços de Mecanização",
    questions: [
      { objective: "O1", q: "A mecanização inclui:", options: ["Só tratores grandes", "Só máquinas importadas", "Ferramentas e máquinas, desde ferramentas manuais melhores até tratores", "Só drones"], answer: 2, why: "A FAO conta todos os níveis, das ferramentas manuais ao equipamento a motor." },
      { objective: "O1", q: "Qual é uma razão forte para mecanizar a trilha?", options: ["Faz em horas o que leva dias a muitas pessoas, e perde-se menos grão", "As máquinas parecem modernas", "Trilhar à mão é proibido", "Os vizinhos têm máquinas"], answer: 0, why: "O tempo poupado e as perdas menores fazem da trilha uma boa tarefa para mecanizar." },
      { objective: "O1", q: "Sachar 1 hectare à mão custa KES 6,000 e um serviço com máquina custa KES 9,000. Só pelo custo:", options: ["A máquina é mais barata", "São iguais", "Não se podem comparar", "Sachar à mão é mais barato"], answer: 3, why: "KES 6,000 é menos do que KES 9,000, por isso a máquina não compensa só pelo custo." },
      { objective: "O2", q: "A depreciação é:", options: ["O combustível que uma máquina gasta", "O valor que uma máquina perde em cada ano", "O preço de aluguer", "O salário do operador"], answer: 1, why: "A depreciação reparte a perda de valor pela vida da máquina." },
      { objective: "O2", q: "Qual é um custo de funcionamento por hectare?", options: ["O seguro", "O abrigo", "O combustível", "Os juros do empréstimo por ano"], answer: 2, why: "O combustível aumenta com cada hectare trabalhado; os outros são fixos." },
      { objective: "O2", q: "Custos fixos NGN 2,000,000 por ano; preço de aluguer NGN 50,000 por ha; custo de funcionamento NGN 25,000 por ha. Área de equilíbrio?", options: ["80 hectares", "40 hectares", "50 hectares", "100 hectares"], answer: 0, why: "2,000,000 / (50,000 - 25,000) = 80 hectares." },
      { objective: "O2", q: "Que vantagem de ter a máquina os números dos custos muitas vezes não mostram?", options: ["Pagar mais juros", "Lavrar a tempo sem esperar por um trator alugado", "Seguro mais caro", "Mais reparações"], answer: 1, why: "O tempo certo tem valor, mesmo quando alugar é mais barato no papel." },
      { objective: "O3", q: "A Hello Tractor deixa os agricultores reservar serviços de trator:", options: ["Só por correio", "Só num banco", "Só pessoalmente numa fábrica", "Por uma aplicação de telefone, pelo site ou através de agentes de reservas"], answer: 3, why: "A Hello Tractor diz que os agricultores reservam pelas suas aplicações ou através de agentes de reservas." },
      { objective: "O3", q: "Como deve medir o campo para um trabalho de aluguer?", options: ["Confiar na estimativa do operador", "Medi-lo você mesmo com uma fita métrica ou uma aplicação de GPS no telefone", "Contar as árvores", "Não medir"], answer: 1, why: "A sua própria medição protege-o de pagar mais área do que a trabalhada." },
      { objective: "O3", q: "Alguém telefona, diz que é agente de tratores e pede o pagamento todo adiantado por dinheiro móvel. Você:", options: ["Paga logo", "Envia o seu PIN", "Reserva pela aplicação oficial ou por um agente conhecido, e paga depois de verificar o trabalho", "Paga o dobro para ter a certeza"], answer: 2, why: "Desconhecidos que pedem pagamento adiantado são uma burla comum." },
      { objective: "O4", q: "Uma trilhadeira para várias culturas pode trilhar:", options: ["Arroz, mapira, mexoeira, feijão ou soja", "Só mandioca", "Só café", "Só capim"], answer: 0, why: "As trilhadeiras para várias culturas trabalham com muitos cereais e leguminosas." },
      { objective: "O4", q: "Qual NÃO é uma verificação importante antes de comprar uma máquina pequena?", options: ["Peças perto", "Formação e garantia do vendedor", "Trabalho suficiente para a manter ocupada", "A cor da tinta"], answer: 3, why: "As peças, a formação e o uso decidem o valor; a cor da tinta não." },
      { objective: "O4", q: "No Quénia, a lista de que organismo mostra os pesticidas registados para pulverizadores?", options: ["Kenya Dairy Board", "Kenya Fisheries Service", "Pest Control Products Board", "Kenya Wildlife Service"], answer: 2, why: "O Pest Control Products Board regista os pesticidas no Quénia." },
      { objective: "O5", q: "Quem pode conduzir um trator?", options: ["Qualquer criança que tenha cuidado", "Um adulto com formação", "Qualquer pessoa com telefone", "Um passageiro"], answer: 1, why: "Só adultos com formação devem trabalhar com as máquinas." },
      { objective: "O5", q: "Porque é que as proteções têm de ficar no veio da TDF?", options: ["O veio que gira pode prender a roupa e matar", "Tornam o trator mais rápido", "São só decoração", "Poupam combustível"], answer: 0, why: "Ficar preso no veio da TDF é uma causa comum de ferimentos graves e de morte nas explorações." },
      { objective: "O5", q: "Quando deve pôr combustível numa máquina?", options: ["Enquanto ela trabalha", "Enquanto fuma", "Perto de uma fogueira", "Com o motor desligado e frio, sem fumar"], answer: 3, why: "Combustível num motor quente ou perto de chamas pode pegar fogo." },
      { objective: "O5", q: "Com que frequência deve fazer as verificações básicas (óleo, combustível, arrefecimento, pneus, parafusos)?", options: ["Uma vez por ano", "Só quando avaria", "Todos os dias antes do trabalho", "Nunca"], answer: 2, why: "As verificações diárias apanham pequenos problemas antes de pararem a máquina na época de mais trabalho." },
      { objective: "O6", q: "Custos fixos XOF 500,000 por ano; custo de funcionamento XOF 15,000 por ha; preço XOF 40,000 por ha. Área de equilíbrio?", options: ["12 hectares", "20 hectares", "25 hectares", "33 hectares"], answer: 1, why: "500,000 / (40,000 - 15,000) = 20 hectares." },
      { objective: "O6", q: "O que reduz o risco de uma avaria na época alta?", options: ["Saltar a manutenção para poupar dinheiro", "Emprestá-la sem livro de registos", "Manutenção regular e peças em stock", "Pô-la a trabalhar dia e noite sem verificações"], answer: 2, why: "A manutenção e as peças de reserva mantêm a máquina a trabalhar quando os clientes mais precisam dela." },
      { objective: "O6", q: "Antes de assinar um contrato de leasing ou um empréstimo para uma máquina, deve:", options: ["Ler o contrato todo e perguntar a um conselheiro de confiança", "Assinar depressa antes de a oferta acabar", "Ler só a primeira página", "Deixar o vendedor preenchê-lo por você"], answer: 0, why: "Os contratos trazem custos e riscos; leia-os até ao fim e peça conselho." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Escolha da tarefa", objective: "O1", notYet: "Nenhuma razão dada para mecanizar a tarefa.", meets: "A tarefa é escolhida com razões (tempo certo, mão de obra, perdas ou volume) e com o custo à mão.", exceeds: "Compara duas ou mais tarefas e explica porque esta é a que mais compensa." },
      { name: "Comparação de custos", objective: "O2", notYet: "Faltam os custos fixos ou de funcionamento, ou as contas estão erradas.", meets: "Depreciação, custos fixos, custos de funcionamento, custo de alugar e área de equilíbrio certos, com uma decisão clara.", exceeds: "Usa preços reais e anota o tempo certo e o risco ao lado dos números." },
      { name: "Verificações da máquina e do aluguer", objective: "O4", notYet: "Nenhuma verificação sobre peças, reparações ou o serviço de aluguer.", meets: "Faz a lista de verificações sobre peças, mecânico, formação e garantia, ou sobre as condições do serviço de aluguer.", exceeds: "Já perguntou a um vendedor ou serviço de aluguer e anotou as respostas." },
      { name: "Segurança e manutenção", objective: "O5", notYet: "Nenhuma regra de segurança ou nenhum livro de registos.", meets: "Regras de segurança principais e um livro de registos com data, horas, trabalho, combustível, reparações e custo.", exceeds: "Diz quem tem formação para conduzir e quando é a primeira manutenção." },
      { name: "Decisão e plano de negócio", objective: "O6", notYet: "Nenhuma decisão, ou uma decisão de comprar sem plano para manter a máquina ocupada.", meets: "Decisão clara; se comprar, um plano de aluguer de uma página com serviços, clientes, preço, custos, ponto de equilíbrio e riscos.", exceeds: "Mostra que o plano ainda funciona com menos 20% de hectares reservados, ou diz o que mudaria." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que tomam uma decisão de alugar ou comprar com a folha de decisão em 3 meses (inquérito de seguimento)",
      "Alunos que dizem ter semeado a tempo na época seguinte graças a máquinas reservadas ou próprias",
      "Alunos que começam ou fazem crescer um serviço de aluguer, e os hectares que servem, em 12 meses",
      "Ferimentos com máquinas comunicados pelos alunos (meta: nenhum)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, ou um telefone com uma folha de cálculo ou uma aplicação de notas",
      "Uma calculadora (a calculadora do telefone serve)",
      "Uma fita métrica ou um telefone com uma aplicação de GPS para medir áreas",
      "Preços reais de um vendedor local e de serviços de aluguer, recolhidos durante o curso",
      "Cerca de 75 minutos no total, em sessões curtas, mais uma visita a uma máquina"
    ],
    facilitatorNotes: [
      "Organize uma demonstração com um serviço de aluguer ou vendedor local: verificações diárias, proteções, e como desentupir com segurança uma debulhadora ou trilhadeira com o motor desligado.",
      "Troque os preços de exemplo por preços locais antes das Lições 2 e 6, e diga claramente que são exemplos.",
      "Explique os empréstimos, o leasing e a compra a prestações e os seus riscos, mas não dê conselhos de investimento; encaminhe os alunos para um conselheiro de confiança.",
      "Mantenha as crianças longe de todas as demonstrações com máquinas.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Encaminhe os grupos que querem partilhar máquinas para o curso \"Mobilização Comunitária: Partilhar Máquinas e Negociar a Compra de Insumos\"."
    ]
  }
};
