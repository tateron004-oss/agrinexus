"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-influencer-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// NIL and endorsement rules change: sources are the FTC, NCAA and College Sports Commission pages checked 27-28 October 2026 (US rules kept as US).

module.exports = {
  id: "athletes-influencer-marketing-pt",
  lang: "pt",
  translationOf: "athletes-influencer-marketing",
  category: "Athletes",
  name: "Marketing de Influência para Atletas",
  skills: "Encontrar marcas que combinam consigo, Criar um kit de média de uma página, Escrever uma proposta a uma marca com IA, Reconhecer sinais de alerta num contrato, Identificar publicações patrocinadas e cumprir as regras de NIL",
  outcome: "criar um kit de média de uma página, enviar a uma marca que combina consigo uma proposta escrita com a ajuda da IA, rever um acordo com um adulto de confiança para encontrar sinais de alerta e publicar conteúdo patrocinado com uma identificação clara ao estilo da FTC, cumprindo as regras de NIL da sua escola e do seu estado.",
  about: [
    "Este curso é para atletas que querem trabalhar com marcas nas redes sociais através de acordos de nome, imagem e semelhança (NIL, na sigla em inglês), e para os treinadores e pais que os orientam.",
    "Marketing de influência quer dizer que uma marca lhe paga, em dinheiro ou em produtos, para mostrar o produto dela ao seu público. Vai aprender a encontrar marcas que combinam consigo, a mostrar o seu valor com um kit de média, a fazer uma proposta profissional, a reconhecer maus acordos e a ser honesto e cumprir as regras.",
    "As regras de NIL são diferentes no ensino secundário, nas divisões universitárias e em cada estado, e mudam. Este curso ensina as habilidades e mostra as páginas oficiais; confirme sempre as regras atuais com o gabinete de conformidade da sua escola ou com a associação atlética escolar do seu estado antes de assinar qualquer coisa. Não é aconselhamento jurídico nem fiscal."
  ],
  finalTask: "Crie um kit de média de uma página, escolha uma marca que combina com os seus valores e o seu público, escreva uma proposta com IA e corrija-a com a sua própria voz, e escreva uma lista dos sinais de alerta e das regras que vai verificar antes de assinar (incluindo a quem vai perguntar na sua escola ou no seu estado). Se conseguir um acordo, publique-o com uma identificação clara na própria publicação.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário e da universidade que querem trabalhar com marcas nas redes sociais através de acordos de nome, imagem e semelhança (NIL), e os treinadores e pais que os orientam.",
    startingPoint: "Têm contas nas redes sociais e alguns seguidores e já ouviram falar de acordos de NIL. Poucos conhecem as regras da NCAA ou do estado, têm um kit de média, já fizeram uma proposta a uma marca ou sabem reconhecer sinais de alerta num contrato.",
    gap: "Os atletas podem perder a elegibilidade, dinheiro ou os direitos sobre a sua própria imagem se assinarem maus acordos, quebrarem as regras da escola ou do estado ou não identificarem as publicações patrocinadas. Conhecer as regras, mostrar números verdadeiros e verificar os acordos com um adulto de confiança permite-lhes ganhar dinheiro com segurança e honestidade.",
    constraints: [
      "Linguagem simples, cerca do nível de leitura do 8.º ano",
      "Um telefone com redes sociais, um assistente de IA gratuito e o Canva",
      "Cerca de 60 minutos no total",
      "As regras de NIL da NCAA, da NAIA, das associações estaduais e das escolas são diferentes e mudam; confirme com o gabinete de conformidade ou o diretor desportivo",
      "Os atletas com menos de 18 anos envolvem um pai, uma mãe ou um tutor; isto é educação, não aconselhamento jurídico nem fiscal"
    ],
    prerequisites: "Nenhum. O curso \"Marca Pessoal nas Redes Sociais para Atletas\" é um bom primeiro passo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Conforme o nível do seu desporto", action: "explicar o que é um acordo de NIL e que regras se aplicam a si, incluindo o que não é permitido", standard: "dizendo a quem perguntar na sua escola ou no seu estado e que os rendimentos de NIL normalmente pagam impostos" },
    { id: "O2", condition: "Com os produtos e os negócios locais que usa", action: "fazer uma lista de cinco marcas que combinam com os seus valores e o seu público", standard: "com todas as categorias proibidas pela sua escola ou pelo seu estado riscadas" },
    { id: "O3", condition: "Usando as estatísticas das suas aplicações e um modelo do Canva", action: "criar um kit de média de uma página com a sua biografia, os seus canais, números verdadeiros, o seu público, o que oferece e um contacto seguro", standard: "com todos os números verdadeiros, atuais e com data" },
    { id: "O4", condition: "Usando um rascunho feito pela IA", action: "escrever uma proposta para o contacto oficial de uma marca", standard: "com menos de 150 palavras, com a sua voz, uma razão concreta e verdadeira, uma ideia e o seu kit de média, e com um pai ou tutor envolvido se tiver menos de 18 anos" },
    { id: "O5", condition: "Com um acordo escrito", action: "verificar o acordo com um adulto de confiança para encontrar sinais de alerta antes de assinar", standard: "verificando o trabalho, o pagamento, a duração e como terminá-lo, e recusando assinar sob pressão" },
    { id: "O6", condition: "Em qualquer publicação em que uma marca lhe deu alguma coisa", action: "escrever uma publicação patrocinada com uma identificação clara perto do início", standard: "dita e mostrada no vídeo, não escondida nas hashtags nem na biografia, e sem nenhuma afirmação que não possa provar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se para trabalhar com marcas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Como funcionam os acordos de influência para atletas",
          minutes: 5,
          goal: "Explicar o que é um acordo de NIL e o que é permitido aos atletas universitários.",
          text: [
            "Um acordo de NIL paga-lhe, em dinheiro, produtos ou serviços, por deixar uma empresa usar o seu nome, a sua imagem ou a sua semelhança: publicações nas redes sociais, presenças em eventos, campos de treino, autógrafos ou anúncios.",
            "Para os atletas universitários da NCAA (a associação nacional do desporto universitário dos Estados Unidos), a página de NIL da NCAA diz que os acordos devem pagar-lhe pelo uso do seu NIL, ter um verdadeiro objetivo comercial e pagar um valor razoável. O pagamento para jogar (\"pay-for-play\"), ou seja, pagar para frequentar ou jogar por uma escola ou pagar conforme o seu desempenho, não é permitido. No momento em que este curso foi escrito, os atletas da Divisão I têm de declarar os acordos com terceiros de $600 ou mais através do NIL Go, gerido pela College Sports Commission; peça os detalhes atuais ao seu gabinete de conformidade.",
            "No ensino secundário, as regras de NIL são definidas pela associação atlética escolar de cada estado e pela lei estadual; alguns estados permitem com limites. Verifique as do seu estado antes de qualquer acordo. Os rendimentos de NIL normalmente pagam impostos, por isso guarde registos e fale com um profissional de impostos."
          ],
          steps: ["Descubra o seu nível: ensino secundário, divisão da NCAA, NAIA, universidade comunitária ou profissional.", "Leia a política de NIL da sua escola ou as regras da associação do seu estado.", "Fale com o seu gabinete de conformidade ou o diretor desportivo.", "Guarde um registo de cada acordo e de cada pagamento."],
          words: [["NIL", "nome, imagem e semelhança (em inglês, name, image and likeness): ganhar dinheiro com o seu nome, a sua foto ou a sua marca pessoal."], ["Pagamento para jogar (pay-for-play)", "pagar para frequentar ou competir por uma escola, ou pagar conforme o desempenho desportivo; não é permitido pelas regras da NCAA."], ["Gabinete de conformidade", "o gabinete da escola que explica e verifica as regras desportivas."]],
          slides: [
            { title: "Um acordo de NIL", bullets: ["Pago em dinheiro, produtos ou serviços", "Publicações, presenças, campos de treino, autógrafos"] },
            { title: "O básico da NCAA (confirme as regras atuais)", bullets: ["Verdadeiro objetivo comercial, pagamento razoável", "Sem pagamento para jogar", "DI: declarar acordos de $600+ no NIL Go"] },
            { title: "Ensino secundário e impostos", bullets: ["Regras definidas pela associação do seu estado", "Os rendimentos de NIL normalmente pagam impostos", "Guarde registos; pergunte a um profissional de impostos"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: Student-Athlete NIL Deals", url: "https://www.collegesportscommission.org/nil/" },
            { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Encontre a página de NIL da sua escola ou da associação do seu estado e anote três regras que se aplicam a si e a quem perguntaria se tiver dúvidas.",
          youCanNow: "explicar como funcionam os acordos de NIL para atletas e encontrar as regras que se aplicam a si.",
          quickCheck: [
            { objective: "O1", q: "Em que pode ser pago um acordo de NIL?", options: ["Só em dinheiro vivo", "Só em créditos da escola", "Só em bilhetes para jogos", "Em dinheiro, produtos ou serviços"], answer: 3, why: "Os acordos de NIL podem pagar em dinheiro, produtos ou serviços pelo uso do seu nome, imagem ou semelhança." },
            { objective: "O1", q: "Recebe o seu primeiro pagamento de NIL. O que faz?", options: ["Guarda um registo e fala com um profissional de impostos", "Gasta-o e esquece", "Esconde-o da escola", "Devolve-o"], answer: 0, why: "Os rendimentos de NIL normalmente pagam impostos, por isso guarde registos e peça conselho sobre impostos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar marcas que combinam consigo",
          minutes: 5,
          goal: "Fazer uma lista de cinco marcas que combinam com os seus valores e o seu público.",
          text: [
            "Os melhores acordos são com marcas que já usa e em que acredita, e que interessam ao seu público. Um ginásio do bairro, uma bebida desportiva que bebe mesmo, uma aplicação de treino que usa ou um restaurante de família perto da sua escola.",
            "Comece pelo que está perto. Os negócios locais muitas vezes estão mais abertos a atletas jovens, e o seu público local é importante para eles. As marcas maiores muitas vezes trabalham através de agências ou de plataformas de NIL que a sua escola pode usar; pergunte ao gabinete de conformidade quais são aprovadas.",
            "Evite marcas que vão contra os seus valores, as regras da sua escola ou a sua idade; muitas escolas e estados proíbem categorias como álcool, tabaco, cigarros eletrónicos (vape), apostas e produtos para adultos."
          ],
          steps: ["Faça uma lista dos produtos e negócios locais que usa de verdade.", "Marque os que interessam ao seu público.", "Risque qualquer categoria que a sua escola ou o seu estado proíbe.", "Fique com os cinco melhores."],
          words: [["Combinar com a marca", "o quanto uma marca combina com os seus valores, a sua imagem e o seu público."], ["Plataforma de NIL", "um site ou aplicação que liga atletas a marcas para fazer acordos."]],
          slides: [
            { title: "As que combinam melhor", bullets: ["Marcas que já usa e em que acredita", "O seu público interessa-se por elas"] },
            { title: "Comece pelo que está perto", bullets: ["Ginásios, restaurantes, lojas perto de si", "Pergunte à conformidade que plataformas são aprovadas"] },
            { title: "Evite", bullets: ["Marcas que vão contra os seus valores", "Categorias proibidas: álcool, vape, apostas"] }
          ],
          tryIt: "Escreva uma lista de dez produtos ou negócios que usa. Pergunte a um assistente de IA quais combinam melhor com um público como o seu e depois escolha você mesmo os cinco melhores.",
          youCanNow: "escolher marcas que combinam com os seus valores, o seu público e as regras.",
          quickCheck: [
            { objective: "O2", q: "Porque começar pelos negócios locais?", options: ["Nunca dizem que não", "Muitas vezes estão abertos a atletas jovens e o seu público local interessa-lhes", "Pagam mais", "Não precisam de contratos"], answer: 1, why: "Os negócios locais muitas vezes estão mais abertos a atletas jovens e dão valor a um público local." },
            { objective: "O2", q: "Uma loja de vape oferece-lhe um acordo. O que faz?", options: ["Aceita se pagar bem", "Pede mais dinheiro", "Risca-a; muitas escolas e estados proíbem essa categoria", "Publica sobre ela sem acordo"], answer: 2, why: "Evite as categorias que a sua escola ou o seu estado proíbe, como o vape." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Criar o seu kit de média",
          minutes: 6,
          goal: "Fazer um kit de média de uma página que mostra às marcas o seu valor.",
          text: [
            "Um kit de média é um resumo de uma página que as marcas usam para decidir se você combina com elas. Mostra quem você é, quem é o seu público e o que pode fazer por elas.",
            "Inclua: uma boa foto e uma biografia curta; o seu desporto, a sua equipa e as suas conquistas; os seus canais com o número de seguidores e o envolvimento médio (gostos, comentários, partilhas ou visualizações por publicação), tirados das estatísticas da aplicação; quem é o seu público (local, faixa de idade se a aplicação mostrar); parcerias anteriores; o que oferece (publicações, vídeos, presenças, campos de treino); e o contacto, usando um email desportivo, ou o de um pai, mãe ou agente no caso de menores.",
            "Use um modelo do Canva para o desenhar e um assistente de IA para melhorar as palavras. Todos os números têm de ser verdadeiros e atuais. Não compre seguidores; as marcas verificam o envolvimento."
          ],
          steps: ["Recolha os seus números verdadeiros nas estatísticas das aplicações.", "Escreva uma biografia de duas frases.", "Faça a lista do que oferece.", "Desenhe-o num modelo de kit de média do Canva.", "Verifique todos os números; ponha a data."],
          words: [["Kit de média", "um resumo de uma página sobre quem você é, o seu público e o que oferece às marcas."], ["Taxa de envolvimento", "o quanto as pessoas interagem com as suas publicações em comparação com quantas o seguem ou as veem."]],
          slides: [
            { title: "O que um kit de média mostra", bullets: ["Quem você é", "Quem é o seu público", "O que pode fazer por uma marca"] },
            { title: "Inclua", bullets: ["Foto, biografia, desporto e conquistas", "Canais, seguidores, envolvimento médio", "O que oferece e um contacto seguro"] },
            { title: "Honestidade", bullets: ["Números verdadeiros e atuais", "Nunca compre seguidores", "As marcas verificam o envolvimento"] }
          ],
          tryIt: "Crie o seu kit de média de uma página no Canva com os seus números verdadeiros. Peça a um assistente de IA para tornar a sua biografia mais curta e mais clara.",
          youCanNow: "criar um kit de média honesto de uma página.",
          quickCheck: [
            { objective: "O3", q: "O que mostra o envolvimento no seu kit de média?", options: ["O quanto as pessoas interagem com as suas publicações", "Quantas marcas conhece", "A sua média de notas", "O número da sua camisola"], answer: 0, why: "O envolvimento são os gostos, comentários, partilhas ou visualizações por publicação." },
            { objective: "O3", q: "O seu número de seguidores mudou desde que fez o kit de média no mês passado. O que faz?", options: ["Deixa o número antigo", "Arredonda muito para cima", "Compra seguidores para ficar igual", "Atualiza com o número verdadeiro de hoje e a data"], answer: 3, why: "Todos os números têm de ser verdadeiros e atuais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se para trabalhar com marcas",
        questions: [
          { objective: "O1", q: "O que quer dizer NIL?", options: ["Liga Nacional de Influenciadores", "Nova Lei de Rendimentos", "Nome, imagem e semelhança", "Nenhum Limite de Tinta"], answer: 2, why: "NIL é ganhar dinheiro com o seu nome, a sua imagem e a sua semelhança." },
          { objective: "O1", q: "Pelas regras da NCAA, o que NÃO é permitido?", options: ["Ser pago para frequentar uma escola específica", "Publicações pagas para uma loja local", "Organizar um campo de treino pago", "Dar autógrafos por dinheiro"], answer: 0, why: "Isso é pagamento para jogar, que as regras da NCAA não permitem." },
          { objective: "O1", q: "Um atleta do ensino secundário quer um acordo de NIL. Que regras contam?", options: ["Só as da marca", "As de ninguém", "As de uma liga profissional", "As da associação atlética escolar do seu estado e da sua escola"], answer: 3, why: "As regras de NIL do ensino secundário são definidas estado a estado." },
          { objective: "O2", q: "Que marca é provavelmente a melhor para começar?", options: ["Uma empresa de vape", "Um ginásio local onde treina e em que acredita", "Uma marca qualquer que nunca usou", "Uma aplicação de apostas"], answer: 1, why: "O uso verdadeiro e o público local dão a melhor combinação." },
          { objective: "O3", q: "Como devem ser todos os números do seu kit de média?", options: ["Arredondados muito para cima", "Verdadeiros e atuais", "Adivinhados", "Tirados da conta de um amigo"], answer: 1, why: "As marcas verificam, e a confiança é tudo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Propostas, acordos e identificação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer uma proposta a uma marca",
          minutes: 5,
          goal: "Escrever uma proposta curta e profissional para uma marca.",
          text: [
            "Uma proposta é uma mensagem curta a pedir para trabalharem juntos. Envie-a do seu email profissional ou para o contacto oficial da marca, e não em mensagens privadas (DM) ao acaso para funcionários.",
            "Uma boa proposta tem: quem você é, numa linha; porque gosta desta marca (algo concreto e verdadeiro); o seu público e um número; uma ideia clara (\"três vídeos de treino a usar a sua aplicação de recuperação\"); e o seu kit de média em anexo. Mantenha-a com menos de 150 palavras.",
            "Peça a um assistente de IA para fazer o rascunho e depois reescreva-o com a sua voz. Se tiver menos de 18 anos, envolva um pai, uma mãe ou um tutor. Volte a contactar uma vez depois de uma ou duas semanas. Muitas marcas vão dizer que não ou não vão responder; isso é normal."
          ],
          steps: ["Encontre o contacto oficial da marca.", "Peça à IA uma proposta curta com menos de 150 palavras.", "Acrescente uma razão concreta e verdadeira para gostar da marca.", "Anexe o seu kit de média.", "Volte a contactar uma vez depois de uma a duas semanas."],
          words: [["Proposta", "uma mensagem curta a propor trabalharem juntos."], ["Seguimento", "um lembrete educado, uma só vez, se não teve resposta."]],
          slides: [
            { title: "Para onde enviar", bullets: ["O seu email profissional", "O contacto oficial da marca"] },
            { title: "Uma boa proposta", bullets: ["Quem você é", "Porque gosta da marca (verdade)", "O seu público e um número", "Uma ideia clara + kit de média"] },
            { title: "Depois", bullets: ["Menos de 18 anos: envolva um pai ou tutor", "Volte a contactar uma vez", "Não ter resposta é normal"] }
          ],
          tryIt: "Escolha uma das suas cinco marcas. Use a IA para fazer o rascunho de uma proposta, reescreva-a com a sua voz e peça a um treinador ou a um pai para a ler antes de a enviar.",
          youCanNow: "escrever e enviar uma proposta curta e profissional a uma marca.",
          quickCheck: [
            { objective: "O4", q: "Para onde deve enviar uma proposta a uma marca?", options: ["Mensagens privadas ao acaso para funcionários", "O contacto oficial da marca", "A concorrente da marca", "Um comentário público"], answer: 1, why: "Envie-a do seu email profissional para o contacto oficial da marca." },
            { objective: "O4", q: "Uma marca não respondeu à sua proposta depois de duas semanas. O que faz?", options: ["Envia-lhe mensagens todos os dias", "Publica sobre ela com raiva", "Volta a contactar uma vez e, se não houver resposta, segue em frente", "Envia-a a todos os funcionários"], answer: 2, why: "Volte a contactar uma vez; muitas marcas vão dizer que não ou não vão responder, e isso é normal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ler um acordo: sinais de alerta",
          minutes: 6,
          goal: "Reconhecer sinais de alerta num acordo antes de assinar.",
          text: [
            "Antes de aceitar qualquer coisa, peça o acordo por escrito e leia-o com um adulto de confiança. Nos acordos maiores, um advogado, um agente ou o apoio de NIL da sua escola podem ajudar. Não assine sob pressão.",
            "Sinais de alerta: pedem-lhe para pagar dinheiro primeiro; querem as suas palavras-passe ou códigos de acesso; o acordo dura muito tempo ou diz que ficam donos do seu nome ou da sua imagem para sempre; não pode publicar para nenhuma outra marca (exclusividade) sem um pagamento justo; o pagamento não é claro ou é só \"visibilidade\"; querem que publique coisas que não são verdade; ou qualquer coisa que as regras da sua escola ou do seu estado não permitem, como usar os logótipos da escola sem autorização.",
            "Verifique o que tem de fazer (quantas publicações, quando, o quê), como e quando recebe, quanto tempo dura e como terminá-lo. Atletas universitários: verifiquem se o acordo tem de ser declarado e façam-no a tempo."
          ],
          steps: ["Peça o acordo por escrito.", "Leia-o com um adulto de confiança ou um conselheiro.", "Verifique o trabalho, o pagamento, a duração e como terminá-lo.", "Procure os sinais de alerta.", "Verifique as regras da escola e do estado e se tem de declarar.", "Nunca assine sob pressão."],
          words: [["Contrato", "um acordo escrito que os dois lados têm de cumprir."], ["Exclusividade", "uma regra que diz que não pode trabalhar com marcas concorrentes."], ["Direitos de uso", "como e durante quanto tempo uma marca pode usar as suas fotos, os seus vídeos e o seu nome."]],
          slides: [
            { title: "Antes de assinar", bullets: ["Peça por escrito", "Leia com um adulto de confiança", "Nunca assine sob pressão"] },
            { title: "Sinais de alerta", bullets: ["Você paga primeiro, ou pedem palavras-passe", "Ficam donos da sua imagem para sempre", "Pagamento pouco claro ou só \"visibilidade\"", "Pedem para dizer coisas que não são verdade"] },
            { title: "Verifique", bullets: ["Trabalho, pagamento, duração, como terminar", "Regras da escola e do estado", "Prazos para declarar"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: Student-Athlete NIL Deals", url: "https://www.collegesportscommission.org/nil/" }
          ],
          tryIt: "Peça a um assistente de IA para escrever um pequeno acordo de NIL de exemplo com três sinais de alerta escondidos (é para praticar). Encontre-os e depois escreva a sua própria lista de sinais de alerta.",
          youCanNow: "reconhecer sinais de alerta num acordo e saber com quem o ler antes de assinar.",
          quickCheck: [
            { objective: "O5", q: "Qual é um sinal de alerta num acordo?", options: ["Querem as suas palavras-passe ou códigos de acesso", "Pagamento e datas claros", "Uma forma de terminar o acordo", "Um número fixo de publicações"], answer: 0, why: "Nunca dê a uma marca as suas palavras-passe ou códigos de acesso." },
            { objective: "O5", q: "Uma marca diz que tem de assinar hoje ou perde o acordo. O que faz?", options: ["Assina já", "Assina e lê depois", "Pede a um amigo para assinar por si", "Não assina sob pressão; lê primeiro com um adulto de confiança"], answer: 3, why: "Nunca assine sob pressão; peça por escrito e leia com um adulto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Identificar publicações patrocinadas da forma certa",
          minutes: 5,
          goal: "Escrever uma publicação patrocinada com uma identificação clara e correta.",
          text: [
            "A FTC, a agência dos Estados Unidos que faz cumprir a lei da publicidade, diz que tem de revelar qualquer ligação material a uma marca, o que inclui pagamento, produtos grátis ou com desconto, ou uma ligação familiar ou de trabalho, sempre que fala da marca.",
            "Torne-a clara e fácil de ver: ponha-a na publicação, perto do início, com palavras simples como \"Publicidade\", \"Patrocinado\" ou \"Obrigado [marca] pelos sapatos grátis\". Nos vídeos, diga-a e mostre-a no ecrã; nas transmissões em direto, repita-a. Nas fotos e nas histórias (stories), ponha-a na imagem. Não a esconda num monte de hashtags, só na biografia ou atrás do \"mais\". Palavras vagas como \"sp\", \"collab\" ou \"embaixador\" sozinhas não são claras.",
            "Diga só o que é verdade: não promova um produto que não experimentou e nunca faça afirmações de saúde que a marca não pode provar, como \"esta bebida cura as cãibras\"."
          ],
          steps: ["Decida: há algum pagamento, produto grátis ou ligação? Então identifique.", "Ponha \"Publicidade\" ou um agradecimento claro perto do início da legenda.", "No vídeo: diga e mostre.", "Use também a etiqueta de parceria paga da aplicação, se houver.", "Verifique que todas as afirmações são verdadeiras."],
          words: [["Ligação material", "uma ligação a uma marca, como pagamento, produtos grátis ou família, que as pessoas podem não esperar."], ["Publicação patrocinada", "uma publicação que uma marca pagou ou pela qual lhe deu alguma coisa."]],
          slides: [
            { title: "Quando identificar", bullets: ["Produtos pagos, grátis ou com desconto", "Ligações de família ou de trabalho à marca"] },
            { title: "Como", bullets: ["\"Publicidade\" ou \"Obrigado [marca] por...\" perto do início", "Vídeo: diga e mostre", "Não escondido nas hashtags nem na biografia"] },
            { title: "Seja honesto", bullets: ["Só produtos que experimentou", "Nenhuma afirmação de saúde que não possam provar"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides" }
          ],
          tryIt: "Tarefa final: termine o seu kit de média, a sua proposta à marca e a sua lista de sinais de alerta (com os nomes das pessoas a quem vai perguntar na sua escola ou no seu estado). Depois escreva uma legenda patrocinada de prática com uma identificação correta.",
          youCanNow: "publicar conteúdo patrocinado com uma identificação clara e correta e cumprir as regras de NIL.",
          quickCheck: [
            { objective: "O6", q: "O que conta como ligação material que tem de revelar?", options: ["Um produto que você mesmo comprou", "Um produto grátis ou com desconto dado pela marca", "Uma marca de que nunca ouviu falar", "A sua equipa favorita"], answer: 1, why: "Pagamento, produtos grátis ou com desconto, ou uma ligação de família ou de trabalho têm de ser revelados." },
            { objective: "O6", q: "Está a fazer uma transmissão em direto patrocinada. Como identifica?", options: ["Uma vez na biografia", "Só nas hashtags", "Diz \"collab\" uma vez", "Identifica com clareza e repete durante a transmissão"], answer: 3, why: "Nas transmissões em direto, repita a identificação." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Propostas, acordos e identificação",
        questions: [
          { objective: "O4", q: "O que deve ter uma proposta?", options: ["Uma redação de 3 páginas", "A sua palavra-passe", "Um pedido de dinheiro primeiro", "Quem você é, porque gosta da marca, o seu público, uma ideia e o seu kit de média"], answer: 3, why: "Curta, concreta e profissional recebe respostas." },
          { objective: "O5", q: "Uma \"marca\" pede-lhe para pagar uma taxa para entrar no programa de atletas dela. Isto é:", options: ["Um sinal de alerta", "Normal", "Exigido pela NCAA", "Um ótimo acordo"], answer: 0, why: "As marcas verdadeiras pagam-lhe a si, não o contrário." },
          { objective: "O5", q: "Um contrato diz que a marca fica dona da sua imagem para sempre. Você deve:", options: ["Assinar depressa", "Ignorar", "Tratar isso como um sinal de alerta e pedir conselho", "Pedir mais \"para sempre\""], answer: 2, why: "Direitos de uso para sempre são um sinal de alerta grave." },
          { objective: "O6", q: "Que identificação é clara?", options: ["\"#sp\" no fim", "\"collab\"", "Só na biografia", "\"Publicidade\" perto do início da legenda"], answer: 3, why: "A FTC diz: clara e fácil de ver." },
          { objective: "O6", q: "Num vídeo patrocinado, a identificação deve ser:", options: ["Só na descrição", "Dita e mostrada no vídeo", "Num comentário", "Deixada de fora"], answer: 1, why: "A identificação de um vídeo tem de estar no próprio vídeo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Marketing de Influência para Atletas",
    questions: [
      { objective: "O1", q: "Marketing de influência quer dizer:", options: ["Comprar seguidores", "Treinar uma equipa", "Uma marca paga-lhe para mostrar o produto dela ao seu público", "Vender bilhetes"], answer: 2, why: "As marcas pagam pelo seu alcance e pela confiança que as pessoas têm em si." },
      { objective: "O1", q: "Os acordos de NIL da NCAA devem ter:", options: ["Um verdadeiro objetivo comercial e um pagamento razoável", "Nenhum trabalho", "Pagamento conforme os pontos marcados", "Pagamento para escolher uma escola"], answer: 0, why: "É assim que a NCAA descreve os acordos permitidos." },
      { objective: "O1", q: "Pagamento conforme o seu desempenho desportivo é:", options: ["Pagamento para jogar, não permitido pelas regras da NCAA", "Incentivado", "Obrigatório", "Um formulário de impostos"], answer: 0, why: "As regras da NCAA proíbem o pagamento para jogar." },
      { objective: "O1", q: "Onde os atletas da Divisão I declaram os acordos de NIL com terceiros (no momento em que isto foi escrito)?", options: ["Na biografia das redes sociais", "Num grupo de conversa", "No NIL Go, gerido pela College Sports Commission", "Em lado nenhum"], answer: 2, why: "Confirme os detalhes atuais com o seu gabinete de conformidade." },
      { objective: "O1", q: "Os rendimentos de NIL normalmente:", options: ["Nunca pagam impostos", "Pagam impostos", "São ilegais", "São pagos à escola"], answer: 1, why: "A NCAA diz que os rendimentos de NIL normalmente pagam impostos." },
      { objective: "O1", q: "Quem define as regras de NIL do ensino secundário?", options: ["A NFL", "A marca", "Ninguém", "A associação escolar de cada estado e a lei estadual"], answer: 3, why: "Muda de estado para estado." },
      { objective: "O2", q: "As melhores marcas para começar costumam ser:", options: ["Marcas de que nunca ouviu falar", "Aplicações de apostas", "Negócios locais que usa e em que acredita", "Lojas de vape"], answer: 2, why: "A combinação local e o uso verdadeiro dão acordos fortes." },
      { objective: "O2", q: "Que categoria muitas escolas e estados proíbem?", options: ["Padarias locais", "Livrarias", "Sapatilhas de corrida", "Apostas e álcool"], answer: 3, why: "As categorias proibidas são comuns nas regras de NIL." },
      { objective: "O3", q: "Um kit de média é:", options: ["Um resumo de uma página sobre si, o seu público e o que oferece", "Uma caixa de primeiros socorros", "Uma mala de câmara", "Um contrato"], answer: 0, why: "As marcas usam-no para decidir se combinam consigo." },
      { objective: "O3", q: "A taxa de envolvimento mostra:", options: ["A sua altura", "O quanto as pessoas interagem em comparação com os seguidores ou as visualizações", "A sua média de notas", "O número da sua camisola"], answer: 1, why: "As marcas dão mais importância ao envolvimento do que ao simples número de seguidores." },
      { objective: "O3", q: "Comprar seguidores é:", options: ["Marketing inteligente", "Obrigatório", "Desonesto, e as marcas conseguem perceber", "Grátis"], answer: 2, why: "Seguidores falsos destroem a confiança." },
      { objective: "O4", q: "Para onde deve enviar uma proposta?", options: ["O contacto oficial da marca", "Mensagens privadas pessoais de funcionários ao acaso", "As concorrentes", "Para lado nenhum"], answer: 0, why: "Os contactos oficiais são profissionais e seguros." },
      { objective: "O4", q: "Uma proposta deve ter cerca de:", options: ["Cinco páginas", "Um emoji", "Uma videochamada à meia-noite", "Menos de 150 palavras"], answer: 3, why: "As propostas curtas são lidas." },
      { objective: "O4", q: "Se tiver menos de 18 anos quando faz uma proposta, deve:", options: ["Esconder isso", "Envolver um pai, uma mãe ou um tutor", "Mentir sobre a idade", "Usar um nome falso"], answer: 1, why: "Os adultos ajudam a proteger os menores nos acordos." },
      { objective: "O5", q: "Antes de assinar um acordo, deve:", options: ["Assinar logo ali", "Pedi-lo por escrito e lê-lo com um adulto de confiança", "Partilhar a sua palavra-passe", "Pagar uma taxa"], answer: 1, why: "As condições por escrito protegem-no." },
      { objective: "O5", q: "Exclusividade quer dizer:", options: ["Recebe mais", "O acordo é curto", "Você é dono da marca", "Não pode trabalhar com marcas concorrentes"], answer: 3, why: "Limita outros acordos, por isso deve ser justa." },
      { objective: "O5", q: "Um acordo paga só em \"visibilidade\". Isto é:", options: ["Um sinal de alerta", "Um ótimo pagamento", "Obrigatório", "Uma regra de impostos"], answer: 0, why: "Um pagamento pouco claro é um sinal de aviso." },
      { objective: "O6", q: "Uma marca deu-lhe sapatos grátis. Tem de identificar a publicação?", options: ["Não, só o dinheiro conta", "Só se gostar deles", "Sim, os produtos grátis contam", "Só no TikTok"], answer: 2, why: "A FTC diz que os produtos grátis são uma ligação material." },
      { objective: "O6", q: "Onde uma identificação NÃO deve estar sozinha?", options: ["Perto do início da legenda", "Na imagem de uma história (story)", "Dita no vídeo", "Escondida nas hashtags ou na biografia"], answer: 3, why: "As identificações têm de ser fáceis de ver." },
      { objective: "O6", q: "Uma marca pede-lhe para dizer que a bebida dela cura as cãibras. Você:", options: ["Diz isso", "Recusa; não faça afirmações de saúde que não podem provar", "Diz isso mais alto", "Diz isso sem identificação"], answer: 1, why: "A FTC alerta contra afirmações de saúde não provadas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 5, 6, 8, 12, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Kit de média", objective: "O3", notYet: "Faltam números, ou estão inventados ou desatualizados, ou aparecem dados de contacto privados.", meets: "Uma página com biografia, canais, números verdadeiros e com data, público, o que oferece e um contacto seguro.", exceeds: "Inclui o envolvimento médio por publicação e uma lista clara de parcerias anteriores ou trabalho na comunidade." },
      { name: "Combinação com a marca", objective: "O2", notYet: "A marca escolhida vai contra os valores do atleta ou é de uma categoria proibida.", meets: "Uma marca que o atleta usa de verdade, que combina com o seu público e com as regras da escola e do estado.", exceeds: "A escolha vem apoiada numa lista de cinco marcas que combinam, com as razões." },
      { name: "Proposta", objective: "O4", notYet: "Longa, genérica ou texto da IA copiado, ou enviada numa mensagem privada ao acaso.", meets: "Menos de 150 palavras, com a voz do atleta, uma razão verdadeira, uma ideia e o kit de média, para um contacto oficial.", exceeds: "Um pai, uma mãe ou um tutor está envolvido quando é preciso e há uma data marcada para voltar a contactar." },
      { name: "Lista de sinais de alerta e regras", objective: "O5", notYet: "Faltam sinais de alerta importantes ou não diz a quem vai perguntar.", meets: "Lista os sinais de alerta, o que verificar (trabalho, pagamento, duração, como terminar) e a quem perguntar na escola ou no estado.", exceeds: "Acrescenta os prazos para declarar e os registos a guardar para os impostos." },
      { name: "Identificação", objective: "O6", notYet: "Sem identificação, ou está escondida ou é vaga.", meets: "Um \"Publicidade\" ou agradecimento claro perto do início, dito e mostrado no vídeo, só com afirmações verdadeiras.", exceeds: "Também usa a etiqueta de parceria paga da aplicação e verifica todas as afirmações com a marca." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam a tarefa final e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que dizem ter feito uma proposta a pelo menos uma marca em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter verificado um acordo com um adulto de confiança ou com o gabinete de conformidade, ou ter recusado um mau acordo",
      "Alunos que dizem ter identificado com clareza todas as publicações patrocinadas e declarado a tempo todos os acordos obrigatórios"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com aplicações de redes sociais e as suas estatísticas",
      "Uma conta gratuita do Canva",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "A política de NIL da sua escola ou as regras da associação do seu estado",
      "Cerca de 60 minutos"
    ],
    facilitatorNotes: [
      "Convide o gabinete de conformidade ou o diretor desportivo para explicar as regras atuais de NIL e como declarar; as regras e os valores mudam.",
      "Com atletas com menos de 18 anos, envolva os pais ou tutores em todas as propostas e acordos.",
      "Nunca diga a um atleta que um acordo concreto está bem; envie os contratos a um adulto de confiança, advogado, agente ou ao apoio de NIL da escola.",
      "Ensine que comprar seguidores ou aumentar os números é desonesto e pode acabar com acordos.",
      "Pratiquem juntos a escrever identificações e verifiquem os rascunhos patrocinados antes de serem publicados."
    ]
  }
};
