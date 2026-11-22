"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-student-ai-literacy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "edu-student-ai-literacy-pt",
  lang: "pt",
  translationOf: "edu-student-ai-literacy",
  category: "Leadership Development",
  name: "IA para Líderes Escolares e Educacionais 5: Aprendizagem dos Alunos e Literacia em IA",
  skills: "Definir a literacia em IA para os alunos, Dar uma aula prática de literacia em IA, Usar a IA como parceira de aprendizagem, Definir níveis de uso da IA na sala de aula, Ensinar os alunos a declarar o uso da IA, Manter os alunos em segurança",
  outcome: "ensinar os alunos a compreender, questionar e usar a IA com responsabilidade: dar uma aula de 30 minutos sobre literacia em IA, definir níveis claros de uso da IA para os trabalhos, ensinar os alunos a dizer como usaram a IA e explicar as regras de segurança aos alunos e às famílias.",
  about: [
    "Este curso é para professores, bibliotecários e especialistas em recursos educativos, orientadores escolares, treinadores e líderes escolares que influenciam a forma como os alunos aprendem com a IA e sobre a IA. Os alunos já usam IA; a literacia em IA ajuda-os a usá-la para aprender, e não para fugir à aprendizagem.",
    "O Capítulo 1 define a literacia em IA, dá-lhe uma aula prática para a ensinar e mostra como usar a IA como parceira de aprendizagem que faz perguntas em vez de dar respostas. O Capítulo 2 define as regras da sala de aula: níveis de uso da IA para os trabalhos, declaração do uso, segurança e privacidade, e um plano para toda a escola.",
    "O uso de qualquer ferramenta de IA pelos alunos depende da aprovação do seu distrito escolar, das regras de idade da ferramenta e, para crianças com menos de 13 anos, da COPPA (lei dos EUA que protege as crianças na internet). Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Este é o curso 5 de 8 de IA para Líderes Escolares e Educacionais."
  ],
  finalTask: "Prepare um pacote de literacia em IA para os alunos de um ano de escolaridade: um plano de aula de 30 minutos em que os alunos testam uma ferramenta de IA (ou veem uma demonstração do professor), encontram um erro e discutem o enviesamento; uma escala de cinco níveis de uso da IA na sala de aula, com um exemplo de trabalho para cada nível; um formato de declaração de uma linha que os alunos vão usar; e uma carta de meia página para as famílias a explicar o que os alunos vão aprender e as regras de segurança.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Professores, bibliotecários e especialistas em recursos educativos, orientadores escolares, treinadores e líderes escolares em escolas dos EUA que influenciam a forma como os alunos aprendem com a IA e sobre a IA.",
    startingPoint: "Conhecem o básico da IA, as regras de privacidade dos alunos e como avaliar ferramentas, dos cursos anteriores. Os alunos da escola já usam IA, mas não há uma forma comum de ensinar a literacia em IA, de definir regras para os trabalhos ou de pedir aos alunos que declarem o uso da IA.",
    gap: "Sem literacia em IA, os alunos usam a IA para fugir à aprendizagem, confiam em respostas erradas ou enviesadas e partilham informações privadas. Os educadores precisam de ensinar os alunos a compreender e questionar a IA, definir níveis de uso claros e a declaração do uso, e explicar as regras de segurança aos alunos e às famílias.",
    constraints: [
      "O uso de qualquer ferramenta de IA pelos alunos depende da aprovação do distrito, das regras de idade da ferramenta e, para crianças com menos de 13 anos, da COPPA",
      "Os alunos mais novos podem aprender com demonstrações do professor e atividades sem aparelhos, sem contas",
      "Os alunos nunca partilham com a IA o nome completo, a morada ou palavras-passe",
      "As ferramentas de IA mudam, por isso as perguntas preparadas para a aula são testadas pouco antes de ensinar",
      "Tempo: lições curtas que cabem no dia escolar, mais uma aula de 30 minutos para os alunos"
    ],
    prerequisites: "Recomenda-se o curso \"IA para Líderes Escolares e Educativos 2: Ferramentas de IA para Educadores\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para um ano de escolaridade com que trabalha", action: "descrever as quatro competências de literacia em IA dos alunos com palavras que os alunos entendem", standard: "com um exemplo para cada competência" },
    { id: "O2", condition: "Usando uma ferramenta aprovada ou uma demonstração do professor", action: "planear uma aula de 30 minutos em que os alunos testam a IA, encontram um erro e discutem o enviesamento", standard: "com cinco perguntas preparadas e testadas antes, incluindo uma em que a IA erra" },
    { id: "O3", condition: "Sobre um tema que ensina", action: "escrever pedidos de parceria de aprendizagem que façam a IA fazer perguntas em vez de dar respostas", standard: "e explicar porque ajudam o aluno a aprender mais do que um pedido de máquina de respostas" },
    { id: "O4", condition: "Com os seus próximos trabalhos", action: "marcar cada trabalho com um nível de uma escala de cinco níveis de uso da IA", standard: "com uma razão ligada ao objetivo de aprendizagem" },
    { id: "O5", condition: "Quando os alunos usam IA num trabalho em que é permitida", action: "ensinar um formato de declaração de uma linha para o uso da IA", standard: "que diga a ferramenta, o que ela fez, a data e o que o aluno fez" },
    { id: "O6", condition: "Para os alunos e as famílias", action: "explicar as regras de segurança dos alunos com a IA e planear a literacia em IA ao longo dos anos de escolaridade", standard: "numa carta de meia página para as famílias com as ferramentas usadas, a razão e as regras de segurança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ensinar os alunos sobre a IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que a literacia em IA quer dizer para os alunos",
          minutes: 5,
          goal: "Definir a literacia em IA em quatro competências dos alunos que pode ensinar.",
          text: [
            "Literacia em IA é saber o suficiente sobre a IA para a usar bem, questioná-la e fazer boas escolhas sobre ela. Para os alunos, resume-se a quatro competências. Compreender: a IA prevê respostas prováveis a partir de padrões; não pensa nem sabe como uma pessoa. Questionar: a IA pode estar errada, inventar coisas ou ser enviesada, por isso verifique.",
            "Usar: fazer perguntas claras, usar a IA para aprender (explicar, fazer-me perguntas, dar comentários) em vez de fugir à aprendizagem, e cumprir as regras da turma. Decidir: pensar na privacidade, na justiça e na honestidade, por exemplo o que partilhar, de quem é o trabalho e quando não usar a IA de todo.",
            "O ano de escolaridade conta. Os alunos mais novos podem aprender as ideias com demonstrações do professor e atividades sem aparelhos, sem contas. Os alunos mais velhos podem usar diretamente ferramentas aprovadas, com regras claras."
          ],
          words: [["Literacia em IA", "saber o suficiente sobre a IA para a usar bem, questioná-la e fazer boas escolhas."], ["Atividade sem aparelhos", "uma aula sobre tecnologia que não usa nenhum aparelho (em inglês, \"unplugged\")."]],
          slides: [
            { title: "Quatro competências dos alunos", bullets: ["Compreender: a IA prevê a partir de padrões", "Questionar: pode estar errada ou ser enviesada", "Usá-la para aprender; decidir com sabedoria"] },
            { title: "Usar para aprender, não para fugir", bullets: ["\"Explique de outra maneira\"", "\"Faça-me perguntas\"", "\"Dê-me comentários sobre o meu rascunho\""] },
            { title: "Por ano de escolaridade", bullets: ["Mais novos: demonstrações do professor, sem aparelhos", "Mais velhos: ferramentas aprovadas, regras claras"] }
          ],
          tryIt: "Escreva as quatro competências de literacia em IA com palavras que os seus alunos entendam, para um ano de escolaridade com que trabalha, com um exemplo para cada uma.",
          youCanNow: "definir a literacia em IA como quatro competências dos alunos que se podem ensinar.",
          quickCheck: [
            { objective: "O1", q: "O que é a literacia em IA?", options: ["Saber construir programas de IA", "Saber o suficiente sobre a IA para a usar bem, questioná-la e escolher com sabedoria", "Ler livros sobre robôs", "Escrever depressa no teclado"], answer: 1, why: "A literacia em IA trata de usar bem a IA e de a questionar, não de programar." },
            { objective: "O1", q: "Os seus alunos do 2.º ano não têm contas de IA. Como ensinaria a literacia em IA?", options: ["Esperar até ao ensino secundário", "Pedir-lhes que se registem com a conta de um pai ou mãe", "Usar demonstrações do professor e atividades sem aparelhos", "Saltar o tema"], answer: 2, why: "As demonstrações e as atividades sem aparelhos ensinam a literacia em IA sem contas de alunos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Uma aula prática de literacia em IA",
          minutes: 6,
          goal: "Planear uma aula de 30 minutos em que os alunos testam a IA e encontram os seus erros.",
          text: [
            "Os alunos aprendem melhor os limites da IA quando os veem. Estrutura: abertura (5 minutos): pergunte \"A IA está sempre certa?\" e façam uma votação. Investigar (15 minutos): em pares, ou com uma demonstração do professor, façam a uma ferramenta de IA perguntas que preparou, incluindo uma em que ela erra ou inventa (uma fonte falsa, um problema de matemática com uma armadilha, um facto local).",
            "Verificar os factos (5 minutos): os alunos comparam as respostas com o manual, um site de confiança ou o professor. Discutir o enviesamento (5 minutos): peça à ferramenta que descreva \"um cientista\" ou \"uma enfermeira\" várias vezes e repare nos padrões; falem sobre a origem desses padrões.",
            "Termine com um bilhete de saída: \"Diga uma coisa para que a IA é boa e uma razão para a verificar.\" Teste as perguntas preparadas antes da aula, porque as ferramentas de IA mudam e podem corrigir ou criar erros."
          ],
          steps: ["Abertura: votação \"A IA está sempre certa?\".", "Investigar: perguntas preparadas, incluindo uma em que erra.", "Verificar os factos em fontes de confiança.", "Discutir o enviesamento com o teste de descrever uma pessoa.", "Bilhete de saída; teste as perguntas antes da aula."],
          words: [["Verificar os factos", "comparar uma afirmação com uma fonte de confiança."], ["Enviesamento", "um padrão injusto, como descrever sempre uma profissão com um só tipo de pessoa."]],
          slides: [
            { title: "Aula de 30 minutos", bullets: ["Abertura: a IA está sempre certa?", "Investigar: perguntas preparadas", "Verificar factos, discutir o enviesamento, bilhete de saída"] },
            { title: "Mostrar um erro verdadeiro", bullets: ["Uma fonte falsa ou um problema com armadilha", "Um facto local que ela talvez não saiba", "Teste as perguntas antes da aula"] },
            { title: "Encontrar o enviesamento", bullets: ["Peça-lhe que descreva \"um cientista\" várias vezes", "Repare nos padrões; discutam de onde vêm"] }
          ],
          tryIt: "Prepare cinco perguntas para a aula, incluindo pelo menos uma em que a IA erra. Teste-as numa ferramenta aprovada e anote as respostas que vai usar.",
          youCanNow: "planear uma aula prática que ensina os alunos a questionar a IA.",
          quickCheck: [
            { objective: "O2", q: "Com o que comparam os alunos as respostas da IA na aula prática?", options: ["O manual, um site de confiança ou o professor", "Outra ferramenta de IA", "O palpite de um colega", "Nada; confiam na primeira resposta"], answer: 0, why: "As fontes de confiança deixam os próprios alunos encontrar os erros da IA." },
            { objective: "O2", q: "A pergunta que preparou para mostrar um erro da IA agora recebe uma resposta certa. O que faz?", options: ["Diz aos alunos que a IA nunca erra", "Usa-a na mesma e finge que estava errada", "Cancela a aula", "Testa outras perguntas até encontrar uma em que a IA erra, e anota as respostas"], answer: 3, why: "As ferramentas de IA mudam, por isso teste as perguntas pouco antes da aula." }
          ]
        },
        {
          objectives: ["O3"],
          title: "A IA como parceira de aprendizagem, não como máquina de respostas",
          minutes: 5,
          goal: "Ensinar aos alunos pedidos que façam a IA ajudá-los a pensar.",
          text: [
            "A mesma ferramenta pode pensar pelo aluno ou apoiar o seu pensamento. A diferença está no pedido (em inglês, \"prompt\"). Máquina de respostas: \"Escreva o meu parágrafo sobre as causas da Guerra Civil.\" Parceira de aprendizagem: \"Faça-me perguntas, uma de cada vez, para me ajudar a descobrir as causas, e não me dê a resposta.\"",
            "Ensine três pedidos de parceria de aprendizagem: \"Explique isto de outra maneira, com um exemplo\"; \"Faça-me perguntas sobre isto e diga-me o que errei\"; \"Aqui está o meu rascunho. Dê-me dois pontos fortes e uma coisa a melhorar, mas não o reescreva.\"",
            "Algumas ferramentas de educação são feitas para dar explicações desta forma. Com qualquer ferramenta, os alunos devem verificar os factos, e o trabalho que entregam deve ser o seu próprio pensamento, como o nível de uso da IA da turma permite."
          ],
          steps: ["Mostre um pedido de máquina de respostas e o resultado.", "Mostre um pedido de parceria de aprendizagem e o resultado.", "Ensine três pedidos de parceria de aprendizagem.", "Ponha os alunos a praticar com o tema de hoje.", "Lembre: verifiquem os factos; entreguem o vosso próprio pensamento."],
          words: [["Pedido de parceria de aprendizagem", "um pedido que diz à IA para o ajudar a pensar em vez de fazer o trabalho."], ["Questionamento socrático", "ensinar fazendo perguntas que levam o aluno a chegar à resposta pelo seu raciocínio."]],
          slides: [
            { title: "A mesma ferramenta, outro pedido", bullets: ["Máquina de respostas: \"Escreva o meu parágrafo\"", "Parceira de aprendizagem: \"Faça-me perguntas, não me diga\""] },
            { title: "Três pedidos de parceria de aprendizagem", bullets: ["\"Explique de outra maneira, com um exemplo\"", "\"Faça-me perguntas e diga-me o que errei\"", "\"Dois pontos fortes, uma correção, sem reescrever\""] },
            { title: "Continua a ser trabalho do aluno", bullets: ["Verificar os factos", "Entregar o seu próprio pensamento"] }
          ],
          tryIt: "Experimente um pedido de máquina de respostas e um pedido de parceria de aprendizagem sobre um tema que ensina. Escreva qual deles ajudaria mais um aluno a aprender, e porquê.",
          youCanNow: "ensinar os alunos a usar a IA para apoiar o seu pensamento, e não para o substituir.",
          quickCheck: [
            { objective: "O3", q: "O que é um pedido de máquina de respostas?", options: ["Um pedido para a IA lhe fazer perguntas", "Um pedido para a IA fazer o trabalho por você", "Um pedido de pistas", "Um pedido para a IA explicar os seus erros"], answer: 1, why: "Os pedidos de máquina de respostas saltam o pensamento que o trabalho devia desenvolver." },
            { objective: "O3", q: "Um aluno quer ajuda da IA para estudar para um teste. Que pedido ensinaria?", options: ["\"Dê-me todas as respostas.\"", "\"Escreva os meus apontamentos por mim.\"", "\"Faça o meu trabalho de casa.\"", "\"Faça-me uma pergunta de cada vez e diga-me o que errei.\""], answer: 3, why: "Um pedido de parceria de aprendizagem mantém o aluno a pensar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ensinar os alunos sobre a IA",
        questions: [
          { objective: "O1", q: "Qual é uma das quatro competências de literacia em IA dos alunos?", options: ["Decorar os nomes das empresas de IA", "Escrever mais depressa", "Questionar: a IA pode estar errada ou ser enviesada", "Evitar toda a tecnologia"], answer: 2, why: "Questionar a IA é central na literacia em IA." },
          { objective: "O1", q: "Como podem os alunos mais novos aprender literacia em IA sem contas?", options: ["Com demonstrações do professor e atividades sem aparelhos", "Não podem", "Usando a palavra-passe de um pai ou mãe", "Registando-se com idades falsas"], answer: 0, why: "As demonstrações e as aulas sem aparelhos ensinam as ideias com segurança." },
          { objective: "O2", q: "Porque deve testar as perguntas preparadas antes da aula?", options: ["Para a aula ficar mais longa", "É a lei", "Os alunos preferem", "As ferramentas de IA mudam e podem corrigir ou criar erros"], answer: 3, why: "Um erro planeado pode já não aparecer." },
          { objective: "O3", q: "Qual é um pedido de parceria de aprendizagem?", options: ["\"Escreva a minha redação.\"", "\"Faça-me perguntas uma de cada vez; não me dê a resposta.\"", "\"Faça o meu trabalho de casa.\"", "\"Dê-me as respostas.\""], answer: 1, why: "Apoia o pensamento em vez de o substituir." },
          { objective: "O2", q: "Pedir à IA que descreva \"uma enfermeira\" várias vezes ajuda os alunos a reparar:", options: ["Na ortografia", "No custo", "Na velocidade", "No enviesamento dos padrões"], answer: 3, why: "Os padrões repetidos podem revelar enviesamento." }
        ]
      }
    },
    {
      name: "Capítulo 2: Regras, segurança e um plano para toda a escola",
      lessons: [
        {
          objectives: ["O4"],
          title: "Níveis de uso da IA para os trabalhos",
          minutes: 6,
          goal: "Definir uma escala de cinco níveis de uso da IA e marcar os trabalhos com ela.",
          text: [
            "Os alunos precisam de saber, para cada trabalho, que uso da IA é permitido. Uma escala simples de cinco níveis: Nível 0, sem IA. Nível 1, IA só para ideias (pensar em ideias, depois trabalhar sozinho). Nível 2, IA para comentários (sobre o seu próprio rascunho; você faz as mudanças). Nível 3, IA como colaboradora (pode usar partes feitas pela IA, marcadas e explicadas). Nível 4, exploração da IA (usar a IA é o objetivo da tarefa).",
            "Marque cada trabalho com o seu nível e explique porquê: uma tarefa de nível 0 pode desenvolver uma competência que os alunos têm de ter sozinhos, como escrever um parágrafo com tempo limitado ou fazer cálculo mental. Uma tarefa de nível 2 desenvolve a competência de rever.",
            "Use a mesma escala em toda a escola, para os alunos não terem regras diferentes em cada aula. Existem várias versões publicadas de escalas de avaliação do uso da IA; adapte uma ou escreva a sua com os colegas."
          ],
          steps: ["Combine uma escala de cinco níveis com os colegas.", "Marque cada trabalho com o seu nível.", "Explique porque esse nível serve o objetivo de aprendizagem.", "Afixe a escala na sala e publique-a na internet.", "Use a mesma escala em toda a escola."],
          words: [["Nível de uso da IA", "uma etiqueta que diz aos alunos quanta IA podem usar numa tarefa."], ["Colaborador", "alguém (ou alguma coisa) que trabalha consigo numa tarefa."]],
          slides: [
            { title: "Cinco níveis de uso da IA", bullets: ["0 Sem IA; 1 Só ideias", "2 Comentários sobre o seu rascunho", "3 Colaboradora, marcada e explicada", "4 Exploração da IA"] },
            { title: "Marcar cada trabalho", bullets: ["Diga o nível", "Diga porque serve o objetivo de aprendizagem"] },
            { title: "Uma escala, toda a escola", bullets: ["As mesmas regras em todas as aulas", "Adapte uma escala publicada com os colegas"] }
          ],
          tryIt: "Escreva a escala de cinco níveis com palavras que os alunos entendam. Depois marque cinco dos seus próximos trabalhos com um nível e uma razão de uma linha.",
          youCanNow: "dizer claramente aos alunos quanta IA podem usar em cada tarefa, e porquê.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer o Nível 0 na escala de uso da IA?", options: ["Não se pode usar IA", "Qualquer uso da IA é permitido", "A IA pode escrever o primeiro rascunho", "A IA pode dar a nota ao trabalho"], answer: 0, why: "O Nível 0 é para tarefas em que os alunos têm de mostrar o seu próprio pensamento sem IA." },
            { objective: "O4", q: "O objetivo de um trabalho é praticar escrever um primeiro rascunho sozinho. Que etiqueta serve?", options: ["Nível colaboradora, com a IA a escrever partes", "Nenhum nível; os alunos decidem", "Um nível baixo como sem IA, com a razão ligada a esse objetivo", "O nível mais alto, para os alunos aprenderem a ferramenta"], answer: 2, why: "O nível deve servir o objetivo de aprendizagem, com uma razão que os alunos possam ver." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dizer como usou a IA",
          minutes: 5,
          goal: "Ensinar aos alunos uma forma simples de declarar e citar o uso da IA.",
          text: [
            "Ser honesto sobre a IA é uma competência. Quando a IA é permitida, os alunos devem dizer como a usaram. Uma declaração de uma linha serve para a maioria das tarefas: \"Usei [ferramenta] para [o quê] em [data]. Eu [o que fiz com isso].\" Por exemplo: \"Usei o Gemini para me fazer perguntas de vocabulário a 3 de março. Escrevi todas as respostas sozinho.\"",
            "Para trabalhos de pesquisa, os alunos mais velhos podem seguir o estilo de citação que a escola usa; guias de estilo como o MLA e o APA publicam orientações para citar ferramentas de IA nos seus próprios sites. A IA não é uma fonte de factos de confiança, por isso os alunos têm de encontrar e citar na mesma a fonte original.",
            "Trate a declaração honesta como uma coisa positiva. Os alunos que dizem o que fizeram com a IA estão a aprender integridade; não castigue uma declaração honesta de um uso permitido."
          ],
          steps: ["Ensine a declaração de uma linha.", "Dê o exemplo com o seu próprio trabalho feito com ajuda da IA.", "Para pesquisas, use as orientações do estilo de citação da escola.", "Exija fontes originais para os factos.", "Elogie a declaração honesta."],
          words: [["Declaração", "dizer abertamente como usou a IA."], ["Citação", "uma nota que diz ao leitor de onde veio a informação."]],
          slides: [
            { title: "A declaração de uma linha", bullets: ["\"Usei [ferramenta] para [o quê] em [data].\"", "\"Eu [o que fiz com isso].\""] },
            { title: "Trabalhos de pesquisa", bullets: ["Use o estilo de citação da escola", "A IA não é uma fonte de factos", "Encontre e cite a fonte original"] },
            { title: "Valorizar a honestidade", bullets: ["Dê o exemplo você mesmo", "Nunca castigue a declaração honesta de um uso permitido"] }
          ],
          tryIt: "Escreva uma linha de declaração para algo em que usou IA esta semana. Depois escreva as instruções que vai dar aos alunos para declararem o uso da IA.",
          youCanNow: "ensinar os alunos a declarar e citar o uso da IA com honestidade.",
          quickCheck: [
            { objective: "O5", q: "O que deve ter uma declaração de uma linha sobre o uso da IA?", options: ["Só a palavra \"IA\"", "A ferramenta, o que ela fez, a data e o que o aluno fez", "A palavra-passe do aluno", "Uma nota"], answer: 1, why: "Uma linha completa mostra exatamente como a IA foi usada." },
            { objective: "O5", q: "Um aluno declara com honestidade um uso permitido da IA no seu trabalho. Como responderia?", options: ["Trato a declaração como uma coisa positiva", "Baixo a nota", "Denuncio como batota", "Ignoro"], answer: 0, why: "A declaração honesta é o hábito que quer, por isso deve ser bem recebida." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter os alunos em segurança e planear para toda a escola",
          minutes: 6,
          goal: "Ensinar as regras de segurança dos alunos e planear a literacia em IA ao longo dos anos.",
          text: [
            "Ensine aos alunos quatro regras de segurança. Não partilhe informações pessoais (nome completo, morada, escola, fotos, palavras-passe) com ferramentas de IA. Use só ferramentas que a escola aprovou, dentro das regras de idade dos termos da ferramenta. A IA pode criar imagens, vozes e vídeos falsos (deepfakes): tenha cuidado com aquilo em que acredita e nunca crie falsificações de pessoas reais. Fale com um adulto de confiança se uma conversa com a IA o deixar perturbado, se parecer perigosa ou se pedir segredos.",
            "Para crianças com menos de 13 anos, a COPPA aplica-se aos serviços na internet; a FTC (a agência dos EUA que protege os consumidores) diz que uma escola só pode dar o consentimento em nome dos pais quando o serviço recolhe informações para uso e benefício da escola, sem nenhum outro fim comercial. O seu distrito decide que ferramentas os alunos podem usar; diga às famílias quais e porquê.",
            "Planeie a literacia em IA por grupo de anos, para que cada ano parta do anterior: nos primeiros anos aprendem o que é a IA com demonstrações; no fim do ensino primário praticam questionar e verificar os factos; no ensino médio inferior juntam o enviesamento, a declaração e o uso como parceira de aprendizagem; no ensino secundário juntam a ética, as profissões e a criação responsável. Partilhe o plano com as famílias."
          ],
          steps: ["Ensine as quatro regras de segurança.", "Confirme as ferramentas aprovadas e as regras de idade; para menos de 13 anos, o consentimento da COPPA.", "Diga às famílias que ferramentas são usadas e porquê.", "Organize as competências de literacia em IA por grupo de anos.", "Partilhe o plano com as famílias."],
          words: [["Deepfake", "uma imagem, voz ou vídeo falso feito com IA para parecer verdadeiro."], ["Grupo de anos", "um conjunto de anos de escolaridade, como do pré-escolar ao 2.º ano ou do 6.º ao 8.º ano."]],
          slides: [
            { title: "Quatro regras de segurança dos alunos", bullets: ["Nenhuma informação pessoal", "Só ferramentas aprovadas, dentro das regras de idade", "Cuidado com deepfakes; nunca falsificar pessoas reais", "Falar com um adulto de confiança"] },
            { title: "Menos de 13 anos: COPPA", bullets: ["Consentimento da escola só para uso da escola", "Nenhum outro fim comercial", "Diga às famílias que ferramentas e porquê"] },
            { title: "Um plano por grupo de anos", bullets: ["Primeiros anos: o que é a IA", "Fim do primário: questionar e verificar", "Médio e secundário: enviesamento, declaração, ética"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions (perguntas frequentes sobre a COPPA)", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Tarefa final: monte o seu pacote de literacia em IA para os alunos de um ano de escolaridade: o plano de aula de 30 minutos, a escala de cinco níveis de uso da IA com um exemplo de trabalho para cada nível, o formato de declaração de uma linha e uma carta de meia página para as famílias com as regras de segurança.",
          youCanNow: "liderar a literacia em IA dos alunos com uma aula, níveis de uso claros, declaração honesta e regras de segurança que as famílias entendem.",
          quickCheck: [
            { objective: "O6", q: "O que é um deepfake?", options: ["Um ficheiro de computador estragado", "Uma palavra-passe forte", "Uma imagem, voz ou vídeo falso feito com IA", "Um tipo de motor de busca"], answer: 2, why: "Os deepfakes são falsificações feitas com IA; é por isso que os alunos nunca criam falsificações de pessoas reais." },
            { objective: "O6", q: "Um aluno diz que uma conversa com a IA o deixou perturbado. O que lhe devia ter sido ensinado a fazer?", options: ["Continuar a conversar até parar", "Apagar a aplicação e não dizer nada", "Publicar sobre isso na internet", "Falar com um adulto de confiança"], answer: 3, why: "Falar com um adulto de confiança é uma das regras de segurança dos alunos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Regras, segurança e um plano para toda a escola",
        questions: [
          { objective: "O4", q: "Num trabalho de Nível 2 (comentários), os alunos podem:", options: ["Pôr a IA a escrever tudo", "Não usar IA de todo", "Receber comentários da IA sobre o seu próprio rascunho e fazer eles mesmos as mudanças", "Copiar texto da IA sem o marcar"], answer: 2, why: "O Nível 2 é comentários sobre o trabalho do próprio aluno." },
          { objective: "O4", q: "Porque usar a mesma escala de uso da IA em toda a escola?", options: ["Os alunos têm regras coerentes em todas as aulas", "É mais barato", "Proíbe a IA", "Os fornecedores exigem"], answer: 0, why: "A coerência evita confusão." },
          { objective: "O5", q: "Um aluno declara com honestidade um uso permitido da IA. Você deve:", options: ["Baixar a nota", "Tratar a declaração como uma coisa positiva", "Denunciá-lo", "Ignorar"], answer: 1, why: "A declaração honesta é integridade em ação." },
          { objective: "O6", q: "Qual é uma das quatro regras de segurança dos alunos?", options: ["Nunca criar falsificações de pessoas reais", "Partilhar a morada para ter respostas melhores", "Usar qualquer aplicação que encontrar", "Guardar segredo das conversas perturbadoras"], answer: 0, why: "Os deepfakes de pessoas reais podem causar danos." },
          { objective: "O6", q: "Para alunos com menos de 13 anos, que lei se aplica aos serviços na internet?", options: ["Nenhuma", "Uma lei de trânsito", "Só os direitos de autor", "A COPPA"], answer: 3, why: "A COPPA protege as crianças com menos de 13 anos na internet." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Líderes Escolares e Educacionais 5: Aprendizagem dos Alunos e Literacia em IA",
    questions: [
      { objective: "O1", q: "Literacia em IA quer dizer:", options: ["Saber construir IA", "Saber o suficiente sobre a IA para a usar bem, questioná-la e escolher com sabedoria", "Nunca usar IA", "Escrever depressa no teclado"], answer: 1, why: "É compreensão mais bom senso." },
      { objective: "O1", q: "Os alunos devem compreender que a IA:", options: ["Sabe tudo", "Pensa como uma pessoa", "Prevê respostas prováveis a partir de padrões", "Nunca erra"], answer: 2, why: "Isso explica tanto os seus pontos fortes como os seus erros." },
      { objective: "O1", q: "Uma atividade sem aparelhos:", options: ["É uma falha de eletricidade", "Precisa de um portátil", "Ensina sobre tecnologia sem aparelhos", "É um vídeo"], answer: 2, why: "Serve bem os alunos mais novos." },
      { objective: "O2", q: "Na aula prática, os alunos verificam as respostas da IA comparando-as com:", options: ["O manual, um site de confiança ou o professor", "Só outra IA", "O palpite de um amigo", "Nada"], answer: 0, why: "As fontes de confiança revelam os erros." },
      { objective: "O2", q: "Uma boa pergunta preparada para a aula é uma que:", options: ["É muito longa", "Toda a gente sabe", "Não tem resposta", "A IA erra ou inventa"], answer: 3, why: "Ver um erro ensina o hábito de verificar." },
      { objective: "O2", q: "O teste de descrever uma pessoa ajuda os alunos a ver:", options: ["Erros de ortografia", "O enviesamento", "Preços", "A velocidade"], answer: 1, why: "Os padrões revelam o enviesamento." },
      { objective: "O3", q: "\"Faça-me perguntas e diga-me o que errei\" é:", options: ["Uma palavra-passe", "Batota", "Um pedido de máquina de respostas", "Um pedido de parceria de aprendizagem"], answer: 3, why: "Apoia a aprendizagem." },
      { objective: "O3", q: "\"Escreva o meu parágrafo por mim\" faz da IA:", options: ["Uma verificadora de factos", "Uma explicadora", "Uma máquina de respostas", "Uma professora"], answer: 2, why: "Substitui o pensamento do aluno." },
      { objective: "O4", q: "O Nível 0 na escala de uso da IA quer dizer:", options: ["Sem IA", "IA para tudo", "Só comentários", "Só ideias"], answer: 0, why: "Algumas competências têm de ser desenvolvidas sozinho." },
      { objective: "O4", q: "O Nível 3 (colaboradora) exige que os alunos:", options: ["Escondam o uso da IA", "Marquem e expliquem as partes feitas pela IA", "Não usem IA", "Deixem a IA dar a nota"], answer: 1, why: "A transparência é a condição." },
      { objective: "O4", q: "O nível de IA de cada trabalho deve vir com:", options: ["Uma razão ligada ao objetivo de aprendizagem", "Um preço", "Uma palavra-passe", "Nenhuma explicação"], answer: 0, why: "Os alunos cumprem as regras que entendem." },
      { objective: "O5", q: "Uma declaração de uma linha sobre o uso da IA inclui:", options: ["Nada", "A morada do aluno", "O preço da ferramenta", "A ferramenta, o que ela fez, a data e o que o aluno fez"], answer: 3, why: "Torna o uso da IA transparente." },
      { objective: "O5", q: "Na pesquisa, os factos devem ser citados a partir de:", options: ["Só a conversa com a IA", "A fonte original", "A memória", "Um boato"], answer: 1, why: "A IA não é uma fonte de factos de confiança." },
      { objective: "O5", q: "As orientações para citar IA no estilo MLA ou APA encontram-se:", options: ["Em lado nenhum", "Só na resposta da IA", "Nos próprios sites dos guias de estilo", "Nas redes sociais"], answer: 2, why: "Os guias de estilo publicam as suas próprias orientações." },
      { objective: "O6", q: "Os alunos nunca devem partilhar com a IA:", options: ["Um tema de prática", "Uma pergunta de matemática", "O nome completo, a morada e as palavras-passe", "Uma palavra de vocabulário"], answer: 2, why: "As informações pessoais ficam privadas." },
      { objective: "O6", q: "Um deepfake é:", options: ["Uma imagem, voz ou vídeo falso feito com IA", "Uma piscina funda", "Uma redação longa", "Uma palavra-passe segura"], answer: 0, why: "A IA consegue fazer falsificações realistas." },
      { objective: "O6", q: "Se uma conversa com a IA se tornar perturbadora, os alunos devem:", options: ["Partilhar dados pessoais", "Guardar segredo", "Continuar a conversar", "Falar com um adulto de confiança"], answer: 3, why: "Os adultos podem ajudar a manter os alunos em segurança." },
      { objective: "O6", q: "As idades mínimas para as ferramentas de IA encontram-se:", options: ["Na memória de um colega", "Nos termos atuais de cada ferramenta", "No menu da cantina da escola", "Num manual de 2010"], answer: 1, why: "Cada ferramenta define e atualiza as suas próprias regras." },
      { objective: "O6", q: "Um plano por grupo de anos quer dizer:", options: ["Só o ensino secundário aprende IA", "Uma aula para todas as idades", "Nenhum plano", "Competências de literacia em IA que crescem de ano para ano"], answer: 3, why: "As competências devem crescer ao longo dos anos." },
      { objective: "O6", q: "As famílias devem saber:", options: ["Só depois dos problemas", "Nada", "Que ferramentas de IA são usadas, porquê, e as regras de segurança", "Só os preços das ferramentas"], answer: 2, why: "A transparência cria confiança e apoio." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Aula prática",
        objective: "O2",
        notYet: "Os alunos não testam a IA, não encontram um erro nem discutem o enviesamento.",
        meets: "Um plano de 30 minutos em que os alunos testam uma ferramenta de IA ou veem uma demonstração, encontram um erro e discutem o enviesamento.",
        exceeds: "As perguntas preparadas foram testadas antes e servem o ano de escolaridade."
      },
      {
        name: "Escala de uso da IA",
        objective: "O4",
        notYet: "Menos de cinco níveis, ou níveis sem exemplos de trabalhos.",
        meets: "Uma escala de cinco níveis com um exemplo de trabalho para cada nível.",
        exceeds: "Cada exemplo tem uma razão ligada ao objetivo de aprendizagem."
      },
      {
        name: "Formato de declaração",
        objective: "O5",
        notYet: "Não há formato de declaração, ou faltam partes importantes.",
        meets: "Um formato de uma linha que os alunos vão usar para dizer como usaram a IA.",
        exceeds: "Inclui a ferramenta, o que ela fez, a data e o que o aluno fez, com um exemplo."
      },
      {
        name: "Carta às famílias e segurança",
        objective: "O6",
        notYet: "Não há carta às famílias, ou faltam as regras de segurança.",
        meets: "Uma carta de meia página que explica o que os alunos vão aprender e as regras de segurança.",
        exceeds: "Também diz que ferramentas são usadas e porquê, com palavras simples para as famílias."
      },
      {
        name: "Competências de literacia ao nível dos alunos",
        objective: "O1",
        notYet: "O pacote não ensina os alunos a questionar a IA.",
        meets: "A aula ensina os alunos que a IA pode estar errada ou ser enviesada e como a verificar.",
        exceeds: "Usa pedidos de parceria de aprendizagem para a IA ajudar os alunos a pensar."
      }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Turmas que dão a aula de 30 minutos de literacia em IA em 30 dias (inquérito de seguimento)",
      "Escolas que usam uma escala comum de uso da IA nos trabalhos (inquérito de seguimento)",
      "Famílias que recebem uma carta sobre o uso da IA pelos alunos e a segurança"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e uma ferramenta de IA aprovada pelo distrito para uso dos alunos ou para demonstrações",
      "Uma lista dos próximos trabalhos de um ano de escolaridade",
      "Papel para as atividades sem aparelhos com os alunos mais novos",
      "Cerca de 60 minutos no total, mais a aula de 30 minutos para os alunos"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois deem a aula prática com os colegas no papel de alunos.",
      "Verifique as ferramentas aprovadas pelo distrito e as regras de idade de cada ferramenta antes de qualquer aluno a usar; use demonstrações do professor com crianças com menos de 13 anos quando for preciso.",
      "Combinem uma escala de uso da IA para toda a escola, para os alunos terem regras coerentes.",
      "Lembre aos colegas que devem acolher a declaração honesta em vez de a castigar.",
      "Avalie a tarefa final com a grelha de avaliação e reveja a carta às famílias para confirmar que usa linguagem simples."
    ]
  }
};
