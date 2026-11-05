"use strict";

// Koach Learn course (Portuguese translation of youth/youth-ai-creativity-learning.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-ai-creativity-learning-pt",
  lang: "pt",
  translationOf: "youth-ai-creativity-learning",
  category: "Youth",
  name: "Ferramentas de IA para a Criatividade e a Aprendizagem",
  skills: "Ter ideias com a IA, Fazer um design com o Canva, Aprender uma nova habilidade com um explicador de IA, Fazer perguntas de prática, Dar crédito e ser original",
  outcome: "usar ferramentas de IA gratuitas para ter ideias para um projeto criativo, fazer um design com ele e aprender sozinho uma nova habilidade com um parceiro de estudo de IA, mantendo o trabalho seu e dando crédito onde a IA ajudou.",
  about: [
    "Este curso é para jovens de cerca de 13 a 18 anos que gostam de criar coisas (cartazes, histórias, batidas de música, ideias de jogos, folhetos de clubes) e que querem aprender mais depressa.",
    "Você vai usar a IA como parceira criativa e como parceira de estudo. Vai ter ideias, fazer um cartaz, aprender algo novo passo a passo e testar-se a si mesmo. Também vai aprender a manter a sua própria voz e a ser honesto sobre o que a IA fez.",
    "Antes de começar: veja a regra de idade de cada ferramenta, siga as regras da sua escola sobre a IA e fale com um pai, uma mãe ou um responsável antes de criar qualquer conta nova. Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\"."
  ],
  finalTask: "Faça um cartaz para um clube ou evento da escola, real ou inventado. Use a IA para ter pelo menos cinco ideias, escolha uma e torne-a sua, faça o design do cartaz no Canva ou no Google Slides e depois acrescente uma pequena nota no fundo a dizer como a IA ajudou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens de cerca de 13 a 18 anos que gostam de criar coisas como cartazes, histórias, batidas de música, ideias de jogos e folhetos de clubes, e que querem aprender mais depressa.",
    startingPoint: "Usam telefones e computadores da escola e talvez já tenham experimentado um assistente de conversa ou uma aplicação de design. Poucos usam a IA de propósito para ter ideias, estudar passo a passo ou testar-se, e muitos não sabem bem o que conta como uso honesto da IA.",
    gap: "Os jovens podem usar a IA para sair de um bloqueio, fazer designs mais depressa e estudar melhor, mas usá-la para copiar trabalhos salta a aprendizagem e pode ir contra as regras da escola. Precisam de usar a IA como parceira criativa e de estudo, mantendo a sua própria voz e dando crédito.",
    constraints: [
      "Limites de idade: as ferramentas e as funções de imagens com IA têm as suas próprias regras de idade; um pai, uma mãe ou um responsável aprova as contas novas",
      "As regras sobre a IA e sobre imagens feitas com IA mudam de escola para escola, de turma para turma e de concurso para concurso",
      "Aparelhos: um telefone, um computador da escola ou da biblioteca; só planos gratuitos",
      "Privacidade: nenhuma informação privada nos pedidos nem nas notas coladas",
      "Lições curtas e palavras simples para diferentes níveis de leitura"
    ],
    prerequisites: "O curso \"O que é a IA? (para Jovens)\" é um bom primeiro curso, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um projeto criativo", action: "usar um assistente de IA para fazer uma lista de muitas ideias variadas e depois mudá-las ou juntá-las numa ideia sua", standard: "tendo pelo menos cinco ideias e tornando uma delas sua" },
    { id: "O2", condition: "Usando uma ferramenta de design gratuita como o Canva ou o Google Slides", action: "fazer um cartaz simples a partir de um modelo, depois de ver a regra de idade da ferramenta e as definições da escola", standard: "com um título grande e a data, a hora e o local bem claros" },
    { id: "O3", condition: "Em qualquer trabalho em que a IA ajudou", action: "escrever uma nota de crédito que diga o que a IA fez e o que você fez, e acrescentar algo que só você poderia fazer", standard: "seguindo as regras da turma ou do concurso sobre a IA e sem usar a arte de outra pessoa sem autorização" },
    { id: "O4", condition: "Com uma pequena habilidade que quer aprender", action: "pedir a um assistente de IA que o ensine em pequenos passos, ao seu nível, e que o teste depois de cada um", standard: "dizendo a habilidade, o seu nível e o pedido de um passo de cada vez" },
    { id: "O5", condition: "Com as suas próprias notas das aulas", action: "criar perguntas de prática ou cartões de estudo com a IA, responder primeiro e verificar as respostas", standard: "sem nenhuma informação privada e com cada resposta verificada nas suas notas ou no livro" },
    { id: "O6", condition: "Antes e depois de usar a IA nos trabalhos da escola", action: "decidir se um uso da IA o ajuda a aprender ou salta a aprendizagem, usando o teste de amanhã e as regras do seu professor", standard: "perguntando primeiro ao professor sempre que não tiver a certeza" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A IA como sua parceira criativa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ter ideias com a IA",
          minutes: 5,
          goal: "Usar um assistente de IA para ter muitas ideias e depois escolher e melhorar a melhor.",
          text: [
            "Fazer um brainstorming (uma chuva de ideias) é ter muitas ideias depressa, sem as julgar ainda. Os assistentes de IA como o ChatGPT, o Microsoft Copilot e o Google Gemini são bons nisto porque conseguem fazer uma lista de muitas ideias em segundos.",
            "Peça muitas ideias e ideias diferentes: \"Dê-me 10 ideias diferentes para um cartaz do clube de robótica da nossa escola. Faça umas engraçadas, umas sérias e umas ousadas.\" Depois quem escolhe é você. Os melhores resultados vêm quando mistura as ideias da IA com as suas.",
            "Trate as ideias da IA como um ponto de partida. Mude-as, junte duas ou use uma para ter uma ideia nova. Assim a ideia final é mesmo sua."
          ],
          steps: ["Diga o que está a fazer e para quem é.", "Peça muitas ideias com estilos diferentes.", "Marque as duas ou três de que gosta.", "Mude-as ou junte-as numa ideia sua."],
          words: [["Brainstorming (chuva de ideias)", "ter muitas ideias depressa antes de escolher uma."]],
          slides: [
            { title: "Chuva de ideias = muitas ideias, depressa", bullets: ["Não julgue as ideias ainda", "A IA consegue fazer uma lista de 10 ideias em segundos"] },
            { title: "Peça variedade", bullets: ["Diga o que está a fazer e para quem", "Peça ideias engraçadas, sérias e ousadas"] },
            { title: "Torne-a sua", bullets: ["Escolha duas ou três de que gosta", "Mude-as ou junte-as", "Acrescente o seu toque"] }
          ],
          tryIt: "Escolha um projeto: um cartaz de clube, uma história curta, um nível de um jogo ou o tema de uma canção. Peça 10 ideias diferentes a um assistente de IA que tem autorização para usar. Escolha as suas duas favoritas e escreva como as mudaria.",
          youCanNow: "ter ideias com a IA e transformar as ideias dela em ideias suas.",
          quickCheck: [
            { objective: "O1", q: "Qual é a regra principal numa chuva de ideias?", options: ["Escolher a primeira ideia", "Usar só ideias da IA", "Julgar cada ideia logo", "Ter muitas ideias antes de as julgar"], answer: 3, why: "Uma chuva de ideias é ter muitas ideias depressa, sem as julgar ainda." },
            { objective: "O1", q: "A IA deu-lhe 10 ideias para um cartaz e duas estão perto do que quer. O que faz?", options: ["Copia a primeira tal como está", "Junta-as ou muda-as e acrescenta o seu toque", "Pede mais 100 e nunca escolhe", "Desiste do cartaz"], answer: 1, why: "Misturar as ideias da IA com as suas torna a ideia final mesmo sua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer designs com ferramentas de IA gratuitas",
          minutes: 5,
          goal: "Fazer um cartaz ou uma imagem simples com uma ferramenta de design gratuita.",
          text: [
            "O Canva é uma ferramenta de design com um plano gratuito que funciona num navegador de internet ou numa aplicação. Algumas escolas também dão acesso aos alunos com uma conta da escola, por isso pergunte ao seu professor. O Google Slides e o Microsoft PowerPoint também servem para cartazes simples.",
            "Comece a partir de um modelo (um design já feito) e depois mude as palavras, as cores e as imagens. Algumas ferramentas conseguem fazer uma imagem a partir das palavras que escreve. Estas funções de imagens com IA podem ter as suas próprias regras de idade ou estar desligadas nas contas da escola, por isso verifique antes de as usar.",
            "Um bom design é simples: um título grande, poucas linhas curtas, cores claras e fáceis de ler, e os dados importantes, como a data, a hora e o local."
          ],
          steps: ["Abra o Canva, o Google Slides ou o PowerPoint (use a conta da escola se a sua escola lhe der uma).", "Escolha um modelo de cartaz.", "Mude o título, os detalhes e as cores.", "Acrescente ou crie uma imagem.", "Verifique se a data, a hora e o local são fáceis de ler."],
          words: [["Modelo", "um design já feito que você pode mudar."], ["Gerador de imagens com IA", "uma ferramenta que faz uma imagem a partir das palavras que escreve."]],
          slides: [
            { title: "Ferramentas gratuitas para fazer designs", bullets: ["Canva (plano gratuito; pergunte se a escola dá acesso)", "Google Slides", "Microsoft PowerPoint"] },
            { title: "Comece a partir de um modelo", bullets: ["Mude as palavras, as cores e as imagens", "As funções de imagens com IA podem ter regras de idade próprias"] },
            { title: "O design simples ganha", bullets: ["Um título grande", "Poucas linhas curtas", "Cores fáceis de ler", "Data, hora e local"] }
          ],
          tryIt: "Abra uma ferramenta de design gratuita e escolha um modelo de cartaz. Ponha um título e a data, a hora e o local da sua ideia da Lição 1. Guarde-o.",
          youCanNow: "fazer um cartaz simples com uma ferramenta de design gratuita.",
          quickCheck: [
            { objective: "O2", q: "O que torna um cartaz fácil de ler?", options: ["Um título grande, poucas linhas curtas e cores claras", "Muito texto pequeno", "Dez tipos de letra diferentes", "Texto escuro num fundo escuro"], answer: 0, why: "Um bom design é simples, com um título grande e os dados principais fáceis de ver." },
            { objective: "O2", q: "Quer usar uma função de imagens com IA numa ferramenta de design na sua conta da escola. O que faz primeiro?", options: ["Usa a conta de um amigo", "Cria uma conta nova sem dizer a ninguém", "Vê a regra de idade e se a sua escola autoriza", "Desiste do cartaz"], answer: 2, why: "As funções de imagens com IA podem ter as suas próprias regras de idade ou estar desligadas nas contas da escola." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Manter o seu trabalho original e dar crédito",
          minutes: 4,
          goal: "Dizer com honestidade como a IA ajudou e manter a sua própria voz no trabalho.",
          text: [
            "Se a IA o ajudou a fazer alguma coisa, diga-o. Uma nota curta como \"Ideias tiradas com o Microsoft Copilot; design e palavras feitos por mim\" é honesta e mostra que sabe usar a ferramenta.",
            "Não use a arte, a música, os logótipos ou as personagens de outras pessoas sem autorização, e não peça à IA para copiar exatamente o trabalho de um artista real. Algumas escolas e concursos não aceitam imagens feitas com IA, por isso leia as regras.",
            "A sua voz conta. Acrescente algo que só você poderia acrescentar: uma piada do seu clube, uma fotografia que tirou, um desenho ou as suas próprias palavras."
          ],
          steps: ["Escreva o que a IA fez e o que você fez.", "Acrescente uma nota de crédito curta.", "Leia as regras do concurso ou da turma sobre a IA.", "Acrescente uma coisa que só você poderia fazer."],
          words: [["Crédito", "dizer quem ou o que ajudou a fazer alguma coisa."], ["Direitos de autor", "a lei que protege o trabalho criativo das pessoas, como a arte, a música e os textos."]],
          slides: [
            { title: "Diga como a IA ajudou", bullets: ["\"Ideias tiradas com a IA; design feito por mim\"", "É honesto e mostra habilidade"] },
            { title: "Respeite os outros criadores", bullets: ["Não copie arte, logótipos nem personagens", "Alguns concursos proíbem imagens com IA: leia as regras"] },
            { title: "Acrescente a sua voz", bullets: ["Uma fotografia que tirou", "Um desenho ou as suas próprias palavras", "Algo que só você poderia acrescentar"] }
          ],
          tryIt: "Acrescente uma nota de crédito de uma linha ao cartaz que começou. Depois acrescente uma coisa que só você poderia acrescentar, como uma fotografia sua ou um slogan seu.",
          youCanNow: "dar crédito honesto pela ajuda da IA e manter a sua própria voz no seu trabalho.",
          quickCheck: [
            { objective: "O3", q: "Porque acrescentar uma nota de crédito quando a IA ajudou?", options: ["Para o cartaz ficar maior", "Os concursos exigem imagens com IA", "Esconde o que você fez", "É honesto e mostra como usou a ferramenta"], answer: 3, why: "Uma nota de crédito curta é honesta sobre o que a IA fez e o que você fez." },
            { objective: "O3", q: "O seu cartaz parece muito com todos os outros cartazes feitos com IA. Como acrescenta a sua voz?", options: ["Acrescenta uma fotografia, um desenho, um slogan ou uma piada do seu clube", "Pede à IA para copiar exatamente um artista famoso", "Usa um logótipo famoso", "Tira o seu nome"], answer: 0, why: "Acrescentar algo que só você poderia fazer mantém o trabalho seu." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A IA como sua parceira criativa",
        questions: [
          { objective: "O1", q: "O que é uma chuva de ideias?", options: ["Copiar o trabalho de alguém", "Ter muitas ideias antes de escolher", "Arranjar um computador avariado", "Apagar ficheiros antigos"], answer: 1, why: "Uma chuva de ideias é ter muitas ideias depressa e depois escolher." },
          { objective: "O1", q: "Que pedido vai dar a melhor chuva de ideias?", options: ["\"cartaz\"", "\"faça\"", "\"ideias\"", "\"Dê-me 10 ideias diferentes para um cartaz do clube de robótica: umas engraçadas, umas sérias\""], answer: 3, why: "Diz o quê, para quem, quantas e com que estilos." },
          { objective: "O2", q: "O que é um modelo?", options: ["Um design já feito que você pode mudar", "Uma palavra-passe", "Um tipo de vírus", "Uma regra da escola"], answer: 0, why: "Os modelos dão-lhe um design inicial para editar." },
          { objective: "O3", q: "Um concurso diz que não aceita imagens feitas com IA. Você:", options: ["Usa uma na mesma", "Esconde que usou IA", "Segue a regra e faz ou usa uma imagem sua", "Não lê as regras"], answer: 2, why: "Seguir as regras do concurso mantém a sua participação honesta e aceite." },
          { objective: "O3", q: "Qual é uma boa nota de crédito?", options: ["Nada", "\"Fiz tudo sozinho\" quando a IA ajudou", "\"Ideias tiradas com a IA; design e palavras feitos por mim\"", "\"Feito por um robô\""], answer: 2, why: "Diz com honestidade o que a IA fez e o que você fez." }
        ]
      }
    },
    {
      name: "Capítulo 2: A IA como sua parceira de estudo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aprender uma nova habilidade passo a passo",
          minutes: 5,
          goal: "Pedir à IA que lhe ensine uma nova habilidade em pequenos passos, ao seu nível.",
          text: [
            "A IA pode fazer de explicador paciente. Diga-lhe o que quer aprender, o que já sabe, e peça-lhe que vá um passo de cada vez. Por exemplo: \"Quero aprender a ler tablaturas de guitarra. Ainda não sei nada. Ensine-me em 5 pequenos passos e espere por mim depois de cada um.\"",
            "Peça-lhe para ver se percebeu: \"Faça-me uma pergunta antes de avançar.\" Se alguma coisa for confusa, diga: \"Explique isso como se eu tivesse 12 anos\" ou \"Dê-me um exemplo do basquetebol.\"",
            "Sites de aprendizagem gratuitos como a Khan Academy têm lições e exercícios que pode usar junto com um assistente de IA. A sua escola pode ter ferramentas aprovadas, por isso pergunte ao seu professor quais deve usar."
          ],
          steps: ["Diga a habilidade e o seu nível.", "Peça pequenos passos, um de cada vez.", "Peça-lhe para o testar antes de avançar.", "Peça exemplos de coisas de que gosta."],
          words: [["Explicador", "alguém (ou uma ferramenta) que o ajuda a aprender a sós, só com você."]],
          slides: [
            { title: "A IA como explicador", bullets: ["Diga o que quer aprender", "Diga o que já sabe", "Peça um passo de cada vez"] },
            { title: "Faça-a testá-lo", bullets: ["\"Faça-me uma pergunta antes de avançar\"", "\"Explique isso como se eu tivesse 12 anos\""] },
            { title: "Use exemplos de que gosta", bullets: ["Desporto, jogos, música", "Pergunte ao professor quais as ferramentas aprovadas"] }
          ],
          tryIt: "Escolha uma pequena habilidade que quer aprender esta semana (um acorde, um método de matemática, uma técnica de desenho, uma palavra numa língua nova). Peça a um assistente de IA que o ensine em pequenos passos e que o teste depois de cada um.",
          youCanNow: "usar a IA como um explicador passo a passo ao seu próprio nível.",
          quickCheck: [
            { objective: "O4", q: "O que deve ter um pedido para aprender uma nova habilidade?", options: ["Só a palavra \"ensine\"", "A habilidade, o seu nível e o pedido de ir um passo de cada vez", "A sua palavra-passe", "A resposta que quer"], answer: 1, why: "Dizer à IA a habilidade, o seu nível e que vá passo a passo faz com que ela aja como um explicador paciente." },
            { objective: "O4", q: "A explicação da IA sobre um método de matemática confunde-o. O que envia?", options: ["Nada; fecha a aplicação", "\"Faça o meu trabalho de casa.\"", "\"Explique isso como se eu tivesse 12 anos, com um exemplo do basquetebol.\"", "A mesma pergunta outra vez"], answer: 2, why: "Pedir palavras mais simples ou um exemplo de que gosta ajuda-o a perceber." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer perguntas de prática e cartões de estudo",
          minutes: 5,
          goal: "Transformar as suas notas em perguntas de prática e testar-se.",
          text: [
            "Testar-se a si mesmo é uma das melhores maneiras de lembrar as coisas. A IA consegue transformar as suas próprias notas em perguntas de teste em segundos.",
            "Cole ou escreva as suas notas das aulas (sem informações privadas) e peça: \"Faça 8 perguntas de prática a partir destas notas. Não mostre as respostas até eu responder.\" Depois responda você mesmo antes de olhar.",
            "Também pode pedir cartões de estudo: uma palavra de um lado e o significado do outro. Ferramentas gratuitas como o Google Docs ou cartões de papel servem bem. Verifique as respostas nas suas notas ou no livro, porque a IA também se pode enganar."
          ],
          steps: ["Junte as suas notas sobre um tema.", "Peça à IA perguntas de prática, com as respostas escondidas.", "Responda você primeiro.", "Verifique as respostas nas suas notas ou no livro."],
          words: [["Cartão de estudo", "um cartão com uma pergunta ou palavra de um lado e a resposta do outro."], ["Autoteste", "fazer perguntas a si mesmo para o ajudar a lembrar."]],
          slides: [
            { title: "Teste-se para lembrar", bullets: ["Testar-se ajuda mais do que reler", "A IA pode fazer perguntas a partir das suas notas"] },
            { title: "Peça da maneira certa", bullets: ["\"Faça 8 perguntas a partir destas notas\"", "\"Esconda as respostas até eu responder\""] },
            { title: "Verifique as respostas", bullets: ["Use as suas notas ou o livro", "A IA também se pode enganar"] }
          ],
          tryIt: "Pegue nas notas de uma aula desta semana. Peça à IA 5 perguntas de prática com as respostas escondidas. Responda-lhes e depois verifique-se com as suas notas.",
          youCanNow: "transformar notas em perguntas de prática e testar-se a si mesmo.",
          quickCheck: [
            { objective: "O5", q: "Porque pedir à IA que esconda as respostas quando faz perguntas de prática?", options: ["Para poupar papel", "Para a IA se corrigir a si mesma", "Porque as respostas são privadas", "Para você responder primeiro e se testar mesmo"], answer: 3, why: "Testar-se antes de ver a resposta ajuda-o a lembrar." },
            { objective: "O5", q: "A resposta da IA a uma pergunta de prática não é igual às suas notas. O que faz?", options: ["Verifica as suas notas ou o livro e confia neles", "Confia sempre na IA", "Apaga as suas notas", "Salta esse tema"], answer: 0, why: "A IA também se pode enganar, por isso verifique nas suas notas ou no livro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar a IA para aprender, não para saltar a aprendizagem",
          minutes: 4,
          goal: "Decidir quando a ajuda da IA é aprender e quando é saltar o trabalho.",
          text: [
            "Há uma diferença entre a IA ajudá-lo a aprender e a IA fazer o trabalho por você. Se lhe pede para explicar, para o testar ou para dar comentários, você está a aprender. Se lhe pede para escrever a sua redação ou resolver o seu trabalho de casa para você copiar, está a saltar a aprendizagem, e isso pode ir contra as regras da escola.",
            "Um bom teste: depois de usar a IA, conseguiria fazer a tarefa sozinho amanhã? Se sim, a IA ajudou-o a aprender. Se não, tente outra vez de uma maneira em que seja você a pensar.",
            "Siga sempre as regras do seu professor. Se não tiver a certeza de que algo é permitido, pergunte antes de usar a IA e esteja pronto para dizer como a usou."
          ],
          steps: ["Peça à IA para explicar, testar ou dar comentários, não para fazer o trabalho.", "Verifique: conseguiria fazer isto sozinho amanhã?", "Siga as regras do seu professor sobre a IA.", "Esteja pronto para dizer como usou a IA."],
          words: [["Comentários (feedback)", "observações que o ajudam a melhorar o seu próprio trabalho."]],
          slides: [
            { title: "Aprender ou saltar", bullets: ["Aprender: explicar, testar, comentários", "Saltar: a IA escreve e você copia"] },
            { title: "O teste de amanhã", bullets: ["Conseguiria fazê-lo sozinho amanhã?", "Se não, pense mais você mesmo"] },
            { title: "Siga as regras", bullets: ["Pergunte ao professor quando tiver dúvidas", "Esteja pronto para dizer como usou a IA"] }
          ],
          tryIt: "Tarefa final: faça o cartaz do seu clube ou evento. Tenha pelo menos cinco ideias com a IA, torne uma delas sua, faça o design no Canva ou no Google Slides e acrescente uma nota de crédito a dizer como a IA ajudou.",
          youCanNow: "usar a IA para a criatividade e a aprendizagem de uma maneira honesta e que mantém a habilidade sua.",
          quickCheck: [
            { objective: "O6", q: "O que é usar a IA para aprender?", options: ["Copiar uma redação da IA", "Pedir à IA que explique um passo que não percebeu e depois tentar você mesmo", "Pôr a IA a resolver todos os exercícios de casa", "Colar respostas da IA num teste"], answer: 1, why: "Explicações, testes e comentários ajudam-no a aprender; copiar salta a aprendizagem." },
            { objective: "O6", q: "Depois de a IA ajudar, não conseguiria fazer a tarefa sozinho amanhã. O que faz?", options: ["Entrega o trabalho da IA", "Deixa de usar a IA para sempre", "Tenta outra vez para pensar mais você mesmo", "Esconde que usou a IA"], answer: 2, why: "O teste de amanhã mostra que foi a IA a pensar, por isso refaça de uma maneira que o faça aprender." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: A IA como sua parceira de estudo",
        questions: [
          { objective: "O4", q: "Que pedido faz a IA agir como um bom explicador?", options: ["\"Ensine-me a ler tablaturas de guitarra em 5 pequenos passos e teste-me depois de cada um\"", "\"Faça o meu trabalho de casa\"", "\"Responda a tudo\"", "\"tablaturas\""], answer: 0, why: "Define o nível, os pequenos passos e as verificações." },
          { objective: "O5", q: "Porque é útil testar-se a si mesmo?", options: ["Faz perder tempo", "Os professores proíbem", "Apaga as notas", "Ajuda-o a lembrar"], answer: 3, why: "Testar-se é uma das melhores maneiras de lembrar." },
          { objective: "O5", q: "A IA fez perguntas de prática a partir das suas notas. Antes de confiar nas respostas, deve:", options: ["Partilhá-las na internet", "Verificá-las nas suas notas ou no livro", "Apagar as suas notas", "Perguntar a um desconhecido"], answer: 1, why: "A IA também se pode enganar, por isso verifique." },
          { objective: "O6", q: "Que uso da IA é saltar a aprendizagem?", options: ["Pedir-lhe que escreva a sua redação para você copiar", "Pedir-lhe que explique um passo", "Pedir-lhe que o teste", "Pedir comentários sobre o seu rascunho"], answer: 0, why: "Copiar o trabalho da IA quer dizer que salta a aprendizagem e pode ir contra as regras." },
          { objective: "O6", q: "O que é o \"teste de amanhã\"?", options: ["Fazer o trabalho de casa amanhã", "Fazer um teste amanhã", "Perguntar-se se conseguiria fazer a tarefa sozinho amanhã", "Desligar a IA amanhã"], answer: 2, why: "Se conseguiria fazê-la sozinho, a IA ajudou-o a aprender." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ferramentas de IA para a Criatividade e a Aprendizagem",
    questions: [
      { objective: "O1", q: "Quando faz uma chuva de ideias com a IA, primeiro deve:", options: ["Julgar cada ideia", "Pedir muitas ideias diferentes", "Escolher a primeira", "Parar depois de uma ideia"], answer: 1, why: "Uma chuva de ideias é primeiro ter muitas ideias." },
      { objective: "O1", q: "A melhor maneira de tornar sua uma ideia da IA é:", options: ["Copiá-la tal como está", "Pedir a um amigo para escolher", "Nunca usar ideias da IA", "Mudar ou juntar ideias e acrescentar o seu toque"], answer: 3, why: "Mudar e misturar ideias torna o resultado seu." },
      { objective: "O1", q: "Pedir ideias \"engraçadas, sérias e ousadas\" dá-lhe:", options: ["Um vírus", "Menos ideias", "Uma palavra-passe", "Variedade"], answer: 3, why: "Estilos diferentes dão-lhe mais por onde escolher." },
      { objective: "O2", q: "O Canva é:", options: ["Uma consola de jogos", "Uma ferramenta de design com um plano gratuito", "Uma regra da escola", "Só uma aplicação de música"], answer: 1, why: "O Canva é uma ferramenta de design com um plano gratuito." },
      { objective: "O2", q: "Antes de usar uma função de imagens com IA, deve:", options: ["Carregar uma fotografia de um amigo", "Partilhar a sua palavra-passe", "Ver a regra de idade e as definições da sua escola", "Ignorar todas as regras"], answer: 2, why: "As funções de imagens com IA podem ter as suas próprias regras de idade." },
      { objective: "O2", q: "Um bom cartaz tem:", options: ["Um título grande e a data, a hora e o local claros", "Muito texto minúsculo", "Todas as cores ao mesmo tempo", "Nenhum detalhe"], answer: 0, why: "O design simples é o mais fácil de ler." },
      { objective: "O3", q: "Um crédito honesto pela ajuda da IA é assim:", options: ["Esconder que usou IA", "\"Ideias tiradas com a IA; design feito por mim\"", "Dizer que um robô fez tudo", "Nada"], answer: 1, why: "Diz a verdade sobre quem fez o quê." },
      { objective: "O3", q: "Quer usar uma personagem de desenhos animados famosa num cartaz. Deve:", options: ["Usá-la sem pedir", "Pedir à IA para a copiar exatamente", "Tirar a nota de crédito", "Fazer antes uma imagem sua, ou pedir autorização"], answer: 3, why: "As personagens e a arte estão protegidas pelos direitos de autor." },
      { objective: "O3", q: "Os direitos de autor protegem:", options: ["O trabalho criativo das pessoas, como a arte e a música", "A bateria do seu telefone", "O almoço da escola", "O Wi-Fi"], answer: 0, why: "Os direitos de autor protegem o trabalho dos criadores." },
      { objective: "O4", q: "Para aprender uma nova habilidade com a IA, deve dizer-lhe:", options: ["Nada", "A sua palavra-passe", "A habilidade, o seu nível e que vá um passo de cada vez", "Que salte para o fim"], answer: 2, why: "O nível e os pequenos passos fazem da IA um bom explicador." },
      { objective: "O4", q: "Se uma explicação da IA for confusa, um bom pedido de seguimento é:", options: ["\"Esqueça\"", "\"Dê-me a minha nota\"", "\"Explique isso como se eu tivesse 12 anos\"", "\"Escreva o meu teste\""], answer: 2, why: "Pedir palavras mais simples ajuda-o a perceber." },
      { objective: "O4", q: "Quem lhe pode dizer quais as ferramentas de IA aprovadas para a escola?", options: ["O seu professor", "Um anúncio que aparece no ecrã", "Um desconhecido na internet", "Ninguém"], answer: 0, why: "Os professores conhecem as ferramentas aprovadas e as regras da escola." },
      { objective: "O5", q: "O que deve deixar de fora quando cola notas na IA?", options: ["As palavras do tema", "As datas importantes do tema", "As palavras do vocabulário", "Informações privadas como a sua morada"], answer: 3, why: "Nunca ponha informações privadas nas ferramentas de IA." },
      { objective: "O5", q: "Porque pedir à IA que esconda as respostas das perguntas de prática?", options: ["Para poupar papel", "Para você responder primeiro e se testar mesmo", "É obrigatório por lei", "Para enganar o professor"], answer: 1, why: "Responder primeiro é um verdadeiro autoteste." },
      { objective: "O5", q: "Um cartão de estudo tem:", options: ["Uma pergunta ou palavra de um lado e a resposta do outro", "Só imagens", "Uma palavra-passe", "Só notas de música"], answer: 0, why: "É assim que funcionam os cartões de estudo." },
      { objective: "O5", q: "Depois de a IA fazer respostas de prática, deve:", options: ["Confiar totalmente nelas", "Publicá-las na internet", "Verificá-las nas notas ou num livro", "Apagá-las"], answer: 2, why: "As respostas da IA podem estar erradas." },
      { objective: "O6", q: "O que é usar a IA para aprender?", options: ["Copiar uma redação da IA", "Pedir à IA comentários sobre o seu próprio rascunho", "Pôr a IA a fazer o seu teste", "Colar respostas da IA no trabalho de casa"], answer: 1, why: "Comentários sobre o seu próprio trabalho ajudam-no a melhorar." },
      { objective: "O6", q: "Não tem a certeza se a IA é permitida num projeto. Deve:", options: ["Usá-la e esperar que corra bem", "Usá-la em segredo", "Perguntar à IA se é permitido", "Perguntar primeiro ao seu professor"], answer: 3, why: "É o seu professor que decide as regras da turma." },
      { objective: "O2", q: "Antes de criar uma conta nova numa aplicação criativa, deve:", options: ["Usar uma idade falsa", "Dar-lhe a sua palavra-passe da escola", "Não ler os termos", "Falar com um pai, uma mãe ou um responsável e ver a regra de idade"], answer: 3, why: "As regras de idade e a autorização de um pai, mãe ou responsável vêm primeiro." },
      { objective: "O6", q: "Depois de usar a IA, não conseguiria fazer a tarefa sozinho amanhã. Isto quer dizer:", options: ["Aprendeu tudo", "Foi a IA a pensar; tente outra vez para pensar mais você mesmo", "A IA está avariada", "Deve deixar a escola"], answer: 1, why: "O teste de amanhã mostra se aprendeu." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      3,
      6,
      7,
      9,
      13,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Chuva de ideias",
        objective: "O1",
        notYet: "Menos de cinco ideias, ou a primeira ideia da IA foi usada tal como estava.",
        meets: "Pelo menos cinco ideias, com uma mudada ou juntada numa ideia própria.",
        exceeds: "Sabe mostrar que ideias foram juntadas e porque escolheu aquela."
      },
      {
        name: "Design do cartaz",
        objective: "O2",
        notYet: "O título ou a data, a hora e o local faltam ou são difíceis de ler.",
        meets: "Um título grande, poucas linhas curtas, cores claras, e a data, a hora e o local fáceis de ler.",
        exceeds: "O design combina com o clube ou o evento, e um colega consegue lê-lo do outro lado da sala."
      },
      {
        name: "Voz própria",
        objective: "O3",
        notYet: "Nada no cartaz é do próprio aluno, ou usa a arte ou o logótipo de outra pessoa.",
        meets: "Tem uma coisa que só o aluno poderia acrescentar, como uma fotografia, um desenho ou um slogan.",
        exceeds: "A maior parte das palavras e das escolhas são claramente do próprio aluno."
      },
      {
        name: "Nota de crédito",
        objective: "O3",
        notYet: "Não há nota, ou a nota esconde como a IA ajudou.",
        meets: "Uma nota curta diz o que a IA fez e o que o aluno fez.",
        exceeds: "A nota é precisa, por exemplo diz que ferramenta deu as ideias."
      },
      {
        name: "Seguiu as regras",
        objective: "O6",
        notYet: "Usou uma ferramenta ou função contra a sua regra de idade, as regras da escola ou as regras do concurso.",
        meets: "Todas as ferramentas e funções usadas são permitidas para a idade e a escola do aluno.",
        exceeds: "Sabe explicar que regras verificou e onde."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem, no inquérito de seguimento de 30 dias, ter usado a IA para se testarem ou aprenderem uma habilidade",
      "Cartazes ou projetos feitos no curso que são mesmo usados por um clube, um evento ou uma turma",
      "Alunos que começam outro curso para jovens da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, um computador da escola ou da biblioteca com internet",
      "Um assistente de IA gratuito que o aluno tem autorização para usar, e o Canva, o Google Slides ou o PowerPoint",
      "Notas das aulas de uma disciplina para as lições de estudo",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes da aula, veja as regras de idade de cada ferramenta e de cada função de imagens com IA, e use as contas da escola quando a escola as der.",
      "No início, partilhe as regras da sua escola ou do seu programa sobre a IA, incluindo se as imagens feitas com IA são permitidas.",
      "Lembre aos alunos que não colem informações privadas quando transformam as notas em perguntas de prática.",
      "Faça uma pequena exposição de cartazes em que os alunos explicam a sua nota de crédito e a parte que é deles.",
      "Avalie o cartaz com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
