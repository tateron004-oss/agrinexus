"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-content-creation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-content-creation-pt",
  lang: "pt",
  translationOf: "athletes-content-creation",
  category: "Athletes",
  name: "Criação de Conteúdos para Atletas",
  skills: "Planear um vídeo curto com um gancho, Filmar com o telefone, Editar com uma aplicação gratuita, Escrever legendas e texto no ecrã com IA, Preparar um calendário de conteúdos de duas semanas",
  outcome: "planear, filmar, editar e publicar um vídeo de atleta de 30 a 60 segundos com um gancho forte, legendas claras e texto no ecrã, e marcar os conteúdos das duas semanas seguintes num calendário simples.",
  about: [
    "Este curso é para atletas e treinadores que querem fazer vídeos curtos que as pessoas realmente veem: clipes de treino, momentos de dia de jogo, bastidores e dicas.",
    "Só precisa de um telefone e de ferramentas gratuitas. Você vai planear um vídeo com um gancho, filmá-lo bem, editá-lo com uma aplicação gratuita como o CapCut ou o editor que já vem no seu telefone, escrever legendas com a ajuda da IA e planear duas semanas de publicações.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Uma verificação de conhecimentos fecha cada capítulo, e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Faça e publique um vídeo de atleta de 30 a 60 segundos: um plano escrito em três partes (gancho, valor, final), filmado no seu telefone com boa luz e bom som, editado com texto no ecrã e legendas, e um texto da publicação escrito com IA e revisto por você. Depois, preencha um calendário de conteúdos de duas semanas com mais seis ideias de publicações.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e de clubes, e treinadores, que querem fazer vídeos curtos que as pessoas realmente veem: clipes de treino, momentos de dia de jogo, bastidores e dicas.",
    startingPoint: "Filmam e publicam com o telefone e veem vídeos curtos todos os dias. A maioria filma sem plano, publica clipes com tempo morto, sem legendas e com música de outros, e publica quando se lembra, não segundo um horário.",
    gap: "Os vídeos sem plano perdem quem os vê nos primeiros segundos, podem ficar sem som por causa da música e podem quebrar as regras de divulgação quando há marcas envolvidas. Um vídeo planeado, bem filmado e com legendas, e um calendário simples, deixam os atletas contar a sua história com regularidade sem prejudicar o treino nem a escola.",
    constraints: [
      "Linguagem simples, com um nível de leitura de cerca do 7.º ano",
      "Um telefone com câmara, uma aplicação de edição gratuita e um assistente de IA gratuito",
      "Cerca de 60 minutos de lições, mais tempo para filmar e editar um vídeo",
      "Autorização para filmar colegas de equipa, treinadores e outras pessoas; regras de filmagem da equipa",
      "Só música com licença; regras de divulgação da FTC e regras NIL para qualquer participação de marcas"
    ],
    prerequisites: "Nenhum. O curso \"Marca Pessoal nas Redes Sociais para Atletas\" ajuda a escolher primeiro os seus pilares de conteúdo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma ideia dos seus pilares de conteúdo", action: "planear um vídeo curto com gancho, valor e final", standard: "com um gancho para os primeiros 1 a 3 segundos e um apelo à ação ou um final claro, escrito antes de filmar" },
    { id: "O2", condition: "Usando o seu telefone", action: "filmar clipes verticais limpos com boa luz, enquadramento estável e som claro", standard: "de frente para a luz, com a ação ao centro e com autorização de qualquer outra pessoa na imagem" },
    { id: "O3", condition: "Com os seus clipes", action: "escolher e ordenar planos gerais, médios e grandes planos para contar uma história de problema, trabalho e resultado", standard: "com cada clipe a ajudar a história e sem resultados falsos" },
    { id: "O4", condition: "Usando uma aplicação de edição gratuita", action: "editar os seus clipes num vídeo de 30 a 60 segundos com texto no ecrã, legendas e música com licença", standard: "sem tempo morto, com texto legível num telefone e legendas verificadas para encontrar erros" },
    { id: "O5", condition: "Usando um assistente de IA", action: "escrever o texto de uma publicação com a sua própria voz e algumas hashtags relevantes", standard: "marcando só pessoas que concordaram e divulgando qualquer benefício de uma marca no vídeo e perto do início do texto" },
    { id: "O6", condition: "Usando o Google Sheets ou uma aplicação de notas", action: "planear duas semanas de publicações num calendário de conteúdos", standard: "com 3 a 4 publicações por semana, colunas Data, Pilar, Ideia, Formato e Estado, e as semanas cheias bloqueadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear e filmar",
      lessons: [
        {
          objectives: ["O1"],
          title: "O vídeo curto em três partes",
          minutes: 5,
          goal: "Planear um vídeo curto com gancho, valor e final.",
          text: [
            "Muitas vezes, as pessoas veem um vídeo curto só durante um ou dois segundos antes de passarem à frente. O primeiro momento, chamado gancho, decide se elas ficam.",
            "Planeie três partes: 1. Gancho (primeiros 1 a 3 segundos): uma pergunta, um momento surpreendente ou uma frase forte como \"O exercício que corrigiu o meu lançamento.\" 2. Valor (o meio): mostre o exercício, o momento ou a dica. 3. Final: um apelo à ação como \"Guarde isto para o treino\" ou um final que satisfaça.",
            "Escreva o plano antes de filmar. Um assistente de IA pode dar-lhe dez ideias de ganchos: \"Dá-me 10 ganchos curtos para um vídeo que mostra o meu aquecimento de 5 minutos de trabalho de pés para basquetebol.\""
          ],
          steps: ["Escolha uma ideia dos seus pilares de conteúdo.", "Escreva um gancho para os primeiros 1-3 segundos.", "Faça a lista dos planos que mostram o valor.", "Escreva o final ou o apelo à ação.", "Peça à IA mais ideias de ganchos e escolha a melhor."],
          words: [["Gancho", "os primeiros 1 a 3 segundos que fazem as pessoas querer continuar a ver."], ["Apelo à ação", "um próximo passo claro que você pede a quem vê."]],
          slides: [
            { title: "Porque o gancho conta", bullets: ["As pessoas decidem em um ou dois segundos", "Gancho = primeiros 1-3 segundos"] },
            { title: "Três partes", bullets: ["1. Gancho: pergunta, surpresa, frase forte", "2. Valor: o exercício, o momento ou a dica", "3. Final: apelo à ação ou final claro"] },
            { title: "Planeie primeiro", bullets: ["Escreva-o antes de filmar", "Peça à IA 10 ideias de ganchos"] }
          ],
          tryIt: "Escreva um plano em três partes para um vídeo curto. Peça a um assistente de IA dez ganchos e escolha o que melhor combina com você.",
          youCanNow: "planear um vídeo curto com gancho, valor e final.",
          quickCheck: [
            { objective: "O1", q: "Quais são as três partes do plano de um vídeo curto?", options: ["Introdução, créditos, encerramento", "Gancho, valor e final", "Música, filtro, texto", "Título, etiquetas, link"], answer: 1, why: "Planeie um gancho, o valor no meio e um final." },
            { objective: "O1", q: "A sua ideia de vídeo é uma rotina de alongamentos para depois do treino. O que faz antes de filmar?", options: ["Filma e decide depois", "Publica uma foto em vez disso", "Escreve o gancho, os planos e o final", "Pede a um colega que filme qualquer coisa"], answer: 2, why: "Escreva o plano antes de filmar para saber de que planos precisa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Filmar com o seu telefone",
          minutes: 5,
          goal: "Filmar clipes limpos com boa luz, enquadramento estável e som claro.",
          text: [
            "Luz: fique de frente para a luz, não de costas para ela. A luz do dia de uma janela ou ao ar livre, à sombra, é ótima. Evite filmar com uma janela muito clara atrás de você.",
            "Enquadramento e estabilidade: filme na vertical para as aplicações de vídeos curtos, mantenha o telefone firme com um tripé ou apoiado em alguma coisa, e mantenha a ação no meio da imagem. Limpe primeiro a lente. O modo de câmara lenta é ótimo para mostrar a técnica.",
            "Som: se estiver a falar, fique perto do telefone e longe do vento e de pavilhões barulhentos, ou acrescente uma narração depois. Peça autorização antes de filmar colegas, treinadores ou outras pessoas, e siga as regras de filmagem da sua equipa."
          ],
          steps: ["Limpe a lente.", "Fique de frente para a luz.", "Filme na vertical e com a imagem firme.", "Mantenha a ação ao centro.", "Grave alguns segundos a mais antes e depois de cada clipe.", "Peça autorização antes de filmar outras pessoas."],
          words: [["Vídeo vertical", "vídeo filmado com o telefone em pé, o formato que a maioria das aplicações de vídeos curtos usa."], ["Narração", "fala gravada à parte e colocada por cima do vídeo (em inglês, voice-over)."]],
          slides: [
            { title: "Luz", bullets: ["De frente para a luz", "Janela ou sombra ao ar livre", "Nenhuma janela clara atrás de você"] },
            { title: "Enquadramento e estabilidade", bullets: ["Vertical para as aplicações de vídeos curtos", "Tripé ou apoie-se em alguma coisa", "Limpe a lente; experimente a câmara lenta"] },
            { title: "Som e autorização", bullets: ["Fique perto ou use narração", "Pergunte antes de filmar outras pessoas"] }
          ],
          tryIt: "Filme os clipes do vídeo que planeou. Grave cada um duas vezes e fique com a melhor gravação.",
          youCanNow: "filmar clipes limpos e estáveis com boa luz e bom som.",
          quickCheck: [
            { objective: "O2", q: "Como deve segurar o telefone para as aplicações de vídeos curtos?", options: ["Na vertical", "De lado", "De cabeça para baixo", "Inclinado"], answer: 0, why: "Filme na vertical para as aplicações de vídeos curtos." },
            { objective: "O2", q: "Está a filmar à frente de uma janela muito clara e a sua cara aparece escura. O que faz?", options: ["Filma assim mesmo", "Põe um filtro depois", "Aproxima mais a imagem", "Vira-se para ficar de frente para a luz da janela"], answer: 3, why: "Fique de frente para a luz, não de costas para ela." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Contar uma história com os seus clipes",
          minutes: 4,
          goal: "Escolher e ordenar os clipes para que o vídeo conte uma pequena história.",
          text: [
            "Até um vídeo de 30 segundos pode contar uma história: um problema, o trabalho, o resultado. \"Eu falhava sempre os lançamentos na passada com a mão esquerda. Este é o exercício que fiz todos os dias durante duas semanas. Agora veja.\"",
            "Use planos diferentes: um plano geral para mostrar onde você está, um plano médio para a ação e um grande plano para os detalhes, como o trabalho de pés ou as mãos. Mudar de plano mantém as pessoas a ver.",
            "Os bastidores e os momentos reais, como treinos de madrugada, viagens no autocarro da equipa ou um agradecimento a um treinador, muitas vezes criam mais ligação do que montagens perfeitas dos melhores momentos. Seja honesto; não invente resultados."
          ],
          steps: ["Escreva a sua história numa linha: problema, trabalho, resultado.", "Escolha um clipe em plano geral, um em plano médio e um em grande plano.", "Ponha-os pela ordem da história.", "Corte tudo o que não ajuda a história."],
          words: [["Plano geral", "mostra a cena toda e onde você está."], ["Grande plano", "uma imagem de perto de um detalhe, como as mãos ou os pés."]],
          slides: [
            { title: "Pequena história", bullets: ["Problema", "O trabalho", "O resultado"] },
            { title: "Misture os planos", bullets: ["Geral: onde você está", "Médio: a ação", "Grande plano: os detalhes"] },
            { title: "O que é real cria ligação", bullets: ["Momentos dos bastidores", "Seja honesto; nada de resultados falsos"] }
          ],
          tryIt: "Escreva a história do seu vídeo numa linha e depois ponha os clipes por ordem: pelo menos um plano geral, um plano médio e um grande plano.",
          youCanNow: "ordenar clipes numa história curta e honesta com planos variados.",
          quickCheck: [
            { objective: "O3", q: "O que mostra um plano geral?", options: ["Detalhes como o trabalho de pés", "Onde você está", "Só a sua cara", "A legenda"], answer: 1, why: "Um plano geral mostra o local; o plano médio mostra a ação e o grande plano mostra os detalhes." },
            { objective: "O3", q: "Um clipe é divertido mas não encaixa na sua história de problema, trabalho e resultado. O que faz?", options: ["Corta-o", "Põe-no em primeiro", "Põe-no mais lento", "Repete-o duas vezes"], answer: 0, why: "Corte tudo o que não ajuda a história." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear e filmar",
        questions: [
          { objective: "O1", q: "O que é um gancho?", options: ["Os créditos finais", "Um tipo de tripé", "Os primeiros 1-3 segundos que fazem as pessoas continuar a ver", "Uma hashtag"], answer: 2, why: "O gancho decide se as pessoas ficam." },
          { objective: "O1", q: "Qual é um gancho forte?", options: ["\"O exercício que corrigiu o meu lançamento\"", "\"Hum, olá, então...\"", "Uma introdução longa e sem som", "Um ecrã preto"], answer: 0, why: "Promete valor logo de início." },
          { objective: "O2", q: "Onde deve estar a luz quando se filma a si mesmo?", options: ["Atrás de você", "Em lado nenhum", "Só por cima", "À sua frente, virada para você"], answer: 3, why: "Ficar de frente para a luz mantém a sua cara clara." },
          { objective: "O2", q: "Antes de filmar um colega de equipa, você deve:", options: ["Filmar às escondidas", "Pedir a autorização dele", "Publicar primeiro", "Usar o nome dele sem perguntar"], answer: 1, why: "A autorização e as regras da equipa vêm primeiro." },
          { objective: "O3", q: "Uma história simples em vídeo é:", options: ["Clipes ao acaso", "Problema, o trabalho, o resultado", "Só o final", "Só texto"], answer: 1, why: "Esta estrutura mantém o interesse de quem vê." }
        ]
      }
    },
    {
      name: "Capítulo 2: Editar, escrever legendas e planear",
      lessons: [
        {
          objectives: ["O4"],
          title: "Editar com uma aplicação gratuita",
          minutes: 6,
          goal: "Editar os seus clipes num vídeo curto e bem cortado, com texto e com música que pode usar.",
          text: [
            "Editores gratuitos como o CapCut, a aplicação de fotos que já vem no seu telefone ou as ferramentas de edição do Instagram, do TikTok e do YouTube Shorts deixam cortar clipes, pô-los por ordem e acrescentar texto.",
            "Corte bem: corte o início e o fim de cada clipe para não haver tempo morto. Acrescente texto curto no ecrã para o gancho e os pontos principais, grande o suficiente para ler num telefone. Acrescente legendas, porque muitas pessoas veem sem som, e verifique-as para encontrar erros.",
            "Música: use a biblioteca de música com licença da própria aplicação ou faixas livres de direitos de autor (royalty-free). Usar uma música famosa de outro lado pode fazer o seu vídeo ficar sem som ou ser retirado, e as publicações patrocinadas podem ter regras de música mais rígidas."
          ],
          steps: ["Importe os seus clipes por ordem.", "Corte o tempo morto no início e no fim de cada clipe.", "Acrescente o texto do gancho nos primeiros segundos.", "Acrescente legendas e verifique-as.", "Acrescente música da biblioteca da aplicação.", "Veja o vídeo uma vez em ecrã inteiro no seu telefone."],
          words: [["Cortar", "tirar as partes de um clipe de que não precisa."], ["Legendas", "palavras no ecrã que mostram o que se diz."], ["Música livre de direitos (royalty-free)", "música que pode usar segundo a sua licença sem pagar por cada uso."]],
          slides: [
            { title: "Editores gratuitos", bullets: ["CapCut", "O editor que já vem no seu telefone", "Ferramentas de edição das redes sociais"] },
            { title: "Corte bem", bullets: ["Nada de tempo morto", "Texto do gancho nos primeiros segundos", "Legendas: muitas pessoas veem sem som"] },
            { title: "Música", bullets: ["Use a biblioteca com licença da aplicação", "Outras músicas podem ficar sem som ou ser retiradas"] }
          ],
          tryIt: "Edite o seu vídeo para 30-60 segundos com o texto do gancho, legendas e música da biblioteca da aplicação. Veja-o em ecrã inteiro e corte tudo o que está lento.",
          youCanNow: "editar um vídeo curto e bem cortado com texto, legendas e música permitida.",
          quickCheck: [
            { objective: "O4", q: "Onde deve arranjar música para o seu vídeo?", options: ["Qualquer música famosa de que goste", "A lista de músicas de um amigo", "A biblioteca de música com licença da aplicação ou faixas livres de direitos", "Uma gravação da rádio"], answer: 2, why: "Músicas de fora podem fazer o seu vídeo ficar sem som ou ser retirado." },
            { objective: "O4", q: "As legendas automáticas da aplicação escreveram mal o nome do seu treinador. O que faz?", options: ["Deixa ficar", "Desliga as legendas", "Tira o treinador do vídeo", "Corrige a legenda antes de publicar"], answer: 3, why: "Acrescente legendas e verifique-as para encontrar erros." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Legendas e publicações com IA",
          minutes: 5,
          goal: "Escrever o texto de uma publicação com a ajuda da IA, com a sua voz e com divulgações honestas.",
          text: [
            "O texto da publicação é o texto por baixo do seu vídeo. Peça a um assistente de IA: \"Escreve três textos curtos para o meu vídeo que mostra o meu aquecimento de trabalho de pés. Simpáticos, com menos de 150 caracteres, a terminar com uma pergunta para ter comentários.\"",
            "Escolha um e faça-o soar como você. Acrescente algumas hashtags relevantes, não dezenas. Marque pessoas só se elas concordaram.",
            "Se uma marca lhe pagou ou lhe deu alguma coisa pelo vídeo, diga-o claramente no vídeo (falado e no ecrã) e no texto, perto do início, como \"Publicidade\" ou \"Obrigado [marca] pelo equipamento grátis\". A FTC (a agência dos EUA que protege os consumidores) diz que pôr isto só no fim, nas hashtags ou na descrição não chega. Atletas universitários: confirmem as regras de comunicação NIL com o gabinete de conformidade (compliance)."
          ],
          steps: ["Peça à IA três opções de textos curtos.", "Reescreva a que escolheu com a sua voz.", "Acrescente algumas hashtags relevantes.", "Se houver uma marca envolvida, divulgue-o no vídeo e perto do início do texto.", "Publique quando o seu público costuma estar online."],
          words: [["Hashtag", "uma palavra com # à frente que junta publicações sobre um tema."], ["Divulgação", "uma frase clara a dizer que uma marca lhe pagou ou lhe deu alguma coisa."]],
          slides: [
            { title: "A IA escreve rascunhos de textos", bullets: ["Três opções curtas", "Terminar com uma pergunta"] },
            { title: "Torne-o seu", bullets: ["A sua voz", "Algumas hashtags relevantes", "Marque pessoas só com autorização"] },
            { title: "Há uma marca envolvida?", bullets: ["Diga-o e mostre-o no vídeo", "\"Publicidade\" perto do início do texto", "Confirme as regras NIL"] }
          ],
          sources: [{ name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Escreva o texto do seu vídeo com a ajuda da IA, ajuste-o à sua voz e publique o vídeo.",
          youCanNow: "escrever o texto curto e honesto de uma publicação com a ajuda da IA.",
          quickCheck: [
            { objective: "O5", q: "Quantas hashtags sugere a lição?", options: ["Nunca nenhuma", "Algumas relevantes", "Trinta ou mais", "Só as que estão na moda"], answer: 1, why: "Acrescente algumas hashtags relevantes, não dezenas." },
            { objective: "O5", q: "Uma marca de bebidas desportivas deu-lhe bebidas grátis para o seu vídeo. Onde o divulga?", options: ["Só nas hashtags no fim", "Só na descrição", "Em lado nenhum, porque não foi dinheiro", "Falado e no ecrã no vídeo, e perto do início do texto"], answer: 3, why: "A FTC diz que divulgações só no fim, nas hashtags ou na descrição não chegam." }
          ]
        },
        {
          objectives: ["O6"],
          title: "O seu calendário de conteúdos de duas semanas",
          minutes: 5,
          goal: "Planear duas semanas de publicações num calendário simples que se adapta ao seu treino.",
          text: [
            "Publicar com regularidade conta mais do que publicar muito. Três ou quatro publicações por semana chegam para a maioria dos atletas durante a época.",
            "Faça um calendário no Google Sheets ou numa aplicação de notas com as colunas: Data, Pilar (treino, dia de jogo, fora do campo, lições), Ideia, Formato (vídeo curto, foto, story) e Estado (ideia, filmado, editado, publicado). Agrupe o seu trabalho: filme vários clipes numa só sessão.",
            "Peça a um assistente de IA que preencha o primeiro rascunho a partir dos seus pilares e do seu horário, e depois corrija-o. Bloqueie as semanas cheias, como os exames finais ou os torneios: não faz mal publicar menos nessas alturas."
          ],
          steps: ["Faça as colunas: Data, Pilar, Ideia, Formato, Estado.", "Planeie 3-4 publicações por semana durante duas semanas.", "Peça à IA rascunhos de ideias a partir dos seus pilares.", "Ajuste à volta dos jogos, dos exames e das viagens.", "Agrupe as filmagens numa só sessão."],
          words: [["Calendário de conteúdos", "um horário do que vai publicar e quando."], ["Agrupar (batching)", "fazer muitas vezes a mesma tarefa de uma só vez, como filmar cinco clipes numa sessão."]],
          slides: [
            { title: "Regularidade vale mais do que quantidade", bullets: ["3-4 publicações por semana durante a época"] },
            { title: "Colunas do calendário", bullets: ["Data, Pilar, Ideia", "Formato, Estado"] },
            { title: "Trabalhe com inteligência", bullets: ["A IA faz rascunhos de ideias", "Agrupe as filmagens", "Publique menos nas semanas cheias"] }
          ],
          tryIt: "Tarefa final: publique o seu vídeo de 30-60 segundos e depois faça um calendário de conteúdos de duas semanas com mais seis ideias de publicações, com rascunho feito pela IA e ajustado ao seu horário.",
          youCanNow: "planear duas semanas de conteúdos num calendário que se adapta ao seu treino.",
          quickCheck: [
            { objective: "O6", q: "Quantas publicações por semana sugere a lição para a maioria dos atletas durante a época?", options: ["Três ou quatro", "Uma por mês", "Dez por dia", "Vinte"], answer: 0, why: "Publicar com regularidade conta mais do que publicar muito." },
            { objective: "O6", q: "Tem um torneio no próximo fim de semana. Como planeia o seu calendário?", options: ["Publica o dobro", "Cancela todas as publicações durante um mês", "Bloqueia essa semana e publica menos", "Filma durante os jogos em vez de jogar"], answer: 2, why: "Não faz mal publicar menos em semanas cheias, como as de torneios ou de exames finais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Editar, escrever legendas e planear",
        questions: [
          { objective: "O4", q: "Porque deve pôr legendas no seu vídeo?", options: ["Tornam-no mais longo", "A NCAA obriga", "Para esconder erros", "Muitas pessoas veem sem som"], answer: 3, why: "As legendas deixam quem vê sem som acompanhar o vídeo." },
          { objective: "O4", q: "Que música é a mais segura de usar?", options: ["A biblioteca de música com licença da aplicação", "Qualquer música da rádio", "Uma música de um filme", "Uma música descarregada por um amigo"], answer: 0, why: "Outras músicas podem fazer o seu vídeo ficar sem som ou ser retirado." },
          { objective: "O5", q: "Uma marca pagou o seu vídeo. Onde deve estar a divulgação?", options: ["Só nas hashtags no fim", "Só na descrição", "Dita e mostrada no vídeo e perto do início do texto", "Em lado nenhum"], answer: 2, why: "A FTC diz que as divulgações têm de ser difíceis de não ver." },
          { objective: "O6", q: "O que conta mais quando se publica?", options: ["Publicar 20 vezes por dia", "Publicar só uma vez por ano", "Copiar os outros", "Publicar com regularidade"], answer: 3, why: "Publicar com regularidade cria um público." },
          { objective: "O6", q: "Agrupar (batching) quer dizer:", options: ["Publicar sem editar", "Filmar vários clipes numa só sessão", "Apagar publicações antigas", "Comprar seguidores"], answer: 1, why: "Agrupar poupa tempo nas épocas cheias." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criação de Conteúdos para Atletas",
    questions: [
      { objective: "O1", q: "Quanto tempo dura o gancho?", options: ["O último minuto", "O vídeo todo", "Os primeiros 1-3 segundos", "O texto da publicação"], answer: 2, why: "Quem vê decide depressa." },
      { objective: "O1", q: "O meio de um vídeo curto deve dar:", options: ["Valor: o exercício, o momento ou a dica", "Silêncio", "Uma introdução longa", "Só o seu logótipo"], answer: 0, why: "O valor mantém as pessoas a ver." },
      { objective: "O1", q: "Porque escrever um plano antes de filmar?", options: ["Fica a saber de que planos precisa", "É obrigatório", "Para perder tempo", "Torna os vídeos mais longos"], answer: 0, why: "Planear poupa tempo e dá melhores clipes." },
      { objective: "O1", q: "A IA pode ajudar o seu plano a:", options: ["Filmar por você", "Gerir a sua conta", "Sugerir ideias de ganchos", "Escolher o seu desporto"], answer: 2, why: "Dar ideias é um ponto forte da IA." },
      { objective: "O2", q: "Antes de filmar, você deve:", options: ["Apagar as luzes", "Limpar a lente", "Abanar o telefone", "Tapar o microfone"], answer: 1, why: "Uma lente limpa dá uma imagem clara." },
      { objective: "O2", q: "Para as aplicações de vídeos curtos, filme:", options: ["De cabeça para baixo", "Só de lado", "Com a lente tapada", "Na vertical"], answer: 3, why: "As aplicações de vídeos curtos usam vídeo vertical." },
      { objective: "O2", q: "A câmara lenta é ótima para:", options: ["Esconder erros", "Poupar espaço", "Mostrar a técnica", "Gravar som"], answer: 2, why: "Mostra os detalhes de um movimento rápido." },
      { objective: "O2", q: "Vai falar num vídeo num pavilhão barulhento? Experimente:", options: ["Gritar", "Pôr a música mais alta", "Filmar de longe", "Ficar perto ou acrescentar uma narração"], answer: 3, why: "Um som claro precisa de proximidade ou de uma narração." },
      { objective: "O3", q: "Um grande plano mostra:", options: ["Detalhes como as mãos ou os pés", "O estádio todo", "O céu", "Nada"], answer: 0, why: "Os grandes planos mostram os detalhes." },
      { objective: "O3", q: "O que muitas vezes cria ligação com os seguidores?", options: ["Resultados falsos", "Momentos reais dos bastidores", "Clipes roubados", "Vídeos longos e sem som"], answer: 1, why: "Os momentos reais criam confiança." },
      { objective: "O4", q: "Cortar quer dizer:", options: ["Acrescentar mais clipes", "Mudar a cor", "Tirar as partes de um clipe de que não precisa", "Publicar duas vezes"], answer: 2, why: "Uma edição bem cortada prende a atenção." },
      { objective: "O4", q: "Qual é uma opção de edição gratuita?", options: ["O CapCut ou o editor que já vem no seu telefone", "Só programas de estúdio caros", "Uma impressora", "Uma calculadora"], answer: 0, why: "As ferramentas gratuitas chegam para começar." },
      { objective: "O4", q: "Usar uma música famosa de fora da aplicação pode:", options: ["Fazer sempre o vídeo ficar viral", "Dar-lhe dinheiro", "Não acontece nada", "Fazer o seu vídeo ficar sem som ou ser retirado"], answer: 3, why: "Os direitos da música contam." },
      { objective: "O4", q: "O texto no ecrã deve ser:", options: ["Minúsculo", "Grande o suficiente para ler num telefone", "Escondido", "Em dez tipos de letra"], answer: 1, why: "A maioria de quem vê está num telefone." },
      { objective: "O5", q: "Um bom texto de publicação termina muitas vezes com:", options: ["Cinquenta hashtags", "Uma pergunta para ter comentários", "O seu número de telefone", "Nada"], answer: 1, why: "As perguntas convidam as pessoas a participar." },
      { objective: "O5", q: "Quantas hashtags deve usar?", options: ["Cinquenta ao acaso", "Nunca nenhuma", "Só as da moda sem ligação ao tema", "Algumas relevantes"], answer: 3, why: "As hashtags relevantes ajudam as pessoas certas a encontrá-lo." },
      { objective: "O5", q: "Deve marcar pessoas numa publicação:", options: ["Só se elas concordaram", "Sempre, sem perguntar", "Ao acaso", "Nunca"], answer: 0, why: "Respeite a privacidade dos outros." },
      { objective: "O5", q: "Qual é uma divulgação clara de uma marca?", options: ["\"#sp\" no fim", "\"colab?\"", "\"Publicidade\" ou \"Obrigado [marca] pelo equipamento grátis\"", "Nada"], answer: 2, why: "A FTC diz para usar palavras claras e simples." },
      { objective: "O6", q: "A coluna Estado de um calendário de conteúdos acompanha:", options: ["O seu humor", "O tempo", "As suas notas", "Ideia, filmado, editado, publicado"], answer: 3, why: "O Estado mostra em que fase está cada publicação." },
      { objective: "O6", q: "Na semana dos exames finais, não faz mal:", options: ["Faltar aos exames para publicar", "Publicar menos", "Comprar conteúdos", "Publicar 20 vezes por dia"], answer: 1, why: "A escola e o treino vêm primeiro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano em três partes",
        objective: "O1",
        notYet: "Não há plano escrito, ou falta o gancho ou o final.",
        meets: "Um gancho, um valor e um final escritos, feitos antes de filmar.",
        exceeds: "Foram comparados vários ganchos e o plano lista o plano geral, o plano médio e o grande plano."
      },
      {
        name: "Filmagem",
        objective: "O2",
        notYet: "Clipes escuros, tremidos ou com barulho, ou pessoas filmadas sem autorização.",
        meets: "Clipes verticais, estáveis e bem iluminados, com a ação ao centro e autorização das outras pessoas.",
        exceeds: "Usa câmara lenta ou narração onde ajuda e segundos a mais em cada ponta para a edição."
      },
      {
        name: "Edição",
        objective: "O4",
        notYet: "Ficou tempo morto, não há legendas ou a música não tem licença.",
        meets: "Um vídeo de 30 a 60 segundos com clipes cortados, texto legível no ecrã, legendas verificadas e música com licença.",
        exceeds: "As mudanças de plano acompanham o ritmo de uma história clara de problema, trabalho e resultado."
      },
      {
        name: "Texto da publicação e divulgação",
        objective: "O5",
        notYet: "Texto copiado da IA, muitas hashtags, ou falta a divulgação da marca.",
        meets: "Um texto com a voz do atleta, algumas hashtags relevantes e qualquer divulgação no sítio certo.",
        exceeds: "Termina com uma pergunta que traz comentários e é publicado quando o público está online."
      },
      {
        name: "Calendário de duas semanas",
        objective: "O6",
        notYet: "Menos de seis ideias novas, ou faltam colunas.",
        meets: "Mais seis ideias em duas semanas com Data, Pilar, Ideia, Formato e Estado, ajustadas ao treino e à escola.",
        exceeds: "As filmagens estão agrupadas numa só sessão e as semanas cheias estão bloqueadas."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que publicam o seu vídeo e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que publicam segundo o seu calendário em pelo menos duas das quatro semanas seguintes (inquérito de seguimento)",
      "Alunos que dizem ter mais visualizações, guardados ou comentários nos vídeos planeados do que nos anteriores",
      "Alunos que dizem ter tido uma oportunidade de recrutamento, de marca ou na comunidade graças aos seus conteúdos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com câmara, carregado e com espaço livre",
      "Uma aplicação de edição gratuita (CapCut ou o editor que já vem no telefone)",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Google Sheets ou uma aplicação de notas para o calendário",
      "Cerca de 60 minutos de lições, mais cerca de 60 minutos para filmar e editar"
    ],
    facilitatorNotes: [
      "Partilhe as regras de filmagem da sua equipa e garanta que os atletas pedem autorização antes de filmar outras pessoas, sobretudo menores.",
      "Junte os atletas em pares para se filmarem um ao outro com boa luz e bom enquadramento.",
      "Mostre onde encontrar música com licença nas aplicações que o grupo usa.",
      "Reveja todas as publicações patrocinadas ou com ofertas para ver se têm uma divulgação correta antes de serem publicadas, e envie as perguntas sobre NIL para o gabinete de conformidade.",
      "Lembre os atletas de que a escola e o treino vêm primeiro; planeie os conteúdos à volta dos exames e dos torneios."
    ]
  }
};
