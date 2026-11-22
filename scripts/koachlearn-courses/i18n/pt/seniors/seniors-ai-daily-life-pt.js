"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "seniors-ai-daily-life-pt",
  lang: "pt",
  translationOf: "seniors-ai-daily-life",
  category: "Seniors and Technology",
  name: "IA para o Dia a Dia",
  skills: "Fazer uma lista de compras com IA, Planear refeições simples, Criar lembretes por voz, Adicionar consultas ao calendário, Entender uma carta confusa",
  outcome: "usar um assistente de IA e o assistente de voz do seu telefone para planear uma semana de refeições simples, transformá-la numa lista de compras, criar um lembrete e ter uma carta confusa explicada com palavras simples.",
  about: [
    "Este curso é para pessoas mais velhas que querem que a tecnologia torne as tarefas do dia a dia um pouco mais fáceis: fazer compras, cozinhar, lembrar-se das consultas e entender o correio.",
    "Você vai usar um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, e o assistente de voz que já está no seu telefone (a Siri no iPhone, ou o Google Assistant ou o Gemini no Android), para planear refeições, fazer listas, criar lembretes e entender cartas.",
    "Cada lição dura cerca de cinco minutos. Vá com calma, repita o que precisar e faça sempre a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Planeie três jantares simples para a próxima semana com um assistente de IA, peça-lhe uma só lista de compras para os três, crie um lembrete no telefone para ir às compras e adicione uma consulta verdadeira ao calendário do seu telefone.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas, muitas a viver sozinhas ou em casal, que tratam das suas próprias refeições, compras, consultas e correio e querem que as tarefas do dia a dia custem menos esforço.",
    startingPoint: "Têm um smartphone e sabem fazer chamadas e enviar SMS. A maioria nunca usou um assistente de IA nem o assistente de voz do telefone, os alertas do calendário ou a aplicação Notas.",
    gap: "Planear refeições, lembrar-se das consultas e entender cartas de seguradoras ou de serviços pode ser cansativo e causar stress. Usar um assistente de IA e as ferramentas do próprio telefone nestas tarefas poupa esforço e ajuda as pessoas mais velhas a manterem a sua independência, desde que os dados privados fiquem de fora e as cartas importantes sejam confirmadas com quem as enviou.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um smartphone com assistente de voz e aplicação Calendário; os menus do iPhone e do Android são diferentes",
      "Tempo: cerca de 5 minutos por lição, com calma e tempo para praticar",
      "As dietas especiais vêm do médico do aluno, não da IA",
      "Privacidade: nenhum nome, número de conta, do Medicare ou da Segurança Social nos pedidos nem nas fotos de cartas"
    ],
    prerequisites: "O curso \"IA para Pessoas Mais Velhas: Usar Assistentes de IA\" ajuda se for feito antes, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um assistente de IA gratuito", action: "pedir ideias de refeições fáceis dizendo para quantas pessoas cozinha, o seu tempo, o que gosta e o que deve evitar", standard: "recebendo três ideias que servem para as suas necessidades e para os conselhos do seu médico" },
    { id: "O2", condition: "Com algumas ideias de refeições", action: "obter uma só lista de compras organizada por secção da loja, sem o que já tem em casa", standard: "guardada nas Notas, impressa ou escrita num papel" },
    { id: "O3", condition: "Usando o assistente de voz do seu telefone", action: "criar um lembrete ou um temporizador a falar, com o dia e a hora", standard: "e confirmar no ecrã que ficou criado" },
    { id: "O4", condition: "Com uma consulta verdadeira", action: "adicioná-la ao calendário do seu telefone com um alerta", standard: "com o nome, a data e a hora certos e um alerta antes" },
    { id: "O5", condition: "Com uma carta confusa de uma seguradora, de uma empresa de água ou luz ou de um serviço", action: "ter a carta explicada com palavras simples, deixando de fora todos os dados privados", standard: "e confirmar o que fazer ligando para o número impresso na carta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Listas, refeições e compras",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear refeições simples com IA",
          minutes: 5,
          goal: "Pedir a um assistente de IA algumas ideias de refeições fáceis que sirvam para as suas necessidades.",
          text: [
            "Decidir o que cozinhar todos os dias pode ser cansativo, sobretudo quando cozinha para uma ou duas pessoas. Um assistente de IA pode sugerir ideias em segundos.",
            "Diga-lhe o que gosta, para quantas pessoas cozinha, quanto tempo e esforço quer gastar, e o que tem de evitar. Por exemplo: \"Cozinho para uma pessoa. Sugira três jantares fáceis que levem menos de 30 minutos, usem poucos ingredientes e tenham pouco sal.\"",
            "Se o seu médico lhe deu uma dieta especial, siga os conselhos do seu médico. O assistente pode dar ideias, mas não conhece a sua saúde."
          ],
          steps: ["Abra o seu assistente de IA.", "Diga para quantas pessoas cozinha.", "Diga quanto tempo tem e o que gosta.", "Diga o que deve evitar, como sal ou açúcar a mais.", "Peça três ideias."],
          words: [["Ingrediente", "um dos alimentos que entram numa receita."]],
          slides: [
            { title: "Deixe a IA sugerir refeições", bullets: ["Ideias em segundos", "Bom quando cozinha para uma ou duas pessoas"] },
            { title: "Diga-lhe", bullets: ["Para quantas pessoas", "Quanto tempo tem", "O que gosta e o que deve evitar"] },
            { title: "O seu médico vem primeiro", bullets: ["Siga a dieta que o seu médico lhe deu", "A IA não conhece a sua saúde"] }
          ],
          tryIt: "Peça a um assistente de IA três jantares fáceis para a próxima semana que sirvam para a sua maneira de comer. Escreva os três de que gosta mais.",
          youCanNow: "pedir a um assistente de IA ideias de refeições que sirvam para as suas necessidades.",
          quickCheck: [
            { objective: "O1", q: "Se tiver uma dieta especial, quem a decide?", options: ["O assistente de IA", "O seu médico", "O supermercado", "Um programa de culinária"], answer: 1, why: "O assistente dá ideias mas não conhece a sua saúde; siga os conselhos do seu médico." },
            { objective: "O1", q: "Cozinha para duas pessoas e tem pouca energia à noite. O que acrescenta ao seu pedido de refeições?", options: ["\"Que seja rápido e fácil, para duas pessoas.\"", "Nada; diz só \"comida\"", "O seu número do Medicare", "\"Que seja sofisticado.\""], answer: 0, why: "Dizer para quantas pessoas e quanto tempo e esforço quer gastar dá ideias que servem para você." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Transformar refeições numa lista de compras",
          minutes: 4,
          goal: "Obter uma só lista de compras arrumada para várias refeições.",
          text: [
            "Quando tiver as ideias de refeições, peça ao assistente para fazer uma só lista de compras para todas. Assim não precisa de copiar cada receita.",
            "Peça-lhe para organizar a lista pelas partes da loja, como frutas e legumes, laticínios e enlatados, para passar pela loja uma só vez. Depois diga-lhe o que já tem em casa, para ele tirar isso da lista.",
            "Pode imprimir a lista, copiá-la para a aplicação Notas do telefone ou simplesmente escrevê-la num papel. Use o que for mais fácil para você."
          ],
          steps: ["Peça: \"Faça uma só lista de compras para estes três jantares.\"", "Peça para organizar a lista por secção da loja.", "Diga o que já tem em casa.", "Copie a lista para as Notas, imprima-a ou escreva-a num papel."],
          words: [["Aplicação Notas", "uma aplicação do telefone para escrever e guardar notas e listas curtas."]],
          slides: [
            { title: "Uma lista para todas as refeições", bullets: ["\"Faça uma só lista de compras para estes três jantares.\""] },
            { title: "Torne as compras fáceis", bullets: ["Organize por secção da loja", "Tire o que já tem em casa"] },
            { title: "Guarde a sua lista", bullets: ["Copie para a aplicação Notas", "Imprima-a", "Ou escreva-a num papel"] }
          ],
          tryIt: "Peça ao assistente uma só lista de compras para os seus três jantares, organizada por secção da loja. Diga-lhe duas coisas que já tem e guarde a lista final.",
          youCanNow: "transformar ideias de refeições numa só lista de compras que serve para a sua cozinha.",
          quickCheck: [
            { objective: "O2", q: "O que quer dizer organizar uma lista por secção da loja?", options: ["Ordenar as coisas da mais barata para a mais cara", "Escrever a lista duas vezes", "Juntar as coisas pelo lugar onde estão, como laticínios ou enlatados", "Pôr na lista só uma refeição"], answer: 2, why: "Organizar por secção deixa você passar pela loja uma só vez." },
            { objective: "O2", q: "Já tem arroz e ovos em casa. O que diz ao assistente?", options: ["Nada", "Para pôr mais arroz e ovos", "Para fazer um plano de refeições novo", "Que já tem arroz e ovos, para ele os tirar da lista"], answer: 3, why: "Dizer o que já tem deixa essas coisas fora da lista." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar o assistente de voz do telefone para lembretes",
          minutes: 6,
          goal: "Criar um lembrete ou um temporizador a falar com o seu telefone.",
          text: [
            "A maioria dos telefones já traz um assistente de voz: a Siri no iPhone, e o Google Assistant ou o Gemini em muitos telefones Android. Você fala e o telefone faz uma tarefa simples, como criar um lembrete, um temporizador ou um alarme.",
            "Para o ligar, normalmente pode dizer \"Hey Siri\" ou \"Hey Google\", ou carregar sem largar no botão lateral ou no botão de início. Se não estiver ativado, peça a um familiar para o ajudar a ligá-lo nas Definições.",
            "Depois fale com clareza: \"Lembra-me de ir às compras na quinta-feira às 10 da manhã.\" \"Põe um temporizador de 20 minutos.\" \"Lembra-me de ligar à Ruth amanhã às 5 da tarde.\" O telefone diz-lhe ou mostra-lhe que ficou criado."
          ],
          steps: ["Diga \"Hey Siri\" ou \"Hey Google\", ou carregue sem largar no botão lateral ou de início.", "Espere pelo som ou pela luz no ecrã.", "Diga o que quer, com o dia e a hora.", "Veja no ecrã se ficou criado."],
          words: [["Assistente de voz", "um ajudante que já vem no telefone e faz tarefas simples quando você fala com ele."], ["Lembrete", "uma mensagem que o telefone lhe mostra à hora que você escolher."]],
          slides: [
            { title: "O seu telefone consegue ouvir", bullets: ["A Siri no iPhone", "O Google Assistant ou o Gemini no Android"] },
            { title: "Acorde-o", bullets: ["Diga \"Hey Siri\" ou \"Hey Google\"", "Ou carregue sem largar no botão lateral ou de início"] },
            { title: "Diga o que precisa", bullets: ["\"Lembra-me de ir às compras na quinta-feira às 10 da manhã.\"", "\"Põe um temporizador de 20 minutos.\"", "Veja no ecrã se ficou criado"] }
          ],
          tryIt: "Use o assistente de voz do seu telefone para criar um lembrete para ir às compras num dia e numa hora que lhe deem jeito. Confirme que aparece no ecrã.",
          youCanNow: "criar um lembrete ou um temporizador a falar com o seu telefone.",
          quickCheck: [
            { objective: "O3", q: "O que é um assistente de voz num telefone?", options: ["Uma pessoa que lhe liga de volta", "Um ajudante que já vem no telefone e com quem fala, como a Siri ou o Google Assistant", "Um aparelho auditivo", "Uma aplicação de SMS"], answer: 1, why: "A Siri e o Google Assistant fazem tarefas simples, como lembretes e temporizadores, quando você fala." },
            { objective: "O3", q: "Quer lembrar-se de ligar à sua irmã amanhã ao fim da tarde. O que diz?", options: ["\"Ligar.\"", "\"Irmã.\"", "\"Lembra-me de ligar à minha irmã amanhã às 6 da tarde.\"", "\"Amanhã.\""], answer: 2, why: "Um pedido claro com a tarefa, o dia e a hora cria um lembrete útil." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Listas, refeições e compras",
        questions: [
          { objective: "O1", q: "O que deve dizer a um assistente de IA quando pede ideias de refeições?", options: ["O seu número do banco", "Só \"comida\"", "Para quantas pessoas, o seu tempo, o que gosta e o que deve evitar", "A palavra-passe do seu médico"], answer: 2, why: "Esses dados ajudam-no a sugerir refeições que servem para você." },
          { objective: "O1", q: "O seu médico deu-lhe uma dieta com pouco sal, mas a IA sugere um prato salgado. O que faz?", options: ["Segue os conselhos do seu médico", "Segue a IA", "Deixa de comer", "Ignora os dois"], answer: 0, why: "O seu médico conhece a sua saúde; a IA não." },
          { objective: "O2", q: "Porque pedir ao assistente para organizar a lista de compras por secção da loja?", options: ["Torna a comida mais barata", "É obrigatório", "Para imprimir a cores", "Para passar pela loja uma só vez"], answer: 3, why: "Organizar por secção torna as compras mais rápidas." },
          { objective: "O3", q: "Qual destes é um assistente de voz que vem em muitos telefones?", options: ["Calculadora", "Siri", "Câmara", "Lanterna"], answer: 1, why: "A Siri no iPhone e o Google Assistant ou o Gemini no Android ouvem pedidos falados." },
          { objective: "O3", q: "Que pedido falado cria um lembrete útil?", options: ["\"Compras.\"", "\"Lembra-me de ir às compras na quinta-feira às 10 da manhã.\"", "\"Olá.\"", "\"Telefone.\""], answer: 1, why: "Diz o que lembrar, o dia e a hora." }
        ]
      }
    },
    {
      name: "Capítulo 2: Consultas e papelada",
      lessons: [
        {
          objectives: ["O4"],
          title: "Adicionar consultas ao calendário do telefone",
          minutes: 6,
          goal: "Adicionar uma consulta médica ao calendário do telefone com um alerta.",
          text: [
            "O seu telefone tem uma aplicação Calendário que pode guardar todas as suas consultas e avisar você antes de cada uma. É útil para idas ao médico, ao cabeleireiro e para os aniversários da família.",
            "A maneira mais fácil é pedir ao seu assistente de voz: \"Adiciona uma consulta com o Dr. Lee no dia 12 de maio às 2 da tarde.\" Também pode abrir a aplicação Calendário, tocar no sinal de mais (+), escrever o nome, escolher a data e a hora e tocar em Adicionar ou Guardar.",
            "Escolha um alerta para o telefone avisar você com antecedência, por exemplo um dia antes e uma hora antes. Procure uma opção chamada Alerta ou Notificação quando adicionar o evento."
          ],
          steps: ["Abra a aplicação Calendário, ou peça ao seu assistente de voz.", "Toque no sinal de mais (+) para adicionar um evento.", "Escreva o nome, como \"Consulta com o Dr. Lee\".", "Escolha a data e a hora.", "Escolha um alerta, como 1 dia antes.", "Toque em Adicionar ou Guardar."],
          words: [["Aplicação Calendário", "a aplicação do telefone que guarda as suas consultas por data."], ["Alerta", "um som ou uma mensagem que o telefone lhe dá antes de uma consulta."]],
          slides: [
            { title: "O calendário do seu telefone", bullets: ["Guarda todas as suas consultas", "Avisa você antes de cada uma"] },
            { title: "Duas maneiras de adicionar", bullets: ["Peça ao seu assistente de voz", "Ou abra o Calendário e toque em +"] },
            { title: "Preencha", bullets: ["Nome, data e hora", "Escolha um alerta, como 1 dia antes", "Toque em Adicionar ou Guardar"] }
          ],
          tryIt: "Adicione uma consulta verdadeira ou um aniversário da família ao calendário do seu telefone, com um alerta um dia antes. Confirme que aparece na data certa.",
          youCanNow: "adicionar uma consulta ao calendário do seu telefone e receber um aviso antes dela.",
          quickCheck: [
            { objective: "O4", q: "O que faz um alerta numa consulta do calendário?", options: ["Faz o telefone lembrá-lo antes da consulta", "Cancela a consulta", "Liga ao médico por você", "Partilha-a com desconhecidos"], answer: 0, why: "Um alerta avisa você com antecedência, por exemplo um dia ou uma hora antes." },
            { objective: "O4", q: "Acabou de marcar uma consulta de rotina para a próxima terça-feira. Qual é o primeiro passo para a adicionar na aplicação Calendário?", options: ["Desligar o telefone", "Apagar consultas antigas", "Escrevê-la numa SMS para si mesmo", "Tocar no sinal de mais (+) para adicionar um evento"], answer: 3, why: "Toque no sinal de mais, depois escreva o nome e escolha a data, a hora e um alerta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ter uma carta confusa explicada",
          minutes: 5,
          goal: "Pedir a um assistente de IA para explicar uma carta confusa com palavras simples, sem partilhar dados privados.",
          text: [
            "As cartas de seguradoras, de empresas de água, luz ou gás, ou de serviços podem estar cheias de palavras difíceis. Um assistente de IA pode explicá-las com linguagem simples.",
            "Primeiro, tape ou deixe de fora os dados privados: nomes, números de conta, números do Medicare (o seguro de saúde do governo dos EUA para pessoas mais velhas) ou da Segurança Social, e a sua morada. Depois escreva a parte confusa, ou descreva-a, e pergunte: \"Explique isto com palavras simples. Preciso de fazer alguma coisa? O quê?\"",
            "Alguns assistentes deixam tirar uma foto de uma página. Se fizer isso, tape os dados privados antes de tirar a foto. Em tudo o que tem a ver com dinheiro, apoios ou saúde, confirme o que fazer ligando para o número impresso na própria carta, ou pergunte a um familiar de confiança."
          ],
          steps: ["Tape ou deixe de fora nomes, números e a sua morada.", "Escreva ou descreva só a parte confusa.", "Pergunte: \"Explique isto com palavras simples. O que preciso de fazer?\"", "Confirme ligando para o número impresso na carta."],
          words: [["Linguagem simples", "palavras simples do dia a dia, fáceis de entender."], ["Número de conta", "um número privado que uma empresa usa para a sua conta; nunca o partilhe com a IA."]],
          slides: [
            { title: "Cartas difíceis, palavras simples", bullets: ["Seguros, água e luz, serviços", "A IA pode explicá-las de forma simples"] },
            { title: "Proteja-se primeiro", bullets: ["Tape nomes e números de conta", "Deixe de fora os números do Medicare e da Segurança Social", "Deixe de fora a sua morada"] },
            { title: "Pergunte e confirme", bullets: ["\"Explique com palavras simples. O que preciso de fazer?\"", "Ligue para o número impresso na carta para confirmar"] }
          ],
          tryIt: "Encontre uma carta ou uma conta com uma frase que não entende bem. Deixe de fora todos os dados privados, escreva só essa frase num assistente e peça-lhe para a explicar com palavras simples.",
          youCanNow: "ter uma carta confusa explicada com palavras simples, mantendo os seus dados privados em segurança.",
          quickCheck: [
            { objective: "O5", q: "O que é linguagem simples?", options: ["Palavras simples do dia a dia", "Palavras da lei", "Uma língua estrangeira", "Códigos muito curtos"], answer: 0, why: "Linguagem simples quer dizer palavras simples do dia a dia, fáceis de entender." },
            { objective: "O5", q: "Quer tirar uma foto a uma carta do seguro para a IA. O que faz primeiro?", options: ["Aumenta a foto", "Tapa o seu nome, a morada e os números de conta", "Acrescenta o seu número do Medicare para ela verificar", "Envia-a a um amigo"], answer: 1, why: "Tape os dados privados antes de tirar a foto." }
          ]
        },
        {
          objectives: ["O1","O2","O3"],
          title: "Juntar tudo: a sua semana, mais fácil",
          minutes: 5,
          goal: "Usar a IA e o telefone juntos para planear uma semana.",
          text: [
            "Agora já tem várias pequenas habilidades: pedir ideias de refeições, fazer uma lista, criar lembretes e adicionar consultas. Usadas juntas, podem organizar uma semana inteira.",
            "Uma rotina simples: no domingo, peça ao assistente três jantares e uma só lista de compras. Crie um lembrete para o seu dia de compras. Veja o calendário para conhecer as consultas da semana e adicione o que for novo.",
            "Mantenha tudo simples. Use as ferramentas que o ajudam e deixe de lado as que não ajudam. As listas em papel continuam a funcionar bem, e pedir ajuda a um familiar está sempre bem."
          ],
          steps: ["Peça a um assistente de IA três jantares.", "Peça uma só lista de compras.", "Crie um lembrete para o seu dia de compras.", "Veja o seu calendário e adicione as consultas novas."],
          words: [["Rotina", "um conjunto de passos que faz sempre da mesma maneira."]],
          slides: [
            { title: "Uma rotina simples ao domingo", bullets: ["Três jantares da IA", "Uma só lista de compras", "Um lembrete para as compras"] },
            { title: "Veja a sua semana", bullets: ["Olhe para o seu calendário", "Adicione o que for novo, com um alerta"] },
            { title: "Mantenha tudo simples", bullets: ["Use o que o ajuda", "As listas em papel continuam a funcionar", "Peça ajuda à família quando quiser"] }
          ],
          tryIt: "Tarefa final: planeie três jantares simples para a próxima semana com um assistente de IA, peça uma só lista de compras, crie um lembrete no telefone para o seu dia de compras e adicione uma consulta verdadeira ao seu calendário.",
          youCanNow: "usar a IA e o telefone juntos para planear refeições, fazer compras e não perder as consultas.",
          quickCheck: [
            { objective: "O1", q: "Que ferramentas, usadas juntas, podem organizar a sua semana?", options: ["Só um calendário em papel", "Só um assistente de IA", "Ideias de refeições, uma lista de compras, lembretes e o seu calendário", "Nenhuma; é difícil demais"], answer: 2, why: "As pequenas habilidades deste curso funcionam juntas para planear uma semana inteira." },
            { objective: "O1", q: "É domingo. Qual é um primeiro passo simples para planear a sua semana?", options: ["Comprar tudo na loja", "Desligar todos os lembretes", "Ler cartas antigas", "Pedir ao assistente três jantares e uma só lista de compras"], answer: 3, why: "A rotina começa com três jantares e uma lista, depois um lembrete e uma olhada ao calendário." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Consultas e papelada",
        questions: [
          { objective: "O4", q: "Na aplicação Calendário, em que toca para adicionar uma consulta?", options: ["No botão do volume", "Na câmara", "No ícone da bateria", "No sinal de mais (+)"], answer: 3, why: "O sinal de mais adiciona um evento novo." },
          { objective: "O4", q: "Porque pôr um alerta numa consulta?", options: ["Para o telefone lembrá-lo antes", "Para custar menos", "Para o médico lhe ligar", "Apaga o evento"], answer: 0, why: "Um alerta avisa você com antecedência." },
          { objective: "O5", q: "Antes de perguntar à IA sobre uma carta, deve:", options: ["Escrever o seu número de conta", "Enviar a carta inteira com o seu nome", "Tapar ou deixar de fora os dados privados", "Partilhar o seu número do Medicare"], answer: 2, why: "Os dados privados nunca devem ir para um assistente de IA." },
          { objective: "O5", q: "A IA explica uma carta sobre os seus apoios. Como confirma o que fazer?", options: ["Confia totalmente na IA", "Não faz nada", "Pergunta a um desconhecido na internet", "Liga para o número impresso na carta"], answer: 3, why: "O serviço que enviou a carta é a fonte oficial." },
          { objective: "O2", q: "Qual é uma boa rotina de domingo deste curso?", options: ["Apagar o seu calendário", "Partilhar as suas palavras-passe", "Planear jantares, fazer uma lista, criar um lembrete para as compras e ver o calendário", "Comprar um telefone novo"], answer: 2, why: "Junta as habilidades de todas as lições." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Dia a Dia",
    questions: [
      { objective: "O1", q: "Um assistente de IA pode ajudar com as refeições:", options: ["Cozinhando-as", "Sugerindo ideias fáceis que servem para você", "Comprando a comida por você", "Sabendo a dieta que o seu médico lhe deu"], answer: 1, why: "Ele sugere ideias quando você lhe diz o que precisa." },
      { objective: "O1", q: "Qual é o pedido de refeições mais claro?", options: ["\"Cozinho para uma pessoa. Sugira três jantares fáceis, com pouco sal, em menos de 30 minutos.\"", "\"comida\"", "\"jantar?\"", "\"comer\""], answer: 0, why: "Diz para quantas pessoas, o tempo e o que evitar." },
      { objective: "O1", q: "Se a dieta do seu médico e a ideia da IA não combinam, siga:", options: ["O seu médico", "A IA", "O que for mais fácil", "Nenhum dos dois"], answer: 0, why: "O seu médico conhece a sua saúde." },
      { objective: "O2", q: "Um ingrediente é:", options: ["Um utensílio de cozinha", "Um dos alimentos de uma receita", "Uma loja", "Uma aplicação"], answer: 1, why: "Os ingredientes são os alimentos que entram numa receita." },
      { objective: "O2", q: "Para ter uma só lista para três refeições, pede:", options: ["\"Qual é a minha palavra-passe?\"", "\"Apague as refeições.\"", "\"Faça uma só lista de compras para estes três jantares.\"", "\"Ligue para a loja.\""], answer: 2, why: "O assistente junta os ingredientes numa só lista." },
      { objective: "O2", q: "Dizer ao assistente o que já tem em casa ajuda-o a:", options: ["Imprimir a cores", "Cobrar-lhe menos", "Ligar à sua família", "Tirar essas coisas da lista"], answer: 3, why: "Tira as coisas que não precisa de comprar." },
      { objective: "O2", q: "A aplicação Notas serve para:", options: ["Tirar fotos", "Fazer chamadas", "Escrever e guardar notas e listas curtas", "Ouvir música"], answer: 2, why: "As Notas guardam listas no seu telefone." },
      { objective: "O3", q: "A Siri e o Google Assistant são:", options: ["Assistentes de voz que vêm nos telefones", "Supermercados", "Médicos", "Endereços de email"], answer: 0, why: "Fazem tarefas simples quando você fala." },
      { objective: "O3", q: "Uma maneira de acordar um assistente de voz é:", options: ["Abanar o telefone", "Abrir a câmara", "Desligar o telefone", "Dizer \"Hey Siri\" ou \"Hey Google\""], answer: 3, why: "Uma frase de ativação ou carregar sem largar no botão lateral ou de início liga-o." },
      { objective: "O3", q: "Que pedido falado põe um temporizador?", options: ["\"Temporizador.\"", "\"Põe um temporizador de 20 minutos.\"", "\"Olá telefone.\"", "\"Cozinhar.\""], answer: 1, why: "Diz o que fazer e durante quanto tempo." },
      { objective: "O3", q: "Depois de criar um lembrete por voz, deve:", options: ["Desligar o telefone", "Ver no ecrã se ficou criado", "Apagar a aplicação", "Nada"], answer: 1, why: "Ver no ecrã confirma que ficou bem criado." },
      { objective: "O4", q: "A aplicação Calendário ajuda você a:", options: ["Jogar jogos", "Tirar fotos", "Enviar dinheiro", "Guardar as consultas e receber avisos"], answer: 3, why: "Guarda os eventos por data e pode avisar você." },
      { objective: "O4", q: "Quando adiciona uma consulta, o que preenche?", options: ["Nome, data e hora", "O seu número do banco", "A sua palavra-passe", "O seu número do Medicare"], answer: 0, why: "Nome, data e hora são o que o calendário precisa." },
      { objective: "O4", q: "Um alerta um dia antes de uma consulta quer dizer:", options: ["A consulta foi cancelada", "O médico vai ligar", "O telefone lembra-o no dia anterior", "A consulta muda de dia"], answer: 2, why: "Os alertas avisam você com antecedência." },
      { objective: "O4", q: "Também pode adicionar uma consulta:", options: ["Abrindo a câmara", "Enviando uma carta pelo correio", "Desligando o telefone", "Pedindo ao seu assistente de voz"], answer: 3, why: "Os assistentes de voz podem adicionar eventos ao calendário." },
      { objective: "O5", q: "Antes de escrever parte de uma carta na IA, tire:", options: ["As palavras difíceis", "A data", "Nomes, números de conta e a sua morada", "Nada"], answer: 2, why: "Os dados privados nunca vão para a IA." },
      { objective: "O5", q: "Se tirar uma foto a uma carta para a IA, primeiro deve:", options: ["Ligar o flash", "Tapar os dados privados", "Acrescentar a sua palavra-passe", "Escrever nela o seu número da Segurança Social"], answer: 1, why: "Tapar os dados protege a sua privacidade." },
      { objective: "O5", q: "\"Linguagem simples\" quer dizer:", options: ["Palavras simples do dia a dia", "Uma língua estrangeira", "Palavras da lei", "Código de computador"], answer: 0, why: "A linguagem simples é fácil de entender." },
      { objective: "O5", q: "Para confirmar o que uma carta sobre apoios lhe pede para fazer, você:", options: ["Liga para o número impresso na carta", "Confia na IA", "Publica-a na internet", "Ignora-a"], answer: 0, why: "Quem enviou a carta é a fonte oficial." },
      { objective: "O2", q: "Se uma ferramenta não o ajuda, o curso sugere:", options: ["Comprar um telefone mais novo", "Deixá-la de lado e usar o que funciona, até papel", "Deixar de planear", "Partilhar a sua palavra-passe"], answer: 1, why: "Mantenha tudo simples e use o que ajuda." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 2, 4, 8, 10, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Ideias de refeições que servem", objective: "O1", notYet: "O pedido é vago ou as refeições não servem para as suas necessidades.", meets: "Três jantares que servem para o número de pessoas, o seu tempo, o que gosta e o que deve evitar.", exceeds: "As refeições também seguem a dieta que o seu médico lhe deu." },
      { name: "Uma só lista de compras", objective: "O2", notYet: "Não há lista, ou há listas separadas para cada refeição.", meets: "Uma só lista para os três jantares, guardada nas Notas, impressa ou escrita num papel.", exceeds: "Organizada por secção da loja, sem as coisas que já tem em casa." },
      { name: "Lembrete para as compras", objective: "O3", notYet: "Não há lembrete, ou não tem dia nem hora.", meets: "Um lembrete criado com dia e hora, confirmado no ecrã.", exceeds: "Criado a falar com o assistente de voz." },
      { name: "Consulta no calendário", objective: "O4", notYet: "Não há consulta, ou a data ou a hora estão erradas.", meets: "Uma consulta verdadeira com o nome, a data e a hora certos.", exceeds: "Tem um alerta, por exemplo um dia antes." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem usar lembretes ou alertas do calendário para as consultas em 30 dias (inquérito de seguimento)",
      "Alunos que dizem faltar a menos consultas ou ter menos stress com as refeições e as compras",
      "Alunos que começam outro curso de Seniors and Technology (Seniores e Tecnologia) em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com assistente de voz (Siri, Google Assistant ou Gemini) e uma aplicação Calendário",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Uma carta de exemplo sem dados privados verdadeiros, para a prática com cartas",
      "Cerca de 60 minutos no total, em sessões curtas e com calma: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Ajude os alunos a ligar o assistente de voz nas Definições antes da Lição 3; muitas vezes está desligado.",
      "Junte os alunos por tipo de telefone (iPhone ou Android) para os passos no ecrã serem iguais.",
      "Use uma carta de exemplo na prática; nunca peça aos alunos para partilhar números de conta ou do Medicare verdadeiros.",
      "Lembre aos alunos que as dietas especiais vêm do médico, e que as perguntas sobre apoios são para o número da carta.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
