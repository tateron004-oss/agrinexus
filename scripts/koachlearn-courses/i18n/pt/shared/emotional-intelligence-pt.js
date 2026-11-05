"use strict";

// Koach Learn course (Portuguese translation of shared/emotional-intelligence.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// STOP is kept as an acronym: Suspender, Tomar fôlego, Observar, Prosseguir.

module.exports = {
  id: "emotional-intelligence-pt",
  lang: "pt",
  translationOf: "emotional-intelligence",
  category: "Athletes",
  name: "Inteligência Emocional",
  skills: "Dar nome às suas emoções, Descobrir o que o faz reagir, Fazer uma pausa antes de responder, Escutar com empatia, Resolver conflitos com frases na primeira pessoa (\"eu\"), Dar e receber comentários",
  outcome: "dizer o que sente, fazer uma pausa antes de reagir, escutar de forma que a outra pessoa se sinta compreendida e enfrentar uma conversa difícil no trabalho, numa equipa ou em casa com frases calmas na primeira pessoa (\"eu\") e um pedido claro.",
  about: [
    "A inteligência emocional é a capacidade de notar e gerir as suas próprias emoções e de compreender as dos outros. Não se trata de esconder os sentimentos nem de ser sempre simpático. Trata-se de usar os sentimentos como informação, para escolher o que fazer a seguir em vez de reagir.",
    "Ela conta em todo o lado: um atleta que recebe correções duras do treinador, um chefe que dá comentários, um trabalhador novo com um cliente impaciente, um líder voluntário que mantém a equipa unida, um antigo militar que se adapta ao trabalho civil, alguém que volta para casa e reconstrói a confiança da família, um jovem numa discussão num grupo de mensagens. Os empregadores dão muitas vezes tanto valor a estas capacidades de relacionamento como às capacidades técnicas.",
    "Você vai praticar seis capacidades: dar nome às emoções, descobrir o que o faz reagir, fazer uma pausa, escutar com empatia, resolver conflitos e dar e receber comentários. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Prepare e tenha uma conversa real que você tem adiado (com um colega de equipa, um colega de trabalho, um familiar ou um amigo). Antes, escreva o que sente e o que o fez sentir assim. Durante a conversa, faça uma pausa antes de responder, repita por palavras suas o que a outra pessoa diz e use uma frase \"Eu sinto ... quando ... porque ... Podemos ...?\". Depois, escreva o que correu bem e uma coisa a fazer de forma diferente.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas e treinadores, chefes e trabalhadores novos, líderes voluntários, antigos militares que se adaptam ao trabalho civil, pessoas que voltam para casa e reconstroem a confiança da família, e jovens.",
    startingPoint: "Sentem emoções fortes e lidam com outras pessoas todos os dias. Muitos descrevem os sentimentos só como bem, mal, normal ou zangado, reagem depressa quando algo os provoca e sentem-se pouco à vontade com comentários e conversas difíceis.",
    gap: "Os empregadores dão tanto valor às capacidades de relacionamento como às capacidades técnicas, e as reações rápidas estragam equipas, empregos e famílias. Os alunos precisam de dar nome às suas emoções e de as gerir, escutar com empatia e lidar com conflitos e comentários com calma, para escolherem o que fazer a seguir em vez de reagir.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "A prática usa situações reais mas fáceis de gerir; ninguém tem de partilhar detalhes privados",
      "Não é terapia; os alunos com sofrimento contínuo são encaminhados para um conselheiro ou para o curso sobre saúde mental e stress",
      "Tempo: lições de cerca de cinco minutos com pequenas práticas diárias"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Três vezes num dia", action: "dizer o que sente com uma palavra exata e o sinal do corpo que vem com ela", standard: "sem usar bem, mal, normal ou zangado" },
    { id: "O2", condition: "Olhando para reações fortes recentes", action: "identificar duas coisas que o fazem reagir e aquilo que cada uma toca, como o respeito ou a justiça", standard: "com uma resposta planeada escrita para cada uma" },
    { id: "O3", condition: "Num momento de tensão", action: "usar a pausa STOP para escolher a sua resposta", standard: "antes de falar ou de enviar uma mensagem" },
    { id: "O4", condition: "Quando alguém partilha um problema", action: "repetir por palavras suas o que a pessoa sente e fazer uma pergunta aberta", standard: "de forma que ela diga que você a compreendeu" },
    { id: "O5", condition: "Perante um problema real com outra pessoa", action: "dizer o que o incomoda com uma frase calma na primeira pessoa (\"eu\") e um pedido claro", standard: "usando o modelo eu sinto, quando, porque, podemos" },
    { id: "O6", condition: "Ao dar ou receber comentários", action: "dar comentários concretos e gentis e responder a comentários duros sem se pôr na defensiva", standard: "descrevendo ações, não a pessoa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer-se e gerir-se",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dar nome ao que sente",
          minutes: 5,
          goal: "Dar nome à sua emoção com uma palavra exata, e não só \"normal\" ou \"zangado\".",
          text: [
            "A inteligência emocional começa pela autoconsciência: saber o que sente enquanto sente. Muitos de nós usamos só algumas palavras, como bem, mal, normal ou zangado. Mas \"zangado\" pode ser, na verdade, envergonhado, desrespeitado, preocupado ou cansado.",
            "Muitas vezes, o corpo sabe primeiro. O maxilar apertado, a cara quente, os punhos fechados, um nó no estômago ou o coração acelerado são sinais. Quando notar um, pergunte: \"O que estou a sentir agora?\" e procure uma palavra mais exata.",
            "Dar um nome claro a um sentimento ajuda-o a acalmá-lo e a decidir o que fazer. Um jogador que sabe \"Estou frustrado comigo, não com o treinador\" encara o treino de forma diferente de outro que só se sente zangado com toda a gente."
          ],
          steps: ["Note um sinal do corpo: maxilar apertado, cara quente, nó no estômago.", "Pergunte: o que estou a sentir agora?", "Encontre uma palavra mais exata do que bem, mal ou zangado.", "Diga-a para si: \"Eu sinto-me ...\""],
          words: [["Inteligência emocional", "a capacidade de notar e gerir as suas próprias emoções e de compreender as dos outros."], ["Autoconsciência", "saber o que sente e porquê, no momento em que acontece."]],
          slides: [
            { title: "Inteligência emocional", bullets: ["Notar e gerir as suas emoções", "Compreender as emoções dos outros", "Escolher a sua resposta em vez de reagir"] },
            { title: "O corpo sabe primeiro", bullets: ["Maxilar apertado, cara quente, punhos fechados", "Nó no estômago, coração acelerado"] },
            { title: "Vá além de \"zangado\"", bullets: ["Envergonhado, desrespeitado, preocupado, cansado?", "Frustrado, nervoso, desiludido, com ciúmes?", "Uma palavra exata ajuda a acalmar"] }
          ],
          tryIt: "Três vezes hoje, pare e escreva uma palavra exata para o que sente e o sinal do corpo que veio com ela (por exemplo: \"nervoso - coração acelerado antes do meu turno\"). Tente não usar bem, mal, normal ou zangado.",
          youCanNow: "notar os sinais do corpo e dar nome à sua emoção com uma palavra exata.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma palavra mais exata para quando se sente mal antes de um exame importante?", options: ["Normal", "Nervoso", "Mais ou menos", "Mal"], answer: 1, why: "\"Nervoso\" dá nome ao sentimento exato, e isso ajuda a lidar com ele." },
            { objective: "O1", q: "Você nota o peito apertado e o coração acelerado antes do seu turno. O que faria?", options: ["Ignorar e esperar que passe", "Dizer a toda a gente que está tudo bem", "Dar nome ao sentimento com uma palavra exata, como preocupado", "Faltar ao turno"], answer: 2, why: "Dar nome ao sentimento a partir do sinal do corpo é o primeiro passo para o gerir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Descobrir o que o faz reagir",
          minutes: 5,
          goal: "Identificar duas situações que provocam em você reações fortes.",
          text: [
            "Um gatilho é uma situação, uma palavra ou uma ação que provoca depressa uma emoção forte: ser interrompido, ser corrigido à frente dos outros, alguém chegar atrasado, um certo tom de voz, perder um jogo renhido, sentir-se ignorado.",
            "Os gatilhos ligam-se muitas vezes a coisas importantes para você, como o respeito, a justiça ou a segurança, ou a experiências passadas. Para quem volta da prisão, ser tratado com desprezo pode doer muito. Para um antigo militar, pode ser um barulho alto e repentino. Isso é humano, não é um defeito.",
            "Quando conhece os seus gatilhos, eles perdem parte da força. Pode planear com antecedência: \"Quando o meu chefe me corrigir à frente da equipa, vou respirar fundo, dizer 'entendido' e pedir para falarmos depois.\""
          ],
          steps: ["Pense nas duas últimas vezes em que reagiu com força.", "Escreva o que aconteceu logo antes.", "Escreva o que isso tocou: respeito, justiça, segurança, ser ouvido?", "Escreva um plano para a próxima vez."],
          words: [["Gatilho", "uma situação ou ação que provoca depressa uma emoção forte."], ["Padrão", "algo que acontece muitas vezes de forma parecida."]],
          slides: [
            { title: "O que é um gatilho", bullets: ["Provoca depressa uma emoção forte", "Ser interrompido, corrigido em público, ignorado", "Colegas atrasados, um certo tom de voz"] },
            { title: "Porque os gatilhos doem tanto", bullets: ["Tocam no respeito, na justiça ou na segurança", "Ou em experiências passadas", "Isso é humano, não é um defeito"] },
            { title: "Planeie com antecedência", bullets: ["Conheça os seus principais gatilhos", "Decida a sua resposta antes", "\"Respirar, dizer 'entendido', falar depois\""] }
          ],
          tryIt: "Escreva os seus dois principais gatilhos. Para cada um, escreva o que ele toca (respeito, justiça, segurança, ser ouvido) e uma frase sobre como vai responder da próxima vez.",
          youCanNow: "dar nome aos seus gatilhos, ver o que eles tocam e planear antes uma resposta melhor.",
          quickCheck: [
            { objective: "O2", q: "A que se ligam muitas vezes os gatilhos?", options: ["A coisas importantes para você, como o respeito ou a justiça", "Ao tempo que faz", "Ao acaso", "Só à fome"], answer: 0, why: "Os gatilhos costumam tocar em algo que é muito importante para você." },
            { objective: "O2", q: "Quando falam por cima de você nas reuniões, fica sempre zangado. O que faria?", options: ["Deixar de ir às reuniões", "Falar por cima dos outros primeiro", "Esperar que não volte a acontecer", "Escrevê-lo como gatilho e planear como vai responder da próxima vez"], answer: 3, why: "Planear com antecedência tira força ao gatilho." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer uma pausa antes de responder",
          minutes: 5,
          goal: "Usar a pausa STOP para escolher a sua resposta num momento de tensão.",
          text: [
            "Entre o que acontece e o que você faz, há um pequeno intervalo. Autocontrolo é tornar esse intervalo maior. Uma ferramenta fácil é STOP: Suspender (parar). Tomar fôlego. Observar o que sente e o que está a acontecer. Prosseguir com uma escolha.",
            "No momento, algumas respirações lentas, contar até dez ou dizer \"Dê-me um minuto\" ajudam a ganhar tempo. Se estiver demasiado nervoso para falar bem, pode dizer \"Quero falar sobre isto, mas primeiro preciso de dez minutos\" e voltar depois. Voltar é a parte mais importante.",
            "Fazer uma pausa não é o mesmo que guardar tudo para si. Você continua a lidar com o sentimento; só o faz quando consegue pensar com clareza. Os atletas chamam a isto manter a calma; um jogador calmo toma melhores decisões no fim do jogo."
          ],
          steps: ["Suspender: não fale nem carregue em enviar ainda.", "Tome fôlego devagar, uma ou três vezes.", "Observe: o que estou a sentir? O que está mesmo a acontecer?", "Prossiga: escolha o que dizer ou fazer, ou peça uma pequena pausa e volte depois."],
          words: [["Autocontrolo", "escolher o que faz mesmo quando sente uma emoção forte."], ["Serenidade", "manter a calma e a cabeça fria sob pressão."]],
          slides: [
            { title: "Torne o intervalo maior", bullets: ["Algo acontece", "Pausa", "Depois escolha a sua resposta"] },
            { title: "STOP", bullets: ["Suspender (parar)", "Tomar fôlego", "Observar", "Prosseguir com uma escolha"] },
            { title: "Precisa de mais tempo?", bullets: ["\"Preciso de dez minutos, depois falamos.\"", "Volte sempre ao assunto"] },
            { title: "Pausa não é guardar tudo", bullets: ["Lide com o sentimento", "Quando conseguir pensar com clareza"] }
          ],
          tryIt: "Pense numa mensagem ou num comentário que o deixou zangado há pouco tempo. Faça o STOP no papel: o que sentiu, o que estava mesmo a acontecer e o que diria agora. Da próxima vez que acontecer a sério, use o STOP antes de responder.",
          youCanNow: "usar o STOP para fazer uma pausa e escolher a sua resposta em vez de reagir.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer o S de STOP?", options: ["Suspender (parar)", "Saltar", "Sorrir", "Sair"], answer: 0, why: "O STOP começa por parar antes de reagir." },
            { objective: "O3", q: "Chega uma mensagem malcriada e você começa a escrever uma resposta zangada. O que faria?", options: ["Enviá-la depressa antes de mudar de ideias", "Parar, tomar fôlego e decidir o que dizer quando estiver calmo", "Reencaminhar a mensagem para os amigos", "Bloquear a pessoa logo"], answer: 1, why: "Fazer uma pausa deixa-o escolher a sua resposta em vez de reagir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer-se e gerir-se",
        questions: [
          { objective: "O1", q: "A inteligência emocional é sobretudo:", options: ["Esconder todos os sentimentos", "Ser sempre simpático", "Notar e gerir as suas emoções e compreender as dos outros", "Ser quem fala mais alto na sala"], answer: 2, why: "Trata-se de usar os sentimentos como informação para escolher a sua resposta." },
          { objective: "O1", q: "Qual é a palavra mais exata para um sentimento?", options: ["Mal", "Envergonhado", "Normal", "Tanto faz"], answer: 1, why: "Uma palavra exata como envergonhado diz o que está mesmo a acontecer." },
          { objective: "O2", q: "O que é um gatilho?", options: ["Uma situação que provoca depressa uma emoção forte", "Um tipo de exercício", "Um momento calmo", "Um cargo no trabalho"], answer: 0, why: "Os gatilhos provocam depressa emoções fortes." },
          { objective: "O3", q: "No STOP, o que quer dizer o T?", options: ["Tirar satisfações", "Teclar uma resposta rápida", "Telefonar a toda a gente", "Tomar fôlego"], answer: 3, why: "Suspender, Tomar fôlego, Observar, Prosseguir." },
          { objective: "O3", q: "Você está demasiado zangado para falar bem. O que é boa ideia?", options: ["Dizer a primeira coisa que lhe vier à cabeça", "Nunca mais falar com a pessoa", "Pedir dez minutos e voltar para falar", "Escrever sobre isso na internet"], answer: 2, why: "Uma pequena pausa seguida do regresso deixa-o falar com clareza." }
        ]
      }
    },
    {
      name: "Capítulo 2: Compreender os outros e trabalhar com eles",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escutar com empatia",
          minutes: 5,
          goal: "Escutar e repetir por palavras suas, para que a outra pessoa se sinta compreendida.",
          text: [
            "Empatia é compreender o que outra pessoa sente e porquê, mesmo que você sentisse outra coisa. Não precisa de concordar com ela para a compreender.",
            "A maioria das pessoas escuta para responder. Escutar com empatia é escutar para compreender. Pouse o telefone, olhe para a pessoa e deixe-a terminar. Depois, repita: diga por palavras suas o que ouviu e o sentimento que notou. \"Então tem feito turnos a mais e ninguém reparou. Isso deve ser mesmo frustrante.\"",
            "A seguir, faça uma pergunta aberta: \"O que é que ajudaria?\" ou \"O que aconteceu depois?\" Evite dar logo conselhos, comparar (\"isso não é nada, uma vez eu...\") ou dizer \"tenha calma\". Um treinador, um funcionário de atendimento ao cliente, um líder voluntário e um pai ou uma mãe vão mais longe quando as pessoas se sentem ouvidas primeiro."
          ],
          steps: ["Afaste as distrações e olhe para a pessoa.", "Deixe-a terminar sem interromper.", "Repita o que ouviu e o sentimento: \"Parece que ...\"", "Faça uma pergunta aberta: \"O que é que ajudaria?\""],
          words: [["Empatia", "compreender o que outra pessoa sente e porquê."], ["Repetir por palavras suas", "dizer de novo, com as suas palavras, o que ouviu."], ["Pergunta aberta", "uma pergunta a que não se pode responder só com sim ou não."]],
          slides: [
            { title: "Empatia", bullets: ["Compreender o que a pessoa sente e porquê", "Não precisa de concordar"] },
            { title: "Escute para compreender", bullets: ["Telefone pousado, olhos na pessoa", "Deixe-a terminar", "Repita: \"Parece que isso foi frustrante.\""] },
            { title: "Depois pergunte", bullets: ["\"O que é que ajudaria?\"", "\"O que aconteceu depois?\""] },
            { title: "Evite", bullets: ["Dar logo conselhos", "\"Isso não é nada, uma vez eu...\"", "\"Tenha calma\""] }
          ],
          tryIt: "Na sua próxima conversa real, pratique uma vez repetir por palavras suas (\"Parece que você se sentiu ...\") e faça uma pergunta aberta. Depois, escreva o que a outra pessoa disse e como reagiu.",
          youCanNow: "escutar para compreender, repetir por palavras suas o que alguém disse e sentiu e fazer uma pergunta aberta.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer repetir por palavras suas?", options: ["Dar logo um conselho", "Mudar de assunto para a sua própria história", "Dizer com as suas palavras o que a outra pessoa sente e porquê", "Repetir a última palavra que ela disse"], answer: 2, why: "Repetir por palavras suas mostra à pessoa que você a compreendeu." },
            { objective: "O4", q: "Um colega de trabalho diz: \"Estou tão cansado de ser sempre eu a arrumar tudo.\" O que diria primeiro?", options: ["\"Tenha calma, não é nada de especial.\"", "\"Eu faço mais do que você.\"", "\"Devia dizer ao chefe.\"", "\"Parece que sente que o trabalho não é dividido de forma justa. O que tem acontecido?\""], answer: 3, why: "Repetir o sentimento e fazer uma pergunta aberta mostra empatia." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Resolver conflitos com frases na primeira pessoa",
          minutes: 5,
          goal: "Dizer o que o incomoda com uma frase calma na primeira pessoa (\"eu\") e um pedido claro.",
          text: [
            "O conflito é normal em qualquer equipa, em qualquer família e em qualquer negócio. Bem resolvido, resolve problemas. Mal resolvido, quebra a confiança.",
            "As frases com \"você\" soam a acusação: \"Você deixa-me sempre a fechar sozinho.\" As pessoas defendem-se e deixam de escutar. As frases com \"eu\" descrevem o seu lado: \"Eu sinto-me stressado quando fecho sozinho três noites seguidas, porque perco o autocarro. Podemos fazer turnos?\"",
            "O modelo: Eu sinto [emoção] quando [ação concreta] porque [porque é importante]. Podemos [pedido]? Fique num só assunto, descreva ações e não a maneira de ser (\"chegou atrasado duas vezes\" e não \"você é preguiçoso\") e escute o lado da outra pessoa com as capacidades da lição anterior. Procure uma solução que sirva aos dois."
          ],
          steps: ["Escolha um só assunto.", "Escreva: Eu sinto ... quando ... porque ... Podemos ...?", "Escolha um momento calmo e um lugar reservado.", "Diga-o, depois escute e repita o lado da outra pessoa.", "Combinem um próximo passo."],
          words: [["Frase na primeira pessoa (\"eu\")", "uma forma de dizer como algo o afeta sem acusar a outra pessoa."], ["Conflito", "um desacordo entre pessoas que precisam ou querem coisas diferentes."]],
          slides: [
            { title: "\"Você\" ou \"eu\"", bullets: ["\"Você deixa-me sempre a fechar.\" (acusação)", "\"Eu sinto-me stressado quando fecho sozinho...\" (o seu lado)"] },
            { title: "O modelo", bullets: ["Eu sinto [emoção]", "quando [ação concreta]", "porque [porque é importante]", "Podemos [pedido]?"] },
            { title: "Seja justo", bullets: ["Um assunto de cada vez", "Descreva ações, não a maneira de ser", "Escute e repita o lado da outra pessoa"] },
            { title: "Termine com um passo", bullets: ["Encontrem uma solução que sirva aos dois", "Combinem um próximo passo"] }
          ],
          tryIt: "Pense num problema real com um colega de equipa, um colega de trabalho ou um familiar. Escreva-o primeiro como uma frase com \"você\" e depois reescreva-o como \"Eu sinto ... quando ... porque ... Podemos ...?\" Leia as duas em voz alta e note a diferença.",
          youCanNow: "transformar uma queixa numa frase calma na primeira pessoa (\"eu\") com um pedido claro e procurar um próximo passo combinado.",
          quickCheck: [
            { objective: "O5", q: "Que parte de uma frase na primeira pessoa é o pedido claro?", options: ["Eu sinto", "Quando", "Porque", "Podemos"], answer: 3, why: "\"Podemos ...?\" pede uma mudança concreta." },
            { objective: "O5", q: "Um familiar está sempre a ver o seu telefone. O que diria?", options: ["\"Eu sinto-me pouco à vontade quando veem o meu telefone, porque quero confiança. Podemos falar sobre isso?\"", "\"Você está sempre a espiar-me.\"", "\"Pare com isso, senão...\"", "Não dizer nada e continuar chateado"], answer: 0, why: "Uma frase calma na primeira pessoa diz o seu sentimento e pede uma mudança sem acusar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dar e receber comentários",
          minutes: 6,
          goal: "Dar comentários concretos e gentis e receber comentários sem se pôr na defensiva.",
          text: [
            "Os comentários ajudam as pessoas a crescer. Um bom comentário é concreto, fala de ações e é útil. Em vez de \"Bom trabalho\" ou \"Isso correu mal\", diga o que aconteceu e o efeito que teve: \"O seu resumo no início da reunião manteve toda a gente no rumo certo.\" \"O relatório tinha três totais errados, por isso o cliente ligou duas vezes. Pode confirmar os totais antes de enviar?\"",
            "Receber comentários é mais difícil. A primeira vontade pode ser defender-se. Use o STOP, escute tudo até ao fim, repita por palavras suas e faça uma pergunta: \"Pode dar-me um exemplo?\" Agradeça, mesmo que ainda não concorde. Depois, decida o que vai usar. Os atletas que aceitam bem as correções do treinador são os que melhoram mais depressa.",
            "Quando erra, repare o erro. Um pedido de desculpa verdadeiro diz o que fez, o efeito que teve e o que vai fazer de forma diferente: \"Falei-lhe mal na reunião. Isso deixou-o envergonhado. Da próxima vez vou pedir para falarmos depois.\" Agora está pronto para a sua tarefa final."
          ],
          steps: ["Dar: diga a ação concreta e o efeito que teve.", "Junte um pedido claro ou um agradecimento.", "Receber: faça uma pausa, escute até ao fim, repita, peça um exemplo, agradeça.", "Reparar: diga o que fez, o efeito que teve e o que vai fazer de forma diferente."],
          words: [["Comentário", "informação sobre como alguém se saiu, dada para que possa melhorar ou continuar a fazer bem."], ["Na defensiva", "proteger-se logo da crítica em vez de escutar."], ["Reparar", "consertar uma relação depois de um erro, muitas vezes com um pedido de desculpa verdadeiro."]],
          slides: [
            { title: "Dar comentários", bullets: ["Ação concreta + o efeito que teve", "\"O seu resumo manteve-nos no rumo certo.\"", "Junte um pedido claro ou um agradecimento"] },
            { title: "Receber comentários", bullets: ["Faça uma pausa, escute até ao fim", "Repita e peça um exemplo", "Agradeça e depois decida o que usar"] },
            { title: "Repare com um pedido de desculpa verdadeiro", bullets: ["O que eu fiz", "O efeito que teve", "O que vou fazer de forma diferente"] }
          ],
          tryIt: "Tarefa final: prepare e tenha uma conversa que você tem adiado. Antes, escreva o que sente e o que o fez sentir assim. Durante a conversa, faça uma pausa, repita por palavras suas o que a pessoa diz e use uma frase \"Eu sinto ... quando ... porque ... Podemos ...?\". Depois, escreva o que correu bem e uma coisa a fazer de forma diferente.",
          youCanNow: "dar comentários concretos, receber comentários sem se pôr na defensiva, reparar um erro e enfrentar uma conversa difícil com inteligência emocional.",
          quickCheck: [
            { objective: "O6", q: "Que comentário fala de ações e não da pessoa?", options: ["\"Você é descuidado.\"", "\"Você nunca se esforça.\"", "\"Ontem, duas das encomendas saíram sem etiqueta.\"", "\"Você é o pior da equipa.\""], answer: 2, why: "Um bom comentário descreve ações concretas que podem mudar." },
            { objective: "O6", q: "O seu treinador diz que a sua defesa esteve fraca no último jogo. O que faria primeiro?", options: ["Discutir que o treinador está errado", "Escutar, repetir por palavras suas e pedir um exemplo", "Sair da equipa", "Culpar um colega de equipa"], answer: 1, why: "Escutar e pedir um exemplo ajuda-o a aprender em vez de se pôr na defensiva." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Compreender os outros e trabalhar com eles",
        questions: [
          { objective: "O4", q: "Empatia quer dizer:", options: ["Concordar com tudo", "Compreender o que alguém sente e porquê", "Ter pena de si próprio", "Dar conselhos depressa"], answer: 1, why: "Pode compreender alguém sem concordar com essa pessoa." },
          { objective: "O4", q: "Um colega de equipa diz-lhe que se sente posto de parte. Que resposta mostra escuta com empatia?", options: ["\"Isso não é nada, eu já passei por pior.\"", "\"Tenha calma.\"", "\"Olhe, o que deve fazer é...\"", "\"Parece que se sentiu posto de parte. O que aconteceu?\""], answer: 3, why: "Repete o sentimento da pessoa e faz uma pergunta aberta." },
          { objective: "O5", q: "Qual é uma frase na primeira pessoa (\"eu\")?", options: ["\"Eu sinto-me stressado quando fecho sozinho porque perco o autocarro. Podemos fazer turnos?\"", "\"Você nunca ajuda.\"", "\"Você é tão preguiçoso.\"", "\"Toda a gente acha que você está errado.\""], answer: 0, why: "Diz o seu sentimento, a ação, porque é importante e um pedido." },
          { objective: "O6", q: "Que comentário é mais útil?", options: ["\"Mau trabalho.\"", "\"Tanto faz.\"", "\"O relatório tinha três totais errados; por favor, confirme os totais antes de enviar.\"", "\"Você é péssimo nisto.\""], answer: 2, why: "Diz a ação concreta e um pedido claro." },
          { objective: "O6", q: "Qual é um pedido de desculpa verdadeiro?", options: ["\"Desculpe se ficou chateado.\"", "\"Falei-lhe mal; isso deixou-o envergonhado; da próxima vez vou pedir para falarmos depois.\"", "\"Desculpe, mas foi você que começou.\"", "Não dizer nada"], answer: 1, why: "Diz a ação, o efeito que teve e o que vai mudar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Inteligência Emocional",
    questions: [
      { objective: "O1", q: "Autoconsciência quer dizer:", options: ["Saber o que sente e porquê enquanto acontece", "Pensar só em si próprio", "Ignorar os sentimentos", "Olhar-se ao espelho"], answer: 0, why: "Autoconsciência é notar os seus sentimentos no momento." },
      { objective: "O1", q: "Qual é um sinal do corpo de uma emoção forte?", options: ["Uma camisa limpa", "O maxilar apertado ou o coração acelerado", "A bateria do telefone cheia", "Um dia de sol"], answer: 1, why: "Muitas vezes, o corpo dá sinal de uma emoção antes de você lhe dar nome." },
      { objective: "O1", q: "Porquê dar nome a um sentimento com uma palavra exata?", options: ["Para ganhar discussões", "Para parecer inteligente", "Ajuda a acalmá-lo e a decidir o que fazer", "Torna o sentimento mais forte"], answer: 2, why: "Dar o nome exato ao sentimento ajuda a geri-lo." },
      { objective: "O1", q: "\"Zangado\" pode ser, na verdade:", options: ["Com fome de pizza", "Só com sono", "Contente", "Envergonhado, desrespeitado ou preocupado"], answer: 3, why: "A raiva esconde muitas vezes um sentimento mais exato." },
      { objective: "O2", q: "Os gatilhos ligam-se muitas vezes a:", options: ["Coisas importantes para você, como o respeito ou a justiça", "Só ao tempo que faz", "Números ao acaso", "A marca do seu telefone"], answer: 0, why: "Os gatilhos tocam em valores como o respeito, a justiça ou a segurança, ou em experiências passadas." },
      { objective: "O2", q: "Porquê planear antes a sua resposta a um gatilho?", options: ["Para nunca sentir nada", "Para poder culpar os outros", "Para o gatilho ter menos força e você responder melhor", "Não ajuda"], answer: 2, why: "Um plano feito com calma guia-o quando o gatilho aparece." },
      { objective: "O3", q: "No STOP, o O quer dizer:", options: ["Ordenar", "Observar", "Ofender", "Olhar para o telefone"], answer: 1, why: "Suspender, Tomar fôlego, Observar, Prosseguir." },
      { objective: "O3", q: "Fazer uma pausa antes de responder é:", options: ["O mesmo que guardar tudo para sempre", "Um sinal de fraqueza", "Só para atletas", "Escolher uma resposta quando consegue pensar com clareza"], answer: 3, why: "Você continua a lidar com o sentimento, só que num momento melhor." },
      { objective: "O3", q: "Depois de pedir uma pausa de dez minutos numa discussão, o mais importante é:", options: ["Voltar e conversar", "Nunca mais voltar", "Queixar-se aos outros", "Mudar de assunto para sempre"], answer: 0, why: "Uma pausa só ajuda se você voltar à conversa." },
      { objective: "O4", q: "Escutar com empatia é escutar para:", options: ["Responder depressa", "Encontrar erros", "Compreender", "Esperar pela sua vez"], answer: 2, why: "Escutar para compreender ajuda a pessoa a sentir-se ouvida." },
      { objective: "O4", q: "Qual é uma pergunta aberta?", options: ["\"Está tudo bem?\"", "\"O que é que ajudaria?\"", "\"Já terminou?\"", "\"Hoje é terça-feira?\""], answer: 1, why: "A uma pergunta aberta não se pode responder só com sim ou não." },
      { objective: "O4", q: "Quando alguém partilha um problema, o que deve normalmente evitar no início?", options: ["Olhar para a pessoa", "Deixá-la terminar", "Repetir por palavras suas o que disse", "Dizer \"tenha calma\""], answer: 3, why: "\"Tenha calma\" pode fazer as pessoas sentirem que não as leva a sério." },
      { objective: "O5", q: "Porque é que as frases com \"você\" falham muitas vezes?", options: ["São curtas demais", "São educadas demais", "Soam a acusação, por isso as pessoas defendem-se", "Falam de sentimentos"], answer: 2, why: "A acusação põe as pessoas na defensiva e elas deixam de escutar." },
      { objective: "O5", q: "Complete o modelo: Eu sinto ... quando ... porque ...", options: ["Podemos ...?", "Você está sempre a ...", "Toda a gente sabe ...", "Deixa para lá."], answer: 0, why: "O modelo termina com um pedido claro." },
      { objective: "O5", q: "Uma boa conversa sobre um conflito descreve:", options: ["A maneira de ser de alguém (\"você é preguiçoso\")", "Tudo o que alguma vez correu mal", "Boatos", "Ações concretas (\"chegou atrasado duas vezes\")"], answer: 3, why: "As ações podem mudar; atacar a maneira de ser só magoa." },
      { objective: "O5", q: "Qual é um bom lugar para uma conversa difícil?", options: ["Um grupo de mensagens", "Um lugar calmo e reservado", "À frente de toda a equipa", "Uma gritaria depois de uma derrota"], answer: 1, why: "Um lugar calmo e reservado ajuda as duas pessoas a escutar." },
      { objective: "O6", q: "Um bom comentário é:", options: ["Concreto, fala de ações e é útil", "Vago e geral", "Sobre a personalidade de alguém", "Dado só quando está zangado"], answer: 0, why: "Um comentário concreto diz exatamente o que manter ou mudar." },
      { objective: "O6", q: "Você recebe um comentário duro do treinador ou do chefe. Uma boa primeira resposta é:", options: ["Discutir logo", "Ir-se embora", "Escutar, repetir por palavras suas e pedir um exemplo", "Ignorar"], answer: 2, why: "Escutar e fazer perguntas ajuda-o a aprender com ele." },
      { objective: "O6", q: "Um pedido de desculpa verdadeiro inclui:", options: ["Uma desculpa esfarrapada", "Culpar a outra pessoa", "\"Lamento que se sinta assim\"", "O que fez, o efeito que teve e o que vai fazer de forma diferente"], answer: 3, why: "Essas três partes reconstroem a confiança." },
      { objective: "O6", q: "Reparar depois de um erro ajuda porque:", options: ["Prova que você tinha razão", "Reconstrói a confiança na relação", "Acaba com todos os conflitos futuros", "É obrigatório por lei"], answer: 1, why: "Reparar mostra respeito e reconstrói a confiança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 4, 7, 10, 13, 16, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Sentimento e gatilho com nome", objective: "O1", notYet: "Usou uma palavra vaga, como mal ou zangado, ou não escreveu nenhum gatilho.", meets: "Antes da conversa, escreveu uma palavra exata para o sentimento e o que o provocou.", exceeds: "Também disse o que o gatilho toca, como o respeito ou a justiça." },
      { name: "Fez uma pausa antes de responder", objective: "O3", notYet: "Reagiu depressa ou levantou a voz.", meets: "Fez pelo menos uma pausa antes de responder num momento difícil.", exceeds: "Pediu uma pequena pausa e voltou para terminar a conversa." },
      { name: "Repetiu por palavras suas", objective: "O4", notYet: "Não confirmou o que a outra pessoa queria dizer.", meets: "Repetiu por palavras suas o sentimento da outra pessoa pelo menos uma vez.", exceeds: "A outra pessoa disse que se sentiu compreendida." },
      { name: "Frase na primeira pessoa (\"eu\")", objective: "O5", notYet: "Usou frases com \"você\" que acusam.", meets: "Usou uma frase completa \"Eu sinto ... quando ... porque ... Podemos ...?\".", exceeds: "O pedido levou a um próximo passo claro com que os dois concordaram." },
      { name: "Revisão no fim", objective: "O6", notYet: "Não escreveu nenhuma revisão.", meets: "Escreveu o que correu bem e uma coisa a fazer de forma diferente.", exceeds: "Pediu um comentário à outra pessoa e anotou-o com calma." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que dizem ter tido, em 30 dias, uma conversa que andavam a adiar (inquérito de seguimento)",
      "Alunos que dizem ter feito uma pausa antes de reagir num momento difícil",
      "Treinadores, chefes ou equipas dos programas que dizem haver melhor trabalho de equipa ou menos explosões",
      "Alunos que começam outro curso da Koach Learn sobre relacionamento com os outros em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel ou uma aplicação de notas para as palavras dos sentimentos, os gatilhos e o plano",
      "Uma lista de palavras para sentimentos (opcional)",
      "Cerca de 60 minutos no total, mais o tempo da conversa real"
    ],
    facilitatorNotes: [
      "Pratiquem primeiro em pares com situações inventadas; ninguém tem de partilhar histórias privadas.",
      "Mostre você mesmo como se repete por palavras suas e como se faz uma frase na primeira pessoa antes de pedir aos alunos que experimentem.",
      "Lembre aos alunos que as conversas que envolvem perigo ou abusos precisam de ajuda de fora, não de uma conversa a dois.",
      "Se um aluno parecer em sofrimento contínuo, encaminhe-o para um conselheiro, para o curso sobre saúde mental e stress ou para uma linha local de apoio em crise.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
