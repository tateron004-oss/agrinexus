"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-small-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course is about the US (SBA, IRS); US names are kept and explained.

module.exports = {
  id: "underserved-ai-small-business-pt",
  lang: "pt",
  translationOf: "underserved-ai-small-business",
  category: "Undeserved Community",
  name: "IA para o Empreendedorismo e o Pequeno Negócio",
  skills: "Transformar uma habilidade numa oferta de negócio, Definir preços com os custos reais, Encontrar ajuda gratuita para negócios, Escrever uma descrição do negócio e uma publicação, Manter registos simples do dinheiro, Responder aos clientes",
  outcome: "usar um assistente de IA gratuito para planear um pequeno negócio numa só página: uma oferta clara, um preço que cobre os seus custos, uma descrição curta do negócio e uma publicação, um registo simples do dinheiro e um mentor ou conselheiro gratuito com quem falar a seguir.",
  about: [
    "Muitas pessoas já têm pequenos negócios: fazer tranças, servir comida para festas, limpar casas, cuidar de jardins, dar explicações, consertar telefones ou vender artesanato. Outras têm uma habilidade e querem começar. Este curso é para as duas.",
    "Você vai usar um assistente de IA gratuito para transformar a sua habilidade numa oferta clara, calcular um preço que cobre os seus custos, encontrar ajuda gratuita para negócios, escrever uma descrição curta e uma publicação nas redes sociais, manter registos simples do dinheiro e responder bem aos clientes.",
    "A IA ajuda você a pensar e a escrever. Não substitui conselhos verdadeiros sobre impostos, licenças ou a lei. Cada lição indica ajuda oficial gratuita. As lições duram cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um plano de uma página para um pequeno negócio que tem ou quer começar: a sua oferta e para quem é, um preço que cobre os seus custos (com as suas contas verificadas por você), uma descrição do negócio em três frases, uma publicação nas redes sociais e o nome e o contacto de um conselheiro de negócios gratuito perto de você (SCORE, um Small Business Development Center ou um Women's Business Center).",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas de comunidades desfavorecidas que têm ou querem começar um pequeno negócio: quem faz tranças, quem serve comida para festas, quem limpa casas, quem cuida de jardins, explicadores, quem conserta telefones e quem vende artesanato, muitos a trabalhar por dinheiro vivo ou a tempo parcial.",
    startingPoint: "Têm uma habilidade pela qual as pessoas pagam, e alguns já têm clientes. Poucos têm uma oferta escrita, um preço baseado nos custos, registos do dinheiro ou um conselheiro de negócios, e a maioria nunca usou IA para tarefas do negócio.",
    gap: "Muitos pequenos negócios cobram pouco demais, não guardam registos e nunca recebem conselhos gratuitos, por isso perdem dinheiro ou ficam parados. Os alunos precisam de um plano simples de uma página, contas verificadas e um conselheiro gratuito para crescer com segurança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca",
      "Custo: só ferramentas gratuitas e conselheiros gratuitos ou de baixo custo",
      "A IA não conhece os preços locais, os impostos nem as regras de licenças: os alunos verificam as contas e perguntam a fontes oficiais ou a um conselheiro",
      "Privacidade: nenhum número de conta bancária na IA e nenhuma morada de casa em publicações públicas"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma habilidade que as pessoas já lhe pedem", action: "escrever uma oferta numa frase que diz o que você faz, para quem é e o que o torna diferente", standard: "com palavras que soam como você" },
    { id: "O2", condition: "Com os custos e as horas de um trabalho", action: "calcular um preço que cobre os seus custos e paga o seu tempo", standard: "verificando você mesmo as contas da IA com uma calculadora e comparando com os preços locais" },
    { id: "O3", condition: "Usando a página de parceiros da SBA", action: "encontrar um conselheiro de negócios gratuito perto de você e planear o que perguntar", standard: "anotando o nome, o contacto e três perguntas" },
    { id: "O4", condition: "Com a sua oferta", action: "escrever uma descrição do negócio em três frases e uma publicação nas redes sociais com um assistente de IA", standard: "com todas as promessas verdadeiras e só contactos seguros" },
    { id: "O5", condition: "Usando o Google Sheets ou o Excel na web", action: "criar uma folha simples do dinheiro e registar vendas e despesas", standard: "com as cinco colunas, os totais e os registos feitos no mesmo dia" },
    { id: "O6", condition: "Com uma mensagem ou uma reclamação de um cliente", action: "escrever uma resposta educada e juntar o seu trabalho num plano de negócio de uma página", standard: "oferecendo só o que pode pagar e incluindo todas as partes do plano" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Da habilidade ao negócio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Transformar uma habilidade numa oferta clara",
          minutes: 5,
          goal: "Escrever uma oferta numa frase que diz o que vende, a quem, e porque devem escolher você.",
          text: [
            "Um negócio começa com algo de que as pessoas precisam e pelo qual vão pagar. Pense no que os vizinhos já lhe pedem: cozinhar para festas, fazer tranças, consertar coisas, tomar conta de crianças, cortar a relva.",
            "Uma oferta clara diz o que você faz, para quem é e o que o torna diferente. Por exemplo: \"Refeições preparadas ao fim de semana para famílias ocupadas do bairro leste, com comida caseira a um preço justo.\"",
            "Peça ajuda à IA: \"Sei cozinhar bem comida das Caraíbas e as pessoas pedem-me para servir comida em festas. Ajude-me a escrever três ofertas de uma frase para um pequeno negócio de comida para festas, cada uma para um tipo diferente de cliente.\" Depois escolha a que soa mais como você."
          ],
          steps: ["Faça a lista do que as pessoas já lhe pedem.", "Escolha uma habilidade pela qual as pessoas pagariam.", "Peça à IA três ofertas de uma frase para clientes diferentes.", "Escolha e corrija a que lhe serve melhor."],
          words: [["Oferta", "uma frase curta que diz o que você vende e para quem é."], ["Cliente", "uma pessoa que paga pelo que você vende."]],
          slides: [
            { title: "Comece pelo que as pessoas lhe pedem", bullets: ["Cozinhar, fazer tranças, limpar, consertar", "Tomar conta de crianças, dar explicações, cuidar de jardins"] },
            { title: "Uma oferta clara diz", bullets: ["O que você faz", "Para quem é", "O que o torna diferente"] },
            { title: "Peça opções à IA", bullets: ["Três ofertas para três tipos de clientes", "Escolha a que soa como você"] }
          ],
          tryIt: "Peça a um assistente de IA para escrever três ofertas de uma frase para uma habilidade que você tem. Escolha uma e mude-a para soar como você.",
          youCanNow: "transformar uma habilidade numa oferta de negócio clara, numa só frase.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma oferta clara?", options: ["Refeições preparadas ao fim de semana para famílias ocupadas do bairro leste, comida caseira a preço justo", "Eu cozinho coisas", "Comida à venda", "O melhor negócio de sempre"], answer: 0, why: "Diz o que você faz, para quem é e o que o torna diferente." },
            { objective: "O1", q: "A IA dá-lhe três ofertas, mas nenhuma soa como você. O que faz?", options: ["Usa a primeira na mesma", "Escolhe uma e muda as palavras para soar como você", "Desiste do negócio", "Copia a oferta de um concorrente"], answer: 1, why: "A oferta deve ser sua, por isso corrige a melhor para lhe servir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Definir o preço para não perder dinheiro",
          minutes: 6,
          goal: "Calcular um preço que cobre os seus custos e paga o seu tempo.",
          text: [
            "Muitos pequenos negócios cobram pouco demais. Para definir um preço justo, some os seus custos: materiais, combustível ou bilhete de autocarro, as taxas que houver e o seu tempo.",
            "Peça à IA para fazer as contas consigo, com os seus próprios números: \"Sirvo comida numa festa para 20 pessoas. A comida custa $120, as embalagens $15, o combustível $10, e levo 8 horas. Quero ganhar $18 por hora. Que preço cobre tudo?\" Depois verifique você mesmo as contas com uma calculadora.",
            "A IA não conhece os preços locais. Veja quanto cobram outras pessoas perto de você e pergunte a um conselheiro de negócios gratuito. Os impostos e as licenças também são custos reais: verifique com a sua cidade ou condado, o seu estado e o IRS, o serviço de impostos dos EUA (irs.gov), o que se aplica a você."
          ],
          steps: ["Faça a lista de todos os custos de um trabalho: materiais, transporte, taxas.", "Decida quanto quer ganhar por hora e conte as suas horas.", "Peça à IA para somar tudo com os seus números.", "Verifique você mesmo as contas com uma calculadora.", "Compare com os preços locais e pergunte a um conselheiro."],
          words: [["Custo", "dinheiro que você gasta para fazer o trabalho."], ["Lucro", "o dinheiro que sobra depois de pagar todos os seus custos."]],
          slides: [
            { title: "Muitos pequenos negócios cobram pouco demais", bullets: ["Conte todos os custos", "Conte o seu tempo"] },
            { title: "Custos a somar", bullets: ["Materiais", "Combustível ou bilhete de autocarro", "Taxas", "As suas horas"] },
            { title: "Use a IA e depois verifique", bullets: ["Dê-lhe os seus números reais", "Verifique as contas com uma calculadora", "Compare os preços locais e pergunte a um conselheiro"] }
          ],
          sources: [{ name: "IRS: Pequenas empresas e trabalhadores por conta própria", url: "https://www.irs.gov/businesses/small-businesses-self-employed" }],
          tryIt: "Escolha um trabalho que o seu negócio faria. Faça a lista dos custos e das horas, peça a um assistente de IA para calcular um preço que os cobre e depois verifique você mesmo as contas.",
          youCanNow: "definir um preço que cobre os seus custos e o seu tempo, e verificar você mesmo as contas.",
          quickCheck: [
            { objective: "O2", q: "Que custo muitos donos de pequenos negócios se esquecem de contar?", options: ["Os materiais", "As taxas", "O seu próprio tempo", "O combustível"], answer: 2, why: "O seu tempo também é um custo, por isso o preço tem de pagar as suas horas." },
            { objective: "O2", q: "A IA diz que o seu preço deve ser $150, mas os seus custos somam $160. O que faz?", options: ["Cobra $150", "Cobra menos para ganhar clientes", "Ignora os seus custos", "Refaz as contas com uma calculadora e corrige o preço"], answer: 3, why: "A IA pode errar nas contas, e um preço abaixo dos custos faz perder dinheiro." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar ajuda gratuita para o negócio",
          minutes: 4,
          goal: "Encontrar um conselheiro de negócios gratuito perto de você.",
          text: [
            "Não tem de resolver tudo sozinho. A U.S. Small Business Administration (SBA), o serviço do governo dos EUA para os pequenos negócios, trabalha com parceiros que ajudam as pessoas a começar e a fazer crescer negócios.",
            "O SCORE é uma rede de mentores de negócios voluntários que dão conselhos sem custo. Os Small Business Development Centers (SBDCs) oferecem aconselhamento e formação. Os Women's Business Centers oferecem ajuda gratuita ou de baixo custo a mulheres que começam ou fazem crescer um negócio. Os Veterans Business Outreach Centers servem antigos militares e as suas famílias.",
            "Estes conselheiros podem ajudar com licenças, impostos, empréstimos e planos para a sua zona. Leve as suas perguntas e o seu plano de uma página."
          ],
          steps: ["Abra a página de parceiros da SBA.", "Encontre o SCORE, um SBDC ou um Women's Business Center perto de você.", "Anote o nome e como os contactar.", "Escreva três perguntas para fazer, por exemplo que licenças precisa."],
          words: [["Mentor", "uma pessoa com experiência que lhe dá conselhos."], ["SBA", "a U.S. Small Business Administration, o serviço do governo federal dos EUA que ajuda os pequenos negócios."]],
          sources: [{ name: "SBA: Parceiros de recursos", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          slides: [
            { title: "Você não está sozinho", bullets: ["A SBA trabalha com quem ajuda de graça ou a baixo custo"] },
            { title: "Quem pode ajudar", bullets: ["SCORE: mentores voluntários, sem custo", "SBDCs: aconselhamento e formação", "Women's Business Centers: grátis ou de baixo custo"] },
            { title: "Vá preparado", bullets: ["Leve o seu plano de uma página", "Pergunte sobre licenças, impostos e empréstimos na sua zona"] }
          ],
          tryIt: "Encontre um conselheiro de negócios gratuito perto de você na página de parceiros da SBA. Anote o nome, o contacto e três perguntas para fazer.",
          youCanNow: "encontrar ajuda oficial e gratuita para negócios perto de você.",
          quickCheck: [
            { objective: "O3", q: "O que é o SCORE?", options: ["Uma rede de mentores de negócios voluntários que aconselham sem custo", "Uma empresa de pontuação de crédito", "Um serviço de empréstimos pago", "Um serviço de impostos do estado"], answer: 0, why: "O SCORE é um parceiro da SBA com mentores voluntários, sem custo." },
            { objective: "O3", q: "Não sabe que licenças o seu negócio de comida para festas precisa. O que faz?", options: ["Não tira licenças", "Pergunta a um conselheiro de negócios gratuito e verifica com a cidade, o condado e o estado", "Confia na primeira resposta da IA", "Pergunta a um cliente"], answer: 1, why: "Os conselheiros e os serviços locais e do estado conhecem as regras da sua zona." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Da habilidade ao negócio",
        questions: [
          { objective: "O1", q: "O que diz uma oferta clara?", options: ["A história da sua vida", "O que você faz, para quem é e o que o torna diferente", "Só o seu preço", "A morada da sua casa"], answer: 1, why: "Essas três partes dizem aos clientes porque devem escolher você." },
          { objective: "O2", q: "O que deve contar quando define um preço?", options: ["Só os materiais", "Só o seu tempo", "Materiais, transporte, taxas e o seu tempo", "Nada; adivinha"], answer: 2, why: "Todos os custos, incluindo o seu tempo, têm de ser cobertos." },
          { objective: "O2", q: "A IA calcula um preço para você. E agora?", options: ["Verifica você mesmo as contas e compara com os preços locais", "Usa-o sem verificar", "Duplica-o", "Nunca cobra"], answer: 0, why: "A IA pode errar nas contas e não conhece os preços locais." },
          { objective: "O3", q: "O SCORE oferece:", options: ["Só empréstimos pagos", "Declaração de impostos", "Licenças", "Mentores de negócios voluntários, sem custo"], answer: 3, why: "A SBA descreve o SCORE como mentores voluntários que dão conselhos sem custo." },
          { objective: "O3", q: "Onde deve verificar que licenças precisa?", options: ["Só na IA", "Na sua cidade ou condado, no seu estado ou com um conselheiro de negócios gratuito", "Numa publicação nas redes sociais", "Com um amigo noutro estado"], answer: 1, why: "As licenças dependem de onde você está; as fontes oficiais e os conselheiros sabem." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir e fazer crescer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever a descrição do seu negócio e uma publicação",
          minutes: 5,
          goal: "Escrever uma descrição do negócio em três frases e uma publicação nas redes sociais.",
          text: [
            "Uma descrição curta diz às pessoas quem você é, o que faz e como o contactar. Pode usá-la num panfleto, num cartão de visita ou numa página gratuita do negócio.",
            "Peça à IA: \"Escreva uma descrição calorosa em três frases para o meu negócio de refeições preparadas ao fim de semana para famílias ocupadas. Depois escreva uma publicação curta no Facebook a anunciar o meu primeiro menu.\" Peça uma versão noutra língua se os seus clientes precisarem.",
            "Corrija para soar como você. Só prometa o que consegue cumprir. Use um telefone ou um email do negócio que não se importa de partilhar em público, e não a morada da sua casa."
          ],
          steps: ["Peça à IA uma descrição em três frases a partir da sua oferta.", "Peça uma publicação curta nas redes sociais.", "Corrija as duas para soarem como você.", "Verifique que todas as promessas são verdadeiras e que o contacto é seguro de partilhar."],
          words: [["Publicação nas redes sociais", "uma mensagem curta com palavras e talvez uma imagem, partilhada em aplicações como o Facebook ou o Instagram."]],
          slides: [
            { title: "Uma descrição curta", bullets: ["Quem você é", "O que faz", "Como o contactar"] },
            { title: "Peça as duas à IA", bullets: ["Descrição em três frases", "Uma publicação curta", "Outra língua, se for preciso"] },
            { title: "Antes de partilhar", bullets: ["Faça soar como você", "Só prometa o que consegue cumprir", "Nada da morada de casa"] }
          ],
          tryIt: "Peça a um assistente de IA para escrever uma descrição do seu negócio em três frases e uma publicação curta nas redes sociais. Corrija as duas para soarem como você.",
          youCanNow: "escrever uma descrição curta do negócio e uma publicação que soam como você.",
          quickCheck: [
            { objective: "O4", q: "Que três coisas uma descrição curta do negócio diz às pessoas?", options: ["Os seus preços, o seu banco e a sua idade", "Os seus concorrentes, os seus medos e os seus objetivos", "Quem você é, o que faz e como o contactar", "A morada de casa, o seu horário e a sua família"], answer: 2, why: "Uma descrição diz quem você é, o que faz e como o contactar." },
            { objective: "O4", q: "A publicação da IA promete \"entrega no mesmo dia\", mas você não consegue fazer isso. O que faz?", options: ["Publica; soa bem", "Põe isso em todas as publicações", "Publica e espera que corra bem", "Tira a promessa antes de publicar"], answer: 3, why: "Só prometa o que consegue cumprir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Manter registos simples do dinheiro",
          minutes: 5,
          goal: "Criar uma folha simples e gratuita para registar o dinheiro que entra e o que sai.",
          text: [
            "Manter registos ajuda a ver se está a ganhar dinheiro, e vai precisar deles na altura dos impostos. Pode começar com uma folha de cálculo gratuita, como o Google Sheets ou o Excel na web.",
            "Peça à IA: \"Ajude-me a criar uma folha simples para o meu pequeno negócio com colunas para a data, o que foi, dinheiro que entra, dinheiro que sai e notas. Mostre-me como somar cada coluna.\" Depois faça-a você mesmo.",
            "Anote cada venda e cada despesa no mesmo dia e guarde os recibos (uma fotografia serve). Pergunte a um conselheiro de negócios gratuito ou a um profissional de impostos que registos precisa para os impostos. Não escreva números de conta bancária na IA."
          ],
          steps: ["Abra o Google Sheets ou o Excel na web.", "Faça as colunas: data, o que foi, dinheiro que entra, dinheiro que sai, notas.", "Pergunte à IA como somar cada coluna.", "Anote cada venda e despesa no mesmo dia.", "Guarde uma fotografia de cada recibo."],
          words: [["Folha de cálculo", "uma grelha de linhas e colunas para números e listas."], ["Despesa", "dinheiro que você gasta para o negócio."], ["Recibo", "prova de uma compra ou de um pagamento."]],
          slides: [
            { title: "Porque guardar registos", bullets: ["Ver se está a ganhar dinheiro", "Precisa deles na altura dos impostos"] },
            { title: "Uma folha simples", bullets: ["Data, o que foi", "Dinheiro que entra, dinheiro que sai", "Notas"] },
            { title: "Bons hábitos", bullets: ["Anote no mesmo dia", "Fotografia de cada recibo", "Nenhum número do banco na IA"] }
          ],
          tryIt: "Faça uma folha simples no Google Sheets ou no Excel na web com as cinco colunas. Acrescente três vendas e duas despesas de exemplo, e some o dinheiro que entra e o que sai.",
          youCanNow: "manter registos simples do dinheiro de um pequeno negócio numa folha de cálculo gratuita.",
          quickCheck: [
            { objective: "O5", q: "Porque manter registos simples do dinheiro?", options: ["Para ver se está a ganhar dinheiro e estar pronto na altura dos impostos", "Porque a IA precisa deles", "Para partilhar com os clientes", "Para publicar na internet"], answer: 0, why: "Os registos mostram se ganha dinheiro, e precisa deles para os impostos." },
            { objective: "O5", q: "Comprou $30 de materiais mas perdeu o recibo em papel. O que podia ter feito?", options: ["Nada; os recibos não importam", "Tirar uma fotografia do recibo no mesmo dia", "Escrever o seu número do banco na IA", "Adivinhar o valor na altura dos impostos"], answer: 1, why: "Uma fotografia de cada recibo guarda um registo mesmo que o papel se perca." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Responder aos clientes e juntar tudo",
          minutes: 5,
          goal: "Escrever respostas educadas aos clientes e terminar o seu plano de negócio de uma página.",
          text: [
            "Um bom serviço faz os clientes voltarem. A IA pode ajudar a escrever respostas educadas depressa: confirmar uma encomenda, dizer que não tem mais vagas ou tratar uma reclamação com calma.",
            "Para uma reclamação, peça: \"Escreva uma resposta calma e simpática a um cliente que diz que a comida chegou atrasada. Peça desculpa, explique que vamos resolver e ofereça um pequeno desconto na próxima vez.\" Leia-a e confirme que a oferta é uma que pode pagar.",
            "Agora junte o seu trabalho numa página: a sua oferta, o seu preço e os custos, a sua descrição e a publicação, uma nota sobre os seus registos e o conselheiro gratuito que encontrou. Essa página é o início do seu plano de negócio."
          ],
          steps: ["Peça à IA uma resposta educada para uma mensagem comum de um cliente.", "Verifique todas as promessas antes de a enviar.", "Ponha a oferta, o preço, a descrição, a publicação, a nota dos registos e o conselheiro numa página.", "Leve a página à reunião com o seu conselheiro gratuito."],
          words: [["Plano de negócio", "um plano escrito sobre o que o seu negócio vende, a quem, e como vai ganhar dinheiro."]],
          slides: [
            { title: "Um bom serviço faz os clientes voltarem", bullets: ["Confirme as encomendas", "Diga \"sem vagas\" com simpatia", "Trate as reclamações com calma"] },
            { title: "Respostas a reclamações", bullets: ["Peça desculpa", "Diga como vai resolver", "Só ofereça o que pode pagar"] },
            { title: "O seu plano de uma página", bullets: ["Oferta e preço", "Descrição e publicação", "Registos e o seu conselheiro gratuito"] }
          ],
          tryIt: "Tarefa final: faça um plano de uma página com a sua oferta, um preço verificado que cobre os seus custos, uma descrição em três frases, uma publicação nas redes sociais e o contacto de um conselheiro de negócios gratuito perto de você.",
          youCanNow: "planear, definir o preço e divulgar um pequeno negócio, e saber onde ter ajuda especializada gratuita.",
          quickCheck: [
            { objective: "O6", q: "O que vai no seu plano de negócio de uma página?", options: ["Só o seu preço", "Só a sua publicação nas redes sociais", "Oferta, preço e custos, descrição e publicação, nota dos registos e um conselheiro gratuito", "Os números de telefone dos seus clientes"], answer: 2, why: "O plano de uma página junta todo o seu trabalho num só lugar." },
            { objective: "O6", q: "Não tem vagas este fim de semana e um cliente pede uma encomenda. O que envia?", options: ["Nenhuma resposta", "Um sim, e depois cancela", "Uma resposta mal-educada", "Uma resposta educada a dizer que não tem vagas e a oferecer outra data"], answer: 3, why: "Uma resposta educada e honesta faz o cliente voltar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir e fazer crescer",
        questions: [
          { objective: "O4", q: "O que deve ter uma descrição curta do negócio?", options: ["O seu número da Segurança Social", "Quem você é, o que faz e como o contactar", "A morada da sua casa", "O saldo do seu banco"], answer: 1, why: "Isso diz aos clientes o que precisam de saber." },
          { objective: "O4", q: "Que contacto é mais seguro partilhar em público?", options: ["A morada da sua casa", "A sua conta bancária", "Um telefone ou email do negócio que não se importa de partilhar", "O seu número de identificação"], answer: 2, why: "Mantenha privados os dados privados." },
          { objective: "O5", q: "Que colunas pertencem a uma folha simples do dinheiro?", options: ["Data, o que foi, dinheiro que entra, dinheiro que sai, notas", "Só o seu nome", "A sua palavra-passe", "Os números da Segurança Social dos clientes"], answer: 0, why: "Essas colunas registam o dinheiro que entra e o que sai." },
          { objective: "O5", q: "Quando deve anotar uma venda?", options: ["No fim do ano", "Nunca", "Só as vendas grandes", "No mesmo dia"], answer: 3, why: "Os registos do mesmo dia são exatos." },
          { objective: "O6", q: "Um cliente queixa-se de que a comida chegou atrasada. Uma boa resposta:", options: ["Culpa o cliente", "Pede desculpa, diz como vai resolver e oferece só o que pode pagar", "Ignora a queixa", "Promete comida grátis para sempre"], answer: 1, why: "Respostas calmas e honestas mantêm os clientes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Empreendedorismo e o Pequeno Negócio",
    questions: [
      { objective: "O1", q: "Um bom ponto de partida para uma ideia de negócio é:", options: ["O que as pessoas já lhe pedem para fazer", "O que estiver na moda na internet", "Uma ideia qualquer da IA", "Copiar uma grande empresa"], answer: 0, why: "O que as pessoas já lhe pedem mostra que há procura real." },
      { objective: "O1", q: "Um cliente é:", options: ["O seu fornecedor", "Uma pessoa que paga pelo que você vende", "O seu mentor", "Um banco"], answer: 1, why: "Os clientes compram a você." },
      { objective: "O1", q: "Porque pedir à IA três ofertas em vez de uma?", options: ["Custa menos", "É obrigatório", "Para poder escolher a que lhe serve melhor", "Para confundir os clientes"], answer: 2, why: "Ter escolhas ajuda a encontrar a melhor." },
      { objective: "O2", q: "Que erro de preço muitos pequenos negócios cometem?", options: ["Cobrar demais", "Nunca cobrar", "Cobrar noutras moedas", "Cobrar pouco demais"], answer: 3, why: "Esquecer os custos e o tempo leva a preços baixos." },
      { objective: "O2", q: "O lucro é:", options: ["O dinheiro que sobra depois de pagar todos os custos", "Todo o dinheiro que recebe", "Os seus materiais", "Um empréstimo"], answer: 0, why: "O lucro é o que sobra." },
      { objective: "O2", q: "Quando a IA calcula o seu preço, você deve:", options: ["Confiar totalmente", "Verificar você mesmo as contas", "Ignorar os seus custos", "Perguntar a um desconhecido"], answer: 1, why: "A IA pode errar nas contas." },
      { objective: "O2", q: "Onde pode aprender sobre os impostos do negócio?", options: ["Num anúncio que aparece no ecrã", "Num jogo de vídeo", "No irs.gov, com um conselheiro gratuito ou com um profissional de impostos", "Só na IA"], answer: 2, why: "As fontes oficiais e os profissionais conhecem as regras dos impostos." },
      { objective: "O3", q: "A SBA é:", options: ["Um banco", "Uma aplicação de redes sociais", "Um clube privado", "A U.S. Small Business Administration"], answer: 3, why: "É o serviço do governo federal dos EUA que ajuda os pequenos negócios." },
      { objective: "O3", q: "Os Small Business Development Centers oferecem:", options: ["Aconselhamento e formação", "Mercadoria grátis", "Edifícios grátis", "Anúncios pagos"], answer: 0, why: "Os SBDCs ajudam as pessoas a começar e a fazer crescer negócios." },
      { objective: "O3", q: "Os Women's Business Centers oferecem serviços que são:", options: ["Sempre caros", "Gratuitos ou de baixo custo", "Só para grandes empresas", "Só pela internet"], answer: 1, why: "A SBA descreve-os como gratuitos ou de baixo custo." },
      { objective: "O3", q: "O que deve levar a uma reunião com um conselheiro gratuito?", options: ["Nada", "O PIN do seu banco", "O seu plano de uma página e as suas perguntas", "As suas palavras-passe"], answer: 2, why: "Um plano e perguntas tornam a reunião útil." },
      { objective: "O4", q: "Uma descrição do negócio deve:", options: ["Prometer coisas que não consegue fazer", "Incluir a morada da sua casa", "Ter dez páginas", "Soar como você e ser verdadeira"], answer: 3, why: "Ser honesto e pessoal cria confiança." },
      { objective: "O4", q: "A maioria dos seus clientes fala espanhol. Você pode:", options: ["Pedir à IA uma versão da sua publicação em espanhol", "Publicar só em inglês", "Não publicar nada", "Usar só imagens"], answer: 0, why: "Uma segunda língua chega aos seus clientes." },
      { objective: "O4", q: "Antes de partilhar uma publicação, verifique que:", options: ["É o mais comprida possível", "Todas as promessas são verdadeiras e o contacto é seguro", "Tem o seu número da Segurança Social", "Fala de todos os concorrentes"], answer: 1, why: "As promessas têm de ser reais e o contacto seguro." },
      { objective: "O5", q: "Uma folha de cálculo é:", options: ["Um lençol", "Um formulário de impostos", "Uma grelha de linhas e colunas", "Uma licença de negócio"], answer: 2, why: "As folhas de cálculo organizam números e listas." },
      { objective: "O5", q: "Que ferramentas gratuitas podem guardar os seus registos do dinheiro?", options: ["Só uma empresa de contabilidade paga", "Uma mensagem SMS", "Um álbum de fotografias", "O Google Sheets ou o Excel na web"], answer: 3, why: "As duas são folhas de cálculo gratuitas." },
      { objective: "O5", q: "O que deve guardar de cada despesa?", options: ["Um recibo; uma fotografia serve", "Nada", "Uma lembrança", "O palpite da IA"], answer: 0, why: "Os recibos provam o que gastou." },
      { objective: "O5", q: "O que nunca deve escrever na IA?", options: ["\"Ajude-me a criar colunas\"", "O seu número de conta bancária", "\"Escreva uma publicação simpática\"", "O nome do seu negócio"], answer: 1, why: "Os números do banco são privados." },
      { objective: "O6", q: "Quando oferece um desconto depois de uma reclamação, confirme que:", options: ["É o maior possível", "Promete serviço grátis para sempre", "É um que pode pagar", "Nunca pede desculpa"], answer: 2, why: "Só ofereça o que o seu negócio pode pagar." },
      { objective: "O6", q: "O seu plano de uma página inclui:", options: ["Só o seu logótipo", "A morada da sua casa", "As suas palavras-passe", "Oferta, preço, descrição, publicação, registos e um conselheiro gratuito"], answer: 3, why: "Essas partes formam a tarefa final." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      7,
      10,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Oferta",
        objective: "O1",
        notYet: "Não há oferta, ou ela não diz o quê, para quem ou porquê você.",
        meets: "Uma frase com o que você faz, para quem é e o que o torna diferente.",
        exceeds: "Corrigida para soar claramente como o aluno."
      },
      {
        name: "O preço cobre os custos",
        objective: "O2",
        notYet: "Preço abaixo dos custos, ou as contas não foram verificadas.",
        meets: "Mostra os custos e as horas, e o preço cobre-os, com as contas verificadas à mão.",
        exceeds: "Comparou com os preços locais e anotou os impostos e as licenças sobre os quais deve perguntar."
      },
      {
        name: "Descrição e publicação",
        objective: "O4",
        notYet: "Faltam, ou fazem promessas que o negócio não consegue cumprir.",
        meets: "Descrição em três frases e uma publicação, verdadeiras e com contactos seguros.",
        exceeds: "Inclui uma versão noutra língua para os clientes que precisam."
      },
      {
        name: "Conselheiro gratuito",
        objective: "O3",
        notYet: "Nenhum conselheiro indicado.",
        meets: "Indica um conselheiro do SCORE, de um SBDC ou de um Women's Business Center, com o contacto.",
        exceeds: "Tem três perguntas para fazer na reunião."
      },
      {
        name: "Plano de uma página",
        objective: "O6",
        notYet: "Faltam partes, ou estão espalhadas por várias páginas.",
        meets: "Todas as partes estão numa página, incluindo uma nota sobre os registos do dinheiro.",
        exceeds: "Pronto para levar a uma reunião com um conselheiro, com um exemplo de resposta a um cliente."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se reúnem com um conselheiro de negócios gratuito em 60 dias (inquérito de seguimento)",
      "Alunos que sobem os preços para cobrir os custos ou começam a guardar registos do dinheiro",
      "Alunos que começam ou registam um pequeno negócio em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "O Google Sheets ou o Excel na web (gratuitos) e uma calculadora",
      "Papel para o plano de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada aluno para usar o seu próprio negócio, real ou planeado, em todas as tarefas.",
      "Façam juntos as contas dos preços com calculadoras; muitos alunos descobrem que têm cobrado pouco demais.",
      "Se puder, convide um mentor do SCORE ou um conselheiro de um SBDC para a última sessão.",
      "Lembre aos alunos que os impostos e as licenças mudam de lugar para lugar e que devem verificar em fontes oficiais ou com um conselheiro; não dê conselhos sobre impostos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
