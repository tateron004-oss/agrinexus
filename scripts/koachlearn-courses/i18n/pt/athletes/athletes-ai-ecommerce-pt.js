"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-ecommerce.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US names (NIL, NCAA, USPTO, IRS, NFL) are kept and explained; platform names are given without prices.

module.exports = {
  id: "athletes-ai-ecommerce-pt",
  lang: "pt",
  translationOf: "athletes-ai-ecommerce",
  category: "Athletes",
  name: "Plataformas de Comércio Eletrónico com IA para Atletas",
  skills: "Escolher o que vender, Comparar plataformas de loja e taxas, Escrever páginas de produto com IA, Definir preços a partir dos custos reais, Verificar as regras de NIL, logótipos e marcas registadas antes de vender",
  outcome: "planear e montar uma oferta simples na internet, como artigos com a sua marca, aulas particulares ou um campo de treino: escolher uma plataforma, escrever uma página de produto com IA, definir um preço a partir dos custos reais e verificar as regras de NIL, logótipos e marcas registadas antes de lançar.",
  about: [
    "Este curso é para atletas e treinadores que querem vender alguma coisa pela internet: camisolas ou outros artigos com o seu próprio desenho, aulas particulares, planos de treino, ou campos de treino e clínicas.",
    "Você vai aprender o que vender, como escolher uma plataforma de loja, como escrever uma página de produto com IA, como definir um preço que cubra os seus custos e como respeitar as regras de NIL, dos logótipos da escola e das marcas registadas.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Isto é educação geral, não é aconselhamento jurídico nem fiscal; fale com o gabinete de conformidade (compliance) da sua escola, com um pai, mãe ou tutor se tiver menos de 18 anos, e com um profissional de impostos."
  ],
  finalTask: "Escreva um plano de lançamento de uma página para um produto ou serviço: o que é e para quem é, a plataforma que escolheu e as suas taxas atuais (tiradas da página de preços), uma página de produto escrita com IA e corrigida por você, um preço calculado a partir dos custos reais, e uma lista de verificação das regras (NIL, logótipos da escola, marcas registadas, impostos) com o nome de quem consultou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas e treinadores do ensino secundário, da universidade e do início da carreira que querem vender alguma coisa pela internet: artigos com o seu próprio desenho, aulas particulares, planos de treino, ou campos de treino e clínicas.",
    startingPoint: "Têm seguidores nas redes sociais e uma habilidade sobre a qual as pessoas fazem perguntas, e talvez já tenham comprado coisas pela internet. Poucos já compararam taxas de lojas, calcularam um preço a partir dos custos reais, escreveram uma página de produto ou verificaram as regras de NIL, logótipos, marcas registadas e impostos.",
    gap: "Os atletas que lançam sem verificar as regras podem perder a elegibilidade para competir ou ter problemas com marcas registadas, e quem define o preço sem contar as taxas pode perder dinheiro. Um plano simples, com as regras verificadas, uma página honesta e um preço baseado nos custos, permite-lhes ganhar dinheiro com as suas habilidades com segurança.",
    constraints: [
      "Linguagem simples, mais ou menos ao nível de leitura do 8.º ano",
      "Um telefone ou computador, um assistente de IA gratuito e uma folha de cálculo; as taxas das plataformas mudam e têm de ser lidas na página de preços de cada uma",
      "Cerca de 60 minutos no total",
      "Regras de NIL, dos logótipos da escola, das marcas registadas das ligas e dos impostos; verifique com o gabinete de conformidade ou com a associação desportiva do estado",
      "Os atletas com menos de 18 anos precisam de um adulto que seja dono ou co-titular das contas da loja e de pagamento; isto é educação, não é aconselhamento jurídico nem fiscal"
    ],
    prerequisites: "Nenhum. O curso \"Estratégias de Marketing Digital com IA para Atletas\" ajuda a promover o lançamento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com base no que o seu público lhe pergunta", action: "escolher um primeiro produto para vender: um artigo físico, um serviço ou um produto digital", standard: "com o tempo e o dinheiro de que precisa escritos" },
    { id: "O2", condition: "Usando as páginas de preços oficiais de duas plataformas", action: "comparar as suas taxas mensais, por venda e de pagamento, e escolher uma", standard: "com as taxas reais e atuais escritas e as regras de idade verificadas" },
    { id: "O3", condition: "Antes de vender alguma coisa com o seu nome ou um logótipo", action: "verificar as regras de NIL, logótipos, marcas registadas e impostos que se aplicam a você", standard: "sem usar nenhum logótipo de escola, equipa ou liga sem autorização escrita, com uma pesquisa no USPTO feita e com o nome da pessoa que consultou" },
    { id: "O4", condition: "Usando um rascunho feito pela IA", action: "escrever uma página de produto honesta que responda a o quê, para quem, o que a pessoa recebe, preço, quando e como", standard: "com menos de 200 palavras, todos os dados verdadeiros, fotos reais que são suas e regras de reembolso claras" },
    { id: "O5", condition: "Com todos os custos de uma venda", action: "calcular um preço que cubra os seus custos e deixe lucro", standard: "com as contas verificadas numa folha de cálculo e com uma calculadora" },
    { id: "O6", condition: "Quando a sua oferta estiver pronta", action: "planear um lançamento discreto e uma rotina de apoio ao cliente", standard: "com os problemas corrigidos antes do grande anúncio e as mensagens respondidas no prazo de um dia" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que vender e onde",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher o que vender",
          minutes: 5,
          goal: "Escolher um produto ou serviço que combine com as suas habilidades e o seu público.",
          text: [
            "Os atletas costumam vender uma de três coisas. Produtos físicos: camisolas, bonés, autocolantes ou cartazes com o seu próprio desenho ou logótipo. Serviços: aulas particulares, treino em pequenos grupos, campos de treino e clínicas. Produtos digitais: planos de treino, cursos em vídeo ou guias de exercícios.",
            "Comece por uma coisa sobre a qual o seu público já lhe faz perguntas. Se os pais estão sempre a perguntar por aulas, venda aulas. Se os fãs comentam o seu logótipo, experimente vender artigos com ele.",
            "Pense no tempo e no risco. Os serviços pagam o seu tempo, mas dependem do seu horário. Os artigos físicos precisam de dinheiro adiantado, a não ser que use impressão por encomenda. Os produtos digitais levam tempo a fazer, mas podem ser vendidos muitas vezes."
          ],
          steps: ["Faça uma lista do que o seu público lhe pergunta.", "Separe as ideias em físico, serviço ou digital.", "Anote o tempo e o dinheiro de que cada uma precisa.", "Escolha uma para começar."],
          words: [["Comércio eletrónico (e-commerce)", "comprar e vender pela internet."], ["Impressão por encomenda (print-on-demand)", "um serviço que imprime e envia um artigo só depois de alguém o encomendar."], ["Produto digital", "uma coisa vendida como ficheiro ou como acesso pela internet, como um plano de treino."]],
          slides: [
            { title: "Três tipos de oferta", bullets: ["Físico: artigos com o seu desenho", "Serviços: aulas, campos de treino, clínicas", "Digital: planos de treino, cursos em vídeo"] },
            { title: "Comece pela procura", bullets: ["O que é que o seu público pergunta?", "Escolha uma coisa"] },
            { title: "Tempo e risco", bullets: ["Serviços: o seu tempo", "Artigos físicos: dinheiro adiantado ou impressão por encomenda", "Digital: faz uma vez, vende muitas vezes"] }
          ],
          tryIt: "Escreva três coisas sobre as quais as pessoas já lhe fizeram perguntas. Peça a um assistente de IA as vantagens e desvantagens de vender cada uma e depois escolha uma.",
          youCanNow: "escolher um produto ou serviço que combina com as suas habilidades e o seu público.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um produto físico?", options: ["Um curso em vídeo", "Uma aula particular", "Um campo de treino", "Uma camisola com o seu próprio desenho"], answer: 3, why: "Os produtos físicos incluem camisolas, bonés, autocolantes e cartazes." },
            { objective: "O1", q: "Os pais estão sempre a perguntar-lhe por aulas para os filhos. O que experimenta primeiro?", options: ["Vender aulas particulares", "Desenhar um cartaz", "Começar um curso em vídeo", "Vender bonés"], answer: 0, why: "Comece por uma coisa sobre a qual o seu público já pergunta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Comparar plataformas de loja",
          minutes: 5,
          goal: "Comparar duas plataformas e escolher uma pelas suas taxas e funções atuais.",
          text: [
            "Não precisa de construir uma loja do zero. Criadores de lojas como o Shopify, o Square Online e o Wix deixam-no publicar produtos e receber pagamentos. Serviços de impressão por encomenda, como o Printful ou o Printify, ligam-se às lojas e tratam da impressão e do envio. Para aulas e campos de treino, uma ferramenta de marcações e inscrições ou um simples link de pagamento pode bastar.",
            "Todas as plataformas cobram de alguma forma: planos mensais, uma percentagem de cada venda, taxas de processamento de pagamentos, ou as três coisas. Estas taxas mudam muitas vezes, por isso leia a página de preços atual de cada plataforma e escreva os números reais.",
            "Se tiver menos de 18 anos, muitas plataformas e serviços de pagamento exigem que um adulto seja dono ou co-titular da conta. Envolva um pai, mãe ou tutor."
          ],
          steps: ["Escolha duas plataformas que servem para a sua oferta.", "Abra a página de preços oficial de cada uma.", "Escreva o custo mensal, a taxa por venda e a taxa de pagamento.", "Verifique as regras de idade.", "Escolha a que tem o custo total mais baixo para as vendas que espera fazer."],
          words: [["Plataforma", "um serviço na internet que usa para gerir a sua loja."], ["Taxa de processamento", "o que um serviço de pagamento cobra para receber um pagamento com cartão."]],
          slides: [
            { title: "Opções de loja", bullets: ["Criadores de lojas: Shopify, Square Online, Wix", "Impressão por encomenda: Printful, Printify", "Aulas e campos de treino: ferramentas de marcação ou um link de pagamento"] },
            { title: "Taxas a comparar", bullets: ["Plano mensal", "Taxa por venda", "Taxa de processamento de pagamentos"] },
            { title: "Antes de se inscrever", bullets: ["Leia a página de preços atual", "Menos de 18 anos: um adulto pode ter de ser o dono da conta"] }
          ],
          tryIt: "Escolha duas plataformas. A partir das páginas de preços oficiais, escreva numa pequena tabela o custo mensal e as taxas de cada uma, e escolha a que fica mais barata no total para 20 vendas por mês.",
          youCanNow: "comparar plataformas de loja pelas suas taxas reais e atuais e escolher uma.",
          quickCheck: [
            { objective: "O2", q: "O que fazem o Printful e o Printify?", options: ["Fazem as inscrições para campos de treino", "Tratam da impressão e do envio das encomendas", "Preenchem os seus impostos", "Desenham o seu logótipo de graça"], answer: 1, why: "Os serviços de impressão por encomenda ligam-se às lojas e tratam da impressão e do envio." },
            { objective: "O2", q: "Um amigo diz que uma plataforma não custa nada. O que faz?", options: ["Acredita e inscreve-se", "Pergunta o preço a uma IA", "Lê a página de preços atual da plataforma e escreve as taxas", "Adivinha as taxas"], answer: 2, why: "Todas as plataformas cobram de alguma forma, e as taxas mudam, por isso leia a página de preços atual." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Primeiro as regras: NIL, logótipos e marcas registadas",
          minutes: 6,
          goal: "Verificar as regras que se aplicam antes de vender alguma coisa com o seu nome ou um logótipo.",
          text: [
            "Nos Estados Unidos, vender coisas com o seu próprio nome, imagem ou semelhança pode contar como atividade de NIL (Name, Image and Likeness: nome, imagem e semelhança). Os atletas universitários podem ter de a declarar; as regras da NCAA (a associação do desporto universitário dos EUA) dizem que o pagamento de NIL tem de ser para um fim comercial real e não pode depender do desempenho. No ensino secundário, as regras variam de estado para estado. Pergunte primeiro ao gabinete de conformidade ou à associação desportiva do seu estado.",
            "Não use o logótipo, o nome, a mascote ou as cores da sua escola ou equipa de uma forma que pareça oficial, a não ser que tenha autorização escrita. As escolas e as ligas normalmente são donas destas coisas e protegem-nas. Os logótipos das ligas profissionais e de outras marcas também são proibidos.",
            "Faça o seu próprio logótipo e pesquise nos registos de marcas do USPTO (o serviço de patentes e marcas dos EUA) antes de escolher o nome da sua marca, para não copiar a de outra pessoa. O dinheiro das vendas normalmente paga impostos; o IRS (o serviço de impostos dos EUA) diz que tem de entregar a declaração se o lucro líquido do trabalho por conta própria for de $400 ou mais, por isso guarde registos e fale com um profissional de impostos."
          ],
          steps: ["Pergunte ao gabinete de conformidade ou à associação do estado quais são as regras de NIL para vender.", "Não use logótipos de escolas, equipas ou ligas sem autorização escrita.", "Crie o seu próprio logótipo.", "Pesquise o nome da sua marca nos registos de marcas do USPTO.", "Prepare um registo simples das vendas e dos custos."],
          words: [["Marca registada", "um nome, logótipo ou slogan que identifica um negócio e é protegido pela lei."], ["Licenciamento", "autorização oficial para usar o logótipo ou o nome de outra pessoa ou entidade, muitas vezes a pagar."]],
          slides: [
            { title: "Regras de NIL", bullets: ["Vender com o seu nome pode ser atividade de NIL", "Universidade: pode ter de declarar", "Ensino secundário: as regras variam de estado para estado"] },
            { title: "Logótipos", bullets: ["Logótipos de escolas, equipas e ligas precisam de autorização escrita", "Logótipos de outras marcas: proibidos", "Faça o seu próprio"] },
            { title: "Nome e impostos", bullets: ["Pesquise no USPTO antes de escolher o nome da marca", "Guarde registos das vendas e dos custos", "Fale com um profissional de impostos"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness (nome, imagem e semelhança)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Noções básicas sobre marcas registadas", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Centro fiscal para trabalhadores por conta própria", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Escreva uma lista de verificação das regras para o seu produto: NIL (a quem perguntou), logótipos (de quem são, e a autorização), pesquisa de marca (feita ou não) e registos (onde os vai guardar).",
          youCanNow: "verificar o essencial sobre NIL, logótipos, marcas registadas e impostos antes de vender.",
          quickCheck: [
            { objective: "O3", q: "Quem é normalmente dono do logótipo, da mascote e do nome de uma escola?", options: ["A escola ou a liga", "Os atletas", "Qualquer pessoa que os use", "O jornal local"], answer: 0, why: "As escolas e as ligas normalmente são donas destas coisas e protegem-nas." },
            { objective: "O3", q: "Escolheu um nome de marca para os seus artigos. O que faz antes de imprimir?", options: ["Imprime 500 camisolas", "Pede aos fãs para votar", "Copia um logótipo famoso", "Pesquisa o nome nos registos de marcas do USPTO"], answer: 3, why: "Pesquisar nos registos do USPTO ajuda-o a não copiar a marca registada de outra pessoa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que vender e onde",
        questions: [
          { objective: "O1", q: "Qual destes é um serviço que um atleta pode vender?", options: ["Uma camisola", "Um autocolante", "Aulas particulares", "Um cartaz"], answer: 2, why: "As aulas são um serviço que paga o seu tempo." },
          { objective: "O2", q: "O que faz a impressão por encomenda?", options: ["Imprime e envia os artigos só depois de alguém encomendar", "Imprime dinheiro", "Obriga-o a comprar 500 camisolas primeiro", "Escreve a sua página de produto"], answer: 0, why: "Reduz o dinheiro de que precisa adiantado." },
          { objective: "O2", q: "Onde encontra as taxas reais de uma plataforma?", options: ["Num palpite", "Num vídeo antigo", "Na memória de uma IA", "Na sua página de preços oficial e atual"], answer: 3, why: "As taxas mudam; a página oficial está atualizada." },
          { objective: "O3", q: "Quer vender camisolas com o logótipo da sua escola. Do que precisa primeiro?", options: ["De nada", "De autorização escrita da escola", "De uma letra mais bonita", "De mais seguidores"], answer: 1, why: "As escolas normalmente são donas dos seus logótipos e protegem-nos." },
          { objective: "O3", q: "Porque pesquisar nos registos do USPTO antes de dar nome à sua marca?", options: ["Para ganhar camisolas grátis", "Para não copiar a marca registada de outra pessoa", "Para encontrar clientes", "Não serve para nada"], answer: 1, why: "Ajuda-o a evitar problemas com marcas registadas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir e lançar a sua oferta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever uma página de produto com IA",
          minutes: 5,
          goal: "Escrever uma página de produto clara e honesta com a ajuda da IA.",
          text: [
            "Uma página de produto responde às perguntas de quem compra: O que é? Para quem é? O que recebo? Quanto custa, quando e como? Para um campo de treino: datas, idades, local, o que as crianças aprendem, segurança, o que levar e as regras de reembolso.",
            "Peça a um assistente de IA: \"Escreva uma página de produto para uma aula particular de lançamento ao cesto de 1 hora para jogadores dos 10 aos 16 anos. Inclua o que vão aprender, o que levar, o tipo de local, um espaço para o preço e uma regra de reembolso curta. Simpática, clara, com menos de 200 palavras.\" Depois corrija todos os dados para que sejam verdadeiros.",
            "Use fotos reais que sejam suas. Não prometa resultados como \"titular garantido\" nem faça afirmações sobre saúde. Regras de reembolso e de cancelamento claras evitam discussões mais tarde."
          ],
          steps: ["Faça uma lista do que os compradores precisam de saber.", "Peça à IA um rascunho da página com menos de 200 palavras.", "Verifique todos os dados e corrija o que não for verdade.", "Acrescente fotos reais que sejam suas.", "Acrescente regras de reembolso e de cancelamento claras."],
          words: [["Página de produto", "a página que descreve o que vende e deixa as pessoas comprarem."], ["Regras de reembolso", "as suas regras para devolver o dinheiro."]],
          slides: [
            { title: "Responda às perguntas dos compradores", bullets: ["O que é? Para quem é?", "O que recebo?", "Quanto custa, quando e como?"] },
            { title: "A IA faz o rascunho, você verifica", bullets: ["Menos de 200 palavras", "Todos os dados verdadeiros", "As suas próprias fotos"] },
            { title: "Evite", bullets: ["Resultados garantidos", "Afirmações sobre saúde", "Falta de regras de reembolso"] }
          ],
          tryIt: "Use a IA para fazer o rascunho da sua página de produto, depois corrija-a para que todos os dados sejam verdadeiros e acrescente as regras de reembolso.",
          youCanNow: "escrever uma página de produto clara e honesta com a ajuda da IA.",
          quickCheck: [
            { objective: "O4", q: "Que dado deve estar na página de produto de um campo de treino?", options: ["A morada da sua casa", "O que levar", "As suas notas da escola", "Os preços de outros treinadores"], answer: 1, why: "Os compradores precisam das datas, idades, local, o que as crianças aprendem, o que levar e o reembolso." },
            { objective: "O4", q: "O rascunho da IA diz que as suas aulas \"garantem uma bolsa de estudo\". O que faz?", options: ["Deixa ficar para vender mais", "Muda para \"quase garantem\"", "Tira; não prometa resultados", "Acrescenta mais promessas"], answer: 2, why: "Não prometa resultados nem faça afirmações que não pode cumprir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Definir o preço a partir dos custos reais",
          minutes: 5,
          goal: "Definir um preço que cubra os seus custos e deixe lucro.",
          text: [
            "O preço começa pelo custo. Para artigos físicos: o custo do artigo, a impressão, o envio, as taxas da plataforma e as taxas de pagamento. Para aulas: o aluguer do espaço, o equipamento, as deslocações, o seu tempo e as taxas.",
            "Some o custo de uma venda e depois veja quanto custam produtos ou aulas parecidos na sua zona. Escolha um preço acima do seu custo que o seu público consiga pagar. A diferença é o seu lucro, antes dos impostos.",
            "Use uma folha de cálculo: colunas para cada custo, um total, o seu preço e o lucro. Um assistente de IA pode preparar as fórmulas, mas verifique as contas com uma calculadora."
          ],
          steps: ["Faça uma lista de todos os custos de uma venda.", "Some-os.", "Veja quanto custam ofertas parecidas perto de você.", "Defina um preço acima do custo que sirva para o seu público.", "Verifique as contas numa folha de cálculo."],
          words: [["Custo", "o dinheiro que gasta para fazer ou entregar uma venda."], ["Lucro", "o preço menos todos os custos, antes dos impostos."]],
          slides: [
            { title: "Faça a lista de todos os custos", bullets: ["Artigo, impressão, envio", "Taxas da plataforma e de pagamento", "Espaço, equipamento, deslocações, tempo"] },
            { title: "Defina um preço", bullets: ["Acima do custo total", "Compare com ofertas parecidas perto de você", "O que o seu público consegue pagar"] },
            { title: "Folha de cálculo", bullets: ["Custos, total, preço, lucro", "A IA prepara as fórmulas; você verifica"] }
          ],
          tryIt: "Faça uma folha de preços para uma venda do seu produto. Peça à IA para escrever as fórmulas do total e do lucro e depois verifique-as com uma calculadora.",
          youCanNow: "definir um preço a partir dos custos reais e saber o seu lucro por venda.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um custo de uma aula particular?", options: ["O aluguer do espaço", "O seu número de seguidores", "A deslocação do comprador", "O número da sua camisola"], answer: 0, why: "Os custos de uma aula incluem o espaço, o equipamento, as deslocações, o seu tempo e as taxas." },
            { objective: "O5", q: "A sua camisola custa 14 para fazer, enviar e vender. Camisolas parecidas na sua zona vendem-se entre 12 e 25. Que preço faz sentido?", options: ["10, para ser a mais barata", "14, igual ao custo", "12, o preço mais baixo da zona", "Um preço acima de 14 que o seu público consiga pagar, como 20"], answer: 3, why: "Ponha o preço acima do custo total para haver lucro, dentro do que o seu público consegue pagar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lançar e manter os clientes satisfeitos",
          minutes: 5,
          goal: "Planear um lançamento pequeno e uma rotina simples de apoio ao cliente.",
          text: [
            "Comece pequeno: um lançamento discreto para a família, as famílias dos colegas de equipa e os seguidores mais próximos. Corrija os problemas antes de um grande anúncio. Depois anuncie com uma publicação, um vídeo curto e um link na sua biografia (bio).",
            "Se publica sobre os seus próprios produtos, isso é o seu negócio, mas se uma marca ou outra pessoa lhe der alguma coisa para a promover, diga-o de forma clara. Atletas universitários: declarem os acordos a tempo, se for obrigatório.",
            "Um bom apoio ao cliente faz as pessoas voltarem a comprar: responda às mensagens no prazo de um dia, envie as encomendas ou confirme as marcações a tempo, cumpra as suas regras de reembolso e agradeça. Peça à IA para escrever modelos de resposta educados para as perguntas mais comuns."
          ],
          steps: ["Faça um lançamento discreto para um grupo pequeno.", "Corrija os problemas.", "Anuncie com uma publicação, um vídeo e um link na bio.", "Responda às mensagens no prazo de um dia.", "Use a IA para escrever modelos de resposta."],
          words: [["Lançamento discreto (soft launch)", "um primeiro lançamento pequeno e calmo para encontrar problemas."], ["Apoio ao cliente", "a forma como ajuda os compradores antes e depois de pagarem."]],
          slides: [
            { title: "Comece pequeno", bullets: ["Lançamento discreto para pessoas que conhece", "Corrija os problemas primeiro"] },
            { title: "Depois anuncie", bullets: ["Publicação, vídeo curto, link na bio", "Diga se tem ligações a alguma marca"] },
            { title: "Mantenha os clientes satisfeitos", bullets: ["Responda no prazo de um dia", "Cumpra os prazos e as suas regras de reembolso", "Modelos de resposta feitos com IA"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de lançamento de uma página: a oferta e o público, a plataforma e as taxas atuais, a página de produto feita com IA, o preço a partir dos custos reais, e a lista de verificação das regras com o nome de quem consultou.",
          youCanNow: "lançar uma pequena oferta na internet e dar um bom apoio ao cliente.",
          quickCheck: [
            { objective: "O6", q: "Para quem é um lançamento discreto?", options: ["Para toda a gente na internet", "Para a família, as famílias dos colegas de equipa e os seguidores mais próximos", "Só para grandes marcas", "Para os seus concorrentes"], answer: 1, why: "Comece pequeno e corrija os problemas antes do grande anúncio." },
            { objective: "O6", q: "Um cliente pede um reembolso que está de acordo com as suas regras de reembolso. O que faz?", options: ["Ignora a mensagem", "Discute nos comentários", "Cumpre as suas regras, devolve o dinheiro com educação e agradece", "Bloqueia o cliente"], answer: 2, why: "Cumprir as suas regras de reembolso e responder com educação faz os clientes voltarem a comprar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir e lançar a sua oferta",
        questions: [
          { objective: "O4", q: "A página de produto de um campo de treino deve incluir:", options: ["Só um logótipo", "A morada da sua casa", "Bolsas de estudo garantidas", "Datas, idades, local, o que as crianças aprendem e as regras de reembolso"], answer: 3, why: "Responde ao que os compradores precisam de saber." },
          { objective: "O4", q: "A IA escreve \"entrada garantida na equipa principal\" na sua página. Você:", options: ["Tira", "Deixa ficar", "Põe em letras maiores", "Acrescenta mais promessas"], answer: 0, why: "Não prometa resultados que não pode garantir." },
          { objective: "O5", q: "O lucro é:", options: ["Só o preço", "O número de seguidores", "O preço menos todos os custos", "O total das vendas sem contar os custos"], answer: 2, why: "O lucro é o que sobra depois dos custos." },
          { objective: "O6", q: "Porque fazer um lançamento discreto?", options: ["Para esconder a sua loja", "Para subir os preços", "Porque a lei obriga", "Para encontrar problemas antes de um grande anúncio"], answer: 3, why: "Os lançamentos pequenos mostram os problemas com segurança." },
          { objective: "O6", q: "Em quanto tempo deve responder às mensagens dos clientes?", options: ["No prazo de um mês", "No prazo de um dia", "Nunca", "Só se se queixarem duas vezes"], answer: 1, why: "Respostas rápidas criam confiança e fazem os clientes voltarem." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Plataformas de Comércio Eletrónico com IA para Atletas",
    questions: [
      { objective: "O1", q: "Comércio eletrónico quer dizer:", options: ["Desporto elétrico", "Só email", "Comprar e vender pela internet", "Um autocarro da equipa"], answer: 2, why: "É vender pela internet." },
      { objective: "O1", q: "Qual destes é um produto digital?", options: ["Um plano de treino", "Um boné", "Um campo de treino", "Um cartaz"], answer: 0, why: "É vendido como ficheiro ou como acesso pela internet." },
      { objective: "O1", q: "Uma boa forma de escolher o seu primeiro produto é:", options: ["O que o seu público já lhe pergunta", "O que está na moda", "A ideia mais cara", "Uma coisa que você não conhece"], answer: 0, why: "Quando há procura, vender é mais fácil." },
      { objective: "O1", q: "Os serviços pagam o seu:", options: ["Envio", "Impressão", "Tempo", "Autocolantes"], answer: 2, why: "As aulas e os campos de treino precisam do seu tempo." },
      { objective: "O2", q: "Qual destes é um criador de lojas?", options: ["Um cronómetro", "Shopify", "Um marcador de resultados", "Uma camisola de equipa"], answer: 1, why: "O Shopify é um criador de lojas." },
      { objective: "O2", q: "Que taxa uma plataforma pode cobrar?", options: ["Uma taxa de camisola", "Uma taxa de árbitro", "Uma taxa de desconto de tempo", "Uma taxa de processamento de pagamentos"], answer: 3, why: "As taxas de pagamento são comuns." },
      { objective: "O2", q: "Se tiver menos de 18 anos, uma conta de loja pode precisar de:", options: ["Nada", "Uma idade falsa", "Um adulto que seja dono ou co-titular", "O documento de identificação de um colega"], answer: 2, why: "Muitas plataformas exigem um adulto." },
      { objective: "O3", q: "Vender artigos com o seu nome pode contar como:", options: ["Pagamento para jogar", "Uma bolsa de estudo", "Nada", "Atividade de NIL"], answer: 3, why: "Usa o seu nome, imagem ou semelhança." },
      { objective: "O3", q: "A quem deve um atleta universitário perguntar as regras de NIL para vender?", options: ["Ao gabinete de conformidade", "A um fã qualquer", "A um rival", "A ninguém"], answer: 0, why: "Eles conhecem as regras atuais da escola e da NCAA." },
      { objective: "O3", q: "Pode pôr um logótipo da NFL (a liga profissional de futebol americano) nos seus artigos?", options: ["Sim, sempre", "Não, sem uma licença não", "Só em vermelho", "Só na internet"], answer: 1, why: "Os logótipos das ligas são protegidos." },
      { objective: "O3", q: "Uma marca registada é:", options: ["Um tipo de sapato", "Uma bebida desportiva", "Um nome, logótipo ou slogan protegido", "Um plano de treino"], answer: 2, why: "As marcas registadas identificam negócios." },
      { objective: "O3", q: "O IRS diz que tem de entregar a declaração se o lucro líquido do trabalho por conta própria for de:", options: ["$400 ou mais", "$1 milhão ou mais", "Nunca", "Só se tiver mais de 30 anos"], answer: 0, why: "É o limite que o IRS indica na sua página para trabalhadores por conta própria." },
      { objective: "O4", q: "Uma página de produto deve responder a:", options: ["Só o preço", "As suas notas da escola", "A sua palavra-passe", "O quê, para quem, o que se recebe, preço, quando e como"], answer: 3, why: "Os compradores precisam dessas respostas." },
      { objective: "O4", q: "As fotos dos produtos devem ser:", options: ["Copiadas de outras lojas", "Fotos reais que são suas", "Falsas", "De outros atletas"], answer: 1, why: "Use fotos sobre as quais tem direitos." },
      { objective: "O4", q: "Porque ter regras de reembolso?", options: ["Para ficar sempre com todo o dinheiro", "Para evitar discussões mais tarde", "É só decoração", "Não é preciso"], answer: 1, why: "Regras claras protegem você e os compradores." },
      { objective: "O5", q: "O preço deve ficar:", options: ["Abaixo do seu custo", "Ao acaso", "Sempre grátis", "Acima do seu custo total"], answer: 3, why: "Senão perde dinheiro em cada venda." },
      { objective: "O5", q: "A IA prepara a sua fórmula do lucro. Você deve:", options: ["Verificar as contas com uma calculadora", "Confiar totalmente", "Apagá-la", "Duplicar o seu preço"], answer: 0, why: "A IA pode errar nas contas." },
      { objective: "O6", q: "Um lançamento discreto é para:", options: ["Toda a gente ao mesmo tempo", "Só os rivais", "A família, os seguidores próximos e as pessoas que conhece", "Ninguém"], answer: 2, why: "Um grupo pequeno ajuda-o a corrigir os problemas." },
      { objective: "O6", q: "Onde deve pôr o link da sua loja?", options: ["Escondido em lado nenhum", "Na página de um rival", "Em mensagens de spam", "Na sua bio"], answer: 3, why: "Os links na bio são fáceis de encontrar." },
      { objective: "O6", q: "A IA pode ajudar no apoio ao cliente:", options: ["Ficando com o dinheiro dos clientes", "Escrevendo modelos de resposta educados", "Ignorando mensagens", "Mudando as regras de reembolso às escondidas"], answer: 1, why: "Os modelos tornam as respostas rápidas e educadas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [2, 5, 7, 9, 12, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Oferta e público",
        objective: "O1",
        notYet: "O produto ou o seu público não estão claros.",
        meets: "Um produto ou serviço, para quem é, e o tempo e o dinheiro de que precisa.",
        exceeds: "Mostra provas de que o público o pediu, como comentários ou pedidos dos pais."
      },
      {
        name: "Plataforma e taxas",
        objective: "O2",
        notYet: "Não tem taxas, ou as taxas foram adivinhadas em vez de tiradas da página de preços.",
        meets: "A plataforma escolhida com as suas taxas atuais mensais, por venda e de pagamento, tiradas da página de preços, e as regras de idade verificadas.",
        exceeds: "Compara duas plataformas e mostra o custo total para o número de vendas esperado."
      },
      {
        name: "Página de produto",
        objective: "O4",
        notYet: "Faltam dados importantes, tem afirmações falsas ou não tem regras de reembolso.",
        meets: "Menos de 200 palavras, responde a o quê, para quem, o que se recebe, preço, quando e como, com fotos reais e regras de reembolso claras.",
        exceeds: "Inclui dados de segurança para ofertas para jovens e respostas às perguntas mais comuns."
      },
      {
        name: "Preço a partir dos custos",
        objective: "O5",
        notYet: "O preço está abaixo do custo ou faltam custos.",
        meets: "Todos os custos de uma venda em lista, somados, e um preço acima do custo, com as contas verificadas.",
        exceeds: "Mostra o lucro por venda e quantas vendas cobrem os custos adiantados."
      },
      {
        name: "Lista de verificação das regras",
        objective: "O3",
        notYet: "Faltam pontos sobre NIL, logótipos, marcas registadas ou impostos, ou não diz o nome de ninguém.",
        meets: "NIL, logótipos da escola, marcas registadas e impostos verificados um a um, com o nome de quem o atleta consultou.",
        exceeds: "Inclui uma autorização escrita para o logótipo ou o resultado de uma pesquisa no USPTO, e um registo das vendas e dos custos já preparado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o plano de lançamento e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que lançam o seu produto ou serviço em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter feito as primeiras vendas ou marcações e ter lucro depois dos custos",
      "Alunos que dizem ter verificado as regras de NIL, logótipos e impostos com a escola, a associação do estado ou um profissional antes de vender"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Uma folha de cálculo gratuita (Google Sheets) e uma calculadora",
      "As páginas de preços oficiais de duas plataformas",
      "As regras de NIL da sua escola ou as regras da associação do seu estado",
      "Cerca de 60 minutos"
    ],
    facilitatorNotes: [
      "Convide o gabinete de conformidade ou o diretor desportivo para explicar as regras de NIL e dos logótipos antes de alguém desenhar artigos.",
      "Para atletas com menos de 18 anos, envolva um pai, mãe ou tutor na escolha e na titularidade das contas da loja e de pagamento.",
      "Peça aos alunos para lerem as taxas nas páginas de preços ao vivo durante a sessão; não confie em números de memória nem da IA.",
      "Para campos de treino e aulas com menores, fale sobre segurança, supervisão e autorização para usar o espaço antes do lançamento.",
      "Encaminhe os alunos para um profissional de impostos para perguntas sobre rendimentos; não dê aconselhamento fiscal individual."
    ]
  }
};
