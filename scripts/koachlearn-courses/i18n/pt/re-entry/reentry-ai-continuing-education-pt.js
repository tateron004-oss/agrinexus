"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-ai-continuing-education.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: US names (FAFSA, studentaid.gov, American Job Center, CareerOneStop, GED) are kept and explained.

module.exports = {
  id: "reentry-ai-continuing-education-pt",
  lang: "pt",
  translationOf: "reentry-ai-continuing-education",
  category: "Re-Entry",
  name: "IA e Educação Contínua",
  skills: "Definir um objetivo de estudo ligado a um emprego, Encontrar programas gratuitos e baratos, Usar a IA como explicador, Fazer um plano de estudo, Verificar um programa antes de se inscrever, Preparar-se para pedir apoio financeiro",
  outcome: "escolher um objetivo de estudo que leve a um emprego, encontrar um programa verdadeiro (uma turma de equivalência ao ensino secundário, um certificado ou um curso universitário) e verificá-lo antes de se inscrever, e usar um assistente de IA como explicador com um plano de estudo semanal.",
  about: [
    "Muitas pessoas voltam para casa com vontade de aprender: terminar a equivalência ao ensino secundário, obter um certificado de uma profissão, começar um community college ou aprender informática. A educação pode abrir portas para empregos melhores.",
    "Você vai definir um objetivo ligado a um emprego, encontrar programas gratuitos e baratos, verificar um programa antes de se inscrever, preparar-se para o apoio financeiro e usar um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, como um explicador paciente.",
    "Cada lição dura cerca de cinco minutos. A IA é uma ajuda para estudar, não uma forma de fazer os trabalhos por você; as escolas têm regras sobre isso. Nunca escreva números privados nem detalhes do seu processo na IA. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Escolha um objetivo de estudo ligado a um emprego. Encontre um programa verdadeiro para ele e verifique-o com cinco perguntas (custo, duração, horário, o que recebe no fim e como ajuda a ser contratado). Depois peça a um assistente de IA um plano de estudo de quatro semanas, use-o para ele lhe ensinar e lhe fazer perguntas sobre o primeiro tema, e marque as suas duas primeiras sessões de estudo no calendário.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e querem continuar a aprender: terminar a equivalência ao ensino secundário, obter um certificado de uma profissão, começar um community college ou aprender informática para ter um emprego melhor.",
    startingPoint: "Sabem usar um telefone simples e algumas aplicações. Muitos não estudam há anos, não sabem verificar um programa nem pedir apoio e têm pouca experiência a usar a IA como ajuda para estudar.",
    gap: "A educação pode abrir portas para empregos melhores, mas quem volta para casa pode perder tempo e dinheiro em programas que não levam a trabalho, ou em burlas com grandes empréstimos. Os alunos precisam de definir um objetivo ligado a um emprego, encontrar e verificar programas verdadeiros, estudar com a IA de forma honesta e preparar-se para o apoio financeiro.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca com internet",
      "Tempo: lições de cerca de 5 minutos, que cabem entre o trabalho e as consultas",
      "Regras da escola: a IA é uma ajuda para estudar, não uma forma de fazer os trabalhos",
      "Privacidade: nunca escrever números privados, dados fiscais ou detalhes do processo na IA; os formulários de apoio só em studentaid.gov"
    ],
    prerequisites: "O curso \"Introdução à IA e Confiança Digital\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um emprego que você quer", action: "escrever um objetivo de estudo ligado a esse emprego", standard: "numa só frase, com as regras de licença confirmadas junto da entidade estadual de licenças" },
    { id: "O2", condition: "Usando careeronestop.org, bibliotecas, escolas para adultos ou community colleges", action: "encontrar pelo menos dois programas verdadeiros que sirvam para o seu objetivo", standard: "com números de telefone tirados dos sites oficiais deles" },
    { id: "O3", condition: "Com um programa", action: "verificá-lo com cinco perguntas sobre custo, duração, horário, o que recebe no fim e como ajuda a ser contratado", standard: "com respostas dadas pelo próprio programa e tratando qualquer pressão para assinar um grande empréstimo como sinal de alerta" },
    { id: "O4", condition: "Com um tema do seu objetivo", action: "pedir a um assistente de IA que o explique, dê um exemplo e lhe faça perguntas", standard: "sem pôr a IA a fazer os seus trabalhos e confirmando os erros com o professor ou o livro" },
    { id: "O5", condition: "Com o seu trabalho e as suas consultas", action: "fazer um plano de estudo de quatro semanas com a ajuda da IA", standard: "com sessões curtas e regulares e as duas primeiras marcadas no calendário" },
    { id: "O6", condition: "Usando studentaid.gov", action: "indicar onde pedir o apoio federal para estudantes e o que preparar", standard: "com três perguntas para um gabinete de apoio financeiro e os dados privados escritos só em studentaid.gov" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher o seu caminho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Definir um objetivo de estudo que leve a um emprego",
          minutes: 5,
          goal: "Escolher um objetivo de estudo ligado a um emprego verdadeiro.",
          text: [
            "Aprender é mais útil quando leva a algum lado. Comece pelo emprego que quer e depois volte para trás até ao que precisa de aprender.",
            "Pergunte à IA: \"Quero trabalhar como operador de empilhadora ou como chefe de equipa num armazém. Que formação ou certificados as pessoas costumam ter para isso? Quais são curtos e baratos?\" Ou: \"Quero ser eletricista. Quais são os passos habituais?\"",
            "Alguns empregos precisam de uma licença, e algumas regras de licença têm em conta o registo criminal da pessoa. Confirme com a entidade de licenças do seu estado ou com um programa de reintegração antes de investir tempo e dinheiro. A IA pode dar-lhe uma primeira lista, mas quem tem a última palavra é a entidade oficial."
          ],
          steps: ["Diga o emprego que quer.", "Pergunte à IA que formação as pessoas costumam ter para ele.", "Escolha o próximo passo útil mais curto.", "Se precisar de licença, confirme com a entidade de licenças do seu estado.", "Escreva o seu objetivo numa só frase."],
          words: [["Certificado", "prova de que terminou uma formação numa competência específica."], ["Equivalência ao ensino secundário", "um exame, como o GED, que mostra competências do nível do ensino secundário."]],
          slides: [
            { title: "Comece pelo emprego", bullets: ["Depois volte para trás", "O que preciso de aprender?"] },
            { title: "Pergunte à IA", bullets: ["\"Que formação as pessoas têm para este emprego?\"", "\"Que opções são curtas e baratas?\""] },
            { title: "Confirme a licença", bullets: ["Alguns empregos precisam de licença", "As regras podem ter em conta o registo criminal", "Pergunte à entidade do seu estado ou a um programa de reintegração"] }
          ],
          tryIt: "Escreva o emprego que quer. Pergunte a um assistente de IA que formação as pessoas costumam ter para ele e escreva o seu objetivo de estudo numa só frase.",
          youCanNow: "definir um objetivo de estudo que leve a um emprego.",
          quickCheck: [
            { objective: "O1", q: "O que é um certificado?", options: ["Um diploma universitário", "Prova de que terminou uma formação numa competência", "Uma oferta de emprego", "Um empréstimo"], answer: 1, why: "Um certificado mostra que terminou uma formação numa competência específica." },
            { objective: "O1", q: "Você quer ser eletricista. Como começaria o seu objetivo de estudo?", options: ["Inscrever-se na primeira turma que vê", "Perguntar a um amigo qual é a turma mais fácil", "Começar pelo emprego, encontrar a formação que ele pede e confirmar com a entidade de licenças do estado", "Esperar que alguém lhe ofereça formação"], answer: 2, why: "Começar pelo emprego e confirmar com a entidade de licenças leva à formação certa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar programas gratuitos e baratos",
          minutes: 5,
          goal: "Encontrar pelo menos dois programas verdadeiros que sirvam para o seu objetivo.",
          text: [
            "Há muitos lugares para aprender por pouco ou nenhum dinheiro: centros de educação de adultos (muitas vezes para a equivalência ao ensino secundário e para o inglês), bibliotecas públicas, community colleges, programas de reintegração e American Job Centers, que podem dar orientação profissional e indicar formações.",
            "Encontre o American Job Center mais perto de si com o localizador do CareerOneStop em careeronestop.org, um site do Departamento do Trabalho dos EUA, ou ligue para a linha de ajuda 1-877-872-5627. Os serviços mudam de centro para centro, por isso ligue ou vá lá confirmar o que o seu oferece.",
            "Na internet, muitos sites respeitados têm lições gratuitas, como a Khan Academy para matemática e leitura, e cursos gratuitos de community colleges. Peça ideias à IA e depois vá ao site de cada programa para confirmar que existe e quanto custa."
          ],
          steps: ["Pergunte à IA onde as pessoas da sua zona podem aprender a sua competência.", "Procure o American Job Center mais perto em careeronestop.org.", "Veja a sua biblioteca, a escola para adultos e o community college.", "Anote dois programas.", "Confirme cada um no site dele ou por telefone."],
          words: [["American Job Center", "um gabinete pago pelo Departamento do Trabalho dos EUA que ajuda com emprego e formação."], ["Community college", "uma faculdade local e mais barata, com certificados e cursos de dois anos."]],
          slides: [
            { title: "Lugares baratos para aprender", bullets: ["Educação de adultos e bibliotecas", "Community colleges", "Programas de reintegração e American Job Centers"] },
            { title: "American Job Centers", bullets: ["Encontre um em careeronestop.org", "Linha de ajuda: 1-877-872-5627", "Os serviços variam: ligue para confirmar"] },
            { title: "Na internet", bullets: ["Lições gratuitas como a Khan Academy", "Confirme os programas nos sites deles"] }
          ],
          sources: [{ name: "CareerOneStop: localizador de American Job Centers (Departamento do Trabalho dos EUA)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx" }],
          tryIt: "Encontre o American Job Center mais perto de si em careeronestop.org e mais um programa (biblioteca, escola para adultos ou community college) para o seu objetivo. Anote os dois, com os números de telefone dos sites oficiais.",
          youCanNow: "encontrar programas gratuitos e baratos para o seu objetivo de estudo.",
          quickCheck: [
            { objective: "O2", q: "O que é um community college?", options: ["Uma faculdade local e mais barata", "Uma escola só na internet", "Uma agência de emprego privada", "Um liceu só para adultos"], answer: 0, why: "Os community colleges são locais e normalmente custam menos do que outras faculdades." },
            { objective: "O2", q: "A IA sugere um programa de formação perto de si. O que faria?", options: ["Inscrever-se logo", "Pagar um sinal para guardar o lugar", "Partilhá-lo sem verificar", "Confirmá-lo no site do próprio programa"], answer: 3, why: "A IA pode estar errada, por isso confirme os programas no site oficial." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Verificar um programa antes de se inscrever",
          minutes: 5,
          goal: "Fazer cinco perguntas para ver se um programa é verdadeiro e se vale a pena.",
          text: [
            "Alguns programas são excelentes. Outros custam muito e não levam a lado nenhum, e alguns são burlas que visam pessoas que querem recomeçar. Verifique antes de assinar ou pagar.",
            "Faça cinco perguntas: Qual é o custo total, com livros e taxas? Quanto tempo dura e qual é o horário? O que recebo no fim (um certificado, uma licença ou créditos)? A escola é acreditada, ou o certificado é reconhecido pelos empregadores? Quantos formados arranjam emprego, e o programa ajuda a encontrar trabalho?",
            "A IA pode ajudar a preparar as perguntas e a explicar palavras como \"acreditado\". Mas as respostas têm de vir do próprio programa, por escrito, e das suas próprias verificações. Desconfie da pressão para assinar hoje ou para fazer um grande empréstimo."
          ],
          steps: ["Pergunte o custo total.", "Pergunte a duração e o horário.", "Pergunte o que recebe no fim.", "Pergunte se é acreditado ou reconhecido pelos empregadores.", "Pergunte pelos resultados de emprego e pela ajuda a encontrar trabalho."],
          words: [["Acreditado", "aprovado por um grupo oficial que verifica a qualidade de uma escola."], ["Colocação profissional", "ajuda para encontrar emprego depois de terminar."]],
          slides: [
            { title: "Verifique antes de assinar", bullets: ["Alguns programas não levam a lado nenhum", "Alguns são burlas"] },
            { title: "Cinco perguntas", bullets: ["Custo total? Duração e horário?", "O que recebo no fim?", "Acreditado ou reconhecido?", "Resultados de emprego e colocação?"] },
            { title: "Sinais de alerta", bullets: ["Pressão para assinar hoje", "Grandes empréstimos para um curso curto", "Nenhuma resposta por escrito"] }
          ],
          tryIt: "Escolha um programa da Lição 2. Peça a um assistente de IA que o ajude a transformar as cinco perguntas num pequeno guião para o telefone, depois ligue ou veja o site do programa e anote as respostas.",
          youCanNow: "verificar um programa com cinco perguntas antes de se inscrever.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer \"acreditado\"?", options: ["Aprovado por um grupo oficial de qualidade", "Gratuito", "Só na internet", "Gerido pelo governo"], answer: 0, why: "Acreditação quer dizer que um grupo oficial verificou a qualidade do programa." },
            { objective: "O3", q: "Uma escola diz que tem de assinar hoje um grande empréstimo para guardar o seu lugar. O que faria?", options: ["Assinar para não perder o lugar", "Assinar mas não pensar em pagar", "Tratar isso como sinal de alerta e ter tempo para verificar", "Pedir à IA para assinar por você"], answer: 2, why: "A pressão para assinar logo um grande empréstimo é um sinal de alerta." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher o seu caminho",
        questions: [
          { objective: "O1", q: "Qual é o melhor ponto de partida para um objetivo de estudo?", options: ["Uma turma qualquer", "O curso com mais publicidade", "O emprego que quer, voltando depois para trás", "O programa mais longo"], answer: 2, why: "Um objetivo ligado a um emprego mantém o estudo útil." },
          { objective: "O1", q: "A IA diz que um emprego precisa de licença. Quem tem a última palavra sobre as regras?", options: ["A entidade de licenças do seu estado", "A IA", "Um amigo", "Uma publicação nas redes sociais"], answer: 0, why: "As entidades oficiais definem as regras das licenças." },
          { objective: "O2", q: "Onde pode encontrar o American Job Center mais perto de si?", options: ["Um site de cartões-presente", "Um anúncio que aparece no ecrã", "Qualquer SMS", "careeronestop.org"], answer: 3, why: "O CareerOneStop é o localizador do Departamento do Trabalho." },
          { objective: "O3", q: "Que pergunta verifica o valor de um programa?", options: ["\"De que cor é o edifício?\"", "\"Quantos formados arranjam emprego?\"", "\"Posso assinar hoje sem ler?\"", "\"Têm parque de estacionamento?\""], answer: 1, why: "Os resultados de emprego mostram se o programa leva a algum lado." },
          { objective: "O3", q: "Um programa pressiona-o a assinar hoje um grande empréstimo. Isto é:", options: ["Um ótimo negócio", "Um sinal de alerta", "Obrigatório", "Normal em todas as escolas"], answer: 1, why: "A pressão e os grandes empréstimos são sinais de alerta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aprender com a IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar a IA como explicador",
          minutes: 5,
          goal: "Pedir à IA que explique, dê exemplos e lhe faça perguntas, sem fazer o trabalho por você.",
          text: [
            "Um assistente de IA pode ser um explicador paciente, a qualquer hora do dia. Peça-lhe que explique um tema de forma simples, dê um exemplo e lhe faça perguntas: \"Estou a estudar frações para o meu exame de equivalência ao ensino secundário. Explica como somar frações em passos simples, dá-me um exemplo e depois dá-me três exercícios, um de cada vez.\"",
            "Se não perceber, diga: \"Explica de outra maneira.\" \"Usa dinheiro como exemplo.\" Quanto mais exercícios fizer sozinho, mais aprende.",
            "Não ponha a IA a escrever os seus trabalhos nem a fazer os seus testes. As escolas tratam isso como fraude, e você perde a aprendizagem. Verifique também os factos: a IA pode errar, mesmo em matemática. O seu livro e o seu professor têm a última palavra."
          ],
          steps: ["Diga o que está a estudar e o seu nível.", "Peça uma explicação simples e um exemplo.", "Peça exercícios, um de cada vez.", "Se ficar bloqueado, peça outra explicação.", "Faça os seus próprios trabalhos; confirme os factos com o professor ou o livro."],
          words: [["Explicador", "um professor que ajuda uma pessoa a aprender ao seu próprio ritmo."], ["Honestidade académica", "fazer o seu próprio trabalho e cumprir as regras da sua escola."]],
          slides: [
            { title: "Um explicador a qualquer hora", bullets: ["Explica de forma simples", "Dá um exemplo", "Faz-lhe perguntas, uma de cada vez"] },
            { title: "Bloqueado?", bullets: ["\"Explica de outra maneira.\"", "\"Usa dinheiro como exemplo.\""] },
            { title: "Aprenda, não faça batota", bullets: ["Faça os seus trabalhos e testes", "A IA pode errar", "O professor e o livro têm a última palavra"] }
          ],
          tryIt: "Escolha um tema do seu objetivo. Peça a um assistente de IA que o explique de forma simples, dê um exemplo e lhe faça três perguntas, uma de cada vez.",
          youCanNow: "usar a IA como explicador de forma honesta.",
          quickCheck: [
            { objective: "O4", q: "O que deve ter um bom pedido de explicação?", options: ["Só a palavra \"ajuda\"", "O seu trabalho para a IA o terminar", "O seu número de estudante", "O que está a estudar e o seu nível"], answer: 3, why: "Dizer à IA o tema e o seu nível dá explicações à sua medida." },
            { objective: "O4", q: "Tem uma redação para entregar e apetece-lhe deixar a IA escrevê-la. O que faria?", options: ["Deixar a IA escrevê-la e entregá-la", "Pedir à IA que explique o tema e lhe faça perguntas, e depois escrevê-la você mesmo", "Copiar a redação de um colega", "Não fazer o trabalho"], answer: 1, why: "Pôr a IA a escrever os trabalhos vai contra as regras da escola e salta a aprendizagem." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um plano de estudo que caiba na sua vida",
          minutes: 5,
          goal: "Fazer um plano de estudo semanal à volta do trabalho e de outros compromissos.",
          text: [
            "Quando trabalha, vai a consultas e cuida da família, o tempo de estudo tem de ser planeado. Sessões curtas e regulares funcionam melhor do que estudar tudo à última hora.",
            "Pergunte à IA: \"Trabalho das 7h às 15h30 nos dias úteis e tenho consultas às terças à tarde. Faz um plano de estudo de quatro semanas para a matemática da minha equivalência ao ensino secundário, com sessões de 30 minutos quatro vezes por semana e uma pequena revisão em cada fim de semana.\"",
            "Marque as sessões no calendário do telefone com lembretes. Estude num lugar calmo, como uma biblioteca, e use o Wi-Fi e os computadores gratuitos da biblioteca se precisar. Se faltar a uma sessão, não desista; faça só a seguinte."
          ],
          steps: ["Anote o seu horário de trabalho e as consultas fixas.", "Peça à IA um plano de quatro semanas com sessões curtas.", "Marque as sessões no calendário com lembretes.", "Encontre um lugar calmo para estudar.", "Se faltar a uma, faça só a seguinte."],
          words: [["Sessão de estudo", "um tempo marcado em que se dedica a aprender."], ["Estudar à última hora", "tentar aprender muito mesmo no último momento."]],
          slides: [
            { title: "Planeie o seu tempo de estudo", bullets: ["Curto e regular é melhor do que à última hora"] },
            { title: "Peça um plano à IA", bullets: ["O seu horário de trabalho e consultas", "Sessões curtas, algumas vezes por semana", "Uma revisão ao fim de semana"] },
            { title: "Não desista", bullets: ["Lembretes no calendário", "Um lugar calmo, como a biblioteca", "Faltou a uma? Faça a seguinte"] }
          ],
          tryIt: "Peça a um assistente de IA um plano de estudo de quatro semanas que caiba no seu trabalho e nas suas consultas. Marque as suas duas primeiras sessões no calendário do telefone.",
          youCanNow: "fazer e cumprir um plano de estudo que cabe na sua vida.",
          quickCheck: [
            { objective: "O5", q: "O que é estudar à última hora?", options: ["Estudar um pouco todos os dias", "Tirar apontamentos na aula", "Aprender muito no último momento", "Pedir ajuda a um explicador"], answer: 2, why: "Estudar à última hora é tentar aprender muito mesmo antes de um teste." },
            { objective: "O5", q: "Faltou à sessão de estudo de terça por causa do trabalho. O que faria?", options: ["Fazer só a sessão seguinte", "Desistir do plano", "Estudar seis horas na quarta", "Começar o plano todo outra vez"], answer: 0, why: "Faltar a uma sessão não faz mal; o que importa é voltar ao plano." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Preparar-se para pedir apoio financeiro",
          minutes: 5,
          goal: "Saber onde pedir o apoio federal para estudantes e fazer a lista do que preparar.",
          text: [
            "Para a faculdade e muitas escolas profissionais nos Estados Unidos, o primeiro passo para o apoio financeiro é a FAFSA, a Free Application for Federal Student Aid (o pedido gratuito de apoio federal para estudantes). Como o nome diz, é gratuita. Faça o pedido só no site oficial, studentaid.gov; não pague a nenhum site para a preencher.",
            "As regras sobre condenações criminais e apoio para estudantes mudaram nos últimos anos. Não pense logo que não pode ter apoio. Veja as regras atuais em studentaid.gov, ou pergunte ao gabinete de apoio financeiro da escola; eles ajudam estudantes com estas perguntas todos os dias.",
            "A IA pode ajudar a perceber termos (\"O que é uma Pell Grant?\" \"Qual é a diferença entre uma bolsa e um empréstimo?\") e a fazer uma lista de perguntas para o gabinete de apoio financeiro. Escreva os seus dados pessoais e fiscais só em studentaid.gov, nunca na IA. As bolsas não têm de ser devolvidas; os empréstimos têm."
          ],
          steps: ["Para a FAFSA, vá só a studentaid.gov; é gratuita.", "Veja aí as regras atuais sobre condenações, ou pergunte ao gabinete de apoio financeiro da escola.", "Use a IA para explicar termos e preparar perguntas.", "Escreva os dados pessoais só no site oficial.", "Saiba a diferença: as bolsas não se devolvem, os empréstimos sim."],
          words: [["FAFSA", "a Free Application for Federal Student Aid, o pedido gratuito de apoio federal para estudantes, em studentaid.gov."], ["Bolsa (grant)", "dinheiro para estudar que normalmente não tem de ser devolvido."], ["Gabinete de apoio financeiro", "o serviço de uma escola que ajuda os estudantes a pagar os estudos."]],
          slides: [
            { title: "Comece pela FAFSA", bullets: ["Free Application for Federal Student Aid", "Só em studentaid.gov", "Nunca pague a um site para a preencher"] },
            { title: "Condenações e apoio", bullets: ["As regras mudaram nos últimos anos", "Não pense logo que não pode ter apoio", "Veja studentaid.gov ou o gabinete de apoio"] },
            { title: "Use a IA com cuidado", bullets: ["Explicar termos como Pell Grant", "Preparar perguntas para o gabinete de apoio", "Dados pessoais só no site oficial"] }
          ],
          sources: [{ name: "Federal Student Aid: studentaid.gov", url: "https://studentaid.gov/" }],
          tryIt: "Tarefa final: escreva o seu objetivo de estudo ligado a um emprego, verifique um programa verdadeiro com as cinco perguntas, peça à IA um plano de estudo de quatro semanas, deixe-a ensinar-lhe e fazer-lhe perguntas sobre o primeiro tema e marque as suas duas primeiras sessões no calendário. Se o programa for de uma faculdade ou escola profissional, junte três perguntas para o gabinete de apoio financeiro.",
          youCanNow: "planear, encontrar, verificar e pagar a sua educação contínua, e estudar com a IA como explicador.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer FAFSA?", options: ["Federal Aid for Students and Adults", "Free Application for Federal Student Aid", "First Approved Funding for School Admission", "Financial Account for Student Assistance"], answer: 1, why: "FAFSA é a Free Application for Federal Student Aid, o pedido gratuito de apoio federal para estudantes." },
            { objective: "O6", q: "Um site pede uma taxa para preencher a sua FAFSA. O que faria?", options: ["Pagar para poupar tempo", "Dar-lhes os seus dados fiscais", "Pedir à IA que a preencha com o seu número da Segurança Social", "Preenchê-la de graça em studentaid.gov"], answer: 3, why: "A FAFSA é gratuita em studentaid.gov, e os dados privados só vão para lá." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Aprender com a IA",
        questions: [
          { objective: "O4", q: "Qual é um uso honesto da IA para a escola?", options: ["Copiar as respostas dela para os trabalhos de casa", "Pô-la a escrever a sua redação para entregar", "Pô-la a fazer o seu teste", "Pedir-lhe que explique um tema e lhe faça perguntas"], answer: 3, why: "Explicar e fazer perguntas ajudam a aprender." },
          { objective: "O4", q: "Não percebe uma explicação. O que pede?", options: ["\"Explica de outra maneira.\"", "\"Faz os meus trabalhos de casa.\"", "\"Qual é a minha palavra-passe?\"", "Nada; desiste"], answer: 0, why: "Uma nova explicação ajuda muitas vezes." },
          { objective: "O5", q: "Que plano de estudo funciona melhor?", options: ["Estudar só quando lhe apetece", "Uma noite longa antes do teste", "Sessões curtas e regulares", "Nenhum plano"], answer: 2, why: "Sessões regulares são melhores do que estudar à última hora." },
          { objective: "O6", q: "Onde se preenche a FAFSA?", options: ["Num link enviado por SMS", "Em qualquer site que cobre uma taxa", "Dentro de uma conversa com a IA", "Em studentaid.gov, de graça"], answer: 3, why: "A FAFSA é gratuita no site oficial." },
          { objective: "O6", q: "Tem uma condenação e quer apoio. O que faz?", options: ["Pergunta a um desconhecido", "Pensa logo que não pode ter apoio", "Vê as regras atuais em studentaid.gov ou pergunta ao gabinete de apoio financeiro", "Desiste de estudar"], answer: 2, why: "As regras mudaram; as fontes oficiais conhecem as regras atuais." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA e Educação Contínua",
    questions: [
      { objective: "O1", q: "Um bom objetivo de estudo é:", options: ["Ao acaso", "Ligado a um emprego que você quer", "O que tem mais publicidade", "O mais longo possível"], answer: 1, why: "Objetivos ligados a um emprego mantêm o estudo útil." },
      { objective: "O1", q: "Um certificado é:", options: ["Prova de que terminou uma formação numa competência", "Um empréstimo", "Uma oferta de emprego", "Uma matrícula de carro"], answer: 0, why: "Os certificados mostram as competências aos empregadores." },
      { objective: "O1", q: "Um exame de equivalência ao ensino secundário, como o GED:", options: ["Mostra competências do nível do ensino secundário", "É um exame de condução", "É uma candidatura a emprego", "É um empréstimo"], answer: 0, why: "É uma alternativa ao diploma do ensino secundário." },
      { objective: "O1", q: "Para um emprego que precisa de licença, confirme com:", options: ["Só a IA", "A entidade de licenças do seu estado", "Um boato", "Ninguém"], answer: 1, why: "As entidades definem e explicam as regras." },
      { objective: "O2", q: "Os American Job Centers são pagos por:", options: ["Uma empresa de redes sociais", "Um banco privado", "O Departamento do Trabalho dos EUA", "Um credor de empréstimos rápidos"], answer: 2, why: "Fazem parte da rede do Departamento do Trabalho." },
      { objective: "O2", q: "Os serviços dos American Job Centers:", options: ["São só na internet", "São iguais em todo o lado", "Custam muito", "Variam, por isso ligue ou vá lá confirmar"], answer: 3, why: "Cada centro oferece serviços diferentes." },
      { objective: "O2", q: "Um community college é:", options: ["Um banco", "Só um programa da prisão", "Uma faculdade local e mais barata", "Uma agência de emprego"], answer: 2, why: "Os community colleges dão certificados e cursos." },
      { objective: "O2", q: "Depois de a IA sugerir um programa, você deve:", options: ["Confirmá-lo no site do próprio programa", "Inscrever-se logo", "Pagar a um desconhecido", "Ignorá-lo"], answer: 0, why: "A IA pode indicar programas que não existem." },
      { objective: "O3", q: "\"Acreditado\" quer dizer:", options: ["Gratuito", "Caro", "Só na internet", "Aprovado por um grupo oficial de qualidade"], answer: 3, why: "A acreditação verifica a qualidade." },
      { objective: "O3", q: "Colocação profissional quer dizer:", options: ["Uma secretária", "Ajuda para encontrar emprego depois de terminar", "Um teste", "Um empréstimo"], answer: 1, why: "Liga os formados a empregos." },
      { objective: "O3", q: "As respostas sobre o custo de um programa devem vir:", options: ["Só da IA", "Do programa, por escrito", "De um boato", "De um anúncio no ecrã"], answer: 1, why: "As respostas escritas do programa são de confiança." },
      { objective: "O4", q: "Um bom pedido de explicação diz:", options: ["O número do seu processo", "O seu número da Segurança Social", "Só \"ajuda\"", "O que está a estudar e o seu nível"], answer: 3, why: "O tema e o nível ajudam a IA a ensinar bem." },
      { objective: "O4", q: "A IA errou numa resposta de matemática. Quem tem a última palavra?", options: ["O seu professor e o seu livro", "A IA", "Um desconhecido na internet", "Ninguém"], answer: 0, why: "A IA pode errar, mesmo em matemática." },
      { objective: "O4", q: "Pôr a IA a escrever o seu trabalho é:", options: ["Obrigatório", "Sempre permitido", "Contra as regras da escola, e você perde a aprendizagem", "Uma boa prática"], answer: 2, why: "Honestidade académica quer dizer fazer o seu próprio trabalho." },
      { objective: "O5", q: "Estudar à última hora quer dizer:", options: ["Uma biblioteca", "Estudo curto e regular", "Um grupo de estudo", "Aprender muito no último momento"], answer: 3, why: "Estudar à última hora dá menos resultado do que estudar com regularidade." },
      { objective: "O5", q: "Para cumprir um plano de estudo, pode:", options: ["Não planear", "Confiar só na memória", "Marcar as sessões no calendário com lembretes", "Estudar só no dia do teste"], answer: 2, why: "Os lembretes mantêm-no no caminho." },
      { objective: "O5", q: "Se faltar a uma sessão de estudo, deve:", options: ["Desistir do programa", "Fazer só a seguinte", "Começar outra vez do zero", "Achar que não há esperança"], answer: 1, why: "Uma sessão perdida não acaba com o seu progresso." },
      { objective: "O6", q: "FAFSA quer dizer:", options: ["Free Application for Federal Student Aid", "Fast Application for Student Accounts", "Federal Account for Savings", "Financial Aid Service Agency"], answer: 0, why: "É o pedido federal gratuito de apoio para estudantes." },
      { objective: "O6", q: "Uma bolsa (grant) normalmente:", options: ["Não tem de ser devolvida", "Tem de ser devolvida com juros", "É um tipo de cartão de crédito", "É uma taxa"], answer: 0, why: "As bolsas não se devolvem; os empréstimos sim." },
      { objective: "O6", q: "Os dados pessoais e fiscais para a FAFSA devem ser escritos:", options: ["Na IA", "Só em studentaid.gov", "Numa SMS para um desconhecido", "Em qualquer site"], answer: 1, why: "As informações privadas só vão para o site oficial." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 8, 10, 11, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Objetivo ligado a um emprego",
        objective: "O1",
        notYet: "O objetivo é vago ou não está ligado a um emprego.",
        meets: "Uma frase que diz o emprego e a formação de que ele precisa.",
        exceeds: "Indica se o emprego precisa de uma licença do estado e onde confirmar."
      },
      {
        name: "Programa verificado",
        objective: "O3",
        notYet: "Nenhum programa, ou menos de cinco perguntas respondidas.",
        meets: "Um programa verdadeiro verificado com as cinco perguntas, respondidas pelo programa.",
        exceeds: "As respostas sobre o custo estão por escrito, e foi comparado um segundo programa."
      },
      {
        name: "A IA como explicador",
        objective: "O4",
        notYet: "A IA fez o trabalho, ou não houve perguntas de treino.",
        meets: "A IA explicou o primeiro tema, deu um exemplo e fez perguntas ao aluno.",
        exceeds: "O aluno pediu à IA que explicasse de outra maneira quando ficou bloqueado."
      },
      {
        name: "Plano de estudo no calendário",
        objective: "O5",
        notYet: "Nenhum plano, ou nenhuma sessão no calendário.",
        meets: "Um plano de quatro semanas com sessões curtas e regulares, e as duas primeiras sessões no calendário.",
        exceeds: "As sessões têm lembretes e cabem à volta do trabalho e das consultas."
      },
      {
        name: "Perguntas sobre apoio financeiro",
        objective: "O6",
        notYet: "Faltam, quando o programa é de uma faculdade ou escola profissional.",
        meets: "Três perguntas para o gabinete de apoio financeiro.",
        exceeds: "Indica também onde preencher a FAFSA de graça."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (rubrica)",
      "Alunos que se inscrevem num programa de equivalência ao ensino secundário, de certificado ou de faculdade em 90 dias (inquérito de seguimento)",
      "Alunos que preenchem a FAFSA ou pedem outro apoio em 90 dias",
      "Alunos que dizem usar a IA como explicador todas as semanas (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com internet e uma aplicação de calendário",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Papel e caneta para o objetivo e as perguntas sobre o programa",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Tenha à mão os contactos do American Job Center, da escola para adultos e do community college mais perto.",
      "Explique que a IA é só uma ajuda para estudar; usá-la para fazer os trabalhos vai contra as regras da escola.",
      "Nunca peça aos alunos que escrevam números da Segurança Social, dados fiscais ou detalhes do processo na IA; a FAFSA faz-se só em studentaid.gov, em privado.",
      "Envie as perguntas sobre condenações e apoio para studentaid.gov ou para um gabinete de apoio financeiro, porque as regras mudam.",
      "Avalie a tarefa final com a rubrica e dê comentários sobre uma linha em Ainda não de cada vez."
    ]
  }
};
