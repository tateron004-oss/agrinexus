"use strict";

// Koach Learn course (Portuguese translation of shared/intro-to-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "intro-to-ai-pt",
  lang: "pt",
  translationOf: "intro-to-ai",
  category: "Seniors and Technology",
  name: "Introdução à Inteligência Artificial",
  skills: "Explicar o que é a IA, Reconhecer a IA no dia a dia, Escrever pedidos claros, Melhorar e verificar respostas, Usar a IA de forma justa e segura",
  outcome: "explicar com palavras simples o que é a inteligência artificial e como ela aprende, reconhecê-la nas ferramentas que já usa e usar um assistente de IA gratuito para terminar uma tarefa real do dia a dia: pedir com clareza, melhorar a resposta, verificá-la e não colocar nela informações privadas.",
  about: [
    "A inteligência artificial, ou IA, está nos telefones, nos mapas, no correio eletrónico, nos sites de compras e nos sites de emprego. Este curso explica o que ela é com palavras simples e depois mostra como usá-la bem. É para todos: avós, estudantes, pessoas à procura de trabalho, voluntários e pequenas equipas.",
    "No Capítulo 1 você aprende o que é a IA, como ela aprende com exemplos e onde já a encontra. No Capítulo 2 usa um assistente de IA gratuito para fazer trabalho real, verificar o que ele diz e usá-lo de forma justa e segura.",
    "Cada lição dura cerca de cinco minutos: leia, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha uma tarefa real, como planear um jantar de família, uma mensagem para inscrever voluntários ou um plano de estudo para a semana. Use um assistente de IA gratuito para a fazer: escreva um pedido claro, peça duas melhorias, verifique um dado da resposta num site oficial ou de confiança e confirme que o pedido não tem informações privadas. Depois explique a um amigo, em três frases, o que é a IA e porque verificou a resposta.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que estão a começar com a inteligência artificial: idosos, estudantes, pessoas à procura de trabalho, voluntários, pessoas que voltam da prisão e trabalhadores de organizações sem fins lucrativos e de pequenas equipas. Muitos já ouviram falar de IA nas notícias, mas nunca usaram um assistente de IA de propósito.",
    startingPoint: "Sabem usar um telefone ou um computador para abrir um navegador de internet, escrever uma mensagem curta e usar aplicações comuns como mapas, correio eletrónico e vídeos. Poucos sabem dizer o que é a IA, onde ela está nas suas aplicações ou como pedir ajuda a um assistente de IA e verificar o que ele diz.",
    gap: "A IA está agora nos telefones, nos mapas, no correio eletrónico, nas compras, nos bancos e nos sites de emprego, e os assistentes de IA gratuitos podem poupar muito tempo. Quem não a entende evita uma ferramenta útil ou confia demais nela, partilha informações privadas ou cai em burlas feitas com IA.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra nova, como pedido, dados e enviesamento, é explicada",
      "Aparelhos: um telefone, tablet ou computador com internet e um navegador de internet",
      "Tempo: lições de 4 a 6 minutos, cerca de 60 minutos no total",
      "Custo: só assistentes de IA gratuitos (ChatGPT, Microsoft Copilot ou Google Gemini); não é preciso nenhum plano pago",
      "Privacidade: os alunos nunca escrevem num assistente de IA números de identificação, palavras-passe, dados do banco, números médicos ou a morada completa"
    ],
    prerequisites: "Nenhum. Os alunos devem saber abrir um navegador de internet e escrever uma mensagem curta."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Sem notas", action: "explicar com palavras simples o que são a inteligência artificial e a IA generativa e porque a IA pode parecer segura e mesmo assim estar errada", standard: "em duas ou três frases que usem as ideias de padrões e de palpites" },
    { id: "O2", condition: "Com um exemplo simples, como um filtro de spam", action: "descrever como uma IA aprende com dados e como dados fracos ou de um só lado levam a respostas enviesadas", standard: "dizendo quais são os exemplos, os padrões e uma maneira como os palpites podem ser injustos" },
    { id: "O3", condition: "Usando o seu próprio telefone ou computador", action: "identificar pelo menos cinco lugares onde já usa IA e encontrar uma definição que a controla", standard: "com cinco exemplos certos e uma definição aberta" },
    { id: "O4", condition: "Usando um assistente de IA gratuito", action: "escrever um pedido claro que diga o que precisa, a situação e como quer a resposta", standard: "com as três partes e sem informações privadas" },
    { id: "O5", condition: "Com uma primeira resposta de um assistente de IA", action: "melhorar a resposta com pedidos de seguimento e verificar os seus dados numa fonte oficial ou de confiança", standard: "com pelo menos dois pedidos de seguimento e pelo menos um dado verificado" },
    { id: "O6", condition: "Antes de enviar um pedido ou de usar palavras escritas pela IA", action: "verificar se o pedido tem informações privadas, seguir as regras sobre a ajuda da IA e reagir com segurança às burlas feitas com IA", standard: "com cada detalhe privado trocado por um marcador e a ação segura certa escolhida todas as vezes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que é a IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "A IA em palavras simples",
          minutes: 4,
          goal: "Explicar em duas frases o que é a inteligência artificial.",
          text: [
            "Inteligência artificial (IA) quer dizer programas de computador que fazem tarefas que normalmente precisam de uma pessoa: entender a fala, reconhecer uma cara numa fotografia, sugerir uma música, traduzir uma frase ou escrever a resposta a uma pergunta.",
            "A IA não pensa nem sente como uma pessoa. Ela é muito boa a encontrar padrões em enormes quantidades de exemplos e a usar esses padrões para dar um palpite. Um bom palpite pode parecer inteligente; um mau palpite pode parecer igualmente seguro.",
            "Há muitos tipos de IA. O tipo de que mais se fala hoje é a IA generativa: ferramentas como o ChatGPT, o Microsoft Copilot e o Google Gemini, que geram (criam) textos, imagens ou sons novos quando você pede."
          ],
          words: [["Inteligência artificial (IA)", "programas de computador que fazem tarefas que normalmente precisam de uma pessoa, como entender a fala ou responder a perguntas."], ["Padrão", "algo que se repete de uma maneira que se pode prever."], ["IA generativa", "IA que cria textos, imagens ou sons novos quando você pede."]],
          slides: [
            { title: "A IA é...", bullets: ["Programas de computador que fazem tarefas que normalmente precisam de uma pessoa", "Fala, fotografias, sugestões, tradução, escrita"] },
            { title: "Como funciona, numa linha", bullets: ["Encontra padrões em muitos exemplos", "Depois dá o melhor palpite"] },
            { title: "Não é uma pessoa", bullets: ["Não pensa nem sente", "Um palpite errado pode parecer tão seguro como um certo"] },
            { title: "IA generativa", bullets: ["Cria textos, imagens ou sons novos", "Exemplos: ChatGPT, Microsoft Copilot, Google Gemini"] }
          ],
          tryIt: "Sem olhar para trás, diga ou escreva duas frases que expliquem a IA a alguém que nunca ouviu falar dela. Use as palavras \"padrões\" e \"palpite\".",
          youCanNow: "explicar com palavras simples o que é a IA e porque ela pode estar errada.",
          quickCheck: [
            { objective: "O1", q: "Neste curso, o que faz a IA generativa?", options: ["Só arruma os e-mails em pastas", "Cria textos, imagens ou sons novos quando você pede", "Pensa e sente como uma pessoa", "Sabe sempre a resposta verdadeira"], answer: 1, why: "As ferramentas de IA generativa, como o ChatGPT, o Copilot e o Gemini, geram textos, imagens ou sons novos." },
            { objective: "O1", q: "Um amigo diz: \"A IA parecia tão segura que deve estar certa.\" O que lhe diria?", options: ["É verdade; a IA nunca erra quando parece segura", "Só as ferramentas de IA pagas podem errar", "A IA dá palpites a partir de padrões, por isso um palpite errado pode parecer igualmente seguro", "A IA só erra quando a internet está lenta"], answer: 2, why: "A IA usa padrões para dar um palpite, e um mau palpite pode parecer tão seguro como um bom." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Como a IA aprende com exemplos",
          minutes: 5,
          goal: "Descrever como uma IA aprende, usando um exemplo simples.",
          text: [
            "Hoje, a maior parte da IA aprende com exemplos, e não com regras escritas por uma pessoa. Para ensinar um programa a reconhecer e-mails de spam (lixo), as pessoas mostram-lhe muitos e-mails marcados como \"spam\" ou \"não spam\". O programa encontra os padrões, como certas palavras ou links estranhos, e usa-os nos e-mails novos.",
            "Os exemplos com que ela aprende chamam-se dados. Dados bons e variados dão uma IA melhor. Se os dados forem antigos, de um só lado ou deixarem de fora alguns grupos de pessoas, os palpites da IA também vão ser antigos, de um só lado ou injustos. A isto chama-se enviesamento.",
            "As ferramentas de escrita como o ChatGPT aprenderam com uma enorme quantidade de texto, por isso são boas a prever que palavras devem vir a seguir. É por isso que escrevem com facilidade, e também é por isso que podem escrever algo que parece certo mas não é verdade."
          ],
          steps: ["As pessoas juntam muitos exemplos (dados).", "O programa procura padrões nos exemplos.", "Usa os padrões para dar um palpite sobre algo novo.", "As pessoas verificam os palpites e dão-lhe exemplos melhores quando erra."],
          words: [["Dados", "os exemplos, números, palavras ou imagens com que uma IA aprende."], ["Enviesamento", "quando os dados pendem para um lado, e os palpites da IA ficam injustos para algumas pessoas."], ["Treino", "a etapa em que uma IA aprende padrões a partir de dados."]],
          slides: [
            { title: "Aprender com exemplos", bullets: ["Mostre-lhe muitos e-mails marcados como spam ou não spam", "Ela encontra os padrões", "Arruma os e-mails novos segundo esses padrões"] },
            { title: "Os dados contam", bullets: ["Dados bons e variados = palpites melhores", "Dados antigos ou de um só lado = palpites antigos ou injustos"] },
            { title: "Porque a IA que escreve pode errar", bullets: ["Prevê as palavras seguintes a partir de padrões", "Pode parecer certa e mesmo assim não ser verdade"] }
          ],
          tryIt: "Pense em algo que aprendeu com exemplos, como distinguir fruta madura de fruta verde. Escreva como ensinaria a mesma coisa a um computador: que exemplos lhe mostraria e em que poderia ele errar?",
          youCanNow: "descrever como a IA aprende com dados e porque dados fracos levam a respostas fracas ou injustas.",
          quickCheck: [
            { objective: "O2", q: "O que é o enviesamento na IA?", options: ["Palpites que pendem para um lado porque os dados eram antigos, de um só lado ou deixavam grupos de fora", "Uma definição que torna a IA mais rápida", "Um tipo de vírus de computador", "Uma maneira de tornar o ecrã mais claro"], answer: 0, why: "Quando os exemplos são de um só lado ou deixam grupos de pessoas de fora, os palpites da IA também ficam injustos." },
            { objective: "O2", q: "Quer ensinar um programa a distinguir fruta madura de fruta verde. O que faria primeiro?", options: ["Escrever uma regra e esperar que funcione", "Mostrar-lhe uma só fotografia de uma banana", "Mandá-lo adivinhar sem exemplos", "Mostrar-lhe muitas fotografias de fruta, cada uma marcada como madura ou verde"], answer: 3, why: "A IA aprende encontrando padrões em muitos exemplos marcados, a que se chama dados." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reconhecer a IA no seu dia",
          minutes: 4,
          goal: "Encontrar pelo menos cinco lugares onde já usa IA.",
          text: [
            "Provavelmente usa IA todos os dias sem lhe chamar assim. O mapa do seu telefone escolhe um caminho mais rápido para fugir ao trânsito. O seu correio eletrónico põe o lixo numa pasta de spam. As aplicações de vídeo e de música sugerem o que ver a seguir. O seu telefone desbloqueia com a sua cara. O teclado sugere a palavra seguinte.",
            "Os assistentes de voz, como a Siri, o Google Assistant e a Alexa, usam IA para entender o que você diz. Os bancos usam IA para detetar pagamentos com cartão que parecem estranhos. Os sites de emprego usam-na para ligar o seu currículo às vagas.",
            "Saber onde está a IA ajuda-o a fazer boas perguntas: porque é que a aplicação sugeriu isto? Posso desligar? O que sabe ela sobre mim? A maioria das aplicações tem definições onde pode ver ou mudar isto."
          ],
          words: [["Assistente de voz", "uma IA com quem fala em voz alta, como a Siri, o Google Assistant ou a Alexa."], ["Recomendação", "uma sugestão que uma aplicação faz com base no que você, ou pessoas parecidas consigo, escolheram antes."]],
          slides: [
            { title: "IA que já usa", bullets: ["Mapas que fogem ao trânsito", "Filtros de spam no correio eletrónico", "Vídeos, músicas e produtos sugeridos"] },
            { title: "Mais IA do dia a dia", bullets: ["Desbloquear o telefone com a cara", "Assistentes de voz: Siri, Google Assistant, Alexa", "Alertas do banco sobre uso estranho do cartão"] },
            { title: "Boas perguntas a fazer", bullets: ["Porque sugeriu isto?", "Posso desligar?", "O que sabe sobre mim? Veja as definições"] }
          ],
          tryIt: "Procure no seu telefone ou computador e faça uma lista de cinco lugares que usam IA. Num deles, abra as definições e encontre uma escolha que pode mudar.",
          youCanNow: "reconhecer a IA nas ferramentas que usa todos os dias e encontrar as definições que a controlam.",
          quickCheck: [
            { objective: "O3", q: "Qual destes usa IA para entender o que você diz?", options: ["Um calendário de papel", "Um candeeiro de mesa", "Um assistente de voz, como a Siri ou a Alexa", "Um horário de autocarros impresso"], answer: 2, why: "Os assistentes de voz usam IA para entender a fala." },
            { objective: "O3", q: "Uma aplicação de música sugere sempre músicas de que não gosta e pergunta-se o que ela sabe sobre si. O que faria?", options: ["Apagar o telefone", "Abrir as definições da aplicação para ver ou mudar o que ela usa", "Deixar de ouvir música", "Escrever a sua palavra-passe na caixa de pesquisa"], answer: 1, why: "A maioria das aplicações tem definições onde pode ver ou mudar como funcionam as sugestões." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que é a IA",
        questions: [
          { objective: "O1", q: "Qual é a melhor descrição da IA em palavras simples?", options: ["Um robô que pensa e sente", "Um site que tem sempre razão", "Um tipo de cabo de internet", "Programas de computador que encontram padrões e dão palpites para fazer tarefas que as pessoas normalmente fazem"], answer: 3, why: "A IA encontra padrões em exemplos e usa-os para dar palpites." },
          { objective: "O1", q: "O que faz a IA generativa?", options: ["Arranja telefones avariados", "Carrega a sua bateria", "Só guarda ficheiros", "Cria textos, imagens ou sons novos quando você pede"], answer: 3, why: "Generativa quer dizer que cria conteúdo novo." },
          { objective: "O2", q: "Uma IA foi treinada só com fotografias de um grupo de pessoas. Qual é o problema provável?", options: ["Vai funcionar igual para todos", "Vai ser mais rápida", "Os seus palpites podem ser injustos ou errados para outros grupos", "Vai deixar de funcionar"], answer: 2, why: "Dados de um só lado causam enviesamento." },
          { objective: "O2", q: "O que são \"dados\" na IA?", options: ["Os exemplos com que a IA aprende", "O ecrã do telefone", "Um tipo de palavra-passe", "O preço da aplicação"], answer: 0, why: "Dados são os exemplos, palavras, números ou imagens com que uma IA aprende." },
          { objective: "O3", q: "Qual destes é um uso da IA no dia a dia?", options: ["Um interruptor de luz", "Um calendário de papel", "Uma aplicação de mapas que escolhe um caminho para fugir ao trânsito", "Um relógio de dar corda"], answer: 2, why: "As aplicações de mapas usam IA para prever o trânsito e escolher caminhos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar bem a IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir ajuda a um assistente de IA",
          minutes: 5,
          goal: "Abrir um assistente de IA gratuito e escrever um pedido claro em três partes.",
          text: [
            "Alguns assistentes de IA gratuitos são o ChatGPT (chatgpt.com), o Microsoft Copilot (copilot.microsoft.com) e o Google Gemini (gemini.google.com). Funcionam num navegador de internet ou como aplicação da loja de aplicações oficial.",
            "O que você escreve chama-se pedido (em inglês, \"prompt\"). Um pedido claro tem três partes: o que precisa, um pouco sobre a situação e como quer a resposta. Por exemplo: \"Dirijo um pequeno banco alimentar de uma igreja. Escreva uma mensagem simpática de 4 linhas a pedir voluntários para sábado. Use palavras simples.\"",
            "Um pedido de uma só palavra, como \"voluntários\", obriga a IA a adivinhar o que você quer dizer, por isso a resposta é geral e menos útil."
          ],
          steps: ["Abra um assistente de IA no navegador ou na aplicação oficial.", "Diga o que precisa.", "Acrescente a situação, sem detalhes privados.", "Diga como quer a resposta: tamanho, lista, passos, palavras simples.", "Envie e leia a resposta."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."], ["Assistente de IA", "um programa de IA com quem conversa, a escrever ou a falar, como o ChatGPT, o Copilot ou o Gemini."]],
          slides: [
            { title: "Assistentes de IA gratuitos", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Três partes de um pedido claro", bullets: ["1. O que você precisa", "2. A situação (sem detalhes privados)", "3. Como quer a resposta"] },
            { title: "Exemplo", bullets: ["\"Dirijo um pequeno banco alimentar. Escreva uma mensagem simpática de 4 linhas", "a pedir voluntários para sábado. Use palavras simples.\""] }
          ],
          tryIt: "Abra um assistente de IA gratuito. Escreva um pedido em três partes para uma tarefa real desta semana, como uma mensagem de aniversário, um plano de estudo ou uma lista de compras, e envie-o.",
          youCanNow: "abrir um assistente de IA gratuito e escrever um pedido claro que dá uma primeira resposta útil.",
          quickCheck: [
            { objective: "O4", q: "O que é um pedido (prompt)?", options: ["O que você escreve ou diz a um assistente de IA", "Um aviso do seu telefone", "A resposta da IA", "Um tipo de palavra-passe"], answer: 0, why: "O pedido é o que você dá ao assistente de IA para lhe dizer o que precisa." },
            { objective: "O4", q: "Precisa de uma mensagem curta de aniversário para a sua tia. Que pedido enviaria?", options: ["\"Aniversário\"", "\"Escreva alguma coisa\"", "\"Mensagem\"", "\"Escreva uma mensagem de aniversário calorosa de 3 linhas para a minha tia, que adora jardinagem. Use palavras simples.\""], answer: 3, why: "Diz o que precisa, a situação e como quer a resposta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Melhorar e verificar a resposta",
          minutes: 5,
          goal: "Melhorar uma resposta com pedidos de seguimento e verificar os seus dados.",
          text: [
            "Trate a primeira resposta como um rascunho. Na mesma conversa pode pedir: \"Faça mais curto.\" \"Use palavras mais simples.\" \"Dê-me três opções.\" \"Ponha numa tabela.\" O assistente lembra-se das mensagens anteriores dessa conversa.",
            "A IA pode inventar coisas: uma data errada, um número de telefone que não existe, uma regra antiga. A isto chama-se alucinação. Verifique qualquer dado sobre dinheiro, saúde, lei, apoios, datas, moradas ou números de telefone num site oficial (os sites do governo dos Estados Unidos acabam em .gov) ou com uma pessoa que sabe, como um médico, um bibliotecário ou um gestor de caso.",
            "Pergunte ao assistente \"Onde posso verificar isto?\" e depois vá você mesmo a esse site."
          ],
          steps: ["Leia a primeira resposta.", "Peça uma mudança de cada vez.", "Sublinhe os dados: números, datas, nomes, regras.", "Verifique cada dado numa fonte oficial ou de confiança.", "Se forem diferentes, confie na fonte oficial."],
          words: [["Pedido de seguimento", "uma segunda mensagem que pede à IA para mudar ou explicar a sua resposta."], ["Alucinação", "quando uma IA escreve algo que parece verdade mas é inventado."]],
          slides: [
            { title: "A primeira resposta é um rascunho", bullets: ["\"Faça mais curto.\"", "\"Use palavras mais simples.\"", "\"Dê-me três opções.\""] },
            { title: "A IA pode inventar coisas", bullets: ["Datas, números ou regras errados", "Serviços ou livros que não existem"] },
            { title: "Verifique antes de confiar", bullets: ["Dinheiro, saúde, lei, apoios, datas, números de telefone", "Sites oficiais (.gov) ou uma pessoa que sabe"] }
          ],
          tryIt: "Pegue na sua resposta da última lição. Peça duas mudanças, uma de cada vez. Depois escolha um dado da resposta e verifique-o num site oficial ou de confiança.",
          youCanNow: "melhorar uma resposta da IA com pedidos de seguimento e verificar os seus dados antes de a usar.",
          quickCheck: [
            { objective: "O5", q: "O que é uma alucinação na IA?", options: ["Quando a IA fica sem bateria", "Quando a IA se recusa a responder", "Quando a IA inventa algo que parece verdade", "Quando a IA responde noutra língua"], answer: 2, why: "A IA pode inventar uma data, um número ou uma regra errados que parecem certos; isso é uma alucinação." },
            { objective: "O5", q: "Uma resposta da IA diz a data-limite de um formulário de apoios. O que faria antes de confiar nela?", options: ["Verificar a data no site oficial ou com uma pessoa que sabe", "Confiar porque veio da IA", "Fazer a mesma pergunta à IA outra vez e usar essa resposta", "Partilhá-la primeiro com os amigos"], answer: 0, why: "Os dados sobre datas, dinheiro, apoios e regras devem ser verificados numa fonte oficial." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar a IA de forma justa e segura",
          minutes: 5,
          goal: "Usar a IA sem partilhar informações privadas e de forma justa e honesta.",
          text: [
            "Não escreva informações privadas num assistente de IA: números da Segurança Social (Social Security) ou de identificação, palavras-passe, números de banco ou de cartão, números de processo médico ou a morada completa de casa. Escreva \"[o meu número]\" no lugar. As suas conversas podem ficar guardadas pela empresa.",
            "Seja honesto sobre a ajuda da IA. Muitas escolas e empregos têm regras sobre isso, por isso pergunte antes de entregar um trabalho escrito com IA. Leia e mude o que ela escreve para que soe como você e diga o que quer dizer.",
            "Lembre-se do enviesamento: se uma resposta parecer injusta para um grupo de pessoas, questione-a. E tenha cuidado com as burlas feitas com IA, como vozes falsas de familiares a pedir dinheiro. Pare, desligue e ligue de volta para um número que conhece."
          ],
          steps: ["Leia o seu pedido para encontrar informações privadas antes de o enviar.", "Troque os detalhes privados por um marcador.", "Veja as regras da sua escola ou do seu emprego sobre a ajuda da IA.", "Faça com que as palavras finais sejam suas.", "Trate os pedidos de dinheiro com pressa como um sinal de alerta."],
          words: [["Informações privadas", "dados que podem deixar alguém fingir ser você ou ficar com o seu dinheiro."], ["Marcador", "algo como \"[o meu número]\" que escreve no lugar do dado verdadeiro."]],
          slides: [
            { title: "Não ponha isto na IA", bullets: ["Números de identificação e da Segurança Social", "Palavras-passe, números de banco e de cartão", "Números de processo médico, morada completa de casa"] },
            { title: "Seja honesto", bullets: ["Siga as regras de IA da sua escola ou do seu emprego", "Mude as palavras para que sejam suas"] },
            { title: "Fique atento", bullets: ["Questione respostas que pareçam injustas", "Vozes falsas podem pedir dinheiro: desligue e ligue de volta"] }
          ],
          tryIt: "Tarefa final: escolha uma tarefa real, escreva um pedido claro sem informações privadas, peça duas melhorias, verifique um dado num site de confiança e depois explique a IA a um amigo em três frases.",
          youCanNow: "usar a IA para terminar uma tarefa real, protegendo as suas informações privadas e usando-a com honestidade.",
          quickCheck: [
            { objective: "O6", q: "Porque não deve pôr informações privadas numa conversa com a IA?", options: ["Torna a resposta mais comprida", "Os assistentes de IA não conseguem ler números", "É contra as regras de todas as escolas", "As suas conversas podem ficar guardadas pela empresa"], answer: 3, why: "A empresa pode guardar as suas conversas, por isso números de identificação, de banco e médicos nunca devem entrar." },
            { objective: "O6", q: "Recebe uma chamada com a voz do seu neto a pedir que envie dinheiro já. O que faria?", options: ["Enviar o dinheiro depressa", "Desligar e ligar-lhe de volta para um número que conhece", "Dar o número do seu cartão do banco para confirmar que é ele", "Pedir a quem ligou que envie uma SMS"], answer: 1, why: "A IA consegue copiar vozes, por isso pare e ligue de volta para um número que já conhece." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar bem a IA",
        questions: [
          { objective: "O4", q: "Qual é o pedido mais claro?", options: ["\"voluntários\"", "\"ajuda\"", "\"coisas para sábado\"", "\"Dirijo um banco alimentar. Escreva uma mensagem simpática de 4 linhas a pedir voluntários para sábado. Use palavras simples.\""], answer: 3, why: "Diz a necessidade, a situação e o formato." },
          { objective: "O5", q: "A resposta usa palavras difíceis. O que escreve a seguir?", options: ["\"Use palavras mais simples.\"", "A sua palavra-passe", "Nada; fecha a aplicação", "\"Comece de novo para sempre.\""], answer: 0, why: "Um pedido de seguimento pede à IA para mudar a resposta." },
          { objective: "O5", q: "A IA dá-lhe o número de telefone de um serviço de apoios. O que deve fazer?", options: ["Ligar logo", "Partilhá-lo nas redes sociais", "Verificá-lo no site oficial do serviço", "Perguntar à IA se tem a certeza e confiar"], answer: 2, why: "A IA pode inventar números; o site oficial é a fonte de confiança." },
          { objective: "O6", q: "O que deve escrever num pedido no lugar do número do seu cartão do banco?", options: ["O número verdadeiro", "O seu PIN", "Os últimos 12 algarismos", "Um marcador como \"[o meu cartão]\""], answer: 3, why: "Um marcador deixa você ter ajuda sem partilhar informações privadas." },
          { objective: "O6", q: "Quer entregar um trabalho de casa que a IA ajudou a escrever. O que deve fazer primeiro?", options: ["Ver as regras da sua escola sobre a ajuda da IA", "Entregá-lo sem o ler", "Copiar o de um amigo", "Apagá-lo"], answer: 0, why: "As escolas e os empregos têm regras sobre a ajuda da IA; a honestidade vem primeiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Inteligência Artificial",
    questions: [
      { objective: "O1", q: "A melhor descrição da IA é:", options: ["Uma pessoa dentro do computador", "Uma marca de telefone", "Programas que usam padrões para fazer tarefas que as pessoas normalmente fazem", "Um tipo de endereço de e-mail"], answer: 2, why: "A IA encontra padrões e dá palpites para fazer tarefas." },
      { objective: "O1", q: "Porque pode uma IA parecer segura e mesmo assim estar errada?", options: ["Está a brincar", "Nunca está errada", "A bateria está fraca", "Dá o melhor palpite a partir de padrões, não porque sabe a verdade"], answer: 3, why: "A IA dá palpites a partir de padrões, e um palpite errado pode parecer seguro." },
      { objective: "O1", q: "Que ferramenta é IA generativa?", options: ["Uma calculadora", "Um mapa de papel", "Google Gemini", "Um interruptor de luz"], answer: 2, why: "O Gemini cria textos novos quando você pede, por isso é IA generativa." },
      { objective: "O2", q: "Como aprende hoje a maioria dos programas de IA?", options: ["Com muitos exemplos (dados)", "Lendo o seu pensamento", "Adivinhando sem exemplos", "Com a bateria do telefone"], answer: 0, why: "Aprendem padrões a partir de dados." },
      { objective: "O2", q: "Um filtro de spam foi treinado com milhares de e-mails marcados como spam ou não spam. Isto é um exemplo de:", options: ["Treino com dados", "Carregar um telefone", "Enviar uma SMS", "Uma palavra-passe"], answer: 0, why: "Aprender com exemplos marcados é treino." },
      { objective: "O2", q: "O que é o enviesamento na IA?", options: ["Um computador rápido", "Dados que pendem para um lado e tornam os palpites injustos para algumas pessoas", "Um tipo de pedido", "Uma definição do telefone para o brilho"], answer: 1, why: "Dados de um só lado levam a palpites injustos." },
      { objective: "O3", q: "Qual é um exemplo de IA no dia a dia?", options: ["Um agrafador", "Uma aplicação de vídeo que sugere o que ver a seguir", "Um envelope de papel", "Uma chave de porta"], answer: 1, why: "As recomendações vêm da IA." },
      { objective: "O3", q: "A Siri, o Google Assistant e a Alexa são:", options: ["Bancos", "Assistentes de voz que usam IA", "Endereços de e-mail", "Impressoras"], answer: 1, why: "Usam IA para entender a fala." },
      { objective: "O3", q: "Uma aplicação sugere sempre coisas que não quer. Um bom primeiro passo é:", options: ["Deitar fora o telefone", "Procurar nas definições da aplicação o que pode mudar", "Dar-lhe a sua palavra-passe", "Nunca mais usar aplicações"], answer: 1, why: "A maioria das aplicações tem definições que controlam as sugestões." },
      { objective: "O4", q: "O que é um pedido (prompt)?", options: ["Um carregador de telefone", "O que você escreve ou diz a um assistente de IA", "O final de um endereço de site", "Um tipo de vírus"], answer: 1, why: "Um pedido é aquilo que você pede à IA." },
      { objective: "O4", q: "Que endereço abre o assistente de IA da Microsoft?", options: ["copilot.microsoft.com", "free-ai-prize.win", "microsoft-gift.xyz", "copilot.bank"], answer: 0, why: "copilot.microsoft.com é o endereço oficial da Microsoft." },
      { objective: "O4", q: "Quais são as três partes de um pedido claro?", options: ["Nome, palavra-passe, morada", "O que precisa, a situação, como quer a resposta", "Cor, tamanho, preço", "Olá, obrigado, adeus"], answer: 1, why: "Essas três partes dão uma resposta útil." },
      { objective: "O5", q: "A primeira resposta é comprida demais. Você deve:", options: ["Aceitá-la na mesma", "Pagar por uma aplicação nova", "Pedir \"Faça mais curto.\"", "Começar a escrever detalhes privados"], answer: 2, why: "Um pedido de seguimento muda a resposta." },
      { objective: "O5", q: "Uma \"alucinação\" na IA quer dizer:", options: ["A IA inventou algo que parece verdade", "O ecrã está desfocado", "A aplicação é gratuita", "A IA está desligada"], answer: 0, why: "A IA pode inventar dados que parecem verdadeiros." },
      { objective: "O5", q: "Qual deve verificar sempre numa fonte oficial?", options: ["Um poema de aniversário", "Uma piada", "Uma lista de cores para uma festa", "Um prazo de impostos"], answer: 3, why: "Datas, dinheiro e regras podem estar errados e têm de ser verificados." },
      { objective: "O5", q: "Os sites do governo dos Estados Unidos costumam acabar em:", options: [".win", ".shop", ".gov", ".xyz"], answer: 2, why: ".gov é usado pelos sites do governo dos EUA." },
      { objective: "O6", q: "O que é seguro escrever num assistente de IA?", options: ["O seu número da Segurança Social", "\"[o meu número]\" como marcador", "A palavra-passe do seu banco", "O código de segurança do seu cartão"], answer: 1, why: "Um marcador deixa as informações privadas de fora." },
      { objective: "O6", q: "Antes de usar palavras escritas pela IA na escola ou no trabalho, você deve:", options: ["Ver as regras e fazer com que as palavras sejam suas", "Entregá-las sem as ler", "Tirar o seu nome", "Publicá-las primeiro na internet"], answer: 0, why: "Usar com honestidade quer dizer seguir as regras e mudar o trabalho." },
      { objective: "O6", q: "Uma resposta da IA parece injusta para um grupo de pessoas. O que faz?", options: ["Partilha-a com muita gente", "Questiona-a e verifica outras fontes", "Assume que é verdade", "Muda a sua palavra-passe"], answer: 1, why: "O enviesamento pode aparecer nas respostas; questione-as." },
      { objective: "O6", q: "Uma chamada com a voz de um familiar pede que envie dinheiro já. Você deve:", options: ["Enviá-lo depressa", "Ler-lhes o número do seu cartão", "Dar-lhes um código do seu telefone", "Desligar e ligar de volta ao familiar para um número que conhece"], answer: 3, why: "A IA consegue imitar vozes; ligar de volta para um número conhecido trava a burla." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 5, 6, 9, 11, 13, 14, 16, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Explicar a IA", objective: "O1", notYet: "A explicação falta, está errada ou não diz porque a resposta foi verificada.", meets: "Três frases simples dizem o que é a IA, que ela dá palpites a partir de padrões e porque a resposta foi verificada.", exceeds: "Também dá um exemplo do dia a dia e diz que dados fracos podem tornar as respostas injustas." },
      { name: "Pedido claro", objective: "O4", notYet: "O pedido tem uma ou duas palavras ou não diz o que é preciso.", meets: "O pedido diz o que precisa, a situação e como quer a resposta.", exceeds: "O pedido também define um tamanho ou um formato e dá uma primeira resposta útil." },
      { name: "Melhorar a resposta", objective: "O5", notYet: "Não fez nenhum pedido de seguimento, ou usou a primeira resposta como estava.", meets: "Fez dois pedidos de seguimento, um de cada vez, e a resposta ficou melhor.", exceeds: "Também mudou as palavras finais para que soem como você." },
      { name: "Verificar um dado", objective: "O5", notYet: "Não verificou nenhum dado, ou só o verificou perguntando outra vez à IA.", meets: "Verificou um dado num site oficial ou de confiança.", exceeds: "Verificou todos os dados sobre datas, dinheiro, regras ou números de telefone e corrigiu qualquer diferença." },
      { name: "Privacidade e honestidade", objective: "O6", notYet: "O pedido tem um detalhe privado, como um número de identificação, uma palavra-passe ou a morada completa.", meets: "O pedido não tem informações privadas; qualquer detalhe pessoal é um marcador.", exceeds: "Também viu as regras da escola ou do emprego sobre a ajuda da IA, quando se aplicam." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter usado um assistente de IA gratuito numa tarefa real nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que dizem ter verificado uma resposta da IA numa fonte oficial, ou reconhecido e evitado uma chamada ou mensagem de burla",
      "Alunos que fazem um curso a seguir, como Noções Básicas de Literacia Digital ou Introdução à Cibersegurança"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador com internet e um navegador de internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini (não é preciso pagar)",
      "Papel e caneta para anotar o pedido, os pedidos de seguimento e o dado que foi verificado",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois ensine um capítulo por sessão, com as tarefas \"Experimente agora\" feitas em pares; junte os alunos que estão a começar com os aparelhos a um colega com mais confiança.",
      "Alguns assistentes gratuitos pedem aos alunos para iniciar sessão; deixe cada aluno decidir se quer criar uma conta e mostre os que funcionam sem iniciar sessão, quando existirem.",
      "Antes de alguém enviar um pedido, peça-lhe para o ler em voz alta e trocar qualquer detalhe privado por um marcador como \"[o meu número]\".",
      "Tenha um site oficial pronto para a tarefa de verificação de cada grupo (por exemplo uma página .gov ou o site de uma biblioteca local) para que os alunos pratiquem a verificação de um dado real.",
      "Fale abertamente das burlas com vozes clonadas; diga aos alunos para desligarem e ligarem de volta à família para um número conhecido, e dê o contacto local para denunciar fraudes, se o seu programa tiver um."
    ]
  }
};
