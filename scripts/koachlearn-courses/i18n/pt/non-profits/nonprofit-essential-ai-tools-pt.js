"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-essential-ai-tools-pt",
  lang: "pt",
  translationOf: "nonprofit-essential-ai-tools",
  category: "Non Profits",
  name: "Ferramentas de IA Essenciais para Organizações sem Fins Lucrativos e Como Usá-las",
  skills: "Escolher a ferramenta de IA certa para uma tarefa, Encontrar programas de tecnologia para organizações sem fins lucrativos, Resumir reuniões e documentos, Fazer folhetos e imagens com IA, Montar um kit de ferramentas simples para a sua equipa",
  outcome: "escolher a ferramenta de IA gratuita ou com desconto para organizações sem fins lucrativos certa para uma tarefa, usar um assistente de conversa para transformar notas de reunião soltas num resumo claro com tarefas a fazer, usar uma ferramenta de design para fazer um folheto para voluntários e escrever um cartão de ferramentas de uma página que a sua equipa possa seguir.",
  about: [
    "Este curso é para funcionários e voluntários de organizações sem fins lucrativos e de organizações religiosas que querem uma lista curta e prática de ferramentas de IA e saber usar cada uma.",
    "Você vai aprender os quatro tipos de ferramentas de IA de que a maioria das organizações precisa, onde encontrar os programas da Google e da Microsoft para organizações sem fins lucrativos e como fazer dois trabalhos reais com IA: um resumo de reunião e um folheto para voluntários.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa prática. Os preços e os programas mudam, por isso o curso indica as páginas oficiais que deve verificar antes de se inscrever. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Faça um \"cartão de ferramentas de IA\" de uma página para a sua equipa que indique um assistente de conversa, um pacote de escritório e uma ferramenta de design, diga para que serve cada um e o que nunca pode entrar nele, e junte duas coisas que fez com eles: um resumo de reunião com tarefas a fazer (a partir de notas sem dados privados) e um folheto para recrutar voluntários.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Funcionários e voluntários de organizações sem fins lucrativos e de organizações religiosas que querem uma lista curta e prática de ferramentas de IA e saber usar cada uma, muitas vezes em organizações pequenas sem pessoal de informática.",
    startingPoint: "Usam o e-mail, documentos e o telefone todos os dias, e talvez já tenham experimentado um assistente de conversa. A maioria não sabe a que programas de tecnologia para organizações sem fins lucrativos tem direito nem como configurar as ferramentas com segurança para uma equipa.",
    gap: "As equipas pequenas muitas vezes pagam por ferramentas que podiam ter de graça ou com desconto, usam contas pessoais que vão embora com os voluntários e gastam horas em notas de reunião e folhetos. Os alunos precisam de um pequeno conjunto de ferramentas seguras e de um cartão da equipa que mostre a todos como as usar.",
    constraints: [
      "Orçamento: só ferramentas gratuitas ou com desconto para organizações sem fins lucrativos",
      "Os preços e as regras dos programas mudam; os alunos verificam as páginas oficiais antes de se candidatarem",
      "Privacidade: nenhuma informação privada de doadores, voluntários ou beneficiários em nenhuma ferramenta, a não ser que os líderes o tenham aprovado",
      "Gravar reuniões exige o acordo de todos; as fotografias de crianças exigem autorização escrita dos pais ou do encarregado de educação",
      "Tempo: cerca de 60 minutos no total, em lições de 5 minutos"
    ],
    prerequisites: "\"Introdução à IA para Organizações sem Fins Lucrativos\", ou alguma experiência com um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma tarefa da organização", action: "escolher o tipo certo de ferramenta de IA para ela: assistente de conversa, pacote de escritório, ferramenta de design ou ferramenta de reuniões e notas", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Usando as páginas oficiais dos programas", action: "identificar a que programas de tecnologia para organizações sem fins lucrativos a sua organização pode ter direito e o que precisa para se candidatar", standard: "com as condições atuais verificadas na página oficial" },
    { id: "O3", condition: "Quando a sua equipa começa a usar uma ferramenta", action: "configurá-la com uma conta da organização, verificação em dois passos e os controlos de privacidade revistos", standard: "sem entrar nenhuma informação privada, a não ser que os líderes o tenham aprovado" },
    { id: "O4", condition: "Com notas de reunião soltas", action: "tirar os dados privados e usar um assistente de conversa para escrever um resumo com uma tabela de tarefas a fazer", standard: "com cada decisão e cada data verificadas nas suas notas" },
    { id: "O5", condition: "Com um evento de voluntários", action: "criar um folheto de recrutamento com texto escrito pela IA e um modelo de uma ferramenta de design", standard: "com a data, a hora, o local e o contacto verificados e só fotografias autorizadas" },
    { id: "O6", condition: "Para a sua equipa", action: "escrever um cartão de ferramentas de uma página que indique cada ferramenta aprovada, para que serve e o que nunca pode entrar nela", standard: "com os seus melhores pedidos incluídos e uma data de revisão marcada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer as suas ferramentas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Os quatro tipos de ferramentas de IA que uma organização usa",
          minutes: 4,
          goal: "Ligar uma tarefa da organização ao tipo certo de ferramenta de IA.",
          text: [
            "A maior parte do trabalho com IA numa organização cabe em quatro tipos de ferramentas. Os assistentes de conversa (ChatGPT, Microsoft Copilot, Google Gemini) escrevem, explicam e resumem. Os pacotes de escritório (Microsoft 365, Google Workspace) têm IA dentro do e-mail, dos documentos e das folhas de cálculo.",
            "As ferramentas de design (como o Canva ou o Adobe Express) ajudam a fazer folhetos, publicações para as redes sociais e diapositivos, muitas vezes com funções de IA. As ferramentas de reuniões e notas podem gravar ou transcrever uma reunião e fazer um rascunho de resumo, mas use-as só quando todos na reunião concordam.",
            "Comece com uma ferramenta de cada tipo que a sua organização já tem. Poucas ferramentas bem usadas valem mais do que muitas ferramentas usadas uma só vez."
          ],
          words: [["Assistente de conversa", "uma IA a quem você escreve ou fala e que escreve respostas."], ["Pacote de escritório", "um conjunto de programas de trabalho: e-mail, documentos, folhas de cálculo, diapositivos."], ["Transcrever", "passar as palavras faladas para texto escrito."]],
          slides: [
            { title: "Quatro tipos de ferramentas de IA", bullets: ["Assistentes de conversa: escrevem, explicam, resumem", "Pacotes de escritório: IA no e-mail e nos documentos", "Ferramentas de design: folhetos, publicações, diapositivos", "Ferramentas de reuniões: transcrições e resumos"] },
            { title: "Exemplos", bullets: ["ChatGPT, Microsoft Copilot, Google Gemini", "Microsoft 365, Google Workspace", "Canva, Adobe Express"] },
            { title: "Mantenha simples", bullets: ["Comece com o que já tem", "Uma ferramenta de cada tipo", "Gravar reuniões só com o acordo de todos"] }
          ],
          tryIt: "Escreva as ferramentas que a sua organização já usa (e-mail, documentos, design). Para cada uma, anote qual dos quatro tipos é.",
          youCanNow: "dizer os quatro tipos de ferramentas de IA e ligar uma tarefa ao tipo certo.",
          quickCheck: [
            { objective: "O1", q: "Que tipo de ferramenta tem IA dentro do e-mail, dos documentos e das folhas de cálculo?", options: ["Um pacote de escritório", "Uma ferramenta de design", "Um gravador de reuniões", "Um anúncio de pesquisa"], answer: 0, why: "Os pacotes de escritório como o Microsoft 365 e o Google Workspace têm IA dentro dos programas de trabalho do dia a dia." },
            { objective: "O1", q: "A sua equipa experimentou oito ferramentas de IA uma vez cada. O que sugere esta lição?", options: ["Experimentar mais oito", "Escolher uma ferramenta de cada tipo que já tem e usá-la bem", "Deixar de usar IA", "Usar só ferramentas de design"], answer: 1, why: "Poucas ferramentas bem usadas valem mais do que muitas ferramentas usadas uma só vez." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar programas gratuitos e com desconto",
          minutes: 5,
          goal: "Descobrir a que programas de tecnologia a sua organização pode ter direito e onde se candidatar.",
          text: [
            "As grandes empresas de tecnologia têm programas para organizações sem fins lucrativos. O Google for Nonprofits dá às organizações de beneficência registadas que cumprem as regras produtos Google sem custo ou com desconto, incluindo descontos no Google Workspace e o Google Ad Grants, que dá às organizações que se qualificam até $10,000 por mês em anúncios na pesquisa Google. A Google usa um parceiro chamado Goodstack para confirmar que você é uma organização sem fins lucrativos.",
            "As ofertas da Microsoft para organizações sem fins lucrativos incluem o Microsoft 365 Business Basic grátis para até 300 utilizadores, planos pagos com desconto e o Copilot Chat incluído numa assinatura do Microsoft 365. Você regista-se e a Microsoft confirma se tem direito.",
            "Nem todos os grupos têm direito. O programa da Google exclui, por exemplo, organismos do governo, hospitais e escolas. As ferramentas de design como o Canva também têm programas para organizações sem fins lucrativos; veja a página oficial delas para as condições atuais. Os preços e as regras mudam, por isso verifique sempre a página oficial antes de se candidatar."
          ],
          steps: ["Tenha à mão o nome legal da organização, a morada e a prova de isenção de impostos.", "Abra as páginas oficiais do Google for Nonprofits e da Microsoft para organizações sem fins lucrativos.", "Leia as regras de quem tem direito.", "Candidate-se com um e-mail da organização, não um pessoal.", "Ative cada produto em separado depois de ser aprovado."],
          words: [["Ter direito (elegível)", "poder entrar porque cumpre as regras."], ["Isenção de impostos", "ser reconhecido pelo governo como não pagando certos impostos, como uma organização 501(c)(3) nos Estados Unidos."], ["Ad Grants", "o programa da Google que dá anúncios de pesquisa gratuitos às organizações sem fins lucrativos que se qualificam."]],
          slides: [
            { title: "Google for Nonprofits", bullets: ["Produtos Google sem custo ou com desconto", "Descontos no Workspace e Ad Grants", "Ad Grants: até $10,000 por mês em anúncios de pesquisa", "Confirmação feita através da Goodstack"] },
            { title: "Ofertas da Microsoft para organizações", bullets: ["Microsoft 365 Business Basic grátis até 300 utilizadores", "Planos pagos com desconto", "Copilot Chat incluído no Microsoft 365"] },
            { title: "Antes de se candidatar", bullets: ["Veja quem tem direito na página oficial", "Tenha à mão a prova de isenção de impostos", "Os preços e as regras mudam: verifique primeiro"] }
          ],
          sources: [
            { name: "Google for Nonprofits", url: "https://www.google.com/nonprofits/" },
            { name: "Google Ad Grants", url: "https://www.google.com/grants/" },
            { name: "Ofertas da Microsoft para organizações sem fins lucrativos", url: "https://www.microsoft.com/en-us/nonprofits/offers-for-nonprofits" }
          ],
          tryIt: "Abra as páginas do Google for Nonprofits e das ofertas da Microsoft para organizações sem fins lucrativos. Escreva se a sua organização parece ter direito a cada uma e que provas precisaria.",
          youCanNow: "encontrar programas de tecnologia para organizações sem fins lucrativos, ver se tem direito e saber o que ter à mão para se candidatar.",
          quickCheck: [
            { objective: "O2", q: "O que faz a Microsoft depois de você se registar nas suas ofertas para organizações sem fins lucrativos?", options: ["Envia-lhe uma fatura", "Pede listas de doadores", "Confirma se tem direito", "Dá-lhe um apoio em dinheiro"], answer: 2, why: "Você regista-se e a Microsoft confirma se tem direito." },
            { objective: "O2", q: "Uma escola pública pergunta-lhe se pode entrar no Google for Nonprofits. O que lhe diz?", options: ["Sim, todos os grupos têm direito", "Sim, se pagar uma taxa", "Só aos fins de semana", "A página da Google diz que as escolas estão excluídas, por isso veja a página oficial"], answer: 3, why: "O programa da Google exclui organismos do governo, hospitais e escolas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Criar hábitos seguros para cada ferramenta",
          minutes: 4,
          goal: "Configurar uma ferramenta de IA com segurança para a sua equipa usar.",
          text: [
            "Use contas da organização, não contas pessoais, para que o trabalho fique com a organização quando um voluntário vai embora. Ative a verificação em dois passos em todas as contas.",
            "Descubra onde cada ferramenta guarda o histórico das suas conversas e se pode ser desligado ou apagado. Procure nas definições da ferramenta os controlos de privacidade ou de dados.",
            "A regra de ouro é a mesma em todas as ferramentas: nenhuma informação privada de doadores, voluntários ou beneficiários entra, a não ser que os seus líderes tenham aprovado essa ferramenta para isso. Use marcadores como [nome] no lugar."
          ],
          steps: ["Entre com uma conta da organização.", "Ative a verificação em dois passos.", "Abra as definições e encontre os controlos de privacidade ou de dados.", "Combinem em equipa: nenhuma informação privada, usem marcadores."],
          words: [["Verificação em dois passos", "uma segunda verificação, como um código no seu telefone, quando entra na conta."], ["Histórico de conversas", "o registo que uma ferramenta guarda das suas conversas anteriores."]],
          slides: [
            { title: "Contas", bullets: ["Contas da organização, não pessoais", "O trabalho fica quando os voluntários saem"] },
            { title: "Segurança", bullets: ["Ative a verificação em dois passos", "Encontre os controlos de privacidade nas definições"] },
            { title: "A regra de ouro", bullets: ["Nenhum dado privado de doadores, voluntários ou beneficiários", "Use marcadores como [nome]"] }
          ],
          tryIt: "Abra as definições da ferramenta de IA que mais usa. Encontre onde guarda o histórico das suas conversas e os controlos de privacidade. Escreva uma frase sobre o que encontrou.",
          youCanNow: "configurar uma ferramenta de IA com hábitos seguros para a sua equipa.",
          quickCheck: [
            { objective: "O3", q: "Onde encontra o histórico de conversas e os controlos de dados de uma ferramenta?", options: ["Nas definições da ferramenta", "Na sua caixa de e-mail", "Numa página de rede social", "Em lado nenhum; não podem ser mudados"], answer: 0, why: "Procure nas definições da ferramenta os controlos de privacidade ou de dados." },
            { objective: "O3", q: "Uma voluntária configurou a ferramenta de design da equipa na conta pessoal dela e vai mudar-se. O que devia ter feito?", options: ["Nada; as contas pessoais são as melhores", "Usado uma conta da organização para o trabalho ficar com a organização", "Partilhado a palavra-passe dela com todos", "Desligado a verificação em dois passos"], answer: 1, why: "As contas da organização mantêm o trabalho na organização quando um voluntário vai embora." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer as suas ferramentas",
        questions: [
          { objective: "O1", q: "Precisa de um folheto para voluntários. Que tipo de ferramenta serve melhor?", options: ["Uma ferramenta de design", "Uma folha de cálculo", "Um gravador de reuniões", "Uma calculadora"], answer: 0, why: "As ferramentas de design fazem folhetos e imagens." },
          { objective: "O2", q: "O que dá o Google Ad Grants às organizações que se qualificam?", options: ["Computadores portáteis grátis", "Até $10,000 por mês em anúncios na pesquisa Google", "Doações em dinheiro", "Pessoal grátis"], answer: 1, why: "A página oficial da Google diz até $10,000 por mês em anúncios de pesquisa." },
          { objective: "O3", q: "Antes de gravar uma reunião com uma ferramenta de notas com IA, você tem de:", options: ["Esconder o gravador", "Perguntar só a quem dirige a reunião", "Ter o acordo de todos", "Nada"], answer: 2, why: "As pessoas devem concordar antes de serem gravadas." },
          { objective: "O3", q: "Porque usar uma conta da organização em vez de uma pessoal?", options: ["É mais rápido de escrever", "As contas pessoais são ilegais", "Não há razão", "O trabalho fica com a organização"], answer: 3, why: "O trabalho não se perde quando um voluntário sai." },
          { objective: "O2", q: "Os preços e as regras dos programas mudam. O que faz?", options: ["Verifica a página oficial antes de se candidatar", "Confia num artigo antigo de um blogue", "Pergunta a uma IA e aceita a resposta", "Adivinha"], answer: 0, why: "As páginas oficiais têm as regras atuais." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer trabalho real com ferramentas de IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Transformar notas de reunião num resumo claro",
          minutes: 5,
          goal: "Usar um assistente de conversa para transformar notas de reunião soltas num resumo com tarefas a fazer.",
          text: [
            "As reuniões da direção, da equipa do ministério e dos voluntários deixam notas desarrumadas. Um assistente de conversa pode transformá-las num resumo limpo em segundos.",
            "Primeiro tire os dados privados: nada de nomes de beneficiários, problemas de saúde ou valores de doações. Use funções no lugar dos nomes: \"o tesoureiro\", \"o responsável dos jovens\". Depois cole as notas com este pedido: \"Resuma estas notas de reunião em 5 pontos. Depois liste as tarefas a fazer numa tabela com: tarefa, quem (pela função) e data limite.\"",
            "Compare o resumo com as suas notas. A IA pode esquecer uma decisão ou inventar uma data limite. Corrija e depois acrescente você mesmo os nomes verdadeiros antes de o partilhar."
          ],
          steps: ["Tire os dados privados; use funções no lugar dos nomes.", "Cole as notas no assistente de conversa.", "Peça um resumo em 5 pontos e uma tabela de tarefas a fazer.", "Verifique cada decisão e cada data nas suas notas.", "Acrescente você mesmo os nomes verdadeiros e depois partilhe."],
          words: [["Tarefa a fazer", "um trabalho que alguém aceitou fazer depois de uma reunião."], ["Resumo", "uma versão curta que guarda os pontos principais."]],
          slides: [
            { title: "Prepare as notas", bullets: ["Tire dados de beneficiários, de saúde e de doadores", "Use funções: tesoureiro, responsável dos jovens"] },
            { title: "O pedido", bullets: ["Resuma em 5 pontos", "Tabela de tarefas: tarefa, quem, data limite"] },
            { title: "Verifique e termine", bullets: ["Compare com as suas notas", "Corrija decisões em falta e datas inventadas", "Acrescente você mesmo os nomes verdadeiros"] }
          ],
          tryIt: "Pegue nas notas de uma reunião recente (ou escreva cinco linhas de notas de prática). Tire os dados privados, peça um resumo e uma tabela de tarefas a fazer e compare-os com as notas.",
          youCanNow: "transformar notas de reunião num resumo verificado com tarefas a fazer, usando IA.",
          quickCheck: [
            { objective: "O4", q: "No pedido do resumo, como aparece o \"quem\" na tabela de tarefas a fazer?", options: ["Pelo nome completo e telefone", "Pela morada de casa", "Pela função", "Pelo valor da doação"], answer: 2, why: "O pedido pede tarefa, quem (pela função) e data limite; os nomes acrescenta você depois." },
            { objective: "O4", q: "O resumo da IA deixa de fora uma decisão que a direção tomou. O que faz?", options: ["Partilha como está", "Apaga as notas", "Pede à IA para adivinhar o que foi decidido", "Acrescenta a decisão a partir das suas notas antes de partilhar"], answer: 3, why: "Compare o resumo com as suas notas e corrija o que faltar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um folheto para voluntários com IA",
          minutes: 5,
          goal: "Usar a IA para escrever o texto do folheto e uma ferramenta de design para o arrumar na página.",
          text: [
            "Comece pelas palavras. Peça a um assistente de conversa: \"Escreva o texto de um folheto para recrutar voluntários para o nosso programa de explicações ao sábado para alunos do 6.º ao 8.º ano. Inclua um título curto, três razões para participar, o tempo que é preciso dar e como se inscrever. Menos de 60 palavras.\"",
            "Depois abra uma ferramenta de design, procure nos modelos \"voluntário\" ou \"folheto\" e cole o seu texto. Muitas ferramentas de design têm funções de IA que sugerem arrumações ou imagens; descreva o que quer e escolha uma.",
            "Verifique você mesmo os detalhes: data, hora, local, contacto e link de inscrição. Use fotografias que tem autorização para usar e nunca mostre a cara de crianças sem autorização escrita dos pais ou do encarregado de educação."
          ],
          steps: ["Peça a um assistente de conversa um texto curto para o folheto.", "Abra uma ferramenta de design e procure um modelo de folheto.", "Cole o seu texto e ajuste a arrumação.", "Verifique a data, a hora, o local e o contacto.", "Use só imagens que tem autorização para usar."],
          words: [["Modelo", "um design já pronto que você preenche com as suas palavras."], ["Autorização", "acordo, muitas vezes por escrito, para usar a fotografia ou o trabalho de alguém."]],
          slides: [
            { title: "Primeiro as palavras", bullets: ["Título, três razões, tempo que é preciso dar", "Como se inscrever", "Menos de 60 palavras"] },
            { title: "Depois o design", bullets: ["Abra uma ferramenta de design", "Procure modelos de \"folheto para voluntários\"", "Cole e ajuste"] },
            { title: "Verifique antes de imprimir", bullets: ["Data, hora, local, contacto", "Só fotografias com autorização", "Nada de caras de crianças sem autorização dos pais"] }
          ],
          tryIt: "Faça um folheto para recrutar voluntários para um programa real ou de prática: texto escrito pela IA com menos de 60 palavras, arrumado num modelo de uma ferramenta de design. Verifique cada detalhe.",
          youCanNow: "fazer um folheto para voluntários usando a IA para as palavras e uma ferramenta de design para a arrumação.",
          quickCheck: [
            { objective: "O5", q: "O que procura nos modelos de uma ferramenta de design?", options: ["Palavras como \"voluntário\" ou \"folheto\"", "Os nomes dos seus doadores", "A sua palavra-passe", "A morada de um beneficiário"], answer: 0, why: "Procure nos modelos \"voluntário\" ou \"folheto\" e cole o seu texto." },
            { objective: "O5", q: "O texto do folheto feito pela IA tem o link de inscrição errado. O que faz?", options: ["Imprime mesmo assim", "Corrige você mesmo o link antes de imprimir", "Tira a parte da inscrição", "Pede à ferramenta de design para adivinhar o link"], answer: 1, why: "Verifique você mesmo a data, a hora, o local, o contacto e o link de inscrição." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Montar o cartão de ferramentas de IA da sua equipa",
          minutes: 5,
          goal: "Escrever um cartão de ferramentas de uma página que diga à sua equipa que ferramentas usar e como.",
          text: [
            "Um cartão de ferramentas é uma página que a sua equipa pode ter ao lado do computador. Indica cada ferramenta aprovada, para que serve, como entrar e o que nunca pode entrar nela.",
            "Seja breve: uma linha por ferramenta. Acrescente os dois ou três pedidos que funcionaram melhor para a sua equipa, como o pedido do resumo de reunião, para os novos voluntários os poderem copiar.",
            "Reveja o cartão de seis em seis meses. As ferramentas, os preços e os programas para organizações sem fins lucrativos mudam, e a sua equipa vai descobrir pedidos melhores."
          ],
          steps: ["Indique um assistente de conversa, um pacote de escritório e uma ferramenta de design.", "Para cada um: para que serve e como entrar.", "Acrescente a regra de privacidade de cada um.", "Acrescente os seus dois ou três melhores pedidos.", "Marque uma data para o rever daqui a seis meses."],
          words: [["Cartão de ferramentas", "um guia de uma página sobre as ferramentas que a sua equipa usa e como usá-las com segurança."]],
          slides: [
            { title: "Uma linha por ferramenta", bullets: ["Nome e para que serve", "Como entrar", "O que nunca entra"] },
            { title: "Acrescente os seus melhores pedidos", bullets: ["Pedido do resumo de reunião", "Pedido do texto do folheto", "Os novos voluntários podem copiá-los"] },
            { title: "Mantenha-o atualizado", bullets: ["Reveja de seis em seis meses", "As ferramentas e os programas mudam"] }
          ],
          tryIt: "Tarefa final: escreva o cartão de ferramentas de IA de uma página da sua equipa com três ferramentas, para que servem e as regras de privacidade, e junte o resumo de reunião e o folheto que fez.",
          youCanNow: "escolher, usar e registar por escrito um pequeno conjunto de ferramentas de IA para a equipa da sua organização.",
          quickCheck: [
            { objective: "O6", q: "Como está organizado um cartão de ferramentas?", options: ["Um manual comprido", "Um vídeo", "Uma linha por ferramenta numa página", "Uma lista de palavras-passe"], answer: 2, why: "Seja breve: uma página, uma linha por ferramenta." },
            { objective: "O6", q: "A sua equipa encontrou um pedido para reuniões que funciona muito bem. O que faz com ele?", options: ["Guarda-o só para si", "Apaga-o depois de usar", "Envia-o aos doadores", "Acrescenta-o ao cartão de ferramentas para os novos voluntários o poderem copiar"], answer: 3, why: "Acrescente os melhores pedidos para os novos voluntários poderem copiar o que funciona." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer trabalho real com ferramentas de IA",
        questions: [
          { objective: "O4", q: "Antes de colar notas de reunião na IA, você deve:", options: ["Acrescentar os dados bancários dos doadores", "Tirar os dados privados e usar funções no lugar dos nomes", "Colá-las tal como estão escritas", "Enviá-las primeiro por e-mail a todos"], answer: 1, why: "As funções mantêm os dados privados fora da ferramenta de IA." },
          { objective: "O4", q: "O resumo da IA tem uma data limite que ninguém combinou. O que faz?", options: ["Deixa-a ficar", "Pede à IA para a manter", "Corrige-a a partir das suas notas", "Partilha mesmo assim"], answer: 2, why: "A IA pode inventar detalhes; o registo são as suas notas." },
          { objective: "O5", q: "Qual é um bom uso de um modelo de uma ferramenta de design?", options: ["Guardar listas de doadores", "Escrever um orçamento", "Gravar uma reunião", "Colar o texto do seu folheto numa arrumação já pronta"], answer: 3, why: "Os modelos dão-lhe uma arrumação já pronta." },
          { objective: "O5", q: "Quer pôr no folheto uma fotografia de crianças do seu programa. O que precisa?", options: ["Autorização escrita dos pais ou do encarregado de educação", "Nada", "Uma fotografia maior", "Uma IA para a desfocar"], answer: 0, why: "As imagens de crianças precisam da autorização dos pais ou do encarregado de educação." },
          { objective: "O6", q: "De quanto em quanto tempo deve rever o seu cartão de ferramentas?", options: ["Nunca", "Mais ou menos de seis em seis meses", "Todos os dias", "Só quando um doador pede"], answer: 1, why: "As ferramentas e os programas mudam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ferramentas de IA Essenciais para Organizações sem Fins Lucrativos e Como Usá-las",
    questions: [
      { objective: "O1", q: "Qual destes é um assistente de conversa?", options: ["Uma impressora", "Uma célula de folha de cálculo", "Microsoft Copilot", "Um agrafador"], answer: 2, why: "O Copilot, o ChatGPT e o Gemini são assistentes de conversa." },
      { objective: "O1", q: "Um pacote de escritório é:", options: ["Uma sala de reuniões", "Só uma base de dados de doadores", "Um telefone", "Um conjunto de programas de trabalho como e-mail, documentos e folhas de cálculo"], answer: 3, why: "O Microsoft 365 e o Google Workspace são pacotes de escritório." },
      { objective: "O1", q: "Que tipo de ferramenta faz imagens para as redes sociais?", options: ["Uma ferramenta de design", "Uma calculadora", "Uma aplicação do banco", "Um termóstato"], answer: 0, why: "As ferramentas de design fazem imagens e folhetos." },
      { objective: "O1", q: "O que quer dizer \"transcrever\"?", options: ["Traduzir para espanhol", "Passar as palavras faladas para texto escrito", "Apagar um ficheiro", "Enviar uma doação"], answer: 1, why: "As ferramentas de reuniões podem transcrever o que as pessoas dizem." },
      { objective: "O1", q: "A melhor forma de começar a escolher ferramentas é:", options: ["Comprar todas as ferramentas novas", "Não usar nenhuma", "Usar o que já tem, uma de cada tipo", "Perguntar a um desconhecido"], answer: 2, why: "Poucas ferramentas, bem usadas." },
      { objective: "O2", q: "O Google for Nonprofits confirma as organizações através de:", options: ["Os correios", "O seu banco", "Um doador", "Goodstack"], answer: 3, why: "A Google indica a Goodstack como o seu parceiro de confirmação." },
      { objective: "O2", q: "Segundo a página da Google, que grupo NÃO tem direito ao Google for Nonprofits?", options: ["Um organismo do governo", "Uma organização de beneficência registada", "Uma organização de beneficência de banco alimentar", "Uma organização comunitária sem fins lucrativos"], answer: 0, why: "Os organismos do governo, os hospitais e as escolas estão excluídos." },
      { objective: "O2", q: "As ofertas da Microsoft para organizações sem fins lucrativos incluem:", options: ["Carros grátis", "Microsoft 365 Business Basic grátis até 300 utilizadores", "Apoios em dinheiro para a renda", "Escritórios grátis"], answer: 1, why: "A página da Microsoft indica o Business Basic grátis até 300 utilizadores." },
      { objective: "O2", q: "O que deve ter à mão antes de se candidatar a um programa de tecnologia para organizações sem fins lucrativos?", options: ["Os números dos cartões dos doadores", "Os processos dos beneficiários", "O nome legal, a morada e a prova de isenção de impostos", "Nada"], answer: 2, why: "Os programas confirmam que é uma organização sem fins lucrativos verdadeira." },
      { objective: "O3", q: "Verificação em dois passos quer dizer:", options: ["Entrar na conta duas vezes por dia", "Partilhar a sua palavra-passe", "Duas pessoas partilham uma conta", "Uma segunda verificação, como um código no telefone, quando entra na conta"], answer: 3, why: "Protege as contas se uma palavra-passe for descoberta." },
      { objective: "O3", q: "Onde procura os controlos de privacidade de uma ferramenta?", options: ["Nas definições dela", "No caixote do lixo", "No e-mail de um doador", "Na impressora"], answer: 0, why: "As definições costumam ter os controlos de dados e de privacidade." },
      { objective: "O3", q: "A regra de ouro em todas as ferramentas de IA é:", options: ["Colar tudo para ter melhores resultados", "Nenhuma informação privada de doadores, voluntários ou beneficiários, a não ser que seja aprovado", "Usar só contas pessoais", "Nunca verificar as respostas"], answer: 1, why: "Proteger as informações privadas mantém a confiança." },
      { objective: "O4", q: "Num pedido de resumo de reunião, deve pedir:", options: ["Um poema", "Os dados bancários dos doadores", "Pontos e uma tabela de tarefas a fazer", "Uma história qualquer"], answer: 2, why: "Isto dá um resumo claro e fácil de usar." },
      { objective: "O4", q: "Porque usar funções como \"o tesoureiro\" nas notas que cola?", options: ["É mais curto", "A IA não consegue ler nomes", "Os tesoureiros preferem", "Para deixar de fora os nomes e os dados privados"], answer: 3, why: "As funções protegem a privacidade." },
      { objective: "O4", q: "O que verifica num resumo de reunião feito pela IA?", options: ["Cada decisão e cada data, comparando com as suas notas", "Só o tipo de letra", "Nada", "Só o tamanho"], answer: 0, why: "A IA pode esquecer ou inventar detalhes." },
      { objective: "O5", q: "Um bom texto de folheto para voluntários inclui:", options: ["Só um logótipo", "Título, razões para participar, tempo que é preciso dar e como se inscrever", "Nomes de doadores", "Uma longa história da organização"], answer: 1, why: "Diz a quem lê porquê e como participar." },
      { objective: "O5", q: "Antes de imprimir um folheto, verifique:", options: ["Só as cores", "O tempo que vai fazer", "A data, a hora, o local e o contacto", "Nada"], answer: 2, why: "Detalhes errados impedem as pessoas de vir." },
      { objective: "O6", q: "Um cartão de ferramentas é:", options: ["Um cartão-presente", "Um crachá de voluntário", "Um recibo de doação", "Um guia de uma página sobre as ferramentas aprovadas da sua equipa"], answer: 3, why: "Mostra que ferramentas usar e como." },
      { objective: "O6", q: "Porque acrescentar os seus melhores pedidos ao cartão de ferramentas?", options: ["Os novos voluntários podem copiar o que funciona", "Para encher espaço", "Os pedidos são secretos", "Os doadores querem-nos"], answer: 0, why: "Pedidos partilhados poupam tempo e mantêm a qualidade." },
      { objective: "O2", q: "As condições do Canva para organizações sem fins lucrativos podem ter mudado. Você deve:", options: ["Achar que é grátis para sempre", "Ver a página oficial do Canva para organizações sem fins lucrativos", "Perguntar a um assistente de conversa e confiar", "Não usar ferramentas de design"], answer: 1, why: "As páginas oficiais têm as condições atuais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 5, 9, 12, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Ferramentas certas indicadas", objective: "O1", notYet: "Falta um dos três tipos de ferramenta, ou uma ferramenta é usada para o trabalho errado.", meets: "Indica um assistente de conversa, um pacote de escritório e uma ferramenta de design, cada um com aquilo para que serve.", exceeds: "Anota que ferramentas vêm grátis ou com desconto através de um programa para organizações sem fins lucrativos." },
      { name: "Regras de segurança no cartão", objective: "O3", notYet: "O cartão não diz o que nunca pode entrar em cada ferramenta.", meets: "Cada ferramenta diz o que nunca pode entrar nela, com contas da organização e verificação em dois passos.", exceeds: "Também diz onde encontrar os controlos de privacidade de cada ferramenta." },
      { name: "Resumo de reunião", objective: "O4", notYet: "O resumo tem nomes ou dados privados, ou uma decisão ou data errada.", meets: "Resumo e tabela de tarefas a fazer pela função, verificados nas notas.", exceeds: "Os nomes verdadeiros só foram acrescentados depois de copiar o texto para fora da ferramenta de IA." },
      { name: "Folheto para voluntários", objective: "O5", notYet: "Data, hora, local ou contacto errados ou em falta, ou uma fotografia sem autorização.", meets: "Título, razões para participar, tempo que é preciso dar e inscrição, com todos os detalhes verificados.", exceeds: "Usa só fotografias com autorização e lê-se facilmente num relance." },
      { name: "Cartão de ferramentas útil", objective: "O6", notYet: "Tem mais de uma página, ou falta como entrar.", meets: "Uma página, uma linha por ferramenta, com os melhores pedidos.", exceeds: "Tem uma data de revisão daqui a cerca de seis meses e um responsável." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações que se candidatam a pelo menos um programa de tecnologia para organizações sem fins lucrativos em 60 dias (inquérito de seguimento)",
      "Equipas que usam o seu cartão de ferramentas para resumos de reunião ou folhetos em 30 dias",
      "Alunos que começam outro curso da Koach Learn para organizações sem fins lucrativos em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "Um assistente de conversa gratuito, o pacote de escritório da organização e uma conta gratuita numa ferramenta de design",
      "Notas de reunião de exemplo sem dados privados",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes da sessão, veja que pacote de escritório e que ferramenta de design a organização já tem.",
      "Tenha à mão o nome legal da organização, a morada e a prova de isenção de impostos, se os alunos se forem candidatar a programas durante a sessão.",
      "Dê notas de reunião de exemplo com funções no lugar dos nomes, para não se colarem dados privados verdadeiros.",
      "Lembre aos alunos que as fotografias de crianças precisam de autorização escrita dos pais ou do encarregado de educação.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
