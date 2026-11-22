"use strict";

// Koach Learn course (Portuguese translation of shared/ai-community-advocacy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific rules (IRS, 501(c)(3), U.S. Census Bureau) are kept as in the English.

module.exports = {
  id: "ai-community-advocacy-pt",
  lang: "pt",
  translationOf: "ai-community-advocacy",
  category: "Non Profits",
  name: "IA para a Defesa de Causas da Comunidade",
  skills: "Definir um problema e um pedido claro, Pesquisar dados e verificar fontes, Encontrar quem decide, Escrever uma carta ou um comentário público com IA, Fazer uma ficha informativa de uma página, Fazer um depoimento público de dois minutos",
  outcome: "planear uma pequena campanha sobre um problema local com a ajuda da IA: definir um pedido claro, apoiá-lo com dados verificados e histórias reais, chegar à pessoa certa que decide com uma carta ou um comentário público e uma ficha informativa de uma página, e falar num depoimento público de dois minutos, cumprindo as regras para organizações sem fins lucrativos.",
  about: [
    "Defender uma causa quer dizer falar para mudar alguma coisa: uma passadeira perigosa, uma linha de autocarro que foi cortada, um parque que precisa de luz, uma regra que impede as pessoas de ter trabalho ou casa. As comunidades que falam com clareza e com dados são ouvidas mais vezes.",
    "Este curso é para funcionários e voluntários de organizações sem fins lucrativos, grupos religiosos e de bairro, e membros da comunidade que querem mudar as coisas. Assistentes de IA como o ChatGPT, o Microsoft Copilot e o Google Gemini podem ajudar a pesquisar, escrever cartas, fazer fichas informativas e treinar discursos, enquanto a voz da sua comunidade e as histórias reais ficam no centro.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Aqui, defender uma causa é sobre problemas, não sobre candidatos; as organizações sem fins lucrativos têm regras especiais, explicadas na Lição 6."
  ],
  finalTask: "Monte um kit de defesa para um problema local real: o problema numa frase e um pedido concreto, três dados com fontes oficiais, duas histórias curtas da comunidade partilhadas com autorização, o nome de quem decide e como chegar a essa pessoa, uma carta ou um comentário público com menos de 300 palavras, uma ficha informativa de uma página e um depoimento de dois minutos que já treinou em voz alta.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Funcionários e voluntários de organizações sem fins lucrativos, grupos religiosos e de bairro, e membros da comunidade que querem mudar um problema local, como uma passadeira perigosa, uma linha de autocarro cortada ou uma regra que impede as pessoas de ter trabalho ou casa.",
    startingPoint: "Preocupam-se com um problema local e sabem falar dele com os vizinhos. Muitos nunca escreveram um comentário público, nunca procuraram a pessoa certa que decide, nunca verificaram dados em fontes oficiais nem falaram numa reunião pública.",
    gap: "As comunidades que falam com um pedido claro, dados verificados e histórias reais são ouvidas mais vezes. Os alunos precisam de planear uma pequena campanha com a ajuda da IA, mantendo a voz da comunidade no centro e cumprindo as regras para organizações sem fins lucrativos, para que o seu esforço traga uma mudança real.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou computador com um assistente de IA gratuito e uma ferramenta gratuita de design ou de documentos",
      "As histórias só são partilhadas com autorização, e os detalhes privados ficam fora dos pedidos à IA",
      "Regras para organizações sem fins lucrativos: só defesa de causas, sem apoio a candidatos; os alunos consultam as orientações do IRS",
      "Tempo: lições de cerca de cinco minutos, mais tempo para pesquisar e treinar"
    ],
    prerequisites: "Nenhum. Quem é novo nas ferramentas de IA pode fazer primeiro o curso \"Introdução à IA e Confiança Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma preocupação da comunidade", action: "escrever o problema numa frase e um pedido concreto que diga o quê, a quem e até quando", standard: "construído com pelo menos duas pessoas afetadas" },
    { id: "O2", condition: "Para o seu problema", action: "encontrar dados em fontes oficiais ou de confiança e recolher histórias da comunidade", standard: "com três dados, cada um com fonte, link e data, e histórias partilhadas só com autorização" },
    { id: "O3", condition: "Usando sites oficiais", action: "identificar quem decide, a próxima reunião ou o prazo para comentários, os seus aliados e a provável oposição", standard: "com quem decide confirmado numa fonte oficial" },
    { id: "O4", condition: "Usando os seus dados verificados e uma história", action: "escrever uma carta ou um comentário público respeitoso que faça o seu pedido", standard: "com menos de 300 palavras, dizendo quem você é, os dados, uma história e o pedido" },
    { id: "O5", condition: "Usando IA para o texto e uma ferramenta de design gratuita", action: "criar uma ficha informativa de uma página com o pedido numa caixa bem visível", standard: "para que um leitor consiga dizer o pedido depois de um minuto" },
    { id: "O6", condition: "Numa reunião pública", action: "fazer um depoimento de dois minutos e planear a ação dos apoiantes dentro das regras para organizações sem fins lucrativos", standard: "cronometrado em dois minutos ou menos e sem apoio a candidatos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Construir o seu caso",
      lessons: [
        {
          objectives: ["O1"],
          title: "Definir o problema e o seu pedido",
          minutes: 5,
          goal: "Transformar uma preocupação da comunidade num problema claro e num pedido concreto.",
          text: [
            "Preocupações grandes como \"o nosso bairro não é seguro\" são difíceis de resolver para as autoridades. Reduza-a a um problema concreto: \"As crianças atravessam seis faixas na Rua Principal, na esquina com a 5.ª Avenida, para ir à escola, e não há semáforo para peões.\"",
            "Depois faça um pedido concreto: o que quer exatamente, a quem e até quando. \"Pedimos à Direção Municipal de Transportes que instale um semáforo para peões na esquina da Rua Principal com a 5.ª Avenida antes do próximo ano letivo.\" Um pedido claro dá a quem decide uma coisa a que pode dizer sim.",
            "Peça à IA para o melhorar: \"Ajude-me a transformar esta preocupação num problema numa frase e num pedido concreto e realista: [a sua preocupação].\" Depois confirme com as pessoas mais afetadas. A defesa de causas funciona melhor quando é a comunidade que dá forma ao pedido."
          ],
          steps: ["Escreva a preocupação com as suas palavras.", "Reduza-a a um problema, um lugar e um grupo afetado concretos.", "Escreva um pedido: o quê, quem decide, até quando.", "Peça à IA para melhorar as palavras.", "Confirme com as pessoas mais afetadas."],
          words: [["Defesa de causas", "falar para mudar uma política, uma prática ou uma decisão."], ["Pedido", "a ação concreta que quer que a pessoa que decide faça."], ["Descrição do problema", "uma ou duas frases que explicam o problema com clareza."]],
          slides: [
            { title: "Da preocupação ao problema", bullets: ["\"Não é seguro\" é amplo demais", "Diga o lugar, as pessoas, o problema"] },
            { title: "Um pedido concreto", bullets: ["O quê, exatamente", "A quem", "Até quando"] },
            { title: "A comunidade primeiro", bullets: ["A IA melhora as palavras", "As pessoas afetadas dão forma ao pedido"] }
          ],
          tryIt: "Escolha uma preocupação local real. Escreva o problema numa frase e um pedido concreto, use a IA para os melhorar e mostre-os a duas pessoas afetadas.",
          youCanNow: "transformar uma preocupação num problema claro e num pedido concreto.",
          quickCheck: [
            { objective: "O1", q: "Que três coisas tem um pedido forte?", options: ["O seu nome, idade e morada", "O quê, a quem e até quando", "Um lema, um logótipo e uma cor", "Uma queixa, uma ameaça e um prazo"], answer: 1, why: "Um pedido forte diz a ação, quem decide e o prazo." },
            { objective: "O1", q: "A preocupação do seu grupo é \"o nosso bairro não é seguro\". O que faria primeiro?", options: ["Reduzi-la a um problema concreto que as autoridades podem resolver", "Enviá-la a todas as autoridades do estado", "Publicá-la na internet sem mudanças", "Esperar que as coisas piorem"], answer: 0, why: "Problemas concretos levam a ações concretas que as autoridades podem tomar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pesquisar dados e verificar as fontes",
          minutes: 6,
          goal: "Encontrar dados que apoiem o seu caso e verificar cada um numa fonte oficial ou de confiança.",
          text: [
            "Os dados fazem as autoridades ouvir. Fontes úteis: sites da cidade e do condado, atas de reuniões e orçamentos, serviços do estado, o U.S. Census Bureau (o serviço de recenseamento dos EUA, data.census.gov) para dados de população e rendimento, dados da polícia ou dos transportes, notícias locais e estudos de universidades ou de organizações sem fins lucrativos.",
            "A IA pode sugerir onde procurar e o que pesquisar: \"Que tipos de dados públicos mostrariam problemas de segurança para peões num cruzamento de uma cidade dos EUA, e onde os encontro?\" Mas a IA pode inventar números e estudos. Nunca use um número da IA se não o encontrar você mesmo na fonte original.",
            "Junte três dados fortes, cada um com o nome da fonte, o link e a data. Acrescente histórias reais: um pai ou uma mãe, um aluno, um guarda de passadeira. Peça sempre autorização para partilhar a história de alguém e deixe de fora os detalhes privados que a pessoa não quer tornar públicos."
          ],
          steps: ["Pergunte à IA onde encontrar dados sobre o seu problema.", "Vá você mesmo a essas fontes.", "Anote três dados com fonte, link e data.", "Nunca use um número que não encontra na fonte original.", "Junte duas histórias com autorização."],
          words: [["Fonte", "o lugar de onde vem um dado."], ["Fonte primária", "o lugar original onde os dados ou a informação foram publicados."], ["Ata da reunião", "o registo escrito oficial de uma reunião pública."]],
          slides: [
            { title: "Onde estão os dados", bullets: ["Sites da cidade, do condado e do estado", "Dados do recenseamento e relatórios de serviços", "Notícias locais e estudos"] },
            { title: "A IA indica, você verifica", bullets: ["A IA pode inventar números", "Encontre cada número na fonte original", "Anote a fonte, o link e a data"] },
            { title: "Dados e histórias", bullets: ["Experiências de pessoas reais", "Peça sempre autorização", "Deixe de fora os detalhes privados"] }
          ],
          sources: [{ name: "U.S. Census Bureau: data.census.gov", url: "https://data.census.gov/" }],
          tryIt: "Encontre três dados sobre o seu problema em fontes oficiais ou de confiança, com o link e a data de cada um. Pergunte a duas pessoas se pode partilhar a história delas.",
          youCanNow: "pesquisar dados verificados e recolher histórias da comunidade com autorização.",
          quickCheck: [
            { objective: "O2", q: "Qual é uma fonte de confiança para um dado sobre a sua cidade?", options: ["Uma publicação qualquer nas redes sociais", "Uma resposta da IA sem link", "O site oficial ou um relatório da própria cidade", "Um boato de um vizinho"], answer: 2, why: "Nas fontes oficiais os dados podem ser verificados e citados." },
            { objective: "O2", q: "Um vizinho conta-lhe uma história forte sobre como se magoou na passadeira. O que faria antes de a usar?", options: ["Usá-la com o nome completo e a morada dele", "Mudar os detalhes e usá-la na mesma", "Publicá-la primeiro na internet", "Pedir-lhe autorização e perguntar como quer ser identificado"], answer: 3, why: "As histórias só são partilhadas com a autorização da pessoa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar quem decide e o momento certo",
          minutes: 5,
          goal: "Identificar quem pode dizer sim ao seu pedido e quando vai decidir.",
          text: [
            "A defesa de uma causa falha quando vai para a pessoa errada. Descubra quem tem o poder de dizer sim: um membro da câmara municipal, um conselho do condado, um conselho escolar, um deputado estadual, o chefe de um serviço ou o gerente de uma empresa.",
            "Pergunte à IA: \"Numa cidade típica dos EUA, quem decide se se instala um novo semáforo para peões, e como é o processo?\" Depois confirme no site da sua própria cidade ou ligue para o serviço. Conheça o calendário: quando se fazem os orçamentos, quando a câmara ou o conselho se reúne e quando estão abertos os comentários públicos.",
            "Faça a lista dos seus aliados (vizinhos, escolas, igrejas, empresas, outras organizações sem fins lucrativos) e de quem pode estar contra, e porquê. Os aliados tornam você mais forte; perceber a oposição ajuda a responder às preocupações."
          ],
          steps: ["Pergunte à IA quem costuma decidir sobre o seu problema.", "Confirme no site do seu governo local ou por telefone.", "Encontre as datas das reuniões, o calendário do orçamento e os períodos de comentário público.", "Faça a lista dos aliados e da provável oposição.", "Escolha o momento para agir."],
          words: [["Quem decide", "a pessoa ou o órgão com o poder de dizer sim ao seu pedido."], ["Comentário público", "uma oportunidade para o público falar ou escrever às autoridades antes de uma decisão."], ["Aliado", "uma pessoa ou um grupo que apoia a sua causa."]],
          slides: [
            { title: "Quem pode dizer sim?", bullets: ["Câmara, conselho, deputado, chefe de serviço", "Confirme em sites oficiais"] },
            { title: "Conheça o calendário", bullets: ["Datas das reuniões", "Calendário do orçamento", "Períodos de comentário público"] },
            { title: "Conheça o terreno", bullets: ["Aliados: vizinhos, escolas, igrejas, empresas", "A oposição e as suas razões"] }
          ],
          tryIt: "Encontre num site oficial quem decide sobre o seu problema e a próxima reunião ou prazo para comentários. Faça uma lista de três aliados e de uma provável preocupação de quem está contra.",
          youCanNow: "encontrar a pessoa certa que decide, o momento e os aliados para um pedido de defesa de causa.",
          quickCheck: [
            { objective: "O3", q: "Quem é a pessoa que decide, na defesa de causas?", options: ["A pessoa ou o órgão que pode dizer sim ao seu pedido", "Qualquer pessoa que concorda com você", "O jornal", "A pessoa que se queixa mais alto"], answer: 0, why: "Quem decide tem o poder de aceitar o seu pedido." },
            { objective: "O3", q: "Quer uma nova luz no parque, mas não sabe quem decide. O que faria?", options: ["Escrever ao Presidente", "Ver o site da cidade ou ligar para a cidade para saber", "Adivinhar e enviar ao conselho escolar", "Esperar que alguém lhe diga"], answer: 1, why: "Confirme quem decide numa fonte oficial antes de entrar em contacto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Construir o seu caso",
        questions: [
          { objective: "O1", q: "Qual é o pedido mais claro?", options: ["\"Melhorem as coisas\"", "\"Resolvam a segurança\"", "\"Pedimos à Direção de Transportes que instale um semáforo para peões na Rua Principal com a 5.ª Avenida antes do próximo ano letivo\"", "\"Façam alguma coisa já\""], answer: 2, why: "Diz o quê, quem e até quando." },
          { objective: "O2", q: "A IA dá-lhe um número sobre acidentes no seu cruzamento. O que faz?", options: ["Encontra-o na fonte original antes de o usar", "Usa-o logo", "Arredonda-o para cima", "Põe-no em negrito"], answer: 0, why: "A IA pode inventar números." },
          { objective: "O2", q: "Antes de partilhar a história de um vizinho na sua campanha, tem de:", options: ["Publicar a morada dele", "Mudá-la para parecer pior", "Nada", "Pedir-lhe autorização"], answer: 3, why: "As histórias pertencem às pessoas que as viveram." },
          { objective: "O3", q: "Porque é preciso encontrar quem decide?", options: ["Para publicar a morada de casa dessa pessoa", "A defesa de uma causa falha quando vai para a pessoa errada", "Não interessa", "Para a evitar"], answer: 1, why: "Só a pessoa certa pode dizer sim." },
          { objective: "O3", q: "O que é um período de comentário público?", options: ["Um programa de televisão", "Uma oportunidade para o público falar ou escrever antes de uma decisão", "Um prazo de impostos", "Uma reunião privada"], answer: 1, why: "É um tempo oficial para o público dar a sua opinião." }
        ]
      }
    },
    {
      name: "Capítulo 2: Falar de forma eficaz",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever uma carta ou um comentário público com IA",
          minutes: 5,
          goal: "Escrever uma carta ou um comentário público curto e respeitoso que faça o seu pedido.",
          text: [
            "Uma boa carta ou um bom comentário é curto (menos de 300 palavras) e tem quatro partes: quem você é e a sua ligação ao problema, o problema com um ou dois dados, uma pequena história real, e o seu pedido concreto com um agradecimento.",
            "Peça à IA: \"Escreva um comentário público respeitoso com menos de 300 palavras para a Câmara Municipal. Sou pai ou mãe de um aluno da Escola Primária Lincoln. Problema: [problema]. Dados: [os seus dados verificados]. História: [partilhada com autorização]. Pedido: [o seu pedido].\" Depois mude o texto para soar como você.",
            "As cartas pessoais valem mais do que as cartas iguais: as autoridades notam quando chegam centenas de mensagens da IA todas iguais. Incentive os apoiantes a acrescentar uma frase deles. Seja respeitoso mesmo que esteja zangado; os insultos são ignorados."
          ],
          steps: ["Quem você é e a sua ligação ao problema.", "O problema com um ou dois dados verificados.", "Uma pequena história real, partilhada com autorização.", "O seu pedido concreto e um agradecimento.", "Mude o texto para soar como você; mantenha menos de 300 palavras."],
          words: [["Carta-modelo", "a mesma carta enviada por muitas pessoas com pouca ou nenhuma mudança."], ["Eleitor representado", "uma pessoa que vive na área de uma autoridade eleita e que essa autoridade representa."]],
          slides: [
            { title: "Quatro partes", bullets: ["Quem você é", "O problema e os dados", "Uma história real", "O seu pedido e o agradecimento"] },
            { title: "A IA faz o rascunho, você dá o seu toque", bullets: ["Dê-lhe só dados verificados", "Menos de 300 palavras", "Faça-a soar como você"] },
            { title: "Faça-se ouvir", bullets: ["Uma carta pessoal vale mais do que cartas iguais", "Os apoiantes acrescentam uma frase deles", "Seja respeitoso"] }
          ],
          tryIt: "Com a ajuda da IA, escreva uma carta ou um comentário público com menos de 300 palavras sobre o seu problema, usando os seus dados verificados e uma história partilhada com autorização. Leia-a em voz alta e corrija-a.",
          youCanNow: "escrever uma carta ou um comentário público curto e respeitoso que faça um pedido claro.",
          quickCheck: [
            { objective: "O4", q: "O que é um eleitor representado?", options: ["Um funcionário de uma organização sem fins lucrativos", "Um representante de interesses pago (lobista)", "Um jornalista", "Uma pessoa que vive na área de uma autoridade eleita"], answer: 3, why: "As autoridades dão atenção às pessoas que representam." },
            { objective: "O4", q: "A IA escreve uma carta que parece zangada e culpa a câmara. O que faria?", options: ["Enviá-la para mostrar como está chateado", "Reescrevê-la de forma respeitosa, com dados, uma história e o pedido", "Acrescentar mais palavras zangadas", "Enviar a mesma carta com 100 nomes falsos"], answer: 1, why: "Cartas respeitosas e pessoais, com um pedido claro, têm mais hipóteses de ser ouvidas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer uma ficha informativa de uma página",
          minutes: 5,
          goal: "Criar uma ficha informativa de uma página que autoridades e vizinhos ocupados leiam num minuto.",
          text: [
            "Uma ficha informativa é uma folha de uma página que deixa às autoridades, partilha na internet e dá aos apoiantes. As pessoas ocupadas leem o topo e passam os olhos pelo resto.",
            "Estrutura: um título em negrito com o problema, três dados principais com fontes, uma frase curta de alguém ou uma história, o pedido numa caixa, e quem você é com os contactos. Use palavras simples, letra grande e um gráfico simples ou uma foto, se ajudar.",
            "Peça à IA para fazer o rascunho do texto a partir dos seus dados e depois arrume-o no Canva ou no Google Docs. Verifique outra vez cada número e cada fonte. Traduza a ficha se a sua comunidade fala outras línguas; a IA pode fazer um rascunho da tradução, mas peça a alguém que fala bem essa língua para a verificar."
          ],
          steps: ["Escreva um título que diga o problema.", "Acrescente três dados com fontes.", "Acrescente uma frase curta de alguém ou uma história.", "Ponha o pedido numa caixa.", "Arrume tudo numa página; verifique os números; peça a quem fala bem a língua para verificar as traduções."],
          words: [["Ficha informativa", "uma folha de uma página que resume um problema, os dados e um pedido."], ["Linguagem simples", "escrita clara e simples que a maioria das pessoas entende."]],
          slides: [
            { title: "Uma página, um minuto", bullets: ["As pessoas ocupadas leem o topo", "Depois passam os olhos pelo resto"] },
            { title: "Estrutura", bullets: ["Título com o problema", "Três dados com fontes", "Uma frase de alguém, o pedido numa caixa, os contactos"] },
            { title: "Dê o acabamento", bullets: ["Canva ou Google Docs", "Verifique outra vez cada número", "Traduções verificadas por quem fala bem a língua"] }
          ],
          tryIt: "Faça uma ficha informativa de uma página sobre o seu problema, com a IA a escrever o rascunho do texto e o Canva ou o Google Docs para o arranjo. Peça a alguém para a ler durante um minuto e dizer-lhe qual é o pedido.",
          youCanNow: "criar uma ficha informativa clara de uma página sobre um problema da comunidade.",
          quickCheck: [
            { objective: "O5", q: "Para quem é, sobretudo, uma ficha informativa?", options: ["Para autoridades e vizinhos ocupados que precisam dos pontos principais depressa", "Só para quem a escreveu", "Para advogados no tribunal", "Para alunos que escrevem redações"], answer: 0, why: "Uma ficha informativa dá a leitores ocupados o problema, os dados e o pedido num minuto." },
            { objective: "O5", q: "O rascunho da sua ficha tem duas páginas cheias de letra pequena. O que faria?", options: ["Pôr a letra mais pequena", "Acrescentar uma terceira página com mais dados", "Cortá-la para uma página com o pedido numa caixa bem visível", "Tirar o pedido para poupar espaço"], answer: 2, why: "Uma página com um pedido claro é mais fácil de ler e de pôr em prática." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Depoimento público, apoiantes e as regras",
          minutes: 6,
          goal: "Fazer um depoimento de dois minutos, mobilizar apoiantes e cumprir as regras de defesa de causas para organizações sem fins lucrativos.",
          text: [
            "Muitas câmaras e conselhos dão a cada pessoa dois ou três minutos para falar. Prepare uma versão de dois minutos da sua carta: cerca de 250 palavras faladas. Peça à IA para a encurtar e depois treine em voz alta com um cronómetro. Comece com o seu nome e a sua ligação ao problema, termine com o seu pedido e leve cópias da sua ficha informativa.",
            "Leve apoiantes. Uma sala cheia de vizinhos vestidos da mesma cor passa uma mensagem. Use a IA para escrever uma mensagem curta de inscrição e lembretes, e ajude os apoiantes a escrever os seus próprios comentários.",
            "Conheça as regras para organizações sem fins lucrativos. O IRS (o serviço de impostos dos EUA) diz que uma organização 501(c)(3) pode fazer algum lobbying, mas não como parte substancial das suas atividades, e que educar o público sobre políticas não é lobbying. É absolutamente proibido apoiar ou opor-se a candidatos a cargos públicos, mas a educação e o registo de eleitores apartidários são permitidos. Para casos concretos, pergunte a um advogado de organizações sem fins lucrativos ou à associação de organizações sem fins lucrativos do seu estado."
          ],
          steps: ["Encurte a sua carta para cerca de 250 palavras faladas.", "Treine em voz alta com um cronómetro de dois minutos.", "Leve cópias da ficha informativa e apoiantes.", "Use a IA para escrever mensagens de inscrição e lembretes.", "Verifique as regras para organizações sem fins lucrativos sobre lobbying e candidatos."],
          words: [["Depoimento", "falar às autoridades sobre um problema numa reunião pública."], ["Lobbying", "tentar influenciar leis, por exemplo contactando deputados sobre um projeto de lei."], ["Apartidário", "que não apoia nenhum partido político nem nenhum candidato."]],
          slides: [
            { title: "Depoimento de dois minutos", bullets: ["Cerca de 250 palavras faladas", "Primeiro o nome e a ligação, o pedido no fim", "Treine com um cronómetro"] },
            { title: "Leve apoiantes", bullets: ["Apareçam juntos", "A IA escreve inscrições e lembretes", "Cada pessoa acrescenta as suas palavras"] },
            { title: "Regras para 501(c)(3) (IRS)", bullets: ["Algum lobbying é permitido, mas não como parte substancial", "Não apoiar nem opor-se a candidatos", "A educação de eleitores apartidária é permitida"] }
          ],
          sources: [{ name: "IRS: Lobbying", url: "https://www.irs.gov/charities-non-profits/lobbying" }, { name: "IRS: Restriction of political campaign intervention by 501(c)(3) organizations", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations" }],
          tryIt: "Tarefa final: encurte a sua carta para um depoimento de dois minutos e treine-o em voz alta com um cronómetro. Junte-o ao problema e ao pedido, aos dados, às histórias, a quem decide, à carta e à ficha informativa para completar o seu kit de defesa.",
          youCanNow: "planear e fazer uma pequena campanha de defesa de causa baseada em dados, com a ajuda da IA e dentro das regras.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer apartidário?", options: ["Apoiar um partido", "Pago pelo governo", "Não apoiar nenhum candidato nem partido", "Contra todas as autoridades"], answer: 2, why: "Apartidário quer dizer não tomar partido por candidatos nem por partidos." },
            { objective: "O6", q: "O seu depoimento dura três minutos e meio, mas só tem dois. O que faria?", options: ["Falar mais depressa", "Continuar quando o tempo acaba", "Saltar o pedido", "Cortá-lo para o seu nome, a ligação, um dado, uma história e o pedido, e treinar com um cronómetro"], answer: 3, why: "Cortar para as partes principais e treinar mantém você dentro do tempo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Falar de forma eficaz",
        questions: [
          { objective: "O4", q: "Porque são as cartas pessoais melhores do que centenas de cartas iguais?", options: ["As cartas iguais são ilegais", "As cartas pessoais são mais compridas", "Não são melhores", "As autoridades notam e valorizam as vozes individuais"], answer: 3, why: "As histórias e as palavras pessoais têm mais peso." },
          { objective: "O5", q: "Uma ficha informativa deve ser:", options: ["Uma página que se lê em cerca de um minuto", "Vinte páginas", "Só fotos", "Escrita com palavras técnicas difíceis"], answer: 0, why: "Os leitores ocupados precisam de algo curto e claro." },
          { objective: "O5", q: "A IA traduz a sua ficha informativa para espanhol. O que deve fazer a seguir?", options: ["Imprimi-la sem verificar", "Apagar a versão em inglês", "Pedir a alguém que fala bem a língua para a verificar", "Não traduzir"], answer: 2, why: "As traduções da IA podem ter erros." },
          { objective: "O6", q: "Cerca de quantas palavras faladas cabem em dois minutos?", options: ["Cerca de 2,500", "Cerca de 20", "Cerca de 1,000", "Cerca de 250"], answer: 3, why: "A maioria das pessoas fala cerca de 120-130 palavras por minuto." },
          { objective: "O6", q: "Segundo o IRS, uma organização 501(c)(3) pode apoiar publicamente um candidato a um cargo público?", options: ["Sim, sempre", "Só nas redes sociais", "Não, é absolutamente proibido", "Só com pequenas doações"], answer: 2, why: "O IRS diz que a intervenção em campanhas políticas é absolutamente proibida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Defesa de Causas da Comunidade",
    questions: [
      { objective: "O1", q: "Defender uma causa quer dizer:", options: ["Só votar", "Falar para mudar uma política, uma prática ou uma decisão", "Candidatar-se a um cargo público", "Levar alguém a tribunal"], answer: 1, why: "Defender uma causa é criar mudança falando." },
      { objective: "O1", q: "Porque reduzir uma preocupação grande a um problema concreto?", options: ["As autoridades podem resolver problemas concretos", "Parece mais pequeno", "A IA exige", "Para evitar agir"], answer: 0, why: "Problemas concretos levam a soluções concretas." },
      { objective: "O1", q: "Um pedido forte inclui:", options: ["Só sentimentos", "Uma ameaça", "O quê, a quem e até quando", "Nenhum detalhe"], answer: 2, why: "É mais fácil dizer sim a pedidos claros." },
      { objective: "O1", q: "Quem deve dar forma ao pedido?", options: ["As pessoas mais afetadas", "Só a IA", "Só pessoas de fora", "Ninguém"], answer: 0, why: "A defesa de causas liderada pela comunidade é mais forte." },
      { objective: "O2", q: "Onde pode encontrar dados de população e de rendimento dos EUA?", options: ["Num meme qualquer", "Num palpite da IA", "Num comentário nas redes sociais", "data.census.gov"], answer: 3, why: "O Census Bureau publica dados oficiais." },
      { objective: "O2", q: "Uma fonte primária é:", options: ["Um blogue qualquer", "O lugar original onde a informação foi publicada", "Um resumo da IA", "Um boato"], answer: 1, why: "As fontes primárias são as mais fiáveis." },
      { objective: "O2", q: "Para cada dado que junta, anote:", options: ["Só o número", "A fonte, o link e a data", "Nada", "O seu palpite"], answer: 1, why: "As fontes deixam outras pessoas verificar os seus dados." },
      { objective: "O3", q: "A ata de uma reunião é:", options: ["Quanto tempo durou a reunião", "Um tipo de relógio", "Um diário privado", "O registo escrito oficial de uma reunião pública"], answer: 3, why: "A ata regista o que foi decidido." },
      { objective: "O3", q: "A IA diz que é o conselho escolar que decide sobre as passadeiras. Você deve:", options: ["Confirmar no site da sua cidade ou ligando", "Confiar", "Escrever a todos os serviços ao mesmo tempo sem verificar", "Desistir"], answer: 0, why: "Os processos locais são diferentes; confirme numa fonte oficial." },
      { objective: "O3", q: "Porque conhecer o calendário do orçamento?", options: ["Os orçamentos são secretos", "Não serve para nada", "Muitas decisões são tomadas quando se faz o orçamento", "Para faltar às reuniões"], answer: 2, why: "Fazer o pedido na altura das decisões do orçamento é importante." },
      { objective: "O3", q: "Um aliado é:", options: ["Um adversário", "Só quem decide", "Um site", "Uma pessoa ou um grupo que apoia a sua causa"], answer: 3, why: "Os aliados dão força e mais vozes." },
      { objective: "O3", q: "Porque perceber a provável oposição?", options: ["Para a insultar", "Para a ignorar", "Para poder responder às preocupações dela", "Para a copiar"], answer: 2, why: "Responder às preocupações ganha apoio." },
      { objective: "O4", q: "Um eleitor representado é:", options: ["Um tipo de lei", "Uma pessoa que vive na área de uma autoridade eleita", "Um advogado", "Um edifício da cidade"], answer: 1, why: "As autoridades dão atenção aos eleitores que representam." },
      { objective: "O4", q: "Um bom comentário público tem:", options: ["Menos de 300 palavras, com quem você é, os dados, uma história e um pedido", "O maior tamanho possível", "Raiva e insultos", "Só números"], answer: 0, why: "Curto, pessoal e concreto é o que funciona melhor." },
      { objective: "O4", q: "Está zangado com as autoridades. Na sua carta deve:", options: ["Usar insultos", "Fazer ameaças", "Ser respeitoso", "Escrever tudo em maiúsculas"], answer: 2, why: "As mensagens respeitosas são lidas e tidas em conta." },
      { objective: "O5", q: "Onde deve aparecer o pedido numa ficha informativa?", options: ["Numa caixa bem visível", "Escondido no fundo em letra pequena", "Em lado nenhum", "Só no verso"], answer: 0, why: "O pedido deve destacar-se." },
      { objective: "O6", q: "Num depoimento público, deve começar com:", options: ["Uma longa história", "Só o seu pedido", "Uma piada", "O seu nome e a sua ligação ao problema"], answer: 3, why: "Diz às autoridades porque o problema é importante para você." },
      { objective: "O6", q: "Segundo o IRS, educar o público sobre políticas:", options: ["É sempre ilegal", "Não é considerado lobbying", "Conta como campanha eleitoral", "É proibido às organizações sem fins lucrativos"], answer: 1, why: "O IRS diz que as atividades educativas não são lobbying." },
      { objective: "O6", q: "Uma organização 501(c)(3) pode fazer algum lobbying, mas:", options: ["Em quantidade ilimitada", "Não como parte substancial das suas atividades", "Só para candidatos", "Nunca"], answer: 1, why: "Lobbying a mais põe em risco a isenção de impostos." },
      { objective: "O6", q: "Segundo o IRS, as campanhas de registo de eleitores apartidárias feitas por uma 501(c)(3) são:", options: ["Sempre proibidas", "Só permitidas para um partido", "Obrigatórias", "Em geral permitidas, se forem mesmo apartidárias"], answer: 3, why: "O registo de eleitores apartidário não é proibido." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      2,
      5,
      6,
      8,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Problema e pedido",
        objective: "O1",
        notYet: "O problema é amplo demais, ou falta no pedido o quê, a quem ou até quando.",
        meets: "O problema numa frase e um pedido concreto com o quê, a quem e até quando.",
        exceeds: "Mostra como as pessoas afetadas ajudaram a dar forma ao pedido."
      },
      {
        name: "Dados e histórias",
        objective: "O2",
        notYet: "Um dado não tem fonte, ou uma história é usada sem autorização.",
        meets: "Três dados com fonte, link e data, e duas histórias partilhadas com autorização.",
        exceeds: "Os dados vêm de fontes primárias e as histórias usam os nomes que as pessoas escolheram."
      },
      {
        name: "Quem decide",
        objective: "O3",
        notYet: "A pessoa que decide está errada ou não foi confirmada.",
        meets: "Quem decide e o próximo prazo confirmados num site oficial.",
        exceeds: "Também tem a lista dos aliados e uma resposta à principal preocupação da oposição."
      },
      {
        name: "Carta ou comentário e ficha informativa",
        objective: "O4",
        notYet: "Mais de 300 palavras, falta de respeito ou nenhum pedido claro.",
        meets: "Menos de 300 palavras, respeitoso, com quem você é, os dados, uma história e o pedido; a ficha informativa cabe numa página.",
        exceeds: "Um leitor consegue dizer o pedido depois de um minuto com a ficha informativa."
      },
      {
        name: "Depoimento e regras",
        objective: "O6",
        notYet: "Mais de dois minutos, não treinado, ou fala em apoio a um candidato.",
        meets: "Treinado em voz alta em dois minutos ou menos, começa com o nome e a ligação, e fala só do problema.",
        exceeds: "Inclui um plano para os apoiantes irem à reunião ou enviarem comentários."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que enviam uma carta ou um comentário público, ou falam numa reunião pública, em 60 dias (inquérito de seguimento)",
      "Campanhas em que quem decide responde, põe o problema na agenda ou aceita o pedido",
      "Número de membros da comunidade que se juntam a uma campanha depois do curso",
      "Alunos que começam outro curso da Koach Learn sobre organizações sem fins lucrativos em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini",
      "Canva ou Google Docs para a ficha informativa",
      "Um cronómetro para treinar o depoimento",
      "Cerca de 60 minutos para as lições e as verificações, mais tempo para pesquisar e treinar"
    ],
    facilitatorNotes: [
      "Deixe os grupos trabalharem num mesmo problema local para que os alunos dividam a pesquisa e treinem juntos o depoimento.",
      "Lembre aos funcionários de organizações sem fins lucrativos que os grupos 501(c)(3) não podem apoiar candidatos; indique-lhes as orientações do IRS para a situação deles.",
      "As histórias só são partilhadas com autorização; mantenha os detalhes privados fora dos pedidos à IA.",
      "Peça aos alunos para treinarem o depoimento em voz alta, com um cronómetro, em frente ao grupo.",
      "Avalie o kit de defesa com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
