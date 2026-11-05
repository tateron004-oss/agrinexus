"use strict";

// Koach Learn course (Portuguese translation of shared/video-editing-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "video-editing-basics-pt",
  lang: "pt",
  translationOf: "video-editing-basics",
  category: "Workforce Development",
  name: "Noções Básicas de Edição de Vídeo",
  skills: "Ler um briefing e organizar as gravações, Preparar um projeto, Montar uma primeira versão, Usar imagens de apoio e cortes mais limpos, Corrigir o som e acrescentar legendas, Exportar e montar um portfólio",
  outcome: "pegar nos seus próprios clipes e num briefing curto, editá-los num editor de vídeo gratuito até ter um vídeo limpo de 30 a 60 segundos, com som claro e legendas, exportá-lo no formato certo para o sítio onde vai passar e usá-lo como a primeira peça de um portfólio de trabalho.",
  about: [
    "Este curso é para quem quer editar vídeo para trabalhar: jovens à procura de um primeiro emprego criativo, adultos que mudam de profissão, atletas e treinadores que fazem vídeos com os melhores momentos, e donos de pequenos negócios que querem vídeos para a sua loja. Não precisa de já ter editado antes.",
    "Você vai trabalhar como um editor de verdade: ler um briefing, organizar os ficheiros, montar uma primeira versão, torná-la mais fluida com imagens de apoio e cortes melhores, corrigir o som, acrescentar legendas e exportar o ficheiro final. Tudo funciona com editores gratuitos como o DaVinci Resolve, o Microsoft Clipchamp, o CapCut ou o editor que já vem no seu telefone.",
    "Cada lição dura cerca de cinco minutos e é seguida de uma tarefa \"Experimente agora\" com os seus próprios clipes. Há uma pequena verificação de duas perguntas depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. O seu produto final é um vídeo curto terminado e uma nota de portfólio que pode mostrar a um empregador ou cliente.",
    "Este curso prepara você. Não dá um certificado. Se quiser uma certificação mais tarde, a Lição 6 mostra duas verdadeiras e onde as verificar."
  ],
  finalTask: "Edite um vídeo de 30 a 60 segundos com as suas próprias gravações para um briefing real ou de prática (por exemplo os melhores momentos de uma equipa, a promoção de uma loja do bairro ou a história de um programa de emprego). Entregue: uma pasta de projeto com nome, o vídeo final exportado no formato certo para o sítio onde vai passar, com imagens de apoio, som limpo, legendas e só música que tem autorização para usar, e uma nota de portfólio curta que diga o briefing, o seu papel e as ferramentas que usou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos em programas de emprego e formação, atletas e treinadores, e donos de pequenos negócios nos EUA e noutros países. A maioria já filmou vídeo num telefone; poucos editaram mais do que pôr um filtro numa aplicação de redes sociais.",
    startingPoint: "Sabe gravar vídeo num telefone e publicar nas redes sociais. Nunca usou uma linha do tempo, não conhece a proporção da imagem nem a taxa de fotogramas, e nunca exportou um ficheiro para outra pessoa.",
    gap: "Empresas, escolas, equipas e organizações sem fins lucrativos precisam todas de vídeos curtos, e muitos empregos de entrada e trabalhos por conta própria (assistente de redes sociais, criador de conteúdos, editor júnior) pedem noções básicas de edição e uma amostra do seu trabalho. Os alunos precisam de uma forma que possam repetir para transformar clipes e um briefing num vídeo limpo e terminado, e de uma peça terminada para mostrar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo de edição é explicado",
      "Aparelhos: um telefone, ou um computador em casa, numa biblioteca ou num centro de emprego; só editores gratuitos",
      "Os menus dos editores mudam muitas vezes, por isso as lições ensinam ações e não nomes exatos de menus",
      "Tempo: lições de 4 a 6 minutos e cerca de uma hora de edição prática para a tarefa final",
      "Regras: autorização das pessoas que aparecem no vídeo (e de um pai ou mãe para quem tem menos de 18 anos) e música que o aluno pode usar"
    ],
    prerequisites: "Saber gravar vídeo num telefone e passar ficheiros para um computador ou entre aplicações. Quem é novo em telefones ou computadores pode fazer primeiro \"Competências Básicas de Informática\" ou \"Usar um Smartphone e um Tablet\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um briefing curto e um conjunto de clipes sem edição", action: "organizar as gravações numa pasta de projeto com nome e definir a proporção e a taxa de fotogramas do projeto de acordo com o sítio onde o vídeo vai passar", standard: "com cada clipe fácil de encontrar e nenhum clipe esticado ou cortado por engano" },
    { id: "O2", condition: "Usando um editor de vídeo gratuito", action: "montar uma primeira versão aparando, dividindo e ordenando os clipes na linha do tempo em início, meio e fim", standard: "que conte a história do briefing na duração pedida, sem tempo morto" },
    { id: "O3", condition: "Com uma primeira versão", action: "acrescentar imagens de apoio, planos de corte e transições simples para esconder saltos e manter o vídeo a andar", standard: "usando no máximo um ou dois tipos de transição" },
    { id: "O4", condition: "Com uma montagem com fala e música", action: "equilibrar os níveis de som e acrescentar legendas e texto no ecrã corretos", standard: "para que cada palavra se ouça e se leia, o medidor nunca chegue ao topo e toda a música seja usada com autorização" },
    { id: "O5", condition: "Com uma edição terminada", action: "exportar o vídeo com definições adequadas à plataforma, revê-lo de acordo com o briefing e escrever uma nota de portfólio curta", standard: "para que o ficheiro passe bem à primeira e a nota diga o briefing, o seu papel e as suas ferramentas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Dos clipes à primeira versão",
      lessons: [
        {
          title: "Ler o briefing e organizar as gravações",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escrever um briefing e preparar uma pasta de projeto com nome, com os clipes arrumados.",
          text: [
            "Cada trabalho de edição começa com um briefing: uma descrição curta do objetivo do vídeo. Um bom briefing responde a cinco perguntas: quem o vai ver, onde vai passar (por exemplo YouTube, Instagram Reels, TikTok, uma televisão na montra de uma loja), quanto tempo deve durar, que mensagem única deve transmitir e para quando é.",
            "Depois, organize. Os editores perdem horas à procura de clipes. Faça uma pasta de projeto com um nome claro, como \"2026-11 Promoção padaria\". Dentro dela, faça pastas para vídeo, áudio, música, gráficos e exportações. Copie os seus clipes para lá e dê nomes curtos aos melhores, como \"forno-de-perto\" ou \"entrevista-dona\".",
            "Guarde uma segunda cópia dos clipes originais noutro sítio, como uma pen USB ou um armazenamento na nuvem. Se um telefone se partir ou um ficheiro for apagado, o trabalho não se perde.",
            "Verifique as autorizações agora, não depois de publicar. Todas as pessoas que se veem ou se ouvem com clareza devem aceitar aparecer no vídeo, e quem tem menos de 18 anos precisa também da aceitação de um pai, mãe ou tutor."
          ],
          steps: ["Escreva o briefing: público, plataforma, duração, mensagem única, data de entrega.", "Faça uma pasta de projeto com um nome claro e a data.", "Acrescente pastas para vídeo, áudio, música, gráficos e exportações.", "Copie os clipes para lá e mude o nome aos melhores.", "Faça uma cópia de segurança dos clipes originais noutro sítio.", "Confirme que todas as pessoas filmadas aceitaram."],
          words: [["Briefing", "uma descrição curta do objetivo de um vídeo: para quem é, onde passa, quanto dura, a mensagem e a data de entrega."], ["Gravações", "os clipes de vídeo que filmou, antes de editar."], ["Cópia de segurança", "uma segunda cópia dos seus ficheiros guardada noutro sítio."], ["Cliente", "a pessoa ou empresa para quem está a fazer o vídeo."]],
          slides: [
            { title: "Um briefing responde a cinco perguntas", bullets: ["Quem o vai ver?", "Onde vai passar?", "Quanto dura? Que mensagem única?", "Para quando é?"] },
            { title: "Uma pasta de projeto clara", bullets: ["Dê-lhe um nome com a data e o trabalho", "Pastas: vídeo, áudio, música, gráficos, exportações", "Mude o nome aos melhores clipes"] },
            { title: "Proteja o trabalho", bullets: ["Cópia de segurança dos clipes noutro sítio", "Autorização de todas as pessoas filmadas", "Um pai, mãe ou tutor para quem tem menos de 18 anos"] }
          ],
          tryIt: "Escolha o vídeo que vai fazer para a tarefa final (os melhores momentos de uma equipa, a promoção de uma loja, a história de um programa de emprego ou uma ideia sua). Escreva num papel um briefing de cinco linhas. Depois faça a pasta de projeto com as cinco pastas de dentro, copie 8 a 15 clipes que filmou e mude o nome aos cinco melhores.",
          youCanNow: "escrever um briefing curto e preparar uma pasta de projeto onde cada clipe é fácil de encontrar.",
          quickCheck: [
            { objective: "O1", q: "O que deve estar num briefing de vídeo?", options: ["A sua cor preferida", "Onde o vídeo vai passar e quanto tempo deve durar", "O preço do seu telefone", "Uma lista de todas as aplicações que tem"], answer: 1, why: "Onde passa e quanto dura decidem todas as escolhas de edição que vêm a seguir." },
            { objective: "O1", q: "O seu telefone tem a única cópia dos clipes de um cliente. O que faz primeiro?", options: ["Começa logo a editar", "Apaga os clipes de que não gosta", "Publica os clipes para ficarem guardados na internet", "Copia-os para outro sítio, como uma pen USB ou a nuvem"], answer: 3, why: "Uma cópia de segurança noutro sítio faz com que um telefone partido ou um ficheiro apagado não faça perder o trabalho." }
          ]
        },
        {
          title: "Preparar o projeto: formato, tamanho e velocidade",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher a proporção, a resolução e a taxa de fotogramas de um projeto antes de editar.",
          text: [
            "Antes de editar, diga ao editor o formato e o tamanho do vídeo final. A proporção da imagem é o formato. O largo 16:9 serve para o YouTube, computadores portáteis e televisões. O alto 9:16 serve para aplicações de telefone como TikTok, Instagram Reels e YouTube Shorts. O quadrado 1:1 serve para alguns feeds. Escolha o formato a partir do briefing.",
            "A resolução é quantos pontos (píxeis) formam a imagem. 1920 por 1080, muitas vezes chamado 1080p ou Full HD, é uma escolha segura para a maioria dos trabalhos. Para um vídeo alto, é 1080 de largura por 1920 de altura.",
            "A taxa de fotogramas é quantas imagens paradas passam em cada segundo, escrita como fps. As taxas mais comuns são 24, 30 e 60. Defina o projeto com a taxa em que foi filmada a maioria dos seus clipes. Pode ver os detalhes de um clipe no editor ou nas informações do ficheiro no computador ou no telefone.",
            "Se o formato estiver errado, o editor acrescenta barras pretas ou corta os lados. Se misturar taxas de fotogramas, o movimento pode parecer aos saltos. Definir isto primeiro poupa muitas correções depois."
          ],
          steps: ["Leia o briefing: onde vai passar o vídeo?", "Escolha o formato: 16:9 largo, 9:16 alto ou 1:1 quadrado.", "Escolha o tamanho: 1920 x 1080 largo, ou 1080 x 1920 alto.", "Veja a taxa de fotogramas dos clipes e defina o projeto igual.", "Comece o projeto e importe os clipes."],
          words: [["Proporção da imagem", "o formato do vídeo, escrito como largura para altura, como 16:9 (largo) ou 9:16 (alto)."], ["Resolução", "quantos píxeis formam a imagem, como 1920 x 1080."], ["Píxel", "um pontinho de cor num ecrã."], ["Taxa de fotogramas (fps)", "quantas imagens paradas passam em cada segundo, como 24, 30 ou 60."], ["Importar", "trazer os clipes para dentro do programa de edição."]],
          slides: [
            { title: "Formato: proporção da imagem", bullets: ["16:9 largo: YouTube, portáteis, televisões", "9:16 alto: TikTok, Reels, Shorts", "1:1 quadrado: alguns feeds"] },
            { title: "Tamanho: resolução", bullets: ["1920 x 1080 (1080p) é seguro para a maioria dos trabalhos", "Alto: 1080 de largura x 1920 de altura"] },
            { title: "Velocidade: taxa de fotogramas", bullets: ["24, 30 ou 60 fotogramas por segundo", "Igual à taxa em que foi filmada a maioria dos clipes"] },
            { title: "Porque definir primeiro", bullets: ["Formato errado = barras pretas ou lados cortados", "Taxas misturadas = movimento aos saltos"] }
          ],
          sources: [
            { name: "Blackmagic Design: DaVinci Resolve (versão gratuita para Mac, Windows e Linux)", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
            { name: "Microsoft Clipchamp: planos, incluindo o plano gratuito", url: "https://clipchamp.com/en/pricing/" }
          ],
          tryIt: "Abra um editor gratuito: DaVinci Resolve ou Clipchamp num computador, ou CapCut ou o editor do seu telefone num telefone. Veja a taxa de fotogramas de três dos seus clipes. Comece um projeto novo com o formato e a taxa de fotogramas de que o briefing precisa e importe os clipes.",
          youCanNow: "preparar um projeto com o formato, o tamanho e a taxa de fotogramas certos para o sítio onde o vídeo vai passar.",
          quickCheck: [
            { objective: "O1", q: "O briefing diz que o vídeo vai ser um Instagram Reel. Que formato escolhe?", options: ["16:9 largo", "4:3 televisão antiga", "9:16 alto", "21:9 cinema"], answer: 2, why: "Os Reels, o TikTok e os Shorts passam na vertical no telefone, por isso o 9:16 enche o ecrã." },
            { objective: "O1", q: "A maioria dos seus clipes foi filmada a 30 fps. Que taxa deve usar o projeto?", options: ["30 fps, igual aos clipes", "60 fps, porque mais alto é sempre melhor", "Qualquer taxa; não faz diferença", "24 fps, porque os filmes a usam"], answer: 0, why: "Usar a mesma taxa da maioria dos clipes mantém o movimento suave." }
          ]
        },
        {
          title: "Montar uma primeira versão na linha do tempo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Aparar, dividir e ordenar os clipes na linha do tempo numa história que caiba na duração pedida.",
          text: [
            "A linha do tempo é a faixa onde põe os clipes por ordem, da esquerda para a direita. O cursor de reprodução é a linha que mostra onde você está. A primeira versão (em inglês \"rough cut\") é a sua primeira versão completa: os clipes certos, pela ordem certa, com mais ou menos a duração certa. Ainda não precisa de ficar bonita.",
            "Monte-a em três partes. O início chama a atenção nos primeiros segundos. O meio mostra a mensagem principal. O fim diz ao espectador o que fazer ou lembrar. Para uma padaria: pão fresco a sair do forno, a dona a dizer porque começou, e depois a placa da loja e o horário.",
            "Duas ferramentas fazem a maior parte do trabalho. Aparar corta o início ou o fim de um clipe. Dividir corta um clipe em dois no cursor de reprodução, para poder tirar uma parte do meio. Comece cada plano mesmo antes da ação e termine-o logo depois. Tire o tempo morto: esperas, olhar para a câmara, \"hum\" e pausas longas.",
            "Veja a primeira versão toda desde o início. Se for mais longa do que o briefing permite, tire planos inteiros antes de encurtar os bons. Guarde muitas vezes, e guarde uma cópia com um número de versão (v1, v2) antes de grandes mudanças."
          ],
          steps: ["Arraste os melhores clipes para a linha do tempo pela ordem da história: início, meio, fim.", "Apare o início e o fim de cada clipe para começar mesmo antes da ação.", "Divida os clipes para tirar pausas, erros e tempo morto.", "Veja desde o início e compare a duração com o briefing.", "Se estiver longo demais, tire planos fracos inteiros.", "Guarde como v1."],
          words: [["Linha do tempo", "a faixa num editor onde os clipes são postos por ordem, da esquerda para a direita."], ["Cursor de reprodução", "a linha na linha do tempo que mostra o momento que está a ver."], ["Aparar", "encurtar um clipe cortando o início ou o fim."], ["Dividir", "cortar um clipe em duas partes no cursor de reprodução."], ["Primeira versão", "a primeira versão completa de uma edição, com os clipes certos por ordem mas ainda sem acabamento."], ["Tempo morto", "partes onde não acontece nada útil, como esperas ou pausas longas."]],
          slides: [
            { title: "A linha do tempo", bullets: ["Clipes por ordem, da esquerda para a direita", "O cursor de reprodução mostra onde está", "Primeira versão = primeira versão completa"] },
            { title: "Início, meio, fim", bullets: ["Chame a atenção nos primeiros segundos", "Mostre a mensagem principal", "Termine com o que fazer ou lembrar"] },
            { title: "Aparar e dividir", bullets: ["Aparar: cortar o início ou o fim", "Dividir: cortar um clipe em dois no cursor", "Tire esperas, pausas e \"hum\""] },
            { title: "Verificar e guardar", bullets: ["Veja desde o início", "Longo demais? Tire primeiro planos inteiros", "Guarde versões: v1, v2"] }
          ],
          tryIt: "No seu projeto, monte uma primeira versão do vídeo da tarefa final. Ponha os clipes pela ordem início-meio-fim, apare cada um, divida para tirar pelo menos duas pausas ou erros e fique a menos de 10 segundos da duração pedida. Guarde como v1 e anote a duração.",
          youCanNow: "montar uma primeira versão que conta uma história na duração pedida, sem tempo morto.",
          quickCheck: [
            { objective: "O2", q: "Precisa de tirar uma pausa longa do meio de um clipe de entrevista. Que ferramenta usa?", options: ["Mudar a proporção da imagem", "Exportar o clipe", "Acrescentar uma transição", "Dividir o clipe nas duas pontas da pausa e apagar o meio"], answer: 3, why: "Dividir nas duas pontas da pausa permite tirar só a parte do meio." },
            { objective: "O2", q: "A sua primeira versão tem 20 segundos a mais. O que tenta primeiro?", options: ["Acelerar o vídeo todo", "Tirar planos fracos inteiros", "Encurtar cada clipe um segundo", "Mudar a taxa de fotogramas"], answer: 1, why: "Tirar planos fracos mantém os bons inteiros e a história clara." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Dos clipes à primeira versão",
        questions: [
          { objective: "O1", q: "A dona de uma loja pede um vídeo para a televisão da montra. Que formato serve para uma televisão?", options: ["9:16 alto", "16:9 largo", "1:1 quadrado", "Qualquer formato; as televisões ajustam"], answer: 1, why: "As televisões são ecrãs largos, por isso o 16:9 enche-os sem barras pretas." },
          { objective: "O1", q: "Que nome de pasta de projeto é o mais útil?", options: ["\"coisas\"", "\"Nova pasta (3)\"", "\"vídeo final final\"", "\"2026-11 Promoção padaria\""], answer: 3, why: "Uma data e o nome do trabalho tornam a pasta fácil de encontrar depois." },
          { objective: "O2", q: "O que é uma primeira versão?", options: ["A primeira versão completa com os clipes certos por ordem", "Um vídeo com um risco na lente", "O ficheiro final já exportado", "Um clipe mal filmado"], answer: 0, why: "Uma primeira versão já tem a história no lugar; o acabamento vem depois." },
          { objective: "O2", q: "Onde deve normalmente começar um plano?", options: ["Logo que carregou em gravar", "Depois de a ação acabar", "Mesmo antes da ação", "A meio da ação"], answer: 2, why: "Começar mesmo antes da ação tira o tempo morto e mantém o vídeo a andar." },
          { objective: "O2", q: "Antes de uma grande mudança na edição, que hábito é bom?", options: ["Apagar a versão antiga para poupar espaço", "Fechar o editor sem guardar", "Mudar a proporção da imagem", "Guardar uma cópia com um número de versão, como v2"], answer: 3, why: "As cópias de versão permitem voltar atrás se a mudança não resultar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Acabamento e entrega",
      lessons: [
        {
          title: "Tornar a edição fluida com imagens de apoio e cortes melhores",
          objectives: ["O3"],
          minutes: 5,
          goal: "Acrescentar imagens de apoio, um plano de corte e um corte em L ou em J para tornar a primeira versão mais fluida.",
          text: [
            "Quando corta uma parte de uma entrevista, a cara dá um salto. Isto chama-se corte com salto (em inglês \"jump cut\"). Os editores escondem-no com imagens de apoio (em inglês \"B-roll\"): planos que mostram aquilo de que a pessoa está a falar. Um treinador fala do treino; vemos os jogadores a fazer exercícios. A voz continua enquanto a imagem muda.",
            "Um plano de corte é um plano curto de algo próximo, como mãos, o público ou um marcador, posto entre dois planos da mesma coisa. Misture planos gerais, médios e grandes planos para o espectador ver o lugar, as pessoas e os detalhes.",
            "Dois truques profissionais são fáceis. Num corte em L, a imagem muda para o plano seguinte enquanto o som do primeiro plano continua. Num corte em J, ouve o plano seguinte antes de o ver. Os dois tornam a edição fluida e natural. A maioria dos editores deixa desligar ou separar o som da imagem para fazer isto.",
            "Use poucas transições. Os profissionais usam um corte simples quase sempre. Use uma ou duas transições simples, como um desvanecimento curto no início e no fim. Muitas transições vistosas, que varrem ou giram, fazem o vídeo parecer feito por um principiante."
          ],
          steps: ["Veja a primeira versão e marque cada corte com salto.", "Ponha imagens de apoio na faixa por cima da entrevista para tapar cada salto.", "Acrescente pelo menos um plano de corte (mãos, público, placa, marcador).", "Experimente um corte em L ou em J separando o som da imagem.", "Use cortes simples, com no máximo uma ou duas transições simples.", "Guarde como v2."],
          words: [["Imagens de apoio (B-roll)", "planos extra que mostram aquilo de que alguém está a falar, postos por cima da sua voz."], ["Corte com salto", "um salto repentino na imagem quando se corta parte de um plano."], ["Plano de corte", "um plano curto de algo próximo, posto entre dois planos do mesmo assunto."], ["Corte em L e corte em J", "cortes em que o som e a imagem mudam em momentos diferentes, para o corte parecer suave."], ["Transição", "um efeito entre dois clipes, como um desvanecimento."]],
          slides: [
            { title: "Esconda os saltos", bullets: ["Cortar uma entrevista faz a cara saltar", "Tape com imagens de apoio que mostram o assunto", "A voz continua por baixo"] },
            { title: "Misture os planos", bullets: ["Plano geral: o lugar", "Plano médio: as pessoas", "Grande plano: os detalhes", "Planos de corte: mãos, público, placa"] },
            { title: "Corte em L e corte em J", bullets: ["Corte em L: a imagem muda, o som continua", "Corte em J: ouve o plano seguinte antes de o ver", "Separe o som da imagem para o fazer"] },
            { title: "Transições: menos é mais", bullets: ["Cortes simples quase sempre", "No máximo um ou dois desvanecimentos simples"] }
          ],
          tryIt: "Abra a sua v1. Tape cada corte com salto com imagens de apoio, acrescente pelo menos um plano de corte e faça um corte em L ou em J. Tire as transições vistosas para não usar mais de dois tipos. Guarde como v2 e veja a v1 e a v2 lado a lado.",
          youCanNow: "usar imagens de apoio, planos de corte e cortes em L ou em J para tornar uma edição fluida e fácil de ver.",
          quickCheck: [
            { objective: "O3", q: "Uma entrevista tem um corte com salto onde tirou uma frase. Como o esconde?", options: ["Põe imagens de apoio sobre o salto enquanto a voz continua", "Acrescenta uma transição que gira", "Põe o vídeo mais alto", "Muda a taxa de fotogramas"], answer: 0, why: "As imagens de apoio tapam o salto na imagem enquanto a fala continua." },
            { objective: "O3", q: "Ouve o público a aplaudir antes de a imagem mudar para o público. Como se chama isto?", options: ["Um corte com salto", "Um corte em L", "Uma primeira versão", "Um corte em J"], answer: 3, why: "Num corte em J o som do plano seguinte começa antes da sua imagem." }
          ]
        },
        {
          title: "Corrigir o som, acrescentar música e legendas",
          objectives: ["O4"],
          minutes: 6,
          goal: "Equilibrar os níveis da voz e da música, acrescentar música que tem autorização para usar e acrescentar legendas corretas.",
          text: [
            "Os espectadores perdoam uma imagem razoável, mas não um som mau. Use o medidor de áudio: mostra quão alto está o som. Se chegar ao topo e ficar vermelho, o som vai estalar. Um objetivo comum é ter as vozes com picos perto de -6 no medidor, a música muito mais baixa por baixo da fala, e nada a chegar a 0.",
            "Use só música que pode usar: música que você fez, música com autorização escrita, ou a biblioteca gratuita do seu editor ou plataforma, seguindo as regras dela. A Biblioteca de Áudio do YouTube oferece música para vídeos do YouTube; algumas faixas pedem que dê crédito ao artista. Dar crédito, por si só, não lhe dá autorização para usar a canção de outra pessoa, e não existe um número seguro de segundos.",
            "Muitas pessoas veem vídeos sem som, e as legendas também ajudam os espectadores surdos ou com dificuldades de audição. A maioria dos editores consegue fazer legendas automáticas. Leia-as sempre e corrija cada erro, sobretudo nomes, lugares e números.",
            "Acrescente texto no ecrã com cuidado: um título curto, o nome e a função de uma pessoa na primeira vez que fala, e um cartão final com a mensagem ou o apelo à ação. Use letras grandes e simples e mantenha o texto longe das margens, onde as aplicações põem os seus botões."
          ],
          steps: ["Passe a edição e veja o medidor de áudio.", "Baixe qualquer clipe que fique vermelho; suba as vozes baixas demais.", "Acrescente música que pode usar e baixe-a por baixo da fala.", "Ligue as legendas automáticas e depois leia e corrija cada palavra.", "Acrescente um título, uma etiqueta com nome e um cartão final em letras grandes e simples.", "Guarde como v3."],
          words: [["Medidor de áudio", "a barra que mostra quão alto está o som."], ["Saturação (clipping)", "som a estalar quando o nível chega ao topo do medidor."], ["Sem direitos de autor a pagar (royalty-free)", "música que pode usar sem pagar cada vez que passa, segundo as regras da biblioteca; continua a ter regras."], ["Legendas", "as palavras faladas mostradas como texto no ecrã."], ["Apelo à ação", "o que quer que o espectador faça a seguir, como \"Visite-nos no sábado\"."]],
          slides: [
            { title: "Veja o medidor", bullets: ["Vermelho no topo = som a estalar", "Vozes com picos perto de -6", "Música muito mais baixa por baixo da fala"] },
            { title: "Música que pode usar", bullets: ["A sua própria música ou autorização escrita", "A biblioteca do editor ou da plataforma, com as regras dela", "Dar crédito não é autorização"] },
            { title: "Legendas", bullets: ["Muitos espectadores veem sem som", "Ajudam espectadores surdos ou com dificuldades de audição", "Leia e corrija cada legenda automática"] },
            { title: "Texto no ecrã", bullets: ["Título curto e etiquetas com nomes", "Cartão final com o apelo à ação", "Letras grandes e simples, longe das margens"] }
          ],
          sources: [
            { name: "U.S. Copyright Office (serviço de direitos de autor dos EUA): perguntas frequentes sobre uso justo (fair use)", url: "https://www.copyright.gov/help/faq/faq-fairuse.html" },
            { name: "Ajuda do YouTube: usar música e efeitos sonoros da Biblioteca de Áudio", url: "https://support.google.com/youtube/answer/3376882" }
          ],
          tryIt: "Abra a sua v2. Veja o medidor e corrija qualquer clipe que fique vermelho. Acrescente música que pode usar e baixe-a por baixo da fala. Ligue as legendas automáticas e corrija cada erro. Acrescente um título, uma etiqueta com nome e um cartão final. Guarde como v3 e depois veja-a uma vez sem som para confirmar que as legendas contam a história.",
          youCanNow: "equilibrar os níveis de som, acrescentar música da forma certa e acrescentar legendas e texto que as pessoas conseguem ler.",
          quickCheck: [
            { objective: "O4", q: "O medidor de áudio fica vermelho no topo quando o treinador grita. O que faz?", options: ["Sobe o volume desse clipe", "Deixa ficar; vermelho quer dizer bom", "Baixa o nível desse clipe para ficar fora do vermelho", "Apaga as legendas"], answer: 2, why: "Vermelho no topo quer dizer saturação; baixar o nível acaba com o estalido." },
            { objective: "O4", q: "Um cliente quer uma canção famosa no anúncio. Você não tem autorização. O que é verdade?", options: ["Não há problema se usar só 10 segundos", "Dar crédito ao artista torna-o legal", "Os anúncios podem usar qualquer canção da rádio", "Precisa de autorização, ou use música de uma biblioteca com as regras dela"], answer: 3, why: "Não existe um número seguro de segundos e o crédito não é autorização, por isso peça autorização ou use música de biblioteca com licença." }
          ]
        },
        {
          title: "Exportar, rever e montar o seu portfólio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Exportar um vídeo terminado, compará-lo com o briefing e escrever uma nota de portfólio.",
          text: [
            "Exportar transforma o projeto num único ficheiro de vídeo. Para a maioria dos usos na internet, escolha um ficheiro MP4 com vídeo H.264, com o mesmo formato, tamanho e taxa de fotogramas do projeto. Dê ao ficheiro um nome claro, como \"bakery-promo-v3-9x16.mp4\", e guarde-o na pasta de exportações. No DaVinci Resolve isto faz-se na página chamada Deliver; outros editores usam um botão como Export ou Save.",
            "Nunca envie um ficheiro que não viu. Passe o ficheiro exportado do início ao fim no aparelho onde vai ser visto. Compare com o briefing: duração certa, formato certo, uma mensagem clara, som limpo, legendas e nomes corretos. Depois envie-o, peça comentários e faça as mudanças numa versão nova. Os clientes pedem muitas vezes mudanças; isso faz parte normal do trabalho.",
            "O seu portfólio é uma pequena coleção dos seus melhores trabalhos. Ponha o vídeo na internet onde lhe for permitido (com autorização do cliente e de todas as pessoas que aparecem) e escreva uma nota curta: o briefing, o que fez, as ferramentas que usou e o resultado. Os empregadores que contratam editores júnior, assistentes de redes sociais e criadores de conteúdos pedem muitas vezes amostras assim.",
            "As certificações podem ajudar mais tarde. A Certiport, uma empresa da Pearson VUE, aplica o exame Adobe Certified Professional em Digital Video Using Adobe Premiere. A Blackmagic Design oferece formação e exames na internet para se tornar editor certificado de DaVinci Resolve. Veja a página oficial de cada um para os requisitos e custos atuais. Este curso prepara você para continuar a aprender; não dá nenhuma destas certificações."
          ],
          steps: ["Exporte um MP4 (H.264) com o formato, o tamanho e a taxa de fotogramas do projeto.", "Dê ao ficheiro um nome claro e guarde-o na pasta de exportações.", "Veja o ficheiro todo no aparelho onde vai passar.", "Compare-o com cada linha do briefing.", "Envie-o, receba comentários e faça as mudanças numa versão nova.", "Escreva uma nota de portfólio: briefing, o seu papel, ferramentas, resultado."],
          words: [["Exportar", "transformar a edição num único ficheiro de vídeo terminado."], ["MP4 e H.264", "um tipo de ficheiro e um formato de vídeo comuns que passam na maioria dos telefones, computadores e sites."], ["Portfólio", "uma pequena coleção dos seus melhores trabalhos para mostrar a empregadores ou clientes."], ["Revisão", "uma mudança que um cliente pede depois de ver uma versão."], ["Certificação", "prova dada por uma organização reconhecida de que passou num teste às suas competências."]],
          slides: [
            { title: "Exporte o ficheiro", bullets: ["MP4 com H.264 para a maioria dos usos na internet", "Mesmo formato, tamanho e taxa de fotogramas do projeto", "Nome claro, guardado na pasta de exportações"] },
            { title: "Reveja antes de enviar", bullets: ["Veja o ficheiro todo no aparelho verdadeiro", "Compare com cada linha do briefing", "As mudanças vão para uma versão nova"] },
            { title: "A sua nota de portfólio", bullets: ["O briefing", "O que fez e as ferramentas que usou", "O resultado; partilhe só com autorização"] },
            { title: "Certificações para explorar mais tarde", bullets: ["Adobe Certified Professional em Premiere (Certiport)", "Certificação DaVinci Resolve (Blackmagic Design)", "Veja as páginas oficiais; este curso só prepara"] }
          ],
          sources: [
            { name: "Certiport: exames Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Certify" },
            { name: "Blackmagic Design: formação e certificação DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
            { name: "U.S. Bureau of Labor Statistics (serviço de estatísticas do trabalho dos EUA): editores de cinema e vídeo e operadores de câmara", url: "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm" }
          ],
          tryIt: "Tarefa final: exporte a sua v3 como MP4 no formato certo, dê-lhe um nome claro e veja-a no aparelho onde vai passar. Compare com o briefing e corrija o que não estiver de acordo. Depois escreva a sua nota de portfólio em quatro linhas: o briefing, o que fez, as ferramentas que usou e o resultado.",
          youCanNow: "exportar um vídeo terminado, compará-lo com um briefing e apresentá-lo como peça de portfólio.",
          quickCheck: [
            { objective: "O5", q: "Que nome de ficheiro é melhor para o vídeo terminado?", options: ["\"final.mp4\"", "\"bakery-promo-v3-9x16.mp4\"", "\"sem título (2).mp4\"", "\"video.mp4\""], answer: 1, why: "Diz o trabalho, a versão e o formato, por isso ninguém envia o ficheiro errado." },
            { objective: "O5", q: "Acabou de exportar o vídeo. O que faz antes de o enviar?", options: ["Envia-o logo para poupar tempo", "Apaga o projeto para poupar espaço", "Vê o ficheiro todo no aparelho onde vai passar e compara-o com o briefing", "Muda a taxa de fotogramas"], answer: 2, why: "Ver o ficheiro verdadeiro apanha os erros antes de o cliente os ver." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Acabamento e entrega",
        questions: [
          { objective: "O3", q: "O que são imagens de apoio (B-roll)?", options: ["O primeiro clipe na linha do tempo", "Um tipo de câmara", "Planos extra que mostram aquilo de que alguém está a falar", "Um ficheiro de música"], answer: 2, why: "As imagens de apoio põem-se por cima de uma voz para mostrar o assunto e esconder os saltos." },
          { objective: "O3", q: "Quantos tipos de transição deve normalmente usar o vídeo de trabalho de um principiante?", options: ["Um ou dois simples, com cortes simples quase sempre", "Uma diferente entre cada clipe", "Pelo menos dez", "Só efeitos que giram e varrem"], answer: 0, why: "Os profissionais usam sobretudo cortes simples; muitas transições vistosas parecem de amador." },
          { objective: "O4", q: "Porque deve ler as legendas automáticas antes de exportar?", options: ["As legendas tornam o vídeo mais lento", "As legendas mudam a proporção da imagem", "As legendas automáticas estão sempre perfeitas", "Erram muitas vezes nomes, lugares e números"], answer: 3, why: "As legendas automáticas têm erros, por isso verifica e corrige cada palavra." },
          { objective: "O4", q: "Onde deve ficar a música quando alguém está a falar?", options: ["Mais alta do que a voz", "Muito mais baixa do que a voz", "Mesmo no topo do medidor", "Sem som e apagada"], answer: 1, why: "Música baixa por baixo da fala mantém cada palavra clara." },
          { objective: "O5", q: "Um cliente pede duas mudanças depois de ver a v3. Qual é a resposta profissional?", options: ["Fazer as mudanças numa versão nova, a v4", "Recusar; o vídeo está terminado", "Apagar a v3 e começar de novo", "Enviar outra vez o mesmo ficheiro"], answer: 0, why: "As revisões fazem parte normal do trabalho, e uma versão nova mantém a antiga em segurança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Edição de Vídeo",
    questions: [
      { objective: "O1", q: "Um briefing diz: \"TikTok de 30 segundos para a nossa carrinha de comida, para sexta-feira.\" Que formato tem o projeto?", options: ["16:9 largo", "1:1 quadrado", "9:16 alto", "4:3"], answer: 2, why: "O TikTok passa na vertical nos telefones, por isso o 9:16 enche o ecrã." },
      { objective: "O1", q: "Qual é a principal razão para fazer uma pasta de projeto com nome e pastas lá dentro?", options: ["Para cada clipe e ficheiro ser fácil de encontrar", "Faz o vídeo passar mais depressa", "Os editores não abrem ficheiros sem ela", "Acrescenta legendas automaticamente"], answer: 0, why: "Pastas organizadas poupam tempo e evitam ficheiros perdidos ou errados." },
      { objective: "O1", q: "O que descreve \"1920 x 1080\"?", options: ["A taxa de fotogramas", "Só a proporção da imagem", "A duração em segundos", "A resolução, em píxeis"], answer: 3, why: "1920 x 1080 é a largura e a altura em píxeis, muitas vezes chamado 1080p." },
      { objective: "O1", q: "Quer filmar um jogador de 15 anos para um vídeo com os melhores momentos da equipa. Quem tem de aceitar?", options: ["Só o treinador", "O jogador e um pai, mãe ou tutor", "Ninguém, se for um jogo público", "Só a outra equipa"], answer: 1, why: "Quem tem menos de 18 anos precisa da aceitação de um pai, mãe ou tutor, além da do próprio jogador." },
      { objective: "O2", q: "O que faz a ferramenta de aparar?", options: ["Muda as cores", "Corta o início ou o fim de um clipe", "Acrescenta música", "Exporta o ficheiro"], answer: 1, why: "Aparar encurta um clipe pelo início ou pelo fim." },
      { objective: "O2", q: "O que é o cursor de reprodução?", options: ["O primeiro clipe do projeto", "O logótipo do editor", "O medidor de áudio", "A linha na linha do tempo que mostra onde está"], answer: 3, why: "O cursor de reprodução marca o momento que está a ver; as divisões fazem-se ali." },
      { objective: "O2", q: "Que ordem serve para uma promoção de 45 segundos de uma barbearia?", options: ["Um corte de cabelo a ser terminado, o barbeiro a dizer o que torna a barbearia especial, e depois a morada e o horário", "O horário, depois um plano longo de uma cadeira vazia, depois o logótipo", "Dez minutos do corte de cabelo inteiro", "O barbeiro a olhar para a câmara à espera de começar"], answer: 0, why: "Chama a atenção, dá a mensagem e termina com o que fazer." },
      { objective: "O2", q: "Qual destes é tempo morto que deve tirar?", options: ["O momento em que um jogador marca", "A dona a explicar o seu melhor produto", "Uma pausa longa em que quem fala diz \"hum\" e olha para o lado", "A placa da loja no fim"], answer: 2, why: "Pausas e esperas acrescentam duração sem acrescentar sentido." },
      { objective: "O3", q: "Num corte em L, o que acontece?", options: ["O vídeo fica preto", "A imagem e o som param os dois", "O som começa antes da imagem", "A imagem muda enquanto o som do primeiro plano continua"], answer: 3, why: "Num corte em L o som anterior continua por baixo da imagem nova." },
      { objective: "O3", q: "Que plano serve como plano de corte numa entrevista com uma padeira?", options: ["O mesmo plano da entrevista outra vez", "Um ecrã preto", "Grande plano das mãos dela a moldar a massa", "Um plano de outro vídeo sobre carros"], answer: 2, why: "Um plano de corte mostra algo próximo e relacionado, e isso esconde um corte." },
      { objective: "O3", q: "Porque misturar planos gerais, médios e grandes planos?", options: ["Para mostrar o lugar, as pessoas e os detalhes", "Para tornar o ficheiro mais pequeno", "Para mudar a taxa de fotogramas", "Os editores exigem três tamanhos de plano"], answer: 0, why: "Tamanhos de plano diferentes dão ao espectador a imagem completa e mantêm o interesse." },
      { objective: "O3", q: "A sua edição tem uma transição vistosa diferente entre cada clipe. O que deve mudar?", options: ["Acrescentar mais transições", "Usar cortes simples e ficar com uma ou duas transições simples", "Fazer as transições mais longas", "Acelerar o vídeo todo"], answer: 1, why: "Cortes simples com poucas transições simples parecem profissionais." },
      { objective: "O4", q: "O que quer dizer quando o medidor de áudio chega ao topo e fica vermelho?", options: ["O som está perfeito", "As legendas estão ligadas", "O som está alto demais e pode estalar", "A música tem autorização"], answer: 2, why: "Vermelho no topo é saturação, que faz o som estalar." },
      { objective: "O4", q: "Que música pode usar no vídeo de um cliente?", options: ["Qualquer canção se der crédito", "Uma canção da rádio se tiver menos de 15 segundos", "Uma canção que um amigo pôs na internet", "Música da biblioteca do seu editor, seguindo as regras dela"], answer: 3, why: "Música de biblioteca com as regras dela, a sua própria música ou autorização escrita são as escolhas seguras." },
      { objective: "O4", q: "Porque acrescentar legendas a um vídeo de trabalho?", options: ["Muitas pessoas veem sem som, e as legendas ajudam espectadores surdos ou com dificuldades de audição", "As legendas tornam o ficheiro mais pequeno", "As legendas são só para filmes", "As plataformas apagam vídeos sem legendas"], answer: 0, why: "As legendas chegam a mais espectadores e tornam a mensagem clara sem som." },
      { objective: "O4", q: "Onde deve ficar o texto no ecrã num vídeo vertical para telefone?", options: ["Mesmo nas margens", "Longe das margens, em letras grandes e simples", "Só no último fotograma, muito pequeno", "Por baixo dos botões da aplicação"], answer: 1, why: "As aplicações põem botões perto das margens, por isso o texto ali pode ficar tapado." },
      { objective: "O5", q: "Para a maioria dos usos na internet, que escolha de exportação é segura?", options: ["Qualquer tipo de ficheiro em qualquer tamanho", "Uma imagem parada", "Um MP4 com H.264, com o mesmo formato, tamanho e taxa de fotogramas do projeto", "Só o ficheiro do projeto"], answer: 2, why: "O MP4 com H.264 passa na maioria dos telefones, computadores e sites." },
      { objective: "O5", q: "O que vai numa nota de portfólio curta?", options: ["O briefing, o que fez, as ferramentas que usou e o resultado", "A morada de casa e o número de telefone", "A palavra-passe do editor", "Só o tamanho do ficheiro do vídeo"], answer: 0, why: "Essas quatro linhas mostram a um empregador o que você sabe fazer." },
      { objective: "O5", q: "Quem aplica o exame Adobe Certified Professional em Digital Video Using Adobe Premiere?", options: ["O Departamento do Trabalho dos EUA", "O YouTube", "Qualquer aplicação de edição de vídeo", "A Certiport, uma empresa da Pearson VUE"], answer: 3, why: "A Certiport aplica os exames Adobe Certified Professional; veja a página dela para os detalhes atuais." },
      { objective: "O5", q: "O que lhe dá este curso?", options: ["Um certificado da Adobe", "Uma certificação DaVinci Resolve", "Uma licença do estado para editar vídeo", "Preparação e uma peça de portfólio, não uma certificação"], answer: 3, why: "O curso prepara você; as certificações vêm da Adobe através da Certiport ou da Blackmagic Design." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 7, 8, 11, 12, 13, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte, exporte uma versão nova e tente outra vez.",
    criteria: [
      { name: "Organizado e preparado", objective: "O1", notYet: "Os clipes estão espalhados ou o formato não corresponde à plataforma (barras pretas ou lados cortados).", meets: "Uma pasta de projeto com nome e pastas lá dentro, uma cópia de segurança, e o formato e a taxa de fotogramas do projeto correspondem ao briefing.", exceeds: "Os melhores clipes têm nome novo e o aluno sabe explicar porque escolheu o formato e a taxa de fotogramas." },
      { name: "História e duração", objective: "O2", notYet: "Os clipes estão fora de ordem, têm tempo morto, ou o vídeo está muito longe da duração pedida.", meets: "Início, meio e fim claros; sem tempo morto; a menos de 5 segundos da duração pedida.", exceeds: "Os primeiros segundos chamam a atenção e cada plano merece o seu lugar." },
      { name: "Edição fluida", objective: "O3", notYet: "Veem-se cortes com salto ou usam-se muitas transições vistosas.", meets: "Imagens de apoio ou planos de corte escondem os saltos; no máximo dois tipos de transição.", exceeds: "Tem um corte em L ou em J limpo e uma boa mistura de planos gerais, médios e grandes planos." },
      { name: "Som e legendas", objective: "O4", notYet: "O som estala ou ouve-se mal, as legendas têm erros, ou a música não tem autorização.", meets: "Vozes claras, música por baixo da fala, legendas corretas, e só música que o aluno pode usar.", exceeds: "As etiquetas com nomes e o cartão final leem-se bem num telefone, e os créditos da música estão lá quando a biblioteca os exige." },
      { name: "Entregue e apresentado", objective: "O5", notYet: "O ficheiro tem um nome errado, não passa, ou falta a nota de portfólio.", meets: "Um MP4 com nome claro que passa no aparelho pedido, comparado com o briefing, com uma nota de portfólio de quatro linhas.", exceeds: "O aluno recebeu comentários e entregou uma versão revista, e a nota diz o que mudou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que juntam o vídeo terminado a um portfólio ou a uma candidatura de emprego em 30 dias (inquérito de seguimento)",
      "Alunos que fazem um trabalho de edição pago ou voluntário para uma empresa, equipa, escola ou organização sem fins lucrativos em 90 dias",
      "Alunos que seguem para outro curso de edição ou para uma certificação como Adobe Certified Professional ou a certificação DaVinci Resolve"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone que grava vídeo, e 8 a 15 clipes curtos filmados pelo próprio aluno",
      "Um editor gratuito: DaVinci Resolve ou Microsoft Clipchamp num computador, ou CapCut ou o editor do telefone",
      "Uma pen USB ou armazenamento na nuvem para a cópia de segurança",
      "Auriculares ou auscultadores para verificar o som",
      "Cerca de 2 horas no total: lições, verificações e tempo de edição para a tarefa final"
    ],
    facilitatorNotes: [
      "Numa sala de informática, confirme antes do curso que o editor escolhido se instala e funciona nos computadores do programa; o DaVinci Resolve precisa de um computador mais potente do que um editor na internet como o Clipchamp.",
      "Dê aos alunos sem gravações um briefing curto de prática e deixe-os filmar à volta do edifício, com autorização de todas as pessoas filmadas.",
      "Verifique as regras de idade de cada editor para os alunos mais novos, e obtenha a autorização de um pai, mãe ou tutor para quem tem menos de 18 anos e aparece num vídeo.",
      "Os menus mudam muitas vezes: mostre ao vivo as ações (importar, aparar, dividir, separar o áudio, legendas, exportar) no editor que o grupo usa.",
      "Faça uma pequena sessão de visionamento em que os alunos mostram os seus vídeos e dão comentários usando as linhas da grelha de avaliação, uma linha de cada vez."
    ]
  }
};
