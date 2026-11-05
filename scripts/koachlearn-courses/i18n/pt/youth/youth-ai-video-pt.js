"use strict";

// Koach Learn course (Portuguese translation of youth/youth-ai-video.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-ai-video-pt",
  lang: "pt",
  translationOf: "youth-ai-video",
  category: "Youth",
  name: "Criação de Vídeos com IA",
  skills: "Escrever um guião curto com IA, Fazer um storyboard, Filmar com o telefone, Editar num editor gratuito, Pôr legendas e música de forma responsável, Partilhar com segurança",
  outcome: "planear, filmar e editar um vídeo de 30 a 60 segundos (como a promoção de um clube ou de um evento da escola) usando IA para ajudar no guião, no storyboard e nas legendas, com a autorização de todas as pessoas que aparecem, música que pode usar e uma indicação honesta em tudo o que a IA fez.",
  about: [
    "Este curso é para adolescentes que querem fazer vídeos melhores para trabalhos da escola, clubes, equipas, uma banda ou o seu próprio canal. Basta um telefone e um editor de vídeo gratuito.",
    "Você vai usar um assistente de IA como o ChatGPT, o Microsoft Copilot ou o Google Gemini para ter ideias e escrever um guião curto, transformá-lo num storyboard, filmá-lo com boa luz e bom som, editá-lo num editor gratuito como o CapCut ou o Canva, pôr legendas e partilhá-lo com segurança.",
    "As aplicações de vídeo e as ferramentas de IA têm idades mínimas e algumas pedem uma conta, por isso leia as condições de cada ferramenta, siga as regras da sua escola sobre IA e filmagens, e envolva um pai, uma mãe ou um responsável quando criar uma conta. Cada lição termina com uma tarefa \"Experimente agora\", há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Faça um vídeo de 30 a 60 segundos que promova um clube, uma equipa, um evento ou uma causa da escola de que você gosta. Use IA para ajudar a escrever o guião e o storyboard, filme pelo menos quatro planos com a autorização de todas as pessoas que aparecem, edite-o num editor gratuito, ponha legendas e música que pode usar, indique tudo o que foi gerado por IA e exporte o vídeo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adolescentes que querem fazer vídeos melhores para trabalhos da escola, clubes, equipas, uma banda ou o seu próprio canal.",
    startingPoint: "Filmam e veem vídeos curtos no telefone todos os dias. Poucos planeiam com um guião ou um storyboard, controlam a luz e o som, editam com cortes curtos ou conhecem as regras sobre autorização para filmar, direitos de autor da música e indicação de conteúdo feito por IA.",
    gap: "Os vídeos sem plano perdem quem os vê em poucos segundos, e os vídeos feitos sem cuidado podem usar música sem autorização, filmar pessoas que disseram não ou espalhar falsificações feitas com IA que magoam pessoas. Os adolescentes precisam de planear, filmar e editar bem um vídeo curto, usando a IA com honestidade e respeitando os outros.",
    constraints: [
      "Limites de idade e regras de conta das aplicações de vídeo e de IA; um pai, mãe ou responsável participa na criação das contas",
      "Regras da escola sobre IA e sobre filmar alunos; alguns alunos não podem ser filmados nem publicados",
      "Aparelhos: um telefone e um editor gratuito como o CapCut ou o Canva",
      "Direitos de autor e consentimento: só música e vídeos permitidos; autorização de todas as pessoas que aparecem",
      "Privacidade ao partilhar: nada de nome completo, morada da escola ou horários em publicações públicas"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Pensando nos vídeos que vê e faz", action: "explicar como a IA ajuda nos vídeos, o que é um deepfake e as regras básicas que vai seguir", standard: "acertando pelo menos 3 de 4" },
    { id: "O2", condition: "Com um tema, um público e uma duração", action: "escrever com a IA um rascunho de guião com um gancho, cenas curtas e um apelo à ação, e transformá-lo num storyboard", standard: "reescrito com as suas palavras, com os dados verificados e o tempo total dentro da duração" },
    { id: "O3", condition: "Usando um telefone", action: "filmar planos firmes, com boa luz e som claro", standard: "com a autorização de todas as pessoas que aparecem e seguindo as regras da escola sobre filmagens" },
    { id: "O4", condition: "Usando um editor de vídeo gratuito", action: "importar, cortar e ordenar os seus vídeos e acrescentar um título e um apelo à ação em texto", standard: "seguindo o storyboard e sem tempos mortos" },
    { id: "O5", condition: "Antes de o vídeo estar terminado", action: "pôr legendas certas, música que pode usar e indicações em tudo o que foi gerado por IA", standard: "com cada legenda verificada e sem o rosto ou a voz de uma pessoa real feitos por IA sem autorização" },
    { id: "O6", condition: "Quando a edição estiver pronta", action: "pedir opiniões, exportar o vídeo e partilhá-lo com segurança", standard: "mantendo os dados pessoais privados e dizendo como usou a IA nos trabalhos da escola" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear e filmar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Como a IA ajuda nos vídeos, e as regras básicas",
          minutes: 4,
          goal: "Dizer formas como a IA ajuda nos vídeos e as regras que vai seguir.",
          text: [
            "A IA aparece em todo o lado na criação de vídeos: assistentes que ajudam a ter ideias e a escrever guiões, editores que fazem legendas automáticas ou tiram o ruído de fundo, e geradores que criam imagens ou vídeos a partir de um pedido escrito.",
            "A IA também pode ser mal usada. Um deepfake é um vídeo ou uma voz falsa que faz parecer que uma pessoa real disse ou fez algo que não disse nem fez. Fazer deepfakes de colegas, professores ou famosos pode magoar pessoas, quebrar as regras da escola e, em alguns lugares, ir contra a lei.",
            "As suas regras básicas: peça autorização a todas as pessoas que filma, use só música e vídeos que pode usar, indique tudo o que foi gerado por IA, confirme a idade mínima de cada aplicação e siga as regras da sua escola."
          ],
          words: [["Guião", "as palavras e as ações planeadas para um vídeo."], ["Deepfake", "um vídeo ou uma voz falsa que faz parecer que uma pessoa real disse ou fez algo que não disse nem fez."], ["Gerado por IA", "feito por uma ferramenta de IA em vez de filmado ou desenhado por uma pessoa."]],
          slides: [
            { title: "A IA na criação de vídeos", bullets: ["Ter ideias e escrever guiões", "Legendas automáticas e remoção de ruído", "Imagens ou vídeos a partir de um pedido"] },
            { title: "Mau uso: deepfakes", bullets: ["Fingem que uma pessoa real diz ou faz coisas", "Magoam pessoas e quebram as regras da escola", "Nunca os faça"] },
            { title: "Regras básicas", bullets: ["Autorização de todas as pessoas que aparecem", "Música e vídeos que pode usar", "Indique o conteúdo feito por IA", "Confirme as idades das aplicações e as regras da escola"] }
          ],
          tryIt: "Escolha o tema do seu vídeo final: um clube, uma equipa, um evento ou uma causa da sua escola ou da sua comunidade. Escreva uma frase sobre para quem é o vídeo e o que quer que as pessoas façam depois de o verem.",
          youCanNow: "dizer formas como a IA ajuda nos vídeos e explicar as regras para a usar de forma justa.",
          quickCheck: [
            { objective: "O1", q: "Qual destas é uma forma útil de usar a IA nos vídeos?", options: ["Fazer um vídeo falso de um professor", "Tirar o ruído de fundo de uma gravação", "Copiar o rosto de alguém sem pedir", "Roubar uma música"], answer: 1, why: "A IA ajuda com guiões, legendas e remoção de ruído; falsificações de pessoas reais são mau uso." },
            { objective: "O1", q: "Um amigo quer fazer um deepfake engraçado do diretor da escola para o vídeo do clube. O que faz?", options: ["Faz, mas só mostra aos amigos", "Faz, com o rosto desfocado", "Publica-o sem indicação", "Diz que não, porque pode magoar pessoas e quebrar regras"], answer: 3, why: "Os deepfakes de pessoas reais podem magoá-las, quebrar as regras da escola e, em alguns lugares, ir contra a lei." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever um guião e um storyboard com IA",
          minutes: 5,
          goal: "Usar a IA para escrever o rascunho de um guião curto e transformá-lo num storyboard plano a plano.",
          text: [
            "Os vídeos curtos precisam de um gancho nos primeiros 3 segundos, um meio claro e um final que diga às pessoas o que fazer, como \"Venha à nossa reunião na quinta-feira, na Sala 12\".",
            "Peça um rascunho à IA: \"Escreva um guião de 45 segundos para um vídeo que convida os alunos do primeiro ano a entrar no nosso clube de robótica. Inclua um gancho, 3 cenas curtas e um apelo à ação. Use palavras simples de adolescentes.\" Depois reescreva-o para soar como você e o seu clube.",
            "Um storyboard é o plano de cada plano: o que se vê, o que se ouve e quanto tempo dura. Peça à IA para transformar o seu guião numa tabela com essas colunas. Também pode desenhar bonecos simples."
          ],
          steps: ["Diga à IA o tema, o público, a duração e o tom.", "Peça um gancho, 3 cenas curtas e um apelo à ação.", "Reescreva-o com as suas palavras e verifique os dados (datas, sala, horas).", "Peça à IA para o transformar numa tabela de storyboard: plano, o que se vê, o que se ouve, segundos.", "Confirme que o tempo total cabe na duração."],
          words: [["Gancho", "os primeiros segundos que prendem a atenção."], ["Apelo à ação", "a frase que diz a quem vê o que fazer a seguir."], ["Storyboard", "um plano do vídeo, plano a plano."], ["Plano", "um pedaço de filmagem contínuo, sem cortes."]],
          slides: [
            { title: "A forma de um vídeo curto", bullets: ["Gancho nos primeiros 3 segundos", "Um meio claro", "Apelo à ação no final"] },
            { title: "Peça um rascunho à IA", bullets: ["Tema, público, duração, tom", "Depois reescreva com as suas palavras", "Verifique datas, horas e lugares"] },
            { title: "Storyboard", bullets: ["Número do plano", "O que se vê e o que se ouve", "Quantos segundos"] }
          ],
          tryIt: "Use um assistente de IA para escrever o rascunho de um guião sobre o tema do seu vídeo, reescreva-o com as suas palavras e transforme-o num storyboard de 4 a 6 planos que caiba no seu tempo.",
          youCanNow: "escrever o guião e o storyboard de um vídeo curto com a ajuda da IA.",
          quickCheck: [
            { objective: "O2", q: "O que é um storyboard?", options: ["A secção de comentários do vídeo", "O ficheiro final exportado", "O plano de cada plano: o que se vê, o que se ouve e quanto tempo dura", "Uma lista de músicas"], answer: 2, why: "Um storyboard planeia cada plano antes de filmar." },
            { objective: "O2", q: "O guião da IA diz que o seu clube se reúne na Sala 14, mas você não tem a certeza. O que faz?", options: ["Verifica você mesmo a sala, a data e a hora antes de filmar", "Deixa ficar; a IA costuma estar certa", "Tira a sala do vídeo", "Pergunta à IA se tem a certeza"], answer: 0, why: "A IA pode errar datas, horas ou lugares, por isso verifique os dados." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Filmar com o telefone",
          minutes: 5,
          goal: "Filmar planos firmes, com boa luz, som claro e autorização.",
          text: [
            "Luz: ponha a pessoa virada para a luz, como uma janela, para a luz ficar no rosto dela e não atrás. Firmeza: segure o telefone com as duas mãos, apoie-se em alguma coisa ou use um suporte. Ponha o telefone deitado ou de pé conforme o lugar onde vai publicar.",
            "O som conta mais do que as pessoas pensam. Filme perto de quem fala, num lugar calmo, longe de ventoinhas e corredores. Grave um teste de 3 segundos e ouça-o antes da gravação a sério.",
            "Pergunte a todas as pessoas que filma se pode, e diga-lhes onde o vídeo vai ser mostrado. Alguns alunos não podem ser filmados nem publicados pelas regras da escola, por isso confirme com o seu professor ou o responsável do clube. Não filme pessoas em lugares privados nem ninguém que diga não."
          ],
          steps: ["Ponha a pessoa virada para a luz.", "Segure o telefone firme com as duas mãos ou num suporte.", "Escolha deitado ou de pé conforme o lugar onde vai publicar.", "Grave um pequeno teste de som e ouça-o.", "Peça autorização a todas as pessoas que aparecem e siga as regras da escola sobre filmagens."],
          words: [["Gravação (take)", "uma tentativa de filmar um plano."], ["Enquadramento", "o que fica dentro dos limites da imagem."]],
          slides: [
            { title: "Luz e firmeza", bullets: ["Rosto virado para a luz", "Duas mãos ou um suporte", "Deitado ou de pé conforme a plataforma"] },
            { title: "Som", bullets: ["Fique perto de quem fala", "Lugar calmo, sem ventoinhas nem corredores", "Faça um teste de 3 segundos"] },
            { title: "Autorização", bullets: ["Pergunte a todas as pessoas que aparecem", "Diga onde vai ser mostrado", "Siga as regras da escola sobre filmagens"] }
          ],
          tryIt: "Filme os dois primeiros planos do seu storyboard. Faça primeiro um teste de som, peça autorização a quem aparecer e filme cada plano pelo menos duas vezes.",
          youCanNow: "filmar planos firmes, com boa luz e som claro, com a autorização das pessoas que aparecem.",
          quickCheck: [
            { objective: "O3", q: "Porque gravar um pequeno teste de som antes da gravação a sério?", options: ["Para gastar bateria", "Para o vídeo ficar mais longo", "Para testar a luz", "Para ouvir se o som está claro antes de filmar"], answer: 3, why: "Um teste de 3 segundos deixa-o apanhar ruído ou som baixo antes da gravação a sério." },
            { objective: "O3", q: "O responsável do clube diz que um aluno não pode ser filmado pelas regras da escola. O que faz?", options: ["Filma-o de costas", "Filma-o e desfoca depois", "Planeia os planos para esse aluno não aparecer", "Ignora a regra"], answer: 2, why: "Siga as regras da escola sobre filmagens e não filme ninguém que não possa ou não queira ser filmado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear e filmar",
        questions: [
          { objective: "O1", q: "O que é um deepfake?", options: ["Um vídeo ou uma voz falsa que faz parecer que uma pessoa real disse ou fez algo que não disse nem fez", "Um tipo de câmara", "Uma aplicação de edição gratuita", "O final de um vídeo"], answer: 0, why: "Os deepfakes põem em pessoas reais palavras ou ações que nunca aconteceram." },
          { objective: "O2", q: "O que devem fazer os primeiros 3 segundos de um vídeo curto?", options: ["Mostrar os créditos", "Ficar em silêncio", "Prender a atenção com um gancho", "Mostrar um ecrã vazio"], answer: 2, why: "Um gancho faz as pessoas continuarem a ver." },
          { objective: "O2", q: "A IA escreve o rascunho do seu guião. O que faz a seguir?", options: ["Publica-o sem mudar nada", "Reescreve-o com as suas palavras e verifica os dados", "Apaga-o", "Acrescenta a morada da sua casa"], answer: 1, why: "Você torna-o seu e confirma que as datas e os lugares estão certos." },
          { objective: "O3", q: "Onde deve estar a luz quando filma uma pessoa?", options: ["Atrás dela", "Em lado nenhum", "Só no chão", "No rosto dela, como quando está virada para uma janela"], answer: 3, why: "A luz no rosto faz a pessoa ver-se bem." },
          { objective: "O3", q: "Um colega diz que não quer aparecer no seu vídeo. O que faz?", options: ["Filma-o na mesma", "Filma-o de longe", "Não o filma", "Desfoca-o depois sem perguntar"], answer: 2, why: "Filme só as pessoas que aceitam." }
        ]
      }
    },
    {
      name: "Capítulo 2: Editar e partilhar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Editar num editor de vídeo gratuito",
          minutes: 6,
          goal: "Importar vídeos, cortá-los, pô-los por ordem e acrescentar texto.",
          text: [
            "Editores gratuitos como o CapCut e o Canva funcionam no telefone e no navegador de internet. Os menus mudam muitas vezes, por isso procure estas ações: começar um projeto novo, importar ou carregar os seus vídeos, aparar (cortar o início e o fim), dividir um vídeo, arrastar os vídeos para a ordem certa e acrescentar texto.",
            "Siga o seu storyboard. Corte cada plano bem curto: comece logo antes da ação e termine logo depois. Os tempos mortos fazem as pessoas passar para outro vídeo.",
            "Ponha um título no início e o seu apelo à ação em texto no fim. Use texto grande e curto, que fique no ecrã tempo suficiente para se ler duas vezes."
          ],
          steps: ["Comece um projeto novo e importe os seus vídeos.", "Ponha os vídeos pela ordem do storyboard.", "Apare o início e o fim de cada vídeo.", "Acrescente um título e um apelo à ação em texto.", "Veja tudo do princípio ao fim e corrija o que estiver lento."],
          words: [["Importar", "trazer os seus vídeos para o editor."], ["Aparar", "cortar o início ou o fim de um vídeo."], ["Linha do tempo", "a fila no editor onde os vídeos ficam por ordem."]],
          slides: [
            { title: "Editores gratuitos", bullets: ["CapCut ou Canva no telefone ou na internet", "Procure: importar, aparar, dividir, texto"] },
            { title: "Corte curto", bullets: ["Comece logo antes da ação", "Termine logo depois", "Sem tempos mortos"] },
            { title: "Texto no ecrã", bullets: ["Título no início", "Apelo à ação no fim", "Grande, curto, fácil de ler"] }
          ],
          tryIt: "Importe todos os seus planos, ponha-os pela ordem do storyboard, apare cada um e acrescente um título e um apelo à ação no final.",
          youCanNow: "editar vídeos num vídeo curto e ordenado, com um título e um apelo à ação.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer cortar um plano \"curto\"?", options: ["Pôr o texto muito pequeno", "Começar logo antes da ação e terminar logo depois", "Aproximar a imagem dos rostos", "Usar só um plano"], answer: 1, why: "Os cortes curtos tiram os tempos mortos que fazem as pessoas passar para outro vídeo." },
            { objective: "O4", q: "O texto do seu apelo à ação passa rápido demais para se ler. O que faz?", options: ["Põe o texto mais pequeno", "Apaga-o", "Acrescenta mais palavras", "Deixa-o no ecrã o tempo suficiente para se ler duas vezes"], answer: 3, why: "O texto no ecrã deve ser grande, curto e ficar tempo suficiente para se ler duas vezes." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Legendas, música e imagens de IA, bem feitas",
          minutes: 5,
          goal: "Pôr legendas certas, música que pode usar e indicações honestas no conteúdo feito por IA.",
          text: [
            "Muitas pessoas veem vídeos sem som, e as legendas ajudam as pessoas surdas ou que ouvem mal. Muitos editores conseguem fazer legendas automáticas com IA. Leia-as sempre e corrija as palavras erradas, sobretudo os nomes.",
            "A música é protegida por direitos de autor. Segundo o Gabinete de Direitos de Autor dos EUA (U.S. Copyright Office), uma obra fica protegida logo que é criada e fixada, por isso a maioria das músicas que ouve é protegida. Use música da biblioteca do próprio editor, segundo as regras dele, música feita por você ou música com autorização clara. As plataformas podem tirar o som ou remover vídeos que usam música sem autorização.",
            "Se acrescentar uma imagem ou um vídeo gerado por IA, indique-o, por exemplo com \"Imagem gerada por IA\" no ecrã ou na descrição. Nunca use a IA para pôr o rosto ou a voz de uma pessoa real no seu vídeo sem a autorização clara dela."
          ],
          steps: ["Ligue as legendas automáticas se o seu editor as tiver.", "Leia todas as legendas e corrija os erros, sobretudo os nomes.", "Escolha música da biblioteca do editor, feita por você ou com autorização.", "Indique todas as imagens ou vídeos gerados por IA.", "Não use o rosto nem a voz de uma pessoa real feitos por IA sem autorização."],
          words: [["Legendas", "palavras no ecrã que mostram o que se diz."], ["Direitos de autor", "o direito legal de quem cria uma obra de controlar as cópias dela."], ["Indicação", "uma nota curta que diz que alguma coisa foi feita com IA."]],
          slides: [
            { title: "Legendas", bullets: ["Muitos veem sem som", "Ajudam quem é surdo ou ouve mal", "Corrija os erros das legendas automáticas"] },
            { title: "Música que pode usar", bullets: ["Biblioteca do editor, segundo as regras dele", "Música feita por você", "Música com autorização clara"] },
            { title: "Imagens de IA", bullets: ["Indique-as", "Nada de rostos ou vozes de pessoas reais feitos por IA sem autorização"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ (perguntas frequentes sobre direitos de autor, em inglês)", url: "https://www.copyright.gov/help/faq/faq-general.html" }],
          tryIt: "Ponha legendas no seu vídeo e corrija todos os erros. Acrescente música que pode usar. Se usou alguma imagem ou vídeo gerado por IA, ponha uma indicação.",
          youCanNow: "pôr legendas certas, escolher música que pode usar e indicar com honestidade o conteúdo gerado por IA.",
          quickCheck: [
            { objective: "O5", q: "Porque ler as legendas automáticas antes de publicar?", options: ["As legendas da IA podem errar palavras, sobretudo nomes", "As legendas estão sempre perfeitas", "Para o vídeo ficar mais longo", "As legendas não são obrigatórias"], answer: 0, why: "As legendas automáticas podem ouvir mal as palavras, por isso leia-as e corrija-as." },
            { objective: "O5", q: "Quer pôr uma música famosa na promoção do seu clube. O que faz?", options: ["Usa-a e espera que ninguém repare", "Usa-a baixinho, em fundo", "Escolhe música da biblioteca do editor, feita por você ou com autorização", "Acelera-a para soar diferente"], answer: 2, why: "A maioria das músicas é protegida; use música permitida ou a plataforma pode tirar o som ou remover o vídeo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rever, exportar e partilhar com segurança",
          minutes: 5,
          goal: "Pedir opiniões, exportar o seu vídeo e partilhá-lo com segurança.",
          text: [
            "Antes de terminar, mostre o seu vídeo a uma ou duas pessoas e pergunte: O gancho foi forte? Alguma coisa foi confusa? Soube o que fazer no fim? Também pode descrever o seu vídeo a um assistente de IA e pedir três formas de o melhorar.",
            "Exporte o vídeo com a opção de exportar ou guardar do editor. Veja o ficheiro exportado mais uma vez para verificar o som, as legendas e o final.",
            "Partilhe-o onde o seu clube, a escola e a família concordam. Não ponha o seu nome completo, a morada da escola nem os seus horários em publicações públicas. Se for um trabalho da escola, siga as regras do seu professor sobre IA e diga como usou a IA."
          ],
          steps: ["Mostre o vídeo a uma ou duas pessoas e faça três perguntas.", "Faça uma ou duas melhorias.", "Exporte o vídeo e veja o ficheiro mais uma vez.", "Partilhe onde o clube, a escola e a família concordam.", "Mantenha os dados pessoais privados e diga como usou a IA nos trabalhos da escola."],
          words: [["Opiniões (feedback)", "comentários de outras pessoas que ajudam a melhorar."], ["Exportar", "guardar o seu projeto como um ficheiro de vídeo."]],
          slides: [
            { title: "Peça opiniões", bullets: ["O gancho foi forte?", "Alguma coisa foi confusa?", "Soube o que fazer no fim?"] },
            { title: "Exportar e verificar", bullets: ["Use exportar ou guardar", "Veja o ficheiro mais uma vez"] },
            { title: "Partilhar com segurança", bullets: ["Onde a escola e a família concordam", "Mantenha os dados pessoais privados", "Diga como usou a IA nos trabalhos da escola"] }
          ],
          tryIt: "Tarefa final: termine o seu vídeo de 30 a 60 segundos com guião e storyboard feitos com ajuda da IA, pelo menos quatro planos filmados com autorização, legendas, música que pode usar e indicações no conteúdo de IA. Peça opiniões, exporte-o e partilhe-o com segurança.",
          youCanNow: "planear, filmar, editar, verificar e partilhar um vídeo curto de forma responsável com a ajuda da IA.",
          quickCheck: [
            { objective: "O6", q: "Porque ver o ficheiro exportado mais uma vez?", options: ["Para verificar se o som, as legendas e o final saíram bem", "Para gastar mais dados", "Para apagar o projeto", "Para mudar o tema"], answer: 0, why: "A exportação pode ter problemas, por isso veja o ficheiro final antes de partilhar." },
            { objective: "O6", q: "Uma pessoa diz que não soube o que fazer no fim. O que muda?", options: ["Nada", "Torna o apelo à ação mais claro", "Acrescenta mais música", "Tira o gancho"], answer: 1, why: "Uma opinião sobre o final quer dizer que o apelo à ação precisa de ser mais claro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Editar e partilhar",
        questions: [
          { objective: "O4", q: "O que quer dizer aparar num editor de vídeo?", options: ["Acrescentar música", "Cortar o início ou o fim de um vídeo", "Partilhar o vídeo", "Fazer legendas"], answer: 1, why: "Aparar tira o tempo a mais no início ou no fim." },
          { objective: "O5", q: "As legendas automáticas escreveram mal o nome do líder do seu clube. O que faz?", options: ["Deixa ficar", "Desliga o som", "Apaga o vídeo", "Corrige a legenda"], answer: 3, why: "Leia e corrija sempre as legendas automáticas." },
          { objective: "O5", q: "Que música é segura de usar?", options: ["Música da biblioteca do editor, segundo as regras dele", "Um êxito da rádio", "Uma música tirada de um site de vídeos", "Qualquer música se disser o nome do cantor"], answer: 0, why: "Música da biblioteca segundo as regras dela, música sua ou música com autorização pode ser usada." },
          { objective: "O5", q: "Acrescentou uma imagem gerada por IA. O que deve fazer?", options: ["Escondê-la", "Dizer que foi você que a desenhou", "Indicar que foi gerada por IA", "Tirar as legendas"], answer: 2, why: "Indicações honestas dizem a quem vê o que a IA fez." },
          { objective: "O6", q: "O que deve fazer antes de partilhar um vídeo de um trabalho da escola?", options: ["Publicar a morada da escola", "Esconder como usou a IA", "Não ver o ficheiro exportado", "Seguir as regras do seu professor sobre IA e dizer como usou a IA"], answer: 3, why: "Seguir as regras da escola e ser honesto sobre o uso da IA é importante." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criação de Vídeos com IA",
    questions: [
      { objective: "O1", q: "Qual é uma forma útil de usar a IA nos vídeos?", options: ["Fazer legendas automáticas", "Fazer vídeos falsos de colegas", "Copiar filmes", "Roubar contas"], answer: 0, why: "As legendas automáticas são uma função de IA comum e útil." },
      { objective: "O1", q: "Porque são um problema os deepfakes de pessoas reais?", options: ["São curtos demais", "Podem magoar pessoas e quebrar as regras da escola ou a lei", "Não têm som", "Precisam de um tripé"], answer: 1, why: "Os deepfakes fazem parecer que pessoas reais fizeram coisas que não fizeram." },
      { objective: "O1", q: "Antes de criar uma conta numa aplicação de vídeo ou de IA, um adolescente deve:", options: ["Usar a conta de um amigo mais velho", "Saltar as condições", "Confirmar a idade mínima e envolver um pai, mãe ou responsável", "Usar uma data de nascimento falsa"], answer: 2, why: "As aplicações têm limites de idade, e um pai, mãe ou responsável deve participar." },
      { objective: "O2", q: "Um apelo à ação é:", options: ["A música de fundo", "Uma configuração da câmara", "O nome do ficheiro do vídeo", "A frase que diz a quem vê o que fazer a seguir"], answer: 3, why: "Diz a quem vê o que fazer, como entrar no clube ou ir ao evento." },
      { objective: "O2", q: "Que pedido à IA vai dar o melhor rascunho de guião?", options: ["\"Vídeo de 45 segundos a convidar alunos do primeiro ano para o clube de robótica; gancho, 3 cenas, apelo à ação; palavras simples\"", "\"vídeo\"", "\"faça qualquer coisa\"", "\"robôs\""], answer: 0, why: "Dá o tema, o público, a duração, a forma e o tom." },
      { objective: "O2", q: "Um storyboard mostra:", options: ["Só a música", "Cada plano: o que se vê, o que se ouve e quanto tempo dura", "O preço do editor", "Os comentários de quem vê"], answer: 1, why: "Um storyboard é um plano do vídeo, plano a plano." },
      { objective: "O2", q: "Porque verificar os dados num guião escrito pela IA?", options: ["A IA nunca erra", "Os dados não importam nos vídeos", "A IA pode errar datas, horas ou lugares", "Faz o vídeo mais longo"], answer: 2, why: "A IA pode estar errada; você verifica os detalhes." },
      { objective: "O3", q: "Para manter o telefone firme, pode:", options: ["Abaná-lo", "Segurá-lo com um dedo", "Filmar a correr", "Usar as duas mãos, apoiar-se em alguma coisa ou usar um suporte"], answer: 3, why: "Os planos firmes parecem mais profissionais." },
      { objective: "O3", q: "O melhor lugar para gravar alguém a falar é:", options: ["Um lugar calmo, perto de quem fala", "Ao lado de uma ventoinha barulhenta", "Um corredor cheio de gente", "Do outro lado de um ginásio"], answer: 0, why: "Lugares calmos e estar perto dão um som claro." },
      { objective: "O3", q: "Antes de filmar pessoas para o vídeo de um clube da escola, deve:", options: ["Filmar às escondidas", "Pedir autorização e confirmar as regras da escola sobre filmagens", "Só perguntar depois de publicar", "Filmar em lugares privados"], answer: 1, why: "A autorização e as regras da escola vêm primeiro." },
      { objective: "O4", q: "Importar num editor de vídeo quer dizer:", options: ["Publicar o vídeo", "Apagar vídeos", "Trazer os seus vídeos para o editor", "Pôr legendas"], answer: 2, why: "Importar traz os vídeos para dentro do editor para os editar." },
      { objective: "O4", q: "Porque cortar cada plano curto?", options: ["Para usar mais espaço", "Para o vídeo ficar mais longo", "Para esconder as legendas", "Os tempos mortos fazem as pessoas passar para outro vídeo"], answer: 3, why: "Os cortes curtos mantêm a atenção." },
      { objective: "O4", q: "O texto no ecrã deve ser:", options: ["Grande, curto e ficar no ecrã tempo suficiente para se ler", "Pequenino e rápido", "Parágrafos muito longos", "Escondido"], answer: 0, why: "Texto fácil de ler faz passar a sua mensagem." },
      { objective: "O5", q: "Porque pôr legendas?", options: ["São obrigatórias em todos os telefones", "Muitos veem sem som, e ajudam quem é surdo ou ouve mal", "Substituem a edição", "Fazem o ficheiro mais pequeno"], answer: 1, why: "As legendas tornam os vídeos mais claros e acessíveis." },
      { objective: "O5", q: "Segundo o Gabinete de Direitos de Autor dos EUA, os direitos de autor protegem uma obra:", options: ["Só depois de ser registada", "Só durante 1 ano", "Logo que é criada e fixada numa forma que as pessoas podem ver ou ouvir", "Só no caso dos vídeos"], answer: 2, why: "A proteção começa quando a obra é criada e fixada." },
      { objective: "O5", q: "O que pode acontecer se usar um êxito musical sem autorização?", options: ["Nunca acontece nada", "Você ganha dinheiro", "A música fica melhor", "A plataforma pode tirar o som ou remover o seu vídeo"], answer: 3, why: "As plataformas agem contra música usada sem autorização." },
      { objective: "O5", q: "Um amigo diz para pôr no seu vídeo o rosto de um famoso feito por IA, para rir. Você:", options: ["Diz que não; não use o rosto de uma pessoa real sem autorização", "Faz e põe uma indicação", "Faz numa conta privada", "Faz, mas desfoca"], answer: 0, why: "Não use cópias de pessoas reais feitas por IA sem a autorização delas." },
      { objective: "O6", q: "Que pergunta para pedir opiniões é mais útil?", options: ["\"Está perfeito?\"", "\"Soube o que fazer no fim?\"", "\"Gosta de mim?\"", "\"O meu telefone é bonito?\""], answer: 1, why: "Verifica se o apelo à ação funciona." },
      { objective: "O6", q: "Depois de exportar, deve:", options: ["Apagar logo o projeto", "Publicar sem ver", "Ver o ficheiro mais uma vez para verificar o som e as legendas", "Mudar o nome para a sua morada"], answer: 2, why: "A exportação pode ter problemas; verifique antes de partilhar." },
      { objective: "O6", q: "Quando partilha em público, mantenha privado:", options: ["O nome do clube", "A data do evento", "O título do vídeo", "O seu nome completo, a morada da escola e os seus horários"], answer: 3, why: "Os dados pessoais ficam privados na internet." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Guião e storyboard",
        objective: "O2",
        notYet: "Não tem gancho nem apelo à ação, ou não tem storyboard.",
        meets: "Um guião com gancho, cenas e apelo à ação, com as palavras do próprio aluno, e um storyboard que cabe em 30 a 60 segundos.",
        exceeds: "Os dados, como datas e salas, foram verificados, e o storyboard indica os segundos de cada plano."
      },
      {
        name: "Filmagem",
        objective: "O3",
        notYet: "Os planos estão escuros, tremidos ou com mau som, ou alguém foi filmado sem autorização.",
        meets: "Pelo menos quatro planos firmes, com boa luz e som claro, e autorização de todas as pessoas que aparecem.",
        exceeds: "Cada plano foi filmado pelo menos duas vezes e foi escolhida a melhor gravação."
      },
      {
        name: "Edição",
        objective: "O4",
        notYet: "Os vídeos estão fora de ordem ou têm tempos mortos longos.",
        meets: "Os vídeos seguem o storyboard, estão cortados curtos e têm um título e um apelo à ação no final.",
        exceeds: "O texto é fácil de ler e o ritmo faz as pessoas continuarem a ver."
      },
      {
        name: "Legendas, música e indicações",
        objective: "O5",
        notYet: "As legendas têm erros, a música não é permitida ou o conteúdo de IA não está indicado.",
        meets: "Legendas certas, música permitida e uma indicação em tudo o que foi gerado por IA.",
        exceeds: "O aluno sabe dizer de onde veio a música e que regras permitem usá-la."
      },
      {
        name: "Opiniões e partilha segura",
        objective: "O6",
        notYet: "Não foi exportado, ou foi partilhado com dados pessoais.",
        meets: "Opiniões de pelo menos uma pessoa, uma mudança feita, exportado e partilhado com segurança.",
        exceeds: "Anota como a IA foi usada e o que mudou depois das opiniões."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Vídeos usados por um clube, equipa, evento ou causa real em 30 dias",
      "Alunos que fazem um segundo vídeo planeado em 30 dias (inquérito de seguimento)",
      "Alunos que dizem pedir autorização e indicar o conteúdo de IA nos vídeos seguintes"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com câmara",
      "Um editor de vídeo gratuito como o CapCut ou o Canva, usado dentro das suas regras de idade",
      "Um assistente de IA gratuito que o aluno pode usar",
      "Um suporte simples para o telefone ou algo onde o apoiar (opcional)",
      "Cerca de 60 minutos no total, mais o tempo de filmagem"
    ],
    facilitatorNotes: [
      "Antes da aula, confirme as regras da sua escola sobre filmagens e autorizações de imagem, e diga que alunos não podem ser filmados.",
      "Confirme as regras de idade de cada aplicação e envolva os pais ou responsáveis na criação de contas.",
      "Forme equipas de alunos para cada um praticar filmar, aparecer no vídeo e dar opiniões.",
      "Reveja os vídeos quanto a autorizações, música e indicações de IA antes de qualquer publicação pública.",
      "Faça uma sessão de visionamento no grupo e avalie cada vídeo com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
