"use strict";

// Koach Learn course (Portuguese translation of shared/ai-customer-experience.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-customer-experience-pt",
  lang: "pt",
  translationOf: "ai-customer-experience",
  category: "Small Business",
  name: "IA para a Experiência do Cliente",
  skills: "Mapear a jornada do cliente, Escrever modelos de resposta com IA, Responder a avaliações e reclamações, Analisar comentários com IA, Personalizar sem perder a privacidade, Fazer um plano de melhoria",
  outcome: "mapear como os clientes ou utentes vivem a experiência com a sua organização, usar a IA para escrever respostas rápidas e calorosas a perguntas, avaliações e reclamações, organizar os comentários nos problemas principais e transformá-los num plano de melhoria de 30 dias.",
  about: [
    "A experiência do cliente é como as pessoas se sentem em cada momento em que lidam com você: quando o encontram, quando fazem uma pergunta, quando compram ou recebem ajuda, e o que acontece depois. Clientes satisfeitos voltam e falam de você aos amigos; os insatisfeitos vão-se embora em silêncio ou deixam uma avaliação má.",
    "Este curso é para donos e funcionários de pequenos negócios, e para organizações sem fins lucrativos cujos \"clientes\" são utentes, famílias, doadores e voluntários. Exemplos: uma barbearia, uma empresa de reparações em casa, a receção de uma clínica e um banco alimentar.",
    "Vai usar assistentes de IA gratuitos, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, para escrever respostas e estudar comentários, enquanto uma pessoa continua a mandar. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Para uma organização real ou de prática, faça um kit de experiência do cliente: um mapa da jornada do cliente com os três momentos mais fracos marcados, cinco modelos de resposta (pergunta comum, avaliação positiva, avaliação negativa, reclamação, seguimento), um resumo de pelo menos 15 comentários reais ou de exemplo organizados nos problemas principais, e um plano de melhoria de 30 dias com um responsável e uma medida para cada ação.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios e funcionários que atendem o público, e pessoas que servem utentes, famílias, doadores ou voluntários em organizações sem fins lucrativos e comunitárias.",
    startingPoint: "Falam com clientes todos os dias por telefone, SMS, e-mail, redes sociais ou pessoalmente, e talvez leiam avaliações na internet. Poucos já mapearam a jornada do cliente, usaram modelos de resposta, organizaram comentários por temas ou acompanharam melhorias.",
    gap: "Respostas lentas, frias ou erradas e reclamações sem resposta fazem perder clientes e prejudicam as avaliações públicas. Os alunos precisam de usar a IA para responder depressa e com simpatia, aprender com os comentários e fazer uma melhoria medida de cada vez, protegendo a privacidade dos clientes e sendo honestos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador; o computador é mais fácil para documentos e para organizar comentários",
      "Privacidade: nada de nomes, números de telefone, dados de saúde ou listas de clientes colados em ferramentas de IA gerais",
      "Honestidade: nada de avaliações falsas, e os clientes são avisados quando estão a falar com IA",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total, mais o tempo para fazer o kit"
    ],
    prerequisites: "Nenhum. Quem ainda não conhece os assistentes de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para uma organização real ou de prática", action: "desenhar um mapa da jornada do cliente, do momento em que o encontra até ao depois, e marcar os três momentos mais fracos", standard: "com o que o cliente faz e sente em cada passo" },
    { id: "O2", condition: "Com as suas cinco perguntas mais comuns e os dados verdadeiros", action: "escrever modelos de resposta feitos com a ajuda da IA, com o seu próprio estilo", standard: "personalizados e com os dados verificados antes de cada uso" },
    { id: "O3", condition: "Com uma avaliação positiva, uma avaliação negativa e uma reclamação", action: "escrever respostas calmas e úteis usando ouvir, pedir desculpa, resolver, acompanhar", standard: "sem nenhum dado privado em nenhuma resposta pública" },
    { id: "O4", condition: "Com pelo menos 15 comentários de clientes sem os dados privados", action: "organizar os comentários por temas com a IA e ordenar os três problemas principais", standard: "depois de verificar alguns comentários de cada tema" },
    { id: "O5", condition: "Para uma mensagem de agradecimento, lembrete ou seguimento", action: "escrever um modelo personalizado com marcadores que proteja a privacidade e seja honesto", standard: "só para pessoas que aceitaram receber mensagens suas, com uma forma de falar com uma pessoa" },
    { id: "O6", condition: "Com os seus três problemas principais", action: "fazer um plano de melhoria de 30 dias", standard: "com uma ação, um responsável e uma medida para cada problema" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer e responder aos seus clientes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mapear a jornada do cliente",
          minutes: 5,
          goal: "Desenhar um mapa da jornada do cliente e marcar os momentos mais fracos.",
          text: [
            "Um mapa da jornada do cliente mostra, por ordem, cada passo que uma pessoa dá consigo: descobrir (como o encontra), perguntar (primeiro contacto), decidir, comprar ou receber o serviço, e depois (seguimento, avaliação, voltar).",
            "Em cada passo, escreva o que o cliente faz, o que sente e o que pode correr mal. Num banco alimentar: uma família encontra o horário na internet, liga com uma pergunta, espera na fila, recebe a comida e fica sem saber quando pode voltar.",
            "A IA pode ajudar a ver passos que lhe escaparam. Pergunte: \"Tenho uma empresa de reparações em casa. Faça a lista de todos os passos de um cliente, desde a primeira pesquisa até depois do trabalho, e do que o pode irritar em cada passo.\" Depois compare com o que vê todos os dias."
          ],
          steps: ["Faça a lista dos passos: descobrir, perguntar, decidir, comprar ou receber, depois.", "Para cada passo, escreva o que o cliente faz e sente.", "Pergunte à IA o que o pode irritar em cada passo.", "Marque os três momentos mais fracos."],
          words: [["Experiência do cliente", "como as pessoas se sentem em cada momento em que lidam com uma organização."], ["Mapa da jornada", "um desenho, passo a passo, da experiência de um cliente."], ["Ponto de contacto", "qualquer momento em que um cliente lida com você: uma chamada, uma publicação, uma visita, um e-mail."]],
          slides: [
            { title: "A jornada", bullets: ["Descobrir, perguntar, decidir", "Comprar ou receber", "Depois: seguimento e regresso"] },
            { title: "Em cada passo", bullets: ["O que fazem", "O que sentem", "O que pode correr mal"] },
            { title: "Use a IA para encontrar falhas", bullets: ["Pergunte o que pode irritar os clientes", "Compare com o que vê", "Marque os três momentos mais fracos"] }
          ],
          tryIt: "Desenhe um mapa da jornada para uma organização real ou de prática, com pelo menos cinco passos. Use a IA para encontrar irritações que lhe escaparam e marque os três momentos mais fracos.",
          youCanNow: "mapear a jornada de um cliente e encontrar onde a experiência falha.",
          quickCheck: [
            { objective: "O1", q: "Que passo da jornada do cliente trata do seguimento, das avaliações e do regresso?", options: ["Depois", "Descobrir", "Perguntar", "Decidir"], answer: 0, why: "O passo \"depois\" inclui o seguimento, as avaliações e as novas visitas." },
            { objective: "O1", q: "A IA faz uma lista de irritações para o mapa da jornada da sua empresa de limpeza. O que faz com a lista?", options: ["Copia-a como o seu mapa final", "Apaga-a; a IA não pode ajudar", "Compara-a com o que vê todos os dias e fica com o que é verdade", "Envia-a aos clientes"], answer: 2, why: "A IA pode mostrar passos que lhe escaparam, mas é a sua experiência do dia a dia que os confirma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever respostas rápidas e calorosas com a IA",
          minutes: 5,
          goal: "Fazer modelos de resposta com a IA para as perguntas que recebe mais vezes.",
          text: [
            "Responder depressa é importante. Um modelo é uma resposta já feita que você ajusta para cada pessoa. A IA consegue escrever rascunhos de modelos com o seu estilo em segundos.",
            "Dê contexto à IA: a sua organização, o seu tom e os dados. \"Escreva uma resposta simpática de uma barbearia à pergunta 'Atendem sem marcação?' Dados: sem marcação de terça a quinta, com marcação obrigatória na sexta e no sábado, marque no nosso site. Menos de 50 palavras.\"",
            "Personalize sempre antes de enviar: use o nome da pessoa, responda exatamente ao que ela perguntou e verifique os dados. Uma resposta que parece de um robô ou que tem o horário errado faz mais mal do que bem."
          ],
          steps: ["Faça a lista das suas cinco perguntas mais comuns.", "Dê à IA o seu tom e os dados verdadeiros de cada uma.", "Peça um modelo curto e simpático.", "Guarde os modelos num documento.", "Personalize e verifique os dados sempre que usar um."],
          words: [["Modelo", "uma resposta já feita que você ajusta para cada pessoa."], ["Personalizar", "mudar uma mensagem para que sirva para aquela pessoa."]],
          slides: [
            { title: "A rapidez é importante", bullets: ["Os modelos ajudam a responder depressa", "A IA escreve rascunhos em segundos"] },
            { title: "Dê os dados à IA", bullets: ["O seu tom", "Os dados verdadeiros", "Um limite de palavras"] },
            { title: "Personalize sempre", bullets: ["Use o nome da pessoa", "Responda exatamente ao que perguntou", "Verifique os dados"] }
          ],
          tryIt: "Use a IA para escrever modelos para as três perguntas que os clientes lhe fazem mais vezes. Guarde-os e depois personalize um para um cliente inventado.",
          youCanNow: "fazer e personalizar modelos de resposta escritos com a ajuda da IA.",
          quickCheck: [
            { objective: "O2", q: "O que deve dar à IA para que um modelo de resposta fique certo?", options: ["Os números de telefone dos clientes", "O seu tom e os dados verdadeiros", "Só a palavra \"resposta\"", "O site de um concorrente"], answer: 1, why: "O seu tom e os dados reais deixam a IA escrever uma resposta certa e com o seu estilo." },
            { objective: "O2", q: "Uma cliente chamada Ana pergunta sobre o estacionamento. Você tem um modelo. O que faz?", options: ["Envia o modelo tal como está", "Ignora a pergunta", "Envia-lhe todos os modelos que tem", "Acrescenta o nome dela, responde exatamente ao que perguntou e verifica os dados"], answer: 3, why: "Personalize e verifique os dados sempre que usar um modelo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Responder a avaliações e reclamações",
          minutes: 6,
          goal: "Responder com calma e de forma útil a uma avaliação positiva, a uma avaliação negativa e a uma reclamação.",
          text: [
            "As avaliações são públicas, por isso a sua resposta é para todos os que a leem, não só para quem a escreveu. Agradeça as avaliações positivas e fale de algo concreto. Nas avaliações negativas, mantenha a calma, peça desculpa pela experiência da pessoa, não discuta e ofereça-se para resolver fora da página pública, com um número de telefone ou um e-mail.",
            "Nas reclamações, use um padrão simples: ouvir, pedir desculpa, resolver, acompanhar. Peça à IA: \"Ajude-me a responder a esta reclamação. Padrão: reconhecer, pedir desculpa, oferecer esta solução: [a sua solução], convidar a contactar [e-mail].\"",
            "Nunca partilhe dados privados numa resposta pública, como datas de consultas, informações de saúde ou o que alguém comprou. Nunca publique avaliações falsas nem pague por elas. Se uma avaliação tiver ameaças ou acusações falsas, siga o processo de denúncia da plataforma."
          ],
          steps: ["Leia a avaliação duas vezes e espere se estiver chateado.", "Agradeça (positiva) ou reconheça e peça desculpa (negativa).", "Ofereça uma solução concreta ou uma forma de falar em privado.", "Não ponha dados privados nas respostas públicas.", "Acompanhe para ter a certeza de que ficou resolvido."],
          words: [["Avaliação", "um comentário público com uma nota sobre um negócio."], ["Em privado", "fora da página pública, por exemplo por telefone ou por e-mail privado."]],
          slides: [
            { title: "As respostas são públicas", bullets: ["Toda a gente as lê", "Agradeça com algo concreto a quem avalia bem"] },
            { title: "Avaliações negativas", bullets: ["Mantenha a calma, não discuta", "Peça desculpa pela experiência da pessoa", "Ofereça-se para resolver em privado"] },
            { title: "Padrão para reclamações", bullets: ["Ouvir, pedir desculpa, resolver, acompanhar", "Nada de dados privados em público", "Nunca avaliações falsas"] }
          ],
          tryIt: "Escreva com a ajuda da IA respostas a uma avaliação positiva, a uma avaliação negativa e a uma reclamação (reais ou inventadas). Verifique em cada uma se o tom é calmo e se não há dados privados.",
          youCanNow: "responder a avaliações e reclamações com calma, de forma útil e sem partilhar dados privados.",
          quickCheck: [
            { objective: "O3", q: "O que deve ter uma resposta a uma avaliação positiva?", options: ["Um código de desconto para todos", "Uma discussão sobre as estrelas", "Um agradecimento e algo concreto da avaliação", "A data da consulta do cliente"], answer: 2, why: "Agradeça e fale de algo concreto para a resposta parecer verdadeira." },
            { objective: "O3", q: "Um utente publica que a sua clínica o fez esperar uma hora. Como responde em público?", options: ["Reconhece, pede desculpa e oferece-se para falar em privado por telefone ou e-mail", "Explica os dados da consulta e o motivo médico da espera", "Diz que ele está errado", "Apaga a página do seu negócio"], answer: 0, why: "Mantenha a calma, peça desculpa, ofereça-se para resolver em privado e não ponha dados privados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer e responder aos seus clientes",
        questions: [
          { objective: "O1", q: "O que mostra um mapa da jornada do cliente?", options: ["Só o percurso da sua carrinha de entregas", "O saldo da sua conta bancária", "Cada passo que um cliente dá consigo", "Os horários dos funcionários"], answer: 2, why: "Mostra cada passo e como o cliente se sente." },
          { objective: "O1", q: "Qual destes é um ponto de contacto?", options: ["Uma chamada com um cliente", "Só a cor das paredes do escritório", "A sua declaração de impostos", "A fatura de um fornecedor"], answer: 0, why: "Os pontos de contacto são momentos em que um cliente lida com você." },
          { objective: "O2", q: "O que deve fazer sempre antes de enviar uma resposta escrita com a IA?", options: ["Enviá-la sem ler", "Pôr mais emojis", "Tirar o nome do cliente", "Personalizá-la e verificar os dados"], answer: 3, why: "Respostas pessoais e certas criam confiança." },
          { objective: "O3", q: "Um cliente deixa uma avaliação zangada. Qual é o melhor primeiro passo?", options: ["Discutir em público", "Manter a calma, pedir desculpa pela experiência e oferecer-se para resolver em privado", "Publicar os dados da consulta dele", "Ignorar para sempre"], answer: 1, why: "Respostas calmas e úteis mostram a quem lê que você se importa." },
          { objective: "O3", q: "O que nunca deve aparecer numa resposta pública a uma avaliação?", options: ["\"Obrigado\"", "As informações de saúde do cliente", "Uma oferta para falar por telefone", "O nome do seu negócio"], answer: 1, why: "Os dados privados ficam fora das respostas públicas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aprender com os comentários e melhorar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Analisar comentários com a IA",
          minutes: 6,
          goal: "Usar a IA para organizar os comentários dos clientes por temas e encontrar os problemas principais.",
          text: [
            "Os comentários estão escondidos em muitos lugares: avaliações, inquéritos, e-mails, comentários nas redes sociais e notas dos funcionários. Ler tudo à mão leva horas. A IA consegue organizar tudo em minutos.",
            "Junte pelo menos 15 comentários num documento. Tire os nomes, os números de telefone e outros dados privados. Depois peça: \"Organize estes comentários por temas. Para cada tema, conte quantos comentários falam dele, diga se é positivo ou negativo e dê uma frase de exemplo.\"",
            "Verifique o trabalho da IA: leia alguns comentários de cada tema para confirmar que pertencem ali. A IA pode contar mal ou juntar problemas diferentes. O resultado é a sua lista de problemas principais, ordenada pelo número de vezes que aparecem e pelo mal que fazem à experiência."
          ],
          steps: ["Junte pelo menos 15 comentários de avaliações, inquéritos e e-mails.", "Tire os nomes e os dados privados.", "Peça à IA para os organizar por temas, com contagens e exemplos.", "Verifique alguns comentários de cada tema.", "Ordene os três problemas principais."],
          words: [["Comentários (feedback)", "o que os clientes lhe dizem sobre a experiência deles."], ["Tema", "um assunto que aparece muitas vezes."], ["Sentimento", "se um comentário é positivo, negativo ou neutro."]],
          slides: [
            { title: "Há comentários em todo o lado", bullets: ["Avaliações, inquéritos, e-mails", "Comentários nas redes sociais, notas dos funcionários"] },
            { title: "Deixe a IA organizar", bullets: ["Tire primeiro os dados privados", "Peça temas, contagens, sentimento e um exemplo"] },
            { title: "Verificar e ordenar", bullets: ["Verifique alguns comentários de cada tema", "Ordene pelo número de vezes e pelo mal que faz"] }
          ],
          tryIt: "Junte pelo menos 15 comentários reais ou de exemplo, tire os dados privados e peça à IA para os organizar por temas. Verifique os resultados e faça a lista dos seus três problemas principais.",
          youCanNow: "transformar um monte de comentários de clientes numa lista ordenada dos problemas principais.",
          quickCheck: [
            { objective: "O4", q: "Porque deve verificar os temas que a IA cria?", options: ["A IA acerta sempre", "Para a lista ficar mais comprida", "Para voltar a pôr os nomes dos clientes", "A IA pode contar mal ou juntar problemas diferentes"], answer: 3, why: "Ler alguns comentários de cada tema apanha os erros de contagem e os problemas misturados." },
            { objective: "O4", q: "Oito comentários falam de respostas lentas e dois falam do estacionamento. Qual ordena mais acima?", options: ["O estacionamento, porque é mais fácil", "As respostas lentas, porque mais pessoas falam disso", "Nenhum; ignora os dois", "O que a IA puser primeiro"], answer: 1, why: "Ordene os problemas pelo número de vezes que aparecem e pelo mal que fazem." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Personalizar o serviço sem perder a confiança",
          minutes: 5,
          goal: "Usar a IA para personalizar mensagens protegendo a privacidade dos clientes e sendo honesto.",
          text: [
            "Os toques pessoais fazem as pessoas sentir-se valorizadas: um desconto no aniversário, um lembrete antes da próxima consulta de um utente, ou uma nota de agradecimento a um doador que fala do programa que ele apoiou.",
            "A IA pode ajudar a escrever estas mensagens para muitas pessoas a partir de um modelo. Dê-lhe só os dados de que precisa, como o primeiro nome e o tipo de serviço, e não fichas completas. Use o seu próprio sistema de clientes ou ferramenta de e-mail para inserir os nomes, em vez de colar listas de clientes numa ferramenta de IA geral.",
            "Seja honesto: se um chatbot ou uma IA responde aos clientes, diga-o. Torne fácil falar com uma pessoa. Só envie mensagens a quem aceitou recebê-las, e torne fácil cancelar."
          ],
          steps: ["Escolha um momento pessoal: um agradecimento, um lembrete ou um seguimento.", "Peça à IA um modelo com marcadores como [Primeiro nome].", "Insira os nomes com a sua própria ferramenta de e-mail ou de clientes.", "Diga claramente quando um cliente está a falar com IA.", "Ofereça sempre uma forma de falar com uma pessoa."],
          words: [["Marcador", "uma marca como [Primeiro nome] que é trocada pelos dados reais."], ["Cancelar a subscrição", "escolher deixar de receber mensagens."]],
          slides: [
            { title: "Toques pessoais", bullets: ["Agradecimentos e lembretes", "Fale do que é importante para a pessoa"] },
            { title: "Proteja a privacidade", bullets: ["Use marcadores como [Primeiro nome]", "Insira os nomes na sua própria ferramenta", "Nada de listas de clientes em ferramentas de IA gerais"] },
            { title: "Seja honesto", bullets: ["Diga quando é a IA a responder", "Fácil falar com uma pessoa", "Fácil cancelar"] }
          ],
          tryIt: "Escreva com a IA um modelo personalizado de agradecimento ou de seguimento, com marcadores. Verifique que não pede dados privados e que oferece uma forma de falar com uma pessoa.",
          youCanNow: "personalizar mensagens para clientes com a IA, protegendo a privacidade e sendo honesto.",
          quickCheck: [
            { objective: "O5", q: "Qual é a forma mais segura de enviar uma nota de agradecimento a 200 doadores?", options: ["Usar um modelo com [Primeiro nome] e inserir os nomes na sua própria ferramenta de e-mail", "Colar a lista completa de doadores numa ferramenta de IA gratuita", "Escrever cada nota à mão sem verificar", "Publicar todos os nomes nas redes sociais"], answer: 0, why: "Insira os nomes na sua própria ferramenta para a lista de doadores nunca entrar numa ferramenta de IA geral." },
            { objective: "O5", q: "O chatbot do seu site responde às perguntas dos clientes. O que tem de acrescentar?", options: ["Um nome falso de funcionário", "Nada; os clientes preferem não saber", "Um aviso claro de que é IA e uma forma de falar com uma pessoa", "Um pedido de números de cartão"], answer: 2, why: "Ser honesto sobre ser IA e oferecer uma pessoa cria confiança." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Transformar o que aprendeu num plano de melhoria de 30 dias",
          minutes: 5,
          goal: "Transformar os seus problemas principais num plano de 30 dias com responsáveis e medidas.",
          text: [
            "O que aprende só conta se alguma coisa mudar. Para cada um dos seus três problemas principais, escolha uma ação que possa fazer em 30 dias. Exemplo: \"Os clientes dizem que esperam demasiado pelos orçamentos\" passa a \"Enviar cada orçamento em 24 horas usando um modelo de orçamento escrito com a IA.\"",
            "Dê a cada ação um responsável e uma medida: um número que mostre se funcionou, como o tempo médio de resposta, a nota das avaliações, as visitas repetidas ou as reclamações por semana.",
            "Diga aos clientes o que mudou: \"Vocês disseram-nos, nós ouvimos.\" Depois de 30 dias, veja as medidas, fique com o que funcionou e escolha o problema seguinte."
          ],
          steps: ["Escreva uma ação para cada problema principal.", "Dê a cada ação um responsável.", "Escolha uma medida para cada uma.", "Anote o número de partida.", "Volte a ver depois de 30 dias e partilhe o que mudou."],
          words: [["Conclusão", "uma compreensão útil que vem de estudar informação."], ["Medida", "um número que mostra se uma mudança funcionou."]],
          slides: [
            { title: "Da conclusão à ação", bullets: ["Uma ação para cada problema principal", "Possível de fazer em 30 dias"] },
            { title: "Responsável e medida", bullets: ["Quem faz", "Tempo de resposta, notas, visitas repetidas, reclamações"] },
            { title: "Fechar o ciclo", bullets: ["\"Vocês disseram-nos, nós ouvimos\"", "Veja aos 30 dias", "Escolha o problema seguinte"] }
          ],
          tryIt: "Tarefa final: escreva um plano de melhoria de 30 dias para os seus três problemas principais, com uma ação, um responsável, uma medida e um número de partida para cada um. Junte-o ao mapa da jornada, aos modelos e ao resumo dos comentários para completar o seu kit de experiência do cliente.",
          youCanNow: "encontrar, resolver e medir problemas da experiência do cliente com a ajuda da IA.",
          quickCheck: [
            { objective: "O6", q: "O que é uma medida num plano de melhoria?", options: ["A pessoa responsável", "Um número que mostra se a ação funcionou", "O nome do cliente", "A data em que abriu o negócio"], answer: 1, why: "Uma medida é um número, como o tempo médio de resposta, que mostra se a ação funcionou." },
            { objective: "O6", q: "Os clientes dizem que não encontram o seu horário. Qual é uma boa ação de 30 dias?", options: ["Esperar para ver se melhora", "Pedir à IA para escrever avaliações sobre o seu horário", "Tirar o horário de todo o lado", "Pôr o horário em todas as páginas e perfis, com um responsável e uma medida"], answer: 3, why: "Cada problema principal recebe uma ação clara, um responsável e uma medida." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Aprender com os comentários e melhorar",
        questions: [
          { objective: "O4", q: "Antes de colar comentários de clientes na IA, deve:", options: ["Acrescentar os números de telefone deles", "Acrescentar os números de cartão deles", "Nada", "Tirar os nomes e os dados privados"], answer: 3, why: "A privacidade vem primeiro." },
          { objective: "O4", q: "A IA organiza os comentários por temas. O que faz a seguir?", options: ["Verifica alguns comentários de cada tema", "Confia totalmente", "Apaga os comentários", "Publica os temas com os nomes"], answer: 0, why: "A IA pode contar mal ou juntar problemas." },
          { objective: "O5", q: "O que é um marcador?", options: ["Uma avaliação falsa", "Um tipo de reclamação", "Uma marca como [Primeiro nome] trocada pelos dados reais", "A palavra-passe de um cliente"], answer: 2, why: "Os marcadores deixam personalizar com segurança." },
          { objective: "O5", q: "Um chatbot responde aos seus clientes. O que lhes deve dizer?", options: ["Que é um funcionário verdadeiro", "Nada", "Que parem de fazer perguntas", "Que é IA e como podem falar com uma pessoa"], answer: 3, why: "A honestidade cria confiança." },
          { objective: "O6", q: "Qual é uma boa medida para a ação \"enviar orçamentos em 24 horas\"?", options: ["Número de plantas no escritório", "Idade do dono", "Tempo médio para enviar um orçamento", "Cores do site"], answer: 2, why: "A medida tem de mostrar se a ação funcionou." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Experiência do Cliente",
    questions: [
      { objective: "O1", q: "A experiência do cliente é:", options: ["Só o preço", "Como as pessoas se sentem em cada momento em que lidam com você", "Só o seu site", "O salário dos seus funcionários"], answer: 1, why: "Inclui todos os pontos de contacto." },
      { objective: "O1", q: "Qual é o primeiro passo da jornada de um cliente?", options: ["Descobrir: como o encontram", "Deixar uma avaliação", "Pagar", "Voltar"], answer: 0, why: "A jornada começa quando o encontram." },
      { objective: "O1", q: "Numa organização sem fins lucrativos, os \"clientes\" podem ser:", options: ["Só quem compra e paga", "Só a direção", "Utentes, famílias, doadores e voluntários", "Ninguém"], answer: 2, why: "Qualquer pessoa que a organização serve ou de quem depende." },
      { objective: "O1", q: "A IA pode ajudar num mapa da jornada:", options: ["Sugerindo irritações que lhe podem ter escapado", "Substituindo os seus clientes", "Recolhendo números de cartão", "Escrevendo avaliações falsas"], answer: 0, why: "Ela dá ideias; você compara com a realidade." },
      { objective: "O2", q: "Um modelo de resposta é:", options: ["Um contrato legal", "Um inquérito", "Um site de avaliações", "Uma resposta já feita que você ajusta para cada pessoa"], answer: 3, why: "Os modelos tornam as respostas mais rápidas." },
      { objective: "O2", q: "O que deve dar à IA quando faz um modelo?", options: ["As palavras-passe dos clientes", "O seu tom e os dados verdadeiros", "Nada", "As avaliações de um concorrente"], answer: 1, why: "Os dados e o tom dão respostas certas e com o seu estilo." },
      { objective: "O2", q: "Um modelo da IA diz que abre às 8 horas, mas você abre às 9. O que faz?", options: ["Envia na mesma", "Corrige o dado antes de o usar", "Muda o seu horário", "Culpa o cliente"], answer: 1, why: "Verifique sempre os dados." },
      { objective: "O3", q: "Para quem é, na verdade, uma resposta pública a uma avaliação?", options: ["Só para quem a escreveu", "Para ninguém", "Para o dono do site de avaliações", "Para todos os que leem as avaliações"], answer: 3, why: "Os futuros clientes leem as suas respostas." },
      { objective: "O3", q: "O padrão para reclamações deste curso é:", options: ["Ouvir, pedir desculpa, resolver, acompanhar", "Discutir, negar, apagar, ignorar", "Esperar, esperar, esperar, esperar", "Devolver sempre todo o dinheiro"], answer: 0, why: "Esse padrão transforma reclamações em confiança." },
      { objective: "O3", q: "Escrever avaliações sobre o seu próprio negócio é:", options: ["Uma boa estratégia", "Obrigatório", "Enganador e nunca se deve fazer", "Aceitável com IA"], answer: 2, why: "As avaliações falsas enganam os clientes." },
      { objective: "O3", q: "Uma avaliação tem ameaças. Você deve:", options: ["Ameaçar de volta", "Publicar a morada da pessoa", "Ignorar todas as avaliações", "Usar o processo de denúncia da plataforma"], answer: 3, why: "As plataformas têm processos para conteúdos abusivos." },
      { objective: "O4", q: "Quantos comentários o curso sugere juntar para a análise?", options: ["Exatamente 1", "Nenhum", "Pelo menos 15", "Pelo menos 10,000"], answer: 2, why: "Quinze ou mais mostram padrões reais." },
      { objective: "O4", q: "Um tema é:", options: ["O desenho de um site", "Um assunto que aparece muitas vezes", "Uma única reclamação", "Um código de desconto"], answer: 1, why: "Os temas mostram os problemas comuns." },
      { objective: "O4", q: "Sentimento quer dizer:", options: ["Se um comentário é positivo, negativo ou neutro", "O tamanho de um comentário", "Quem o escreveu", "A data dele"], answer: 0, why: "O sentimento é o que a pessoa sente por trás do comentário." },
      { objective: "O4", q: "Os problemas principais devem ser ordenados:", options: ["Por ordem alfabética", "Por quem reclamou mais alto", "Pelo número de vezes que aparecem e pelo mal que fazem", "Ao acaso"], answer: 2, why: "A frequência e o impacto mostram as prioridades." },
      { objective: "O5", q: "A forma mais segura de pôr os nomes dos clientes em muitas mensagens é:", options: ["Usar marcadores e inserir os nomes na sua própria ferramenta de e-mail ou de clientes", "Colar a lista completa de clientes numa ferramenta de IA geral", "Adivinhar os nomes", "Publicar a lista"], answer: 0, why: "A sua própria ferramenta mantém os dados dos clientes sob o seu controlo." },
      { objective: "O5", q: "Deve enviar mensagens aos clientes que:", options: ["Nunca lhe deram o contacto", "Pediram para parar", "Encontrou na internet", "Aceitaram receber mensagens suas"], answer: 3, why: "O consentimento é importante, e os pedidos para cancelar têm de ser respeitados." },
      { objective: "O6", q: "Cada ação de melhoria precisa de:", options: ["Um logótipo novo", "Um responsável e uma medida", "Um escritório maior", "Nada"], answer: 1, why: "Os responsáveis fazem acontecer; as medidas mostram se funcionou." },
      { objective: "O6", q: "\"Vocês disseram-nos, nós ouvimos\" é uma forma de:", options: ["Esconder problemas", "Mostrar aos clientes o que mudou", "Pedir palavras-passe", "Subir os preços"], answer: 1, why: "Fechar o ciclo cria clientes fiéis." },
      { objective: "O6", q: "Depois de 30 dias, deve:", options: ["Deixar de ouvir os clientes", "Apagar o plano", "Nunca verificar", "Ver as medidas, ficar com o que funcionou e escolher o problema seguinte"], answer: 3, why: "Melhorar é um ciclo que se repete." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 4, 6, 8, 9, 12, 14, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Mapa da jornada", objective: "O1", notYet: "Faltam passos, ou os momentos mais fracos não estão marcados.", meets: "Os cinco passos com o que o cliente faz e sente, e os três momentos mais fracos marcados.", exceeds: "Cada momento fraco está ligado a comentários reais ou a algo que um funcionário observou." },
      { name: "Modelos de resposta", objective: "O2", notYet: "Menos de cinco modelos, ou um modelo tem dados errados.", meets: "Cinco modelos (pergunta, avaliação positiva, avaliação negativa, reclamação, seguimento) com dados verdadeiros e um tom caloroso.", exceeds: "Cada modelo tem marcadores e uma nota sobre o que personalizar." },
      { name: "Respostas a avaliações e reclamações", objective: "O3", notYet: "Uma resposta discute, culpa ou partilha dados privados.", meets: "As respostas são calmas, pedem desculpa quando é preciso e oferecem uma solução ou uma forma de falar em privado.", exceeds: "Inclui um passo de acompanhamento para confirmar que o problema ficou resolvido." },
      { name: "Resumo dos comentários", objective: "O4", notYet: "Menos de 15 comentários, ou ficaram nomes.", meets: "Pelo menos 15 comentários sem dados privados, organizados por temas, com os três problemas principais ordenados.", exceeds: "Mostra que temas foram verificados e os erros da IA que foram corrigidos." },
      { name: "Plano de 30 dias", objective: "O6", notYet: "As ações não têm responsável nem medida.", meets: "Uma ação, um responsável e uma medida para cada problema principal, com um número de partida.", exceeds: "Inclui como os clientes vão saber o que mudou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Tempo médio de resposta às perguntas dos clientes, antes do curso e 30 dias depois",
      "Nota média das avaliações e número de reclamações por semana, antes e 60 dias depois",
      "Organizações que completam pelo menos um ciclo de melhoria de 30 dias (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Um documento para os modelos e uma folha de cálculo ou documento para o resumo dos comentários e o plano",
      "Pelo menos 15 comentários de clientes, reais ou de exemplo, sem dados privados",
      "Cerca de 60 minutos para as lições e as verificações, mais o tempo para fazer o kit"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; escrevam um modelo e uma resposta a uma reclamação num ecrã partilhado.",
      "Tenha um conjunto de comentários de exemplo para os alunos que ainda não têm comentários reais.",
      "Confirme que os nomes, os números de telefone e os dados de saúde foram tirados antes de qualquer comentário entrar na IA.",
      "Faça o papel de um cliente zangado para os alunos praticarem em voz alta: ouvir, pedir desculpa, resolver, acompanhar.",
      "Avalie o kit final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
