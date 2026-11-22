"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-volunteer-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-volunteer-management-pt",
  lang: "pt",
  translationOf: "nonprofit-volunteer-management",
  category: "Non Profits",
  name: "Gestão de Voluntários",
  skills: "Escrever descrições de funções de voluntários, Recrutar e avaliar voluntários, Integração e formação, Organizar turnos e supervisionar, Reconhecimento e retenção, Registar as horas dos voluntários",
  outcome: "gerir um programa de voluntários do início ao fim: escrever uma descrição de função clara, recrutar e avaliar os voluntários com segurança, integrá-los e formá-los, organizar os seus turnos e supervisioná-los, agradecer-lhes de maneiras que os façam voltar e registar as suas horas.",
  about: [
    "Este curso é para coordenadores de voluntários, funcionários de organizações sem fins lucrativos, líderes de igrejas e ministérios, associações de pais das escolas, ligas desportivas de jovens, bancos alimentares e qualquer pessoa que dependa de voluntários.",
    "Os voluntários dão o seu tempo de graça, por isso a forma como você os gere decide se eles voltam. Vai aprender a escrever descrições de funções, encontrar e avaliar as pessoas certas (incluindo a verificação de antecedentes para funções com crianças ou adultos vulneráveis), formá-las, organizar os seus turnos e supervisioná-las, agradecer-lhes e mantê-las, e registar as suas horas.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" que pode usar para uma função de voluntário real. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Para questões legais, de seguros e de impostos, consulte um profissional e as fontes oficiais indicadas nas lições. (Se quiser usar IA para encontrar voluntários, veja o curso sobre IA para o recrutamento de voluntários.)"
  ],
  finalTask: "Monte um kit de voluntários para uma função real: uma descrição da função, uma mensagem de recrutamento e os passos de avaliação (com verificação de antecedentes se a função envolver crianças ou adultos vulneráveis), o plano de uma sessão de acolhimento de 30 minutos, um horário mensal com um supervisor indicado pelo nome, duas ideias de reconhecimento e uma folha de presenças simples ou uma folha de cálculo que registe as horas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Coordenadores de voluntários, funcionários de organizações sem fins lucrativos, líderes de igrejas e ministérios, associações de pais das escolas, ligas desportivas de jovens, bancos alimentares e qualquer pessoa cujo trabalho dependa de voluntários.",
    startingPoint: "Já recrutaram voluntários ou trabalharam com eles de maneira informal, muitas vezes de boca em boca. Poucos usam descrições de funções escritas, uma avaliação baseada no risco, uma sessão de acolhimento fixa ou um sistema para registar as horas.",
    gap: "Os voluntários dão o seu tempo de graça, por isso a má organização, a falta de formação ou a falta de agradecimento fazem-nos ir embora, e uma avaliação fraca pode pôr em risco crianças e adultos vulneráveis. Um kit de voluntários completo ajuda as organizações a manter os bons voluntários, a proteger as pessoas que servem e a mostrar o seu impacto aos financiadores.",
    constraints: [
      "Os coordenadores muitas vezes trabalham a tempo parcial ou são eles próprios voluntários; lições de 5 minutos",
      "Ferramentas gratuitas ou baratas: papel, uma folha de cálculo, um formulário de inscrição gratuito",
      "As regras de verificação de antecedentes mudam conforme o estado, o programa e a seguradora; os alunos confirmam com a seguradora e um advogado",
      "Privacidade: os registos dos voluntários e dos beneficiários ficam privados; nenhum nome ou foto de beneficiários sem autorização",
      "Sem conselhos sobre impostos; os voluntários são encaminhados para a Publicação 526 do IRS e um profissional de impostos"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para uma função de voluntário de que a sua organização precisa", action: "escrever uma descrição de função que diga o impacto, as tarefas, o tempo, as competências e a quem o voluntário responde", standard: "com as cinco partes e uma frase inicial sobre o impacto" },
    { id: "O2", condition: "Com uma função de voluntário e as pessoas que ela serve", action: "escrever uma mensagem de recrutamento e escolher os passos de avaliação que correspondem ao risco da função", standard: "incluindo referências e uma verificação de antecedentes com autorização escrita para qualquer função com crianças ou adultos vulneráveis" },
    { id: "O3", condition: "Para os novos voluntários da sua função", action: "planear uma sessão de acolhimento de 30 minutos e ensinar a função em quatro passos: explicar, mostrar, experimentar e dar comentários", standard: "cobrindo a segurança, a privacidade, o registo de entrada e como cancelar" },
    { id: "O4", condition: "Usando uma folha de cálculo, um calendário partilhado ou papel", action: "fazer um horário de um mês com um chefe de turno indicado pelo nome, suplentes e uma mensagem de lembrete", standard: "com todos os turnos cobertos e um chefe indicado para cada um" },
    { id: "O5", condition: "Para os voluntários que você gere", action: "planear um reconhecimento concreto e identificar as razões comuns pelas quais os voluntários vão embora", standard: "com um pequeno agradecimento e um momento maior" },
    { id: "O6", condition: "Para uma função de voluntário", action: "preparar uma folha de presenças ou uma folha de cálculo que registe as horas dos voluntários e usar os totais", standard: "registando o nome, a data, a entrada, a saída, as horas e a função, mantendo os registos privados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Trazer voluntários",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever a descrição de uma função de voluntário",
          minutes: 5,
          goal: "Escrever uma descrição de função clara e convidativa para um trabalho de voluntário.",
          text: [
            "Os voluntários dão o seu melhor quando sabem exatamente o que se espera deles. Uma descrição de função é como uma pequena descrição de emprego: diz qual é a função, porque é importante, o que o voluntário vai fazer, o tempo necessário, as competências ou qualidades necessárias, a formação ou avaliação que houver e a quem ele responde.",
            "Torne-a convidativa. Comece pelo impacto: \"Ajude 200 famílias a receber alimentos todos os sábados.\" Seja honesto sobre o tempo, incluindo quanto tempo espera que fiquem (um evento, ou seis meses). Ofereça funções curtas e flexíveis, além das longas; muitas pessoas podem dar duas horas, mas não todas as semanas.",
            "Escreva uma descrição separada para cada função. Um banco alimentar pode ter pessoas para receber, para separar, motoristas e um ajudante para introduzir dados, cada um com necessidades diferentes."
          ],
          steps: ["Dê um nome à função e diga porque é importante.", "Faça a lista do que o voluntário vai fazer.", "Diga quando, por quanto tempo e durante quantos meses.", "Faça a lista das competências, qualidades e limites de idade.", "Indique a formação, a avaliação e a quem ele responde."],
          words: [["Descrição de função", "um texto curto sobre um trabalho de voluntário: o quê, quando, porquê e o que é preciso."], ["Coordenador de voluntários", "a pessoa que recruta, organiza e apoia os voluntários."]],
          slides: [
            { title: "Uma descrição de função diz", bullets: ["A função e porque é importante", "O que vão fazer, quando e por quanto tempo", "Competências necessárias, formação e avaliação", "A quem respondem"] },
            { title: "Torne-a convidativa", bullets: ["Comece pelo impacto: \"Ajude 200 famílias todos os sábados\"", "Seja honesto sobre o tempo", "Ofereça também funções curtas e flexíveis"] },
            { title: "Uma função, uma descrição", bullets: ["Receção, separação, motorista, introdução de dados", "Tarefas diferentes, necessidades diferentes"] }
          ],
          tryIt: "Escolha uma função de voluntário de que a sua organização precisa. Escreva a descrição dessa função com as cinco partes. Comece com uma frase sobre o impacto.",
          youCanNow: "escrever uma descrição de função clara que diga aos voluntários exatamente o que se pede e porque é importante.",
          quickCheck: [
            { objective: "O1", q: "O que é a descrição de uma função de voluntário?", options: ["Um cartão de agradecimento para voluntários", "Uma pequena descrição de emprego que diz qual é a função, porque é importante e o que se pede", "Uma folha de presenças", "Um formulário de verificação de antecedentes"], answer: 1, why: "Uma descrição de função diz aos voluntários exatamente o que se pede deles, como uma pequena descrição de emprego." },
            { objective: "O1", q: "A sua descrição diz \"Ajudar às vezes.\" O que acrescenta primeiro?", options: ["Nada; vago é mais simpático", "Uma lista de todas as suas regras", "O salário do voluntário", "Quando e por quanto tempo, e o impacto da função"], answer: 3, why: "Os voluntários precisam de dados honestos sobre o tempo e de uma razão pela qual a função é importante." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Recrutar e avaliar voluntários",
          minutes: 6,
          goal: "Recrutar voluntários para uma função e escolher os passos de avaliação certos para ela.",
          text: [
            "A razão mais comum para as pessoas fazerem voluntariado é que alguém lhes pediu. Peça pessoalmente, através dos voluntários atuais, de locais de culto, escolas, empresas com programas de voluntariado, quadros de avisos da comunidade e redes sociais. Partilhe a descrição da função e uma forma simples de se inscrever.",
            "A avaliação protege as pessoas que você serve, os seus voluntários e a sua organização. Ajuste-a ao risco da função. Para todas as funções: uma candidatura com contactos e um contacto de emergência, e uma conversa curta. As funções de maior risco, sobretudo qualquer trabalho com crianças ou adultos vulneráveis (pessoas idosas, pessoas com deficiência), também precisam de verificação de referências e de uma verificação de antecedentes, feita com a autorização escrita da pessoa, através de um fornecedor de confiança.",
            "As regras sobre a verificação de antecedentes de voluntários mudam conforme o estado e o programa, e a sua seguradora pode ter exigências. Pergunte à sua companhia de seguros e a um advogado o que se aplica a você. Acrescente também regras de segurança: por exemplo, nenhum adulto fica sozinho e fora da vista com uma criança, e todas as preocupações são comunicadas a uma pessoa indicada pelo nome."
          ],
          steps: ["Peça às pessoas pessoalmente; use os voluntários atuais e os parceiros da comunidade.", "Partilhe a descrição da função e uma inscrição fácil.", "Para todas as funções: candidatura, contacto de emergência e uma conversa curta.", "Para funções com crianças ou adultos vulneráveis: referências e verificação de antecedentes com autorização escrita.", "Confirme as regras do estado e as exigências da sua seguradora.", "Defina regras de segurança, como nenhum adulto sozinho e fora da vista com uma criança."],
          words: [["Avaliação", "os passos que dá para confirmar que um voluntário é adequado e seguro para uma função."], ["Verificação de antecedentes", "uma pesquisa em registos públicos, como o registo criminal, feita com a autorização da pessoa."], ["Adulto vulnerável", "um adulto que pode precisar de proteção extra, como algumas pessoas idosas ou pessoas com deficiência."]],
          slides: [
            { title: "Recrute pedindo", bullets: ["A maioria faz voluntariado porque alguém pediu", "Voluntários atuais, locais de culto, escolas", "Empresas, quadros de avisos, redes sociais"] },
            { title: "Avalie conforme o risco", bullets: ["Todas as funções: candidatura, contacto de emergência, uma conversa", "Crianças ou adultos vulneráveis: referências + verificação de antecedentes", "Sempre com autorização escrita"] },
            { title: "Confirme as regras", bullets: ["As regras mudam de estado para estado", "A sua seguradora pode ter exigências", "Pergunte à seguradora e a um advogado"] },
            { title: "Regras de segurança", bullets: ["Nenhum adulto sozinho e fora da vista com uma criança", "Comunique todas as preocupações a uma pessoa indicada"] }
          ],
          tryIt: "Para a função que descreveu na Lição 1, escreva uma mensagem de recrutamento curta e indique três lugares onde a vai partilhar. Depois faça a lista dos passos de avaliação de que a função precisa e explique porquê, com base no seu risco.",
          youCanNow: "recrutar voluntários pessoalmente e escolher passos de avaliação que correspondem ao risco de cada função.",
          quickCheck: [
            { objective: "O2", q: "O que deve incluir a avaliação de qualquer função de voluntário, mesmo de baixo risco?", options: ["Uma candidatura com contactos e um contacto de emergência, e uma conversa curta", "Uma verificação de antecedentes para todos", "Nenhuma avaliação", "Uma verificação de crédito"], answer: 0, why: "Todas as funções têm uma candidatura, um contacto de emergência e uma conversa curta; as funções de maior risco acrescentam mais." },
            { objective: "O2", q: "Numa nova função, os voluntários leem com pessoas idosas num lar. O que acrescenta?", options: ["Nada mais", "Uma nota de agradecimento mais longa", "Referências e uma verificação de antecedentes com autorização escrita", "Uma publicação nas redes sociais sobre os residentes"], answer: 2, why: "As funções com adultos vulneráveis precisam de verificação de referências e de uma verificação de antecedentes feita com autorização." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Integrar e formar voluntários",
          minutes: 5,
          goal: "Planear um acolhimento curto e a formação da função, para que os novos voluntários fiquem preparados e bem recebidos.",
          text: [
            "O primeiro dia decide se muitos voluntários voltam. A integração é tudo o que acontece desde o \"sim\" até a pessoa se sentir confiante na função: uma mensagem de boas-vindas, uma sessão de acolhimento, a formação para a função e um primeiro turno simpático.",
            "Uma sessão de acolhimento explica a missão e quem vocês servem, onde ficam as coisas, a quem perguntar, a segurança e os passos de emergência, as regras de privacidade (por exemplo, não partilhar os nomes ou as fotos dos beneficiários) e como registar a entrada e cancelar um turno. A formação da função mostra como fazer o trabalho: explicar, mostrar, deixar experimentar e depois dar comentários. Uma lista de verificação curta ou um vídeo ajuda a lembrar.",
            "Junte os novos voluntários a um colega com experiência no primeiro turno, e fale com eles depois: \"Como correu? O que foi confuso?\""
          ],
          steps: ["Envie uma mensagem de boas-vindas com a hora, o local e por quem perguntar.", "Faça uma sessão de acolhimento: missão, espaço, segurança, privacidade, registo de entrada e cancelamento.", "Ensine a função: explicar, mostrar, deixar experimentar, dar comentários.", "Dê uma lista de verificação simples.", "Junte-os a um colega.", "Fale com eles depois do primeiro turno."],
          words: [["Integração", "os passos que ajudam um novo voluntário a começar e a sentir-se bem recebido."], ["Sessão de acolhimento", "uma primeira sessão que explica a organização, as regras e a segurança."], ["Confidencialidade", "manter privadas as informações privadas sobre as pessoas que você serve."]],
          slides: [
            { title: "O primeiro dia conta", bullets: ["Mensagem de boas-vindas", "Sessão de acolhimento", "Formação da função", "Um primeiro turno simpático"] },
            { title: "O acolhimento explica", bullets: ["A missão e quem vocês servem", "O espaço, a quem perguntar, a segurança", "Regras de privacidade", "Registo de entrada e cancelamento"] },
            { title: "Formação que fica", bullets: ["Explicar, mostrar, deixar experimentar, dar comentários", "Uma lista de verificação curta ou um vídeo"] },
            { title: "Depois do primeiro turno", bullets: ["Junte-o a um colega", "Pergunte: \"Como correu? O que foi confuso?\""] }
          ],
          tryIt: "Escreva o plano de uma sessão de acolhimento de 30 minutos para a sua função, com o tempo de cada parte. Depois escreva a formação da função em quatro passos: explicar, mostrar, experimentar, dar comentários.",
          youCanNow: "integrar e formar novos voluntários para que estejam seguros, confiantes e queiram voltar.",
          quickCheck: [
            { objective: "O3", q: "O que é a integração?", options: ["Só o primeiro email que envia", "Terminar a função de um voluntário", "Tudo desde o \"sim\" até se sentir confiante na função", "Contar as horas dos voluntários"], answer: 2, why: "A integração inclui as boas-vindas, o acolhimento, a formação da função e um primeiro turno simpático." },
            { objective: "O3", q: "Um novo voluntário começa no sábado. O que ajuda mais no primeiro turno?", options: ["Juntá-lo a um colega com experiência e falar com ele depois", "Deixá-lo sozinho a descobrir", "Dar-lhe a tarefa mais difícil", "Saltar o acolhimento para poupar tempo"], answer: 0, why: "Um colega dá-lhe alguém a quem perguntar, e a conversa depois mostra o que foi confuso." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Trazer voluntários",
        questions: [
          { objective: "O1", q: "Qual é a melhor forma de começar a descrição de uma função de voluntário?", options: ["Com as regras", "Com o impacto da função", "Com o prazo", "Com a verificação de antecedentes"], answer: 1, why: "Começar pelo impacto torna a função convidativa." },
          { objective: "O2", q: "Qual é a razão mais comum para as pessoas começarem a fazer voluntariado?", options: ["Alguém lhes pediu", "Um cartaz publicitário", "Um formulário de impostos", "Um email ao acaso"], answer: 0, why: "Um pedido pessoal é a ferramenta de recrutamento mais forte." },
          { objective: "O2", q: "Um voluntário vai dar explicações a crianças depois da escola. Que avaliação é precisa?", options: ["Nenhuma", "Só um nome", "Só um sorriso à porta", "Uma candidatura, referências e uma verificação de antecedentes com autorização escrita"], answer: 3, why: "As funções com crianças precisam da avaliação mais forte." },
          { objective: "O2", q: "A quem deve perguntar sobre as regras de verificação de antecedentes dos seus voluntários?", options: ["A um amigo de um voluntário", "A ninguém", "À sua seguradora e a um advogado", "A uma publicação nas redes sociais"], answer: 2, why: "As regras mudam de estado para estado e as seguradoras podem ter exigências." },
          { objective: "O3", q: "O que faz parte de uma sessão de acolhimento de voluntários?", options: ["As regras de privacidade sobre as pessoas que servem", "As moradas dos beneficiários", "Os salários dos funcionários", "Mexericos sobre os doadores"], answer: 0, why: "Os voluntários têm de saber proteger a privacidade das pessoas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter os voluntários",
      lessons: [
        {
          objectives: ["O4"],
          title: "Organizar os turnos e supervisionar voluntários",
          minutes: 5,
          goal: "Fazer um horário de voluntários com suplentes e supervisionar os voluntários de forma a apoiá-los.",
          text: [
            "Torne o horário fácil de ver e fácil de mudar. Um calendário partilhado, uma ferramenta de inscrição gratuita ou uma folha de cálculo simples servem. Publique os turnos cedo, envie um lembrete um ou dois dias antes e torne o cancelamento simples, para que as pessoas avisem em vez de simplesmente faltarem. Prepare uma lista de suplentes para os turnos importantes.",
            "Cada turno deve ter um supervisor ou um voluntário chefe indicado pelo nome, que recebe as pessoas, distribui as tarefas, responde às perguntas e resolve os problemas. Supervisionar voluntários é como gerir funcionários, mas mais leve: tarefas claras, conversas regulares e comentários rápidos e simpáticos.",
            "Se um voluntário não está a correr bem, fale com ele em privado, seja concreto e pergunte o que ajudaria. Às vezes outra função serve melhor. Se alguém quebrar as regras de segurança ou de conduta, siga a sua política, que pode incluir terminar a sua função de voluntário."
          ],
          steps: ["Use um calendário partilhado, uma ferramenta de inscrição ou uma folha de cálculo.", "Publique os turnos cedo e envie lembretes.", "Torne o cancelamento fácil; tenha uma lista de suplentes.", "Indique um supervisor para cada turno.", "Dê tarefas claras e comentários rápidos e simpáticos.", "Resolva os problemas em privado; siga a política nas falhas de segurança."],
          words: [["Turno", "um bloco de tempo fixo em que um voluntário trabalha."], ["Chefe de turno", "a pessoa responsável pelos voluntários durante um turno."], ["Lista de suplentes", "voluntários a quem pode ligar quando alguém cancela."]],
          slides: [
            { title: "Um horário que funciona", bullets: ["Fácil de ver, fácil de mudar", "Publique cedo, lembre um ou dois dias antes", "Cancelamento fácil e uma lista de suplentes"] },
            { title: "Um chefe indicado em cada turno", bullets: ["Recebe as pessoas", "Dá as tarefas, responde às perguntas", "Resolve os problemas"] },
            { title: "Supervisionar voluntários", bullets: ["Tarefas claras e conversas regulares", "Comentários rápidos e simpáticos", "Não está a correr bem? Fale em privado; experimente outra função"] }
          ],
          tryIt: "Faça um horário de um mês para a sua função numa folha de cálculo ou em papel: datas, horas dos turnos, nomes dos voluntários, um chefe de turno indicado e dois nomes de suplentes. Escreva a mensagem de lembrete que vai enviar.",
          youCanNow: "fazer um horário de voluntários com lembretes e suplentes, e supervisionar os voluntários de forma clara e com apoio.",
          quickCheck: [
            { objective: "O4", q: "O que é uma lista de suplentes?", options: ["Uma cópia do orçamento", "Uma lista dos voluntários que desistiram", "Horários antigos", "Pessoas a quem pode ligar quando alguém cancela um turno importante"], answer: 3, why: "Uma lista de suplentes mantém os turnos importantes cobertos quando os planos mudam." },
            { objective: "O4", q: "Um voluntário continua a errar na sua função. O que faz primeiro?", options: ["Conta a toda a equipa", "Fala com ele em privado, é concreto e pergunta o que ajudaria", "Deixa de o pôr nos turnos sem dizer porquê", "Ignora"], answer: 1, why: "Resolva os problemas em privado e com simpatia; outra função pode servir melhor." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reconhecimento e retenção",
          minutes: 5,
          goal: "Planear um reconhecimento que sirva para os seus voluntários e perceber porque os voluntários vão embora.",
          text: [
            "Muitas vezes os voluntários deixam de vir porque se sentiram desnecessários, mal organizados, sem formação ou sem agradecimento, ou porque a vida ficou mais ocupada. Mantê-los é mais barato e mais fácil do que encontrar novos.",
            "Agradeça às pessoas muitas vezes e de forma concreta: \"Os seus turnos de sábado ajudaram-nos a embalar 600 caixas este mês.\" Partilhe histórias do impacto, com a autorização das pessoas servidas. Misture agradecimentos pequenos do dia a dia (uma nota, uma menção, uma mensagem) com momentos maiores (um evento de agradecimento, um certificado, uma carta de recomendação para um emprego ou para a escola).",
            "Pergunte aos voluntários o que querem: novas competências, amigos, liderança, flexibilidade. Ofereça oportunidades de crescer, como formar novos voluntários ou chefiar um turno. Pergunte às pessoas que saem porquê, e use o que aprender."
          ],
          steps: ["Agradeça às pessoas muitas vezes e de forma concreta.", "Partilhe histórias do impacto, com autorização.", "Misture agradecimentos pequenos com momentos maiores.", "Pergunte a cada voluntário o que quer da experiência.", "Ofereça funções para crescer.", "Pergunte às pessoas que saem porquê."],
          words: [["Retenção", "fazer com que os voluntários continuem a voltar ao longo do tempo."], ["Reconhecimento", "mostrar aos voluntários que o seu trabalho é notado e valorizado."]],
          slides: [
            { title: "Porque os voluntários vão embora", bullets: ["Sentiram-se desnecessários ou sem formação", "Má organização", "Nunca lhes agradeceram, ou a vida ficou mais ocupada"] },
            { title: "Agradeça bem", bullets: ["Muitas vezes e de forma concreta", "Partilhe histórias do impacto, com autorização", "Pequenos agradecimentos e momentos maiores"] },
            { title: "Ajude-os a crescer", bullets: ["Pergunte o que querem", "Ofereça formação e funções de liderança", "Pergunte a quem sai porquê"] }
          ],
          tryIt: "Escreva duas ideias de reconhecimento para os seus voluntários: um pequeno agradecimento que pode dar esta semana e um momento maior para este ano. Depois escreva três perguntas que vai fazer a um voluntário sobre o que ele quer da função.",
          youCanNow: "reconhecer os voluntários de maneiras que contam para eles e agir sobre as razões pelas quais os voluntários vão embora.",
          quickCheck: [
            { objective: "O5", q: "Qual é uma razão comum para os voluntários deixarem de vir?", options: ["Sentiram-se desnecessários ou sem agradecimento", "Agradeceram-lhes demasiadas vezes", "Os turnos estavam bem organizados", "Tinham um colega para os ajudar"], answer: 0, why: "Sentir-se desnecessário, mal organizado, sem formação ou sem agradecimento faz muitas vezes os voluntários irem embora." },
            { objective: "O5", q: "Um voluntário fiel diz que quer desenvolver competências de liderança. O que oferece?", options: ["Nada; os voluntários não crescem", "Mais da mesma tarefa", "A oportunidade de chefiar um turno ou formar novos voluntários", "Uma função mais pequena"], answer: 2, why: "Funções para crescer, como chefiar um turno, ajudam a manter os voluntários que querem mais." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Registar as horas dos voluntários",
          minutes: 5,
          goal: "Preparar um sistema simples para registar as horas dos voluntários e usar os números.",
          text: [
            "Registe quem fez voluntariado, quando, durante quanto tempo e em que função. Uma folha de presenças em papel passada para uma folha de cálculo serve para grupos pequenos; um formulário gratuito ou uma aplicação de voluntariado pode servir para grupos maiores. Mantenha tudo simples para que as pessoas registem mesmo a entrada e a saída.",
            "Os números ajudam você: mostram o impacto nos relatórios de subsídios e à direção, ajudam a planear as equipas e ajudam a agradecer aos voluntários mais fiéis. Muitos voluntários também precisam de comprovativo de horas para a escola, bolsas de estudo, o tribunal ou exigências de serviço comunitário, ou candidaturas de emprego. Esteja pronto para assinar uma carta ou um formulário que confirme as suas horas.",
            "Mantenha os registos dos voluntários privados e seguros, e recolha só o que precisa. Uma nota sobre impostos para voluntários nos Estados Unidos: o IRS (a autoridade de impostos dos EUA) diz que o valor do tempo de voluntariado não é dedutível nos impostos, embora algumas despesas do próprio bolso não reembolsadas possam ser. Encaminhe os voluntários para a Publicação 526 do IRS e um profissional de impostos, em vez de dar conselhos sobre impostos."
          ],
          steps: ["Escolha uma forma de registo: folha em papel, formulário ou aplicação.", "Registe o nome, a data, a hora de entrada e de saída, e a função.", "Passe os dados para uma única folha de cálculo todas as semanas.", "Some as horas por voluntário, por mês e por programa.", "Use os totais nos relatórios, no planeamento e nos agradecimentos.", "Mantenha os registos privados; assine cartas de comprovativo de horas quando pedirem."],
          words: [["Folha de presenças", "um formulário simples onde os voluntários escrevem o nome e a hora a que começam e acabam."], ["Comprovativo de horas", "uma carta ou um formulário assinado que confirma quantas horas alguém fez de voluntariado."], ["Relatório de subsídio", "um relatório para um financiador que mostra o que foi feito com o seu dinheiro."]],
          slides: [
            { title: "Registe o básico", bullets: ["Quem, quando, quanto tempo, que função", "Papel, um formulário gratuito ou uma aplicação", "Mantenha simples"] },
            { title: "Use os números", bullets: ["Relatórios de subsídios e informações à direção", "Planear os turnos", "Agradecer aos voluntários fiéis"] },
            { title: "Comprovativo de horas", bullets: ["Para a escola, bolsas, o tribunal ou empregos", "Esteja pronto para assinar uma carta ou um formulário"] },
            { title: "Privacidade e impostos", bullets: ["Recolha só o que precisa; guarde em segurança", "O tempo de voluntariado não é dedutível nos impostos (IRS)", "Encaminhe para a Publicação 526 do IRS e um profissional de impostos"] }
          ],
          sources: [{ name: "IRS Publicação 526, Contribuições de caridade (Charitable Contributions)", url: "https://www.irs.gov/publications/p526" }],
          tryIt: "Tarefa final: monte o seu kit de voluntários para uma função: a descrição da função, a mensagem de recrutamento e os passos de avaliação, o plano de uma sessão de acolhimento de 30 minutos, um horário mensal com um chefe de turno, duas ideias de reconhecimento e uma folha de presenças ou uma folha de cálculo com colunas para o nome, a data, a entrada, a saída, as horas e a função.",
          youCanNow: "registar as horas dos voluntários de forma simples e usar os números nos relatórios, no planeamento, nos agradecimentos e nos comprovativos de horas.",
          quickCheck: [
            { objective: "O6", q: "Porque registar as horas dos voluntários?", options: ["Para cobrar uma taxa aos voluntários", "Para mostrar o impacto nos relatórios de subsídios e à direção, e para planear as equipas", "Para partilhar publicamente os dados dos voluntários", "Porque os voluntários são pagos à hora"], answer: 1, why: "Os totais de horas mostram o impacto, ajudam a planear e ajudam a agradecer aos voluntários fiéis." },
            { objective: "O6", q: "Um voluntário pergunta se pode deduzir o valor do seu tempo nos impostos. O que faz?", options: ["Diz que sim, a qualquer valor por hora", "Faz os impostos por ele", "Ignora a pergunta", "Encaminha-o para a Publicação 526 do IRS e um profissional de impostos"], answer: 3, why: "A lição diz para não dar conselhos sobre impostos; encaminhe os voluntários para a Publicação 526 do IRS e um profissional de impostos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter os voluntários",
        questions: [
          { objective: "O4", q: "Os voluntários continuam a faltar aos turnos sem avisar. O que ajuda primeiro?", options: ["Proibi-los a todos", "Deixar de fazer horários", "Enviar lembretes e tornar o cancelamento fácil", "Duplicar a duração dos turnos"], answer: 2, why: "Os lembretes e o cancelamento fácil reduzem as faltas." },
          { objective: "O4", q: "Quem deve ser indicado para cada turno?", options: ["Um doador", "Um chefe de turno ou supervisor", "O voluntário mais novo", "Ninguém"], answer: 1, why: "Um chefe indicado recebe, orienta e resolve os problemas." },
          { objective: "O5", q: "Que agradecimento conta mais para um voluntário?", options: ["\"Obrigado a todos.\"", "Nenhum agradecimento; é voluntariado", "Um email genérico uma vez por ano", "\"Os seus turnos de sábado ajudaram-nos a embalar 600 caixas este mês.\""], answer: 3, why: "Um agradecimento concreto que diz o impacto é o que conta mais." },
          { objective: "O6", q: "Um adolescente precisa de comprovativo de 40 horas de voluntariado para a escola. Você deve:", options: ["Usar os seus registos de horas e assinar uma carta que as confirme", "Recusar", "Adivinhar as horas", "Dizer-lhe para perguntar ao IRS"], answer: 0, why: "Um bom registo deixa você confirmar as horas com exatidão." },
          { objective: "O6", q: "Segundo o IRS, um voluntário pode deduzir o valor do seu tempo?", options: ["Sim, ao valor que escolher", "Sim, ao salário mínimo", "Não, o valor do tempo ou dos serviços não é dedutível", "Só aos fins de semana"], answer: 2, why: "A Publicação 526 do IRS diz que o valor do seu tempo não é dedutível." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gestão de Voluntários",
    questions: [
      { objective: "O1", q: "A descrição de uma função de voluntário deve incluir:", options: ["Só o nome da função", "O que vão fazer, quando, porque é importante e a quem respondem", "O salário do voluntário", "Os nomes dos doadores"], answer: 1, why: "Detalhes claros ajudam os voluntários a ter sucesso." },
      { objective: "O1", q: "Porque oferecer funções curtas e flexíveis?", options: ["Muitas pessoas podem dar um pouco de tempo, mas não todas as semanas", "São mais fáceis de esquecer", "Não precisam de formação", "Substituem os funcionários"], answer: 0, why: "As funções flexíveis abrem a porta a mais voluntários." },
      { objective: "O1", q: "Um banco alimentar precisa de pessoas para a receção, para separar e motoristas. Quantas descrições de função?", options: ["Uma para todas", "Nenhuma", "Uma para cada função", "Só para os motoristas"], answer: 2, why: "Cada função tem tarefas e necessidades diferentes." },
      { objective: "O2", q: "Que forma de recrutar costuma funcionar melhor?", options: ["Esperar que as pessoas o encontrem", "Publicar uma vez e esperar", "Pedir só aos funcionários", "Pedir às pessoas pessoalmente, também através dos voluntários atuais"], answer: 3, why: "Os pedidos pessoais trazem mais voluntários." },
      { objective: "O2", q: "A avaliação deve ser ajustada:", options: ["Ao risco da função", "À aparência do voluntário", "Ao tempo que faz", "À disposição do coordenador"], answer: 0, why: "As funções de maior risco precisam de mais avaliação." },
      { objective: "O2", q: "Uma verificação de antecedentes deve ser feita:", options: ["Em segredo", "Com a autorização escrita da pessoa", "Só depois de um incidente", "Perguntando aos vizinhos"], answer: 1, why: "A autorização é obrigatória e é uma questão de respeito." },
      { objective: "O2", q: "Qual é uma boa regra de segurança para programas de jovens?", options: ["Qualquer adulto pode ficar sozinho com uma criança em qualquer lugar", "As preocupações ficam em silêncio", "Nenhum adulto fica sozinho e fora da vista com uma criança", "A avaliação é opcional"], answer: 2, why: "Esta regra protege as crianças e os voluntários." },
      { objective: "O2", q: "As regras para a verificação de antecedentes de voluntários:", options: ["São iguais em todo o lado", "Não existem", "São definidas pelos voluntários", "Mudam conforme o estado e o programa; pergunte à seguradora e a um advogado"], answer: 3, why: "As exigências variam, por isso confirme o que se aplica a você." },
      { objective: "O3", q: "Integração quer dizer:", options: ["Tudo o que ajuda um novo voluntário a começar e a sentir-se bem recebido", "Despedir um voluntário", "Angariar fundos", "Comprar equipamento"], answer: 0, why: "Inclui as boas-vindas, o acolhimento, a formação e o primeiro turno." },
      { objective: "O3", q: "Os quatro passos da formação da função são:", options: ["Ler, assinar, sair, esquecer", "Explicar, mostrar, deixar experimentar, dar comentários", "Dizer, testar, falhar, repetir", "Ver, esperar, adivinhar, ir"], answer: 1, why: "Uma formação em que se mostra e se experimenta cria competência e confiança." },
      { objective: "O3", q: "Juntar um novo voluntário a um colega ajuda porque:", options: ["Duplica a papelada", "Substitui o acolhimento", "Ele tem alguém a quem perguntar no primeiro turno", "O colega faz o trabalho todo"], answer: 2, why: "Um colega torna o primeiro turno mais fácil e mais simpático." },
      { objective: "O3", q: "Um voluntário publica na internet uma foto de um beneficiário. Que tema do acolhimento faltou?", options: ["Estacionamento", "Regras de privacidade", "Lanches", "Angariação de fundos"], answer: 1, why: "Os voluntários têm de manter privada a identidade dos beneficiários." },
      { objective: "O4", q: "Um bom horário de voluntários é:", options: ["Fácil de ver e fácil de mudar", "Guardado na cabeça de uma só pessoa", "Publicado na noite anterior", "Nunca partilhado"], answer: 0, why: "Ser visível e flexível reduz as falhas." },
      { objective: "O4", q: "Uma lista de suplentes serve para:", options: ["Despedir voluntários", "Relatórios de subsídios", "Guardar horários antigos", "Ligar quando alguém cancela um turno importante"], answer: 3, why: "Os suplentes mantêm os turnos importantes cobertos." },
      { objective: "O4", q: "Um voluntário tem dificuldades na introdução de dados, mas adora falar com pessoas. Você pode:", options: ["Ignorar", "Envergonhá-lo em público", "Falar com ele em privado e oferecer uma função na receção", "Retirá-lo sem dizer nada"], answer: 2, why: "Uma função que sirva melhor resolve muitas vezes o problema." },
      { objective: "O5", q: "Qual é uma razão comum para os voluntários deixarem de vir?", options: ["Agradeceram-lhes demais", "Sentiram-se desnecessários ou nunca lhes agradeceram", "Os turnos estavam bem organizados", "Tiveram uma formação clara"], answer: 1, why: "Sentir-se desnecessário ou sem agradecimento afasta as pessoas." },
      { objective: "O5", q: "Quando partilha histórias do impacto sobre as pessoas que serve, deve:", options: ["Pedir a autorização delas", "Usar os nomes completos sem perguntar", "Inventar detalhes", "Partilhar a morada de casa delas"], answer: 0, why: "O respeito e a privacidade vêm primeiro." },
      { objective: "O5", q: "Um voluntário de longa data quer crescer. Você pode:", options: ["Mantê-lo na mesma tarefa para sempre", "Pedir-lhe que saia", "Dar-lhe só mais limpeza", "Convidá-lo a formar novos voluntários ou a chefiar um turno"], answer: 3, why: "As funções para crescer mantêm os voluntários dedicados envolvidos." },
      { objective: "O6", q: "O registo de entrada de um voluntário deve incluir:", options: ["Os seus dados bancários", "Nome, data, hora de entrada e de saída, e função", "A sua palavra-passe", "Só uma assinatura"], answer: 1, why: "Este básico deixa você somar as horas com exatidão." },
      { objective: "O6", q: "Um voluntário pergunta se pode deduzir a gasolina que gasta para ir fazer voluntariado. Você deve:", options: ["Dizer que sim, qualquer valor", "Dizer que é ilegal", "Encaminhá-lo para a Publicação 526 do IRS e um profissional de impostos", "Ignorar a pergunta"], answer: 2, why: "Algumas despesas do próprio bolso podem ser dedutíveis; ele deve confirmar na fonte oficial." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 6, 8, 11, 12, 14, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Descrição de função", objective: "O1", notYet: "Falta o tempo, as tarefas ou a quem respondem.", meets: "As cinco partes, a começar pelo impacto.", exceeds: "Também oferece uma opção curta e flexível para quem tem menos tempo." },
      { name: "Recrutamento e avaliação", objective: "O2", notYet: "Nenhuma avaliação, ou uma função com crianças ou adultos vulneráveis não tem verificação de antecedentes.", meets: "Uma mensagem de recrutamento e uma avaliação ajustada ao risco da função, com autorização escrita para as verificações.", exceeds: "Também acrescenta regras de segurança e indica que se deve confirmar com a seguradora e um advogado." },
      { name: "Acolhimento e formação", objective: "O3", notYet: "Nenhum plano de acolhimento, ou faltam a segurança e a privacidade.", meets: "Um plano de 30 minutos com tempos, que cobre a segurança, a privacidade, o registo de entrada e o cancelamento, e ainda explicar, mostrar, experimentar, dar comentários.", exceeds: "Também inclui um colega e uma conversa depois do primeiro turno." },
      { name: "Horário e supervisão", objective: "O4", notYet: "Os turnos não têm chefe ou não há suplentes.", meets: "Um horário de um mês com um chefe de turno indicado, dois suplentes e uma mensagem de lembrete.", exceeds: "Também diz como os voluntários cancelam e quem resolve os problemas." },
      { name: "Reconhecimento e horas", objective: "O5", notYet: "Nenhum plano de agradecimento ou nenhuma forma de registar as horas.", meets: "Uma ideia de reconhecimento pequena e uma maior, e uma folha de presenças com nome, data, entrada, saída, horas e função.", exceeds: "Também diz como os totais de horas vão ser usados nos relatórios e nos agradecimentos." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Voluntários ainda ativos 90 dias depois do primeiro turno, comparado com antes do curso",
      "Funções com crianças ou adultos vulneráveis que têm a avaliação e as regras de segurança documentadas",
      "Total de horas de voluntariado registadas e comunicadas à direção ou nos relatórios de subsídios"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou telefone com uma folha de cálculo ou ferramenta de inscrição gratuita, ou papel",
      "Uma função de voluntário real para planear",
      "Papel ou um documento para o kit de voluntários",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada aluno que monte o kit para uma função real na sua própria organização, para que fique pronto a usar.",
      "Para funções com crianças ou adultos vulneráveis, insista na avaliação e nas regras de segurança, e diga aos alunos para confirmarem as exigências com a seguradora e um advogado.",
      "Lembre aos alunos que não recolham mais informações sobre os voluntários do que precisam e que mantenham os registos privados.",
      "Junte os alunos em pares para trocarem e reverem as descrições de funções e os planos de acolhimento um do outro.",
      "Avalie o kit com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
