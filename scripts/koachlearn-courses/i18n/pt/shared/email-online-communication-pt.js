"use strict";

// Koach Learn course (Portuguese translation of shared/email-online-communication.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "email-online-communication-pt",
  lang: "pt",
  translationOf: "email-online-communication",
  category: "Seniors and Technology",
  name: "E-mail e Comunicação pela Internet",
  skills: "Criar uma conta de e-mail gratuita, Escrever um e-mail claro, Responder e anexar um ficheiro, Reconhecer e-mails de phishing, Entrar numa videochamada",
  outcome: "criar uma conta de e-mail gratuita, escrever e enviar um e-mail claro e educado com um ficheiro anexado, responder a mensagens, reconhecer um e-mail falso (phishing) e entrar numa videochamada a partir de um link.",
  about: [
    "Hoje, os consultórios médicos, os empregadores, os senhorios, as escolas e as famílias contactam você por e-mail e por videochamada. Este curso mostra como os usar, um pequeno passo de cada vez.",
    "Você vai criar uma conta de e-mail gratuita, escrever uma mensagem clara, responder, anexar um ficheiro, proteger a sua caixa de entrada contra burlas e entrar numa videochamada.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Envie um e-mail claro e educado a um amigo, a um familiar ou a você mesmo, com assunto, saudação, duas ou três frases curtas, despedida e um ficheiro anexado (uma foto ou um documento). Depois responda a um e-mail que recebeu e escreva dois sinais de alerta que procuraria antes de carregar em qualquer link.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que precisam de e-mail e de videochamadas no dia a dia: idosos que mantêm contacto com a família, pessoas à procura de emprego, doentes, pais que tratam de assuntos com a escola, voluntários e pessoas que voltam para a comunidade.",
    startingPoint: "Sabem usar um telefone ou um computador para abrir aplicações e escrever mensagens curtas. Muitos não têm conta de e-mail ou têm uma que quase não usam, e poucos sabem bem como anexar um ficheiro, escrever um assunto claro, reconhecer um e-mail de phishing ou entrar numa videochamada a partir de um link.",
    gap: "Os empregadores, os médicos, as escolas e os serviços do governo enviam e-mails e esperam receber e-mails, e muitas consultas e entrevistas acontecem por videochamada. Sem estas habilidades, as pessoas perdem mensagens, enviam e-mails pouco claros ou pouco profissionais, caem em e-mails de burla ou não conseguem entrar numa consulta.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; palavras como assunto, anexo e phishing são explicadas",
      "Aparelhos: um telefone, tablet ou computador com internet",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Custo: e-mail gratuito (Gmail, Outlook.com ou Yahoo Mail) e aplicações de videochamada gratuitas",
      "Privacidade: os alunos nunca colocam números da Segurança Social, números de banco ou palavras-passe num e-mail ou num chat"
    ],
    prerequisites: "Nenhum. O curso \"Noções Básicas de Internet\" ajuda quem nunca usou um navegador de internet."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o site ou a aplicação oficial de um serviço de e-mail gratuito", action: "criar uma conta de e-mail com um endereço profissional e uma palavra-passe forte e iniciar sessão nela", standard: "com um número de telefone ou e-mail de recuperação adicionado para poder voltar a entrar" },
    { id: "O2", condition: "Com um motivo para escrever", action: "escrever e enviar um e-mail com assunto, saudação, mensagem curta e despedida", standard: "com todas as partes presentes e o endereço \"Para\" verificado antes de enviar" },
    { id: "O3", condition: "Com e-mails que recebeu", action: "responder, reencaminhar e anexar um ficheiro, escolhendo bem entre Responder e Responder a todos", standard: "com o ficheiro anexado e a resposta enviada só às pessoas que precisam dela" },
    { id: "O4", condition: "Com um e-mail suspeito", action: "identificar os sinais de alerta de phishing e escolher um passo seguro a seguir", standard: "indicando pelo menos dois sinais e sem nunca carregar no link nem pagar" },
    { id: "O5", condition: "Quando escreve a qualquer pessoa pela internet", action: "escrever uma mensagem educada e clara sem informações privadas", standard: "com saudação, sem TUDO EM MAIÚSCULAS e sem números privados nem palavras-passe" },
    { id: "O6", condition: "Com o link de uma videochamada", action: "entrar na chamada e usar os botões de silenciar e da câmara", standard: "entrando a horas e silenciando o microfone quando não está a falar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O básico do e-mail",
      lessons: [
        {
          objectives: ["O1"],
          title: "Criar uma conta de e-mail gratuita",
          minutes: 5,
          goal: "Criar uma conta de e-mail gratuita e iniciar sessão nela.",
          text: [
            "Um endereço de e-mail é como a morada de casa, mas para mensagens. É assim: nome@gmail.com, ou seja, o nome que escolheu, o sinal @ e depois a empresa que gere o e-mail.",
            "Alguns serviços de e-mail gratuitos são o Gmail da Google, o Outlook.com da Microsoft e o Yahoo Mail. Para se inscrever, vá ao site da própria empresa ou instale a aplicação oficial e escolha \"Criar conta\".",
            "Escolha um endereço que pareça profissional, como o seu nome e apelido, porque os empregadores e os médicos vão vê-lo. Escolha uma palavra-passe forte que não use em mais nenhum lugar, e adicione um número de telefone ou um e-mail de recuperação para poder voltar a entrar se a esquecer."
          ],
          steps: ["Vá a gmail.com, outlook.com ou à aplicação de e-mail oficial.", "Escolha \"Criar conta\".", "Escolha um endereço profissional, como nome.apelido.", "Crie uma palavra-passe longa que não use em mais nenhum lugar.", "Adicione um número de telefone ou um e-mail de recuperação da conta.", "Escreva o seu novo endereço num papel e guarde a palavra-passe num lugar seguro."],
          words: [["Endereço de e-mail", "o seu endereço para receber mensagens, como nome@gmail.com."], ["Palavra-passe", "uma palavra ou frase secreta que deixa só você entrar na sua conta."], ["Recuperação da conta", "a forma de voltar a entrar na conta se esquecer a palavra-passe, normalmente com um código enviado para o seu telefone."]],
          slides: [
            { title: "Um endereço de e-mail", bullets: ["É assim: nome@gmail.com", "O seu nome, o sinal @ e depois a empresa de e-mail"] },
            { title: "Serviços de e-mail gratuitos", bullets: ["Gmail da Google", "Outlook.com da Microsoft", "Yahoo Mail"] },
            { title: "Inscrever-se bem", bullets: ["Escolha um endereço profissional: o seu nome e apelido", "Use uma palavra-passe longa que não usa em mais nenhum lugar", "Adicione um número de telefone para recuperar a conta"] }
          ],
          tryIt: "Crie uma conta de e-mail gratuita (ou abra a que já tem). Termine a sessão e depois inicie sessão outra vez, para saber que consegue entrar sozinho.",
          youCanNow: "criar uma conta de e-mail gratuita com um endereço profissional e iniciar sessão nela.",
          quickCheck: [
            { objective: "O1", q: "Para que serve o sinal @ num endereço de e-mail?", options: ["Separa o nome que escolheu da empresa que gere o e-mail", "Torna o endereço privado", "Quer dizer que o e-mail é urgente", "Mostra a palavra-passe"], answer: 0, why: "Um endereço é o nome que escolheu, o sinal @ e depois a empresa, como nome@gmail.com." },
            { objective: "O1", q: "Está a criar uma conta de e-mail para se candidatar a empregos. Que endereço escolhe?", options: ["reidafesta99@...", "gatofixe2000@...", "xxamorxx@...", "O seu nome e apelido, como james.carter@..."], answer: 3, why: "Os empregadores vão ver o seu endereço, por isso um endereço com o seu nome parece profissional." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever um e-mail claro",
          minutes: 5,
          goal: "Escrever e enviar um e-mail com assunto, saudação, mensagem curta e despedida.",
          text: [
            "Um bom e-mail tem cinco partes: para quem vai, o assunto, a saudação, uma mensagem curta e uma despedida com o seu nome.",
            "O assunto diz ao leitor de que trata o e-mail antes de o abrir, por exemplo \"Pergunta sobre a minha consulta de terça-feira\" ou \"Candidatura ao emprego de caixa\".",
            "Mantenha a mensagem curta: diga porque escreve, o que precisa e até quando. Leia-a uma vez antes de carregar em Enviar e verifique bem o endereço \"Para\", porque depois de enviado não pode desfazer o envio."
          ],
          steps: ["Carregue em Escrever ou Nova mensagem.", "Escreva o endereço da pessoa na caixa \"Para\".", "Escreva um assunto curto.", "Comece com uma saudação, como \"Olá, Sra. Lee,\".", "Escreva duas ou três frases curtas: porquê, o que precisa e até quando.", "Termine com \"Obrigado,\" ou \"Obrigada,\" e o seu nome.", "Leia uma vez, verifique o endereço e depois carregue em Enviar."],
          words: [["Assunto", "algumas palavras que dizem ao leitor de que trata o e-mail."], ["Escrever (Compose)", "o botão que começa um e-mail novo."], ["Despedida", "as palavras do fim, como \"Obrigado,\" seguidas do seu nome."]],
          slides: [
            { title: "As cinco partes de um e-mail", bullets: ["Para: o endereço, e depois o assunto", "Uma saudação", "Uma mensagem curta", "Uma despedida com o seu nome"] },
            { title: "Um bom assunto", bullets: ["\"Pergunta sobre a minha consulta de terça-feira\"", "\"Candidatura ao emprego de caixa\""] },
            { title: "Antes de carregar em Enviar", bullets: ["Leia uma vez", "Verifique o endereço \"Para\"", "Depois de enviado, não pode desfazer"] }
          ],
          tryIt: "Escreva e envie um e-mail a você mesmo ou a um familiar com as cinco partes. Assunto: \"E-mail de prática\". Abra-o do outro lado e veja como fica.",
          youCanNow: "escrever um e-mail claro com assunto, saudação, mensagem curta e despedida, e enviá-lo.",
          quickCheck: [
            { objective: "O2", q: "O que deve dizer a mensagem curta de um e-mail?", options: ["A sua palavra-passe", "Todos os pormenores da sua semana", "Porque escreve, o que precisa e até quando", "Só a palavra \"Olá\""], answer: 2, why: "Uma mensagem curta diz porque escreve, o que precisa e até quando." },
            { objective: "O2", q: "Vai enviar um e-mail ao consultório do seu médico. O que verifica primeiro?", options: ["A cor do ecrã", "O endereço \"Para\", e lê o e-mail uma vez", "Quantos e-mails tem na caixa de entrada", "Se o assunto está TODO EM MAIÚSCULAS"], answer: 1, why: "Não pode desfazer o envio de um e-mail, por isso verifique o endereço e leia-o antes de enviar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Responder, reencaminhar e anexar um ficheiro",
          minutes: 5,
          goal: "Responder a um e-mail e enviar um com um ficheiro anexado.",
          text: [
            "Responder envia a sua resposta só à pessoa que lhe escreveu. Responder a todos envia-a a todas as pessoas da mensagem, por isso use-o só quando todos precisam da sua resposta. Reencaminhar envia o e-mail a uma pessoa nova.",
            "Um anexo é um ficheiro que envia com um e-mail, como uma foto, um currículo ou um formulário. Procure o ícone do clipe. Escolha o ficheiro no telefone ou no computador, espere até acabar de carregar e depois envie.",
            "Abra só anexos que estava à espera, de pessoas que conhece. Ficheiros de desconhecidos podem trazer programas que fazem mal ao aparelho."
          ],
          steps: ["Abra o e-mail a que quer responder.", "Carregue em Responder (não em Responder a todos, a não ser que todos precisem).", "Escreva a resposta e carregue em Enviar.", "Para anexar um ficheiro: num e-mail novo, carregue no ícone do clipe.", "Escolha a foto ou o documento e espere que carregue.", "Fale do ficheiro na mensagem e depois carregue em Enviar."],
          words: [["Responder a todos", "responde a todas as pessoas que receberam o e-mail, não só a quem o enviou."], ["Reencaminhar", "envia um e-mail que recebeu a outra pessoa."], ["Anexo", "um ficheiro enviado junto com um e-mail."]],
          slides: [
            { title: "Responder, Responder a todos, Reencaminhar", bullets: ["Responder: só a quem enviou", "Responder a todos: todas as pessoas do e-mail", "Reencaminhar: enviar a uma pessoa nova"] },
            { title: "Anexar um ficheiro", bullets: ["Carregue no ícone do clipe", "Escolha a foto ou o documento", "Espere que acabe de carregar e depois envie"] },
            { title: "Tenha cuidado", bullets: ["Abra só anexos que estava à espera", "Ficheiros de desconhecidos podem trazer programas que fazem mal"] }
          ],
          tryIt: "Responda ao e-mail de prática da Lição 2. Depois escreva um e-mail novo a você mesmo, anexe uma foto ou um documento e envie-o. Abra-o e confirme que o ficheiro chegou.",
          youCanNow: "responder a um e-mail, reencaminhar um e enviar um ficheiro como anexo.",
          quickCheck: [
            { objective: "O3", q: "O que é um anexo?", options: ["O assunto", "Um ficheiro que envia com um e-mail, como uma foto ou um formulário", "O endereço de quem envia", "Um botão que apaga e-mails"], answer: 1, why: "Um anexo é um ficheiro enviado junto com um e-mail." },
            { objective: "O3", q: "Anexou o seu currículo, mas ainda está a carregar. O que faz?", options: ["Espera até acabar de carregar e depois envia", "Carrega logo em Enviar", "Fecha a aplicação", "Reencaminha o e-mail a toda a gente"], answer: 0, why: "Espere até o ficheiro acabar de carregar, senão pode não seguir com o e-mail." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O básico do e-mail",
        questions: [
          { objective: "O1", q: "Que endereço de e-mail é melhor para candidaturas a empregos?", options: ["coolcat99@gmail.com", "maria.lopez@gmail.com", "partytime@yahoo.com", "xx123xx@outlook.com"], answer: 1, why: "Um endereço com o seu nome e apelido parece profissional." },
          { objective: "O1", q: "Porque adicionar um número de telefone à sua conta de e-mail?", options: ["Para a empresa lhe ligar todos os dias", "Para poder voltar a entrar se esquecer a palavra-passe", "Torna o e-mail mais rápido", "É preciso para enviar fotos"], answer: 1, why: "Um número de telefone de recuperação permite receber um código para voltar a entrar." },
          { objective: "O2", q: "Para que serve o assunto?", options: ["Diz ao leitor de que trata o e-mail", "Guarda o ficheiro anexado", "Mostra a sua palavra-passe", "Apaga e-mails antigos"], answer: 0, why: "Diz ao leitor o tema antes de abrir o e-mail." },
          { objective: "O3", q: "Recebeu um e-mail enviado a 30 pessoas. Só quem o enviou precisa da sua resposta. Em que botão carrega?", options: ["Reencaminhar", "Responder a todos", "Apagar", "Responder"], answer: 3, why: "Responder envia a sua resposta só à pessoa que escreveu." },
          { objective: "O3", q: "Como envia uma foto com um e-mail?", options: ["Escreve o nome da foto no assunto", "Carrega no ícone do clipe e escolhe a foto", "Cola a sua palavra-passe", "Carrega em Responder a todos"], answer: 1, why: "O ícone do clipe adiciona um anexo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Segurança e conversa pela internet",
      lessons: [
        {
          objectives: ["O4"],
          title: "Reconhecer e-mails de phishing e de burla",
          minutes: 5,
          goal: "Procurar sinais de alerta num e-mail antes de carregar em qualquer coisa.",
          text: [
            "Phishing é uma mensagem falsa que finge vir de um banco, de uma loja, de uma empresa de entregas ou de um serviço do governo, para o enganar e fazer carregar num link ou dar informações privadas.",
            "A Federal Trade Commission (FTC, o serviço do governo dos EUA que protege os consumidores) indica sinais comuns: a mensagem finge vir de uma organização que conhece, diz que há um problema ou um prémio, pressiona você a agir já e pede para pagar de uma forma fora do normal, como cartões-presente, transferências bancárias, aplicações de pagamento ou criptomoeda.",
            "Veja também o endereço verdadeiro de quem envia: \"support@amaz0n-help.win\" não é a Amazon. Na dúvida, não carregue. Vá você mesmo ao site da empresa ou ligue para um número que já sabe que é verdadeiro. Nos Estados Unidos pode denunciar burlas em reportfraud.ftc.gov."
          ],
          steps: ["Veja o endereço completo de quem envia, não só o nome.", "Pergunte: Finge ser alguém que conheço? Há um problema ou um prémio? Estão a apressar-me? Querem cartões-presente ou uma transferência?", "Se a resposta for sim a alguma, não carregue em links nem abra ficheiros.", "Confirme indo você mesmo ao site verdadeiro ou ligando para um número conhecido.", "Apague-o ou marque-o como spam. Nos EUA, denuncie em reportfraud.ftc.gov."],
          words: [["Phishing", "uma mensagem falsa feita para o enganar e fazer carregar num link ou dar informações privadas."], ["Spam", "e-mail de lixo que não pediu."], ["FTC", "a Federal Trade Commission, o serviço do governo dos EUA que recebe as denúncias de burlas."]],
          slides: [
            { title: "O que é phishing", bullets: ["Um e-mail falso que finge ser um banco, uma loja ou um serviço", "Quer que você carregue, pague ou partilhe dados privados"] },
            { title: "Quatro sinais de alerta (FTC)", bullets: ["Finge ser alguém que conhece", "Um problema ou um prémio", "Pressão para agir já", "Pagar com cartão-presente, transferência, aplicação ou cripto"] },
            { title: "Verifique quem envia", bullets: ["Veja o endereço completo", "\"amaz0n-help.win\" não é a Amazon"] },
            { title: "Na dúvida", bullets: ["Não carregue", "Vá ao site verdadeiro ou ligue para um número conhecido", "Denuncie em reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Como evitar uma burla", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Denunciar uma fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Abra a sua pasta de spam ou de lixo e escolha uma mensagem. Encontre nela pelo menos dois sinais de alerta. Não carregue em nenhum link. Depois apague-a.",
          youCanNow: "procurar num e-mail os quatro sinais de alerta e o endereço verdadeiro de quem envia antes de carregar.",
          quickCheck: [
            { objective: "O4", q: "O que é phishing?", options: ["Um serviço de e-mail gratuito", "Uma forma de anexar ficheiros grandes", "Uma forma educada de responder", "Uma mensagem falsa que finge vir de uma empresa ou serviço para o enganar"], answer: 3, why: "O phishing finge vir de um nome de confiança para que você carregue ou partilhe informações." },
            { objective: "O4", q: "Um e-mail diz que ganhou um prémio e tem de pagar hoje uma pequena taxa com cartões-presente. O que faz?", options: ["Compra os cartões-presente depressa", "Responde com os seus dados bancários", "Não carrega nem paga; tem sinais de burla", "Reencaminha aos amigos para eles também ganharem"], answer: 2, why: "Um prémio, a pressão para agir já e o pagamento com cartões-presente são sinais de burla indicados pela FTC." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Boas maneiras pela internet",
          minutes: 4,
          goal: "Escrever uma mensagem educada e clara que receba uma boa resposta.",
          text: [
            "Numa mensagem escrita, as pessoas não ouvem a sua voz, por isso as palavras podem parecer mais duras do que quer dizer. TUDO EM LETRAS MAIÚSCULAS parece que está a gritar.",
            "Seja educado e breve. Use uma saudação, \"por favor\" e \"obrigado\". Responda a e-mails importantes em um ou dois dias, mesmo que seja só para dizer \"Recebi e vou responder até sexta-feira\".",
            "Quando estiver chateado, espere um pouco e leia a mensagem outra vez antes de a enviar. Não coloque informações privadas, como o número da Segurança Social, números de banco ou palavras-passe, num e-mail ou numa mensagem de chat."
          ],
          steps: ["Comece com uma saudação.", "Diga o que precisa em frases curtas.", "Use letras maiúsculas normais, não TUDO EM MAIÚSCULAS.", "Diga por favor e obrigado.", "Se estiver chateado, espere e releia antes de enviar.", "Deixe de fora números privados e palavras-passe."],
          words: [["Netiqueta", "boas maneiras nas mensagens e publicações pela internet."], ["TUDO EM MAIÚSCULAS", "escrever só com letras maiúsculas, o que parece um grito."]],
          slides: [
            { title: "Palavras sem voz", bullets: ["As mensagens podem parecer mais duras do que quer dizer", "TUDO EM MAIÚSCULAS parece um grito"] },
            { title: "Educado e claro", bullets: ["Saudação, por favor e obrigado", "Frases curtas", "Responda em um ou dois dias"] },
            { title: "Antes de enviar", bullets: ["Chateado? Espere e releia", "Sem números privados nem palavras-passe"] }
          ],
          tryIt: "Escreva um e-mail curto e educado a um senhorio, uma escola, uma clínica ou um empregador (não precisa de o enviar) a fazer uma pergunta. Leia-o em voz alta: parece simpático e claro?",
          youCanNow: "escrever uma mensagem educada e clara e evitar hábitos que causam problemas pela internet.",
          quickCheck: [
            { objective: "O5", q: "Porque é que as palavras escritas podem parecer mais duras do que quer dizer?", options: ["As pessoas não ouvem a sua voz numa mensagem escrita", "O e-mail muda sempre as suas palavras", "Os telefones fazem as letras maiores", "Os e-mails curtos são mal-educados"], answer: 0, why: "Sem a sua voz, o leitor só tem as suas palavras." },
            { objective: "O5", q: "Chega um e-mail importante, mas precisa de alguns dias para responder. O que faz?", options: ["Ignora até estar pronto", "Responde TUDO EM MAIÚSCULAS", "Responde em um ou dois dias a dizer quando vai responder", "Reencaminha para outra pessoa"], answer: 2, why: "Uma resposta curta como \"Recebi e vou responder até sexta-feira\" é boa educação." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Entrar numa videochamada",
          minutes: 5,
          goal: "Entrar numa videochamada a partir de um link e usar os botões de silenciar e da câmara.",
          text: [
            "Muitos médicos, empregadores, escolas e famílias usam videochamadas. Algumas gratuitas conhecidas são o Zoom, o Google Meet, o Microsoft Teams e o FaceTime nos aparelhos da Apple. Normalmente alguém lhe envia um link por e-mail ou SMS.",
            "Toque ou carregue no link alguns minutos antes. No telefone, pode pedir para instalar a aplicação a partir da loja de aplicações oficial. Quando pedir, permita o microfone e a câmara.",
            "Aprenda dois botões: o do microfone (silenciar e ativar o som) e o da câmara (ligar e desligar). Sente-se de frente para uma luz, num lugar calmo, e silencie o microfone quando não estiver a falar."
          ],
          steps: ["Encontre o link no e-mail ou na SMS de alguém que conhece.", "Entre cinco minutos antes.", "Se pedir, instale a aplicação oficial ou abra no navegador.", "Permita o microfone e a câmara.", "Encontre os botões de silenciar e da câmara.", "Fique de frente para uma luz, num lugar calmo, e silencie quando não falar.", "Carregue em Sair ou no botão vermelho para desligar."],
          words: [["Videochamada", "uma chamada em que se veem e se ouvem num ecrã."], ["Silenciar", "desliga o seu microfone para os outros não o ouvirem."], ["Link da reunião", "um endereço de internet que o leva diretamente para uma videochamada."]],
          slides: [
            { title: "Aplicações de videochamada conhecidas", bullets: ["Zoom, Google Meet, Microsoft Teams", "FaceTime nos aparelhos da Apple", "Normalmente recebe um link por e-mail ou SMS"] },
            { title: "Entrar", bullets: ["Carregue no link alguns minutos antes", "Permita o microfone e a câmara"] },
            { title: "Dois botões que deve conhecer", bullets: ["Microfone: silenciar e ativar o som", "Câmara: ligar e desligar", "Botão vermelho ou Sair: desligar"] },
            { title: "Ser bem visto e ouvido", bullets: ["De frente para uma luz", "Lugar calmo", "Silencie quando não está a falar"] }
          ],
          tryIt: "Prática da tarefa final: peça a um amigo ou familiar que lhe envie o link de uma videochamada (ou comece você mesmo uma chamada no Google Meet ou no Zoom). Entre, silencie e ative o som, desligue e ligue a câmara e depois saia da chamada.",
          youCanNow: "entrar numa videochamada a partir de um link, usar os botões de silenciar e da câmara e sair da chamada.",
          quickCheck: [
            { objective: "O6", q: "Como entra normalmente numa videochamada?", options: ["Ligando para um número que aparece numa janela no ecrã", "Tocando ou carregando num link que alguém lhe enviou", "Enviando um e-mail para a aplicação", "Desligando a câmara"], answer: 1, why: "Normalmente alguém lhe envia um link por e-mail ou SMS, e você toca nele para entrar." },
            { objective: "O6", q: "A sua entrevista por vídeo começa às 10:00. O que faz?", options: ["Entra às 10:15", "Entra de uma sala com barulho e com a luz atrás de si", "Deixa o microfone ligado o tempo todo enquanto os outros falam", "Entra alguns minutos antes, num lugar calmo, de frente para uma luz"], answer: 3, why: "Entrar mais cedo dá tempo para instalar a aplicação e permitir o microfone e a câmara." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Segurança e conversa pela internet",
        questions: [
          { objective: "O4", q: "Um e-mail diz que a sua conta bancária está bloqueada e que tem de carregar num link na próxima hora. O que faz?", options: ["Carrega no link depressa", "Responde com o número da sua conta", "Vai você mesmo ao site verdadeiro do banco ou liga para um número conhecido", "Reencaminha a todos os seus amigos"], answer: 2, why: "A pressão e um problema são sinais de burla; confirme por um caminho em que já confia." },
          { objective: "O4", q: "Que pedido de pagamento é um sinal de alerta de burla?", options: ["Pagar uma conta no site do seu próprio banco", "Pagar com cartões-presente", "Pagar numa loja, na caixa", "Pagar a um médico na receção"], answer: 1, why: "A FTC indica os cartões-presente como um pagamento fora do normal que os burlões pedem." },
          { objective: "O5", q: "Escrever TUDO EM MAIÚSCULAS parece o quê ao leitor?", options: ["Gritar", "Ser educado", "Estar calado", "Ter piada"], answer: 0, why: "Só letras maiúsculas parece um grito." },
          { objective: "O6", q: "Numa videochamada, não está a falar e há barulho em casa. O que deve fazer?", options: ["Sair da chamada", "Aumentar o volume", "Desligar só a câmara", "Silenciar o microfone"], answer: 3, why: "Silenciar impede os outros de ouvirem o barulho de fundo." },
          { objective: "O4", q: "Onde é que as pessoas nos EUA podem denunciar uma burla?", options: ["reportfraud.ftc.gov", "No e-mail do burlão", "Num comentário numa rede social", "freehelp.win"], answer: 0, why: "A FTC recebe denúncias de burlas em reportfraud.ftc.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: E-mail e Comunicação pela Internet",
    questions: [
      { objective: "O1", q: "No endereço maria@gmail.com, o que lhe diz gmail.com?", options: ["A palavra-passe da Maria", "A empresa que gere o e-mail", "O número de telefone da Maria", "A terra natal da Maria"], answer: 1, why: "A parte depois do @ é a empresa de e-mail." },
      { objective: "O1", q: "Qual é um serviço de e-mail gratuito?", options: ["Outlook.com", "Uma impressora", "Uma SMS", "Um navegador de internet"], answer: 0, why: "O Outlook.com, o Gmail e o Yahoo Mail são serviços de e-mail gratuitos." },
      { objective: "O1", q: "Uma palavra-passe de e-mail forte é:", options: ["A sua data de aniversário", "\"password\"", "A mesma que usa em todo o lado", "Longa e não usada em mais nenhum lugar"], answer: 3, why: "Uma palavra-passe longa e única é a mais difícil de adivinhar ou roubar." },
      { objective: "O2", q: "Que botão começa um e-mail novo?", options: ["Escrever ou Nova mensagem", "Apagar", "Spam", "Arquivar"], answer: 0, why: "Escrever começa um e-mail novo." },
      { objective: "O2", q: "Qual é o melhor assunto para perguntar sobre um emprego?", options: ["\"olá\"", "Sem assunto", "\"leia isto\"", "\"Candidatura ao emprego de caixa\""], answer: 3, why: "Diz ao leitor exatamente de que trata o e-mail." },
      { objective: "O2", q: "Antes de carregar em Enviar, deve:", options: ["Acrescentar o seu número do banco", "Tirar a saudação", "Escrever tudo em maiúsculas", "Verificar o endereço \"Para\" e ler o e-mail uma vez"], answer: 3, why: "Não pode desfazer o envio de um e-mail, por isso verifique primeiro." },
      { objective: "O2", q: "Que parte vem no fim de um e-mail?", options: ["O assunto", "O endereço \"Para\"", "Uma despedida com o seu nome", "O clipe"], answer: 2, why: "Uma despedida como \"Obrigada, Ana\" fecha o e-mail." },
      { objective: "O3", q: "Reencaminhar quer dizer:", options: ["Responder só a quem enviou", "Apagar o e-mail", "Enviar o e-mail a uma pessoa nova", "Marcá-lo como spam"], answer: 2, why: "Reencaminhar envia um e-mail que recebeu a outra pessoa." },
      { objective: "O3", q: "O ícone do clipe serve para:", options: ["Anexar um ficheiro", "Mudar o tipo de letra", "Bloquear quem envia", "Imprimir o e-mail"], answer: 0, why: "O clipe adiciona um anexo." },
      { objective: "O3", q: "Um desconhecido envia-lhe por e-mail um ficheiro que não esperava. Você deve:", options: ["Abri-lo logo", "Reencaminhá-lo aos amigos", "Não o abrir", "Responder com a sua palavra-passe"], answer: 2, why: "Ficheiros inesperados de desconhecidos podem trazer programas que fazem mal." },
      { objective: "O3", q: "Responder a todos deve ser usado:", options: ["Sempre", "Só quando todas as pessoas do e-mail precisam da sua resposta", "Nunca", "Para enviar spam"], answer: 1, why: "Responder a todos chega a toda a gente, por isso use-o só quando todos precisam." },
      { objective: "O4", q: "Phishing é:", options: ["Uma mensagem falsa que tenta enganá-lo", "Um tipo de anexo", "Uma aplicação de videochamada", "Uma palavra-passe forte"], answer: 0, why: "As mensagens de phishing fingem ser verdadeiras para roubar informações ou dinheiro." },
      { objective: "O4", q: "O nome de quem envia diz \"Amazon\", mas o endereço é support@amaz0n-help.win. Isto é:", options: ["Normal", "Um link de videochamada", "O endereço principal da Amazon", "Um sinal de alerta"], answer: 3, why: "O endereço verdadeiro de quem envia não corresponde à empresa." },
      { objective: "O4", q: "Qual é um dos quatro sinais de burla indicados pela FTC?", options: ["A mensagem é curta", "Pressão para agir imediatamente", "Tem uma saudação", "É de um amigo a quem ligou"], answer: 1, why: "Os burlões apressam você para não parar e pensar." },
      { objective: "O4", q: "Não tem a certeza de que um e-mail do seu banco é verdadeiro. O passo mais seguro é:", options: ["Carregar no link para ver", "Responder e perguntar", "Ir você mesmo ao site do banco ou ligar para o número do seu cartão", "Enviar o número da sua conta"], answer: 2, why: "Use um caminho que já sabe que é verdadeiro, não o link do e-mail." },
      { objective: "O5", q: "Está chateado e escreveu um e-mail zangado. As boas maneiras dizem:", options: ["Enviá-lo todo em maiúsculas", "Esperar e reler antes de enviar", "Enviá-lo a toda a gente", "Acrescentar o seu número do banco"], answer: 1, why: "Esperar ajuda a enviar uma mensagem mais calma e mais clara." },
      { objective: "O5", q: "O que nunca deve colocar num e-mail?", options: ["\"Obrigado\"", "Uma saudação", "O seu número da Segurança Social", "Um assunto"], answer: 2, why: "Números privados num e-mail podem ser roubados." },
      { objective: "O6", q: "Qual é uma aplicação de videochamada conhecida?", options: ["Zoom", "Calculadora", "Bloco de notas", "Galeria de fotos"], answer: 0, why: "O Zoom, o Google Meet, o Teams e o FaceTime são aplicações de videochamada." },
      { objective: "O6", q: "Ao entrar numa videochamada, um bom hábito é:", options: ["Entrar 20 minutos atrasado", "Sentar-se com uma janela muito clara atrás de si", "Entrar alguns minutos antes e ficar de frente para uma luz", "Deixar a televisão alta"], answer: 2, why: "Entrar mais cedo e ficar de frente para uma luz ajuda a chamada a correr bem." },
      { objective: "O6", q: "Numa videochamada, o botão do microfone permite:", options: ["Tirar uma foto", "Enviar um ficheiro", "Desligar a internet", "Silenciar e ativar o seu som"], answer: 3, why: "O botão do microfone desliga e liga o seu som." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 4, 5, 8, 10, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "E-mail claro", objective: "O2", notYet: "Falta o assunto, a saudação, a mensagem ou a despedida.", meets: "Um assunto, uma saudação, duas ou três frases curtas e uma despedida com o seu nome.", exceeds: "O assunto diz exatamente de que trata o e-mail e a mensagem diz o que precisa e até quando." },
      { name: "Anexo", objective: "O3", notYet: "Não há ficheiro anexado, ou não acabou de carregar.", meets: "Uma foto ou um documento está anexado e chega com o e-mail.", exceeds: "O ficheiro tem um nome claro e o e-mail diz o que está anexado." },
      { name: "Resposta", objective: "O3", notYet: "Não foi enviada nenhuma resposta, ou foi usado Responder a todos quando só uma pessoa precisava.", meets: "Foi enviada uma resposta à pessoa certa.", exceeds: "A resposta é educada e responde a todas as perguntas do e-mail." },
      { name: "Educado e privado", objective: "O5", notYet: "O e-mail está TODO EM MAIÚSCULAS, parece mal-educado ou tem números privados ou palavras-passe.", meets: "O e-mail é educado, usa maiúsculas normais e não tem informações privadas.", exceeds: "Usa por favor e obrigado e lê-se bem à primeira." },
      { name: "Sinais de phishing", objective: "O4", notYet: "Menos de dois sinais de alerta, ou um sinal está errado.", meets: "Dois sinais de alerta certos a procurar antes de carregar em qualquer link.", exceeds: "Também diz o que fazer em vez de carregar no link e onde denunciar uma burla." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter enviado um e-mail verdadeiro a um empregador, médico, escola ou serviço nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que dizem ter entrado sozinhos numa videochamada ou numa consulta médica por vídeo",
      "Alunos que dizem ter reconhecido um e-mail de phishing e não ter carregado nele"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador com internet",
      "Uma conta de e-mail gratuita (Gmail, Outlook.com ou Yahoo Mail), ou tempo para criar uma",
      "Uma foto ou um documento para anexar, sem nada privado",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "A criação da conta pode pedir um número de telefone para confirmação; deixe cada aluno decidir o que partilha e dê mais tempo na primeira sessão.",
      "Forme pares para os alunos enviarem e-mails uns aos outros na prática de responder e anexar.",
      "Use exemplos de phishing impressos ou em capturas de ecrã; nunca abra na aula um e-mail ou link suspeito verdadeiro.",
      "Faça com o grupo uma videochamada curta de prática para todos experimentarem os botões de silenciar e da câmara.",
      "Lembre aos alunos que nunca devem partilhar a palavra-passe do e-mail com ninguém, nem com o professor."
    ]
  }
};
