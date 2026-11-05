"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-ai-impact-storytelling.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-ai-impact-storytelling-pt",
  lang: "pt",
  translationOf: "nonprofit-ai-impact-storytelling",
  category: "Non Profits",
  name: "IA para Contar Histórias de Impacto Social",
  skills: "Obter consentimento informado, Recolher uma história com dignidade, Organizar uma história com uma estrutura simples, Acrescentar números honestos, Usar IA para escrever e adaptar histórias, Verificar se as histórias são verdadeiras e respeitosas",
  outcome: "obter o consentimento por escrito de uma pessoa que o seu programa apoia, organizar a história dela com uma estrutura simples e um número honesto, usar um assistente de IA para escrever um rascunho e adaptá-lo para um boletim, uma publicação nas redes sociais e um relatório para um financiador, e verificar se é verdadeiro e respeita a dignidade da pessoa antes de o partilhar.",
  about: [
    "Este curso é para funcionários, voluntários e líderes de organizações sem fins lucrativos e de organizações religiosas que mostram a diferença que o seu trabalho faz a doadores, financiadores, membros e ao público.",
    "As histórias levam as pessoas a dar e a ajudar, mas pertencem às pessoas que estão nelas. Vai aprender a pedir autorização da forma certa, contar uma história com dignidade, apoiá-la com números honestos e usar IA (como o ChatGPT, o Microsoft Copilot ou o Google Gemini) para escrever e adaptar a história sem colocar na IA os dados privados de ninguém.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escolha uma história real do programa (com consentimento por escrito) ou uma história de prática totalmente inventada. Escreva os factos com a estrutura Antes, Ponto de viragem, Depois e acrescente um número honesto do programa. Use IA com marcadores para escrever uma história de 150 palavras para o boletim, uma publicação de 40 palavras para as redes sociais e um parágrafo de 100 palavras para um relatório ao financiador. Verifique as três com o formulário de consentimento e a lista de verificação da dignidade, e corrija tudo o que não passar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Funcionários, voluntários e líderes de organizações sem fins lucrativos e de organizações religiosas que mostram a diferença que o seu trabalho faz a doadores, financiadores, membros e ao público.",
    startingPoint: "Ouvem histórias fortes das pessoas que apoiam e partilham algumas em boletins ou publicações. Muitos não têm um processo de consentimento por escrito e ainda não pensaram na dignidade das palavras nem nos riscos de usar IA com histórias reais.",
    gap: "As histórias tocam doadores e financiadores, mas uma história partilhada sem consentimento, com palavras de pena ou com detalhes inventados pode magoar a pessoa e a confiança na organização. Os alunos precisam de um processo seguro, do consentimento até à verificação final, usando IA para escrever e adaptar histórias sem expor ninguém.",
    constraints: [
      "Consentimento informado por escrito antes de usar qualquer história, fotografia ou citação; para crianças, dos pais ou do tutor",
      "Algumas histórias não devem ser contadas, mesmo com consentimento, como as de sobreviventes de abusos ou de pessoas com processos de imigração",
      "Privacidade: nada de nomes completos, moradas, dados de saúde ou notas do processo em ferramentas de IA",
      "As imagens feitas por IA são identificadas como tal e nunca substituem clientes reais",
      "Tempo: cerca de 60 minutos no total, em lições de 5 minutos"
    ],
    prerequisites: "\"Introdução à IA para Organizações sem Fins Lucrativos\", ou alguma experiência a usar um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Antes de usar a história, a fotografia ou as palavras de alguém", action: "pedir e registar o consentimento informado por escrito, incluindo onde vai ser partilhada e como a pessoa quer ser identificada", standard: "dizendo à pessoa que pode dizer não ou mudar de ideias sem perder a ajuda" },
    { id: "O2", condition: "Com o rascunho de uma história", action: "reescrevê-la para que a pessoa seja a heroína, usando palavras que põem a pessoa primeiro e sem palavras de pena", standard: "deixando de fora detalhes que a possam identificar ou envergonhar" },
    { id: "O3", condition: "Com as notas de uma história", action: "organizar a história em Antes, Ponto de viragem, Depois e acrescentar um número honesto do programa", standard: "com o número tirado dos seus próprios registos verificados" },
    { id: "O4", condition: "Com as notas da sua história", action: "escrever um pedido à IA com marcadores e detalhes gerais para obter um rascunho", standard: "sem nome completo, morada, dados de saúde nem notas do processo no pedido" },
    { id: "O5", condition: "Com o rascunho de uma história", action: "adaptá-lo para uma história de boletim, uma publicação nas redes sociais e um parágrafo de relatório ao financiador", standard: "usando cada versão só onde o formulário de consentimento permite" },
    { id: "O6", condition: "Antes de uma história ser publicada", action: "verificar a verdade, o consentimento, a dignidade e os números e corrigir tudo o que falhar", standard: "com cada detalhe igual às suas notas e ao formulário de consentimento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Histórias que respeitam as pessoas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Primeiro, o consentimento",
          minutes: 5,
          goal: "Pedir e registar o consentimento informado antes de usar a história, a fotografia ou as palavras de alguém.",
          text: [
            "A história de uma pessoa é dela. Antes de a partilhar, peça o consentimento informado: a pessoa entende o que vai partilhar, onde (boletim, site, redes sociais, relatórios a financiadores), durante quanto tempo, e que pode dizer não ou mudar de ideias sem perder nenhuma ajuda.",
            "Obtenha o consentimento por escrito com um formulário simples e, para crianças, obtenha o consentimento dos pais ou do tutor. Deixe a pessoa escolher: nome verdadeiro, só o primeiro nome ou um nome trocado; com fotografia ou sem fotografia. Anote o que a pessoa aceitou e guarde-o junto da história.",
            "Algumas histórias não devem ser contadas, mesmo com consentimento, se partilhá-las puder pôr a pessoa em risco, por exemplo sobreviventes de abusos, pessoas com processos de imigração ou pessoas em recuperação. Na dúvida, pergunte ao seu diretor. A sua organização pode ter o seu próprio formulário de consentimento; use-o. Peça a um advogado ou à sua associação de organizações que reveja um formulário, se precisar."
          ],
          steps: ["Explique o que vai partilhar, onde e durante quanto tempo.", "Deixe claro que pode dizer não sem perder nenhuma ajuda.", "Deixe a pessoa escolher o nome, a fotografia e os detalhes.", "Peça uma assinatura (dos pais ou do tutor, para crianças).", "Guarde o formulário com a história e respeite qualquer mudança de ideias."],
          words: [["Consentimento informado", "um sim claro dado por alguém que entende exatamente como a sua história vai ser usada."], ["Tutor", "um adulto que é legalmente responsável por uma criança."]],
          slides: [
            { title: "A história pertence à pessoa", bullets: ["Pergunte antes de partilhar", "Dizer não nunca afeta a ajuda que recebe"] },
            { title: "O consentimento informado inclui", bullets: ["O que vai partilhar", "Onde e durante quanto tempo", "Escolhas sobre o nome e a fotografia", "O direito de mudar de ideias"] },
            { title: "Tenha-o por escrito", bullets: ["Um formulário simples e assinado", "Os pais ou o tutor, para crianças", "Guarde-o junto da história"] },
            { title: "Quando não partilhar", bullets: ["Se partilhar puder pôr a pessoa em risco", "Na dúvida, pergunte ao seu diretor"] }
          ],
          tryIt: "Escreva uma lista de consentimento de cinco linhas para a sua organização: o quê, onde, durante quanto tempo, escolhas sobre o nome e a fotografia, e o direito de dizer não. Compare-a com o formulário que a sua organização já usa, se houver.",
          youCanNow: "pedir e registar o consentimento informado antes de partilhar a história de alguém.",
          quickCheck: [
            { objective: "O1", q: "Que escolha de nome deve ser oferecida à pessoa?", options: ["Nome verdadeiro, só o primeiro nome ou um nome trocado", "Só o nome completo oficial", "Só uma fotografia sem nome", "O que os funcionários preferirem"], answer: 0, why: "Deixe a pessoa escolher como é identificada e se é usada uma fotografia." },
            { objective: "O1", q: "Uma sobrevivente de abusos quer partilhar a sua história, mas partilhá-la pode pô-la em risco. O que faz?", options: ["Partilha, porque ela aceitou", "Pergunta ao seu diretor, porque algumas histórias não devem ser contadas mesmo com consentimento", "Partilha com o nome completo dela", "Publica só nas redes sociais"], answer: 1, why: "Algumas histórias não devem ser contadas, mesmo com consentimento, se partilhá-las puder pôr a pessoa em risco." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Contar uma história com dignidade",
          minutes: 5,
          goal: "Reescrever uma história para que a pessoa seja a heroína, e não uma vítima.",
          text: [
            "Dignidade quer dizer mostrar as pessoas como capazes, com as suas próprias forças e escolhas, e não como vítimas indefesas. A pessoa é a heroína da história; a sua organização é quem ajuda.",
            "Use palavras que põem a pessoa primeiro (\"um homem em situação de sem-abrigo\", e não \"um sem-abrigo\"). Evite palavras de pena como \"coitado\", \"sofredor\" ou \"destroçado\". Não exagere. Use as palavras da própria pessoa entre aspas, quando ela tiver aceitado.",
            "Deixe de fora detalhes que não são precisos e que a podem identificar ou envergonhar: moradas exatas, dados de saúde, problemas com a justiça, nomes das escolas das crianças."
          ],
          steps: ["Faça da pessoa a personagem principal da história.", "Use palavras que põem a pessoa primeiro.", "Tire as palavras de pena e os exageros.", "Tire os detalhes que não são precisos.", "Use as palavras da própria pessoa, se ela aceitou."],
          words: [["Dignidade", "mostrar as pessoas com respeito, como pessoas capazes, com as suas próprias forças."], ["Linguagem que põe a pessoa primeiro", "dizer primeiro a pessoa e só depois a situação, como \"uma mulher em situação de sem-abrigo\"."]],
          slides: [
            { title: "A pessoa é a heroína", bullets: ["Ela age e escolhe", "A sua organização ajuda"] },
            { title: "As palavras contam", bullets: ["A pessoa primeiro: \"um homem em situação de sem-abrigo\"", "Sem palavras de pena: coitado, sofredor, destroçado", "Sem exageros"] },
            { title: "Deixe de fora", bullets: ["Moradas exatas", "Dados de saúde e problemas com a justiça", "Nomes das escolas das crianças"] }
          ],
          tryIt: "Reescreva esta frase com dignidade: \"A pobre e destroçada Maria era sem-abrigo e indefesa até nós a salvarmos.\" Faça da Maria a heroína e tire as palavras de pena.",
          youCanNow: "escrever sobre as pessoas que apoia com dignidade e respeito.",
          quickCheck: [
            { objective: "O2", q: "Numa história com dignidade, qual é o papel da sua organização?", options: ["A heroína", "A vítima", "Quem ajuda", "O juiz"], answer: 2, why: "A pessoa é a heroína; a sua organização é quem ajuda." },
            { objective: "O2", q: "Um rascunho diz \"a coitada da Sra. [Nome] estava a sofrer\". O que faz?", options: ["Mantém; toca os doadores", "Acrescenta mais palavras de pena", "Torna o texto mais longo", "Tira as palavras de pena e mostra as forças e as escolhas dela"], answer: 3, why: "Evite palavras de pena como \"coitada\" e \"a sofrer\"; mostre as pessoas como capazes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Uma estrutura simples para a história e um número honesto",
          minutes: 5,
          goal: "Organizar uma história em Antes, Ponto de viragem, Depois, e acrescentar um número verdadeiro do programa.",
          text: [
            "Uma estrutura simples torna a história fácil de seguir. Antes: como era a vida e o que a pessoa queria. Ponto de viragem: o que ela fez, com a ajuda do seu programa. Depois: o que mudou, de forma concreta.",
            "Depois acrescente um número honesto para mostrar que a história faz parte de algo maior: \"A Maria é uma dos 84 pais e mães que terminaram este ano o nosso programa de formação para o emprego.\" Use números dos seus próprios registos, e não arredonde para cima nem adivinhe.",
            "A história de uma pessoa faz as pessoas importarem-se; o número mostra o tamanho do seu impacto. Os financiadores querem os dois."
          ],
          steps: ["Escreva o Antes: a vida e o objetivo.", "Escreva o Ponto de viragem: o que a pessoa fez com a sua ajuda.", "Escreva o Depois: a mudança concreta.", "Acrescente um número honesto dos seus registos.", "Confirme o número com a pessoa que cuida dos vossos dados."],
          words: [["Impacto", "a mudança real que o seu trabalho faz na vida das pessoas."], ["Resultado", "um resultado que se pode medir, como \"84 pais e mães terminaram a formação\"."]],
          slides: [
            { title: "Antes, Ponto de viragem, Depois", bullets: ["Antes: a vida e o objetivo", "Ponto de viragem: a ação da pessoa, a sua ajuda", "Depois: a mudança concreta"] },
            { title: "Acrescente um número honesto", bullets: ["Dos seus próprios registos", "Sem arredondar para cima nem adivinhar"] },
            { title: "Porquê os dois", bullets: ["A história faz as pessoas importarem-se", "O número mostra o tamanho do impacto"] }
          ],
          tryIt: "Com uma história com consentimento ou uma história de prática inventada, escreva três linhas curtas (Antes, Ponto de viragem, Depois) e um número honesto do seu programa.",
          youCanNow: "organizar uma história com uma estrutura clara e apoiá-la com um número verdadeiro.",
          quickCheck: [
            { objective: "O3", q: "O que vai no Ponto de viragem?", options: ["O que a pessoa fez, com a ajuda do seu programa", "A morada da pessoa", "O seu orçamento", "Uma lista de doadores"], answer: 0, why: "O Ponto de viragem é o que a pessoa fez, com a ajuda do seu programa." },
            { objective: "O3", q: "Acha que cerca de 90 pessoas terminaram o programa, mas os seus registos dizem 84. Qual usa?", options: ["Cerca de 90, arredondando para cima", "84, dos seus registos", "100, para parecer maior", "Nenhum número"], answer: 1, why: "Use números dos seus próprios registos; não arredonde para cima nem adivinhe." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Histórias que respeitam as pessoas",
        questions: [
          { objective: "O1", q: "O que precisa de ter antes de partilhar a história de um cliente?", options: ["Uma boa fotografia", "A aprovação de um doador", "O consentimento informado da pessoa", "Um rascunho feito pela IA"], answer: 2, why: "A história pertence à pessoa; ela tem de aceitar primeiro." },
          { objective: "O1", q: "Um cliente diz não à partilha da sua história. O que acontece à ajuda que recebe?", options: ["Nada muda; continua a receber ajuda", "Acaba", "Diminui", "Tem de pagar"], answer: 0, why: "O consentimento tem de ser livre; dizer não nunca afeta a ajuda." },
          { objective: "O2", q: "Qual é linguagem que põe a pessoa primeiro?", options: ["\"um sem-abrigo\"", "\"os sem-abrigo\"", "\"um pobre homem destroçado\"", "\"um homem em situação de sem-abrigo\""], answer: 3, why: "Diz primeiro a pessoa e só depois a situação." },
          { objective: "O3", q: "Na estrutura Antes, Ponto de viragem, Depois, o que vai no Depois?", options: ["O nome do doador", "A mudança concreta", "A morada da organização", "O orçamento"], answer: 1, why: "O Depois mostra o que mudou." },
          { objective: "O3", q: "Que número está certo usar?", options: ["Um palpite que parece grande", "Um número dos seus próprios registos, verificado", "Um número arredondado para cima", "Um número que a IA inventou"], answer: 1, why: "Os números honestos vêm dos seus próprios registos verificados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Escrever e partilhar histórias com IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever uma história com IA, com segurança",
          minutes: 5,
          goal: "Usar IA para transformar as notas da história num rascunho sem partilhar dados privados.",
          text: [
            "A IA pode transformar as suas notas de Antes, Ponto de viragem, Depois num rascunho bem escrito em segundos. Mas nunca cole numa ferramenta de IA o nome completo, a morada, os dados de saúde ou as notas do processo de uma pessoa real. Muitas ferramentas de IA podem guardar o que escreve.",
            "Use marcadores e detalhes gerais: \"Escreva uma história de 150 palavras para um boletim. [Nome], mãe sozinha, queria um trabalho estável. Terminou a nossa formação de 10 semanas para o emprego e agora trabalha como assistente num consultório médico. 84 pais e mães terminaram o programa este ano. Tom caloroso e respeitoso, linguagem que põe a pessoa primeiro, sem palavras de pena.\"",
            "Depois de receber o rascunho, coloque você mesmo os detalhes verdadeiros, mas só os que a pessoa aceitou no formulário de consentimento."
          ],
          steps: ["Comece pelas suas notas organizadas.", "Troque os nomes e os dados privados por marcadores.", "Peça o tamanho, o tom e linguagem que põe a pessoa primeiro.", "Peça uma ou duas mudanças.", "Acrescente você mesmo só os detalhes verdadeiros que foram aceites."],
          words: [["Marcador", "uma palavra provisória como [Nome] que troca mais tarde."], ["Rascunho", "uma primeira versão que vai verificar e melhorar."]],
          slides: [
            { title: "Nunca cole na IA", bullets: ["Nomes completos e moradas", "Dados de saúde ou notas do processo", "Dados de crianças"] },
            { title: "Um pedido seguro para a história", bullets: ["Marcadores como [Nome]", "As suas notas de Antes, Ponto de viragem, Depois", "Tamanho, tom, palavras que põem a pessoa primeiro"] },
            { title: "Depois do rascunho", bullets: ["Acrescente só os detalhes que a pessoa aceitou", "Confira com o formulário de consentimento"] }
          ],
          tryIt: "Transforme as suas notas da Lição 3 num pedido seguro com marcadores e peça à IA uma história de 150 palavras para o boletim. Peça uma mudança e depois acrescente só os detalhes aceites.",
          youCanNow: "escrever com IA o rascunho de uma história de impacto protegendo a privacidade da pessoa.",
          quickCheck: [
            { objective: "O4", q: "Porque deve manter os nomes verdadeiros e as notas do processo fora das ferramentas de IA?", options: ["A IA não consegue ler nomes", "Torna os rascunhos mais longos", "Muitas ferramentas de IA podem guardar o que escreve", "A IA só escreve em maiúsculas"], answer: 2, why: "Muitas ferramentas de IA podem guardar o que escreve." },
            { objective: "O4", q: "A pessoa aceitou partilhar o primeiro nome, mas não o trabalho. O que acrescenta ao rascunho da IA?", options: ["O nome completo e o trabalho", "A morada", "Nada", "Só o primeiro nome"], answer: 3, why: "Acrescente só os detalhes verdadeiros que a pessoa aceitou no formulário de consentimento." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Adaptar uma história a públicos diferentes",
          minutes: 5,
          goal: "Transformar uma história num texto para o boletim, numa publicação nas redes sociais e num parágrafo de relatório ao financiador.",
          text: [
            "Leitores diferentes precisam de versões diferentes. Os doadores que leem um boletim querem calor humano e uma forma de ajudar. As redes sociais precisam de poucas palavras e de uma ação clara. Um relatório ao financiador precisa de factos, resultados e de como o dinheiro do financiador ajudou.",
            "Peça à IA para adaptar o rascunho: \"Transforme esta história numa publicação de 40 palavras para as redes sociais com um apelo à ação, e num parágrafo de 100 palavras para um relatório ao financiador que diga o resultado e o número.\" Use a história só nos lugares que a pessoa aceitou.",
            "As imagens feitas por IA nunca devem fingir ser pessoas reais que apoia. Se usar uma imagem feita por IA, identifique-a como tal e não a use no lugar de um cliente real."
          ],
          steps: ["Veja no formulário de consentimento onde pode partilhar.", "Peça à IA uma versão curta para as redes sociais com uma ação.", "Peça à IA uma versão para o relatório ao financiador com os resultados e o número.", "Compare as versões para ver se são verdadeiras.", "Identifique qualquer imagem feita por IA."],
          words: [["Público", "as pessoas que vão ler ou ver o que partilha."], ["Relatório ao financiador", "um relatório para quem deu o financiamento, que mostra o que o seu dinheiro fez."]],
          slides: [
            { title: "A mesma história, três versões", bullets: ["Boletim: caloroso, uma forma de ajudar", "Redes sociais: curto, uma ação", "Relatório ao financiador: factos e resultados"] },
            { title: "Só onde a pessoa aceitou", bullets: ["Veja primeiro o formulário de consentimento", "Sim ao site não quer dizer sim às redes sociais"] },
            { title: "Imagens feitas por IA", bullets: ["Nunca fingem mostrar clientes reais", "Identifique as imagens feitas por IA"] }
          ],
          tryIt: "Peça à IA para adaptar a sua história do boletim numa publicação de 40 palavras para as redes sociais e num parágrafo de 100 palavras para um relatório ao financiador. Confirme que cada lugar é permitido no formulário de consentimento.",
          youCanNow: "adaptar uma história para doadores, redes sociais e financiadores.",
          quickCheck: [
            { objective: "O5", q: "O que querem os doadores que leem um boletim?", options: ["Calor humano e uma forma de ajudar", "Uma tabela do orçamento", "Linguagem jurídica", "Só números"], answer: 0, why: "Os doadores que leem o boletim querem calor humano e uma forma de ajudar." },
            { objective: "O5", q: "Não tem nenhuma fotografia da pessoa real, por isso a IA faz a imagem de uma família sorridente. Como a usa?", options: ["Diz que é a família que apoiou", "Identifica-a como feita por IA e não a apresenta como um cliente real", "Usa-a sem nenhuma identificação", "Põe o nome da pessoa por baixo"], answer: 1, why: "As imagens feitas por IA têm de ser identificadas e nunca substituem um cliente real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Verificar uma história antes de ser publicada",
          minutes: 5,
          goal: "Usar uma pequena lista de verificação para encontrar erros, detalhes inventados e problemas de dignidade.",
          text: [
            "A IA às vezes acrescenta detalhes que não são verdade: um filho a mais, um cargo que a pessoa nunca teve, uma frase que ela nunca disse. Isto pode magoar a pessoa e a confiança na sua organização.",
            "Antes de partilhar, verifique: Verdade (cada detalhe é verdadeiro e está nas suas notas?), Consentimento (cada detalhe e cada lugar são permitidos?), Dignidade (a pessoa é a heroína, com palavras que a põem primeiro?) e Números (o número vem dos seus registos?). Se puder, deixe a pessoa ler a sua história antes de ser publicada.",
            "Guarde uma cópia da versão final com o formulário de consentimento, e retire a história se a pessoa pedir."
          ],
          steps: ["Verdade: compare cada detalhe com as suas notas; tire tudo o que a IA acrescentou.", "Consentimento: confira cada detalhe e cada lugar com o formulário.", "Dignidade: heroína, palavras que põem a pessoa primeiro, sem pena.", "Números: confirme nos seus registos.", "Deixe a pessoa ler, se puder, e depois arquive com o formulário de consentimento."],
          words: [["Invenção", "um detalhe inventado apresentado como verdadeiro."], ["Lista de verificação", "uma lista de coisas que confere todas as vezes."]],
          slides: [
            { title: "A IA pode acrescentar coisas falsas", bullets: ["Pessoas ou acontecimentos a mais", "Cargos ou frases que nunca foram ditas"] },
            { title: "Quatro verificações", bullets: ["Verdade", "Consentimento", "Dignidade", "Números"] },
            { title: "Termine bem", bullets: ["Deixe a pessoa ler, se puder", "Arquive com o formulário de consentimento", "Retire a história se a pessoa pedir"] }
          ],
          tryIt: "Tarefa final: passe as suas três versões (boletim, publicação nas redes sociais, parágrafo para o financiador) pelas quatro verificações. Corrija tudo o que falhar e anote o que mudou.",
          youCanNow: "verificar a verdade, o consentimento, a dignidade e os números honestos das histórias de impacto antes de as partilhar.",
          quickCheck: [
            { objective: "O6", q: "Qual é uma das quatro verificações antes de partilhar?", options: ["Tamanho", "Tipo de letra", "Consentimento", "Cor"], answer: 2, why: "As quatro verificações são Verdade, Consentimento, Dignidade e Números." },
            { objective: "O6", q: "Uma família pede-lhe para retirar a sua história um mês depois de ter sido publicada. O que faz?", options: ["Deixa-a publicada; assinaram o formulário", "Pede-lhes para pagar para a retirar", "Muda uma palavra", "Retira a história"], answer: 3, why: "Retire a história se a pessoa pedir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Escrever e partilhar histórias com IA",
        questions: [
          { objective: "O4", q: "O que é seguro colocar num pedido à IA para uma história?", options: ["As notas do processo do cliente", "A morada de casa da pessoa", "O registo médico da pessoa", "Marcadores e detalhes gerais"], answer: 3, why: "Os marcadores mantêm os dados privados fora da IA." },
          { objective: "O5", q: "O formulário de consentimento permite o site, mas não as redes sociais. O que faz?", options: ["Usa a história só no site", "Publica nas redes sociais na mesma", "Pergunta à IA", "Muda o nome e publica em todo o lado"], answer: 0, why: "Partilhe só onde a pessoa aceitou." },
          { objective: "O6", q: "A IA acrescentou uma frase que a pessoa nunca disse. O que faz?", options: ["Mantém, porque soa bem", "Acrescenta mais frases", "Tira-a", "Pergunta ao doador"], answer: 2, why: "Os detalhes inventados quebram a confiança e têm de ser tirados." },
          { objective: "O5", q: "Que versão precisa dos resultados e de como o dinheiro do financiador ajudou?", options: ["A publicação nas redes sociais", "O folheto de um evento", "Um cartão de agradecimento", "O relatório ao financiador"], answer: 3, why: "Os financiadores querem resultados ligados ao seu apoio." },
          { objective: "O5", q: "Como deve ser usada uma imagem feita por IA?", options: ["Apresentada como um cliente real", "Escondida no fundo", "Identificada como tal, e nunca no lugar de um cliente real", "Usada como consentimento"], answer: 2, why: "As imagens feitas por IA não devem fingir mostrar pessoas reais que apoia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Contar Histórias de Impacto Social",
    questions: [
      { objective: "O1", q: "A quem pertence a história de um cliente?", options: ["À organização", "Ao cliente", "Ao doador", "À ferramenta de IA"], answer: 1, why: "É a vida dele e a história dele." },
      { objective: "O1", q: "Consentimento informado quer dizer que a pessoa entende:", options: ["O que vai partilhar, onde e durante quanto tempo", "Só que vai ser tirada uma fotografia", "Nada; basta uma assinatura", "O orçamento da organização"], answer: 0, why: "O consentimento só é informado quando a pessoa sabe como a história vai ser usada." },
      { objective: "O1", q: "Para a história de uma criança, quem dá o consentimento?", options: ["O professor da criança", "Um voluntário", "Os pais ou o tutor", "Ninguém"], answer: 2, why: "Os pais ou o tutor têm de aceitar por uma criança." },
      { objective: "O1", q: "Uma pessoa que aceitou no mês passado pede agora para retirar a sua história. Você:", options: ["Retira-a", "Recusa", "Pede-lhe para pagar", "Encurta-a"], answer: 0, why: "As pessoas podem mudar de ideias." },
      { objective: "O1", q: "Quando é que uma história pode não ser partilhada mesmo com consentimento?", options: ["Quando é curta demais", "Quando é segunda-feira", "Nunca", "Quando partilhá-la pode pôr a pessoa em risco"], answer: 3, why: "A segurança vem antes de uma boa história." },
      { objective: "O2", q: "Numa história com dignidade, a heroína é:", options: ["A organização", "A pessoa que apoia", "O doador", "A IA"], answer: 1, why: "A pessoa age e escolhe; você ajuda." },
      { objective: "O2", q: "Que palavra deve evitar?", options: ["\"terminou\"", "\"destroçado\"", "\"escolheu\"", "\"começou\""], answer: 1, why: "\"Destroçado\" é uma palavra de pena." },
      { objective: "O2", q: "Que detalhe deve normalmente ficar de fora?", options: ["A mudança concreta", "O programa em que entrou", "O objetivo da pessoa", "A morada exata da pessoa"], answer: 3, why: "As moradas podem identificar as pessoas ou pô-las em perigo." },
      { objective: "O3", q: "As três partes da estrutura da história são:", options: ["Antes, Ponto de viragem, Depois", "Título, Logótipo, Pedido", "Nome, Morada, Telefone", "Problema, Preço, Lucro"], answer: 0, why: "Esta estrutura simples é fácil de seguir." },
      { objective: "O3", q: "Porquê acrescentar um número honesto?", options: ["Para a tornar mais longa", "Porque a IA precisa dele", "Para mostrar que a história faz parte de um impacto maior", "Para substituir o consentimento"], answer: 2, why: "O número mostra o tamanho do seu impacto." },
      { objective: "O3", q: "De onde deve vir o número do seu programa?", options: ["De um palpite", "Da IA", "Do site de uma organização concorrente", "Dos seus próprios registos verificados"], answer: 3, why: "Os números honestos vêm dos seus registos." },
      { objective: "O4", q: "Que pedido é seguro?", options: ["\"Maria Lopez, 123 Main St, com diagnóstico de...\"", "\"Aqui estão as notas do processo dela...\"", "\"[Nome], mãe sozinha, terminou a nossa formação e agora trabalha num consultório médico.\"", "\"Aqui está a escola do filho dela...\""], answer: 2, why: "Usa um marcador e nenhum dado privado." },
      { objective: "O4", q: "Depois de um rascunho da IA, que detalhes verdadeiros acrescenta?", options: ["Todos os detalhes que conhece", "Só os que a pessoa aceitou", "O número de telefone da pessoa", "O que a IA sugerir"], answer: 1, why: "O formulário de consentimento limita o que partilha." },
      { objective: "O5", q: "Uma versão para as redes sociais deve ser:", options: ["Curta, com uma ação clara", "Tão longa como um relatório ao financiador", "Cheia de detalhes do processo", "Sem nenhum pedido"], answer: 0, why: "As publicações curtas com uma ação funcionam melhor." },
      { objective: "O5", q: "Uma versão para o relatório ao financiador centra-se em:", options: ["Piadas", "Palavras de pena", "Factos, resultados e como o dinheiro ajudou", "A morada da pessoa"], answer: 2, why: "Os financiadores precisam de resultados." },
      { objective: "O5", q: "Antes de publicar uma história nas redes sociais, verifique:", options: ["Que o formulário de consentimento permite as redes sociais", "Só a ortografia", "O tempo que faz", "A lista de doadores"], answer: 0, why: "O consentimento cobre cada lugar em separado." },
      { objective: "O5", q: "Uma imagem feita por IA de uma família sorridente tem a legenda \"uma família que apoiámos\". Isto é:", options: ["Aceitável", "Obrigatório", "Melhor do que uma fotografia real", "Enganador; identifique-a como feita por IA e não a apresente como um cliente real"], answer: 3, why: "As imagens feitas por IA não devem fingir ser clientes reais." },
      { objective: "O6", q: "Qual é uma das quatro verificações?", options: ["Rapidez", "Verdade", "Preço", "Tipo de letra"], answer: 1, why: "Verdade, Consentimento, Dignidade e Números são as quatro verificações." },
      { objective: "O6", q: "A IA escreveu que o cliente \"tem três filhos\", mas as suas notas dizem um. Você:", options: ["Mantém", "Corrige para ficar igual às suas notas", "Pergunta outra vez à IA e confia nela", "Retira o consentimento do cliente"], answer: 1, why: "Cada detalhe tem de ser igual às suas notas." },
      { objective: "O6", q: "Onde guarda a história final?", options: ["Só na conversa com a IA", "Em lado nenhum", "Numa pasta pública", "Com o formulário de consentimento assinado"], answer: 3, why: "Guardá-los juntos mostra o que foi aceite." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 5, 8, 11, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Consentimento", objective: "O1", notYet: "Não há consentimento por escrito para uma história real, ou é usado um detalhe que não foi aceite.", meets: "Consentimento por escrito, ou uma história de prática totalmente inventada, com o nome e os lugares registados.", exceeds: "A pessoa leu a sua história antes de ser publicada." },
      { name: "Estrutura e número", objective: "O3", notYet: "Falta uma parte da história, ou o número é um palpite.", meets: "Antes, Ponto de viragem e Depois, mais um número de registos verificados.", exceeds: "O Depois mostra uma mudança concreta com as palavras da própria pessoa, com autorização." },
      { name: "Pedido seguro à IA", objective: "O4", notYet: "O pedido tem um nome completo, uma morada, dados de saúde ou notas do processo.", meets: "O pedido usa só marcadores e detalhes gerais.", exceeds: "Pede à IA linguagem que põe a pessoa primeiro e nenhuma palavra de pena." },
      { name: "Três versões", objective: "O5", notYet: "Falta uma versão, ou é usada onde o consentimento não permite.", meets: "Boletim de cerca de 150 palavras, publicação de 40 palavras para as redes sociais e parágrafo de 100 palavras para o financiador, cada um onde o consentimento permite.", exceeds: "Cada versão serve os seus leitores: calor humano, uma ação, ou resultados e financiamento." },
      { name: "Verificação final", objective: "O6", notYet: "Fica um detalhe falso, uma palavra de pena ou um número não verificado.", meets: "As três passam a Verdade, o Consentimento, a Dignidade e os Números.", exceeds: "Faz a lista do que foi corrigido e guarda a cópia final com o formulário de consentimento." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações que adotam um formulário de consentimento por escrito para histórias em 60 dias (inquérito de seguimento)",
      "Histórias partilhadas em boletins, publicações ou relatórios a financiadores com o consentimento arquivado",
      "Alunos que começam outro curso da Koach Learn para organizações sem fins lucrativos em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito",
      "O formulário de consentimento da sua organização, ou um formulário simples de exemplo",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Use nas aulas histórias de prática totalmente inventadas, a não ser que as histórias reais tenham consentimento por escrito.",
      "Faça um exercício em grupo para trocar palavras de pena por linguagem que põe a pessoa primeiro.",
      "Leve o formulário de consentimento da organização para os alunos confrontarem cada versão com o que foi aceite.",
      "Lembre os alunos de perguntarem ao seu diretor antes de contarem histórias de pessoas que possam ser postas em risco.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
