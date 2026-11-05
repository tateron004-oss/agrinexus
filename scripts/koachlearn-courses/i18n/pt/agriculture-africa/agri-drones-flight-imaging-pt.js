"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-flight-imaging.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA, Autoridade da Aviação Civil da Nigéria): Nig.CARs 2023 Part 21, sistemas de aeronaves pilotadas remotamente", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA, Autoridade da Aviação Civil do Quénia): sistemas de aeronaves não tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const FAO_ITU_DRONES = { name: "FAO e UIT: E-agriculture in Action: Drones for Agriculture (A agricultura digital em ação: drones para a agricultura, 2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-flight-imaging-pt",
  lang: "pt",
  translationOf: "agri-drones-flight-imaging",
  category: "Agriculture (Africa)",
  name: "Drones para a Monitorização Agrícola 2: Operações de Voo, Imagens e Sensores",
  skills: "Fazer a verificação antes do voo, Voar com o drone sempre à vista, Planear um voo automático de mapeamento, Escolher a altura e a sobreposição, Escolher o sensor certo, Captar imagens nítidas e uniformes",
  outcome: "planear e preparar um voo de mapeamento sobre um terreno agrícola: escolher o sensor, a altura, a sobreposição e a hora do dia, fazer as verificações antes do voo e captar um conjunto completo de imagens nítidas e uniformes que possam ser juntadas num mapa.",
  about: [
    "Este é o Curso 2 da série de monitorização com drones, para agricultores, extensionistas, trabalhadores do agronegócio e jovens prestadores de serviços com drones no Quénia, na Nigéria e em toda a África. Faça primeiro o Curso 1, ou confirme que já conhece as regras de drones do seu país e tem o registo, a licença e as autorizações que elas exigem.",
    "No Capítulo 1 aprende a preparar um drone, a voar com segurança com ele sempre à vista e a planear um voo automático de mapeamento com a altura e a sobreposição certas. No Capítulo 2 aprende o que mostra cada sensor (cor, multiespectral, térmico) e como a luz, o vento e a hora fazem a diferença entre um mapa útil e um mapa que não serve para nada.",
    "Os exemplos usam trabalhos agrícolas reais: um terreno de milho de 2 hectares, um talhão de chá, um campo de mandioca, uma estufa de horticultura. Cada lição termina com uma pequena tarefa de prática. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano de voo de imagens completo para um terreno de milho de 2 hectares (real ou de exemplo): objetivo do voo, sensor, altura de voo e o pormenor de imagem que a sua aplicação de voo mostra, sobreposição frontal e lateral, velocidade de voo, número de baterias, hora do dia, limites de tempo meteorológico, local de descolagem e uma lista de verificação antes do voo. Se tiver um drone e as autorizações exigidas, faça o voo e verifique todas as imagens antes de sair do campo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agricultores, extensionistas, trabalhadores do agronegócio e jovens prestadores de serviços com drones no Quénia, na Nigéria e em toda a África que fazem o Curso 2 da série de monitorização com drones.",
    startingPoint: "Os alunos sabem o que um drone pode fazer numa exploração agrícola e como encontrar as regras de drones do seu país (Curso 1). Poucos já fizeram uma verificação escrita antes do voo, voaram uma grelha de mapeamento planeada, escolheram a altura e a sobreposição para o pormenor de que precisam, ou sabem que sensor e que luz dão um mapa que se possa usar.",
    gap: "Voos mal preparados causam acidentes, e voos mal planeados ou feitos à hora errada dão imagens desfocadas e irregulares que não se conseguem juntar nem comparar, desperdiçando baterias, tempo e o dinheiro dos clientes. Planear e preparar bem um voo de mapeamento dá logo à primeira um conjunto de imagens completo e nítido.",
    constraints: [
      "Nível de leitura: palavras simples; cada termo de voo e de imagem é explicado",
      "Aparelhos: um telefone ou tablet com uma aplicação de mapeamento ajuda; só é preciso um drone para o voo opcional",
      "Regras: só se voa com o registo, a licença e as autorizações que o país exige",
      "Condições no campo: vento, calor, nuvens irregulares e falta de rede móvel em muitas explorações",
      "Tempo: lições curtas, mais tempo para escrever o plano de voo"
    ],
    prerequisites: "\"Drones para a Monitorização Agrícola 1: Introdução, Regulamentos e Segurança\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Antes de cada voo", action: "fazer uma verificação completa antes do voo da aeronave, das baterias, do comando, das definições e dos documentos", standard: "sem saltar nenhum ponto da lista" },
    { id: "O2", condition: "Num voo de prática ou autorizado", action: "descolar, voar um percurso simples e aterrar mantendo o drone à vista", standard: "dentro do limite legal de altura e aterrando com bateria de sobra" },
    { id: "O3", condition: "Para um campo que vai ser mapeado", action: "planear um voo de mapeamento em grelha com a altura, o pormenor da imagem, a sobreposição, a velocidade e as baterias", standard: "com uma sobreposição de cerca de 70 a 80 por cento para a frente e 60 a 70 por cento para o lado" },
    { id: "O4", condition: "Com uma imagem de drone a cores de alta resolução", action: "apontar falhas, ervas daninhas, água, acamamento e estragos", standard: "e marcar cada ponto para verificar a pé" },
    { id: "O5", condition: "Com uma pergunta sobre a exploração agrícola", action: "escolher entre um sensor RGB, multiespectral e térmico", standard: "com uma razão que sirva para a pergunta e para o custo" },
    { id: "O6", condition: "No dia de um voo de mapeamento", action: "definir a hora e os limites de luz e de vento e verificar todas as imagens antes de sair do campo", standard: "para que as imagens fiquem nítidas, com luz uniforme e completas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Operações de voo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Preparar o drone: a verificação antes do voo",
          minutes: 5,
          goal: "Fazer uma verificação completa do drone antes de cada voo.",
          text: [
            "A maioria dos acidentes com drones começa no chão: uma hélice rachada, uma bateria meio carregada, um mapa antigo na aplicação ou uma bússola que não foi calibrada. Uma lista de verificação escrita, usada todas as vezes, evita a maioria deles.",
            "Verifique a aeronave (estrutura, braços, hélices bem apertadas e sem estragos, câmara limpa e bem presa), as baterias (totalmente carregadas, sem inchaço, contactos limpos), o comando e o telefone ou tablet (carregados, aplicação atualizada antes de sair de casa, mapas offline descarregados se não houver rede no campo) e as definições (altura de regresso a casa acima da árvore ou do poste mais alto, ponto de partida registado).",
            "Faça também a verificação dos documentos: registo, licença de piloto e qualquer autorização de voo que a sua autoridade exija para este local, levados consigo ou no seu telefone."
          ],
          steps: ["Documentos: registo, licença, autorizações para este local.", "Aeronave: estrutura, braços, hélices, câmara.", "Baterias: carregadas, sem inchaço, contactos limpos.", "Comando e telefone ou tablet: carregados, aplicação atualizada, mapas offline prontos.", "Definições: altura de regresso a casa, ponto de partida, calibração da bússola se a aplicação pedir.", "Olhe à volta: pessoas, animais, vento, e depois comece."],
          words: [["Verificação antes do voo", "uma lista de verificações feitas antes de cada voo."], ["Regresso a casa (RTH)", "uma definição que faz o drone voltar sozinho ao local de descolagem, por exemplo quando a bateria está fraca ou o sinal se perde."], ["Ponto de partida", "o lugar para onde o drone volta, normalmente onde descolou."]],
          slides: [
            { title: "Os acidentes começam no chão", bullets: ["Hélices rachadas, baterias fracas", "Mapas antigos na aplicação, bússola não calibrada", "Uma lista usada todas as vezes evita a maioria"] },
            { title: "Verifique o equipamento", bullets: ["Estrutura, braços, hélices, câmara", "Baterias carregadas, sem inchaço", "Comando, telefone, aplicação atualizada, mapas offline"] },
            { title: "Verifique as definições", bullets: ["Altura de regresso a casa acima do obstáculo mais alto", "Ponto de partida registado", "Bússola calibrada se a aplicação pedir"] },
            { title: "Verifique os documentos", bullets: ["Registo e licença de piloto", "Autorizações para este local", "Leve-os consigo"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Escreva a sua própria lista de verificação antes do voo com pelo menos 12 pontos em quatro títulos: documentos, aeronave, baterias e comando, definições. Guarde-a no seu telefone.",
          youCanNow: "preparar um drone com uma verificação completa antes do voo que cobre documentos, aeronave, baterias, comando e definições.",
          quickCheck: [
            { objective: "O1", q: "O que é o ponto de partida?", options: ["A casa do piloto", "O lugar para onde o drone volta sozinho no regresso a casa", "O ponto mais alto da exploração", "A loja de drones"], answer: 1, why: "O ponto de partida é registado antes da descolagem para que o regresso a casa traga o drone de volta para lá." },
            { objective: "O1", q: "Vai a uma exploração sem rede móvel. O que faz antes de sair de casa?", options: ["Nada; a aplicação funciona na mesma", "Planeia atualizar a aplicação no campo", "Deixa as baterias por carregar", "Descarrega os mapas offline e atualiza a aplicação"], answer: 3, why: "A aplicação deve ser atualizada e os mapas offline descarregados antes de sair, porque pode não haver rede no campo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Voar com segurança com o drone à vista",
          minutes: 5,
          goal: "Descolar, voar um percurso simples e aterrar mantendo o drone à vista.",
          text: [
            "Linha de visão (VLOS) quer dizer que você, ou o seu observador, consegue ver o drone com os próprios olhos, sem binóculos, durante todo o voo. A maioria dos voos agrícolas de pequenos agricultores e de pilotos novos é VLOS. Voar para além da linha de visão precisa de uma autorização especial. A Part 21 da Nigéria, por exemplo, exige VLOS para drones mais pequenos e fixa uma altura máxima de 120 metros (400 pés) acima do solo para muitas operações; verifique os limites do seu país.",
            "Descole do seu local livre, suba até uma altura segura acima das árvores e paire durante alguns segundos para verificar que o drone está estável. Voe devagar. Mantenha o drone à sua frente, não por cima nem atrás de si, para não perder a noção do lado para onde ele está virado.",
            "Vigie a bateria e o vento. Aterre com bateria suficiente para uma aterragem segura, nunca no último por cento. Se o drone for muito arrastado pelo vento, traga-o de volta e aterre."
          ],
          steps: ["Fique no seu local de descolagem com o seu observador.", "Descole e suba acima das árvores; paire e verifique que está estável.", "Voe devagar num quadrado à sua frente, mantendo-o à vista.", "Vigie a bateria e o vento no ecrã.", "Volte, desça devagar e aterre com bateria de sobra."],
          words: [["VLOS", "linha de visão (visual line of sight): consegue ver o drone com os próprios olhos durante todo o voo."], ["BVLOS", "para além da linha de visão (beyond visual line of sight): voar mais longe do que consegue ver; precisa de uma autorização especial."], ["AGL", "acima do nível do solo (above ground level): altura medida a partir do chão por baixo do drone."]],
          slides: [
            { title: "Linha de visão", bullets: ["Você ou o seu observador veem sempre o drone", "Sem binóculos", "Para além da vista precisa de autorização especial"] },
            { title: "Conheça o limite de altura", bullets: ["Part 21 da Nigéria: 120 m (400 pés) AGL em muitos voos", "Verifique o limite do seu país"] },
            { title: "Voe bem", bullets: ["Suba acima das árvores, paire, veja se está estável", "Voe devagar, mantenha-o à sua frente", "Vigie a bateria e o vento"] },
            { title: "Aterre com margem", bullets: ["Nunca no último por cento", "Muito arrastado pelo vento: traga-o de volta e aterre"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Se tiver um drone e autorização, voe devagar um quadrado à sua frente e aterre com bateria de sobra. Se não tiver, use uma aplicação gratuita de simulador de drone ou veja um vídeo de formação e escreva os passos que viu.",
          youCanNow: "descolar, voar um percurso simples com o drone à vista e aterrar com segurança com bateria de sobra.",
          quickCheck: [
            { objective: "O2", q: "Em que ajuda manter o drone \"à sua frente\"?", options: ["A carregar a bateria", "A tornar as fotos mais claras", "A saber para que lado o drone está virado", "A voar para além da vista"], answer: 2, why: "Manter o drone à sua frente, e não por cima ou atrás, ajuda a não perder a noção da sua direção." },
            { objective: "O2", q: "Logo depois da descolagem o drone é muito arrastado pelo vento. O que faz?", options: ["Traz o drone de volta e aterra", "Sobe mais para fugir do vento", "Voa mais depressa para acabar", "Olha para o lado e deixa-o voar"], answer: 0, why: "Se o drone for muito arrastado pelo vento, traga-o de volta e aterre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear um voo automático de mapeamento",
          minutes: 6,
          goal: "Planear um voo de mapeamento em grelha com a altura, a sobreposição e a velocidade certas.",
          text: [
            "Para fazer um mapa de um campo, o drone voa para a frente e para trás em linhas retas (uma grelha, às vezes chamada padrão de cortador de relva) e tira fotos que se sobrepõem. As aplicações de mapeamento deixam desenhar o limite do campo e depois planeiam as linhas por você.",
            "A altura define o pormenor. Quanto mais alto voar, mais terreno cobre cada píxel e menos pormenor tem, mas acaba mais depressa. A aplicação mostra isto como distância de amostragem no solo (GSD), por exemplo 2 cm por píxel. Para contar plantas de milho precisa de pormenor fino; para ver zonas encharcadas, um pormenor mais grosseiro chega. Nunca planeie acima do seu limite legal de altura.",
            "A sobreposição é quanto cada foto partilha com a seguinte. O programa precisa de muita sobreposição para juntar as fotos num só mapa; muitos guias de mapeamento sugerem cerca de 70 a 80 por cento para a frente e 60 a 70 por cento para o lado, e mais sobre culturas altas e uniformes como o milho ou o chá. Voe devagar o suficiente para que as fotos fiquem nítidas e planeie baterias suficientes para acabar."
          ],
          steps: ["Desenhe o limite do campo na aplicação de mapeamento.", "Escolha a altura: veja a GSD que ela dá e fique abaixo do seu limite legal.", "Defina a sobreposição frontal e lateral (por exemplo 75 e 65 por cento).", "Verifique o tempo de voo e o número de baterias.", "Guarde o plano e reveja-o outra vez antes de ir para o campo."],
          words: [["Voo em grelha", "um voo em linhas retas, para a frente e para trás, que cobre o campo todo."], ["Sobreposição", "quanto cada foto partilha com a seguinte, em percentagem."], ["GSD", "distância de amostragem no solo (ground sampling distance): quanto terreno cobre um píxel, por exemplo 2 cm."], ["Ortomosaico", "uma grande imagem, com a precisão de um mapa, feita a juntar muitas fotos sobrepostas."]],
          slides: [
            { title: "Um voo de mapeamento", bullets: ["Linhas retas para a frente e para trás", "As fotos sobrepõem-se", "O programa junta-as num só mapa"] },
            { title: "A altura define o pormenor", bullets: ["Mais alto = menos pormenor, mais rápido", "Mais baixo = mais pormenor, mais baterias", "Fique abaixo do seu limite legal de altura"] },
            { title: "A sobreposição faz a junção funcionar", bullets: ["É comum cerca de 70-80% para a frente e 60-70% para o lado", "Mais sobre culturas altas e uniformes"] },
            { title: "Antes de ir", bullets: ["Verifique a GSD, o tempo de voo e as baterias", "Guarde o plano e reveja-o"] }
          ],
          tryIt: "Abra uma aplicação gratuita de mapeamento ou de planeamento de voo (ou o planeador de voo dentro da aplicação do seu drone) e desenhe um campo de 2 hectares. Experimente três alturas e escreva a GSD e o tempo de voo de cada uma.",
          youCanNow: "planear um voo de mapeamento em grelha e escolher a altura, a sobreposição e a velocidade para o trabalho.",
          quickCheck: [
            { objective: "O3", q: "O que é um padrão em grelha ou de cortador de relva?", options: ["Linhas retas para a frente e para trás sobre o campo", "Um círculo à volta de uma árvore", "Uma só foto tirada muito alto", "Um voo ao longo da estrada"], answer: 0, why: "Os voos de mapeamento seguem linhas retas para a frente e para trás para que as fotos cubram o campo todo com sobreposição." },
            { objective: "O3", q: "Quer contar plantas de milho mas o seu plano dá pouco pormenor. O que muda?", options: ["Voa mais depressa", "Reduz a sobreposição", "Voa mais baixo para ter uma GSD mais fina, dentro do limite legal", "Voa ao fim da tarde"], answer: 2, why: "Voar mais baixo dá mais pormenor por píxel, mas nunca acima ou para além dos seus limites legais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Operações de voo",
        questions: [
          { objective: "O1", q: "Porque usar todas as vezes uma lista escrita de verificação antes do voo?", options: ["Parece profissional", "A maioria dos acidentes começa com algo esquecido no chão", "O drone precisa dela para ligar", "Substitui a licença"], answer: 1, why: "Uma lista apanha hélices rachadas, baterias fracas e definições erradas." },
          { objective: "O1", q: "A que altura deve estar definido o regresso a casa?", options: ["O mais baixo possível", "Abaixo da árvore mais alta", "Acima da árvore ou do poste mais alto do local", "Não importa"], answer: 2, why: "O drone tem de passar por cima de todos os obstáculos quando volta sozinho." },
          { objective: "O2", q: "O que quer dizer VLOS?", options: ["Consegue ver o drone com os próprios olhos durante todo o voo", "O drone vê você", "O drone voa de noite", "O drone voa para além do horizonte"], answer: 0, why: "Linha de visão quer dizer ver o drone sem ajuda de instrumentos em todos os momentos." },
          { objective: "O3", q: "Num voo de mapeamento, voa mais alto. O que acontece?", options: ["Mais pormenor por píxel", "As fotos deixam de se sobrepor", "Nada muda", "Cada píxel cobre mais terreno e acaba mais depressa"], answer: 3, why: "Voos mais altos dão uma GSD mais grosseira mas cobrem o campo mais depressa." },
          { objective: "O3", q: "Porque é que as fotos de mapeamento precisam de muita sobreposição?", options: ["Para gastar mais bateria", "Para o programa as conseguir juntar num só mapa", "Para tornar as fotos mais claras", "Porque a lei exige 100 por cento"], answer: 1, why: "O programa de junção compara os pormenores que as fotos sobrepostas têm em comum." }
        ]
      }
    },
    {
      name: "Capítulo 2: Imagens aéreas e sensores",
      lessons: [
        {
          objectives: ["O4"],
          title: "Imagens a cores (RGB): o que pode ver",
          minutes: 5,
          goal: "Ler uma imagem de drone a cores de alta resolução para encontrar falhas, ervas daninhas, água e estragos.",
          text: [
            "Uma câmara normal a cores (RGB) é o sensor mais útil para a maioria das explorações agrícolas, e vem com quase todos os drones. A poucos centímetros por píxel consegue ver plantas de milho, feijão ou mandioca uma a uma.",
            "Nas imagens a cores procure: falhas nas linhas (má germinação ou plantas comidas por pragas), manchas de ervas daninhas entre as linhas, água parada e solo nu, milho ou mapira acamados (caídos), estragos de granizo ou de vento, gado ou cabras no lugar errado, e valas entupidas ou vedações partidas.",
            "As imagens a cores também podem dar sinais de falta de nutrientes ou de doença (amarelecimento, verde irregular), mas mostram-no mais tarde do que o olho no terreno ou uma câmara multiespectral. Marque sempre o ponto e verifique-o a pé."
          ],
          steps: ["Abra a imagem ou o mapa e afaste a vista para ver o campo todo.", "Procure tudo o que seja irregular: falhas, mudanças de cor, água, solo nu.", "Aproxime a vista em cada um.", "Marque cada ponto com um número e uma nota curta.", "Vá a pé até aos pontos para os verificar."],
          words: [["Imagem de alta resolução", "uma imagem com pormenor fino, em que cada píxel cobre um pequeno pedaço de terreno."], ["Acamamento", "quando os caules do milho, da mapira ou do trigo se dobram ou caem."]],
          slides: [
            { title: "RGB: o sensor de todos os dias", bullets: ["Vem com quase todos os drones", "Mostra plantas uma a uma a poucos cm por píxel"] },
            { title: "O que procurar", bullets: ["Falhas nas linhas, manchas de ervas daninhas", "Água parada, solo nu", "Milho acamado, estragos de granizo ou de vento", "Animais, vedações partidas, valas entupidas"] },
            { title: "Limites", bullets: ["Mostra tarde as doenças e a falta de nutrientes", "Verifique sempre os pontos a pé"] }
          ],
          tryIt: "Encontre na internet uma foto de drone ou uma vista de satélite de uma exploração agrícola (ou use uma sua). Escreva cinco coisas que consegue ver, marque onde está cada uma e diga o que verificaria no terreno.",
          youCanNow: "ler uma imagem de drone a cores e marcar falhas, ervas daninhas, água e estragos para verificar no terreno.",
          quickCheck: [
            { objective: "O4", q: "Numa imagem a cores, o que pode mostrar uma falha numa linha?", options: ["Adubo a mais", "Uma bateria forte", "Uma boa colheita", "Má germinação ou plantas comidas por pragas"], answer: 3, why: "As falhas nas linhas muitas vezes querem dizer que as sementes não nasceram ou que as plantas foram comidas." },
            { objective: "O4", q: "A imagem mostra uma mancha irregular e amarelada num campo de feijão. O que faz?", options: ["Pulveriza o campo todo", "Marca o ponto e verifica-o a pé", "Ignora", "Apaga a imagem"], answer: 1, why: "As imagens a cores podem dar sinais de problemas, mas o ponto tem de ser verificado no terreno." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sensores multiespectrais e térmicos",
          minutes: 6,
          goal: "Escolher entre sensores RGB, multiespectrais e térmicos para uma pergunta sobre a exploração.",
          text: [
            "As folhas verdes e saudáveis refletem muita luz infravermelha próxima, que o olho não consegue ver. As folhas com stress ou doentes refletem menos. Uma câmara multiespectral mede várias bandas de luz, incluindo o infravermelho próximo e a borda do vermelho (red edge), para que o programa possa calcular índices de vegetação como o NDVI, que mostram o vigor das plantas. A FAO usa o NDVI de satélites para acompanhar a saúde da vegetação em toda a África; os drones fazem o mesmo à escala do campo.",
            "Uma câmara térmica mede a temperatura da superfície. As plantas com falta de água fecham os seus poros e aquecem, por isso as imagens térmicas podem mostrar falta de água e tubos de rega entupidos. O térmico também é bom para encontrar animais de noite ou de madrugada.",
            "Estes sensores custam mais e precisam de ser usados com cuidado (calibração, a hora certa do dia). Escolha-os quando a pergunta precisa deles: stress precoce numa plantação de chá ou em hortícolas com rega, sim; contar falhas num terreno de feijão de 1 acre, não, a cor chega."
          ],
          words: [["Infravermelho próximo (NIR)", "luz logo a seguir ao vermelho, que as pessoas não conseguem ver; as folhas saudáveis refletem muita."], ["Índice de vegetação", "um número calculado a partir de bandas de luz que mostra quão verdes e vigorosas estão as plantas."], ["NDVI", "Normalized Difference Vegetation Index (índice de vegetação por diferença normalizada): um índice comum calculado com a luz vermelha e a infravermelha próxima, de -1 a +1; um valor mais alto costuma querer dizer plantas verdes mais densas e saudáveis."]],
          slides: [
            { title: "Multiespectral", bullets: ["Mede o vermelho, a borda do vermelho, o infravermelho próximo e mais", "O programa faz mapas de índices de vegetação como o NDVI", "Mostra o stress das plantas mais cedo do que a cor"] },
            { title: "Térmico", bullets: ["Mede a temperatura da superfície", "As plantas com falta de água ficam mais quentes", "Encontra rega entupida e animais de madrugada"] },
            { title: "Escolha pela pergunta", bullets: ["Falhas e ervas daninhas: RGB", "Stress precoce em culturas de alto valor: multiespectral", "Falta de água ou animais: térmico"] }
          ],
          sources: [{ name: "FAO GIEWS, observação da Terra (NDVI e indicadores de vegetação)", url: "https://www.fao.org/giews/earthobservation/index.jsp" }, FAO_ITU_DRONES],
          tryIt: "Para cada pergunta, escolha RGB, multiespectral ou térmico e escreva porquê: (a) O meu tubo de rega gota a gota está entupido? (b) Onde é que o feijão não germinou? (c) Um talhão de chá está com stress antes de as folhas mudarem de cor?",
          youCanNow: "dizer o que mostram os sensores multiespectrais e térmicos e escolher o sensor certo para uma pergunta sobre a exploração.",
          quickCheck: [
            { objective: "O5", q: "O que mede uma câmara térmica?", options: ["A altura das plantas", "A temperatura da superfície", "Os nutrientes do solo", "A chuva"], answer: 1, why: "Uma câmara térmica mede a temperatura da superfície, que pode mostrar falta de água." },
            { objective: "O5", q: "Uma plantação de chá quer encontrar cedo o stress nos seus talhões. Que sensor sugere?", options: ["Nenhum", "Uma câmara térmica só para animais", "A câmara de um telefone", "Uma câmara multiespectral"], answer: 3, why: "As câmaras multiespectrais medem o infravermelho próximo e a borda do vermelho, que mostram o stress das plantas mais cedo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Captar boas imagens: luz, vento e hora",
          minutes: 5,
          goal: "Preparar um voo para que todas as imagens fiquem nítidas, com luz uniforme e prontas a usar.",
          text: [
            "Imagens tiradas com semanas de diferença só se podem comparar se forem tiradas da mesma maneira. Voe perto do meio do dia, quando as sombras são curtas, e com luz estável: sol pleno ou nuvens uniformes, e não nuvens soltas a passar por cima do campo. Voe à mesma altura e com as mesmas definições de cada vez.",
            "O vento abana o drone e mexe as folhas, o que desfoca as imagens e estraga a junção. Voe mais devagar com vento fraco e não voe com vento forte. Confirme que a lente está limpa e que a câmara está definida para focar bem; muitas aplicações de mapeamento definem a câmara por você.",
            "Com câmaras multiespectrais, fotografe o painel de calibração (um cartão de refletância conhecida que vem com o sensor) antes e depois do voo, para que o programa possa corrigir a luz. Antes de sair do campo, veja as fotos: se algumas estiverem desfocadas, escuras ou em falta, volte a voar essa parte enquanto ainda está lá."
          ],
          steps: ["Planeie voar perto do meio-dia com luz estável.", "Veja o vento; abrande com vento fraco, cancele com vento forte.", "Limpe a lente; verifique as definições da câmara.", "Multiespectral: fotografe o painel de calibração antes e depois.", "Antes de sair, veja as fotos e volte a voar qualquer parte má."],
          words: [["Painel de calibração", "um cartão de brilho conhecido, fotografado antes e depois de um voo multiespectral para corrigir a luz."], ["Desfocado", "quando uma imagem não está nítida porque a câmara ou as plantas se mexeram."]],
          slides: [
            { title: "Da mesma maneira, todas as vezes", bullets: ["Voe perto do meio-dia: sombras curtas", "Luz estável: sol pleno ou nuvens uniformes", "Mesma altura e mesmas definições em cada voo"] },
            { title: "Evite o desfocado", bullets: ["Abrande com vento fraco", "Cancele com vento forte", "Lente limpa, definições da câmara certas"] },
            { title: "Extra para o multiespectral", bullets: ["Fotografe o painel de calibração", "ANTES e DEPOIS do voo"] },
            { title: "Verifique antes de sair", bullets: ["Veja as fotos", "Volte a voar as partes desfocadas, escuras ou em falta"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de voo de imagens completo para um terreno de milho de 2 hectares: objetivo, sensor, altura e GSD, sobreposição, velocidade, baterias, hora do dia, limites de tempo meteorológico, local de descolagem e lista de verificação. Se tiver um drone e as autorizações exigidas, faça o voo e verifique todas as imagens antes de sair.",
          youCanNow: "planear e captar um conjunto de imagens nítidas e com luz uniforme que possam ser juntadas num mapa da exploração e comparadas ao longo do tempo.",
          quickCheck: [
            { objective: "O6", q: "O que é um painel de calibração?", options: ["Uma hélice de reserva", "Uma caixa de bateria", "Um cartão de refletância conhecida fotografado antes e depois de um voo multiespectral", "O ecrã do comando"], answer: 2, why: "Fotografar o painel de calibração deixa o programa corrigir a luz desse dia." },
            { objective: "O6", q: "Ao meio-dia passam nuvens soltas e rápidas por cima do campo. O que faz?", options: ["Espera por sol pleno ou nuvens uniformes antes de voar", "Voa já e espera que corra bem", "Voa ao anoitecer", "Voa mais alto para ficar acima das nuvens"], answer: 0, why: "Luz estável, com sol pleno ou nuvens uniformes, dá imagens com luz uniforme que se podem comparar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Imagens aéreas e sensores",
        questions: [
          { objective: "O4", q: "Que sensor chega para encontrar falhas num terreno de feijão de 1 acre?", options: ["Só térmico", "Só multiespectral", "Uma câmara normal a cores (RGB)", "Nenhum sensor consegue"], answer: 2, why: "As falhas veem-se facilmente em imagens a cores a poucos centímetros por píxel." },
          { objective: "O5", q: "As folhas verdes e saudáveis refletem muita:", options: ["Luz infravermelha próxima", "Som", "Só calor", "Ondas de rádio"], answer: 0, why: "A estrutura de uma folha saudável reflete muito no infravermelho próximo; os índices de vegetação usam isto." },
          { objective: "O5", q: "Uma imagem térmica mostra um talhão de tomate muito mais quente do que o resto. Uma causa provável a verificar é:", options: ["Cor de adubo a mais", "O drone estava alto demais", "O talhão está mais verde", "Falta de água ou um tubo de rega gota a gota entupido"], answer: 3, why: "As plantas com falta de água aquecem porque fecham os seus poros." },
          { objective: "O6", q: "Qual é a melhor hora para voar e ter imagens que se possam comparar?", options: ["Ao nascer do sol numa semana e ao pôr do sol na seguinte", "Perto do meio-dia, com luz estável, da mesma maneira de cada vez", "Com nuvens soltas a passar", "De noite"], answer: 1, why: "Sombras curtas e luz estável tornam as imagens comparáveis." },
          { objective: "O6", q: "Quando as verifica no campo, algumas fotos estão desfocadas. Deve:", options: ["Voltar a voar essa parte antes de sair", "Ir para casa e esperar que a junção funcione", "Apagar o conjunto todo", "Voar mais depressa da próxima vez"], answer: 0, why: "Corrigir no local poupa outra viagem e dá um mapa completo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones para a Monitorização Agrícola 2: Operações de Voo, Imagens e Sensores",
    questions: [
      { objective: "O1", q: "Onde começa a maioria dos acidentes com drones?", options: ["Só no ar", "No chão, com algo esquecido na preparação", "No escritório", "No programa, depois da aterragem"], answer: 1, why: "Hélices rachadas, baterias fracas e definições erradas causam muitos acidentes." },
      { objective: "O1", q: "Qual faz parte da verificação dos documentos?", options: ["O aperto das hélices", "A limpeza da lente", "O registo, a licença e as autorizações para o local", "O inchaço da bateria"], answer: 2, why: "A verificação dos documentos confirma que tem permissão para voar ali." },
      { objective: "O1", q: "Uma bateria parece inchada. Deve:", options: ["Não a usar", "Usá-la num voo curto", "Apertá-la para a pôr plana", "Carregá-la mais"], answer: 0, why: "Uma bateria inchada pode falhar ou pegar fogo; não voe com ela." },
      { objective: "O1", q: "Porque descarregar mapas offline antes de ir a uma exploração no campo?", options: ["Para poupar dinheiro no combustível", "Para o drone ficar mais rápido", "Porque a lei exige", "Pode não haver rede móvel no campo"], answer: 3, why: "Sem rede, a aplicação pode não carregar os mapas de que precisa." },
      { objective: "O1", q: "O regresso a casa é:", options: ["Uma definição que faz o drone voltar sozinho ao local de descolagem", "Um botão que desliga os motores", "Um modo da câmara", "Um tipo de bateria"], answer: 0, why: "O RTH traz o drone de volta quando a bateria está fraca ou o sinal se perde." },
      { objective: "O2", q: "Voar para além da linha de visão:", options: ["É sempre permitido", "Precisa de uma autorização especial", "É obrigatório para o mapeamento", "É mais seguro"], answer: 1, why: "O BVLOS tem mais risco e precisa de autorização." },
      { objective: "O2", q: "A Part 21 da Nigéria fixa como altura máxima comum:", options: ["10 metros", "1000 metros", "120 metros (400 pés) acima do solo", "Sem limite"], answer: 2, why: "A Part 21 usa 120 m (400 pés) AGL em muitas operações; verifique o limite do seu país." },
      { objective: "O2", q: "Durante um voo, onde deve manter o drone?", options: ["Atrás de si", "Mesmo por cima de si", "Fora da vista", "À sua frente, à vista"], answer: 3, why: "À sua frente e à vista, consegue saber para que lado está virado." },
      { objective: "O2", q: "Quando deve aterrar?", options: ["Com bateria de sobra", "A 0 por cento", "Só quando o drone aterra sozinho", "Quando o telefone está cheio"], answer: 0, why: "Deixe bateria suficiente para uma descida e uma aterragem seguras." },
      { objective: "O3", q: "Um voo de mapeamento voa:", options: ["Em círculos", "Em linhas retas para a frente e para trás", "Ao acaso", "Só a subir e a descer"], answer: 1, why: "Um padrão em grelha cobre o campo todo com fotos sobrepostas." },
      { objective: "O3", q: "GSD quer dizer:", options: ["A velocidade do drone em relação ao solo", "Uma distância de segurança global", "Quanto terreno cobre um píxel", "O tamanho da bateria"], answer: 2, why: "A distância de amostragem no solo é o pormenor da imagem, por exemplo 2 cm por píxel." },
      { objective: "O3", q: "Para contar plantas de milho uma a uma deve:", options: ["Voar o mais alto possível", "Usar só satélites", "Voar de noite", "Voar mais baixo para ter mais pormenor, dentro do limite legal"], answer: 3, why: "Uma GSD mais fina mostra as plantas uma a uma; fique abaixo do limite de altura." },
      { objective: "O3", q: "Uma sobreposição frontal comum para o mapeamento é de cerca de:", options: ["70 a 80 por cento", "5 por cento", "0 por cento", "Exatamente 100 por cento"], answer: 0, why: "Muita sobreposição deixa o programa juntar as fotos." },
      { objective: "O4", q: "Numa imagem a cores, acamamento quer dizer:", options: ["Plantas verdes demais", "Caules que se dobraram ou caíram", "Ervas daninhas entre as linhas", "Água no solo"], answer: 1, why: "O milho ou a mapira acamados ficam deitados e veem-se facilmente de cima." },
      { objective: "O4", q: "Uma imagem a cores mostra uma mancha amarelada. O melhor passo a seguir é:", options: ["Pulverizá-la", "Ignorá-la", "Marcá-la e verificá-la a pé", "Voar mais alto"], answer: 2, why: "As imagens mostram onde; você confirma a causa no terreno." },
      { objective: "O5", q: "O NDVI é calculado a partir de:", options: ["Som e calor", "Só luz azul", "Amostras de solo", "Luz vermelha e infravermelha próxima"], answer: 3, why: "O NDVI compara a refletância no vermelho e no infravermelho próximo." },
      { objective: "O5", q: "Um valor alto de NDVI costuma querer dizer:", options: ["Vegetação verde densa e saudável", "Solo nu", "Água", "Uma câmara avariada"], answer: 0, why: "A FAO descreve valores de NDVI positivos e altos como vegetação densa e saudável." },
      { objective: "O5", q: "Uma câmara térmica é uma boa escolha para:", options: ["Ler uma matrícula", "Encontrar falta de água e animais de madrugada", "Contar sementes num saco", "Ver as cores mais vivas"], answer: 1, why: "O térmico mede o calor, ligado à falta de água e aos animais de corpo quente." },
      { objective: "O6", q: "Porque fotografar um painel de calibração com uma câmara multiespectral?", options: ["É uma recordação", "Para testar as hélices", "Para o programa poder corrigir a luz desse dia", "Para medir o vento"], answer: 2, why: "A refletância conhecida do painel deixa o programa corrigir as leituras." },
      { objective: "O6", q: "Vento forte e com rajadas no dia de um voo de mapeamento quer dizer:", options: ["Voar mais depressa", "Voar mais alto", "Tirar as hélices", "Não voar; marcar outro dia"], answer: 3, why: "O vento forte põe em risco o controlo e estraga as imagens." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      5,
      6,
      10,
      12,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique-a outra vez.",
    criteria: [
      {
        name: "Objetivo e sensor",
        objective: "O5",
        notYet: "Não há objetivo, ou o sensor não serve para o objetivo.",
        meets: "Um objetivo claro para o voo e um sensor que serve para ele, com uma razão.",
        exceeds: "Explica porque não escolheu um sensor mais barato ou mais caro."
      },
      {
        name: "Altura, pormenor e sobreposição",
        objective: "O3",
        notYet: "Falta a altura, a GSD ou a sobreposição, ou está acima do limite legal de altura.",
        meets: "A altura e a GSD mostrada pela aplicação, a sobreposição frontal e lateral, a velocidade e o número de baterias.",
        exceeds: "Mostra como o pormenor serve para o trabalho, por exemplo contar plantas."
      },
      {
        name: "Luz, vento e hora",
        objective: "O6",
        notYet: "Não tem hora do dia nem limites de tempo meteorológico.",
        meets: "A hora do dia, a luz, os limites de vento e um plano para verificar todas as imagens antes de sair.",
        exceeds: "Inclui os passos do painel de calibração ou uma data de reserva."
      },
      {
        name: "Lista de verificação antes do voo",
        objective: "O1",
        notYet: "A lista esquece a aeronave, as baterias, as definições ou os documentos.",
        meets: "Cobre a aeronave, as baterias, o comando e a aplicação, as definições de regresso a casa e os documentos.",
        exceeds: "Acrescenta o local de descolagem e como o drone se mantém à vista."
      },
      {
        name: "Voo seguro",
        objective: "O2",
        notYet: "Não tem local de descolagem, ou voa para além da vista sem autorização.",
        meets: "Um local de descolagem claro, voo com o drone à vista e dentro da altura legal, e aterragem com bateria de sobra.",
        exceeds: "Indica um observador e os passos a seguir se o vento aumentar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano de voo",
      "Alunos com autorizações que dizem ter feito um voo de mapeamento planeado e obtido um conjunto completo de imagens em 60 dias (inquérito de seguimento)",
      "Alunos que continuam para o Curso 3 da série de drones",
      "Prestadores de serviços com drones que dizem ter menos voos repetidos ou acidentes depois da formação"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou tablet com uma aplicação de mapeamento com drone, ou capturas de ecrã de uma",
      "Um caderno ou uma lista de verificação impressa",
      "Um drone com o seu registo, licença e autorizações, só para o voo de prática opcional",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo para escrever o plano de voo"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois planeiem um voo de mapeamento de exemplo num ecrã, para que todos vejam a altura, a GSD e a sobreposição a mudar.",
      "Qualquer voo de prática tem de seguir as regras do país, com um piloto licenciado e as autorizações em ordem, e com os espectadores afastados.",
      "Façam a lista de verificação antes do voo em voz alta, num drone real ou numa imagem, e não usem baterias inchadas.",
      "Use imagens de exemplo se não houver drone, para que os alunos possam praticar a leitura de imagens a cores, multiespectrais e térmicas.",
      "Avalie o plano de voo com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
