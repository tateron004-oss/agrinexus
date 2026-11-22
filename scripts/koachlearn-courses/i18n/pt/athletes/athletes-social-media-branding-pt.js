"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-social-media-branding.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US names (FTC, NCAA, NIL) are kept and explained.

module.exports = {
  id: "athletes-social-media-branding-pt",
  lang: "pt",
  translationOf: "athletes-social-media-branding",
  category: "Athletes",
  name: "Marca Pessoal nas Redes Sociais para Atletas",
  skills: "Definir a sua marca de atleta, Escrever uma boa biografia, Escolher pilares de conteúdo, Rever as suas publicações antigas, Configurar a privacidade e a segurança",
  outcome: "criar ou arrumar um perfil de rede social como uma marca de atleta clara e segura: uma frase de marca, uma boa biografia e foto de perfil, três pilares de conteúdo, uma revisão das suas publicações antigas e definições de privacidade seguras.",
  about: [
    "Este curso é para atletas que sabem que treinadores, recrutadores, marcas e futuros empregadores olham para as suas redes sociais, e querem que elas ajudem, e não que prejudiquem. Os treinadores podem usá-lo para ensinar as suas equipas.",
    "A sua marca é aquilo em que as pessoas pensam quando veem o seu nome. Você vai decidir o que quer que ela seja, criar um perfil que a mostre, escolher sobre o que publicar, limpar as suas publicações antigas e proteger a sua segurança.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Faça a marca de um perfil de rede social: escreva a sua frase de marca, atualize a biografia e a foto de perfil, escreva três pilares de conteúdo com duas ideias de publicação cada, reveja as suas últimas 30 publicações e corrija o que não combina com a marca, e verifique as suas definições de privacidade e segurança.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e de clubes que sabem que treinadores, recrutadores, marcas e futuros empregadores olham para as suas redes sociais, e treinadores que ensinam as suas equipas sobre isso.",
    startingPoint: "Têm uma ou mais contas em redes sociais e publicam com frequência. Poucos têm uma frase de marca escrita, uma biografia pensada, pilares de conteúdo, uma revisão recente das publicações antigas ou definições de privacidade escolhidas de propósito.",
    gap: "Publicações antigas, perfis pouco claros e definições abertas podem custar aos atletas oportunidades de recrutamento, de patrocínio e de emprego, e expô-los a desconhecidos e a burlas. Uma marca clara e segura ajuda-os a serem notados pelas razões certas e a ficarem protegidos.",
    constraints: [
      "Linguagem simples, mais ou menos ao nível do 7.º ano",
      "Um telefone com as aplicações de redes sociais do atleta e um assistente de IA gratuito",
      "Cerca de 60 minutos no total",
      "Regras de idade das plataformas; os atletas com menos de 18 anos falam com um dos pais ou com o encarregado de educação antes de partilhar a escola ou a cidade",
      "Regras da equipa, da escola, da liga, de NIL e de declaração da FTC; os menus de definições mudam de aplicação para aplicação"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o seu desporto, os seus valores e os seus interesses", action: "escrever uma frase de marca", standard: "que diga o seu desporto e posição, um valor e uma coisa verdadeira sobre você para além do desporto" },
    { id: "O2", condition: "Num perfil de rede social", action: "escrever uma biografia curta e escolher uma foto de perfil que combinem com a sua marca", standard: "com o desporto, a posição, um valor e um link, uma foto nítida e bem iluminada, e sem dados privados" },
    { id: "O3", condition: "Usando a sua frase de marca e um assistente de IA", action: "escolher três pilares de conteúdo com duas ideias de publicação para cada um", standard: "com cada pilar e cada ideia a combinar com a sua frase de marca" },
    { id: "O4", condition: "No seu próprio perfil", action: "verificar as suas últimas 30 publicações, comentários, partilhas e marcações com o teste do treinador, do patrocinador e dos avós", standard: "arquivando, ocultando, apagando ou retirando a marcação de tudo o que falha o teste" },
    { id: "O5", condition: "Nas definições de cada aplicação", action: "definir quem lhe pode enviar mensagens, comentar e marcá-lo, desligar a localização nas publicações e ativar a verificação em dois passos", standard: "com todas as definições verificadas e um plano para guardar provas, bloquear, denunciar e avisar um adulto se for ameaçado" },
    { id: "O6", condition: "Usando as regras da sua equipa", action: "escrever as suas regras pessoais de publicação, incluindo como declara acordos com marcas e como lida com comentários negativos", standard: "com três regras \"Eu sempre\", três regras \"Eu nunca\" e uma regra sobre declarar acordos e verificar as regras de NIL" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Definir a sua marca",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é uma marca de atleta",
          minutes: 4,
          goal: "Escrever uma frase de marca.",
          text: [
            "Uma marca é a imagem que as pessoas têm na cabeça quando ouvem o seu nome. Você já tem uma, quer a tenha planeado quer não. Treinadores, marcas e fãs formam-na a partir das suas publicações, dos seus comentários e da forma como você age.",
            "A sua marca é mais do que o seu desporto. É o seu desporto, mais os seus valores, mais aquilo que faz de você quem é: \"Uma base trabalhadora que adora ensinar os mais novos e quer estudar enfermagem.\"",
            "Escreva uma frase de marca: \"Sou [desporto e posição] que [o que valorizo ou faço] e [outra coisa verdadeira sobre mim].\" Use um assistente de IA para sugerir palavras, mas escolha palavras honestas."
          ],
          steps: ["Escreva o seu desporto e a sua posição.", "Escreva três valores (como trabalho duro, fé, família, liderança).", "Escreva um interesse fora do desporto.", "Escreva uma frase de marca."],
          words: [["Marca", "a imagem que as pessoas têm em mente quando ouvem o seu nome."], ["Valores", "as coisas que mais importam para você e que guiam a forma como age."]],
          slides: [
            { title: "Você já tem uma marca", bullets: ["Feita de publicações, comentários e ações", "Vista por treinadores, marcas e fãs"] },
            { title: "Marca =", bullets: ["O seu desporto", "Mais os seus valores", "Mais aquilo que faz de você quem é"] },
            { title: "Frase de marca", bullets: ["\"Sou [desporto/posição] que [valor]", "e [algo verdadeiro sobre mim].\""] }
          ],
          tryIt: "Escreva a sua frase de marca. Peça a um assistente de IA mais três maneiras de a dizer e depois escolha, ou misture, a que soa mais como você.",
          youCanNow: "descrever a sua marca de atleta numa frase honesta.",
          quickCheck: [
            { objective: "O1", q: "Tem uma marca mesmo que nunca a tenha planeado?", options: ["Não, só os profissionais têm marca", "Só se tiver 10 000 seguidores", "Sim, as pessoas formam-na a partir das suas publicações, comentários e ações", "Só se uma empresa o patrocinar"], answer: 2, why: "Você já tem uma marca, quer a tenha planeado quer não." },
            { objective: "O1", q: "A IA sugere uma frase de marca que diz que você é \"o melhor atirador do estado\", o que não é verdade. O que faz?", options: ["Usa-a; soa forte", "Muda-a para palavras honestas sobre você", "Publica-a e vê quem repara", "Pede à IA para a tornar ainda maior"], answer: 1, why: "Escolha palavras honestas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Foto de perfil, nome e biografia",
          minutes: 5,
          goal: "Escrever uma biografia clara e escolher uma foto de perfil que combinem com a sua marca.",
          text: [
            "O seu perfil é a sua porta de entrada. Em poucos segundos, as pessoas devem saber quem você é, que desporto pratica e porque devem segui-lo.",
            "Use uma foto nítida e bem iluminada do seu rosto ou de você em ação. Use um nome que as pessoas consigam encontrar. Uma boa biografia é curta: desporto e posição, nível ou equipa (se for permitido), um valor ou interesse, e um link ou um convite à ação, como o seu vídeo de melhores momentos.",
            "Não ponha na biografia a morada de casa, o número de telefone, o horário das aulas nem o local exato da escola. Se for menor de idade, pergunte a um dos pais ou ao encarregado de educação antes de indicar a sua escola ou a sua cidade."
          ],
          steps: ["Escolha uma foto nítida e bem iluminada.", "Use um nome fácil de encontrar.", "Escreva o desporto, a posição e o nível.", "Acrescente um valor ou interesse.", "Acrescente um link ou um convite à ação.", "Tire os dados privados."],
          words: [["Biografia (bio)", "a descrição curta no topo do seu perfil."], ["Nome de utilizador (handle)", "o seu @nome numa aplicação de rede social."]],
          slides: [
            { title: "A sua porta de entrada", bullets: ["Quem é você?", "Que desporto pratica?", "Porque segui-lo?"] },
            { title: "Uma boa biografia", bullets: ["Desporto, posição, nível", "Um valor ou interesse", "Um link: melhores momentos ou contacto"] },
            { title: "Deixe fora da biografia", bullets: ["Morada de casa ou telefone", "Horário das aulas", "Menores: perguntem aos pais sobre a escola ou a cidade"] }
          ],
          tryIt: "Peça a um assistente de IA cinco opções de biografia a partir da sua frase de marca, dentro do limite de caracteres da plataforma. Escolha uma, edite-a e atualize o seu perfil.",
          youCanNow: "escrever uma biografia clara e escolher uma foto de perfil que combinem com a sua marca.",
          quickCheck: [
            { objective: "O2", q: "O que as pessoas devem saber do seu perfil em poucos segundos?", options: ["Quem você é, que desporto pratica e porque devem segui-lo", "A morada da sua casa", "O seu horário das aulas", "Todas as equipas em que já jogou"], answer: 0, why: "O seu perfil é a sua porta de entrada e deve deixar claras essas três coisas." },
            { objective: "O2", q: "Tem 15 anos e quer pôr a sua cidade e a sua escola na biografia. O que faz?", options: ["Põe-nas já", "Põe também a morada", "Põe antes o número de telefone", "Pergunta primeiro a um dos pais ou ao encarregado de educação"], answer: 3, why: "Os menores devem perguntar a um dos pais ou ao encarregado de educação antes de indicar a escola ou a cidade." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escolher os seus pilares de conteúdo",
          minutes: 5,
          goal: "Escolher três pilares de conteúdo e duas ideias de publicação para cada um.",
          text: [
            "Os pilares de conteúdo são os três ou quatro temas principais sobre os quais você publica. Mantêm o seu feed focado, para as pessoas saberem o que esperar.",
            "Os pilares de um atleta podem ser: Treino (exercícios, vídeos do treino), Dia de jogo (melhores momentos, momentos da equipa), Fora do campo (escola, fé, família, passatempos, serviço à comunidade) e Lições (o que está a aprender). Escolha os que combinam com a sua frase de marca.",
            "Um assistente de IA é bom a ter ideias de publicações para cada pilar. Peça dez e depois fique com as que publicaria de verdade."
          ],
          steps: ["Leia a sua frase de marca.", "Escolha três pilares que combinem com ela.", "Peça à IA dez ideias por pilar.", "Fique com duas que vai mesmo publicar para cada um."],
          words: [["Pilar de conteúdo", "um dos poucos temas principais sobre os quais publica com regularidade."], ["Feed", "a sequência de publicações no seu perfil."]],
          slides: [
            { title: "Pilares de conteúdo", bullets: ["3-4 temas principais", "Mantêm o seu feed focado"] },
            { title: "Pilares de um atleta", bullets: ["Treino", "Dia de jogo", "Fora do campo", "Lições"] },
            { title: "Use a IA para ter ideias", bullets: ["Peça dez ideias por pilar", "Fique com as que publicaria de verdade"] }
          ],
          tryIt: "Escreva os seus três pilares de conteúdo. Use um assistente de IA para ter ideias e fique com duas ideias reais de publicação para cada pilar.",
          youCanNow: "escolher pilares de conteúdo que combinem com a sua marca e planear publicações para eles.",
          quickCheck: [
            { objective: "O3", q: "Para que servem os pilares de conteúdo?", options: ["Para publicar o mais possível", "Para manter o seu feed focado e as pessoas saberem o que esperar", "Para esconder as suas publicações", "Para receber produtos grátis"], answer: 1, why: "Os pilares mantêm o seu feed focado em poucos temas principais." },
            { objective: "O3", q: "A sua frase de marca fala de fé e de serviço à comunidade. Que pilar combina melhor?", options: ["Provocações aos rivais", "Memes ao acaso", "Fora do campo: fé e serviço à comunidade", "Melhores momentos de outras equipas"], answer: 2, why: "Escolha pilares que combinem com a sua frase de marca." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Definir a sua marca",
        questions: [
          { objective: "O1", q: "O que é a sua marca de atleta?", options: ["O número da sua camisola", "A marca dos seus ténis", "A imagem que as pessoas têm em mente quando ouvem o seu nome", "O seu número de seguidores"], answer: 2, why: "A sua marca é a forma como as pessoas veem você." },
          { objective: "O1", q: "Qual destas é uma frase de marca?", options: ["\"Sou uma base trabalhadora que adora treinar crianças e quer estudar enfermagem.\"", "\"Sigam-me\"", "\"O melhor de sempre\"", "\"Sem comentários\""], answer: 0, why: "Diz o seu desporto, os seus valores e algo verdadeiro sobre você." },
          { objective: "O2", q: "O que deve estar numa boa biografia?", options: ["A morada da sua casa", "O seu horário das aulas", "O seu número de telefone", "O desporto, a posição e um link para os melhores momentos"], answer: 3, why: "Uma biografia mostra quem você é sem dados privados." },
          { objective: "O3", q: "O que são pilares de conteúdo?", options: ["Colunas de um estádio", "Os 3-4 temas principais sobre os quais publica", "Hashtags", "Seguidores"], answer: 1, why: "Os pilares mantêm o seu feed focado." },
          { objective: "O3", q: "A IA dá-lhe dez ideias de publicações. O que faz?", options: ["Publica as dez hoje", "Fica com as que publicaria de verdade", "Ignora todas", "Copia as publicações de outro atleta"], answer: 1, why: "Publique só o que combina com você e com a sua marca." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger a sua marca",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rever as suas publicações antigas",
          minutes: 5,
          goal: "Rever as suas publicações passadas e corrigir o que prejudica a sua marca.",
          text: [
            "Treinadores, responsáveis pelas admissões, marcas e empregadores muitas vezes vão ver as publicações antigas. Uma piada antiga, um comentário maldoso ou um vídeo partilhado pode custar uma oportunidade.",
            "Faça uma revisão: percorra as suas últimas 30 publicações, comentários, partilhas e fotos em que foi marcado. Para cada uma, pergunte: Ficaria bem se um treinador, um patrocinador ou os meus avós vissem isto? Combina com a minha marca? Se não, arquive, oculte ou apague, e retire a sua marcação onde puder.",
            "Lembre-se de que as capturas de ecrã duram para sempre. A melhor proteção é publicar com cuidado a partir de agora: pense antes de publicar, sobretudo quando está zangado depois de uma derrota."
          ],
          steps: ["Percorra as suas últimas 30 publicações, comentários, partilhas e marcações.", "Faça o teste do treinador, do patrocinador e dos avós.", "Arquive, oculte ou apague o que falha.", "Retire a sua marcação onde for preciso.", "Crie uma regra: não publicar quando está zangado."],
          words: [["Revisão (auditoria)", "uma verificação cuidadosa de tudo, para encontrar e corrigir problemas."], ["Arquivar", "esconder uma publicação do seu perfil sem a apagar."]],
          slides: [
            { title: "As pessoas vão ver o passado", bullets: ["Treinadores, admissões, marcas, empregadores", "Uma publicação antiga pode custar uma oportunidade"] },
            { title: "A revisão", bullets: ["Últimas 30 publicações, comentários, partilhas, marcações", "Teste do treinador, do patrocinador e dos avós", "Arquivar, ocultar, apagar ou retirar a marcação"] },
            { title: "A partir de agora", bullets: ["As capturas de ecrã duram para sempre", "Não publicar quando está zangado"] }
          ],
          tryIt: "Reveja as suas últimas 30 publicações e as fotos em que foi marcado. Escreva quantas manteve, quantas arquivou e quantas apagou.",
          youCanNow: "rever as suas redes sociais e retirar as publicações que prejudicam a sua marca.",
          quickCheck: [
            { objective: "O4", q: "Além das suas próprias publicações, o que deve incluir na revisão?", options: ["Comentários, partilhas e fotos em que foi marcado", "Só a sua foto de perfil", "As contas dos seus colegas de equipa", "As suas mensagens privadas à família"], answer: 0, why: "A revisão inclui publicações, comentários, partilhas e marcações." },
            { objective: "O4", q: "Uma partilha antiga de um vídeo maldoso falha o teste dos avós. O que faz?", options: ["Deixa ficar; é antiga", "Partilha-a outra vez", "Arquiva, oculta ou apaga", "Comenta para explicar"], answer: 2, why: "Arquive, oculte ou apague o que falha o teste." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Definições de privacidade e segurança",
          minutes: 5,
          goal: "Configurar as suas contas para controlar quem o vê e quem o contacta.",
          text: [
            "Ser público ajuda a ser visto, mas também deixa desconhecidos encontrá-lo. Muitos atletas têm uma conta pública de atleta e uma conta pessoal privada.",
            "Verifique as definições em cada aplicação: quem lhe pode enviar mensagens, quem pode comentar, quem o pode marcar, se a sua localização é acrescentada às publicações, e a verificação em dois passos para proteger o acesso à conta. Os menus de definições mudam, por isso procure privacidade, segurança e mensagens nas definições da aplicação.",
            "Nunca publique a sua localização em tempo real, os seus planos de viagem no momento, a sua casa ou a sua rotina diária. Tenha cuidado com mensagens diretas de pessoas que não conhece, incluindo falsos recrutadores e falsas marcas. Se alguém o ameaçar ou pedir fotos privadas, não responda; guarde provas, bloqueie, denuncie e conte a um adulto de confiança ou ao seu treinador."
          ],
          steps: ["Decida: uma conta pública de atleta e uma conta pessoal privada?", "Limite quem lhe pode enviar mensagens, comentar e marcá-lo.", "Desligue a localização nas publicações.", "Ative a verificação em dois passos.", "Saiba como bloquear e denunciar."],
          words: [["Verificação em dois passos", "uma segunda verificação, como um código, quando entra na conta, para que outros não consigam entrar só com a sua palavra-passe."], ["Mensagem direta (DM)", "uma mensagem privada enviada numa aplicação de rede social."]],
          slides: [
            { title: "Pública e privada", bullets: ["Conta pública de atleta para ser visto", "Conta pessoal privada para os amigos"] },
            { title: "Verifique estas definições", bullets: ["Quem pode enviar mensagens, comentar, marcar", "Localização nas publicações: desligada", "Verificação em dois passos: ativada"] },
            { title: "Fique em segurança", bullets: ["Nada de localização em tempo real nem rotina", "Cuidado com mensagens de desconhecidos", "Ameaças: guarde provas, bloqueie, denuncie, conte a um adulto"] }
          ],
          tryIt: "Abra as definições de uma conta. Limite quem lhe pode enviar mensagens e marcá-lo, desligue a localização nas publicações e ative a verificação em dois passos.",
          youCanNow: "configurar as suas contas para controlar quem o vê e quem o contacta.",
          quickCheck: [
            { objective: "O5", q: "O que protege a verificação em dois passos?", options: ["O seu número de seguidores", "O acesso à sua conta", "A qualidade das suas fotos", "A sua localização"], answer: 1, why: "A verificação em dois passos acrescenta uma segunda verificação para proteger o acesso à conta." },
            { objective: "O5", q: "Um desconhecido que diz ser recrutador continua a enviar mensagens e pede fotos privadas. O que faz?", options: ["Responde com educação", "Envia uma foto para o deixar contente", "Pede-lhe primeiro uma prova", "Não responde; guarda provas, bloqueia, denuncia e conta a um adulto de confiança"], answer: 3, why: "Nunca responda a ameaças nem a pedidos de fotos privadas; guarde provas e peça ajuda." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter a marca: regras, marcas e bom senso",
          minutes: 5,
          goal: "Escrever as suas regras pessoais de publicação, incluindo como lidar com publicações patrocinadas.",
          text: [
            "A sua equipa, escola ou liga pode ter regras para as redes sociais, sobretudo sobre notícias da equipa, lesões, recrutamento e rivais. Peça-as ao seu treinador e cumpra-as.",
            "À medida que a sua marca cresce, as marcas podem oferecer produtos grátis ou dinheiro para publicar. A FTC (a agência dos EUA que protege os consumidores) diz que tem de declarar claramente, na própria publicação, qualquer acordo pago ou produto grátis. Os atletas universitários também podem ter regras de declaração de NIL (Name, Image and Likeness: nome, imagem e semelhança), e no ensino secundário as regras variam de estado para estado. Pergunte ao gabinete de conformidade ou à associação desportiva do seu estado antes de aceitar.",
            "Escreva uma lista curta das suas próprias regras de publicação: o que publica, o que nunca publica e como lida com comentários negativos (não discuta; silencie, oculte ou bloqueie)."
          ],
          steps: ["Peça ao seu treinador as regras da equipa para as redes sociais.", "Escreva três regras \"Eu sempre\".", "Escreva três regras \"Eu nunca\".", "Escreva como lida com comentários negativos.", "Acrescente: \"Declaro qualquer acordo com uma marca e verifico primeiro as regras de NIL.\""],
          words: [["NIL", "nome, imagem e semelhança (em inglês, name, image and likeness): um atleta ganhar dinheiro com o seu nome, a sua foto ou a sua marca pessoal."], ["Declaração", "uma frase clara na publicação a dizer que foi pago ou que recebeu alguma coisa."]],
          slides: [
            { title: "Conheça as regras", bullets: ["Regras da equipa e da escola para as redes sociais", "Lesões, recrutamento, rivais"] },
            { title: "Acordos com marcas", bullets: ["Declare na publicação os acordos pagos e os produtos grátis", "Verifique as regras de NIL com o gabinete de conformidade ou o seu estado"] },
            { title: "As suas regras de publicação", bullets: ["Três \"Eu sempre\"", "Três \"Eu nunca\"", "Comentários negativos: não discuta; silencie, oculte ou bloqueie"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers (guia de declarações para influenciadores, em inglês)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness (nome, imagem e semelhança, em inglês)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Tarefa final: escreva as suas regras de publicação e depois termine a marca de um perfil: frase de marca, biografia e foto, três pilares com duas ideias cada, uma revisão de 30 publicações e definições seguras.",
          youCanNow: "manter a sua marca no caminho certo com regras de publicação claras e uma forma honesta de lidar com acordos com marcas.",
          quickCheck: [
            { objective: "O6", q: "O que diz a FTC sobre um produto grátis de que fala numa publicação?", options: ["Declare-o claramente na própria publicação", "Só se declaram acordos em dinheiro", "Ponha-o uma vez na biografia", "Os estudantes não precisam de declarar"], answer: 0, why: "Qualquer acordo pago ou produto grátis tem de ser declarado claramente na publicação." },
            { objective: "O6", q: "Alguém escreve um comentário malcriado depois de a sua equipa perder. O que diz a sua regra?", options: ["Discutir até a pessoa parar", "Publicar uma resposta zangada", "Apagar a sua conta", "Não discutir; silenciar, ocultar ou bloquear"], answer: 3, why: "As suas regras de publicação dizem como lidar com comentários negativos sem discutir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Proteger a sua marca",
        questions: [
          { objective: "O4", q: "Qual é o teste da revisão para uma publicação antiga?", options: ["Teve 100 gostos?", "É engraçada?", "É antiga?", "Um treinador, um patrocinador ou os seus avós ficariam bem ao vê-la?"], answer: 3, why: "Se falhar esse teste, pode prejudicar a sua marca." },
          { objective: "O5", q: "Que definição protege o acesso à sua conta?", options: ["A verificação em dois passos", "Um tipo de letra bonito", "Mais hashtags", "Uma localização pública"], answer: 0, why: "A verificação em dois passos trava quem só tem a sua palavra-passe." },
          { objective: "O5", q: "O que nunca deve publicar?", options: ["Um vídeo do treino", "Um agradecimento ao seu treinador", "A sua localização em tempo real", "Uma foto de serviço à comunidade"], answer: 2, why: "A localização em tempo real pode pô-lo em risco." },
          { objective: "O5", q: "Alguém o ameaça numa mensagem direta. O que faz?", options: ["Responde à discussão", "Envia o que a pessoa pede", "Ignora e não conta a ninguém", "Guarda provas, bloqueia, denuncia e conta a um adulto de confiança"], answer: 3, why: "Proteja-se e peça ajuda." },
          { objective: "O6", q: "Uma marca envia-lhe auscultadores grátis para publicar sobre eles. O que tem de fazer?", options: ["Nada", "Declarar claramente o produto grátis na publicação e verificar as regras de NIL", "Esconder o nome da marca", "Apagar a publicação mais tarde"], answer: 1, why: "A FTC exige uma declaração clara, e as regras de NIL podem aplicar-se." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Marca Pessoal nas Redes Sociais para Atletas",
    questions: [
      { objective: "O1", q: "Quem forma a sua marca?", options: ["Só você", "Só o seu treinador", "As pessoas que veem as suas publicações, comentários e ações", "Ninguém"], answer: 2, why: "A sua marca vive na cabeça das outras pessoas." },
      { objective: "O1", q: "Uma marca é o seu desporto mais:", options: ["Os seus valores e aquilo que faz de você quem é", "A sua palavra-passe", "O seu rival", "O número dos seus sapatos"], answer: 0, why: "Os valores e a personalidade fazem você destacar-se." },
      { objective: "O1", q: "Uma frase de marca deve ser:", options: ["Honesta", "Inventada", "Copiada", "Muito longa"], answer: 0, why: "Uma marca só funciona se for verdadeira." },
      { objective: "O2", q: "O seu perfil é como:", options: ["O seu cacifo", "Um segredo", "A sua porta de entrada", "Um marcador de resultados"], answer: 2, why: "É a primeira coisa que as pessoas veem." },
      { objective: "O2", q: "Uma boa foto de perfil é:", options: ["Desfocada", "Nítida e bem iluminada", "Um meme qualquer", "Outra pessoa"], answer: 1, why: "As pessoas devem reconhecê-lo." },
      { objective: "O2", q: "O que NÃO é bom para uma biografia?", options: ["O seu desporto", "A sua posição", "Um link para os melhores momentos", "O seu número de telefone"], answer: 3, why: "Os números de telefone são privados." },
      { objective: "O2", q: "Se for menor de idade, antes de indicar a sua escola ou a sua cidade deve:", options: ["Publicar na mesma", "Perguntar a um desconhecido", "Perguntar a um dos pais ou ao encarregado de educação", "Pôr também a morada"], answer: 2, why: "Os pais ajudam a decidir o que é seguro partilhar." },
      { objective: "O3", q: "Quantos pilares de conteúdo deve ter?", options: ["20", "Nenhum", "1 publicação", "3-4"], answer: 3, why: "Poucos pilares mantêm o seu feed focado." },
      { objective: "O3", q: "Qual é uma publicação do pilar Fora do campo?", options: ["Ser voluntário numa clínica desportiva para jovens", "Os melhores momentos de um jogo", "Um vídeo de um treino", "Um gráfico de estatísticas"], answer: 0, why: "Mostra quem você é para além do desporto." },
      { objective: "O3", q: "Como deve usar a IA para ter ideias de publicações?", options: ["Publicar tudo o que ela diz", "Ter muitas ideias e ficar com as que combinam com você", "Nunca a usar", "Deixá-la gerir a sua conta"], answer: 1, why: "É você quem escolhe o que combina com a sua marca." },
      { objective: "O4", q: "No mínimo, quantas publicações recentes deve incluir a sua revisão?", options: ["1", "0", "30", "Só as de hoje"], answer: 2, why: "Volte atrás o suficiente para ver o que os outros veem." },
      { objective: "O4", q: "Arquivar uma publicação quer dizer:", options: ["Escondê-la do seu perfil sem a apagar", "Publicá-la outra vez", "Torná-la pública", "Vendê-la"], answer: 0, why: "Arquivar esconde sem apagar." },
      { objective: "O4", q: "Depois de uma derrota difícil, uma boa regra é:", options: ["Publicar logo", "Criticar o árbitro na internet", "Culpar os colegas de equipa", "Não publicar quando está zangado"], answer: 3, why: "As publicações feitas com raiva costumam prejudicar a sua marca." },
      { objective: "O5", q: "Muitos atletas têm:", options: ["Dez contas públicas", "Uma conta pública de atleta e uma conta pessoal privada", "Nenhuma privacidade", "A palavra-passe na biografia"], answer: 1, why: "Separa o ser visto da vida pessoal." },
      { objective: "O5", q: "Desligar a localização nas publicações ajuda-o a:", options: ["Ter mais gostos", "Ficar em segurança", "Publicar mais depressa", "Parecer mais velho"], answer: 1, why: "Os desconhecidos não conseguem seguir onde você está." },
      { objective: "O5", q: "Um desconhecido envia-lhe uma mensagem como recrutador a pedir dinheiro. Isto é:", options: ["Normal", "Obrigatório", "Uma bolsa de estudo", "Um sinal de alerta"], answer: 3, why: "Os falsos recrutadores pedem dinheiro." },
      { objective: "O6", q: "Onde encontra as regras da sua equipa para as redes sociais?", options: ["Pergunta ao seu treinador", "Adivinha", "Um rival", "Um anúncio"], answer: 0, why: "As equipas e as escolas definem as suas próprias regras." },
      { objective: "O6", q: "NIL quer dizer:", options: ["National Interest League (liga de interesse nacional)", "No Internet Limits (sem limites na internet)", "Name, image and likeness (nome, imagem e semelhança)", "New Influencer Level (novo nível de influenciador)"], answer: 2, why: "NIL é ganhar dinheiro com o seu nome, a sua imagem e a sua semelhança." },
      { objective: "O6", q: "Um atleta do ensino secundário recebe uma proposta de NIL. Primeiro deve:", options: ["Assinar já", "Escondê-la", "Perguntar a um fã", "Verificar as regras da associação desportiva do seu estado e da escola"], answer: 3, why: "No ensino secundário, as regras de NIL variam de estado para estado." },
      { objective: "O6", q: "Como deve lidar com comentários negativos?", options: ["Discutir em maiúsculas", "Não discutir; silenciar, ocultar ou bloquear", "Publicar a morada da pessoa", "Sair das redes sociais para sempre"], answer: 1, why: "Discutir espalha a negatividade e prejudica a sua marca." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      5,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Frase de marca",
        objective: "O1",
        notYet: "Falta, é vaga ou não é honesta.",
        meets: "Uma frase honesta com o desporto e a posição, um valor e um interesse para além do desporto.",
        exceeds: "A biografia, a foto e os pilares combinam todos claramente com a frase."
      },
      {
        name: "Biografia e foto",
        objective: "O2",
        notYet: "Sem link nem convite à ação, uma foto pouco nítida, ou dados privados à vista.",
        meets: "Uma biografia curta com o desporto, a posição, um valor e um link, uma foto nítida e nenhum dado privado.",
        exceeds: "O link leva a um vídeo atualizado dos melhores momentos ou a um perfil de recrutamento."
      },
      {
        name: "Pilares de conteúdo",
        objective: "O3",
        notYet: "Menos de três pilares, ou ideias que não combinam com a marca.",
        meets: "Três pilares com duas ideias de publicação cada que combinam com a frase de marca.",
        exceeds: "As ideias estão marcadas no calendário para as próximas duas semanas."
      },
      {
        name: "Revisão das publicações",
        objective: "O4",
        notYet: "Menos de 30 publicações verificadas, ou publicações que falham o teste ainda visíveis.",
        meets: "As últimas 30 publicações, comentários, partilhas e marcações verificadas, com o que falha arquivado, ocultado, apagado ou sem marcação.",
        exceeds: "A revisão vai mais para trás e está escrita a regra \"não publicar quando estou zangado\"."
      },
      {
        name: "Privacidade e segurança",
        objective: "O5",
        notYet: "Localização ainda ligada nas publicações, mensagens abertas a todos, ou sem verificação em dois passos.",
        meets: "Mensagens, comentários e marcações limitados, localização desligada e verificação em dois passos ativada.",
        exceeds: "Tem uma conta pessoal privada separada e o atleta sabe mostrar como bloquear e denunciar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam a tarefa final com Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que dizem ter retirado ou ocultado publicações que lhes podiam ter custado uma oportunidade",
      "Alunos que dizem ter sido contactados por um treinador, recrutador, marca ou empregador através do perfil arrumado (inquérito de seguimento)",
      "Alunos que dizem ter bloqueado e denunciado um falso recrutador, uma burla ou uma ameaça em vez de responder"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com a aplicação de rede social do atleta",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini), opcional",
      "As regras da sua equipa para as redes sociais, pedidas ao treinador",
      "Papel ou uma nota no telefone para a sua frase de marca e as suas regras",
      "Cerca de 60 minutos"
    ],
    facilitatorNotes: [
      "Nunca peça aos atletas para mostrar mensagens privadas ou contas privadas ao grupo; deixe-os fazer a revisão sozinhos.",
      "Para atletas com menos de 18 anos, envolva os pais ou os encarregados de educação nas decisões sobre perfis públicos e sobre indicar a escola ou a cidade.",
      "Partilhe as regras da equipa para as redes sociais e a quem contar ameaças, falsos recrutadores ou pedidos de fotos privadas.",
      "Vejam juntos as definições de privacidade nas aplicações que o grupo usa, porque os menus mudam de aplicação para aplicação e com as atualizações.",
      "Convide o gabinete de conformidade ou o contacto da associação do estado para explicar as regras de NIL antes de alguém aceitar um acordo."
    ]
  }
};
