"use strict";

// Koach Learn course (Portuguese translation of shared/negotiation-skills.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "negotiation-skills-pt",
  lang: "pt",
  translationOf: "negotiation-skills",
  category: "Athletes",
  name: "Técnicas de Negociação",
  skills: "Preparar um plano de negociação, Pedir com confiança, Trocar em vez de ceder, Manter a calma sob pressão, Pôr o acordo por escrito, Negociar salário e preço",
  outcome: "preparar e conduzir uma negociação justa sobre salário ou preço: conhecer o seu objetivo, o seu limite e as necessidades do outro lado, pedir com uma razão, trocar em vez de ceder, manter a calma sob pressão e confirmar o acordo por escrito.",
  about: [
    "Você negoceia mais vezes do que pensa: uma oferta de emprego, um aumento, um preço com um fornecedor, um orçamento para um cliente, um arrendamento, um patrocínio ou um acordo NIL, até quem faz que tarefas em casa. Os bons negociadores não são insistentes. Preparam-se, pedem com clareza, ouvem e procuram um acordo que os dois lados consigam cumprir.",
    "Este curso é para atletas, donos de negócios, trabalhadores, pessoas à procura de emprego e líderes de equipas. Os exemplos vêm de ofertas de emprego, pequenas lojas, prestadores de serviços, patrocínios e do local de trabalho.",
    "Você vai fazer um plano de negociação de uma página, praticar o pedido, aprender a trocar em vez de ceder, lidar com a pressão, pôr o acordo por escrito e usar tudo isto no salário e no preço. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Para contratos grandes, como acordos NIL, arrendamentos ou empréstimos, peça a um advogado, a um agente de confiança ou ao gabinete de conformidade (compliance) da sua escola para verificar os papéis finais."
  ],
  finalTask: "Escreva um plano de uma página para uma negociação real de salário ou de preço (o seu objetivo, o seu limite, o seu plano B, as necessidades do outro lado, o seu pedido inicial com uma razão e duas coisas que poderia trocar). Faça um ensaio com um amigo que resiste e depois escreva o e-mail curto de seguimento que confirma o que foi acordado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas e outros adultos que precisam de acordar um salário ou um preço: pessoas à procura de emprego e trabalhadores, estudantes-atletas com ofertas NIL ou de patrocinadores, e donos de pequenos negócios que compram a fornecedores ou vendem a clientes.",
    startingPoint: "Já aceitaram ofertas de emprego, preços ou acordos tal como vieram, ou negociaram sem plano. Muitos ficam nervosos ao pedir mais e cedem quando são pressionados.",
    gap: "Quem nunca pede, ou baixa o seu número sob pressão, perde salário e lucro e assina acordos de que se arrepende. Um plano escrito, um pedido claro com uma razão, trocar em vez de ceder, respostas calmas à pressão e um acordo por escrito protegem o seu rendimento e a sua reputação.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou computador para pesquisar e enviar e-mails; o plano pode ser feito em papel",
      "Tempo: cerca de 5 minutos por lição, mais um ensaio com um amigo",
      "As leis sobre salários mudam de estado para estado e de país para país; os alunos verificam no seu próprio serviço de trabalho",
      "Contratos grandes como acordos NIL ou de patrocínio precisam de um advogado, agente ou gabinete de conformidade; nenhum número privado de identificação ou de banco em ferramentas de IA"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma negociação real de salário ou de preço", action: "escrever um plano de uma página com o seu objetivo, o seu limite, o seu plano B e as necessidades do outro lado", standard: "com todas as partes preenchidas antes de falar" },
    { id: "O2", condition: "Quando abre uma negociação", action: "fazer um pedido claro um pouco acima do seu objetivo, com uma razão, e depois parar de falar", standard: "em uma ou duas frases" },
    { id: "O3", condition: "Quando o outro lado resiste ao seu número", action: "propor uma troca \"Se você puder..., então eu posso...\" em vez de ceder", standard: "indicando pelo menos duas coisas além do dinheiro que poderia trocar" },
    { id: "O4", condition: "Quando alguém usa uma tática de pressão", action: "responder com calma pedindo tempo, ou dizer não com educação a uma oferta abaixo do seu limite", standard: "sem aceitar na hora" },
    { id: "O5", condition: "No fim de qualquer acordo", action: "confirmar por escrito todos os pontos acordados e lê-los antes de assinar", standard: "com o preço, as datas e as condições listados no mesmo dia" },
    { id: "O6", condition: "Antes de uma conversa sobre salário ou preço", action: "pesquisar um número justo usando dados de salários, anúncios de emprego ou três orçamentos, e os seus próprios custos", standard: "usando pelo menos uma fonte de confiança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar e pedir",
      lessons: [
        {
          objectives: ["O1"],
          title: "Preparar: o seu objetivo, o seu limite e as necessidades deles",
          minutes: 5,
          goal: "Escrever um plano de negociação de uma página antes de falar.",
          text: [
            "A maior parte de uma negociação ganha-se antes de ela começar. Preparar-se quer dizer responder a três perguntas no papel.",
            "O seu objetivo: qual seria um resultado ótimo mas realista? Seja concreto: \"$19 por hora e os sábados livres\" ou \"$4.50 por caixa, com entrega semanal\". O seu limite: o pior acordo que ainda aceitaria. Abaixo dele, você diz não. Conheça o seu plano B, a melhor coisa que pode fazer se não houver acordo, como outra oferta de emprego, outro fornecedor ou ficar no emprego atual. Um plano B forte dá-lhe confiança.",
            "As necessidades do outro lado: o que querem e o que os preocupa? Um empregador pode precisar de alguém de confiança que comece em breve. Um patrocinador pode querer que as suas publicações cheguem aos clientes dele. Um fornecedor pode querer uma encomenda mensal certa. Quando conhece as necessidades deles, pode oferecer coisas que lhe custam pouco mas que são importantes para eles."
          ],
          steps: ["Escreva o seu objetivo, com números.", "Escreva o seu limite.", "Escreva o seu plano B se não houver acordo.", "Faça a lista das necessidades e preocupações do outro lado.", "Faça a lista das coisas que poderia oferecer e que são importantes para eles."],
          words: [["Limite", "o pior acordo que ainda aceitaria; abaixo dele, você diz não."], ["Plano B", "o que vai fazer se não houver acordo. Os livros de negociação chamam-lhe BATNA."], ["Negociação", "conversar com alguém para chegar a um acordo que os dois aceitam."]],
          slides: [
            { title: "Prepare-se no papel", bullets: ["A maior parte de uma negociação ganha-se antes de começar", "Responda a três perguntas"] },
            { title: "1. O seu objetivo", bullets: ["Ótimo mas realista", "Concreto: \"$19 por hora e os sábados livres\""] },
            { title: "2. O seu limite e o plano B", bullets: ["O pior acordo que aceitaria", "Plano B: o que faz se não houver acordo", "Um plano B forte dá confiança"] },
            { title: "3. As necessidades deles", bullets: ["Empregador: alguém de confiança que comece em breve", "Patrocinador: chegar aos seus clientes", "Fornecedor: uma encomenda mensal certa"] }
          ],
          tryIt: "Escolha uma negociação real que vai ter em breve: uma conversa sobre salário, um preço com um fornecedor ou cliente, a renda ou um patrocínio. Escreva o seu objetivo, o seu limite, o seu plano B e as duas principais necessidades do outro lado.",
          youCanNow: "preparar uma negociação escrevendo o seu objetivo, o seu limite, o seu plano B e as necessidades do outro lado.",
          quickCheck: [
            { objective: "O1", q: "O que é o seu plano B?", options: ["O seu pedido inicial", "A melhor coisa que pode fazer se não houver acordo", "O limite do outro lado", "Uma segunda cópia do seu plano"], answer: 1, why: "O seu plano B é a sua melhor opção se não houver acordo, como outra oferta ou ficar no emprego atual." },
            { objective: "O1", q: "Está a preparar-se para pedir um preço melhor a um fornecedor. O que escreve sobre ele?", options: ["Nada; só o seu objetivo importa", "A morada da casa dele", "Uma lista dos erros dele", "O que ele quer e o que o preocupa, como uma encomenda mensal certa"], answer: 3, why: "Conhecer as necessidades do outro lado ajuda-o a oferecer coisas que lhe custam pouco mas são importantes para ele." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pedir com confiança",
          minutes: 5,
          goal: "Fazer um pedido inicial claro com uma razão e depois parar de falar.",
          text: [
            "Muitas pessoas nunca recebem mais porque nunca pedem. O primeiro número dito em voz alta muitas vezes marca toda a conversa, por isso ajuda ser você a fazer um pedido claro e razoável. Aponte um pouco acima do seu objetivo para ter margem, mas que seja algo que consiga explicar.",
            "Dê uma razão: \"Com base no salário deste trabalho na nossa zona e nos meus dois anos a gerir uma linha de cozinha, peço $21 por hora.\" Ou, num negócio: \"Para uma encomenda de 12 meses paga a tempo, pedimos $4.20 por caixa.\" Depois pare de falar. O silêncio pode parecer estranho, mas dá-lhes tempo para pensar. Não argumente contra si próprio.",
            "Faça também perguntas e ouça as respostas: \"O que é mais importante para si neste acordo?\" \"Que flexibilidade tem quanto à data de início?\" As respostas dizem-lhe o que pode trocar."
          ],
          steps: ["Escolha um pedido inicial um pouco acima do seu objetivo.", "Escreva uma razão que consiga explicar.", "Diga o pedido e a razão com calma.", "Pare de falar e espere.", "Faça perguntas abertas e ouça o que eles precisam."],
          words: [["Pedido inicial", "a primeira coisa que pede numa negociação."], ["Âncora", "o primeiro número dito; muitas vezes marca o resto da conversa."]],
          slides: [
            { title: "Quem não pede, não recebe", bullets: ["O primeiro número marca a conversa", "Aponte um pouco acima do seu objetivo", "Que seja algo que consiga explicar"] },
            { title: "Peça com uma razão", bullets: ["\"Com base no salário local e nos meus 2 anos numa linha de cozinha,", "peço $21 por hora.\""] },
            { title: "Depois pare de falar", bullets: ["O silêncio dá-lhes tempo para pensar", "Não argumente contra si próprio"] },
            { title: "Pergunte e ouça", bullets: ["\"O que é mais importante para si neste acordo?\"", "\"Que flexibilidade tem quanto à data de início?\""] }
          ],
          tryIt: "Escreva o seu pedido inicial e uma razão para a sua negociação real. Diga-o em voz alta três vezes, com voz calma, e pare cinco segundos inteiros depois de cada vez.",
          youCanNow: "fazer um pedido inicial claro com uma razão, ficar em silêncio e fazer perguntas que mostram as necessidades do outro lado.",
          quickCheck: [
            { objective: "O2", q: "Porque ajuda ser você a dizer o primeiro número razoável?", options: ["O primeiro número dito em voz alta muitas vezes marca toda a conversa", "Acaba a negociação mais depressa", "O outro lado tem de o aceitar", "Mostra que não se importa"], answer: 0, why: "A lição diz que o primeiro número muitas vezes marca a conversa, por isso um pedido claro com uma razão ajuda-o." },
            { objective: "O2", q: "Acabou de fazer o seu pedido com uma razão e a sala fica em silêncio. O que faz?", options: ["Baixa logo o seu número", "Explica outra vez porque talvez não mereça", "Fica calado e deixa-os pensar", "Sai da sala"], answer: 2, why: "O silêncio dá-lhes tempo para pensar; falar pode levá-lo a argumentar contra si próprio." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trocar em vez de ceder",
          minutes: 5,
          goal: "Usar trocas \"se... então...\" para nunca dar algo em troca de nada.",
          text: [
            "Quando o outro lado resiste, não baixe simplesmente o seu número. Troque. Sempre que der alguma coisa, peça algo em troca. A ferramenta simples é \"Se você puder..., então eu posso...\".",
            "Procure coisas que são baratas para um lado e valiosas para o outro. Um trabalhador: \"Se não puder mexer no valor por hora, podemos revê-lo depois de 90 dias, ou acrescentar um dia de folga pago?\" Um pequeno negócio: \"Se pagar adiantado, então posso tirar 5 por cento.\" Um atleta com um patrocinador: \"Se quer duas publicações a mais, então eu precisaria de um pagamento maior ou de produtos grátis para a equipa.\"",
            "O salário não é a única coisa em cima da mesa. Pense na data de início, no horário, na formação, no equipamento, na entrega, nas condições de pagamento, na duração do contrato e no cargo. Mais coisas para trocar quer dizer mais caminhos para um acordo de que os dois lados gostam."
          ],
          steps: ["Nunca dê algo em troca de nada.", "Use \"Se você puder..., então eu posso...\".", "Faça a lista do que é barato para si mas valioso para eles.", "Olhe além do dinheiro: horário, data de início, formação, entrega, condições.", "Compare cada troca com o seu limite."],
          words: [["Troca", "dar alguma coisa só quando recebe algo em troca."], ["Concessão", "algo de que abdica durante uma negociação."], ["Condições", "os pormenores de um acordo, como quando e como se faz o pagamento."]],
          slides: [
            { title: "Troque; não ceda", bullets: ["Sempre que der, peça algo em troca", "\"Se você puder..., então eu posso...\""] },
            { title: "Exemplos", bullets: ["\"Se o valor não pode mudar, podemos revê-lo depois de 90 dias?\"", "\"Se pagar adiantado, posso tirar 5 por cento.\"", "\"Duas publicações a mais quer dizer um pagamento maior.\""] },
            { title: "Mais do que dinheiro", bullets: ["Horário e data de início", "Formação e equipamento", "Entrega, condições de pagamento, duração do contrato"] },
            { title: "Proteja-se", bullets: ["Compare cada troca com o seu limite"] }
          ],
          tryIt: "Para a sua negociação real, faça a lista de três coisas que poderia oferecer e três coisas que poderia pedir além do dinheiro. Escreva duas frases \"Se você puder..., então eu posso...\".",
          youCanNow: "trocar concessões com \"se... então...\" em vez de dar coisas de graça.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer trocar numa negociação?", options: ["Ceder para acabar a conversa", "Pedir algo em troca sempre que dá alguma coisa", "Trocar de emprego com alguém", "Repetir o seu primeiro número"], answer: 1, why: "Trocar quer dizer que, sempre que dá alguma coisa, pede algo em troca." },
            { objective: "O3", q: "Um empregador não pode aumentar o valor por hora. Que boa troca pode pedir?", options: ["Nada; aceitar como está", "Pedir que prometam um aumento um dia", "Ameaçar despedir-se", "Uma revisão do salário depois de 90 dias ou um dia de folga pago a mais"], answer: 3, why: "Coisas além do dinheiro, como uma revisão aos 90 dias ou um dia de folga, podem fazer o acordo funcionar para os dois lados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar e pedir",
        questions: [
          { objective: "O1", q: "O seu limite é:", options: ["O melhor acordo que consegue imaginar", "O pior acordo que ainda aceitaria", "A primeira oferta do outro lado", "O seu número preferido"], answer: 1, why: "Abaixo do seu limite, você diz não." },
          { objective: "O1", q: "Porque ajuda um plano B forte?", options: ["Deixa-o insultar o outro lado", "Quer dizer que nunca precisa de se preparar", "Dá-lhe confiança para dizer não a um mau acordo", "Garante que ganha"], answer: 2, why: "Uma boa opção sem acordo torna menos provável que aceite um mau acordo." },
          { objective: "O2", q: "Que pedido inicial é o mais forte?", options: ["\"O que achar justo.\"", "\"Desculpe, será que podia dar um pouco mais?\"", "\"Aceito qualquer coisa.\"", "\"Com base no salário local e na minha experiência, peço $21 por hora.\""], answer: 3, why: "Um número claro com uma razão é fácil de levar a sério." },
          { objective: "O2", q: "Depois de fazer o seu pedido, deve:", options: ["Parar de falar e deixá-los pensar", "Baixá-lo logo", "Continuar a explicar porque talvez não mereça", "Sair da sala"], answer: 0, why: "O silêncio dá-lhes tempo para responder; não argumente contra si próprio." },
          { objective: "O3", q: "O fornecedor diz não ao seu preço. Que resposta é uma troca?", options: ["\"Está bem, pago o preço inteiro.\"", "\"Se eu encomendar por 12 meses, pode fazer $4.20 por caixa?\"", "\"Está a roubar-me.\"", "\"Pronto, esqueça.\""], answer: 1, why: "Oferece algo que eles valorizam em troca do que você quer." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fechar o acordo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Manter a calma sob pressão",
          minutes: 5,
          goal: "Reconhecer táticas de pressão e responder com calma.",
          text: [
            "Algumas pessoas usam a pressão para o apressar: \"Esta oferta acaba hoje\", \"É pegar ou largar\", uma primeira oferta muito baixa, silêncios longos, ou uma pessoa a fazer de dura enquanto outra faz de simpática. Estas táticas funcionam porque o fazem sentir que tem de decidir já.",
            "A sua melhor ferramenta é o tempo. Quase sempre pode dizer: \"Obrigado. Gostaria de ter até amanhã para pensar.\" Respire mais devagar, mantenha a voz calma e olhe para o seu plano escrito. Se a oferta estiver abaixo do seu limite, pode dizer não com educação: \"Agradeço, mas assim não consigo.\"",
            "Mantenha o respeito, mesmo que eles não o façam. Fale do problema, não da pessoa. Estar calmo e educado deixa a porta aberta para uma oferta melhor mais tarde. Se alguém o ameaçar ou lhe pedir para fazer algo desonesto ou perigoso, vá-se embora."
          ],
          steps: ["Repare na pressão: prazos, pegar ou largar, ofertas muito baixas.", "Respire e abrande.", "Olhe para o seu plano e o seu limite.", "Peça tempo: \"Gostaria de ter até amanhã para pensar.\"", "Diga não com educação se estiver abaixo do seu limite."],
          words: [["Tática de pressão", "um truque para o apressar a decidir antes de estar pronto."], ["Oferta muito baixa", "uma oferta muito abaixo do que é justo."]],
          slides: [
            { title: "Táticas de pressão comuns", bullets: ["\"Esta oferta acaba hoje\"", "\"É pegar ou largar\"", "Uma primeira oferta muito baixa"] },
            { title: "A sua melhor ferramenta é o tempo", bullets: ["\"Gostaria de ter até amanhã para pensar.\"", "Respire e veja o seu plano escrito"] },
            { title: "Diga não com educação", bullets: ["\"Agradeço, mas assim não consigo.\"", "Abaixo do seu limite quer dizer não"] },
            { title: "Mantenha o respeito", bullets: ["O problema, não a pessoa", "Ameaças ou desonestidade: vá-se embora"] }
          ],
          tryIt: "Escreva a sua resposta calma a três frases de pressão: \"Esta oferta acaba hoje\", \"É pegar ou largar\" e uma oferta muito baixa. Diga cada resposta em voz alta, com voz calma.",
          youCanNow: "reconhecer táticas de pressão e responder com calma pedindo tempo ou dizendo não com educação.",
          quickCheck: [
            { objective: "O4", q: "Qual destas é uma tática de pressão?", options: ["\"Esta oferta acaba hoje.\"", "\"O que é mais importante para si?\"", "\"Deixe-me enviar-lhe os pormenores por e-mail.\"", "\"Obrigado por se reunir comigo.\""], answer: 0, why: "Prazos como \"acaba hoje\" tentam apressá-lo a decidir já." },
            { objective: "O4", q: "O outro lado fica mal-educado durante a conversa. O que deve fazer?", options: ["Ser mal-educado também", "Aceitar qualquer coisa para acabar", "Manter o respeito e falar do problema, não da pessoa", "Publicar sobre eles na internet"], answer: 2, why: "Estar calmo e educado deixa a porta aberta para uma oferta melhor mais tarde." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Pôr por escrito",
          minutes: 5,
          goal: "Confirmar um acordo por escrito e lê-lo antes de assinar.",
          text: [
            "Um acordo só dito em voz alta é fácil de esquecer ou de lembrar de forma diferente. No fim de qualquer negociação, faça um resumo em voz alta: \"Então acordámos $20 por hora, a começar a 3 de novembro, com uma revisão do salário depois de 90 dias.\" Depois ponha-o por escrito.",
            "Para um emprego, peça uma carta de oferta por escrito. Para um negócio, envie no mesmo dia um e-mail curto com todos os pontos acordados: preço, quantidades, datas, condições de pagamento e quem faz o quê. Peça-lhes que respondam a confirmar.",
            "Leia todas as páginas antes de assinar e verifique se correspondem ao que foi acordado. Não assine nada em branco nem nada que não entenda. Para contratos grandes ou longos, como acordos NIL ou de patrocínio, arrendamentos, empréstimos ou sociedades, peça primeiro a um advogado, a um agente de confiança, a um serviço de apoio jurídico gratuito ou ao gabinete de conformidade da sua escola para o rever. Um assistente de IA pode explicar palavras difíceis de um contrato, mas não é um advogado, e não cole nele dados privados como números de identificação ou de banco."
          ],
          steps: ["Faça um resumo do acordo em voz alta.", "Peça uma oferta por escrito ou envie um e-mail de resumo no mesmo dia.", "Liste o preço, as quantidades, as datas, as condições e quem faz o quê.", "Peça-lhes que respondam a confirmar.", "Leia todas as páginas antes de assinar; mande rever os contratos grandes."],
          words: [["Carta de oferta", "uma oferta de emprego por escrito que diz o salário, a data de início e outras condições."], ["Contrato", "um acordo por escrito que a lei pode fazer cumprir."]],
          slides: [
            { title: "Repita o acordo", bullets: ["\"Então acordámos $20 por hora, a começar a 3 de novembro,", "com uma revisão do salário depois de 90 dias.\""] },
            { title: "Ponha por escrito", bullets: ["Emprego: peça uma carta de oferta", "Negócio: envie um e-mail de resumo no mesmo dia", "Peça-lhes que respondam a confirmar"] },
            { title: "Antes de assinar", bullets: ["Leia todas as páginas", "Verifique se corresponde ao que acordou", "Nunca assine papéis em branco ou pouco claros"] },
            { title: "Contratos grandes", bullets: ["NIL, patrocínios, arrendamentos, empréstimos, sociedades", "Peça a um advogado, agente ou gabinete de conformidade para rever"] }
          ],
          tryIt: "Escreva um e-mail curto de resumo para um acordo (real ou de prática) com o preço ou o salário, as datas, as condições e quem faz o quê, e que termine com: \"Por favor, responda a confirmar que isto corresponde ao que entendeu.\"",
          youCanNow: "resumir um acordo, confirmá-lo por escrito e saber quando mandar rever um contrato.",
          quickCheck: [
            { objective: "O5", q: "Qual é a melhor prova escrita de um novo acordo de emprego?", options: ["Uma SMS de um amigo", "Uma carta de oferta", "As suas notas de memória", "Um aperto de mão"], answer: 1, why: "Para um emprego, a lição diz para pedir uma carta de oferta por escrito." },
            { objective: "O5", q: "Dão-lhe um contrato com uma parte em branco para \"preencher depois\". O que faz?", options: ["Assina depressa para não perder o acordo", "Assina e espera que corra bem", "Pede a uma IA para assinar por si", "Não assina até estar completo e o entender"], answer: 3, why: "Nunca assine nada em branco nem nada que não entenda." }
          ]
        },
        {
          objectives: ["O6","O3"],
          title: "Negociar salário e preço",
          minutes: 6,
          goal: "Pesquisar um número justo e negociar uma oferta de emprego ou um preço.",
          text: [
            "Salário: pesquise antes de falar. O Occupational Outlook Handbook do US Bureau of Labor Statistics (o serviço de estatísticas do trabalho dos EUA, em bls.gov/ooh) mostra o salário típico de centenas de profissões. Os anúncios de emprego também mostram intervalos. Na Califórnia, os empregadores com 15 ou mais trabalhadores têm de pôr a escala salarial nos anúncios de emprego, e um candidato pode pedir a escala salarial do trabalho a que se candidatou. Os empregadores da Califórnia em geral também não podem perguntar quanto ganhava antes, mas podem perguntar quanto espera ganhar. As regras mudam de estado para estado, por isso verifique no serviço de trabalho do seu estado.",
            "Quando recebe uma oferta: agradeça, mostre entusiasmo e peça tempo se precisar. Depois faça uma contraproposta com uma razão: \"Estou entusiasmado com este cargo. Com base no intervalo publicado e no meu certificado de operador de empilhador, pode fazer $22?\" Se o salário não pode mudar, troque: data de início, horário, formação ou uma revisão depois de 90 dias.",
            "Preço: ao comprar, peça pelo menos três orçamentos para saber o preço corrente. Ao vender, conheça os seus custos para nunca aceitar abaixo do que mantém o seu negócio vivo. Ofereça opções em vez de descontos: um pacote mais pequeno por menos, ou um preço mais baixo para uma encomenda maior ou um pagamento mais rápido."
          ],
          steps: ["Pesquise o preço corrente: bls.gov/ooh, anúncios de emprego ou três orçamentos.", "Defina o seu objetivo e o seu limite a partir dessa pesquisa.", "Agradeça e mostre interesse.", "Faça uma contraproposta com um número e uma razão.", "Se o dinheiro não pode mudar, troque outras condições.", "Confirme o acordo final por escrito."],
          words: [["Escala salarial", "o intervalo de salário mensal ou por hora que um empregador espera pagar por um trabalho."], ["Contraproposta", "a sua resposta a uma oferta, a pedir condições diferentes."], ["Orçamento", "o preço que alguém oferece por um trabalho ou produto."]],
          sources: [
            { name: "California Labor Commissioner: perguntas frequentes sobre a Equal Pay Act (escalas salariais, salário anterior)", url: "https://www.dir.ca.gov/dlse/California_Equal_Pay_Act.htm" },
            { name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }
          ],
          slides: [
            { title: "Pesquise primeiro o salário", bullets: ["bls.gov/ooh mostra o salário típico de muitas profissões", "Os anúncios de emprego mostram intervalos", "As regras mudam de estado para estado: verifique o seu"] },
            { title: "Regras da Califórnia", bullets: ["15+ trabalhadores: escala salarial nos anúncios", "Os candidatos podem pedir a escala salarial do trabalho", "Em geral, sem perguntas sobre o seu salário anterior"] },
            { title: "Responder a uma oferta", bullets: ["Agradeça e mostre interesse", "\"Com base no intervalo e no meu certificado, pode fazer $22?\"", "Não pode mudar? Troque horário, formação ou uma revisão aos 90 dias"] },
            { title: "Preço", bullets: ["Comprar: peça três orçamentos", "Vender: conheça os seus custos", "Ofereça opções, não só descontos"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de uma página para uma negociação real de salário ou de preço, com pesquisa verdadeira. Faça um ensaio com um amigo que usa uma tática de pressão e depois escreva o e-mail de seguimento que confirma o acordo.",
          youCanNow: "pesquisar um número justo, responder a uma oferta de emprego ou a um preço com uma contraproposta e uma razão, e fechar o acordo por escrito.",
          quickCheck: [
            { objective: "O6", q: "Onde podem os trabalhadores dos EUA ver o salário típico de muitas profissões?", options: ["Numa sondagem nas redes sociais", "No Occupational Outlook Handbook do BLS, em bls.gov/ooh", "Em qualquer fórum na internet", "Nos concorrentes do empregador"], answer: 1, why: "O Occupational Outlook Handbook do BLS mostra o salário típico de centenas de profissões." },
            { objective: "O6", q: "Um cliente pede-lhe um desconto. Que boa opção pode oferecer?", options: ["Um preço mais baixo para uma encomenda maior ou um pagamento mais rápido", "Metade do preço sem nada em troca", "Um preço abaixo dos seus custos", "Recusar falar de preço"], answer: 0, why: "Oferecer opções em vez de simples descontos protege os seus custos e ajuda o cliente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fechar o acordo",
        questions: [
          { objective: "O4", q: "Alguém diz \"Esta oferta acaba hoje.\" Qual é uma resposta calma?", options: ["Assinar logo", "Gritar que é injusto", "\"Obrigado. Gostaria de ter até amanhã para pensar.\"", "Baixar o seu pedido para metade"], answer: 2, why: "Pedir tempo tira a pressão." },
          { objective: "O4", q: "A oferta está abaixo do seu limite. Deve:", options: ["Dizer não com educação", "Aceitá-la mesmo assim", "Insultá-los", "Ignorá-los"], answer: 0, why: "Abaixo do seu limite quer dizer não, dito com respeito." },
          { objective: "O5", q: "O que deve fazer logo depois de acordar um negócio com um fornecedor por telefone?", options: ["Nada; vai lembrar-se", "Publicá-lo nas redes sociais", "Esperar um mês", "Enviar no mesmo dia um e-mail com todos os pontos acordados"], answer: 3, why: "Um resumo escrito evita memórias diferentes mais tarde." },
          { objective: "O5", q: "Oferecem-lhe um acordo NIL com um contrato longo. O que é sensato?", options: ["Assinar hoje antes que desapareça", "Pedir primeiro a um advogado, agente de confiança ou gabinete de conformidade para o rever", "Deixar um assistente de IA assinar por si", "Assinar sem ler porque é longo"], answer: 1, why: "Os contratos grandes devem ser revistos antes de assinar." },
          { objective: "O6", q: "Na Califórnia, o que têm os empregadores com 15 ou mais trabalhadores de pôr nos anúncios de emprego?", options: ["A escala salarial", "O número de telefone do chefe", "O seu salário anterior", "Nada sobre o salário"], answer: 0, why: "A Califórnia exige a escala salarial nos anúncios dos empregadores com 15+ trabalhadores." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Técnicas de Negociação",
    questions: [
      { objective: "O1", q: "A maior parte de uma negociação ganha-se:", options: ["Falando mais alto", "Antes de começar, com preparação", "No último segundo", "Por sorte"], answer: 1, why: "A preparação define o seu objetivo, os seus limites e as suas opções." },
      { objective: "O1", q: "Que objetivo é o melhor para um plano de negociação?", options: ["\"Mais dinheiro\"", "\"Um bom acordo\"", "\"O que eles oferecerem\"", "\"$19 por hora e os sábados livres\""], answer: 3, why: "Objetivos concretos, com números, guiam a conversa." },
      { objective: "O1", q: "O seu plano B é:", options: ["O que vai fazer se não houver acordo", "A sua primeira oferta", "O limite do outro lado", "Um segundo contrato"], answer: 0, why: "O plano B é a sua melhor opção sem acordo." },
      { objective: "O1", q: "Porque pensar nas necessidades do outro lado?", options: ["Para os enganar", "Para poder ceder mais depressa", "Para encontrar coisas que pode oferecer e que são importantes para eles", "Não tem importância"], answer: 2, why: "Conhecer as necessidades deles mostra o que trocar." },
      { objective: "O1", q: "Um patrocinador provavelmente precisa:", options: ["Da palavra-passe do seu banco", "Que as suas publicações cheguem aos clientes dele", "Que você trabalhe de graça", "Da morada da sua casa"], answer: 1, why: "Os patrocinadores pagam para chegar a pessoas que podem comprar." },
      { objective: "O2", q: "Porque ser você a fazer o primeiro pedido razoável?", options: ["O primeiro número muitas vezes marca toda a conversa", "É falta de educação esperar", "Acaba a conversa mais depressa", "A lei obriga"], answer: 0, why: "O primeiro número dito funciona como uma âncora." },
      { objective: "O2", q: "O seu pedido inicial deve ser:", options: ["Muito abaixo do seu objetivo", "Um segredo", "Exatamente o seu limite", "Um pouco acima do seu objetivo, com uma razão"], answer: 3, why: "Deixa margem e é fácil de explicar." },
      { objective: "O3", q: "Que pergunta o ajuda a saber o que trocar?", options: ["\"Porque é tão forreta?\"", "\"Pode simplesmente dar-me?\"", "\"O que é mais importante para si neste acordo?\"", "\"É a sua resposta final?\""], answer: 2, why: "As perguntas abertas mostram as necessidades do outro lado." },
      { objective: "O3", q: "A ferramenta \"Se você puder..., então eu posso...\" ajuda-o a:", options: ["Dar coisas de graça", "Trocar em vez de ceder", "Acabar a conversa", "Evitar ouvir"], answer: 1, why: "Liga cada concessão a algo em troca." },
      { objective: "O3", q: "O que, além do dinheiro, poderia negociar num emprego?", options: ["O salário dos seus colegas", "A declaração de impostos da empresa", "A data de início ou uma revisão do salário aos 90 dias", "Não se pode negociar mais nada"], answer: 2, why: "O horário, a data de início, a formação e as revisões podem todos ser negociados." },
      { objective: "O3", q: "Um cliente quer um preço mais baixo. Uma boa resposta com opções é:", options: ["\"Se pagar adiantado, posso tirar 5 por cento.\"", "\"Claro, metade do preço.\"", "\"Nunca dou descontos, adeus.\"", "\"Vou perder dinheiro, mas está bem.\""], answer: 0, why: "Troca o desconto por algo que você valoriza." },
      { objective: "O4", q: "\"É pegar ou largar\" é um exemplo de:", options: ["Um plano B", "Uma tática de pressão", "Uma oferta por escrito", "Uma contraproposta"], answer: 1, why: "Tenta apressá-lo a decidir." },
      { objective: "O4", q: "A sua melhor ferramenta contra a pressão é:", options: ["Gritar", "Assinar depressa", "Mentir", "O tempo: pedir para pensar"], answer: 3, why: "O tempo deixa-o ver o seu plano e acalmar-se." },
      { objective: "O4", q: "Numa conversa tensa, o melhor é:", options: ["Atacar a pessoa", "Falar do problema, não da pessoa", "Sair sem dizer nada", "Levantar a voz"], answer: 1, why: "O respeito deixa a porta aberta para um acordo melhor." },
      { objective: "O5", q: "Alguém lhe pede para assinar um formulário em branco e \"preencher depois\". Deve:", options: ["Assiná-lo", "Assinar só a primeira página", "Recusar; nunca assine papéis em branco ou pouco claros", "Pedir a uma IA para assinar"], answer: 2, why: "Os papéis em branco podem ser preenchidos com qualquer coisa." },
      { objective: "O5", q: "Para um novo emprego, a melhor prova escrita do acordo é:", options: ["Uma carta de oferta", "Uma SMS de um amigo", "A sua memória", "Uma publicação nas redes sociais"], answer: 0, why: "Uma carta de oferta diz o salário, a data de início e as condições." },
      { objective: "O6", q: "Onde podem os trabalhadores dos EUA ver o salário típico de muitas profissões?", options: ["Num fórum qualquer", "Num anúncio que aparece no ecrã", "Só com o empregador", "No Occupational Outlook Handbook do BLS, em bls.gov/ooh"], answer: 3, why: "O manual do BLS mostra o salário típico de centenas de profissões." },
      { objective: "O6", q: "Na Califórnia, um empregador pode em geral perguntar quanto ganhava antes?", options: ["Sim, sempre", "Em geral não, mas pode perguntar quanto espera ganhar", "Só por e-mail", "Só se tiver menos de 25 anos"], answer: 1, why: "A Califórnia em geral proíbe pedir o salário anterior; pode perguntar-se o salário esperado." },
      { objective: "O6", q: "Antes de comprar materiais para o seu negócio, um passo inteligente é:", options: ["Aceitar o primeiro preço", "Pedir ao fornecedor para escolher por si", "Pedir pelo menos três orçamentos", "Nunca comparar"], answer: 2, why: "Vários orçamentos mostram o preço corrente." },
      { objective: "O6", q: "Ao vender, porque tem de conhecer os seus custos?", options: ["Para nunca aceitar um preço que dá prejuízo", "Para mostrar as suas contas aos clientes", "Não é importante", "Para subir os preços aos amigos"], answer: 0, why: "Conhecer os custos define o seu preço limite." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 5, 8, 11, 14, 16, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano no papel", objective: "O1", notYet: "Falta no plano o objetivo, o limite, o plano B ou as necessidades do outro lado.", meets: "As quatro partes estão escritas, são concretas e realistas.", exceeds: "As necessidades do outro lado estão ligadas a coisas que lhes poderia oferecer." },
      { name: "Número justo pesquisado", objective: "O6", notYet: "O objetivo é um palpite sem fonte.", meets: "O objetivo baseia-se em pelo menos uma fonte de confiança, como dados de salários, anúncios de emprego ou três orçamentos.", exceeds: "Diz qual é a fonte e, ao vender, mostra que o preço cobre os seus custos." },
      { name: "Pedido claro", objective: "O2", notYet: "Nenhum número, ou um número sem razão.", meets: "Um pedido inicial claro um pouco acima do objetivo, com uma razão, e depois silêncio.", exceeds: "O pedido também inclui uma pergunta para saber o que é importante para o outro lado." },
      { name: "Trocas, não cedências", objective: "O3", notYet: "Baixou o número quando foi pressionado, sem nada em troca.", meets: "Usou pelo menos uma troca \"Se você puder..., então eu posso...\" no ensaio.", exceeds: "Ofereceu duas ou mais trocas além do dinheiro que custam pouco mas são importantes para o outro lado." },
      { name: "Calma sob pressão", objective: "O4", notYet: "Aceitou na hora ou irritou-se quando foi pressionado.", meets: "Pediu tempo ou disse não com educação, e manteve o respeito.", exceeds: "Disse depois qual foi a tática de pressão e como lidou com ela." },
      { name: "Acordo por escrito", objective: "O5", notYet: "Não há e-mail de seguimento, ou falta nele algum ponto acordado.", meets: "O e-mail lista todos os pontos acordados (preço ou salário, datas, condições) e pede que confirmem.", exceeds: "O e-mail é curto, educado e está pronto a enviar no mesmo dia." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter pedido um salário maior, um preço melhor ou melhores condições em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter conseguido um aumento, uma oferta melhor ou um preço melhor de um fornecedor depois de negociar",
      "Alunos que confirmam um acordo por escrito ou mandam rever um contrato grande antes de assinar"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta, ou um telefone ou computador, para o plano de uma página",
      "Acesso à internet para pesquisar salários ou preços, como bls.gov/ooh ou anúncios de emprego",
      "Um amigo ou colega para o ensaio",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Forme pares para o ensaio e dê à pessoa que resiste um cartão com uma tática de pressão para usar.",
      "Use exemplos que sirvam ao grupo: salário por hora para quem procura emprego, acordos NIL e de patrocínio para atletas, preços de fornecedores para donos de negócios.",
      "Lembre aos estudantes-atletas que verifiquem os acordos NIL com o gabinete de conformidade da sua escola, e a quem tem um contrato grande que o mande rever.",
      "As leis sobre salários mudam de estado para estado e de país para país; encaminhe os alunos para o seu próprio serviço de trabalho em vez de dar aconselhamento jurídico.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
