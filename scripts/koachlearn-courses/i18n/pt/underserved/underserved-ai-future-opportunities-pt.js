"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-future-opportunities.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the United States (BLS, Occupational Outlook Handbook, American Job Centers): US names are kept and explained.

module.exports = {
  id: "underserved-ai-future-opportunities-pt",
  lang: "pt",
  translationOf: "underserved-ai-future-opportunities",
  category: "Undeserved Community",
  name: "IA e Oportunidades para o Futuro",
  skills: "Ver onde a IA está a mudar o trabalho, Pesquisar uma profissão em crescimento, Verificar dados de emprego em sites oficiais, Encontrar formação gratuita, Fazer um plano de aprendizagem",
  outcome: "escolher uma profissão em crescimento que lhe interesse, pesquisá-la com um assistente de IA gratuito e com o site oficial dos EUA sobre o futuro dos empregos, e escrever um plano simples de três passos para começar a aprender para ela com formação gratuita perto de você.",
  about: [
    "A IA está a mudar muitos trabalhos: em lojas, escritórios, armazéns, hospitais, escolas e em casa. Isso pode assustar. Este curso mostra como transformar essa mudança numa oportunidade para você e para a sua família.",
    "Você vai aprender onde a IA aparece no trabalho, como usar um assistente de IA gratuito para explorar profissões, como verificar o que ele diz em sites oficiais e como encontrar formação gratuita na sua biblioteca, numa faculdade comunitária (community college) ou num American Job Center (centro de emprego dos EUA).",
    "Pode fazer todas as lições num telefone ou num computador gratuito da biblioteca. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva um plano de uma página para uma profissão em crescimento: o que é a profissão, quanto paga e com que rapidez está a crescer (verificado no Occupational Outlook Handbook oficial), duas habilidades de que precisa e três passos que vai dar no próximo mês usando formação gratuita perto de você.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos de comunidades desfavorecidas que trabalham em lojas, escritórios, armazéns, saúde, restauração ou em casa, ou que procuram trabalho, e que se preocupam com a forma como a IA vai mudar os seus empregos.",
    startingPoint: "Conhecem bem o seu próprio trabalho e usam um telefone. Já ouviram dizer que a IA está a mudar os empregos, mas não sabem que profissões estão a crescer, onde encontrar dados oficiais sobre empregos nem onde ter formação gratuita.",
    gap: "A IA está a mudar muitas tarefas no trabalho, e quem não tem um plano pode ficar para trás. Os alunos precisam de encontrar profissões em crescimento com dados oficiais, usar a IA para as explorar, encontrar formação gratuita e dar passos pequenos com datas, evitando ofertas falsas de emprego e de formação.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca",
      "Custo: só sites oficiais gratuitos e formação gratuita ou de baixo custo",
      "A IA pode errar sobre salários, licenças e formação: os alunos verificam em bls.gov/ooh e nos sites oficiais do estado",
      "Risco de privacidade e de burla: nada de número da Segurança Social, números de banco ou palavras-passe na IA ou em sites de emprego"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma profissão que você ou a sua família conhecem", action: "identificar as tarefas em que a IA pode ajudar e as tarefas que ainda precisam de uma pessoa", standard: "dando pelo menos dois exemplos de cada" },
    { id: "O2", condition: "Usando o Occupational Outlook Handbook em bls.gov/ooh", action: "encontrar uma profissão em crescimento e anotar o seu salário mediano, a formação e as perspetivas de emprego", standard: "a partir da página atual" },
    { id: "O3", condition: "Usando um assistente de IA gratuito", action: "fazer perguntas claras sobre o dia a dia e as habilidades de uma profissão e depois verificar os dados sobre salário, licença e formação em sites oficiais", standard: "sem detalhes privados no pedido" },
    { id: "O4", condition: "Com as habilidades de que uma profissão precisa", action: "encontrar perto de você dois lugares gratuitos ou de baixo custo para as aprender", standard: "anotando o nome, o número de telefone e o horário de cada um" },
    { id: "O5", condition: "Com um objetivo de emprego", action: "criar um plano de uma página com três passos pequenos e uma data para cada um", standard: "com cada passo possível numa ou duas semanas e adaptado ao seu tempo e à sua família" },
    { id: "O6", condition: "Com uma oferta de emprego ou de formação", action: "procurar nela os sinais de alerta de burla e manter os números privados de fora", standard: "antes de pagar, assinar ou partilhar qualquer coisa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como a IA está a mudar o trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Onde a IA aparece hoje no trabalho",
          minutes: 4,
          goal: "Dizer três formas como a IA já é usada nos trabalhos à sua volta.",
          text: [
            "A IA é um programa de computador que faz tarefas que normalmente precisam de uma pessoa, como escrever, organizar, responder a perguntas ou encontrar padrões. Talvez já a veja todos os dias.",
            "Numa loja, a IA ajuda a decidir quanto stock encomendar. Num centro de atendimento telefónico, um chatbot responde a perguntas simples antes de uma pessoa continuar. Numa clínica, um programa ajuda a escrever as notas das consultas. Num armazém, leitores e robôs ajudam a seguir as caixas.",
            "Na maioria dos trabalhos, a IA não substitui o trabalho todo. Fica com algumas tarefas, e as pessoas fazem o resto: falar com os clientes, resolver problemas, reparar coisas, cuidar dos outros e tomar decisões."
          ],
          words: [["IA", "abreviatura de inteligência artificial: programas de computador que fazem tarefas que normalmente precisam de uma pessoa."], ["Tarefa", "uma parte de um trabalho, como atender o telefone ou contar o stock."]],
          slides: [
            { title: "A IA já está no trabalho", bullets: ["Lojas: encomendar stock", "Atendimento telefónico: chatbots respondem a perguntas simples", "Clínicas: ajuda a escrever notas", "Armazéns: seguir as caixas"] },
            { title: "A IA fica com tarefas, não com trabalhos inteiros", bullets: ["O programa faz algumas tarefas", "As pessoas fazem o resto"] },
            { title: "O que as pessoas ainda fazem melhor", bullets: ["Falar com as pessoas e cuidar delas", "Resolver problemas novos", "Reparar coisas e tomar decisões"] }
          ],
          tryIt: "Pense num trabalho que você ou um familiar já teve. Anote duas tarefas em que a IA poderia ajudar e duas tarefas que ainda precisam de uma pessoa.",
          youCanNow: "dizer formas como a IA é usada no trabalho e explicar porque as pessoas continuam a ser necessárias.",
          quickCheck: [
            { objective: "O1", q: "O que é a IA?", options: ["Um programa que faz tarefas que normalmente precisam de uma pessoa", "Um novo tipo de telefone", "Um programa de emprego do governo", "Um robô que faz todos os trabalhos"], answer: 0, why: "A IA é um programa que consegue escrever, organizar, responder a perguntas ou encontrar padrões." },
            { objective: "O1", q: "Numa clínica, um programa escreve as notas das consultas. Que tarefa uma pessoa ainda faz?", options: ["Escrever todas as palavras das notas", "Confortar o doente e cuidar dele", "Contar as notas", "Nada; o programa faz tudo"], answer: 1, why: "A IA fica com algumas tarefas, mas as pessoas continuam a cuidar dos outros e a tomar decisões." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Profissões em crescimento e as habilidades de que precisam",
          minutes: 5,
          goal: "Encontrar uma profissão em crescimento e o seu salário no Occupational Outlook Handbook oficial.",
          text: [
            "Algumas profissões estão a crescer por causa da tecnologia, e outras crescem porque as pessoas vão sempre precisar delas, como a saúde, os ofícios técnicos e o cuidado de crianças e de idosos.",
            "O Bureau of Labor Statistics (o serviço de estatísticas do trabalho dos EUA) tem um site gratuito chamado Occupational Outlook Handbook, em bls.gov/ooh. Para centenas de profissões, diz o que é o trabalho, o salário habitual, a formação necessária e com que rapidez se espera que a profissão cresça.",
            "Por exemplo, o Handbook prevê que as profissões de informática e tecnologias de informação, em conjunto, cresçam mais depressa do que a média de 2025 a 2035. Números como estes são atualizados, por isso leia sempre você mesmo a página atual."
          ],
          steps: ["Vá a bls.gov/ooh num telefone ou num computador da biblioteca.", "Escolha um grupo de profissões, como Healthcare (saúde) ou Computer and Information Technology (informática).", "Clique numa profissão.", "Anote o salário, a formação necessária e as perspetivas de emprego."],
          words: [["Perspetivas de emprego", "com que rapidez se espera que o número de empregos cresça ou diminua (em inglês, \"job outlook\")."], ["Salário mediano", "o salário do meio: metade dos trabalhadores ganha mais e metade ganha menos (em inglês, \"median pay\")."]],
          sources: [{ name: "U.S. Bureau of Labor Statistics: Occupational Outlook Handbook, Computer and Information Technology", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" }],
          slides: [
            { title: "Profissões que estão a crescer", bullets: ["Saúde e cuidados a pessoas", "Ofícios técnicos", "Informática e tecnologia"] },
            { title: "O seu guia gratuito de profissões: bls.gov/ooh", bullets: ["O que é o trabalho", "Salário habitual e formação necessária", "Com que rapidez a profissão está a crescer"] },
            { title: "Como usar", bullets: ["Escolha um grupo de profissões", "Clique numa profissão", "Anote o salário, a formação e as perspetivas"] }
          ],
          tryIt: "Abra bls.gov/ooh, escolha uma profissão que lhe interesse e anote o salário mediano, a formação de que precisa e as perspetivas de emprego.",
          youCanNow: "procurar qualquer profissão no Occupational Outlook Handbook oficial e ler o salário, a formação e as perspetivas.",
          quickCheck: [
            { objective: "O2", q: "Quem gere o Occupational Outlook Handbook?", options: ["Um site privado de empregos", "Uma empresa de notícias", "O Bureau of Labor Statistics dos EUA", "Uma faculdade comunitária"], answer: 2, why: "O Handbook em bls.gov/ooh é gerido pelo Bureau of Labor Statistics dos EUA." },
            { objective: "O2", q: "Um amigo diz-lhe o salário de uma profissão a partir de uma página que guardou há anos. O que faz?", options: ["Usa o número dele", "Imagina um número mais alto", "Pede à IA para o confirmar", "Lê a página atual em bls.gov/ooh"], answer: 3, why: "Os números de salário e de perspetivas são atualizados, por isso lê você mesmo a página atual." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar a IA para explorar uma profissão",
          minutes: 5,
          goal: "Fazer perguntas claras a um assistente de IA gratuito sobre uma profissão e depois verificar as respostas.",
          text: [
            "Um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, pode explicar uma profissão com palavras simples, fazer a lista das habilidades de que precisa e sugerir perguntas para fazer a quem trabalha nela.",
            "Diga-lhe a sua situação sem detalhes privados. Por exemplo: \"Trabalhei 3 anos num restaurante de comida rápida e gosto de ajudar pessoas. Explique o que faz um assistente médico num dia normal, com palavras simples.\"",
            "A IA pode errar sobre salários, licenças e formação. Verifique esses dados em bls.gov/ooh ou no site oficial do seu estado antes de fazer planos."
          ],
          steps: ["Abra um assistente de IA gratuito.", "Diga-lhe a profissão e um pouco da sua experiência.", "Pergunte como é um dia normal e que habilidades são precisas.", "Verifique o salário e a formação em bls.gov/ooh."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA."], ["Licença", "uma autorização oficial do estado para fazer certos trabalhos."]],
          slides: [
            { title: "A IA pode ajudar você a explorar", bullets: ["Explicar uma profissão com palavras simples", "Fazer a lista das habilidades necessárias", "Sugerir perguntas para fazer aos trabalhadores"] },
            { title: "Um bom pedido", bullets: ["A profissão sobre a qual quer aprender", "Um pouco da sua experiência", "Como quer a resposta: palavras simples, uma lista"] },
            { title: "Verifique sempre", bullets: ["Salários, licenças e formação podem estar errados", "Verifique em bls.gov/ooh ou no site do seu estado"] }
          ],
          tryIt: "Peça a um assistente de IA para explicar como é um dia normal na profissão que escolheu e quais são as cinco habilidades principais. Compare um dado com o que diz bls.gov/ooh.",
          youCanNow: "usar a IA para aprender sobre uma profissão e verificar os dados num site oficial.",
          quickCheck: [
            { objective: "O3", q: "Que dados da IA tem de verificar em sites oficiais?", options: ["Salários, licenças e formação", "Como se escreve o nome da profissão", "O que quer dizer a palavra \"trabalho\"", "O nome da IA"], answer: 0, why: "A IA pode errar sobre salários, licenças e formação, por isso você verifica-os." },
            { objective: "O3", q: "Quer que a IA explique o trabalho de supervisor de armazém. O que inclui?", options: ["O seu número da Segurança Social", "A sua experiência e do que gosta, sem detalhes privados", "Os seus dados bancários", "Nada sobre você"], answer: 1, why: "A sua experiência ajuda a IA a explicar a profissão para você; os detalhes privados ficam de fora." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como a IA está a mudar o trabalho",
        questions: [
          { objective: "O1", q: "Na maioria dos trabalhos, o que faz a IA?", options: ["Substitui todos os trabalhadores", "Fica com algumas tarefas enquanto as pessoas fazem o resto", "Nada", "Toma todas as decisões"], answer: 1, why: "A IA normalmente faz algumas tarefas; as pessoas continuam a fazer as partes que precisam de julgamento e de cuidado." },
          { objective: "O2", q: "Que site oficial gratuito mostra o salário, a formação e as perspetivas de uma profissão?", options: ["Uma página de rede social", "Um anúncio que aparece no ecrã", "O Occupational Outlook Handbook em bls.gov/ooh", "Um link numa SMS"], answer: 2, why: "O Bureau of Labor Statistics gere o Occupational Outlook Handbook." },
          { objective: "O2", q: "O que quer dizer \"salário mediano\"?", options: ["O salário mais alto", "O salário mais baixo", "O salário depois dos impostos", "O salário do meio: metade ganha mais, metade ganha menos"], answer: 3, why: "A mediana é o número do meio." },
          { objective: "O3", q: "A IA diz-lhe que uma profissão não precisa de licença no seu estado. O que faz?", options: ["Verifica no site oficial do seu estado ou em bls.gov/ooh", "Confia", "Deixa o seu emprego hoje", "Conta a toda a gente"], answer: 0, why: "A IA pode errar sobre licenças; os sites oficiais são a fonte de confiança." },
          { objective: "O3", q: "Qual é o melhor pedido para explorar uma profissão?", options: ["\"empregos\"", "\"Trabalhei 3 anos em comida rápida e gosto de ajudar pessoas. Explique o que faz um assistente médico num dia, com palavras simples.\"", "\"Aqui está o meu número da Segurança Social\"", "\"dinheiro\""], answer: 1, why: "Diz a profissão, dá a sua experiência e diz como quer a resposta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Preparar-se para o próximo passo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar formação gratuita perto de você",
          minutes: 5,
          goal: "Encontrar dois lugares gratuitos ou de baixo custo para aprender as habilidades da sua profissão.",
          text: [
            "Não precisa de muito dinheiro para começar a aprender. As bibliotecas públicas muitas vezes têm aulas de informática gratuitas e aprendizagem gratuita pela internet. As faculdades comunitárias (community colleges) têm certificados de baixo custo, e muitos alunos têm direito a apoio financeiro.",
            "Os American Job Centers (centros de emprego) funcionam com o Departamento do Trabalho dos EUA. Ajudam na procura de emprego, com encaminhamentos para empregos e com formação. Alguns serviços têm regras de elegibilidade, por isso pergunte ao centro da sua zona a que tem direito. Encontre um com o American Job Center Finder do CareerOneStop ou ligue para 1-877-US-2JOBS.",
            "Pergunte a um assistente de IA gratuito: \"Que formas gratuitas há de aprender as habilidades básicas para um trabalho de assistente médico?\" Depois verifique cada ideia com a própria biblioteca, faculdade ou centro de emprego."
          ],
          steps: ["Pergunte na sua biblioteca que aulas gratuitas e aprendizagem pela internet oferece.", "Procure a faculdade comunitária mais próxima e os seus programas de certificado.", "Encontre o American Job Center mais próximo com o localizador do CareerOneStop.", "Anote dois lugares, os números de telefone e os horários."],
          words: [["Certificado", "um programa de formação curto que prova que aprendeu uma habilidade de trabalho."], ["American Job Center", "um serviço local, que funciona com o Departamento do Trabalho dos EUA, que ajuda as pessoas a encontrar emprego e formação."]],
          sources: [{ name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" }, { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          slides: [
            { title: "Lugares gratuitos e de baixo custo para aprender", bullets: ["Aulas na biblioteca pública e aprendizagem pela internet", "Certificados de faculdades comunitárias", "American Job Centers"] },
            { title: "American Job Centers", bullets: ["Ajudam na procura de emprego e com formação", "Alguns serviços têm regras de elegibilidade", "Encontre um: localizador do CareerOneStop ou 1-877-US-2JOBS"] },
            { title: "Use a IA e depois ligue", bullets: ["Peça à IA formas gratuitas de aprender", "Verifique cada ideia com o próprio lugar"] }
          ],
          tryIt: "Encontre dois lugares perto de você onde possa aprender as habilidades da sua profissão. Anote o nome, o número de telefone e o horário de cada um.",
          youCanNow: "encontrar formação gratuita ou de baixo custo perto de você para a profissão que quer.",
          quickCheck: [
            { objective: "O4", q: "O que as faculdades comunitárias muitas vezes oferecem?", options: ["Carros grátis", "Só cursos de quatro anos", "Certificados de baixo custo, com apoio financeiro para muitos alunos", "Empregos pagos no primeiro dia"], answer: 2, why: "As faculdades comunitárias têm certificados de baixo custo, e muitos alunos têm direito a apoio." },
            { objective: "O4", q: "Não sabe se tem direito a formação num American Job Center. O que faz?", options: ["Parte do princípio de que não tem", "Paga a um site para saber", "Desiste da formação", "Pergunta ao centro da sua zona a que tem direito"], answer: 3, why: "Alguns serviços têm regras de elegibilidade, por isso pergunta diretamente ao centro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Transformar um objetivo em passos pequenos",
          minutes: 4,
          goal: "Dividir um objetivo de emprego em três passos pequenos com datas.",
          text: [
            "Um objetivo grande, como \"ter um emprego melhor\", pode parecer grande demais. Passos pequenos com datas tornam-no real.",
            "Um bom passo é algo que consegue acabar numa ou duas semanas: \"Ligar para a biblioteca na terça-feira para me inscrever na aula de informática.\" \"Falar com uma pessoa que trabalha como assistente médico até ao dia 15.\"",
            "Pode pedir ajuda a um assistente de IA: \"Ajude-me a dividir o meu objetivo de ser assistente médico em três passos pequenos para o próximo mês. Tenho 3 horas por semana.\" Depois mude o plano para que sirva para a sua vida, a sua família e o seu horário."
          ],
          steps: ["Escreva o seu objetivo numa frase.", "Peça à IA para o dividir em três passos pequenos.", "Dê uma data a cada passo.", "Mude o plano para se adaptar ao seu tempo e à sua família."],
          words: [["Objetivo", "algo que quer alcançar."], ["Prazo", "a data em que planeia acabar um passo."]],
          slides: [
            { title: "Objetivos grandes precisam de passos pequenos", bullets: ["\"Ter um emprego melhor\" é grande demais", "Passos pequenos tornam-no real"] },
            { title: "Um bom passo", bullets: ["Consegue acabá-lo numa ou duas semanas", "Tem uma data", "Exemplo: ligar para a biblioteca na terça-feira"] },
            { title: "Deixe a IA ajudar e depois ajuste", bullets: ["Diga-lhe o seu objetivo e o seu tempo", "Mude o plano para servir à sua vida"] }
          ],
          tryIt: "Escreva o seu objetivo de emprego numa frase. Peça a um assistente de IA para o dividir em três passos para o próximo mês e depois acrescente uma data a cada passo.",
          youCanNow: "transformar um objetivo de emprego em três passos pequenos com datas.",
          quickCheck: [
            { objective: "O5", q: "Qual é um passo pequeno que consegue acabar numa ou duas semanas?", options: ["Falar com um assistente médico até ao dia 15", "Ser enfermeiro", "Ter um emprego melhor", "Mudar de carreira um dia"], answer: 0, why: "Um passo pequeno é concreto, possível em pouco tempo e tem uma data." },
            { objective: "O5", q: "O plano da IA diz para estudar 10 horas por semana, mas você tem 3. O que faz?", options: ["Segue-o na mesma", "Muda o plano para se adaptar ao seu tempo", "Desiste", "Pede à IA para estudar por você"], answer: 1, why: "Você muda o plano para que sirva para a sua vida, a sua família e o seu horário." }
          ]
        },
        {
          objectives: ["O6", "O5"],
          title: "O seu plano, e ficar em segurança enquanto procura",
          minutes: 5,
          goal: "Terminar o seu plano de uma página e reconhecer ofertas falsas de emprego e de formação.",
          text: [
            "Junte tudo numa página: a profissão, o salário e as perspetivas de bls.gov/ooh, duas habilidades de que precisa, dois lugares para aprender e três passos com datas. Guarde-o no telefone ou imprima-o na biblioteca.",
            "Tenha cuidado. Os burlões publicam empregos falsos e formações falsas. Sinais de alerta: pedem para pagar para ter o emprego, pedem o seu número do banco ou da Segurança Social antes de uma entrevista, prometem um salário alto por pouco trabalho ou apressam você.",
            "Nunca escreva o seu número da Segurança Social, dados bancários ou palavras-passe num assistente de IA. Verifique qualquer programa de formação com a sua biblioteca, o centro de emprego ou o site oficial da escola antes de pagar ou assinar alguma coisa."
          ],
          steps: ["Escreva a profissão, o salário e as perspetivas.", "Acrescente duas habilidades e dois lugares para aprender.", "Acrescente os seus três passos com datas.", "Procure em cada oferta os sinais de alerta de burla antes de partilhar alguma coisa."],
          words: [["Burla", "um truque para roubar dinheiro ou informações."]],
          slides: [
            { title: "O seu plano de uma página", bullets: ["Profissão, salário e perspetivas (de bls.gov/ooh)", "Duas habilidades e dois lugares para aprender", "Três passos com datas"] },
            { title: "Sinais de alerta de emprego falso", bullets: ["Tem de pagar para ter o emprego", "Querem o número do banco ou da Segurança Social antes da entrevista", "Salário alto por pouco trabalho, ou apressam você"] },
            { title: "Fique em segurança", bullets: ["Nada de números privados na IA", "Verifique a formação com a biblioteca ou o centro de emprego", "Verifique antes de pagar ou assinar"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de uma página com a profissão, o salário e as perspetivas, duas habilidades, dois lugares para aprender e três passos com datas. Veja se tem alguma coisa privada antes de o partilhar.",
          youCanNow: "fazer um plano real e verificado para uma profissão em crescimento e evitar as burlas de emprego mais comuns.",
          quickCheck: [
            { objective: "O6", q: "Qual é um sinal de alerta de um emprego falso?", options: ["Uma entrevista no escritório da empresa", "Um anúncio no próprio site da empresa", "Pressa para pagar antes de poder ser contratado", "Um emprego anunciado pelo seu American Job Center"], answer: 2, why: "Os empregadores verdadeiros não pedem para pagar para ter o emprego nem apressam você." },
            { objective: "O6", q: "Uma escola de formação na internet quer o pagamento hoje por um \"emprego garantido\". O que faz?", options: ["Paga hoje para guardar o lugar", "Envia o seu número do banco", "Mostra primeiro aos amigos", "Verifica no site oficial da escola, na sua biblioteca ou no centro de emprego"], answer: 3, why: "Verifique qualquer programa de formação com fontes de confiança antes de pagar ou assinar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Preparar-se para o próximo passo",
        questions: [
          { objective: "O4", q: "Onde pode muitas vezes encontrar aulas de informática gratuitas?", options: ["Num anúncio que aparece no ecrã", "Numa SMS de um desconhecido", "Na sua biblioteca pública", "Numa loja de cartões-presente"], answer: 2, why: "Muitas bibliotecas públicas têm aulas gratuitas e aprendizagem pela internet." },
          { objective: "O4", q: "O que é um American Job Center?", options: ["Um serviço local que ajuda com emprego e formação", "Uma loja", "Um banco", "Uma aplicação de rede social"], answer: 0, why: "Os American Job Centers funcionam com o Departamento do Trabalho dos EUA para ajudar quem procura emprego." },
          { objective: "O5", q: "Qual é um bom passo pequeno?", options: ["\"Ficar rico\"", "\"Um dia aprender coisas\"", "\"Ter todos os empregos\"", "\"Ligar para a biblioteca na terça-feira para me inscrever na aula de informática\""], answer: 3, why: "É pequeno, claro e tem uma data." },
          { objective: "O6", q: "Um anúncio de emprego pede-lhe para pagar $100 para ser contratado. Isto é:", options: ["Normal", "Um sinal de alerta de burla", "Um ótimo negócio", "Uma regra do governo"], answer: 1, why: "Os empregadores verdadeiros não cobram para dar um emprego." },
          { objective: "O6", q: "Uma IA sugere um programa de formação. Antes de pagar, deve:", options: ["Verificá-lo no site oficial da escola, na sua biblioteca ou no centro de emprego", "Pagar logo", "Dar à IA o seu número do banco", "Ignorar toda a formação"], answer: 0, why: "Verifique qualquer programa com uma fonte de confiança antes de pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA e Oportunidades para o Futuro",
    questions: [
      { objective: "O1", q: "A melhor descrição da IA é:", options: ["Um tipo de telefone", "Um programa que faz tarefas que normalmente precisam de uma pessoa", "Um serviço do governo", "O nome de uma profissão"], answer: 1, why: "A IA é um programa que escreve, organiza, responde ou encontra padrões." },
      { objective: "O1", q: "Qual é um exemplo de IA no trabalho?", options: ["Um chatbot que responde a perguntas simples de clientes", "Um agrafador", "Um calendário de papel", "Uma vassoura"], answer: 0, why: "Os chatbots são IA que respondem a perguntas simples." },
      { objective: "O1", q: "Em que tarefa uma pessoa ainda é a melhor?", options: ["Contar os mesmos artigos vezes sem conta", "Organizar e-mails por data", "Confortar um doente preocupado", "Copiar números para uma tabela"], answer: 2, why: "Cuidar de pessoas precisa de um ser humano." },
      { objective: "O2", q: "O que é o Occupational Outlook Handbook?", options: ["Um guia gratuito do governo dos EUA sobre profissões, salários e formação", "Uma revista paga", "Uma página de rede social", "Uma aplicação de banco"], answer: 0, why: "É gerido pelo Bureau of Labor Statistics em bls.gov/ooh." },
      { objective: "O2", q: "As \"perspetivas de emprego\" dizem-lhe:", options: ["Como se vestir no trabalho", "Com que rapidez se espera que o número de empregos cresça ou diminua", "O nome do chefe", "A morada do trabalho"], answer: 1, why: "As perspetivas falam do crescimento esperado." },
      { objective: "O2", q: "Porque ler a página atual em vez de confiar num número antigo?", options: ["Os números antigos estão sempre certos", "As páginas nunca mudam", "Os números de salário e de perspetivas são atualizados com o tempo", "Não faz diferença"], answer: 2, why: "Os números dos empregos mudam, por isso leia a página oficial mais recente." },
      { objective: "O3", q: "Que pedido vai dar a resposta mais útil sobre uma profissão?", options: ["\"emprego\"", "\"ajuda\"", "\"coisas sobre trabalho\"", "\"Gosto de reparar coisas e tenho 2 anos em manutenção. Explique o que faz um técnico de AVAC (aquecimento e ar condicionado), com palavras simples.\""], answer: 3, why: "Dá a profissão, a sua experiência e o formato." },
      { objective: "O3", q: "A IA dá-lhe um valor de salário para uma profissão. Você deve:", options: ["Verificá-lo em bls.gov/ooh", "Confiar totalmente", "Publicá-lo na internet", "Ignorar todos os salários"], answer: 0, why: "A IA pode errar; verifique o salário no site oficial." },
      { objective: "O3", q: "O que é uma licença?", options: ["Uma aplicação de telefone", "Uma autorização oficial do estado para fazer certos trabalhos", "Um anúncio de emprego", "Um tipo de currículo"], answer: 1, why: "Algumas profissões precisam de uma licença do estado." },
      { objective: "O4", q: "Qual é um lugar de baixo custo para ter um certificado profissional?", options: ["Um anúncio que aparece no ecrã", "Uma faculdade comunitária", "Um desconhecido na internet", "Uma loja de cartões-presente"], answer: 1, why: "As faculdades comunitárias têm certificados de baixo custo, e o apoio financeiro pode ajudar." },
      { objective: "O4", q: "Como pode encontrar um American Job Center?", options: ["Perguntar a um burlão", "Adivinhar", "Usar o localizador do CareerOneStop ou ligar para 1-877-US-2JOBS", "Só por correio"], answer: 2, why: "Estas são as formas oficiais que o Departamento do Trabalho indica." },
      { objective: "O4", q: "Alguns serviços dos American Job Centers têm:", options: ["Regras de elegibilidade, por isso pergunte a que tem direito", "Uma palavra-passe secreta", "Um cartão-presente obrigatório", "Nenhum funcionário"], answer: 0, why: "O Departamento do Trabalho diz que alguns serviços têm requisitos de elegibilidade." },
      { objective: "O5", q: "Porque dividir um objetivo grande em passos pequenos?", options: ["Faz o objetivo desaparecer", "Torna o objetivo real e possível", "É obrigatório por lei", "Custa dinheiro"], answer: 1, why: "Passos pequenos com datas são mais fáceis de começar e de acabar." },
      { objective: "O5", q: "Um bom passo inclui:", options: ["Nenhuma data", "Algo que consegue acabar numa ou duas semanas, com uma data", "Dez anos de trabalho", "Só um desejo"], answer: 1, why: "Passos pequenos com datas fazem você avançar." },
      { objective: "O5", q: "Depois de a IA fazer um plano para você, deve:", options: ["Segui-lo exatamente, aconteça o que acontecer", "Apagá-lo", "Mudá-lo para se adaptar ao seu tempo e à sua família", "Partilhar o seu número do banco"], answer: 2, why: "Você conhece a sua vida melhor do que ninguém; ajuste o plano." },
      { objective: "O5", q: "O seu plano de uma página deve incluir:", options: ["As suas palavras-passe", "O seu número do banco", "O seu número da Segurança Social", "A profissão, o salário e as perspetivas, as habilidades, os lugares para aprender e os passos com datas"], answer: 3, why: "Estas partes fazem um plano completo e seguro." },
      { objective: "O6", q: "Uma oferta de emprego pede o seu número da Segurança Social antes de qualquer entrevista. Isto é:", options: ["Um sinal de alerta", "Normal em todos os empregos", "Uma recompensa", "Exigido pela IA"], answer: 0, why: "Pedir números privados cedo demais é um sinal de burla." },
      { objective: "O6", q: "O que nunca deve escrever num assistente de IA?", options: ["\"Faça mais simples\"", "\"Que habilidades precisa um cozinheiro?\"", "O número da sua conta bancária", "\"Dê-me três passos\""], answer: 2, why: "Os dados bancários são informações privadas." },
      { objective: "O6", q: "\"Salário alto por pouco trabalho, comece hoje!\" é muito provavelmente:", options: ["Um emprego do governo", "Um sinal de alerta de burla", "Uma aula da biblioteca", "Um certificado"], answer: 1, why: "Promessas boas demais para ser verdade são um sinal comum de burla." },
      { objective: "O6", q: "Antes de pagar um programa de formação, verifique-o com:", options: ["Um anúncio que aparece no ecrã", "Só a pessoa que o vende", "Ninguém", "O site oficial da escola, a sua biblioteca ou o centro de emprego"], answer: 3, why: "Fontes independentes e de confiança ajudam a evitar programas falsos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 3, 4, 7, 10, 12, 15, 16, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Dados da profissão", objective: "O2", notYet: "Falta o salário ou as perspetivas, ou não vêm de bls.gov/ooh.", meets: "A profissão, o que é, o salário e as perspetivas, verificados na página atual de bls.gov/ooh.", exceeds: "Também indica a formação de que a profissão precisa." },
      { name: "Habilidades", objective: "O3", notYet: "Nenhuma habilidade, ou habilidades que não servem para a profissão.", meets: "Duas habilidades de que a profissão precisa.", exceeds: "Indica que habilidade o aluno já tem de trabalhos anteriores." },
      { name: "Lugares para aprender", objective: "O4", notYet: "Menos de dois lugares, ou sem contactos.", meets: "Dois lugares gratuitos ou de baixo custo com nome, telefone e horário.", exceeds: "Indica o que cada lugar oferece e as regras de elegibilidade a perguntar." },
      { name: "Três passos com datas", objective: "O5", notYet: "Os passos são vagos ou não têm datas.", meets: "Três passos pequenos para o próximo mês, cada um com uma data.", exceeds: "Adaptados ao tempo real e ao horário da família do aluno." },
      { name: "Seguro para partilhar", objective: "O6", notYet: "O plano tem um número privado, ou uma oferta de formação não foi verificada.", meets: "Nenhum número privado, e as ofertas foram verificadas para ver os sinais de alerta.", exceeds: "Sabe dizer os sinais de alerta que procurou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem pelo menos um passo do seu plano em 30 dias (inquérito de seguimento)",
      "Alunos que se inscrevem numa formação gratuita ou de baixo custo em 90 dias",
      "Alunos que conseguem um emprego ou uma promoção na área escolhida em 12 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "O Occupational Outlook Handbook em bls.gov/ooh",
      "Papel ou uma nota no telefone para o plano de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Abram juntos bls.gov/ooh num projetor e vejam uma profissão passo a passo antes de os alunos escolherem a sua.",
      "Traga uma lista das bibliotecas, faculdades comunitárias e do American Job Center mais próximo.",
      "Lembre aos alunos que verifiquem os dados de salário e de licença em sites oficiais, e não só na IA.",
      "Revejam os sinais de alerta de empregos e formações falsos; nunca peça aos alunos para partilhar números privados.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
