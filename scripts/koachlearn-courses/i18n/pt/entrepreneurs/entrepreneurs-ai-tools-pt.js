"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-tools-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-tools",
  category: "Entrepreneurs",
  name: "Ferramentas de IA que Todo o Empreendedor Deve Conhecer",
  skills: "Escolher o tipo certo de ferramenta de IA, Usar um assistente de conversa para escrever, Fazer imagens com o Canva, Usar IA em documentos e folhas de cálculo, Montar um kit simples de ferramentas de IA",
  outcome: "escolher e usar ferramentas de IA gratuitas para as principais tarefas do seu negócio (escrita, design, documentos e folhas de cálculo, e reuniões) e montar um kit de uma página que diz que ferramenta usa para cada tarefa.",
  about: [
    "Há milhares de ferramentas de IA, e aparecem novas todas as semanas. Este curso é para donos de negócios que querem um kit curto e prático, em vez de correr atrás de cada aplicação nova.",
    "Você vai aprender os principais tipos de ferramentas de IA e depois praticar com opções gratuitas reais e muito usadas: assistentes de conversa (ChatGPT, Microsoft Copilot, Google Gemini), design (Canva), documentos e folhas de cálculo (Google Docs e Sheets, Microsoft 365) e ajuda com notas e reuniões.",
    "Cada lição dura cerca de cinco minutos e acaba com uma tarefa que você faz no seu próprio negócio. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Os nomes, as funções e os preços das ferramentas mudam muitas vezes, por isso o curso diz-lhe como verificar o que está em vigor."
  ],
  finalTask: "Faça uma página \"O Meu Kit de IA\" para o seu negócio: escreva quatro tarefas (escrita, design, documentos ou números, e reuniões ou notas), a ferramenta gratuita que vai usar para cada uma, uma coisa que fez com ela durante este curso e uma regra para proteger os dados dos clientes nessa ferramenta.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios e pessoas com um negócio extra que querem um conjunto curto e prático de ferramentas de IA, em vez de correr atrás de cada aplicação nova.",
    startingPoint: "Usam o email, um telefone e talvez as ferramentas de escritório da Google ou da Microsoft. Alguns já experimentaram um assistente de conversa. A maioria não tem um plano sobre que ferramenta faz que tarefa, nem regras para os dados dos clientes nessas ferramentas.",
    gap: "Aparecem novas ferramentas de IA todas as semanas, e os donos perdem tempo e dinheiro a experimentar demasiadas ou a pagar duas vezes pela mesma tarefa. Outros põem dados de clientes nas ferramentas sem verificar as definições. Os donos precisam de uma ferramenta gratuita testada para cada tarefa principal e de uma regra de segurança para cada uma.",
    constraints: [
      "Palavras simples; não é preciso conhecimento técnico",
      "Aparelhos: um telefone ou um computador; só planos gratuitos",
      "Tempo: cerca de cinco minutos por lição, mais uma tarefa curta no próprio negócio",
      "Os nomes, as funções e os preços das ferramentas mudam muitas vezes; veja a página de preços de cada ferramenta",
      "Peça autorização antes de gravar alguém e não ponha dados de clientes nas conversas com IA"
    ],
    prerequisites: "\"Introdução à IA para Empreendedores\", ou alguma experiência a pedir ajuda a um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com qualquer ferramenta de IA", action: "identificar qual das quatro tarefas do negócio ela faz: escrita, design, documentos e números, ou reuniões e notas", standard: "e verificar a sua tarefa, o custo e se serve antes de a adicionar" },
    { id: "O2", condition: "Usando as contas que o seu negócio já tem", action: "escolher um assistente de conversa gratuito e usá-lo numa tarefa real de escrita do negócio", standard: "depois de comparar o mesmo pedido em dois assistentes" },
    { id: "O3", condition: "Usando um modelo do Canva", action: "fazer uma imagem com a sua marca, com uma mensagem, uma imagem e um apelo à ação", standard: "verificando cada imagem de IA quanto a erros e logótipos copiados antes de a usar" },
    { id: "O4", condition: "Com uma folha de vendas ou um documento simples", action: "usar IA para escrever uma fórmula de folha de cálculo e fazer o rascunho de um documento", standard: "testando a fórmula em linhas verificadas à mão e enviando os documentos legais para revisão" },
    { id: "O5", condition: "Com uma reunião ou uma nota de voz", action: "transformá-la em notas escritas e numa lista de ações com IA", standard: "com quem, o quê e até quando em cada ponto, e com autorização antes de gravar outras pessoas" },
    { id: "O6", condition: "No final do curso", action: "criar um kit de IA de uma página com uma ferramenta por tarefa e uma regra de segurança para cada uma", standard: "indicando uma coisa que fez com cada ferramenta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Os principais tipos de ferramentas de IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "O mapa das ferramentas de IA: quatro tarefas, não quatrocentas aplicações",
          minutes: 4,
          goal: "Organizar as ferramentas de IA pela tarefa que fazem no seu negócio.",
          text: [
            "A maioria das ferramentas de IA de que um pequeno negócio precisa cabe em quatro tarefas. Escrever e pensar: assistentes de conversa como o ChatGPT, o Microsoft Copilot e o Google Gemini. Design: ferramentas como o Canva, que fazem imagens, folhetos e imagens para as redes sociais. Documentos e números: a IA que já vem no Google Docs e Sheets ou no Microsoft Word e Excel. Reuniões e notas: ferramentas que gravam, transcrevem e resumem.",
            "Hoje muitas ferramentas fazem mais do que uma tarefa. Um assistente de conversa também pode fazer uma imagem ou ler uma folha de cálculo que você carrega. Não há problema, mas começar com uma ferramenta por tarefa mantém tudo simples.",
            "Antes de adicionar qualquer ferramenta nova, pergunte: Que tarefa faz? Já tenho uma ferramenta para essa tarefa? Há um plano gratuito? O que acontece aos dados que lá ponho?"
          ],
          words: [["Assistente de conversa", "uma ferramenta de IA com quem você fala numa janela de conversa, como o ChatGPT, o Copilot ou o Gemini."], ["Transcrever", "transformar palavras faladas em texto escrito."]],
          slides: [
            { title: "Quatro tarefas", bullets: ["Escrever e pensar: assistentes de conversa", "Design: o Canva e outras parecidas", "Documentos e números: Docs, Sheets, Word, Excel", "Reuniões e notas: transcrever e resumir"] },
            { title: "Comece simples", bullets: ["Primeiro, uma ferramenta por tarefa", "Muitas ferramentas fazem coisas parecidas, e não há problema"] },
            { title: "Antes de adicionar uma ferramenta, pergunte", bullets: ["Que tarefa faz?", "Já tenho uma?", "Há um plano gratuito? Para onde vão os meus dados?"] }
          ],
          tryIt: "Escreva as quatro tarefas numa folha. Ao lado de cada uma, escreva a ferramenta que já usa para ela (mesmo que não seja de IA). Deixe em branco onde não tiver nenhuma.",
          youCanNow: "organizar as ferramentas de IA em quatro tarefas do negócio e fazer quatro perguntas antes de adicionar uma nova.",
          quickCheck: [
            { objective: "O1", q: "Que tarefa faz uma ferramenta de transcrição?", options: ["Reuniões e notas", "Design", "Escrever anúncios", "Pagamentos"], answer: 0, why: "A transcrição transforma a fala em notas, que é a tarefa de reuniões e notas." },
            { objective: "O1", q: "Uma aplicação de IA nova promete escrever publicações para as redes sociais, mas você já tem um assistente de conversa que faz isso. O que faz?", options: ["Inscreve-se logo", "Não a usa, a não ser que faça a tarefa claramente melhor", "Paga as duas", "Apaga o seu assistente de conversa"], answer: 1, why: "Uma ferramenta por tarefa mantém tudo simples e evita pagar duas vezes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Assistentes de conversa: escolher um e usá-lo bem",
          minutes: 5,
          goal: "Abrir um assistente de conversa gratuito e usá-lo numa tarefa real de escrita do negócio.",
          text: [
            "O ChatGPT (chatgpt.com), o Microsoft Copilot (copilot.microsoft.com) e o Google Gemini (gemini.google.com) têm todos versões gratuitas. Todos escrevem, resumem, dão ideias e explicam. Escolha o que combina com as contas que já usa: o Copilot se o seu negócio funciona com a Microsoft, o Gemini se funciona com a Google, ou qualquer um deles se não tiver a certeza.",
            "Use o mesmo pedido em três partes em cada um: a tarefa, o contexto do seu negócio e o formato. Depois melhore-o com pedidos de seguimento como \"mais curto\", \"mais simpático\" ou \"dê-me três opções\".",
            "Experimente o mesmo pedido em dois assistentes e compare. Vai ver depressa qual combina com o seu estilo. Os planos gratuitos têm limites que mudam; veja na página de preços da própria ferramenta o que está incluído hoje."
          ],
          steps: ["Abra um assistente num navegador de internet ou na sua aplicação oficial.", "Escreva um pedido em três partes para uma tarefa real do negócio.", "Peça uma melhoria.", "Cole o mesmo pedido num segundo assistente e compare."],
          words: [["Plano gratuito", "uma versão de uma ferramenta que pode usar sem pagar, normalmente com limites."]],
          slides: [
            { title: "Três assistentes de conversa gratuitos", bullets: ["ChatGPT: chatgpt.com", "Microsoft Copilot: copilot.microsoft.com", "Google Gemini: gemini.google.com"] },
            { title: "Qual escolher?", bullets: ["Contas da Microsoft: experimente o Copilot", "Contas da Google: experimente o Gemini", "Não tem a certeza: experimente dois e compare"] },
            { title: "Use-o bem", bullets: ["Tarefa + contexto + formato", "Peça uma mudança de cada vez", "Veja os limites na página de preços da própria ferramenta"] }
          ],
          tryIt: "Escreva um pedido para uma descrição de 50 palavras do seu negócio para um perfil nas redes sociais. Use-o em dois assistentes de conversa. Fique com a melhor resposta e anote que ferramenta escolheu.",
          youCanNow: "escolher um assistente de conversa que combina com as suas contas e usá-lo na escrita real do negócio.",
          quickCheck: [
            { objective: "O2", q: "Qual é uma forma justa de comparar dois assistentes de conversa?", options: ["Escolher o que tem o logótipo mais bonito", "Fazer uma pergunta diferente a cada um", "Usar o mesmo pedido nos dois", "Usar o que abrir primeiro"], answer: 2, why: "O mesmo pedido mostra que ferramenta responde melhor ao que precisa." },
            { objective: "O2", q: "A sua loja usa o Outlook e o Word todos os dias. Que assistente de conversa experimenta primeiro?", options: ["Um que precisa de uma conta nova", "Uma ferramenta paga de que nunca ouviu falar", "Nenhum", "O Microsoft Copilot"], answer: 3, why: "Uma ferramenta que combina com as contas que já usa é a primeira escolha natural." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Design com IA no Canva",
          minutes: 5,
          goal: "Fazer uma imagem simples com a marca do seu negócio no Canva.",
          text: [
            "O Canva (canva.com) é uma ferramenta de design com um plano gratuito, milhares de modelos e funções de IA que sugerem texto, criam imagens e mudam o tamanho dos desenhos. Não precisa de formação em design para fazer um folheto ou uma publicação limpa.",
            "Comece por um modelo, não por uma página em branco. Procure o que precisa, por exemplo \"Instagram post bakery\" (publicação de padaria) ou \"flyer cleaning service\" (folheto de serviço de limpeza). Mude as palavras, ponha as suas cores e o seu logótipo, e mantenha simples: uma mensagem, uma imagem, um apelo à ação.",
            "Se usar uma imagem feita por IA, olhe com atenção para encontrar erros, como mãos estranhas ou palavras mal escritas, e não faça uma imagem que copie o logótipo ou a marca de outra pessoa, ou uma pessoa real, sem autorização."
          ],
          steps: ["Abra canva.com e inicie sessão ou crie uma conta gratuita.", "Procure um modelo para o desenho de que precisa.", "Mude o texto para a sua mensagem e o seu apelo à ação.", "Acrescente as suas cores e o seu logótipo.", "Verifique a ortografia e as imagens e depois descarregue."],
          words: [["Modelo", "um desenho já feito que você muda para servir o seu negócio."], ["Cores da marca", "as duas ou três cores que usa sempre, para os clientes o reconhecerem."]],
          slides: [
            { title: "O Canva para negócios", bullets: ["Plano gratuito com modelos", "IA para sugerir texto e fazer imagens", "Não precisa de formação em design"] },
            { title: "Comece por um modelo", bullets: ["Procure \"flyer cleaning service\" ou algo parecido", "Mude as palavras", "Acrescente as suas cores e o seu logótipo"] },
            { title: "Mantenha simples", bullets: ["Uma mensagem", "Uma imagem", "Um apelo à ação"] },
            { title: "Verifique as imagens de IA", bullets: ["Procure mãos estranhas ou palavras mal escritas", "Não copie outras marcas nem pessoas reais"] }
          ],
          tryIt: "Faça no Canva uma publicação ou um folheto para o seu negócio a partir de um modelo. Use a descrição do seu negócio da lição anterior e um apelo à ação. Descarregue-o.",
          youCanNow: "fazer no Canva uma imagem limpa com a sua marca e verificar as imagens de IA antes de as usar.",
          quickCheck: [
            { objective: "O3", q: "O que é um apelo à ação num folheto?", options: ["Um próximo passo claro, como \"Envie-nos uma SMS para marcar\"", "A imagem", "O tamanho da letra", "O seu logótipo"], answer: 0, why: "Um apelo à ação diz às pessoas o que fazer a seguir." },
            { objective: "O3", q: "A IA faz-lhe uma imagem parecida com o logótipo de uma marca famosa. O que faz?", options: ["Usa-a; foi a IA que a fez", "Não a usa e faz uma imagem diferente", "Põe-na pequena para ninguém reparar", "Põe o seu nome por cima"], answer: 1, why: "Não deve usar imagens que copiam o logótipo de outra empresa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Os principais tipos de ferramentas de IA",
        questions: [
          { objective: "O1", q: "Que ferramenta serve para a tarefa de \"design\"?", options: ["Uma calculadora", "O Canva", "Uma caixa de email", "Uma aplicação do banco"], answer: 1, why: "O Canva faz folhetos, imagens para as redes sociais e outros desenhos." },
          { objective: "O2", q: "O seu negócio usa o Microsoft Outlook e o Word. Que assistente de conversa é a primeira escolha natural?", options: ["Uma aplicação de mapas", "Uma aplicação de desenho", "Uma aplicação de música", "O Microsoft Copilot"], answer: 3, why: "O Copilot combina com os negócios que já usam contas da Microsoft." },
          { objective: "O1", q: "Antes de adicionar uma ferramenta de IA nova, que pergunta é mais importante?", options: ["Que tarefa faz, e já tenho uma ferramenta para isso?", "O logótipo é bonito?", "É popular no TikTok?", "Tem modo escuro?"], answer: 0, why: "Comece pela tarefa; evite pagar ferramentas que repetem o que já tem." },
          { objective: "O3", q: "Qual é a melhor forma de começar um desenho no Canva?", options: ["Uma página em branco", "Copiar o folheto de um concorrente", "Um modelo que você muda", "Escrever os seus dados bancários"], answer: 2, why: "Os modelos dão-lhe um desenho limpo para adaptar." },
          { objective: "O3", q: "Uma imagem de IA para o seu folheto tem uma palavra mal escrita na placa. O que faz?", options: ["Usa-a na mesma", "Publica-a duas vezes", "Corrige-a ou faz uma imagem nova antes de a usar", "Culpa o cliente"], answer: 2, why: "Verifique os erros nas imagens de IA antes de as publicar." }
        ]
      }
    },
    {
      name: "Capítulo 2: A IA nas ferramentas do dia a dia do seu negócio",
      lessons: [
        {
          objectives: ["O4"],
          title: "A IA em documentos e folhas de cálculo",
          minutes: 5,
          goal: "Usar IA para fazer o rascunho de um documento e para entender uma folha de cálculo.",
          text: [
            "O Google Docs e Sheets e o Microsoft Word e Excel já trazem ajudantes de IA em muitos planos (o Gemini no Google Workspace, o Copilot no Microsoft 365). As funções que tem dependem do seu plano, e isso muda, por isso veja as páginas de ajuda da sua conta.",
            "Se o seu plano não tem o ajudante incluído, pode usar na mesma um assistente de conversa gratuito: cole texto sem dados privados, ou descreva as suas colunas, e peça um rascunho, uma fórmula ou uma explicação.",
            "Pedidos úteis: \"Transforme estas notas num rascunho de contrato de serviço de uma página para o meu advogado rever.\" \"Escreva uma fórmula de folha de cálculo que some a coluna C quando a coluna B diz Pago.\" \"Explique o que esta fórmula faz.\" Teste sempre uma fórmula em algumas linhas que pode verificar à mão."
          ],
          steps: ["Abra um documento ou uma folha de cálculo que já usa.", "Procure o ajudante de IA incluído; se não houver, abra um assistente de conversa.", "Peça um rascunho ou uma fórmula, descrevendo as colunas sem dados privados.", "Teste qualquer fórmula em algumas linhas que pode verificar você mesmo."],
          words: [["Fórmula", "uma instrução numa célula de uma folha de cálculo que calcula alguma coisa, como um total."], ["Google Workspace / Microsoft 365", "as versões pagas para empresas das ferramentas de escritório da Google e da Microsoft."]],
          slides: [
            { title: "Ajudantes de IA incluídos", bullets: ["O Gemini no Google Workspace", "O Copilot no Microsoft 365", "As funções dependem do seu plano; veja as páginas de ajuda"] },
            { title: "Não tem ajudante incluído?", bullets: ["Use um assistente de conversa gratuito", "Descreva as suas colunas, sem dados privados", "Peça um rascunho, uma fórmula ou uma explicação"] },
            { title: "Teste antes de confiar", bullets: ["Experimente a fórmula em algumas linhas", "Verifique o resultado à mão", "Peça a um advogado para rever os rascunhos legais"] }
          ],
          sources: [{ name: "Google Workspace: funções do Gemini", url: "https://workspace.google.com/solutions/ai/" }, { name: "Apoio da Microsoft: Copilot", url: "https://support.microsoft.com/en-us/copilot" }],
          tryIt: "Descreva a um assistente de IA uma folha de vendas simples (data, artigo, valor, pago ou não) e peça uma fórmula que some só as vendas pagas. Faça uma folha de teste com cinco linhas e verifique a fórmula à mão.",
          youCanNow: "usar IA para fazer rascunhos de documentos e para escrever e testar fórmulas de folhas de cálculo.",
          quickCheck: [
            { objective: "O4", q: "O que é uma fórmula de folha de cálculo?", options: ["Um gráfico", "Um tipo de letra", "Uma instrução numa célula que calcula alguma coisa", "O nome de um ficheiro"], answer: 2, why: "As fórmulas calculam resultados a partir dos dados da sua folha." },
            { objective: "O4", q: "Quer que a IA escreva uma fórmula para a sua folha de vendas a clientes. O que partilha?", options: ["A folha completa com os nomes dos clientes", "Os números de telefone dos clientes", "O acesso ao seu banco", "Uma descrição das colunas sem dados privados"], answer: 3, why: "Descrever as colunas dá-lhe a fórmula sem partilhar dados privados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Notas de reuniões e transcrição",
          minutes: 4,
          goal: "Transformar uma reunião ou uma nota de voz em notas claras e pontos de ação com IA.",
          text: [
            "Hoje muitas ferramentas transformam a fala em texto: o gravador de voz de muitos telefones, as funções de transcrição do Microsoft Teams, do Google Meet e do Zoom em alguns planos, e a escrita por voz no Google Docs (Ferramentas e depois Escrita por voz) ou o ditado no Word.",
            "Quando tiver o texto, um assistente de conversa pode transformá-lo num resumo com decisões e pontos de ação: quem faz o quê até quando. Tire os dados privados dos clientes antes de colar.",
            "Avise sempre as pessoas antes de gravar ou transcrever uma chamada. As leis sobre gravar chamadas mudam de um estado ou país para outro, e algumas exigem o consentimento de todos, por isso perguntar primeiro é o hábito seguro."
          ],
          steps: ["Diga a todos que quer gravar ou transcrever e espere um sim.", "Grave ou transcreva a reunião ou uma nota de voz.", "Tire os dados privados do texto.", "Peça à IA: \"Resuma isto em decisões e pontos de ação: quem, o quê, até quando.\"", "Compare o resumo com o que você se lembra."],
          words: [["Ponto de ação", "uma tarefa saída de uma reunião, com uma pessoa e um prazo."], ["Consentimento", "autorização que uma pessoa dá antes de se fazer alguma coisa."]],
          slides: [
            { title: "Da fala ao texto", bullets: ["Gravadores de voz dos telefones", "Teams, Meet e Zoom em alguns planos", "Escrita por voz no Docs, ditado no Word"] },
            { title: "Do texto aos pontos de ação", bullets: ["Cole o texto, sem os dados privados", "Peça decisões e pontos de ação", "Quem, o quê, até quando"] },
            { title: "Pergunte sempre primeiro", bullets: ["Avise as pessoas antes de gravar", "As leis sobre gravação mudam de lugar para lugar", "Alguns lugares exigem o consentimento de todos"] }
          ],
          tryIt: "Grave uma nota de voz de dois minutos sobre o que o seu negócio tem de fazer esta semana. Transcreva-a com a escrita por voz ou com o telefone e depois peça a um assistente de IA para a transformar numa lista de ações com datas.",
          youCanNow: "transformar notas faladas numa lista de ações escrita e pedir autorização antes de gravar outras pessoas.",
          quickCheck: [
            { objective: "O5", q: "Que três coisas deve dizer cada ponto de ação?", options: ["Quem, o quê e até quando", "Onde, porquê e quanto", "A data, o tempo e o assunto", "Só o assunto"], answer: 0, why: "Quem faz o quê até quando torna um ponto de ação claro." },
            { objective: "O5", q: "Quer gravar uma chamada com um fornecedor para tomar notas. O que faz primeiro?", options: ["Grava sem dizer nada", "Avisa-o e pede a sua autorização", "Grava só metade da chamada", "Pergunta à IA se é permitido"], answer: 1, why: "Avise as pessoas e tenha autorização antes de gravar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Montar o seu kit e mantê-lo seguro",
          minutes: 5,
          goal: "Escolher uma ferramenta por tarefa e criar uma regra de segurança para cada uma.",
          text: [
            "Um kit que você usa de verdade vale mais do que uma longa lista de aplicações que experimentou uma vez. Para cada uma das quatro tarefas, escolha uma ferramenta, anote se está num plano gratuito ou pago e escreva uma coisa que fez com ela.",
            "Veja as definições de dados de cada ferramenta. Muitas deixam desligar o histórico das conversas ou impedir que o seu conteúdo seja usado para treinar a IA. Os planos para empresas muitas vezes têm regras de privacidade mais fortes; leia a página de privacidade da ferramenta antes de pôr lá documentos do negócio.",
            "Crie uma regra simples por ferramenta, como \"Nenhum número de telefone de clientes no ChatGPT\" ou \"Só descarrego imagens do Canva que já verifiquei\". Reveja o seu kit de poucos em poucos meses, porque as ferramentas, as funções e os preços mudam."
          ],
          steps: ["Escreva as quatro tarefas.", "Escolha uma ferramenta para cada uma e anote se é gratuita ou paga.", "Abra as definições de cada ferramenta e encontre as opções de dados ou de privacidade.", "Escreva uma regra de segurança por ferramenta.", "Ponha um lembrete para rever o kit daqui a três meses."],
          words: [["Kit de ferramentas", "a lista curta de ferramentas em que confia, com aquilo para que serve cada uma."], ["Definições de privacidade", "opções que controlam o que uma ferramenta guarda e como usa os seus dados."]],
          slides: [
            { title: "Uma ferramenta por tarefa", bullets: ["Escrita, design, documentos, reuniões", "Gratuita ou paga?", "Uma coisa que fez com ela"] },
            { title: "Veja as definições de dados", bullets: ["Desligue o histórico ou o treino, se houver essa opção", "Os planos para empresas podem proteger melhor os dados", "Leia primeiro a página de privacidade"] },
            { title: "Uma regra de segurança por ferramenta", bullets: ["\"Nenhum número de telefone de clientes nas conversas\"", "\"Só uso imagens que já verifiquei\""] },
            { title: "Reveja de poucos em poucos meses", bullets: ["As ferramentas, as funções e os preços mudam"] }
          ],
          tryIt: "Tarefa final: faça a sua página \"O Meu Kit de IA\": quatro tarefas, uma ferramenta para cada, uma coisa que fez com ela neste curso e uma regra de segurança para cada ferramenta.",
          youCanNow: "gerir o seu negócio com um kit de IA pequeno e seguro, que você revê com o tempo.",
          quickCheck: [
            { objective: "O6", q: "O que é uma regra de segurança do kit?", options: ["Uma lista de preços", "A página de entrada de uma ferramenta", "Uma regra como \"nenhum número de telefone de clientes nas conversas com IA\"", "Uma cópia de segurança dos seus ficheiros"], answer: 2, why: "Uma regra de segurança diz como você protege os dados em cada ferramenta." },
            { objective: "O6", q: "Seis meses depois de fazer o seu kit, uma ferramenta muda o seu plano gratuito. O que faz?", options: ["Ignora", "Apaga o kit", "Continua a pagar sem ver", "Vê a página de preços da própria ferramenta e atualiza o seu kit"], answer: 3, why: "As ferramentas e os preços mudam, por isso você revê o kit com o tempo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: A IA nas ferramentas do dia a dia do seu negócio",
        questions: [
          { objective: "O4", q: "O plano da sua folha de cálculo não tem ajudante de IA incluído. O que pode fazer?", options: ["Descrever as suas colunas a um assistente de conversa gratuito e pedir uma fórmula", "Desistir", "Colar na IA os números dos cartões dos seus clientes", "Comprar todas as aplicações de IA"], answer: 0, why: "Um assistente de conversa pode escrever fórmulas a partir de uma descrição, sem dados privados." },
          { objective: "O4", q: "A IA escreveu-lhe uma fórmula de folha de cálculo. O que deve fazer antes de confiar nela?", options: ["Apagar a folha", "Usá-la logo no ano inteiro", "Enviá-la aos clientes", "Testá-la em algumas linhas que pode verificar à mão"], answer: 3, why: "Testar em algumas linhas apanha os erros." },
          { objective: "O5", q: "O que deve fazer antes de gravar uma chamada com um cliente?", options: ["Gravar às escondidas", "Avisá-lo e ter a sua autorização", "Gravar só o primeiro minuto", "Publicá-la na internet"], answer: 1, why: "As leis sobre gravação são diferentes, e algumas exigem o consentimento de todos." },
          { objective: "O5", q: "Um ponto de ação deve dizer:", options: ["Quem faz o quê até quando", "Só a data da reunião", "Quanto tempo durou a reunião", "Quem chegou atrasado"], answer: 0, why: "Os pontos de ação indicam uma pessoa, uma tarefa e um prazo." },
          { objective: "O6", q: "Porque rever o seu kit de IA de poucos em poucos meses?", options: ["Para apagar o seu negócio", "É obrigatório por lei", "As ferramentas, as funções e os preços mudam", "Porque a IA esquece-se"], answer: 2, why: "Revisões regulares mantêm o seu kit atual e acessível." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ferramentas de IA que Todo o Empreendedor Deve Conhecer",
    questions: [
      { objective: "O1", q: "As quatro tarefas das ferramentas de IA neste curso são:", options: ["Banco, envios, contratação, impostos", "Escrita, design, documentos e números, reuniões e notas", "Música, jogos, filmes, desporto", "Telefones, portáteis, tablets, relógios"], answer: 1, why: "Essas quatro tarefas cobrem a maioria das necessidades de um pequeno negócio." },
      { objective: "O2", q: "Qual destes é um assistente de conversa?", options: ["Uma carrinha de entregas", "Um leitor de códigos de barras", "Uma gaveta de caixa", "O Google Gemini"], answer: 3, why: "O Gemini, o ChatGPT e o Copilot são assistentes de conversa." },
      { objective: "O1", q: "Porque começar com uma ferramenta por tarefa?", options: ["Para os clientes verem as suas aplicações", "É a lei", "As ferramentas de IA não podem partilhar tarefas", "Mantém tudo simples e evita pagar duas vezes"], answer: 3, why: "Um kit pequeno é mais fácil de aprender e mais barato." },
      { objective: "O1", q: "Onde deve ver o que o plano gratuito de uma ferramenta inclui hoje?", options: ["Num comentário qualquer de um vídeo", "Na página de preços da própria ferramenta", "Com o seu cliente", "Num folheto antigo"], answer: 1, why: "Os planos mudam; a página oficial está atualizada." },
      { objective: "O2", q: "O seu negócio funciona com o Gmail e o Google Drive. Um assistente de conversa natural para experimentar primeiro é:", options: ["Uma máquina de fax", "Um filtro de fotografias", "O Google Gemini", "Um contador de palavras"], answer: 2, why: "O Gemini combina com os negócios que usam contas da Google." },
      { objective: "O2", q: "Uma boa forma de comparar dois assistentes de conversa é:", options: ["Usar o mesmo pedido nos dois", "Ler só os anúncios deles", "Perguntar a um desconhecido", "Escolher o mais novo"], answer: 0, why: "O mesmo pedido em duas ferramentas mostra qual combina com o seu estilo." },
      { objective: "O3", q: "No Canva, o caminho mais rápido para um desenho limpo é:", options: ["Copiar o logótipo de outra marca", "Começar por uma página em branco", "Começar por um modelo", "Usar dez tipos de letra"], answer: 2, why: "Os modelos dão-lhe um desenho já pronto." },
      { objective: "O3", q: "Um folheto simples deve ter:", options: ["Uma mensagem, uma imagem, um apelo à ação", "Todos os produtos que vende", "Só letra pequena", "Nenhum nome do negócio"], answer: 0, why: "Os desenhos simples são mais fáceis de ler." },
      { objective: "O3", q: "NÃO deve usar a IA para fazer uma imagem que:", options: ["Mostra o seu próprio produto", "Copia o logótipo de outra empresa", "Usa as cores da sua marca", "Tem o nome da sua loja bem escrito"], answer: 1, why: "Copiar outra marca pode violar as regras de marcas registadas ou de direitos de autor." },
      { objective: "O4", q: "O Gemini no Google Workspace e o Copilot no Microsoft 365 são:", options: ["Serviços de entregas", "Impressoras", "Aplicações de pagamento", "Ajudantes de IA incluídos nas ferramentas de escritório em muitos planos"], answer: 3, why: "Acrescentam IA aos documentos, ao email e às folhas de cálculo." },
      { objective: "O4", q: "Quando pede à IA uma fórmula de folha de cálculo, deve partilhar:", options: ["Uma descrição das colunas, sem dados privados", "Os números dos cartões dos clientes", "A palavra-passe do seu banco", "O seu número de contribuinte"], answer: 0, why: "Descrever as colunas chega para ter uma fórmula." },
      { objective: "O4", q: "Uma fórmula de folha de cálculo é:", options: ["Um endereço de email", "Um tipo de gráfico", "Um tipo de letra", "Uma instrução numa célula que calcula alguma coisa"], answer: 3, why: "As fórmulas calculam valores como totais." },
      { objective: "O4", q: "A IA fez-lhe o rascunho de um contrato de serviço. E depois?", options: ["Publica-o na internet", "Assina-o logo com os clientes", "Pede a um advogado para o rever antes de o usar", "Apaga o antigo sem o ler"], answer: 2, why: "Os documentos legais devem ser revistos por um profissional." },
      { objective: "O5", q: "A escrita por voz no Google Docs deixa-o:", options: ["Pagar contas", "Falar e ver as suas palavras escritas", "Desenhar logótipos", "Enviar produtos"], answer: 1, why: "Transforma a fala em texto." },
      { objective: "O5", q: "Depois de transcrever uma reunião, um pedido útil à IA é:", options: ["\"Traduza para código.\"", "\"Faça mais comprido.\"", "\"Acrescente factos ao acaso.\"", "\"Resuma isto em decisões e pontos de ação: quem, o quê, até quando.\""], answer: 3, why: "Isto transforma uma transcrição longa em próximos passos claros." },
      { objective: "O5", q: "Antes de gravar uma chamada, deve:", options: ["Gravar só a outra pessoa", "Esconder o gravador", "Avisar as pessoas e ter a sua autorização", "Perguntar à IA se é legal e não lhes perguntar"], answer: 2, why: "As regras de consentimento mudam de lugar para lugar; perguntar primeiro é seguro." },
      { objective: "O6", q: "Muitas ferramentas de IA deixam mudar as definições de dados para que:", options: ["As suas conversas não sejam guardadas nem usadas para treino", "Os seus preços subam", "Os seus clientes recebam emails", "O seu logótipo mude"], answer: 0, why: "As definições de privacidade controlam o que a ferramenta guarda." },
      { objective: "O6", q: "Qual é uma boa regra de segurança do kit?", options: ["\"Partilhar palavras-passe com a IA\"", "\"Nenhum número de telefone de clientes nas conversas com IA\"", "\"Nunca verificar as imagens de IA\"", "\"Usar todas as aplicações novas\""], answer: 1, why: "Regras simples protegem os seus clientes." },
      { objective: "O6", q: "O seu kit de uma página indica, para cada tarefa:", options: ["O saldo do seu banco", "A ferramenta, se é gratuita ou paga, uma coisa que fez, uma regra de segurança", "As palavras-passe dos seus concorrentes", "Todas as aplicações que já experimentou"], answer: 1, why: "Isso torna o kit prático e seguro." },
      { objective: "O6", q: "Porque pode escolher um plano para empresas de uma ferramenta de IA?", options: ["Pode dar regras de privacidade mais fortes para os documentos do negócio", "É sempre gratuito", "Já não precisa de verificar o trabalho", "Faz os seus impostos"], answer: 0, why: "Os planos para empresas muitas vezes protegem melhor os dados; leia a página de privacidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      6,
      8,
      10,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "As quatro tarefas cobertas",
        objective: "O1",
        notYet: "Falta uma tarefa ou duas ferramentas fazem a mesma tarefa.",
        meets: "Escrita, design, documentos ou números, e reuniões ou notas, com uma ferramenta para cada.",
        exceeds: "Diz porque escolheu cada ferramenta em vez de outra."
      },
      {
        name: "Feito com cada ferramenta",
        objective: "O3",
        notYet: "Uma ou mais ferramentas não têm nada feito com elas.",
        meets: "Indica uma coisa real feita com cada ferramenta, como um texto de perfil, um folheto, uma fórmula e uma lista de ações.",
        exceeds: "As coisas feitas já estão a ser usadas no negócio."
      },
      {
        name: "Resultados verificados",
        objective: "O4",
        notYet: "Uma fórmula, uma imagem ou um documento foi usado sem verificar.",
        meets: "Fórmula testada em linhas verificadas à mão; imagens e documentos verificados antes de usar.",
        exceeds: "Indica que documentos precisam de ser revistos por um advogado ou outro profissional."
      },
      {
        name: "Regras de segurança",
        objective: "O6",
        notYet: "Uma ferramenta não tem regra de segurança, ou uma regra é vaga.",
        meets: "Cada ferramenta tem uma regra clara para os dados dos clientes.",
        exceeds: "Também indica a definição de dados que mudou em cada ferramenta e quando rever o kit."
      },
      {
        name: "Plano gratuito e adequação",
        objective: "O2",
        notYet: "Não diz se é gratuita ou paga, ou a ferramenta não combina com as contas do negócio.",
        meets: "Indica se cada ferramenta é gratuita ou paga, verificado na sua página de preços.",
        exceeds: "Indica o que um plano pago acrescentaria e se vale a pena."
      }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que ainda usam as quatro ferramentas do kit depois de 30 dias (inquérito de seguimento)",
      "Donos que dizem ter cancelado uma ferramenta paga repetida ou que não usavam",
      "Alunos que começam outro curso de empreendedorismo da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Contas gratuitas: um assistente de conversa, o Canva, e o Google Docs e Sheets ou o Microsoft 365",
      "Um telefone para uma nota de voz curta",
      "Cerca de 60 minutos no total para as lições, as tarefas, as verificações e a página do kit"
    ],
    facilitatorNotes: [
      "Peça aos donos que tragam a descrição real do seu negócio; ela é usada outra vez nas Lições 2 e 3.",
      "Veja os planos gratuitos atuais na página de preços de cada ferramenta antes da sessão, porque mudam muitas vezes.",
      "Lembre aos alunos que peçam autorização antes de gravar alguém e que não ponham dados de clientes nas conversas com IA.",
      "Use uma folha de teste com cinco linhas e dados inventados para praticar a fórmula.",
      "Avalie a página do kit com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
