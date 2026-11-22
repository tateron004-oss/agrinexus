"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-crop-health.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_EO = { name: "FAO GIEWS, observação da Terra (NDVI e indicadores de vegetação)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const FAO_FAMEWS = { name: "FAO: aplicação móvel para apoiar a luta contra a lagarta-do-cartucho em África (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ODM = { name: "OpenDroneMap (programa gratuito e de código aberto para mapas com drone)", url: "https://www.opendronemap.org/" };
const QGIS = { name: "QGIS (SIG gratuito e de código aberto)", url: "https://qgis.org/" };

module.exports = {
  id: "agri-drones-crop-health-pt",
  lang: "pt",
  translationOf: "agri-drones-crop-health",
  category: "Agriculture (Africa)",
  name: "Drones para a Monitorização Agrícola 3: Saúde das Culturas, Pragas e Processamento de Dados",
  skills: "Ler um mapa NDVI da saúde das culturas, Identificar cedo padrões de pragas, doenças e stress, Verificar no terreno as zonas com problemas, Juntar fotos de drone num mapa, Fazer um mapa de índice no QGIS, Escrever um relatório de ação para o campo",
  outcome: "transformar um conjunto de fotos de drone de um campo num mapa da saúde das culturas, encontrar as zonas com problemas, verificá-las no terreno e escrever um relatório de ação curto que o agricultor possa usar.",
  about: [
    "Este é o Curso 3 da série de monitorização com drones, para extensionistas, agrónomos, gestores de explorações agrícolas e jovens prestadores de serviços com drones no Quénia, na Nigéria e em toda a África. Deve saber captar um conjunto de imagens de drone sobrepostas (Curso 2) ou ter um conjunto para trabalhar; há conjuntos de dados de exemplo gratuitos na internet.",
    "O Capítulo 1 ensina a ler mapas da saúde das culturas e a reconhecer os padrões que os problemas iniciais de pragas, doenças, água e nutrientes deixam no milho, na mandioca, no feijão, no chá e no café, e a confirmá-los no terreno. O Capítulo 2 ensina a juntar fotos num mapa com programas gratuitos, a fazer um mapa NDVI no QGIS e a escrever um relatório que leve à ação.",
    "Um mapa de drone nunca substitui os olhos do agricultor nem o diagnóstico do extensionista. Mostra onde olhar primeiro, para que o pouco tempo e dinheiro vão para o sítio certo. Cada lição dura cerca de cinco minutos, mais uma tarefa de prática; uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Usando um mapa de drone de um campo real ou um conjunto de dados de exemplo gratuito: faça um mapa NDVI ou a cores, marque pelo menos três zonas com problemas, escreva um plano de verificação no terreno (o que procurar em cada zona) e escreva um relatório de ação de uma página para o agricultor, com uma imagem do mapa, o que foi encontrado ou suspeitado, o próximo passo recomendado para cada zona e a quem contactar para confirmar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Extensionistas, agrónomos, gestores de explorações agrícolas e jovens prestadores de serviços com drones no Quénia, na Nigéria e em toda a África que fazem o Curso 3 da série de monitorização com drones, com culturas como milho, mandioca, feijão, chá e café.",
    startingPoint: "Os alunos sabem captar um conjunto de imagens de drone sobrepostas (Curso 2) ou têm um conjunto de dados de exemplo. Poucos já juntaram fotos num mapa, fizeram um mapa NDVI no QGIS, leram padrões de pragas, doenças e stress num mapa, verificaram zonas no terreno ou escreveram um relatório que um agricultor põe em prática.",
    gap: "As fotos de drone só são úteis quando se tornam um mapa, as zonas fracas são verificadas a pé e o agricultor recebe um próximo passo claro. Sem isto, os problemas são encontrados tarde, os tratamentos são adivinhados e perde-se dinheiro. Transformar as imagens num relatório de ação verificado envia o pouco tempo e dinheiro para o sítio certo.",
    constraints: [
      "Nível de leitura: palavras simples; todos os termos de mapas e de SIG são explicados",
      "Aparelhos: um computador que consiga correr o QGIS e o OpenDroneMap gratuitos, e um telefone com GPS para as verificações no terreno",
      "Dados: um conjunto de dados de drone real ou um conjunto de exemplo gratuito; o processamento pode levar uma hora ou mais",
      "Um mapa de drone nunca substitui os olhos do agricultor nem o diagnóstico de um especialista; nenhum conselho sobre pesticidas a partir de um mapa",
      "Os dados e os mapas dos agricultores só são partilhados com a autorização deles"
    ],
    prerequisites: "\"Drones para a Monitorização Agrícola 2: Operações de Voo, Imagens e Sensores\", ou um conjunto de imagens de drone sobrepostas para trabalhar."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um mapa NDVI ou a cores da saúde das culturas", action: "ler a legenda e encontrar as zonas fracas e as zonas fortes", standard: "comparando as diferenças dentro do campo e com mapas anteriores" },
    { id: "O2", condition: "Com os padrões de um mapa de um campo", action: "descrever o que cada padrão pode indicar, como pragas, doenças, água, máquinas ou nutrientes", standard: "tratando cada padrão como uma pista a confirmar, não como um diagnóstico" },
    { id: "O3", condition: "Para cada zona com problemas num mapa", action: "escrever um plano de verificação no terreno e registar o que encontra no local", standard: "com o número da zona, as coordenadas, o que viu, a causa provável, o grau de certeza e fotos" },
    { id: "O4", condition: "Com um conjunto de fotos de drone sobrepostas", action: "juntá-las num ortomosaico com um programa gratuito e verificar se tem buracos ou partes desfocadas", standard: "com as fotos com nome, com cópia de segurança e o resultado verificado" },
    { id: "O5", condition: "Usando o QGIS e um ortomosaico multiespectral", action: "calcular e colorir um mapa NDVI com o limite do campo e os pontos do terreno visíveis", standard: "usando a fórmula (NIR - Red) / (NIR + Red)" },
    { id: "O6", condition: "Depois da verificação no terreno", action: "escrever um relatório de ação de uma página para o agricultor", standard: "com uma imagem do mapa, os resultados, um próximo passo para cada zona e a quem contactar, e sem conselhos sobre pesticidas a partir do mapa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ler a saúde das culturas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ler um mapa NDVI da saúde das culturas",
          minutes: 5,
          goal: "Ler um mapa NDVI usando a sua escala de cores e encontrar as zonas fracas e as zonas fortes.",
          text: [
            "O NDVI (sigla em inglês de Índice de Vegetação por Diferença Normalizada) compara a luz infravermelha próxima e a luz vermelha refletidas pelas plantas. Os valores vão de -1 a +1. A FAO (a organização da ONU para a alimentação e a agricultura) explica que valores positivos altos indicam vegetação densa e saudável, e valores baixos ou negativos indicam pouca cobertura, solo nu ou água.",
            "Num mapa NDVI de drone, cada píxel recebe uma cor de uma escala, muitas vezes vermelho para valores baixos e verde para valores altos. Leia sempre a legenda: as cores são relativas a esse mapa. Um campo todo vermelho no início da época pode ter apenas plantas pequenas e solo nu.",
            "Procure diferenças dentro do campo, não só a cor. Uma mancha baixa num campo de milho que, no resto, está uniforme merece uma visita. Compare com mapas anteriores do mesmo campo: uma mancha que cresce de semana para semana é mais importante do que uma que fica igual."
          ],
          steps: ["Leia a legenda: que cor é baixa e que cor é alta?", "Anote a cultura e a fase de crescimento: culturas jovens mostram mais solo.", "Procure manchas diferentes do resto do campo.", "Compare com um mapa anterior: a mancha é nova ou está a crescer?", "Marque as zonas a visitar."],
          words: [["NDVI", "um índice de vegetação de -1 a +1; mais alto normalmente quer dizer plantas verdes mais densas e saudáveis."], ["Legenda", "a chave que mostra o que quer dizer cada cor num mapa."], ["Fase de crescimento", "quanto a cultura já se desenvolveu, desde a plântula até à colheita."]],
          slides: [
            { title: "O NDVI numa linha", bullets: ["Compara a luz infravermelha próxima e a luz vermelha", "De -1 a +1", "Alto = verde denso e saudável; baixo = pouca planta, solo ou água"] },
            { title: "Leia primeiro a legenda", bullets: ["As cores são relativas ao mapa", "Culturas jovens mostram mais solo"] },
            { title: "Procure diferenças", bullets: ["Manchas diferentes do resto", "Manchas novas ou a crescer são as mais importantes", "Marque as zonas a visitar"] }
          ],
          sources: [FAO_EO],
          tryIt: "Encontre um mapa NDVI de exemplo na internet (procure um mapa NDVI de um campo de milho) ou use um seu. Leia a legenda, marque duas zonas fracas e uma zona forte, e escreva em que fase de crescimento a cultura pode estar.",
          youCanNow: "ler a legenda de um mapa NDVI e encontrar as zonas fracas e fortes que merecem uma visita.",
          quickCheck: [
            { objective: "O1", q: "O que indica um valor de NDVI positivo e alto?", options: ["Solo nu", "Água", "Um drone avariado", "Vegetação densa e saudável"], answer: 3, why: "Valores de NDVI positivos e altos indicam vegetação densa e saudável; valores baixos indicam pouca cobertura, solo ou água." },
            { objective: "O1", q: "Um campo de milho está verde e uniforme, exceto uma mancha baixa. O que faz?", options: ["Marca a mancha para visitar e compara-a com mapas anteriores", "Ignora-a porque a maior parte do campo está verde", "Pulveriza o campo todo", "Apaga o mapa"], answer: 0, why: "Uma mancha baixa num campo que, no resto, está uniforme merece uma visita, e os mapas anteriores mostram se está a crescer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Identificar cedo padrões de pragas, doenças e stress",
          minutes: 6,
          goal: "Reconhecer os padrões no mapa que indicam pragas, doenças, ou problemas de água ou de nutrientes.",
          text: [
            "Problemas diferentes deixam formas diferentes num mapa. Manchas que começam pequenas e se espalham para fora ao longo de semanas podem indicar pragas ou doenças, como a lagarta-do-cartucho no milho ou doenças causadas por vírus na mandioca. Problemas ao longo de uma borda podem vir do campo de um vizinho, de uma estrada ou do vento. Faixas retas normalmente seguem pessoas ou máquinas: uma linha sem adubo, um tubo de rega entupido, uma avaria da semeadora.",
            "Cantos baixos e húmidos e depressões indicam encharcamento; terreno alto, arenoso ou inclinado indica stress hídrico (falta de água), sobretudo em imagens térmicas à tarde. Um amarelecimento uniforme em todo o campo pode indicar falta de um nutriente, como o azoto, mas também seca.",
            "Um padrão é uma pista, não um diagnóstico. Doenças e pragas parecem iguais vistas do ar, e os tratamentos são muito diferentes. Onde é usada, a aplicação FAMEWS da FAO permite registar a lagarta-do-cartucho; confirme qualquer suspeita de praga ou doença com um extensionista ou uma clínica de plantas antes de agir."
          ],
          words: [["Padrão", "a forma e a extensão de um problema num mapa: mancha, borda, faixa, ponto baixo."], ["Lagarta-do-cartucho", "uma lagarta que é praga e come o milho e outras culturas; espalhou-se por África a partir de 2016."], ["Clínica de plantas", "um lugar onde pessoal formado diagnostica os problemas das plantas trazidas pelos agricultores."]],
          slides: [
            { title: "As formas contam uma história", bullets: ["Manchas que se espalham: pragas ou doenças?", "Uma borda: vizinho, estrada ou vento?", "Faixas retas: máquinas, adubo ou rega"] },
            { title: "Água e nutrientes", bullets: ["Depressões baixas e húmidas: encharcamento", "Encostas altas e arenosas: stress hídrico", "Amarelecimento uniforme: nutrientes ou seca"] },
            { title: "Uma pista, não um diagnóstico", bullets: ["Pragas e doenças parecem iguais vistas do ar", "Os tratamentos são muito diferentes", "Confirme com a extensão rural ou uma clínica de plantas"] }
          ],
          sources: [FAO_FAMEWS],
          tryIt: "Faça quatro pequenos desenhos de um campo: um com uma mancha que se espalha, um com um problema ao longo de uma borda, um com faixas e um com um canto baixo e húmido. Por baixo de cada um, escreva duas causas possíveis.",
          youCanNow: "reconhecer padrões comuns de problemas num mapa de culturas e fazer a lista das causas prováveis a verificar.",
          quickCheck: [
            { objective: "O2", q: "O que pode indicar uma mancha que começa pequena e se espalha para fora ao longo de semanas?", options: ["Uma avaria da semeadora", "Pragas ou doenças", "Uma estrada", "Só um dreno entupido"], answer: 1, why: "Manchas que se espalham para fora ao longo de semanas podem indicar pragas ou doenças, como a lagarta-do-cartucho ou vírus da mandioca." },
            { objective: "O2", q: "O mapa mostra a cultura fraca na parte alta e arenosa do campo, numa tarde quente. De que suspeita primeiro?", options: ["Encharcamento", "Adubo a mais", "Stress hídrico", "Uma linha de sementeira falhada"], answer: 2, why: "Terreno alto, arenoso ou inclinado mostra muitas vezes stress hídrico, sobretudo em imagens térmicas da tarde." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Verificação no terreno: ver as zonas a pé",
          minutes: 5,
          goal: "Visitar cada zona com problemas com um plano e registar o que encontra.",
          text: [
            "Verificar no terreno quer dizer ir ao local exato do mapa e ver o que está lá de verdade. Carregue o mapa no seu telefone com GPS (muitas aplicações gratuitas de mapas e de SIG mostram a sua posição num mapa de drone), ou anote as coordenadas de cada zona.",
            "Em cada zona, observe as plantas, as folhas (por cima e por baixo), os caules e as raízes, o solo e a humidade, e os insetos. Compare com plantas saudáveis a poucos metros, numa zona forte. Tire fotos nítidas e escreva notas curtas.",
            "Registe os resultados sempre da mesma forma: número da zona, coordenadas, cultura e fase, o que viu, causa provável, grau de certeza e números das fotos. Bons registos tornam o próximo mapa mais fácil de ler e ajudam o especialista que confirma a causa."
          ],
          steps: ["Dê um número a cada zona e anote as coordenadas.", "Vá até lá a pé usando um mapa com GPS no telefone.", "Observe plantas, folhas, caules, raízes, solo, humidade e insetos.", "Compare com um sítio saudável perto.", "Registe zona, coordenadas, o que viu, causa provável, grau de certeza, números das fotos."],
          words: [["Verificação no terreno", "ver no próprio terreno o que um mapa ou uma imagem mostra."], ["Coordenadas", "os números de latitude e longitude que dão um lugar exato."]],
          slides: [
            { title: "Vá ao local exato", bullets: ["Mapa com GPS no seu telefone", "Ou anote as coordenadas de cada zona"] },
            { title: "Observe com atenção", bullets: ["Folhas por cima e por baixo, caules, raízes", "Solo e humidade, insetos", "Compare com um sítio saudável perto"] },
            { title: "Registe sempre da mesma forma", bullets: ["Zona, coordenadas, cultura e fase", "O que viu, causa provável, grau de certeza", "Números das fotos"] }
          ],
          tryIt: "Faça um formulário de verificação no terreno (em papel ou numa folha de cálculo no telefone) com estas colunas: zona, coordenadas, cultura e fase, o que vi, causa provável, grau de certeza, fotos. Preencha uma linha para uma zona real ou de exemplo.",
          youCanNow: "planear e fazer uma visita de verificação no terreno e registar os resultados num formulário claro.",
          quickCheck: [
            { objective: "O3", q: "Como pode encontrar o local exato de uma zona do mapa quando está no campo?", options: ["Adivinhar pela cor da cultura", "Perguntar a um vizinho", "Carregar o mapa num telefone com GPS, ou anotar as coordenadas da zona", "Andar até as plantas parecerem más"], answer: 2, why: "Um telefone que mostra a sua posição no mapa de drone, ou as coordenadas da zona, leva-o ao local exato." },
            { objective: "O3", q: "Chega à zona 2 e encontra milho murcho. O que regista?", options: ["Só \"plantas más\"", "Nada; vai lembrar-se", "Uma foto sem notas", "Número da zona, coordenadas, fase da cultura, o que viu, causa provável, grau de certeza e números das fotos"], answer: 3, why: "Registar sempre os mesmos dados torna os registos comparáveis e ajuda um especialista a confirmar a causa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ler a saúde das culturas",
        questions: [
          { objective: "O1", q: "Um mapa NDVI de um campo está quase todo vermelho no início da época. A razão mais provável é:", options: ["O drone estava avariado", "Plantas pequenas e muito solo nu", "Está tudo morto", "Choveu"], answer: 1, why: "As culturas jovens cobrem pouco terreno, por isso o solo faz baixar os valores." },
          { objective: "O1", q: "Que mancha deve visitar primeiro?", options: ["Uma mancha igual à do mês passado", "A zona verde mais forte", "Uma mancha baixa que cresceu desde o último mapa", "A borda do campo com capim"], answer: 2, why: "Uma mancha que cresce indica um problema ativo que se está a espalhar." },
          { objective: "O2", q: "Faixas retas de cultura fraca num campo normalmente indicam:", options: ["Máquinas, adubo ou tubos de rega", "Um vírus que se espalha a partir de uma planta", "Vento de um lado", "Nada"], answer: 0, why: "As linhas retas seguem a forma como as pessoas e as máquinas trabalham o campo." },
          { objective: "O2", q: "Um mapa de drone indica fortemente uma doença. Antes de pulverizar, deve:", options: ["Pulverizar o produto químico mais forte", "Publicar o mapa na internet", "Pulverizar a exploração toda", "Confirmar a causa com um extensionista ou uma clínica de plantas"], answer: 3, why: "Pragas e doenças parecem iguais vistas do ar e precisam de tratamentos diferentes." },
          { objective: "O3", q: "Porquê comparar uma zona fraca com plantas saudáveis a poucos metros?", options: ["Para ver o que é diferente", "Para poupar bateria", "Porque a lei o obriga", "Para encontrar melhor rede no telefone"], answer: 0, why: "Comparar lado a lado mostra o que está mal com as plantas fracas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Processar os dados do drone",
      lessons: [
        {
          objectives: ["O4"],
          title: "Juntar fotos num mapa",
          minutes: 6,
          goal: "Transformar um conjunto de fotos de drone sobrepostas num único mapa ortomosaico.",
          text: [
            "O programa de junção encontra os pormenores que as fotos sobrepostas têm em comum, calcula onde cada uma foi tirada e constrói uma única imagem com a precisão de um mapa, chamada ortomosaico. Também pode fazer um modelo de elevação (a altura do terreno e da cultura).",
            "Há opções gratuitas. O OpenDroneMap é um programa gratuito e de código aberto, e a sua interface WebODM permite carregar as fotos num navegador de internet no seu próprio computador. Também há serviços pagos na nuvem e as aplicações do próprio fabricante do drone; verifique os preços atuais e onde guardam os seus dados.",
            "O processamento precisa de um computador razoavelmente potente e de tempo: algumas centenas de fotos podem levar uma hora ou mais. Copie as fotos do drone para uma pasta com o nome da exploração, do campo e da data, faça uma cópia de segurança e depois processe. Verifique o resultado: buracos, partes desfocadas ou linhas tortas querem dizer que a sobreposição ou as fotos eram fracas."
          ],
          steps: ["Copie as fotos para uma pasta com o nome exploracao_campo_data (por exemplo Kitale_Block3_2026-11-04).", "Faça uma cópia de segurança da pasta.", "Abra o programa de junção e crie uma tarefa nova.", "Adicione as fotos e comece o processamento.", "Verifique se o ortomosaico tem buracos, partes desfocadas e linhas tortas.", "Exporte-o como GeoTIFF (uma imagem de mapa com a localização incluída)."],
          words: [["Ortomosaico", "uma imagem grande, com a precisão de um mapa, feita a juntar muitas fotos sobrepostas."], ["GeoTIFF", "um ficheiro de imagem que guarda a sua localização na Terra, para que os programas de mapas o coloquem no sítio certo."], ["Modelo de elevação", "um mapa da altura do terreno ou da superfície da cultura."]],
          slides: [
            { title: "De fotos a um mapa", bullets: ["O programa junta as fotos sobrepostas", "Constrói um único ortomosaico", "Também pode construir um modelo de elevação"] },
            { title: "Ferramentas gratuitas e pagas", bullets: ["OpenDroneMap / WebODM: gratuito, de código aberto", "Serviços pagos na nuvem e aplicações do fabricante", "Verifique os preços e onde ficam os seus dados"] },
            { title: "Bons hábitos", bullets: ["Pasta com o nome exploracao_campo_data", "Cópia de segurança antes de processar", "Veja se há buracos, partes desfocadas, linhas tortas", "Exporte como GeoTIFF"] }
          ],
          sources: [ODM],
          tryIt: "Descarregue um conjunto de dados de drone de exemplo gratuito (o OpenDroneMap tem ligações para conjuntos de exemplo) ou use as suas fotos. Dê nome à pasta, faça uma cópia de segurança e, se o seu computador conseguir, processe-a num ortomosaico. Se não conseguir, escreva cada passo que seguiria.",
          youCanNow: "organizar fotos de drone e juntá-las num mapa ortomosaico com um programa gratuito.",
          quickCheck: [
            { objective: "O4", q: "Além de um ortomosaico, que mais pode fazer o programa de junção?", options: ["Um modelo de elevação da altura do terreno e da cultura", "Um rótulo de pesticida", "Uma previsão do tempo", "Uma análise do solo"], answer: 0, why: "O programa de junção também pode fazer um modelo de elevação que mostra a altura do terreno e da cultura." },
            { objective: "O4", q: "Acabou de aterrar com 400 fotos. O que faz antes de processar?", options: ["Apaga as desfocadas só no drone", "Copia-as para uma pasta com o nome da exploração, do campo e da data, e faz uma cópia de segurança", "Processa-as diretamente do cartão do drone", "Envia-as por e-mail ao agricultor"], answer: 1, why: "Dar nome à pasta e fazer uma cópia de segurança das fotos antes de processar protege os dados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um mapa NDVI no QGIS",
          minutes: 6,
          goal: "Calcular e colorir um mapa NDVI a partir de um ortomosaico multiespectral no QGIS.",
          text: [
            "O QGIS é um programa de SIG gratuito e de código aberto, usado por governos, universidades e ONG em toda a África. Consegue abrir o seu GeoTIFF e fazer contas com as suas bandas.",
            "Se o seu ortomosaico tem bandas vermelha e infravermelha próxima, use a Calculadora Raster (Raster Calculator) para calcular NDVI = (NIR - Red) / (NIR + Red), onde NIR é o infravermelho próximo e Red é o vermelho. Depois dê ao resultado uma rampa de cores (por exemplo, de vermelho a verde) e ajuste o intervalo para que as diferenças no campo se destaquem.",
            "Só tem câmaras de cor? Mesmo assim pode fazer um índice de verde aproximado a partir das bandas vermelha, verde e azul, mas é menos fiável do que o NDVI; use-o só como guia. Adicione o limite do campo e os seus pontos de verificação no terreno como camadas, para que o mapa mostre exatamente onde ficam as zonas."
          ],
          steps: ["Abra o QGIS e adicione o GeoTIFF do seu ortomosaico.", "Veja qual é a banda vermelha e qual é a infravermelha próxima.", "Abra a Calculadora Raster e escreva (NIR - Red) / (NIR + Red) com essas bandas.", "Dê à nova camada uma rampa de cores de vermelho a verde.", "Adicione o limite do campo e os pontos de verificação no terreno.", "Exporte uma imagem do mapa para o seu relatório."],
          words: [["SIG", "sistema de informação geográfica (em inglês GIS): programas para fazer e analisar mapas."], ["Banda", "uma camada de luz numa imagem, como vermelho, verde, azul ou infravermelho próximo."], ["Raster", "uma imagem feita de píxeis, cada um com um valor, como um mapa de drone."], ["Camada", "um conjunto de dados do mapa, como o limite de um campo ou pontos, mostrado por cima de outros."]],
          slides: [
            { title: "QGIS", bullets: ["SIG gratuito e de código aberto", "Abre o seu GeoTIFF", "Faz contas com as bandas da imagem"] },
            { title: "Fórmula do NDVI", bullets: ["NDVI = (NIR - Red) / (NIR + Red)", "Use a Calculadora Raster", "Cores de vermelho a verde"] },
            { title: "Só tem câmara de cor?", bullets: ["Índice de verde aproximado a partir das bandas RGB", "Menos fiável do que o NDVI: só um guia"] },
            { title: "Termine o mapa", bullets: ["Adicione o limite do campo e os pontos das zonas", "Exporte uma imagem para o relatório"] }
          ],
          sources: [QGIS, FAO_EO],
          tryIt: "Instale o QGIS (gratuito) e abra o seu ortomosaico ou uma imagem multiespectral de exemplo. Calcule o NDVI com a Calculadora Raster, dê-lhe cores e marque três zonas como pontos.",
          youCanNow: "fazer um mapa NDVI a cores no QGIS e adicionar-lhe as zonas e os limites do campo.",
          quickCheck: [
            { objective: "O5", q: "O que faz a Calculadora Raster do QGIS?", options: ["Junta fotos", "Pilota o drone", "Envia o relatório", "Faz contas com as bandas de uma imagem, como calcular o NDVI"], answer: 3, why: "A Calculadora Raster faz contas com as bandas, como (NIR - Red) / (NIR + Red)." },
            { objective: "O5", q: "O seu mapa NDVI parece todo da mesma cor. O que muda?", options: ["Voa outra vez à noite", "Apaga a banda infravermelha próxima", "Ajusta o intervalo da rampa de cores para que as diferenças no campo se destaquem", "Usa outro campo"], answer: 2, why: "Dar uma rampa de cores e ajustar o intervalo torna visíveis as diferenças dentro do campo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever um relatório de ação para o campo",
          minutes: 5,
          goal: "Escrever um relatório de uma página que diga ao agricultor o que foi encontrado e o que fazer a seguir.",
          text: [
            "Um mapa sozinho não ajuda um agricultor ocupado. Um relatório curto transforma-o em ação. Faça-o numa só página, com palavras simples, na língua que o agricultor prefere. Muitos agricultores vão lê-lo num smartphone simples, por isso uma imagem e algumas linhas funcionam melhor do que um documento longo.",
            "Inclua: exploração, campo, data e fase da cultura; a imagem do mapa com as zonas numeradas; para cada zona, o que viu no terreno, a causa provável e o grau de certeza; o próximo passo (por exemplo: voltar a semear as falhas, limpar um dreno, pedir à clínica de plantas que confirme uma doença, verificar o tubo de rega); e a quem contactar.",
            "Nunca recomende um pesticida nem uma dose a partir de um mapa de drone. Envie o agricultor a um extensionista, a uma loja agropecuária ou a uma clínica de plantas para qualquer conselho sobre químicos, e ao rótulo para o uso seguro. Combinem quando voar outra vez para ver se a ação resultou."
          ],
          steps: ["Cabeçalho: exploração, campo, data, cultura e fase.", "Imagem do mapa com as zonas numeradas.", "Para cada zona: o que viu, causa provável, grau de certeza.", "Próximo passo para cada zona e a quem contactar.", "Data do próximo voo para ver os resultados."],
          words: [["Relatório de ação", "um relatório curto que diz o que foi encontrado e o que fazer."], ["Loja agropecuária (agrovet)", "uma loja que vende insumos agrícolas como sementes, adubo e medicamentos para animais, muitas vezes com conselhos."]],
          slides: [
            { title: "Um mapa não chega", bullets: ["Uma página, palavras simples", "Na língua que o agricultor prefere", "Uma imagem e algumas linhas"] },
            { title: "O que incluir", bullets: ["Exploração, campo, data, fase da cultura", "Mapa com zonas numeradas", "Resultado, causa provável, grau de certeza, próximo passo"] },
            { title: "Seguro e honesto", bullets: ["Nenhum pesticida nem dose a partir de um mapa", "Envie para a extensão, a loja agropecuária ou a clínica de plantas", "Combinem quando voar outra vez"] }
          ],
          tryIt: "Tarefa final: usando o seu mapa e o formulário de verificação no terreno, escreva o relatório de ação de uma página para o agricultor: cabeçalho, imagem do mapa com pelo menos três zonas numeradas, resultado e causa provável de cada uma, próximo passo, contactos e a data do próximo voo.",
          youCanNow: "transformar os dados do drone num relatório de ação claro, de uma página, que um agricultor possa usar.",
          quickCheck: [
            { objective: "O6", q: "Que tamanho deve ter um relatório de ação para o campo?", options: ["Dez páginas", "Uma página", "Só o mapa, sem palavras", "O maior possível"], answer: 1, why: "Um relatório de uma página com palavras simples, com um mapa e os próximos passos, é o que um agricultor ocupado consegue usar." },
            { objective: "O6", q: "O seu mapa e a verificação no terreno indicam uma doença na zona 3. Que próximo passo escreve?", options: ["Pedir à clínica de plantas ou ao extensionista que confirme a doença", "Pulverizar um fungicida forte com o dobro da dose", "Arrancar o campo todo", "Esperar um ano"], answer: 0, why: "Nunca recomende um pesticida nem uma dose a partir de um mapa; envie o agricultor primeiro a um especialista para confirmar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Processar os dados do drone",
        questions: [
          { objective: "O4", q: "O que é um ortomosaico?", options: ["Uma só foto", "Um tipo de drone", "Uma imagem com a precisão de um mapa, feita a juntar muitas fotos", "Uma praga"], answer: 2, why: "O programa de junção constrói um único mapa a partir de fotos sobrepostas." },
          { objective: "O4", q: "O seu mapa juntado tem buracos e linhas tortas. A causa mais provável é:", options: ["Pouca sobreposição ou fotos fracas", "Bateria a mais", "O telefone do agricultor", "Sol a mais no ecrã"], answer: 0, why: "A junção precisa de muitas fotos nítidas e sobrepostas." },
          { objective: "O5", q: "Qual é a fórmula do NDVI?", options: ["(Red + Blue) / 2", "NIR x Red", "Green - Blue", "(NIR - Red) / (NIR + Red)"], answer: 3, why: "O NDVI compara a luz infravermelha próxima e a luz vermelha." },
          { objective: "O5", q: "O que é o QGIS?", options: ["Um drone pago", "Um programa de SIG gratuito e de código aberto para mapas", "Um pesticida", "Uma rede de telefone"], answer: 1, why: "O QGIS é um programa gratuito usado para fazer e analisar mapas." },
          { objective: "O6", q: "No seu relatório, um agricultor pergunta que pesticida deve pulverizar na zona 2. Você deve:", options: ["Adivinhar um a partir do mapa", "Enviá-lo a um extensionista, a uma loja agropecuária ou a uma clínica de plantas, e ao rótulo", "Dizer-lhe para pulverizar o dobro", "Não dizer nada"], answer: 1, why: "Um conselho sobre químicos precisa de um diagnóstico confirmado e de um conselho qualificado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones para a Monitorização Agrícola 3: Saúde das Culturas, Pragas e Processamento de Dados",
    questions: [
      { objective: "O1", q: "Os valores do NDVI vão de:", options: ["-100 a 0", "-1 a +1", "0 a 100", "1 a 10"], answer: 1, why: "O NDVI é uma razão entre -1 e +1." },
      { objective: "O1", q: "Num mapa NDVI, a primeira coisa a ler é:", options: ["O tamanho do ficheiro", "A legenda", "O nome do drone", "O tempo"], answer: 1, why: "A legenda diz que cores querem dizer valores baixos e altos." },
      { objective: "O1", q: "Uma mancha ficou igual em três mapas. Uma mancha nova está a espalhar-se. Qual é mais importante?", options: ["A mancha antiga", "Nenhuma", "A mancha que se espalha", "As duas são igualmente urgentes"], answer: 2, why: "Uma mancha que se espalha indica um problema ativo." },
      { objective: "O2", q: "Uma cultura fraca ao longo de uma borda, junto ao campo de um vizinho, pode vir de:", options: ["Sobreposição a mais", "A legenda", "A bateria do drone", "Pragas ou pulverização arrastada pelo vento desse lado"], answer: 3, why: "Os padrões na borda indicam muitas vezes algo que vem de fora do campo." },
      { objective: "O2", q: "Depressões baixas e húmidas com cultura fraca mostram muito provavelmente:", options: ["Encharcamento", "Sol a mais", "Uma boa colheita", "Uma câmara avariada"], answer: 0, why: "A água junta-se nas depressões e estraga as raízes." },
      { objective: "O2", q: "Um padrão num mapa de drone é:", options: ["Um diagnóstico final", "Uma pista que precisa de ser verificada no terreno", "Sempre uma praga", "Sempre uma doença"], answer: 1, why: "Os padrões mostram onde olhar; as verificações no terreno encontram a causa." },
      { objective: "O2", q: "A aplicação FAMEWS da FAO foi feita para registar:", options: ["A chuva", "Os preços no mercado", "Observações de lagarta-do-cartucho", "Voos de drone"], answer: 2, why: "A FAMEWS é o Sistema de Monitorização e Alerta Precoce da Lagarta-do-Cartucho da FAO." },
      { objective: "O3", q: "Verificar no terreno quer dizer:", options: ["Voar mais baixo", "Comprar um programa novo", "Limpar a lente", "Ver no terreno o que o mapa mostra"], answer: 3, why: "Você visita o local para ver o que está lá de verdade." },
      { objective: "O3", q: "Durante uma verificação no terreno deve observar:", options: ["As folhas por cima e por baixo, os caules, as raízes, o solo e os insetos", "Só a parte de cima de uma folha", "Só o céu", "Só o drone"], answer: 0, why: "Uma verificação completa encontra pragas, doenças e problemas do solo." },
      { objective: "O3", q: "Porquê registar os resultados sempre da mesma forma?", options: ["O drone obriga", "Torna os registos comparáveis e ajuda os especialistas", "Para ocupar o tempo", "Torna as fotos mais nítidas"], answer: 1, why: "Registos coerentes ajudam a comparar e a confirmar as causas." },
      { objective: "O3", q: "As coordenadas são:", options: ["Cores num mapa", "A velocidade do drone", "Os números de latitude e longitude de um lugar exato", "Um tipo de cultura"], answer: 2, why: "Permitem encontrar outra vez a zona exata." },
      { objective: "O4", q: "O OpenDroneMap é:", options: ["Uma marca de drones", "Um pesticida", "Um satélite", "Um programa gratuito e de código aberto para juntar fotos de drone"], answer: 3, why: "O OpenDroneMap e o WebODM transformam fotos em mapas de graça." },
      { objective: "O4", q: "Antes de processar as fotos deve:", options: ["Dar nome à pasta e fazer uma cópia de segurança", "Apagar metade das fotos", "Mudar à mão o nome de cada foto", "Desligar o computador"], answer: 0, why: "Bons nomes e uma cópia de segurança evitam perder dados." },
      { objective: "O5", q: "Um GeoTIFF é:", options: ["Um formato de vídeo", "Uma imagem que guarda a sua localização na Terra", "Uma peça do drone", "Uma mensagem de texto"], answer: 1, why: "Os programas de mapas usam a localização incluída para o colocar no sítio certo." },
      { objective: "O5", q: "No QGIS, o NDVI calcula-se com:", options: ["A ferramenta de impressão", "O botão de e-mail", "A Calculadora Raster", "O controlo do volume"], answer: 2, why: "A Calculadora Raster faz contas com as bandas da imagem." },
      { objective: "O5", q: "Com apenas uma câmara de cor, um índice de verde é:", options: ["Exatamente igual ao NDVI", "Impossível", "Melhor do que o NDVI", "Um guia aproximado, menos fiável do que o NDVI"], answer: 3, why: "Os índices RGB não têm o infravermelho próximo, por isso são só um guia aproximado." },
      { objective: "O5", q: "Uma camada num SIG é:", options: ["Um conjunto de dados do mapa mostrado por cima de outros", "Uma bateria de drone", "Uma doença da cultura", "Um documento legal"], answer: 0, why: "Os limites, os pontos e as imagens são, cada um, uma camada." },
      { objective: "O6", q: "Um bom relatório de ação para o campo é:", options: ["Vinte páginas de números", "Uma página, com palavras simples, um mapa e os próximos passos", "Só as fotos originais", "Só a fórmula do NDVI"], answer: 1, why: "Os agricultores ocupados precisam de um plano curto e claro." },
      { objective: "O6", q: "O que NÃO deve estar no seu relatório?", options: ["A data e a fase da cultura", "As zonas numeradas", "Um pesticida e uma dose escolhidos só a partir do mapa", "A quem contactar"], answer: 2, why: "Um conselho sobre químicos precisa de um diagnóstico confirmado por uma fonte qualificada." },
      { objective: "O6", q: "Porquê combinar uma data para o próximo voo?", options: ["Para gastar as baterias", "Porque a lei manda voar todas as semanas", "Para vender mais voos", "Para ver se a ação resultou"], answer: 3, why: "Um mapa de seguimento mostra se o problema foi resolvido." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      3,
      5,
      7,
      8,
      11,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do trabalho e verifique-a outra vez.",
    criteria: [
      {
        name: "Mapa da saúde das culturas",
        objective: "O5",
        notYet: "Não há mapa, ou não tem legenda nem limite.",
        meets: "Um mapa NDVI ou a cores com legenda, um intervalo de cores que mostra as diferenças e o limite do campo.",
        exceeds: "Indica a fórmula do NDVI ou o índice usado e os seus limites."
      },
      {
        name: "Zonas com problemas",
        objective: "O1",
        notYet: "Menos de três zonas, ou zonas escolhidas só pela cor.",
        meets: "Pelo menos três zonas com problemas, numeradas, com base nas diferenças dentro do campo.",
        exceeds: "Compara as zonas com um mapa anterior do mesmo campo."
      },
      {
        name: "Plano de verificação no terreno",
        objective: "O3",
        notYet: "Não há plano, ou só \"ir ver\".",
        meets: "Para cada zona, o que procurar, com as coordenadas e a forma de registar os resultados.",
        exceeds: "Indica as causas prováveis a verificar em cada zona a partir do padrão no mapa."
      },
      {
        name: "Relatório de ação",
        objective: "O6",
        notYet: "Mais de uma página, ou sem próximos passos.",
        meets: "Uma página com o mapa, os resultados, a causa provável, o grau de certeza, um próximo passo por zona e a quem contactar.",
        exceeds: "Escrito na língua do agricultor e combina quando voar outra vez."
      },
      {
        name: "Conselhos seguros",
        objective: "O2",
        notYet: "Recomenda um pesticida ou uma dose a partir do mapa.",
        meets: "Trata os padrões como pistas e envia as perguntas sobre químicos a um extensionista, a uma loja agropecuária ou a uma clínica de plantas.",
        exceeds: "Explica ao agricultor porque é que o padrão precisa de ser confirmado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que dizem ter entregado um relatório de ação a um agricultor em 60 dias (inquérito de seguimento)",
      "Agricultores que dizem ter agido com base num relatório e ter confirmado com um especialista antes de pulverizar",
      "Alunos que continuam para o Curso 4 da série de drones"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com o QGIS e o OpenDroneMap (WebODM) gratuitos instalados",
      "Um conjunto de dados de drone de um campo real, ou um conjunto de exemplo gratuito",
      "Um telefone com GPS e uma aplicação de mapas para as verificações no terreno",
      "Cerca de 60 minutos no total, em sessões curtas, mais o tempo de processamento e o tempo para escrever o relatório"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e processe um conjunto de dados de exemplo comum antes da aula, porque a junção pode levar uma hora ou mais.",
      "Faça o passo do NDVI ao vivo no QGIS, para que os alunos vejam a Calculadora Raster e a rampa de cores.",
      "Se possível, percorram juntos um campo real para verificar duas zonas no terreno.",
      "Nunca deixe os alunos recomendarem um pesticida ou uma dose a partir de um mapa; chame um extensionista ou uma clínica de plantas para o diagnóstico.",
      "Avalie o relatório com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
