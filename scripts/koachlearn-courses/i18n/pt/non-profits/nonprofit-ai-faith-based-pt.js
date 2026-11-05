"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-ai-faith-based.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-ai-faith-based-pt",
  lang: "pt",
  translationOf: "nonprofit-ai-faith-based",
  category: "Non Profits",
  name: "IA para Organizações Religiosas",
  skills: "Definir regras básicas para a IA no ministério, Escrever rascunhos de avisos e boletins, Planear escalas de voluntários e eventos, Proteger a privacidade dos membros, Rever os rascunhos da IA quanto à fé e ao tom",
  outcome: "usar um assistente de IA gratuito para escrever o rascunho de um aviso semanal e de uma escala de voluntários para a sua congregação ou programa religioso, manter privadas as informações dos membros e rever cada rascunho para que esteja de acordo com a sua tradição de fé e a sua voz.",
  about: [
    "Este curso é para pastores, imãs, rabinos, líderes de ministério, funcionários da secretaria e voluntários de igrejas, mesquitas, templos, sinagogas e organizações sem fins lucrativos de base religiosa.",
    "Você vai aprender onde a IA pode poupar tempo no trabalho de secretaria do ministério (avisos, boletins, escalas, circulares, rascunhos de pedidos de financiamento) e onde não deve ser usada: no cuidado pastoral, nas conversas confidenciais e nas decisões sobre pessoas.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva uma nota de uma página \"Como usamos a IA\" para os líderes da sua congregação e depois use um assistente de IA para escrever o rascunho do aviso desta semana e de uma escala de voluntários com marcadores no lugar dos nomes. Reveja os dois rascunhos quanto à exatidão, à fé e ao tom, e assinale o que mudou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pastores, imãs, rabinos, líderes de ministério, funcionários da secretaria e voluntários de igrejas, mesquitas, templos, sinagogas e organizações sem fins lucrativos de base religiosa.",
    startingPoint: "Escrevem à mão, todas as semanas, os avisos, os boletins e as escalas de voluntários. Muitos já ouviram falar de IA mas nunca a usaram, e alguns preocupam-se com a privacidade e com a IA a errar em assuntos da sua fé.",
    gap: "A escrita da secretaria leva horas que os líderes prefeririam dar às pessoas. Os alunos precisam de usar a IA para rascunhos e planos, mantendo privados os pedidos de oração e as informações dos membros, e garantindo que cada rascunho está de acordo com a sua tradição, os factos e a sua voz.",
    constraints: [
      "Privacidade: nomes, pedidos de oração, registos de ofertas, saúde, dados de crianças e contactos nunca entram na IA",
      "O cuidado pastoral, o aconselhamento e as decisões sobre pessoas ficam com pessoas de confiança",
      "As escrituras e os ensinamentos são verificados nos próprios textos sagrados da congregação",
      "Aplicam-se as regras sobre atividade política para organizações isentas de impostos (IRS Publication 1828)",
      "Palavras simples; muitos voluntários são novos na tecnologia"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas do ministério", action: "separá-las em \"a IA pode fazer o rascunho\" e \"só pessoas\"", standard: "deixando com pessoas o cuidado pastoral, os pedidos de oração e as decisões sobre pessoas" },
    { id: "O2", condition: "Para os líderes da sua congregação", action: "escrever uma nota de uma página \"Como usamos a IA\" que responda às quatro perguntas das regras básicas", standard: "com palavras simples, pronta para a sua direção, anciãos ou conselho aprovarem" },
    { id: "O3", condition: "Com um pedido que contém informações de membros", action: "reescrevê-lo como um pedido seguro com marcadores", standard: "sem nomes, pedidos de oração, registos de ofertas, dados de saúde ou contactos" },
    { id: "O4", condition: "Com os eventos desta semana", action: "escrever um pedido claro e fazer o rascunho de um aviso semanal com a voz da sua congregação", standard: "com cada data, hora e lugar verificados por você" },
    { id: "O5", condition: "Com funções, datas e o número de pessoas de que cada uma precisa", action: "criar uma escala de voluntários com a IA usando marcadores no lugar dos nomes", standard: "com os nomes verdadeiros acrescentados só no seu próprio documento" },
    { id: "O6", condition: "Com um rascunho feito pela IA", action: "revê-lo quanto à fé, à exatidão e ao tom e corrigir o que não estiver bem", standard: "com as escrituras verificadas nos seus próprios textos sagrados antes de um revisor designado o aprovar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Usar a IA com sabedoria no ministério",
      lessons: [
        {
          objectives: ["O1"],
          title: "Onde a IA ajuda uma congregação, e onde não ajuda",
          minutes: 4,
          goal: "Separar as tarefas do ministério em \"a IA pode fazer o rascunho\" e \"só pessoas\".",
          text: [
            "Um assistente de IA, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, é um programa de computador com quem você conversa com palavras do dia a dia. Ele escreve rascunhos, listas e planos em segundos.",
            "Numa congregação, é útil para o trabalho de secretaria: avisos semanais, texto do boletim, circulares, planos de eventos, mensagens para inscrever voluntários, notas de agradecimento a doadores e primeiros rascunhos de pedidos de financiamento.",
            "Não deve substituir as pessoas no cuidado pastoral, nos pedidos de oração, no aconselhamento, na confissão, nos conflitos entre membros, nem nas decisões sobre quem serve ou quem recebe ajuda. Isso precisa de uma pessoa de confiança, não de um programa."
          ],
          words: [["Assistente de IA", "um programa de computador com quem você conversa, a escrever ou a falar; ele escreve respostas."], ["Cuidado pastoral", "o cuidado pessoal que um líder religioso dá aos membros: visitas, conselho, conforto e oração."]],
          slides: [
            { title: "A IA pode fazer rascunhos de", bullets: ["Avisos e boletins", "Circulares e planos de eventos", "Mensagens para voluntários e notas de agradecimento"] },
            { title: "Só pessoas", bullets: ["Cuidado pastoral e aconselhamento", "Pedidos de oração e conversas confidenciais", "Decisões sobre membros e sobre quem recebe ajuda"] },
            { title: "A regra prática", bullets: ["A IA ajuda com palavras e planos", "As pessoas tratam dos corações e das decisões"] }
          ],
          tryIt: "Faça uma lista de dez tarefas que a secretaria da sua congregação faz num mês. Marque cada uma com \"a IA pode fazer o rascunho\" ou \"só pessoas\".",
          youCanNow: "dizer em que tarefas do ministério a IA pode ajudar e quais têm de ficar com pessoas.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma boa tarefa de secretaria para a IA numa congregação?", options: ["Escrever o rascunho de uma mensagem para inscrever voluntários", "Ouvir uma confissão", "Decidir quem recebe ajuda", "Resolver um conflito entre membros"], answer: 0, why: "A IA ajuda na escrita da secretaria; o cuidado pastoral e as decisões precisam de uma pessoa de confiança." },
            { objective: "O1", q: "Um membro pergunta se a IA o pode aconselhar no seu luto. O que responde?", options: ["Sim, a IA está sempre disponível", "Não; isso precisa de uma pessoa de confiança, não de um programa", "Sim, se ela citar as escrituras", "Só à noite"], answer: 1, why: "O aconselhamento e o cuidado pastoral precisam de uma pessoa de confiança." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever regras básicas simples para a IA",
          minutes: 5,
          goal: "Escrever uma nota curta \"Como usamos a IA\" que os seus líderes possam aprovar.",
          text: [
            "Antes de os funcionários e voluntários usarem a IA, combinem algumas regras simples. Isto protege todos e evita surpresas.",
            "Uma boa nota responde a quatro perguntas: Para que podemos usar a IA? O que nunca pode entrar na IA (nomes, pedidos de oração, registos de ofertas, dados de saúde ou de família)? Quem revê os rascunhos da IA antes de serem partilhados? Dizemos às pessoas quando a IA ajudou a escrever alguma coisa?",
            "Mantenha-a numa página e com palavras simples. Partilhe-a com a sua direção, os anciãos ou o conselho do ministério e reveja-a uma vez por ano."
          ],
          steps: ["Faça a lista das tarefas em que a IA pode ajudar.", "Faça a lista do que nunca pode ser escrito na IA.", "Diga quem revê cada rascunho da IA antes de ser partilhado.", "Decida se diz, e como diz, que a IA ajudou.", "Peça aos seus líderes para aprovarem e marque uma data de revisão anual."],
          words: [["Regras básicas", "uma lista curta de regras combinadas que todos seguem."], ["Rever", "ler um rascunho com cuidado e corrigi-lo antes de ser partilhado."]],
          slides: [
            { title: "Porquê regras básicas", bullets: ["Todos sabem o que é permitido", "A confiança dos membros fica protegida"] },
            { title: "Quatro perguntas a responder", bullets: ["Para que podemos usar a IA?", "O que nunca entra na IA?", "Quem revê os rascunhos?", "Dizemos que a IA ajudou?"] },
            { title: "Mantenha simples", bullets: ["Uma página, palavras simples", "Aprovada pelos seus líderes", "Revista uma vez por ano"] }
          ],
          tryIt: "Escreva o rascunho da nota de uma página \"Como usamos a IA\" da sua congregação, respondendo às quatro perguntas. Pode pedir a um assistente de IA para tornar o seu rascunho mais claro, mas escreva você mesmo as regras.",
          youCanNow: "escrever um pequeno conjunto de regras básicas sobre a IA para uma congregação ou um programa religioso.",
          quickCheck: [
            { objective: "O2", q: "A que pergunta responde uma nota \"Como usamos a IA\"?", options: ["Quanto ganha o pastor", "Que membros dão mais ofertas", "Quem revê os rascunhos da IA antes de serem partilhados", "Qual é a melhor empresa de IA"], answer: 2, why: "A nota responde para que serve a IA, o que nunca entra nela, quem revê e se dizem às pessoas." },
            { objective: "O2", q: "A sua equipa do ministério escreveu regras básicas sobre a IA. O que faz a seguir?", options: ["Guarda-as em segredo", "Torna-as com dez páginas", "Deixa cada voluntário mudá-las", "Partilha-as com a direção, os anciãos ou o conselho e revê-as todos os anos"], answer: 3, why: "Os líderes aprovam a nota, e ela é revista uma vez por ano." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Manter privadas as informações dos membros",
          minutes: 5,
          goal: "Transformar um pedido com dados privados num pedido seguro com marcadores.",
          text: [
            "Os membros confiam-lhe coisas privadas: pedidos de oração, doenças, problemas de família, valores das ofertas, moradas e números de telefone. Muitas ferramentas de IA podem guardar o que você escreve, por isso trate um pedido como um postal que qualquer pessoa pode ler.",
            "Nunca escreva num assistente de IA nomes, pedidos de oração, registos de ofertas, dados de saúde, informações sobre crianças ou contactos. Use marcadores como [nome do membro] ou [valor] e preencha-os você mesmo depois, no seu próprio documento.",
            "Se a sua organização paga uma versão empresarial ou educativa de uma ferramenta de IA, pergunte ao responsável quais são as definições de privacidade. Mesmo assim, deixe de fora os assuntos pastorais confidenciais."
          ],
          steps: ["Escreva aquilo em que quer que a IA ajude.", "Leia o texto à procura de nomes, valores, saúde, família e contactos.", "Troque cada um por um marcador como [nome do membro].", "Envie o pedido e depois preencha você mesmo os dados verdadeiros fora da ferramenta de IA."],
          words: [["Marcador", "uma palavra provisória, como [nome do membro], que você troca depois pelo dado verdadeiro."], ["Confidencial", "informação privada partilhada em confiança, que não pode ser passada a outros."]],
          slides: [
            { title: "Trate um pedido como um postal", bullets: ["Conte que outra pessoa pode lê-lo", "Mantenha a confiança dos seus membros"] },
            { title: "Nunca escreva na IA", bullets: ["Nomes e contactos", "Pedidos de oração, saúde ou problemas de família", "Registos e valores de ofertas", "Informações sobre crianças"] },
            { title: "Use marcadores", bullets: ["[nome do membro], [valor], [data]", "Preencha você mesmo os dados verdadeiros depois"] }
          ],
          tryIt: "Pegue neste pedido: \"Escreva um cartão de melhoras para a irmã Mary Jones, que fez uma cirurgia ao coração no Hospital Distrital.\" Reescreva-o com marcadores para que nenhum dado privado entre na IA e depois envie-o.",
          youCanNow: "tirar de um pedido os dados privados dos membros e usar marcadores no lugar deles.",
          quickCheck: [
            { objective: "O3", q: "Porque tratar um pedido como um postal?", options: ["Muitas ferramentas de IA podem guardar o que escreve", "Os postais são mais curtos", "A IA imprime o seu pedido", "Torna a resposta mais simpática"], answer: 0, why: "Muitas ferramentas de IA podem guardar o que escreve, por isso conte que alguém pode lê-lo." },
            { objective: "O3", q: "Quer que a IA ajude a escrever um cartão de melhoras para um membro no hospital. O que escreve?", options: ["O nome e a doença do membro", "\"Escreva um cartão curto de melhoras para [nome do membro] da nossa congregação.\"", "O quarto do hospital e o telefone", "O pedido de oração da família"], answer: 1, why: "Use marcadores e preencha você mesmo os dados verdadeiros depois." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Usar a IA com sabedoria no ministério",
        questions: [
          { objective: "O1", q: "Que tarefa é boa para um assistente de IA na secretaria de uma igreja?", options: ["Escrever o rascunho do aviso semanal", "Aconselhar um membro de luto", "Decidir quem recebe o fundo de assistência", "Responder a um pedido de oração confidencial"], answer: 0, why: "Os avisos são escrita de secretaria; as outras tarefas precisam de uma pessoa de confiança." },
          { objective: "O2", q: "O que deve ter uma nota \"Como usamos a IA\"?", options: ["O número de telefone de cada membro", "Uma lista dos preços das empresas de IA", "Para que se pode usar a IA e o que nunca entra nela", "As palavras-passe do pastor"], answer: 2, why: "As regras básicas dizem o que é permitido e o que tem de ficar de fora." },
          { objective: "O3", q: "Um voluntário quer colar a lista de oração na IA para a \"arrumar\". O que diz?", options: ["Pode, poupa tempo", "Cole só metade", "Cole mas apague a conversa depois", "Não. Os pedidos de oração são confidenciais e ficam fora da IA"], answer: 3, why: "Os pedidos de oração são privados e não podem ser escritos em ferramentas de IA." },
          { objective: "O3", q: "O que é um marcador?", options: ["Um lugar guardado no templo", "Uma palavra provisória como [nome do membro] que preenche depois", "Um tipo de aplicação de IA", "Uma palavra-passe"], answer: 1, why: "Os marcadores deixam você ter ajuda sem partilhar dados privados." },
          { objective: "O2", q: "Quem deve rever um rascunho da IA antes de ser partilhado com a congregação?", options: ["Ninguém, a IA está sempre certa", "A própria IA", "Uma pessoa designada que os seus líderes aprovaram", "Qualquer visitante"], answer: 2, why: "As suas regras básicas dizem quem revê os rascunhos para apanhar os erros." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pôr a IA a trabalhar para a sua congregação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever rascunhos de avisos e boletins",
          minutes: 5,
          goal: "Usar um pedido claro para escrever o rascunho de um aviso semanal com a voz da sua congregação.",
          text: [
            "Um pedido claro dá um rascunho melhor. Diga à IA o que precisa, um pouco sobre a sua congregação (sem dados privados) e como quer que seja escrito.",
            "Por exemplo: \"Escreva um aviso curto e caloroso para o boletim de domingo. Eventos: banco alimentar no sábado das 9h ao meio-dia, grupo de jovens na quarta-feira às 18h, o coro precisa de mais duas vozes. Tom amigável e acolhedor, menos de 120 palavras.\"",
            "Depois peça mudanças: \"Faça mais curto.\" \"Acrescente uma frase a dar as boas-vindas aos visitantes.\" \"Use palavras mais simples.\" Verifique você mesmo cada data, hora e lugar antes de o aviso sair."
          ],
          steps: ["Faça a lista dos eventos com datas, horas e lugares.", "Diga o tom que quer e o tamanho.", "Peça um rascunho à IA.", "Peça uma ou duas mudanças.", "Compare cada data, hora e lugar com o seu calendário."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."], ["Tom", "a forma como um texto soa: caloroso, formal, alegre, calmo."]],
          slides: [
            { title: "Um pedido claro tem", bullets: ["O que você precisa", "Os eventos, datas e lugares", "O tom e o tamanho"] },
            { title: "Depois melhore-o", bullets: ["\"Faça mais curto.\"", "\"Acrescente boas-vindas aos visitantes.\"", "\"Use palavras mais simples.\""] },
            { title: "Antes de sair", bullets: ["Verifique cada data e hora", "Verifique cada lugar e contacto", "Confirme que soa como vocês"] }
          ],
          tryIt: "Escreva um pedido para os avisos reais desta semana na sua congregação ou programa. Obtenha um rascunho, peça uma mudança e depois compare cada data e hora com o seu calendário.",
          youCanNow: "escrever com a IA o rascunho de um aviso da congregação e verificá-lo antes de ser partilhado.",
          quickCheck: [
            { objective: "O4", q: "Que três coisas um pedido claro para um aviso diz à IA?", options: ["Os nomes, telefones e moradas dos membros", "Só a palavra \"aviso\"", "O que precisa, um pouco sobre a sua congregação e como quer que seja escrito", "A sua palavra-passe e o seu login"], answer: 2, why: "Diga à IA o que precisa, algo sobre a sua congregação (sem dados privados) e como deve ser escrito." },
            { objective: "O4", q: "O rascunho está bom, mas é comprido demais para o boletim. O que pede?", options: ["\"Acrescente mais eventos.\"", "\"Use palavras mais difíceis.\"", "\"Escreva noutra língua.\"", "\"Faça mais curto.\""], answer: 3, why: "Peça mudanças como \"Faça mais curto\" até caber." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear escalas de voluntários e eventos",
          minutes: 5,
          goal: "Usar a IA para montar uma escala de voluntários com funções e marcadores, sem nomes.",
          text: [
            "Os porteiros, as equipas de acolhimento, os ajudantes do berçário, as equipas do banco alimentar e os motoristas precisam todos de escalas. A IA consegue transformar uma lista de funções e datas numa tabela clara em segundos.",
            "Dê-lhe as funções, as datas e quantas pessoas cada função precisa, e use [Voluntário 1], [Voluntário 2] no lugar dos nomes verdadeiros. Depois copie a tabela para o seu próprio documento ou folha de cálculo e acrescente aí os nomes.",
            "A IA também pode fazer listas de verificação para eventos, por exemplo para uma campanha de avivamento, um jantar de angariação de fundos ou uma feira de saúde comunitária: o que fazer seis semanas, duas semanas e um dia antes."
          ],
          steps: ["Faça a lista das funções e de quantas pessoas cada uma precisa.", "Faça a lista das datas.", "Peça à IA uma tabela com os marcadores [Voluntário 1], [Voluntário 2].", "Copie-a para o seu próprio documento e acrescente aí os nomes verdadeiros.", "Peça uma lista de verificação se estiver a planear um evento."],
          words: [["Tabela", "informação organizada em linhas e colunas."], ["Lista de verificação", "uma lista de tarefas que você marca à medida que ficam feitas."]],
          slides: [
            { title: "A IA pode montar", bullets: ["Escalas de voluntários em tabelas", "Listas de verificação de eventos por semana", "Mensagens de lembrete para voluntários"] },
            { title: "Deixe os nomes de fora", bullets: ["Use [Voluntário 1], [Voluntário 2]", "Acrescente os nomes verdadeiros no seu próprio ficheiro"] },
            { title: "Lista de verificação do evento", bullets: ["Seis semanas antes", "Duas semanas antes", "O dia antes e o próprio dia"] }
          ],
          tryIt: "Peça a um assistente de IA uma escala de quatro semanas para três funções (por exemplo acolhimento, porteiro, berçário), com duas pessoas cada, usando marcadores. Copie-a para o seu próprio documento.",
          youCanNow: "fazer com a IA uma escala de voluntários e uma lista de verificação de um evento mantendo os nomes privados.",
          quickCheck: [
            { objective: "O5", q: "O que dá à IA para montar uma escala de voluntários?", options: ["As funções, as datas e quantas pessoas cada função precisa", "O número de telefone de cada voluntário", "Os registos de ofertas dos membros", "Só a morada da igreja"], answer: 0, why: "Dê as funções, as datas e o número de pessoas, com marcadores no lugar dos nomes." },
            { objective: "O5", q: "Está a planear um jantar de angariação de fundos. O que a IA pode fazer por você?", options: ["A lista final de convidados com nomes", "Uma lista do que fazer seis semanas, duas semanas e um dia antes", "Os valores das ofertas dos doadores", "As decisões sobre quem serve"], answer: 1, why: "A IA pode fazer listas de verificação organizadas pelo tempo que falta para o evento." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rever os rascunhos quanto à fé, à exatidão e ao tom",
          minutes: 5,
          goal: "Rever um rascunho da IA e corrigir o que não estiver de acordo com a sua tradição, os factos ou a sua voz.",
          text: [
            "A IA pode errar. Pode citar mal uma escritura, usar palavras de outra tradição, errar a data de um dia santo ou soar rígida. Também pode inventar factos que parecem verdadeiros.",
            "Leia cada rascunho à procura de três coisas: a fé (está de acordo com as nossas crenças e palavras?), a exatidão (as citações, datas e factos estão certos?) e o tom (soa como nós e trata todos com respeito?). Verifique as escrituras e os ensinamentos nos seus próprios textos sagrados, não na IA.",
            "Se a sua organização é uma instituição de caridade isenta de impostos nos Estados Unidos, os rascunhos da IA não devem apoiar nem atacar candidatos políticos. O IRS (a autoridade tributária dos EUA) explica as regras para igrejas e organizações religiosas na Publication 1828; pergunte aos seus líderes ou a um conselheiro se tiver dúvidas."
          ],
          steps: ["Leia pela fé: está de acordo com as nossas crenças e palavras?", "Verifique cada citação, escritura e data nas suas próprias fontes.", "Leia-o em voz alta para ouvir o tom.", "Corrija o que estiver errado e anote o que mudou.", "Peça ao revisor combinado para o aprovar."],
          words: [["Alucinação", "quando uma IA escreve algo que parece verdade mas é inventado."], ["Isenta de impostos", "uma organização que o IRS reconhece como não pagando imposto federal sobre o rendimento, com regras que tem de cumprir."]],
          sources: [{ name: "IRS Publication 1828, Tax Guide for Churches and Religious Organizations (guia fiscal do IRS para igrejas e organizações religiosas)", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" }],
          slides: [
            { title: "A IA pode errar na fé", bullets: ["Escrituras mal citadas", "Palavras de outra tradição", "Dias santos errados ou factos inventados"] },
            { title: "Três verificações", bullets: ["Fé: está de acordo com as nossas crenças", "Exatidão: citações, datas, factos", "Tom: soa como nós, com respeito"] },
            { title: "Cumpra as regras", bullets: ["Não apoiar candidatos políticos", "Veja a IRS Publication 1828", "Pergunte aos seus líderes se tiver dúvidas"] }
          ],
          tryIt: "Tarefa final: escreva o rascunho da sua nota \"Como usamos a IA\" e depois use a IA para escrever o rascunho do aviso desta semana e de uma escala de voluntários com marcadores. Reveja os dois quanto à fé, à exatidão e ao tom, e assinale o que mudou.",
          youCanNow: "rever os rascunhos da IA quanto à fé, à exatidão e ao tom antes de chegarem à sua congregação.",
          quickCheck: [
            { objective: "O6", q: "Quais são as três verificações de revisão deste curso?", options: ["Tamanho, letra e cor", "Preço, data e lugar", "Fé, exatidão e tom", "Ortografia, gramática e rapidez"], answer: 2, why: "Leia cada rascunho quanto à fé, à exatidão e ao tom." },
            { objective: "O6", q: "O rascunho da IA erra a data de um dia santo. O que faz?", options: ["Deixa ficar; a IA sabe as datas", "Pergunta à IA se tem a certeza", "Tira o dia santo do calendário", "Compara com o calendário da sua própria tradição e corrige"], answer: 3, why: "A IA pode errar um dia santo, por isso verifique e corrija você mesmo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Pôr a IA a trabalhar para a sua congregação",
        questions: [
          { objective: "O4", q: "Que pedido vai dar o melhor rascunho para o boletim?", options: ["\"Escreva um aviso caloroso de 100 palavras: banco alimentar sáb. 9-12h, jovens qua. 18h, o coro precisa de vozes.\"", "\"boletim\"", "\"coisas da igreja\"", "\"escreva tudo\""], answer: 0, why: "Dá os eventos, o tom e o tamanho." },
          { objective: "O5", q: "Como devem aparecer os nomes numa escala de voluntários feita pela IA?", options: ["Como marcadores, por exemplo [Voluntário 1]", "Nomes completos e números de telefone", "Só os primeiros nomes e as moradas", "Nomes com endereços de e-mail"], answer: 0, why: "Os marcadores deixam os dados dos voluntários fora da ferramenta de IA." },
          { objective: "O6", q: "A IA citou uma escritura no seu aviso. O que faz?", options: ["Confia", "Pergunta à IA se tem a certeza", "Verifica a citação no seu próprio texto sagrado", "Apaga o aviso inteiro"], answer: 2, why: "A IA pode citar mal; verifique nas suas próprias fontes." },
          { objective: "O6", q: "Qual destas é uma das três verificações de revisão deste curso?", options: ["Rapidez", "Tom", "Preço", "Tamanho da letra"], answer: 1, why: "A fé, a exatidão e o tom são as três verificações." },
          { objective: "O6", q: "Onde pode uma igreja conhecer as regras do IRS para organizações religiosas?", options: ["Numa publicação nas redes sociais", "Só no assistente de IA", "Num blogue qualquer", "Na IRS Publication 1828"], answer: 3, why: "A Publication 1828 é o guia fiscal do IRS para igrejas e organizações religiosas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Organizações Religiosas",
    questions: [
      { objective: "O1", q: "Que tarefa deve ficar com pessoas, não com a IA?", options: ["Escrever uma lista de verificação de um evento", "Aconselhar um membro em crise", "Escrever o rascunho de uma circular", "Fazer uma tabela de voluntários"], answer: 1, why: "O cuidado pastoral precisa de uma pessoa de confiança." },
      { objective: "O1", q: "No ministério, a IA é mais útil para:", options: ["A escrita e o planeamento da secretaria", "Ouvir confissões", "Decidir quem recebe ajuda", "Guardar segredos de oração"], answer: 0, why: "A IA faz rascunhos de palavras e planos; as pessoas tratam do cuidado e das decisões." },
      { objective: "O1", q: "Uma boa regra prática é:", options: ["A IA decide, as pessoas seguem", "A IA trata de tudo", "Nunca ler os rascunhos da IA", "A IA ajuda com palavras e planos; as pessoas tratam dos corações e das decisões"], answer: 3, why: "Assim o cuidado e o discernimento ficam com as pessoas." },
      { objective: "O2", q: "Que tamanho deve ter uma nota \"Como usamos a IA\"?", options: ["Cinquenta páginas", "Uma palavra", "Cerca de uma página com palavras simples", "O tamanho que a IA quiser"], answer: 2, why: "Curta e simples quer dizer que as pessoas a vão ler e seguir." },
      { objective: "O2", q: "Quem deve aprovar as regras básicas sobre a IA?", options: ["Só a empresa de IA", "Um visitante", "A sua direção, os anciãos ou o conselho do ministério", "Ninguém"], answer: 2, why: "A aprovação dos líderes dá autoridade às regras." },
      { objective: "O2", q: "Com que frequência deve rever as suas regras básicas sobre a IA?", options: ["Cerca de uma vez por ano", "Nunca", "De hora a hora", "Só se a IA pedir"], answer: 0, why: "As ferramentas mudam, por isso uma revisão anual mantém as regras atualizadas." },
      { objective: "O3", q: "O que NUNCA deve ser escrito num assistente de IA?", options: ["\"Faça mais curto\"", "Uma lista de datas de eventos", "\"Use um tom caloroso\"", "O pedido de oração de um membro com o nome dele"], answer: 3, why: "Os pedidos de oração e os nomes são confidenciais." },
      { objective: "O3", q: "Porque tratar um pedido como um postal?", options: ["Os postais são curtos", "Outra pessoa pode ler o que você escreve", "A IA só lê postais", "É mais rápido"], answer: 1, why: "As ferramentas de IA podem guardar o que você escreve." },
      { objective: "O3", q: "Precisa de uma nota de agradecimento pela oferta de um doador. Como faz o pedido com segurança?", options: ["Põe o nome dele e o valor", "Usa [nome do doador] e [valor] e preenche-os você mesmo", "Cola o registo de ofertas", "Põe a morada dele"], answer: 1, why: "Os marcadores mantêm privados os registos de ofertas." },
      { objective: "O3", q: "A sua igreja paga um plano empresarial de IA. Deve escrever nele assuntos pastorais confidenciais?", options: ["Sim, é pago", "Só aos domingos", "Só se for curto", "Não, deixe de fora os assuntos pastorais confidenciais"], answer: 3, why: "O cuidado confidencial fica fora da IA, mesmo nos planos pagos." },
      { objective: "O4", q: "Um pedido claro para um aviso inclui:", options: ["Eventos, datas, tom e tamanho", "Só a palavra \"aviso\"", "Os números de telefone dos membros", "A palavra-passe do pastor"], answer: 0, why: "Esses dados deixam a IA escrever um rascunho útil." },
      { objective: "O4", q: "Depois de receber um rascunho, que pedido de seguimento é útil?", options: ["\"Aqui está a nossa lista de membros.\"", "\"Decida o nosso orçamento.\"", "\"Acrescente uma frase a dar as boas-vindas aos visitantes.\"", "\"Envie já para todos.\""], answer: 2, why: "Pede uma melhoria clara." },
      { objective: "O4", q: "Antes de um aviso sair, você tem de:", options: ["Acrescentar mais texto da IA", "Tirar todas as datas", "Não o ler", "Verificar cada data, hora e lugar"], answer: 3, why: "A IA pode errar os factos." },
      { objective: "O5", q: "Onde acrescenta os nomes verdadeiros dos voluntários?", options: ["No pedido à IA", "No seu próprio documento, depois de copiar a tabela", "Numa publicação pública", "Em lado nenhum"], answer: 1, why: "Os nomes ficam nos seus próprios ficheiros, não na ferramenta de IA." },
      { objective: "O5", q: "Uma lista de verificação de um evento costuma organizar as tarefas:", options: ["Pelo rendimento dos membros", "Sem ordem nenhuma", "Pelo tempo que falta para o evento, como seis semanas e duas semanas", "Só depois do evento"], answer: 2, why: "Planear a partir da data do evento para trás mantém tudo no caminho certo." },
      { objective: "O6", q: "No seu rascunho, a IA usa palavras de outra tradição religiosa. Você deve:", options: ["Corrigir para que esteja de acordo com a sua tradição", "Deixar ficar", "Pedir aos membros para votarem", "Publicar na mesma"], answer: 0, why: "A verificação da fé garante que está de acordo com as suas crenças e palavras." },
      { objective: "O6", q: "O que é uma alucinação na IA?", options: ["Algo que a IA escreve que parece verdade mas é inventado", "Uma visão durante a oração", "Uma ligação à internet lenta", "Um tipo de aplicação"], answer: 0, why: "A IA pode inventar factos que parecem reais." },
      { objective: "O6", q: "Ler um rascunho em voz alta ajuda a verificar:", options: ["A velocidade da internet", "O preço da IA", "O tom", "O tempo que vai fazer"], answer: 2, why: "Ouvi-lo mostra se soa como você." },
      { objective: "O6", q: "Um rascunho da IA para uma igreja isenta de impostos apoia um candidato político. Você deve:", options: ["Publicá-lo", "Tirar isso e ver a IRS Publication 1828 ou perguntar aos seus líderes", "Acrescentar um segundo candidato", "Ignorar"], answer: 1, why: "As instituições de caridade isentas de impostos têm regras do IRS sobre campanhas políticas." },
      { objective: "O6", q: "Quem dá a aprovação final antes de um rascunho da IA ser partilhado?", options: ["A IA", "Quem estiver mais perto", "Ninguém", "O revisor que os seus líderes aprovaram"], answer: 3, why: "Um revisor designado apanha os erros e mantém a confiança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      6,
      10,
      13,
      15
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Nota \"Como usamos a IA\"",
        objective: "O2",
        notYet: "A nota não diz o que nunca pode entrar na IA, ou quem revê.",
        meets: "Uma página com palavras simples que responde às quatro perguntas.",
        exceeds: "Diz que líderes a vão aprovar e tem uma data de revisão anual."
      },
      {
        name: "Aviso claro",
        objective: "O4",
        notYet: "Uma data, hora ou lugar está errado ou falta.",
        meets: "O aviso desta semana foi escrito a partir de um pedido claro, com cada dado verificado.",
        exceeds: "Caloroso e acolhedor, e soa como a congregação."
      },
      {
        name: "Escala de voluntários privada",
        objective: "O5",
        notYet: "Nomes verdadeiros ou contactos entraram na IA.",
        meets: "Escala com funções, datas e marcadores; os nomes foram acrescentados no seu próprio documento.",
        exceeds: "Inclui também uma lista de verificação do evento pelo tempo que falta."
      },
      {
        name: "Revisão da fé, da exatidão e do tom",
        objective: "O6",
        notYet: "Ficou uma citação errada, uma data errada ou uma palavra de outra tradição.",
        meets: "Os dois rascunhos foram revistos quanto à fé, à exatidão e ao tom, e as mudanças estão assinaladas.",
        exceeds: "As escrituras foram verificadas no seu próprio texto sagrado, com a referência anotada."
      },
      {
        name: "Privacidade dos membros",
        objective: "O3",
        notYet: "Algum pedido de oração, registo de ofertas ou dado de um membro foi escrito na IA.",
        meets: "Só foram usados marcadores em todos os pedidos.",
        exceeds: "Consegue mostrar o pedido seguro ao lado do pedido original."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Congregações cujos líderes adotam uma nota \"Como usamos a IA\" em 60 dias (inquérito de seguimento)",
      "Horas de secretaria poupadas por semana nos avisos e nas escalas, segundo os funcionários",
      "Alunos que começam outro curso da Koach Learn sobre organizações sem fins lucrativos em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os dados dos eventos desta semana e uma lista das funções dos voluntários, sem nomes",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça a sessão com um pastor, imã, rabino ou líder de ministério presente, para que as regras básicas possam ser aprovadas em conjunto.",
      "Nunca use na prática pedidos de oração, registos de ofertas ou dados de membros verdadeiros; use marcadores.",
      "Traga o seu próprio texto sagrado para que os alunos possam verificar qualquer escritura que a IA cite.",
      "Lembre às congregações isentas de impostos as regras sobre atividade política da IRS Publication 1828.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
