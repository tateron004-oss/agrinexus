"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-consulting-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-consulting",
  category: "Entrepreneurs",
  name: "Começar um Negócio de Consultoria em IA",
  skills: "Escolher um nicho de consultoria, Criar provas com um projeto-piloto, Organizar e definir o preço dos serviços, Fazer uma auditoria de IA para um cliente, Escrever uma proposta, Tratar os dados e os acordos com clientes",
  outcome: "montar uma pequena atividade de consultoria em IA: escolher um nicho, organizar três serviços com preços, fazer uma auditoria de IA para uma pequena empresa real e transformá-la numa proposta de uma página, com regras claras para tratar os dados do cliente.",
  about: [
    "Muitas pequenas empresas sabem que deviam usar IA, mas não sabem por onde começar. Um consultor de IA ajuda-as a encontrar os usos certos, a configurar as ferramentas, a formar o pessoal e a manter a segurança. Não precisa de ser programador; precisa de entender os problemas das empresas, conhecer bem as principais ferramentas de IA e ser honesto sobre o que a IA pode e não pode fazer.",
    "Este curso é para pessoas com experiência de negócio ou de trabalho que querem oferecer ajuda com IA a pequenas empresas, organizações sem fins lucrativos ou organizações locais. Você vai escolher um nicho, criar provas com um projeto-piloto, organizar e definir o preço dos seus serviços, encontrar clientes, fazer uma auditoria de IA, escrever uma proposta e definir regras para os dados e os acordos com clientes.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Os pontos sobre impostos e lei têm links para fontes oficiais; fale com um contabilista e um advogado sobre a sua própria situação."
  ],
  finalTask: "Crie o seu kit inicial de consultoria em IA: o seu nicho e a sua oferta numa frase, três pacotes de serviços com preços, um questionário de auditoria de IA com 10 perguntas, os resultados de uma auditoria a uma empresa real (sem dados privados), uma proposta de uma página para essa empresa e as suas regras escritas para os dados dos clientes.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas com experiência de negócio ou de trabalho que querem oferecer ajuda com IA a pequenas empresas, organizações sem fins lucrativos ou organizações locais. A maioria não é programadora.",
    startingPoint: "Usam bem as principais ferramentas de IA e conhecem pelo menos um setor ou tipo de negócio. Poucos já organizaram ou definiram o preço de um serviço, fizeram uma auditoria, escreveram uma proposta ou criaram regras para os dados dos clientes.",
    gap: "As pequenas empresas precisam de ajuda com IA honesta e prática, mas os consultores novos muitas vezes vendem serviços vagos, cobram pouco pelo seu tempo, prometem resultados demais ou tratam mal os dados dos clientes. Os alunos precisam de uma oferta focada, provas reais, pacotes claros, uma auditoria que se pode repetir e regras escritas para os dados, para ganhar e manter clientes.",
    constraints: [
      "Palavras simples; não é preciso programar",
      "Aparelhos: um computador com um assistente de IA gratuito, uma folha de cálculo e email",
      "Tempo: cerca de cinco minutos por lição, mais tarefas com um cliente real ou de prática",
      "Aplicam-se as regras dos emails de contacto comercial; a parte de impostos e lei é verificada em fontes oficiais, com um contabilista e um advogado",
      "Os nomes dos clientes e os dados privados são retirados antes de qualquer nota ir para a IA"
    ],
    prerequisites: "Recomendam-se os cursos \"Ferramentas de IA que Todo o Empreendedor Deve Conhecer\" e \"Ética da IA, Riscos e Questões Legais\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os setores e os negócios que conhece", action: "escrever numa frase uma oferta de consultoria para um tipo específico de cliente", standard: "dizendo quem ajuda, o resultado e como" },
    { id: "O2", condition: "Com uma empresa disposta a experimentar a sua ajuda", action: "planear um projeto-piloto com um resultado que se pode medir e números de antes e depois", standard: "com a autorização escrita do cliente antes de partilhar qualquer resultado" },
    { id: "O3", condition: "Com a sua oferta e os seus custos por hora", action: "criar três pacotes de serviços com entregas, tempo, o que o cliente fornece e preços", standard: "com as contas por hora verificadas numa folha de cálculo, incluindo o tempo de revisão e de seguimento" },
    { id: "O4", condition: "Com a sua rede de contactos e o seu nicho", action: "planear o contacto com dez possíveis clientes e preparar o esboço de uma palestra curta para donos de negócios", standard: "com mensagens pessoais que incluem a sua morada e uma opção para deixar de receber" },
    { id: "O5", condition: "Com um questionário de auditoria de 10 perguntas e um dono de negócio", action: "fazer uma auditoria de IA e recomendar os três melhores usos da IA", standard: "dando pontos às ideias pelo tempo poupado, custo, facilidade e risco, com uma proteção para cada uma" },
    { id: "O6", condition: "Para a empresa que auditou", action: "escrever uma proposta de uma página e as suas regras para os dados dos clientes", standard: "com a situação do cliente nas palavras dele e os dados apagados ou devolvidos no final" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Monte a sua atividade",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher o seu nicho e a sua oferta",
          minutes: 5,
          goal: "Escrever numa frase uma oferta para um tipo específico de cliente.",
          text: [
            "\"Ajudo empresas com IA\" é difícil de vender. \"Ajudo restaurantes independentes a poupar 5 horas por semana em encomendas, horários e redes sociais com ferramentas de IA simples\" é fácil de entender e fácil de recomendar.",
            "Escolha um nicho onde já tem experiência ou contactos: um setor onde trabalhou, uma comunidade a que pertence ou um tipo de organização (salões de beleza, igrejas, empreiteiros, receção de clínicas, organizações sem fins lucrativos). A sua experiência passada é a sua vantagem sobre os técnicos em geral.",
            "Peça ajuda à IA: \"Trabalhei 8 anos em [área]. Faça a lista das tarefas repetidas que as pequenas empresas desta área fazem e que as ferramentas de IA podem acelerar.\" Depois escreva a sua oferta: quem ajuda, que resultado e como."
          ],
          steps: ["Faça a lista dos setores ou comunidades que conhece bem.", "Peça à IA as tarefas repetidas nessas áreas que a IA pode acelerar.", "Escolha um nicho.", "Escreva a sua oferta: quem ajuda, que resultado, como."],
          words: [["Consultor", "um especialista que aconselha uma empresa e a ajuda a fazer mudanças."], ["Nicho", "um tipo específico de cliente em que você se concentra."], ["Oferta", "uma frase clara que diz quem você ajuda, o resultado e como."]],
          slides: [
            { title: "O específico vende", bullets: ["Não: \"Ajudo empresas com IA\"", "\"Ajudo restaurantes independentes a poupar 5 horas por semana\""] },
            { title: "Use o que conhece", bullets: ["Um setor onde trabalhou", "Uma comunidade a que pertence", "A sua experiência é a sua vantagem"] },
            { title: "Escreva a sua oferta", bullets: ["Quem ajuda", "Que resultado", "Como"] }
          ],
          tryIt: "Escolha o seu nicho com a ajuda da IA e escreva a sua oferta numa frase: quem, que resultado, como.",
          youCanNow: "descrever uma oferta de consultoria em IA focada, que os clientes entendem depressa.",
          quickCheck: [
            { objective: "O1", q: "O que é um nicho em consultoria?", options: ["Um tipo específico de cliente em que se concentra", "Todas as empresas do país", "Um tipo de ferramenta de IA", "O seu preço por hora"], answer: 0, why: "Um nicho deixa você entender a fundo os problemas dos clientes." },
            { objective: "O1", q: "A sua oferta diz \"Ajudo empresas com IA\". O que faz?", options: ["Deixa-a geral", "Diz quem ajuda, o resultado e como", "Acrescenta a lista de todas as ferramentas de IA", "Tira a oferta"], answer: 1, why: "Uma oferta forte é específica, para os clientes a entenderem depressa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Criar provas com um projeto-piloto",
          minutes: 5,
          goal: "Planear um pequeno projeto-piloto que lhe dê um resultado real para mostrar.",
          text: [
            "Os clientes querem provas de que você pode ajudar. Se está a começar, faça um projeto-piloto: um projeto pequeno e curto para uma empresa (a loja de um amigo, uma organização local sem fins lucrativos), por um preço baixo ou de graça, em troca de autorização para partilhar os resultados e um testemunho.",
            "Escolha um piloto com um resultado que se pode medir: \"Criar modelos de resposta com IA e reduzir o tempo de email de 6 para 3 horas por semana.\" Meça antes e depois.",
            "Escreva um estudo de caso curto: o problema, o que fez, o resultado em números e uma frase do dono. Peça autorização escrita antes de partilhar e tire tudo o que for privado. Nunca invente resultados nem testemunhos."
          ],
          steps: ["Encontre uma empresa disposta a fazer um piloto.", "Combinem um resultado que se pode medir.", "Meça antes de começar.", "Faça o trabalho e meça depois.", "Escreva um estudo de caso curto, com autorização."],
          words: [["Projeto-piloto", "um pequeno projeto de teste para mostrar que uma coisa funciona."], ["Estudo de caso", "uma história curta de um projeto real: problema, trabalho, resultado."], ["Testemunho", "o que um cliente diz sobre o seu trabalho, usado com a autorização dele."]],
          slides: [
            { title: "Está a começar? Faça um piloto", bullets: ["Uma empresa, curto e pequeno", "Preço baixo ou de graça", "Em troca: autorização para partilhar os resultados"] },
            { title: "Meça", bullets: ["Um resultado claro", "Números de antes e depois"] },
            { title: "Escreva um estudo de caso", bullets: ["Problema, trabalho, resultado, frase do dono", "Autorização escrita", "Nunca invente resultados"] }
          ],
          tryIt: "Escreva um plano de piloto: que empresa, um resultado que se pode medir, como vai medir antes e depois e o que pede em troca.",
          youCanNow: "planear um piloto que se torna uma prova honesta para o seu negócio de consultoria.",
          quickCheck: [
            { objective: "O2", q: "O que deve um piloto medir?", options: ["Quantas ferramentas usou", "O tamanho dos seus emails", "Um resultado com números de antes e depois", "Nada; é de graça"], answer: 2, why: "Um resultado que se pode medir transforma um piloto numa prova honesta." },
            { objective: "O2", q: "O seu piloto poupou ao cliente 2 horas por semana, e não as 5 que esperava. O que partilha?", options: ["Diz que poupou 5 horas", "Esconde o piloto", "Arredonda para 4 horas", "O resultado real, com a autorização do cliente"], answer: 3, why: "Nunca invente resultados; partilhe só o que aconteceu de verdade." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Organizar e definir o preço dos seus serviços",
          minutes: 6,
          goal: "Criar três pacotes de serviços com entregas e preços claros.",
          text: [
            "Os pacotes são mais fáceis de comprar do que horas sem limite. Um conjunto comum: uma Auditoria de IA (analisar a empresa e recomendar os três melhores usos da IA), uma Configuração de IA (configurar ferramentas, modelos e automações simples) e uma Formação em IA (ensinar o dono e o pessoal, com guias escritos). Alguns consultores acrescentam um plano de apoio mensal.",
            "Para cada pacote, escreva: o que o cliente recebe, quanto tempo leva, o que precisa dele e o preço. Defina o preço pelo valor e pelo seu tempo: calcule as suas horas, inclua o tempo de revisão e de seguimento e compare com o que serviços parecidos cobram na sua zona.",
            "Para quem trabalha nos Estados Unidos: obtenha um EIN no IRS se precisar de um (o IRS diz que é gratuito e avisa sobre sites que cobram). Como trabalhador por conta própria, em geral paga o imposto de trabalho por conta própria (self-employment tax) e pode ter de pagar impostos estimados a cada trimestre; veja irs.gov e fale com um contabilista."
          ],
          steps: ["Escreva três pacotes: Auditoria, Configuração, Formação.", "Para cada um: entregas, tempo, o que precisa do cliente, preço.", "Calcule as suas horas, incluindo revisão e seguimento.", "Compare com os preços da sua zona e verifique as suas contas.", "Veja as regras básicas de impostos em irs.gov e pergunte a um contabilista."],
          words: [["Pacote", "um serviço definido, com entregas fixas e um preço fixo."], ["Avença", "um valor pago todos os meses por ajuda contínua (em inglês, \"retainer\")."], ["EIN", "Employer Identification Number: um número fiscal federal gratuito para empresas, dado pelo IRS, a autoridade fiscal dos Estados Unidos."]],
          slides: [
            { title: "Três pacotes", bullets: ["Auditoria de IA: os três melhores usos da IA", "Configuração de IA: ferramentas, modelos, automações", "Formação em IA: dono e pessoal, com guias"] },
            { title: "Cada pacote diz", bullets: ["O que o cliente recebe", "Quanto tempo leva, o que precisa do cliente", "O preço"] },
            { title: "Organize-se bem", bullets: ["IRS: o EIN é gratuito; cuidado com sites pagos", "Imposto por conta própria e impostos estimados", "Pergunte a um contabilista"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Escreva os seus três pacotes com entregas, tempo, o que o cliente fornece e um preço para cada um, e verifique as contas por hora numa folha de cálculo.",
          youCanNow: "organizar e definir o preço de serviços de consultoria em IA com clareza.",
          quickCheck: [
            { objective: "O3", q: "Porque vender pacotes em vez de horas sem limite?", options: ["São mais fáceis de entender e de comprar para os clientes", "Escondem o seu preço", "Dispensam as entregas", "Dão menos trabalho"], answer: 0, why: "Pacotes claros tornam a compra simples para os clientes." },
            { objective: "O3", q: "O preço do seu pacote não deixa tempo para perguntas de seguimento. O que faz?", options: ["Ignora o seguimento", "Acrescenta o tempo de seguimento às suas horas e muda o preço", "Cobra mais depois sem dizer ao cliente", "Tira as entregas"], answer: 1, why: "O preço tem de incluir o tempo de revisão e de seguimento." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Monte a sua atividade",
        questions: [
          { objective: "O1", q: "Qual é a oferta de consultoria mais forte?", options: ["\"Faço coisas de IA\"", "\"Ajudo restaurantes independentes a poupar 5 horas por semana com ferramentas de IA simples\"", "\"Ajudo toda a gente com tudo\"", "\"Especialista em IA, ligue-me\""], answer: 1, why: "Diz quem, que resultado e como." },
          { objective: "O1", q: "Qual é a principal vantagem de escolher um nicho que conhece?", options: ["Evita impostos", "É sempre o que dá mais lucro", "Não precisa de aprender IA", "Entende os problemas dos clientes melhor do que os técnicos em geral"], answer: 3, why: "A experiência na área é a sua vantagem." },
          { objective: "O2", q: "Um cliente-piloto aceita um preço baixo. O que pede em troca?", options: ["Autorização para partilhar os resultados e um testemunho", "A palavra-passe do banco dele", "Avaliações falsas", "Nada"], answer: 0, why: "Um piloto cria provas honestas." },
          { objective: "O2", q: "Pode inventar resultados para um estudo de caso se o piloto correu mal?", options: ["Sim, se ninguém verificar", "Sim, se forem pequenos", "Não, nunca invente resultados", "Só nas redes sociais"], answer: 2, why: "Resultados inventados são desonestos e enganam." },
          { objective: "O3", q: "O que diz o IRS sobre obter um EIN?", options: ["Só os advogados o podem obter", "Custa $500", "É gratuito; cuidado com sites que cobram", "Tem de pagar todos os meses"], answer: 2, why: "O IRS dá o EIN sem custo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ganhe e sirva clientes",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar os seus primeiros clientes",
          minutes: 5,
          goal: "Planear o contacto com os seus primeiros dez possíveis clientes.",
          text: [
            "Os primeiros clientes costumam vir de pessoas que já o conhecem: antigos colegas de trabalho, associações de empresas locais, a sua igreja ou comunidade e recomendações do seu piloto. Uma palestra ou oficina curta e gratuita (\"5 maneiras de a IA poupar tempo ao seu salão\") é uma boa forma de conhecer donos de negócios.",
            "Escreva mensagens pessoais, não emails em massa. A IA pode fazer o rascunho: \"Escreva uma mensagem de 70 palavras para a dona de um salão que conheci num evento da câmara de comércio, a oferecer uma verificação de IA gratuita de 20 minutos. Simpática, sem exageros.\" Acrescente um detalhe real.",
            "Se enviar emails comerciais nos Estados Unidos, siga as regras básicas da lei CAN-SPAM: remetente e assunto honestos, a sua morada física e uma forma clara de deixar de receber, respeitada em 10 dias úteis. Não prometa resultados que não pode provar."
          ],
          steps: ["Faça a lista de dez donos ou organizações do seu nicho que consegue contactar.", "Planeie uma palestra ou oficina gratuita.", "Faça rascunhos de mensagens pessoais com a IA e acrescente um detalhe real a cada uma.", "Inclua a sua morada e uma opção para deixar de receber nos emails comerciais.", "Anote quem contactou e a resposta de cada um."],
          words: [["Recomendação", "quando alguém que conhece o seu trabalho indica você a outra pessoa."], ["Oficina", "uma sessão curta em que ensina algo útil a um grupo (em inglês, \"workshop\")."]],
          slides: [
            { title: "Comece por quem o conhece", bullets: ["Antigos colegas e a comunidade", "Associações de empresas locais", "Recomendações do seu piloto"] },
            { title: "Ensine para conhecer donos", bullets: ["Uma palestra ou oficina curta e gratuita", "\"5 maneiras de a IA poupar tempo ao seu salão\""] },
            { title: "Contacto pessoal, dentro das regras", bullets: ["A IA faz o rascunho; você acrescenta um detalhe real", "CAN-SPAM: linhas honestas, morada, opção para deixar de receber", "Sem promessas que não pode provar"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Faça a lista de dez possíveis clientes, escreva três mensagens de contacto pessoais com a ajuda da IA e prepare o esboço de uma palestra de 20 minutos para donos de negócios do seu nicho.",
          youCanNow: "chegar aos seus primeiros clientes através de pessoas que conhece, de palestras e de contactos honestos.",
          quickCheck: [
            { objective: "O4", q: "De onde costumam vir os primeiros clientes de consultoria?", options: ["De listas de emails compradas", "De chamadas ao acaso para o estrangeiro", "De pessoas que já o conhecem e de recomendações", "De anúncios pagos no primeiro dia"], answer: 2, why: "A sua rede de contactos e as recomendações confiam em você primeiro." },
            { objective: "O4", q: "A IA faz o rascunho de um email de contacto sem morada nem opção para deixar de receber. O que faz?", options: ["Envia-o", "Envia-o para uma lista comprada", "Torna-o mais comprido", "Acrescenta a sua morada física e uma linha para deixar de receber"], answer: 3, why: "Os emails comerciais têm de incluir uma morada e uma opção para deixar de receber." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer uma auditoria de IA",
          minutes: 6,
          goal: "Entrevistar um dono de negócio e recomendar os três melhores usos da IA.",
          text: [
            "Uma auditoria de IA é uma análise organizada de como uma empresa funciona e de onde a IA pode ajudar. Use um questionário curto: Que tarefas levam mais tempo todas as semanas? O que perguntam mais os clientes? Onde acontecem erros? Que ferramentas já usa? O que o preocupa na IA?",
            "A partir das respostas, dê pontos a cada possível uso da IA pelo tempo poupado, custo, facilidade e risco. A IA pode ajudar a ordenar e dar pontos (sem o nome da empresa nem dados privados), mas o mais importante é o seu juízo. Escolha os três melhores: primeiro as vitórias rápidas.",
            "Inclua os riscos e as proteções de cada recomendação: quem verifica o que a IA produz, que dados têm de ficar fora das ferramentas de IA e o que precisa de um advogado ou contabilista. Limites honestos fazem os clientes confiar mais em você."
          ],
          steps: ["Use com o dono um questionário de auditoria de 10 perguntas.", "Faça a lista de todos os usos da IA possíveis que ouviu.", "Dê pontos a cada um pelo tempo poupado, custo, facilidade e risco.", "Escolha os três melhores, primeiro as vitórias rápidas.", "Acrescente uma proteção a cada um: verificação humana, regra de dados, especialista se for preciso."],
          words: [["Auditoria de IA", "uma análise organizada de uma empresa para encontrar onde a IA pode ajudar com segurança."], ["Vitória rápida", "uma mudança fácil de fazer que ajuda logo."], ["Proteção", "um passo que evita danos, como uma verificação feita por uma pessoa."]],
          slides: [
            { title: "As perguntas da auditoria", bullets: ["O que leva mais tempo?", "O que perguntam mais os clientes?", "Onde acontecem erros? O que o preocupa?"] },
            { title: "Dê pontos e escolha", bullets: ["Tempo poupado, custo, facilidade, risco", "Os três melhores, primeiro as vitórias rápidas", "A IA ajuda a ordenar; você decide"] },
            { title: "Acrescente proteções", bullets: ["Quem verifica o que a IA produz", "Que dados ficam fora das ferramentas de IA", "Quando chamar um advogado ou contabilista"] }
          ],
          tryIt: "Escreva o seu questionário de auditoria de 10 perguntas e use-o com um dono de negócio real (ou um amigo a fazer esse papel). Dê pontos às ideias e escreva as três melhores com proteções.",
          youCanNow: "fazer uma auditoria de IA e dar a uma empresa três recomendações seguras e práticas.",
          quickCheck: [
            { objective: "O5", q: "Que recomendações da auditoria devem vir primeiro?", options: ["Vitórias rápidas, fáceis e que ajudam logo", "As ferramentas mais caras", "As ideias com mais risco", "Tudo o que a IA sugerir"], answer: 0, why: "As vitórias rápidas criam confiança e mostram valor cedo." },
            { objective: "O5", q: "Quer que a IA ajude a ordenar as notas da auditoria. O que faz primeiro?", options: ["Cola-as como estão", "Tira o nome da empresa e os dados privados", "Envia-as por email a um amigo", "Publica-as na internet"], answer: 1, why: "Os dados dos clientes ficam fora das ferramentas de IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Propostas, acordos e dados dos clientes",
          minutes: 6,
          goal: "Escrever uma proposta de uma página e as suas regras para tratar os dados dos clientes.",
          text: [
            "Uma proposta transforma a sua auditoria numa decisão. Uma página: a situação do cliente nas palavras dele, as três recomendações, o pacote que sugere, o que vai entregar e quando, o preço e o que precisa dele. A IA pode fazer o rascunho a partir das suas notas; corrija-o para que cada promessa seja uma que pode cumprir.",
            "Faça um acordo escrito antes de começar trabalho pago: âmbito, preço, condições de pagamento, prazos, quem é dono do que cria e confidencialidade. Existem modelos, mas peça a um advogado para rever o seu.",
            "Escreva regras para os dados dos clientes e cumpra-as: nunca ponha listas de clientes, registos financeiros, palavras-passe ou informações privadas de um cliente em ferramentas de IA sem a autorização escrita dele e uma ferramenta com condições de dados adequadas; use as contas do cliente, e não as suas, para ferramentas que guardam os dados dele; e apague ou devolva os dados dele quando o projeto terminar. O guia da FTC (a agência de proteção do consumidor dos Estados Unidos) sobre proteger informações pessoais é uma boa base."
          ],
          steps: ["Faça com a IA o rascunho de uma proposta de uma página a partir das notas da auditoria.", "Verifique cada promessa e cada preço.", "Prepare um acordo escrito e peça a um advogado para o rever.", "Escreva as suas regras para os dados dos clientes.", "Partilhe as regras com os clientes antes de começar."],
          words: [["Proposta", "um documento curto que oferece um trabalho específico por um preço específico."], ["Confidencialidade", "manter privadas as informações de um cliente."], ["Âmbito", "exatamente que trabalho está incluído."]],
          slides: [
            { title: "Proposta de uma página", bullets: ["A situação do cliente nas palavras dele", "Três recomendações e um pacote", "Entregas, prazos, preço"] },
            { title: "Acordo escrito", bullets: ["Âmbito, preço, pagamento, prazos", "Propriedade e confidencialidade", "Peça a um advogado para o rever"] },
            { title: "Regras para os dados dos clientes", bullets: ["Sem dados privados do cliente na IA sem autorização escrita", "Use as contas do próprio cliente", "Apague ou devolva os dados no final"] }
          ],
          sources: [{ name: "FTC: Protecting Personal Information, A Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Tarefa final: escreva a proposta de uma página para a empresa que auditou e as suas regras para os dados dos clientes, e depois junte o seu kit inicial de consultoria: oferta, pacotes, questionário, resultados da auditoria, proposta e regras de dados.",
          youCanNow: "ganhar e servir clientes de consultoria em IA com propostas, acordos e regras de dados claros.",
          quickCheck: [
            { objective: "O6", q: "O que cobre um acordo de consultoria escrito?", options: ["Só o preço", "As suas ferramentas preferidas", "Âmbito, preço, pagamento, prazos, propriedade e confidencialidade", "A vida pessoal do cliente"], answer: 2, why: "Um acordo claro evita mal-entendidos." },
            { objective: "O6", q: "O projeto terminou e você ainda tem os ficheiros do cliente. O que faz?", options: ["Guarda-os para sempre", "Usa-os para outro cliente", "Partilha-os como exemplo", "Apaga-os ou devolve-os, como dizem as suas regras de dados"], answer: 3, why: "Os dados do cliente devem ser apagados ou devolvidos no final de um projeto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ganhe e sirva clientes",
        questions: [
          { objective: "O4", q: "De onde costumam vir os primeiros clientes de consultoria?", options: ["De pessoas que já o conhecem e de recomendações", "De listas de emails compradas", "De chamadas ao acaso com vozes de IA", "De avaliações falsas"], answer: 0, why: "A confiança e as recomendações trazem os primeiros clientes." },
          { objective: "O5", q: "Qual é uma boa pergunta de auditoria de IA?", options: ["\"Pode dar-me a sua lista de clientes?\"", "\"Qual é a palavra-passe do seu banco?\"", "\"Gosta de robôs?\"", "\"Que tarefas levam mais tempo todas as semanas?\""], answer: 3, why: "Mostra onde a IA pode poupar tempo." },
          { objective: "O5", q: "Que recomendações devem vir primeiro?", options: ["Os projetos mais caros", "Vitórias rápidas, fáceis e que ajudam logo", "As ideias com mais risco", "O que a IA disser"], answer: 1, why: "As vitórias rápidas criam confiança e resultados." },
          { objective: "O6", q: "Antes de começar trabalho pago, deve ter:", options: ["Um acordo escrito, revisto por um advogado", "Só um aperto de mão", "Nada", "Uma publicação nas redes sociais"], answer: 0, why: "Os acordos evitam mal-entendidos." },
          { objective: "O6", q: "Pode colar a lista de clientes de um cliente numa ferramenta de IA?", options: ["Sim, se a ferramenta for gratuita", "Sim, a qualquer momento", "Só com a autorização escrita dele e uma ferramenta com condições de dados adequadas", "Só à noite"], answer: 2, why: "Os dados dos clientes precisam de autorização e de proteção." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Começar um Negócio de Consultoria em IA",
    questions: [
      { objective: "O1", q: "Um consultor de IA precisa principalmente de:", options: ["Ser programador a tempo inteiro", "Entender os problemas das empresas e conhecer bem as ferramentas de IA", "Ter um centro de dados", "Ter muitos seguidores nas redes sociais"], answer: 1, why: "Entender o negócio e conhecer as ferramentas é o essencial." },
      { objective: "O1", q: "Uma oferta forte inclui:", options: ["Só o seu preço por hora", "Só o seu nome", "Uma lista longa de todas as ferramentas", "Quem ajuda, o resultado e como"], answer: 3, why: "Estas três partes tornam-na clara." },
      { objective: "O1", q: "Um nicho é:", options: ["Um preço", "Um tipo de modelo de IA", "Uma forma legal de empresa", "Um tipo específico de cliente em que se concentra"], answer: 3, why: "O foco torna o marketing mais fácil." },
      { objective: "O2", q: "Um projeto-piloto é:", options: ["Um trabalho numa companhia aérea", "Um pequeno projeto de teste para mostrar que uma coisa funciona", "Um contrato longo", "Um formulário de impostos"], answer: 1, why: "Os pilotos criam provas." },
      { objective: "O2", q: "Um piloto deve ter:", options: ["Dez objetivos", "Nenhum objetivo", "Um resultado que se pode medir, com números de antes e depois", "Só um logótipo"], answer: 2, why: "Os números tornam a prova convincente." },
      { objective: "O2", q: "Antes de partilhar um estudo de caso, precisa de:", options: ["A autorização escrita do cliente", "Nada", "Aprovação da IA", "A autorização de um concorrente"], answer: 0, why: "Respeite a privacidade e a confiança do cliente." },
      { objective: "O3", q: "Os pacotes são melhores do que horas sem limite porque:", options: ["Evitam impostos", "São sempre mais baratos", "São mais fáceis de entender e de comprar para os clientes", "Não dão trabalho"], answer: 2, why: "Entregas e preços claros ajudam os clientes a decidir." },
      { objective: "O3", q: "Um pacote de Auditoria de IA entrega:", options: ["Uma análise da empresa e as principais recomendações de IA", "Um site novo", "A entrega da declaração de impostos", "Aconselhamento jurídico"], answer: 0, why: "É esse o objetivo da auditoria." },
      { objective: "O3", q: "Quando define o preço, inclua tempo para:", options: ["Nada mais", "Revisão e seguimento", "Só viagens", "Só pausas para café"], answer: 1, why: "O tempo escondido come o lucro." },
      { objective: "O3", q: "Os consultores por conta própria (nos EUA) em geral pagam:", options: ["Só uma taxa de licença", "Nenhum imposto", "Só imposto sobre vendas", "O imposto de trabalho por conta própria e muitas vezes impostos estimados a cada trimestre"], answer: 3, why: "O centro de impostos do IRS para trabalhadores por conta própria explica isto." },
      { objective: "O4", q: "Uma oficina curta e gratuita ajuda você a:", options: ["Conhecer donos de negócios e mostrar o que sabe", "Evitar clientes", "Recolher palavras-passe", "Saltar as propostas"], answer: 0, why: "Ensinar cria confiança." },
      { objective: "O4", q: "Os emails comerciais de contacto têm de incluir:", options: ["Uma garantia", "A palavra-passe do cliente", "Um prazo falso", "A sua morada física e uma opção para deixar de receber"], answer: 3, why: "Estas são as regras básicas da lei CAN-SPAM." },
      { objective: "O5", q: "Numa auditoria de IA, dá pontos às ideias pelo:", options: ["Quanto estão na moda", "Cor e tipo de letra", "Tempo poupado, custo, facilidade e risco", "A sua ferramenta preferida"], answer: 2, why: "Isto mostra que ideias vale a pena fazer." },
      { objective: "O5", q: "Antes de pedir à IA para ajudar a ordenar as notas da auditoria, deve:", options: ["Acrescentar os registos bancários do cliente", "Tirar o nome da empresa e os dados privados", "Publicá-las na internet", "Enviá-las por email a toda a gente"], answer: 1, why: "Proteja as informações do cliente." },
      { objective: "O5", q: "Cada recomendação deve incluir:", options: ["Mais nada", "Uma garantia de resultados", "Um testemunho falso", "Uma proteção, como quem verifica o que a IA produz"], answer: 3, why: "As proteções tornam seguro o uso da IA." },
      { objective: "O6", q: "Uma proposta deve descrever a situação do cliente:", options: ["De forma nenhuma", "Com palavras técnicas difíceis", "Nas palavras dele", "Com a história de um concorrente"], answer: 2, why: "As palavras dele mostram que você ouviu." },
      { objective: "O6", q: "Um acordo escrito cobre:", options: ["Âmbito, preço, pagamento, prazos, propriedade e confidencialidade", "Só o seu logótipo", "Só a data de início", "Nada"], answer: 0, why: "Isto evita conflitos." },
      { objective: "O6", q: "Quem deve rever o seu modelo de acordo?", options: ["Só a IA", "Um advogado", "Os clientes do seu cliente", "Ninguém"], answer: 1, why: "Os documentos legais precisam de uma revisão profissional." },
      { objective: "O6", q: "Para ferramentas que guardam os dados de um cliente, o melhor é usar:", options: ["As suas contas pessoais", "As contas do próprio cliente", "Uma conta pública partilhada", "Qualquer ferramenta gratuita"], answer: 1, why: "O cliente mantém o controlo dos seus dados." },
      { objective: "O6", q: "No final de um projeto, os dados do cliente devem ser:", options: ["Apagados ou devolvidos", "Guardados para sempre", "Partilhados com outros clientes", "Publicados na internet"], answer: 0, why: "Não guarde dados de que já não precisa." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 3, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Nicho e oferta", objective: "O1", notYet: "A oferta é vaga ou não tem um cliente claro.", meets: "Uma frase que diz quem, o resultado e como.", exceeds: "Usa palavras que os clientes do nicho usam de verdade." },
      { name: "Pacotes de serviços", objective: "O3", notYet: "Menos de três pacotes, ou preços sem contas por trás.", meets: "Três pacotes com entregas, tempo, o que o cliente fornece e preços, com as contas verificadas.", exceeds: "Inclui o tempo de revisão e de seguimento e explica o valor para o cliente." },
      { name: "Auditoria de IA", objective: "O5", notYet: "Sem questionário, ou recomendações sem pontos nem proteções.", meets: "Questionário de 10 perguntas, uma auditoria real, os três melhores usos com pontos e proteções.", exceeds: "As recomendações começam pelas vitórias rápidas e mostram o tempo que se espera poupar." },
      { name: "Proposta", objective: "O6", notYet: "A proposta é genérica ou não tem âmbito ou preço.", meets: "Uma página com a situação do cliente nas palavras dele, âmbito, preço e prazos.", exceeds: "Inclui um resultado que se pode medir e como vai ser verificado." },
      { name: "Regras para os dados dos clientes", objective: "O6", notYet: "Sem regras escritas, ou foram dados privados para a IA.", meets: "Regras escritas: autorização, contas do próprio cliente, dados apagados ou devolvidos no final.", exceeds: "Também diz que ferramentas de IA podem guardar dados de clientes e como verificar as condições delas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem um piloto ou uma auditoria paga com uma empresa real em 60 dias (inquérito de seguimento)",
      "Primeiros clientes de consultoria que pagam, e clientes que voltam ou vêm por recomendação",
      "Alunos que começam outro curso da Koach Learn para empreendedores em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com um assistente de IA gratuito, uma folha de cálculo e email",
      "Um dono de negócio real (ou um amigo a fazer esse papel) para a auditoria",
      "Um modelo de proposta de uma página",
      "Cerca de 60 a 75 minutos para as lições e as verificações, mais a reunião da auditoria"
    ],
    facilitatorNotes: [
      "Ponha os alunos em pares para simularem entrevistas de auditoria antes de encontrarem um dono real.",
      "Sublinhe que os resultados dos pilotos e os estudos de caso têm de ser reais e só partilhados com autorização escrita.",
      "Confirme que os nomes dos clientes e os dados privados são retirados antes de as notas irem para a IA.",
      "Encaminhe as perguntas sobre impostos e acordos para fontes oficiais, um contabilista e um advogado.",
      "Avalie o kit inicial com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
