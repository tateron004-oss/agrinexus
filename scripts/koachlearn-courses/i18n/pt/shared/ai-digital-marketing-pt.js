"use strict";

// Koach Learn course (Portuguese translation of shared/ai-digital-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-digital-marketing-pt",
  lang: "pt",
  translationOf: "ai-digital-marketing",
  category: "Veterans (military)",
  name: "Marketing Digital com IA",
  skills: "Definir um cliente-alvo, Escrever publicações com IA, Criar imagens no Canva, Escrever um email de marketing que cumpre a lei, Revelar anúncios com honestidade, Ler resultados",
  outcome: "planear e criar uma semana de marketing digital para um pequeno negócio com a ajuda da IA: um perfil do cliente-alvo, cinco publicações nas redes sociais com imagens, um email de marketing que cumpre as regras da lei CAN-SPAM e uma forma simples de medir o que funcionou.",
  about: [
    "Marketing digital quer dizer chegar aos clientes pela internet: redes sociais, email, sites e pesquisa. As ferramentas de IA podem escrever rascunhos de publicações, sugerir ideias e ajudar a criar imagens em minutos, para que um negócio de uma só pessoa consiga fazer marketing como um negócio maior.",
    "Este curso é para veteranos que estão a começar um negócio ou a procurar trabalho em marketing, para quem procura emprego e quer uma habilidade procurada, e para membros da comunidade que promovem uma loja local, uma banca de comida, uma igreja ou um serviço. Precisa de um telefone ou computador e de ferramentas gratuitas como o ChatGPT, o Microsoft Copilot ou o Google Gemini, e o Canva.",
    "Você vai construir um plano real de marketing para uma semana, para um negócio à sua escolha. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Para um pequeno negócio real ou de prática, monte um kit de marketing para uma semana: um perfil do cliente-alvo num parágrafo, cinco publicações nas redes sociais com legendas e imagens do Canva verificadas, um email de marketing com um assunto claro, uma morada física e uma opção para cancelar a subscrição, e uma folha de acompanhamento com o número que vai observar em cada publicação.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e cônjuges de militares que têm ou estão a começar um pequeno negócio, como um serviço, um ofício, comida ou uma loja na internet, e querem mais clientes sem contratar uma agência de marketing.",
    startingPoint: "Usam as redes sociais e o email na vida pessoal e talvez tenham uma página do negócio. A maioria publica sem plano, nunca usou IA nem o Canva para marketing e não conhece as regras sobre email e publicidade.",
    gap: "Os pequenos negócios vivem ou morrem com clientes regulares, e o marketing na internet leva tempo que os donos não têm. Os alunos precisam de planear e produzir uma semana de marketing honesto e bem dirigido com a ajuda da IA, cumprir as regras da CAN-SPAM e da FTC e medir os resultados, para que o seu esforço se transforme em marcações e vendas.",
    constraints: [
      "Nível de leitura: palavras simples; os termos de marketing são explicados da primeira vez",
      "Aparelhos: um telefone ou computador; o computador é mais fácil para o Canva e para folhas de cálculo",
      "Custo: só ferramentas gratuitas (um assistente de IA, o plano gratuito do Canva, Google Sheets ou Excel)",
      "Regras: aplicam-se a lei CAN-SPAM e as orientações da FTC dos EUA; quem está fora dos EUA verifica as regras do seu país",
      "Privacidade: nenhum nome nem contacto de clientes colado em ferramentas de IA"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para um pequeno negócio real ou de prática", action: "escrever um perfil do cliente-alvo e uma mensagem de marketing numa só frase", standard: "dizendo quem é o cliente, do que precisa e o que você oferece, para quem e porquê você" },
    { id: "O2", condition: "Usando um assistente de IA e o seu perfil do cliente", action: "escrever cinco publicações de tipos diferentes para as redes sociais, cada uma com um apelo à ação", standard: "com cada dado, preço e data verificados e sem afirmações que não pode provar" },
    { id: "O3", condition: "Usando o plano gratuito do Canva", action: "criar uma imagem com a marca do negócio para cada publicação", standard: "usando as mesmas cores e letras, poucas palavras e só imagens que tem o direito de usar" },
    { id: "O4", condition: "Com uma oferta para antigos clientes", action: "escrever um email de marketing que cumpre os principais requisitos da CAN-SPAM", standard: "com um assunto honesto, uma morada física e uma opção clara para cancelar a subscrição" },
    { id: "O5", condition: "Com um anúncio, uma avaliação ou um conteúdo feito por IA", action: "identificar quando é preciso uma divulgação e manter honestas as avaliações e os testemunhos", standard: "acertando pelo menos 4 de 5 casos" },
    { id: "O6", condition: "Depois de uma semana de publicações", action: "escolher um número para acompanhar em cada publicação e usar os resultados para planear a semana seguinte", standard: "com uma folha de acompanhamento que tem um número-objetivo e um resultado para cada publicação" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear e criar conteúdo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conhecer o seu cliente e a sua mensagem",
          minutes: 5,
          goal: "Escrever um perfil do cliente-alvo e uma mensagem clara para um negócio.",
          text: [
            "O marketing funciona quando fala com uma pessoa concreta. Um perfil do cliente-alvo descreve o seu melhor cliente: quem é, do que precisa, o que o preocupa e onde passa tempo na internet.",
            "Depois escreva uma mensagem clara: o que oferece, para quem é e porque o devem escolher a si. Exemplo: \"Lavagem de carros ao domicílio, de um veterano, que vai até à porta da sua casa em Fayetteville. Marque em dois minutos.\"",
            "A IA pode ajudar a ter ideias. Pergunte: \"Tenho um negócio de lavagem de carros ao domicílio. Descreva três tipos de clientes prováveis e o que é importante para cada um.\" Escolha o que corresponde aos clientes que tem de verdade ou que quer ter, e corrija-o com o que você sabe."
          ],
          steps: ["Diga o nome do negócio e o que vende.", "Peça a um assistente de IA que sugira três tipos de clientes.", "Escolha um e escreva um perfil curto: quem é, do que precisa, o que o preocupa, onde está na internet.", "Escreva uma mensagem numa frase: o quê, para quem, porquê você."],
          words: [["Cliente-alvo", "o tipo concreto de pessoa a quem o seu marketing se dirige."], ["Perfil", "uma descrição curta de uma pessoa ou de um grupo."], ["Mensagem", "a coisa principal que quer que os clientes saibam e lembrem."]],
          slides: [
            { title: "Fale com uma pessoa", bullets: ["Quem é e do que precisa", "O que a preocupa", "Onde passa tempo na internet"] },
            { title: "Uma mensagem clara", bullets: ["O que oferece", "Para quem é", "Porquê escolher você"] },
            { title: "Use a IA para ter ideias", bullets: ["Peça três tipos de clientes", "Escolha um e corrija-o com o que sabe"] }
          ],
          tryIt: "Escolha um negócio real ou de prática. Use um assistente de IA para ter ideias de tipos de clientes e depois escreva um perfil do cliente-alvo num parágrafo e uma mensagem numa frase.",
          youCanNow: "escrever um perfil do cliente-alvo e uma mensagem de marketing clara.",
          quickCheck: [
            { objective: "O1", q: "O que descreve um perfil do cliente-alvo?", options: ["Todas as pessoas que usam a internet", "O seu melhor cliente: quem é, do que precisa, o que o preocupa e onde está na internet", "Os seus preços para o ano", "Os logótipos dos seus concorrentes"], answer: 1, why: "Um perfil descreve um tipo concreto de cliente para que o seu marketing fale com ele." },
            { objective: "O1", q: "A IA sugere três tipos de clientes para o seu negócio de jardinagem. Só um corresponde a quem lhe liga de verdade. O que faz?", options: ["Usa os três em todas as publicações", "Escolhe o mais interessante", "Ignora a IA e não publica nada", "Escolhe o que corresponde aos clientes reais e corrige-o com o que sabe"], answer: 3, why: "Escolha o tipo que corresponde aos clientes reais ou que quer ter e junte o que sabe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever publicações para as redes sociais com IA",
          minutes: 5,
          goal: "Usar a IA para escrever cinco rascunhos de publicações e depois corrigi-los para que sejam exatos e soem como você.",
          text: [
            "As boas publicações ensinam, mostram ou convidam. Misture-as: uma dica (\"3 maneiras de manter limpo o interior do seu carro\"), uma foto dos bastidores, a história de um cliente (com autorização), uma oferta e uma pergunta que convida a comentar.",
            "Dê à IA o seu perfil e a sua mensagem e depois peça: \"Escreva cinco publicações curtas para o Instagram e o Facebook para este cliente. Uma dica, uma dos bastidores, uma história de cliente, uma oferta, uma pergunta. Tom simpático, menos de 60 palavras cada, com um apelo à ação.\"",
            "Corrija sempre. Verifique cada dado, preço e data. Tire as afirmações que não pode provar, como \"o melhor do país\". Faça com que soe como você e nunca publique uma avaliação ou um resultado que não aconteceu."
          ],
          steps: ["Cole o seu perfil do cliente e a sua mensagem no assistente de IA.", "Peça cinco publicações de tipos diferentes com um apelo à ação.", "Verifique cada dado, preço e data.", "Tire as afirmações que não pode provar.", "Reescreva com a sua própria voz."],
          words: [["Apelo à ação", "o passo que quer que o leitor dê, como \"Marque já\" ou \"Ligue hoje\"."], ["Legenda", "o texto que acompanha uma imagem ou um vídeo nas redes sociais."]],
          slides: [
            { title: "Misture as publicações", bullets: ["Uma dica e um olhar dos bastidores", "A história de um cliente (com autorização)", "Uma oferta e uma pergunta"] },
            { title: "Um bom pedido à IA", bullets: ["Inclua o seu perfil e a sua mensagem", "Peça cinco tipos, com menos de 60 palavras", "Peça um apelo à ação"] },
            { title: "Corrija sempre", bullets: ["Verifique dados, preços e datas", "Tire afirmações que não pode provar", "Faça com que soe como você"] }
          ],
          tryIt: "Peça a um assistente de IA que escreva cinco rascunhos de publicações para o seu negócio com o modelo de pedido acima. Corrija cada uma nos dados e na voz e marque o que mudou.",
          youCanNow: "escrever rascunhos de publicações com IA e corrigi-los para que sejam exatos, honestos e com a sua voz.",
          quickCheck: [
            { objective: "O2", q: "Qual destas é uma publicação \"dos bastidores\"?", options: ["Uma foto da sua equipa a preparar um trabalho", "Um cupão de 20% de desconto", "Uma pergunta aos seguidores sobre a cor preferida", "A avaliação de um cliente"], answer: 0, why: "As publicações dos bastidores mostram como o seu trabalho acontece." },
            { objective: "O2", q: "Uma publicação escrita pela IA tem um preço que você mudou no mês passado. O que faz?", options: ["Publica; os clientes vão perguntar", "Apaga a publicação toda", "Corrige o preço antes de publicar", "Junta \"os preços podem variar\" e publica"], answer: 2, why: "Verifique e corrija sempre cada dado, preço e data antes de publicar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Criar imagens com o Canva e a IA",
          minutes: 5,
          goal: "Criar uma imagem limpa, com a marca do negócio, para cada publicação, usando uma ferramenta de design gratuita.",
          text: [
            "O Canva tem um plano gratuito com modelos no tamanho certo para cada rede social. Procure o tipo de publicação de que precisa, como \"Instagram post\", escolha um modelo e troque as palavras e as imagens.",
            "Mantenha uma marca simples: as mesmas duas ou três cores, um ou dois tipos de letra e o seu logótipo ou o nome do negócio em todas as imagens. Use poucas palavras na imagem; a legenda leva os pormenores.",
            "Use as suas próprias fotos sempre que puder; fotos reais do seu trabalho criam confiança. Se usar imagens feitas por IA, não as faça parecer clientes reais nem resultados que não entregou, e use só imagens que tem o direito de usar."
          ],
          steps: ["Abra o Canva e procure o tamanho de modelo de que precisa.", "Escolha um modelo e mude as cores para as cores da sua marca.", "Troque o texto por um título curto.", "Junte uma foto sua ou uma imagem com a licença certa.", "Descarregue-a e guarde-a com o nome da publicação."],
          words: [["Modelo", "um design já pronto que você muda para servir às suas necessidades."], ["Marca", "o aspeto e o estilo que tornam o seu negócio fácil de reconhecer."], ["Licença", "autorização para usar uma imagem ou outro trabalho."]],
          slides: [
            { title: "O básico do Canva", bullets: ["Plano gratuito com modelos do tamanho das redes sociais", "Escolha um modelo, troque as palavras e as imagens"] },
            { title: "Uma marca simples", bullets: ["As mesmas duas ou três cores", "Um ou dois tipos de letra", "O seu nome ou logótipo em todas as imagens"] },
            { title: "Imagens honestas", bullets: ["As suas próprias fotos criam confiança", "Nada de clientes ou resultados falsos", "Só imagens que tem o direito de usar"] }
          ],
          sources: [{ name: "Canva", url: "https://www.canva.com/" }],
          tryIt: "Crie uma imagem no Canva para cada uma das suas cinco publicações, com as mesmas cores e tipos de letra. Use pelo menos uma foto real do seu trabalho ou produto.",
          youCanNow: "criar imagens coerentes e honestas para publicações nas redes sociais com uma ferramenta de design gratuita.",
          quickCheck: [
            { objective: "O3", q: "Onde deve ficar a maior parte dos pormenores de uma publicação?", options: ["Apertados na imagem", "Em letra pequena no fundo da imagem", "Numa segunda imagem", "Na legenda, com poucas palavras na imagem"], answer: 3, why: "Use poucas palavras na imagem; a legenda leva os pormenores." },
            { objective: "O3", q: "Quer uma foto de um cliente feliz, mas não tem nenhuma. Qual é a escolha honesta?", options: ["Usar uma imagem de IA feita para parecer um cliente real", "Usar uma foto do seu próprio trabalho ou uma imagem com a licença certa", "Copiar uma foto do site de outra empresa", "Usar a foto de um desconhecido das redes sociais"], answer: 1, why: "Use as suas fotos ou imagens que tem o direito de usar, e não invente clientes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear e criar conteúdo",
        questions: [
          { objective: "O1", q: "O que é um perfil do cliente-alvo?", options: ["O seu extrato bancário", "Uma lista de concorrentes", "Uma descrição do tipo concreto de pessoa a quem o seu marketing se dirige", "Uma palavra-passe das redes sociais"], answer: 2, why: "O marketing funciona melhor quando fala com uma pessoa concreta." },
          { objective: "O1", q: "Qual é a mensagem de marketing mais clara?", options: ["\"Lavagem de carros ao domicílio, de um veterano, que vai até à porta da sua casa em Fayetteville. Marque em dois minutos.\"", "\"Fazemos coisas.\"", "\"O melhor de sempre!!!\"", "\"Talvez nos ligue.\""], answer: 0, why: "Diz o quê, para quem e porquê, com um passo seguinte." },
          { objective: "O2", q: "A IA escreve \"Eleito o melhor lavador de carros do país\", mas isso nunca aconteceu. O que faz?", options: ["Publica mesmo assim", "Põe a frase maior", "Junta uma foto de um prémio falso", "Tira a afirmação"], answer: 3, why: "Nunca publique afirmações que não pode provar." },
          { objective: "O2", q: "O que é um apelo à ação?", options: ["O toque de um telefone", "O passo que quer que o leitor dê, como \"Marque já\"", "Um aviso legal", "Um tipo de letra"], answer: 1, why: "Diz ao leitor o que fazer a seguir." },
          { objective: "O3", q: "O que cria mais confiança numa imagem?", options: ["Imagens de IA de clientes felizes falsos", "Fotos reais do seu próprio trabalho", "Fotos copiadas de um concorrente", "Nenhuma imagem"], answer: 1, why: "Fotos reais de trabalho real são honestas e convencem." }
        ]
      }
    },
    {
      name: "Capítulo 2: Email, regras de honestidade e resultados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever um email de marketing que cumpre a lei",
          minutes: 6,
          goal: "Escrever com a IA um rascunho de email de marketing que cumpre os principais requisitos da lei CAN-SPAM dos EUA.",
          text: [
            "O email chega a pessoas que já escolheram ouvir falar de você, por isso muitas vezes vende mais do que as redes sociais. Envie emails só a pessoas que lhe deram o seu endereço e aceitaram receber notícias suas.",
            "Nos Estados Unidos, a lei CAN-SPAM define regras para o email comercial. Segundo a Federal Trade Commission (FTC, a comissão federal do comércio), não pode usar informação de remetente nem assuntos falsos ou enganosos, tem de identificar a mensagem como anúncio, incluir a sua morada postal física válida, dar uma forma clara de cancelar a receção e respeitar os cancelamentos em 10 dias úteis. Você continua responsável mesmo que outra pessoa envie por você.",
            "Peça um rascunho à IA: \"Escreva um email de marketing curto para [negócio] a oferecer [promoção] a antigos clientes. Assunto honesto, tom simpático, um só apelo à ação.\" Depois junte a sua morada e o link para cancelar a subscrição e verifique os dados. Fora dos EUA, verifique as regras de email e de privacidade do seu país."
          ],
          steps: ["Peça à IA um email curto com um assunto honesto e um só apelo à ação.", "Verifique cada dado, preço e data.", "Deixe claro que é um anúncio ou uma oferta.", "Junte a sua morada postal física válida.", "Junte uma opção clara para cancelar a subscrição e respeite os pedidos em 10 dias úteis."],
          words: [["Lei CAN-SPAM", "a lei dos EUA que define regras para o email comercial."], ["Cancelar a subscrição", "uma forma de as pessoas deixarem de receber os seus emails (em inglês: opt out, unsubscribe)."], ["Assunto", "o título curto que as pessoas veem antes de abrir um email."]],
          slides: [
            { title: "Envie emails às pessoas certas", bullets: ["Só a pessoas que aceitaram receber notícias suas"] },
            { title: "O básico da CAN-SPAM (FTC)", bullets: ["Remetente e assunto honestos", "Identificar como anúncio", "Incluir a sua morada postal física"] },
            { title: "Regras para cancelar a subscrição", bullets: ["Uma forma clara de cancelar", "Respeitar o pedido em 10 dias úteis", "Você é responsável mesmo que um fornecedor envie o email"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Use a IA para escrever um rascunho de email de marketing para o seu negócio. Corrija-o e depois compare-o com a lista da CAN-SPAM: assunto honesto, identificado como anúncio, morada física, opção para cancelar a subscrição.",
          youCanNow: "escrever um email de marketing com a ajuda da IA que cumpre as principais regras da CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Quem deve estar na sua lista de emails de marketing?", options: ["Qualquer pessoa cujo email consiga encontrar", "Endereços de email que comprou na internet", "Pessoas que lhe deram o seu endereço e aceitaram receber notícias suas", "Todas as empresas da sua cidade"], answer: 2, why: "Envie emails só a pessoas que lhe deram o seu endereço e aceitaram receber notícias suas." },
            { objective: "O4", q: "O rascunho da IA tem uma ótima oferta, mas não tem morada nem link para cancelar a subscrição. O que faz antes de enviar?", options: ["Junta a sua morada postal física válida e uma opção clara para cancelar a subscrição", "Envia; isso é opcional", "Junta só o seu número de telefone", "Envia-o a partir da conta de um amigo"], answer: 0, why: "A CAN-SPAM exige uma morada postal física válida e uma forma clara de cancelar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Marketing honesto: divulgações, avaliações e IA",
          minutes: 5,
          goal: "Reconhecer quando um anúncio precisa de uma divulgação e manter honestas as avaliações e o conteúdo da IA.",
          text: [
            "Os Guias sobre Recomendações da FTC (Endorsement Guides) dizem que, se alguém que promove um produto tem uma ligação à marca, como ser pago ou receber um produto de graça, isso tem de ser revelado com clareza. A FTC sugere palavras simples como \"Ad:\" ou \"#ad\" (anúncio) no início, ou \"Publicação paga por [marca]\".",
            "As avaliações falsas enganam. Nunca escreva avaliações do seu próprio negócio, não pague por avaliações falsas nem peça à IA que as invente. Em vez disso, peça a clientes reais avaliações honestas.",
            "Tenha cuidado com o conteúdo feito por IA: não use a IA para imitar uma pessoa real, inventar testemunhos ou prometer resultados que não pode provar. As regras mudam, por isso veja as páginas de orientação para empresas da FTC para saber os pormenores atuais."
          ],
          words: [["Recomendação", "uma mensagem em que alguém diz que gosta de um produto ou que o usa."], ["Divulgação", "uma declaração clara de uma ligação, como \"#ad\" ou \"Publicação paga\"."], ["Testemunho", "aquilo que um cliente diz sobre a sua experiência."]],
          slides: [
            { title: "Revele as ligações", bullets: ["Foi pago ou recebeu um produto de graça? Diga-o", "\"Ad:\" ou \"#ad\" no início", "\"Publicação paga por [marca]\""] },
            { title: "As avaliações têm de ser reais", bullets: ["Nada de avaliações falsas ou escritas pela IA", "Peça a clientes reais uma avaliação honesta"] },
            { title: "Regras práticas para conteúdo de IA", bullets: ["Não imitar pessoas reais", "Não inventar testemunhos nem resultados", "Ver as orientações da FTC para novidades"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Reveja as suas cinco publicações e o email. Marque as que precisariam de uma divulgação (por exemplo, um parceiro pagou-lhe ou um amigo promove em troca de um produto de graça) e tire qualquer afirmação ou avaliação que não seja real.",
          youCanNow: "reconhecer quando o marketing precisa de uma divulgação e manter honestas as avaliações e o conteúdo da IA.",
          quickCheck: [
            { objective: "O5", q: "Quando é que uma pessoa que promove o seu produto tem de o revelar?", options: ["Só se tiver mais de 10.000 seguidores", "Quando tem uma ligação à sua marca, como ser paga ou receber o produto de graça", "Nunca, se a avaliação for positiva", "Só no email"], answer: 1, why: "A FTC diz que uma ligação como um pagamento ou um produto de graça tem de ser revelada com clareza." },
            { objective: "O5", q: "A sua loja tem poucas avaliações. Um amigo oferece-se para pôr a IA a escrever vinte avaliações de cinco estrelas. O que faz?", options: ["Aceita, porque foi a IA que as escreveu, não você", "Publica só dez delas", "Paga a um serviço para as publicar", "Recusa e pede a clientes reais avaliações honestas"], answer: 3, why: "As avaliações falsas enganam; peça antes a clientes reais." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir o que funciona e melhorar",
          minutes: 5,
          goal: "Escolher um número para acompanhar em cada publicação e usar os resultados para planear a semana seguinte.",
          text: [
            "Todas as redes sociais e ferramentas de email mostram números básicos. O alcance é quantas pessoas viram. O envolvimento são os gostos, comentários, partilhas e gravações. Os cliques mostram quem foi ao seu link. As conversões são o verdadeiro objetivo: marcações, chamadas, vendas ou inscrições.",
            "Escolha um número principal por publicação, conforme a sua função: uma publicação de dica procura gravações e partilhas, uma oferta procura cliques e marcações. Anote-os numa folha de acompanhamento simples no Google Sheets ou no Excel.",
            "Depois de uma semana, veja o que correu melhor e faça mais disso. Pode colar os seus números (sem nomes de clientes) num assistente de IA e perguntar: \"Que publicações correram melhor e o que devo experimentar na próxima semana?\" A decisão final é sua."
          ],
          steps: ["Faça uma folha com as colunas: data, publicação, tipo, número-objetivo, resultado.", "Escolha um número-objetivo para cada publicação.", "Depois de uma semana, preencha os resultados com as estatísticas da plataforma.", "Peça à IA que encontre padrões, usando só números.", "Planeie a semana seguinte: mais do que funcionou."],
          words: [["Alcance", "quantas pessoas viram a sua publicação."], ["Envolvimento", "gostos, comentários, partilhas e gravações."], ["Conversão", "quando alguém faz a ação que você quer, como marcar ou comprar."]],
          slides: [
            { title: "Números que deve conhecer", bullets: ["Alcance: quantos viram", "Envolvimento: gostos, comentários, partilhas", "Cliques e conversões"] },
            { title: "Um objetivo por publicação", bullets: ["Publicação de dica: gravações e partilhas", "Publicação de oferta: cliques e marcações"] },
            { title: "Aprender e ajustar", bullets: ["Acompanhe numa folha simples", "Peça à IA que encontre padrões, só com números", "Faça mais do que funcionou"] }
          ],
          tryIt: "Tarefa final: crie uma folha de acompanhamento para as suas cinco publicações e o seu email, com um número-objetivo para cada. Junto com o seu perfil, as publicações, as imagens e o email, isto completa o seu kit de marketing para uma semana.",
          youCanNow: "planear, criar, verificar e medir uma semana de marketing digital com a ajuda da IA.",
          quickCheck: [
            { objective: "O6", q: "O que é o envolvimento?", options: ["Gostos, comentários, partilhas e gravações", "Quantas pessoas viram a publicação", "O custo da publicação", "O número de seguidores que tinha no início"], answer: 0, why: "O envolvimento conta como as pessoas interagem com uma publicação; o alcance é quantas a viram." },
            { objective: "O6", q: "Esta semana, as suas publicações de dicas tiveram mais gravações, mas as ofertas tiveram poucos cliques. Qual é um passo seguinte sensato?", options: ["Deixar de publicar durante um mês", "Apagar as publicações de dicas", "Planear mais publicações de dicas e experimentar uma oferta nova na próxima semana", "Publicar a mesma oferta cinco vezes"], answer: 2, why: "Faça mais do que funcionou e ajuste o que não funcionou." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Email, regras de honestidade e resultados",
        questions: [
          { objective: "O4", q: "Segundo a CAN-SPAM, o que tem de ter um email de marketing nos EUA?", options: ["O número da Segurança Social do cliente", "Um assunto falso e urgente", "Nenhum nome de remetente", "Uma morada postal física válida e uma forma de cancelar"], answer: 3, why: "A FTC inclui uma morada física e uma forma de cancelar entre os requisitos." },
          { objective: "O4", q: "Segundo a FTC, em quanto tempo tem de respeitar um pedido de cancelamento da subscrição pela CAN-SPAM?", options: ["Em 10 dias úteis", "Num ano", "Nunca", "Só se lhe ligarem"], answer: 0, why: "O guia da FTC diz que os cancelamentos têm de ser respeitados em 10 dias úteis." },
          { objective: "O5", q: "Um amigo recebeu um produto de graça seu e publica sobre ele. O que deve ter a publicação dele?", options: ["Nada", "Uma avaliação falsa de cinco estrelas", "Uma divulgação clara como \"#ad\" ou \"Oferecido\"", "Os seus dados bancários"], answer: 2, why: "Ligações como produtos de graça têm de ser reveladas." },
          { objective: "O5", q: "Qual destes é marketing honesto?", options: ["Pôr a IA a escrever avaliações", "Pagar por avaliações falsas", "Avaliar o seu próprio negócio com nomes falsos", "Pedir a clientes reais avaliações honestas"], answer: 3, why: "Só as avaliações reais de clientes reais são honestas." },
          { objective: "O6", q: "O que é uma conversão?", options: ["Mudar o tamanho de uma foto", "Um tipo de letra", "Quando alguém faz a ação que você quer, como marcar", "Desligar os comentários"], answer: 2, why: "As conversões são o verdadeiro objetivo do negócio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Marketing Digital com IA",
    questions: [
      { objective: "O1", q: "Marketing digital quer dizer:", options: ["Só imprimir panfletos", "Chegar aos clientes pela internet", "Vender de porta em porta", "Trabalhar numa caixa registadora"], answer: 1, why: "Usa as redes sociais, o email, os sites e a pesquisa." },
      { objective: "O1", q: "Porquê escrever um perfil do cliente-alvo?", options: ["Para que o seu marketing fale com uma pessoa concreta", "Para passar o tempo", "Porque a IA o exige", "Para partilhar dados privados"], answer: 0, why: "O marketing concreto funciona melhor do que o marketing geral." },
      { objective: "O1", q: "Uma mensagem clara diz:", options: ["Só o seu número de telefone", "A história da sua vida", "O que oferece, para quem é e porquê escolher você", "Nada de concreto"], answer: 2, why: "Essas três partes tornam a mensagem clara." },
      { objective: "O1", q: "A IA sugere três tipos de clientes. Você deve:", options: ["Escolher o que corresponde aos clientes reais e corrigi-lo", "Usar os três sem ler", "Ignorar o que você sabe", "Publicá-los como anúncios"], answer: 0, why: "A IA dá ideias; você decide com o que sabe." },
      { objective: "O2", q: "Qual é uma boa mistura para uma semana de publicações?", options: ["Cinco ofertas iguais", "Só memes", "Só o seu logótipo", "Uma dica, os bastidores, a história de um cliente, uma oferta e uma pergunta"], answer: 3, why: "A variedade mantém as pessoas interessadas." },
      { objective: "O2", q: "\"Marque já\" no fim de uma publicação é:", options: ["Uma divulgação", "Um apelo à ação", "Um modelo", "Uma conversão"], answer: 1, why: "Diz ao leitor o passo seguinte." },
      { objective: "O2", q: "Antes de publicar um rascunho da IA, verifique:", options: ["Só os emojis", "Dados, preços, datas e afirmações", "Nada", "A sua palavra-passe"], answer: 1, why: "A IA pode errar nos dados ou exagerar." },
      { objective: "O3", q: "No Canva, um modelo é:", options: ["Um documento legal", "Um anúncio pago", "Uma lista de clientes", "Um design já pronto que você adapta"], answer: 3, why: "Os modelos poupam tempo e têm o tamanho certo para cada site." },
      { objective: "O3", q: "Uma marca simples usa:", options: ["As mesmas poucas cores e tipos de letra e o seu nome em todas as imagens", "Cores novas todos os dias", "Nenhum nome", "Logótipos copiados"], answer: 0, why: "A coerência torna você fácil de reconhecer." },
      { objective: "O3", q: "Que imagem NÃO pode usar?", options: ["Uma foto sua do seu trabalho", "Uma imagem com a licença certa", "Uma foto copiada do site de outra empresa", "Um elemento de um modelo do Canva que tem autorização para usar"], answer: 2, why: "Use só imagens que tem o direito de usar." },
      { objective: "O4", q: "Quem deve receber os seus emails de marketing?", options: ["Todos os endereços que conseguir encontrar", "Listas de emails compradas", "Desconhecidos ao acaso", "Pessoas que aceitaram receber notícias suas"], answer: 3, why: "Envie emails a pessoas que escolheram receber notícias suas." },
      { objective: "O4", q: "Que agência dos EUA tem o guia que explica a CAN-SPAM às empresas?", options: ["O Departamento dos Transportes", "A NASA", "A Federal Trade Commission (FTC)", "Só os Correios"], answer: 2, why: "A FTC publica o guia de cumprimento da CAN-SPAM." },
      { objective: "O4", q: "O assunto de um email de promoção diz \"A sua conta foi suspensa\". Isto é:", options: ["Bom marketing", "Enganoso e contra a CAN-SPAM", "Obrigatório", "Uma divulgação"], answer: 1, why: "O assunto tem de corresponder ao conteúdo da mensagem." },
      { objective: "O4", q: "Se um fornecedor envia os seus emails de marketing, quem é responsável por cumprir a CAN-SPAM?", options: ["Você continua a ser", "Só o fornecedor", "Ninguém", "O cliente"], answer: 0, why: "A FTC diz que você continua responsável." },
      { objective: "O5", q: "\"#ad\" no início de uma publicação é um exemplo de:", options: ["Um apelo à ação", "Um modelo", "Uma divulgação", "Alcance"], answer: 2, why: "Diz aos leitores que existe uma ligação paga." },
      { objective: "O5", q: "Usar a IA para escrever avaliações de cinco estrelas para a sua loja é:", options: ["Enganoso e não é permitido", "Marketing inteligente", "Obrigatório", "Aceitável se parecerem reais"], answer: 0, why: "As avaliações falsas enganam os clientes." },
      { objective: "O5", q: "Onde deve verificar as regras de publicidade atuais dos EUA?", options: ["Numa conversa qualquer de comentários", "Só numa conversa com a IA", "Com um concorrente", "Nas páginas de orientação para empresas da FTC"], answer: 3, why: "As regras mudam; a FTC é a fonte oficial." },
      { objective: "O6", q: "O alcance mede:", options: ["Quantos compraram", "Quantas pessoas viram a sua publicação", "O seu lucro", "A idade dos seus seguidores"], answer: 1, why: "O alcance é quantas pessoas viram." },
      { objective: "O6", q: "O número-objetivo principal de uma publicação de oferta costuma ser:", options: ["Só gravações", "Cliques ou marcações", "O tamanho da letra", "O número de hashtags"], answer: 1, why: "As ofertas procuram levar as pessoas a agir." },
      { objective: "O6", q: "Quando pede à IA que analise os seus resultados, deve partilhar:", options: ["Nomes e números de telefone de clientes", "As suas palavras-passe", "Números de cartões", "Só números, sem nomes de clientes"], answer: 3, why: "Mantenha as informações privadas fora das ferramentas de IA." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 2, 5, 6, 8, 10, 12, 14, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Perfil do cliente", objective: "O1", notYet: "O perfil falta ou descreve \"toda a gente\".", meets: "Um parágrafo sobre quem é o cliente, as suas necessidades, preocupações e onde está na internet.", exceeds: "Todas as publicações e o email falam claramente com este cliente." },
      { name: "Cinco publicações", objective: "O2", notYet: "Menos de cinco publicações, ou uma publicação tem um dado não verificado ou uma afirmação que não pode provar.", meets: "Cinco publicações de tipos diferentes, cada uma com um apelo à ação e com os dados verificados.", exceeds: "As publicações soam como o dono, não como um rascunho genérico da IA." },
      { name: "Imagens", objective: "O3", notYet: "Faltam imagens, têm palavras a mais ou usam imagens que não tem o direito de usar.", meets: "Uma imagem limpa para cada publicação, com as mesmas cores e tipos de letra da marca.", exceeds: "Usa fotos reais do próprio trabalho do negócio." },
      { name: "Email de marketing", objective: "O4", notYet: "O assunto é enganoso, ou falta a morada ou a opção para cancelar a subscrição.", meets: "Assunto honesto, claro que é uma oferta, morada física e opção para cancelar a subscrição.", exceeds: "Também diz como os cancelamentos serão respeitados em 10 dias úteis." },
      { name: "Folha de acompanhamento", objective: "O6", notYet: "Não há folha de acompanhamento, ou não há número-objetivo para cada publicação.", meets: "Uma folha com um número-objetivo para cada publicação e onde encontrar o resultado.", exceeds: "Os resultados estão preenchidos e o plano da semana seguinte baseia-se neles." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Negócios que continuam a publicar todas as semanas durante pelo menos quatro semanas depois do curso (inquérito de seguimento)",
      "Donos que dizem ter mais marcações, chamadas ou vendas vindas do marketing na internet em 60 dias",
      "Negócios que juntam um rodapé conforme a CAN-SPAM a todos os emails de marketing"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini) e o plano gratuito do Canva",
      "Google Sheets ou Excel para a folha de acompanhamento",
      "Algumas fotos reais do trabalho do negócio, se houver",
      "Cerca de 60 minutos para as lições e as verificações, mais uma semana para publicar e acompanhar"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; mostre um pedido e um modelo do Canva num ecrã partilhado.",
      "Peça aos alunos que usem o seu próprio negócio, ou um negócio de prática, para que o kit fique pronto a usar.",
      "Reveja cada email antes de alguém o enviar: assunto honesto, morada e opção para cancelar a subscrição.",
      "Lembre aos alunos que nunca devem colar nomes nem contactos de clientes em ferramentas de IA.",
      "Avalie o kit final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
