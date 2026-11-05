"use strict";

// Koach Learn course (Portuguese translation of shared/hvac-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US (EPA, OSHA, BLS, state licenses); US names are kept and explained.

module.exports = {
  id: "hvac-basics-pt",
  lang: "pt",
  translationOf: "hvac-basics",
  category: "Workforce Development",
  name: "Noções Básicas de Técnico de AVAC (HVAC)",
  skills: "Nomear as partes de um sistema de aquecimento e arrefecimento, Seguir o ciclo de refrigeração, Ler placas de identificação e fazer contas de AVAC, Reconhecer os perigos do trabalho em AVAC, Escolher a certificação EPA Secção 608 certa, Planear o seu caminho para o AVAC",
  outcome: "explicar como funciona um sistema de aquecimento e arrefecimento de uma casa, ler os seus números, dizer os perigos do trabalho e como se proteger, escolher a certificação EPA Secção 608 de que precisa e seguir um plano com datas para se formar, ser certificado e ser contratado como ajudante ou aprendiz de AVAC.",
  about: [
    "Os técnicos de AVAC (em inglês HVAC: aquecimento, ventilação e ar condicionado) mantêm casas, escolas, lojas e hospitais quentes no inverno e frescos no verão. É um trabalho prático, faz falta em todas as cidades, e muitas pessoas começam como ajudante ou aprendiz e aprendem no trabalho. Este curso é para quem pensa neste caminho: quem procura emprego, antigos militares, jovens adultos, pessoas que saem da prisão, imigrantes e adultos que voltam a estudar.",
    "Vai aprender as principais partes de um sistema e como um ar condicionado leva o calor de um lado para o outro, ler os números dos filtros e das etiquetas dos aparelhos, e fazer as contas simples que os técnicos usam todos os dias. Depois vai aprender os perigos do trabalho, a certificação federal EPA Secção 608 que os técnicos que mexem em fluido refrigerante têm de ter, e as formas de entrar na profissão.",
    "Este curso prepara você. Não lhe dá uma licença nem um certificado. A certificação EPA Secção 608 só se obtém passando num teste de uma organização certificadora aprovada pela EPA, e alguns estados e cidades também exigem licença para trabalho de AVAC. O trabalho prático com refrigerante e eletricidade só se aprende num programa de formação supervisionado, com o equipamento de proteção certo.",
    "Cada lição dura cerca de cinco minutos, com uma pequena tarefa \"Experimente agora\" e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. O seu produto final é o seu próprio plano de início em AVAC, com datas reais."
  ],
  finalTask: "Faça o seu plano de início em AVAC: (1) um desenho à mão do ciclo de refrigeração com as quatro partes principais escritas por ordem e uma frase sobre o que cada uma faz; (2) uma lista de perigos de um trabalho de AVAC com a proteção para cada perigo; e (3) um plano com datas que diga o tipo de certificação EPA Secção 608 que vai fazer, uma organização certificadora aprovada pela EPA, dois programas de formação ou aprendizagens perto de si, o que o seu estado ou cidade exige para uma licença de AVAC (a partir da página oficial) e uma data para cada passo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que procuram um trabalho qualificado que não exige um curso universitário de quatro anos: quem procura emprego, antigos militares, jovens adultos, pessoas que saem da prisão, imigrantes e adultos que voltam a estudar. Alguns já fizeram trabalho prático (manutenção, forças armadas, construção, mecânica de carros); muitos nunca trabalharam com aparelhos de aquecimento ou arrefecimento.",
    startingPoint: "Sabem ler instruções curtas e fazer contas com números inteiros. A maioria sabe que o termóstato controla o aquecimento e o ar condicionado, mas não sabe nomear as partes de um sistema, explicar como funciona o arrefecimento nem dizer que certificação o trabalho de AVAC exige.",
    gap: "Os empregadores que contratam ajudantes e aprendizes de AVAC querem pessoas que conheçam as partes e as palavras básicas, levem a segurança a sério e estejam a caminho da certificação EPA Secção 608. Os alunos precisam dessa base, e de um plano claro e honesto com datas, para se candidatarem com confiança e não pagarem uma formação que não leva a um emprego.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano); cada palavra da profissão é explicada",
      "Neste curso não há trabalho prático com refrigerante, eletricidade ou brasagem: isso exige formação supervisionada e o equipamento de proteção certo",
      "Aparelhos: um telefone ou computador da biblioteca para ler páginas oficiais; papel e caneta para desenhos e planos",
      "Tempo: lições de 5 a 6 minutos, que cabem entre o trabalho e as consultas",
      "As regras mudam de estado para estado e de cidade para cidade: cada aluno verifica a licença na página oficial do lugar onde vive"
    ],
    prerequisites: "Nenhum. \"Começar uma Carreira num Ofício Técnico\" é um bom primeiro passo para escolher um ofício; este curso vai mais fundo no AVAC."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um desenho ou uma foto de um sistema split de uma casa", action: "nomear as principais partes de um sistema de aquecimento e arrefecimento e seguir o ciclo de refrigeração por ordem", standard: "com as quatro partes principais do ciclo pela ordem certa e o que cada uma faz" },
    { id: "O2", condition: "Com a descrição de um trabalho de AVAC", action: "fazer a lista dos perigos do trabalho e da proteção para cada um", standard: "dizendo pelo menos cinco perigos, cada um ligado a um passo seguro ou a um equipamento de proteção" },
    { id: "O3", condition: "Com um filtro, uma placa de identificação de um aparelho ou duas leituras de temperatura", action: "ler as medidas e as características e fazer contas simples de AVAC", standard: "acertando pelo menos 4 de 5 exercícios" },
    { id: "O4", condition: "Com uma lista de aparelhos e de situações com refrigerante", action: "ligar cada um ao tipo certo de certificação EPA Secção 608 e à regra do refrigerante que se aplica", standard: "acertando pelo menos 4 de 5" },
    { id: "O5", condition: "Usando os sites oficiais do seu estado", action: "escrever um plano com datas para se formar, fazer o teste EPA Secção 608 e candidatar-se a um trabalho de ajudante ou aprendiz de AVAC", standard: "com pelo menos cinco passos com datas e uma fonte oficial para cada exigência" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam os sistemas de aquecimento e arrefecimento",
      lessons: [
        {
          title: "O que faz um técnico de AVAC, e as partes principais",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nomear as principais partes de um sistema de aquecimento e arrefecimento de uma casa e dizer o que cada uma faz.",
          text: [
            "AVAC quer dizer aquecimento, ventilação e ar condicionado; em inglês diz-se HVAC. Também vai ver HVACR, que junta a refrigeração (câmaras frigoríficas, máquinas de gelo). Os técnicos de AVAC instalam sistemas novos, fazem a manutenção regular, descobrem porque é que um sistema deixou de funcionar e reparam-no.",
            "Muitas casas têm um sistema split: uma parte fica do lado de fora e outra do lado de dentro. A unidade exterior tem o compressor e a serpentina exterior (o condensador). A parte interior é uma caldeira de ar quente (fornalha) ou uma unidade de tratamento de ar com um ventilador e uma serpentina interior (o evaporador). Uns tubos chamados linha de refrigerante levam o refrigerante entre as duas.",
            "O termóstato na parede é o comando: diz ao sistema quando aquecer ou arrefecer. O ventilador empurra o ar pelas condutas. As grelhas de insuflação mandam o ar para as divisões, e as grelhas de retorno puxam o ar das divisões de volta. O filtro de ar limpa esse ar antes de ele chegar ao aparelho.",
            "Uma bomba de calor parece um ar condicionado, mas também pode funcionar ao contrário para aquecer a casa. Uma fornalha faz calor queimando gás ou petróleo, ou com peças de aquecimento elétrico."
          ],
          words: [
            ["AVAC (HVAC)", "aquecimento, ventilação e ar condicionado. HVACR junta a refrigeração."],
            ["Sistema split", "um sistema com uma unidade fora e outra dentro, ligadas por tubos de refrigerante."],
            ["Termóstato", "o comando na parede que diz ao sistema quando aquecer ou arrefecer."],
            ["Condutas", "os tubos de metal ou flexíveis que levam o ar para as divisões e de volta."],
            ["Bomba de calor", "um sistema que arrefece no verão e pode funcionar ao contrário para aquecer no inverno."],
            ["Linha de refrigerante (line set)", "o par de tubos de cobre que leva o refrigerante entre a unidade exterior e a interior."]
          ],
          slides: [
            { title: "O que fazem os técnicos de AVAC", bullets: ["Instalam sistemas novos", "Fazem a manutenção regular", "Encontram o problema e reparam-no"] },
            { title: "Fora: a unidade exterior", bullets: ["Compressor", "Serpentina exterior (condensador) e ventoinha"] },
            { title: "Dentro: fornalha ou unidade de tratamento de ar", bullets: ["O ventilador move o ar", "Serpentina interior (evaporador)", "O filtro de ar limpa o ar primeiro"] },
            { title: "O comando e os caminhos do ar", bullets: ["Termóstato: diz quando funcionar", "Grelhas de insuflação mandam o ar; grelhas de retorno puxam-no de volta", "As condutas levam o ar"] }
          ],
          tryIt: "Olhe para o aquecimento e o ar condicionado da sua casa, escola ou de uma loja (só por fora, nunca abra um painel). Ou procure na internet uma foto de um \"split system air conditioner\". Num papel, escreva todas as partes que conseguir ver: termóstato, grelhas, filtro, unidade exterior, tubos. Ao lado de cada uma, escreva uma linha sobre o que faz.",
          youCanNow: "nomear as principais partes de um sistema de aquecimento e arrefecimento de uma casa e dizer o que cada parte faz.",
          quickCheck: [
            { objective: "O1", q: "Que parte diz ao sistema quando aquecer ou arrefecer?", options: ["As condutas", "O filtro de ar", "O termóstato", "A serpentina exterior"], answer: 2, why: "O termóstato é o comando; dá sinal ao sistema para começar e parar." },
            { objective: "O1", q: "Num sistema split de uma casa, onde costuma estar o compressor?", options: ["Na unidade exterior", "Dentro do termóstato", "Atrás do filtro de ar", "Numa grelha de retorno"], answer: 0, why: "Num sistema split o compressor fica na unidade exterior, com a serpentina exterior." }
          ]
        },
        {
          title: "Como um ar condicionado leva o calor",
          objectives: ["O1"],
          minutes: 6,
          goal: "Seguir o ciclo de refrigeração pelas suas quatro partes principais, por ordem.",
          text: [
            "Um ar condicionado não faz frio. Leva o calor de dentro da casa para fora. Um fluido especial chamado refrigerante transporta esse calor num circuito fechado de tubos. Este circuito chama-se ciclo de refrigeração.",
            "1. O compressor aperta o vapor de refrigerante, e ele fica quente e com pressão alta. 2. No condensador (a serpentina exterior) uma ventoinha sopra o ar de fora sobre a serpentina quente; o refrigerante solta o seu calor e passa a líquido. 3. O dispositivo de expansão (muitas vezes uma válvula de expansão) deixa o líquido passar por uma abertura pequena, a pressão desce e ele fica muito frio. 4. No evaporador (a serpentina interior) o ar quente da divisão passa sobre a serpentina fria; o refrigerante absorve o calor e ferve, voltando a vapor. Depois volta ao compressor e o circuito começa outra vez.",
            "Uma bomba de calor usa as mesmas quatro partes. No inverno, uma válvula de inversão manda o refrigerante para o outro lado, e assim o calor é apanhado fora e solto dentro.",
            "Conhecer o ciclo é a forma como os técnicos encontram os problemas. Por exemplo, se a serpentina exterior estiver entupida de sujidade, o calor não consegue sair e o sistema arrefece mal."
          ],
          steps: [
            "Compressor: aperta o vapor, que fica quente e com pressão alta.",
            "Condensador (serpentina exterior): solta o calor lá fora; o refrigerante passa a líquido.",
            "Dispositivo de expansão: faz descer a pressão, e o líquido fica muito frio.",
            "Evaporador (serpentina interior): absorve o calor do ar da divisão; o refrigerante passa a vapor e volta ao compressor."
          ],
          words: [
            ["Refrigerante", "o fluido dentro do sistema que leva o calor de um lugar para outro."],
            ["Ciclo de refrigeração", "o circuito que o refrigerante percorre: compressor, condensador, dispositivo de expansão, evaporador."],
            ["Compressor", "a bomba que aperta o vapor de refrigerante, que fica quente e com pressão alta."],
            ["Condensador", "a serpentina onde o refrigerante solta o calor e passa a líquido; fica fora num ar condicionado de casa."],
            ["Dispositivo de expansão", "a parte (muitas vezes uma válvula de expansão) que faz descer a pressão do refrigerante para ele ficar frio."],
            ["Evaporador", "a serpentina onde o refrigerante absorve o calor e passa a vapor; fica dentro num ar condicionado de casa."],
            ["Válvula de inversão", "a parte de uma bomba de calor que muda o sentido do refrigerante para aquecer."]
          ],
          slides: [
            { title: "O ar condicionado leva o calor; não faz frio", bullets: ["O refrigerante leva o calor num circuito fechado", "O calor vai de dentro para fora"] },
            { title: "O ciclo, por ordem", bullets: ["1. Compressor: vapor quente, pressão alta", "2. Condensador: solta o calor, passa a líquido", "3. Dispositivo de expansão: a pressão desce, fica frio", "4. Evaporador: absorve o calor da divisão, passa a vapor"] },
            { title: "Bombas de calor", bullets: ["As mesmas quatro partes", "A válvula de inversão põe-na a funcionar ao contrário para aquecer"] },
            { title: "Porque os técnicos aprendem isto", bullets: ["O ciclo explica a maioria dos problemas", "Exemplo: serpentina exterior suja = o calor não consegue sair"] }
          ],
          tryIt: "Sem olhar, desenhe um círculo num papel e escreva à volta dele as quatro partes do ciclo por ordem: compressor, condensador, dispositivo de expansão, evaporador. Desenhe setas. Marque que partes ficam fora e quais ficam dentro, e escreva \"quente\" ou \"frio\" ao lado de cada uma. Depois compare o seu desenho com a lição. Guarde-o: é a parte 1 da sua tarefa final.",
          youCanNow: "seguir o ciclo de refrigeração por ordem e dizer o que faz cada uma das quatro partes principais.",
          quickCheck: [
            { objective: "O1", q: "Que parte solta o calor fora da casa?", options: ["O evaporador", "O termóstato", "O filtro de ar", "O condensador"], answer: 3, why: "O condensador é a serpentina exterior, onde o refrigerante solta o calor e passa a líquido." },
            { objective: "O1", q: "No ciclo, o que vem logo a seguir ao dispositivo de expansão?", options: ["O compressor", "O evaporador", "O condensador", "O termóstato"], answer: 1, why: "O líquido frio que sai do dispositivo de expansão entra no evaporador para absorver o calor do ar da divisão." }
          ]
        },
        {
          title: "Ler os números: filtros, placas de identificação e temperaturas",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ler a medida de um filtro e a placa de identificação de um aparelho, e fazer contas simples de AVAC.",
          text: [
            "Os filtros têm a medida escrita na borda, por exemplo 16 x 25 x 1. Isso quer dizer 16 polegadas por 25 polegadas, e 1 polegada de espessura (nos Estados Unidos as medidas vêm em polegadas). Uma seta mostra para que lado o ar corre: aponta para o ventilador, para longe da grelha de retorno. Um filtro posto ao contrário ou com a medida errada deixa entrar sujidade no aparelho.",
            "Cada unidade tem uma placa de identificação (uma etiqueta de metal ou um autocolante) com o número do modelo e o número de série, os volts com que funciona, as características elétricas em amperes, e o tipo e a quantidade de refrigerante. Os técnicos leem a placa antes de encomendar peças ou de verificar a alimentação elétrica. A capacidade de arrefecimento vem muitas vezes em BTU por hora ou em toneladas. Uma tonelada de arrefecimento são 12,000 BTU por hora, por isso uma unidade de 36,000 BTU é uma unidade de 3 toneladas.",
            "A diferença de temperatura é uma verificação simples: meça o ar que entra no retorno e o ar que sai de uma grelha de insuflação, e depois subtraia. Se o ar de retorno está a 75°F e o ar de insuflação está a 57°F, a diferença é de 18°F (°F são graus Fahrenheit, usados nos Estados Unidos). O intervalo normal depende do sistema e das condições; o seu formador e os papéis do fabricante dizem o que esperar. Por agora, pratica só a leitura e as contas.",
            "Só para praticar: todos os números desta lição são inventados para aprender. Não abra nenhum painel de um aparelho para encontrar uma placa; leia uma que consiga ver por fora, ou olhe para uma foto."
          ],
          steps: [
            "Filtro: leia os três números (largura x altura x espessura) e encontre a seta do fluxo de ar.",
            "Placa de identificação: encontre o número do modelo e o de série, os volts, os amperes e o tipo de refrigerante.",
            "Capacidade: divida os BTU por hora por 12,000 para ter as toneladas.",
            "Diferença de temperatura: temperatura do ar de retorno menos temperatura do ar de insuflação."
          ],
          words: [
            ["Placa de identificação", "a etiqueta de uma unidade com o modelo, o número de série, as características elétricas e o tipo de refrigerante."],
            ["BTU", "unidade térmica britânica: uma medida de calor. A capacidade de arrefecimento e de aquecimento vem em BTU por hora."],
            ["Tonelada (de arrefecimento)", "12,000 BTU por hora de arrefecimento. Uma unidade de 2 toneladas tem 24,000 BTU por hora."],
            ["Volts e amperes", "os volts são a força que empurra a eletricidade; os amperes são a quantidade de corrente elétrica que passa."],
            ["Ar de retorno e ar de insuflação", "o ar de retorno é puxado de volta das divisões; o ar de insuflação é mandado para as divisões."],
            ["Diferença de temperatura", "a diferença entre a temperatura do ar de retorno e a do ar de insuflação."]
          ],
          slides: [
            { title: "Medidas dos filtros", bullets: ["16 x 25 x 1 = 16 por 25 polegadas, 1 polegada de espessura", "A seta aponta para o ventilador", "Medida errada ou ao contrário deixa entrar sujidade"] },
            { title: "A placa de identificação", bullets: ["Número do modelo e número de série", "Volts e amperes", "Tipo e quantidade de refrigerante"] },
            { title: "Toneladas e BTU", bullets: ["1 tonelada = 12,000 BTU por hora", "36,000 BTU = 3 toneladas", "Divida os BTU por 12,000"] },
            { title: "Diferença de temperatura", bullets: ["Ar de retorno menos ar de insuflação", "75°F - 57°F = 18°F", "Intervalo normal: do seu formador e do fabricante"] }
          ],
          tryIt: "Só para praticar. Resolva e escreva as contas: (1) Um filtro diz 20 x 20 x 1. Qual é a espessura? (2) Uma unidade tem 24,000 BTU por hora. Quantas toneladas? (3) Uma unidade tem 60,000 BTU por hora. Quantas toneladas? (4) Ar de retorno a 78°F, ar de insuflação a 60°F. Qual é a diferença? (5) Encontre um filtro em sua casa ou numa foto na internet e escreva a medida e para que lado aponta a seta. Respostas: 1 polegada; 2 toneladas; 5 toneladas; 18°F.",
          youCanNow: "ler a medida de um filtro e uma placa de identificação, passar BTU para toneladas e calcular uma diferença de temperatura.",
          quickCheck: [
            { objective: "O3", q: "Uma unidade tem 48,000 BTU por hora. Quantas toneladas tem?", options: ["3 toneladas", "6 toneladas", "5 toneladas", "4 toneladas"], answer: 3, why: "48,000 a dividir por 12,000 dá 4, por isso é uma unidade de 4 toneladas." },
            { objective: "O3", q: "O ar de retorno está a 76°F e o ar de insuflação a 58°F. Qual é a diferença de temperatura?", options: ["16°F", "18°F", "134°F", "20°F"], answer: 1, why: "Subtraia: 76 menos 58 dá 18°F." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam os sistemas de aquecimento e arrefecimento",
        questions: [
          { objective: "O1", q: "O que quer dizer AVAC (em inglês HVAC)?", options: ["Aquecimento, válvulas e condutas", "Alta voltagem e ar controlado", "Aquecimento, ventilação e ar condicionado", "Arrefecimento e ventilação da casa"], answer: 2, why: "AVAC é aquecimento, ventilação e ar condicionado; HVACR junta a refrigeração." },
          { objective: "O1", q: "Como é que um ar condicionado arrefece uma casa?", options: ["Leva o calor de dentro para fora", "Faz ar frio do nada", "Junta refrigerante novo todos os dias", "Puxa o ar frio de fora"], answer: 0, why: "O refrigerante apanha o calor dentro e solta-o fora." },
          { objective: "O1", q: "Que parte aperta o vapor de refrigerante para ele ficar quente e com pressão alta?", options: ["O evaporador", "O filtro de ar", "O dispositivo de expansão", "O compressor"], answer: 3, why: "O compressor é a bomba que aperta o vapor no início do ciclo." },
          { objective: "O3", q: "Um filtro tem a marca 20 x 25 x 4. O que lhe diz o 4?", options: ["Dura 4 meses", "Tem 4 polegadas de espessura", "Há 4 na caixa", "É de grau 4"], answer: 1, why: "O terceiro número é a espessura em polegadas." },
          { objective: "O3", q: "Onde encontra o tipo de refrigerante e as características elétricas de uma unidade?", options: ["No ecrã do termóstato", "No filtro de ar", "Na grelha de insuflação", "Na placa de identificação da unidade"], answer: 3, why: "A placa de identificação mostra o modelo, o número de série, os volts, os amperes e o refrigerante." }
        ]
      }
    },
    {
      name: "Capítulo 2: Segurança, certificação e o seu caminho",
      lessons: [
        {
          title: "Estar seguro num trabalho de AVAC",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fazer a lista dos principais perigos de um trabalho de AVAC e da proteção para cada um.",
          text: [
            "Os técnicos de AVAC têm uma das taxas de lesões mais altas de todas as profissões, segundo o Gabinete de Estatísticas do Trabalho dos EUA (BLS). A segurança vem primeiro em cada serviço. O trabalho prático nesta profissão só se aprende em formação supervisionada, com o equipamento de proteção certo.",
            "Eletricidade: as unidades funcionam com a voltagem de casa ou mais alta, e algumas peças (como os condensadores elétricos) podem guardar carga depois de a corrente ser desligada. No trabalho, os técnicos formados desligam a corrente, bloqueiam-na e põem uma etiqueta para ninguém a voltar a ligar, e testam que está mesmo desligada antes de tocar em qualquer coisa. A regra de bloqueio e etiquetagem da OSHA, a agência federal de segurança no trabalho (29 CFR 1910.147), define estes passos.",
            "Refrigerante: está sob pressão e pode causar queimaduras de frio e lesões nos olhos; num espaço pequeno e fechado pode empurrar para fora o oxigénio de que precisa para respirar. Os técnicos usam óculos de segurança ou óculos de proteção e luvas, e só pessoas certificadas e formadas mexem nele.",
            "Outros perigos: sótãos quentes e espaços apertados debaixo da casa (doenças causadas pelo calor), escadas e telhados (quedas), aparelhos pesados (lesões nas costas), bordas afiadas de chapa de metal (cortes) e o trabalho com maçarico chamado brasagem (queimaduras e incêndio). A proteção: água e pausas, uso seguro das escadas, levantar com as pernas ou com ajuda, luvas resistentes a cortes e um extintor por perto."
          ],
          steps: [
            "Leia a ordem de trabalho e pergunte qual é o serviço.",
            "Procure os perigos: corrente, refrigerante, calor, alturas, bordas afiadas, fogo.",
            "Ponha a proteção que o trabalho exige: óculos de segurança, luvas, botas.",
            "Só técnicos formados: desligar a corrente, bloquear e etiquetar, e testar antes de tocar.",
            "Se alguma coisa não estiver clara, pare e pergunte ao seu técnico responsável."
          ],
          words: [
            ["Perigo", "qualquer coisa que pode magoar você ou outra pessoa."],
            ["EPI (PPE)", "equipamento de proteção individual: óculos de segurança, luvas, botas, proteção dos ouvidos e coisas parecidas."],
            ["Bloqueio e etiquetagem (lockout/tagout)", "desligar a corrente e pôr um cadeado e uma etiqueta no interruptor para ninguém a ligar durante o trabalho."],
            ["Condensador elétrico (capacitor)", "uma peça elétrica que guarda carga e pode dar choque mesmo depois de a corrente ser desligada."],
            ["Brasagem", "unir tubos de cobre com um maçarico e um metal de enchimento; tem calor muito alto e risco de incêndio."],
            ["Doença causada pelo calor", "mal-estar por trabalhar em muito calor, como a exaustão pelo calor ou o golpe de calor."]
          ],
          slides: [
            { title: "Segurança primeiro, em cada serviço", bullets: ["Uma das taxas de lesões mais altas de todas as profissões (BLS)", "Trabalho prático: só em formação supervisionada"] },
            { title: "Eletricidade", bullets: ["Desligar, bloquear, etiquetar", "Testar antes de tocar", "Os condensadores elétricos podem guardar carga"] },
            { title: "Refrigerante", bullets: ["Sob pressão: queimaduras de frio e lesões nos olhos", "Pode empurrar o oxigénio para fora em espaços fechados", "Óculos, luvas, só técnicos certificados"] },
            { title: "Calor, alturas, metal, fogo", bullets: ["Sótãos quentes: água e pausas", "Escadas e telhados: subir com segurança", "Chapa de metal: luvas resistentes a cortes", "Brasagem: extintor por perto"] }
          ],
          sources: [
            { name: "Gabinete de Estatísticas do Trabalho dos EUA (BLS): Mecânicos e instaladores de aquecimento, ar condicionado e refrigeração (em inglês)", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm" },
            { name: "OSHA: Controlo de energia perigosa (bloqueio e etiquetagem), 29 CFR 1910.147 (em inglês)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Leia este trabalho: \"O ar condicionado de um cliente parou num dia de 95°F. A unidade exterior está no quintal ao lado da casa. A unidade de tratamento de ar está num sótão quente, a que se chega por uma escada que se puxa do teto.\" Num papel, faça duas colunas: Perigo e Proteção. Escreva pelo menos cinco perigos e o passo seguro ou o equipamento para cada um. Guarde-o: é a parte 2 da sua tarefa final.",
          youCanNow: "fazer a lista dos principais perigos de um trabalho de AVAC e ligar cada um à proteção certa.",
          quickCheck: [
            { objective: "O2", q: "Porque é que os técnicos formados bloqueiam e etiquetam a corrente antes de trabalhar dentro de uma unidade?", options: ["Para ninguém poder voltar a ligar a corrente durante o trabalho", "Para o cliente poupar dinheiro", "Para a unidade arrefecer mais depressa depois", "Porque o termóstato precisa de ser reiniciado"], answer: 0, why: "O bloqueio e a etiquetagem mantêm a corrente desligada até a pessoa que pôs o cadeado o tirar." },
            { objective: "O2", q: "Refrigerante espirra para a mão de um trabalhador. Que lesão pode causar?", options: ["Uma queimadura de sol", "Uma farpa", "Uma queimadura de frio", "Nenhuma; é inofensivo"], answer: 2, why: "O refrigerante que sai da pressão fica muito frio e pode congelar a pele." }
          ]
        },
        {
          title: "A certificação EPA Secção 608 e as regras do refrigerante",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ligar os aparelhos ao tipo certo de certificação EPA Secção 608 e dizer as principais regras do refrigerante.",
          text: [
            "Segundo a Secção 608 da lei federal do Ar Limpo (Clean Air Act), os técnicos que fazem manutenção, assistência, reparação ou eliminação de aparelhos que podem soltar refrigerante para o ar têm de ser certificados pelo programa da Agência de Proteção Ambiental dos EUA (EPA). Há quatro tipos. Tipo I: pequenos aparelhos (como um ar condicionado de janela ou um frigorífico de casa). Tipo II: aparelhos de alta pressão e de muito alta pressão (como a maioria dos ares condicionados centrais e bombas de calor das casas). Tipo III: aparelhos de baixa pressão (como alguns grandes chillers, ou refrigeradores de água, em edifícios grandes). Universal: todos estes.",
            "Cada teste tem uma parte Core (base) sobre regras e segurança, mais a parte do tipo. Os testes são dados por organizações certificadoras aprovadas pela EPA; a própria EPA não dá o teste nem passa o cartão. Segundo a EPA, a certificação Secção 608 não expira. Para ter a certificação Universal, a parte Core tem de ser feita como exame vigiado.",
            "Duas regras para saber já: é proibido por lei soltar de propósito (ventilar) refrigerante para o ar durante a assistência ou a eliminação de um aparelho, e o refrigerante para estes aparelhos em geral só pode ser vendido a técnicos certificados e aos seus empregadores. O ar condicionado dos carros tem outra certificação, a Secção 609.",
            "Este curso prepara você para as ideias do teste. Não o certifica. Veja as páginas da Secção 608 da EPA para as regras atuais e a lista de organizações certificadoras aprovadas, e pergunte ao seu programa de formação que teste oferece."
          ],
          words: [
            ["EPA", "a Agência de Proteção Ambiental dos EUA, a agência federal que faz as regras do refrigerante."],
            ["Secção 608", "a parte da lei do Ar Limpo que trata do refrigerante em aparelhos fixos, como os sistemas de casas e edifícios."],
            ["Organização certificadora", "um grupo aprovado pela EPA para dar o teste da Secção 608 e passar o cartão."],
            ["Core (base)", "a parte de todos os testes da Secção 608 que trata das regras, da segurança e do conhecimento básico do refrigerante."],
            ["Ventilar (venting)", "deixar o refrigerante escapar para o ar. Fazê-lo de propósito durante a assistência é proibido por lei."],
            ["Vigiado", "feito enquanto um vigilante do teste observa, presencialmente ou pela internet."],
            ["Secção 609", "uma certificação diferente para trabalhar no ar condicionado de carros e camiões."]
          ],
          slides: [
            { title: "Quem precisa dela", bullets: ["Técnicos que dão assistência ou eliminam aparelhos com refrigerante", "Regra federal: lei do Ar Limpo, Secção 608"] },
            { title: "Os quatro tipos", bullets: ["Tipo I: pequenos aparelhos", "Tipo II: alta pressão (a maioria do AC central das casas)", "Tipo III: baixa pressão (alguns grandes chillers)", "Universal: todos os tipos"] },
            { title: "Como a obtém", bullets: ["Passar num teste de uma organização aprovada pela EPA", "Parte Core mais o seu tipo", "A EPA diz que não expira"] },
            { title: "Regras para saber já", bullets: ["Nunca ventilar refrigerante de propósito", "Venda só a técnicos certificados e empregadores", "O AC dos carros é a Secção 609, um teste diferente"] }
          ],
          sources: [
            { name: "EPA: Certificação de técnicos da Secção 608 (em inglês)", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "EPA: Requisitos da certificação de técnicos da Secção 608 (em inglês)", url: "https://www.epa.gov/section608/section-608-technician-certification-requirements" },
            { name: "EPA: Proibição de ventilar refrigerantes (em inglês)", url: "https://www.epa.gov/section608/stationary-refrigeration-prohibition-venting-refrigerants" },
            { name: "EPA: Restrição à venda de refrigerante (em inglês)", url: "https://www.epa.gov/section608/refrigerant-sales-restriction" }
          ],
          tryIt: "Ligue cada trabalho a um tipo de certificação e escreva-o: (1) reparar um ar condicionado de janela; (2) dar assistência a um ar condicionado central de uma casa; (3) dar assistência a um grande chiller de baixa pressão num hospital; (4) recuperar o refrigerante de um frigorífico velho de uma casa; (5) um técnico que quer trabalhar em todos estes. Respostas: Tipo I, Tipo II, Tipo III, Tipo I, Universal. Depois abra as páginas da Secção 608 da EPA e escreva o nome de uma organização certificadora aprovada.",
          youCanNow: "ligar os aparelhos ao tipo certo da Secção 608 e dizer as regras sobre ventilar e vender refrigerante.",
          quickCheck: [
            { objective: "O4", q: "Um técnico vai dar assistência a ares condicionados centrais de casas que usam refrigerante de alta pressão. Que tipo de certificação serve?", options: ["Tipo I", "Tipo III", "Tipo II", "Secção 609"], answer: 2, why: "O Tipo II cobre aparelhos de alta pressão e de muito alta pressão, o que inclui a maioria do AC central das casas." },
            { objective: "O4", q: "Quem lhe dá a certificação EPA Secção 608?", options: ["Este curso, quando o terminar", "O dono da casa para quem trabalha", "Qualquer loja de ferragens", "Uma organização certificadora aprovada pela EPA, depois de passar no seu teste"], answer: 3, why: "Só uma organização certificadora aprovada pela EPA dá o teste e a certificação." }
          ]
        },
        {
          title: "O seu caminho para o AVAC, com datas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escrever um plano com datas para se formar, ser certificado e ser contratado como ajudante ou aprendiz de AVAC.",
          text: [
            "Há três formas comuns de entrar. Muitos técnicos terminam um programa numa escola profissional ou numa faculdade comunitária (community college), que segundo o Gabinete de Estatísticas do Trabalho costuma durar de 6 meses a 2 anos e muitas vezes inclui o teste da EPA. Alguns entram numa aprendizagem: um trabalho pago com um mentor mais aulas, que costuma durar vários anos. Alguns empregadores contratam ajudantes com o diploma do ensino secundário ou o GED (o diploma equivalente nos EUA) e formam-nos no trabalho.",
            "Alguns estados e cidades exigem uma licença de AVAC, e as regras são diferentes. Encontre a entidade de licenciamento do seu estado ou cidade, ou use o localizador de licenças do CareerOneStop, e escreva exatamente o que ela pede. Muitos empregadores também querem carta de condução, e alguns preferem, mais tarde, certificações opcionais da indústria ou dos fabricantes.",
            "Antes de pagar qualquer programa, pergunte: Inclui o teste EPA Secção 608? Quantos formados conseguem emprego em AVAC? Ajuda a encontrar emprego? Os antigos militares podem perguntar ao VA (o serviço dos veteranos dos EUA) sobre usar os apoios do GI Bill para formação ou aprendizagens. Se tem registo criminal, pergunte à entidade de licenciamento como analisa os registos e procure empregadores que dão uma segunda oportunidade.",
            "Um plano com datas transforma um objetivo em passos. Escreva cada passo, onde o verificou e a data em que o vai fazer."
          ],
          steps: [
            "Escreva o seu objetivo, por exemplo \"trabalho de ajudante de AVAC até junho\".",
            "Escolha o seu tipo EPA Secção 608 (muitos principiantes apontam para o Tipo II ou o Universal) e uma organização certificadora aprovada.",
            "Encontre dois programas de formação ou aprendizagens perto de si em apprenticeship.gov ou no site de uma faculdade comunitária; anote as datas de candidatura.",
            "Verifique as regras de licença do seu estado ou cidade na página oficial e escreva o que exigem.",
            "Junte datas para estudar, para o teste, para as candidaturas e para atualizar o currículo."
          ],
          words: [
            ["Aprendizagem (apprenticeship)", "um trabalho pago em que aprende a profissão com trabalhadores experientes, mais aulas."],
            ["Ajudante ou estagiário", "um trabalhador de AVAC em início de carreira que ajuda um técnico enquanto aprende."],
            ["Entidade de licenciamento", "o serviço do estado ou da cidade que decide quem pode fazer certos trabalhos e passa as licenças."],
            ["CareerOneStop", "um site gratuito do Departamento do Trabalho dos EUA com informação sobre empregos, formação e licenças."]
          ],
          slides: [
            { title: "Três formas de entrar", bullets: ["Escola profissional ou faculdade comunitária", "Aprendizagem: trabalho pago mais aulas", "Trabalho de ajudante com formação no trabalho"] },
            { title: "As licenças mudam de lugar para lugar", bullets: ["Alguns estados e cidades exigem licença", "Verifique na entidade de licenciamento oficial", "Escreva exatamente o que ela pede"] },
            { title: "Antes de pagar", bullets: ["O teste da EPA está incluído?", "Quantos formados conseguem emprego em AVAC?", "Antigos militares: perguntem ao VA sobre o GI Bill"] },
            { title: "O seu plano", bullets: ["Objetivo, tipo EPA, organização certificadora", "Dois programas com datas de candidatura", "Regras de licença da página oficial", "Uma data para cada passo"] }
          ],
          sources: [
            { name: "Gabinete de Estatísticas do Trabalho dos EUA (BLS): Mecânicos e instaladores de AVAC, Como chegar lá (em inglês)", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm#tab-4" },
            { name: "Apprenticeship.gov: Localizador de aprendizagens (em inglês)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Localizador de licenças (em inglês)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" },
            { name: "EPA: Certificação de técnicos da Secção 608 (em inglês)", url: "https://www.epa.gov/section608/section-608-technician-certification-0" }
          ],
          tryIt: "Tarefa final: faça o seu plano de início em AVAC. Junte o seu desenho do ciclo de refrigeração (Lição 2) e a sua lista de perigos (Lição 4). Depois escreva o seu plano com datas: o seu objetivo, o tipo da Secção 608 que vai fazer e uma organização certificadora aprovada, dois programas de formação ou aprendizagens perto de si com as datas de candidatura, o que o seu estado ou cidade exige para uma licença de AVAC (com o endereço do site que verificou) e uma data para cada passo.",
          youCanNow: "seguir o seu próprio plano com datas para se formar, fazer o teste EPA Secção 608 e candidatar-se a trabalho de AVAC.",
          quickCheck: [
            { objective: "O5", q: "Onde deve verificar se o seu estado exige uma licença de AVAC?", options: ["Numa publicação nas redes sociais", "Na página oficial da entidade de licenciamento do seu estado ou cidade", "Num anúncio de uma escola de formação", "Com um amigo que um dia trabalhou em AVAC"], answer: 1, why: "As regras de licença mudam de lugar para lugar e com o tempo, por isso a entidade oficial é o lugar para verificar." },
            { objective: "O5", q: "Que passo do plano está escrito da forma mais útil?", options: ["\"Ser certificado um dia\"", "\"Ver isso do AVAC\"", "\"Estudar muito\"", "\"Fazer o teste EPA Tipo II com uma organização aprovada até 15 de março\""], answer: 3, why: "Um passo útil diz a ação exata, com quem é e uma data." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Segurança, certificação e o seu caminho",
        questions: [
          { objective: "O2", q: "Antes de um técnico formado tocar nos fios dentro de uma unidade, qual é a última verificação?", options: ["Perguntar ao cliente se está desligado", "Testar que a corrente está mesmo desligada", "Baixar o termóstato", "Esperar cinco segundos"], answer: 1, why: "Depois de bloquear e etiquetar, os técnicos testam antes de tocar, porque um interruptor errado ou uma carga guardada ainda podem dar choque." },
          { objective: "O2", q: "Mandam você para um sótão quente no verão. Que proteção conta mais para o calor?", options: ["Água e pausas regulares", "Proteção dos ouvidos", "Uma máscara de soldar", "Só botas com biqueira de aço"], answer: 0, why: "Água, pausas e atenção aos sinais de doença causada pelo calor protegem você em espaços quentes." },
          { objective: "O4", q: "Um frigorífico de casa é um pequeno aparelho. Que tipo da Secção 608 o cobre?", options: ["Tipo II", "Tipo III", "Tipo I", "Secção 609"], answer: 2, why: "O Tipo I cobre pequenos aparelhos, como frigoríficos de casa e ares condicionados de janela." },
          { objective: "O4", q: "O que diz a EPA sobre soltar refrigerante para o ar de propósito durante a assistência?", options: ["Não faz mal ao ar livre", "Não faz mal em pequenas quantidades", "Não faz mal com a autorização do dono", "É proibido por lei"], answer: 3, why: "As regras da EPA proíbem ventilar refrigerante de propósito durante a assistência, a reparação ou a eliminação." },
          { objective: "O5", q: "Uma escola oferece um curso rápido de AVAC. Que pergunta mais o ajuda antes de pagar?", options: ["Inclui o teste EPA Secção 608, e quantos formados conseguem emprego em AVAC?", "De que cor são as fardas?", "O edifício é novo?", "Posso começar numa segunda-feira?"], answer: 0, why: "Saber se o programa leva à certificação e a empregos diz se vale o dinheiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Técnico de AVAC (HVAC)",
    questions: [
      { objective: "O1", q: "Em AVAC, o que quer dizer o \"V\"?", options: ["Voltagem", "Ventilação", "Válvula", "Vapor"], answer: 1, why: "AVAC é aquecimento, ventilação e ar condicionado." },
      { objective: "O1", q: "O que faz o ventilador?", options: ["Move o ar pelas condutas", "Aperta o refrigerante", "Controla a temperatura escolhida", "Limpa a serpentina exterior"], answer: 0, why: "O ventilador empurra o ar pela serpentina e pelas condutas até às divisões." },
      { objective: "O1", q: "Que parte solta o calor lá fora?", options: ["O evaporador", "A grelha de retorno", "O condensador", "O termóstato"], answer: 2, why: "O condensador é a serpentina exterior, onde o calor sai do refrigerante." },
      { objective: "O1", q: "Qual é a ordem certa do ciclo de refrigeração?", options: ["Evaporador, compressor, dispositivo de expansão, condensador", "Compressor, dispositivo de expansão, condensador, evaporador", "Condensador, compressor, evaporador, dispositivo de expansão", "Compressor, condensador, dispositivo de expansão, evaporador"], answer: 3, why: "O refrigerante vai do compressor para o condensador, passa pelo dispositivo de expansão, entra no evaporador e volta." },
      { objective: "O1", q: "O que deixa uma bomba de calor aquecer uma casa no inverno?", options: ["Um filtro de ar maior", "Uma válvula de inversão que põe o ciclo a funcionar ao contrário", "Um segundo termóstato", "Juntar água ao refrigerante"], answer: 1, why: "A válvula de inversão manda o refrigerante para o outro lado, e assim o calor é apanhado fora e solto dentro." },
      { objective: "O3", q: "Uma unidade tem 36,000 BTU por hora. Quantas toneladas são?", options: ["2 toneladas", "4 toneladas", "3 toneladas", "36 toneladas"], answer: 2, why: "36,000 a dividir por 12,000 dá 3." },
      { objective: "O3", q: "O ar de retorno está a 80°F e o ar de insuflação a 62°F. Qual é a diferença de temperatura?", options: ["22°F", "142°F", "16°F", "18°F"], answer: 3, why: "80 menos 62 dá 18°F." },
      { objective: "O3", q: "Para onde aponta a seta de um filtro de ar?", options: ["Para o ventilador, no sentido em que o ar corre", "Para a grelha de retorno", "Sempre para cima", "Não importa"], answer: 0, why: "A seta mostra o fluxo de ar, na direção do ventilador e do aparelho." },
      { objective: "O2", q: "Que perigo pode dar choque a um trabalhador mesmo depois de a corrente ser desligada?", options: ["Um filtro de ar limpo", "Um condensador elétrico carregado", "Uma tampa de plástico de uma grelha", "A pilha de um termóstato"], answer: 1, why: "Os condensadores elétricos guardam carga, e é por isso que os técnicos formados testam antes de tocar." },
      { objective: "O2", q: "Para que serve o bloqueio e a etiquetagem?", options: ["Para trancar a porta do cliente", "Para marcar que filtro comprar", "Para manter a corrente desligada e ninguém a ligar durante o trabalho", "Para fazer a reparação mais depressa"], answer: 2, why: "Um cadeado e uma etiqueta no interruptor mantêm o aparelho desligado até o trabalhador que os pôs os tirar." },
      { objective: "O2", q: "Porque é que o refrigerante é perigoso num espaço pequeno e fechado?", options: ["Cheira mal", "Deixa a divisão demasiado clara", "É pegajoso", "Pode empurrar para fora o oxigénio de que precisa para respirar"], answer: 3, why: "Uma fuga grande num espaço fechado pode tirar o lugar ao oxigénio." },
      { objective: "O2", q: "Tem de cortar e montar uma conduta de chapa de metal. Que proteção serve para este perigo?", options: ["Luvas resistentes a cortes e óculos de segurança", "Só óculos de sol", "Nenhum equipamento; é rápido", "Só tampões para os ouvidos"], answer: 0, why: "As bordas da chapa de metal são afiadas e podem saltar bocados, por isso são precisas luvas e proteção dos olhos." },
      { objective: "O4", q: "Que lei obriga os técnicos que mexem em refrigerante nos sistemas de casas e edifícios a ser certificados?", options: ["A lei das Normas Justas de Trabalho (Fair Labor Standards Act)", "A Secção 608 da lei do Ar Limpo (Clean Air Act)", "A lei da Segurança Rodoviária (Highway Safety Act)", "A lei da Água Limpa (Clean Water Act)"], answer: 1, why: "O programa da Secção 608 da EPA vem da lei do Ar Limpo." },
      { objective: "O4", q: "Que tipo da Secção 608 deixa você trabalhar em todo o tipo de aparelhos fixos?", options: ["Tipo I", "Tipo II", "Tipo III", "Universal"], answer: 3, why: "O Universal cobre os Tipos I, II e III." },
      { objective: "O4", q: "Um grande chiller de baixa pressão num hospital precisa de assistência. Que tipo o cobre?", options: ["Tipo III", "Tipo I", "Tipo II", "Secção 609"], answer: 0, why: "O Tipo III cobre aparelhos de baixa pressão, como alguns grandes chillers." },
      { objective: "O4", q: "O que diz a EPA sobre quanto tempo dura a certificação Secção 608?", options: ["Um ano", "Cinco anos", "Não expira", "Até mudar de emprego"], answer: 2, why: "A EPA diz que a certificação de técnico da Secção 608 não expira." },
      { objective: "O5", q: "Este curso vai:", options: ["Dar-lhe uma licença de AVAC", "Preparar você para a formação e o teste; não o certifica nem lhe dá licença", "Contar como o seu teste da EPA", "Substituir uma aprendizagem"], answer: 1, why: "A certificação vem do teste de uma organização aprovada pela EPA, e as licenças vêm do seu estado ou cidade." },
      { objective: "O5", q: "Qual é uma forma paga de aprender AVAC com um mentor mais aulas?", options: ["Um vídeo gratuito na internet", "A garantia de um produto", "Uma inspeção a uma casa", "Uma aprendizagem registada"], answer: 3, why: "Uma aprendizagem junta formação paga no trabalho com aulas." },
      { objective: "O5", q: "Que site gratuito pode ajudar você a encontrar aprendizagens perto de si?", options: ["apprenticeship.gov", "Um fórum de empregos qualquer", "Um anúncio que aparece no ecrã", "Uma secção de comentários de vídeos"], answer: 0, why: "Apprenticeship.gov é o site do Departamento do Trabalho dos EUA com um localizador de aprendizagens." },
      { objective: "O5", q: "Que passo do plano está completo?", options: ["\"Aprender AVAC\"", "\"Candidatar-me a algum lado em breve\"", "\"Candidatar-me ao programa de AVAC da faculdade comunitária até 1 de abril, depois de verificar o teste da EPA e a ajuda a encontrar emprego\"", "\"Pensar numa licença\""], answer: 2, why: "Diz a ação, o lugar, o que foi verificado e uma data." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno ganhou
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 6, 9, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Desenho do ciclo de refrigeração", objective: "O1", notYet: "Faltam partes ou estão pela ordem errada.", meets: "As quatro partes estão pela ordem certa, com uma frase certa sobre o que cada uma faz.", exceeds: "Também marca dentro e fora, quente e frio, e explica como uma bomba de calor inverte o ciclo." },
      { name: "Lista de perigos", objective: "O2", notYet: "Menos de cinco perigos, ou a proteção não serve para o perigo.", meets: "Pelo menos cinco perigos, cada um ligado a um passo seguro ou ao equipamento certo.", exceeds: "Também põe os passos pela ordem em que uma equipa os faria, incluindo bloqueio e etiquetagem e testar antes de tocar." },
      { name: "Números de AVAC", objective: "O3", notYet: "As respostas dos exercícios têm erros nas toneladas ou na diferença de temperatura.", meets: "Pelo menos 4 de 5 exercícios certos, com as contas escritas.", exceeds: "Todos certos, e o aluno sabe explicar a seta do filtro e ler a foto de uma placa de identificação verdadeira." },
      { name: "Certificação certa", objective: "O4", notYet: "O plano diz o tipo errado da Secção 608 para o trabalho, ou não diz nenhuma organização certificadora.", meets: "Diz o tipo certo para os trabalhos que quer e uma organização certificadora aprovada pela EPA.", exceeds: "Também diz com as suas palavras a regra sobre ventilar e a restrição à venda." },
      { name: "Plano com datas a partir de fontes oficiais", objective: "O5", notYet: "Os passos não têm datas, ou as regras de licença vêm de anúncios ou publicações.", meets: "Pelo menos cinco passos com datas, dois programas verdadeiros e as regras de licença da página oficial, com o endereço do site.", exceeds: "Também inclui as perguntas feitas a cada programa e um plano de reserva, como um trabalho de ajudante durante a formação." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que passam num teste EPA Secção 608 em 6 meses (dito por eles no seguimento)",
      "Alunos que se inscrevem num programa de formação ou numa aprendizagem de AVAC em 90 dias",
      "Alunos contratados como ajudantes, estagiários ou aprendizes de AVAC em 6 meses",
      "Os programas parceiros dizem que os candidatos chegam a conhecer as partes, as palavras e os passos de segurança básicos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para ler as páginas da EPA, do BLS, de apprenticeship.gov e de licenciamento do estado",
      "Papel, caneta e uma calculadora (a calculadora do telefone serve)",
      "Opcional: um filtro de ar usado, ou fotos de um filtro e de uma placa de identificação de um aparelho",
      "Cerca de 60 a 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Mantenha toda a prática sem mexer nos aparelhos: não abrir painéis, nada de refrigerante, nada de trabalho elétrico e nada de brasagem. Essas competências pertencem a um programa de formação supervisionado, com EPI.",
      "Se puder, traga uma unidade cortada ao meio ou fotos e peça aos alunos para apontar cada parte do ciclo.",
      "Convide um empreiteiro de AVAC local, um sindicato ou um formador de uma faculdade comunitária para falar dos trabalhos de ajudante e do que procuram.",
      "Ajude cada aluno a encontrar a página de licenças do seu estado ou cidade; as regras são diferentes, por isso não dê uma só resposta para todo o grupo.",
      "Para alunos com registo criminal ou antigos militares, ligue-os aos serviços de reintegração ou de veteranos; não prometa nenhum resultado de uma entidade de licenciamento.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
