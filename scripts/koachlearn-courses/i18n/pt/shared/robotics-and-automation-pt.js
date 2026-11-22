"use strict";

// Koach Learn course (Portuguese translation of shared/robotics-and-automation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "robotics-and-automation-pt",
  lang: "pt",
  translationOf: "robotics-and-automation",
  category: "Youth",
  name: "Introdução à Robótica, à IA e à Automação",
  skills: "Explicar sentir-pensar-agir, Escolher sensores e atuadores, Escrever um algoritmo, Programar um robô virtual com blocos, Usar um sensor para tomar decisões, Testar e depurar",
  outcome: "planear e programar um robô virtual com programação por blocos gratuita, para que ele faça um percurso, use um sensor para evitar uma parede e seja testado e corrigido até funcionar.",
  about: [
    "Os robôs e a automação estão em armazéns, quintas, hospitais, carros e casas. Este curso mostra como funcionam e deixa você programar um, sem comprar nenhum robô e sem precisar de experiência em programação.",
    "É para jovens com curiosidade sobre profissões de tecnologia, para antigos militares que trabalharam com sistemas não tripulados ou manutenção e procuram um caminho na vida civil, e para quem quer perceber as máquinas que estão a mudar o trabalho.",
    "Você vai aprender a ideia de sentir-pensar-agir, planear no papel os movimentos de um robô e depois programar um robô virtual gratuito num navegador de internet, com blocos. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Numa ferramenta gratuita de robô virtual, como o VEXcode VR, escreva um programa de blocos que faça o robô andar num quadrado. Depois escreva um segundo programa que o faça andar para a frente até um sensor encontrar uma parede, parar, virar e continuar. Teste-o, corrija pelo menos um erro e escreva três frases a explicar o que o robô sente, como decide e como age.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens (do ensino básico até jovens adultos) com curiosidade sobre robôs, programação ou profissões de tecnologia, na escola, em atividades depois das aulas, em bibliotecas ou em centros juvenis.",
    startingPoint: "Sabem usar um computador, um Chromebook ou um tablet e um navegador de internet, e já viram robôs em vídeos ou em lojas. A maioria nunca escreveu um programa nem planeou um algoritmo.",
    gap: "Os robôs e a automação estão a crescer em armazéns, fábricas, quintas e hospitais, e os empregos de técnico e de programador precisam de pessoas que saibam planear passos, programar, testar e corrigir. Os alunos precisam de uma primeira vitória prática com um robô virtual para ganharem confiança e verem um caminho para estas profissões.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano)",
      "Aparelhos: um computador, Chromebook ou tablet com navegador de internet; não é preciso um robô verdadeiro",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total",
      "As versões e funções das ferramentas gratuitas podem mudar; use a que a escola ou a biblioteca prefere",
      "Segurança: os robôs industriais verdadeiros só se usam com formação de segurança do local"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com exemplos de máquinas reais", action: "identificar quais são robôs, quais são automação e quais usam IA, e descrever o ciclo sentir-pensar-agir", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com um trabalho que um robô tem de fazer", action: "escolher os sensores e os atuadores de que ele precisa", standard: "com uma razão para cada peça" },
    { id: "O3", condition: "Com uma tarefa para um robô", action: "escrever um algoritmo com palavras simples, com passos exatos, um ciclo e uma decisão se-então", standard: "para que funcione quando você mesmo o percorre" },
    { id: "O4", condition: "Usando uma ferramenta gratuita de robô virtual, como o VEXcode VR", action: "programar o robô com blocos para andar num quadrado", standard: "para que volte perto de onde começou" },
    { id: "O5", condition: "Com um robô que tem de evitar uma parede", action: "acrescentar ao programa uma decisão se-então com um sensor e corrigir pelo menos um erro", standard: "mudando uma coisa de cada vez até o robô parar e virar na parede" },
    { id: "O6", condition: "Com um local de trabalho que usa robôs", action: "dizer empregos reais com robôs e as regras de segurança que as pessoas seguem perto dos robôs", standard: "dizendo pelo menos dois empregos e duas regras de segurança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam os robôs e a automação",
      lessons: [
        {
          objectives: ["O1"],
          title: "Robôs, automação e IA: qual é a diferença?",
          minutes: 4,
          goal: "Separar máquinas reais em robôs, automação e IA, e explicar sentir-pensar-agir.",
          text: [
            "Automação quer dizer que uma máquina ou um programa faz uma tarefa sozinho depois de ser preparado, como o ciclo de uma máquina de lavar loiça ou a passadeira rolante de uma fábrica. Um robô é uma máquina que consegue sentir o mundo à sua volta e mover-se ou agir nele, como um aspirador robô ou um robô de armazém que transporta prateleiras.",
            "Todos os robôs seguem o mesmo ciclo: sentir, pensar, agir. Sentem com sensores (câmaras, interruptores de toque, sensores de distância), pensam com um programa de computador que decide o que fazer e agem com motores, rodas, braços ou garras. Depois voltam a sentir.",
            "A IA é um tipo de programa que pensa e aprende padrões a partir de exemplos, como reconhecer uma pessoa numa imagem de câmara. Muitos robôs usam regras simples, não IA. Alguns usam IA para ver, planear percursos ou perceber a fala."
          ],
          words: [["Automação", "uma máquina ou um programa que faz uma tarefa sozinho depois de ser preparado."], ["Robô", "uma máquina que consegue sentir o que está à sua volta e agir nesse espaço."], ["Sentir-pensar-agir", "o ciclo que todos os robôs seguem: receber informação, decidir e depois mover-se ou agir."], ["IA", "inteligência artificial: programas que aprendem padrões a partir de exemplos para tomar decisões."]],
          slides: [
            { title: "Automação ou robô", bullets: ["Automação: faz sozinha uma tarefa fixa", "Robô: sente o que está à sua volta e age nesse espaço"] },
            { title: "O ciclo do robô", bullets: ["Sentir: os sensores recebem informação", "Pensar: um programa decide", "Agir: motores, rodas ou braços movem-se", "Depois volta a sentir"] },
            { title: "Onde entra a IA", bullets: ["A IA aprende padrões a partir de exemplos", "Muitos robôs usam regras simples, não IA", "Alguns usam IA para ver, planear ou ouvir"] }
          ],
          tryIt: "Escolha três máquinas que já viu (por exemplo um aspirador robô, uma caixa de pagamento automática, um drone de entregas). Para cada uma, escreva se é automação ou um robô, e uma forma como sente, pensa e age.",
          youCanNow: "distinguir automação, robôs e IA e descrever qualquer robô com sentir-pensar-agir.",
          quickCheck: [
            { objective: "O1", q: "O que faz um robô no passo \"agir\" de sentir-pensar-agir?", options: ["Move-se ou faz algo com motores, rodas ou garras", "Mede o mundo com sensores", "Decide o que fazer com um programa", "Desliga-se"], answer: 0, why: "Agir quer dizer mover-se ou fazer algo com motores, rodas, braços ou garras." },
            { objective: "O1", q: "Um amigo diz que todos os robôs usam IA. O que lhe responde?", options: ["Tem razão; os robôs não funcionam sem IA", "IA quer dizer que o robô tem rodas", "Muitos robôs seguem regras simples; só alguns usam IA", "Robôs e IA são a mesma coisa"], answer: 2, why: "Muitos robôs usam regras simples; alguns usam IA para ver, planear percursos ou perceber a fala." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sensores e atuadores: os sentidos e os músculos do robô",
          minutes: 5,
          goal: "Ligar sensores e atuadores comuns aos trabalhos que fazem.",
          text: [
            "Os sensores são os sentidos do robô. Um sensor de distância mede a que distância está uma coisa. Um sensor de toque sabe quando o robô bate em algo. Uma câmara vê imagens. Um sensor de linha ou de cor vê o chão. Um aparelho de GPS sabe a localização ao ar livre.",
            "Os atuadores são os músculos do robô: tudo o que o faz mover-se ou agir. Os motores fazem girar as rodas, os servos viram as articulações até um ângulo exato, e as garras ou as ventosas apanham coisas.",
            "Quando desenhar um robô, comece pelo trabalho. Um robô que tem de parar antes de bater numa parede precisa de um sensor de distância ou de toque e de motores para andar. Um robô que separa caixas vermelhas e azuis precisa de um sensor de cor e de uma garra."
          ],
          words: [["Sensor", "uma peça que recebe informação, como distância, toque, luz ou imagens."], ["Atuador", "uma peça que faz o robô mover-se ou agir, como um motor ou uma garra."], ["Servo", "um motor que vira até um ângulo exato."]],
          slides: [
            { title: "Sensores = sentidos", bullets: ["Distância, toque, câmara", "Sensor de linha ou de cor", "GPS para a localização ao ar livre"] },
            { title: "Atuadores = músculos", bullets: ["Os motores fazem girar as rodas", "Os servos viram até um ângulo exato", "As garras apanham coisas"] },
            { title: "Comece pelo trabalho", bullets: ["Parar antes de uma parede: sensor de distância + motores", "Separar por cor: sensor de cor + garra"] }
          ],
          tryIt: "Desenhe no papel um robô para um trabalho, como regar plantas ou levar uma caixa de um lado ao outro de uma sala. Faça a lista dos sensores e atuadores de que ele precisa, e porquê.",
          youCanNow: "escolher os sensores e os atuadores de que um robô precisa para um trabalho.",
          quickCheck: [
            { objective: "O2", q: "Que peça é um atuador?", options: ["Uma câmara", "Uma garra", "Um sensor de toque", "Um sensor de linha"], answer: 1, why: "Os atuadores fazem o robô mover-se ou agir; uma garra apanha coisas." },
            { objective: "O2", q: "Está a desenhar um robô que segue uma linha preta no chão. Que sensor acrescenta?", options: ["Um aparelho de GPS", "Um sensor de toque", "Um microfone", "Um sensor de linha ou de cor"], answer: 3, why: "Um sensor de linha ou de cor olha para o chão e consegue seguir uma linha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever um algoritmo antes de programar",
          minutes: 5,
          goal: "Escrever um plano passo a passo, com um ciclo e uma decisão, que um robô possa seguir.",
          text: [
            "Um algoritmo é uma lista de passos exatos para terminar uma tarefa. Os robôs não conseguem adivinhar, por isso cada passo tem de ser claro: \"andar 50 centímetros para a frente\" em vez de \"andar um bocado\".",
            "Duas ferramentas tornam os algoritmos poderosos. Um ciclo repete passos, como \"repetir 4 vezes: andar para a frente, virar à direita 90 graus\" para fazer um quadrado. Uma decisão, também chamada se-então, escolhe o que fazer: \"se a parede estiver a menos de 10 centímetros, então parar; senão continuar a andar\".",
            "Primeiro, escreva-o com palavras simples ou desenhe um fluxograma. Depois percorra-o você mesmo, como se fosse o robô. Se você bater em algo no papel, o robô também vai bater."
          ],
          steps: ["Escreva o objetivo numa frase.", "Faça a lista dos passos por ordem, com quantidades exatas.", "Procure os passos que se repetem e transforme-os num ciclo.", "Acrescente as decisões se-então que usam um sensor.", "Percorra-o você mesmo para o testar."],
          words: [["Algoritmo", "uma lista de passos exatos para terminar uma tarefa."], ["Ciclo", "um conjunto de passos que se repete (em inglês, \"loop\")."], ["Se-então", "uma decisão: se algo for verdade, faz uma coisa; senão, faz outra."], ["Fluxograma", "um desenho de um algoritmo com caixas e setas."]],
          slides: [
            { title: "Um algoritmo é exato", bullets: ["\"Andar 50 cm para a frente\", não \"andar um bocado\"", "Os robôs não conseguem adivinhar"] },
            { title: "Ciclos e decisões", bullets: ["Ciclo: repetir 4 vezes, para a frente e virar à direita 90", "Se a parede estiver a menos de 10 cm, parar; senão continuar"] },
            { title: "Teste primeiro no papel", bullets: ["Escreva-o ou desenhe um fluxograma", "Percorra-o como se fosse o robô", "Corrija-o antes de programar"] }
          ],
          tryIt: "Escreva um algoritmo, com um ciclo, para um robô andar num quadrado. Depois acrescente um passo se-então para ele parar se houver algo no caminho. Percorra-o com um brinquedo, um telefone ou os seus próprios pés.",
          youCanNow: "escrever um algoritmo claro com um ciclo e uma decisão se-então, e testá-lo no papel.",
          quickCheck: [
            { objective: "O3", q: "O que faz um ciclo num algoritmo?", options: ["Para o robô", "Escolhe entre duas ações", "Repete um conjunto de passos", "Mede a distância"], answer: 2, why: "Um ciclo repete passos, como andar para a frente e virar quatro vezes para fazer um quadrado." },
            { objective: "O3", q: "O seu plano diz \"andar um bocado para a frente\". O que muda antes de programar?", options: ["Dar uma quantidade exata, como 50 centímetros", "Nada; o robô vai adivinhar", "Acrescentar mais passos depois", "Tirar o passo"], answer: 0, why: "Os robôs não conseguem adivinhar, por isso cada passo precisa de uma quantidade exata." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam os robôs e a automação",
        questions: [
          { objective: "O1", q: "Quais são os três passos que todos os robôs repetem?", options: ["Comprar, construir, vender", "Começar, parar, pausar", "Sentir, pensar, agir", "Carregar, andar, estacionar"], answer: 2, why: "Os robôs sentem, decidem com um programa, depois agem, e repetem." },
          { objective: "O2", q: "Que peça é um sensor?", options: ["Um sensor de distância", "O motor de uma roda", "Uma garra", "Uma bateria"], answer: 0, why: "Um sensor de distância recebe informação; os motores e as garras são atuadores." },
          { objective: "O2", q: "Um robô tem de separar caixas vermelhas de caixas azuis. De que precisa mais?", options: ["De um aparelho de GPS", "De um altifalante mais forte", "Só de uma bateria maior", "De um sensor de cor e de uma garra"], answer: 3, why: "Tem de ver a cor e apanhar as caixas." },
          { objective: "O3", q: "Que instrução é clara o suficiente para um robô?", options: ["\"Andar um bocado\"", "\"Andar 50 centímetros para a frente\"", "\"Virar mais ou menos à direita\"", "\"Fazer a coisa\""], answer: 1, why: "Os robôs precisam de quantidades exatas." },
          { objective: "O3", q: "\"Repetir 4 vezes: andar para a frente, virar à direita 90 graus\" usa:", options: ["Um sensor", "Um ciclo", "Uma garra", "Uma palavra-passe"], answer: 1, why: "Um ciclo repete passos; este faz um quadrado." }
        ]
      }
    },
    {
      name: "Capítulo 2: Programar e usar robôs",
      lessons: [
        {
          objectives: ["O4"],
          title: "Programar um robô virtual com blocos",
          minutes: 6,
          goal: "Abrir um robô virtual gratuito e programá-lo para andar num quadrado.",
          text: [
            "Pode praticar a programação de robôs num navegador de internet, sem robô. O VEXcode VR, da VEX Robotics, tem uma versão gratuita que usa blocos de arrastar e largar, como o Scratch, e funciona em computadores, Chromebooks e tablets em vr.vex.com. Há outras opções gratuitas; a sua escola ou biblioteca pode preferir uma delas.",
            "Os blocos encaixam uns nos outros como peças de um puzzle. Um bloco \"andar para a frente\" move o robô, um bloco \"virar à direita\" vira-o e um bloco \"repetir\" faz um ciclo. Carregue em Start (Iniciar) para ver o robô seguir o seu programa num espaço virtual.",
            "Transforme o seu algoritmo do papel em blocos, um passo de cada vez. Execute-o depois de cada mudança, para saber que bloco fez o quê."
          ],
          steps: ["Abra vr.vex.com num navegador de internet.", "Escolha um espaço virtual simples, com o chão livre.", "Arraste para o programa um bloco de andar para a frente e um bloco de virar à direita.", "Coloque-os dentro de um bloco repetir com o número 4.", "Carregue em Start e observe. Ajuste a distância ou a viragem até fazer um quadrado certinho."],
          words: [["Programação por blocos", "programar encaixando blocos visuais em vez de escrever código."], ["Espaço virtual", "o lugar virtual onde o robô simulado anda (no VEXcode VR chama-se \"Playground\")."], ["Simulador", "um programa que funciona como uma máquina real para você praticar com segurança."]],
          slides: [
            { title: "Praticar sem robô", bullets: ["Programação por blocos gratuita no navegador", "VEXcode VR: vr.vex.com", "Funciona em computadores, Chromebooks e tablets"] },
            { title: "Os blocos encaixam", bullets: ["Andar para a frente, virar à direita", "Bloco repetir = ciclo", "Carregue em Start para ver"] },
            { title: "Construa em passos pequenos", bullets: ["Transforme o plano do papel em blocos", "Execute depois de cada mudança", "Ajuste até funcionar"] }
          ],
          sources: [{ name: "VEX Robotics: VEXcode VR", url: "https://www.vexrobotics.com/vexcode-vr" }],
          tryIt: "No VEXcode VR ou noutro robô virtual gratuito, programe o robô para andar num quadrado usando um bloco repetir. Faça-o terminar perto de onde começou.",
          youCanNow: "programar um robô virtual com blocos, usando um ciclo para andar num quadrado.",
          quickCheck: [
            { objective: "O4", q: "Na programação por blocos, o que faz o botão Start?", options: ["Apaga os seus blocos", "Guarda o programa numa pen USB", "Abre um novo espaço virtual", "Executa o programa para você ver o robô segui-lo"], answer: 3, why: "Carregar em Start executa o programa no espaço virtual." },
            { objective: "O4", q: "Acrescentou cinco blocos novos de uma vez e o robô bate. O que devia ter feito?", options: ["Acrescentar ainda mais blocos", "Executar o programa depois de cada mudança", "Usar um robô verdadeiro", "Desligar o sensor"], answer: 1, why: "Executar depois de cada mudança mostra que bloco fez o quê." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar um sensor para decidir, e depois depurar",
          minutes: 6,
          goal: "Acrescentar a um programa de robô uma decisão se-então com um sensor e corrigir um erro.",
          text: [
            "Um robô que só segue passos fixos é cego. Acrescente um sensor e ele consegue reagir. Na programação por blocos, usa-se um bloco \"se\" com a leitura de um sensor lá dentro, como \"se a distância for menor que 100 milímetros\".",
            "Um modelo comum: um ciclo para sempre e, dentro dele, um se-então-senão. Se a parede estiver perto, parar e virar. Senão, andar para a frente. O robô verifica o sensor uma e outra vez, e isso é o ciclo sentir-pensar-agir em código.",
            "Os erros são normais. Depurar quer dizer encontrá-los e corrigi-los. Mude uma coisa de cada vez, execute e observe. Erros comuns: a viragem não é bem de 90 graus, o número da distância está na unidade errada ou um bloco está fora do ciclo."
          ],
          steps: ["Acrescente um ciclo para sempre.", "Dentro dele, acrescente um bloco se-então-senão.", "Coloque no \"se\" uma verificação do sensor de distância.", "Então: parar e virar. Senão: andar para a frente.", "Execute, procure um erro, mude uma coisa e execute outra vez."],
          words: [["Erro (bug)", "um engano num programa que o faz funcionar mal."], ["Depurar", "encontrar e corrigir erros (em inglês, \"debugging\")."], ["Ciclo para sempre", "um ciclo que continua a repetir até o programa ser parado (em inglês, \"forever\")."]],
          slides: [
            { title: "Os sensores deixam os robôs reagir", bullets: ["Use um bloco se com a leitura de um sensor", "Exemplo: se a distância < 100 mm"] },
            { title: "O modelo", bullets: ["Ciclo para sempre", "Se estiver perto: parar e virar", "Senão: andar para a frente"] },
            { title: "Depurar", bullets: ["Mude uma coisa de cada vez", "Verifique viragens, unidades e o lugar dos blocos", "Os erros são normais"] }
          ],
          tryIt: "Programe o robô para andar para a frente até o sensor de distância encontrar uma parede, depois parar, virar e continuar. Escreva um erro que encontrou e como o corrigiu.",
          youCanNow: "usar a leitura de um sensor num se-então-senão para fazer um robô reagir, e depurar o programa.",
          quickCheck: [
            { objective: "O5", q: "No programa que evita a parede, porque se usa um ciclo para sempre?", options: ["Para o robô continuar a verificar o sensor uma e outra vez", "Para o robô só verificar uma vez", "Para o programa nunca começar", "Para o robô andar num quadrado"], answer: 0, why: "O ciclo para sempre repete a verificação do sensor, e isso é sentir-pensar-agir em código." },
            { objective: "O5", q: "O seu robô para a 1 metro da parede em vez de parar perto dela. Qual é um erro provável?", options: ["O robô precisa de uma bateria nova", "O espaço virtual está avariado", "O número da distância está na unidade errada", "A parede é alta demais"], answer: 2, why: "Uma distância na unidade errada, como centímetros em vez de milímetros, é um erro comum." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Onde os robôs trabalham, e como trabalhar com eles em segurança",
          minutes: 5,
          goal: "Dizer empregos reais com robôs e as regras de segurança que as pessoas seguem perto dos robôs.",
          text: [
            "Os robôs e a automação são usados em armazéns (mover prateleiras e encomendas), fábricas (soldar, embalar), quintas (ordenhar, pulverizar, drones), hospitais (entregar materiais, ajudar cirurgiões) e nas forças armadas (desativar bombas, aviões não tripulados).",
            "As pessoas continuam a fazer trabalhos importantes: os técnicos de robótica reparam e mantêm os robôs, os operadores põem-nos a funcionar e vigiam-nos, e os programadores e engenheiros desenham-nos. Muitos empregos de técnico começam com um certificado de um instituto técnico ou com formação militar.",
            "A segurança vem primeiro. Os robôs industriais podem mover-se depressa e bater com força. Os trabalhadores ficam fora das áreas marcadas dos robôs, usam a paragem de emergência e cortam e bloqueiam a energia antes da manutenção. Os robôs colaborativos, ou cobots, são feitos para trabalhar mais perto das pessoas, mas a regra é a mesma: siga a formação de segurança do local."
          ],
          words: [["Técnico de robótica", "uma pessoa que instala, mantém e repara robôs."], ["Cobot", "um robô colaborativo, feito para trabalhar perto das pessoas."], ["Paragem de emergência", "um botão grande que para uma máquina imediatamente."]],
          slides: [
            { title: "Onde os robôs trabalham", bullets: ["Armazéns, fábricas, quintas", "Hospitais e forças armadas"] },
            { title: "Empregos com robôs", bullets: ["Os técnicos reparam-nos e mantêm-nos", "Os operadores põem-nos a funcionar e vigiam-nos", "Os programadores e engenheiros desenham-nos"] },
            { title: "A segurança primeiro", bullets: ["Fique fora das áreas marcadas dos robôs", "Saiba onde está a paragem de emergência", "Siga a formação de segurança do local"] }
          ],
          tryIt: "Tarefa final: termine o seu programa do quadrado e o seu programa com sensor na ferramenta de robô virtual, corrija pelo menos um erro e escreva três frases a explicar o que o seu robô sente, como decide e como age.",
          youCanNow: "programar um robô virtual que sente e reage, explicar como funciona e dizer empregos reais com robôs e regras de segurança.",
          quickCheck: [
            { objective: "O6", q: "Quem repara e mantém os robôs numa fábrica ou num armazém?", options: ["Um operador de caixa", "Um técnico de robótica", "Um motorista de entregas", "Um cliente"], answer: 1, why: "Os técnicos de robótica reparam e mantêm os robôs." },
            { objective: "O6", q: "Está a visitar um armazém e vê robôs a mover-se atrás de uma linha marcada. O que faz?", options: ["Passa a linha para ver de perto", "Toca num robô para ver se para", "Carrega em botões ao calhas", "Fica fora da área marcada e segue as regras de segurança do guia"], answer: 3, why: "Os robôs industriais podem mover-se depressa e bater com força, por isso as pessoas ficam fora das áreas marcadas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Programar e usar robôs",
        questions: [
          { objective: "O4", q: "O que é um simulador?", options: ["Um robô verdadeiro", "Um tipo de sensor", "A bateria de um robô", "Um programa que funciona como uma máquina real para você praticar"], answer: 3, why: "Um simulador deixa você praticar com segurança sem a máquina verdadeira." },
          { objective: "O4", q: "Que bloco faz o robô repetir passos?", options: ["Repetir", "Parar", "Iniciar", "Imprimir"], answer: 0, why: "Um bloco repetir cria um ciclo." },
          { objective: "O5", q: "Que programa deixa um robô evitar uma parede?", options: ["Andar para a frente para sempre sem verificar nada", "Virar à direita uma vez", "Para sempre: se a parede estiver perto, parar e virar; senão andar para a frente", "Parar no início"], answer: 2, why: "O se-então-senão usa o sensor para reagir." },
          { objective: "O5", q: "O seu robô vira um pouco demais de cada vez. Qual é a melhor forma de depurar?", options: ["Apagar o programa todo", "Mudar cinco blocos de uma vez", "Desistir", "Mudar um pouco a viragem e executar outra vez"], answer: 3, why: "Mude uma coisa de cada vez e teste." },
          { objective: "O6", q: "O que deve um trabalhador fazer antes de reparar um robô industrial?", options: ["Entrar nele enquanto funciona", "Pedir ao robô para parar", "Seguir a formação de segurança e cortar e bloquear a energia", "Apagar as luzes"], answer: 2, why: "Cortar e bloquear a energia e seguir a formação mantém as pessoas em segurança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Robótica, à IA e à Automação",
    questions: [
      { objective: "O1", q: "Uma máquina de lavar loiça a fazer o seu ciclo é um exemplo de:", options: ["Um cobot", "Automação", "Um sensor", "Um fluxograma"], answer: 1, why: "Faz sozinha uma tarefa fixa depois de começar." },
      { objective: "O1", q: "O que faz de uma máquina um robô?", options: ["Consegue sentir o que está à sua volta e agir nesse espaço", "É cara", "Tem um ecrã", "Usa eletricidade"], answer: 0, why: "Os robôs sentem e agem no mundo." },
      { objective: "O1", q: "Em sentir-pensar-agir, a parte \"pensar\" é feita:", options: ["Pelas rodas", "Pela bateria", "Pelo programa", "Pela tinta"], answer: 2, why: "O programa decide o que fazer." },
      { objective: "O1", q: "Todos os robôs usam IA?", options: ["Não, muitos seguem regras simples", "Sim, sempre", "Só os aspiradores robô", "Só nos filmes"], answer: 0, why: "Muitos robôs usam programas simples com regras." },
      { objective: "O2", q: "Qual destes é um atuador?", options: ["Câmara", "Sensor de toque", "GPS", "Motor"], answer: 3, why: "Os motores fazem o robô mover-se." },
      { objective: "O2", q: "Um servo é:", options: ["Um sensor de distância", "Um motor que vira até um ângulo exato", "Um carregador de baterias", "Um tipo de ciclo"], answer: 1, why: "Os servos usam-se em articulações que precisam de ângulos exatos." },
      { objective: "O2", q: "Um robô tem de saber quando toca em algo. Que sensor serve?", options: ["Altifalante", "Sensor de toque", "Luz de cor", "Relógio"], answer: 1, why: "Um sensor de toque deteta o contacto." },
      { objective: "O3", q: "Um algoritmo é:", options: ["Uma marca de robôs", "Um tipo de motor", "Uma regra de segurança", "Uma lista de passos exatos para terminar uma tarefa"], answer: 3, why: "Os algoritmos são planos passo a passo." },
      { objective: "O3", q: "Porque se testa primeiro um algoritmo no papel?", options: ["Para encontrar erros antes de programar", "Porque os robôs precisam de papel", "Para o tornar mais longo", "É obrigatório por lei"], answer: 0, why: "Percorrê-lo encontra os erros cedo." },
      { objective: "O3", q: "\"Se a parede estiver perto, parar; senão andar\" é:", options: ["Um ciclo", "Uma garra", "Uma decisão se-então", "Um espaço virtual"], answer: 2, why: "Escolhe entre ações conforme uma condição." },
      { objective: "O3", q: "Um fluxograma mostra um algoritmo com:", options: ["Notas de música", "Fotografias", "Palavras-passe", "Caixas e setas"], answer: 3, why: "Os fluxogramas desenham os passos como caixas ligadas por setas." },
      { objective: "O4", q: "Programação por blocos quer dizer:", options: ["Só escrever código longo", "Bloquear sites", "Encaixar blocos visuais para programar", "Construir com blocos de madeira"], answer: 2, why: "Os blocos são peças visuais de código." },
      { objective: "O4", q: "Quantas vezes deve repetir \"para a frente, virar à direita 90\" para fazer um quadrado?", options: ["2", "3", "4", "10"], answer: 2, why: "Um quadrado tem quatro lados e quatro viragens." },
      { objective: "O4", q: "Porque deve executar o programa depois de cada pequena mudança?", options: ["Para saber que mudança fez o quê", "Para gastar mais bateria", "Porque é obrigatório", "Para apagar blocos"], answer: 0, why: "Passos pequenos tornam os problemas fáceis de encontrar." },
      { objective: "O5", q: "Um ciclo para sempre:", options: ["Funciona uma vez", "Desliga o robô", "Continua a repetir até o programa parar", "É um sensor"], answer: 2, why: "Repete uma e outra vez." },
      { objective: "O5", q: "Depurar quer dizer:", options: ["Encontrar e corrigir erros num programa", "Limpar insetos de um robô", "Comprar um robô novo", "Desligar os sensores"], answer: 0, why: "Os erros (bugs) são enganos no programa." },
      { objective: "O5", q: "O seu robô nunca para na parede. Qual é um erro provável?", options: ["O robô é da cor errada", "O ecrã está claro demais", "O espaço virtual é bonito demais", "A verificação do sensor está fora do ciclo ou usa a distância errada"], answer: 3, why: "O lugar errado ou números errados na verificação do sensor são erros comuns." },
      { objective: "O6", q: "Qual destes é um emprego real com robôs?", options: ["Adivinho de robôs", "Técnico de robótica", "Só pintor de sensores", "Não existe nenhum"], answer: 1, why: "Os técnicos instalam, mantêm e reparam robôs." },
      { objective: "O6", q: "Um cobot é:", options: ["Só um robô de cozinha", "Um robô feito para trabalhar perto das pessoas", "Um robô avariado", "Um robô sem sensores"], answer: 1, why: "Os robôs colaborativos são feitos para trabalhar ao lado das pessoas." },
      { objective: "O6", q: "Vê um braço robótico rápido a trabalhar atrás de uma linha marcada. O que faz?", options: ["Entra para ver de perto", "Toca-lhe para o testar", "Desliga os sensores dele", "Fica fora da área marcada e segue as regras de segurança do local"], answer: 3, why: "As áreas marcadas mantêm as pessoas fora do caminho do robô." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      12,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Programa do quadrado",
        objective: "O4",
        notYet: "O robô não anda num quadrado, ou o programa não tem nenhum ciclo.",
        meets: "Um bloco repetir faz o robô andar num quadrado que termina perto do início.",
        exceeds: "A distância e a viragem foram ajustadas para o quadrado ficar certinho e regular."
      },
      {
        name: "Programa que evita a parede",
        objective: "O5",
        notYet: "O robô bate na parede ou nunca mais se move.",
        meets: "Um ciclo para sempre com um se-então-senão: para e vira na parede, depois continua a andar.",
        exceeds: "Funciona a partir de mais de um ponto de partida no espaço virtual."
      },
      {
        name: "Testar e depurar",
        objective: "O5",
        notYet: "Nenhum erro foi encontrado nem corrigido.",
        meets: "Pelo menos um erro foi encontrado e corrigido mudando uma coisa de cada vez.",
        exceeds: "Sabe explicar o que causou o erro e como o encontrou."
      },
      {
        name: "Planear antes de programar",
        objective: "O3",
        notYet: "Não há plano escrito, ou há passos como \"andar um bocado\".",
        meets: "Um plano com palavras simples, com passos exatos, um ciclo e um se-então.",
        exceeds: "O plano foi percorrido no papel e corrigido antes de programar."
      },
      {
        name: "Sentir, pensar, agir explicado",
        objective: "O1",
        notYet: "Faltam as três frases, ou não dizem o nome de nenhum sensor.",
        meets: "Três frases dizem o que o robô sente, como decide e como age.",
        exceeds: "Também diz se o robô usa IA ou regras simples, e porquê."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que entram num clube de robótica, numa aula de programação ou num programa de ciências e tecnologia (STEM) em 60 dias",
      "Alunos que começam outro curso de tecnologia da Koach Learn em 30 dias",
      "Alunos que dizem ter interesse num caminho de técnico de robótica, programação ou engenharia (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador, Chromebook ou tablet com navegador de internet e internet",
      "Uma ferramenta gratuita de robô virtual, como o VEXcode VR (vr.vex.com), ou a que a escola ou a biblioteca prefere",
      "Papel e caneta para os algoritmos e os fluxogramas",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática de programação, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; mostre os primeiros blocos num ecrã partilhado.",
      "Peça aos alunos para representar um algoritmo: um lê os passos e outro faz exatamente esses passos a andar, para mostrar porque os passos têm de ser exatos.",
      "Ponha os alunos em pares para depurar: um executa o programa e o outro procura o erro.",
      "Se visitarem um local com robôs verdadeiros, sigam as regras de segurança do local e fiquem sempre com o guia.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
