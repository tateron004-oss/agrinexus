"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-piloting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KCAA_UAS = { name: "Autoridade de Aviação Civil do Quénia (KCAA): Sistemas de Aeronaves Não Tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_UTO = { name: "KCAA: Organizações de Formação em Sistemas de Aeronaves Não Tripuladas (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_PORTAL = { name: "Sistema online da KCAA para drones (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autoridade de Aviação Civil da Nigéria (NCAA): Nig.CARs 2023 Parte 21, Sistemas de Aeronaves Pilotadas Remotamente", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-piloting-pt",
  lang: "pt",
  translationOf: "agri-drones-piloting",
  category: "Agriculture (Africa)",
  name: "Drones para a Monitorização Agrícola 6: Curso Online de Pilotagem de Drones",
  skills: "Usar as alavancas de comando, Praticar exercícios de voo num simulador, Escolher e mudar os modos de voo, Lidar com emergências (perda de ligação, bateria fraca, perda de GPS), Manter uma caderneta de voo do piloto, Planear o seu caminho até uma licença de piloto remoto",
  outcome: "fazer com suavidade um conjunto de exercícios padrão num simulador de drone, lidar com calma com as principais emergências, manter uma caderneta de voo correta e seguir um plano pessoal claro para obter uma licença de piloto remoto da autoridade de aviação do seu país.",
  about: [
    "Este é o último curso da série de monitorização com drones, para quem vive no Quénia, na Nigéria ou noutro país de África e quer ser um piloto de drones competente e licenciado para a agricultura. Foi feito para ser estudado online: a maior parte da prática é feita num simulador de drone gratuito ou barato, num computador ou telefone, para que possa errar sem partir um drone verdadeiro e sem violar nenhuma regra.",
    "O Capítulo 1 ensina os comandos, um conjunto de exercícios de prática e os modos de voo que o seu drone pode ter. O Capítulo 2 ensina os procedimentos de emergência, como manter uma caderneta de voo e os passos até uma licença de piloto remoto.",
    "Importante: este curso não lhe dá uma licença e não lhe dá autorização para voar. No Quénia e na Nigéria, como na maioria dos países, a licença de piloto remoto é passada pela autoridade de aviação civil depois de formação numa organização aprovada e da aprovação nos seus testes. Nunca voe com um drone verdadeiro sem o registo, a licença e as autorizações que o seu país exige."
  ],
  finalTask: "Num simulador de drone, faça os cinco exercícios deste curso (pairar, quadrado, oito, órbita e grelha em linhas paralelas) até conseguir fazer cada um com suavidade três vezes seguidas, pratique os três exercícios de emergência, registe todas as sessões numa caderneta de voo e escreva um plano pessoal de licenciamento de uma página: a autoridade do seu país, as organizações de formação aprovadas que encontrou, a licença de que precisa, os passos, os documentos, o custo estimado a partir de fontes oficiais e as suas datas-alvo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Qualquer pessoa no Quénia, na Nigéria ou noutro país de África que quer ser um piloto de drones competente e licenciado para a agricultura e faz online o último curso da série de monitorização com drones.",
    startingPoint: "Os alunos sabem o que os drones fazem nas explorações agrícolas, conhecem as regras básicas e como se fazem mapas (Cursos 1 a 5). Muitos têm pouco ou nenhum tempo de prática com os comandos, nunca praticaram emergências, não têm caderneta de voo e não conhecem os passos, os documentos e as escolas aprovadas para uma licença de piloto remoto.",
    gap: "Os pilotos novos têm acidentes quando entram em pânico numa emergência, perdem o GPS ou voam com a frente do drone virada para eles, e alguns pagam escolas não aprovadas ou voam sem licença. Praticar exercícios e emergências num simulador, manter uma caderneta de voo e seguir um plano claro de licenciamento permite aos alunos chegar à formação aprovada prontos para aprender depressa e voar dentro da lei.",
    constraints: [
      "Aparelhos: um computador ou telefone que consiga correr um simulador de drone gratuito ou barato; um comando ajuda",
      "Este curso não dá licença nem autorização para voar; as licenças vêm da autoridade de aviação depois de formação aprovada e de testes",
      "Nunca voar com um drone verdadeiro sem o registo, a licença e as autorizações que o país exige",
      "Tempo: sessões curtas de prática diária de 15 a 20 minutos",
      "As taxas e os passos mudam: os alunos verificam as páginas oficiais da autoridade"
    ],
    prerequisites: "\"Drones para a Monitorização Agrícola 1: Introdução, Regulamentos e Segurança\"; os Cursos 2 a 5 ajudam, mas não são obrigatórios."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um comando de drone ou um simulador", action: "dizer o que faz cada movimento das alavancas e ler as principais informações no ecrã de voo", standard: "e encontrar os botões de regresso a casa e de pausa sem olhar" },
    { id: "O2", condition: "Num simulador de drone", action: "fazer os exercícios de pairar, quadrado, oito, órbita e linhas paralelas e registar todas as sessões numa caderneta de voo", standard: "fazendo cada exercício com suavidade três vezes seguidas" },
    { id: "O3", condition: "Quando o sinal de GPS é forte ou fraco", action: "explicar os principais modos de voo e voar com calma quando o drone passa para o modo de atitude", standard: "mantendo o drone à vista e aterrando em segurança" },
    { id: "O4", condition: "Numa simulação de perda de ligação, bateria fraca ou perda de GPS", action: "seguir os passos de emergência certos", standard: "com calma e pela ordem certa, registando depois o acontecimento" },
    { id: "O5", condition: "Para o seu país", action: "escrever um plano pessoal para obter uma licença de piloto remoto", standard: "com a autoridade, as escolas aprovadas, os passos, os documentos, os custos de fontes oficiais e as datas-alvo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Aprender a voar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Os comandos: alavancas, botões e ecrã",
          minutes: 5,
          goal: "Dizer o que faz cada movimento das alavancas e ler as principais informações no ecrã de voo.",
          text: [
            "A maioria dos comandos de drone tem duas alavancas. No Modo 2, a configuração mais comum, a alavanca esquerda controla a altura (acelerador, em inglês throttle: para cima para subir, para baixo para descer) e a rotação no mesmo lugar (guinada, em inglês yaw: para a esquerda e para a direita). A alavanca direita move o drone para a frente e para trás (arfagem, em inglês pitch) e para os lados (rolamento, em inglês roll). Alguns pilotos usam outros modos; verifique o seu nas definições da aplicação.",
            "Movimentos pequenos e suaves das alavancas dão um voo suave. Os principiantes empurram demais e depressa demais. Pratique mover as alavancas com cuidado e depois deixe-as voltar ao centro, onde a maioria dos drones fica parada no lugar.",
            "O ecrã de voo mostra o nível da bateria, a força do sinal, os satélites de GPS, a altura, a distância até ao ponto de partida e a imagem da câmara. Aprenda a olhar para ele de relance e depois voltar a olhar para o drone. Saiba onde estão os botões de regresso a casa e de pausa ou travão sem precisar de olhar."
          ],
          words: [["Acelerador (throttle)", "movimento para cima e para baixo (subir ou descer)."], ["Guinada (yaw)", "rodar o drone para a esquerda ou para a direita no mesmo lugar."], ["Arfagem (pitch)", "mover para a frente ou para trás."], ["Rolamento (roll)", "mover para o lado, para a esquerda ou para a direita."], ["Modo 2", "a configuração de alavancas mais comum: alavanca esquerda para acelerador e guinada, alavanca direita para arfagem e rolamento."]],
          slides: [
            { title: "Alavancas no Modo 2", bullets: ["Esquerda: subir/descer (acelerador), rodar (guinada)", "Direita: frente/trás (arfagem), lados (rolamento)", "Verifique o seu modo na aplicação"] },
            { title: "Mãos suaves", bullets: ["Movimentos pequenos e suaves", "Deixe as alavancas voltar ao centro", "A maioria dos drones fica então parada no lugar"] },
            { title: "O ecrã de voo", bullets: ["Bateria, sinal, satélites de GPS", "Altura, distância até à partida, imagem da câmara", "Olhe de relance e volte a olhar para o drone"] },
            { title: "Conheça os seus botões", bullets: ["Regresso a casa", "Pausa ou travão", "Encontre-os sem olhar"] }
          ],
          tryIt: "Instale um simulador de drone num computador ou telefone (procure na loja de aplicações ou no computador um simulador de voo de drone; alguns fabricantes de drones oferecem um na sua aplicação). Encontre a definição do modo das alavancas, escolha o Modo 2 e mova cada alavanca com cuidado para ver o que faz.",
          youCanNow: "dizer o que faz cada alavanca no Modo 2, ler o ecrã de voo e encontrar os botões de emergência.",
          quickCheck: [
            { objective: "O1", q: "O que é a arfagem (pitch)?", options: ["Rodar no mesmo lugar", "Mover o drone para a frente e para trás", "Subir", "Regressar a casa"], answer: 1, why: "A arfagem move o drone para a frente e para trás; no Modo 2 está na alavanca direita." },
            { objective: "O1", q: "O seu drone está a deslizar na direção de uma árvore e tem de o parar depressa. O que já deve saber?", options: ["O preço do drone", "O número de telefone do agricultor", "Como mudar a cor da câmara", "Onde está o botão de pausa ou travão, sem olhar"], answer: 3, why: "Os pilotos aprendem onde estão os botões de pausa ou travão e de regresso a casa para poderem agir sem olhar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Exercícios de prática num simulador",
          minutes: 6,
          goal: "Fazer cinco exercícios padrão com suavidade num simulador.",
          text: [
            "Os bons pilotos ganham habilidade com os mesmos exercícios, muitas vezes. Pratique cada exercício até o conseguir fazer com suavidade três vezes seguidas e depois passe ao seguinte. Sessões curtas de 15 a 20 minutos por dia funcionam melhor do que uma sessão longa por semana.",
            "Exercício 1, pairar: descole até à altura dos olhos e mantenha o drone parado durante um minuto. Exercício 2, quadrado: voe um quadrado com a frente sempre virada para a frente e depois outra vez com a frente a rodar em cada canto. Exercício 3, oito: voe um oito suave. Exercício 4, órbita: faça um círculo à volta de um ponto (como uma árvore) mantendo a câmara virada para ele. Exercício 5, linhas paralelas (como um corta-relva): voe à mão linhas retas e paralelas por cima de um campo, como num voo de mapeamento.",
            "Pratique também com o drone virado para si (frente para si), quando a esquerda e a direita parecem trocadas. É aqui que a maioria dos principiantes tem acidentes. Depois de cada sessão, escreva o que correu bem e o que deve melhorar."
          ],
          steps: ["Paire à altura dos olhos durante um minuto.", "Quadrado: frente para a frente, depois frente a rodar nos cantos.", "Oito, suave e nivelado.", "Órbita à volta de uma árvore com a câmara virada para ela.", "Linhas paralelas por cima de um campo.", "Repita cada um com a frente virada para si."],
          words: [["Exercício", "uma prática curta repetida para ganhar uma habilidade."], ["Frente para si (nose-in)", "voar com a frente do drone virada para si, por isso os comandos parecem trocados."], ["Órbita", "voar em círculo à volta de um ponto."]],
          slides: [
            { title: "Como praticar", bullets: ["Os mesmos exercícios, muitas vezes", "Três vezes suaves seguidas, depois passe ao seguinte", "15-20 minutos por dia valem mais do que uma sessão longa"] },
            { title: "Cinco exercícios", bullets: ["1 Pairar  2 Quadrado  3 Oito", "4 Órbita à volta de uma árvore  5 Linhas paralelas"] },
            { title: "O mais difícil: frente para si", bullets: ["A esquerda e a direita parecem trocadas", "É onde a maioria dos principiantes tem acidentes", "Pratique também cada exercício com a frente para si"] }
          ],
          tryIt: "No seu simulador, faça hoje os exercícios 1 e 2. Escreva num caderno: data, minutos, que exercícios, quantas vezes suaves, uma coisa a melhorar.",
          youCanNow: "praticar cinco exercícios padrão num simulador e acompanhar o seu progresso.",
          quickCheck: [
            { objective: "O2", q: "O que é o exercício do quadrado?", options: ["Voar um quadrado, primeiro com a frente virada para a frente e depois a rodar em cada canto", "Pairar num só lugar", "Fazer um círculo à volta de uma árvore", "Voar em forma de oito"], answer: 0, why: "O exercício do quadrado é voar um quadrado com a frente virada para a frente e depois com a frente a rodar em cada canto." },
            { objective: "O2", q: "Fez o exercício de pairar com suavidade uma vez. O que faz a seguir?", options: ["Passar logo a voar a sério", "Deixar de praticar o pairar para sempre", "Continuar a praticar até ficar suave três vezes seguidas e depois passar ao seguinte", "Saltar para o exercício mais difícil"], answer: 2, why: "Pratique cada exercício até o conseguir fazer com suavidade três vezes seguidas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Os modos de voo e quando usá-los",
          minutes: 5,
          goal: "Explicar os principais modos de voo e mudar de modo em segurança quando o GPS está fraco.",
          text: [
            "A maioria dos drones com câmara voa num modo de posicionamento ou modo GPS. O drone usa satélites e sensores para ficar no mesmo lugar quando você larga as alavancas. Isto torna o voo mais fácil e permite o regresso a casa e o mapeamento automático.",
            "Alguns drones têm também um modo de atitude (algumas marcas chamam-lhe ATTI). O drone mantém a altura, mas não o lugar, por isso desliza com o vento, como um barco num rio. Um drone pode passar sozinho para este modo quando o GPS está fraco, por exemplo perto de estruturas altas de metal, debaixo de árvores densas ou num vale fundo. Os pilotos que praticaram este modo ficam calmos; os que não praticaram muitas vezes têm acidentes.",
            "Outros modos são o desportivo (mais rápido, com menos proteção), o tripé ou cine (lento e suave para filmar) e as missões automáticas. Muitos simuladores deixam voar sem a ajuda do GPS. Pratique isso para que o deslizar não o apanhe de surpresa."
          ],
          words: [["Modo GPS", "um modo de voo em que o drone usa satélites para ficar no mesmo lugar."], ["Modo de atitude (ATTI)", "um modo em que o drone mantém a altura, mas desliza com o vento."], ["Deslizar (drift)", "o drone afastar-se sozinho, normalmente com o vento."]],
          slides: [
            { title: "Modo GPS / de posicionamento", bullets: ["Fica no lugar quando você larga as alavancas", "Permite o regresso a casa e o mapeamento", "Modo normal para o trabalho agrícola"] },
            { title: "Modo de atitude (ATTI)", bullets: ["Mantém a altura, não o lugar", "Desliza com o vento", "Pode ligar-se sozinho quando o GPS está fraco"] },
            { title: "Outros modos", bullets: ["Desportivo: rápido, menos proteção", "Tripé / cine: lento e suave", "Pratique voar sem a ajuda do GPS"] }
          ],
          tryIt: "No seu simulador, desligue a ajuda do GPS ou escolha o modo de atitude, junte algum vento e mantenha o drone a pairar durante 30 segundos, corrigindo o deslizar. Depois faça o exercício do quadrado neste modo.",
          youCanNow: "explicar os principais modos de voo e manter o controlo quando o drone desliza sem GPS.",
          quickCheck: [
            { objective: "O3", q: "O que faz o modo tripé ou cine?", options: ["Voa o mais depressa possível", "Desliga os motores", "Faz mapas automaticamente", "Voa devagar e com suavidade para filmar"], answer: 3, why: "O modo tripé ou cine é lento e suave, para filmar." },
            { objective: "O3", q: "Vai mapear um campo ao lado de um silo de cereais alto, de metal. Para que se deve preparar?", options: ["Para nada; o GPS funciona sempre", "Para o drone passar para o modo de atitude e deslizar, por isso pratica voar sem a ajuda do GPS", "Para voar no modo desportivo", "Para voar só com a frente para si"], answer: 1, why: "Perto de estruturas altas de metal o GPS pode ficar fraco e o drone pode deslizar no modo de atitude." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Aprender a voar",
        questions: [
          { objective: "O1", q: "No Modo 2, o que acontece quando empurra a alavanca esquerda para cima?", options: ["Avança", "Roda para a direita", "Sobe", "Move-se para o lado"], answer: 2, why: "No Modo 2, a alavanca esquerda controla o acelerador (altura) e a guinada." },
          { objective: "O1", q: "O que é a guinada (yaw)?", options: ["Rodar o drone para a esquerda ou para a direita no mesmo lugar", "Subir", "Aterrar", "Tirar uma fotografia"], answer: 0, why: "A guinada faz o drone rodar à volta do seu centro." },
          { objective: "O2", q: "Que plano de prática desenvolve melhor a habilidade?", options: ["Uma sessão de três horas por mês", "Sessões curtas diárias dos mesmos exercícios", "Só ver vídeos", "Voar com um drone verdadeiro sem formação"], answer: 1, why: "A repetição curta e regular dá um controlo suave." },
          { objective: "O2", q: "Porque é que se pratica voar com a frente para si?", options: ["É mais rápido", "Poupa bateria", "Os simuladores exigem-no", "Os comandos parecem trocados e muitos principiantes têm acidentes aí"], answer: 3, why: "Praticar torna normal a sensação de comandos trocados." },
          { objective: "O3", q: "No modo de atitude (ATTI), o drone:", options: ["Mantém a altura, mas desliza com o vento", "Aterra automaticamente", "Fica perfeitamente no mesmo lugar", "Não se consegue mover"], answer: 0, why: "Sem o posicionamento por GPS, mantém a altura, mas não o lugar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tornar-se um piloto licenciado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Exercícios de emergência: ligação, bateria fraca, GPS",
          minutes: 6,
          goal: "Seguir os passos certos em três emergências comuns.",
          text: [
            "As emergências são raras, mas rápidas. Os pilotos lidam bem com elas porque praticaram os passos até se tornarem automáticos. Antes de cada voo verdadeiro, verifique se a altura de regresso a casa e a ação em caso de perda de sinal estão bem definidas.",
            "Perda de ligação (o comando perde o sinal): mantenha a calma, aponte as antenas do comando para o drone e vá para um lugar mais alto, se for seguro. A maioria dos drones começa o regresso a casa ao fim de alguns segundos; observe o céu e esteja pronto para retomar o controlo quando a ligação voltar. Bateria fraca: pare a tarefa e voe diretamente para casa, ou aterre no lugar seguro mais próximo; nunca tente fazer só mais uma linha.",
            "Perda de GPS ou deslizar de repente: pense em voo em modo de atitude, mantenha o drone à vista, traga-o com cuidado de volta para si contra o vento e aterre logo que seja seguro. Depois de qualquer emergência ou acidente, torne a zona segura, verifique se há danos, escreva-o na sua caderneta de voo e comunique-o à autoridade, se as suas regras o exigirem."
          ],
          steps: ["Perda de ligação: calma, aponte as antenas, suba a um lugar mais alto se for seguro, espere o regresso a casa.", "Bateria fraca: pare a tarefa, volte para casa ou aterre no lugar seguro mais próximo.", "Perda de GPS: voe à mão, com cuidado, contra o vento, e aterre em breve.", "Depois de qualquer incidente: torne seguro, verifique danos, registe, comunique se for exigido."],
          words: [["Perda de ligação", "quando o drone e o comando perdem a ligação por rádio."], ["Fuga do drone (fly-away)", "quando um drone voa para longe, fora do controlo do piloto."], ["Incidente", "um acontecimento não planeado que causou, ou podia ter causado, ferimentos ou danos."]],
          slides: [
            { title: "Pratique até ser automático", bullets: ["As emergências são raras, mas rápidas", "Verifique primeiro a altura de regresso e a ação sem sinal"] },
            { title: "Perda de ligação", bullets: ["Mantenha a calma, aponte as antenas", "Suba a um lugar mais alto, se for seguro", "Espere o regresso a casa"] },
            { title: "Bateria fraca e perda de GPS", bullets: ["Bateria fraca: pare, volte ou aterre já", "Perda de GPS: voe à mão, contra o vento, aterre em breve"] },
            { title: "Depois de qualquer incidente", bullets: ["Torne a zona segura", "Verifique danos, registe", "Comunique, se as suas regras o exigirem"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "No seu simulador, pratique cada emergência: defina um aviso de bateria fraca e volte para casa, desligue o GPS a meio do voo e aterre à mão e (se o simulador deixar) provoque uma perda de sinal e observe o regresso a casa. Depois escreva os passos de memória.",
          youCanNow: "seguir os passos certos em caso de perda de ligação, bateria fraca e perda de GPS.",
          quickCheck: [
            { objective: "O4", q: "Antes de cada voo verdadeiro, o que verifica para estar preparado para uma perda de ligação?", options: ["A definição de cor da câmara", "A morada do agricultor", "Se a altura de regresso a casa e a ação em caso de perda de sinal estão bem definidas", "A última página da caderneta de voo"], answer: 2, why: "Uma altura de regresso a casa e uma ação em caso de perda de sinal corretas permitem ao drone voltar em segurança se a ligação se perder." },
            { objective: "O4", q: "Depois de uma aterragem brusca com um drone verdadeiro, ele parece estar bem. O que faz?", options: ["Verifica se há danos e escreve-o na caderneta de voo", "Volta a voar logo, sem verificar", "Esquece o assunto", "Esconde-o do seu instrutor"], answer: 0, why: "Depois de qualquer emergência ou acidente, verifique se há danos e registe-o; comunique-o se as regras o exigirem." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Manter uma caderneta de voo do piloto",
          minutes: 4,
          goal: "Registar todos os voos no simulador e voos verdadeiros numa caderneta de voo.",
          text: [
            "A caderneta de voo é o registo de tudo o que voou. As organizações de formação e as autoridades de aviação usam os registos de voo para verificar a experiência, e os empregadores e os clientes confiam nos pilotos que os mantêm. Mantenha o tempo no simulador e o tempo de voo verdadeiro em colunas separadas.",
            "Em cada sessão registe: data, lugar (ou simulador), nome do drone ou do simulador, total de minutos, tipo de voo (exercícios, mapeamento, inspeção), condições (vento, luz), quaisquer problemas ou incidentes e o que aprendeu. Nos voos verdadeiros anote também o registo do drone e qualquer autorização usada.",
            "Use um caderno de papel, uma folha de cálculo ou uma aplicação de registo, mas preencha-o todas as vezes e faça uma cópia de segurança. Pergunte à sua organização de formação que formato aceita para os pedidos de licença."
          ],
          steps: ["Escolha papel, folha de cálculo ou aplicação, e faça uma cópia de segurança.", "Colunas separadas para voos no simulador e voos verdadeiros.", "Registe data, lugar, aeronave, minutos, tipo, condições, problemas, lições.", "Nos voos verdadeiros, junte o registo do drone e a autorização usada.", "Pergunte à sua organização de formação que formato aceita."],
          words: [["Caderneta de voo", "um registo de todos os voos que um piloto faz."], ["Tempo de voo", "os minutos ou as horas que um piloto passou a voar."]],
          slides: [
            { title: "Porque manter uma caderneta", bullets: ["Prova a sua experiência", "Usada pelas organizações de formação e autoridades", "Ganha a confiança dos clientes"] },
            { title: "O que registar", bullets: ["Data, lugar, drone ou simulador", "Minutos, tipo de voo, condições", "Problemas, incidentes, lições"] },
            { title: "Mantenha-a bem", bullets: ["Todas as sessões, com cópia de segurança", "Tempo no simulador e tempo real separados", "Use o formato que o seu formador aceita"] }
          ],
          tryIt: "Comece já a sua caderneta de voo numa folha de cálculo com as colunas desta lição e registe todas as sessões no simulador que fez neste curso até agora.",
          youCanNow: "manter uma caderneta de voo completa para os voos no simulador e os voos verdadeiros.",
          quickCheck: [
            { objective: "O2", q: "Porque é que as organizações de formação e as autoridades olham para os registos de voo?", options: ["Para definir o preço do drone", "Para verificar a experiência de um piloto", "Para escolher o tempo que vai fazer", "Para mudar o modo das alavancas"], answer: 1, why: "Os registos de voo mostram a experiência de um piloto às escolas, às autoridades, aos empregadores e aos clientes." },
            { objective: "O2", q: "Hoje voou com um drone verdadeiro com uma autorização. O que junta ao registo?", options: ["Nada além da data", "O tempo da próxima semana", "Os seus dados bancários", "O registo do drone e a autorização usada"], answer: 3, why: "Nos voos verdadeiros, anote também o registo do drone e qualquer autorização usada." }
          ]
        },
        {
          objectives: ["O5"],
          title: "O seu caminho até uma licença de piloto remoto",
          minutes: 6,
          goal: "Escrever um plano pessoal para obter uma licença de piloto remoto no seu país.",
          text: [
            "Cada país decide como se licenciam os pilotos remotos. No Quénia, a KCAA aprova as Organizações de Formação em Sistemas de Aeronaves Não Tripuladas (UTO) e publica a lista no seu site; a sua tabela de taxas inclui uma licença de aluno piloto remoto, uma licença de piloto remoto (RPL) e qualificações extra, como voar além da linha de vista. Os pedidos são feitos pelo sistema online de drones da KCAA. Na Nigéria, a Parte 21 da NCAA define a licença de piloto remoto e outras exigências para os RPAS. Os outros países têm as suas próprias regras.",
            "O caminho habitual: escolher uma organização de formação aprovada; estudar a teoria (direito aéreo, espaço aéreo e mapas, meteorologia, a aeronave, fatores humanos, procedimentos de emergência); ter aulas de voo e fazer um teste prático; cumprir as exigências da autoridade; pedir a licença; e mantê-la válida, renovando-a como for exigido.",
            "Verifique cada passo, documento e taxa nas páginas oficiais da autoridade ou telefonando para ela, e confirme que uma escola está na lista de escolas aprovadas pela autoridade antes de pagar. A sua caderneta do simulador mostra que está pronto para aprender depressa, mas não substitui a formação aprovada."
          ],
          steps: ["Encontre as páginas sobre drones da sua autoridade de aviação.", "Encontre a lista de organizações de formação aprovadas; escolha duas para contactar.", "Pergunte a cada uma: duração do curso, conteúdo teórico e prático, custo, teste, documentos necessários.", "Verifique a taxa da licença na tabela oficial de taxas.", "Escreva as datas-alvo para a formação, o teste e o pedido."],
          words: [["Organização de formação aprovada", "uma escola de drones aprovada pela autoridade de aviação para formar pilotos para uma licença (a KCAA chama-lhes UTO)."], ["Qualificação", "uma autorização extra numa licença para um tipo de voo, como voar além da linha de vista."], ["Direito aéreo", "as regras sobre o voo e o espaço aéreo."]],
          slides: [
            { title: "Cada país licencia os seus pilotos", bullets: ["Quénia: a KCAA aprova as UTO; RPL pelo sistema online", "Nigéria: a Parte 21 da NCAA trata da licença de piloto remoto", "Outros: a sua própria autoridade"] },
            { title: "O caminho habitual", bullets: ["Escola aprovada", "Teoria: direito aéreo, espaço aéreo, meteorologia, aeronave", "Formação prática e teste", "Pedir a licença e depois renová-la"] },
            { title: "Verifique antes de pagar", bullets: ["A escola está na lista aprovada da autoridade?", "Taxas da tabela oficial", "O tempo no simulador ajuda, mas não é uma licença"] }
          ],
          sources: [KCAA_UTO, KCAA_PORTAL, KCAA_UAS, NCAA_P21],
          tryIt: "Tarefa final: termine os cinco exercícios e os três exercícios de emergência no seu simulador, registe todas as sessões na sua caderneta de voo e escreva o seu plano de licenciamento de uma página: autoridade, escolas aprovadas encontradas, licença necessária, passos, documentos, custo de fontes oficiais e datas-alvo.",
          youCanNow: "fazer exercícios padrão e procedimentos de emergência num simulador, manter uma caderneta de voo e seguir um plano claro até uma licença oficial de piloto remoto.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um passo habitual no caminho para uma licença de piloto remoto?", options: ["Formação numa organização aprovada e depois um teste prático", "Comprar o maior drone", "Acabar apenas um curso online", "Voar primeiro para um cliente"], answer: 0, why: "O caminho habitual é a formação aprovada, a teoria, as aulas de voo e um teste, e depois o pedido da licença." },
            { objective: "O5", q: "Um site oferece uma licença de piloto remoto online num só dia, sem teste, a pagar. O que faz?", options: ["Paga depressa antes de a oferta acabar", "Paga metade agora", "Verifica as páginas oficiais da autoridade e a lista de escolas aprovadas antes de pagar seja o que for", "Partilha-o com os amigos"], answer: 2, why: "As licenças vêm da autoridade de aviação; confirme que uma escola está na lista aprovada antes de pagar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Tornar-se um piloto licenciado",
        questions: [
          { objective: "O4", q: "O comando perde o sinal com o drone. Um bom primeiro passo é:", options: ["Desligar o comando", "Correr atrás do drone", "Manter a calma, apontar as antenas para o drone e esperar o regresso a casa", "Desligar os motores do drone"], answer: 2, why: "A maioria dos drones volta para casa depois de perder a ligação; uma melhor posição das antenas pode recuperá-la." },
          { objective: "O4", q: "O aviso de bateria fraca toca quando falta uma linha de mapeamento. Deve:", options: ["Fazer a última linha depressa", "Parar a tarefa e voltar para casa ou aterrar em segurança", "Subir mais alto", "Ignorá-lo"], answer: 1, why: "Nunca force uma bateria fraca; aterre em segurança e termine mais tarde." },
          { objective: "O2", q: "O que deve registar uma caderneta de voo do piloto?", options: ["Data, lugar, aeronave, minutos, tipo, condições, problemas, lições", "Só os acidentes", "Só o preço do drone", "Nada; é opcional"], answer: 0, why: "Um registo completo prova a experiência e mostra padrões." },
          { objective: "O5", q: "Terminar este curso online dá-lhe uma licença?", options: ["Sim, logo", "Sim, depois do questionário", "Só na Nigéria", "Não; as licenças vêm da autoridade de aviação depois de formação aprovada e de testes"], answer: 3, why: "Só a autoridade nacional passa licenças de piloto remoto." },
          { objective: "O5", q: "Antes de pagar uma escola de drones, deve:", options: ["Confirmar que está na lista de escolas aprovadas pela autoridade de aviação", "Confiar no seu anúncio", "Perguntar só a um amigo", "Pagar em dinheiro para poupar tempo"], answer: 0, why: "Só a formação aprovada conta para uma licença." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones para a Monitorização Agrícola 6: Curso Online de Pilotagem de Drones",
    questions: [
      { objective: "O1", q: "No Modo 2, a alavanca direita controla:", options: ["A altura e a rotação", "Frente/trás e os lados", "O zoom da câmara", "O regresso a casa"], answer: 1, why: "No Modo 2, a alavanca direita controla a arfagem e o rolamento." },
      { objective: "O1", q: "O acelerador (throttle) controla:", options: ["A rotação", "O movimento para os lados", "Subir e descer", "A câmara"], answer: 2, why: "O acelerador move o drone para cima e para baixo." },
      { objective: "O1", q: "Um voo suave vem de:", options: ["Movimentos pequenos e cuidadosos das alavancas", "Empurrar as alavancas até ao fim todas as vezes", "Voar depressa", "Voar à noite"], answer: 0, why: "Movimentos suaves dão um voo suave e controlado." },
      { objective: "O1", q: "O que NÃO aparece normalmente no ecrã de voo?", options: ["O nível da bateria", "Os satélites de GPS", "A altura", "O saldo bancário do agricultor"], answer: 3, why: "O ecrã mostra dados do voo, não finanças pessoais." },
      { objective: "O2", q: "Porque é que se pratica primeiro num simulador?", options: ["É a lei em todo o lado", "Os erros não custam nada e não violam regras", "Dá-lhe uma licença", "Os drones verdadeiros não conseguem pairar"], answer: 1, why: "Os simuladores deixam aprender em segurança antes dos voos verdadeiros." },
      { objective: "O2", q: "Quanto tempo deve durar uma boa sessão diária de prática?", options: ["Cerca de 15 a 20 minutos", "Cinco horas", "Um minuto", "Só uma vez por ano"], answer: 0, why: "Sessões curtas e regulares são as que melhor desenvolvem a habilidade." },
      { objective: "O2", q: "O exercício das linhas paralelas (corta-relva) treina:", options: ["Cortar a relva", "Aterrar", "Linhas retas e paralelas, como num voo de mapeamento", "Tirar selfies"], answer: 2, why: "Desenvolve o controlo usado nos padrões de mapeamento." },
      { objective: "O2", q: "Um exercício de órbita é:", options: ["Voar a direito para cima", "Pairar", "Aterrar numa árvore", "Fazer um círculo à volta de um ponto com a câmara virada para ele"], answer: 3, why: "As órbitas mantêm a câmara virada para um alvo enquanto o drone dá a volta." },
      { objective: "O2", q: "Quando voa com a frente para si, os comandos parecem:", options: ["Trocados entre a esquerda e a direita", "Exatamente iguais", "Mais lentos", "Bloqueados"], answer: 0, why: "O drone está virado para si, por isso a esquerda e a direita ficam trocadas do seu ponto de vista." },
      { objective: "O3", q: "No modo GPS, quando larga as alavancas, o drone:", options: ["Cai", "Fica no mesmo lugar", "Volta para casa", "Gira"], answer: 1, why: "O posicionamento por satélite mantém o drone no lugar." },
      { objective: "O3", q: "Um drone pode passar para o modo de atitude quando:", options: ["A bateria está cheia", "O céu está limpo", "O GPS está fraco, por exemplo debaixo de árvores densas ou perto de estruturas de metal", "Tira uma fotografia"], answer: 2, why: "Um sinal de satélite fraco tira ao drone a capacidade de ficar no lugar." },
      { objective: "O3", q: "No modo de atitude, com vento, o drone vai:", options: ["Ficar perfeitamente parado", "Aterrar sozinho", "Subir sem parar", "Deslizar com o vento"], answer: 3, why: "Mantém a altura, mas não o lugar." },
      { objective: "O3", q: "O modo desportivo normalmente significa:", options: ["Voar mais depressa, com menos proteção", "Filmar devagar e com suavidade", "Aterragem automática", "Sem câmara"], answer: 0, why: "O modo desportivo troca funções de segurança por velocidade." },
      { objective: "O4", q: "Depois de qualquer acidente ou incidente grave, deve:", options: ["Escondê-lo", "Tornar a zona segura, verificar danos, registá-lo e comunicá-lo se for exigido", "Voltar a voar logo, sem verificar", "Apagar o registo"], answer: 1, why: "Primeiro a segurança, depois os registos e qualquer comunicação exigida." },
      { objective: "O4", q: "Durante uma perda de GPS, o plano mais seguro é:", options: ["Voar para mais longe", "Subir o mais alto possível", "Trazer o drone de volta à mão, com cuidado, contra o vento, e aterrar em breve", "Largar as alavancas e esperar"], answer: 2, why: "O controlo manual e uma aterragem cedo evitam uma fuga do drone." },
      { objective: "O4", q: "Uma fuga do drone (fly-away) é:", options: ["Um voo normal de mapeamento", "Um tipo de hélice", "Uma plataforma de aterragem", "Um drone a voar para longe, fora do controlo do piloto"], answer: 3, why: "É uma perda de controlo, muitas vezes depois de problemas de GPS ou de ligação." },
      { objective: "O2", q: "Numa caderneta de voo, o tempo no simulador e o tempo de voo verdadeiro devem ser:", options: ["Mantidos em colunas separadas", "Somados sem indicação", "Não registados", "Registados só se passarem de uma hora"], answer: 0, why: "As autoridades e os formadores precisam de ver cada tipo em separado." },
      { objective: "O5", q: "No Quénia, as escolas de drones aprovadas chamam-se:", options: ["Clubes de drones", "Organizações de Formação em Sistemas de Aeronaves Não Tripuladas (UTO)", "Lojas agropecuárias", "Clínicas de plantas"], answer: 1, why: "A KCAA aprova as UTO e publica a sua lista." },
      { objective: "O5", q: "Que tema faz parte da formação teórica de piloto remoto?", options: ["Culinária", "Regras do futebol", "Direito aéreo, espaço aéreo e meteorologia", "Música"], answer: 2, why: "Os pilotos têm de conhecer o direito aéreo, o espaço aéreo, a meteorologia e a sua aeronave." },
      { objective: "O5", q: "Onde deve verificar a taxa da licença?", options: ["Numa publicação nas redes sociais", "No anúncio de um vendedor", "Na memória de um velho amigo", "Na tabela oficial de taxas da autoridade de aviação"], answer: 3, why: "As taxas mudam; só a tabela oficial é de confiança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      4,
      8,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, pratique ou corrija essa parte e verifique-a outra vez.",
    criteria: [
      {
        name: "Cinco exercícios",
        objective: "O2",
        notYet: "Um ou mais exercícios ainda não são feitos com suavidade três vezes seguidas.",
        meets: "Pairar, quadrado, oito, órbita e linhas paralelas, cada um feito com suavidade três vezes seguidas.",
        exceeds: "Também faz o quadrado e o oito com suavidade com a frente para si."
      },
      {
        name: "Exercícios de emergência",
        objective: "O4",
        notYet: "Entra em pânico ou salta passos num exercício de emergência.",
        meets: "Segue os passos certos em caso de perda de ligação, bateria fraca e perda de GPS.",
        exceeds: "Aterra em segurança no modo de atitude, contra o vento, sem ajuda."
      },
      {
        name: "Caderneta de voo",
        objective: "O2",
        notYet: "Faltam sessões ou os registos não têm os campos principais.",
        meets: "Todas as sessões registadas com data, simulador, minutos, tipo, condições, problemas e lições.",
        exceeds: "O tempo no simulador e o tempo real estão em colunas separadas e a caderneta tem cópia de segurança."
      },
      {
        name: "Plano de licenciamento",
        objective: "O5",
        notYet: "Falta a autoridade, a licença ou os passos, ou os custos são adivinhados.",
        meets: "Autoridade, escolas aprovadas encontradas, licença necessária, passos, documentos, custo de fontes oficiais e datas-alvo.",
        exceeds: "Já contactou uma escola da lista aprovada e anotou a data da verificação."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da rubrica",
      "Alunos que se inscrevem numa organização de formação aprovada no prazo de 90 dias (inquérito de acompanhamento)",
      "Alunos que obtêm uma licença de piloto remoto no prazo de um ano",
      "Alunos que dizem voar só com o registo, a licença e as autorizações que o seu país exige"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou telefone com um simulador de drone gratuito ou barato; um comando, se houver",
      "Uma caderneta de voo em papel, uma folha de cálculo ou uma aplicação de registo",
      "Acesso à internet para as páginas da autoridade de aviação e a lista de escolas aprovadas",
      "Cerca de 60 minutos de lições, mais sessões curtas diárias de 15 a 20 minutos no simulador durante várias semanas"
    ],
    facilitatorNotes: [
      "Façam juntos o teste inicial e depois mostre os primeiros exercícios num ecrã partilhado para que os alunos vejam os movimentos das alavancas.",
      "Deixe claro que o curso não dá licença nem autorização para voar com drones verdadeiros.",
      "Faça pequenas sessões de verificação dos exercícios em que os alunos mostram cada exercício três vezes seguidas.",
      "Veja com os alunos as listas de organizações de formação aprovadas e avise-os para não pagarem a escolas que não estejam na lista.",
      "Avalie os exercícios, a caderneta de voo e o plano de licenciamento com a rubrica e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
