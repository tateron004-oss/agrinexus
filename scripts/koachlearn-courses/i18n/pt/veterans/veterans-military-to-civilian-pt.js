"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-military-to-civilian.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US agency and program names (TAP, DOL, VA, O*NET, HIRE Vets, Veterans Crisis Line) are kept as written.

module.exports = {
  id: "veterans-military-to-civilian-pt",
  lang: "pt",
  translationOf: "veterans-military-to-civilian",
  category: "Veterans (military)",
  name: "Da Vida Militar à Vida Civil",
  skills: "Usar o Programa de Assistência à Transição, Traduzir competências militares, Escrever tópicos de currículo civil, Criar contactos para um emprego civil, Adaptar-se à cultura de trabalho civil, Encontrar apoio e cuidados de saúde mental",
  outcome: "fazer um plano de transição de 90 dias: usar o Programa de Assistência à Transição e os serviços de emprego para veteranos, transformar a sua experiência militar em tópicos de currículo civil para um emprego real, criar uma rede de contactos, adaptar-se à cultura de trabalho civil e saber onde encontrar apoio, incluindo a Veterans Crisis Line (988, depois carregue em 1).",
  about: [
    "Este curso é para militares que se preparam para sair do serviço ou reformar-se, para veteranos que já saíram e procuram o próximo passo, e para os cônjuges e as famílias que fazem a mudança com eles.",
    "Você vai aprender o que oferece o Programa de Assistência à Transição, como descrever o seu trabalho militar com palavras que os empregadores civis entendem, como escrever e adaptar tópicos de currículo, como criar uma rede de contactos, o que é diferente nos locais de trabalho civis e onde encontrar apoio quando a mudança é difícil.",
    "Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Os programas e as regras mudam, por isso confirme os detalhes em dol.gov/agencies/vets, va.gov ou no gabinete de transição da sua base. Se estiver em crise, ligue para o 988 e carregue em 1, ou envie SMS para o 838255, a qualquer hora."
  ],
  finalTask: "Escreva o seu plano de transição de 90 dias: (1) os workshops do TAP ou os serviços de emprego para veteranos que vai usar; (2) cinco tarefas militares reescritas como tópicos de currículo civil, adaptados a um anúncio de emprego real; (3) três pessoas ou eventos para criar contactos; (4) dois hábitos de trabalho civil que vai praticar; (5) a sua lista de apoio, com a Veterans Crisis Line (988, depois carregue em 1, ou SMS para o 838255), o Vet Center mais perto e duas pessoas de confiança.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Militares que se preparam para sair do serviço ou reformar-se, veteranos que já saíram e procuram o próximo passo, e os cônjuges e as famílias que fazem a mudança com eles.",
    startingPoint: "Têm fortes competências militares, disciplina e espírito de equipa, e sabem usar um telefone ou um computador. Muitos descrevem o seu trabalho com termos militares, têm poucos contactos civis e não sabem bem o que o TAP oferece nem onde encontrar apoio depois do serviço.",
    gap: "A passagem para a vida civil muda ao mesmo tempo o trabalho, a cultura e o apoio, e muitos veteranos têm dificuldade em encontrar trabalho ou em pedir ajuda. Os alunos precisam de um plano concreto de 90 dias: os serviços certos do TAP e de emprego, tópicos de currículo civil adaptados, uma rede de contactos, hábitos de trabalho civil e uma lista de apoio que inclua ajuda em caso de crise.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador com internet",
      "Bem-estar: o curso fala de apoio à saúde mental; a ajuda em caso de crise (Veterans Crisis Line: 988, depois carregue em 1, ou SMS para o 838255) aparece de forma clara e está disponível a qualquer hora",
      "Privacidade: descrever as tarefas em termos gerais; nenhum detalhe classificado nem número privado em ferramentas de IA",
      "Os detalhes dos programas mudam, por isso os alunos confirmam os detalhes do TAP e do VA com o seu gabinete do TAP, em dol.gov e em va.gov"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o seu caminho principal (emprego, estudos, ofício ou negócio)", action: "escolher os workshops do TAP ou os serviços de emprego para veteranos que servem para o seu próximo passo", standard: "indicando pelo menos dois e como chegar a eles" },
    { id: "O2", condition: "Com o código ou o nome da sua função militar", action: "encontrar empregos civis parecidos e descrever as suas tarefas sem linguagem militar", standard: "com três nomes de empregos civis e três tarefas reescritas sem siglas e com pelo menos um número" },
    { id: "O3", condition: "Com um anúncio de emprego real", action: "escrever tópicos de currículo civil adaptados ao anúncio", standard: "com cinco tópicos, cada um com um verbo de ação, o que fez e um resultado, e todas as palavras verdadeiras" },
    { id: "O4", condition: "Usando pessoas que conhece e programas de contratação de veteranos", action: "escrever um pedido curto e educado para uma conversa informativa e as perguntas que faria", standard: "com três contactos ou eventos indicados" },
    { id: "O5", condition: "Com uma ordem direta que já deu no serviço", action: "reescrevê-la como um pedido civil educado e fazer a lista das qualidades militares que vai manter e dos hábitos que vai ajustar", standard: "com dois de cada" },
    { id: "O6", condition: "Para você ou para um colega veterano", action: "criar uma lista de apoio com a forma de contactar a Veterans Crisis Line, o Vet Center mais perto e duas pessoas de confiança", standard: "com os números de crise guardados no telefone" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear a mudança e traduzir as suas competências",
      lessons: [
        {
          objectives: ["O1"],
          title: "Usar o Programa de Assistência à Transição",
          minutes: 5,
          goal: "Escolher os workshops e os serviços do TAP que servem para o seu próximo passo.",
          text: [
            "O Programa de Assistência à Transição (TAP, em inglês) ajuda os militares e os seus cônjuges a prepararem-se para a vida civil. É um trabalho conjunto dos Departamentos do Trabalho, da Defesa, dos Assuntos de Veteranos, da Educação e da Segurança Interna, da Administração das Pequenas Empresas (SBA) e do Gabinete de Gestão de Pessoal (OPM).",
            "A parte do TAP do Departamento do Trabalho (DOL) inclui um workshop de um dia, Employment Fundamentals of Career Transition, sobre ferramentas para procurar emprego, e um workshop de dois dias, Department of Labor Employment Workshop, sobre currículos, contactos, procura de emprego, entrevistas e negociação. Há também um percurso opcional de dois dias, Career and Credential Exploration, para escolher uma carreira e planear como lá chegar.",
            "Também há ajuda individual: o Employment Navigator and Partnership Program dá apoio de carreira aos militares em transição e aos cônjuges em algumas bases. Os cônjuges e os cuidadores têm os seus próprios workshops. Se não puder ir presencialmente, a formação pela internet pode contar, com a aprovação do seu responsável ou conselheiro do TAP.",
            "Comece cedo. Pergunte ao gabinete do TAP da sua base quando tem de começar e que workshops servem para o seu plano: um emprego, estudos, um ofício ou o seu próprio negócio. Já saiu? A página de serviços de emprego para veteranos do DOL tem a lista de recursos em cada estado."
          ],
          steps: ["Contacte o gabinete do TAP da sua base e pergunte quando tem de começar.", "Decida o seu caminho principal: emprego, estudos, ofício ou negócio.", "Inscreva-se nos workshops que servem, como o DOL Employment Workshop.", "Pergunte pela ajuda individual e pelos workshops para cônjuges.", "Já saiu do serviço? Encontre os recursos para veteranos do seu estado em dol.gov/agencies/vets."],
          words: [["TAP", "Transition Assistance Program (Programa de Assistência à Transição): aulas e ajuda para militares que passam para a vida civil."], ["Saída do serviço", "deixar o serviço militar ativo (em inglês, \"separation\")."], ["Credencial", "uma licença ou um certificado que prova uma competência."]],
          slides: [
            { title: "O que é o TAP", bullets: ["Ajuda para passar à vida civil", "Para militares e cônjuges", "Gerido pelo DOL, DoD, VA e outros serviços"] },
            { title: "Workshops do DOL", bullets: ["1 dia: Employment Fundamentals", "2 dias: currículos, contactos, entrevistas", "2 dias opcionais: percurso de carreira e credenciais"] },
            { title: "Mais ajuda", bullets: ["Ajuda individual de carreira em algumas bases", "Workshops para cônjuges e cuidadores", "Formação pela internet com aprovação"] },
            { title: "Comece cedo", bullets: ["Pergunte ao gabinete do TAP quando começar", "Escolha workshops que servem para o seu caminho", "Já saiu? Encontre os recursos do seu estado"] }
          ],
          sources: [
            { name: "DOL VETS: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "DOL VETS: Veterans employment services", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Escreva o seu caminho principal (emprego, estudos, ofício ou negócio) e os dois workshops ou serviços do TAP que melhor servem para ele. Se já saiu, encontre o seu estado na página de serviços de emprego para veteranos do DOL e anote um recurso e como o contactar.",
          youCanNow: "escolher os workshops do TAP e os serviços de emprego para veteranos que servem para o seu próximo passo.",
          quickCheck: [
            { objective: "O1", q: "Quem pode participar nos serviços do TAP do DOL?", options: ["Só oficiais", "Militares em transição e os seus cônjuges", "Só pessoas que já têm emprego", "Só reformados"], answer: 1, why: "Os serviços do TAP são para militares em transição, e os cônjuges também podem participar." },
            { objective: "O1", q: "Planeia começar um ofício depois de sair do serviço. O que faz primeiro?", options: ["Não faz o TAP porque é só para trabalhos de escritório", "Espera até sair para pensar nisso", "Pede a um amigo para escolher por você", "Escreve o seu caminho e escolhe os workshops ou serviços do TAP que servem para ele"], answer: 3, why: "Escolher workshops que servem para o seu caminho principal torna o TAP útil para o seu próximo passo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Traduzir competências militares para palavras civis",
          minutes: 5,
          goal: "Encontrar empregos civis parecidos com o seu trabalho militar e descrever as suas competências sem linguagem militar.",
          text: [
            "Muitas vezes, quem contrata no mundo civil não sabe o que significam o seu código de função, o seu posto ou a sua unidade. As suas competências são reais, mas precisam de ser ditas com as palavras deles.",
            "Comece com ferramentas gratuitas. O Military Crosswalk do O*NET deixa você procurar o código ou o nome da função do seu ramo. O My Next Move for Veterans, indicado pelo Departamento do Trabalho, tem uma pesquisa de transição militar que sugere carreiras civis ligadas à sua experiência militar. Anote os nomes dos empregos civis que eles sugerem.",
            "Depois traduza. Troque palavras militares por palavras simples: \"NCOIC\" passa a \"supervisor\" ou \"chefe de equipa\"; \"PCS\" passa a \"mudança de residência\"; \"missão\" pode passar a \"projeto\" ou \"operação\". Escreva as siglas por extenso ou tire-as. Use números que mostrem o tamanho e os resultados: quantas pessoas chefiou, o valor do equipamento pelo qual era responsável ou quantas entregas geriu.",
            "Um assistente de IA pode ajudar a sugerir palavras civis para uma tarefa. Descreva o trabalho só em termos gerais. Nunca cole informações classificadas, sensíveis ou pessoais, e verifique que todas as palavras sugeridas são verdadeiras."
          ],
          steps: ["Procure o código ou o nome da sua função no Military Crosswalk do O*NET ou no My Next Move for Veterans.", "Escreva três nomes de empregos civis parecidos.", "Faça a lista das suas tarefas principais com palavras simples.", "Troque as siglas e os termos militares por palavras civis.", "Acrescente números: pessoas chefiadas, valor do equipamento, tarefas feitas."],
          words: [["Código de função", "o código da sua função militar, como um MOS, um rating ou um AFSC."], ["Jargão", "palavras especiais que só um grupo entende."], ["Competência transferível", "uma competência que pode usar em muitos empregos diferentes, como chefiar uma equipa ou planear."]],
          slides: [
            { title: "Diga com as palavras deles", bullets: ["Os empregadores podem não conhecer o seu código ou posto", "As suas competências são reais; traduza-as"] },
            { title: "Ferramentas gratuitas", bullets: ["Military Crosswalk do O*NET", "My Next Move for Veterans", "Anote os nomes dos empregos civis"] },
            { title: "Traduza", bullets: ["NCOIC -> supervisor ou chefe de equipa", "Escreva as siglas por extenso ou tire-as", "Acrescente números: pessoas, equipamento, resultados"] },
            { title: "Usar a IA com segurança", bullets: ["Só em termos gerais", "Nunca cole detalhes classificados ou pessoais", "Verifique que todas as palavras são verdadeiras"] }
          ],
          sources: [
            { name: "O*NET OnLine: Military Crosswalk", url: "https://www.onetonline.org/crosswalk/MOC/" },
            { name: "DOL VETS: Veterans employment services (My Next Move for Veterans)", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Procure o código ou o nome da sua função militar no Military Crosswalk do O*NET ou no My Next Move for Veterans. Escreva três nomes de empregos civis que ele sugere e depois reescreva três das suas tarefas sem siglas e com pelo menos um número.",
          youCanNow: "encontrar empregos civis parecidos com o seu trabalho militar e descrever as suas competências com palavras civis simples.",
          quickCheck: [
            { objective: "O2", q: "Porque traduzir as suas competências militares para palavras civis?", options: ["Quem contrata no mundo civil pode não entender os termos militares", "A lei proíbe termos militares nos currículos", "Para o currículo ficar mais comprido", "Os empregos civis não precisam das suas competências"], answer: 0, why: "Quem contrata só consegue dar valor às competências que entende." },
            { objective: "O2", q: "A sua tarefa diz \"Served as S-4 NCO for BN.\" O que faz?", options: ["Deixa como está", "Acrescenta mais siglas", "Escreve as siglas por extenso ou tira-as e descreve o trabalho com um número", "Apaga a tarefa"], answer: 2, why: "Os tópicos civis escrevem as siglas por extenso ou tiram-nas e mostram o tamanho do trabalho." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever tópicos de currículo para um emprego real",
          minutes: 6,
          goal: "Escrever tópicos de currículo civil que correspondem a um anúncio de emprego real.",
          text: [
            "Um bom tópico de currículo começa com um verbo de ação, diz o que fez e mostra o resultado, de preferência com um número. Modelo: ação + o quê + resultado. Exemplo: \"Chefiei uma equipa de 12 pessoas na manutenção de 30 veículos, mantendo 95% prontos dentro do prazo.\"",
            "Adapte o seu currículo a cada emprego. Leia o anúncio e sublinhe as competências e as palavras que ele usa, como \"inventário\", \"segurança\", \"horários\" ou \"atendimento ao cliente\". Depois use essas mesmas palavras nos seus tópicos, quando forem verdade para você. Muitos empregadores usam programas que procuram estas palavras nos currículos.",
            "Seja curto e civil. Normalmente uma ou duas páginas. Ponha no topo o nome do emprego que quer. Deixe de fora o que não ajuda para este emprego e não ponha detalhes classificados. Acrescente licenças e certificações, e as credenciais que ganhou no serviço.",
            "Exemplo: um especialista de logística da Marinha que se candidata a supervisor de armazém escreve: \"Geri um inventário de 4.000 peças no valor de 2 milhões de dólares com 99% de exatidão\" e \"Formei 8 novos membros da equipa em procedimentos de segurança\". Os dois usam palavras do anúncio."
          ],
          steps: ["Encontre um anúncio de emprego real que quer.", "Sublinhe as competências e as palavras que ele usa.", "Escreva cinco tópicos: verbo de ação + o que fez + resultado com um número.", "Use as palavras do anúncio quando forem verdade para você.", "Tire as siglas e tudo o que for classificado, e leia em voz alta."],
          words: [["Currículo", "um documento curto com a sua experiência de trabalho, competências e estudos para os empregadores."], ["Adaptar", "mudar o currículo para servir para um emprego."], ["Palavra-chave", "uma palavra importante do anúncio que os empregadores procuram."]],
          slides: [
            { title: "Modelo de um bom tópico", bullets: ["Verbo de ação + o que fez + resultado", "\"Chefiei uma equipa de 12 na manutenção de 30 veículos\""] },
            { title: "Adapte a cada emprego", bullets: ["Sublinhe as competências do anúncio", "Use essas palavras quando forem verdade", "Os programas podem procurá-las"] },
            { title: "Seja civil", bullets: ["Normalmente uma ou duas páginas", "Sem siglas, nada classificado", "Acrescente licenças e certificações"] }
          ],
          tryIt: "Encontre um anúncio de emprego real que quer. Sublinhe cinco competências que ele pede. Escreva cinco tópicos de currículo sobre o seu serviço, cada um com um verbo de ação, o que fez e um resultado, usando as palavras do anúncio quando forem verdade.",
          youCanNow: "escrever tópicos de currículo que transformam a sua experiência militar em resultados que um empregador civil procura.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer adaptar um currículo?", options: ["Usar o mesmo currículo para todos os empregos", "Pôr todos os empregos que já teve", "Fazê-lo o mais curto possível", "Usar as palavras do anúncio quando forem verdade para você"], answer: 3, why: "Adaptar é ligar a sua experiência verdadeira às palavras de um anúncio." },
            { objective: "O3", q: "O anúncio pede \"gestão de inventário\". Você controlava peças de uma unidade. O que escreve?", options: ["\"Fazia coisas de abastecimento\"", "\"Geri um inventário de 2.500 peças sem perdas na auditoria\"", "\"Especialista em gestão de inventário com 30 anos\" (não é verdade)", "Não põe nada"], answer: 1, why: "Usa as palavras do anúncio, um verbo de ação, o que fez e um resultado verdadeiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear a mudança e traduzir as suas competências",
        questions: [
          { objective: "O1", q: "O que é o Programa de Assistência à Transição?", options: ["Um programa de empréstimos", "Uma clínica médica", "Um posto de recrutamento", "Aulas e ajuda para militares que passam para a vida civil"], answer: 3, why: "O TAP ajuda os militares e os cônjuges a prepararem-se para a vida civil." },
          { objective: "O1", q: "Que workshop do DOL trata de currículos, contactos, procura de emprego e entrevistas em dois dias?", options: ["A recruta", "O Department of Labor Employment Workshop", "Um exame do VA", "O GI Bill"], answer: 1, why: "O DOL descreve o DOLEW de dois dias como o workshop que trata destas competências." },
          { objective: "O2", q: "Que ferramenta gratuita ajuda a ligar um código de função militar a empregos civis?", options: ["O Military Crosswalk do O*NET", "Um relatório de crédito", "Uma aplicação do tempo", "Um questionário de redes sociais"], answer: 0, why: "O Military Crosswalk procura códigos e nomes de funções militares." },
          { objective: "O2", q: "Como escreveria \"NCOIC of motor pool\" num currículo civil?", options: ["Deixa como está", "Tira tudo", "\"Supervisionei uma equipa de manutenção de veículos\"", "\"Fazia coisas com camiões\""], answer: 2, why: "Palavras simples e uma tarefa clara fazem entender a competência." },
          { objective: "O3", q: "Qual é o tópico de currículo mais forte?", options: ["\"Responsável por coisas\"", "\"Geri um inventário de 4.000 peças com 99% de exatidão\"", "\"Estive na Marinha\"", "\"Fiz o meu trabalho\""], answer: 1, why: "Tem um verbo de ação, o que foi feito e um resultado com um número." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir a sua vida civil",
      lessons: [
        {
          objectives: ["O4"],
          title: "Criar contactos para um emprego civil",
          minutes: 5,
          goal: "Escrever uma mensagem curta a pedir ajuda a pessoas e programas para chegar a um emprego.",
          text: [
            "Muitos empregos são preenchidos através de pessoas que conhecem pessoas. Criar contactos não é implorar por um emprego. É criar ligações, pedir conselhos e também ajudar os outros.",
            "Comece com quem conhece: colegas veteranos que já trabalham em empregos civis, antigos chefes, família, amigos, a sua igreja ou grupos da comunidade. Crie um perfil profissional na internet, por exemplo no LinkedIn, com um título civil como \"Supervisor de logística, 8 anos a chefiar equipas\".",
            "Peça conversas informativas curtas: 15 a 20 minutos para conhecer o trabalho e a empresa de alguém. Prepare três perguntas, como \"Como é um dia normal?\" e \"Que competências contam mais aqui?\" Agradeça depois.",
            "Use também os programas para veteranos. O VETS do DOL tem a lista de recursos estaduais para veteranos e de aprendizagens profissionais, e o HIRE Vets Medallion Program reconhece os empregadores empenhados em contratar veteranos. As feiras de emprego para veteranos e os grupos de veteranos nas empresas são bons lugares para conhecer pessoas."
          ],
          steps: ["Faça a lista de dez pessoas que conhece e que trabalham em empregos civis.", "Crie ou atualize um perfil profissional na internet com um título civil.", "Peça a duas pessoas uma conversa informativa de 15 a 20 minutos.", "Prepare três perguntas e envie um agradecimento depois.", "Procure feiras de emprego para veteranos e empregadores que contratam veteranos."],
          words: [["Criar contactos", "construir ligações com pessoas que podem partilhar conselhos, oportunidades ou apresentações (em inglês, \"networking\")."], ["Conversa informativa", "uma conversa curta para conhecer o trabalho de alguém, não para pedir emprego."], ["Título", "a linha curta debaixo do seu nome num perfil profissional."]],
          slides: [
            { title: "As pessoas preenchem empregos", bullets: ["Criar contactos = ligações e conselhos", "Não é implorar; ajude também os outros"] },
            { title: "Comece com quem conhece", bullets: ["Veteranos em empregos civis", "Antigos chefes, família, comunidade", "Um perfil com um título civil"] },
            { title: "Conversas informativas", bullets: ["15 a 20 minutos", "Três perguntas preparadas", "Diga sempre obrigado"] },
            { title: "Programas para veteranos", bullets: ["Recursos estaduais através do DOL VETS", "Empregadores HIRE Vets", "Feiras de emprego para veteranos"] }
          ],
          sources: [
            { name: "DOL VETS: Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "HIRE Vets Medallion Program", url: "https://www.hirevets.gov/" }
          ],
          tryIt: "Faça a lista de dez pessoas que conhece e que trabalham em empregos civis. Escolha duas e escreva uma mensagem curta e educada a pedir a cada uma uma conversa de 15 minutos sobre o trabalho delas. Escreva três perguntas que faria.",
          youCanNow: "criar uma rede de contactos, pedir conversas informativas e usar programas de contratação de veteranos.",
          quickCheck: [
            { objective: "O4", q: "O que é criar contactos?", options: ["Pedir logo emprego a desconhecidos", "Usar só as redes sociais", "Criar ligações, pedir conselhos e também ajudar os outros", "Enviar o currículo a toda a gente"], answer: 2, why: "Criar contactos é uma relação nos dois sentidos, de conselhos e de ajuda." },
            { objective: "O4", q: "Um amigo trabalha numa empresa de que você gosta. O que envia?", options: ["Um pedido curto e educado para uma conversa de 15 minutos sobre o trabalho dele", "O seu currículo com \"arranja-me emprego\"", "Uma mensagem de duas páginas sobre a sua carreira", "Nada; é constrangedor"], answer: 0, why: "Um pedido curto e educado para uma conversa informativa é fácil de aceitar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Adaptar-se à cultura de trabalho civil",
          minutes: 5,
          goal: "Dizer as principais diferenças dos locais de trabalho civis e planear como se vai adaptar.",
          text: [
            "Os locais de trabalho civis funcionam de outra forma. Muitas vezes não há uma cadeia de comando clara, e as decisões podem ser tomadas em grupo ou depois de longas discussões. As ordens podem vir como sugestões: \"Pode dar uma vista de olhos a isto?\" normalmente quer dizer \"Por favor, faça isto.\"",
            "A comunicação costuma ser mais suave. Respostas diretas e curtas que funcionavam de farda podem soar duras aos colegas civis. Experimente explicar um pouco o motivo e usar um tom simpático. Faça perguntas quando algo não estiver claro; em muitas empresas, perguntar é esperado, não é sinal de fraqueza.",
            "As suas qualidades servem em qualquer lugar: chegar cedo, acabar o que começa, manter a calma sob pressão e cuidar da sua equipa. Mantenha-as. Mas conte com menos estrutura, menos cerimónia, mais e-mails e reuniões, e colegas que nunca serviram.",
            "Pode levar tempo até se sentir em casa. Encontre um mentor no trabalho, como um colega veterano, ou junte-se a um grupo de veteranos se a empresa tiver um. Fale também com a família sobre as mudanças: eles também se estão a adaptar."
          ],
          steps: ["Repare em como as decisões são tomadas no seu novo emprego.", "Trate os pedidos educados como tarefas reais.", "Acrescente o motivo e um tom simpático às mensagens diretas.", "Faça perguntas quando algo não estiver claro.", "Encontre um mentor ou um grupo de veteranos no trabalho."],
          words: [["Cadeia de comando", "a ordem militar de quem responde a quem."], ["Cultura de trabalho", "as regras não escritas de como as pessoas trabalham e falam num emprego."], ["Mentor", "uma pessoa com mais experiência que lhe dá conselhos."]],
          slides: [
            { title: "O que é diferente", bullets: ["Muitas vezes sem cadeia de comando clara", "Decisões em grupo ou depois de discussão", "Os pedidos soam como sugestões"] },
            { title: "Comunicação", bullets: ["Explique o motivo e use um tom simpático", "Fazer perguntas é esperado"] },
            { title: "Qualidades que servem", bullets: ["Pontualidade, acabar o que começa, calma", "Cuidar da sua equipa"] },
            { title: "Adaptar-se", bullets: ["Encontre um mentor ou um grupo de veteranos", "Fale com a família: eles também se adaptam"] }
          ],
          tryIt: "Pense numa vez em que deu uma ordem curta e direta no serviço. Reescreva-a como um pedido civil educado, com um motivo, como a escreveria num e-mail de trabalho. Depois escreva duas qualidades militares que vai manter e dois hábitos que vai ajustar.",
          youCanNow: "dizer as principais diferenças da cultura de trabalho civil e ajustar a forma como comunica.",
          quickCheck: [
            { objective: "O5", q: "Em muitos empregos civis, fazer perguntas é:", options: ["Um sinal de fraqueza", "Esperado e normal", "Contra as regras", "Só para quem acabou de entrar"], answer: 1, why: "Os locais de trabalho civis costumam esperar que as pessoas façam perguntas." },
            { objective: "O5", q: "Quer que um colega envie um relatório até sexta-feira. Como escreve?", options: ["\"Relatório. Sexta. Já.\"", "\"Faça, senão...\"", "Não diz nada e faz você mesmo", "\"Pode enviar o relatório até sexta-feira? Preciso dele para a reunião de segunda. Obrigado!\""], answer: 3, why: "Um pedido educado com um motivo combina com a cultura de trabalho civil." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Encontrar apoio e cuidados de saúde mental",
          minutes: 5,
          goal: "Criar uma lista de apoio e saber como chegar à ajuda em caso de crise a qualquer hora.",
          text: [
            "Sair das forças armadas é uma grande mudança: uma rotina nova, uma identidade nova, talvez uma mudança de casa, e menos contacto com as pessoas com quem serviu. Stress, dormir mal, raiva ou sentir-se em baixo são comuns. Pedir ajuda é uma força, não uma fraqueza.",
            "A Veterans Crisis Line (linha de crise para veteranos) é gratuita, confidencial e está aberta 24 horas por dia, 7 dias por semana. Ligue para o 988 e depois carregue em 1. Envie SMS para o 838255. Ou converse pela internet em veteranscrisisline.net. É para veteranos, militares, membros da Guarda e da Reserva e para as pessoas que os apoiam, e não precisa de estar inscrito nos benefícios ou nos cuidados de saúde do VA para a usar.",
            "Para apoio contínuo, os Vet Centers são centros de aconselhamento na comunidade que oferecem aconselhamento gratuito e confidencial a veteranos, militares e famílias elegíveis, incluindo ajuda para se adaptar depois do serviço. Ligue para o 1-877-927-8387 a qualquer hora para falar e ser ligado ao Vet Center mais perto. Os cuidados de saúde do VA também oferecem cuidados de saúde mental aos veteranos inscritos.",
            "Crie também a sua própria equipa: duas ou três pessoas de confiança, um grupo de veteranos, grupos religiosos ou da comunidade, e uma rotina regular com exercício e sono. Se estiver preocupado com um colega veterano, pode ligar para a Crisis Line por ele."
          ],
          steps: ["Guarde no telefone o 988 (depois carregue em 1) e o número de SMS 838255.", "Encontre o Vet Center mais perto ligando para o 1-877-927-8387.", "Escreva os nomes e os números de duas ou três pessoas de confiança.", "Acrescente um grupo ou uma rotina que o ajude, como um grupo de veteranos ou exercício.", "Se você ou um amigo estiver em crise, ligue já para o 988 e carregue em 1."],
          words: [["Veterans Crisis Line", "apoio gratuito, confidencial e 24/7 em caso de crise para veteranos, militares e quem os apoia: 988, depois carregue em 1."], ["Vet Center", "um centro de aconselhamento na comunidade que oferece aconselhamento gratuito e confidencial a veteranos, militares e famílias elegíveis."], ["Confidencial", "mantido em privado."]],
          slides: [
            { title: "A mudança é difícil; pedir ajuda é força", bullets: ["Rotina nova, identidade nova, talvez mudança de casa", "Stress, dormir mal e raiva são comuns"] },
            { title: "Veterans Crisis Line: 24/7", bullets: ["Ligue para o 988 e depois carregue em 1", "SMS para o 838255", "Conversa em veteranscrisisline.net"] },
            { title: "Apoio contínuo", bullets: ["Vet Centers: aconselhamento gratuito e confidencial", "Ligue para o 1-877-927-8387, a qualquer hora", "Cuidados de saúde mental do VA"] },
            { title: "A sua própria equipa", bullets: ["Duas ou três pessoas de confiança", "Grupos de veteranos, religiosos ou da comunidade", "Rotina: exercício e sono"] }
          ],
          sources: [
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "VA Vet Centers", url: "https://www.vetcenter.va.gov/" }
          ],
          tryIt: "Tarefa final: guarde no telefone o 988 (depois carregue em 1) e o 838255, e escreva a sua lista de apoio com o Vet Center mais perto e duas pessoas de confiança. Depois acabe o seu plano de transição de 90 dias com os serviços do TAP ou de emprego, cinco tópicos de currículo adaptados, três contactos ou eventos e dois hábitos de trabalho civil que vai praticar.",
          youCanNow: "chegar à ajuda em caso de crise a qualquer hora, encontrar apoio contínuo e pôr no papel o seu plano completo de transição de 90 dias.",
          quickCheck: [
            { objective: "O6", q: "Como chega à Veterans Crisis Line por telefone?", options: ["Liga para o 988 e depois carrega em 1", "Liga para o 911 e depois carrega em 9", "Envia um e-mail à sua antiga unidade", "Espera por uma consulta do VA"], answer: 0, why: "A Veterans Crisis Line é o 988, depois carregue em 1, a qualquer hora." },
            { objective: "O6", q: "Está preocupado com um colega veterano que parece estar em crise. O que pode fazer?", options: ["Esperar para ver se passa", "Publicar sobre isso na internet", "Ligar para a Veterans Crisis Line por ele: 988, depois carregue em 1", "Dizer-lhe para resolver sozinho"], answer: 2, why: "Pode ligar para a Veterans Crisis Line em nome de alguém com quem está preocupado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir a sua vida civil",
        questions: [
          { objective: "O4", q: "O que é uma conversa informativa?", options: ["Uma conversa curta para conhecer o trabalho de alguém", "Uma entrevista de emprego com contrato", "Um exame do VA", "Uma verificação de credenciação de segurança"], answer: 0, why: "Serve para aprender e pedir conselhos, não para pedir emprego." },
          { objective: "O5", q: "Um chefe civil diz: \"Pode dar uma vista de olhos a este relatório?\" O que quer dizer normalmente?", options: ["É opcional; ignore", "Espere por uma ordem escrita", "Por favor, faça esta tarefa", "Você está em apuros"], answer: 2, why: "Os pedidos civis muitas vezes soam como sugestões, mas são tarefas reais." },
          { objective: "O5", q: "Que qualidade militar deve manter num emprego civil?", options: ["Usar siglas em todos os e-mails", "Nunca fazer perguntas", "Ignorar os colegas que nunca serviram", "Acabar o que começa"], answer: 3, why: "Ser de confiança e acabar o que começa é valorizado em todo o lado." },
          { objective: "O6", q: "Como chega à Veterans Crisis Line por telefone?", options: ["Liga para o 911 e pede o VA", "Liga para o 988 e depois carrega em 1", "Liga para o 411", "Liga para o seu recrutador"], answer: 1, why: "A Veterans Crisis Line é o 988, depois carregue em 1, a qualquer hora." },
          { objective: "O6", q: "Tem de estar inscrito nos benefícios do VA para usar a Veterans Crisis Line?", options: ["Sim", "Só se serviu 20 anos", "Só nos dias úteis", "Não"], answer: 3, why: "Não precisa de estar inscrito nos benefícios ou nos cuidados de saúde do VA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Da Vida Militar à Vida Civil",
    questions: [
      { objective: "O1", q: "Quem pode participar nos serviços do TAP do DOL?", options: ["Só oficiais", "Só reformados com mais de 60 anos", "Militares em transição e os seus cônjuges", "Só civis"], answer: 2, why: "A parte do TAP do DOL serve os militares em transição e os cônjuges." },
      { objective: "O1", q: "Quando deve começar o TAP?", options: ["Depois de estar fora há cinco anos", "Nunca", "Só se já tiver emprego", "Cedo: pergunte ao gabinete do TAP da sua base quando tem de começar"], answer: 3, why: "Começar cedo dá-lhe mais tempo; o gabinete do TAP define a data." },
      { objective: "O1", q: "Que workshop é opcional e ajuda a escolher uma carreira e a planear como lá chegar?", options: ["A recruta", "Career and Credential Exploration", "Treino físico", "Um exame de pedido ao VA"], answer: 1, why: "O C2E é o percurso opcional de dois dias do DOL sobre carreira e credenciais." },
      { objective: "O1", q: "Não pode ir ao TAP presencialmente. O que pode contar em vez disso?", options: ["Formação pela internet, com a aprovação do seu responsável ou conselheiro do TAP", "Nada", "Ver televisão", "As notas de um amigo"], answer: 0, why: "O DOL diz que a formação pela internet pode contar com aprovação." },
      { objective: "O2", q: "Porque traduzir as competências militares?", options: ["Quem contrata no mundo civil pode não entender os termos militares", "A lei obriga", "Para esconder o seu serviço", "Para o currículo ficar mais comprido"], answer: 0, why: "Palavras simples ajudam os empregadores a ver as suas competências reais." },
      { objective: "O2", q: "O My Next Move for Veterans ajuda você a:", options: ["Fazer um pedido ao VA", "Obter um empréstimo", "Encontrar carreiras civis ligadas à sua experiência militar", "Marcar um médico"], answer: 2, why: "O DOL indica a sua pesquisa de transição militar para carreiras civis." },
      { objective: "O2", q: "O que deve fazer com as siglas num currículo civil?", options: ["Usar o maior número possível", "Pô-las em negrito", "Inventar novas", "Escrevê-las por extenso ou tirá-las"], answer: 3, why: "As siglas confundem os leitores civis." },
      { objective: "O2", q: "Quando usa a IA para ajudar a traduzir as suas tarefas, deve:", options: ["Colar detalhes classificados para ser exato", "Descrever o trabalho em termos gerais e verificar que todas as palavras são verdadeiras", "Deixá-la inventar resultados", "Partilhar o seu número da Segurança Social"], answer: 1, why: "Nunca partilhe detalhes sensíveis, e mantenha o currículo verdadeiro." },
      { objective: "O3", q: "Um bom tópico de currículo segue o modelo:", options: ["Posto + unidade + base", "Passatempo + comida preferida", "Só o código de função", "Verbo de ação + o que fez + resultado"], answer: 3, why: "Isto mostra o que fez e porque foi importante." },
      { objective: "O3", q: "Como adapta um currículo?", options: ["Usa as palavras do anúncio quando forem verdade para você", "Envia o mesmo currículo para todo o lado", "Põe todos os empregos que já teve", "Faz um currículo de dez páginas"], answer: 0, why: "Adaptar liga as suas competências reais a esse emprego." },
      { objective: "O3", q: "Que número torna um tópico mais forte?", options: ["O número dos seus sapatos", "\"Formei 8 novos membros da equipa\"", "A extensão telefónica da sua unidade", "O seu número de serviço"], answer: 1, why: "Os números mostram o tamanho e os resultados do seu trabalho." },
      { objective: "O4", q: "A melhor descrição de criar contactos é:", options: ["Pedir dinheiro a desconhecidos", "Enviar a mesma mensagem a toda a gente", "Criar ligações, pedir conselhos e também ajudar os outros", "Só para pessoas com curso superior"], answer: 2, why: "Criar contactos tem a ver com relações e conselhos." },
      { objective: "O4", q: "Quanto tempo deve durar normalmente uma conversa informativa?", options: ["Três horas", "O dia todo", "Cerca de 15 a 20 minutos", "Um minuto"], answer: 2, why: "Pedidos curtos respeitam o tempo da outra pessoa." },
      { objective: "O4", q: "O que faz o HIRE Vets Medallion Program?", options: ["Reconhece os empregadores empenhados em contratar veteranos", "Paga a renda dos veteranos", "Faz pedidos ao VA", "Organiza a recruta"], answer: 0, why: "O DOL descreve-o como o reconhecimento do empenho das empresas em contratar veteranos." },
      { objective: "O5", q: "As suas mensagens diretas e curtas parecem duras aos colegas civis. O que ajuda?", options: ["Deixar de falar com eles", "Usar mais siglas", "Escrever tudo em maiúsculas", "Explicar o motivo e usar um tom simpático"], answer: 3, why: "Mensagens mais suaves e claras combinam com a cultura de trabalho civil." },
      { objective: "O5", q: "Em muitos empregos civis, fazer perguntas é:", options: ["Proibido", "Esperado e normal", "Um sinal de fraqueza", "Só para chefes"], answer: 1, why: "Perguntar quando algo não está claro é esperado em muitos locais de trabalho." },
      { objective: "O6", q: "Que número de telefone o liga ao Vet Center mais perto, a qualquer hora?", options: ["911", "411", "1-800-MEDICARE", "1-877-927-8387"], answer: 3, why: "O VA indica o 1-877-927-8387 como a central telefónica dos Vet Centers." },
      { objective: "O6", q: "Pode enviar SMS para a Veterans Crisis Line para o:", options: ["988", "411", "838255", "911"], answer: 2, why: "Envie SMS para o 838255 para chegar à Veterans Crisis Line." },
      { objective: "O6", q: "Está preocupado com um colega veterano. O que pode fazer?", options: ["Ligar para a Veterans Crisis Line por ele: 988, depois carregue em 1", "Esperar e ter esperança", "Publicar sobre isso na internet", "Não dizer a ninguém"], answer: 0, why: "A Crisis Line também apoia quem está preocupado com um veterano." },
      { objective: "O6", q: "O aconselhamento nos Vet Centers é:", options: ["Só para oficiais", "Gratuito e confidencial", "Só por ordem do tribunal", "Pago à hora"], answer: 1, why: "O VA diz que o aconselhamento nos Vet Centers é gratuito e confidencial." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "TAP e serviços de emprego",
        objective: "O1",
        notYet: "Nenhum workshop ou serviço indicado.",
        meets: "Os workshops do TAP ou os serviços de emprego para veteranos que o aluno vai usar, de acordo com o seu caminho.",
        exceeds: "Inclui as datas ou como se inscrever em cada um."
      },
      {
        name: "Tópicos de currículo adaptados",
        objective: "O3",
        notYet: "Menos de cinco tópicos, ou tópicos com linguagem militar e sem resultados.",
        meets: "Cinco tópicos com palavras civis, cada um com um verbo de ação, o que foi feito e um resultado, adaptados a um anúncio real.",
        exceeds: "Cada tópico usa uma palavra do anúncio e tem um número."
      },
      {
        name: "Contactos",
        objective: "O4",
        notYet: "Nenhuma pessoa ou evento indicado.",
        meets: "Três pessoas ou eventos para criar contactos.",
        exceeds: "Há uma mensagem escrita para pelo menos um, com perguntas a fazer."
      },
      {
        name: "Hábitos de trabalho civil",
        objective: "O5",
        notYet: "Nenhum hábito indicado.",
        meets: "Dois hábitos de trabalho civil que o aluno vai praticar.",
        exceeds: "Também indica duas qualidades militares que vai manter."
      },
      {
        name: "Lista de apoio",
        objective: "O6",
        notYet: "Sem lista de apoio, ou sem linha de crise.",
        meets: "A Veterans Crisis Line (988, depois carregue em 1, ou SMS para o 838255), o Vet Center mais perto e duas pessoas de confiança.",
        exceeds: "Os números estão guardados no telefone do aluno."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que vão a um workshop do TAP ou contactam os serviços de emprego para veteranos em 30 dias (inquérito de seguimento)",
      "Alunos que se candidatam a um emprego com um currículo adaptado ou fazem uma conversa informativa em 30 dias",
      "Alunos que conseguem um emprego civil, uma formação ou uma vaga numa escola em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Um anúncio de emprego civil real que o aluno quer",
      "O Military Crosswalk do O*NET ou o My Next Move for Veterans, gratuitos, e os sites dol.gov e va.gov",
      "Papel ou um documento para o plano de transição de 90 dias",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Partilhe a Veterans Crisis Line (988, depois carregue em 1, ou SMS para o 838255) no início do curso e conheça os passos locais de encaminhamento se um aluno estiver em sofrimento.",
      "Mantenha privada a lição da lista de apoio: os alunos não têm de partilhar quem está na sua lista.",
      "Convide os cônjuges e os familiares; a mudança afeta toda a casa.",
      "Peça aos alunos para praticarem em pares a reescrita do pedido educado e para lerem os tópicos de currículo uns dos outros.",
      "Avalie o plano de 90 dias com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
