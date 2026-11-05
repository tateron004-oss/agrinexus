"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-intro-ai-sports.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-intro-ai-sports-pt",
  lang: "pt",
  translationOf: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Introdução à IA no Desporto",
  skills: "Explicar o que a IA faz no desporto, Abrir um assistente de IA gratuito, Escrever um pedido claro sobre desporto, Verificar as respostas da IA, Proteger as suas informações privadas e de saúde",
  outcome: "usar um assistente de IA gratuito para fazer um plano de treino e estudo de uma semana à volta do horário da sua equipa: fazer uma pergunta clara, melhorar a resposta, verificá-la com o seu treinador e não colocar nela informações privadas nem de saúde.",
  about: [
    "Este curso é para atletas do ensino secundário, da universidade e do início da carreira, e para treinadores que querem começar de forma simples com a inteligência artificial (IA). Não precisa de saber de tecnologia.",
    "Você vai aprender onde a IA já aparece no desporto, desde as estatísticas dos jogos à análise de vídeo e ao recrutamento, e como usar você mesmo um assistente de IA gratuito para planear a sua semana.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Use um assistente de IA gratuito para fazer um plano de uma semana que caiba no seu horário real de treinos, jogos e aulas. Escreva um pedido claro, peça pelo menos duas melhorias, tire todas as informações privadas ou de saúde e mostre o plano ao seu treinador ou fisioterapeuta desportivo antes de o seguir.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário e da universidade, e alguns jovens adultos em clubes ou no desporto amador, que conciliam treinos, jogos, aulas e às vezes trabalho, recrutamento ou NIL (ganhar dinheiro com o seu nome e imagem).",
    startingPoint: "Usam smartphones, redes sociais e aplicações de desporto todos os dias. Muitos já experimentaram um assistente de IA por curiosidade, mas não escrevem pedidos claros, não verificam as respostas e não pensam nas informações privadas e de saúde que partilham.",
    gap: "A IA pode ajudar os atletas a planear a semana, estudar e organizar-se, mas respostas erradas sobre treino, lesões, alimentação ou elegibilidade podem prejudicar a saúde ou a elegibilidade deles, e recrutadores e contratos de marcas falsos visam os atletas. Eles precisam de usar bem a IA e de a verificar com o treinador, o fisioterapeuta desportivo ou o gabinete de conformidade.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador da escola ou da biblioteca",
      "Tempo: cerca de 5 minutos por lição, à volta dos treinos e das aulas",
      "Regras de idade: os alunos com menos de 18 anos verificam as regras de idade da aplicação e falam com um pai, mãe ou tutor",
      "Saúde e privacidade: nada de relatórios de lesões, medicamentos, palavras-passe ou números de identificação nos pedidos; os conselhos de treino, saúde e elegibilidade são verificados com o profissional certo"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com exemplos de tecnologia no desporto", action: "identificar onde a IA é usada no desporto e o que ela não pode fazer por você", standard: "dizendo pelo menos três usos e um limite" },
    { id: "O2", condition: "Usando o seu telefone ou um computador", action: "abrir um assistente de IA gratuito a partir da sua aplicação ou site oficial, enviar uma primeira mensagem e terminar a sessão num computador partilhado", standard: "depois de verificar as regras de idade da aplicação" },
    { id: "O3", condition: "Com o seu horário real de treinos, jogos e aulas", action: "escrever um pedido com o que precisa, a sua situação e o formato que quer", standard: "para que a primeira resposta seja útil" },
    { id: "O4", condition: "Com uma resposta da IA que não serve para a sua semana", action: "fazer pedidos de seguimento, uma mudança de cada vez, para a corrigir", standard: "fazendo pelo menos duas melhorias" },
    { id: "O5", condition: "Com uma resposta da IA com conselhos de treino, saúde, alimentação ou elegibilidade", action: "verificá-la com o seu treinador, fisioterapeuta desportivo, nutricionista, médico, gabinete de conformidade ou uma página oficial", standard: "antes de a seguir" },
    { id: "O6", condition: "Quando escreve um pedido ou recebe uma oferta na internet", action: "deixar de fora as informações privadas e de saúde e reconhecer as burlas dirigidas a atletas", standard: "sem partilhar palavras-passe, códigos, números de identificação ou registos de saúde" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Onde a IA aparece no desporto",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a IA, e onde já a vê no desporto",
          minutes: 4,
          goal: "Dizer três formas como a IA é usada hoje no desporto e dizer o que a IA não pode fazer.",
          text: [
            "IA, ou inteligência artificial, quer dizer programas de computador que fazem tarefas que normalmente precisam de uma pessoa, como encontrar padrões, escrever textos ou reconhecer o que está num vídeo.",
            "No desporto você já a vê: transmissões que mostram a velocidade de um jogador ou a probabilidade de um remate entrar, aplicações que contam as suas repetições ou registam as suas corridas, ferramentas de vídeo que marcam cada jogada e sites de recrutamento que ordenam os atletas pelas estatísticas.",
            "A IA é uma ajuda, não um treinador, um médico nem um árbitro. Não conhece o seu corpo, a sua equipa nem os seus objetivos se você não lhe disser, e pode estar errada. Quem decide continuam a ser os treinadores e os atletas."
          ],
          words: [["IA", "abreviatura de inteligência artificial: programas que aprendem padrões a partir de dados e os usam para responder, prever ou criar."], ["Dados", "factos e números, como tempos, resultados, repetições ou vídeo."]],
          slides: [
            { title: "A IA numa frase", bullets: ["Programas que aprendem padrões a partir de dados", "Depois respondem, preveem ou criam"] },
            { title: "Onde a vê no desporto", bullets: ["Estatísticas nas transmissões, como velocidade e probabilidade de golo", "Aplicações que registam corridas e repetições", "Ferramentas de vídeo que marcam jogadas", "Sites de recrutamento que ordenam por estatísticas"] },
            { title: "O que a IA não é", bullets: ["Não é o seu treinador, médico nem árbitro", "Pode estar errada, mesmo quando parece segura", "Quem decide são você e o seu treinador"] }
          ],
          tryIt: "Escreva três lugares onde viu IA ou estatísticas inteligentes no seu desporto nesta época, por exemplo um gráfico numa transmissão, uma aplicação de exercício ou uma ferramenta de vídeo que a sua equipa usa.",
          youCanNow: "explicar o que é a IA, dizer três formas como ela aparece no desporto e dizer porque continuam a ser as pessoas a tomar as decisões.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer IA?", options: ["Um tipo de bebida desportiva", "Programas de computador que fazem tarefas que normalmente precisam de uma pessoa", "Uma máquina de treino", "Um sinal do árbitro"], answer: 1, why: "IA quer dizer programas de computador que encontram padrões, escrevem textos ou reconhecem o que está num vídeo." },
            { objective: "O1", q: "Uma aplicação de IA diz que deve mudar de posição na equipa. O que faz?", options: ["Fala com o seu treinador; a IA é uma ajuda, não o seu treinador", "Muda de posição logo", "Sai da equipa", "Deixa de ouvir o seu treinador"], answer: 0, why: "A IA não conhece a sua equipa nem os seus objetivos; quem decide continuam a ser os treinadores e os atletas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir um assistente de IA gratuito",
          minutes: 5,
          goal: "Abrir um assistente de IA gratuito no seu telefone ou num computador e enviar a sua primeira mensagem.",
          text: [
            "Um assistente de IA é um programa de IA com quem conversa com palavras do dia a dia. Alguns gratuitos conhecidos são o ChatGPT, o Microsoft Copilot e o Google Gemini.",
            "No telefone, obtenha a aplicação oficial na loja de aplicações, feita pela empresa verdadeira: OpenAI para o ChatGPT, Microsoft para o Copilot, Google para o Gemini. No computador, abra um navegador e vá a chatgpt.com, copilot.microsoft.com ou gemini.google.com.",
            "Alguns assistentes precisam de uma conta e têm regras de idade. Se tem menos de 18 anos, verifique primeiro as regras de idade da aplicação e fale com um pai, mãe ou tutor. Num computador da escola ou partilhado, termine a sessão quando acabar."
          ],
          steps: ["Escolha o seu telefone ou um computador.", "Telefone: instale a aplicação oficial. Computador: escreva o endereço do site.", "Encontre a caixa de mensagem perto do fundo do ecrã.", "Escreva uma mensagem de olá e leia a resposta.", "Num computador partilhado, termine a sessão e feche o navegador."],
          words: [["Assistente de IA", "um programa de IA com quem conversa, a escrever ou a falar."], ["Navegador", "o programa que usa para visitar sites, como o Chrome, o Edge ou o Safari."]],
          slides: [
            { title: "Assistentes de IA gratuitos", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "Como abrir um", bullets: ["Telefone: aplicação oficial da loja de aplicações", "Computador: chatgpt.com, copilot.microsoft.com ou gemini.google.com", "Encontre a caixa de mensagem em baixo"] },
            { title: "Antes de começar", bullets: ["Menos de 18 anos? Veja as regras de idade e fale com um pai ou mãe", "Computador partilhado: termine a sessão quando acabar"] }
          ],
          tryIt: "Abra um assistente de IA gratuito e escreva: \"Eu jogo [o seu desporto]. Explique em três frases curtas como a IA é usada no meu desporto.\" Leia a resposta.",
          youCanNow: "abrir um assistente de IA gratuito, enviar uma mensagem e sair de um computador partilhado com segurança.",
          quickCheck: [
            { objective: "O2", q: "Que endereço abre o Google Gemini no computador?", options: ["gemini-free-app.net", "freeai.win", "gemini.google.com", "googleai.gift"], answer: 2, why: "gemini.google.com é o endereço oficial; use o site ou a aplicação da empresa verdadeira." },
            { objective: "O2", q: "Usou o ChatGPT num computador da biblioteca para planear a semana. O que faz quando acaba?", options: ["Deixa aberto para um colega de equipa", "Guarda a sua palavra-passe", "Só desliga o ecrã", "Termina a sessão e fecha o navegador"], answer: 3, why: "Terminar a sessão nos computadores partilhados impede os outros de entrar nas suas conversas e contas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever um pedido claro sobre desporto",
          minutes: 5,
          goal: "Escrever um pedido com o que precisa, a sua situação e o formato que quer.",
          text: [
            "O que você escreve a um assistente de IA chama-se pedido (em inglês, \"prompt\"). Um pedido claro dá uma resposta útil à primeira.",
            "Um bom pedido tem três partes: o que precisa, a sua situação e como quer a resposta. Exemplo: \"Sou médio de futebol no ensino secundário. Tenho treino de segunda a quinta das 3:30 às 5:30 e jogo na sexta. Faça um horário de estudo simples para a semana à volta dos treinos. Ponha-o numa tabela.\"",
            "Um pedido fraco como \"ajude-me a melhorar\" obriga o assistente a adivinhar. Acrescente o desporto, a posição, o seu horário e o formato."
          ],
          steps: ["Diga o que precisa.", "Acrescente o seu desporto, posição, nível e horário (sem detalhes privados).", "Diga o formato: lista, tabela, passos curtos ou palavras simples."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."], ["Formato", "a forma da resposta, como uma lista, uma tabela ou passos."]],
          slides: [
            { title: "Três partes de um bom pedido", bullets: ["1. O que você precisa", "2. O seu desporto, posição, nível e horário", "3. O formato que quer"] },
            { title: "Fraco e claro", bullets: ["Fraco: \"ajude-me a melhorar\"", "Claro: \"Sou médio de futebol no secundário, com treino de seg. a qui....\"", "\"...faça um horário de estudo numa tabela\""] },
            { title: "Dê detalhes, não segredos", bullets: ["Sim: desporto, posição, horas de treino", "Não: nome completo, número de aluno, registos de saúde"] }
          ],
          tryIt: "Escreva um pedido com as três partes a pedir um horário de estudo ou de dias de recuperação à volta da sua semana real de treinos. Envie-o e leia a resposta.",
          youCanNow: "escrever um pedido claro sobre desporto com o que precisa, a sua situação e o formato.",
          quickCheck: [
            { objective: "O3", q: "Qual é a parte do formato num pedido?", options: ["Como quer a resposta, por exemplo uma tabela ou uma lista curta", "O seu desporto", "O nome do seu treinador", "A sua palavra-passe"], answer: 0, why: "O formato diz ao assistente que forma dar à resposta." },
            { objective: "O3", q: "Quer ajuda para planear os trabalhos de casa à volta do basquetebol. Qual é o melhor pedido?", options: ["\"trabalhos de casa\"", "\"ajude-me a melhorar\"", "\"basquetebol\"", "\"Sou base de basquetebol no secundário, com treino das 3 às 5 da tarde de segunda a quinta e jogo na sexta. Faça um horário de trabalhos de casa para a semana numa tabela.\""], answer: 3, why: "Dá o que precisa, a situação e o formato." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Onde a IA aparece no desporto",
        questions: [
          { objective: "O1", q: "Qual é um exemplo de IA no desporto?", options: ["Um apito", "Uma caderneta de resultados em papel", "Um gráfico na transmissão que mostra a probabilidade de um remate entrar", "O autocarro da equipa"], answer: 2, why: "Esse gráfico vem de um programa que aprendeu padrões a partir de muitos remates anteriores." },
          { objective: "O1", q: "Uma aplicação de IA sugere que continue a jogar com uma dor forte no joelho. O que deve fazer?", options: ["Parar e falar com o seu fisioterapeuta desportivo ou médico", "Seguir a sugestão, porque a IA sabe mais", "Não ouvir o seu treinador", "Pedir a um colega de equipa para decidir"], answer: 0, why: "A IA não é médica. As perguntas sobre dor e lesões vão para uma pessoa qualificada." },
          { objective: "O2", q: "Onde deve obter uma aplicação de IA para o telefone?", options: ["Num link de um desconhecido nas suas mensagens privadas", "Num anúncio que aparece no ecrã", "Em qualquer site", "Na loja de aplicações oficial, da empresa verdadeira"], answer: 3, why: "As lojas de aplicações oficiais e a aplicação da empresa verdadeira são a escolha segura." },
          { objective: "O3", q: "Quais são as três partes de um pedido claro?", options: ["Nome, escola, número de identificação", "O que precisa, situação, formato", "Desporto, cor da equipa, mascote", "Olá, por favor, obrigado"], answer: 1, why: "O que precisa, a situação e o formato dão ao assistente o que ele precisa para ajudar." },
          { objective: "O3", q: "Que pedido deve dar a resposta mais útil?", options: ["\"ajude-me a melhorar\"", "\"Sou base de basquetebol na universidade, com treino das 6 às 8 da manhã. Faça um horário de aulas e recuperação para a semana numa tabela.\"", "\"basquetebol\"", "\"diga-me tudo\""], answer: 1, why: "Inclui o que precisa, a situação e o formato." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a IA com confiança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Melhorar a resposta",
          minutes: 4,
          goal: "Usar pedidos de seguimento para corrigir uma resposta até servir para a sua semana.",
          text: [
            "A primeira resposta é um rascunho. O assistente lembra-se do que disse antes na mesma conversa, por isso pode pedir mudanças.",
            "Pedidos de seguimento úteis para atletas: \"Passe o tempo de estudo para depois do jantar nos dias de jogo.\" \"Faça mais curto.\" \"Acrescente um dia de descanso.\" \"Use palavras mais simples.\" \"Explique porque pôs isto aqui.\"",
            "Peça uma mudança de cada vez. Se a conversa sair do caminho, comece uma conversa nova com um pedido mais claro."
          ],
          steps: ["Leia a primeira resposta.", "Encontre o que não serve para o seu horário real.", "Peça uma mudança.", "Repita até servir."],
          words: [["Pedido de seguimento", "um segundo pedido que parte da resposta que recebeu."]],
          slides: [
            { title: "Primeira resposta = rascunho", bullets: ["Pode pedir mudanças", "Ele lembra-se da mesma conversa"] },
            { title: "Pedidos de seguimento que funcionam", bullets: ["\"Acrescente um dia de descanso.\"", "\"Passe o tempo de estudo para depois do jantar nos dias de jogo.\"", "\"Explique porque pôs isto aqui.\""] },
            { title: "Saiu do caminho?", bullets: ["Uma mudança de cada vez", "Ou comece uma conversa nova com um pedido mais claro"] }
          ],
          tryIt: "Pegue no seu horário da Lição 3. Peça duas mudanças, uma de cada vez, para que corresponda à sua semana real. Compare a primeira e a última versão.",
          youCanNow: "melhorar uma resposta da IA com pedidos de seguimento claros.",
          quickCheck: [
            { objective: "O4", q: "Porque pode pedir ao assistente para mudar a resposta?", options: ["Ele esquece cada mensagem", "Ele lembra-se do que disse antes na mesma conversa", "Ele é o seu treinador", "Ele tem de concordar com você"], answer: 1, why: "Na mesma conversa o assistente lembra-se das mensagens anteriores, por isso pode pedir mudanças." },
            { objective: "O4", q: "O plano põe muito tempo de estudo logo antes do seu jogo de sexta. O que envia?", options: ["\"Errado.\"", "\"Comece de novo e acrescente mais.\"", "\"No dia de jogo, passe o tempo de estudo para depois do jantar.\"", "Nada; segue-o na mesma"], answer: 2, why: "Um pedido de seguimento claro que diz uma mudança corrige o plano." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar as respostas da IA com o seu treinador",
          minutes: 5,
          goal: "Encontrar as partes de uma resposta da IA que precisam de ser verificadas e verificá-las com a pessoa ou a fonte certa.",
          text: [
            "A IA pode inventar coisas ou dar informações antigas. A isto às vezes chama-se \"alucinação\". No desporto, pode ser uma regra errada, uma estatística inventada, uma data de recrutamento antiga ou um conselho de treino perigoso.",
            "Verifique sempre as cargas de treino, os conselhos sobre lesões e saúde, a alimentação, os suplementos, a elegibilidade e as regras de recrutamento e de NIL. Verifique com o seu treinador, fisioterapeuta desportivo, médico, nutricionista registado ou o gabinete de conformidade da sua escola, e em páginas oficiais como ncaa.org.",
            "Um bom hábito: pergunte ao assistente \"O que devo confirmar com o meu treinador?\" E depois pergunte mesmo ao seu treinador."
          ],
          steps: ["Marque cada facto, número, regra ou conselho de saúde na resposta.", "Decida quem o deve verificar: treinador, fisioterapeuta desportivo, médico, nutricionista ou gabinete de conformidade.", "Verifique as regras em páginas oficiais.", "Se não concordarem, siga a pessoa ou a fonte oficial."],
          words: [["Alucinação", "quando uma IA escreve algo que parece verdade mas é inventado."], ["Gabinete de conformidade", "o gabinete da escola que conhece as regras do desporto, incluindo as regras de recrutamento e de NIL."]],
          slides: [
            { title: "A IA pode errar sobre", bullets: ["Regras e datas de recrutamento", "Estatísticas e recordes", "Conselhos de treino, lesões e alimentação"] },
            { title: "Quem verifica o quê", bullets: ["Treino: treinador", "Lesões e saúde: fisioterapeuta desportivo ou médico", "Alimentação: nutricionista registado", "Regras e NIL: gabinete de conformidade"] },
            { title: "Um bom hábito", bullets: ["Pergunte: \"O que devo confirmar?\"", "Depois verifique com uma pessoa real"] }
          ],
          sources: [{ name: "NCAA: Nome, Imagem e Semelhança (NIL), regras para atletas universitários (em inglês)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Faça a um assistente de IA uma pergunta sobre uma regra do seu desporto, por exemplo quantos tempos de pausa tem cada equipa. Depois encontre a resposta no regulamento oficial da sua liga ou pergunte ao seu treinador, e veja se é igual.",
          youCanNow: "encontrar o que precisa de ser verificado numa resposta da IA e levá-lo à pessoa certa ou à fonte oficial.",
          quickCheck: [
            { objective: "O5", q: "O que é uma alucinação da IA?", options: ["Um sonho durante uma sesta", "A repetição de um vídeo", "Uma resposta rápida", "Algo que a IA inventa e que parece verdade"], answer: 3, why: "A IA pode inventar regras, estatísticas ou datas que parecem verdadeiras." },
            { objective: "O5", q: "A IA sugere um suplemento para recuperar mais depressa. Quem o verifica?", options: ["Um colega de equipa", "Um nutricionista registado, o seu médico ou o seu fisioterapeuta desportivo", "O site do suplemento", "Ninguém; a IA tem sempre razão"], answer: 1, why: "Os suplementos e os conselhos de alimentação têm de ser verificados com o profissional certo, e com o gabinete de conformidade por causa da elegibilidade." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger as suas informações privadas e de saúde",
          minutes: 5,
          goal: "Usar a IA numa tarefa real sem partilhar informações privadas, de saúde ou da conta.",
          text: [
            "Não escreva detalhes privados num assistente de IA: palavras-passe, números da Segurança Social (Social Security) ou de identificação, a morada da sua casa, dados do banco ou registos de saúde como relatórios de lesões, medicamentos ou resultados de exames.",
            "Mesmo assim pode ter ajuda. Escreva \"[a minha escola]\" ou \"uma lesão no músculo posterior da coxa que o meu fisioterapeuta está a tratar\" no lugar de nomes e detalhes médicos. Faça perguntas gerais; leve as perguntas específicas ao profissional.",
            "Cuidado com as burlas dirigidas a atletas: recrutadores falsos, contratos de marcas falsos e agentes falsos que o apressam, pedem dinheiro adiantado ou pedem um código de acesso. Verifique-os primeiro com o seu treinador ou o gabinete de conformidade."
          ],
          steps: ["Leia o seu pedido antes de o enviar.", "Tire nomes, números, palavras-passe e detalhes de saúde.", "Use marcadores como \"[a minha escola]\".", "Trate ofertas com pressa, pagamentos adiantados e pedidos de códigos como sinais de alerta."],
          words: [["Marcador", "uma palavra no lugar de outra, como \"[a minha escola]\", que mantém o detalhe real privado."], ["Burla", "um truque para roubar dinheiro, contas ou informações."]],
          slides: [
            { title: "Nunca escreva na IA", bullets: ["Palavras-passe e códigos de acesso", "Números de identificação ou do banco, morada de casa", "Relatórios de lesões, medicamentos, resultados de exames"] },
            { title: "Use marcadores", bullets: ["\"[a minha escola]\" no lugar do nome", "Pergunta geral à IA, pergunta específica a um profissional"] },
            { title: "Burlas dirigidas a atletas", bullets: ["Recrutadores falsos e agentes falsos", "Contratos de marcas falsos que pedem dinheiro adiantado", "Qualquer pessoa que peça um código de acesso"] }
          ],
          tryIt: "Tarefa final: faça o seu plano de treino e estudo de uma semana com um assistente de IA. Use um pedido com as três partes, peça duas melhorias, tire as informações privadas e de saúde e mostre o plano ao seu treinador ou fisioterapeuta desportivo.",
          youCanNow: "usar a IA para planear a sua semana protegendo as suas informações privadas e de saúde, e reconhecer as burlas dirigidas a atletas.",
          quickCheck: [
            { objective: "O6", q: "Que detalhe deve deixar fora de um pedido?", options: ["As suas horas de treino", "O seu desporto", "O seu relatório de lesão e a lista dos seus medicamentos", "Que quer uma tabela"], answer: 2, why: "Os registos de saúde, como relatórios de lesões e medicamentos, ficam fora das ferramentas de IA." },
            { objective: "O6", q: "Um \"agente\" envia-lhe uma mensagem com um contrato de marca e pede um código de acesso para fechar hoje. O que faz?", options: ["Nunca partilha o código e verifica com o seu treinador ou o gabinete de conformidade", "Envia o código depressa", "Paga a taxa para guardar o contrato", "Dá-lhe a sua palavra-passe em vez do código"], answer: 0, why: "Apressar você e pedir um código são sinais de alerta de burla." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a IA com confiança",
        questions: [
          { objective: "O4", q: "O plano da IA não tem nenhum dia de descanso. Qual é o melhor passo a seguir?", options: ["Aceitá-lo na mesma", "Apagar a aplicação", "Treinar todos os dias para sempre", "Pedir: \"Acrescente um dia de descanso.\""], answer: 3, why: "Um pedido de seguimento pede ao assistente para mudar a resposta." },
          { objective: "O5", q: "Quem deve verificar um conselho da IA sobre uma lesão?", options: ["O seu fisioterapeuta desportivo ou médico", "Um colega de equipa", "A própria IA", "Um comentário nas redes sociais"], answer: 0, why: "As perguntas sobre saúde e lesões vão para um profissional qualificado." },
          { objective: "O5", q: "O que é uma alucinação na IA?", options: ["Um sonho antes de um jogo", "Uma ligação à internet lenta", "Algo que a IA inventou e que parece verdade", "Um tipo de exercício"], answer: 2, why: "A IA pode inventar factos, regras ou estatísticas que parecem verdadeiros." },
          { objective: "O6", q: "Que detalhe pode pôr num pedido?", options: ["A sua palavra-passe", "A lista dos seus medicamentos", "A morada da sua casa", "As suas horas de treino"], answer: 3, why: "As horas de treino ajudam a resposta e não são privadas." },
          { objective: "O6", q: "Um \"recrutador\" envia-lhe uma mensagem privada a pedir uma taxa para mandar hoje os seus melhores momentos aos treinadores. O que faz?", options: ["Paga depressa antes que a vaga desapareça", "Verifica primeiro com o seu treinador ou o gabinete de conformidade", "Envia o seu código de acesso", "Envia o seu número de identificação"], answer: 1, why: "A pressa e as taxas adiantadas são sinais de alerta. Verifique antes de agir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à IA no Desporto",
    questions: [
      { objective: "O1", q: "A melhor descrição da IA é:", options: ["Um novo tipo de bola", "Um árbitro", "Programas que aprendem padrões a partir de dados", "Uma liga desportiva"], answer: 2, why: "A IA aprende padrões a partir de dados e usa-os para responder ou prever." },
      { objective: "O1", q: "Qual destes NÃO é um uso da IA no desporto?", options: ["Atar os atacadores", "Marcar jogadas no vídeo do jogo", "Registar corridas com uma aplicação", "Prever a probabilidade de um remate entrar"], answer: 0, why: "Atar os atacadores é trabalho de uma pessoa; os outros usam IA." },
      { objective: "O1", q: "Quem toma a decisão final sobre o seu treino?", options: ["Você e o seu treinador", "A IA", "Uma aplicação qualquer", "Ninguém"], answer: 0, why: "A IA ajuda; as pessoas decidem." },
      { objective: "O2", q: "Qual é um assistente de IA gratuito conhecido?", options: ["Um cronómetro", "Um marcador de resultados", "Google Gemini", "Uma camisola"], answer: 2, why: "O Gemini, o ChatGPT e o Copilot são assistentes de IA gratuitos." },
      { objective: "O2", q: "Tem 15 anos e quer usar um assistente de IA. O que deve fazer primeiro?", options: ["Mentir sobre a idade", "Verificar as regras de idade da aplicação e falar com um pai, mãe ou tutor", "Usar a conta de um amigo", "Partilhar a sua palavra-passe"], answer: 1, why: "Muitos assistentes têm regras de idade; um dos pais deve saber." },
      { objective: "O2", q: "Onde costuma escrever para um assistente de IA?", options: ["No ícone da bateria", "Na câmara", "Na morada da sua escola", "Na caixa de mensagem perto do fundo"], answer: 3, why: "A caixa de mensagem é onde escreve o seu pedido." },
      { objective: "O2", q: "Depois de usar um computador partilhado da escola, deve:", options: ["Ficar com a sessão aberta", "Guardar a sua palavra-passe", "Terminar a sessão e fechar o navegador", "Deixar um papel com a sua palavra-passe"], answer: 2, why: "Terminar a sessão mantém a sua conta segura." },
      { objective: "O3", q: "O que é um pedido (prompt)?", options: ["Um exercício de aquecimento", "Um grito de apoio da equipa", "Um tempo de pausa", "O que você escreve ou diz a um assistente de IA"], answer: 3, why: "Um pedido é aquilo que pede à IA." },
      { objective: "O3", q: "Que parte diz à IA que forma dar à resposta?", options: ["O formato, como uma tabela ou uma lista", "O número da sua camisola", "A sua palavra-passe", "O número de telefone do seu treinador"], answer: 0, why: "Dizer o formato faz com que a resposta venha na forma de que precisa." },
      { objective: "O3", q: "Qual é o pedido mais claro?", options: ["\"treino\"", "\"Sou velocista na universidade, com treino das 3 às 5 da tarde. Faça um plano de estudo para a semana numa tabela.\"", "\"ajuda\"", "\"desporto\""], answer: 1, why: "Tem o que precisa, a situação e o formato." },
      { objective: "O4", q: "A primeira resposta não serve para o seu dia de jogo. Você deve:", options: ["Desistir", "Aceitá-la", "Fazer um pedido de seguimento para mudar o dia de jogo", "Pagar por uma aplicação nova"], answer: 2, why: "Os pedidos de seguimento corrigem as partes que não servem." },
      { objective: "O4", q: "Quantas mudanças deve pedir de cada vez para manter tudo claro?", options: ["Uma de cada vez", "Dez", "Nenhuma", "Tantas quantas conseguir escrever"], answer: 0, why: "Uma mudança de cada vez mantém a resposta no caminho certo." },
      { objective: "O4", q: "Uma conversa continua a sair do caminho. Uma boa ideia é:", options: ["Escrever a sua palavra-passe", "Repetir as mesmas palavras", "Deixar de treinar", "Começar uma conversa nova com um pedido mais claro"], answer: 3, why: "Uma conversa nova com um pedido mais claro costuma funcionar melhor." },
      { objective: "O5", q: "A IA dá-lhe uma regra de recrutamento. Você deve:", options: ["Publicá-la como facto", "Verificá-la em ncaa.org ou com o seu gabinete de conformidade", "Ignorar todas as regras", "Perguntar outra vez à IA e confiar nela"], answer: 1, why: "As regras mudam; verifique na fonte oficial." },
      { objective: "O5", q: "Quem é a pessoa certa para verificar um plano de alimentação?", options: ["Um influenciador qualquer", "Um nutricionista registado", "A IA", "Um videojogo"], answer: 1, why: "Os nutricionistas registados têm formação para dar conselhos de alimentação." },
      { objective: "O5", q: "Quem conhece as regras de NIL e de recrutamento da sua escola?", options: ["A cantina", "O motorista do autocarro", "Uma equipa rival", "O gabinete de conformidade"], answer: 3, why: "O gabinete de conformidade trata das regras do desporto." },
      { objective: "O6", q: "O que NUNCA deve escrever num assistente de IA?", options: ["A lista dos seus medicamentos", "O seu horário de treinos", "O seu desporto", "A sua posição"], answer: 0, why: "Os medicamentos e os registos de saúde são privados." },
      { objective: "O6", q: "Como pode perguntar sobre uma lesão sem partilhar registos?", options: ["Colar o relatório da sua ressonância magnética", "Escrever as notas do seu médico", "Fazer uma pergunta geral e levar a pergunta específica ao seu fisioterapeuta desportivo", "Partilhar o seu número do seguro"], answer: 2, why: "As perguntas gerais não fazem mal; os cuidados específicos são com um profissional." },
      { objective: "O6", q: "Um contrato de marca pede-lhe para pagar uma taxa adiantada para entrar. Isto é:", options: ["Normal em todos os contratos", "Exigido pela NCAA", "Um bom sinal", "Um sinal de alerta de burla"], answer: 3, why: "As marcas verdadeiras pagam a você; as taxas adiantadas são um sinal comum de burla." },
      { objective: "O6", q: "Alguém pede o código que acabou de chegar por SMS ao seu telefone. Você deve:", options: ["Lê-lo para essa pessoa", "Nunca o partilhar", "Publicá-lo", "Enviá-lo por SMS à sua equipa"], answer: 1, why: "Esse código protege a sua conta. Os recrutadores e as marcas verdadeiros nunca o pedem." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 7, 10, 13, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pedido claro", objective: "O3", notYet: "O pedido é vago, por exemplo \"faça-me um plano\".", meets: "O pedido diz o que precisa, o seu horário real de treinos, jogos e aulas, e o formato.", exceeds: "A primeira resposta já serve para a maior parte da semana." },
      { name: "Melhorou a resposta", objective: "O4", notYet: "Usou a primeira resposta como estava.", meets: "Pediu pelo menos duas melhorias, uma de cada vez.", exceeds: "Sabe dizer o que cada mudança corrigiu, como um dia de descanso ou o horário do dia de jogo." },
      { name: "Informações privadas e de saúde de fora", objective: "O6", notYet: "O pedido tem um nome, um número de identificação, uma palavra-passe ou um detalhe de saúde.", meets: "Nenhuma informação privada ou de saúde no pedido nem no plano.", exceeds: "Usou marcadores como \"[a minha escola]\" e guardou as perguntas de saúde para o fisioterapeuta desportivo." },
      { name: "Verificou com o treinador", objective: "O5", notYet: "Seguiu o plano sem o mostrar a ninguém.", meets: "Mostrou o plano ao treinador ou ao fisioterapeuta desportivo antes de o seguir.", exceeds: "Mudou o plano com base nos comentários deles e sabe dizer o que mudou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter usado um plano feito com IA para treinar e estudar em 30 dias (inquérito de seguimento)",
      "Treinadores ou fisioterapeutas desportivos que dizem que os atletas verificam com eles os conselhos da IA",
      "Alunos que começam outro curso de Atletas em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou um computador da escola ou da biblioteca com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "O horário real de treinos, jogos e aulas do aluno para uma semana",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Verifique as regras de idade de cada aplicação de IA para o seu grupo; os alunos com menos de 18 anos precisam da autorização de um pai, mãe ou tutor.",
      "Peça a um treinador ou fisioterapeuta desportivo para rever os planos finais com os atletas.",
      "Nunca peça aos atletas para escrever relatórios de lesões, medicamentos ou números de identificação em ferramentas de IA.",
      "Fale sobre as burlas de recrutadores e contratos de marcas falsos, e indique aos atletas o gabinete de conformidade para as perguntas sobre NIL.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
