"use strict";

// Koach Learn course (Portuguese translation of artificial-intelligence/agentic-building-agents.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python code, JSON and tool names stay exactly as in the English.

module.exports = {
  id: "agentic-building-agents-pt",
  lang: "pt",
  translationOf: "agentic-building-agents",
  category: "Artificial Intelligence",
  name: "Construir Agentes de IA",
  skills: "Escrever um ciclo de agente em Python, Definir ferramentas como funções, Pedir ao modelo a próxima ação em JSON, Manter memória e um registo da execução, Acrescentar limites de passos e tratamento de erros",
  outcome: "construir em Python um pequeno agente de IA que funciona, num caderno gratuito do Colab: um ciclo que pede a um modelo a próxima ação, executa uma de duas ferramentas escritas por você, devolve o resultado ao modelo, para num limite de passos e regista cada passo.",
  about: [
    "Este é o curso 3 do programa Desenhar, Construir e Implementar Agentes de IA Autónomos. Você já tem um cartão de desenho (curso 1) e um pedido testado (curso 2). Agora vai construir o próprio agente, em Python simples, para ver cada peça a funcionar em vez de a esconder dentro de uma framework.",
    "O Capítulo 1 constrói o ciclo: ferramentas como funções Python, um pedido que faz o modelo escolher uma ação em JSON e o código que executa a ação e devolve o resultado. O Capítulo 2 torna-o fiável: memória, um registo da execução, limites de passos, tratamento de erros e um olhar sobre as frameworks de agentes que pode usar mais tarde.",
    "Precisa de uma conta Google para o Colab e de uma chave de API de um modelo (o nível gratuito da API do Gemini do curso 2 serve, ou um modelo local gratuito com o Ollama no seu próprio computador). O código aparece em linhas curtas nas lições. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Num caderno do Colab, construa um agente com duas ferramentas escritas por você (por exemplo calculator(expression) e lookup_note(topic), que lê um pequeno dicionário Python de notas). Dê-lhe o objetivo \"Quantas horas vou estudar este mês se estudar 45 minutos em cada dia de aula que está nas minhas notas?\". O agente tem de escolher ferramentas em JSON, executá-las, devolver os resultados, parar num limite de 6 passos, tratar uma resposta má do modelo sem falhar e imprimir um registo de cada passo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos do programa Desenhar, Construir e Implementar Agentes de IA Autónomos que terminaram os cursos 1 e 2: donos de pequenos negócios, pessoas que estão a mudar de carreira, estudantes e funcionários que querem construir eles próprios um agente que funciona.",
    startingPoint: "Têm um cartão de desenho do agente e um pedido de sistema testado que devolve JSON. Sabem executar linhas curtas de Python no Google Colab e chamar um modelo com uma chave de API secreta, mas ainda não escreveram um ciclo de agente.",
    gap: "As frameworks escondem como um agente funciona, por isso, quando um agente se porta mal, os principiantes não sabem porquê. Os alunos precisam de construir o ciclo à mão, com ferramentas, memória, um registo, limites de passos e tratamento de erros, para que os seus agentes sejam fiáveis e eles os consigam corrigir.",
    constraints: [
      "Nível de leitura: palavras simples; código em linhas curtas para copiar",
      "Aparelhos: um computador com navegador de internet; o Colab gratuito e os níveis gratuitos de API têm limites",
      "Nenhum dado privado ou de clientes nas ferramentas ou notas de prática",
      "As chaves de API ficam numa definição secreta, nunca no caderno",
      "Tempo: lições curtas, com uma tarefa de prática cada uma"
    ],
    prerequisites: "Os cursos 1 e 2 do programa Desenhar, Construir e Implementar Agentes de IA Autónomos (\"Compreender os LLM e a Engenharia de Pedidos\")."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Num caderno do Colab", action: "escrever duas ferramentas como funções Python com nomes claros, descrições de uma linha e verificação da entrada", standard: "com cada ferramenta a funcionar quando você mesmo a chama" },
    { id: "O2", condition: "Com as suas ferramentas e um objetivo", action: "escrever um pedido de sistema e uma função auxiliar ask_model que façam o modelo responder com uma ação em JSON", standard: "para que o modelo escolha uma ferramenta válida ou uma resposta final" },
    { id: "O3", condition: "Com a ação escolhida pelo modelo", action: "escrever um ciclo que executa a ferramenta escolhida e devolve o resultado ao modelo", standard: "até o modelo dar uma resposta final" },
    { id: "O4", condition: "Enquanto o agente funciona", action: "manter o histórico arrumado e anotar cada passo num registo da execução", standard: "com o passo, a resposta original, a ferramenta, a entrada e o resultado de cada passo" },
    { id: "O5", condition: "Com uma resposta má do modelo, um erro de ferramenta ou uma execução longa", action: "acrescentar um limite de passos e tratar as respostas más e os erros das ferramentas", standard: "para que o agente recupere, ou pare e informe, sem falhar" },
    { id: "O6", condition: "Com o seu agente terminado", action: "testá-lo com objetivos normais e impossíveis e explicar quando uma framework ajudaria", standard: "fazendo os cinco testes e escrevendo o que corrigiu" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O ciclo do agente em código",
      lessons: [
        {
          objectives: ["O1"],
          title: "As ferramentas são apenas funções",
          minutes: 5,
          goal: "Escrever duas ferramentas como funções Python com nomes e descrições claros.",
          text: [
            "Para um agente, uma ferramenta é uma função que o seu código executa quando o modelo pede. O modelo nunca executa nada sozinho: só escreve o nome de uma ferramenta e a sua entrada. É o seu código que decide se a executa.",
            "Comece com ferramentas seguras, só de leitura. Uma calculadora: def calculator(expression): com um corpo que só aceita algarismos e + - * / ( ) . e depois calcula a resposta. Uma consulta de notas: NOTES = {'schedule': 'Class days: Mon, Wed, Thu'}, e def lookup_note(topic): return NOTES.get(topic, 'no note found').",
            "Junte-as num dicionário para que o ciclo as encontre pelo nome: TOOLS = {'calculator': calculator, 'lookup_note': lookup_note}. Escreva uma descrição de uma linha para cada uma. O modelo lê essas descrições para escolher, por isso elas são tão importantes como o código."
          ],
          steps: ["Escreva cada ferramenta como uma função Python com uma entrada.", "Torne-a segura: verifique a entrada antes de a usar.", "Devolva texto que o modelo consiga ler, com uma mensagem clara quando falha.", "Coloque as ferramentas num dicionário TOOLS.", "Escreva uma descrição de uma linha de cada ferramenta."],
          words: [["Função", "um bloco de código com nome que recebe uma entrada e devolve um resultado."], ["Dicionário", "uma coleção Python de pares de nome e valor, como {'calculator': calculator}."], ["Ferramenta só de leitura", "uma ferramenta que só consulta coisas e não muda nada."]],
          slides: [
            { title: "Uma ferramenta é uma função", bullets: ["O modelo só diz o nome da ferramenta e a entrada", "O seu código decide se a executa"] },
            { title: "Duas ferramentas seguras para começar", bullets: ["calculator(expression): verifica a entrada, faz a conta", "lookup_note(topic): lê de um dicionário"] },
            { title: "Ferramentas fáceis de escolher", bullets: ["TOOLS = {name: function}", "Uma linha clara a descrever cada ferramenta", "Devolva uma mensagem clara quando falha"] }
          ],
          tryIt: "Num novo caderno do Colab, escreva calculator e lookup_note, coloque-as em TOOLS e teste cada uma chamando-a você mesmo: calculator('45*12/60') e lookup_note('schedule').",
          youCanNow: "escrever ferramentas seguras como funções Python e registá-las pelo nome.",
          quickCheck: [
            { objective: "O1", q: "No seu agente, o que é uma ferramenta?", options: ["Uma função Python que o seu código executa quando o modelo pede", "Uma definição dentro do modelo", "Um site que o modelo visita sozinho", "Um segundo modelo de IA"], answer: 0, why: "O modelo só pede; é o seu código que executa a função." },
            { objective: "O1", q: "A sua ferramenta lookup_note recebe um tema que não está nas notas. O que deve fazer?", options: ["Inventar uma nota provável", "Falhar para você reparar", "Devolver uma mensagem clara a dizer que o tema não foi encontrado", "Devolver o dicionário de notas inteiro"], answer: 2, why: "Uma mensagem clara deixa o modelo tentar outra coisa em vez de adivinhar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pedir ao modelo a próxima ação",
          minutes: 6,
          goal: "Escrever um pedido que faça o modelo responder com uma ação em JSON.",
          text: [
            "O modelo precisa de saber o objetivo, as ferramentas e o formato da resposta. O seu pedido de sistema lista cada ferramenta com a sua descrição e diz: responda só com JSON, ou {\"tool\": \"name\", \"input\": \"...\"} para usar uma ferramenta, ou {\"final\": \"...\"} quando o objetivo estiver cumprido.",
            "Acrescente regras do seu cartão de desenho: use só as ferramentas da lista; uma ação por resposta; se o resultado de uma ferramenta disser que falhou, tente outro caminho; nunca invente o resultado de uma ferramenta.",
            "Escreva uma função auxiliar para que o resto do código não dependa do fornecedor que usa: def ask_model(text): que chama o seu modelo (copie a chamada do guia de início rápido do seu fornecedor, como no curso 2) e devolve o texto da resposta. Se mudar de fornecedor mais tarde, só ask_model muda."
          ],
          steps: ["Liste no pedido de sistema o nome e a descrição de cada ferramenta.", "Dê as duas formas de resposta em JSON: tool ou final.", "Acrescente as regras do seu cartão de desenho.", "Escreva ask_model(text), que devolve o texto da resposta do modelo.", "Teste uma vez com o objetivo e imprima a resposta."],
          words: [["Ação", "uma coisa que o agente decide fazer a seguir, como usar uma ferramenta ou dar a resposta final."], ["Função auxiliar", "uma pequena função que esconde detalhes, como o fornecedor de modelo que chama."]],
          slides: [
            { title: "O pedido diz ao modelo", bullets: ["O objetivo", "As ferramentas e o que cada uma faz", "As formas exatas da resposta em JSON"] },
            { title: "Duas formas de resposta", bullets: ["{\"tool\": \"name\", \"input\": \"...\"}", "{\"final\": \"...\"} quando o objetivo está cumprido"] },
            { title: "Regras do seu cartão de desenho", bullets: ["Só ferramentas da lista, uma ação por resposta", "Se uma ferramenta falhar, tente outro caminho", "Nunca invente o resultado de uma ferramenta"] },
            { title: "Esconda o fornecedor", bullets: ["ask_model(text) devolve o texto da resposta", "Mude de fornecedor mudando uma só função"] }
          ],
          tryIt: "Escreva o pedido de sistema e ask_model. Envie o objetivo da tarefa final e imprima a resposta. Escolheu primeiro lookup_note? Se não, melhore as descrições das ferramentas.",
          youCanNow: "fazer um modelo escolher a próxima ação em JSON a partir de uma lista de ferramentas.",
          quickCheck: [
            { objective: "O2", q: "Como deve ser a resposta do modelo quando quer uma ferramenta?", options: ["Um parágrafo simpático a explicar o seu plano", "Uma ação em JSON com o nome da ferramenta e a entrada", "O código Python da ferramenta", "Uma lista de todas as ferramentas"], answer: 1, why: "Uma ação em JSON é algo que o seu ciclo consegue ler e executar." },
            { objective: "O2", q: "O modelo escolhe sempre a calculadora antes de ter os dias de aula. O que mudaria primeiro?", options: ["Tirar a calculadora", "Aumentar o limite de passos", "Mudar para uma framework", "Melhorar as descrições das ferramentas para ele saber que deve consultar as notas primeiro"], answer: 3, why: "O modelo escolhe as ferramentas pelas descrições, por isso descrições mais claras guiam a escolha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Executar o ciclo: agir e devolver o resultado",
          minutes: 6,
          goal: "Escrever o ciclo que executa a ferramenta escolhida e devolve o resultado.",
          text: [
            "O ciclo é curto. history = [] guarda o que aconteceu. Em cada passo: monte o texto (pedido de sistema, objetivo, histórico), chame ask_model e leia o JSON. Se tiver 'final', imprima e pare. Se tiver 'tool', procure-a em TOOLS, execute-a com a entrada e acrescente uma linha ao histórico: a ação e o resultado.",
            "Devolver o resultado é o passo de observar do curso 1. Sem ele, o modelo pediria a mesma coisa para sempre. Com ele, o modelo vê \"lookup_note(schedule) returned: Class days: Mon, Wed, Thu\" e pode decidir o passo seguinte, como usar a calculadora.",
            "Se o modelo disser o nome de uma ferramenta que não está em TOOLS, não deixe o programa falhar: acrescente \"Unknown tool: X. Use one of: calculator, lookup_note\" ao histórico e continue. Mensagens claras de volta para o modelo são a forma de um agente recuperar dos seus próprios erros."
          ],
          steps: ["history = []", "Monte o texto: pedido de sistema, objetivo, histórico.", "Chame ask_model e leia o JSON.", "Se for 'final': imprima e pare.", "Se for 'tool': execute-a a partir de TOOLS e acrescente a ação e o resultado ao histórico."],
          words: [["Histórico", "a lista, sempre a crescer, das ações e resultados que o agente viu nesta execução."], ["Observação", "o resultado de uma ferramenta, devolvido ao modelo."]],
          slides: [
            { title: "Cada passo do ciclo", bullets: ["Monte o texto: pedido, objetivo, histórico", "Pergunte ao modelo, leia o JSON", "Final? Pare. Ferramenta? Execute-a."] },
            { title: "Devolva o resultado", bullets: ["Acrescente a ação e o resultado ao histórico", "O modelo vê-o no passo seguinte", "Sem isso, o agente repete-se"] },
            { title: "Ferramenta desconhecida?", bullets: ["Não deixe falhar", "Diga ao modelo que ferramentas existem", "Deixe-o tentar outra vez"] }
          ],
          tryIt: "Escreva o ciclo e execute-o com o objetivo da tarefa final. Imprima o histórico depois de cada passo. Conte quantos passos levou a chegar a uma resposta final.",
          youCanNow: "escrever um ciclo de agente que executa ferramentas e devolve os resultados ao modelo.",
          quickCheck: [
            { objective: "O3", q: "O que é o passo de observar no ciclo?", options: ["Acrescentar o resultado da ferramenta ao histórico para o modelo o ver", "Imprimir a resposta final", "Escolher que ferramenta escrever", "Verificar a chave de API"], answer: 0, why: "Devolver o resultado deixa o modelo decidir o passo seguinte a partir do que aconteceu." },
            { objective: "O3", q: "O seu agente chama a mesma ferramenta vezes sem conta. Qual é a correção mais provável?", options: ["Acrescentar mais ferramentas", "Garantir que cada resultado de ferramenta volta para o histórico", "Encurtar o pedido de sistema", "Usar outro caderno"], answer: 1, why: "Sem o resultado no histórico, o modelo não sabe que a ação já foi executada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O ciclo do agente em código",
        questions: [
          { objective: "O1", q: "Quem executa de facto uma ferramenta num agente?", options: ["O modelo", "O navegador do utilizador", "O seu código", "O site da ferramenta"], answer: 2, why: "O modelo só diz o nome da ferramenta; o seu código decide e executa-a." },
          { objective: "O1", q: "Porque é que cada ferramenta precisa de uma descrição clara de uma linha?", options: ["O modelo lê-a para escolher a ferramenta certa", "Faz o código correr mais depressa", "O Python obriga", "Esconde a ferramenta do modelo"], answer: 0, why: "As descrições são a forma de o modelo saber para que serve cada ferramenta." },
          { objective: "O3", q: "O modelo responde {\"final\": \"About 27 hours\"}. O que faz o ciclo?", options: ["Executa a calculadora", "Começa de novo", "Pede uma palavra-passe ao utilizador", "Imprime a resposta e para"], answer: 3, why: "Uma resposta final quer dizer que o objetivo está cumprido." },
          { objective: "O2", q: "Para que serve a função auxiliar ask_model?", options: ["Para executar ferramentas", "Para manter os detalhes do fornecedor num só lugar", "Para guardar a chave de API no código", "Para saltar o ciclo"], answer: 1, why: "Assim, mudar de fornecedor quer dizer mudar uma só função." },
          { objective: "O3", q: "O modelo pede uma ferramenta chamada \"search\" que você não escreveu. Qual é a melhor resposta?", options: ["Deixar falhar para você reparar", "Dizer ao modelo que ferramentas existem e continuar", "Executar qualquer pesquisa que encontrar", "Parar o agente para sempre"], answer: 1, why: "Uma resposta clara deixa o agente recuperar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tornar o agente fiável",
      lessons: [
        {
          objectives: ["O4"],
          title: "Memória e um registo da execução",
          minutes: 5,
          goal: "Manter a memória de curto prazo arrumada e registar cada passo.",
          text: [
            "A memória de curto prazo é a lista de histórico que você já tem. Cresce em cada passo, e tudo o que está nela é enviado ao modelo, o que custa tokens e tempo. Em execuções longas, guarde os últimos passos completos e troque os passos mais antigos por um resumo de uma linha.",
            "A memória de longo prazo é tudo o que fica guardado entre execuções: um ficheiro de notas, uma folha de cálculo, uma pequena base de dados. Guarde só o que o agente precisa mesmo da próxima vez e nunca guarde dados privados de que não precisa.",
            "O registo da execução é para você, não para o modelo. Em cada passo, anote o número do passo, a resposta original do modelo, a ferramenta e a entrada, o resultado e a hora. Quando o agente faz algo estranho, o registo diz-lhe porquê. Uma forma simples: log.append({'step': n, 'reply': reply, 'result': result}) e imprima-o no fim."
          ],
          words: [["Memória de curto prazo", "o que o agente vê durante uma execução: o histórico até agora."], ["Memória de longo prazo", "informação guardada entre execuções, como um ficheiro de notas."], ["Registo da execução", "a sua lista de cada passo que o agente deu, para verificar e corrigir erros."]],
          slides: [
            { title: "Memória de curto prazo", bullets: ["A lista de histórico, enviada em cada passo", "Um histórico longo custa tokens e tempo", "Resuma os passos mais antigos"] },
            { title: "Memória de longo prazo", bullets: ["Guardada entre execuções: ficheiro ou base de dados", "Guarde só o que é preciso", "Nenhum dado privado de que não precisa"] },
            { title: "O registo da execução", bullets: ["Passo, resposta original, ferramenta, entrada, resultado, hora", "Para você, não para o modelo", "Leia-o quando o agente age de forma estranha"] }
          ],
          tryIt: "Acrescente uma lista log ao seu agente e anote cada passo. Execute-o e depois imprima o registo como uma tabela arrumada: passo, ferramenta, entrada, resultado.",
          youCanNow: "gerir a memória de um agente e manter um registo da execução que consegue ler.",
          quickCheck: [
            { objective: "O4", q: "O que é a memória de curto prazo no seu agente?", options: ["Um ficheiro guardado para sempre", "Os dados de treino do modelo", "A lista de histórico desta execução", "O dicionário de notas"], answer: 2, why: "A memória de curto prazo é o histórico que o agente guarda durante uma execução." },
            { objective: "O4", q: "O agente deu uma resposta estranha e quer saber porquê. Para onde olha?", options: ["Só para a resposta final", "Para a chave de API", "Só para as descrições das ferramentas", "Para o registo de cada passo da execução"], answer: 3, why: "O registo mostra cada resposta, ferramenta, entrada e resultado, por isso vê onde correu mal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Limites de passos, respostas más e erros",
          minutes: 6,
          goal: "Acrescentar um limite de passos e tratar respostas más do modelo e erros das ferramentas.",
          text: [
            "Todo o ciclo precisa de um teto: MAX_STEPS = 6 e for step in range(MAX_STEPS): em vez de um ciclo que corre para sempre. Se chegar ao limite sem resposta final, pare e informe \"Stopped: step limit reached\" com o registo.",
            "As respostas más acontecem: palavras a mais à volta do JSON, uma chave em falta, uma resposta vazia. Leia o JSON dentro de try e except. Se falhar, acrescente \"Your last reply was not valid JSON. Reply with only JSON.\" ao histórico e deixe o passo seguinte tentar outra vez. Conte estas falhas; se houver duas seguidas, pare.",
            "As ferramentas também falham: a calculadora recebe letras, um ficheiro não existe. Cada ferramenta deve apanhar os seus próprios erros e devolver uma mensagem clara, como \"calculator error: only numbers and + - * / allowed\". Assim o modelo pode corrigir a entrada no passo seguinte."
          ],
          steps: ["Defina MAX_STEPS e faça o ciclo com range(MAX_STEPS).", "Leia as respostas dentro de try / except.", "Numa resposta má, diga-o ao modelo e continue.", "Pare depois de duas respostas más seguidas.", "Faça cada ferramenta devolver uma mensagem de erro clara em vez de falhar."],
          words: [["Limite de passos", "o número máximo de passos que um agente pode dar numa execução."], ["Exceção", "um erro que acontece enquanto um programa corre; try / except apanha-o."]],
          slides: [
            { title: "Defina sempre um teto", bullets: ["MAX_STEPS = 6", "for step in range(MAX_STEPS):", "No limite: pare e informe"] },
            { title: "Respostas más do modelo", bullets: ["Leia dentro de try / except", "Diga ao modelo: responda só com JSON", "Duas respostas más seguidas: pare"] },
            { title: "Erros das ferramentas", bullets: ["Cada ferramenta apanha os seus erros", "Devolva uma mensagem de erro clara", "O modelo corrige a entrada no passo seguinte"] }
          ],
          tryIt: "Teste o seu código de segurança: faça ask_model devolver \"hello\" no passo 2, só por agora, e envie à calculadora a entrada 'abc'. Veja se o agente recupera e se para no limite de passos quando define MAX_STEPS = 2.",
          youCanNow: "impedir que um agente fique num ciclo para sempre e ajudá-lo a recuperar de respostas más e de erros das ferramentas.",
          quickCheck: [
            { objective: "O5", q: "O que faz MAX_STEPS?", options: ["Põe um teto no número de passos que o agente pode dar", "Faz o modelo responder mais depressa", "Limita quantas ferramentas pode escrever", "Define o tamanho do registo"], answer: 0, why: "Um limite de passos para uma execução que, de outra forma, não acabaria." },
            { objective: "O5", q: "Num passo, o modelo responde \"hello\" em vez de JSON. O que deve fazer o seu agente?", options: ["Falhar", "Tratar \"hello\" como resposta final", "Dizer ao modelo para responder só com JSON e continuar", "Recomeçar toda a execução no passo 1"], answer: 2, why: "Uma resposta má pode ser recuperada; o agente só para depois de respostas más repetidas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Frameworks, e terminar o seu primeiro agente",
          minutes: 6,
          goal: "Terminar e testar o seu agente, e saber quando uma framework ajudaria.",
          text: [
            "As frameworks de agentes são bibliotecas que lhe dão o ciclo, o tratamento das ferramentas e a memória já feitos. Algumas conhecidas são o LangGraph, o CrewAI, o OpenAI Agents SDK e o Agent Development Kit da Google, e muitos fornecedores de modelos têm chamada de ferramentas nativa, em que o modelo devolve por você um pedido de ferramenta estruturado. Mudam muitas vezes, por isso leia a documentação de cada projeto para ver como se instalam hoje.",
            "Construir primeiro o ciclo você mesmo quer dizer que percebe o que uma framework faz por você e que a consegue corrigir quando corre mal. Muitos agentes reais continuam a ser um ciclo simples como o seu.",
            "Antes de dizer que o agente está pronto, teste-o como no curso 2: três objetivos que deve cumprir, um que não consegue (deve dizê-lo, não inventar uma resposta) e uma entrada má. Leia o registo de cada execução."
          ],
          steps: ["Execute o agente com três objetivos que deve cumprir.", "Execute um objetivo que não consegue cumprir: deve dizê-lo.", "Execute uma entrada má.", "Leia o registo de cada execução.", "Corrija um ponto fraco e repita os cinco testes."],
          words: [["Framework", "uma biblioteca já feita que trata por você partes comuns de um programa."], ["Chamada de ferramentas nativa", "uma função do modelo em que ele devolve um pedido estruturado para usar uma ferramenta."]],
          slides: [
            { title: "Frameworks de agentes", bullets: ["Ciclo, ferramentas e memória já feitos", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "Mudam muitas vezes: leia a documentação deles"] },
            { title: "Porquê construir à mão primeiro", bullets: ["Percebe o que uma framework faz", "Consegue corrigi-la", "Muitos agentes reais são um ciclo simples"] },
            { title: "Teste antes de dizer que está pronto", bullets: ["Três objetivos que deve cumprir", "Um que não consegue: deve dizê-lo", "Uma entrada má; leia todos os registos"] }
          ],
          tryIt: "Tarefa final: termine o seu agente de duas ferramentas com o objetivo das horas de estudo, um limite de 6 passos, uma resposta má recuperada e um registo impresso de cada passo. Depois faça os cinco testes acima e escreva duas frases sobre o que corrigiu.",
          youCanNow: "construir, testar e explicar um agente de IA que funciona, em Python simples.",
          quickCheck: [
            { objective: "O6", q: "O que é uma framework de agentes?", options: ["Uma regra que proíbe ferramentas", "Um ciclo, ferramentas e memória já feitos que pode usar em vez de escrever os seus", "Um modelo gratuito", "Um tipo de chave de API"], answer: 1, why: "As frameworks juntam as partes que você construiu à mão neste curso." },
            { objective: "O6", q: "Dá ao seu agente um objetivo que ele não consegue cumprir com as suas ferramentas. O que deve fazer um bom agente?", options: ["Dizer que não consegue terminar e mostrar o que tentou", "Inventar uma resposta que parece certa", "Continuar a correr para sempre", "Chamar uma ferramenta que não existe"], answer: 0, why: "Um agente honesto diz o que não conseguiu fazer em vez de inventar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Tornar o agente fiável",
        questions: [
          { objective: "O4", q: "Porquê resumir os passos mais antigos numa execução longa?", options: ["O modelo não esquece nada de qualquer forma", "Esconde os erros", "O Python não consegue guardar listas longas", "Um histórico longo custa tokens e tempo"], answer: 3, why: "Tudo o que está no histórico é enviado em cada passo." },
          { objective: "O4", q: "Para quem é, sobretudo, o registo da execução?", options: ["Para você, para ver porque o agente agiu como agiu", "Para o modelo", "Para o fornecedor da API", "Para outros utilizadores"], answer: 0, why: "O registo serve para verificar e corrigir erros." },
          { objective: "O5", q: "O que deve acontecer quando um agente chega a MAX_STEPS sem resposta final?", options: ["Continuar na mesma", "Inventar uma resposta final", "Parar e informar que chegou ao limite", "Apagar o registo"], answer: 2, why: "Informe com honestidade e mostre o registo." },
          { objective: "O5", q: "A calculadora recebe a entrada 'abc'. Uma ferramenta bem feita:", options: ["Faz falhar o agente inteiro", "Apaga o caderno", "Devolve zero sem dizer nada", "Devolve uma mensagem de erro clara que o modelo pode usar"], answer: 3, why: "Mensagens de erro claras deixam o modelo corrigir a entrada." },
          { objective: "O6", q: "Qual é um bom teste antes de dizer que o agente está pronto?", options: ["Só objetivos que de certeza cumpre", "Nenhum teste, é só lançar", "Um objetivo que não consegue cumprir, para ver se o diz", "Executá-lo uma vez"], answer: 2, why: "Um \"não consigo\" honesto é melhor do que uma resposta inventada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Construir Agentes de IA",
    questions: [
      { objective: "O1", q: "Para um agente, uma ferramenta é:", options: ["Um site", "Uma função que o seu código executa quando o modelo pede", "O próprio modelo", "Uma palavra-passe"], answer: 1, why: "As ferramentas são funções; o modelo só diz o nome delas." },
      { objective: "O1", q: "Qual é o tipo de ferramenta mais seguro para começar?", options: ["Uma consulta só de leitura", "Uma ferramenta que apaga ficheiros", "Uma ferramenta de pagamentos", "Um envio de e-mails"], answer: 0, why: "As ferramentas só de leitura não mudam nada." },
      { objective: "O1", q: "TOOLS = {'calculator': calculator} permite ao ciclo:", options: ["Encontrar uma ferramenta pelo nome", "Saltar o modelo", "Guardar a chave de API", "Tornar o modelo mais rápido"], answer: 0, why: "O dicionário liga nomes a funções." },
      { objective: "O1", q: "Uma ferramenta deve verificar a entrada porque:", options: ["O Python obriga", "O modelo pode enviar algo perigoso ou errado", "Poupa tokens", "Esconde o resultado"], answer: 1, why: "Nunca confie às cegas no que o modelo escreve." },
      { objective: "O2", q: "Que resposta quer dizer que o agente quer usar uma ferramenta?", options: ["{\"final\": \"done\"}", "\"hello\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "Uma resposta vazia"], answer: 2, why: "A forma tool diz o nome de uma ferramenta e a entrada." },
      { objective: "O2", q: "Uma regra no pedido de sistema que ajuda à honestidade é:", options: ["\"Ignore as falhas.\"", "\"Responda sempre num só passo.\"", "\"Use a ferramenta que quiser.\"", "\"Nunca invente o resultado de uma ferramenta.\""], answer: 3, why: "Resultados inventados são uma falha comum dos agentes." },
      { objective: "O2", q: "ask_model(text) é útil porque:", options: ["Torna as chaves públicas", "Executa as ferramentas", "Mantém os detalhes do fornecedor num só lugar", "Elimina o ciclo"], answer: 2, why: "Mudar de fornecedor muda só essa função." },
      { objective: "O3", q: "Devolver o resultado de uma ferramenta ao histórico é o passo de:", options: ["Observar", "Pensar", "Gatilho", "Resposta final"], answer: 0, why: "Observar os resultados deixa o modelo escolher o passo seguinte." },
      { objective: "O3", q: "Sem devolver os resultados, é provável que um agente:", options: ["Termine mais depressa", "Escreva melhor JSON", "Fique mais barato", "Repita a mesma ação"], answer: 3, why: "Nunca fica a saber o que aconteceu." },
      { objective: "O3", q: "O modelo diz o nome de uma ferramenta desconhecida. O ciclo deve:", options: ["Falhar", "Dizer ao modelo os nomes das ferramentas válidas e continuar", "Instalar sozinho uma ferramenta nova", "Dar-lhe acesso total ao computador"], answer: 1, why: "Uma resposta clara ajuda o agente a recuperar." },
      { objective: "O4", q: "A memória de curto prazo do seu agente é:", options: ["Um ficheiro guardado para sempre", "A lista de histórico desta execução", "A sua conta Google", "Os dados de treino do modelo"], answer: 1, why: "O histórico é o que o modelo vê nesta execução." },
      { objective: "O4", q: "A memória de longo prazo deve guardar:", options: ["Tudo, incluindo dados privados", "Nunca nada", "A sua chave de API", "Só o que o agente precisa da próxima vez"], answer: 3, why: "Guarde só o que é preciso; evite dados privados." },
      { objective: "O4", q: "Um bom registo da execução anota:", options: ["Passo, resposta original, ferramenta, entrada e resultado", "Só a resposta final", "A sua palavra-passe", "Nada"], answer: 0, why: "Passos completos deixam-lhe ver porque as coisas aconteceram." },
      { objective: "O5", q: "for step in range(MAX_STEPS): dá ao agente:", options: ["Passos ilimitados", "Mais ferramentas", "Um teto de passos", "Um modelo mais rápido"], answer: 2, why: "O ciclo não pode correr para sempre." },
      { objective: "O5", q: "O modelo responde com palavras à volta do JSON. Um bom agente:", options: ["Desliga o limite de passos", "Falha", "Aceita as palavras como resposta", "Diz ao modelo para responder só com JSON e continua"], answer: 3, why: "Recupere uma vez e pare depois de falhas repetidas." },
      { objective: "O5", q: "Quando deve o agente parar depois de respostas más?", options: ["Nunca", "Depois da primeira palavra", "Depois de duas seguidas", "Só quando o computador desligar"], answer: 2, why: "Falhas repetidas querem dizer que algo está errado." },
      { objective: "O6", q: "As frameworks de agentes:", options: ["Nunca mudam", "Dão um ciclo, ferramentas e memória já feitos", "Tiram a necessidade de qualquer teste", "São obrigatórias para todos os agentes"], answer: 1, why: "Ajudam, mas mudam muitas vezes e continuam a precisar de testes." },
      { objective: "O6", q: "Chamada de ferramentas nativa quer dizer:", options: ["O modelo devolve um pedido estruturado para usar uma ferramenta", "O modelo executa código no seu computador sozinho", "Você escreve as ferramentas à mão", "As ferramentas funcionam sem código"], answer: 0, why: "O fornecedor devolve um pedido de ferramenta estruturado que o seu código executa." },
      { objective: "O6", q: "Porquê construir o ciclo à mão primeiro?", options: ["Percebe e consegue corrigir o que uma framework faz", "As frameworks são ilegais", "É sempre mais rápido", "Os modelos obrigam"], answer: 0, why: "Conhecer as partes torna possível corrigir erros." },
      { objective: "O6", q: "Com um objetivo que não consegue cumprir, um bom agente:", options: ["Inventa uma resposta", "Diz que não consegue e mostra o que tentou", "Fica num ciclo para sempre", "Apaga o seu registo"], answer: 1, why: "Uma falha honesta é melhor do que uma resposta inventada." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 4, 6, 7, 9, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Duas ferramentas que funcionam", objective: "O1", notYet: "Falta uma ferramenta, ela falha ou não tem descrição.", meets: "As duas ferramentas funcionam, têm nomes e descrições claros e verificam a entrada.", exceeds: "As ferramentas devolvem mensagens de erro claras com que o modelo pode agir." },
      { name: "Ações em JSON", objective: "O2", notYet: "O modelo responde em texto livre que o ciclo não consegue ler.", meets: "O modelo escolhe ferramentas e uma resposta final em JSON.", exceeds: "O pedido também diz ao modelo para nunca inventar o resultado de uma ferramenta." },
      { name: "O ciclo devolve os resultados", objective: "O3", notYet: "Os resultados das ferramentas não são devolvidos, ou o ciclo nunca acaba.", meets: "O ciclo executa a ferramenta escolhida, devolve o resultado e para numa resposta final.", exceeds: "Os nomes de ferramentas desconhecidas são tratados dizendo ao modelo que ferramentas existem." },
      { name: "Limites de segurança", objective: "O5", notYet: "Não há limite de passos, ou uma resposta má faz falhar o agente.", meets: "Para num limite de 6 passos e recupera de uma resposta má do modelo.", exceeds: "Também trata um erro de ferramenta e para depois de duas respostas más seguidas." },
      { name: "Registo da execução", objective: "O4", notYet: "Não há registo, ou faltam passos nele.", meets: "Imprime um registo de cada passo.", exceeds: "O registo é uma tabela arrumada que outra pessoa conseguiria ler para explicar a execução." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que passam ao curso 4 do programa de agentes em 30 dias",
      "Alunos que dizem ter construído ou adaptado um agente para uma tarefa real em 30 dias (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com navegador de internet e internet",
      "Uma conta Google gratuita para o Google Colab",
      "Uma chave de API de um modelo do curso 2 (nível gratuito da API do Gemini) ou um modelo local gratuito com o Ollama",
      "O cartão de desenho e o pedido testado dos cursos 1 e 2",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois construam o ciclo uma lição de cada vez, com todos a executar o código ao vivo.",
      "Confirme que as chaves de API estão guardadas como segredos e nunca aparecem num ecrã partilhado.",
      "Mantenha as ferramentas de prática só de leitura e use notas inventadas, não dados privados ou de clientes.",
      "Quando um agente se porta mal, peça aos alunos para lerem o registo da execução em voz alta antes de mudarem o código.",
      "Avalie a tarefa final com a grelha de avaliação e peça a cada aluno que mostre no registo a resposta má recuperada."
    ]
  }
};
