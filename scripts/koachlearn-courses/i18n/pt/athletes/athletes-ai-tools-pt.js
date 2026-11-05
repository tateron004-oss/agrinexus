"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-ai-tools-pt",
  lang: "pt",
  translationOf: "athletes-ai-tools",
  category: "Athletes",
  name: "Ferramentas de IA para Atletas",
  skills: "Escolher a ferramenta de IA certa para cada tarefa, Usar um assistente de IA para planear, Fazer imagens com o Canva, Registar estatísticas no Google Sheets, Avaliar a privacidade e o custo de uma ferramenta",
  outcome: "escolher e usar três ferramentas de IA gratuitas numa tarefa real de atleta: um planeador, uma ferramenta de design e uma folha de estatísticas, e avaliar se uma aplicação nova é segura e vale a pena antes de se inscrever.",
  about: [
    "Este curso é para atletas e treinadores que ouvem falar muito de aplicações de IA e querem saber quais são realmente úteis e como usá-las.",
    "Você vai montar um pequeno kit de ferramentas gratuito: um assistente de IA para planear e escrever, uma ferramenta de design para imagens e uma folha de cálculo para registar os seus números. Também vai aprender uma verificação rápida para qualquer aplicação nova antes de lhe dar os seus dados ou o seu dinheiro.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa prática \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Monte o seu kit de atleta: use um assistente de IA para planear a próxima semana, faça uma imagem de dia de jogo no Canva e crie uma folha no Google Sheets que registe uma estatística ao longo de cinco sessões. Depois faça a verificação de cinco perguntas a uma aplicação de desporto nova e escreva se a usaria.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e de clubes, e os treinadores que trabalham com eles, que ouvem falar de aplicações de IA e querem saber quais são realmente úteis.",
    startingPoint: "Usam um smartphone todos os dias para mensagens, redes sociais e vídeos. Muitos já experimentaram um assistente de IA uma ou duas vezes, mas poucos usam de propósito uma ferramenta de design, uma folha de cálculo ou uma verificação de privacidade.",
    gap: "Vendem aos atletas muitas aplicações que prometem resultados, e muitas vezes eles entregam dados do corpo ou dinheiro sem verificar. Um pequeno kit gratuito bem usado poupa tempo no planeamento, nas publicações e no registo, e uma verificação rápida das aplicações protege os seus dados, o seu dinheiro e a sua elegibilidade para competir.",
    constraints: [
      "Linguagem simples, com nível de leitura de cerca do 7.º ano",
      "Um telefone ou computador com internet; só versões gratuitas das ferramentas",
      "Cerca de 60 minutos no total, em lições curtas que cabem entre os treinos e as aulas",
      "As regras da escola, da liga e do treinador sobre logótipos, mudanças no treino e conselhos de saúde vêm primeiro",
      "Os dados do corpo, de saúde e de localização são privados e só devem ser partilhados por escolha"
    ],
    prerequisites: "Nenhum"
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas comuns de atletas ou treinadores", action: "identificar que tipo de ferramenta serve para cada tarefa: um assistente de IA, uma ferramenta de design, uma folha de cálculo ou um monitor de atividade", standard: "acertando pelo menos 4 de 5 tarefas" },
    { id: "O2", condition: "Usando um assistente de IA gratuito e o seu horário real", action: "criar um plano semanal numa tabela e melhorá-lo com pedidos de seguimento", standard: "com todos os horários fixos incluídos e o treino marcado pelo treinador sem alterações" },
    { id: "O3", condition: "Usando um modelo gratuito do Canva", action: "criar uma imagem de dia de jogo que mostre quem, quando e onde, com uma foto forte", standard: "fácil de ler num telefone em dois segundos e usando só fotos e logótipos que tem autorização para usar" },
    { id: "O4", condition: "Usando o Google Sheets", action: "criar uma folha que registe uma estatística por data e fazer um gráfico da tendência", standard: "com pelo menos três sessões registadas, a estatística medida sempre da mesma forma e a folha partilhada só com as pessoas que escolher" },
    { id: "O5", condition: "Com uma aplicação nova de desporto ou de IA", action: "verificar quem a faz, que dados recolhe, quanto custa, se serve para a equipa e o que promete, usando a verificação de cinco perguntas", standard: "respondendo às cinco perguntas e escrevendo uma decisão clara: usar, experimentar com cuidado ou deixar de lado" },
    { id: "O6", condition: "Durante uma semana real", action: "planear uma rotina semanal que use juntos o seu planeador, a ferramenta de design e a folha de estatísticas", standard: "com um dia ou momento fixo para cada ferramenta e os dados da equipa partilhados só com a equipa técnica que precisa deles" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O seu kit gratuito de ferramentas de IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher a ferramenta certa para a tarefa",
          minutes: 4,
          goal: "Separar tarefas comuns de atletas pelo tipo certo de ferramenta.",
          text: [
            "Há centenas de aplicações de IA, mas a maioria cabe em poucos tipos. Os assistentes de IA (ChatGPT, Microsoft Copilot, Google Gemini) escrevem, explicam e planeiam. As ferramentas de design (como o Canva) fazem imagens e vídeos curtos. As folhas de cálculo (Google Sheets, Microsoft Excel) guardam os seus números e fazem gráficos com eles. Os monitores de atividade e as aplicações de vídeo da equipa recolhem dados do seu corpo ou dos seus jogos.",
            "Comece pela tarefa, não pela aplicação. \"Preciso de um plano semanal\" aponta para um assistente. \"Preciso de uma publicação para o dia de jogo\" aponta para uma ferramenta de design. \"Quero ver se o meu tempo de sprint está a melhorar\" aponta para uma folha de cálculo.",
            "As versões gratuitas normalmente chegam para começar. Aprenda bem uma ferramenta de cada tipo antes de acrescentar mais."
          ],
          words: [["Assistente de IA", "um programa de IA com quem conversa para escrever, explicar ou planear."], ["Folha de cálculo", "uma grelha de linhas e colunas para guardar números e fazer gráficos com eles."]],
          slides: [
            { title: "Quatro tipos de ferramentas", bullets: ["Assistente de IA: escrever, explicar, planear", "Ferramenta de design: imagens e vídeos curtos", "Folha de cálculo: registar números e fazer gráficos", "Monitores e aplicações de vídeo: recolhem dados"] },
            { title: "Comece pela tarefa", bullets: ["Plano semanal -> assistente", "Publicação de dia de jogo -> ferramenta de design", "O meu tempo está a melhorar? -> folha de cálculo"] },
            { title: "Mantenha simples", bullets: ["As versões gratuitas chegam para começar", "Aprenda bem uma ferramenta de cada tipo"] }
          ],
          tryIt: "Escreva cinco tarefas que faz como atleta ou treinador todas as semanas (por exemplo planear treinos, publicar nas redes sociais, registar uma estatística). Ao lado de cada uma, escreva que tipo de ferramenta serve.",
          youCanNow: "ligar uma tarefa de atleta ao tipo certo de ferramenta de IA.",
          quickCheck: [
            { objective: "O1", q: "Que tipo de ferramenta guarda os seus números e os transforma num gráfico?", options: ["Um assistente de IA", "Uma folha de cálculo", "Uma ferramenta de design", "Um monitor de atividade"], answer: 1, why: "Folhas de cálculo como o Google Sheets e o Excel guardam números e fazem gráficos com eles." },
            { objective: "O1", q: "Um colega de equipa quer experimentar cinco aplicações novas esta semana. O que sugere?", options: ["Instalar as cinco hoje", "Pagar a mais cara", "Começar pela tarefa e depois aprender bem uma ferramenta gratuita desse tipo", "Evitar todas as ferramentas"], answer: 2, why: "A lição diz para começar pela tarefa e aprender primeiro bem uma ferramenta de cada tipo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Um assistente de IA como o seu planeador",
          minutes: 5,
          goal: "Usar um assistente de IA para transformar o seu horário num plano semanal claro.",
          text: [
            "Um assistente de IA é ótimo a transformar uma lista confusa num plano. Dê-lhe os seus treinos, jogos, aulas e turnos de trabalho e peça um plano semanal numa tabela.",
            "Seja concreto: \"Sou jogador de voleibol na universidade. O treino é das 14h às 17h, de segunda a sexta, e os jogos são ao sábado. As aulas são das 9h às 12h. Faça uma tabela semanal com blocos de estudo, refeições e horas de dormir.\" Depois melhore-o com pedidos de seguimento como \"Acrescente 30 minutos para ver vídeos de jogos na quarta-feira.\"",
            "O assistente planeia; o treinador decide o treino. Não lhe peça para mudar treinos que o seu treinador escreveu, e confirme tudo o que tenha a ver com saúde ou descanso com o seu preparador físico ou fisioterapeuta."
          ],
          steps: ["Faça a lista dos seus horários fixos: treinos, jogos, aulas, trabalho.", "Peça um plano semanal numa tabela.", "Peça uma mudança de cada vez.", "Copie o plano final para o seu calendário ou notas."],
          words: [["Pedido de seguimento", "um segundo pedido que muda a resposta ou continua a partir dela."]],
          slides: [
            { title: "Dê-lhe os seus horários fixos", bullets: ["Treinos e jogos", "Aulas e turnos de trabalho", "Dias de viagem"] },
            { title: "Peça uma tabela", bullets: ["Blocos de estudo, refeições, sono", "Depois uma mudança de cada vez"] },
            { title: "Quem decide o quê", bullets: ["A IA organiza a sua semana", "O treinador decide o treino", "O preparador físico para a saúde e o descanso"] }
          ],
          tryIt: "Escreva num assistente de IA os seus horários fixos reais da próxima semana e peça um plano semanal numa tabela. Peça uma melhoria.",
          youCanNow: "transformar o seu horário num plano semanal com um assistente de IA.",
          quickCheck: [
            { objective: "O2", q: "O que faz um pedido de planeamento a um assistente de IA funcionar bem?", options: ["Ser concreto sobre o seu desporto e os seus horários fixos", "Usar só uma palavra", "Pedir-lhe para reescrever os treinos do seu treinador", "Deixar de fora as suas aulas"], answer: 0, why: "Detalhes concretos sobre o seu horário dão um plano que serve para a sua semana real." },
            { objective: "O2", q: "O seu plano precisa de 30 minutos de vídeo na quarta-feira. O que faz?", options: ["Começa uma conversa nova do zero", "Apaga o plano todo", "Pede ao seu preparador físico para o escrever", "Pede ao assistente essa única mudança como pedido de seguimento"], answer: 3, why: "Pedidos de seguimento com uma mudança de cada vez melhoram o plano." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer uma imagem de dia de jogo com o Canva",
          minutes: 5,
          goal: "Fazer uma imagem simples de dia de jogo com um modelo de design gratuito.",
          text: [
            "O Canva é uma ferramenta de design gratuita na internet e em aplicação. Tem modelos prontos para publicações nas redes sociais, cartazes e histórias (stories), e inclui funções de IA que podem sugerir texto ou imagens.",
            "Uma imagem de dia de jogo limpa tem quatro coisas: quem joga, quando, onde e uma foto forte. Use as cores da sua equipa, texto grande e fácil de ler, e mais nada.",
            "Use só fotos que você tirou ou que tem autorização para usar. Muitas escolas têm regras sobre o uso dos logótipos e nomes da escola, por isso pergunte ao departamento de desporto antes de publicar uma imagem com logótipos oficiais."
          ],
          steps: ["Abra o Canva e procure modelos de \"game day\" (dia de jogo).", "Escolha um modelo com o tamanho da plataforma que usa.", "Mude o texto: adversário, data, hora, local.", "Troque pela sua própria foto e pelas cores da sua equipa.", "Descarregue a imagem e veja-a no telefone antes de publicar."],
          words: [["Modelo", "um design pronto que você muda para fazer o seu."], ["Autorização", "um sim do dono para usar a foto, o logótipo ou o nome dele."]],
          slides: [
            { title: "O Canva numa frase", bullets: ["Ferramenta de design gratuita com modelos prontos", "Na internet e em aplicação para telefone"] },
            { title: "Uma imagem de dia de jogo limpa", bullets: ["Quem, quando, onde", "Uma foto forte", "Cores da equipa, texto grande"] },
            { title: "Cumpra as regras", bullets: ["Use as suas fotos ou fotos que pode usar", "Pergunte antes de usar logótipos da escola"] }
          ],
          tryIt: "Faça no Canva uma imagem de dia de jogo para o seu próximo jogo ou treino. Veja-a no telefone: consegue ler a hora e o local em dois segundos?",
          youCanNow: "fazer uma imagem de dia de jogo limpa a partir de um modelo e usar fotos e logótipos da forma certa.",
          quickCheck: [
            { objective: "O3", q: "O que é o Canva?", options: ["Uma ferramenta de design gratuita com modelos para publicações e cartazes", "Uma folha de estatísticas", "Um monitor de atividade", "Uma regra da escola sobre logótipos"], answer: 0, why: "O Canva é uma ferramenta de design gratuita na internet e em aplicação, com modelos prontos." },
            { objective: "O3", q: "Acabou a sua imagem. O que deve fazer antes de a publicar?", options: ["Acrescentar mais texto e cores", "Publicá-la logo", "Descarregá-la e vê-la no telefone", "Trocar por uma foto que encontrou na internet"], answer: 2, why: "Ver no telefone mostra se a hora e o local se leem depressa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O seu kit gratuito de ferramentas de IA",
        questions: [
          { objective: "O1", q: "Quer ver se o seu tempo de sprint está a melhorar. Que tipo de ferramenta serve melhor?", options: ["Uma ferramenta de design", "Uma aplicação de música", "Uma folha de cálculo", "Um filtro de fotos"], answer: 2, why: "As folhas de cálculo guardam números e mostram-nos num gráfico ao longo do tempo." },
          { objective: "O1", q: "Por onde deve começar quando escolhe uma ferramenta?", options: ["Pela tarefa que precisa de fazer", "Pela aplicação mais popular", "Pela aplicação mais cara", "Pelo que um desconhecido recomendar"], answer: 0, why: "Comece pela tarefa e depois escolha o tipo de ferramenta que serve para ela." },
          { objective: "O2", q: "Um assistente de IA sugere mudar o treino que o seu treinador escreveu. O que faz?", options: ["Segue a IA", "Falta ao treino", "Publica sobre isso", "Mantém o treino do treinador e pergunta-lhe se tiver dúvidas"], answer: 3, why: "A IA organiza a sua semana; o treinador decide o treino." },
          { objective: "O3", q: "Que quatro coisas devem estar numa imagem de dia de jogo?", options: ["A sua palavra-passe, morada, telefone, e-mail", "Quem, quando, onde e uma foto forte", "Dez fotos e cinco tipos de letra", "Só um logótipo"], answer: 1, why: "Detalhes claros e uma foto forte fazem uma imagem fácil de ler." },
          { objective: "O3", q: "Quer usar o logótipo da sua escola numa publicação. O que deve fazer primeiro?", options: ["Copiá-lo do site", "Perguntar ao departamento de desporto", "Mudar as cores", "Usá-lo e esperar que corra bem"], answer: 1, why: "Muitas escolas têm regras sobre os seus logótipos, por isso pergunte primeiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Registar, avaliar e montar o seu kit",
      lessons: [
        {
          objectives: ["O4"],
          title: "Registar uma estatística no Google Sheets",
          minutes: 5,
          goal: "Criar uma folha que registe uma estatística e a mostre num gráfico.",
          text: [
            "Escolha uma estatística que seja importante para você e que possa medir sempre da mesma forma: lances livres certos em 20, tempo nas 40 jardas, tempo numa milha ou precisão no serviço.",
            "No Google Sheets, faça duas colunas: Data e a sua estatística. Acrescente uma linha depois de cada sessão. Quando tiver algumas linhas, selecione as duas colunas e insira um gráfico para ver a tendência.",
            "Pode pedir a um assistente de IA para explicar os passos da folha de cálculo ou uma fórmula, como calcular a sua média. Mantenha a folha privada, a não ser que escolha partilhá-la com o seu treinador."
          ],
          steps: ["Abra o Google Sheets e comece uma folha em branco.", "Escreva \"Date\" (Data) em A1 e a sua estatística em B1.", "Acrescente uma linha depois de cada sessão.", "Selecione as duas colunas e insira um gráfico.", "Partilhe-a só com o seu treinador se quiser comentários."],
          words: [["Tendência", "a direção em que os seus números mudam ao longo do tempo: a subir, a descer ou iguais."], ["Fórmula", "uma instrução curta numa célula que faz contas, como uma média."]],
          slides: [
            { title: "Escolha uma estatística", bullets: ["Medida sempre da mesma forma", "Exemplos: lances livres certos em 20, tempo numa milha"] },
            { title: "Crie a folha", bullets: ["Coluna A: Data", "Coluna B: a sua estatística", "Uma linha por sessão"] },
            { title: "Veja a tendência", bullets: ["Selecione as duas colunas e insira um gráfico", "Peça à IA para explicar uma fórmula se ficar preso"] }
          ],
          tryIt: "Crie uma folha no Google Sheets para uma estatística. Registe pelo menos três sessões passadas (ou números de treino) e insira um gráfico.",
          youCanNow: "registar uma estatística numa folha de cálculo e fazer um gráfico para ver a sua tendência.",
          quickCheck: [
            { objective: "O4", q: "Com que duas colunas começa a sua folha de estatísticas?", options: ["Nome e equipa", "Adversário e resultado", "Treinador e posição", "Data e a sua estatística"], answer: 3, why: "A data na coluna A e a estatística na coluna B deixam ver a tendência ao longo do tempo." },
            { objective: "O4", q: "Quer comentários sobre a sua folha de estatísticas. O que faz?", options: ["Publica o link para todos", "Partilha-a só com o seu treinador", "Envia-a à outra equipa", "Imprime-a para a parede do balneário"], answer: 1, why: "Mantenha a folha privada e partilhe-a só com as pessoas que escolher, como o seu treinador." }
          ]
        },
        {
          objectives: ["O5"],
          title: "A verificação de cinco perguntas para aplicações",
          minutes: 5,
          goal: "Avaliar uma aplicação nova de desporto ou de IA antes de lhe dar dados ou dinheiro.",
          text: [
            "As aplicações novas prometem deixá-lo mais rápido, ajudá-lo a ser recrutado ou aumentar os seus seguidores. Antes de se inscrever, faça uma verificação rápida de cinco perguntas.",
            "1. Quem a faz, e está na loja de aplicações oficial? 2. Que dados recolhe, e pode apagá-los? (Leia o resumo da política de privacidade.) 3. Quanto custa depois do período de teste gratuito? 4. O seu treinador ou a sua escola já usam algo parecido? 5. Promete resultados bons demais para serem verdade, como bolsas de estudo garantidas?",
            "Os dados do corpo e de saúde, como o ritmo cardíaco, o sono e a localização, são privados. Partilhe-os só com aplicações em que confia, e desligue a partilha de localização de que não precisa."
          ],
          steps: ["Veja quem a faz e se está na loja oficial.", "Leia que dados recolhe e como apagá-los.", "Descubra o preço depois do período de teste gratuito.", "Pergunte ao seu treinador o que a equipa já usa.", "Afaste-se de resultados garantidos."],
          words: [["Política de privacidade", "a explicação da aplicação sobre que dados recolhe e o que faz com eles."], ["Período de teste gratuito", "um tempo curto e grátis antes de a aplicação começar a cobrar."]],
          slides: [
            { title: "Antes de se inscrever", bullets: ["Quem a faz? Está na loja oficial?", "Que dados recolhe?", "Quanto custa depois do teste gratuito?"] },
            { title: "Mais duas perguntas", bullets: ["A minha equipa já usa alguma coisa?", "Promete demais?"] },
            { title: "Proteja os dados do corpo", bullets: ["Ritmo cardíaco, sono e localização são privados", "Desligue a localização de que não precisa"] }
          ],
          tryIt: "Escolha uma aplicação de desporto ou de IA que viu anunciada. Responda às cinco perguntas sobre ela numa nota e decida: usar, experimentar com cuidado ou deixar de lado.",
          youCanNow: "verificar quem faz uma aplicação nova, que dados recolhe, quanto custa e o que promete antes de se inscrever.",
          quickCheck: [
            { objective: "O5", q: "Qual destas é uma das cinco perguntas da verificação de aplicações?", options: ["De que cor é o logótipo?", "Quantos anúncios mostra?", "Quanto custa depois do período de teste gratuito?", "Tem modo escuro?"], answer: 2, why: "O preço depois do teste é a pergunta 3 da verificação de cinco perguntas." },
            { objective: "O5", q: "Uma aplicação de treino pede para partilhar a sua localização o tempo todo, mas não precisa dela. O que faz?", options: ["Desliga a partilha de localização", "Permite para a aplicação funcionar mais depressa", "Partilha também o seu ritmo cardíaco", "Dá-lhe a sua palavra-passe"], answer: 0, why: "A localização é um dado privado, por isso desligue a partilha de que não precisa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Juntar o seu kit de ferramentas",
          minutes: 5,
          goal: "Usar as três ferramentas juntas durante uma semana real.",
          text: [
            "O seu kit funciona melhor como uma rotina semanal. Domingo: use o seu assistente de IA para planear a semana. Antes de um jogo: faça a imagem. Depois de cada sessão: acrescente a sua estatística à folha.",
            "Escreva uma lista curta das suas ferramentas e para que serve cada uma, para não andar a experimentar aplicações novas todas as semanas. Acrescente uma ferramenta nova só quando tiver uma tarefa que o seu kit não consegue fazer.",
            "Os treinadores podem usar o mesmo kit para uma equipa: um plano semanal para a equipa técnica, uma imagem por jogo e uma folha partilhada para as estatísticas da equipa. Partilhe as folhas da equipa só com a equipa técnica que precisa delas."
          ],
          steps: ["Escreva a sua lista de ferramentas: planeador, design, folha.", "Domingo: planeie a semana com o assistente.", "Semana de jogo: faça uma imagem.", "Depois de cada sessão: acrescente a sua estatística.", "Reveja o gráfico com o seu treinador de poucas em poucas semanas."],
          words: [["Rotina", "passos que repete à mesma hora todas as semanas."], ["Kit de ferramentas", "o pequeno conjunto de ferramentas que usa vezes sem conta."]],
          slides: [
            { title: "A sua rotina semanal", bullets: ["Domingo: planear a semana", "Semana de jogo: uma imagem", "Depois de cada sessão: acrescentar a estatística"] },
            { title: "Mantenha o kit pequeno", bullets: ["Escreva para que serve cada ferramenta", "Acrescente uma ferramenta só para uma tarefa nova"] },
            { title: "Para treinadores", bullets: ["Plano semanal da equipa técnica", "Uma imagem por jogo", "Folha de estatísticas partilhada só com a equipa técnica"] }
          ],
          tryIt: "Tarefa final: planeie a próxima semana com um assistente de IA, faça uma imagem de dia de jogo no Canva, crie uma folha que registe uma estatística e faça a verificação de cinco perguntas a uma aplicação nova.",
          youCanNow: "usar juntas, numa rotina semanal, um pequeno conjunto de ferramentas de IA gratuitas.",
          quickCheck: [
            { objective: "O6", q: "Na rotina semanal, quando acrescenta a sua estatística à folha?", options: ["Uma vez por época", "Só antes dos jogos", "Só quando bate um recorde", "Depois de cada sessão"], answer: 3, why: "Acrescentar a estatística depois de cada sessão mantém a tendência completa." },
            { objective: "O6", q: "Tem uma tarefa que o seu kit atual não consegue fazer. O que faz?", options: ["Experimenta na mesma uma aplicação nova todas as semanas", "Acrescenta uma ferramenta nova para essa tarefa e faz a verificação de aplicações", "Desiste da tarefa", "Troca o kit todo"], answer: 1, why: "Acrescente uma ferramenta nova só quando tiver uma tarefa que o kit não consegue fazer, e verifique-a primeiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Registar, avaliar e montar o seu kit",
        questions: [
          { objective: "O4", q: "O que torna uma estatística boa para registar?", options: ["A forma de a medir muda todas as semanas", "Só o seu treinador a pode ver", "É um palpite", "Pode medi-la sempre da mesma forma"], answer: 3, why: "Medir sempre da mesma forma dá sentido à tendência." },
          { objective: "O4", q: "Na sua folha, o que vai na coluna A?", options: ["A data", "A sua palavra-passe", "O nome do seu adversário", "A morada da sua casa"], answer: 0, why: "A data na coluna A e a estatística na coluna B deixam fazer o gráfico da tendência." },
          { objective: "O5", q: "Uma aplicação promete uma bolsa de estudo garantida se pagar. O que diz a verificação de aplicações?", options: ["Pague já", "Partilhe a sua localização", "Promete demais, por isso afaste-se", "Dê-lhe o seu código de acesso"], answer: 2, why: "Resultados garantidos são um sinal de alerta." },
          { objective: "O5", q: "Qual destes é um dado privado do corpo?", options: ["A cor da sua camisola", "O nome da sua equipa", "O seu exercício preferido", "O seu ritmo cardíaco e o seu sono"], answer: 3, why: "O ritmo cardíaco, o sono e a localização são dados privados." },
          { objective: "O6", q: "Quando deve acrescentar uma ferramenta nova ao seu kit?", options: ["Todas as semanas", "Quando tiver uma tarefa que o kit não consegue fazer", "Quando um amigo publicar sobre uma", "Nunca"], answer: 1, why: "Um kit pequeno que conhece bem vale mais do que muitas aplicações que quase não usa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ferramentas de IA para Atletas",
    questions: [
      { objective: "O1", q: "Que tipo de ferramenta escreve, explica e planeia?", options: ["Um cronómetro", "Só uma folha de cálculo", "Um assistente de IA", "Uma câmara"], answer: 2, why: "Assistentes de IA como o ChatGPT, o Copilot e o Gemini escrevem e planeiam." },
      { objective: "O1", q: "Qual é uma ferramenta de design gratuita com modelos?", options: ["Canva", "Uma calculadora", "Um marcador de resultados", "Um livro de jogadas"], answer: 0, why: "O Canva tem modelos gratuitos para publicações e cartazes." },
      { objective: "O1", q: "\"Preciso de uma publicação para o dia de jogo\" aponta para:", options: ["Uma ferramenta de design", "Uma folha de cálculo", "Um monitor de atividade", "Um monitor de ritmo cardíaco"], answer: 0, why: "As imagens são uma tarefa para uma ferramenta de design." },
      { objective: "O1", q: "Quantas ferramentas de cada tipo deve aprender primeiro?", options: ["Cinco", "O maior número possível", "Uma, bem", "Nenhuma"], answer: 2, why: "Aprender bem uma de cada tipo é a forma mais rápida de começar." },
      { objective: "O2", q: "O que deve dar a um assistente de IA para fazer um plano semanal?", options: ["A sua palavra-passe", "Os seus horários fixos: treinos, jogos, aulas", "O seu processo clínico", "O seu número do banco"], answer: 1, why: "Os horários fixos deixam-no montar o plano à volta da sua semana." },
      { objective: "O2", q: "Quem decide o seu treino?", options: ["A IA", "Um anúncio", "Uma aplicação qualquer", "O seu treinador"], answer: 3, why: "O assistente organiza; o treinador decide o treino." },
      { objective: "O2", q: "A melhor forma de melhorar o plano da IA é:", options: ["Aceitar o primeiro", "Escrever a sua palavra-passe", "Uma mudança de cada vez", "Discutir com ela"], answer: 2, why: "Uma mudança clara de cada vez mantém o plano no caminho certo." },
      { objective: "O3", q: "Uma imagem de dia de jogo fácil de ler tem:", options: ["Texto minúsculo e dez fotos", "Só emojis", "O seu número de telefone", "Quem, quando, onde e uma foto forte"], answer: 3, why: "Detalhes claros e uma foto leem-se depressa." },
      { objective: "O3", q: "Que fotos pode usar na sua imagem?", options: ["As suas fotos ou fotos que tem autorização para usar", "Qualquer foto da internet", "Fotos da página de um rival", "Fotos de desconhecidos"], answer: 0, why: "Use fotos que são suas ou que tem autorização para usar." },
      { objective: "O3", q: "Antes de usar o logótipo da sua escola, deve:", options: ["Desenhá-lo outra vez", "Perguntar ao departamento de desporto", "Usá-lo na mesma", "Comprá-lo na internet"], answer: 1, why: "As escolas muitas vezes têm regras sobre os logótipos." },
      { objective: "O4", q: "Que estatística é fácil de registar sempre da mesma forma?", options: ["Como se sentiu na viagem de autocarro", "O que o público achou", "Lances livres certos em 20", "O humor do seu adversário"], answer: 2, why: "Um teste fixo, como lances certos em 20, é sempre igual." },
      { objective: "O4", q: "Como vê a sua tendência no Google Sheets?", options: ["Seleciona as colunas e insere um gráfico", "Imprime a folha", "Apaga as linhas antigas", "Envia-a por e-mail a um desconhecido"], answer: 0, why: "Um gráfico mostra a direção dos seus números." },
      { objective: "O4", q: "Está preso numa fórmula para a sua média. Uma boa jogada é:", options: ["Desistir de registar", "Adivinhar o número", "Partilhar a sua palavra-passe", "Pedir a um assistente de IA para explicar a fórmula"], answer: 3, why: "Os assistentes de IA explicam bem os passos de uma folha de cálculo." },
      { objective: "O4", q: "Quem deve ver a sua folha pessoal de estatísticas?", options: ["Toda a gente na internet", "Só as pessoas que escolher, como o seu treinador", "Equipas rivais", "Desconhecidos"], answer: 1, why: "Mantenha-a privada e partilhe-a só por escolha." },
      { objective: "O5", q: "O que lhe diz uma política de privacidade?", options: ["As cores da aplicação", "Que dados a aplicação recolhe e o que faz com eles", "O seu treino", "O resultado do jogo"], answer: 1, why: "Explica como a aplicação trata os seus dados." },
      { objective: "O5", q: "Antes de um período de teste gratuito, deve verificar:", options: ["O logótipo da aplicação", "A aplicação do seu rival", "Nada", "O preço depois de o teste acabar"], answer: 3, why: "Muitas aplicações começam a cobrar depois do teste." },
      { objective: "O5", q: "Que promessa de uma aplicação é um sinal de alerta?", options: ["\"Bolsa de estudo garantida\"", "\"Registe as suas corridas\"", "\"Faça imagens\"", "\"Modelos gratuitos\""], answer: 0, why: "Ninguém pode garantir uma bolsa de estudo." },
      { objective: "O5", q: "A partilha de localização de que não precisa deve ser:", options: ["Partilhada com toda a gente", "Publicada na internet", "Desligada", "Deixada ligada para sempre"], answer: 2, why: "A localização é um dado privado; partilhe só quando for preciso." },
      { objective: "O6", q: "Na rotina semanal, quando planeia a semana?", options: ["Depois da época", "Nunca", "Durante o jogo", "No domingo, com o seu assistente de IA"], answer: 3, why: "Planear no início da semana prepara tudo o resto." },
      { objective: "O6", q: "Um treinador partilha uma folha de estatísticas da equipa. Quem deve ter acesso?", options: ["Qualquer pessoa com o link na internet", "Só a equipa técnica que precisa dela", "Os treinadores adversários", "Os adeptos"], answer: 1, why: "Os dados da equipa devem ir só para as pessoas que precisam deles." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      7,
      10,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano semanal",
        objective: "O2",
        notYet: "O plano não tem os horários fixos, ou muda o treino do treinador.",
        meets: "Uma tabela semanal com todos os horários fixos, estudo, refeições e sono, melhorada com pelo menos um pedido de seguimento.",
        exceeds: "O plano foi copiado para um calendário e as perguntas sobre saúde ou descanso estão anotadas para o preparador físico."
      },
      {
        name: "Imagem de dia de jogo",
        objective: "O3",
        notYet: "Falta quem, quando ou onde, é difícil de ler no telefone, ou usa fotos ou logótipos sem autorização.",
        meets: "Mostra quem, quando, onde e uma foto forte, lê-se no telefone em dois segundos e só usa imagens autorizadas.",
        exceeds: "Usa as cores da equipa, tem o tamanho certo para a plataforma, e o uso do logótipo foi autorizado pelo departamento de desporto."
      },
      {
        name: "Folha de estatísticas",
        objective: "O4",
        notYet: "Sem datas, menos de três sessões ou sem gráfico.",
        meets: "Colunas de data e de estatística, pelo menos três sessões medidas da mesma forma e um gráfico da tendência.",
        exceeds: "Cinco sessões registadas, uma média acrescentada e a folha partilhada só com o treinador para ter comentários."
      },
      {
        name: "Verificação da aplicação",
        objective: "O5",
        notYet: "Algumas das cinco perguntas ficaram sem resposta ou não há decisão.",
        meets: "As cinco perguntas respondidas e uma decisão clara: usar, experimentar com cuidado ou deixar de lado.",
        exceeds: "A decisão dá razões tiradas da política de privacidade e do preço, e a partilha de dados desnecessária foi desligada."
      },
      {
        name: "Rotina do kit",
        objective: "O6",
        notYet: "Não há lista de ferramentas, ou não há um momento fixo para cada ferramenta.",
        meets: "Uma lista escrita de ferramentas com um dia ou momento fixo para o planeamento, as imagens e as estatísticas.",
        exceeds: "A rotina inclui uma revisão regular do gráfico com o treinador e uma regra para quando acrescentar uma ferramenta nova."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam a tarefa final e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que ainda usam um plano semanal e uma folha de estatísticas 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter deixado de lado ou apagado uma aplicação, ou desligado a partilha de dados, depois de fazerem a verificação de aplicações",
      "Alunos que fazem um próximo curso para Atletas, como IA para o Treino e o Desempenho"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Uma conta gratuita do Canva",
      "Uma conta gratuita do Google para o Google Sheets",
      "O seu horário da próxima semana e uma estatística que consiga medir",
      "Cerca de 60 minutos, divididos por alguns dias"
    ],
    facilitatorNotes: [
      "Faça o curso numa sessão de equipa: todos usam as mesmas três ferramentas gratuitas para os atletas se poderem ajudar uns aos outros.",
      "Lembre aos atletas que o assistente planeia a semana mas o treinador decide o treino; envie as perguntas sobre saúde e descanso ao preparador físico.",
      "Confirme as regras da escola ou da liga sobre logótipos e publicações de atletas antes da lição sobre imagens.",
      "Não recolha você mesmo dados do corpo ou de saúde dos atletas; as folhas de estatísticas ficam privadas, a não ser que o atleta escolha partilhá-las.",
      "Peça aos atletas para começarem cedo a folha de estatísticas, para terem três a cinco sessões quando chegar a tarefa final."
    ]
  }
};
