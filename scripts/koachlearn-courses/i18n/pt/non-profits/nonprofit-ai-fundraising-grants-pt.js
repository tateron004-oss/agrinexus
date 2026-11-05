"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-ai-fundraising-grants.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: Grants.gov, SAM.gov, Candid and the IRS stay as written.

module.exports = {
  id: "nonprofit-ai-fundraising-grants-pt",
  lang: "pt",
  translationOf: "nonprofit-ai-fundraising-grants",
  category: "Non Profits",
  name: "IA para Angariação de Fundos e Candidaturas a Subsídios",
  skills: "Encontrar oportunidades de subsídios, Ler as orientações do financiador, Redigir uma declaração de necessidade com IA, Escrever apelos a doadores com IA, Verificar e personalizar cada rascunho",
  outcome: "encontrar um subsídio adequado ao seu programa, usar IA para redigir uma declaração de necessidade e uma descrição do programa que sigam as orientações do financiador, e escrever um e-mail de apelo a doadores, verificando cada dado e mantendo privadas as informações dos doadores.",
  about: [
    "Este curso é para líderes de organizações sem fins lucrativos e de organizações religiosas, pessoal de angariação de fundos e voluntários que angariam dinheiro e escrevem candidaturas a subsídios, muitas vezes com pouco tempo e uma equipa pequena.",
    "Vai aprender onde encontrar subsídios, como ler as orientações de um financiador, como usar IA para redigir as secções mais comuns de uma candidatura e os apelos a doadores, e como verificar e personalizar cada rascunho para que seja honesto e soe como você.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa prática. A IA faz o rascunho; você decide, verifica e assina. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha uma oportunidade de subsídio real adequada a um programa que gere. Com IA, redija uma declaração de necessidade (cerca de 250 palavras) e uma descrição do programa que sigam as orientações do financiador, usando só dados dos seus registos e de fontes que verificou. Depois redija um e-mail de apelo a doadores de 150 palavras para o mesmo programa, com marcadores no lugar dos dados dos doadores, e reveja os dois para que soem como a sua organização.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Líderes de organizações sem fins lucrativos e de organizações religiosas, pessoal de angariação de fundos e voluntários que angariam dinheiro e escrevem candidaturas a subsídios, muitas vezes com pouco tempo e uma equipa pequena.",
    startingPoint: "Conhecem bem os seus programas e a sua comunidade e já escreveram alguns apelos ou pequenas candidaturas a subsídios. Muitos têm pouco tempo para pesquisar e escrever, e poucos usaram IA para candidaturas.",
    gap: "Os prazos das candidaturas e os apelos levam horas que uma equipa pequena não tem, e um anexo esquecido ou uma afirmação falsa pode custar o dinheiro e a confiança do financiador. Os alunos precisam de usar IA para encontrar boas oportunidades, ler orientações e redigir mais depressa, mantendo cada dado verdadeiro e os dados dos doadores privados.",
    constraints: [
      "Honestidade: cada número vem de um registo ou de uma fonte verificada; a IA nunca inventa resultados, parceiros ou apoios públicos",
      "Privacidade: listas de doadores, nomes e históricos de doações ficam fora das ferramentas de IA",
      "Os subsídios federais dos EUA exigem registo no SAM.gov, que é gratuito e leva tempo",
      "As afirmações fiscais e legais são verificadas com um contabilista ou nas orientações oficiais do IRS",
      "Tempo: pessoal e voluntários ocupados, por isso cada lição dura cerca de 5 minutos"
    ],
    prerequisites: "\"Introdução à IA para Organizações sem Fins Lucrativos\", ou alguma experiência a usar um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um dos seus programas", action: "encontrar pelo menos duas oportunidades de subsídio adequadas a ele, usando o Grants.gov, o Candid ou financiadores locais", standard: "com a elegibilidade verificada em cada aviso" },
    { id: "O2", condition: "Com as orientações públicas de um financiador", action: "criar, com a ajuda da IA, uma lista de verificação de cada secção, limite, anexo e prazo", standard: "comparada linha a linha com o próprio documento do financiador" },
    { id: "O3", condition: "Com os seus próprios dados e fontes verificadas", action: "redigir com IA uma declaração de necessidade e uma descrição do programa", standard: "com cada número a vir dos seus registos ou de uma fonte que verificou" },
    { id: "O4", condition: "Para um programa", action: "escrever um e-mail curto de apelo a doadores com uma história, o que uma doação faz e um pedido claro", standard: "com marcadores no lugar dos dados dos doadores" },
    { id: "O5", condition: "Com diferentes tipos de doadores", action: "criar modelos de agradecimento com marcadores que você mesmo personaliza", standard: "com nomes e valores acrescentados só na sua base de dados de doadores ou na impressão em série" },
    { id: "O6", condition: "Antes de uma candidatura ou de um apelo ser enviado", action: "verificar cada número, afirmação, autorização para usar uma história e limite de palavras", standard: "sem resultados, parceiros ou apoios públicos inventados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Subsídios com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar subsídios adequados à sua missão",
          minutes: 5,
          goal: "Encontrar pelo menos duas oportunidades de subsídio adequadas a um dos seus programas.",
          text: [
            "Os subsídios vêm de três fontes principais: o governo (federal, estadual e local), as fundações privadas e familiares, e as empresas. Nos Estados Unidos, os subsídios federais estão listados no Grants.gov. Cada um tem um aviso de oportunidade de financiamento, chamado NOFO, com uma secção que diz quem é elegível.",
            "Para se candidatar a subsídios federais, a sua organização tem primeiro de se registar como entidade no SAM.gov, que lhe dá um Identificador Único de Entidade (UEI). O Grants.gov diz que o registo é gratuito. Pode levar tempo, por isso comece cedo, e nunca pague a uma empresa que diz que faz o registo por si mediante uma taxa.",
            "Para as fundações, o Candid (candid.org) permite pesquisar organizações sem fins lucrativos e financiadores; algumas funções exigem um plano pago, e muitas bibliotecas públicas oferecem acesso. Veja também a fundação comunitária da sua zona, as empresas locais e a sua igreja ou rede religiosa."
          ],
          steps: ["Escolha um programa que precisa de financiamento.", "Pesquise no Grants.gov oportunidades federais nessa área.", "Pesquise no Candid e na sua fundação comunitária financiadores locais.", "Leia a secção de elegibilidade de cada oportunidade.", "Anote duas que sejam adequadas, com os prazos."],
          words: [["Subsídio", "dinheiro dado para um fim e que não tem de ser devolvido."], ["NOFO", "aviso de oportunidade de financiamento (em inglês, notice of funding opportunity): a descrição oficial de um subsídio federal dos EUA e das suas regras."], ["UEI", "Identificador Único de Entidade (em inglês, Unique Entity ID): o número que o SAM.gov dá à sua organização para financiamentos federais."]],
          slides: [
            { title: "De onde vêm os subsídios", bullets: ["Governo: federal, estadual, local", "Fundações", "Empresas e redes religiosas"] },
            { title: "Subsídios federais", bullets: ["Listados no Grants.gov", "Leia a secção de elegibilidade do NOFO", "Registe-se primeiro no SAM.gov: é gratuito"] },
            { title: "Fundações", bullets: ["Pesquise no Candid (candid.org)", "Pergunte na sua biblioteca sobre o acesso", "Veja a sua fundação comunitária"] }
          ],
          sources: [
            { name: "Grants.gov: elegibilidade para subsídios", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
            { name: "Grants.gov: registo de candidatos", url: "https://www.grants.gov/applicants/applicant-registration" },
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "Candid", url: "https://candid.org/" }
          ],
          tryIt: "Escolha um dos seus programas. Encontre duas oportunidades de subsídio adequadas a ele, uma federal ou estadual e uma de uma fundação ou local. Escreva numa linha o nome de cada financiador, o prazo e a elegibilidade.",
          youCanNow: "encontrar oportunidades de subsídio adequadas à sua missão e saber que registo os subsídios federais exigem.",
          quickCheck: [
            { objective: "O1", q: "Quais são as três fontes principais de subsídios?", options: ["Governo, fundações e empresas", "Bancos, cartões de crédito e empréstimos", "Doadores, voluntários e membros da direção", "Escolas, hospitais e tribunais"], answer: 0, why: "Os subsídios vêm do governo, das fundações privadas e familiares, e das empresas." },
            { objective: "O1", q: "Quer pesquisar fundações no Candid mas não pode pagar um plano. O que pode tentar?", options: ["Desistir das fundações", "Perguntar na biblioteca pública, porque muitas oferecem acesso", "Pagar a um desconhecido por uma lista", "Pedir à IA uma lista de todas as fundações"], answer: 1, why: "Muitas bibliotecas públicas oferecem acesso às funções pagas do Candid." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ler as orientações do financiador com a ajuda da IA",
          minutes: 5,
          goal: "Transformar as orientações de um financiador numa lista de verificação do que tem de enviar.",
          text: [
            "Cada financiador diz o que quer: secções, limites de palavras, formato do orçamento, anexos e prazos. Se faltar um, a candidatura pode ser excluída antes de alguém ler o seu trabalho.",
            "As orientações são públicas, por isso pode colá-las num assistente de IA e pedir: \"Transforme estas orientações numa lista de verificação: cada secção, o seu limite de palavras ou de páginas, cada anexo e cada prazo.\"",
            "Depois compare a lista com o original. A IA pode deixar de fora um item ou mudar uma data. O documento do próprio financiador vale sempre mais."
          ],
          steps: ["Copie as orientações públicas do financiador.", "Peça à IA uma lista de secções, limites, anexos e prazos.", "Compare a lista linha a linha com o original.", "Corrija o que faltar ou estiver errado."],
          words: [["Orientações", "as regras do financiador sobre o que enviar e como."], ["Anexo", "um documento extra enviado com a candidatura, como um orçamento ou uma carta do IRS."]],
          slides: [
            { title: "Os financiadores dizem o que querem", bullets: ["Secções e limites de palavras", "Formato do orçamento e anexos", "Prazos"] },
            { title: "Peça à IA uma lista de verificação", bullets: ["Cole as orientações públicas", "Secções, limites, anexos, prazos"] },
            { title: "Verifique-a", bullets: ["Compare linha a linha", "O documento do financiador vale sempre mais"] }
          ],
          tryIt: "Pegue nas orientações de uma das suas duas oportunidades. Peça uma lista de verificação a um assistente de IA, depois compare-a com o original e corrija os erros.",
          youCanNow: "transformar as orientações de um financiador numa lista de verificação exata do que enviar.",
          quickCheck: [
            { objective: "O2", q: "Porque pode colar as orientações de um financiador num assistente de IA?", options: ["Porque as ferramentas de IA são sempre privadas", "Porque o financiador disse que sim", "Porque as orientações são públicas", "Porque a IA vai enviar a candidatura por si"], answer: 2, why: "As orientações são públicas, por isso colá-las não partilha nada privado." },
            { objective: "O2", q: "A lista da IA diz que o prazo é 15 de março, mas as orientações dizem 1 de março. O que faz?", options: ["Usa 15 de março", "Escolhe uma data no meio", "Pergunta à IA até ela concordar", "Usa 1 de março, do documento do financiador"], answer: 3, why: "A IA pode mudar uma data; o documento do próprio financiador vale sempre mais." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Redigir uma declaração de necessidade e uma descrição do programa",
          minutes: 6,
          goal: "Usar IA para redigir uma declaração de necessidade e uma descrição do programa a partir dos seus próprios dados.",
          text: [
            "A declaração de necessidade diz que problema resolve, quem é afetado e porquê agora. A descrição do programa diz o que vai fazer, para quem e o que vai mudar.",
            "Dê à IA os seus dados, não uma página em branco: \"Usando só estes dados, redija uma declaração de necessidade de 250 palavras para um subsídio de [tipo de financiador]: [os seus dados e estatísticas com fonte]. Não acrescente estatísticas que eu não lhe dei.\"",
            "Depois reveja com cuidado. Acrescente uma história real (com autorização e sem dados que identifiquem a pessoa), use as palavras e as prioridades do financiador e confirme que cada número vem dos seus registos ou de uma fonte que verificou. Muitos financiadores perguntam se foi usada IA; responda com honestidade."
          ],
          steps: ["Junte os seus dados: quem serve, números, resultados, estatísticas com fonte.", "Peça à IA um rascunho usando só esses dados, dentro do limite de palavras.", "Acrescente uma história real com autorização e sem dados que identifiquem a pessoa.", "Use as prioridades e as palavras do financiador.", "Confirme de onde vem cada número: um registo ou uma fonte."],
          words: [["Declaração de necessidade", "a secção da candidatura que explica o problema e porque é importante agora."], ["Descrição do programa", "a secção que explica o que vai fazer e o que vai mudar."], ["Resultado", "a mudança na vida das pessoas que o seu programa procura alcançar."]],
          slides: [
            { title: "Duas secções principais", bullets: ["Necessidade: o problema, quem, porquê agora", "Programa: o que faz, para quem, o que muda"] },
            { title: "Dê à IA os seus dados", bullets: ["\"Usando só estes dados...\"", "\"Não acrescente estatísticas que eu não lhe dei\"", "Respeite o limite de palavras"] },
            { title: "Reveja com cuidado", bullets: ["Acrescente uma história real com autorização", "Use as prioridades do financiador", "Confirme cada número"] },
            { title: "Seja honesto", bullets: ["Diga a verdade se perguntarem se usou IA"] }
          ],
          tryIt: "Junte cinco dados sobre um programa. Peça à IA uma declaração de necessidade de 250 palavras usando só esses dados. Marque cada número e confirme de onde veio.",
          youCanNow: "redigir com IA a declaração de necessidade de uma candidatura a partir dos seus próprios dados verificados.",
          quickCheck: [
            { objective: "O3", q: "O que diz uma descrição do programa?", options: ["O que vai fazer, para quem e o que vai mudar", "As moradas dos membros da direção", "A sua lista de doadores", "Só o total do orçamento"], answer: 0, why: "Uma descrição do programa diz o que vai fazer, para quem e o que vai mudar." },
            { objective: "O3", q: "Quer acrescentar a história de uma família à sua declaração de necessidade. O que faz?", options: ["Usa o nome completo para parecer real", "Pede autorização e tira os dados que a identificam", "Deixa a IA inventar uma história", "Copia uma história de outro grupo"], answer: 1, why: "Uma história real precisa de autorização e de não ter dados que identifiquem as pessoas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Subsídios com IA",
        questions: [
          { objective: "O1", q: "Onde estão listadas as oportunidades de subsídios federais dos EUA?", options: ["Grants.gov", "Num grupo de redes sociais", "Na pasta de spam do seu e-mail", "Na lista telefónica"], answer: 0, why: "O Grants.gov lista as oportunidades de financiamento federal." },
          { objective: "O1", q: "Uma empresa oferece-se para o registar no SAM.gov mediante uma taxa. O que sabe?", options: ["Tem de pagar", "O registo no SAM.gov é gratuito, por isso registe-se você mesmo", "O SAM.gov é opcional", "Só as empresas se podem registar"], answer: 1, why: "O Grants.gov diz que o registo é gratuito." },
          { objective: "O2", q: "A lista da IA deixou de fora um anexo das orientações. Qual está certo?", options: ["A lista", "Nenhum", "As orientações do financiador", "O que for mais curto"], answer: 2, why: "O documento do próprio financiador vale sempre mais." },
          { objective: "O3", q: "Que pedido o protege de estatísticas inventadas?", options: ["\"Escreva uma declaração de necessidade.\"", "\"Faça-a impressionante.\"", "\"Acrescente números fortes.\"", "\"Usando só estes dados, redija... Não acrescente estatísticas que eu não lhe dei.\""], answer: 3, why: "Limitar a IA aos seus dados impede números inventados." },
          { objective: "O3", q: "O que explica uma declaração de necessidade?", options: ["O problema, quem é afetado e porquê agora", "Os nomes da direção", "O horário do escritório", "A lista de doadores"], answer: 0, why: "É esse o objetivo da secção de necessidade." }
        ]
      }
    },
    {
      name: "Capítulo 2: Doadores com IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever um apelo a doadores com IA",
          minutes: 5,
          goal: "Redigir um e-mail curto de apelo a doadores para um programa.",
          text: [
            "Um bom apelo é curto e concreto: uma pessoa ou uma necessidade, o que uma doação faz e um pedido claro. \"50 dólares pagam uma semana de explicações depois da escola\" funciona melhor do que \"por favor apoie o nosso trabalho\", mas só se o número for verdadeiro.",
            "Pedido: \"Escreva um e-mail de apelo a doadores de 150 palavras para o nosso programa de explicações depois da escola. Conte uma história curta sobre [um aluno, sem nome], diga o que [valor] paga e termine com um pedido claro e um link: [link para doar]. Tom caloroso e de esperança.\"",
            "Mantenha as listas de doadores, os nomes e os históricos de doações fora da ferramenta de IA. Use a sua base de dados de doadores ou o seu programa de e-mail para acrescentar os nomes depois de o rascunho estar final."
          ],
          steps: ["Escolha um programa e um dado verdadeiro sobre \"o que uma doação faz\".", "Peça à IA um apelo curto com uma história, o dado da doação e um pedido.", "Confirme cada valor no seu orçamento.", "Acrescente os nomes na sua base de dados de doadores, não na ferramenta de IA."],
          words: [["Apelo", "um pedido para que as pessoas doem."], ["Chamada à ação", "a única coisa clara que pede ao leitor que faça, como \"Doe hoje\"."]],
          slides: [
            { title: "Um apelo forte", bullets: ["Uma história ou uma necessidade", "O que uma doação faz: só números verdadeiros", "Um pedido claro"] },
            { title: "O pedido à IA", bullets: ["150 palavras, tom caloroso e de esperança", "História sem nomes", "Marcadores [valor] e [link para doar]"] },
            { title: "Proteja os doadores", bullets: ["Nada de listas de doadores na IA", "Acrescente os nomes na base de dados de doadores"] }
          ],
          tryIt: "Redija com IA um e-mail de apelo de 150 palavras para um programa. Confirme no seu orçamento que o valor de \"o que uma doação faz\" é verdadeiro.",
          youCanNow: "redigir com IA um apelo a doadores curto e honesto.",
          quickCheck: [
            { objective: "O4", q: "Quantos pedidos deve ter um bom apelo?", options: ["Cinco", "Nenhum", "Um pedido claro", "Um para cada programa"], answer: 2, why: "Um bom apelo tem uma pessoa ou necessidade, o que uma doação faz e um pedido claro." },
            { objective: "O4", q: "Quer que a IA escreva um apelo aos seus maiores doadores pelo nome. O que faz?", options: ["Cola a lista de doadores na IA", "Cola os nomes e os históricos de doações", "Desiste do apelo", "Escreve o rascunho com marcadores e depois acrescenta os nomes na base de dados de doadores"], answer: 3, why: "Mantenha as listas de doadores fora da IA; acrescente os nomes na sua base de dados depois de o rascunho estar final." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Personalizar agradecimentos e notícias",
          minutes: 4,
          goal: "Usar IA para fazer modelos de agradecimento e de notícias que você mesmo personaliza.",
          text: [
            "Os doadores que recebem um agradecimento rápido e sabem o que a sua doação fez têm mais probabilidade de voltar a doar. A IA pode ajudar a escrever modelos para diferentes doadores: quem doa pela primeira vez, quem doa todos os meses, voluntários que também doam e membros da igreja que deram para uma oferta especial.",
            "Peça: \"Escreva três modelos curtos de agradecimento: doador pela primeira vez, doador mensal e grande doador. Cada um com menos de 100 palavras, caloroso, com os marcadores [nome], [valor] e [programa] e uma frase sobre o impacto.\"",
            "Preencha os nomes e os valores na sua base de dados de doadores ou na impressão em série. Acrescente uma linha escrita à mão quando puder. As pessoas notam quando nenhum ser humano esteve envolvido."
          ],
          steps: ["Liste os tipos de doadores a quem agradece.", "Peça à IA um modelo para cada um, com marcadores.", "Acrescente a cada um uma frase verdadeira sobre o impacto.", "Personalize na sua base de dados de doadores e acrescente uma linha pessoal."],
          words: [["Modelo", "um rascunho para usar muitas vezes, com espaços para preencher."], ["Impressão em série (mail merge)", "uma ferramenta que põe nomes e dados numa carta para muitas pessoas."], ["Fidelização de doadores", "manter os doadores a doar ano após ano."]],
          slides: [
            { title: "Agradeça depressa, mostre o impacto", bullets: ["Doadores agradecidos voltam a doar", "Diga o que a doação fez"] },
            { title: "Modelos por tipo de doador", bullets: ["Primeira vez, mensal, grande doador", "Menos de 100 palavras, com marcadores"] },
            { title: "Torne-o pessoal", bullets: ["Preencha na sua base de dados de doadores", "Acrescente uma linha escrita à mão"] }
          ],
          tryIt: "Peça à IA três modelos de agradecimento para três tipos de doadores. Acrescente a cada um uma frase verdadeira sobre o impacto.",
          youCanNow: "criar modelos de agradecimento com IA e personalizá-los com segurança.",
          quickCheck: [
            { objective: "O5", q: "Que doadores têm mais probabilidade de voltar a doar?", options: ["Doadores que recebem um agradecimento rápido e sabem o que a doação fez", "Doadores que nunca recebem resposta", "Doadores que recebem a mesma carta que todos", "Doadores que recebem um agradecimento um ano depois"], answer: 0, why: "Um agradecimento rápido e a notícia do que a doação fez tornam mais provável que os doadores voltem a doar." },
            { objective: "O5", q: "Tem pronto um modelo de agradecimento para um doador mensal. O que o torna mais humano?", options: ["Enviá-lo duas vezes", "Acrescentar uma linha escrita à mão quando puder", "Usar letra maior", "Tirar a frase sobre o impacto"], answer: 1, why: "As pessoas notam quando nenhum ser humano esteve envolvido; uma linha escrita à mão ajuda." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Verificar, rever e manter a honestidade",
          minutes: 5,
          goal: "Fazer uma verificação final de qualquer rascunho de candidatura ou de apelo antes de ser enviado.",
          text: [
            "Antes de enviar qualquer coisa a um financiador ou a um doador, faça uma verificação final. Cada número vem de um registo. Cada afirmação é verdadeira. Cada história tem autorização. Os limites de palavras são respeitados. Soa como a sua organização, não como um robô.",
            "Nunca deixe a IA inventar resultados, parceiros ou apoios públicos. Um financiador que encontra uma afirmação falsa pode nunca mais confiar em si.",
            "Leia o texto em voz alta e peça a um colega que conhece o programa para o ler. Para afirmações legais ou fiscais, como o que é dedutível nos impostos, confirme com o seu contabilista ou nas orientações oficiais do IRS (a autoridade fiscal dos EUA)."
          ],
          steps: ["Confirme de onde vem cada número: um registo ou uma fonte.", "Confirme que cada história tem autorização e não tem dados que identifiquem a pessoa.", "Verifique os limites de palavras e as secções obrigatórias.", "Leia o texto em voz alta.", "Peça a um colega que conhece o programa para o rever."],
          words: [["Apoio público", "uma declaração pública de apoio feita por uma pessoa ou um grupo."], ["Dedutível nos impostos", "uma doação que o doador pode descontar do rendimento tributável, segundo as regras fiscais."]],
          slides: [
            { title: "Verificação final", bullets: ["Cada número vem de um registo", "Cada história tem autorização", "Limites de palavras respeitados"] },
            { title: "Nunca invente", bullets: ["Resultados", "Parceiros", "Apoios públicos"] },
            { title: "Últimos passos", bullets: ["Leia em voz alta", "Um colega revê", "Afirmações fiscais: confirme com um contabilista ou o IRS"] }
          ],
          sources: [
            { name: "IRS: Contribuições de caridade", url: "https://www.irs.gov/charities-non-profits/charitable-contributions" }
          ],
          tryIt: "Tarefa final: para uma oportunidade de subsídio real, termine a sua declaração de necessidade e uma descrição do programa que sigam as orientações, e termine um apelo a doadores de 150 palavras para o mesmo programa. Faça a verificação final aos dois.",
          youCanNow: "produzir com a ajuda da IA secções de candidatura e apelos a doadores honestos e verificados.",
          quickCheck: [
            { objective: "O6", q: "Qual é uma boa forma de apanhar um rascunho que soa como um robô?", options: ["Torná-lo mais comprido", "Acrescentar mais estatísticas", "Lê-lo em voz alta", "Enviá-lo logo"], answer: 2, why: "Leia-o em voz alta e peça a um colega que conhece o programa para o ler." },
            { objective: "O6", q: "O seu rascunho diz que serviu 300 jovens, mas nenhum registo mostra isso. O que faz?", options: ["Mantém; soa bem", "Arredonda para 250", "Pergunta à IA de onde veio o número", "Tira-o ou usa o número dos seus registos"], answer: 3, why: "Cada número tem de vir de um registo ou de uma fonte." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Doadores com IA",
        questions: [
          { objective: "O4", q: "Que frase de apelo é a mais forte, se for verdadeira?", options: ["\"Por favor apoie o nosso trabalho.\"", "\"50 dólares pagam uma semana de explicações depois da escola.\"", "\"Precisamos de dinheiro.\"", "\"Doe se puder.\""], answer: 1, why: "Um impacto concreto e verdadeiro ajuda os doadores a ver o que a sua doação faz." },
          { objective: "O5", q: "Onde acrescenta os nomes dos doadores às cartas de agradecimento?", options: ["Cola a lista de doadores na IA", "Nas redes sociais", "Na sua base de dados de doadores ou na impressão em série", "Em lado nenhum"], answer: 2, why: "Manter os dados dos doadores no seu próprio sistema protege a privacidade." },
          { objective: "O6", q: "A IA acrescenta um parceiro com quem não trabalha. O que faz?", options: ["Mantém, soa bem", "Pergunta ao parceiro mais tarde", "Diminui a frase", "Tira-o"], answer: 3, why: "Nunca deixe a IA inventar parceiros ou apoios públicos." },
          { objective: "O6", q: "Um rascunho diz que as doações são dedutíveis nos impostos. Onde confirma?", options: ["Com um contabilista ou nas orientações oficiais do IRS", "Noutra conversa com a IA", "Com um doador", "Em lado nenhum"], answer: 0, why: "As afirmações fiscais precisam de uma fonte oficial ou de um profissional." },
          { objective: "O6", q: "Porque pedir a um colega que conhece o programa para ler o rascunho?", options: ["Para dividir a culpa", "Ele pode apanhar dados falsos ou em falta", "Para o tornar mais comprido", "Não serve para nada"], answer: 1, why: "Alguém que conhece o programa encontra os erros." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Angariação de Fundos e Candidaturas a Subsídios",
    questions: [
      { objective: "O1", q: "Um subsídio é:", options: ["Um empréstimo", "Uma conta de impostos", "Dinheiro para um fim que não tem de ser devolvido", "Uma lista de doadores"], answer: 2, why: "Os subsídios não são devolvidos." },
      { objective: "O1", q: "NOFO quer dizer:", options: ["Novo escritório de operações", "Fórum aberto sem fins lucrativos", "Aviso de obrigação financeira", "Aviso de oportunidade de financiamento"], answer: 3, why: "Um NOFO descreve um subsídio federal e as suas regras." },
      { objective: "O1", q: "Antes de se candidatar a um subsídio federal, a sua organização tem de:", options: ["Registar-se como entidade no SAM.gov", "Comprar uma licença especial", "Contratar um lobista", "Pagar uma taxa ao Grants.gov"], answer: 0, why: "O Grants.gov exige primeiro o registo no SAM.gov." },
      { objective: "O1", q: "O SAM.gov dá à sua organização:", options: ["Um computador portátil grátis", "Um Identificador Único de Entidade (UEI)", "Um subsídio", "Um reembolso de impostos"], answer: 1, why: "O UEI identifica a sua organização para financiamentos federais." },
      { objective: "O1", q: "Qual é um bom lugar para procurar fundações que financiam?", options: ["Uma aplicação do tempo", "Um site de compras", "Candid", "Um jogo"], answer: 2, why: "O Candid lista organizações sem fins lucrativos e financiadores." },
      { objective: "O1", q: "Em que parte de um NOFO encontra quem se pode candidatar?", options: ["No logótipo", "No rodapé da página", "Na cor da capa", "Na secção de elegibilidade"], answer: 3, why: "Cada NOFO tem uma secção de elegibilidade." },
      { objective: "O2", q: "Porque transformar as orientações numa lista de verificação?", options: ["Se faltar um item, a candidatura pode ser excluída", "Os financiadores gostam de listas", "Torna a candidatura mais comprida", "É exigido por lei"], answer: 0, why: "Uma lista de verificação ajuda a enviar tudo." },
      { objective: "O2", q: "Uma lista da IA e as orientações do financiador não coincidem. Confie:", options: ["Na IA", "Nas orientações do financiador", "No que for mais fácil", "Em nenhum; adivinhe"], answer: 1, why: "O documento do próprio financiador vale mais." },
      { objective: "O3", q: "A melhor forma de começar uma declaração de necessidade com IA é:", options: ["Pedir-lhe que invente números fortes", "Não lhe dar nada", "Dar-lhe os seus dados e dizer que não acrescente estatísticas", "Colar os processos dos utentes"], answer: 2, why: "Os seus dados mantêm o rascunho verdadeiro." },
      { objective: "O3", q: "Uma descrição do programa explica:", options: ["Só o seu número fiscal", "O tempo que faz", "Quem faz parte da direção", "O que vai fazer, para quem e o que vai mudar"], answer: 3, why: "É essa a sua função numa candidatura." },
      { objective: "O3", q: "Quer incluir a história de um utente. Precisa de:", options: ["Autorização e nenhum dado que o identifique", "O nome completo e a morada", "Nada", "Uma foto do documento de identidade"], answer: 0, why: "As histórias precisam de consentimento e de privacidade." },
      { objective: "O3", q: "Um financiador pergunta se foi usada IA. Você deve:", options: ["Dizer que não", "Responder com honestidade", "Ignorar a pergunta", "Pedir à IA que responda"], answer: 1, why: "A honestidade protege a confiança." },
      { objective: "O4", q: "Um apelo forte tem:", options: ["Dez pedidos", "Nenhum pedido", "Uma história, o que uma doação faz e um pedido claro", "Um relatório anual longo"], answer: 2, why: "Curto e concreto funciona melhor." },
      { objective: "O4", q: "O que é uma chamada à ação?", options: ["Uma chamada telefónica", "Um aviso legal", "Uma votação da direção", "A única coisa clara que pede ao leitor que faça"], answer: 3, why: "Por exemplo, \"Doe hoje\"." },
      { objective: "O4", q: "O que NUNCA deve pôr numa ferramenta de IA?", options: ["A sua lista de doadores com os históricos de doações", "\"Torne-o mais caloroso\"", "O nome público do programa", "Um limite de palavras"], answer: 0, why: "Os dados dos doadores são privados." },
      { objective: "O5", q: "Porque fazer modelos de agradecimento por tipo de doador?", options: ["Para poupar papel", "Doadores diferentes precisam de mensagens diferentes", "Os doadores exigem", "A IA não consegue escrever um"], answer: 1, why: "Quem doa pela primeira vez e quem doa todos os meses têm uma relação diferente com a organização." },
      { objective: "O5", q: "A impressão em série (mail merge) é:", options: ["A fusão de duas organizações sem fins lucrativos", "Uma taxa dos correios", "Uma ferramenta que põe nomes em cartas para muitas pessoas", "Um modelo de IA"], answer: 2, why: "Personaliza as cartas fora da ferramenta de IA." },
      { objective: "O5", q: "O que torna um agradecimento mais humano?", options: ["Mais marcadores", "Um modelo mais comprido", "Enviá-lo tarde", "Uma linha pessoal, escrita à mão"], answer: 3, why: "As pessoas notam um toque humano verdadeiro." },
      { objective: "O6", q: "Numa verificação final, cada número tem de:", options: ["Vir de um registo ou de uma fonte", "Ser arredondado para cima", "Ser grande", "Vir da IA"], answer: 0, why: "Números verdadeiros mantêm a confiança." },
      { objective: "O6", q: "Se um financiador encontrar uma afirmação falsa:", options: ["Não acontece nada", "Pode nunca mais confiar em si", "Dá mais dinheiro", "É normal"], answer: 1, why: "A confiança é difícil de reconstruir." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [2, 6, 8, 12, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Subsídio adequado", objective: "O1", notYet: "O subsídio não é adequado ao programa, ou a elegibilidade não foi verificada.", meets: "Uma oportunidade real adequada ao programa, com a elegibilidade verificada.", exceeds: "Indica uma segunda oportunidade e o prazo de cada uma." },
      { name: "Segue as orientações", objective: "O2", notYet: "Falta uma secção, um limite ou um anexo obrigatório.", meets: "Os rascunhos seguem a lista de verificação, as secções e os limites de palavras do financiador.", exceeds: "A lista de verificação foi comparada linha a linha com o documento do financiador." },
      { name: "Necessidade e programa a partir de dados", objective: "O3", notYet: "Uma estatística ou um resultado não vem de nenhum registo ou fonte.", meets: "Declaração de necessidade de cerca de 250 palavras e uma descrição do programa só com dados verificados.", exceeds: "Usa as palavras e as prioridades do financiador e inclui uma história autorizada." },
      { name: "Apelo a doadores", objective: "O4", notYet: "Não há um pedido claro, ou há dados de doadores no pedido à IA.", meets: "Cerca de 150 palavras com uma história, o que uma doação faz e um pedido claro, usando marcadores.", exceeds: "O valor e o que ele paga vêm dos custos reais do programa." },
      { name: "Honesto e com a nossa voz", objective: "O6", notYet: "Fica um resultado, parceiro ou apoio público inventado.", meets: "Cada afirmação é verdadeira e os dois textos soam como a organização.", exceeds: "Um colega que conhece o programa leu e aprovou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Candidaturas a subsídios enviadas em 90 dias (inquérito de seguimento)",
      "Subsídios atribuídos e dinheiro angariado com apelos, segundo as organizações",
      "Alunos que começam outro curso da Koach Learn para organizações sem fins lucrativos em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "Um assistente de IA gratuito",
      "Os dados e registos do seu programa, e as orientações públicas de um financiador",
      "Cerca de 60 minutos no total, mais tempo para rever os rascunhos"
    ],
    facilitatorNotes: [
      "Peça aos alunos que tragam para a sessão uma oportunidade de subsídio real e os números do seu programa.",
      "Lembre aos alunos que nunca colem listas de doadores, nomes ou históricos de doações em ferramentas de IA.",
      "Avise os alunos sobre empresas que cobram para os registar no SAM.gov; é gratuito.",
      "Junte os alunos aos pares para lerem em voz alta os rascunhos um do outro e confirmarem a fonte de cada número.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
