"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-precision-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const COPERNICUS = { name: "Copernicus Data Space Ecosystem e Copernicus Browser (dados Sentinel gratuitos e abertos)", url: "https://dataspace.copernicus.eu/" };
const ESA_S2 = { name: "Agência Espacial Europeia (ESA): Sentinel-2 (resolução de 10 m, nova imagem a cada 5 dias)", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2" };
const DEAFRICA = { name: "Digital Earth Africa (serviços de satélite gratuitos, incluindo anomalias de NDVI e mapas de terras de cultivo)", url: "https://www.digitalearthafrica.org/" };
const GPS_ACC = { name: "GPS.gov: precisão do GPS (smartphones com cerca de 4,9 m a céu aberto)", url: "https://archive.gps.gov/systems/gps/performance/accuracy/" };
const IFDC_KITS = { name: "IFDC: Avaliação de kits portáteis de análise de solo, lições aprendidas", url: "https://hub.ifdc.org/handle/20.500.14297/2026" };
const EMBU = { name: "Avaliação do desempenho de sensores próximos para análise do solo em pequenas machambas no condado de Embu, Quénia", url: "https://alliancebioversityciat.org/publications-data/performance-evaluation-proximal-sensors-soil-assessment-smallholder-farms-embu" };
const ISDA = { name: "iSDAsoil: mapas das propriedades do solo de toda a África a 30 m (PLOS Biology, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584968/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, Organização de Investigação Agrícola e Pecuária do Quénia)", url: "https://www.kalro.org" };

module.exports = {
  id: "agri-precision-agriculture-pt",
  lang: "pt",
  translationOf: "agri-precision-agriculture",
  category: "Agriculture (Africa)",
  name: "Agricultura de Precisão: Monitorização por Satélite e Sensores de Solo",
  skills: "Ver as diferenças dentro de um campo, Ler com cuidado mapas de NDVI de satélite gratuitos, Mapear campos com o GPS do telefone, Escolher análises e sensores de solo e saber quanto confiar neles, Comparar custos e benefícios, Fazer um mapa de zonas do campo com um plano para cada zona",
  outcome: "dividir um dos seus campos em zonas usando mapas de satélite gratuitos, o GPS do telefone, análises de solo e os seus próprios olhos e registos, e escrever para cada zona um plano de baixo custo que consegue pagar e verificar.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, gestores de machambas, jovens empreendedores agrícolas e extensionistas que querem fazer agricultura \"de precisão\" sem máquinas grandes. Agricultura de precisão quer dizer dar a cada parte de um campo aquilo de que precisa, em vez de tratar o campo inteiro da mesma maneira.",
    "Vai aprender a ver as diferenças dentro de um campo, a ler mapas de culturas de satélite gratuitos (e a conhecer os seus limites), a mapear um campo e as suas zonas com o telefone, a escolher análises e sensores de solo e a julgar quanto confiar neles, e a decidir se uma ferramenta vale o seu custo. No fim, terá um mapa de zonas do seu próprio campo e um plano para cada zona.",
    "Não precisa de drone. Se quiser mapear com drone, os cursos \"Drones para a Monitorização Agrícola\" ensinam isso. Os valores em dinheiro são só exemplos. Cada lição termina com uma tarefa no seu próprio campo; uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Faça um mapa de zonas de um dos seus campos: percorra e registe o limite com uma aplicação de GPS no telefone, divida o campo em 2 a 4 zonas usando pelo menos dois tipos de provas (NDVI de satélite em duas datas, resultados de análise ou de kit de solo, colheitas passadas, o que vê), marque cada zona com o seu tamanho e as suas provas, e escreva um plano para cada zona (o que vai fazer de diferente, o seu custo em moeda local como exemplo, e como vai verificar na próxima época se funcionou).",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, gestores de machambas, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, na Costa do Marfim, no Senegal e em toda a África, que cultivam milho, arroz, mapira (sorgo), mandioca, feijão, amendoim, tomate, café e cacau em campos de menos de um hectare até algumas dezenas de hectares.",
    startingPoint: "Conhecem bem os seus campos a olho e usam um smartphone. A maioria trata cada campo da mesma maneira: uma só dose de adubo, uma só densidade de sementeira. Poucos usaram um mapa de satélite, uma ferramenta de área por GPS no telefone ou uma análise de solo, e muitos ouviram grandes promessas sobre sensores e aplicações.",
    gap: "Dentro de um só campo, o solo, a água e a colheita podem variar muito, por isso uma dose única desperdiça insumos em algumas partes e deixa outras com falta. Os alunos precisam de ver estas diferenças com ferramentas gratuitas e baratas, saber em que ferramentas se pode confiar e para quê, e transformá-las em planos de zona simples que compensem numa machamba pequena.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o curso existe também em espanhol, francês e árabe",
      "Aparelhos: um smartphone; um computador ajuda para os visualizadores de satélite, mas é opcional",
      "Campos pequenos e mistos: as imagens de satélite gratuitas (píxeis de cerca de 10 m) são grosseiras para parcelas de menos de meio hectare",
      "A cobertura de nuvens na época das chuvas limita as imagens de satélite",
      "Dinheiro: primeiro as ferramentas baratas; todos os valores são exemplos; nenhum produto é recomendado",
      "Pesticidas e adubos: só produtos registados, usados como diz o rótulo"
    ],
    prerequisites: "Saber usar um smartphone. \"Saúde e Fertilidade do Solo\" e \"Dados e Tecnologia Agrícolas\" ajudam se forem feitos antes."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Ao percorrer um dos seus próprios campos", action: "fazer a lista das diferenças dentro do campo sobre as quais a agricultura de precisão pode agir", standard: "indicando pelo menos três diferenças e como viu cada uma" },
    { id: "O2", condition: "Usando um visualizador de satélite gratuito como o Copernicus Browser", action: "encontrar o seu campo e comparar o seu NDVI em duas datas", standard: "e dizer uma coisa que o mapa mostra e uma coisa que não consegue mostrar" },
    { id: "O3", condition: "Usando uma aplicação de GPS no telefone", action: "registar o limite de um campo e os limites das suas zonas e ler as suas áreas", standard: "contando com um erro de cerca de 5 metros" },
    { id: "O4", condition: "Podendo escolher entre uma análise de laboratório, um kit de análise ou um sensor portátil", action: "escolher um método de análise do solo, tirar uma amostra de cada zona e dizer quanto confiar em cada resultado", standard: "confiando mais no pH do que nas leituras de azoto, fósforo e potássio dos kits" },
    { id: "O5", condition: "Com uma ferramenta ou prática de precisão e os números do seu campo", action: "comparar o seu custo com o benefício esperado e decidir se a usa", standard: "usando um orçamento parcial simples em moeda local" },
    { id: "O6", condition: "Com provas de pelo menos duas fontes", action: "dividir um campo em 2 a 4 zonas de gestão e escrever um plano para cada zona", standard: "com cada plano ao seu alcance e verificável na próxima época" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ver o seu campo em partes",
      lessons: [
        {
          title: "O que é a agricultura de precisão numa machamba pequena",
          objectives: ["O1"],
          minutes: 5,
          goal: "Fazer a lista das diferenças dentro de um dos seus campos que pode gerir em separado.",
          text: [
            "Agricultura de precisão quer dizer gerir as partes de um campo de maneira diferente, porque elas são diferentes. Num campo de milho, um canto pode ser arenoso e seco, a parte baixa encharcada e o meio rico porque o gado ficava lá. Tratar o campo inteiro da mesma maneira desperdiça adubo e semente em algumas partes e deixa outras com falta.",
            "Nas grandes explorações isto faz-se com tratores que mudam a dose sozinhos. Numa machamba pequena pode fazer o mesmo à mão: mais estrume onde o solo é pobre, drenagem na mancha encharcada, outra variedade no alto seco, ou nenhum adubo onde a cultura nunca compensa. A ideia é a mesma: observar, medir, decidir por zona e verificar o resultado.",
            "Você já sabe muito só de olhar. Percorra o campo e anote onde a cultura está baixa, amarela ou falhada, onde a água fica parada, onde aparecem ervas daninhas como a Striga, e onde as colheitas foram boas ou más. Pergunte aos trabalhadores que sacham e colhem: eles veem todos os cantos. Os mapas de satélite, o GPS e as análises de solo, nas próximas lições, ajudam a confirmar e a medir o que vê."
          ],
          steps: ["Percorra o campo todo, as bordas e o meio.", "Anote onde a cultura está fraca, onde a água fica parada, onde as ervas daninhas ou as pragas são piores.", "Pergunte aos trabalhadores onde as colheitas são boas ou más.", "Escreva cada diferença e como a viu.", "Marque-as num desenho simples do campo."],
          words: [["Agricultura de precisão", "gerir partes diferentes de um campo de maneira diferente, com base na observação e na medição."], ["Variabilidade", "quanto o solo, a água ou o crescimento da cultura mudam de uma parte do campo para outra."], ["Zona de gestão", "uma parte de um campo gerida como uma só unidade porque se comporta de maneira parecida."]],
          slides: [
            { title: "Um campo, muitas partes", bullets: ["Alto arenoso, parte baixa encharcada, antigo curral rico", "O mesmo tratamento desperdiça insumos"] },
            { title: "Precisão à mão", bullets: ["Mais estrume onde o solo é pobre", "Drenagem na mancha encharcada", "A variedade certa para cada parte"] },
            { title: "Observar, medir, decidir, verificar", bullets: ["Os seus olhos e registos vêm primeiro", "As ferramentas confirmam e medem"] },
            { title: "Percorra e pergunte", bullets: ["Cultura fraca, amarela ou falhada", "Água parada, ervas daninhas, pragas", "Pergunte aos trabalhadores"] }
          ],
          tryIt: "Percorra um dos seus campos. Faça um desenho simples e marque pelo menos três diferenças (por exemplo uma mancha fraca, uma mancha encharcada, uma mancha com muitas ervas). Ao lado de cada uma, escreva como a viu: a olho, pelas colheitas ou pelos trabalhadores.",
          youCanNow: "ver um campo como partes diferentes e fazer a lista das diferenças que pode gerir em separado.",
          quickCheck: [
            { objective: "O1", q: "Qual é a ideia principal da agricultura de precisão?", options: ["Comprar as máquinas mais caras", "Usar a mesma dose em todo o lado", "Gerir as partes de um campo de maneira diferente", "Cultivar só com drones"], answer: 2, why: "Dá a cada parte do campo aquilo de que precisa." },
            { objective: "O1", q: "Quem lhe pode dizer depressa onde as colheitas são fracas num campo?", options: ["Os trabalhadores que o sacham e colhem", "Um anúncio de um sensor", "Um comprador na cidade", "Ninguém"], answer: 0, why: "Os trabalhadores veem todos os cantos do campo durante a época." }
          ]
        },
        {
          title: "Mapas de satélite gratuitos e o que o NDVI mostra",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparar o NDVI do seu campo em duas datas num visualizador de satélite gratuito.",
          text: [
            "Os satélites europeus Sentinel-2 fotografam toda a África cerca de 5 em 5 dias, com píxeis de 10 metros (um píxel é um quadrado de 10 m x 10 m). As imagens são gratuitas e abertas. O Copernicus Browser deixa vê-las sem pagar; pode começar sem conta, e uma conta gratuita dá mais opções. A Digital Earth Africa também oferece serviços de satélite gratuitos feitos para África, como mapas de anomalias de NDVI e de terras de cultivo.",
            "O NDVI (Índice de Vegetação por Diferença Normalizada) é um número calculado a partir das cores que as plantas refletem. Folhas verdes, sãs e densas dão um NDVI alto; solo nu, cultura seca ou rala dão um NDVI baixo. No visualizador, encontre o seu campo, escolha a vista NDVI e compare duas datas, por exemplo quatro e oito semanas depois da sementeira. Uma mancha que continua baixa quando o resto está alto merece uma visita a pé.",
            "O que o NDVI NÃO mostra: a causa. Um NDVI baixo pode ser seca, encharcamento, falta de azoto, pragas, doenças, ervas daninhas ou uma sementeira tardia. Também não vê por baixo das nuvens, e na época das chuvas pode esperar semanas por uma imagem limpa. Em campos com menos de meio hectare, ou em parcelas compridas e estreitas, os píxeis de 10 m são grosseiros e misturam a cultura ou as árvores do vizinho. As ervas daninhas também podem parecer verdes e sãs. Por isso, o NDVI diz onde olhar, e os seus pés dizem porquê."
          ],
          steps: ["Abra o Copernicus Browser no navegador do computador ou do telefone.", "Procure a sua zona e aproxime a imagem do seu campo.", "Escolha uma imagem com poucas nuvens e a vista NDVI.", "Compare duas datas da mesma época.", "Marque as manchas baixas no seu desenho e vá a pé até elas para encontrar a causa."],
          words: [["Sentinel-2", "um par de satélites europeus que tiram imagens gratuitas da Terra cerca de 5 em 5 dias, com detalhe de 10 m."], ["NDVI", "um número tirado das cores do satélite que mostra quão verdes e densas estão as plantas."], ["Píxel", "um quadrado de uma imagem de satélite; no Sentinel-2, 10 m x 10 m."]],
          slides: [
            { title: "Imagens de satélite gratuitas", bullets: ["Sentinel-2: cerca de 5 em 5 dias, píxeis de 10 m", "Copernicus Browser: ver de graça", "Digital Earth Africa: serviços gratuitos para África"] },
            { title: "O que o NDVI mostra", bullets: ["Alto: plantas verdes e densas", "Baixo: cultura nua, seca ou rala", "Compare duas datas"] },
            { title: "O que o NDVI NÃO mostra", bullets: ["A causa de uma mancha baixa", "Nada por baixo das nuvens", "Detalhe em parcelas de menos de meio hectare"] },
            { title: "O mapa mostra onde, os pés mostram porquê", bullets: ["Marque as manchas baixas", "Vá até elas e encontre a causa"] }
          ],
          sources: [COPERNICUS, ESA_S2, DEAFRICA],
          tryIt: "Abra o Copernicus Browser, encontre um dos seus campos (ou um campo perto de si) e veja o NDVI em duas datas limpas desta época. Marque qualquer mancha baixa no seu desenho, depois vá a pé até ela e escreva qual pensa ser a causa.",
          youCanNow: "ler um mapa de NDVI de satélite gratuito do seu campo e usá-lo para decidir onde olhar, não qual é a causa.",
          quickCheck: [
            { objective: "O2", q: "Uma mancha do seu campo de milho tem NDVI baixo. O que isso lhe diz?", options: ["Tem falta de azoto", "Tem lagarta-do-funil-do-milho", "Precisa de rega", "As plantas ali estão menos verdes ou ralas, por isso vá lá e descubra porquê"], answer: 3, why: "O NDVI mostra onde o crescimento é fraco, não a causa." },
            { objective: "O2", q: "Porque é que um mapa Sentinel-2 gratuito pode ser difícil de usar numa parcela de 0,2 hectares?", options: ["Os píxeis de 10 m são grosseiros e misturam a terra vizinha", "As imagens são só para a Europa", "Custa demasiado", "O NDVI não funciona no milho"], answer: 0, why: "Uma parcela de 0,2 ha tem só umas duas dezenas de píxeis, muitos misturados com as bordas." }
          ]
        },
        {
          title: "Mapear um campo com o GPS do telefone",
          objectives: ["O3"],
          minutes: 5,
          goal: "Registar o limite de um campo e as suas zonas com uma aplicação de GPS e ler as suas áreas.",
          text: [
            "O GPS do telefone pode mapear o seu campo. Muitas aplicações gratuitas registam um limite percorrido a pé, ou deixam marcar pontos à volta do campo e depois mostram a área. Também pode marcar um ponto numa aplicação de mapas e partilhar as suas coordenadas. Saber o tamanho real de um campo e de cada zona é importante: o adubo, a semente, a mão de obra e a colheita por acre ou por hectare dependem disso, e muitos agricultores descobrem que o campo é maior ou menor do que pensavam.",
            "O GPS não é exato. A céu aberto, os smartphones costumam acertar a cerca de 5 metros, e pior perto de árvores, de casas e em vales. Numa parcela pequena esse erro conta: caminhe devagar, fique parado alguns segundos em cada canto, mantenha o telefone a céu aberto e percorra o limite duas vezes para comparar. Se as duas áreas forem muito diferentes, percorra-o outra vez.",
            "Mapeie também as zonas. Percorra a borda da mancha encharcada ou do alto arenoso e guarde-a como uma forma separada, ou marque pontos nos seus cantos. Dê a cada forma o nome do campo e da zona (\"C2 Zona A encharcada\") e guarde o ficheiro ou uma captura de ecrã com a área. Estas formas são a base do seu mapa de zonas na Lição 6."
          ],
          steps: ["Abra uma aplicação de área por GPS ou de mapas ao ar livre, a céu aberto.", "Percorra devagar o limite do campo, parando em cada canto.", "Leia e anote a área; percorra outra vez para verificar.", "Percorra ou marque as bordas de cada zona e guarde cada uma com um nome.", "Guarde o ficheiro ou uma captura de ecrã com as áreas."],
          words: [["GPS", "Sistema de Posicionamento Global: satélites que deixam o telefone saber onde está na Terra."], ["Limite", "a borda de um campo."], ["Hectare", "uma área de 100 m x 100 m, cerca de 2,5 acres."]],
          slides: [
            { title: "O seu telefone pode mapear um campo", bullets: ["Percorra o limite ou marque os cantos", "Leia a área", "O tamanho do campo muda todos os números por acre"] },
            { title: "O GPS não é exato", bullets: ["Cerca de 5 m a céu aberto", "Pior perto de árvores, casas, vales"] },
            { title: "Leituras melhores", bullets: ["Caminhe devagar, pare nos cantos", "Percorra duas vezes e compare"] },
            { title: "Mapeie as zonas", bullets: ["Uma forma guardada por zona", "Nome: C2 Zona A encharcada", "Guarde a área"] }
          ],
          sources: [GPS_ACC],
          tryIt: "Use uma aplicação de GPS no telefone para percorrer duas vezes o limite de um campo e anote as duas áreas. Depois mapeie a borda de uma zona que encontrou na Lição 1, dê-lhe um nome e anote a sua área.",
          youCanNow: "mapear um campo e as suas zonas com o GPS do telefone e anotar as suas áreas, contando com o erro do GPS.",
          quickCheck: [
            { objective: "O3", q: "Percorreu o limite de um campo duas vezes e obteve 0,9 acres e 1,4 acres. O que faz?", options: ["Faz a média e para", "Percorre outra vez devagar, parando nos cantos, a céu aberto", "Usa o número maior", "Desiste do GPS"], answer: 1, why: "Uma grande diferença quer dizer leituras más; percorra outra vez com cuidado." },
            { objective: "O3", q: "Onde é que o GPS do telefone costuma ser menos preciso?", options: ["Num campo aberto", "Num dia de sol", "Numa planície", "Debaixo de árvores e perto de casas"], answer: 3, why: "As árvores e as casas bloqueiam e refletem os sinais dos satélites." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ver o seu campo em partes",
        questions: [
          { objective: "O1", q: "Um pequeno agricultor põe mais estrume só na parte arenosa e pobre do campo. Isto é:", options: ["Desperdício", "Agricultura de precisão à mão", "Contra as regras", "Só possível com um trator"], answer: 1, why: "Gerir as partes de um campo de maneira diferente é o centro da agricultura de precisão." },
          { objective: "O2", q: "Com que frequência, mais ou menos, os satélites Sentinel-2 fotografam o mesmo lugar?", options: ["Cerca de 5 em 5 dias", "Uma vez por ano", "Todas as horas", "Só a pedido"], answer: 0, why: "Os dois satélites voltam ao mesmo lugar cerca de 5 em 5 dias; as nuvens podem esconder algumas imagens." },
          { objective: "O2", q: "Qual destas coisas o NDVI NÃO lhe consegue dizer?", options: ["Onde a cultura está mais verde", "Onde o crescimento é fraco", "Porque é que uma mancha está fraca", "Como duas datas se comparam"], answer: 2, why: "Muitas causas dão NDVI baixo; vá a pé até à mancha para descobrir qual é." },
          { objective: "O3", q: "A precisão normal do GPS de um smartphone a céu aberto é de cerca de:", options: ["1 centímetro", "500 metros", "5 quilómetros", "5 metros"], answer: 3, why: "Cerca de 4,9 m a céu aberto, pior perto de árvores e casas." },
          { objective: "O3", q: "Porque é importante saber a área real do campo?", options: ["A semente, o adubo, a mão de obra e a colheita por acre dependem dela", "Os compradores pagam pela área", "As aplicações de GPS precisam dela", "Não é importante"], answer: 0, why: "Áreas erradas tornam errados todos os números por acre." }
        ]
      }
    },
    {
      name: "Capítulo 2: Medir o solo e planear por zona",
      lessons: [
        {
          title: "Kits e sensores de solo: quanto confiar neles",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escolher um método de análise do solo para cada zona e dizer quanto confiar nos resultados.",
          text: [
            "Há três maneiras principais de analisar o solo. Uma análise de laboratório (de um instituto nacional de investigação como o KALRO, de uma universidade ou de um laboratório privado acreditado) é a mais exata, demora dias a semanas e custa mais. Um kit de análise de campo (tiras de cor ou produtos químicos em tubos) dá resultados rápidos no próprio lugar. Um sensor ou medidor eletrónico portátil dá uma leitura em minutos e é muitas vezes vendido com uma aplicação.",
            "Testes independentes de kits portáteis, como uma avaliação do IFDC, mostraram boa concordância com os laboratórios para o pH do solo, mas resultados irregulares para o azoto, o fósforo e o potássio. Uma investigação no condado de Embu, no Quénia, mostrou que alguns sensores portáteis avançados conseguem prever bem várias propriedades do solo, mas esses aparelhos são caros e precisam de calibração com amostras de laboratório. Tenha cuidado com sondas baratas que dizem ler NPK na hora: os números de precisão do próprio vendedor não são uma prova independente.",
            "Um plano prático: envie a um laboratório uma boa amostra composta por zona de poucos em poucos anos, e use um kit ou um medidor para verificações rápidas do pH entre as análises de laboratório. Tire cada amostra sempre da mesma maneira (muitas pequenas porções, misturadas, da mesma profundidade, longe de caminhos e de montes de estrume). Os mapas gratuitos iSDAsoil estimam as propriedades do solo em toda a África a 30 m e são úteis para ver o quadro geral, mas são estimativas feitas por modelos, não uma análise do seu campo."
          ],
          steps: ["Decida: laboratório, kit ou sensor, para cada pergunta que tem.", "Tire uma amostra composta por zona: muitas porções, mesma profundidade, misturadas.", "Envie as amostras a um laboratório acreditado de poucos em poucos anos.", "Use um kit ou um medidor para verificações rápidas do pH entretanto.", "Escreva cada resultado ao lado da sua zona, com o método usado."],
          words: [["Amostra composta", "muitas pequenas porções de solo de uma zona misturadas numa só amostra."], ["Calibração", "verificar e acertar um sensor comparando-o com um resultado de laboratório de confiança."], ["pH", "uma medida de quão ácido ou alcalino é o solo."]],
          slides: [
            { title: "Três maneiras de analisar", bullets: ["Laboratório: o mais exato, mais lento, custa mais", "Kit de campo: rápido, no próprio lugar", "Sensor portátil: minutos, muitas vezes com uma aplicação"] },
            { title: "Quanto confiar neles", bullets: ["Kits: bons para o pH", "Kits: irregulares para N, P e K", "Sensores avançados precisam de calibração"] },
            { title: "Um plano prático", bullets: ["Uma amostra de laboratório por zona de poucos em poucos anos", "Kit ou medidor para verificações rápidas do pH", "Sempre o mesmo método de amostragem"] },
            { title: "Mapas de solo gratuitos", bullets: ["iSDAsoil: estimativas a 30 m", "Um quadro geral, não a análise do seu campo"] }
          ],
          sources: [IFDC_KITS, EMBU, ISDA, KALRO],
          tryIt: "Para cada zona do seu desenho, escreva que análise vai usar (laboratório, kit ou sensor) e porquê. Tire, ou planeie, uma amostra composta por zona, e escreva quanto confiaria num resultado de kit para o pH e para o azoto.",
          youCanNow: "escolher um método de análise do solo para cada zona e julgar quanto confiar nos resultados.",
          quickCheck: [
            { objective: "O4", q: "Para que resultado os kits de solo portáteis são mais fiáveis, comparados com um laboratório?", options: ["Azoto", "Potássio", "pH do solo", "Fósforo"], answer: 2, why: "Testes independentes mostraram boa concordância no pH, mas N, P e K irregulares." },
            { objective: "O4", q: "Um vendedor diz que a sua sonda barata lê NPK na hora com 95 por cento de precisão. Você deve:", options: ["Pedir resultados de testes independentes e comparar algumas leituras com um laboratório", "Comprá-la já", "Usá-la em vez de todas as análises de laboratório", "Acreditar porque tem uma aplicação"], answer: 0, why: "Os números do próprio vendedor não são uma prova independente; compare com um laboratório." }
          ]
        },
        {
          title: "Custos e benefícios, e quando os drones ajudam",
          objectives: ["O5"],
          minutes: 5,
          goal: "Comparar o custo de uma ferramenta ou prática de precisão com o benefício esperado.",
          text: [
            "Uma ferramenta de precisão só faz sentido se o benefício for maior do que o custo. Use um orçamento parcial simples: quanto vou ganhar ou poupar a mais (mais colheita, menos adubo ou semente desperdiçados), e quanto vai custar a mais (a análise, o sensor, a aplicação, o seu tempo, a mão de obra)? Só como exemplo: se as zonas poupam 2 sacos de adubo numa zona fraca que nunca compensou (2 x GHS 400 = GHS 800 poupados), e a análise de laboratório custou GHS 300, compensa.",
            "Nas machambas pequenas, comece pelo que é gratuito ou barato: os seus olhos, os registos, o GPS do telefone e os mapas de satélite gratuitos. Depois gaste numa análise de laboratório por zona. Compre um sensor portátil só se o for usar muitas vezes e o puder comparar com um laboratório. Os grupos podem dividir os custos: uma cooperativa na Costa do Marfim ou um grupo de agricultores na Nigéria pode comprar um só medidor ou pagar as análises de laboratório em conjunto.",
            "Os drones dão imagens de alguns centímetros em vez de 10 metros, voam por baixo das nuvens e podem voar no dia em que precisa. Ajudam em culturas de alto valor, em campos maiores, ou num grupo que compra um serviço em conjunto. Custam muito mais, e pilotá-los exige uma licença da autoridade da aviação civil. Se acha que precisa de um, faça os cursos \"Drones para a Monitorização Agrícola\" e \"Drones Agrícolas: Análise de Dados e Agricultura de Precisão\"; este curso não os repete."
          ],
          steps: ["Escreva quanto custa a ferramenta ou prática: dinheiro, tempo, mão de obra.", "Escreva o ganho ou a poupança a mais que espera, com números de exemplo.", "Compare: benefício menos custo.", "Comece pelas ferramentas gratuitas; depois uma análise de laboratório por zona; depois um sensor ou um serviço de drone só se compensar.", "Pense em dividir os custos com um grupo."],
          words: [["Orçamento parcial", "uma conta simples só dos custos a mais e dos benefícios a mais de uma mudança."], ["Serviço de drone", "uma empresa que faz voar um drone sobre o seu campo, a troco de pagamento."], ["Retorno", "o que recebe de volta pelo que gasta."]],
          slides: [
            { title: "O benefício tem de ganhar ao custo", bullets: ["Ganho ou poupança a mais", "Menos o custo a mais", "Só exemplo: GHS 800 poupados contra GHS 300 da análise"] },
            { title: "Gaste por esta ordem", bullets: ["Grátis: olhos, registos, GPS, satélite", "Análise de laboratório por zona", "Sensor só se usado muitas vezes e verificado"] },
            { title: "Divida os custos", bullets: ["Grupos e cooperativas", "Um só medidor ou muitas análises em conjunto"] },
            { title: "Quando os drones ajudam", bullets: ["Detalhe de centímetros, por baixo das nuvens", "Culturas de alto valor, campos maiores, serviços de grupo", "Veja os cursos de drones; é preciso licença"] }
          ],
          tryIt: "Escolha uma ferramenta ou prática de precisão para a sua machamba (uma análise de laboratório por zona, um medidor de solo, um serviço de drone ou adubo por zona). Escreva um orçamento parcial com números de exemplo em moeda local: custo a mais, benefício a mais e a sua decisão.",
          youCanNow: "decidir se uma ferramenta de precisão vale a pena para a sua machamba com um orçamento parcial simples.",
          quickCheck: [
            { objective: "O5", q: "Numa machamba pequena, o que deve normalmente experimentar primeiro?", options: ["Um drone", "Uma grande rede de sensores", "Uma assinatura cara de uma aplicação", "Os seus olhos, registos, o GPS do telefone e mapas de satélite gratuitos"], answer: 3, why: "Comece pelas ferramentas gratuitas e gaste só onde compensa." },
            { objective: "O5", q: "Um medidor de solo custa mais do que pouparia em cinco épocas. Qual é uma escolha sensata?", options: ["Comprá-lo na mesma", "Dividir o custo com um grupo, ou usar análises de laboratório em vez dele", "Pedir dinheiro emprestado para comprar dois", "Deixar de adubar"], answer: 1, why: "Se o benefício sozinho não ganha ao custo, divida-o ou escolha um método mais barato." }
          ]
        },
        {
          title: "Fazer um mapa de zonas do campo e um plano para cada zona",
          objectives: ["O6", "O5"],
          minutes: 6,
          goal: "Dividir um campo em 2 a 4 zonas e escrever um plano para cada zona.",
          text: [
            "Agora junte as provas. Ponha as suas formas de GPS sobre o seu desenho. Para cada parte do campo, faça a lista do que sabe: NDVI em duas datas, resultados de análise ou de kit de solo, colheitas passadas, o que você e os trabalhadores veem. Uma zona precisa de pelo menos dois tipos de provas que concordem, por exemplo NDVI baixo e um resultado de pH baixo, ou uma mancha encharcada vista todas as épocas e colheitas fracas registadas.",
            "Mantenha simples: 2 a 4 zonas chegam numa machamba pequena. Dê-lhes nomes pelo que são: \"Zona A solo bom\", \"Zona B ácida e fraca\", \"Zona C encharcada\". Escreva a área de cada zona a partir do seu mapa de GPS.",
            "Depois escreva um plano para cada zona: o que vai fazer de diferente (mais composto e calcário onde o pH é baixo, como o laboratório aconselhar; valas de drenagem ou uma cultura de arroz ou de hortícolas na zona encharcada; uma dose de adubo mais baixa onde a cultura nunca compensa), quanto vai custar, como exemplo, na sua moeda, e como o vai verificar: registe a colheita por zona na altura da colheita e compare o NDVI na próxima época. Use só adubos e pesticidas registados, como diz o rótulo. Um plano de precisão só está certo se os registos da próxima época mostrarem que funcionou."
          ],
          steps: ["Ponha as formas de GPS, as notas de NDVI, os resultados do solo e as colheitas num só mapa.", "Desenhe 2 a 4 zonas onde dois tipos de provas concordam.", "Dê um nome a cada zona e escreva a sua área.", "Escreva um plano, um custo e uma verificação para cada zona.", "Registe a colheita por zona na altura da colheita e compare na próxima época."],
          words: [["Mapa de zonas", "um mapa de um campo dividido em zonas de gestão."], ["Prova", "um facto que pode mostrar, como um resultado de análise, uma imagem de NDVI ou um registo de colheita."], ["Calcário", "um tratamento do solo que torna o solo ácido menos ácido."]],
          slides: [
            { title: "Junte as provas", bullets: ["Formas de GPS e desenho", "NDVI em duas datas, resultados do solo", "Colheitas e o que vê"] },
            { title: "Desenhe 2 a 4 zonas", bullets: ["Dois tipos de provas têm de concordar", "Nomes pelo que são", "Escreva cada área"] },
            { title: "Um plano para cada zona", bullets: ["O que muda", "Custo de exemplo", "Como o vai verificar"] },
            { title: "Verifique na próxima época", bullets: ["Colheita por zona na altura da colheita", "Compare o NDVI", "Insumos registados, como diz o rótulo"] }
          ],
          tryIt: "Tarefa final: faça o mapa de zonas do seu campo com 2 a 4 zonas, cada uma marcada com a sua área e pelo menos dois tipos de provas. Escreva um plano para cada zona: a mudança, o custo de exemplo na sua moeda e como vai verificar na próxima época se funcionou.",
          youCanNow: "fazer um mapa de zonas do campo a partir de vários tipos de provas e escrever um plano verificável para cada zona.",
          quickCheck: [
            { objective: "O6", q: "O que é prova suficiente para desenhar uma zona?", options: ["NDVI baixo numa só data com nuvens", "Um palpite do vizinho", "NDVI baixo em duas datas e um resultado de pH baixo no solo", "Um anúncio"], answer: 2, why: "Dois tipos de provas que concordam tornam uma zona fiável." },
            { objective: "O6", q: "Como vai saber se o plano de uma zona funcionou?", options: ["Registando a colheita por zona e comparando na próxima época", "Supondo que funcionou", "Perguntando ao vendedor de insumos", "Olhando outra vez para o plano"], answer: 0, why: "Só os registos por zona mostram se a mudança compensou." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Medir o solo e planear por zona",
        questions: [
          { objective: "O4", q: "O que é uma amostra composta de solo?", options: ["Uma pazada do meio", "Muitas pequenas porções de uma zona misturadas", "Solo do monte de estrume", "Uma amostra da estrada"], answer: 1, why: "Misturar muitas porções dá uma imagem justa da zona." },
          { objective: "O4", q: "Os mapas gratuitos iSDAsoil servem melhor para:", options: ["Substituir todas as análises de solo", "Decidir as doses de pesticida", "Ver o quadro geral do solo antes de analisar o seu campo", "Medir a humidade do solo de hoje"], answer: 2, why: "São estimativas de modelos, não uma análise do seu campo." },
          { objective: "O5", q: "Um orçamento parcial compara:", options: ["O custo a mais e o benefício a mais de uma mudança", "Todos os custos da machamba em dez anos", "Só o preço da cultura", "O seu saldo no banco"], answer: 0, why: "Olha só para o que muda." },
          { objective: "O5", q: "Quando é que um serviço de drone pode fazer sentido?", options: ["Sempre, em todas as parcelas", "Nunca em África", "Só sem licença", "Em culturas de alto valor ou campos maiores, ou dividido por um grupo, quando compensa"], answer: 3, why: "Os drones custam mais; ajudam onde o valor é alto ou os custos são divididos." },
          { objective: "O6", q: "Quantas zonas sugere este curso para uma machamba pequena?", options: ["2 a 4", "20 a 40", "Uma", "Uma por planta"], answer: 0, why: "Poucas zonas chegam para gerir e verificar à mão." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Agricultura de Precisão: Monitorização por Satélite e Sensores de Solo",
    questions: [
      { objective: "O1", q: "Agricultura de precisão numa machamba pequena quer dizer:", options: ["Comprar um trator com sensores", "Gerir as partes do campo de maneira diferente", "Usar uma só dose de adubo em todo o lado", "Cultivar sem registos"], answer: 1, why: "Cada parte recebe aquilo de que precisa." },
      { objective: "O1", q: "Qual é uma diferença dentro de um campo sobre a qual pode agir?", options: ["A cor do seu telefone", "O preço no mercado", "Uma mancha encharcada na parte baixa", "A cultura do seu vizinho"], answer: 2, why: "Uma mancha encharcada pode ser drenada ou cultivada de outra maneira." },
      { objective: "O1", q: "O que vem primeiro na agricultura de precisão numa machamba pequena?", options: ["Percorrer o campo e anotar as diferenças", "Comprar um sensor", "Contratar um drone", "Mudar todos os insumos"], answer: 0, why: "Observar é grátis e orienta o resto." },
      { objective: "O2", q: "O que oferece o Sentinel-2 de graça?", options: ["Imagens com detalhe de 1 cm", "Previsões do tempo", "Análises de solo", "Imagens cerca de 5 em 5 dias com píxeis de 10 m"], answer: 3, why: "Os dados do Sentinel-2 são gratuitos e abertos, a 10 m." },
      { objective: "O2", q: "Um NDVI alto quer dizer normalmente:", options: ["Solo nu", "Plantas densas e verdes", "Água parada", "Uma nuvem"], answer: 1, why: "As folhas sãs refletem a luz de uma maneira que dá NDVI alto." },
      { objective: "O2", q: "Porque comparar o NDVI em duas datas?", options: ["Para ver que manchas continuam fracas enquanto as outras crescem", "Porque uma imagem está sempre errada", "Para deixar o mapa colorido", "Para contar as plantas"], answer: 0, why: "Uma mancha que continua baixa nas duas datas merece uma visita a pé." },
      { objective: "O2", q: "Na época das chuvas pode não ter uma imagem de satélite limpa porque:", options: ["Os satélites param", "O NDVI só funciona na época seca", "As nuvens escondem o chão", "As culturas estão altas demais"], answer: 2, why: "O Sentinel-2 não vê através das nuvens." },
      { objective: "O3", q: "Um hectare é:", options: ["10 m x 10 m", "1 km x 1 km", "Meio acre", "100 m x 100 m, cerca de 2,5 acres"], answer: 3, why: "Um hectare = 10 000 metros quadrados." },
      { objective: "O3", q: "Como obtém uma leitura de área por GPS melhor?", options: ["Correr depressa à volta do campo", "Caminhar devagar a céu aberto, parar nos cantos e percorrer duas vezes", "Ter o telefone no bolso", "Ficar debaixo de uma árvore"], answer: 1, why: "Caminhar devagar, parar e ter céu aberto melhoram a precisão." },
      { objective: "O3", q: "Porque mapear cada zona como uma forma própria com nome?", options: ["Para saber a área de cada zona para o planeamento e os registos", "Porque o GPS obriga", "Para partilhar nas redes sociais", "Não é útil"], answer: 0, why: "A área de cada zona determina os seus insumos e a colheita por acre." },
      { objective: "O4", q: "Que método de análise do solo é o mais exato?", options: ["Uma sonda barata", "Adivinhar pela cor", "Uma análise num laboratório acreditado", "Uma foto no WhatsApp"], answer: 2, why: "Os laboratórios são a referência com que se verificam os kits e os sensores." },
      { objective: "O4", q: "Os kits portáteis deram resultados irregulares para:", options: ["A cor do solo", "O azoto, o fósforo e o potássio", "O tamanho do campo", "A chuva"], answer: 1, why: "Testes independentes mostraram bom pH, mas N, P e K irregulares." },
      { objective: "O4", q: "Para confiar mais num sensor portátil, deve:", options: ["Usá-lo só à noite", "Nunca o comparar com nada", "Comprar um segundo", "Comparar algumas das suas leituras com resultados de laboratório"], answer: 3, why: "A calibração com um laboratório mostra quanto confiar nele." },
      { objective: "O5", q: "Só como exemplo: as zonas poupam GHS 800 de adubo e a análise de laboratório custou GHS 300. O resultado é:", options: ["Uma perda de GHS 500", "Nenhuma mudança", "Um ganho de GHS 500", "Um ganho de GHS 1100"], answer: 2, why: "800 poupados menos 300 de custo = 500 ganhos." },
      { objective: "O5", q: "Um grupo de agricultores pode baixar o custo das ferramentas de precisão:", options: ["Dividindo um só medidor ou pagando as análises de laboratório em conjunto", "Comprando cada um um drone", "Saltando todas as análises", "Usando adubo não registado"], answer: 0, why: "Dividir espalha o custo por muitas machambas." },
      { objective: "O5", q: "Para aprender a mapear com drones, deve:", options: ["Voar sem licença", "Fazer os cursos de drones que já existem e seguir as regras da aviação civil", "Usar só este curso", "Copiar um vídeo da internet"], answer: 1, why: "Os cursos de drones tratam disso; é preciso licença." },
      { objective: "O6", q: "Uma zona deve basear-se em:", options: ["Uma imagem com nuvens", "O conselho de um vendedor", "O seu humor", "Pelo menos dois tipos de provas que concordam"], answer: 3, why: "Duas fontes que concordam tornam uma zona fiável." },
      { objective: "O6", q: "Qual é um bom plano para uma zona encharcada?", options: ["Pôr mais adubo e esperar", "Ignorá-la", "Abrir valas de drenagem ou semear uma cultura que aguenta solo molhado, e registar o resultado", "Semear o mesmo que no alto seco"], answer: 2, why: "O plano corresponde à causa e é verificado com registos." },
      { objective: "O6", q: "O plano de cada zona deve incluir:", options: ["O que muda, o seu custo de exemplo e como o vai verificar", "Só a cor da zona", "Só o preço da cultura", "Nada; as zonas são só para os mapas"], answer: 0, why: "Um plano que não consegue custear nem verificar não é um plano." },
      { objective: "O6", q: "Os adubos e pesticidas de um plano de zona têm de ser:", options: ["Os mais baratos que encontrar", "Produtos registados usados como diz o rótulo", "Misturados a olho", "O dobro nas zonas fracas"], answer: 1, why: "Só os produtos registados, usados como diz o rótulo, são seguros e legais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 7, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Campo e zonas mapeados", objective: "O3", notYet: "Sem limite, ou áreas adivinhadas.", meets: "Limite percorrido com GPS e cada zona tem uma forma com nome e área.", exceeds: "Limite percorrido duas vezes e as áreas quase iguais." },
      { name: "Provas de satélite usadas com cuidado", objective: "O2", notYet: "Nenhuma vista de satélite, ou o NDVI tratado como a causa.", meets: "NDVI comparado em duas datas e as manchas baixas visitadas a pé para encontrar a causa.", exceeds: "Anota o que o mapa não conseguiu mostrar neste campo (nuvens, parcelas pequenas, ervas daninhas)." },
      { name: "Provas do solo", objective: "O4", notYet: "Nenhuma informação do solo, ou leituras de NPK de kit tratadas como exatas.", meets: "Um método de análise escolhido para cada zona, com quanto se pode confiar nele.", exceeds: "Pelo menos um resultado de laboratório por zona, ou leituras de kit comparadas com um laboratório." },
      { name: "Zonas e planos", objective: "O6", notYet: "Zonas desenhadas a partir de uma só fonte, ou nenhum plano por zona.", meets: "2 a 4 zonas, cada uma com dois tipos de provas e um plano, um custo e uma verificação.", exceeds: "Cada plano diz que registo vai mostrar na próxima época se funcionou." },
      { name: "Vale o custo", objective: "O5", notYet: "Ferramentas escolhidas sem contar o custo.", meets: "Um orçamento parcial com números de exemplo em moeda local apoia o plano.", exceeds: "Pensa em dividir os custos com um grupo, ou num método mais barato que dá a mesma resposta." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que aplicam pelo menos um plano de zona na época seguinte (seguimento aos 30 dias e no fim da época)",
      "Alunos que registam a colheita por zona na altura da colheita",
      "Poupanças de insumos ou mudanças na colheita por zona relatadas depois de uma época",
      "Grupos de agricultores que dividem análises de solo ou ferramentas depois do curso"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com uma aplicação gratuita de área por GPS ou de mapas",
      "Acesso à internet para o Copernicus Browser (no navegador de um computador ou de um telefone)",
      "Um campo para percorrer, papel, caneta e um desenho simples do campo",
      "Um trado ou uma pá e baldes limpos para as amostras compostas; um laboratório ou um kit, se houver",
      "Cerca de 90 minutos no total, mais o tempo no campo"
    ],
    facilitatorNotes: [
      "Faça as Lições 1 e 3 num campo: percorram juntos o limite e as zonas, e comparem as áreas de GPS dos vários telefones.",
      "Prepare com antecedência uma imagem limpa do Copernicus Browser de um campo local; as nuvens da época das chuvas podem impedir as demonstrações ao vivo.",
      "Não venda nem recomende nenhum sensor de solo ou aplicação; se vier um vendedor, peça resultados de testes independentes.",
      "Lembre aos alunos que o NDVI mostra onde, não porquê, e que as leituras de NPK dos kits precisam de ser verificadas num laboratório.",
      "Envie as perguntas sobre drones para os cursos de drones; este curso não ensina a voar.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
