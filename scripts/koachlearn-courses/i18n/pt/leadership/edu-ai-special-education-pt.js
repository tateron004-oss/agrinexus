"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ai-special-education.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: IDEA, FAPE, IEP, Section 504 and FERPA keep their US names, explained in plain words.

module.exports = {
  id: "edu-ai-special-education-pt",
  lang: "pt",
  translationOf: "edu-ai-special-education",
  category: "Leadership Development",
  name: "IA para a Educação Especial",
  skills: "Saber onde a IA ajuda e onde não ajuda na educação especial, Fazer versões acessíveis dos materiais, Criar apoios visuais e tarefas divididas em partes, Escrever explicações em linguagem simples para as famílias, Proteger as informações do IEP e do plano 504, Definir regras para a equipa",
  outcome: "usar a IA para tornar os materiais da aula mais acessíveis (versões em linguagem simples, passos divididos em partes, horários visuais e exercícios em vários níveis) e para explicar às famílias, com palavras simples, os processos da educação especial, deixando sempre com a equipa todas as decisões do IEP e do plano 504 e todas as informações dos alunos.",
  about: [
    "Este curso é para professores de educação especial, professores do ensino regular que ensinam alunos com deficiência, profissionais de serviços de apoio, coordenadores e diretores de escola. A IA pode poupar tempo a adaptar materiais e a explicar processos. Nunca deve escrever nem decidir o conteúdo do IEP ou do plano 504 de um aluno.",
    "O Capítulo 1 marca os limites (o que a lei IDEA exige da equipa e porque é que a IA não pode fazer esse papel) e pratica a criação de materiais acessíveis. O Capítulo 2 trata da comunicação com as famílias, da proteção das informações dos alunos e das regras que a sua equipa vai seguir.",
    "Este curso explica a lei com palavras simples para que você saiba o que perguntar; não é aconselhamento jurídico. A palavra final é do diretor de educação especial e dos advogados do seu distrito escolar. Pratique só com materiais inventados ou gerais. Cada capítulo termina com uma verificação de conhecimentos e o curso termina com um questionário de 20 perguntas."
  ],
  finalTask: "Crie um pacote de acessibilidade para uma aula geral (sem informações de alunos): uma versão em linguagem simples do texto principal, a tarefa dividida em partes numeradas com uma lista de verificação, um horário visual da aula e exercícios em dois níveis; e ainda uma explicação de uma página, em linguagem simples, para as famílias, sobre um passo geral da educação especial (por exemplo, \"o que acontece na reunião anual do IEP\"). Verifique se tudo está correto e escreva cinco regras da equipa para o uso da IA na educação especial.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Professores de educação especial, professores do ensino regular que ensinam alunos com deficiência, profissionais de serviços de apoio, coordenadores e diretores de escolas dos Estados Unidos.",
    startingPoint: "Adaptam materiais e explicam os processos da educação especial à mão, o que leva muito tempo. Talvez já tenham experimentado a IA, mas não sabem bem onde ela cabe dentro da lei IDEA e da Secção 504, nem como manter seguras as informações do IEP e do plano 504.",
    gap: "A IA pode poupar tempo em materiais acessíveis e em explicações simples para as famílias, mas nunca deve escrever nem decidir o conteúdo do IEP ou do plano 504 de um aluno, e as informações dos alunos são muito sensíveis. Os educadores precisam de usar a IA para as tarefas certas, verificar o que ela produz e seguir regras claras da equipa.",
    constraints: [
      "O curso explica a lei com palavras simples e não é aconselhamento jurídico; a palavra final é do diretor de educação especial e dos advogados do distrito",
      "Pratique só com materiais inventados ou gerais; nenhuma informação de alunos em ferramentas de IA que não estejam aprovadas",
      "As decisões do IEP e do plano 504 e as adaptações obrigatórias ficam com a equipa e são dadas tal como estão escritas",
      "Os materiais para as famílias ficam gerais e são comparados com os materiais do distrito; as traduções são verificadas por falantes qualificados",
      "Tempo: lições curtas, que cabem num dia de aulas"
    ],
    prerequisites: "Nenhum. O curso \"IA para Líderes Escolares e Educativos 2: Ferramentas de IA para Educadores\" é um bom começo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas da educação especial", action: "separar cada tarefa em \"a IA pode ajudar\" ou \"só a equipa\"", standard: "colocando todas as decisões do IEP e do plano 504 com a equipa" },
    { id: "O2", condition: "Com um texto e uma tarefa gerais", action: "criar com a IA uma versão em linguagem simples e uma lista de verificação dividida em partes", standard: "comparando cada uma com o original e corrigindo todos os dados que faltam ou foram mudados" },
    { id: "O3", condition: "Para uma aula geral", action: "criar um horário visual e exercícios em dois níveis", standard: "com texto alternativo em cada imagem, todas as respostas verificadas e as adaptações obrigatórias dadas tal como estão escritas" },
    { id: "O4", condition: "Com um passo geral da educação especial", action: "escrever para as famílias uma explicação de uma página em linguagem simples", standard: "comparada com os materiais oficiais do seu distrito e lida por um colega para ver o tom" },
    { id: "O5", condition: "Quando um funcionário quer ajuda da IA com informações da educação especial", action: "escolher uma forma segura de ter essa ajuda sem partilhar dados do IEP, do plano 504 ou da avaliação", standard: "usando só ferramentas aprovadas e o mínimo de informação" },
    { id: "O6", condition: "Para a sua equipa", action: "escrever cinco regras da equipa para o uso da IA na educação especial", standard: "com um exemplo para cada uma, partilhadas com professores, auxiliares de educação e profissionais de serviços de apoio" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Limites e materiais acessíveis",
      lessons: [
        {
          objectives: ["O1"],
          title: "Onde a IA ajuda, e onde não ajuda",
          minutes: 6,
          goal: "Explicar em que é que a IA pode ajudar na educação especial e o que fica com a equipa do IEP.",
          text: [
            "A lei dos Estados Unidos chamada Individuals with Disabilities Education Act (IDEA) exige que as crianças com deficiência que cumprem os critérios recebam uma educação pública gratuita e adequada (FAPE). Na Parte B, que cobre as idades dos 3 aos 21 anos, os serviços são definidos num Programa de Educação Individualizado (IEP), feito por uma equipa que inclui os pais da criança e funcionários da escola. A Parte C cobre a intervenção precoce para bebés e crianças pequenas. Os planos da Secção 504 são um caminho diferente para alguns alunos com deficiência.",
            "Estas são decisões individuais, legais e de equipa, baseadas na avaliação e no conhecimento da criança. A IA não pode ir à reunião, não conhece a criança e pode produzir conteúdo genérico ou errado. Por isso, a IA não deve escrever os níveis atuais, as metas, os serviços, as adaptações nem a colocação do aluno, e o que a IA produz nunca deve ser usado para decidir se o aluno é elegível.",
            "Onde a IA ajuda: adaptar materiais gerais da aula, criar exercícios em vários níveis, fazer apoios visuais, escrever rascunhos de explicações gerais dos processos para as famílias e organizar o seu próprio horário e modelos de documentos (sem dados de alunos)."
          ],
          words: [["IDEA", "a lei federal dos Estados Unidos que exige uma educação pública gratuita e adequada para as crianças com deficiência que cumprem os critérios."], ["FAPE", "educação pública gratuita e adequada (free appropriate public education): o que a lei IDEA garante aos alunos elegíveis."], ["IEP", "Programa de Educação Individualizado (Individualized Education Program): o plano escrito dos serviços de educação especial de um aluno, feito por uma equipa que inclui os pais."], ["Plano da Secção 504", "um plano que dá adaptações a um aluno com deficiência ao abrigo de outra lei federal."]],
          slides: [
            { title: "O que a lei IDEA exige", bullets: ["FAPE para as crianças com deficiência elegíveis", "Parte B: dos 3 aos 21 anos, através de um IEP", "O IEP é feito por uma equipa que inclui os pais"] },
            { title: "A IA NÃO", bullets: ["Escreve metas, serviços ou adaptações", "Decide a elegibilidade ou a colocação", "Substitui o conhecimento que a equipa tem da criança"] },
            { title: "A IA PODE ajudar a", bullets: ["Adaptar materiais gerais", "Fazer exercícios em vários níveis e apoios visuais", "Fazer explicações gerais para as famílias"] }
          ],
          sources: [{ name: "Departamento de Educação dos EUA: Relatório Anual ao Congresso sobre a IDEA (Parte B, dos 3 aos 21 anos)", url: "https://sites.ed.gov/idea/2021-individuals-with-disabilities-education-act-annual-report-to-congress/" }, { name: "NCLD: Individuals with Disabilities Education Act", url: "https://ncld.org/understand-the-issues/learn-the-law/individuals-with-disabilities-education-act" }],
          tryIt: "Faça duas colunas: \"A IA pode ajudar\" e \"Só a equipa\". Coloque pelo menos dez tarefas de educação especial da sua semana na coluna certa.",
          youCanNow: "traçar uma linha clara entre as tarefas em que a IA apoia e as decisões da equipa do IEP.",
          quickCheck: [
            { objective: "O1", q: "Quem faz o IEP de um aluno?", options: ["Uma ferramenta de IA aprovada pelo distrito", "Uma equipa que inclui os pais e funcionários da escola", "Só o diretor da escola", "Só o professor do ensino regular do aluno"], answer: 1, why: "O IEP é feito por uma equipa que inclui os pais." },
            { objective: "O1", q: "Um colega pede à IA que sugira as adaptações que um aluno deve receber. O que diria?", options: ["Boa ideia; use a lista dela", "Peça a uma segunda ferramenta de IA para verificar", "As decisões sobre adaptações são da equipa do IEP ou do plano 504, não da IA", "Use a lista da IA só para os alunos mais novos"], answer: 2, why: "As decisões do IEP e do plano 504 ficam com a equipa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Versões em linguagem simples e tarefas divididas em partes",
          minutes: 5,
          goal: "Usar a IA para fazer uma versão de um texto em linguagem simples e dividir uma tarefa em partes.",
          text: [
            "Muitos alunos ganham com um texto que mantém as ideias mas é mais fácil de ler: frases mais curtas, palavras comuns, termos importantes explicados, títulos e tópicos. Pedido: \"Reescreva este texto para um nível de leitura do 3.º ano, mais ou menos. Mantenha todos os dados importantes e estas palavras de vocabulário: [lista]. Use frases curtas e títulos. Acrescente uma caixa que explique cada palavra de vocabulário.\"",
            "Dividir em partes é partir uma tarefa com vários passos em pequenos passos numerados, com uma lista de verificação. Pedido: \"Divida esta tarefa em 5 a 8 passos numerados, uma ação por passo, com uma caixa para marcar em cada um e o tempo previsto.\"",
            "Compare cada versão com o original: quando simplifica, a IA às vezes tira ou muda dados. Mantenha as ideias do ano escolar; tornar a leitura mais fácil não deve baixar a meta de aprendizagem."
          ],
          steps: ["Cole o texto ou a tarefa gerais (sem informações de alunos).", "Peça a versão em linguagem simples, mantendo os dados importantes e o vocabulário.", "Peça as partes numeradas, com caixas para marcar e tempos.", "Compare com o original; corrija os dados que faltam ou foram mudados.", "Mantenha a mesma meta de aprendizagem."],
          words: [["Linguagem simples", "escrita clara, com frases curtas e palavras comuns."], ["Dividir em partes", "partir uma tarefa em passos pequenos e fáceis de fazer."]],
          slides: [
            { title: "Versão em linguagem simples", bullets: ["As mesmas ideias, leitura mais fácil", "Frases curtas, palavras comuns, títulos", "Mantenha o vocabulário importante, com definições"] },
            { title: "Divida a tarefa em partes", bullets: ["5-8 passos numerados", "Uma ação por passo", "Caixa para marcar e tempo para cada um"] },
            { title: "Compare com o original", bullets: ["Simplificar pode tirar dados", "A mesma meta de aprendizagem"] }
          ],
          tryIt: "Pegue num texto e numa tarefa gerais de uma próxima aula. Faça com a IA uma versão em linguagem simples e uma lista de verificação dividida em partes, depois compare cada uma com o original e corrija os erros.",
          youCanNow: "fazer versões corretas, em linguagem simples e divididas em partes, dos materiais da aula.",
          quickCheck: [
            { objective: "O2", q: "O que é linguagem simples?", options: ["Frases curtas e palavras comuns que mantêm as mesmas ideias", "Um texto mais curto com menos ideias", "Um texto sem pontuação", "Uma tradução para outra língua"], answer: 0, why: "A linguagem simples torna o texto mais fácil de ler sem mudar o conteúdo." },
            { objective: "O2", q: "A lista dividida em partes feita pela IA salta um passo da tarefa. O que faz?", options: ["Usa-a; os alunos vão descobrir", "Tira esse passo da tarefa", "Pede aos alunos para encontrarem o passo que falta", "Compara-a com a tarefa original e acrescenta o passo que falta"], answer: 3, why: "Comparar com o original apanha os passos e os dados que faltam." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Apoios visuais e exercícios em vários níveis",
          minutes: 5,
          goal: "Criar um horário visual e exercícios em dois níveis para uma aula.",
          text: [
            "Os horários e apoios visuais ajudam muitos alunos a saber o que vem a seguir e o que devem fazer. A IA pode escrever o rascunho do texto de um horário visual (\"1. Aquecimento, 5 minutos; 2. Pequena lição...\") e sugerir ícones simples; ferramentas como o Canva podem fazer o desenho. Nas imagens, verifique que são claras, respeitosas e correspondem às palavras.",
            "Os exercícios em vários níveis deixam todos os alunos trabalhar a mesma habilidade: peça à IA um conjunto com mais apoio (primeiro um exemplo resolvido, menos passos, um banco de palavras) e um conjunto ao nível do ano. Verifique todas as respostas.",
            "Lembre-se de que as adaptações escritas no IEP ou no plano 504 de um aluno têm de ser dadas tal como estão escritas; os seus materiais dão mais apoio a todos, mas não substituem as adaptações obrigatórias. Verifique também a acessibilidade: letras fáceis de ler, bom contraste, texto alternativo nas imagens e texto que funcione com a leitura em voz alta pelo computador."
          ],
          steps: ["Escreva com a IA o rascunho do texto do horário visual.", "Faça o desenho com ícones claros e respeitosos.", "Peça exercícios com mais apoio e ao nível do ano.", "Verifique todas as respostas.", "Verifique a acessibilidade: letra, contraste, texto alternativo, leitura em voz alta."],
          words: [["Horário visual", "uma lista com imagens e palavras do que vai acontecer, por ordem."], ["Texto alternativo", "uma curta descrição escrita de uma imagem para as pessoas que usam leitores de ecrã."], ["Leitura em voz alta pelo computador (text-to-speech)", "tecnologia que lê o texto em voz alta."]],
          slides: [
            { title: "Horários visuais", bullets: ["A IA escreve o rascunho dos passos e dos tempos", "Faça o desenho com ícones claros e respeitosos"] },
            { title: "Exercícios em dois níveis", bullets: ["Mais apoio: exemplo resolvido, banco de palavras", "Ao nível do ano: a mesma habilidade", "Verifique todas as respostas"] },
            { title: "Acessibilidade e adaptações", bullets: ["Letra fácil de ler, contraste, texto alternativo", "Funciona com a leitura em voz alta", "As adaptações obrigatórias continuam a valer"] }
          ],
          tryIt: "Faça um horário visual para uma aula e exercícios em dois níveis para a habilidade principal dessa aula. Acrescente texto alternativo a cada imagem e verifique todas as respostas.",
          youCanNow: "criar apoios visuais e exercícios por níveis que tornam as aulas mais acessíveis.",
          quickCheck: [
            { objective: "O3", q: "O que mostra um horário visual?", options: ["As notas dos alunos", "O calendário do professor", "O que vai acontecer, por ordem, com imagens e palavras", "A planta dos lugares na sala"], answer: 2, why: "Os horários visuais ajudam os alunos a saber o que vem a seguir." },
            { objective: "O3", q: "Os seus exercícios em dois níveis têm um banco de palavras, mas o IEP de um aluno exige tempo extra. O que vale?", options: ["Dar o tempo extra tal como está escrito no IEP", "O banco de palavras substitui o tempo extra", "Perguntar à IA qual o apoio melhor", "Dar tempo extra só nos testes"], answer: 0, why: "As adaptações obrigatórias do IEP têm de ser dadas tal como estão escritas, sejam quais forem os outros apoios que acrescente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Limites e materiais acessíveis",
        questions: [
          { objective: "O1", q: "Na Parte B da lei IDEA, os serviços de educação especial para alunos elegíveis dos 3 aos 21 anos estão definidos em:", options: ["Uma caderneta de notas", "Um resumo feito pela IA", "Um IEP feito por uma equipa que inclui os pais", "Um boletim informativo"], answer: 2, why: "O IEP é o plano escrito da equipa." },
          { objective: "O1", q: "Que tarefa a IA NÃO deve fazer?", options: ["Escrever as metas do IEP de um aluno", "Fazer uma versão em linguagem simples de um texto geral", "Escrever o rascunho de um horário visual", "Criar exercícios em dois níveis"], answer: 0, why: "O conteúdo do IEP é uma decisão da equipa." },
          { objective: "O2", q: "A IA simplificou um texto de ciências e mudou um dado. O que deve fazer?", options: ["Usá-lo na mesma", "Apagar o original", "Simplificá-lo ainda mais", "Comparar com o original e corrigir"], answer: 3, why: "Simplificar pode criar erros." },
          { objective: "O3", q: "O que é texto alternativo?", options: ["Um tipo de letra diferente", "Uma descrição escrita de uma imagem para leitores de ecrã", "Um teste alternativo", "Uma mensagem SMS"], answer: 1, why: "O texto alternativo torna as imagens acessíveis." },
          { objective: "O3", q: "Os seus materiais por níveis dão mais apoio. As adaptações obrigatórias do IEP continuam a valer?", options: ["Não, os materiais substituem-nas", "Só nos dias de teste", "Só se os pais pedirem", "Sim, têm de ser dadas tal como estão escritas"], answer: 3, why: "As adaptações obrigatórias não são substituídas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Famílias, privacidade e regras da equipa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Explicar os processos às famílias com palavras simples",
          minutes: 5,
          goal: "Escrever o rascunho de uma explicação simples, para as famílias, de um passo geral da educação especial.",
          text: [
            "Os documentos da educação especial estão cheios de termos que as famílias podem não conhecer: avaliação, elegibilidade, níveis atuais, ambiente menos restritivo, salvaguardas processuais. A IA é boa a escrever rascunhos de explicações gerais e simples destes termos e do que acontece em cada passo.",
            "Pedido: \"Explique a um pai ou mãe, em inglês simples, num nível de leitura do 6.º ano mais ou menos, o que acontece na reunião anual do IEP: quem participa, o que se discute, o que podem perguntar e como se preparar. Tom caloroso e respeitoso. Menos de 400 palavras.\" Depois compare com os procedimentos e os materiais oficiais do seu distrito, porque a IA pode descrever o processo de outro estado ou errar nos detalhes.",
            "Mantenha estas explicações gerais. Não use a IA para escrever nada sobre uma criança em particular. Ofereça traduções verificadas por falantes qualificados e lembre-se de que o aviso oficial de salvaguardas processuais do seu distrito é o documento legal; a sua explicação ajuda as famílias a entendê-lo, não o substitui."
          ],
          steps: ["Escolha um passo ou um termo geral sobre o qual as famílias perguntam.", "Peça uma explicação em linguagem simples, com o tom e o tamanho.", "Compare com os procedimentos e os materiais oficiais do distrito.", "Mantenha-a geral: nenhuma criança em particular.", "Ofereça traduções verificadas; indique o aviso oficial."],
          words: [["Salvaguardas processuais", "os direitos que os pais têm na educação especial, explicados num aviso oficial."], ["Ambiente menos restritivo", "a ideia da lei IDEA de que os alunos com deficiência aprendem com colegas sem deficiência tanto quanto for adequado."]],
          slides: [
            { title: "Termos difíceis que as famílias encontram", bullets: ["Avaliação, elegibilidade, níveis atuais", "Ambiente menos restritivo", "Salvaguardas processuais"] },
            { title: "Uma explicação geral", bullets: ["Linguagem simples, tom caloroso, curta", "Quem participa, o que acontece, como se preparar", "Compare com os procedimentos do distrito"] },
            { title: "Mantenha-a geral", bullets: ["Nada sobre uma criança em particular", "Traduções verificadas", "O aviso oficial continua a ser o documento legal"] }
          ],
          tryIt: "Escreva o rascunho de uma explicação de uma página, em linguagem simples, de um passo geral da educação especial para as famílias, compare-a com os materiais do seu distrito e peça a um colega para a ler e ver o tom.",
          youCanNow: "ajudar as famílias a entender os processos da educação especial com explicações claras e verificadas.",
          quickCheck: [
            { objective: "O4", q: "Sobre o que deve ser uma explicação para as famílias feita com a IA?", options: ["A avaliação de uma criança em particular", "Um passo geral, não uma criança em particular", "A opinião de um professor sobre uma família", "O orçamento do distrito"], answer: 1, why: "As explicações para as famílias ficam gerais para que nenhuma informação de alunos entre na IA." },
            { objective: "O4", q: "A explicação da IA sobre a reunião anual do IEP é diferente dos materiais do seu distrito. O que faria?", options: ["Partilhar a versão da IA porque é mais clara", "Partilhar as duas e deixar as famílias escolher", "Perguntar à IA qual está certa", "Corrigi-la para ficar de acordo com os procedimentos do distrito antes de a partilhar"], answer: 3, why: "A fonte são os procedimentos do distrito e os avisos oficiais, não a IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proteger as informações do IEP e do plano 504",
          minutes: 5,
          goal: "Aplicar as regras de privacidade às informações da educação especial e às ferramentas de IA.",
          text: [
            "Os IEP, os planos 504, as avaliações, as informações sobre deficiência e as notas ligadas a elas fazem parte do processo escolar do aluno, estão protegidos pela lei FERPA e estão entre as informações mais sensíveis que uma escola guarda. Dar a uma empresa de fora informações destes documentos que identificam a pessoa precisa, em geral, de consentimento, a não ser que se aplique uma exceção.",
            "Regras para os funcionários: nunca cole conteúdo do IEP ou do plano 504, resultados de avaliações, diagnósticos, planos de comportamento ou nomes em ferramentas de IA não aprovadas. Se o seu distrito aprovou uma ferramenta de IA para o trabalho de educação especial, use-a só como o acordo permite e, mesmo assim, use o mínimo de informação necessário.",
            "Tenha cuidado com os assistentes de IA que tomam notas e com as gravações em reuniões sobre alunos: as reuniões do IEP não devem ser gravadas nem transcritas por ferramentas não aprovadas. O seu diretor de educação especial e o responsável pela privacidade podem dizer-lhe o que o seu distrito e o seu estado permitem."
          ],
          steps: ["Trate as informações do IEP, do plano 504, da avaliação e da deficiência como muito sensíveis.", "Nunca as coloque em ferramentas de IA não aprovadas.", "Use as ferramentas aprovadas só como o acordo permite.", "Use o mínimo de informação necessário.", "Nenhuma gravação ou nota de IA não aprovada em reuniões sobre alunos."],
          words: [["Processo escolar (education record)", "um registo ligado diretamente a um aluno e guardado pela escola."], ["Informação sensível", "informação que pode causar um dano sério se for partilhada, como dados sobre deficiência ou saúde."]],
          slides: [
            { title: "Entre os registos mais sensíveis", bullets: ["IEP, planos 504, avaliações", "Diagnósticos, planos de comportamento", "Protegidos pela lei FERPA"] },
            { title: "Regras para os funcionários", bullets: ["Nunca em ferramentas de IA não aprovadas", "Ferramentas aprovadas só como o acordo permite", "O mínimo de informação necessário"] },
            { title: "Reuniões sobre alunos", bullets: ["Nenhuma gravação ou nota de IA não aprovada", "Pergunte ao seu diretor e ao responsável pela privacidade"] }
          ],
          sources: [{ name: "FERPA: Proteger a privacidade dos alunos", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Escreva três exemplos realistas de informações da educação especial que os funcionários podem ter vontade de colar na IA e, para cada um, uma forma segura de ter a mesma ajuda sem essas informações.",
          youCanNow: "proteger as informações do IEP, do plano 504 e da deficiência quando se usam ferramentas de IA.",
          quickCheck: [
            { objective: "O5", q: "Que lei protege os IEP e os registos de avaliação como processos escolares?", options: ["FERPA", "Só a COPPA", "Nenhuma lei", "A lei dos direitos de autor"], answer: 0, why: "Os IEP e as avaliações são processos escolares protegidos pela lei FERPA." },
            { objective: "O5", q: "Um professor quer que a IA reescreva um plano de comportamento para ficar mais claro. Qual é uma forma segura?", options: ["Colar o plano num chatbot gratuito", "Tirar o nome mas deixar o diagnóstico", "Pedir ajuda com um exemplo geral e inventado, ou usar uma ferramenta aprovada como o acordo permite", "Enviá-lo por email a um amigo que usa IA"], answer: 2, why: "Os planos de comportamento e os diagnósticos nunca entram em ferramentas não aprovadas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Regras da equipa para a IA na educação especial",
          minutes: 6,
          goal: "Escrever cinco regras claras da equipa e mostrá-las na prática aos colegas.",
          text: [
            "A sua equipa precisa de regras comuns, escritas. Cinco que cobrem a maioria das situações: 1) A IA nunca escreve nem decide o conteúdo do IEP ou do plano 504, a elegibilidade ou a colocação. 2) Nenhuma informação de alunos em ferramentas não aprovadas. 3) Todo o material feito com IA é verificado quanto à correção e à acessibilidade antes de os alunos o verem. 4) Os apoios da IA nunca substituem as adaptações obrigatórias. 5) As explicações para as famílias são gerais, comparadas com os materiais oficiais e traduzidas por falantes qualificados.",
            "Partilhe-as numa reunião da equipa, com exemplos do que é e do que não é permitido. Convide os auxiliares de educação e os profissionais de serviços de apoio a fazer perguntas, porque muitas vezes ficam de fora das orientações sobre IA.",
            "Junte os bons pedidos e materiais numa pasta partilhada para que o tempo poupado chegue a toda a equipa, e reveja as regras todos os anos com o seu diretor de educação especial."
          ],
          steps: ["Escreva as cinco regras com palavras simples.", "Acrescente um exemplo para cada uma.", "Partilhe-as numa reunião da equipa, incluindo os auxiliares de educação.", "Comece uma pasta partilhada de bons pedidos e materiais.", "Reveja-as todos os anos com o diretor de educação especial."],
          words: [["Auxiliar de educação", "um funcionário da escola que apoia alunos e professores, muitas vezes na educação especial."], ["Serviços de apoio (related services)", "apoios como terapia da fala, terapia ocupacional ou fisioterapia que ajudam o aluno a tirar proveito da educação especial."]],
          slides: [
            { title: "Cinco regras da equipa", bullets: ["1 Nada de IA nas decisões do IEP ou do plano 504", "2 Nenhuma informação de alunos em ferramentas não aprovadas", "3 Verificar a correção e a acessibilidade", "4 As adaptações continuam a valer; 5 Textos para as famílias verificados"] },
            { title: "Partilhe-as bem", bullets: ["Exemplos do que é e não é permitido", "Inclua os auxiliares de educação e os terapeutas"] },
            { title: "Partilhe os ganhos", bullets: ["Pasta partilhada de pedidos e materiais", "Reveja todos os anos"] }
          ],
          tryIt: "Tarefa final: faça o seu pacote de acessibilidade (texto em linguagem simples, lista de verificação dividida em partes, horário visual, exercícios em dois níveis), escreva a sua explicação de uma página para as famílias, verifique tudo e escreva as cinco regras de IA da sua equipa com um exemplo para cada uma.",
          youCanNow: "usar a IA para tornar os materiais da educação especial mais acessíveis, protegendo os alunos e deixando as decisões com a equipa.",
          quickCheck: [
            { objective: "O6", q: "Quem tem a palavra final sobre as regras de educação especial do seu distrito?", options: ["A empresa que vende a IA", "O diretor de educação especial e os advogados do distrito", "Cada professor", "A associação de pais"], answer: 1, why: "Os líderes do distrito e os advogados decidem como as regras se aplicam localmente." },
            { objective: "O6", q: "Escreveu cinco regras de IA. Como ajuda toda a equipa a usá-las?", options: ["Partilha-as com professores, auxiliares de educação e profissionais de serviços de apoio, com exemplos", "Envia-as por email só aos diretores", "Guarda-as nos seus próprios ficheiros", "Publica-as uma vez e nunca as revê"], answer: 0, why: "Todos os que trabalham com os alunos precisam das regras e dos exemplos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Famílias, privacidade e regras da equipa",
        questions: [
          { objective: "O4", q: "A IA escreveu o rascunho de uma explicação do processo do IEP para as famílias. Antes de a partilhar, deve:", options: ["Enviá-la como está", "Acrescentar o nome de um aluno", "Compará-la com os procedimentos e os materiais oficiais do seu distrito", "Tirar todos os títulos"], answer: 2, why: "A IA pode descrever o processo de outro estado ou errar nos detalhes." },
          { objective: "O4", q: "Que documento continua a ser a declaração legal dos direitos dos pais?", options: ["O aviso oficial de salvaguardas processuais do distrito", "A sua explicação feita com IA", "Um boletim informativo", "Uma mensagem SMS"], answer: 0, why: "A explicação ajuda as famílias a entender o aviso oficial." },
          { objective: "O5", q: "Um professor quer que a IA resuma o relatório de avaliação de um aluno numa ferramenta gratuita. Melhor resposta?", options: ["Pode avançar", "Não: os resultados de avaliações são processos escolares sensíveis; não use ferramentas não aprovadas", "Só a primeira página", "Só se parecer anónimo"], answer: 1, why: "As avaliações estão protegidas e são muito sensíveis." },
          { objective: "O5", q: "Um assistente de IA não aprovado que toma notas deve gravar uma reunião do IEP?", options: ["Não", "Sim, poupa tempo", "Só metade da reunião", "Só se a empresa concordar"], answer: 0, why: "As reuniões sobre alunos não devem ser gravadas por ferramentas não aprovadas." },
          { objective: "O6", q: "Quem deve ser incluído quando se partilham as regras de IA da equipa?", options: ["Só os professores", "Só as empresas", "Só o diretor da escola", "Professores, auxiliares de educação e profissionais de serviços de apoio"], answer: 3, why: "Todos os que apoiam os alunos precisam das regras." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Educação Especial",
    questions: [
      { objective: "O1", q: "A lei IDEA garante às crianças com deficiência elegíveis:", options: ["Um computador portátil gratuito", "Uma educação pública gratuita e adequada", "As propinas de uma escola privada", "Explicações com IA"], answer: 1, why: "A FAPE é a garantia central da lei IDEA." },
      { objective: "O1", q: "A Parte B da lei IDEA cobre as crianças elegíveis com idades:", options: ["Só dos 13 aos 18 anos", "Só do nascimento aos 2 anos", "Dos 3 aos 21 anos", "Só adultos"], answer: 2, why: "A Parte B serve as idades dos 3 aos 21 anos; a Parte C serve os bebés e as crianças pequenas." },
      { objective: "O1", q: "Quem faz o IEP?", options: ["Só o diretor da escola", "Uma ferramenta de IA", "Uma equipa que inclui os pais e funcionários da escola", "Uma empresa"], answer: 2, why: "O IEP é uma decisão da equipa." },
      { objective: "O1", q: "Um plano da Secção 504 dá:", options: ["Adaptações a um aluno com deficiência ao abrigo de outra lei federal", "Uma nota", "Uma visita de estudo", "Uma licença de uma ferramenta"], answer: 0, why: "O plano 504 é um caminho diferente da lei IDEA." },
      { objective: "O2", q: "Qual é uma boa tarefa para a IA?", options: ["Escolher a colocação", "Escrever as metas do IEP", "Decidir a elegibilidade", "Uma versão em linguagem simples de um texto geral"], answer: 3, why: "Adaptar materiais gerais é um uso seguro." },
      { objective: "O2", q: "Linguagem simples quer dizer:", options: ["Menos ideias", "Frases curtas e palavras comuns, as mesmas ideias", "Nenhum vocabulário", "Expectativas mais baixas"], answer: 1, why: "Leitura mais fácil, a mesma meta de aprendizagem." },
      { objective: "O2", q: "Dividir uma tarefa em partes quer dizer:", options: ["Dar-lhe uma nota", "Torná-la mais comprida", "Tirá-la", "Parti-la em pequenos passos numerados"], answer: 3, why: "Passos pequenos tornam as tarefas fáceis de fazer." },
      { objective: "O2", q: "Depois de a IA simplificar um texto, verifique que:", options: ["Tem mais imagens", "Está mais comprido", "Nenhum dado importante foi tirado ou mudado", "Soa formal"], answer: 2, why: "Simplificar pode criar erros." },
      { objective: "O3", q: "Um horário visual mostra:", options: ["O que vai acontecer, por ordem, com imagens e palavras", "As rotas dos autocarros", "As cadernetas de notas", "Os salários dos funcionários"], answer: 0, why: "Ajuda os alunos a saber o que vem a seguir." },
      { objective: "O3", q: "A leitura em voz alta pelo computador (text-to-speech):", options: ["Escreve redações", "Lê o texto em voz alta", "Dá notas aos trabalhos", "Traduz o que se diz"], answer: 1, why: "Apoia os alunos que ganham em ouvir o texto." },
      { objective: "O3", q: "Os exercícios com mais apoio podem incluir:", options: ["Um exemplo resolvido e um banco de palavras", "Menos ideias", "Um teste mais difícil", "Nenhuma instrução"], answer: 0, why: "Os apoios ajudam os alunos a chegar à mesma habilidade." },
      { objective: "O3", q: "As adaptações obrigatórias do IEP:", options: ["Só valem nos testes", "Podem ser substituídas por materiais feitos com IA", "São opcionais", "Têm de ser dadas tal como estão escritas"], answer: 3, why: "São exigidas por lei." },
      { objective: "O4", q: "As explicações para as famílias devem ser:", options: ["Sobre um aluno com nome", "Gerais, não sobre uma criança em particular", "Escritas só em inglês", "Enviadas sem verificar"], answer: 1, why: "Mantenha as informações dos alunos fora da IA." },
      { objective: "O4", q: "As traduções para as famílias devem ser:", options: ["Deixadas de lado", "Texto da IA sem verificar", "Verificadas por falantes qualificados", "Feitas pelos alunos"], answer: 2, why: "As famílias precisam de informações corretas." },
      { objective: "O5", q: "Os IEP e as avaliações estão protegidos por:", options: ["Nenhuma lei", "Só os direitos de autor", "A lei FERPA", "O código da estrada"], answer: 2, why: "São processos escolares." },
      { objective: "O5", q: "Colocar diagnósticos e planos de comportamento numa ferramenta de IA não aprovada é:", options: ["Nunca permitido", "Aceitável se forem curtos", "Aceitável ao fim de semana", "Obrigatório"], answer: 0, why: "São muito sensíveis." },
      { objective: "O5", q: "Com uma ferramenta de IA aprovada para a educação especial, os funcionários devem:", options: ["Não verificar", "Carregar tudo", "Partilhar os dados de acesso", "Usá-la só como o acordo permite, com o mínimo de informação"], answer: 3, why: "Os acordos e o uso mínimo de dados continuam a valer." },
      { objective: "O1", q: "Ambiente menos restritivo quer dizer que os alunos com deficiência aprendem:", options: ["Sempre sozinhos", "Com colegas sem deficiência tanto quanto for adequado", "Só pela internet", "Só em casa"], answer: 1, why: "É uma ideia central da lei IDEA." },
      { objective: "O6", q: "Quem tem a palavra final sobre as regras de educação especial do seu distrito?", options: ["Um aluno", "Um chatbot", "Uma empresa", "O diretor de educação especial e os advogados do distrito"], answer: 3, why: "Decidem as pessoas qualificadas." },
      { objective: "O6", q: "Uma pasta partilhada de bons pedidos e materiais ajuda:", options: ["A partilhar dados de alunos", "A esconder materiais", "O tempo poupado a chegar a toda a equipa", "A substituir a equipa do IEP"], answer: 2, why: "Partilhar multiplica o benefício." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      6,
      7,
      8,
      11,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Texto em linguagem simples e partes",
        objective: "O2",
        notYet: "Um dado foi tirado ou mudado, ou a tarefa não está dividida em partes.",
        meets: "Uma versão em linguagem simples e uma lista de verificação numerada e dividida em partes, comparadas com o original.",
        exceeds: "Anota os erros que a IA fez e como foram corrigidos."
      },
      {
        name: "Horário visual e exercícios",
        objective: "O3",
        notYet: "Falta o horário ou um nível de exercícios, ou as respostas não foram verificadas.",
        meets: "Um horário visual e exercícios em dois níveis, com todas as respostas verificadas.",
        exceeds: "Todas as imagens têm texto alternativo e há apoios como exemplos resolvidos ou bancos de palavras."
      },
      {
        name: "Explicação para as famílias",
        objective: "O4",
        notYet: "É sobre uma criança em particular, ou não foi comparada com os materiais do distrito.",
        meets: "Uma explicação de uma página, em linguagem simples, de um passo geral, verificada quanto à correção.",
        exceeds: "Um colega leu-a para ver o tom, e ela indica às famílias o aviso oficial de salvaguardas processuais."
      },
      {
        name: "Nenhuma informação de alunos",
        objective: "O5",
        notYet: "Aparece alguma informação de alunos no pacote ou nos pedidos.",
        meets: "Todo o pacote usa só material geral ou inventado.",
        exceeds: "Inclui formas seguras de ter ajuda da IA sem partilhar dados dos alunos."
      },
      {
        name: "Regras da equipa",
        objective: "O6",
        notYet: "Menos de cinco regras, ou regras que deixam a IA decidir o conteúdo do IEP ou do plano 504.",
        meets: "Cinco regras claras para o uso da IA na educação especial.",
        exceeds: "Cada regra tem um exemplo e deixa todas as decisões do IEP e do plano 504 com a equipa."
      }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Professores que dizem ter usado numa aula materiais acessíveis feitos com IA em 30 dias (inquérito de seguimento)",
      "Equipas de educação especial que adotam regras de IA escritas em 60 dias (inquérito de seguimento)",
      "Casos comunicados de informações de alunos colocadas em ferramentas não aprovadas (meta: nenhum)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e um assistente de IA aprovado pelo distrito",
      "Um texto e uma tarefa gerais de uma próxima aula (sem informações de alunos)",
      "Os materiais oficiais do seu distrito para as famílias e o aviso de salvaguardas processuais",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam juntos o teste inicial e depois separem em grupo as tarefas \"a IA pode ajudar\" e \"só a equipa\".",
      "Use só materiais inventados ou gerais; nunca cole IEP, planos 504, avaliações ou planos de comportamento em ferramentas não aprovadas.",
      "Lembre aos participantes que o curso não é aconselhamento jurídico; convide o diretor de educação especial a rever as regras da equipa.",
      "Peça aos colegas que leiam as explicações para as famílias uns dos outros, para ver o tom e a correção.",
      "Avalie a tarefa final com a grelha de avaliação e verifique que não aparece nenhuma informação de alunos em lado nenhum do pacote."
    ]
  }
};
