"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-marketing-toolkit.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-ai-marketing-toolkit-pt",
  lang: "pt",
  translationOf: "athletes-ai-marketing-toolkit",
  category: "Athletes",
  name: "Kit de Ferramentas de IA para Marketing e Marca",
  skills: "Escrever um guia de voz da marca, Criar uma biblioteca de pedidos, Usar IA para escrita, design e vídeo, Agendar e acompanhar publicações, Rever o que a IA faz quanto a factos, direitos e divulgação",
  outcome: "montar o seu próprio kit de marketing com IA: um guia de voz da marca numa página, uma biblioteca de dez pedidos reutilizáveis, uma ferramenta para escrita, design, vídeo e acompanhamento, e uma lista de revisão de cinco pontos que usa antes de publicar qualquer coisa.",
  about: [
    "Este curso é para atletas, treinadores e pessoal das equipas que já publicam e se promovem, e querem um sistema que se repete, poupa tempo e não lhes tira a sua voz.",
    "Um kit de ferramentas não é ter o maior número de aplicações. É um pequeno conjunto de ferramentas, mais um guia e pedidos guardados, para que cada publicação soe como você e passe pela mesma verificação de qualidade.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Monte o documento do seu kit: um guia de voz da marca numa página, dez pedidos guardados (legendas, biografias, emails de proposta, ideias de publicações, respostas e mais), a ferramenta que escolheu para escrita, design, vídeo e acompanhamento, e uma lista de revisão de cinco pontos. Use o kit para fazer e rever uma publicação do início ao fim.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas, treinadores e pessoal das equipas que já publicam e se promovem na internet e querem um sistema que se repete, poupa tempo e não lhes tira a sua voz.",
    startingPoint: "Publicam com regularidade e já experimentaram ferramentas de IA para legendas ou ideias. A maioria começa do zero de cada vez, recebe textos de IA genéricos, usa várias aplicações que fazem o mesmo e não verifica de forma fixa os direitos, a divulgação ou a segurança antes de publicar.",
    gap: "Sem um sistema, o conteúdo feito com IA soa genérico, e erros de factos, direitos, divulgação ou privacidade passam, o que pode custar confiança, contratos ou segurança. Um guia de voz, pedidos guardados, uma ferramenta por tarefa e uma lista de revisão tornam o conteúdo mais rápido, mais pessoal e mais seguro.",
    constraints: [
      "Linguagem simples, cerca do nível de leitura do 8.º ano",
      "Um telefone ou computador com ferramentas gratuitas: um assistente de IA, o Canva, um editor de vídeo e o Google Sheets ou Docs",
      "Cerca de 60 minutos no total",
      "Direitos sobre fotos, logótipos e música; regras de divulgação da FTC e regras NIL da escola ou do estado",
      "Nenhuma informação privada nem localização em tempo real nas publicações; nenhuma imagem de IA enganadora de pessoas reais"
    ],
    prerequisites: "Nenhum. Fazer primeiro \"Marca Pessoal nas Redes Sociais para Atletas\" ou \"Criação de Conteúdos para Atletas\" ajuda."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando cinco das suas legendas e um assistente de IA", action: "escrever um guia de voz da marca numa página", standard: "com três palavras para a sua voz, palavras que usa e que nunca usa, temas para publicar e para evitar, hábitos de emojis e hashtags, e duas publicações de exemplo" },
    { id: "O2", condition: "Com as suas tarefas de marketing mais comuns", action: "criar uma biblioteca de dez pedidos reutilizáveis com espaços em branco", standard: "cada um a referir o seu guia de voz e todos guardados num só documento" },
    { id: "O3", condition: "Com as tarefas de escrita, design, vídeo e acompanhamento", action: "escolher uma ferramenta para cada tarefa", standard: "verificando, para cada ferramenta nova, quem a faz, que dados usa e quanto custa depois de qualquer período grátis" },
    { id: "O4", condition: "Com qualquer publicação feita com IA", action: "verificá-la com a revisão de cinco pontos: verdade, voz, direitos, divulgação e segurança", standard: "passando nas cinco verificações antes de ficar pública" },
    { id: "O5", condition: "Com fotos, logótipos, música e ligações a marcas no seu conteúdo", action: "identificar o que pode usar e escrever uma divulgação clara para qualquer ligação a uma marca", standard: "com autorização para cada coisa que não fez, música licenciada, nenhuma imagem de IA enganadora e a divulgação na própria publicação" },
    { id: "O6", condition: "Depois de uma semana a publicar", action: "registar os seus números numa folha de acompanhamento e atualizar os seus pedidos e o guia de voz a partir dos resultados", standard: "indicando as melhores e as piores publicações e verificando na folha qualquer leitura feita pela IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A sua voz e os seus pedidos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever o seu guia de voz da marca",
          minutes: 5,
          goal: "Escrever um guia de uma página que diga a qualquer ferramenta de IA como você soa.",
          text: [
            "A IA escreve com uma voz genérica, a não ser que você lhe diga como soa. Um guia de voz da marca resolve isso, e também ajuda os colegas de equipa ou familiares que o ajudam com as publicações.",
            "O seu guia tem: três palavras para a sua voz (por exemplo \"confiante, grato, divertido\"); palavras e frases que usa; palavras que nunca usa; temas sobre os quais publica; temas que evita; hábitos de emojis e hashtags; e duas publicações de exemplo que soam exatamente como você.",
            "Peça ajuda a um assistente de IA: cole cinco das suas melhores legendas e pergunte: \"Descreva a voz destas publicações em três palavras e faça a lista das frases que eu repito.\" Depois corrija o resultado."
          ],
          steps: ["Junte cinco legendas que soam como você.", "Peça à IA para descrever a sua voz.", "Escolha três palavras para a sua voz.", "Faça a lista das palavras que usa e que nunca usa.", "Acrescente temas para publicar e para evitar, e duas publicações de exemplo."],
          words: [["Voz da marca", "a personalidade e o estilo da forma como você escreve e fala."], ["Guia de estilo", "um documento com regras para o conteúdo ficar sempre igual."]],
          slides: [
            { title: "Porquê um guia de voz", bullets: ["A IA é genérica se ninguém lhe disser como você soa", "Ajuda quem o ajuda a publicar"] },
            { title: "O que tem o guia", bullets: ["Três palavras para a sua voz", "Palavras que usa e que nunca usa", "Temas para publicar e para evitar", "Duas publicações de exemplo"] },
            { title: "A IA ajuda a encontrar a sua voz", bullets: ["Cole cinco legendas verdadeiras", "Peça-lhe para descrever a sua voz"] }
          ],
          tryIt: "Cole cinco das suas legendas num assistente de IA e peça-lhe para descrever a sua voz. Escreva o seu guia de uma página a partir do resultado.",
          youCanNow: "escrever um guia de voz da marca que faz o que a IA escreve soar como você.",
          quickCheck: [
            { objective: "O1", q: "Porque é que a IA precisa de um guia de voz?", options: ["Escreve com uma voz genérica, a não ser que lhe diga como você soa", "Não consegue escrever legendas sem ele", "É obrigatório por lei", "Torna as publicações mais longas"], answer: 0, why: "Um guia de voz diz à IA e a quem o ajuda como você soa." },
            { objective: "O1", q: "O seu irmão mais novo ajuda a publicar por você. Como é que o guia de voz ajuda?", options: ["Dá-lhe a sua palavra-passe", "Deixa-o publicar qualquer coisa", "Mostra-lhe como você soa e o que nunca publica", "Substitui a sua revisão"], answer: 2, why: "O guia ajuda os colegas de equipa ou familiares que o ajudam com as publicações." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Criar uma biblioteca de pedidos",
          minutes: 5,
          goal: "Guardar dez pedidos reutilizáveis para as suas tarefas de marketing mais comuns.",
          text: [
            "Uma biblioteca de pedidos é um documento com pedidos (em inglês, \"prompts\") que você usa outra vez. Em vez de começar do zero de cada vez, copia um pedido, preenche os espaços em branco e cola o seu guia de voz.",
            "Os bons pedidos têm espaços em branco entre parênteses retos: \"Usando o meu guia de voz abaixo, escreva três legendas com menos de 150 caracteres para uma publicação do tipo [tipo] sobre [tema]. Termine com uma pergunta.\" Outros: opções de biografia, email de proposta a um patrocinador, nota de agradecimento, ideias de publicações para um pilar, uma resposta educada a um comentário negativo, um resumo da semana.",
            "Guarde a biblioteca no Google Docs ou numa aplicação de notas. Melhore um pedido sempre que ele lhe der uma resposta fraca."
          ],
          steps: ["Faça a lista das suas dez tarefas de marketing mais comuns.", "Escreva um pedido para cada uma com [espaços em branco].", "Acrescente a cada um \"Usando o meu guia de voz abaixo...\".", "Guarde-os num só documento.", "Melhore um pedido sempre que der uma resposta fraca."],
          words: [["Biblioteca de pedidos", "uma coleção guardada de pedidos que você usa outra vez."], ["Pedido modelo", "um pedido com espaços em branco que preenche de cada vez."]],
          slides: [
            { title: "Biblioteca de pedidos", bullets: ["Use outra vez, não comece do zero", "Preencha os [espaços em branco]", "Cole o seu guia de voz"] },
            { title: "Dez tarefas comuns", bullets: ["Legendas, biografias, ideias de publicações", "Proposta a patrocinador, nota de agradecimento", "Respostas, resumo da semana"] },
            { title: "Continue a melhorar", bullets: ["Um só documento", "Corrija os pedidos que dão respostas fracas"] }
          ],
          tryIt: "Escreva os seus primeiros cinco pedidos modelo com [espaços em branco]. Teste um com o seu guia de voz e corrija-o se a resposta for fraca.",
          youCanNow: "criar e usar uma biblioteca de pedidos para as suas tarefas de marketing.",
          quickCheck: [
            { objective: "O2", q: "O que é uma biblioteca de pedidos?", options: ["Uma lista de aplicações", "Um documento de pedidos que você usa outra vez", "A lista dos seus seguidores", "Um cartão de biblioteca"], answer: 1, why: "É um conjunto guardado de pedidos que copia, preenche e usa outra vez." },
            { objective: "O2", q: "Responde muitas vezes a comentários negativos. O que acrescenta à sua biblioteca?", options: ["Nada; responde com raiva", "Uma aplicação nova", "Uma lista de pessoas para bloquear", "Um pedido para uma resposta educada com [espaços em branco] e o seu guia de voz"], answer: 3, why: "Guarde um pedido para cada tarefa comum, incluindo respostas educadas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escolher uma ferramenta por tarefa",
          minutes: 5,
          goal: "Escolher uma ferramenta para escrita, design, vídeo e acompanhamento.",
          text: [
            "Precisa de cobrir quatro tarefas. Escrita: um assistente de IA como o ChatGPT, o Microsoft Copilot ou o Google Gemini. Design: uma ferramenta como o Canva, que tem modelos e funções de IA. Vídeo: um editor gratuito como o CapCut ou os editores dentro do Instagram, do TikTok e do YouTube. Acompanhamento: as estatísticas de cada aplicação mais uma folha do Google Sheets.",
            "Escolha uma por tarefa e aprenda-a bem. Antes de se inscrever em algo novo, verifique quem o faz, que dados recolhe e quanto custa depois de qualquer período grátis.",
            "Muitas aplicações também deixam agendar publicações com antecedência, dentro da aplicação ou com ferramentas de agendamento. Agendar ajuda nas semanas cheias, mas verifique se as publicações agendadas ainda fazem sentido quando as notícias ou os resultados mudam."
          ],
          steps: ["Escolha uma ferramenta de escrita.", "Escolha uma ferramenta de design.", "Escolha um editor de vídeo.", "Prepare uma folha de acompanhamento.", "Escreva as quatro escolhas no documento do seu kit."],
          words: [["Agendamento", "marcar uma publicação para sair sozinha mais tarde."], ["Estatísticas (insights)", "os números de uma aplicação sobre como correm as suas publicações."]],
          slides: [
            { title: "Quatro tarefas", bullets: ["Escrita: um assistente de IA", "Design: Canva", "Vídeo: CapCut ou editores das aplicações", "Acompanhamento: estatísticas + uma folha"] },
            { title: "Antes de se inscrever", bullets: ["Quem a faz?", "Que dados recolhe?", "Quanto custa depois do período grátis?"] },
            { title: "Agendamento", bullets: ["Ótimo para semanas cheias", "Verifique se ainda serve quando as notícias mudam"] }
          ],
          tryIt: "Escreva as suas quatro escolhas de ferramentas no documento do seu kit e prepare uma folha de acompanhamento com as colunas: Data, Publicação, Plataforma, Visualizações, Interação, Notas.",
          youCanNow: "escolher um pequeno conjunto de ferramentas que cobre todas as tarefas de marketing.",
          quickCheck: [
            { objective: "O3", q: "Que ferramenta serve para a tarefa de acompanhamento?", options: ["Um editor de vídeo", "Um modelo de design", "As estatísticas de cada aplicação mais uma folha do Google Sheets", "Um criador de imagens de IA"], answer: 2, why: "O acompanhamento usa as estatísticas das aplicações e uma folha de cálculo." },
            { objective: "O3", q: "O seu jogo foi cancelado e uma publicação agendada diz \"Até logo à noite!\". O que faz?", options: ["Muda ou cancela a publicação agendada", "Deixa-a sair", "Apaga a sua conta", "Agenda uma segunda publicação"], answer: 0, why: "Verifique se as publicações agendadas ainda fazem sentido quando as notícias mudam." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A sua voz e os seus pedidos",
        questions: [
          { objective: "O1", q: "Porquê escrever um guia de voz da marca?", options: ["Para tornar as publicações mais longas", "Para esconder o seu nome", "Para que a IA e quem o ajuda escrevam como você soa", "É obrigatório nas aplicações"], answer: 2, why: "A IA é genérica, a não ser que lhe diga qual é a sua voz." },
          { objective: "O1", q: "O que faz parte de um guia de voz?", options: ["Palavras que nunca usa", "A sua palavra-passe", "Os seus dados do banco", "As estatísticas do seu rival"], answer: 0, why: "Define como o conteúdo soa." },
          { objective: "O2", q: "O que torna um pedido reutilizável?", options: ["Ser muito curto", "Não ter instruções", "Usar só maiúsculas", "Espaços em branco entre [parênteses retos] que você preenche"], answer: 3, why: "Os modelos poupam tempo cada vez que os usa." },
          { objective: "O2", q: "Um pedido guardado continua a dar respostas fracas. Você:", options: ["Apaga a biblioteca", "Melhora o pedido", "Usa-o na mesma", "Muda para cinco aplicações novas"], answer: 1, why: "Os pedidos ficam melhores com correções." },
          { objective: "O3", q: "Antes de se inscrever numa ferramenta de IA nova, verifique:", options: ["A cor do logótipo", "Quem a faz, que dados usa e quanto custa depois do período grátis", "Quantos anúncios mostra", "Nada"], answer: 1, why: "Isto protege os seus dados e o seu dinheiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Qualidade, direitos e resultados",
      lessons: [
        {
          objectives: ["O4"],
          title: "A lista de revisão de cinco pontos",
          minutes: 5,
          goal: "Rever o conteúdo feito com IA com uma lista de cinco pontos antes de publicar.",
          text: [
            "A IA poupa tempo, mas você é responsável por tudo o que publica. Passe cada conteúdo por cinco verificações.",
            "1. Verdade: cada facto, número e afirmação está certo. 2. Voz: soa como você (leia em voz alta). 3. Direitos: você é dono ou pode usar cada foto, logótipo, vídeo e música. 4. Divulgação: qualquer pagamento de uma marca ou produto grátis está dito com clareza. 5. Segurança: nenhuma informação privada, localização em tempo real ou algo de que se arrependeria.",
            "Ponha a lista no topo do documento do seu kit. Quando alguém o ajuda a publicar, também a usa."
          ],
          steps: ["Verdade: verifique factos e números.", "Voz: leia em voz alta.", "Direitos: verifique fotos, logótipos, vídeos e música.", "Divulgação: ligações a marcas ditas com clareza.", "Segurança: nenhuma informação privada nem localização em tempo real."],
          words: [["Lista de revisão", "uma lista curta de verificações feitas antes de publicar qualquer coisa."], ["Responsável", "você responde pelo que é publicado, mesmo que tenha sido a IA a escrever."]],
          slides: [
            { title: "Você é responsável", bullets: ["Mesmo que tenha sido a IA a escrever"] },
            { title: "Cinco verificações", bullets: ["1. Verdade  2. Voz", "3. Direitos  4. Divulgação", "5. Segurança"] },
            { title: "Use-a sempre", bullets: ["No topo do seu kit", "Quem o ajuda também a usa"] }
          ],
          tryIt: "Pegue numa legenda escrita pela IA e faça as cinco verificações. Escreva o que mudou em cada verificação.",
          youCanNow: "rever o conteúdo da IA quanto à verdade, à voz, aos direitos, à divulgação e à segurança.",
          quickCheck: [
            { objective: "O4", q: "O que pergunta a verificação \"Direitos\"?", options: ["A legenda é suficientemente longa?", "Está na moda?", "Publicou hoje?", "É dono ou tem autorização para cada foto, logótipo, vídeo e música?"], answer: 3, why: "Direitos quer dizer que pode usar tudo o que está na publicação." },
            { objective: "O4", q: "Uma legenda da IA fala do parque onde treina todas as manhãs às 6. Que verificação apanha isto?", options: ["Voz", "Segurança", "Verdade", "Divulgação"], answer: 1, why: "A verificação Segurança tira informações privadas e a localização em tempo real ou a rotina." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Direitos, logótipos, música e divulgação",
          minutes: 5,
          goal: "Identificar o que pode usar no seu conteúdo e escrever uma divulgação clara para ligações a marcas.",
          text: [
            "Direitos: pode usar fotos e vídeos que você fez e aqueles para os quais tem autorização. As fotos da equipa e dos jogos tiradas por outras pessoas pertencem ao fotógrafo ou à escola, por isso peça. Os logótipos da escola, da liga e das marcas precisam de autorização. Use música da biblioteca licenciada de uma aplicação.",
            "Imagens de IA: tenha cuidado ao fazer imagens de IA de pessoas reais, colegas de equipa ou logótipos de marcas. Não faça imagens que possam enganar as pessoas e fazê-las pensar que aconteceu algo que não aconteceu.",
            "Divulgação: a FTC (a agência dos EUA que protege os consumidores) diz que deve divulgar com clareza qualquer pagamento, produto grátis ou outra ligação a uma marca, na própria publicação, com palavras claras como \"Publicidade\" ou \"Obrigado [marca] pelo equipamento grátis\". Estudantes-atletas: verifiquem as regras NIL (nome, imagem e semelhança) com o gabinete de conformidade ou a associação desportiva do estado."
          ],
          steps: ["Use as suas fotos ou aquelas para as quais tem autorização.", "Peça antes de usar logótipos.", "Use música licenciada.", "Não faça imagens de IA enganadoras de pessoas reais.", "Divulgue com clareza as ligações a marcas em cada publicação."],
          words: [["Direitos de autor", "o direito legal do dono de controlar cópias de fotos, vídeos, música e textos."], ["Autorização", "um sim claro do dono para usar o trabalho dele."]],
          slides: [
            { title: "Direitos", bullets: ["As suas fotos e vídeos", "Fotos de outras pessoas: peça", "Logótipos precisam de autorização; música licenciada"] },
            { title: "Imagens de IA", bullets: ["Cuidado com pessoas reais e logótipos", "Nada que engane as pessoas"] },
            { title: "Divulgação", bullets: ["Pagamento ou produto grátis: diga com clareza", "Na publicação, \"Publicidade\" ou um agradecimento", "Verifique as regras NIL"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers (guia de divulgação para influenciadores, em inglês)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness (nome, imagem e semelhança, em inglês)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Olhe para as suas últimas cinco publicações. Para cada foto, vídeo e música, escreva quem é o dono e se tinha autorização. Corrija ou tire tudo o que falhar.",
          youCanNow: "usar só conteúdo sobre o qual tem direitos e divulgar corretamente as ligações a marcas.",
          quickCheck: [
            { objective: "O5", q: "Normalmente, quem é o dono das fotos de jogos tiradas pelo fotógrafo da escola?", options: ["O fotógrafo ou a escola", "Você, porque aparece nelas", "Qualquer pessoa que as veja", "A outra equipa"], answer: 0, why: "As fotos tiradas por outras pessoas pertencem ao fotógrafo ou à escola, por isso peça." },
            { objective: "O5", q: "Quer uma imagem de IA de um colega de equipa a segurar um troféu que nunca ganhou. O que faz?", options: ["Fá-la como piada", "Publica-a sem legenda", "Pede à IA para a tornar mais real", "Não a faz; pode enganar as pessoas"], answer: 3, why: "Não faça imagens de IA que possam fazer as pessoas pensar que algo aconteceu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Acompanhar resultados e melhorar o kit",
          minutes: 5,
          goal: "Acompanhar os resultados todas as semanas e usá-los para melhorar os seus pedidos e o seu plano.",
          text: [
            "Uma vez por semana, copie os números das suas publicações das estatísticas de cada aplicação para a sua folha de acompanhamento: visualizações, interação (gostos, comentários, partilhas, guardados) e tudo o que tem a ver com o seu objetivo, como cliques em links ou inscrições.",
            "Encontre as suas melhores e piores publicações. Cole a tabela num assistente de IA e pergunte: \"Que tipos de publicações correram melhor e o que têm em comum? Dê-me duas ideias para a próxima semana.\" Verifique na folha a leitura que ele fez.",
            "Depois melhore o seu kit: atualize o pedido que fez a sua melhor publicação, corrija o que está por trás da pior e acrescente ao seu guia de voz qualquer lição nova."
          ],
          steps: ["Copie os números da semana para a sua folha.", "Encontre as melhores e as piores publicações.", "Pergunte à IA o que as melhores têm em comum.", "Verifique a resposta dela na folha.", "Atualize os seus pedidos e o guia de voz."],
          words: [["Interação", "como as pessoas reagem: gostos, comentários, partilhas, guardados."], ["Iterar", "melhorar algo passo a passo com base nos resultados."]],
          slides: [
            { title: "Números da semana", bullets: ["Visualizações e interação", "Números do objetivo: cliques, inscrições"] },
            { title: "Aprenda com eles", bullets: ["Melhores e piores publicações", "A IA encontra o que as melhores têm em comum", "Verifique na sua folha"] },
            { title: "Melhore o kit", bullets: ["Atualize os pedidos que funcionam", "Corrija os fracos", "Acrescente lições ao seu guia de voz"] }
          ],
          tryIt: "Tarefa final: termine o documento do seu kit (guia de voz, dez pedidos, quatro ferramentas, lista de cinco pontos), depois faça com ele uma publicação do início ao fim e registe os números dela na sua folha.",
          youCanNow: "acompanhar os resultados e continuar a melhorar o seu kit de marketing com IA.",
          quickCheck: [
            { objective: "O6", q: "Com que frequência deve copiar os seus números para a folha de acompanhamento?", options: ["Uma vez por ano", "Uma vez por semana", "Nunca", "De hora a hora"], answer: 1, why: "Registe os números todas as semanas." },
            { objective: "O6", q: "A sua melhor publicação veio de um pedido guardado. O que faz?", options: ["Apaga o pedido", "Deixa de publicar esse tipo", "Atualiza e continua a melhorar esse pedido", "Muda todas as suas ferramentas"], answer: 2, why: "Atualize o pedido que fez a sua melhor publicação e corrija o que está por trás da pior." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Qualidade, direitos e resultados",
        questions: [
          { objective: "O4", q: "Quem é responsável por uma publicação escrita pela IA que você publica?", options: ["A empresa da IA", "Os seus seguidores", "Ninguém", "Você"], answer: 3, why: "Você responde pelo que publica." },
          { objective: "O4", q: "Qual destas é uma das cinco verificações?", options: ["Direitos", "Tamanho da letra", "Número de emojis", "Comprimento da publicação"], answer: 0, why: "Tem de ser dono ou ter autorização para tudo o que usa." },
          { objective: "O5", q: "O fotógrafo da equipa tirou-lhe uma ótima foto. Antes de publicar, você:", options: ["Corta a marca de água dele", "Publica-a como sua", "Pede autorização", "Edita-a com IA"], answer: 2, why: "O fotógrafo ou a escola podem ser os donos." },
          { objective: "O5", q: "Fazer uma imagem de IA que parece mostrar um colega a fazer algo que não fez é:", options: ["Normal se for engraçado", "Obrigatório", "Bom marketing", "Enganador e deve ser evitado"], answer: 3, why: "Não faça conteúdo que engane as pessoas." },
          { objective: "O6", q: "A IA diz que os seus vídeos correram melhor. Você:", options: ["Confia totalmente", "Verifica na sua folha a leitura dela", "Apaga a sua folha", "Deixa de publicar vídeos"], answer: 1, why: "A IA pode ler mal os dados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Kit de Ferramentas de IA para Marketing e Marca",
    questions: [
      { objective: "O1", q: "Um kit de ferramentas de marketing é:", options: ["O maior número possível de aplicações", "Uma mala para a câmara", "Um pequeno conjunto de ferramentas, mais um guia e pedidos guardados", "Uma agência paga"], answer: 2, why: "Pequeno e repetível é melhor do que muitas aplicações." },
      { objective: "O1", q: "A voz da marca é:", options: ["A personalidade e o estilo da forma como você escreve", "A sua voz a cantar", "O seu volume", "O seu logótipo"], answer: 0, why: "É como você soa quando escreve." },
      { objective: "O1", q: "Como pode a IA ajudar a encontrar a sua voz?", options: ["Descrevendo a voz das suas legendas verdadeiras", "Inventando uma personalidade nova", "Copiando uma celebridade", "Escolhendo os seus valores"], answer: 0, why: "As suas publicações verdadeiras mostram a sua voz." },
      { objective: "O1", q: "Quantas palavras para a sua voz deve escolher?", options: ["Vinte", "Nenhuma", "Três", "Cem"], answer: 2, why: "Três são fáceis de lembrar e de usar." },
      { objective: "O2", q: "Um pedido modelo tem:", options: ["Nenhuma instrução", "Espaços em branco que você preenche", "A sua palavra-passe", "Só emojis"], answer: 1, why: "Os espaços em branco tornam-no reutilizável." },
      { objective: "O2", q: "Onde deve guardar a sua biblioteca de pedidos?", options: ["Na sua cabeça", "Espalhada por várias conversas", "Em lado nenhum", "Num só documento, como o Google Docs ou as notas"], answer: 3, why: "Um só lugar é fácil de usar e de atualizar." },
      { objective: "O3", q: "Que ferramenta serve para a tarefa de design?", options: ["Um cronómetro", "Só uma folha de cálculo", "O Canva", "Uma calculadora"], answer: 2, why: "O Canva tem modelos de design." },
      { objective: "O3", q: "Qual serve para a tarefa de vídeo?", options: ["Um processador de texto", "Um calendário", "Um termómetro", "O CapCut ou os editores das aplicações"], answer: 3, why: "Eles editam vídeo." },
      { objective: "O3", q: "Agendar publicações ajuda:", options: ["Nas semanas cheias", "Nunca", "Só à noite", "Só os profissionais"], answer: 0, why: "As publicações saem enquanto você treina ou estuda." },
      { objective: "O3", q: "Uma publicação agendada pode precisar de mudar quando:", options: ["Nunca", "As notícias ou os resultados mudam", "Está sol", "Recebe um gosto"], answer: 1, why: "Publicações antigas podem parecer erradas depois de os acontecimentos mudarem." },
      { objective: "O4", q: "A verificação \"Verdade\" quer dizer:", options: ["Soa bem", "É longa", "Cada facto, número e afirmação está certo", "Tem música"], answer: 2, why: "A exatidão protege o seu nome." },
      { objective: "O4", q: "A forma mais fácil de fazer a verificação \"Voz\" é:", options: ["Ler em voz alta", "Contar as palavras", "Acrescentar hashtags", "Perguntar a um desconhecido"], answer: 0, why: "Vai ouvir se soa como você." },
      { objective: "O4", q: "A verificação \"Segurança\" tira:", options: ["O seu desporto", "Os seus melhores momentos", "Os seus agradecimentos", "Informações privadas e localização em tempo real"], answer: 3, why: "A segurança vem primeiro." },
      { objective: "O4", q: "Quem publica por você deve:", options: ["Saltar as verificações", "Usar a mesma lista de revisão", "Publicar qualquer coisa", "Usar a sua própria voz"], answer: 1, why: "Fazer sempre igual protege a sua marca." },
      { objective: "O5", q: "Os direitos de autor são:", options: ["Uma regra do desporto", "O direito do dono de controlar cópias do seu trabalho", "Um tipo de hashtag", "Uma licença grátis para todos"], answer: 1, why: "Os donos controlam o seu trabalho." },
      { objective: "O5", q: "Que música é mais segura nos seus vídeos?", options: ["Qualquer música da rádio", "A banda sonora de um filme", "Uma música descarregada por um amigo", "A biblioteca licenciada da aplicação"], answer: 3, why: "A música licenciada evita que o vídeo seja retirado." },
      { objective: "O5", q: "Um produto grátis de uma marca tem de ser:", options: ["Divulgado com clareza na publicação", "Escondido", "Só na sua biografia", "Ignorado"], answer: 0, why: "A FTC conta os produtos grátis." },
      { objective: "O5", q: "Os estudantes-atletas devem verificar as regras NIL com:", options: ["Um fã", "Um rival", "O gabinete de conformidade ou a associação desportiva do estado", "Só uma IA"], answer: 2, why: "As regras variam e mudam." },
      { objective: "O6", q: "A interação inclui:", options: ["A sua altura", "As suas notas da escola", "O tempo", "Gostos, comentários, partilhas e guardados"], answer: 3, why: "Interação é a reação das pessoas." },
      { objective: "O6", q: "Iterar quer dizer:", options: ["Começar de novo todos os dias", "Melhorar passo a passo com base nos resultados", "Nunca mudar", "Copiar os outros"], answer: 1, why: "Pequenas melhorias somam-se." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 4, 6, 10, 12, 15, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Guia de voz da marca", objective: "O1", notYet: "Faltam as palavras da voz, as palavras que nunca usa ou as publicações de exemplo.", meets: "Uma página com três palavras para a voz, palavras que usa e que nunca usa, temas, hábitos e duas publicações de exemplo.", exceeds: "Feito a partir de legendas verdadeiras e testado pondo a IA a escrever uma publicação que um amigo diz que soa como o aluno." },
      { name: "Biblioteca de pedidos", objective: "O2", notYet: "Menos de dez pedidos, ou pedidos sem espaços em branco ou sem o guia de voz.", meets: "Dez pedidos com [espaços em branco], cada um a usar o guia de voz, guardados num só documento.", exceeds: "Pelo menos um pedido foi melhorado depois de uma resposta fraca, com uma nota sobre o que mudou." },
      { name: "Escolha das ferramentas", objective: "O3", notYet: "Falta uma ferramenta para uma tarefa, ou as ferramentas não foram verificadas.", meets: "Uma ferramenta para escrita, design, vídeo e acompanhamento, com quem a faz, os dados e o custo verificados.", exceeds: "Inclui uma nota sobre quando usa o agendamento e como verifica as publicações agendadas." },
      { name: "Lista de revisão", objective: "O4", notYet: "A lista falta ou está incompleta.", meets: "As cinco verificações estão no topo do documento do kit.", exceeds: "As pessoas que publicam pelo aluno aceitaram usá-la." },
      { name: "Uma publicação do início ao fim", objective: "O5", notYet: "A publicação falha uma verificação, como os direitos ou a divulgação.", meets: "Uma publicação feita com o kit que passa nas cinco verificações, com conteúdo autorizado e a divulgação na publicação, se houver.", exceeds: "Os números dela estão registados na folha de acompanhamento e foram usados para atualizar um pedido." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o kit e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que ainda usam a sua biblioteca de pedidos e a lista de revisão 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem poupar tempo com o conteúdo todas as semanas",
      "Alunos que dizem ter apanhado um problema de direitos, divulgação ou segurança antes de publicar"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "O Canva gratuito e um editor de vídeo gratuito (CapCut ou os editores das aplicações)",
      "Uma conta Google gratuita para o Google Docs e o Google Sheets",
      "Cinco das suas legendas antigas",
      "Cerca de 60 minutos"
    ],
    facilitatorNotes: [
      "Peça aos alunos para trazerem cinco legendas verdadeiras, para que o guia de voz seja feito a partir da escrita deles.",
      "Partilhe com o grupo uma biblioteca de pedidos inicial e depois peça a cada aluno para a adaptar à sua voz.",
      "Reveja a lista de cinco pontos com o pessoal da equipa que publica pelos atletas, para que todos usem as mesmas verificações.",
      "Fale com cuidado sobre imagens de IA de pessoas reais; nunca crie imagens enganadoras de colegas de equipa ou adversários.",
      "Envie as perguntas sobre NIL para o gabinete de conformidade ou para a associação do estado antes de qualquer publicação patrocinada."
    ]
  }
};
