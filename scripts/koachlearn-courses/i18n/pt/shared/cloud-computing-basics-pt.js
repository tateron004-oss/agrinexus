"use strict";

// Koach Learn course (Portuguese translation of shared/cloud-computing-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "cloud-computing-basics-pt",
  lang: "pt",
  translationOf: "cloud-computing-basics",
  category: "Youth",
  name: "Noções Básicas de Computação na Nuvem",
  skills: "Explicar o que é a nuvem, Distinguir SaaS, PaaS e IaaS, Guardar e sincronizar ficheiros na nuvem, Partilhar ficheiros com segurança, Manter uma conta na nuvem segura",
  outcome: "explicar o que é a computação na nuvem e os seus três tipos principais de serviço, e depois usar um serviço gratuito de armazenamento na nuvem para guardar, organizar e partilhar ficheiros com segurança, com a sua conta protegida pela verificação em dois passos.",
  about: [
    "Sempre que vê um vídeo pela internet, guarda uma foto no Google Fotos ou no iCloud, ou trabalha num documento do Google com um colega, está a usar a computação na nuvem. As empresas usam-na para sites, aplicações e IA, e as competências de nuvem são procuradas em muitos empregos.",
    "Este curso explica com palavras simples o que é a nuvem, os principais tipos de serviços na nuvem e quem são os grandes fornecedores. Depois você vai usar um serviço gratuito de armazenamento na nuvem para guardar, organizar e partilhar ficheiros com segurança, como fazem as equipas na escola e no trabalho.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Se quiser ir mais longe, o curso \"Fundamentos do Microsoft Azure\" continua a partir deste."
  ],
  finalTask: "No Google Drive ou no Microsoft OneDrive: crie uma pasta chamada \"Documentos de Carreira\", carregue ou crie dois ficheiros nela (por exemplo um currículo e uma lista de referências), partilhe um ficheiro com um amigo ou familiar só para ver, verifique quem tem acesso e depois retire esse acesso. Confirme que a verificação em dois passos está ligada na conta. Por fim, escreva três frases que expliquem a nuvem e dê um exemplo de SaaS, um de PaaS e um de IaaS.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens (adolescentes e jovens adultos) na escola, em programas de formação ou nos primeiros empregos. Usam aplicações na nuvem todos os dias, mas raramente pensaram em como a nuvem funciona ou em como gerir ficheiros e partilhas de propósito.",
    startingPoint: "Sabem usar um smartphone, ver vídeos pela internet, usar o e-mail e as redes sociais, e podem ter uma conta Google ou Microsoft. Poucos têm pastas organizadas, definiram permissões de partilha ou ligaram a verificação em dois passos.",
    gap: "A escola, os estágios e os empregos esperam que as pessoas guardem, organizem e partilhem ficheiros na nuvem e conheçam os termos básicos da nuvem usados nas carreiras de tecnologia. Sem estas competências, os alunos perdem trabalho, partilham ficheiros privados demais e deixam as contas expostas ao phishing e ao roubo de palavras-passe.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 7.º ao 8.º ano)",
      "Aparelhos: um telefone ou um computador partilhado da escola ou da biblioteca; um segundo aparelho é opcional",
      "Tempo: lições de 5 minutos, que cabem entre a escola ou o trabalho",
      "Privacidade: nenhum número verdadeiro da Segurança Social, dados bancários ou palavras-passe nos ficheiros de prática",
      "Alguns alunos com menos de 18 anos podem precisar de uma conta dos pais ou da escola para usar os serviços da Google ou da Microsoft"
    ],
    prerequisites: "Nenhum. Quem ainda não tem conta de e-mail pode primeiro criar uma conta gratuita da Google ou da Microsoft com a ajuda de um adulto ou de alguém do programa."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de aplicações do dia a dia e o exemplo de um pequeno negócio", action: "explicar o que é a computação na nuvem e dizer os seus principais benefícios e riscos", standard: "com as suas palavras, com pelo menos dois benefícios e um risco" },
    { id: "O2", condition: "Com seis serviços na nuvem", action: "classificar cada um como SaaS, PaaS ou IaaS e dizer pelo que você é responsável em cada um", standard: "acertando pelo menos 5 de 6" },
    { id: "O3", condition: "Usando o Google Drive ou o OneDrive", action: "criar uma pasta, juntar dois ficheiros e dar-lhes nomes claros", standard: "sem ajuda, para que outra pessoa encontre cada ficheiro pelo nome" },
    { id: "O4", condition: "Com um ficheiro e uma pessoa com quem o partilhar", action: "partilhar o ficheiro com o mínimo de acesso necessário, verificar quem tem acesso e retirar o acesso", standard: "sem nenhum ficheiro aberto a pessoas que não precisam dele" },
    { id: "O5", condition: "Na sua própria conta Google ou Microsoft", action: "ligar a verificação em dois passos, rever os aparelhos com sessão iniciada e reconhecer uma mensagem de phishing", standard: "antes de terminar a tarefa final" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que é a nuvem",
      lessons: [
        {
          objectives: ["O1"],
          title: "A nuvem com palavras simples",
          minutes: 4,
          goal: "Explicar com as suas palavras o que é a computação na nuvem.",
          text: [
            "\"A nuvem\" quer dizer computadores em grandes edifícios chamados centros de dados, que você usa pela internet. Em vez de guardar tudo no seu telefone ou portátil, os seus ficheiros, aplicações e poder de computação ficam nesses computadores, e você chega a eles a partir de qualquer aparelho.",
            "Pense na eletricidade. Você não constrói uma central elétrica em casa; liga à tomada e paga o que usa. A computação na nuvem funciona da mesma forma: uma empresa é dona dos computadores, e as pessoas e as empresas usam o que precisam, quando precisam.",
            "Exemplos do dia a dia: o e-mail Gmail e Outlook; o Google Drive, o OneDrive, o iCloud e o Dropbox para ficheiros; a Netflix e o Spotify para ver e ouvir pela internet; e assistentes de IA como o ChatGPT ou o Copilot, que funcionam em computadores na nuvem."
          ],
          words: [["Computação na nuvem", "usar computadores, armazenamento e programas pela internet, em vez de no seu próprio aparelho."], ["Centro de dados", "um grande edifício cheio de computadores que fazem funcionar os serviços na nuvem."], ["Servidor", "um computador potente que presta um serviço a outros computadores através de uma rede."]],
          slides: [
            { title: "O que é a nuvem", bullets: ["Computadores em centros de dados", "Você usa-os pela internet", "A partir de qualquer aparelho"] },
            { title: "Como a eletricidade", bullets: ["Você não constrói uma central elétrica", "Liga à tomada e paga o que usa"] },
            { title: "Você já a usa", bullets: ["Gmail, Outlook", "Google Drive, OneDrive, iCloud, Dropbox", "Netflix, Spotify, assistentes de IA"] }
          ],
          tryIt: "Escreva cinco aplicações ou sites que usou esta semana. Ao lado de cada um, escreva \"nuvem\" se as suas coisas ficam guardadas ou funcionam nos computadores da empresa e não só no seu aparelho.",
          youCanNow: "explicar a computação na nuvem com as suas palavras e indicar serviços na nuvem que já usa.",
          quickCheck: [
            { objective: "O1", q: "Onde ficam os seus ficheiros quando os guarda na nuvem?", options: ["Em computadores num centro de dados, a que chega pela internet", "Só dentro do cartão de memória do seu telefone", "Num disco que envia pelo correio à empresa", "Nas mensagens SMS do seu telefone"], answer: 0, why: "A nuvem são computadores em centros de dados que você usa pela internet a partir de qualquer aparelho." },
            { objective: "O1", q: "Um amigo pergunta porque a nuvem é como a eletricidade. O que responde?", options: ["As duas deixam de funcionar à noite", "As duas precisam de um cabo até à sua casa", "Usa o que precisa sem ser dono dos computadores, como a energia sem uma central elétrica", "As duas são gratuitas para todos"], answer: 2, why: "A lição compara a nuvem a ligar à tomada e pagar a energia sem construir uma central elétrica." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Porque as pessoas e as empresas usam a nuvem",
          minutes: 5,
          goal: "Dizer os principais benefícios e riscos da nuvem.",
          text: [
            "Benefícios: pode chegar aos seus ficheiros a partir de qualquer aparelho; perder o telefone não quer dizer perder as fotos; as equipas podem trabalhar no mesmo documento ao mesmo tempo; e as empresas podem começar pequenas e crescer, pagando mais computação só quando precisam, em vez de comprar servidores caros.",
            "Riscos: precisa de uma ligação à internet; se alguém roubar a sua palavra-passe, pode chegar aos seus ficheiros de qualquer lugar; os planos gratuitos têm limites de armazenamento; e os seus dados ficam com uma empresa, por isso deve conhecer as definições de privacidade dela.",
            "Os grandes fornecedores de nuvem para empresas incluem a Amazon Web Services (AWS), o Microsoft Azure e o Google Cloud. Para as pessoas no dia a dia, a Google, a Microsoft, a Apple e o Dropbox oferecem armazenamento gratuito na nuvem, com opções pagas para ter mais. Veja a página de cada empresa para saber o espaço gratuito atual."
          ],
          words: [["Escalabilidade", "a capacidade de aumentar ou diminuir o poder de computação conforme for preciso."], ["Fornecedor", "a empresa que faz funcionar o serviço na nuvem."], ["Limite de armazenamento", "o máximo de dados que o seu plano deixa guardar."]],
          slides: [
            { title: "Benefícios", bullets: ["Os seus ficheiros em qualquer aparelho", "Perder o telefone não quer dizer perder as fotos", "As equipas trabalham no mesmo ficheiro", "As empresas crescem sem comprar servidores"] },
            { title: "Riscos", bullets: ["Precisa de internet", "Uma palavra-passe roubada abre tudo", "Os planos gratuitos têm limites"] },
            { title: "Grandes fornecedores", bullets: ["Empresas: AWS, Microsoft Azure, Google Cloud", "Dia a dia: Google, Microsoft, Apple, Dropbox"] }
          ],
          tryIt: "Pense num pequeno negócio que conhece, como uma barbearia, uma carrinha de comida ou o escritório de uma igreja. Escreva duas formas de a nuvem o ajudar e um risco para o qual se deve preparar.",
          youCanNow: "dizer os principais benefícios e riscos da nuvem e os grandes fornecedores de nuvem.",
          quickCheck: [
            { objective: "O1", q: "Qual é um benefício de guardar as suas fotos na nuvem?", options: ["Nunca precisa de internet", "Perder o telefone não quer dizer perder as fotos", "Os planos gratuitos não têm limite de armazenamento", "Nenhuma empresa fica com os seus dados"], answer: 1, why: "As cópias na nuvem ficam seguras nos computadores do fornecedor, mesmo que perca o telefone." },
            { objective: "O1", q: "O dono de uma carrinha de comida quer passar os registos para a nuvem. Para que risco se deve preparar primeiro?", options: ["A nuvem torna os ficheiros maiores", "A nuvem só funciona num aparelho", "Os ficheiros na nuvem não podem ser partilhados com os funcionários", "Alguém com uma palavra-passe roubada pode chegar aos ficheiros de qualquer lugar"], answer: 3, why: "Uma palavra-passe roubada abre os ficheiros na nuvem de qualquer lugar, por isso a segurança da conta é importante." }
          ]
        },
        {
          objectives: ["O2"],
          title: "SaaS, PaaS e IaaS: os três tipos de serviço",
          minutes: 5,
          goal: "Classificar serviços na nuvem como SaaS, PaaS ou IaaS.",
          text: [
            "Os serviços na nuvem têm três tipos principais, conforme o quanto o fornecedor faz por você. Pense numa pizza: pode comprar uma pizza pronta, alugar uma cozinha com os ingredientes ou alugar só o forno.",
            "SaaS (Software como Serviço): programas prontos que usa num navegador ou numa aplicação, como o Gmail, o Google Docs, o Microsoft 365 ou o Zoom. O fornecedor trata de tudo. PaaS (Plataforma como Serviço): uma plataforma pronta onde os programadores criam e fazem funcionar as suas próprias aplicações sem gerir servidores, como o Google App Engine ou o Azure App Service. IaaS (Infraestrutura como Serviço): computadores virtuais, armazenamento e redes que você mesmo configura, como o Amazon EC2 ou as Azure Virtual Machines.",
            "Em todos os tipos, a segurança é partilhada. O fornecedor protege os seus centros de dados; você é sempre responsável pela sua palavra-passe, por com quem partilha e pelo que carrega."
          ],
          steps: ["Pergunte: só uso um programa pronto? Isso é SaaS.", "Crio a minha própria aplicação numa plataforma pronta? Isso é PaaS.", "Configuro os meus próprios computadores virtuais? Isso é IaaS.", "Nos três, proteja a sua própria conta e os seus dados."],
          words: [["SaaS", "Software como Serviço (Software as a Service): programas prontos que usa pela internet."], ["PaaS", "Plataforma como Serviço (Platform as a Service): uma plataforma pronta para criar e fazer funcionar as suas próprias aplicações."], ["IaaS", "Infraestrutura como Serviço (Infrastructure as a Service): computadores virtuais, armazenamento e redes que aluga e gere."], ["Responsabilidade partilhada", "o fornecedor protege a nuvem; você protege a sua conta e os seus dados nela."]],
          slides: [
            { title: "Três tipos de serviço", bullets: ["SaaS: uma pizza pronta", "PaaS: uma cozinha alugada com ingredientes", "IaaS: só o forno"] },
            { title: "Exemplos", bullets: ["SaaS: Gmail, Google Docs, Microsoft 365, Zoom", "PaaS: Google App Engine, Azure App Service", "IaaS: Amazon EC2, Azure Virtual Machines"] },
            { title: "Responsabilidade partilhada", bullets: ["Fornecedor: protege os centros de dados", "Você: a sua palavra-passe, as partilhas e o que carrega"] }
          ],
          tryIt: "Classifique estes como SaaS, PaaS ou IaaS: Gmail, Azure Virtual Machines, Google App Engine, Zoom, Amazon EC2, Microsoft 365. Compare as suas respostas com os exemplos desta lição.",
          youCanNow: "classificar serviços na nuvem como SaaS, PaaS e IaaS e explicar a responsabilidade partilhada.",
          quickCheck: [
            { objective: "O2", q: "O Google App Engine deixa os programadores fazer funcionar as suas aplicações sem gerir servidores. Que tipo é?", options: ["SaaS", "IaaS", "PaaS", "Nenhum dos três tipos"], answer: 2, why: "Uma plataforma pronta onde os programadores criam e fazem funcionar aplicações é Plataforma como Serviço." },
            { objective: "O2", q: "A sua escola usa o Microsoft 365, que é SaaS. O que continua a ser trabalho seu?", options: ["Proteger a sua própria palavra-passe e escolher com quem partilha", "Guardar o edifício do centro de dados", "Reparar os servidores do fornecedor", "Nada; SaaS quer dizer que o fornecedor faz tudo"], answer: 0, why: "A segurança é partilhada: o fornecedor faz funcionar o serviço, mas a sua palavra-passe e as suas partilhas são sempre suas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que é a nuvem",
        questions: [
          { objective: "O1", q: "O que quer dizer \"a nuvem\"?", options: ["O tempo que faz lá fora", "Computadores em centros de dados que usa pela internet", "Um tipo de capa de telefone", "Só o disco rígido do seu portátil"], answer: 1, why: "Os serviços na nuvem funcionam em computadores distantes, a que se chega pela internet." },
          { objective: "O1", q: "Qual é um risco da nuvem?", options: ["Pode chegar aos ficheiros a partir de qualquer aparelho", "As equipas podem partilhar documentos", "Uma palavra-passe roubada pode abrir os seus ficheiros de qualquer lugar", "Perder o telefone não quer dizer perder as fotos"], answer: 2, why: "A segurança da conta é importante porque a nuvem pode ser alcançada de qualquer lugar." },
          { objective: "O2", q: "O Gmail e o Zoom são exemplos de:", options: ["IaaS", "PaaS", "Centros de dados", "SaaS"], answer: 3, why: "São programas prontos usados pela internet." },
          { objective: "O2", q: "Uma empresa aluga computadores virtuais e configura-os ela mesma. Isto é:", options: ["IaaS", "SaaS", "Um navegador", "Uma palavra-passe"], answer: 0, why: "Alugar computadores virtuais que você gere é Infraestrutura como Serviço." },
          { objective: "O2", q: "Na responsabilidade partilhada, quem protege a sua palavra-passe?", options: ["O guarda do centro de dados", "Você", "A internet", "Ninguém"], answer: 1, why: "A sua conta e o que partilha são sempre trabalho seu." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a nuvem você mesmo",
      lessons: [
        {
          objectives: ["O3"],
          title: "Guardar e organizar ficheiros no armazenamento na nuvem",
          minutes: 5,
          goal: "Carregar, criar e organizar ficheiros no Google Drive ou no OneDrive.",
          text: [
            "O Google Drive vem com uma conta Google gratuita, e o OneDrive vem com uma conta Microsoft gratuita. Os dois funcionam num navegador de internet (drive.google.com ou onedrive.com) e como aplicações de telefone da loja de aplicações oficial.",
            "Use o botão Novo para criar uma pasta ou um documento, ou Carregar para juntar um ficheiro do seu aparelho. Dê nomes claros aos ficheiros, como \"Currículo - Jordan Lee - 2026\", para os encontrar mais tarde. Ponha os ficheiros relacionados em pastas.",
            "Sincronizar mantém um ficheiro igual em todos os aparelhos: muda-o no portátil e a nova versão aparece no telefone. Muitos serviços na nuvem também guardam versões antigas, por isso pode voltar atrás se se enganar."
          ],
          steps: ["Inicie sessão em drive.google.com ou onedrive.com (ou abra a aplicação).", "Carregue em Novo e escolha Pasta; dê-lhe um nome claro.", "Abra a pasta; carregue em Novo para criar um documento, ou em Carregar para juntar um ficheiro.", "Mude o nome dos ficheiros para nomes claros.", "Abra o mesmo ficheiro noutro aparelho para o ver sincronizar."],
          words: [["Carregar (upload)", "copiar um ficheiro do seu aparelho para a nuvem."], ["Sincronizar", "manter os ficheiros iguais em todos os seus aparelhos, de forma automática."], ["Histórico de versões", "cópias antigas guardadas de um ficheiro, para onde pode voltar."]],
          slides: [
            { title: "Armazenamento gratuito na nuvem", bullets: ["Google Drive com uma conta Google", "OneDrive com uma conta Microsoft", "No navegador ou na aplicação oficial"] },
            { title: "Organizar", bullets: ["Novo: pasta ou documento", "Carregar: juntar um ficheiro", "Nomes claros e pastas"] },
            { title: "Sincronização e versões", bullets: ["O mesmo ficheiro em todos os aparelhos", "Volte a uma versão antiga se for preciso"] }
          ],
          tryIt: "No Google Drive ou no OneDrive, crie uma pasta chamada \"Documentos de Carreira\". Crie ou carregue dois ficheiros nela e dê-lhes nomes claros. Depois abra a pasta num segundo aparelho, se tiver um.",
          youCanNow: "carregar, criar, dar nome e organizar ficheiros no armazenamento na nuvem e saber que se sincronizam entre aparelhos.",
          quickCheck: [
            { objective: "O3", q: "O que faz \"sincronizar\" a um ficheiro no OneDrive?", options: ["Apaga a cópia antiga todas as noites", "Mantém a mesma versão do ficheiro em todos os seus aparelhos", "Envia o ficheiro a todos os seus contactos", "Transforma o ficheiro num PDF"], answer: 1, why: "Sincronizar mantém um ficheiro igual em todos os aparelhos que usa." },
            { objective: "O3", q: "Guardou uma carta de apresentação como \"doc1\". O que deve fazer para a encontrar mais tarde?", options: ["Deixar assim; a pesquisa adivinha", "Fazer uma pasta nova para cada ficheiro", "Carregá-la outra vez com o mesmo nome", "Mudar o nome para um nome claro, como \"Carta de Apresentação - Jordan Lee - 2026\""], answer: 3, why: "Nomes claros tornam os ficheiros fáceis de encontrar mais tarde." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Partilhar ficheiros com segurança",
          minutes: 5,
          goal: "Partilhar um ficheiro com a pessoa certa e o nível de acesso certo, e retirar o acesso.",
          text: [
            "Os ficheiros na nuvem são fáceis de partilhar, o que é útil e arriscado. Carregue em Partilhar num ficheiro e junte o endereço de e-mail de uma pessoa, ou copie um link. Escolha o que ela pode fazer: ver, comentar ou editar.",
            "Dê o mínimo de acesso necessário. Um currículo para um empregador: só ver. Um trabalho de grupo: editar para a sua equipa. Tenha cuidado com links definidos para \"qualquer pessoa com o link\" abrir o ficheiro; quem receber o link pode vê-lo, mesmo que tenha sido reencaminhado.",
            "Veja quem tem acesso no ecrã Partilhar ou Gerir acesso, e retire as pessoas quando um projeto acaba. Nunca ponha ficheiros com números da Segurança Social, dados bancários ou palavras-passe numa pasta partilhada."
          ],
          steps: ["Selecione o ficheiro e carregue em Partilhar.", "Junte o e-mail da pessoa, ou copie um link.", "Escolha Ver, Comentar ou Editar; escolha o mínimo de que precisa.", "Evite \"qualquer pessoa com o link\" para ficheiros privados.", "Mais tarde, abra Partilhar ou Gerir acesso e retire quem já não precisa."],
          words: [["Nível de permissão", "o que alguém pode fazer com o seu ficheiro: ver, comentar ou editar."], ["Mínimo de acesso", "dar às pessoas só o acesso de que realmente precisam."]],
          slides: [
            { title: "Como partilhar", bullets: ["Carregue em Partilhar", "Junte um e-mail ou copie um link", "Escolha Ver, Comentar ou Editar"] },
            { title: "Mínimo de acesso", bullets: ["Currículo para um empregador: só ver", "Trabalho de equipa: editar para a equipa", "Cuidado com \"qualquer pessoa com o link\""] },
            { title: "Arrumar no fim", bullets: ["Veja Gerir acesso", "Retire as pessoas quando o projeto acaba", "Nenhum número privado em pastas partilhadas"] }
          ],
          tryIt: "Partilhe um ficheiro da sua pasta \"Documentos de Carreira\" com um amigo ou familiar, só para ver. Peça-lhe para o abrir. Depois abra Gerir acesso e retire-o.",
          youCanNow: "partilhar um ficheiro na nuvem com o nível de permissão certo e retirar o acesso quando já não for preciso.",
          quickCheck: [
            { objective: "O4", q: "Que definição de partilha dá o mínimo de acesso?", options: ["Editar", "Comentar", "Ver", "Proprietário"], answer: 2, why: "Ver deixa as pessoas abrir o ficheiro mas não o mudar, que é o mínimo de acesso." },
            { objective: "O4", q: "O seu trabalho de grupo acabou e quatro colegas ainda podem editar. O que faz?", options: ["Abre Gerir acesso e retira as pessoas que já não precisam", "Muda o link para \"qualquer pessoa com o link\"", "Apaga a sua conta inteira", "Deixa assim, caso precisem um dia"], answer: 0, why: "Retire o acesso quando um projeto acaba, para que só quem precisa do ficheiro chegue a ele." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Manter a sua conta na nuvem segura",
          minutes: 5,
          goal: "Ligar a verificação em dois passos e rever a segurança da sua conta.",
          text: [
            "A sua conta na nuvem guarda os seus ficheiros, e-mails e fotos, por isso é um alvo. O passo mais importante é a verificação em dois passos (também chamada autenticação de dois fatores ou multifator): depois da palavra-passe, você também confirma com o seu telefone. Um ladrão que só tem a sua palavra-passe não consegue entrar.",
            "Use uma palavra-passe longa e única, de preferência guardada num gestor de palavras-passe. A Google e a Microsoft têm as duas uma página de verificação de segurança nas definições da conta, que mostra os aparelhos com sessão iniciada, a atividade recente e as opções de recuperação.",
            "Cuidado com o phishing: e-mails falsos a dizer \"o seu armazenamento está cheio\" ou \"alguém partilhou um ficheiro consigo\" que levam a uma página falsa para iniciar sessão. Vá você mesmo a drive.google.com ou onedrive.com em vez de clicar. Lembre-se da responsabilidade partilhada: o fornecedor protege os seus centros de dados; você protege a sua conta."
          ],
          steps: ["Abra as definições de segurança da sua conta Google ou Microsoft.", "Ligue a verificação em dois passos.", "Confirme que o telefone e o e-mail de recuperação estão certos.", "Reveja os aparelhos com sessão iniciada e retire os que não conhece.", "Vá você mesmo aos sites da nuvem em vez de clicar em links de e-mails."],
          words: [["Verificação em dois passos", "uma segunda verificação, como um código ou um toque no telefone, depois da palavra-passe."], ["Gestor de palavras-passe", "uma aplicação que cria e guarda palavras-passe fortes por você."], ["Phishing", "uma mensagem falsa que tenta enganá-lo para dar a sua palavra-passe."]],
          slides: [
            { title: "A sua conta é um alvo", bullets: ["Guarda ficheiros, e-mails e fotos", "Ligue a verificação em dois passos"] },
            { title: "Verificação de segurança", bullets: ["Palavra-passe longa e única", "Telefone e e-mail de recuperação certos", "Retire os aparelhos que não conhece"] },
            { title: "Cuidado com o phishing", bullets: ["\"O seu armazenamento está cheio\"", "\"Alguém partilhou um ficheiro consigo\"", "Vá você mesmo ao site"] }
          ],
          tryIt: "Prática da tarefa final: abra as definições de segurança da sua conta Google ou Microsoft, ligue a verificação em dois passos e reveja os aparelhos com sessão iniciada. Depois termine a tarefa final com a sua pasta \"Documentos de Carreira\".",
          youCanNow: "proteger a sua conta na nuvem com a verificação em dois passos, uma verificação de segurança e atenção ao phishing.",
          quickCheck: [
            { objective: "O5", q: "O que é a verificação em dois passos?", options: ["Escrever a palavra-passe duas vezes", "Ter duas contas de e-mail diferentes", "Guardar a palavra-passe em dois lugares", "Uma segunda verificação, muitas vezes no telefone, depois da palavra-passe"], answer: 3, why: "Depois da palavra-passe, também confirma com o telefone, por isso um ladrão que só tem a palavra-passe não consegue entrar." },
            { objective: "O5", q: "Vê um telefone que não reconhece nos aparelhos com sessão iniciada da sua conta. O que faz?", options: ["Ignora; deve estar tudo bem", "Retira-o e muda a sua palavra-passe", "Partilha a sua palavra-passe com ele", "Desliga a verificação em dois passos"], answer: 1, why: "Retirar aparelhos desconhecidos numa verificação de segurança mantém os desconhecidos fora da sua conta." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a nuvem você mesmo",
        questions: [
          { objective: "O3", q: "O que quer dizer \"sincronizar\"?", options: ["Apagar um ficheiro", "Manter os ficheiros iguais em todos os seus aparelhos", "Imprimir um ficheiro", "Partilhar um ficheiro com desconhecidos"], answer: 1, why: "Sincronizar atualiza os ficheiros em todos os lugares onde inicia sessão." },
          { objective: "O4", q: "Partilha o seu currículo com um empregador. Que permissão é a melhor?", options: ["Editar", "Proprietário", "Só ver", "Qualquer pessoa com o link pode editar"], answer: 2, why: "Dê o mínimo de acesso necessário; ele só precisa de o ler." },
          { objective: "O4", q: "Um trabalho de grupo acabou no mês passado. O que deve fazer com a pasta partilhada?", options: ["Retirar as pessoas que já não precisam de acesso", "Torná-la pública", "Juntar mais pessoas", "Partilhar o link nas redes sociais"], answer: 0, why: "Retirar os acessos antigos mantém os seus ficheiros privados." },
          { objective: "O5", q: "Um e-mail diz \"O seu armazenamento está cheio, inicie sessão aqui.\" O que faz?", options: ["Clica e inicia sessão", "Responde com a sua palavra-passe", "Reencaminha-o para os amigos", "Vai você mesmo a drive.google.com ou onedrive.com"], answer: 3, why: "Pode ser phishing; vá você mesmo ao site verdadeiro." },
          { objective: "O5", q: "Qual é o passo mais importante para proteger uma conta na nuvem?", options: ["Uma palavra-passe curta", "A verificação em dois passos", "Partilhar a palavra-passe com um amigo", "Desligar a sincronização"], answer: 1, why: "Um ladrão que só tem a sua palavra-passe continua sem conseguir entrar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Computação na Nuvem",
    questions: [
      { objective: "O1", q: "Um centro de dados é:", options: ["Um edifício cheio de computadores que fazem funcionar os serviços na nuvem", "Uma loja de telefones", "Uma sala de informática da escola", "Um tipo de aplicação"], answer: 0, why: "Os serviços na nuvem funcionam em centros de dados." },
      { objective: "O1", q: "A computação na nuvem é como a eletricidade porque:", options: ["É sempre gratuita", "Usa o que precisa sem ser dono da central elétrica", "Só funciona à noite", "Não precisa de internet"], answer: 1, why: "Usa e paga o que precisa, como um serviço público de água ou luz." },
      { objective: "O1", q: "Qual é um serviço na nuvem que pode usar todos os dias?", options: ["Um caderno de papel", "Uma calculadora sem internet", "O Google Drive", "Um candeeiro de secretária"], answer: 2, why: "O Google Drive guarda ficheiros em computadores na nuvem." },
      { objective: "O1", q: "Um benefício da nuvem para uma empresa é:", options: ["Tem de comprar primeiro servidores caros", "Nunca precisa de internet", "Não são precisas palavras-passe", "Pode crescer e pagar mais computação só quando precisa"], answer: 3, why: "A isto chama-se escalabilidade." },
      { objective: "O1", q: "Qual é um grande fornecedor de nuvem para empresas?", options: ["Microsoft Azure", "Uma padaria do bairro", "Uma marca de impressoras", "Um navegador de internet"], answer: 0, why: "A AWS, o Azure e o Google Cloud são os maiores." },
      { objective: "O1", q: "Qual é um risco real de usar a nuvem?", options: ["Ficheiros em qualquer aparelho", "Equipas a partilhar documentos", "Precisar de uma ligação à internet", "Cópias de segurança automáticas"], answer: 2, why: "Sem internet, pode não chegar aos seus ficheiros." },
      { objective: "O2", q: "SaaS quer dizer:", options: ["Storage as a Server", "Software as a Service (Software como Serviço)", "Security and a System", "Sync and a Screen"], answer: 1, why: "SaaS são programas prontos usados pela internet." },
      { objective: "O2", q: "O Microsoft 365 é um exemplo de:", options: ["IaaS", "PaaS", "SaaS", "Um centro de dados"], answer: 2, why: "É um programa pronto que usa pela internet." },
      { objective: "O2", q: "Um programador faz funcionar a sua aplicação no Azure App Service sem gerir servidores. Isto é:", options: ["SaaS", "PaaS", "IaaS", "Um gestor de palavras-passe"], answer: 1, why: "Uma plataforma pronta para as suas próprias aplicações é PaaS." },
      { objective: "O2", q: "Os computadores virtuais do Amazon EC2 são um exemplo de:", options: ["SaaS", "PaaS", "Um navegador", "IaaS"], answer: 3, why: "Alugar computadores virtuais que você gere é IaaS." },
      { objective: "O2", q: "Na responsabilidade partilhada, o fornecedor protege:", options: ["Os seus centros de dados", "A sua palavra-passe", "Com quem partilha os ficheiros", "O que escolhe carregar"], answer: 0, why: "Você continua a proteger a sua própria conta e os seus dados." },
      { objective: "O3", q: "Que nome de ficheiro é o mais claro?", options: ["\"doc1\"", "\"coisas\"", "\"Currículo - Jordan Lee - 2026\"", "\"novo novo final\""], answer: 2, why: "Nomes claros tornam os ficheiros fáceis de encontrar." },
      { objective: "O3", q: "Para juntar à nuvem um ficheiro do seu aparelho, você:", options: ["Apaga-o", "Carrega-o", "Imprime-o", "Envia-o por e-mail a um desconhecido"], answer: 1, why: "Carregar copia-o para o armazenamento na nuvem." },
      { objective: "O3", q: "O histórico de versões deixa-o:", options: ["Voltar a uma cópia antiga de um ficheiro", "Ver os ficheiros de outras pessoas", "Ter mais armazenamento gratuito", "Mudar a sua palavra-passe"], answer: 0, why: "Guarda versões antigas que foram gravadas." },
      { objective: "O4", q: "Partilhar com \"qualquer pessoa com o link\" quer dizer:", options: ["Só você o pode abrir", "Só os seus contactos o podem abrir", "Ninguém o pode abrir", "Qualquer pessoa que receba o link o pode abrir, mesmo que seja reencaminhado"], answer: 3, why: "Os links podem ir mais longe do que queria." },
      { objective: "O4", q: "A ideia do mínimo de acesso quer dizer:", options: ["Dar a todos acesso para editar", "Dar às pessoas só o acesso de que precisam", "Nunca partilhar nada", "Partilhar tudo publicamente"], answer: 1, why: "Menos acesso quer dizer menos risco." },
      { objective: "O4", q: "O que nunca deve ir para uma pasta partilhada na nuvem?", options: ["O plano de um trabalho de grupo", "Um horário das aulas", "Um ficheiro com o seu número da Segurança Social", "Uma foto da equipa"], answer: 2, why: "Os números privados não devem estar em pastas partilhadas." },
      { objective: "O5", q: "A verificação em dois passos quer dizer:", options: ["Escrever a palavra-passe duas vezes", "Uma segunda verificação no telefone depois da palavra-passe", "Duas contas", "Duas pastas"], answer: 1, why: "Trava os ladrões que só têm a sua palavra-passe." },
      { objective: "O5", q: "Numa verificação de segurança, deve:", options: ["Retirar os aparelhos com sessão iniciada que não reconhece", "Desligar o seu telefone de recuperação", "Partilhar a sua palavra-passe", "Apagar todos os seus ficheiros"], answer: 0, why: "Aparelhos desconhecidos podem querer dizer que outra pessoa iniciou sessão." },
      { objective: "O5", q: "Um e-mail diz \"Alguém partilhou um ficheiro consigo\", de alguém que não conhece. O passo mais seguro é:", options: ["Clicar e iniciar sessão na página que abre", "Responder com a sua palavra-passe", "Reencaminhá-lo para todos", "Ir você mesmo ao site do seu armazenamento na nuvem para verificar"], answer: 3, why: "E-mails falsos de partilha levam a páginas falsas para iniciar sessão." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      6,
      9,
      11,
      13,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Pasta e ficheiros",
        objective: "O3",
        notYet: "Não há pasta \"Documentos de Carreira\", ou os ficheiros têm nomes pouco claros como \"doc1\".",
        meets: "A pasta tem dois ficheiros com nomes claros.",
        exceeds: "Os ficheiros também são abertos num segundo aparelho para mostrar que se sincronizam."
      },
      {
        name: "Partilha segura",
        objective: "O4",
        notYet: "O ficheiro foi partilhado com acesso para editar ou como \"qualquer pessoa com o link\", ou o acesso nunca foi retirado.",
        meets: "Um ficheiro foi partilhado só para ver, o acesso foi verificado e depois retirado.",
        exceeds: "Sabe explicar porque só ver era o mínimo de acesso necessário."
      },
      {
        name: "Conta protegida",
        objective: "O5",
        notYet: "A verificação em dois passos está desligada.",
        meets: "A verificação em dois passos está ligada e os aparelhos com sessão iniciada foram revistos.",
        exceeds: "O telefone e o e-mail de recuperação também foram verificados, e o aluno sabe dizer um sinal de alerta de phishing."
      },
      {
        name: "A nuvem explicada",
        objective: "O1",
        notYet: "Faltam as três frases, ou não dizem o que é a nuvem.",
        meets: "Três frases claras dizem o que é a nuvem e dão um benefício e um risco.",
        exceeds: "As frases também usam uma comparação do dia a dia, como a eletricidade."
      },
      {
        name: "Tipos de serviço",
        objective: "O2",
        notYet: "Um ou mais dos exemplos de SaaS, PaaS e IaaS está errado ou falta.",
        meets: "Um exemplo certo de cada: SaaS, PaaS e IaaS.",
        exceeds: "Também diz pelo que o utilizador continua a ser responsável na responsabilidade partilhada."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter a verificação em dois passos ligada na sua conta principal 30 dias depois (inquérito de seguimento)",
      "Alunos que usam o armazenamento na nuvem para documentos da escola, do emprego ou do programa em 30 dias",
      "Alunos que começam o curso \"Fundamentos do Microsoft Azure\" ou outro curso de tecnologia em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com internet; um segundo aparelho ajuda, mas é opcional",
      "Uma conta Google gratuita (Google Drive) ou uma conta Microsoft (OneDrive)",
      "Um telefone que possa receber códigos ou avisos para a verificação em dois passos",
      "Papel e caneta para as notas do \"Experimente agora\"",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Use só ficheiros de prática (um currículo de exemplo ou uma lista de referências com nomes inventados); nunca números de identificação verdadeiros, dados bancários ou palavras-passe.",
      "Ponha os alunos em pares para partilharem um ficheiro um com o outro, só para ver, e depois retirarem o acesso durante a lição.",
      "Nos computadores partilhados, confirme que os alunos terminam a sessão e fecham o navegador antes de sair.",
      "Para alunos com menos de 18 anos, siga as regras da escola ou do programa sobre contas pessoais; pode usar-se uma conta da escola se ela permitir partilhar."
    ]
  }
};
