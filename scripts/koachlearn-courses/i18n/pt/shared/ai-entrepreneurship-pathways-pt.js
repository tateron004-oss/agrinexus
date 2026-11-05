"use strict";

// Koach Learn course (Portuguese translation of shared/ai-entrepreneurship-pathways.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the United States (SBA, IRS, EIN, US states and cities); US names are kept and explained.

module.exports = {
  id: "ai-entrepreneurship-pathways-pt",
  lang: "pt",
  translationOf: "ai-entrepreneurship-pathways",
  category: "Re-Entry",
  name: "Caminhos do Empreendedorismo com IA",
  skills: "Escolher um caminho de negócio, Fazer um plano de negócio enxuto com IA, Testar a ideia com clientes, Entender as formas jurídicas e o registo de empresas, Encontrar financiamento e evitar burlas de subsídios, Fazer um roteiro de lançamento de 90 dias",
  outcome: "transformar uma ideia de negócio num plano pronto para lançar, com a ajuda da IA: um plano de negócio enxuto de uma página, provas de clientes reais, uma lista dos registos e licenças a verificar, uma lista realista de financiamento e de ajuda gratuita, e um roteiro de lançamento de 90 dias.",
  about: [
    "Ter um negócio pode trazer rendimento, independência e riqueza para a sua família e a sua comunidade. Também pode ser um caminho quando é difícil arranjar emprego, por exemplo depois da prisão ou num bairro com poucos empregadores. É preciso planear, e as ferramentas de IA podem tornar o planeamento mais rápido e menos solitário.",
    "Este curso é para pessoas que voltam para casa depois da prisão e para membros de comunidades desfavorecidas que querem ir além de um biscate: um negócio de comida, uma empresa de limpeza ou de jardinagem, uma barbearia, uma loja na internet, uma empresa de transporte de carga ou um serviço à comunidade.",
    "Vai usar assistentes de IA gratuitos, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, e recursos oficiais gratuitos da agência das pequenas empresas dos Estados Unidos (SBA) e do serviço de impostos dos Estados Unidos (IRS). Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso não é aconselhamento jurídico nem fiscal; verifique nas fontes oficiais e com conselheiros de negócios gratuitos."
  ],
  finalTask: "Prepare um pacote de lançamento para a sua ideia de negócio: um plano de negócio enxuto de uma página com as nove partes, notas de pelo menos dez conversas com clientes, uma lista da forma jurídica, dos registos, das licenças e dos passos do número fiscal que vai verificar (com os sites oficiais), uma lista de financiamento e de ajuda gratuita com pelo menos três opções reais, locais ou nacionais, e um roteiro de lançamento de 90 dias com datas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que voltam para casa depois da prisão e membros de comunidades desfavorecidas que querem começar um negócio a sério: um negócio de comida, uma empresa de limpeza ou de jardinagem, uma barbearia, uma loja na internet, uma empresa de transporte de carga ou um serviço à comunidade.",
    startingPoint: "Têm uma ideia de negócio, uma habilidade ou um biscate, e sabem usar um telefone. A maioria nunca escreveu um plano de negócio, nunca falou com clientes de forma organizada, nunca registou uma empresa nem procurou financiamento para começar.",
    gap: "Muitos negócios novos falham por causa de um plano fraco, de ideias não testadas, de registos esquecidos ou de burlas de financiamento. Os alunos precisam de um plano pronto para lançar, feito com a ajuda da IA e verificado em fontes oficiais, para poderem começar dentro da lei, evitar burlas e ganhar rendimento para as suas famílias.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador da biblioteca ou do programa",
      "As regras, as taxas e as licenças mudam de estado para estado e de cidade para cidade; os alunos confirmam-nas nos sites oficiais (SBA, IRS, estado e cidade)",
      "Não é aconselhamento jurídico nem fiscal; os alunos usam conselheiros de negócios gratuitos e fontes oficiais",
      "Quem está em liberdade condicional ou com pena suspensa verifica as suas condições antes de escolher um negócio"
    ],
    prerequisites: "Nenhum. Quem nunca usou ferramentas de IA pode fazer primeiro o curso \"Introdução à IA e Confiança Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o seu dinheiro, as suas horas, as suas habilidades e os seus limites", action: "comparar dois ou três caminhos de negócio e escolher o que lhe serve", standard: "escrevendo pelo menos uma razão para a sua escolha" },
    { id: "O2", condition: "Com a IA a fazer-lhe perguntas", action: "escrever um plano de negócio enxuto de uma página com as nove partes", standard: "com cada número adivinhado marcado para verificar" },
    { id: "O3", condition: "Com uma lista de três perguntas para clientes", action: "entrevistar possíveis clientes e usar o que eles dizem para mudar o seu plano", standard: "falando com pelo menos dez pessoas e mudando pelo menos uma parte do plano" },
    { id: "O4", condition: "Para o seu negócio", action: "fazer a lista da forma jurídica, do registo do nome, das licenças, das autorizações e dos passos do número fiscal, com o site oficial de cada um", standard: "com cada passo ligado a uma fonte oficial" },
    { id: "O5", condition: "Com os seus custos para começar", action: "fazer um plano de financiamento e uma lista de ajuda gratuita, e reconhecer burlas de financiamento", standard: "com pelo menos três opções reais e nenhuma oferta que peça uma taxa adiantada" },
    { id: "O6", condition: "Usando o seu plano e a sua lista de verificação", action: "fazer um roteiro de lançamento de 90 dias com datas para a preparação, o teste e o lançamento", standard: "com uma data para cada passo e o nome de um parceiro de acompanhamento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Da ideia ao plano",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher o seu caminho de negócio",
          minutes: 5,
          goal: "Comparar caminhos de negócio e escolher o que serve aos seus objetivos e à sua situação.",
          text: [
            "Há mais de um caminho para ter um negócio. Um biscate dá dinheiro extra com pouca preparação. Um pequeno negócio de serviços (limpeza, cuidar de jardins, transporte de coisas) cresce com clientes e equipas. Um negócio de produtos (comida, artesanato, roupa) precisa de materiais e de um lugar para vender. Um negócio na internet vende através de um site ou de uma plataforma de vendas. Algumas pessoas compram uma franquia ou juntam-se a outras numa cooperativa.",
            "Escolha o caminho que combina com a sua vida: quanto dinheiro pode arriscar, quantas horas tem, as suas habilidades, o transporte, as regras de licenças e, para quem está sob supervisão, as condições da liberdade condicional ou da pena suspensa.",
            "Peça à IA para comparar: \"Tenho $500, 20 horas por semana, sei cozinhar e não tenho carro. Compare um negócio de refeições preparadas, ajuda em serviços de catering e venda de bolos em feiras: custo para começar, tempo até à primeira venda, licenças a verificar e riscos.\" Depois verifique as partes das licenças e dos custos em fontes oficiais."
          ],
          steps: ["Escreva o seu dinheiro, as suas horas, as suas habilidades e os seus limites.", "Escreva duas ou três ideias de negócio.", "Peça à IA para comparar o custo para começar, o tempo até à primeira venda, as licenças e os riscos.", "Verifique as licenças e os custos em fontes oficiais.", "Escolha um caminho para planear."],
          words: [["Empreendedor", "uma pessoa que começa e gere um negócio."], ["Franquia", "um negócio que você compra e que usa a marca e o sistema de outra empresa."], ["Cooperativa", "um negócio que pertence aos seus membros e é gerido por eles."]],
          slides: [
            { title: "Muitos caminhos", bullets: ["Biscate ou negócio de serviços", "Negócio de produtos ou na internet", "Franquia ou cooperativa"] },
            { title: "Combine com a sua vida", bullets: ["Dinheiro, horas, habilidades, transporte", "Licenças e condições de supervisão"] },
            { title: "Compare com a IA", bullets: ["Custo para começar e tempo até à primeira venda", "Licenças e riscos", "Verifique em fontes oficiais"] }
          ],
          tryIt: "Escreva o seu dinheiro, as suas horas, as suas habilidades e os seus limites. Peça à IA para comparar duas ou três ideias, depois escolha um caminho e escreva porquê.",
          youCanNow: "comparar caminhos de negócio e escolher um que combine com a sua vida.",
          quickCheck: [
            { objective: "O1", q: "O que é uma franquia?", options: ["Um negócio que pertence aos seus membros", "Um negócio que você compra e que usa a marca e o sistema de outra empresa", "Um empréstimo para pequenas empresas", "Um conselheiro de negócios gratuito"], answer: 1, why: "Uma franquia usa a marca e o sistema de outra empresa em troca de um pagamento." },
            { objective: "O1", q: "Tem pouco dinheiro e as noites livres. A IA sugere abrir um restaurante. O que faria?", options: ["Abria o restaurante porque a IA disse", "Desistia de ter um negócio", "Comparava com caminhos mais baratos que combinam com o seu dinheiro e as suas horas", "Pedia emprestado o máximo que pudesse"], answer: 2, why: "Escolha o caminho que combina com o seu dinheiro, o seu tempo e as suas habilidades reais." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer um plano de negócio enxuto com IA",
          minutes: 6,
          goal: "Escrever um plano de negócio enxuto de uma página com as nove partes.",
          text: [
            "A SBA descreve dois tipos de plano de negócio: um plano tradicional, longo, que os credores muitas vezes pedem, e um plano enxuto para começar, que cabe numa página. Comece pelo enxuto.",
            "O plano enxuto da SBA tem nove partes: parcerias principais, atividades principais, recursos principais, proposta de valor (porque os clientes escolhem você), relação com os clientes, segmentos de clientes (quem são os seus clientes), canais (como chega até eles), estrutura de custos e fontes de receita.",
            "Peça ajuda à IA: \"Ajude-me a preencher um plano de negócio enxuto com estas nove partes para o meu negócio de limpeza de carros ao domicílio em [cidade]. Faça-me uma pergunta de cada vez.\" Responda com factos reais. Depois compare os custos que a IA adivinhou com os preços reais que você procurar."
          ],
          steps: ["Abra um modelo de uma página com nove caixas.", "Peça à IA para lhe fazer uma pergunta de cada vez sobre cada parte.", "Preencha cada caixa com factos reais.", "Compare os custos e os preços com orçamentos reais.", "Mantenha tudo numa página."],
          words: [["Plano de negócio enxuto", "um plano de uma página com as partes principais de um negócio."], ["Proposta de valor", "a razão por que os clientes devem escolher você."], ["Fonte de receita", "uma forma de o negócio ganhar dinheiro."]],
          slides: [
            { title: "Dois tipos de plano (SBA)", bullets: ["Tradicional: longo, para os credores", "Enxuto: uma página; comece aqui"] },
            { title: "Nove partes", bullets: ["Parcerias, atividades, recursos", "Proposta de valor, relação com os clientes, segmentos", "Canais, custos, receitas"] },
            { title: "A IA faz-lhe as perguntas", bullets: ["Uma pergunta de cada vez", "Responda com factos reais", "Compare os custos com preços reais"] }
          ],
          sources: [{ name: "SBA: Write your business plan (escrever o seu plano de negócio)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Preencha um plano enxuto de uma página para o negócio que escolheu, com a IA a fazer-lhe as perguntas. Marque cada parte em que precisa de procurar números reais.",
          youCanNow: "escrever um plano de negócio enxuto de uma página com a ajuda da IA.",
          quickCheck: [
            { objective: "O2", q: "O que quer dizer \"fontes de receita\" num plano enxuto?", options: ["Como o negócio ganha dinheiro", "Quem são os seus clientes", "Como chega aos clientes", "O nome do seu negócio"], answer: 0, why: "As fontes de receita são as formas como o dinheiro entra." },
            { objective: "O2", q: "A IA preenche o custo da renda mensal com um número adivinhado. O que faria?", options: ["Deixava ficar; a IA costuma ter razão", "Apagava a linha do custo", "Duplicava o número por segurança", "Marcava-o e procurava o preço real"], answer: 3, why: "Os números adivinhados têm de ser comparados com preços reais." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Testar a ideia com clientes reais",
          minutes: 5,
          goal: "Falar com dez possíveis clientes e usar o que dizem para melhorar o plano.",
          text: [
            "Um plano é só um palpite até os clientes o provarem. Fale com pelo menos dez pessoas que fazem parte do seu segmento de clientes. Pergunte pelo problema delas, não pela sua ideia: \"Como manda lavar o carro hoje? Quanto paga? O que é que o incomoda nisso?\"",
            "Depois teste se compram: ofereça uma encomenda antecipada, um preço de lançamento ou uma lista de inscrição. É bom ouvir \"que boa ideia\"; mas pessoas que pagam ou se inscrevem são a prova.",
            "Cole as suas notas (sem nomes nem números de telefone) na IA e pergunte: \"Resuma o que estes dez clientes disseram. Que padrões vê, e o que devo mudar no meu plano?\" Atualize o plano enxuto com o que aprendeu."
          ],
          steps: ["Escreva três perguntas sobre o problema do cliente.", "Fale com pelo menos dez possíveis clientes.", "Ofereça uma encomenda antecipada, um preço de lançamento ou uma lista de inscrição.", "Peça à IA para encontrar padrões nas suas notas, sem os nomes.", "Atualize o plano enxuto."],
          words: [["Segmento de clientes", "um grupo de clientes com necessidades parecidas."], ["Validar", "provar com dados reais que os clientes querem alguma coisa."], ["Encomenda antecipada", "quando um cliente aceita comprar antes de o produto ou o serviço estar pronto."]],
          slides: [
            { title: "Pergunte pelo problema deles", bullets: ["Como o resolvem hoje?", "Quanto pagam?", "O que os incomoda?"] },
            { title: "Teste se compram", bullets: ["Encomendas antecipadas ou inscrições", "Pagar vale mais do que \"que boa ideia\""] },
            { title: "Aprenda e ajuste", bullets: ["A IA encontra padrões nas notas", "Tire os nomes primeiro", "Atualize o seu plano"] }
          ],
          tryIt: "Fale com pelo menos cinco possíveis clientes esta semana usando as suas três perguntas. Peça à IA para resumir os padrões e mude uma parte do seu plano enxuto.",
          youCanNow: "testar uma ideia de negócio com clientes reais e melhorar o plano.",
          quickCheck: [
            { objective: "O3", q: "Qual é a melhor pergunta para uma entrevista com um cliente?", options: ["\"Compraria o meu ótimo produto?\"", "\"Como resolve este problema hoje?\"", "\"Gosta do meu logótipo?\"", "\"Pode emprestar-me dinheiro?\""], answer: 1, why: "Perguntar pelo problema e pelo que fazem hoje dá provas honestas." },
            { objective: "O3", q: "Oito em cada dez pessoas dizem que nunca pagariam pelo seu serviço. O que faria?", options: ["Ignorava-as e lançava na mesma", "Pedia à IA para dizer que estão erradas", "Deixava de falar com clientes", "Mudava o plano, por exemplo o preço, o serviço ou o cliente"], answer: 3, why: "As provas dos clientes servem para mudar o plano antes de gastar dinheiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Da ideia ao plano",
        questions: [
          { objective: "O1", q: "O que é uma cooperativa?", options: ["Um serviço do governo", "Um empréstimo", "Um negócio que pertence aos seus membros e é gerido por eles", "Um tipo de licença"], answer: 2, why: "As cooperativas pertencem aos seus membros e são geridas por eles." },
          { objective: "O4", q: "A IA diz que o seu negócio de comida não precisa de autorizações. O que deve fazer?", options: ["Verificar em fontes oficiais da cidade, do condado ou do estado", "Confiar e começar", "Perguntar só a um amigo", "Ignorar as autorizações"], answer: 0, why: "As regras das licenças têm de ser verificadas em fontes oficiais." },
          { objective: "O2", q: "Quantas partes tem o plano enxuto para começar da SBA?", options: ["Duas", "Cinquenta", "Uma", "Nove"], answer: 3, why: "A SBA indica nove partes." },
          { objective: "O2", q: "O que é uma proposta de valor?", options: ["O saldo da sua conta no banco", "A razão por que os clientes devem escolher você", "O seu número fiscal", "A sua morada"], answer: 1, why: "Explica o valor único que você oferece." },
          { objective: "O3", q: "Qual é a prova mais forte de que os clientes querem a sua ideia?", options: ["Dizem \"que boa ideia\"", "Fazem uma encomenda antecipada ou inscrevem-se", "A sua família gosta", "A IA gosta"], answer: 1, why: "Uma ação vale mais do que elogios." }
        ]
      }
    },
    {
      name: "Capítulo 2: Preparar, financiar e lançar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Forma jurídica, registo e número fiscal: o básico",
          minutes: 6,
          goal: "Fazer a lista dos passos de preparação de que o seu negócio precisa e dos lugares oficiais onde os verificar.",
          text: [
            "Formas jurídicas comuns nos Estados Unidos: o empresário em nome individual (sole proprietorship: você e o negócio são o mesmo; é a mais simples), a LLC (sociedade de responsabilidade limitada; pode separar as dívidas do negócio das dívidas pessoais, com taxas e papelada do estado) e as sociedades anónimas (corporations). As organizações sem fins lucrativos são um caminho à parte. Peça à IA para explicar as diferenças e depois escolha com a ajuda de um conselheiro de negócios gratuito ou de um profissional.",
            "A preparação muitas vezes inclui: registar o nome do negócio no estado ou no condado, obter licenças comerciais da cidade ou do condado, autorizações especiais (comida, cuidado de crianças, transporte de carga, estética e outras) e um número fiscal. O IRS diz que o número de identificação de empregador (EIN) é gratuito quando o pede ao IRS; cuidado com sites que cobram por ele.",
            "As regras e as taxas mudam de estado para estado e de cidade para cidade, por isso faça uma lista de verificação e confirme cada ponto nos sites oficiais: a Secretaria de Estado (Secretary of State) do seu estado, a sua cidade ou condado, a agência de impostos do seu estado e irs.gov. Algumas licenças têm em conta o registo criminal; a agência que dá a licença explica as suas regras."
          ],
          steps: ["Peça à IA para explicar a diferença entre empresário em nome individual e LLC para a sua situação.", "Confirme a sua escolha com um conselheiro gratuito ou um profissional.", "Faça a lista do registo do nome, das licenças e das autorizações a verificar.", "Encontre cada um nos sites oficiais do estado, do condado e da cidade.", "Peça um EIN gratuito em irs.gov, se precisar de um."],
          words: [["Empresário em nome individual (sole proprietorship)", "um negócio de uma só pessoa, sem ser uma entidade jurídica separada."], ["LLC", "sociedade de responsabilidade limitada: uma forma jurídica que pode separar as dívidas do negócio das dívidas pessoais."], ["Secretaria de Estado (Secretary of State)", "o serviço do estado que muitas vezes trata do registo de empresas."]],
          slides: [
            { title: "Formas jurídicas comuns", bullets: ["Empresário em nome individual: a mais simples", "LLC: separa as dívidas do negócio; taxas e papelada", "Peça ajuda para escolher"] },
            { title: "Lista de preparação", bullets: ["Registo do nome do negócio", "Licença da cidade ou do condado; autorizações especiais", "Número fiscal (EIN)"] },
            { title: "Verifique nos sites oficiais", bullets: ["Secretaria de Estado, cidade, condado", "Agência de impostos do estado e irs.gov", "O EIN é gratuito no IRS"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number (obter um número de identificação de empregador)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Choose a business structure (escolher a forma jurídica)", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }],
          tryIt: "Faça uma lista de preparação para o seu negócio: forma jurídica, registo do nome, licenças, autorizações e EIN. Ao lado de cada um, escreva o site oficial onde o vai confirmar.",
          youCanNow: "fazer a lista dos passos de preparação de que um negócio precisa e dizer onde confirmar cada um.",
          quickCheck: [
            { objective: "O4", q: "O que é um EIN?", options: ["Uma licença comercial da cidade", "Um tipo de empréstimo para negócios", "Um número fiscal do IRS para um negócio", "Uma conta bancária do negócio"], answer: 2, why: "O EIN é o número fiscal que o IRS dá a um negócio." },
            { objective: "O4", q: "Um amigo diz que não precisa de autorização para um negócio de comida feito em casa. O que faria?", options: ["Verificava no serviço de saúde da cidade, do condado ou do estado", "Confiava no amigo", "Perguntava à IA e confiava na resposta", "Começava a vender e esperava para ver"], answer: 0, why: "As regras das autorizações mudam de lugar para lugar, por isso confirme no serviço oficial." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Financiar o seu começo e encontrar ajuda gratuita",
          minutes: 6,
          goal: "Fazer um plano de financiamento realista e uma lista de ajuda gratuita, e evitar burlas de financiamento.",
          text: [
            "A maioria das pequenas empresas começa com poupanças pessoais, as primeiras vendas e a ajuda da família ou da comunidade. Comece o mais pequeno que puder e cresça com as vendas. Peça à IA para ajudar a fazer a lista dos custos para começar e a encontrar formas de os reduzir, como alugar equipamento ou usar uma cozinha partilhada.",
            "Se precisar de um empréstimo, procure credores com missão social. O programa de microcréditos da SBA dá empréstimos até $50,000 através de credores comunitários sem fins lucrativos; a SBA diz que a média é de cerca de $13,000 e que o prazo mais longo é de sete anos. As instituições financeiras de desenvolvimento comunitário (CDFI) e os fundos locais de empréstimo também servem pessoas que os bancos muitas vezes recusam. Existem subsídios, mas costumam ser muito disputados e para fins específicos.",
            "Ajuda gratuita: a SBA indica os Centros de Desenvolvimento de Pequenas Empresas (SBDC), os mentores do SCORE, os Centros de Negócios para Mulheres e os Centros de Apoio a Negócios de Veteranos (VBOC) para aconselhamento gratuito ou barato. Cuidado com quem promete subsídios ou empréstimos garantidos em troca de uma taxa paga adiantada: é uma burla comum."
          ],
          steps: ["Faça a lista dos custos para começar e corte onde puder.", "Planeie começar pequeno e crescer com as vendas.", "Procure credores de microcrédito da SBA e CDFI perto de você.", "Encontre o SBDC, o SCORE ou outro parceiro da SBA mais perto.", "Nunca pague taxas adiantadas por subsídios ou empréstimos \"garantidos\"."],
          words: [["Microcrédito", "um pequeno empréstimo para negócios, muitas vezes de um credor comunitário."], ["CDFI", "instituição financeira de desenvolvimento comunitário: um credor que se dedica às comunidades desfavorecidas."], ["Subsídio", "dinheiro que não se devolve, normalmente dado para um fim específico."]],
          slides: [
            { title: "Comece pequeno", bullets: ["Poupanças e primeiras vendas", "Corte custos: alugue, partilhe, peça equipamento emprestado"] },
            { title: "Credores com missão social", bullets: ["Microcrédito da SBA: até $50,000, média de cerca de $13,000", "Através de credores comunitários sem fins lucrativos", "CDFI e fundos locais de empréstimo"] },
            { title: "Ajuda gratuita e burlas", bullets: ["SBDC, SCORE, Centros de Negócios para Mulheres, VBOC", "Nenhuma taxa adiantada por subsídios \"garantidos\""] }
          ],
          sources: [{ name: "SBA: Microloans (microcréditos)", url: "https://www.sba.gov/funding-programs/loans/microloans" }, { name: "SBA: Local assistance (ajuda local)", url: "https://www.sba.gov/local-assistance" }],
          tryIt: "Faça a lista dos seus custos para começar e corte pelo menos um. Depois encontre duas opções reais de financiamento e um centro de aconselhamento gratuito perto de você (ou na internet) e escreva como os contactar.",
          youCanNow: "fazer um plano de financiamento realista, encontrar ajuda gratuita e reconhecer burlas de financiamento.",
          quickCheck: [
            { objective: "O5", q: "O que é uma CDFI?", options: ["Um formulário de impostos do governo", "Um credor que se dedica às comunidades desfavorecidas", "Um tipo de franquia", "Uma licença comercial"], answer: 1, why: "As CDFI são credores que se dedicam às comunidades desfavorecidas." },
            { objective: "O5", q: "Um anúncio na internet promete um subsídio garantido se pagar primeiro uma taxa. O que faria?", options: ["Pagava a taxa depressa antes que acabasse", "Enviava os seus dados bancários para verificar", "Tratava-o como uma provável burla e não pagava", "Pedia uma taxa mais pequena"], answer: 2, why: "Os subsídios verdadeiros não pedem uma taxa adiantada para garantir o dinheiro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer o seu roteiro de lançamento de 90 dias",
          minutes: 5,
          goal: "Transformar o seu plano num roteiro de lançamento de 90 dias com datas.",
          text: [
            "Um roteiro transforma o plano em ação. Divida os 90 dias em três partes. Dias 1-30: preparar (forma jurídica, registos, licenças, conta bancária, ferramentas básicas). Dias 31-60: aprontar e fazer pré-vendas (materiais, preços, divulgação, primeiros clientes garantidos). Dias 61-90: lançar e aprender (primeiras vendas, opinião dos clientes, controlo do dinheiro, ajustes).",
            "Peça à IA: \"Transforme o meu plano enxuto e a minha lista de preparação numa tabela de roteiro de lançamento de 90 dias com semana, tarefa e data para estar feito. Tenho 20 horas por semana.\" Depois torne-o real: mude as datas para caberem na sua vida e deixe tempo de folga para os serviços do governo que são lentos.",
            "Escolha uma hora por semana para rever o roteiro e partilhe-o com alguém que o ajude a cumprir, como um mentor, um conselheiro ou um amigo. Comemore a primeira venda."
          ],
          steps: ["Dias 1-30: tarefas de preparação.", "Dias 31-60: aprontar e fazer pré-vendas.", "Dias 61-90: lançar, controlar o dinheiro e aprender.", "Peça à IA um rascunho da tabela e depois ajuste as datas.", "Marque uma revisão semanal e escolha um parceiro de acompanhamento."],
          words: [["Roteiro", "um plano que mostra os passos por ordem, com datas."], ["Parceiro de acompanhamento", "alguém que acompanha o seu progresso e o encoraja."]],
          slides: [
            { title: "Três partes de 30 dias", bullets: ["1-30: preparar", "31-60: aprontar e fazer pré-vendas", "61-90: lançar e aprender"] },
            { title: "A IA faz o rascunho, você ajusta", bullets: ["Semana, tarefa, data para estar feito", "Ajuste às suas horas reais", "Deixe folga para serviços lentos"] },
            { title: "Mantenha o rumo", bullets: ["Revisão semanal", "Um parceiro de acompanhamento", "Comemore a primeira venda"] }
          ],
          tryIt: "Tarefa final: faça o seu roteiro de lançamento de 90 dias com a IA e ajuste-o. Junte-o ao seu plano enxuto, às notas dos clientes, à lista de preparação e à lista de financiamento e ajuda para completar o seu pacote de lançamento.",
          youCanNow: "transformar uma ideia de negócio num plano pronto para lançar e num roteiro de 90 dias.",
          quickCheck: [
            { objective: "O6", q: "Qual é o foco dos dias 31 a 60 num roteiro de 90 dias?", options: ["Reformar-se do negócio", "Vender o negócio", "Só papelada", "Testar com os primeiros clientes e melhorar"], answer: 3, why: "O mês do meio serve para testar e melhorar antes do lançamento completo." },
            { objective: "O6", q: "Continua a falhar as datas do roteiro. O que faria?", options: ["Pedia a um parceiro de acompanhamento para ver o seu progresso todas as semanas", "Apagava o roteiro", "Tirava todas as datas", "Começava outro negócio"], answer: 0, why: "Um parceiro de acompanhamento ajuda-o a continuar e a ajustar o plano." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Preparar, financiar e lançar",
        questions: [
          { objective: "O4", q: "Um site cobra $250 para lhe obter um EIN. Segundo o IRS:", options: ["Essa é a taxa oficial", "Os EIN custam $1,000", "Só os advogados os podem obter", "Os EIN são gratuitos no IRS; cuidado com sites que cobram"], answer: 3, why: "O IRS diz que o EIN é gratuito." },
          { objective: "O5", q: "Qual é o valor máximo de um microcrédito da SBA, segundo a SBA?", options: ["$50,000", "$5 milhões", "$500", "Não há máximo"], answer: 0, why: "A SBA diz que os microcréditos vão até $50,000." },
          { objective: "O5", q: "Alguém liga a prometer-lhe um subsídio garantido para o seu negócio se pagar primeiro uma taxa de $300. Isto é:", options: ["Um processo normal de subsídio", "Uma exigência da SBA", "Uma burla comum", "Um imposto"], answer: 2, why: "Os subsídios verdadeiros não exigem taxas adiantadas para uma garantia." },
          { objective: "O5", q: "Segundo a SBA, quem oferece aconselhamento de negócios gratuito ou barato?", options: ["Credores de empréstimos rápidos (payday)", "Anúncios nas redes sociais", "Casas de penhores", "Os Centros de Desenvolvimento de Pequenas Empresas e o SCORE"], answer: 3, why: "São parceiros da SBA." },
          { objective: "O6", q: "No roteiro de 90 dias, o que acontece nos dias 1-30?", options: ["Só a festa de lançamento", "Nada", "Preparação: registos, licenças, conta bancária, ferramentas", "Vender o negócio"], answer: 2, why: "A preparação vem primeiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Caminhos do Empreendedorismo com IA",
    questions: [
      { objective: "O1", q: "Um empreendedor é:", options: ["Um funcionário do governo", "Uma pessoa que começa e gere um negócio", "Um banco", "Um tipo de empréstimo"], answer: 1, why: "Os empreendedores começam negócios." },
      { objective: "O1", q: "Uma franquia é:", options: ["Um negócio que você compra e que usa a marca e o sistema de outra empresa", "Um subsídio gratuito", "Um formulário de impostos", "Uma cooperativa"], answer: 0, why: "As franquias usam uma marca que já existe." },
      { objective: "O1", q: "Ao escolher um caminho, quem está sob supervisão também deve verificar:", options: ["A sua cor preferida", "Mais nada", "As condições da liberdade condicional ou da pena suspensa", "Só os preços de um concorrente"], answer: 2, why: "As condições podem limitar algumas atividades de negócio." },
      { objective: "O2", q: "Que tipo de plano a SBA descreve como tendo uma página?", options: ["O plano enxuto para começar", "O plano tradicional", "A declaração de impostos", "O pedido de empréstimo"], answer: 0, why: "O plano enxuto é um quadro de uma página." },
      { objective: "O2", q: "\"Segmentos de clientes\" num plano enxuto quer dizer:", options: ["Os seus custos", "Os seus parceiros", "O seu banco", "Quem são os seus clientes"], answer: 3, why: "Os segmentos são grupos de clientes." },
      { objective: "O2", q: "\"Canais\" num plano enxuto quer dizer:", options: ["Só canais de televisão", "Como chega aos clientes", "Os seus fornecedores", "Os seus impostos"], answer: 1, why: "Os canais são a forma como chega aos clientes e lhes vende." },
      { objective: "O2", q: "A IA adivinha que o seu equipamento vai custar $200. Você deve:", options: ["Usar o palpite", "Verificar os preços reais antes de confiar nele", "Duplicá-lo sem verificar", "Saltar esse custo"], answer: 1, why: "Os orçamentos reais valem mais do que os palpites da IA." },
      { objective: "O3", q: "Quando entrevista clientes, pergunte sobre:", options: ["Se adoram a sua ideia", "As palavras-passe deles", "O imposto sobre o rendimento deles", "O problema deles e como o resolvem hoje"], answer: 3, why: "As perguntas sobre o problema dão respostas honestas." },
      { objective: "O3", q: "Antes de colar as notas dos clientes na IA, tire:", options: ["Os nomes e os números de telefone", "Os padrões", "As suas perguntas", "Nada"], answer: 0, why: "Proteja a privacidade dos clientes." },
      { objective: "O3", q: "Validar uma ideia quer dizer:", options: ["Carimbar um bilhete de estacionamento", "Registar-se no estado", "Provar com dados reais que os clientes a querem", "Pagar impostos"], answer: 2, why: "A validação são provas vindas dos clientes." },
      { objective: "O4", q: "O empresário em nome individual (sole proprietorship) é:", options: ["Uma grande sociedade anónima", "Uma organização sem fins lucrativos", "Um serviço do governo", "Um negócio de uma só pessoa, sem ser uma entidade jurídica separada"], answer: 3, why: "É a forma jurídica mais simples." },
      { objective: "O4", q: "Uma LLC pode ajudar a:", options: ["Não pagar nenhum imposto", "Saltar as licenças", "Separar as dívidas do negócio das dívidas pessoais", "Garantir lucro"], answer: 2, why: "A responsabilidade limitada é a sua principal característica." },
      { objective: "O4", q: "Onde se regista muitas vezes o nome de um negócio?", options: ["Numa página de redes sociais", "No seu estado, muitas vezes na Secretaria de Estado, ou no seu condado", "Só num banco", "Em lado nenhum"], answer: 1, why: "O registo é feito por serviços do estado ou locais." },
      { objective: "O4", q: "As regras e as taxas para preparar um negócio:", options: ["Mudam de estado para estado e de cidade para cidade, por isso confirme nos sites oficiais", "São iguais em todo o lado", "Nunca mudam", "São definidas pela IA"], answer: 0, why: "As regras locais variam." },
      { objective: "O5", q: "A SBA diz que os microcréditos são dados através de:", options: ["Credores de empréstimos rápidos (payday)", "Redes sociais", "Credores intermediários comunitários sem fins lucrativos", "O IRS"], answer: 2, why: "A SBA financia intermediários que fazem os empréstimos." },
      { objective: "O5", q: "Uma CDFI é:", options: ["Um credor que se dedica às comunidades desfavorecidas", "Um formulário de impostos", "Uma licença comercial", "Um cartão de crédito"], answer: 0, why: "As CDFI servem pessoas que os bancos muitas vezes deixam de fora." },
      { objective: "O5", q: "A maioria das pequenas empresas começa com:", options: ["Grandes subsídios garantidos", "Capital de risco", "Prémios da lotaria", "Poupanças, primeiras vendas e ajuda da comunidade"], answer: 3, why: "Começar pequeno e crescer com as vendas é o mais comum." },
      { objective: "O5", q: "O SCORE oferece:", options: ["Empréstimos rápidos (payday)", "Mentoria para donos de pequenas empresas", "Licenças comerciais", "Números fiscais"], answer: 1, why: "O SCORE é um parceiro de mentoria da SBA." },
      { objective: "O6", q: "Os dias 61-90 do roteiro centram-se em:", options: ["Escolher um caminho", "Lançamento, primeiras vendas, opinião dos clientes e controlo do dinheiro", "Papelada de preparação", "Fechar o negócio"], answer: 1, why: "A última parte é lançar e aprender." },
      { objective: "O6", q: "Um parceiro de acompanhamento:", options: ["Faz o seu trabalho por você", "Empresta-lhe dinheiro", "Trata dos seus impostos", "Acompanha o seu progresso e encoraja-o"], answer: 3, why: "O acompanhamento ajuda-o a cumprir o que planeou." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      2,
      4,
      6,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano de negócio enxuto",
        objective: "O2",
        notYet: "Faltam partes, ou os números adivinhados são tratados como factos.",
        meets: "Uma página com as nove partes, com os números adivinhados marcados ou verificados.",
        exceeds: "Os preços reais estão preenchidos e o plano mostra a opinião dos clientes."
      },
      {
        name: "Provas dos clientes",
        objective: "O3",
        notYet: "Menos de dez conversas, ou nenhuma mudança no plano.",
        meets: "Notas de pelo menos dez conversas e pelo menos uma mudança no plano.",
        exceeds: "Tem provas mais fortes, como encomendas antecipadas ou inscrições."
      },
      {
        name: "Lista de preparação",
        objective: "O4",
        notYet: "Faltam passos ou não têm fonte oficial.",
        meets: "Forma jurídica, registos, licenças, autorizações e EIN na lista, cada um com um site oficial.",
        exceeds: "Indica que passos custam dinheiro e para que serviço ligar com dúvidas."
      },
      {
        name: "Financiamento e ajuda gratuita",
        objective: "O5",
        notYet: "Menos de três opções reais, ou inclui uma oferta que pede uma taxa adiantada.",
        meets: "Pelo menos três opções reais de financiamento ou de ajuda gratuita, com a forma de as contactar.",
        exceeds: "Os custos para começar foram reduzidos e há uma consulta marcada com um conselheiro."
      },
      {
        name: "Roteiro de 90 dias",
        objective: "O6",
        notYet: "Não tem datas, ou os passos estão fora de ordem.",
        meets: "Passos de preparação, teste e lançamento, cada um com uma data.",
        exceeds: "Indica o nome de um parceiro de acompanhamento e as revisões semanais."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que registam um negócio ou obtêm um EIN em 90 dias (inquérito de seguimento)",
      "Alunos que fazem a primeira venda em 90 dias",
      "Alunos que se reúnem com o SCORE, um Centro de Desenvolvimento de Pequenas Empresas ou outro conselheiro gratuito em 30 dias",
      "Alunos que dizem ter evitado uma burla de financiamento ou de subsídios"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini",
      "Sites oficiais: sba.gov, irs.gov e as páginas de negócios do seu estado e da sua cidade",
      "Papel, um caderno ou um documento gratuito para o pacote de lançamento",
      "Cerca de 60 minutos para as lições e as verificações, mais uma semana para falar com clientes"
    ],
    facilitatorNotes: [
      "Dê aos alunos uma semana entre o Capítulo 1 e o Capítulo 2 para terem as suas conversas com clientes.",
      "Lembre aos alunos que isto não é aconselhamento jurídico nem fiscal; ponha-os em contacto com o SCORE, um Centro de Desenvolvimento de Pequenas Empresas ou um centro de negócios local.",
      "Avise sobre as burlas de financiamento: os subsídios e os EIN verdadeiros nunca exigem uma taxa adiantada paga a terceiros.",
      "Lembre aos alunos em liberdade condicional ou com pena suspensa que verifiquem as suas condições antes de escolher um negócio.",
      "Avalie o pacote de lançamento com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
