"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-for-seniors.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "seniors-ai-for-seniors-pt",
  lang: "pt",
  translationOf: "seniors-ai-for-seniors",
  category: "Seniors and Technology",
  name: "IA para Pessoas Mais Velhas: Usar Assistentes de IA",
  skills: "Abrir um assistente de IA gratuito, Escrever ou dizer uma pergunta, Pedir respostas mais simples, Verificar o que ele diz, Proteger as informações privadas",
  outcome: "abrir um assistente de IA gratuito no seu telefone, tablet ou computador, fazer-lhe uma pergunta clara a escrever ou a falar, pedir-lhe para explicar de forma mais simples e verificar a resposta antes de agir.",
  about: [
    "Este curso é para pessoas mais velhas que já ouviram falar de assistentes de IA, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, e querem experimentar um, devagar e com segurança. Não precisa de nenhuma experiência.",
    "Você vai abrir um assistente, fazer-lhe perguntas reais sobre coisas da sua vida, como uma receita, uma carta do consultório médico ou uma mensagem de aniversário para um neto, e aprender a tornar as respostas mais claras.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" ao seu ritmo. Há uma pequena verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Pode repetir qualquer lição as vezes que quiser."
  ],
  finalTask: "Use um assistente de IA para planear uma refeição simples em família: peça uma receita fácil para quatro pessoas, peça para pôr os passos em linhas curtas e numeradas, faça uma pergunta de seguimento e verifique um dado (como a temperatura de cozedura) num site de confiança ou com uma pessoa de confiança.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas, muitas vezes reformadas, que querem usar os novos assistentes de IA para a ajuda do dia a dia: cartões e cartas para a família, passatempos, explicar coisas e fazer listas. Algumas vivem sozinhas; muitas têm netos que usam estas ferramentas.",
    startingPoint: "Sabem fazer chamadas e enviar SMS, e muitas usam o e-mail ou um tablet. A maioria nunca usou um assistente de IA e algumas sentem-se inseguras com aplicações, letras pequenas ou com escrever no ecrã.",
    gap: "Os assistentes de IA podem poupar tempo e ajudar as pessoas mais velhas a manterem-se ligadas à família e independentes, mas elas também são alvo de burlas e podem ser enganadas por respostas erradas sobre saúde ou dinheiro. Precisam de abrir um assistente, perguntar com clareza, tornar as respostas mais fáceis de ler, verificar os dados e proteger as informações privadas.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um telefone, tablet ou computador; ecrãs pequenos e letras pequenas podem ser difíceis de ler",
      "Tempo: cerca de 5 minutos por lição, a um ritmo calmo, com tempo para praticar",
      "Respostas sobre saúde, medicamentos e dinheiro têm de ser verificadas com um médico, um farmacêutico ou uma fonte oficial",
      "Risco alto de burlas: nenhum número da Segurança Social (Social Security), do Medicare, do banco nem palavras-passe em nenhum pedido"
    ],
    prerequisites: "Nenhum. Quem nunca usou um ecrã tátil pode pedir a um familiar ou a um ajudante da biblioteca para ficar ao seu lado da primeira vez."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas do dia a dia", action: "identificar em que tarefas um assistente de IA pode ajudar e quais precisam de um médico, de um banco ou de outra pessoa", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Usando o seu telefone, tablet ou computador", action: "abrir um assistente de IA gratuito a partir da loja de aplicações oficial ou do site oficial e encontrar a caixa de mensagem ou o microfone", standard: "sem ajuda" },
    { id: "O3", condition: "Com uma necessidade real da sua vida", action: "escrever ou dizer um pedido que diga o que você precisa, a sua situação e como quer a resposta", standard: "para que a primeira resposta seja útil" },
    { id: "O4", condition: "Com uma resposta longa demais ou difícil de ler", action: "fazer pedidos de seguimento, um de cada vez, para a tornar mais simples ou mais curta", standard: "até ficar fácil de ler e de usar" },
    { id: "O5", condition: "Com uma resposta da IA sobre saúde, dinheiro, um número de telefone ou uma data", action: "verificar esse dado num site oficial, com o seu médico ou farmacêutico, ou com uma pessoa de confiança", standard: "antes de agir" },
    { id: "O6", condition: "Quando escreve um pedido ou recebe uma chamada ou mensagem urgente", action: "deixar de fora as informações privadas e reconhecer os sinais de alerta de uma burla", standard: "sem partilhar números privados, palavras-passe ou códigos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer o seu assistente de IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é um assistente de IA",
          minutes: 4,
          goal: "Dizer com as suas palavras o que um assistente de IA pode e não pode fazer por você.",
          text: [
            "Um assistente de IA é um programa de computador com quem você pode falar ou escrever com palavras do dia a dia, como se escrevesse um bilhete a um vizinho prestável. Você faz uma pergunta e, poucos segundos depois, ele escreve uma resposta.",
            "Alguns assistentes gratuitos conhecidos são o ChatGPT, o Microsoft Copilot e o Google Gemini. São bons a explicar coisas de forma simples, a escrever um primeiro rascunho de um cartão ou de uma carta, a dar ideias para um passatempo e a fazer listas.",
            "Um assistente não é uma pessoa, e não é o seu médico, o seu advogado nem o seu banco. Não conhece você e pode estar errado, mesmo quando parece muito seguro. Quem manda é você: você decide o que perguntar e em que acreditar."
          ],
          words: [["IA", "abreviatura de inteligência artificial: programas de computador que conseguem fazer tarefas como escrever ou responder a perguntas."], ["Assistente de IA", "um programa de IA com quem você conversa, a escrever ou a falar."]],
          slides: [
            { title: "Um assistente de IA é...", bullets: ["Um programa de computador com quem você conversa", "Você pergunta com palavras do dia a dia", "Ele escreve uma resposta em segundos"] },
            { title: "Ele pode ajudar você a", bullets: ["Explicar de forma simples uma palavra ou uma carta difícil", "Escrever um cartão de aniversário ou um bilhete de agradecimento", "Dar ideias de receitas, passatempos e viagens"] },
            { title: "Ele NÃO é", bullets: ["O seu médico, advogado ou banco", "Sempre certo, mesmo quando parece seguro", "Quem manda: quem manda é você"] }
          ],
          tryIt: "Numa folha de papel, escreva três coisas em que um assistente de IA pode ajudar você este mês, por exemplo um cartão para um neto, uma pergunta sobre uma planta do quintal ou uma receita.",
          youCanNow: "dizer o que é um assistente de IA, dar três exemplos de ajuda que ele pode dar e explicar porque continua a verificar o que ele diz.",
          quickCheck: [
            { objective: "O1", q: "Em que tarefa um assistente de IA é bom?", options: ["Escrever um primeiro rascunho de um cartão de aniversário", "Dar-lhe os resultados das suas análises ao sangue", "Mexer no dinheiro do seu banco", "Ir ao médico por você"], answer: 0, why: "Os assistentes são bons em rascunhos, ideias e listas; não são o seu médico nem o seu banco." },
            { objective: "O1", q: "Um assistente de IA parece muito seguro sobre uma regra dos seus apoios. O que faz?", options: ["Confia, porque parece seguro", "Lembra-se de que pode estar errado e confirma com o serviço", "Conta logo aos seus amigos", "Pede-lhe para prometer que está certo"], answer: 1, why: "Os assistentes podem estar errados mesmo quando parecem seguros, e é você quem decide em que acreditar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir um assistente no telefone, tablet ou computador",
          minutes: 6,
          goal: "Abrir um assistente de IA gratuito e encontrar a caixa onde se escreve ou se fala.",
          text: [
            "Pode usar um assistente num smartphone, num tablet ou num computador. Escolha o aparelho com que se sente mais à vontade. Um neto, um amigo ou um ajudante da biblioteca pode ficar ao seu lado da primeira vez.",
            "No telefone ou tablet: abra a loja de aplicações (a Play Store no Android, a App Store no iPhone e no iPad). Toque na caixa de pesquisa, escreva o nome do assistente e instale a aplicação feita pela empresa verdadeira: a OpenAI para o ChatGPT, a Microsoft para o Copilot, a Google para o Gemini.",
            "No computador: abra o navegador de internet e escreva o endereço com cuidado, por exemplo chatgpt.com, copilot.microsoft.com ou gemini.google.com. Alguns deixam começar sem conta; outros pedem para iniciar sessão.",
            "Procure a caixa de mensagem, normalmente perto do fundo do ecrã. Muitas vezes diz \"Pergunte qualquer coisa\" ou \"Mensagem\". Muitas aplicações também mostram um pequeno microfone em que pode tocar para falar em vez de escrever."
          ],
          steps: ["Escolha o seu telefone, tablet ou computador.", "Telefone ou tablet: instale a aplicação oficial a partir da loja de aplicações. Computador: escreva o endereço do site no navegador.", "Encontre a caixa de mensagem perto do fundo do ecrã.", "Encontre o botão do microfone se preferir falar."],
          words: [["Loja de aplicações", "o lugar oficial no telefone ou tablet para obter aplicações com segurança."], ["Navegador de internet", "o programa que usa para visitar sites, como o Chrome, o Edge ou o Safari."], ["Botão do microfone", "um pequeno desenho de um microfone em que toca para falar em vez de escrever."]],
          slides: [
            { title: "Use o que lhe for mais fácil", bullets: ["Smartphone, tablet ou computador", "Peça a um familiar ou bibliotecário para ficar ao seu lado"] },
            { title: "No telefone ou tablet", bullets: ["Abra a loja de aplicações oficial", "Procure o nome do assistente", "Instale a aplicação da empresa verdadeira"] },
            { title: "No computador", bullets: ["Abra o navegador de internet", "Escreva chatgpt.com, copilot.microsoft.com ou gemini.google.com", "Escreva o endereço com cuidado"] },
            { title: "Encontre onde falar", bullets: ["Caixa de mensagem perto do fundo", "Pode dizer \"Pergunte qualquer coisa\"", "O botão do microfone deixa você falar"] }
          ],
          tryIt: "Abra um assistente gratuito. Encontre a caixa de mensagem e escreva, ou diga: Olá, sou novo nisto. Por favor, responda com frases curtas e simples. Leia a resposta.",
          youCanNow: "abrir um assistente de IA gratuito e encontrar onde escrever ou dizer a sua pergunta.",
          quickCheck: [
            { objective: "O2", q: "Quem faz a verdadeira aplicação Microsoft Copilot?", options: ["Qualquer empresa com um nome parecido", "A Google", "A Microsoft", "A OpenAI"], answer: 2, why: "Instale a aplicação feita pela empresa verdadeira: a Microsoft para o Copilot." },
            { objective: "O2", q: "Escrever no telefone é difícil para você. O que procura na aplicação do assistente?", options: ["O ícone da bateria", "O botão da câmara", "A roda das definições", "O pequeno microfone em que pode tocar para falar"], answer: 3, why: "Muitas aplicações mostram um microfone para poder falar em vez de escrever." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer uma pergunta clara",
          minutes: 5,
          goal: "Escrever ou dizer uma pergunta que dê uma resposta útil à primeira.",
          text: [
            "O que você escreve ou diz a um assistente chama-se pedido (em inglês, \"prompt\"). Quanto mais claro o pedido, melhor a resposta.",
            "Um bom pedido tem três partes: o que você precisa, um pouco sobre a sua situação e como quer a resposta. Por exemplo: \"A minha neta faz 8 anos no sábado e adora cavalos. Escreva uma mensagem de aniversário curta da avó. Use palavras simples.\"",
            "Um pedido curto demais, como \"aniversário\", faz o assistente adivinhar, e você recebe uma resposta geral. Pode escrever algumas frases. Não tenha pressa; o assistente espera por você."
          ],
          steps: ["Diga o que precisa.", "Acrescente um pouco sobre a sua situação, sem detalhes privados.", "Diga como quer a resposta: curta, com palavras simples, em passos grandes ou numa lista."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."]],
          slides: [
            { title: "O pedido é a sua pergunta", bullets: ["Pedido claro = resposta melhor", "Curto demais = resposta geral"] },
            { title: "Três partes de um bom pedido", bullets: ["1. O que você precisa", "2. Um pouco sobre a sua situação", "3. Como quer a resposta"] },
            { title: "Um exemplo", bullets: ["\"A minha neta faz 8 anos e adora cavalos.", "Escreva uma mensagem de aniversário curta da avó.", "Use palavras simples.\""] }
          ],
          tryIt: "Escolha uma coisa da sua lista da Lição 1. Escreva um pedido com as três partes, envie-o e leia a resposta devagar.",
          youCanNow: "fazer a um assistente de IA uma pergunta clara com o que precisa, a sua situação e como quer a resposta.",
          quickCheck: [
            { objective: "O3", q: "O que é um pedido (prompt)?", options: ["Um lembrete no seu calendário", "O que você escreve ou diz ao assistente", "A resposta que o assistente dá", "Uma palavra-passe"], answer: 1, why: "O pedido é aquilo que você pede ao assistente, a escrever ou a falar." },
            { objective: "O3", q: "Quer um bilhete de agradecimento para o vizinho que arranjou a sua vedação. Qual é o melhor pedido?", options: ["\"bilhete\"", "\"obrigado\"", "\"Escreva qualquer coisa.\"", "\"O meu vizinho arranjou a minha vedação. Escreva um bilhete de agradecimento curto e caloroso, com palavras simples.\""], answer: 3, why: "Diz o que precisa, a sua situação e como quer a resposta." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer o seu assistente de IA",
        questions: [
          { objective: "O1", q: "O que é um assistente de IA?", options: ["Uma pessoa num centro de atendimento", "Um tipo de televisão", "Um programa de computador com quem conversa com palavras do dia a dia", "Um serviço do governo"], answer: 2, why: "Um assistente de IA é um programa a quem você escreve ou fala, e ele escreve as respostas." },
          { objective: "O1", q: "O assistente parece muito seguro sobre uma pergunta de medicamentos. O que deve fazer?", options: ["Confirmar com o seu médico ou farmacêutico", "Seguir logo o que diz", "Deixar de tomar todos os medicamentos", "Dizer ao seu vizinho para seguir o que diz"], answer: 0, why: "A IA pode estar errada mesmo quando parece segura; as perguntas de saúde são para o seu médico ou farmacêutico." },
          { objective: "O2", q: "Onde é seguro obter uma aplicação de IA no telefone ou tablet?", options: ["Num link numa SMS de um desconhecido", "Num anúncio que aparece no ecrã", "Em qualquer site", "Na loja de aplicações oficial, da empresa verdadeira"], answer: 3, why: "A loja de aplicações oficial e a aplicação da empresa verdadeira são a escolha segura." },
          { objective: "O2", q: "Prefere falar a escrever. O que procura?", options: ["O ícone da bateria", "O botão do microfone", "A câmara", "O botão do volume"], answer: 1, why: "O botão do microfone deixa você dizer a sua pergunta." },
          { objective: "O3", q: "Qual é o pedido mais claro?", options: ["\"aniversário\"", "\"A minha neta faz 8 anos e adora cavalos. Escreva uma mensagem de aniversário curta da avó, com palavras simples.\"", "\"ajuda\"", "\"cartão\""], answer: 1, why: "Diz o que precisa, a sua situação e como quer a resposta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ter boas respostas com segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir uma resposta mais simples ou mais curta",
          minutes: 4,
          goal: "Usar perguntas de seguimento para tornar uma resposta mais fácil de ler e de usar.",
          text: [
            "Nunca tem de aceitar a primeira resposta. O assistente lembra-se do que você disse antes na mesma conversa, por isso pode pedir-lhe para mudar a resposta.",
            "Pedidos de seguimento úteis: \"Por favor, use palavras mais simples.\" \"Faça mais curto.\" \"Ponha em passos numerados.\" \"Explique outra vez o passo 3.\" \"Dê-me um exemplo.\" \"Faça soar mais caloroso.\"",
            "Se tem dificuldade em ler letras pequenas, também pode aumentar o tamanho das letras no seu aparelho. Peça a um familiar para lhe mostrar a definição do tamanho do texto, ou pergunte ao assistente: \"Como aumento as letras no meu iPhone?\""
          ],
          steps: ["Leia a primeira resposta devagar.", "Decida o que a tornaria melhor.", "Peça essa única mudança.", "Repita até a resposta servir para você."],
          words: [["Pedido de seguimento", "uma segunda pergunta que parte da resposta que recebeu."]],
          slides: [
            { title: "A primeira resposta é só um rascunho", bullets: ["Pode pedir mudanças", "Ele lembra-se da mesma conversa"] },
            { title: "Pedidos de seguimento que funcionam", bullets: ["\"Por favor, use palavras mais simples.\"", "\"Faça mais curto.\"", "\"Ponha em passos numerados.\"", "\"Explique outra vez o passo 3.\""] },
            { title: "Difícil de ler?", bullets: ["Aumente as letras no seu aparelho", "Pergunte ao assistente como fazer", "Peça a um familiar para lhe mostrar"] }
          ],
          tryIt: "Pegue na resposta da Lição 3. Peça duas mudanças, uma de cada vez, como \"faça mais curto\" e depois \"faça soar mais caloroso\". Compare a primeira e a última resposta.",
          youCanNow: "melhorar uma resposta da IA fazendo perguntas de seguimento claras.",
          quickCheck: [
            { objective: "O4", q: "Porque pode pedir ao assistente para mudar a resposta?", options: ["Ele lembra-se do que você disse antes na mesma conversa", "Ele tem de recomeçar de cada vez", "Ele lê os seus pensamentos", "Ele só responde uma vez"], answer: 0, why: "Na mesma conversa o assistente lembra-se das mensagens anteriores, por isso pode pedir mudanças." },
            { objective: "O4", q: "A resposta com a receita é um parágrafo comprido. O que envia a seguir?", options: ["\"Errado.\"", "Nada; fecha a aplicação", "\"Ponha em passos numerados.\"", "\"Faça mais comprido.\""], answer: 2, why: "Um pedido de seguimento claro, que diz a mudança, torna a resposta mais fácil de usar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar uma resposta antes de agir",
          minutes: 5,
          goal: "Verificar uma resposta da IA numa fonte de confiança antes de contar com ela.",
          text: [
            "Os assistentes de IA às vezes inventam coisas: um número de telefone errado, o horário de uma loja, um dado sobre um medicamento ou uma regra que mudou. A isto chama-se \"alucinação\".",
            "Verifique sempre tudo o que tem a ver com a sua saúde, medicamentos, dinheiro, apoios como a Segurança Social (Social Security) ou o Medicare (seguro de saúde do governo dos EUA), datas, moradas e números de telefone. Verifique no site oficial, no próprio serviço, com o seu médico ou farmacêutico, ou com uma pessoa de confiança.",
            "Um bom hábito é perguntar: \"Onde posso verificar isto?\" Depois encontre você mesmo essa página oficial. Os sites oficiais do governo dos Estados Unidos acabam em .gov."
          ],
          steps: ["Encontre os dados na resposta: números, datas, nomes, regras.", "Procure-os no site oficial ou ligue para o serviço.", "Se não forem iguais, confie na fonte oficial.", "Para saúde e dinheiro, pergunte também ao seu médico, farmacêutico ou a uma pessoa de confiança."],
          words: [["Alucinação", "quando uma IA escreve algo que parece verdade mas é inventado."], [".gov", "o final dos endereços dos sites oficiais do governo dos Estados Unidos."]],
          slides: [
            { title: "A IA pode inventar coisas", bullets: ["Números de telefone ou horários errados", "Regras antigas", "Dados errados sobre medicamentos"] },
            { title: "Verifique sempre", bullets: ["Saúde e medicamentos", "Dinheiro e apoios", "Datas, moradas e números de telefone"] },
            { title: "Como verificar", bullets: ["Site oficial, muitas vezes acaba em .gov", "Ligue para o serviço", "Pergunte ao seu médico, farmacêutico ou a alguém de confiança"] }
          ],
          tryIt: "Pergunte a um assistente o horário da biblioteca perto de você. Depois veja o site da própria biblioteca ou ligue para lá. A resposta era igual?",
          youCanNow: "reconhecer os dados que precisam de ser verificados e verificá-los numa fonte de confiança.",
          quickCheck: [
            { objective: "O5", q: "O que é uma alucinação na IA?", options: ["Quando o ecrã fica escuro", "Quando a aplicação está lenta", "Quando o assistente fala em voz alta", "Quando o assistente inventa algo que parece verdade"], answer: 3, why: "A IA pode inventar um número de telefone, um horário ou uma regra errados que parecem verdadeiros." },
            { objective: "O5", q: "O assistente diz-lhe quanto tomar de um medicamento. O que faz?", options: ["Toma logo essa quantidade", "Confirma primeiro com o seu médico ou farmacêutico", "Pergunta a outra IA", "Partilha com os amigos"], answer: 1, why: "As respostas sobre saúde e medicamentos têm de ser confirmadas com o seu médico ou farmacêutico." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger as suas informações privadas",
          minutes: 5,
          goal: "Usar um assistente de IA sem partilhar informações privadas.",
          text: [
            "Nunca escreva informações privadas num assistente de IA: o seu número da Segurança Social (Social Security), o número do Medicare, números de banco ou de cartão, palavras-passe ou a sua morada completa. Pode ter a ajuda de que precisa sem eles. Escreva \"[o meu número]\" no lugar.",
            "Os burlões também usam IA. Conseguem escrever mensagens que parecem verdadeiras e até copiar a voz de um neto ao telefone. Tenha cuidado com qualquer chamada ou mensagem que o apressa, que pede dinheiro ou cartões-presente, ou que pede um código enviado para o seu telefone.",
            "Se alguma coisa parecer errada, pare. Desligue e ligue de volta para a pessoa usando um número que já sabe que é verdadeiro."
          ],
          steps: ["Antes de enviar um pedido, leia-o para encontrar informações privadas.", "Troque-as por um marcador como \"[o meu número]\".", "Trate a pressa, os cartões-presente e os pedidos de códigos como sinais de alerta.", "Ligue de volta para um número que já conhece."],
          words: [["Informações privadas", "dados que podem deixar alguém fingir ser você ou ficar com o seu dinheiro."], ["Marcador", "uma palavra no lugar do dado verdadeiro, como \"[o meu número]\"."]],
          slides: [
            { title: "Nunca escreva na IA", bullets: ["Números da Segurança Social ou do Medicare", "Números de banco ou de cartão", "Palavras-passe"] },
            { title: "Use um marcador", bullets: ["Escreva \"[o meu número]\" no lugar", "Mesmo assim tem a ajuda de que precisa"] },
            { title: "Sinais de alerta de burla", bullets: ["Apressam você", "Querem dinheiro ou cartões-presente", "Pedem um código enviado para o seu telefone"] },
            { title: "Na dúvida", bullets: ["Pare", "Desligue", "Ligue de volta para um número que sabe que é verdadeiro"] }
          ],
          tryIt: "Tarefa final: peça a um assistente uma receita fácil para quatro pessoas, peça para pôr os passos em linhas curtas e numeradas, faça uma pergunta de seguimento e verifique um dado, como a temperatura de cozedura, num site de confiança ou com alguém de confiança.",
          youCanNow: "usar um assistente de IA numa tarefa real, verificar a resposta e proteger as suas informações privadas.",
          quickCheck: [
            { objective: "O6", q: "Qual destes nunca deve escrever num assistente de IA?", options: ["O seu número do Medicare", "A sua receita preferida", "O nome de um pássaro que viu", "Uma pergunta sobre o seu quintal"], answer: 0, why: "Os números do Medicare, da Segurança Social e do banco são privados; use um marcador no lugar." },
            { objective: "O6", q: "Uma SMS diz que a sua conta fecha hoje se não enviar o código que acabou de receber. O que faz?", options: ["Envia o código depressa", "Responde com o seu número do banco", "Não partilha o código; liga para a empresa por um número que conhece", "Reencaminha-a para os seus netos"], answer: 2, why: "Apressar você e pedir um código são sinais de alerta de burla." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ter boas respostas com segurança",
        questions: [
          { objective: "O4", q: "A resposta usa palavras que não entende. O que escreve?", options: ["\"Faça mais comprido.\"", "O seu número do Medicare", "Nada; fecha a aplicação", "\"Por favor, use palavras mais simples.\""], answer: 3, why: "Um pedido de seguimento pede ao assistente para mudar a resposta." },
          { objective: "O5", q: "Qual destes deve SEMPRE verificar numa fonte de confiança?", options: ["Quanto tomar de um medicamento", "Uma piada", "Um poema de aniversário", "Uma lista de nomes de flores"], answer: 0, why: "Os dados de saúde e medicamentos têm de ser confirmados com o seu médico ou farmacêutico." },
          { objective: "O5", q: "O que quer dizer \"alucinação\" na IA?", options: ["O ecrã está claro demais", "Um tipo de aplicação", "A IA escreveu algo que parece verdade mas é inventado", "Uma ligação à internet lenta"], answer: 2, why: "A IA pode inventar dados que parecem verdadeiros." },
          { objective: "O6", q: "O que deve escrever num pedido no lugar do seu número do Medicare?", options: ["O número verdadeiro", "Metade do número", "O seu número do banco", "Um marcador como \"[o meu número]\""], answer: 3, why: "Um marcador deixa você ter ajuda sem partilhar informações privadas." },
          { objective: "O6", q: "Alguém liga com a voz do seu neto e pede cartões-presente já. O que faz?", options: ["Compra-os depressa", "Dá-lhes o código do seu telefone", "Desliga e liga para o seu neto por um número que conhece", "Envia os dados do seu banco"], answer: 2, why: "Os burlões conseguem copiar vozes; a pressa e os cartões-presente são sinais de alerta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Pessoas Mais Velhas: Usar Assistentes de IA",
    questions: [
      { objective: "O1", q: "A melhor descrição de um assistente de IA é:", options: ["Uma pessoa num centro de atendimento", "Um programa de computador com quem conversa", "Uma empresa de telefones", "Uma loja"], answer: 1, why: "É um programa a quem você escreve ou fala." },
      { objective: "O1", q: "Qual é um bom uso de um assistente de IA?", options: ["Escrever um rascunho de um bilhete de agradecimento a um amigo", "Decidir a dose do seu medicamento", "Assinar papéis por você", "Saber o saldo do seu banco"], answer: 0, why: "Escrever rascunhos de bilhetes e cartões é um dos seus pontos fortes." },
      { objective: "O1", q: "Quem manda quando usa um assistente de IA?", options: ["Você", "A empresa de telefones", "A IA", "Ninguém"], answer: 0, why: "Você decide o que perguntar e em que acreditar." },
      { objective: "O2", q: "Qual é um assistente de IA gratuito conhecido?", options: ["Uma calculadora", "Google Gemini", "Uma impressora", "Um comando à distância"], answer: 1, why: "O Gemini, o ChatGPT e o Copilot são assistentes gratuitos conhecidos." },
      { objective: "O2", q: "O lugar seguro para obter uma aplicação de IA num tablet é:", options: ["Um link num e-mail de um desconhecido", "Um anúncio que aparece no ecrã", "A loja de aplicações oficial", "Qualquer site"], answer: 2, why: "Instale só a partir da loja de aplicações oficial." },
      { objective: "O2", q: "Que endereço abre o ChatGPT no computador?", options: ["chatgpt.gift", "chatgpt-prize.net", "free-chatgpt.win", "chatgpt.com"], answer: 3, why: "chatgpt.com é o endereço oficial." },
      { objective: "O2", q: "Onde costuma escrever a sua pergunta?", options: ["No ícone da bateria", "No relógio", "Na caixa de mensagem perto do fundo", "Na câmara"], answer: 2, why: "A caixa de mensagem muitas vezes diz \"Pergunte qualquer coisa\" ou \"Mensagem\"." },
      { objective: "O2", q: "Quer dizer a sua pergunta em voz alta. Toca:", options: ["No botão do microfone", "Na câmara", "No botão de ligar", "No botão do volume"], answer: 0, why: "O botão do microfone deixa você falar em vez de escrever." },
      { objective: "O3", q: "O que é um pedido (prompt)?", options: ["Um alarme de lembrete", "O final de um endereço de site", "Um carregador de telefone", "O que você escreve ou diz ao assistente"], answer: 3, why: "O pedido é aquilo que você pede ao assistente." },
      { objective: "O3", q: "Um bom pedido inclui:", options: ["Só uma palavra", "O que precisa, a sua situação e como quer a resposta", "A sua palavra-passe", "O seu número da Segurança Social"], answer: 1, why: "Essas três partes dão uma resposta útil." },
      { objective: "O3", q: "Que pedido deve dar a resposta mais útil?", options: ["\"quintal\"", "\"As folhas dos meus tomateiros têm manchas amarelas. O que pode ser? Responda em passos curtos e simples.\"", "\"plantas\"", "\"ajuda\""], answer: 1, why: "Dá a necessidade, a situação e o formato." },
      { objective: "O4", q: "A primeira resposta é longa demais. Você pode:", options: ["Desligar o aparelho", "Só aceitá-la", "Pagar para a corrigir", "Pedir: \"Faça mais curto.\""], answer: 3, why: "Os pedidos de seguimento mudam a resposta." },
      { objective: "O4", q: "Qual é um pedido de seguimento útil?", options: ["\"Ponha em passos numerados.\"", "\"Aqui está o número do meu cartão.\"", "\"Apague o meu telefone.\"", "\"Envie dinheiro.\""], answer: 0, why: "Pede uma mudança clara na resposta." },
      { objective: "O4", q: "As letras no ecrã são pequenas demais. O que pode fazer?", options: ["Desistir", "Comprar um telefone novo hoje", "Aumentar as letras nas definições do aparelho ou pedir a alguém para lhe mostrar", "Escrever a sua palavra-passe"], answer: 2, why: "Os aparelhos têm uma definição do tamanho do texto; um familiar ou o assistente pode mostrar como." },
      { objective: "O5", q: "O assistente dá-lhe o número de telefone de uma clínica. Você deve:", options: ["Dar-lhe o seu número do Medicare", "Ligar sem verificar", "Publicá-lo na internet", "Verificá-lo no site da própria clínica ou numa carta da clínica"], answer: 3, why: "A IA pode dar números errados; verifique na fonte oficial." },
      { objective: "O5", q: "Os sites oficiais do governo dos Estados Unidos acabam em:", options: [".win", ".gift", ".gov", ".xyz"], answer: 2, why: ".gov é usado pelos sites do governo dos EUA." },
      { objective: "O5", q: "Numa pergunta sobre medicamentos, a melhor pessoa para confirmar a resposta é:", options: ["Um desconhecido na internet", "O seu médico ou farmacêutico", "A própria IA", "Um anúncio que aparece no ecrã"], answer: 1, why: "Os dados de saúde têm de ser confirmados com um profissional." },
      { objective: "O6", q: "O que NUNCA deve escrever num assistente de IA?", options: ["O número do seu cartão do banco", "\"Dê-me um exemplo.\"", "\"Use palavras mais simples.\"", "\"Faça soar mais caloroso.\""], answer: 0, why: "Os números de banco e de cartão são informações privadas." },
      { objective: "O6", q: "Alguém pede o código que acabou de chegar por SMS ao seu telefone. Você deve:", options: ["Nunca o partilhar", "Publicá-lo", "Enviá-lo por SMS a essa pessoa", "Lê-lo para essa pessoa"], answer: 0, why: "Esse código protege a sua conta; os serviços verdadeiros não o pedem." },
      { objective: "O6", q: "Se uma chamada parecer errada, o passo mais seguro é:", options: ["Continuar a falar", "Desligar e ligar de volta para um número que sabe que é verdadeiro", "Dar-lhes a sua morada", "Enviar um pequeno pagamento"], answer: 1, why: "Ligar de volta para um número conhecido trava a maioria das burlas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 4, 9, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Abriu o assistente", objective: "O2", notYet: "Precisou de outra pessoa para abrir o assistente, ou usou uma aplicação ou site não oficial.", meets: "Abriu um assistente oficial e encontrou a caixa de mensagem ou o microfone.", exceeds: "Sabe mostrar a um amigo ou familiar como o abrir." },
      { name: "Pedido claro", objective: "O3", notYet: "O pedido é vago, por exemplo \"receita\".", meets: "Pediu uma receita fácil para quatro pessoas, com a situação e como a resposta devia ser.", exceeds: "Acrescentou um detalhe, como um alimento que alguém não pode comer, e a primeira resposta ficou quase pronta." },
      { name: "Tornou mais fácil", objective: "O4", notYet: "Usou a primeira resposta como estava, mesmo sendo difícil de ler.", meets: "Pediu passos curtos e numerados e fez mais uma pergunta de seguimento.", exceeds: "Pediu as mudanças uma de cada vez e sabe dizer o que cada uma corrigiu." },
      { name: "Dado verificado", objective: "O5", notYet: "Confiou num dado, como a temperatura de cozedura, sem verificar.", meets: "Verificou um dado num site de confiança ou com uma pessoa de confiança.", exceeds: "Sabe dizer onde verificou e se era igual." },
      { name: "Informações privadas de fora", objective: "O6", notYet: "O pedido tem um número privado, uma morada ou uma palavra-passe.", meets: "Nenhuma informação privada em nenhum pedido.", exceeds: "Sabe dizer dois sinais de alerta de burla." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter usado um assistente de IA para um cartão, uma carta, uma receita ou uma pergunta em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter reconhecido e evitado uma chamada ou mensagem de burla",
      "Alunos que começam outro curso de Seniors and Technology em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone, tablet ou computador com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Óculos de leitura, se precisar, e papel e caneta para as notas",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Vá devagar e junte cada aluno a um ajudante ou a um neto na primeira vez que abre a aplicação.",
      "Antes de começar, mostre como aumentar as letras no aparelho de cada aluno.",
      "Nunca peça aos alunos para escrever dados privados verdadeiros; use marcadores como [o meu número].",
      "Lembre aos alunos que as respostas sobre saúde, medicamentos e dinheiro têm de ser confirmadas com um médico, um farmacêutico ou um serviço oficial.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
