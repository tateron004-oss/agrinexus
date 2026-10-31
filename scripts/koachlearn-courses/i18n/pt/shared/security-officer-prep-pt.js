"use strict";

// Koach Learn course (Portuguese translation of shared/security-officer-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US state guard licensing (California BSIS as the checked example; New York, Texas and Florida agencies named).

const BSIS_GUARD = { name: "California BSIS: Security guards (applications, training syllabus, Power to Arrest manual)", url: "https://www.bsis.ca.gov/industries/guard.shtml" };
const BSIS_FACT = { name: "California BSIS: Security Guard Registration fact sheet", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.pdf" };
const BSIS_TRAIN = { name: "California BSIS: Security guard training syllabus (courses and hours)", url: "https://www.bsis.ca.gov/industries/g_train.shtml" };
const BSIS_POA = { name: "California BSIS: Power to Arrest training manual", url: "https://www.bsis.ca.gov/forms_pubs/poa.pdf" };
const BSIS_VERIFY = { name: "California Department of Consumer Affairs: Verify a license", url: "https://search.dca.ca.gov/" };
const NY_DOS = { name: "New York Department of State: Security guard licensing", url: "https://dos.ny.gov/security-guard" };
const TX_DPS = { name: "Texas Department of Public Safety: Private Security Program", url: "https://www.dps.texas.gov/section/private-security" };
const FL_FDACS = { name: "Florida Department of Agriculture and Consumer Services: Division of Licensing (Class D security officer)", url: "https://www.fdacs.gov/Business-Services/Private-Investigative-Recovery-and-Security-Licensing" };
const BLS_GUARDS = { name: "U.S. Bureau of Labor Statistics: Security guards and gambling surveillance officers (how to become one)", url: "https://www.bls.gov/ooh/protective-service/security-guards.htm" };

module.exports = {
  id: "security-officer-prep-pt",
  lang: "pt",
  translationOf: "security-officer-prep",
  category: "Workforce Development",
  name: "Preparação para Agente de Segurança (Licença de Guarda)",
  skills: "Encontrar as regras da licença de guarda do seu estado, Patrulhar e controlar acessos segundo as ordens do posto, Observar e comunicar dentro da sua autoridade, Acalmar conflitos e responder a emergências, Escrever um relatório de incidente claro, Planear a sua licença e a procura de emprego",
  outcome: "encontrar os requisitos da licença de guarda do seu estado e escrever os passos para a obter, seguir as ordens do posto na patrulha e numa entrada, escolher a ação de observar e comunicar que fica dentro da autoridade de um guarda, escrever um relatório de incidente claro e baseado em factos e fazer um plano com datas para obter a licença e ser contratado.",
  about: [
    "Os agentes de segurança protegem pessoas e bens em escritórios, lojas, hospitais, escolas, armazéns, eventos e prédios de apartamentos. Muitos empregos não pedem curso superior, e os empregadores contratam durante todo o ano. Este curso é para quem procura emprego, pessoas que voltam para casa depois da prisão, antigos militares e jovens adultos que querem começar neste trabalho.",
    "Você vai aprender o que um agente de segurança faz e não faz, como funciona a licença de guarda do estado (\"guard card\"), como patrulhar e controlar uma entrada segundo as ordens do posto, como manter a calma e a segurança num conflito ou numa emergência e como escrever um relatório de incidente em que um supervisor, um advogado ou um polícia possa confiar.",
    "Importante: este curso prepara você, mas não lhe dá uma licença. Na maioria dos estados dos Estados Unidos, uma agência do estado dá a licença aos guardas, e você tem de ter pelo menos 18 anos, passar numa verificação de antecedentes e terminar a formação exigida pelo estado numa escola ou num empregador aprovado. As regras mudam de estado para estado, por isso você vai procurar a página oficial do seu estado. A Califórnia é o nosso exemplo porque verificámos as suas regras na página oficial.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" em papel ou numa aplicação de documentos gratuita. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um dossiê de preparação para a licença de guarda: os requisitos do seu estado escritos como passos, com a página oficial; uma lista de verificação de patrulha e de acesso para um posto de prática; um relatório de incidente de prática completo; um cartão de bolso com os seus passos de observar e comunicar e de emergência; e um plano com datas para terminar a formação, pedir a licença e ser contratado, com uma linha honesta para o currículo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos com 18 anos ou mais que procuram empregos de agente de segurança sem arma: pessoas à procura de emprego, pessoas que voltam para casa depois da prisão, antigos militares e jovens adultos. Alguns têm experiência em polícia militar, em serviços prisionais ou na prevenção de perdas em lojas; a maioria é nova neste trabalho.",
    startingPoint: "Sabem ler um formulário curto, seguir instruções e usar um telefone. Poucos sabem como funciona a licença de guarda no seu estado, quais são os limites legais de um guarda ou como escrever um relatório baseado em factos. Alguns imaginam o trabalho como trabalho de polícia.",
    gap: "A segurança é um setor que contrata muito e onde se entra depressa, mas há pessoas que perdem o emprego ou se magoam quando vão além da sua autoridade, usam força que não deviam ou escrevem relatórios vagos. Os alunos precisam de uma ideia certa dos passos da licença no seu estado, dos hábitos de observar e comunicar que os empregadores querem e de saber escrever relatórios claros, para obterem a licença, serem contratados e ficarem no emprego.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; todos os termos explicados",
      "A licença é dada por cada estado: o curso ensina o padrão e como encontrar a página oficial, com a Califórnia como exemplo verificado",
      "Só trabalho sem arma: armas de fogo, bastões, gás lacrimogéneo e outras armas precisam de licenças próprias e de formação presencial",
      "Competências práticas como primeiros socorros, reanimação (CPR) e táticas de defesa aprendem-se presencialmente com um instrutor qualificado",
      "Verificação de antecedentes: aos alunos com registo criminal diz-se que respondam com honestidade e vejam as regras do seu estado ou um programa de apoio jurídico para a reintegração",
      "Aparelhos: um telefone ou um computador da biblioteca para as páginas do estado; papel para as listas e o relatório"
    ],
    prerequisites: "Nenhum. Os cursos \"Customer Service Excellence\" e \"Résumés, LinkedIn and Interviews\" são bons complementos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a página oficial de licenças do seu estado", action: "enumerar os passos para obter uma licença de guarda no seu estado", standard: "indicando a agência, a regra da idade, a verificação de antecedentes e a formação exigida antes e depois de ter a licença" },
    { id: "O2", condition: "Com um conjunto de ordens do posto", action: "fazer uma patrulha e um controlo de acesso", standard: "cobrindo todos os pontos das ordens do posto e registando o que viu e fez, com a hora" },
    { id: "O3", condition: "Perante um conflito, um roubo ou uma emergência", action: "escolher a ação de observar e comunicar que fica dentro da autoridade de um guarda", standard: "acertando pelo menos 4 de 5 situações, com as chamadas de emergência feitas primeiro" },
    { id: "O4", condition: "Depois de ver ou ler sobre um incidente", action: "escrever um relatório de incidente baseado em factos", standard: "respondendo a quem, o quê, quando, onde e como, com factos e não opiniões, por ordem de tempo" },
    { id: "O5", condition: "Usando as regras do seu estado e as ofertas de emprego da sua zona", action: "escrever um plano com datas para obter a licença e ser contratado", standard: "com datas para a formação, as impressões digitais, o pedido e as candidaturas a empregos, e uma linha honesta para o currículo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O trabalho, a licença de guarda e o posto",
      lessons: [
        {
          title: "O que um agente de segurança faz, e o que não faz",
          objectives: ["O3"],
          minutes: 5,
          goal: "Explicar as principais tarefas de um agente de segurança e os limites da autoridade de um guarda.",
          text: [
            "Um agente de segurança protege pessoas e bens. O trabalho do dia a dia é ser visto, observar, controlar quem entra, patrulhar, ajudar as pessoas, responder a alarmes e escrever o que acontece. Estar visível e atento evita muitos problemas antes de começarem.",
            "Um agente de segurança não é um polícia. Na maioria dos estados, um guarda tem o mesmo poder de prender que qualquer pessoa particular, e não mais. A maioria dos empregadores diz aos agentes para \"observar e comunicar\": observar com atenção, chamar a polícia ou um supervisor e escrever tudo, em vez de perseguir ou agarrar pessoas.",
            "As regras do seu empregador (as ordens do posto) podem ser mais rígidas do que a lei. Se as ordens do posto dizem \"não deter\", você não detém, mesmo que a lei o permitisse. Ir além das suas ordens pode fazer com que seja despedido, processado ou ferido.",
            "O atendimento ao público é metade do trabalho. Você dá indicações, ajuda visitantes perdidos e mantém a educação com pessoas zangadas. Os agentes calmos, pontuais e bons a escrever relatórios são os que são promovidos."
          ],
          words: [["Agente de segurança", "uma pessoa paga para proteger pessoas e bens; também se diz guarda ou segurança."], ["Observar e comunicar", "observar, pedir ajuda e escrever tudo, sem se envolver fisicamente."], ["Ordens do posto", "as instruções escritas para um local: o que verificar, quando e o que fazer."], ["Deter", "impedir alguém de sair. Os guardas só o devem fazer se a lei e as ordens do posto o permitirem."], ["Dissuadir", "impedir um problema antes de começar, por exemplo estando visível."]],
          slides: [
            { title: "O trabalho do dia a dia", bullets: ["Ser visto e manter-se atento", "Controlar quem entra e patrulhar", "Ajudar as pessoas e responder a alarmes", "Escrever o que acontece"] },
            { title: "Não é um polícia", bullets: ["Em geral, o mesmo poder de prender que qualquer pessoa particular", "A maioria dos empregadores: observar e comunicar", "Chame a polícia; não persiga nem agarre"] },
            { title: "As ordens do posto vêm primeiro", bullets: ["Podem ser mais rígidas do que a lei", "Se dizem não deter, você não detém"] },
            { title: "O que leva à promoção", bullets: ["Atendimento calmo e educado", "Pontual em todos os turnos", "Relatórios claros e honestos"] }
          ],
          sources: [BLS_GUARDS, BSIS_POA],
          tryIt: "Desenhe duas colunas num papel: \"Um guarda faz\" e \"Um guarda não faz\". Ponha cada uma destas coisas numa coluna: patrulhar o parque de estacionamento, revistar à força o saco de uma pessoa, dar indicações a um visitante, perseguir um ladrão de loja até à rua, ligar para o 911 por causa de uma briga, escrever um relatório, algemar alguém quando as ordens do posto dizem observar e comunicar. Depois escreva uma frase a explicar porquê.",
          youCanNow: "explicar o que um agente de segurança faz e os limites da autoridade de um guarda.",
          quickCheck: [
            { objective: "O3", q: "O que querem dizer a maioria dos empregadores com \"observar e comunicar\"?", options: ["Perseguir quem foge", "Observar, pedir ajuda e escrever tudo", "Revistar os sacos de todos", "Prender pessoas por qualquer regra quebrada"], answer: 1, why: "Observar e comunicar quer dizer observar, chamar a polícia ou um supervisor e registar, sem envolvimento físico." },
            { objective: "O3", q: "A lei pode permitir uma detenção por um particular, mas as suas ordens do posto dizem \"não deter\". O que faz?", options: ["Detém na mesma", "Pergunta ao suspeito o que prefere", "Segue as ordens do posto: observa, chama e comunica", "Abandona o seu posto"], answer: 2, why: "As ordens do posto podem ser mais rígidas do que a lei, e você tem de as seguir." }
          ]
        },
        {
          title: "Obter a licença de guarda: como funciona a licença do estado",
          objectives: ["O1"],
          minutes: 6,
          goal: "Encontrar a agência de licenças do seu estado e enumerar os passos para obter uma licença de guarda.",
          text: [
            "A maioria dos estados dá licença aos guardas através de uma agência do estado. O padrão comum: ter pelo menos 18 anos, passar numa verificação de antecedentes criminais com impressões digitais e terminar a formação numa escola ou num empregador aprovado. Muitos estados também exigem formação todos os anos. Os nomes mudam: \"guard card\", \"registration\" (registo) ou \"Class D license\".",
            "A Califórnia é o nosso exemplo verificado. A agência é o Bureau of Security and Investigative Services (BSIS). Você tem de ter pelo menos 18 anos, passar numa verificação de antecedentes do Departamento de Justiça e do FBI com impressões digitais Live Scan e terminar a formação Power to Arrest (poder de prender) antes de o registo ser emitido. Depois termina 32 horas de formação em competências de agente de segurança nos primeiros 6 meses, e 8 horas de formação contínua todos os anos. Faz o pedido pela internet no BreEZe ou pelo correio, e leva o cartão consigo quando está de serviço.",
            "Os outros estados têm a sua própria agência, por exemplo o New York Department of State, o Private Security Program do Texas Department of Public Safety e a Division of Licensing do Florida Department of Agriculture and Consumer Services. Procure a página oficial do seu estado para ver as horas de formação, as taxas e os formulários atuais. Não confie num anúncio de formação para saber as regras.",
            "Se tem registo criminal: cada estado decide que registos contam. Responda a todas as perguntas com honestidade, porque uma resposta falsa pode, por si só, levar a uma recusa. Um programa de reintegração ou um serviço de apoio jurídico pode ajudar você a ler as regras do seu estado."
          ],
          steps: ["Procure a agência de licenças de guardas de segurança do seu estado e abra a página oficial .gov.", "Escreva: idade mínima, verificação de antecedentes e passos das impressões digitais.", "Escreva a formação exigida antes de ter a licença e depois (primeiros meses, todos os anos).", "Encontre o pedido (pela internet ou em papel) e a página das taxas; não adivinhe a taxa.", "Anote como renovar e quanto tempo dura a licença."],
          words: [["Licença de guarda (guard card)", "o nome comum para a licença ou o registo de guarda de segurança de um estado."], ["BSIS", "o Bureau of Security and Investigative Services da Califórnia, que regista os guardas na Califórnia."], ["Live Scan", "recolha eletrónica de impressões digitais usada nas verificações de antecedentes na Califórnia e noutros estados."], ["Verificação de antecedentes", "uma pesquisa de registos criminais, muitas vezes pelo estado e pelo FBI, antes de a licença ser dada."], ["Formação contínua", "formação que tem de continuar a fazer depois de ter a licença, muitas vezes todos os anos."]],
          slides: [
            { title: "O padrão comum", bullets: ["Pelo menos 18 anos", "Verificação de antecedentes com impressões digitais", "Formação aprovada; muitos estados também todos os anos"] },
            { title: "Exemplo da Califórnia (BSIS)", bullets: ["Formação Power to Arrest antes de o cartão ser emitido", "32 horas de formação em competências nos primeiros 6 meses", "8 horas de formação contínua todos os anos"] },
            { title: "Outros estados", bullets: ["NY: Department of State", "TX: DPS Private Security Program", "FL: FDACS Division of Licensing (Class D)", "Veja a página oficial, não um anúncio"] },
            { title: "Se tem registo criminal", bullets: ["Cada estado decide que registos contam", "Responda a todas as perguntas com honestidade", "Peça ajuda a um programa de reintegração ou de apoio jurídico"] }
          ],
          sources: [BSIS_FACT, BSIS_TRAIN, NY_DOS, TX_DPS, FL_FDACS, BLS_GUARDS],
          tryIt: "Abra a página oficial de licenças do seu estado (ou a ficha informativa do BSIS da Califórnia, se estiver a praticar). Num papel, escreva por ordem os passos da licença de guarda do seu estado: agência, idade, verificação de antecedentes, formação antes do cartão, formação depois, como fazer o pedido e o endereço da página.",
          youCanNow: "encontrar a agência de licenças do seu estado e enumerar os passos para obter uma licença de guarda.",
          quickCheck: [
            { objective: "O1", q: "Na Califórnia, que formação tem de estar terminada antes de o registo de guarda ser emitido?", options: ["Formação em armas de fogo", "Formação Power to Arrest", "Formação com bastão", "Nenhuma formação"], answer: 1, why: "O BSIS diz que a formação Power to Arrest tem de estar terminada antes de o registo ser emitido." },
            { objective: "O1", q: "Um anúncio de formação diz que o seu estado só exige uma aula de 2 horas pela internet. O que faz?", options: ["Acredita no anúncio", "Pergunta a um amigo", "Paga e espera pelo melhor", "Verifica a página oficial da agência do estado"], answer: 3, why: "As regras mudam e são diferentes em cada estado; só a página oficial da agência é fiável." }
          ]
        },
        {
          title: "Ordens do posto, patrulha e controlo de acesso",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fazer uma patrulha e um controlo de entrada seguindo as ordens do posto escritas.",
          text: [
            "Cada local tem ordens do posto. Elas dizem o seu horário, onde patrulhar e com que frequência, que portas verificar, quem pode entrar, o que fazer num alarme e a quem ligar. Leia-as no início de cada turno e pergunte ao seu supervisor tudo o que não estiver claro.",
            "Na patrulha, mude os horários para que ninguém consiga adivinhar quando você passa. Use os seus sentidos: procure portas abertas, fechaduras partidas, fugas de água, fumo, saídas de emergência bloqueadas, luzes apagadas e pessoas onde não deviam estar. Escreva cada verificação no seu registo diário de atividades, com a hora.",
            "Controlo de acesso quer dizer que só entram as pessoas certas. Verifique crachás ou documentos como as ordens do posto dizem, registe a entrada e a saída dos visitantes, entregue passes de visitante e nunca deixe alguém passar atrás de si por uma porta trancada (tailgating). Seja educado e firme: \"Desculpe, preciso de ver o seu crachá.\"",
            "Use o rádio ou o telefone como o local manda: mensagens curtas e claras, com a sua localização. Na troca de turno, diga ao agente seguinte o que está aberto e entregue-lhe o registo."
          ],
          steps: ["Leia as ordens do posto e o registo do turno anterior.", "Verifique o rádio ou o telefone e as chaves.", "Patrulhe todos os pontos das ordens do posto, a horas diferentes.", "Na entrada: verifique o documento ou o crachá, registe os visitantes, impeça o tailgating.", "Registe cada verificação e tudo o que for fora do normal, com a hora.", "Informe o agente seguinte na troca de turno."],
          words: [["Patrulha", "andar a pé ou de carro à volta de um local, num percurso, à procura de problemas."], ["Controlo de acesso", "garantir que só entram as pessoas e os veículos autorizados."], ["Tailgating", "quando alguém passa atrás de uma pessoa autorizada por uma porta trancada sem mostrar identificação."], ["Registo diário de atividades", "o registo escrito do agente com cada verificação e acontecimento do turno, com as horas."]],
          slides: [
            { title: "Início do turno", bullets: ["Ler as ordens do posto e o último registo", "Verificar rádio, telefone e chaves", "Perguntar o que não estiver claro"] },
            { title: "Na patrulha", bullets: ["Mudar os horários", "Portas, fechaduras, fugas, fumo, saídas de emergência, luzes", "Registar cada verificação com a hora"] },
            { title: "Na entrada", bullets: ["Verificar crachás ou documentos como as ordens dizem", "Registar a entrada e a saída dos visitantes", "Impedir o tailgating: educado e firme"] },
            { title: "Fim do turno", bullets: ["Informar o agente seguinte", "Entregar o registo"] }
          ],
          sources: [BSIS_TRAIN, BLS_GUARDS],
          tryIt: "Escolha um posto de prática: o seu prédio, uma biblioteca ou uma loja que conhece. Escreva cinco linhas de ordens do posto para ele (horário, pontos de patrulha, regra da entrada, a quem ligar). Depois escreva um registo diário de atividades de uma hora para esse posto, com pelo menos quatro entradas com hora, incluindo um problema que encontrou e o que fez.",
          youCanNow: "fazer uma patrulha e um controlo de entrada segundo as ordens do posto escritas e registá-los.",
          quickCheck: [
            { objective: "O2", q: "Porque deve mudar os horários das suas patrulhas?", options: ["Para que ninguém consiga adivinhar quando você passa", "Para acabar mais cedo", "Porque o rádio manda", "Para saltar algumas verificações"], answer: 0, why: "Patrulhas previsíveis são fáceis de evitar por quem quer fazer mal; horários diferentes evitam problemas." },
            { objective: "O2", q: "Uma pessoa sem crachá entra logo atrás de um funcionário. Como se chama isto?", options: ["Patrulhar", "Tailgating", "Observar", "Registar"], answer: 1, why: "Tailgating é passar atrás de alguém por uma porta controlada sem mostrar identificação." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O trabalho, a licença de guarda e o posto",
        questions: [
          { objective: "O3", q: "Na maioria dos estados, como é o poder de prender de um guarda de segurança comparado com o de uma pessoa particular?", options: ["Muito maior, como o de um polícia", "Nenhum, em todos os casos", "Só aos fins de semana", "Mais ou menos o mesmo que o de qualquer pessoa particular"], answer: 3, why: "Na maioria dos estados, um guarda tem o poder de prender de uma pessoa particular, e não mais." },
          { objective: "O1", q: "O que faz parte do padrão comum da licença de guarda na maioria dos estados?", options: ["Um curso superior", "Ter carro", "Uma verificação de antecedentes com impressões digitais", "Uma licença de arma de fogo"], answer: 2, why: "A maioria dos estados exige uma verificação de antecedentes com impressões digitais, 18 anos e formação aprovada." },
          { objective: "O1", q: "Na Califórnia, quantas horas de formação contínua um guarda tem de fazer por ano?", options: ["8 horas", "Nenhuma formação", "40 horas", "1 hora"], answer: 0, why: "O BSIS exige 8 horas de formação contínua todos os anos." },
          { objective: "O2", q: "Onde encontra que portas verificar e a quem ligar no seu local?", options: ["Num anúncio de formação", "Nas ordens do posto", "Com um visitante", "Nas redes sociais"], answer: 1, why: "As ordens do posto são as instruções escritas para esse local." },
          { objective: "O2", q: "Na patrulha, encontra uma saída de emergência bloqueada por caixas. O que faz?", options: ["Ignora; não é o seu trabalho", "Deixa um bilhete nas caixas", "Espera pelo turno seguinte", "Comunica e regista com a hora, como as ordens do posto dizem"], answer: 3, why: "Uma saída bloqueada é um perigo que se comunica e regista logo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conflitos, emergências, relatórios e ser contratado",
      lessons: [
        {
          title: "Acalmar conflitos, uso da força e emergências",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escolher uma resposta calma e segura para um conflito, um roubo ou uma emergência.",
          text: [
            "A maioria dos conflitos pode ser acalmada com palavras. Mantenha uma distância segura, fique de lado, mantenha as mãos abertas e à vista e fale devagar e baixo. Ouça, use o nome da pessoa se o souber e ofereça uma escolha: \"Pode esperar aqui ou eu posso chamar o seu gerente.\" Não discuta, não toque nem encurrale ninguém.",
            "O uso da força é a parte mais séria do trabalho. Os estados ensinam-no na sua formação (a Califórnia exige os cursos Appropriate Use of Force e Power to Arrest). A regra a lembrar: só a força que a lei e as suas ordens do posto permitem, só quando é preciso, e parar logo que deixe de ser. A maioria dos agentes sem arma recebe ordem para se afastar e chamar a polícia.",
            "Roubo: observe, memorize a descrição, chame a polícia ou o seu supervisor como as suas ordens dizem e não persiga até à rua ou ao parque de estacionamento. A sua segurança e a dos outros valem mais do que os produtos.",
            "Emergências: em caso de incêndio, emergência médica, briga ou armas, ligue primeiro para o 911 (ou para o número de emergência do seu país) e depois siga o plano de emergência do local: avise as pessoas, guie-as para as saídas, receba as equipas de socorro e diga-lhes o que viu. Os primeiros socorros e a reanimação (CPR) aprendem-se e certificam-se presencialmente com um instrutor qualificado, por exemplo da American Red Cross ou da American Heart Association."
          ],
          steps: ["Verifique: há alguém em perigo? Se sim, ligue primeiro para o 911.", "Mantenha uma distância segura e um caminho de saída.", "Fale com calma; ouça; ofereça uma escolha.", "Se a pessoa não se acalmar, afaste-se e chame a polícia ou o seu supervisor.", "Siga o plano de emergência do local; guie as pessoas para fora; receba as equipas de socorro.", "Escreva tudo logo que seja seguro."],
          words: [["Desescalada", "usar palavras e linguagem corporal calmas para baixar a raiva de alguém."], ["Uso da força", "qualquer ação física para controlar uma pessoa; os guardas só podem usar o que a lei e as suas ordens permitem."], ["Plano de emergência", "os passos escritos do local para incêndios, emergências médicas, armas e evacuação."], ["Evacuação", "tirar todas as pessoas de um edifício em segurança."]],
          slides: [
            { title: "Acalmar com palavras", bullets: ["Distância segura, mãos abertas, ficar de lado", "Falar devagar; ouvir; oferecer uma escolha", "Não discutir, tocar nem encurralar ninguém"] },
            { title: "Uso da força", bullets: ["Só o que a lei e as suas ordens permitem", "Só quando é preciso; parar quando deixa de ser", "A maioria dos agentes sem arma: afastar-se e chamar"] },
            { title: "Roubo", bullets: ["Observar e memorizar a descrição", "Chamar a polícia ou o supervisor", "Não perseguir; as pessoas valem mais do que os produtos"] },
            { title: "Emergências", bullets: ["Ligar primeiro para o 911 (ou o número local)", "Seguir o plano de emergência; guiar as pessoas para fora", "Receber as equipas de socorro e dizer o que viu"] }
          ],
          sources: [BSIS_TRAIN, BSIS_POA],
          tryIt: "Pratique com um amigo ou ao espelho. Situação: um visitante está a gritar na receção porque não pode subir sem crachá. Diga em voz alta três frases calmas, incluindo uma escolha que oferece. Depois escreva o momento em que se afastaria e chamaria o seu supervisor ou a polícia.",
          youCanNow: "escolher uma resposta calma e segura para um conflito, um roubo ou uma emergência, sem sair da sua autoridade.",
          quickCheck: [
            { objective: "O3", q: "Uma pessoa desmaia na entrada do prédio e não respira normalmente. O que faz primeiro?", options: ["Escreve o relatório", "Chama o seu supervisor e espera", "Liga para o 911 e depois segue o plano de emergência", "Procura o documento de identificação dela"], answer: 2, why: "Numa emergência médica, liga primeiro para o 911 (ou para o seu número local)." },
            { objective: "O3", q: "Um ladrão de loja foge para o parque de estacionamento com produtos. As suas ordens dizem observar e comunicar. O que faz?", options: ["Anota a descrição e a direção e chama como as suas ordens dizem", "Persegue-o no meio do trânsito", "Agarra-lhe o saco", "Bloqueia o carro dele com o seu"], answer: 0, why: "Você mantém-se em segurança, reúne os factos e chama; os produtos não valem uma vida." }
          ]
        },
        {
          title: "Observar, descrever e escrever o relatório de incidente",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escrever um relatório de incidente baseado em factos que responda a quem, o quê, quando, onde e como.",
          text: [
            "O seu relatório pode ser lido pelo seu supervisor, pelo cliente, por uma seguradora, pela polícia ou por um tribunal, às vezes meses depois. Um bom relatório deixa um desconhecido ver exatamente o que aconteceu. Muitos agentes perdem credibilidade porque os seus relatórios são vagos.",
            "Escreva factos, não opiniões. Não \"ele estava bêbado\", mas \"ele cheirava a álcool, cambaleava e enrolava as palavras\". Não \"um tipo suspeito\", mas \"um homem com cerca de 30 anos, cerca de 6 pés, casaco vermelho com capuz, mochila preta, andou à volta dos carros estacionados e experimentou duas maçanetas\".",
            "Responda a quem, o quê, quando, onde e como, por ordem de tempo. Indique a data e as horas exatas, o local exato, as pessoas envolvidas e as testemunhas, o que você próprio viu e ouviu, o que fez e a quem ligou e quando. Escreva entre aspas as palavras exatas que as pessoas disseram.",
            "Escreva-o logo que seja seguro, enquanto se lembra. Escreva na primeira pessoa (\"Eu vi\"), com frases curtas e os nomes certos. Não adivinhe, não acrescente nem deixe coisas de fora. Se cometer um erro, corrija-o como o seu empregador diz; nunca mude um relatório depois para ficar melhor."
          ],
          steps: ["Data, hora e local exato.", "Quem: você, as pessoas envolvidas, as testemunhas (nomes e descrições).", "O que aconteceu, por ordem de tempo, com o que você próprio viu e ouviu.", "O que fez e a quem ligou, com as horas.", "Palavras exatas entre aspas; factos, não opiniões.", "Leia-o outra vez; assine como o seu empregador exige."],
          words: [["Relatório de incidente", "um registo escrito e baseado em factos de um acontecimento como um roubo, um ferimento, uma briga ou um alarme."], ["Testemunha", "uma pessoa que viu ou ouviu o que aconteceu."], ["Facto", "algo que você próprio viu, ouviu ou mediu."], ["Opinião", "o que você pensa ou adivinha, como \"ele parecia culpado\"."]],
          slides: [
            { title: "Quem lê o seu relatório?", bullets: ["Supervisor, cliente, seguradora, polícia, um tribunal", "Tem de fazer sentido para um desconhecido, meses depois"] },
            { title: "Factos, não opiniões", bullets: ["Não \"bêbado\": cheirava a álcool, cambaleava, enrolava as palavras", "Descrever pessoas: idade, altura, roupa, saco"] },
            { title: "Quem, o quê, quando, onde, como", bullets: ["Data, horas exatas, local exato", "Pessoas e testemunhas", "O que viu, o que fez e a quem ligou"] },
            { title: "Escrever bem", bullets: ["Logo que seja seguro", "Primeira pessoa, frases curtas, palavras exatas", "Nunca o mude depois para ficar melhor"] }
          ],
          sources: [BSIS_TRAIN],
          tryIt: "Observe durante 2 minutos uma cena pública (uma rua movimentada, a entrada de uma loja ou um vídeo curto sem som). Depois escreva um relatório de incidente de prática: data, hora, local, pessoas descritas com factos, o que aconteceu por ordem de tempo e o que teria feito e a quem teria ligado. Sublinhe as palavras de opinião e reescreva-as como factos.",
          youCanNow: "escrever um relatório de incidente baseado em factos que responde a quem, o quê, quando, onde e como.",
          quickCheck: [
            { objective: "O4", q: "Que frase pertence a um relatório de incidente?", options: ["O homem parecia um ladrão.", "Ele estava claramente bêbado.", "Às 21:42, um homem de casaco vermelho experimentou as maçanetas de dois carros na Fila C.", "Estava a acontecer alguma coisa má."], answer: 2, why: "Dá a hora, o local, a descrição e a ação como factos, não opiniões." },
            { objective: "O4", q: "Quando deve escrever o relatório?", options: ["Na semana seguinte", "Logo que seja seguro, enquanto se lembra", "Só se a polícia pedir", "Depois de falar com todos para combinar uma versão"], answer: 1, why: "Escrever cedo mantém os detalhes certos." }
          ]
        },
        {
          title: "O seu plano para a licença de guarda e ser contratado",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Escrever um plano com datas para terminar a formação, pedir a licença de guarda e ser contratado.",
          text: [
            "Transforme os passos do seu estado em datas. Por exemplo: semana 1, encontrar uma escola de formação aprovada ou um empregador que forma agentes novos; semana 2, terminar a formação exigida antes do cartão; semana 3, tirar as impressões digitais e fazer o pedido; depois, candidatar-se a empregos enquanto a agência trata do seu pedido. Na Califórnia, o BSIS diz para contar com cerca de 4 a 6 semanas de processamento, e pode demorar mais.",
            "Muitas empresas de segurança contratam pessoas e ajudam-nas a fazer a formação. Procure em sites de emprego, no American Job Center ou centro de emprego da sua zona e nos sites das empresas. Verifique se a escola de formação é aprovada pelo seu estado (a Califórnia deixa verificar uma licença pela internet). Desconfie de quem promete uma licença \"garantida\".",
            "O seu currículo: seja honesto. Antes de ter a licença, escreva \"Concluí um curso de preparação para agente de segurança; pedido de licença de guarda em curso\". Indique as competências: escrever relatórios, atendimento ao público, patrulha, manter a calma sob pressão. Antigos militares: descrevam a polícia militar, o serviço de guarda ou os turnos de vigia com palavras do dia a dia.",
            "Pratique respostas de entrevista: \"Como lidaria com um visitante zangado?\" e \"O que faria se visse um roubo?\" Use o que aprendeu: manter a calma, observar e comunicar, pedir ajuda, escrever tudo."
          ],
          steps: ["Copie os passos da licença de guarda do seu estado da Lição 2.", "Ponha uma data ao lado de cada passo.", "Escreva três empregadores ou escolas aprovadas perto de si.", "Escreva uma linha honesta para o currículo e três competências.", "Pratique duas respostas de entrevista em voz alta."],
          words: [["Escola aprovada", "um centro de formação que o seu estado autoriza a dar a formação exigida aos guardas."], ["American Job Center", "um serviço público gratuito dos Estados Unidos que ajuda na procura de emprego e na formação."], ["Tempo de processamento", "o tempo que a agência leva a analisar o seu pedido e a verificação de antecedentes."]],
          slides: [
            { title: "Passos com datas", bullets: ["Encontrar formação; terminar o que é preciso antes do cartão", "Impressões digitais e pedido", "Candidatar-se a empregos enquanto espera"] },
            { title: "Onde procurar", bullets: ["Empresas de segurança que formam agentes novos", "American Job Centers e centros de emprego", "Verificar se a escola é aprovada pelo estado"] },
            { title: "Um currículo honesto", bullets: ["\"Pedido de licença de guarda em curso\" até ser emitida", "Relatórios, atendimento ao público, patrulha, calma"] },
            { title: "Praticar a entrevista", bullets: ["Visitante zangado: palavras calmas, oferecer uma escolha", "Roubo: observar, chamar, escrever tudo"] }
          ],
          sources: [BSIS_FACT, BSIS_VERIFY, BLS_GUARDS],
          tryIt: "Faça o seu plano para a licença de guarda numa página: cada passo da página do seu estado com uma data, três empregadores ou escolas aprovadas da sua zona, uma linha honesta para o currículo e as suas respostas às duas perguntas de entrevista. Junte-o à sua lista de verificação e ao seu relatório de prática: esse é o seu dossiê de preparação.",
          youCanNow: "escrever um plano com datas para obter a sua licença de guarda e um emprego, com uma linha honesta para o currículo.",
          quickCheck: [
            { objective: "O5", q: "Terminou este curso, mas a sua licença de guarda ainda não foi emitida. Que linha do currículo é honesta?", options: ["\"Agente de segurança licenciado\"", "\"Concluí um curso de preparação para agente de segurança; pedido de licença de guarda em curso\"", "\"Guarda armado\"", "\"Instrutor certificado pelo estado\""], answer: 1, why: "Diz exatamente o que fez sem afirmar uma licença que não tem." },
            { objective: "O1", q: "Como pode verificar se uma escola de formação ou uma licença é verdadeira na Califórnia?", options: ["Confiar no anúncio da escola", "Perguntar nas redes sociais", "Usar a verificação de licenças do estado pela internet", "Olhar para o logótipo"], answer: 2, why: "O Department of Consumer Affairs da Califórnia deixa verificar licenças pela internet." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Conflitos, emergências, relatórios e ser contratado",
        questions: [
          { objective: "O3", q: "Um visitante zangado está a gritar. Qual é o melhor primeiro passo?", options: ["Gritar também para ele ouvir", "Ficar muito perto", "Agarrar-lhe o braço", "Manter uma distância segura e falar devagar e com calma"], answer: 3, why: "A distância e as palavras calmas baixam a raiva e mantêm você em segurança." },
          { objective: "O3", q: "Sente cheiro a fumo e vê chamas num armazém do prédio. O que vem primeiro?", options: ["Ligar para o 911 (ou o número local) e iniciar o plano de emergência do local", "Escrever o relatório", "Terminar a patrulha", "Tirar uma foto para as redes sociais"], answer: 0, why: "Numa emergência, liga primeiro para o 911 e depois segue o plano de emergência." },
          { objective: "O4", q: "Qual é um facto, e não uma opinião?", options: ["Ele parecia culpado", "Ela estava louca", "Ele disse: \"Saia do meu caminho\"", "Estavam a tramar alguma coisa"], answer: 2, why: "As palavras exatas que ouviu são um facto; as outras são opiniões." },
          { objective: "O4", q: "Repara num erro no relatório de ontem depois de o seu supervisor o ter lido. O que faz?", options: ["Reescreve-o às escondidas para ficar melhor", "Corrige-o abertamente, como o seu empregador diz", "Deita-o fora", "Pede a um colega para o assinar"], answer: 1, why: "As correções fazem-se abertamente, pelo método do empregador; mudar um relatório às escondidas destrói a confiança." },
          { objective: "O5", q: "O que deve ter um plano para a licença de guarda?", options: ["Datas para a formação, as impressões digitais, o pedido e as candidaturas a empregos", "Só o emprego que quer", "A promessa de uma licença garantida", "Nada até ser contratado"], answer: 0, why: "Um plano com datas transforma os passos do seu estado em ações que pode terminar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para Agente de Segurança (Licença de Guarda)",
    questions: [
      { objective: "O3", q: "O que faz principalmente um agente de segurança?", options: ["Prende pessoas por qualquer regra quebrada", "Protege pessoas e bens estando visível, observando e comunicando", "Investiga crimes em tribunal", "Passa multas de trânsito"], answer: 1, why: "O centro do trabalho é a proteção visível, observar e comunicar." },
      { objective: "O3", q: "As suas ordens do posto são mais rígidas do que a lei. Qual segue?", options: ["Só a lei", "O que acha que está certo", "O pedido do visitante", "As ordens do posto"], answer: 3, why: "Os empregadores podem pôr regras mais rígidas, e você tem de seguir as suas ordens do posto." },
      { objective: "O1", q: "Quem emite a licença de guarda na maioria dos estados?", options: ["Uma agência do estado", "Qualquer escola de formação", "O centro comercial da zona", "O FBI"], answer: 0, why: "Uma agência do estado dá a licença aos guardas; as escolas só dão a formação." },
      { objective: "O1", q: "Na Califórnia, quantas horas de formação em competências de agente de segurança têm de estar feitas nos primeiros 6 meses?", options: ["8 horas", "4 horas", "32 horas", "100 horas"], answer: 2, why: "O BSIS exige 32 horas de formação em competências nos primeiros 6 meses." },
      { objective: "O1", q: "Qual é a idade mínima para o registo de guarda na Califórnia?", options: ["16", "21", "25", "18"], answer: 3, why: "O BSIS diz que os candidatos têm de ter pelo menos 18 anos." },
      { objective: "O1", q: "Tem registo criminal e está a preencher um pedido de licença de guarda. O que deve fazer?", options: ["Responder a todas as perguntas com honestidade e ver as regras do seu estado", "Deixar o registo de fora", "Usar o nome de um amigo", "Desistir sem verificar"], answer: 0, why: "Respostas falsas podem levar a uma recusa; cada estado decide que registos contam." },
      { objective: "O2", q: "O que há nas ordens do posto?", options: ["Os lucros da empresa", "Instruções do local: horário, pontos de patrulha, regras de entrada, a quem ligar", "O seu horário pessoal da semana", "Uma lista de suspeitos"], answer: 1, why: "As ordens do posto são as instruções escritas para um local específico." },
      { objective: "O2", q: "O que deve ter cada entrada do registo diário de atividades?", options: ["A sua opinião sobre os colegas", "Só os problemas, sem horas", "A hora e o que verificou ou viu", "Nada até ao fim do turno"], answer: 2, why: "O registo anota cada verificação e acontecimento com a hora." },
      { objective: "O2", q: "Um visitante sem crachá diz \"Venho com ele\" e entra atrás de um funcionário. O que faz?", options: ["Deixa-o entrar; parece simpático", "Grita com ele", "Sai do seu posto para o seguir", "Para-o com educação e verifica o documento como as ordens do posto dizem"], answer: 3, why: "Impedir o tailgating com educação e firmeza é o centro do controlo de acesso." },
      { objective: "O2", q: "Porque deve dizer ao agente seguinte o que aconteceu, na troca de turno?", options: ["Para ele saber o que está aberto e o que vigiar", "Para acabar o turno mais cedo", "Não é preciso", "Para contar mexericos"], answer: 0, why: "Uma boa passagem de turno mantém o local vigiado, sem falhas." },
      { objective: "O3", q: "O que ajuda a acalmar uma pessoa zangada?", options: ["Ficar cara a cara, muito perto", "Falar devagar e oferecer uma escolha", "Apontar o dedo", "Bloquear a saída"], answer: 1, why: "Falar com calma e dar uma escolha baixa a tensão; bloquear e apontar aumentam-na." },
      { objective: "O3", q: "Quando pode um guarda usar a força?", options: ["Sempre que alguém é mal-educado", "Para recuperar qualquer objeto", "Só como a lei e as ordens do posto permitem, só quando é preciso", "Sempre que o supervisor não está a ver"], answer: 2, why: "A força é limitada pela lei e pelas ordens do posto e para quando deixa de ser precisa." },
      { objective: "O3", q: "Vê uma briga com uma arma no parque de estacionamento. O que faz primeiro?", options: ["Mete-se no meio e separa-os", "Liga para o 911 de um lugar seguro", "Escreve primeiro o relatório", "Filma para as redes sociais"], answer: 1, why: "Uma arma quer dizer ligar primeiro para o 911, de um lugar seguro." },
      { objective: "O4", q: "Quem pode ler o seu relatório de incidente?", options: ["Só você", "Ninguém", "Só a sua família", "Supervisor, cliente, seguradora, polícia ou um tribunal"], answer: 3, why: "Os relatórios podem ser usados por muitas pessoas, às vezes meses depois." },
      { objective: "O4", q: "Qual é a melhor descrição de uma pessoa num relatório?", options: ["Mulher, cerca de 40 anos, cerca de 5 pés e 5 polegadas, casaco azul, mochila cinzenta", "Uma pessoa com mau aspeto", "Alguém estranho", "Um desordeiro"], answer: 0, why: "A idade, a altura e a roupa são factos que ajudam outros a identificar a pessoa." },
      { objective: "O4", q: "A que perguntas tem de responder um relatório?", options: ["Porque é que a pessoa é má", "A sua opinião sobre o cliente", "Quem, o quê, quando, onde e como", "Só o que a polícia disse"], answer: 2, why: "Quem, o quê, quando, onde e como fazem um relatório completo e baseado em factos." },
      { objective: "O4", q: "Como escreve o que alguém disse?", options: ["Resume com a sua opinião", "Deixa de fora", "Faz parecer mais grave", "Escreve as palavras exatas entre aspas"], answer: 3, why: "As palavras exatas são factos em que os outros podem confiar." },
      { objective: "O5", q: "Que linha do currículo é honesta antes de a sua licença ser emitida?", options: ["\"Pedido de licença de guarda em curso\"", "\"Profissional de segurança licenciado\"", "\"Agente armado\"", "\"Agente da polícia\""], answer: 0, why: "Descreve a sua situação real sem afirmar ter uma licença." },
      { objective: "O5", q: "Uma escola promete uma licença de guarda \"garantida\" num dia. O que deve fazer?", options: ["Pagar logo", "Verificar a página da agência do estado e se a escola é aprovada", "Dar-lhes o seu número da Segurança Social por SMS", "Dizer aos amigos para se inscreverem"], answer: 1, why: "Só o estado emite licenças; verifique a página oficial e a aprovação da escola." },
      { objective: "O5", q: "Enquanto a agência trata do seu pedido, qual é um passo inteligente no seu plano?", options: ["Não fazer nada", "Parar de estudar", "Candidatar-se a empregos e praticar respostas de entrevista", "Começar a trabalhar sem licença"], answer: 2, why: "Usar a espera para se candidatar e praticar ajuda você a ser contratado mais depressa." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 6, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Cumpre ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Passos da licença de guarda do estado", objective: "O1", notYet: "Falta a agência, a verificação de antecedentes ou a formação, ou usa um anúncio de formação em vez da página oficial.", meets: "Indica a agência, a idade, a verificação de antecedentes, a formação antes e depois da licença, como fazer o pedido e o endereço da página oficial.", exceeds: "Acrescenta as regras de renovação e como verificar uma escola ou uma licença." },
      { name: "Lista de verificação de patrulha e acesso", objective: "O2", notYet: "Faltam os pontos de patrulha, a regra da entrada ou o registo.", meets: "Cobre todos os pontos das ordens do posto de prática e inclui um registo com horas e pelo menos quatro entradas.", exceeds: "Acrescenta a passagem de turno e um plano para o tailgating." },
      { name: "Cartão de bolso de observar e comunicar", objective: "O3", notYet: "Inclui perseguições, força além das ordens ou não tem o passo de ligar primeiro para o 911.", meets: "Mostra palavras calmas, quando se afastar e chamar, nada de perseguições e o 911 primeiro nas emergências.", exceeds: "Acrescenta os passos do plano de emergência do local e o que dizer às equipas de socorro." },
      { name: "Relatório de incidente de prática", objective: "O4", notYet: "Vago, com opiniões, ou faltam as horas ou o local.", meets: "Responde a quem, o quê, quando, onde e como, por ordem de tempo, com factos e palavras exatas.", exceeds: "As descrições são tão detalhadas que um desconhecido pode identificar as pessoas e os locais." },
      { name: "Plano com datas e linha do currículo", objective: "O5", notYet: "Sem datas, ou afirma ter uma licença que ainda não tem.", meets: "Datas para cada passo, três empregadores ou escolas aprovadas da zona, uma linha honesta para o currículo.", exceeds: "Inclui respostas praticadas a duas perguntas de entrevista." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e um dossiê de preparação que cumpre a grelha de avaliação",
      "Alunos que pedem uma licença de guarda do estado em 60 dias (inquérito de seguimento)",
      "Alunos que recebem a licença de guarda e são contratados como agentes de segurança (seguimento e relatórios dos parceiros)",
      "Os empregadores parceiros dizem que os relatórios de incidente dos agentes novos não precisam de ser reescritos nos primeiros 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para a página de licenças do estado",
      "Papel e caneta, ou uma aplicação de documentos gratuita, para a lista de verificação, o registo, o relatório e o plano",
      "Opcional: uma cópia impressa da ficha informativa do seu estado e um exemplo de ordens do posto",
      "Cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Diga cedo e muitas vezes: este curso prepara os alunos; é a agência do estado que emite a licença, depois da formação aprovada.",
      "Antes da aula, abra a página oficial do seu próprio estado e leve as horas de formação, as taxas e os formulários atuais; as regras mudam.",
      "Não ensine imobilização física, uso de algemas nem armas neste curso; isso exige formação aprovada e presencial.",
      "Com os alunos que têm registo criminal, mantenha o assunto privado e indique as regras do estado e um programa de apoio jurídico para a reintegração; nunca prometa aprovação.",
      "Use simulações de desescalada com uma palavra de paragem clara, e avalie o dossiê de preparação com a grelha, uma linha de cada vez."
    ]
  }
};
