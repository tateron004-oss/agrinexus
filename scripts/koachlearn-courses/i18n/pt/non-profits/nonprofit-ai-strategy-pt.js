"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-ai-strategy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-ai-strategy-pt",
  lang: "pt",
  translationOf: "nonprofit-ai-strategy",
  category: "Non Profits",
  name: "Criar uma Estratégia de IA para a Sua Organização sem Fins Lucrativos",
  skills: "Encontrar as tarefas certas para a IA, Ordenar ideias por valor e risco, Escrever uma política de uso da IA, Planear um pequeno piloto, Medir resultados e informar a direção",
  outcome: "escrever um plano de IA de uma página para a sua organização sem fins lucrativos, com três tarefas em que a IA vai ajudar, as regras que funcionários e voluntários têm de seguir, um piloto de 30 dias com um responsável e a forma de medir se resultou.",
  about: [
    "Este curso é para diretores executivos, pastores, membros da direção, gestores de programas e líderes de voluntários que querem usar a IA de propósito, e não por acaso.",
    "Você vai mapear para onde vai o tempo da sua equipa, escolher as tarefas em que a IA ajuda mais com menos risco, escrever regras simples que protegem os doadores e as pessoas que servem, e planear um pequeno teste para apresentar à sua direção.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa que constrói uma parte do seu plano. Na Lição 6 terá um plano de IA completo de uma página. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de IA de uma página para a sua organização, com cinco partes: (1) a sua missão numa frase, (2) três tarefas em que a IA vai ajudar, ordenadas por valor e risco, (3) pelo menos cinco regras para usar a IA, incluindo regras de privacidade, (4) um piloto de 30 dias com um responsável, uma ferramenta e uma data de início, e (5) duas medidas que vai apresentar à sua direção.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Diretores executivos, pastores, membros da direção, gestores de programas e líderes de voluntários de organizações sem fins lucrativos e de organizações religiosas que querem usar a IA de propósito, e não por acaso.",
    startingPoint: "Lideram equipas e conhecem bem a sua missão e os seus programas. Alguns funcionários e voluntários já usam ferramentas de IA por conta própria, mas a organização não tem um plano nem regras comuns.",
    gap: "Sem um plano, o uso da IA fica espalhado: pode pôr em risco as informações dos doadores ou dos beneficiários, ou deixar de lado as tarefas em que mais ajudaria a missão. Os líderes precisam de um plano de uma página que escolha as tarefas certas, defina regras, teste com segurança e apresente os resultados à direção.",
    constraints: [
      "Orçamentos pequenos: preferir a IA que já vem nas ferramentas que a organização tem",
      "Pouco tempo dos líderes, por isso cada lição dura cerca de 5 minutos",
      "Privacidade: as informações de doadores, voluntários e beneficiários ficam fora da IA; podem aplicar-se leis extra a informações de saúde, de crianças ou jurídicas",
      "A IA nunca decide quem recebe serviços, quem é contratado ou quem é recusado",
      "Aprovação e supervisão da direção"
    ],
    prerequisites: "\"Introdução à IA para Organizações sem Fins Lucrativos\", ou alguma experiência a usar um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a missão da sua organização", action: "explicar à sua direção ou liderança porque a sua organização precisa de um plano de IA simples", standard: "partindo da missão, e não da ferramenta" },
    { id: "O2", condition: "Depois de perguntar a funcionários e voluntários o que lhes ocupa a semana", action: "fazer a lista das suas tarefas repetidas e identificar em quais a IA pode ajudar e quais ficam com as pessoas", standard: "deixando todas as decisões sobre pessoas com as pessoas" },
    { id: "O3", condition: "Com a sua lista de tarefas adequadas à IA", action: "dar a cada tarefa uma pontuação de 1 a 3 para valor e para risco e escolher as três melhores", standard: "pondo primeiro as tarefas de valor alto e risco baixo" },
    { id: "O4", condition: "Para os seus funcionários e voluntários", action: "escrever pelo menos cinco regras claras para usar a IA, incluindo regras de privacidade", standard: "curtas o bastante para caber numa página e simples o bastante para um voluntário novo" },
    { id: "O5", condition: "Com uma das suas três melhores tarefas", action: "planear um piloto de 30 dias com uma ferramenta, um responsável, uma data de início e um ponto de partida", standard: "com o ponto de partida medido antes de começar" },
    { id: "O6", condition: "No fim do piloto", action: "comparar duas medidas com o ponto de partida e escrever um relatório de cinco frases para a direção", standard: "com uma decisão clara de manter, mudar ou parar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher onde a IA ajuda",
      lessons: [
        {
          objectives: ["O1"],
          title: "Porque uma organização sem fins lucrativos precisa de um plano de IA",
          minutes: 4,
          goal: "Explicar à sua direção ou liderança porque a sua organização precisa de um plano de IA simples.",
          text: [
            "Os seus funcionários e voluntários talvez já usem ferramentas de IA por conta própria, sem regras comuns. Isso pode poupar tempo, mas também pode pôr em risco as informações dos doadores ou dos beneficiários, ou produzir textos que não soam como vocês.",
            "Um plano de IA é um documento curto que diz para que serve a IA na sua organização, para que não serve, quem decide e como vão verificar que ela ajuda a missão.",
            "Um bom plano começa pela missão, e não pela ferramenta. A pergunta não é \"Que IA devemos comprar?\", mas sim \"Onde é que a nossa equipa perde tempo que podia voltar para as pessoas que servimos?\""
          ],
          words: [["Plano de IA", "um documento curto que diz como a sua organização vai e não vai usar a IA."], ["Missão", "o objetivo para o qual a sua organização existe."], ["Parte interessada", "qualquer pessoa afetada pelo seu trabalho: beneficiários, doadores, voluntários, funcionários, direção."]],
          slides: [
            { title: "Porquê planear?", bullets: ["As pessoas talvez já usem a IA sem regras", "A privacidade e a confiança estão em jogo", "Um plano transforma um uso espalhado em ajuda real"] },
            { title: "Um plano de IA diz", bullets: ["Para que serve a IA, e para que não serve", "Quem decide", "Como vão verificar que ajuda"] },
            { title: "Comece pela missão", bullets: ["Não \"Que ferramenta?\"", "Mas \"Onde perdemos tempo?\"", "Devolva esse tempo às pessoas que servem"] }
          ],
          tryIt: "Escreva a sua missão numa frase no topo de uma página em branco com o título \"O nosso plano de IA\". Por baixo, escreva uma frase sobre porque a sua organização precisa de um plano agora.",
          youCanNow: "explicar porque uma organização sem fins lucrativos precisa de um plano de IA e começar um a partir da sua missão.",
          quickCheck: [
            { objective: "O1", q: "O que diz um plano de IA?", options: ["Para que serve a IA, para que não serve, quem decide e como vão verificar que ajuda", "Em que empresa de IA investir", "A palavra-passe de cada funcionário", "Só o preço das ferramentas de IA"], answer: 0, why: "Um plano diz para que serve e não serve a IA, quem decide e como verificam que ajuda a missão." },
            { objective: "O1", q: "Um membro da direção pergunta: \"Que IA devemos comprar?\" Como responde?", options: ["Comprar a mais popular", "Começar por perguntar onde a nossa equipa perde tempo que podia voltar para as pessoas que servimos", "Comprar todas as ferramentas e ver", "Esperar que outros grupos decidam"], answer: 1, why: "Um bom plano começa pela missão, e não pela ferramenta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mapear para onde vai o tempo da sua equipa",
          minutes: 5,
          goal: "Fazer a lista das tarefas repetidas da sua organização e encontrar aquelas em que a IA pode ajudar.",
          text: [
            "A IA ajuda mais em tarefas que se repetem, que têm muita escrita ou organização de informação e que seguem um padrão. Exemplos: lembretes semanais para voluntários, cartas de agradecimento a doadores, rascunhos de boletins informativos, notas de reuniões, resumos de relatórios de subvenções e respostas às mesmas perguntas do público.",
            "A IA não deve tomar decisões sobre pessoas: quem recebe serviços, quem é contratado ou quem é recusado. Essas decisões precisam do juízo humano, de justiça e de cuidado.",
            "Pergunte a três ou quatro pessoas da sua equipa, incluindo um voluntário, que tarefas lhes ocupam a semana. Vai ficar surpreendido com o que aprende."
          ],
          steps: ["Faça a lista de dez tarefas que a sua equipa faz todas as semanas ou todos os meses.", "Ao lado de cada uma, escreva mais ou menos quantas horas leva.", "Marque as tarefas que se repetem e que têm escrita, organização ou resumo.", "Risque as tarefas que decidem alguma coisa sobre uma pessoa."],
          words: [["Tarefa repetida", "trabalho feito da mesma forma vezes sem conta, como os lembretes semanais."], ["Juízo humano", "decisões que uma pessoa toma com cuidado, justiça e conhecimento da situação."]],
          slides: [
            { title: "Boas tarefas para a IA", bullets: ["Repetem-se muitas vezes", "Muita escrita, organização ou resumo", "Seguem um padrão"] },
            { title: "Exemplos numa organização sem fins lucrativos", bullets: ["Lembretes para voluntários e agradecimentos a doadores", "Rascunhos de boletins e notas de reuniões", "Respostas a perguntas comuns do público"] },
            { title: "Fica com as pessoas", bullets: ["Quem recebe serviços", "Quem é contratado ou recusado", "Tudo o que precisa de cuidado e justiça"] }
          ],
          tryIt: "Faça a lista das dez tarefas da sua organização, com as horas. Marque as adequadas à IA e risque as que decidem sobre pessoas.",
          youCanNow: "mapear o trabalho repetido da sua equipa e escolher as tarefas que servem para a IA.",
          quickCheck: [
            { objective: "O2", q: "Em que tipo de tarefa a IA ajuda mais?", options: ["Decisões sobre quem recebe serviços", "Escolhas de contratação", "Tarefas que se repetem, têm escrita ou organização e seguem um padrão", "Conversas de acompanhamento pastoral"], answer: 2, why: "A IA ajuda mais em tarefas repetidas de escrita e organização que seguem um padrão." },
            { objective: "O2", q: "Alguém sugere usar a IA para decidir que famílias entram no programa de alimentos. O que diz?", options: ["Sim, é mais rápido", "Sim, se a IA explicar porquê", "Só para as famílias novas", "Não; as decisões sobre pessoas precisam do juízo humano"], answer: 3, why: "A IA não deve decidir quem recebe serviços." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ordenar ideias por valor e risco",
          minutes: 5,
          goal: "Ordenar as suas ideias de IA e escolher as três melhores para começar.",
          text: [
            "Para cada tarefa adequada à IA, faça duas perguntas. Valor: quanto tempo ou qualidade íamos ganhar? Risco: o que pode correr mal, e quão grave seria?",
            "As tarefas de risco baixo e valor alto vêm primeiro, por exemplo escrever rascunhos de lembretes para voluntários a partir de dados públicos de eventos. As tarefas de risco alto, como tudo o que tem notas de casos de beneficiários ou dados de saúde, esperam até haver regras fortes e uma ferramenta aprovada e segura, ou ficam fora da lista.",
            "Dê a cada uma uma pontuação de 1 (baixo) a 3 (alto). Comece pelo valor alto e risco baixo. Três tarefas bem feitas valem mais do que dez feitas pela metade."
          ],
          steps: ["Dê a cada tarefa uma pontuação de valor de 1 a 3.", "Dê a cada tarefa uma pontuação de risco de 1 a 3.", "Ordene: valor alto e risco baixo primeiro.", "Escolha as suas três melhores."],
          words: [["Valor", "quanto tempo, dinheiro ou qualidade uma mudança faria ganhar."], ["Risco", "o que pode correr mal e quanto dano causaria."]],
          slides: [
            { title: "Duas perguntas por tarefa", bullets: ["Valor: o que ganhamos?", "Risco: o que pode correr mal?"] },
            { title: "Pontuação de 1 a 3", bullets: ["Valor alto + risco baixo = comece aqui", "Risco alto = espere pelas regras ou deixe de lado"] },
            { title: "Exemplos", bullets: ["Risco baixo: lembretes para voluntários com dados públicos de eventos", "Risco alto: tudo o que tem notas de casos de beneficiários"] },
            { title: "Escolha três", bullets: ["Três bem feitas valem mais do que dez pela metade"] }
          ],
          tryIt: "Dê pontuações de valor e risco às tarefas que marcou. Escreva as suas três melhores no seu plano, debaixo do título \"Onde a IA vai ajudar\".",
          youCanNow: "ordenar ideias de IA por valor e risco e escolher três para começar.",
          quickCheck: [
            { objective: "O3", q: "Nesta lição, que escala usa para dar pontuações de valor e risco?", options: ["1 (baixo) a 3 (alto)", "1 a 100", "Só sim ou não", "A a F"], answer: 0, why: "Dê a cada uma uma pontuação de 1 (baixo) a 3 (alto)." },
            { objective: "O3", q: "Tem dez ideias de IA. O que faz?", options: ["Começa as dez ao mesmo tempo", "Escolhe cerca de três com valor alto e risco baixo", "Escolhe as três com mais risco", "Deixa cada funcionário escolher uma"], answer: 1, why: "Três tarefas bem feitas valem mais do que dez feitas pela metade." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher onde a IA ajuda",
        questions: [
          { objective: "O1", q: "De onde deve partir o plano de IA de uma organização sem fins lucrativos?", options: ["Da missão", "Da ferramenta mais nova", "Do preço mais barato", "Do site de outra organização"], answer: 0, why: "Um plano começa pela missão e por onde o tempo podia voltar para as pessoas que servem." },
          { objective: "O2", q: "Que tarefa serve melhor para a IA?", options: ["Decidir quem recebe ajuda alimentar", "Escrever rascunhos dos lembretes semanais para voluntários", "Escolher que funcionários contratar", "Recusar um beneficiário"], answer: 1, why: "As tarefas repetidas de escrita servem para a IA; as decisões sobre pessoas ficam com as pessoas." },
          { objective: "O3", q: "Uma tarefa tem valor alto e risco baixo. O que faz?", options: ["Deixa-a de lado", "Espera cinco anos", "Põe-na perto do topo da sua lista", "Dá-a à direção para escrever"], answer: 2, why: "As tarefas de valor alto e risco baixo vêm primeiro." },
          { objective: "O3", q: "Uma tarefa tem dados de saúde de beneficiários. Como a ordena?", options: ["Risco mais baixo", "Faz primeiro", "Publica-a", "Risco alto: espere por regras fortes e uma ferramenta segura, ou deixe de lado"], answer: 3, why: "Os dados sensíveis dos beneficiários são de risco alto." },
          { objective: "O2", q: "Porque perguntar a voluntários e funcionários o que lhes ocupa a semana?", options: ["Para encontrar as tarefas repetidas reais", "Para encontrar culpados", "Para cortar voluntários", "Porque a lei obriga"], answer: 0, why: "Quem faz o trabalho sabe para onde vai o tempo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Regras, piloto e resultados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever regras simples para a IA",
          minutes: 5,
          goal: "Escrever pelo menos cinco regras claras sobre como os seus funcionários e voluntários usam a IA.",
          text: [
            "As regras tornam a IA segura de usar. Mantenha-as curtas o bastante para caber numa página e simples o bastante para um voluntário novo as seguir.",
            "Regras principais de que a maioria das organizações sem fins lucrativos precisa: usar só ferramentas aprovadas; nunca colar informações privadas de doadores, voluntários ou beneficiários; uma pessoa revê tudo antes de ser enviado ou publicado; verificar cada facto e cada número; ser honesto quando a IA ajudou, quando isso importa; e a IA nunca decide quem recebe serviços.",
            "As organizações religiosas podem acrescentar uma regra para que sermões, orações e acompanhamento pastoral continuem pessoais. Pergunte a um advogado ou à sua seguradora se lida com informações de saúde, de crianças ou jurídicas, porque podem aplicar-se leis extra."
          ],
          steps: ["Faça a lista das ferramentas de IA aprovadas.", "Escreva a regra de privacidade: o que nunca entra na IA.", "Escreva a regra de revisão: quem verifica antes de alguma coisa sair.", "Escreva a regra das decisões: a IA nunca decide sobre pessoas.", "Acrescente as regras de que a sua missão precisa."],
          words: [["Política de uso da IA", "regras escritas sobre como as pessoas da sua organização podem usar a IA."], ["Ferramenta aprovada", "uma ferramenta de IA que os seus líderes verificaram e autorizaram."]],
          slides: [
            { title: "Regras curtas", bullets: ["Uma página", "Simples o bastante para um voluntário novo"] },
            { title: "Regras principais", bullets: ["Só ferramentas aprovadas", "Nada de informações privadas de doadores ou beneficiários", "Uma pessoa revê antes de sair", "Verificar cada facto e cada número"] },
            { title: "Mais regras", bullets: ["A IA nunca decide quem recebe serviços", "Ser honesto quando a IA ajudou", "Acrescentar as regras de que a sua missão precisa"] },
            { title: "Peça conselho", bullets: ["Dados de saúde, de crianças ou jurídicos: pergunte a um advogado ou à seguradora"] }
          ],
          tryIt: "Escreva pelo menos cinco regras no seu plano, debaixo do título \"As nossas regras de IA\". Leia-as a um voluntário e pergunte se alguma coisa não está clara.",
          youCanNow: "escrever uma política de uso da IA simples que a sua equipa consegue seguir.",
          quickCheck: [
            { objective: "O4", q: "Que tamanho devem ter as suas regras de IA?", options: ["Pelo menos 20 páginas", "Só faladas, nunca escritas", "Curtas o bastante para caber numa página", "Tão longas como os estatutos"], answer: 2, why: "Mantenha as regras curtas para uma página e simples para um voluntário novo." },
            { objective: "O4", q: "A sua igreja quer uma regra sobre orações e sermões. O que pode dizer?", options: ["A IA escreve todos os sermões", "A IA escolhe quem recebe visitas de oração", "Nada; as igrejas não precisam de regras", "Sermões, orações e acompanhamento pastoral continuam pessoais"], answer: 3, why: "As organizações religiosas podem acrescentar uma regra para que estas coisas continuem pessoais." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear um piloto de 30 dias",
          minutes: 5,
          goal: "Planear um pequeno teste de IA de 30 dias numa tarefa, com um responsável.",
          text: [
            "Um piloto é um pequeno teste antes de mudar tudo. Escolha uma das suas três melhores tarefas, uma ferramenta, uma pessoa responsável e 30 dias.",
            "Antes de começar, meça como as coisas funcionam hoje. Se os lembretes para voluntários levam 3 horas por semana, anote isso. Esse é o seu ponto de partida.",
            "Faça notas durante o piloto: tempo gasto, problemas e o que as pessoas disseram. Se puder, use uma ferramenta que a sua organização já tem, como a IA que vem no Microsoft 365 ou no Google Workspace, para não aumentar os custos."
          ],
          steps: ["Escolha uma tarefa das suas três melhores.", "Escolha uma ferramenta aprovada e um responsável.", "Anote o ponto de partida: quanto tempo leva hoje.", "Marque uma data de início e uma data de fim 30 dias depois.", "Faça notas simples todas as semanas."],
          words: [["Piloto", "um teste pequeno e curto antes de uma mudança maior."], ["Ponto de partida", "como uma coisa funciona hoje, medido antes de a mudar."], ["Responsável", "a única pessoa encarregada do piloto."]],
          slides: [
            { title: "Um piloto é um pequeno teste", bullets: ["Uma tarefa, uma ferramenta, um responsável", "30 dias"] },
            { title: "Meça primeiro", bullets: ["Ponto de partida: quanto tempo leva hoje", "Exemplo: os lembretes levam 3 horas por semana"] },
            { title: "Durante o piloto", bullets: ["Anote o tempo gasto", "Anote os problemas", "Anote o que as pessoas disseram"] }
          ],
          tryIt: "Debaixo de \"O nosso piloto de 30 dias\", escreva a tarefa, a ferramenta, o responsável, a data de início, a data de fim e o ponto de partida.",
          youCanNow: "planear um piloto de IA de 30 dias com um responsável e um ponto de partida claros.",
          quickCheck: [
            { objective: "O5", q: "Que notas faz durante um piloto?", options: ["Tempo gasto, problemas e o que as pessoas disseram", "Só a data de início", "Os valores das doações dos doadores", "Nada até ao fim"], answer: 0, why: "Faça notas sobre o tempo gasto, os problemas e o que as pessoas disseram." },
            { objective: "O5", q: "Quer começar na próxima semana um piloto com rascunhos do boletim informativo. O que faz primeiro?", options: ["Compra uma ferramenta de IA nova", "Anota quanto tempo levam hoje os boletins", "Começa sem dizer a ninguém", "Planeia cinco tarefas ao mesmo tempo"], answer: 1, why: "Primeiro meça como as coisas funcionam hoje; esse é o seu ponto de partida." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir os resultados e informar a sua direção",
          minutes: 5,
          goal: "Escolher duas medidas e apresentar os resultados do piloto num relatório curto para a direção.",
          text: [
            "Escolha duas medidas: uma de tempo ou custo (horas poupadas por semana) e uma de qualidade (menos erros, mais inscrições de voluntários, respostas mais rápidas ao público, ou o que os leitores disseram).",
            "No fim, compare com o seu ponto de partida. Depois decida: manter, mudar ou parar. Parar é um bom resultado; aprendeu alguma coisa sem gastar muito.",
            "Informe a sua direção em cinco frases: o que testaram, o que mudou, os problemas, se as regras foram cumpridas e o que recomendam a seguir. As direções preocupam-se com a missão, o dinheiro, o risco e a confiança."
          ],
          steps: ["Escolha uma medida de tempo e uma medida de qualidade.", "Compare o fim do piloto com o seu ponto de partida.", "Decida: manter, mudar ou parar.", "Escreva um relatório de cinco frases para a direção."],
          words: [["Medida", "um número ou sinal que acompanha para ver se uma coisa resultou."], ["Direção", "o grupo de pessoas que governa uma organização sem fins lucrativos e supervisiona os seus líderes."]],
          slides: [
            { title: "Duas medidas", bullets: ["Tempo: horas poupadas por semana", "Qualidade: erros, inscrições, respostas, opiniões"] },
            { title: "Decida", bullets: ["Manter", "Mudar", "Parar: continua a ser um resultado útil"] },
            { title: "Relatório de cinco frases para a direção", bullets: ["O que testámos e o que mudou", "Problemas e se as regras foram cumpridas", "O que recomendamos a seguir"] }
          ],
          tryIt: "Tarefa final: termine o seu plano de IA de uma página. Acrescente duas medidas e junte as cinco partes: missão, três tarefas, regras, o piloto de 30 dias e as medidas que vai apresentar à sua direção.",
          youCanNow: "escrever um plano de IA completo de uma página e apresentar os resultados à sua direção.",
          quickCheck: [
            { objective: "O6", q: "Qual é uma medida de tempo ou custo?", options: ["O que os leitores disseram", "Menos erros", "Horas poupadas por semana", "Mais inscrições de voluntários"], answer: 2, why: "As horas poupadas por semana medem o tempo; as outras medem a qualidade." },
            { objective: "O6", q: "O piloto poupou tempo, mas um funcionário quebrou uma regra de privacidade uma vez. O que vai no relatório para a direção?", options: ["Só o tempo poupado", "Nada; foi um erro pequeno", "Só um pedido de mais dinheiro", "Os resultados, o problema, se as regras foram cumpridas e o que recomenda a seguir"], answer: 3, why: "O relatório diz o que testaram, o que mudou, os problemas, se as regras foram cumpridas e os próximos passos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Regras, piloto e resultados",
        questions: [
          { objective: "O4", q: "Qual é uma regra principal de IA para uma organização sem fins lucrativos?", options: ["Colar os processos dos beneficiários para ter respostas melhores", "Uma pessoa revê tudo antes de sair", "A IA escolhe quem recebe serviços", "Qualquer ferramenta serve"], answer: 1, why: "A revisão humana protege a qualidade e a confiança." },
          { objective: "O5", q: "O que é o ponto de partida?", options: ["A pontuação final", "Um tipo de IA", "Como a tarefa funciona hoje, antes da mudança", "O orçamento da direção"], answer: 2, why: "Compara os resultados com o ponto de partida." },
          { objective: "O5", q: "Que tamanho deve ter um primeiro piloto?", options: ["Todas as tarefas ao mesmo tempo", "Sem limite de tempo", "A direção inteira", "Uma tarefa, uma ferramenta, um responsável, 30 dias"], answer: 3, why: "Um teste pequeno ensina sem gastar muito e com segurança." },
          { objective: "O6", q: "O piloto não poupou tempo. Qual é uma boa decisão?", options: ["Parar ou mudar; aprendeu alguma coisa", "Esconder os resultados", "Obrigar todos a usá-lo", "Culpar os voluntários"], answer: 0, why: "Parar é um resultado bom e honesto." },
          { objective: "O4", q: "A sua organização lida com informações de crianças. O que deve acrescentar?", options: ["Nada", "O conselho de um advogado ou de uma seguradora sobre regras extra", "Colá-las na IA", "Partilhá-las publicamente"], answer: 1, why: "Podem aplicar-se leis extra a informações de crianças, de saúde e jurídicas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criar uma Estratégia de IA para a Sua Organização sem Fins Lucrativos",
    questions: [
      { objective: "O1", q: "Um plano de IA para uma organização sem fins lucrativos é:", options: ["A compra de um programa", "Um evento de angariação de fundos", "Um documento curto sobre como vão e não vão usar a IA", "Uma lista de doadores"], answer: 2, why: "Define o objetivo, as regras e as verificações para o uso da IA." },
      { objective: "O1", q: "A melhor primeira pergunta para um plano de IA é:", options: ["Que ferramenta é a mais famosa?", "Como substituímos os voluntários?", "Quanto pagam os outros grupos?", "Onde é que a nossa equipa perde tempo que podíamos devolver à nossa missão?"], answer: 3, why: "Comece pela missão e pelo tempo, e não pelas ferramentas." },
      { objective: "O1", q: "Porque é arriscado não ter um plano de IA?", options: ["As pessoas podem usar a IA sem regras de privacidade", "A IA é ilegal", "Os doadores exigem IA", "Não é arriscado"], answer: 0, why: "O uso sem plano pode expor informações privadas." },
      { objective: "O2", q: "Que tarefa serve para a IA?", options: ["Decidir quem é despejado de uma casa", "Resumir um relatório de subvenção longo", "Contratar um novo pastor", "Assinar um contrato de arrendamento"], answer: 1, why: "Resumir é uma tarefa com padrão; as outras são decisões humanas." },
      { objective: "O2", q: "O que deve ficar com as pessoas?", options: ["Escrever rascunhos de lembretes", "Formatar um boletim informativo", "Decidir quem recebe serviços", "Fazer a lista dos temas de uma reunião"], answer: 2, why: "As decisões sobre pessoas precisam do juízo humano." },
      { objective: "O2", q: "Quando mapeia o tempo, deve:", options: ["Adivinhar uma tarefa", "Perguntar só à direção", "Deixar de fora os voluntários", "Fazer a lista das tarefas e das horas que levam"], answer: 3, why: "As horas mostram onde a IA pode ajudar mais." },
      { objective: "O3", q: "Que par de pontuações usa para ordenar as ideias?", options: ["Valor e risco", "Cor e tamanho", "Preço e marca", "Idade e altura"], answer: 0, why: "O valor alto e o risco baixo vêm primeiro." },
      { objective: "O3", q: "Com quantas tarefas deve começar?", options: ["Todas as tarefas", "Cerca de três", "Nenhuma", "Cinquenta"], answer: 1, why: "Três bem feitas valem mais do que dez pela metade." },
      { objective: "O3", q: "Que tarefa tem o risco mais baixo?", options: ["Resumir notas de casos de beneficiários", "Analisar os dados bancários dos doadores", "Lembretes para voluntários com dados públicos de eventos", "Escrever conselhos médicos"], answer: 2, why: "Usa só informações públicas." },
      { objective: "O4", q: "Uma política de uso da IA deve ser:", options: ["Com cinquenta páginas", "Secreta", "Escrita só em linguagem jurídica", "Curta e simples o bastante para um voluntário novo"], answer: 3, why: "As regras simples são cumpridas." },
      { objective: "O4", q: "Qual é uma regra de privacidade?", options: ["Nunca colar na IA informações privadas de doadores ou beneficiários", "Usar qualquer ferramenta que quiser", "Partilhar palavras-passe para poupar tempo", "Publicar histórias de beneficiários com os nomes"], answer: 0, why: "Proteger as informações privadas mantém a confiança." },
      { objective: "O4", q: "O que quer dizer \"ferramenta aprovada\"?", options: ["Qualquer ferramenta gratuita", "Uma ferramenta que os seus líderes verificaram e autorizaram", "Uma ferramenta com anúncios", "Uma ferramenta de que um doador gosta"], answer: 1, why: "Os líderes verificam a segurança das ferramentas aprovadas." },
      { objective: "O5", q: "Um piloto é:", options: ["Um lançamento completo", "Uma subvenção", "Um teste pequeno e curto antes de uma mudança maior", "Uma eleição da direção"], answer: 2, why: "Os pilotos testam primeiro, sem gastar muito." },
      { objective: "O5", q: "Porque medir o ponto de partida antes de um piloto?", options: ["Para atrasar as coisas", "Porque os doadores pedem", "Não é preciso", "Para poder comparar os resultados depois"], answer: 3, why: "Sem um ponto de partida não consegue saber se ajudou." },
      { objective: "O5", q: "Cada piloto precisa de:", options: ["Um responsável", "Ninguém encarregado", "Todos os funcionários encarregados", "Só a IA"], answer: 0, why: "Um responsável mantém o piloto no caminho certo." },
      { objective: "O5", q: "Porque usar a IA que já vem nas ferramentas que têm, como o Microsoft 365 ou o Google Workspace?", options: ["É sempre perfeita", "Pode evitar aumentar os custos", "Partilha dados com os doadores", "É obrigatório"], answer: 1, why: "Usar o que já têm mantém os custos baixos." },
      { objective: "O6", q: "Qual é uma medida de qualidade?", options: ["A cor do logótipo da ferramenta", "O número de aplicações de IA instaladas", "Mais voluntários inscritos depois dos lembretes", "O tamanho da política"], answer: 2, why: "As medidas de qualidade mostram se o trabalho ficou melhor." },
      { objective: "O6", q: "Depois do piloto, as suas três escolhas são:", options: ["Escondê-lo, ignorá-lo ou negá-lo", "Comprar mais ferramentas", "Despedir o responsável", "Manter, mudar ou parar"], answer: 3, why: "Decida com base nas medidas." },
      { objective: "O6", q: "Um bom relatório para a direção é:", options: ["Cerca de cinco frases claras sobre resultados, riscos e próximos passos", "Um relatório técnico de 40 páginas", "Nada", "Só o custo da ferramenta"], answer: 0, why: "A direção precisa de uma imagem curta e clara." },
      { objective: "O6", q: "As direções preocupam-se sobretudo com:", options: ["Que IA tem o melhor logótipo", "A missão, o dinheiro, o risco e a confiança", "Quantos pedidos foram escritos", "Só os gostos nas redes sociais"], answer: 1, why: "Estes são os deveres principais da direção." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      6,
      10,
      12,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Missão primeiro",
        objective: "O1",
        notYet: "Não há frase da missão, ou o plano parte de uma ferramenta.",
        meets: "A missão numa frase abre o plano.",
        exceeds: "Cada tarefa escolhida diz como devolve tempo à missão."
      },
      {
        name: "Três tarefas ordenadas",
        objective: "O3",
        notYet: "As tarefas não estão ordenadas, ou uma tarefa de risco alto está em primeiro.",
        meets: "Três tarefas com pontuação de valor e risco, valor alto e risco baixo primeiro.",
        exceeds: "Indica que tarefas ficaram de fora e porquê."
      },
      {
        name: "Regras de IA claras",
        objective: "O4",
        notYet: "Menos de cinco regras, ou nenhuma regra de privacidade.",
        meets: "Pelo menos cinco regras curtas, incluindo privacidade, ferramentas aprovadas e revisão humana.",
        exceeds: "Acrescenta regras para os riscos especiais da organização, como as informações de crianças."
      },
      {
        name: "Piloto de 30 dias",
        objective: "O5",
        notYet: "Sem responsável, ferramenta ou data de início.",
        meets: "Uma tarefa, uma ferramenta, um responsável, uma data de início e um ponto de partida medido.",
        exceeds: "Usa uma ferramenta que a organização já tem, com uma nota sobre o custo."
      },
      {
        name: "Medidas para a direção",
        objective: "O6",
        notYet: "Sem medidas, ou as medidas não podem ser comparadas com o ponto de partida.",
        meets: "Uma medida de tempo ou custo e uma medida de qualidade.",
        exceeds: "Inclui um rascunho do relatório de cinco frases para a direção."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações cuja direção aprova um plano de IA escrito em 60 dias (inquérito de seguimento)",
      "Organizações que completam um piloto de 30 dias e apresentam as horas poupadas",
      "Alunos que começam outro curso da Koach Learn sobre organizações sem fins lucrativos em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e um processador de texto",
      "A declaração de missão e uma lista das tarefas semanais da equipa",
      "Um assistente de IA gratuito ou aquele que a sua organização já tem, para escrever rascunhos",
      "Cerca de 60 minutos no total, mais o tempo para falar com funcionários e voluntários"
    ],
    facilitatorNotes: [
      "Funciona melhor com dois ou três líderes da mesma organização a escrever um plano juntos.",
      "Antes da sessão, peça aos alunos para recolher junto de funcionários e de um voluntário o que ocupa a semana da equipa.",
      "Encaminhe os alunos para um advogado ou uma seguradora quando lidam com informações de saúde, de crianças ou jurídicas.",
      "Peça aos alunos para praticar a leitura em voz alta do relatório de cinco frases para a direção.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
