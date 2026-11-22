"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-selling-online.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// All money figures are examples, not real prices or fees, exactly as in the English.

const WA_BUSINESS = { name: "WhatsApp Business: a aplicação WhatsApp Business (perfil comercial, mostrar produtos e preços, mensagens de saudação e de ausência; em inglês)", url: "https://whatsappbusiness.com/products/business-app/" };
const NDPC = { name: "Comissão de Proteção de Dados da Nigéria (NDPC): Lei de Proteção de Dados da Nigéria de 2023 (em inglês)", url: "https://ndpc.gov.ng/" };
const ODPC = { name: "Gabinete do Comissário de Proteção de Dados, Quénia (Lei de Proteção de Dados de 2019; em inglês)", url: "https://www.odpc.go.ke/" };
const CBK_FRAUD = { name: "Banco Central do Quénia: segurança contra fraudes (em inglês)", url: "https://www.centralbank.go.ke/fraud-safety/" };
const CBN_CP = { name: "Banco Central da Nigéria: proteção do consumidor (em inglês)", url: "https://www.cbn.gov.ng/Documents/ConsumerProtection.html" };

module.exports = {
  id: "afr-selling-online-pt",
  lang: "pt",
  translationOf: "afr-selling-online",
  category: "Africa: Life and Work",
  name: "Vender pela Internet em África (WhatsApp Business, Mercados Online e Redes Sociais)",
  skills: "Escolher onde vender pela internet, Configurar o WhatsApp Business, Tirar fotos dos produtos e escrever anúncios, Responder aos clientes e fechar uma venda, Verificar pagamentos e evitar alertas falsos, Entregar e manter a confiança dos clientes",
  outcome: "receber encomendas dos seus produtos pelo telefone: criar um perfil e uma lista de produtos no WhatsApp Business, escrever anúncios que vendem, responder aos clientes e confirmar encomendas, verificar que o dinheiro chegou mesmo antes de enviar os produtos e entregar de uma forma que faz os clientes voltarem.",
  about: [
    "Hoje muitos clientes encontram vendedores no WhatsApp, no Facebook, no Instagram, no TikTok e em mercados online como a Jumia e o Jiji. Este curso é para comerciantes, artesãos, cozinheiros de casa, alfaiates, agricultores e donos de pequenas lojas no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim, em Marrocos e em toda a África que querem vender para lá da sua rua.",
    "Você vai escolher onde vender, criar um perfil e uma lista de produtos no WhatsApp Business, tirar boas fotos com um telefone simples, escrever anúncios com um preço claro, responder depressa aos clientes, confirmar encomendas por escrito, verificar pagamentos na sua própria aplicação de dinheiro móvel ou do banco, e planear entregas e devoluções.",
    "Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\" para o seu negócio. Funciona num telefone Android simples e gasta poucos dados. Os preços e valores de dinheiro do curso são exemplos, não preços nem taxas reais."
  ],
  finalTask: "Faça um plano de loja online de uma página para o seu negócio: onde vai vender e porquê, o texto do seu perfil no WhatsApp Business, três anúncios de produtos (notas sobre as fotos, título, preço na sua moeda, detalhes e entrega), uma mensagem guardada para confirmar encomendas, a sua regra para verificar pagamentos e a sua política de entregas e devoluções.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Comerciantes, vendedores de mercado, artesãos, cozinheiros de casa, alfaiates, cabeleireiros, agricultores e donos de pequenas lojas em cidades e aldeias de toda a África (Quénia, Nigéria, Gana, África Ocidental e Central francófona, Norte de África). Muitos são mulheres e jovens; muitos já conversam com clientes no WhatsApp.",
    startingPoint: "Sabem usar o WhatsApp para conversar e enviar fotos, e sabem receber dinheiro móvel. Poucos têm um perfil comercial, uma lista de produtos, preços claros na internet, confirmações de encomenda por escrito ou uma regra para verificar pagamentos. Alguns já foram enganados por mensagens de pagamento falsas.",
    gap: "Os clientes procuram e encomendam pelo telefone, mas muitos pequenos vendedores perdem vendas por responderem devagar, por preços pouco claros e por fotos fracas, e perdem dinheiro e produtos com alertas de pagamento falsos. Os alunos precisam de uma forma simples e segura de mostrar produtos, receber encomendas, verificar pagamentos e entregar, para que vender pela internet traga mais rendimento e não mais risco.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos falam a língua do curso como segunda língua (o curso também existe em inglês, francês e árabe)",
      "Aparelhos: um telefone Android simples, muitas vezes partilhado; dados caros, por isso as fotos e os vídeos são pequenos",
      "Dinheiro: pouco ou nenhum orçamento para publicidade; primeiro as ferramentas gratuitas",
      "Regras e taxas: as funções das aplicações, as comissões dos mercados online e as regras de proteção de dados mudam de país para país; os alunos verificam na aplicação, na página de vendedores do mercado online ou na entidade reguladora nacional",
      "Segurança: risco alto de fraude; nunca partilhe um PIN, uma palavra-passe ou um código de uso único"
    ],
    prerequisites: "Saber enviar mensagens e fotos no WhatsApp. Ajuda ter feito: \"Usar o Dinheiro Móvel com Segurança\" nesta categoria."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os seus produtos, os seus clientes e dois ou três canais online", action: "escolher onde vender pela internet e escrever porquê", standard: "dizendo, para cada canal, o custo, o esforço e quem compra lá" },
    { id: "O2", condition: "Usando um telefone com a aplicação WhatsApp Business", action: "criar um perfil comercial e uma lista de produtos com preços", standard: "com nome, descrição curta, horário, zona servida e pelo menos três produtos" },
    { id: "O3", condition: "Com um dos seus produtos", action: "tirar uma foto clara e escrever um anúncio com título, preço, detalhes e entrega", standard: "para que um cliente possa encomendar sem fazer uma pergunta básica" },
    { id: "O4", condition: "Quando um cliente envia uma pergunta ou uma encomenda", action: "responder com educação e confirmar a encomenda por escrito", standard: "dentro do seu horário, com artigo, quantidade, preço, entrega e pagamento numa só mensagem" },
    { id: "O5", condition: "Antes de enviar produtos pagos por dinheiro móvel ou transferência bancária", action: "verificar na sua própria aplicação ou na mensagem oficial do fornecedor que o dinheiro chegou", standard: "sem nunca confiar numa captura de ecrã, numa mensagem reencaminhada ou numa chamada, e sem nunca partilhar um PIN" },
    { id: "O6", condition: "Quando entrega uma encomenda", action: "escrever e seguir uma política de entregas e devoluções que protege a confiança e os dados dos clientes", standard: "dizendo as zonas de entrega, o custo, o tempo e as devoluções, e mantendo privados os números dos clientes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Abrir a sua loja na internet",
      lessons: [
        {
          title: "Escolher onde vender pela internet",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher um ou dois lugares para vender pela internet que sirvam os seus produtos e clientes.",
          text: [
            "Não precisa de estar em todo o lado. Escolha onde os seus clientes já estão e onde consegue acompanhar as mensagens. Vender pela internet é como abrir uma segunda banca: só funciona se houver alguém lá para atender.",
            "Aplicações de conversa como o WhatsApp são boas para clientes habituais e vizinhos. As redes sociais como o Facebook, o Instagram e o TikTok ajudam pessoas novas a descobri-lo com fotos e vídeos curtos. Os mercados online como a Jumia, o Jiji, a Kilimall e a Konga já têm muitos compradores à procura, mas têm regras, e alguns ficam com uma comissão (uma parte de cada venda) ou cobram por anúncios promovidos.",
            "Para cada canal, escreva três coisas: quem compra lá, quanto custa (dados, comissão, publicidade, entrega) e quanto tempo leva por dia. Exemplo: a Ama, em Kumasi, vende missangas. Ela fica com o WhatsApp para os clientes habituais e junta o Instagram para chegar a compradores novos em Acra. Um sapateiro em Dacar pode começar com o WhatsApp e o Facebook, e juntar um mercado online mais tarde.",
            "Antes de entrar num mercado online, leia a página de vendedores dele: quanto cobra, como lhe paga, quando, e o que acontece com as devoluções. Isto muda, por isso verifique no próprio site do mercado online, não numa mensagem reencaminhada."
          ],
          steps: ["Faça a lista dos lugares onde os seus clientes já conversam, veem publicações e compram.", "Para cada canal, escreva quem compra lá, o custo e o tempo que leva.", "Escolha um canal principal e, no máximo, mais um.", "Para um mercado online, leia a própria página de vendedores dele sobre taxas, pagamentos e devoluções."],
          words: [["Canal", "um lugar onde vende ou fala com clientes, como o WhatsApp, o Facebook ou um mercado online."], ["Mercado online", "um site ou aplicação onde muitos vendedores mostram produtos e os compradores procuram, como a Jumia ou o Jiji."], ["Comissão", "uma parte de cada venda que um mercado online fica como taxa."]],
          slides: [
            { title: "Venda onde os seus clientes estão", bullets: ["Só onde consegue responder às mensagens", "A internet é uma segunda banca: alguém tem de atender"] },
            { title: "Três tipos de canal", bullets: ["Aplicações de conversa: WhatsApp para clientes habituais", "Redes sociais: Facebook, Instagram, TikTok para ser descoberto", "Mercados online: Jumia, Jiji, Kilimall, Konga"] },
            { title: "Compare cada canal", bullets: ["Quem compra lá", "Quanto custa: dados, comissão, publicidade, entrega", "Quanto tempo leva por dia"] },
            { title: "Comece pequeno", bullets: ["Um canal principal, no máximo mais um", "Leia primeiro a página de vendedores do mercado online"] }
          ],
          tryIt: "Desenhe uma pequena tabela com os seus dois ou três canais possíveis. Para cada um, escreva quem compra lá, quanto custa e o tempo que leva. Faça um círculo à volta daquele com que vai começar.",
          youCanNow: "comparar canais online pelo custo, pelo esforço e pelos clientes, e escolher por onde começar.",
          quickCheck: [
            { objective: "O1", q: "Consegue responder a mensagens uma hora por dia. Qual é o melhor começo?", options: ["Abrir contas em seis aplicações ao mesmo tempo", "Começar com um canal principal que consegue acompanhar", "Publicar uma vez e nunca responder", "Pagar publicidade antes de ter uma lista de produtos"], answer: 1, why: "Um canal só funciona se responder aos clientes, por isso comece com o que consegue acompanhar." },
            { objective: "O1", q: "Onde verifica quanto um mercado online cobra aos vendedores?", options: ["Numa mensagem reencaminhada no WhatsApp", "Num palpite de um amigo", "Na própria página de vendedores do mercado online", "Num comentário debaixo de um vídeo"], answer: 2, why: "As taxas e as regras mudam, e só a própria página do mercado online é de confiança." }
          ]
        },
        {
          title: "Configurar o WhatsApp Business: perfil e lista de produtos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Criar um perfil no WhatsApp Business e uma lista de produtos com preços.",
          text: [
            "O WhatsApp Business é uma aplicação diferente do WhatsApp normal, feita pela mesma empresa para pequenos negócios. Instale-a só a partir da loja de aplicações oficial (Google Play no Android). Ela deixa mostrar um perfil comercial, mostrar os seus produtos com preços e enviar mensagens de saudação e de ausência.",
            "O seu perfil comercial é a placa da sua loja. Preencha o nome do negócio, uma descrição curta do que vende, a sua zona ou morada, o seu horário e como os clientes podem pagar. Use um logótipo claro ou uma foto da sua banca ou do seu melhor produto.",
            "Depois junte os seus produtos à lista de produtos (em muitas versões a aplicação chama-lhe catálogo): uma foto, um nome, um preço na sua moeda e uma descrição curta. Os clientes podem ver a lista e enviar-lhe um artigo na conversa. Exemplo: a Wanjiku, em Nakuru, junta \"Sandálias masai com missangas, números 37-41, KES 1,200\" (um preço de exemplo).",
            "Os menus mudam de telefone para telefone e de versão para versão. Se não encontrar uma opção, abra as definições da aplicação e procure as ferramentas comerciais. Também pode criar uma mensagem curta de saudação para clientes novos e uma mensagem de ausência para quando está fechado."
          ],
          steps: ["Instale o WhatsApp Business a partir da loja de aplicações oficial.", "Preencha o perfil comercial: nome, descrição, zona, horário, formas de pagamento.", "Junte um logótipo ou uma foto clara.", "Junte pelo menos três produtos com foto, nome, preço e descrição curta.", "Crie uma mensagem de saudação e uma mensagem de ausência."],
          words: [["Perfil comercial", "a página que mostra aos clientes o nome do seu negócio, a descrição, o horário e o local."], ["Lista de produtos (catálogo)", "uma lista dos seus produtos com fotos e preços que os clientes podem ver na aplicação."], ["Mensagem de ausência", "uma resposta automática enviada quando está fechado."]],
          slides: [
            { title: "WhatsApp Business", bullets: ["Uma aplicação gratuita para pequenos negócios", "Instale só a partir da loja de aplicações oficial", "Perfil, lista de produtos, mensagens de saudação e de ausência"] },
            { title: "O seu perfil é a placa da sua loja", bullets: ["Nome do negócio e o que vende", "Zona ou morada e horário", "Como os clientes podem pagar", "Um logótipo ou uma foto clara"] },
            { title: "A sua lista de produtos", bullets: ["Foto, nome, preço na sua moeda", "Descrição curta: tamanho, cor, quantidade", "Pelo menos três produtos para começar"] },
            { title: "Mensagens automáticas", bullets: ["Saudação para clientes novos", "Mensagem de ausência quando está fechado", "Os menus mudam: procure em definições, ferramentas comerciais"] }
          ],
          tryIt: "Instale o WhatsApp Business (ou abra-o, se já o tem). Preencha o seu perfil e junte três produtos com uma foto, um nome, um preço e uma linha de descrição. Peça a um amigo para ver e dizer-lhe uma coisa que não está clara.",
          youCanNow: "criar um perfil no WhatsApp Business e uma lista de produtos que os clientes podem ver.",
          quickCheck: [
            { objective: "O2", q: "Que dado pertence ao seu perfil comercial?", options: ["O PIN do seu dinheiro móvel", "O seu horário", "Os números de telefone dos seus clientes", "A sua palavra-passe"], answer: 1, why: "O horário diz aos clientes quando vai responder; PINs, palavras-passe e números dos clientes ficam privados." },
            { objective: "O2", q: "Um produto da sua lista tem foto mas não tem preço. O que junta?", options: ["Nada; os clientes gostam de perguntar", "A morada da sua casa", "Uma história comprida sobre a loja", "O preço na sua moeda"], answer: 3, why: "Um preço claro poupa tempo e evita que os clientes se vão embora sem perguntar." }
          ],
          sources: [WA_BUSINESS]
        },
        {
          title: "Fotos e anúncios que vendem",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tirar uma foto clara de um produto e escrever um anúncio a partir do qual um cliente pode encomendar.",
          text: [
            "Um cliente na internet não pode tocar no seu produto, por isso a foto e as palavras têm de fazer esse trabalho. Tire fotos com luz do dia, perto de uma janela ou lá fora à sombra. Use um fundo simples, como um pano ou uma parede. Limpe a lente da câmara. Mostre o produto inteiro, depois um grande plano, e algo que mostre o tamanho, como uma mão.",
            "Um bom anúncio responde às perguntas do cliente antes de ele perguntar: um título claro (o que é), o preço na sua moeda, o tamanho, a cor, a quantidade ou o peso, de que é feito, e como e onde entrega. Exemplo: \"Creme corporal de manteiga de karité, frasco de 250 g, sem perfume, GHS 60. Entrega em Tamale hoje; outras cidades por encomenda de autocarro.\" (um preço de exemplo).",
            "Seja honesto. Mostre o produto verdadeiro, não uma imagem da internet, e diga se as cores podem variar. Fotos honestas dão menos devoluções e mais confiança. Mantenha os ficheiros pequenos para poupar dados: uma foto clara é melhor do que dez desfocadas."
          ],
          steps: ["Limpe o produto e a lente da câmara.", "Use a luz do dia e um fundo simples.", "Tire uma foto inteira, um grande plano e uma que mostre o tamanho.", "Escreva título, preço, tamanho ou peso, material e entrega.", "Leia como um cliente: consegue encomendar sem fazer uma pergunta?"],
          words: [["Anúncio", "a foto e as palavras que mostram um produto à venda."], ["Grande plano", "uma foto tirada perto do produto para mostrar os pormenores."]],
          slides: [
            { title: "Fotos em que os clientes confiam", bullets: ["Luz do dia, fundo simples, lente limpa", "Produto inteiro, um grande plano e algo para mostrar o tamanho", "O seu produto verdadeiro, nunca uma imagem da internet"] },
            { title: "Um anúncio que responde às perguntas", bullets: ["Título: o que é", "Preço na sua moeda", "Tamanho, cor, peso, material", "Como e onde entrega"] },
            { title: "Poupe dados, ganhe confiança", bullets: ["Uma foto clara vale mais do que dez desfocadas", "Diga se as cores podem variar", "Anúncios honestos dão menos devoluções"] }
          ],
          tryIt: "Escolha um produto. Tire três fotos (inteiro, grande plano, tamanho) com luz do dia num fundo simples. Escreva um anúncio com título, preço, detalhes e entrega. Leia-o como um cliente e corrija tudo aquilo sobre que teria de perguntar.",
          youCanNow: "tirar fotos claras dos produtos com um telefone simples e escrever um anúncio a partir do qual os clientes podem encomendar.",
          quickCheck: [
            { objective: "O3", q: "Qual é a melhor luz para a foto de um produto?", options: ["Luz do dia perto de uma janela ou à sombra", "Um quarto escuro com o flash ligado", "Debaixo de uma lâmpada colorida", "Lá fora à noite"], answer: 0, why: "A luz suave do dia mostra as cores verdadeiras e os pormenores sem sombras fortes." },
            { objective: "O3", q: "Que anúncio deixa um cliente encomendar sem perguntar?", options: ["\"Mala bonita. Mande mensagem.\"", "\"Mala à venda\"", "\"Mala de couro\"", "\"Mala de mão de couro castanho, 30 x 25 cm, NGN 18,000, entrega em Lagos em 2 dias\""], answer: 3, why: "Diz o que é, o tamanho, o preço e a entrega, por isso o cliente pode decidir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Abrir a sua loja na internet",
        questions: [
          { objective: "O1", q: "Que três coisas compara para cada canal online?", options: ["Quem compra lá, quanto custa e o tempo que leva", "O logótipo, a cor e a idade", "Quantos amigos o usam para conversar", "Só se é novo"], answer: 0, why: "Os clientes, o custo e o tempo decidem se um canal lhe vai dar dinheiro." },
          { objective: "O1", q: "Um mercado online fica com uma parte de cada venda. Como se chama isso?", options: ["Um depósito", "Um reembolso", "Uma comissão", "Uma saudação"], answer: 2, why: "A comissão é a parte de cada venda que um mercado online fica como taxa." },
          { objective: "O2", q: "Onde deve obter a aplicação WhatsApp Business?", options: ["Num link de um número desconhecido", "Na loja de aplicações oficial", "Num ficheiro que um desconhecido lhe envia", "Num anúncio que aparece no ecrã"], answer: 1, why: "A loja de aplicações oficial mantém as aplicações falsas e os vírus fora do seu telefone." },
          { objective: "O2", q: "Fecha às 19h. O que ajuda os clientes que enviam mensagem à noite?", options: ["Desligar o telefone para sempre", "Apagar as mensagens deles", "Responder com o seu PIN", "Uma mensagem de ausência a dizer quando vai responder"], answer: 3, why: "Uma mensagem de ausência diz aos clientes que viu a mensagem e quando vai responder." },
          { objective: "O3", q: "O seu produto tem cores que parecem diferentes nos ecrãs. O que escreve?", options: ["Nada", "\"As cores podem variar um pouco em relação à foto\"", "\"Nunca aceitamos devoluções\"", "Usa uma imagem mais bonita da internet"], answer: 1, why: "Ser honesto sobre as cores evita queixas e cria confiança." }
        ]
      }
    },
    {
      name: "Capítulo 2: Vender, receber o pagamento e entregar",
      lessons: [
        {
          title: "Responder aos clientes e fechar a venda",
          objectives: ["O4"],
          minutes: 5,
          goal: "Responder a um cliente e confirmar uma encomenda numa só mensagem clara.",
          text: [
            "Na internet, o vendedor que responde primeiro e com clareza muitas vezes fica com a venda. Responda dentro do seu horário, cumprimente o cliente e responda exatamente à pergunta. Se não souber, diga quando vai saber.",
            "Guarde respostas curtas que envia muitas vezes, como a lista de preços, as zonas de entrega e as formas de pagamento. O WhatsApp Business deixa guardar respostas e usá-las outra vez; os menus mudam, por isso procure nas ferramentas comerciais. Isto poupa escrita e mantém as suas respostas iguais todas as vezes.",
            "Quando o cliente estiver pronto, confirme a encomenda numa só mensagem: artigo, quantidade, preço, local e custo da entrega, dia da entrega, e como vai pagar. Peça-lhe para responder \"Sim\" para confirmar. Exemplo de Abidjan: \"Bonjour Awa. Encomenda: 2 vestidos de tecido wax, tamanho M, 15,000 XOF cada = 30,000 XOF. Entrega em Cocody no sábado, 1,000 XOF. Pagamento por dinheiro móvel antes da entrega. Responda OUI para confirmar.\" (preços de exemplo).",
            "Mantenha a educação, mesmo quando um cliente regateia muito ou é mal-educado. Nunca envie insultos nem publique as mensagens de um cliente."
          ],
          steps: ["Cumprimente o cliente e responda exatamente à pergunta.", "Use uma resposta guardada para a lista de preços, a entrega e o pagamento.", "Confirme: artigo, quantidade, preço, local, custo e dia da entrega, forma de pagamento.", "Peça ao cliente para responder \"Sim\" antes de preparar a encomenda."],
          words: [["Resposta guardada (resposta rápida)", "uma mensagem que guarda na aplicação e volta a enviar com poucos toques."], ["Confirmação da encomenda", "uma mensagem que diz tudo o que o cliente aceitou comprar e como vai ser pago e entregue."]],
          slides: [
            { title: "Respostas rápidas e claras ganham vendas", bullets: ["Responda dentro do seu horário", "Cumprimente e responda exatamente à pergunta", "Não sabe? Diga quando vai saber"] },
            { title: "Guarde as respostas que envia muitas vezes", bullets: ["Lista de preços", "Zonas e custos de entrega", "Formas de pagamento"] },
            { title: "Confirme cada encomenda por escrito", bullets: ["Artigo, quantidade e preço", "Local, custo e dia da entrega", "Forma de pagamento", "O cliente responde \"Sim\" para confirmar"] }
          ],
          tryIt: "Escreva e guarde uma mensagem de confirmação de encomenda para o seu negócio, com espaços para artigo, quantidade, preço, entrega e pagamento. Depois preencha-a para uma encomenda de faz de conta.",
          youCanNow: "responder aos clientes com clareza e confirmar cada encomenda numa só mensagem escrita.",
          quickCheck: [
            { objective: "O4", q: "Que confirmação de encomenda está completa?", options: ["\"OK, vai já.\"", "\"2 malas, KES 1,500 cada = KES 3,000. Entrega na cidade de Kisumu na sexta-feira, KES 200. Pague por M-Pesa. Responda SIM.\"", "\"Envie o dinheiro.\"", "\"Obrigado pela conversa!\""], answer: 1, why: "Diz o artigo, a quantidade, o preço, a entrega e o pagamento, e pede ao cliente para confirmar." },
            { objective: "O4", q: "Porque guardar as respostas que envia muitas vezes?", options: ["Para as respostas serem rápidas e iguais todas as vezes", "Para o cliente pagar mais", "Para nunca ler as mensagens", "Para poder partilhar os números dos clientes"], answer: 0, why: "As respostas guardadas poupam escrita e mantêm os seus preços e regras sempre iguais." }
          ]
        },
        {
          title: "Receber com segurança: travar os alertas de pagamento falsos",
          objectives: ["O5"],
          minutes: 6,
          goal: "Verificar que um pagamento chegou mesmo antes de entregar os produtos.",
          text: [
            "Muitos vendedores online recebem por dinheiro móvel (M-Pesa, MTN MoMo, Orange Money, Wave), por transferência bancária ou em dinheiro na entrega. Os burlões sabem disso. Um truque comum é o alerta de pagamento falso: uma SMS, uma captura de ecrã ou uma mensagem reencaminhada que parece um pagamento, mas não chegou dinheiro nenhum.",
            "A sua regra: os produtos só saem quando o dinheiro aparece na sua própria conta. Abra a sua própria aplicação de dinheiro móvel ou do banco, ou marque o código oficial do seu fornecedor, e veja o saldo ou a transação. Uma captura de ecrã do cliente não é prova. Uma SMS de um número de telefone normal não é prova.",
            "Outro truque: \"Enviei-lhe dinheiro por engano, por favor devolva.\" Não envie nada. Verifique você mesmo o seu saldo; se houver mesmo um pagamento enviado por engano, o seu fornecedor pode revertê-lo pelo seu próprio processo. Um fornecedor verdadeiro nunca pede o seu PIN, a sua palavra-passe ou um código de uso único. Nunca os partilhe, nem com alguém que diz ser da empresa.",
            "No pagamento em dinheiro na entrega, conte o dinheiro antes de entregar a encomenda e conheça as notas da sua moeda. Cada banco central publica avisos sobre fraudes, por exemplo o Banco Central do Quénia e o Banco Central da Nigéria."
          ],
          steps: ["Combine a forma de pagamento na confirmação da encomenda.", "Quando o cliente disser que pagou, abra a sua própria aplicação ou marque o código oficial do seu fornecedor.", "Verifique o valor e quem enviou no seu saldo ou extrato.", "Só então entregue ou envie os produtos.", "Ignore pedidos de \"devolva o meu dinheiro enviado por engano\"; deixe o fornecedor tratar das reversões."],
          words: [["Alerta de pagamento falso", "uma SMS, captura de ecrã ou mensagem feita para parecer um pagamento quando não foi enviado dinheiro nenhum."], ["PIN", "o seu número secreto do dinheiro móvel ou do banco. Só você o deve saber."], ["Reversão", "quando um pagamento é devolvido; uma reversão verdadeira é feita pelo seu fornecedor, não por você a enviar dinheiro a um desconhecido."]],
          slides: [
            { title: "O truque do pagamento falso", bullets: ["Uma SMS ou captura de ecrã que parece que o dinheiro chegou", "Nenhum dinheiro na sua conta", "O burlão vai-se embora com os seus produtos"] },
            { title: "A sua regra", bullets: ["Os produtos só saem quando o dinheiro está na SUA conta", "Verifique na sua própria aplicação ou no código oficial", "Uma captura de ecrã não é prova"] },
            { title: "\"Enviei por engano\"", bullets: ["Não devolva nada você mesmo", "Verifique o seu próprio saldo", "As reversões verdadeiras passam pelo seu fornecedor"] },
            { title: "Nunca partilhe", bullets: ["O seu PIN ou a sua palavra-passe", "Um código de uso único", "Um fornecedor verdadeiro nunca os pede"] }
          ],
          tryIt: "Escreva a sua regra de pagamento num papel e cole-a perto do lugar onde embala as encomendas. Depois pratique: abra a sua própria aplicação de dinheiro móvel ou do banco e encontre onde vê a sua última transação.",
          youCanNow: "verificar que o dinheiro chegou mesmo à sua própria conta antes de enviar os produtos, e recusar truques de pagamentos falsos e de reversões.",
          quickCheck: [
            { objective: "O5", q: "Um cliente envia uma captura de ecrã de um pagamento. O que faz?", options: ["Envia logo os produtos", "Pede uma captura de ecrã maior", "Procura o dinheiro na sua própria aplicação ou no código oficial", "Envia-lhe o seu PIN para ele verificar"], answer: 2, why: "Só a sua própria conta mostra se o dinheiro chegou mesmo; as capturas de ecrã podem ser falsificadas." },
            { objective: "O5", q: "Alguém diz que lhe enviou dinheiro por engano e pede para devolver. O que é mais seguro?", options: ["Devolver logo", "Verificar o seu próprio saldo e deixar o fornecedor tratar de qualquer reversão", "Dar-lhe o seu PIN para ele o tirar", "Enviar o dobro para ser simpático"], answer: 1, why: "Este é um truque comum; um pagamento verdadeiro enviado por engano é revertido pelo fornecedor." }
          ],
          sources: [CBK_FRAUD, CBN_CP]
        },
        {
          title: "Entregas, devoluções e manter a confiança dos clientes",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escrever uma política de entregas e devoluções e manter privados os dados dos clientes.",
          text: [
            "Os clientes voltam quando a entrega é de confiança. Escreva as suas zonas de entrega, o custo para cada uma, quanto tempo leva e como envia: em mão, por um mototaxista (boda boda ou okada), por um serviço de encomendas de autocarro ou por uma transportadora. Embale bem os produtos e envie uma mensagem ao cliente quando a encomenda sai, com o nome do mototaxista ou o número da encomenda.",
            "Uma política de devoluções diz o que acontece se alguma coisa estiver errada: por exemplo, \"Tamanho errado? Avise-nos em 2 dias e trocamos, se não tiver sido usado.\" Mantenha-a curta e justa, e siga-a todas as vezes. Em Marrocos, um vendedor em Casablanca pode dizer: troca em 3 dias, o cliente paga o envio de volta, a não ser que o artigo tenha defeito.",
            "Os números de telefone, as moradas e as encomendas dos clientes são privados. Não os partilhe, não os publique e não junte pessoas a grupos ou listas de transmissão sem perguntar. Muitos países têm leis de proteção de dados, por exemplo a Lei de Proteção de Dados do Quénia e a Lei de Proteção de Dados da Nigéria de 2023. Quando não tiver a certeza do que se aplica, consulte o gabinete nacional de proteção de dados.",
            "Depois da entrega, pergunte se está tudo bem e convide o cliente a deixar uma avaliação ou uma foto que pode partilhar, com a autorização dele."
          ],
          steps: ["Escreva as zonas de entrega, os custos, os tempos e como envia.", "Embale bem e envie uma mensagem quando a encomenda sai.", "Escreva uma política de devoluções curta e justa e siga-a.", "Mantenha privados os números e as moradas dos clientes; pergunte antes de juntar alguém a uma lista.", "Peça a opinião do cliente depois da entrega."],
          words: [["Política de devoluções", "a sua regra para o que acontece quando um cliente quer devolver ou trocar um produto."], ["Lista de transmissão", "uma lista no WhatsApp para enviar uma mensagem a muitos contactos; só a recebe quem guardou o seu número."], ["Dados pessoais", "informações sobre uma pessoa, como o nome, o número de telefone ou a morada."]],
          slides: [
            { title: "Entregas de confiança", bullets: ["Zonas, custo, tempo e como envia", "Embale bem", "Envie mensagem ao cliente quando a encomenda sai"] },
            { title: "Uma política de devoluções curta e justa", bullets: ["O que pode ser devolvido e quando", "Quem paga o envio de volta", "Siga-a todas as vezes"] },
            { title: "Os dados dos clientes são privados", bullets: ["Não partilhe nem publique números e moradas", "Pergunte antes de juntar alguém a uma lista", "Consulte o gabinete nacional de proteção de dados"] }
          ],
          tryIt: "Tarefa final: junte o seu plano de loja online de uma página: onde vende e porquê, o texto do seu perfil, três anúncios, a sua confirmação de encomenda guardada, a sua regra de pagamento e a sua política de entregas e devoluções.",
          youCanNow: "entregar com confiança, tratar das devoluções com justiça e manter privados os dados dos seus clientes.",
          quickCheck: [
            { objective: "O6", q: "O que deve ter uma política de entregas?", options: ["O seu PIN", "As moradas dos seus clientes", "Zonas de entrega, custo, tempo e como envia", "Só a palavra \"rápido\""], answer: 2, why: "As zonas, o custo, o tempo e o método dizem aos clientes exatamente o que esperar." },
            { objective: "O6", q: "Quer enviar uma lista de preços todas as semanas aos clientes. O que está certo?", options: ["Publicar todos os números deles num grupo público", "Vender os números deles a outro comerciante", "Juntar desconhecidos de uma lista comprada", "Perguntar primeiro aos clientes e manter os números deles privados"], answer: 3, why: "Os números dos clientes são dados pessoais; pergunte antes de lhes enviar mensagens em massa." }
          ],
          sources: [ODPC, NDPC]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Vender, receber o pagamento e entregar",
        questions: [
          { objective: "O4", q: "Um cliente faz uma pergunta a que não consegue responder agora. O que responde?", options: ["Nada", "Diz quando vai saber e volta a falar com ele", "Diz-lhe para ir a outro lado", "Envia uma mensagem de voz comprida sobre outra coisa"], answer: 1, why: "Dizer claramente quando vai responder mantém o cliente e cria confiança." },
          { objective: "O4", q: "O que faz o cliente depois da sua confirmação de encomenda?", options: ["Envia-lhe o PIN dele", "Nada", "Responde \"Sim\" para confirmar", "Paga o dobro"], answer: 2, why: "Um \"Sim\" por escrito mostra que os dois aceitaram a mesma encomenda." },
          { objective: "O5", q: "Quando podem os produtos sair da sua loja numa encomenda paga por dinheiro móvel?", options: ["Quando vê o dinheiro na sua própria conta", "Quando o cliente envia uma captura de ecrã", "Quando alguém liga a dizer que foi enviado", "Quando o cliente promete"], answer: 0, why: "Só o dinheiro na sua própria conta é prova de pagamento." },
          { objective: "O5", q: "Um homem liga a dizer que é da sua empresa de dinheiro móvel e precisa do seu PIN. O que é verdade?", options: ["Os funcionários verdadeiros podem pedi-lo", "Dê metade dele", "Envie-o antes por SMS", "Um fornecedor verdadeiro nunca pede o seu PIN; desligue"], answer: 3, why: "Os fornecedores verdadeiros nunca pedem o seu PIN; quem o pede é um burlão." },
          { objective: "O6", q: "Um cliente recebe o tamanho errado. O que ajuda mais?", options: ["Ignorar a mensagem", "Uma política de devoluções clara que segue todas as vezes", "Culpar o mototaxista", "Publicar a mensagem do cliente na internet"], answer: 1, why: "Uma política justa, seguida todas as vezes, resolve problemas e mantém os clientes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Vender pela Internet em África (WhatsApp Business, Mercados Online e Redes Sociais)",
    questions: [
      { objective: "O1", q: "Onde deve um pequeno vendedor começar a vender pela internet?", options: ["Em todo o lado ao mesmo tempo", "Onde os clientes já estão e onde o vendedor consegue acompanhar", "Só onde a publicidade é mais cara", "Onde mais ninguém vende nada"], answer: 1, why: "Um canal só funciona se os clientes estiverem lá e você lhes responder." },
      { objective: "O1", q: "Qual destes é um mercado online?", options: ["Jiji", "Uma mensagem de saudação", "O seu PIN", "Uma lista de transmissão"], answer: 0, why: "O Jiji, a Jumia, a Kilimall e a Konga são mercados online onde os compradores procuram entre muitos vendedores." },
      { objective: "O1", q: "As redes sociais como o Instagram e o TikTok ajudam sobretudo a:", options: ["Esconder os seus produtos", "Verificar pagamentos", "Ser descoberto por clientes novos com fotos e vídeos", "Evitar responder às mensagens"], answer: 2, why: "As redes sociais são boas para ser encontrado por pessoas que ainda não o conhecem." },
      { objective: "O2", q: "O WhatsApp Business é:", options: ["Um banco", "Um mercado online que cobra comissão", "Um anúncio pago", "Uma aplicação diferente para pequenos negócios, com perfil e lista de produtos"], answer: 3, why: "Junta um perfil comercial, produtos com preços e mensagens automáticas." },
      { objective: "O2", q: "O que pertence ao seu perfil comercial?", options: ["O seu horário e a zona que serve", "A sua palavra-passe", "As moradas dos seus clientes", "O seu código de uso único"], answer: 0, why: "O horário e a zona dizem aos clientes quando e onde atende." },
      { objective: "O2", q: "Cada produto da sua lista deve ter:", options: ["Só uma foto", "Uma foto, um nome, um preço e uma descrição curta", "O PIN do seu banco", "Nenhum preço, para os clientes perguntarem"], answer: 1, why: "Foto, nome, preço e descrição deixam os clientes escolher sem esperar." },
      { objective: "O3", q: "O melhor fundo para a foto de um produto é:", options: ["Uma rua movimentada", "Uma mesa desarrumada", "Um pano ou uma parede simples", "Um canto escuro"], answer: 2, why: "Um fundo simples mantém o olhar no produto." },
      { objective: "O3", q: "Porque mostrar uma mão ou uma moeda ao lado de um produto?", options: ["Para mostrar o tamanho", "Para esconder o produto", "Para o ficheiro ficar maior", "Os clientes gostam de mãos"], answer: 0, why: "Uma coisa conhecida na foto mostra o tamanho do produto." },
      { objective: "O3", q: "Pode usar uma foto mais bonita do mesmo produto tirada da internet?", options: ["Sim, sempre", "Sim, se for mais clara", "Só para artigos caros", "Não; mostre o seu produto verdadeiro para os clientes receberem o que veem"], answer: 3, why: "Fotos honestas evitam queixas e devoluções." },
      { objective: "O4", q: "Uma confirmação de encomenda diz:", options: ["Só o preço", "Artigo, quantidade, preço, entrega e pagamento", "O seu PIN e a sua palavra-passe", "Os nomes de outros clientes"], answer: 1, why: "Todos os detalhes numa só mensagem evitam mal-entendidos." },
      { objective: "O4", q: "Um cliente regateia muito e é mal-educado. O que faz?", options: ["Insulta-o também", "Publica as mensagens dele", "Mantém a educação e dá o seu melhor preço", "Bloqueia todos os clientes"], answer: 2, why: "Manter a educação protege o seu bom nome, mesmo que esta venda não aconteça." },
      { objective: "O4", q: "Uma resposta guardada (resposta rápida) serve melhor para:", options: ["A sua lista de preços e as zonas de entrega", "O seu PIN", "A morada de um cliente", "Mexericos"], answer: 0, why: "As mensagens que envia muitas vezes podem ser guardadas e enviadas com poucos toques." },
      { objective: "O5", q: "Uma SMS de um número de telefone normal diz \"Recebeu GHS 500\". Você:", options: ["Envia os produtos", "Agradece e envia os produtos", "Reencaminha-a aos amigos", "Primeiro verifica o seu próprio saldo de dinheiro móvel"], answer: 3, why: "Os alertas falsos vêm de números normais; só a sua própria conta é prova." },
      { objective: "O5", q: "Quem deve saber o PIN do seu dinheiro móvel?", options: ["Só você", "O cliente", "O mototaxista das entregas", "Qualquer pessoa da empresa que lhe ligue"], answer: 0, why: "O PIN é secreto; um fornecedor verdadeiro nunca o pede." },
      { objective: "O5", q: "Uma mensagem de \"pagamento por engano\" pede para devolver dinheiro. O passo mais seguro é:", options: ["Devolver depressa", "Devolver o dobro", "Verificar o seu próprio saldo e deixar o fornecedor tratar de qualquer reversão", "Partilhar o seu PIN com eles"], answer: 2, why: "As reversões verdadeiras passam pelo fornecedor, não por você a enviar dinheiro a um desconhecido." },
      { objective: "O5", q: "No pagamento em dinheiro na entrega, o mototaxista deve:", options: ["Entregar primeiro a encomenda", "Contar o dinheiro antes de entregar a encomenda", "Aceitar uma promessa de pagar depois", "Tirar uma foto do PIN do cliente"], answer: 1, why: "Contar primeiro faz com que os produtos só saiam quando o pagamento está na mão." },
      { objective: "O6", q: "Uma boa mensagem de entrega a um cliente diz:", options: ["Nada até chegar", "Que a encomenda saiu, com o nome do mototaxista ou o número da encomenda", "As moradas de outros clientes", "O seu PIN"], answer: 1, why: "Dizer aos clientes que a encomenda saiu, e como, cria confiança." },
      { objective: "O6", q: "Os números de telefone e as moradas dos clientes são:", options: ["Livres para partilhar", "Uma coisa para vender", "Dados pessoais que mantém privados", "Para publicações públicas"], answer: 2, why: "São dados pessoais; muitos países protegem-nos por lei." },
      { objective: "O6", q: "Uma política de devoluções deve ser:", options: ["Comprida e secreta", "Diferente para cada cliente", "Nunca escrita", "Curta, justa e seguida todas as vezes"], answer: 3, why: "Uma política clara e justa, que segue sempre, mantém a confiança dos clientes." },
      { objective: "O6", q: "Onde verifica as regras de proteção de dados do seu país?", options: ["No gabinete nacional de proteção de dados", "Num boato nas redes sociais", "Na opinião de um cliente", "Num anúncio de um mercado online"], answer: 0, why: "O gabinete nacional, como o ODPC do Quénia ou a NDPC da Nigéria, publica as regras." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 9, 12, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Onde vender", objective: "O1", notYet: "Nenhum canal escolhido, ou muitos canais sem razão.", meets: "Um ou dois canais escolhidos, com quem compra lá, o custo e o tempo de cada um.", exceeds: "Também diz o que o faria juntar ou deixar um canal depois de três meses." },
      { name: "Perfil e lista de produtos", objective: "O2", notYet: "Falta no perfil o nome, o horário ou a zona, ou há menos de três produtos.", meets: "Perfil com nome, descrição, zona, horário e pagamento, e pelo menos três produtos com preços.", exceeds: "Um amigo ou cliente viu-o e foi corrigido um ponto pouco claro." },
      { name: "Anúncios", objective: "O3", notYet: "Fotos desfocadas ou tiradas de outros, ou sem preço nem entrega.", meets: "Três anúncios com fotos verdadeiras e claras, título, preço na moeda local, detalhes e entrega.", exceeds: "Cada anúncio tem um grande plano e uma foto do tamanho, e notas honestas como a variação de cor." },
      { name: "Confirmação da encomenda", objective: "O4", notYet: "Nenhuma confirmação guardada, ou faltam detalhes.", meets: "Uma mensagem guardada com artigo, quantidade, preço, local, custo e dia da entrega, pagamento e um pedido para responder Sim.", exceeds: "Também tem respostas guardadas para preços, entrega e pagamento." },
      { name: "Regra de pagamento", objective: "O5", notYet: "Os produtos podem sair com uma captura de ecrã ou uma promessa, ou o PIN é partilhado.", meets: "Regra escrita: os produtos só saem quando o dinheiro aparece na sua própria conta; nunca partilhar um PIN ou um código.", exceeds: "Também trata dos pedidos de pagamento por engano e da contagem do dinheiro na entrega." },
      { name: "Entregas, devoluções e dados", objective: "O6", notYet: "Sem detalhes de entrega nem regra de devoluções, ou os dados dos clientes são partilhados.", meets: "Zonas, custo, tempo e método de entrega, uma política de devoluções curta e o compromisso de manter privados os dados dos clientes.", exceeds: "Pergunta aos clientes antes de os juntar a qualquer lista e pede a opinião deles depois da entrega." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter recebido a primeira encomenda online, ou mais, em 30 dias (inquérito de seguimento)",
      "Alunos que dizem não ter perdido nada com alertas de pagamento falsos nos 30 dias depois do curso",
      "Alunos que dizem ter vendas mensais mais altas depois de três meses (seguimento do programa)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone Android com o WhatsApp Business instalado a partir da loja de aplicações oficial",
      "Três produtos (ou fotos deles) para anunciar",
      "Papel e caneta para a tabela de canais, as políticas e a regra de pagamento",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Em grupo, façam juntos o teste inicial e depois um capítulo por sessão, com os alunos a criarem o perfil ao vivo e a ajudarem-se uns aos outros.",
      "Façam a lição das fotos lá fora, com luz do dia; os alunos trocam de telefone e veem os anúncios uns dos outros.",
      "Façam o teatro de um alerta de pagamento falso e de uma chamada de \"pagamento por engano\". Nunca peça aos alunos para mostrarem um PIN, um saldo ou um extrato verdadeiros.",
      "Lembre aos alunos que os menus das aplicações, as taxas dos mercados online e as regras de dados mudam, e que devem verificar na aplicação, na página de vendedores do mercado online ou na entidade reguladora nacional.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
