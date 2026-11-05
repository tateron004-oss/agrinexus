"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-productivity-leadership.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "veterans-ai-productivity-leadership-pt",
  lang: "pt",
  translationOf: "veterans-ai-productivity-leadership",
  category: "Veterans (military)",
  name: "IA para a Produtividade e a Liderança",
  skills: "Planear a semana de uma equipa com IA, Escrever e-mails BLUF, Resumir reuniões em tarefas, Dar comentários claros, Delegar com uma lista de verificação, Usar a IA com responsabilidade com as informações da equipa",
  outcome: "usar um assistente de IA para planear a semana de uma equipa pequena, escrever um e-mail de atualização claro com o ponto principal no início e transformar notas de reunião em tarefas com responsável e data, sem colocar as informações privadas dos membros da equipa em ferramentas de IA públicas.",
  about: [
    "Este curso é para veteranos que lideraram na farda, como sargentos, suboficiais, oficiais ou chefes de equipa, e que agora lideram ou querem liderar em locais de trabalho civis. Os seus hábitos de liderança continuam a servir; as palavras e as ferramentas são um pouco diferentes.",
    "Você vai usar um assistente de IA gratuito para planear a semana de uma equipa, escrever atualizações curtas e claras, transformar notas de reunião confusas em tarefas, preparar comentários e delegar bem. Também vai aprender as regras para usar a IA com responsabilidade com as informações de outras pessoas.",
    "Cada lição dura cerca de cinco minutos: leia, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Para uma equipa real ou de prática, de três a seis pessoas: use um assistente de IA para fazer um plano de uma semana com prioridades e responsáveis, escrever ao seu chefe um e-mail de atualização com o ponto principal no início e transformar umas notas curtas de reunião numa tabela de tarefas com responsável e prazo, usando funções em vez de nomes e deixando de fora qualquer informação privada.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos que lideraram na farda como sargentos, suboficiais, oficiais ou chefes de equipa, e que agora lideram ou querem liderar equipas pequenas em locais de trabalho civis.",
    startingPoint: "Bons hábitos de planeamento, de briefing, de análise depois da ação e de cuidar das pessoas. À vontade com o e-mail e o computador. Usam pouco os assistentes de IA no trabalho de liderança, e a escrita militar pode soar seca a leitores civis.",
    gap: "As equipas civis esperam planos, e-mails e comentários em palavras civis, e muitos locais de trabalho já usam ferramentas de IA. Os alunos precisam de usar um assistente de IA para poupar tempo no planeamento, nas atualizações, nas notas de reunião, nos comentários e na delegação, sem colocar as informações privadas dos membros da equipa e continuando responsáveis pelo trabalho final.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um computador ou smartphone com internet e um assistente de IA gratuito",
      "Privacidade e regras: funções em vez de nomes, nada de salários, saúde ou dados de pessoal em ferramentas de IA públicas, e a política de IA do empregador vem primeiro",
      "Tempo: lições de cerca de 5 minutos, que cabem num dia de trabalho",
      "A prática usa uma equipa real ou de prática de três a seis pessoas"
    ],
    prerequisites: "Nenhum. Quem é novo nos assistentes de IA pode fazer primeiro o curso \"Introdução à IA e ao Futuro do Trabalho\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista das tarefas de uma equipa para a semana", action: "usar um assistente de IA para fazer um plano semanal por prioridades, com um responsável para cada tarefa", standard: "e corrigir o que ele errou usando o seu próprio juízo" },
    { id: "O2", condition: "Com uma nota confusa para um chefe", action: "escrever com a ajuda da IA um e-mail com o ponto principal no início (BLUF)", standard: "com o ponto principal na primeira frase e um tom simpático e profissional" },
    { id: "O3", condition: "Com umas notas curtas de reunião", action: "transformar as notas, com a IA, em decisões, tarefas e perguntas em aberto", standard: "com um responsável e um prazo em cada tarefa" },
    { id: "O4", condition: "Com algo que um colega de equipa fez", action: "preparar um comentário no formato situação-comportamento-impacto e reescrevê-lo com as suas palavras", standard: "descrevendo só comportamentos que você viu" },
    { id: "O5", condition: "Com uma tarefa que poderia passar a outra pessoa", action: "criar uma lista de verificação para delegar, com objetivo, padrão, prazo, recursos e pontos de controlo", standard: "com todas as partes necessárias" },
    { id: "O6", condition: "Sempre que usar a IA com informações da equipa ou da empresa", action: "seguir a política de IA do seu empregador, usar funções em vez de nomes e deixar de fora as informações privadas", standard: "sem dados privados em nenhum pedido e sendo você o responsável pelo trabalho final" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fazer o trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Do planeamento da missão ao plano semanal da equipa",
          minutes: 5,
          goal: "Usar a IA para transformar uma lista de tarefas num plano semanal por prioridades, com responsáveis.",
          text: [
            "Nas forças armadas, você planeava a partir da missão: o que tem de ser feito, até quando, com que pessoas e com que recursos. As equipas civis precisam da mesma coisa; muitas vezes chamam-lhe plano de trabalho ou plano de projeto.",
            "Dê a um assistente de IA a sua lista de tarefas, os prazos e as funções da equipa, e peça-lhe para as ordenar por prioridade e organizar a semana. Exemplo: \"Aqui estão 8 tarefas desta semana para a minha equipa de armazém de 5 pessoas, com os prazos. Ordene-as por urgência e importância e faça uma tabela de segunda a sexta-feira com uma função responsável para cada uma.\"",
            "Use funções, não nomes completos (\"Chefe de turno A\", \"Operador de empilhador 2\"). Depois use o seu juízo: a IA não sabe que uma pessoa está de férias ou que um cliente é o mais importante. Você ajusta e aprova o plano."
          ],
          steps: ["Escreva as tarefas e os prazos da semana.", "Escreva as funções da equipa, não os nomes.", "Peça à IA para ordenar por urgência e importância e fazer uma tabela semanal.", "Ajuste o que a IA não sabe: férias, competências, clientes importantes.", "Partilhe o plano final com a equipa."],
          words: [["Plano de trabalho", "uma lista de tarefas com responsáveis e datas; a versão civil de um plano de operações."], ["Urgente e importante", "urgente precisa de ação já; importante é o que mais conta para o objetivo. Nem sempre são o mesmo."]],
          slides: [
            { title: "A mesma competência, palavras novas", bullets: ["Planeamento da missão = plano de trabalho", "O quê, até quando, quem, com quê"] },
            { title: "Deixe a IA ordenar e organizar", bullets: ["Dê as tarefas, os prazos e as funções", "Peça a ordem de prioridade e uma tabela semanal"] },
            { title: "Você aprova o plano", bullets: ["Use funções, não nomes", "Ajuste para férias, competências, clientes importantes", "Partilhe o plano final"] }
          ],
          tryIt: "Escreva seis tarefas que a sua equipa (real ou de prática) tem de fazer esta semana. Peça a um assistente de IA para as ordenar por urgência e importância e fazer uma tabela de segunda a sexta-feira com uma função responsável para cada uma. Mude uma coisa que ele errou.",
          youCanNow: "transformar uma lista de tarefas num plano semanal da equipa por prioridades com a IA, e corrigi-lo com o seu juízo.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer ordenar as tarefas por urgência e importância?", options: ["Fazer primeiro as tarefas mais fáceis", "Decidir que tarefas têm de ser feitas em breve e quais contam mais", "Dar todas as tarefas a uma só pessoa", "Fazer as tarefas por ordem alfabética"], answer: 1, why: "Urgente e importante são coisas diferentes, por isso ordenar pelas duas mostra o que fazer primeiro." },
            { objective: "O1", q: "O plano semanal da IA dá as seis tarefas à mesma pessoa. O que faz?", options: ["Aceita, porque a IA decidiu", "Apaga o plano e faz tudo sozinho", "Pede à IA para acrescentar mais tarefas", "Usa o seu juízo para dividir o trabalho e corrigir o plano"], answer: 3, why: "A IA faz o rascunho do plano, mas você conhece a sua equipa e aprova a versão final." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever e-mails e atualizações BLUF",
          minutes: 5,
          goal: "Escrever com a ajuda da IA um e-mail curto com o ponto principal no início.",
          text: [
            "BLUF (em inglês, \"bottom line up front\": o ponto principal primeiro) também funciona nos escritórios civis, mesmo que as pessoas não usem essa palavra. Ponha o ponto principal ou a decisão de que precisa na primeira frase. Depois dê as razões em poucas palavras e os próximos passos.",
            "Peça à IA para reescrever um rascunho longo: \"Reescreva isto como um e-mail curto para o meu chefe. Ponha o ponto principal na primeira frase, depois três tópicos e depois o próximo passo. Tom simpático e profissional. Sem termos militares.\"",
            "Verifique o tom. A escrita militar pode soar seca a leitores civis. Um simples \"Obrigado\" ou \"Fico à disposição para conversar\" ajuda. Leia o e-mail uma vez como se fosse a pessoa que o recebe."
          ],
          steps: ["Escreva o que precisa de dizer, mesmo que fique confuso.", "Peça à IA para pôr o ponto principal primeiro, depois os tópicos e depois o próximo passo.", "Peça-lhe para tirar os termos militares e usar um tom simpático e profissional.", "Leia como quem recebe e corrija o que não estiver claro."],
          words: [["BLUF", "do inglês \"bottom line up front\": o ponto principal ou o pedido vem primeiro."], ["Tom", "a forma como a sua escrita soa para quem lê: simpática, seca, formal."]],
          slides: [
            { title: "O BLUF funciona em todo o lado", bullets: ["Primeiro o ponto principal ou o pedido", "Depois as razões, em poucas palavras", "No fim, o próximo passo"] },
            { title: "Peça à IA para reescrever", bullets: ["\"O ponto principal na primeira frase\"", "\"Três tópicos e depois o próximo passo\"", "\"Simpático, profissional, sem termos militares\""] },
            { title: "Verifique o tom", bullets: ["A escrita militar pode soar seca", "Acrescente \"Obrigado\" ou \"Fico à disposição para conversar\"", "Leia como quem recebe"] }
          ],
          tryIt: "Escreva uma nota confusa para um chefe sobre um atraso numa tarefa. Peça a um assistente de IA para a reescrever como um e-mail BLUF com três tópicos e um próximo passo, num tom simpático e profissional.",
          youCanNow: "escrever um e-mail curto e claro com o ponto principal no início, adequado a um local de trabalho civil.",
          quickCheck: [
            { objective: "O2", q: "Num e-mail BLUF, o que vem primeiro?", options: ["O ponto principal ou o pedido", "Uma longa história de contexto", "A sua assinatura", "Uma lista de todos os que ajudaram"], answer: 0, why: "Ponto principal primeiro quer dizer que quem lê vê logo o ponto ou o pedido mais importante." },
            { objective: "O2", q: "O e-mail que a IA escreveu soa curto e seco. O que faz antes de o enviar?", options: ["Envia-o como está", "Torna-o duas vezes mais longo", "Acrescenta uma frase simpática e lê-o como quem o recebe", "Tira o ponto principal"], answer: 2, why: "Uma frase simpática e uma leitura como quem recebe deixam o e-mail claro e profissional." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Transformar notas de reunião em tarefas",
          minutes: 5,
          goal: "Usar a IA para transformar notas de reunião numa tabela de tarefas com responsáveis e prazos.",
          text: [
            "As reuniões fazem perder tempo quando ninguém sai a saber quem faz o quê. Um hábito de análise depois da ação resolve isso: o que foi decidido, quem é responsável por cada ação e qual é o prazo.",
            "Cole as suas notas (com funções em vez de nomes e sem dados privados) e peça: \"Transforme estas notas em: 1) decisões tomadas, 2) uma tabela de tarefas com responsável e prazo, 3) perguntas em aberto.\" Se uma ação não tiver responsável ou data, a IA deve assinalá-lo.",
            "Muitas ferramentas de trabalho, como o Microsoft Teams com o Copilot ou o Google Meet com o Gemini, conseguem resumir reuniões se o seu empregador tiver ligado essa função. Siga as regras do seu empregador sobre gravação e IA, e avise as pessoas quando uma reunião está a ser gravada ou resumida."
          ],
          steps: ["Tome notas curtas durante a reunião.", "Troque os nomes por funções e tire os dados privados.", "Peça à IA as decisões, uma tabela de tarefas com responsável e prazo, e as perguntas em aberto.", "Preencha os responsáveis ou as datas que faltarem.", "Envie o resumo à equipa no mesmo dia."],
          words: [["Tarefa (ação)", "uma tarefa que sai de uma reunião, com um só responsável e um prazo."], ["Análise depois da ação", "um olhar curto para trás: o que aconteceu, o que funcionou, o que mudar."]],
          slides: [
            { title: "Cada reunião deve terminar com", bullets: ["As decisões tomadas", "As tarefas: responsável + prazo", "As perguntas em aberto"] },
            { title: "Peça à IA para organizar as notas", bullets: ["Cole as notas com funções, não nomes", "Peça decisões, tarefas, perguntas", "Peça-lhe para assinalar responsáveis ou datas em falta"] },
            { title: "Siga as regras do trabalho", bullets: ["Use ferramentas de IA de reuniões só se for permitido", "Avise as pessoas quando grava ou resume", "Envie o resumo no mesmo dia"] }
          ],
          tryIt: "Escreva cinco linhas de notas de uma reunião de prática. Peça a um assistente de IA para as transformar em decisões, uma tabela de tarefas com função responsável e prazo, e perguntas em aberto.",
          youCanNow: "transformar notas de reunião numa tabela de tarefas clara, com responsáveis e datas.",
          quickCheck: [
            { objective: "O3", q: "O que é uma pergunta em aberto num resumo de reunião?", options: ["Uma tarefa com responsável", "Uma decisão que a equipa tomou", "Uma pergunta que ninguém pode fazer", "Algo ainda por decidir que precisa de resposta mais tarde"], answer: 3, why: "As perguntas em aberto são assuntos que a reunião não resolveu, escritos para não ficarem esquecidos." },
            { objective: "O3", q: "A tabela de tarefas da IA tem \"Encomendar peças\" sem responsável. O que faz?", options: ["Deixa assim; alguém vai fazer", "Dá-lhe um responsável e um prazo", "Dá-a a todos", "Apaga-a"], answer: 1, why: "Uma tarefa só está completa com um responsável e um prazo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fazer o trabalho",
        questions: [
          { objective: "O1", q: "Que nome civil se usa muitas vezes para um plano de missão ou de operações?", options: ["Plano de trabalho ou plano de projeto", "Currículo", "Orçamento", "Tabela de equivalências"], answer: 0, why: "As equipas civis costumam chamar-lhe plano de trabalho ou plano de projeto." },
          { objective: "O6", q: "Porque usar funções como \"Chefe de turno A\" em vez de nomes num pedido à IA?", options: ["A IA não consegue ler nomes", "Para manter privadas as informações dos membros da equipa", "Os nomes deixam as respostas mais longas", "É mais rápido de escrever"], answer: 1, why: "As funções dão à IA o que ela precisa sem partilhar as informações das pessoas." },
          { objective: "O1", q: "O plano da IA põe uma tarefa grande num dia em que uma pessoa está de férias. Você:", options: ["Mantém o plano da IA", "Cancela a tarefa", "Ajusta o plano com o seu juízo", "Pede à pessoa para não tirar férias"], answer: 2, why: "Você sabe coisas que a IA não sabe; é você que aprova o plano final." },
          { objective: "O2", q: "O que vai na primeira frase de um e-mail BLUF?", options: ["Uma saudação longa", "A história do contexto", "Uma piada", "O ponto principal ou o pedido"], answer: 3, why: "Ponto principal primeiro: o mais importante vem no início." },
          { objective: "O3", q: "O que torna uma tarefa completa?", options: ["Um responsável e um prazo", "Uma descrição longa", "Todos são responsáveis", "Sem data, para ser flexível"], answer: 0, why: "Uma tarefa precisa de um responsável claro e de um prazo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Liderar pessoas com a IA como ajudante",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparar comentários claros e justos",
          minutes: 5,
          goal: "Usar a IA para preparar um comentário no formato situação-comportamento-impacto e depois torná-lo seu.",
          text: [
            "Um bom comentário é concreto e fala do comportamento, não da personalidade. Um modelo simples é situação, comportamento, impacto (SBI, do inglês): \"Na passagem de turno de terça-feira (situação), você explicou todas as encomendas em aberto (comportamento), e o turno seguinte começou sem atrasos (impacto).\" Funciona para elogiar e para corrigir.",
            "A IA pode ajudar a preparar: \"Ajude-me a escrever um comentário SBI para um membro da equipa que chegou atrasado à reunião da manhã três vezes este mês. Mantenha um tom respeitoso e termine com uma pergunta que o convide a dar a sua versão.\" Use uma função, não um nome.",
            "Dê o comentário você mesmo, pessoalmente ou por chamada, e ouça. A IA ajuda a preparar as palavras; a confiança entre você e a sua equipa vem de você."
          ],
          steps: ["Escolha uma situação concreta.", "Descreva o comportamento que viu, não o carácter da pessoa.", "Diga o impacto na equipa ou no trabalho.", "Peça à IA para ajudar a dizer isso com respeito, usando uma função e não um nome.", "Dê o comentário você mesmo e ouça."],
          words: [["SBI", "do inglês situation, behavior, impact (situação, comportamento, impacto): uma forma simples de dar comentários claros."], ["Comportamento", "o que alguém fez ou disse, que você pode ver ou ouvir."]],
          slides: [
            { title: "Comentário SBI", bullets: ["Situação: quando e onde", "Comportamento: o que a pessoa fez", "Impacto: o efeito na equipa ou no trabalho"] },
            { title: "Deixe a IA ajudar a preparar", bullets: ["Use uma função, não um nome", "Peça palavras respeitosas", "Termine com uma pergunta sobre a versão da pessoa"] },
            { title: "Quem dá o comentário é você", bullets: ["Pessoalmente ou por chamada", "Ouça", "A confiança vem de você, não da ferramenta"] }
          ],
          tryIt: "Pense numa coisa que um colega de equipa fez bem há pouco tempo. Peça a um assistente de IA para ajudar a escrever um elogio SBI sobre isso, usando uma função e não um nome. Depois reescreva-o com as suas palavras.",
          youCanNow: "preparar com a ajuda da IA comentários claros e justos no formato situação-comportamento-impacto, e dá-los você mesmo.",
          quickCheck: [
            { objective: "O4", q: "Num comentário SBI, o que é a parte do comportamento?", options: ["A sua opinião sobre a atitude da pessoa", "A data da reunião", "O que a pessoa fez e que você viu ou ouviu", "O impacto no seu humor"], answer: 2, why: "O comportamento é a ação concreta que você observou, não um julgamento sobre a pessoa." },
            { objective: "O4", q: "A IA escreveu um elogio para um colega que soa rígido. O que faz?", options: ["Reescreve-o com as suas palavras e dá-o você mesmo", "Envia por e-mail o texto da IA como está", "Deixa a IA enviá-lo", "Não faz o elogio"], answer: 0, why: "A IA pode ajudar a preparar, mas o comentário deve ter as suas palavras e vir de você." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Delegar com uma lista de verificação clara",
          minutes: 5,
          goal: "Usar a IA para fazer uma lista de verificação para delegar, que diga a tarefa, o padrão, o prazo e os pontos de controlo.",
          text: [
            "Você conhece a intenção do comandante: dizer às pessoas o objetivo e o estado final, não só os passos, para que se possam adaptar. Delegar no mundo civil funciona da mesma forma.",
            "Uma boa passagem de tarefa inclui: a tarefa, porque é importante (a intenção), como fica quando está pronta (o padrão), o prazo, os recursos e a autoridade que a pessoa tem, e quando você vai acompanhar. Peça à IA: \"Faça uma lista de verificação de uma página para passar o relatório semanal de inventário a um novo membro da equipa. Inclua objetivo, padrão, prazo, recursos e pontos de controlo.\"",
            "Depois passe a tarefa pessoalmente, peça à pessoa para a explicar de volta e dê-lhe espaço. Acompanhe nos pontos combinados em vez de estar sempre em cima."
          ],
          steps: ["Diga qual é a tarefa e porque é importante.", "Descreva como fica quando está pronta.", "Defina o prazo, os recursos e a autoridade.", "Peça à IA para transformar isto numa lista de verificação de uma página.", "Passe a tarefa, peça à pessoa para a explicar de volta e acompanhe como combinado."],
          words: [["Delegar", "dar a outra pessoa uma tarefa e a autoridade para a fazer."], ["Intenção", "o objetivo e o estado final de uma tarefa, para que as pessoas se possam adaptar quando as coisas mudam."]],
          slides: [
            { title: "Intenção do comandante, à maneira civil", bullets: ["Objetivo e estado final", "Não só os passos", "Para que as pessoas se possam adaptar"] },
            { title: "Uma boa passagem de tarefa inclui", bullets: ["A tarefa e porque é importante", "O padrão e o prazo", "Recursos, autoridade e pontos de controlo"] },
            { title: "Depois dê espaço", bullets: ["Peça à pessoa para explicar de volta", "Acompanhe nos pontos combinados", "Não esteja sempre em cima"] }
          ],
          tryIt: "Escolha uma tarefa que poderia passar a outra pessoa. Peça a um assistente de IA para fazer uma lista de verificação de uma página para delegar, com objetivo, padrão, prazo, recursos e pontos de controlo.",
          youCanNow: "delegar uma tarefa com uma lista de verificação clara que dá o objetivo, o padrão, o prazo e os pontos de controlo.",
          quickCheck: [
            { objective: "O5", q: "Porque incluir o objetivo quando delega uma tarefa?", options: ["Para que a pessoa não possa mudar nada", "Para que a pessoa se possa adaptar se as coisas mudarem", "Para nunca precisar de acompanhar", "Para que a tarefa demore mais"], answer: 1, why: "Conhecer o objetivo e o estado final deixa as pessoas fazer boas escolhas quando os planos mudam." },
            { objective: "O5", q: "Passou a outra pessoa um relatório para sexta-feira. O que faz a seguir?", options: ["Espera até sexta-feira e torce", "Tira-lhe logo a tarefa", "Refaz tudo você mesmo sem perguntar", "Acompanha nos pontos combinados"], answer: 3, why: "Os pontos de controlo combinados deixam apanhar os problemas cedo sem controlar cada passo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar a IA com responsabilidade como líder",
          minutes: 5,
          goal: "Usar três regras para usar a IA com responsabilidade com as informações da equipa e da empresa.",
          text: [
            "Como líder, você dá o exemplo. Regra 1: siga a política de IA do seu empregador. Muitas empresas dizem que ferramentas de IA estão aprovadas e que informações podem entrar nelas. Se não houver política, pergunte.",
            "Regra 2: deixe as informações privadas das pessoas fora das ferramentas de IA públicas: problemas de desempenho com nome, saúde, salário, moradas, ou qualquer coisa dita em confiança. Deixe de fora também os segredos dos clientes e da empresa. Use funções e descrições gerais.",
            "Regra 3: o resultado é responsabilidade sua. Verifique os factos, os números e o tom antes de qualquer coisa sair. Se a IA ajudou a escrever algo importante, leia cada palavra. Dizer à sua equipa como você usa a IA, e como ela a pode usar, cria confiança."
          ],
          steps: ["Encontre e leia a política de IA do seu empregador, ou pergunte ao seu chefe.", "Use só ferramentas aprovadas para informações de trabalho.", "Deixe as informações privadas e confidenciais fora da IA pública.", "Verifique tudo o que a IA escreve antes de sair.", "Diga à sua equipa como a IA pode ser usada."],
          words: [["Política de IA", "as regras de um empregador sobre que ferramentas de IA se podem usar e que informações podem entrar nelas."], ["Confidencial", "informação que deve ficar privada dentro de um grupo ou de uma empresa."]],
          slides: [
            { title: "Regra 1: Siga a política", bullets: ["Use ferramentas de IA aprovadas", "Não há política? Pergunte"] },
            { title: "Regra 2: Proteja as pessoas", bullets: ["Nada de nomes com desempenho, saúde ou salário", "Nada de segredos dos clientes ou da empresa", "Use funções e termos gerais"] },
            { title: "Regra 3: O resultado é seu", bullets: ["Verifique factos, números e tom", "Leia cada palavra de um trabalho importante", "Seja aberto com a sua equipa sobre a IA"] }
          ],
          tryIt: "Tarefa final: para uma equipa de três a seis pessoas, use um assistente de IA para fazer um plano de uma semana com responsáveis, escrever um e-mail de atualização BLUF e transformar umas notas curtas de reunião numa tabela de tarefas. Use funções em vez de nomes e verifique que não há informações privadas em nada disso.",
          youCanNow: "usar a IA como líder de uma forma que segue a política, protege a sua equipa e o mantém responsável.",
          quickCheck: [
            { objective: "O6", q: "Que regra vem primeiro quando usa a IA no trabalho?", options: ["Seguir a política de IA do seu empregador", "Usar qualquer ferramenta que quiser", "Colar tudo para a IA ter o contexto", "Deixar a IA tomar a decisão final"], answer: 0, why: "A política do seu empregador decide que ferramentas e que informações pode usar." },
            { objective: "O6", q: "Quer ajuda da IA com uma nota sobre um problema de salário de um membro da equipa. O que faz?", options: ["Cola o nome e os dados do salário", "Cola o processo completo da pessoa", "Deixa de fora os dados privados e descreve a situação com uma função", "Publica-o num chat público"], answer: 2, why: "Salários e dados pessoais nunca entram numa ferramenta de IA pública; uma função mantém a pessoa privada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Liderar pessoas com a IA como ajudante",
        questions: [
          { objective: "O4", q: "O que quer dizer SBI?", options: ["Situação, comportamento, impacto", "Pessoal, orçamento, inventário", "Velocidade, equilíbrio, intenção", "Segurança, briefing, inspeção"], answer: 0, why: "SBI é um modelo simples para dar comentários claros." },
          { objective: "O4", q: "Qual é um comentário baseado no comportamento?", options: ["\"Você é preguiçoso.\"", "\"Você chegou 15 minutos atrasado a três reuniões da manhã este mês.\"", "\"Você tem má atitude.\"", "\"Você é o pior.\""], answer: 1, why: "Descreve o que a pessoa fez, que se pode ver." },
          { objective: "O5", q: "Ao delegar, \"intenção\" quer dizer:", options: ["Só os passos exatos", "Só o prazo", "O objetivo e o estado final, para que as pessoas se possam adaptar", "O que você sente sobre a tarefa"], answer: 2, why: "A intenção deixa as pessoas adaptar-se quando as coisas mudam." },
          { objective: "O6", q: "A sua empresa não tem política de IA. O que faz?", options: ["Usa qualquer ferramenta com quaisquer dados", "Proíbe você mesmo a IA a todos", "Cola dados de clientes num chatbot público", "Pergunta ao seu chefe antes de usar a IA com informações de trabalho"], answer: 3, why: "Quando não há política, pergunte antes de pôr informações de trabalho na IA." },
          { objective: "O6", q: "O que pode pôr num pedido a uma IA pública?", options: ["\"Um membro da equipa chegou atrasado a três reuniões da manhã\"", "Um problema de saúde de um funcionário com nome", "Números de conta de clientes", "As moradas da sua equipa"], answer: 0, why: "Uma descrição geral, com uma função, mantém privadas as informações das pessoas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Produtividade e a Liderança",
    questions: [
      { objective: "O1", q: "Um plano de trabalho civil inclui:", options: ["Só quem manda", "O quê, até quando, quem e com quê", "Só o orçamento", "Só a hora da reunião"], answer: 1, why: "Como um plano de missão, inclui tarefas, datas, pessoas e recursos." },
      { objective: "O1", q: "Quando pede à IA para ordenar tarefas, ajuda pedir:", options: ["Uma ordem ao acaso", "A ordem alfabética", "A ordem por urgência e importância", "A tarefa mais longa primeiro"], answer: 2, why: "Urgência e importância dão uma ordem de prioridade útil." },
      { objective: "O1", q: "Urgente e importante são:", options: ["Sempre o mesmo", "Duas palavras para \"fácil\"", "Só termos militares", "Nem sempre a mesma coisa"], answer: 3, why: "Urgente quer dizer já; importante quer dizer que é o que mais conta para o objetivo." },
      { objective: "O1", q: "Quem aprova o plano final da equipa?", options: ["Você, o líder", "A IA", "O membro mais novo da equipa", "Ninguém"], answer: 0, why: "Você usa um juízo que a IA não tem." },
      { objective: "O2", q: "BLUF quer dizer:", options: ["Briefing, lição, atualização, seguimento", "O ponto principal primeiro (bottom line up front)", "Liderança básica sob fogo", "O melhor e último ficheiro da unidade"], answer: 1, why: "Ponha o ponto principal primeiro." },
      { objective: "O2", q: "A escrita militar pode soar seca aos civis. Uma boa solução é:", options: ["Torná-la mais longa", "Acrescentar mais siglas", "Acrescentar uma frase simpática como \"Fico à disposição para conversar\"", "Escrever tudo em maiúsculas"], answer: 2, why: "Um tom simpático e profissional ajuda os leitores civis." },
      { objective: "O2", q: "Antes de enviar um e-mail escrito com a IA, você deve:", options: ["Enviá-lo sem ler", "Acrescentar termos militares", "Torná-lo mais longo", "Lê-lo como quem recebe e corrigir o que não estiver claro"], answer: 3, why: "O que você envia é responsabilidade sua." },
      { objective: "O3", q: "Um resumo de reunião deve incluir:", options: ["Decisões, tarefas com responsável e data, e perguntas em aberto", "Só quem esteve presente", "Só piadas", "Só a hora de início"], answer: 0, why: "Isto diz a todos quem faz o quê e até quando." },
      { objective: "O6", q: "Antes de colar notas de reunião numa IA pública, você deve:", options: ["Acrescentar os números de telefone de todos", "Trocar os nomes por funções e tirar os dados privados", "Acrescentar os segredos da empresa", "Não fazer nada"], answer: 1, why: "Primeiro proteja as informações das pessoas." },
      { objective: "O6", q: "Usar no trabalho uma ferramenta de IA que resume reuniões está bem quando:", options: ["Ninguém sabe", "Usa uma conta pessoal com dados da empresa", "O seu empregador permite e as pessoas são avisadas", "Sempre, sejam quais forem as regras"], answer: 2, why: "Siga as regras do seu empregador e seja aberto sobre a gravação." },
      { objective: "O3", q: "Uma tarefa sem responsável deve ser:", options: ["Ignorada", "Dada a todos", "Apagada", "Atribuída a um responsável, com um prazo"], answer: 3, why: "Quando a tarefa é de todos, muitas vezes ninguém a faz." },
      { objective: "O4", q: "Um bom comentário fala de:", options: ["Comportamentos que você viu", "A personalidade da pessoa", "Boatos", "O seu humor"], answer: 0, why: "O comportamento é concreto e justo." },
      { objective: "O4", q: "Num comentário SBI, o \"impacto\" é:", options: ["A patente da pessoa", "O efeito na equipa ou no trabalho", "O castigo", "A data"], answer: 1, why: "O impacto explica porque o comportamento é importante." },
      { objective: "O4", q: "Quem deve dar um comentário que a IA ajudou a preparar?", options: ["A IA, por e-mail", "Um colega", "Você, pessoalmente ou por chamada", "Ninguém"], answer: 2, why: "A confiança vem de você, não da ferramenta." },
      { objective: "O5", q: "Ao delegar, depois de passar a tarefa, você deve:", options: ["Fazê-la você mesmo na mesma", "Estar em cima de cada passo", "Nunca mais verificar", "Acompanhar nos pontos combinados"], answer: 3, why: "Os pontos de controlo combinados equilibram a confiança e a responsabilidade." },
      { objective: "O5", q: "Uma boa passagem de tarefa ao delegar inclui:", options: ["Objetivo, padrão, prazo, recursos e pontos de controlo", "Só o prazo", "Só \"faça\"", "A sua palavra-passe"], answer: 0, why: "Essas partes deixam a pessoa ter sucesso." },
      { objective: "O5", q: "Pedir à pessoa para explicar a tarefa de volta ajuda você a:", options: ["Perder tempo", "Confirmar que ela percebeu", "Testar a memória dela por brincadeira", "Evitar dar a intenção"], answer: 1, why: "Apanha cedo os mal-entendidos." },
      { objective: "O6", q: "A regra 1 para usar a IA como líder é:", options: ["Usar qualquer ferramenta gratuita para tudo", "Nunca usar IA", "Seguir a política de IA do seu empregador", "Deixar a equipa decidir sozinha"], answer: 2, why: "A política diz que ferramentas e que informações são permitidas." },
      { objective: "O6", q: "O que nunca deve entrar numa ferramenta de IA pública?", options: ["\"Planeie a minha semana\"", "\"Reescreva este e-mail\"", "Uma lista de nomes de tarefas", "Os dados de salário e de saúde de um funcionário com nome"], answer: 3, why: "São informações privadas e confidenciais." },
      { objective: "O6", q: "Se a IA ajudou a escrever um relatório importante, quem é responsável por ele?", options: ["Você", "A empresa da IA", "Quem lê", "Ninguém"], answer: 0, why: "O resultado é seu, por isso verifique cada palavra." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      7,
      8,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano semanal",
        objective: "O1",
        notYet: "As tarefas não estão por ordem de prioridade, ou algumas não têm responsável.",
        meets: "Um plano de uma semana com prioridades e uma função responsável para cada tarefa.",
        exceeds: "O aluno mudou algo que a IA errou e sabe dizer porquê."
      },
      {
        name: "E-mail de atualização BLUF",
        objective: "O2",
        notYet: "O ponto principal está escondido, ou o tom é seco.",
        meets: "A primeira frase diz o ponto principal, com tópicos curtos e um próximo passo, num tom profissional.",
        exceeds: "O e-mail foi lido como quem o recebe e encurtado ao mínimo de palavras."
      },
      {
        name: "Tarefas",
        objective: "O3",
        notYet: "Algumas tarefas não têm responsável ou não têm prazo.",
        meets: "Decisões, tarefas com um responsável e um prazo cada uma, e perguntas em aberto.",
        exceeds: "Os prazos encaixam no plano semanal, e as perguntas em aberto têm uma pessoa para as responder."
      },
      {
        name: "Privacidade e política",
        objective: "O6",
        notYet: "Aparece um nome ou um dado privado num pedido ou no trabalho.",
        meets: "Funções em vez de nomes, e nenhuma informação privada em lado nenhum.",
        exceeds: "O aluno diz qual é a política de IA do empregador ou a pergunta que faria ao chefe sobre ela."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem usar no trabalho um plano semanal, e-mails BLUF ou tabelas de tarefas em 30 dias (inquérito de seguimento)",
      "Alunos que passam a ter ou mantêm um cargo civil de chefe de equipa, supervisor ou gestor em 6 meses",
      "Alunos que começam outro curso da Koach Learn para veteranos ou de liderança em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou smartphone com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini, ou a ferramenta que o seu empregador aprova",
      "Listas de tarefas e notas de reunião de prática que usam funções, não nomes",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Dê cenários de equipas de prática com funções como \"Chefe de turno A\", para que ninguém use os nomes ou os dados de colegas verdadeiros.",
      "Peça aos alunos para verificarem a política de IA do seu empregador antes de usarem a IA com informações de trabalho verdadeiras.",
      "Junte os alunos em pares para lerem os e-mails BLUF um do outro como quem os recebe e darem uma sugestão.",
      "Pratiquem os comentários SBI em voz alta, em pares, depois do rascunho da IA, para que os alunos os tornem seus.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
