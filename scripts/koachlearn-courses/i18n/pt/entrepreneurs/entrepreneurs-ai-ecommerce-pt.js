"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-ecommerce.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US rules (FTC, CAN-SPAM); US names are kept and explained.

module.exports = {
  id: "entrepreneurs-ai-ecommerce-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-ecommerce",
  category: "Entrepreneurs",
  name: "Comércio Eletrónico com IA",
  skills: "Pesquisar um nicho de produtos, Escrever anúncios de produtos com IA, Fazer imagens de produtos, Definir políticas de envio e devoluções, Responder aos clientes com ajuda da IA, Usar e-mails e avaliações dentro da lei",
  outcome: "pesquisar um nicho de produtos, usar a IA para escrever anúncios honestos e fazer imagens limpas dos produtos, definir políticas de envio e devoluções que cumprem a regra de vendas à distância da FTC, e preparar respostas aos clientes, e-mails de seguimento e pedidos de avaliação com ajuda da IA que cumprem as regras dos EUA.",
  about: [
    "Vender pela internet nunca foi tão fácil de começar: pode vender na sua própria loja (em plataformas como Shopify, Square Online ou Wix), em mercados online (Etsy, Amazon, eBay) ou em lojas nas redes sociais. A IA pode ajudar em quase todos os passos, desde encontrar um nicho até escrever anúncios e responder aos clientes.",
    "Este curso é para quem está a começar ou a fazer crescer uma loja online. No Capítulo 1 vai pesquisar um nicho, escrever anúncios e criar imagens dos produtos com IA. No Capítulo 2 vai definir políticas de envio e devoluções, tratar das perguntas dos clientes e usar e-mails e avaliações para crescer, seguindo as regras dos EUA da FTC (a Comissão Federal do Comércio, que protege os consumidores).",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As taxas e as funções das plataformas mudam muitas vezes, por isso veja os preços e as páginas de ajuda de cada plataforma antes de escolher."
  ],
  finalTask: "Monte um kit de lançamento para uma linha de produtos: um resumo do nicho num parágrafo com provas de procura, três anúncios de produtos prontos (título, descrição, detalhes principais) com imagens limpas, políticas escritas de envio e devoluções com prazos de envio que consegue mesmo cumprir, cinco modelos de resposta aos clientes feitos com ajuda da IA, e um e-mail de seguimento e um pedido de avaliação que cumprem a lei CAN-SPAM e as regras da FTC sobre avaliações.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que estão a começar ou a fazer crescer uma pequena loja online nos EUA: artesãos, revendedores e donos de pequenos negócios paralelos que vendem na sua própria loja, num mercado online ou numa loja nas redes sociais.",
    startingPoint: "Sabem usar um telefone ou um computador, ver lojas online e escrever num assistente de IA gratuito. Têm pouca experiência a pesquisar a procura, a escrever anúncios ou a escrever as políticas da loja.",
    gap: "Os vendedores novos muitas vezes adivinham o que vender, copiam textos da IA com afirmações falsas e prometem prazos de envio que não conseguem cumprir. Os alunos precisam de usar a IA para trabalhar mais depressa sem deixar de ser honestos com os compradores e de cumprir as regras da FTC, para evitar reembolsos, más avaliações e problemas com a lei.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador com internet; a câmara de um telefone para as fotos dos produtos",
      "Tempo: lições de cerca de 5 minutos, que cabem no dia a dia de quem gere um negócio",
      "Regras: a regra de vendas à distância da FTC, as regras da FTC sobre avaliações e a lei CAN-SPAM aplicam-se aos vendedores nos EUA",
      "Privacidade: nunca cole numa ferramenta de IA a morada, o cartão ou os dados da encomenda de um cliente"
    ],
    prerequisites: "Nenhum. Quem é novo nas ferramentas de IA pode fazer primeiro o curso \"Introdução à IA e Confiança Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um assistente de IA e um mercado online verdadeiro", action: "escolher um nicho de produtos e mostrar provas de que as pessoas já compram nele", standard: "com pelo menos três exemplos verdadeiros do mercado online como prova" },
    { id: "O2", condition: "Com os dados verdadeiros de um produto", action: "escrever com ajuda da IA um anúncio de produto claro, fácil de encontrar na pesquisa e verdadeiro", standard: "com cada afirmação verificada e nada de falso no texto" },
    { id: "O3", condition: "Usando a câmara de um telefone e uma ferramenta de edição com IA", action: "criar imagens que mostram claramente o produto verdadeiro", standard: "com uma foto do tamanho e sem nenhuma edição que mude o aspeto do produto" },
    { id: "O4", condition: "Usando a regra de vendas à distância da FTC", action: "escrever políticas de envio e devoluções e uma mensagem de atraso", standard: "com prazos de envio que consegue mesmo cumprir e uma oferta de reembolso na mensagem de atraso" },
    { id: "O5", condition: "Com as perguntas mais comuns dos clientes da sua loja", action: "criar com ajuda da IA modelos de resposta que usam só as suas políticas verdadeiras", standard: "com cinco modelos verificados e sem partilhar com a IA dados privados dos clientes" },
    { id: "O6", condition: "Usando a lei CAN-SPAM e as regras da FTC sobre avaliações", action: "escrever um e-mail de seguimento e um pedido de avaliação", standard: "com uma morada, uma forma de cancelar a subscrição e nenhuma avaliação falsa ou paga" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar produtos que vendem",
      lessons: [
        {
          objectives: ["O1"],
          title: "Pesquisar um nicho de produtos",
          minutes: 5,
          goal: "Escolher um nicho de produtos e verificar que as pessoas já compram nele.",
          text: [
            "Um nicho é um grupo concreto de compradores com uma necessidade concreta: \"coleiras feitas à mão para cães de raças grandes\", \"kits naturais de cuidado do cabelo para crianças\", \"ferramentas de jardinagem para varandas pequenas\". É mais fácil vencer num nicho do que numa categoria geral.",
            "Use a IA para ter ideias: \"Posso fazer ou arranjar [produtos]. Sugira dez nichos, o comprador de cada um e o problema que o produto resolve.\" Depois verifique você mesmo a procura verdadeira: procure produtos parecidos no mercado online, veja quantas avaliações têm os vendedores de topo, leia as avaliações de 3 estrelas para encontrar queixas que podia resolver e veja as sugestões da pesquisa.",
            "A IA não consegue ver com segurança os dados de vendas em tempo real e pode inventar números. Use-a para ideias e perguntas; use as páginas verdadeiras do mercado online e as suas próprias conversas como prova."
          ],
          steps: ["Peça à IA dez ideias de nichos com base no que pode fazer ou arranjar.", "Procure cada uma das melhores ideias num mercado online.", "Anote o número de avaliações e os preços dos vendedores de topo.", "Leia as avaliações de 3 estrelas para encontrar problemas que podia resolver.", "Escolha um nicho com procura clara."],
          words: [["Nicho", "um grupo concreto de compradores com uma necessidade concreta."], ["Procura", "quantas pessoas querem comprar uma coisa."], ["Mercado online", "um site onde muitos vendedores põem produtos à venda, como o Etsy, a Amazon ou o eBay."]],
          slides: [
            { title: "Seja concreto", bullets: ["\"Coleiras para cães de raças grandes\"", "Mais fácil de vencer do que uma categoria geral"] },
            { title: "A IA para ideias", bullets: ["Dez nichos, compradores e problemas", "Com base no que pode fazer ou arranjar"] },
            { title: "Provas verdadeiras", bullets: ["Procure no mercado online", "Avaliações e preços dos vendedores de topo", "As avaliações de 3 estrelas mostram problemas a resolver"] },
            { title: "Cuidado", bullets: ["A IA pode inventar números de vendas", "Use páginas verdadeiras como prova"] }
          ],
          tryIt: "Use a IA para ter dez ideias de nichos, verifique três delas num mercado online verdadeiro e escreva um resumo de um parágrafo sobre o nicho que escolher, com as suas provas de procura.",
          youCanNow: "escolher um nicho de produtos com base em provas verdadeiras de procura.",
          quickCheck: [
            { objective: "O1", q: "O que conta como prova de que as pessoas já compram num nicho?", options: ["Uma ferramenta de IA dizer que o nicho é popular", "Anúncios verdadeiros no mercado online com vendas e avaliações", "Os seus amigos dizerem que gostam da ideia", "Um nicho sem nenhum vendedor"], answer: 1, why: "Anúncios verdadeiros com vendas e avaliações mostram a procura real, e a IA pode inventar números." },
            { objective: "O1", q: "Tem dez ideias de nichos dadas pela IA. O que faz a seguir?", options: ["Escolhe a primeira da lista da IA", "Começa a comprar stock para as dez", "Verifica algumas num mercado online verdadeiro antes de escolher", "Escolhe a que tem o nome mais comprido"], answer: 2, why: "Verificar as ideias num mercado online verdadeiro transforma as ideias da IA em provas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever anúncios de produtos honestos",
          minutes: 5,
          goal: "Escrever com IA um título e uma descrição de produto claros, fáceis de encontrar e verdadeiros.",
          text: [
            "Um bom anúncio responde às perguntas do comprador antes de ele perguntar: o que é, para quem é, o tamanho, os materiais, o que vem incluído, como cuidar e o prazo de envio. O título deve usar as palavras que os compradores pesquisam, sem o encher de palavras-chave.",
            "Dê à IA os dados verdadeiros e peça: \"Escreva um título de produto com menos de 80 caracteres e uma descrição com uma introdução curta, 5 tópicos e instruções de cuidado. Use só estes dados: [dados].\" A IA muitas vezes acrescenta características que você não disse; apague tudo o que não for verdade.",
            "A FTC diz que a publicidade tem de ser verdadeira e apoiada em provas. Não diga \"orgânico\", \"feito à mão\", \"fabricado nos EUA\", benefícios para a saúde ou \"o mais vendido\" se não for verdade e não o puder provar. Veja também as regras de anúncios de cada plataforma."
          ],
          steps: ["Escreva todos os dados verdadeiros sobre o produto.", "Peça à IA um título e uma descrição usando só esses dados.", "Apague tudo o que a IA acrescentou e que não é verdade.", "Verifique afirmações como orgânico, feito à mão ou fabricado nos EUA.", "Veja as regras de anúncios da plataforma."],
          words: [["Anúncio de produto", "a página de um produto numa loja ou num mercado online."], ["Palavra-chave", "uma palavra ou frase que os compradores escrevem na pesquisa."]],
          slides: [
            { title: "Responda às perguntas do comprador", bullets: ["O que é, para quem, tamanho, materiais", "O que vem incluído, cuidados, prazo de envio"] },
            { title: "A IA só com os seus dados", bullets: ["Título com menos de 80 caracteres", "Introdução, 5 tópicos, instruções de cuidado", "Apague tudo o que não for verdade"] },
            { title: "As afirmações precisam de prova", bullets: ["\"Orgânico\", \"feito à mão\", \"fabricado nos EUA\"", "Benefícios para a saúde, \"o mais vendido\"", "Veja também as regras da plataforma"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (noções básicas de publicidade e marketing, em inglês)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Escreva os dados de três produtos e use a IA para fazer o rascunho de cada anúncio. Tire tudo o que não for verdade e verifique cada afirmação.",
          youCanNow: "escrever anúncios de produtos claros, fáceis de encontrar e que dizem a verdade.",
          quickCheck: [
            { objective: "O2", q: "O que deve dar à IA quando lhe pede o rascunho de um anúncio?", options: ["Só os dados verdadeiros do produto, pedindo-lhe para usar só esses", "O anúncio de um concorrente para copiar palavra por palavra", "Nada, para ela ser criativa", "Afirmações que espera que sejam verdade"], answer: 0, why: "A IA só faz anúncios honestos quando trabalha a partir dos seus dados verdadeiros." },
            { objective: "O2", q: "O rascunho da IA diz que a sua caneca \"pode ir à máquina de lavar loiça\", mas você nunca testou. O que faz?", options: ["Deixa ficar porque os compradores gostam", "Põe \"provavelmente\" antes", "Passa para o fim da descrição", "Tira a afirmação até a poder provar"], answer: 3, why: "As afirmações sobre um produto têm de ser verdadeiras e apoiadas em provas antes de as usar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer imagens limpas dos produtos",
          minutes: 5,
          goal: "Criar fotos e imagens que mostram claramente o produto verdadeiro.",
          text: [
            "As fotos vendem os produtos. Use o seu telefone com luz do dia perto de uma janela, sobre um fundo simples, e tire fotos de vários ângulos, mais um grande plano e uma foto que mostre o tamanho (na mão ou ao lado de um objeto comum).",
            "As ferramentas de IA podem ajudar: tirar ou mudar o fundo, corrigir a luz, ajustar o tamanho para cada plataforma e fazer imagens de estilo de vida em ferramentas como o Canva. Muitos mercados online têm regras para a imagem principal, como um fundo simples; veja as regras de imagens da plataforma.",
            "Nunca use a IA para fazer o produto parecer diferente daquilo que o comprador vai receber: nada de cores, tamanhos, características ou resultados falsos. Imagens enganadoras podem trazer devoluções, más avaliações, penalizações da plataforma e problemas de publicidade enganosa."
          ],
          steps: ["Fotografe com luz do dia sobre um fundo simples.", "Tire vários ângulos, um grande plano e uma foto do tamanho.", "Use ferramentas de IA para limpar o fundo e ajustar o tamanho.", "Veja as regras de imagens da plataforma.", "Compare cada imagem com o produto verdadeiro."],
          words: [["Imagem de estilo de vida", "uma foto ou imagem que mostra o produto a ser usado."], ["Remoção de fundo", "uma ferramenta de edição que recorta o produto do seu fundo."]],
          slides: [
            { title: "Fotografe bem", bullets: ["Luz do dia perto de uma janela", "Fundo simples", "Ângulos, grande plano, foto do tamanho"] },
            { title: "A IA ajuda a editar", bullets: ["Tirar ou mudar o fundo", "Corrigir a luz, ajustar o tamanho para cada plataforma", "Imagens de estilo de vida no Canva"] },
            { title: "Nunca engane", bullets: ["Nada de cores, tamanhos ou características falsos", "Veja as regras de imagens de cada plataforma"] }
          ],
          tryIt: "Fotografe um produto (ângulos, grande plano, tamanho), limpe a imagem principal com uma ferramenta de IA para o fundo e compare-a com o produto verdadeiro antes de a usar.",
          youCanNow: "criar imagens de produtos limpas e honestas com a ajuda da edição com IA.",
          quickCheck: [
            { objective: "O3", q: "Que conjunto de fotos mostra um produto de forma honesta e clara?", options: ["Uma foto escura tirada à noite", "Alguns ângulos, um grande plano e uma foto do tamanho", "Uma única imagem feita pela IA de um produto parecido", "Uma foto com um fundo cheio de outras coisas"], answer: 1, why: "Vários ângulos, um grande plano e uma foto do tamanho mostram ao comprador o que vai mesmo receber." },
            { objective: "O3", q: "Uma ferramenta de IA deixou a cor do seu lenço mais viva do que é na realidade. O que faz?", options: ["Usa porque fica mais bonito", "Usa e põe também um filtro nas outras", "Corrige para a imagem ficar igual ao produto verdadeiro", "Apaga todas as suas fotos e usa imagens de banco"], answer: 2, why: "As imagens têm de ser iguais ao produto verdadeiro; senão os compradores são enganados e pedem reembolsos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar produtos que vendem",
        questions: [
          { objective: "O1", q: "Qual destes é um nicho?", options: ["Coisas", "Ferramentas de jardinagem para varandas pequenas", "Tudo para todos", "Produtos"], answer: 1, why: "Diz quem são os compradores e qual é a necessidade concreta." },
          { objective: "O1", q: "A IA diz que um produto vende 10,000 unidades por mês. O que faz?", options: ["Publica o número como um facto", "Confia", "Encomenda 10,000 unidades", "Procura provas verdadeiras no mercado online; a IA pode inventar números"], answer: 3, why: "A IA não consegue ver com segurança os dados de vendas em tempo real." },
          { objective: "O2", q: "A IA acrescentou \"à prova de água\" ao seu anúncio, mas o produto não é. O que faz?", options: ["Apaga", "Deixa ficar", "Põe em negrito", "Acrescenta \"garantido\""], answer: 0, why: "Os anúncios têm de ser verdadeiros." },
          { objective: "O2", q: "Que afirmação precisa de prova antes de a usar?", options: ["\"Enviado numa caixa\"", "\"Azul\"", "\"Fabricado nos EUA\"", "\"Vem com um cartão\""], answer: 2, why: "Afirmações sobre a origem, como fabricado nos EUA, têm de ser verdadeiras e possíveis de provar." },
          { objective: "O3", q: "Que uso da IA nas imagens dos produtos NÃO está certo?", options: ["Corrigir a luz", "Tirar o fundo", "Fazer o produto parecer maior do que é", "Ajustar o tamanho para a plataforma"], answer: 2, why: "Imagens enganadoras enganam os compradores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Servir e crescer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Políticas de envio e devoluções",
          minutes: 6,
          goal: "Escrever políticas de envio e devoluções que cumprem a regra de vendas à distância da FTC.",
          text: [
            "A regra da FTC sobre mercadorias encomendadas por correio, internet ou telefone (Mail, Internet, or Telephone Order Merchandise Rule) diz: se indicar um prazo de envio, precisa de ter uma base razoável para acreditar que o consegue cumprir; se não indicar nenhum, tem de ter uma base razoável para enviar em 30 dias.",
            "Se não conseguir enviar a tempo, tem de avisar o comprador, dar uma nova data e oferecer a escolha de cancelar com um reembolso rápido. Os reembolsos de pagamentos em dinheiro, cheque, vale postal ou cartão de crédito de terceiros têm de ser feitos em sete dias úteis depois do cancelamento, e um crédito na loja não pode substituir um reembolso obrigatório.",
            "A IA pode fazer o rascunho de páginas de políticas claras: \"Escreva uma política de envio e devoluções simpática para uma pequena loja online. Enviamos em 3 a 5 dias úteis. Aceitamos devoluções até 30 dias para artigos não usados; o comprador paga o envio da devolução.\" Depois verifique que corresponde ao que você faz de verdade e às regras da plataforma."
          ],
          steps: ["Decida um prazo de envio que consegue mesmo cumprir.", "Decida as suas regras de devolução.", "Peça à IA o rascunho das duas políticas em palavras simples.", "Verifique-as com a regra da FTC e com as regras da sua plataforma.", "Escreva um modelo de mensagem de atraso que oferece cancelar com reembolso."],
          words: [["Regra de vendas à distância", "a regra da FTC sobre prazos de envio, avisos de atraso e reembolsos para encomendas por correio, internet ou telefone."], ["Nova data", "uma nova data de envio que dá ao comprador depois de um atraso."]],
          slides: [
            { title: "Prazo de envio (regra da FTC)", bullets: ["Prazo indicado: base razoável para o cumprir", "Sem prazo indicado: enviar em 30 dias"] },
            { title: "Atrasos", bullets: ["Avise o comprador, dê uma nova data", "Ofereça cancelar com reembolso rápido", "Reembolso em 7 dias úteis (dinheiro, cartão)"] },
            { title: "Rascunho com a IA", bullets: ["Páginas de políticas simples e simpáticas", "Iguais ao que faz de verdade", "Veja também as regras da plataforma"] }
          ],
          sources: [{ name: "FTC: Business Guide to the Mail, Internet, or Telephone Order Merchandise Rule (guia para empresas sobre a regra de vendas à distância, em inglês)", url: "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule" }],
          tryIt: "Escreva as suas políticas de envio e devoluções com a IA, verifique-as com a regra da FTC e escreva uma mensagem de atraso que dá uma nova data e oferece o cancelamento com reembolso.",
          youCanNow: "definir políticas de envio e devoluções claras, honestas e que cumprem a regra da FTC.",
          quickCheck: [
            { objective: "O4", q: "O que deve prometer uma política de envio?", options: ["O prazo mais rápido que qualquer vendedor oferece", "Nenhum prazo, para nunca se atrasar", "Entrega no dia seguinte para todas as encomendas", "Um prazo de envio que tem uma base verdadeira para cumprir"], answer: 3, why: "A regra da FTC diz que precisa de uma base razoável para cumprir qualquer prazo de envio que indicar." },
            { objective: "O4", q: "Um atraso do fornecedor faz com que uma encomenda seja enviada tarde. O que faz?", options: ["Avisa o comprador, dá uma nova data e oferece cancelar com reembolso", "Não diz nada e espera que ele não repare", "Oferece só crédito na loja", "Cancela a encomenda sem avisar"], answer: 0, why: "A regra obriga a um aviso de atraso com uma nova data e a escolha de cancelar com reembolso." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Responder aos clientes com ajuda da IA",
          minutes: 5,
          goal: "Criar modelos de resposta para as cinco perguntas que os seus clientes fazem mais.",
          text: [
            "As lojas online recebem as mesmas perguntas muitas vezes: Onde está a minha encomenda? Posso devolver isto? Que tamanho devo escolher? Enviam para a minha zona? Isto está em stock? Escreva um modelo para cada uma, com espaços em branco para os detalhes.",
            "A IA pode fazer rascunhos de modelos simpáticos a partir das suas políticas verdadeiras. Para perguntas novas, resuma a pergunta sem o nome, a morada ou o número da encomenda do cliente e peça uma resposta à IA; depois preencha você mesmo os detalhes.",
            "Se puser um chatbot na sua loja, dê-lhe só as suas políticas verdadeiras e os dados dos produtos, diga aos clientes que é automático e torne fácil falar com uma pessoa. Veja o que o serviço do chatbot faz com os dados dos clientes."
          ],
          steps: ["Faça a lista das cinco perguntas que os clientes fazem mais.", "Dê à IA as suas políticas verdadeiras e peça modelos com [espaços em branco].", "Verifique cada modelo com as suas políticas.", "Para perguntas novas, resuma sem dados privados.", "Se usar um chatbot, dê-lhe dados verdadeiros e uma forma de chegar a uma pessoa."],
          words: [["Modelo de resposta", "uma resposta pronta com espaços em branco para preencher."], ["Chatbot", "um programa automático que responde às mensagens dos clientes."]],
          slides: [
            { title: "As perguntas de sempre", bullets: ["Onde está a minha encomenda? Devoluções?", "Tamanhos, zona de envio, stock"] },
            { title: "Modelos a partir das suas políticas", bullets: ["Simpáticos, com [espaços em branco]", "Verifique com o que faz de verdade"] },
            { title: "Chatbots", bullets: ["Só políticas e dados verdadeiros", "Diga que é automático", "Forma fácil de falar com uma pessoa"] }
          ],
          tryIt: "Escreva com a IA cinco modelos de resposta para as perguntas mais comuns dos seus clientes, usando só as suas políticas verdadeiras, e verifique cada um.",
          youCanNow: "responder às perguntas dos clientes com rapidez e exatidão com modelos feitos com a IA.",
          quickCheck: [
            { objective: "O5", q: "O que torna seguro usar um modelo de resposta a um cliente?", options: ["Soa simpático, mesmo que os dados sejam adivinhados", "Baseia-se nas suas políticas verdadeiras e foi verificado por você", "Foi a IA que o escreveu, por isso tem de estar certo", "Promete tudo o que o cliente quer"], answer: 1, why: "Os modelos têm de corresponder às suas políticas verdadeiras, por isso verifique cada um que a IA escreve." },
            { objective: "O5", q: "O e-mail de um cliente tem o número da encomenda e a morada de casa. Como pede ajuda à IA para a resposta?", options: ["Cola o e-mail inteiro na IA", "Pede ao cliente para enviar a morada outra vez", "Resume a pergunta sem os dados privados", "Publica-o num fórum público para pedir conselhos"], answer: 2, why: "Deixar de fora os dados privados protege o cliente e mesmo assim tem a ajuda da IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "E-mails de seguimento e avaliações, dentro da lei",
          minutes: 5,
          goal: "Escrever um e-mail de seguimento e um pedido de avaliação que cumprem a lei CAN-SPAM e as regras da FTC sobre avaliações.",
          text: [
            "Os e-mails para quem já comprou (agradecimentos, avisos de reposição de stock, ofertas) trazem vendas repetidas. Use a IA para fazer rascunhos de e-mails curtos e cumpra a lei CAN-SPAM (a lei dos EUA sobre e-mails de marketing): remetente e assunto honestos, deixar claro quando é publicidade, incluir a sua morada física e uma forma clara de cancelar a subscrição, e respeitar os cancelamentos em 10 dias úteis. A maioria das plataformas de lojas e de e-mail acrescenta os links de cancelamento por você.",
            "As avaliações criam confiança. Peça a todos os compradores uma avaliação honesta, não só aos que estão contentes. A regra da FTC proíbe avaliações e testemunhos falsos (incluindo os feitos com IA em nome de pessoas que não existem) e proíbe prémios dados só por avaliações positivas. Nunca compre avaliações nem use a IA para as escrever.",
            "Use a IA para ler as suas avaliações e encontrar padrões: o que os compradores adoram e de que se queixam. Resolva a queixa mais comum e fale dessa melhoria nos seus anúncios ou e-mails."
          ],
          steps: ["Faça com a IA o rascunho de um e-mail de seguimento curto para quem já comprou.", "Verifique o básico da lei CAN-SPAM: remetente e assunto honestos, morada, cancelamento.", "Faça o rascunho de um pedido de avaliação honesta para todos os compradores.", "Nunca dê prémios só por boas avaliações nem escreva avaliações com a IA.", "Use a IA para encontrar padrões nas suas avaliações verdadeiras."],
          words: [["Venda repetida", "uma venda a alguém que já comprou antes."], ["Cancelar a subscrição", "uma forma de deixar de receber e-mails (em inglês, \"opt-out\" ou \"unsubscribe\")."]],
          slides: [
            { title: "E-mails para quem já comprou", bullets: ["Agradecimentos, reposições de stock, ofertas", "A IA faz rascunhos de e-mails curtos"] },
            { title: "O básico da lei CAN-SPAM", bullets: ["Remetente e assunto honestos", "A sua morada física", "Cancelamentos respeitados em 10 dias úteis"] },
            { title: "Avaliações", bullets: ["Peça a todos os compradores uma avaliação honesta", "Nada de avaliações falsas ou escritas pela IA", "Nada de prémios só por boas avaliações"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business (guia da lei CAN-SPAM para empresas, em inglês)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FTC: regra final que proíbe avaliações e testemunhos falsos (comunicado de imprensa, em inglês)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Tarefa final: escreva um e-mail de seguimento e um pedido de avaliação que cumprem as regras e depois junte o seu kit de lançamento: resumo do nicho, três anúncios com imagens, políticas, cinco modelos de resposta, e-mail e pedido de avaliação.",
          youCanNow: "gerir uma loja online com ajuda da IA, sendo honesto com os compradores e cumprindo as regras dos EUA.",
          quickCheck: [
            { objective: "O6", q: "O que tem de ter um e-mail de marketing para clientes?", options: ["Um código de desconto", "A sua morada física e uma forma de cancelar a subscrição", "Uma foto de cada produto", "O histórico de encomendas do cliente"], answer: 1, why: "A lei CAN-SPAM exige uma morada física e uma forma de cancelar que funcione nos e-mails de marketing." },
            { objective: "O6", q: "Um amigo oferece-se para escrever avaliações de cinco estrelas para a sua loja. O que faz?", options: ["Aceita, porque ele tem boa intenção", "Aceita só três", "Pede à IA para escrever mais algumas parecidas", "Diz que não e pede avaliações honestas aos compradores verdadeiros"], answer: 3, why: "A FTC proíbe avaliações falsas, por isso peça avaliações honestas aos compradores verdadeiros." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Servir e crescer",
        questions: [
          { objective: "O4", q: "Não indica nenhum prazo de envio. Pela regra da FTC, precisa de uma base razoável para enviar em:", options: ["1 ano", "1 dia", "30 dias", "90 dias"], answer: 2, why: "É a \"regra dos 30 dias\" da FTC." },
          { objective: "O4", q: "Não consegue enviar a tempo. O que tem de fazer?", options: ["Cancelar sem avisar", "Não dizer nada", "Oferecer só crédito na loja", "Avisar o comprador, dar uma nova data e oferecer o cancelamento com reembolso"], answer: 3, why: "A regra obriga a um aviso de atraso e à opção de cancelar." },
          { objective: "O5", q: "A pergunta de um cliente tem a morada de casa dele. Como pede ajuda à IA?", options: ["Cola tudo", "Resume a pergunta sem a morada", "Publica-a em público", "Ignora o cliente"], answer: 1, why: "Mantenha os dados privados fora das ferramentas de IA." },
          { objective: "O6", q: "Que prática com avaliações é permitida?", options: ["Pedir a todos os compradores uma avaliação honesta", "Oferecer um presente só por avaliações de 5 estrelas", "Escrever avaliações com a IA", "Comprar avaliações"], answer: 0, why: "Avaliações honestas de compradores verdadeiros estão certas." },
          { objective: "O6", q: "Em quanto tempo tem de respeitar um pedido para cancelar a subscrição de e-mails?", options: ["Nunca", "Em um ano", "Em 10 dias úteis", "Só se pedirem duas vezes"], answer: 2, why: "É o que a lei CAN-SPAM exige, segundo o guia da FTC." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Comércio Eletrónico com IA",
    questions: [
      { objective: "O1", q: "Qual destes é um mercado online?", options: ["Uma folha de cálculo", "Etsy", "Uma impressora", "Uma conta de e-mail"], answer: 1, why: "O Etsy, a Amazon e o eBay são mercados online." },
      { objective: "O1", q: "Onde deve ver as taxas de uma plataforma?", options: ["Num cliente", "Num palpite", "Num vídeo antigo", "Nas páginas de preços e de ajuda da própria plataforma"], answer: 3, why: "As taxas mudam muitas vezes." },
      { objective: "O1", q: "Ler as avaliações de 3 estrelas dos concorrentes ajuda a:", options: ["Encontrar as palavras-passe deles", "Copiar as fotos deles", "Escrever avaliações falsas", "Encontrar problemas que podia resolver"], answer: 3, why: "As queixas mostram necessidades por satisfazer." },
      { objective: "O1", q: "Na pesquisa de nichos, a IA serve melhor para:", options: ["Números exatos de vendas em tempo real", "Ideias e perguntas, com páginas verdadeiras como prova", "Decisões finais", "Comprar stock"], answer: 1, why: "A IA pode inventar números." },
      { objective: "O2", q: "Um bom anúncio responde a:", options: ["Nada", "Só o preço", "O que é, para quem é, tamanho, materiais, prazo de envio", "A história da sua vida"], answer: 2, why: "Responde às perguntas do comprador antes de ele perguntar." },
      { objective: "O2", q: "Quando pede um anúncio à IA, dê-lhe:", options: ["Só os dados verdadeiros, pedindo-lhe para usar só esses", "Nada, deixe-a adivinhar", "O anúncio de um concorrente para copiar", "Os seus dados bancários"], answer: 0, why: "Os dados verdadeiros evitam características inventadas." },
      { objective: "O2", q: "Uma palavra-chave é:", options: ["Um código de desconto", "Uma palavra-passe", "Uma palavra que os compradores escrevem na pesquisa", "Uma foto do produto"], answer: 2, why: "As palavras-chave ajudam os compradores a encontrar os anúncios." },
      { objective: "O2", q: "Pelas regras da FTC, as afirmações sobre os produtos têm de ser:", options: ["Verdadeiras e apoiadas em provas", "Emocionantes", "Curtas", "Escritas pela IA"], answer: 0, why: "A regra da publicidade verdadeira aplica-se aos anúncios." },
      { objective: "O3", q: "Para as fotos dos produtos, uma boa preparação é:", options: ["Um quarto escuro", "Luz do dia e um fundo simples", "Um fundo cheio de coisas", "Uma só foto desfocada"], answer: 1, why: "Fotos claras vendem." },
      { objective: "O3", q: "Uma foto do tamanho mostra:", options: ["O preço", "Só o logótipo", "A caixa de envio", "O produto ao lado de uma mão ou de um objeto comum"], answer: 3, why: "Ajuda os compradores a perceber o tamanho." },
      { objective: "O3", q: "Que edição de imagem com IA está certa?", options: ["Tirar o fundo", "Mudar a cor do produto para uma que não vende", "Acrescentar características que ele não tem", "Fazê-lo parecer maior"], answer: 0, why: "Limpar o fundo não engana ninguém." },
      { objective: "O4", q: "Se indicar um prazo de envio, precisa de:", options: ["Aprovação da IA", "Nada", "O apoio de uma pessoa famosa", "Uma base razoável para acreditar que o consegue cumprir"], answer: 3, why: "A regra da FTC exige uma base razoável." },
      { objective: "O4", q: "Um aviso de atraso tem de oferecer ao comprador:", options: ["Um preço mais alto", "Só crédito na loja", "A escolha de cancelar com um reembolso rápido", "Nada"], answer: 2, why: "Os compradores podem escolher cancelar." },
      { objective: "O4", q: "Depois de um cancelamento, os reembolsos de encomendas pagas com cartão ou dinheiro têm de ser feitos em:", options: ["Seis meses", "Sete dias úteis", "Um ano", "Nunca"], answer: 1, why: "O guia da FTC diz sete dias úteis." },
      { objective: "O4", q: "Pela regra, um crédito na loja pode substituir um reembolso obrigatório?", options: ["Só aos fins de semana", "Sim, sempre", "Só em encomendas pequenas", "Não"], answer: 3, why: "O guia diz que o crédito na loja não pode substituir um reembolso obrigatório." },
      { objective: "O5", q: "Os modelos de resposta devem basear-se em:", options: ["Nas políticas dos concorrentes", "No que a IA imagina", "Nas suas políticas verdadeiras", "Em nada"], answer: 2, why: "Os modelos têm de corresponder ao que faz de verdade." },
      { objective: "O5", q: "O chatbot de uma loja deve:", options: ["Dizer que é automático e oferecer uma forma de falar com uma pessoa", "Fingir que é uma pessoa", "Prometer qualquer reembolso", "Não ter dados nenhuns"], answer: 0, why: "A honestidade e o acesso a uma pessoa criam confiança." },
      { objective: "O6", q: "Os e-mails de marketing têm de incluir:", options: ["A palavra-passe do comprador", "A sua morada física e uma forma de cancelar a subscrição", "Um prazo falso", "Publicidade escondida"], answer: 1, why: "É o básico da lei CAN-SPAM." },
      { objective: "O6", q: "A regra da FTC sobre avaliações falsas proíbe:", options: ["Pedir avaliações honestas", "Avaliações feitas com IA em nome de pessoas que não existem", "Responder às avaliações", "Mostrar avaliações verdadeiras"], answer: 1, why: "As avaliações falsas, incluindo as feitas com IA, são proibidas." },
      { objective: "O6", q: "Usar a IA nas suas avaliações verdadeiras pode ajudar a:", options: ["Encontrar padrões no que os compradores adoram e de que se queixam", "Apagar as más avaliações", "Escrever mais avaliações", "Mudar as notas"], answer: 0, why: "Os padrões mostram o que resolver." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 4, 7, 8, 11, 12, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Nicho com provas", objective: "O1", notYet: "O nicho é um palpite, ou a única prova é o que a IA disse.", meets: "O resumo diz qual é o nicho e dá provas verdadeiras de procura no mercado online.", exceeds: "Também diz um problema tirado das avaliações dos concorrentes que o seu produto podia resolver." },
      { name: "Anúncios honestos", objective: "O2", notYet: "Um anúncio tem uma afirmação falsa ou não verificada.", meets: "Três anúncios com título, descrição e detalhes principais claros, tudo verdadeiro.", exceeds: "Cada anúncio também usa as palavras que os compradores pesquisam e responde ao tamanho, aos materiais e ao prazo de envio." },
      { name: "Imagens claras e verdadeiras", objective: "O3", notYet: "As imagens não são claras, ou uma edição muda o aspeto do produto.", meets: "Cada produto tem uma imagem principal limpa e uma foto do tamanho iguais ao produto verdadeiro.", exceeds: "Cada produto também tem vários ângulos e um grande plano dos detalhes." },
      { name: "Envio e devoluções", objective: "O4", notYet: "Não há prazo de envio, ou há um prazo que não consegue cumprir; não há plano para atrasos.", meets: "Políticas escritas com um prazo de envio que consegue cumprir e uma mensagem de atraso que oferece reembolso.", exceeds: "A política de devoluções também diz claramente quem paga o envio da devolução e com que rapidez são feitos os reembolsos." },
      { name: "Respostas aos clientes", objective: "O5", notYet: "Menos de cinco modelos, ou um modelo que não corresponde às suas políticas.", meets: "Cinco modelos verificados, baseados nas suas políticas verdadeiras.", exceeds: "Os modelos também dizem quando o cliente vai ter resposta e como falar com uma pessoa." },
      { name: "E-mail e pedido de avaliação", objective: "O6", notYet: "O e-mail não tem morada nem forma de cancelar a subscrição, ou o pedido de avaliação oferece um prémio por boas avaliações.", meets: "O e-mail tem a sua morada e uma forma de cancelar a subscrição, e o pedido de avaliação pede avaliações honestas.", exceeds: "O pedido de avaliação vai para todos os compradores, não só para os que estão contentes." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que publicam pelo menos um anúncio de produto em 30 dias (inquérito de seguimento)",
      "Alunos que fazem a primeira venda online em 90 dias",
      "Alunos que começam outro curso de negócios da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "A câmara de um telefone e um fundo simples para as fotos dos produtos",
      "Um assistente de IA gratuito (como o ChatGPT, o Microsoft Copilot ou o Google Gemini) e uma ferramenta gratuita para tirar o fundo das imagens",
      "Um produto verdadeiro, ou um produto que pensa vender",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada aluno que traga um produto verdadeiro ou uma ideia clara de produto, para que a prática construa um kit de lançamento verdadeiro.",
      "Consultem juntos no site ftc.gov as páginas da regra de vendas à distância, das regras sobre avaliações e da lei CAN-SPAM, em vez de confiarem em resumos feitos pela IA.",
      "Lembre aos alunos que nunca colem nas ferramentas de IA os nomes, as moradas ou os dados das encomendas dos clientes.",
      "As taxas das plataformas mudam muitas vezes; peça aos alunos que vejam a página de preços de cada plataforma antes de escolherem uma.",
      "Avalie o kit de lançamento com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
