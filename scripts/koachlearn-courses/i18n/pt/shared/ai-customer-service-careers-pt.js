"use strict";

// Koach Learn course (Portuguese translation of shared/ai-customer-service-careers.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The English acronyms HEAT and STAR are kept (they are used in job interviews) and each letter is explained in Portuguese.

module.exports = {
  id: "ai-customer-service-careers-pt",
  lang: "pt",
  translationOf: "ai-customer-service-careers",
  category: "Re-Entry",
  name: "IA para Carreiras no Atendimento ao Cliente",
  skills: "Atender um contacto de cliente do início ao fim, Acalmar clientes irritados, Usar respostas sugeridas pela IA e bases de conhecimento, Escrever notas de ticket, Proteger os dados dos clientes, Fazer entrevistas para empregos de atendimento ao cliente",
  outcome: "atender uma chamada ou um chat de um cliente desde a saudação até ao fim, acalmar um cliente irritado, usar ferramentas de IA como fazem os agentes de apoio e verificar as respostas delas, escrever notas de ticket claras e mostrar estas competências numa entrevista para um emprego de atendimento ao cliente.",
  about: [
    "Há empregos de atendimento ao cliente em todo o lado: centros de chamadas, apoio por chat, lojas, bancos, hospitais, empresas de água e luz, empresas de entregas e empresas de tecnologia. Muitos são para principiantes, dão formação e alguns são à distância. A IA está a mudar o trabalho: os chatbots respondem às perguntas fáceis e os agentes humanos tratam das mais difíceis com a ajuda da IA.",
    "Este curso é para pessoas que voltam para casa depois da prisão, pessoas à procura de emprego em programas de formação profissional e qualquer pessoa que queira uma carreira no atendimento ao cliente. As competências com pessoas que você já tem, como manter a calma, ouvir e resolver problemas, são o centro deste trabalho.",
    "Você vai praticar com um assistente de IA a fazer o papel do cliente. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Faça três contactos de cliente em simulação, com um assistente de IA a fazer o papel do cliente: uma pergunta simples, um cliente irritado e um problema que não consegue resolver à primeira. Use os cinco passos do contacto, escreva notas de ticket para cada um e depois escreva três pontos para o currículo e uma resposta STAR de entrevista sobre como acalmou um cliente irritado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que voltam para casa depois da prisão, pessoas à procura de emprego em programas de formação profissional e qualquer pessoa que queira um primeiro emprego de atendimento ao cliente num centro de chamadas, numa equipa de chat, numa loja, num banco, numa clínica ou numa empresa de entregas.",
    startingPoint: "Sabem falar com pessoas, manter a calma e resolver problemas do dia a dia. Muitos já usaram um telefone e mensagens de texto; poucos usaram no trabalho um balcão de apoio, um sistema de tickets ou um assistente de IA.",
    gap: "Hoje, os empregos de atendimento ao cliente juntam o contacto humano com ferramentas de IA. Os alunos precisam de uma forma clara de atender um contacto, acalmar clientes irritados, verificar as sugestões da IA, escrever notas de ticket e mostrar estas competências numa entrevista, para serem contratados e manterem o emprego.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador partilhado da biblioteca ou do programa",
      "Tempo: lições de cerca de cinco minutos com pequenas tarefas de prática",
      "Privacidade: a prática usa clientes inventados e nenhum dado verdadeiro de contas",
      "As regras e as ferramentas mudam de empresa para empresa; os alunos seguem as regras de cada empregador"
    ],
    prerequisites: "Nenhum. Quem nunca usou ferramentas de IA pode fazer primeiro o curso \"Introdução à IA e Confiança Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com três anúncios de emprego de atendimento ao cliente", action: "descrever os principais empregos de atendimento ao cliente e como os agentes usam ferramentas de IA, como chatbots, respostas sugeridas e bases de conhecimento", standard: "dizendo pelo menos uma ferramenta e uma tarefa humana para cada emprego" },
    { id: "O2", condition: "Numa simulação com um cliente", action: "atender o contacto desde a saudação até ao fim com os cinco passos: saudar, ouvir, confirmar, resolver e terminar", standard: "usando os cinco passos por ordem" },
    { id: "O3", condition: "Numa simulação com um cliente irritado", action: "acalmar o cliente com os passos HEAT e decidir quando passar o caso a outra pessoa", standard: "sem discutir nem dizer \"acalme-se\"" },
    { id: "O4", condition: "Com uma resposta sugerida pela IA", action: "verificar a resposta na base de conhecimento e nas regras da empresa e corrigi-la antes de a enviar", standard: "para que cada dado e cada promessa estejam de acordo com as regras" },
    { id: "O5", condition: "Depois de um contacto com um cliente", action: "escrever notas de ticket com o problema, o que fez, o que foi prometido e o seguimento", standard: "com todas as partes necessárias e sem palavras-passe nem dados privados" },
    { id: "O6", condition: "Com um anúncio de emprego", action: "escrever pontos para o currículo e uma resposta STAR de entrevista que mostrem as suas competências de atendimento ao cliente", standard: "com três pontos e uma história STAR completa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Atender bem os clientes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Como é o trabalho de atendimento ao cliente com IA",
          minutes: 4,
          goal: "Descrever os empregos de atendimento ao cliente e como se usam neles as ferramentas de IA.",
          text: [
            "Os agentes de atendimento ao cliente ajudam as pessoas por telefone, chat, email, redes sociais ou pessoalmente. Nomes comuns destes empregos: representante de atendimento ao cliente, agente de apoio, agente de centro de chamadas, técnico de apoio informático e especialista de apoio ao cliente.",
            "Hoje, a IA trata de muitas perguntas simples através de chatbots, e por isso os agentes humanos ficam com os casos mais difíceis, mais emocionais ou fora do normal. Os agentes usam muitas vezes ferramentas de IA que sugerem respostas, procuram na base de conhecimento da empresa, resumem conversas longas e escrevem notas de ticket.",
            "Por isso, as competências humanas valem mais: ouvir, ter empatia, manter a calma, ter bom juízo e resolver problemas. A IA sugere; você decide o que é certo para o cliente e segue as regras da empresa."
          ],
          words: [["Representante de atendimento ao cliente", "uma pessoa cujo trabalho é ajudar os clientes com perguntas e problemas."], ["Base de conhecimento", "a biblioteca de respostas e de artigos \"como fazer\" de uma empresa."], ["Ticket", "o registo de um problema de um cliente e do que se fez para o resolver."]],
          slides: [
            { title: "Onde estão os empregos", bullets: ["Telefone, chat, email, redes sociais, pessoalmente", "Lojas, bancos, hospitais, água e luz, tecnologia"] },
            { title: "A IA no trabalho", bullets: ["Os chatbots tratam das perguntas simples", "Respostas sugeridas e pesquisa de conhecimento", "Resumos e notas de ticket"] },
            { title: "As competências humanas valem mais", bullets: ["Ouvir e ter empatia", "Calma e bom juízo", "Você decide; a IA sugere"] }
          ],
          tryIt: "Veja três anúncios de emprego de atendimento ao cliente. Escreva o nome de cada emprego, se fala de IA, de chat ou de ferramentas específicas, e três competências que cada um pede.",
          youCanNow: "descrever os empregos de atendimento ao cliente e como os agentes usam ferramentas de IA.",
          quickCheck: [
            { objective: "O1", q: "Quando uma empresa usa chatbots, de que casos trata normalmente um agente de apoio humano?", options: ["Só de mudar palavras-passe", "De nada, porque os chatbots fazem todo o trabalho", "Dos casos mais difíceis e mais emocionais", "Só dos casos noutra língua"], answer: 2, why: "Os chatbots ficam com as perguntas simples, e as pessoas ficam com os casos difíceis que precisam de cuidado e de bom juízo." },
            { objective: "O1", q: "Um anúncio pede \"experiência com um sistema de tickets\". Você nunca usou um. O que faria?", options: ["Desistir do emprego porque não tem as condições", "Candidatar-se, mostrar competências parecidas e aprender o que faz um sistema de tickets", "Dizer no currículo que já usou um", "Pedir a um chatbot que se candidate por você"], answer: 1, why: "Pode candidatar-se com honestidade, mostrar competências parecidas e aprender a ferramenta; mentir no currículo nunca é a solução." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Os cinco passos do contacto com o cliente",
          minutes: 5,
          goal: "Atender um contacto de cliente desde a saudação até ao fim com cinco passos.",
          text: [
            "A maioria dos bons contactos segue cinco passos. Saudar: diga o seu nome e ofereça ajuda. Ouvir: deixe a pessoa explicar sem a interromper e faça perguntas para entender. Confirmar: repita o problema com as suas palavras. Resolver: dê a resposta ou os próximos passos, com clareza. Terminar: confirme que ficou resolvido, pergunte se precisa de mais alguma coisa e agradeça.",
            "Exemplo: \"Obrigada por ligar, fala a Dee. Como posso ajudar?\" ... \"Então a sua encomenda aparece como entregue, mas não a recebeu. Vou verificar.\" ... \"Enviei uma nova encomenda; chega na quinta-feira. Posso ajudar com mais alguma coisa?\"",
            "Confirme a identidade com o processo da empresa antes de dar dados da conta. Nunca peça informações que o processo não exige e nunca peça uma palavra-passe completa."
          ],
          steps: ["Saúde com o seu nome e ofereça ajuda.", "Ouça sem interromper; faça perguntas.", "Confirme o problema com as suas palavras.", "Resolva ou explique os próximos passos com clareza.", "Termine: confirme, pergunte se precisa de mais alguma coisa e agradeça."],
          words: [["Confirmar a identidade", "ter a certeza de que o cliente é quem diz ser, com os passos da empresa."], ["Resolução", "a solução para o problema do cliente."]],
          slides: [
            { title: "Cinco passos", bullets: ["Saudar e ouvir", "Confirmar o problema", "Resolver e terminar"] },
            { title: "Fale assim", bullets: ["\"Fala a Dee. Como posso ajudar?\"", "\"Então a encomenda aparece como entregue, mas não chegou.\"", "\"Posso ajudar com mais alguma coisa?\""] },
            { title: "Proteja a conta", bullets: ["Confirme a identidade como a empresa manda", "Peça só o que é necessário", "Nunca peça uma palavra-passe completa"] }
          ],
          tryIt: "Peça a um assistente de IA: \"Faça o papel de um cliente cuja encomenda aparece como entregue mas nunca chegou. Fique no papel. Quando terminarmos, dê-me uma nota em saudar, ouvir, confirmar, resolver e terminar.\" Faça a simulação.",
          youCanNow: "atender um contacto de cliente desde a saudação até ao fim com cinco passos.",
          quickCheck: [
            { objective: "O2", q: "Que passo vem logo a seguir a saudar o cliente?", options: ["Resolver", "Terminar", "Confirmar", "Ouvir"], answer: 3, why: "Depois da saudação, você ouve o problema todo antes de o confirmar ou resolver." },
            { objective: "O2", q: "Você acha que o problema está resolvido. O que faria antes de terminar o contacto?", options: ["Confirmar que ficou resolvido, perguntar se precisa de mais alguma coisa e agradecer", "Desligar depressa para atender a chamada seguinte", "Dizer para voltar a ligar se avariar", "Pedir que lhe dê cinco estrelas"], answer: 0, why: "Um bom fim confirma a solução, pergunta se precisa de mais alguma coisa e agradece ao cliente." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Acalmar um cliente irritado",
          minutes: 6,
          goal: "Usar passos para baixar a tensão, acalmar um cliente irritado e encontrar uma solução.",
          text: [
            "Os clientes irritados normalmente estão irritados com a situação, não com você. Mantenha a calma, fale baixo e devagar, e não discuta nem leve para o lado pessoal.",
            "Use os passos HEAT (palavras inglesas): Hear, ouvir tudo; Empathize, mostrar empatia (\"Compreendo como isso é frustrante\"); Apologize, pedir desculpa pelo que aconteceu; e Take action, agir (dizer exatamente o que vai fazer). Evite \"acalme-se\" e \"isso não é o meu trabalho\".",
            "Conheça os seus limites. Se alguém for ofensivo ou ameaçar, siga as regras da empresa, que muitas vezes permitem dar um aviso e depois terminar o contacto, ou passá-lo a um supervisor. Fazer pequenas pausas e falar com colegas depois de chamadas difíceis ajuda-o a ficar bem."
          ],
          steps: ["Mantenha a calma e não leve para o lado pessoal.", "Ouça a pessoa até ao fim.", "Mostre empatia e peça desculpa pelo que aconteceu.", "Aja: diga exatamente o que vai fazer.", "Se a pessoa for ofensiva, siga as regras da empresa ou chame um supervisor."],
          words: [["Baixar a tensão", "acalmar uma situação tensa."], ["Empatia", "mostrar que entende o que a outra pessoa sente."], ["Passar o caso (escalar)", "entregar um caso a um supervisor ou especialista."]],
          slides: [
            { title: "Não é sobre você", bullets: ["Estão irritados com a situação", "Voz baixa e lenta; não discuta"] },
            { title: "HEAT", bullets: ["Hear: ouvir tudo", "Empathize e Apologize: empatia e desculpa", "Take action: agir"] },
            { title: "Conheça os seus limites", bullets: ["Ofensas ou ameaças: siga as regras", "Chame um supervisor", "Cuide de si depois de chamadas difíceis"] }
          ],
          tryIt: "Peça a um assistente de IA que faça o papel de um cliente zangado a quem cobraram a conta duas vezes. Use HEAT. Depois pergunte à IA que frases resultaram e quais deve mudar.",
          youCanNow: "acalmar um cliente irritado com HEAT e saber quando passar o caso a outra pessoa.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer o T de HEAT?", options: ["Talk faster (falar mais depressa)", "Transfer (transferir)", "Take action (agir)", "Thank (agradecer)"], answer: 2, why: "HEAT é Hear (ouvir), Empathize (mostrar empatia), Apologize (pedir desculpa) e Take action (agir)." },
            { objective: "O3", q: "Um cliente está a gritar por causa de uma cobrança em dobro. O que diria primeiro?", options: ["\"Estou a ouvi-lo e lamento que isto tenha acontecido. Vou ver isso agora.\"", "\"Acalme-se para eu o poder ajudar.\"", "\"Isso não é do meu departamento.\"", "\"Deve ter carregado duas vezes.\""], answer: 0, why: "Ouvir e mostrar empatia primeiro baixa a tensão; culpar ou dizer \"acalme-se\" aumenta-a." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Atender bem os clientes",
        questions: [
          { objective: "O1", q: "O que é uma base de conhecimento?", options: ["A conta bancária de um cliente", "Um tipo de chatbot", "A biblioteca de respostas e de artigos \"como fazer\" de uma empresa", "Só um vídeo de formação"], answer: 2, why: "Os agentes procuram nela as respostas certas." },
          { objective: "O1", q: "Porque é que as competências humanas valem mais à medida que a IA cresce no atendimento ao cliente?", options: ["As pessoas ficam com os casos mais difíceis e mais emocionais", "A IA é proibida", "Os clientes nunca usam o chat", "As pessoas só respondem a perguntas simples"], answer: 0, why: "Os chatbots ficam com os casos simples; as pessoas tratam dos difíceis." },
          { objective: "O2", q: "Que passo vem logo a seguir a ouvir?", options: ["Terminar a chamada", "Pedir a palavra-passe", "Transferir o cliente", "Confirmar o problema com as suas palavras"], answer: 3, why: "Confirmar mostra que entendeu." },
          { objective: "O3", q: "O que quer dizer o E de HEAT?", options: ["Escalate (passar o caso)", "Empathize (mostrar empatia)", "Exit (sair)", "Email"], answer: 1, why: "HEAT: Hear (ouvir), Empathize (mostrar empatia), Apologize (pedir desculpa), Take action (agir)." },
          { objective: "O3", q: "Que frase deve evitar com um cliente irritado?", options: ["\"Compreendo como isso é frustrante.\"", "\"Acalme-se.\"", "\"Isto é o que vou fazer.\"", "\"Obrigado pela sua paciência.\""], answer: 1, why: "\"Acalme-se\" normalmente deixa as pessoas mais zangadas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ferramentas de IA e ser contratado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar as respostas sugeridas pela IA e a base de conhecimento",
          minutes: 5,
          goal: "Usar as sugestões da IA como ponto de partida e verificá-las antes de enviar.",
          text: [
            "Muitos sistemas de apoio mostram respostas sugeridas pela IA ou respostas tiradas da base de conhecimento. Poupam tempo, mas podem estar erradas, desatualizadas ou não servir para a situação deste cliente.",
            "Antes de enviar: leia tudo, verifique os dados na base de conhecimento ou nas regras (datas, preços, regras de reembolso), adapte a resposta a esta pessoa (use o nome dela, responda ao que perguntou) e corrija o tom. Se a IA sugerir algo contra as regras, como um reembolso que você não pode dar, não envie.",
            "Para praticar em casa, cole uma mensagem inventada de um cliente num assistente de IA gratuito e peça: \"Escreva uma resposta simpática. A nossa regra: reembolso até 30 dias com recibo.\" Depois corrija-a como se fosse o agente."
          ],
          steps: ["Leia a resposta sugerida até ao fim.", "Verifique os dados na base de conhecimento ou nas regras.", "Adapte-a a este cliente.", "Corrija o tom.", "Não envie nada que vá contra as regras."],
          words: [["Resposta sugerida", "uma resposta escrita pela IA que o agente pode corrigir e enviar."], ["Regras da empresa", "as regras oficiais da empresa (em inglês, \"policy\")."]],
          slides: [
            { title: "As sugestões da IA poupam tempo", bullets: ["Mas podem estar erradas ou desatualizadas", "Podem não servir para este cliente"] },
            { title: "Antes de enviar", bullets: ["Verifique os dados nas regras", "Adapte a resposta e corrija o tom", "Nunca envie o que vai contra as regras"] },
            { title: "Pratique em casa", bullets: ["Cole uma mensagem inventada na IA", "Dê-lhe a regra", "Corrija como um agente"] }
          ],
          tryIt: "Escreva um email inventado de um cliente sobre um reembolso atrasado. Peça à IA que escreva uma resposta com uma regra que você inventa, depois corrija-a e marque todas as mudanças que fez.",
          youCanNow: "usar com segurança as respostas sugeridas pela IA, verificando, adaptando e seguindo as regras.",
          quickCheck: [
            { objective: "O4", q: "O que é uma resposta sugerida pela IA?", options: ["Uma resposta final que tem de enviar", "Um rascunho escrito pela IA que você verifica e corrige", "Uma mensagem do seu supervisor", "Um inquérito que o cliente preenche"], answer: 1, why: "A sugestão é só um ponto de partida; você verifica-a e decide o que enviar." },
            { objective: "O4", q: "Um rascunho da IA promete um reembolso em dois dias, mas a regra diz cinco a sete dias. O que faria?", options: ["Enviar porque foi a IA que escreveu", "Apagar a resposta toda e não enviar nada", "Mudar o prazo para estar de acordo com a regra antes de enviar", "Perguntar ao cliente que prazo prefere"], answer: 2, why: "Cada dado e cada promessa têm de estar de acordo com as regras antes de enviar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escrever notas de ticket e proteger os dados dos clientes",
          minutes: 5,
          goal: "Escrever notas de ticket claras e tratar as informações dos clientes com segurança.",
          text: [
            "Cada contacto precisa de notas para que o agente seguinte saiba o que aconteceu. As boas notas de ticket são curtas e só com factos: o problema, o que verificou, o que fez, o que foi prometido e a data de seguimento, se houver. Exemplo: \"Cliente diz que falta uma encomenda; a encomenda aparece como entregue a 10/12. Verifiquei o seguimento da transportadora. Enviei uma nova; chega a 10/16. Fazer seguimento se não for recebida.\"",
            "Algumas ferramentas deixam a IA resumir a conversa em notas. Verifique o resumo: a IA pode esquecer uma promessa ou acrescentar algo que não aconteceu.",
            "Proteja os dados: abra só as contas das pessoas que está a ajudar, nunca partilhe dados de clientes com quem não tem autorização, nunca cole informações de clientes em ferramentas de IA que a sua empresa não aprovou e nunca escreva números completos de cartão nem palavras-passe nas notas. Seguir as regras de privacidade faz parte do trabalho."
          ],
          steps: ["Escreva o problema numa linha.", "Escreva o que verificou e o que fez.", "Escreva o que foi prometido e a data de seguimento.", "Verifique se o resumo da IA tem dados em falta ou errados.", "Não escreva números completos de cartão nem palavras-passe."],
          words: [["Notas de ticket", "um registo escrito e curto de um contacto com um cliente."], ["Privacidade dos dados", "manter seguras as informações pessoais das pessoas e usá-las só como é permitido."]],
          slides: [
            { title: "Boas notas de ticket", bullets: ["Problema, o que verificou, o que fez", "O que foi prometido e a data de seguimento", "Curtas e só com factos"] },
            { title: "Resumos da IA", bullets: ["Poupam tempo", "Verifique se faltam promessas ou se há erros"] },
            { title: "Proteja os dados dos clientes", bullets: ["Só as contas que está a ajudar", "Nada de dados de clientes em IA não aprovada", "Nada de números de cartão nem palavras-passe"] }
          ],
          tryIt: "Escreva notas de ticket para as duas simulações que fez no Capítulo 1. Depois peça à IA que resuma uma das simulações e compare o resumo dela com as suas notas.",
          youCanNow: "escrever notas de ticket claras e proteger as informações dos clientes.",
          quickCheck: [
            { objective: "O5", q: "Porque é que as notas de ticket são importantes?", options: ["Deixam o agente seguinte continuar o caso sem voltar a perguntar ao cliente", "São só para os advogados da empresa", "Substituem a conversa com o cliente", "São um lugar para escrever a sua opinião sobre o cliente"], answer: 0, why: "Notas claras deixam qualquer pessoa continuar o caso sem o cliente ter de repetir tudo." },
            { objective: "O5", q: "Um cliente lê-lhe o número do cartão por engano. O que escreveria nas notas?", options: ["O número completo do cartão, para ficar guardado", "O número do cartão e a palavra-passe", "Nada sobre a chamada", "O problema e o que fez, sem o número do cartão"], answer: 3, why: "As notas registam o problema e o que foi feito, nunca números completos de cartão nem palavras-passe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ser contratado no atendimento ao cliente",
          minutes: 5,
          goal: "Mostrar as suas competências de atendimento ao cliente no currículo e numa entrevista.",
          text: [
            "Os empregadores querem pessoas de confiança, calmas, que comunicam com clareza, com competências básicas de computador e vontade de aprender. A experiência em lojas, restauração, cuidar de pessoas, igreja, forças armadas ou trabalho dentro da prisão conta toda.",
            "Escreva pontos no currículo que mostrem resultados: \"Ajudei mais de 60 clientes por dia numa linha de cozinha movimentada, com calma e simpatia.\" Peça à IA ajuda para transformar a sua experiência em pontos de atendimento ao cliente, e mantenha-os verdadeiros.",
            "Espere perguntas de simulação: \"Um cliente está a gritar por causa de uma encomenda atrasada. O que faz?\" Responda com os seus passos (HEAT e os cinco passos do contacto). Prepare uma história STAR sobre uma vez em que acalmou alguém ou resolveu um problema. Alguns empregadores fazem um teste de escrita no teclado ou de computador, por isso pratique com um teste de digitação gratuito na internet."
          ],
          steps: ["Faça uma lista das experiências em que ajudou pessoas.", "Peça à IA que as transforme em pontos verdadeiros para o currículo, com números.", "Prepare uma história STAR sobre acalmar alguém ou resolver um problema.", "Pratique uma resposta de simulação com HEAT.", "Pratique a escrita no teclado com um teste de digitação gratuito na internet."],
          words: [["Pergunta de simulação", "uma pergunta de entrevista em que mostra como trataria uma situação."], ["Teste de digitação", "um teste de quão depressa e quão bem você escreve no teclado."]],
          slides: [
            { title: "O que os empregadores querem", bullets: ["De confiança e calmo", "Comunicação clara", "Básico de computador; vontade de aprender"] },
            { title: "Pontos do currículo", bullets: ["Mostre resultados com números", "Toda a experiência a ajudar pessoas conta", "Mantenha-os verdadeiros"] },
            { title: "Preparar a entrevista", bullets: ["Respostas de simulação com HEAT", "Uma história STAR sobre acalmar alguém", "Pratique a digitação"] }
          ],
          tryIt: "Tarefa final: faça três contactos de cliente em simulação com a IA (pergunta simples, cliente irritado, problema não resolvido à primeira), escreva notas de ticket para cada um e depois escreva três pontos para o currículo e uma resposta STAR sobre como acalmou um cliente irritado.",
          youCanNow: "atender clientes com ferramentas de IA como um agente de apoio e mostrar essas competências para ser contratado.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer o R de uma resposta STAR?", options: ["Reason (razão)", "Reply (resposta)", "Rating (avaliação)", "Result (resultado)"], answer: 3, why: "STAR é Situation (situação), Task (tarefa), Action (ação) e Result (resultado)." },
            { objective: "O6", q: "Você trabalhou na cozinha de uma prisão a servir 200 pessoas por dia. Como usaria isso num currículo de atendimento ao cliente?", options: ["Deixar de fora porque não conta", "Escrever um ponto sobre servir 200 pessoas por dia com rapidez e educação", "Dizer só que estava ocupado", "Descrever como um emprego de chefe"], answer: 1, why: "A experiência verdadeira a servir pessoas conta; descreva-a com honestidade e com um número." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ferramentas de IA e ser contratado",
        questions: [
          { objective: "O4", q: "Uma resposta sugerida pela IA oferece um reembolso que as regras não permitem. O que faz?", options: ["Envia mesmo assim", "Pede ao cliente que decida", "Apaga o ticket", "Não envia; segue as regras"], answer: 3, why: "Os agentes seguem as regras, não os palpites da IA." },
          { objective: "O5", q: "Boas notas de ticket têm:", options: ["O problema, o que fez, o que foi prometido e o seguimento", "O número completo do cartão do cliente", "A sua opinião sobre o cliente", "Nada"], answer: 0, why: "As notas ajudam o agente seguinte." },
          { objective: "O5", q: "Um resumo da IA deixa de fora uma promessa que você fez. Deve:", options: ["Deixar de fora", "Apagar todas as notas", "Acrescentar a promessa às notas", "Culpar a IA mais tarde"], answer: 2, why: "Verifique e corrija os resumos da IA." },
          { objective: "O5", q: "O que nunca deve ser escrito nas notas de ticket?", options: ["A data da encomenda", "A data de seguimento", "O que verificou", "A palavra-passe completa de um cliente"], answer: 3, why: "As palavras-passe nunca devem ser registadas." },
          { objective: "O6", q: "Numa entrevista perguntam-lhe como trataria um cliente que grita. Melhor resposta:", options: ["\"Gritava também.\"", "\"Desligava logo.\"", "Explicar HEAT e os passos que daria", "\"Não sei.\""], answer: 2, why: "Mostrar os seus passos prova a competência." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Carreiras no Atendimento ao Cliente",
    questions: [
      { objective: "O1", q: "Qual destes é um emprego de atendimento ao cliente?", options: ["Operador de empilhadora", "Agente de apoio", "Soldador", "Piloto"], answer: 1, why: "Os agentes de apoio ajudam os clientes." },
      { objective: "O1", q: "Hoje, em muitas empresas, as perguntas simples são muitas vezes respondidas por:", options: ["Chatbots", "Só por correio", "Ninguém", "O diretor-geral"], answer: 0, why: "Os chatbots tratam das perguntas simples e comuns." },
      { objective: "O1", q: "Um ticket é:", options: ["Um bilhete de cinema", "Uma multa de estacionamento", "O registo de um problema de um cliente e do que se fez", "Um salário"], answer: 2, why: "Os tickets acompanham cada problema." },
      { objective: "O4", q: "Quem toma a decisão final sobre o que dizer a um cliente?", options: ["Você, seguindo as regras", "A IA", "O cliente", "Um colega qualquer"], answer: 0, why: "A IA sugere; os agentes decidem." },
      { objective: "O2", q: "O primeiro passo de um contacto com um cliente é:", options: ["Terminar", "Resolver", "Transferir", "Saudar com o seu nome e oferecer ajuda"], answer: 3, why: "Uma saudação calorosa começa bem." },
      { objective: "O2", q: "\"Então a sua encomenda aparece como entregue, mas não chegou\" é um exemplo de:", options: ["Terminar", "Confirmar o problema", "Passar o caso", "Confirmar a identidade"], answer: 1, why: "Repetir o problema confirma-o." },
      { objective: "O2", q: "Antes de dar dados da conta, você deve:", options: ["Dar logo", "Confirmar a identidade com o processo da empresa", "Pedir a palavra-passe completa", "Pedir a um colega que adivinhe"], answer: 1, why: "Confirmar a identidade protege a conta." },
      { objective: "O2", q: "Como deve terminar um contacto?", options: ["Desligar de repente", "Não dizer nada", "Pedir uma gorjeta", "Confirmar que ficou resolvido, perguntar se precisa de mais alguma coisa e agradecer"], answer: 3, why: "Um bom fim deixa o cliente satisfeito." },
      { objective: "O3", q: "Os clientes irritados normalmente estão irritados com:", options: ["A situação, não com você", "Você pessoalmente", "O tempo que faz", "Nada"], answer: 0, why: "Lembrar isto ajuda-o a manter a calma." },
      { objective: "O3", q: "HEAT quer dizer:", options: ["Help, End, Ask, Transfer (ajudar, acabar, perguntar, transferir)", "Hurry, Explain, Argue, Talk (apressar, explicar, discutir, falar)", "Hear, Empathize, Apologize, Take action (ouvir, mostrar empatia, pedir desculpa, agir)", "Hold, Email, Answer, Thank (esperar, email, responder, agradecer)"], answer: 2, why: "Estes são os quatro passos HEAT." },
      { objective: "O3", q: "Um cliente fica ofensivo e ameaça. Você deve:", options: ["Ameaçá-lo também", "Partilhar a morada dele", "Aguentar as ofensas para sempre", "Seguir as regras da empresa, que podem ser um aviso, terminar o contacto ou chamar um supervisor"], answer: 3, why: "As regras protegem os agentes e os clientes." },
      { objective: "O3", q: "Passar o caso (escalar) quer dizer:", options: ["Andar numa escada rolante", "Levantar a voz", "Entregar um caso a um supervisor ou especialista", "Fechar o caso"], answer: 2, why: "Passar o caso leva os casos difíceis para cima." },
      { objective: "O4", q: "As respostas sugeridas pela IA podem ser:", options: ["Sempre perfeitas", "Erradas, desatualizadas ou não servir para o cliente", "Proibidas de ler", "Só noutras línguas"], answer: 1, why: "Verifique-as sempre." },
      { objective: "O4", q: "Antes de enviar uma resposta sugerida pela IA, verifique os dados:", options: ["Na base de conhecimento ou nas regras", "Nas redes sociais", "Só na sua memória", "No site de um concorrente"], answer: 0, why: "As fontes oficiais mantêm as respostas certas." },
      { objective: "O5", q: "O que nunca deve ir para uma ferramenta de IA que a sua empresa não aprovou?", options: ["Uma mensagem de prática inventada", "Uma pergunta de gramática", "Informações de clientes", "Uma saudação geral"], answer: 2, why: "Os dados dos clientes têm de ser protegidos." },
      { objective: "O5", q: "Privacidade dos dados quer dizer:", options: ["Manter seguras as informações pessoais e usá-las só como é permitido", "Partilhar dados com amigos", "Apagar todos os dados", "Publicar dados na internet"], answer: 0, why: "É uma tarefa principal do trabalho." },
      { objective: "O6", q: "Que ponto de currículo é o mais forte para o atendimento ao cliente?", options: ["\"Fiz coisas\"", "\"Trabalhei às vezes\"", "\"Boa pessoa\"", "\"Ajudei mais de 60 clientes por dia com calma e simpatia\""], answer: 3, why: "Mostra números e a competência." },
      { objective: "O6", q: "A experiência de que lugar pode contar para o atendimento ao cliente?", options: ["Só centros de chamadas", "Restauração, cuidar de pessoas, igreja ou trabalho dentro da prisão", "Só a universidade", "Nenhum"], answer: 1, why: "Ajudar pessoas em qualquer lugar desenvolve a competência." },
      { objective: "O6", q: "Uma história STAR sobre acalmar alguém mostra:", options: ["O seu histórico de salários", "Situation, Task, Action e Result (situação, tarefa, ação e resultado)", "Os seus filmes preferidos", "Nada"], answer: 1, why: "STAR prova a competência com um exemplo." },
      { objective: "O6", q: "Que competência alguns empregadores testam antes de contratar?", options: ["Malabarismo", "Natação", "Canto", "Velocidade e precisão a escrever no teclado"], answer: 3, why: "Os agentes escrevem muito no teclado; pratique com um teste de digitação gratuito." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 4, 7, 9, 11, 13, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Passos do contacto", objective: "O2", notYet: "Saltou passos, por exemplo resolveu antes de ouvir ou acabou sem terminar bem.", meets: "Usou saudar, ouvir, confirmar, resolver e terminar nos três contactos.", exceeds: "Também confirmou a identidade quando era preciso e deixou um próximo passo claro no problema não resolvido." },
      { name: "Acalmar o cliente irritado", objective: "O3", notYet: "Discutiu, culpou ou disse \"acalme-se\".", meets: "Usou ouvir, mostrar empatia, pedir desculpa e agir, e o cliente acalmou-se.", exceeds: "Também soube quando passar o caso e explicou o próximo passo com clareza." },
      { name: "IA verificada", objective: "O4", notYet: "Enviou uma sugestão da IA que não estava de acordo com as regras.", meets: "Verificou cada sugestão da IA na base de conhecimento ou nas regras antes de a usar.", exceeds: "Sabe mostrar cada mudança que fez e dizer porquê." },
      { name: "Notas de ticket", objective: "O5", notYet: "Faltam nas notas o problema, o que fez, a promessa ou o seguimento, ou têm dados privados.", meets: "Cada ticket tem o problema, o que foi feito, o que foi prometido e o seguimento, sem dados privados.", exceeds: "As notas são tão curtas e claras que outro agente podia continuar sem perguntar nada." },
      { name: "Pronto para ser contratado", objective: "O6", notYet: "Os pontos são vagos, ou falta uma parte à resposta STAR.", meets: "Três pontos de currículo claros e uma resposta STAR com as quatro partes.", exceeds: "Os pontos têm números e a resposta STAR acaba com um resultado verdadeiro." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que se candidatam a um emprego de atendimento ao cliente em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem uma entrevista ou uma oferta de emprego de atendimento ao cliente em 90 dias",
      "Alunos que passam na tarefa final (grelha de avaliação)",
      "Alunos que começam outro curso de carreira da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Um assistente de IA gratuito, como ChatGPT, Microsoft Copilot ou Google Gemini, para fazer o papel do cliente",
      "Três anúncios verdadeiros de emprego de atendimento ao cliente, de um site de emprego",
      "Papel e caneta para as notas de ticket e os pontos do currículo",
      "Cerca de 60 minutos no total: lições, simulações, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam as simulações em pares: um aluno faz de cliente e o outro de agente, depois trocam; a IA pode fazer de cliente para quem trabalha sozinho.",
      "Use só clientes e contas inventados; nunca pratique com números de cartão nem palavras-passe verdadeiros.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Ajude os alunos que estiveram presos a encontrar formas honestas de descrever a experiência de trabalho em restauração, a cuidar de pessoas ou em empregos dentro da prisão.",
      "Se possível, convide um empregador local ou um recrutador de um centro de chamadas para ver as simulações finais."
    ]
  }
};
