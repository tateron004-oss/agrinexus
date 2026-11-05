"use strict";

// Koach Learn course (Portuguese translation of youth/youth-what-is-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-what-is-ai-pt",
  lang: "pt",
  translationOf: "youth-what-is-ai",
  category: "Youth",
  name: "O que é a IA? (para Jovens)",
  skills: "Explicar o que é a IA, Reconhecer a IA nas aplicações do dia a dia, Respeitar os limites de idade e as regras da escola, Fazer uma pergunta clara a um assistente de IA, Verificar uma resposta da IA",
  outcome: "explicar com as suas palavras o que é a IA, reconhecê-la nas aplicações que já usa e usar um assistente de IA gratuito da maneira certa: dentro do limite de idade e das regras da sua escola, com uma pergunta clara e verificando a resposta antes de confiar nela.",
  about: [
    "A IA já está no seu telefone, nos seus jogos, na sua aplicação de música e nas ferramentas da escola. Este curso é para jovens de cerca de 13 a 18 anos que querem perceber o que ela é de verdade e como usá-la bem.",
    "Você vai aprender o que a IA é e o que não é, onde ela se esconde nas aplicações que usa todos os dias, como respeitar os limites de idade e as regras da sua escola sobre IA, como fazer uma pergunta clara e como verificar uma resposta antes de acreditar nela.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça uma \"explicação da IA\" de uma página para um aluno mais novo ou um amigo: diga o que é a IA em duas frases, dê o nome de três aplicações que usa e que têm IA, e inclua uma pergunta que fez a um assistente de IA, a resposta e como a verificou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens de cerca de 13 a 18 anos, na escola ou fora dela, que já usam telefones, jogos e aplicações e querem perceber o que a IA é de verdade e como usá-la bem.",
    startingPoint: "Usam todos os dias aplicações de música, vídeo, jogos e mensagens e talvez já tenham experimentado um assistente de conversa. A maioria não sabe explicar como a IA funciona, onde ela se esconde nas suas aplicações nem como verificar o que ela diz.",
    gap: "A IA está nas ferramentas que os jovens usam para a escola e para se divertirem, mas muitos usam-na sem conhecer os seus limites de idade, as regras da escola ou que ela pode estar errada. Aprender a perguntar com clareza, verificar as respostas e manter-se seguro ajuda-os a aprender melhor, a evitar problemas de batota e a proteger-se a si e aos outros.",
    constraints: [
      "Limites de idade: muitas ferramentas de IA exigem 13 anos ou mais, e algumas pedem autorização de um pai, mãe ou encarregado de educação abaixo dos 18",
      "As regras sobre IA mudam de escola para escola e de professor para professor",
      "Aparelhos: um telefone ou um computador da escola; alguns têm pouca internet em casa",
      "Privacidade e segurança: nada de dados privados nem fotos de pessoas reais nas ferramentas de IA",
      "Palavras simples e lições curtas para níveis de leitura diferentes"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as suas palavras", action: "explicar o que é a IA, como aprende com exemplos e porque pode estar errada", standard: "em duas frases que um aluno mais novo consiga perceber" },
    { id: "O2", condition: "Usando as aplicações do seu telefone ou de um computador da escola", action: "identificar onde a IA sugere, organiza, adivinha ou cria alguma coisa, incluindo a IA generativa", standard: "dando o nome de pelo menos três aplicações e o que a IA faz em cada uma" },
    { id: "O3", condition: "Antes de usar uma ferramenta de IA nova em casa ou na escola", action: "verificar a regra de idade da ferramenta e as regras da sua escola sobre IA, e mostrar a aplicação a um pai, mãe ou encarregado de educação", standard: "usando a página oficial de ajuda ou de termos da ferramenta" },
    { id: "O4", condition: "Com algo que quer aprender", action: "escrever um pedido que diga o que quer, um pouco de contexto e como quer a resposta", standard: "para que a primeira resposta seja útil" },
    { id: "O5", condition: "Com uma resposta da IA que tem dados", action: "verificar nomes, datas e números numa fonte de confiança", standard: "anotando onde verificou cada dado" },
    { id: "O6", condition: "Quando escreve um pedido ou vê conteúdo feito com IA", action: "deixar de fora as informações privadas, recusar fazer imagens falsas de pessoas reais e questionar respostas injustas", standard: "sem partilhar dados privados e contando a um adulto de confiança sobre imagens falsas que magoam" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que é a IA e onde a encontra",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a IA, em palavras simples",
          minutes: 4,
          goal: "Explicar em duas frases o que a IA é e o que não é.",
          text: [
            "IA quer dizer inteligência artificial. São programas de computador que fazem coisas que normalmente precisam do pensamento de uma pessoa, como reconhecer uma cara, perceber a fala, sugerir uma música ou escrever uma resposta.",
            "A maior parte da IA aprende com enormes quantidades de exemplos. Um programa que viu milhões de fotos de gatos consegue adivinhar se uma foto nova tem um gato. Um programa que leu enormes quantidades de textos consegue escrever frases que parecem de uma pessoa.",
            "A IA não está viva, não tem sentimentos e não percebe o mundo de verdade como você. Ela encontra padrões e dá o seu melhor palpite. É por isso que pode ser muito útil e mesmo assim estar errada."
          ],
          words: [["IA", "inteligência artificial: programas de computador que fazem tarefas que normalmente precisam do pensamento humano."], ["Padrão", "algo que se repete de uma forma que um programa consegue aprender e usar para adivinhar."]],
          slides: [
            { title: "IA = inteligência artificial", bullets: ["Programas que fazem tarefas de pensar", "Reconhecem caras, percebem a fala, escrevem respostas"] },
            { title: "Como aprende", bullets: ["Estuda enormes quantidades de exemplos", "Encontra padrões", "Dá o seu melhor palpite"] },
            { title: "O que a IA NÃO é", bullets: ["Não está viva, não tem sentimentos", "Não percebe as coisas como você", "Pode estar errada, mesmo quando parece segura"] }
          ],
          tryIt: "Escreva duas frases que expliquem a IA a uma criança de dez anos. Não use nenhuma palavra que ela não conheça. Leia-as a alguém e pergunte se fizeram sentido.",
          youCanNow: "explicar em duas frases simples o que a IA é e o que não é.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer que a IA \"encontra padrões\"?", options: ["Sente o que você sente", "Sabe tudo sobre o mundo", "Aprende com muitos exemplos e dá o seu melhor palpite", "Lê os seus pensamentos"], answer: 2, why: "A IA aprende com enormes quantidades de exemplos e adivinha com base nos padrões que encontrou." },
            { objective: "O1", q: "O seu amigo diz: \"A IA está viva e percebe-me.\" O que lhe diz?", options: ["A IA não está viva e não tem sentimentos; adivinha a partir de padrões", "Sim, tem sentimentos como uma pessoa", "Só a IA paga está viva", "A IA só funciona em telefones"], answer: 0, why: "A IA é um programa que encontra padrões; não está viva e não percebe as coisas de verdade." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reconhecer a IA nas aplicações que já usa",
          minutes: 5,
          goal: "Dizer pelo menos três lugares onde a IA aparece nas suas aplicações do dia a dia.",
          text: [
            "Provavelmente você usa IA todos os dias sem lhe chamar assim. As aplicações de música e de vídeo sugerem o que tocar a seguir com base no que gostou antes. Isso é a IA à procura de padrões nas suas escolhas.",
            "As câmaras dos telefones usam IA para deixar as fotos mais nítidas e desfocar o fundo. O teclado adivinha a sua próxima palavra. Os mapas adivinham o trânsito. Os jogos usam IA para controlar as personagens contra quem você joga. As aplicações de email e de mensagens filtram o spam (mensagens indesejadas).",
            "Os assistentes de conversa, como o ChatGPT, o Microsoft Copilot e o Google Gemini, são um tipo mais novo chamado IA generativa. Em vez de só organizar ou sugerir, eles criam textos, imagens ou sons novos."
          ],
          steps: ["Abra uma aplicação que usa muito.", "Pergunte: ela está a sugerir, organizar, adivinhar ou criar alguma coisa para mim?", "Se sim, provavelmente é a IA a trabalhar.", "Escreva o nome da aplicação e o que a IA faz."],
          words: [["Recomendação", "uma sugestão que uma aplicação faz com base no que você fez antes."], ["IA generativa", "IA que cria coisas novas, como textos, imagens ou música."]],
          slides: [
            { title: "IA que você já usa", bullets: ["Sugestões de música e de vídeo", "Correções de fotos na câmara do telefone", "O teclado adivinha a próxima palavra", "Personagens de jogos e filtros de spam"] },
            { title: "Pergunte a si mesmo", bullets: ["A aplicação está a sugerir, organizar, adivinhar ou criar?", "Se sim, provavelmente é IA"] },
            { title: "IA generativa", bullets: ["Cria textos, imagens ou sons novos", "Exemplos: ChatGPT, Copilot, Gemini"] }
          ],
          tryIt: "Veja as aplicações do seu telefone ou de um computador da escola. Faça uma lista de três que usam IA e escreva uma linha para cada uma a dizer o que a IA faz, por exemplo \"Aplicação de música: sugere músicas de que posso gostar\".",
          youCanNow: "reconhecer a IA nas aplicações do dia a dia e dizer o que ela está a fazer.",
          quickCheck: [
            { objective: "O2", q: "O que torna a IA generativa diferente das sugestões de músicas de uma aplicação?", options: ["Só organiza emails", "Cria textos, imagens ou sons novos", "Só funciona sem internet", "Nunca usa padrões"], answer: 1, why: "A IA generativa cria conteúdo novo em vez de só organizar ou sugerir." },
            { objective: "O2", q: "Quer saber se uma aplicação usa IA. Que pergunta ajuda mais?", options: ["A aplicação é gratuita?", "O ícone é azul?", "Quantos anos tem a aplicação?", "Ela está a sugerir, organizar, adivinhar ou criar alguma coisa para mim?"], answer: 3, why: "Se uma aplicação sugere, organiza, adivinha ou cria para você, provavelmente há IA a trabalhar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Limites de idade, regras da escola e o seu encarregado de educação",
          minutes: 5,
          goal: "Verificar se pode usar uma ferramenta de IA, em casa e na escola, antes de se inscrever.",
          text: [
            "Cada ferramenta de IA tem regras sobre quem a pode usar. Muitas exigem que tenha pelo menos 13 anos, e algumas pedem autorização de um pai, mãe ou encarregado de educação se tiver menos de 18. A Google, por exemplo, diz que é preciso ter 13 anos ou mais (ou a idade que se aplica no seu país) para usar o Gemini com uma conta pessoal ou da escola. As regras mudam, por isso leia os termos ou a página de ajuda da própria ferramenta.",
            "A sua escola também tem regras. Algumas turmas permitem a IA para ter ideias, mas não para escrever o seu trabalho. Algumas proíbem-na nos testes. Usá-la contra as regras pode contar como batota, mesmo que não tenha sido de propósito. Na dúvida, pergunte ao seu professor antes de a usar.",
            "Antes de criar uma conta em qualquer aplicação nova, fale com um pai, mãe ou encarregado de educação. Mostre-lhe a aplicação, a sua regra de idade e as informações que ela pede. Muitas escolas também dão uma conta da escola para as ferramentas aprovadas; use essa para os trabalhos da escola."
          ],
          steps: ["Encontre a regra de idade da ferramenta na sua página oficial de ajuda ou de termos.", "Verifique as regras sobre IA da sua escola e do seu professor.", "Mostre a aplicação a um pai, mãe ou encarregado de educação antes de se inscrever.", "Use a sua conta da escola para as ferramentas aprovadas pela escola."],
          words: [["Termos de utilização", "as regras que uma empresa define para usar a sua aplicação ou site."], ["Honestidade académica", "ser honesto nos trabalhos da escola: o trabalho que entrega mostra o que você fez."]],
          sources: [{ name: "Ajuda das Apps Gemini da Google: o que precisa para iniciar sessão (requisito de idade)", url: "https://support.google.com/gemini/answer/13278668" }],
          slides: [
            { title: "Primeiro, veja a regra de idade", bullets: ["Muitas ferramentas de IA exigem 13 anos ou mais", "Algumas pedem a autorização dos pais abaixo dos 18", "Leia a página de ajuda ou de termos da própria ferramenta"] },
            { title: "Conheça as regras da sua escola", bullets: ["Algumas turmas permitem a IA só para ideias", "Algumas proíbem-na nos testes", "Na dúvida? Pergunte primeiro ao professor"] },
            { title: "Envolva um pai, mãe ou encarregado", bullets: ["Mostre-lhe a aplicação antes de se inscrever", "Vejam juntos as informações que ela pede", "Use a conta da escola para as ferramentas da escola"] }
          ],
          tryIt: "Escolha um assistente de IA. Encontre a sua regra de idade na página de ajuda ou de termos da própria empresa. Depois escreva a regra da sua escola ou de um professor sobre IA. Mostre as duas a um pai, mãe ou encarregado de educação.",
          youCanNow: "verificar a regra de idade de uma ferramenta de IA e as regras da sua escola sobre IA, e envolver um pai, mãe ou encarregado de educação antes de se inscrever.",
          quickCheck: [
            { objective: "O3", q: "Qual é o melhor lugar para encontrar a regra de idade de uma ferramenta de IA?", options: ["A página de ajuda ou de termos da própria ferramenta", "Um palpite de um amigo", "Um comentário qualquer num vídeo", "As estrelas de avaliação da aplicação"], answer: 0, why: "As regras mudam, por isso leia-as na página de ajuda ou de termos da própria empresa." },
            { objective: "O3", q: "Não tem a certeza se pode usar IA num trabalho da turma. O que faz?", options: ["Usa e espera que esteja tudo bem", "Pergunta a um amigo de outra escola", "Usa mas não conta a ninguém", "Pergunta ao seu professor antes de a usar"], answer: 3, why: "As regras das escolas são diferentes, e usar IA contra elas pode contar como batota, por isso pergunte primeiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que é a IA e onde a encontra",
        questions: [
          { objective: "O1", q: "Que frase descreve melhor a IA?", options: ["Um robô que tem sentimentos", "Programas de computador que fazem tarefas que normalmente precisam do pensamento humano", "Um tipo de carregador de telefone", "Um site que está sempre certo"], answer: 1, why: "IA são programas que fazem tarefas de pensar, como reconhecer, sugerir e escrever." },
          { objective: "O1", q: "Como aprende a maior parte da IA?", options: ["Indo à escola", "Lendo os seus pensamentos", "Nunca aprende", "Estudando enormes quantidades de exemplos e encontrando padrões"], answer: 3, why: "A IA encontra padrões em grandes conjuntos de exemplos e usa-os para adivinhar." },
          { objective: "O2", q: "A sua aplicação de música sugere uma música nova de que pode gostar. Isto é:", options: ["A IA a fazer uma recomendação", "Um vírus", "Uma regra de um professor", "Uma chamada telefónica"], answer: 0, why: "Sugestões com base nas suas escolhas anteriores são um uso comum da IA." },
          { objective: "O3", q: "Quer experimentar uma aplicação de IA nova. O que deve fazer primeiro?", options: ["Inscrever-se com qualquer data de nascimento", "Dar-lhe a palavra-passe da escola", "Verificar a sua regra de idade e mostrá-la a um pai, mãe ou encarregado de educação", "Descarregá-la de um anúncio que aparece no ecrã"], answer: 2, why: "As regras de idade e a autorização de um pai, mãe ou encarregado vêm antes de se inscrever." },
          { objective: "O3", q: "O seu professor diz que a IA serve para ter ideias, mas não para escrever a sua redação. Você:", options: ["Pede à IA para escrever a redação na mesma", "Ignora a regra", "Usa a IA só para ideias e depois escreve a redação você mesmo", "Copia a redação de um amigo"], answer: 2, why: "Seguir a regra do professor mantém o seu trabalho honesto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar um assistente de IA de forma inteligente",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer uma pergunta clara",
          minutes: 5,
          goal: "Escrever um pedido claro que dê uma resposta útil à primeira.",
          text: [
            "O que você escreve a um assistente de IA chama-se pedido (em inglês, \"prompt\"). Pedidos claros dão respostas melhores.",
            "Um bom pedido tem três partes: o que você quer, um pouco de contexto e como quer a resposta. Por exemplo: \"Estou no 9.º ano e vamos começar a estudar o ciclo da água. Explique-o em 5 passos curtos com um exemplo do dia a dia.\"",
            "Um pedido fraco, como \"ciclo da água\", obriga o assistente a adivinhar o que você precisa. Normalmente recebe uma resposta longa e geral."
          ],
          steps: ["Diga o que quer.", "Acrescente um pouco de contexto (o seu ano, o tema, o que já sabe).", "Diga como quer a resposta: passos, uma lista, curta, palavras simples ou um exemplo."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA."]],
          slides: [
            { title: "O pedido é aquilo que você pede", bullets: ["Pedido claro = resposta melhor", "Pedido vago = resposta geral"] },
            { title: "Três partes", bullets: ["1. O que você quer", "2. Um pouco de contexto", "3. Como quer a resposta"] },
            { title: "Fraco e claro", bullets: ["Fraco: \"ciclo da água\"", "Claro: \"Estou no 9.º ano. Explique o ciclo da água em 5 passos curtos com um exemplo.\""] }
          ],
          tryIt: "Escolha algo que tem curiosidade de saber, como funciona o motor de um jogo ou porque é que o céu é azul. Escreva um pedido com as três partes, envie-o a um assistente de IA que tem autorização para usar e leia a resposta.",
          youCanNow: "escrever um pedido claro com as três partes.",
          quickCheck: [
            { objective: "O4", q: "O que é a parte do \"contexto\" num pedido?", options: ["A cor do ecrã", "Um pouco sobre você e o tema, como o seu ano ou o que já sabe", "A sua palavra-passe", "As definições da aplicação"], answer: 1, why: "O contexto, como o seu ano e o tema, ajuda o assistente a adaptar a resposta a você." },
            { objective: "O4", q: "Escreveu \"vulcões\" e recebeu uma resposta longa e geral. O que envia a seguir?", options: ["\"vulcões\" outra vez", "Nada; desiste", "\"Estou no 8.º ano. Explique como os vulcões entram em erupção em 4 passos curtos.\"", "A morada da sua casa"], answer: 2, why: "Acrescentar o que quer, o contexto e o formato torna o pedido claro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar a resposta antes de confiar nela",
          minutes: 5,
          goal: "Verificar uma resposta da IA em pelo menos uma fonte de confiança.",
          text: [
            "Os assistentes de IA às vezes inventam coisas. Podem inventar uma data, uma citação, um livro que não existe ou um dado que parece certo mas está errado. A isto chama-se \"alucinação\".",
            "Verifique tudo o que é importante, sobretudo dados para a escola, a saúde, o dinheiro e as notícias. Procure no seu livro escolar, pergunte ao seu professor ou ao bibliotecário, ou encontre um site de confiança, como um museu, uma agência de ciência, uma enciclopédia que a sua escola usa, ou um site que acabe em .gov ou .edu.",
            "Um bom hábito: compare duas fontes. Se a IA e uma fonte de confiança não dizem o mesmo, confie na fonte e talvez conte ao seu professor o que a IA errou."
          ],
          steps: ["Encontre os dados na resposta: nomes, datas, números.", "Procure cada um numa fonte de confiança.", "Se não forem iguais, fique com a fonte de confiança.", "Anote onde verificou."],
          words: [["Alucinação", "quando uma IA escreve algo que parece verdade mas é inventado."], ["Fonte", "o lugar de onde vem uma informação."]],
          slides: [
            { title: "A IA pode inventar coisas", bullets: ["Datas e números errados", "Citações ou livros falsos", "Dados que parecem certos mas não são"] },
            { title: "Verifique em fontes de confiança", bullets: ["O seu livro escolar, o professor ou o bibliotecário", "Museus, agências de ciência, sites .gov ou .edu"] },
            { title: "Se não dizem o mesmo", bullets: ["Confie na fonte de confiança", "Anote onde verificou"] }
          ],
          tryIt: "Pegue na resposta do seu último pedido. Escolha dois dados dela e verifique cada um numa fonte de confiança. Anote se cada um estava certo e onde verificou.",
          youCanNow: "reconhecer os dados que precisam de ser verificados e verificá-los numa fonte de confiança.",
          quickCheck: [
            { objective: "O5", q: "Qual é uma fonte de confiança para verificar um dado da escola?", options: ["Um comentário qualquer na internet", "A mesma IA, perguntando outra vez", "Um meme", "O seu livro escolar ou um site que acabe em .edu ou .gov"], answer: 3, why: "Os livros escolares, os professores, os bibliotecários e os sites de confiança são bons lugares para verificar dados." },
            { objective: "O5", q: "A IA indica um livro para o seu trabalho, mas não o encontra em lado nenhum. O que faz?", options: ["Trata-o como uma possível alucinação e usa uma fonte que consegue encontrar", "Põe-no no trabalho na mesma", "Inventa um número de página", "Pede à IA que prometa que é verdadeiro"], answer: 0, why: "A IA pode inventar livros e dados; confie nas fontes que consegue mesmo verificar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ficar seguro e ser justo com a IA",
          minutes: 5,
          goal: "Usar a IA sem partilhar informações privadas e sem magoar ninguém.",
          text: [
            "Não escreva informações privadas numa ferramenta de IA: o seu nome completo com a sua morada, a sua escola e o seu horário, números de telefone, palavras-passe, ou fotos de amigos sem lhes perguntar. O que escreve pode ficar guardado.",
            "A IA consegue fazer imagens falsas, vozes falsas e vídeos falsos, a que às vezes se chama deepfakes. Nunca use a IA para fazer imagens falsas ou embaraçosas de pessoas reais. Isso pode magoá-las, ir contra as regras da escola e até contra a lei. Se alguém fizer isso a você ou a um amigo, conte a um adulto de confiança.",
            "A IA também pode ser injusta. Ela aprendeu com textos escritos por pessoas, por isso pode repetir estereótipos. Se uma resposta parecer injusta para um grupo de pessoas, questione-a."
          ],
          steps: ["Leia o seu pedido antes de o enviar e tire os dados privados.", "Nunca faça imagens ou vozes falsas de pessoas reais.", "Se vir um deepfake que magoa, conte a um adulto de confiança.", "Questione as respostas que parecem injustas."],
          words: [["Deepfake", "uma imagem, voz ou vídeo falso feito com IA para parecer verdadeiro."], ["Viés", "quando um resultado é injusto para algumas pessoas, muitas vezes por causa daquilo com que a IA aprendeu."]],
          slides: [
            { title: "Mantenha em privado", bullets: ["Nada de morada, horário ou número de telefone", "Nada de palavras-passe", "Nada de fotos de amigos sem perguntar"] },
            { title: "Os deepfakes magoam", bullets: ["Nunca faça falsos de pessoas reais", "Pode ir contra as regras da escola e a lei", "Se vir um, conte a um adulto de confiança"] },
            { title: "Atenção ao viés", bullets: ["A IA pode repetir estereótipos", "Questione as respostas que parecem injustas"] }
          ],
          tryIt: "Tarefa final: faça a sua \"explicação da IA\" de uma página: o que é a IA em duas frases, três aplicações que usa e que têm IA, e uma pergunta que fez a um assistente de IA com a resposta e como a verificou. Confirme que não tem nenhuma informação privada.",
          youCanNow: "usar a IA com segurança e de forma justa, e explicar a IA a outra pessoa.",
          quickCheck: [
            { objective: "O6", q: "Porque deve deixar as informações privadas fora das ferramentas de IA?", options: ["As ferramentas de IA são lentas", "O que escreve pode ficar guardado", "Deixa as respostas mais curtas", "Os dados privados tornam a IA mais inteligente"], answer: 1, why: "O que escreve pode ficar guardado, por isso dados privados como a sua morada e o seu horário ficam de fora." },
            { objective: "O6", q: "Um amigo quer usar a IA para fazer uma imagem falsa e engraçada de um colega de turma. O que faz?", options: ["Ajuda a fazê-la mas não a partilha", "Publica-a, porque é uma brincadeira", "Diz que não, porque imagens falsas de pessoas reais podem magoá-las e ir contra as regras", "Envia-a só para amigos chegados"], answer: 2, why: "Imagens falsas de pessoas reais podem magoá-las, ir contra as regras da escola e até contra a lei." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar um assistente de IA de forma inteligente",
        questions: [
          { objective: "O4", q: "Qual é o pedido mais claro?", options: ["\"Estou no 9.º ano. Explique o ciclo da água em 5 passos curtos com um exemplo.\"", "\"ciências\"", "\"ajuda\"", "\"diga-me coisas\""], answer: 0, why: "Diz o que quer, dá contexto e diz como quer a resposta." },
          { objective: "O5", q: "O que é uma \"alucinação\" da IA?", options: ["Um nível de um jogo de vídeo", "Um tipo de ecrã de telefone", "Uma regra da escola", "Quando a IA inventa algo que parece verdade"], answer: 3, why: "Uma alucinação é uma resposta inventada que parece verdadeira." },
          { objective: "O5", q: "A IA dá-lhe uma data para um trabalho de história. Você deve:", options: ["Copiá-la logo", "Verificá-la no seu livro escolar ou noutra fonte de confiança", "Perguntar outra vez à IA e confiar na segunda resposta", "Deixar a data de fora"], answer: 1, why: "Os dados importantes verificam-se numa fonte de confiança." },
          { objective: "O6", q: "O que NÃO deve escrever num assistente de IA?", options: ["A morada da sua casa e o seu horário da escola", "\"Explique a fotossíntese de forma simples\"", "\"Dê-me 3 ideias para um cartaz do clube\"", "\"Faça mais curto\""], answer: 0, why: "A morada e o horário são informações privadas." },
          { objective: "O6", q: "Um colega de turma fez uma foto falsa de outro aluno com IA. O que deve fazer?", options: ["Partilhá-la", "Fazer outra", "Contar a um adulto de confiança", "Publicar um comentário"], answer: 2, why: "Os deepfakes de pessoas reais podem magoá-las; um adulto de confiança pode ajudar a pará-los." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: O que é a IA? (para Jovens)",
    questions: [
      { objective: "O1", q: "IA quer dizer:", options: ["Internet automática", "Inteligência artificial", "Informação avançada", "Instalador de aplicações"], answer: 1, why: "IA é a abreviatura de inteligência artificial." },
      { objective: "O1", q: "O que é verdade sobre a IA?", options: ["Tem sentimentos", "Está sempre certa", "Está viva", "Encontra padrões e dá o seu melhor palpite"], answer: 3, why: "A IA adivinha a partir de padrões; não está viva e pode estar errada." },
      { objective: "O1", q: "Porque pode a IA estar errada mesmo quando parece segura?", options: ["É preguiçosa", "Quer enganá-lo", "Os telefones são lentos", "Está a adivinhar a partir de padrões, sem perceber de verdade"], answer: 3, why: "Ela prevê a partir de padrões, por isso uma resposta segura pode estar errada." },
      { objective: "O2", q: "O teclado do seu telefone adivinha a sua próxima palavra. Isso é:", options: ["Um vírus", "A IA a trabalhar", "Um professor", "Uma palavra-passe"], answer: 1, why: "Adivinhar a próxima palavra é uma função comum da IA." },
      { objective: "O2", q: "Qual é um exemplo de IA generativa?", options: ["Uma calculadora", "Um interruptor de luz", "Um assistente de conversa que escreve uma história", "Um mapa em papel"], answer: 2, why: "A IA generativa cria textos, imagens ou sons novos." },
      { objective: "O2", q: "Uma aplicação de vídeo mostra \"Porque viu...\". Isso é:", options: ["Uma recomendação feita pela IA", "Uma mensagem SMS", "Uma regra da escola", "Um comando de jogos"], answer: 0, why: "Sugere vídeos a partir das suas escolhas anteriores." },
      { objective: "O3", q: "Onde deve encontrar a regra de idade de uma ferramenta de IA?", options: ["Num palpite de um amigo", "Na página de ajuda ou de termos da própria ferramenta", "Num anúncio que aparece no ecrã", "Em lado nenhum, não há regras"], answer: 1, why: "As páginas da própria empresa dão a regra atual." },
      { objective: "O3", q: "O que diz a página de ajuda da Google sobre usar o Gemini com uma conta pessoal ou da escola?", options: ["Qualquer idade serve", "Tem de ter 21 anos", "Só os professores o podem usar", "Tem de ter 13 anos ou mais, ou a idade que se aplica no seu país"], answer: 3, why: "A página de ajuda da Google define 13 anos ou mais, ou a idade local." },
      { objective: "O3", q: "Antes de se inscrever numa aplicação nova, deve:", options: ["Falar com um pai, mãe ou encarregado de educação", "Usar uma data de nascimento falsa", "Partilhar a sua palavra-passe com um amigo", "Clicar em todos os anúncios"], answer: 0, why: "Um pai, mãe ou encarregado de educação deve saber das contas novas." },
      { objective: "O3", q: "Usar a IA para escrever um trabalho que o professor disse para fazer sozinho é:", options: ["Normal se ninguém notar", "Obrigatório", "Ir contra as regras, e pode contar como batota", "Um bom hábito de estudo"], answer: 2, why: "As regras da escola decidem como se pode usar a IA; não as cumprir é desonesto." },
      { objective: "O4", q: "O que é um pedido (prompt)?", options: ["Um comando de jogos", "Um tipo de palavra-passe", "O que você escreve ou diz a um assistente de IA", "Uma loja de aplicações"], answer: 2, why: "O pedido é aquilo que você pede à IA." },
      { objective: "O4", q: "Que parte torna um pedido mais claro?", options: ["Dizer como quer a resposta, por exemplo em 5 passos curtos", "Escrever só uma palavra", "Acrescentar a sua morada", "Escrever tudo em maiúsculas"], answer: 0, why: "Dizer o formato ajuda a IA a dar uma resposta útil." },
      { objective: "O4", q: "Um pedido fraco como \"ciclo da água\" normalmente recebe:", options: ["Uma resposta perfeita", "Nunca uma resposta", "Um vírus", "Uma resposta longa e geral"], answer: 3, why: "A IA tem de adivinhar, por isso a resposta é geral." },
      { objective: "O5", q: "Qual é a fonte de maior confiança para verificar um dado de ciência?", options: ["Um comentário qualquer na internet", "Uma agência de ciência ou o seu livro escolar", "Um meme", "Um anúncio que aparece no ecrã"], answer: 1, why: "Os livros escolares e os sites oficiais de ciência são fiáveis." },
      { objective: "O5", q: "A IA e o seu livro escolar não dizem o mesmo. Você deve:", options: ["Confiar no livro escolar ou na fonte de confiança", "Confiar na IA", "Atirar uma moeda ao ar", "Usar as duas respostas"], answer: 0, why: "Uma fonte fiável vale mais do que uma resposta da IA não verificada." },
      { objective: "O5", q: "Que dados precisam mais de ser verificados?", options: ["A sua própria opinião", "Uma piada que pediu", "Datas, números e nomes", "Um poema que pediu"], answer: 2, why: "Dados como datas e números são onde a IA erra muitas vezes." },
      { objective: "O6", q: "Qual é uma informação privada que deve deixar fora da IA?", options: ["\"Explique as frações\"", "A sua palavra-passe", "\"Faça mais curto\"", "Uma cor preferida"], answer: 1, why: "As palavras-passe nunca se partilham." },
      { objective: "O6", q: "Um deepfake é:", options: ["Uma piscina funda", "Um tipo de jogo", "Um guia de estudo", "Uma imagem, voz ou vídeo falso feito com IA"], answer: 3, why: "Os deepfakes são falsificações feitas com IA que parecem verdadeiras." },
      { objective: "O6", q: "A IA dá uma resposta que parece injusta para um grupo de pessoas. Você deve:", options: ["Partilhá-la", "Acreditar nela", "Nunca mais usar a IA", "Questioná-la, porque a IA pode repetir estereótipos"], answer: 3, why: "A IA pode trazer viés daquilo com que aprendeu." },
      { objective: "O6", q: "Se alguém fizer uma imagem falsa sua com IA que magoa, o melhor passo é:", options: ["Guardar segredo", "Contar a um adulto de confiança", "Fazer uma de volta", "Partilhá-la mais"], answer: 1, why: "Um adulto de confiança pode ajudar a denunciá-la e a pará-la." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 3, 6, 9, 10, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "O que é a IA", objective: "O1", notYet: "A explicação falta, está errada ou é difícil demais para um aluno mais novo.", meets: "Duas frases claras que dizem o que é a IA e que ela pode estar errada.", exceeds: "Também diz como a IA aprende com exemplos, com palavras que uma criança de dez anos conhece." },
      { name: "A IA nas minhas aplicações", objective: "O2", notYet: "Menos de três aplicações, ou nenhuma linha sobre o que a IA faz.", meets: "Três aplicações, cada uma com uma linha sobre o que a IA faz.", exceeds: "Também indica qual delas é IA generativa." },
      { name: "Pergunta clara", objective: "O4", notYet: "O pedido tem uma ou duas palavras.", meets: "O pedido diz o que quer, um pouco de contexto e como quer a resposta.", exceeds: "A resposta foi útil à primeira, ou um pedido de seguimento melhorou-a." },
      { name: "Resposta verificada", objective: "O5", notYet: "A resposta foi usada sem verificar.", meets: "Pelo menos um dado verificado numa fonte de confiança, e a fonte é indicada.", exceeds: "Dois dados verificados em duas fontes, com uma nota sobre o que a IA errou." },
      { name: "Seguro e permitido", objective: "O6", notYet: "A explicação tem dados privados, ou a ferramenta foi usada contra a sua regra de idade ou as regras da escola.", meets: "Nenhuma informação privada, e a ferramenta usada respeita a sua regra de idade e as regras da escola.", exceeds: "Acrescenta uma dica para o leitor mais novo sobre como ficar seguro com a IA." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que começam outro curso para jovens da Koach Learn em 30 dias",
      "Alunos que dizem verificar as respostas da IA nos trabalhos da escola (inquérito de seguimento aos 30 dias)",
      "Professores ou programas para jovens que dizem ter menos problemas com as regras sobre IA entre os alunos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador da escola com internet",
      "Um assistente de IA gratuito que o aluno tem idade e autorização para usar, como uma ferramenta aprovada pela escola",
      "Papel ou um documento para a explicação de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Verifique as regras de idade de qualquer ferramenta de IA antes da aula e use contas aprovadas pela escola quando existirem.",
      "Partilhe no início as regras sobre IA da sua escola ou programa, para os alunos saberem o que é permitido.",
      "Nunca peça aos alunos para escrever dados privados nem para carregar fotos de pessoas reais.",
      "Os alunos abaixo do limite de idade podem fazer as tarefas em papel ou com um professor a mostrar a ferramenta.",
      "Peça aos alunos para partilharem as suas explicações com um aluno mais novo ou um colega e para as avaliarem com a grelha de avaliação."
    ]
  }
};
