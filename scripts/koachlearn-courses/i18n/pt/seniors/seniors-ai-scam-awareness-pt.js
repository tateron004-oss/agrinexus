"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-scam-awareness.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: US agencies, sites and phone numbers are kept as in the English.

module.exports = {
  id: "seniors-ai-scam-awareness-pt",
  lang: "pt",
  translationOf: "seniors-ai-scam-awareness",
  category: "Seniors and Technology",
  name: "Segurança com a IA e Prevenção de Burlas para Idosos",
  skills: "Reconhecer os quatro sinais de uma burla, Reconhecer truques de voz e de mensagens feitos com IA, Verificar uma mensagem com segurança, Recusar pagamentos arriscados, Denunciar uma burla",
  outcome: "olhar para uma chamada, uma SMS ou um email, decidir se tem os sinais de uma burla, verificá-lo com segurança usando um número em que já confia e saber onde o denunciar.",
  about: [
    "Este curso é para pessoas mais velhas, e para quem cuida delas, que querem estar um passo à frente dos burlões. Hoje os burlões usam IA para escrever mensagens melhores e até para copiar vozes, por isso os velhos sinais de alerta são mais importantes do que nunca.",
    "Você vai aprender os quatro sinais de uma burla, como funcionam os truques feitos com IA, um hábito simples chamado Parar, Verificar, Ligar, e onde denunciar uma burla nos Estados Unidos.",
    "Cada lição dura cerca de cinco minutos. Faça as tarefas \"Experimente agora\"; com elas você monta o seu próprio cartão de segurança contra burlas. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Ser enganado não é sinal de fraqueza: estes criminosos são profissionais, e qualquer pessoa pode ser alvo."
  ],
  finalTask: "Faça o seu próprio cartão de segurança contra burlas: escreva três números de telefone de confiança (um familiar, o seu banco tirado das costas do seu cartão e o consultório do seu médico), a sua palavra-código da família, os passos Parar, Verificar, Ligar e os lugares onde denunciar uma burla. Depois avalie duas mensagens de exemplo usando os quatro sinais.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas nos Estados Unidos que recebem chamadas, SMS e emails todos os dias, alguns deles burlas. Muitas vivem sozinhas, têm poupanças ou apoios, e têm netos cujas vozes ou fotos estão na internet.",
    startingPoint: "Usam o telefone e muitas vezes o email. Muitas sabem que existem burlas, mas nunca ouviram falar de cópias de voz feitas com IA, e podem confiar em mensagens sem erros de ortografia ou com logótipos oficiais.",
    gap: "A IA deixa os burlões copiar a voz de um ente querido e escrever mensagens falsas perfeitas, por isso velhos sinais de alerta, como os erros de ortografia, já não funcionam. Os idosos precisam de reconhecer os quatro sinais, usar o Parar, Verificar, Ligar, proteger o seu dinheiro e as suas informações e saber onde denunciar, para não perderem as poupanças nem terem vergonha de pedir ajuda.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: qualquer telefone; um computador ou tablet para o email e as janelas que aparecem no ecrã",
      "Tempo: cerca de 5 minutos por lição, com calma",
      "Os dados dos serviços e da linha de apoio dos EUA podem mudar; os alunos verificam nos sites oficiais",
      "Nenhum número privado verdadeiro é usado na prática; só mensagens de exemplo"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma chamada, uma SMS ou um email", action: "identificar os quatro sinais de uma burla: fingir ser alguém, um problema ou um prémio, pressão e um pagamento estranho", standard: "dizendo todos os sinais que a mensagem mostra" },
    { id: "O2", condition: "Quando quem liga parece um ente querido numa emergência", action: "desligar e confirmar com o seu ente querido ou com o pai ou a mãe dele, num número que já tem", standard: "sem enviar dinheiro antes de confirmar" },
    { id: "O3", condition: "Com uma SMS, um email, um site ou uma janela no ecrã que não esperava", action: "contactar você mesmo a empresa, escrevendo o endereço verdadeiro ou ligando para um número do seu cartão ou de uma conta", standard: "sem carregar no link nem ligar para o número da mensagem" },
    { id: "O4", condition: "Sempre que uma mensagem ou uma chamada o preocupa", action: "usar os passos Parar, Verificar, Ligar", standard: "usando só um número em que já confia" },
    { id: "O5", condition: "Quando uma chamada ou mensagem inesperada pede informações ou dinheiro", action: "recusar dar números privados, palavras-passe, códigos ou pagamentos estranhos, e ligar para o seu banco se já o fez", standard: "sem partilhar nada com um contacto inesperado" },
    { id: "O6", condition: "Depois de uma burla ou de uma tentativa de burla", action: "dizer onde a denunciar e onde ter ajuda nos Estados Unidos", standard: "dizendo pelo menos dois lugares certos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam as burlas hoje",
      lessons: [
        {
          objectives: ["O1"],
          title: "Os quatro sinais de uma burla",
          minutes: 5,
          goal: "Dizer os quatro sinais de que uma chamada, uma SMS ou um email é provavelmente uma burla.",
          text: [
            "A Federal Trade Commission (FTC), o serviço do governo dos EUA que protege os consumidores, descreve quatro sinais comuns de uma burla. Aprenda estes quatro e vai apanhar a maioria das burlas, com ou sem IA.",
            "1. Fingem ser alguém em quem confia: um serviço do governo, o seu banco, uma empresa conhecida, uma instituição de caridade ou um familiar. 2. Dizem que há um problema ou um prémio: você deve dinheiro, a sua conta está bloqueada, ou ganhou alguma coisa mas tem de pagar uma taxa. 3. Pressionam você a agir já e podem dizer para não desligar ou para não contar a ninguém. 4. Querem um pagamento de forma estranha: cartões-presente, transferências bancárias, criptomoeda, uma aplicação de pagamentos, ou um cheque que querem que você deposite para depois lhes devolver dinheiro.",
            "Se vir pelo menos um destes sinais, vá devagar e verifique antes de fazer qualquer coisa."
          ],
          words: [["FTC", "a Federal Trade Commission, o serviço do governo dos EUA que protege as pessoas contra burlas."], ["Fingir ser alguém", "fazer-se passar por outra pessoa."]],
          slides: [
            { title: "Sinal 1: Fingem ser alguém", bullets: ["Governo, banco, empresa, caridade", "Até um familiar"] },
            { title: "Sinal 2: Um problema ou um prémio", bullets: ["\"Você deve dinheiro\"", "\"A sua conta está bloqueada\"", "\"Ganhou, só tem de pagar uma taxa\""] },
            { title: "Sinal 3: Pressão", bullets: ["\"Aja já\"", "\"Não desligue\"", "\"Não conte a ninguém\""] },
            { title: "Sinal 4: Pagamento estranho", bullets: ["Cartões-presente ou transferências bancárias", "Criptomoeda ou aplicações de pagamentos", "Depositar um cheque e devolver dinheiro"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Pegue numa ficha ou numa folha de papel. Escreva \"O meu cartão de segurança contra burlas\" no topo e depois escreva os quatro sinais com as suas palavras.",
          youCanNow: "dizer os quatro sinais de uma burla.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um dos quatro sinais de uma burla?", options: ["Uma mensagem de um número que você mesmo guardou", "Uma carta que estava à espera", "Querem pagamento com cartão-presente ou transferência bancária", "Um amigo a perguntar como está"], answer: 2, why: "Um pagamento estranho, como cartões-presente ou transferências bancárias, é um dos quatro sinais." },
            { objective: "O1", q: "Alguém liga a dizer que deve impostos e tem de pagar hoje ou será preso. Quantos sinais vê, e o que faz?", options: ["Nenhum; pague para ficar seguro", "Vários sinais: um problema e pressão; vá devagar e verifique antes de fazer qualquer coisa", "Um sinal, por isso deve ser verdade", "Nenhum sinal porque é o governo"], answer: 1, why: "Um problema e pressão para agir já são sinais de burla; mesmo um só sinal quer dizer ir devagar e verificar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Cópias de voz feitas com IA e falsas emergências de família",
          minutes: 5,
          goal: "Reconhecer uma chamada de falsa emergência que pode usar uma cópia da voz de um ente querido feita com IA.",
          text: [
            "Com uma gravação curta da voz de alguém, como um vídeo publicado na internet, os burlões podem usar IA para fazer uma cópia dessa voz. Depois ligam para um avô ou uma avó, a chorar ou em pânico: \"Avó, tive um acidente, preciso de dinheiro para a fiança, por favor não conte à mãe.\"",
            "Às vezes uma segunda pessoa entra na chamada e finge ser advogado ou polícia. Pedem dinheiro vivo, cartões-presente ou uma transferência bancária, e podem até mandar um estafeta buscar o dinheiro à sua porta.",
            "A voz pode parecer verdadeira, mas os quatro sinais continuam lá: fingir ser alguém, um problema, pressão e segredo, e um pagamento estranho. Desligue e ligue para o seu ente querido, ou para o pai ou a mãe dele, no número que já tem. Uma palavra-código que só a sua família conhece é uma boa verificação a mais."
          ],
          steps: ["Repare nos sinais: pânico, segredo, um pedido de dinheiro.", "Desligue, mesmo que a voz pareça verdadeira.", "Ligue para o seu ente querido ou para o pai ou a mãe dele, no número que já tem.", "Peça a palavra-código da família, se tiver uma."],
          words: [["Clonagem de voz", "usar IA para copiar a voz de alguém a partir de uma gravação curta."], ["Estafeta", "uma pessoa enviada para ir buscar ou entregar alguma coisa."]],
          slides: [
            { title: "A IA pode copiar uma voz", bullets: ["A partir de um vídeo ou de uma gravação curta", "Pode soar igual a um neto"] },
            { title: "A falsa emergência", bullets: ["Acidente, prisão ou hospital", "\"Não conte à mãe\"", "Dinheiro vivo, cartões-presente, transferência ou um estafeta à sua porta"] },
            { title: "O que fazer", bullets: ["Desligue, mesmo que pareça verdadeiro", "Ligue para o número que já tem", "Peça a palavra-código da família"] }
          ],
          tryIt: "No seu cartão de segurança, escreva os nomes e os números de telefone de dois familiares para quem ligaria para confirmar uma emergência. Depois ligue para um deles e combinem uma palavra-código da família.",
          youCanNow: "reconhecer uma chamada de falsa emergência de família e confirmá-la com segurança.",
          quickCheck: [
            { objective: "O2", q: "Como é que os burlões conseguem copiar a voz de um ente querido?", options: ["Só encontrando a pessoa em pessoa", "Não conseguem", "Adivinhando", "Com IA e uma gravação curta, como um vídeo publicado na internet"], answer: 3, why: "Uma gravação curta chega para a IA copiar uma voz." },
            { objective: "O2", q: "Uma voz a chorar, como a da sua neta, diz que precisa de dinheiro para a fiança e para não contar à mãe dela. O que faz?", options: ["Desliga e liga para ela ou para o pai ou a mãe dela, no número que já tem", "Envia o dinheiro depressa", "Guarda segredo como ela pede", "Dá ao advogado o seu número do banco"], answer: 0, why: "Mesmo que a voz pareça verdadeira, ligue de volta para um número de confiança antes de fazer qualquer coisa." }
          ]
        },
        {
          objectives: ["O3","O1"],
          title: "Mensagens, sites e janelas falsas no ecrã",
          minutes: 5,
          goal: "Reconhecer uma SMS, um email, um site ou um aviso falso no ecrã.",
          text: [
            "A IA ajuda os burlões a escrever SMS e emails sem erros de ortografia, que parecem vir do seu banco, de uma empresa de entregas, do Medicare (o seguro de saúde do governo dos EUA para pessoas mais velhas) ou da Amazon. Uma ortografia sem erros já não prova que uma mensagem é verdadeira.",
            "Truques comuns: \"A sua encomenda não pôde ser entregue, carregue aqui.\" \"Atividade estranha na sua conta, entre já.\" Uma janela no ecrã do computador a dizer que tem um vírus e que deve ligar para um número. Estes links e números levam ao burlão.",
            "Não carregue em links nem ligue para números de mensagens inesperadas. Feche a mensagem e vá ao site verdadeiro da empresa escrevendo você mesmo o endereço, ou ligue para o número nas costas do seu cartão ou numa conta em que confia. O Medicare diz que nunca vai ligar para lhe vender nada nem visitar a sua casa."
          ],
          steps: ["Não carregue no link nem ligue para o número da mensagem.", "Feche a mensagem ou a janela.", "Escreva você mesmo o endereço verdadeiro da empresa, ou ligue para o número do seu cartão ou de uma conta.", "Se uma janela não fechar, desligue o aparelho e peça ajuda a alguém de confiança."],
          words: [["Link", "texto em que toca ou carrega e que o leva a um site."], ["Janela no ecrã (pop-up)", "uma caixa que aparece de repente no seu ecrã."], ["Phishing", "uma mensagem falsa que tenta fazer você dar informações privadas."]],
          slides: [
            { title: "Sem erros não quer dizer verdadeiro", bullets: ["A IA escreve mensagens que parecem verdadeiras", "Banco, entregas, Medicare, Amazon"] },
            { title: "Truques comuns", bullets: ["\"A sua encomenda não pôde ser entregue\"", "\"Entre já, atividade estranha\"", "\"Vírus! Ligue para este número\""] },
            { title: "O que fazer", bullets: ["Não carregue nem ligue a partir da mensagem", "Escreva você mesmo o endereço verdadeiro", "Ligue para o número do seu cartão ou de uma conta"] }
          ],
          sources: [{ name: "Medicare: Reporting Medicare fraud and abuse", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "No seu cartão de segurança, escreva o número de telefone do seu banco copiado das costas do seu cartão do banco, e o número do consultório do seu médico tirado de uma conta ou de um cartão de consulta. Estes são os seus números de confiança.",
          youCanNow: "reconhecer mensagens e janelas falsas e contactar as empresas com segurança usando números em que confia.",
          quickCheck: [
            { objective: "O3", q: "Porque é que uma ortografia sem erros já não prova que uma mensagem é verdadeira?", options: ["Os bancos nunca verificam a ortografia", "A IA ajuda os burlões a escrever mensagens sem erros", "Todos os emails são verificados pelo governo", "A ortografia não importa nas SMS"], answer: 1, why: "A IA escreve mensagens limpas que parecem verdadeiras, por isso a boa ortografia não prova nada." },
            { objective: "O3", q: "Um email diz que há atividade estranha na sua conta do banco e para entrar através de um link. O que faz?", options: ["Carrega no link e entra", "Responde com a sua palavra-passe", "Liga para o número do email", "Fecha-o e escreve você mesmo o endereço verdadeiro do banco, ou liga para o número do seu cartão"], answer: 3, why: "Os links e números de mensagens inesperadas levam ao burlão; contacte você mesmo o banco." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam as burlas hoje",
        questions: [
          { objective: "O1", q: "Qual destes é um dos quatro sinais de uma burla?", options: ["A mensagem tem uma data clara", "Conhece bem quem enviou e estava à espera", "Pressionam você a agir já", "Chegou pelo correio normal"], answer: 2, why: "A pressão para agir já é um sinal clássico de burla." },
          { objective: "O1", q: "Alguém lhe pede para pagar uma \"taxa do governo\" com cartões-presente. Isto é:", options: ["Um sinal de burla", "Normal", "Uma regra dos impostos", "Uma regra do banco"], answer: 0, why: "Os serviços verdadeiros não aceitam pagamentos com cartões-presente." },
          { objective: "O2", q: "Quem liga soa exatamente como o seu neto e implora dinheiro para a fiança. O que faz?", options: ["Envia o dinheiro depressa", "Espera pelo estafeta", "Dá-lhes o número do seu cartão", "Desliga e liga para o seu neto ou para o pai ou a mãe dele, no número que tem"], answer: 3, why: "A IA pode copiar vozes; confirmar num número conhecido é seguro." },
          { objective: "O3", q: "Um email não tem erros e tem o logótipo do seu banco. Isso prova que é verdadeiro?", options: ["Sim, sempre", "Não, a IA faz mensagens falsas parecerem verdadeiras", "Sim, se for comprido", "Sim, se tiver um link"], answer: 1, why: "A boa ortografia e os logótipos são fáceis de copiar para os burlões." },
          { objective: "O3", q: "Uma janela no ecrã diz que o seu computador tem um vírus e para ligar para um número. Você deve:", options: ["Ligar para o número", "Não ligar; fechá-la, ou desligar o aparelho e pedir ajuda a alguém de confiança", "Pagar para resolver", "Deixá-los entrar no seu computador à distância"], answer: 1, why: "Avisos de vírus em janelas no ecrã com números de telefone são uma burla comum." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger-se",
      lessons: [
        {
          objectives: ["O4"],
          title: "O hábito Parar, Verificar, Ligar",
          minutes: 4,
          goal: "Usar três passos sempre que uma mensagem ou uma chamada o preocupa.",
          text: [
            "Os burlões ganham quando apressam você. A sua melhor defesa é um hábito que usa sempre: Parar, Verificar, Ligar.",
            "Parar: não carregue, não pague e não dê nenhuma informação. Pode desligar a chamada a qualquer pessoa, mesmo que diga que é da polícia ou do banco. Verificar: procure os quatro sinais. Fale com alguém de confiança antes de agir. Ligar: contacte você mesmo a pessoa ou a empresa, usando um número do seu cartão de segurança, do seu cartão do banco, de uma conta ou do site oficial que você mesmo escreveu.",
            "Também pode pedir uma segunda opinião a um assistente de IA. Cole a mensagem, depois de tirar todos os dados privados, e pergunte: \"Esta mensagem mostra sinais de burla?\" Trate a resposta como uma ajuda, não como a última palavra; os seus passos Parar, Verificar, Ligar vêm sempre primeiro."
          ],
          steps: ["Parar: não carregue, não pague e não partilhe nada.", "Verificar: procure os quatro sinais e fale com alguém de confiança.", "Ligar: use um número em que já confia, nunca um da mensagem."],
          words: [["Segunda opinião", "pedir a outra pessoa para ver uma coisa antes de você decidir."]],
          slides: [
            { title: "Parar", bullets: ["Não carregue, não pague, não partilhe", "Pode desligar a qualquer pessoa"] },
            { title: "Verificar", bullets: ["Procure os quatro sinais", "Fale com alguém de confiança"] },
            { title: "Ligar", bullets: ["Use um número em que já confia", "Nunca um número da mensagem"] },
            { title: "A IA como ajuda", bullets: ["Tire primeiro os dados privados", "Pergunte: \"Isto mostra sinais de burla?\"", "Os seus próprios passos vêm primeiro"] }
          ],
          tryIt: "Escreva Parar, Verificar, Ligar no seu cartão de segurança. Depois pergunte a um assistente de IA: \"Esta mensagem mostra sinais de burla? A sua encomenda está retida. Pague $1.99 neste link hoje ou ela será devolvida.\" Compare a resposta com os quatro sinais.",
          youCanNow: "usar o hábito Parar, Verificar, Ligar e pedir à IA uma segunda opinião com cuidado.",
          quickCheck: [
            { objective: "O4", q: "No Parar, Verificar, Ligar, o que quer dizer Ligar?", options: ["Ligar para o número da mensagem", "Ligar de volta para quem lhe ligou", "Contactar a pessoa ou a empresa usando um número em que já confia", "Ligar a um amigo para pagar por você"], answer: 2, why: "Ligar quer dizer usar um número do seu cartão de segurança, do cartão do banco, de uma conta ou de um site que você mesmo escreveu." },
            { objective: "O4", q: "Um homem liga a dizer que é da polícia e que você não pode desligar. O que pode fazer?", options: ["Desligar; pode desligar a qualquer pessoa", "Ficar na linha aconteça o que acontecer", "Dar-lhe a sua morada", "Pagar-lhe para acabar a chamada"], answer: 0, why: "Parar quer dizer que pode desligar a qualquer pessoa, mesmo a alguém que diz ser da polícia." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proteger o seu dinheiro e as suas informações",
          minutes: 5,
          goal: "Fazer a lista dos dados e dos pagamentos que nunca dá a uma chamada ou mensagem inesperada.",
          text: [
            "Nunca dê isto a quem o contacta sem você esperar: o seu número da Segurança Social (Social Security) ou do Medicare, números de banco ou de cartão, palavras-passe, ou um código enviado por SMS para o seu telefone. O seu banco já sabe o número da sua conta; um banco verdadeiro não pede a sua palavra-passe nem o código da SMS.",
            "Nunca pague a um desconhecido com cartões-presente, transferências bancárias, criptomoeda ou uma aplicação de pagamentos, e nunca deposite um cheque para devolver parte do dinheiro. A FTC diz que os serviços verdadeiros do governo nunca lhe vão dizer para mudar dinheiro de lugar para o \"proteger\", levantar dinheiro vivo ou comprar ouro.",
            "Nunca deixe quem lhe liga entrar no seu computador para o \"arranjar\". Se já deu dinheiro ou informações, aja depressa: ligue para o seu banco usando o número do seu cartão e conte o que aconteceu."
          ],
          steps: ["Nunca partilhe números da Segurança Social, do Medicare, do banco ou do cartão com um contacto inesperado.", "Nunca partilhe palavras-passe nem códigos enviados por SMS.", "Nunca pague a desconhecidos com cartões-presente, transferências, criptomoeda ou aplicações de pagamentos.", "Se já pagou ou partilhou, ligue logo para o seu banco usando o número do seu cartão."],
          words: [["Código por SMS", "um número curto enviado para o seu telefone para provar que é mesmo você a entrar."], ["Transferência bancária", "enviar dinheiro por via eletrónica; é muito difícil de recuperar."]],
          slides: [
            { title: "Nunca partilhe", bullets: ["Números da Segurança Social ou do Medicare", "Números de banco ou de cartão, palavras-passe", "Códigos enviados por SMS para o seu telefone"] },
            { title: "Nunca pague a desconhecidos com", bullets: ["Cartões-presente ou transferências bancárias", "Criptomoeda ou aplicações de pagamentos", "Dinheiro de um cheque que acabou de depositar"] },
            { title: "Serviços verdadeiros nunca pedem para", bullets: ["Mudar dinheiro de lugar para o \"proteger\"", "Levantar dinheiro vivo ou comprar ouro"] },
            { title: "Já pagou?", bullets: ["Ligue logo para o seu banco", "Use o número do seu cartão"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "No seu cartão de segurança, escreva: \"Nunca partilho os meus números, palavras-passe ou códigos com quem me contacta primeiro. Nunca pago a desconhecidos com cartões-presente, transferências ou criptomoeda.\"",
          youCanNow: "proteger os seus dados privados e recusar pagamentos arriscados.",
          quickCheck: [
            { objective: "O5", q: "O que é que um banco verdadeiro nunca lhe pede?", options: ["Para ir a uma agência", "A sua palavra-passe ou um código enviado por SMS para o seu telefone", "Para ler o seu extrato", "Para ligar para o número do seu cartão"], answer: 1, why: "O seu banco já conhece a sua conta; não pede a sua palavra-passe nem o código da SMS." },
            { objective: "O5", q: "Percebe que deu o número do seu cartão a um burlão há uma hora. O que faz primeiro?", options: ["Espera para ver o que acontece", "Liga de volta ao burlão", "Publica isso na internet", "Liga logo para o seu banco usando o número do seu cartão"], answer: 3, why: "Agir depressa com o seu banco é o primeiro passo se já partilhou dinheiro ou informações." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Denunciar uma burla e ter ajuda",
          minutes: 5,
          goal: "Dizer onde denunciar uma burla e onde ter apoio.",
          text: [
            "Denunciar ajuda a travar os burlões e pode ajudar você. Nos Estados Unidos, pode denunciar burlas à Federal Trade Commission em ReportFraud.ftc.gov. Os crimes na internet também podem ser denunciados ao Internet Crime Complaint Center do FBI, em ic3.gov.",
            "Se tem 60 anos ou mais, a National Elder Fraud Hotline (linha nacional contra burlas a idosos), do Departamento de Justiça, é gratuita: ligue 833-FRAUD-11 (833-372-8311). Quando verificámos, funcionava de segunda a sexta-feira, das 10h às 18h, hora do leste dos EUA, com ajuda em inglês, espanhol e outras línguas. Veja o site da linha para saber o horário atual.",
            "Se alguém usar as suas informações, vá a IdentityTheft.gov para ter um plano de recuperação gratuito. Se for uma fraude com o Medicare, ligue 1-800-MEDICARE (1-800-633-4227). Os sites verdadeiros de denúncia nunca lhe pedem para pagar para recuperar o seu dinheiro; quem pede isso é outra burla."
          ],
          steps: ["Se lhe tiraram dinheiro, ligue primeiro para o seu banco.", "Denuncie em ReportFraud.ftc.gov.", "Com 60 anos ou mais: ligue para a Elder Fraud Hotline, 833-372-8311.", "Se usaram a sua identidade: vá a IdentityTheft.gov.", "Cuidado com quem cobra para recuperar o seu dinheiro."],
          words: [["Denunciar", "contar ao serviço certo o que aconteceu para ele poder agir."], ["Roubo de identidade", "quando alguém usa as suas informações pessoais para fingir ser você."]],
          slides: [
            { title: "Onde denunciar", bullets: ["ReportFraud.ftc.gov", "ic3.gov do FBI para crimes na internet"] },
            { title: "Com 60 anos ou mais", bullets: ["National Elder Fraud Hotline", "833-FRAUD-11 (833-372-8311)", "Gratuita; veja o horário atual no site"] },
            { title: "Mais ajuda", bullets: ["IdentityTheft.gov se usarem as suas informações", "1-800-MEDICARE para fraudes com o Medicare", "Nunca pague a ninguém para \"recuperar\" o seu dinheiro"] }
          ],
          sources: [{ name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }, { name: "FBI Internet Crime Complaint Center", url: "https://www.ic3.gov/" }, { name: "FTC: What to know about identity theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "Medicare: Reporting fraud and abuse", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Tarefa final: termine o seu cartão de segurança contra burlas. Acrescente os lugares onde denunciar uma burla e o número da Elder Fraud Hotline. Depois avalie estas duas mensagens com os quatro sinais: (1) \"Olá avô, número novo, estou em apuros, envie $500 em cartões-presente\"; (2) um lembrete da sua farmácia a dizer que o seu medicamento está pronto, sem link e sem pedido de dinheiro.",
          youCanNow: "reconhecer uma burla, verificá-la com segurança, proteger o seu dinheiro e denunciá-la no lugar certo.",
          quickCheck: [
            { objective: "O6", q: "Para que serve o IdentityTheft.gov?", options: ["Um plano de recuperação gratuito se alguém usar as suas informações", "Comprar um seguro de identidade", "Pagar os seus impostos", "Comunicar a perda de um telefone"], answer: 0, why: "O IdentityTheft.gov dá um plano de recuperação gratuito quando usam as suas informações." },
            { objective: "O6", q: "Uma empresa liga a oferecer recuperar o dinheiro que perdeu, em troca de uma taxa. O que é isto?", options: ["Um serviço do governo", "Um reembolso normal", "Provavelmente outra burla", "Um banco de confiança"], answer: 2, why: "Os sites verdadeiros de denúncia nunca pedem para pagar para recuperar o seu dinheiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Proteger-se",
        questions: [
          { objective: "O4", q: "Quais são os três passos do hábito de segurança?", options: ["Carregar, Pagar, Esquecer", "Responder, Partilhar, Enviar", "Esperar, Ter esperança, Pagar", "Parar, Verificar, Ligar"], answer: 3, why: "Parar, Verificar, Ligar trava a pressa do burlão." },
          { objective: "O4", q: "Quando liga para confirmar, que número deve usar?", options: ["Um do seu cartão de segurança, do seu cartão ou de uma conta", "O da mensagem", "Um que quem liga lhe dá", "Um de uma janela no ecrã"], answer: 0, why: "Só os números em que já confia são seguros." },
          { objective: "O5", q: "Alguém liga a dizer para passar as suas poupanças para uma \"conta segura\" para as proteger. Isto é:", options: ["Um bom conselho", "Uma regra do banco", "Uma burla; os serviços verdadeiros nunca pedem isto", "Uma obrigação dos impostos"], answer: 2, why: "A FTC diz que os serviços verdadeiros nunca lhe dizem para mudar dinheiro de lugar para o proteger." },
          { objective: "O6", q: "Onde pode denunciar uma burla à FTC?", options: ["Numa janela no ecrã", "No site do burlão", "Numa publicação nas redes sociais", "Em ReportFraud.ftc.gov"], answer: 3, why: "O ReportFraud.ftc.gov é o site de denúncias da FTC." },
          { objective: "O6", q: "Alguém oferece recuperar o dinheiro que perdeu em troca de uma taxa. O que é isto?", options: ["Um programa do governo", "Ajuda normal", "Provavelmente outra burla", "Conselho gratuito"], answer: 2, why: "Os sites verdadeiros de denúncia nunca cobram para recuperar dinheiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Segurança com a IA e Prevenção de Burlas para Idosos",
    questions: [
      { objective: "O1", q: "Que serviço dos EUA descreve os quatro sinais de uma burla?", options: ["O serviço de meteorologia", "A Federal Trade Commission (FTC)", "Os correios", "Uma empresa de telefones"], answer: 1, why: "A FTC protege os consumidores contra burlas." },
      { objective: "O1", q: "Uma mensagem diz que ganhou um prémio mas tem de pagar uma taxa primeiro. Isto é:", options: ["Um sinal de burla", "Um prémio normal", "Uma regra dos impostos", "Uma regra do banco"], answer: 0, why: "Um prémio que exige uma taxa é uma burla comum." },
      { objective: "O1", q: "\"Não desligue e não conte a ninguém\" é um sinal de:", options: ["Pressão, um sinal de burla", "Bom atendimento", "Uma emergência verdadeira", "Uma chamada do médico"], answer: 0, why: "A pressão e o segredo são sinais de burla." },
      { objective: "O1", q: "Que forma de pagamento é um sinal de alerta quando um desconhecido a pede?", options: ["Pagar a sua própria conta da luz ou da água no site oficial", "Cartões-presente", "Pagar na caixa do supermercado", "Um cheque que envia pelo correio ao seu senhorio"], answer: 1, why: "Os burlões pedem cartões-presente porque são difíceis de seguir." },
      { objective: "O2", q: "O que é a clonagem de voz?", options: ["Uma aula de canto", "Um arranjo de telefone", "Usar IA para copiar a voz de alguém", "Um tipo de aparelho auditivo"], answer: 2, why: "A IA pode copiar uma voz a partir de uma gravação curta." },
      { objective: "O2", q: "Numa chamada de falsa emergência, uma segunda pessoa pode fingir ser:", options: ["Um cozinheiro", "O cão do seu vizinho", "Um apresentador do tempo", "Um advogado ou um polícia"], answer: 3, why: "Os burlões juntam falsas autoridades para parecerem verdadeiros." },
      { objective: "O2", q: "Uma palavra-código da família ajuda você a:", options: ["Desbloquear o telefone", "Pagar contas", "Confirmar quem está mesmo a ligar", "Mudar a sua palavra-passe"], answer: 2, why: "Só a sua família verdadeira a conhece." },
      { objective: "O3", q: "Uma ortografia sem erros prova que uma mensagem é verdadeira?", options: ["Não", "Sim", "Só aos domingos", "Só se vier de bancos"], answer: 0, why: "A IA escreve mensagens falsas sem erros de ortografia." },
      { objective: "O3", q: "Uma SMS diz que a sua encomenda está retida; pague uma pequena taxa num link. Você deve:", options: ["Carregar e pagar", "Reencaminhá-la a amigos", "Responder com o número do seu cartão", "Não carregar; confirmar você mesmo com a empresa de entregas"], answer: 3, why: "Os links de mensagens inesperadas levam aos burlões." },
      { objective: "O3", q: "Uma janela no ecrã diz \"Vírus! Ligue já para este número.\" Você:", options: ["Liga", "Não liga; fecha-a ou desliga o aparelho", "Paga o arranjo", "Deixa-os entrar no seu computador"], answer: 1, why: "Os avisos de vírus em janelas no ecrã são uma burla comum." },
      { objective: "O3", q: "Segundo o Medicare, o Medicare nunca vai:", options: ["Enviar-lhe informações pelo correio", "Ligar para lhe vender alguma coisa ou visitar a sua casa", "Pagar cuidados de saúde", "Ter um site"], answer: 1, why: "O Medicare diz que não liga para vender nem visita a sua casa." },
      { objective: "O4", q: "No Parar, Verificar, Ligar, \"Parar\" quer dizer:", options: ["Parar de pagar as contas", "Parar de usar o telefone para sempre", "Parar de falar com a família", "Não carregar, não pagar e não partilhar"], answer: 3, why: "Parar tira a pressa ao burlão." },
      { objective: "O4", q: "Antes de colar uma mensagem na IA para ter uma segunda opinião, você deve:", options: ["Tirar os dados privados", "Acrescentar o seu número do banco", "Acrescentar a sua palavra-passe", "Acrescentar a sua morada"], answer: 0, why: "Os dados privados nunca vão para a IA." },
      { objective: "O4", q: "A opinião de um assistente de IA sobre uma mensagem é:", options: ["Uma decisão legal", "Sempre certa", "Uma ajuda, não a última palavra", "Uma decisão do banco"], answer: 2, why: "A IA pode estar errada; os seus próprios passos vêm primeiro." },
      { objective: "O5", q: "Um banco verdadeiro nunca lhe vai pedir:", options: ["Para ligar para o número dele", "Para ir a uma agência", "Para ler o seu extrato", "A sua palavra-passe ou o código da SMS"], answer: 3, why: "Os bancos não pedem palavras-passe nem códigos." },
      { objective: "O5", q: "Alguém lhe pede para depositar um cheque dele e devolver parte do dinheiro. Isto é:", options: ["Uma regra do banco", "Um favor normal", "Uma burla do cheque falso", "Um reembolso de impostos"], answer: 2, why: "O cheque não tem cobertura e você perde o dinheiro que enviou." },
      { objective: "O5", q: "Se já enviou dinheiro a um burlão, a primeira chamada é para:", options: ["O burlão", "O seu banco, usando o número do seu cartão", "Um número de uma janela no ecrã", "Ninguém"], answer: 1, why: "O seu banco pode conseguir parar ou anular o pagamento." },
      { objective: "O6", q: "O número da National Elder Fraud Hotline é:", options: ["833-372-8311", "911", "411", "Um número de uma SMS"], answer: 0, why: "833-FRAUD-11 (833-372-8311) é a linha de apoio do Departamento de Justiça." },
      { objective: "O6", q: "Se alguém usar as suas informações pessoais, há um plano de recuperação gratuito em:", options: ["IdentityTheft.gov", "Um anúncio que aparece no ecrã", "O site do burlão", "Uma página das redes sociais"], answer: 0, why: "O IdentityTheft.gov é o site de recuperação da FTC." },
      { objective: "O6", q: "O site do FBI para denunciar crimes na internet é:", options: ["fbi-refund.win", "ic3.gov", "um link numa SMS", "um site de cartões-presente"], answer: 1, why: "O IC3 é o Internet Crime Complaint Center do FBI." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      4,
      8,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Números de confiança e passos",
        objective: "O4",
        notYet: "Menos de três números de confiança, ou um número copiado de uma mensagem.",
        meets: "Três números de confiança (família, banco tirado das costas do cartão, consultório do médico) e os passos Parar, Verificar, Ligar escritos.",
        exceeds: "Sabe explicar de onde veio cada número e porque se pode confiar nele."
      },
      {
        name: "Palavra-código da família",
        objective: "O2",
        notYet: "Não tem palavra-código da família, ou é fácil de adivinhar ou está publicada na internet.",
        meets: "Uma palavra-código da família está escrita no cartão e foi partilhada com a família.",
        exceeds: "Já praticou pedi-la numa chamada de emergência a fingir."
      },
      {
        name: "Lugares para denunciar",
        objective: "O6",
        notYet: "Nenhum lugar para denunciar, ou lugares errados.",
        meets: "Pelo menos dois lugares certos, como ReportFraud.ftc.gov e a Elder Fraud Hotline.",
        exceeds: "Também indica o IdentityTheft.gov e diz para ligar primeiro para o banco se tiraram dinheiro."
      },
      {
        name: "Mensagens de exemplo avaliadas",
        objective: "O1",
        notYet: "Não percebeu que uma mensagem de exemplo era uma burla.",
        meets: "Avaliou bem as duas mensagens de exemplo e disse os sinais que encontrou.",
        exceeds: "Disse o que faria a seguir, usando Parar, Verificar, Ligar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que têm o seu cartão de segurança contra burlas ao pé do telefone no seguimento aos 30 dias",
      "Alunos que dizem ter reconhecido e evitado uma chamada, SMS ou email de burla em 30 dias (inquérito de seguimento)",
      "Famílias que combinam uma palavra-código da família"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, e um computador ou tablet se houver",
      "Uma ficha em branco ou papel e caneta para o cartão de segurança contra burlas",
      "Duas mensagens de exemplo impressas (uma burla, uma verdadeira) para a tarefa final",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Use mensagens de exemplo inventadas; nunca peça aos alunos para partilhar números verdadeiros de contas, do Medicare ou da Segurança Social.",
      "Faça um teatro de uma falsa chamada de um neto para os alunos praticarem desligar e ligar de volta.",
      "Diga aos alunos que qualquer pessoa pode ser enganada; ser vítima de uma burla não é motivo de vergonha, e denunciar ajuda.",
      "Os horários e os números das linhas de apoio podem mudar; verifique nos sites oficiais antes da sessão.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
