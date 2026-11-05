"use strict";

// Koach Learn course (Portuguese translation of youth/youth-ai-career-exploration.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the United States (U.S. Department of Labor, bls.gov, federal youth work rules); US names are kept.

module.exports = {
  id: "youth-ai-career-exploration-pt",
  lang: "pt",
  translationOf: "youth-ai-career-exploration",
  category: "Youth",
  name: "IA e Exploração de Carreiras",
  skills: "Encontrar carreiras que combinam com os seus interesses, Pesquisar uma carreira em fontes oficiais, Ver como a IA está a mudar os empregos, Fazer um plano de percurso profissional, Preparar-se para um primeiro emprego",
  outcome: "usar um questionário de interesses gratuito, um assistente de IA e sites oficiais de carreiras para escolher duas carreiras que combinam com você, verificar o salário, a formação e as perspetivas de emprego, e fazer um plano passo a passo desde o ensino secundário até ao seu primeiro emprego nessa área.",
  about: [
    "Este curso é para jovens dos 13 aos 18 anos, mais ou menos, que se perguntam \"O que posso ser?\" Ainda não precisa de saber. Este curso ajuda você a explorar.",
    "Vai fazer um questionário de interesses gratuito, usar a IA para ter ideias de carreiras que combinam com o que gosta (jogos, música, desporto, ajudar pessoas, construir coisas), verificar os factos reais em sites oficiais de carreiras do governo, ver como a IA está a mudar o trabalho e montar um plano que pode começar este ano.",
    "Veja a regra de idade de cada ferramenta e as regras da sua escola sobre IA, e fale com um pai, uma mãe ou um responsável antes de se inscrever em qualquer coisa. Um orientador escolar também é um ótimo parceiro para este curso. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\"."
  ],
  finalTask: "Faça um plano de carreira de uma página para uma carreira que lhe interessa: porque combina com os seus interesses, a formação habitual, o salário e as perspetivas de emprego tirados de um site oficial, uma forma como a IA é usada nesse trabalho e três passos que pode dar neste ano letivo (uma disciplina, um clube ou atividade, e uma pessoa com quem falar).",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens dos 13 aos 18 anos, mais ou menos, nos Estados Unidos, que se perguntam o que podem ser, incluindo os que ainda não fazem ideia e os que pensam num ofício, na universidade ou num primeiro emprego.",
    startingPoint: "Sabem algumas coisas de que gostam e talvez tenham uma ideia de emprego a tempo parcial, mas quase nunca usaram um questionário de interesses, um site oficial de carreiras ou um plano passo a passo. Muitos aceitam factos sobre carreiras de amigos, das redes sociais ou da IA sem verificar.",
    gap: "Sem informação real, os jovens escolhem ou põem de lado carreiras com base em palpites sobre o salário e a formação, e perdem disciplinas e programas que podiam começar já. Aprender a explorar com a IA e a verificar em sites oficiais ajuda-os a escolher um rumo e a dar passos reais neste ano letivo.",
    constraints: [
      "Limites de idade e participação de um pai, mãe ou responsável em contas novas, empregos e voluntariado",
      "Regras da escola sobre IA; o orientador escolar é um parceiro importante",
      "O salário, a formação e as regras de trabalho para jovens mudam e variam de estado para estado; os alunos verificam em sites oficiais",
      "Privacidade: nada de morada, número de telefone ou outros dados privados nas ferramentas de IA",
      "Aparelhos: um telefone, um computador da escola ou da biblioteca; lições curtas"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um questionário de interesses gratuito, como o do mynextmove.org", action: "fazer a lista das suas principais áreas de interesse e das três atividades de que mais gosta", standard: "respondendo ao questionário com sinceridade e anotando os resultados" },
    { id: "O2", condition: "Com os seus interesses e um assistente de IA que tem autorização para usar", action: "criar uma lista de carreiras com diferentes percursos de formação e escolher duas para pesquisar", standard: "sem partilhar dados privados e tratando a lista como ideias a verificar" },
    { id: "O3", condition: "Para cada uma das suas duas carreiras", action: "procurar o salário habitual, a formação e as perspetivas de emprego em bls.gov/ooh ou mynextmove.org", standard: "confiando no site oficial sempre que não concordar com a IA" },
    { id: "O4", condition: "Para uma carreira de que gosta", action: "descrever uma forma como a IA é usada nesse trabalho e duas habilidades humanas que continuam a ser importantes", standard: "confirmando com uma pessoa real ou uma fonte de confiança" },
    { id: "O5", condition: "Com o seu ano escolar e uma carreira-alvo", action: "planear um percurso passo a passo desde agora até um primeiro emprego, com três passos para este ano letivo", standard: "com pelo menos um passo confirmado com o seu orientador ou num site oficial" },
    { id: "O6", condition: "Antes de um primeiro emprego, de voluntariado ou de acompanhar um profissional", action: "verificar as regras federais e estaduais de trabalho para jovens e escrever uma apresentação de três frases sobre você", standard: "seguindo a regra mais rigorosa e treinando a apresentação em voz alta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar carreiras que combinam com você",
      lessons: [
        {
          objectives: ["O1"],
          title: "Começar pelo que você gosta",
          minutes: 5,
          goal: "Fazer um questionário de interesses gratuito e fazer a lista dos seus principais interesses.",
          text: [
            "Uma boa procura de carreira começa por você: o que gosta de fazer, em que é bom e o que é importante para você. Talvez adore consertar coisas, desenhar, organizar eventos, ajudar amigos com problemas ou descobrir como funciona um jogo.",
            "O My Next Move é um site de carreiras gratuito do Departamento do Trabalho dos EUA (U.S. Department of Labor). O seu questionário de interesses (\"interest profiler\") pergunta-lhe que tipos de trabalho pode gostar e sugere carreiras que combinam. O seu orientador escolar pode ter outros questionários de interesses.",
            "Anote os seus resultados e as três atividades de que mais gosta. Estas são as suas primeiras pistas."
          ],
          steps: ["Vá a mynextmove.org.", "Abra o questionário de interesses e responda com sinceridade.", "Anote as suas principais áreas de interesse.", "Acrescente as três atividades de que mais gosta."],
          words: [["Questionário de interesses", "um questionário que liga aquilo de que você gosta a tipos de trabalho."], ["Carreira", "o tipo de trabalho que faz durante muito tempo, muitas vezes com habilidades que vão crescendo."]],
          sources: [{ name: "My Next Move (U.S. Department of Labor)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Comece por você", bullets: ["O que gosta de fazer", "Em que é bom", "O que é importante para você"] },
            { title: "Faça um questionário de interesses gratuito", bullets: ["My Next Move (mynextmove.org)", "Gratuito, do Departamento do Trabalho dos EUA", "O seu orientador pode ter outros"] },
            { title: "Anote as suas pistas", bullets: ["As suas principais áreas de interesse", "Três atividades de que adora"] }
          ],
          tryIt: "Faça o questionário de interesses em mynextmove.org (ou um que o seu orientador lhe der). Anote as suas principais áreas de interesse e três coisas que adora fazer.",
          youCanNow: "descrever os seus interesses de uma forma que ajuda a procurar carreiras.",
          quickCheck: [
            { objective: "O1", q: "Qual é o primeiro passo de uma boa procura de carreira?", options: ["Escolher o emprego que paga mais", "Ver o que gosta de fazer, em que é bom e o que é importante para você", "Escolher o que os seus amigos escolhem", "Candidatar-se logo a empregos"], answer: 1, why: "Uma boa procura começa por você: os seus interesses, pontos fortes e valores." },
            { objective: "O1", q: "Terminou o questionário de interesses em mynextmove.org. O que faz a seguir?", options: ["Fecha-o e esquece os resultados", "Repete-o até dizer o que você quer", "Partilha a sua morada com o site", "Anota as suas principais áreas de interesse e três atividades de que adora"], answer: 3, why: "Os seus resultados e atividades preferidas são as suas primeiras pistas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ter ideias de carreiras com a IA",
          minutes: 5,
          goal: "Usar a IA para transformar os seus interesses numa lista de carreiras a explorar.",
          text: [
            "Agora dê as suas pistas a um assistente de IA que tem autorização para usar: \"Tenho 15 anos. Gosto de videojogos, de desenhar e de ajudar crianças mais novas. Sugira 10 carreiras que juntem estas coisas, desde as que precisam de uma formação curta até às que precisam de universidade.\"",
            "Faça perguntas de seguimento: \"Quais destas trabalham com IA?\" \"Quais posso experimentar no ensino secundário?\" \"Explique como é um dia na carreira 3.\"",
            "A IA é boa para ideias, mas pode errar sobre o salário, a formação e o número de empregos. Trate a lista dela como ideias a verificar, não como factos."
          ],
          steps: ["Dê à IA a sua faixa de idade e os seus interesses (sem dados privados).", "Peça 10 carreiras com diferentes percursos de formação.", "Faça perguntas de seguimento sobre um dia normal e os passos no ensino secundário.", "Escolha duas para pesquisar."],
          words: [["Percurso de formação", "o estudo ou a prática de que precisa para um emprego, como um certificado, uma aprendizagem profissional ou um curso universitário."], ["Aprendizagem profissional", "um emprego pago em que aprende um ofício especializado enquanto trabalha (em inglês, \"apprenticeship\")."]],
          slides: [
            { title: "Dê as suas pistas à IA", bullets: ["Os seus interesses e a sua faixa de idade", "Peça 10 carreiras", "Misture formações curtas e universidade"] },
            { title: "Faça perguntas de seguimento", bullets: ["\"Como é um dia neste trabalho?\"", "\"O que posso experimentar no ensino secundário?\""] },
            { title: "Ideias, não factos", bullets: ["A IA pode errar sobre o salário e a formação", "Escolha duas carreiras para verificar"] }
          ],
          tryIt: "Dê os seus interesses a um assistente de IA e peça 10 carreiras com diferentes percursos de formação. Pergunte como é um dia em duas delas e depois escolha as suas duas preferidas.",
          youCanNow: "usar a IA para ter ideias de carreiras que combinam com os seus interesses.",
          quickCheck: [
            { objective: "O2", q: "Como deve tratar uma lista de carreiras feita pela IA?", options: ["Como ideias a verificar", "Como factos sobre o salário", "Como uma decisão final", "Como uma oferta de emprego"], answer: 0, why: "A IA é boa para ideias, mas pode errar sobre o salário, a formação e o número de empregos." },
            { objective: "O2", q: "Gosta de música e de consertar coisas. Que pedido ajuda mais?", options: ["\"empregos\"", "\"Dê-me a minha morada e um emprego.\"", "\"Gosto de música e de consertar coisas. Sugira 10 carreiras com diferentes percursos de formação.\"", "\"Qual é o melhor emprego?\""], answer: 2, why: "Dar os seus interesses e pedir diferentes percursos de formação traz ideias úteis." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Verificar os factos em sites oficiais de carreiras",
          minutes: 5,
          goal: "Procurar o salário, a formação e as perspetivas de emprego de uma carreira num site oficial.",
          text: [
            "O Occupational Outlook Handbook, do Gabinete de Estatísticas do Trabalho dos EUA (U.S. Bureau of Labor Statistics, bls.gov/ooh), é um guia oficial e gratuito de centenas de empregos. Para cada um mostra o salário habitual, a escolaridade e a formação normais, e quantos empregos se esperam no futuro.",
            "O My Next Move também mostra o que as pessoas fazem em cada emprego, as habilidades que usam e a formação de que precisam. O salário muda com o tempo e de lugar para lugar, por isso procure sempre os números atuais em vez de confiar num número dado pela IA ou por um amigo.",
            "Compare o que a IA lhe disse com o que diz o site oficial. Quando não concordarem, confie no site oficial."
          ],
          steps: ["Abra bls.gov/ooh ou mynextmove.org.", "Procure a sua carreira.", "Anote o salário, a formação habitual e as perspetivas de emprego.", "Compare com o que a IA disse e confie no site oficial."],
          words: [["Salário mediano", "o salário do meio: metade dos trabalhadores ganha mais e metade ganha menos."], ["Perspetivas de emprego", "quantos empregos se esperam no futuro."]],
          sources: [{ name: "Occupational Outlook Handbook (U.S. Bureau of Labor Statistics)", url: "https://www.bls.gov/ooh/" }, { name: "My Next Move (U.S. Department of Labor)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Guias oficiais de carreiras", bullets: ["bls.gov/ooh: salário, formação, perspetivas", "mynextmove.org: tarefas, habilidades, formação"] },
            { title: "Procure os números atuais", bullets: ["O salário muda com o tempo e de lugar para lugar", "Não confie só num número dado pela IA"] },
            { title: "Compare e decida", bullets: ["IA contra site oficial", "Quando não concordam, confie no site oficial"] }
          ],
          tryIt: "Procure as suas duas carreiras em bls.gov/ooh ou mynextmove.org. Anote a formação habitual, o salário e as perspetivas de emprego de cada uma, e uma coisa em que a IA disse algo diferente.",
          youCanNow: "pesquisar os factos reais de uma carreira num site oficial.",
          quickCheck: [
            { objective: "O3", q: "O que mostra o Occupational Outlook Handbook em bls.gov/ooh?", options: ["Críticas de videojogos", "Notas escolares", "Salários de famosos", "O salário habitual, a formação e as perspetivas de emprego de centenas de empregos"], answer: 3, why: "É um guia oficial e gratuito de empregos do Gabinete de Estatísticas do Trabalho dos EUA." },
            { objective: "O3", q: "Um amigo diz que uma carreira paga muito, e a IA dá um número diferente. O que faz?", options: ["Procura o salário atual num site oficial", "Confia no seu amigo", "Faz a média dos dois números", "Confia na IA"], answer: 0, why: "O salário muda com o tempo e o lugar, por isso verifique o número atual num site oficial." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar carreiras que combinam com você",
        questions: [
          { objective: "O1", q: "O que faz um questionário de interesses?", options: ["Encontra a sua palavra-passe", "Liga aquilo de que gosta a tipos de trabalho", "Dá-lhe um emprego", "Corrige os seus trabalhos de casa"], answer: 1, why: "Sugere carreiras com base nos seus interesses." },
          { objective: "O1", q: "Quem oferece o My Next Move?", options: ["Uma empresa de videojogos", "Uma aplicação de rede social", "A cantina da sua escola", "O Departamento do Trabalho dos EUA"], answer: 3, why: "É patrocinado pelo Departamento do Trabalho dos EUA." },
          { objective: "O2", q: "Qual é o melhor pedido para ter ideias de carreiras?", options: ["\"Gosto de jogos, de desenhar e de ajudar crianças. Sugira 10 carreiras com diferentes percursos de formação.\"", "\"empregos\"", "\"dê-me um emprego\"", "\"o que é trabalho\""], answer: 0, why: "Dá os interesses e pede variedade." },
          { objective: "O3", q: "A IA diz que um emprego paga um certo valor. Você deve:", options: ["Acreditar", "Contar a toda a gente", "Verificar o salário atual num site oficial", "Escolher logo esse emprego"], answer: 2, why: "A IA pode errar; os sites oficiais têm os números atuais." },
          { objective: "O3", q: "O que é o salário mediano?", options: ["O salário mais alto", "O salário mais baixo", "O salário do meio: metade ganha mais e metade ganha menos", "O salário só dos estagiários"], answer: 2, why: "A mediana é o ponto do meio." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear o seu caminho",
      lessons: [
        {
          objectives: ["O4"],
          title: "Como a IA está a mudar o trabalho",
          minutes: 5,
          goal: "Descrever uma forma como a IA é usada numa carreira de que gosta e as habilidades humanas que continuam a ser importantes.",
          text: [
            "A IA está a mudar muitos empregos. Os enfermeiros usam-na para ajudar com os registos, os mecânicos para encontrar problemas nos carros, os designers para experimentar ideias depressa e os estúdios de jogos para testar níveis. Algumas tarefas passam a ser feitas pela IA; aparecem tarefas novas.",
            "As habilidades humanas importam ainda mais: falar com pessoas, resolver problemas novos, ser criativo, ser de confiança e saber quando a IA está errada.",
            "Pergunte à IA: \"Como é que a IA é usada hoje em [carreira]? Que habilidades humanas continuam a ser as mais importantes?\" Depois verifique o que ela diz com uma pessoa real que trabalha nisso ou num site de notícias ou do setor que seja de confiança."
          ],
          words: [["Automação", "quando máquinas ou programas fazem tarefas que antes eram feitas por pessoas."], ["Habilidades sociais", "habilidades com pessoas, como comunicação, trabalho em equipa e ser de confiança (em inglês, \"soft skills\")."]],
          slides: [
            { title: "A IA está a mudar os empregos", bullets: ["Enfermeiros, mecânicos, designers, testadores de jogos", "Algumas tarefas passam para a IA; aparecem tarefas novas"] },
            { title: "As habilidades humanas importam mais", bullets: ["Falar com pessoas", "Resolver problemas novos", "Criatividade e ser de confiança", "Perceber quando a IA está errada"] },
            { title: "Descubra para a sua carreira", bullets: ["Pergunte à IA como é usada", "Verifique com uma pessoa real ou um site de confiança"] }
          ],
          tryIt: "Pergunte à IA como a IA é usada numa das suas duas carreiras e que habilidades humanas importam mais. Anote um uso da IA, duas habilidades humanas e uma pergunta que faria a uma pessoa real que trabalha nisso.",
          youCanNow: "explicar como a IA entra numa carreira e que habilidades humanas continuam a ser importantes.",
          quickCheck: [
            { objective: "O4", q: "Que habilidade humana importa mais à medida que a IA se espalha?", options: ["Escrever depressa no teclado", "Falar com pessoas e resolver problemas novos", "Decorar números de telefone", "Copiar respostas"], answer: 1, why: "A comunicação, a criatividade, ser de confiança e saber quando a IA está errada importam ainda mais." },
            { objective: "O4", q: "A IA diz-lhe como é usada na enfermagem. Como verifica isso?", options: ["Pergunta outra vez à mesma IA", "Assume que está certo", "Publica na internet", "Pergunta a um enfermeiro real ou lê um site do setor ou de notícias de confiança"], answer: 3, why: "Verifique o que a IA diz com uma pessoa real que faz esse trabalho ou numa fonte de confiança." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Construir um percurso a partir do ensino secundário",
          minutes: 5,
          goal: "Fazer um plano passo a passo desde agora até um primeiro emprego numa carreira.",
          text: [
            "Um percurso profissional é o caminho desde onde você está agora até ao emprego que quer. Pode incluir disciplinas, clubes, voluntariado, um programa de verão, um certificado, uma aprendizagem profissional, um curso numa faculdade comunitária (community college) ou uma universidade.",
            "Pergunte à IA: \"Estou no 10.º ano e tenho interesse em ser eletricista. Faça um caminho passo a passo desde agora até ao meu primeiro emprego, com coisas que posso fazer este ano.\" Depois verifique as regras de formação em sites oficiais, porque as licenças e os programas variam de estado para estado.",
            "O seu orientador escolar pode dizer-lhe que disciplinas e programas a sua escola oferece, como o ensino técnico e profissional (CTE) ou a dupla matrícula (dual enrollment)."
          ],
          steps: ["Diga o seu ano escolar e a sua carreira-alvo.", "Peça à IA um caminho passo a passo com ações para este ano.", "Verifique as regras de formação e de licenças em sites oficiais.", "Pergunte ao seu orientador o que a sua escola oferece."],
          words: [["Percurso profissional", "os passos desde a escola até um emprego numa área."], ["CTE", "career and technical education, ensino técnico e profissional: disciplinas da escola que ensinam habilidades para o trabalho."], ["Dupla matrícula", "fazer disciplinas universitárias enquanto ainda está no ensino secundário (em inglês, \"dual enrollment\")."]],
          slides: [
            { title: "Um percurso é um caminho", bullets: ["De onde você está até ao emprego que quer", "Disciplinas, clubes, programas, formação"] },
            { title: "Peça os passos à IA", bullets: ["O seu ano escolar e a carreira-alvo", "Coisas que pode fazer este ano"] },
            { title: "Verifique e pergunte", bullets: ["As licenças e os programas variam de estado para estado", "Pergunte ao seu orientador sobre CTE e dupla matrícula"] }
          ],
          tryIt: "Peça à IA um caminho passo a passo para uma das suas carreiras. Escolha três coisas que pode fazer neste ano letivo e confirme uma delas com o seu orientador ou num site oficial.",
          youCanNow: "construir um plano de percurso profissional realista.",
          quickCheck: [
            { objective: "O5", q: "O que é um percurso profissional?", options: ["O caminho desde onde está agora até ao emprego que quer", "Uma única disciplina", "Um formulário de candidatura a emprego", "Uma lista de nomes de empresas"], answer: 0, why: "Um percurso mostra os passos, como disciplinas, programas e formação, desde agora até um emprego." },
            { objective: "O5", q: "O percurso da IA diz que precisa de uma certa licença. O que faz?", options: ["Assume que é igual em todos os estados", "Ignora a licença", "Verifica as regras da licença num site oficial do seu estado", "Pede à IA para lhe dar a licença"], answer: 2, why: "As licenças e os programas variam de estado para estado, por isso verifique em sites oficiais." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Preparar-se para um primeiro emprego",
          minutes: 5,
          goal: "Verificar as regras básicas de trabalho para jovens e preparar uma apresentação simples para um primeiro emprego.",
          text: [
            "Um primeiro emprego, o voluntariado ou acompanhar um profissional ajudam você a testar uma carreira. Pela lei federal dos EUA, a maioria dos empregos exige que tenha pelo menos 14 anos. Se tem 14 ou 15 anos, as suas horas são limitadas, por exemplo no máximo 3 horas num dia de aulas e só entre as 7 da manhã e as 7 da noite durante a maior parte do ano (até às 9 da noite de 1 de junho ao Labor Day, o Dia do Trabalhador nos EUA). Aos 16 e 17 anos, a lei federal não limita as horas, mas ninguém com menos de 18 anos pode fazer trabalhos perigosos.",
            "Muitos estados têm regras mais rigorosas e podem exigir uma autorização de trabalho. Quando as leis federal e estadual se aplicam as duas, vale a mais rigorosa. Verifique no serviço de trabalho do seu estado e fale com um pai, uma mãe ou um responsável.",
            "A IA pode ajudar você a escrever uma apresentação curta sobre você: \"Tenho 15 anos, sou de confiança, ajudo a treinar a equipa de futebol do meu irmão mais novo e quero aprender atendimento ao cliente.\" Treine dizê-la em voz alta. Não coloque a sua morada nem o seu número de telefone na IA."
          ],
          steps: ["Verifique as regras federais e estaduais de trabalho para jovens.", "Fale com um pai, uma mãe ou um responsável sobre trabalho ou voluntariado.", "Use a IA para escrever um rascunho de uma apresentação de 3 frases sobre você.", "Treine-a em voz alta."],
          words: [["Autorização de trabalho", "um papel que alguns estados exigem antes de um jovem poder trabalhar (em inglês, \"work permit\")."], ["Acompanhar um profissional", "seguir um trabalhador durante um dia para ver como é o emprego (em inglês, \"job shadowing\")."], ["Trabalho perigoso", "trabalho arriscado que não é permitido a ninguém com menos de 18 anos."]],
          sources: [{ name: "U.S. Department of Labor Fact Sheet #43: Child labor rules for nonagricultural jobs", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }, { name: "U.S. Department of Labor: Child labor and state laws", url: "https://www.dol.gov/agencies/whd/child-labor" }],
          slides: [
            { title: "Regras federais de trabalho para jovens", bullets: ["A maioria dos empregos: a partir dos 14 anos", "14-15 anos: no máximo 3 horas em dias de aulas", "14-15 anos: das 7h às 19h (até às 21h de 1 de junho ao Labor Day)", "Nada de trabalhos perigosos antes dos 18 anos"] },
            { title: "Verifique o seu estado", bullets: ["Os estados podem exigir uma autorização de trabalho", "Vale a regra mais rigorosa", "Fale com um pai, uma mãe ou um responsável"] },
            { title: "A sua apresentação para o primeiro emprego", bullets: ["3 frases sobre você", "Rascunho com a IA, sem dados privados", "Treine-a em voz alta"] }
          ],
          tryIt: "Tarefa final: faça o seu plano de carreira de uma página: porque a carreira combina com você, a formação, o salário e as perspetivas tirados de um site oficial, uma forma como a IA é usada nela e três passos para este ano letivo. Acrescente no fundo a sua apresentação de 3 frases para o primeiro emprego.",
          youCanNow: "explorar carreiras, verificar os factos, planear o seu caminho e apresentar-se para um primeiro emprego.",
          quickCheck: [
            { objective: "O6", q: "Pela lei federal, que tipo de trabalho ninguém com menos de 18 anos pode fazer?", options: ["Trabalhos perigosos", "Voluntariado", "Acompanhar um profissional", "Tomar conta de crianças da família"], answer: 0, why: "A lei federal proíbe trabalhos perigosos a qualquer pessoa com menos de 18 anos." },
            { objective: "O6", q: "Quer que a IA ajude a escrever a sua apresentação para o primeiro emprego. O que deixa de fora do pedido?", options: ["Que é de confiança", "A sua morada e o seu número de telefone", "Que treina uma equipa de desporto", "O que quer aprender"], answer: 1, why: "Mantenha os dados privados, como a morada e o número de telefone, fora das ferramentas de IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear o seu caminho",
        questions: [
          { objective: "O4", q: "Que habilidade importa MAIS à medida que a IA se espalha?", options: ["A comunicação e resolver problemas novos", "Ignorar as pessoas", "Nunca aprender ferramentas novas", "Copiar respostas"], answer: 0, why: "As habilidades humanas ganham mais valor quando a IA trata das tarefas de rotina." },
          { objective: "O5", q: "O que é um percurso profissional?", options: ["Um trilho para caminhadas", "Um mapa de videojogo", "Um tipo de currículo", "Os passos desde a escola até um emprego numa área"], answer: 3, why: "Um percurso é o caminho desde agora até ao emprego." },
          { objective: "O5", q: "Quem lhe pode dizer que disciplinas de CTE ou de dupla matrícula a sua escola oferece?", options: ["Um anúncio que aparece no ecrã", "O seu orientador escolar", "Uma aplicação qualquer", "Ninguém"], answer: 1, why: "Os orientadores conhecem os programas da escola." },
          { objective: "O6", q: "Pela lei federal, um jovem de 15 anos pode trabalhar num dia de aulas no máximo:", options: ["3 horas", "8 horas", "12 horas", "Sem limite"], answer: 0, why: "O limite federal para jovens de 14-15 anos é de 3 horas num dia de aulas." },
          { objective: "O6", q: "A regra de trabalho para jovens do seu estado é mais rigorosa do que a regra federal. Qual vale?", options: ["A regra federal", "Nenhuma", "A regra mais rigorosa", "A que o seu amigo preferir"], answer: 2, why: "Quando as duas se aplicam, tem de se seguir a mais rigorosa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA e Exploração de Carreiras",
    questions: [
      { objective: "O1", q: "Uma boa procura de carreira começa por:", options: ["Só o emprego que paga mais", "O que gosta de fazer e em que é bom", "Uma escolha ao acaso", "O que um desconhecido diz"], answer: 1, why: "Os seus interesses são as melhores primeiras pistas." },
      { objective: "O1", q: "O mynextmove.org é:", options: ["Uma loja de jogos", "Um site de encontros", "Uma aplicação de rede social", "Um site de carreiras gratuito do Departamento do Trabalho dos EUA"], answer: 3, why: "É patrocinado pelo Departamento do Trabalho." },
      { objective: "O1", q: "Depois de um questionário de interesses, deve:", options: ["Esquecer os resultados", "Publicar a sua palavra-passe", "Deixar a escola", "Anotar as suas principais áreas de interesse"], answer: 3, why: "Os seus resultados são pistas para o passo seguinte." },
      { objective: "O2", q: "Quando procura ideias de carreiras com a IA, deixe de fora:", options: ["Os seus interesses", "Dados privados como a sua morada", "A sua faixa de idade", "A sua disciplina preferida"], answer: 1, why: "Nunca coloque informações privadas na IA." },
      { objective: "O2", q: "Uma aprendizagem profissional é:", options: ["Um videojogo", "Um teste não pago", "Um emprego pago em que aprende um ofício enquanto trabalha", "Uma residência universitária"], answer: 2, why: "Os aprendizes ganham enquanto aprendem." },
      { objective: "O2", q: "A lista de carreiras da IA deve ser tratada como:", options: ["Ideias a verificar", "Factos garantidos", "Uma oferta de emprego", "Uma nota escolar"], answer: 0, why: "A IA pode errar sobre o salário e a formação." },
      { objective: "O3", q: "O bls.gov/ooh mostra, para cada emprego:", options: ["Letras de músicas", "O salário, a formação e as perspetivas de emprego", "Pontuações de jogos", "O tempo que faz"], answer: 1, why: "O Occupational Outlook Handbook dá esses factos." },
      { objective: "O3", q: "A IA e o bls.gov não concordam sobre a formação para um emprego. Confie:", options: ["Na IA", "Em nenhum", "Num meme", "No site oficial"], answer: 3, why: "Os sites oficiais são verificados e estão atualizados." },
      { objective: "O3", q: "Perspetivas de emprego quer dizer:", options: ["Quantos empregos se esperam no futuro", "A vista do escritório", "A roupa que veste para trabalhar", "O humor do seu chefe"], answer: 0, why: "As perspetivas falam do número de empregos no futuro." },
      { objective: "O4", q: "Automação quer dizer:", options: ["Conduzir um carro", "Uma regra da escola", "Máquinas ou programas a fazer tarefas que antes eram feitas por pessoas", "Um estilo de música"], answer: 2, why: "A automação passa tarefas para as máquinas." },
      { objective: "O4", q: "Qual é uma habilidade social?", options: ["Só a rapidez a escrever no teclado", "Ter um computador portátil", "Trabalho em equipa", "Saber uma palavra-passe"], answer: 2, why: "As habilidades sociais são habilidades com pessoas, como o trabalho em equipa." },
      { objective: "O4", q: "Para verificar o que a IA diz sobre a IA num emprego, pode:", options: ["Perguntar a uma pessoa real que faz esse trabalho", "Confiar totalmente", "Perguntar a um anúncio que aparece no ecrã", "Não verificar"], answer: 0, why: "As pessoas que fazem o trabalho sabem como ele é na realidade." },
      { objective: "O5", q: "Dupla matrícula quer dizer:", options: ["Ter dois cacifos", "Ter dois telefones", "Ter dois almoços", "Fazer disciplinas universitárias enquanto está no ensino secundário"], answer: 3, why: "Os alunos ganham créditos universitários mais cedo." },
      { objective: "O5", q: "Porque verificar as licenças em sites oficiais?", options: ["A IA está sempre certa", "As regras variam de estado para estado", "Nunca mudam", "Não é preciso"], answer: 1, why: "As regras de formação e de licenças variam de estado para estado." },
      { objective: "O5", q: "Um bom pedido para um percurso inclui:", options: ["O seu ano escolar e a carreira-alvo", "A sua palavra-passe", "A sua morada", "Nada"], answer: 0, why: "O ano escolar e o objetivo deixam a IA fazer um plano adequado." },
      { objective: "O6", q: "Pela lei federal, os jovens de 14 e 15 anos normalmente só podem trabalhar entre:", options: ["A meia-noite e as 6 da manhã", "A qualquer hora", "As 7 da manhã e as 7 da noite (9 da noite de 1 de junho ao Labor Day)", "Só em dias de aulas"], answer: 2, why: "Esses são os limites federais de horário." },
      { objective: "O6", q: "Pela lei federal, quem não pode fazer trabalhos perigosos?", options: ["Só quem tem menos de 12 anos", "Qualquer pessoa com menos de 18 anos", "Os adultos", "Ninguém"], answer: 1, why: "Os trabalhos perigosos são proibidos a qualquer pessoa com menos de 18 anos." },
      { objective: "O6", q: "Antes de aceitar um primeiro emprego, deve:", options: ["Mentir sobre a sua idade", "Faltar às aulas", "Dar o seu número de telefone à IA", "Verificar as regras do seu estado e falar com um pai, uma mãe ou um responsável"], answer: 3, why: "As regras do estado podem exigir uma autorização, e um pai, uma mãe ou um responsável deve saber." },
      { objective: "O6", q: "Acompanhar um profissional (job shadowing) é:", options: ["Esconder-se do chefe", "Um modo de videojogo", "Um tipo de currículo", "Seguir um trabalhador durante um dia para ver o emprego"], answer: 3, why: "Acompanhar um profissional deixa você ver um emprego de perto." },
      { objective: "O6", q: "Uma apresentação para o primeiro emprego deve ser:", options: ["Uma redação de 10 páginas", "Cerca de 3 frases sobre você, treinadas em voz alta", "A sua morada e o seu número de telefone", "Escrita pela IA e nunca lida"], answer: 1, why: "Curta e treinada é fácil de dizer com confiança." }
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
      7,
      9,
      11,
      13,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Porque combina comigo",
        objective: "O1",
        notYet: "Nenhuma ligação entre a carreira e os interesses do aluno.",
        meets: "Indica resultados do questionário de interesses ou atividades preferidas que combinam com a carreira.",
        exceeds: "Também indica um ponto forte ou um valor que combina com a carreira."
      },
      {
        name: "Factos oficiais",
        objective: "O3",
        notYet: "Falta o salário, a formação ou as perspetivas, ou foram tirados só da IA.",
        meets: "Formação habitual, salário e perspetivas de emprego tirados de bls.gov/ooh ou mynextmove.org.",
        exceeds: "Também indica uma coisa em que a IA disse algo diferente do site oficial."
      },
      {
        name: "A IA no trabalho",
        objective: "O4",
        notYet: "Nenhum uso da IA nem habilidade humana indicados.",
        meets: "Uma forma como a IA é usada na carreira e duas habilidades humanas que continuam a ser importantes.",
        exceeds: "Inclui uma pergunta para fazer a uma pessoa real que faz esse trabalho, ou a resposta dela."
      },
      {
        name: "Os passos deste ano",
        objective: "O5",
        notYet: "Menos de três passos, ou passos vagos como \"esforçar-me\".",
        meets: "Três passos concretos: uma disciplina, um clube ou atividade, e uma pessoa com quem falar.",
        exceeds: "Pelo menos um passo foi confirmado com um orientador ou num site oficial."
      },
      {
        name: "Apresentação para o primeiro emprego",
        objective: "O6",
        notYet: "Não há apresentação, ou ela tem dados privados.",
        meets: "Uma apresentação de três frases sobre o aluno, treinada em voz alta.",
        exceeds: "Também indica as regras de trabalho para jovens que se aplicam à idade e ao estado do aluno."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dão um dos três passos planeados (disciplina, clube ou conversa) em 30 dias",
      "Alunos que se reúnem com um orientador escolar sobre o seu plano de carreira",
      "Alunos que começam um emprego, um voluntariado, um acompanhamento de um profissional ou um programa de carreira em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, um computador da escola ou da biblioteca com internet",
      "Sites gratuitos: mynextmove.org e bls.gov/ooh",
      "Um assistente de IA gratuito que o aluno tem autorização para usar",
      "Papel ou um documento para o plano de carreira de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Trabalhe com o orientador escolar para que os alunos possam ver as opções de disciplinas, de CTE e de dupla matrícula durante o curso.",
      "Lembre aos alunos que o salário e as regras de trabalho para jovens mudam e variam de estado para estado; peça-lhes que verifiquem em sites oficiais durante a aula.",
      "Nunca peça aos alunos para colocar dados privados nas ferramentas de IA; use só o primeiro nome ou nenhum nome nas apresentações.",
      "Convide alguém de um emprego ou ofício local para que os alunos possam fazer a sua pergunta à \"pessoa real\".",
      "Avalie o plano de carreira com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
