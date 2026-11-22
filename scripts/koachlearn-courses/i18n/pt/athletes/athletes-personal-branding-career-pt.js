"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-personal-branding-career.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-personal-branding-career-pt",
  lang: "pt",
  translationOf: "athletes-personal-branding-career",
  category: "Athletes",
  name: "Marca Pessoal e Desenvolvimento de Carreira para Atletas",
  skills: "Identificar as suas habilidades transferíveis, Escrever a sua história de atleta, Fazer um currículo com IA, Criar um perfil no LinkedIn, Criar uma rede de contactos e fazer entrevistas informativas",
  outcome: "transformar a sua experiência de atleta em ferramentas de carreira: uma lista de habilidades transferíveis com provas, uma história de 60 segundos, um currículo de uma página feito com IA, um perfil no LinkedIn e um pedido de entrevista informativa enviado a alguém de uma carreira que lhe interessa.",
  about: [
    "Este curso é para atletas do ensino secundário, da universidade e do início da vida profissional que pensam na vida durante e depois do desporto, e para os treinadores que os orientam. A maioria dos atletas vai ter uma carreira fora do jogo, e o desporto já lhe ensinou habilidades que os empregadores procuram.",
    "Você vai identificar essas habilidades, contar a sua história de uma forma que os empregadores entendem, fazer um currículo e um perfil no LinkedIn com a ajuda da IA e começar a criar uma rede de contactos.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Monte o seu kit inicial de carreira: uma lista de cinco habilidades transferíveis com um exemplo do desporto para cada uma, uma história de 60 segundos, um currículo de uma página feito com IA e verificado por você, um perfil no LinkedIn (se cumprir as regras de idade) ou uma página de portfólio de carreira, e um pedido educado de entrevista informativa enviado a uma pessoa real.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e do início da vida profissional que pensam na vida durante e depois do desporto, e os treinadores que os orientam.",
    startingPoint: "Têm anos de experiência no desporto, muitas vezes com papéis de liderança, e usam um smartphone todos os dias. Muitos não têm currículo, não sabem descrever as suas habilidades com palavras do mundo do trabalho, não exploraram carreiras além de jogar e nunca pediram conselhos a um profissional.",
    gap: "A maioria dos atletas vai ter uma carreira fora do jogo, e a mudança pode ser difícil se começarem tarde. Transformar a experiência no desporto em provas de habilidades, numa história clara, num currículo e numa rede de contactos dá-lhes confiança e opções agora e depois do desporto.",
    constraints: [
      "Linguagem simples, mais ou menos ao nível de leitura do 8.º ano",
      "Um telefone ou computador com um assistente de IA gratuito; LinkedIn só se o aluno cumprir as regras de idade atuais, caso contrário Google Sites",
      "Cerca de 60 minutos no total",
      "Nenhum número da Segurança Social (Social Security) nem outro número privado colado na IA",
      "Atletas com menos de 18 anos devem envolver um pai, mãe ou encarregado de educação antes de contactar adultos que não conhecem"
    ],
    prerequisites: "Nenhum"
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os seus papéis, rotinas e desafios no desporto", action: "fazer a lista de cinco habilidades transferíveis com um exemplo real do desporto para cada uma", standard: "com cada exemplo verdadeiro e concreto o suficiente para contar como prova" },
    { id: "O2", condition: "Usando a estrutura Passado, Presente e Futuro", action: "escrever e dizer uma história de 60 segundos sobre quem você é e para onde vai", standard: "com cerca de 150 palavras, na sua própria voz, e praticada em voz alta até soar natural" },
    { id: "O3", condition: "Com os seus interesses e um assistente de IA", action: "fazer a lista de três carreiras para explorar e uma forma de conhecer cada uma", standard: "com a formação e o salário verificados num site oficial de carreiras ou com um orientador de carreira" },
    { id: "O4", condition: "Usando as suas notas e um assistente de IA", action: "criar um currículo de uma página que descreve o desporto com palavras do mundo do trabalho", standard: "com tópicos que começam por verbos de ação, números quando forem verdadeiros, todos os dados verificados, nenhum número privado partilhado e a revisão de uma pessoa" },
    { id: "O5", condition: "Se cumprir as regras de idade do LinkedIn, ou usando o Google Sites se não cumprir", action: "criar um perfil profissional com foto, título, secção Sobre, experiência e habilidades", standard: "de acordo com o seu currículo e com cinco contactos feitos com uma nota pessoal curta" },
    { id: "O6", condition: "Com uma pessoa de uma carreira que lhe interessa", action: "escrever e enviar um pedido educado de entrevista informativa", standard: "com quem você é, como a encontrou, porque a carreira dela lhe interessa, um pedido pequeno, três perguntas preparadas e um agradecimento depois" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A sua história e as suas habilidades",
      lessons: [
        {
          objectives: ["O1"],
          title: "As suas habilidades transferíveis",
          minutes: 5,
          goal: "Identificar cinco habilidades do desporto que servem no trabalho, cada uma com um exemplo real.",
          text: [
            "Habilidades transferíveis são habilidades que pode usar em muitos trabalhos. O desporto cria muitas delas: trabalho em equipa, liderança, gestão do tempo, saber lidar com a pressão, aceitar críticas, disciplina, comunicação e resiliência depois das derrotas.",
            "Os empregadores querem provas, não só palavras. \"Liderança\" é uma afirmação. \"Capitão de uma equipa de 20 jogadores; dirigia o aquecimento e resolvia conflitos\" é uma prova.",
            "Um assistente de IA pode ajudá-lo a encontrar habilidades que não tinha notado: \"Joguei quatro anos de futebol na equipa principal da escola, fui capitão no último ano, conciliei os treinos com um trabalho a tempo parcial e recuperei de uma lesão no joelho (ligamento cruzado). Que habilidades transferíveis isto mostra, com um exemplo de cada?\" Guarde só o que é verdade."
          ],
          steps: ["Faça a lista do que fez no desporto: papéis, rotinas, desafios.", "Pergunte à IA que habilidades isso mostra.", "Escolha cinco habilidades.", "Escreva um exemplo real para cada uma.", "Tire tudo o que não é verdade."],
          words: [["Habilidade transferível", "uma habilidade que pode usar em muitos trabalhos diferentes."], ["Resiliência", "recuperar e seguir em frente depois de um contratempo."]],
          slides: [
            { title: "O desporto cria habilidades para o trabalho", bullets: ["Trabalho em equipa, liderança", "Gestão do tempo, pressão", "Aceitar críticas, disciplina, resiliência"] },
            { title: "Afirmação e prova", bullets: ["Afirmação: \"liderança\"", "Prova: \"Capitão de 20 jogadores; dirigia o aquecimento\""] },
            { title: "A IA ajuda a encontrá-las", bullets: ["Descreva o que fez", "Guarde só o que é verdade"] }
          ],
          tryIt: "Use um assistente de IA para encontrar habilidades na sua experiência no desporto. Escreva as suas cinco principais, cada uma com um exemplo verdadeiro.",
          youCanNow: "identificar as suas habilidades transferíveis e provar cada uma com um exemplo.",
          quickCheck: [
            { objective: "O1", q: "Qual destas é uma habilidade transferível?", options: ["O número da sua camisola", "Os resultados da sua equipa", "Aceitar críticas", "O seu exercício de treino preferido"], answer: 2, why: "As habilidades transferíveis, como aceitar críticas, podem ser usadas em muitos trabalhos." },
            { objective: "O1", q: "Escreveu \"trabalho em equipa\" na sua lista. Como o transforma numa prova?", options: ["Acrescenta um exemplo real, como organizar sessões de estudo da equipa antes dos jogos fora de casa", "Escreve-o em letras maiúsculas", "Acrescenta mais habilidades", "Pede à IA para o fazer parecer maior"], answer: 0, why: "Os empregadores querem provas, por isso acrescente um exemplo real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "A sua história de atleta em 60 segundos",
          minutes: 5,
          goal: "Escrever e praticar uma história de 60 segundos sobre quem você é e para onde vai.",
          text: [
            "As pessoas vão pedir \"Fale-me de si\" em entrevistas, em encontros de contactos e até no recrutamento desportivo. Tenha pronta uma resposta de 60 segundos.",
            "Use três partes: Passado (o desporto e o que ele lhe ensinou), Presente (o que faz agora: escola, trabalho, treino), Futuro (o caminho que lhe interessa). Exemplo: \"Jogo basquetebol há dez anos, e ser capitão ensinou-me a liderar um grupo sob pressão. Agora estudo gestão e trabalho a tempo parcial num ginásio. Interesso-me por marketing desportivo e quero aprender como as equipas criam comunidades de adeptos.\"",
            "Peça a um assistente de IA para a reduzir a cerca de 150 palavras e depois pratique-a em voz alta até soar natural, não decorada."
          ],
          steps: ["Escreva o seu Passado, Presente e Futuro em uma ou duas frases cada.", "Peça à IA para reduzir a cerca de 150 palavras.", "Mude-a para a sua própria voz.", "Pratique três vezes em voz alta.", "Cronometre-se: cerca de 60 segundos."],
          words: [["Apresentação rápida (elevator pitch)", "uma apresentação curta, falada, que podia fazer durante uma viagem de elevador."], ["Rede de contactos (networking)", "criar relações com pessoas que podem partilhar conselhos e oportunidades."]],
          slides: [
            { title: "\"Fale-me de si\"", bullets: ["Entrevistas, contactos, recrutamento", "Tenha 60 segundos prontos"] },
            { title: "Três partes", bullets: ["Passado: o desporto e o que lhe ensinou", "Presente: escola, trabalho, treino", "Futuro: o que lhe interessa"] },
            { title: "Melhore-a", bullets: ["A IA reduz a ~150 palavras", "Pratique em voz alta", "Natural, não decorada"] }
          ],
          tryIt: "Escreva a sua história Passado-Presente-Futuro, melhore-a com a IA e grave-se a dizê-la no telefone. Ouça uma vez e corrija uma coisa.",
          youCanNow: "contar a sua história de atleta de 60 segundos de forma clara e natural.",
          quickCheck: [
            { objective: "O2", q: "O que diz a parte \"Presente\" da sua história?", options: ["A sua infância", "O salário dos seus sonhos", "O seu melhor jogo", "O que faz agora: escola, trabalho, treino"], answer: 3, why: "O Passado é o desporto, o Presente é o que faz agora, o Futuro é o seu caminho." },
            { objective: "O2", q: "A sua história soa rígida e decorada. O que faz?", options: ["Lê-a no telefone", "Pratica-a em voz alta até soar natural", "Faz com que dure cinco minutos", "Deixa de a usar"], answer: 1, why: "Pratique em voz alta até soar natural, não decorada." }
          ]
        },
        {
          objectives: ["O3"],
          title: "A vida depois do desporto: explorar carreiras",
          minutes: 5,
          goal: "Fazer a lista de três carreiras para explorar e uma forma de conhecer cada uma.",
          text: [
            "Todos os atletas param de competir um dia, por escolha, lesão ou idade. Planear cedo torna essa mudança mais fácil e dá-lhe confiança agora.",
            "Explore carreiras ligadas aos seus interesses, não só ao desporto. Dentro do desporto: treinador, preparação física e fisioterapia desportiva, marketing desportivo, comunicação social, análise de dados, gestão de instalações. Fora do desporto: negócios, saúde, tecnologia, profissões técnicas, ensino, serviço público e muito mais.",
            "Use um assistente de IA para ter ideias e explicar carreiras, e depois verifique os dados reais, como a formação necessária e o salário, em sites oficiais de carreiras, como o Occupational Outlook Handbook do Bureau of Labor Statistics dos EUA (o serviço de estatísticas do trabalho), ou com um orientador de carreira da escola."
          ],
          steps: ["Faça a lista dos seus interesses além de ganhar.", "Peça à IA carreiras que combinem com eles.", "Escolha três para explorar.", "Verifique cada uma num site oficial de carreiras ou com um orientador de carreira.", "Escreva uma forma de saber mais sobre cada uma."],
          words: [["Orientador de carreira", "uma pessoa na escola ou na comunidade que o ajuda a explorar trabalhos."], ["Occupational Outlook Handbook", "um guia do governo dos EUA sobre trabalhos, a formação necessária e o salário."]],
          slides: [
            { title: "Todos os atletas mudam de vida", bullets: ["Por escolha, lesão ou idade", "Planeie cedo e sinta confiança agora"] },
            { title: "Explore muitas opções", bullets: ["No desporto: treino, preparação física, marketing, análise de dados", "Fora: negócios, saúde, tecnologia, profissões técnicas, ensino"] },
            { title: "Verifique os dados reais", bullets: ["A IA para ter ideias", "Sites oficiais de carreiras para formação e salário", "Fale com um orientador de carreira"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Peça a um assistente de IA dez carreiras que combinem com os seus interesses. Escolha três e procure a formação necessária para cada uma num site oficial de carreiras ou pergunte ao seu orientador de carreira.",
          youCanNow: "explorar carreiras além de jogar e verificar os dados em fontes oficiais.",
          quickCheck: [
            { objective: "O3", q: "Qual destas é uma carreira fora do desporto?", options: ["Treinador", "Preparação física", "Comentador desportivo", "Ensino"], answer: 3, why: "O ensino é fora do desporto; as outras são carreiras dentro do desporto." },
            { objective: "O3", q: "A IA diz-lhe o salário de uma carreira de que gosta. O que faz a seguir?", options: ["Verifica-o num site oficial de carreiras ou com um orientador de carreira", "Confia totalmente", "Publica-o na internet", "Escolhe logo essa carreira"], answer: 0, why: "Verifique os dados reais, como o salário e a formação, em fontes oficiais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A sua história e as suas habilidades",
        questions: [
          { objective: "O1", q: "Qual destas é uma prova de liderança?", options: ["\"Sou um líder\"", "\"Liderança!\"", "\"Capitão de uma equipa de 20 jogadores; dirigia o aquecimento e resolvia conflitos\"", "\"Toda a gente gosta de mim\""], answer: 2, why: "Um exemplo real prova a habilidade." },
          { objective: "O1", q: "A IA diz que tem um \"certificado em gestão de projetos\". Você não tem. Você:", options: ["Tira-o", "Deixa-o", "Acrescenta mais", "Põe-no a negrito"], answer: 0, why: "Guarde só o que é verdade." },
          { objective: "O2", q: "Quais são as três partes da sua história de 60 segundos?", options: ["Vitórias, derrotas, empates", "Nome, idade, morada", "Estatísticas, altura, peso", "Passado, Presente, Futuro"], answer: 3, why: "Mostra onde esteve, onde está e para onde vai." },
          { objective: "O3", q: "Porque planear cedo a vida depois do desporto?", options: ["Tem de desistir agora", "Todos os atletas param de competir um dia", "Os treinadores obrigam", "Não serve para nada"], answer: 1, why: "Planear cedo torna a mudança mais fácil." },
          { objective: "O3", q: "Onde deve verificar a formação e o salário de uma carreira?", options: ["Num comentário qualquer", "Num site oficial de carreiras ou com um orientador de carreira", "Só na IA", "Num jogo de vídeo"], answer: 1, why: "As fontes oficiais são de confiança." }
        ]
      }
    },
    {
      name: "Capítulo 2: Currículo, LinkedIn e rede de contactos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer um currículo com IA",
          minutes: 6,
          goal: "Fazer um currículo de uma página que transforma o desporto em palavras do mundo do trabalho.",
          text: [
            "Um currículo é um resumo de uma página da sua formação, experiência e habilidades. Os atletas devem incluir o desporto como experiência, escrito com palavras do mundo do trabalho.",
            "Secções: Contacto (nome, cidade, email profissional, telefone), Formação, Experiência (trabalhos, estágios, voluntariado e desporto), Habilidades e Prémios. Escreva tópicos que começam por verbos de ação e têm números: \"Conciliei 20 horas de treino por semana com uma média de 3,4 GPA\" (GPA é a média das notas nos EUA).",
            "Peça a um assistente de IA: \"Transforme estas notas num currículo de uma página para um estágio em marketing desportivo. Use verbos de ação e números.\" Não cole números privados como o seu número da Segurança Social. Verifique cada dado e peça a um professor, treinador ou orientador de carreira para o rever."
          ],
          steps: ["Junte a sua formação, trabalhos, voluntariado e papéis no desporto.", "Peça à IA um rascunho de currículo de uma página.", "Verifique cada dado e cada número.", "Use verbos de ação e números.", "Peça a um orientador, professor ou treinador para o rever."],
          words: [["Currículo", "um resumo de uma página da sua formação, experiência e habilidades."], ["Verbo de ação", "um verbo forte que começa um tópico, como liderei, organizei ou treinei."]],
          slides: [
            { title: "Secções do currículo", bullets: ["Contacto e Formação", "Experiência, incluindo o desporto", "Habilidades e Prémios"] },
            { title: "Tópicos fortes", bullets: ["Comece com um verbo de ação", "Acrescente um número", "\"Conciliei 20 h/semana de treino com uma média de 3,4 GPA\""] },
            { title: "Use a IA com segurança", bullets: ["Nenhum número de identificação privado", "Verifique cada dado", "Peça a revisão de uma pessoa"] }
          ],
          tryIt: "Use a IA para transformar as suas notas num currículo de uma página. Corrija os dados errados e peça a um adulto para o rever.",
          youCanNow: "fazer um currículo de uma página que mostra a sua experiência de atleta com palavras do mundo do trabalho.",
          quickCheck: [
            { objective: "O4", q: "Que secção do currículo tem o seu número de telefone e o email profissional?", options: ["Prémios", "Habilidades", "Contacto", "Formação"], answer: 2, why: "O Contacto tem o seu nome, cidade, email profissional e telefone." },
            { objective: "O4", q: "O rascunho do currículo feito pela IA está pronto. O que faz antes de o enviar?", options: ["Envia-o logo", "Acrescenta o seu número da Segurança Social", "Faz com que tenha três páginas", "Verifica cada dado e pede a um orientador, professor ou treinador para o rever"], answer: 3, why: "Verifique cada detalhe e peça a revisão de uma pessoa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "O seu perfil no LinkedIn",
          minutes: 5,
          goal: "Criar um perfil profissional no LinkedIn (ou uma página de portfólio de carreira se ainda não tiver idade).",
          text: [
            "O LinkedIn é uma rede social profissional onde empregadores, recrutadores e antigos alunos se ligam. Verifique as regras atuais de idade mínima do LinkedIn antes de se inscrever; se for novo demais, faça uma página de carreira simples no Google Sites.",
            "Um perfil forte tem: uma foto clara e profissional; um título que diz quem você é e para onde vai (\"Estudante-atleta | Estudante de gestão | Interessado em marketing desportivo\"); uma secção Sobre adaptada da sua história de 60 segundos; experiência, incluindo o desporto; e habilidades.",
            "Mantenha-o profissional e de acordo com o seu currículo. Ligue-se a treinadores, professores, colegas de equipa, antigos alunos da sua escola e pessoas de carreiras de que gosta, com uma nota pessoal curta."
          ],
          steps: ["Verifique as regras de idade atuais do LinkedIn.", "Acrescente uma foto profissional e um título.", "Adapte a sua história de 60 segundos para a secção Sobre.", "Acrescente experiência, incluindo o desporto.", "Ligue-se a cinco pessoas com uma nota curta."],
          words: [["LinkedIn", "uma rede social profissional para carreiras e empregos."], ["Título", "a linha curta por baixo do seu nome no LinkedIn."], ["Antigos alunos", "pessoas que terminaram os estudos na sua escola."]],
          slides: [
            { title: "LinkedIn", bullets: ["Rede social profissional", "Verifique as regras de idade atuais"] },
            { title: "Perfil forte", bullets: ["Foto profissional", "Título: quem você é e para onde vai", "Sobre: a sua história de 60 segundos"] },
            { title: "Ligue-se", bullets: ["Treinadores, professores, antigos alunos", "Pessoas de carreiras de que gosta", "Acrescente uma nota pessoal curta"] }
          ],
          tryIt: "Crie ou atualize o seu perfil no LinkedIn (ou uma página de carreira no Google Sites se for novo demais). Peça à IA três opções de título e escolha uma.",
          youCanNow: "criar um perfil profissional na internet que combina com o seu currículo.",
          quickCheck: [
            { objective: "O5", q: "O que deve dizer um título no LinkedIn?", options: ["Quem você é e para onde vai", "O seu número de telefone", "O resultado do seu último jogo", "Uma piada"], answer: 0, why: "Um título forte diz quem você é e para onde vai." },
            { objective: "O5", q: "Quer ligar-se a um antigo aluno que trabalha em marketing desportivo. O que faz?", options: ["Envia um pedido sem mensagem", "Envia uma nota pessoal curta com o pedido", "Pede-lhe logo um emprego", "Envia-lhe mensagens todos os dias"], answer: 1, why: "Ligue-se com uma nota pessoal curta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rede de contactos e entrevistas informativas",
          minutes: 5,
          goal: "Escrever e enviar um pedido educado de entrevista informativa.",
          text: [
            "Uma entrevista informativa é uma conversa curta, muitas vezes de 15 a 20 minutos, em que pergunta a alguém sobre a carreira dele. Está a pedir conselhos, não um emprego.",
            "Os atletas têm uma ótima rede de contactos: antigos colegas de equipa, antigos alunos que foram atletas, contactos dos treinadores e donos de negócios locais que apoiam a sua equipa. Muitos gostam de ajudar estudantes-atletas.",
            "Escreva um pedido curto: quem você é, como encontrou a pessoa, porque a carreira dela lhe interessa e um pedido claro e pequeno (\"Posso fazer-lhe algumas perguntas durante 15 minutos nas próximas semanas?\"). Prepare três perguntas, chegue a horas e envie uma mensagem de agradecimento depois."
          ],
          steps: ["Escolha uma pessoa de uma carreira que lhe interessa.", "Use a IA para escrever um rascunho de pedido curto.", "Torne-o pessoal e educado.", "Prepare três perguntas.", "Envie um agradecimento depois da conversa."],
          words: [["Entrevista informativa", "uma conversa curta para conhecer a carreira de alguém, não para pedir emprego."], ["Rede de contactos", "as pessoas que conhece e que podem partilhar conselhos e oportunidades."]],
          slides: [
            { title: "Entrevista informativa", bullets: ["15-20 minutos", "Peça conselhos, não um emprego"] },
            { title: "A sua rede de atleta", bullets: ["Antigos colegas de equipa e antigos alunos atletas", "Contactos dos treinadores", "Apoiantes locais"] },
            { title: "O pedido", bullets: ["Quem você é, como encontrou a pessoa", "Porque a carreira dela lhe interessa", "Um pedido pequeno e claro"] }
          ],
          tryIt: "Tarefa final: termine a sua lista de habilidades, a história de 60 segundos, o currículo e o perfil na internet, e depois envie um pedido de entrevista informativa a uma pessoa real e prepare três perguntas.",
          youCanNow: "pedir e preparar uma entrevista informativa para aumentar a sua rede de contactos.",
          quickCheck: [
            { objective: "O6", q: "O que pede numa entrevista informativa?", options: ["Uma oferta de emprego", "Dinheiro", "Conselhos sobre a carreira da pessoa", "Uma carta de recomendação"], answer: 2, why: "Pede conselhos, não um emprego." },
            { objective: "O6", q: "Um antigo aluno aceitou conversar durante 15 minutos na próxima semana. Como se prepara?", options: ["Prepara três perguntas e chega a horas", "Planeia falar de si o tempo todo", "Pede uma hora em vez disso", "Leva o currículo e pede um emprego"], answer: 0, why: "Prepare três perguntas, chegue a horas e envie um agradecimento depois." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Currículo, LinkedIn e rede de contactos",
        questions: [
          { objective: "O4", q: "Qual é o tópico de currículo mais forte?", options: ["\"Pratiquei desporto\"", "\"Estive numa equipa\"", "\"Trabalhador\"", "\"Conciliei 20 horas de treino por semana com uma média de 3,4 GPA\""], answer: 3, why: "Usa uma ação e um número." },
          { objective: "O4", q: "O que NÃO deve colar na IA quando faz um currículo?", options: ["O seu número da Segurança Social", "Os seus papéis no desporto", "O nome da sua escola", "As suas tarefas no trabalho"], answer: 0, why: "Os números de identificação privados ficam privados." },
          { objective: "O5", q: "É novo demais para o LinkedIn. O que pode fazer?", options: ["Mentir sobre a idade", "Usar a conta de um dos pais", "Fazer uma página de carreira no Google Sites", "Desistir"], answer: 2, why: "Uma página de carreira simples serve até ter idade suficiente." },
          { objective: "O6", q: "Numa entrevista informativa, você pede:", options: ["Um emprego logo", "Dinheiro", "A palavra-passe da pessoa", "Conselhos sobre a carreira da pessoa"], answer: 3, why: "Serve para aprender, não para procurar emprego." },
          { objective: "O6", q: "Depois de uma entrevista informativa, deve:", options: ["Pedir logo um emprego", "Enviar uma mensagem de agradecimento", "Nunca mais contactar a pessoa", "Publicar sobre a pessoa"], answer: 1, why: "Os agradecimentos criam relações duradouras." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Marca Pessoal e Desenvolvimento de Carreira para Atletas",
    questions: [
      { objective: "O1", q: "Uma habilidade transferível é:", options: ["Uma troca entre equipas", "Uma regra de transferência de jogadores", "Uma habilidade que pode usar em muitos trabalhos", "Uma bebida desportiva"], answer: 2, why: "Vai consigo de um trabalho para outro." },
      { objective: "O1", q: "Qual destas é uma habilidade transferível do desporto?", options: ["Saber lidar com a pressão", "O número da sua camisola", "A marca dos seus ténis", "A mascote da equipa"], answer: 0, why: "Os empregadores dão valor a saber lidar com a pressão." },
      { objective: "O1", q: "Resiliência quer dizer:", options: ["Recuperar e seguir em frente depois de um contratempo", "Nunca perder", "Ser o mais alto", "Correr depressa"], answer: 0, why: "É recuperar dos contratempos." },
      { objective: "O1", q: "Os empregadores querem:", options: ["Só afirmações", "Só as suas estatísticas", "Provas, não só palavras", "Os seus seguidores"], answer: 2, why: "Os exemplos provam as habilidades." },
      { objective: "O2", q: "A sua história de 60 segundos deve soar:", options: ["Como um robô", "Natural, não decorada", "Muito longa", "Como outra pessoa"], answer: 1, why: "Natural soa confiante e verdadeira." },
      { objective: "O2", q: "A parte \"Futuro\" da sua história diz:", options: ["Os seus resultados antigos", "A sua palavra-passe", "Os planos do seu rival", "O caminho que lhe interessa"], answer: 3, why: "Mostra para onde vai." },
      { objective: "O2", q: "Quanto tempo deve durar a sua história falada?", options: ["Dez minutos", "Cinco segundos", "Cerca de 60 segundos", "Uma hora"], answer: 2, why: "É curta o suficiente para manter a atenção." },
      { objective: "O3", q: "Uma carreira dentro do desporto é:", options: ["Canalização", "Enfermagem", "Ensino de matemática", "Preparação física"], answer: 3, why: "A preparação física é uma carreira do desporto." },
      { objective: "O3", q: "O Occupational Outlook Handbook é:", options: ["Um guia do governo dos EUA sobre trabalhos, formação e salário", "Um livro de jogadas", "Uma aplicação social", "Uma revista de desporto"], answer: 0, why: "É uma fonte oficial sobre carreiras." },
      { objective: "O4", q: "Um currículo deve normalmente ter:", options: ["Dez páginas", "Uma página", "Um vídeo", "Uma publicação curta numa rede social"], answer: 1, why: "Curto e fácil de ler rapidamente." },
      { objective: "O4", q: "Que secção mostra o desporto num currículo?", options: ["Contacto", "Só passatempos", "Experiência", "Nenhuma"], answer: 2, why: "O desporto é experiência real." },
      { objective: "O4", q: "Um tópico do currículo deve começar com:", options: ["Um verbo de ação", "\"Hum\"", "A sua palavra-passe", "Um emoji"], answer: 0, why: "Os verbos de ação mostram o que fez." },
      { objective: "O4", q: "Depois de a IA escrever o rascunho do seu currículo, deve:", options: ["Enviá-lo sem ler", "Acrescentar trabalhos falsos", "Fazer com que tenha três páginas", "Verificar cada dado e pedir a revisão de uma pessoa"], answer: 3, why: "A exatidão e um segundo olhar são importantes." },
      { objective: "O5", q: "O LinkedIn é:", options: ["Um jogo de vídeo", "Uma rede social profissional", "Uma liga desportiva", "Uma loja"], answer: 1, why: "É para carreiras e empregos." },
      { objective: "O5", q: "Um título forte no LinkedIn é:", options: ["\"olá\"", "\"Estudante-atleta | Estudante de gestão | Interessado em marketing desportivo\"", "\"aborrecido\"", "Em branco"], answer: 1, why: "Diz quem você é e para onde vai." },
      { objective: "O5", q: "Quando se liga a alguém no LinkedIn, acrescente:", options: ["Nunca nada", "Uma exigência de emprego", "A sua morada", "Uma nota pessoal curta"], answer: 3, why: "As notas pessoais fazem com que mais pedidos sejam aceites." },
      { objective: "O5", q: "Os antigos alunos são:", options: ["Pessoas que terminaram os estudos na sua escola", "Adversários", "Árbitros", "Só adeptos"], answer: 0, why: "Muitas vezes gostam de ajudar estudantes da sua escola." },
      { objective: "O6", q: "Uma entrevista informativa costuma durar:", options: ["5 horas", "1 minuto", "15-20 minutos", "O dia todo"], answer: 2, why: "Pedidos curtos recebem mais respostas sim." },
      { objective: "O6", q: "Antes da entrevista, prepare:", options: ["Um contrato", "Uma prenda", "Nada", "Três perguntas"], answer: 3, why: "Perguntas preparadas respeitam o tempo da pessoa." },
      { objective: "O6", q: "Quem faz parte da rede de contactos de um atleta?", options: ["Só celebridades", "Antigos colegas de equipa, antigos alunos atletas e contactos dos treinadores", "Ninguém", "Só rivais"], answer: 1, why: "A sua comunidade desportiva é uma rede de contactos forte." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 8, 11, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Habilidades transferíveis", objective: "O1", notYet: "Menos de cinco habilidades, ou habilidades sem um exemplo real.", meets: "Cinco habilidades, cada uma com um exemplo do desporto verdadeiro e concreto.", exceeds: "Cada exemplo tem um número ou um resultado, como o tamanho da equipa ou as horas conciliadas." },
      { name: "História de 60 segundos", objective: "O2", notYet: "Falta o Passado, o Presente ou o Futuro, ou dura muito mais de um minuto.", meets: "Cerca de 60 segundos com Passado, Presente e Futuro, na voz do próprio atleta.", exceeds: "Dita em voz alta de forma natural e adaptada para a secção Sobre do LinkedIn." },
      { name: "Currículo", objective: "O4", notYet: "Mais de uma página, dados que não são verdade, ou o desporto ficou de fora.", meets: "Uma página, com o desporto em palavras do mundo do trabalho, tópicos com verbos de ação, dados verificados e a revisão de uma pessoa.", exceeds: "Adaptado a uma carreira ou estágio da lista que o atleta explorou." },
      { name: "Perfil", objective: "O5", notYet: "Não há perfil, ou não combina com o currículo.", meets: "Um perfil no LinkedIn ou uma página de carreira com foto, título, Sobre, experiência e habilidades, de acordo com o currículo.", exceeds: "Cinco contactos feitos com notas pessoais, incluindo antigos alunos." },
      { name: "Pedido de entrevista informativa", objective: "O6", notYet: "Nenhum pedido enviado, ou o pedido pede um emprego.", meets: "Um pedido educado enviado a uma pessoa real com quem é, como a encontrou, porquê e um pedido pequeno, mais três perguntas prontas.", exceeds: "A conversa aconteceu e foi enviada uma mensagem de agradecimento." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o kit inicial de carreira e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que fazem pelo menos uma entrevista informativa em 30 dias (inquérito de seguimento)",
      "Alunos que se candidatam ou conseguem um estágio, um emprego ou um lugar de voluntariado usando o seu currículo",
      "Alunos que fazem outro curso, como Empreendedorismo com IA para Atletas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Uma conta no LinkedIn se cumprir as regras de idade, ou uma conta Google gratuita para o Google Sites",
      "Notas sobre a sua formação, trabalhos, voluntariado e papéis no desporto",
      "Cerca de 60 minutos"
    ],
    facilitatorNotes: [
      "Convide um orientador de carreira da escola ou antigos alunos atletas para rever currículos e praticar as histórias de 60 segundos.",
      "Lembre aos alunos que nunca devem colar números da Segurança Social nem outros números privados na IA.",
      "Verifique com o grupo as regras de idade atuais do LinkedIn e ofereça o Google Sites aos alunos mais novos.",
      "Para atletas com menos de 18 anos, envolva os pais ou encarregados de educação antes de contactarem adultos que não conhecem, e sugira encontros em lugares públicos ou por vídeo.",
      "Tenha sensibilidade com atletas que enfrentam uma lesão ou o fim da carreira de jogador, e encaminhe-os para apoio se precisarem."
    ]
  }
};
