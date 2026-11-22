"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-leadership-future-skills.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "underserved-leadership-future-skills-pt",
  lang: "pt",
  translationOf: "underserved-leadership-future-skills",
  category: "Undeserved Community",
  name: "Liderança, Confiança e Habilidades para o Futuro",
  skills: "Definir um objetivo claro, Resolver problemas passo a passo, Falar com confiança, Dar e pedir opinião, Liderar um pequeno projeto, Planear a sua próxima habilidade",
  outcome: "planear e liderar um pequeno projeto na comunidade: definir um objetivo claro, resolver problemas passo a passo, fazer uma fala de um minuto para conseguir ajudantes e usar um assistente de IA gratuito como parceiro de prática pelo caminho.",
  about: [
    "Não precisa de um cargo para ser líder. Se organiza a sua família, ajuda os vizinhos, dirige uma comissão da igreja ou ensina os novos colegas no seu turno, você já lidera.",
    "Este curso desenvolve as habilidades que dão confiança aos líderes: definir objetivos claros, resolver problemas passo a passo, falar em público, dar opinião, liderar um pequeno projeto e escolher a próxima habilidade a aprender. Um assistente de IA gratuito é o seu parceiro de prática: faz-lhe perguntas, ouve as suas falas de treino e dá-lhe a sua opinião.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Planeie um pequeno projeto na comunidade que possa mesmo fazer, como uma troca de livros, uma recolha de roupa ou uma limpeza do parque. Escreva um objetivo claro, faça a lista de dois problemas que podem aparecer e de como os resolveria, e escreva uma fala de um minuto a pedir a três pessoas que ajudem. Pratique a fala em voz alta com um assistente de IA, peça a opinião dele e melhore-a uma vez.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos de comunidades desfavorecidas que já lideram sem um cargo: pais e mães, voluntários da igreja e do bairro, chefes de turno e pessoas que querem começar um projeto na comunidade.",
    startingPoint: "Organizam a família, os amigos ou os colegas no dia a dia, mas talvez não se vejam como líderes. Muitos ficam nervosos ao falar diante de um grupo e nunca planearam um projeto com objetivos, tarefas e datas.",
    gap: "Os projetos na comunidade param sem um objetivo claro, sem um plano para os problemas e sem pessoas dispostas a ajudar. Os alunos precisam de hábitos simples de liderança e de confiança para falar, e um assistente de IA gratuito pode ser um parceiro de prática paciente.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca",
      "Custo: só ferramentas gratuitas e opções de aprendizagem gratuitas",
      "Privacidade: nenhum dado privado sobre pessoas ao descrever problemas a uma IA",
      "Os projetos têm de ser pequenos e possíveis com o tempo e a ajuda que os alunos têm"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um desejo para a sua comunidade ou uma habilidade que quer desenvolver", action: "escrever um objetivo claro com o quê, quanto e até quando, e escolher um primeiro passo", standard: "que possa mesmo fazer com o tempo e a ajuda que tem" },
    { id: "O2", condition: "Com um problema real em casa, no trabalho ou num grupo", action: "resolvê-lo em quatro passos: dar-lhe um nome, fazer a lista de opções, escolher uma e ver como correu", standard: "pesando um ponto bom e um risco para pelo menos três opções" },
    { id: "O3", condition: "Com um objetivo para o qual quer a ajuda de outras pessoas", action: "escrever e praticar uma fala de um minuto com um pedido de ação claro", standard: "praticada em voz alta e melhorada uma vez com a opinião da IA" },
    { id: "O4", condition: "Depois de trabalhar com um ajudante, um colega ou um familiar", action: "dar uma opinião gentil e útil e pedir também a opinião dos outros", standard: "com uma coisa que correu bem, uma coisa a tentar da próxima vez e um agradecimento" },
    { id: "O5", condition: "Com um pequeno projeto na comunidade", action: "dividi-lo em tarefas, com uma pessoa e uma data para cada uma, e preparar-se para dois problemas", standard: "com os ajudantes a escolherem as tarefas e um encontro de acompanhamento todas as semanas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Liderar-se a si mesmo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Definir um objetivo claro",
          minutes: 5,
          goal: "Transformar um desejo num objetivo claro, com o quê, quanto e até quando.",
          text: [
            "Os líderes começam com um objetivo claro. \"Ajudar as crianças do meu bairro a ler mais\" é um desejo. \"Fazer uma troca de livros gratuita no centro comunitário no primeiro sábado do próximo mês e dar 50 livros\" é um objetivo.",
            "Um objetivo claro diz o que vai fazer, quanto ou quantos, e até quando. Deve ser algo que possa mesmo fazer com o tempo e a ajuda que tem.",
            "Um assistente de IA pode ajudar a tornar um objetivo mais claro. Peça: \"Este é o meu desejo: ... Ajude-me a transformá-lo num objetivo claro com o quê, quanto e até quando. Faça-me perguntas primeiro.\""
          ],
          steps: ["Escreva um desejo para a sua família, o seu trabalho ou a sua comunidade.", "Acrescente o que vai fazer, quanto e até quando.", "Peça à IA que lhe faça perguntas e o ajude a torná-lo mais claro.", "Confirme que é algo que pode mesmo fazer."],
          words: [["Objetivo", "algo concreto que planeia fazer até um certo momento."], ["Prazo", "a data até à qual uma coisa tem de estar feita."]],
          slides: [
            { title: "Desejo e objetivo", bullets: ["Desejo: \"Ajudar as crianças a ler mais\"", "Objetivo: \"Troca de livros, primeiro sábado do próximo mês, 50 livros\""] },
            { title: "Um objetivo claro tem", bullets: ["O que vai fazer", "Quanto ou quantos", "Até quando"] },
            { title: "Use a IA para o tornar mais claro", bullets: ["\"Faça-me perguntas primeiro\"", "Confirme que o pode mesmo fazer"] }
          ],
          tryIt: "Escreva um desejo para a sua comunidade. Peça a um assistente de IA que lhe faça perguntas e o ajude a transformá-lo num objetivo claro com o quê, quanto e até quando.",
          youCanNow: "transformar um desejo num objetivo claro e possível.",
          quickCheck: [
            { objective: "O1", q: "O que transforma um desejo num objetivo claro?", options: ["Acrescentar o quê, quanto e até quando", "Torná-lo mais comprido", "Acrescentar mais nomes de pessoas", "Dizê-lo mais alto"], answer: 0, why: "Um objetivo claro diz o que vai fazer, quanto e até quando." },
            { objective: "O1", q: "O seu objetivo é dar 1,000 livros na próxima semana, sozinho. O que faz?", options: ["Mantém-no; os objetivos grandes são os melhores", "Torna-o algo que pode mesmo fazer com o seu tempo e a ajuda que tem", "Desiste da ideia", "Pede à IA que o faça por você"], answer: 1, why: "Um bom objetivo é algo que pode mesmo fazer com o tempo e a ajuda que tem." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Resolver problemas passo a passo",
          minutes: 5,
          goal: "Usar quatro passos simples para resolver um problema real.",
          text: [
            "Todos os planos encontram problemas. Os líderes mantêm a calma e resolvem-nos por passos: dar um nome ao problema, fazer a lista de algumas opções, escolher uma e depois ver como correu.",
            "A IA é um bom parceiro para pensar. Descreva o problema sem dados privados e peça: \"Dê-me três opções para resolver isto, com um ponto bom e um risco para cada uma.\" Por exemplo: \"Só duas pessoas se inscreveram para ajudar na nossa recolha de roupa.\"",
            "Quem escolhe é você. Você conhece as suas pessoas e a sua comunidade melhor do que qualquer IA. Depois de tentar uma opção, olhe para trás: funcionou? O que faria de outra maneira?"
          ],
          steps: ["Dê um nome ao problema numa frase.", "Peça à IA três opções, cada uma com um ponto bom e um risco.", "Escolha a opção que serve para as suas pessoas e a sua situação.", "Experimente-a e depois veja como correu."],
          words: [["Opção", "uma escolha possível."], ["Risco", "algo que pode correr mal."]],
          slides: [
            { title: "Quatro passos", bullets: ["1. Dar um nome ao problema", "2. Fazer a lista de opções", "3. Escolher uma", "4. Ver como correu"] },
            { title: "A IA como parceiro para pensar", bullets: ["\"Dê-me três opções\"", "\"Um ponto bom e um risco para cada uma\""] },
            { title: "Quem escolhe é você", bullets: ["Você conhece melhor as suas pessoas", "Olhe para trás: o que mudaria?"] }
          ],
          tryIt: "Escolha um problema real da sua casa, do seu trabalho ou do seu grupo. Peça a um assistente de IA três opções com um ponto bom e um risco para cada uma. Escolha uma e escreva porquê.",
          youCanNow: "resolver um problema em quatro passos com a IA como parceiro para pensar.",
          quickCheck: [
            { objective: "O2", q: "Qual é o último passo para resolver um problema passo a passo?", options: ["Dar um nome ao problema", "Fazer a lista de opções", "Ver como correu", "Pôr a culpa em alguém"], answer: 2, why: "Depois de tentar uma opção, olha para trás para ver se funcionou e o que mudar." },
            { objective: "O2", q: "Só duas pessoas se inscreveram para a sua recolha de roupa. O que pede à IA?", options: ["\"Resolva isto.\"", "\"Quem são os preguiçosos?\"", "\"Cancele a recolha.\"", "\"Dê-me três opções, cada uma com um ponto bom e um risco.\""], answer: 3, why: "Pedir opções com um ponto bom e um risco ajuda-o a escolher bem." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Falar com confiança",
          minutes: 5,
          goal: "Planear e praticar uma fala curta que pede às pessoas que ajam.",
          text: [
            "A confiança cresce com a prática. Uma fala curta é mais fácil quando tem uma forma simples: porque é importante, o que quer fazer e o que pede às pessoas que façam.",
            "Escreva uma fala de um minuto (cerca de 120 a 150 palavras). Depois pratique-a em voz alta. Pode escrevê-la num assistente de IA e perguntar: \"Isto está claro e simpático? Dê-me duas maneiras de o tornar mais forte. Mantenha-o abaixo de um minuto.\"",
            "Ficar nervoso é normal. Respire devagar, olhe para algumas caras simpáticas e fale um pouco mais devagar do que acha que precisa. Praticar diante de um espelho ou de um amigo também ajuda."
          ],
          steps: ["Escreva porque é importante, o que quer fazer e o que está a pedir.", "Mantenha a fala em cerca de um minuto.", "Peça a uma IA duas maneiras de a tornar mais forte.", "Pratique em voz alta três vezes, devagar."],
          words: [["Pedido de ação", "a parte de uma fala que diz às pessoas exatamente o que quer que elas façam."]],
          slides: [
            { title: "Uma forma simples para a fala", bullets: ["Porque é importante", "O que quer fazer", "O que pede às pessoas que façam"] },
            { title: "Pratique com a IA", bullets: ["Cerca de um minuto, 120-150 palavras", "\"Dê-me duas maneiras de a tornar mais forte\""] },
            { title: "Lidar com o nervosismo", bullets: ["Respire devagar", "Procure caras simpáticas", "Fale um pouco mais devagar"] }
          ],
          tryIt: "Escreva uma fala de um minuto sobre o objetivo da Lição 1. Peça a um assistente de IA duas maneiras de a tornar mais forte e depois pratique-a em voz alta três vezes.",
          youCanNow: "planear e praticar uma fala curta com um pedido de ação claro.",
          quickCheck: [
            { objective: "O3", q: "Qual é a forma simples de uma fala curta?", options: ["Porque é importante, o que quer fazer e o seu pedido", "Uma história comprida, uma piada e uma despedida", "Só factos e números", "A história da sua vida"], answer: 0, why: "Esta forma mantém a fala curta e diz às pessoas o que fazer." },
            { objective: "O3", q: "As suas mãos tremem antes da fala. O que ajuda?", options: ["Não fazer a fala", "Respirar devagar e falar um pouco mais devagar", "Falar o mais depressa possível", "Ler sem levantar os olhos"], answer: 1, why: "Respirar devagar e falar mais devagar ajudam a acalmar o nervosismo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Liderar-se a si mesmo",
        questions: [
          { objective: "O1", q: "Qual destes é um objetivo claro?", options: ["\"Ajudar mais as pessoas\"", "\"Ser um vizinho melhor\"", "\"Fazer uma troca de livros no primeiro sábado do próximo mês e dar 50 livros\"", "\"Fazer coisas boas\""], answer: 2, why: "Diz o quê, quantos e até quando." },
          { objective: "O1", q: "Que três partes tem um objetivo claro?", options: ["O quê, quanto e até quando", "Quem, porquê e onde", "Um título, um logótipo e um slogan", "Um orçamento, um banco e um empréstimo"], answer: 0, why: "Estas partes tornam um objetivo claro e fácil de verificar." },
          { objective: "O2", q: "Qual é o primeiro passo para resolver um problema?", options: ["Escolher uma opção qualquer", "Pôr a culpa em alguém", "Desistir", "Dar um nome ao problema numa frase"], answer: 3, why: "Não se resolve um problema a que ainda não se deu um nome." },
          { objective: "O2", q: "A IA sugere três opções. Quem escolhe?", options: ["A IA", "Você, porque conhece as suas pessoas e a sua comunidade", "Ninguém", "A primeira pessoa que responder"], answer: 1, why: "A IA é um parceiro para pensar; quem decide é você." },
          { objective: "O3", q: "O que é um pedido de ação?", options: ["Uma chamada telefónica", "Um número de emergência", "A parte de uma fala que diz às pessoas o que quer que elas façam", "Um toque de telefone"], answer: 2, why: "Transforma quem ouve em ajudantes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Liderar os outros e crescer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dar e pedir opinião",
          minutes: 5,
          goal: "Dar uma opinião gentil e útil e pedi-la também.",
          text: [
            "Dar opinião (em inglês, \"feedback\") é dar informação que ajuda alguém a fazer melhor. Os bons líderes dão a sua opinião com gentileza e pedem a dos outros muitas vezes.",
            "Uma maneira simples de dar opinião: diga uma coisa que correu bem, uma coisa a tentar da próxima vez e agradeça. Por exemplo: \"Montou as mesas depressa. Da próxima vez, vamos pôr a folha de presenças junto à porta. Obrigado por ter vindo cedo.\"",
            "Peça também a opinião dos outros: \"Qual é uma coisa que eu podia fazer melhor na nossa próxima reunião?\" Pode praticar com uma IA: descreva uma situação e peça-lhe que o ajude a escrever uma opinião gentil e clara."
          ],
          steps: ["Diga uma coisa que correu bem.", "Diga uma coisa a tentar da próxima vez.", "Agradeça à pessoa.", "Pergunte aos outros: \"Qual é uma coisa que eu podia fazer melhor?\""],
          words: [["Opinião (feedback)", "informação que ajuda alguém a ver o que correu bem e o que pode melhorar."]],
          slides: [
            { title: "A opinião ajuda as pessoas a crescer", bullets: ["Dê-a com gentileza", "Peça-a muitas vezes"] },
            { title: "Uma forma simples", bullets: ["Uma coisa que correu bem", "Uma coisa a tentar da próxima vez", "Obrigado"] },
            { title: "Peça-a", bullets: ["\"Qual é uma coisa que eu podia fazer melhor?\"", "Ouça sem discutir"] }
          ],
          tryIt: "Pense num ajudante, num colega ou num familiar. Peça a um assistente de IA que o ajude a escrever uma opinião gentil, com uma coisa que correu bem e uma coisa a tentar da próxima vez. Diga-a em voz alta.",
          youCanNow: "dar uma opinião gentil e útil e pedi-la também.",
          quickCheck: [
            { objective: "O4", q: "Qual é a última parte da forma de dar opinião deste curso?", options: ["Um aviso", "Uma lista de erros", "Um agradecimento", "Uma nota"], answer: 2, why: "Uma opinião gentil termina com um agradecimento à pessoa." },
            { objective: "O4", q: "Quer melhorar a forma como dirige reuniões. O que pergunta ao seu grupo?", options: ["\"Fui perfeito?\"", "Nada; os líderes não perguntam", "\"Quem se queixou?\"", "\"Qual é uma coisa que eu podia fazer melhor na nossa próxima reunião?\""], answer: 3, why: "Os bons líderes pedem opinião muitas vezes, com uma pergunta clara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Liderar um pequeno projeto",
          minutes: 5,
          goal: "Dividir um projeto em tarefas, dar a cada uma uma pessoa e uma data, e preparar-se para os problemas.",
          text: [
            "Um projeto é um objetivo com um início e um fim. Para liderar um, divida-o em pequenas tarefas, dê a cada tarefa uma pessoa e uma data, e acompanhe.",
            "Peça à IA: \"Vou organizar uma recolha de roupa na nossa igreja daqui a quatro semanas. Divida-a em tarefas com uma semana sugerida para cada uma. Faça a lista de dois problemas que podem aparecer e de como lidar com eles.\"",
            "Partilhe a lista de tarefas com os seus ajudantes. Deixe as pessoas escolherem as tarefas de que gostam. Acompanhe todas as semanas, agradeça muitas vezes e festeje quando terminarem."
          ],
          steps: ["Escreva o objetivo do seu projeto.", "Peça à IA que o divida em tarefas com datas e que faça a lista de problemas possíveis.", "Dê a cada tarefa uma pessoa; deixe as pessoas escolherem.", "Acompanhe todas as semanas e festeje no fim."],
          words: [["Projeto", "um trabalho com um objetivo, um início e um fim."], ["Tarefa", "um pequeno trabalho que faz parte de um projeto."]],
          slides: [
            { title: "Um projeto tem um início e um fim", bullets: ["Divida-o em tarefas", "Cada tarefa: uma pessoa e uma data"] },
            { title: "Peça ajuda à IA para planear", bullets: ["Tarefas com semanas sugeridas", "Dois problemas e como lidar com eles"] },
            { title: "Lidere a equipa", bullets: ["Deixe as pessoas escolherem as tarefas", "Acompanhe todas as semanas", "Agradeça e festeje"] }
          ],
          tryIt: "Use o seu objetivo da Lição 1. Peça a um assistente de IA que o divida em tarefas com datas e que faça a lista de dois problemas que podem aparecer, com um plano para cada um.",
          youCanNow: "planear um pequeno projeto com tarefas, pessoas, datas e planos alternativos.",
          quickCheck: [
            { objective: "O5", q: "O que deve ter cada tarefa de um projeto?", options: ["Uma pessoa e uma data", "Um orçamento de $100", "Uma descrição comprida", "Uma IA para a fazer"], answer: 0, why: "Uma pessoa e uma data deixam claro quem faz o quê e até quando." },
            { objective: "O5", q: "Um ajudante não fez a sua tarefa até à data. O que faz primeiro?", options: ["Tira-o do grupo", "Fala com ele com gentileza e pergunta de que ajuda precisa", "Faz você mesmo sem lhe dizer", "Publica sobre isso na internet"], answer: 1, why: "Os líderes acompanham e apoiam os ajudantes para que continuem envolvidos." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Planear a sua próxima habilidade",
          minutes: 5,
          goal: "Escolher uma habilidade para o futuro e um primeiro passo para começar.",
          text: [
            "O mundo do trabalho está sempre a mudar. As habilidades que ajudam quase toda a gente são: usar ferramentas digitais, usar a IA bem e com segurança, comunicar com clareza, trabalhar em equipa e resolver problemas.",
            "Peça a uma IA: \"Isto é o que faço agora e o que gosto de fazer. Sugira três habilidades que me ajudariam a crescer, e uma maneira gratuita de começar cada uma.\" Depois verifique você mesmo as opções gratuitas, por exemplo na biblioteca pública ou num American Job Center (centro público de emprego dos Estados Unidos).",
            "Escolha uma habilidade e um primeiro passo que possa dar esta semana. Os líderes continuam a aprender e levam os outros com eles."
          ],
          steps: ["Diga à IA o que faz agora e o que gosta de fazer.", "Peça três habilidades para crescer e uma maneira gratuita de começar cada uma.", "Verifique você mesmo as opções gratuitas.", "Escolha uma habilidade e um primeiro passo para esta semana."],
          words: [["Habilidade para o futuro", "uma habilidade que vai contar cada vez mais à medida que o trabalho e a tecnologia mudam."]],
          slides: [
            { title: "Habilidades que ajudam quase toda a gente", bullets: ["Ferramentas digitais e IA, usadas com segurança", "Comunicação clara e trabalho em equipa", "Resolver problemas"] },
            { title: "Peça ideias à IA", bullets: ["Diga o que faz e de que gosta", "Três habilidades e uma maneira gratuita de começar cada uma"] },
            { title: "Dê um primeiro passo", bullets: ["Verifique as opções gratuitas: biblioteca, centro de emprego", "Escolha uma habilidade e um passo esta semana"] }
          ],
          tryIt: "Tarefa final: planeie um pequeno projeto na comunidade com um objetivo claro, dois problemas possíveis e como os resolveria, e uma fala de um minuto a pedir a três pessoas que ajudem. Pratique a fala com um assistente de IA, peça a opinião dele e melhore-a uma vez.",
          youCanNow: "liderar um pequeno projeto com confiança e continuar a desenvolver as suas habilidades.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma habilidade para o futuro que ajuda quase toda a gente?", options: ["Decorar números de telefone", "Usar uma máquina de fax", "Comunicar com clareza", "Escrever com letra cursiva"], answer: 2, why: "Comunicar com clareza ajuda em quase todos os trabalhos e papéis na comunidade." },
            { objective: "O1", q: "A IA sugere uma aula gratuita na internet para a sua próxima habilidade. O que faz?", options: ["Inscreve-se e paga logo", "Ignora", "Dá o seu número do banco para se inscrever", "Verifica você mesmo, por exemplo na biblioteca ou no centro de emprego"], answer: 3, why: "Você verifica as opções gratuitas antes de se inscrever." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Liderar os outros e crescer",
        questions: [
          { objective: "O4", q: "Qual destas é uma opinião gentil e útil?", options: ["\"Isso foi mau.\"", "\"Montou tudo depressa. Da próxima vez, ponha a folha de presenças junto à porta. Obrigado.\"", "Não dizer nada", "\"Todos os outros fizeram melhor.\""], answer: 1, why: "Diz um ponto forte, um próximo passo e agradece." },
          { objective: "O4", q: "Alguém lhe dá a sua opinião. A melhor resposta é:", options: ["Discutir", "Ignorar", "Ficar chateado", "Ouvir e agradecer"], answer: 3, why: "Ouvir ajuda-o a crescer." },
          { objective: "O5", q: "O que é uma tarefa?", options: ["Um pequeno trabalho que faz parte de um projeto", "Um projeto inteiro", "Uma reunião", "Um objetivo"], answer: 0, why: "Os projetos são feitos de tarefas." },
          { objective: "O5", q: "Como deve distribuir as tarefas de um projeto?", options: ["Fazê-las todas você mesmo", "Dá-las todas a uma pessoa", "Deixar as pessoas escolherem as tarefas de que gostam, cada uma com uma data", "Nunca as distribuir"], answer: 2, why: "Poder escolher e ter datas claras mantém os ajudantes envolvidos." },
          { objective: "O1", q: "A IA sugere uma aula gratuita para aprender uma habilidade. Antes de se inscrever, você:", options: ["Paga uma taxa primeiro", "Verifica você mesmo, por exemplo na biblioteca ou no centro de emprego", "Dá o seu número do banco", "Confia totalmente"], answer: 1, why: "A IA pode indicar programas que mudaram; verifique você mesmo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Liderança, Confiança e Habilidades para o Futuro",
    questions: [
      { objective: "O1", q: "Quem pode ser líder?", options: ["Só os chefes", "Só as pessoas com cargos", "Qualquer pessoa que organiza e ajuda os outros", "Só os eleitos"], answer: 2, why: "A liderança é o que você faz, não o seu cargo." },
      { objective: "O1", q: "\"Ajudar as crianças a ler mais\" é:", options: ["Um desejo, ainda não um objetivo claro", "Um objetivo claro", "Um prazo", "Uma tarefa"], answer: 0, why: "Não tem quanto nem até quando." },
      { objective: "O1", q: "Um prazo é:", options: ["Um objetivo", "Uma reunião", "Um tipo de fala", "A data até à qual uma coisa tem de estar feita"], answer: 3, why: "Os prazos dizem até quando." },
      { objective: "O1", q: "Um bom pedido para tornar o seu objetivo mais claro é:", options: ["\"Escreva o meu objetivo sem me perguntar nada.\"", "\"Faça-me perguntas primeiro e depois ajude-me a acrescentar o quê, quanto e até quando.\"", "\"Objetivo.\"", "\"Torne-o impossível.\""], answer: 1, why: "As perguntas ajudam a IA a perceber a sua situação real." },
      { objective: "O2", q: "Os quatro passos para resolver problemas são:", options: ["Dar um nome, fazer a lista de opções, escolher uma, ver como correu", "Entrar em pânico, culpar, desistir, esquecer", "Perguntar à IA, copiar, enviar, pronto", "Esperar, esperar, esperar, ter esperança"], answer: 0, why: "Estes passos mantêm-no calmo e com as ideias claras." },
      { objective: "O2", q: "Quando pede opções à IA, peça também:", options: ["A sua palavra-passe", "Um ponto bom e um risco para cada uma", "Só uma opção", "Uma garantia"], answer: 1, why: "Ver o risco ajuda-o a escolher bem." },
      { objective: "O2", q: "Quando descreve um problema à IA, deixa de fora:", options: ["O problema", "O objetivo", "Os dados privados sobre as pessoas", "O prazo"], answer: 2, why: "Mantenha os dados privados dos outros fora da IA." },
      { objective: "O2", q: "Depois de tentar uma solução, você deve:", options: ["Nunca mais pensar nisso", "Pôr a culpa na IA", "Fazer sempre a mesma coisa", "Olhar para trás: funcionou, e o que mudaria?"], answer: 3, why: "Olhar para trás ajuda-o a melhorar." },
      { objective: "O3", q: "Uma fala curta deve ter:", options: ["Porque é importante, o que quer fazer e o seu pedido", "Só piadas", "Vinte minutos de factos", "Nenhum pedido"], answer: 0, why: "Essa forma leva as pessoas a agir." },
      { objective: "O3", q: "Uma fala de um minuto tem cerca de:", options: ["10 palavras", "120 a 150 palavras", "1,000 palavras", "5 páginas"], answer: 1, why: "As pessoas dizem cerca de 120 a 150 palavras num minuto." },
      { objective: "O3", q: "Para acalmar o nervosismo antes de falar:", options: ["Falar muito depressa", "Olhar para o chão", "Respirar devagar e falar um pouco mais devagar", "Não praticar"], answer: 2, why: "Respirar devagar e falar com calma dão confiança." },
      { objective: "O3", q: "Como pode a IA ajudar na sua fala?", options: ["Faz a fala por você", "Torna-a mais comprida", "Tira o seu pedido", "Sugere maneiras de a tornar mais clara e mais forte"], answer: 3, why: "A IA pode dar a sua opinião sobre o seu rascunho." },
      { objective: "O4", q: "Dar opinião (feedback) é:", options: ["Dar informação que ajuda alguém a fazer melhor", "Um castigo", "Um tipo de comida", "Uma queixa"], answer: 0, why: "A opinião serve para crescer." },
      { objective: "O4", q: "Uma boa forma de dar opinião é:", options: ["Só críticas", "Uma coisa que correu bem, uma coisa a tentar da próxima vez e um agradecimento", "Silêncio", "Uma lista comprida de erros"], answer: 1, why: "Uma opinião equilibrada é mais fácil de ouvir." },
      { objective: "O4", q: "Os bons líderes pedem opinião:", options: ["Nunca", "Só uma vez por ano", "Muitas vezes", "Só à IA"], answer: 2, why: "Pedir muitas vezes ajuda os líderes a crescer." },
      { objective: "O5", q: "Um projeto é:", options: ["Um desejo de uma palavra", "Uma única chamada telefónica", "Um sentimento", "Um objetivo com um início e um fim"], answer: 3, why: "Os projetos têm um início e um fim claros." },
      { objective: "O5", q: "Quando a IA divide o seu projeto em tarefas, peça-lhe também que:", options: ["Faça a lista de problemas possíveis e de como lidar com eles", "Faça todas as tarefas", "Escolha os seus ajudantes", "O cancele"], answer: 0, why: "Preparar-se para os problemas torna o projeto mais forte." },
      { objective: "O5", q: "O que mantém os ajudantes envolvidos num projeto?", options: ["Nunca lhes agradecer", "Deixá-los escolher as tarefas, acompanhar e agradecer-lhes", "Fazer tudo você mesmo", "Mudar as datas sem lhes dizer"], answer: 1, why: "As pessoas ficam quando se sentem valorizadas." },
      { objective: "O1", q: "Qual é uma habilidade para o futuro que ajuda quase toda a gente?", options: ["Ignorar a mudança", "Evitar o trabalho em equipa", "Usar ferramentas digitais e IA com segurança", "Nunca aprender"], answer: 2, why: "As habilidades digitais e de IA ajudam em muitos trabalhos." },
      { objective: "O3", q: "Na tarefa final, depois de praticar a sua fala com a IA, você:", options: ["Para por aí", "Torna-a mais comprida", "Envia-a a desconhecidos", "Pede a opinião e melhora-a uma vez"], answer: 3, why: "Melhorar depois de ouvir a opinião completa a habilidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      8,
      10,
      13,
      16,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Objetivo claro",
        objective: "O1",
        notYet: "Um desejo sem quanto nem até quando.",
        meets: "Um objetivo com o quê, quanto e até quando, que o aluno pode mesmo fazer.",
        exceeds: "Tornado mais claro com as perguntas da IA e inclui um primeiro passo."
      },
      {
        name: "Problemas e soluções",
        objective: "O2",
        notYet: "Menos de dois problemas, ou nenhum plano para eles.",
        meets: "Dois problemas possíveis, cada um com uma solução escolhida.",
        exceeds: "Cada solução mostra um ponto bom e um risco que foram pesados."
      },
      {
        name: "Fala de um minuto",
        objective: "O3",
        notYet: "Nenhuma fala, ou nenhum pedido claro.",
        meets: "Cerca de um minuto, com porque é importante, o que vai fazer e um pedido de ação a pedir a três pessoas que ajudem.",
        exceeds: "Praticada em voz alta e melhorada uma vez com a opinião da IA."
      },
      {
        name: "Plano do projeto",
        objective: "O5",
        notYet: "Sem tarefas nem datas.",
        meets: "Tarefas com uma pessoa e uma data para cada uma.",
        exceeds: "Inclui encontros de acompanhamento todas as semanas e como se vai agradecer aos ajudantes."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que realizam o seu projeto na comunidade em 60 dias (inquérito de seguimento)",
      "Alunos que conseguem pelo menos três ajudantes para um projeto",
      "Alunos que começam a próxima habilidade que escolheram, como outro curso da Koach Learn, em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Papel e caneta para o objetivo, o plano do projeto e a fala",
      "Um lugar calmo para praticar a fala em voz alta",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Comece por perguntar aos alunos como já lideram em casa, no trabalho ou na igreja.",
      "Peça aos alunos que façam a sua fala de um minuto a um colega e também à IA, e que usem a forma de dar opinião.",
      "Mantenha os projetos pequenos; ajude os alunos a reduzir um objetivo se for grande demais para o tempo e a ajuda que têm.",
      "Lembre aos alunos que deixem os dados privados sobre as pessoas fora dos pedidos à IA.",
      "Avalie a tarefa final com a grelha de avaliação e dê a sua opinião sobre uma linha Ainda não de cada vez."
    ]
  }
};
