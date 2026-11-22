"use strict";

// Koach Learn course (Portuguese translation of leadership/lead-agentic-understanding-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "lead-agentic-understanding-ai-pt",
  lang: "pt",
  translationOf: "lead-agentic-understanding-ai",
  category: "Leadership Development",
  name: "Liderança na Era da IA Agêntica 1: Compreender a IA",
  skills: "Explicar a IA à sua equipa com palavras simples, Distinguir a IA generativa da IA agêntica, Reconhecer bons e maus usos, Nomear os principais riscos, Preparar uma apresentação sobre IA para a equipa",
  outcome: "explicar à sua equipa, com palavras simples, o que são a IA generativa e a IA agêntica, onde ajudam e onde falham, e conduzir uma apresentação de dez minutos para a equipa com três bons usos, três riscos e uma regra básica clara.",
  about: [
    "Este curso é para gestores, supervisores, chefes de equipa e donos de pequenas empresas e de organizações sem fins lucrativos. Não precisa de formação técnica. Precisa de saber falar da IA com clareza, porque a sua equipa já a usa ou já pergunta sobre ela.",
    "O Capítulo 1 explica o que é a IA, como funciona a IA generativa de hoje e o que torna a IA agêntica diferente. O Capítulo 2 ajuda você a avaliar onde a IA cabe no trabalho da sua equipa, o que pode correr mal e como apresentar o tema à equipa para que todos comecem com a mesma compreensão.",
    "Cada lição dura cerca de cinco minutos e termina com uma pequena tarefa feita com o seu próprio trabalho. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso. Este é o curso 1 de 3 da série Liderança na Era da IA Agêntica."
  ],
  finalTask: "Prepare e faça (ou grave) uma apresentação de dez minutos sobre IA para a sua equipa. Ela explica a IA generativa e a IA agêntica com palavras simples, mostra um exemplo ao vivo com um assistente de IA gratuito, nomeia três bons usos e três riscos para o trabalho real da equipa e termina com uma regra básica que todos vão seguir, por exemplo \"nenhum dado pessoal de clientes ou de funcionários entra em ferramentas de IA públicas\".",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Gestores, supervisores, chefes de equipa e donos de pequenas empresas e de organizações sem fins lucrativos cujas equipas já usam IA ou perguntam sobre ela. Não é preciso formação técnica.",
    startingPoint: "Já ouviram falar do ChatGPT e de ferramentas parecidas e talvez tenham experimentado uma. Ainda não sabem explicar com clareza a IA generativa ou agêntica, avaliar onde ela cabe no trabalho da equipa nem nomear os seus principais riscos.",
    gap: "As equipas usam IA com ou sem orientação. Os líderes precisam de a explicar com palavras simples, avaliar os bons e os maus usos, nomear os riscos e definir uma primeira regra básica, para que as pessoas usem a IA com segurança e com as mesmas expectativas.",
    constraints: [
      "Nível de leitura: palavras simples, sem supor formação técnica",
      "Aparelhos: um telefone ou um computador com um assistente de IA gratuito",
      "Tempo: cerca de cinco minutos por lição, encaixados no dia de um gestor",
      "Privacidade: nenhum dado pessoal de clientes ou de funcionários em ferramentas de IA públicas durante a prática",
      "Aplicam-se as políticas próprias de cada organização e as leis sobre IA e dados"
    ],
    prerequisites: "Nenhum. Este é o curso 1 de 3 da série Liderança na Era da IA Agêntica."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Quando alguém da equipa pergunta o que é a IA", action: "explicar a IA, a aprendizagem automática e a IA generativa com palavras simples", standard: "com uma frase para cada uma, que uma pessoa nova na equipa entenderia" },
    { id: "O2", condition: "Com uma tarefa de rotina da equipa", action: "descrever o que um assistente de IA e um agente de IA fariam cada um e que passos uma pessoa deve aprovar", standard: "dizendo quem continua a ser responsável" },
    { id: "O3", condition: "Com uma lista das tarefas da sua equipa", action: "classificar cada tarefa como bom uso, uso com cuidado ou mau uso da IA", standard: "com uma razão curta para cada uma" },
    { id: "O4", condition: "Para o trabalho real da sua equipa", action: "nomear os três maiores riscos da IA e uma proteção para cada um", standard: "com proteções que pode pôr em prática este mês" },
    { id: "O5", condition: "Usando um assistente de IA gratuito e uma tarefa da equipa sem dados privados", action: "fazer uma pequena demonstração ao vivo, com um pedido de seguimento e uma verificação", standard: "sem usar nenhum dado privado" },
    { id: "O6", condition: "Com a sua equipa", action: "fazer uma apresentação de dez minutos sobre IA que termina com uma regra básica", standard: "cobrindo três usos, três riscos e a regra, enviada por escrito depois" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que os líderes precisam de saber sobre a IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "A IA com palavras simples",
          minutes: 5,
          goal: "Explicar a IA, a aprendizagem automática e a IA generativa com uma frase cada.",
          text: [
            "A inteligência artificial (IA) é um programa de computador que faz tarefas que normalmente precisam do julgamento de uma pessoa, como reconhecer a fala, encontrar padrões ou escrever textos. A aprendizagem automática é a forma mais comum de a construir: em vez de escrever todas as regras, as pessoas mostram ao programa muitos exemplos e ele aprende padrões.",
            "A IA generativa é aprendizagem automática que cria conteúdo novo: textos, imagens, áudio, código. Ferramentas como o ChatGPT, o Microsoft Copilot, o Google Gemini e o Claude são construídas sobre grandes modelos de linguagem (LLM, do inglês \"large language model\") treinados com enormes quantidades de textos. Elas preveem as palavras mais prováveis; é por isso que escrevem com fluência e também por isso que podem estar erradas com toda a segurança.",
            "Como líder, não precisa da matemática. Precisa de três frases simples que possa dizer à sua equipa, e do bom senso para saber quando a ferramenta está a ajudar e quando está a adivinhar."
          ],
          words: [["Inteligência artificial (IA)", "programa de computador que faz tarefas que normalmente precisam do julgamento de uma pessoa."], ["Aprendizagem automática", "construir programas mostrando-lhes exemplos para que aprendam padrões (em inglês, \"machine learning\")."], ["IA generativa", "IA que cria textos, imagens, áudio ou código novos."], ["LLM", "grande modelo de linguagem: a IA que está por trás dos assistentes de conversa."]],
          slides: [
            { title: "Três definições simples", bullets: ["IA: programa que faz tarefas que precisam de julgamento", "Aprendizagem automática: aprende padrões a partir de exemplos", "IA generativa: cria textos, imagens, código"] },
            { title: "Porque parece tão segura", bullets: ["Os LLM preveem as palavras mais prováveis", "Escrever bem não é o mesmo que estar certo"] },
            { title: "O que um líder precisa", bullets: ["Palavras simples para a sua equipa", "Bom senso: está a ajudar ou a adivinhar?"] }
          ],
          tryIt: "Escreva a sua própria explicação, numa frase cada, da IA, da aprendizagem automática e da IA generativa, com palavras que a pessoa mais nova da sua equipa entenderia. Leia-as em voz alta.",
          youCanNow: "explicar a IA, a aprendizagem automática e a IA generativa com palavras simples.",
          quickCheck: [
            { objective: "O1", q: "O que é a aprendizagem automática?", options: ["Um programa que aprende padrões a partir de exemplos", "Um robô que aprende a andar", "Uma pessoa a ensinar um computador à mão, regra a regra", "Um programa que nunca se engana"], answer: 0, why: "A aprendizagem automática encontra padrões em exemplos em vez de seguir regras escritas à mão." },
            { objective: "O1", q: "Uma pessoa nova na equipa pergunta o que é a IA generativa. Que resposta daria?", options: ["É um motor de pesquisa com um nome novo", "É um programa que só faz contas", "É IA que cria textos, imagens ou código novos a partir do que você pede", "É um programa que sabe todos os factos"], answer: 2, why: "A IA generativa cria conteúdo novo; não sabe todos os factos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "De assistente a agente: o que a IA agêntica muda",
          minutes: 5,
          goal: "Explicar a diferença entre um assistente de IA e um agente de IA, e porque isso importa para os líderes.",
          text: [
            "Um assistente de IA responde quando lhe pedem: você faz o pedido, ele escreve um rascunho, você decide. Um agente de IA recebe um objetivo e age: planeia os passos, usa ferramentas como o e-mail, a agenda, folhas de cálculo ou sites, verifica os resultados e continua até terminar ou até alguém o parar.",
            "A IA agêntica leva a IA do conselho à ação. Um assistente escreve o rascunho de uma resposta a um cliente; um agente poderia ler a caixa de correio, escrever as respostas, enviá-las e atualizar o registo do cliente. Isto poupa mais tempo, mas também pode cometer erros a grande velocidade, em nome da sua organização.",
            "Para os líderes, as perguntas principais mudam. Não só \"a resposta é boa?\", mas \"o que é que ele pode fazer, quem aprova as suas ações e quem é responsável quando ele erra?\" Uma pessoa é sempre a responsável."
          ],
          words: [["IA agêntica", "IA que trabalha para um objetivo, planeando passos e agindo com ferramentas."], ["Responsável", "a pessoa que responde pelo resultado, bom ou mau."]],
          slides: [
            { title: "Assistente ou agente", bullets: ["Assistente: você pede, ele escreve um rascunho, você decide", "Agente: recebe um objetivo, planeia e age com ferramentas"] },
            { title: "Do conselho à ação", bullets: ["Escreve a resposta ou envia-a e atualiza o registo", "Mais tempo poupado, erros a grande velocidade"] },
            { title: "Novas perguntas do líder", bullets: ["O que é que ele pode fazer?", "Quem aprova as suas ações?", "Quem é responsável? Sempre uma pessoa"] }
          ],
          tryIt: "Escolha uma tarefa de rotina da sua equipa. Descreva o que um assistente de IA faria nela e o que um agente de IA poderia fazer. Escreva que passos quer que uma pessoa aprove.",
          youCanNow: "explicar em que é que a IA agêntica é diferente de um assistente e o que os líderes têm de decidir.",
          quickCheck: [
            { objective: "O2", q: "O que pode um agente de IA fazer que um assistente simples não faz?", options: ["Responder a uma pergunta quando lhe pedem", "Planear passos e agir com ferramentas para chegar a um objetivo", "Escrever um e-mail curto", "Corrigir os seus próprios erros sem ninguém saber"], answer: 1, why: "Os agentes planeiam e agem com ferramentas; é por isso que os líderes têm de decidir o que eles podem fazer." },
            { objective: "O2", q: "Um agente poderia enviar sozinho e-mails de reembolso aos clientes. O que decidiria primeiro?", options: ["Deixá-lo enviar tudo para poupar tempo", "Proibir toda a IA na equipa", "Deixar o agente decidir que reembolsos precisam de uma pessoa", "Que passos uma pessoa tem de aprovar e quem é responsável"], answer: 3, why: "Com agentes, a pergunta do líder é o que ele pode fazer, quem aprova e quem é responsável." }
          ]
        },
        {
          objectives: ["O3"],
          title: "O que a IA faz bem e onde falha",
          minutes: 5,
          goal: "Classificar tarefas como bons usos, usos com cuidado e maus usos da IA.",
          text: [
            "A IA é boa em primeiros rascunhos (e-mails, anúncios de emprego, ordens de trabalho de reuniões), resumir documentos longos, dar ideias e opções, reescrever para outro público e explicar temas desconhecidos. Isto poupa tempo porque uma pessoa continua a rever o resultado.",
            "Tenha cuidado com tudo o que for sobre factos, lei, dinheiro, saúde ou pessoas: a IA pode inventar factos, fontes e números (a isto muitas vezes chama-se alucinação), pode repetir preconceitos dos dados com que foi treinada e não conhece as políticas da sua organização a não ser que você lhas diga.",
            "Maus usos: decisões finais sobre pessoas (contratar, despedir, sanções disciplinares, salários), tudo o que não se pode desfazer se correr mal, e tudo o que exige colocar dados privados numa ferramenta pública. Um teste simples para a sua equipa: sentir-se-ia à vontade para explicar à pessoa afetada que foi a IA que fez isto?"
          ],
          words: [["Alucinação", "quando a IA escreve algo que parece verdade mas é inventado."], ["Preconceito (viés)", "padrões injustos nas respostas da IA, muitas vezes aprendidos com os dados de treino (em inglês, \"bias\")."]],
          slides: [
            { title: "Bons usos", bullets: ["Primeiros rascunhos: e-mails, anúncios, ordens de trabalho", "Resumos e ideias", "Reescrever para um novo público"] },
            { title: "Usar com cuidado", bullets: ["Factos, lei, dinheiro, saúde, pessoas", "Pode inventar factos e fontes", "Pode repetir preconceitos"] },
            { title: "Maus usos", bullets: ["Decisões finais sobre pessoas", "Erros que não se podem desfazer", "Dados privados em ferramentas públicas"] },
            { title: "O teste de explicar", bullets: ["Diria à pessoa afetada que foi a IA que fez isto?"] }
          ],
          tryIt: "Faça uma lista de dez tarefas que a sua equipa faz. Marque cada uma como BOM, CUIDADO ou MAU para a IA, com algumas palavras a dizer porquê.",
          youCanNow: "avaliar que tarefas da sua equipa são bons usos, usos com cuidado ou maus usos da IA.",
          quickCheck: [
            { objective: "O3", q: "O que é uma alucinação da IA?", options: ["Uma imagem feita pela IA", "A IA recusar-se a responder", "A IA escrever algo que parece verdade mas é inventado", "A IA funcionar devagar"], answer: 2, why: "As alucinações parecem seguras; é por isso que as respostas da IA precisam de ser verificadas." },
            { objective: "O3", q: "A sua equipa quer que a IA decida que candidatos são chamados para entrevista. Como marcaria isto?", options: ["CUIDADO ou MAU: uma pessoa tem de tomar a decisão, usando a IA só para ajudar", "BOM: a IA é mais rápida", "BOM, desde que ninguém saiba", "Não vale a pena pensar nisso"], answer: 0, why: "As decisões sobre pessoas precisam do julgamento humano, e o teste de explicar falha se você o esconderia." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que os líderes precisam de saber sobre a IA",
        questions: [
          { objective: "O1", q: "Qual é a melhor descrição simples da IA generativa?", options: ["Um robô numa fábrica", "Uma folha de cálculo mais rápida", "IA que cria textos, imagens ou código novos", "Um motor de pesquisa"], answer: 2, why: "A IA generativa cria conteúdo novo." },
          { objective: "O1", q: "Porque é que um assistente de IA pode parecer seguro e mesmo assim estar errado?", options: ["Prevê as palavras mais prováveis em vez de verificar os factos", "Foi feito para mentir", "Só lê jornais antigos", "Está avariado"], answer: 0, why: "Prever palavras com fluência não é verificar factos." },
          { objective: "O2", q: "O que torna mais claramente uma IA \"agêntica\"?", options: ["Tem voz", "É cara", "Escreve respostas longas", "Planeia passos e age com ferramentas"], answer: 3, why: "Os agentes agem para chegar a um objetivo, não só respondem." },
          { objective: "O2", q: "Um agente de IA envia a um cliente um e-mail de reembolso errado. Quem é responsável?", options: ["A IA", "Uma pessoa da sua organização", "Ninguém", "Só a empresa do programa"], answer: 1, why: "Uma pessoa é sempre responsável pelas ações da IA feitas em nome da organização." },
          { objective: "O3", q: "Qual destes é um MAU uso da IA?", options: ["Escrever a ordem de trabalho de uma reunião", "Dar ideias de nomes para um evento", "Resumir um relatório longo", "Tomar a decisão final de despedir um funcionário"], answer: 3, why: "As decisões finais sobre pessoas precisam do julgamento humano." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conduzir os primeiros passos da sua equipa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Riscos que todo o líder deve nomear",
          minutes: 5,
          goal: "Nomear os principais riscos da IA para a sua equipa e uma proteção para cada um.",
          text: [
            "Privacidade: tudo o que se escreve numa ferramenta de IA pública pode ser guardado pela empresa que a oferece, e algumas ferramentas gratuitas podem usá-lo para melhorar os seus produtos. Proteção: nenhum dado de clientes, de funcionários ou confidencial em ferramentas públicas; use as ferramentas que a sua organização aprovou.",
            "Exatidão: factos inventados, números errados, fontes que não existem. Proteção: uma pessoa verifica os factos, os números e as citações antes de qualquer coisa sair. Preconceito e justiça: as respostas podem ser injustas para grupos de pessoas. Proteção: nenhuma decisão sobre pessoas tomada só pela IA.",
            "Segurança e agentes: os agentes que leem e-mails ou páginas da internet podem ser enganados por instruções escondidas (em inglês, \"prompt injection\"), e agentes com acesso a mais podem causar danos reais. Proteção: acesso mínimo e aprovação humana para as ações. Para um quadro mais completo, o AI Risk Management Framework do NIST (instituto de normas dos Estados Unidos), que é gratuito, organiza este trabalho em quatro funções: Govern, Map, Measure e Manage (governar, mapear, medir e gerir)."
          ],
          words: [["Prompt injection (injeção de instruções)", "texto escondido que tenta fazer uma IA seguir as instruções de outra pessoa."], ["Acesso mínimo", "dar a uma ferramenta ou a uma pessoa só o acesso de que o trabalho precisa."], ["NIST AI RMF", "um quadro gratuito e voluntário dos Estados Unidos para gerir os riscos da IA."]],
          slides: [
            { title: "Privacidade", bullets: ["As ferramentas públicas podem guardar o que escreve", "Nenhum dado de clientes, de funcionários ou confidencial", "Use ferramentas aprovadas"] },
            { title: "Exatidão e justiça", bullets: ["Verifique factos, números e citações", "Nenhuma decisão sobre pessoas tomada só pela IA"] },
            { title: "Segurança e agentes", bullets: ["Instruções escondidas podem enganar os agentes", "Acesso mínimo, aprovação humana para as ações"] },
            { title: "Um quadro gratuito", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "Voluntário; está a ser revisto: veja a página do NIST"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }, { name: "OWASP Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/" }],
          tryIt: "Escreva os três maiores riscos da IA para o trabalho real da sua equipa e, para cada um, uma proteção que pode pôr em prática este mês.",
          youCanNow: "nomear os principais riscos da IA para a sua equipa e uma proteção prática para cada um.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer acesso mínimo para as ferramentas de IA?", options: ["Dar às ferramentas de IA o máximo de acesso possível para funcionarem bem", "Dar a cada ferramenta só o acesso de que o seu trabalho precisa", "Deixar só o líder usar a IA", "Usar a IA o menos possível"], answer: 1, why: "O acesso mínimo limita os danos se uma ferramenta errar ou for enganada." },
            { objective: "O4", q: "A sua equipa trata de registos de clientes. Que par de risco e proteção é o mais adequado?", options: ["Risco: a IA é lenta. Proteção: comprar um computador mais rápido", "Risco: a IA é nova. Proteção: esperar cinco anos", "Risco: o pessoal gosta da IA. Proteção: bloquear todos os sites", "Risco: dados pessoais vão parar a ferramentas públicas. Proteção: tirar os dados primeiro ou usar uma ferramenta aprovada"], answer: 3, why: "Uma boa proteção corresponde ao risco real no trabalho da própria equipa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Experimente você mesmo: uma demonstração ao vivo que pode mostrar",
          minutes: 5,
          goal: "Fazer uma demonstração de IA curta e segura com uma tarefa real da equipa, sem dados privados.",
          text: [
            "Os líderes que usam a IA eles próprios conduzem melhor o seu uso. Escolha uma tarefa real sem dados privados: a ordem de trabalho da reunião de equipa da próxima semana, um primeiro rascunho de um anúncio de emprego ou um resumo em linguagem simples de uma política pública.",
            "Escreva um pedido claro: o que precisa, o contexto (sem nomes nem dados privados) e o formato. Depois melhore-o com um pedido de seguimento, como \"faça mais curto\" ou \"escreva para o pessoal novo\". Verifique todos os factos antes de os usar.",
            "Na sua apresentação, mostre o processo todo, incluindo um erro se a IA o cometer. Ver um líder apanhar um erro da IA ensina mais à equipa do que uma demonstração perfeita."
          ],
          steps: ["Escolha uma tarefa real sem dados privados.", "Escreva um pedido: necessidade, contexto, formato.", "Faça um pedido de seguimento para o melhorar.", "Verifique os factos e corrija os erros.", "Anote o que vai mostrar à equipa."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a uma ferramenta de IA para pedir alguma coisa."], ["Pedido de seguimento", "um segundo pedido que melhora a primeira resposta."]],
          slides: [
            { title: "Use você mesmo primeiro", bullets: ["Os líderes que usam a IA conduzem melhor o seu uso", "Escolha uma tarefa real, sem dados privados"] },
            { title: "Uma boa demonstração", bullets: ["Pedido claro: necessidade, contexto, formato", "Um pedido de seguimento para melhorar", "Verifique todos os factos"] },
            { title: "Mostre também os erros", bullets: ["Apanhar um erro da IA é o que mais ensina"] }
          ],
          tryIt: "Use o ChatGPT, o Copilot, o Gemini ou o Claude para escrever a ordem de trabalho da reunião de equipa da próxima semana. Faça um pedido de seguimento, verifique-a e guarde a versão de antes e a de depois para a sua apresentação.",
          youCanNow: "fazer uma demonstração de IA curta, segura e honesta com uma tarefa real da equipa.",
          quickCheck: [
            { objective: "O5", q: "O que faz uma boa demonstração de IA ao vivo para a sua equipa?", options: ["Uma tarefa real sem dados privados", "Uma tarefa com o processo de um cliente verdadeiro", "Uma tarefa inventada sem ligação ao seu trabalho", "Uma demonstração que esconde os erros"], answer: 0, why: "Uma tarefa real mas sem dados privados mostra o valor sem pôr em risco os dados de ninguém." },
            { objective: "O5", q: "Durante a demonstração, a IA escreve uma ordem de trabalho com a data errada da reunião. O que faz?", options: ["Passa essa parte depressa", "Culpa a ferramenta e para", "Mostra como apanhou o erro e faz um pedido de seguimento para o corrigir", "Diz que ela erra sempre assim"], answer: 2, why: "Mostrar como apanhou o erro ensina à equipa o hábito de verificar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Apresentar o tema à equipa e definir uma primeira regra básica",
          minutes: 6,
          goal: "Fazer uma apresentação de dez minutos sobre IA para a equipa que termina com uma regra básica.",
          text: [
            "Uma boa primeira apresentação é curta e prática. Estrutura: dois minutos sobre o que são a IA e a IA agêntica; três minutos de demonstração ao vivo; dois minutos sobre bons usos para a nossa equipa; dois minutos sobre riscos; um minuto sobre a regra básica e a quem fazer perguntas.",
            "Escolha uma regra básica que proteja as pessoas e seja fácil de lembrar. A primeira regra mais útil para a maioria das equipas: \"Nenhum dado pessoal de clientes, alunos, doentes ou funcionários entra em ferramentas de IA públicas.\" Diga também a quem perguntar em caso de dúvida.",
            "Convide as pessoas a fazer perguntas e a falar das suas preocupações. Algumas vão estar entusiasmadas, outras preocupadas com o emprego. Diga claramente o que sabe, o que não sabe, e que as pessoas continuam a ser responsáveis pelo seu trabalho. Depois envie a regra por escrito."
          ],
          steps: ["Dois minutos: o que são a IA e a IA agêntica.", "Três minutos: demonstração ao vivo.", "Dois minutos: bons usos para a nossa equipa.", "Dois minutos: riscos.", "Um minuto: a regra básica e a quem perguntar; depois envie-a por escrito."],
          words: [["Regra básica", "uma regra simples e comum que todos seguem."], ["Apresentação (briefing)", "uma reunião curta para dar a uma equipa a mesma informação."]],
          slides: [
            { title: "A apresentação de dez minutos", bullets: ["2 min: o que são a IA e os agentes", "3 min: demonstração ao vivo", "2 min: bons usos; 2 min: riscos", "1 min: a regra básica"] },
            { title: "Uma primeira regra básica", bullets: ["Nenhum dado pessoal em ferramentas de IA públicas", "Diga a quem perguntar em caso de dúvida"] },
            { title: "Conduza a conversa", bullets: ["Convide perguntas e preocupações", "Diga o que sabe e o que não sabe", "As pessoas continuam responsáveis; envie por escrito"] }
          ],
          tryIt: "Tarefa final: prepare a sua apresentação de dez minutos com as cinco partes acima, usando a sua demonstração da Lição 5 e os seus riscos da Lição 4. Faça-a à sua equipa (ou grave-a), termine com uma regra básica e envie a regra por escrito depois.",
          youCanNow: "apresentar a IA à sua equipa com clareza e definir uma primeira regra básica que protege as pessoas.",
          quickCheck: [
            { objective: "O6", q: "Com que deve terminar uma primeira apresentação sobre IA?", options: ["Uma lista de todas as ferramentas de IA do mercado", "Uma regra básica clara e a quem perguntar", "Uma promessa de que a IA não vai mudar nada", "Um teste com notas"], answer: 1, why: "Uma regra clara e uma pessoa de contacto dão à equipa um ponto de partida comum." },
            { objective: "O6", q: "Um dia depois da sua apresentação, qual é o melhor passo seguinte?", options: ["Esperar para ver se alguém se lembra da regra", "Acrescentar mais cinco regras", "Pedir à IA para lembrar toda a gente", "Enviar a regra básica à equipa por escrito"], answer: 3, why: "Uma regra escrita é fácil de encontrar e de consultar outra vez." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Conduzir os primeiros passos da sua equipa",
        questions: [
          { objective: "O4", q: "Um funcionário quer colar a reclamação de um cliente, com nome e morada, numa ferramenta de IA pública e gratuita. Qual é a melhor resposta?", options: ["Pode avançar", "Colar só a morada", "Tirar primeiro os dados pessoais, ou usar uma ferramenta aprovada", "Perguntar à IA se é seguro"], answer: 2, why: "Os dados pessoais ficam fora das ferramentas públicas." },
          { objective: "O4", q: "Quais são as quatro funções do AI Risk Management Framework do NIST?", options: ["Govern, Map, Measure, Manage", "Plan, Build, Test, Ship", "Buy, Install, Train, Use", "Read, Write, Check, Send"], answer: 0, why: "O NIST nomeia Govern, Map, Measure e Manage (governar, mapear, medir e gerir)." },
          { objective: "O5", q: "A sua demonstração ao vivo dá uma data errada. O que deve fazer na apresentação?", options: ["Escondê-la", "Mostrar como a apanhou e corrigiu", "Parar a apresentação", "Culpar a ferramenta e seguir em frente"], answer: 1, why: "Apanhar os erros abertamente ensina o hábito de verificar." },
          { objective: "O6", q: "Qual é a melhor primeira regra básica para a maioria das equipas?", options: ["\"Nenhum dado pessoal em ferramentas de IA públicas; pergunte em caso de dúvida.\"", "\"Nunca usar IA.\"", "\"Só os gestores podem usar IA.\"", "\"Usar IA para tudo.\""], answer: 0, why: "Protege as pessoas e é fácil de lembrar." },
          { objective: "O6", q: "Um membro da equipa está preocupado com a possibilidade de a IA o substituir. Um bom líder:", options: ["Termina a reunião", "Ignora a preocupação", "Promete que nada vai mudar nunca", "Diz claramente o que se sabe e que as pessoas continuam responsáveis"], answer: 3, why: "Respostas honestas e simples criam confiança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Liderança na Era da IA Agêntica 1: Compreender a IA",
    questions: [
      { objective: "O1", q: "A melhor descrição da IA é:", options: ["Um novo tipo de ecrã de computador", "Um programa que faz tarefas que normalmente precisam do julgamento de uma pessoa", "Uma aplicação de redes sociais", "Só um tipo de robô"], answer: 1, why: "Esta é a definição simples." },
      { objective: "O1", q: "Aprendizagem automática quer dizer:", options: ["O pessoal aprende a usar máquinas", "As máquinas reparam-se sozinhas", "Um programa aprende padrões a partir de exemplos", "Escrever mais depressa"], answer: 2, why: "Aprende com exemplos em vez de regras escritas à mão." },
      { objective: "O1", q: "Qual destes é uma ferramenta de IA generativa?", options: ["Uma impressora", "Uma calculadora", "O Microsoft Copilot", "Um arquivo de documentos"], answer: 2, why: "O Copilot, o ChatGPT, o Gemini e o Claude geram textos." },
      { objective: "O1", q: "LLM quer dizer:", options: ["Grande modelo de linguagem (large language model)", "Longo memorando legal", "Máquina de baixo nível", "Módulo de aprendizagem local"], answer: 0, why: "Os LLM fazem funcionar os assistentes de conversa." },
      { objective: "O2", q: "Um assistente de IA:", options: ["Nunca se engana", "Age sempre sozinho", "Assina contratos", "Responde e escreve rascunhos quando lhe pedem"], answer: 3, why: "Os assistentes respondem; quem decide é você." },
      { objective: "O2", q: "Um agente de IA:", options: ["Só responde a perguntas", "Planeia passos e age com ferramentas para chegar a um objetivo", "É um funcionário humano", "Não consegue usar o e-mail nem a agenda"], answer: 1, why: "Os agentes fazem ações." },
      { objective: "O2", q: "A IA agêntica muda a pergunta do líder para:", options: ["É popular?", "De que cor é?", "Quantas palavras consegue escrever?", "O que pode fazer, quem aprova, quem é responsável?"], answer: 3, why: "A ação exige permissões e responsabilidade." },
      { objective: "O3", q: "Alucinação quer dizer que a IA:", options: ["Se recusa a responder", "É muito rápida", "Escreve algo que parece verdade mas é inventado", "Fala em voz alta"], answer: 2, why: "O conteúdo inventado tem de ser verificado." },
      { objective: "O3", q: "Qual destes é um BOM uso da IA para uma equipa?", options: ["O primeiro rascunho de um anúncio de emprego que uma pessoa revê", "Decidir quem recebe um aumento", "Enviar avisos legais sem verificar", "Guardar os registos médicos do pessoal"], answer: 0, why: "Rascunhos revistos por pessoas poupam tempo com segurança." },
      { objective: "O3", q: "As respostas da IA podem ser injustas para grupos de pessoas por causa de:", options: ["Internet lenta", "Preconceitos aprendidos com os dados de treino", "A escolha das letras", "O tamanho do ecrã"], answer: 1, why: "Os padrões dos dados de treino podem trazer preconceitos." },
      { objective: "O3", q: "O teste de explicar pergunta:", options: ["Diria à pessoa afetada que foi a IA que fez isto?", "A IA consegue explicar-se?", "É barato?", "É rápido?"], answer: 0, why: "Sentir-se à vontade para o explicar é sinal de um uso aceitável." },
      { objective: "O4", q: "Prompt injection (injeção de instruções) é:", options: ["Um plano de preços", "Um tratamento médico", "Um pedido mais rápido", "Texto escondido que tenta fazer a IA seguir as ordens de outra pessoa"], answer: 3, why: "Os agentes que leem e-mails ou páginas da internet podem ser enganados." },
      { objective: "O4", q: "Acesso mínimo quer dizer:", options: ["Nenhum acesso", "Só o acesso de que o trabalho precisa", "Acesso total para ser mais rápido", "Acesso só para os gestores"], answer: 1, why: "Menos acesso limita os danos dos erros." },
      { objective: "O4", q: "O NIST AI RMF é:", options: ["Uma ferramenta de IA", "Uma lei com multas", "Um quadro gratuito e voluntário para gerir os riscos da IA", "Um certificado de formação"], answer: 2, why: "O NIST descreve-o como voluntário." },
      { objective: "O4", q: "Antes de usar num relatório factos escritos pela IA, deve:", options: ["Pedir à IA que prometa", "Confiar neles se parecerem certos", "Verificá-los numa fonte de confiança", "Tirar todos os números"], answer: 2, why: "Uma pessoa verifica os factos e os números." },
      { objective: "O5", q: "Uma boa demonstração ao vivo usa:", options: ["Uma tarefa real sem dados privados", "O processo completo de um cliente", "Os dados dos salários do pessoal", "Palavras-passe"], answer: 0, why: "Tarefas reais mas sem dados privados são seguras e relevantes." },
      { objective: "O5", q: "Porque mostrar um erro da IA durante a sua apresentação?", options: ["Prova que a IA não serve para nada", "É engraçado", "Faz a reunião acabar mais cedo", "Ensina o hábito de verificar"], answer: 3, why: "Ver os erros a serem apanhados ensina mais do que uma demonstração perfeita." },
      { objective: "O6", q: "Uma primeira apresentação deve terminar com:", options: ["Uma política de 50 páginas", "Uma regra básica clara e a quem perguntar", "Nenhuma conclusão", "A compra de um programa"], answer: 1, why: "Uma regra simples é lembrada e seguida." },
      { objective: "O6", q: "Depois da apresentação, deve:", options: ["Proibir perguntas", "Nunca mais falar de IA", "Apagar a demonstração", "Enviar a regra básica por escrito"], answer: 3, why: "Pôr por escrito ajuda a regra a ficar." },
      { objective: "O6", q: "Quando as pessoas usam IA no seu trabalho, quem continua a ser responsável por esse trabalho?", options: ["A empresa de IA", "A ferramenta de IA", "As pessoas que fazem o trabalho", "Ninguém"], answer: 2, why: "A responsabilidade fica com as pessoas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 6, 8, 10, 11, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Explicação simples", objective: "O1", notYet: "Usa linguagem técnica, ou confunde a IA generativa com a IA agêntica.", meets: "Explica a IA generativa e a IA agêntica com palavras simples.", exceeds: "Usa um exemplo do trabalho da própria equipa que todos reconhecem." },
      { name: "Três bons usos", objective: "O3", notYet: "Menos de três usos, ou usos que não são adequados.", meets: "Nomeia três bons usos para o trabalho real da equipa.", exceeds: "Diz quais precisam de uma pessoa para verificar o resultado." },
      { name: "Três riscos", objective: "O4", notYet: "Os riscos são gerais ou faltam.", meets: "Nomeia três riscos que correspondem ao trabalho real da equipa.", exceeds: "Dá uma proteção para cada risco." },
      { name: "Exemplo ao vivo", objective: "O5", notYet: "Nenhum exemplo, ou o exemplo usa dados privados.", meets: "Mostra um exemplo ao vivo com um assistente de IA gratuito, numa tarefa sem dados privados.", exceeds: "Mostra um pedido de seguimento e como o resultado foi verificado." },
      { name: "Regra básica", objective: "O6", notYet: "Nenhuma regra básica, ou uma regra vaga.", meets: "Termina com uma regra básica clara que todos vão seguir.", exceeds: "Diz a quem perguntar e envia a regra por escrito depois." }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Líderes que fazem a apresentação à sua equipa em 30 dias (inquérito de seguimento)",
      "Equipas que têm uma regra básica sobre IA por escrito em 30 dias (inquérito de seguimento)",
      "Líderes que seguem para o curso 2 da série Liderança na Era da IA Agêntica"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com um assistente de IA gratuito, como o ChatGPT, o Copilot, o Gemini ou o Claude",
      "Uma lista das tarefas de rotina da sua equipa",
      "Papel ou um documento para as notas e o plano da apresentação",
      "Cerca de 60 minutos no total, mais a apresentação de dez minutos à equipa"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois peça aos gestores que partilhem uma tarefa que marcaram como BOM, CUIDADO ou MAU e porquê.",
      "Faça ao vivo com o grupo a demonstração da Lição 5, incluindo um erro que é apanhado.",
      "Lembre a todos que sigam as políticas de IA e de dados da sua própria organização e que não usem dados pessoais na prática.",
      "Deixe os líderes praticar a apresentação em pares antes de a fazerem à sua equipa.",
      "Avalie a tarefa final com a grelha de avaliação e peça a regra básica escrita como prova."
    ]
  }
};
