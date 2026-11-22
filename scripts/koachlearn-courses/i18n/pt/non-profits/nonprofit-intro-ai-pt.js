"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-intro-ai-pt",
  lang: "pt",
  translationOf: "nonprofit-intro-ai",
  category: "Non Profits",
  name: "Introdução à IA para Organizações sem Fins Lucrativos",
  skills: "Explicar a IA à sua equipa, Escrever pedidos claros para tarefas da organização, Melhorar um rascunho, Verificar os factos, Proteger a privacidade de doadores e beneficiários",
  outcome: "usar um assistente de IA gratuito para fazer o rascunho de um texto real da sua organização, como um agradecimento aos voluntários ou o anúncio de um evento: pedir com clareza, melhorar o rascunho, verificar cada facto e não colocar nele informações de doadores e beneficiários.",
  about: [
    "Este curso é para líderes, funcionários e voluntários de organizações sem fins lucrativos e de organizações religiosas que já ouviram falar de IA mas a usaram pouco, ou que a querem usar com mais segurança.",
    "Você vai aprender o que é um assistente de IA, como abrir um de graça, como pedir os textos de que a sua organização precisa todas as semanas, como melhorar e verificar o rascunho e como proteger as pessoas que serve.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Use um assistente de IA gratuito para fazer o rascunho de uma nota de agradecimento aos voluntários que ajudaram num evento recente (uma recolha de alimentos, um dia de limpeza ou um jantar da igreja). Use um pedido com três partes, peça duas melhorias, verifique cada facto e cada data nos registos da sua organização, confirme que nenhum dado privado de voluntários ou doadores está no pedido e corrija a nota final para que soe como a sua organização.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Líderes, funcionários e voluntários de organizações sem fins lucrativos e de organizações religiosas, muitas vezes em organizações pequenas e igrejas, que já ouviram falar de IA mas a usaram pouco, ou que a querem usar com mais segurança.",
    startingPoint: "Usam o e-mail, o telefone e o computador no trabalho do dia a dia, e escrevem à mão notas de agradecimento, anúncios e boletins informativos. Usam pouco ou nada assistentes de IA.",
    gap: "As equipas pequenas gastam muitas horas a escrever textos que um assistente de IA podia rascunhar em minutos, mas o uso descuidado pode espalhar números inventados ou expor informações de doadores, voluntários e beneficiários. Os alunos precisam de uma forma simples e segura de usar a IA que poupe tempo e mantenha a confiança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone, um computador do escritório ou um portátil partilhado do escritório da igreja",
      "Tempo: voluntários e funcionários com pouco tempo livre, por isso cada lição dura cerca de 5 minutos",
      "Privacidade: nenhum dado privado de doadores, voluntários ou beneficiários nas ferramentas de IA; siga a política de privacidade da organização",
      "Use só as ferramentas de IA que a organização aprova para informações de trabalho"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas da organização", action: "identificar em que tarefas um assistente de IA pode ajudar e quais precisam de uma pessoa ou de uma fonte oficial", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Usando um telefone ou um computador", action: "abrir um assistente de IA gratuito ou aprovado a partir do seu site ou aplicação oficial e terminar a sessão no fim", standard: "sem ajuda" },
    { id: "O3", condition: "Com um texto real da organização para escrever", action: "escrever um pedido com três partes que diga o que precisa, a situação e o formato", standard: "com marcadores no lugar dos dados privados" },
    { id: "O4", condition: "Com um primeiro rascunho que não serve", action: "fazer pedidos de seguimento, um de cada vez, para o mudar", standard: "até ficar com o estilo da sua organização, em no máximo três tentativas" },
    { id: "O5", condition: "Com um rascunho da IA que tem números, datas ou afirmações", action: "verificar cada facto nos seus registos ou numa fonte oficial", standard: "antes de chegar aos doadores, aos voluntários ou ao público" },
    { id: "O6", condition: "Quando usa a IA no trabalho com doadores, voluntários ou beneficiários", action: "deixar de fora as informações privadas usando marcadores", standard: "sem partilhar nomes com doações, moradas, notas de caso ou dados de saúde ou de imigração" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que a IA pode fazer por uma organização sem fins lucrativos",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é um assistente de IA, e o que não é",
          minutes: 4,
          goal: "Explicar a um colega ou voluntário o que um assistente de IA pode e não pode fazer pela sua organização.",
          text: [
            "Um assistente de IA é um programa de computador com quem você conversa com palavras do dia a dia. Você escreve um pedido e ele escreve uma resposta em segundos. Alguns conhecidos com versão gratuita são o ChatGPT, o Microsoft Copilot e o Google Gemini.",
            "Para uma organização sem fins lucrativos, ele é bom a fazer primeiros rascunhos: notas de agradecimento, artigos para o boletim, mensagens para inscrever voluntários, agendas de reuniões, publicações para as redes sociais, e resumos curtos de relatórios longos.",
            "Ele não é um funcionário, um advogado, um contabilista nem um responsável de subsídios. Não conhece os seus doadores, os seus programas nem a sua comunidade, e pode estar errado mesmo quando parece seguro. Uma pessoa da sua equipa revê sempre e decide."
          ],
          words: [["IA", "abreviatura de inteligência artificial: programas de computador que fazem tarefas que normalmente precisam de uma pessoa, como escrever ou resumir."], ["Assistente de IA", "um programa de IA com quem você conversa, a escrever ou a falar."], ["Primeiro rascunho", "uma primeira versão que depois uma pessoa verifica e melhora."]],
          slides: [
            { title: "Um assistente de IA é...", bullets: ["Um programa de computador com quem você conversa", "Você pede com palavras do dia a dia", "Ele escreve um rascunho em segundos"] },
            { title: "Bom para primeiros rascunhos da organização", bullets: ["Notas de agradecimento e boletins", "Mensagens para inscrever voluntários e agendas", "Resumos curtos de relatórios longos"] },
            { title: "Ele NÃO é", bullets: ["Um advogado, contabilista ou responsável de subsídios", "Sempre certo, mesmo quando parece seguro", "Quem decide: quem decide é a sua equipa"] }
          ],
          tryIt: "Escreva três textos que a sua organização faz todos os meses (por exemplo um lembrete aos voluntários, um agradecimento a um doador e um boletim). Faça um círculo à volta do que leva mais tempo. Essa é a sua primeira tarefa com IA.",
          youCanNow: "dizer o que é um assistente de IA, dar três tarefas da organização em que ele pode ajudar e dizer porque uma pessoa continua a rever o trabalho dele.",
          quickCheck: [
            { objective: "O1", q: "Em que é que um assistente de IA é bom para uma organização sem fins lucrativos?", options: ["Primeiros rascunhos, como notas de agradecimento e artigos para o boletim", "Conhecer pessoalmente os seus doadores", "Tomar as decisões finais pela sua direção", "Dar conselhos legais em que pode confiar"], answer: 0, why: "A IA é boa a fazer primeiros rascunhos; uma pessoa da sua equipa revê e decide." },
            { objective: "O1", q: "Um voluntário diz: \"Deixem a IA decidir quem recebe os cabazes de alimentos deste mês.\" O que responde?", options: ["Boa ideia; a IA conhece a nossa comunidade", "Não; a IA pode fazer rascunhos, mas quem decide são as pessoas da nossa equipa", "Só se a IA parecer segura", "Sim, mas só para as famílias novas"], answer: 1, why: "A IA não conhece a sua comunidade e pode estar errada; quem decide é a sua equipa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir um assistente de IA gratuito",
          minutes: 4,
          goal: "Abrir um assistente de IA gratuito num telefone ou computador e encontrar onde escrever.",
          text: [
            "Pode usar um assistente de IA num smartphone ou em qualquer computador com internet, incluindo um computador do escritório ou o portátil do escritório da igreja.",
            "No computador, abra o navegador de internet e escreva o endereço: chatgpt.com, copilot.microsoft.com ou gemini.google.com. No telefone, instale a aplicação oficial a partir da loja de aplicações, feita pela empresa verdadeira (OpenAI, Microsoft ou Google).",
            "Se a sua organização já usa o Microsoft 365 ou o Google Workspace (pacotes de ferramentas de trabalho), pergunte ao administrador que ferramenta de IA está aprovada. Uma conta de trabalho pode ter proteções de privacidade extra que uma conta pessoal não tem.",
            "Num computador partilhado do escritório, não deixe o navegador guardar a sua palavra-passe, e termine a sessão quando acabar."
          ],
          steps: ["Pergunte se a sua organização tem uma ferramenta de IA aprovada.", "Computador: escreva o endereço do site no navegador. Telefone: instale a aplicação oficial.", "Encontre a caixa de mensagem perto do fundo do ecrã.", "Num computador partilhado, termine a sessão e feche o navegador quando acabar."],
          words: [["Navegador de internet", "o programa que usa para visitar sites, como o Chrome, o Edge ou o Safari."], ["Administrador", "a pessoa que gere as contas e as configurações da sua organização."]],
          slides: [
            { title: "Onde usar", bullets: ["Computador do escritório ou de casa", "Aplicação no smartphone, da loja oficial", "A ferramenta de trabalho aprovada pela sua organização"] },
            { title: "Endereços de sites", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Pergunte primeiro", bullets: ["Que ferramenta de IA a nossa organização aprova?", "As contas de trabalho podem proteger melhor os dados"] },
            { title: "Num computador partilhado", bullets: ["Não guarde a sua palavra-passe", "Termine a sessão e feche o navegador"] }
          ],
          tryIt: "Abra um assistente de IA gratuito. Escreva: Sou voluntário numa organização sem fins lucrativos e estou a aprender a usar IA. Diga-me três formas de me ajudar esta semana. Leia a resposta.",
          youCanNow: "abrir um assistente de IA gratuito, encontrar onde escrever e saber que ferramenta a sua organização aprova.",
          quickCheck: [
            { objective: "O2", q: "Onde deve obter uma aplicação de IA para o telefone?", options: ["Num link enviado por SMS por um desconhecido", "Em qualquer aplicação com um nome parecido", "Na loja de aplicações, feita pela empresa verdadeira", "Num anúncio que aparece no ecrã"], answer: 2, why: "Instale a aplicação oficial feita pela empresa verdadeira, como a OpenAI, a Microsoft ou a Google." },
            { objective: "O2", q: "Acabou de usar IA no portátil do escritório da igreja. O que faz?", options: ["Deixa aberto para a próxima pessoa", "Guarda a sua palavra-passe no navegador", "Só desliga o ecrã", "Termina a sessão e fecha o navegador"], answer: 3, why: "Num computador partilhado, não guarde a sua palavra-passe e termine a sessão quando acabar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pedir um texto da organização com um pedido claro",
          minutes: 5,
          goal: "Escrever um pedido com três partes que dê um rascunho útil à primeira.",
          text: [
            "O que você escreve chama-se pedido (em inglês, \"prompt\"). Um bom pedido tem três partes: o que você precisa, a situação (sem dados privados) e como quer a resposta.",
            "Exemplo: \"Escreva um e-mail curto de agradecimento a 25 voluntários que ajudaram na nossa recolha de alimentos de sábado. Servimos 140 famílias. Use um tom caloroso, menos de 120 palavras, e termine com a data da próxima recolha: [data].\"",
            "Um pedido fraco como \"carta de agradecimento\" obriga o assistente a adivinhar, por isso a resposta é geral. Diga-lhe quem vai ler e que tom serve a sua organização: caloroso, formal, alegre ou de fé."
          ],
          steps: ["Diga o que precisa e quem vai ler.", "Acrescente a situação: o evento, os números, o objetivo. Sem nomes nem dados privados.", "Diga como quer: o tamanho, o tom, o formato.", "Use um marcador como [data] para tudo o que vai preencher você mesmo."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."], ["Tom", "a forma como um texto soa, por exemplo caloroso, formal ou alegre."], ["Marcador", "uma marca como [data] que depois você mesmo substitui."]],
          slides: [
            { title: "Três partes de um bom pedido", bullets: ["1. O que precisa e quem vai ler", "2. A situação, sem dados privados", "3. Tamanho, tom e formato"] },
            { title: "Fraco e claro", bullets: ["Fraco: \"carta de agradecimento\"", "Claro: e-mail de agradecimento a 25 voluntários da recolha de alimentos", "140 famílias servidas, tom caloroso, menos de 120 palavras"] },
            { title: "Use marcadores", bullets: ["[data], [nome], [valor]", "Depois você mesmo os preenche"] }
          ],
          tryIt: "Pegue na tarefa que marcou com um círculo na Lição 1. Escreva um pedido com três partes para ela, com marcadores no lugar dos nomes e das datas, e envie-o. Guarde a resposta.",
          youCanNow: "escrever um pedido claro com três partes para um texto da sua organização.",
          quickCheck: [
            { objective: "O3", q: "O que é um pedido (prompt)?", options: ["O que você escreve ao assistente de IA", "A resposta da IA", "A sua palavra-passe", "Um formulário de subsídio"], answer: 0, why: "O que você escreve chama-se pedido (prompt)." },
            { objective: "O3", q: "Precisa de um folheto para um jantar da igreja. Que pedido é o melhor?", options: ["\"folheto\"", "\"Escreva um folheto alegre para o nosso jantar da igreja no dia [data] às 18h, grátis para as famílias, com menos de 60 palavras.\"", "\"Faça uma coisa bonita\"", "\"Jantar\""], answer: 1, why: "Um bom pedido diz o que precisa, a situação e o formato." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que a IA pode fazer por uma organização sem fins lucrativos",
        questions: [
          { objective: "O1", q: "Que tarefa serve bem para um assistente de IA numa organização sem fins lucrativos?", options: ["Fazer o rascunho de um e-mail de agradecimento aos voluntários", "Decidir que família recebe alimentos", "Assinar um contrato de subsídio", "Aprovar o orçamento"], answer: 0, why: "A IA é boa a fazer primeiros rascunhos; as pessoas tomam as decisões e assinam." },
          { objective: "O1", q: "A IA dá uma resposta segura sobre o prazo de um subsídio. O que faz?", options: ["Confia nela", "Verifica na página oficial do financiador", "Publica-a nas redes sociais", "Envia-a à direção como versão final"], answer: 1, why: "A IA pode estar errada mesmo quando parece segura; verifique na fonte oficial." },
          { objective: "O2", q: "Antes de usar a IA com informações de trabalho, a quem deve perguntar?", options: ["A um doador", "A um desconhecido na internet", "Ao administrador ou a um líder da sua organização", "A ninguém"], answer: 2, why: "A sua organização pode ter uma ferramenta aprovada com melhores proteções de privacidade." },
          { objective: "O3", q: "Qual é o pedido mais claro?", options: ["\"carta\"", "\"ajuda com voluntários\"", "\"faça o nosso boletim\"", "\"Escreva um e-mail de agradecimento caloroso, com 100 palavras, a 25 voluntários da recolha de alimentos que serviram 140 famílias.\""], answer: 3, why: "Diz o quê, a situação e o formato." },
          { objective: "O3", q: "O que é um marcador num pedido?", options: ["Uma marca como [data] que preenche depois", "Uma palavra-passe", "O nome completo de um doador", "Um tipo de aplicação"], answer: 0, why: "Os marcadores deixam os dados reais de fora e lembram-lhe o que tem de preencher." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a IA bem e com segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Melhorar o rascunho",
          minutes: 4,
          goal: "Usar pedidos de seguimento para transformar um primeiro rascunho num texto que sirva a sua organização.",
          text: [
            "A primeira resposta é um rascunho. O assistente lembra-se da conversa, por isso pode pedir-lhe mudanças, uma de cada vez.",
            "Pedidos de seguimento úteis: \"Faça mais curto.\" \"Faça soar mais caloroso.\" \"Acrescente uma frase sobre a importância dos voluntários para a nossa missão.\" \"Escreva para um nível de leitura do 6.º ano.\" \"Dê-me uma versão em espanhol.\"",
            "Depois torne-o seu. Acrescente você mesmo os nomes e os detalhes reais, depois de copiar o texto para fora da ferramenta de IA, e leia-o como se fosse o voluntário ou o doador que o vai receber."
          ],
          steps: ["Leia o primeiro rascunho.", "Escolha a coisa que mais precisa de mudar.", "Peça essa mudança.", "Repita, depois copie o texto para fora e acrescente você mesmo os detalhes reais."],
          words: [["Pedido de seguimento", "um segundo pedido que parte da resposta que já recebeu."], ["Nível de leitura", "a facilidade de leitura de um texto; um ano escolar mais baixo é mais fácil."]],
          slides: [
            { title: "A primeira resposta é um rascunho", bullets: ["Peça uma mudança de cada vez", "Ele lembra-se da mesma conversa"] },
            { title: "Pedidos de seguimento que funcionam", bullets: ["\"Faça mais curto.\"", "\"Faça soar mais caloroso.\"", "\"Acrescente uma frase sobre a nossa missão.\"", "\"Dê-me uma versão em espanhol.\""] },
            { title: "Torne-o seu", bullets: ["Copie o texto para fora da ferramenta de IA", "Acrescente você mesmo os nomes e detalhes reais", "Leia-o como a pessoa que o vai receber"] }
          ],
          tryIt: "Pegue no rascunho que guardou na Lição 3. Peça duas mudanças, uma de cada vez. Depois copie a melhor versão para um documento e acrescente você mesmo um detalhe pessoal.",
          youCanNow: "melhorar um rascunho da IA com pedidos de seguimento claros e terminá-lo com o estilo próprio da sua organização.",
          quickCheck: [
            { objective: "O4", q: "Porque pode pedir as mudanças uma de cada vez?", options: ["A IA esquece tudo depois de cada mensagem", "As mudanças custam dinheiro", "O assistente lembra-se da conversa", "Só é permitida uma mudança por dia"], answer: 2, why: "O assistente lembra-se da conversa, por isso pode pedir mudanças uma de cada vez." },
            { objective: "O4", q: "O rascunho está bom, mas a maioria dos seus leitores fala espanhol. O que pede?", options: ["\"Faça mais comprido.\"", "\"Acrescente mais factos.\"", "\"Use palavras mais difíceis.\"", "\"Dê-me uma versão em espanhol.\""], answer: 3, why: "Um pedido de seguimento pode pedir uma versão noutra língua que a sua comunidade fala." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar os factos antes de enviar",
          minutes: 5,
          goal: "Encontrar e verificar cada facto num rascunho da IA antes de chegar aos doadores, aos voluntários ou ao público.",
          text: [
            "Os assistentes de IA às vezes inventam coisas: uma data errada, uma estatística que não existe ou uma regra de impostos desatualizada. A isto chama-se \"alucinação\".",
            "Verifique sempre números, datas, nomes, citações, estatísticas, afirmações sobre impostos e leis, e tudo o que diz para que serve uma doação. Verifique nos seus próprios registos, na fonte oficial (muitas vezes uma página .gov, nos Estados Unidos) ou com a pessoa que sabe.",
            "Nunca deixe a IA inventar números de impacto. Se o rascunho diz \"servimos 500 famílias\" e os seus registos dizem 140, use 140. Números honestos mantêm a confiança dos doadores."
          ],
          steps: ["Marque cada número, data, nome e afirmação no rascunho.", "Verifique cada um nos seus registos ou numa fonte oficial.", "Corrija ou tire tudo o que não conseguir confirmar.", "Peça a uma segunda pessoa para ler tudo o que vai para o público."],
          words: [["Alucinação", "quando uma IA escreve algo que parece verdade mas é inventado."], ["Número de impacto", "uma contagem do que o seu programa conseguiu, como as famílias servidas."]],
          slides: [
            { title: "A IA pode inventar coisas", bullets: ["Datas e números errados", "Estatísticas que não existem", "Regras antigas de impostos ou leis"] },
            { title: "Verifique sempre", bullets: ["Números, datas, nomes, citações", "Afirmações sobre impostos e leis", "Para que serve uma doação"] },
            { title: "Números honestos", bullets: ["Use os seus próprios registos", "Nunca deixe a IA inventar números de impacto", "Uma segunda pessoa lê os textos públicos"] }
          ],
          tryIt: "Peça a um assistente de IA: \"Escreva duas frases sobre a necessidade de bancos alimentares no meu distrito.\" Marque cada número que ele der. Tente encontrar cada um num site oficial. Tire os que não conseguir confirmar.",
          youCanNow: "encontrar os factos num rascunho da IA e verificá-los antes de enviar.",
          quickCheck: [
            { objective: "O5", q: "O que é uma alucinação na IA?", options: ["Um texto que parece verdade mas é inventado", "Um erro de ortografia", "Uma resposta lenta", "Uma resposta muito curta"], answer: 0, why: "A IA às vezes inventa uma data, uma estatística ou uma regra; a isto chama-se alucinação." },
            { objective: "O5", q: "O rascunho diz que uma doação de $25 \"alimenta uma família durante um mês\". O seu programa nunca disse isso. O que faz?", options: ["Deixa ficar; os doadores gostam", "Tira ou troca por um facto dos seus próprios registos", "Muda para $20", "Pergunta à IA se é verdade"], answer: 1, why: "Nunca deixe a IA inventar para que serve uma doação; verifique nos seus próprios registos." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger a privacidade de doadores, voluntários e beneficiários",
          minutes: 5,
          goal: "Usar a IA sem colocar nela informações privadas sobre doadores, voluntários ou as pessoas que serve.",
          text: [
            "As pessoas confiam as suas informações à sua organização. Não cole numa ferramenta de IA: nomes de doadores com o valor das doações, moradas, números de telefone, dados de banco ou de cartão, notas de caso de beneficiários, informações de saúde, situação de imigração ou dados de crianças.",
            "Mesmo assim pode ter ajuda. Descreva a situação de forma geral e use marcadores: \"Escreva um agradecimento a [nome do doador] por uma doação de [valor] ao nosso programa para jovens.\" Preencha os dados reais depois de copiar o rascunho para fora.",
            "Siga a política de privacidade da sua organização e pergunte a um líder se tiver dúvidas. Na dúvida, deixe de fora."
          ],
          steps: ["Antes de enviar um pedido, leia-o para encontrar nomes e dados privados.", "Troque cada um por um marcador.", "Só acrescente os dados reais depois de copiar o rascunho para fora da ferramenta de IA.", "Siga a política de privacidade da sua organização."],
          words: [["Informações privadas", "dados que podem identificar uma pessoa ou prejudicá-la se forem partilhados, como uma morada ou o valor de uma doação."], ["Política de privacidade", "as regras escritas da sua organização para tratar informações pessoais."]],
          slides: [
            { title: "Nunca cole na IA", bullets: ["Nomes de doadores com o valor das doações", "Moradas, números de telefone, dados bancários", "Notas de caso, dados de saúde ou de imigração"] },
            { title: "Use marcadores no lugar", bullets: ["\"Agradeça a [nome do doador] por [valor]\"", "Preencha os dados reais depois de copiar"] },
            { title: "Na dúvida", bullets: ["Deixe de fora", "Siga a sua política de privacidade", "Pergunte a um líder"] }
          ],
          tryIt: "Tarefa final: faça o rascunho de uma nota de agradecimento aos voluntários de um evento recente. Use um pedido com três partes e marcadores, peça duas melhorias, verifique cada facto nos seus registos e corrija a nota para que soe como a sua organização.",
          youCanNow: "usar a IA em textos reais da organização protegendo a privacidade das pessoas que serve.",
          quickCheck: [
            { objective: "O6", q: "O que é seguro colocar num pedido à IA?", options: ["O nome de um doador e o valor da doação", "As notas de caso de um beneficiário", "\"Agradeça a [nome do doador] por uma doação de [valor] ao nosso programa para jovens.\"", "A escola e a morada de uma criança"], answer: 2, why: "Os marcadores deixam-no ter ajuda sem partilhar dados privados." },
            { objective: "O6", q: "Não tem a certeza se a história de um voluntário é privada demais para colar na IA. O que faz?", options: ["Cola; a IA é privada", "Cola só metade", "Partilha primeiro nas redes sociais", "Deixa de fora e pergunta a um líder"], answer: 3, why: "Na dúvida, deixe de fora, e pergunte a um líder." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a IA bem e com segurança",
        questions: [
          { objective: "O4", q: "O rascunho está formal demais para os voluntários da sua igreja. O que faz?", options: ["Envia na mesma", "Pede: \"Faça soar mais caloroso e mais pessoal\"", "Apaga a ferramenta de IA", "Pede uma versão mais comprida"], answer: 1, why: "Um pedido de seguimento claro pede exatamente a mudança de que precisa." },
          { objective: "O5", q: "O rascunho da IA diz que serviram 500 famílias. Os seus registos dizem 140. O que usa?", options: ["500, soa melhor", "Deixa o número vago de propósito", "140, dos seus registos", "Pede à IA para escolher"], answer: 2, why: "Números honestos dos seus próprios registos mantêm a confiança dos doadores." },
          { objective: "O6", q: "Qual destes NÃO deve colar numa ferramenta de IA?", options: ["\"Faça mais curto\"", "O nome da sua recolha de alimentos", "A palavra \"obrigado\"", "As notas de caso de um beneficiário"], answer: 3, why: "As notas de caso são informações privadas sobre as pessoas que serve." },
          { objective: "O6", q: "Como agradece a um doador específico sem partilhar os dados dele com a IA?", options: ["Usa marcadores como [nome do doador] e [valor]", "Cola a ficha completa dele", "Usa os dados bancários dele", "Não faz o agradecimento"], answer: 0, why: "Os marcadores dão-lhe um rascunho; você acrescenta os dados reais depois." },
          { objective: "O5", q: "O que é uma alucinação na IA?", options: ["Um estilo de design", "Um texto que parece verdade mas é inventado", "Uma configuração de privacidade", "Uma ligação lenta à internet"], answer: 1, why: "A IA pode inventar factos que parecem verdadeiros, por isso você verifica-os." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à IA para Organizações sem Fins Lucrativos",
    questions: [
      { objective: "O1", q: "A melhor descrição de um assistente de IA é:", options: ["Um voluntário", "Uma base de dados de subsídios", "Um programa de computador com quem conversa com palavras do dia a dia", "Um banco"], answer: 2, why: "É um programa a quem você escreve ou fala e que escreve respostas." },
      { objective: "O1", q: "Em que tarefa da organização a IA é melhor?", options: ["Escolher que beneficiários recebem ajuda", "Assinar contratos", "Aprovar os salários", "Escrever o primeiro rascunho de um boletim"], answer: 3, why: "Os primeiros rascunhos são um ponto forte; as decisões ficam com as pessoas." },
      { objective: "O1", q: "Quem toma as decisões finais quando a sua equipa usa a IA?", options: ["As pessoas da sua equipa", "A IA", "A empresa do programa", "Os doadores"], answer: 0, why: "Uma pessoa revê sempre e decide." },
      { objective: "O2", q: "Qual é o endereço de um assistente de IA gratuito?", options: ["donate-now.win", "gemini.google.com", "freegrants.xyz", "nenhum destes"], answer: 1, why: "gemini.google.com é o endereço oficial da Google para o Gemini." },
      { objective: "O2", q: "Porque perguntar que ferramenta de IA a sua organização aprova?", options: ["Para ter desconto no café", "Porque a IA é ilegal", "As ferramentas de trabalho aprovadas podem proteger melhor os dados", "Não tem importância"], answer: 2, why: "As contas de trabalho podem ter proteções de privacidade e regras extra." },
      { objective: "O2", q: "Num computador partilhado do escritório, depois de usar a IA deve:", options: ["Guardar a sua palavra-passe", "Deixar aberto", "Escrever a sua palavra-passe num papel", "Terminar a sessão e fechar o navegador"], answer: 3, why: "Terminar a sessão protege a sua conta." },
      { objective: "O3", q: "Um bom pedido inclui:", options: ["O que precisa, a situação e o formato", "Uma só palavra", "Os dados bancários de um doador", "A sua palavra-passe"], answer: 0, why: "Essas três partes dão um rascunho útil." },
      { objective: "O3", q: "Que pedido vai dar o melhor lembrete aos voluntários?", options: ["\"lembrete\"", "\"Escreva uma SMS simpática de 80 palavras a lembrar os voluntários da limpeza do parque no sábado às 9h e para trazerem luvas.\"", "\"voluntários\"", "\"ajuda\""], answer: 1, why: "Dá a necessidade, a situação e o formato." },
      { objective: "O3", q: "O que quer dizer [data] num pedido?", options: ["Um código secreto", "O aniversário de um doador", "Um marcador que preenche depois", "Um erro"], answer: 2, why: "Os marcadores indicam os dados que você mesmo acrescenta." },
      { objective: "O4", q: "O primeiro rascunho é comprido demais. O melhor passo a seguir é:", options: ["Fundar uma nova organização", "Enviar na mesma", "Acrescentar mais palavras", "Pedir: \"Faça mais curto\""], answer: 3, why: "Um pedido de seguimento pede a mudança." },
      { objective: "O4", q: "Quando deve acrescentar os nomes reais dos doadores a um agradecimento?", options: ["Depois de copiar o rascunho para fora da ferramenta de IA", "No primeiro pedido", "Nunca agradeça aos doadores", "Só na conversa com a IA"], answer: 0, why: "Acrescentá-los fora da ferramenta mantém-nos privados." },
      { objective: "O4", q: "Que pedido de seguimento pode ajudar a chegar a mais pessoas da sua comunidade?", options: ["\"Acrescente a minha palavra-passe.\"", "\"Dê-me uma versão em espanhol.\"", "\"Invente uma estatística.\"", "\"Apague a conversa.\""], answer: 1, why: "Uma versão traduzida chega a mais leitores; mesmo assim, uma pessoa que fala bem a língua deve revê-la." },
      { objective: "O5", q: "O que deve SEMPRE verificar num rascunho da IA?", options: ["A palavra de saudação", "O tipo de letra", "Números, datas e afirmações", "Nada"], answer: 2, why: "Números, datas e afirmações podem ser inventados." },
      { objective: "O5", q: "Onde verifica uma afirmação sobre impostos ou leis?", options: ["Noutra conversa com a IA", "Num comentário nas redes sociais", "Adivinha", "Na fonte oficial, muitas vezes uma página .gov, ou com um profissional"], answer: 3, why: "As fontes oficiais e os profissionais são de confiança." },
      { objective: "O5", q: "Porque é que os números de impacto têm de vir dos seus registos?", options: ["Números honestos mantêm a confiança dos doadores", "Os números da IA são sempre pequenos demais", "Os doadores não os leem", "É mais rápido"], answer: 0, why: "Números inventados enganam os doadores e estragam a confiança." },
      { objective: "O5", q: "Quem deve ler tudo o que vai para o público?", options: ["Ninguém", "Uma segunda pessoa da sua equipa", "Só a IA", "Um desconhecido qualquer"], answer: 1, why: "Uma segunda pessoa encontra erros." },
      { objective: "O6", q: "Qual destas é uma informação privada que deve deixar fora da IA?", options: ["O nome da vossa gala anual", "A palavra \"missão\"", "A morada de um voluntário", "O endereço do vosso site público"], answer: 2, why: "As moradas são dados pessoais privados." },
      { objective: "O6", q: "Não tem a certeza se uma coisa é privada demais para a IA. Deve:", options: ["Colar na mesma", "Publicar na internet", "Enviar por e-mail à empresa da IA", "Deixar de fora e perguntar a um líder"], answer: 3, why: "Na dúvida, deixe de fora." },
      { objective: "O6", q: "Que regras escritas orientam a forma como a sua organização trata as informações pessoais?", options: ["A política de privacidade", "O menu", "A encomenda de camisolas dos voluntários", "O mapa do estacionamento"], answer: 0, why: "A política de privacidade define as regras para as informações pessoais." },
      { objective: "O6", q: "Os dados de saúde ou de imigração de um beneficiário devem ser:", options: ["Colados para ter respostas melhores", "Deixados fora das ferramentas de IA", "Partilhados nos boletins", "Usados como exemplos na internet"], answer: 1, why: "São dados sensíveis e podem prejudicar a pessoa se forem partilhados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 9, 12, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pedido com três partes", objective: "O3", notYet: "O pedido é vago, por exemplo \"nota de agradecimento\".", meets: "O pedido diz o que precisa, a situação e o formato.", exceeds: "Também diz quem vai ler e o tom que serve a organização." },
      { name: "Duas melhorias", objective: "O4", notYet: "Usou o primeiro rascunho como estava.", meets: "Pediu duas mudanças, uma de cada vez, e a nota ficou melhor.", exceeds: "Sabe dizer o que cada mudança corrigiu." },
      { name: "Factos verificados", objective: "O5", notYet: "Um número, uma data ou uma afirmação foi usado sem verificar.", meets: "Cada facto e cada data batem com os registos da própria organização.", exceeds: "Anotou onde verificou cada facto." },
      { name: "Privacidade protegida", objective: "O6", notYet: "O pedido tem dados privados de um voluntário ou doador.", meets: "Nenhum dado privado no pedido; foram usados marcadores.", exceeds: "Os nomes reais só foram acrescentados depois de copiar o rascunho para fora da ferramenta de IA." },
      { name: "Soa como nós", objective: "O4", notYet: "A nota soa geral ou não parece da organização.", meets: "Foi corrigida para soar calorosa e parecer da organização.", exceeds: "Uma segunda pessoa da equipa leu-a e concordou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter usado IA para uma mensagem real da organização em 30 dias (inquérito de seguimento)",
      "Organizações que dizem poupar tempo em notas de agradecimento, anúncios ou boletins",
      "Alunos que começam outro curso da Koach Learn para organizações sem fins lucrativos em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito, ou o que a sua organização aprova: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os registos da sua organização sobre um evento recente, como o número de voluntários e de famílias servidas",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça-o como uma oficina para funcionários ou voluntários: façam o teste inicial juntos e depois um capítulo por sessão.",
      "Antes da sessão, pergunte ao líder da organização que ferramenta de IA está aprovada.",
      "Use marcadores em toda a prática; nunca cole dados reais de doadores, voluntários ou beneficiários.",
      "Antes de saírem, confirme que cada aluno termina a sessão nos computadores partilhados.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
