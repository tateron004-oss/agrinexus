"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "smallbiz-essential-ai-tools-pt",
  lang: "pt",
  translationOf: "smallbiz-essential-ai-tools",
  category: "Small Business",
  name: "Ferramentas de IA Essenciais para Pequenos Negócios",
  skills: "Escolher a ferramenta de IA certa para cada tarefa, Usar um assistente de conversa para escrever para o negócio, Fazer imagens com o Canva, Usar IA em documentos e folhas de cálculo, Montar um conjunto inicial de ferramentas de IA",
  outcome: "escolher a ferramenta de IA gratuita certa para uma tarefa do negócio e usá-la: um assistente de conversa para escrever, o Canva para um folheto ou uma publicação, e um programa de documentos ou de folhas de cálculo para uma lista de preços ou uma tabela simples de vendas, e depois juntá-las num conjunto inicial de ferramentas que vai mesmo usar todas as semanas.",
  about: [
    "Este curso é para donos de pequenos negócios que querem um conjunto curto e prático de ferramentas, em vez de correr atrás de cada aplicação nova. Os nossos exemplos vêm de lojas, restaurantes, salões de beleza, serviços de limpeza e de reparação, e carrinhas de comida.",
    "Você vai aprender que tipos de ferramentas de IA existem, experimentar um assistente de conversa, uma ferramenta de design e a ajuda de IA dentro dos documentos e das folhas de cálculo, e terminar com o seu próprio conjunto de ferramentas: que ferramenta para que tarefa, e o que nunca vai colocar nela.",
    "Os preços, os nomes dos planos e as funções mudam muitas vezes. Explicamos o que fazer em vez dos nomes exatos dos menus; veja no site oficial de cada ferramenta o plano gratuito atual. Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\", uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Monte o seu conjunto inicial de ferramentas de IA: uma tabela de uma página com três a cinco ferramentas que vai usar, a tarefa que cada uma faz no seu negócio, se usa o plano gratuito e uma regra de segurança para cada uma. Depois prove que funciona fazendo um trabalho real com cada ferramenta: uma mensagem para clientes (assistente de conversa), um folheto ou uma publicação (Canva) e uma lista de preços ou uma tabela de vendas (Docs/Word ou Sheets/Excel).",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios que querem um conjunto curto e prático de ferramentas de IA, em vez de correr atrás de cada aplicação nova: lojas, restaurantes, salões de beleza, serviços de limpeza e de reparação, e carrinhas de comida.",
    startingPoint: "Usam um telefone ou um computador para mensagens do negócio e talvez já tenham experimentado um assistente de conversa de IA. Pouca experiência com ferramentas de design, ajudantes de IA em documentos ou folhas de cálculo com fórmulas.",
    gap: "Os donos perdem tempo e dinheiro a experimentar muitas aplicações ou a pagar planos melhores de que não precisam, e podem colocar dados de clientes na ferramenta errada. Precisam de um pequeno conjunto de ferramentas gratuitas, cada uma com uma tarefa clara e uma regra de segurança, que vão mesmo usar todas as semanas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um smartphone ou um computador; as folhas de cálculo são mais fáceis no computador",
      "Tempo: lições de cerca de 5 minutos, que cabem num dia de trabalho cheio",
      "Os preços, os nomes dos planos e as funções mudam; veja no site oficial de cada ferramenta o plano gratuito atual",
      "Privacidade: nenhum número de cartão, palavra-passe ou nome de clientes nas ferramentas de IA"
    ],
    prerequisites: "O curso \"Introdução à IA para Pequenos Negócios\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os principais tipos de ferramentas de IA", action: "ligar cada tipo de ferramenta a uma tarefa do seu negócio", standard: "com uma tarefa para cada um dos quatro tipos" },
    { id: "O2", condition: "Usando um assistente de conversa gratuito", action: "fazer três trabalhos diferentes para o negócio numa só conversa", standard: "dando os dados do seu negócio uma vez no início e verificando cada número" },
    { id: "O3", condition: "Usando um modelo do Canva", action: "fazer um folheto ou uma publicação para as redes sociais sobre uma oferta ou um evento real", standard: "com uma mensagem principal, como contactar você, cada palavra verificada e só fotos que tem o direito de usar" },
    { id: "O4", condition: "Com notas soltas e o Google Docs ou o Microsoft Word", action: "transformar as notas num documento limpo do negócio com ajuda da IA", standard: "guardado no seu documento, com as palavras legais verificadas por um profissional ou por uma fonte oficial" },
    { id: "O5", condition: "Usando o Google Sheets ou o Microsoft Excel", action: "montar uma tabela de vendas ou de stock e ter ajuda da IA para a ler", standard: "com pelo menos 10 linhas, uma fórmula SUM para o total e a resposta da IA confirmada na folha" },
    { id: "O6", condition: "Com as ferramentas que experimentou", action: "criar uma tabela inicial de três a cinco ferramentas com uma tarefa e uma regra de segurança para cada uma", standard: "indicando ferramenta, tarefa, plano e regra de segurança, usando os planos gratuitos antes de pagar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Os principais tipos de ferramentas de IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Um mapa das ferramentas de IA para pequenos negócios",
          minutes: 5,
          goal: "Dizer os principais tipos de ferramentas de IA e ligar cada um a uma tarefa do negócio.",
          text: [
            "Não precisa de dezenas de aplicações. A maioria dos pequenos negócios tira mais proveito de quatro tipos de ferramentas.",
            "Os assistentes de conversa (ChatGPT, Microsoft Copilot, Google Gemini) escrevem e explicam: respostas, descrições, planos, listas de verificação. As ferramentas de design (o Canva e outras) fazem folhetos, publicações para as redes sociais, menus e logótipos, e muitas já têm funções de IA para ajudar com textos e imagens. As ferramentas de escritório (Google Docs e Sheets, Microsoft Word e Excel) guardam os seus documentos e números, e as duas empresas acrescentam ajudantes de IA a elas em alguns planos. As ferramentas que já vêm dentro de outras aplicações, como o seu sistema de caixa, de marcações ou de email, também podem ter funções de IA.",
            "Comece com uma ferramenta por tarefa. Aprenda a usá-la bem antes de acrescentar outra."
          ],
          words: [["Assistente de conversa", "uma ferramenta de IA com quem conversa numa caixa de mensagens, como o ChatGPT, o Copilot ou o Gemini."], ["Ferramenta de design", "uma aplicação para fazer imagens como folhetos e publicações, como o Canva."], ["Sistema de caixa (POS)", "o sistema que usa para registar as vendas."]],
          slides: [
            { title: "Quatro tipos de ferramentas", bullets: ["Assistentes de conversa: escrevem e explicam", "Ferramentas de design: folhetos, publicações, menus", "Ferramentas de escritório: documentos e números", "IA dentro das aplicações que já usa"] },
            { title: "Exemplos", bullets: ["ChatGPT, Copilot, Gemini", "Canva", "Google Docs e Sheets; Word e Excel"] },
            { title: "Mantenha simples", bullets: ["Uma ferramenta por tarefa", "Aprenda bem primeiro", "Acrescente outra só quando precisar"] }
          ],
          tryIt: "Escreva os quatro tipos de ferramentas de cima para baixo no lado de uma folha. Ao lado de cada um, escreva uma tarefa do seu negócio que ele pode fazer este mês.",
          youCanNow: "dizer os principais tipos de ferramentas de IA e ligar cada um a uma tarefa do seu negócio.",
          quickCheck: [
            { objective: "O1", q: "Que tipo de ferramenta são o ChatGPT, o Copilot e o Gemini?", options: ["Ferramentas de design", "Folhas de cálculo", "Assistentes de conversa", "Aplicações de marcações"], answer: 2, why: "São assistentes de conversa com quem fala para ter rascunhos e respostas." },
            { objective: "O1", q: "Quer desenhar um novo quadro de menu. Que tipo de ferramenta escolhe?", options: ["Uma ferramenta de design como o Canva", "Uma folha de cálculo", "Uma aplicação de marcações", "Uma calculadora"], answer: 0, why: "As ferramentas de design têm modelos feitos para menus e folhetos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tirar o máximo de um assistente de conversa",
          minutes: 5,
          goal: "Usar um assistente de conversa para fazer três trabalhos diferentes para o negócio numa só conversa.",
          text: [
            "Um assistente de conversa é a ferramenta mais versátil que tem. Pode escrever, reescrever, resumir, traduzir e planear. Abra-o na aplicação do telefone ou em chatgpt.com, copilot.microsoft.com ou gemini.google.com.",
            "Dê-lhe os dados do seu negócio uma vez no início da conversa: \"Tenho uma barbearia com duas cadeiras em Long Beach. O nosso estilo é simpático e de bairro. Preços: corte $30, corte e barba $40.\" Depois peça várias coisas seguidas: um quadro de preços, um modelo de SMS de lembrete, uma resposta a uma avaliação.",
            "Peça opções e tabelas quando ajudam: \"Dê-me três versões\" ou \"Ponha isto numa tabela.\" Verifique sempre os números que ele repete."
          ],
          steps: ["Abra um assistente de conversa.", "Dê os dados do seu negócio uma vez no início.", "Peça o trabalho 1, depois o trabalho 2, depois o trabalho 3.", "Peça opções ou uma tabela quando ajudar.", "Verifique cada número antes de o usar."],
          words: [["Resumir", "fazer uma versão curta de uma coisa longa."], ["Modelo", "um padrão pronto que preenche de cada vez."]],
          slides: [
            { title: "Um ajudante versátil", bullets: ["Escreve, reescreve, resume, traduz, planeia", "Aplicação do telefone ou navegador de internet"] },
            { title: "Prepare uma vez por conversa", bullets: ["O tipo de negócio e a sua cidade", "O seu estilo e os seus preços", "Depois peça um trabalho atrás do outro"] },
            { title: "Pedidos úteis", bullets: ["\"Dê-me três versões.\"", "\"Ponha isto numa tabela.\"", "Verifique cada número que ele repete"] }
          ],
          tryIt: "Numa só conversa, dê os dados do seu negócio e depois peça: um quadro de preços, um modelo de SMS de lembrete com \"[nome do cliente]\" e uma resposta de agradecimento a uma boa avaliação.",
          youCanNow: "usar uma só conversa para fazer vários trabalhos para o negócio a partir dos seus próprios dados.",
          quickCheck: [
            { objective: "O2", q: "Quando deve dar os dados do seu negócio numa conversa?", options: ["Nunca", "Outra vez em cada pedido", "Só no fim", "Uma vez no início"], answer: 3, why: "Dar os dados uma vez no início deixa todas as respostas da conversa usá-los." },
            { objective: "O2", q: "O assistente fez o seu quadro de preços, mas um preço parece errado. O que faz?", options: ["Imprime mesmo assim", "Verifica cada número com os seus preços verdadeiros e corrige", "Pede um design novo", "Tira todos os preços"], answer: 1, why: "A IA pode repetir números mal, por isso verifique cada um." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer um folheto ou uma publicação com o Canva",
          minutes: 5,
          goal: "Fazer um folheto ou uma publicação simples para as redes sociais com uma ferramenta de design gratuita.",
          text: [
            "O Canva é uma ferramenta de design que funciona no navegador de internet e como aplicação no telefone. Tem um plano gratuito e milhares de modelos prontos para folhetos, menus, publicações e cartões de visita. Veja em canva.com o que o plano gratuito inclui hoje.",
            "Comece a partir de um modelo, não de uma página em branco. Procure o que precisa (\"folheto restaurante\", \"publicação Instagram salão\"), escolha um e depois mude as palavras, as cores e as fotos para as suas. Use o texto do seu assistente de conversa.",
            "Use as suas próprias fotos ou fotos que a ferramenta deixa usar. Mantenha simples: uma mensagem principal, letras grandes e fáceis de ler, o nome do seu negócio e como contactar você. Verifique a escrita da sua morada e do seu número de telefone."
          ],
          steps: ["Abra o Canva e procure um modelo.", "Mude as palavras para a sua mensagem.", "Troque as fotos e as cores pelas suas.", "Acrescente o seu nome, a morada e como contactar você.", "Verifique cada palavra e depois descarregue ou partilhe."],
          words: [["Modelo", "um design pronto que muda para o tornar seu."], ["Plano gratuito", "a versão de uma ferramenta que pode usar sem pagar, normalmente com alguns limites."]],
          slides: [
            { title: "Canva", bullets: ["Navegador e aplicação do telefone", "Plano gratuito com muitos modelos", "Veja em canva.com as funções gratuitas de hoje"] },
            { title: "Comece a partir de um modelo", bullets: ["Procure \"folheto restaurante\" ou \"publicação salão\"", "Mude palavras, cores e fotos", "Use o texto do seu assistente de conversa"] },
            { title: "Mantenha claro", bullets: ["Uma mensagem principal, letras grandes", "Nome, morada, como contactar você", "Verifique cada palavra antes de partilhar"] }
          ],
          tryIt: "Faça um folheto ou uma publicação sobre uma oferta ou um evento real do seu negócio com um modelo do Canva. Verifique cada palavra e guarde-o.",
          youCanNow: "fazer um folheto ou uma publicação clara a partir de um modelo com uma ferramenta de design gratuita.",
          quickCheck: [
            { objective: "O3", q: "O que tem um folheto claro?", options: ["Uma mensagem principal e como contactar você", "Todo o texto que couber", "Todos os produtos que vende", "Nenhum contacto"], answer: 0, why: "Uma mensagem principal e os contactos tornam o folheto fácil de seguir." },
            { objective: "O3", q: "Encontra uma ótima foto na internet para o seu folheto. O que faz?", options: ["Usa-a porque está na internet", "Corta-a para ninguém notar", "Usa a sua própria foto ou uma que tem o direito de usar", "Pede à IA para a copiar"], answer: 2, why: "Só pode usar fotos que tirou ou que tem o direito de usar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Os principais tipos de ferramentas de IA",
        questions: [
          { objective: "O1", q: "Que tipo de ferramenta é melhor para escrever uma resposta a um cliente?", options: ["Uma impressora de recibos", "Um assistente de conversa", "Um leitor de código de barras", "Uma calculadora"], answer: 1, why: "Os assistentes de conversa escrevem e reescrevem textos." },
          { objective: "O1", q: "Que ferramenta é conhecida pelos modelos de folhetos e de publicações?", options: ["Uma calculadora", "Um sistema de caixa (POS)", "Só o Excel", "O Canva"], answer: 3, why: "O Canva é uma ferramenta de design com modelos." },
          { objective: "O1", q: "Qual é uma boa forma de começar a usar ferramentas de IA?", options: ["Uma ferramenta por tarefa, bem aprendida", "Instalar vinte aplicações de uma vez", "Pagar todos os planos", "Evitar todas as ferramentas"], answer: 0, why: "Comece simples e aprenda bem uma ferramenta." },
          { objective: "O2", q: "Deu os seus preços ao assistente de conversa. O que verifica no quadro de preços dele?", options: ["Nada", "Só as cores", "Cada número que ele repete", "Só o título"], answer: 2, why: "A IA pode repetir números mal." },
          { objective: "O3", q: "Para fazer um folheto no Canva, deve começar a partir de:", options: ["Uma página em branco todas as vezes", "O folheto de um concorrente", "Um modelo que muda para o tornar seu", "Uma foto que não tem o direito de usar"], answer: 2, why: "Os modelos poupam tempo; você muda-os para serem seus." }
        ]
      }
    },
    {
      name: "Capítulo 2: A IA nas suas ferramentas de escritório e o seu conjunto de ferramentas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ajuda de IA nos documentos: Google Docs e Microsoft Word",
          minutes: 5,
          goal: "Transformar uma nota solta num documento limpo do negócio.",
          text: [
            "A maioria dos negócios guarda listas de preços, regras e cartas no Google Docs ou no Microsoft Word. Os dois são gratuitos no navegador de internet com uma conta Google ou Microsoft. A Google e a Microsoft acrescentam ajudantes de IA (Gemini e Copilot) dentro deles em alguns planos; o que você vê depende da sua conta.",
            "Se o seu programa de documentos tiver um ajudante de IA, pode pedir-lhe para escrever ou reescrever ali mesmo na página. Se não tiver, escreva o rascunho num assistente de conversa e cole o texto. De qualquer forma, o documento é onde guarda a versão final e verificada.",
            "Boas tarefas para documentos: uma regra de cancelamento, uma lista de abertura para os funcionários, uma lista de preços, uma carta ao senhorio. Para regras e tudo o que for legal, peça a um profissional ou à fonte oficial para verificar."
          ],
          steps: ["Escreva notas soltas sobre o que quer.", "Peça a um ajudante de IA (no documento ou num assistente de conversa) para as transformar num documento limpo.", "Cole-o ou guarde-o no Docs ou no Word.", "Verifique os dados e corrija as palavras.", "Guarde-o com um nome claro."],
          words: [["Google Docs", "o programa gratuito de texto da Google, no navegador de internet."], ["Microsoft Word", "o programa de texto da Microsoft, gratuito na internet com uma conta Microsoft."], ["Regra (política)", "uma regra escrita do seu negócio, como o modo de funcionar dos cancelamentos."]],
          slides: [
            { title: "Os seus documentos", bullets: ["Google Docs ou Microsoft Word", "Gratuitos no navegador com uma conta", "Ajudantes de IA em alguns planos"] },
            { title: "Duas formas de usar a IA aqui", bullets: ["Use o ajudante de IA do documento, se tiver um", "Ou escreva num assistente de conversa e cole"] },
            { title: "Boas tarefas para documentos", bullets: ["Regra de cancelamento", "Lista de abertura e lista de preços", "Peça a um profissional para verificar as palavras legais"] }
          ],
          tryIt: "Escreva cinco linhas soltas sobre a sua regra de cancelamento ou de atrasos. Use a IA para as transformar numa regra clara e educada e guarde-a no Docs ou no Word.",
          youCanNow: "transformar notas soltas num documento limpo do negócio usando a IA e uma ferramenta de escritório.",
          quickCheck: [
            { objective: "O4", q: "Onde deve ficar a versão final e verificada de uma regra do negócio?", options: ["Só na conversa com a IA", "No seu documento no Docs ou no Word", "Num papelinho colado", "Numa SMS para si mesmo"], answer: 1, why: "O seu documento guarda a versão verificada em segurança e fácil de partilhar." },
            { objective: "O4", q: "A IA transformou as suas notas numa regra de reembolso com palavras legais. O que faz?", options: ["Publica sem ler", "Apaga as palavras legais", "Pergunta à IA se é legal", "Pede a um profissional ou à fonte oficial para verificar as palavras"], answer: 3, why: "As palavras legais devem ser verificadas por um profissional ou por uma fonte oficial." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ajuda de IA nas folhas de cálculo: Sheets e Excel",
          minutes: 5,
          goal: "Montar uma tabela simples de vendas ou de stock e ter ajuda da IA para a ler.",
          text: [
            "Uma folha de cálculo é uma grelha de linhas e colunas para números. O Google Sheets e o Microsoft Excel são as escolhas mais comuns. Uma tabela simples, como Data, Produto, Quantidade, Preço, Total, já lhe diz muito.",
            "A IA pode ajudar de duas formas. Pode dizer-lhe como fazer uma coisa (\"Como somo a coluna E no Google Sheets?\") e, em alguns planos, pode trabalhar dentro da folha. Também pode colar uma tabela pequena, sem dados privados, num assistente de conversa e perguntar: \"Que produto vendeu mais?\"",
            "Verifique as contas. A IA é melhor a explicar do que a calcular, por isso deixe a folha de cálculo fazer os totais com uma fórmula SUM e use a IA para explicar ou sugerir o que olhar."
          ],
          steps: ["Faça as colunas: Data, Produto, Quantidade, Preço, Total.", "Escreva as vendas de uma semana.", "Pergunte à IA como pôr um total com SUM, e faça-o.", "Pergunte à IA que produto vendeu mais e depois confirme na folha."],
          words: [["Folha de cálculo", "uma grelha de linhas e colunas para números, como o Google Sheets ou o Excel."], ["Fórmula", "uma instrução numa célula que faz uma conta, como =SUM(E2:E20)."]],
          slides: [
            { title: "Uma tabela simples de vendas", bullets: ["Data, Produto, Quantidade, Preço, Total", "Google Sheets ou Microsoft Excel"] },
            { title: "Como a IA ajuda", bullets: ["Explica como: \"Como somo a coluna E?\"", "Trabalha dentro da folha em alguns planos", "Lê uma tabela pequena sem dados privados"] },
            { title: "Deixe a folha fazer as contas", bullets: ["Use uma fórmula SUM para os totais", "A IA explica; a folha calcula", "Confirme nos seus dados o que a IA diz"] }
          ],
          tryIt: "Faça uma tabela de vendas ou de stock com pelo menos 10 linhas. Use uma fórmula SUM para o total e pergunte à IA que produto vendeu mais. Confirme a resposta na sua folha.",
          youCanNow: "montar uma tabela simples de vendas e usar a IA para a ler, enquanto a folha de cálculo faz as contas.",
          quickCheck: [
            { objective: "O5", q: "O que é =SUM(E2:E20)?", options: ["Uma fórmula que soma uma coluna", "O nome de um ficheiro", "Um pedido numa conversa", "Uma palavra-passe"], answer: 0, why: "SUM é uma fórmula da folha de cálculo que soma números." },
            { objective: "O5", q: "A IA diz que o produto mais vendido no mês passado foi o café. O que faz?", options: ["Encomenda mais café já", "Pergunta outra vez à IA até ela concordar", "Confirma na sua folha", "Apaga a tabela de vendas"], answer: 2, why: "Confirme na própria folha a leitura que a IA fez dos seus dados." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Montar o seu conjunto inicial de ferramentas de IA",
          minutes: 5,
          goal: "Escolher três a cinco ferramentas, dar uma tarefa a cada uma e definir uma regra de segurança para cada uma.",
          text: [
            "O seu conjunto de ferramentas é uma lista curta: a ferramenta, a tarefa dela, o plano e uma regra. Por exemplo: ChatGPT (gratuito) para respostas e descrições; Canva (gratuito) para folhetos; Google Sheets para as vendas da semana; Google Docs para as regras.",
            "Antes de pagar um plano melhor, use o plano gratuito durante um mês e escreva o que não conseguiu fazer. Pague só uma função de que precisa mesmo, e veja o preço no site oficial.",
            "As regras de segurança vão com todas as ferramentas: nenhum número de cartão de clientes, palavra-passe ou dado privado; verifique cada dado antes de os clientes o verem; use só fotos e textos que tem o direito de usar."
          ],
          steps: ["Escreva três a cinco ferramentas.", "Escreva uma tarefa para cada uma.", "Escreva \"gratuito\" ou o plano que paga.", "Escreva uma regra de segurança para cada uma.", "Faça um trabalho real com cada ferramenta."],
          words: [["Conjunto de ferramentas", "a lista curta das ferramentas que usa e para que serve cada uma."], ["Plano melhor (upgrade)", "um plano pago com mais funções."]],
          slides: [
            { title: "A sua tabela de ferramentas", bullets: ["Ferramenta | Tarefa | Plano | Regra de segurança", "Três a cinco ferramentas chegam"] },
            { title: "Antes de pagar", bullets: ["Use o plano gratuito durante um mês", "Escreva o que não conseguiu fazer", "Veja o preço no site oficial"] },
            { title: "Regras para todas as ferramentas", bullets: ["Nenhum número de cartão, palavra-passe ou dado privado", "Verifique os dados antes de os clientes os verem", "Use só fotos que tem o direito de usar"] }
          ],
          tryIt: "Tarefa final: faça a sua tabela de ferramentas e depois um trabalho real com cada ferramenta: uma mensagem para clientes, um folheto ou uma publicação, e uma lista de preços ou uma tabela de vendas.",
          youCanNow: "escolher, organizar e usar com segurança um pequeno conjunto de ferramentas de IA para o seu negócio.",
          quickCheck: [
            { objective: "O6", q: "O que indica a sua tabela de ferramentas?", options: ["Todas as aplicações do seu telefone", "Ferramenta, tarefa, plano e regra de segurança", "Só os preços das ferramentas", "Os nomes dos seus clientes"], answer: 1, why: "Cada linha diz que ferramenta, a tarefa dela, o plano e a regra de segurança." },
            { objective: "O6", q: "Uma ferramenta oferece um plano melhor pago. Quando o pagaria?", options: ["Já, por precaução", "Nunca, em nenhum caso", "Quando um amigo o comprar", "Quando precisar de uma função que o plano gratuito não tem"], answer: 3, why: "Pague só quando falta ao plano gratuito uma coisa de que precisa mesmo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: As ferramentas de escritório e o seu conjunto de ferramentas",
        questions: [
          { objective: "O4", q: "O seu programa de documentos não tem ajudante de IA. O que pode fazer?", options: ["Escrever o rascunho num assistente de conversa e colá-lo", "Desistir", "Comprar um computador novo", "Escrevê-lo no Excel"], answer: 0, why: "Um rascunho do assistente de conversa pode ser colado em qualquer documento." },
          { objective: "O4", q: "Quem deve verificar as palavras de uma regra legal?", options: ["Só a IA", "Ninguém", "Um cliente", "Um profissional ou a fonte oficial"], answer: 3, why: "As palavras legais precisam da verificação de um profissional." },
          { objective: "O5", q: "O que deve fazer os totais na sua tabela de vendas?", options: ["Um palpite da IA", "Uma fórmula SUM na folha de cálculo", "Contas de cabeça", "Uma publicação nas redes sociais"], answer: 1, why: "As folhas de cálculo calculam com segurança; a IA explica." },
          { objective: "O6", q: "Antes de pagar um plano melhor de IA, deve:", options: ["Usar o plano gratuito durante algum tempo e anotar o que falta", "Pagar já", "Perguntar a um anúncio que aparece no ecrã", "Comprar todos os planos"], answer: 0, why: "Pague só o que precisa mesmo." },
          { objective: "O6", q: "Qual é uma regra de segurança para todas as ferramentas?", options: ["Colar números de cartão para poupar tempo", "Partilhar a sua palavra-passe com a ferramenta", "Nunca colocar nela números de cartão de clientes nem palavras-passe", "Usar qualquer foto da internet"], answer: 2, why: "Os dados privados ficam fora das ferramentas de IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ferramentas de IA Essenciais para Pequenos Negócios",
    questions: [
      { objective: "O1", q: "O ChatGPT, o Copilot e o Gemini são exemplos de:", options: ["Caixas registadoras", "Assistentes de conversa", "Aplicações de entregas", "Bancos"], answer: 1, why: "São assistentes de conversa de IA." },
      { objective: "O1", q: "Que tipo de ferramenta é melhor para desenhar um menu?", options: ["Um termómetro", "Uma calculadora", "Uma aplicação do banco", "Uma ferramenta de design como o Canva"], answer: 3, why: "As ferramentas de design fazem menus e folhetos." },
      { objective: "O1", q: "As funções de IA também podem aparecer dentro de:", options: ["Mais nenhum lado", "Só brinquedos", "Só impressoras", "Aplicações que já usa, como as de marcações ou de caixa (POS)"], answer: 3, why: "Muitas aplicações de negócio acrescentam funções de IA." },
      { objective: "O2", q: "Numa conversa, quando dá os dados do seu negócio?", options: ["Nunca", "Uma vez no início", "Só no fim", "Em cada palavra"], answer: 1, why: "Dá-los uma vez no início deixa-o pedir vários trabalhos." },
      { objective: "O2", q: "\"Dê-me três versões\" ajuda-o a:", options: ["Pagar menos impostos", "Apagar a conversa", "Escolher a melhor opção", "Partilhar palavras-passe"], answer: 2, why: "As opções deixam você escolher." },
      { objective: "O2", q: "Um modelo de SMS de lembrete deve usar:", options: ["\"[nome do cliente]\" como marcador", "O número do cartão do cliente", "A sua palavra-passe", "A morada de um cliente verdadeiro"], answer: 0, why: "Os marcadores deixam os dados privados de fora." },
      { objective: "O3", q: "Onde vê o que o plano gratuito do Canva inclui hoje?", options: ["Num palpite", "Num artigo antigo de um blog", "Em canva.com", "Num concorrente"], answer: 2, why: "O site oficial tem os dados atuais dos planos." },
      { objective: "O3", q: "Um folheto claro tem:", options: ["Uma mensagem principal e como contactar você", "Dez mensagens", "Letras minúsculas", "Nenhum nome do negócio"], answer: 0, why: "Simples e fácil de ler funciona melhor." },
      { objective: "O3", q: "Que fotos deve usar?", options: ["Qualquer foto da internet", "As suas ou as que tem o direito de usar", "As de um concorrente", "Fotos ao acaso das redes sociais"], answer: 1, why: "Use só imagens que tem o direito de usar." },
      { objective: "O4", q: "O Google Docs e o Microsoft Word são:", options: ["Só ferramentas de design", "Operadoras de telefone", "Aplicações de pagamento", "Ferramentas de documentos"], answer: 3, why: "São programas de texto." },
      { objective: "O4", q: "Onde deve ficar a versão final e verificada de uma regra?", options: ["No seu documento (Docs ou Word)", "Só na conversa com a IA", "Num papelinho colado", "Em lado nenhum"], answer: 0, why: "Os documentos guardam a versão final que pode partilhar e atualizar." },
      { objective: "O4", q: "Uma boa tarefa de documento para a ajuda da IA é:", options: ["Escolher um advogado", "Assinar um contrato por você", "Entregar os impostos", "Uma lista de abertura"], answer: 3, why: "As listas de verificação são textos de baixo risco." },
      { objective: "O5", q: "Uma folha de cálculo é:", options: ["Um assistente de conversa", "Um modelo de design", "Uma grelha de linhas e colunas para números", "Um banco"], answer: 2, why: "O Sheets e o Excel organizam números." },
      { objective: "O5", q: "=SUM(E2:E20) é um exemplo de:", options: ["Pedido", "Fórmula", "Modelo", "Palavra-passe"], answer: 1, why: "As fórmulas fazem contas nas células." },
      { objective: "O5", q: "A IA diz que o seu produto mais vendido são os tacos. Você deve:", options: ["Dizer aos clientes", "Supor que está certo", "Apagar a folha", "Confirmar na sua folha"], answer: 3, why: "Compare a leitura da IA com os seus dados." },
      { objective: "O5", q: "Antes de colar uma tabela num assistente de conversa, tire:", options: ["Os nomes dos produtos", "As datas", "Os nomes dos clientes e os números de cartão", "Os totais"], answer: 2, why: "Os dados privados ficam de fora." },
      { objective: "O6", q: "Quantas ferramentas deve ter um conjunto inicial?", options: ["Três a cinco", "Cinquenta", "Nenhuma", "Cem"], answer: 0, why: "Uma lista curta que usa mesmo." },
      { objective: "O6", q: "A sua tabela de ferramentas indica:", options: ["Palavras-passe", "Ferramenta, tarefa, plano e regra de segurança", "Números de cartão de clientes", "Só preços"], answer: 1, why: "Essas quatro colunas mantêm-na útil e segura." },
      { objective: "O6", q: "Quando deve pagar um plano melhor?", options: ["Sempre no primeiro dia", "Quando precisar de uma função que o plano gratuito não tem", "Quando um anúncio mandar", "Sem nunca ver o preço"], answer: 1, why: "Pague só necessidades reais, depois de ver o preço." },
      { objective: "O6", q: "Que regra vale para todas as ferramentas de IA?", options: ["Verificar os dados antes de os clientes os verem", "Partilhar palavras-passe para poupar tempo", "Copiar qualquer foto", "Confiar em todos os números"], answer: 0, why: "Verificar os dados protege o seu negócio." }
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
      9,
      10,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Tabela de ferramentas",
        objective: "O6",
        notYet: "Menos de três ferramentas, ou falta uma tarefa, um plano ou uma regra de segurança.",
        meets: "Três a cinco ferramentas, cada uma com tarefa, plano e regra de segurança.",
        exceeds: "Indica quando o dono pensaria em pagar um plano melhor."
      },
      {
        name: "Mensagem para clientes",
        objective: "O2",
        notYet: "Não há mensagem, ou ela tem dados de um cliente verdadeiro ou dados errados.",
        meets: "Uma mensagem para clientes verificada, feita com o assistente de conversa, usando marcadores.",
        exceeds: "O dono comparou mais de uma versão e escolheu a melhor."
      },
      {
        name: "Folheto ou publicação",
        objective: "O3",
        notYet: "Não há folheto, ou tem erros ou fotos sem direito de uso.",
        meets: "Um folheto ou uma publicação com uma mensagem principal e os contactos, cada palavra verificada.",
        exceeds: "Usa as fotos do próprio dono e está pronto para publicar ou imprimir."
      },
      {
        name: "Lista de preços ou tabela de vendas",
        objective: "O5",
        notYet: "Não há tabela, ou os totais foram escritos à mão.",
        meets: "Uma lista de preços no Docs ou no Word, ou uma tabela de vendas com uma fórmula SUM.",
        exceeds: "A leitura da tabela feita pela IA foi confirmada na folha."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que usam pelo menos duas ferramentas do conjunto todas as semanas (inquérito de seguimento aos 30 dias)",
      "Donos que dizem ter poupado tempo ou dinheiro usando planos gratuitos (inquérito de seguimento)",
      "Donos que começam outro curso de pequenos negócios da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou smartphone com internet (o computador é mais fácil para as folhas de cálculo)",
      "Contas gratuitas de um assistente de conversa, do Canva e do Google Docs e Sheets ou do Microsoft Word e Excel",
      "Dados reais do negócio: preços, uma oferta ou um evento, e algumas semanas de números de vendas ou de stock",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Os nomes dos planos e as funções mudam; abram juntos o site oficial de cada ferramenta para ver o plano gratuito atual.",
      "Peça aos donos para usar nomes de clientes inventados e nenhum número de cartão nas tabelas e mensagens de prática.",
      "As folhas de cálculo são novas para muitos donos; mostre ao vivo uma fórmula SUM antes da tarefa da Lição 5.",
      "Envie as palavras legais das regras a um profissional ou a uma fonte oficial, ao SCORE (mentores gratuitos para negócios nos EUA) ou a um Small Business Development Center (centro de apoio a pequenos negócios).",
      "Avalie o conjunto de ferramentas e os trabalhos com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
