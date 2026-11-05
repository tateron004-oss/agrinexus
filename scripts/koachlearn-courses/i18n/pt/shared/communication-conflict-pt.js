"use strict";

// Koach Learn course (Portuguese translation of shared/communication-conflict.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "communication-conflict-pt",
  lang: "pt",
  translationOf: "communication-conflict",
  category: "Athletes",
  name: "Comunicação e Resolução de Conflitos",
  skills: "Escuta ativa, Usar frases com \"Eu\", Começar uma conversa difícil, Acalmar um momento tenso, Chegar a um acordo justo",
  outcome: "ter uma conversa calma e honesta sobre um desacordo real: escutar até a outra pessoa se sentir ouvida, dizer o que precisa sem culpar ninguém, acalmar as coisas se aquecerem e combinar um próximo passo justo que os dois escrevem.",
  about: [
    "Os desacordos acontecem em todo o lado: numa equipa, no trabalho, em casa, com um sócio, um cliente, um senhorio ou um voluntário. Quem lida bem com eles não é quem nunca discute. É quem sabe escutar, falar e encontrar um caminho para a frente.",
    "Este curso é para todos: atletas e treinadores, trabalhadores e chefes, donos de negócios, funcionários e voluntários de organizações sem fins lucrativos, antigos militares, jovens e pessoas que estão a reconstruir a vida depois da prisão. Os exemplos vêm de balneários, obras, lojas, escritórios e da mesa da cozinha.",
    "Você vai praticar cinco habilidades: escuta ativa, frases com \"Eu\", começar uma conversa difícil, acalmar um momento tenso e chegar a um acordo justo. Cada lição dura cerca de cinco minutos e termina com uma pequena prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escolha um desacordo real da sua vida (pode ser pequeno). Planeie a conversa no papel e depois tenha-a, ou ensaie-a com um amigo: repita com as suas palavras o que a outra pessoa diz, use uma frase com \"Eu\", pergunte do que ela precisa e termine com um acordo escrito que diga quem faz o quê e até quando.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Qualquer pessoa que enfrenta desacordos: atletas e treinadores, trabalhadores e chefes, donos de negócios, funcionários e voluntários de organizações sem fins lucrativos, antigos militares, jovens e pessoas que estão a reconstruir a vida depois da prisão.",
    startingPoint: "Falam com pessoas todos os dias e já lidaram com alguns desacordos, mas muitas vezes evitam conversas difíceis, culpam os outros, exaltam-se ou saem sem um plano claro.",
    gap: "Os conflitos por resolver prejudicam equipas, empregos, negócios e famílias. Os alunos precisam de habilidades práticas para escutar, falar sem culpar, acalmar as coisas e combinar um próximo passo justo, para que os desacordos acabem em soluções e não em estragos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "A prática usa desacordos reais mas pequenos, ou ensaios com um amigo",
      "Segurança: se um conflito envolve perigo, ameaças ou assédio, os alunos saem e pedem ajuda ou vão a um chefe ou aos recursos humanos",
      "Privacidade: os alunos não têm de contar os detalhes dos seus próprios conflitos",
      "Tempo: lições de cerca de cinco minutos com práticas curtas"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Numa conversa real", action: "repetir com as suas palavras o que a outra pessoa disse e fazer uma pergunta aberta", standard: "até ela concordar que você a entendeu" },
    { id: "O2", condition: "Com uma frase que culpa alguém", action: "reescrevê-la como uma frase com \"Eu\" e um pedido claro", standard: "usando o modelo eu sinto, quando, porque, podemos" },
    { id: "O3", condition: "Para uma conversa que tem adiado", action: "planear o objetivo, a hora, o lugar e a frase de abertura de uma conversa difícil", standard: "com uma frase de abertura que consegue dizer em voz alta com calma" },
    { id: "O4", condition: "Quando uma conversa aquece", action: "acalmar-se a si e à outra pessoa com respiração lenta, palavras calmas ou uma pausa com hora marcada", standard: "sem levantar a voz nem dizer \"acalme-se\"" },
    { id: "O5", condition: "Com um desacordo", action: "fazer a lista da posição e do interesse de cada lado e de três opções que possam servir aos dois", standard: "antes de julgar qualquer opção" },
    { id: "O6", condition: "No fim de uma conversa", action: "escrever um acordo que diga quem faz o quê, até quando e como vão verificar se está a funcionar", standard: "com todas as partes escritas e partilhadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escutar e falar com clareza",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escuta ativa: fazer as pessoas sentirem-se ouvidas",
          minutes: 5,
          goal: "Escutar alguém e repetir com as suas palavras o que disse, para que se sinta entendido.",
          text: [
            "A maioria das discussões piora porque cada pessoa está ocupada a planear o que vai dizer a seguir. Escuta ativa quer dizer pôr isso de lado e tentar mesmo entender primeiro a outra pessoa.",
            "Tem quatro partes. Dê atenção total: pouse o telefone e olhe para a pessoa. Deixe-a terminar sem interromper. Repita com as suas palavras o que ouviu, por exemplo \"Então sentiu-se posto de lado quando o horário mudou sem aviso.\" Depois faça uma pergunta aberta, que não se responde com sim ou não, como \"O que o teria ajudado?\"",
            "Repetir o que ouviu não é concordar. Só mostra que entendeu. Quando as pessoas se sentem ouvidas, normalmente acalmam-se e começam também a escutar você."
          ],
          steps: ["Guarde o telefone e fique de frente para a pessoa.", "Deixe-a terminar. Não interrompa nem tente resolver ainda.", "Repita com as suas palavras: \"Então o que estou a ouvir é...\"", "Faça uma pergunta aberta: \"O que ajudaria?\" ou \"Conte-me mais sobre...\"", "Confirme: \"Entendi bem?\""],
          words: [["Escuta ativa", "escutar para entender e depois mostrar à pessoa que entendeu."], ["Repetir com as suas palavras", "dizer a ideia principal do que ouviu, mas com as suas próprias palavras."], ["Pergunta aberta", "uma pergunta que precisa de mais do que um sim ou um não."]],
          slides: [
            { title: "Porque escutar vem primeiro", bullets: ["Muitas pessoas planeiam a resposta em vez de escutar", "Quem se sente ouvido acalma-se", "Depois está pronto para ouvir você"] },
            { title: "Quatro partes da escuta ativa", bullets: ["Atenção total: telefone de lado, de frente para a pessoa", "Deixe-a terminar", "Repita com as suas palavras", "Faça uma pergunta aberta"] },
            { title: "Como soa", bullets: ["\"Então sentiu-se posto de lado quando o horário mudou.\"", "\"O que o teria ajudado?\"", "\"Entendi bem?\""] },
            { title: "Lembre-se", bullets: ["Repetir o que ouviu não é concordar", "Mostra que entendeu"] }
          ],
          tryIt: "Na sua próxima conversa real de hoje, com um colega de equipa, um colega de trabalho, um amigo ou um familiar, repita com as suas palavras uma coisa que ele disse e faça uma pergunta aberta. Repare como ele reage.",
          youCanNow: "escutar com atenção total, repetir com as suas palavras o que ouviu e fazer uma pergunta aberta.",
          quickCheck: [
            { objective: "O1", q: "O que é uma pergunta aberta?", options: ["Uma pergunta que se responde com sim ou não", "Uma pergunta que convida a pessoa a explicar com as suas palavras", "Uma pergunta feita num lugar público", "Uma pergunta de que já sabe a resposta"], answer: 1, why: "As perguntas abertas começam com palavras como o quê ou como e convidam a uma resposta completa." },
            { objective: "O1", q: "Um colega de equipa diz: \"O treinador nunca me põe a jogar na segunda parte.\" O que diria?", options: ["\"Isso não é verdade.\"", "\"Devias treinar mais.\"", "\"Então sentes que não tens uma oportunidade justa no fim dos jogos?\"", "\"Não quero falar disso.\""], answer: 2, why: "Repetir com as suas palavras mostra que o ouviu antes de responder." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dizer o que precisa com frases com \"Eu\"",
          minutes: 5,
          goal: "Transformar uma frase que culpa alguém numa frase clara com \"Eu\".",
          text: [
            "\"Tu sempre...\" e \"Tu nunca...\" fazem as pessoas defender-se, e depois ninguém escuta. Uma frase com \"Eu\" fala do que aconteceu e de como isso o afetou, sem atacar a outra pessoa.",
            "Um modelo simples: \"Eu sinto-me [sentimento] quando [o que aconteceu] porque [porque é importante]. Podemos [pedido]?\" Por exemplo, em vez de \"Tu nunca me passas a bola\", experimente \"Eu sinto-me frustrado quando estou livre e a bola não vem para mim, porque quero ajudar-nos a marcar. Podemos ver o vídeo do jogo juntos?\"",
            "Fale de um só assunto, descreva o que aconteceu como uma câmara o veria e termine com um pedido que a pessoa consiga mesmo fazer. O seu tom e a sua cara contam tanto como as palavras, por isso mantenha a voz calma."
          ],
          steps: ["Diga uma coisa que aconteceu, como uma câmara a veria.", "Diga o seu sentimento: frustrado, preocupado, magoado, stressado.", "Diga porque é importante para você.", "Peça uma mudança clara e possível."],
          words: [["Frase com \"Eu\"", "uma frase que começa pelo seu sentimento e pela sua necessidade, não pela culpa da outra pessoa."], ["Pedido", "pedir uma coisa concreta que a outra pessoa pode fazer."]],
          slides: [
            { title: "A culpa fecha as pessoas", bullets: ["\"Tu sempre...\" e \"Tu nunca...\"", "As pessoas defendem-se em vez de escutar"] },
            { title: "O modelo da frase com \"Eu\"", bullets: ["Eu sinto-me [sentimento]", "quando [o que aconteceu]", "porque [porque é importante]", "Podemos [pedido]?"] },
            { title: "Antes e depois", bullets: ["Antes: \"Tu nunca arrumas nada.\"", "Depois: \"Fico stressado quando a loiça se acumula, porque cozinho cedo.", "Podemos revezar-nos todas as noites?\""] },
            { title: "Dicas", bullets: ["Um assunto de cada vez", "Descreva como uma câmara o veria", "Voz calma, cara descontraída"] }
          ],
          tryIt: "Escreva três frases que culpam alguém e que já disse ou ouviu, por exemplo no trabalho ou em casa. Reescreva cada uma como uma frase com \"Eu\" e um pedido claro. Diga a melhor em voz alta.",
          youCanNow: "transformar uma frase que culpa alguém numa frase com \"Eu\" que tem um sentimento, uma razão e um pedido claro.",
          quickCheck: [
            { objective: "O2", q: "Qual é a principal diferença entre uma frase com \"Eu\" e uma frase com \"Tu\"?", options: ["A frase com \"Eu\" é sempre mais comprida", "A frase com \"Eu\" descreve o seu sentimento e a sua necessidade em vez de culpar", "A frase com \"Tu\" é mais educada", "Não há diferença"], answer: 1, why: "As frases com \"Eu\" partilham o seu sentimento e a sua necessidade, por isso a outra pessoa não se sente atacada." },
            { objective: "O2", q: "A pessoa com quem divide a casa deixa a loiça no lava-loiça. O que diria?", options: ["\"Eu sinto-me frustrado quando a loiça fica de um dia para o outro, porque cozinho cedo. Podemos lavá-la antes de dormir?\"", "\"És tão preguiçoso.\"", "\"Deixas sempre tudo desarrumado.\"", "\"Tanto faz, faço eu tudo sozinho.\""], answer: 0, why: "Segue o modelo eu sinto, quando, porque, podemos, com um pedido claro." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Começar uma conversa difícil",
          minutes: 5,
          goal: "Planear e começar uma conversa difícil na hora e no lugar certos.",
          text: [
            "Muitas pessoas evitam as conversas difíceis até explodirem. Um pouco de planeamento torna-as muito mais fáceis. Primeiro, tenha claro o que quer: não é ganhar, é resolver o problema e manter a relação a funcionar.",
            "Escolha uma boa hora e um bom lugar: em privado, sem pressa e não quando um de vocês está zangado, cansado ou com fome. Pergunte primeiro: \"Tem dez minutos hoje? Gostava de falar sobre o horário das entregas.\" Uma SMS ou um email pode marcar a conversa, mas tenha a conversa em si em pessoa ou por chamada quando puder, porque o tom perde-se na escrita.",
            "Comece com uma primeira frase curta e calma que diga o assunto e o seu objetivo: \"Quero que trabalhemos bem juntos, e há uma coisa que me tem incomodado. Posso contar e depois ouvir o seu lado?\" Depois use a sua frase com \"Eu\" e passe a escutar."
          ],
          steps: ["Escreva o seu objetivo: como seria um bom resultado?", "Escolha uma hora em privado em que os dois estejam calmos.", "Pergunte se agora é uma boa hora.", "Comece com o assunto e o seu objetivo em uma ou duas frases.", "Use a sua frase com \"Eu\" e depois escute."],
          words: [["Conversa difícil", "uma conversa sobre algo complicado, em que as emoções podem ficar fortes."], ["Frase de abertura", "a primeira ou as duas primeiras frases que começam a conversa com calma."]],
          slides: [
            { title: "Saiba o seu objetivo", bullets: ["Não é ganhar", "É resolver o problema", "E manter a relação a funcionar"] },
            { title: "Escolha o momento", bullets: ["Em privado e sem pressa", "Não quando está zangado, cansado ou com fome", "Em pessoa ou por chamada quando puder"] },
            { title: "Uma abertura calma", bullets: ["\"Quero que trabalhemos bem juntos.\"", "\"Há uma coisa que me tem incomodado.\"", "\"Posso contar e depois ouvir o seu lado?\""] },
            { title: "Depois", bullets: ["Use a sua frase com \"Eu\"", "Passe a escutar"] }
          ],
          tryIt: "Pense numa conversa que tem adiado. Escreva o seu objetivo numa frase, escolha uma hora e um lugar e escreva a sua frase de abertura. Leia a frase de abertura em voz alta até soar calma e natural.",
          youCanNow: "planear uma conversa difícil, escolher um bom momento e começá-la com calma.",
          quickCheck: [
            { objective: "O3", q: "O que deve decidir antes de começar uma conversa difícil?", options: ["Quem vai ganhar", "O seu objetivo, uma boa hora e um bom lugar, e a sua frase de abertura", "O que vai publicar na internet sobre isso", "Com que volume vai falar"], answer: 1, why: "Planear o objetivo, a hora, o lugar e a abertura ajuda a conversa a começar com calma." },
            { objective: "O3", q: "Precisa de falar com o seu chefe sobre o seu horário, mas ele vai a correr para uma reunião. O que faria?", options: ["Falar disso já, no corredor", "Enviar um email zangado", "Despedir-se sem dizer nada", "Pedir dez minutos hoje, numa hora mais calma"], answer: 3, why: "Uma hora calma e em privado dá à conversa uma oportunidade melhor." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escutar e falar com clareza",
        questions: [
          { objective: "O1", q: "O seu colega de trabalho está chateado com uma mudança de horário. Qual é a melhor resposta de escuta ativa?", options: ["\"A culpa não é minha.\"", "\"Então sentiu-se posto de lado porque ninguém avisou. Entendi bem?\"", "\"Deixe-me contar o que me aconteceu a mim.\"", "Olhar para o telefone enquanto ele fala"], answer: 1, why: "Repetir com as suas palavras e confirmar mostra que entendeu." },
          { objective: "O1", q: "Qual é uma pergunta aberta?", options: ["\"Está zangado?\"", "\"Já acabou?\"", "\"É só isso?\"", "\"O que o ajudaria mais agora?\""], answer: 3, why: "Não se pode responder só com sim ou não." },
          { objective: "O2", q: "Qual é uma boa frase com \"Eu\"?", options: ["\"Eu fico preocupado quando a renda atrasa, porque podemos perder o contrato. Podemos pôr um lembrete?\"", "\"Tu atrasas sempre a renda.\"", "\"Eu acho que és preguiçoso.\"", "\"Tu nunca te importas com nada.\""], answer: 0, why: "Diz um sentimento, o que aconteceu, porque é importante e um pedido claro." },
          { objective: "O3", q: "Qual é a melhor hora para começar uma conversa difícil?", options: ["Logo depois de uma derrota, enquanto todos estão zangados", "À frente de toda a equipa", "Uma hora em privado em que os dois estejam calmos", "Nunca; esperar que passe"], answer: 2, why: "Em privado e com calma dá à conversa a melhor oportunidade." },
          { objective: "O1", q: "Repetir com as suas palavras o que alguém disse quer dizer:", options: ["Que concorda com a pessoa", "Que mostra que entendeu o que ela disse", "Que repete as palavras dela para gozar", "Que muda de assunto"], answer: 1, why: "Repetir é para entender, não para concordar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Acalmar o conflito e combinar um caminho",
      lessons: [
        {
          objectives: ["O4"],
          title: "Acalmar um momento tenso",
          minutes: 5,
          goal: "Arrefecer um momento tenso, em si e na outra pessoa.",
          text: [
            "Quando ficamos zangados, o corpo prepara-se para lutar: o coração acelera e é difícil pensar com clareza. Nada de bom se decide nesse estado, por isso a primeira tarefa é acalmar.",
            "Comece por si: inspire devagar contando até quatro e expire contando até seis, abra as mãos e baixe a voz. Fale mais devagar e mais baixo do que a outra pessoa. Diga o que vê sem julgar: \"Vejo que isto é muito importante para si.\" Evite \"Acalme-se!\", que normalmente faz o contrário.",
            "Se ainda estiver muito quente, faça uma pausa e marque uma hora para voltar: \"Quero resolver isto. Vamos fazer uma pausa de vinte minutos e falar às 3.\" Se alguma vez não se sentir seguro, saia e peça ajuda. A sua segurança vem antes de qualquer conversa."
          ],
          steps: ["Repare nos seus sinais: coração acelerado, cara quente, punhos fechados.", "Respire: inspire em 4, expire em 6, algumas vezes.", "Baixe a voz e fale mais devagar.", "Diga o sentimento que vê: \"Vejo que está chateado.\"", "Se for preciso, faça uma pausa e marque uma hora para voltar.", "Se não se sentir seguro, saia e peça ajuda."],
          words: [["Desanuviar", "acalmar uma situação para que não piore."], ["Pausa combinada", "uma pausa curta e combinada para arrefecer, com uma hora para voltar."]],
          slides: [
            { title: "A raiva bloqueia o pensamento claro", bullets: ["O corpo prepara-se para lutar", "Nada de bom se decide a quente", "Primeira tarefa: acalmar"] },
            { title: "Acalme-se primeiro a si", bullets: ["Inspire em 4, expire em 6", "Abra as mãos", "Baixe a voz e fale mais devagar"] },
            { title: "Acalme a outra pessoa", bullets: ["Diga o que vê: \"Vejo que isto é importante para si.\"", "Evite \"Acalme-se!\"", "Escute e repita com as suas palavras"] },
            { title: "Ainda muito quente?", bullets: ["Faça uma pausa: \"Vamos falar às 3.\"", "Volte sempre a essa hora", "Se não se sentir seguro, saia e peça ajuda"] }
          ],
          tryIt: "Pratique agora cinco vezes a respiração inspirar em 4, expirar em 6. Depois escreva duas frases calmas que podia usar: uma que diz o sentimento da outra pessoa e outra que pede uma pausa com uma hora para voltar.",
          youCanNow: "acalmar-se, ajudar a acalmar outra pessoa e fazer uma pausa segura quando um momento fica tenso demais.",
          quickCheck: [
            { objective: "O4", q: "O que é a respiração inspirar em 4, expirar em 6?", options: ["Inspirar contando até 4 e expirar contando até 6 para acalmar", "Quatro respirações fundas e depois seis rápidas", "Suster a respiração durante 10 segundos", "Respirar só pela boca"], answer: 0, why: "Uma expiração mais longa ajuda o corpo a acalmar." },
            { objective: "O4", q: "Uma discussão com um cliente está a ficar mais alta e você está a ficar zangado. O que faria?", options: ["Levantar a voz para ser ouvido", "Dizer-lhe para se acalmar", "Respirar mais devagar, baixar a voz e dizer o sentimento dele", "Ir-se embora sem dizer nada"], answer: 2, why: "Acalmar-se primeiro e dizer o sentimento da outra pessoa arrefece o momento." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Descobrir o que cada pessoa precisa de verdade",
          minutes: 5,
          goal: "Descobrir as necessidades por trás da posição de cada lado e fazer a lista de opções que sirvam aos dois.",
          text: [
            "Num conflito, as pessoas normalmente dizem uma posição: o que dizem que querem. Por trás dela há um interesse: a razão por que o querem. Dois jogadores querem o mesmo número de camisola (posição). Um quer porque dá sorte; o outro quer porque era o número de um avô que já morreu (interesses). Saber o interesse abre novas respostas.",
            "Pergunte o \"porquê\" com cuidado: \"O que é mais importante para si nisto?\" ou \"O que o preocupa nesse plano?\" Depois partilhe o seu próprio interesse da mesma maneira.",
            "Agora façam juntos uma lista de opções, sem as julgar ainda. Tentem ter pelo menos três. O dono de uma loja e um empregado que querem os dois os sábados livres podem encontrar: fins de semana alternados, turnos divididos ou um bónus pago de fim de semana para trazer ajuda extra. A melhor opção costuma ser a que serve a necessidade mais importante de cada lado."
          ],
          steps: ["Escreva a posição de cada lado.", "Pergunte o que é mais importante por trás dela e escreva os interesses.", "Façam juntos uma lista de pelo menos três opções, sem julgar ainda.", "Escolham a opção que serve as necessidades mais importantes dos dois lados."],
          words: [["Posição", "o que alguém diz que quer."], ["Interesse", "a necessidade ou a razão verdadeira por trás da posição."], ["Chuva de ideias", "dizer muitas ideias depressa antes de julgar qualquer uma."]],
          slides: [
            { title: "Posição e interesse", bullets: ["Posição: o que alguém diz que quer", "Interesse: porque é que o quer", "Os interesses abrem novas respostas"] },
            { title: "Pergunte o porquê", bullets: ["\"O que é mais importante para si nisto?\"", "\"O que o preocupa nesse plano?\"", "Depois partilhe o seu próprio porquê"] },
            { title: "Façam juntos uma lista de opções", bullets: ["Pelo menos três ideias", "Não as julguem ainda", "Exemplo: fins de semana alternados, turnos divididos, um bónus"] },
            { title: "Escolham", bullets: ["Escolham a opção que serve as maiores necessidades dos dois lados"] }
          ],
          tryIt: "Pegue no desacordo que planeou na Lição 3. Escreva a sua posição e o seu interesse, e o que acha que são os da outra pessoa. Depois faça uma lista de três opções que possam servir aos dois interesses.",
          youCanNow: "descobrir as necessidades verdadeiras por trás de um desacordo e fazer uma lista de opções que possam servir aos dois lados.",
          quickCheck: [
            { objective: "O5", q: "O que é um interesse num desacordo?", options: ["A primeira exigência da pessoa", "A necessidade ou a razão por trás do que a pessoa pede", "O quanto a discussão é interessante", "O dinheiro que se deve de um empréstimo"], answer: 1, why: "Um interesse é a necessidade por baixo de uma posição." },
            { objective: "O5", q: "Você e um colega de trabalho querem os dois a sexta-feira livre. O que faria primeiro?", options: ["Atirar logo uma moeda ao ar", "Deixar ganhar quem fala mais alto", "Ir ao chefe sem conversar", "Perguntar porque é que cada um precisa da sexta-feira e fazer juntos uma lista de opções"], answer: 3, why: "Descobrir a necessidade de cada pessoa abre opções que podem servir aos dois." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Chegar a um acordo justo",
          minutes: 5,
          goal: "Transformar uma boa conversa num acordo escrito claro e acompanhá-lo.",
          text: [
            "Muitas boas conversas falham porque ninguém diz exatamente o que acontece a seguir. Um acordo claro responde a três perguntas: quem faz o quê, até quando e como vão verificar se está a funcionar.",
            "Justo quer dizer que as duas pessoas conseguem viver com ele e que respeita a necessidade principal de cada lado. Diga-o em voz alta: \"Então, eu fecho às terças-feiras, você faz as manhãs de sábado, a partir da próxima semana, e falamos outra vez no dia 15.\" Depois escreva-o numa SMS, num email ou numa nota partilhada, para que ninguém se lembre dele de outra maneira mais tarde.",
            "Volte ao assunto na data que marcaram. Se não estiver a funcionar, volte a escutar e a procurar opções; isso é normal, não é um fracasso. Para problemas sérios, como assédio, segurança, dinheiro ou questões legais, chame um chefe, os recursos humanos, um treinador, um mediador ou outra pessoa de confiança. Não tem de resolver tudo sozinho."
          ],
          steps: ["Diga o acordo em voz alta: quem, o quê, até quando.", "Pergunte: \"Conseguimos os dois viver com isto?\"", "Escreva-o e envie uma cópia à outra pessoa.", "Marque uma data para voltarem a falar.", "Acompanhe. Se não estiver a funcionar, falem outra vez."],
          words: [["Acordo", "o que as duas pessoas decidem fazer, dito com clareza."], ["Acompanhar", "voltar ao assunto mais tarde para ver se o acordo está a funcionar."], ["Mediador", "uma pessoa neutra que ajuda dois lados a conversar e a chegar a acordo."]],
          slides: [
            { title: "Um acordo claro diz", bullets: ["Quem faz o quê", "Até quando", "Como vão verificar se está a funcionar"] },
            { title: "Torne-o justo", bullets: ["As duas pessoas conseguem viver com ele", "Respeita a necessidade principal de cada lado", "Pergunte: \"Conseguimos os dois viver com isto?\""] },
            { title: "Escreva-o", bullets: ["Diga-o outra vez em voz alta", "Envie-o por SMS, email ou nota partilhada", "Marque uma data para voltarem a falar"] },
            { title: "Acompanhe e peça ajuda", bullets: ["Não está a funcionar? Falem outra vez", "Problemas sérios: chefe, recursos humanos, treinador ou mediador"] }
          ],
          tryIt: "Tarefa final: tenha (ou ensaie com um amigo) a conversa que planeou. Repita com as suas palavras, use uma frase com \"Eu\", pergunte do que a pessoa precisa, combinem quem faz o quê e até quando, e envie um resumo curto por escrito.",
          youCanNow: "terminar uma conversa difícil com um acordo justo e escrito, e acompanhá-lo.",
          quickCheck: [
            { objective: "O6", q: "Porque marcar uma data num acordo para voltarem a falar?", options: ["Para ver se o acordo está a funcionar e corrigi-lo se não estiver", "Para castigar quem o quebrar", "Para acabar a relação", "Porque a lei obriga"], answer: 0, why: "Voltar a falar deixa as duas pessoas ver se o plano funciona e ajustá-lo." },
            { objective: "O6", q: "Você e o seu sócio combinaram um plano de viva voz. O que faria a seguir?", options: ["Confiar que os dois se vão lembrar dele da mesma maneira", "Contar a sua versão a outras pessoas", "Enviar um resumo curto por escrito de quem faz o quê e até quando", "Esperar que apareçam problemas"], answer: 2, why: "Um resumo escrito faz com que ninguém se lembre dele de outra maneira." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Acalmar o conflito e combinar um caminho",
        questions: [
          { objective: "O4", q: "Uma discussão está a ficar mais alta. O que deve fazer primeiro?", options: ["Falar mais alto para ser ouvido", "Dizer \"Acalme-se!\"", "Ir-se embora e nunca mais voltar ao assunto", "Respirar mais devagar e baixar a voz"], answer: 3, why: "Acalmar-se primeiro ajuda a acalmar o momento." },
          { objective: "O5", q: "Dois voluntários querem o turno de sábado. Um precisa dos dias de semana livres para a escola. Essa necessidade é o seu:", options: ["Interesse", "Posição", "Acordo", "Pausa combinada"], answer: 0, why: "Um interesse é a razão verdadeira por trás do que alguém pede." },
          { objective: "O4", q: "Quando faz uma pausa numa conversa tensa, deve:", options: ["Nunca mais falar do assunto", "Marcar uma hora para voltar e cumpri-la", "Publicar sobre isso na internet", "Contar primeiro a todos os outros"], answer: 1, why: "Uma pausa funciona quando voltam à hora combinada." },
          { objective: "O6", q: "Qual é o acordo mais claro?", options: ["\"Vamos fazer melhor.\"", "\"Vamos esforçar-nos mais.\"", "\"Eu fecho às terças, você abre aos sábados, a partir de segunda-feira; falamos outra vez no dia 15.\"", "\"O que der.\""], answer: 2, why: "Diz quem, o quê, quando e como vão verificar." },
          { objective: "O6", q: "Um conflito envolve assédio no trabalho. Qual é o passo certo?", options: ["Chamar um chefe ou os recursos humanos", "Resolver sozinho custe o que custar", "Ignorar", "Discutir mais alto"], answer: 0, why: "Problemas sérios precisam de um chefe, dos recursos humanos ou de outra pessoa de confiança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Comunicação e Resolução de Conflitos",
    questions: [
      { objective: "O1", q: "Escuta ativa quer dizer:", options: ["Esperar pela sua vez de falar", "Escutar para entender e depois mostrar que entendeu", "Concordar com tudo", "Dar conselhos logo"], answer: 1, why: "É entender e mostrar que entendeu." },
      { objective: "O1", q: "O que mostra atenção total?", options: ["Ver coisas no telefone", "Olhar para a televisão", "Telefone de lado, de frente para a pessoa", "Acabar as frases da pessoa"], answer: 2, why: "Atenção total quer dizer sem distrações." },
      { objective: "O1", q: "\"Então a entrega atrasada deixou-o sem o suficiente para a hora de almoço?\" é um exemplo de:", options: ["Culpar", "Mudar de assunto", "Uma pergunta fechada", "Repetir com as suas palavras"], answer: 3, why: "Diz a ideia principal com as suas próprias palavras." },
      { objective: "O1", q: "Qual NÃO é uma pergunta aberta?", options: ["\"Recebeu a minha mensagem?\"", "\"O que ajudaria?\"", "\"Como é que isso o afetou?\"", "\"O que é mais importante para si aqui?\""], answer: 0, why: "Pode-se responder com sim ou não." },
      { objective: "O2", q: "Porque é que as frases \"Tu sempre...\" causam problemas?", options: ["São curtas demais", "Fazem as pessoas defender-se", "São educadas demais", "São difíceis de escrever"], answer: 1, why: "A culpa faz as pessoas defender-se em vez de escutar." },
      { objective: "O2", q: "O modelo da frase com \"Eu\" é:", options: ["Eu ganho quando tu perdes", "Eu tenho razão porque eu digo", "Eu sinto-me ___ quando ___ porque ___. Podemos ___?", "Eu ignoro-te até mudares"], answer: 2, why: "Sentimento, o que aconteceu, porque é importante e um pedido." },
      { objective: "O2", q: "Um colega de equipa chega sempre atrasado ao treino. Qual é a melhor maneira de começar?", options: ["\"Eu fico stressado quando o aquecimento começa sem ti, porque perdemos exercícios. Podes tentar chegar 10 minutos mais cedo?\"", "\"Não te importas com esta equipa.\"", "\"Toda a gente acha que és preguiçoso.\"", "Não dizer nada e queixar-se aos outros"], answer: 0, why: "É uma frase calma com \"Eu\" e um pedido claro." },
      { objective: "O2", q: "Uma frase com \"Eu\" deve descrever o que aconteceu:", options: ["Com o maior número possível de insultos", "Como uma câmara o veria", "Usando todos os erros do passado", "Num grupo de conversa"], answer: 1, why: "Factos simples, não julgamentos, mantêm a calma." },
      { objective: "O3", q: "Numa conversa difícil, o seu objetivo é normalmente:", options: ["Ganhar a discussão", "Provar que a outra pessoa está errada", "Ter a última palavra", "Resolver o problema e manter a relação a funcionar"], answer: 3, why: "Um bom resultado serve às duas pessoas." },
      { objective: "O3", q: "Qual é a melhor maneira de marcar uma conversa difícil com o seu sócio?", options: ["Falar disso à frente dos clientes", "\"Tem dez minutos hoje para falarmos do horário?\"", "Enviar uma SMS zangada à meia-noite", "Esperar até explodir"], answer: 1, why: "Perguntar primeiro e escolher uma hora calma e em privado funciona melhor." },
      { objective: "O3", q: "Porque ter a conversa difícil em pessoa ou por chamada quando puder?", options: ["O tom pode perder-se na escrita", "As SMS são proibidas por lei", "Demora mais tempo", "É mais dramático"], answer: 0, why: "A voz e a cara mostram o tom que o texto perde." },
      { objective: "O4", q: "Que forma de respirar ajuda a acalmar?", options: ["Suster a respiração o mais que puder", "Respirar muito depressa", "Inspirar em 4 tempos, expirar em 6", "Gritar para pôr tudo cá fora"], answer: 2, why: "Uma expiração mais longa ajuda o corpo a abrandar." },
      { objective: "O4", q: "Dizer \"Acalme-se!\" a uma pessoa chateada normalmente:", options: ["Acalma-a logo", "Piora as coisas", "Acaba o conflito", "Cria confiança"], answer: 1, why: "Soa a desprezo; dizer o sentimento dela funciona melhor." },
      { objective: "O4", q: "Não se sente seguro durante uma discussão. O que faz?", options: ["Fica e termina a discussão", "Levanta a voz", "Bloqueia a porta", "Sai e pede ajuda"], answer: 3, why: "A sua segurança vem antes de qualquer conversa." },
      { objective: "O5", q: "\"Quero o gabinete do canto\" é uma posição. Qual pode ser o interesse por trás?", options: ["O gabinete do canto", "Uma secretária maior no gabinete do canto", "Um lugar sossegado para fazer chamadas", "Ganhar"], answer: 2, why: "Um interesse é a razão por trás da posição." },
      { objective: "O5", q: "Quando fazem juntos uma lista de opções, deve:", options: ["Dizer várias ideias antes de julgar qualquer uma", "Rejeitar cada ideia logo que é dita", "Só pôr na lista as suas ideias", "Parar na primeira ideia"], answer: 0, why: "Fazer primeiro a chuva de ideias dá mais escolhas." },
      { objective: "O5", q: "A melhor opção costuma ser a que:", options: ["É mais rápida de dizer", "Serve as necessidades mais importantes dos dois lados", "Deixa ganhar quem fala mais alto", "Custa mais caro"], answer: 1, why: "Servir as necessidades principais dos dois lados faz o acordo durar." },
      { objective: "O6", q: "Um acordo claro responde a:", options: ["Quem estava errado", "Quem gritou primeiro", "O que todos pensam", "Quem faz o quê, até quando e como vão verificar"], answer: 3, why: "Esses detalhes fazem um acordo funcionar." },
      { objective: "O6", q: "Porque escrever o acordo?", options: ["Para o usar mais tarde contra a pessoa", "Para o publicar na internet", "Porque parece oficial", "Para que ninguém se lembre dele de outra maneira"], answer: 3, why: "Uma nota escrita mantém as duas pessoas de acordo sobre o que foi dito." },
      { objective: "O6", q: "Na data marcada para voltarem a falar, o acordo não está a funcionar. Qual é o melhor passo?", options: ["Desistir da relação", "Fingir que está tudo bem", "Falar outra vez: escutar e procurar novas opções", "Culpar a outra pessoa"], answer: 2, why: "Voltar a escutar e a procurar opções é normal." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 5, 7, 9, 11, 13, 14, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano para a conversa", objective: "O3", notYet: "Não há objetivo, hora nem frase de abertura claros.", meets: "Um objetivo numa frase, uma hora e um lugar calmos, e uma frase de abertura praticada em voz alta.", exceeds: "Também planeou como fazer uma pausa se as coisas aquecerem." },
      { name: "Escuta", objective: "O1", notYet: "Interrompeu ou saltou para respostas sem repetir com as suas palavras.", meets: "Repetiu com as suas palavras pelo menos uma vez e fez uma pergunta aberta.", exceeds: "A outra pessoa disse que se sentiu entendida." },
      { name: "Frase com \"Eu\"", objective: "O2", notYet: "Usou frases com \"Tu\" que culpam.", meets: "Usou pelo menos uma frase clara com \"Eu\" e um pedido.", exceeds: "Continuou a usar frases com \"Eu\" mesmo quando a conversa ficou difícil." },
      { name: "Necessidades e opções", objective: "O5", notYet: "Só discutiu posições.", meets: "Perguntou do que a outra pessoa precisa e olhou para mais do que uma opção.", exceeds: "Encontrou uma opção que serviu necessidades importantes dos dois lados." },
      { name: "Acordo escrito", objective: "O6", notYet: "Não há acordo, ou é vago.", meets: "Um resumo escrito de quem faz o quê e até quando, partilhado com a outra pessoa.", exceeds: "Inclui uma data para voltarem a falar." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que dizem ter tido uma conversa difícil em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter resolvido um desacordo com um acordo escrito",
      "Equipas ou programas que dizem ter menos conflitos a chegar a um chefe, treinador ou aos recursos humanos",
      "Alunos que começam outro curso de relações humanas da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta para planear a conversa e escrever o acordo",
      "Um amigo ou colega para ensaiar, se possível",
      "Cerca de 60 minutos no total, mais o tempo para a conversa real"
    ],
    facilitatorNotes: [
      "Use ensaios em pares com desacordos inventados ou pequenos e reais; ninguém tem de contar detalhes pessoais.",
      "Mostre você mesmo a escuta ativa e as frases com \"Eu\" antes de os alunos as experimentarem.",
      "Lembre aos alunos que os conflitos com perigo, ameaças ou assédio precisam da ajuda de um chefe, dos recursos humanos ou das autoridades, não de uma conversa a dois.",
      "Com equipas, pratiquem com conflitos comuns de equipa, como o tempo de jogo, os horários e as tarefas partilhadas.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
