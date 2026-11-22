"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-va-benefits-gi-bill.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US names (VA, va.gov, GI Bill, DD214, VSO, form numbers) are kept as written and explained.

module.exports = {
  id: "veterans-va-benefits-gi-bill-pt",
  lang: "pt",
  translationOf: "veterans-va-benefits-gi-bill",
  category: "Veterans (military)",
  name: "Benefícios do VA e o GI Bill",
  skills: "Preparar os seus documentos, Apresentar um pedido de compensação por incapacidade, Pedir os cuidados de saúde do VA, Compreender o GI Bill, Pedir os benefícios de educação, Ter ajuda gratuita de um VSO acreditado",
  outcome: "fazer e começar um plano de ação para os benefícios do VA: juntar os seus documentos, pedir a compensação por incapacidade, os cuidados de saúde ou o GI Bill da forma certa, e ter ajuda gratuita de um representante de veteranos (VSO) acreditado pelo VA em vez de pagar a alguém para fazer o pedido.",
  about: [
    "Este curso é para veteranos, militares que se preparam para sair do serviço e familiares que os ajudam. O VA (Department of Veterans Affairs) é o serviço do governo dos Estados Unidos para os veteranos. Muitos veteranos nunca pedem os benefícios que ganharam, ou esperam anos, porque o processo parece confuso.",
    "Você vai juntar os papéis que o VA pede, aprender as formas de apresentar um pedido de compensação por incapacidade e de pedir cuidados de saúde, aprender o que o GI Bill pode pagar e como o pedir, e encontrar um representante gratuito e acreditado pelo VA para o ajudar. Também vai aprender os sinais de alerta de pessoas que cobram para fazer pedidos.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As regras, os formulários e os prazos do VA mudam, por isso confirme os detalhes em va.gov ou com um representante acreditado antes de fazer o pedido."
  ],
  finalTask: "Faça o seu plano de ação para os benefícios do VA: (1) uma lista dos seus documentos, a começar pelo seu DD214; (2) cada benefício que vai pedir (compensação por incapacidade, cuidados de saúde, educação) e como o vai pedir; (3) se vai usar o GI Bill, qual programa, qual escola ou formação e o que precisa para isso; (4) o nome e o contacto de um representante ou VSO acreditado pelo VA que encontrou com a ferramenta de pesquisa do VA; (5) três sinais de alerta de alguém a quem não se deve pagar para fazer o seu pedido. Depois dê o primeiro passo num benefício.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos, militares que se preparam para sair do serviço e familiares que os ajudam. Muitos nunca pediram os benefícios que ganharam, ou esperaram anos porque o processo parece confuso.",
    startingPoint: "Sabem usar um telefone ou um computador e têm, ou podem pedir, o seu DD214. A maioria não sabe que formulários usar, como proteger a data de início de um pedido, em que diferem os programas do GI Bill, nem que a ajuda acreditada é gratuita.",
    gap: "Os veteranos perdem dinheiro e cuidados por não pedirem, por perderem prazos ou por pagarem a pessoas que não deviam cobrar para fazer pedidos. Os alunos precisam de um plano de ação claro: documentos prontos, a forma certa de pedir cada benefício, um plano para o GI Bill e um representante gratuito acreditado pelo VA.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; os termos do VA são explicados",
      "Aparelhos: um telefone ou um computador; os pedidos em papel também são explicados",
      "Privacidade: nada de números da Segurança Social, detalhes médicos ou dados de acesso a va.gov em assistentes de IA ou com ajudantes não acreditados",
      "Os formulários, as regras e os números de telefone mudam, por isso os alunos confirmam-nos em va.gov antes de agir",
      "As decisões de saúde e legais ficam com o VA ou com um representante acreditado, não com o curso"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Antes de pedir qualquer benefício do VA", action: "juntar os documentos que o VA pede, a começar pelo seu DD214, e fazer a lista dos benefícios que pode pedir", standard: "com os documentos em falta assinalados e cópias guardadas num lugar seguro" },
    { id: "O2", condition: "Para as doenças que acha que estão ligadas ao seu serviço", action: "escolher como vai apresentar um pedido de compensação por incapacidade e fazer a lista das provas de cada doença", standard: "usando uma forma oficial de fazer o pedido e protegendo a sua data de início" },
    { id: "O3", condition: "Usando uma lista de prática", action: "preparar as informações para um pedido de cuidados de saúde do VA (10-10EZ) e escolher como o vai fazer", standard: "com o seu historial de serviço, exposições, seguros e rendimentos assinalados como prontos ou ainda em falta" },
    { id: "O4", condition: "Com o seu objetivo de carreira", action: "descrever os principais programas do GI Bill e dois tipos de formação que eles podem pagar", standard: "indicando uma formação que sirva o seu objetivo" },
    { id: "O5", condition: "Com duas escolas ou programas de formação", action: "compará-los na GI Bill Comparison Tool e planear o seu pedido de benefícios de educação", standard: "com dois dados sobre cada um e o seu pedido verificado antes de o enviar" },
    { id: "O6", condition: "Quando quer ajuda com um pedido", action: "encontrar um representante gratuito acreditado pelo VA e identificar os sinais de alerta de alguém a quem não se deve pagar", standard: "com o nome e o contacto de um representante e três sinais de alerta escritos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pedir os benefícios do VA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Preparar-se: os seus documentos e a sua lista de benefícios",
          minutes: 5,
          goal: "Juntar os documentos que o VA pede e fazer a lista dos benefícios que pode pedir.",
          text: [
            "Os benefícios do VA são coisas que você ganhou com o seu serviço. Os mais comuns são a compensação por incapacidade (pagamentos mensais por doenças causadas ou agravadas pelo serviço), os cuidados de saúde do VA, os benefícios de educação como o GI Bill, e o Veteran Readiness and Employment (apoio para preparar e encontrar trabalho). Há outros, como ajuda para empréstimos de casa, pensão e benefícios de funeral. Cada um tem as suas regras.",
            "O papel mais importante é o seu DD214 ou outros documentos de saída do serviço. O VA usa-o para confirmar o seu serviço. Guarde cópias num lugar seguro. Se não encontrar o seu, va.gov explica como pedir os seus registos militares.",
            "Outras coisas que o VA pode pedir: o seu número da Segurança Social (Social Security), os dados do banco para o depósito direto, os seus registos médicos e os nomes dos seus médicos, informações sobre o seu cônjuge e os seus dependentes, os cartões de seguro e, para algumas decisões de saúde, os seus rendimentos do ano passado.",
            "Crie uma conta de acesso em va.gov para poder fazer pedidos pela internet, enviar documentos e ver o andamento. Use só o site oficial. Não partilhe os seus dados de acesso com ninguém e nunca escreva o seu número da Segurança Social ou detalhes médicos num assistente de IA."
          ],
          steps: ["Encontre o seu DD214 ou outros papéis de saída do serviço e faça cópias.", "Junte os registos médicos e uma lista dos seus médicos.", "Escreva que benefícios quer ver: incapacidade, cuidados de saúde, educação, outros.", "Crie uma conta de acesso em va.gov.", "Guarde tudo numa só pasta."],
          words: [["DD214", "o documento que mostra o seu serviço militar e como saiu do serviço."], ["Compensação por incapacidade", "pagamentos mensais, sem impostos, por doenças causadas ou agravadas pelo serviço militar."], ["Dependente", "um cônjuge, um filho ou outro familiar que depende de você."]],
          slides: [
            { title: "Benefícios que você ganhou", bullets: ["Compensação por incapacidade", "Cuidados de saúde do VA", "Educação: o GI Bill", "Veteran Readiness and Employment, e mais"] },
            { title: "O seu papel mais importante", bullets: ["DD214 ou outros papéis de saída do serviço", "Guarde cópias em segurança", "Perdeu-o? va.gov explica como pedir os registos"] },
            { title: "Outras coisas que o VA pode pedir", bullets: ["Registos médicos e médicos", "Dados do cônjuge e dos dependentes", "Dados do banco para o depósito direto"] },
            { title: "A sua conta em va.gov", bullets: ["Peça, envie documentos e veja o andamento pela internet", "Use só o site oficial", "Nunca partilhe os seus dados de acesso"] }
          ],
          sources: [{ name: "VA: How to file a VA disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Faça uma pasta (em papel ou uma pasta segura no seu próprio computador) e ponha nela, ou escreva o que falta: o seu DD214, os registos médicos, uma lista dos seus médicos e os dados dos seus dependentes. Escreva os benefícios que quer ver.",
          youCanNow: "juntar os documentos que o VA pede e fazer a lista dos benefícios que pode pedir.",
          quickCheck: [
            { objective: "O1", q: "Porque guardar cópias do seu DD214 num lugar seguro?", options: ["Para o publicar na internet", "Para uma IA o poder ler", "O VA usa-o para confirmar o seu serviço, e vai precisar dele outra vez", "Ele perde a validade ao fim de um ano"], answer: 2, why: "O seu DD214 confirma o seu serviço para muitos benefícios, por isso guarde cópias em segurança." },
            { objective: "O1", q: "Quer que um assistente de IA o ajude a compreender os seus benefícios. O que deixa de fora?", options: ["O seu número da Segurança Social e os detalhes médicos", "O nome do benefício", "A palavra \"veterano\"", "A sua pergunta"], answer: 0, why: "Os números privados e os detalhes médicos nunca vão para um assistente de IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Apresentar um pedido de compensação por incapacidade",
          minutes: 6,
          goal: "Escolher como vai apresentar um pedido de incapacidade e proteger a sua data de início.",
          text: [
            "Pode apresentar um pedido de incapacidade pela internet em va.gov, pelo correio com o VA Form 21-526EZ, pessoalmente num escritório regional do VA, ou com a ajuda de um representante acreditado. O VA diz que começar o formulário pela internet marca a sua data de efeito automaticamente.",
            "A data de efeito é importante porque pode decidir a partir de quando os pagamentos começam a contar. Se começar pela internet, o VA usa a data em que começou como data do pedido, desde que termine dentro de 365 dias. Se fizer o pedido em papel, pode enviar primeiro uma intenção de pedido (intent to file) para guardar uma possível data de efeito enquanto junta as provas.",
            "As provas decidem um pedido. O VA analisa o seu DD214 ou os papéis de saída do serviço e os seus registos de tratamento durante o serviço. Junte o que tiver: registos de médicos privados e declarações suas ou de pessoas que viram como a doença o afeta. Escreva todas as doenças que acha que estão ligadas ao seu serviço.",
            "Depois de fazer o pedido, o VA pode marcar um exame. Vá ao exame. Veja o andamento do seu pedido em va.gov. O VA publica o seu tempo médio de processamento, que muda, por isso veja o número atual em va.gov. Se não concordar com uma decisão, há formas de pedir uma revisão; um representante acreditado pode ajudar."
          ],
          steps: ["Decida como fazer o pedido: pela internet, pelo correio (VA Form 21-526EZ), pessoalmente ou com um representante acreditado.", "Se fizer o pedido pela internet, comece o formulário para marcar a sua data e termine dentro de 365 dias.", "Se fizer o pedido em papel, pense em enviar primeiro uma intenção de pedido.", "Escreva todas as doenças e junte as suas provas.", "Vá a qualquer exame do VA e veja o andamento em va.gov."],
          words: [["Data de efeito (effective date)", "a data que o VA usa para decidir a partir de quando os seus pagamentos começam a contar."], ["Intenção de pedido (intent to file)", "um aviso ao VA de que vai fazer um pedido, que pode guardar a sua data de efeito enquanto junta as provas."], ["Provas", "registos e declarações que apoiam o seu pedido."], ["Ligação ao serviço", "uma ligação entre uma doença e o seu serviço militar."]],
          slides: [
            { title: "Quatro formas de fazer o pedido", bullets: ["Pela internet em va.gov", "Pelo correio: VA Form 21-526EZ", "Pessoalmente num escritório regional do VA", "Com um representante acreditado"] },
            { title: "Proteja a sua data de início", bullets: ["Internet: a data conta se terminar em 365 dias", "Papel: pense primeiro numa intenção de pedido"] },
            { title: "As provas ganham pedidos", bullets: ["DD214 e registos de tratamento no serviço", "Registos de médicos privados", "Declarações suas e de testemunhas"] },
            { title: "Depois de fazer o pedido", bullets: ["Vá ao seu exame do VA", "Veja o andamento em va.gov", "Não concorda? Pergunte a um representante sobre uma revisão"] }
          ],
          sources: [{ name: "VA: How to file a VA disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Escreva todas as doenças que acha que podem estar ligadas ao seu serviço. Ao lado de cada uma, escreva uma prova que tem ou que pode obter. Depois decida de que forma vai fazer o pedido e escreva-a no topo.",
          youCanNow: "escolher como apresentar um pedido de incapacidade, proteger a sua data de efeito e juntar provas para cada doença.",
          quickCheck: [
            { objective: "O2", q: "Qual é uma forma oficial de apresentar um pedido de incapacidade?", options: ["Enviar uma SMS a um desconhecido que oferece ajuda", "Publicar num grupo de uma rede social", "Enviar um email a uma empresa que cobra uma percentagem", "Pela internet em va.gov"], answer: 3, why: "Fazer o pedido pela internet em va.gov é uma das formas oficiais do VA." },
            { objective: "O2", q: "Escreveu na lista um problema no joelho do tempo do serviço. O que escreve ao lado?", options: ["Nada; o VA encontra tudo", "Uma prova, como registos de tratamento no serviço ou de um médico", "Um palpite sobre a sua classificação", "A sua palavra-passe de va.gov"], answer: 1, why: "Cada doença precisa de provas, como registos de tratamento no serviço ou de um médico." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pedir os cuidados de saúde do VA",
          minutes: 4,
          goal: "Pedir os cuidados de saúde do VA com as informações certas prontas.",
          text: [
            "Os cuidados de saúde do VA são um pedido separado da compensação por incapacidade. O pedido faz-se com o VA Form 10-10EZ, o pedido de benefícios de saúde (Application for Health Benefits).",
            "Pode fazer o pedido pela internet em va.gov, por telefone pela linha de benefícios de saúde do VA no 877-222-8387 (o VA indica de segunda a sexta-feira, das 8:00 às 20:00, hora do Leste dos EUA), pelo correio, ou pessoalmente num centro médico ou clínica do VA. Um representante acreditado também pode ajudar.",
            "Tenha pronto: o seu DD214 e o historial de serviço, incluindo qualquer exposição tóxica ou perigosa; os números da Segurança Social seus, do seu cônjuge e dos dependentes que contam; os seus cartões de seguro, incluindo o Medicare ou um plano do trabalho; e os rendimentos da sua família no ano passado. O VA diz que pode deixar os rendimentos de fora, mas pode precisar deles para decidir o seu pedido.",
            "Exemplo: um fuzileiro (Marine) que serviu no estrangeiro tem asma e quer um médico de família. Ele pede os cuidados de saúde pela internet na mesma semana em que faz o pedido de incapacidade, escreve o seu historial de exposição e marca a primeira consulta assim que fica inscrito."
          ],
          steps: ["Junte o seu DD214, o historial de exposição, os números da Segurança Social e os cartões de seguro.", "Escreva os rendimentos da sua família no ano passado.", "Faça o pedido pela internet em va.gov, por telefone no 877-222-8387, pelo correio ou pessoalmente.", "Esteja atento à decisão do VA e marque a sua primeira consulta."],
          words: [["VA Form 10-10EZ", "o pedido de benefícios de saúde do VA."], ["Exposição tóxica", "contacto durante o serviço com coisas perigosas, como fossas de queima (burn pits), produtos químicos ou radiação."]],
          slides: [
            { title: "Um pedido separado", bullets: ["Os cuidados de saúde não são o mesmo que um pedido de incapacidade", "Formulário: VA Form 10-10EZ"] },
            { title: "Formas de fazer o pedido", bullets: ["Pela internet em va.gov", "Telefone: 877-222-8387", "Correio, ou pessoalmente num serviço do VA"] },
            { title: "Tenha pronto", bullets: ["DD214 e historial de exposição", "Números da Segurança Social e cartões de seguro", "Rendimentos da família no ano passado"] }
          ],
          sources: [{ name: "VA: How to apply for VA health care", url: "https://www.va.gov/health-care/how-to-apply/" }],
          tryIt: "Preencha uma lista de prática para o 10-10EZ: DD214 (tem ou não tem), historial de exposição, cartões de seguro, rendimentos da família no ano passado. Assinale o que tem e o que ainda falta, e escolha como vai fazer o pedido.",
          youCanNow: "pedir os cuidados de saúde do VA com as informações certas e conhecer as formas de fazer o pedido.",
          quickCheck: [
            { objective: "O3", q: "Para que serve o VA Form 10-10EZ?", options: ["Apresentar um pedido de incapacidade", "Pedir os cuidados de saúde do VA", "Pedir o GI Bill", "Escolher um VSO"], answer: 1, why: "O 10-10EZ é o pedido de cuidados de saúde do VA." },
            { objective: "O3", q: "Está a preencher a sua lista para os cuidados de saúde. O que inclui sobre o seu serviço?", options: ["Nada sobre o seu serviço", "Só o seu posto", "Só a sua base preferida", "O seu historial de serviço, incluindo qualquer exposição tóxica ou perigosa"], answer: 3, why: "O VA pergunta pelo seu historial de serviço e pelas exposições quando pede cuidados de saúde." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Pedir os benefícios do VA",
        questions: [
          { objective: "O1", q: "Que documento usa o VA para confirmar o seu serviço?", options: ["A sua carta de condução", "Um recibo de salário de um trabalho civil", "O seu DD214 ou outros papéis de saída do serviço", "Um cartão de ginásio"], answer: 2, why: "O VA analisa o seu DD214 ou os documentos de saída do serviço." },
          { objective: "O2", q: "Começou um pedido de incapacidade pela internet, mas precisa de tempo para obter registos. Quanto tempo tem para terminar e manter a sua data de início?", options: ["365 dias", "7 dias", "30 dias", "Não há data de início"], answer: 0, why: "O VA diz que a data em que começou conta se terminar dentro de 365 dias." },
          { objective: "O2", q: "Para que serve o VA Form 21-526EZ?", options: ["Pedir o GI Bill", "Pedir os cuidados de saúde do VA", "Mudar a sua morada", "Pedir a compensação por incapacidade pelo correio"], answer: 3, why: "É o pedido de compensação por incapacidade (Application for Disability Compensation)." },
          { objective: "O3", q: "Que formulário se usa para pedir os cuidados de saúde do VA?", options: ["DD214", "VA Form 10-10EZ", "VA Form 22-1990", "Um W-2"], answer: 1, why: "O 10-10EZ é o pedido de benefícios de saúde." },
          { objective: "O2", q: "Apresentou um pedido de incapacidade. O que deve fazer também?", options: ["Ir a qualquer exame do VA marcado para você", "Ignorar as cartas do VA", "Pagar a alguém para acelerar", "Apresentar o mesmo pedido muitas vezes"], answer: 0, why: "O exame faz parte da decisão; faltar pode prejudicar o seu pedido." }
        ]
      }
    },
    {
      name: "Capítulo 2: O GI Bill e a ajuda gratuita",
      lessons: [
        {
          objectives: ["O4"],
          title: "Compreender o GI Bill",
          minutes: 5,
          goal: "Dizer os principais programas do GI Bill e fazer a lista do que eles podem pagar.",
          text: [
            "O GI Bill ajuda a pagar a escola e a formação. O programa principal hoje é o Post-9/11 GI Bill (Chapter 33), para quem serviu no ativo depois de 10 de setembro de 2001. Pode ajudar a pagar a escola e cobrir custos enquanto se forma para um trabalho.",
            "Outros programas são o Montgomery GI Bill Active Duty (Chapter 30) e o Montgomery GI Bill Selected Reserve (Chapter 1606), para membros da Reserva e da Guarda Nacional. O programa que pode usar depende do seu serviço.",
            "O GI Bill não é só para a universidade de quatro anos. O VA indica usos como licenciaturas e pós-graduações, programas que não são universitários, formação no trabalho e aprendizagens profissionais, exames de licença e de certificação, formação de voo, ensino pela internet e mais. O Yellow Ribbon Program pode ajudar a cobrir as propinas que o Post-9/11 GI Bill não cobre, nas escolas que participam.",
            "Alguns militares podem transferir os benefícios do Post-9/11 que não usaram para o cônjuge ou os filhos. Se já tem benefícios do Post-9/11, veja quanto lhe resta na sua declaração de benefícios do GI Bill (GI Bill Statement of Benefits) em va.gov."
          ],
          words: [["GI Bill", "benefícios de educação do VA que ajudam a pagar a escola ou a formação."], ["Post-9/11 GI Bill", "o GI Bill para quem serviu no ativo depois de 10 de setembro de 2001 (Chapter 33)."], ["Yellow Ribbon Program", "um programa que pode cobrir as propinas que o Post-9/11 GI Bill não cobre, nas escolas que participam."], ["Aprendizagem profissional (apprenticeship)", "formação paga no trabalho para uma profissão especializada."]],
          slides: [
            { title: "Principais programas do GI Bill", bullets: ["Post-9/11 GI Bill (Chapter 33)", "Montgomery GI Bill Active Duty (Chapter 30)", "Montgomery GI Bill Selected Reserve (Chapter 1606)"] },
            { title: "Não é só a universidade", bullets: ["Cursos superiores e programas não universitários", "Aprendizagens profissionais e formação no trabalho", "Exames de licença e de certificação"] },
            { title: "Ajuda extra", bullets: ["Yellow Ribbon: propinas que o GI Bill não cobre", "Transferir para o cônjuge ou os filhos, para alguns"] },
            { title: "Veja quanto lhe resta", bullets: ["GI Bill Statement of Benefits em va.gov"] }
          ],
          sources: [{ name: "VA: About GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" }],
          tryIt: "Escreva a profissão que quer. Depois escreva dois tipos de formação aceites pelo GI Bill que o podem levar até lá, por exemplo uma aprendizagem de eletricista e um curso de certificado, ou um curso superior e um exame de licença.",
          youCanNow: "dizer os principais programas do GI Bill e ligar uma formação aceite pelo GI Bill a um objetivo de carreira.",
          quickCheck: [
            { objective: "O4", q: "Que outro nome tem o Post-9/11 GI Bill?", options: ["Chapter 33", "Form 10-10EZ", "VetCert", "Chapter 1"], answer: 0, why: "O Post-9/11 GI Bill é o Chapter 33." },
            { objective: "O4", q: "Quer ser eletricista sem um curso de quatro anos. O que escreve no seu plano?", options: ["O GI Bill só paga cursos superiores", "Desistir do GI Bill", "Uma aprendizagem profissional ou formação no trabalho com que o GI Bill pode ajudar", "Pagar tudo sozinho"], answer: 2, why: "O GI Bill pode ajudar com aprendizagens profissionais e formação no trabalho, não só com cursos superiores." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Pedir o GI Bill e escolher uma escola",
          minutes: 5,
          goal: "Pedir os benefícios de educação e comparar escolas antes de se inscrever.",
          text: [
            "Peça os benefícios de educação pela internet em va.gov. Se fizer o pedido pelo correio, use o VA Form 22-1990, o pedido de benefícios de educação do VA, para o Post-9/11 GI Bill e os programas Montgomery GI Bill. Os familiares que usam benefícios transferidos usam outro formulário, o VA Form 22-1990e.",
            "Tenha pronto: o seu número da Segurança Social, os dados do banco para o depósito direto, o seu historial escolar e militar, e os dados básicos da escola ou do programa de formação. O VA diz que não pode mudar o pedido depois de o enviar, por isso verifique-o antes.",
            "O VA diz que demora em média cerca de 30 dias a processar os pedidos de educação, mas veja os prazos atuais em va.gov. Quando for aprovado, o VA envia um Certificado de Elegibilidade (Certificate of Eligibility). Dê uma cópia ao responsável de certificação da sua escola, que muitas vezes está no gabinete de veteranos ou de serviços militares.",
            "Antes de se inscrever, compare escolas com a GI Bill Comparison Tool do VA em va.gov, e pergunte à escola sobre os custos, os resultados de emprego e se participa no Yellow Ribbon. Tenha cuidado com escolas que o pressionam a inscrever-se depressa."
          ],
          steps: ["Escolha o seu programa e a escola ou a formação.", "Compare-a com a GI Bill Comparison Tool em va.gov.", "Junte o seu número da Segurança Social, os dados do banco e o historial escolar e militar.", "Faça o pedido pela internet, ou pelo correio com o VA Form 22-1990.", "Dê o seu Certificado de Elegibilidade ao responsável de certificação da escola."],
          words: [["Certificado de Elegibilidade (COE)", "a carta do VA que mostra que benefício de educação você tem e quanto."], ["Responsável de certificação da escola", "a pessoa da escola que informa o VA de que você está inscrito."], ["VA Form 22-1990", "o pedido de benefícios de educação do VA."]],
          slides: [
            { title: "Como fazer o pedido", bullets: ["Pela internet em va.gov", "Pelo correio: VA Form 22-1990", "Familiares com benefícios transferidos: 22-1990e"] },
            { title: "Tenha pronto", bullets: ["Número da Segurança Social e dados do banco", "Historial escolar e militar", "Dados da escola ou do programa"] },
            { title: "Depois de fazer o pedido", bullets: ["Cerca de 30 dias em média; veja em va.gov", "Recebe um Certificado de Elegibilidade", "Dê-o ao responsável de certificação da escola"] },
            { title: "Compare antes de se inscrever", bullets: ["GI Bill Comparison Tool em va.gov", "Pergunte sobre custos, resultados de emprego, Yellow Ribbon", "Vá-se embora se o pressionarem a assinar depressa"] }
          ],
          sources: [
            { name: "VA: How to apply for the GI Bill and related benefits", url: "https://www.va.gov/education/how-to-apply/" },
            { name: "VA: GI Bill Comparison Tool", url: "https://www.va.gov/education/gi-bill-comparison-tool/" }
          ],
          tryIt: "Escolha duas escolas ou programas de formação para o seu objetivo de carreira. Procure cada um na GI Bill Comparison Tool em va.gov e escreva dois dados sobre cada um e uma pergunta que faria ao gabinete de veteranos.",
          youCanNow: "pedir os benefícios do GI Bill, comparar escolas antes de se inscrever e usar o seu Certificado de Elegibilidade.",
          quickCheck: [
            { objective: "O5", q: "Em que o ajuda a GI Bill Comparison Tool?", options: ["Apresentar um pedido de incapacidade", "Encontrar um VSO", "Comparar escolas e programas de formação antes de se inscrever", "Mudar o seu GI Bill depois de enviar o pedido"], answer: 2, why: "A Comparison Tool mostra dados sobre escolas e programas para os poder comparar." },
            { objective: "O5", q: "Terminou o seu pedido do GI Bill. O que faz antes de o enviar?", options: ["Verifica-o com cuidado, porque não o pode mudar depois de enviar", "Envia-o depressa e corrige depois", "Pede a um desconhecido para o enviar", "Deixa campos em branco"], answer: 0, why: "Não pode mudar o pedido depois de o enviar, por isso verifique-o antes." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ter ajuda gratuita e evitar quem cobra para fazer pedidos",
          minutes: 5,
          goal: "Encontrar um representante gratuito acreditado pelo VA e reconhecer as pessoas a quem não se deve pagar.",
          text: [
            "Não tem de fazer o pedido sozinho. O VA acredita três tipos de representantes: representantes de organizações de veteranos (Veterans Service Organization, VSO), advogados e agentes de pedidos (claims agents). O VA diz que os serviços de um representante de VSO acreditado no seu pedido são sempre gratuitos. Eles podem ajudar a juntar provas, fazer um pedido, pedir uma revisão de uma decisão e falar com o VA por você. Muitos estados e condados também têm funcionários de apoio aos veteranos.",
            "Encontre um com a ferramenta do VA \"Find a VA-accredited representative or VSO\" em va.gov. O VA diz para confirmar que quem o ajuda com o pedido é acreditado antes de o escolher.",
            "Os advogados e os agentes de pedidos podem cobrar honorários, mas o VA diz que só depois de o VA ter decidido o seu primeiro pedido, e só com um acordo de honorários assinado. Isso quer dizer que quem lhe cobra para fazer o seu primeiro pedido, ou promete uma classificação mais alta em troca de dinheiro, é um sinal de alerta. Algumas pessoas não acreditadas, às vezes chamadas \"claim sharks\" (tubarões dos pedidos), pedem uma parte dos seus pagamentos atrasados futuros, os seus dados de acesso ou dinheiro adiantado.",
            "Nunca dê a ninguém os seus dados de acesso a va.gov. Se achar que um representante agiu mal ou cobrou honorários injustos, pode contactar o Office of General Counsel (gabinete jurídico) do VA, e tem de agir depressa nas disputas sobre honorários."
          ],
          steps: ["Abra a ferramenta do VA \"Find a VA-accredited representative or VSO\" em va.gov.", "Procure perto de você e escolha um representante de VSO (gratuito).", "Confirme que é acreditado antes de partilhar qualquer coisa.", "Nunca pague para fazer um primeiro pedido e nunca partilhe os seus dados de acesso a va.gov.", "Comunique os problemas ao Office of General Counsel do VA."],
          words: [["VSO", "Veterans Service Organization: uma organização cujos representantes acreditados ajudam os veteranos com os pedidos de graça."], ["Acreditado", "aprovado pelo VA para ajudar com os pedidos ao VA."], ["Claim shark", "uma pessoa ou empresa não acreditada que cobra aos veteranos para fazer os pedidos."]],
          slides: [
            { title: "Existe ajuda gratuita", bullets: ["Os representantes de VSO acreditados são sempre gratuitos", "Juntam provas, fazem o pedido e falam com o VA"] },
            { title: "Encontre um", bullets: ["Ferramenta do VA: Find a VA-accredited representative", "Confirme a acreditação antes de escolher"] },
            { title: "Sinais de alerta", bullets: ["Cobra para fazer o seu primeiro pedido", "Promete uma classificação mais alta a troco de dinheiro", "Quer os seus dados de acesso a va.gov ou parte dos pagamentos atrasados"] },
            { title: "Proteja-se", bullets: ["Nunca partilhe os seus dados de acesso a va.gov", "Comunique problemas ao Office of General Counsel do VA"] }
          ],
          sources: [
            { name: "VA: Accredited representative FAQs", url: "https://www.va.gov/resources/va-accredited-representative-faqs/" },
            { name: "VA: Find a VA-accredited representative or VSO", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" }
          ],
          tryIt: "Tarefa final: use a ferramenta do VA \"Find a VA-accredited representative or VSO\" para encontrar um representante gratuito perto de você e escreva o nome e como o contactar. Depois termine o seu plano de ação para os benefícios do VA com a lista de documentos, os benefícios que vai pedir e como, o seu plano para o GI Bill se tiver um, e três sinais de alerta de claim sharks. Dê o primeiro passo num benefício.",
          youCanNow: "encontrar um VSO gratuito e acreditado, reconhecer as pessoas a quem não se deve pagar para fazer pedidos, e começar o seu plano de ação para os benefícios do VA.",
          quickCheck: [
            { objective: "O6", q: "Quem é que o VA acredita para ajudar com os pedidos?", options: ["Qualquer pessoa com um site", "Qualquer empresa que faz publicidade para veteranos", "Amigos que já fizeram pedidos", "Representantes de VSO, advogados e agentes de pedidos"], answer: 3, why: "O VA acredita representantes de VSO, advogados e agentes de pedidos." },
            { objective: "O6", q: "Um ajudante diz que faz o seu primeiro pedido depressa se partilhar os seus dados de acesso a va.gov. O que faz?", options: ["Partilha-os para ganhar tempo", "Recusa e encontra um representante acreditado gratuito com a ferramenta de pesquisa do VA", "Partilha só a palavra-passe", "Paga-lhe primeiro"], answer: 1, why: "Nunca partilhe os seus dados de acesso; há ajuda acreditada gratuita através da ferramenta de pesquisa do VA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: O GI Bill e a ajuda gratuita",
        questions: [
          { objective: "O4", q: "Para quem é o Post-9/11 GI Bill?", options: ["Qualquer pessoa que vive nos EUA", "Só oficiais", "Só cônjuges", "Quem serviu no ativo depois de 10 de setembro de 2001"], answer: 3, why: "O VA diz que o Post-9/11 GI Bill é para o serviço no ativo depois de 10 de setembro de 2001." },
          { objective: "O4", q: "Qual destes o GI Bill pode ajudar a pagar?", options: ["Um empréstimo para um carro", "Uma aprendizagem profissional ou um exame de licença", "A renda em casa dos seus pais", "A sua conta de telefone"], answer: 1, why: "O VA indica as aprendizagens profissionais, a formação no trabalho e os exames de licença entre os usos do GI Bill." },
          { objective: "O5", q: "Depois de ser aprovado para o GI Bill, quem recebe uma cópia do seu Certificado de Elegibilidade?", options: ["Um recrutador", "O seu senhorio", "O responsável de certificação da sua escola", "Ninguém"], answer: 2, why: "O responsável de certificação da escola usa-o para informar o VA da sua inscrição." },
          { objective: "O6", q: "Quanto cobra um representante de VSO acreditado para ajudar com o seu pedido?", options: ["Nada; é sempre gratuito", "Uma parte dos seus pagamentos atrasados", "Honorários antes de fazer o pedido", "Um mês de pagamentos"], answer: 0, why: "O VA diz que os serviços dos representantes de VSO acreditados são sempre gratuitos." },
          { objective: "O6", q: "Uma empresa oferece-se para fazer o seu primeiro pedido de incapacidade por 20% dos seus pagamentos atrasados. O que é isto?", options: ["Uma taxa normal do VA", "Um programa do VA", "Um sinal de alerta; use antes um VSO acreditado gratuito", "Obrigatório por lei"], answer: 2, why: "Os honorários só são permitidos depois de o VA decidir o primeiro pedido, com um acordo assinado, e só por advogados ou agentes acreditados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Benefícios do VA e o GI Bill",
    questions: [
      { objective: "O2", q: "O que é a compensação por incapacidade?", options: ["Um cartão-presente de uma só vez", "Pagamentos mensais por doenças causadas ou agravadas pelo serviço", "Um empréstimo escolar", "Uma oferta de emprego"], answer: 1, why: "Paga aos veteranos por doenças ligadas ao serviço." },
      { objective: "O1", q: "O que deve fazer com o seu DD214?", options: ["Guardar cópias num lugar seguro", "Deitá-lo fora depois de sair do serviço", "Publicá-lo na internet", "Dar o original a quem pedir"], answer: 0, why: "O VA usa-o para confirmar o seu serviço, por isso guarde-o em segurança." },
      { objective: "O1", q: "Onde deve pedir os benefícios do VA pela internet?", options: ["Em qualquer site com uma bandeira", "Num link numa mensagem SMS", "No site oficial va.gov", "Numa página de uma rede social"], answer: 2, why: "Use só o site oficial do VA." },
      { objective: "O1", q: "O que NUNCA deve escrever num assistente de IA?", options: ["\"Explique o que é uma data de efeito\"", "\"Ajude-me a fazer uma lista de perguntas para o meu VSO\"", "\"O que é o GI Bill?\"", "O seu número da Segurança Social ou detalhes médicos"], answer: 3, why: "Mantenha as informações privadas fora das ferramentas de IA." },
      { objective: "O2", q: "Qual NÃO é uma das formas de apresentar um pedido de incapacidade?", options: ["Pela internet em va.gov", "Pelo correio com o VA Form 21-526EZ", "Pessoalmente num escritório regional do VA", "Por SMS a um desconhecido que oferece ajuda"], answer: 3, why: "Faça o pedido pela internet, pelo correio, pessoalmente ou com um representante acreditado." },
      { objective: "O2", q: "Pensa fazer o pedido em papel, mas precisa de tempo para juntar provas. O que pode ajudar a proteger a sua data de efeito?", options: ["Uma intenção de pedido (intent to file)", "Esperar alguns anos", "Não fazer nenhum pedido", "Ligar a um claim shark"], answer: 0, why: "Uma intenção de pedido pode guardar uma possível data de efeito." },
      { objective: "O2", q: "Qual é uma boa prova para um pedido de incapacidade?", options: ["Um palpite sobre o que o VA quer", "Registos de tratamento no serviço e registos médicos", "Uma publicação numa rede social", "A decisão do pedido de um amigo"], answer: 1, why: "Os registos e as declarações de testemunhas apoiam o seu pedido." },
      { objective: "O2", q: "O VA marca um exame para o seu pedido. Você deve:", options: ["Faltar", "Mandar outra pessoa", "Ir ao exame", "Pedir a um claim shark para ir"], answer: 2, why: "O exame faz parte da decisão." },
      { objective: "O3", q: "Os cuidados de saúde do VA usam que pedido?", options: ["VA Form 10-10EZ", "VA Form 22-1990", "VA Form 21-526EZ", "Um DD214"], answer: 0, why: "O 10-10EZ é o pedido de benefícios de saúde." },
      { objective: "O3", q: "Quando pede os cuidados de saúde do VA, o que deve incluir sobre o seu serviço?", options: ["Só o seu posto", "Nada", "A sua base preferida", "O seu historial de serviço, incluindo qualquer exposição tóxica ou perigosa"], answer: 3, why: "O VA pede o historial de serviço e as exposições." },
      { objective: "O3", q: "Que número de telefone indica o VA para ajuda a pedir os cuidados de saúde?", options: ["911", "988", "877-222-8387", "411"], answer: 2, why: "O VA indica o 877-222-8387 para a linha de benefícios de saúde." },
      { objective: "O4", q: "O Post-9/11 GI Bill também se chama:", options: ["Chapter 1606", "Chapter 33", "Form 10-10EZ", "O DD214"], answer: 1, why: "O Post-9/11 GI Bill é o Chapter 33." },
      { objective: "O4", q: "Uma veterana quer ser eletricista sem um curso de quatro anos. O GI Bill pode ajudar?", options: ["Não, só paga a universidade de quatro anos", "Sim, pode ajudar com aprendizagens profissionais e formação no trabalho", "Só se ela for viver para o estrangeiro", "Só para oficiais"], answer: 1, why: "O VA indica as aprendizagens profissionais e a formação no trabalho entre os usos do GI Bill." },
      { objective: "O4", q: "O Yellow Ribbon Program pode:", options: ["Pagar a sua renda", "Substituir o seu DD214", "Acelerar os pedidos de incapacidade", "Ajudar a cobrir as propinas que o Post-9/11 GI Bill não cobre, nas escolas que participam"], answer: 3, why: "O Yellow Ribbon ajuda com as propinas acima do que o GI Bill cobre." },
      { objective: "O5", q: "Se pedir o GI Bill pelo correio, que formulário usa?", options: ["VA Form 22-1990", "VA Form 10-10EZ", "VA Form 21-526EZ", "Um formulário de impostos"], answer: 0, why: "O VA Form 22-1990 é o pedido de benefícios de educação do VA." },
      { objective: "O5", q: "Antes de se inscrever numa escola com o GI Bill, você deve:", options: ["Inscrever-se no mesmo dia em que o recrutador liga", "Não comparar", "Compará-la com a GI Bill Comparison Tool e perguntar sobre os custos e os resultados de emprego", "Pagar um depósito antes de ler qualquer coisa"], answer: 2, why: "Comparar primeiro protege os seus benefícios." },
      { objective: "O5", q: "Pode mudar o seu pedido do GI Bill depois de o enviar?", options: ["Sim, a qualquer momento", "Sim, ligando para uma escola", "Só aos fins de semana", "Não, por isso verifique-o antes de o enviar"], answer: 3, why: "O VA diz que não pode fazer mudanças depois de enviar." },
      { objective: "O6", q: "Qual destes é acreditado pelo VA para ajudar com os pedidos?", options: ["Representantes de VSO, advogados e agentes de pedidos", "Qualquer site", "Qualquer pessoa que serviu", "Vendedores de carros"], answer: 0, why: "O Office of General Counsel do VA acredita estes três tipos." },
      { objective: "O6", q: "Quando pode um advogado ou agente de pedidos acreditado cobrar honorários?", options: ["Antes de fazer o seu primeiro pedido", "Só depois de o VA ter decidido o seu primeiro pedido e com um acordo de honorários assinado", "Sempre que quiser", "Nunca, em nenhuma regra"], answer: 1, why: "O VA diz que os honorários só podem vir depois da primeira decisão, com um acordo assinado." },
      { objective: "O6", q: "Alguém que o ajuda com o pedido pede os seus dados de acesso a va.gov. Você deve:", options: ["Partilhá-los para trabalharem mais depressa", "Escrevê-los num papel autocolante para eles", "Recusar; nunca partilhe os seus dados de acesso", "Mudá-los para algo mais simples"], answer: 2, why: "Nunca dê a ninguém os seus dados de acesso a va.gov." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      5,
      8,
      9,
      12,
      15,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Lista de documentos",
        objective: "O1",
        notYet: "Não há lista, ou o DD214 não está nela.",
        meets: "Uma lista que começa pelo DD214, com os documentos em falta assinalados.",
        exceeds: "Indica onde está guardado cada documento e como obter os que faltam."
      },
      {
        name: "Benefícios e como os pedir",
        objective: "O2",
        notYet: "Os benefícios estão na lista sem dizer como os pedir.",
        meets: "Cada benefício (compensação por incapacidade, cuidados de saúde, educação) com uma forma oficial de o pedir.",
        exceeds: "Inclui como o aluno vai proteger a data de início ou que formulário vai usar."
      },
      {
        name: "Plano para o GI Bill",
        objective: "O5",
        notYet: "Nenhum programa ou escola indicado, se o aluno vai usar o GI Bill.",
        meets: "O programa, a escola ou a formação, e o que é preciso para isso.",
        exceeds: "Duas opções comparadas na GI Bill Comparison Tool."
      },
      {
        name: "Ajuda acreditada gratuita",
        objective: "O6",
        notYet: "Nenhum representante, ou uma empresa paga que não é acreditada.",
        meets: "O nome e o contacto de um representante ou VSO acreditado pelo VA, encontrado com a ferramenta de pesquisa do VA.",
        exceeds: "O aluno já o contactou ou marcou uma consulta."
      },
      {
        name: "Sinais de alerta de claim sharks",
        objective: "O6",
        notYet: "Menos de três sinais de alerta.",
        meets: "Três sinais de alerta de alguém a quem não se deve pagar para fazer o pedido.",
        exceeds: "O aluno explica quando um advogado ou agente de pedidos acreditado pode cobrar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que enviam pelo menos um pedido ao VA ou uma intenção de pedido em 30 dias (inquérito de seguimento)",
      "Alunos que contactam um representante ou VSO acreditado gratuito em 30 dias",
      "Alunos que se inscrevem numa formação paga pelo GI Bill em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Uma pasta (em papel, ou uma pasta segura no computador do próprio aluno) para os documentos",
      "O DD214 do aluno ou outros papéis de saída do serviço, se os tiver",
      "O site gratuito va.gov, incluindo a GI Bill Comparison Tool e a pesquisa de representantes acreditados",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Nunca recolha nem veja os DD214, os registos médicos ou os números da Segurança Social dos alunos; os alunos guardam as suas próprias pastas.",
      "Convide um VSO acreditado pelo VA para a última sessão, para os alunos conhecerem pessoalmente a ajuda gratuita.",
      "Confirme os formulários, os números de telefone e as regras em va.gov durante a sessão, porque podem mudar.",
      "Não dê conselhos sobre questões médicas ou legais; encaminhe-as para o VA ou para um representante acreditado.",
      "Avalie o plano de ação com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
