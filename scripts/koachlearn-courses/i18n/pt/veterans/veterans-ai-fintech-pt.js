"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-fintech.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Explains how financial technology works and its risks; it gives no investment advice (README rule 6). US names (FDIC, CFPB, FTC, VA) are kept.

module.exports = {
  id: "veterans-ai-fintech-pt",
  lang: "pt",
  translationOf: "veterans-ai-fintech",
  category: "Veterans (military)",
  name: "IA e Tecnologia Financeira",
  skills: "Explicar como funcionam as aplicações fintech, Saber o que tem e o que não tem seguro, Verificar uma aplicação antes de confiar nela, Configurar a segurança da conta, Reconhecer e denunciar burlas fintech",
  outcome: "explicar como uma aplicação de dinheiro usa IA, verificar se é legítima e se o seu dinheiro tem seguro, configurar as definições de segurança e reconhecer e denunciar uma burla fintech dirigida a veteranos.",
  about: [
    "Tecnologia financeira, ou fintech, são as aplicações e os sites que as pessoas usam para ir ao banco, pagar, pedir empréstimos, fazer orçamentos e investir. A maioria já usa IA sem se ver. Os veteranos são muitas vezes alvo de burlas por terem salário e apoios fixos, por isso saber como estas ferramentas funcionam protege você e a sua família.",
    "Neste curso vai aprender como funcionam as aplicações de pagamento, os bancos digitais, os robo-advisors e as criptomoedas, o que o seguro de depósitos cobre e não cobre, como verificar uma aplicação antes de confiar nela, como proteger as suas contas e como reconhecer e denunciar burlas. Estas habilidades também ajudam se quiser trabalhar num banco ou numa fintech.",
    "Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Este curso explica como as coisas funcionam e os seus riscos; não lhe diz o que comprar nem onde investir. Para decisões pessoais sobre dinheiro, fale com um profissional qualificado e independente ou com um conselheiro financeiro gratuito militar ou do VA."
  ],
  finalTask: "Faça um Cartão de Segurança Fintech de uma página para uma aplicação de dinheiro que usa ou em que está a pensar: o que faz e como usa IA, se o seu dinheiro nela tem seguro do FDIC (e como verificou), as definições de segurança que ligou, três sinais de alerta de burla e onde denunciaria um problema.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos, militares no ativo e as suas famílias que usam ou pensam usar aplicações de dinheiro para ir ao banco, pagar, pedir empréstimos, fazer orçamentos ou investir. Os veteranos são muitas vezes alvo de burlas por terem salário e apoios fixos.",
    startingPoint: "Usam um smartphone e pelo menos uma aplicação de dinheiro ou de pagamento. A maioria não sabe onde a aplicação guarda o seu dinheiro, se tem seguro ou como a aplicação usa IA, e poucos ligaram todas as definições de segurança.",
    gap: "As aplicações de dinheiro podem parecer bancos sem serem bancos, e os burlões fingem ser bancos, serviços do governo e ofertas de investimento. Os alunos precisam de verificar a legitimidade e o seguro de uma aplicação em fontes oficiais, proteger as suas contas e reconhecer e denunciar burlas fintech antes de perderem dinheiro.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; não é preciso saber nada de finanças",
      "Aparelhos: um smartphone com a aplicação de dinheiro do próprio aluno",
      "Privacidade: nenhuma palavra-passe, código ou número de conta completo em pedidos à IA ou na prática",
      "Nenhum conselho de investimento: as criptomoedas e os robo-advisors são explicados com os seus riscos, e as decisões ficam para um profissional qualificado e independente",
      "As regras e os limites do seguro mudam, por isso os alunos verificam diretamente no fdic.gov, no CFPB e na FTC"
    ],
    prerequisites: "Nenhum. O curso \"IA para o Sucesso Financeiro e Pessoal\" é um bom primeiro curso sobre orçamentos e burlas."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as aplicações de dinheiro do seu telefone", action: "identificar quatro tipos de fintech e uma forma como cada um usa IA", standard: "e dizer o que pode fazer quando uma decisão da IA sobre o seu dinheiro está errada" },
    { id: "O2", condition: "Para uma aplicação de dinheiro que usa", action: "verificar se o dinheiro na aplicação está protegido pelo seguro de depósitos do FDIC", standard: "encontrando o seu banco parceiro e confirmando-o no FDIC BankFind" },
    { id: "O3", condition: "Quando ouve falar de um robo-advisor ou de criptomoedas", action: "explicar como cada um funciona e fazer a lista dos seus principais riscos", standard: "comparando a lista de riscos com uma fonte oficial como a FTC" },
    { id: "O4", condition: "Antes de pôr dinheiro numa aplicação", action: "fazer uma verificação de cinco pontos da aplicação", standard: "escrevendo sim ou não para cada ponto" },
    { id: "O5", condition: "Numa aplicação de dinheiro", action: "ligar a verificação em dois passos e os alertas de pagamento e remover aparelhos desconhecidos", standard: "sem partilhar nenhuma palavra-passe nem código" },
    { id: "O6", condition: "Com uma mensagem, chamada ou oferta sobre dinheiro", action: "identificar os sinais de alerta de uma burla fintech e denunciá-la no lugar certo", standard: "sem partilhar códigos e sem pagar nada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona a fintech",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a fintech e onde entra a IA",
          minutes: 4,
          goal: "Dizer quatro tipos de fintech e uma forma como cada um usa IA.",
          text: [
            "Fintech quer dizer tecnologia financeira: aplicações e sites para o dinheiro. Os tipos mais comuns são o banco no telemóvel, as aplicações de pagamento para enviar dinheiro a pessoas, as aplicações de orçamento, os credores pela internet e as aplicações de investimento.",
            "A IA trabalha sem se ver: para detetar fraude (um cartão usado em dois países na mesma hora), para responder a perguntas em chatbots, para separar os seus gastos por categorias e para ajudar a decidir quem recebe um empréstimo.",
            "As decisões da IA podem estar erradas. Uma compra verdadeira pode ser bloqueada, ou um empréstimo recusado por causa de dados errados. Você tem o direito de perguntar porquê e de contestar os erros; o Consumer Financial Protection Bureau (CFPB), o serviço dos EUA que protege os consumidores de produtos financeiros, explica esses direitos."
          ],
          words: [["Fintech", "tecnologia financeira: aplicações e sites para ir ao banco, pagar, pedir empréstimos, fazer orçamentos e investir."], ["Deteção de fraude", "ferramentas que vigiam pagamentos que parecem roubados ou falsos."], ["Chatbot", "um programa de IA que responde a perguntas por mensagens."]],
          slides: [
            { title: "Fintech = aplicações de dinheiro", bullets: ["Banco no telemóvel e aplicações de pagamento", "Aplicações de orçamento e credores pela internet", "Aplicações de investimento"] },
            { title: "A IA trabalha sem se ver", bullets: ["Deteta fraude", "Responde a perguntas em chatbots", "Separa os gastos e ajuda a decidir empréstimos"] },
            { title: "A IA pode errar", bullets: ["Compras verdadeiras bloqueadas", "Empréstimos recusados por dados errados", "Pode perguntar porquê e contestar os erros"] }
          ],
          sources: [{ name: "CFPB: Military financial lifecycle (service members and veterans)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Faça a lista de todas as aplicações de dinheiro do seu telefone. Ao lado de cada uma, escreva que tipo de fintech é e uma forma como pode usar IA.",
          youCanNow: "descrever os principais tipos de fintech e como usam IA.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um tipo de fintech?", options: ["Um livro de cheques em papel", "Um frasco com dinheiro em casa", "Uma aplicação de pagamento no seu telefone", "Um extrato do banco impresso"], answer: 2, why: "Fintech são aplicações e sites para o dinheiro, como aplicações de pagamento, de banco, de orçamento e de investimento." },
            { objective: "O1", q: "A IA da sua aplicação marca o pagamento normal da sua renda como fraude e bloqueia-o. O que faz?", options: ["Contacta a empresa, pergunta porquê e contesta o erro", "Apaga a aplicação e nunca mais paga a renda pela internet", "Partilha a sua palavra-passe para eles resolverem", "Espera e torce para que passe"], answer: 0, why: "Quando uma decisão da IA sobre o seu dinheiro está errada, pode perguntar porquê e contestá-la." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Onde está mesmo o seu dinheiro: bancos, aplicações e seguro",
          minutes: 5,
          goal: "Verificar se o dinheiro numa aplicação está protegido pelo seguro de depósitos do FDIC.",
          text: [
            "O seguro de depósitos do FDIC protege o dinheiro em contas de depósito (conta à ordem, poupança, contas de depósito do mercado monetário e certificados de depósito, os CDs) num banco com seguro do FDIC. Quando verificámos o fdic.gov em outubro de 2026, o valor padrão era de pelo menos $250,000 por depositante em cada banco com seguro.",
            "O seguro do FDIC não cobre ações, obrigações, fundos de investimento, rendas vitalícias (anuidades), seguros de vida nem criptomoedas. Muitas aplicações de pagamento não são bancos. Um saldo deixado na aplicação pode não ter seguro, a menos que a aplicação o coloque numa conta de banco com seguro em seu nome.",
            "Para verificar: leia a página de ajuda da própria aplicação para encontrar o nome do seu banco parceiro e depois procure esse banco com a ferramenta BankFind do FDIC no fdic.gov."
          ],
          steps: ["Abra a página de ajuda ou a página legal da aplicação e procure \"FDIC\" e o nome de um banco.", "Procure o nome desse banco com o FDIC BankFind no fdic.gov.", "Veja se o seu tipo de dinheiro (depósito, ações, criptomoedas) está coberto.", "Se tiver dúvidas, passe o dinheiro do dia a dia para uma conta de banco com seguro."],
          words: [["FDIC", "Federal Deposit Insurance Corporation: o serviço dos EUA que protege os depósitos em bancos com seguro se o banco falir."], ["Conta de depósito", "uma conta à ordem, de poupança, de depósito do mercado monetário ou um CD num banco."], ["BankFind", "a ferramenta gratuita do FDIC para ver se um banco tem seguro do FDIC."]],
          slides: [
            { title: "O FDIC cobre depósitos", bullets: ["Conta à ordem, poupança, depósitos do mercado monetário, CDs", "Pelo menos $250,000 por depositante, em cada banco (out. 2026)"] },
            { title: "O FDIC NÃO cobre", bullets: ["Ações, obrigações e fundos de investimento", "Anuidades e seguros de vida", "Criptomoedas"] },
            { title: "Verifique a sua aplicação", bullets: ["Encontre o banco parceiro nas páginas de ajuda", "Procure-o no FDIC BankFind", "Dúvidas? Guarde o dinheiro num banco com seguro"] }
          ],
          sources: [{ name: "FDIC: Deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Escolha uma aplicação de dinheiro que usa. Encontre o banco parceiro nas páginas de ajuda da aplicação e verifique esse banco no FDIC BankFind. Escreva se o seu saldo tem seguro.",
          youCanNow: "verificar se o dinheiro numa aplicação está protegido pelo seguro de depósitos do FDIC.",
          quickCheck: [
            { objective: "O2", q: "O que é o FDIC BankFind?", options: ["Uma aplicação de empréstimos", "Uma bolsa de criptomoedas", "Uma ferramenta de pontuação de crédito", "A ferramenta do FDIC para ver se um banco tem seguro"], answer: 3, why: "O BankFind permite confirmar que um banco tem seguro do FDIC." },
            { objective: "O2", q: "Uma aplicação de pagamento diz que o seu dinheiro está \"seguro\". Como verifica se tem seguro?", options: ["Confia no anúncio da aplicação", "Encontra o banco parceiro nas páginas de ajuda e procura-o no BankFind", "Pergunta ao assistente de IA", "Parte do princípio de que todas as aplicações são bancos"], answer: 1, why: "O seguro depende de a aplicação guardar o seu dinheiro num banco com seguro, e isso confirma-se no BankFind." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Como funcionam os robo-advisors e as criptomoedas, e os seus riscos",
          minutes: 5,
          goal: "Explicar como funcionam um robo-advisor e as criptomoedas e dizer os seus principais riscos.",
          text: [
            "Um robo-advisor é uma aplicação que usa regras de computador para pôr o seu dinheiro em investimentos com base nas respostas que você dá, como os seus objetivos e quanto tempo falta até precisar do dinheiro. Cobra uma taxa. Os investimentos podem perder valor e não têm seguro do FDIC.",
            "Cripto (criptomoeda) é dinheiro digital registado num livro de registos partilhado na internet chamado blockchain. Os preços podem subir e descer muito. A FTC (Federal Trade Commission, o serviço dos EUA que combate as burlas) avisa que os pagamentos em cripto normalmente não podem ser anulados e que a cripto não tem seguro do governo como os depósitos bancários.",
            "Este curso não lhe diz se deve usar um ou outro. Antes de qualquer decisão de investimento, conheça as taxas e os riscos em páginas oficiais e fale com um profissional qualificado e independente ou com um conselheiro financeiro gratuito militar ou do VA."
          ],
          words: [["Robo-advisor", "uma aplicação que investe dinheiro com regras de computador, com base nas suas respostas."], ["Criptomoeda", "dinheiro digital registado numa blockchain."], ["Blockchain", "um registo partilhado na internet de transações, muito difícil de alterar."], ["Volátil", "um preço que pode subir e descer muito, depressa."]],
          slides: [
            { title: "Robo-advisors", bullets: ["Investem com regras de computador e as suas respostas", "Cobram uma taxa", "Podem perder valor; não têm seguro do FDIC"] },
            { title: "Criptomoedas", bullets: ["Dinheiro digital numa blockchain", "Os preços podem mudar muito", "Os pagamentos normalmente não podem ser anulados"] },
            { title: "Antes de qualquer decisão", bullets: ["Conheça as taxas e os riscos em páginas oficiais", "Fale com um profissional qualificado e independente", "Este curso não dá conselhos de investimento"] }
          ],
          sources: [{ name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "FDIC: Deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Pergunte a um assistente de IA: \"Explique como funciona um robo-advisor e como funcionam as criptomoedas, com palavras simples, com os principais riscos de cada um.\" Compare a lista de riscos com a página da FTC sobre criptomoedas e escreva o que faltou.",
          youCanNow: "explicar como funcionam os robo-advisors e as criptomoedas e dizer os seus principais riscos.",
          quickCheck: [
            { objective: "O3", q: "Como funciona um robo-advisor?", options: ["Investe com regras de computador com base nas suas respostas", "Uma pessoa do banco escolhe ações de graça", "Garante que o seu dinheiro cresce", "É o mesmo que uma conta poupança"], answer: 0, why: "Um robo-advisor usa regras de computador e as suas respostas para investir; tem riscos de mercado." },
            { objective: "O3", q: "Um amigo diz que a cripto \"tem seguro como uma conta no banco\". O que lhe diz?", options: ["Está certo", "Só aos fins de semana", "A cripto não tem seguro como os depósitos bancários e os preços podem mudar muito", "Os pagamentos em cripto podem sempre ser anulados"], answer: 2, why: "A cripto não tem seguro como os depósitos bancários, os preços podem mudar muito e os pagamentos normalmente não podem ser anulados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona a fintech",
        questions: [
          { objective: "O1", q: "Qual é um exemplo de IA na fintech?", options: ["A porta de entrada de um banco", "Imprimir cheques em papel", "Detetar um cartão usado em dois países na mesma hora", "Um recibo em papel"], answer: 2, why: "A deteção de fraude é um uso comum da IA." },
          { objective: "O1", q: "Uma IA bloqueia por engano uma compra sua verdadeira. O que pode fazer?", options: ["Perguntar porquê e contestar o erro", "Nada, a IA tem a última palavra", "Fechar todas as suas contas", "Publicar o número do seu cartão na internet"], answer: 0, why: "Você tem o direito de questionar e contestar os erros." },
          { objective: "O2", q: "Segundo o fdic.gov em outubro de 2026, o que tem seguro do FDIC num banco com seguro?", options: ["Um fundo de investimento", "Criptomoedas", "Ações", "Uma conta poupança"], answer: 3, why: "As contas de depósito, como a poupança, estão cobertas." },
          { objective: "O2", q: "Como verifica se o banco parceiro de uma aplicação tem seguro do FDIC?", options: ["Confia nos anúncios da aplicação", "Procura o banco no FDIC BankFind", "Pergunta a um desconhecido", "Vê nas redes sociais"], answer: 1, why: "O BankFind é a ferramenta oficial do FDIC." },
          { objective: "O3", q: "O que diz a FTC sobre os pagamentos em cripto?", options: ["Têm sempre seguro", "Normalmente não podem ser anulados", "Os bancos garantem-nos", "Não têm risco"], answer: 1, why: "A FTC avisa que os pagamentos em cripto normalmente não podem ser anulados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a fintech com segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Verificar uma aplicação antes de confiar nela",
          minutes: 5,
          goal: "Fazer uma verificação de cinco pontos de uma aplicação de dinheiro antes de pôr dinheiro nela.",
          text: [
            "Os burlões criam aplicações e sites de dinheiro falsos que parecem verdadeiros. Antes de descarregar ou depositar, veja quem gere a aplicação e se é verdadeira.",
            "Obtenha a aplicação só na loja de aplicações oficial e veja se o nome do programador é o da empresa verdadeira. Leia o site da própria empresa para saber o nome completo e o banco parceiro. Verifique o banco no FDIC BankFind. Pesquise o nome da empresa com a palavra \"reclamações\" e veja as informações de reclamações do CFPB.",
            "Pode pedir a um assistente de IA para explicar o que querem dizer os termos de uma aplicação, mas não confie na IA para lhe dizer que uma aplicação é segura. Verifique você mesmo as fontes oficiais."
          ],
          steps: ["Descarregue só da loja de aplicações oficial.", "Veja se o nome do programador é o da empresa verdadeira.", "Encontre o nome completo da empresa e o banco parceiro no site da própria empresa.", "Verifique o banco no FDIC BankFind.", "Pesquise reclamações, também no consumerfinance.gov."],
          words: [["Programador", "a empresa que fez uma aplicação, que aparece na página da aplicação na loja."], ["Termos de serviço", "as regras e as taxas que aceita quando usa uma aplicação."]],
          slides: [
            { title: "As aplicações falsas parecem verdadeiras", bullets: ["Verifique antes de descarregar ou depositar"] },
            { title: "Verificação de cinco pontos", bullets: ["Loja oficial, programador certo", "Nome completo da empresa e banco parceiro", "FDIC BankFind para o banco", "Pesquise reclamações"] },
            { title: "A IA explica, não aprova", bullets: ["Pergunte à IA o que querem dizer os termos", "Verifique você mesmo a segurança em fontes oficiais"] }
          ],
          sources: [{ name: "CFPB: Military financial lifecycle (complaints and rights)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }, { name: "FDIC: Deposit insurance (BankFind)", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Faça a verificação de cinco pontos de uma aplicação de dinheiro que usa ou em que está a pensar. Escreva sim ou não ao lado de cada ponto.",
          youCanNow: "verificar se uma aplicação de dinheiro é verdadeira antes de lhe confiar dinheiro.",
          quickCheck: [
            { objective: "O4", q: "Qual é o primeiro ponto da verificação de cinco pontos?", options: ["Ler só as avaliações na internet", "Descarregar só da loja de aplicações oficial, do programador certo", "Ver se a aplicação é bonita", "Perguntar ao chatbot da aplicação se é segura"], answer: 1, why: "As aplicações falsas copiam as verdadeiras, por isso começa por obter a aplicação verdadeira na loja oficial." },
            { objective: "O4", q: "Um assistente de IA diz que uma nova aplicação de dinheiro é \"de certeza segura\". O que faz?", options: ["Põe lá todas as suas poupanças", "Partilha a aplicação com amigos", "Salta as outras verificações", "Faz você mesmo a verificação de cinco pontos em fontes oficiais"], answer: 3, why: "A IA não pode confirmar com certeza que uma aplicação é segura; você verifica as fontes oficiais." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proteger as suas contas de dinheiro",
          minutes: 5,
          goal: "Ligar as principais definições de segurança numa aplicação de dinheiro.",
          text: [
            "Trate as suas contas de dinheiro como uma zona protegida: várias camadas de proteção. Use uma palavra-passe forte e diferente para cada conta de dinheiro e ligue a verificação em dois passos, para que seja preciso um código ou uma aplicação para entrar.",
            "Ligue os alertas para que a aplicação lhe avise de cada pagamento, entrada na conta ou mudança nos seus dados. Alertas rápidos deixam você travar a fraude cedo.",
            "Nunca partilhe um código de entrada com ninguém, mesmo com alguém que diz ser do banco, do VA ou da aplicação. As empresas verdadeiras não o pedem. Nunca escreva palavras-passe nem números de conta completos num assistente de IA."
          ],
          steps: ["Crie uma palavra-passe forte e diferente.", "Ligue a verificação em dois passos nas definições de segurança da aplicação.", "Ligue os alertas para pagamentos, entradas na conta e mudanças.", "Veja os aparelhos ligados e remova os que não conhece.", "Prometa a si mesmo: nunca partilhar um código de entrada."],
          words: [["Verificação em dois passos", "uma segunda verificação, como um código ou uma aprovação na aplicação, precisa para entrar."], ["Alerta", "uma mensagem que a aplicação envia quando acontece alguma coisa na sua conta."]],
          slides: [
            { title: "Camadas de proteção", bullets: ["Palavra-passe forte e diferente", "Verificação em dois passos ligada"] },
            { title: "Ligue os alertas", bullets: ["Cada pagamento", "Cada entrada na conta", "Cada mudança nos seus dados"] },
            { title: "Nunca partilhe", bullets: ["Códigos de entrada, com ninguém", "Palavras-passe ou números de conta com ferramentas de IA"] }
          ],
          tryIt: "Abra as definições de segurança de uma aplicação de dinheiro. Ligue a verificação em dois passos e os alertas de pagamento e remova qualquer aparelho que não reconheça.",
          youCanNow: "configurar as principais definições de segurança que protegem uma conta de dinheiro.",
          quickCheck: [
            { objective: "O5", q: "Porque ligar os alertas de pagamento?", options: ["Para receber publicidade", "Para partilhar o seu saldo com amigos", "Para detetar e travar a fraude cedo", "Para a aplicação ficar mais rápida"], answer: 2, why: "Os alertas avisam de cada pagamento para que possa apanhar a fraude depressa." },
            { objective: "O5", q: "Nas definições de segurança da aplicação vê um aparelho que não reconhece. O que faz?", options: ["Remove-o e muda a sua palavra-passe", "Deixa-o; deve estar tudo bem", "Desliga a verificação em dois passos", "Publica uma captura de ecrã na internet"], answer: 0, why: "Um aparelho desconhecido pode ser outra pessoa na sua conta, por isso remove-o e protege a conta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reconhecer e denunciar burlas fintech",
          minutes: 5,
          goal: "Reconhecer os sinais de alerta de uma burla fintech e saber onde a denunciar.",
          text: [
            "A FTC avisa que só os burlões exigem pagamento em cripto, só os burlões garantem lucros ou grandes ganhos, e um trabalho que pede para pagar antes uma taxa em cripto é uma burla. Contactos românticos que oferecem dicas de investimento também são um sinal de alerta.",
            "Os burlões também fingem ser o banco, um serviço do governo ou o VA e dizem que o seu dinheiro está em risco. A IA deixa-os escrever mensagens perfeitas e até copiar vozes. Não carregue nos links deles nem ligue para os números que eles dão; use o número do site oficial ou do seu cartão.",
            "Para denunciar: apresente uma reclamação sobre um produto financeiro ao CFPB em consumerfinance.gov ou por telefone, e denuncie a fraude à FTC em ReportFraud.ftc.gov. Avise logo o seu banco se saiu dinheiro da sua conta."
          ],
          steps: ["Esteja atento a: exigências de pagamento em cripto, ganhos garantidos, taxas pagas antes, chamadas urgentes a dizer \"o seu dinheiro está em risco\".", "Pare. Não carregue, não pague e não partilhe códigos.", "Ligue para a empresa usando um número do site oficial ou do seu cartão.", "Avise logo o seu banco se o dinheiro saiu.", "Denuncie ao CFPB ou em ReportFraud.ftc.gov."],
          words: [["Burla de falsa identidade", "quando um burlão finge ser uma empresa, um serviço ou uma pessoa em quem confia."], ["Ganhos garantidos", "uma promessa de lucro sem risco; os investimentos verdadeiros nunca prometem isto."]],
          slides: [
            { title: "Sinais de alerta da FTC", bullets: ["Exigem pagamento em cripto", "Lucros ou grandes ganhos garantidos", "Taxa em cripto paga antes para um trabalho"] },
            { title: "Os impostores usam IA", bullets: ["Mensagens perfeitas e vozes copiadas", "Não carregue nos links deles nem ligue para os números deles", "Use o número oficial"] },
            { title: "Denuncie", bullets: ["Avise logo o seu banco", "Reclamação ao CFPB: consumerfinance.gov", "FTC: ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "CFPB: Military financial lifecycle (submit a complaint)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Tarefa final: faça o seu Cartão de Segurança Fintech de uma página para uma aplicação: o que faz e como usa IA, se o seu dinheiro tem seguro e como verificou, as definições de segurança que ligou, três sinais de alerta de burla e onde denunciaria um problema.",
          youCanNow: "perceber como funciona uma aplicação de dinheiro, verificá-la e protegê-la, e reconhecer e denunciar burlas fintech.",
          quickCheck: [
            { objective: "O6", q: "Qual é um sinal de alerta de burla fintech?", options: ["Um extrato mensal que esperava", "O horário afixado de uma agência bancária", "Um recibo de algo que comprou", "Pressão para mudar o seu dinheiro depressa para uma conta \"segura\""], answer: 3, why: "Apressar você a mudar o dinheiro para uma conta \"segura\" é uma burla de falsa identidade clássica." },
            { objective: "O6", q: "Recebe uma SMS do \"seu banco\" com um link para resolver um problema. O que faz?", options: ["Carrega no link e entra na conta", "Não carrega; liga para o banco pelo número do site oficial ou do seu cartão", "Responde com o seu número de conta", "Reencaminha para os amigos"], answer: 1, why: "Você contacta a empresa usando um número em que confia, não o da mensagem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a fintech com segurança",
        questions: [
          { objective: "O4", q: "Onde deve descarregar uma aplicação de dinheiro?", options: ["Em qualquer site", "Num link numa SMS de um desconhecido", "Num anúncio que aparece no ecrã", "Na loja de aplicações oficial, da empresa verdadeira"], answer: 3, why: "As lojas oficiais e o programador certo reduzem as aplicações falsas." },
          { objective: "O4", q: "Um assistente de IA pode dizer-lhe com certeza que uma aplicação é segura?", options: ["Não; verifique você mesmo as fontes oficiais", "Sim, sempre", "Só aos fins de semana", "Só para aplicações de cripto"], answer: 0, why: "A IA pode explicar os termos, mas não pode confirmar a segurança." },
          { objective: "O5", q: "O que faz a verificação em dois passos?", options: ["Tira a sua palavra-passe", "Duplica o seu dinheiro", "Pede uma segunda verificação, como um código, para entrar", "Partilha a sua conta"], answer: 2, why: "Uma segunda verificação trava quem roubou a sua palavra-passe." },
          { objective: "O6", q: "Alguém diz que é do seu banco e pede o código de entrada enviado para o seu telefone. Você:", options: ["Publica-o na internet", "Lê-o para essa pessoa", "Envia-o por SMS", "Nunca o partilha; liga para o banco pelo número oficial"], answer: 3, why: "As empresas verdadeiras nunca pedem o seu código de entrada." },
          { objective: "O6", q: "Segundo a FTC, qual é um sinal de burla?", options: ["Um recibo de uma loja", "Um extrato mensal do banco", "Uma promessa de grandes ganhos garantidos", "Um alerta que você configurou"], answer: 2, why: "Só os burlões garantem lucros." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA e Tecnologia Financeira",
    questions: [
      { objective: "O1", q: "Fintech quer dizer:", options: ["Tecnologia fina", "Tecnologia financeira: aplicações e sites para o dinheiro", "Tecnologia de ginástica", "Um tipo de cofre de banco"], answer: 1, why: "Abrange a tecnologia para ir ao banco, pagar, pedir empréstimos, fazer orçamentos e investir." },
      { objective: "O1", q: "Qual é um uso comum da IA nas aplicações de dinheiro?", options: ["Separar os seus gastos por categorias", "Imprimir dinheiro", "Abrir as portas do banco", "Enviar extratos pelo correio"], answer: 0, why: "A IA separa os gastos por categorias nas aplicações de orçamento." },
      { objective: "O1", q: "Um empréstimo é recusado por causa de dados errados. Você pode:", options: ["Pagar a um desconhecido para resolver", "Não fazer nada", "Perguntar porquê e contestar o erro", "Dar a sua palavra-passe a um chatbot"], answer: 2, why: "Você tem o direito de contestar os erros." },
      { objective: "O1", q: "Que serviço explica os seus direitos sobre produtos financeiros e recebe reclamações?", options: ["O Consumer Financial Protection Bureau (CFPB)", "Os Correios", "A NASA", "O Serviço Nacional de Parques"], answer: 0, why: "O CFPB trata das reclamações sobre finanças dos consumidores." },
      { objective: "O2", q: "O seguro do FDIC protege:", options: ["Qualquer saldo numa aplicação", "Todas as criptomoedas", "Todas as ações", "Depósitos em bancos com seguro do FDIC"], answer: 3, why: "Cobre as contas de depósito em bancos com seguro." },
      { objective: "O2", q: "Segundo o fdic.gov em outubro de 2026, o valor padrão com seguro é de pelo menos:", options: ["$2,500", "$250,000 por depositante, em cada banco com seguro", "$25,000", "Sem limite"], answer: 1, why: "A página do FDIC diz pelo menos $250,000 em cada banco com seguro." },
      { objective: "O2", q: "Um saldo numa aplicação de pagamento tem sempre seguro do FDIC?", options: ["Sim, sempre", "Não; depende de a aplicação o guardar num banco com seguro", "Só às sextas-feiras", "Só se for cripto"], answer: 1, why: "Muitas aplicações de pagamento não são bancos." },
      { objective: "O2", q: "O BankFind é:", options: ["Um site de empregos", "Uma carteira de cripto", "Uma aplicação de empréstimos", "A ferramenta do FDIC para ver se um banco tem seguro"], answer: 3, why: "O BankFind está no fdic.gov." },
      { objective: "O3", q: "Um robo-advisor é:", options: ["Uma aplicação que investe com regras de computador com base nas suas respostas", "Um robô do banco que entrega dinheiro", "Um empréstimo gratuito do governo", "Uma apólice de seguro"], answer: 0, why: "Automatiza o investimento em troca de uma taxa." },
      { objective: "O3", q: "O que é verdade sobre a cripto?", options: ["O FDIC dá-lhe seguro", "É garantido que sobe", "Os preços podem mudar muito e não tem seguro como os depósitos bancários", "Os pagamentos são fáceis de anular"], answer: 2, why: "A cripto é volátil e não tem seguro de depósitos." },
      { objective: "O3", q: "Antes de qualquer decisão de investimento, este curso diz para:", options: ["Investir tudo de uma vez", "Fazer o que a IA diz", "Seguir uma dica das redes sociais", "Conhecer as taxas e os riscos e falar com um profissional qualificado e independente"], answer: 3, why: "O curso explica, não aconselha." },
      { objective: "O4", q: "O primeiro ponto da verificação da aplicação é:", options: ["Partilhá-la com amigos", "Depositar dinheiro primeiro", "Descarregar só da loja de aplicações oficial, do programador certo", "Desligar os alertas"], answer: 2, why: "As aplicações falsas são comuns fora das lojas oficiais." },
      { objective: "O4", q: "Onde encontra o banco parceiro de uma aplicação?", options: ["Num anúncio qualquer", "No site ou nas páginas de ajuda da própria empresa", "Numa SMS", "Num palpite da IA"], answer: 1, why: "As páginas oficiais da empresa dizem o nome do banco." },
      { objective: "O5", q: "Qual é um passo de segurança forte?", options: ["Ligar a verificação em dois passos", "Usar a mesma palavra-passe em todo o lado", "Partilhar códigos com o apoio ao cliente", "Desligar os alertas"], answer: 0, why: "Um segundo passo trava as entradas com palavras-passe roubadas." },
      { objective: "O5", q: "Porque ligar os alertas de pagamento?", options: ["Para deixar o telefone mais lento", "Para receber mais anúncios", "Para detetar e travar a fraude cedo", "Para partilhar o seu saldo"], answer: 2, why: "Alertas rápidos deixam você agir depressa." },
      { objective: "O5", q: "O que NUNCA deve escrever num assistente de IA?", options: ["A sua palavra-passe ou o número de conta completo", "\"Explique o seguro do FDIC\"", "\"O que é um robo-advisor?\"", "\"Faça a lista dos sinais de alerta de burla\""], answer: 0, why: "Os dados financeiros privados têm de ficar fora das ferramentas de IA." },
      { objective: "O6", q: "Alguém liga a dizer que o seu dinheiro está em risco e que tem de o passar para uma conta de cripto \"segura\". Isto é:", options: ["Uma atualização de segurança", "Uma prática normal do banco", "Um apoio do VA", "Uma burla de falsa identidade"], answer: 3, why: "A FTC avisa que isto são burlas." },
      { objective: "O6", q: "Um trabalho pede para pagar antes uma taxa em cripto. Isto é:", options: ["Um passo normal de contratação", "Uma burla, segundo a FTC", "Um custo de formação pago pelo VA", "Um imposto"], answer: 1, why: "A FTC diz que as taxas em cripto pagas antes para um trabalho são burlas." },
      { objective: "O6", q: "Como deve ligar de volta para uma empresa por causa de uma mensagem suspeita?", options: ["Usa o número da mensagem", "Usa o número do site oficial ou do seu cartão", "Responde à SMS", "Pede um número a quem ligou"], answer: 1, why: "Os burlões dão números falsos." },
      { objective: "O6", q: "Onde pode denunciar uma fraude à FTC?", options: ["Num chatbot de IA", "Num comentário nas redes sociais", "No site do burlão", "Em ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov é o site de denúncias da FTC." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      6,
      7,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "O que faz e como usa IA",
        objective: "O1",
        notYet: "O cartão não diz o que a aplicação faz nem como usa IA.",
        meets: "O cartão diz o tipo de fintech e uma forma como a aplicação usa IA.",
        exceeds: "Também diz o que fazer se a IA da aplicação tomar uma decisão errada."
      },
      {
        name: "Seguro verificado",
        objective: "O2",
        notYet: "Diz que o dinheiro tem seguro sem verificar, ou adivinha.",
        meets: "Diz o banco parceiro e se tem seguro do FDIC, verificado no BankFind.",
        exceeds: "Indica que partes do saldo estão ou não cobertas e onde isso foi confirmado."
      },
      {
        name: "Definições de segurança",
        objective: "O5",
        notYet: "Nenhuma definição de segurança ligada.",
        meets: "Verificação em dois passos e alertas de pagamento ligados, e aparelhos desconhecidos removidos.",
        exceeds: "Também indica mais uma definição ligada, como o bloqueio do cartão ou um limite de gastos."
      },
      {
        name: "Sinais de burla e denúncia",
        objective: "O6",
        notYet: "Menos de três sinais de alerta, ou nenhum lugar para denunciar.",
        meets: "Três sinais de alerta de burla e onde denunciar um problema.",
        exceeds: "Inclui como ligar de volta para a empresa por um número de confiança."
      },
      {
        name: "Aplicação verificada",
        objective: "O4",
        notYet: "A aplicação não foi verificada antes de ser usada.",
        meets: "A verificação de cinco pontos foi feita com sim ou não para cada ponto.",
        exceeds: "O aluno explica o que faria se algum ponto fosse não."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter ligado a verificação em dois passos e os alertas nas suas aplicações de dinheiro em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter reconhecido e evitado uma burla fintech",
      "Alunos que começam outro curso da Koach Learn sobre dinheiro ou segurança em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com a aplicação de dinheiro do próprio aluno",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os sites gratuitos do FDIC BankFind, do CFPB e da FTC",
      "Papel ou um documento para o Cartão de Segurança Fintech de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Os alunos mudam as definições nos seus próprios telefones; nunca peça para ver saldos, palavras-passe ou códigos.",
      "Não recomende aplicações, investimentos nem criptomoedas; encaminhe as perguntas sobre investimento para um profissional qualificado e independente.",
      "Mostre na aula uma SMS de burla inventada e depois pratiquem ligar de volta para um número oficial.",
      "Avalie o Cartão de Segurança Fintech com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Os familiares podem participar, porque as burlas muitas vezes também visam cônjuges e pais."
    ]
  }
};
