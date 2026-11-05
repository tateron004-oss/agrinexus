"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-service-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const CAN_SPAM = { name: "FTC: Lei CAN-SPAM, guia de cumprimento para empresas (em inglês)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

const FTC_REVIEWS = { name: "FTC: Regra sobre avaliações e testemunhos de clientes, perguntas e respostas (em inglês)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-service-business-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-service-business",
  category: "Small Business",
  name: "IA para Negócios de Serviços",
  skills: "Escrever orçamentos claros, Preparar mensagens de marcação e de lembrete, Fazer listas de verificação do trabalho, Escrever descrições de serviços, Fazer o seguimento depois de um trabalho, Pedir avaliações da forma certa",
  outcome: "usar a IA para tratar a papelada de um negócio de serviços, desde a primeira chamada até ao cliente que volta: um modelo de orçamento claro, mensagens de marcação e de lembrete, uma lista de verificação do trabalho, uma tabela de serviços com preços e uma mensagem de seguimento que pede avaliações honestas e mais trabalho.",
  about: [
    "Este curso é para quem vende o seu tempo e a sua habilidade: empregadas de limpeza, barbeiros e cabeleireiros, manicures, jardineiros, canalizadores e faz-tudo, transportadores de mudanças, mecânicos ao domicílio, pintores, tratadores de animais e explicadores. Muitos dos nossos alunos têm negócios de uma só pessoa ou de família.",
    "Você vai usar um assistente de IA gratuito e documentos e folhas de cálculo simples para responder mais depressa a quem pede informações, fazer orçamentos claros, chegar preparado, terminar cada trabalho com a mesma boa qualidade e transformar clientes satisfeitos em clientes que voltam e que o recomendam.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Monte um kit de negócio de serviços para a sua profissão: uma tabela de serviços com preços, um modelo de orçamento com o trabalho a fazer, o preço, o que não está incluído e até quando o orçamento é válido, modelos de confirmação de marcação e de lembrete, uma lista de verificação para o seu trabalho mais comum e uma mensagem de seguimento que agradece ao cliente e pede uma avaliação honesta e uma recomendação.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que vendem o seu tempo e a sua habilidade: empregadas de limpeza, barbeiros e cabeleireiros, manicures, jardineiros, canalizadores e faz-tudo, transportadores de mudanças, mecânicos ao domicílio, pintores, tratadores de animais e explicadores. Muitos têm negócios de uma só pessoa ou de família.",
    startingPoint: "Conhecem bem a sua profissão e conseguem trabalho por telefone, por SMS e pelo boca a boca. Muitos usam o telefone para tudo e têm pouca experiência com assistentes de IA, modelos ou ferramentas de marcação.",
    gap: "Respostas lentas, orçamentos pouco claros e clientes que faltam custam trabalhos e dinheiro. Os alunos precisam de papelada clara e pronta a usar (tabela, orçamento, mensagens de marcação, lista de verificação e seguimento) para ganharem mais trabalhos, evitarem discussões e terem clientes que voltam.",
    constraints: [
      "Tempo: os donos passam o dia nos locais de trabalho, por isso cada lição dura cerca de 5 minutos",
      "Aparelhos: muitas vezes só um telefone",
      "As regras de contratos e de licenças dependem do estado e da profissão",
      "As mensagens de publicidade precisam de autorização e de uma forma de cancelar; a FTC proíbe avaliações falsas ou pagas",
      "Privacidade: nunca pedir aos clientes números de cartão ou de identificação por SMS ou por mensagens nas redes sociais"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os seus serviços e preços reais", action: "escrever uma tabela de serviços que diga o que está incluído, o que custa mais e o preço", standard: "com cada preço e cada item incluído verificados por você" },
    { id: "O2", condition: "Com um trabalho real ou de exemplo", action: "criar um modelo de orçamento e preenchê-lo com o trabalho a fazer, o preço, o que não está incluído e até quando é válido", standard: "com o preço calculado a partir dos seus custos mais o lucro" },
    { id: "O3", condition: "Com um novo pedido de informação por SMS, e-mail, mensagem nas redes sociais ou chamada perdida", action: "escrever um modelo de primeira resposta que agradece à pessoa, faz as perguntas de que precisa e indica o próximo passo", standard: "sem pedir números de cartão nem de identificação" },
    { id: "O4", condition: "Com a sua política de cancelamento", action: "escrever uma confirmação de marcação e um lembrete para o dia anterior", standard: "com a data, o intervalo de horas, a morada, o preço e a política incluídos" },
    { id: "O5", condition: "Com o seu trabalho mais comum", action: "criar uma lista de verificação para antes de chegar, no local e antes de sair", standard: "com os passos de segurança da sua profissão e uma revisão final incluídos" },
    { id: "O6", condition: "Depois de terminar um trabalho", action: "escrever uma mensagem de seguimento que agradece ao cliente e pede uma avaliação honesta, uma recomendação e a próxima marcação", standard: "cumprindo a regra da FTC sobre avaliações" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ganhar o trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Uma tabela de serviços clara",
          minutes: 5,
          goal: "Escrever uma tabela de serviços com descrições e preços claros.",
          text: [
            "Os clientes querem saber o que você faz e mais ou menos quanto custa antes de ligarem. Uma tabela de serviços mostra cada serviço, o que está incluído, quanto tempo demora e o preço ou o intervalo de preços.",
            "Dê à IA os seus serviços e preços reais: \"Escreva uma tabela de serviços para o meu negócio de limpeza de casas: limpeza normal $120 até 2 quartos, limpeza profunda $220, limpeza de mudança a partir de $260. Diga o que está incluído em cada uma. Palavras simples.\" Verifique tudo, sobretudo o que está e o que não está incluído.",
            "Tabelas claras evitam discussões mais tarde. Diga com clareza o que custa mais (o interior do forno, pelo de animais, escadas, deslocações de mais de 15 milhas)."
          ],
          steps: ["Faça a lista dos seus serviços e dos preços reais.", "Escreva o que está incluído e o que custa mais.", "Peça à IA para organizar uma tabela clara.", "Verifique cada preço e cada item incluído."],
          words: [["Tabela de serviços", "uma lista dos serviços que oferece, com o que está incluído e o preço."], ["Extra", "um serviço a mais que custa mais dinheiro."]],
          slides: [
            { title: "O que os clientes querem saber primeiro", bullets: ["O que você faz", "O que está incluído", "Mais ou menos quanto custa"] },
            { title: "Faça-a com a IA", bullets: ["Dê os seus serviços e preços reais", "Peça palavras claras e simples"] },
            { title: "Evite discussões", bullets: ["Diga o que custa mais", "Exemplo: forno, pelo de animais, deslocações de mais de 15 milhas"] }
          ],
          tryIt: "Escreva a sua tabela de serviços com pelo menos três serviços, o que está incluído e os extras. Use a IA para a organizar e depois verifique cada preço.",
          youCanNow: "escrever uma tabela de serviços clara, com o que está incluído, os extras e os preços.",
          quickCheck: [
            { objective: "O1", q: "O que mostra uma tabela de serviços para cada serviço?", options: ["O que está incluído, quanto tempo demora e o preço", "Só o nome do serviço", "A sua morada e o número de identificação", "Os preços dos concorrentes"], answer: 0, why: "Uma tabela de serviços mostra cada serviço, o que está incluído, quanto tempo demora e o preço ou o intervalo de preços." },
            { objective: "O1", q: "A tabela da IA diz que a limpeza profunda inclui o interior do forno, mas você cobra isso à parte. O que faz?", options: ["Deixa assim e discute depois", "Muda para dizer que o interior do forno custa mais", "Apaga a limpeza profunda", "Aumenta todos os preços"], answer: 1, why: "Você verifica cada item incluído, e dizer com clareza o que custa mais evita discussões mais tarde." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever orçamentos",
          minutes: 6,
          goal: "Fazer um modelo de orçamento claro, justo e que proteja você.",
          text: [
            "Um orçamento diz exatamente o que vai fazer, por quanto e em que condições. Um bom orçamento tem: o cliente e a morada do trabalho, o trabalho a fazer, os materiais, o preço, o que não está incluído, as condições de pagamento, quando o trabalho começa e até quando o orçamento é válido.",
            "Peça à IA um modelo: \"Faça um modelo de orçamento de uma página para um pequeno negócio de pintura, com espaços para [cliente], [morada], [trabalho a fazer], [materiais], [preço], [não incluído], [condições de pagamento], [válido até].\" Guarde-o no Docs ou no Word.",
            "A IA pode ajudar a descrever o trabalho com clareza, mas o preço é você que o calcula a partir dos seus custos: materiais, as suas horas, deslocações e lucro. Em trabalhos maiores, as regras de contratos e de licenças dependem do seu estado e da sua profissão, por isso confirme com o organismo de licenças de empreiteiros do seu estado ou com um profissional."
          ],
          steps: ["Peça à IA um modelo de orçamento com espaços em branco.", "Preencha-o com um trabalho real ou de exemplo.", "Calcule o preço a partir dos seus custos mais o lucro.", "Escreva o que não está incluído e até quando o orçamento é válido.", "Confirme as regras de licenças e de contratos nos trabalhos maiores."],
          words: [["Orçamento", "um preço por escrito para um trabalho concreto."], ["Trabalho a fazer", "exatamente o que vai fazer e o que não vai fazer num trabalho."], ["Condições de pagamento", "quando e como o cliente paga, por exemplo um sinal e o resto no fim."]],
          slides: [
            { title: "As partes de um bom orçamento", bullets: ["Cliente, morada e trabalho a fazer", "Materiais e preço", "Não incluído, condições de pagamento, válido até"] },
            { title: "A IA faz o modelo", bullets: ["Espaços como [trabalho a fazer] e [preço]", "Guarde-o no Docs ou no Word"] },
            { title: "O preço é você que decide", bullets: ["Materiais + horas + deslocações + lucro", "Trabalhos maiores: confirme as regras de licenças e contratos"] }
          ],
          tryIt: "Faça o seu modelo de orçamento com a IA e depois preencha-o para um trabalho real ou de exemplo. Calcule o preço num papel a partir dos seus custos.",
          youCanNow: "escrever um orçamento claro que define o trabalho a fazer, o preço e as condições.",
          quickCheck: [
            { objective: "O2", q: "O que dizem ao cliente as \"condições de pagamento\" de um orçamento?", options: ["A cor da tinta que vai usar", "Quem é o seu ajudante", "Como e quando paga", "Quanto tempo vai durar o trabalho"], answer: 2, why: "As condições de pagamento dizem como e quando o cliente paga." },
            { objective: "O2", q: "A IA sugere um preço para o seu orçamento de pintura. O que faz?", options: ["Usa-o porque a IA conhece o mercado", "Duplica-o por segurança", "Deixa o preço em branco", "Calcula você o preço a partir dos materiais, horas, deslocações e lucro"], answer: 3, why: "A IA pode ajudar a descrever o trabalho, mas o preço é você que o calcula a partir dos seus custos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Responder depressa a novos clientes",
          minutes: 4,
          goal: "Responder depressa a novos pedidos com modelos que fazem as perguntas certas.",
          text: [
            "Muitas vezes, o primeiro negócio a responder fica com o trabalho. Tenha um modelo pronto para cada forma como as pessoas o contactam: SMS, e-mail, mensagens nas redes sociais e chamadas perdidas.",
            "Uma boa primeira resposta agradece, faz as duas ou três perguntas de que precisa para o orçamento (\"Quantos quartos? Tem animais? Que dia lhe dá jeito?\") e indica o próximo passo. Peça à IA para escrever uma para cada canal, com o seu jeito de falar.",
            "Guarde os modelos no telefone para poder responder entre trabalhos. Não peça às pessoas para enviarem números de cartão ou de identificação por SMS ou por mensagens nas redes sociais."
          ],
          steps: ["Faça a lista das perguntas de que precisa para o orçamento.", "Peça à IA um modelo de primeira resposta para cada canal.", "Guarde-os no telefone.", "Responda dentro de uma hora quando puder."],
          words: [["Potencial cliente", "uma pessoa que perguntou pelo seu serviço mas ainda não marcou."], ["Canal", "uma forma como os clientes o contactam, como SMS, e-mail ou mensagens nas redes sociais."]],
          slides: [
            { title: "A rapidez ganha trabalhos", bullets: ["A primeira resposta muitas vezes fica com o trabalho", "Um modelo para cada canal"] },
            { title: "Uma boa primeira resposta", bullets: ["Agradeça", "Faça as 2-3 perguntas de que precisa", "Indique o próximo passo"] },
            { title: "À mão e com segurança", bullets: ["Modelos guardados no telefone", "Nunca peça números de cartão por SMS"] }
          ],
          tryIt: "Escreva as suas três perguntas obrigatórias. Peça à IA um modelo de primeira resposta por SMS e outro por e-mail, com o seu jeito de falar, e guarde-os no telefone.",
          youCanNow: "responder depressa a potenciais clientes com modelos que recolhem o que precisa para o orçamento.",
          quickCheck: [
            { objective: "O3", q: "Onde deve guardar os seus modelos de primeira resposta?", options: ["No telefone, para responder entre trabalhos", "Só num computador em casa", "Num papel no escritório", "Em lado nenhum; escreve cada um de novo"], answer: 0, why: "Ter os modelos no telefone deixa você responder depressa entre trabalhos." },
            { objective: "O3", q: "Um potencial cliente envia uma SMS: \"Quanto custa cortar a relva?\" Qual é uma boa primeira resposta?", options: ["\"Envie-me o número do seu cartão para marcar.\"", "Agradecer, perguntar o tamanho do relvado e que dia lhe dá jeito, e propor o próximo passo", "Esperar pelo fim de semana para responder", "Enviar a lista completa de preços sem cumprimentar"], answer: 1, why: "Uma boa primeira resposta agradece, faz as perguntas de que precisa e indica o próximo passo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ganhar o trabalho",
        questions: [
          { objective: "O1", q: "Porque escrever na tabela de serviços o que custa mais?", options: ["Para confundir os clientes", "Para evitar discussões mais tarde", "Para cobrar taxas escondidas", "Não serve para nada"], answer: 1, why: "Extras claros dizem ao cliente o que esperar." },
          { objective: "O2", q: "O que deve estar num orçamento?", options: ["Um desconto falso", "A sua palavra-passe", "O número do cartão do cliente", "O trabalho a fazer e até quando o orçamento é válido"], answer: 3, why: "O trabalho a fazer e a validade protegem os dois lados." },
          { objective: "O2", q: "Quem decide o preço de um orçamento?", options: ["Você, a partir dos seus custos e do lucro", "A IA", "Só o cliente", "Um concorrente"], answer: 0, why: "Só você conhece os seus custos reais." },
          { objective: "O2", q: "Onde confirma as regras de licenças nos trabalhos maiores?", options: ["Com um vizinho", "Numa conversa com a IA", "No organismo de licenças de empreiteiros do seu estado ou com um profissional", "Numa publicação nas redes sociais"], answer: 2, why: "As licenças dependem do seu estado e da sua profissão." },
          { objective: "O3", q: "O que deve ter uma primeira resposta a um potencial cliente?", options: ["Um pedido do número do cartão", "Só o seu preço", "Um agradecimento, as perguntas de que precisa e o próximo passo", "Nada; espere uma semana"], answer: 2, why: "Isso aproxima o potencial cliente de uma marcação." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer o trabalho e manter o cliente",
      lessons: [
        {
          objectives: ["O4"],
          title: "Confirmações de marcação e lembretes",
          minutes: 4,
          goal: "Preparar mensagens de marcação e de lembrete que reduzem as faltas.",
          text: [
            "Quando o cliente falta ou você não consegue entrar, perde um dia de pagamento. Confirmações e lembretes claros ajudam. Uma confirmação diz a data, o intervalo de horas, a morada, o preço, o que o cliente deve preparar e a sua política de cancelamento.",
            "Peça à IA: \"Escreva uma confirmação de marcação e um lembrete para o dia anterior para o meu negócio de banhos e tosquias de cães ao domicílio. Espaços: [nome], [data], [intervalo de horas], [morada], [preço]. Inclua a nossa política de cancelamento de 24 horas.\"",
            "Muitas ferramentas de marcação enviam lembretes automáticos; veja as definições da sua. Se enviar SMS ou e-mails de publicidade (e não só lembretes), peça autorização primeiro e cumpra as regras dos e-mails, incluindo uma forma de cancelar a subscrição."
          ],
          steps: ["Escreva a sua política de cancelamento.", "Peça à IA um modelo de confirmação e outro de lembrete.", "Ative os lembretes automáticos na sua ferramenta de marcação, se ela os tiver.", "Envie publicidade só com autorização e uma forma de cancelar."],
          words: [["Falta", "quando um cliente não aparece a uma marcação."], ["Política de cancelamento", "as suas regras para cancelar, por exemplo avisar com 24 horas."], ["Intervalo de horas", "o espaço de tempo em que vai chegar, como das 9 às 11 da manhã."]],
          slides: [
            { title: "Reduza as faltas", bullets: ["Confirmação logo depois da marcação", "Lembrete no dia anterior"] },
            { title: "Uma boa confirmação", bullets: ["Data, intervalo de horas, morada, preço", "Como se preparar", "Política de cancelamento"] },
            { title: "Automatize e cumpra a lei", bullets: ["As ferramentas de marcação enviam lembretes", "Publicidade precisa de autorização e de forma de cancelar"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Escreva a sua política de cancelamento em duas linhas. Peça à IA um modelo de confirmação e outro de lembrete para o dia anterior, com espaços em branco, e guarde-os.",
          youCanNow: "enviar confirmações de marcação e lembretes que reduzem as faltas.",
          quickCheck: [
            { objective: "O4", q: "Que problema ajudam a evitar as confirmações e os lembretes?", options: ["O mau tempo", "Materiais mais caros", "Clientes que faltam e portas fechadas", "Avaliações falsas"], answer: 2, why: "A lição diz que as faltas e as portas fechadas custam um dia de pagamento, e os lembretes ajudam a reduzi-las." },
            { objective: "O4", q: "Quer enviar a todos os antigos clientes uma SMS com um desconto de festas. O que precisa primeiro?", options: ["Nada; lembretes e publicidade são a mesma coisa", "Um número de telefone novo", "A aprovação da IA", "A autorização deles e uma forma de cancelar"], answer: 3, why: "As mensagens de publicidade, ao contrário dos lembretes, precisam de autorização e de uma forma de cancelar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Listas de verificação para a mesma qualidade sempre",
          minutes: 5,
          goal: "Transformar o seu saber numa lista de verificação que você e os seus ajudantes seguem.",
          text: [
            "Uma lista de verificação faz cada trabalho tão bom como o seu melhor, mesmo num dia de cansaço ou quando é um ajudante a fazê-lo. Também ajuda a formar pessoas novas.",
            "Diga ou escreva como faz o seu trabalho mais comum, do início ao fim, e peça à IA: \"Transforme estas notas numa lista de verificação para um serviço normal de corte de relva numa casa: antes de chegar, no local, antes de sair. Passos curtos.\" Acrescente os passos de segurança que a sua profissão exige e confirme-os com as orientações oficiais de segurança ou com a formação da sua profissão.",
            "Acrescente uma revisão final com o cliente e fotos de antes e depois (com autorização dele) para mostrar o trabalho."
          ],
          steps: ["Descreva o seu trabalho mais comum do início ao fim.", "Peça à IA para o transformar numa lista em três partes.", "Acrescente os passos de segurança da sua profissão.", "Acrescente uma revisão final e fotos com autorização.", "Experimente-a no próximo trabalho e corrija-a."],
          words: [["Lista de verificação", "uma lista de passos para marcar, para não esquecer nada."], ["Revisão final", "ver o trabalho terminado junto com o cliente."]],
          slides: [
            { title: "Porquê uma lista de verificação", bullets: ["A mesma qualidade sempre", "Ajuda a formar os ajudantes"] },
            { title: "Faça-a com a IA", bullets: ["Descreva o trabalho do início ao fim", "Antes de chegar, no local, antes de sair"] },
            { title: "Termine bem", bullets: ["Os passos de segurança da sua profissão", "Revisão final com o cliente", "Fotos de antes e depois com autorização"] }
          ],
          tryIt: "Descreva o seu trabalho mais comum em poucas linhas. Peça à IA para o transformar numa lista em três partes, acrescente os passos de segurança e use-a no próximo trabalho.",
          youCanNow: "fazer e usar uma lista de verificação que mantém a mesma qualidade sempre.",
          quickCheck: [
            { objective: "O5", q: "Quais são as três partes da lista de verificação desta lição?", options: ["Antes de chegar, no local, antes de sair", "Manhã, meio-dia, noite", "Preço, imposto, gorjeta", "Chamada, SMS, e-mail"], answer: 0, why: "A IA transforma as suas notas numa lista em três partes: antes de chegar, no local e antes de sair." },
            { objective: "O5", q: "Quer acrescentar um passo de segurança para usar uma escada. Onde o confirma?", options: ["Pergunta à IA e confia na resposta", "Nas orientações oficiais de segurança ou na formação da sua profissão", "Numa avaliação de um cliente", "Salta os passos de segurança para ganhar tempo"], answer: 1, why: "Os passos de segurança confirmam-se nas orientações oficiais ou na formação da sua profissão." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Seguimento, avaliações honestas e trabalho repetido",
          minutes: 5,
          goal: "Fazer o seguimento depois de um trabalho para ganhar avaliações honestas, recomendações e novas marcações.",
          text: [
            "O trabalho não acaba quando você sai. Uma mensagem de agradecimento no mesmo dia, com um link para deixar uma avaliação e uma proposta para marcar a próxima visita, traz mais trabalho. Peça à IA para a escrever com o seu jeito de falar, com espaços para [nome] e [serviço].",
            "Peça a todos os clientes da mesma forma, satisfeitos ou não, uma avaliação honesta. Não ofereça prémios só por avaliações positivas e nunca escreva avaliações falsas; a regra da FTC sobre avaliações proíbe as duas coisas.",
            "Ponha lembretes para os serviços que se repetem: as caleiras todos os outonos, um corte de cabelo de três em três semanas, a revisão da caldeira todos os anos. Uma mensagem curta como \"Está na hora do próximo...?\" mantém a sua agenda cheia."
          ],
          steps: ["Envie um agradecimento no mesmo dia.", "Inclua um link para avaliações e peça avaliações honestas.", "Proponha a próxima marcação.", "Ponha lembretes para os serviços que se repetem."],
          words: [["Recomendação", "quando um cliente envia um amigo até você."], ["Serviço que se repete", "um trabalho de que os clientes voltam a precisar com regularidade."]],
          slides: [
            { title: "Agradecimento no mesmo dia", bullets: ["Agradeça pelo nome", "Link para avaliações", "Proponha a próxima marcação"] },
            { title: "Só avaliações honestas", bullets: ["Peça a todos os clientes da mesma forma", "Nada de prémios só por avaliações positivas", "Nunca avaliações falsas (regra da FTC)"] },
            { title: "Mantenha a agenda cheia", bullets: ["Caleiras todos os outonos; cabelo de 3 em 3 semanas", "Lembretes \"Está na hora do próximo...?\""] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Tarefa final: junte o seu kit de serviços: tabela de serviços, modelo de orçamento, modelos de primeira resposta, de confirmação e de lembrete, uma lista de verificação e um agradecimento de seguimento com pedido de avaliação e proposta de nova marcação.",
          youCanNow: "tratar a papelada de um negócio de serviços, da primeira chamada ao cliente que volta, com a ajuda da IA.",
          quickCheck: [
            { objective: "O6", q: "Quando deve enviar uma mensagem de agradecimento depois de um trabalho?", options: ["No mês seguinte", "Só se o cliente se queixar", "No mesmo dia", "Nunca"], answer: 2, why: "Um agradecimento no mesmo dia, com um link para avaliações e uma proposta de nova marcação, traz mais trabalho." },
            { objective: "O6", q: "Um cliente não ficou satisfeito com parte do trabalho. Como pede uma avaliação?", options: ["Não lhe pede nada", "Oferece um desconto só se ele der 5 estrelas", "Escreve uma boa avaliação por ele", "Pede-lhe, da mesma forma que a todos, uma avaliação honesta"], answer: 3, why: "Você pede a todos os clientes da mesma forma uma avaliação honesta; os prémios só por avaliações positivas são proibidos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer o trabalho e manter o cliente",
        questions: [
          { objective: "O4", q: "O que deve estar numa confirmação de marcação?", options: ["Data, intervalo de horas, morada, preço e política de cancelamento", "O número do cartão do cliente", "A sua palavra-passe", "Nada"], answer: 0, why: "Esses dados evitam confusões e faltas." },
          { objective: "O4", q: "Antes de enviar e-mails de publicidade, precisa de:", options: ["Um nome de remetente falso", "Nada", "A identificação do cliente", "Autorização e uma forma de cancelar a subscrição"], answer: 3, why: "A lei CAN-SPAM exige uma forma de sair da lista e honestidade." },
          { objective: "O5", q: "Porque usar uma lista de verificação?", options: ["Para trabalhar mais devagar", "A mesma qualidade sempre e formação mais fácil", "Para saltar a segurança", "Para cobrar mais"], answer: 1, why: "As listas de verificação mantêm a qualidade igual." },
          { objective: "O5", q: "Antes de tirar fotos de antes e depois, deve:", options: ["Pedir autorização ao cliente", "Tirá-las às escondidas", "Publicar a morada", "Não as tirar"], answer: 0, why: "Respeite a privacidade do cliente." },
          { objective: "O6", q: "Que pedido de avaliação cumpre a regra da FTC?", options: ["Escrever avaliações nas contas de amigos", "10% de desconto só por avaliações de 5 estrelas", "Pedir a todos os clientes uma avaliação honesta", "Comprar avaliações"], answer: 2, why: "Pedidos honestos e sem condições são permitidos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Negócios de Serviços",
    questions: [
      { objective: "O1", q: "Uma tabela de serviços mostra:", options: ["As moradas dos clientes", "Os serviços, o que está incluído e os preços", "Palavras-passe", "Os números da Segurança Social dos funcionários"], answer: 1, why: "Mostra o que oferece e quanto custa." },
      { objective: "O1", q: "Um extra é:", options: ["Uma avaliação", "Uma oferta grátis", "Um imposto", "Um serviço a mais que custa mais dinheiro"], answer: 3, why: "Os extras são serviços a mais." },
      { objective: "O1", q: "A IA organiza a sua tabela. Você tem de verificar:", options: ["As cores", "Só o tipo de letra", "Nada", "Cada preço e o que está incluído"], answer: 3, why: "A IA pode mudar detalhes." },
      { objective: "O2", q: "\"Trabalho a fazer\" quer dizer:", options: ["As suas ferramentas", "Exatamente o que vai fazer e o que não vai fazer", "A sua carrinha", "O seu horário"], answer: 1, why: "O trabalho a fazer define o serviço." },
      { objective: "O2", q: "Um orçamento deve dizer até quando é:", options: ["Impresso", "Falado", "Válido", "Escrito à máquina"], answer: 2, why: "Os preços mudam; o orçamento deve ter uma data de fim." },
      { objective: "O2", q: "Um preço calculado a partir dos seus custos inclui:", options: ["Materiais, horas, deslocações e lucro", "Só os materiais", "Só as deslocações", "O que a IA sugere"], answer: 0, why: "Todos os custos mais o lucro." },
      { objective: "O3", q: "Um potencial cliente é:", options: ["Uma ferramenta", "Um metal", "Uma pessoa que perguntou mas ainda não marcou", "Uma conta a pagar"], answer: 2, why: "Os potenciais clientes são pessoas que podem vir a ser clientes." },
      { objective: "O3", q: "Porque responder depressa a potenciais clientes?", options: ["A primeira resposta muitas vezes fica com o trabalho", "É obrigatório", "Para os incomodar", "Não importa"], answer: 0, why: "A rapidez ganha trabalhos." },
      { objective: "O3", q: "O que nunca deve pedir por SMS?", options: ["O número de quartos", "Um número de cartão", "Um dia que dê jeito", "Animais em casa"], answer: 1, why: "Os números de cartão são privados." },
      { objective: "O4", q: "Um intervalo de horas é:", options: ["Um feriado", "Um vidro de janela", "Um prazo para pagar", "O espaço de tempo em que vai chegar"], answer: 3, why: "Diz ao cliente quando esperar você." },
      { objective: "O4", q: "Um lembrete no dia anterior ajuda a:", options: ["Reduzir as faltas e as portas fechadas", "Aumentar os preços", "Saltar o trabalho", "Esconder a política"], answer: 0, why: "Os lembretes reduzem os trabalhos perdidos." },
      { objective: "O4", q: "Onde se podem muitas vezes ativar os lembretes automáticos?", options: ["Em lado nenhum", "Num calendário de papel", "No banco", "Nas definições da sua ferramenta de marcação"], answer: 3, why: "Muitas ferramentas de marcação enviam lembretes." },
      { objective: "O5", q: "Como deve fazer uma lista de verificação do trabalho?", options: ["Deixar a IA inventá-la do nada", "Copiar um concorrente", "Descrever o seu trabalho, pedir à IA para o organizar e depois experimentar", "Não fazer"], answer: 2, why: "O seu saber, organizado pela IA." },
      { objective: "O5", q: "Os passos de segurança da sua lista devem ser confirmados com:", options: ["Só a IA", "As orientações oficiais de segurança ou a formação da sua profissão", "Uma publicação nas redes sociais", "Nada"], answer: 1, why: "A segurança precisa de uma fonte de confiança." },
      { objective: "O5", q: "Uma revisão final é:", options: ["Uma avaliação", "Um corredor", "Um orçamento", "Ver o trabalho terminado junto com o cliente"], answer: 3, why: "Confirma que o cliente está satisfeito." },
      { objective: "O6", q: "Quando deve enviar um agradecimento?", options: ["Nunca", "Um ano depois", "No mesmo dia", "Só se se queixarem"], answer: 2, why: "Um agradecimento logo traz mais avaliações e novas marcações." },
      { objective: "O6", q: "Oferecer um desconto só por avaliações de 5 estrelas é:", options: ["Proibido pela regra da FTC sobre avaliações", "Normal", "Obrigatório", "Esperto"], answer: 0, why: "Os prémios ligados a avaliações positivas são proibidos." },
      { objective: "O6", q: "Um exemplo de serviço que se repete é:", options: ["Uma mudança de casa só uma vez", "Limpar as caleiras todos os outonos", "Uma janela partida uma vez", "Uma única entrega"], answer: 1, why: "Repete-se com regularidade." },
      { objective: "O6", q: "Uma recomendação é:", options: ["Uma taxa", "Um cliente que envia um amigo até você", "Um imposto", "Uma ferramenta"], answer: 1, why: "As recomendações trazem clientes novos." },
      { objective: "O2", q: "Que parte do trabalho fica com você, e não com a IA?", options: ["Decidir os preços e fazer bem o trabalho", "Organizar um modelo", "Escrever um lembrete", "Arrumar notas"], answer: 0, why: "A IA ajuda com as palavras; quem gere o negócio é você." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 7, 8, 10, 12, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Tabela de serviços clara", objective: "O1", notYet: "Faltam preços ou itens incluídos, ou estão errados.", meets: "Cada serviço diz o que está incluído, o que custa mais e o preço.", exceeds: "Também mostra quanto tempo demora cada serviço e os extras." },
      { name: "Modelo de orçamento completo", objective: "O2", notYet: "Falta no orçamento o trabalho a fazer, o preço, o que não está incluído ou até quando é válido.", meets: "Estão todas as partes e o preço vem dos seus custos mais o lucro.", exceeds: "Também tem as condições de pagamento e uma nota sobre onde foram confirmadas as regras de licenças nos trabalhos maiores." },
      { name: "Mensagens de marcação", objective: "O4", notYet: "Falta na confirmação ou no lembrete o intervalo de horas, a morada ou a política de cancelamento.", meets: "Confirmação e lembrete do dia anterior com data, intervalo de horas, morada, preço e política.", exceeds: "Também diz ao cliente como se preparar e está pronto para ser enviado automaticamente." },
      { name: "Lista de verificação do trabalho", objective: "O5", notYet: "A lista salta passos ou não tem passos de segurança.", meets: "Lista em três partes com passos de segurança e uma revisão final.", exceeds: "Foi experimentada num trabalho real e corrigida depois." },
      { name: "Seguimento honesto", objective: "O6", notYet: "A mensagem oferece um prémio só por boas avaliações ou não pede avaliação.", meets: "Agradece ao cliente, pede uma avaliação honesta e uma recomendação, e propõe a próxima marcação.", exceeds: "Também põe um lembrete para o próximo serviço que se repete." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que dizem responder mais depressa a potenciais clientes e marcar mais trabalhos em 30 dias (inquérito de seguimento)",
      "Donos que dizem ter menos faltas ou discussões sobre preços em 30 dias",
      "Alunos que começam outro curso da Koach Learn sobre pequenos negócios em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Um assistente de IA gratuito e documentos gratuitos, como o Google Docs ou o Word",
      "Os seus serviços, preços e custos reais, ou uns de exemplo",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Se puder, junte os alunos por profissão, para partilharem listas de verificação e textos de orçamentos.",
      "Lembre aos alunos que os preços vêm dos seus próprios custos, e as regras de licenças e de contratos vêm do organismo do seu estado ou de um profissional, não da IA.",
      "Peça aos alunos que guardem os modelos no telefone durante a sessão, para saírem prontos a usá-los.",
      "Lembre aos alunos que nunca peçam aos clientes números de cartão ou de identificação por SMS, e que nunca façam nem comprem avaliações falsas.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
