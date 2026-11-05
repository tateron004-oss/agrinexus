"use strict";

// Koach Learn course (Portuguese translation of shared/customer-service-excellence.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The LAST method keeps its English letters (Listen, Apologize, Solve, Thank), explained in Portuguese.

module.exports = {
  id: "customer-service-excellence-pt",
  lang: "pt",
  translationOf: "customer-service-excellence",
  category: "Re-Entry",
  name: "Excelência no Atendimento ao Cliente",
  skills: "Cumprimentar os clientes, Ouvir para encontrar a necessidade real, Resolver problemas, Acalmar clientes irritados com LAST, Atender por telefone, chat e e-mail, Fazer o seguimento",
  outcome: "atender um cliente do início ao fim, pessoalmente, por telefone, chat ou e-mail: cumprimentá-lo com simpatia, descobrir o que precisa, resolver o problema ou passá-lo à pessoa certa, acalmar um cliente irritado com o método LAST e fazer o seguimento para que ele volte.",
  about: [
    "Quase todos os trabalhos têm clientes: compradores numa loja, pessoas a comer num restaurante, quem liga para um centro de atendimento, visitantes na receção de um escritório, clientes de um pequeno negócio. Um ótimo atendimento ao cliente é uma das habilidades mais procuradas, e ajuda você a ser contratado, a manter o trabalho e a subir.",
    "Este curso é para quem está no primeiro trabalho, para jovens, para pessoas que voltam ao trabalho depois da prisão e para donos de pequenos negócios que atendem os seus próprios clientes. Os exemplos vêm de lojas, restaurantes, centros de atendimento e escritórios.",
    "Você vai praticar cumprimentar, ouvir, resolver problemas, acalmar clientes irritados com o método LAST (do inglês Listen, Apologize, Solve, Thank: ouvir, pedir desculpa, resolver, agradecer), atender por telefone, chat e e-mail, e fazer o seguimento. Cada lição dura cerca de cinco minutos e termina com uma prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça uma simulação com um amigo que faz de cliente irritado (por exemplo um pedido de comida errado, uma entrega atrasada ou um erro na conta). Cumprimente-o, use LAST (ouvir, pedir desculpa, resolver, agradecer), combinem uma solução e depois escreva o e-mail ou a mensagem curta de seguimento que enviaria no dia seguinte.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas no primeiro trabalho, jovens, pessoas que voltam ao trabalho depois da prisão e donos de pequenos negócios que atendem os seus próprios clientes em lojas, restaurantes, centros de atendimento e escritórios.",
    startingPoint: "Falam com pessoas todos os dias e já foram clientes. Muitos nunca tiveram formação para cumprimentar, descobrir a necessidade real de um cliente, assumir um problema, acalmar um cliente irritado ou escrever um e-mail de atendimento.",
    gap: "Um ótimo atendimento ao cliente é uma das habilidades mais procuradas: ajuda as pessoas a serem contratadas, a manterem o trabalho e a subirem, e ajuda os pequenos negócios a manterem os clientes. Os alunos precisam de uma forma simples, que possam repetir, de atender clientes pessoalmente, por telefone, chat e e-mail, e de fazer o seguimento.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "A prática é feita por simulação com um amigo ou familiar",
      "Segurança: as ameaças são tratadas por um gerente ou pela segurança, nunca sozinho",
      "Privacidade: nenhum número de cartão nem dados verdadeiros de clientes na prática ou em ferramentas de IA",
      "Tempo: lições de cerca de cinco minutos com práticas curtas"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Quando um cliente chega ou liga", action: "cumprimentá-lo com simpatia em poucos segundos, pessoalmente ou ao telefone", standard: "dizendo o seu nome ou o nome do negócio e oferecendo ajuda" },
    { id: "O2", condition: "Com um pedido pouco claro de um cliente", action: "fazer perguntas abertas e fechadas e repetir a necessidade real do cliente", standard: "até o cliente confirmar que você percebeu bem" },
    { id: "O3", condition: "Com um problema de um cliente que não foi você que causou", action: "assumir o problema e oferecer uma solução clara, escolhas ou a pessoa certa para ajudar", standard: "com um próximo passo e uma hora que vai cumprir" },
    { id: "O4", condition: "Com um cliente irritado", action: "acalmar o cliente usando LAST: ouvir, pedir desculpa, resolver, agradecer", standard: "usando os quatro passos e pedindo ajuda se houver ameaças" },
    { id: "O5", condition: "Por telefone, chat ou e-mail", action: "escrever ou dar uma resposta clara e simpática, com a resposta primeiro e depois o próximo passo", standard: "com todos os dados verificados e sem partilhar dados privados" },
    { id: "O6", condition: "Depois de um problema resolvido", action: "escrever uma mensagem de seguimento que confirma a solução e convida o cliente a voltar", standard: "enviada quando prometeu" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O básico de um ótimo atendimento",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cumprimentar os clientes e a primeira impressão",
          minutes: 4,
          goal: "Cumprimentar um cliente com simpatia em poucos segundos, pessoalmente ou ao telefone.",
          text: [
            "Os clientes decidem o que sentem sobre um negócio nos primeiros segundos. Um cumprimento caloroso mostra-lhes que são importantes. Pessoalmente, cumprimente as pessoas depressa, mesmo quando está ocupado: olhe nos olhos, sorria e diga olá. Se estiver a atender outra pessoa, um aceno e \"Já o atendo\" evitam que a próxima pessoa se sinta ignorada.",
            "Use uma frase simples e simpática: \"Olá, seja bem-vindo! Em que posso ajudar hoje?\" Num restaurante: \"Boa noite, bem-vindo! Mesa para quantas pessoas?\" Na receção de um escritório: \"Bom dia, com quem vem falar?\" Ao telefone, diga o nome do negócio e o seu nome: \"Obrigada por ligar para a Main Street Pharmacy, fala a Dana. Em que posso ajudar?\"",
            "Mostre que está pronto: telefone guardado, de pé ou bem sentado, e um espaço limpo e arrumado. Use o nome do cliente se ele o disser. Pequenas coisas juntam-se e fazem uma ótima primeira impressão."
          ],
          steps: ["Repare depressa no cliente.", "Olhe nos olhos e sorria.", "Diga um cumprimento simpático e ofereça ajuda.", "Ocupado? Acene e diga \"Já o atendo.\"", "Ao telefone: nome do negócio, o seu nome, ofereça ajuda."],
          words: [["Primeira impressão", "o que alguém sente sobre você ou um negócio nos primeiros segundos."], ["Cumprimento", "as primeiras palavras simpáticas que diz a um cliente."]],
          slides: [
            { title: "Os primeiros segundos contam", bullets: ["Os clientes decidem depressa o que sentem", "Um cumprimento caloroso mostra que são importantes"] },
            { title: "Pessoalmente", bullets: ["Olhar nos olhos e um sorriso", "\"Olá, seja bem-vindo! Em que posso ajudar hoje?\"", "Ocupado? \"Já o atendo.\""] },
            { title: "Ao telefone", bullets: ["Nome do negócio e o seu nome", "\"Obrigada por ligar para a Main Street Pharmacy, fala a Dana.\"", "\"Em que posso ajudar?\""] },
            { title: "Mostre que está pronto", bullets: ["Telefone guardado", "Espaço arrumado", "Use o nome do cliente"] }
          ],
          tryIt: "Escreva três cumprimentos: um para uma loja ou restaurante, um para a receção de um escritório e um para atender o telefone num negócio. Diga cada um em voz alta, a sorrir, até soar natural.",
          youCanNow: "cumprimentar os clientes com simpatia, pessoalmente e ao telefone.",
          quickCheck: [
            { objective: "O1", q: "Porque é importante um cumprimento caloroso?", options: ["Os clientes julgam o negócio nos primeiros segundos", "Faz a fila andar mais devagar", "Só é preciso para os clientes habituais", "Substitui resolver o problema"], answer: 0, why: "A primeira impressão molda o que os clientes sentem sobre toda a visita." },
            { objective: "O1", q: "O telefone toca enquanto arruma uma prateleira. O que diria ao atender?", options: ["\"Sim?\"", "\"Espere aí.\"", "\"Obrigado por ligar, fala o Sam. Em que posso ajudar?\"", "Nada até a pessoa falar"], answer: 2, why: "Um bom cumprimento diz o nome do negócio ou o seu e oferece ajuda." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ouvir para encontrar a necessidade real",
          minutes: 5,
          goal: "Fazer perguntas e repetir o pedido para perceber o que o cliente precisa mesmo.",
          text: [
            "Os clientes nem sempre dizem exatamente o que precisam. Um comprador pede \"um carregador de telefone\" mas precisa de um que sirva num telefone mais antigo. Quem liga diz \"a minha conta está errada\" mas quer mesmo saber porque subiu. Ouvir com atenção poupa tempo e evita erros.",
            "Deixe o cliente terminar sem o interromper. Depois faça perguntas abertas: \"Para que vai usar?\" \"Quando reparou no problema pela primeira vez?\" Faça uma pergunta fechada para confirmar um detalhe: \"É a encomenda de terça-feira?\"",
            "Depois repita: \"Então precisa de um carregador para um iPhone 8, e quer levá-lo hoje. Está certo?\" Repetir mostra que ouviu e apanha os erros antes de acontecerem. Num restaurante, ler o pedido em voz alta evita que chegue a refeição errada à mesa."
          ],
          steps: ["Deixe o cliente terminar.", "Faça perguntas abertas para perceber a necessidade.", "Faça perguntas fechadas para confirmar detalhes.", "Repita o que ouviu.", "Pergunte: \"Está certo?\""],
          words: [["Pergunta aberta", "uma pergunta que precisa de mais do que um sim ou um não."], ["Pergunta fechada", "uma pergunta que se responde com sim, não ou um dado curto."], ["Repetir o pedido", "dizer de novo o pedido do cliente para confirmar que percebeu."]],
          slides: [
            { title: "Encontre a necessidade real", bullets: ["\"Um carregador\" pode ser um para um telefone mais antigo", "\"A minha conta está errada\" pode ser \"porque subiu?\""] },
            { title: "Faça boas perguntas", bullets: ["Aberta: \"Para que vai usar?\"", "Fechada: \"É a encomenda de terça-feira?\""] },
            { title: "Repita o pedido", bullets: ["\"Então precisa de... Está certo?\"", "Restaurantes: leia o pedido em voz alta", "Apanha os erros cedo"] }
          ],
          tryIt: "Peça a um amigo ou familiar para fingir ser um cliente com um pedido pouco claro (\"Preciso de uma coisa para a minha cozinha\"). Faça duas perguntas abertas e uma fechada, e depois repita a necessidade real dele.",
          youCanNow: "usar perguntas e repetir o pedido para descobrir o que um cliente precisa mesmo.",
          quickCheck: [
            { objective: "O2", q: "O que é uma pergunta fechada?", options: ["Uma pergunta que convida a uma história longa", "Uma pergunta com resposta curta, como sim, não ou uma data", "Uma pergunta feita depois da hora de fechar", "Uma pergunta que o cliente não sabe responder"], answer: 1, why: "As perguntas fechadas confirmam detalhes depressa." },
            { objective: "O2", q: "Um cliente diz: \"Preciso de um presente para o meu pai.\" O que perguntaria primeiro?", options: ["\"Quanto dinheiro tem?\"", "\"Quer o mais caro?\"", "\"Pode voltar mais tarde?\"", "\"O que é que o seu pai gosta de fazer?\""], answer: 3, why: "Uma pergunta aberta ajuda a encontrar a necessidade real." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Resolver o problema",
          minutes: 5,
          goal: "Assumir o problema de um cliente e oferecer uma solução clara ou um próximo passo.",
          text: [
            "Os clientes lembram-se mais da forma como você tratou o problema do que do próprio problema. Assuma-o: diga \"Deixe-me ajudar com isso\", mesmo que tenha sido outra pessoa a causá-lo. Nunca diga \"Isso não é comigo\" e vá embora.",
            "Saiba o que pode fazer. Aprenda as regras do seu local de trabalho (as políticas) para devoluções, reembolsos, trocas e descontos, e a quem ligar quando alguma coisa está acima do seu nível. Ofereça escolhas quando puder: \"Posso trocá-lo hoje ou devolver o dinheiro para o seu cartão. O que prefere?\" Se precisar de passar o cliente a outra pessoa, explique porquê, apresente-a e conte-lhe os detalhes, para o cliente não ter de repetir tudo.",
            "Nunca prometa o que não pode cumprir. \"Vou saber e ligo-lhe até às 15h\" é melhor do que \"Vai correr tudo bem\" quando não tem a certeza. Depois cumpra a promessa."
          ],
          steps: ["Assuma: \"Deixe-me ajudar com isso.\"", "Veja o que a política permite.", "Ofereça uma ou duas opções claras.", "Se estiver acima do seu nível, passe-o com todos os detalhes.", "Prometa só o que pode cumprir, com uma hora."],
          words: [["Política", "as regras do negócio, por exemplo para devoluções ou reembolsos."], ["Escalar", "passar um problema a um gerente ou a alguém que pode fazer mais."], ["Assumir o problema", "tratar o problema do cliente como seu para resolver."]],
          slides: [
            { title: "Assuma o problema", bullets: ["\"Deixe-me ajudar com isso.\"", "Nunca \"Isso não é comigo\""] },
            { title: "Conheça as suas opções", bullets: ["Aprenda as regras de devoluções, reembolsos, trocas", "Ofereça escolhas: \"Troco hoje ou devolvo o dinheiro?\""] },
            { title: "Passar a outra pessoa", bullets: ["Explique porquê e apresente a próxima pessoa", "Conte-lhe os detalhes", "O cliente não deve repetir tudo"] },
            { title: "Promessas", bullets: ["Prometa só o que pode cumprir", "\"Ligo-lhe até às 15h\" e cumpra"] }
          ],
          tryIt: "Escolha um problema comum num trabalho que tem ou que quer (um tamanho errado, uma refeição fria, uma consulta falhada, uma dúvida sobre uma conta). Escreva o que diria para assumir o problema, duas opções que poderia oferecer e a quem o passaria se fosse preciso.",
          youCanNow: "assumir o problema de um cliente e oferecer opções claras ou um próximo passo.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer assumir um problema?", options: ["Culpar outro departamento", "Dizer que não é o seu trabalho", "Tratar o problema como seu para ajudar a resolver", "Pagar o problema do seu bolso"], answer: 2, why: "Assumir quer dizer ajudar o cliente mesmo que não tenha sido você a causar o problema." },
            { objective: "O3", q: "Um cliente precisa de uma resposta que você não sabe. O que diria?", options: ["\"Vou saber e ligo-lhe até às 15h.\"", "\"Não sei.\"", "\"Procure na internet.\"", "\"Talvez alguém lhe ligue um dia.\""], answer: 0, why: "Uma promessa clara, com uma hora, cria confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O básico de um ótimo atendimento",
        questions: [
          { objective: "O1", q: "Está a atender um cliente e chega outro. O que faz?", options: ["Ignora-o até acabar", "Acena e diz \"Já o atendo\"", "Diz-lhe para voltar mais tarde", "Deixa o primeiro cliente"], answer: 1, why: "Um aceno rápido e uma palavra evitam que o próximo cliente se sinta ignorado." },
          { objective: "O1", q: "Qual é um bom cumprimento ao telefone?", options: ["\"Sim?\"", "\"O que quer?\"", "\"Estou?\" e esperar", "\"Obrigada por ligar para a Main Street Pharmacy, fala a Dana. Em que posso ajudar?\""], answer: 3, why: "Diz o nome do negócio, o seu nome e oferece ajuda." },
          { objective: "O2", q: "Porque repetir o pedido num restaurante?", options: ["Para apanhar os erros antes de a comida ser feita", "Para atrasar o cliente", "Porque é divertido", "Para mostrar a sua memória"], answer: 0, why: "Repetir apanha os erros cedo." },
          { objective: "O2", q: "Qual é uma pergunta aberta?", options: ["\"É o azul?\"", "\"Comprou-o aqui?\"", "\"Para que vai usar?\"", "\"É só isso?\""], answer: 2, why: "Precisa de mais do que um sim ou um não." },
          { objective: "O3", q: "O problema de um cliente não foi causado por você. O que deve dizer?", options: ["\"Isso não é comigo.\"", "\"Deixe-me ajudar com isso.\"", "\"A culpa não é minha.\"", "Nada"], answer: 1, why: "Assumir o problema cria confiança." }
        ]
      }
    },
    {
      name: "Capítulo 2: Momentos difíceis e todos os canais",
      lessons: [
        {
          objectives: ["O4"],
          title: "Clientes irritados e o método LAST",
          minutes: 6,
          goal: "Acalmar um cliente irritado usando LAST: Listen (ouvir), Apologize (pedir desculpa), Solve (resolver), Thank (agradecer).",
          text: [
            "Os clientes irritados normalmente estão irritados com a situação, não com você. Manter a calma é o seu trabalho e a sua força. O método LAST dá-lhe quatro passos simples (as letras vêm do inglês).",
            "Ouvir (Listen): deixe-o falar sem interromper; acene e repita o que ouviu: \"A sua encomenda chegou 40 minutos atrasada e a comida estava fria.\" Pedir desculpa (Apologize): peça desculpa, com sinceridade, pelo que isso lhe causou: \"Peço mesmo desculpa, não é isso que devia ter acontecido.\" Pode pedir desculpa sem culpar ninguém. Resolver (Solve): ofereça uma solução dentro da política, ou chame um gerente: \"Posso fazer outro agora ou tirá-lo da sua conta.\" Agradecer (Thank): agradeça por lhe ter dito: \"Obrigado por nos avisar. Isso ajuda-nos a corrigir.\"",
            "Fale baixo e devagar, não discuta nem leve para o lado pessoal, e use o nome do cliente. Se um cliente fizer ameaças ou insultos, você não tem de aguentar: chame um gerente ou a segurança e siga as regras de segurança do seu local de trabalho."
          ],
          steps: ["Ouvir: deixe-o terminar e depois repita o que ouviu.", "Peça desculpa com sinceridade pelo que isso lhe causou.", "Resolver: ofereça uma solução ou chame um gerente.", "Agradeça por lhe ter dito.", "Ameaças ou insultos: chame um gerente ou a segurança."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (ouvir, pedir desculpa, resolver, agradecer): quatro passos para um cliente irritado."], ["Sincero", "honesto e dito de coração."]],
          slides: [
            { title: "É a situação, não é você", bullets: ["Mantenha a calma: é o seu trabalho e a sua força", "Use LAST"] },
            { title: "L e A", bullets: ["Listen (ouvir): deixe-o terminar, repita", "Apologize (pedir desculpa): \"Peço mesmo desculpa, não está bem.\""] },
            { title: "S e T", bullets: ["Solve (resolver): \"Posso fazer outro ou tirá-lo da conta.\"", "Thank (agradecer): \"Obrigado por nos avisar.\""] },
            { title: "Esteja em segurança", bullets: ["Voz baixa e lenta; não discuta", "Ameaças ou insultos: chame um gerente ou a segurança"] }
          ],
          tryIt: "Escreva um guião LAST para um destes casos: uma refeição fria, uma encomenda que nunca chegou ou uma cobrança a mais. Escreva uma frase para cada letra e depois diga o guião todo em voz alta.",
          youCanNow: "acalmar um cliente irritado com ouvir, pedir desculpa, resolver e agradecer.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer o S de LAST?", options: ["Smile (sorrir)", "Solve (resolver)", "Stop (parar)", "Say sorry again (pedir desculpa outra vez)"], answer: 1, why: "LAST é Listen, Apologize, Solve e Thank: ouvir, pedir desculpa, resolver e agradecer." },
            { objective: "O4", q: "Um cliente está irritado porque a encomenda nunca chegou. O que faria primeiro?", options: ["Oferecer um reembolso antes de ele acabar de falar", "Dizer-lhe que a culpa é da empresa de entregas", "Transferi-lo logo", "Ouvir tudo e repetir o que aconteceu"], answer: 3, why: "LAST começa por ouvir, para o cliente se sentir ouvido." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Atendimento por telefone, chat e e-mail",
          minutes: 5,
          goal: "Dar um atendimento claro e simpático por telefone, chat e e-mail.",
          text: [
            "Telefone: os clientes não veem a sua cara, por isso é a sua voz que faz o trabalho. Sorria enquanto fala; isso muda mesmo o seu tom. Fale com clareza e, antes de pôr alguém em espera, pergunte: \"Posso pô-lo em espera um momento enquanto verifico?\" e agradeça quando voltar. Se tiver de transferir a chamada, diga para quem vai e porquê.",
            "Chat: responda depressa, faça mensagens curtas e use palavras simpáticas. Antes de terminar, pergunte: \"Posso ajudar em mais alguma coisa?\" E-mail: use um assunto claro, cumprimente a pessoa pelo nome, responda à pergunta nas primeiras linhas, dê o próximo passo e assine com o seu nome. Leia-o uma vez antes de enviar. Um assistente de IA pode ajudar a escrever ou melhorar uma resposta, mas verifique todos os dados e nunca cole os dados privados do cliente.",
            "Em todos os canais, proteja a privacidade. Siga os passos da sua empresa para confirmar com quem está a falar, e nunca peça o número completo de um cartão nem uma palavra-passe por chat ou e-mail."
          ],
          steps: ["Telefone: sorria, fale com clareza, pergunte antes da espera, agradeça depois.", "Transferências: diga para quem e porquê.", "Chat: rápido, curto, simpático; pergunte \"Mais alguma coisa?\"", "E-mail: assunto claro, nome, resposta primeiro, próximo passo, o seu nome.", "Proteja a privacidade: confirme a identidade, sem cartões nem palavras-passe por chat ou e-mail."],
          words: [["Espera", "pausar uma chamada enquanto verifica alguma coisa."], ["Transferir", "passar uma chamada a outra pessoa ou equipa."], ["Canal", "uma forma de os clientes falarem consigo: pessoalmente, telefone, chat, e-mail ou redes sociais."]],
          slides: [
            { title: "Telefone", bullets: ["Sorria: isso muda a sua voz", "\"Posso pô-lo em espera um momento?\"", "Transferências: diga para quem e porquê"] },
            { title: "Chat", bullets: ["Responda depressa, seja breve", "Palavras simpáticas", "\"Posso ajudar em mais alguma coisa?\""] },
            { title: "E-mail", bullets: ["Assunto claro e o nome da pessoa", "Primeiro a resposta, depois o próximo passo", "Assine com o seu nome; leia antes de enviar"] },
            { title: "Todos os canais", bullets: ["A IA ajuda a escrever; você verifica os dados", "Siga os passos para confirmar a identidade", "Nada de cartões ou palavras-passe por chat ou e-mail"] }
          ],
          tryIt: "Um cliente escreve: \"Encomendei um casaco azul e recebi um vermelho. E agora?\" Escreva uma resposta curta com assunto, cumprimento, pedido de desculpa, solução, próximo passo e o seu nome.",
          youCanNow: "atender bem os clientes por telefone, chat e e-mail, protegendo a privacidade deles.",
          quickCheck: [
            { objective: "O5", q: "O que deve vir primeiro no texto de um e-mail de atendimento?", options: ["A resposta à pergunta do cliente", "Uma longa história sobre a sua empresa", "O seu cargo", "Uma lista de regras"], answer: 0, why: "Os clientes querem a resposta primeiro e depois o próximo passo." },
            { objective: "O5", q: "Usa um assistente de IA para escrever uma resposta no chat. O que faria antes de enviar?", options: ["Enviar logo", "Juntar o número do cartão do cliente", "Verificar todos os dados e tirar os dados privados", "Copiá-la para todos os clientes"], answer: 2, why: "Os textos da IA têm de ser verificados e não podem ter dados privados." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer o seguimento e criar clientes fiéis",
          minutes: 5,
          goal: "Fazer o seguimento depois de um problema e transformar um cliente num cliente que volta.",
          text: [
            "Um problema bem resolvido pode deixar um cliente mais fiel do que se nada tivesse corrido mal. Fazer o seguimento é a forma de terminar o trabalho.",
            "Se prometeu uma chamada ou uma notícia, cumpra a horas, mesmo que a notícia seja \"ainda estamos a tratar\". Depois de resolver, volte a contactar quando fizer sentido: \"Queria confirmar se a peça nova chegou e funciona.\" Tome notas simples no sistema ou num caderno: nome, problema, o que fez e o que vem a seguir, para qualquer pessoa da equipa poder ajudar.",
            "Pequenos extras criam clientes fiéis: lembrar-se do pedido habitual de um cliente de sempre, agradecer a um cliente antigo, ou avisar um cliente quando o artigo que queria voltou ao stock. Se tem o seu próprio negócio, peça aos clientes satisfeitos uma avaliação, e veja as reclamações como conselhos grátis sobre o que corrigir."
          ],
          steps: ["Cumpra a horas cada promessa de chamada ou notícia.", "Volte a contactar depois de resolver.", "Tome notas simples: nome, problema, ação, próximo passo.", "Lembre-se dos clientes habituais e agradeça-lhes.", "Use as reclamações para melhorar."],
          words: [["Seguimento", "voltar a contactar um cliente para confirmar ou dar notícias."], ["Fidelidade", "quando os clientes continuam a voltar e recomendam você."]],
          slides: [
            { title: "O seguimento termina o trabalho", bullets: ["Um problema bem resolvido cria clientes fiéis"] },
            { title: "Cumpra as promessas", bullets: ["Ligue ou dê notícias a horas", "Mesmo que seja \"ainda estamos a tratar\"", "Volte a contactar depois de resolver"] },
            { title: "Tome notas", bullets: ["Nome, problema, ação, próximo passo", "Qualquer pessoa da equipa pode ajudar"] },
            { title: "Crie clientes fiéis", bullets: ["Lembre-se dos clientes habituais", "Agradeça aos clientes antigos", "As reclamações são conselhos grátis"] }
          ],
          tryIt: "Tarefa final: faça uma simulação com um amigo que faz de cliente irritado, usando o cumprimento e LAST, combinem uma solução e depois escreva a mensagem de seguimento que enviaria no dia seguinte.",
          youCanNow: "fazer o seguimento depois de um problema e criar clientes fiéis.",
          quickCheck: [
            { objective: "O6", q: "Porque é que um problema bem resolvido pode deixar um cliente mais fiel?", options: ["Recebe coisas grátis para sempre", "Vê que o negócio se importa e cumpre as promessas", "Esquece-se do problema", "Não tem outra escolha"], answer: 1, why: "Tratar bem um problema mostra que se pode confiar no negócio." },
            { objective: "O6", q: "Ontem trocou o pedido errado de um cliente. O que faria hoje?", options: ["Nada; está feito", "Enviar um cupão sem mensagem", "Pedir-lhe logo uma avaliação", "Enviar uma mensagem curta a confirmar que agora está tudo bem"], answer: 3, why: "O seguimento confirma a solução e mostra que se importa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Momentos difíceis e todos os canais",
        questions: [
          { objective: "O4", q: "O que quer dizer LAST?", options: ["Look, Ask, Sell, Talk (olhar, perguntar, vender, falar)", "Leave, Argue, Stop, Try (sair, discutir, parar, tentar)", "Listen, Apologize, Solve, Thank (ouvir, pedir desculpa, resolver, agradecer)", "Learn, Answer, Smile, Tell (aprender, responder, sorrir, contar)"], answer: 2, why: "LAST é Listen, Apologize, Solve, Thank: ouvir, pedir desculpa, resolver, agradecer." },
          { objective: "O4", q: "Um cliente irritado num restaurante diz que a comida está fria. Qual é o primeiro passo?", options: ["Explicar que a cozinha estava cheia de trabalho", "Ouvir e repetir o que ele disse", "Oferecer um cupão antes de ele acabar", "Ir embora"], answer: 1, why: "No LAST, ouvir vem primeiro." },
          { objective: "O5", q: "Antes de pôr alguém em espera ao telefone, deve:", options: ["Só carregar em espera", "Desligar e ligar de volta", "Transferir para qualquer lado", "Perguntar \"Posso pô-lo em espera um momento enquanto verifico?\""], answer: 3, why: "Perguntar primeiro é educado e mantém a confiança." },
          { objective: "O5", q: "Um cliente no chat quer dar-lhe o número completo do cartão. O que faz?", options: ["Diz-lhe para não o partilhar por chat e segue os passos seguros da sua empresa", "Copia-o para as suas notas", "Cola-o numa ferramenta de IA", "Lê-o de volta para ele"], answer: 0, why: "Os números de cartão nunca devem ser partilhados por chat ou e-mail." },
          { objective: "O6", q: "Prometeu a um cliente uma notícia até sexta-feira mas ainda não tem novidades. O que faz?", options: ["Espera até ter novidades", "Contacta-o na sexta-feira a dizer \"ainda estamos a tratar\"", "Ignora", "Pede a um colega para fingir que está resolvido"], answer: 1, why: "Cumprir a promessa a horas cria confiança, mesmo sem novidades." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Excelência no Atendimento ao Cliente",
    questions: [
      { objective: "O1", q: "Porque é que o cumprimento é tão importante?", options: ["Os clientes julgam o negócio nos primeiros segundos", "É a lei", "É o que demora mais", "Substitui resolver problemas"], answer: 0, why: "A primeira impressão molda o que os clientes sentem." },
      { objective: "O1", q: "Qual é um bom cumprimento na receção de um escritório?", options: ["Continuar a escrever e não dizer nada", "\"Bom dia, com quem vem falar?\"", "\"O quê?\"", "\"Estamos ocupados.\""], answer: 1, why: "É simpático e passa para a necessidade da pessoa." },
      { objective: "O1", q: "O que mostra que está pronto para atender?", options: ["Estar a ver o telefone", "Comer ao balcão", "Telefone guardado e espaço arrumado", "Encostar-se à parede"], answer: 2, why: "Mostrar que está pronto dá uma boa primeira impressão." },
      { objective: "O2", q: "Um comprador pede \"um carregador\". Qual é o melhor passo a seguir?", options: ["Dar-lhe um carregador qualquer", "Dizer que não tem", "Apontar para o corredor", "Perguntar para que telefone é"], answer: 3, why: "Uma pergunta encontra a necessidade real." },
      { objective: "O2", q: "\"Então precisa de duas pizas grandes entregues até às 6. Está certo?\" é um exemplo de:", options: ["Repetir o pedido", "Vender mais", "Escalar", "Um cumprimento fechado"], answer: 0, why: "Confirma o pedido antes de agir." },
      { objective: "O2", q: "Uma pergunta fechada é útil para:", options: ["Começar uma história longa", "Confirmar um detalhe, como uma data", "Acalmar um cliente zangado", "Cumprimentar alguém"], answer: 1, why: "As perguntas fechadas confirmam dados depressa." },
      { objective: "O3", q: "Que frase mostra que assume o problema?", options: ["\"Isso não é o meu trabalho.\"", "\"Ligue para outra pessoa.\"", "\"Deixe-me ajudar com isso.\"", "\"Veja no site.\""], answer: 2, why: "Assumir o problema tranquiliza o cliente." },
      { objective: "O3", q: "Porque oferecer escolhas como \"trocar ou devolver o dinheiro\"?", options: ["Para o confundir", "Dá ao cliente algum controlo", "Para atrasar a solução", "É sempre obrigatório"], answer: 1, why: "As escolhas ajudam os clientes a sentirem-se respeitados." },
      { objective: "O3", q: "Quando passa um cliente a um gerente, deve:", options: ["Fazê-lo explicar tudo outra vez", "Não dizer nada", "Sair sem explicar", "Explicar porquê, apresentá-los e contar os detalhes"], answer: 3, why: "Uma passagem bem feita evita que o cliente tenha de repetir." },
      { objective: "O3", q: "Que promessa é melhor quando não tem a certeza da resposta?", options: ["\"Vou saber e ligo-lhe até às 15h.\"", "\"Vai correr tudo bem, de certeza.\"", "\"É grátis, não se preocupe.\"", "\"Ninguém sabe.\""], answer: 0, why: "Prometa só o que pode cumprir, com uma hora." },
      { objective: "O4", q: "No LAST, o A quer dizer:", options: ["Argue (discutir)", "Apologize (pedir desculpa)", "Ask for ID (pedir a identificação)", "Agree (concordar com tudo)"], answer: 1, why: "Um pedido de desculpa sincero ajuda a acalmar o cliente." },
      { objective: "O4", q: "Pode pedir desculpa sem culpar ninguém?", options: ["Não, tem de dizer quem causou o problema", "Só os gerentes podem pedir desculpa", "Sim: \"Lamento que isso lhe tenha acontecido.\"", "Pedir desculpa nunca é permitido"], answer: 2, why: "Um pedido de desculpa sincero é sobre o que o cliente viveu." },
      { objective: "O4", q: "Um cliente irritado começa a fazer ameaças. O que deve fazer?", options: ["Responder no mesmo tom", "Ignorar e continuar a atender", "Ameaçá-lo também", "Chamar um gerente ou a segurança e seguir as regras de segurança"], answer: 3, why: "A sua segurança vem primeiro." },
      { objective: "O4", q: "No LAST, o T quer dizer:", options: ["Thank: agradecer por lhe ter dito", "Tell: dizer que ele está errado", "Transfer: transferir a chamada", "Take a break: fazer uma pausa"], answer: 0, why: "Agradecer termina a conversa de forma positiva." },
      { objective: "O5", q: "Porque sorrir ao telefone?", options: ["O cliente consegue vê-lo", "Muda o tom da sua voz", "É uma regra de todas as empresas", "Faz as chamadas mais curtas"], answer: 1, why: "Um sorriso faz a sua voz soar mais calorosa." },
      { objective: "O5", q: "O que deve ter um bom e-mail para um cliente?", options: ["Nenhum assunto", "Uma longa história antes da resposta", "Um assunto claro, o nome da pessoa, a resposta primeiro e o próximo passo", "Tudo em letras maiúsculas"], answer: 2, why: "Uma estrutura clara torna os e-mails fáceis de seguir." },
      { objective: "O5", q: "Ao usar um assistente de IA para escrever uma resposta, deve:", options: ["Colar o número do cartão do cliente", "Enviá-la sem ler", "Deixá-la prometer reembolsos", "Verificar todos os dados e deixar de fora os dados privados"], answer: 3, why: "Você continua responsável pelos dados e pela privacidade." },
      { objective: "O6", q: "Porque tomar notas sobre cada problema de um cliente?", options: ["Para qualquer pessoa da equipa poder ajudar da próxima vez", "Para fazer mexericos", "Para atrasar as coisas", "As notas não servem para nada"], answer: 0, why: "As notas mantêm o atendimento igual e de qualidade." },
      { objective: "O6", q: "Um problema bem resolvido pode deixar um cliente:", options: ["Sem nunca mais voltar", "Mais fiel do que antes", "Mais zangado", "Esquecido do seu negócio"], answer: 1, why: "Uma boa recuperação cria confiança e fidelidade." },
      { objective: "O6", q: "Para o dono de um pequeno negócio, as reclamações devem ser vistas como:", options: ["Ataques a ignorar", "Motivos para discutir", "Conselhos grátis sobre o que corrigir", "Coisas para apagar"], answer: 2, why: "As reclamações mostram o que melhorar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 5, 7, 10, 12, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Cumprimento", objective: "O1", notYet: "Sem cumprimento, ou um cumprimento frio ou apressado.", meets: "Um cumprimento caloroso em poucos segundos, com um nome e uma oferta de ajuda.", exceeds: "O cumprimento combina com o lugar e soa natural." },
      { name: "Ouvir e pedir desculpa", objective: "O4", notYet: "Interrompeu, discutiu ou culpou alguém.", meets: "Ouviu até ao fim, repetiu o problema e pediu desculpa sem culpar ninguém.", exceeds: "Disse o que o cliente estava a sentir e manteve a calma o tempo todo." },
      { name: "Resolver", objective: "O3", notYet: "Nenhuma solução clara nem próximo passo.", meets: "Assumiu o problema e combinou uma solução clara ou um próximo passo.", exceeds: "Ofereceu escolhas e deu uma hora para cada promessa." },
      { name: "Agradecer", objective: "O4", notYet: "Terminou sem agradecer ao cliente.", meets: "Agradeceu ao cliente por ter falado do problema.", exceeds: "Terminou a perguntar se era preciso mais alguma coisa." },
      { name: "Mensagem de seguimento", objective: "O6", notYet: "Sem seguimento, ou sem um objetivo claro.", meets: "Uma mensagem curta no dia seguinte que confirma a solução e convida o cliente a voltar.", exceeds: "Pessoal, concreta e sem erros." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que conseguem ou mantêm um trabalho de atendimento ao público em 90 dias (inquérito de seguimento)",
      "Donos de pequenos negócios que dizem ter menos reclamações ou mais clientes que voltam",
      "Alunos que dizem ter usado LAST com um cliente real em 30 dias",
      "Alunos que começam outro curso profissional da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um parceiro para a simulação (amigo, familiar ou colega de turma)",
      "Papel e caneta ou um telefone para os guiões e a mensagem de seguimento",
      "Cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Façam as simulações em pares e troquem de papel para que todos façam de cliente irritado uma vez.",
      "Use exemplos de trabalhos locais que os alunos querem: lojas, restaurantes, centros de atendimento e receções.",
      "Ensine que as ameaças são tratadas por um gerente ou pela segurança; os alunos nunca as tratam sozinhos.",
      "Use só encomendas e contas inventadas; nenhum número de cartão verdadeiro na prática.",
      "Avalie a simulação final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
