"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-banking-safety.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: US agencies, websites and the hotline number stay as in the English.

module.exports = {
  id: "seniors-ai-banking-safety-pt",
  lang: "pt",
  translationOf: "seniors-ai-banking-safety",
  category: "Seniors and Technology",
  name: "IA e Segurança no Banco pela Internet",
  skills: "Obter a aplicação verdadeira do seu banco, Iniciar sessão com segurança com a verificação em dois passos, Ligar os alertas da conta, Reconhecer burlas bancárias feitas com IA, Usar aplicações de pagamento com segurança, Saber o que fazer se algo correr mal",
  outcome: "iniciar sessão com segurança na aplicação ou no site oficial do seu banco, ligar os alertas da sua conta, reconhecer uma chamada ou mensagem falsa do \"banco\" e saber exatamente para quem ligar se algo correr mal.",
  about: [
    "O banco pela internet deixa você ver o seu saldo, ver pagamentos e pagar contas sem ir ao balcão. Este curso é para pessoas mais velhas que querem usá-lo com confiança e proteger-se dos burlões que agora usam IA para parecerem o seu banco, na voz e na imagem.",
    "Você vai obter a aplicação verdadeira do seu banco, iniciar sessão com segurança, ligar alertas para notar qualquer coisa estranha, conhecer os truques dos falsos funcionários do \"banco\", usar aplicações de pagamento com cuidado e fazer um plano para o que fazer se algo correr mal.",
    "Este curso não dá conselhos financeiros, e nunca vai ter de escrever os dados verdadeiros da sua conta aqui nem num assistente de IA. Um familiar de confiança pode ficar ao seu lado durante a configuração. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Inicie sessão na aplicação ou no site oficial do seu banco, ligue pelo menos dois alertas (por exemplo para compras grandes e saldo baixo), escreva no seu cartão de segurança o número de telefone do banco que está atrás do seu cartão bancário e use os quatro sinais para avaliar uma SMS de exemplo do \"banco\".",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas nos Estados Unidos que têm conta num banco ou numa cooperativa de crédito (credit union) e estão a começar a usar, ou já usam, o banco pela internet e aplicações de pagamento, muitas vezes por sugestão da família ou do banco.",
    startingPoint: "Usam um cartão de débito ou de crédito e um smartphone. Alguns já usam o banco pela internet; outros só vão ao balcão ou tratam por telefone. Muitos não sabem bem como distinguir uma aplicação ou uma chamada verdadeira do banco de uma falsa.",
    gap: "O banco pela internet poupa deslocações e ajuda a apanhar problemas cedo, mas as pessoas mais velhas são alvos preferidos de chamadas e SMS falsas do banco e de burlas com aplicações de pagamento, e o dinheiro enviado por aplicação é difícil de recuperar. Iniciar sessão com segurança, ter alertas, reconhecer falsificações e saber para quem ligar protegem as suas poupanças.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um smartphone ou um computador; a aplicação e os menus de cada banco são diferentes",
      "Tempo: cerca de 5 minutos por lição, com calma",
      "Privacidade: nenhuma palavra-passe, número de conta ou código verdadeiro é partilhado na aula",
      "Os dados dos serviços dos EUA e da linha de apoio podem mudar; os alunos verificam nos sites oficiais"
    ],
    prerequisites: "É útil fazer antes o curso \"Segurança com a IA e Prevenção de Burlas para Idosos\", mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o seu telefone ou computador", action: "abrir a aplicação ou o site oficial do seu banco a partir da loja de aplicações ou do endereço do seu extrato", standard: "nunca através de um link numa SMS ou num e-mail" },
    { id: "O2", condition: "Quando inicia sessão no banco pela internet", action: "usar uma palavra-passe longa e só para o banco e a verificação em dois passos, e terminar a sessão em computadores partilhados", standard: "sem partilhar a palavra-passe nem os códigos com ninguém" },
    { id: "O3", condition: "Na aplicação ou no site do seu banco", action: "ligar alertas para compras grandes, saldo baixo e mudanças no acesso", standard: "com pelo menos dois alertas ligados" },
    { id: "O4", condition: "Perante uma chamada ou mensagem que diz ser do seu banco", action: "identificar os sinais de um contacto falso do banco e ligar para o número que está atrás do seu cartão", standard: "sem dar nenhum código, palavra-passe ou dinheiro" },
    { id: "O5", condition: "Antes de enviar dinheiro com uma aplicação de pagamento", action: "verificar o nome e o número da pessoa e enviar só a pessoas que conhece pessoalmente", standard: "nunca pagando a quem o contactou primeiro" },
    { id: "O6", condition: "Se lhe roubarem dinheiro ou informações", action: "ligar para o seu banco, mudar a palavra-passe e fazer queixa nos lugares certos", standard: "começando logo, com o número do seu cartão" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Usar o banco pela internet com segurança",
      lessons: [
        {
          objectives: ["O1"],
          title: "Obter a aplicação ou o site verdadeiro do seu banco",
          minutes: 5,
          goal: "Encontrar e abrir a aplicação ou o site oficial do seu banco sem cair numa falsificação.",
          text: [
            "Os burlões fazem aplicações e sites de bancos falsos que parecem verdadeiros. A IA faz as cópias parecerem ainda melhores. Por isso, comece sempre por uma fonte de confiança.",
            "Para a aplicação: abra a loja de aplicações oficial do seu telefone, procure o nome exato do seu banco e confirme que a aplicação é publicada pelo seu banco. Se tiver dúvidas, o site oficial do banco ou um funcionário do balcão pode dizer-lhe o nome exato da aplicação. Para o site: escreva você mesmo o endereço do banco, ou use o endereço impresso no seu extrato. Não entre no seu banco através de um link numa SMS ou num e-mail.",
            "O seu banco também pode ajudar a configurar o banco pela internet no balcão ou por telefone, usando o número que está atrás do seu cartão."
          ],
          steps: ["Abra a loja de aplicações oficial.", "Procure o nome exato do seu banco.", "Confirme que a aplicação é publicada pelo seu banco.", "No computador, escreva você mesmo o endereço que está no extrato.", "Nunca use um link numa SMS ou num e-mail para entrar no banco."],
          words: [["Banco pela internet", "usar a aplicação ou o site do seu banco para ver e gerir as suas contas."], ["Aplicação falsa", "uma aplicação feita para parecer verdadeira, para roubar informações."]],
          slides: [
            { title: "As falsificações parecem verdadeiras", bullets: ["Existem aplicações e sites de bancos falsos", "A IA faz com que pareçam ainda melhores"] },
            { title: "Obter a aplicação verdadeira", bullets: ["Só na loja de aplicações oficial", "Procure o nome exato do banco", "Confirme que quem publica é o seu banco"] },
            { title: "Obter o site verdadeiro", bullets: ["Escreva você mesmo o endereço", "Use o que está no seu extrato", "Nunca a partir de um link numa SMS ou e-mail"] }
          ],
          tryIt: "Olhe para um extrato do banco ou para o seu cartão bancário e encontre o endereço do site e o número de telefone do seu banco. Escreva-os num cartão que guarda em casa.",
          youCanNow: "encontrar a aplicação ou o site verdadeiro do seu banco a partir de uma fonte de confiança.",
          quickCheck: [
            { objective: "O1", q: "Onde está impresso o endereço verdadeiro do site do seu banco?", options: ["Numa SMS de um número desconhecido", "Num anúncio que aparece no ecrã", "No seu extrato do banco", "Num e-mail que pede para atualizar os seus dados"], answer: 2, why: "Escreva você mesmo o endereço do extrato em vez de usar um link." },
            { objective: "O1", q: "Encontra duas aplicações com o nome do seu banco na loja. O que verifica?", options: ["Qual delas é publicada pelo seu banco", "Qual tem o logótipo mais bonito", "Qual é a mais recente", "Qual é gratuita"], answer: 0, why: "Confirme que a aplicação é publicada pelo seu banco; pergunte ao banco se tiver dúvidas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iniciar sessão com segurança",
          minutes: 6,
          goal: "Iniciar sessão com uma palavra-passe forte e a verificação em dois passos, e terminar a sessão com segurança.",
          text: [
            "A sua palavra-passe deve ser longa e difícil de adivinhar: uma frase com várias palavras sem ligação entre si funciona bem. Use-a só para o seu banco. Guarde-a num lugar seguro em casa ou num gestor de palavras-passe, nunca numa nota simples no telefone, e nunca a partilhe.",
            "A verificação em dois passos (também chamada de dois fatores) acrescenta uma segunda verificação, normalmente um código enviado por SMS para o seu telefone ou um aviso na aplicação. Mesmo que alguém descubra a sua palavra-passe, não consegue entrar sem esse código. Ligue-a nas definições de segurança da aplicação, ou peça ajuda ao seu banco.",
            "O seu banco nunca vai ligar nem enviar SMS a pedir esse código. Quem o pedir é um burlão. Muitas aplicações também deixam iniciar sessão com a impressão digital ou o rosto, o que é seguro e fácil. Num computador partilhado ou da biblioteca, não guarde a palavra-passe e termine a sessão quando acabar."
          ],
          steps: ["Escolha uma palavra-passe longa e só para o banco, por exemplo várias palavras sem ligação.", "Guarde-a num lugar seguro, nunca numa nota simples.", "Ligue a verificação em dois passos.", "Nunca partilhe o código com ninguém.", "Termine a sessão em computadores partilhados."],
          words: [["Verificação em dois passos", "uma segunda verificação, como um código enviado por SMS, necessária para iniciar sessão."], ["Gestor de palavras-passe", "uma aplicação que guarda as suas palavras-passe com segurança."]],
          slides: [
            { title: "Uma palavra-passe forte", bullets: ["Longa: várias palavras sem ligação", "Só para o seu banco", "Guardada em segurança, nunca partilhada"] },
            { title: "Verificação em dois passos", bullets: ["Um código ou aviso na aplicação como segunda verificação", "Trava ladrões que sabem a sua palavra-passe", "Ligue-a nas definições de segurança"] },
            { title: "Regra de ouro", bullets: ["O seu banco nunca pede esse código", "Quem o pedir é um burlão"] },
            { title: "Computadores partilhados", bullets: ["Não guarde a sua palavra-passe", "Termine a sessão quando acabar"] }
          ],
          tryIt: "Com um familiar ou um funcionário do banco, se quiser, abra a aplicação ou o site do seu banco e veja se a verificação em dois passos está ligada. Se não estiver, ligue-a. Não partilhe nenhum código com ninguém, nem connosco.",
          youCanNow: "iniciar sessão com segurança com uma palavra-passe forte e a verificação em dois passos.",
          quickCheck: [
            { objective: "O2", q: "O que é a verificação em dois passos?", options: ["Escrever a palavra-passe duas vezes", "Uma segunda verificação, como um código por SMS, depois da palavra-passe", "Iniciar sessão em dois telefones", "Uma taxa do banco"], answer: 1, why: "Acrescenta uma segunda verificação, por isso só a palavra-passe não chega para entrar." },
            { objective: "O2", q: "Precisa de uma nova palavra-passe para o banco. Qual é a melhor?", options: ["A data do seu aniversário", "\"password123\"", "A mesma palavra-passe que usa no e-mail", "Uma frase com várias palavras sem ligação, usada só para o seu banco"], answer: 3, why: "Uma frase longa, só para o banco, com palavras sem ligação, é forte e difícil de adivinhar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ligar alertas para apanhar problemas cedo",
          minutes: 5,
          goal: "Ligar os alertas da conta para notar depressa qualquer movimento estranho.",
          text: [
            "Os alertas são mensagens que o seu banco lhe envia por SMS, e-mail ou notificação da aplicação quando acontece alguma coisa na sua conta: uma compra grande, um saldo baixo, um novo beneficiário ou uma mudança de palavra-passe.",
            "Na aplicação ou no site do banco, procure Alertas ou Notificações, muitas vezes no seu perfil ou nas definições. Ligue alertas para compras acima de um valor que você escolhe, para saldo baixo e para qualquer mudança nos seus dados de acesso.",
            "Quando chega um alerta sobre algo que você não fez, não responda nem ligue para um número que está nele. Abra você mesmo a aplicação do banco, ou ligue para o número que está atrás do seu cartão."
          ],
          steps: ["Abra a aplicação ou o site do seu banco.", "Encontre Alertas ou Notificações.", "Ligue alertas para compras grandes, saldo baixo e mudanças no acesso.", "Se um alerta mostrar algo que não fez, ligue para o número do seu cartão."],
          words: [["Alerta", "uma mensagem do seu banco sobre movimentos na sua conta."], ["Beneficiário", "uma pessoa ou empresa a quem você envia dinheiro."]],
          slides: [
            { title: "Os alertas apanham problemas cedo", bullets: ["Compras grandes", "Saldo baixo", "Novo beneficiário ou mudança de palavra-passe"] },
            { title: "Ligue-os", bullets: ["Encontre Alertas ou Notificações", "Escolha os seus valores", "SMS, e-mail ou aplicação"] },
            { title: "Algo que não fez?", bullets: ["Não responda nem ligue para um número do alerta", "Abra você mesmo a aplicação", "Ou ligue para o número do seu cartão"] }
          ],
          tryIt: "Ligue pelo menos dois alertas na aplicação ou no site do seu banco: um para compras acima de um valor que escolhe e outro para saldo baixo.",
          youCanNow: "ligar alertas do banco e reagir com segurança quando chega um.",
          quickCheck: [
            { objective: "O3", q: "O que é um alerta do banco?", options: ["Uma mensagem do seu banco quando acontece algo na sua conta", "Uma oferta de venda", "Uma chamada do departamento de fraudes", "Um extrato em papel"], answer: 0, why: "Os alertas avisam sobre movimentos, como uma compra grande ou um saldo baixo." },
            { objective: "O3", q: "Um alerta diz que mudou a palavra-passe, mas você não mudou. O que faz?", options: ["Responde ao alerta", "Liga para o número do alerta", "Ignora", "Abre você mesmo a aplicação do banco ou liga para o número do seu cartão"], answer: 3, why: "Não responda nem ligue para um número do alerta; contacte você mesmo o seu banco." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Usar o banco pela internet com segurança",
        questions: [
          { objective: "O1", q: "Uma SMS tem um link para \"atualizar os seus dados bancários\". Como deve contactar o seu banco?", options: ["Responder com a sua palavra-passe", "Tocar no link", "Escrever você mesmo o endereço ou usar a aplicação oficial", "Ligar para o número da SMS"], answer: 2, why: "Os links nas SMS podem levar a sites falsos." },
          { objective: "O1", q: "Como sabe que uma aplicação do banco é a verdadeira?", options: ["Está na loja oficial e é publicada pelo seu banco", "Veio de um anúncio no ecrã", "Um desconhecido enviou-a", "Tem uma imagem bonita"], answer: 0, why: "Verifique a loja e quem publica." },
          { objective: "O2", q: "O que acrescenta a verificação em dois passos?", options: ["Uma segunda palavra-passe para partilhar", "Uma segunda conta bancária", "Dinheiro grátis", "Uma segunda verificação, como um código por SMS"], answer: 3, why: "Trava os ladrões que só sabem a sua palavra-passe." },
          { objective: "O2", q: "Alguém liga a dizer que é do seu banco e pede o código que acabou de receber por SMS. Você:", options: ["Lê-o para essa pessoa", "Desliga; o seu banco nunca pede esse código", "Envia-o por SMS", "Dá metade do código"], answer: 1, why: "Quem pede o código é um burlão." },
          { objective: "O3", q: "Um alerta mostra uma compra que não fez. Você:", options: ["Responde ao alerta", "Liga para o número que está atrás do seu cartão", "Liga para um número do alerta", "Ignora"], answer: 1, why: "Use um número em que já confia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Reconhecer burlas e ficar protegido",
      lessons: [
        {
          objectives: ["O4"],
          title: "Chamadas e mensagens falsas do banco feitas com IA",
          minutes: 5,
          goal: "Reconhecer uma chamada ou mensagem falsa do \"departamento de fraudes do banco\".",
          text: [
            "Uma burla comum: uma chamada ou SMS diz que é do departamento de fraudes do seu banco e que há um problema na sua conta. O identificador de chamadas pode até mostrar o nome do seu banco, e a IA pode fazer a voz e as mensagens parecerem muito profissionais.",
            "Depois pedem para fazer alguma coisa: ler um código, \"confirmar\" a palavra-passe, passar o dinheiro para uma \"conta segura\", levantar dinheiro para um estafeta ou comprar cartões-presente. Estes são os sinais de burla da FTC (a agência de defesa do consumidor dos EUA): fingir ser alguém, um problema, pressão e uma forma estranha de pagar. A FTC diz que as organizações verdadeiras nunca lhe dizem para mudar o dinheiro de lugar para o proteger.",
            "O que fazer: desligue. Depois ligue você mesmo para o número que está atrás do seu cartão. Se era verdade, o banco vai saber."
          ],
          steps: ["Repare: um \"banco\" contacta você por causa de um problema.", "Repare: pedem um código, a palavra-passe, mudar dinheiro, dinheiro vivo ou cartões-presente.", "Desligue ou pare de responder.", "Ligue você mesmo para o número que está atrás do seu cartão."],
          words: [["Falsificação de chamada (spoofing)", "fazer um identificador de chamadas falso mostrar o nome ou o número de uma empresa verdadeira."], ["Burla da conta segura", "um truque que manda passar o dinheiro para o \"proteger\", mas ele vai direto para o burlão."]],
          slides: [
            { title: "A falsa chamada de fraude", bullets: ["\"Aqui é o departamento de fraudes do seu banco\"", "O identificador de chamadas pode ser falso", "A IA faz com que pareça profissional"] },
            { title: "O que eles pedem", bullets: ["Códigos ou palavras-passe", "Passar o dinheiro para uma \"conta segura\"", "Dinheiro vivo para um estafeta, ou cartões-presente"] },
            { title: "O que você faz", bullets: ["Desligue", "Ligue para o número do seu cartão", "Se era verdade, o banco vai saber"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam (como evitar uma burla)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Pergunte a um assistente de IA: \"Quais são os sinais de que uma chamada do departamento de fraudes do meu banco é falsa?\" Compare a resposta com esta lição e escreva no seu cartão os três sinais que acha mais importantes.",
          youCanNow: "reconhecer uma chamada ou mensagem falsa do banco e verificá-la com segurança.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer quando o identificador de chamadas mostra o nome do seu banco?", options: ["A chamada é de certeza verdadeira", "Nada de certeza; o identificador pode ser falso", "O seu banco vai fechar", "Tem de ligar de volta para o mesmo número"], answer: 1, why: "Os burlões conseguem fazer o identificador mostrar o nome do seu banco." },
            { objective: "O4", q: "Alguém do \"departamento de fraudes\" diz para passar hoje as suas poupanças para uma conta segura. O que faz?", options: ["Passa o dinheiro depressa", "Dá-lhes a sua palavra-passe para verificarem", "Desliga e liga para o número que está atrás do seu cartão", "Levanta dinheiro para o estafeta deles"], answer: 2, why: "As organizações verdadeiras nunca mandam mudar o dinheiro de lugar para o proteger; desligue e ligue você mesmo para o banco." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar aplicações de pagamento com cuidado",
          minutes: 5,
          goal: "Enviar dinheiro com uma aplicação de pagamento só a pessoas que conhece e em quem confia.",
          text: [
            "As aplicações de pagamento (como Zelle, Venmo, PayPal e Cash App) deixam enviar dinheiro a partir do telefone. São práticas para devolver dinheiro a um familiar, mas o dinheiro normalmente chega na hora e pode ser muito difícil de recuperar.",
            "Envie dinheiro só a pessoas que conhece pessoalmente. Confirme bem o nome, o número de telefone ou o e-mail antes de enviar. Nunca pague a um desconhecido, a um vendedor da internet que não conhece, ou a alguém que o contactou primeiro a dizer que é do seu banco, do governo ou de uma empresa.",
            "Cuidado com o truque do \"pagamento por engano\": um desconhecido envia-lhe dinheiro e pede para o devolver. Não devolva; contacte o seu banco ou a empresa da aplicação pela aplicação ou pelo site oficial."
          ],
          steps: ["Pague só a pessoas que conhece pessoalmente.", "Confirme bem o nome e o número antes de enviar.", "Nunca pague a quem o contactou primeiro.", "Se um desconhecido lhe pagar \"por engano\", contacte o seu banco ou a aplicação e não devolva o dinheiro."],
          words: [["Aplicação de pagamento", "uma aplicação que envia dinheiro do seu telefone para outra pessoa."], ["Transferência imediata", "dinheiro que sai na hora e é difícil de anular."]],
          slides: [
            { title: "Práticas, mas rápidas", bullets: ["Zelle, Venmo, PayPal, Cash App", "O dinheiro sai na hora", "Difícil de recuperar"] },
            { title: "Uso seguro", bullets: ["Só pessoas que conhece pessoalmente", "Confirme bem o nome e o número", "Nunca pague a quem o contactou primeiro"] },
            { title: "\"Ups, enviei-lhe por engano\"", bullets: ["Não devolva o dinheiro", "Contacte o seu banco ou a aplicação"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam (sinais de alerta nos pagamentos)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Escreva no seu cartão: \"Só uso aplicações de pagamento com pessoas que conheço pessoalmente. Nunca pago a quem me contacta primeiro.\"",
          youCanNow: "usar aplicações de pagamento com segurança e evitar os truques mais comuns.",
          quickCheck: [
            { objective: "O5", q: "Porque ter cuidado com as aplicações de pagamento?", options: ["Cobram taxas altas", "Só funcionam nos bancos", "São lentas", "O dinheiro normalmente sai na hora e é difícil de recuperar"], answer: 3, why: "O dinheiro das aplicações de pagamento sai depressa e é muito difícil de recuperar." },
            { objective: "O5", q: "Quer devolver 20 dólares ($20) à sua sobrinha pela aplicação. O que faz antes de tocar em Enviar?", options: ["Confirma bem o nome e o número de telefone dela", "Envia para o primeiro nome que aparece", "Envia a mais, por precaução", "Pede a um desconhecido para enviar"], answer: 0, why: "Confirmar o nome e o número evita que o dinheiro vá para a pessoa errada." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Se algo correr mal",
          minutes: 5,
          goal: "Dizer os passos a dar depressa se lhe roubarem dinheiro ou informações.",
          text: [
            "Aja depressa. Ligue logo para o seu banco usando o número que está atrás do seu cartão. Conte o que aconteceu. Peça para parar ou anular os pagamentos, se for possível, mude a palavra-passe e vigie a sua conta.",
            "Depois faça queixa. Denuncie a burla à Comissão Federal de Comércio (FTC) em ReportFraud.ftc.gov. Se alguém estiver a usar a sua identidade, vá a IdentityTheft.gov para ter um plano de recuperação gratuito. Se tem 60 anos ou mais, a Linha Nacional contra Fraudes a Idosos (National Elder Fraud Hotline) é gratuita: 833-FRAUD-11 (833-372-8311).",
            "Cuidado com uma segunda burla: quem liga a oferecer \"recuperar\" o seu dinheiro em troca de uma taxa costuma ser também burlão. E não há vergonha nenhuma em ser alvo de uma burla. Contar a um familiar de confiança ajuda a proteger você e os outros."
          ],
          steps: ["Ligue logo para o seu banco, para o número do seu cartão.", "Mude a sua palavra-passe.", "Faça queixa em ReportFraud.ftc.gov.", "Use IdentityTheft.gov se usaram a sua identidade.", "Com 60 anos ou mais: ligue para 833-372-8311.", "Ignore quem oferece recuperar o dinheiro em troca de uma taxa."],
          words: [["Roubo de identidade", "quando alguém usa os seus dados pessoais para fingir que é você."], ["Burla de recuperação", "um truque em que os burlões oferecem recuperar o dinheiro roubado em troca de uma taxa."]],
          slides: [
            { title: "Aja depressa", bullets: ["Ligue para o banco, para o número do seu cartão", "Peça para parar ou anular os pagamentos", "Mude a sua palavra-passe"] },
            { title: "Faça queixa", bullets: ["ReportFraud.ftc.gov", "IdentityTheft.gov", "60 anos ou mais: 833-FRAUD-11 (833-372-8311)"] },
            { title: "Cuidado com uma segunda burla", bullets: ["Taxa para \"recuperar\" dinheiro = burla", "Sem vergonha: conte a alguém de confiança"] }
          ],
          sources: [{ name: "FTC: Report fraud (denunciar uma fraude)", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: What to know about identity theft (roubo de identidade)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }],
          tryIt: "Tarefa final: inicie sessão na aplicação ou no site oficial do seu banco, ligue dois alertas, escreva no seu cartão de segurança o número do banco que está atrás do seu cartão bancário e avalie esta SMS de exemplo com os quatro sinais: \"ALERTA DO BANCO: A sua conta está bloqueada. Confirme já no link ou ela será fechada hoje.\"",
          youCanNow: "usar o banco pela internet com segurança, reconhecer contactos falsos do banco, usar aplicações de pagamento com cuidado e agir depressa se algo correr mal.",
          quickCheck: [
            { objective: "O6", q: "O que lhe dá o IdentityTheft.gov?", options: ["Um empréstimo", "Um plano de recuperação gratuito se alguém usar a sua identidade", "Uma nova conta bancária", "Um seguro"], answer: 1, why: "O IdentityTheft.gov dá um plano de recuperação gratuito." },
            { objective: "O6", q: "Acabou de perceber que enviou dinheiro a um burlão. Qual é o primeiro passo?", options: ["Esperar uma semana", "Ligar de volta para o burlão", "Ligar logo para o seu banco, para o número do seu cartão", "Pagar a uma empresa para o recuperar"], answer: 2, why: "Aja depressa: primeiro ligue para o banco, depois denuncie a burla." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Reconhecer burlas e ficar protegido",
        questions: [
          { objective: "O4", q: "O identificador de chamadas mostra o nome do seu banco. Isso prova que a chamada é verdadeira?", options: ["Só se souberem o seu nome", "Sim, sempre", "Só de manhã", "Não, o identificador pode ser falso"], answer: 3, why: "A falsificação de chamadas (spoofing) cria identificadores falsos." },
          { objective: "O4", q: "Alguém liga e diz para passar as suas poupanças para uma \"conta segura\". Isto é:", options: ["Uma burla", "Uma prática normal do banco", "Obrigatório por lei", "Um bom conselho"], answer: 0, why: "As organizações verdadeiras nunca pedem para mudar o dinheiro de lugar para o proteger." },
          { objective: "O5", q: "A quem deve enviar dinheiro com uma aplicação de pagamento?", options: ["A vendedores da internet que não conhece", "A qualquer pessoa que peça", "Só a pessoas que conhece pessoalmente", "A quem liga a dizer que é \"do governo\""], answer: 2, why: "O dinheiro das aplicações de pagamento é difícil de recuperar." },
          { objective: "O5", q: "Um desconhecido envia-lhe dinheiro \"por engano\" e pede para o devolver. Você:", options: ["Dá-lhe a sua palavra-passe", "Devolve logo", "Envia o dobro", "Contacta antes o seu banco ou a aplicação"], answer: 3, why: "É um truque comum; deixe o banco tratar do assunto." },
          { objective: "O6", q: "Alguém oferece recuperar o seu dinheiro roubado em troca de uma taxa. Isto é provavelmente:", options: ["O seu banco", "Um programa do governo", "Outra burla", "Ajuda gratuita"], answer: 2, why: "As burlas de recuperação visam pessoas que já foram enganadas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA e Segurança no Banco pela Internet",
    questions: [
      { objective: "O1", q: "O banco pela internet deixa você:", options: ["Imprimir dinheiro", "Ver e gerir as suas contas numa aplicação ou num site", "Não pagar as contas", "Não usar palavras-passe"], answer: 1, why: "É o seu banco, no telefone ou no computador." },
      { objective: "O1", q: "O lugar seguro para obter a aplicação do seu banco é:", options: ["A loja de aplicações oficial, publicada pelo seu banco", "Um link numa SMS", "Um anúncio que aparece no ecrã", "Um anexo de e-mail"], answer: 0, why: "As lojas oficiais e quem publica são de confiança." },
      { objective: "O1", q: "Onde encontra o endereço verdadeiro do site do seu banco?", options: ["No seu extrato ou no seu cartão", "Numa SMS de um desconhecido", "Num anúncio que aparece no ecrã", "Num comentário numa rede social"], answer: 0, why: "O extrato e o cartão vêm do banco." },
      { objective: "O2", q: "Uma palavra-passe forte é:", options: ["A data do seu aniversário", "Longa, como várias palavras sem ligação, e usada só para o seu banco", "\"password\"", "O nome do seu animal de estimação"], answer: 1, why: "Palavras-passe longas e só para um lugar são difíceis de adivinhar." },
      { objective: "O2", q: "Onde NÃO deve guardar a palavra-passe do banco?", options: ["Num lugar seguro em casa", "Num gestor de palavras-passe", "Numa nota simples no telefone", "Na sua memória"], answer: 2, why: "As notas simples não são seguras." },
      { objective: "O2", q: "A verificação em dois passos protege você porque:", options: ["Acaba com as palavras-passe", "Partilha a sua palavra-passe", "Desliga os alertas", "Um ladrão precisa do código além da sua palavra-passe"], answer: 3, why: "A segunda verificação trava os ladrões." },
      { objective: "O2", q: "O seu banco alguma vez liga a pedir o código que lhe enviou por SMS?", options: ["Só nos feriados", "Sim, todas as semanas", "Não", "Só para contas grandes"], answer: 2, why: "Quem pede o código é um burlão." },
      { objective: "O2", q: "Depois de usar o banco num computador da biblioteca, deve:", options: ["Terminar a sessão e não guardar a palavra-passe", "Deixar a sessão aberta", "Guardar a palavra-passe", "Escrever a palavra-passe ali"], answer: 0, why: "Assim a próxima pessoa não entra na sua conta." },
      { objective: "O3", q: "Os alertas do banco avisam sobre:", options: ["Novas aplicações", "O tempo", "Resultados desportivos", "Movimentos na sua conta, como compras grandes"], answer: 3, why: "Os alertas assinalam os movimentos da conta." },
      { objective: "O3", q: "Um alerta útil para ligar é:", options: ["Piadas diárias", "Saldo baixo", "Anúncios de promoções", "Nenhum"], answer: 1, why: "Os alertas de saldo baixo evitam problemas." },
      { objective: "O3", q: "Um alerta mostra uma compra que não fez. Liga para:", options: ["O número do alerta", "O número que está atrás do seu cartão", "O amigo de um amigo", "Ninguém"], answer: 1, why: "Use um número em que já confia." },
      { objective: "O4", q: "\"Spoofing\" (falsificação de chamada) quer dizer:", options: ["Um alerta do banco", "Um tipo de conta poupança", "Um gestor de palavras-passe", "Falsificar o identificador de chamadas"], answer: 3, why: "As chamadas falsificadas parecem vir do seu banco." },
      { objective: "O4", q: "Alguém do \"departamento de fraudes\" pede para levantar dinheiro para um estafeta. Isto é:", options: ["Uma burla", "Um processo normal do banco", "Uma regra dos impostos", "Uma medida de segurança"], answer: 0, why: "Os bancos não mandam estafetas buscar o seu dinheiro." },
      { objective: "O4", q: "O que deve fazer com uma chamada suspeita do banco?", options: ["Dar-lhes um código", "Ficar em linha", "Desligar e ligar para o número do seu cartão", "Mudar o seu dinheiro de lugar"], answer: 2, why: "Ligar de volta para um número de confiança mostra a verdade." },
      { objective: "O5", q: "O dinheiro enviado por aplicação de pagamento:", options: ["Demora um mês", "Pode sempre ser reembolsado", "É grátis de anular", "Normalmente sai na hora e é difícil de recuperar"], answer: 3, why: "Por isso só paga a pessoas que conhece." },
      { objective: "O5", q: "Antes de enviar dinheiro por uma aplicação, deve:", options: ["Não verificar nada", "Enviar depressa", "Confirmar bem o nome e o número", "Pedir ao desconhecido para confirmar"], answer: 2, why: "Um pequeno erro ao escrever pode mandar o dinheiro para a pessoa errada." },
      { objective: "O6", q: "Se lhe roubarem dinheiro, a PRIMEIRA chamada é para:", options: ["O burlão", "O seu banco, usando o número do seu cartão", "Uma empresa de recuperação", "Um número de um anúncio no ecrã"], answer: 1, why: "O seu banco pode parar ou anular os pagamentos." },
      { objective: "O6", q: "Onde denuncia uma burla à FTC?", options: ["ReportFraud.ftc.gov", "Numa publicação numa rede social", "No site do burlão", "Respondendo a uma SMS"], answer: 0, why: "É o site de denúncias da FTC." },
      { objective: "O6", q: "O IdentityTheft.gov dá-lhe:", options: ["Um plano de recuperação gratuito", "Uma nova conta bancária", "Dinheiro grátis", "Uma palavra-passe"], answer: 0, why: "Orienta a recuperação depois de um roubo de identidade." },
      { objective: "O6", q: "O número da Linha Nacional contra Fraudes a Idosos é:", options: ["Um número de uma SMS de burla", "833-372-8311", "411", "0"], answer: 1, why: "O 833-FRAUD-11 (833-372-8311) é gerido pelo Departamento de Justiça dos EUA (DOJ)." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 5, 8, 11, 13, 14, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Aplicação ou site oficial", objective: "O1", notYet: "Iniciou sessão através de um link numa mensagem ou de uma aplicação não oficial.", meets: "Iniciou sessão na aplicação oficial da loja de aplicações ou no endereço escrito a partir do extrato.", exceeds: "Sabe mostrar como confirmar que a aplicação é publicada pelo banco." },
      { name: "Início de sessão seguro", objective: "O2", notYet: "A palavra-passe é curta, repetida noutros lugares ou escrita numa nota simples no telefone.", meets: "Iniciou sessão com uma palavra-passe forte e com a verificação em dois passos ligada.", exceeds: "Usa a impressão digital ou o rosto, ou um gestor de palavras-passe, e sabe que o banco nunca pede o código." },
      { name: "Alertas ligados", objective: "O3", notYet: "Menos de dois alertas ligados.", meets: "Pelo menos dois alertas ligados, como compras grandes e saldo baixo.", exceeds: "Também ligou alertas para mudanças no acesso ou na palavra-passe." },
      { name: "Número do banco no cartão de segurança", objective: "O6", notYet: "Nenhum número, ou um número copiado de uma mensagem.", meets: "O número do banco que está atrás do cartão bancário está escrito no cartão de segurança.", exceeds: "Também escreveu ReportFraud.ftc.gov e, se tem 60 anos ou mais, a Linha contra Fraudes a Idosos." },
      { name: "SMS de exemplo avaliada", objective: "O4", notYet: "Não percebeu que a SMS de exemplo do \"banco\" era uma burla.", meets: "Avaliou bem a SMS de exemplo e disse os sinais que encontrou.", exceeds: "Disse exatamente o que fazer a seguir: não responder e ligar para o número do cartão." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que, no seguimento de 30 dias, têm pelo menos dois alertas do banco e a verificação em dois passos ligados",
      "Alunos que dizem ter reconhecido e ignorado uma chamada ou mensagem falsa do banco",
      "Alunos que começam outro curso de Seniors and Technology (Pessoas Mais Velhas e Tecnologia) em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com a aplicação ou o site do banco do próprio aluno",
      "O cartão bancário do aluno (só para o número que está atrás) e um cartão de segurança em branco",
      "Uma SMS de exemplo do \"banco\" impressa, para a tarefa final",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Nunca olhe, peça ou escreva a palavra-passe, o número de conta ou os códigos de um aluno; os alunos iniciam sessão em privado.",
      "A aplicação de cada banco é diferente; convide os alunos a pedir ajuda ao seu banco ou a um balcão para ligar os alertas.",
      "Use mensagens de exemplo inventadas para a prática, e faça um teatro de uma falsa chamada do departamento de fraudes.",
      "Os dados da linha de apoio podem mudar; verifique ReportFraud.ftc.gov e o site da Elder Fraud Hotline antes da sessão.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
