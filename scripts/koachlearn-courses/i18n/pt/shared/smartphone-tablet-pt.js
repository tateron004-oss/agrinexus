"use strict";

// Koach Learn course (Portuguese translation of shared/smartphone-tablet.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "smartphone-tablet-pt",
  lang: "pt",
  translationOf: "smartphone-tablet",
  category: "Seniors and Technology",
  name: "Usar um Smartphone e um Tablet",
  skills: "Usar o ecrã tátil, Chamadas e mensagens de texto, Tirar e enviar fotografias, Instalar aplicações com segurança, Bloquear e atualizar o seu aparelho",
  outcome: "usar um smartphone ou um tablet sozinho: desbloqueá-lo, fazer uma chamada, enviar uma mensagem e uma fotografia, instalar uma aplicação da loja oficial e manter o aparelho bloqueado e atualizado.",
  about: [
    "Um smartphone ou um tablet permite ligar e enviar mensagens à família, ver fotografias dos netos, ver o tempo, encontrar um autocarro e falar com o seu médico. Este curso é para quem é novo nestes aparelhos ou quer sentir-se mais seguro a usá-los.",
    "Você vai aprender a usar o ecrã tátil, as chamadas e as mensagens, a câmara, a instalar uma aplicação com segurança e a manter o aparelho bloqueado e atualizado. Os passos servem para telefones Android e para iPhone e iPad; quando são diferentes, nós dizemos.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" com o aparelho na mão. Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Com o seu próprio telefone ou tablet: desbloqueie-o, faça uma chamada ou videochamada a alguém que conhece, envie a essa pessoa uma mensagem com uma fotografia que acabou de tirar, instale uma aplicação gratuita e útil da loja oficial e confirme que o bloqueio do ecrã está ligado e que o software está atualizado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos com um smartphone ou tablet novo ou pouco usado: idosos, pessoas que receberam um telefone da família ou de um programa, pessoas que voltam à comunidade, recém-chegados e cuidadores.",
    startingPoint: "Sabem ligar o aparelho e talvez atender chamadas. Muitos não têm a certeza de como se mover no ecrã tátil, mudar o tamanho do texto, guardar contactos, enviar uma fotografia, instalar uma aplicação com segurança ou manter o aparelho bloqueado e atualizado.",
    gap: "Hoje, os telefones e os tablets são a forma de chegar à família, aos médicos, às farmácias, aos bancos e aos serviços. Quem não os sabe usar sozinho perde chamadas e mensagens, tem dificuldade em ler o ecrã, instala aplicações falsas ou perde informações privadas quando perde o telefone.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; os movimentos dos dedos e palavras como ícone e permissão são explicados",
      "Aparelhos: o telefone Android, o iPhone ou o tablet do próprio aluno; os passos são dados para os dois",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Custo: só aplicações gratuitas, da loja oficial",
      "Privacidade: os alunos nunca dão um código de uma mensagem a quem lhes liga e nunca enviam fotografias do documento de identidade ou do cartão do banco a desconhecidos"
    ],
    prerequisites: "Nenhum. É preciso um telefone ou tablet com bateria carregada."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o seu próprio telefone ou tablet", action: "desbloqueá-lo, tocar, deslizar, manter premido e afastar ou juntar os dedos, abrir uma aplicação e voltar ao ecrã inicial", standard: "sem ajuda" },
    { id: "O2", condition: "Na aplicação Definições", action: "mudar o tamanho do texto, o brilho e o volume para o aparelho ser fácil de ver e de ouvir", standard: "com cada um num nível confortável" },
    { id: "O3", condition: "Com uma pessoa com quem quer falar", action: "guardá-la como contacto, ligar-lhe, enviar-lhe uma mensagem e lidar com segurança com chamadas de números desconhecidos", standard: "com a chamada feita, a mensagem enviada e nenhum código dado a quem liga" },
    { id: "O4", condition: "Usando as aplicações Câmara e Fotografias ou Galeria", action: "tirar uma fotografia nítida e partilhá-la numa mensagem com alguém que conhece", standard: "com a fotografia focada e nada privado nela" },
    { id: "O5", condition: "Na loja oficial de aplicações", action: "encontrar e instalar uma aplicação gratuita depois de verificar o programador, a classificação e as avaliações, e escolher que permissões dar", standard: "dando só as permissões de que a aplicação precisa mesmo" },
    { id: "O6", condition: "No seu próprio aparelho", action: "ligar um bloqueio de ecrã forte, procurar uma atualização de software e ligar o Find My Device ou o Find My", standard: "com um bloqueio difícil de adivinhar e o aparelho atualizado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Sentir-se à vontade com o seu aparelho",
      lessons: [
        {
          objectives: ["O1"],
          title: "O básico do ecrã tátil: tocar, deslizar e o ecrã inicial",
          minutes: 5,
          goal: "Desbloquear o aparelho, abrir uma aplicação e voltar ao ecrã inicial.",
          text: [
            "Um smartphone é um telefone que também é um pequeno computador. Um tablet é a mesma ideia, com um ecrã maior. A maioria usa Android (feito pela Google, usado pela Samsung, pela Motorola e outras) ou iOS e iPadOS (feitos pela Apple para o iPhone e o iPad).",
            "Você controla-o com o dedo. Tocar: tocar e largar, para abrir alguma coisa. Deslizar: passar o dedo pelo ecrã, para mudar de página ou descer na página. Manter premido: deixar o dedo em cima, para ver mais opções. Afastar ou juntar os dedos: dois dedos a afastar para aumentar, a juntar para diminuir.",
            "O ecrã inicial mostra as suas aplicações como pequenas imagens chamadas ícones. Para voltar ao início, deslize para cima a partir da parte de baixo do ecrã, ou carregue no botão de início se o seu aparelho tiver um."
          ],
          steps: ["Carregue no botão do lado ou de cima para acender o ecrã.", "Deslize para cima e escreva o seu código, ou use a impressão digital ou o rosto.", "Toque no ícone de uma aplicação para a abrir.", "Deslize para cima a partir de baixo (ou carregue no botão de início) para voltar ao início.", "Afaste dois dedos em cima de uma fotografia para a aumentar."],
          words: [["Smartphone", "um telefone que também é um pequeno computador com ecrã tátil."], ["Ícone", "uma pequena imagem em que toca para abrir uma aplicação."], ["Ecrã inicial", "o ecrã principal que mostra as suas aplicações."], ["Deslizar", "passar o dedo pelo ecrã."]],
          slides: [
            { title: "Dois tipos principais", bullets: ["Android: Samsung, Motorola, Google Pixel e outros", "iPhone e iPad, da Apple"] },
            { title: "Movimentos dos dedos", bullets: ["Tocar: abrir alguma coisa", "Deslizar: descer na página ou mudar de página", "Manter premido: mais opções", "Afastar ou juntar os dedos: aumentar e diminuir"] },
            { title: "Voltar ao início", bullets: ["Deslize para cima a partir da parte de baixo", "Ou carregue no botão de início, se tiver um"] }
          ],
          tryIt: "Acenda e desbloqueie o seu aparelho. Abra a aplicação Câmara ou Tempo, deslize um pouco e depois volte ao ecrã inicial. Faça isto três vezes, até ficar fácil.",
          youCanNow: "desbloquear o seu aparelho, abrir uma aplicação com um toque, descer na página a deslizar e voltar ao ecrã inicial.",
          quickCheck: [
            { objective: "O1", q: "O que faz manter premido?", options: ["Desliga o telefone", "Mostra mais opções", "Tira uma fotografia", "Faz uma chamada"], answer: 1, why: "Deixar o dedo em cima mostra mais opções." },
            { objective: "O1", q: "Está numa aplicação e quer voltar ao ecrã inicial. O que faz?", options: ["Desliga e volta a ligar o telefone", "Junta dois dedos", "Tira a bateria", "Desliza para cima a partir da parte de baixo, ou carrega no botão de início"], answer: 3, why: "Deslizar para cima a partir de baixo, ou o botão de início, leva-o de volta ao ecrã inicial." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tornar mais fácil ver e ouvir",
          minutes: 4,
          goal: "Aumentar o texto e acertar o volume e o brilho para você.",
          text: [
            "Pode mudar o seu aparelho para ser mais fácil de usar. Tudo isto está na aplicação Definições, que normalmente tem um ícone de roda dentada.",
            "Texto maior: abra Definições, procure Ecrã ou Acessibilidade e encontre o tamanho do texto ou da letra. Brilho: está em Ecrã, ou deslize para baixo a partir de cima do ecrã para ver os controlos rápidos. Volume: use os botões do lado.",
            "Se não encontrar alguma coisa, use a caixa de pesquisa no topo das Definições e escreva uma palavra como \"tamanho do texto\". Os aparelhos Android e Apple também têm funções de acessibilidade, como uma lupa e a leitura do ecrã em voz alta."
          ],
          steps: ["Abra a aplicação Definições (ícone de roda dentada).", "Toque na caixa de pesquisa no topo e escreva \"tamanho do texto\".", "Mova a barra até o texto ficar fácil de ler.", "Deslize para baixo a partir de cima para mudar o brilho.", "Use os botões do lado para o volume."],
          words: [["Definições", "a aplicação onde muda a forma como o aparelho funciona (em alguns aparelhos chama-se Configurações)."], ["Acessibilidade", "funções que tornam um aparelho mais fácil de ver, ouvir ou tocar."]],
          slides: [
            { title: "Aplicação Definições", bullets: ["Normalmente um ícone de roda dentada", "Onde muda a forma como o aparelho funciona"] },
            { title: "Mais fácil de ver e de ouvir", bullets: ["Tamanho do texto em Ecrã ou Acessibilidade", "Brilho em Ecrã ou nos controlos rápidos", "Volume: botões do lado"] },
            { title: "Não encontra?", bullets: ["Use a caixa de pesquisa no topo das Definições", "Escreva uma palavra como \"tamanho do texto\""] }
          ],
          tryIt: "Abra Definições, pesquise \"tamanho do texto\" e aumente o texto um nível. Depois deslize para baixo a partir de cima e mude o brilho.",
          youCanNow: "aumentar o texto e acertar o brilho e o volume para o seu aparelho ser confortável de usar.",
          quickCheck: [
            { objective: "O2", q: "Que ícone tem normalmente a aplicação Definições?", options: ["Uma câmara", "Um balão de conversa", "Uma roda dentada", "Um clipe"], answer: 2, why: "As Definições têm normalmente um ícone de roda dentada." },
            { objective: "O2", q: "O ecrã está escuro demais para ler na rua. O que faz?", options: ["Desliza para baixo a partir de cima e aumenta o brilho", "Compra um telefone novo", "Carrega nos botões do volume", "Apaga uma aplicação"], answer: 0, why: "Os controlos rápidos do brilho aparecem quando desliza para baixo a partir de cima do ecrã." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Chamadas, contactos e mensagens de texto",
          minutes: 5,
          goal: "Guardar um contacto, fazer uma chamada e enviar uma mensagem de texto.",
          text: [
            "A aplicação Telefone faz chamadas. A aplicação Contactos (em alguns telefones faz parte da aplicação Telefone) guarda nomes com números, para poder ligar tocando num nome em vez de escrever o número.",
            "A aplicação Mensagens envia mensagens de texto. Toque no botão de nova mensagem, escolha um contacto, escreva na caixa em baixo e toque na seta de enviar.",
            "Se um número desconhecido ligar, pode deixar ir para o correio de voz. Quem liga a sério deixa uma mensagem. Nunca dê um código de uma mensagem de texto a alguém que lhe liga."
          ],
          steps: ["Abra Contactos (ou Telefone e depois Contactos).", "Toque no botão + para juntar uma pessoa: nome e número. Guarde.", "Toque no nome e depois no ícone do telefone para ligar.", "Abra Mensagens e toque no botão de nova mensagem.", "Escolha o contacto, escreva a mensagem e toque em enviar."],
          words: [["Contacto", "um nome e um número de telefone guardados."], ["Mensagem de texto", "uma mensagem escrita curta enviada de um telefone para outro (SMS)."], ["Correio de voz", "uma mensagem gravada que fica quando você não atende."]],
          slides: [
            { title: "Três aplicações", bullets: ["Telefone: fazer chamadas", "Contactos: guardar nomes e números", "Mensagens: enviar mensagens de texto"] },
            { title: "Juntar um contacto", bullets: ["Toque em +", "Escreva o nome e o número", "Toque em Guardar"] },
            { title: "Enviar uma mensagem", bullets: ["Botão de nova mensagem", "Escolha o contacto", "Escreva e toque na seta de enviar"] },
            { title: "Números desconhecidos", bullets: ["Deixe ir para o correio de voz", "Nunca dê um código de uma mensagem a quem liga"] }
          ],
          tryIt: "Guarde um familiar ou um amigo como contacto. Ligue-lhe tocando no nome e depois envie-lhe uma mensagem curta: \"Estou a praticar com o meu telefone!\"",
          youCanNow: "guardar um contacto, ligar a alguém pelo nome e enviar uma mensagem de texto.",
          quickCheck: [
            { objective: "O3", q: "Que aplicação envia mensagens de texto?", options: ["Mensagens", "Câmara", "Definições", "Fotografias"], answer: 0, why: "A aplicação Mensagens envia mensagens de texto." },
            { objective: "O3", q: "Um número que não conhece liga-lhe. O que faz?", options: ["Atende e dá os seus dados do banco", "Liga de volta logo e lê os códigos que tiver", "Deixa ir para o correio de voz; quem liga a sério deixa uma mensagem", "Desliga o telefone durante uma semana"], answer: 2, why: "Deixar as chamadas desconhecidas irem para o correio de voz é seguro; quem liga a sério deixa uma mensagem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Sentir-se à vontade com o seu aparelho",
        questions: [
          { objective: "O1", q: "Que movimento dos dedos aumenta uma fotografia?", options: ["Tocar uma vez", "Afastar dois dedos", "Carregar no botão do volume", "Deslizar para baixo"], answer: 1, why: "Afastar dois dedos aumenta a imagem." },
          { objective: "O1", q: "Como volta normalmente ao ecrã inicial?", options: ["Desliga o telefone", "Abana o telefone", "Desliza para cima a partir de baixo ou carrega no botão de início", "Abre a câmara"], answer: 2, why: "Deslizar para cima a partir de baixo ou carregar no botão de início leva-o ao ecrã inicial." },
          { objective: "O2", q: "O texto do seu telefone é pequeno demais. Onde resolve isso?", options: ["Em Definições, em Ecrã ou Acessibilidade", "Na aplicação Câmara", "Na aplicação Telefone", "Numa mensagem de texto"], answer: 0, why: "O tamanho do texto está em Definições, em Ecrã ou Acessibilidade." },
          { objective: "O3", q: "Porquê guardar alguém como contacto?", options: ["Torna o telefone mais rápido", "Carrega a bateria", "Esconde o número da pessoa", "Para poder ligar ou enviar mensagens tocando no nome"], answer: 3, why: "Um contacto deixa-o chegar a alguém pelo nome." },
          { objective: "O3", q: "Alguém liga e pede-lhe para ler um código que acabou de receber por mensagem. O que faz?", options: ["Lê o código", "Envia o código por mensagem", "Não o partilha e desliga", "Publica-o na internet"], answer: 2, why: "Esse código protege a sua conta; as empresas verdadeiras não o pedem." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fotografias, aplicações e manter o aparelho seguro",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tirar e enviar fotografias",
          minutes: 5,
          goal: "Tirar uma fotografia e enviá-la a alguém numa mensagem.",
          text: [
            "Abra a aplicação Câmara, aponte para o que quer e toque no botão grande e redondo. Segure o aparelho sem mexer. Toque no ecrã em cima do que está a fotografar para ficar nítido.",
            "As suas fotografias ficam guardadas na aplicação Fotografias ou Galeria. Para enviar uma, abra-a, toque no botão Partilhar (muitas vezes um quadrado com uma seta ou três pontos ligados por linhas) e escolha Mensagens ou e-mail, e depois a pessoa.",
            "Pense antes de partilhar. Não envie fotografias do seu documento de identidade, dos cartões do banco, de bilhetes com código de barras nem de nada privado a pessoas que não conhece."
          ],
          steps: ["Abra a aplicação Câmara.", "Aponte, segure sem mexer e toque no que quer fotografar para focar.", "Toque no botão grande e redondo.", "Abra Fotografias ou Galeria e toque na fotografia.", "Toque em Partilhar, escolha Mensagens, escolha a pessoa e envie."],
          words: [["Galeria ou Fotografias", "a aplicação onde as suas imagens ficam guardadas."], ["Botão Partilhar", "o botão que envia uma fotografia ou um ficheiro a alguém ou a outra aplicação."]],
          slides: [
            { title: "Tirar uma fotografia", bullets: ["Abra a aplicação Câmara", "Toque no que quer fotografar para focar", "Toque no botão grande e redondo"] },
            { title: "Enviar uma fotografia", bullets: ["Abra Fotografias ou Galeria", "Toque em Partilhar", "Escolha Mensagens e a pessoa"] },
            { title: "Pense antes de partilhar", bullets: ["Nada de fotografias de documentos de identidade ou cartões do banco", "Nada de papéis privados para desconhecidos"] }
          ],
          tryIt: "Tire uma fotografia de algo bonito perto de você: uma planta, uma refeição ou uma paisagem. Envie-a numa mensagem ao contacto que guardou na Lição 3.",
          youCanNow: "tirar uma fotografia nítida e partilhá-la com alguém por mensagem.",
          quickCheck: [
            { objective: "O4", q: "O que pode fazer com uma fotografia usando o botão Partilhar?", options: ["Apagá-la", "Aumentá-la", "Tirá-la outra vez", "Enviá-la por mensagem ou e-mail"], answer: 3, why: "Partilhar deixa-o escolher Mensagens ou e-mail e a pessoa a quem enviar a fotografia." },
            { objective: "O4", q: "As suas fotografias ficam sempre tremidas. O que faz?", options: ["Abana o telefone enquanto tira a fotografia", "Segura sem mexer e toca no que quer fotografar no ecrã antes de a tirar", "Baixa o brilho", "Tira-a de muito longe"], answer: 1, why: "Segurar sem mexer e tocar no que quer fotografar torna a fotografia nítida." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Instalar aplicações com segurança",
          minutes: 5,
          goal: "Encontrar e instalar uma aplicação gratuita da loja oficial.",
          text: [
            "As aplicações dão ao seu aparelho coisas novas para fazer: mapas, o tempo, videochamadas, o seu banco, a sua farmácia. Instale-as só a partir da loja oficial: a Google Play Store no Android, ou a App Store no iPhone e no iPad.",
            "Pesquise a aplicação pelo nome. Antes de instalar, veja o nome da empresa que a fez (o programador), o número de avaliações e a classificação. As aplicações falsas copiam nomes verdadeiros, por isso confirme que é da empresa verdadeira.",
            "Quando uma aplicação pede permissão para usar a sua localização, a câmara, os contactos ou o microfone, pergunte a si mesmo se precisa mesmo disso. Uma aplicação de lanterna não precisa dos seus contactos. Pode dizer que não e mudar isso mais tarde nas Definições."
          ],
          steps: ["Abra a Play Store (Android) ou a App Store (Apple).", "Toque em Pesquisar e escreva o nome da aplicação.", "Veja o nome do programador, a classificação e o número de avaliações.", "Toque em Instalar ou Obter.", "Quando pedir permissões, dê só as que fazem sentido."],
          words: [["Aplicação", "um programa no seu telefone ou tablet que faz um tipo de trabalho (também se diz app)."], ["Programador", "a empresa ou a pessoa que fez a aplicação."], ["Permissão", "o seu sim para uma aplicação usar algo como a câmara ou a localização."]],
          slides: [
            { title: "Só lojas oficiais", bullets: ["Android: Google Play Store", "iPhone e iPad: App Store"] },
            { title: "Antes de instalar", bullets: ["Confirme que o programador é a empresa verdadeira", "Veja a classificação e o número de avaliações", "As aplicações falsas copiam nomes verdadeiros"] },
            { title: "Permissões", bullets: ["A aplicação precisa mesmo disso?", "Uma lanterna não precisa dos seus contactos", "Pode mudar isso mais tarde nas Definições"] }
          ],
          tryIt: "Abra a sua loja oficial de aplicações e instale uma aplicação gratuita que lhe seja útil, por exemplo uma do tempo, a da sua farmácia ou uma de autocarros. Veja primeiro o nome do programador.",
          youCanNow: "encontrar, verificar e instalar uma aplicação da loja oficial e decidir que permissões dar.",
          quickCheck: [
            { objective: "O5", q: "Porquê ver o nome do programador antes de instalar uma aplicação?", options: ["Para saber o preço da aplicação numa loja", "Para mudar o tamanho do texto do telefone", "As aplicações falsas copiam nomes verdadeiros, por isso confirme que é da empresa verdadeira", "Para ver quem lhe ligou"], answer: 2, why: "As aplicações falsas copiam nomes de aplicações verdadeiras, por isso o nome do programador mostra se é verdadeira." },
            { objective: "O5", q: "Uma aplicação de jogo pede permissão para usar o seu microfone e os seus contactos. O que faz?", options: ["Diz que não, a não ser que precise mesmo; pode mudar isso mais tarde nas Definições", "Diz sempre que sim a tudo", "Apaga os seus contactos", "Dá-lhe a sua palavra-passe"], answer: 0, why: "Dê só as permissões de que uma aplicação precisa mesmo; pode mudá-las mais tarde." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter o aparelho bloqueado, atualizado e carregado",
          minutes: 5,
          goal: "Ligar um bloqueio de ecrã e procurar uma atualização de software.",
          text: [
            "Um bloqueio de ecrã impede outras pessoas de usar o seu telefone se ele se perder ou for roubado. Use um código PIN de pelo menos seis números, ou a impressão digital ou o rosto. Não use 123456 nem a sua data de nascimento.",
            "As atualizações corrigem problemas de segurança. Encontre-as nas Definições: no Android procure Atualização de software ou Atualização do sistema; no iPhone e no iPad vá a Geral e depois a Atualização de software. Ligue o carregador e use Wi-Fi quando atualizar.",
            "Se perder o telefone, o Find My Device do Android e o Find My da Apple podem mostrá-lo num mapa ou bloqueá-lo. Ligue-os agora, enquanto ainda tem o telefone."
          ],
          steps: ["Abra Definições e pesquise \"bloqueio de ecrã\" ou \"código\".", "Escolha um PIN de pelo menos seis números, ou a impressão digital ou o rosto.", "Pesquise nas Definições \"atualização de software\" e instale as atualizações que houver.", "Pesquise nas Definições \"Find My\" ou \"Encontrar\" e confirme que está ligado.", "Carregue o aparelho todas as noites."],
          words: [["PIN", "um código de números que desbloqueia o seu aparelho."], ["Atualização de software", "uma correção e melhoria gratuita do fabricante do aparelho."], ["Find My Device / Find My", "ferramentas do Android e da Apple que ajudam a encontrar um aparelho perdido (em português podem aparecer como Encontrar o meu dispositivo e Encontrar)."]],
          slides: [
            { title: "Bloqueie o ecrã", bullets: ["PIN de seis números ou mais", "Ou a impressão digital ou o rosto", "Não use 123456 nem a sua data de nascimento"] },
            { title: "Atualize o aparelho", bullets: ["As atualizações corrigem problemas de segurança", "Definições e depois Atualização de software", "Ligue o carregador e use Wi-Fi"] },
            { title: "Se o perder", bullets: ["Android: Find My Device", "Apple: Find My", "Ligue-o agora"] }
          ],
          tryIt: "Prática da tarefa final: confirme que o bloqueio de ecrã está ligado, pesquise nas Definições \"atualização de software\" para ver se há alguma à espera e ligue o Find My Device ou o Find My. Depois faça a tarefa final: ligue, envie uma fotografia acabada de tirar e instale uma aplicação útil.",
          youCanNow: "manter o seu aparelho bloqueado, atualizado e fácil de encontrar se o perder.",
          quickCheck: [
            { objective: "O6", q: "Qual destes é um bloqueio de ecrã fraco?", options: ["A sua impressão digital", "O seu rosto", "Um PIN de seis números difícil de adivinhar", "123456"], answer: 3, why: "123456 ou a sua data de nascimento são fáceis de adivinhar." },
            { objective: "O6", q: "Quer poder encontrar o seu telefone se o perder. O que faz agora?", options: ["Espera até o perder e depois procura uma opção", "Liga o Find My Device (Android) ou o Find My (Apple)", "Escreve o seu PIN atrás do telefone", "Desliga o bloqueio de ecrã"], answer: 1, why: "Estas ferramentas têm de ser ligadas enquanto ainda tem o telefone." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fotografias, aplicações e manter o aparelho seguro",
        questions: [
          { objective: "O4", q: "Onde ficam guardadas as fotografias que tira?", options: ["Na aplicação Telefone", "Em Fotografias ou Galeria", "Nas Definições", "Na loja de aplicações"], answer: 1, why: "A aplicação Fotografias ou Galeria guarda as suas imagens." },
          { objective: "O5", q: "Qual é o sítio seguro para instalar aplicações num iPhone?", options: ["Um link numa mensagem de um desconhecido", "Qualquer site", "Um anúncio que aparece no ecrã", "A App Store"], answer: 3, why: "Instale aplicações só a partir da loja oficial." },
          { objective: "O5", q: "Uma aplicação de lanterna pede para ver os seus contactos. Qual é a melhor escolha?", options: ["Dizer que não; ela não precisa deles", "Dizer que sim a tudo", "Dar-lhe a sua palavra-passe", "Desinstalar os seus contactos"], answer: 0, why: "Dê só as permissões de que uma aplicação precisa mesmo." },
          { objective: "O6", q: "Qual é o bloqueio de ecrã mais forte?", options: ["Nenhum bloqueio", "123456", "A sua data de nascimento", "Um PIN de seis números que não seja fácil de adivinhar"], answer: 3, why: "Um PIN que não é óbvio é mais difícil de adivinhar." },
          { objective: "O6", q: "Porquê instalar as atualizações de software?", options: ["Apagam as suas fotografias", "Corrigem problemas de segurança", "Custam dinheiro", "Desligam o telefone para sempre"], answer: 1, why: "As atualizações corrigem problemas que os criminosos podiam usar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Usar um Smartphone e um Tablet",
    questions: [
      { objective: "O1", q: "Que empresa faz o iPhone?", options: ["Samsung", "Google", "Apple", "Motorola"], answer: 2, why: "A Apple faz o iPhone e o iPad." },
      { objective: "O1", q: "O que faz um toque?", options: ["Abre alguma coisa", "Desliga o telefone", "Apaga uma aplicação", "Faz uma chamada sozinho"], answer: 0, why: "Um toque rápido abre uma aplicação ou escolhe alguma coisa." },
      { objective: "O1", q: "Para descer numa página, você:", options: ["Junta os dedos", "Carrega no botão de ligar", "Desliza para cima ou para baixo", "Abana o aparelho"], answer: 2, why: "Deslizar move a página." },
      { objective: "O1", q: "As pequenas imagens no ecrã inicial chamam-se:", options: ["Contactos", "Ícones", "Mensagens", "Atualizações"], answer: 1, why: "Os ícones são as imagens em que toca para abrir aplicações." },
      { objective: "O2", q: "Que aplicação tem um ícone de roda dentada e deixa mudar o tamanho do texto?", options: ["Câmara", "Mensagens", "Definições", "Fotografias"], answer: 2, why: "As Definições são onde muda a forma como o aparelho funciona." },
      { objective: "O2", q: "Não encontra uma opção. O que é mais rápido?", options: ["Comprar um telefone novo", "Usar a caixa de pesquisa no topo das Definições", "Desligar e voltar a ligar", "Abrir a câmara"], answer: 1, why: "A pesquisa das Definições encontra as coisas pelo nome." },
      { objective: "O2", q: "Onde pode mudar o brilho depressa na maioria dos aparelhos?", options: ["Deslizando para baixo a partir de cima do ecrã", "Na aplicação Telefone", "Na loja de aplicações", "Nos seus contactos"], answer: 0, why: "Os controlos rápidos no topo incluem o brilho." },
      { objective: "O3", q: "Para ligar a alguém tocando no nome, primeiro:", options: ["Instale uma aplicação nova", "Guarde a pessoa como contacto", "Tire uma fotografia da pessoa", "Atualize o telefone"], answer: 1, why: "Um contacto guardado liga um nome a um número." },
      { objective: "O3", q: "Que aplicação envia mensagens de texto?", options: ["Câmara", "Definições", "Tempo", "Mensagens"], answer: 3, why: "A aplicação Mensagens envia e recebe mensagens de texto." },
      { objective: "O3", q: "Um número desconhecido liga. Uma escolha segura é:", options: ["Deixar ir para o correio de voz", "Dar um código das suas mensagens", "Dizer o seu PIN", "Enviar uma fotografia do seu cartão do banco"], answer: 0, why: "Quem liga a sério deixa uma mensagem no correio de voz." },
      { objective: "O4", q: "Para uma fotografia ficar nítida, você:", options: ["Abana o telefone", "Toca no que quer fotografar no ecrã antes de a tirar", "Desliga o ecrã", "Junta os dedos"], answer: 1, why: "Tocar no que quer fotografar diz à câmara onde focar." },
      { objective: "O4", q: "Para enviar uma fotografia, abra-a e toque em:", options: ["Apagar", "Volume", "Definições", "Partilhar"], answer: 3, why: "Partilhar envia a fotografia a uma pessoa ou a uma aplicação." },
      { objective: "O4", q: "Que fotografia nunca deve enviar a um desconhecido?", options: ["Um pôr do sol", "Uma flor", "O seu documento de identidade ou cartão do banco", "O seu almoço"], answer: 2, why: "Os documentos e os cartões podem ser usados para lhe roubar." },
      { objective: "O5", q: "A loja oficial de aplicações no Android é:", options: ["Um link numa mensagem", "Um anúncio que aparece no ecrã", "Qualquer site", "A Google Play Store"], answer: 3, why: "A Google Play é a loja oficial do Android." },
      { objective: "O5", q: "Antes de instalar uma aplicação, verifique:", options: ["Nada", "Só a cor do ícone", "O programador, a classificação e as avaliações", "O saldo do seu banco"], answer: 2, why: "As aplicações falsas copiam nomes, por isso veja quem a fez." },
      { objective: "O5", q: "Uma permissão é:", options: ["Um tipo de fotografia", "O seu sim para uma aplicação usar coisas como a câmara ou a localização", "Uma conta do telefone", "Um tipo de mensagem"], answer: 1, why: "As aplicações pedem permissão para usar partes do seu aparelho." },
      { objective: "O6", q: "Um bloqueio de ecrã ajuda porque:", options: ["Torna as chamadas mais baratas", "Tira fotografias", "Aumenta o texto", "Impede outras pessoas de usar o seu telefone se o perder"], answer: 3, why: "Um bloqueio mantém as suas informações privadas." },
      { objective: "O6", q: "Num iPhone, a Atualização de software está em:", options: ["Câmara", "Fotografias", "Mensagens", "Definições e depois Geral"], answer: 3, why: "No iPhone, as atualizações estão em Definições, Geral, Atualização de software." },
      { objective: "O6", q: "Quando instala uma atualização grande, o melhor é:", options: ["Desligar o Wi-Fi", "Ter pouca bateria", "Usar Wi-Fi e ligar o carregador", "Fazê-la durante uma chamada"], answer: 2, why: "O Wi-Fi e a corrente impedem que a atualização pare a meio." },
      { objective: "O6", q: "O Find My Device (Android) e o Find My (Apple) ajudam a:", options: ["Encontrar tarifários baratos", "Encontrar novos amigos", "Encontrar aplicações gratuitas", "Encontrar um aparelho perdido num mapa"], answer: 3, why: "Mostram, bloqueiam ou fazem tocar um aparelho perdido." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      11,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Chamada",
        objective: "O3",
        notYet: "Não fez nenhuma chamada ou videochamada, ou precisou de ajuda para encontrar a pessoa.",
        meets: "Liga ou faz uma videochamada a um contacto guardado sem ajuda.",
        exceeds: "Antes disso, também guarda um contacto novo com nome e número."
      },
      {
        name: "Mensagem com fotografia",
        objective: "O4",
        notYet: "A mensagem ou a fotografia não foi enviada, ou a fotografia mostra informações privadas.",
        meets: "Tira uma fotografia nítida e envia-a numa mensagem a alguém que conhece.",
        exceeds: "Usa o botão Partilhar a partir de Fotografias ou Galeria e junta uma mensagem curta."
      },
      {
        name: "Instalar uma aplicação",
        objective: "O5",
        notYet: "Nenhuma aplicação instalada, ou veio de fora da loja oficial.",
        meets: "Uma aplicação gratuita instalada da loja oficial depois de ver o programador e as avaliações.",
        exceeds: "Também diz que não a uma permissão de que a aplicação não precisa."
      },
      {
        name: "Bloqueio e atualizações",
        objective: "O6",
        notYet: "Nenhum bloqueio de ecrã, ou um bloqueio fácil como 123456.",
        meets: "Um bloqueio de ecrã forte está ligado e o software está atualizado.",
        exceeds: "O Find My Device ou o Find My também está ligado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem usar o telefone ou o tablet sozinhos para chamadas, mensagens e fotografias 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter instalado com segurança uma aplicação útil da loja oficial, como a da farmácia, do banco ou de videochamadas",
      "Alunos que seguem para outro curso, como Noções Básicas de Internet ou E-mail e Comunicação pela Internet"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "O smartphone ou tablet do próprio aluno, carregado (Android, iPhone ou iPad)",
      "Wi-Fi para instalar aplicações e atualizações",
      "O número de um amigo ou familiar, ou de um colega da turma, para ligar e enviar mensagens",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Junte os alunos por tipo de aparelho (Android ou Apple) para os passos no ecrã serem iguais ao que eles veem.",
      "Deixe os alunos fazer eles próprios todos os toques; se precisar de mostrar alguma coisa, use o seu próprio aparelho.",
      "Algumas instalações de aplicações pedem a palavra-passe de uma conta; deixe o aluno escrevê-la em privado e nunca peça nem anote o PIN ou a palavra-passe dele.",
      "Peça aos alunos para ligarem e enviarem mensagens uns aos outros na aula, para ninguém ter de partilhar um número pessoal que prefere manter privado.",
      "Traga um carregador e deixe as atualizações para o fim da sessão, porque podem demorar muito."
    ]
  }
};
