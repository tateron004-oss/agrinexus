"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-precision-climate.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_CSA = { name: "FAO: Manual de Agricultura Climaticamente Inteligente (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const FAO_ITU_DRONES = { name: "FAO e UIT: E-agriculture in Action: Drones para a agricultura (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO e OMS: Orientações para a aplicação aérea de pesticidas (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const KCAA_UAS = { name: "Autoridade de Aviação Civil do Quénia (KCAA): Sistemas de Aeronaves Não Tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autoridade de Aviação Civil da Nigéria (NCAA): Nig.CARs 2023 Parte 21, Sistemas de Aeronaves Pilotadas Remotamente", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-precision-climate-pt",
  lang: "pt",
  translationOf: "agri-drones-precision-climate",
  category: "Agriculture (Africa)",
  name: "Drones para a Monitorização Agrícola 4: Precisão, Clima e Monitorização do Gado",
  skills: "Dividir um campo em zonas de gestão, Direcionar os insumos por zona, Avaliar a densidade de plantas e estimar a produção, Monitorizar a erosão, as cheias e a seca, Monitorizar o gado e as pastagens, Inspecionar as infraestruturas da exploração",
  outcome: "usar mapas de drone para gerir uma exploração mista por zonas e escrever um plano de monitorização para toda a época que inclua as culturas, os riscos climáticos, o gado e as infraestruturas da exploração.",
  about: [
    "Este é o Curso 4 da série de monitorização com drones, para agricultores, gestores de explorações agrícolas, técnicos de cooperativas e de extensão, e prestadores de serviços com drones no Quénia, na Nigéria e em toda a África. Deve saber fazer e ler um mapa de drone (Cursos 2 e 3).",
    "O Capítulo 1 é sobre agricultura de precisão: tratar cada parte de um campo de acordo com o que ela precisa, em vez de tratar o campo todo da mesma forma. Vai dividir um campo em zonas, direcionar a semente, o adubo e a mão de obra, e usar contagens de plantas para estimar a produção. O Capítulo 2 alarga o olhar a toda a exploração: os riscos climáticos e ambientais, como a erosão, as cheias e a seca, o gado e as pastagens, e as represas, os reservatórios de água, as vedações, os canais e as estufas que mantêm a exploração a funcionar.",
    "Os exemplos incluem milho e feijão no Vale do Rift, mandioca e inhame no sudoeste da Nigéria, chá em Kericho e explorações mistas de culturas e gado. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano de monitorização com drone para toda a época de uma exploração mista (real ou de exemplo, como 10 hectares com milho, feijão, um cercado de pastagem, 30 cabeças de gado bovino, um reservatório de água e uma vedação no limite): as zonas do campo principal e o que cada zona recebe, que voos vai fazer e quando (culturas, risco climático, gado, infraestruturas), o que vai procurar em cada voo e que ação cada resultado pode trazer.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agricultores, gestores de explorações agrícolas, técnicos de cooperativas e de extensão, e prestadores de serviços com drones no Quénia, na Nigéria e em toda a África que fazem o Curso 4 da série de monitorização com drones, muitas vezes em explorações mistas de culturas e gado.",
    startingPoint: "Os alunos sabem fazer e ler um mapa de drone (Cursos 2 e 3). A maioria ainda trata o campo todo da mesma forma, verifica o gado, as pastagens e as infraestruturas a pé, e reage à erosão, às cheias e à seca depois do dano. Poucos planeiam voos para toda a época.",
    gap: "Os campos desiguais desperdiçam insumos onde não compensam, e um aviso tardio de erosão, de períodos secos, de sobrepastoreio ou de uma represa com fugas custa colheitas e dinheiro. Um plano de monitorização para toda a época, com zonas, permite pôr os insumos e a mão de obra onde compensam e agir cedo sobre os riscos do clima, do gado e das infraestruturas.",
    constraints: [
      "Nível de leitura: palavras simples; cada termo da agricultura de precisão é explicado",
      "Aparelhos: mapas de drone de uma exploração real ou de exemplo; um telefone com GPS para marcar as zonas",
      "Regras: os voos precisam das autorizações do país; pulverizar com drone também precisa de autorizações para pesticidas",
      "Bem-estar animal e privacidade: não assuste nem persiga os animais; não filme pessoas nem casas sem autorização",
      "As doses e os números de produção vêm da experiência local ou da extensão, não do curso"
    ],
    prerequisites: "\"Drones para a Monitorização Agrícola 3: Saúde das Culturas, Pragas e Processamento de Dados\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com mapas de drone de mais de uma data e o conhecimento do agricultor", action: "dividir um campo em duas a quatro zonas de gestão e marcá-las no terreno", standard: "com cada zona com um nome e a sua razão explicada" },
    { id: "O2", condition: "Para cada zona de gestão", action: "decidir o que a zona recebe: semente, adubo, mão de obra ou uma correção", standard: "fazendo a ação corresponder à causa da zona e nunca planeando pulverização com drone sem autorizações" },
    { id: "O3", condition: "Com um mapa de drone e contagens de amostra", action: "calcular a densidade de plantas e um intervalo aproximado de produção", standard: "com a densidade comparada com o espaçamento previsto e a produção dada como um intervalo" },
    { id: "O4", condition: "Ao longo de uma época", action: "planear voos de drone para detetar o risco de erosão, de cheias e de seca e acompanhar as práticas climaticamente inteligentes", standard: "em datas fixas, para que os mapas possam ser comparados" },
    { id: "O5", condition: "Para um voo sobre o gado ou a pastagem", action: "planear um voo calmo e seguro para contar os animais e verificar a pastagem e os pontos de água", standard: "com o acordo do pastor e sem assustar os animais" },
    { id: "O6", condition: "Para as represas, canais, vedações, estufas e armazéns da exploração", action: "inspecioná-los a partir do ar e escrever uma lista de reparações", standard: "com o elemento, o local, o problema, a urgência e quem vai reparar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Agricultura de precisão",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zonas de gestão: um campo, necessidades diferentes",
          minutes: 5,
          goal: "Dividir um campo em duas a quatro zonas de gestão a partir de um mapa de drone e do conhecimento da exploração.",
          text: [
            "A maioria dos campos não é igual em todo o lado. A profundidade do solo, a inclinação, os antigos morros de formiga, o estrume de anos anteriores, o encharcamento e a sombra fazem algumas partes crescer melhor do que outras. Agricultura de precisão quer dizer gerir cada parte de acordo com as suas necessidades.",
            "Uma zona de gestão é uma área de um campo que se comporta da mesma forma época após época. Para desenhar as zonas, junte vários mapas de drone (NDVI ou a cores, de mais de uma data ou época) com o que o agricultor sabe: onde a água fica parada, onde o solo é pouco profundo, onde a cultura vai sempre bem.",
            "Mantenha tudo simples. Duas a quatro zonas chegam para a maioria das pequenas e médias explorações: por exemplo, uma zona forte, uma zona média e uma zona fraca e húmida. Dê-lhes nomes e marque-as com estacas ou pontos de GPS para que os trabalhadores as encontrem."
          ],
          steps: ["Junte mapas do campo de duas ou mais datas, se possível.", "Pergunte ao agricultor onde a cultura é sempre forte ou fraca, e porquê.", "Desenhe duas a quatro zonas que correspondam aos mapas e ao conhecimento do agricultor.", "Dê um nome a cada zona e marque-a no terreno com estacas ou pontos de GPS."],
          words: [["Agricultura de precisão", "gerir cada parte de um campo de acordo com o que ela precisa."], ["Zona de gestão", "uma parte de um campo que se comporta da mesma forma época após época e é gerida como uma só unidade."]],
          slides: [
            { title: "Os campos não são iguais", bullets: ["Solo, inclinação, água, sombra, estrume antigo", "Algumas partes crescem sempre melhor"] },
            { title: "Desenhar as zonas", bullets: ["Mapas de mais de uma data", "Mais o conhecimento do agricultor", "Áreas que se comportam igual em cada época"] },
            { title: "Mantenha simples", bullets: ["Duas a quatro zonas", "Forte, média, fraca ou húmida", "Marque-as no terreno"] }
          ],
          tryIt: "Desenhe um campo que conhece (ou use um mapa de exemplo). Marque duas a quatro zonas, dê-lhes nomes e escreva porque cada zona é diferente.",
          youCanNow: "dividir um campo em zonas de gestão simples usando mapas e o conhecimento do agricultor.",
          quickCheck: [
            { objective: "O1", q: "Qual é um conjunto sensato de zonas de gestão para o campo de um pequeno agricultor?", options: ["Uma zona forte, uma zona média e uma zona fraca e húmida", "Uma zona para cada planta", "Vinte zonas do mesmo tamanho", "Nenhuma zona"], answer: 0, why: "Duas a quatro zonas simples chegam para a maioria das pequenas e médias explorações." },
            { objective: "O1", q: "O agricultor diz que um canto vai sempre mal, mas o único mapa desta época mostra-o verde. O que faz?", options: ["Ignora o agricultor", "Desenha as zonas só a partir deste mapa", "Verifica mapas de outras datas e épocas e usa o conhecimento do agricultor", "Desiste das zonas"], answer: 2, why: "As zonas desenham-se a partir de vários mapas e datas, junto com o que o agricultor sabe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Direcionar os insumos por zona",
          minutes: 6,
          goal: "Decidir o que cada zona recebe: semente, adubo, mão de obra ou uma correção.",
          text: [
            "Depois de ter as zonas, pergunte o que cada uma precisa. Uma zona fraca com solo pouco profundo pode não compensar mais adubo; uma zona encharcada pode precisar de uma vala de drenagem, não de adubo; uma zona média pode dar o melhor retorno dos insumos extra. Isto é a gestão com taxa variável: doses diferentes em sítios diferentes.",
            "Nas grandes explorações, as máquinas podem aplicar taxas variáveis a partir de um mapa de prescrição. Nas pequenas explorações a mesma ideia funciona à mão: os trabalhadores põem mais ou menos adubo ou estrume em cada cova de plantação conforme a zona, voltam a semear as falhas só onde o drone as mostra, e sacham ou inspecionam primeiro as zonas com problemas.",
            "Alguns drones podem pulverizar ou espalhar. Pulverizar pesticidas com drone precisa de autorizações próprias da autoridade de aviação e da entidade que regula os pesticidas no seu país, de operadores formados e licenciados, e de práticas seguras como as das orientações da FAO e da OMS sobre aplicação aérea. Nunca pulverize, nem aconselhe a pulverizar, sem elas."
          ],
          steps: ["Para cada zona, escreva porque é fraca ou forte.", "Escolha a ação que corrige a causa: drenar, voltar a semear, mais ou menos adubo, sachar.", "Escreva a dose ou a tarefa de cada zona para que os trabalhadores a possam seguir.", "Pulverização com drone: só com as autorizações de aviação e de pesticidas exigidas."],
          words: [["Taxa variável", "aplicar quantidades diferentes de semente, adubo ou água em partes diferentes de um campo."], ["Mapa de prescrição", "um mapa que diz a uma pessoa ou a uma máquina quanto aplicar em cada zona."]],
          slides: [
            { title: "Corrija a causa", bullets: ["Solo pouco profundo: mais adubo pode não compensar", "Encharcada: drenar, não adubar", "Zona média: muitas vezes o melhor retorno"] },
            { title: "Taxa variável à mão", bullets: ["Mais ou menos por cova conforme a zona", "Voltar a semear as falhas só onde é preciso", "Sachar e inspecionar primeiro as zonas com problemas"] },
            { title: "Drones de pulverização", bullets: ["Precisam de autorização de aviação E de pesticidas", "Operadores formados e licenciados", "Siga as orientações da FAO/OMS sobre aplicação aérea"] }
          ],
          sources: [FAO_WHO_AERIAL, KCAA_UAS, NCAA_P21],
          tryIt: "Usando as suas zonas da Lição 1, escreva uma instrução de uma linha para cada zona que um trabalhador possa seguir (por exemplo: Zona C, canto húmido: abrir uma vala antes da adubação de cobertura; sem adubo extra).",
          youCanNow: "decidir e escrever o que cada zona de gestão deve receber, e saber quando a pulverização precisa de autorização especial.",
          quickCheck: [
            { objective: "O2", q: "Numa grande exploração, para que serve um mapa de prescrição?", options: ["Contar o gado", "Inspecionar as vedações", "Escrever o orçamento da exploração", "Dizer às máquinas que dose aplicar em cada sítio"], answer: 3, why: "Nas grandes explorações, as máquinas podem aplicar taxas variáveis a partir de um mapa de prescrição." },
            { objective: "O2", q: "O drone mostra falhas só na zona média. O que diz aos trabalhadores?", options: ["Voltar a semear o campo todo", "Voltar a semear as falhas só onde o drone as mostra", "Pôr adubo nas falhas", "Deixar as falhas"], answer: 1, why: "Nas pequenas explorações, os trabalhadores voltam a semear só onde o drone mostra falhas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Contagem de plantas e primeiras estimativas de produção",
          minutes: 5,
          goal: "Estimar a densidade de plantas e um intervalo aproximado de produção a partir de um mapa de drone e de contagens de amostra.",
          text: [
            "A densidade de plantas é o número de plantas que nasceram comparado com o número que foi semeado. Um mapa de drone com muito detalhe mostra bem as falhas. Alguns programas contam as plantas automaticamente; também pode contar à mão em quadrados de amostra no mapa.",
            "Para estimar a densidade: marque algumas áreas de amostra de tamanho conhecido em cada zona, conte as plantas e compare com o espaçamento previsto. Se um campo de milho foi semeado a 75 cm por 25 cm, o previsto é cerca de 53,000 plantas por hectare; se contar 40,000, a densidade é cerca de 75 por cento.",
            "Uma estimativa aproximada da produção multiplica as plantas por hectare por uma produção esperada por planta, tirada da experiência local ou dos números da extensão, zona a zona. Trate-a como um intervalo, não como uma promessa: o tempo, as pragas e as perdas na colheita mudam o número final. Mesmo assim, ajuda a planear cedo o armazenamento, as vendas e o transporte."
          ],
          steps: ["Marque no mapa quadrados de amostra de tamanho conhecido em cada zona.", "Conte as plantas em cada quadrado (a olho ou com um programa).", "Calcule as plantas por hectare e compare com o previsto.", "Multiplique pela produção esperada por planta, com números locais, para ter um intervalo.", "Escreva o intervalo e o que o pode mudar."],
          words: [["Densidade de plantas", "o número de plantas que nasceram comparado com o número semeado."], ["Estimativa de produção", "uma primeira previsão de quanto o campo vai produzir."]],
          slides: [
            { title: "Densidade de plantas", bullets: ["Plantas que nasceram vs plantas semeadas", "As falhas veem-se bem em mapas com muito detalhe"] },
            { title: "Contar por amostra", bullets: ["Quadrados de amostra em cada zona", "Contar as plantas, passar para um hectare", "Milho a 75 cm x 25 cm: cerca de 53,000 plantas por ha"] },
            { title: "Primeira estimativa de produção", bullets: ["Plantas por ha x produção esperada por planta", "Dê um intervalo, não uma promessa", "Ajuda a planear armazenamento, vendas e transporte"] }
          ],
          tryIt: "Uma zona de milho de 1 hectare foi semeada a 75 cm por 25 cm. As suas contagens de amostra indicam 44,000 plantas por hectare. Calcule a percentagem de densidade e depois escreva o que pode explicar as falhas e o que iria verificar.",
          youCanNow: "estimar a densidade de plantas e um intervalo aproximado de produção por zona a partir de um mapa de drone e de contagens de amostra.",
          quickCheck: [
            { objective: "O3", q: "Porque contar plantas em áreas de amostra de tamanho conhecido?", options: ["Para encontrar o limite da exploração", "Para calcular as plantas por hectare e comparar com o previsto", "Para medir a chuva", "Para verificar a bateria do drone"], answer: 1, why: "As contagens em áreas de tamanho conhecido dão as plantas por hectare, que se comparam com o espaçamento previsto." },
            { objective: "O3", q: "Um comprador pede-lhe a colheita exata um mês antes da colheita. O que lhe dá?", options: ["Um número exato como promessa", "Nada", "O número do ano passado", "Um intervalo aproximado, explicando que o tempo, as pragas e as perdas o podem mudar"], answer: 3, why: "Uma primeira estimativa de produção é um intervalo, não uma promessa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Agricultura de precisão",
        questions: [
          { objective: "O1", q: "O que é uma zona de gestão?", options: ["Um quadrado qualquer", "Uma parte de um campo que se comporta da mesma forma época após época", "O escritório da exploração", "Uma área onde é proibido voar"], answer: 1, why: "As zonas juntam áreas que respondem da mesma forma, para serem geridas da mesma forma." },
          { objective: "O1", q: "Qual é a melhor forma de desenhar as zonas?", options: ["Usar só um mapa de um único dia", "Copiar as zonas de um vizinho", "Juntar mapas de mais de uma data com o conhecimento do agricultor", "Desenhar quadrados iguais"], answer: 2, why: "Vários mapas mais o conhecimento local mostram padrões que se repetem." },
          { objective: "O2", q: "Uma zona é fraca porque a água fica parada depois da chuva. A melhor ação é:", options: ["Melhorar a drenagem", "Pôr o dobro do adubo", "Pulverizar pesticida", "Semear mais"], answer: 0, why: "Corrija a causa; o adubo não resolve o encharcamento." },
          { objective: "O2", q: "Um serviço de drones oferece-se para pulverizar pesticida no milho de um cliente. O que tem de existir?", options: ["Só a autorização do agricultor", "Nada mais", "Uma boa câmara", "Autorizações de aviação e de pesticidas e operadores licenciados"], answer: 3, why: "A pulverização com drone é uma operação regulada e de maior risco." },
          { objective: "O3", q: "Milho semeado a 75 cm x 25 cm tem como previsto cerca de:", options: ["5,300 plantas por hectare", "53,000 plantas por hectare", "530,000 plantas por hectare", "530 plantas por hectare"], answer: 1, why: "10,000 m2 a dividir por 0.1875 m2 por planta dá cerca de 53,000." }
        ]
      }
    },
    {
      name: "Capítulo 2: Clima, gado e infraestruturas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Monitorizar o risco climático e ambiental",
          minutes: 6,
          goal: "Usar voos de drone para detetar o risco de erosão, cheias e seca e acompanhar as práticas climaticamente inteligentes.",
          text: [
            "As alterações climáticas trazem chuvas mais fortes, períodos secos mais longos e mais calor a muitas zonas agrícolas. A FAO (a organização da ONU para a alimentação e a agricultura) descreve a agricultura climaticamente inteligente como uma agricultura que aumenta a produtividade e os rendimentos, ajuda as explorações a adaptar-se e a ganhar resiliência, e reduz ou retira as emissões de gases com efeito de estufa sempre que possível.",
            "Os drones ajudam na parte da adaptação. Depois de chuva forte, um voo mostra as ravinas, os terraços destruídos, as valas cheias de terra e os talhões alagados; os modelos de elevação mostram por onde a água vai correr da próxima vez. Nos períodos secos, os mapas térmicos e NDVI mostram que áreas secam primeiro. Ao longo das épocas, os mapas mostram se os terraços, as culturas de cobertura, a cobertura morta, a plantação de árvores e a captação de água estão a funcionar.",
            "Voe sobre a mesma área em datas fixas (por exemplo, antes das chuvas longas, depois da primeira tempestade forte, a meio da época e depois da colheita) e compare. Partilhe os mapas com o grupo de agricultores ou com os técnicos do condado ou do estado: mostram a toda a comunidade onde agir primeiro."
          ],
          steps: ["Escolha datas de voo fixas ligadas às épocas do ano.", "Depois de chuva forte: mapeie ravinas, terra arrastada, valas cheias de terra, talhões alagados.", "Nos períodos secos: mapeie que áreas secam primeiro com NDVI ou térmico.", "Em cada época: verifique terraços, culturas de cobertura, cobertura morta, árvores, captação de água.", "Compare os mapas ao longo do tempo e partilhe-os."],
          words: [["Agricultura climaticamente inteligente (CSA)", "agricultura que aumenta a produtividade, ajuda as explorações a adaptar-se às alterações climáticas e reduz as emissões sempre que possível."], ["Erosão", "solo levado pela água ou pelo vento."], ["Ravina", "um canal fundo aberto na terra pela água a correr."]],
          slides: [
            { title: "Agricultura climaticamente inteligente", bullets: ["Aumentar a produtividade e os rendimentos", "Adaptar-se e ganhar resiliência", "Reduzir as emissões sempre que possível"] },
            { title: "O que os drones mostram", bullets: ["Depois da chuva: ravinas, terra arrastada, talhões alagados", "Períodos secos: que áreas secam primeiro", "Se os terraços, a cobertura morta e as árvores funcionam"] },
            { title: "Voe em datas fixas", bullets: ["Antes das chuvas, depois de tempestades, a meio da época, depois da colheita", "Compare ao longo do tempo", "Partilhe com grupos de agricultores e técnicos"] }
          ],
          sources: [FAO_CSA, FAO_ITU_DRONES],
          tryIt: "Escreva um calendário anual de quatro voos climáticos para uma exploração que conhece, ligado às suas épocas de chuva e de seca. Para cada voo, escreva duas coisas que vai procurar.",
          youCanNow: "planear voos de drone que acompanham o risco de erosão, cheias e seca e verificam se as práticas climaticamente inteligentes funcionam.",
          quickCheck: [
            { objective: "O4", q: "Depois de chuva forte, o que ajuda a mostrar um modelo de elevação?", options: ["Que bois estão doentes", "O preço do milho", "Por onde a água vai correr da próxima vez", "Que semente foi certificada"], answer: 2, why: "Os modelos de elevação mostram a altura do terreno, por isso vê por onde a água vai correr da próxima vez." },
            { objective: "O4", q: "Depois de uma grande tempestade, os seus mapas mostram ravinas em várias explorações do grupo. O que faz?", options: ["Partilha os mapas com o grupo de agricultores e os técnicos do condado ou do estado", "Guarda os mapas só para si", "Apaga-os porque a tempestade já passou", "Da próxima vez voa só sobre a sua exploração"], answer: 0, why: "Os mapas partilhados mostram a toda a comunidade onde agir primeiro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Monitorizar o gado e as pastagens",
          minutes: 5,
          goal: "Planear um voo de drone calmo e seguro para contar os animais e verificar a pastagem e os pontos de água.",
          text: [
            "Nas fazendas de gado e nas grandes zonas de pastoreio, um drone pode contar bois, cabras ou camelos, encontrar animais perdidos ou doentes e verificar se os pontos de água e os bebedouros funcionam, poupando horas a pé ou de carro. As câmaras térmicas encontram os animais de madrugada ou no mato cerrado.",
            "Os animais podem assustar-se com os drones, sobretudo a pouca altura. Voe alto o suficiente para não os assustar, aproxime-se devagar pelo lado, nunca persiga nem junte animais com um drone, a não ser que tenha formação e seja permitido, e pare se eles começarem a correr. Peça autorização ao pastor antes de voar.",
            "Os mapas de pastagem (NDVI ou a cores) mostram onde o capim está forte, sobrepastoreado ou nu. Ao longo de uma época ajudam a planear o pastoreio rotativo e a encontrar terra que precisa de descanso. Nunca filme pessoas nem casas sem autorização."
          ],
          steps: ["Fale com o pastor ou o dono; combinem a hora e a área.", "Voe alto e aproxime-se devagar pelo lado.", "Conte os animais nas fotos, não a dar voltas baixas.", "Pelo caminho, verifique os pontos de água, os bebedouros e as vedações.", "Mapeie a pastagem: forte, sobrepastoreada, nua.", "Pare se os animais começarem a correr."],
          words: [["Pastoreio rotativo", "mudar os animais entre cercados para o capim descansar e voltar a crescer."], ["Sobrepastoreio", "quando os animais comem o capim mais depressa do que ele volta a crescer, deixando o chão nu."]],
          slides: [
            { title: "O que os drones fazem numa fazenda de gado", bullets: ["Contar animais, encontrar os perdidos ou doentes", "Verificar pontos de água e bebedouros", "Térmico de madrugada ou no mato cerrado"] },
            { title: "Primeiro, o bem-estar animal", bullets: ["Fale com o pastor", "Voe alto, aproxime-se devagar pelo lado", "Nunca persiga; pare se os animais correrem"] },
            { title: "Mapas de pastagem", bullets: ["Capim forte, sobrepastoreado ou nu", "Planear o pastoreio rotativo", "Encontrar terra que precisa de descanso"] }
          ],
          tryIt: "Escreva um plano de voo curto para contar 60 bois num cercado de 40 hectares: hora do dia, altura, aproximação, o que mais vai verificar e quando pararia.",
          youCanNow: "planear um voo calmo e seguro sobre o gado e a pastagem e usá-lo para apoiar as decisões de pastoreio.",
          quickCheck: [
            { objective: "O5", q: "O que pode um drone fazer numa fazenda de gado?", options: ["Contar os animais e verificar se os pontos de água e os bebedouros funcionam", "Levar o gado para o curral (boma)", "Tratar animais doentes", "Ordenhar as vacas"], answer: 0, why: "Os drones podem contar animais, encontrar os perdidos ou doentes e verificar os pontos de água, poupando caminhadas ou viagens de carro." },
            { objective: "O5", q: "Um pastor está a levar cabras perto do seu voo planeado. O que faz?", options: ["Voa baixo para ter fotos de perto", "Persegue as cabras para as juntar", "Fala primeiro com o pastor, voa alto e aproxima-se devagar pelo lado", "Passa por cima delas a direito e depressa"], answer: 2, why: "Fale com o pastor e voe alto e devagar pelo lado, para não assustar os animais." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Inspecionar as infraestruturas da exploração",
          minutes: 5,
          goal: "Inspecionar represas, canais, vedações, estufas e armazéns a partir do ar e fazer a lista de reparações.",
          text: [
            "As infraestruturas da exploração são caras e fáceis de esquecer até falharem. Um voo curto de drone pode verificar fissuras e infiltrações na parede de um reservatório de água ou de uma pequena represa, fugas ou entupimentos nos canais e tubagens de rega, ruturas nas vedações do limite, rasgões nos telhados e redes das estufas, e danos nos telhados dos armazéns.",
            "Voe devagar ao longo da estrutura com a câmara inclinada, não só a apontar para baixo. Mantenha uma distância segura das linhas elétricas e dos edifícios, e fique dentro das suas autorizações. Tire fotos nos mesmos pontos de cada vez para poder comparar.",
            "Transforme as fotos numa lista de reparações: elemento, local, problema, urgência e quem vai reparar. Volte a voar depois das reparações e antes das chuvas, quando uma falha faria mais estragos."
          ],
          steps: ["Faça a lista das estruturas a verificar e dos seus locais.", "Voe devagar ao longo de cada uma com a câmara inclinada.", "Fotografe os mesmos pontos de cada vez.", "Escreva uma lista de reparações: elemento, local, problema, urgência, quem repara.", "Volte a voar depois das reparações e antes das chuvas."],
          words: [["Reservatório de água (water pan)", "uma lagoa escavada que recolhe a água da chuva para os animais ou para a rega."], ["Infiltração", "água que passa devagar através da parede de uma represa ou da margem de um canal."]],
          slides: [
            { title: "O que inspecionar", bullets: ["Reservatórios de água e paredes de pequenas represas", "Canais e tubagens", "Vedações, telhados de estufas e de armazéns"] },
            { title: "Como voar", bullets: ["Devagar ao longo da estrutura", "Câmara inclinada, não só para baixo", "Os mesmos pontos de foto de cada vez"] },
            { title: "Das fotos às reparações", bullets: ["Elemento, local, problema, urgência, quem", "Voe outra vez depois das reparações e antes das chuvas"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de monitorização para toda a época de uma exploração mista: as zonas e o que cada uma recebe, os voos sobre as culturas, os voos climáticos, um voo sobre o gado e a pastagem, um voo às infraestruturas, o que procura em cada voo e que ação cada resultado pode trazer.",
          youCanNow: "inspecionar as infraestruturas da exploração com drone e planear a monitorização de toda a exploração ao longo de uma época.",
          quickCheck: [
            { objective: "O6", q: "Que problema pode um voo de drone encontrar numa estufa?", options: ["O preço de venda da cultura", "O pH do solo", "O nome de uma praga", "Rasgões no plástico do telhado ou nas redes"], answer: 3, why: "Os voos podem mostrar rasgões nos telhados e nas redes das estufas antes de piorarem." },
            { objective: "O6", q: "As chuvas começam daqui a três semanas e a parede do reservatório de água foi reparada a semana passada. O que faz?", options: ["Espera até depois das chuvas", "Volta a voar para verificar a reparação antes das chuvas", "Nunca mais a verifica", "Voa só a apontar para baixo, muito alto"], answer: 1, why: "Volte a voar depois das reparações e antes das chuvas, quando uma falha faria mais estragos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Clima, gado e infraestruturas",
        questions: [
          { objective: "O4", q: "A agricultura climaticamente inteligente da FAO tem três objetivos. Qual é um deles?", options: ["Ajudar as explorações a adaptar-se e a ganhar resiliência", "Usar o máximo de adubo possível", "Cortar todas as árvores", "Cultivar só uma cultura"], answer: 0, why: "A CSA procura produtividade, adaptação e resiliência, e menos emissões." },
          { objective: "O4", q: "Quando é uma boa altura para um voo climático para encontrar ravinas e terra arrastada?", options: ["Só à meia-noite", "Nunca", "Depois da primeira tempestade forte da época", "Durante uma feira de drones"], answer: 2, why: "Os danos recentes veem-se bem logo depois de chuva forte." },
          { objective: "O5", q: "O gado começa a correr enquanto o drone está por cima. Deve:", options: ["Voar mais baixo para o acalmar", "Persegui-lo de volta", "Continuar a dar voltas", "Parar e afastar o drone"], answer: 3, why: "O bem-estar dos animais e a segurança vêm primeiro." },
          { objective: "O5", q: "Um mapa de pastagem mostra um cercado com muito chão nu. Isto indica:", options: ["Sobrepastoreio; o cercado pode precisar de descanso", "O drone está avariado", "Só chuva a mais", "Pastagem perfeita"], answer: 0, why: "Chão nu na pastagem muitas vezes quer dizer que os animais comeram mais depressa do que o capim voltou a crescer." },
          { objective: "O6", q: "Ao inspecionar a parede de um reservatório de água, deve:", options: ["Voar só a apontar para baixo, muito depressa", "Voar devagar ao longo dela com a câmara inclinada", "Voar por cima das pessoas que estão perto", "Não a inspecionar"], answer: 1, why: "Uma câmara inclinada mostra as fissuras e as infiltrações na parede." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones para a Monitorização Agrícola 4: Precisão, Clima e Monitorização do Gado",
    questions: [
      { objective: "O1", q: "Agricultura de precisão quer dizer:", options: ["Tratar todas as partes de um campo da mesma forma", "Gerir cada parte de um campo de acordo com as suas necessidades", "Usar só drones", "Cultivar de noite"], answer: 1, why: "Faz corresponder os insumos e o trabalho ao que cada área precisa." },
      { objective: "O1", q: "Porque é que a maioria dos campos não é igual em todo o lado?", options: ["Os drones tornam-nos desiguais", "Não é verdade, são iguais", "O solo, a inclinação, a água, a sombra e o uso anterior são diferentes", "As sementes são sempre más"], answer: 2, why: "A natureza e a história do cultivo fazem algumas áreas crescer melhor." },
      { objective: "O1", q: "Quantas zonas costumam chegar numa pequena exploração?", options: ["Duas a quatro", "Cinquenta", "Cem", "Nenhuma"], answer: 0, why: "Poucas zonas simples são fáceis de gerir e de marcar." },
      { objective: "O1", q: "Porque marcar as zonas no terreno?", options: ["Para decorar a exploração", "A lei obriga a usar estacas", "Para assustar os pássaros", "Para os trabalhadores encontrarem e tratarem cada zona"], answer: 3, why: "Os trabalhadores precisam de ver onde cada zona começa e acaba." },
      { objective: "O2", q: "Taxa variável quer dizer:", options: ["Quantidades diferentes em sítios diferentes", "A mesma quantidade em todo o lado", "Mudar a velocidade do drone", "Mudar os preços das culturas"], answer: 0, why: "As doses mudam de zona para zona conforme a necessidade." },
      { objective: "O2", q: "Numa pequena exploração, a taxa variável pode ser feita por:", options: ["Só por grandes máquinas", "Trabalhadores que põem mais ou menos adubo por cova conforme a zona", "Satélites", "Não pode ser feita"], answer: 1, why: "A ideia funciona à mão com instruções claras por zona." },
      { objective: "O2", q: "Uma zona fraca com solo pouco profundo e pedregoso pode:", options: ["Precisar sempre do dobro do adubo", "Ser o melhor sítio para mais semente", "Não compensar mais adubo", "Precisar de pulverização"], answer: 2, why: "O solo limita o crescimento; os insumos extra podem ser desperdiçados." },
      { objective: "O2", q: "Quem tem de autorizar a pulverização de pesticidas com drone?", options: ["Só o vendedor do drone", "Só o agricultor", "Só um vizinho", "A autoridade de aviação e a entidade que regula os pesticidas"], answer: 3, why: "As regras de aviação e as de pesticidas aplicam-se aos drones de pulverização." },
      { objective: "O3", q: "A densidade de plantas é:", options: ["As plantas que nasceram vs as plantas semeadas", "A altura do drone", "A placa da exploração", "O preço da semente"], answer: 0, why: "Mostra se a cultura se estabeleceu bem." },
      { objective: "O3", q: "Conta 40,000 plantas de milho por hectare contra um previsto de cerca de 53,000. A densidade é cerca de:", options: ["25 por cento", "50 por cento", "75 por cento", "100 por cento"], answer: 2, why: "40,000 a dividir por 53,000 dá cerca de 0.75." },
      { objective: "O3", q: "Uma primeira estimativa de produção deve ser dada como:", options: ["Uma promessa exata", "Um segredo", "Um intervalo que pode mudar", "O valor de um empréstimo"], answer: 2, why: "O tempo, as pragas e as perdas mudam a produção final." },
      { objective: "O4", q: "Qual é uma prática climaticamente inteligente que os drones podem ajudar a acompanhar?", options: ["Queimar os restos das culturas", "Lavrar a subir e a descer a encosta", "Cortar todas as árvores", "Terraços, cobertura morta e plantação de árvores"], answer: 3, why: "Os mapas mostram se estas práticas estão a funcionar ao longo do tempo." },
      { objective: "O4", q: "Num período seco, que mapas mostram que áreas secam primeiro?", options: ["Mapas NDVI ou térmicos", "Um mapa de estradas", "Uma lista de preços", "Um cartaz sobre a chuva"], answer: 0, why: "O NDVI e o térmico mostram o vigor das plantas e o stress do calor." },
      { objective: "O4", q: "Porque voar sobre a mesma área em datas fixas?", options: ["Para gastar mais baterias", "Para comparar as mudanças ao longo do tempo", "Porque os drones precisam de rotina", "Para filmar os vizinhos"], answer: 1, why: "Mapas repetidos mostram tendências e o efeito das ações." },
      { objective: "O5", q: "Antes de um voo sobre o gado deve:", options: ["Voar baixo por cima da manada", "Perseguir os animais para um só sítio", "Falar com o pastor e combinar a hora e a área", "Voar à velocidade máxima"], answer: 2, why: "A autorização e uma aproximação calma protegem os animais e as pessoas." },
      { objective: "O5", q: "Numa fazenda de gado, as câmaras térmicas ajudam a:", options: ["Fazer crescer o capim", "Reparar vedações", "Ler os brincos das orelhas", "Encontrar animais de madrugada ou no mato cerrado"], answer: 3, why: "Os animais aparecem como manchas quentes." },
      { objective: "O5", q: "Pastoreio rotativo quer dizer:", options: ["Mudar os animais entre cercados para o capim voltar a crescer", "Manter os animais no mesmo sítio o ano todo", "Pastar só de noite", "Dar só feno"], answer: 0, why: "Deixar os cercados descansar permite ao capim recuperar." },
      { objective: "O6", q: "Infiltração na parede de uma represa quer dizer:", options: ["A represa está cheia de peixe", "A água está a passar devagar através dela", "A parede é nova", "Está a chover"], answer: 1, why: "A infiltração pode enfraquecer a parede e deve ser reparada." },
      { objective: "O6", q: "Uma boa lista de reparações das infraestruturas inclui:", options: ["Só fotos", "O modelo do drone", "Elemento, local, problema, urgência e quem vai reparar", "Os preços do mercado"], answer: 2, why: "Dados claros fazem com que as reparações se façam." },
      { objective: "O6", q: "Quando é mais útil uma verificação das infraestruturas?", options: ["Nunca", "Só depois de uma falha", "Durante uma tempestade", "Antes das chuvas e depois das reparações"], answer: 3, why: "Corrigir os problemas antes das chuvas evita falhas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      7,
      8,
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique-a outra vez.",
    criteria: [
      {
        name: "Zonas de gestão",
        objective: "O1",
        notYet: "Não há zonas, ou as zonas foram desenhadas a partir de um só mapa, sem razão.",
        meets: "Duas a quatro zonas com nome no campo principal, a partir de mapas e do conhecimento do agricultor, e como estão marcadas.",
        exceeds: "Usa mapas de mais de uma data ou época."
      },
      {
        name: "O que cada zona recebe",
        objective: "O2",
        notYet: "Todas as zonas recebem o mesmo tratamento, ou está planeada pulverização com drone sem autorizações.",
        meets: "Cada zona tem uma ação que corresponde à sua causa: semente, adubo, mão de obra ou uma correção.",
        exceeds: "Inclui uma verificação da densidade de plantas e um intervalo aproximado de produção por zona."
      },
      {
        name: "Voos climáticos",
        objective: "O4",
        notYet: "Não há voos climáticos nem ambientais.",
        meets: "Voos em datas fixas para verificar a erosão, as cheias e a seca, e a que ação cada resultado levaria.",
        exceeds: "Acompanha uma prática climaticamente inteligente, como terraços ou cobertura morta, ao longo da época."
      },
      {
        name: "Gado e pastagem",
        objective: "O5",
        notYet: "Não há voos sobre o gado, ou os voos assustariam os animais.",
        meets: "Voos para contar os animais e verificar a pastagem e os pontos de água, com o acordo do pastor e a uma altura segura.",
        exceeds: "Liga os mapas de pastagem a um plano de pastoreio rotativo."
      },
      {
        name: "Infraestruturas",
        objective: "O6",
        notYet: "As represas, as vedações ou outras estruturas não estão incluídas.",
        meets: "Voos para inspecionar o reservatório de água, as vedações e outras estruturas, com um formato de lista de reparações.",
        exceeds: "Marcados para antes das chuvas e depois das reparações, com fotos dos mesmos pontos."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano de monitorização",
      "Alunos que dizem gerir um campo por zonas ou seguir um plano de monitorização da época dentro de uma época (inquérito de seguimento)",
      "Explorações ou grupos que dizem ter agido cedo sobre erosão, seca, sobrepastoreio ou uma falha nas infraestruturas",
      "Alunos que continuam para o Curso 5 da série de drones"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Mapas de drone de uma exploração real, ou a exploração mista de exemplo do curso",
      "Um telefone com GPS, e estacas ou bandeiras para marcar as zonas",
      "Um caderno ou uma folha de cálculo para a tabela das zonas e o plano da época",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo para escrever o plano de monitorização"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois desenhem as zonas num mapa de exemplo em grupo, antes de os alunos desenharem as suas.",
      "Traga da extensão as produções esperadas locais e os conselhos de adubação; não dê doses você mesmo.",
      "Não planeie nem demonstre pulverização com drone sem autorizações de aviação e de pesticidas.",
      "Se voar perto do gado, fale primeiro com o pastor, voe alto e pare se os animais começarem a correr.",
      "Avalie o plano de monitorização com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
