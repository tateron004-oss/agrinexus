"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ai-pbl.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "edu-ai-pbl-pt",
  lang: "pt",
  translationOf: "edu-ai-pbl",
  category: "Leadership Development",
  name: "IA e Aprendizagem Baseada em Projetos",
  skills: "Desenhar um projeto com uma pergunta orientadora, Planear etapas e grelhas de avaliação com IA, Ensinar os alunos a pesquisar com IA de forma responsável, Definir regras de uso da IA para cada etapa do projeto, Avaliar o processo e a aprendizagem individual, Organizar uma apresentação pública",
  outcome: "desenhar uma unidade de aprendizagem baseada em projetos com a ajuda da IA, com uma pergunta orientadora, etapas, uma grelha de avaliação e um produto público autêntico, com regras claras de uso da IA para cada etapa, um registo de IA do aluno e pontos de verificação que mostram a aprendizagem de cada aluno.",
  about: [
    "Este curso é para professores, coordenadores pedagógicos e diretores de escola que usam ou querem usar a aprendizagem baseada em projetos (ABP). Na ABP, os alunos aprendem a trabalhar durante algum tempo numa pergunta real e a partilhar um produto com um público real. A IA muda a forma como os alunos pesquisam, criam e colaboram; também torna mais fácil saltar a aprendizagem.",
    "O Capítulo 1 usa a IA para desenhar o projeto: a pergunta orientadora, o lançamento, as etapas e a grelha de avaliação, e ensina os alunos a pesquisar com IA de forma responsável. O Capítulo 2 gere o projeto: regras de IA para cada etapa, ferramentas de equipa, pontos de verificação que mostram a aprendizagem individual e um produto público com uma declaração honesta do uso da IA.",
    "Use ferramentas aprovadas para tudo o que os alunos fazem e não coloque informações dos alunos em ferramentas não aprovadas. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Desenhe uma unidade de ABP de duas a quatro semanas: uma pergunta orientadora, uma atividade de lançamento, quatro a seis etapas, cada uma com um nível de uso da IA, uma grelha de avaliação para o produto final e para o processo, um ponto de verificação individual em cada etapa, um modelo de registo de IA para os alunos e um plano para uma apresentação pública com um público real. Peça a um colega para a verificar e reveja uma parte com base nos comentários dele.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Professores, coordenadores pedagógicos e diretores de escola que fazem ou querem fazer unidades de aprendizagem baseada em projetos (ABP) e precisam de planear para alunos que têm ferramentas de IA.",
    startingPoint: "Sabem planear unidades e trabalhos de grupo e classificar um produto final. Alguns já fizeram um projeto. Poucos definiram regras de IA para cada etapa de um projeto ou criaram pontos de verificação que mostram a aprendizagem de cada aluno.",
    gap: "Um aluno pode pedir à IA a resposta a uma pergunta orientadora em segundos, e os produtos de equipa podem esconder quem aprendeu o quê. Os professores precisam de desenhar projetos em que a investigação continua real, o uso da IA é claro e honesto em cada etapa e a aprendizagem de cada aluno se vê.",
    constraints: [
      "Tempo: lições curtas que cabem num tempo de planificação; a própria unidade dura de duas a quatro semanas",
      "Aparelhos: um computador da escola com um assistente de IA que a direção escolar permite",
      "Privacidade: os nomes e as notas dos alunos ficam fora das ferramentas que a direção escolar não aprovou",
      "As regras da escola sobre fotografias, nomes, gravações e partilha na internet aplicam-se à apresentação",
      "Os padrões curriculares vêm da fonte oficial, não da IA"
    ],
    prerequisites: "Nenhum. Os professores que nunca usaram ferramentas de IA podem fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma ideia de projeto", action: "enumerar os elementos essenciais de um bom projeto e escrever uma pergunta orientadora a que a IA não consegue simplesmente responder", standard: "com uma pergunta local ou pessoal e aberta" },
    { id: "O2", condition: "Com o seu ano, disciplina, padrões curriculares e duração do projeto", action: "usar a IA para fazer um rascunho de uma atividade de lançamento, de quatro a seis etapas e de uma grelha de avaliação em duas partes", standard: "verificados com os seus padrões curriculares e com um calendário realista" },
    { id: "O3", condition: "Quando os alunos pesquisam um tema do projeto", action: "ensinar a rotina explorar, encontrar, verificar e citar com um registo de pesquisa", standard: "para que cada dado usado seja verificado numa fonte real" },
    { id: "O4", condition: "Com as etapas do seu projeto", action: "definir um nível de uso da IA para cada etapa e dar aos alunos um modelo de registo de IA", standard: "com uma razão que os alunos entendem para cada nível" },
    { id: "O5", condition: "Com um projeto de equipa", action: "planear um ponto de verificação individual em cada etapa", standard: "para que cada aluno saiba explicar o trabalho da equipa e a sua própria parte" },
    { id: "O6", condition: "Quando o projeto termina", action: "planear uma apresentação pública com um público real, uma declaração do uso da IA e uma reflexão dos alunos", standard: "seguindo as regras da sua escola sobre fotografias, nomes e partilha na internet" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Desenhar o projeto com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Os elementos essenciais da ABP e o lugar da IA",
          minutes: 5,
          goal: "Dizer os elementos essenciais de um bom projeto e onde a IA ajuda ou prejudica.",
          text: [
            "Os bons projetos têm alguns elementos essenciais em comum: uma pergunta orientadora aberta e importante para os alunos; investigação contínua ao longo do tempo; trabalho autêntico ligado ao mundo real; voz e escolha dos alunos; crítica e revisão; e um produto público partilhado com um público além do professor.",
            "A IA pode ajudar o professor a desenhar tudo isto mais depressa e pode ajudar os alunos a ter ideias, pesquisar, fazer rascunhos e receber comentários. Mas também pode cortar caminho à investigação: um aluno pode pedir à IA a resposta à pergunta orientadora em segundos.",
            "Por isso, planeie a pensar nisso. A pergunta orientadora deve ser local ou pessoal o suficiente para que a IA não consiga simplesmente responder (\"Como podemos reduzir o desperdício de comida na cantina da nossa escola?\" em vez de \"O que causa o desperdício de comida?\"), e a aprendizagem deve ver-se no processo, não só no produto."
          ],
          words: [["Aprendizagem baseada em projetos (ABP)", "aprender trabalhando durante algum tempo numa pergunta real e partilhando um produto com um público."], ["Pergunta orientadora", "a pergunta aberta que guia todo o projeto."], ["Autêntico", "ligado a pessoas, lugares e problemas reais."]],
          slides: [
            { title: "Elementos essenciais da ABP", bullets: ["Pergunta orientadora; investigação contínua", "Trabalho autêntico; voz e escolha", "Crítica e revisão; produto público"] },
            { title: "A IA pode ajudar ou cortar caminho", bullets: ["Ajuda a desenhar, ter ideias, pesquisar, escrever rascunhos", "Pode responder a uma pergunta geral em segundos"] },
            { title: "Planeie a pensar nisso", bullets: ["Perguntas orientadoras locais ou pessoais", "A aprendizagem vê-se no processo"] }
          ],
          tryIt: "Peça a uma ferramenta de IA para responder a uma pergunta orientadora que já usou ou viu. Depois reescreva a pergunta para que seja local ou pessoal o suficiente e a IA não consiga simplesmente responder.",
          youCanNow: "dizer os elementos essenciais de uma boa ABP e desenhar perguntas orientadoras em que a IA não consegue cortar caminho.",
          quickCheck: [
            { objective: "O1", q: "Qual é um dos elementos essenciais da ABP?", options: ["Uma ficha de trabalho classificada só pelo professor", "Um único teste no final", "Crítica e revisão", "Um tema escolhido pelo professor sem escolha dos alunos"], answer: 2, why: "Os bons projetos incluem crítica e revisão, além de voz, escolha e um produto público." },
            { objective: "O1", q: "A sua pergunta orientadora é \"O que causa a poluição do ar?\" Como a mudaria?", options: ["Torná-la local, como \"Como podemos reduzir os carros com o motor ligado à porta da nossa escola?\"", "Torná-la mais curta", "Acrescentar-lhe mais factos", "Pedir primeiro à IA para lhe responder"], answer: 0, why: "Uma pergunta local ou pessoal impede a IA de simplesmente lhe responder." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Perguntas orientadoras, lançamentos, etapas e grelhas de avaliação",
          minutes: 6,
          goal: "Usar a IA para fazer um rascunho da pergunta orientadora, da atividade de lançamento, das etapas e da grelha de avaliação do projeto.",
          text: [
            "Dê à IA o ano, a disciplina, os padrões curriculares (da sua fonte oficial), a duração do projeto e o contexto da sua comunidade (em termos gerais). Peça cinco opções de pergunta orientadora e depois escolha uma e melhore-a com os alunos, se puder.",
            "Peça uma atividade de lançamento que desperte a curiosidade (um convidado, um objeto misterioso, um problema local, uma visita a um lugar) e quatro a seis etapas: pesquisa, plano, primeiro rascunho ou protótipo, crítica, revisão, produto final. Peça os conhecimentos de que cada etapa precisa, para poder planear mini-lições.",
            "Peça uma grelha de avaliação com duas partes: o produto final (conteúdo e qualidade) e o processo (colaboração, revisão, uso de evidências). Verifique que cada critério da grelha corresponde aos seus padrões curriculares e que o calendário é realista; a IA muitas vezes mete coisas a mais."
          ],
          steps: ["Dê o ano, a disciplina, os padrões curriculares, a duração e o contexto.", "Escolha e melhore uma pergunta orientadora.", "Faça um rascunho da atividade de lançamento e de 4-6 etapas.", "Liste os conhecimentos de que cada etapa precisa.", "Faça um rascunho de uma grelha para o produto e o processo; verifique padrões e calendário."],
          words: [["Atividade de lançamento", "uma atividade que dá início a um projeto e faz nascer perguntas."], ["Etapa", "um ponto do projeto em que uma parte do trabalho tem de ser entregue."], ["Crítica", "comentários organizados sobre um trabalho em curso."]],
          slides: [
            { title: "Dê o contexto à IA", bullets: ["Ano, disciplina, padrões curriculares", "Duração do projeto, contexto da comunidade"] },
            { title: "Faça um rascunho da estrutura", bullets: ["Opções de pergunta orientadora", "Atividade de lançamento", "4-6 etapas com os conhecimentos necessários"] },
            { title: "Grelha de avaliação em duas partes", bullets: ["Produto: conteúdo e qualidade", "Processo: colaboração, revisão, evidências", "Verifique padrões e calendário"] }
          ],
          tryIt: "Use a IA para fazer um rascunho da pergunta orientadora, da atividade de lançamento, das etapas e de uma grelha de avaliação em duas partes para um projeto que poderia ensinar. Ajuste o calendário ao seu calendário escolar.",
          youCanNow: "desenhar depressa a estrutura de um projeto com a IA e verificá-la com os padrões curriculares e o tempo disponível.",
          quickCheck: [
            { objective: "O2", q: "Que duas partes deve avaliar uma grelha de ABP?", options: ["A ortografia e a limpeza", "O produto final e o processo", "A assiduidade e os trabalhos de casa", "A rapidez e o tamanho"], answer: 1, why: "Avaliar o processo (colaboração, revisão, evidências) além do produto valoriza a aprendizagem." },
            { objective: "O2", q: "O calendário do projeto feito pela IA mete oito etapas em duas semanas. O que faria?", options: ["Mantê-lo, já que foi a IA que o planeou", "Acrescentar mais etapas", "Tirar a grelha de avaliação para poupar tempo", "Reduzi-lo a um plano realista, como quatro a seis etapas"], answer: 3, why: "A IA muitas vezes mete coisas a mais, por isso verifique que o calendário é realista." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pesquisar com IA: procurar, verificar, citar",
          minutes: 5,
          goal: "Ensinar aos alunos uma rotina de pesquisa que usa a IA sem confiar nela às cegas.",
          text: [
            "Nos projetos, os alunos pesquisam. A IA pode ajudá-los a entender um tema, criar perguntas e encontrar palavras de pesquisa, mas pode inventar factos e fontes. Ensine uma rotina em três passos: Explorar com a IA (\"Que perguntas devo fazer sobre o desperdício de comida nas escolas?\" \"Que palavras devo pesquisar?\"); Encontrar fontes reais (motores de busca, bases de dados da biblioteca, entrevistas, dados locais); Verificar e citar (verificar cada facto em pelo menos uma fonte real e citar essa fonte, não a IA).",
            "As fontes primárias são um ponto forte da ABP: os alunos podem entrevistar os funcionários da cantina, fazer um inquérito aos colegas (anónimo), medir eles próprios o desperdício. A IA não pode fazer isto por eles, e isso mantém a investigação real.",
            "Peça aos alunos para manterem um registo de pesquisa: pergunta, fonte, o que aprenderam e como o verificaram."
          ],
          steps: ["Explorar: usar a IA para criar perguntas e palavras de pesquisa.", "Encontrar fontes reais: pesquisa, bases de dados, entrevistas, dados locais.", "Verificar cada facto numa fonte real.", "Citar a fonte real, não a IA.", "Manter um registo de pesquisa."],
          words: [["Fonte primária", "evidência em primeira mão, como uma entrevista, um inquérito ou uma medição."], ["Registo de pesquisa", "uma lista das perguntas, fontes, descobertas e verificações."]],
          slides: [
            { title: "Rotina de pesquisa em três passos", bullets: ["Explorar com a IA: perguntas, palavras de pesquisa", "Encontrar fontes reais", "Verificar e citar a fonte real"] },
            { title: "Fontes primárias", bullets: ["Entrevistas, inquéritos anónimos, medições", "A IA não pode fazer isto por eles"] },
            { title: "Registo de pesquisa", bullets: ["Pergunta, fonte, o que aprendeu, como verificou"] }
          ],
          tryIt: "Escreva a rotina de pesquisa e um modelo de registo de pesquisa para o seu projeto. Teste-os você mesmo com uma pergunta de pesquisa do projeto.",
          youCanNow: "ensinar os alunos a pesquisar com IA apoiando-se em fontes reais e verificadas.",
          quickCheck: [
            { objective: "O3", q: "O que devem os alunos citar no projeto?", options: ["A fonte real que verificaram", "A ferramenta de IA", "Nada, se a IA ajudou", "O nome do motor de busca"], answer: 0, why: "A rotina é verificar cada facto numa fonte real e citar essa fonte." },
            { objective: "O3", q: "Uma equipa quer saber quanta comida a cantina deita fora. Qual é o melhor passo?", options: ["Pedir um número à IA", "Copiar um número de um site qualquer", "Medir eles próprios o desperdício ou entrevistar os funcionários da cantina", "Adivinhar e continuar"], answer: 2, why: "As fontes primárias mantêm a investigação real, e a IA não as pode recolher pelos alunos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Desenhar o projeto com IA",
        questions: [
          { objective: "O1", q: "A que pergunta orientadora é mais difícil a IA simplesmente responder?", options: ["O que causa o desperdício de comida?", "O que é o desperdício de comida?", "Como podemos reduzir o desperdício de comida na cantina da nossa escola?", "Quem inventou a compostagem?"], answer: 2, why: "As perguntas locais precisam da investigação dos próprios alunos." },
          { objective: "O2", q: "O que é uma atividade de lançamento?", options: ["Uma atividade que dá início a um projeto e faz nascer perguntas", "A apresentação final", "Um teste", "Uma autorização para uma visita de estudo"], answer: 0, why: "Cria curiosidade no início." },
          { objective: "O2", q: "Uma grelha de ABP em duas partes avalia:", options: ["Só o produto final", "Só a apresentação", "Só a assiduidade", "O produto e o processo"], answer: 3, why: "O processo mostra a aprendizagem ao longo do caminho." },
          { objective: "O3", q: "Os alunos devem citar:", options: ["A ferramenta de IA como fonte", "A fonte real que verificaram", "Nada", "Só a Wikipédia"], answer: 1, why: "A IA não é uma fonte de confiança; as fontes reais são." },
          { objective: "O3", q: "Qual destas é uma fonte primária?", options: ["Um resumo feito pela IA", "Uma resposta de um chatbot", "Um resumo de um manual", "Uma entrevista aos funcionários da cantina"], answer: 3, why: "A evidência em primeira mão mantém a investigação real." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir e avaliar o projeto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Regras de IA para cada etapa e um registo de IA do aluno",
          minutes: 5,
          goal: "Definir um nível de uso da IA para cada etapa e um registo que os alunos mantêm.",
          text: [
            "Uma só regra de IA para todo o projeto é pouco precisa. Defina um nível para cada etapa, usando a escala da sua escola. Por exemplo: ter ideias, IA permitida para ideias; pesquisa, IA só para perguntas e palavras de pesquisa; primeiro rascunho, sem IA (os alunos mostram o seu próprio raciocínio); crítica, comentários da IA permitidos junto com os comentários dos colegas; produto final, ferramentas de IA permitidas para o design e o acabamento, com declaração.",
            "Os alunos mantêm um registo de IA: data, ferramenta, o que pediram, o que usaram e o que mudaram. Cada entrada leva um minuto e torna o uso da IA visível e honesto.",
            "Explique as razões. Os alunos seguem as regras que entendem: \"O primeiro rascunho é sem IA porque precisamos de ver o seu raciocínio antes de alguém ajudar.\""
          ],
          steps: ["Liste as etapas.", "Defina um nível de uso da IA para cada uma.", "Escreva a razão de cada nível.", "Dê aos alunos um modelo de registo de IA.", "Verifique os registos em cada etapa."],
          words: [["Registo de IA", "a lista que o aluno faz de quando e como usou a IA."], ["Declaração", "dizer abertamente como a IA foi usada."]],
          slides: [
            { title: "Um nível para cada etapa", bullets: ["Ter ideias: ideias permitidas", "Pesquisa: perguntas e palavras de pesquisa", "Primeiro rascunho: sem IA", "Produto final: ferramentas permitidas, com declaração"] },
            { title: "O registo de IA", bullets: ["Data, ferramenta, o que pediu", "O que usou, o que mudou"] },
            { title: "Explique porquê", bullets: ["\"Precisamos de ver primeiro o seu raciocínio\""] }
          ],
          tryIt: "Escreva um nível de uso da IA e uma razão de uma linha para cada etapa do seu projeto, e faça um modelo de registo de IA de uma página para os alunos.",
          youCanNow: "definir regras de IA claras, etapa a etapa, para um projeto e tornar visível o uso da IA.",
          quickCheck: [
            { objective: "O4", q: "O que regista o registo de IA do aluno?", options: ["Só a nota final", "Data, ferramenta, o que foi pedido, o que foi usado e o que foi mudado", "A palavra-passe do aluno", "Quanto tempo durou cada aula"], answer: 1, why: "O registo torna o uso da IA visível e honesto, com uma entrada curta de cada vez." },
            { objective: "O4", q: "Um aluno pergunta porque o primeiro rascunho é sem IA. O que diria?", options: ["Porque a IA nunca é permitida", "Porque as regras dizem assim", "Porque a IA é lenta demais", "Porque precisamos de ver o seu raciocínio antes de alguém ajudar"], answer: 3, why: "Os alunos seguem as regras que entendem, por isso dê a razão." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Pontos de verificação que mostram a aprendizagem individual",
          minutes: 6,
          goal: "Planear pontos de verificação que mostram o que cada aluno aprendeu num projeto de equipa.",
          text: [
            "Os produtos de equipa podem esconder quem aprendeu o quê, e a IA torna isso mais fácil. Acrescente pontos de verificação individuais em cada etapa: uma pequena pergunta de saída sobre os conhecimentos dessa etapa, uma conversa de dois minutos, uma reflexão escrita ou uma explicação individual de uma parte do trabalho da equipa.",
            "Use a IA para se preparar: perguntas para cada ponto de verificação, perguntas para as conversas e perguntas de reflexão (\"O que mudou depois da crítica e porquê?\"). Não coloque os nomes e as notas dos alunos em ferramentas não aprovadas quando registar os resultados.",
            "Use bem as ferramentas de equipa: a IA pode ajudar as equipas a dividir tarefas, planear o calendário e comentar os rascunhos com base na grelha de avaliação. Mas cada aluno deve saber explicar o trabalho da equipa e a sua própria contribuição."
          ],
          steps: ["Acrescente um ponto de verificação individual em cada etapa.", "Use a IA para fazer rascunhos das perguntas de verificação, de conversa e de reflexão.", "Registe os resultados na sua pauta ou numa ferramenta aprovada.", "Deixe as equipas usar a IA para planear e comentar rascunhos, como permitido.", "Cada aluno explica o trabalho e a sua parte."],
          words: [["Ponto de verificação", "uma pequena verificação individual da aprendizagem durante um projeto."], ["Conversa individual", "uma conversa curta, a dois, entre o professor e o aluno sobre o trabalho dele."], ["Reflexão", "escrever ou falar sobre o que aprendeu e como."]],
          slides: [
            { title: "Produtos de equipa podem esconder a aprendizagem", bullets: ["Acrescente pontos de verificação individuais", "Perguntas de saída, conversas, reflexões"] },
            { title: "A IA ajuda a preparar", bullets: ["Perguntas de verificação e de conversa", "Perguntas de reflexão", "Os registos ficam em ferramentas aprovadas"] },
            { title: "Ferramentas de equipa, prova individual", bullets: ["IA para planear e comentar rascunhos", "Cada aluno explica o trabalho e a sua parte"] }
          ],
          tryIt: "Use a IA para fazer um rascunho de um ponto de verificação individual para cada etapa (uma pergunta de saída, uma pergunta de conversa ou uma pergunta de reflexão).",
          youCanNow: "avaliar a aprendizagem de cada aluno dentro de um projeto de equipa.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um ponto de verificação individual?", options: ["Uma conversa de dois minutos com um aluno", "O cartaz final da equipa", "Uma nota de grupo para todo o projeto", "Uma votação na turma"], answer: 0, why: "Os pontos de verificação individuais mostram o que cada aluno aprendeu, não só a equipa." },
            { objective: "O5", q: "Regista os resultados dos pontos de verificação com a ajuda da IA. O que faria?", options: ["Colar os nomes e as notas dos alunos em qualquer ferramenta de IA", "Publicar os resultados no site da turma", "Não colocar nomes e notas em ferramentas que a direção escolar não aprovou", "Não registar os resultados"], answer: 2, why: "Os nomes e as notas dos alunos ficam fora das ferramentas não aprovadas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "O produto público, a apresentação e a reflexão",
          minutes: 6,
          goal: "Planear uma apresentação autêntica com uma declaração honesta do uso da IA e uma reflexão dos alunos.",
          text: [
            "Um público real aumenta a qualidade do trabalho: famílias, membros da comunidade, especialistas locais, o conselho da escola ou uma empresa que enfrenta o problema. Planeie a apresentação cedo e convide as pessoas com uma mensagem curta (a IA pode fazer o rascunho).",
            "Peça às equipas para juntarem ao produto uma declaração do uso da IA (\"Usámos a IA para ter ideias de design e para verificar a gramática; todos os dados da pesquisa foram recolhidos por nós\"). Uma declaração honesta faz parte da integridade do produto, e o público respeita-a.",
            "Proteja os alunos: siga as regras da sua escola sobre fotografias, nomes e gravações, e sobre a partilha de trabalhos na internet. Termine com uma reflexão: o que os alunos aprenderam sobre o tema, sobre o trabalho em equipa e sobre quando a IA ajudou ou atrapalhou."
          ],
          steps: ["Escolha um público real e convide-o cedo.", "As equipas juntam ao produto uma declaração do uso da IA.", "Siga as regras da escola sobre fotografias, nomes e partilha na internet.", "Faça a apresentação.", "Termine com uma reflexão sobre a aprendizagem, o trabalho em equipa e a IA."],
          words: [["Apresentação pública", "um evento em que os alunos apresentam o seu trabalho a um público."], ["Público autêntico", "pessoas reais que se interessam pelo trabalho, além do professor."]],
          slides: [
            { title: "Um público real", bullets: ["Famílias, especialistas, comunidade, conselho da escola", "Convide cedo"] },
            { title: "Declaração do uso da IA em cada produto", bullets: ["O que a IA fez e o que os alunos fizeram", "A honestidade faz parte da integridade"] },
            { title: "Proteger e refletir", bullets: ["Regras da escola sobre fotografias e nomes", "Refletir: tema, trabalho em equipa, IA"] }
          ],
          tryIt: "Tarefa final: junte a sua unidade de ABP (pergunta orientadora, atividade de lançamento, etapas com níveis de IA, grelha para o produto e o processo, pontos de verificação individuais, registo de IA do aluno, plano da apresentação). Partilhe-a com um colega e reveja uma parte com base nos comentários dele.",
          youCanNow: "liderar a aprendizagem baseada em projetos em que a IA apoia a investigação real e a aprendizagem de cada aluno se vê.",
          quickCheck: [
            { objective: "O6", q: "Qual é um público autêntico para um projeto?", options: ["Só o professor", "Especialistas locais ou famílias que se interessam pelo problema", "Um chatbot de IA", "Alunos da mesma equipa"], answer: 1, why: "Pessoas reais que se interessam pelo trabalho aumentam a sua qualidade." },
            { objective: "O6", q: "Um familiar na apresentação quer publicar fotografias dos alunos na internet. O que verificaria?", options: ["Nada; é um evento público", "Se as fotografias estão nítidas", "Se a IA as pode editar", "As regras da sua escola sobre fotografias, nomes e partilha na internet"], answer: 3, why: "Proteja os alunos seguindo as regras da escola sobre fotografias e partilha." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir e avaliar o projeto",
        questions: [
          { objective: "O4", q: "Porque definir um nível de uso da IA para cada etapa em vez de um para todo o projeto?", options: ["A IA exige isso", "É mais curto", "Etapas diferentes desenvolvem capacidades diferentes", "Para confundir os alunos"], answer: 2, why: "Um primeiro rascunho pode precisar de não ter IA, enquanto o acabamento pode usá-la." },
          { objective: "O4", q: "O que regista o registo de IA do aluno?", options: ["Data, ferramenta, o que foi pedido, usado e mudado", "Notas", "Palavras-passe", "Notas do professor"], answer: 0, why: "Torna o uso da IA visível e honesto." },
          { objective: "O5", q: "Como pode ver o que cada aluno aprendeu num projeto de equipa?", options: ["Classificar só o produto da equipa", "Acrescentar pontos de verificação individuais em cada etapa", "Perguntar à IA", "Não avaliar"], answer: 1, why: "As verificações individuais mostram a aprendizagem individual." },
          { objective: "O6", q: "O que deve dizer a declaração do uso da IA de uma equipa?", options: ["O que a IA fez e o que os alunos fizeram", "Nada", "Só o preço da ferramenta", "Que a IA não existe"], answer: 0, why: "Uma declaração honesta faz parte da integridade." },
          { objective: "O6", q: "Antes de publicar trabalhos dos alunos na internet depois da apresentação, verifique:", options: ["A opinião da IA", "Nada", "Só o tipo de letra", "As regras da sua escola sobre fotografias, nomes e partilha na internet"], answer: 3, why: "As regras de privacidade dos alunos aplicam-se." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA e Aprendizagem Baseada em Projetos",
    questions: [
      { objective: "O1", q: "Na ABP, os alunos aprendem:", options: ["Só a ler manuais", "Trabalhando durante algum tempo numa pergunta real e partilhando um produto", "Só com testes diários", "Vendo vídeos"], answer: 1, why: "Isso é o centro da ABP." },
      { objective: "O1", q: "Uma pergunta orientadora deve ser:", options: ["Secreta", "Respondida com uma só palavra", "Aberta e importante para os alunos", "Tirada de um banco de testes"], answer: 2, why: "Guia uma investigação contínua." },
      { objective: "O1", q: "Tornar uma pergunta orientadora local ajuda porque:", options: ["Não precisa de pesquisa", "É mais curta", "A IA não consegue simplesmente responder", "Evita os padrões curriculares"], answer: 2, why: "As perguntas locais precisam de investigação real." },
      { objective: "O1", q: "Qual é um elemento essencial da ABP?", options: ["Um produto público para um público real", "Nenhuma revisão", "Só o professor como público", "Nenhuma escolha dos alunos"], answer: 0, why: "Os produtos públicos aumentam a qualidade." },
      { objective: "O2", q: "As etapas são:", options: ["Níveis da grelha de avaliação", "Notas", "Visitas de estudo", "Pontos em que partes do projeto têm de ser entregues"], answer: 3, why: "Dão estrutura ao projeto." },
      { objective: "O2", q: "Para cada etapa, a IA pode listar:", options: ["Os nomes dos alunos", "Os conhecimentos de que precisa, para planear mini-lições", "Notas", "Palavras-passe"], answer: 1, why: "Isto ajuda a planear o ensino." },
      { objective: "O2", q: "Os calendários de projeto feitos pela IA muitas vezes:", options: ["Saltam etapas", "Deixam tempo a mais", "São sempre perfeitos", "Metem coisas a mais"], answer: 3, why: "Verifique-os com o seu calendário escolar." },
      { objective: "O3", q: "O passo 1 da rotina de pesquisa é:", options: ["Citar a IA", "Copiar a resposta da IA", "Explorar com a IA: perguntas e palavras de pesquisa", "Saltar a pesquisa"], answer: 2, why: "A IA ajuda a começar a pesquisa, não a terminá-la." },
      { objective: "O3", q: "Cada facto que os alunos usam deve ser:", options: ["Verificado numa fonte real", "Tirado da IA", "Não verificado", "Inventado"], answer: 0, why: "A IA pode inventar factos." },
      { objective: "O3", q: "Um inquérito anónimo aos colegas é:", options: ["Um resumo feito pela IA", "Uma fonte primária", "Uma revisão secundária", "Não permitido"], answer: 1, why: "Os alunos recolhem evidência em primeira mão." },
      { objective: "O3", q: "Um registo de pesquisa regista:", options: ["A pergunta, a fonte, o que se aprendeu e como foi verificado", "Palavras-passe", "Notas", "Pedidos de almoço"], answer: 0, why: "Documenta a pesquisa real." },
      { objective: "O4", q: "Porque o primeiro rascunho pode ser uma etapa sem IA?", options: ["Porque os rascunhos não importam", "A IA é ilegal", "Para poupar dinheiro", "Para ver o raciocínio dos próprios alunos antes da ajuda"], answer: 3, why: "Primeiro pensar, depois a ajuda." },
      { objective: "O4", q: "As regras que os alunos entendem são:", options: ["Regras secretas", "Regras com as razões explicadas", "Regras que mudam todos os dias", "Regras dadas pela IA"], answer: 1, why: "As razões levam os alunos a aceitar as regras." },
      { objective: "O5", q: "Um ponto de verificação individual pode ser:", options: ["Uma nota de grupo", "Só o produto final da equipa", "Uma conversa de dois minutos", "Nada"], answer: 2, why: "Mostra a aprendizagem de um aluno." },
      { objective: "O5", q: "As perguntas de reflexão perguntam aos alunos:", options: ["A sua nota", "A sua palavra-passe", "O que mudaram e porquê", "Nada"], answer: 2, why: "A reflexão aprofunda a aprendizagem." },
      { objective: "O5", q: "Cada aluno de uma equipa deve saber:", options: ["Explicar o trabalho da equipa e a sua parte", "Apresentar só o seu slide", "Ficar calado", "Deixar a IA explicar"], answer: 0, why: "Entender o trabalho de todos faz parte da aprendizagem." },
      { objective: "O6", q: "Um público autêntico é:", options: ["Ninguém", "Só o professor", "Uma ferramenta de IA", "Pessoas reais que se interessam pelo trabalho"], answer: 3, why: "Os públicos reais aumentam a qualidade." },
      { objective: "O6", q: "Uma declaração do uso da IA num produto mostra:", options: ["O preço da IA", "O que a IA fez e o que os alunos fizeram", "As notas dos alunos", "Nada"], answer: 1, why: "A transparência cria confiança." },
      { objective: "O6", q: "As fotografias dos alunos na apresentação devem seguir:", options: ["As regras do fornecedor", "Nenhuma regra", "As modas das redes sociais", "As regras da escola sobre fotografias e nomes"], answer: 3, why: "A privacidade dos alunos importa." },
      { objective: "O6", q: "A reflexão final deve falar de:", options: ["Só a ferramenta de IA", "Só a nota", "O tema, o trabalho em equipa e quando a IA ajudou ou atrapalhou", "Nada"], answer: 2, why: "Os alunos aprendem ao refletir sobre as três coisas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 7, 8, 11, 13, 15, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pergunta orientadora e lançamento", objective: "O1", notYet: "A pergunta é fechada ou a IA poderia responder-lhe, ou não há atividade de lançamento.", meets: "Uma pergunta orientadora aberta, local ou pessoal, e uma atividade de lançamento que faz nascer perguntas.", exceeds: "Os alunos ajudaram a escolher ou a melhorar a pergunta." },
      { name: "Etapas e grelha de avaliação", objective: "O2", notYet: "Menos de quatro etapas, ou a grelha avalia só o produto.", meets: "Quatro a seis etapas num calendário realista e uma grelha para o produto e o processo, ligada aos padrões curriculares.", exceeds: "Cada etapa lista os conhecimentos de que precisa e uma mini-lição para os ensinar." },
      { name: "Níveis de IA e registo", objective: "O4", notYet: "Uma só regra de IA para todo o projeto, ou nenhum registo de IA do aluno.", meets: "Cada etapa tem um nível de uso da IA, e há um modelo de registo de IA do aluno.", exceeds: "Cada nível vem com uma razão escrita para os alunos." },
      { name: "Pontos de verificação individuais", objective: "O5", notYet: "Só o produto da equipa é avaliado.", meets: "Um ponto de verificação individual em cada etapa.", exceeds: "Os pontos de verificação variam (pergunta de saída, conversa, reflexão) e servem cada etapa." },
      { name: "Plano da apresentação", objective: "O6", notYet: "Nenhum público real, ou nenhuma declaração do uso da IA.", meets: "Uma apresentação pública com um público real, uma declaração do uso da IA e uma reflexão, seguindo as regras da escola.", exceeds: "Diz qual é o público concreto e como vai ser convidado." },
      { name: "Comentários de um colega", objective: "O2", notYet: "O plano não foi partilhado com um colega.", meets: "Um colega verificou o plano e uma parte foi revista.", exceeds: "Sabe dizer o que mudou e porque está melhor." }
    ]
  },
  evaluation: {
    results: [
      "Professores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Professores que fazem uma unidade de ABP com níveis de uso da IA no próximo período letivo (inquérito de seguimento)",
      "Apresentações feitas com um público real da comunidade",
      "Professores que fazem outro curso da Koach Learn de IA para educadores"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com um assistente de IA que a sua direção escolar permite",
      "Os seus padrões curriculares da fonte oficial e a escala de uso da IA da sua escola, se houver",
      "Um colega para rever o plano",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça-o com equipas de professores do mesmo ano ou da mesma disciplina: façam o teste inicial juntos e depois cada equipa desenha uma unidade.",
      "Reserve tempo para a revisão por um colega no final; se possível, junte professores de equipas diferentes.",
      "Lembre aos participantes que os nomes e as notas dos alunos ficam fora das ferramentas de IA não aprovadas.",
      "Peça aos diretores da escola para confirmarem as regras sobre fotografias na apresentação e partilha na internet antes de as equipas planearem os eventos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
