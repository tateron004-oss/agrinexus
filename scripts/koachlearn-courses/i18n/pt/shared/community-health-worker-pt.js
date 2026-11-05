"use strict";

// Koach Learn course (Portuguese translation of shared/community-health-worker.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "community-health-worker-pt",
  lang: "pt",
  translationOf: "community-health-worker",
  category: "Workforce Development",
  name: "Bases do Agente Comunitário de Saúde",
  skills: "Explicar o papel do ACS e o caminho no seu estado, Ouvir e usar linguagem simples, Perguntar sobre necessidades com respeito, Encontrar e verificar recursos locais, Fazer um encaminhamento e acompanhar, Proteger a privacidade e os limites",
  outcome: "fazer um guia de recursos verificados para a sua comunidade e usá-lo para planear um encaminhamento respeitoso para um vizinho inventado, como faz um agente comunitário de saúde.",
  about: [
    "Os agentes comunitários de saúde (ACS; em inglês, community health workers ou CHWs) são pessoas de confiança de uma comunidade que ajudam os vizinhos a ter cuidados de saúde e outras ajudas, como comida, casa, transporte e cobertura de saúde. Também têm nomes como promotor ou promotora, agente de proximidade, navegador de pares ou navegador de doentes.",
    "Muitos ACS são contratados porque partilham a língua, a cultura ou a experiência de vida das pessoas que servem, incluindo pessoas que estiveram na prisão, antigos militares e imigrantes. A sua experiência de vida conta.",
    "Este curso prepara você para a formação de ACS e para um primeiro trabalho. Não lhe dá um certificado. Alguns estados certificam os ACS e outros não, por isso vai aprender onde verificar o seu. Vai praticar ouvir, perguntar sobre necessidades, encontrar e verificar ajuda local, fazer um encaminhamento e proteger a privacidade e os limites.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" e uma pequena verificação de duas perguntas. No final, você faz um guia de recursos para a sua comunidade e um plano de encaminhamento para um vizinho inventado."
  ],
  finalTask: "Faça um guia de recursos de uma página para a sua comunidade com pelo menos cinco recursos locais (comida, casa, cuidados de saúde, cobertura de saúde e mais um), cada um verificado na sua própria página oficial, com a morada, o telefone e como se candidatar. Depois escreva um plano de encaminhamento para um vizinho inventado (só para praticar): a necessidade dele com as palavras dele, o recurso que escolheu e porquê, o que vai dizer, como vai ajudá-lo a ligar-se ao serviço e quando vai acompanhar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que querem ajudar a sua própria comunidade e ser pagos por isso: pessoas à procura de emprego, pessoas que voltam da prisão, antigos militares, imigrantes, voluntários de igrejas e de organizações sem fins lucrativos, e jovens adultos. Muitos já ajudam os vizinhos de forma informal.",
    startingPoint: "Têm bom trato com as pessoas e conhecem bem o lugar onde vivem. A maioria não tem formação formal em saúde, não conhece o nome da profissão de ACS nem as regras de certificação, e nunca verificou recursos em páginas oficiais.",
    gap: "Clínicas, planos de saúde, serviços de saúde pública e organizações sem fins lucrativos contratam ACS para ligar as pessoas a cuidados e serviços. Os alunos precisam de conhecer o papel, saber ouvir e perguntar sobre necessidades com respeito, encontrar e verificar recursos, encaminhar e acompanhar, e proteger a privacidade e os limites.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 7.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca; todas as tarefas funcionam em papel",
      "A certificação de ACS muda de estado para estado; o curso aponta para a página do estado e não indica horas nem taxas",
      "Nenhum conselho clínico nem sobre medicamentos; as perguntas de saúde vão para os profissionais de saúde",
      "A prática usa pessoas inventadas; nenhum nome verdadeiro nem dados privados"
    ],
    prerequisites: "Nenhum. O curso \"Literacia em Saúde: Compreender os Seus Cuidados de Saúde\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando fontes nacionais sobre ACS e a página oficial do seu estado", action: "descrever o que faz um agente comunitário de saúde e os passos para começar no seu estado", standard: "dizendo pelo menos 3 papéis do ACS e se o seu estado certifica os ACS" },
    { id: "O2", condition: "Numa conversa de prática com um vizinho inventado", action: "usar a escuta ativa, a linguagem simples e o \"explique de volta\"", standard: "repetindo o que a pessoa disse e verificando que ela entendeu, sem palavras técnicas" },
    { id: "O3", condition: "Usando uma lista curta de necessidades sociais", action: "perguntar a um vizinho inventado sobre as suas necessidades, com consentimento e respeito", standard: "pedindo licença primeiro e cobrindo comida, casa, transporte, contas da casa e segurança" },
    { id: "O4", condition: "Com uma necessidade como comida ou uma clínica", action: "encontrar um recurso local e verificá-lo na sua página oficial", standard: "com a morada, o telefone, o horário e como se candidatar, confirmados na página oficial" },
    { id: "O5", condition: "Com uma situação de encaminhamento", action: "planear um encaminhamento e um acompanhamento protegendo a privacidade e os limites", standard: "com uma data de acompanhamento, o consentimento para partilhar e o passo certo para uma crise" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O papel do ACS e a ligação com as pessoas",
      lessons: [
        {
          title: "O que fazem os agentes comunitários de saúde e como começar",
          objectives: ["O1"],
          minutes: 5,
          goal: "Descrever o papel do ACS e encontrar as regras do seu estado para os ACS.",
          text: [
            "A American Public Health Association (APHA, a associação de saúde pública dos Estados Unidos) diz que um agente comunitário de saúde é um trabalhador de saúde pública da linha da frente, de confiança da comunidade ou que a conhece bem. Os ACS ligam as pessoas aos serviços de saúde e sociais e ajudam a adaptar os cuidados à cultura das pessoas.",
            "O US Bureau of Labor Statistics (BLS, o serviço de estatísticas do trabalho dos EUA) diz que os ACS fazem trabalho de proximidade, como visitas a casa, ajudam a coordenar os cuidados, ligam as pessoas a ajuda com transporte, casa e comida, e podem fazer rastreios básicos de saúde. O National C3 Council lista dez papéis do ACS, incluindo trabalho de proximidade, educação para a saúde, coordenação de cuidados e orientação no sistema, defesa dos direitos, e acompanhamento e apoio social.",
            "Normalmente o mínimo é o diploma do ensino secundário (high school), com formação no trabalho. Alguns estados exigem certificação, que pode incluir um programa de formação aprovado. Verifique no departamento de saúde do seu estado, na ordem de enfermagem ou no departamento de serviços sociais.",
            "Este curso prepara você. Não lhe dá um certificado. Quem contrata: clínicas comunitárias, hospitais, serviços de saúde pública, planos de saúde e organizações sem fins lucrativos."
          ],
          steps: ["Pesquise o nome do seu estado mais \"community health worker certification\".", "Abra o resultado do site do governo do seu estado.", "Escreva se o seu estado certifica os ACS e o que exige.", "Veja dois anúncios de emprego de ACS perto de você e faça a lista das tarefas."],
          words: [["Agente comunitário de saúde (ACS)", "um membro de confiança da comunidade que ajuda as pessoas a ter cuidados de saúde e outros serviços (em inglês, community health worker ou CHW)."], ["Promotor ou promotora", "um nome comum em espanhol para um agente comunitário de saúde."], ["Trabalho de proximidade", "ir onde as pessoas estão, como casas, eventos ou igrejas, para partilhar informação e oferecer ajuda (em inglês, outreach)."], ["Certificação", "um registo oficial de que você cumpriu as regras de formação e de exame de um estado ou de um grupo."]],
          slides: [
            { title: "Um ACS é...", bullets: ["Um membro de confiança da comunidade", "Uma ponte para os cuidados de saúde e os serviços", "Também chamado promotor, agente de proximidade, navegador"] },
            { title: "O que fazem os ACS", bullets: ["Trabalho de proximidade e visitas a casa", "Educação para a saúde com palavras simples", "Ligar as pessoas a comida, casa, transporte e cuidados", "Defesa dos direitos e apoio"] },
            { title: "Como começar", bullets: ["Normalmente o ensino secundário mais formação no trabalho", "Alguns estados certificam os ACS", "Veja a página do departamento de saúde do seu estado"] },
            { title: "Este curso prepara você", bullets: ["Não lhe dá um certificado", "Quem contrata: clínicas, hospitais, planos de saúde, organizações"] }
          ],
          sources: [
            { name: "APHA: Secção de Agentes Comunitários de Saúde", url: "https://www.apha.org/apha-communities/member-sections/community-health-workers" },
            { name: "US Bureau of Labor Statistics: Agentes Comunitários de Saúde", url: "https://www.bls.gov/ooh/community-and-social-service/community-health-workers.htm" },
            { name: "National C3 Council: Papéis e Competências do ACS", url: "https://www.c3council.org/roles-competencies" }
          ],
          tryIt: "Descubra se o seu estado certifica os agentes comunitários de saúde, usando a página oficial do seu estado. Depois encontre um anúncio de emprego de ACS perto de você. Em papel, escreva a regra do seu estado, três tarefas do anúncio e uma forma como a sua experiência de vida serve para este trabalho.",
          youCanNow: "descrever o que faz um agente comunitário de saúde e encontrar as regras do seu estado numa página oficial.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma parte principal do trabalho de um ACS?", options: ["Passar receitas", "Fazer cirurgias", "Diagnosticar doenças", "Ligar as pessoas aos cuidados de saúde e aos serviços"], answer: 3, why: "Os ACS ligam as pessoas aos cuidados e serviços; os profissionais de saúde diagnosticam e receitam." },
            { objective: "O1", q: "Todos os estados exigem a certificação de ACS?", options: ["Sim, igual em todo o lado", "Não; alguns exigem, por isso veja a página do seu estado", "Só para médicos", "Só no verão"], answer: 1, why: "O BLS diz que alguns estados exigem certificação; as regras mudam de estado para estado." }
          ]
        },
        {
          title: "Ouvir e falar de forma simples",
          objectives: ["O2"],
          minutes: 5,
          goal: "Usar a escuta ativa, palavras simples e o \"explique de volta\" numa conversa de prática.",
          text: [
            "As pessoas partilham mais quando se sentem ouvidas. Escuta ativa quer dizer dar toda a sua atenção, deixar a pessoa acabar e repetir o que ouviu: \"Então, chegar à clínica é difícil porque o autocarro não passa cedo. Percebi bem?\"",
            "Use linguagem simples. Diga \"açúcar no sangue\" em vez de \"glicose\", e \"um papel que mostra onde vive\" em vez de \"comprovativo de residência\". Use frases curtas e uma ideia de cada vez. Ofereça um intérprete quando a pessoa prefere outra língua.",
            "O \"explique de volta\" (em inglês, teach-back) verifica se você explicou com clareza. Peça à pessoa para dizer o plano com as palavras dela: \"Só para eu saber se expliquei bem, pode dizer-me o que vai levar ao banco alimentar?\" Se ela não conseguir, o que tem de mudar é a sua explicação, não a memória dela.",
            "Respeito quer dizer não julgar. Pergunte o que é importante para a pessoa e o que ela já tentou. Ela é quem mais sabe sobre a própria vida."
          ],
          steps: ["Dê toda a atenção e deixe a pessoa acabar.", "Repita o que ouviu e pergunte se percebeu bem.", "Explique o próximo passo com palavras simples, uma ideia de cada vez.", "Use o \"explique de volta\": peça à pessoa para dizer o plano com as palavras dela."],
          words: [["Escuta ativa", "ouvir com toda a atenção e repetir o que ouviu."], ["Linguagem simples", "palavras e frases curtas e comuns, fáceis de entender."], ["Explique de volta (teach-back)", "pedir a uma pessoa para explicar o plano com as palavras dela, para verificar se você explicou com clareza."], ["Palavras técnicas (jargão)", "palavras especiais que um grupo usa e que os outros podem não entender."]],
          slides: [
            { title: "Escuta ativa", bullets: ["Toda a atenção, deixe a pessoa acabar", "Repita o que ouviu", "\"Percebi bem?\""] },
            { title: "Linguagem simples", bullets: ["\"Açúcar no sangue\", não \"glicose\"", "Frases curtas, uma ideia de cada vez", "Ofereça um intérprete"] },
            { title: "Explique de volta", bullets: ["Peça à pessoa para dizer o plano à maneira dela", "Se não estiver claro, melhore a sua explicação", "Verifica você, não a pessoa"] }
          ],
          tryIt: "Faça um jogo de papéis com um amigo ou familiar, ou escreva em papel. O seu vizinho inventado diz: \"Estou sempre a faltar às consultas na clínica porque trabalho cedo e o autocarro atrasa.\" Escreva uma frase que repete o que ouviu, um próximo passo em linguagem simples e uma pergunta de \"explique de volta\".",
          youCanNow: "ouvir com atenção, explicar com palavras simples e verificar se a pessoa entendeu com o \"explique de volta\".",
          quickCheck: [
            { objective: "O2", q: "Qual é uma pergunta de \"explique de volta\"?", options: ["\"Entendeu?\"", "\"Alguma pergunta? Não? Ótimo.\"", "\"Pode dizer-me com as suas palavras o que vai levar?\"", "\"Percebeu, não é?\""], answer: 2, why: "O \"explique de volta\" pede à pessoa para dizer o plano com as palavras dela." },
            { objective: "O2", q: "Qual é linguagem simples?", options: ["\"Açúcar no sangue\"", "\"Índice glicémico\"", "\"Hiperglicemia\"", "\"Tolerância à glicose\""], answer: 0, why: "Palavras comuns e curtas são as mais fáceis de entender." }
          ]
        },
        {
          title: "Perguntar sobre necessidades com respeito",
          objectives: ["O3"],
          minutes: 5,
          goal: "Perguntar a um vizinho inventado sobre as suas necessidades, com consentimento, usando uma lista curta.",
          text: [
            "A saúde depende de mais do que as idas ao médico. A comida, um lugar seguro para viver, dinheiro para as contas da casa (água, luz, gás), o transporte e a segurança afetam a saúde. Muitas vezes chamam-se necessidades sociais.",
            "Muitas clínicas e programas usam um formulário curto de rastreio. O seu empregador vai dar-lhe o dele. Os temas habituais são: comida, casa, contas da casa, transporte e segurança pessoal.",
            "Peça sempre licença primeiro e explique porque pergunta: \"Faço a todas as pessoas algumas perguntas sobre coisas como comida e casa, para poder partilhar ajuda que possa servir. Pode saltar qualquer pergunta.\" Deixe a pessoa escolher o que partilha.",
            "Escreva só o que precisa, no formulário do programa, não no seu próprio telefone. Se alguém disser que não está seguro em casa, ou falar em fazer mal a si mesmo, siga logo os passos de segurança do seu programa (veja a Lição 6)."
          ],
          steps: ["Peça licença e diga porque pergunta.", "Diga que a pessoa pode saltar qualquer pergunta.", "Pergunte sobre comida, casa, contas da casa, transporte e segurança.", "Pergunte que necessidade é mais importante para ela agora.", "Escreva só o que é preciso, no formulário do programa."],
          words: [["Necessidades sociais", "necessidades do dia a dia, como comida, casa e transporte, que afetam a saúde."], ["Rastreio", "um conjunto curto de perguntas para saber que ajuda alguém pode precisar."], ["Consentimento", "a autorização que uma pessoa dá depois de entender o que você está a pedir."]],
          slides: [
            { title: "A saúde é mais do que a clínica", bullets: ["Comida e casa", "Contas da casa e transporte", "Segurança"] },
            { title: "Peça licença primeiro", bullets: ["Diga porque pergunta", "A pessoa pode saltar qualquer pergunta", "A pessoa escolhe o que partilha"] },
            { title: "Comece pelo mais importante", bullets: ["\"Qual destas é mais importante para si agora?\"", "Escreva só o que é preciso", "Use o formulário do programa, não o seu telefone"] }
          ],
          tryIt: "Escreva um guião curto de rastreio (só para praticar): a sua frase a pedir licença, uma pergunta simples sobre cada tema (comida, casa, contas da casa, transporte e segurança) e uma pergunta final sobre o que é mais importante. Leia-o em voz alta para ver se soa gentil e claro.",
          youCanNow: "perguntar sobre as necessidades de alguém com consentimento e respeito, usando uma lista curta.",
          quickCheck: [
            { objective: "O3", q: "O que faz antes de perguntar sobre as necessidades de alguém?", options: ["Começa pela pergunta mais difícil", "Pede licença e diz porque pergunta", "Pede o número da Segurança Social", "Escreve as respostas no seu próprio telefone"], answer: 1, why: "O consentimento e uma razão clara criam confiança antes do rastreio." },
            { objective: "O3", q: "Qual é uma necessidade social?", options: ["O programa de televisão favorito", "A marca dos sapatos", "Chegar à clínica quando o autocarro não passa", "A cor favorita"], answer: 2, why: "O transporte é uma necessidade social que afeta a saúde." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O papel do ACS e a ligação com as pessoas",
        questions: [
          { objective: "O1", q: "Qual é outro nome para um agente comunitário de saúde?", options: ["Promotor ou promotora", "Cirurgião", "Farmacêutico", "Juiz"], answer: 0, why: "Promotor ou promotora é um nome comum para os ACS, sobretudo em comunidades que falam espanhol." },
          { objective: "O1", q: "Onde verifica se o seu estado certifica os ACS?", options: ["Num grupo de redes sociais", "No palpite de um amigo", "Na página do departamento de saúde ou da ordem profissional do seu estado", "Num anúncio na internet"], answer: 2, why: "A página oficial de cada estado explica as suas regras." },
          { objective: "O2", q: "O que é a escuta ativa?", options: ["Falar mais do que a outra pessoa", "Preparar a sua resposta enquanto a pessoa fala", "Dar toda a atenção e repetir o que ouviu", "Olhar para o telefone enquanto ouve"], answer: 2, why: "Escuta ativa quer dizer toda a atenção e repetir o que ouviu." },
          { objective: "O2", q: "Um vizinho não consegue explicar-lhe o plano de volta. O que quer dizer isso?", options: ["Ele não se está a esforçar", "A sua explicação precisa de ser mais clara", "Ele não deve receber ajuda", "Nada; continue"], answer: 1, why: "O \"explique de volta\" verifica a sua explicação; explique outra vez com palavras mais simples." },
          { objective: "O3", q: "Uma pessoa não quer responder a uma pergunta sobre a casa. Você:", options: ["Insiste para ela responder", "Escreve um palpite", "Diz-lhe que não pode ter ajuda", "Respeita e passa à frente"], answer: 3, why: "As pessoas podem saltar qualquer pergunta; o consentimento é livre." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ligar as pessoas à ajuda",
      lessons: [
        {
          title: "Encontrar e verificar recursos locais",
          objectives: ["O4"],
          minutes: 6,
          goal: "Encontrar um recurso local para uma necessidade e verificá-lo na sua página oficial.",
          text: [
            "A lista de recursos de um ACS só é tão boa como a última vez que foi verificada. Os programas mudam de lugar, mudam de horário e ficam sem dinheiro. Verifique sempre um recurso na sua própria página oficial ou por telefone antes de encaminhar alguém.",
            "Bons lugares para começar: ligue para o 211, um serviço gratuito e confidencial que liga as pessoas a ajuda local. A página de apoios do USA.gov ajuda a encontrar programas do governo para comida, casa, cuidados de saúde e contas da casa. O Find a Health Center da HRSA mostra os centros de saúde comunitários. O HealthCare.gov explica a cobertura de saúde e como se candidatar.",
            "Para cada recurso, anote: o nome, o que oferece, quem o pode usar, a morada, o telefone, o horário, como se candidatar, o que levar, as línguas em que atende e a data em que verificou.",
            "Se um site não for o oficial, encontre a página oficial antes de confiar. Muitos sites falsos cobram taxas por formulários que são gratuitos."
          ],
          steps: ["Diga qual é a necessidade, por exemplo comida ou uma clínica.", "Pesquise no 211, no USA.gov, no Find a Health Center da HRSA ou no site do próprio serviço.", "Abra a página oficial e verifique a morada, o telefone, o horário e como se candidatar.", "Anote tudo com a data em que verificou."],
          words: [["Recurso", "um programa ou serviço que ajuda numa necessidade, como um banco alimentar ou uma clínica."], ["211", "um serviço telefónico gratuito e confidencial que liga as pessoas a ajuda local."], ["Centro de saúde comunitário", "uma clínica que atende as pessoas, tenham ou não seguro de saúde."], ["Elegibilidade", "as regras sobre quem pode usar um programa."]],
          slides: [
            { title: "Verifique antes de encaminhar", bullets: ["Os programas mudam de lugar e de horário", "Veja a página oficial ou ligue", "Anote a data em que verificou"] },
            { title: "Onde começar", bullets: ["Ligue para o 211", "Página de apoios do USA.gov", "Find a Health Center da HRSA", "HealthCare.gov para a cobertura de saúde"] },
            { title: "Anote", bullets: ["Nome, o que oferece, quem o pode usar", "Morada, telefone, horário", "Como se candidatar, o que levar, línguas"] },
            { title: "Cuidado com sites falsos", bullets: ["Encontre primeiro a página oficial", "Muitos formulários são gratuitos; não pague a desconhecidos"] }
          ],
          sources: [
            { name: "211: Encontre o seu 211 local", url: "https://www.211.org/" },
            { name: "USA.gov: Apoios do governo", url: "https://www.usa.gov/benefits" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" },
            { name: "HealthCare.gov", url: "https://www.healthcare.gov/" }
          ],
          tryIt: "Escolha duas necessidades: comida e uma clínica de baixo custo. Encontre um recurso real para cada uma perto de você, verifique-o na sua página oficial e escreva o nome, a morada, o telefone, o horário, como se candidatar e a data de hoje.",
          youCanNow: "encontrar um recurso local e verificá-lo na sua página oficial antes de o partilhar.",
          quickCheck: [
            { objective: "O4", q: "Antes de encaminhar alguém para um banco alimentar, o que faz?", options: ["Verifica o horário e a morada na página oficial ou por telefone", "Confia numa lista de há três anos", "Adivinha o horário", "Manda a pessoa sem verificar"], answer: 0, why: "Os recursos mudam, por isso veja primeiro a página oficial ou ligue." },
            { objective: "O4", q: "Que serviço liga as pessoas a ajuda local por telefone?", options: ["411", "211", "311, só numa cidade", "Uma linha qualquer de um anúncio"], answer: 1, why: "O 211 é um serviço gratuito e confidencial que liga as pessoas a ajuda local." }
          ]
        },
        {
          title: "Fazer um encaminhamento e acompanhar",
          objectives: ["O5", "O4"],
          minutes: 5,
          goal: "Planear um encaminhamento acompanhado, com consentimento e uma data de acompanhamento.",
          text: [
            "Um encaminhamento é ligar uma pessoa a um serviço. Um encaminhamento \"acompanhado\" (em inglês, warm referral) quer dizer que você ajuda a fazer a ligação, por exemplo ligando para a clínica juntos, em vez de só dar um número de telefone.",
            "Pergunte antes de partilhar qualquer coisa sobre a pessoa: \"Posso dizer à clínica que precisa de uma consulta ao fim da tarde?\" Partilhe só o que é preciso e siga o formulário de consentimento do seu programa.",
            "Ajude a tirar os obstáculos. A pessoa tem boleia, alguém para ficar com as crianças, os papéis de que precisa, um telefone que funciona? Escreva o que ela vai levar e quando vai.",
            "Acompanhe. Marque uma data para saber como correu: \"Ligo-lhe na sexta-feira para saber como correu.\" Se o serviço não resultou, encontre outro. Escreva o resultado no registo do programa."
          ],
          steps: ["Combine com a pessoa a necessidade e o serviço.", "Tenha o consentimento antes de partilhar qualquer informação.", "Faça uma ligação acompanhada, como uma chamada juntos.", "Planeie os obstáculos: boleia, quem fica com as crianças, papéis.", "Marque e cumpra uma data de acompanhamento, e registe o resultado."],
          words: [["Encaminhamento", "ligar uma pessoa a um serviço que a pode ajudar."], ["Encaminhamento acompanhado", "ajudar a pessoa a ligar-se diretamente, como ligar juntos, e não só dar um número."], ["Obstáculo", "algo que torna difícil ter ajuda, como não ter boleia ou não ter quem fique com as crianças."], ["Acompanhamento", "voltar a contactar mais tarde para saber se a ajuda resultou."]],
          slides: [
            { title: "Encaminhamento acompanhado", bullets: ["Ajude a fazer a ligação", "Liguem juntos quando puder", "Não só um número de telefone"] },
            { title: "Primeiro o consentimento", bullets: ["Pergunte antes de partilhar qualquer coisa", "Partilhe só o que é preciso", "Use o formulário de consentimento do programa"] },
            { title: "Tire os obstáculos", bullets: ["Boleia e quem fica com as crianças", "Papéis para levar", "Um telefone que funciona"] },
            { title: "Acompanhe", bullets: ["Marque uma data", "Resultou? Se não, tente outro", "Registe o resultado"] }
          ],
          tryIt: "Só para praticar: a sua vizinha inventada, a Sra. Carter, precisa de comida para os dois filhos e não tem carro. Usando um recurso de comida que verificou na Lição 4, escreva um plano de encaminhamento acompanhado: o que vai dizer, a pergunta de consentimento, um obstáculo e como vai ajudar com ele, e uma data de acompanhamento.",
          youCanNow: "planear um encaminhamento acompanhado com consentimento, ajudar com os obstáculos e marcar uma data de acompanhamento.",
          quickCheck: [
            { objective: "O5", q: "O que torna um encaminhamento \"acompanhado\"?", options: ["Dar só um número de telefone", "Dizer à pessoa para pesquisar na internet", "Ajudar a pessoa a ligar-se, como ligar juntos", "Enviar-lhe um folheto"], answer: 2, why: "Um encaminhamento acompanhado ajuda a pessoa a ligar-se diretamente." },
            { objective: "O5", q: "Quer contar a uma clínica a situação de um vizinho. Primeiro você:", options: ["Partilha tudo o que sabe", "Pede o consentimento do vizinho", "Publica num grupo de conversa", "Conta à família do vizinho"], answer: 1, why: "O consentimento vem antes de partilhar qualquer informação." }
          ]
        },
        {
          title: "Privacidade, limites, passos em crise e o seu guia de recursos",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Proteger a privacidade e os limites, seguir os passos em caso de crise e construir o seu guia de recursos.",
          text: [
            "As pessoas confiam-lhe coisas privadas. Quando você trabalha para uma clínica, um hospital ou um plano de saúde, a informação de saúde é protegida por uma lei federal dos EUA chamada HIPAA, e todos os bons programas mantêm a informação das pessoas privada. Não fale das pessoas que serve com amigos, não publique nada sobre elas e não guarde notas no seu próprio telefone.",
            "Os limites mantêm o trabalho saudável. Você é um guia, não um médico, um advogado nem um banco. Não dê conselhos médicos nem jurídicos, não empreste dinheiro e não prometa o que não pode cumprir. As perguntas de saúde vão para os profissionais de saúde.",
            "Conheça os seus passos em caso de crise. Se alguém está em perigo agora, ligue para o 911. Se alguém fala de suicídio ou está numa crise emocional, pode ligar ou enviar SMS para o 988, a Suicide and Crisis Lifeline (linha de apoio ao suicídio e a crises), ou conversar pela internet. Diga logo ao seu supervisor e siga o plano de segurança do seu programa.",
            "Cuide também de si. Ajudar pessoas com vidas difíceis é um trabalho pesado. Fale com o seu supervisor, faça pausas e use o seu próprio apoio. Agora está pronto para construir o seu guia de recursos e o seu plano de encaminhamento."
          ],
          steps: ["Mantenha a informação privada: nada de conversas, publicações ou notas no telefone pessoal.", "Fique no seu papel: nada de conselhos médicos ou jurídicos, nada de emprestar dinheiro.", "Crise: 911 para perigo agora; 988 para suicídio ou crise emocional; diga ao seu supervisor.", "Construa o seu guia de recursos com pelo menos cinco recursos verificados e um plano de encaminhamento."],
          words: [["HIPAA", "uma lei federal dos EUA que protege a privacidade da informação de saúde guardada por prestadores de cuidados de saúde e planos de saúde."], ["Limite", "uma fronteira clara sobre o que você faz numa relação de trabalho."], ["988", "a Suicide and Crisis Lifeline (linha de apoio ao suicídio e a crises): ligar, enviar SMS ou conversar pela internet."], ["Autocuidado", "o que você faz para se manter saudável e capaz de continuar a ajudar."]],
          slides: [
            { title: "Privacidade", bullets: ["Não fale nem publique sobre as pessoas que serve", "Nada de notas no seu próprio telefone", "A HIPAA protege a informação de saúde"] },
            { title: "Limites", bullets: ["Você é um guia, não um médico nem um advogado", "Não empreste dinheiro nem faça grandes promessas", "As perguntas de saúde vão para os profissionais de saúde"] },
            { title: "Passos em caso de crise", bullets: ["Perigo agora: 911", "Suicídio ou crise emocional: ligue ou envie SMS para o 988", "Diga logo ao seu supervisor"] },
            { title: "O seu guia de recursos", bullets: ["5 ou mais recursos verificados", "Morada, telefone, horário, como se candidatar, data da verificação", "Mais um plano de encaminhamento para um vizinho inventado"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "MedlinePlus: Direitos do doente", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Tarefa final: faça o seu guia de recursos da comunidade, de uma página, com pelo menos cinco recursos (comida, casa, cuidados de saúde, cobertura de saúde e mais um), cada um verificado na sua página oficial, com morada, telefone, horário, como se candidatar e a data da verificação. Depois escreva um plano de encaminhamento para um vizinho inventado: a necessidade dele com as palavras dele, o recurso, o que vai dizer, a pergunta de consentimento, um obstáculo e uma data de acompanhamento.",
          youCanNow: "construir um guia de recursos verificados e planear um encaminhamento que protege a privacidade, os limites e a segurança.",
          quickCheck: [
            { objective: "O5", q: "Uma pessoa que você serve diz que está a pensar em pôr fim à vida. O que faz?", options: ["Promete guardar segredo", "Muda de assunto", "Diz-lhe para pensar melhor amanhã", "Liga-a ao 988 (ou ao 911 se estiver em perigo agora) e diz ao seu supervisor"], answer: 3, why: "Siga os passos em caso de crise: 988 ou 911, e diga logo ao seu supervisor." },
            { objective: "O5", q: "Uma pessoa pede-lhe para lhe emprestar $100. O que faz?", options: ["Diz que não com gentileza e ajuda a encontrar um recurso para a necessidade", "Empresta sem dizer a ninguém", "Dá-lhe o seu cartão", "Ignora a pessoa"], answer: 0, why: "Emprestar dinheiro passa um limite; em vez disso, ajude a pessoa a ligar-se a um recurso." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ligar as pessoas à ajuda",
        questions: [
          { objective: "O4", q: "Qual é a melhor forma de verificar o horário de uma clínica?", options: ["Um folheto de há três anos", "Um palpite", "A página oficial da clínica ou uma chamada", "Um comentário qualquer na internet"], answer: 2, why: "A página oficial ou uma chamada dá a informação atual." },
          { objective: "O4", q: "Que ferramenta encontra centros de saúde comunitários?", options: ["O Find a Health Center da HRSA", "Uma aplicação de filmes", "Um site de compras", "Uma aplicação do tempo"], answer: 0, why: "O Find a Health Center da HRSA lista os centros de saúde comunitários." },
          { objective: "O5", q: "Quando deve acompanhar depois de um encaminhamento?", options: ["Nunca", "Só se a pessoa lhe ligar", "Numa data que marcaram juntos", "Passado um ano"], answer: 2, why: "Marcar uma data de acompanhamento garante que a ajuda resultou." },
          { objective: "O5", q: "Onde deve guardar as notas sobre as pessoas que serve?", options: ["No seu telefone pessoal", "Num grupo de conversa", "Nas redes sociais", "No formulário ou no registo do programa"], answer: 3, why: "As notas ficam no registo do programa para se manterem privadas." },
          { objective: "O5", q: "Alguém lhe pede um conselho médico sobre o seu medicamento. Você:", options: ["Diz o que você tomaria", "Ajuda a pessoa a perguntar ao profissional de saúde ou ao farmacêutico dela", "Pesquisa e diz-lhe o que fazer", "Diz que os medicamentos não importam"], answer: 1, why: "Os ACS ficam no seu papel; as perguntas de saúde vão para os profissionais de saúde." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Bases do Agente Comunitário de Saúde",
    questions: [
      { objective: "O1", q: "A melhor descrição de um agente comunitário de saúde é:", options: ["Um membro de confiança da comunidade que liga as pessoas aos cuidados e serviços", "Um médico", "Um polícia", "Alguém que prepara declarações de impostos"], answer: 0, why: "Os ACS são trabalhadores de confiança da linha da frente que ligam as pessoas aos cuidados." },
      { objective: "O1", q: "Qual é um dos papéis do ACS listados pelo National C3 Council?", options: ["Fazer cirurgias", "Fazer trabalho de proximidade", "Receitar medicamentos", "Gerir um banco"], answer: 1, why: "O trabalho de proximidade é um dos dez papéis do ACS." },
      { objective: "O1", q: "O que faz este curso?", options: ["Dá-lhe o certificado de ACS", "Dá-lhe uma licença do estado", "Substitui a formação do seu empregador", "Prepara você para a formação de ACS e para um primeiro trabalho"], answer: 3, why: "O curso prepara você; alguns estados certificam os ACS à parte." },
      { objective: "O1", q: "Porque são contratados muitos ACS?", options: ["Partilham a língua, a cultura ou a experiência de vida da comunidade", "Têm cursos de medicina", "Nunca falam com as pessoas", "Só trabalham pela internet"], answer: 0, why: "A experiência partilhada cria confiança com as pessoas que os ACS servem." },
      { objective: "O2", q: "Qual é uma boa frase para repetir o que ouviu?", options: ["\"Devia ter planeado melhor.\"", "\"Então o autocarro atrasa e isso faz faltar às consultas. É isso?\"", "\"Isso não é problema meu.\"", "\"Toda a gente tem esse problema.\""], answer: 1, why: "Repetir o que ouviu mostra que escutou e deixa a pessoa corrigir você." },
      { objective: "O2", q: "O \"explique de volta\" verifica:", options: ["A inteligência da pessoa", "A rapidez com que fala", "Se você explicou com clareza", "A nota dela num teste de leitura"], answer: 2, why: "O \"explique de volta\" verifica a sua explicação, não a pessoa." },
      { objective: "O2", q: "Um vizinho prefere falar espanhol e você não fala. Você:", options: ["Fala mais alto em inglês", "Cancela a visita", "Usa o filho dele para interpretar detalhes médicos", "Oferece um intérprete qualificado"], answer: 3, why: "Oferecer um intérprete deixa a pessoa entender e ser entendida." },
      { objective: "O3", q: "Que temas cobre normalmente um rastreio de necessidades sociais?", options: ["Comida, casa, contas da casa, transporte e segurança", "Comidas e músicas favoritas", "Desporto e passatempos", "Números de sapatos e tamanhos de roupa"], answer: 0, why: "Estas necessidades sociais afetam a saúde." },
      { objective: "O3", q: "O que deve dizer antes de um rastreio?", options: ["\"Tem de responder a tudo.\"", "Nada; começa logo", "\"Faço a todas as pessoas algumas perguntas para poder partilhar ajuda. Pode saltar qualquer uma.\"", "\"Isto é um teste.\""], answer: 2, why: "Explicar porquê e dizer que pode saltar perguntas cria confiança e respeita o consentimento." },
      { objective: "O3", q: "Depois das perguntas do rastreio, uma boa pergunta a seguir é:", options: ["\"Qual destas é mais importante para si agora?\"", "\"Porque não resolveu isto antes?\"", "\"Qual é o PIN do seu banco?\"", "\"A quem mais posso contar?\""], answer: 0, why: "Começar pelo que é mais importante para a pessoa respeita as escolhas dela." },
      { objective: "O4", q: "O 211 é:", options: ["Um número de emergência só para incêndios", "Um serviço gratuito e confidencial que liga as pessoas a ajuda local", "Uma linha paga", "Uma aplicação de redes sociais"], answer: 1, why: "O 211 liga as pessoas a ajuda local." },
      { objective: "O4", q: "A página de apoios do USA.gov ajuda as pessoas a:", options: ["Comprar bilhetes para concertos", "Pagar multas de estacionamento", "Encontrar programas do governo para comida, casa, cuidados de saúde e contas", "Reservar voos"], answer: 2, why: "Ajuda a encontrar apoios do governo e a saber como se candidatar." },
      { objective: "O4", q: "O que deve ter a ficha de um recurso?", options: ["Só o nome", "Um palpite sobre o horário", "O nome de um amigo que lá foi", "Morada, telefone, horário, como se candidatar e a data da verificação"], answer: 3, why: "Dados completos e verificados tornam um recurso útil." },
      { objective: "O4", q: "Um site cobra uma taxa para \"ajudar\" com um formulário do governo. Você:", options: ["Encontra primeiro a página oficial; muitos formulários são gratuitos", "Paga depressa", "Partilha o site com toda a gente", "Dá-lhe os dados da pessoa que serve"], answer: 0, why: "Os sites falsos muitas vezes cobram por formulários gratuitos; encontre a página oficial." },
      { objective: "O5", q: "Um encaminhamento acompanhado quer dizer:", options: ["Entregar um cartão de visita", "Ajudar a pessoa a ligar-se diretamente, como ligar juntos", "Dizer-lhe para pesquisar na internet", "Enviar um folheto pelo correio"], answer: 1, why: "Um encaminhamento acompanhado ajuda a fazer a ligação." },
      { objective: "O5", q: "Antes de partilhar informação com uma clínica, você precisa de:", options: ["O consentimento da pessoa", "A opinião do seu amigo", "Nada", "Uma publicação nas redes sociais"], answer: 0, why: "O consentimento vem primeiro, e você partilha só o que é preciso." },
      { objective: "O5", q: "Qual é um obstáculo para ter ajuda?", options: ["Um telefone que funciona", "Uma boleia para a consulta", "Não ter quem fique com as crianças durante a consulta", "Os papéis certos"], answer: 2, why: "Não ter quem fique com as crianças pode impedir alguém de chegar a um serviço." },
      { objective: "O5", q: "Alguém está numa crise emocional e quer falar com alguém agora. Pode:", options: ["Esperar pela visita do próximo mês", "Ligar ou enviar SMS para o 988", "Publicar na internet", "Ligar para o 411"], answer: 1, why: "O 988 é a Suicide and Crisis Lifeline: ligar, enviar SMS ou conversar pela internet." },
      { objective: "O5", q: "Um encaminhamento não resultou. Você:", options: ["Desiste", "Culpa a pessoa", "Deixa de acompanhar", "Encontra outro recurso e marca um novo acompanhamento"], answer: 3, why: "Acompanhar quer dizer tentar outra opção quando a primeira não resultou." },
      { objective: "O5", q: "Qual é um limite saudável para um ACS?", options: ["Dar conselhos médicos", "Emprestar dinheiro", "Prometer uma casa até sexta-feira", "Mandar as perguntas de saúde para o profissional de saúde da pessoa"], answer: 3, why: "Os ACS ficam no seu papel e ligam as pessoas aos profissionais de saúde para as perguntas de saúde." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 5, 7, 8, 10, 12, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Recursos verificados", objective: "O4", notYet: "Menos de cinco recursos, ou dados não verificados nas páginas oficiais.", meets: "Pelo menos cinco recursos (comida, casa, cuidados de saúde, cobertura e mais um), cada um com morada, telefone, horário, como se candidatar e a data da verificação.", exceeds: "Também indica quem pode usar cada um, o que levar e as línguas em que atende." },
      { name: "A necessidade com as palavras da pessoa", objective: "O3", notYet: "A necessidade é um palpite ou usa palavras técnicas.", meets: "A necessidade do vizinho inventado está escrita com as palavras dele, com o consentimento anotado.", exceeds: "Mostra que necessidade é mais importante para ele e porquê." },
      { name: "Fala simples e respeitosa", objective: "O2", notYet: "O que vai dizer usa palavras técnicas ou julga a pessoa.", meets: "Palavras simples, uma frase que repete o que ouviu e uma pergunta de \"explique de volta\".", exceeds: "Oferece um intérprete ou outra forma de comunicar quando é preciso." },
      { name: "Encaminhamento acompanhado e acompanhamento", objective: "O5", notYet: "Só um número de telefone, ou nenhuma data de acompanhamento.", meets: "Uma ligação acompanhada, um obstáculo com um plano e uma data de acompanhamento.", exceeds: "Inclui um recurso de reserva se o primeiro não resultar." },
      { name: "Privacidade e papel", objective: "O5", notYet: "Usa dados de uma pessoa verdadeira ou dá conselhos médicos.", meets: "Pessoa inventada, consentimento antes de partilhar, nenhum conselho médico nem jurídico.", exceeds: "Lista no guia os passos em caso de crise (911, 988, dizer ao supervisor)." },
      { name: "O caminho no seu estado", objective: "O1", notYet: "Nenhuma informação sobre como ser ACS no seu estado.", meets: "Indica se o seu estado certifica os ACS, com a página oficial.", exceeds: "Acrescenta um empregador ou um programa de formação local para contactar." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que se candidatam a um trabalho ou a um programa de formação de ACS em 60 dias",
      "Alunos que obtêm a certificação de ACS do estado, onde o seu estado a oferece",
      "Alunos contratados como ACS, agentes de proximidade ou navegadores em 6 meses (inquérito de seguimento)",
      "As organizações parceiras dizem receber encaminhamentos que chegam ao serviço e são acompanhados"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para verificar os recursos nas páginas oficiais",
      "Papel e caneta para o guião de rastreio, o guia de recursos e o plano de encaminhamento",
      "Um colega para o jogo de papéis (opcional; escrever também funciona)",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Antes do curso, encontre a página de certificação de ACS do seu estado (ou anote que o seu estado não tem) e partilhe-a.",
      "Faça as lições de escuta e de rastreio como jogos de papéis em pares, só com pessoas inventadas.",
      "Se puder, convide um ACS ou uma promotora no ativo para contar como é um dia de trabalho.",
      "Peça aos alunos para juntarem os recursos verificados num guia do grupo e anotarem a data em que cada um foi verificado.",
      "Reveja os passos em caso de crise (911, 988, dizer ao supervisor) e o plano de segurança do seu programa antes dos jogos de papéis sobre temas difíceis."
    ]
  }
};
