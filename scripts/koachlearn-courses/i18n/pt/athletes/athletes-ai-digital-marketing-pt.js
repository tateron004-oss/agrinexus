"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-digital-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-ai-digital-marketing-pt",
  lang: "pt",
  translationOf: "athletes-ai-digital-marketing",
  category: "Athletes",
  name: "Estratégias de Marketing Digital com IA para Atletas",
  skills: "Definir um objetivo de marketing, Definir o seu público, Escolher canais, Preparar um plano de 4 semanas com IA, Medir resultados e ajustar",
  outcome: "usar um assistente de IA para criar e pôr em prática um plano simples de marketing digital de 4 semanas para si como atleta: um objetivo, um público, dois canais, um plano semanal de publicações e três números que acompanha.",
  about: [
    "Este curso é para atletas do ensino secundário, da universidade e do início da carreira que querem fazer crescer o seu público de propósito, para o recrutamento, oportunidades NIL (ganhar dinheiro com o seu nome, imagem e reputação), um campo de treino ou uma carreira futura, e para os treinadores que os ajudam.",
    "Marketing quer dizer fazer com que as pessoas certas o conheçam, gostem de você e confiem em você. Vai definir um objetivo, escolher o seu público e os seus canais, usar a IA para preparar um plano de 4 semanas e aprender que números observar.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso. As regras NIL mudam conforme a escola, o estado e o nível, por isso fale com o gabinete de conformidade (compliance) ou com a associação desportiva do seu estado antes de qualquer acordo pago."
  ],
  finalTask: "Escreva um plano de marketing de 4 semanas numa página: um objetivo SMART, uma descrição do público, dois canais, um plano semanal de publicações preparado com IA e três números para acompanhar. Ponha em prática a primeira semana, registe os números e escreva uma mudança para a segunda semana.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e do início da carreira que querem fazer crescer um público de propósito, para o recrutamento, oportunidades NIL, um campo de treino ou uma carreira futura, e os treinadores que os ajudam.",
    startingPoint: "Usam as redes sociais todos os dias e publicam às vezes, normalmente sem plano. Poucos têm um objetivo escrito, um público definido, um plano de publicações ou números que acompanham, e muitos não têm a certeza das regras para declarar ofertas ou publicações pagas.",
    gap: "Publicar sem objetivo nem público raramente traz respostas de treinadores, inscrições ou interesse de marcas, e publicações desonestas ou sem declaração podem estragar a confiança e violar as regras da publicidade. Um plano simples de quatro semanas, com publicações honestas e números acompanhados, transforma as redes sociais em oportunidades reais.",
    constraints: [
      "Linguagem simples, mais ou menos ao nível de leitura do 7.º ano",
      "Um telefone com aplicações de redes sociais e um assistente de IA gratuito; só ferramentas gratuitas",
      "Cerca de 60 minutos de lições e mais quatro semanas de publicações, ao lado da escola e dos treinos",
      "Regras de idade das plataformas; atletas com menos de 18 anos envolvem um pai, uma mãe ou um tutor",
      "Regras de declaração da FTC, regras NIL da escola e da NCAA ou da liga, e segurança pessoal: nada de localização em tempo real nem dados de casa"
    ],
    prerequisites: "Nenhum"
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com aquilo que quer nas próximas quatro semanas", action: "escrever um objetivo de marketing SMART", standard: "com as cinco partes SMART, incluindo um número e uma data" },
    { id: "O2", condition: "Com o grupo que quer alcançar", action: "escrever um perfil curto do público: quem são, o que lhes importa, onde passam tempo na internet e o que os leva a agir", standard: "confirmado com duas ou três pessoas reais desse grupo" },
    { id: "O3", condition: "Com o seu perfil do público", action: "escolher dois canais onde o seu público já passa tempo", standard: "com uma razão para cada um e com as regras de idade e as definições de privacidade verificadas" },
    { id: "O4", condition: "Usando um assistente de IA gratuito", action: "criar um plano de publicações de 4 semanas com uma ideia, um formato e um apelo à ação para cada publicação", standard: "ajustado ao seu horário e sem partilhar a localização em tempo real, a casa nem o horário da escola" },
    { id: "O5", condition: "Com uma legenda escrita pela IA", action: "reescrevê-la como uma publicação honesta, com a sua própria voz e uma declaração clara quando uma marca lhe dá alguma coisa", standard: "sem nenhuma afirmação que não possa provar e com a declaração fácil de ver junto da publicação" },
    { id: "O6", condition: "Depois de cada semana de publicações", action: "registar três números ligados ao seu objetivo e escolher uma mudança para a semana seguinte", standard: "registados todas as semanas numa folha de cálculo, com a mudança decidida por você" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Objetivo, público e canais",
      lessons: [
        {
          objectives: ["O1"],
          title: "Definir um objetivo de marketing",
          minutes: 5,
          goal: "Escrever um objetivo de marketing SMART para as próximas quatro semanas.",
          text: [
            "Marketing sem objetivo é só publicar. Decida o que quer nas próximas quatro semanas: ser notado por treinadores universitários, encher um campo de treino para jovens, fazer crescer um público que interesse a uma marca ou criar seguidores para a sua carreira futura.",
            "Faça-o SMART (palavra inglesa): Específico, Mensurável, Alcançável, Relevante e com Tempo definido. \"Ter 15 inscrições na minha clínica gratuita de lançamento de verão até 30 de junho\" é SMART. \"Ficar famoso\" não é.",
            "Um assistente de IA pode ajudar a torná-lo mais preciso: \"Sou jogador de basquetebol do ensino secundário. Ajude-me a transformar 'fazer mais treinadores universitários verem-me' num objetivo SMART para as próximas 4 semanas.\""
          ],
          steps: ["Escolha o que quer daqui a 4 semanas.", "Acrescente um número.", "Acrescente uma data.", "Confirme que é realista e que é importante para você."],
          words: [["Marketing", "fazer com que as pessoas certas conheçam você ou o que oferece, gostem e confiem."], ["Objetivo SMART", "um objetivo Específico, Mensurável (que se pode medir), Alcançável, Relevante e com Tempo definido."]],
          slides: [
            { title: "Sem objetivo = só publicar", bullets: ["Recrutamento? Campo de treino? Público? Carreira?"] },
            { title: "SMART", bullets: ["Específico, Mensurável, Alcançável", "Relevante, com Tempo definido"] },
            { title: "Exemplo", bullets: ["\"15 inscrições na minha clínica gratuita até 30 de junho\"", "Não: \"ficar famoso\""] }
          ],
          tryIt: "Escreva um objetivo de marketing para as próximas quatro semanas. Peça a um assistente de IA para o tornar SMART e depois corrija-o para que seja verdadeiro e realista para você.",
          youCanNow: "escrever um objetivo de marketing SMART.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer o M de SMART?", options: ["Mensurável", "Marketing", "Mensal", "Muito importante"], answer: 0, why: "SMART quer dizer Específico, Mensurável, Alcançável, Relevante e com Tempo definido." },
            { objective: "O1", q: "O seu objetivo é \"fazer mais treinadores repararem em mim\". O que acrescenta para o tornar SMART?", options: ["Mais hashtags", "Um número maior de seguidores", "Um número e uma data, como 5 respostas de treinadores até 1 de março", "Uma nova foto de perfil"], answer: 2, why: "Um objetivo SMART tem um número e uma data que pode verificar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Conhecer o seu público",
          minutes: 5,
          goal: "Descrever as pessoas que quer alcançar num perfil curto.",
          text: [
            "O seu público é o grupo concreto que quer alcançar. Um treinador universitário, o pai ou a mãe de uma criança de 10 anos que quer um campo de treino, o dono de um negócio local e um adepto do seu desporto querem coisas diferentes.",
            "Escreva um perfil curto do público: quem são, o que lhes importa, onde passam tempo na internet e o que os levaria a agir. Exemplo: \"Pais de crianças da zona com 8 a 12 anos, ocupados, querem treinos seguros e divertidos, usam grupos do Facebook e o Instagram, inscrevem-se quando veem opiniões verdadeiras.\"",
            "A IA pode ajudar a ter ideias sobre o que importa ao seu público. Depois confirme perguntando a duas ou três pessoas reais desse grupo."
          ],
          steps: ["Diga o nome do grupo.", "Escreva o que lhes importa.", "Escreva onde passam tempo na internet.", "Escreva o que os leva a agir.", "Confirme com duas ou três pessoas reais."],
          words: [["Público", "as pessoas concretas que quer alcançar."], ["Perfil do público", "uma descrição curta de quem são e do que querem."]],
          slides: [
            { title: "Públicos diferentes", bullets: ["Treinadores universitários", "Pais de crianças do campo de treino", "Negócios locais", "Adeptos do seu desporto"] },
            { title: "Perfil do público", bullets: ["Quem são", "O que lhes importa", "Onde estão na internet", "O que os leva a agir"] },
            { title: "Confirme", bullets: ["Peça ideias à IA", "Depois pergunte a 2-3 pessoas reais"] }
          ],
          tryIt: "Escreva um perfil do público para o seu objetivo. Pergunte a um assistente de IA: \"Que mais pode importar a este público?\" Acrescente uma ideia e depois pergunte a uma pessoa real desse grupo se está certo.",
          youCanNow: "escrever um perfil curto do público para o seu objetivo.",
          quickCheck: [
            { objective: "O2", q: "O que faz parte de um perfil do público?", options: ["A sua música preferida", "O número da sua camisola", "O seu horário de treinos", "Onde o público passa tempo na internet"], answer: 3, why: "O perfil diz quem são, o que lhes importa, onde passam tempo e o que os leva a agir." },
            { objective: "O2", q: "Um assistente de IA deu ideias sobre o que importa aos pais do campo de treino. O que faz a seguir?", options: ["Pergunta a dois ou três pais reais se está certo", "Publica como se fosse verdade", "Pergunta outra vez à IA até ela concordar com você", "Não faz o perfil"], answer: 0, why: "Confirme as ideias da IA com pessoas reais desse grupo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escolher os seus canais",
          minutes: 5,
          goal: "Escolher dois canais onde o seu público já passa tempo.",
          text: [
            "Um canal é um lugar onde chega às pessoas: Instagram, TikTok, YouTube, X, LinkedIn, grupos do Facebook, email, um site, ou pessoalmente nos jogos e nos eventos da comunidade.",
            "Para começar, escolha só dois canais, com base no seu público e não no que está na moda. Os treinadores universitários muitas vezes veem vídeos com os melhores momentos e perfis de recrutamento, e também o email. Os pais do campo de treino podem usar grupos do Facebook e folhetos locais. As marcas olham para o quanto os seus seguidores participam.",
            "Verifique as regras de idade de cada plataforma e configure as suas contas para controlar quem o pode contactar. Se tem menos de 18 anos, envolva um pai, uma mãe ou um tutor."
          ],
          steps: ["Faça a lista dos lugares onde o seu público passa tempo.", "Escolha os dois que combinam melhor.", "Verifique as regras de idade e as definições de privacidade.", "Escreva porque escolheu cada canal."],
          words: [["Canal", "um lugar onde chega ao seu público, como uma aplicação social ou o email."], ["Envolvimento (engagement)", "a forma como as pessoas reagem às suas publicações: gostos, comentários, partilhas, guardados."]],
          slides: [
            { title: "Canais", bullets: ["Aplicações sociais: Instagram, TikTok, YouTube, X, LinkedIn", "Email e um site", "Pessoalmente nos jogos e eventos"] },
            { title: "Escolha dois", bullets: ["Onde o seu público já está", "Não só o que está na moda"] },
            { title: "Fique seguro", bullets: ["Verifique as regras de idade", "Controle quem o pode contactar", "Menos de 18 anos: envolva um pai ou uma mãe"] }
          ],
          tryIt: "Escolha os seus dois canais e escreva uma frase para cada um a explicar porque o seu público está lá. Verifique as definições de privacidade de cada conta.",
          youCanNow: "escolher dois canais que combinam com o seu público e configurá-los com segurança.",
          quickCheck: [
            { objective: "O3", q: "O que é um canal?", options: ["O seu plano de treino", "Um lugar onde chega às pessoas, como o Instagram, o email ou um site", "Um tipo de câmara", "Um número de seguidores"], answer: 1, why: "Os canais são os lugares onde chega ao seu público." },
            { objective: "O3", q: "Uma aplicação nova está na moda, mas o seu público de pais do campo de treino está nos grupos do Facebook. O que faz?", options: ["Usa só a aplicação da moda", "Entra em cinco aplicações novas", "Escolhe canais onde o seu público já está, como os grupos do Facebook", "Deixa de publicar"], answer: 2, why: "Escolha os canais pelo público, não pelo que está na moda." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Objetivo, público e canais",
        questions: [
          { objective: "O1", q: "Qual é um objetivo SMART?", options: ["Ficar famoso", "Publicar mais", "Ter 15 inscrições na minha clínica gratuita até 30 de junho", "Ser uma marca"], answer: 2, why: "É específico, mensurável e tem uma data." },
          { objective: "O2", q: "O que é um público?", options: ["As pessoas concretas que quer alcançar", "Toda a gente na internet", "Só os seus colegas de equipa", "Um tipo de publicação"], answer: 0, why: "O marketing funciona melhor dirigido a um grupo concreto." },
          { objective: "O2", q: "Como confirma o seu perfil do público?", options: ["Confia totalmente na IA", "Adivinha", "Publica e espera", "Pergunta a duas ou três pessoas reais desse grupo"], answer: 3, why: "As pessoas reais dizem-lhe se as suas ideias estão certas." },
          { objective: "O3", q: "Com quantos canais deve começar?", options: ["Todas as aplicações", "Dois", "Dez", "Nenhum"], answer: 1, why: "Dois canais bem feitos valem mais do que muitos mal feitos." },
          { objective: "O3", q: "Tem 16 anos e vai abrir uma conta pública. Deve:", options: ["Partilhar a sua morada", "Envolver um pai, uma mãe ou um tutor e verificar as regras de idade", "Deixar qualquer pessoa enviar-lhe mensagens", "Mentir sobre a sua idade"], answer: 1, why: "A segurança e as regras de idade vêm primeiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear, pôr em prática e medir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparar um plano de 4 semanas com IA",
          minutes: 6,
          goal: "Usar um assistente de IA para preparar um plano de publicações de 4 semanas e corrigi-lo.",
          text: [
            "Dê a um assistente de IA o seu objetivo, o perfil do público e os canais, e peça: \"Faça um plano de 4 semanas com 3 publicações por semana nestes dois canais. Para cada publicação dê a ideia, o formato (foto, vídeo curto, story, email) e um apelo à ação. Ponha numa tabela.\"",
            "Um apelo à ação diz às pessoas o que fazer a seguir: \"Inscreva-se no link\", \"Veja os meus melhores momentos completos\", \"Envie-me um email para saber do campo de treino\". Cada publicação que apoia o seu objetivo deve ter um.",
            "Corrija o plano para caber no seu horário de treinos e da escola. Nunca planeie publicações que mostrem a desconhecidos a sua localização exata em tempo real, a sua casa ou o seu horário da escola."
          ],
          steps: ["Cole o seu objetivo, o perfil do público e os canais.", "Peça uma tabela de 4 semanas: ideia, formato, apelo à ação.", "Corrija-a para caber no seu horário.", "Tire tudo o que partilhe a sua localização em tempo real ou a sua casa."],
          words: [["Apelo à ação", "um próximo passo claro que pede às pessoas para darem."], ["Plano de conteúdos", "um calendário do que vai publicar e quando."]],
          slides: [
            { title: "Dê à IA", bullets: ["O seu objetivo SMART", "O seu perfil do público", "Os seus dois canais"] },
            { title: "Peça uma tabela", bullets: ["3 publicações por semana durante 4 semanas", "Ideia, formato, apelo à ação"] },
            { title: "Depois corrija", bullets: ["Ajuste ao seu horário de treinos e da escola", "Nada de localização em tempo real nem dados de casa"] }
          ],
          tryIt: "Peça a um assistente de IA o seu plano de 4 semanas numa tabela. Corrija pelo menos três linhas para combinarem com o seu horário real e a sua voz.",
          youCanNow: "preparar e corrigir um plano de marketing de 4 semanas com IA.",
          quickCheck: [
            { objective: "O4", q: "Que três coisas deve ter cada publicação na tabela do seu plano?", options: ["Ideia, formato e apelo à ação", "Gostos, partilhas e guardados", "Localização, hora e morada", "Só hashtags"], answer: 0, why: "A lição pede a ideia, o formato e um apelo à ação para cada publicação." },
            { objective: "O4", q: "O plano da IA inclui uma story a mostrar você a sair de casa todas as manhãs. O que faz?", options: ["Mantém; mostra a sua rotina", "Publica um dia depois", "Tira-a porque partilha a sua casa e o seu horário", "Acrescenta-lhe a sua morada"], answer: 2, why: "Nunca planeie publicações que mostrem a desconhecidos a sua casa ou a sua localização em tempo real." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escrever publicações honestas que soam como você",
          minutes: 5,
          goal: "Transformar as ideias do plano em publicações honestas com a sua própria voz, com declarações quando é preciso.",
          text: [
            "A IA pode escrever um primeiro rascunho da legenda, mas as pessoas seguem atletas porque são verdadeiros. Peça à IA três opções e depois reescreva a melhor com as suas palavras. Leia-a em voz alta: soa como você?",
            "Seja honesto. Não use estatísticas falsas, seguidores falsos nem afirmações que não pode provar. Os treinadores, as marcas e os adeptos verificam.",
            "Se uma empresa lhe dá dinheiro, produtos grátis ou qualquer outro benefício para publicar, a FTC (a agência dos EUA que faz cumprir a lei da publicidade) diz que tem de o deixar claro, por exemplo \"Publicidade\" ou \"Obrigado à [marca] pelo equipamento grátis\", junto da publicação e não escondido nas hashtags. Nos vídeos, diga-o e mostre-o no ecrã. Os atletas universitários também podem ter de declarar os acordos; pergunte ao gabinete de conformidade."
          ],
          steps: ["Peça à IA três opções de legenda.", "Reescreva a melhor com as suas palavras.", "Tire qualquer afirmação que não pode provar.", "Se houver algum benefício de uma marca, acrescente uma declaração clara.", "Leia-a em voz alta antes de publicar."],
          words: [["Legenda", "o texto que acompanha uma publicação."], ["Declaração", "uma frase clara a dizer que lhe pagaram ou lhe deram alguma coisa para publicar."]],
          slides: [
            { title: "A IA faz o rascunho, você termina", bullets: ["Peça três opções", "Reescreva com as suas palavras", "Leia em voz alta"] },
            { title: "Seja honesto", bullets: ["Nada de estatísticas ou seguidores falsos", "Nada de afirmações que não pode provar"] },
            { title: "Coisas pagas ou grátis?", bullets: ["Diga claramente: \"Publicidade\" ou \"Obrigado à [marca] pelo equipamento grátis\"", "Junto da publicação, não escondido nas hashtags", "Nos vídeos: diga-o e mostre-o"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers (guia de declarações para influenciadores, em inglês)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness (nome, imagem e reputação, em inglês)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Pegue numa ideia de publicação do seu plano. Peça à IA três opções de legenda, reescreva uma com a sua voz e leia-a em voz alta. Se envolver alguma marca, acrescente uma declaração clara.",
          youCanNow: "escrever publicações honestas com a sua própria voz e declarar claramente as relações com marcas.",
          quickCheck: [
            { objective: "O5", q: "Que agência dos EUA faz cumprir a regra de declarar publicações pagas ou oferecidas?", options: ["A NCAA", "A FTC", "A FDA", "O departamento desportivo da sua escola"], answer: 1, why: "A FTC faz cumprir a lei da publicidade nos Estados Unidos." },
            { objective: "O5", q: "Um ginásio da zona dá-lhe um mês grátis para publicar sobre ele. Onde põe a declaração?", options: ["No fim de 30 hashtags", "Num comentário uma semana depois", "Em lado nenhum, porque não foi dinheiro", "Junto da publicação, fácil de ver"], answer: 3, why: "Qualquer benefício conta, e a declaração tem de estar clara junto da publicação." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir e ajustar",
          minutes: 5,
          goal: "Acompanhar três números todas as semanas e fazer uma mudança com base neles.",
          text: [
            "Escolha três números ligados ao seu objetivo. Para uma clínica: cliques no link, inscrições e comentários com perguntas. Para o recrutamento: visitas ao perfil, visualizações do vídeo de melhores momentos e respostas de treinadores. O número de seguidores sozinho pode enganar.",
            "A maioria das aplicações sociais mostra estes números na área de estatísticas (insights ou analytics) das contas profissionais ou de criador. Registe-os numa folha de cálculo uma vez por semana.",
            "Todas as semanas, pergunte: o que funcionou melhor e o que vou mudar? Pode colar os números da semana num assistente de IA e pedir uma sugestão, e depois decidir você mesmo."
          ],
          steps: ["Escolha três números ligados ao seu objetivo.", "Registe-os todas as semanas numa folha de cálculo.", "Encontre a sua melhor e a sua pior publicação.", "Faça uma mudança para a semana seguinte."],
          words: [["Estatísticas (analytics)", "números que mostram como estão a correr as suas publicações e páginas."], ["Métrica de vaidade", "um número que parece bom mas não mostra progresso no seu objetivo."]],
          slides: [
            { title: "Três números ligados ao seu objetivo", bullets: ["Clínica: cliques, inscrições, perguntas", "Recrutamento: visualizações, respostas de treinadores"] },
            { title: "Rotina semanal", bullets: ["Registe os números numa folha de cálculo", "Melhor e pior publicação", "Uma mudança para a semana seguinte"] },
            { title: "Cuidado", bullets: ["Só os seguidores podem enganar", "A IA sugere; você decide"] }
          ],
          tryIt: "Tarefa final: ponha numa página o seu objetivo, o público, os canais, o plano preparado com IA e três números. Ponha em prática a primeira semana, registe os números e escreva uma mudança para a segunda semana.",
          youCanNow: "medir o seu marketing com três números com significado e ajustar todas as semanas.",
          quickCheck: [
            { objective: "O6", q: "Porque é que o número de seguidores sozinho pode enganar?", options: ["Pode não mostrar se as pessoas fazem a ação de que o seu objetivo precisa", "É sempre falso", "As aplicações escondem-no", "Muda devagar demais"], answer: 0, why: "Escolha números ligados ao seu objetivo, como inscrições ou respostas de treinadores." },
            { objective: "O6", q: "A primeira semana mostra que os seus vídeos tiveram muito mais cliques do que as suas fotos. O que faz?", options: ["Muda tudo de uma vez", "Ignora os números", "Faz uma mudança, como mais vídeos curtos na semana seguinte", "Apaga as suas fotos"], answer: 2, why: "Faça uma mudança por semana com base nos seus números." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear, pôr em prática e medir",
        questions: [
          { objective: "O4", q: "O que é um apelo à ação?", options: ["Uma chamada para o seu treinador", "Um tipo de hashtag", "Uma penalização", "Um próximo passo claro que pede às pessoas para darem"], answer: 3, why: "Diz ao seu público o que fazer a seguir." },
          { objective: "O4", q: "Que dado o seu plano deve evitar?", options: ["A sua localização em tempo real ou a sua casa", "O seu desporto", "Os seus melhores momentos", "O link de inscrição do seu campo de treino"], answer: 0, why: "A localização em tempo real e os dados de casa podem pô-lo em risco." },
          { objective: "O5", q: "Uma loja de sapatilhas dá-lhe sapatilhas grátis para publicar. O que deve ter a sua publicação?", options: ["Nada a mais", "Uma hashtag escondida no fim", "Uma declaração clara como \"Obrigado à [loja] pelas sapatilhas grátis\"", "Uma opinião falsa"], answer: 2, why: "A FTC diz que os produtos grátis contam e têm de ser declarados claramente." },
          { objective: "O6", q: "Qual é mais provavelmente uma métrica de vaidade para um objetivo de clínica?", options: ["Inscrições", "Cliques no link", "Perguntas sobre a clínica", "Só o número de seguidores"], answer: 3, why: "Os seguidores não mostram progresso nas inscrições." },
          { objective: "O6", q: "Depois da primeira semana, o melhor passo a seguir é:", options: ["Desistir", "Fazer uma mudança com base nos seus números", "Mudar tudo", "Comprar seguidores"], answer: 1, why: "Uma mudança de cada vez mostra o que funciona." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Estratégias de Marketing Digital com IA para Atletas",
    questions: [
      { objective: "O1", q: "Marketing quer dizer:", options: ["Publicar ao acaso", "Comprar seguidores", "Fazer com que as pessoas certas o conheçam, gostem de você e confiem em você", "Só vender coisas"], answer: 2, why: "Trata-se das pessoas certas e da confiança." },
      { objective: "O1", q: "O que quer dizer o T de SMART (em inglês, Time-bound)?", options: ["Com tempo definido", "Na moda", "Total", "Equipa"], answer: 0, why: "Um objetivo SMART tem um prazo." },
      { objective: "O1", q: "Que objetivo NÃO é SMART?", options: ["Ficar famoso", "Ter 10 respostas de treinadores até 1 de março", "Vender 30 lugares no campo de treino até 15 de maio", "Ter 200 visualizações dos melhores momentos até sexta-feira"], answer: 0, why: "\"Ficar famoso\" não tem número nem data." },
      { objective: "O2", q: "Um perfil do público inclui:", options: ["As palavras-passe deles", "Só as suas estatísticas", "Quem são e o que lhes importa", "As estatísticas do seu rival"], answer: 2, why: "Descreve as pessoas que quer alcançar." },
      { objective: "O2", q: "Os pais do campo de treino podem passar tempo em:", options: ["Só jogos de vídeo", "Grupos do Facebook e lugares da zona", "Só o LinkedIn", "Em lado nenhum na internet"], answer: 1, why: "Escolha canais onde esse público está." },
      { objective: "O3", q: "Como deve escolher os canais?", options: ["O que estiver na moda", "Onde o seu público já passa tempo", "Todos", "Ao acaso"], answer: 1, why: "Vá onde o seu público está." },
      { objective: "O3", q: "Envolvimento (engagement) quer dizer:", options: ["Ficar noivo", "Só seguidores", "Como as pessoas reagem: gostos, comentários, partilhas, guardados", "Anúncios"], answer: 2, why: "O envolvimento mostra interesse real." },
      { objective: "O4", q: "O que deve dar à IA para preparar o seu plano?", options: ["A sua palavra-passe", "A morada da sua casa", "Os seus dados bancários", "Objetivo, perfil do público e canais"], answer: 3, why: "Isso faz o plano servir o seu objetivo." },
      { objective: "O4", q: "Uma boa tabela do plano inclui:", options: ["Ideia, formato e apelo à ação", "Só hashtags", "Só datas", "As suas notas da escola"], answer: 0, why: "Cada publicação precisa de uma ideia, um formato e um próximo passo." },
      { objective: "O4", q: "Qual é um apelo à ação?", options: ["\"Bom dia\"", "\"Inscreva-se no link\"", "\"Lol\"", "\"O jogo foi divertido\""], answer: 1, why: "Diz às pessoas o que fazer a seguir." },
      { objective: "O5", q: "A IA escreve uma legenda. Você deve:", options: ["Publicá-la sem ler", "Copiar a de outra pessoa", "Reescrevê-la com a sua própria voz", "Acrescentar estatísticas falsas"], answer: 2, why: "As pessoas seguem você porque é verdadeiro." },
      { objective: "O5", q: "O que nunca deve publicar?", options: ["Estatísticas falsas", "Os seus melhores momentos", "Um agradecimento ao seu treinador", "As informações do seu campo de treino"], answer: 0, why: "A honestidade importa; as pessoas verificam." },
      { objective: "O5", q: "Onde deve ficar uma declaração?", options: ["Escondida entre muitas hashtags", "Só na sua biografia", "Em lado nenhum", "Junto da publicação, fácil de ver"], answer: 3, why: "A FTC diz que as declarações têm de ser difíceis de não ver." },
      { objective: "O5", q: "Num vídeo patrocinado, a declaração deve ser:", options: ["Só na descrição", "Dita e mostrada no ecrã", "Deixada de fora", "Num comentário"], answer: 1, why: "As declarações dos vídeos devem estar no próprio vídeo." },
      { objective: "O5", q: "A quem deve um atleta universitário perguntar sobre a declaração de acordos NIL?", options: ["A um adepto qualquer", "Ao gabinete de conformidade", "Só a uma IA", "A ninguém"], answer: 1, why: "As regras mudam conforme a escola e o nível." },
      { objective: "O6", q: "Onde costuma encontrar os números das publicações?", options: ["Na aplicação do tempo", "No seu calendário", "Em lado nenhum", "Nas estatísticas (insights ou analytics) da aplicação"], answer: 3, why: "As contas profissionais ou de criador mostram estatísticas." },
      { objective: "O6", q: "Para um objetivo de recrutamento, que número importa mais?", options: ["Respostas de treinadores", "Gostos ao acaso", "Número de emojis", "Cor do perfil"], answer: 0, why: "As respostas de treinadores mostram progresso real." },
      { objective: "O6", q: "Com que frequência deve registar os seus números?", options: ["Uma vez por ano", "Nunca", "Todas as semanas", "Todos os minutos"], answer: 2, why: "Todas as semanas deixa ajustar a tempo." },
      { objective: "O6", q: "A IA sugere uma mudança. Quem decide?", options: ["A IA", "Os seus seguidores", "Ninguém", "Você"], answer: 3, why: "A IA sugere; você decide." },
      { objective: "O6", q: "Quantas mudanças deve fazer por semana?", options: ["Dez", "Uma", "Tudo", "Nenhuma, nunca"], answer: 1, why: "Uma mudança de cada vez mostra o que funcionou." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 5, 8, 10, 12, 16, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Objetivo SMART", objective: "O1", notYet: "O objetivo é vago ou não tem número nem data.", meets: "Um objetivo com as cinco partes SMART para as próximas quatro semanas.", exceeds: "O objetivo liga-se claramente ao recrutamento, ao NIL, a um campo de treino ou a um passo na carreira e é realista para o horário do atleta." },
      { name: "Público e canais", objective: "O3", notYet: "Não há perfil do público, ou os canais foram escolhidos pela moda e não pelo público.", meets: "Um perfil curto do público e dois canais escolhidos porque o público está lá, com as regras de idade e a privacidade verificadas.", exceeds: "O perfil foi confirmado com pessoas reais e as razões para cada canal citam o que elas disseram." },
      { name: "Plano de publicações de 4 semanas", objective: "O4", notYet: "As publicações não têm formato ou apelo à ação, ou o plano partilha a localização ou a casa.", meets: "Uma tabela de 4 semanas com ideia, formato e apelo à ação para cada publicação, ajustada ao horário e segura.", exceeds: "Cada apelo à ação aponta para o objetivo e o plano equilibra os dois canais." },
      { name: "Publicações honestas", objective: "O5", notYet: "As legendas parecem texto copiado da IA, têm afirmações não provadas ou falta-lhes uma declaração necessária.", meets: "Publicações com a voz do próprio atleta, sem afirmações não provadas e com uma declaração clara para qualquer benefício de uma marca.", exceeds: "As declarações dos vídeos são ditas e mostradas, e a declaração de acordos NIL foi verificada com o gabinete de conformidade quando é preciso." },
      { name: "Acompanhamento e mudança", objective: "O6", notYet: "Menos de três números, ou nenhuma mudança escrita para a segunda semana.", meets: "Três números ligados ao objetivo registados na primeira semana e uma mudança escrita para a segunda semana.", exceeds: "A melhor e a pior publicação são identificadas, com os números que explicam a mudança." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o plano, põem em prática a primeira semana e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que dizem ter alcançado o seu objetivo SMART até à data (inquérito de seguimento)",
      "Alunos que dizem ter um resultado concreto: respostas de treinadores, inscrições no campo de treino ou uma conversa com uma marca",
      "Alunos que ainda registam os números semanais 30 dias depois"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com as duas aplicações de redes sociais escolhidas",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Uma folha de cálculo gratuita (Google Sheets) para os números semanais",
      "O seu horário de treinos e da escola",
      "Cerca de 60 minutos de lições e mais cerca de 30 minutos por semana durante quatro semanas"
    ],
    facilitatorNotes: [
      "Com atletas com menos de 18 anos, envolva os pais ou os tutores antes de as contas ficarem públicas ou de se contactarem marcas.",
      "Revejam em grupo as definições de segurança: quem pode enviar mensagens, marcar e ver a localização; nunca partilhem a localização em tempo real, a casa nem o horário da escola.",
      "Chame o gabinete de conformidade ou o contacto da liga para explicar as regras de declaração de acordos NIL antes de os atletas aceitarem qualquer acordo.",
      "Verifique cada rascunho, para ver se as afirmações são honestas e se há uma declaração clara, antes de ser publicado.",
      "Faça um pequeno encontro semanal para os atletas partilharem os números e a sua única mudança."
    ]
  }
};
