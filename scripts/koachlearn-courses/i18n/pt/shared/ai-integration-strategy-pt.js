"use strict";

// Koach Learn course (Portuguese translation of shared/ai-integration-strategy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-integration-strategy-pt",
  lang: "pt",
  translationOf: "ai-integration-strategy",
  category: "Athletes",
  name: "Estratégias para Integrar a IA na Sua Organização",
  skills: "Avaliar a preparação para a IA, Definir metas ligadas à missão, Escrever uma política de uso da IA, Gerir os riscos da IA, Guiar as pessoas na mudança, Construir um plano de 90 dias",
  outcome: "escrever um plano de 90 dias para integrar a IA numa organização: uma avaliação da preparação, metas ligadas à missão, uma política de uso da IA de uma página, uma análise de riscos, um plano de formação e comunicação, e um calendário com responsáveis e datas.",
  about: [
    "Usar uma ferramenta de IA é fácil. Trazer a IA para toda uma organização, para que as pessoas a usem bem, com segurança e pelas razões certas, precisa de um plano. Este curso dá-lhe esse plano, passo a passo.",
    "É para atletas que constroem uma marca ou um negócio e para as equipas, academias e ligas à volta deles, para donos de pequenos negócios e para líderes e direções de organizações sem fins lucrativos. Os exemplos incluem uma academia de basquetebol para jovens, o negócio de treino e de media de um atleta profissional, um restaurante de família e uma associação comunitária.",
    "Ao longo do curso, você vai construir um plano real de IA de 90 dias para uma organização. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de 90 dias para integrar a IA numa organização real ou de prática (por exemplo o negócio da marca de um atleta, uma academia desportiva, um pequeno negócio ou uma associação sem fins lucrativos). Inclua uma pontuação de preparação, três metas ligadas à missão, uma política de uso da IA de uma página, uma tabela de riscos, um plano de formação e comunicação, e um calendário com um responsável e uma data para cada passo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas que gerem um negócio de marca, e os treinadores, diretores de academias, agentes e funcionários à volta deles, e também líderes de pequenos negócios e de organizações sem fins lucrativos que têm de decidir como a sua organização usa a IA.",
    startingPoint: "Conhecem bem a sua equipa, marca ou organização e talvez usem ferramentas de IA para si próprios. Poucos já escreveram uma política, uma tabela de riscos ou um plano de mudança, ou levaram uma ferramenta nova a um grupo inteiro.",
    gap: "Os funcionários e os jogadores já usam IA, muitas vezes sem regras, e dados privados de saúde, de contratos ou de menores podem sair para fora. Os alunos precisam de um plano prático de 90 dias que ligue a IA à missão, defina regras claras, controle os riscos e traga as pessoas consigo, para que a IA ajude em vez de criar problemas legais, de privacidade ou de confiança.",
    constraints: [
      "Nível de leitura: palavras simples; os termos de planeamento são explicados da primeira vez",
      "Aparelhos: um telefone ou um computador; um documento ou uma folha de cálculo para o plano",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total, mais o tempo para escrever o plano",
      "Privacidade: os dados de saúde e de desempenho dos atletas, as informações de menores, os contratos e os registos de doadores são protegidos",
      "Sem conselho legal: contratos, patrocínios e leis de dados vão para um advogado qualificado"
    ],
    prerequisites: "Nenhum. O curso \"A IA nos Negócios: Estratégias e Aplicações\" é um bom primeiro curso."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para uma organização real ou de prática", action: "dar uma pontuação de 1 a 5 à sua preparação para a IA em liderança, pessoas, dados, processos e regras", standard: "com uma frase de prova para cada pontuação e uma correção para as duas mais baixas" },
    { id: "O2", condition: "Com a missão da organização", action: "escrever três metas SMART para a IA que sirvam a missão", standard: "cada uma com um número e uma data" },
    { id: "O3", condition: "Para as pessoas que vão usar a IA", action: "escrever uma política de uso da IA de uma página", standard: "que cubra as ferramentas aprovadas, o que nunca entra, a revisão humana, a transparência e uma pessoa de contacto" },
    { id: "O4", condition: "Para cada uso de IA planeado", action: "construir uma tabela de riscos com Governar, Mapear, Medir e Gerir", standard: "com probabilidade, impacto, um controlo e quem o verifica para cada risco" },
    { id: "O5", condition: "Para a equipa que vai adotar a IA", action: "escrever um plano de formação e comunicação", standard: "que diga porquê, o quê e o que ganham com isso, e que nomeie pelo menos um campeão da IA" },
    { id: "O6", condition: "Com as suas metas, política, riscos e formação", action: "criar um calendário de 90 dias em três fases", standard: "com um responsável e uma data-limite para cada passo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se para a IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Avaliar a preparação da sua organização para a IA",
          minutes: 5,
          goal: "Dar uma pontuação à preparação de uma organização para a IA em cinco áreas.",
          text: [
            "Antes de comprar ferramentas, avalie a preparação. Muitos esforços com IA falham não porque a ferramenta é má, mas porque as pessoas, os dados ou as regras não estavam prontos.",
            "Dê uma pontuação a cinco áreas, de 1 (não está pronto) a 5 (está pronto). Liderança: os líderes apoiam e reservam tempo? Pessoas: os funcionários, jogadores ou voluntários têm competências digitais básicas? Dados: as suas informações estão organizadas e guardadas com segurança? Processos: as suas tarefas principais estão escritas? Regras: tem regras de privacidade e de segurança?",
            "Pontuações baixas não são razão para parar. Mostram por onde começar. O negócio de um atleta muito bom nas redes sociais mas com registos desarrumados pode começar por organizar os ficheiros antes de usar IA neles."
          ],
          steps: ["Dê uma pontuação de 1 a 5 à liderança, às pessoas, aos dados, aos processos e às regras.", "Escreva uma frase de prova para cada pontuação.", "Faça um círculo nas duas pontuações mais baixas.", "Anote uma correção para cada pontuação baixa."],
          words: [["Preparação", "quanto uma organização está pronta para começar algo novo."], ["Dados", "as informações que uma organização guarda, como horários, registos e ficheiros."]],
          slides: [
            { title: "Porquê avaliar a preparação", bullets: ["As ferramentas raramente causam o fracasso", "Pessoas, dados ou regras que não estão prontos causam"] },
            { title: "Dê pontuação a cinco áreas, de 1 a 5", bullets: ["Liderança e pessoas", "Dados e processos", "Regras de privacidade e de segurança"] },
            { title: "Pontuações baixas mostram por onde começar", bullets: ["Corrija primeiro o básico", "Exemplo: organize os ficheiros antes de usar IA neles"] }
          ],
          tryIt: "Escolha uma organização real ou de prática. Dê uma pontuação à sua preparação nas cinco áreas, com uma frase de prova para cada uma, e diga a primeira correção para as duas mais baixas.",
          youCanNow: "dar uma pontuação à preparação de uma organização para a IA e encontrar por onde começar.",
          quickCheck: [
            { objective: "O1", q: "Que pergunta avalia a área de preparação \"processos\"?", options: ["Os líderes apoiam a IA?", "As suas tarefas principais estão escritas?", "Os dados estão guardados com segurança?", "Tem regras de privacidade?"], answer: 1, why: "Processos pergunta se as tarefas principais estão escritas." },
            { objective: "O1", q: "A sua academia desportiva tem 2 em dados e 5 em pessoas. O que faz?", options: ["Para totalmente o esforço com IA", "Compra já a ferramenta de IA mais avançada", "Ignora a pontuação dos dados", "Começa por corrigir a área dos dados, por exemplo organizando os registos"], answer: 3, why: "Pontuações baixas mostram por onde começar, não são razão para parar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Definir metas de IA ligadas à missão",
          minutes: 5,
          goal: "Escrever três metas de IA que se podem medir e que servem a missão da organização.",
          text: [
            "A IA deve servir a missão, e não o contrário. Comece pela razão de existir da organização: formar jovens atletas, fazer crescer uma marca, servir refeições, vender bons produtos.",
            "Depois pergunte onde a IA pode ajudar essa missão: mais tempo com atletas ou clientes, respostas mais rápidas às famílias ou aos clientes, melhor uso dos dados, custos mais baixos. Transforme cada uma numa meta que se pode medir: \"Reduzir o tempo semanal de administração dos treinadores de 6 horas para 3 até março.\"",
            "Use o teste SMART (palavra inglesa): específica, mensurável, alcançável, relevante para a missão e com prazo. Três metas chegam para 90 dias."
          ],
          steps: ["Escreva a missão numa frase.", "Faça uma lista de três maneiras de a IA a apoiar.", "Transforme cada uma numa meta SMART com um número e uma data."],
          words: [["Missão", "o propósito principal para o qual uma organização existe."], ["Meta SMART", "uma meta específica, mensurável, alcançável, relevante e com prazo (do inglês specific, measurable, achievable, relevant, time-bound)."]],
          slides: [
            { title: "Primeiro a missão", bullets: ["A IA serve a missão", "E não o contrário"] },
            { title: "Onde a IA pode ajudar", bullets: ["Mais tempo com atletas ou clientes", "Respostas mais rápidas", "Custos mais baixos, melhor uso dos dados"] },
            { title: "Metas SMART", bullets: ["Específica, mensurável, alcançável", "Relevante para a missão, com prazo", "Três metas para 90 dias"] }
          ],
          tryIt: "Escreva a missão da organização numa frase e três metas SMART de IA que a apoiem.",
          youCanNow: "definir metas de IA que se podem medir e que servem a missão de uma organização.",
          quickCheck: [
            { objective: "O2", q: "Em SMART, o que quer dizer o \"R\"?", options: ["Relevante para a missão", "Rápida", "Repetida", "Exigida por lei"], answer: 0, why: "Uma meta SMART é relevante para a missão da organização." },
            { objective: "O2", q: "A marca de um atleta quer \"usar mais IA\". Como transforma isto numa meta SMART?", options: ["\"Usar muitas ferramentas de IA.\"", "\"Ser a melhor marca na internet.\"", "\"Responder aos e-mails de fãs e patrocinadores em 24 horas, em vez de 3 dias, até junho.\"", "\"Experimentar a IA um dia.\""], answer: 2, why: "É específica, mensurável, ligada à missão e tem uma data." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever uma política de uso da IA de uma página",
          minutes: 6,
          goal: "Escrever uma política de uso da IA curta que diga às pessoas o que é permitido, o que não é e a quem perguntar.",
          text: [
            "Uma política de uso da IA é um conjunto curto de regras sobre como as pessoas da organização usam a IA. Sem ela, as pessoas adivinham, e alguém pode colar informações privadas de jogadores, clientes ou doadores numa ferramenta gratuita.",
            "Mantenha-a numa página e inclua: as ferramentas aprovadas; o que nunca pode entrar na IA (registos de saúde, números da Segurança Social e de banco, contratos privados, informações de crianças, palavras-passe); revisão por uma pessoa antes de publicar ou enviar qualquer coisa feita pela IA; honestidade sobre o uso da IA quando isso importa; e a quem fazer perguntas.",
            "Acrescente regras especiais para a sua área. As organizações desportivas devem proteger os dados de saúde e de desempenho dos atletas e as informações de menores. As organizações sem fins lucrativos devem proteger os registos de doadores e de clientes. Peça conselho legal sobre contratos, patrocínios e as leis de dados que se aplicam a você."
          ],
          steps: ["Faça a lista das ferramentas de IA aprovadas.", "Faça a lista das informações que nunca podem entrar na IA.", "Exija que uma pessoa reveja o que a IA produz antes de o enviar ou publicar.", "Diga quando o uso da IA deve ser revelado.", "Nomeie uma pessoa de contacto para perguntas.", "Marque uma data para rever a política."],
          words: [["Política", "uma regra escrita que todos numa organização seguem."], ["Revisão humana", "uma pessoa verifica o que a IA produziu antes de ser usado."]],
          slides: [
            { title: "Porquê uma política", bullets: ["As pessoas deixam de adivinhar", "Os dados privados ficam fora das ferramentas gratuitas"] },
            { title: "Uma página inclui", bullets: ["Ferramentas aprovadas", "O que nunca entra na IA", "Revisão humana e a quem perguntar"] },
            { title: "Regras para a sua área", bullets: ["Desporto: dados de saúde dos atletas, menores", "Sem fins lucrativos: registos de doadores e de clientes", "Conselho legal para contratos e leis de dados"] }
          ],
          tryIt: "Escreva uma política de uso da IA de uma página para a sua organização, com as seis partes. Peça a um assistente de IA para ver se há algo pouco claro e depois corrija-a você mesmo.",
          youCanNow: "escrever uma política de uso da IA curta que protege as pessoas e os dados.",
          quickCheck: [
            { objective: "O3", q: "Porque é que uma organização precisa de uma política de uso da IA?", options: ["Para proibir toda a tecnologia", "Para tornar as ferramentas de IA gratuitas", "Para substituir o manual dos funcionários", "Para as pessoas não adivinharem nem colarem informações privadas em ferramentas de IA"], answer: 3, why: "Sem uma política, as pessoas adivinham, e dados privados de jogadores, clientes ou doadores podem sair para fora." },
            { objective: "O3", q: "Um treinador quer que a IA escreva o rascunho de um contrato de patrocínio. O que deve dizer a sua política?", options: ["Enviar logo o rascunho da IA ao patrocinador", "Pedir conselho legal sobre contratos; uma pessoa revê tudo o que a IA faz", "Os contratos não estão em nenhuma regra", "Colar o contrato privado completo numa ferramenta de IA gratuita"], answer: 1, why: "Os contratos precisam de conselho legal, e o que a IA produz é revisto por uma pessoa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se para a IA",
        questions: [
          { objective: "O1", q: "Porquê avaliar a preparação antes de comprar ferramentas de IA?", options: ["As ferramentas são sempre más", "A lei exige", "Pessoas, dados ou regras que não estão prontos causam a maioria dos fracassos", "Para gastar mais dinheiro"], answer: 2, why: "Normalmente os problemas vêm de falhas na preparação, não das ferramentas." },
          { objective: "O1", q: "Uma academia tem registos desarrumados e espalhados. Qual é um primeiro passo inteligente?", options: ["Organizar os ficheiros antes de usar IA neles", "Pôr tudo na IA como está", "Desistir da IA", "Comprar a ferramenta mais cara"], answer: 0, why: "Dados organizados tornam a IA útil e mais segura." },
          { objective: "O2", q: "Qual é uma meta SMART?", options: ["\"Usar mais IA\"", "\"Ser moderno\"", "\"Experimentar coisas\"", "\"Reduzir o tempo semanal de administração dos treinadores de 6 horas para 3 até março\""], answer: 3, why: "É específica, mensurável e tem prazo." },
          { objective: "O3", q: "O que deve dizer uma política de uso da IA sobre os registos de saúde dos atletas?", options: ["Pode colá-los em qualquer lado", "Nunca podem entrar em ferramentas de IA que não estejam aprovadas para eles", "Publicá-los na internet", "Partilhá-los com os patrocinadores"], answer: 1, why: "Os dados de saúde são privados e têm de ser protegidos." },
          { objective: "O3", q: "Quem deve verificar o conteúdo feito pela IA antes de ser publicado?", options: ["Ninguém", "Uma pessoa", "Só a própria IA", "Um seguidor qualquer"], answer: 1, why: "A revisão humana é uma regra central da política." }
        ]
      }
    },
    {
      name: "Capítulo 2: Introduzir a IA com segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gerir os riscos da IA com um modelo simples",
          minutes: 5,
          goal: "Construir uma tabela de riscos para um uso da IA e dar um controlo a cada risco.",
          text: [
            "O Instituto Nacional de Normas e Tecnologia dos EUA (NIST) publica um Modelo de Gestão de Riscos da IA (AI Risk Management Framework), gratuito e de uso voluntário. As suas quatro funções principais são Governar, Mapear, Medir e Gerir. Pode usá-las com palavras simples, mesmo numa organização pequena.",
            "Governar: quem é responsável e quais são as regras (a sua política). Mapear: para cada uso da IA, o que pode correr mal e quem pode ser prejudicado. Medir: como vai notar os problemas, por exemplo verificando algumas respostas ao acaso. Gerir: o que faz em relação a cada risco, por exemplo revisão humana ou não usar IA nessa tarefa.",
            "Riscos comuns da IA: factos errados, fugas de dados privados, tratamento injusto de pessoas, problemas de direitos de autor e danos à reputação. Escreva cada um numa tabela de riscos com a probabilidade, a gravidade e o controlo."
          ],
          steps: ["Faça a lista de cada uso da IA planeado.", "Para cada um, escreva o que pode correr mal e quem pode ser prejudicado.", "Classifique a probabilidade e o impacto: baixo, médio ou alto.", "Acrescente um controlo para cada risco.", "Nomeie quem verifica se o controlo funciona."],
          words: [["NIST", "o Instituto Nacional de Normas e Tecnologia dos EUA, que publica normas técnicas e orientações."], ["Tabela de riscos", "uma lista de riscos com a probabilidade e a gravidade de cada um, e o que vai fazer em relação a ele."]],
          slides: [
            { title: "NIST AI RMF: quatro funções", bullets: ["Governar: papéis e regras", "Mapear: o que pode correr mal", "Medir: como nota os problemas", "Gerir: o que faz em relação a eles"] },
            { title: "Riscos comuns da IA", bullets: ["Factos errados e fugas de dados", "Tratamento injusto de pessoas", "Direitos de autor e reputação"] },
            { title: "Uma tabela de riscos simples", bullets: ["Risco, probabilidade, impacto", "Controlo e quem o verifica"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework (Modelo de Gestão de Riscos da IA do NIST)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Faça uma tabela de riscos para dois usos da IA do seu plano, com pelo menos três riscos cada, uma classificação de probabilidade e de impacto, um controlo e uma pessoa que o verifica.",
          youCanNow: "mapear os riscos da IA e dar-lhes controlos com as quatro funções do NIST.",
          quickCheck: [
            { objective: "O4", q: "No modelo do NIST, que função trata do que faz em relação a cada risco?", options: ["Governar", "Mapear", "Gerir", "Medir"], answer: 2, why: "Gerir é a ação que toma em cada risco, por exemplo a revisão humana." },
            { objective: "O4", q: "A IA vai escrever rascunhos de notícias sobre lesões para os pais. Que controlo serve para o risco de factos errados?", options: ["Um preparador físico ou um treinador revê cada notícia antes de ser enviada", "Enviá-las mais depressa", "Acrescentar mais ferramentas de IA", "Deixar de dizer qualquer coisa aos pais"], answer: 0, why: "A revisão humana antes do envio controla o risco de factos errados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Guiar as pessoas na mudança",
          minutes: 5,
          goal: "Escrever um plano de formação e comunicação que ajude as pessoas a adotar a IA.",
          text: [
            "As pessoas preocupam-se com a IA: Vai substituir-me? Vou parecer tolo? É permitido? Ignorar essas preocupações atrasa tudo. Fale delas abertamente.",
            "Comunique o porquê (a missão e as metas), o quê (que ferramentas e que regras) e o que eu ganho com isso (menos administração, mais tempo para treinar, para os clientes ou para a família). Nomeie campeões da IA: uma ou duas pessoas que aprendem primeiro e ajudam os outros.",
            "Forme em pequenas doses: uma sessão prática de 30 minutos por ferramenta, uma folha de uma página com bons pedidos (prompts) e um lugar para fazer perguntas. Celebre as primeiras vitórias nas reuniões da equipa."
          ],
          steps: ["Escreva uma mensagem curta: porquê, o quê e o que as pessoas ganham com isso.", "Escolha um ou dois campeões da IA.", "Planeie sessões práticas de formação de 30 minutos.", "Faça uma folha de pedidos de uma página.", "Partilhe as primeiras vitórias nas reuniões."],
          words: [["Gestão da mudança", "ajudar as pessoas a passar da maneira antiga de trabalhar para uma nova."], ["Campeão da IA", "um membro da equipa que aprende primeiro e ajuda os outros."]],
          slides: [
            { title: "Fale das preocupações", bullets: ["Vai substituir-me?", "Vou parecer tolo?", "É permitido?"] },
            { title: "Comunique com clareza", bullets: ["Porquê: missão e metas", "O quê: ferramentas e regras", "O que as pessoas ganham com isso"] },
            { title: "Forme em pequenas doses", bullets: ["Sessões práticas de 30 minutos", "Folha de pedidos e campeões da IA", "Celebre as primeiras vitórias"] }
          ],
          tryIt: "Escreva um anúncio de cinco frases para a sua equipa, jogadores, funcionários ou voluntários sobre o plano de IA, e um horário de formação para o primeiro mês.",
          youCanNow: "planear a formação e a comunicação que ajudam as pessoas a adotar a IA.",
          quickCheck: [
            { objective: "O5", q: "O que é uma folha de pedidos (prompts)?", options: ["Uma lista de funcionários proibidos", "Uma lista de uma página com bons pedidos que as pessoas podem copiar", "Um teste para dar nota aos funcionários", "Uma maneira secreta de fugir à política"], answer: 1, why: "Uma folha de uma página com bons pedidos ajuda as pessoas a começar depressa." },
            { objective: "O5", q: "Os funcionários estão nervosos e evitam a nova ferramenta de IA. O que faz?", options: ["Obriga-os a usá-la sem formação", "Espera que descubram sozinhos", "Tira a ferramenta sem dizer nada a ninguém", "Fala abertamente das preocupações, faz uma sessão prática curta e partilha as primeiras vitórias"], answer: 3, why: "Conversa aberta, formação prática curta e primeiras vitórias ajudam as pessoas a adotar a IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Construir o calendário de 90 dias",
          minutes: 5,
          goal: "Transformar metas, política, riscos e formação num calendário de 90 dias com responsáveis e datas.",
          text: [
            "Um calendário (roadmap) põe tudo por ordem, com datas. Divida os 90 dias em três fases de 30 dias. Dias 1-30: bases (política aprovada, ficheiros organizados, campeões formados). Dias 31-60: pilotos (um ou dois usos pequenos da IA testados com medidas). Dias 61-90: rever e alargar (decidir o que manter, alargar ou parar).",
            "Cada passo precisa de um responsável e de uma data-limite. Um passo sem responsável normalmente não acontece.",
            "Planeie um ponto de situação de duas em duas semanas e uma revisão no dia 90, comparando com as suas metas SMART. Depois escreva o plano dos 90 dias seguintes. As ferramentas e as regras da IA mudam depressa, por isso reveja a política pelo menos de seis em seis meses."
          ],
          steps: ["Dias 1-30: bases.", "Dias 31-60: pilotos com medidas.", "Dias 61-90: rever, e depois alargar ou parar.", "Dê a cada passo um responsável e uma data.", "Marque pontos de situação de duas em duas semanas e uma revisão no dia 90."],
          words: [["Calendário (roadmap)", "um plano que mostra os passos por ordem, com datas."], ["Responsável", "a pessoa encarregada de fazer um passo acontecer."]],
          slides: [
            { title: "Três fases de 30 dias", bullets: ["1-30: bases", "31-60: pilotos", "61-90: rever e alargar"] },
            { title: "Responsáveis e datas", bullets: ["Cada passo tem um responsável", "Cada passo tem uma data-limite"] },
            { title: "Mantenha o plano vivo", bullets: ["Pontos de situação de duas em duas semanas", "Revisão no dia 90, comparando com as metas", "Reveja a política de seis em seis meses"] }
          ],
          tryIt: "Tarefa final: construa o seu calendário de 90 dias numa tabela com fase, passo, responsável e data, e junte a sua pontuação de preparação, as metas, a política, a tabela de riscos e o plano de formação para completar o seu plano de integração da IA.",
          youCanNow: "escrever um plano completo de 90 dias para trazer a IA para uma organização com segurança.",
          quickCheck: [
            { objective: "O6", q: "O que acontece nos dias 61-90 do calendário?", options: ["Rever os pilotos e decidir o que manter, alargar ou parar", "Escrever a declaração de missão", "Comprar todas as ferramentas", "Formar os primeiros campeões"], answer: 0, why: "A última fase revê os pilotos e alarga-os ou para-os." },
            { objective: "O6", q: "O seu calendário diz \"formar os funcionários\" sem nome nem data. O que acrescenta?", options: ["Nada; vai acontecer", "Uma descrição mais longa", "Um responsável e uma data-limite", "Um segundo calendário"], answer: 2, why: "Um passo sem responsável e sem data normalmente não se faz." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Introduzir a IA com segurança",
        questions: [
          { objective: "O4", q: "Quais são as quatro funções principais do Modelo de Gestão de Riscos da IA do NIST?", options: ["Comprar, Construir, Vender, Repetir", "Planear, Fazer, Verificar, Agir", "Ler, Escrever, Testar, Entregar", "Governar, Mapear, Medir, Gerir"], answer: 3, why: "O NIST indica Governar, Mapear, Medir e Gerir." },
          { objective: "O4", q: "A lei obriga as organizações pequenas a usar o Modelo de Gestão de Riscos da IA do NIST?", options: ["Não, o NIST diz que é voluntário", "Sim, com multas pesadas", "Só para atletas", "Só no Quénia"], answer: 0, why: "O NIST descreve-o como feito para uso voluntário." },
          { objective: "O5", q: "Um treinador tem medo de que a IA o substitua. Qual é a melhor resposta?", options: ["Ignorar", "Dizer-lhe para parar de perguntar", "Explicar abertamente como a IA liberta tempo para treinar e o que não vai mudar", "Esconder o plano"], answer: 2, why: "Falar abertamente das preocupações acelera a adoção." },
          { objective: "O5", q: "O que é um campeão da IA?", options: ["Uma IA que ganha jogos", "Um influenciador pago", "A ferramenta mais cara", "Um membro da equipa que aprende primeiro e ajuda os outros"], answer: 3, why: "Os campeões espalham competências e confiança." },
          { objective: "O6", q: "Um passo do calendário não tem responsável. O que costuma acontecer?", options: ["Termina mais cedo", "A IA faz o passo", "Não se faz", "Nada muda"], answer: 2, why: "Os passos precisam de um responsável para acontecer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Estratégias para Integrar a IA na Sua Organização",
    questions: [
      { objective: "O1", q: "A maioria dos esforços com IA falha porque:", options: ["As ferramentas nunca funcionam", "As pessoas, os dados ou as regras não estavam prontos", "A IA é ilegal", "Os computadores são lentos demais"], answer: 1, why: "As falhas na preparação causam a maioria dos fracassos." },
      { objective: "O1", q: "Qual é uma das cinco áreas de preparação?", options: ["Dados", "Cores da equipa", "Tamanho do escritório", "Preço das ações"], answer: 0, why: "Liderança, pessoas, dados, processos e regras." },
      { objective: "O1", q: "Uma pontuação de preparação baixa quer dizer:", options: ["Parar para sempre", "Ignorar", "Começar por corrigir essa área", "Comprar mais ferramentas"], answer: 2, why: "Pontuações baixas mostram por onde começar." },
      { objective: "O2", q: "As metas de IA devem estar ligadas a:", options: ["A missão da organização", "O que os concorrentes publicam", "A moda mais recente", "Nada em especial"], answer: 0, why: "A IA serve a missão." },
      { objective: "O2", q: "SMART quer dizer:", options: ["Simples, moderna, automática, rápida, técnica", "Inteligente, móvel, IA, robô, tecnologia", "Vendas, marketing, administração, comércio, impostos", "Específica, mensurável, alcançável, relevante, com prazo"], answer: 3, why: "São os cinco testes SMART." },
      { objective: "O2", q: "Quantas metas o curso sugere para 90 dias?", options: ["Trinta", "Três", "Cem", "Zero"], answer: 1, why: "Três metas mantêm o plano focado." },
      { objective: "O3", q: "Uma política de uso da IA é:", options: ["Uma chave de licença de software", "Um conjunto curto de regras sobre como as pessoas usam a IA", "Um plano de seguro", "Uma publicação de marketing"], answer: 1, why: "Diz às pessoas o que é permitido e o que não é." },
      { objective: "O3", q: "O que nunca deve entrar numa ferramenta de IA não aprovada?", options: ["Um horário de treino geral", "A data de um evento público", "Um exemplo de publicação nas redes sociais", "As informações de saúde de um atleta menor"], answer: 3, why: "Os dados de saúde e as informações de menores são muito privados." },
      { objective: "O3", q: "Onde deve uma organização pedir conselho sobre contratos de patrocínio e leis de dados?", options: ["A um advogado qualificado", "Numa conversa qualquer com uma IA", "Num comentário nas redes sociais", "A um concorrente"], answer: 0, why: "As questões legais precisam de um profissional." },
      { objective: "O4", q: "Nos termos do NIST, decidir quem é responsável e quais são as regras é:", options: ["Mapear", "Medir", "Governar", "Gerir"], answer: 2, why: "Governar trata dos papéis e das regras." },
      { objective: "O4", q: "Fazer a lista do que pode correr mal em cada uso da IA é:", options: ["Governar", "Gerir", "Medir", "Mapear"], answer: 3, why: "Mapear identifica os riscos e quem pode ser prejudicado." },
      { objective: "O4", q: "Verificar algumas respostas da IA ao acaso todas as semanas é um exemplo de:", options: ["Governar", "Mapear", "Medir", "Missão"], answer: 2, why: "Medir é como nota os problemas." },
      { objective: "O4", q: "Uma tabela de riscos inclui:", options: ["Só o preço da ferramenta", "Risco, probabilidade, impacto, controlo e quem verifica", "Estatísticas dos jogadores", "Nomes de contas nas redes sociais"], answer: 1, why: "Essas colunas tornam os riscos fáceis de gerir." },
      { objective: "O4", q: "Qual é um risco comum da IA?", options: ["Tratamento injusto de pessoas", "Tempo livre a mais", "Respostas melhores", "Custos mais baixos"], answer: 0, why: "A IA pode tratar as pessoas de forma injusta se não for verificada." },
      { objective: "O5", q: "Na comunicação da mudança, \"o que eu ganho com isso\" quer dizer:", options: ["Só um bónus no salário", "O lucro do fornecedor", "Como a IA ajuda as pessoas a quem se pede para a usar", "Uma cláusula legal"], answer: 2, why: "As pessoas aceitam a mudança quando veem o benefício." },
      { objective: "O5", q: "Uma boa maneira de formar os funcionários em IA é:", options: ["Sessões práticas curtas e uma folha de pedidos", "Uma palestra de três dias sem prática", "Nenhuma formação", "Uma nota interna sem exemplos"], answer: 0, why: "Doses pequenas e práticas funcionam melhor." },
      { objective: "O6", q: "Os dias 1-30 do calendário concentram-se em:", options: ["Alargar a todo o lado", "A revisão final", "Despedir funcionários", "Bases: política, ficheiros, campeões"], answer: 3, why: "As bases vêm primeiro." },
      { objective: "O6", q: "Os dias 31-60 do calendário concentram-se em:", options: ["Escrever a missão", "Pilotos pequenos com medidas", "Nada", "Comprar todas as ferramentas"], answer: 1, why: "A fase do meio testa usos da IA." },
      { objective: "O6", q: "Com que frequência devem acontecer os pontos de situação nos 90 dias?", options: ["Uma vez por ano", "De duas em duas semanas", "Nunca", "De hora a hora"], answer: 1, why: "Pontos de situação regulares mantêm o plano no caminho certo." },
      { objective: "O6", q: "Com que frequência deve a política de IA ser revista?", options: ["Nunca", "De dez em dez anos", "Só depois de um escândalo", "Pelo menos de seis em seis meses"], answer: 3, why: "As ferramentas e as regras da IA mudam depressa." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 3, 4, 7, 9, 12, 14, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Preparação e metas", objective: "O2", notYet: "Não há pontuação de preparação, ou as metas não têm número nem data.", meets: "Uma pontuação de preparação nas cinco áreas e três metas SMART ligadas à missão.", exceeds: "Cada meta liga-se a uma área de preparação baixa que vai corrigir ou contornar." },
      { name: "Política de uso da IA", objective: "O3", notYet: "Falta o que nunca entra na IA, ou não há revisão humana.", meets: "Uma página com ferramentas aprovadas, o que nunca entra, revisão humana, transparência e uma pessoa de contacto.", exceeds: "Acrescenta regras para a área, como os dados de saúde dos atletas e os menores, e uma data de revisão." },
      { name: "Tabela de riscos", objective: "O4", notYet: "Riscos listados sem controlos.", meets: "Cada uso da IA tem riscos com probabilidade, impacto, um controlo e quem verifica.", exceeds: "Cobre factos errados, fugas de dados e tratamento injusto, e liga-se a Governar, Mapear, Medir e Gerir." },
      { name: "Formação e comunicação", objective: "O5", notYet: "Não há plano para informar nem formar as pessoas.", meets: "Uma mensagem com porquê, o quê e o que as pessoas ganham com isso, campeões e sessões de formação curtas.", exceeds: "Inclui uma folha de pedidos e uma maneira de partilhar as primeiras vitórias." },
      { name: "Calendário de 90 dias", objective: "O6", notYet: "Os passos não têm responsáveis nem datas.", meets: "Três fases de 30 dias, cada passo com um responsável e uma data, e pontos de situação de duas em duas semanas.", exceeds: "Inclui uma revisão no dia 90, comparando com as metas SMART, e uma data de revisão da política." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações que aprovam uma política de uso da IA em 30 dias (inquérito de seguimento)",
      "Organizações que alcançam pelo menos uma meta SMART até ao dia 90",
      "Organizações que não comunicam nenhum incidente com dados privados causado pelo uso da IA durante os 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Uma ferramenta de documentos e de folhas de cálculo (Google Docs e Sheets, ou Word e Excel) para o plano",
      "As páginas gratuitas do Modelo de Gestão de Riscos da IA do NIST, opcionais para ler mais",
      "Cerca de 60 minutos para as lições e as verificações, mais o tempo para escrever o plano de 90 dias"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; preencham um exemplo de pontuação de preparação num ecrã partilhado.",
      "Use exemplos do mundo do grupo: a marca de um atleta, uma academia desportiva, um pequeno negócio ou uma associação sem fins lucrativos.",
      "Lembre aos alunos que os dados de saúde dos atletas, as informações de menores e os contratos precisam de cuidado extra, e que as questões legais vão para um advogado.",
      "Peça aos alunos para trocarem as políticas e as tabelas de riscos com um colega para uma revisão rápida.",
      "Avalie o plano final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
