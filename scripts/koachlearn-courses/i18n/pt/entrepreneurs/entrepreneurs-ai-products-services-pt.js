"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-products-services.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-products-services-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-products-services",
  category: "Entrepreneurs",
  name: "Criar Produtos e Serviços com IA",
  skills: "Encontrar um problema que vale a pena resolver, Desenhar um serviço com ajuda da IA, Escrever um pedido de instruções reutilizável, Testar com clientes reais, Definir o preço e descrevê-lo com honestidade",
  outcome: "desenhar um pequeno produto ou serviço com ajuda da IA para um problema real de clientes, criar uma versão simples que funciona com uma ferramenta de IA gratuita e um pedido de instruções reutilizável, testá-lo com três pessoas, e descrevê-lo e definir o seu preço com honestidade.",
  about: [
    "Hoje, muitos negócios novos usam IA para prestar um serviço mais depressa ou mais barato: ajuda com currículos, pacotes de redes sociais para lojas locais, tradução de menus, organização de contas, planos de refeições, planos de aulas e muito mais. Este curso mostra como criar um da maneira certa.",
    "Você vai começar por um problema real de clientes, decidir onde a IA ajuda e onde uma pessoa verifica, criar uma versão simples com um assistente de IA gratuito e um pedido de instruções reutilizável, testá-la com pessoas reais, e depois definir o preço e descrevê-la sem prometer demais.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Não é preciso saber programar."
  ],
  finalTask: "Faça uma ficha de produto de uma página para o seu serviço com ajuda da IA: o problema do cliente, o que o cliente recebe, os passos (marcando quais são feitos pela IA e quais são verificações humanas), o seu pedido de instruções reutilizável, os resultados dos testes com três pessoas, o seu preço e como o calculou, e uma descrição honesta sem afirmações que não consegue provar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios, novos ou já estabelecidos, que querem oferecer um serviço que usa IA para trabalhar mais depressa ou mais barato, como ajuda com currículos, pacotes de redes sociais, tradução de menus ou planos de aulas.",
    startingPoint: "Usam um assistente de IA para os seus próprios textos. A maioria nunca desenhou um serviço à volta da IA, nunca escreveu um pedido de instruções reutilizável, nunca testou com clientes reais nem definiu o preço de um trabalho feito com ajuda da IA.",
    gap: "Muitos serviços de IA começam pela ferramenta em vez de um problema real, saltam as verificações humanas, têm um preço que não conta o tempo de verificação e prometem demais sobre o que a IA faz. Os donos precisam de criar um serviço pequeno, testado e descrito com honestidade, para que os clientes paguem por ele, tenham bons resultados e confiem nele.",
    constraints: [
      "Não é preciso programar; palavras simples do princípio ao fim",
      "Aparelhos: um computador com um assistente de IA gratuito e uma folha de cálculo",
      "Tempo: cerca de cinco minutos por lição, mais o tempo de teste com pessoas reais",
      "As afirmações sobre o produto têm de ser verdadeiras e ter provas (FTC); as questões de impostos vão para fontes oficiais ou um contabilista",
      "Os dados privados de quem testa e dos clientes ficam fora da IA sempre que possível"
    ],
    prerequisites: "\"Introdução à IA para Empreendedores\", ou uso regular de um assistente de IA para textos do negócio."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com cinco problemas de clientes que podia resolver", action: "escolher um problema real, frequente e que causa dificuldade, para um serviço com ajuda da IA", standard: "depois de perguntar a pelo menos uma pessoa real como o resolve hoje" },
    { id: "O2", condition: "Com o problema que escolheu", action: "desenhar o serviço como passos numerados, marcados como IA, pessoa ou ferramenta, com o que entra e o que se entrega", standard: "com uma verificação humana antes de entregar qualquer coisa" },
    { id: "O3", condition: "Usando um assistente de IA gratuito", action: "escrever um pedido de instruções reutilizável com papel, regras, formato da resposta e espaços", standard: "que dê resultados iguais para dois clientes de faz de conta" },
    { id: "O4", condition: "Com até três pessoas reais", action: "fazer o seu serviço, medir o tempo de cada passo e anotar a opinião delas com as palavras delas", standard: "escrevendo pelo menos uma mudança e testando outra vez" },
    { id: "O5", condition: "Com os seus custos e a opinião de quem testou", action: "calcular o preço de um pacote numa folha de cálculo", standard: "cobrindo todos os custos, incluindo o tempo de verificação, e deixando lucro" },
    { id: "O6", condition: "Para o seu serviço já pronto", action: "escrever uma descrição do produto que diga com honestidade o que a IA faz e o que uma pessoa verifica", standard: "sem afirmações que não consegue provar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Desenhar o produto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Começar por um problema, não pela IA",
          minutes: 5,
          goal: "Escolher um problema real de clientes que um serviço com ajuda da IA pode resolver.",
          text: [
            "O erro mais comum é começar com \"Quero vender alguma coisa com IA\". Comece antes por um problema que as pessoas já pagam para resolver, ou de que se queixam muitas vezes: \"Os pequenos restaurantes não têm tempo para publicar nas redes sociais.\" \"Quem procura emprego não sabe descrever as suas habilidades.\"",
            "Os bons problemas são frequentes, causam dificuldade e são concretos. Pergunte: Quem tem este problema? Como o resolve agora? Quanto lhe custa em dinheiro ou tempo? Pagaria para eu o resolver mais depressa ou melhor?",
            "A IA pode ajudá-lo a ter ideias e a organizá-las, mas fale com pelo menos três pessoas reais que têm o problema antes de criar qualquer coisa."
          ],
          steps: ["Faça uma lista de cinco problemas que viu pessoas ou negócios a ter.", "Peça à IA para ajudar a avaliar cada um: com que frequência acontece, quanta dificuldade causa, como o resolvem agora.", "Escolha o melhor.", "Fale com três pessoas que têm esse problema e pergunte como lidam com ele hoje."],
          words: [["Problema que vale a pena resolver", "um problema frequente, difícil e concreto em que as pessoas já gastam dinheiro ou tempo."]],
          slides: [
            { title: "Comece por um problema", bullets: ["Não \"Quero vender IA\"", "Um problema que as pessoas pagam para resolver ou de que se queixam"] },
            { title: "Os bons problemas são", bullets: ["Frequentes", "Difíceis para quem os tem", "Concretos"] },
            { title: "Faça quatro perguntas", bullets: ["Quem o tem?", "Como o resolve agora?", "Quanto lhe custa?", "Pagaria a você?"] },
            { title: "Fale com pessoas reais", bullets: ["Pelo menos três, antes de criar"] }
          ],
          tryIt: "Faça uma lista de cinco problemas, use a IA para ajudar a avaliá-los, escolha um e pergunte a pelo menos uma pessoa real que tem esse problema como lida com ele hoje.",
          youCanNow: "escolher um problema real de clientes para criar à volta dele um serviço com ajuda da IA.",
          quickCheck: [
            { objective: "O1", q: "O que faz um problema de clientes valer a pena para criar um serviço?", options: ["É frequente, causa dificuldade e é concreto", "É algo em que a IA é famosa", "Só você o tem", "Acontece uma vez em cada dez anos"], answer: 0, why: "Problemas frequentes, difíceis e concretos são os que as pessoas pagam para resolver." },
            { objective: "O1", q: "Tem uma ótima ideia, mas ainda não falou com ninguém que tem o problema. O que faz a seguir?", options: ["Começa logo a criar", "Pergunta a pessoas reais como o resolvem hoje", "Define um preço", "Compra anúncios"], answer: 1, why: "Falar primeiro com pessoas reais mostra se o problema é real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Decidir onde a IA ajuda e onde você verifica",
          minutes: 5,
          goal: "Desenhar o seu serviço como passos, marcando quais são da IA e quais são de uma pessoa.",
          text: [
            "Um serviço com ajuda da IA é um conjunto de passos. Exemplo, um pacote de redes sociais para um restaurante: 1) receber do dono as fotos e os pratos especiais da semana (pessoa), 2) escrever o rascunho das legendas (IA), 3) verificar os dados, os preços e o tom (pessoa), 4) fazer as imagens no Canva (com ajuda da IA), 5) enviar para aprovação (pessoa), 6) agendar as publicações (ferramenta).",
            "Ponha uma pessoa em cada passo em que um erro pode prejudicar o cliente: dados, preços, saúde, questões legais ou de dinheiro, e tudo o que é publicado em nome do cliente. Esta \"pessoa no circuito\" é aquilo por que os clientes pagam: a rapidez vem da IA, o bom juízo vem de você.",
            "Escreva o que entra no início (o que precisa do cliente) e o que sai no fim (exatamente o que ele recebe)."
          ],
          steps: ["Escreva o que precisa do cliente no início.", "Faça a lista de todos os passos para prestar o serviço.", "Marque cada passo: IA, pessoa ou ferramenta.", "Acrescente uma verificação humana antes de qualquer coisa ir para o cliente.", "Escreva exatamente o que o cliente recebe no fim."],
          words: [["Pessoa no circuito", "uma pessoa verifica ou aprova o trabalho da IA antes de ele ser usado (em inglês, \"human in the loop\")."], ["Entrega", "a coisa pronta que o cliente recebe."]],
          slides: [
            { title: "Um serviço é um conjunto de passos", bullets: ["O que entra, vindo do cliente", "Passos da IA, passos de pessoas, passos de ferramentas", "A entrega no fim"] },
            { title: "Exemplo: publicações de um restaurante", bullets: ["O dono envia fotos e pratos especiais", "A IA escreve as legendas; você verifica os dados", "Imagens no Canva; o dono aprova"] },
            { title: "Pessoa no circuito", bullets: ["Verifique dados, preços, saúde, questões legais e de dinheiro", "Verifique tudo o que sai em nome do cliente", "A IA dá rapidez, você dá o bom juízo"] }
          ],
          tryIt: "Desenhe o seu serviço como passos numerados. Marque cada um como IA, pessoa ou ferramenta, e acrescente uma verificação humana antes da entrega. Escreva o que entra e o que se entrega.",
          youCanNow: "desenhar um serviço com ajuda da IA com verificações humanas claras.",
          quickCheck: [
            { objective: "O2", q: "O que é uma entrega?", options: ["A ferramenta de IA que usa", "O preço", "A coisa pronta que o cliente recebe", "O seu pedido de instruções"], answer: 2, why: "A entrega é o que o cliente recebe no fim." },
            { objective: "O2", q: "O desenho do seu serviço envia os preços do menu escritos pela IA diretamente ao cliente. O que acrescenta?", options: ["Nada", "Uma segunda IA para verificar a primeira", "Uma ferramenta mais rápida", "Uma verificação humana antes da entrega"], answer: 3, why: "Uma pessoa verifica os dados e os preços antes de qualquer coisa sair." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever um pedido de instruções reutilizável",
          minutes: 6,
          goal: "Escrever um pedido de instruções que pode usar outra vez com todos os clientes.",
          text: [
            "Para entregar a mesma qualidade todas as vezes, escreva um pedido de instruções detalhado e use-o sempre. Deve ter: o papel (\"Está a ajudar-me a escrever publicações para pequenos restaurantes\"), as regras (tom, tamanho, o que nunca fazer), o formato da resposta e um espaço para os dados de cada cliente.",
            "Exemplos de regras: \"Nunca invente preços nem pratos do menu. Use só os pratos especiais que eu lhe der. Marque com [VERIFICAR] tudo aquilo de que não tem a certeza.\" Regras como estas tornam os erros da IA mais fáceis de apanhar.",
            "Muitos assistentes deixam guardar instruções personalizadas ou criar um assistente guardado com as suas instruções; procure nas definições ou nas páginas de ajuda da ferramenta. Se o seu não deixar, guarde o pedido num documento e cole-o de cada vez."
          ],
          steps: ["Escreva o papel.", "Escreva as regras, incluindo o que a IA nunca deve fazer.", "Descreva o formato da resposta.", "Acrescente [espaços] para os dados de cada cliente.", "Teste-o com dois clientes de faz de conta e aperte as regras."],
          words: [["Pedido de instruções", "um pedido detalhado e reutilizável que define o papel, as regras e o formato da resposta da IA."], ["Espaço", "um lugar marcado no pedido onde cola os dados de cada cliente."]],
          slides: [
            { title: "Um pedido, a mesma qualidade", bullets: ["Papel", "Regras", "Formato da resposta", "[Espaços] para os dados do cliente"] },
            { title: "Regras que apanham erros", bullets: ["\"Nunca invente preços nem pratos do menu.\"", "\"Use só os dados que eu lhe der.\"", "\"Marque com [VERIFICAR] o que for incerto.\""] },
            { title: "Guarde-o", bullets: ["Alguns assistentes guardam instruções personalizadas", "Ou guarde-o num documento e cole-o"] }
          ],
          tryIt: "Escreva o seu pedido de instruções com papel, regras, formato e espaços. Use-o com os dados de dois clientes de faz de conta e melhore as regras onde a resposta saiu mal.",
          youCanNow: "escrever um pedido de instruções reutilizável que dá resultados iguais para cada cliente.",
          quickCheck: [
            { objective: "O3", q: "O que é um espaço num pedido de instruções?", options: ["Um lugar vazio que preenche com os dados de cada cliente", "Uma regra sobre o tom", "Um plano de pagamento", "O nome da IA"], answer: 0, why: "Os espaços deixam usar o mesmo pedido com todos os clientes." },
            { objective: "O3", q: "O seu pedido está sempre a inventar horários de funcionamento. O que muda?", options: ["Nada; corrige à mão de cada vez", "Acrescenta uma regra: nunca inventar horários; marcar o que não se sabe com [VERIFICAR]", "Usa um papel mais longo", "Tira a parte do formato"], answer: 1, why: "Regras claras impedem que a IA repita os mesmos erros." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Desenhar o produto",
        questions: [
          { objective: "O1", q: "Qual é o melhor ponto de partida para um serviço com IA?", options: ["A ferramenta de IA mais recente", "Um problema real que as pessoas já pagam para resolver", "Um nome bonito", "Um logótipo"], answer: 1, why: "Os produtos que resolvem problemas reais e difíceis vendem." },
          { objective: "O1", q: "Com quantas pessoas reais deve falar antes de criar?", options: ["Só com a IA", "Com nenhuma", "Só consigo mesmo", "Pelo menos três"], answer: 3, why: "Conversas reais confirmam que o problema é real." },
          { objective: "O2", q: "Onde deve uma pessoa verificar o trabalho da IA?", options: ["Antes de sair qualquer coisa com dados, preços ou o nome do cliente", "Em lado nenhum", "Só bem no início", "Só se o cliente se queixar"], answer: 0, why: "As verificações humanas apanham os erros antes de prejudicarem o cliente." },
          { objective: "O3", q: "Que regra faz parte de um pedido de instruções para publicações de restaurantes?", options: ["\"Use os preços que quiser.\"", "\"Invente pratos especiais se for preciso.\"", "\"Nunca invente preços nem pratos do menu.\"", "\"Ignore os dados do dono.\""], answer: 2, why: "Regras que impedem dados inventados reduzem os erros." },
          { objective: "O2", q: "O que é uma entrega?", options: ["Um modelo de IA", "Um camião de entregas", "A coisa pronta que o cliente recebe", "Um formulário de impostos"], answer: 2, why: "É exatamente o que o cliente recebe no fim." }
        ]
      }
    },
    {
      name: "Capítulo 2: Testar, definir o preço e lançar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Testar com três pessoas reais",
          minutes: 5,
          goal: "Fazer o seu serviço para três pessoas e aprender o que corrigir.",
          text: [
            "Antes de vender a muita gente, faça o serviço completo para três pessoas reais, de graça ou a um preço de teste. Repare: onde a IA errou, onde você gastou mais tempo, e o que o cliente gostou ou não percebeu.",
            "Faça três perguntas a cada pessoa que testa: \"O que foi mais útil?\" \"O que foi confuso ou estava errado?\" \"Pagaria por isto, e quanto?\" Anote as palavras exatas delas.",
            "Meça o tempo de cada passo. Se as verificações humanas demorarem mais do que fazer o trabalho à mão, mude o pedido de instruções ou os passos. Corrija os maiores problemas e depois teste outra vez."
          ],
          steps: ["Encontre três pessoas que têm o problema.", "Faça o serviço completo para cada uma.", "Meça o tempo de cada passo e anote cada erro da IA.", "Faça as três perguntas e anote as respostas.", "Corrija os maiores problemas e atualize o seu pedido."],
          words: [["Pessoa que testa", "uma pessoa real que experimenta o seu produto cedo e dá uma opinião honesta."], ["Opinião (feedback)", "o que as pessoas lhe dizem sobre o que funcionou e o que não funcionou."]],
          slides: [
            { title: "Teste antes de vender", bullets: ["Três pessoas reais", "De graça ou a um preço de teste", "Faça o serviço completo"] },
            { title: "Repare em", bullets: ["Erros da IA", "Passos que demoram mais tempo", "O que os clientes gostaram ou não perceberam"] },
            { title: "Faça três perguntas", bullets: ["O que foi mais útil?", "O que foi confuso ou estava errado?", "Pagaria, e quanto?"] }
          ],
          tryIt: "Faça o seu serviço para pelo menos uma pessoa real (três, se puder). Meça o tempo de cada passo, anote os erros da IA, faça as três perguntas e escreva uma mudança que vai fazer.",
          youCanNow: "testar um serviço com ajuda da IA com pessoas reais e melhorá-lo a partir da opinião delas.",
          quickCheck: [
            { objective: "O4", q: "O que deve anotar quando as pessoas que testam dão a sua opinião?", options: ["Só os comentários simpáticos", "O seu próprio resumo", "As palavras exatas delas", "Nada; basta lembrar-se"], answer: 2, why: "As palavras exatas mostram o que os clientes valorizam de verdade e o que os preocupa." },
            { objective: "O4", q: "Duas pessoas que testaram dizem que o resultado demorou demasiado. O que faz?", options: ["Ignora-as", "Sobe o preço", "Para o serviço", "Encontra o passo lento, muda-o e testa outra vez"], answer: 3, why: "Testar serve para encontrar e corrigir problemas, e depois testar outra vez." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Definir o preço do seu serviço com ajuda da IA",
          minutes: 5,
          goal: "Definir um preço que cobre os seus custos e o seu tempo e que está de acordo com o que os clientes pagam.",
          text: [
            "Some os seus custos por cliente: o seu tempo (incluindo verificar o trabalho da IA), as assinaturas de ferramentas divididas entre os clientes, e outros custos. Depois compare com o que os clientes pagam agora por outras formas de resolver o problema, e com o que as pessoas que testaram disseram que pagariam.",
            "Não defina o preço só pela rapidez que a IA lhe dá. Os clientes pagam pelo resultado e pelo seu bom juízo, não pelos seus minutos. Um pacote (\"12 publicações por mês\") é muitas vezes mais fácil de vender do que um preço por hora.",
            "Peça à IA ajuda com as contas e com ideias de pacotes, mas verifique você mesmo cada número numa folha de cálculo. Para impostos e registo do negócio, veja fontes oficiais como irs.gov e o serviço de negócios do seu estado, ou um contabilista."
          ],
          steps: ["Faça a lista dos seus custos por cliente, incluindo o tempo de verificação.", "Descubra quanto os clientes pagam agora por outras soluções.", "Anote quanto as pessoas que testaram disseram que pagariam.", "Escolha um pacote e um preço, e verifique as contas você mesmo.", "Confirme que o preço cobre os seus custos e ainda sobra alguma coisa."],
          words: [["Pacote", "um conjunto fixo de trabalho por um preço fixo, como 12 publicações por mês."], ["Lucro", "o que sobra depois de pagar todos os seus custos."]],
          slides: [
            { title: "Some os seus custos", bullets: ["O seu tempo, incluindo verificar o trabalho da IA", "Assinaturas de ferramentas divididas entre os clientes", "Outros custos"] },
            { title: "Olhe para o mercado", bullets: ["Quanto os clientes pagam por outras soluções", "Quanto as pessoas que testaram disseram que pagariam"] },
            { title: "Ponha preço no resultado", bullets: ["Os clientes pagam pelo resultado e pelo bom juízo", "Os pacotes são mais fáceis de vender", "Verifique as contas você mesmo"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center (centro de impostos para trabalhadores por conta própria, EUA)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Calcule o seu custo por cliente numa folha de cálculo, compare com o que as pessoas que testaram disseram, e defina um preço de pacote que deixe lucro.",
          youCanNow: "definir um preço para um serviço com ajuda da IA que cobre os seus custos e está de acordo com o mercado.",
          quickCheck: [
            { objective: "O5", q: "O que é o lucro?", options: ["O que sobra depois de pagar todos os custos", "O total que os clientes pagam", "O custo da ferramenta de IA", "O tempo que poupa"], answer: 0, why: "O lucro é o dinheiro que sobra depois de cobrir todos os custos." },
            { objective: "O5", q: "O seu preço cobre a ferramenta de IA, mas não a hora que gasta a verificar. O que faz?", options: ["Mantém o preço", "Junta o tempo de verificação ao custo e define o preço de novo", "Deixa de verificar", "Cobra mais só aos clientes novos"], answer: 1, why: "O tempo de verificação é um custo real que o preço tem de cobrir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Descrever o serviço com honestidade",
          minutes: 5,
          goal: "Escrever uma descrição do produto que diz a verdade sobre o que a IA faz.",
          text: [
            "Os clientes confiam mais em você quando é claro sobre como o serviço funciona: \"Usamos IA para fazer o rascunho, e uma pessoa verifica cada publicação antes de sair.\" Não finja que a IA faz mais do que faz, nem que uma pessoa faz o trabalho quando é a IA que o faz.",
            "A FTC (a agência dos EUA que protege os consumidores) aplica as regras de publicidade verdadeira contra afirmações enganosas sobre IA. Em 2026, finalizou ordens contra empresas que diziam que um serviço de marketing com IA ouvia as conversas das pessoas através de aparelhos inteligentes, quando isso não era verdade. As afirmações sobre o que a sua IA faz, quão certa é ou os resultados que os clientes vão ter têm de ser verdadeiras e ter provas.",
            "Evite \"garantido\", \"100% certo\" e \"substitui um advogado, médico ou contabilista\". Fale com um advogado se não tiver a certeza de que uma afirmação é permitida."
          ],
          steps: ["Escreva com palavras simples o que o cliente recebe.", "Diga com honestidade onde usa IA e onde uma pessoa verifica.", "Tire qualquer afirmação que não consegue provar.", "Peça à IA para rever: \"Mostre-me qualquer afirmação que possa ser enganosa.\"", "Pergunte a um advogado se tiver dúvidas."],
          words: [["Afirmação enganosa", "uma frase que dá às pessoas uma ideia falsa, mesmo que cada palavra seja tecnicamente verdade."], ["Provas", "testes, resultados ou registos que mostram que uma afirmação é verdadeira."]],
          slides: [
            { title: "Seja claro sobre como funciona", bullets: ["\"A IA faz o rascunho, uma pessoa verifica cada publicação\"", "Não exagere o que a IA faz"] },
            { title: "A FTC e as afirmações sobre IA", bullets: ["As regras de publicidade verdadeira valem para a IA", "Ordens de 2026 por afirmações falsas de marketing com IA", "As afirmações precisam de provas"] },
            { title: "Evite", bullets: ["\"Garantido\" ou \"100% certo\"", "\"Substitui um advogado, médico ou contabilista\"", "Tem dúvidas? Pergunte a um advogado"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (o básico da publicidade e do marketing)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: ordens contra a Cox Media Group e outras duas empresas por afirmações de marketing com IA (2026)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }],
          tryIt: "Tarefa final: escreva a descrição honesta do seu produto e depois junte a sua ficha de produto de uma página: problema, entrega, passos (IA ou pessoa), pedido de instruções, resultados dos testes, preço e descrição.",
          youCanNow: "desenhar, testar, definir o preço e descrever com honestidade um produto ou serviço com ajuda da IA.",
          quickCheck: [
            { objective: "O6", q: "Que afirmação sobre o produto é honesta?", options: ["\"100% certo, garantido\"", "\"Totalmente automático, sem pessoas\" quando uma pessoa verifica tudo", "\"A IA faz o rascunho, e uma pessoa verifica cada item antes da entrega\"", "\"Melhor do que qualquer especialista humano\""], answer: 2, why: "Diz a verdade sobre o que a IA e as pessoas fazem." },
            { objective: "O6", q: "Não tem a certeza se uma afirmação na sua página de vendas é permitida. O que faz?", options: ["Mantém-na e vê o que acontece", "Põe-na maior", "Pede à IA para a aprovar", "Tira-a ou pergunta a um advogado"], answer: 3, why: "Na dúvida, deixe de fora ou peça conselho legal." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Testar, definir o preço e lançar",
        questions: [
          { objective: "O4", q: "Que pergunta deve fazer às pessoas que testam?", options: ["\"Pagaria por isto, e quanto?\"", "\"Qual é a palavra-passe do seu banco?\"", "\"Pode escrever-me uma avaliação em troca de um desconto?\"", "\"Gosta de IA?\""], answer: 0, why: "Mostra se há um mercado real e um preço." },
          { objective: "O4", q: "As verificações humanas demoram mais do que fazer o trabalho à mão. O que deve fazer?", options: ["Deixar de testar", "Tirar todas as verificações", "Cobrar menos", "Mudar o pedido de instruções ou os passos"], answer: 3, why: "Melhore o processo para que a IA poupe mesmo tempo." },
          { objective: "O5", q: "Ao definir o preço, que custo as pessoas esquecem muitas vezes?", options: ["A cor do logótipo", "O tempo gasto a verificar o trabalho da IA", "A renda de casa do cliente", "O lucro da empresa de IA"], answer: 1, why: "O tempo de verificação é trabalho real e tem de entrar no preço." },
          { objective: "O6", q: "Que descrição é honesta?", options: ["\"A IA faz o rascunho, e uma pessoa verifica cada publicação antes de sair.\"", "\"IA 100% certa, garantido.\"", "\"Substitui o seu contabilista.\"", "\"Feito à mão pela nossa equipa\" quando é a IA que faz"], answer: 0, why: "Diz com verdade o que a IA faz e o que uma pessoa faz." },
          { objective: "O6", q: "As regras da FTC sobre afirmações de IA dizem que as afirmações têm de ser:", options: ["Curtas", "Emocionantes", "Verdadeiras e ter provas", "Aprovadas pela ferramenta de IA"], answer: 2, why: "A publicidade verdadeira também vale para as afirmações sobre IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criar Produtos e Serviços com IA",
    questions: [
      { objective: "O1", q: "O erro mais comum ao criar um produto de IA é:", options: ["Falar com os clientes", "Começar pela IA em vez de um problema dos clientes", "Testar", "Definir um preço"], answer: 1, why: "Comece pelo problema, não pela ferramenta." },
      { objective: "O1", q: "Os bons problemas para resolver são:", options: ["Os que ninguém paga", "Raros e vagos", "Só os seus", "Frequentes, difíceis e concretos"], answer: 3, why: "Esses problemas criam procura." },
      { objective: "O1", q: "\"Como o resolvem agora?\" ajuda-o a saber:", options: ["Nada de útil", "A palavra-passe deles", "A idade deles", "Com o que está a competir e quanto isso lhes custa"], answer: 3, why: "As soluções de hoje mostram o valor da sua." },
      { objective: "O2", q: "No exemplo do restaurante, quem verifica os preços nas legendas?", options: ["Ninguém", "Uma pessoa", "A própria IA se verifica", "Os clientes do cliente"], answer: 1, why: "Os preços são dados que precisam de uma verificação humana." },
      { objective: "O2", q: "\"Pessoa no circuito\" quer dizer:", options: ["Um círculo num gráfico", "A IA substitui todas as pessoas", "Uma pessoa verifica ou aprova o trabalho da IA antes de ser usado", "Uma linha de apoio ao cliente"], answer: 2, why: "É essa a definição." },
      { objective: "O2", q: "No desenho do seu serviço, o que entra é:", options: ["O que precisa do cliente no início", "O produto final", "O seu lucro", "A empresa de IA"], answer: 0, why: "O que entra vem do cliente; a entrega sai para ele." },
      { objective: "O3", q: "Um pedido de instruções inclui:", options: ["Os seus dados bancários", "Só um cumprimento", "Papel, regras, formato da resposta e espaços", "Uma pergunta ao acaso"], answer: 2, why: "Essas partes tornam os resultados iguais." },
      { objective: "O3", q: "Porque acrescentar \"Marque com [VERIFICAR] tudo aquilo de que não tem a certeza\"?", options: ["Torna os erros da IA mais fáceis de apanhar", "Torna o texto mais longo", "É exigido por lei", "Esconde os erros"], answer: 0, why: "As marcas mostram onde deve olhar." },
      { objective: "O3", q: "Se a sua ferramenta de IA não guarda instruções, você pode:", options: ["Desistir", "Guardar o pedido num documento e colá-lo de cada vez", "Escrevê-lo de memória de forma diferente de cada vez", "Comprar cinco ferramentas"], answer: 1, why: "Um documento guardado mantém tudo igual." },
      { objective: "O4", q: "Testar com três pessoas reais ajuda a encontrar:", options: ["Nada", "As palavras-passe delas", "Logótipos novos", "Erros da IA, passos lentos e o que os clientes valorizam"], answer: 3, why: "Os testes mostram o que corrigir antes de vender." },
      { objective: "O4", q: "Quando as pessoas que testam dão a sua opinião, você deve:", options: ["Anotar as palavras exatas delas", "Discutir com elas", "Ignorar", "Pedir-lhes avaliações falsas"], answer: 0, why: "As palavras exatas mostram o que lhes importa de verdade." },
      { objective: "O4", q: "Depois de corrigir os problemas encontrados nos testes, você deve:", options: ["Multiplicar o preço por dez", "Nunca mais mudar nada", "Apagar o pedido", "Testar outra vez"], answer: 3, why: "Testar outra vez confirma que as correções funcionaram." },
      { objective: "O5", q: "Os clientes pagam sobretudo por:", options: ["As suas assinaturas de ferramentas", "Os minutos que a IA lhe poupa", "O resultado e o seu bom juízo", "O seu logótipo"], answer: 2, why: "Ponha preço no resultado, não só no tempo." },
      { objective: "O5", q: "Um preço de pacote é:", options: ["Um custo de envio", "Um conjunto fixo de trabalho por um preço fixo", "Um código de desconto", "Um imposto"], answer: 1, why: "Os pacotes são fáceis de perceber para os clientes." },
      { objective: "O5", q: "Quem deve verificar as contas do preço?", options: ["O seu concorrente", "Só a IA", "Ninguém", "Você, numa folha de cálculo"], answer: 3, why: "As contas da IA podem estar erradas." },
      { objective: "O5", q: "O lucro é:", options: ["A conta das suas ferramentas", "Todo o dinheiro que os clientes pagam", "O que sobra depois de pagar todos os custos", "O seu preço"], answer: 2, why: "Lucro = receitas menos custos." },
      { objective: "O5", q: "Para questões de impostos sobre o seu serviço novo, consulte:", options: ["Fontes oficiais como irs.gov ou um contabilista", "Só uma conversa com a IA", "Um comentário nas redes sociais", "O seu cliente"], answer: 0, why: "As fontes oficiais e os profissionais são de confiança." },
      { objective: "O6", q: "Que afirmação deve evitar?", options: ["\"Uma pessoa verifica cada publicação\"", "\"100% certo, garantido\"", "\"12 publicações por mês\"", "\"Aprovado por você antes de publicar\""], answer: 1, why: "As afirmações absolutas são difíceis de provar." },
      { objective: "O6", q: "Em 2026, a FTC finalizou ordens contra empresas que:", options: ["Usavam folhas de cálculo", "Fizeram afirmações falsas sobre o que o seu serviço de marketing com IA fazia", "Contrataram designers", "Pagaram os impostos a tempo"], answer: 1, why: "Diziam que a IA ouvia as conversas quando isso não era verdade." },
      { objective: "O6", q: "Se não tiver a certeza de que uma afirmação de marketing é permitida, deve:", options: ["Falar com um advogado", "Usá-la na mesma", "Perguntar à IA e publicar o que ela disser", "Pô-la maior"], answer: 0, why: "Um advogado pode aconselhar sobre a sua situação." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      4,
      5,
      6,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Problema do cliente",
        objective: "O1",
        notYet: "O problema é vago ou não foi confirmado com uma pessoa real.",
        meets: "Um problema concreto e o que o cliente recebe, confirmados com pessoas reais.",
        exceeds: "Inclui como o resolvem agora e quanto isso lhes custa."
      },
      {
        name: "Passos e verificações humanas",
        objective: "O2",
        notYet: "Os passos não estão marcados, ou nada é verificado antes da entrega.",
        meets: "Passos numerados marcados como IA, pessoa ou ferramenta, com uma verificação humana antes da entrega.",
        exceeds: "Diz exatamente o que a pessoa verifica em cada ponto de verificação."
      },
      {
        name: "Pedido de instruções",
        objective: "O3",
        notYet: "Faltam regras ou espaços, ou os resultados mudam muito.",
        meets: "Papel, regras, formato e espaços, com resultados iguais.",
        exceeds: "Usa marcas [VERIFICAR] e tem regras acrescentadas a partir dos erros dos testes."
      },
      {
        name: "Resultados dos testes",
        objective: "O4",
        notYet: "Nenhuma pessoa real o testou, ou não foi feita nenhuma mudança.",
        meets: "Resultados de testes com pessoas reais, com as palavras delas e pelo menos uma mudança.",
        exceeds: "Três pessoas testaram e um segundo teste mostrou que a mudança funcionou."
      },
      {
        name: "Preço e descrição",
        objective: "O6",
        notYet: "O preço ignora o tempo de verificação, ou a descrição promete demais.",
        meets: "Um preço de pacote que cobre todos os custos com lucro, e uma descrição honesta.",
        exceeds: "Mostra as contas na folha de cálculo e diz claramente o que a IA faz e o que uma pessoa faz."
      }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que vendem o seu serviço com ajuda da IA a um primeiro cliente pagante em 30 dias (inquérito de seguimento)",
      "Satisfação dos clientes ou encomendas repetidas, segundo os donos",
      "Alunos que começam outro curso da Koach Learn para empreendedores em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com um assistente de IA gratuito",
      "Uma folha de cálculo para medir o tempo e calcular o preço",
      "Acesso a até três pessoas reais que têm o problema",
      "Cerca de 60 a 75 minutos para as lições e as verificações, mais o tempo dos testes com pessoas reais"
    ],
    facilitatorNotes: [
      "Peça aos alunos para apresentarem ao grupo o problema que escolheram antes de criar, e deixe os colegas perguntarem com que frequência acontece.",
      "Junte os alunos em pares para fazerem de clientes de teste um do outro se for difícil encontrar pessoas reais, e depois façam o teste com uma pessoa real.",
      "Lembre aos alunos que não colem dados privados de quem testa na IA quando podem usar marcadores.",
      "Reveja cada descrição de produto à procura de afirmações que não se podem provar; envie as questões de impostos e legais ao profissional certo.",
      "Avalie a ficha de produto com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
