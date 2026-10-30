"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-ai-digital-confidence.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "reentry-ai-digital-confidence-pt",
  lang: "pt",
  translationOf: "reentry-ai-digital-confidence",
  category: "Re-Entry",
  name: "Introdução à IA e Confiança Digital",
  skills: "Abrir um assistente de IA gratuito, Fazer perguntas claras, Melhorar uma resposta, Verificar uma resposta, Proteger as suas informações privadas",
  outcome: "usar um assistente de IA gratuito num telefone ou num computador da biblioteca para ter ajuda numa tarefa do dia a dia: fazer uma pergunta clara, melhorar a resposta, verificá-la antes de confiar nela e não colocar nela as suas informações privadas.",
  about: [
    "A tecnologia pode ter mudado muito enquanto você esteve fora. Este curso começa do início e avança um pequeno passo de cada vez.",
    "Você vai aprender o que é um assistente de IA, como abrir um de graça, como pedir ajuda a ele, como verificar o que ele diz e como proteger as suas informações privadas.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Use um assistente de IA para escrever uma mensagem curta e educada a perguntar a uma empresa se está a contratar. Peça-a com palavras simples, peça uma mudança para a melhorar, verifique que não tem nenhuma informação privada e leia-a em voz alta para ter a certeza de que soa como você.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração). Muitos estiveram fora durante anos, enquanto os smartphones e as ferramentas de IA mudavam; alguns nunca usaram um smartphone. As idades variam muito, e a maioria procura trabalho e casa e está a reaproximar-se da família.",
    startingPoint: "Sabem fazer chamadas e enviar SMS num telefone simples. Usam pouco ou nada aplicações, navegadores de internet ou assistentes de IA. Alguns têm pouca confiança na leitura ou na tecnologia.",
    gap: "Hoje, os empregadores, os serviços de habitação e outros serviços esperam que as pessoas façam as coisas pela internet. Os alunos precisam de usar um assistente de IA gratuito com segurança para a ajuda do dia a dia (mensagens, explicar cartas, listas) sem serem enganados por respostas erradas ou burlas. Isto dá-lhes confiança e torna mais rápida a procura de trabalho e de casa.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: talvez só um telefone simples ou um computador da biblioteca com tempo limitado",
      "Tempo: lições de 4 a 5 minutos, que cabem entre consultas e o trabalho",
      "Algumas condições de liberdade condicional ou de pena suspensa limitam o uso da internet; cada aluno cumpre as suas próprias condições",
      "Risco alto de burlas e de perda de privacidade: nenhum número privado verdadeiro nas tarefas de prática"
    ],
    prerequisites: "Nenhum. Quem nunca usou um ecrã tátil pode fazer primeiro o curso \"Usar um Smartphone e um Tablet\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de cinco tarefas", action: "identificar em que tarefas do dia a dia um assistente de IA pode ajudar e quais precisam de uma pessoa ou de uma fonte oficial", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Usando um telefone ou um computador da biblioteca", action: "abrir um assistente de IA gratuito a partir da sua aplicação ou site oficial, enviar uma primeira mensagem e terminar a sessão no fim", standard: "sem ajuda" },
    { id: "O3", condition: "Com uma tarefa real da sua vida", action: "escrever um pedido que diga o que você precisa, a sua situação e como quer a resposta", standard: "para que a primeira resposta seja útil" },
    { id: "O4", condition: "Com uma resposta da IA que não está bem certa", action: "fazer pedidos de seguimento, um de cada vez, para a mudar", standard: "até ficar curta, clara e servir para o que precisa, em no máximo três tentativas" },
    { id: "O5", condition: "Com uma resposta da IA que tem um dado como um número de telefone, uma morada ou uma regra", action: "verificar esse dado num site oficial (.gov ou o site da própria organização)", standard: "antes de o usar" },
    { id: "O6", condition: "Quando escreve um pedido ou recebe uma mensagem urgente", action: "deixar de fora as informações privadas e reconhecer os sinais de alerta de uma burla", standard: "sem partilhar números privados, palavras-passe ou códigos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Primeiros passos com a IA",
      lessons: [
        {
          title: "O que é um assistente de IA, e o que não é",
          objectives: ["O1"],
          minutes: 4,
          goal: "Explicar com as suas palavras o que um assistente de IA pode e não pode fazer.",
          text: [
            "Um assistente de IA é um programa de computador com quem você pode escrever ou falar com palavras do dia a dia. Você faz uma pergunta e ele escreve uma resposta. Alguns gratuitos conhecidos são o ChatGPT, o Microsoft Copilot e o Google Gemini.",
            "Ele aprendeu com uma enorme quantidade de textos, por isso é bom a explicar coisas, escrever rascunhos, fazer listas e planos, e trocar palavras difíceis por palavras simples.",
            "Ele não é uma pessoa, um advogado, um médico nem um serviço do governo. Não conhece você e pode estar errado, mesmo quando parece seguro. Quem manda é você: você decide o que perguntar e decide em que acreditar."
          ],
          words: [["IA", "abreviatura de inteligência artificial: programas de computador que fazem tarefas que normalmente precisam de uma pessoa, como escrever ou responder a perguntas."], ["Assistente de IA", "um programa de IA com quem você conversa, a escrever ou a falar."]],
          slides: [
            { title: "Um assistente de IA é...", bullets: ["Um programa de computador com quem você conversa", "Você escreve ou diz uma pergunta com palavras do dia a dia", "Ele escreve uma resposta em segundos"] },
            { title: "Ele é bom a", bullets: ["Explicar coisas com palavras simples", "Escrever rascunhos: cartas, mensagens, currículos", "Fazer listas, planos e horários"] },
            { title: "Ele NÃO é", bullets: ["Uma pessoa, advogado, médico ou serviço do governo", "Sempre certo, mesmo quando parece seguro", "Quem manda: quem manda é você"] }
          ],
          tryIt: "Escreva três coisas da sua vida em que um assistente de IA pode ajudar esta semana, por exemplo uma lista de compras, uma mensagem para um familiar ou explicar uma carta que recebeu.",
          youCanNow: "dizer o que é um assistente de IA, dar três exemplos de ajuda que ele pode dar e dizer porque continua a verificar o que ele diz.",
          quickCheck: [
            { objective: "O1", q: "Em que tarefa um assistente de IA pode ajudar?", options: ["Escrever uma lista de compras a partir das refeições que planeia", "Assinar um documento legal por você", "Pagar as suas contas a partir do seu banco", "Ir à sua consulta por você"], answer: 0, why: "Um assistente de IA pode escrever e explicar coisas; não pode assinar, pagar nem aparecer por você." },
            { objective: "O1", q: "Um assistente de IA diz-lhe a data de uma audiência no tribunal. O que é verdade?", options: ["Está sempre certa porque é um computador", "Pode estar errada, por isso confirme com o tribunal", "Só a IA pode mudar a data", "Não precisa de a anotar"], answer: 1, why: "A IA pode parecer segura e mesmo assim estar errada; datas e regras vêm do serviço oficial." }
          ]
        },
        {
          title: "Abrir um assistente de IA gratuito no telefone ou no computador da biblioteca",
          objectives: ["O2"],
          minutes: 5,
          goal: "Abrir um assistente de IA gratuito e encontrar a caixa onde se escreve.",
          text: [
            "Pode usar um assistente de IA num smartphone ou em qualquer computador com internet, como um da biblioteca pública ou de um centro de emprego.",
            "No telefone: abra a loja de aplicações (Google Play no Android, App Store no iPhone), procure o nome do assistente e instale a aplicação feita pela empresa verdadeira (OpenAI para o ChatGPT, Microsoft para o Copilot, Google para o Gemini). Instale só a partir da loja oficial.",
            "No computador: abra o navegador de internet e escreva o endereço: chatgpt.com, copilot.microsoft.com ou gemini.google.com. Alguns deixam conversar sem conta; outros pedem para iniciar sessão.",
            "Num computador partilhado ou da biblioteca, não deixe o navegador guardar a sua palavra-passe, e termine a sessão e feche o navegador quando acabar."
          ],
          steps: ["Escolha um telefone ou um computador com internet.", "Telefone: instale a aplicação oficial a partir da loja de aplicações. Computador: escreva o endereço do site no navegador.", "Procure a caixa de mensagem perto do fundo do ecrã. Muitas vezes diz \"Pergunte qualquer coisa\" ou \"Mensagem\".", "Num computador partilhado: termine a sessão e feche o navegador quando acabar."],
          words: [["Navegador de internet", "o programa que usa para visitar sites, como o Chrome, o Edge ou o Safari."], ["Loja de aplicações", "o lugar oficial no telefone para obter aplicações com segurança."]],
          slides: [
            { title: "Onde pode usar", bullets: ["O seu smartphone", "Um computador da biblioteca pública", "Um computador de um centro de emprego ou de reintegração"] },
            { title: "No telefone", bullets: ["Abra a loja de aplicações oficial", "Procure o nome do assistente", "Instale a aplicação da empresa verdadeira"] },
            { title: "No computador", bullets: ["Abra o navegador de internet", "Escreva chatgpt.com, copilot.microsoft.com ou gemini.google.com", "Encontre a caixa de mensagem em baixo"] },
            { title: "Num computador partilhado", bullets: ["Não guarde a sua palavra-passe", "Termine a sessão quando acabar", "Feche o navegador"] }
          ],
          tryIt: "Abra um assistente de IA gratuito num telefone ou computador. Encontre a caixa de mensagem e escreva: Olá, estou a aprender a usar IA. Leia o que ele responde.",
          youCanNow: "abrir um assistente de IA gratuito num telefone ou computador, encontrar onde escrever e sair de um computador partilhado com segurança.",
          quickCheck: [
            { objective: "O2", q: "Quer uma aplicação de IA no seu telefone. Onde a obtém?", options: ["Num link enviado por SMS por um desconhecido", "Em qualquer site com um botão de descarregar grátis", "Na loja de aplicações oficial, da empresa verdadeira", "Numa cópia que um amigo lhe envia por mensagem"], answer: 2, why: "A loja de aplicações oficial e o nome da empresa verdadeira mantêm as aplicações falsas fora do seu telefone." },
            { objective: "O2", q: "Acabou de usar IA num computador da biblioteca. O que faz primeiro?", options: ["Deixa aberto para a próxima pessoa", "Só desliga o ecrã", "Escreve a sua palavra-passe num papel", "Termina a sessão e fecha o navegador"], answer: 3, why: "Terminar a sessão e fechar o navegador impede a próxima pessoa de entrar nas suas conversas e contas." }
          ]
        },
        {
          title: "Fazer uma pergunta clara",
          objectives: ["O3"],
          minutes: 5,
          goal: "Escrever um pedido claro que dê uma resposta útil à primeira.",
          text: [
            "O que você escreve a um assistente de IA chama-se pedido (em inglês, \"prompt\"). Um pedido claro dá uma resposta melhor.",
            "Um bom pedido tem três partes: o que você precisa, um pouco sobre a sua situação (sem detalhes privados) e como quer a resposta. Por exemplo: \"Começo um novo trabalho num armazém na segunda-feira às 7 da manhã. Faça-me uma lista simples para a noite anterior. Use frases curtas.\"",
            "Um pedido fraco é curto demais, como \"dicas de trabalho\". O assistente tem de adivinhar o que você quer dizer, por isso a resposta é geral."
          ],
          steps: ["Diga o que precisa.", "Acrescente um pouco sobre a sua situação, sem detalhes privados.", "Diga como quer a resposta: curta, com palavras simples, em passos, numa lista ou numa tabela."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."]],
          slides: [
            { title: "O pedido é o que você escreve", bullets: ["Pedido claro = resposta melhor", "Pedido curto e vago = resposta geral"] },
            { title: "Três partes de um bom pedido", bullets: ["1. O que você precisa", "2. Um pouco sobre a sua situação", "3. Como quer a resposta"] },
            { title: "Fraco e claro", bullets: ["Fraco: \"dicas de trabalho\"", "Claro: \"Começo num armazém na segunda-feira às 7 da manhã.", "Faça-me uma lista para a noite anterior.", "Use frases curtas.\""] }
          ],
          tryIt: "Escolha uma tarefa real da sua lista da Lição 1. Escreva um pedido com as três partes, envie-o e leia a resposta.",
          youCanNow: "escrever um pedido com o que precisa, a sua situação e como quer a resposta.",
          quickCheck: [
            { objective: "O3", q: "Que pedido tem as três partes: o que precisa, a sua situação e como quer a resposta?", options: ["\"Ajude-me.\"", "\"Tenho uma entrevista para um trabalho num armazém na terça-feira. Dê-me 5 perguntas comuns numa lista curta.\"", "\"Escreva uma lista.\"", "\"Entrevista.\""], answer: 1, why: "Diz o que precisa (perguntas), a sua situação (entrevista no armazém na terça-feira) e o formato (uma lista curta de 5)." },
            { objective: "O3", q: "O seu pedido diz o que precisa e a sua situação. O que falta?", options: ["Como quer a resposta, por exemplo passos curtos ou uma lista", "O seu nome completo e a data de nascimento", "Uma nota de agradecimento", "Nada; está completo"], answer: 0, why: "Dizer como quer a resposta (curta, simples, em passos, numa lista) é a terceira parte de um pedido claro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Primeiros passos com a IA",
        questions: [
          { objective: "O1", q: "O que é um assistente de IA?", options: ["Uma pessoa que responde às suas mensagens", "Um programa de computador com quem conversa com palavras do dia a dia", "Um site do governo", "Um tipo de telefone"], answer: 1, why: "Um assistente de IA é um programa de computador a quem você escreve ou fala; ele escreve respostas." },
          { objective: "O1", q: "Um assistente de IA parece muito seguro de uma resposta. O que deve fazer?", options: ["Confiar, porque parece seguro", "Nunca mais usar IA", "Pedir a um amigo para confiar por você", "Verificar na mesma, porque pode estar errado"], answer: 3, why: "A IA pode estar errada mesmo quando parece segura. Quem manda é você, e você verifica." },
          { objective: "O2", q: "Onde deve instalar uma aplicação de IA no telefone?", options: ["Na loja de aplicações oficial, feita pela empresa verdadeira", "Em qualquer site", "A partir de um link numa mensagem SMS", "A partir de um anúncio que aparece no ecrã"], answer: 0, why: "A loja de aplicações oficial e a aplicação da empresa verdadeira são a escolha segura." },
          { objective: "O2", q: "Usou IA num computador da biblioteca. O que faz quando acaba?", options: ["Deixa aberto para a próxima pessoa", "Guarda a palavra-passe para ser mais rápido da próxima vez", "Termina a sessão e fecha o navegador", "Desliga a internet da biblioteca"], answer: 2, why: "Terminar a sessão e fechar o navegador impede a próxima pessoa de entrar na sua conta." },
          { objective: "O3", q: "Qual é o pedido mais claro?", options: ["\"ajuda\"", "\"dicas de trabalho\"", "\"Começo um trabalho num armazém na segunda-feira às 7 da manhã. Faça uma lista para a noite anterior em frases curtas.\"", "\"diga-me tudo\""], answer: 2, why: "Diz o que precisa, a sua situação e como quer a resposta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a IA com confiança",
      lessons: [
        {
          title: "Melhorar uma resposta",
          objectives: ["O4"],
          minutes: 4,
          goal: "Fazer perguntas de seguimento para melhorar uma resposta.",
          text: [
            "Não tem de aceitar a primeira resposta. Um assistente de IA lembra-se do que você disse antes na mesma conversa, por isso pode pedir-lhe para mudar a resposta.",
            "Pedidos de seguimento úteis: \"Faça mais curto.\" \"Use palavras mais simples.\" \"Explique melhor o passo 2.\" \"Dê-me um exemplo.\" \"Ponha numa lista.\" \"Faça mais educado.\"",
            "Se a conversa sair do caminho, comece uma conversa nova e escreva um pedido mais claro."
          ],
          steps: ["Leia a primeira resposta.", "Decida o que quer mudar.", "Peça essa única mudança.", "Repita até a resposta servir para você."],
          words: [["Pedido de seguimento", "uma segunda pergunta que parte da resposta que recebeu."]],
          slides: [
            { title: "A primeira resposta é um rascunho", bullets: ["Pode pedir mudanças", "Ele lembra-se da mesma conversa"] },
            { title: "Pedidos de seguimento que funcionam", bullets: ["\"Faça mais curto.\"", "\"Use palavras mais simples.\"", "\"Explique melhor o passo 2.\"", "\"Dê-me um exemplo.\""] },
            { title: "Saiu do caminho?", bullets: ["Comece uma conversa nova", "Escreva um pedido mais claro"] }
          ],
          tryIt: "Pegue na resposta da Lição 3. Peça duas mudanças, uma de cada vez, como \"faça mais curto\" e depois \"use palavras mais simples\". Compare a primeira e a última resposta.",
          youCanNow: "melhorar uma resposta da IA fazendo pedidos de seguimento claros.",
          quickCheck: [
            { objective: "O4", q: "A resposta usa palavras difíceis de ler. O que envia a seguir?", options: ["\"Errado. Tente outra vez.\"", "Nada; fecha a aplicação", "\"Faça mais comprido.\"", "\"Use palavras mais simples.\""], answer: 3, why: "Um pedido de seguimento claro, que diz a mudança que quer, corrige a resposta sem começar de novo." },
            { objective: "O4", q: "Porque pedir as mudanças uma de cada vez?", options: ["A IA só consegue ler uma palavra de cada vez", "Assim vê o que cada mudança fez", "Custa menos dinheiro", "A IA fica chateada com pedidos longos"], answer: 1, why: "Uma mudança de cada vez mostra qual pedido melhorou a resposta." }
          ]
        },
        {
          title: "Verificar a resposta antes de confiar nela",
          objectives: ["O5"],
          minutes: 5,
          goal: "Verificar uma resposta da IA numa fonte de confiança.",
          text: [
            "Os assistentes de IA às vezes inventam coisas, como um número de telefone errado, um serviço que não existe, uma regra antiga ou uma data errada. A isto às vezes chama-se \"alucinação\".",
            "Verifique sempre tudo o que tem a ver com dinheiro, a lei, a sua saúde, apoios do governo, datas, moradas e números de telefone. Verifique na fonte oficial: um site do governo (nos Estados Unidos o endereço costuma acabar em .gov), o próprio serviço, ou uma pessoa de confiança, como um gestor de caso, um conselheiro de reintegração ou um bibliotecário.",
            "Um bom hábito: pergunte ao assistente \"Onde posso verificar isto?\" e depois vá você mesmo a essa página oficial, em vez de confiar num link sem olhar."
          ],
          steps: ["Encontre os dados na resposta: números, datas, nomes, regras.", "Procure-os no site oficial (muitas vezes acaba em .gov) ou ligue para o serviço.", "Se não forem iguais, confie na fonte oficial.", "Para decisões grandes, pergunte também a uma pessoa de confiança."],
          words: [["Alucinação", "quando uma IA escreve algo que parece verdade mas é inventado."], [".gov", "o final dos endereços dos sites oficiais do governo dos Estados Unidos."]],
          slides: [
            { title: "A IA pode inventar coisas", bullets: ["Números de telefone ou moradas errados", "Regras antigas ou datas erradas", "Serviços que não existem"] },
            { title: "Verifique sempre", bullets: ["Dinheiro e apoios", "Lei e regras", "Saúde", "Datas, moradas, números de telefone"] },
            { title: "Como verificar", bullets: ["Site oficial, muitas vezes acaba em .gov", "Ligue para o serviço", "Pergunte a um gestor de caso ou bibliotecário"] }
          ],
          tryIt: "Peça a um assistente de IA o número de telefone ou o site de um serviço real perto de você (por exemplo o serviço de viação do seu estado). Depois encontre você mesmo o site oficial desse serviço e veja se a resposta é igual.",
          youCanNow: "reconhecer os dados que precisam de ser verificados e verificá-los numa fonte oficial.",
          quickCheck: [
            { objective: "O5", q: "A IA dá-lhe um número de telefone do serviço de viação. O que faz?", options: ["Procura o número no site oficial do serviço e compara", "Liga logo", "Partilha-o na internet", "Pergunta à IA se tem a certeza"], answer: 0, why: "Só o site oficial pode confirmar o número; a IA pode inventar números que parecem verdadeiros." },
            { objective: "O5", q: "Que endereço é mais provável ser um site oficial do governo dos EUA?", options: ["dmv-help-now.com", "freegovforms.net", "dmv.ca.gov", "govservices.info"], answer: 2, why: "Os sites oficiais do governo dos EUA costumam acabar em .gov." }
          ]
        },
        {
          title: "Proteger as suas informações privadas",
          objectives: ["O6"],
          minutes: 5,
          goal: "Usar a IA sem partilhar informações privadas e reconhecer burlas feitas com IA.",
          text: [
            "Não escreva informações privadas num assistente de IA: o seu número de Segurança Social (Social Security), números de identificação, números de processo ou de recluso, palavras-passe, números de banco ou de cartão, ou a sua morada completa. Pode ter a ajuda de que precisa sem eles. Escreva \"[o meu número]\" no lugar.",
            "Os burlões também usam IA. Conseguem escrever mensagens que parecem verdadeiras e até copiar a voz de um familiar numa chamada. Tenha cuidado com qualquer mensagem que o apressa, que pede dinheiro ou cartões-presente, ou que pede um código enviado para o seu telefone.",
            "Se alguma coisa parecer errada, pare. Desligue e ligue de volta para a pessoa ou o serviço usando um número que já sabe que é verdadeiro."
          ],
          steps: ["Antes de enviar um pedido, leia-o para encontrar informações privadas e tire-as.", "Use um marcador como \"[o meu número]\".", "Trate mensagens com pressa, pedidos de dinheiro e pedidos de códigos como sinais de alerta.", "Ligue de volta usando um número que sabe que é verdadeiro."],
          words: [["Informações privadas", "dados que podem deixar alguém fingir ser você ou ficar com o seu dinheiro."], ["Burla", "um truque para roubar dinheiro ou informações."]],
          slides: [
            { title: "Nunca escreva na IA", bullets: ["Número da Segurança Social ou de identificação", "Números de processo ou de recluso", "Palavras-passe, números de banco ou de cartão"] },
            { title: "Use um marcador", bullets: ["Escreva \"[o meu número]\" no lugar", "Mesmo assim tem a ajuda de que precisa"] },
            { title: "Sinais de alerta de burla", bullets: ["Apressam você", "Pedem dinheiro ou cartões-presente", "Pedem um código enviado para o seu telefone"] },
            { title: "Na dúvida", bullets: ["Pare", "Desligue", "Ligue de volta para um número que sabe que é verdadeiro"] }
          ],
          tryIt: "Tarefa final: use um assistente de IA para escrever uma mensagem curta e educada a perguntar a uma empresa se está a contratar. Peça uma mudança para a melhorar, verifique que não tem informações privadas e leia-a em voz alta.",
          youCanNow: "usar um assistente de IA numa tarefa real protegendo as suas informações privadas, e reconhecer os sinais de uma burla.",
          quickCheck: [
            { objective: "O6", q: "Um formulário de emprego pede o seu número da Segurança Social e quer ajuda da IA com ele. O que escreve?", options: ["O seu número verdadeiro para a IA o verificar", "O seu número com um algarismo trocado", "O número do seu cartão do banco", "Um marcador como [o meu número]"], answer: 3, why: "Um marcador deixa a IA ajudar com o texto enquanto o seu número verdadeiro fica privado." },
            { objective: "O6", q: "Uma SMS diz que os seus apoios acabam hoje se não enviar o código que acabou de receber. O que é isto?", options: ["Uma burla; nunca partilhe o código", "Uma mensagem normal do seu serviço", "Um teste que tem de passar", "Um aviso para atualizar o telefone"], answer: 0, why: "Apressar você e pedir um código são sinais de alerta de burla; os serviços verdadeiros não pedem esses códigos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a IA com confiança",
        questions: [
          { objective: "O4", q: "A primeira resposta é longa demais. Qual é o melhor passo a seguir?", options: ["Pedir: \"Faça mais curto\"", "Desistir", "Copiar mesmo assim", "Desligar o telefone"], answer: 0, why: "Um pedido de seguimento pede ao assistente para mudar a resposta." },
          { objective: "O5", q: "Qual destes deve SEMPRE verificar numa fonte oficial?", options: ["Uma piada", "Uma lista de compras", "Um poema", "O número de telefone de um serviço do governo"], answer: 3, why: "Números de telefone, datas, dinheiro, lei e apoios podem estar errados e têm de ser verificados." },
          { objective: "O5", q: "O que quer dizer \"alucinação\" quando se fala de IA?", options: ["A IA está cansada", "A IA escreveu algo que parece verdade mas é inventado", "O ecrã está partido", "Um tipo de aplicação"], answer: 1, why: "A IA pode inventar dados que parecem verdadeiros." },
          { objective: "O6", q: "O que deve escrever num pedido no lugar do seu número da Segurança Social?", options: ["O número verdadeiro", "Um marcador como \"[o meu número]\"", "Metade do número", "O seu número do banco"], answer: 1, why: "Um marcador deixa você ter ajuda sem partilhar informações privadas." },
          { objective: "O6", q: "Recebe uma chamada com a voz de um familiar a pedir cartões-presente já. O que faz?", options: ["Compra os cartões-presente depressa", "Dá-lhes o código do seu telefone", "Envia o seu número do banco", "Desliga e liga de volta para um número que sabe que é verdadeiro"], answer: 3, why: "Os burlões conseguem copiar vozes. A pressa e os cartões-presente são sinais de alerta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à IA e Confiança Digital",
    questions: [
      { objective: "O1", q: "A melhor descrição de um assistente de IA é:", options: ["Um programa de computador com quem conversa", "Um funcionário do governo", "Uma empresa de telefones", "Um site que só vende coisas"], answer: 0, why: "É um programa a quem você escreve ou fala." },
      { objective: "O1", q: "Em que tarefa um assistente de IA é bom?", options: ["Tomar decisões legais por você", "Assinar documentos por você", "Explicar uma carta difícil com palavras simples", "Conhecer a sua história privada"], answer: 2, why: "Explicar com palavras simples é um dos seus pontos fortes." },
      { objective: "O1", q: "Quem manda quando usa um assistente de IA?", options: ["A IA", "A loja de aplicações", "Você", "Ninguém"], answer: 2, why: "Você decide o que perguntar e em que acreditar." },
      { objective: "O2", q: "Qual é um assistente de IA gratuito conhecido?", options: ["Microsoft Copilot", "Uma calculadora", "Uma mensagem SMS", "Uma impressora"], answer: 0, why: "O Copilot, o ChatGPT e o Gemini são assistentes gratuitos conhecidos." },
      { objective: "O2", q: "No telefone, o lugar seguro para obter uma aplicação de IA é:", options: ["Um link numa SMS de um desconhecido", "Qualquer site", "Um anúncio que aparece no ecrã", "A loja de aplicações oficial"], answer: 3, why: "Instale só a partir da loja de aplicações oficial." },
      { objective: "O2", q: "Que endereço abre um assistente de IA no computador?", options: ["myjob.gift", "copilot.microsoft.com", "freemoney.win", "nenhum destes"], answer: 1, why: "copilot.microsoft.com é o endereço oficial da Microsoft para o Copilot." },
      { objective: "O2", q: "Onde costuma escrever a sua pergunta?", options: ["Na barra de endereço do telefone", "Na caixa de mensagem perto do fundo do ecrã", "No ícone da bateria", "Na câmara"], answer: 1, why: "A caixa de mensagem muitas vezes diz \"Pergunte qualquer coisa\" ou \"Mensagem\"." },
      { objective: "O2", q: "Depois de usar um computador da biblioteca, deve:", options: ["Guardar a sua palavra-passe", "Escrever a sua palavra-passe num papel", "Deixar a sua conta aberta", "Terminar a sessão e fechar o navegador"], answer: 3, why: "Isto protege a sua conta da próxima pessoa." },
      { objective: "O3", q: "O que é um pedido (prompt)?", options: ["O que você escreve ou diz a um assistente de IA", "Um alarme de lembrete", "Um tipo de carregador de telefone", "O final de um endereço de site"], answer: 0, why: "O pedido é aquilo que você pede à IA." },
      { objective: "O3", q: "Um bom pedido inclui:", options: ["Só uma palavra", "O seu número da Segurança Social", "O que precisa, a sua situação e como quer a resposta", "A sua palavra-passe"], answer: 2, why: "Essas três partes dão uma resposta útil." },
      { objective: "O3", q: "Que pedido deve dar a resposta mais útil?", options: ["\"currículo\"", "\"ajude-me\"", "\"Trabalhei 3 anos numa cozinha. Ajude-me a fazer a lista das minhas habilidades para um trabalho de cozinheiro em tópicos curtos.\"", "\"coisas\""], answer: 2, why: "Dá a necessidade, a situação e o formato." },
      { objective: "O4", q: "A primeira resposta da IA não está bem certa. Você pode:", options: ["Fazer um pedido de seguimento para a mudar", "Só aceitá-la", "Pagar para a corrigir", "Reiniciar o telefone"], answer: 0, why: "Pedidos de seguimento como \"use palavras mais simples\" melhoram a resposta." },
      { objective: "O4", q: "Qual é um bom pedido de seguimento?", options: ["\"Envie dinheiro.\"", "\"Aqui está o meu número do banco.\"", "\"Apague o meu telefone.\"", "\"Explique melhor o passo 2.\""], answer: 3, why: "Pede uma mudança clara na resposta." },
      { objective: "O4", q: "Se uma conversa sair do caminho, uma boa ideia é:", options: ["Escrever a sua palavra-passe", "Começar uma conversa nova com um pedido mais claro", "Repetir sempre as mesmas palavras", "Nunca mais usar IA"], answer: 1, why: "Uma conversa nova com um pedido mais claro costuma funcionar melhor." },
      { objective: "O5", q: "Quando a IA dá o número de telefone de um serviço, você deve:", options: ["Ligar sem verificar", "Verificá-lo no site oficial do serviço", "Publicá-lo na internet", "Dar-lhe o seu número de identificação"], answer: 1, why: "A IA pode dar números errados; verifique na fonte oficial." },
      { objective: "O5", q: "Os sites oficiais do governo dos Estados Unidos costumam acabar em:", options: [".xyz", ".win", ".gift", ".gov"], answer: 3, why: ".gov é usado pelos sites do governo dos EUA." },
      { objective: "O6", q: "O que NUNCA deve escrever num assistente de IA?", options: ["O número do seu cartão do banco", "\"Faça mais curto\"", "\"Dê-me um exemplo\"", "\"Use palavras mais simples\""], answer: 0, why: "Números de banco e de cartão são informações privadas." },
      { objective: "O6", q: "Uma mensagem apressa você a pagar com cartões-presente. Isto é:", options: ["Uma conta normal", "Uma oferta de emprego", "Um sinal de alerta de burla", "Uma regra do governo"], answer: 2, why: "A pressa e os cartões-presente são sinais comuns de burla." },
      { objective: "O6", q: "Alguém pede o código que acabou de chegar por SMS ao seu telefone. Você deve:", options: ["Lê-lo para essa pessoa", "Publicá-lo na internet", "Nunca o partilhar", "Enviá-lo por SMS a amigos"], answer: 2, why: "Esse código protege a sua conta. Os serviços verdadeiros não o pedem." },
      { objective: "O6", q: "Se alguma coisa parecer errada numa chamada, o passo mais seguro é:", options: ["Desligar e ligar de volta para um número que sabe que é verdadeiro", "Continuar a falar", "Dar-lhes a sua morada", "Enviar um pequeno pagamento"], answer: 0, why: "Ligar de volta para um número conhecido trava a maioria das burlas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pedido claro", objective: "O3", notYet: "O pedido é vago, por exemplo \"escreva uma mensagem\".", meets: "O pedido diz o que precisa, a sua situação e como quer a resposta.", exceeds: "Também diz o nome da empresa e o trabalho, e a primeira resposta está quase pronta." },
      { name: "Melhorou a resposta", objective: "O4", notYet: "Usou a primeira resposta como estava.", meets: "Pediu uma mudança e a mensagem ficou melhor.", exceeds: "Pediu duas ou mais mudanças, uma de cada vez, e sabe dizer o que cada uma corrigiu." },
      { name: "Informações privadas de fora", objective: "O6", notYet: "O pedido ou a mensagem tem um número privado, uma palavra-passe, uma morada ou a data de nascimento.", meets: "Nenhuma informação privada no pedido nem na mensagem.", exceeds: "Usou um marcador como [o meu número de telefone] e só o preencheu na mensagem que ele próprio envia." },
      { name: "Dados verificados", objective: "O5", notYet: "O nome, a morada ou o horário da empresa foram copiados da IA sem verificar.", meets: "Todos os dados sobre a empresa foram verificados no site da própria empresa ou numa lista oficial.", exceeds: "Sabe dizer onde verificou." },
      { name: "Soa como você", objective: "O1", notYet: "A mensagem usa palavras que o aluno não diria ou não entende.", meets: "Lida em voz alta, é educada, curta e com as palavras do próprio aluno.", exceeds: "O aluno mudou ele próprio algumas palavras para soar mais como ele." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que começam outro curso da Koach Learn em 30 dias",
      "Alunos que dizem ter usado IA para uma candidatura de emprego, uma mensagem ou uma carta em 30 dias (inquérito de seguimento)",
      "Os parceiros de reintegração dizem receber menos pedidos de ajuda com tarefas básicas na internet"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou do programa",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Papel e caneta para as notas do \"Experimente agora\"",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Numa sala de informática ou num centro de reintegração: façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Antes de os alunos saírem, confirme que cada um termina a sessão nos computadores partilhados.",
      "Nunca peça aos alunos para escrever dados privados verdadeiros na prática; use marcadores como [o meu número].",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Lembre aos alunos em liberdade condicional ou com pena suspensa que cumpram as condições sobre o uso da internet."
    ]
  }
};
