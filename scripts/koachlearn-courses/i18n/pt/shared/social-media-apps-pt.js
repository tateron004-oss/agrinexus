"use strict";

// Koach Learn course (Portuguese translation of shared/social-media-apps.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "social-media-apps-pt",
  lang: "pt",
  translationOf: "social-media-apps",
  category: "Seniors and Technology",
  name: "Aplicações de Redes Sociais e Como Usá-las",
  skills: "Escolher uma aplicação de redes sociais, Criar um perfil seguro, Publicar e comentar, Definições de privacidade, Reconhecer contas falsas e burlas",
  outcome: "criar uma conta numa rede social com definições de privacidade seguras, seguir as pessoas e os grupos de que gosta, publicar e comentar com gentileza, e reconhecer e denunciar contas falsas e burlas.",
  about: [
    "Aplicações de redes sociais como o Facebook, o Instagram, o WhatsApp, o YouTube, o TikTok e o LinkedIn são onde muitas famílias partilham fotos, onde os grupos da comunidade publicam notícias e onde os empregadores procuram trabalhadores.",
    "Este curso mostra como escolher uma aplicação, criar um perfil que mantém a sua vida privada em privado, publicar e comentar, e proteger-se de contas falsas e burlas.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Numa aplicação de redes sociais: configure o seu perfil para que só amigos ou seguidores que você aprova possam ver as suas publicações, siga um familiar ou amigo e um grupo ou página local, escreva um comentário gentil numa publicação e encontre o botão Denunciar numa publicação ou conta para saber onde ele está.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que querem usar as redes sociais para acompanhar a família, os amigos, a igreja, os grupos do bairro ou ofertas de emprego: idosos, avós, pessoas que voltam para a comunidade, recém-chegados e pais de adolescentes.",
    startingPoint: "Sabem usar um smartphone ou um computador para abrir aplicações e escrever. Alguns têm uma conta que um familiar criou; poucos verificaram as definições de privacidade, ativaram a verificação em dois passos ou sabem reconhecer uma conta falsa, denunciar uma publicação ou bloquear alguém.",
    gap: "As redes sociais são onde muitas famílias partilham notícias e onde se publicam grupos, eventos e empregos, mas também são onde os burlões encontram pessoas. Sem definições e hábitos seguros, as pessoas partilham demais, aceitam pedidos de amizade falsos, caem em burlas românticas e de prémios, ou sentem-se pior por passarem horas a deslizar no ecrã.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; palavras como feed, perfil e definições de privacidade são explicadas",
      "Aparelhos: um smartphone, um tablet ou um computador com internet",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Custo: só aplicações gratuitas, da loja de aplicações oficial",
      "Privacidade e idade: os alunos deixam de fora a morada, o ano de nascimento e os planos de viagem, e verificam a idade mínima de cada aplicação antes de uma criança ou adolescente se inscrever"
    ],
    prerequisites: "Nenhum. O curso \"Usar um Smartphone e um Tablet\" ajuda os alunos que são novos nas aplicações."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com algo que quer fazer, como ver fotos da família ou encontrar um emprego", action: "escolher a aplicação de redes sociais que serve para isso", standard: "acertando a aplicação certa todas as vezes" },
    { id: "O2", condition: "Usando uma aplicação de redes sociais da loja oficial", action: "criar uma conta com um perfil seguro e ativar a verificação em dois passos", standard: "sem morada de casa, ano de nascimento nem número de telefone no perfil e com a verificação em dois passos ativada" },
    { id: "O3", condition: "Na sua conta de redes sociais", action: "seguir pessoas e grupos que verificou, escrever uma publicação e deixar um comentário gentil", standard: "verificando quem pode ver cada publicação antes de a partilhar" },
    { id: "O4", condition: "Nas definições de privacidade da aplicação", action: "definir quem pode ver as suas publicações, encontrá-lo e enviar-lhe mensagens", standard: "com as publicações só para amigos ou seguidores aprovados e a localização nas publicações desativada" },
    { id: "O5", condition: "Com um pedido de amizade ou uma mensagem", action: "identificar os sinais de uma conta falsa ou de uma burla e recusá-la", standard: "dizendo pelo menos dois sinais de alerta e nunca enviando dinheiro, cartões-presente ou códigos" },
    { id: "O6", condition: "Com uma publicação, conta ou hábito indesejado", action: "bloquear, denunciar ou silenciar e definir um limite de tempo para a aplicação", standard: "escolhendo a ferramenta certa para cada caso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Primeiros passos nas redes sociais",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que são as redes sociais e para que serve cada aplicação",
          minutes: 4,
          goal: "Escolher a aplicação de redes sociais que serve para o que quer fazer.",
          text: [
            "As aplicações de redes sociais deixam as pessoas partilhar palavras, fotos e vídeos e conversar umas com as outras. Cada uma é boa para coisas diferentes.",
            "Facebook: família, amigos, grupos locais e eventos. Instagram: fotos e vídeos curtos. WhatsApp: mensagens e chamadas gratuitas com a família, também entre países. YouTube: vídeos para ver e aprender. TikTok: vídeos curtos. LinkedIn: empregos e contactos de trabalho. Nextdoor: notícias do seu bairro.",
            "Não precisa de todas. Comece com uma que sirva para o que quer, como ver fotos da família ou encontrar um emprego. Cada aplicação define uma idade mínima nas suas regras; verifique-as antes de uma criança ou adolescente se inscrever."
          ],
          words: [["Redes sociais", "aplicações e sites onde as pessoas partilham publicações e conversam umas com as outras."], ["Publicação", "algo que você partilha: palavras, uma foto ou um vídeo."], ["Feed", "a lista de publicações que você vê ao deslizar o ecrã."]],
          slides: [
            { title: "O que são as redes sociais", bullets: ["Aplicações onde as pessoas partilham palavras, fotos e vídeos", "E conversam umas com as outras"] },
            { title: "Para que serve cada aplicação", bullets: ["Facebook: família, amigos, grupos locais", "Instagram e TikTok: fotos e vídeos curtos", "WhatsApp: mensagens e chamadas", "YouTube: vídeos; LinkedIn: empregos"] },
            { title: "Comece com uma", bullets: ["Escolha a aplicação que serve o seu objetivo", "Verifique as regras de idade de cada aplicação para crianças"] }
          ],
          tryIt: "Escreva uma coisa que quer das redes sociais (por exemplo: ver as fotos dos netos, entrar num grupo da igreja ou da comunidade, ou encontrar trabalho). Ao lado, escreva a aplicação desta lição que serve melhor.",
          youCanNow: "dizer para que servem as principais aplicações de redes sociais e escolher uma que sirva o seu objetivo.",
          quickCheck: [
            { objective: "O1", q: "Que aplicação serve sobretudo para notícias do seu bairro?", options: ["LinkedIn", "TikTok", "Nextdoor", "Instagram"], answer: 2, why: "O Nextdoor serve para notícias do seu bairro." },
            { objective: "O1", q: "Quer ver as fotos dos seus netos e entrar num grupo local da igreja. Com que aplicação começaria?", options: ["LinkedIn", "Facebook", "Um site de empregos", "Todas ao mesmo tempo"], answer: 1, why: "O Facebook serve para família, amigos, grupos locais e eventos; comece com uma aplicação que sirva." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Criar um perfil seguro",
          minutes: 5,
          goal: "Criar uma conta e preencher um perfil sem partilhar demais.",
          text: [
            "Instale a aplicação só a partir da loja de aplicações oficial, ou vá ao site verdadeiro da empresa. Inscreva-se com o seu email ou número de telefone e uma palavra-passe forte que não usa em mais nenhum lado.",
            "O seu perfil é a página que diz às pessoas quem você é. Coloque o seu nome e uma foto simpática. Deixe de fora o ano de nascimento, a morada de casa, o número de telefone e quando está fora de casa. Os burlões recolhem estes dados.",
            "Ative a verificação em dois passos (às vezes chamada autenticação de dois fatores) nas definições de segurança da aplicação. Assim, mesmo que alguém roube a sua palavra-passe, também precisa de um código do seu telefone."
          ],
          steps: ["Instale a aplicação a partir da loja de aplicações oficial.", "Inscreva-se com email ou telefone e uma palavra-passe nova e forte.", "Coloque o seu nome e uma foto simpática.", "Deixe de fora a morada, o número de telefone, a data de nascimento completa e os planos de viagem.", "Abra as definições de segurança e ative a verificação em dois passos."],
          words: [["Perfil", "a sua página que mostra quem você é na aplicação."], ["Verificação em dois passos", "uma segunda verificação, normalmente um código enviado para o seu telefone, quando inicia sessão."]],
          slides: [
            { title: "Inscreva-se com segurança", bullets: ["Loja de aplicações oficial ou site verdadeiro", "Uma palavra-passe forte que não usa em mais nenhum lado"] },
            { title: "O que colocar no seu perfil", bullets: ["O seu nome", "Uma foto simpática"] },
            { title: "O que deixar de fora", bullets: ["Morada de casa e número de telefone", "Data de nascimento completa", "Quando está fora de casa"] },
            { title: "Ative a verificação em dois passos", bullets: ["Encontre-a nas definições de segurança", "Um ladrão também precisa do código do seu telefone"] }
          ],
          tryIt: "Crie uma conta na aplicação que escolheu (ou abra a que já tem). Veja o seu perfil: tire tudo o que está na lista \"deixar de fora\" e ative a verificação em dois passos.",
          youCanNow: "criar um perfil nas redes sociais que mostra quem você é sem revelar dados privados.",
          quickCheck: [
            { objective: "O2", q: "O que é o seu perfil?", options: ["A página que diz às pessoas quem você é", "Uma lista de publicações de outras pessoas", "A sua palavra-passe", "Uma definição que esconde você"], answer: 0, why: "O seu perfil é a sua página, com o seu nome e a sua foto." },
            { objective: "O2", q: "A inscrição pede a sua data de nascimento completa, morada e telefone para mostrar no perfil. O que faria?", options: ["Mostrar tudo para as pessoas o encontrarem", "Mostrar só a morada", "Publicar também as datas das suas viagens", "Deixá-los fora do perfil, porque os burlões recolhem estes dados"], answer: 3, why: "Deixar de fora o ano de nascimento, a morada e o número de telefone protege você dos burlões." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Seguir, publicar e comentar",
          minutes: 5,
          goal: "Seguir pessoas e grupos, escrever uma publicação e deixar um comentário gentil.",
          text: [
            "Para ver as publicações de alguém, envie um pedido de amizade ou siga essa pessoa. Procure o nome, veja a foto e os amigos em comum para ter a certeza de que é mesmo ela, e toque em Adicionar amigo ou Seguir. Também pode entrar em grupos: de uma igreja, de um bairro, de um passatempo ou de empregos.",
            "Para publicar, toque na caixa que pergunta em que está a pensar, ou no botão +. Escreva algumas palavras, junte uma foto se quiser, verifique quem pode ver e toque em Publicar ou Partilhar.",
            "Reagir (com um polegar para cima ou um coração) mostra que viu uma publicação. Comentar junta as suas palavras por baixo dela. Seja gentil: escreva como se a pessoa estivesse na sala. Lembre-se de que o que publica pode ser copiado e visto durante muito tempo."
          ],
          steps: ["Procure uma pessoa ou um grupo pelo nome.", "Verifique que é o verdadeiro: foto, amigos em comum, publicações.", "Toque em Adicionar amigo, Seguir ou Aderir.", "Para publicar: toque na caixa de publicação ou em +, escreva, junte uma foto, verifique quem pode ver e depois Publicar.", "Para comentar: toque em Comentar por baixo de uma publicação, escreva algo gentil e envie."],
          words: [["Seguir", "escolher ver as publicações de alguém no seu feed."], ["Grupo", "um espaço na aplicação para pessoas com o mesmo interesse."], ["Comentário", "palavras que você escreve por baixo da publicação de alguém."], ["Reagir", "tocar num gosto, num coração ou noutro símbolo numa publicação."]],
          slides: [
            { title: "Seguir e aderir", bullets: ["Procure o nome", "Verifique que é mesmo a pessoa", "Toque em Adicionar amigo, Seguir ou Aderir"] },
            { title: "Fazer uma publicação", bullets: ["Toque na caixa de publicação ou em +", "Escreva e junte uma foto", "Verifique quem pode ver e depois Publicar"] },
            { title: "Reagir e comentar", bullets: ["Reagir: gosto ou coração", "Comentar: as suas palavras por baixo de uma publicação", "Seja gentil; as publicações podem durar muito tempo"] }
          ],
          tryIt: "Siga um familiar ou amigo e entre ou siga um grupo ou página local. Depois deixe um comentário gentil numa das suas publicações.",
          youCanNow: "seguir pessoas e grupos, fazer uma publicação, e reagir e comentar com gentileza.",
          quickCheck: [
            { objective: "O3", q: "O que mostra uma reação, como um polegar para cima ou um coração?", options: ["Que quer bloquear a pessoa", "Que denunciou a publicação", "Que partilhou a publicação com toda a gente", "Que viu a publicação"], answer: 3, why: "Uma reação mostra que viu uma publicação; um comentário junta as suas palavras." },
            { objective: "O3", q: "Não concorda com uma publicação de um primo. O que faria?", options: ["Escrever com gentileza, como se a pessoa estivesse na sala, ou não dizer nada", "Escrever um comentário zangado em letras maiúsculas", "Publicar o número de telefone dele", "Partilhar a publicação com um insulto"], answer: 0, why: "Seja gentil; o que publica pode ser copiado e visto durante muito tempo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Primeiros passos nas redes sociais",
        questions: [
          { objective: "O1", q: "Quer chamadas e mensagens gratuitas com a família noutro país. Que aplicação serve melhor?", options: ["LinkedIn", "WhatsApp", "Nextdoor", "TikTok"], answer: 1, why: "O WhatsApp serve para mensagens e chamadas, também entre países." },
          { objective: "O2", q: "Que dado deve deixar FORA do seu perfil?", options: ["O seu primeiro nome", "Uma foto simpática", "A morada de sua casa", "Um passatempo favorito"], answer: 2, why: "A morada de casa deixa desconhecidos encontrarem você." },
          { objective: "O2", q: "O que faz a verificação em dois passos?", options: ["Pede um código do seu telefone além da palavra-passe", "Torna as publicações maiores", "Adiciona amigos por você", "Apaga a sua conta"], answer: 0, why: "Um ladrão também precisaria do código do seu telefone." },
          { objective: "O3", q: "Procura a sua sobrinha e encontra duas contas com o nome dela. O que faz?", options: ["Adiciona as duas", "Envia dinheiro às duas", "Dá a sua palavra-passe às duas", "Verifica primeiro a foto, os amigos em comum e as publicações"], answer: 3, why: "Verificar ajuda a evitar contas falsas copiadas." },
          { objective: "O3", q: "O que é um comentário?", options: ["A sua palavra-passe", "Uma mensagem privada do banco", "Palavras que escreve por baixo da publicação de alguém", "Uma atualização da aplicação"], answer: 2, why: "Um comentário é a sua resposta escrita por baixo de uma publicação." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter a privacidade e a segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Definições de privacidade: escolher quem vê o quê",
          minutes: 5,
          goal: "Configurar as suas publicações e o seu perfil para que só as pessoas que escolhe os possam ver.",
          text: [
            "Todas as aplicações têm definições de privacidade. Elas decidem quem pode ver as suas publicações, quem pode encontrá-lo e quem pode enviar-lhe mensagens. Público quer dizer qualquer pessoa no mundo. Amigos ou seguidores que aprova quer dizer só as pessoas a quem disse que sim.",
            "Procure Definições e depois Privacidade (em algumas aplicações está num menu com três linhas ou na sua foto de perfil). Muitas aplicações também têm uma verificação de privacidade que o guia por cada escolha.",
            "Um bom começo: deixe as publicações visíveis só para amigos, aprove você mesmo os novos seguidores e limite quem pode enviar-lhe mensagens. Desative a partilha de localização nas publicações se não quer que as pessoas saibam onde está."
          ],
          steps: ["Abra o menu da aplicação ou a sua foto de perfil.", "Escolha Definições e depois Privacidade (ou uma verificação de privacidade).", "Defina quem pode ver as suas publicações: amigos ou seguidores aprovados.", "Defina quem pode enviar-lhe mensagens e encontrá-lo.", "Desative a localização nas publicações se não precisar dela."],
          words: [["Público", "qualquer pessoa, até desconhecidos, pode ver."], ["Definições de privacidade", "as escolhas que controlam quem vê as suas publicações e o seu perfil."], ["Partilha de localização", "mostrar onde está quando publica."]],
          slides: [
            { title: "Quem pode ver?", bullets: ["Público: qualquer pessoa no mundo", "Amigos ou seguidores aprovados: só as pessoas a quem diz que sim"] },
            { title: "Encontrar as definições de privacidade", bullets: ["Menu ou foto de perfil e depois Definições", "Procure Privacidade ou uma verificação de privacidade"] },
            { title: "Um bom começo", bullets: ["Publicações: só amigos", "Aprove você mesmo os seguidores", "Limite quem pode enviar-lhe mensagens", "Localização desativada nas publicações"] }
          ],
          tryIt: "Abra as definições de privacidade da sua aplicação. Deixe as suas publicações só para amigos ou seguidores aprovados e desative a localização nas publicações. Depois veja o seu próprio perfil como um desconhecido o veria, se a aplicação o permitir.",
          youCanNow: "configurar a sua privacidade para que só as pessoas que escolhe vejam as suas publicações e os seus dados.",
          quickCheck: [
            { objective: "O4", q: "O que é uma verificação de privacidade?", options: ["Uma consulta no médico", "Uma ferramenta de muitas aplicações que o guia por cada escolha de privacidade", "Uma forma de publicar em público", "Uma mensagem de burla"], answer: 1, why: "Muitas aplicações oferecem uma verificação de privacidade que o guia por cada escolha." },
            { objective: "O4", q: "Não quer que desconhecidos vejam onde está quando publica. O que faria?", options: ["Tornar todas as publicações públicas", "Publicar a sua morada em vez disso", "Desativar a partilha de localização nas publicações", "Aceitar todos os pedidos de amizade"], answer: 2, why: "Desativar a localização nas publicações impede as pessoas de saber onde está." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reconhecer contas falsas e burlas",
          minutes: 5,
          goal: "Reconhecer uma conta falsa ou uma mensagem de burla e recusá-la.",
          text: [
            "Os burlões criam contas falsas, às vezes copiando o nome e a foto de um amigo verdadeiro. Um segundo pedido de amizade de alguém que já é seu amigo é um sinal de alerta. Pergunte à pessoa verdadeira por telefone antes de aceitar.",
            "A Comissão Federal do Comércio dos Estados Unidos (FTC) indica sinais de burla: fingir ser alguém que conhece ou em quem confia, um problema ou um prémio, pressão para agir já, e pedir pagamento com cartão-presente, transferência bancária, aplicação de pagamento ou criptomoeda. Nas redes sociais, isto parece \"Ganhou! Pague uma pequena taxa\", mensagens de amor que depressa pedem dinheiro, e ofertas de emprego ou de investimento \"boas demais para ser verdade\".",
            "Nunca envie dinheiro, cartões-presente ou códigos a alguém que só conheceu pela internet. Nos Estados Unidos, pode denunciar burlas em reportfraud.ftc.gov."
          ],
          steps: ["Tenha cuidado com novos pedidos de amizade, sobretudo de pessoas que já conhece.", "Confirme por telefone ou pessoalmente antes de aceitar.", "Esteja atento a: um prémio, pressa, pedidos de dinheiro ou cartões-presente, e propostas de amor ou de emprego que passam a dinheiro.", "Não clique nos links deles nem envie dinheiro ou códigos.", "Denuncie a conta na aplicação e, nos EUA, em reportfraud.ftc.gov."],
          words: [["Conta falsa", "um perfil criado por um burlão, muitas vezes a copiar uma pessoa verdadeira."], ["Burla romântica", "um burlão finge amar você pela internet e depois pede dinheiro."]],
          slides: [
            { title: "Contas falsas", bullets: ["Um segundo pedido de um amigo que já tem", "Perfil novo, poucas publicações, poucos amigos", "Confirme primeiro com a pessoa verdadeira"] },
            { title: "Sinais de burla segundo a FTC", bullets: ["Finge ser alguém em quem confia", "Um problema ou um prémio", "Pressão para agir já", "Pagar com cartão-presente, transferência, aplicação de pagamento ou cripto"] },
            { title: "Nunca envie", bullets: ["Dinheiro ou cartões-presente a quem só conheceu pela internet", "Códigos do seu telefone"] },
            { title: "Denuncie", bullets: ["Use o botão Denunciar da aplicação", "EUA: reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Como evitar uma burla", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Denunciar fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Veja os seus pedidos de amizade ou seguidores. Para qualquer um de que não tenha a certeza, procure sinais de alerta no perfil. Recuse quem não conseguir confirmar que é verdadeiro.",
          youCanNow: "reconhecer uma conta falsa ou uma burla nas redes sociais e recusá-la.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um sinal de alerta de burla nas redes sociais?", options: ["Pressão para agir já e pagar com um cartão-presente", "Um amigo que conhece a partilhar uma foto de aniversário", "Um grupo local a publicar a hora de uma reunião", "Um vídeo de culinária"], answer: 0, why: "Pressão para agir já e pagamento com cartão-presente são sinais que a FTC indica." },
            { objective: "O5", q: "Alguém que conheceu pela internet oferece-lhe um emprego se primeiro lhe enviar um código do seu telefone. O que faria?", options: ["Enviar o código depressa", "Enviar dinheiro em vez do código", "Dar a sua palavra-passe", "Recusar e nunca enviar códigos a quem só conheceu pela internet"], answer: 3, why: "Nunca envie dinheiro, cartões-presente ou códigos a alguém que só conheceu pela internet." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Denunciar, bloquear e fazer uma pausa",
          minutes: 4,
          goal: "Bloquear ou denunciar uma conta e controlar quanto tempo passa na aplicação.",
          text: [
            "Bloquear impede uma pessoa de ver as suas publicações ou de o contactar. Denunciar diz à aplicação que uma conta ou publicação não cumpre as suas regras, por exemplo uma burla, uma conta falsa ou assédio. Deixar de seguir ou Silenciar esconde as publicações de alguém sem lhe dizer.",
            "Estes botões costumam estar no menu de três pontos de uma publicação ou do perfil de uma pessoa. A aplicação não diz à pessoa que você a denunciou.",
            "As redes sociais são feitas para o manter a deslizar o ecrã. Muitos telefones e aplicações têm uma definição de tempo de ecrã ou de limite de tempo. Escolha horas para as ver e afaste-se se as publicações o deixarem zangado ou triste."
          ],
          steps: ["Toque nos três pontos da publicação ou do perfil.", "Escolha Denunciar e indique o motivo, ou Bloquear.", "Use Silenciar ou Deixar de seguir para esconder publicações discretamente.", "Nas Definições, procure tempo de ecrã ou um limite de tempo diário."],
          words: [["Bloquear", "impede uma pessoa de ver você ou de o contactar."], ["Denunciar", "diz à aplicação que uma conta ou publicação não cumpre as suas regras."], ["Silenciar", "esconde as publicações de alguém sem lhe dizer."]],
          slides: [
            { title: "As suas ferramentas", bullets: ["Bloquear: a pessoa não pode contactar você", "Denunciar: avisar a aplicação de um problema", "Silenciar ou Deixar de seguir: esconder publicações discretamente"] },
            { title: "Onde as encontrar", bullets: ["O menu de três pontos de uma publicação ou perfil", "A pessoa não fica a saber que você a denunciou"] },
            { title: "Faça uma pausa", bullets: ["Use as definições de tempo de ecrã ou limite de tempo", "Afaste-se se as publicações o incomodarem"] }
          ],
          tryIt: "Prática da tarefa final: em qualquer publicação, toque nos três pontos e encontre Denunciar, Bloquear e Silenciar (não carregue neles a não ser que precise). Depois verifique que a sua definição de privacidade continua só para amigos.",
          youCanNow: "bloquear, denunciar ou silenciar uma conta e definir limites para o seu tempo.",
          quickCheck: [
            { objective: "O6", q: "O que faz Denunciar?", options: ["Envia a sua morada à pessoa", "Apaga a sua conta", "Diz à aplicação que uma publicação ou conta não cumpre as suas regras", "Torna as suas publicações públicas"], answer: 2, why: "Denunciar avisa a aplicação de uma burla, conta falsa ou assédio." },
            { objective: "O6", q: "Um familiar publica tanto que quer ver menos, sem o ofender. O que faria?", options: ["Denunciá-lo como burla", "Silenciá-lo ou deixar de o seguir", "Bloqueá-lo e contar a toda a gente", "Apagar a sua própria conta"], answer: 1, why: "Silenciar ou deixar de seguir esconde as publicações dele sem lhe dizer." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter a privacidade e a segurança",
        questions: [
          { objective: "O4", q: "O que quer dizer \"público\" numa publicação?", options: ["Só você a pode ver", "Qualquer pessoa, até desconhecidos, a pode ver", "Só a sua família a pode ver", "Está apagada"], answer: 1, why: "As publicações públicas podem ser vistas por qualquer pessoa." },
          { objective: "O5", q: "Um amigo com quem já está ligado envia um novo pedido de amizade. Qual é o passo mais seguro?", options: ["Aceitar logo", "Enviar-lhe dinheiro", "Ligar ao amigo verdadeiro para confirmar antes de aceitar", "Dar-lhe o código do seu telefone"], answer: 2, why: "Os burlões copiam as contas de amigos verdadeiros." },
          { objective: "O5", q: "Alguém que conheceu pela internet no mês passado diz que o ama e precisa de dinheiro para um bilhete de avião. Isto é muito provavelmente:", options: ["Uma burla romântica", "Um pedido normal", "Uma oferta de emprego", "Uma definição de privacidade"], answer: 0, why: "Um amor pela internet que passa a pedidos de dinheiro é uma burla comum." },
          { objective: "O6", q: "Que botão impede uma pessoa de o contactar?", options: ["Gosto", "Partilhar", "Comentar", "Bloquear"], answer: 3, why: "Bloquear impede a pessoa de ver você ou de o contactar." },
          { objective: "O6", q: "Onde costumam estar Denunciar e Bloquear?", options: ["Na câmara", "No menu de três pontos de uma publicação ou perfil", "Nos seus contactos", "Na loja de aplicações"], answer: 1, why: "O menu de três pontos tem estas opções." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Aplicações de Redes Sociais e Como Usá-las",
    questions: [
      { objective: "O1", q: "Que aplicação serve sobretudo para empregos e contactos de trabalho?", options: ["TikTok", "LinkedIn", "Instagram", "YouTube"], answer: 1, why: "O LinkedIn foi feito para o trabalho e os empregos." },
      { objective: "O1", q: "Que aplicação serve sobretudo para ver vídeos e aprender com eles?", options: ["YouTube", "WhatsApp", "Nextdoor", "LinkedIn"], answer: 0, why: "O YouTube é uma aplicação de vídeos." },
      { objective: "O3", q: "Um \"feed\" é:", options: ["A sua palavra-passe", "Uma definição de privacidade", "A lista de publicações que vê ao deslizar o ecrã", "Um tipo de comentário"], answer: 2, why: "O seu feed mostra publicações das pessoas e grupos que segue." },
      { objective: "O2", q: "De onde deve instalar uma aplicação de redes sociais?", options: ["De um link que um desconhecido envia", "De uma janela que aparece no ecrã", "De qualquer site", "Da loja de aplicações oficial"], answer: 3, why: "As lojas oficiais têm as aplicações verdadeiras." },
      { objective: "O2", q: "O que pode estar num perfil seguro?", options: ["O seu nome e uma foto simpática", "A sua data de nascimento completa e a morada", "Os seus dados bancários", "As datas das suas viagens"], answer: 0, why: "O nome e a foto não fazem mal; os dados privados sim." },
      { objective: "O2", q: "Porque não publicar que está fora de férias?", options: ["Deixa a aplicação lenta", "Diz a desconhecidos que a sua casa pode estar vazia", "É contra todas as leis", "Gasta os seus dados móveis"], answer: 1, why: "As publicações de viagens podem dizer aos ladrões quando não há ninguém em casa." },
      { objective: "O2", q: "A verificação em dois passos precisa de:", options: ["Só a sua palavra-passe", "A palavra-passe de um amigo", "O seu número do banco", "A sua palavra-passe e um código do seu telefone"], answer: 3, why: "Junta uma segunda verificação a partir do seu telefone." },
      { objective: "O3", q: "Antes de seguir alguém, verifique:", options: ["A foto, os amigos em comum e as publicações", "O saldo bancário da pessoa", "A palavra-passe da pessoa", "Nada"], answer: 0, why: "Isto ajuda a ter a certeza de que é a pessoa verdadeira." },
      { objective: "O3", q: "Um grupo nas redes sociais é:", options: ["Um vírus", "Uma palavra-passe", "Um espaço para pessoas com o mesmo interesse", "Um tipo de anúncio"], answer: 2, why: "Os grupos juntam pessoas à volta de um interesse." },
      { objective: "O3", q: "Antes de tocar em Publicar, deve verificar:", options: ["A sua bateria", "O tempo lá fora", "A sua conta bancária", "Quem pode ver"], answer: 3, why: "Verificar quem pode ver protege a sua privacidade." },
      { objective: "O3", q: "Que comentário é gentil e adequado?", options: ["Um link de um desconhecido", "Um insulto", "O seu número de telefone", "\"Que foto bonita, as crianças parecem tão felizes!\""], answer: 3, why: "Escreva como se a pessoa estivesse na sala." },
      { objective: "O4", q: "As definições de privacidade controlam:", options: ["A bateria do seu telefone", "As cores da aplicação", "Quem pode ver as suas publicações e contactar você", "A velocidade da sua internet"], answer: 2, why: "Elas decidem quem vê você e quem chega até você." },
      { objective: "O4", q: "Uma boa primeira escolha de privacidade é:", options: ["Publicações em público", "Deixar qualquer pessoa enviar-lhe mensagens", "Partilhar a sua localização em todas as publicações", "Publicações só para amigos ou seguidores aprovados"], answer: 3, why: "Só para amigos deixa os desconhecidos de fora." },
      { objective: "O4", q: "Desativar a localização nas publicações:", options: ["Bloqueia os seus amigos", "Apaga a sua conta", "Impede as pessoas de saber onde está", "Deixa as fotos desfocadas"], answer: 2, why: "A sua localização deixa de aparecer nas publicações." },
      { objective: "O5", q: "Uma mensagem diz que ganhou um prémio mas tem de pagar primeiro uma pequena taxa. Isto é:", options: ["Um prémio normal", "Uma definição de privacidade", "Um pedido de amizade", "Um sinal de burla"], answer: 3, why: "A FTC indica um prémio com taxa como sinal de burla." },
      { objective: "O5", q: "Que pedido de pagamento é um sinal de alerta?", options: ["Cartões-presente", "Pagar numa loja ao balcão", "Pagar a conta do telefone no site da empresa", "Pagar a um médico na receção"], answer: 0, why: "Os burlões pedem cartões-presente porque são difíceis de rastrear." },
      { objective: "O5", q: "Nos EUA, pode denunciar uma burla nas redes sociais em:", options: ["Uma secção de comentários", "Ao burlão", "reportfraud.ftc.gov", "O seu feed"], answer: 2, why: "A FTC recebe denúncias de fraude nesse site." },
      { objective: "O6", q: "O que faz Silenciar?", options: ["Denuncia um crime", "Apaga a conta da pessoa", "Chama a polícia", "Esconde as publicações de alguém sem lhe dizer"], answer: 3, why: "Silenciar esconde as publicações discretamente." },
      { objective: "O6", q: "Quando denuncia uma conta, a aplicação:", options: ["Diz o seu nome à pessoa", "Apaga o seu perfil", "Não diz à pessoa que você a denunciou", "Cobra uma taxa"], answer: 2, why: "As denúncias ficam privadas para a pessoa denunciada." },
      { objective: "O6", q: "As publicações continuam a deixá-lo zangado. Um passo saudável é:", options: ["Deslizar ainda mais", "Usar um limite de tempo e afastar-se", "Publicar a sua morada", "Aceitar todos os pedidos"], answer: 1, why: "Os limites de tempo e as pausas protegem o seu bem-estar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 4, 5, 7, 9, 11, 12, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Definições de privacidade", objective: "O4", notYet: "As publicações continuam públicas, ou qualquer pessoa pode seguir sem aprovação.", meets: "As publicações são visíveis só para amigos ou seguidores aprovados.", exceeds: "Também limita quem pode enviar mensagens e desativa a localização nas publicações." },
      { name: "Seguir com segurança", objective: "O3", notYet: "Não seguiu ninguém, ou seguiu uma conta sem verificar se era verdadeira.", meets: "Segue um familiar ou amigo verificado e um grupo ou página local.", exceeds: "Explica como verificou a foto, os amigos em comum e as publicações." },
      { name: "Comentário gentil", objective: "O3", notYet: "Nenhum comentário, ou o comentário é rude ou partilha dados privados.", meets: "Um comentário gentil e adequado numa publicação.", exceeds: "O comentário é caloroso e fala da própria publicação." },
      { name: "Botão Denunciar", objective: "O6", notYet: "Não encontra Denunciar numa publicação ou conta.", meets: "Encontra Denunciar no menu de três pontos de uma publicação ou conta.", exceeds: "Também encontra Bloquear e Silenciar e diz quando usar cada um." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem manter as publicações privadas e a verificação em dois passos ativada 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter recusado ou denunciado um pedido de amizade falso ou uma mensagem de burla",
      "Alunos que dizem ter entrado num grupo local, da igreja, de empregos ou da família que usam"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone, um tablet ou um computador com internet",
      "Uma aplicação de redes sociais da loja oficial, e um email ou número de telefone para a inscrição",
      "Capturas de ecrã de exemplos de mensagens de burla e de pedidos de amizade falsos para praticar",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Deixe cada aluno escolher uma aplicação que sirva o seu objetivo; não obrigue todos a entrar na mesma aplicação.",
      "Façam juntos as definições de privacidade, passo a passo, no ecrã de cada aluno; nunca inicie sessão você mesmo na conta de um aluno.",
      "Use capturas de ecrã para praticar as burlas, para que ninguém tenha de contactar um burlão verdadeiro.",
      "Fale das idades mínimas se os alunos estiverem a criar contas para netos ou filhos.",
      "Alguns alunos podem já ter sido burlados pela internet; mantenha um tom sem culpa e mostre onde denunciar."
    ]
  }
};
