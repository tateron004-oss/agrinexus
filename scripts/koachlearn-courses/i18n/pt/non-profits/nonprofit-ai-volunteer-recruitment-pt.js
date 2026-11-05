"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-ai-volunteer-recruitment.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-ai-volunteer-recruitment-pt",
  lang: "pt",
  translationOf: "nonprofit-ai-volunteer-recruitment",
  category: "Non Profits",
  name: "Recrutar Voluntários com IA",
  skills: "Escrever a descrição de uma função de voluntário, Preparar publicações de recrutamento, Criar um formulário de inscrição, Escrever mensagens de boas-vindas e lembretes, Fazer os voluntários voltarem",
  outcome: "usar um assistente de IA gratuito para escrever uma descrição clara de uma função de voluntário, uma publicação de recrutamento e uma mensagem de boas-vindas, criar um formulário de inscrição simples e planear como vai agradecer e manter os voluntários que recrutar.",
  about: [
    "Este curso é para funcionários de organizações sem fins lucrativos e de organizações religiosas, e para coordenadores de voluntários, que precisam de mais ajudantes para programas como bancos alimentares, explicações escolares, eventos, limpezas e mentoria.",
    "Você vai usar um assistente de IA (como o ChatGPT, o Microsoft Copilot ou o Google Gemini) para escrever os textos, e ferramentas gratuitas como o Google Forms ou o Microsoft Forms para receber as inscrições. Quem manda em cada mensagem é você, e os dados pessoais dos voluntários ficam fora da IA.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Prepare um kit completo de recrutamento para uma função de voluntário verdadeira: uma descrição da função, uma publicação nas redes sociais, um e-mail para os apoiantes, um formulário de inscrição com poucas perguntas simples, uma mensagem de boas-vindas e um lembrete de uma semana, e um pequeno plano de agradecimento. Use a IA para fazer os rascunhos, depois reveja cada parte com as suas palavras e verifique todas as datas e detalhes.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Funcionários de organizações sem fins lucrativos e de organizações religiosas, e coordenadores de voluntários, que precisam de mais ajudantes para programas como bancos alimentares, explicações escolares, eventos, limpezas e mentoria.",
    startingPoint: "Recrutam pedindo sempre às mesmas poucas pessoas, muitas vezes com uma mensagem geral do tipo \"precisamos de ajuda\". Alguns usam e-mail e redes sociais; poucos já escreveram descrições de funções, criaram formulários de inscrição ou planearam como manter os voluntários.",
    gap: "Pedidos vagos recebem poucas respostas, e os voluntários novos que se sentem perdidos não voltam. Os coordenadores precisam de um kit claro, que possam usar sempre, para recrutar, receber e manter voluntários, usando a IA para escrever rascunhos depressa e protegendo os dados dos voluntários.",
    constraints: [
      "Tempo: os coordenadores têm muitas tarefas, por isso cada lição dura cerca de 5 minutos",
      "Privacidade: nada de números da Segurança Social nem datas de nascimento em formulários simples; os dados dos voluntários ficam na ferramenta de formulários, não na IA",
      "As verificações de antecedentes para funções com crianças ou pessoas vulneráveis seguem o processo aprovado pela organização",
      "As histórias precisam de autorização ou têm de ser inventadas",
      "Ferramentas gratuitas como o Google Forms ou o Microsoft Forms"
    ],
    prerequisites: "\"Introdução à IA para Organizações sem Fins Lucrativos\", ou alguma experiência com um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os dados de uma função de voluntário", action: "escrever uma descrição da função que diga o quê, quando, onde, porquê, que verificações são precisas e com quem falar", standard: "com todos os dados verificados e os seus contactos acrescentados" },
    { id: "O2", condition: "Com a sua descrição da função", action: "escrever com a IA uma publicação curta para as redes sociais e um e-mail para os apoiantes", standard: "cada um com um único apelo à ação e só com histórias inventadas ou autorizadas" },
    { id: "O3", condition: "Para a sua comunidade", action: "fazer a lista de novos lugares onde encontrar voluntários e de formas de tornar a função mais fácil de aceitar", standard: "verificando que cada grupo ou site existe antes de o contactar" },
    { id: "O4", condition: "Usando o Google Forms ou o Microsoft Forms", action: "criar um formulário de inscrição curto que pergunte só o que precisa", standard: "sem pedir dados sensíveis e depois de você mesmo o testar" },
    { id: "O5", condition: "Para um voluntário novo", action: "escrever uma mensagem de boas-vindas e um lembrete com marcadores", standard: "com data, hora, lugar, o que levar e uma pessoa de contacto" },
    { id: "O6", condition: "Para os voluntários que recrutar", action: "planear como vai agradecer-lhes, partilhar os resultados e pedir a opinião deles", standard: "com as datas marcadas no seu calendário" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar os voluntários certos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever uma descrição clara da função de voluntário",
          minutes: 5,
          goal: "Escrever uma descrição da função que diga ao voluntário exatamente o quê, quando, onde e porquê.",
          text: [
            "As pessoas dizem que sim quando sabem exatamente para o que se estão a inscrever. Um pedido vago como \"Precisamos de ajuda!\" recebe poucas respostas. Uma função clara recebe mais.",
            "Uma boa descrição da função responde a: O que vou fazer? Quando e durante quanto tempo? Onde? Que habilidades ou verificações são precisas (por exemplo, uma verificação de antecedentes para trabalhar com crianças)? Porque é importante? Com quem falo?",
            "Dê os dados à IA e peça-lhe para os escrever. Por exemplo: \"Escreva uma descrição curta de uma função de voluntário para ajudante no banco alimentar ao sábado, das 9 da manhã ao meio-dia, duas vezes por mês, a levantar até 20 libras, sem experiência necessária. Calorosa e clara, com menos de 150 palavras.\""
          ],
          steps: ["Escreva as tarefas, o horário, o lugar e os requisitos.", "Escreva uma frase sobre porque a função é importante.", "Peça à IA para transformar as suas notas numa descrição curta da função.", "Verifique todos os dados e acrescente você mesmo os seus contactos."],
          words: [["Descrição da função", "um texto curto sobre um trabalho de voluntário: tarefas, horário, lugar, requisitos e objetivo."], ["Verificação de antecedentes", "uma verificação do registo de uma pessoa, muitas vezes exigida para trabalhar com crianças ou pessoas vulneráveis."]],
          slides: [
            { title: "Pedidos claros recebem mais sins", bullets: ["\"Precisamos de ajuda!\" é vago demais", "Diga exatamente o quê, quando e onde"] },
            { title: "A descrição da função responde a", bullets: ["O que vou fazer? Quando e durante quanto tempo?", "Onde? Que habilidades ou verificações?", "Porque é importante? Com quem falo?"] },
            { title: "Deixe a IA escrever", bullets: ["Dê-lhe os seus dados", "Peça um texto caloroso, claro e curto", "Verifique você mesmo cada detalhe"] }
          ],
          tryIt: "Escolha uma função de voluntário verdadeira de que a sua organização precisa. Escreva os dados, peça à IA uma descrição da função com menos de 150 palavras e corrija o que estiver errado.",
          youCanNow: "escrever uma descrição clara de uma função de voluntário com a ajuda da IA.",
          quickCheck: [
            { objective: "O1", q: "Porque é que uma descrição clara da função recebe mais respostas?", options: ["As pessoas dizem que sim quando sabem exatamente para o que se estão a inscrever", "É mais comprida", "Usa mais pontos de exclamação", "Esconde o tempo necessário"], answer: 0, why: "Um pedido vago recebe poucas respostas; uma função clara recebe mais." },
            { objective: "O1", q: "A sua função de explicações escolares é com crianças. O que a descrição tem de dizer?", options: ["Nada a mais", "Que é precisa uma verificação de antecedentes", "Os nomes das crianças", "As notas escolares das crianças"], answer: 1, why: "A descrição da função diz que verificações são precisas, como uma verificação de antecedentes para trabalhar com crianças." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Preparar publicações e e-mails de recrutamento",
          minutes: 5,
          goal: "Transformar uma descrição da função numa publicação para as redes sociais e num e-mail para os apoiantes.",
          text: [
            "Lugares diferentes pedem tamanhos diferentes. Uma publicação nas redes sociais é curta e simpática, com uma única ação clara. Um e-mail para os apoiantes pode contar uma pequena história e dar mais detalhes.",
            "Peça os dois à IA a partir da mesma descrição: \"Usando esta descrição da função, escreva uma publicação de 50 palavras para o Facebook com um apelo à ação, e um e-mail de 150 palavras para os nossos apoiantes que comece com uma pequena história sobre uma família que apoiamos.\" Use uma história inventada ou autorizada, nunca os dados privados de uma pessoa verdadeira sem autorização.",
            "Peça algumas versões e escolha a que soa mais como você. Acrescente você mesmo o link de inscrição verdadeiro."
          ],
          steps: ["Cole a sua descrição da função na IA.", "Peça uma publicação curta com um apelo à ação.", "Peça um e-mail mais comprido para os apoiantes.", "Peça duas versões de cada um e escolha uma.", "Acrescente o seu link de inscrição verdadeiro e verifique os detalhes."],
          words: [["Apelo à ação", "a única coisa que pede ao leitor para fazer, como \"Inscreva-se aqui\"."], ["Apoiantes", "pessoas que já conhecem e gostam da sua organização: doadores, membros, antigos voluntários."]],
          slides: [
            { title: "A mensagem certa para cada lugar", bullets: ["Publicação: curta, uma ação", "E-mail: uma pequena história e mais detalhes"] },
            { title: "Peça os dois à IA", bullets: ["Cole a descrição da função", "Peça a publicação e o e-mail", "Peça duas versões de cada um"] },
            { title: "Antes de publicar", bullets: ["Escolha a que soa como você", "Acrescente o link de inscrição verdadeiro", "Nada de histórias privadas sem autorização"] }
          ],
          tryIt: "Use a sua descrição da função da Lição 1 para obter uma publicação de 50 palavras e um e-mail de 150 palavras para os apoiantes. Escolha a melhor versão de cada um e reveja-a.",
          youCanNow: "criar publicações e e-mails de recrutamento para públicos diferentes a partir de uma só descrição da função.",
          quickCheck: [
            { objective: "O2", q: "Qual é mais comprido e pode contar uma pequena história?", options: ["Uma publicação nas redes sociais", "Um lembrete por SMS", "Um e-mail para os apoiantes", "Uma pergunta de formulário"], answer: 2, why: "A publicação é curta; o e-mail para os apoiantes pode contar uma história e dar mais detalhes." },
            { objective: "O2", q: "A publicação da IA não tem link de inscrição. O que faz?", options: ["Publica na mesma", "Pede à IA para inventar um link", "Tira o apelo à ação", "Acrescenta você mesmo o link de inscrição verdadeiro"], answer: 3, why: "Acrescente você mesmo o link de inscrição verdadeiro." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Chegar a novos tipos de voluntários",
          minutes: 5,
          goal: "Usar a IA para ter ideias sobre onde encontrar voluntários e como tornar as funções mais fáceis de aceitar.",
          text: [
            "Muitas organizações pedem sempre às mesmas poucas pessoas. A IA é boa a dar ideias de novos lugares onde procurar: universidades e escolas secundárias que exigem horas de serviço comunitário, empresas com dias de voluntariado, comunidades religiosas, centros de idosos e sites de anúncios de voluntariado na internet.",
            "Pergunte à IA: \"Faça uma lista de 10 lugares numa cidade de tamanho médio para recrutar voluntários para o banco alimentar ao fim de semana, e uma frase para dizer a cada um.\" Verifique que cada grupo ou site que ela indica existe mesmo antes de o contactar.",
            "Pergunte também como tornar as funções mais fáceis de aceitar: turnos mais curtos, funções para fazer em família, tarefas à distância como fazer chamadas ou escrever cartões, e materiais nas línguas que a sua comunidade fala."
          ],
          steps: ["Peça à IA uma lista de lugares onde encontrar voluntários.", "Peça uma frase para dizer a cada um.", "Verifique que cada lugar ou site existe mesmo.", "Pergunte como tornar a função mais fácil de aceitar.", "Escolha os três melhores lugares para experimentar."],
          words: [["Horas de serviço comunitário", "horas de voluntariado que as escolas ou programas pedem aos alunos para cumprir."], ["Tarefa à distância", "trabalho de voluntário feito a partir de casa, como chamadas, cartões ou ajuda pela internet."]],
          slides: [
            { title: "Vá além das mesmas poucas pessoas", bullets: ["Escolas e universidades", "Empresas com dias de voluntariado", "Comunidades religiosas e centros de idosos"] },
            { title: "Ter ideias com a IA", bullets: ["Peça 10 lugares e o que dizer", "Verifique que cada lugar existe"] },
            { title: "Torne o sim mais fácil", bullets: ["Turnos mais curtos", "Funções em família e à distância", "As línguas da sua comunidade"] }
          ],
          tryIt: "Peça à IA 10 lugares para recrutar voluntários para a sua função na sua zona. Verifique-os, depois escolha os três melhores e escreva com quem vai falar.",
          youCanNow: "encontrar novas fontes de voluntários e tornar as funções mais fáceis de aceitar.",
          quickCheck: [
            { objective: "O3", q: "Qual é uma tarefa à distância que torna a função mais fácil de aceitar?", options: ["Fazer chamadas ou escrever cartões", "Levantar caixas ao sábado", "Conduzir a carrinha das entregas", "Gerir o palco do evento"], answer: 0, why: "Tarefas à distância, como fazer chamadas ou escrever cartões, são mais fáceis de aceitar." },
            { objective: "O3", q: "Muitas famílias que apoia falam espanhol, e você quer que elas também sejam voluntárias. O que ajuda?", options: ["Publicar só em inglês", "Oferecer materiais nas línguas que a sua comunidade fala", "Pedir à IA para escolher os voluntários", "Exigir turnos longos"], answer: 1, why: "Materiais nas línguas da sua comunidade tornam as funções mais fáceis de aceitar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar os voluntários certos",
        questions: [
          { objective: "O1", q: "Que pedido de voluntários deve receber mais respostas?", options: ["\"Precisamos de ajuda!\"", "\"Procuram-se voluntários, detalhes depois.\"", "\"Ajudante no banco alimentar, aos sábados das 9 ao meio-dia, duas vezes por mês, sem experiência necessária.\"", "\"Alguém?\""], answer: 2, why: "Uma função clara diz o quê, quando e onde." },
          { objective: "O2", q: "O que é um apelo à ação?", options: ["A única coisa que pede ao leitor para fazer", "Uma chamada telefónica a um voluntário", "Um tipo de IA", "Uma reunião da direção"], answer: 0, why: "Diz ao leitor qual é o passo seguinte, como \"Inscreva-se aqui\"." },
          { objective: "O3", q: "A IA sugere um grupo local de voluntários de que nunca ouviu falar. O que faz?", options: ["Contacta-os logo com a sua lista de voluntários", "Põe-no no seu site", "Assume que existe", "Verifica que existe antes de o contactar"], answer: 3, why: "A IA pode inventar nomes; verifique primeiro." },
          { objective: "O3", q: "Qual é uma forma de tornar uma função mais fácil de aceitar?", options: ["Só turnos mais longos", "Oferecer turnos mais curtos e tarefas à distância", "Exigir dez anos de experiência", "Aceitar só quem já é voluntário"], answer: 1, why: "Funções flexíveis deixam mais pessoas dizer que sim." },
          { objective: "O2", q: "Quer uma história no seu e-mail para os apoiantes. O que é seguro?", options: ["O nome e a situação de um utente verdadeiro sem autorização", "Uma história inventada ou autorizada", "A morada de casa de um voluntário", "O valor da doação de um doador"], answer: 1, why: "Nunca partilhe os dados privados de pessoas verdadeiras sem autorização." }
        ]
      }
    },
    {
      name: "Capítulo 2: Inscrever, receber e manter os voluntários",
      lessons: [
        {
          objectives: ["O4"],
          title: "Criar um formulário de inscrição simples",
          minutes: 5,
          goal: "Criar um formulário de inscrição curto na internet e perguntar só o que precisa.",
          text: [
            "Uma ferramenta de formulários gratuita, como o Google Forms ou o Microsoft Forms, deixa as pessoas inscreverem-se a partir de um link. As respostas vão para uma folha de cálculo que só você controla.",
            "Pergunte só o que precisa: nome, e-mail ou telefone, que turnos a pessoa pode fazer e o que tem mesmo de saber (como as línguas que fala). Não peça números da Segurança Social, datas de nascimento nem outros dados sensíveis num formulário simples. Se for precisa uma verificação de antecedentes, use o processo aprovado pela sua organização.",
            "A IA pode sugerir perguntas e palavras: \"Sugira 6 perguntas curtas para um formulário de inscrição de voluntários para um banco alimentar.\" Quem cria o formulário é você, e as respostas ficam na sua ferramenta de formulários, não na IA."
          ],
          steps: ["Abra o Google Forms ou o Microsoft Forms e comece um formulário em branco.", "Peça à IA para sugerir perguntas curtas.", "Fique só com o que precisa mesmo.", "Ponha as opções de turnos como caixas de seleção.", "Teste você mesmo o formulário e depois copie o link para partilhar."],
          words: [["Formulário", "um conjunto de perguntas na internet que as pessoas preenchem; as respostas ficam guardadas para você."], ["Dados sensíveis", "informações que podem prejudicar alguém se forem partilhadas, como números de identificação ou dados de saúde."]],
          slides: [
            { title: "Ferramentas de formulários gratuitas", bullets: ["Google Forms ou Microsoft Forms", "As pessoas inscrevem-se a partir de um link", "As respostas vão para uma folha de cálculo sua"] },
            { title: "Pergunte só o que precisa", bullets: ["Nome e como contactar a pessoa", "Que turnos pode fazer", "Nada de números de identificação nem datas de nascimento"] },
            { title: "O papel da IA", bullets: ["Sugerir perguntas e palavras", "Quem cria o formulário é você", "As respostas nunca vão para a IA"] }
          ],
          tryIt: "Crie um formulário de inscrição para a sua função com seis perguntas no máximo. Preencha-o você mesmo para o testar e copie o link para a sua publicação de recrutamento.",
          youCanNow: "criar um formulário de inscrição de voluntários curto e seguro.",
          quickCheck: [
            { objective: "O4", q: "Para onde vão as respostas de inscrição numa ferramenta de formulários gratuita?", options: ["Para o assistente de IA", "Para a sua página nas redes sociais", "Para uma folha de cálculo que você controla", "Para todos os voluntários"], answer: 2, why: "As respostas vão para uma folha de cálculo que você controla." },
            { objective: "O4", q: "A função precisa de uma verificação de antecedentes. O que faz?", options: ["Acrescenta o número da Segurança Social ao formulário simples", "Pede a data de nascimento no formulário", "Não faz a verificação", "Usa o processo de verificação de antecedentes aprovado pela sua organização"], answer: 3, why: "Não recolha dados sensíveis num formulário simples; use o processo aprovado." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mensagens de boas-vindas e lembretes",
          minutes: 4,
          goal: "Escrever uma mensagem de boas-vindas e um lembrete que deixem os voluntários novos preparados.",
          text: [
            "Os primeiros dias decidem se um voluntário novo volta. Umas boas-vindas rápidas fazem as pessoas sentir-se queridas e preparadas.",
            "Uma boa mensagem de boas-vindas agradece, confirma a data, a hora e o lugar, diz o que vestir ou levar, indica uma pessoa de contacto e explica como vai ser o primeiro turno. Um lembrete alguns dias antes repete os detalhes principais.",
            "Peça as duas mensagens à IA, usando marcadores: \"Escreva um e-mail caloroso de boas-vindas para um voluntário novo do banco alimentar. Use [nome], [data do turno], [pessoa de contacto]. Menos de 120 palavras.\" Depois preencha os detalhes na sua ferramenta de e-mail ou com a união de correio, não na IA."
          ],
          steps: ["Faça a lista do que um voluntário novo precisa de saber.", "Peça à IA uma mensagem de boas-vindas com marcadores.", "Peça à IA um lembrete curto para alguns dias antes.", "Preencha os detalhes na sua ferramenta de e-mail.", "Verifique todas as datas e horas."],
          words: [["Integração", "ajudar um voluntário novo a ficar preparado: boas-vindas, formação e primeiro turno."], ["Marcador", "um texto como [nome] que depois substitui pelo dado verdadeiro."]],
          slides: [
            { title: "Os primeiros dias contam", bullets: ["Umas boas-vindas calorosas fazem as pessoas voltar"] },
            { title: "Umas boas boas-vindas dizem", bullets: ["Obrigado", "Data, hora e lugar", "O que vestir ou levar", "Com quem falar"] },
            { title: "Rascunho com marcadores", bullets: ["[nome], [data do turno], [pessoa de contacto]", "Preencha os detalhes na sua ferramenta de e-mail", "Envie um lembrete alguns dias antes"] }
          ],
          tryIt: "Peça à IA um e-mail de boas-vindas e um lembrete por SMS com marcadores para a sua função. Reveja os dois para soarem como a sua organização.",
          youCanNow: "escrever mensagens de boas-vindas e lembretes que ajudam os voluntários novos a chegar preparados.",
          quickCheck: [
            { objective: "O5", q: "O que decide se um voluntário novo volta?", options: ["Os primeiros dias", "O tamanho do formulário", "A cor do folheto", "Quantos hashtags usou"], answer: 0, why: "Os primeiros dias decidem se um voluntário novo volta." },
            { objective: "O5", q: "Um voluntário novo começa no sábado e ainda não teve notícias suas. O que envia primeiro?", options: ["Nada até sábado", "Umas boas-vindas calorosas com data, hora, lugar, o que levar e um contacto", "Um pedido de doação", "Um manual de regras comprido"], answer: 1, why: "Umas boas boas-vindas confirmam os detalhes e indicam um contacto, para a pessoa se sentir preparada." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Agradecer e manter os voluntários",
          minutes: 5,
          goal: "Fazer um plano simples para agradecer aos voluntários e saber porque ficam ou saem.",
          text: [
            "Manter um voluntário é mais fácil do que encontrar um novo. As pessoas ficam quando se sentem agradecidas, úteis e parte de uma equipa.",
            "Formas simples de agradecer: uma nota pessoal depois do primeiro turno, partilhar o que o trabalho delas tornou possível (\"A equipa de sábado embalou 300 caixas\"), um reconhecimento num encontro e pedir as ideias delas. A IA pode ajudar a escrever notas de agradecimento e pequenos inquéritos, como três perguntas sobre o que correu bem e o que mudar.",
            "Escreva um plano curto: quando vai agradecer, como vai partilhar os resultados e quando vai pedir a opinião das pessoas. Depois ponha-o no seu calendário."
          ],
          steps: ["Planeie um agradecimento depois do primeiro turno.", "Planeie como vai partilhar os resultados com os voluntários.", "Peça à IA o rascunho de um inquérito de opinião com três perguntas.", "Ponha as datas do agradecimento e do inquérito no seu calendário."],
          words: [["Retenção", "fazer os voluntários continuarem a voltar ao longo do tempo."], ["Inquérito de opinião", "algumas perguntas que pedem às pessoas o que correu bem e o que mudar."]],
          slides: [
            { title: "Porque as pessoas ficam", bullets: ["Sentem-se agradecidas", "Sentem-se úteis", "Sentem-se parte de uma equipa"] },
            { title: "Formas de agradecer", bullets: ["Uma nota depois do primeiro turno", "Partilhe resultados: \"embalámos 300 caixas\"", "Reconhecimento e pedir as ideias delas"] },
            { title: "O seu plano para manter", bullets: ["Quando vai agradecer", "Como vai partilhar os resultados", "Quando vai pedir a opinião"] }
          ],
          tryIt: "Tarefa final: junte o seu kit completo de recrutamento: descrição da função, publicação, e-mail, formulário de inscrição, mensagem de boas-vindas, lembrete e plano de agradecimento. Reveja cada parte e verifique cada detalhe.",
          youCanNow: "recrutar, receber e manter voluntários com mensagens escritas com a IA que você verificou e tornou suas.",
          quickCheck: [
            { objective: "O6", q: "Qual é uma forma simples de agradecer aos voluntários?", options: ["Pedir-lhes para recrutar cinco amigos", "Enviar-lhes uma conta pelos materiais", "Partilhar o que o trabalho deles tornou possível", "Dar-lhes mais turnos sem perguntar"], answer: 2, why: "Partilhar resultados, como as caixas embaladas, mostra aos voluntários que o trabalho deles conta." },
            { objective: "O6", q: "Escreveu um plano de agradecimento mas esquece-se sempre dele. O que faz?", options: ["Desiste do plano", "Pede à IA para se lembrar dele", "Agradece às pessoas só uma vez por ano", "Põe cada passo no seu calendário com datas"], answer: 3, why: "Escreva o plano e ponha-o no seu calendário." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Inscrever, receber e manter os voluntários",
        questions: [
          { objective: "O4", q: "Que pergunta NÃO deve estar num formulário simples de inscrição de voluntários?", options: ["Que turnos pode fazer?", "O seu e-mail ou telefone", "Línguas que fala", "O seu número da Segurança Social"], answer: 3, why: "Números de identificação sensíveis não devem estar num formulário simples." },
          { objective: "O4", q: "Onde devem ficar as respostas dos voluntários ao formulário?", options: ["Na sua ferramenta de formulários e na folha de cálculo", "Coladas numa conversa com a IA", "Publicadas na internet", "Numa conversa de grupo por SMS"], answer: 0, why: "Os dados pessoais ficam nas ferramentas que você controla, não na IA." },
          { objective: "O5", q: "Uma boa mensagem de boas-vindas inclui:", options: ["Só um logótipo", "Um pedido de dinheiro", "Data, hora, lugar e uma pessoa de contacto", "Só \"Obrigado\""], answer: 2, why: "Detalhes claros ajudam os voluntários novos a chegar preparados." },
          { objective: "O5", q: "Quando deve enviar um lembrete?", options: ["Um mês depois do turno", "Nunca", "Só se a pessoa faltar", "Alguns dias antes do turno"], answer: 3, why: "Um lembrete pouco antes ajuda as pessoas a lembrar-se." },
          { objective: "O6", q: "O que ajuda os voluntários a continuarem a voltar?", options: ["Nunca falar com eles", "Turnos mais longos sem pausas", "Partilhar o que o trabalho deles tornou possível", "Ignorar as ideias deles"], answer: 2, why: "As pessoas ficam quando veem o resultado do seu trabalho e se sentem agradecidas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Recrutar Voluntários com IA",
    questions: [
      { objective: "O1", q: "Uma descrição clara da função responde a:", options: ["Só o nome da organização", "O quê, quando, onde, porquê e com quem falar", "O salário do diretor", "Nada em concreto"], answer: 1, why: "Detalhes claros ajudam as pessoas a dizer que sim." },
      { objective: "O1", q: "Quando é que muitas vezes é precisa uma verificação de antecedentes?", options: ["Para funções com crianças ou pessoas vulneráveis", "Para cada e-mail", "Nunca", "Só para doadores"], answer: 0, why: "As organizações muitas vezes exigem verificações para funções com crianças ou pessoas vulneráveis." },
      { objective: "O1", q: "O que dá à IA para escrever uma descrição da função?", options: ["Os números de telefone dos voluntários", "A sua palavra-passe", "Os dados da função", "Nada"], answer: 2, why: "A IA escreve a partir dos dados que você lhe dá." },
      { objective: "O1", q: "Depois de a IA escrever o rascunho de uma descrição da função, você:", options: ["Verifica todos os dados e acrescenta os seus contactos", "Publica sem ler", "Acrescenta a morada de um voluntário", "Apaga-o"], answer: 0, why: "Quem responde pela exatidão é você." },
      { objective: "O2", q: "Uma publicação de recrutamento nas redes sociais deve ser:", options: ["Com dez páginas", "Cheia de histórias privadas", "Sem link", "Curta, com uma única ação clara"], answer: 3, why: "Publicações curtas com uma única ação funcionam melhor." },
      { objective: "O2", q: "Um e-mail para os apoiantes pode:", options: ["Incluir os valores das doações dos doadores", "Contar uma pequena história e dar mais detalhes", "Fazer a lista dos nomes dos utentes", "Não ter o link de inscrição"], answer: 1, why: "O e-mail dá mais espaço para uma história e para detalhes." },
      { objective: "O2", q: "Porque pedir duas versões à IA?", options: ["Para usar o dobro dos dados", "Para escolher a que soa mais como você", "A IA exige isso", "Para confundir os leitores"], answer: 1, why: "Comparar versões ajuda a escolher a sua maneira de falar." },
      { objective: "O3", q: "Qual é um bom lugar novo para encontrar voluntários?", options: ["Só as mesmas cinco pessoas", "A lista de telefones privada de um desconhecido", "Uma lista de e-mails de spam", "Uma escola secundária local que exige horas de serviço comunitário"], answer: 3, why: "Os alunos muitas vezes precisam de horas de serviço comunitário." },
      { objective: "O3", q: "A IA indica um site de voluntariado que você não conhece. Deve:", options: ["Verificar primeiro que existe", "Enviar-lhe a sua lista de voluntários", "Pagar-lhe logo", "Confiar nele"], answer: 0, why: "A IA pode inventar nomes e sites." },
      { objective: "O3", q: "O que torna uma função mais fácil de aceitar?", options: ["Um turno de 12 horas", "Regras rígidas de experiência", "Uma tarefa à distância, como escrever cartões", "Materiais só em inglês numa zona onde se fala espanhol"], answer: 2, why: "Tarefas à distância e flexíveis servem para mais pessoas." },
      { objective: "O4", q: "Que ferramentas gratuitas podem criar um formulário de inscrição?", options: ["Uma calculadora", "Uma aplicação de fotos", "Uma aplicação de música", "O Google Forms ou o Microsoft Forms"], answer: 3, why: "Os dois criam formulários na internet que guardam as respostas." },
      { objective: "O4", q: "Num formulário de inscrição simples, pergunte:", options: ["Todos os detalhes de que se lembrar", "Dados bancários", "Só o que precisa mesmo", "Datas de nascimento e números de identificação"], answer: 2, why: "Menos dados quer dizer menos risco e inscrições mais rápidas." },
      { objective: "O4", q: "O papel da IA na criação de um formulário é:", options: ["Guardar as respostas dos voluntários", "Sugerir perguntas e palavras", "Fazer verificações de antecedentes", "Aprovar voluntários"], answer: 1, why: "Quem cria o formulário é você; as respostas ficam na sua ferramenta." },
      { objective: "O4", q: "Antes de partilhar o link do seu formulário, deve:", options: ["Preenchê-lo você mesmo para o testar", "Apagar metade das perguntas ao acaso", "Esconder o link", "Pedir à IA para o preencher"], answer: 0, why: "Testar encontra os erros antes de os voluntários os verem." },
      { objective: "O5", q: "Integração quer dizer:", options: ["Afastar voluntários", "Comprar um barco", "Ajudar um voluntário novo a ficar preparado", "Escrever um pedido de financiamento"], answer: 2, why: "A integração inclui as boas-vindas, a formação e o primeiro turno." },
      { objective: "O5", q: "Como deve aparecer o nome de um voluntário num pedido à IA para um e-mail de boas-vindas?", options: ["Como [nome], preenchido depois", "Nome completo e morada", "Nome e número de telefone", "Nome e data de nascimento"], answer: 0, why: "Os marcadores mantêm os dados pessoais fora da IA." },
      { objective: "O5", q: "Onde preenche os detalhes verdadeiros dos e-mails de boas-vindas?", options: ["Na conversa com a IA", "Numa publicação pública", "Num ecrã partilhado numa biblioteca", "Na sua ferramenta de e-mail ou com a união de correio"], answer: 3, why: "Os dados verdadeiros ficam nas ferramentas que você controla." },
      { objective: "O6", q: "Porque é que os voluntários ficam?", options: ["Nunca ninguém fala com eles", "Sentem-se agradecidos, úteis e parte de uma equipa", "Não têm escolha", "Os turnos ficam mais longos"], answer: 1, why: "O reconhecimento e o sentido do trabalho fazem as pessoas voltar." },
      { objective: "O6", q: "Um pequeno inquérito de opinião deve perguntar:", options: ["A conta bancária da pessoa", "O que correu bem e o que mudar", "O historial médico da pessoa", "A palavra-passe da pessoa"], answer: 1, why: "A opinião das pessoas ajuda a melhorar a experiência." },
      { objective: "O6", q: "O seu plano de agradecimento deve estar:", options: ["Só na sua cabeça", "Feito uma vez de cinco em cinco anos", "Entregue à IA para enviar", "No seu calendário, com datas"], answer: 3, why: "Marcar no calendário garante que acontece." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      7,
      11,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Descrição da função",
        objective: "O1",
        notYet: "Falta o quê, quando, onde, porquê ou com quem falar.",
        meets: "Responde a o quê, quando, onde, porquê, que verificações são precisas e com quem falar.",
        exceeds: "Curta, calorosa e verificada por alguém que conhece a função."
      },
      {
        name: "Publicação e e-mail",
        objective: "O2",
        notYet: "Não tem um apelo à ação claro, ou usa a história de uma pessoa verdadeira sem autorização.",
        meets: "Uma publicação curta e um e-mail para os apoiantes, cada um com uma única ação e o link de inscrição verdadeiro.",
        exceeds: "O aluno experimentou versões e escolheu a que soa mais como a organização."
      },
      {
        name: "Formulário de inscrição",
        objective: "O4",
        notYet: "Pede dados sensíveis ou não foi testado.",
        meets: "Poucas perguntas simples, só com o que é preciso, testado pelo aluno.",
        exceeds: "Pergunta pelas línguas ou pelas opções de turnos, o que ajuda a encaixar os voluntários."
      },
      {
        name: "Boas-vindas e lembrete",
        objective: "O5",
        notYet: "Falta a data, a hora, o lugar ou uma pessoa de contacto.",
        meets: "Boas-vindas e lembrete de uma semana com todos os detalhes principais, usando marcadores.",
        exceeds: "Diz como vai ser o primeiro turno e o que vestir ou levar."
      },
      {
        name: "Plano de agradecimento",
        objective: "O6",
        notYet: "Não há plano, ou não há datas.",
        meets: "Diz quando agradecer, como partilhar os resultados e quando pedir a opinião, com datas.",
        exceeds: "Inclui um pequeno inquérito de opinião sobre o que correu bem e o que mudar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Novas inscrições de voluntários para a função em 30 dias (inquérito de seguimento)",
      "Voluntários novos que voltam para um segundo turno",
      "Organizações que chegam a um novo grupo de voluntários, como alunos ou empresas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito e o Google Forms ou o Microsoft Forms",
      "Os dados de uma função de voluntário verdadeira",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada aluno para trazer uma função verdadeira que precisa de preencher.",
      "Peça aos alunos para preencherem os formulários de inscrição uns dos outros para os testar.",
      "Lembre aos alunos que não devem recolher números da Segurança Social nem datas de nascimento em formulários simples.",
      "Lembre aos alunos que devem verificar que cada grupo ou site sugerido pela IA existe antes de o contactar.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
