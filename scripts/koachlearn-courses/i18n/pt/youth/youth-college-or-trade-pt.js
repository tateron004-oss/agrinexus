"use strict";

// Koach Learn course (Portuguese translation of youth/youth-college-or-trade.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US names (FAFSA, studentaid.gov, apprenticeship.gov, ASVAB, FTC, CFPB) are kept and explained.

module.exports = {
  id: "youth-college-or-trade-pt",
  lang: "pt",
  translationOf: "youth-college-or-trade",
  category: "Youth",
  name: "Escolher a Faculdade, um Ofício ou o Trabalho Depois da Escola",
  skills: "Conhecer os seus interesses e necessidades, Comparar caminhos na faculdade, Comparar ofícios, aprendizagens profissionais, as forças armadas e o trabalho, Pedir apoio financeiro, Evitar armadilhas de dívida e burlas, Fazer um plano de dois anos",
  outcome: "comparar lado a lado a faculdade, um ofício, as forças armadas e o trabalho, descobrir como pagar a sua escolha sem cair em armadilhas de dívida ou burlas, e escrever um plano de dois anos com uma alternativa.",
  about: [
    "Depois do ensino secundário não há um único caminho certo. Algumas pessoas vão para uma faculdade de quatro anos, outras começam num community college (faculdade comunitária), outras aprendem um ofício numa aprendizagem profissional, outras entram nas forças armadas e outras vão logo trabalhar e continuam a aprender no emprego. Muitas pessoas misturam estes caminhos ao longo do tempo.",
    "Neste curso você vai ver do que gosta e do que precisa, comparar os caminhos principais com as mesmas perguntas, aprender como funcionam o FAFSA e outros apoios financeiros, reconhecer armadilhas de dívida e burlas, e escrever o seu próprio plano de dois anos com uma alternativa.",
    "As regras do dinheiro, as datas e os programas mudam todos os anos. Cada lição mostra onde verificar os dados atuais, e você deve falar sobre o seu plano com um orientador da escola, um pai ou mãe ou outro adulto de confiança.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa para fazer logo. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva um plano de dois anos numa página: o seu caminho principal e uma alternativa, uma comparação de pelo menos dois caminhos com as mesmas cinco perguntas (custo, tempo, ganhar enquanto aprende, empregos prováveis, o que precisa para entrar), como vai pagar, o que vai fazer em cada seis meses e as pessoas que vão ajudar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Alunos do ensino secundário e recém-formados nos Estados Unidos que estão a decidir o que fazer depois da escola, e os pais, orientadores e mentores que os ajudam.",
    startingPoint: "Conhecem alguns dos seus interesses e já ouviram falar da faculdade, dos ofícios ou das forças armadas por amigos e familiares. Poucos compararam caminhos com as mesmas perguntas, viram o preço líquido, preencheram o FAFSA ou aprenderam a reconhecer burlas de apoio financeiro.",
    gap: "Escolher um caminho pelo que se ouve dizer pode levar a dívidas por um programa que não serve, a prazos de apoio perdidos ou a perder dinheiro em burlas. Comparar as opções com as mesmas perguntas, entender o apoio financeiro e escrever um plano de dois anos com uma alternativa ajuda os jovens a começar um caminho que lhes serve e que conseguem pagar.",
    constraints: [
      "As regras do dinheiro, as datas dos apoios e os programas mudam todos os anos; os alunos verificam em studentaid.gov, apprenticeship.gov e nos sites oficiais das escolas",
      "Sem conselhos financeiros: os alunos falam sobre os planos com um orientador, um pai ou mãe ou um adulto de confiança",
      "Privacidade e burlas: nunca partilhar o FSA ID nem números de banco ou de cartão, e nunca pagar para entregar o FAFSA",
      "Aparelhos: um telefone ou um computador da escola ou da biblioteca com internet",
      "Lições curtas e palavras simples; muitos alunos serão os primeiros da família a fazer estas escolhas"
    ],
    prerequisites: "Nenhum. O curso \"IA e Exploração de Carreiras\" é um bom primeiro curso."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Antes de comparar escolas ou empregos", action: "listar os seus interesses, pontos fortes, forma de aprender e necessidades de dinheiro, e escolher os caminhos que melhor lhe servem por agora", standard: "marcando com um círculo dois ou três dos cinco caminhos principais" },
    { id: "O2", condition: "Usando os sites das escolas e as calculadoras de preço líquido", action: "comparar um community college e uma faculdade de quatro anos com as mesmas cinco perguntas", standard: "com todas as perguntas respondidas ou marcadas para perguntar" },
    { id: "O3", condition: "Usando apprenticeship.gov e fontes oficiais", action: "comparar uma aprendizagem profissional, as forças armadas ou um emprego com formação com as mesmas cinco perguntas", standard: "perguntando pelas taxas de conclusão, de colocação em emprego e pela acreditação antes de assinar qualquer coisa" },
    { id: "O4", condition: "Usando studentaid.gov", action: "explicar os quatro tipos de apoio financeiro e planear quando e com quem vai entregar o FAFSA", standard: "com a data de abertura e os prazos deste ano anotados e sem pagar nenhuma taxa" },
    { id: "O5", condition: "Com ofertas de apoio e ofertas de bolsas de estudo", action: "separar cada oferta em dinheiro grátis, dinheiro ganho com trabalho e empréstimos, calcular o que falta pagar e reconhecer sinais de alerta de burla", standard: "acertando nos valores e dizendo onde denunciar uma burla" },
    { id: "O6", condition: "Usando as suas comparações e o seu plano de apoio", action: "escrever um plano de dois anos com um caminho principal, uma alternativa, metas de seis em seis meses, como vai pagar e quem vai ajudar", standard: "com todas as partes incluídas e uma data para o rever" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comparar os seus caminhos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conheça-se antes de escolher",
          minutes: 5,
          goal: "Escrever os seus interesses, pontos fortes, forma de aprender e necessidades de dinheiro para poder avaliar cada caminho.",
          text: [
            "Antes de comparar escolas ou empregos, olhe para si. O melhor caminho combina com o que você gosta, com aquilo em que é bom, com a forma como gosta de aprender e com o que precisa agora.",
            "Pergunte a si mesmo: Que disciplinas ou atividades fazem o tempo voar? Aprendo melhor a ler e a escrever, ou a fazer coisas com as mãos? Preciso de ganhar dinheiro em breve, para ajudar a família ou para me sustentar? Quero ficar perto de casa ou mudar-me?",
            "Há cinco caminhos principais: uma faculdade de quatro anos, um community college, uma escola de ofícios ou uma aprendizagem profissional, as forças armadas e ir trabalhar. Nenhum é melhor para todos. Um caminho ótimo para um amigo pode não servir para você.",
            "Um assistente de IA pode ajudar a pensar em profissões que combinam com as suas respostas. Use as ideias dele como uma primeira lista e depois verifique os factos com um orientador e em sites oficiais."
          ],
          steps: ["Escreva três coisas de que gosta e três coisas em que é bom.", "Escreva como aprende melhor: a ler, a ouvir ou a fazer.", "Escreva as suas necessidades de dinheiro: precisa de ganhar em breve?", "Escreva onde quer viver nos próximos dois anos.", "Liste os cinco caminhos e faça um círculo à volta dos dois ou três que melhor lhe servem por agora."],
          words: [["Interesse", "algo que gosta de fazer ou de aprender."], ["Ponto forte", "algo que faz bem."], ["Caminho", "o percurso que segue depois da escola em direção a uma profissão."]],
          slides: [
            { title: "Comece por si", bullets: ["Do que você gosta", "Aquilo em que é bom", "Como aprende e do que precisa"] },
            { title: "Perguntas a fazer a si mesmo", bullets: ["O que faz o tempo voar?", "Com as mãos, ou a ler e a escrever?", "Preciso de ganhar dinheiro em breve?"] },
            { title: "Cinco caminhos principais", bullets: ["Faculdade de quatro anos ou community college", "Escola de ofícios ou aprendizagem profissional", "As forças armadas ou ir trabalhar"] },
            { title: "Usar a IA para ter ideias", bullets: ["Peça profissões que combinem com as suas respostas", "Use isso como uma primeira lista", "Verifique os factos com um orientador"] }
          ],
          tryIt: "Responda no papel às quatro perguntas desta lição. Depois pergunte a um assistente de IA: Estes são os meus interesses e pontos fortes. Sugira cinco profissões e a formação que cada uma pede. Faça um círculo à volta dos dois ou três caminhos que melhor lhe servem.",
          youCanNow: "descrever os seus interesses, pontos fortes, forma de aprender e necessidades de dinheiro, e escolher os caminhos que vale a pena comparar.",
          quickCheck: [
            { objective: "O1", q: "Quais são os cinco caminhos principais depois do ensino secundário neste curso?", options: ["Só a faculdade e o trabalho", "Faculdade, ano sabático, viagens, desporto e música", "Só cursos pela internet", "Faculdade de quatro anos, community college, escola de ofícios ou aprendizagem profissional, as forças armadas e o trabalho"], answer: 3, why: "O curso compara estes cinco caminhos, e muitas pessoas misturam-nos ao longo do tempo." },
            { objective: "O1", q: "Você precisa de ganhar dinheiro em breve para ajudar a família. Como é que isso afeta a sua escolha?", options: ["Não importa", "Veja com atenção os caminhos em que se ganha enquanto se aprende, como uma aprendizagem profissional ou um emprego com formação", "Só uma faculdade de quatro anos é possível", "Espere alguns anos antes de decidir"], answer: 1, why: "As suas necessidades de dinheiro fazem parte do que torna um caminho certo para você." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Community college e faculdade de quatro anos",
          minutes: 5,
          goal: "Comparar um community college e uma faculdade de quatro anos com as mesmas cinco perguntas.",
          text: [
            "Um community college é uma faculdade pública de dois anos perto de casa. Oferece certificados (muitas vezes de um ano ou menos), associate degrees (cerca de dois anos) e disciplinas que pode transferir para uma faculdade de quatro anos. Costuma custar muito menos e permite viver em casa.",
            "Uma faculdade de quatro anos ou universidade oferece bachelor's degrees (licenciaturas). Algumas profissões, como professor, enfermagem com licenciatura, engenharia e contabilidade, costumam pedir uma. Os custos variam muito entre escolas públicas e privadas e entre viver em casa e numa residência estudantil.",
            "Use as mesmas cinco perguntas para cada opção: Quanto vai custar no total, depois dos apoios? Quanto tempo vai demorar? Posso ganhar dinheiro enquanto aprendo? Que empregos têm os formados e quanto ganham? O que preciso para entrar?",
            "Um caminho inteligente para muitos alunos é começar no community college e depois transferir-se. Pergunte ao community college que faculdades de quatro anos aceitam os seus créditos antes de se inscrever nas disciplinas."
          ],
          steps: ["Escolha um community college e uma faculdade de quatro anos para comparar.", "Procure o custo anual total de cada escola e a sua calculadora de preço líquido.", "Escreva o tempo para terminar, os empregos dos formados e o que precisa para entrar.", "Pergunte a um orientador sobre os acordos de transferência.", "Ponha as respostas lado a lado numa tabela."],
          words: [["Certificado", "um programa curto que prepara para um trabalho específico."], ["Associate degree", "um diploma que costuma levar cerca de dois anos."], ["Bachelor's degree", "uma licenciatura: um diploma que costuma levar cerca de quatro anos."], ["Transferência", "passar os seus créditos da faculdade para outra escola."], ["Preço líquido", "o que a faculdade custa depois de tirar as bolsas e os subsídios."]],
          slides: [
            { title: "Community college", bullets: ["Perto de casa, custo mais baixo", "Certificados e associate degrees", "Créditos que pode transferir"] },
            { title: "Faculdade de quatro anos", bullets: ["Bachelor's degrees (licenciaturas)", "Pedidos por algumas profissões", "O custo varia muito de escola para escola"] },
            { title: "Cinco perguntas para cada opção", bullets: ["Custo total depois dos apoios? Quanto tempo?", "Ganhar enquanto aprende?", "Empregos e salário depois? O que precisa para entrar?"] },
            { title: "Comece perto, depois transfira-se", bullets: ["Poupa dinheiro a muitos alunos", "Verifique primeiro que escolas aceitam os créditos"] }
          ],
          tryIt: "Faça uma tabela com as cinco perguntas do lado esquerdo e duas escolas em cima: um community college e uma faculdade de quatro anos. Preencha o que encontrar nos sites delas e marque o que ainda precisa de perguntar.",
          youCanNow: "comparar um community college e uma faculdade de quatro anos com as mesmas cinco perguntas e reconhecer um caminho de começar e depois transferir-se.",
          quickCheck: [
            { objective: "O2", q: "O que mostra uma calculadora de preço líquido?", options: ["Uma estimativa do que uma escola custa depois das bolsas e dos subsídios", "O resultado da equipa de futebol da escola", "As suas notas nos testes", "Quantos alunos vivem nas residências"], answer: 0, why: "O preço líquido é o que a faculdade custa depois das bolsas e dos subsídios." },
            { objective: "O2", q: "Você compara duas faculdades mas só olha para o preço de tabela. O que está a faltar?", options: ["Nada; só o preço importa", "As cores da escola", "As outras perguntas: tempo, ganhar enquanto aprende, empregos e salário, e o que precisa para entrar", "O número de edifícios"], answer: 2, why: "Use as mesmas cinco perguntas para cada opção." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ofícios, aprendizagens, as forças armadas e o trabalho",
          minutes: 6,
          goal: "Comparar uma aprendizagem profissional, as forças armadas e um emprego com formação com as mesmas cinco perguntas.",
          text: [
            "Uma Registered Apprenticeship (aprendizagem profissional registada) é um emprego em que você recebe salário enquanto aprende um ofício ou uma profissão com trabalhadores experientes, com aulas ao lado. Os ofícios incluem eletricista, canalizador, carpinteiro e soldador, e há aprendizagens na saúde, na informática e noutras áreas. Procure no Apprenticeship Job Finder em apprenticeship.gov.",
            "As escolas de ofícios ensinam uma competência em meses em vez de anos, mas normalmente paga-se. Antes de assinar, pergunte quantos alunos terminam, quantos conseguem emprego na área e se a escola é acreditada. Cuidado com vendas sob pressão.",
            "As forças armadas oferecem formação profissional, salário e benefícios para estudos, em troca de um compromisso de serviço de vários anos. Faz-se um teste chamado ASVAB, que ajuda a decidir para que funções você se qualifica. Fale com recrutadores de mais de um ramo, leia tudo antes de assinar e verifique o site oficial do ramo.",
            "Ir logo trabalhar também é um caminho verdadeiro. Procure empregadores que dão formação, que promovem internamente ou que ajudam a pagar aulas mais tarde. Use as mesmas cinco perguntas para comparar estes caminhos com a faculdade."
          ],
          steps: ["Procure no Apprenticeship Job Finder de apprenticeship.gov programas perto de si.", "Para qualquer escola de ofícios, pergunte pelas taxas de conclusão, de colocação em emprego e pela acreditação.", "Se está a pensar nas forças armadas, fale com mais de um ramo e leia antes de assinar.", "Nos empregos, procure formação, promoção e ajuda para pagar estudos.", "Responda às cinco perguntas para cada opção."],
          words: [["Registered Apprenticeship", "um emprego pago com formação organizada que leva a um certificado reconhecido."], ["Ofício", "um trabalho especializado que se aprende com formação, como eletricista ou soldador."], ["Acreditada", "verificada e aprovada por um organismo oficial que avalia escolas."], ["ASVAB", "o teste usado para ver para que funções militares você se qualifica."]],
          slides: [
            { title: "Aprendizagens profissionais", bullets: ["Emprego pago enquanto aprende um ofício", "Eletricista, canalizador, saúde, informática e mais", "Procure em apprenticeship.gov"] },
            { title: "Escolas de ofícios", bullets: ["Meses, não anos, mas normalmente paga-se", "Pergunte: conclusão, colocação em emprego, acreditação", "Vá-se embora perante vendas sob pressão"] },
            { title: "As forças armadas", bullets: ["Formação, salário e benefícios para estudos", "Vários anos de serviço; teste ASVAB", "Fale com mais de um ramo; leia antes de assinar"] },
            { title: "Ir trabalhar", bullets: ["Procure formação e promoção", "Alguns empregadores ajudam a pagar aulas mais tarde"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (procurar aprendizagens)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov", url: "https://www.apprenticeship.gov/" }
          ],
          tryIt: "Encontre em apprenticeship.gov uma aprendizagem profissional perto de si e um emprego que ofereça formação. Junte-os à sua tabela da última lição e responda às cinco perguntas para cada um.",
          youCanNow: "comparar aprendizagens profissionais, escolas de ofícios, as forças armadas e o trabalho com as mesmas cinco perguntas que usou para a faculdade.",
          quickCheck: [
            { objective: "O3", q: "O que torna uma Registered Apprenticeship diferente de uma escola de ofícios?", options: ["Você recebe salário enquanto aprende no emprego", "Não tem aulas", "Custa sempre mais", "Só ensina informática"], answer: 0, why: "Numa aprendizagem profissional você ganha salário enquanto aprende com trabalhadores experientes." },
            { objective: "O3", q: "Um recrutador militar quer que assine hoje. O que faz?", options: ["Assina para não perder o lugar", "Pede a um amigo que assine por si", "Não lê o contrato", "Fala com mais de um ramo, verifica o site oficial e lê antes de assinar"], answer: 3, why: "Leia tudo e compare os ramos antes de se comprometer com vários anos de serviço." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Comparar os seus caminhos",
        questions: [
          { objective: "O1", q: "Para que deve olhar primeiro antes de comparar escolas ou empregos?", options: ["O que os seus amigos estão a fazer", "Os seus interesses, pontos fortes, forma de aprender e necessidades", "Que escola tem a melhor equipa de desporto", "Só a opção mais barata"], answer: 1, why: "O melhor caminho combina com você, por isso comece por se conhecer." },
          { objective: "O2", q: "O que costuma ser verdade sobre o community college?", options: ["Custa muito mais do que uma universidade privada", "Só oferece diplomas de quatro anos", "Nunca se pode transferir", "Fica perto de casa e costuma custar menos"], answer: 3, why: "Os community colleges são locais e costumam ser muito mais baratos." },
          { objective: "O2", q: "Quer começar no community college e transferir-se mais tarde. O que deve verificar primeiro?", options: ["Que faculdades de quatro anos aceitam os seus créditos", "O menu da cantina", "O tamanho do parque de estacionamento", "Nada; todos os créditos são sempre transferidos"], answer: 0, why: "Verificar primeiro os acordos de transferência evita que perca os seus créditos." },
          { objective: "O3", q: "O que é uma Registered Apprenticeship?", options: ["Um estágio sem salário", "Um emprego pago em que aprende um ofício especializado com formação", "Um jogo de vídeo", "Um diploma de quatro anos"], answer: 1, why: "Os aprendizes recebem salário enquanto aprendem com trabalhadores experientes." },
          { objective: "O3", q: "Um vendedor de uma escola de ofícios diz que tem de assinar hoje. O que faz?", options: ["Assina logo", "Dá-lhe o seu cartão do banco", "Pergunta pelas taxas de conclusão, de colocação em emprego e pela acreditação, e leva tempo para decidir", "Pede emprestado o máximo possível"], answer: 2, why: "A pressão para assinar hoje é um sinal de alerta; as boas escolas dão-lhe factos e tempo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pagar e planear",
      lessons: [
        {
          objectives: ["O4"],
          title: "O FAFSA e o apoio financeiro",
          minutes: 6,
          goal: "Explicar os tipos de apoio financeiro e preparar-se para preencher o FAFSA de graça em studentaid.gov.",
          text: [
            "O apoio financeiro é dinheiro para ajudar a pagar a faculdade, o community college e muitas escolas de ofícios. Há quatro tipos: subsídios (grants) e bolsas de estudo (não se devolvem), work-study (um emprego a tempo parcial) e empréstimos (devolvem-se com juros).",
            "O FAFSA (Free Application for Federal Student Aid, o pedido gratuito de apoio federal ao estudante) é o formulário que abre a porta ao apoio federal, e muitos estados e faculdades também o usam para os seus próprios apoios. É gratuito e preenche-se em studentaid.gov. Vai precisar de uma conta StudentAid.gov, e um pai, mãe ou outro contribuinte cujos dados estão no formulário também pode precisar.",
            "Todos os anos abre um novo FAFSA para o ano letivo seguinte. Veja em studentaid.gov a data de abertura e verifique os prazos do seu estado e das faculdades; alguns apoios acabam cedo, por isso entregue-o o mais cedo que puder.",
            "Nunca pague a ninguém para preencher o FAFSA e nunca partilhe o seu nome de utilizador e a palavra-passe do StudentAid.gov (o seu FSA ID) com ninguém, nem com um consultor. O orientador da sua escola ou o gabinete de apoio financeiro de uma faculdade pode ajudá-lo de graça."
          ],
          steps: ["Vá a studentaid.gov (verifique bem o endereço).", "Crie a sua conta StudentAid.gov; um pai, mãe ou contribuinte também pode precisar de uma.", "Junte o que o formulário pede, como os dados dos impostos.", "Procure a data de abertura do FAFSA deste ano e os prazos do seu estado e da faculdade.", "Preencha-o cedo, ou com a ajuda gratuita de um orientador; nunca pague a uma empresa para o fazer."],
          words: [["FAFSA", "o Free Application for Federal Student Aid: o pedido gratuito de apoio federal ao estudante."], ["Subsídio (grant)", "dinheiro para estudar que não se devolve."], ["Work-study", "um emprego a tempo parcial que ajuda a pagar os estudos."], ["Empréstimo", "dinheiro emprestado que tem de devolver, normalmente com juros."], ["FSA ID", "o seu nome de utilizador e a palavra-passe do StudentAid.gov; nunca o partilhe."]],
          slides: [
            { title: "Quatro tipos de apoio", bullets: ["Subsídios e bolsas: não se devolvem", "Work-study: um emprego a tempo parcial", "Empréstimos: devolvem-se com juros"] },
            { title: "O FAFSA", bullets: ["Gratuito, em studentaid.gov", "Abre a porta aos apoios federais, do estado e da faculdade", "Um pai, mãe ou contribuinte também pode precisar de uma conta"] },
            { title: "Datas", bullets: ["Todos os anos abre um novo FAFSA", "Veja as datas em studentaid.gov", "Entregue cedo: alguns apoios acabam"] },
            { title: "Fique em segurança", bullets: ["Nunca pague a ninguém para o preencher", "Nunca partilhe o seu FSA ID", "Os orientadores ajudam de graça"] }
          ],
          sources: [
            { name: "Federal Student Aid: Pedir apoio com o FAFSA", url: "https://studentaid.gov/h/apply-for-aid/fafsa" },
            { name: "FTC: Como evitar burlas de bolsas de estudo e de apoio financeiro", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Vá a studentaid.gov e encontre a data de abertura do FAFSA deste ano. Depois encontre o prazo do apoio financeiro de uma escola e do seu estado. Anote as duas datas e escreva quem o vai ajudar a preencher o formulário.",
          youCanNow: "explicar os subsídios, as bolsas de estudo, o work-study e os empréstimos, e preparar-se para entregar o FAFSA gratuito com segurança e a tempo.",
          quickCheck: [
            { objective: "O4", q: "Que tipos de apoio não se devolvem?", options: ["Empréstimos", "Subsídios e bolsas de estudo", "Cartões de crédito", "Empréstimos privados"], answer: 1, why: "Os subsídios e as bolsas são dinheiro grátis; os empréstimos devolvem-se com juros." },
            { objective: "O4", q: "Um site que acaba em .com oferece-se para entregar o seu FAFSA por uma taxa. O que faz?", options: ["Paga; poupa tempo", "Dá-lhes o seu FSA ID", "Entrega-o de graça em studentaid.gov ou com a ajuda de um orientador", "Não faz o FAFSA"], answer: 2, why: "O FAFSA é gratuito em studentaid.gov; nunca pague para o entregar nem partilhe o seu FSA ID." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Evitar armadilhas de dívida e burlas",
          minutes: 5,
          goal: "Comparar ofertas de apoio e reconhecer os sinais de alerta de armadilhas de dívida e de burlas.",
          text: [
            "A dívida nem sempre é má, mas demasiada dívida pode acompanhá-lo durante anos. Peça emprestado só o que precisa depois dos subsídios e das bolsas. O Consumer Financial Protection Bureau (o serviço de proteção financeira do consumidor dos EUA) diz para usar os empréstimos federais ao estudante antes dos privados, porque os federais costumam ter mais proteções.",
            "Quando receber ofertas de apoio, verifique cada linha: é um subsídio, uma bolsa, work-study ou um empréstimo? Algumas ofertas misturam tudo para que os empréstimos pareçam dinheiro grátis. Compare o custo que fica por pagar em cada escola, não só o tamanho da oferta.",
            "Sinais de alerta de burla, segundo a Federal Trade Commission (FTC, o serviço de proteção do consumidor dos EUA): uma bolsa garantida; uma taxa para se candidatar ou para guardar uma bolsa; pedir o seu número do banco ou do cartão; dizer que ganhou um concurso em que nunca entrou; e pressão para pagar já. As bolsas verdadeiras não cobram para se candidatar.",
            "Cuidado com escolas que o empurram a inscrever-se e a pedir emprestado depressa, que prometem empregos que não conseguem provar ou que não dizem os seus números de conclusão e de emprego. Se for vítima de burla, denuncie em ReportFraud.ftc.gov."
          ],
          steps: ["Separe cada oferta de apoio em subsídios, bolsas, work-study e empréstimos.", "Calcule o que falta pagar em cada escola.", "Use empréstimos federais antes dos privados e peça emprestado só o que precisa.", "Compare cada oferta de bolsa com os sinais de burla.", "Denuncie burlas em ReportFraud.ftc.gov."],
          words: [["Juros", "o dinheiro a mais que paga por pedir emprestado."], ["Empréstimo federal ao estudante", "um empréstimo do governo dos EUA com proteções fixas."], ["Empréstimo privado", "um empréstimo de um banco ou de uma empresa, muitas vezes com menos proteções."], ["Armadilha de dívida", "uma dívida que cresce mais depressa do que consegue pagá-la."]],
          slides: [
            { title: "Peça emprestado com cuidado", bullets: ["Só o que precisa depois do dinheiro grátis", "Empréstimos federais antes dos privados"] },
            { title: "Leia cada oferta de apoio", bullets: ["Subsídio, bolsa, work-study ou empréstimo?", "Os empréstimos podem parecer dinheiro grátis", "Compare o que falta pagar"] },
            { title: "Sinais de alerta de burla", bullets: ["Bolsa garantida ou taxa para se candidatar", "Pede o seu número do banco ou do cartão", "Ganhou um concurso em que nunca entrou; pague já"] },
            { title: "Escolas que pressionam", bullets: ["Assine e peça emprestado depressa", "Promessas de emprego que não conseguem provar", "Denuncie burlas em ReportFraud.ftc.gov"] }
          ],
          sources: [
            { name: "Consumer Financial Protection Bureau: Empréstimos ao estudante", url: "https://www.consumerfinance.gov/consumer-tools/student-loans/" },
            { name: "FTC: Como evitar burlas de bolsas de estudo e de apoio financeiro", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Veja esta oferta de exemplo: subsídio de $3,000, bolsa de $2,000, work-study de $2,500, empréstimo de $5,500, para uma escola que custa $14,000 por ano. Escreva quanto é dinheiro grátis, quanto tem de ser ganho ou devolvido e quanto ainda falta pagar. (Grátis: $5,000. Ganho: $2,500. Empréstimo: $5,500. Ainda falta: $1,000.)",
          youCanNow: "ler uma oferta de apoio linha a linha, pedir emprestado com cuidado e reconhecer burlas de apoio financeiro e escolas que pressionam.",
          quickCheck: [
            { objective: "O5", q: "Porque deve ler cada linha de uma oferta de apoio?", options: ["Algumas ofertas misturam empréstimos para parecerem dinheiro grátis", "As ofertas de apoio são sempre só subsídios", "Para encontrar a mascote da escola", "As linhas não importam"], answer: 0, why: "Separar subsídios, bolsas, work-study e empréstimos mostra o que vai realmente pagar." },
            { objective: "O5", q: "Um email diz que ganhou uma bolsa a que nunca se candidatou e pede o seu número do banco. O que é?", options: ["Um prémio verdadeiro", "Um sinal de alerta de burla; não dê o seu número do banco", "Um formulário normal do banco", "Um passo do FAFSA"], answer: 1, why: "Concursos em que nunca entrou e pedidos de números do banco são sinais de burla." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer o seu plano de dois anos",
          minutes: 6,
          goal: "Escrever um plano de dois anos com um caminho principal, uma alternativa, o dinheiro e as metas.",
          text: [
            "Um plano transforma a sua escolha em passos. Dois anos é tempo suficiente para avançar a sério e curto o suficiente para ver com clareza.",
            "Escolha um caminho principal e uma alternativa. Por exemplo: caminho principal, uma aprendizagem profissional de eletricista; alternativa, um certificado de um ano no community college enquanto trabalha. A alternativa mantém-no a avançar se o caminho principal atrasar.",
            "Divida os dois anos em passos de seis meses, com uma ou duas metas cada: candidatar-se, fazer um teste, terminar uma disciplina, poupar um certo valor, conseguir um primeiro emprego na área. Escreva como vai pagar cada passo e quem o vai ajudar, como um orientador, um pai ou mãe, um treinador, um mentor ou um chefe.",
            "Veja o seu plano de poucos em poucos meses. Os planos mudam, e não faz mal. Atualizá-lo faz parte da competência."
          ],
          steps: ["Escreva o seu caminho principal e uma alternativa.", "Copie a sua comparação das cinco perguntas para os dois.", "Divida os dois anos em quatro passos de seis meses, cada um com uma ou duas metas.", "Escreva como vai pagar cada passo.", "Liste as pessoas que o vão ajudar.", "Marque uma data para rever o plano de poucos em poucos meses."],
          words: [["Meta", "um passo claro que mostra progresso, como terminar uma disciplina."], ["Plano alternativo", "um segundo caminho que pode usar se o primeiro atrasar."]],
          slides: [
            { title: "Porquê dois anos", bullets: ["Tempo suficiente para avançar a sério", "Curto o suficiente para ver com clareza"] },
            { title: "Caminho principal e alternativa", bullets: ["Principal: o caminho que mais quer", "Alternativa: mantém-no a avançar se houver atraso"] },
            { title: "Passos de seis meses", bullets: ["Uma ou duas metas cada", "Como vai pagar", "Quem vai ajudar"] },
            { title: "Mantenha o plano vivo", bullets: ["Reveja de poucos em poucos meses", "Mude-o quando a vida mudar"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de dois anos numa página com um caminho principal e uma alternativa, a sua comparação das cinco perguntas de pelo menos dois caminhos, como vai pagar, as suas metas de seis em seis meses e as pessoas que vão ajudar. Mostre-o a um orientador ou a um adulto de confiança.",
          youCanNow: "escrever um plano de dois anos com um caminho principal, uma alternativa, metas, uma forma de pagar e pessoas para ajudar, e atualizá-lo quando a vida mudar.",
          quickCheck: [
            { objective: "O6", q: "O que é uma meta num plano de dois anos?", options: ["Um desejo qualquer", "O seu caminho alternativo", "Uma lista de pessoas", "Um passo claro com uma data, como terminar uma disciplina até junho"], answer: 3, why: "As metas dividem o plano em passos de seis meses que pode verificar." },
            { objective: "O6", q: "O seu caminho principal atrasa seis meses. Em que é que um bom plano o ajuda?", options: ["Desistir", "Esperar sem fazer nada", "Passar para o caminho alternativo e continuar a avançar", "Recomeçar sem plano"], answer: 2, why: "Uma alternativa mantém-no a avançar se o caminho principal atrasar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Pagar e planear",
        questions: [
          { objective: "O4", q: "Que tipo de apoio tem de devolver?", options: ["Um subsídio", "Uma bolsa de estudo", "O salário do work-study", "Um empréstimo"], answer: 3, why: "Os empréstimos têm de ser devolvidos com juros; os subsídios e as bolsas não." },
          { objective: "O4", q: "Quanto custa entregar o FAFSA em studentaid.gov?", options: ["Nada; é gratuito", "$25", "$100", "Depende da sua escola"], answer: 0, why: "O FAFSA é gratuito; nunca pague a ninguém para o entregar." },
          { objective: "O4", q: "Uma empresa oferece-se para preencher o seu FAFSA se lhe der o seu FSA ID. O que faz?", options: ["Dá-lho", "Diz que não e pede ajuda gratuita a um orientador da escola", "Envia-lho por SMS", "Publica-o na internet"], answer: 1, why: "Nunca partilhe o seu FSA ID; os orientadores ajudam de graça." },
          { objective: "O5", q: "Qual é um sinal de burla de bolsa de estudo?", options: ["Uma candidatura gratuita", "Uma pergunta de redação", "Um prémio garantido se pagar uma taxa", "Um prazo"], answer: 2, why: "As bolsas verdadeiras não cobram taxas nem garantem prémios." },
          { objective: "O6", q: "Porque é que um plano de dois anos precisa de uma alternativa?", options: ["Para o manter a avançar se o caminho principal atrasar", "Porque a lei obriga", "Para impressionar os amigos", "Não precisa de uma"], answer: 0, why: "Uma alternativa mantém-no a avançar quando os planos mudam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Escolher a Faculdade, um Ofício ou o Trabalho Depois da Escola",
    questions: [
      { objective: "O1", q: "Qual é o caminho certo para todos depois do ensino secundário?", options: ["Uma faculdade de quatro anos", "Não há um único caminho certo; depende de você", "As forças armadas", "Trabalhar logo"], answer: 1, why: "O melhor caminho combina com os seus interesses, pontos fortes e necessidades." },
      { objective: "O1", q: "Você aprende melhor a fazer coisas com as mãos. Que caminho pode servir bem?", options: ["Só aulas teóricas pela internet", "Nada serve", "Uma aprendizagem profissional num ofício", "Ler manuais o dia todo"], answer: 2, why: "As aprendizagens profissionais ensinam competências com trabalho prático." },
      { objective: "O1", q: "Como deve usar um assistente de IA ao escolher um caminho?", options: ["Deixar que ele decida por você", "Confiar em todos os números que ele dá", "Nunca o usar", "Usá-lo para ter ideias e depois verificar os factos com um orientador e em sites oficiais"], answer: 3, why: "A IA pode sugerir ideias, mas os factos precisam de ser verificados." },
      { objective: "O2", q: "Um associate degree costuma levar cerca de:", options: ["Dois anos", "Seis meses", "Oito anos", "Uma semana"], answer: 0, why: "Os associate degrees costumam levar cerca de dois anos." },
      { objective: "O2", q: "O que é o preço líquido?", options: ["O custo de um computador portátil", "O que a faculdade custa depois das bolsas e dos subsídios", "O custo de uma disciplina", "Um imposto"], answer: 1, why: "O preço líquido é o custo depois de tirar o apoio grátis." },
      { objective: "O2", q: "Que profissões costumam pedir um bachelor's degree?", options: ["Nenhuma", "Só o desporto", "Professor e engenharia", "Só o comércio"], answer: 2, why: "Ser professor e a engenharia costumam pedir um bachelor's degree." },
      { objective: "O2", q: "Qual é uma das cinco perguntas a fazer sobre cada caminho?", options: ["Os meus amigos vão para lá?", "O logótipo é bonito?", "Aparece na televisão?", "Quanto tempo vai demorar?"], answer: 3, why: "O tempo para terminar é uma das cinco perguntas de comparação." },
      { objective: "O3", q: "Onde pode procurar aprendizagens profissionais?", options: ["No Apprenticeship Job Finder de apprenticeship.gov", "Numa publicação qualquer nas redes sociais", "Numa SMS de um desconhecido", "Em lado nenhum"], answer: 0, why: "Apprenticeship.gov tem um localizador oficial de vagas." },
      { objective: "O3", q: "Antes de assinar com uma escola de ofícios, pergunte:", options: ["De que cor é o edifício", "Quantos alunos terminam e conseguem emprego na área", "Se têm piscina", "Nada"], answer: 1, why: "As taxas de conclusão e de colocação em emprego mostram se a escola cumpre." },
      { objective: "O3", q: "O ASVAB é:", options: ["Um empréstimo para a faculdade", "Uma escola de ofícios", "Um teste que ajuda a decidir para que funções militares você se qualifica", "Um formulário de impostos"], answer: 2, why: "O ASVAB é usado pelas forças armadas para ligar as pessoas às funções." },
      { objective: "O3", q: "Um passo inteligente se está a pensar nas forças armadas é:", options: ["Assinar o primeiro papel que vir", "Não ler o contrato", "Falar só com um amigo", "Falar com recrutadores de mais de um ramo e ler antes de assinar"], answer: 3, why: "Comparar os ramos e ler com atenção protege-o." },
      { objective: "O3", q: "Ir logo trabalhar pode ser um bom caminho quando o empregador:", options: ["Oferece formação e ajuda a pagar aulas", "Nunca dá formação a ninguém", "Paga com cartões-presente", "Não tem funções para o futuro"], answer: 0, why: "Formação, promoção e ajuda para pagar estudos fazem de um emprego um caminho verdadeiro." },
      { objective: "O4", q: "Que apoio é um emprego a tempo parcial que ajuda a pagar os estudos?", options: ["Subsídio", "Work-study", "Empréstimo", "Bolsa de estudo"], answer: 1, why: "O work-study paga-lhe por um trabalho a tempo parcial." },
      { objective: "O4", q: "Onde se preenche o FAFSA?", options: ["fafsa-help.win", "Um site pago", "studentaid.gov", "A aplicação do seu banco"], answer: 2, why: "O FAFSA oficial e gratuito está em studentaid.gov." },
      { objective: "O4", q: "Porque deve entregar o FAFSA o mais cedo que puder?", options: ["Os formulários atrasados recebem mais dinheiro", "Só está aberto um dia", "Não há razão", "Alguns apoios acabam, e os estados e as faculdades têm prazos"], answer: 3, why: "Entregar cedo ajuda a receber apoio antes que acabe." },
      { objective: "O5", q: "Que empréstimos deve normalmente usar primeiro?", options: ["Empréstimos federais ao estudante", "Empréstimos privados", "Cartões de crédito", "Empréstimos de curto prazo até ao dia de pagamento"], answer: 0, why: "Os empréstimos federais costumam ter mais proteções do que os privados." },
      { objective: "O5", q: "Uma oferta de apoio mostra um empréstimo de $5,500 junto com subsídios. O empréstimo é:", options: ["Dinheiro grátis", "Dinheiro que tem de devolver", "Uma bolsa de estudo", "Uma prenda"], answer: 1, why: "Os empréstimos têm de ser devolvidos, mesmo quando aparecem ao lado dos subsídios." },
      { objective: "O5", q: "Onde denuncia uma burla de apoio financeiro?", options: ["Na cantina da escola", "Num comentário nas redes sociais", "ReportFraud.ftc.gov", "Em lado nenhum"], answer: 2, why: "A FTC recebe denúncias de burlas em ReportFraud.ftc.gov." },
      { objective: "O6", q: "Qual é uma boa meta num plano de dois anos?", options: ["Ser famoso", "Sentir-me melhor um dia", "Ficar rico", "Terminar a primeira disciplina do certificado até junho"], answer: 3, why: "Uma meta é um passo claro que se pode verificar." },
      { objective: "O6", q: "Com que frequência deve ver o seu plano?", options: ["De poucos em poucos meses", "Nunca", "Só uma vez", "Só se falhar"], answer: 0, why: "Revisões regulares permitem atualizar o plano quando a vida muda." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 4, 6, 7, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Caminho principal e alternativa", objective: "O1", notYet: "Só um caminho, ou o caminho não tem ligação com os interesses e necessidades do aluno.", meets: "Um caminho principal e uma alternativa que combinam com os interesses, pontos fortes e necessidades de dinheiro do aluno.", exceeds: "Explica porque a alternativa ainda o aproxima do seu objetivo." },
      { name: "Comparação das cinco perguntas", objective: "O2", notYet: "Menos de dois caminhos comparados, ou perguntas saltadas.", meets: "Pelo menos dois caminhos comparados no custo, no tempo, em ganhar enquanto aprende, nos empregos prováveis e no que precisa para entrar.", exceeds: "Usa o preço líquido ou o salário da aprendizagem a partir de fontes oficiais e anota de onde veio cada resposta." },
      { name: "Como pagar", objective: "O4", notYet: "Sem plano de dinheiro, ou depende de empréstimos desconhecidos.", meets: "Diz como cada passo vai ser pago, incluindo a data do FAFSA e os prazos se precisar de apoio.", exceeds: "Mostra primeiro os subsídios e as bolsas, os empréstimos por último, e o valor que falta pagar." },
      { name: "Protegido das burlas", objective: "O5", notYet: "Planeia pagar por ajuda com o FAFSA ou por uma bolsa garantida.", meets: "Sem ajuda paga para o FAFSA, sem FSA ID partilhado e sem ofertas com sinais de burla.", exceeds: "Diz onde denunciar uma burla e a quem pedir ajuda gratuita." },
      { name: "Metas e pessoas que ajudam", objective: "O6", notYet: "Sem passos de seis meses ou sem pessoas que ajudam.", meets: "Quatro passos de seis meses com metas, as pessoas que vão ajudar e uma data de revisão.", exceeds: "Foi mostrado a um orientador ou a um adulto de confiança, com a opinião dele anotada." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que entregam o FAFSA a tempo ou se candidatam a uma aprendizagem profissional ou a um programa durante o ano letivo",
      "Alunos inscritos na faculdade, num programa de ofícios, numa aprendizagem profissional, nas forças armadas ou num emprego com formação seis meses depois do curso",
      "Alunos que dizem no inquérito de seguimento que evitaram uma burla de bolsa ou de apoio financeiro"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador da escola ou da biblioteca com internet",
      "Sites oficiais: studentaid.gov, apprenticeship.gov e as calculadoras de preço líquido das escolas",
      "Papel ou um documento para a tabela de comparação e o plano de dois anos",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Trabalhe com o orientador da escola e convide-o a rever os planos dos alunos.",
      "Peça aos alunos que procurem na aula a data de abertura e os prazos do FAFSA deste ano, porque mudam todos os anos.",
      "Nunca peça aos alunos que partilhem em grupo o rendimento da família, o FSA ID ou dados do banco; pratiquem com a oferta de apoio de exemplo do curso.",
      "Convide oradores de um community college, de um programa de aprendizagem profissional e de um empregador local para que todos os caminhos sejam mostrados de forma justa.",
      "Avalie o plano de dois anos com a grelha e dê opinião sobre uma linha em Ainda não de cada vez."
    ]
  }
};
