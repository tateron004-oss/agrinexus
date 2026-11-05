"use strict";

// Koach Learn course (Portuguese translation of youth/youth-ai-gaming-esports.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-ai-gaming-esports-pt",
  lang: "pt",
  translationOf: "youth-ai-gaming-esports",
  category: "Youth",
  name: "IA para Jogos e Desportos Eletrónicos",
  skills: "Definir um objetivo de treino, Fazer um plano de treino com IA, Rever uma partida, Comunicação em equipa, Jogar com segurança e de forma justa, Conhecer profissões nos desportos eletrónicos",
  outcome: "usar um assistente de IA gratuito como treinador: definir um objetivo claro para um jogo que joga, fazer um plano de treino de uma semana, rever uma partida com notas e manter o seu jogo seguro, justo e equilibrado com a escola e o sono.",
  about: [
    "Este curso é para adolescentes que jogam videojogos, desde quem joga de vez em quando até quem está numa equipa de desportos eletrónicos (esports) da escola ou de um clube. Não precisa de equipamento caro. Precisa de um jogo que joga e de um assistente de IA gratuito.",
    "Você vai aprender como a IA já aparece dentro dos jogos e depois como usar um assistente de IA como um treinador: para definir um objetivo, planear o treino e encontrar padrões nas suas partidas. Também vai aprender a falar bem com uma equipa, a ficar seguro e a jogar limpo na internet, e que profissões existem à volta dos desportos eletrónicos.",
    "Verifique as regras da sua escola sobre a IA, a classificação etária dos seus jogos e a idade mínima de cada aplicação, e fale com um dos pais ou o encarregado de educação antes de se inscrever em alguma coisa. Cada lição termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escolha um jogo que joga e uma habilidade para melhorar. Use um assistente de IA para fazer um plano de treino de uma semana que caiba à volta da escola, dos trabalhos de casa e do sono. Jogue e reveja uma partida com três notas escritas, peça à IA para encontrar um padrão e sugerir um exercício, e escreva uma mensagem curta para a equipa ou o clube sobre o que vai treinar a seguir.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adolescentes que jogam videojogos, desde quem joga de vez em quando até membros de equipas de desportos eletrónicos da escola ou de clubes.",
    startingPoint: "Jogam pelo menos um jogo com frequência e conversam com outros jogadores na internet. Poucos treinam com um plano, revêem as suas partidas ou sabem reconhecer burlas com contas e conversas perigosas.",
    gap: "Muitos adolescentes jogam muito sem melhorar, e os jogos podem tirar tempo à escola e ao sono. Os jogos na internet também trazem burlas, batotas e desconhecidos. Usar a IA como treinador, com objetivos claros e hábitos de segurança, ajuda os adolescentes a melhorar, a manter o equilíbrio e a ver profissões reais à volta dos desportos eletrónicos.",
    constraints: [
      "Classificações etárias, idades mínimas das aplicações e regras da escola sobre a IA; um dos pais ou o encarregado de educação participa antes de qualquer inscrição",
      "Não precisa de equipamento caro; qualquer jogo e um assistente de IA gratuito",
      "A escola, os trabalhos de casa e o sono vêm primeiro em todos os planos",
      "Privacidade e segurança: nada de nomes verdadeiros, escolas, dados de acesso ou dados de outros jogadores nas conversas ou nas ferramentas de IA",
      "Lições curtas com palavras simples"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "A pensar num jogo que joga", action: "identificar formas como a IA é usada dentro dos jogos e o que um assistente de IA pode e não pode fazer para o ajudar a treinar", standard: "acertando pelo menos 3 de 4" },
    { id: "O2", condition: "Com uma habilidade para melhorar e o seu horário real", action: "fazer com a IA um plano de treino de uma semana com um objetivo pequeno e mensurável e exercícios curtos", standard: "que caiba à volta da escola, dos trabalhos de casa e do sono" },
    { id: "O3", condition: "Depois de jogar ou ver uma partida", action: "escrever três notas sobre a partida e pedir à IA para encontrar um padrão e sugerir um exercício", standard: "sem nomes de utilizador de outros jogadores nem mensagens privadas" },
    { id: "O4", condition: "Para a sua equipa ou clube", action: "criar uma lista de avisos curtos e uma mensagem simpática para a equipa com as suas próprias palavras", standard: "mantendo os avisos curtos e calmos e a mensagem com menos de 80 palavras" },
    { id: "O5", condition: "Quando encontra batotas, burlas ou conversas perigosas", action: "recusar batotas e burlas, deixar os dados pessoais fora das conversas, e bloquear, denunciar e contar a um adulto de confiança", standard: "sem partilhar dados de acesso, códigos ou dados pessoais" },
    { id: "O6", condition: "Usando a IA e uma fonte de confiança", action: "fazer uma lista de profissões nos desportos eletrónicos além de jogador profissional e verificar uma com um orientador ou um anúncio de emprego real", standard: "dizendo as habilidades de que essa profissão precisa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Treinar melhor com a IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Onde a IA aparece nos jogos e como pode ser o seu treinador",
          minutes: 4,
          goal: "Dizer formas como a IA é usada nos jogos e formas como um assistente de IA o pode ajudar a treinar.",
          text: [
            "Os jogos usam IA há muito tempo. As personagens controladas pelo computador contra quem joga, o sistema que o junta a jogadores com um nível parecido com o seu e as ferramentas que apanham batoteiros podem todos usar IA.",
            "Um assistente de IA como o ChatGPT, o Microsoft Copilot ou o Google Gemini é diferente. Não consegue ver o seu ecrã nem jogar por você, mas pode ajudá-lo a pensar: definir objetivos, planear o treino, explicar ideias de estratégia e encontrar padrões nas notas que lhe dá.",
            "Ele não conhece todas as atualizações do jogo e pode estar errado. Compare as dicas de estratégia com as notas oficiais do jogo, com o capitão ou o treinador da sua equipa e com os seus próprios resultados."
          ],
          words: [["IA", "abreviatura de inteligência artificial: programas de computador que fazem tarefas que normalmente precisam de uma pessoa."], ["Emparelhamento (matchmaking)", "o sistema que escolhe com quem ou contra quem você joga."], ["Atualização (patch)", "uma mudança que altera um jogo."]],
          slides: [
            { title: "A IA dentro dos jogos", bullets: ["Personagens controladas pelo computador", "Emparelhamento por nível", "Ferramentas que apanham batoteiros"] },
            { title: "Um assistente de IA como treinador", bullets: ["Ajuda a definir objetivos e planear o treino", "Explica ideias de estratégia", "Encontra padrões nas suas notas"] },
            { title: "Os limites dele", bullets: ["Não vê o seu ecrã nem joga por você", "Pode não conhecer a última atualização", "Compare as dicas com resultados reais"] }
          ],
          tryIt: "Escreva o jogo que mais joga e três coisas nele em que gostava de melhorar. Faça um círculo à volta da que é mais importante para você agora.",
          youCanNow: "dizer formas como a IA é usada nos jogos e explicar o que um assistente de IA pode e não pode fazer como treinador.",
          quickCheck: [
            { objective: "O1", q: "Qual destes pode usar IA dentro de um jogo?", options: ["A capa da caixa do jogo", "A bateria do seu comando", "A classificação etária do jogo", "As ferramentas que apanham batoteiros"], answer: 3, why: "Os jogadores do computador, o emparelhamento e as ferramentas contra batota podem todos usar IA." },
            { objective: "O1", q: "A IA dá-lhe uma estratégia que parece estranha depois de uma atualização nova. O que faz?", options: ["Usa-a na próxima partida a contar para o ranking sem verificar", "Compara-a com as notas oficiais do jogo ou com o seu treinador", "Deixa de jogar o jogo", "Pede a um desconhecido os seus dados de acesso"], answer: 1, why: "A IA pode não conhecer a última atualização, por isso compare as dicas com as notas oficiais e os seus resultados." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Definir um objetivo e fazer um plano de treino",
          minutes: 5,
          goal: "Usar um assistente de IA para transformar um objetivo num plano de treino semanal que caiba na sua vida.",
          text: [
            "Melhorar vem de treinar uma coisa de propósito, não só de jogar mais. Um bom objetivo é pequeno e mensurável: \"Acertar mais tiros no modo de treino\" ou \"Avisar onde estão os inimigos em cada ronda\", e não \"ficar bom\".",
            "Diga à IA o seu jogo, o seu objetivo, o seu nível e o seu horário real. Por exemplo: \"Jogo Rocket League. Quero acertar melhor na bola no ar. Posso treinar 30 minutos em 4 noites de escola depois dos trabalhos de casa. Faça um plano simples de uma semana com exercícios curtos e uma forma de ver o meu progresso.\"",
            "Ponha primeiro a escola, os trabalhos de casa, o sono e o tempo com a família. Os jogadores de desportos eletrónicos de todos os níveis fazem pausas, alongam-se e descansam os olhos. Um plano que consegue cumprir é melhor do que um plano enorme que abandona."
          ],
          steps: ["Escolha um objetivo pequeno e mensurável.", "Diga à IA o seu jogo, objetivo, nível e tempo livre real.", "Peça um plano de uma semana com exercícios curtos e uma forma de ver o progresso.", "Verifique que deixa tempo para a escola, os trabalhos de casa e o sono.", "Peça uma mudança se for demasiado."],
          words: [["Objetivo mensurável", "um objetivo que pode verificar com um número ou com um sim ou não."], ["Exercício (drill)", "um treino curto que pratica uma só habilidade."]],
          slides: [
            { title: "Treine de propósito", bullets: ["Uma habilidade de cada vez", "Pequeno e mensurável", "Não só \"ficar bom\""] },
            { title: "O que dizer à IA", bullets: ["O seu jogo e o seu objetivo", "O seu nível", "O seu tempo livre real"] },
            { title: "Um plano que consegue cumprir", bullets: ["Escola, trabalhos de casa e sono primeiro", "Exercícios curtos, pausas curtas", "Veja o progresso todos os dias"] }
          ],
          tryIt: "Peça a um assistente de IA um plano de treino de uma semana para a habilidade que marcou na Lição 1, usando o seu horário real. Peça-lhe para encurtar o plano se ocupar mais de 30 a 45 minutos por dia.",
          youCanNow: "transformar um objetivo de jogo num plano de treino semanal realista com um assistente de IA.",
          quickCheck: [
            { objective: "O2", q: "O que o ajuda mais a melhorar?", options: ["Treinar uma habilidade de propósito", "Jogar mais horas sem objetivo", "Comprar equipamento novo", "Mudar de jogo todos os dias"], answer: 0, why: "Melhorar vem de treinar uma coisa de propósito." },
            { objective: "O2", q: "Quer \"ficar bom\". Como transforma isso num objetivo melhor?", options: ["Deixa como \"ficar bom\"", "Muda para \"jogar o fim de semana todo\"", "Torna-o pequeno e mensurável, como acertar mais tiros no modo de treino", "Muda para \"ganhar todas as partidas\""], answer: 2, why: "Um objetivo pequeno e mensurável deixa-o ver progresso real." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rever uma partida com a IA",
          minutes: 5,
          goal: "Escrever notas sobre uma partida e usar a IA para encontrar um padrão e sugerir um exercício.",
          text: [
            "Os melhores jogadores revêem as suas partidas. Depois de uma partida, ou enquanto vê a repetição se o seu jogo a tiver, escreva três notas curtas: uma coisa que correu bem, um erro e quando aconteceu.",
            "Cole as notas num assistente de IA e pergunte: \"Aqui estão as minhas notas de três partidas. Que padrões vê, e que exercício me ajudaria?\" A IA é boa a encontrar repetições que você pode não ver.",
            "Escreva notas sobre o jogo, não sobre outras pessoas. Não cole nomes de utilizador de outros jogadores, mensagens privadas nem nada pessoal. E seja simpático consigo mesmo: o objetivo é aprender, não sentir-se mal."
          ],
          steps: ["Jogue uma partida ou veja a repetição de uma.", "Escreva três notas: uma coisa boa, um erro e quando aconteceu.", "Junte notas de duas ou três partidas.", "Peça à IA padrões e um exercício.", "Acrescente o exercício ao seu plano de treino."],
          words: [["Repetição (replay)", "uma gravação de uma partida que pode ver outra vez."], ["Padrão", "uma coisa que acontece muitas vezes."]],
          slides: [
            { title: "Três notas por partida", bullets: ["Uma coisa que correu bem", "Um erro", "Quando aconteceu"] },
            { title: "Peça padrões à IA", bullets: ["Cole notas de 2-3 partidas", "\"Que padrões vê?\"", "\"Que exercício me ajudaria?\""] },
            { title: "Fale só do jogo", bullets: ["Nada de nomes ou mensagens de outros jogadores", "Aprenda, sem se culpar"] }
          ],
          tryIt: "Jogue uma partida, escreva três notas e pergunte a um assistente de IA o que ele repara e que exercício sugere. Acrescente esse exercício ao seu plano.",
          youCanNow: "rever uma partida com notas e usar a IA para encontrar um padrão e escolher um exercício.",
          quickCheck: [
            { objective: "O3", q: "Para que serve rever uma partida?", options: ["Para culpar os colegas de equipa", "Para se sentir mal por perder", "Para publicar os nomes de outros jogadores", "Para aprender com o que correu bem e o que correu mal"], answer: 3, why: "Rever ajuda-o a aprender; o objetivo não é sentir-se mal." },
            { objective: "O3", q: "As suas notas têm o nome de utilizador e a conversa de um colega de equipa. O que faz antes de as colar na IA?", options: ["Tira o nome de utilizador e a conversa e deixa só notas sobre o jogo", "Cola tudo", "Acrescenta também o nome verdadeiro dele", "Não escreve notas"], answer: 0, why: "Escreva notas sobre o jogo, não sobre outras pessoas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Treinar melhor com a IA",
        questions: [
          { objective: "O1", q: "Qual é um exemplo de IA dentro de um jogo?", options: ["O cabo de energia", "As personagens controladas pelo computador contra quem joga", "A caixa do jogo", "Os seus auscultadores"], answer: 1, why: "As personagens controladas pelo computador usam muitas vezes IA." },
          { objective: "O2", q: "Qual é o melhor objetivo de treino?", options: ["\"Ficar bom\"", "\"Jogar a noite toda\"", "\"Avisar onde estão os inimigos em cada ronda esta semana\"", "\"Ganhar tudo\""], answer: 2, why: "É pequeno e mensurável." },
          { objective: "O2", q: "O que deve dizer à IA para ter um plano de treino útil?", options: ["O seu jogo, objetivo, nível e tempo livre real", "A sua palavra-passe", "Só a palavra \"plano\"", "A morada da sua casa"], answer: 0, why: "Esses dados deixam-na fazer um plano que serve para você." },
          { objective: "O2", q: "O plano da IA ocupa 3 horas em cada noite de escola. O que faz?", options: ["Não faz os trabalhos de casa", "Fica acordado até tarde", "Pede à IA para o encurtar e o encaixar à volta da escola e do sono", "Segue-o na mesma"], answer: 2, why: "Um plano que consegue cumprir põe a escola e o sono primeiro." },
          { objective: "O3", q: "O que deve deixar de fora das notas da partida que dá à IA?", options: ["Quando aconteceu um erro", "O que correu bem", "Nomes de utilizador e mensagens privadas de outros jogadores", "O nome do jogo"], answer: 2, why: "Escreva notas sobre o jogo, não sobre os dados pessoais de outras pessoas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Equipas, segurança e futuro nos desportos eletrónicos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Falar bem com a sua equipa",
          minutes: 5,
          goal: "Usar a IA para ajudar a escrever avisos curtos para a equipa e uma mensagem clara para o clube ou a equipa.",
          text: [
            "As boas equipas falam de forma clara e simpática. Os avisos (em inglês, \"callouts\") são palavras curtas que a equipa combina, como \"dois à esquerda\" ou \"a rodar para o meio\". Avisos curtos e calmos são melhores do que avisos longos ou zangados.",
            "Um assistente de IA pode ajudá-lo a fazer uma lista de avisos para o seu jogo, ou a escrever uma mensagem para o clube da sua escola: horários de treino, o que vão treinar e um lembrete para haver respeito. Peça: \"Escreva uma mensagem curta e simpática para o clube de desportos eletrónicos da minha escola sobre o treino de quinta-feira. Menos de 80 palavras.\"",
            "Se um colega de equipa errar, pense na próxima jogada, não em culpar. As equipas que se mantêm positivas jogam melhor e divertem-se mais."
          ],
          steps: ["Faça a lista dos momentos mais comuns no seu jogo que precisam de um aviso.", "Peça à IA palavras curtas e claras para cada um.", "Combine a lista com a sua equipa.", "Use a IA para fazer o rascunho de uma mensagem curta e simpática para a equipa ou o clube.", "Leia-a, mude-a para soar como você e depois partilhe-a."],
          words: [["Aviso (callout)", "uma palavra ou frase curta que diz aos colegas de equipa o que está a acontecer."], ["Desportos eletrónicos (esports)", "videojogos competitivos e organizados, muitas vezes com equipas e ligas."]],
          slides: [
            { title: "Avisos claros", bullets: ["Palavras curtas que a equipa combina", "Calma é melhor do que gritar", "Exemplo: \"dois à esquerda\""] },
            { title: "A IA para mensagens da equipa", bullets: ["Hora e lugar do treino", "O que vão treinar", "Um lembrete para haver respeito"] },
            { title: "Mantenha-se positivo", bullets: ["Pense na próxima jogada", "Sem culpar ninguém", "Faça-a soar como você"] }
          ],
          tryIt: "Peça a um assistente de IA para o ajudar a fazer uma lista de cinco avisos para o seu jogo. Depois peça-lhe o rascunho de uma mensagem curta para a sua equipa ou clube sobre o próximo treino, e reescreva-a com as suas palavras.",
          youCanNow: "criar avisos claros para a equipa e uma mensagem simpática para a equipa com a ajuda da IA.",
          quickCheck: [
            { objective: "O4", q: "O que é um aviso (callout)?", options: ["Um discurso longo depois da partida", "Uma mensagem zangada", "Uma frase curta que diz aos colegas de equipa o que está a acontecer", "Um código de batota"], answer: 2, why: "Os avisos são palavras curtas que a equipa combina, como \"dois à esquerda\"." },
            { objective: "O4", q: "A IA escreveu o rascunho da mensagem do clube, mas soa rígida. O que faz?", options: ["Envia-a na mesma", "Reescreve-a para soar como você antes de a partilhar", "Torna-a muito mais longa", "Acrescenta os números de telefone dos colegas"], answer: 1, why: "Leia e mude os rascunhos da IA para soarem como você." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jogar com segurança e de forma justa",
          minutes: 5,
          goal: "Reconhecer batotas, burlas e conversas perigosas, e saber o que fazer.",
          text: [
            "As batotas, como os aimbots ou ficheiros alterados, quebram as regras do jogo e podem fazer a sua conta ser banida. Os sites que prometem moeda do jogo grátis, skins ou \"batotas com IA\" muitas vezes roubam contas ou instalam programas perigosos. Nunca os descarregue nem dê os seus dados de acesso a ninguém.",
            "Tenha cuidado nas conversas. Não partilhe o seu nome verdadeiro, escola, morada, número de telefone ou fotografias com pessoas que só conhece na internet. Se alguém o pressionar, pedir segredos ou o deixar desconfortável, bloqueie essa pessoa, denuncie-a no jogo e conte a um dos pais, ao encarregado de educação ou a um adulto de confiança.",
            "Os jogos têm classificações etárias. Nos Estados Unidos, a ESRB classifica os jogos, por exemplo T (Teen, adolescente) para cerca de 13 anos ou mais e M (Mature, maduro) para 17 anos ou mais. Fale com a sua família sobre que jogos e quanto tempo de ecrã são certos para você."
          ],
          steps: ["Nunca use batotas nem descarregue ferramentas de \"moeda grátis\".", "Nunca dê a ninguém os seus dados de acesso nem o código enviado para o seu telefone.", "Deixe o seu nome verdadeiro, escola e morada fora das conversas.", "Bloqueie, denuncie e conte a um adulto de confiança quando alguma coisa parecer errada.", "Veja a classificação etária de um jogo com a sua família."],
          words: [["Aimbot", "uma batota que aponta por você; quebra as regras do jogo."], ["Banir", "quando um jogo bloqueia a sua conta por quebrar as regras."], ["Classificação etária", "um rótulo que diz para que idades um jogo é feito."]],
          slides: [
            { title: "Jogue limpo", bullets: ["As batotas podem fazer a sua conta ser banida", "Os sites de \"moeda grátis\" roubam contas", "Nunca partilhe os seus dados de acesso nem o código do telefone"] },
            { title: "Segurança nas conversas", bullets: ["Nada de nome verdadeiro, escola ou morada", "Nada de fotografias para desconhecidos", "Bloqueie, denuncie e conte a um adulto de confiança"] },
            { title: "Classificações etárias", bullets: ["ESRB T: em geral 13 anos ou mais", "ESRB M: em geral 17 anos ou mais", "Fale com a sua família sobre jogos e tempo"] }
          ],
          sources: [{ name: "ESRB: Guia das classificações", url: "https://www.esrb.org/ratings-guide/" }],
          tryIt: "Abra as definições de um jogo ou plataforma que usa e encontre onde bloquear e denunciar um jogador. Depois procure a classificação etária do seu jogo favorito no site da ESRB.",
          youCanNow: "reconhecer batotas, burlas com contas e conversas perigosas, e saber bloquear, denunciar e pedir ajuda.",
          quickCheck: [
            { objective: "O5", q: "O que costuma acontecer nos sites que prometem moeda do jogo ou skins grátis?", options: ["Recebe itens grátis com segurança", "O seu jogo fica mais rápido", "Nada", "Muitas vezes roubam contas ou instalam programas perigosos"], answer: 3, why: "Os sites de moeda grátis e de batotas muitas vezes roubam contas ou instalam programas perigosos." },
            { objective: "O5", q: "Um jogador na internet continua a pedir uma fotografia sua e diz para guardar segredo. O que faz?", options: ["Envia uma fotografia", "Bloqueia, denuncia e conta a um dos pais, ao encarregado de educação ou a um adulto de confiança", "Guarda o segredo", "Diz-lhe antes a sua escola"], answer: 1, why: "A pressão e os segredos são sinais de alerta; bloqueie, denuncie e conte a um adulto de confiança." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Profissões nos desportos eletrónicos e juntar tudo",
          minutes: 6,
          goal: "Conhecer profissões à volta dos desportos eletrónicos e completar o seu plano de treino e a revisão da partida.",
          text: [
            "Só poucas pessoas se tornam jogadores profissionais, mas os desportos eletrónicos precisam de muitas outras pessoas: treinadores, gestores de equipa, comentadores (shoutcasters) que comentam as partidas, editores de vídeo, designers gráficos, organizadores de eventos e as pessoas que criam e testam jogos.",
            "Pergunte a um assistente de IA: \"Que profissões existem nos desportos eletrónicos além de jogador profissional? Que disciplinas da escola e que clubes ajudam em cada uma?\" Depois verifique as respostas com um orientador da escola ou um anúncio de emprego real, porque a IA pode estar desatualizada.",
            "Muitas escolas têm clubes ou equipas de desportos eletrónicos. Se a sua não tiver, um responsável de clubes ou um professor pode ajudá-lo a começar um. Agora junte tudo: objetivo, plano, revisão da partida e mensagem para a equipa."
          ],
          steps: ["Peça à IA uma lista de profissões nos desportos eletrónicos e das habilidades de que cada uma precisa.", "Escolha uma profissão que lhe interesse.", "Verifique-a com um orientador ou um anúncio de emprego real.", "Complete o seu objetivo, plano, revisão da partida e mensagem para a equipa."],
          words: [["Comentador (shoutcaster)", "uma pessoa que comenta partidas de desportos eletrónicos ao vivo."], ["Organizador de eventos", "uma pessoa que planeia e organiza torneios."]],
          slides: [
            { title: "Mais do que jogadores profissionais", bullets: ["Treinadores e gestores de equipa", "Comentadores e editores de vídeo", "Designers, testadores, organizadores de eventos"] },
            { title: "Explore com a IA e depois verifique", bullets: ["Pergunte que habilidades cada profissão precisa", "Verifique com um orientador ou um anúncio de emprego"] },
            { title: "A sua tarefa final", bullets: ["Um objetivo e um plano de uma semana", "Uma partida revista com três notas", "Um exercício e uma mensagem para a equipa"] }
          ],
          tryIt: "Tarefa final: faça com a IA um plano de treino de uma semana que caiba à volta da escola e do sono, reveja uma partida com três notas, peça à IA um padrão e um exercício, e escreva uma mensagem curta para a equipa ou o clube sobre o que vai treinar a seguir.",
          youCanNow: "usar a IA como treinador, jogar com segurança e de forma justa, e dizer profissões nos desportos eletrónicos além de jogador profissional.",
          quickCheck: [
            { objective: "O6", q: "Qual destas é uma profissão nos desportos eletrónicos além de jogador profissional?", options: ["Gestor de equipa", "Vendedor de aimbots", "Comprador de contas", "Distribuidor de skins grátis"], answer: 0, why: "Os desportos eletrónicos precisam de treinadores, gestores, comentadores, editores, designers e organizadores de eventos." },
            { objective: "O6", q: "A IA faz uma lista de profissões nos desportos eletrónicos e das habilidades de que precisam. O que faz a seguir?", options: ["Confia em todos os detalhes", "Escolhe uma profissão ao acaso", "Ignora a lista", "Verifica uma profissão com um orientador da escola ou um anúncio de emprego real"], answer: 3, why: "A IA pode estar desatualizada, por isso verifique com um orientador ou um anúncio real." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Equipas, segurança e futuro nos desportos eletrónicos",
        questions: [
          { objective: "O4", q: "O que faz um bom aviso?", options: ["Longo e detalhado", "Curto, calmo e combinado pela equipa", "Alto e zangado", "Diferente todas as vezes"], answer: 1, why: "Avisos curtos e combinados são rápidos e claros." },
          { objective: "O5", q: "Um site oferece moeda do jogo grátis se puser os seus dados de acesso. O que faz?", options: ["Põe-nos depressa", "Partilha o link com amigos", "Dá-lhes o código do seu telefone", "Não os põe; é provavelmente uma burla"], answer: 3, why: "Os sites de moeda grátis muitas vezes roubam contas." },
          { objective: "O5", q: "Alguém que só conhece na internet pergunta em que escola anda. O que faz?", options: ["Diz-lhe", "Envia uma fotografia do seu uniforme", "Não diz; bloqueia e conta a um adulto de confiança se a pessoa o pressionar", "Dá antes a sua morada"], answer: 2, why: "Mantenha os seus dados pessoais privados na internet." },
          { objective: "O5", q: "Uma classificação ESRB M quer dizer que um jogo é, em geral, para idades de:", options: ["17 anos ou mais", "6 anos ou mais", "10 anos ou mais", "Todas as idades"], answer: 0, why: "M (Mature, maduro) é, em geral, para 17 anos ou mais." },
          { objective: "O6", q: "Qual é uma profissão nos desportos eletrónicos além de jogador profissional?", options: ["Comentador (shoutcaster)", "Criador de aimbots", "Vendedor de contas", "Testador de batotas"], answer: 0, why: "Os comentadores comentam as partidas; as outras quebram as regras." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Jogos e Desportos Eletrónicos",
    questions: [
      { objective: "O1", q: "O emparelhamento (matchmaking) num jogo é:", options: ["Uma forma de comprar skins", "O sistema que escolhe com quem ou contra quem você joga", "Uma batota", "Um tipo de comando"], answer: 1, why: "O emparelhamento junta jogadores, muitas vezes pelo nível." },
      { objective: "O1", q: "O que é que um assistente de IA NÃO pode fazer pelo seu jogo?", options: ["Ajudar a planear o treino", "Explicar ideias de estratégia", "Ver o seu ecrã e jogar por você", "Encontrar padrões nas suas notas"], answer: 2, why: "Um assistente de conversa ajuda-o a pensar; não joga por você." },
      { objective: "O1", q: "Porque comparar as dicas de estratégia da IA com as notas oficiais do jogo?", options: ["A IA pode não conhecer a última atualização", "A IA está sempre certa", "As notas oficiais são ilegais", "É uma regra da escola"], answer: 0, why: "Os jogos mudam com as atualizações e a IA pode estar desatualizada." },
      { objective: "O2", q: "Um objetivo mensurável é um objetivo que você pode:", options: ["Nunca terminar", "Só sentir", "Verificar com um número ou com um sim ou não", "Esquecer"], answer: 2, why: "Mensurável quer dizer que pode verificá-lo." },
      { objective: "O2", q: "O que entra primeiro no seu plano de treino?", options: ["Sessões até tarde da noite", "A escola, os trabalhos de casa e o sono", "Comprar equipamento novo", "Jogar outros jogos"], answer: 1, why: "Um bom plano encaixa à volta da escola e do descanso." },
      { objective: "O2", q: "Um exercício (drill) é:", options: ["Um treino curto que pratica uma só habilidade", "Um código de batota", "O nome de uma equipa", "Uma classificação de jogo"], answer: 0, why: "Os exercícios praticam uma habilidade de cada vez." },
      { objective: "O2", q: "O seu plano parece demasiado. O que faz?", options: ["Deixa de jogar", "Pede à IA para o encurtar", "Dorme menos", "Ignora-o"], answer: 1, why: "Os pedidos de seguimento ajustam o plano." },
      { objective: "O3", q: "Que três notas deve escrever depois de uma partida?", options: ["Resultado, tempo, lanche", "Nomes e mensagens de outros jogadores", "Uma coisa boa, um erro e quando aconteceu", "Nada"], answer: 2, why: "Estas notas ajudam-no a aprender com a partida." },
      { objective: "O3", q: "Porque dar à IA notas de várias partidas?", options: ["Para ela encontrar padrões que se repetem", "Para a tornar mais lenta", "Para ela entrar na conta por você", "Ela precisa da sua palavra-passe"], answer: 0, why: "Os padrões aparecem ao longo de várias partidas." },
      { objective: "O3", q: "O que deve fazer com o exercício que a IA sugere?", options: ["Ignorá-lo", "Publicá-lo para todos verem", "Apagar as suas notas", "Acrescentá-lo ao seu plano de treino"], answer: 3, why: "Um exercício só ajuda se o praticar." },
      { objective: "O4", q: "Um aviso (callout) é:", options: ["Uma frase curta que diz aos colegas de equipa o que está a acontecer", "Uma batota", "Um banimento", "Uma classificação"], answer: 0, why: "Os avisos ajudam as equipas a falar depressa." },
      { objective: "O4", q: "Um colega de equipa erra. A melhor resposta é:", options: ["Culpá-lo na conversa", "Sair da partida", "Pensar na próxima jogada", "Denunciá-lo"], answer: 2, why: "As equipas positivas jogam melhor." },
      { objective: "O4", q: "Antes de partilhar uma mensagem do clube escrita com a IA, deve:", options: ["Enviá-la sem ler", "Lê-la e fazê-la soar como você", "Acrescentar a sua palavra-passe", "Torná-la mais longa"], answer: 1, why: "Você é responsável pelo que envia." },
      { objective: "O5", q: "Usar um aimbot pode:", options: ["Fazer a sua conta ser banida", "Ajudá-lo a aprender mais depressa", "Subir a sua classificação etária", "Torná-lo treinador"], answer: 0, why: "As batotas quebram as regras e podem levar a um banimento." },
      { objective: "O5", q: "Alguém pede o código que acabou de ser enviado para o seu telefone. Você:", options: ["Lê-o para essa pessoa", "Nunca o partilha", "Publica-o na conversa", "Envia-o à sua equipa"], answer: 1, why: "Esse código protege a sua conta." },
      { objective: "O5", q: "Um jogador na internet deixa-o desconfortável. O que faz?", options: ["Continua a conversar", "Dá-lhe o seu número", "Bloqueia, denuncia e conta a um adulto de confiança", "Envia uma fotografia"], answer: 2, why: "Bloquear, denunciar e contar a um adulto mantém-no seguro." },
      { objective: "O5", q: "A classificação ESRB T (Teen, adolescente) é, em geral, para idades de:", options: ["3 anos ou mais", "13 anos ou mais", "Só 18 anos ou mais", "Menos de 10 anos"], answer: 1, why: "T é, em geral, adequado para 13 anos ou mais." },
      { objective: "O5", q: "Antes de se inscrever numa nova aplicação de jogos ou de IA, um adolescente deve:", options: ["Usar uma data de nascimento falsa", "Saltar os termos", "Partilhar a palavra-passe de um dos pais", "Verificar a idade mínima e falar com um dos pais ou o encarregado de educação"], answer: 3, why: "Os limites de idade e a participação dos pais mantêm-no seguro e dentro das regras." },
      { objective: "O6", q: "Um comentador (shoutcaster):", options: ["Comenta partidas de desportos eletrónicos", "Faz batotas", "Bane jogadores", "Classifica jogos"], answer: 0, why: "Os comentadores são as vozes das transmissões de desportos eletrónicos." },
      { objective: "O6", q: "A IA faz-lhe uma lista de profissões nos desportos eletrónicos. E a seguir?", options: ["Acredita em todos os detalhes", "Deixa a escola", "Verifica com um orientador ou um anúncio de emprego real", "Paga logo por um curso"], answer: 2, why: "A IA pode estar desatualizada; verifique em fontes reais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 3, 4, 7, 8, 10, 13, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Objetivo e plano", objective: "O2", notYet: "O objetivo é vago, como \"ficar bom\", ou não há plano.", meets: "Um objetivo pequeno e mensurável e um plano de uma semana com exercícios curtos.", exceeds: "O plano inclui uma forma de ver o progresso todos os dias." },
      { name: "Equilibrado com a vida", objective: "O2", notYet: "O plano tira tempo à escola, aos trabalhos de casa ou ao sono.", meets: "A escola, os trabalhos de casa e o sono vêm primeiro, e o treino encaixa à volta deles.", exceeds: "Também inclui pausas, alongamentos ou descanso para os olhos." },
      { name: "Revisão da partida", objective: "O3", notYet: "Menos de três notas, ou notas sobre outras pessoas.", meets: "Três notas (coisa boa, erro, quando) e um exercício sugerido pela IA acrescentado ao plano.", exceeds: "Notas de duas ou mais partidas, com o padrão que a IA encontrou explicado pelas palavras do aluno." },
      { name: "Mensagem para a equipa", objective: "O4", notYet: "A mensagem falta, é longa ou é antipática.", meets: "Uma mensagem curta e simpática sobre o que a equipa vai treinar, com as palavras do próprio aluno.", exceeds: "Também inclui uma lista de avisos combinada." },
      { name: "Seguro e justo", objective: "O5", notYet: "O plano ou as notas têm dados privados, ou falam de batotas.", meets: "Nenhum dado privado em lado nenhum, e nenhuma batota ou ferramenta perigosa.", exceeds: "O aluno sabe mostrar onde bloquear e denunciar no seu jogo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que seguem o seu plano de treino durante uma semana inteira e dizem que progrediram no seu objetivo (inquérito de seguimento)",
      "Alunos que entram ou começam uma equipa de desportos eletrónicos da escola ou de um clube em 90 dias",
      "Alunos que dizem, no seguimento de 30 dias, que bloquearam e denunciaram um jogador perigoso ou evitaram uma burla"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um jogo que o aluno já joga e tem autorização para jogar, em qualquer aparelho",
      "Um assistente de IA gratuito que o aluno tem autorização para usar",
      "Papel ou uma aplicação de notas para as notas das partidas e o plano de treino",
      "Cerca de 60 minutos no total, mais uma semana de treino para o plano"
    ],
    facilitatorNotes: [
      "Faça o curso com uma equipa de desportos eletrónicos da escola ou de um clube, para os alunos planearem e reverem juntos.",
      "Verifique as classificações etárias dos jogos usados no seu programa e partilhe-as com as famílias.",
      "Antes de aprovar um plano de treino, confirme que deixa tempo para a escola, os trabalhos de casa e o sono.",
      "Mostre aos alunos onde bloquear e denunciar nos jogos que o seu grupo joga, e diga o nome do adulto de confiança a quem podem contar.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
