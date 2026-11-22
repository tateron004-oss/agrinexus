"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-data-precision.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_EO = { name: "FAO GIEWS Earth Observation (observação da Terra: NDVI e indicadores da vegetação)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const QGIS = { name: "QGIS (SIG gratuito e de código aberto)", url: "https://qgis.org/" };
const ODM = { name: "OpenDroneMap (programa gratuito e de código aberto para mapas de drone)", url: "https://www.opendronemap.org/" };
const FAO_ITU_DRONES = { name: "FAO e UIT: E-agriculture in Action: Drones for Agriculture (2018) (drones para a agricultura)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO e OMS: Guidance for aerial application of pesticides (2024) (orientações para a aplicação aérea de pesticidas)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-data-precision-pt",
  lang: "pt",
  translationOf: "agri-drones-data-precision",
  category: "Agriculture (Africa)",
  name: "Drones Agrícolas: Análise de Dados e Agricultura de Precisão",
  skills: "Verificar a precisão de um mapa de drone, Escolher o índice de vegetação certo, Fazer estatísticas por zona e contagens de plantas no QGIS, Construir um mapa de prescrição, Calcular se a precisão compensa, Comunicar os resultados aos agricultores",
  outcome: "transformar os dados de um drone numa análise verificada e precisa, com estatísticas por zona e um mapa de prescrição, calcular se agir com base nela compensa e entregar o resultado de uma forma que um agricultor ou gestor de propriedade agrícola possa seguir.",
  about: [
    "Este curso é para analistas de dados de drone, agrónomos, especialistas de extensão, gestores de agronegócios e de propriedades agrícolas e empresas de serviços de drone no Quénia, na Nigéria e em toda a África. Já deve saber juntar um mapa de drone e fazer um mapa NDVI simples (veja o percurso de monitorização, Curso 3).",
    "O Capítulo 1 é sobre análise: garantir que um mapa é preciso o suficiente para agir, escolher entre os índices de vegetação, e medir zonas e contar plantas ou árvores no QGIS. O Capítulo 2 é sobre agricultura de precisão: construir um mapa de prescrição a partir da sua análise, verificar as contas com um orçamento parcial simples e apresentar os resultados de forma que os agricultores ajam.",
    "Os exemplos usam milho com feijão, chá, café, abacate e mandioca. As doses de adubo e de semente neste curso são apenas exemplos: as doses reais vêm das análises de solo, da investigação local e das recomendações da extensão. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Com os dados de drone de um campo real ou de uma amostra gratuita: diga qual é a precisão do mapa e como a verificou; escolha um índice de vegetação e justifique-o; divida o campo em zonas e apresente as estatísticas de cada zona (área e índice médio) e uma contagem de plantas ou árvores; construa um mapa de prescrição com uma dose ou tarefa por zona (usando doses recomendadas localmente); calcule um orçamento parcial simples que mostre se compensa; e escreva uma página para o agricultor com palavras simples.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Analistas de dados de drone, agrónomos, especialistas de extensão, gestores de agronegócios e de propriedades agrícolas e empresas de serviços de drone no Quénia, na Nigéria e em toda a África, que trabalham com culturas como milho com feijão, chá, café, abacate e mandioca.",
    startingPoint: "Os alunos já sabem juntar um mapa de drone e fazer um mapa NDVI simples. Poucos verificam a precisão da posição de um mapa, escolhem um índice para a cultura e a fase, transformam mapas em estatísticas por zona, constroem um mapa de prescrição, testam se compensa ou apresentam os resultados de forma que o agricultor aja.",
    gap: "Mapas coloridos sozinhos raramente mudam o que acontece no campo, e mapas pouco precisos ou o índice errado podem mandar trabalhadores e insumos para os lugares errados. Transformar os dados do drone em números verificados, numa prescrição prática e num orçamento parcial honesto deixa os agricultores e as propriedades gastar os insumos onde compensa e confiar no serviço de drone.",
    constraints: [
      "Nível de leitura: palavras simples; cada índice e cada termo de mapeamento é explicado",
      "Aparelhos: um computador portátil com o QGIS gratuito e dados de drone ou dados de amostra gratuitos",
      "As doses são apenas exemplos: as doses reais de adubo e de semente vêm das análises de solo, da investigação local e da extensão",
      "Pulverizar ou espalhar com drone precisa de autorizações da aviação e de pesticidas",
      "Os dados dos agricultores são privados e só se partilham com a sua autorização"
    ],
    prerequisites: "\"Drones para a Monitorização Agrícola 3: Saúde das Culturas, Pragas e Processamento de Dados\" (juntar um mapa e fazer um mapa NDVI)."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um mapa de drone já juntado e o seu relatório de processamento", action: "verificar a precisão da posição e a qualidade da imagem do mapa e indicar o erro", standard: "usando pontos de verificação ou um método indicado, antes de qualquer análise" },
    { id: "O2", condition: "Com uma cultura, a sua fase de crescimento e a câmara usada", action: "escolher um índice de vegetação e explicar porque serve", standard: "e confirmá-lo com o mapa em cores reais e no terreno" },
    { id: "O3", condition: "Usando o QGIS e um mapa de índice", action: "criar zonas, indicar a área e o índice médio de cada zona e contar plantas ou árvores", standard: "com as contagens verificadas numa amostra no terreno e o erro indicado" },
    { id: "O4", condition: "Com zonas e as suas causas confirmadas no terreno", action: "construir um mapa de prescrição com uma dose ou tarefa para cada zona", standard: "usando duas a quatro doses tiradas de análises de solo ou de recomendações locais" },
    { id: "O5", condition: "Para uma ação de precisão proposta", action: "calcular um orçamento parcial com um caso prudente e um caso provável", standard: "contando só o que muda e dizendo com honestidade se não compensa" },
    { id: "O6", condition: "Para um agricultor ou gestor de propriedade agrícola", action: "escrever um resultado curto que começa pela ação, na língua e nas unidades dele", standard: "mostrando até que ponto tem certeza e o que foi verificado no terreno" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Análise de dados",
      lessons: [
        {
          objectives: ["O1"],
          title: "O mapa é preciso o suficiente para agir?",
          minutes: 6,
          goal: "Verificar a precisão da posição e a qualidade da imagem de um mapa de drone antes de o analisar.",
          text: [
            "Antes de mandar trabalhadores para uma zona, precisa de confiar que o mapa põe as coisas no lugar certo. O GNSS normal de um drone pode colocar um mapa alguns metros fora do sítio. Isso serve para encontrar um canto molhado, mas não para guiar trabalho em linhas individuais nem para comparar mapas de datas diferentes.",
            "Há três formas de melhorar e verificar a precisão: pontos de controlo no terreno (GCP), alvos marcados no chão cujas coordenadas mede com um recetor GNSS preciso e usa no processamento; drones com posicionamento RTK ou PPK, que corrigem a posição durante ou depois do voo; e pontos de verificação, alvos medidos a mais que não se usam no processamento e servem para testar o mapa final. Indique o erro que mediu.",
            "Verifique também a qualidade: o relatório de processamento (quantas imagens foram usadas, se há avisos), o detalhe real da imagem (GSD), imagens tremidas, buracos e erros de junção. Para mapas que vai comparar ao longo do tempo, use sempre o mesmo método e confirme que ficam bem sobrepostos."
          ],
          steps: ["Leia o relatório de processamento: imagens usadas, avisos, GSD.", "Procure imagens tremidas, buracos e erros de junção.", "Meça o erro de posição nos pontos de verificação (ou compare com elementos conhecidos).", "Decida se a precisão serve para a decisão.", "Para séries ao longo do tempo, confirme que os mapas ficam sobrepostos."],
          words: [["Ponto de controlo no terreno (GCP)", "um alvo marcado no chão com coordenadas medidas com precisão, usado para fixar a posição de um mapa."], ["RTK / PPK", "métodos que corrigem a posição do drone durante (RTK) ou depois (PPK) do voo para ter alta precisão."], ["Ponto de verificação", "um alvo medido usado só para testar a precisão de um mapa."], ["Relatório de processamento", "o resumo que o programa de junção produz sobre a qualidade de um mapa."]],
          slides: [
            { title: "Confiar antes de agir", bullets: ["GNSS normal: alguns metros fora do sítio", "Serve para zonas, não para linhas individuais", "Mapas de datas diferentes têm de ficar sobrepostos"] },
            { title: "Melhorar a precisão", bullets: ["Pontos de controlo no terreno (GCP)", "Drones com RTK ou PPK", "Pontos de verificação para testar o resultado"] },
            { title: "Verificar a qualidade", bullets: ["Relatório de processamento e avisos", "GSD real, imagens tremidas, buracos", "O mesmo método em todas as datas"] }
          ],
          sources: [ODM],
          tryIt: "Abra o relatório de processamento de um mapa que fez (ou o relatório de uns dados de amostra). Anote o número de imagens usadas, o GSD e os avisos, e decida se o mapa é preciso o suficiente para (a) encontrar zonas molhadas, (b) guiar a replantação de linhas individuais.",
          youCanNow: "verificar a precisão e a qualidade de um mapa de drone e decidir se servem para a decisão.",
          quickCheck: [
            { objective: "O1", q: "Para que servem os pontos de verificação?", options: ["Para testar a precisão do mapa final, porque não se usam no processamento", "Para aterrar o drone com segurança", "Para carregar baterias no campo", "Para marcar onde os trabalhadores começam"], answer: 0, why: "Os pontos de verificação são alvos medidos a mais, deixados fora do processamento, para poder medir o erro real do mapa." },
            { objective: "O1", q: "Vai comparar o mapa deste mês com o do mês passado para guiar trabalho em linhas individuais. O que verifica primeiro?", options: ["Só as cores", "O estado da bateria do drone", "Que os dois mapas são precisos e ficam sobrepostos", "Nada; o GNSS normal chega sempre"], answer: 2, why: "O GNSS normal pode ficar alguns metros fora do sítio, por isso os mapas usados para linhas ou ao longo do tempo têm de ser precisos e alinhados." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escolher o índice de vegetação certo",
          minutes: 6,
          goal: "Escolher um índice de vegetação que sirva para a cultura, a fase e a câmara.",
          text: [
            "NDVI = (NIR - Red) / (NIR + Red) é o índice mais conhecido; a FAO usa-o a partir de satélites para seguir a vegetação em toda a África. Mas o NDVI tende a saturar em copas densas e saudáveis, como milho maduro, chá ou café: os valores juntam-se perto do topo e as pequenas diferenças desaparecem.",
            "O NDRE usa a banda do red edge (limite do vermelho) em vez do vermelho: (NIR - RedEdge) / (NIR + RedEdge). Continua sensível em copas densas e muitas vezes mostra diferenças de azoto e de clorofila mais tarde na época. Só com uma câmara de cor, índices como o VARI, (Green - Red) / (Green + Red - Blue), ou o Excess Green, 2 x Green - Red - Blue, separam as plantas verdes do solo e mostram o vigor de forma aproximada; são úteis para a densidade de plantas e as ervas daninhas, mas menos fiáveis para o stress.",
            "Escolha pela pergunta: no início da época, para a densidade de plantas e as ervas daninhas, um índice RGB ou o NDVI; a meio da época, para o vigor em culturas abertas, o NDVI; para copas densas e azoto, o NDRE. Seja qual for a escolha, olhe também para o mapa em cores reais e confirme no terreno."
          ],
          words: [["Saturação", "quando um índice deixa de mudar mesmo que as plantas ainda sejam diferentes, como acontece ao NDVI em copas densas."], ["Red edge (limite do vermelho)", "uma banda estreita de luz entre o vermelho e o infravermelho próximo, sensível à clorofila."], ["NDRE", "Normalized Difference Red Edge, um índice mais sensível do que o NDVI em copas densas."], ["VARI", "Visible Atmospherically Resistant Index, um índice de vegetação feito só com as bandas RGB."]],
          slides: [
            { title: "O NDVI e o seu limite", bullets: ["(NIR - Red) / (NIR + Red)", "Muito usado, também pela FAO", "Satura em copas densas"] },
            { title: "Outros índices", bullets: ["NDRE: (NIR - RedEdge) / (NIR + RedEdge)", "VARI: (G - R) / (G + R - B)", "Excess Green: 2G - R - B"] },
            { title: "Escolha pela pergunta", bullets: ["Densidade de plantas e ervas daninhas: índice RGB ou NDVI", "Culturas abertas a meio da época: NDVI", "Copa densa e azoto: NDRE"] }
          ],
          sources: [FAO_EO, QGIS],
          tryIt: "Para cada caso escolha um índice e escreva porquê: (a) contagem de plantas em milho com 3 semanas, com um drone RGB, (b) diferenças de azoto numa copa de chá fechada, com um drone multiespectral, (c) vigor a meio da época na mandioca, com um drone multiespectral.",
          youCanNow: "escolher um índice de vegetação que sirva para a cultura, a sua fase e a câmara.",
          quickCheck: [
            { objective: "O2", q: "Porque é que o NDVI pode não mostrar pequenas diferenças em milho maduro, chá ou café?", options: ["Só funciona à noite", "Satura em copas densas e saudáveis", "Precisa de uma câmara térmica", "Ignora a banda do infravermelho próximo"], answer: 1, why: "Em copas densas e saudáveis os valores do NDVI juntam-se perto do topo, por isso as pequenas diferenças desaparecem." },
            { objective: "O2", q: "Só tem uma câmara RGB e quer ver a densidade de plantas no início da época. Que índice escolhe?", options: ["NDRE", "Um índice térmico", "Nenhum; o RGB não ajuda", "Um índice RGB como o VARI ou o Excess Green"], answer: 3, why: "Os índices RGB separam as plantas verdes do solo e servem para a densidade de plantas e as ervas daninhas no início da época." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Estatísticas por zona e contagens no QGIS",
          minutes: 6,
          goal: "Medir a área e o índice médio de cada zona e contar plantas ou árvores.",
          text: [
            "A análise transforma um mapa colorido em números com que as pessoas podem agir. Primeiro, crie zonas: classifique o mapa de índice em classes (por exemplo baixo, médio, alto), depois transforme-as em polígonos e limpe os pedaços muito pequenos; ou desenhe as zonas à mão com o conhecimento do agricultor. Calcule a área de cada zona.",
            "Depois use a ferramenta Zonal Statistics (estatísticas por zona) do QGIS para calcular, em cada zona, a média, o mínimo, o máximo e a variação do índice. Compare as zonas, e compare as mesmas zonas em datas diferentes. Uma tabela como Zona A: 3.2 ha, NDVI médio 0.71; Zona C: 0.8 ha, NDVI médio 0.48 é muito mais fácil de usar do que uma imagem.",
            "Contagem: nas culturas de árvores (abacate, manga, café), as copas das árvores veem-se muitas vezes bem em mapas RGB de alto detalhe e podem ser contadas à mão com pontos, ou com plugins e scripts. Nas culturas em linhas, conte em parcelas de amostra e multiplique para o campo. Verifique sempre uma amostra das contagens no terreno e indique o erro."
          ],
          steps: ["Classifique o mapa de índice em poucas classes, ou desenhe as zonas com o agricultor.", "Converta as classes em polígonos; tire os pedaços muito pequenos; calcule a área.", "Use Zonal Statistics para a média, o mínimo, o máximo e a variação de cada zona.", "Conte as árvores ou as plantas (pontos, plugin ou parcelas de amostra).", "Verifique as contagens no terreno e indique o erro."],
          words: [["Estatísticas por zona", "números (como a média) calculados para os píxeis dentro de cada zona."], ["Polígono", "uma forma fechada num mapa, como uma zona ou o limite de um campo."], ["Classificar", "agrupar os valores dos píxeis em poucas classes, como baixo, médio e alto."]],
          slides: [
            { title: "Das cores aos números", bullets: ["Classifique o mapa de índice", "Converta em polígonos de zona, tire os pedaços pequenos", "Calcule a área de cada zona"] },
            { title: "Zonal Statistics", bullets: ["Média, mínimo, máximo e variação por zona", "Compare zonas e datas", "Zona A: 3.2 ha, NDVI médio 0.71"] },
            { title: "Contagem", bullets: ["Copas das árvores em mapas RGB de alto detalhe", "Culturas em linhas: parcelas de amostra, depois multiplicar", "Verifique no terreno e indique o erro"] }
          ],
          sources: [QGIS],
          tryIt: "No QGIS, com o seu mapa ou uma amostra: desenhe ou classifique três zonas, calcule as suas áreas, use Zonal Statistics no índice e faça uma tabela com a zona, a área e o valor médio. Se for uma cultura de árvores, conte as árvores de uma zona.",
          youCanNow: "medir zonas e contar plantas ou árvores no QGIS e apresentar os resultados numa tabela.",
          quickCheck: [
            { objective: "O3", q: "O que lhe dá uma tabela de estatísticas por zona?", options: ["Uma imagem mais bonita", "O tempo de voo do drone", "A fatura do cliente", "Números como a área e o índice médio de cada zona"], answer: 3, why: "As estatísticas por zona transformam um mapa colorido em números com que as pessoas podem agir." },
            { objective: "O3", q: "O seu programa contou 1,240 abacateiros. O que faz antes de comunicar o número?", options: ["Arredonda para 1,000", "Verifica uma amostra das contagens no terreno e indica o erro", "Acrescenta 10% por segurança", "Comunica sem verificar"], answer: 1, why: "As contagens verificam-se numa amostra no terreno e o erro é indicado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Análise de dados",
        questions: [
          { objective: "O1", q: "Para que serve um ponto de verificação?", options: ["Para corrigir o mapa durante o processamento", "Para testar a precisão do mapa final", "Para carregar baterias", "Para aterrar o drone"], answer: 1, why: "Os pontos de verificação são medidos mas não se usam no processamento, por isso testam o resultado." },
          { objective: "O1", q: "Um mapa está cerca de 3 m fora do sítio. Tem precisão suficiente para:", options: ["Guiar a replantação de linhas individuais", "Medir plantas individuais", "Encontrar um canto molhado de um campo", "Nada"], answer: 2, why: "Alguns metros de erro servem para elementos grandes, não para linhas." },
          { objective: "O2", q: "Porque pode o NDVI mostrar pouca diferença numa copa de chá densa e madura?", options: ["O NDVI satura em copas densas", "O chá não tem folhas", "O drone voou baixo demais", "O NDVI só funciona no solo"], answer: 0, why: "Os valores juntam-se perto do topo na vegetação densa." },
          { objective: "O2", q: "Que índice se pode calcular só com uma câmara RGB?", options: ["NDRE", "NDVI", "Nenhum", "VARI"], answer: 3, why: "O VARI usa só as bandas verde, vermelha e azul." },
          { objective: "O3", q: "A ferramenta Zonal Statistics do QGIS dá-lhe:", options: ["Previsões do tempo", "Números como o índice médio de cada zona", "Uma licença de piloto", "Preços de sementes"], answer: 1, why: "Resume os valores dos píxeis dentro de cada zona." }
        ]
      }
    },
    {
      name: "Capítulo 2: Agricultura de precisão",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construir um mapa de prescrição",
          minutes: 6,
          goal: "Transformar zonas num mapa de prescrição com uma dose ou tarefa para cada zona.",
          text: [
            "Um mapa de prescrição diz a uma máquina ou a um trabalhador o que fazer em cada zona. Comece pela causa, não pela cor: use a verificação no terreno e, quando possível, análises de solo para saber porque é que cada zona é diferente. Depois escolha uma ação por zona: mais ou menos adubo, outra densidade de sementeira, replantar, drenar, sachar ou não mudar nada.",
            "As doses vêm da agronomia, não do drone. Use os resultados das análises de solo e as recomendações locais do instituto nacional de investigação ou do serviço de extensão para a cultura e a zona. O mapa só diz onde vai cada dose. Use poucas doses (duas a quatro) para ser prático.",
            "Para máquinas, exporte as zonas como shapefile ou no formato que o controlador aceita. Para aplicação à mão, imprima ou partilhe um mapa de zonas simples com a instrução de cada zona em gramas por cova ou sacos por zona, e marque as zonas no campo. Prescrições de pulverização ou de espalhamento feitas por drone precisam das autorizações da aviação e de pesticidas que o seu país exige."
          ],
          steps: ["Confirme a causa em cada zona (verificação no terreno, análises de solo).", "Escolha uma ação por zona.", "Tire as doses das análises de solo e das recomendações locais.", "Use duas a quatro doses.", "Exporte para as máquinas, ou faça um mapa de zonas impresso com instruções para os trabalhadores."],
          words: [["Mapa de prescrição", "um mapa que diz a uma máquina ou a um trabalhador quanto aplicar, ou o que fazer, em cada zona."], ["Shapefile", "um formato de ficheiro de SIG comum para zonas e limites."], ["Análise de solo", "uma análise em laboratório dos nutrientes e da acidez do solo."]],
          slides: [
            { title: "Comece pela causa", bullets: ["Verifique cada zona no terreno", "Análises de solo quando possível", "Depois escolha uma ação"] },
            { title: "As doses vêm da agronomia", bullets: ["Análises de solo e recomendações locais", "O mapa diz onde, não quanto", "Duas a quatro doses"] },
            { title: "Entregue a prescrição", bullets: ["Máquinas: shapefile ou formato do controlador", "Trabalho à mão: mapa impresso, gramas por cova", "Pulverizar ou espalhar com drone: precisa de autorizações"] }
          ],
          sources: [FAO_WHO_AERIAL, QGIS],
          tryIt: "Usando as suas três zonas da Lição 3, escreva uma tabela de prescrição: zona, área, causa provável, ação, dose (marcada \"da recomendação local\" se não tiver uma) e como os trabalhadores vão encontrar a zona.",
          youCanNow: "construir um mapa de prescrição prático com uma dose ou tarefa para cada zona.",
          quickCheck: [
            { objective: "O4", q: "O que mostra um mapa de prescrição?", options: ["Só as cores do NDVI", "O limite da machamba", "O que aplicar ou fazer em cada zona", "As linhas de voo do drone"], answer: 2, why: "Um mapa de prescrição diz a uma máquina ou a um trabalhador o que fazer em cada zona." },
            { objective: "O4", q: "Uma zona parece fraca no mapa. O que faz antes de escolher uma ação?", options: ["Encontra a causa com a verificação no terreno e, quando possível, uma análise de solo", "Põe o dobro do adubo lá", "Replanta logo", "Ignora-a"], answer: 0, why: "Comece pela causa, não pela cor; a ação depende do motivo por que a zona é diferente." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Compensa? Um orçamento parcial simples",
          minutes: 6,
          goal: "Calcular se uma ação de precisão compensa usando um orçamento parcial.",
          text: [
            "Um orçamento parcial compara só o que muda. De um lado: o rendimento a mais (mais colheita vendida) e o dinheiro poupado (menos adubo onde era desperdiçado). Do outro: os custos a mais (serviço de drone, mais insumo em algumas zonas, mão de obra) e o rendimento perdido. Se o primeiro lado for maior, a mudança compensa.",
            "Exemplo com números de exemplo em xelins do Quénia: uma machamba de milho de 4 hectares paga KSh 6,000 pelo mapeamento. A prescrição tira 2 sacos de adubo de uma zona encharcada de 1 hectare, onde eram desperdiçados, e põe-nos numa zona média de 2 hectares, por isso não se compra adubo a mais, e o agricultor espera mais 5 sacos de milho dessa zona. Benefício: 5 sacos x o preço local por saco. Custos: KSh 6,000 pelo mapeamento + a mão de obra para abrir uma vala de drenagem à mão. Use preços locais reais e uma estimativa de colheita prudente.",
            "Mostre um intervalo, porque a colheita e o preço variam: um caso prudente e um caso provável. Conte também os benefícios difíceis de pôr em dinheiro, como o aviso mais cedo da lagarta-do-funil-do-milho (fall armyworm). Seja honesto se as contas não compensarem numa machamba pequena; uma cooperativa ou um serviço partilhado pode mudar a resposta."
          ],
          steps: ["Liste o rendimento a mais e o dinheiro poupado.", "Liste os custos a mais e o rendimento perdido.", "Use preços locais e estimativas de colheita prudentes.", "Calcule um caso prudente e um caso provável.", "Escreva a resposta com honestidade, com o que a pode mudar."],
          words: [["Orçamento parcial", "uma comparação simples só dos custos e benefícios que mudam quando se muda uma coisa."], ["Ponto de equilíbrio", "o ponto em que os benefícios a mais são iguais aos custos a mais."]],
          slides: [
            { title: "Só o que muda", bullets: ["Mais: rendimento a mais, dinheiro poupado", "Menos: custos a mais, rendimento perdido", "Mais maior do que menos = compensa"] },
            { title: "Use números reais", bullets: ["Preços locais por saco ou por kg", "Estimativas de colheita prudentes", "Serviço, insumos, mão de obra"] },
            { title: "Seja honesto", bullets: ["Caso prudente e caso provável", "Conte os benefícios difíceis de pôr em dinheiro", "Machamba pequena? Um serviço partilhado pode ajudar"] }
          ],
          tryIt: "Faça o orçamento parcial do exemplo com preços reais do seu mercado local (preço do milho por saco, preço do adubo por saco, mão de obra por dia). Calcule um caso prudente (3 sacos a mais) e um caso provável (5 sacos a mais). Compensa?",
          youCanNow: "usar um orçamento parcial para mostrar se uma ação de precisão compensa.",
          quickCheck: [
            { objective: "O5", q: "Num orçamento parcial, o que conta como custo?", options: ["O preço do serviço de mapeamento com drone", "A colheita a mais vendida", "O dinheiro poupado em adubo", "Um preço mais alto pela colheita"], answer: 0, why: "Os custos a mais, como o serviço de drone e a mão de obra, vão para o lado dos custos." },
            { objective: "O5", q: "O seu caso provável compensa, mas o caso prudente perde dinheiro. O que diz ao agricultor?", options: ["Só o caso provável", "Que compensa sempre", "Os dois casos com honestidade, e o que causa a diferença", "Nada sobre dinheiro"], answer: 2, why: "A colheita e o preço variam, por isso mostra um intervalo e é honesto quando as contas estão próximas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Comunicar os resultados para que os agricultores ajam",
          minutes: 5,
          goal: "Apresentar os resultados da análise de uma forma curta e clara que o agricultor vai seguir.",
          text: [
            "A melhor análise perde-se se o agricultor não a entender ou não confiar nela. Comece pela resposta e pela ação: \"A Zona C (o canto baixo ao lado da estrada, cerca de 2 acres) está encharcada. Abra uma vala de drenagem antes da adubação de cobertura. Não ponha adubo lá nesta época.\" Depois mostre o mapa com as zonas em cores simples e pontos de referência conhecidos.",
            "Use o canal e a língua que o agricultor usa: uma página impressa, uma imagem e uma mensagem curta no WhatsApp ou por SMS, ou uma mensagem de voz em kiswahili, hausa, iorubá, igbo ou outra língua local. Use as unidades locais (acres, sacos, debes) além de hectares e quilos. Use poucos números.",
            "Mostre até que ponto tem certeza e o que foi confirmado no terreno. Ofereça-se para percorrer o campo juntos. Combinem o que vai ser verificado da próxima vez e registe o que o agricultor fez, para que a próxima análise mostre se funcionou. Mantenha os dados dos agricultores privados e partilhe-os só com a autorização deles."
          ],
          steps: ["Escreva primeiro a resposta e a ação, zona a zona.", "Mostre um mapa simples com pontos de referência.", "Use o canal, a língua e as unidades do agricultor.", "Diga até que ponto tem certeza e o que foi confirmado.", "Combine um acompanhamento e registe o que o agricultor fez."],
          words: [["Ponto de referência", "um elemento que as pessoas conhecem, como uma estrada, uma árvore, uma loja ou um rio, usado para encontrar lugares."], ["Acompanhamento", "uma verificação mais tarde para ver se a ação funcionou."]],
          slides: [
            { title: "Primeiro a resposta e a ação", bullets: ["Zona C, canto baixo ao lado da estrada", "Abra uma vala antes da adubação de cobertura", "Depois o mapa"] },
            { title: "O canal e a língua do agricultor", bullets: ["Página impressa, WhatsApp, SMS, mensagem de voz", "Kiswahili, hausa, iorubá, igbo e outras", "Acres, sacos, debes além de hectares"] },
            { title: "Ganhe confiança", bullets: ["Diga até que ponto tem certeza", "Percorram o campo juntos", "Combine o acompanhamento; dados privados"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Tarefa final: termine a sua análise e escreva a página de resultado para o agricultor: a precisão e como foi verificada, o índice e porquê, a tabela de zonas e a contagem, o mapa de prescrição, o orçamento parcial e as ações com palavras simples, com uma data de acompanhamento.",
          youCanNow: "entregar uma análise de drone como ações claras e de confiança que um agricultor pode seguir.",
          quickCheck: [
            { objective: "O6", q: "Como deve começar o resultado para um agricultor?", options: ["Com a fórmula do índice", "Com a resposta e a ação a tomar", "Com o modelo do drone", "Com uma tabela longa"], answer: 1, why: "Começar pela resposta e pela ação ajuda o agricultor a agir." },
            { objective: "O6", q: "O agricultor lê kiswahili e usa o WhatsApp. Como envia o resultado?", options: ["Um PDF longo em inglês por e-mail", "Um ficheiro de dados brutos", "Não envia; diz só ao escritório da propriedade", "Uma imagem do mapa de zonas com uma mensagem curta ou de voz em kiswahili"], answer: 3, why: "Use o canal e a língua que o agricultor usa, com poucos números e unidades locais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Agricultura de precisão",
        questions: [
          { objective: "O4", q: "De onde devem vir as doses de adubo num mapa de prescrição?", options: ["Só da cor do mapa do drone", "Das análises de solo e das recomendações agronómicas locais", "De um palpite", "Do fabricante do drone"], answer: 1, why: "O mapa mostra onde; a agronomia diz quanto." },
          { objective: "O4", q: "Quantas doses são práticas na maioria dos mapas de prescrição?", options: ["Duas a quatro", "Cinquenta", "Uma por planta", "Nenhuma"], answer: 0, why: "Poucas doses são fáceis de aplicar para trabalhadores e máquinas." },
          { objective: "O5", q: "Um orçamento parcial compara:", options: ["Todos os custos da machamba durante dez anos", "Só os custos e benefícios que mudam", "Só o preço do drone", "Só os preços das culturas"], answer: 1, why: "Concentra-se no que a mudança acrescenta ou retira." },
          { objective: "O6", q: "Qual é a melhor primeira frase para o resultado de um agricultor?", options: ["O NDRE médio do polígono 3 foi 0.31", "O relatório de processamento tinha 412 imagens", "Usámos o QGIS 3", "A Zona C ao lado da estrada está encharcada: abra uma vala antes da adubação de cobertura"], answer: 3, why: "Comece pela resposta e pela ação, com palavras conhecidas." },
          { objective: "O5", q: "Um orçamento parcial mostra que a mudança não compensa numa machamba de 1 acre. Você deve:", options: ["Mudar os números", "Esconder o resultado", "Dizê-lo com honestidade e pensar num serviço partilhado ou de cooperativa", "Duplicar o preço"], answer: 2, why: "Resultados honestos criam confiança; partilhar pode mudar as contas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones Agrícolas: Análise de Dados e Agricultura de Precisão",
    questions: [
      { objective: "O1", q: "O GNSS normal de um drone costuma colocar um mapa:", options: ["Perfeitamente", "Alguns metros fora do sítio", "Quilómetros fora do sítio", "De pernas para o ar"], answer: 1, why: "Sem correções, o erro de posição é de alguns metros." },
      { objective: "O1", q: "Os pontos de controlo no terreno são:", options: ["Baterias do drone", "Trabalhadores do campo", "Alvos marcados no chão com coordenadas medidas com precisão", "Um tipo de índice"], answer: 2, why: "Os GCP fixam a posição do mapa durante o processamento." },
      { objective: "O1", q: "O RTK e o PPK são:", options: ["Métodos que corrigem a posição do drone para ter alta precisão", "Doenças das culturas", "Tipos de adubo", "Marcas de câmaras"], answer: 0, why: "Corrigem as posições GNSS durante ou depois do voo." },
      { objective: "O1", q: "Porque é que os mapas de datas diferentes têm de ficar sobrepostos?", options: ["Por causa das cores", "Para poupar espaço de armazenamento", "O programa exige", "Para comparar os mesmos lugares ao longo do tempo"], answer: 3, why: "Mapas desalinhados mostram mudanças falsas." },
      { objective: "O1", q: "Um relatório de processamento diz-lhe:", options: ["Os preços das culturas", "As imagens usadas, os avisos e o GSD", "O nome do agricultor", "O tempo"], answer: 1, why: "Resume a qualidade do mapa juntado." },
      { objective: "O2", q: "A saturação do NDVI quer dizer que:", options: ["O índice deixa de mostrar diferenças em copas densas", "A câmara está molhada", "A bateria está cheia", "O mapa tem buracos"], answer: 0, why: "Os valores juntam-se perto do topo na vegetação densa." },
      { objective: "O2", q: "Que banda usa o NDRE em vez do vermelho?", options: ["Azul", "Térmica", "Red edge (limite do vermelho)", "Verde"], answer: 2, why: "NDRE = (NIR - RedEdge) / (NIR + RedEdge)." },
      { objective: "O2", q: "O Excess Green (2G - R - B) serve para:", options: ["Medir o pH do solo", "Prever o tempo", "Contar dinheiro", "Separar as plantas verdes do solo em imagens RGB"], answer: 3, why: "Destaca a vegetação verde contra o solo." },
      { objective: "O2", q: "Para diferenças de azoto numa copa de café densa, escolha:", options: ["Excess Green", "NDRE", "Nenhum índice", "Só térmico"], answer: 1, why: "O NDRE continua sensível onde o NDVI satura." },
      { objective: "O2", q: "Seja qual for o índice que usa, deve também:", options: ["Olhar para o mapa em cores reais e confirmar no terreno", "Apagar as imagens originais", "Ignorar o agricultor", "Usar sempre uma só data"], answer: 0, why: "Os índices são pistas; as verificações no terreno confirmam." },
      { objective: "O3", q: "Converter píxeis classificados em zonas cria:", options: ["Baterias", "Só pontos", "Polígonos", "Vídeos"], answer: 2, why: "As zonas são formas de polígono com áreas." },
      { objective: "O3", q: "Porque tirar os pedaços muito pequenos das zonas?", options: ["Para mudar a cultura", "Por causa das cores", "Para usar mais armazenamento", "Os trabalhadores não conseguem tratar manchas muito pequenas"], answer: 3, why: "As zonas práticas são grandes o suficiente para serem tratadas." },
      { objective: "O3", q: "As contagens de árvores num mapa de drone devem ser:", options: ["Verificadas numa amostra no terreno, com o erro indicado", "Aceites sem verificar", "Duplicadas", "Mantidas em segredo"], answer: 0, why: "As verificações no terreno mostram até que ponto a contagem é precisa." },
      { objective: "O4", q: "Um mapa de prescrição diz:", options: ["Que drone comprar", "O que aplicar ou fazer em cada zona", "O tempo", "O rendimento do agricultor"], answer: 1, why: "Guia os trabalhadores ou as máquinas zona a zona." },
      { objective: "O4", q: "Antes de escolher uma ação para uma zona fraca, deve:", options: ["Pulverizá-la", "Pôr o máximo de adubo", "Confirmar a causa com a verificação no terreno e análises de solo", "Tirá-la do mapa"], answer: 2, why: "A ação tem de corrigir a causa real." },
      { objective: "O4", q: "Para aplicação à mão, a melhor forma de dar uma prescrição é:", options: ["Só um shapefile", "Uma lista de valores de píxeis", "Só uma folha de cálculo com coordenadas", "Um mapa de zonas simples com gramas por cova ou sacos por zona"], answer: 3, why: "Os trabalhadores precisam de instruções simples e práticas." },
      { objective: "O5", q: "Num orçamento parcial, o dinheiro poupado em adubo conta como:", options: ["Um benefício", "Um custo", "Nada", "Rendimento perdido"], answer: 0, why: "As poupanças ficam do lado dos benefícios." },
      { objective: "O5", q: "Porque calcular um caso prudente e um caso provável?", options: ["Para confundir o agricultor", "Porque a colheita e os preços variam", "A lei exige", "Para usar mais papel"], answer: 1, why: "Um intervalo mostra o risco com honestidade." },
      { objective: "O6", q: "Que unidades ajudam muitos pequenos agricultores a entender os resultados?", options: ["Só quilómetros quadrados", "Só píxeis", "Acres, sacos e debes além de hectares", "Só notação científica"], answer: 2, why: "Unidades conhecidas tornam os resultados úteis." },
      { objective: "O6", q: "Porque registar o que o agricultor fez depois do seu conselho?", options: ["Para vender os dados dele", "Para preencher um formulário", "Não é útil", "Para que a próxima análise mostre se funcionou"], answer: 3, why: "O acompanhamento fecha o ciclo e melhora os conselhos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      5,
      8,
      10,
      12,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte da análise e verifique outra vez.",
    criteria: [
      {
        name: "Precisão do mapa",
        objective: "O1",
        notYet: "A precisão não é indicada, ou não há verificação da qualidade.",
        meets: "A precisão do mapa e a forma como foi verificada são indicadas, e a qualidade da imagem foi verificada no relatório de processamento.",
        exceeds: "Usa pontos de verificação e indica o erro medido."
      },
      {
        name: "Escolha do índice",
        objective: "O2",
        notYet: "O índice não é justificado, ou não serve para a cultura ou a câmara.",
        meets: "O índice serve para a cultura, a fase e a câmara, com uma razão curta.",
        exceeds: "Compara dois índices e mostra porque escolheu um."
      },
      {
        name: "Zonas e contagens",
        objective: "O3",
        notYet: "Não há estatísticas por zona, ou as contagens não foram verificadas.",
        meets: "A área e o índice médio de cada zona, e uma contagem de plantas ou árvores verificada numa amostra no terreno.",
        exceeds: "Compara as mesmas zonas em duas datas."
      },
      {
        name: "Mapa de prescrição",
        objective: "O4",
        notYet: "As doses são adivinhadas ou há doses demais.",
        meets: "Duas a quatro doses ou tarefas por zona, de recomendações locais, ligadas a causas confirmadas no terreno.",
        exceeds: "Exportado num formato que a máquina ou os trabalhadores podem usar."
      },
      {
        name: "Orçamento parcial",
        objective: "O5",
        notYet: "Não há orçamento, ou conta coisas que não mudam.",
        meets: "Um orçamento parcial com um caso prudente e um caso provável, usando preços locais.",
        exceeds: "Indica os benefícios difíceis de pôr em dinheiro e quando um serviço partilhado ajudaria."
      },
      {
        name: "Resultado para o agricultor",
        objective: "O6",
        notYet: "Tem mais de uma página ou começa com detalhes técnicos.",
        meets: "Uma página que começa pela ação, com palavras simples e unidades locais, e diz até que ponto tem certeza.",
        exceeds: "Preparado na língua e no canal do próprio agricultor, com um acompanhamento combinado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da análise",
      "Alunos que dizem ter entregado um mapa de prescrição ou um relatório de zonas a um agricultor ou propriedade em 60 dias (inquérito de seguimento)",
      "Agricultores ou propriedades que dizem ter agido com base num resultado de drone e registado o que aconteceu",
      "Alunos que fazem outro curso de drones ou de agricultura de precisão"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador portátil com o QGIS gratuito instalado",
      "Dados de drone de um campo real, ou dados de amostra gratuitos",
      "Doses recomendadas localmente pela extensão ou pela investigação, e preços locais dos insumos e das culturas",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo para terminar a análise e o resultado para o agricultor"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois façam ao vivo o passo das estatísticas por zona no QGIS, com uns dados de amostra partilhados.",
      "Não dê você mesmo doses de adubo ou de semente; traga doses da extensão ou da investigação para a cultura local.",
      "Lembre aos alunos que as prescrições de pulverização ou de espalhamento por drone precisam de autorizações da aviação e de pesticidas.",
      "Use só dados de machambas que o agricultor aceitou partilhar e tire os nomes dos exemplos da turma.",
      "Avalie a análise com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
