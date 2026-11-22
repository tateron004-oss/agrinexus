"use strict";

// Koach Learn course (Portuguese translation of artificial-intelligence/agentic-multi-agent.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python code, JSON and status names stay exactly as in the English.

module.exports = {
  id: "agentic-multi-agent-pt",
  lang: "pt",
  translationOf: "agentic-multi-agent",
  category: "Artificial Intelligence",
  name: "Sistemas Multiagente",
  skills: "Decidir quando um agente basta, Escolher um padrão: pipeline, orquestrador, revisor, Escrever papéis e passagens de trabalho, Partilhar o estado com segurança, Parar ciclos de revisão, Comparar com um único agente",
  outcome: "desenhar e construir em Python um pequeno sistema multiagente, com um agente redator e um agente revisor com papéis claros, uma passagem de trabalho escrita, um estado partilhado e um limite de rondas, e mostrar com um teste simples se ele é melhor do que um único agente.",
  about: [
    "Este é o curso 5 do programa Desenhar, Construir e Implementar Agentes de IA Autónomos. Um sistema multiagente divide um trabalho entre vários agentes, cada um com o seu papel, as suas instruções e as suas ferramentas, tal como uma equipa divide o trabalho. Bem feito, pode subir a qualidade. Mal feito, multiplica o custo, a confusão e os erros.",
    "O Capítulo 1 trata do desenho: quando usar mais de um agente, os padrões comuns (pipeline, orquestrador e trabalhadores, redator e revisor) e como escrever papéis e passagens de trabalho. O Capítulo 2 trata da construção: estado partilhado, parar as idas e voltas sem fim, manter as pessoas no comando e testar se a equipa é mesmo melhor do que um agente.",
    "Vai reutilizar o seu ciclo em Python e a função auxiliar ask_model do curso 3. O código aparece em linhas curtas nas lições. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Construa em Python um sistema de dois agentes: um agente redator escreve uma descrição de produto com um parágrafo a partir de uma ficha de dados curta, e um agente revisor verifica-a com uma lista de verificação escrita (usa só dados da ficha, menos de 80 palavras, nenhuma afirmação como \"o melhor\" ou \"garantido\") e devolve JSON: aprovar ou rever, com as razões. Passe o trabalho por um dicionário de estado partilhado, pare depois de no máximo 3 rondas e imprima o registo completo. Depois passe as mesmas 3 fichas de dados por um único agente e escreva qual foi melhor e porquê.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos do programa Desenhar, Construir e Implementar Agentes de IA Autónomos que terminaram os cursos 1 a 4: donos de pequenos negócios, pessoas que estão a mudar de carreira, estudantes e funcionários que querem saber quando e como usar uma equipa de agentes.",
    startingPoint: "Sabem construir em Python um único agente com ferramentas, verificação de argumentos, limite de passos, registo da execução e aprovação nas ações de escrita. Ainda não dividiram um trabalho entre agentes.",
    gap: "Os sistemas multiagente estão na moda, mas, mal feitos, multiplicam o custo, a confusão e os erros. Os alunos precisam de decidir quando uma equipa vale a pena, desenhar papéis e passagens de trabalho claros, parar ciclos sem fim, manter uma pessoa no comando e provar com um teste se a equipa é melhor do que um agente.",
    constraints: [
      "Nível de leitura: palavras simples; código em linhas curtas para copiar",
      "Aparelhos: um computador com navegador de internet; os níveis gratuitos de API limitam quantas chamadas ao modelo pode fazer",
      "A prática usa só fichas de dados inventadas",
      "Cada ciclo tem um limite de rondas e entrega a uma pessoa o trabalho não resolvido",
      "Tempo: lições curtas, cada uma com uma tarefa de prática"
    ],
    prerequisites: "Os cursos 3 e 4 do programa Desenhar, Construir e Implementar Agentes de IA Autónomos (\"Construir Agentes de IA\" e \"Uso de Ferramentas e Automação com Agentes de IA\")."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um trabalho que talvez queira automatizar", action: "decidir se precisa de um agente ou de uma equipa, usando o teste da contratação", standard: "com uma razão de uma frase para cada trabalho" },
    { id: "O2", condition: "Com um trabalho que precisa de uma equipa", action: "escolher um padrão (pipeline, orquestrador e trabalhadores, ou redator e revisor) e desenhar como o trabalho passa entre os agentes", standard: "escrevendo o que passa em cada seta" },
    { id: "O3", condition: "Para cada agente da equipa", action: "escrever um pedido de papel e um formato JSON de passagem de trabalho", standard: "com um só trabalho por agente e uma lista de verificação do revisor que se possa verificar" },
    { id: "O4", condition: "No seu código Python", action: "manter o trabalho da equipa num único estado partilhado que só o seu código atualiza", standard: "registando o estado depois de cada passo" },
    { id: "O5", condition: "Com um ciclo de redator e revisor", action: "acrescentar um limite de rondas e entregar a uma pessoa o trabalho não resolvido", standard: "parando com needs_human depois de no máximo 3 rondas" },
    { id: "O6", condition: "Com as mesmas entradas de teste", action: "comparar a equipa com um único agente de referência quanto à qualidade e às chamadas ao modelo", standard: "pontuando os dois com a mesma lista de verificação e escolhendo o mais simples quando empatam" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Desenhar uma equipa de agentes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Quando um agente basta, e quando não basta",
          minutes: 5,
          goal: "Decidir se uma tarefa precisa de mais de um agente.",
          text: [
            "Comece com um agente. Cada agente a mais acrescenta chamadas ao modelo (custo e tempo), passagens de trabalho (lugares onde se perde informação) e mais coisas para testar. Muitas tarefas que parecem precisar de uma equipa funcionam bem com um agente com um bom pedido e boas ferramentas.",
            "Pense em mais de um agente quando: o trabalho tem competências claramente diferentes (pesquisar, depois escrever, depois verificar); um só pedido está a ficar longo e confuso demais; quer uma verificação independente, porque um revisor com instruções novas apanha erros que o redator não vê; ou algumas partes podem correr ao mesmo tempo.",
            "Um teste útil: se contrataria duas pessoas diferentes para isto, dois agentes podem ajudar. Se uma só pessoa o conseguisse fazer com uma lista de verificação, um agente com uma lista de verificação é provavelmente melhor."
          ],
          words: [["Sistema multiagente", "vários agentes de IA, cada um com o seu papel, a trabalhar juntos num só trabalho."], ["Passagem de trabalho", "passar trabalho e informação de um agente para outro (em inglês, \"handoff\")."], ["Custo extra", "o custo e o esforço a mais que um desenho acrescenta (em inglês, \"overhead\")."]],
          slides: [
            { title: "Comece com um agente", bullets: ["Cada agente a mais acrescenta custo e tempo", "Cada passagem de trabalho pode perder informação", "Mais partes para testar"] },
            { title: "Pense numa equipa quando", bullets: ["O trabalho precisa de competências claramente diferentes", "Um só pedido está longo e confuso demais", "Quer uma verificação independente", "Algumas partes podem correr ao mesmo tempo"] },
            { title: "O teste da contratação", bullets: ["Duas pessoas diferentes? Talvez dois agentes", "Uma pessoa com uma lista de verificação? Um agente"] }
          ],
          tryIt: "Escreva três trabalhos que talvez queira automatizar. Para cada um, escreva \"um agente\" ou \"equipa\" e uma frase a explicar porquê, usando o teste da contratação.",
          youCanNow: "decidir quando uma tarefa precisa mesmo de mais de um agente.",
          quickCheck: [
            { objective: "O1", q: "O que é o teste da contratação?", options: ["Perguntar se uma pessoa passaria numa entrevista de emprego", "Testar se uma empresa pode contratar um modelo", "Perguntar se contrataria duas pessoas diferentes para este trabalho", "Contar quantas ferramentas um trabalho precisa"], answer: 2, why: "Se não contrataria duas pessoas, um agente costuma bastar." },
            { objective: "O1", q: "Um trabalho é separar mensagens em quatro categorias com uma lista de verificação. O que construiria?", options: ["Um agente com instruções claras", "Uma equipa de quatro agentes, um por categoria", "Um orquestrador com trabalhadores", "Um redator e um revisor"], answer: 0, why: "Um trabalho simples e bem definido não precisa do custo e das passagens de trabalho de uma equipa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Padrões comuns: pipeline, orquestrador, revisor",
          minutes: 6,
          goal: "Escolher um padrão multiagente que sirva para uma tarefa.",
          text: [
            "Pipeline (cadeia): os agentes trabalham numa ordem fixa, e cada um passa o seu resultado ao seguinte, como numa linha de montagem: pesquisar, depois escrever, depois formatar. É simples de construir e de corrigir, porque sabe sempre quem age a seguir.",
            "Orquestrador e trabalhadores: um agente (o orquestrador) divide o objetivo em partes, entrega cada parte a um agente trabalhador e depois junta os resultados. É flexível, mas o orquestrador pode dividir mal o trabalho, e mais liberdade quer dizer mais coisas para verificar.",
            "Redator e revisor: um agente produz, e um segundo avalia com uma lista de verificação e aprova ou devolve o trabalho com as razões. Este é o padrão mais útil para principiantes, porque acrescenta uma verificação de qualidade independente. Precisa de um limite de rondas para que os dois nunca discutam para sempre."
          ],
          words: [["Pipeline", "agentes que trabalham numa ordem fixa, e cada um passa o trabalho ao seguinte."], ["Orquestrador", "um agente que divide um objetivo em tarefas e as entrega a outros agentes."], ["Agente revisor", "um agente que verifica o trabalho de outro agente com regras claras."]],
          slides: [
            { title: "Pipeline", bullets: ["Ordem fixa: pesquisar, escrever, formatar", "Fácil de construir e de corrigir"] },
            { title: "Orquestrador e trabalhadores", bullets: ["Um agente divide o objetivo", "Os trabalhadores fazem as partes", "Flexível, mas mais difícil de verificar"] },
            { title: "Redator e revisor", bullets: ["Um produz, outro avalia com uma lista de verificação", "Aprova, ou devolve com as razões", "Precisa de um limite de rondas"] }
          ],
          tryIt: "Para o trabalho de \"equipa\" da Lição 1, desenhe os agentes como caixas com setas (em papel serve). Escreva que padrão é e o que passa em cada seta.",
          youCanNow: "escolher entre um pipeline, um orquestrador com trabalhadores e um redator com um revisor.",
          quickCheck: [
            { objective: "O2", q: "O que faz o orquestrador no padrão orquestrador e trabalhadores?", options: ["Verifica cada rascunho com uma lista de verificação", "Divide o objetivo e entrega as partes aos trabalhadores", "Guarda ficheiros no disco", "Só corre no fim"], answer: 1, why: "O orquestrador divide o trabalho e passa as partes aos agentes trabalhadores." },
            { objective: "O2", q: "O seu trabalho segue sempre pesquisar, depois escrever, depois formatar, nessa ordem. Que padrão serve?", options: ["Redator e revisor", "Orquestrador e trabalhadores", "Nenhum padrão; use três chatbots", "Pipeline"], answer: 3, why: "Uma ordem fixa de passos é um pipeline, que também é fácil de corrigir." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever papéis e passagens de trabalho",
          minutes: 5,
          goal: "Escrever um pedido de papel para cada agente e um formato de passagem de trabalho entre eles.",
          text: [
            "Cada agente recebe o seu próprio pedido de sistema curto: quem é, o seu único trabalho, as suas ferramentas (só as que precisa) e o seu formato de resposta. O redator não precisa da lista de verificação completa do revisor; o revisor não precisa de nenhuma ferramenta de escrita.",
            "A passagem de trabalho é a mensagem que passa entre os agentes. Faça-a estruturada, não em conversa: {\"draft\": \"...\", \"facts_used\": [...]} do redator para o revisor, e {\"decision\": \"approve\" or \"revise\", \"reasons\": [...]} de volta. Passagens estruturadas mostram claramente o que foi passado e são fáceis de verificar pelo código.",
            "Dê ao revisor uma lista de verificação, não uma impressão. \"Está bom?\" recebe concordância. \"Cada dado aparece na ficha de dados? Tem menos de 80 palavras? Evita as palavras o melhor e garantido?\" recebe uma verificação a sério."
          ],
          steps: ["Escreva um pedido de papel para cada agente: papel, um só trabalho, ferramentas, formato de resposta.", "Dê a cada agente só as ferramentas de que precisa.", "Defina a passagem de trabalho como JSON com chaves fixas.", "Escreva a lista de verificação do revisor como perguntas de sim/não."],
          words: [["Pedido de papel", "o pedido de sistema que dá a um agente o seu trabalho e as suas regras (em inglês, \"role prompt\")."], ["Lista de verificação", "uma lista de verificações concretas de sim/não usada para avaliar um trabalho."]],
          slides: [
            { title: "Um pedido de papel por agente", bullets: ["Quem é e o seu único trabalho", "Só as ferramentas de que precisa", "O seu formato de resposta"] },
            { title: "Passagens de trabalho estruturadas", bullets: ["Redator -> revisor: rascunho e dados usados", "Revisor -> redator: decisão e razões", "O código pode verificar cada passagem"] },
            { title: "Dê ao revisor uma lista de verificação", bullets: ["\"Está bom?\" recebe concordância fácil", "Verificações de sim/não dão uma revisão a sério"] }
          ],
          tryIt: "Escreva o pedido de papel do redator, o pedido de papel do revisor com uma lista de verificação de 3 pontos, e os dois formatos JSON de passagem de trabalho para o sistema da tarefa final.",
          youCanNow: "escrever pedidos de papel e passagens de trabalho estruturadas para uma equipa de agentes.",
          quickCheck: [
            { objective: "O3", q: "O que deve estar num pedido de papel?", options: ["O único trabalho do agente, as suas ferramentas e o seu formato de resposta", "As instruções de todos os outros agentes", "A sua chave de API", "Uma lista de todas as execuções anteriores"], answer: 0, why: "Um pedido de papel mantém cada agente concentrado no seu próprio trabalho e formato." },
            { objective: "O3", q: "Ao seu revisor foi dito \"Verifique se o rascunho está bom.\" O que mudaria?", options: ["Nada, é curto", "Dar-lhe ferramentas de escrita para corrigir os rascunhos", "Trocar por uma lista de perguntas concretas a que pode responder sim ou não", "Deixá-lo decidir as suas próprias regras"], answer: 2, why: "Perguntas de revisão vagas levam a concordar com facilidade; uma lista de verificação dá uma verificação a sério." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Desenhar uma equipa de agentes",
        questions: [
          { objective: "O1", q: "Qual é o melhor ponto de partida para a maioria dos novos projetos de agentes?", options: ["Cinco agentes", "Um orquestrador com dez trabalhadores", "Um agente com boas ferramentas", "Nenhum agente"], answer: 2, why: "Agentes a mais acrescentam custo e complexidade; comece simples." },
          { objective: "O1", q: "Qual é uma boa razão para acrescentar um agente revisor?", options: ["Ter uma verificação independente com regras claras", "Fazer o projeto parecer maior", "Gastar mais tokens", "Porque dois é sempre melhor"], answer: 0, why: "Instruções novas e uma lista de verificação apanham erros que o redator não vê." },
          { objective: "O2", q: "Pesquisar, depois escrever, depois formatar, numa ordem fixa, é um:", options: ["Esquema", "Orquestrador", "Gatilho", "Pipeline"], answer: 3, why: "Um pipeline passa o trabalho numa ordem fixa." },
          { objective: "O3", q: "Que passagem de trabalho é mais fácil de verificar pelo código?", options: ["\"Aqui está o que eu acho, espero que ajude!\"", "{\"decision\": \"revise\", \"reasons\": [\"over 80 words\"]}", "Um parágrafo longo", "Uma imagem"], answer: 1, why: "O JSON estruturado tem chaves fixas que o código consegue ler." },
          { objective: "O3", q: "Que instrução ao revisor dá a verificação mais a sério?", options: ["\"Está bom?\"", "\"Seja crítico.\"", "\"Gosta dele?\"", "\"Cada dado está na ficha de dados, e tem menos de 80 palavras?\""], answer: 3, why: "Verificações concretas de sim/não evitam a concordância fácil." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir e testar a equipa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Estado partilhado: um só lugar para o trabalho",
          minutes: 5,
          goal: "Manter o trabalho de uma equipa num único estado partilhado que todos os agentes leem.",
          text: [
            "O estado partilhado é um só lugar onde vive o trabalho da equipa, e pertence ao seu código, não a nenhum agente. Em Python, um dicionário serve: state = {'facts': FACTS, 'draft': None, 'reviews': [], 'round': 0, 'status': 'drafting'}.",
            "Cada agente recebe só as partes de que precisa e devolve uma passagem de trabalho; o seu código verifica a passagem e atualiza o estado. O redator lê os dados e a última revisão; o revisor lê os dados e o rascunho. Nenhum agente mexe diretamente no estado.",
            "Assim a verdade fica num só lugar, o registo fica fácil (guarde o estado depois de cada passo) e os agentes deixam de passar cópias que se vão afastando umas das outras. Se o resultado de um agente for mau, o seu código pode recusá-lo antes de chegar ao agente seguinte."
          ],
          steps: ["Crie um dicionário de estado com todos os campos de que a equipa precisa.", "Dê a cada agente só os campos de que precisa.", "Verifique no código cada passagem de trabalho antes de atualizar o estado.", "Guarde uma cópia do estado no registo depois de cada passo."],
          words: [["Estado partilhado", "o registo único do trabalho de uma equipa, que o código guarda e que todos os agentes leem."], ["Desvio", "quando cópias da mesma informação ficam aos poucos diferentes umas das outras (em inglês, \"drift\")."]],
          slides: [
            { title: "Um só lugar para o trabalho", bullets: ["state = {facts, draft, reviews, round, status}", "Pertence ao seu código, não a um agente"] },
            { title: "Os agentes leem, o código escreve", bullets: ["Cada agente recebe só os campos de que precisa", "O código verifica a passagem e depois atualiza o estado"] },
            { title: "Porque ajuda", bullets: ["Uma só verdade, sem cópias que se desviam", "Registo fácil: guarde o estado em cada passo", "Um resultado mau é parado antes do agente seguinte"] }
          ],
          tryIt: "Crie o dicionário de estado para a tarefa final. Escreva duas funções, run_writer(state) e run_reviewer(state), que chamam cada uma ask_model com o seu pedido de papel e devolvem o JSON lido, sem elas próprias mudarem o estado.",
          youCanNow: "manter o trabalho de um sistema multiagente num único estado partilhado controlado pelo seu código.",
          quickCheck: [
            { objective: "O4", q: "O que é o estado partilhado num sistema multiagente?", options: ["As notas privadas de cada agente", "Um só lugar, que pertence ao seu código, onde fica o trabalho da equipa", "A memória do modelo de um dia para o outro", "Uma palavra-passe partilhada"], answer: 1, why: "Um único estado partilhado, atualizado pelo seu código, faz todos os agentes trabalharem com os mesmos dados." },
            { objective: "O4", q: "O redator e o revisor guardam cada um a sua cópia do rascunho, e as cópias começam a ficar diferentes. O que faria?", options: ["Deixar cada agente atualizar o estado diretamente", "Acrescentar um terceiro agente para as juntar", "Ignorar se a resposta final parecer boa", "Manter um único estado partilhado que só o seu código atualiza depois de verificar cada passagem"], answer: 3, why: "Cópias separadas desviam-se; um único estado partilhado e verificado evita isso." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Parar ciclos e manter as pessoas no comando",
          minutes: 5,
          goal: "Acrescentar um limite de rondas e uma entrega a uma pessoa num ciclo de redator e revisor.",
          text: [
            "Dois agentes podem andar em ciclo para sempre: o revisor encontra sempre alguma coisa e o redator muda sempre alguma coisa. Defina MAX_ROUNDS = 3. Se o revisor não aprovar até lá, pare com o estado 'needs_human' e mostre o último rascunho e as razões.",
            "Tenha atenção a mais duas falhas de equipa. Carimbar sem ver: o revisor aprova tudo, muitas vezes porque a sua lista de verificação é vaga. Pingue-pongue: o redator corrige um problema e traz de volta um problema antigo. Leia o registo à procura das duas.",
            "Mantenha as pessoas no comando do resultado. A equipa produz um rascunho e uma revisão; uma pessoa aprova tudo o que vai ser publicado, enviado ou usado para tomar uma decisão. Mais agentes não tiram a necessidade desse ponto de controlo; tornam-no mais importante."
          ],
          steps: ["Defina MAX_ROUNDS.", "Ciclo: o redator escreve o rascunho, o revisor decide.", "Se aprovar: estado 'approved', parar.", "Se pedir revisão: passar as razões de volta ao redator.", "No limite: estado 'needs_human', mostrar o rascunho e as razões."],
          words: [["Ronda", "um ciclo de rascunho e revisão."], ["Carimbar sem ver", "aprovar tudo sem verificar a sério (em inglês, \"rubber-stamping\")."], ["Escalamento", "entregar um problema a uma pessoa quando o sistema não o consegue resolver."]],
          slides: [
            { title: "Dois agentes podem andar em ciclo para sempre", bullets: ["MAX_ROUNDS = 3", "Sem aprovação até lá: 'needs_human'"] },
            { title: "Duas falhas de equipa", bullets: ["Carimbar sem ver: aprova tudo", "Pingue-pongue: problemas antigos voltam", "Leia o registo à procura das duas"] },
            { title: "As pessoas ficam no comando", bullets: ["A equipa escreve o rascunho e revê", "Uma pessoa aprova o que é publicado ou enviado"] }
          ],
          tryIt: "Escreva o ciclo de redator e revisor com MAX_ROUNDS = 3. Teste-o com uma ficha de dados em que o redator tenha tendência para exagerar. Depois teste o limite tornando impossível a lista de verificação do revisor (\"menos de 5 palavras\") e confirme que para com needs_human.",
          youCanNow: "parar o pingue-pongue entre agentes com um limite de rondas e entregar a uma pessoa o trabalho não resolvido.",
          quickCheck: [
            { objective: "O5", q: "O que é o pingue-pongue num ciclo de redator e revisor?", options: ["Corrigir um problema traz de volta um antigo, ronda após ronda", "O revisor aprovar todos os rascunhos", "Dois agentes a correr ao mesmo tempo", "Um ciclo rápido que acaba numa ronda"], answer: 0, why: "O pingue-pongue é uma ida e volta sem fim, e é por isso que o ciclo precisa de um limite de rondas." },
            { objective: "O5", q: "O revisor não aprovou depois de 3 rondas. O que deve o sistema fazer?", options: ["Aprovar o último rascunho na mesma", "Começar outra vez na ronda 1", "Parar com needs_human e mostrar o rascunho e as razões", "Subir o limite para 10 rondas"], answer: 2, why: "O trabalho não resolvido vai para uma pessoa, com tudo o que ela precisa para decidir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "A equipa é melhor do que um agente? Testar",
          minutes: 6,
          goal: "Comparar um sistema multiagente com um único agente nos mesmos testes.",
          text: [
            "Uma equipa só vale a pena se fizer melhor. Teste-a como testou os pedidos no curso 2: as mesmas entradas, uma pontuação clara e uma comparação. Faça três fichas de dados e passe-as pela equipa e por um único agente que tem a lista de verificação no seu próprio pedido.",
            "Pontue cada resultado você mesmo com a lista de verificação do revisor (não com o agente revisor), e conte as chamadas ao modelo de cada abordagem. As chamadas ao modelo representam o custo e o tempo.",
            "Escreva o resultado com honestidade. Se o único agente teve a mesma pontuação com um terço das chamadas, use o único agente. Se a equipa apanhou erros reais que o único agente não viu, as chamadas a mais compraram-lhe qualidade. As duas respostas são um bom resultado de engenharia."
          ],
          steps: ["Faça três fichas de dados de teste.", "Passe cada uma pela equipa e por um único agente.", "Pontue você mesmo cada resultado com a lista de verificação.", "Conte as chamadas ao modelo de cada abordagem.", "Escreva que abordagem ganha e porquê."],
          words: [["Referência", "a versão simples com que compara, aqui um único agente (em inglês, \"baseline\")."], ["Chamada ao modelo", "um pedido ao modelo; mais chamadas querem dizer mais custo e mais tempo."]],
          slides: [
            { title: "Uma equipa tem de merecer o seu lugar", bullets: ["Mesmas entradas, pontuação clara, comparação", "Referência: um agente com a lista de verificação"] },
            { title: "Meça duas coisas", bullets: ["Qualidade: pontue você mesmo com a lista", "Custo: conte as chamadas ao modelo"] },
            { title: "Relate com honestidade", bullets: ["Mesma pontuação, menos chamadas? Use um agente", "Apanhou erros reais? A equipa merece o lugar"] }
          ],
          tryIt: "Tarefa final: termine o sistema de redator e revisor com estado partilhado, passagens de trabalho estruturadas e MAX_ROUNDS = 3, execute-o com três fichas de dados, execute um único agente de referência com as mesmas fichas e escreva uma comparação curta da qualidade e das chamadas ao modelo.",
          youCanNow: "construir um pequeno sistema multiagente e provar se ele é melhor do que um único agente.",
          quickCheck: [
            { objective: "O6", q: "O que é uma referência (baseline) neste curso?", options: ["O primeiro rascunho do redator", "Um único agente com que compara a equipa", "A pontuação mais baixa permitida", "O limite de rondas"], answer: 1, why: "Comparar com um único agente mostra se a equipa vale o seu custo a mais." },
            { objective: "O6", q: "A equipa tem uma pontuação um pouco mais alta do que um agente, mas usa três vezes mais chamadas ao modelo. O que faria?", options: ["Escolher sempre a equipa, porque as equipas são melhores", "Parar de testar", "Acrescentar mais agentes para subir a pontuação", "Pesar se o pequeno ganho vale o custo e o tempo a mais, e escrever porquê"], answer: 3, why: "As chamadas ao modelo representam custo e tempo, por isso a escolha pesa a qualidade contra eles." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir e testar a equipa",
        questions: [
          { objective: "O4", q: "Quem deve atualizar o estado partilhado?", options: ["Qualquer agente, quando quiser", "Só o revisor", "O seu código, depois de verificar cada passagem de trabalho", "Ninguém"], answer: 2, why: "Um estado que pertence ao código mantém uma só verdade e bloqueia resultados maus." },
          { objective: "O5", q: "O revisor não aprovou depois de 3 rondas. O que deve acontecer?", options: ["Parar com 'needs_human' e mostrar o rascunho e as razões", "Aprovar automaticamente", "Continuar até ele aprovar", "Apagar o rascunho"], answer: 0, why: "Entregue a uma pessoa em vez de continuar em ciclo." },
          { objective: "O5", q: "O revisor aprova todos os rascunhos, mesmo os maus. Isto é:", options: ["Pingue-pongue", "Carimbar sem ver", "Um pipeline", "Estado partilhado"], answer: 1, why: "Listas de verificação vagas levam a aprovar tudo." },
          { objective: "O6", q: "Como deve pontuar os resultados da equipa e do único agente?", options: ["Pontuá-los você mesmo com a mesma lista de verificação", "Perguntar ao agente revisor", "Escolher o mais longo", "Contar só as palavras"], answer: 0, why: "Uma pontuação independente e igual para os dois torna a comparação justa." },
          { objective: "O6", q: "O único agente tem a mesma pontuação que a equipa com um terço das chamadas ao modelo. O que deve fazer?", options: ["Usar a equipa na mesma", "Acrescentar mais agentes", "Parar de testar", "Usar o único agente"], answer: 3, why: "A mesma qualidade por menos custo quer dizer que o desenho mais simples ganha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Sistemas Multiagente",
    questions: [
      { objective: "O1", q: "Um sistema multiagente é:", options: ["Um agente com um pedido longo", "Vários agentes, com os seus papéis, a trabalhar num só trabalho", "Um chatbot com muitos utilizadores", "Uma base de dados"], answer: 1, why: "Cada agente tem o seu papel, as suas instruções e as suas ferramentas." },
      { objective: "O1", q: "Cada agente a mais acrescenta:", options: ["Qualidade de graça", "Nada", "Custo, passagens de trabalho e trabalho de teste", "Menos tempo"], answer: 2, why: "Mais agentes querem dizer mais chamadas e mais coisas para verificar." },
      { objective: "O1", q: "O teste da contratação pergunta:", options: ["O agente é simpático?", "Quanto custa o modelo?", "Contrataria duas pessoas diferentes para este trabalho?", "O pedido é longo?"], answer: 2, why: "Competências claramente diferentes sugerem agentes separados." },
      { objective: "O1", q: "Que tarefa precisa mais provavelmente de um só agente?", options: ["Separar mensagens em quatro categorias com uma lista de verificação", "Pesquisar, escrever e verificar os dados de um relatório longo", "Fazer dez pesquisas ao mesmo tempo", "Escrever anúncios e revê-los de forma independente"], answer: 0, why: "Uma pessoa com uma lista de verificação conseguiria fazê-la." },
      { objective: "O2", q: "No padrão orquestrador, o orquestrador:", options: ["Aprova o seu próprio trabalho", "Só formata texto", "Guarda a chave de API", "Divide o objetivo e entrega as partes aos trabalhadores"], answer: 3, why: "Planeia e distribui o trabalho, e depois junta os resultados." },
      { objective: "O2", q: "Porque é que redator e revisor é bom para principiantes?", options: ["Não precisa de limites", "Acrescenta uma verificação de qualidade independente", "Não usa nenhum modelo", "Nunca entra em ciclo"], answer: 1, why: "Um segundo agente com uma lista de verificação apanha erros." },
      { objective: "O2", q: "Um pipeline é fácil de corrigir porque:", options: ["Corre em segredo", "Não tem agentes", "Nunca falha", "Sabe sempre que agente age a seguir"], answer: 3, why: "A ordem fixa torna cada passo claro." },
      { objective: "O3", q: "Um pedido de papel deve incluir:", options: ["A sua palavra-passe", "O pedido completo de todos os outros agentes", "O único trabalho do agente, as ferramentas e o formato de resposta", "Uma piada"], answer: 2, why: "Cada agente precisa só do seu próprio papel e das suas regras." },
      { objective: "O3", q: "O agente revisor deve ter ferramentas de escrita?", options: ["Não, só o que precisa para rever", "Sim, todas as ferramentas", "Só a ferramenta de email", "Deve ter a chave de API"], answer: 0, why: "O princípio do mínimo de permissões aplica-se a todos os agentes." },
      { objective: "O3", q: "As passagens de trabalho estruturadas são úteis porque:", options: ["São mais longas", "O código consegue verificar o que foi passado", "Escondem informação", "Os modelos não conseguem ler texto"], answer: 1, why: "Chaves fixas tornam as passagens verificáveis." },
      { objective: "O3", q: "Um revisor a quem se pergunta \"Está bom?\" vai provavelmente:", options: ["Concordar com demasiada facilidade", "Verificar cada dado", "Recusar responder", "Contar as palavras com exatidão"], answer: 0, why: "Perguntas vagas recebem aprovações vagas." },
      { objective: "O4", q: "O estado partilhado pertence:", options: ["Ao navegador do utilizador", "Ao agente redator", "Ao fornecedor do modelo", "Ao seu código"], answer: 3, why: "O código guarda a única fonte de verdade." },
      { objective: "O4", q: "Desvio (drift) quer dizer:", options: ["O modelo ficar mais rápido", "Cópias de informação ficarem aos poucos diferentes", "Um limite de rondas", "Um gatilho"], answer: 1, why: "O estado partilhado evita cópias que se desviam." },
      { objective: "O4", q: "Porque guardar o estado no registo depois de cada passo?", options: ["Para saltar rondas", "Para tornar o modelo mais inteligente", "Para ver exatamente como o trabalho mudou", "Para partilhar a sua chave"], answer: 2, why: "O registo mostra cada mudança para corrigir problemas." },
      { objective: "O5", q: "MAX_ROUNDS evita:", options: ["Todas as chamadas ao modelo", "Bons rascunhos", "Idas e voltas sem fim entre agentes", "O registo"], answer: 2, why: "Um limite de rondas acaba com o pingue-pongue." },
      { objective: "O5", q: "O pingue-pongue num ciclo de redator e revisor acontece quando:", options: ["Corrigir um problema traz de volta um antigo", "O revisor aprova tudo", "O rascunho está perfeito", "O estado é guardado"], answer: 0, why: "Os agentes continuam a trocar os mesmos problemas." },
      { objective: "O5", q: "Escalamento quer dizer:", options: ["Apagar o registo", "Acrescentar mais agentes", "Subir o limite de rondas para sempre", "Entregar a uma pessoa o trabalho não resolvido"], answer: 3, why: "As pessoas resolvem o que o sistema não consegue." },
      { objective: "O5", q: "Com mais agentes, o ponto de controlo humano fica:", options: ["Desnecessário", "Mais importante", "Automático", "Proibido"], answer: 1, why: "Mais peças em movimento querem dizer mais formas de correr mal." },
      { objective: "O6", q: "Uma referência (baseline) neste curso é:", options: ["O resultado mais longo", "O primeiro rascunho", "A chave de API", "Um único agente com que compara a equipa"], answer: 3, why: "Compara a equipa com a opção simples." },
      { objective: "O6", q: "As chamadas ao modelo são contadas porque representam:", options: ["O número de palavras", "A qualidade", "O custo e o tempo", "O número de utilizadores"], answer: 2, why: "Mais chamadas custam mais e demoram mais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Papéis e lista de verificação claros",
        objective: "O3",
        notYet: "Os papéis sobrepõem-se, ou o revisor só pergunta se o rascunho está bom.",
        meets: "O redator e o revisor têm cada um um só trabalho; o revisor verifica dados da ficha, menos de 80 palavras e nenhuma afirmação como \"o melhor\".",
        exceeds: "O revisor não tem ferramentas de escrita e dá uma razão para cada pedido de revisão."
      },
      {
        name: "Passagens de trabalho estruturadas",
        objective: "O3",
        notYet: "Os agentes passam texto livre que o código não consegue verificar.",
        meets: "O revisor devolve JSON com aprovar ou rever e as razões.",
        exceeds: "O código verifica cada passagem de trabalho antes de a usar."
      },
      {
        name: "Estado partilhado",
        objective: "O4",
        notYet: "Os agentes guardam cópias separadas do trabalho.",
        meets: "O trabalho passa por um só dicionário de estado que o código atualiza.",
        exceeds: "O estado é registado depois de cada passo."
      },
      {
        name: "Limite de rondas e escalamento",
        objective: "O5",
        notYet: "Não há limite de rondas, ou o ciclo pode correr para sempre.",
        meets: "Para depois de no máximo 3 rondas e imprime o registo completo.",
        exceeds: "O trabalho não resolvido para com needs_human e mostra o rascunho e as razões."
      },
      {
        name: "Comparação justa",
        objective: "O6",
        notYet: "Não há um único agente de referência, ou foram usadas entradas diferentes.",
        meets: "As mesmas 3 fichas de dados passaram pelos dois, com uma nota escrita sobre qual foi melhor e porquê.",
        exceeds: "Os dois foram pontuados com a mesma lista de verificação e as chamadas ao modelo foram contadas."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que avançam para o curso 6 do programa de agentes em 30 dias",
      "Alunos que dizem escolher um agente ou uma equipa com base num teste e não num palpite (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com navegador de internet e internet; o Colab ou o Python no seu próprio computador",
      "O seu ciclo de agente e a função auxiliar ask_model do curso 3, e uma chave de API de um modelo",
      "Três fichas de dados de produtos curtas e inventadas",
      "Papel para desenhar os padrões de agentes",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois peça ao grupo para aplicar o teste da contratação a trabalhos reais antes de alguém escrever código.",
      "Dê a todos as mesmas três fichas de dados, para que os resultados da equipa e do único agente possam ser comparados em todo o grupo.",
      "Tenha atenção ao número de chamadas ao modelo nos níveis gratuitos; mantenha o limite de rondas em 3.",
      "Peça aos alunos para mostrarem uma execução que parou com needs_human, e discutam o que a pessoa decidiria.",
      "Avalie a tarefa final com a grelha de avaliação e aceite \"um agente fez tão bem\" como um bom resultado quando o teste o mostra."
    ]
  }
};
