"use strict";

// Koach Learn course (Portuguese translation of shared/cnc-machining-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// G-code, M-code, NIMS, OSHA and US names stay as written; code lines and numbers are unchanged.

module.exports = {
  id: "cnc-machining-basics-pt",
  lang: "pt",
  translationOf: "cnc-machining-basics",
  category: "Workforce Development",
  name: "Noções Básicas de Maquinagem CNC",
  skills: "Identificar máquinas CNC e os seus eixos, Ler cotas e tolerâncias num desenho, Ler G-code e M-code básicos, Ordenar os passos de uma preparação segura e da primeira peça, Identificar perigos da oficina e as suas medidas de controlo, Planear o seu caminho para a formação e as certificações em maquinagem",
  outcome: "identificar as principais máquinas CNC e os seus eixos, ler as cotas e as tolerâncias num desenho simples de uma peça, ler um programa curto em G-code e desenhar a trajetória da ferramenta em papel quadriculado, pôr por ordem os passos de uma preparação segura e da primeira peça, indicar as medidas de controlo para os perigos comuns da oficina e seguir um plano com datas para receber formação e obter uma certificação em maquinagem.",
  about: [
    "Os maquinistas e operadores CNC fazem as peças de metal e de plástico que estão dentro dos carros, dos aviões, das máquinas agrícolas, dos aparelhos médicos e das máquinas de todas as fábricas. Muitos começam como operadores de máquinas e depois passam para a preparação, a programação e a inspeção. Este curso é para quem pensa neste caminho: pessoas à procura de emprego, jovens, veteranos, pessoas que voltam da prisão, imigrantes e adultos que voltam a estudar.",
    "Você vai aprender o que fazem as máquinas CNC e como se movem os seus eixos, como ler as medidas e as tolerâncias no desenho de uma peça, como ler um programa CNC curto linha a linha e a ordem de uma preparação segura e da primeira peça. Depois vai aprender os perigos da oficina, como os maquinistas os controlam e como funcionam a formação e as certificações.",
    "Este curso prepara você. Não dá um certificado nem uma licença, e você não vai trabalhar com nenhuma máquina nele. Trabalhar com uma fresadora ou um torno só se aprende numa oficina com supervisão e com um instrutor qualificado. As certificações em maquinagem, como as do National Institute for Metalworking Skills (NIMS, Instituto Nacional de Competências em Metalurgia dos EUA), costumam pedir um exame escrito e uma prova prática.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" em papel ou no computador e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. O seu produto final é o seu próprio plano inicial de CNC, com datas reais."
  ],
  finalTask: "Faça o seu plano inicial de CNC: (1) um desenho de uma página de uma fresadora e de um torno, com os eixos X, Y e Z marcados; (2) uma folha de leitura do desenho de uma peça de prática, com os limites calculados para três cotas com tolerância; (3) um programa curto de prática (8 a 12 linhas) que corta um quadrado ou uma ranhura simples, com cada linha explicada por palavras suas e a trajetória da ferramenta desenhada em papel quadriculado; (4) uma lista de verificação de preparação e segurança para a primeira peça, que inclua proteções, proteção dos olhos, roupa, aparas, fluido de corte, fixação da peça, correções (offsets), um ensaio em vazio e a inspeção da primeira peça; e (5) um plano com datas, com dois programas de formação ou aprendizagens perto de você, a certificação NIMS que vai procurar obter (do site oficial) e uma data para cada passo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos que procuram um trabalho prático na indústria: pessoas à procura de emprego, alunos e diplomados do ensino secundário, veteranos, pessoas que voltam da prisão, imigrantes e adultos que voltam a estudar. Alguns já tiveram aulas de oficina ou trabalharam em manutenção de automóveis, de máquinas agrícolas ou militar; a maioria nunca trabalhou com uma máquina CNC.",
    startingPoint: "Sabem ler instruções curtas, ler uma fita métrica e fazer contas com números inteiros e decimais. A maioria sabe que as fábricas usam máquinas controladas por computador, mas não sabe dizer o nome das máquinas nem dos eixos, ler uma tolerância, ler uma linha de G-code ou dizer os passos de uma preparação segura.",
    gap: "Os empregadores, as entidades que oferecem aprendizagens e os programas de maquinagem querem pessoas que conheçam as palavras básicas, saibam ler um desenho e um programa simples e levem a segurança a sério. Os alunos precisam dessa base e de um plano com datas, para escolherem uma boa formação, não gastarem dinheiro à toa e chegarem prontos para aprender na máquina.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano); cada palavra da oficina é explicada",
      "Nenhum trabalho com máquinas neste curso: trabalhar com fresadora ou torno exige uma oficina com supervisão e um instrutor qualificado",
      "Aparelhos: um telefone ou um computador da biblioteca para as páginas oficiais; papel quadriculado, lápis e régua para desenhos e trajetórias",
      "Matemática: decimais até três casas (milésimos de polegada) e milímetros simples; há exemplos resolvidos",
      "Tempo: lições de 5 a 6 minutos, que cabem entre a escola, o trabalho e as consultas",
      "O G-code muda de um comando de máquina para outro: os alunos seguem o manual da máquina em que treinam"
    ],
    prerequisites: "Nenhum. O curso \"Matemática do Dia a Dia\" ajuda com os decimais; \"Começar uma Carreira nos Ofícios Especializados\" ajuda a escolher um ofício, e este curso vai mais fundo na maquinagem."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com imagens ou descrições de máquinas e peças de oficina", action: "dizer qual máquina CNC faz cada peça e apontar os seus eixos X, Y e Z", standard: "acertando pelo menos 4 em 5" },
    { id: "O2", condition: "Com o desenho simples de uma peça com cotas com tolerância", action: "escrever a menor e a maior medida permitidas para cada cota e decidir se uma peça medida passa", standard: "sem erros de cálculo em 3 cotas" },
    { id: "O3", condition: "Com um programa CNC curto de 8 a 12 linhas", action: "explicar o que faz cada linha de G-code e de M-code e desenhar a trajetória da ferramenta em papel quadriculado", standard: "com os movimentos e os pontos de início e de fim corretos" },
    { id: "O4", condition: "Com os passos de uma preparação e da primeira peça misturados", action: "pôr os passos de uma preparação segura e da primeira peça pela ordem certa", standard: "com o ensaio em vazio e a inspeção da primeira peça antes da produção" },
    { id: "O5", condition: "Com cinco perigos comuns de uma oficina de maquinagem", action: "indicar uma medida de controlo para cada perigo: proteção, equipamento de proteção, hábito seguro ou bloqueio", standard: "com uma medida correta para os cinco" },
    { id: "O6", condition: "Usando as páginas oficiais de formação, de aprendizagem e do NIMS", action: "escrever um plano com datas para receber formação e obter uma certificação em maquinagem", standard: "com dois programas, uma certificação e uma data para cada passo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Máquinas, desenhos e programas",
      lessons: [
        {
          title: "O que fazem as máquinas CNC e como se movem",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dizer o nome das principais máquinas CNC e apontar os seus eixos X, Y e Z.",
          text: [
            "CNC quer dizer controlo numérico por computador. Uma máquina CNC segue um programa para mover uma ferramenta de corte ou uma peça por caminhos exatos. Maquinar quer dizer tirar material, em aparas, até a peça ficar com a forma e o tamanho certos.",
            "Uma fresadora CNC (ou centro de maquinagem) segura a peça parada numa mesa enquanto uma ferramenta que gira a corta. Faz faces planas, caixas, ranhuras e furos, como um suporte ou uma placa de motor. Um torno CNC (ou centro de torneamento) faz girar a peça enquanto uma ferramenta parada a corta. Faz peças redondas, como veios, pinos e casquilhos. As oficinas também usam routers CNC para madeira e plástico, e cortadoras CNC de plasma e a laser para chapa.",
            "Cada direção em que uma máquina se pode mover é um eixo. Numa fresadora vertical comum, o X move para a esquerda e para a direita, o Y move para perto e para longe de você, e o Z move para cima e para baixo com a árvore (spindle). Num torno, o Z vai ao longo do comprimento da peça que gira e o X vai de lado a lado, o que define o diâmetro. As máquinas maiores têm também eixos rotativos, por isso uma máquina de \"5 eixos\" também pode inclinar e rodar a peça."
          ],
          words: [["CNC", "controlo numérico por computador: uma máquina que segue um programa de números e códigos."], ["Fresadora", "uma máquina em que uma ferramenta que gira corta uma peça presa numa mesa."], ["Torno", "uma máquina em que a peça gira e uma ferramenta parada a corta; faz peças redondas."], ["Árvore (spindle)", "a parte da máquina que faz girar a ferramenta (fresadora) ou a peça (torno)."], ["Eixo", "uma direção em que a máquina se pode mover, como X, Y ou Z."]],
          slides: [
            { title: "CNC = controlo numérico por computador", bullets: ["Um programa move a ferramenta ou a peça por caminhos exatos", "Maquinar é tirar material em aparas"] },
            { title: "Fresadora ou torno", bullets: ["Fresadora: peça parada, ferramenta que gira corta: faces, caixas, ranhuras, furos", "Torno: a peça gira, ferramenta parada corta: veios, pinos, casquilhos"] },
            { title: "Eixos numa fresadora vertical", bullets: ["X: esquerda e direita", "Y: para perto e para longe de você", "Z: para cima e para baixo com a árvore"] },
            { title: "Eixos num torno", bullets: ["Z: ao longo do comprimento da peça", "X: de lado a lado da peça; define o diâmetro", "Máquinas de 5 eixos também inclinam e rodam"] }
          ],
          tryIt: "Encontre em casa três peças de metal ou de plástico (um parafuso, uma dobradiça de porta, uma tampa de caneta, uma peça de bicicleta). Para cada uma, escreva \"fresadora\" ou \"torno\" e porquê. Depois desenhe uma fresadora vertical como uma caixa com a árvore em cima e marque X, Y e Z com setas.",
          youCanNow: "dizer o que fazem uma fresadora CNC e um torno CNC e apontar os eixos X, Y e Z em cada um.",
          quickCheck: [
            { objective: "O1", q: "Uma oficina precisa de 500 pinos redondos de aço. Qual máquina é a melhor?", options: ["Uma cortadora CNC de plasma", "Um torno CNC", "Um router CNC para madeira", "Uma quinadora de chapa"], answer: 1, why: "Um torno faz girar a peça, por isso faz peças redondas como pinos e veios." },
            { objective: "O1", q: "Numa fresadora vertical comum, qual eixo move a árvore para cima e para baixo?", options: ["X", "Y", "A", "Z"], answer: 3, why: "Numa fresadora vertical, o Z é o eixo de subir e descer da árvore." }
          ]
        },
        {
          title: "Ler um desenho: cotas e tolerâncias",
          objectives: ["O2"],
          minutes: 6,
          goal: "Escrever a menor e a maior medida permitidas para uma cota com tolerância e decidir se a peça passa.",
          text: [
            "Um desenho técnico (também chamado planta ou desenho) mostra a peça de vários lados e dá todas as medidas de que precisa. Cada medida é uma cota. As oficinas dos EUA usam muitas vezes polegadas escritas com três ou quatro casas decimais; muitas oficinas usam milímetros. A legenda, num canto do desenho, mostra o nome da peça, o material, as unidades e a tolerância geral.",
            "Nenhuma peça pode ser feita de forma perfeita, por isso o desenho diz quanto uma medida pode variar. Essa margem é a tolerância. \"1.000 ±0.005\" quer dizer que a medida pode ir de 0.995 a 1.005 polegadas. Estes dois números são os limites. Se uma cota não tiver tolerância escrita ao lado, aplica-se a tolerância geral da legenda.",
            "Os maquinistas verificam as medidas com instrumentos de medição. O paquímetro mede depressa medidas exteriores, interiores e de profundidade. O micrómetro mede com mais precisão numa faixa pequena. Os instrumentos são mantidos limpos e verificados com um padrão conhecido, porque um instrumento sujo ou que caiu pode dar uma leitura errada."
          ],
          steps: ["Encontre a cota e as suas unidades (polegadas ou mm) no desenho.", "Encontre a tolerância ao lado dela, ou a tolerância geral na legenda.", "Subtraia a tolerância para a menor medida; some-a para a maior medida.", "Compare a medida obtida: se estiver entre os limites, a cota passa."],
          words: [["Desenho técnico", "um desenho de uma peça com todas as medidas; também chamado planta."], ["Cota", "uma medida mostrada no desenho, como um comprimento, uma largura ou o diâmetro de um furo."], ["Tolerância", "quanto uma medida pode variar e ainda estar boa, como ±0.005."], ["Limites", "a menor e a maior medida permitidas."], ["Legenda", "o quadro no desenho com o nome da peça, o material, as unidades e a tolerância geral."], ["Paquímetro / micrómetro", "instrumentos de medição; o micrómetro é mais preciso numa faixa pequena."]],
          slides: [
            { title: "O desenho dá todas as medidas", bullets: ["Cada medida é uma cota", "Polegadas (muitas vezes 3 ou 4 decimais) ou milímetros", "Legenda: peça, material, unidades, tolerância geral"] },
            { title: "Tolerância = erro permitido", bullets: ["1.000 ±0.005 quer dizer de 0.995 a 1.005", "Não há tolerância escrita? Use a da legenda"] },
            { title: "Calcule os limites", bullets: ["Menor = medida menos a tolerância", "Maior = medida mais a tolerância", "Entre os limites = passa"] },
            { title: "Instrumentos de medição", bullets: ["Paquímetro: medidas exteriores, interiores e de profundidade, depressa", "Micrómetro: mais preciso numa faixa pequena", "Instrumentos limpos e verificados"] }
          ],
          tryIt: "Só para praticar. Calcule os limites de: (a) 2.500 ±0.010, (b) 0.750 ±0.002, (c) 25.0 ±0.1 mm. Depois decida: uma peça medida com 0.753 para (b) passa? (Respostas: a 2.490 a 2.510; b 0.748 a 0.752; c 24.9 a 25.1 mm; 0.753 é grande demais, por isso não passa.)",
          youCanNow: "encontrar uma cota e a sua tolerância num desenho, calcular os seus limites e decidir se uma peça medida passa.",
          quickCheck: [
            { objective: "O2", q: "Um desenho diz 1.250 ±0.003. Quais são os limites?", options: ["1.247 a 1.253", "1.250 a 1.253", "1.220 a 1.280", "1.247 a 1.250"], answer: 0, why: "Subtraia 0.003 para a menor medida e some 0.003 para a maior." },
            { objective: "O2", q: "Uma cota não tem tolerância escrita ao lado. Onde procura?", options: ["Pergunta à máquina", "Adivinha ±0.1", "Na tolerância geral da legenda", "Qualquer tolerância serve"], answer: 2, why: "A legenda dá a tolerância geral para as cotas que não têm a sua própria." }
          ]
        },
        {
          title: "Ler um programa CNC curto",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explicar o que faz cada linha de um programa curto em G-code e desenhar a trajetória da ferramenta.",
          text: [
            "A maioria das máquinas CNC lê um programa escrito em G-code. Cada linha, chamada bloco, dá uma ou poucas instruções. Os G-codes dizem sobretudo à máquina como se mover. Os M-codes ligam e desligam funções da máquina. Letras com números dão os pormenores: X, Y e Z são posições, F é o avanço (a velocidade com que a ferramenta se move enquanto corta), S é a velocidade da árvore e T escolhe uma ferramenta.",
            "Códigos comuns em muitas máquinas: G00 é um movimento rápido (depressa, sem cortar). G01 é um movimento de corte em linha reta, com o avanço. G02 e G03 cortam arcos, no sentido dos ponteiros do relógio e no sentido contrário. G20 define polegadas e G21 define milímetros. G90 quer dizer que as posições são medidas a partir do ponto zero da peça (absoluto). M03 liga a árvore no sentido dos ponteiros do relógio, M05 para-a, M08 liga o fluido de corte, M09 desliga-o e M30 termina o programa.",
            "Os códigos podem mudar de um comando de máquina para outro, por isso um maquinista verifica sempre o manual da máquina que tem à frente. Muitas oficinas escrevem os programas com software CAM, mas os maquinistas continuam a ler o código para apanhar erros antes de a ferramenta se mover. Um visualizador de G-code gratuito no navegador pode desenhar o caminho de um programa, mas o papel quadriculado serve igualmente bem para praticar."
          ],
          steps: ["Leia as primeiras linhas: unidades (G20 ou G21) e modo absoluto (G90).", "Encontre a ferramenta (T), a velocidade da árvore (S) e o arranque da árvore (M03).", "Para cada movimento, anote o código (G00 ou G01) e a posição X, Y e Z.", "Marque cada ponto X e Y no papel quadriculado e una-os por ordem: tracejado para rápido, contínuo para corte.", "Encontre o fim: paragem da árvore (M05), fluido de corte desligado (M09) e fim do programa (M30)."],
          words: [["G-code", "os códigos, sobretudo de movimento, que uma máquina CNC lê."], ["M-code", "códigos que ligam ou desligam funções da máquina, como a árvore ou o fluido de corte."], ["Bloco", "uma linha de um programa CNC."], ["Avanço (F)", "a velocidade com que a ferramenta se move enquanto corta."], ["Velocidade da árvore (S)", "a rapidez com que a árvore gira, em rotações por minuto."], ["Trajetória da ferramenta", "o caminho que a ferramenta segue."], ["CAM", "software que transforma um modelo 3D num programa CNC."]],
          slides: [
            { title: "Um programa é uma lista de blocos", bullets: ["G-codes: sobretudo movimentos", "M-codes: ligam e desligam funções da máquina", "Posições X, Y, Z; F avanço; S velocidade; T ferramenta"] },
            { title: "G-codes comuns", bullets: ["G00 movimento rápido, sem cortar", "G01 movimento de corte em linha reta", "G02 / G03 arcos, sentido dos ponteiros / sentido contrário", "G20 polegadas, G21 mm, G90 absoluto"] },
            { title: "M-codes comuns", bullets: ["M03 liga a árvore no sentido dos ponteiros, M05 para a árvore", "M08 liga o fluido de corte, M09 desliga-o", "M30 fim do programa"] },
            { title: "Leia e depois desenhe", bullets: ["Marque cada ponto X e Y no papel quadriculado", "Linha tracejada = rápido, linha contínua = corte", "Os códigos mudam com o comando: veja o manual da máquina"] }
          ],
          tryIt: "Só para praticar, em papel quadriculado (1 quadrado = 0.1 polegada). Explique cada linha e depois desenhe-a: G20 G90 / T1 M06 / S1500 M03 / G00 X0 Y0 / G00 Z0.1 / G01 Z-0.05 F5.0 / G01 X1.0 / G01 Y1.0 / G01 X0 / G01 Y0 / G00 Z1.0 / M05 / M30. Deve obter um quadrado de 1 polegada cortado com 0.05 polegada de profundidade.",
          youCanNow: "ler um programa CNC curto linha a linha e desenhar o caminho que a ferramenta vai seguir.",
          quickCheck: [
            { objective: "O3", q: "O que diz G01 X2.0 F10.0 à máquina?", options: ["Movimento rápido até X2.0 sem cortar", "Parar a árvore", "Ligar o fluido de corte", "Cortar em linha reta até X2.0 com avanço 10"], answer: 3, why: "G01 é um movimento de corte em linha reta, e F define o avanço." },
            { objective: "O3", q: "Qual código costuma pôr a árvore a girar no sentido dos ponteiros do relógio?", options: ["M30", "M03", "G00", "M09"], answer: 1, why: "M03 liga a árvore no sentido dos ponteiros do relógio na maioria dos comandos; M30 termina o programa e M09 desliga o fluido de corte." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Máquinas, desenhos e programas",
        questions: [
          { objective: "O1", q: "Uma peça é uma placa plana de alumínio com uma caixa e quatro furos. Qual máquina é a melhor?", options: ["Um torno CNC", "Uma fresadora CNC", "Uma fita métrica", "Só um engenho de furar"], answer: 1, why: "Uma fresadora faz faces planas, caixas e furos numa peça parada sobre a mesa." },
          { objective: "O1", q: "Num torno, qual eixo vai ao longo do comprimento da peça que gira?", options: ["Z", "X", "Y", "B"], answer: 0, why: "Num torno, o Z vai ao longo da peça e o X vai de lado a lado, definindo o diâmetro." },
          { objective: "O2", q: "Um veio tem de medir 0.500 ±0.001. Mede 0.4995. Passa?", options: ["Não, é pequeno demais", "Não, qualquer medida abaixo de 0.500 falha", "Sim, está entre 0.499 e 0.501", "Não dá para saber"], answer: 2, why: "Os limites são 0.499 a 0.501, e 0.4995 está entre eles." },
          { objective: "O3", q: "Uma linha do programa diz G00 Z1.0. O que acontece?", options: ["A ferramenta corta 1 polegada para baixo", "O fluido de corte liga-se", "O programa termina", "A ferramenta move-se depressa, sem cortar, até Z1.0"], answer: 3, why: "G00 é um movimento rápido; aqui levanta a ferramenta para longe, até Z1.0." },
          { objective: "O3", q: "A sua máquina de treino usa um código que você nunca viu. O que faz?", options: ["Adivinha a partir de outra máquina", "Verifica o manual do comando dessa máquina", "Apaga a linha", "Corre o programa e observa"], answer: 1, why: "Os códigos mudam com o comando, por isso o manual da própria máquina é a fonte." }
        ]
      }
    },
    {
      name: "Capítulo 2: Preparação, segurança e o seu caminho",
      lessons: [
        {
          title: "Preparar a máquina e fazer a primeira peça",
          objectives: ["O4"],
          minutes: 6,
          goal: "Pôr os passos de uma preparação segura e da primeira peça pela ordem certa.",
          text: [
            "Antes de uma oficina fazer muitas peças, alguém prepara a máquina e testa o programa. Os operadores novos começam muitas vezes por carregar peças e verificar medidas, e depois aprendem a preparação com um maquinista chefe.",
            "Preparar quer dizer: ler o desenho e a folha de preparação, limpar a mesa ou a bucha, prender bem a peça (fixação, como um torno de bancada ou uma bucha), carregar as ferramentas certas e definir as correções (offsets). A correção da peça diz à máquina onde está o ponto zero da peça. A correção da ferramenta diz-lhe o comprimento de cada ferramenta, para a ponta chegar ao sítio certo.",
            "Depois, o programa é testado devagar. Um ensaio em vazio move a máquina com a ferramenta em segurança acima da peça. O modo bloco a bloco corre uma linha de cada vez. O botão de ajuste do avanço torna os movimentos mais lentos, e o operador mantém a mão perto da pausa do avanço ou da paragem de emergência. Depois de cortar a primeira peça, ela é medida em todas as cotas do desenho. Isto é a inspeção da primeira peça. Só quando ela passa é que começa a produção."
          ],
          steps: ["Leia o desenho, a folha de preparação e o programa.", "Limpe a mesa, o torno de bancada ou a bucha e prenda bem a peça.", "Carregue as ferramentas indicadas na folha de preparação.", "Defina a correção da peça e as correções das ferramentas.", "Faça o ensaio em vazio acima da peça e depois corra bloco a bloco com o avanço reduzido.", "Meça a primeira peça em todas as cotas (inspeção da primeira peça).", "Comece a produção só depois de a primeira peça passar; continue a verificar peças durante o trabalho."],
          words: [["Folha de preparação", "o papel que indica as ferramentas, a fixação e as correções de um trabalho."], ["Fixação", "o que segura a peça parada, como um torno de bancada, grampos ou uma bucha."], ["Correção da peça", "a definição que diz à máquina onde está o ponto zero da peça."], ["Correção da ferramenta", "a definição do comprimento (e do tamanho) de cada ferramenta, para a ponta chegar ao sítio certo."], ["Ensaio em vazio", "correr o programa com a ferramenta em segurança longe da peça."], ["Inspeção da primeira peça", "medir a primeira peça em todo o desenho antes de fazer mais."]],
          slides: [
            { title: "Prepare-se", bullets: ["Leia o desenho, a folha de preparação e o programa", "Limpe e prenda bem a peça", "Carregue as ferramentas certas"] },
            { title: "Defina as correções", bullets: ["Correção da peça: onde está o zero da peça", "Correções das ferramentas: o comprimento de cada ferramenta"] },
            { title: "Teste devagar", bullets: ["Ensaio em vazio com a ferramenta longe da peça", "Bloco a bloco, com o avanço reduzido", "Mão perto da pausa do avanço ou da paragem de emergência"] },
            { title: "Primeiro a primeira peça", bullets: ["Meça todas as cotas do desenho", "A produção só começa quando ela passa", "Continue a verificar peças durante o trabalho"] }
          ],
          tryIt: "Escreva cada uma destas frases num papelinho, misture-os e depois ponha-os por ordem: definir as correções das ferramentas; inspeção da primeira peça; limpar e prender a peça; ensaio em vazio; ler o desenho e a folha de preparação; correr bloco a bloco; definir a correção da peça; carregar as ferramentas; começar a produção. Compare a sua ordem com os passos desta lição.",
          youCanNow: "pôr por ordem os passos de uma preparação e da primeira peça e dizer porque é que o ensaio em vazio e a inspeção da primeira peça vêm antes da produção.",
          quickCheck: [
            { objective: "O4", q: "Qual definição diz à máquina onde está o ponto zero da peça?", options: ["O avanço", "A correção da ferramenta", "A correção da peça", "A velocidade da árvore"], answer: 2, why: "A correção da peça localiza o zero da peça; as correções das ferramentas definem o comprimento de cada ferramenta." },
            { objective: "O4", q: "A primeira peça foi cortada. O que vem antes de fazer o resto do trabalho?", options: ["Medi-la em todas as cotas do desenho", "Pôr o ajuste do avanço no máximo", "Tirar as proteções para ver melhor", "Apagar o programa"], answer: 0, why: "A inspeção da primeira peça confirma a preparação e o programa antes da produção." }
          ]
        },
        {
          title: "Manter-se seguro na oficina de maquinagem",
          objectives: ["O5"],
          minutes: 5,
          goal: "Indicar uma medida de controlo para cada perigo comum da oficina de maquinagem.",
          text: [
            "As máquinas podem esmagar dedos ou mãos, causar amputações, queimaduras e cegueira. Os principais perigos são a árvore, a bucha e a ferramenta a girar, as aparas que saltam, as aparas e arestas afiadas e quentes, o fluido de corte na pele, as peças pesadas e o ruído. As regras da OSHA (a agência de segurança no trabalho dos EUA) sobre proteção de máquinas (29 CFR 1910.212) exigem proteções que defendam os trabalhadores destes perigos.",
            "Hábitos da oficina: use sempre óculos de segurança com proteções laterais, e proteção auditiva onde há muito barulho. Mantenha as portas e as proteções da máquina fechadas enquanto ela trabalha, e nunca meta a mão lá dentro antes de a árvore parar por completo. A maioria das oficinas não permite luvas, mangas largas, joias nem cabelo comprido solto perto de uma árvore a girar, porque podem ficar presos e puxar você. Tire as aparas com um gancho de aparas ou uma escova, nunca com as mãos, e nunca sopre aparas para si ou para outras pessoas. Lave o fluido de corte da pele e leia a ficha de dados de segurança (SDS).",
            "Quando uma máquina é limpa, reparada ou recebe manutenção, a sua energia é desligada e bloqueada para ninguém a poder ligar. Isto é o bloqueio e etiquetagem (lockout/tagout), tratado pela regra da OSHA sobre energia perigosa (29 CFR 1910.147), e só trabalhadores formados e autorizados o fazem. A segurança prática é ensinada na oficina por um instrutor qualificado; siga sempre as regras da sua oficina."
          ],
          steps: ["Ponha óculos de segurança com proteções laterais, e proteção auditiva onde for preciso.", "Tire as luvas, as joias e as mangas largas; prenda o cabelo comprido.", "Verifique que as proteções e as portas estão no lugar e fechadas.", "Espere que a árvore pare por completo antes de abrir a porta ou meter a mão.", "Tire as aparas com um gancho de aparas ou uma escova, não com as mãos.", "Para limpezas ou reparações, siga os passos de bloqueio e etiquetagem da oficina."],
          words: [["Proteção", "uma tampa ou porta que mantém as mãos e as aparas longe das partes que se movem."], ["Aparas", "os pequenos caracóis e pedaços de metal ou de plástico que a ferramenta corta; muitas vezes afiados e quentes."], ["Fluido de corte", "o líquido que arrefece a ferramenta e a peça e leva as aparas."], ["SDS", "ficha de dados de segurança: o papel que diz os perigos de um produto e como se proteger."], ["Bloqueio e etiquetagem", "desligar e trancar a energia de uma máquina para ninguém a poder ligar durante a manutenção (lockout/tagout)."]],
          slides: [
            { title: "Perigos das máquinas", bullets: ["Árvore, bucha e ferramenta a girar", "Aparas que saltam, afiadas e quentes", "Fluido de corte na pele, peças pesadas, ruído"] },
            { title: "Proteja-se", bullets: ["Óculos de segurança com proteções laterais, sempre", "Proteção auditiva onde há muito barulho", "Sem luvas, joias ou mangas largas perto de uma árvore a girar; prenda o cabelo"] },
            { title: "Hábitos seguros", bullets: ["Proteções e portas fechadas durante o trabalho", "Espere a paragem completa antes de meter a mão", "Gancho de aparas ou escova, nunca as mãos"] },
            { title: "Manutenção = bloqueio e etiquetagem", bullets: ["Energia desligada e trancada antes de limpar ou reparar", "OSHA 29 CFR 1910.147; só trabalhadores formados", "Siga sempre as regras da sua oficina"] }
          ],
          sources: [
            { name: "OSHA: normas de proteção de máquinas (Machine Guarding)", url: "https://www.osha.gov/machine-guarding/standards" },
            { name: "OSHA: controlo de energia perigosa (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" }
          ],
          tryIt: "Faça uma tabela de duas colunas em papel: Perigo e Controlo. Preencha cinco linhas: árvore a girar, aparas que saltam, aparas afiadas e quentes, fluido de corte na pele, máquina em reparação. Escreva uma medida de controlo para cada uma e depois compare com esta lição.",
          youCanNow: "indicar os principais perigos da oficina de maquinagem e uma medida de controlo para cada um.",
          quickCheck: [
            { objective: "O5", q: "Está a juntar-se um monte de aparas quentes perto do torno de bancada. Como as tira?", options: ["Tira-as com a mão", "Sopra-as com ar na direção de um colega", "Mete a mão enquanto a árvore gira", "Espera a paragem completa e depois usa um gancho de aparas ou uma escova"], answer: 3, why: "As aparas são afiadas e quentes; um gancho de aparas ou uma escova protege as suas mãos." },
            { objective: "O5", q: "Uma máquina precisa de uma reparação por dentro. O que tem de acontecer primeiro?", options: ["Reduzir o ajuste do avanço", "Um trabalhador autorizado desliga e bloqueia a sua energia", "Abrir a porta com ela a trabalhar", "Pôr luvas"], answer: 1, why: "O bloqueio e etiquetagem impede que alguém ligue a máquina durante a manutenção." }
          ]
        },
        {
          title: "Formação, certificações e o seu plano de CNC",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever um plano com datas para receber formação e obter uma certificação em maquinagem.",
          text: [
            "A maioria dos maquinistas aprende no trabalho, muitas vezes a começar como operadores de máquinas. Os community colleges (escolas superiores públicas locais dos EUA) e as escolas técnicas oferecem certificados e cursos de dois anos que ensinam leitura de desenhos e programação e operação CNC. As aprendizagens registadas juntam trabalho pago e aulas e costumam durar vários anos. Procure uma com o Apprenticeship Job Finder em apprenticeship.gov. Os veteranos podem perguntar como usar os seus benefícios de educação, e os jovens podem perguntar por programas na escola ou no centro de emprego.",
            "As certificações mostram a um empregador o que você sabe fazer. O National Institute for Metalworking Skills (NIMS) define normas e certificações para as funções de maquinagem. A maioria das certificações NIMS tem duas partes: um exame sobre os conhecimentos da função e uma prova prática, como maquinar uma peça segundo o desenho. Verifique os nomes e os requisitos atuais das certificações em nims-skills.org. Alguns empregadores também valorizam certificados de CNC ou de CAD/CAM de uma escola ou de um fabricante de máquinas.",
            "Este curso prepara você; não dá certificação. Tenha cuidado com qualquer programa que prometa um emprego ou uma certificação depressa por um preço alto. Pergunte à escola quanto tempo de oficina há em máquinas reais, para quais certificações ela prepara e quantos diplomados conseguem emprego."
          ],
          steps: ["Escolha um primeiro objetivo: emprego de operador, programa escolar ou aprendizagem.", "Encontre dois programas perto de você: um community college ou escola técnica, e uma aprendizagem em apprenticeship.gov.", "Procure em nims-skills.org a certificação NIMS para a função que quer.", "Pergunte a cada programa sobre tempo de máquina, certificações, custo e colocação em emprego.", "Escreva uma data para cada passo: candidatar-se, começar, praticar, fazer a prova."],
          words: [["Aprendizagem", "um emprego pago com formação no trabalho e aulas, muitas vezes durante vários anos."], ["Certificação", "uma prova, como um certificado, de que passou num teste das suas competências."], ["NIMS", "o National Institute for Metalworking Skills, que define normas e certificações de maquinagem."], ["Prova prática", "um teste em que faz a tarefa com as mãos, como maquinar uma peça segundo o desenho."]],
          slides: [
            { title: "Caminhos de entrada", bullets: ["Começar como operador de máquinas e aprender no trabalho", "Certificado de um community college ou de uma escola técnica", "Aprendizagem registada: trabalho pago mais aulas"] },
            { title: "Certificações", bullets: ["NIMS: normas e certificações de maquinagem", "Normalmente um exame mais uma prova prática", "Veja os nomes e passos atuais em nims-skills.org"] },
            { title: "Escolha bem o programa", bullets: ["Pergunte pelo tempo em máquinas reais", "Pergunte para quais certificações prepara", "Cuidado com promessas rápidas e caras"] },
            { title: "O seu plano com datas", bullets: ["Dois programas, uma certificação", "Uma data para candidatar-se, começar, praticar e fazer a prova"] }
          ],
          tryIt: "Tarefa final: faça o seu plano inicial de CNC. Desenhe uma fresadora e um torno com os seus eixos, calcule os limites de três medidas com tolerância, escreva e explique um programa curto para um quadrado ou uma ranhura e desenhe-o, escreva a sua lista de verificação de preparação e segurança e escreva um plano com datas, com dois programas perto de você e uma certificação NIMS do site oficial.",
          youCanNow: "encontrar formação em maquinagem perto de você, dizer a certificação que vai procurar obter e seguir um plano com datas para lá chegar.",
          quickCheck: [
            { objective: "O6", q: "Onde pode procurar aprendizagens registadas nos EUA?", options: ["Num anúncio de emprego que pede dinheiro para se candidatar", "Numa publicação nas redes sociais", "No Apprenticeship Job Finder em apprenticeship.gov", "Numa mensagem de um desconhecido"], answer: 2, why: "Apprenticeship.gov é o site oficial do Departamento do Trabalho dos EUA, com um localizador de vagas." },
            { objective: "O6", q: "O que incluem a maioria das certificações NIMS?", options: ["Um exame e uma prova prática", "Só um vídeo online", "Só um pagamento", "Uma carta de um amigo"], answer: 0, why: "O NIMS descreve um exame sobre os conhecimentos da função mais uma avaliação prática." }
          ],
          sources: [
            { name: "NIMS: certificação (Credentialing)", url: "https://www.nims-skills.org/credentialing" },
            { name: "Apprenticeship.gov (Departamento do Trabalho dos EUA)", url: "https://www.apprenticeship.gov/" },
            { name: "BLS Occupational Outlook Handbook: maquinistas e fabricantes de ferramentas e moldes", url: "https://www.bls.gov/ooh/production/machinists-and-tool-and-die-makers.htm" }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Preparação, segurança e o seu caminho",
        questions: [
          { objective: "O4", q: "Porque se faz um ensaio em vazio antes de cortar a primeira peça?", options: ["Para encontrar erros do programa com a ferramenta em segurança longe da peça", "Para tornar a máquina mais rápida", "Para saltar a inspeção da primeira peça", "Para aquecer o fluido de corte"], answer: 0, why: "Um ensaio em vazio mostra os movimentos sem cortar, por isso os erros são apanhados com segurança." },
          { objective: "O4", q: "Qual passo vem logo depois de prender a peça e carregar as ferramentas?", options: ["Começar a produção", "Inspeção da primeira peça", "Definir a correção da peça e as correções das ferramentas", "Enviar as peças"], answer: 2, why: "As correções têm de ser definidas antes de se testar o programa e cortar a primeira peça." },
          { objective: "O5", q: "Porque é que a maioria das oficinas proíbe luvas perto de uma árvore a girar?", options: ["Deixam as mãos frias", "Podem ficar presas e puxar a sua mão", "São caras demais", "Escondem as suas tatuagens"], answer: 1, why: "Uma árvore ou uma ferramenta a girar pode agarrar uma luva e puxar a mão." },
          { objective: "O5", q: "Qual proteção usa sempre numa oficina de maquinagem?", options: ["Só um capacete", "Luvas", "Sandálias", "Óculos de segurança com proteções laterais"], answer: 3, why: "As aparas que saltam podem cegar, por isso a proteção dos olhos usa-se sempre." },
          { objective: "O6", q: "Uma escola promete um emprego em CNC numa semana por um preço alto. O que faz?", options: ["Pergunta sobre tempo de máquina, certificações e empregos, e compara com outros programas", "Paga logo", "Dá-lhes os dados de acesso ao seu banco", "Assina sem ler"], answer: 0, why: "Verificar o que um programa oferece de verdade protege o seu tempo e o seu dinheiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Maquinagem CNC",
    questions: [
      { objective: "O1", q: "O que quer dizer CNC?", options: ["Corte numérico central", "Controlo numérico por computador", "Corte nítido e cuidadoso", "Cobertura de níquel a frio"], answer: 1, why: "CNC quer dizer controlo numérico por computador." },
      { objective: "O1", q: "Qual peça é mais provável ser feita num torno CNC?", options: ["Um suporte plano com ranhuras", "Uma caixa de chapa", "Um veio redondo", "Uma placa de madeira"], answer: 2, why: "Um torno faz girar a peça, por isso faz peças redondas como veios." },
      { objective: "O1", q: "Numa fresadora vertical, qual eixo move para perto e para longe de você?", options: ["Y", "Z", "X", "C"], answer: 0, why: "Numa fresadora vertical, o Y move para perto e para longe do operador." },
      { objective: "O2", q: "O que é uma tolerância?", options: ["O material da peça", "A velocidade da máquina", "Quanto uma medida pode variar e ainda estar boa", "O nome da peça"], answer: 2, why: "A tolerância é o erro permitido numa medida." },
      { objective: "O2", q: "Um desenho diz 3.000 ±0.005. Qual medida falha?", options: ["2.996", "3.004", "3.000", "3.006"], answer: 3, why: "Os limites são 2.995 a 3.005, por isso 3.006 é grande demais." },
      { objective: "O2", q: "Onde encontra as unidades e a tolerância geral num desenho?", options: ["No programa", "Na legenda", "Na porta da máquina", "Só na folha de preparação"], answer: 1, why: "A legenda indica a peça, o material, as unidades e a tolerância geral." },
      { objective: "O2", q: "Qual instrumento mede com mais precisão numa faixa pequena?", options: ["Um micrómetro", "Uma fita métrica", "Uma régua", "Um gancho de aparas"], answer: 0, why: "Um micrómetro é mais preciso do que um paquímetro ou uma régua na sua faixa pequena." },
      { objective: "O3", q: "Qual código costuma ser um movimento rápido, sem cortar?", options: ["G01", "G02", "M08", "G00"], answer: 3, why: "G00 é um movimento rápido de posicionamento." },
      { objective: "O3", q: "Num programa CNC, o que define a letra F?", options: ["O número da ferramenta", "O avanço durante o corte", "A velocidade da árvore", "O nome do ficheiro"], answer: 1, why: "F é o avanço; S é a velocidade da árvore e T é a ferramenta." },
      { objective: "O3", q: "Um programa começa com G21. O que isso define?", options: ["Polegadas", "Fluido de corte ligado", "Milímetros", "Fim do programa"], answer: 2, why: "G21 define milímetros; G20 define polegadas." },
      { objective: "O3", q: "Qual código costuma terminar o programa?", options: ["M30", "M03", "G01", "G90"], answer: 0, why: "M30 termina o programa na maioria dos comandos." },
      { objective: "O4", q: "O que diz a correção da ferramenta à máquina?", options: ["Onde está o ponto zero da peça", "A que velocidade cortar", "Qual fluido de corte usar", "O comprimento de cada ferramenta, para a ponta chegar ao sítio certo"], answer: 3, why: "As correções das ferramentas definem o comprimento de cada ferramenta; a correção da peça define o zero da peça." },
      { objective: "O4", q: "Ao testar um programa novo, qual é uma forma segura de o correr?", options: ["Velocidade máxima com a porta aberta", "Bloco a bloco com o avanço reduzido", "Saltar o ensaio em vazio", "Deixar a máquina sozinha a trabalhar"], answer: 1, why: "O modo bloco a bloco e um avanço reduzido deixam você parar antes de um erro." },
      { objective: "O4", q: "O que é a inspeção da primeira peça?", options: ["Ler a primeira página do manual", "Limpar a primeira apara", "Medir a primeira peça em todas as cotas do desenho", "Carregar a primeira ferramenta"], answer: 2, why: "A primeira peça é medida por completo antes de começar a produção." },
      { objective: "O5", q: "A árvore está a abrandar mas ainda não parou. O que faz?", options: ["Espera até parar por completo antes de abrir a porta", "Mete a mão para agarrar a peça", "Para-a com a mão", "Abre a porta para ver mais de perto"], answer: 0, why: "Nunca meta a mão antes de a árvore parar por completo." },
      { objective: "O5", q: "Qual regra da OSHA trata do bloqueio e etiquetagem de energia perigosa?", options: ["29 CFR 1910.212", "29 CFR 1910.178", "29 CFR 1910.215", "29 CFR 1910.147"], answer: 3, why: "29 CFR 1910.147 é a regra da OSHA de controlo de energia perigosa (lockout/tagout)." },
      { objective: "O5", q: "Caiu fluido de corte nos seus braços. O que faz?", options: ["Ignora", "Lava-o e vê na SDS como se proteger", "Limpa-o na camisa", "Põe mais fluido de corte"], answer: 1, why: "O fluido de corte pode irritar a pele; lave-o e siga a SDS." },
      { objective: "O6", q: "O que lhe dá este curso?", options: ["Uma certificação NIMS", "Uma licença do estado", "Preparação para a formação e para uma prova de certificação", "Um emprego garantido"], answer: 2, why: "O curso prepara você; as certificações vêm de passar em provas, como os exames e as provas práticas do NIMS." },
      { objective: "O6", q: "Onde verifica os nomes e os requisitos atuais das certificações NIMS?", options: ["Numa publicação nas redes sociais", "nims-skills.org", "Num comentário de um vídeo", "Em qualquer anúncio de emprego"], answer: 1, why: "O site oficial do NIMS tem as certificações e os requisitos atuais." },
      { objective: "O6", q: "O que faz parte de um bom plano inicial de CNC?", options: ["Dois programas, uma certificação e uma data para cada passo", "Só a vontade de trabalhar numa fábrica", "Um pagamento a um desconhecido", "Nenhuma data, para ficar flexível"], answer: 0, why: "Um plano com programas concretos, uma certificação e datas transforma o objetivo em passos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 2, 4, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Máquinas e eixos", objective: "O1", notYet: "O desenho confunde a fresadora e o torno, ou os eixos faltam ou estão errados.", meets: "A fresadora e o torno estão desenhados com X, Y e Z bem marcados.", exceeds: "Também diz uma peça que cada máquina faz e onde uma máquina de 5 eixos acrescenta movimento." },
      { name: "Leitura do desenho", objective: "O2", notYet: "Um ou mais limites estão errados, ou a decisão passa/falha está errada.", meets: "As três cotas têm os limites certos e uma decisão passa/falha correta.", exceeds: "Também mostra um exemplo em milímetros e diz com que instrumento mediria cada medida." },
      { name: "Programa e trajetória", objective: "O3", notYet: "As linhas não estão explicadas, ou o caminho desenhado não corresponde ao código.", meets: "Cada linha está explicada e o caminho desenhado corresponde ao código, com rápidos e cortes marcados.", exceeds: "Também encontra e corrige um erro posto no programa por um colega ou pelo instrutor." },
      { name: "Lista de preparação e segurança", objective: "O5", notYet: "A lista esquece as proteções, a proteção dos olhos, a roupa ou as aparas.", meets: "Inclui proteções, proteção dos olhos e dos ouvidos, roupa, aparas, fluido de corte e bloqueio para a manutenção.", exceeds: "Também explica numa linha curta porque é que cada ponto é importante." },
      { name: "Ordem da preparação", objective: "O4", notYet: "A produção começa antes do ensaio em vazio ou da inspeção da primeira peça.", meets: "Os passos estão por ordem, com correções, ensaio em vazio e inspeção da primeira peça antes da produção.", exceeds: "Também acrescenta verificações durante o trabalho." },
      { name: "Plano com datas", objective: "O6", notYet: "Sem programas reais, sem certificação ou sem datas.", meets: "Dois programas reais perto do aluno, uma certificação NIMS do site oficial e uma data para cada passo.", exceeds: "Também indica as perguntas feitas a cada programa e as respostas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (rubrica)",
      "Alunos que se candidatam a um programa de maquinagem, a uma aprendizagem ou a um emprego de operador em 90 dias",
      "Alunos que obtêm uma certificação NIMS ou outra certificação de maquinagem no prazo de um ano",
      "Alunos contratados como operadores de máquinas, operadores CNC ou aprendizes, e o que os empregadores parceiros dizem sobre a preparação dos novos contratados"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador da biblioteca para as páginas oficiais (nims-skills.org, apprenticeship.gov)",
      "Papel quadriculado, um lápis, uma régua e uma calculadora",
      "Opcional: um visualizador de G-code gratuito no navegador para verificar as trajetórias desenhadas",
      "Opcional, com um instrutor: um paquímetro e um micrómetro para praticar a leitura em peças de exemplo",
      "Cerca de 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Nenhum trabalho com máquinas neste curso. Se o der numa oficina, os alunos só olham e não tocam nas máquinas, a não ser com um instrutor qualificado a supervisionar e com todas as proteções e equipamentos de segurança no lugar.",
      "Lembre aos alunos que o G-code muda com o comando; se o seu programa usa uma máquina específica, distribua a lista de códigos dela.",
      "Na tarefa da trajetória, ponha um erro num programa curto (um M05 em falta ou um valor X errado) e peça aos colegas que o encontrem.",
      "Avalie a tarefa final com a rubrica e dê comentários sobre uma linha Ainda não de cada vez.",
      "Convide um maquinista local, uma entidade que oferece aprendizagens ou um professor de um community college para falar de empregos e formação reais na sua zona."
    ]
  }
};
