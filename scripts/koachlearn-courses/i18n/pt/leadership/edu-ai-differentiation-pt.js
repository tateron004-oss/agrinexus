"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ai-differentiation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "edu-ai-differentiation-pt",
  lang: "pt",
  translationOf: "edu-ai-differentiation",
  category: "Leadership Development",
  name: "Diferenciação com Apoio da IA",
  skills: "Escrever uma avaliação diagnóstica rápida, Criar tarefas por níveis, Construir quadros de escolha, Agrupar de forma flexível a partir de evidências, Gerir uma aula diferenciada, Verificar a equidade",
  outcome: "diferenciar uma aula com IA do princípio ao fim: uma avaliação diagnóstica rápida, três tarefas por níveis para o mesmo objetivo, um quadro de escolha e um plano de grupos flexíveis baseado em evidências, tudo verificado quanto à exatidão e à equidade.",
  about: [
    "Este curso é para professores, coordenadores pedagógicos e diretores de escola que querem que cada aluno chegue às metas do seu ano por caminhos diferentes. Diferenciar sempre foi difícil porque leva tempo fazer várias versões de tudo. A IA pode fazer as versões; o professor continua a decidir quem precisa de quê e porquê.",
    "O Capítulo 1 constrói os materiais: uma avaliação diagnóstica, tarefas por níveis e quadros de escolha. O Capítulo 2 trata de os usar: agrupar os alunos de forma flexível a partir de evidências, gerir uma sala de aula diferenciada e garantir que a diferenciação abre portas em vez de prender os alunos em grupos fracos.",
    "Nunca coloque nomes, notas ou outros dados que identifiquem alunos numa ferramenta que a sua direção escolar não aprovou; use dados inventados para praticar. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Diferencie uma aula real: escreva uma avaliação diagnóstica de cinco perguntas com as respostas certas, três tarefas por níveis que chegam todas ao mesmo objetivo (mais apoio, no nível, aprofundamento), um quadro de escolha de nove quadrados para praticar e um plano de grupos feito a partir dos resultados da avaliação diagnóstica de uma turma inventada (sem nomes reais). Verifique cada tarefa quanto à exatidão e à equidade, e escreva como e quando os alunos vão mudar de grupo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Professores, coordenadores pedagógicos e diretores de escola que querem que cada aluno chegue às metas do seu ano por caminhos diferentes, e que estão a começar a usar IA para poupar tempo de planificação.",
    startingPoint: "Sabem planificar e dar uma aula à turma toda e aplicar um teste. Alguns já experimentaram um assistente de IA para fichas de trabalho. Poucos têm uma rotina para fazer depressa tarefas por níveis, quadros de escolha ou grupos flexíveis.",
    gap: "Fazer várias versões de cada tarefa leva mais tempo do que a maioria dos professores tem, por isso a diferenciação muitas vezes fica por fazer ou transforma-se em grupos fixos de fracos e fortes. Os professores precisam de usar a IA para fazer as versões enquanto mantêm as decisões, protegem a privacidade dos alunos e mantêm expectativas altas para todos.",
    constraints: [
      "Tempo: lições curtas que cabem num tempo de planificação",
      "Aparelhos: um computador da escola ou portátil com um assistente de IA que a direção escolar permite",
      "Privacidade: nenhum nome, nota ou dado que identifique alunos em ferramentas não aprovadas pela direção escolar; a prática usa dados inventados",
      "As adaptações obrigatórias dos planos IEP e 504 (planos de apoio a alunos com necessidades especiais nos EUA) têm de existir em todas as versões",
      "Cada tarefa feita com IA tem de ser verificada pelo professor quanto à exatidão e à equidade antes de ser usada"
    ],
    prerequisites: "Nenhum. Professores que nunca usaram ferramentas de IA podem fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma tarefa que você ensina", action: "explicar a diferenciação por prontidão, interesse e preferência de aprendizagem, e descrever o que a IA faz e o que o professor decide", standard: "mantendo a mesma meta de aprendizagem em todas as versões" },
    { id: "O2", condition: "Com um objetivo de aprendizagem e um assistente de IA", action: "criar uma avaliação diagnóstica de cinco perguntas com as respostas certas e três tarefas por níveis", standard: "com os três níveis a praticar o mesmo objetivo" },
    { id: "O3", condition: "Com uma habilidade para praticar", action: "criar um quadro de escolha de nove quadrados com um quadrado obrigatório", standard: "com cada quadrado a praticar a habilidade e a levar mais ou menos o mesmo tempo" },
    { id: "O4", condition: "Com os resultados da avaliação diagnóstica de uma turma inventada", action: "agrupar os alunos a partir de evidências e escrever quando e como mudam de grupo", standard: "usando códigos em vez de nomes e sem grupos fixos" },
    { id: "O5", condition: "Ao planificar uma aula diferenciada", action: "planificar as rotinas, os cartões de tarefa e o tempo para a turma", standard: "dizendo como os alunos encontram a sua tarefa, o que fazer quando ficam presos e o que fazer quando acabam" },
    { id: "O6", condition: "Com uma aula diferenciada já pronta", action: "verificar a mesma meta, a mudança de grupos, os padrões e o acesso, e corrigir o que falhar", standard: "passando nas quatro verificações de equidade" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Construir materiais diferenciados",
      lessons: [
        {
          objectives: ["O1"],
          title: "A diferenciação num minuto, e onde a IA ajuda",
          minutes: 5,
          goal: "Explicar a diferenciação por prontidão, interesse e preferência de aprendizagem, e dizer qual é o papel da IA.",
          text: [
            "Diferenciar quer dizer ajustar a forma como os alunos chegam à mesma meta de aprendizagem. Os professores costumam diferenciar por prontidão (o que um aluno já sabe e consegue fazer), por interesse (o que o motiva) e por preferência de aprendizagem (por exemplo, ler, conversar, desenhar ou construir). A meta fica igual; o caminho muda.",
            "A IA ajuda na parte lenta: fazer várias versões de uma tarefa, um conjunto de exemplos ligados aos interesses dos alunos ou uma variedade de exercícios. Pode transformar uma ficha de problemas em três, ou um texto em versões sobre desporto, música e culinária com a mesma habilidade.",
            "A IA não conhece os seus alunos. O professor decide a meta, lê as evidências, escolhe quem segue cada caminho e verifica cada versão quanto à exatidão e à equidade."
          ],
          words: [["Diferenciação", "ajustar a forma como os alunos chegam à mesma meta de aprendizagem."], ["Prontidão", "o que um aluno já sabe e consegue fazer numa habilidade."], ["Preferência de aprendizagem", "uma forma como um aluno costuma aprender bem, como conversar ou desenhar."]],
          slides: [
            { title: "A mesma meta, caminhos diferentes", bullets: ["Prontidão: o que já sabem agora", "Interesse: o que os motiva", "Preferência de aprendizagem: como trabalham melhor"] },
            { title: "A IA faz as versões", bullets: ["Uma tarefa em três níveis", "A mesma habilidade, interesses diferentes", "Uma variedade de exercícios"] },
            { title: "O professor decide", bullets: ["A meta e as evidências", "Quem segue cada caminho", "Verificar a exatidão e a equidade"] }
          ],
          tryIt: "Pegue numa tarefa que ensina. Peça à IA para a reescrever de três formas, para interesses diferentes (por exemplo desporto, música, culinária), com a mesma habilidade. Verifique que cada uma mantém a habilidade.",
          youCanNow: "explicar a diferenciação e usar a IA para fazer versões de uma tarefa enquanto você toma as decisões.",
          quickCheck: [
            { objective: "O1", q: "O que muda quando diferencia uma aula?", options: ["O caminho que os alunos seguem até à meta", "A própria meta de aprendizagem", "A meta oficial do ano", "Os alunos que fazem o teste final"], answer: 0, why: "Na diferenciação a meta fica igual; só o caminho muda." },
            { objective: "O1", q: "A IA transforma a sua tarefa de leitura numa versão sobre desporto, outra sobre música e outra sobre culinária. O que faz a seguir?", options: ["Distribui-as sem as ler", "Verifica que cada versão ainda pratica a mesma habilidade", "Dá a versão do desporto a todos os alunos", "Pede à IA para escolher que aluno recebe cada versão"], answer: 1, why: "A IA faz as versões, mas é o professor que as verifica e decide quem recebe cada uma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Avaliações diagnósticas e tarefas por níveis",
          minutes: 6,
          goal: "Escrever uma avaliação diagnóstica rápida e três tarefas por níveis para um objetivo.",
          text: [
            "Comece pelas evidências. Peça à IA uma avaliação diagnóstica de cinco perguntas sobre o objetivo: duas sobre as habilidades de que o objetivo depende (pré-requisitos), duas sobre o próprio objetivo e uma de desafio. Peça as respostas certas e o que cada resposta errada pode indicar. Verifique cada pergunta.",
            "As tarefas por níveis chegam ao mesmo objetivo com níveis diferentes de apoio e de complexidade. Pedido: \"Objetivo: [colar]. Escreva três tarefas. Nível 1: mais apoio (exemplo resolvido, passos, lista de palavras). Nível 2: no nível. Nível 3: aprofundamento (uma tarefa mais difícil ou de aplicação na vida real). As três têm de praticar o objetivo. Inclua as respostas certas.\"",
            "Verifique que o Nível 1 não é só mais fácil, mas tem apoio para chegar à mesma meta, e que o Nível 3 é mais profundo, e não só mais trabalho. Os alunos de todos os níveis devem acabar tendo praticado o objetivo."
          ],
          steps: ["Peça uma avaliação diagnóstica de cinco perguntas com as respostas certas.", "Verifique cada pergunta e as respostas.", "Peça três níveis para o mesmo objetivo.", "Nível 1 com apoio, não mais fácil; Nível 3 mais profundo, não mais longo.", "Verifique todas as respostas certas."],
          words: [["Avaliação diagnóstica", "uma verificação curta antes de ensinar, para ver o que os alunos já sabem."], ["Tarefa por níveis", "versões de uma tarefa com níveis diferentes de apoio ou de complexidade, para a mesma meta."], ["Tarefa de aplicação", "usar uma habilidade numa situação nova, muitas vezes da vida real."]],
          slides: [
            { title: "Comece pelas evidências", bullets: ["5 perguntas: pré-requisitos, objetivo, desafio", "Respostas certas e o que as erradas indicam"] },
            { title: "Três níveis, um objetivo", bullets: ["Nível 1: mais apoio", "Nível 2: no nível", "Nível 3: aprofundamento ou aplicação"] },
            { title: "Verifique os níveis", bullets: ["Nível 1 com apoio, não mais fácil", "Nível 3 mais profundo, não mais longo", "Todos praticam o objetivo"] }
          ],
          tryIt: "Com a IA, escreva uma avaliação diagnóstica de cinco perguntas e três tarefas por níveis para um objetivo. Verifique que os três níveis praticam o mesmo objetivo.",
          youCanNow: "criar uma avaliação diagnóstica e tarefas por níveis que chegam todas à mesma meta.",
          quickCheck: [
            { objective: "O2", q: "O que deve ter uma avaliação diagnóstica de cinco perguntas, segundo esta lição?", options: ["Cinco perguntas de desafio", "Cinco perguntas sobre a matéria do ano passado", "Duas perguntas de pré-requisitos, duas sobre o objetivo e uma de desafio", "Só perguntas que os alunos vão acertar com certeza"], answer: 2, why: "Esta mistura mostra quem precisa de ajuda nos pré-requisitos, quem está pronto e quem está pronto para mais." },
            { objective: "O2", q: "A sua tarefa do Nível 3 é a tarefa do Nível 2 com o dobro dos problemas. O que faz?", options: ["Mantém-na, porque mais trabalho é mais difícil", "Tira o Nível 3", "Dá-a ao grupo de apoio", "Troca-a por uma tarefa mais profunda, como usar a habilidade numa situação nova"], answer: 3, why: "O Nível 3 deve ser mais profundo, e não só mais trabalho." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Quadros de escolha",
          minutes: 5,
          goal: "Construir com a IA um quadro de escolha de nove quadrados para praticar.",
          text: [
            "Um quadro de escolha é uma grelha de atividades, muitas vezes com nove quadrados, que praticam todas a mesma habilidade de formas diferentes: escrever, desenhar, explicar em voz alta, resolver, construir, ensinar alguém. Os alunos escolhem um número fixo, por exemplo três em linha.",
            "Pedido: \"Faça um quadro de escolha de 3 por 3 para alunos do 6.º ano a praticar [habilidade]. Cada quadrado é uma forma diferente de praticar: escrever, desenhar, conversar, resolver problemas, criar, vida real. Cada quadrado tem de praticar a habilidade. Ponha um quadrado obrigatório no meio.\"",
            "Verifique que cada quadrado pratica mesmo a habilidade e leva mais ou menos o mesmo tempo, e que os materiais estão disponíveis. A escolha aumenta o envolvimento; nunca deve tornar-se uma forma de fugir à parte difícil."
          ],
          steps: ["Diga a habilidade e o ano.", "Peça um quadro de 3 por 3 com formas variadas de praticar.", "Faça do quadrado do meio um quadrado obrigatório.", "Verifique que cada quadrado pratica a habilidade e leva mais ou menos o mesmo tempo.", "Verifique que os materiais estão disponíveis."],
          words: [["Quadro de escolha", "uma grelha de atividades que praticam a mesma habilidade de formas diferentes, entre as quais os alunos escolhem."], ["Obrigatório", "uma atividade que todos os alunos fazem."]],
          slides: [
            { title: "Uma grelha de formas de praticar", bullets: ["Escrever, desenhar, conversar, resolver, construir", "Os alunos escolhem, por exemplo três em linha"] },
            { title: "O pedido", bullets: ["3 por 3, formas variadas de praticar", "Cada quadrado pratica a habilidade", "Quadrado obrigatório no meio"] },
            { title: "Verifique", bullets: ["A mesma habilidade, mais ou menos o mesmo tempo", "Materiais disponíveis", "Escolha, não fuga"] }
          ],
          tryIt: "Construa com a IA um quadro de escolha de 3 por 3 para uma habilidade. Verifique cada quadrado e troque os que não praticam a habilidade.",
          youCanNow: "criar quadros de escolha que dão uma escolha real enquanto praticam a mesma habilidade.",
          quickCheck: [
            { objective: "O3", q: "O que é um quadro de escolha?", options: ["Uma grelha de atividades que praticam todas a mesma habilidade de formas diferentes", "Uma lista de temas diferentes que os alunos podem saltar", "Uma planta dos lugares na sala", "Um quadro onde os alunos votam no trabalho de casa"], answer: 0, why: "Cada quadrado pratica a mesma habilidade; só muda a forma de praticar." },
            { objective: "O3", q: "Um quadrado do quadro feito com IA pede aos alunos para desenhar o seu animal preferido, o que não pratica a habilidade. O que faz?", options: ["Mantém-no para os alunos terem uma escolha divertida", "Faz dele o quadrado obrigatório", "Troca-o por um quadrado que pratica a habilidade", "Tira o quadro todo"], answer: 2, why: "A escolha nunca deve tornar-se uma forma de fugir à habilidade." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Construir materiais diferenciados",
        questions: [
          { objective: "O1", q: "Na diferenciação, o que fica igual?", options: ["O caminho", "Os materiais", "A meta de aprendizagem", "O grupo"], answer: 2, why: "A meta fica; o caminho muda." },
          { objective: "O1", q: "O que é que a IA NÃO conhece quando diferencia?", options: ["Os seus alunos", "Como reescrever uma tarefa", "Como fazer três níveis", "Interesses comuns"], answer: 0, why: "Os professores conhecem os alunos e decidem os caminhos." },
          { objective: "O2", q: "Uma boa tarefa do Nível 1 é:", options: ["Uma habilidade diferente e mais fácil", "Saltar o objetivo", "Só pintar", "Com apoio para chegar ao mesmo objetivo"], answer: 3, why: "Apoio, não uma meta mais baixa." },
          { objective: "O2", q: "Uma boa tarefa do Nível 3 é:", options: ["Mais problemas iguais", "Mais profunda, como uma tarefa de aplicação", "Opcional", "Mais curta"], answer: 1, why: "Aprofundar quer dizer profundidade, não quantidade." },
          { objective: "O3", q: "Cada quadrado de um quadro de escolha deve:", options: ["Precisar de materiais especiais", "Ser um jogo", "Levar tempos diferentes", "Praticar a mesma habilidade"], answer: 3, why: "Escolha do caminho, a mesma habilidade." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar bem a diferenciação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Grupos flexíveis a partir de evidências",
          minutes: 6,
          goal: "Agrupar os alunos a partir das evidências da avaliação diagnóstica e planificar como mudam de grupo.",
          text: [
            "Os grupos flexíveis mudam muitas vezes, com base nas evidências atuais sobre uma habilidade concreta, e não num rótulo. Depois da avaliação diagnóstica, separe os resultados em grupos para este objetivo: precisa de apoio nos pré-requisitos, pronto para o objetivo, pronto para aprofundar.",
            "A IA pode ajudar a ver padrões, mas as notas dos alunos com nomes são registos escolares protegidos. Faça a separação você mesmo na sua caderneta de notas, use uma ferramenta aprovada pela direção escolar, ou troque os nomes por códigos antes de usar a IA. Pratique com uma turma inventada.",
            "Planifique a mudança: depois de cada verificação (uma pergunta de saída, uma pergunta-chave a meio da aula), os alunos passam para o grupo que lhes serve agora. Escreva quando vai verificar outra vez e como um aluno sobe de grupo. Grupos que nunca mudam tornam-se grupos fixos por nível."
          ],
          steps: ["Separe os resultados da avaliação diagnóstica por habilidade, não por rótulo.", "Use a sua caderneta de notas ou uma ferramenta aprovada; nunca nomes em ferramentas não aprovadas.", "Forme três grupos para este objetivo.", "Planifique novas verificações depois de cada aula.", "Mude os alunos de grupo quando as evidências mudam."],
          words: [["Grupos flexíveis", "agrupar os alunos pelas evidências atuais sobre uma habilidade, mudando muitas vezes."], ["Grupos fixos por nível", "manter os alunos no mesmo grupo de nível durante muito tempo, o que pode limitar as suas oportunidades."]],
          slides: [
            { title: "Grupos a partir de evidências", bullets: ["Pela habilidade atual, não por um rótulo", "Apoio nos pré-requisitos, pronto, aprofundar"] },
            { title: "Proteja os dados dos alunos", bullets: ["Notas com nomes são registos escolares", "Caderneta de notas ou ferramenta aprovada", "Ou códigos, não nomes"] },
            { title: "Mantenha os grupos a mudar", bullets: ["Verifique outra vez depois de cada aula", "Os alunos mudam quando as evidências mudam", "Grupos fixos tornam-se grupos por nível"] }
          ],
          sources: [{ name: "FERPA (lei dos EUA): proteger a privacidade dos alunos", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Invente resultados de uma avaliação diagnóstica para 24 alunos usando códigos (S1 a S24). Forme três grupos para o objetivo e escreva quando e como os alunos vão mudar entre eles.",
          youCanNow: "agrupar os alunos de forma flexível a partir de evidências e manter os grupos a mudar.",
          quickCheck: [
            { objective: "O4", q: "O que torna um grupo \"flexível\"?", options: ["Os alunos escolhem o grupo que quiserem", "Muda muitas vezes, com base nas evidências atuais sobre uma habilidade", "Fica igual o ano todo", "Baseia-se no rótulo de um aluno"], answer: 1, why: "Os grupos flexíveis seguem as evidências atuais e mudam à medida que os alunos aprendem." },
            { objective: "O4", q: "Quer que a IA o ajude a ver padrões nas notas da avaliação diagnóstica da sua turma. O que faz primeiro?", options: ["Cola a caderneta de notas com os nomes", "Envia as notas por e-mail a um colega", "Afixa as notas na parede", "Troca os nomes por códigos como S1, ou usa uma ferramenta aprovada pela direção escolar"], answer: 3, why: "As notas dos alunos com nomes são registos escolares, por isso proteja-as antes de usar a IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gerir uma aula diferenciada",
          minutes: 5,
          goal: "Planificar as rotinas que fazem uma aula diferenciada funcionar na sala.",
          text: [
            "As aulas diferenciadas falham mais pela organização do que pelos materiais. Planifique rotinas: como os alunos sabem a sua tarefa (um slide ou cartão com os nomes ou cores dos grupos), onde estão os materiais, o que fazer quando ficam presos (\"pergunte a três colegas antes de mim\", um cartão de ajuda) e o que fazer quando acabam (o quadro de escolha).",
            "Planifique o seu tempo: comece com uma pequena explicação para a turma toda, depois trabalhe com o grupo que mais precisa de você enquanto os outros trabalham, e depois passe por cada grupo. A IA pode fazer rascunhos dos cartões de tarefa, dos cartões de ajuda e de um plano de tempo.",
            "Torne isto normal. Use nomes neutros para os grupos (cores ou formas, não \"fracos\" e \"fortes\"), mude os grupos muitas vezes e dê trabalho interessante a todos os grupos. Os alunos reparam quando um grupo recebe sempre as tarefas aborrecidas."
          ],
          steps: ["Mostre claramente a cada grupo a sua tarefa.", "Defina as rotinas dos materiais, de quando ficam presos e de quando acabam.", "Pequena explicação, depois tempo do professor com o grupo que mais precisa.", "Passe por cada grupo.", "Use nomes neutros e trabalho interessante para todos."],
          words: [["Rotina", "uma forma habitual de fazer algo que os alunos aprendem e seguem."], ["Ensino em pequeno grupo", "o professor a ensinar poucos alunos de cada vez enquanto os outros trabalham."]],
          slides: [
            { title: "A organização decide o sucesso", bullets: ["Cartões de tarefa claros", "Rotinas: materiais, quando ficam presos, quando acabam"] },
            { title: "Planifique o seu tempo", bullets: ["Pequena explicação para a turma toda", "Trabalhe com o grupo que mais precisa de você", "Passe por cada grupo"] },
            { title: "Torne isto normal", bullets: ["Nomes neutros para os grupos", "Os grupos mudam muitas vezes", "Trabalho interessante para todos os grupos"] }
          ],
          tryIt: "Use a IA para fazer rascunhos dos cartões de tarefa dos seus três níveis, de um cartão de ajuda para quando os alunos ficam presos e de um plano de tempo para uma aula de 50 minutos.",
          youCanNow: "gerir uma aula diferenciada com rotinas claras e práticas de grupo justas.",
          quickCheck: [
            { objective: "O5", q: "Porque é que as aulas diferenciadas falham mais vezes?", options: ["Pela organização e pelas rotinas", "Por haver poucas fichas", "Porque os alunos não gostam de escolher", "Porque a IA faz versões a mais"], answer: 0, why: "A lição diz que falham mais pela organização do que pelos materiais." },
            { objective: "O5", q: "Alguns alunos acabam a tarefa do seu nível dez minutos mais cedo. O que deve o seu plano dizer-lhes para fazer?", options: ["Esperar em silêncio", "Começar a tarefa do nível seguinte", "Ir para o quadro de escolha", "Juntar-se ao grupo do professor"], answer: 2, why: "O plano deve dizer o que fazer quando acabam, por exemplo o quadro de escolha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Verificar se a diferenciação é justa",
          minutes: 6,
          goal: "Verificar que a diferenciação abre portas em vez de baixar as expectativas.",
          text: [
            "A diferenciação pode, sem ninguém reparar, tornar-se expectativas mais baixas: alguns alunos recebem sempre tarefas mais fáceis e nunca chegam à meta do seu ano. Verifique quatro coisas. A mesma meta: cada aluno pratica o objetivo do seu ano? A mudança: os alunos mudaram de grupo ao longo da unidade?",
            "Os padrões: veja (protegendo a privacidade) quem fica em cada grupo ao longo do tempo. Se os alunos de uma origem, os que estão a aprender a língua ou os alunos com deficiência estão sempre no grupo de apoio, pergunte porquê. O acesso: os apoios, como ler em voz alta ou imagens, chegam a cada aluno que precisa, incluindo as adaptações obrigatórias dos planos IEP e 504?",
            "Os materiais da IA precisam da mesma verificação: os exemplos e os nomes são variados e respeitosos, sem estereótipos sobre quem é bom em quê? Os diretores podem pedir às equipas que tragam uma aula diferenciada a uma reunião e façam esta verificação juntos."
          ],
          steps: ["A mesma meta em todos os níveis?", "Os alunos mudaram de grupo?", "Quem está sempre em cada grupo, e porquê?", "Os apoios e as adaptações obrigatórias chegam a todos?", "Os exemplos da IA são variados e sem estereótipos?"],
          words: [["Expectativas", "o que os professores acreditam que os alunos conseguem alcançar, o que influencia o que lhes ensinam."], ["Estereótipo", "uma ideia injusta e fixa sobre um grupo de pessoas."]],
          slides: [
            { title: "Cuidado com expectativas mais baixas", bullets: ["Cada nível chega à meta do ano", "Os alunos mudam de grupo"] },
            { title: "Veja os padrões", bullets: ["Quem está sempre no grupo de apoio?", "Alunos a aprender a língua, com deficiência, origem", "Pergunte porquê"] },
            { title: "Acesso e conteúdo", bullets: ["Os apoios e as adaptações chegam a todos", "Exemplos da IA variados, sem estereótipos"] }
          ],
          tryIt: "Tarefa final: junte a sua aula diferenciada (avaliação diagnóstica com respostas certas, três níveis, quadro de escolha, plano de grupos com dados inventados e regras de mudança), faça nela as quatro verificações de equidade e corrija o que falhar.",
          youCanNow: "diferenciar aulas com IA de uma forma que mantém as expectativas altas para cada aluno.",
          quickCheck: [
            { objective: "O6", q: "O que pergunta a verificação de equidade da \"mesma meta\"?", options: ["Todos os grupos recebem a mesma ficha?", "Cada aluno pratica o objetivo do seu ano?", "Todos os grupos acabam ao mesmo tempo?", "Todos os alunos têm a mesma nota?"], answer: 1, why: "A diferenciação não pode deixar alguns alunos longe da meta do seu ano." },
            { objective: "O6", q: "Ao longo da unidade, os mesmos alunos de uma origem estão sempre no grupo de apoio. O que faz?", options: ["Deixa-os lá, porque está a funcionar", "Passa-os para o aprofundamento sem evidências", "Deixa de usar grupos", "Pergunta porquê e verifica se os grupos refletem a habilidade ou outra coisa"], answer: 3, why: "Um padrão assim é um sinal de alerta de que a diferenciação está a tornar-se expectativas mais baixas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar bem a diferenciação",
        questions: [
          { objective: "O4", q: "Os grupos flexíveis baseiam-se em:", options: ["Um rótulo do ano passado", "A popularidade dos alunos", "Evidências atuais sobre uma habilidade concreta", "A planta dos lugares"], answer: 2, why: "Decidem as evidências sobre a habilidade atual." },
          { objective: "O4", q: "Quer que a IA ajude a separar os resultados da avaliação diagnóstica. O que é seguro?", options: ["Usar códigos em vez de nomes, ou uma ferramenta aprovada", "Colar nomes e notas numa ferramenta gratuita", "Publicar os resultados na internet", "Enviá-los por e-mail a um fornecedor"], answer: 0, why: "As notas com nomes são registos escolares." },
          { objective: "O5", q: "Que nomes de grupo são os melhores?", options: ["Fracos, médios, fortes", "Cores ou formas", "Espertos e lentos", "As notas dos alunos nos testes"], answer: 1, why: "Nomes neutros evitam rotular os alunos." },
          { objective: "O6", q: "Os alunos que estão a aprender a língua ficam sempre no grupo de apoio durante toda a unidade. O que deve fazer?", options: ["Perguntar porquê e verificar se os grupos refletem a língua em vez da compreensão", "Nada", "Torná-lo permanente", "Tirá-los da turma"], answer: 0, why: "Os padrões podem mostrar grupos injustos." },
          { objective: "O4", q: "Qual é o risco de grupos que nunca mudam?", options: ["Nenhum", "Poupam tempo", "Melhoram a aprendizagem", "Tornam-se grupos fixos por nível"], answer: 3, why: "Os grupos fixos limitam as oportunidades." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Diferenciação com Apoio da IA",
    questions: [
      { objective: "O1", q: "Diferenciar quer dizer:", options: ["Dar metas diferentes", "Ajustar a forma como os alunos chegam à mesma meta", "Turmas separadas", "Menos trabalho para alguns"], answer: 1, why: "A mesma meta, caminhos diferentes." },
      { objective: "O1", q: "A prontidão refere-se a:", options: ["Idade", "Chegar a horas", "O que um aluno já sabe e consegue fazer", "Só a velocidade de leitura"], answer: 2, why: "Depende de cada habilidade." },
      { objective: "O1", q: "As versões ligadas aos interesses mantêm:", options: ["Nenhuma habilidade", "Habilidades diferentes", "A mesma habilidade", "Só o tema"], answer: 2, why: "Muda o contexto, não a habilidade." },
      { objective: "O1", q: "Quem decide que aluno segue cada caminho?", options: ["O professor", "A IA", "O fornecedor", "Só os pais do aluno"], answer: 0, why: "Os professores leem as evidências e decidem." },
      { objective: "O2", q: "Uma avaliação diagnóstica faz-se:", options: ["Só a alguns alunos", "No fim do ano", "Nunca", "Antes de ensinar"], answer: 3, why: "Mostra onde os alunos começam." },
      { objective: "O2", q: "Uma boa avaliação diagnóstica inclui:", options: ["Só as perguntas mais difíceis", "Pré-requisitos, o objetivo e uma pergunta de desafio", "Só perguntas de opinião", "Nada sobre o objetivo"], answer: 1, why: "Mostra a variedade de prontidão." },
      { objective: "O2", q: "As tarefas por níveis visam:", options: ["Só os melhores alunos", "Objetivos diferentes", "Nenhum objetivo", "O mesmo objetivo"], answer: 3, why: "Os níveis mudam o apoio e a complexidade, não a meta." },
      { objective: "O2", q: "Uma tarefa de aplicação:", options: ["Copia uma resposta", "Muda um aluno para outra escola", "Usa uma habilidade numa situação nova", "É repetir um teste"], answer: 2, why: "Aprofunda a aprendizagem." },
      { objective: "O3", q: "Um quadro de escolha costuma ter:", options: ["Nove quadrados de atividades para a mesma habilidade", "Uma atividade", "Só jogos", "Notas"], answer: 0, why: "Uma grelha de formas de praticar." },
      { objective: "O3", q: "O quadrado obrigatório de um quadro de escolha é:", options: ["Opcional", "Feito por todos os alunos", "Para o professor", "Só para os alunos mais avançados"], answer: 1, why: "Garante a prática principal." },
      { objective: "O3", q: "Os quadrados de um quadro de escolha devem levar:", options: ["Mais ou menos o mesmo tempo", "Tempos muito diferentes", "Nenhum tempo", "Só tempo do trabalho de casa"], answer: 0, why: "Uma escolha justa precisa de um esforço parecido." },
      { objective: "O4", q: "As notas dos alunos com nomes são:", options: ["Propriedade das empresas de IA", "Públicas", "Seguras em qualquer aplicação", "Registos escolares protegidos pela FERPA"], answer: 3, why: "Proteja-as." },
      { objective: "O4", q: "Trocar os nomes por códigos como S1 ajuda a:", options: ["Corrigir mais depressa", "Proteger a privacidade dos alunos ao praticar com a IA", "Esconder as notas dos professores", "Nada"], answer: 1, why: "Os códigos tiram os nomes que identificam." },
      { objective: "O4", q: "Os alunos devem mudar de grupo:", options: ["Só no fim do ano", "Nunca", "Quando novas evidências mostram uma mudança", "Ao acaso"], answer: 2, why: "Flexível quer dizer mudar com as evidências." },
      { objective: "O5", q: "As aulas diferenciadas falham muitas vezes por causa de:", options: ["Salas com muita luz", "Ideias a mais", "Organização e rotinas", "Nomes curtos"], answer: 2, why: "As rotinas fazem-nas funcionar." },
      { objective: "O5", q: "\"Pergunte a três colegas antes de mim\" é uma rotina para:", options: ["Quando os alunos ficam presos", "Quando os alunos acabam", "Fazer fila", "O almoço"], answer: 0, why: "Desenvolve a autonomia." },
      { objective: "O5", q: "No trabalho de grupo, o professor deve primeiro trabalhar com:", options: ["O diretor", "Ninguém", "Só o grupo de aprofundamento", "O grupo que mais precisa dele"], answer: 3, why: "O tempo do professor vai para onde mais importa." },
      { objective: "O6", q: "A diferenciação torna-se expectativas mais baixas quando:", options: ["Cada nível chega à meta", "Alguns alunos nunca praticam a meta do seu ano", "Os grupos mudam muitas vezes", "São oferecidos apoios"], answer: 1, why: "Todos os alunos precisam da meta do seu ano." },
      { objective: "O6", q: "Numa aula diferenciada, as adaptações obrigatórias dos planos IEP e 504:", options: ["Só se aplicam nos testes", "São substituídas pelos níveis", "São opcionais", "Têm de ser dadas na mesma"], answer: 3, why: "São obrigatórias." },
      { objective: "O6", q: "Os exemplos feitos pela IA devem ser verificados quanto a:", options: ["Só o comprimento", "Só o tamanho da letra", "Variedade e estereótipos", "Nada"], answer: 2, why: "Os materiais devem ser justos e respeitosos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 4, 6, 8, 11, 13, 14, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Avaliação diagnóstica", objective: "O2", notYet: "Menos de cinco perguntas, sem respostas certas, ou sem ligação ao objetivo.", meets: "Cinco perguntas (pré-requisitos, objetivo, desafio) com as respostas certas.", exceeds: "As respostas também dizem o que cada resposta errada pode indicar." },
      { name: "Tarefas por níveis", objective: "O2", notYet: "Os níveis praticam metas diferentes, ou o Nível 3 é só mais trabalho.", meets: "Três níveis (mais apoio, no nível, aprofundamento) praticam todos o mesmo objetivo, com as respostas certas.", exceeds: "O Nível 1 tem apoios claros e o Nível 3 é uma verdadeira tarefa de aplicação." },
      { name: "Quadro de escolha", objective: "O3", notYet: "Alguns quadrados não praticam a habilidade.", meets: "Nove quadrados que praticam todos a habilidade, com um quadrado obrigatório no meio.", exceeds: "Os quadrados levam mais ou menos o mesmo tempo e usam formas diferentes de trabalhar." },
      { name: "Plano de grupos", objective: "O4", notYet: "Usa nomes reais, ou os grupos não mudam.", meets: "Os grupos vêm dos resultados inventados com códigos, e o plano diz quando e como os alunos mudam.", exceeds: "Diz qual é a nova verificação, como uma pergunta de saída, que faz os alunos mudar." },
      { name: "Verificação de equidade", objective: "O6", notYet: "As verificações de equidade não foram feitas.", meets: "As quatro verificações (mesma meta, mudança, padrões, acesso) foram feitas e as falhas corrigidas.", exceeds: "Sabe dizer o que mudou por causa da verificação." }
    ]
  },
  evaluation: {
    results: [
      "Professores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Professores que dão pelo menos uma aula diferenciada em 30 dias (inquérito de seguimento)",
      "Tempo de planificação que os professores dizem poupar ao fazer versões das tarefas",
      "Escolas onde os diretores fazem a verificação de equidade com uma equipa"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com um assistente de IA que a sua direção escolar permite",
      "Um objetivo real de uma aula que você ensina",
      "Uma lista de turma inventada com códigos (S1 a S24)",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça-o como uma sessão de formação de professores: façam o teste inicial juntos e depois peça a cada professor que traga uma aula que vai dar em breve.",
      "Nunca deixe os participantes colar nomes ou notas reais de alunos na IA; dê-lhes uma turma inventada com códigos.",
      "Junte em pares professores do mesmo ano ou da mesma disciplina para verificarem os níveis uns dos outros.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Os diretores podem terminar com as quatro verificações de equidade feitas juntos numa aula partilhada."
    ]
  }
};
