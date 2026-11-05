"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-smart-homes.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Wake words ("Alexa", "Hey Google", "Hey Siri") stay as the devices hear them; the example commands are given in Portuguese.

module.exports = {
  id: "seniors-ai-smart-homes-pt",
  lang: "pt",
  translationOf: "seniors-ai-smart-homes",
  category: "Seniors and Technology",
  name: "IA e Casas Inteligentes",
  skills: "Entender os aparelhos de casa inteligente, Dar comandos de voz claros a uma coluna inteligente, Criar uma rotina simples, Escolher aparelhos para a segurança e o conforto, Proteger a sua privacidade em casa",
  outcome: "usar uma coluna inteligente ou o assistente de voz do seu telefone para dar comandos falados claros, planear ou criar uma rotina diária simples (como um lembrete de manhã e o tempo) e proteger a sua privacidade, desligando o microfone e revendo as definições.",
  about: [
    "Uma casa inteligente é uma casa com aparelhos que pode controlar pela voz ou pelo telefone: colunas que respondem a perguntas, luzes que se acendem sozinhas, tomadas que ligam e desligam candeeiros, e campainhas com câmara. Para as pessoas mais velhas, estes aparelhos podem tornar a vida do dia a dia mais fácil e mais segura, sobretudo para quem vive sozinho.",
    "Você vai aprender o que fazem os aparelhos mais comuns, como falar com uma coluna inteligente como a Amazon Echo (Alexa) ou a Google Nest (Google Assistant), como criar uma rotina simples e como manter a sua casa e a sua privacidade seguras.",
    "Não precisa de ter aparelhos inteligentes para fazer este curso: pode praticar a voz com o assistente que já tem no telefone. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Planeie uma rotina diária para a sua casa, como \"Bom dia\": a coluna ou o telefone diz-lhe o tempo, lembra-lhe o remédio da manhã e acende um candeeiro. Escreva-a, crie a parte que os seus aparelhos permitirem e pratique-a pela voz. Depois encontre e use o botão ou a definição para desligar o microfone.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas, muitas a viver sozinhas, que têm ou pensam ter uma coluna inteligente, luzes inteligentes ou uma campainha com vídeo, muitas vezes oferecidas pela família, e querem que ajudem com lembretes, segurança e chamadas.",
    startingPoint: "Usam o telefone para chamadas e SMS e têm Wi-Fi em casa. Muitas têm uma coluna inteligente mas só a usam para o tempo ou para música, e não sabem bem como funcionam as rotinas ou as definições de privacidade.",
    gap: "Os aparelhos de casa inteligente podem ajudar as pessoas mais velhas a viver com segurança e autonomia, com lembretes, luzes que evitam quedas e chamadas pela voz, mas muitos ficam sem uso ou preocupam os alunos por causa da privacidade. Comandos claros, uma rotina simples e saber desligar o microfone e rever as definições tornam-nos uma ajuda de todos os dias.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: Amazon Echo ou Google Nest, ou o assistente de voz do telefone; os menus das aplicações mudam com o tempo",
      "Tempo: cerca de 5 minutos por lição, com calma",
      "As funções de emergência variam conforme o produto e o país; nem todas as colunas conseguem ligar para o 911",
      "Privacidade: as colunas e as câmaras gravam; nunca partilhe com quem liga os códigos recebidos por SMS"
    ],
    prerequisites: "Nenhum. Quem não tem uma coluna inteligente pode acompanhar com o assistente de voz do telefone."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com aparelhos comuns de casa inteligente", action: "dizer o que uma coluna inteligente, uma tomada inteligente, uma lâmpada inteligente e uma campainha com vídeo conseguem fazer", standard: "acertando pelo menos 3 de 4" },
    { id: "O2", condition: "Usando uma coluna inteligente ou o assistente de voz do seu telefone", action: "dar comandos falados claros que começam com a palavra de ativação", standard: "para que o aparelho faça o que pediu, tentando palavras mais simples se for preciso" },
    { id: "O3", condition: "Usando a aplicação Alexa ou Google Home", action: "planear e criar uma rotina diária que faz várias coisas com uma só frase", standard: "com duas ou três ações, praticada pela voz" },
    { id: "O4", condition: "Com os problemas de segurança que quer resolver em casa", action: "escolher as funções inteligentes que servem para eles e verificar o que o produto consegue e não consegue fazer", standard: "antes de comprar ou de contar com ele" },
    { id: "O5", condition: "Quando quer privacidade em casa", action: "desligar o microfone e rever as definições de privacidade e as gravações de voz", standard: "sem partilhar com quem liga códigos recebidos por SMS nem palavras-passe" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer a casa inteligente",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que fazem os aparelhos de casa inteligente",
          minutes: 5,
          goal: "Dizer quais são os aparelhos comuns de casa inteligente e o que cada um pode fazer por você.",
          text: [
            "Os aparelhos de casa inteligente ligam-se ao Wi-Fi da sua casa, para que os possa controlar pela voz ou com uma aplicação no telefone.",
            "Os mais comuns: uma coluna inteligente, como a Amazon Echo com a Alexa ou a Google Nest com o Google Assistant, responde a perguntas, toca música e rádio, marca temporizadores e lembretes, e faz chamadas. Uma tomada inteligente deixa ligar e desligar um candeeiro ou uma ventoinha pela voz ou a uma hora marcada. As lâmpadas inteligentes mudam de intensidade. Uma campainha com vídeo deixa ver no telefone quem está à porta antes de abrir.",
            "Para as pessoas mais velhas que vivem sozinhas, os mais úteis costumam ser uma coluna para lembretes e chamadas, luzes inteligentes para nunca entrar num quarto escuro e uma campainha com vídeo para a segurança."
          ],
          words: [["Aparelho inteligente", "um aparelho que se liga à internet para que o possa controlar pela voz ou pelo telefone."], ["Wi-Fi", "a internet sem fios da sua casa."], ["Tomada inteligente", "um adaptador de tomada que deixa ligar e desligar um candeeiro ou um eletrodoméstico pela voz ou por uma aplicação."]],
          slides: [
            { title: "Os aparelhos inteligentes ligam-se ao Wi-Fi", bullets: ["Controle-os pela voz", "Ou com uma aplicação no telefone"] },
            { title: "Aparelhos comuns", bullets: ["Coluna inteligente: perguntas, música, lembretes, chamadas", "Tomada e lâmpadas inteligentes: acender e apagar luzes", "Campainha com vídeo: ver quem está à porta"] },
            { title: "Os mais úteis para quem vive sozinho", bullets: ["Lembretes e chamadas pela voz", "Nunca mais quartos escuros", "Ver as visitas antes de abrir"] }
          ],
          tryIt: "Dê uma volta pela sua casa e escreva duas tarefas do dia a dia que um aparelho inteligente poderia facilitar, como acender um candeeiro difícil de alcançar ou ver quem está à porta.",
          youCanNow: "dizer quais são os aparelhos comuns de casa inteligente e como podem ajudar você.",
          quickCheck: [
            { objective: "O1", q: "O que faz uma tomada inteligente?", options: ["Carrega o telefone mais depressa", "Deixa ligar e desligar um candeeiro ou uma ventoinha pela voz ou a uma hora marcada", "Grava vídeo", "Faz chamadas"], answer: 1, why: "Uma tomada inteligente controla o que estiver ligado a ela, pela voz ou a uma hora marcada." },
            { objective: "O1", q: "Vive sozinho e preocupa-se com quem bate à porta à noite. Que aparelho ajuda mais?", options: ["Uma lâmpada inteligente", "Uma tomada inteligente", "Uma campainha com vídeo", "Uma coluna de música"], answer: 2, why: "Uma campainha com vídeo deixa ver no telefone quem está à porta antes de abrir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Falar com uma coluna inteligente",
          minutes: 5,
          goal: "Dar comandos falados claros a uma coluna inteligente ou ao assistente do telefone.",
          text: [
            "Uma coluna inteligente começa a ouvir com a sua palavra de ativação: \"Alexa\" para a Amazon Echo, ou \"Hey Google\" para a Google Nest. Uma luz mostra que está a ouvir. O assistente de voz do telefone funciona da mesma maneira, com \"Hey Siri\" ou \"Hey Google\".",
            "Fale com clareza, ao ritmo normal, e diga exatamente o que quer: \"Alexa, como está o tempo hoje?\" \"Hey Google, marca um temporizador de 15 minutos.\" \"Alexa, toca a estação de música clássica.\" \"Hey Google, liga para a Margarida.\"",
            "Se não entender, diga outra vez com palavras mais simples. As colunas mais novas usam IA para entender perguntas mais naturais, mas os comandos curtos e claros continuam a funcionar melhor."
          ],
          steps: ["Diga a palavra de ativação: \"Alexa\" ou \"Hey Google\".", "Espere pela luz.", "Diga exatamente o que quer, com clareza.", "Se entender mal, tente outra vez com palavras mais simples."],
          words: [["Palavra de ativação", "a palavra que diz a uma coluna inteligente para começar a ouvir, como \"Alexa\"."], ["Comando", "uma instrução curta falada, como \"marca um temporizador de 15 minutos\"."]],
          slides: [
            { title: "Acorde a coluna", bullets: ["\"Alexa\" para a Amazon Echo", "\"Hey Google\" para a Google Nest", "Uma luz mostra que está a ouvir"] },
            { title: "Comandos claros", bullets: ["\"Como está o tempo hoje?\"", "\"Marca um temporizador de 15 minutos.\"", "\"Liga para a Margarida.\""] },
            { title: "Não entendeu?", bullets: ["Diga outra vez com palavras mais simples", "Os comandos curtos funcionam melhor"] }
          ],
          tryIt: "Com uma coluna inteligente ou o assistente do telefone, dê três comandos: pergunte o tempo de hoje, marque um temporizador de 5 minutos e peça um lembrete para amanhã às 9 da manhã.",
          youCanNow: "dar comandos falados claros a uma coluna inteligente ou a um assistente de voz.",
          quickCheck: [
            { objective: "O2", q: "Qual é a palavra de ativação da Amazon Echo?", options: ["\"Alexa\"", "\"Olá\"", "\"Hey Siri\"", "\"Começar\""], answer: 0, why: "A Amazon Echo espera ouvir \"Alexa\"; a Google Nest espera ouvir \"Hey Google\"." },
            { objective: "O2", q: "Fez uma pergunta longa e a coluna entendeu mal. O que faz?", options: ["Desliga-a da tomada", "Grita mais alto", "Deixa de a usar", "Diz outra vez com palavras mais curtas e simples"], answer: 3, why: "Os comandos curtos e claros continuam a funcionar melhor; tente outra vez com palavras mais simples." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Criar uma rotina simples",
          minutes: 6,
          goal: "Planear uma rotina que faz várias coisas com uma só frase.",
          text: [
            "Uma rotina deixa uma só frase fazer várias coisas. Por exemplo, dizer \"Bom dia\" pode acender um candeeiro, dizer-lhe o tempo e lembrar-lhe de tomar o remédio.",
            "As rotinas criam-se na aplicação do aparelho no telefone: a aplicação Alexa para a Echo, ou a aplicação Google Home para a Nest. Procure uma parte chamada Rotinas, toque para adicionar uma nova, escolha a frase que a começa e depois adicione as ações. Os menus mudam de vez em quando, por isso, se não a encontrar, veja as páginas de ajuda da aplicação ou peça a um familiar.",
            "Comece com uma rotina simples. Pode pedir a um assistente de IA para o ajudar a planeá-la: \"Ajude-me a planear uma rotina da manhã para a minha coluna inteligente. Quero o tempo, um lembrete do remédio e o meu candeeiro aceso.\""
          ],
          steps: ["Planeie a frase e as ações num papel.", "Abra a aplicação Alexa ou a aplicação Google Home.", "Encontre Rotinas e adicione uma nova.", "Escolha a frase que a começa.", "Adicione cada ação, guarde e experimente pela voz."],
          words: [["Rotina", "uma frase ou uma hora que faz um aparelho fazer várias coisas seguidas."], ["Aplicação do aparelho", "a aplicação do telefone que configura e controla um aparelho inteligente."]],
          slides: [
            { title: "Uma frase, muitas ações", bullets: ["\"Bom dia\" pode...", "Acender um candeeiro", "Dizer o tempo e lembrar o remédio"] },
            { title: "Onde criar a rotina", bullets: ["Aplicação Alexa ou aplicação Google Home", "Encontre Rotinas, adicione uma nova", "Escolha a frase, adicione ações, guarde"] },
            { title: "Comece simples", bullets: ["Planeie primeiro num papel", "Peça à IA para ajudar a planear", "Peça a um familiar se um menu for difícil de encontrar"] }
          ],
          tryIt: "Escreva uma rotina de \"Bom dia\" ou de \"Boa noite\" com uma frase e duas ou três ações. Peça a um assistente de IA para verificar o seu plano e sugerir uma melhoria.",
          youCanNow: "planear uma rotina simples de casa inteligente e saber onde a criar.",
          quickCheck: [
            { objective: "O3", q: "O que é uma rotina numa coluna inteligente?", options: ["Um passeio diário", "Uma frase que faz o aparelho fazer várias coisas", "Uma lista de músicas", "Uma palavra-passe"], answer: 1, why: "Uma rotina deixa uma frase, como \"Bom dia\", fazer várias ações." },
            { objective: "O3", q: "Não encontra Rotinas na aplicação porque o menu mudou. O que faz?", options: ["Desiste das rotinas", "Compra uma coluna nova", "Vê as páginas de ajuda da aplicação ou pede a um familiar", "Reinicia a coluna"], answer: 2, why: "Os menus mudam de vez em quando; as páginas de ajuda ou um familiar podem mostrar onde está." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer a casa inteligente",
        questions: [
          { objective: "O1", q: "A que se ligam os aparelhos de casa inteligente?", options: ["À caixa do correio", "Aos canos da água", "Ao Wi-Fi da sua casa", "Só a um carregador de pilhas"], answer: 2, why: "Usam o Wi-Fi para que os possa controlar." },
          { objective: "O1", q: "Que aparelho deixa ver no telefone quem está à porta?", options: ["Uma campainha com vídeo", "Uma tomada inteligente", "Uma lâmpada inteligente", "Uma torradeira"], answer: 0, why: "As campainhas com vídeo mostram as visitas no seu telefone." },
          { objective: "O2", q: "O que é uma palavra de ativação?", options: ["Um cartão de bom dia", "O som de um despertador", "Uma palavra-passe", "Uma palavra que faz a coluna começar a ouvir"], answer: 3, why: "\"Alexa\" ou \"Hey Google\" acorda a coluna." },
          { objective: "O2", q: "A coluna não entendeu o que disse. O que deve tentar?", options: ["Gritar", "Dizer outra vez com palavras mais simples", "Desligá-la para sempre", "Dar-lhe a sua palavra-passe"], answer: 1, why: "Os comandos curtos e claros funcionam melhor." },
          { objective: "O3", q: "Onde cria uma rotina para uma coluna Google Nest?", options: ["Na Calculadora", "Na aplicação Google Home", "No comando da televisão", "Na aplicação da Câmara"], answer: 1, why: "A aplicação do aparelho guarda as Rotinas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Segurança, conforto e privacidade",
      lessons: [
        {
          objectives: ["O4","O1"],
          title: "Aparelhos inteligentes para a segurança",
          minutes: 5,
          goal: "Escolher funções de casa inteligente que tornam mais seguro viver sozinho.",
          text: [
            "Os aparelhos inteligentes podem ajudar você a sentir-se mais seguro em casa. Luzes com hora marcada ou com sensor de movimento fazem com que nunca entre num quarto escuro à noite, o que pode ajudar a evitar quedas. Uma campainha com vídeo deixa ver e falar com as visitas sem abrir a porta.",
            "Uma coluna inteligente pode ligar a um familiar pela voz se não conseguir chegar ao telefone. Algumas colunas e serviços têm funções de emergência, mas estas variam conforme o produto e o país, e nem todas conseguem ligar para o 911. Veja as páginas de ajuda do próprio produto para saber exatamente o que o seu consegue e não consegue fazer. Os aparelhos de alerta médico, feitos para emergências, são outra escolha para falar com a sua família.",
            "Antes de comprar, faça uma lista dos problemas que quer resolver e pergunte a um familiar ou a um funcionário da loja que aparelho serve. Não precisa de tudo."
          ],
          steps: ["Faça a lista dos problemas de segurança que quer resolver.", "Junte cada um a um aparelho: luzes, campainha ou coluna.", "Veja nas páginas de ajuda do produto o que ele consegue e não consegue fazer.", "Pergunte a um familiar ou a um funcionário da loja antes de comprar."],
          words: [["Sensor de movimento", "um aparelho que nota o movimento e pode acender uma luz."], ["Aparelho de alerta médico", "um botão que se usa no corpo, feito para pedir ajuda numa emergência."]],
          slides: [
            { title: "Mais seguro em casa", bullets: ["Luzes com hora marcada ou com sensor ajudam a evitar quedas", "Campainha com vídeo: veja primeiro as visitas", "Ligue à família pela voz"] },
            { title: "Conheça o seu aparelho", bullets: ["As funções de emergência variam", "Nem todos conseguem ligar para o 911", "Veja as páginas de ajuda do produto"] },
            { title: "Compre com um plano", bullets: ["Primeiro faça a lista dos problemas", "Junte um aparelho a cada um", "Não precisa de tudo"] }
          ],
          tryIt: "Escreva uma preocupação de segurança que tem em casa, como corredores escuros à noite, e o aparelho inteligente que pode ajudar. Pergunte a um assistente de IA que perguntas fazer antes de o comprar.",
          youCanNow: "escolher funções de casa inteligente que servem para as suas necessidades de segurança.",
          quickCheck: [
            { objective: "O4", q: "Como é que as luzes com sensor de movimento ajudam você a estar seguro?", options: ["Trancam as portas", "Ligam para o 911", "Acendem-se para que não entre num quarto escuro", "Tocam música"], answer: 2, why: "As luzes que se acendem sozinhas podem ajudar a evitar quedas à noite." },
            { objective: "O4", q: "Quer uma coluna que consiga pedir ajuda numa emergência. O que faz antes de contar com ela?", options: ["Vê nas páginas de ajuda do produto o que ele consegue e não consegue fazer", "Pensa que todas as colunas conseguem ligar para o 911", "Pede à coluna que prometa", "Desliga o microfone dela"], answer: 0, why: "As funções de emergência variam conforme o produto e o país; veja exatamente o que a sua consegue fazer." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proteger a sua privacidade em casa",
          minutes: 5,
          goal: "Usar o botão para desligar o microfone e as definições de privacidade de um aparelho inteligente.",
          text: [
            "As colunas inteligentes ficam à espera de ouvir a palavra de ativação. Às vezes podem confundir outra palavra com ela e gravar um pouco. As câmaras gravam vídeo. Por isso é bom saber controlá-las.",
            "Todas as colunas inteligentes têm um botão para desligar o microfone; quando está desligado, uma luz (muitas vezes vermelha) mostra que não está a ouvir. Use-o durante conversas privadas. As câmaras costumam ter um modo de privacidade ou uma tampa. Na aplicação do aparelho, procure as definições de Privacidade, onde normalmente pode rever e apagar as gravações de voz.",
            "Use uma palavra-passe forte no Wi-Fi e nas contas dos aparelhos, e nunca partilhe os códigos que recebe por SMS com ninguém que ligue a falar dos seus aparelhos."
          ],
          steps: ["Encontre na coluna o botão para desligar o microfone.", "Carregue nele durante conversas privadas; procure a luz colorida.", "Abra a aplicação do aparelho e encontre as definições de Privacidade.", "Reveja e apague as gravações de voz, se quiser.", "Use palavras-passe fortes e nunca partilhe códigos recebidos por SMS."],
          words: [["Desligar o microfone", "fazer com que o microfone não consiga ouvir."], ["Definições de privacidade", "escolhas numa aplicação sobre o que é gravado, guardado e partilhado."]],
          slides: [
            { title: "Colunas e câmaras ouvem e veem", bullets: ["As colunas esperam a palavra de ativação", "Às vezes podem ouvir mal", "As câmaras gravam vídeo"] },
            { title: "Tome o controlo", bullets: ["Botão do microfone: a luz mostra que está desligado", "Câmara: modo de privacidade ou tampa", "Reveja e apague as gravações na aplicação"] },
            { title: "Mantenha as contas seguras", bullets: ["Palavras-passe fortes no Wi-Fi e nas contas", "Nunca partilhe códigos recebidos por SMS"] }
          ],
          tryIt: "Encontre o botão ou a definição para desligar o microfone numa coluna inteligente, ou a definição do microfone no assistente do telefone. Desligue-o e volte a ligá-lo, e repare em como sabe que está desligado.",
          youCanNow: "desligar o microfone de um aparelho inteligente e encontrar as definições de privacidade.",
          quickCheck: [
            { objective: "O5", q: "Porque é que uma coluna inteligente pode gravar um pouco sem querer?", options: ["Grava tudo o tempo todo", "Pode confundir outra palavra com a palavra de ativação", "Está avariada", "Só grava música"], answer: 1, why: "As colunas esperam a palavra de ativação e às vezes podem confundir outra palavra com ela." },
            { objective: "O5", q: "A sua família está de visita e quer falar de assuntos privados de dinheiro. O que faz com a coluna?", options: ["Põe a música mais alta", "Pede-lhe para deixar de ouvir", "Desliga o router do Wi-Fi", "Carrega no botão para desligar o microfone e procura a luz"], answer: 3, why: "O botão desliga o microfone; uma luz, muitas vezes vermelha, mostra que não está a ouvir." }
          ]
        },
        {
          objectives: ["O3","O2"],
          title: "Pôr a sua casa inteligente a trabalhar",
          minutes: 5,
          goal: "Planear e praticar uma rotina diária completa.",
          text: [
            "Agora junte as peças. Uma boa primeira rotina é simples, útil todos os dias e fácil de dizer.",
            "Exemplo: \"Bom dia\" acende o candeeiro do quarto, diz-lhe o tempo e a sua agenda, e lembra-lhe de tomar o remédio da manhã. \"Boa noite\" apaga os candeeiros e marca o despertador.",
            "Pratique a sua rotina algumas vezes. Se alguma coisa não funcionar, verifique uma ação de cada vez na aplicação, ou peça a um familiar para ver consigo. Tenha uma nota escrita com os seus comandos perto da coluna até se tornarem um hábito."
          ],
          steps: ["Escolha uma frase de que se vai lembrar.", "Escolha duas ou três ações úteis.", "Crie a rotina na aplicação, até onde os seus aparelhos permitirem.", "Pratique-a pela voz várias vezes.", "Tenha uma nota com os seus comandos perto da coluna."],
          words: [["Hábito", "uma coisa que faz tantas vezes que se torna automática."]],
          slides: [
            { title: "Uma boa primeira rotina", bullets: ["Simples", "Útil todos os dias", "Fácil de dizer"] },
            { title: "Exemplo", bullets: ["\"Bom dia\": candeeiro aceso, tempo, agenda, lembrete do remédio", "\"Boa noite\": candeeiros apagados, despertador marcado"] },
            { title: "Para ficar", bullets: ["Pratique algumas vezes", "Corrija uma ação de cada vez", "Tenha uma nota perto da coluna"] }
          ],
          tryIt: "Tarefa final: escreva a sua rotina de \"Bom dia\", crie a parte que os seus aparelhos permitirem e pratique-a pela voz. Depois encontre e use o botão ou a definição para desligar o microfone.",
          youCanNow: "usar comandos de voz e uma rotina simples para tornar a sua casa mais fácil e mais segura, protegendo a sua privacidade.",
          quickCheck: [
            { objective: "O3", q: "O que faz uma boa primeira rotina?", options: ["Ser simples, útil todos os dias e fácil de dizer", "Ter o maior número possível de ações", "Uma frase longa", "Só música"], answer: 0, why: "Comece simples: uma frase de que se vai lembrar, com duas ou três ações úteis." },
            { objective: "O3", q: "A sua nova rotina de \"Boa noite\" apagou os candeeiros mas não marcou o despertador. O que faz?", options: ["Apaga a rotina toda", "Nunca mais usa rotinas", "Diz mais alto", "Verifica essa ação na aplicação, ou vê-a com um familiar"], answer: 3, why: "Se alguma coisa não funcionar, verifique uma ação de cada vez na aplicação." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Segurança, conforto e privacidade",
        questions: [
          { objective: "O4", q: "Como é que as luzes inteligentes ajudam a evitar quedas?", options: ["Trancam as portas", "São mais pesadas", "Ligam ao médico", "Acendem-se para que não entre em quartos escuros"], answer: 3, why: "Os quartos iluminados à noite ajudam a evitar quedas." },
          { objective: "O4", q: "Todas as colunas inteligentes conseguem ligar para o 911?", options: ["Não; veja o que o seu produto consegue e não consegue fazer", "Sim, todas", "Só as vermelhas", "Só aos fins de semana"], answer: 0, why: "As funções de emergência variam conforme o produto e o país." },
          { objective: "O5", q: "A luz da coluna fica vermelha depois de carregar no botão do microfone. Isto quer dizer:", options: ["Está a ligar para o 911", "Está avariada", "O microfone está desligado", "Está a gravar mais"], answer: 2, why: "A luz colorida mostra que o microfone está desligado." },
          { objective: "O5", q: "Onde pode normalmente rever e apagar as gravações de voz?", options: ["Num anúncio que aparece no ecrã", "No micro-ondas", "Na programação da televisão", "Nas definições de privacidade da aplicação do aparelho"], answer: 3, why: "As definições de privacidade da aplicação controlam as gravações." },
          { objective: "O5", q: "Alguém liga, diz que é da empresa da coluna e pede o código que recebeu por SMS. Você:", options: ["Envia-o por SMS", "Lê-o para essa pessoa", "Nunca o partilha e desliga", "Publica-o na internet"], answer: 2, why: "Os códigos recebidos por SMS protegem a sua conta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA e Casas Inteligentes",
    questions: [
      { objective: "O1", q: "Um aparelho inteligente é:", options: ["Qualquer candeeiro antigo", "Um aparelho que pode controlar pela voz ou pelo telefone através da internet", "Um calendário de papel", "Um telefone fixo"], answer: 1, why: "Os aparelhos inteligentes ligam-se à internet." },
      { objective: "O1", q: "Que assistente de voz usa a Amazon Echo?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 0, why: "As colunas Echo usam a Alexa." },
      { objective: "O1", q: "Uma tomada inteligente deixa você:", options: ["Ligar e desligar um candeeiro pela voz ou a uma hora marcada", "Carregar um carro", "Fazer chamadas", "Trancar portas"], answer: 0, why: "Ela liga e desliga o que estiver ligado a ela." },
      { objective: "O2", q: "Que palavras acordam uma coluna Google Nest?", options: ["\"Olá telefone\"", "\"Hey Google\"", "\"Computador\"", "\"Começar\""], answer: 1, why: "\"Hey Google\" é a sua palavra de ativação." },
      { objective: "O2", q: "Qual é um comando claro?", options: ["\"Coisas de temporizador.\"", "\"Hum, talvez, aquela coisa?\"", "\"Marca um temporizador de 15 minutos.\"", "\"Sabes.\""], answer: 2, why: "Os comandos claros dizem exatamente o que quer." },
      { objective: "O2", q: "Uma luz na coluna normalmente mostra que:", options: ["Está desligada para sempre", "Está avariada", "Precisa de tinta", "Está a ouvir"], answer: 3, why: "A luz mostra que ouviu a palavra de ativação." },
      { objective: "O3", q: "Uma rotina é:", options: ["Uma palavra-passe", "Um tipo de tomada", "Uma frase que faz um aparelho fazer várias coisas", "Um programa de televisão"], answer: 2, why: "As rotinas juntam várias ações." },
      { objective: "O3", q: "As rotinas da Amazon Echo criam-se:", options: ["Na aplicação Alexa", "Na Calculadora", "Na Câmara", "Na televisão"], answer: 0, why: "A aplicação Alexa gere as rotinas da Echo." },
      { objective: "O3", q: "Uma boa maneira de planear uma rotina antes de a criar:", options: ["Não planear", "Adivinhar", "Comprar muitos aparelhos primeiro", "Escrevê-la num papel ou pedir à IA para verificar o plano"], answer: 3, why: "Planear torna a configuração mais fácil." },
      { objective: "O3", q: "Se um menu da aplicação for difícil de encontrar, você pode:", options: ["Desistir", "Ver as páginas de ajuda da aplicação ou pedir à família", "Dar a sua palavra-passe a um desconhecido", "Apagar o seu Wi-Fi"], answer: 1, why: "Os menus mudam; as páginas de ajuda e a família podem guiar você." },
      { objective: "O4", q: "Uma campainha com vídeo ajuda você a:", options: ["Fazer o jantar", "Ver as visitas antes de abrir a porta", "Lavar a roupa", "Pagar as contas"], answer: 1, why: "Mostra quem está à porta." },
      { objective: "O4", q: "Uma luz com sensor de movimento:", options: ["Tranca a porta", "Toca música", "Liga à família", "Acende-se quando nota movimento"], answer: 3, why: "Reage ao movimento." },
      { objective: "O4", q: "Antes de comprar um aparelho inteligente, deve:", options: ["Fazer a lista dos problemas que quer resolver", "Comprar tudo", "Partilhar as suas palavras-passe", "Ignorar as opiniões e as páginas de ajuda"], answer: 0, why: "Uma lista ajuda a comprar só o que precisa." },
      { objective: "O4", q: "Um aparelho de alerta médico é:", options: ["Uma coluna de música", "Uma lâmpada inteligente", "Um botão que se usa no corpo, feito para pedir ajuda", "Um comando da televisão"], answer: 2, why: "É feito para emergências." },
      { objective: "O5", q: "Durante uma conversa privada, você pode:", options: ["Abrir a câmara", "Aumentar o volume", "Dizer a palavra de ativação", "Carregar no botão para desligar o microfone da coluna"], answer: 3, why: "Desligar o microfone faz com que ele deixe de ouvir." },
      { objective: "O5", q: "As definições de privacidade deixam você:", options: ["Encomendar comida", "Mudar o tempo", "Rever e apagar as gravações", "Tornar o Wi-Fi mais rápido"], answer: 2, why: "Controlam o que é guardado." },
      { objective: "O5", q: "A privacidade de uma câmara pode ser protegida com:", options: ["Uma luz apontada para ela", "O modo de privacidade ou uma tampa", "Pô-la mais perto", "Aumentar o volume"], answer: 1, why: "O modo de privacidade ou uma tampa para a gravação." },
      { objective: "O5", q: "Deve usar palavras-passe fortes:", options: ["No Wi-Fi e nas contas dos aparelhos", "Em nada", "Só no e-mail", "Só na televisão"], answer: 0, why: "Impedem outras pessoas de entrar nos seus aparelhos." },
      { objective: "O3", q: "Uma boa primeira rotina é:", options: ["Simples, útil todos os dias e fácil de dizer", "Longa e complicada", "Usada uma vez por ano", "Difícil de lembrar"], answer: 0, why: "As rotinas simples tornam-se hábitos." },
      { objective: "O3", q: "Ter uma nota com os seus comandos perto da coluna ajuda você a:", options: ["Escondê-los", "Lembrar-se deles até se tornarem um hábito", "Partilhar palavras-passe", "Desligar o microfone da coluna"], answer: 1, why: "Uma nota é um lembrete à mão." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      6,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Rotina planeada",
        objective: "O3",
        notYet: "Não há plano escrito, ou não há frase para começar.",
        meets: "Uma rotina escrita com uma frase para começar e duas ou três ações úteis, como o tempo, um lembrete do remédio e um candeeiro.",
        exceeds: "O plano também tem uma rotina de \"Boa noite\"."
      },
      {
        name: "Rotina criada",
        objective: "O3",
        notYet: "Nada foi criado no aparelho nem no telefone.",
        meets: "A parte da rotina que os aparelhos permitem está criada.",
        exceeds: "Sabe dizer que ações os aparelhos não conseguiram fazer e o que usar no lugar delas."
      },
      {
        name: "Comandos de voz claros",
        objective: "O2",
        notYet: "O aparelho não respondeu aos comandos.",
        meets: "Praticou a rotina pela voz, começando com a palavra de ativação, e funcionou.",
        exceeds: "Escreveu os comandos numa nota perto da coluna."
      },
      {
        name: "Microfone desligado",
        objective: "O5",
        notYet: "Não encontrou o botão nem a definição para desligar o microfone.",
        meets: "Encontrou e usou o botão ou a definição para desligar o microfone e viu a luz mudar.",
        exceeds: "Também encontrou na aplicação onde rever as gravações de voz."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que usam uma rotina diária ou um lembrete de voz no seguimento aos 30 dias",
      "Alunos que dizem sentir-se mais seguros em casa, por exemplo usando luzes à noite ou uma campainha com vídeo",
      "Alunos que começam outro curso de Seniors and Technology em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Uma coluna inteligente (Amazon Echo ou Google Nest) ou um smartphone com assistente de voz",
      "A aplicação Alexa ou a aplicação Google Home num telefone, com Wi-Fi em casa",
      "Papel e caneta para planear a rotina e anotar os comandos",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Traga uma coluna de demonstração para que os alunos sem aparelho possam praticar os comandos.",
      "Os menus das aplicações mudam; veja os menus atuais de Rotinas e de Privacidade antes da sessão.",
      "Não prometa que alguma coluna consegue ligar para o 911; diga aos alunos para verificarem o seu próprio produto.",
      "Lembre aos alunos que nunca partilhem códigos recebidos por SMS com quem ligue a falar dos seus aparelhos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
