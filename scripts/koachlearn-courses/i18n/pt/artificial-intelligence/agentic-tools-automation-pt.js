"use strict";

// Koach Learn course (Portuguese translation of artificial-intelligence/agentic-tools-automation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python code, file names and tool names stay exactly as in the English.

module.exports = {
  id: "agentic-tools-automation-pt",
  lang: "pt",
  translationOf: "agentic-tools-automation",
  category: "Artificial Intelligence",
  name: "Uso de Ferramentas e Automação com Agentes de IA",
  skills: "Descrever ferramentas com um esquema, Validar os argumentos das ferramentas, Pôr as ferramentas de escrita atrás de uma aprovação, Execuções de teste e repetições seguras, Ligar ferramentas com MCP, Executar um agente num horário",
  outcome: "dar a um agente ferramentas reais com segurança: descrever cada ferramenta com um esquema, verificar cada argumento, manter as ações de escrita atrás de uma execução de teste e de um sim de uma pessoa, e executar o agente como uma automação repetível que lê um ficheiro e escreve um relatório.",
  about: [
    "Este é o curso 4 do programa Desenhar, Construir e Implementar Agentes de IA Autónomos. O seu agente do curso 3 tinha duas ferramentas seguras. Os agentes reais leem ficheiros, chamam serviços na internet e escrevem resultados, e é aí que acontece a maioria dos acidentes com agentes. Este curso ensina a acrescentar ferramentas reais sem perder o controlo.",
    "O Capítulo 1 é sobre ferramentas: descrevê-las com um esquema que o modelo entende, verificar cada argumento que o seu código recebe e pôr qualquer ação que muda alguma coisa atrás de uma execução de teste e de uma aprovação de uma pessoa. O Capítulo 2 é sobre automação: gatilhos e horários, repetições seguras, o Model Context Protocol (MCP) para ligar ferramentas e transformar o seu agente numa tarefa que funciona sozinha.",
    "Vai trabalhar em Python no Google Colab ou no seu próprio computador. O código aparece em linhas curtas nas lições. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Construa um agente de \"relatório semanal\". Ele lê um ficheiro CSV de vendas ou despesas inventadas com uma ferramenta de leitura, usa uma ferramenta de calculadora para fazer os totais e escreve um resumo curto. A sua única ferramenta de escrita, save_report(filename, text), tem de verificar os argumentos (só ficheiros .txt ou .md, só dentro de uma pasta reports), funcionar em modo de execução de teste por defeito e perguntar \"Save report? yes/no\" antes de escrever. Executá-lo duas vezes para a mesma semana não pode criar relatórios repetidos. Mostre o registo de uma execução completa.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos do programa Desenhar, Construir e Implementar Agentes de IA Autónomos que terminaram os cursos 1 a 3: donos de pequenos negócios, pessoas que estão a mudar de carreira, estudantes e funcionários que querem agentes que façam trabalho real num horário.",
    startingPoint: "Já construíram em Python um ciclo de agente com duas ferramentas, um limite de passos, tratamento de erros e um registo da execução. Ainda não deram a um agente ferramentas que leem ficheiros ou mudam alguma coisa, e ainda não executaram um como automação.",
    gap: "A maioria dos acidentes com agentes acontece quando os agentes recebem ferramentas reais que leem e escrevem. Os alunos precisam de descrever as ferramentas com clareza, verificar cada argumento, manter as ações de escrita atrás de uma execução de teste e de um sim de uma pessoa, e tornar as automações seguras para repetir, para que os seus agentes ajudem sem causar danos.",
    constraints: [
      "Nível de leitura: palavras simples; o código aparece em linhas curtas para copiar",
      "Aparelhos: um computador com navegador de internet; o Colab serve para construir, não para executar horários",
      "A prática usa só dados CSV inventados, nunca registos reais de clientes ou de dinheiro",
      "As ações de escrita ficam em modo de execução de teste até uma pessoa aprovar",
      "Só servidores MCP de confiança, com o mínimo de acesso necessário"
    ],
    prerequisites: "O curso 3 do programa Desenhar, Construir e Implementar Agentes de IA Autónomos (\"Construir Agentes de IA\")."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para cada ferramenta que o seu agente usa", action: "escrever um esquema de ferramenta com um nome claro, um propósito e entradas com tipo", standard: "para que um modelo consiga escolher a ferramenta e os argumentos certos" },
    { id: "O2", condition: "Com os argumentos enviados pelo modelo", action: "verificar cada argumento contra uma lista de permitidos antes de a ferramenta o usar", standard: "recusando tipos de ficheiro maus, truques de caminho e tipos errados com um erro claro" },
    { id: "O3", condition: "Para qualquer ferramenta que muda alguma coisa", action: "pôr a ação atrás de uma execução de teste e de uma aprovação sim/não que mostra os detalhes exatos", standard: "para que nada seja escrito até uma pessoa dizer sim" },
    { id: "O4", condition: "Com uma tarefa que se repete com regularidade", action: "escolher um gatilho e tornar a automação segura para repetir", standard: "para que uma segunda execução para o mesmo período não crie nada repetido" },
    { id: "O5", condition: "Com uma ferramenta que quer partilhar com aplicações de IA", action: "explicar o que faz um servidor MCP e decidir quando usar um", standard: "dizendo que regras de aprovação e de verificação manteria" },
    { id: "O6", condition: "Com ferramentas de leitura, de calculadora e de gravação", action: "construir e testar do início ao fim a automação do relatório semanal", standard: "com um registo completo da execução e os dados maus informados, não ignorados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Dar ferramentas reais a um agente",
      lessons: [
        {
          objectives: ["O1"],
          title: "Descrever uma ferramenta com um esquema",
          minutes: 5,
          goal: "Escrever a descrição de uma ferramenta com um nome, um propósito e entradas com tipo.",
          text: [
            "Um modelo escolhe as ferramentas a partir das suas descrições. Um esquema de ferramenta é uma descrição precisa: um nome, uma ou duas frases sobre o que faz e quando usar, e cada entrada com o seu tipo e o seu significado. A maioria dos fornecedores escreve as entradas em JSON Schema, uma forma padrão de descrever dados.",
            "Exemplo: nome read_csv; descrição \"Read a CSV file from the data folder and return its first 50 rows as text. Use when you need the numbers in a file.\" (lê um ficheiro CSV da pasta data e devolve as primeiras 50 linhas como texto; use quando precisa dos números de um ficheiro); entradas: filename (string, obrigatória, o nome de um ficheiro na pasta data, como sales-week-42.csv).",
            "Os bons esquemas são pequenos e específicos. Uma ferramenta, uma tarefa. Diga o que a ferramenta devolve e quando não a usar. Use nomes que soam a ações: read_csv, save_report, e não tool1."
          ],
          steps: ["Dê à ferramenta um nome com uma palavra de ação.", "Descreva o que faz, quando usar e o que devolve.", "Liste cada entrada com o seu tipo e se é obrigatória.", "Mantenha uma só tarefa.", "Teste: dê ao modelo um objetivo e veja se escolhe a ferramenta certa."],
          words: [["Esquema de ferramenta", "uma descrição precisa de uma ferramenta: o nome, o propósito e as entradas."], ["JSON Schema", "uma forma padrão de descrever a forma dos dados, por exemplo que campos são texto ou números."], ["Argumento", "um valor que se passa para uma ferramenta ou função."]],
          slides: [
            { title: "Os modelos escolhem pelas descrições", bullets: ["Nome, propósito, entradas", "As entradas são muitas vezes escritas em JSON Schema"] },
            { title: "Exemplo: read_csv", bullets: ["Lê um CSV da pasta data", "Devolve as primeiras 50 linhas como texto", "Entrada: filename (string, obrigatória)"] },
            { title: "Bons esquemas", bullets: ["Uma ferramenta, uma tarefa", "Nomes de ação: read_csv, save_report", "Diga o que devolve e quando não a usar"] }
          ],
          tryIt: "Escreva esquemas para três ferramentas: read_csv, calculator e save_report. Dê os três esquemas a um chatbot gratuito com o objetivo \"Total last week's sales and save a report\" (somar as vendas da semana passada e guardar um relatório) e pergunte que ferramenta chamaria primeiro e com que argumentos.",
          youCanNow: "descrever uma ferramenta para que um modelo a consiga escolher e preencher as entradas corretamente.",
          quickCheck: [
            { objective: "O1", q: "O que dizem ao modelo as entradas com tipo num esquema de ferramenta?", options: ["A rapidez da ferramenta", "Quem escreveu a ferramenta", "Que tipo de valor cada entrada tem de ser, como texto ou um número", "Que modelo usar"], answer: 2, why: "Os tipos descrevem a forma de cada entrada para que o modelo envie os argumentos certos." },
            { objective: "O1", q: "Quer uma só ferramenta que lê ficheiros, envia e-mails e apaga relatórios antigos. O que faria em vez disso?", options: ["Dividi-la em ferramentas separadas, cada uma com uma tarefa clara", "Mantê-la, porque uma ferramenta é mais simples", "Dar-lhe uma descrição mais longa", "Esconder a parte de apagar no esquema"], answer: 0, why: "Uma boa ferramenta faz uma tarefa clara, o que a torna mais fácil de descrever, verificar e aprovar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nunca confie nos argumentos: validar a entrada das ferramentas",
          minutes: 6,
          goal: "Verificar cada argumento que o modelo envia antes de uma ferramenta o usar.",
          text: [
            "É o modelo que escreve os argumentos da sua ferramenta, e o modelo pode errar ou ser enganado por injeção de pedidos (prompt injection). Por isso é a ferramenta, e não o modelo, que tem de fazer cumprir as regras. Trate os argumentos como uma entrada de um desconhecido na internet.",
            "Verifique o tipo e a forma: filename é uma string? Verifique os valores permitidos: só nomes que acabam em .csv, só dentro da pasta data. Bloqueie truques de caminho: um nome como ../../secrets.txt tenta sair da pasta. Em Python: from pathlib import Path, depois p = (DATA_DIR / filename).resolve() e recuse se DATA_DIR.resolve() não estiver em p.parents.",
            "Quando uma verificação falha, devolva uma mensagem clara, não uma falha do programa: \"read_csv error: only .csv files in the data folder are allowed\". Nunca execute texto escrito pelo modelo como código ou como comando da shell; é assim que um pequeno erro se torna um grande problema."
          ],
          steps: ["Verifique o tipo de cada argumento.", "Verifique os valores permitidos: tipos de ficheiro, pastas, intervalos de números.", "Resolva os caminhos dos ficheiros e recuse tudo o que está fora da pasta permitida.", "Devolva uma mensagem de erro clara quando falha.", "Nunca execute texto escrito pelo modelo como código ou comando da shell."],
          words: [["Validação", "verificar que uma entrada é do tipo certo e está dentro dos valores permitidos antes de a usar."], ["Path traversal (fuga de pasta)", "um truque que usa ../ no nome de um ficheiro para chegar a ficheiros fora da pasta permitida."], ["Lista de permitidos", "uma lista dos únicos valores que são aceites."]],
          slides: [
            { title: "A ferramenta faz cumprir as regras", bullets: ["O modelo pode errar ou ser enganado", "Trate os argumentos como entrada de um desconhecido"] },
            { title: "Verifique cada argumento", bullets: ["Tipo: é uma string ou um número?", "Valores permitidos: só .csv, só a pasta data", "Bloqueie os truques de caminho com ../"] },
            { title: "Quando falha", bullets: ["Devolva uma mensagem de erro clara", "Nunca deixe falhar, nunca adivinhe", "Nunca execute texto do modelo como código ou comando"] }
          ],
          tryIt: "Escreva read_csv com validação. Teste-a você mesmo com: 'sales.csv', 'notes.exe', '../secret.txt' e 42. Só o primeiro deve ler um ficheiro; os outros devem devolver erros claros.",
          youCanNow: "escrever ferramentas que verificam cada argumento antes de agir.",
          quickCheck: [
            { objective: "O2", q: "Porque é que o próprio código da ferramenta tem de verificar os argumentos?", options: ["O esquema já bloqueia todos os valores maus", "O modelo pode enviar algo perigoso ou errado", "Torna o modelo mais inteligente", "Só é preciso para as ferramentas de escrita"], answer: 1, why: "Só o código da ferramenta pode fazer cumprir as suas regras; o modelo pode errar ou ser enganado." },
            { objective: "O2", q: "read_csv recebe o número 42 como nome de ficheiro. O que deve acontecer?", options: ["Ler um ficheiro chamado 42.csv", "Transformá-lo em texto e continuar", "Pedir ao modelo para adivinhar o ficheiro certo", "Devolver um erro claro: o nome do ficheiro tem de ser texto que acaba em .csv"], answer: 3, why: "Um tipo errado é recusado com um erro claro que o modelo consegue usar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ferramentas de escrita: execuções de teste e aprovação humana",
          minutes: 6,
          goal: "Pôr uma ação de escrita atrás de uma execução de teste e de uma aprovação sim/não.",
          text: [
            "Uma ferramenta de escrita muda alguma coisa: guarda um ficheiro, envia uma mensagem, atualiza uma folha, gasta dinheiro. Dê às ferramentas de escrita dois cadeados. Primeiro, uma execução de teste (dry run): a ferramenta diz exatamente o que faria, mas não o faz. Faça da execução de teste o modo por defeito, com DRY_RUN = True no início do seu código.",
            "Segundo, a aprovação humana: antes da escrita real, mostre à pessoa o que vai acontecer e pergunte. Num caderno, answer = input('Save report to reports/week-42.md? yes/no ') e só continue se answer == 'yes'. Numa aplicação real, isto é um botão Aprovar.",
            "Mostre os detalhes reais na aprovação, não um resumo escrito pelo modelo: o nome do ficheiro, o destinatário, o valor. Registe cada aprovação e cada recusa. Se o modelo pedir a mesma escrita outra vez depois de um não, é sinal para parar a execução."
          ],
          steps: ["Marque cada ferramenta como READ (leitura) ou WRITE (escrita).", "Dê a cada ferramenta de escrita um modo de execução de teste, ligado por defeito.", "Antes de uma escrita real, mostre os detalhes exatos e pergunte sim ou não.", "Escreva só com um sim e registe a resposta.", "Pare a execução se o modelo tentar outra vez uma escrita recusada."],
          words: [["Execução de teste (dry run)", "uma execução de prática que mostra o que aconteceria sem o fazer."], ["Ponto de aprovação", "um ponto em que uma pessoa tem de dizer sim antes de uma ação acontecer."]],
          slides: [
            { title: "As ferramentas de escrita mudam coisas", bullets: ["Guardar, enviar, atualizar, gastar", "Precisam de dois cadeados"] },
            { title: "Cadeado 1: execução de teste por defeito", bullets: ["DRY_RUN = True", "Mostra exatamente o que aconteceria", "Não o faz"] },
            { title: "Cadeado 2: aprovação humana", bullets: ["Mostre os detalhes reais: ficheiro, destinatário, valor", "Pergunte sim ou não", "Escreva só com um sim; registe a resposta"] }
          ],
          tryIt: "Escreva save_report(filename, text) com validação (só .md ou .txt, só dentro de uma pasta reports), execução de teste por defeito e uma aprovação sim/não. Experimente com DRY_RUN ligado e depois desligado, respondendo não uma vez e sim uma vez.",
          youCanNow: "acrescentar ferramentas de escrita que só agem depois de uma execução de teste e de um sim de uma pessoa.",
          quickCheck: [
            { objective: "O3", q: "O que faz uma execução de teste?", options: ["Mostra o que aconteceria sem o fazer", "Executa a ação duas vezes para ter a certeza", "Apaga primeiro o ficheiro antigo", "Guarda uma cópia de segurança do modelo"], answer: 0, why: "Uma execução de teste deixa uma pessoa ver o resultado antes de qualquer coisa mudar." },
            { objective: "O3", q: "O pedido de aprovação só diz \"Proceed? yes/no\". O que mudaria?", options: ["Nada, é curto e claro", "Fazer o agente responder sim sozinho", "Mostrar o nome exato do ficheiro e o texto que vai ser guardado", "Tirar a aprovação para poupar tempo"], answer: 2, why: "Uma pessoa só consegue aprovar bem quando vê os detalhes exatos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Dar ferramentas reais a um agente",
        questions: [
          { objective: "O1", q: "O que dá um esquema de ferramenta ao modelo?", options: ["A sua chave de API", "O código-fonte da ferramenta", "O nome, o propósito e as entradas da ferramenta", "Permissão para executar qualquer coisa"], answer: 2, why: "O modelo escolhe e preenche as ferramentas a partir dos seus esquemas." },
          { objective: "O1", q: "Qual é o melhor nome de ferramenta?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Os nomes de ação dizem ao modelo o que a ferramenta faz." },
          { objective: "O2", q: "O modelo envia a read_csv o nome de ficheiro '../../passwords.txt'. A ferramenta deve:", options: ["Lê-lo, porque o modelo pediu", "Pedir ao modelo que prometa que é seguro", "Ler metade", "Recusar com um erro claro"], answer: 3, why: "Os truques de caminho para fora da pasta permitida têm de ser bloqueados pela ferramenta." },
          { objective: "O3", q: "Porque é que DRY_RUN deve estar ligado por defeito?", options: ["É mais rápido", "Nada muda até alguém o desligar de propósito", "Os modelos preferem", "Poupa tokens"], answer: 1, why: "Um modo seguro por defeito evita escritas por engano." },
          { objective: "O3", q: "O que deve mostrar um pedido de aprovação?", options: ["Um resumo escrito pelo modelo", "Nada, só \"OK?\"", "O nome do modelo", "Os detalhes exatos: nome do ficheiro, destinatário ou valor"], answer: 3, why: "As pessoas têm de aprovar o que vai realmente acontecer." }
        ]
      }
    },
    {
      name: "Capítulo 2: Do agente à automação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gatilhos, horários e repetições seguras",
          minutes: 5,
          goal: "Escolher um gatilho para um agente e tornar as repetições seguras.",
          text: [
            "Uma automação é um agente que começa sozinho. Um gatilho põe-no a funcionar: um horário (todas as segundas-feiras às 8 da manhã), um acontecimento (um ficheiro novo numa pasta, uma nova resposta a um formulário) ou um botão que alguém carrega.",
            "As automações são executadas outra vez: um horário dispara duas vezes, uma execução falha a meio e você começa de novo. Prepare-se para isso. Idempotente quer dizer que executar duas vezes dá o mesmo resultado que uma. Dê às saídas o nome do seu período (reports/week-42.md) e verifique antes de escrever: se o relatório já existe, pare ou pergunte, em vez de fazer uma cópia.",
            "Formas de agendar: no seu próprio computador, o Agendador de Tarefas do Windows ou o cron no Mac e no Linux podem executar um script Python; ferramentas sem código como Zapier, Make e n8n executam fluxos de trabalho a partir de gatilhos; os serviços na nuvem também têm agendadores. O Colab serve para construir e testar, não para executar num horário. Verifique os limites gratuitos atuais de cada ferramenta no seu próprio site."
          ],
          steps: ["Escolha o gatilho: horário, acontecimento ou botão.", "Dê a cada saída o nome do seu período, como week-42.", "Antes de escrever, verifique se a saída já existe.", "Se existir, pare ou pergunte; nunca repita.", "Escolha onde vai funcionar e verifique os limites dessa ferramenta."],
          words: [["Gatilho", "o acontecimento que põe uma automação a funcionar."], ["Idempotente", "seguro para executar mais de uma vez: a segunda execução não muda nada a mais."], ["Cron", "um agendador no Mac e no Linux que executa comandos a horas marcadas."]],
          slides: [
            { title: "Três tipos de gatilho", bullets: ["Horário: todas as segundas às 8 da manhã", "Acontecimento: ficheiro novo ou resposta a um formulário", "Botão: uma pessoa põe-no a funcionar"] },
            { title: "Prepare-se para as repetições", bullets: ["Idempotente: duas vezes = uma vez", "Dê às saídas o nome do período: week-42", "Verifique antes de escrever; nunca repita"] },
            { title: "Onde pode funcionar", bullets: ["Agendador de Tarefas ou cron no seu computador", "Sem código: Zapier, Make, n8n", "O Colab serve para construir, não para agendar"] }
          ],
          tryIt: "Mude save_report para que o nome do ficheiro tenha o número da semana e para que uma segunda execução para a mesma semana pare com \"Report for week 42 already exists\". Execute-o duas vezes para o provar.",
          youCanNow: "escolher um gatilho e tornar uma automação segura para executar mais de uma vez.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer que uma automação é idempotente?", options: ["Só funciona uma vez por ano", "Executá-la duas vezes dá o mesmo resultado que executá-la uma vez", "Nunca precisa de um gatilho", "Pede sempre aprovação"], answer: 1, why: "As tarefas idempotentes podem ser repetidas com segurança, sem criar repetições." },
            { objective: "O4", q: "A sua tarefa semanal funcionou duas vezes por engano e fez dois relatórios. O que mudaria?", options: ["Executá-la menos vezes", "Apagar relatórios à mão todas as semanas", "Desligar o registo", "Dar ao relatório o nome da semana e parar se o relatório dessa semana já existir"], answer: 3, why: "Um nome com a semana mais uma verificação de existência tornam as repetições seguras." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ligar ferramentas com MCP",
          minutes: 5,
          goal: "Explicar o que é o MCP e decidir quando usar um servidor MCP.",
          text: [
            "O Model Context Protocol (MCP) é um padrão de código aberto para ligar aplicações de IA a sistemas de fora: ficheiros, bases de dados, calendários, ferramentas de pesquisa. O seu próprio site compara-o a uma porta USB-C para a IA: constrói-se uma ligação uma vez e muitas aplicações de IA podem usá-la.",
            "No MCP, um servidor oferece ferramentas e dados; um cliente (dentro de uma aplicação de IA como o Claude, o ChatGPT ou um editor de código como o VS Code) liga-se a ele e deixa o modelo usá-los. Pode usar servidores já feitos ou escrever o seu próprio pequeno servidor em Python que envolve ferramentas como a sua read_csv.",
            "O MCP não torna uma ferramenta segura sozinho. Todas as regras do Capítulo 1 continuam a valer: verificar os argumentos, o mínimo de privilégios, aprovação para as escritas. Instale servidores só de fontes em que confia, porque um servidor funciona com todo o acesso que você lhe der. Leia a página de boas práticas de segurança do MCP antes de ligar qualquer coisa privada."
          ],
          words: [["MCP", "Model Context Protocol: um padrão aberto para ligar aplicações de IA a ferramentas e dados."], ["Servidor MCP", "um programa que oferece ferramentas ou dados a aplicações de IA através do MCP."], ["Cliente MCP", "a parte de uma aplicação de IA que se liga aos servidores MCP."]],
          slides: [
            { title: "O que é o MCP", bullets: ["Padrão aberto para ligar aplicações de IA a ferramentas e dados", "Como uma porta USB-C para a IA", "Construa uma vez, use em muitas aplicações de IA"] },
            { title: "Servidores e clientes", bullets: ["Servidor: oferece ferramentas e dados", "Cliente: dentro da aplicação de IA, liga-se aos servidores", "Pode escrever um pequeno servidor em Python"] },
            { title: "Continua a ser trabalho seu", bullets: ["Verificar argumentos, mínimo de privilégios", "Aprovação para as escritas", "Instale servidores só de fontes de confiança"] }
          ],
          sources: [{ name: "Model Context Protocol: What is MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
          tryIt: "Leia a página de introdução do MCP. Depois escreva três frases: que ferramentas suas ofereceria através de um servidor MCP, que aplicação de IA as usaria e que regra de aprovação manteria.",
          youCanNow: "explicar os servidores e clientes MCP e decidir quando faz sentido ligar uma ferramenta através do MCP.",
          quickCheck: [
            { objective: "O5", q: "O que é um servidor MCP?", options: ["Um programa que oferece ferramentas e dados a aplicações de IA de forma padrão", "Um modelo que escreve código", "Uma pasta na nuvem para relatórios", "Um tipo de chave de API"], answer: 0, why: "O MCP, o Model Context Protocol, é uma forma padrão de ligar ferramentas e dados a aplicações de IA." },
            { objective: "O5", q: "Oferece save_report através de um servidor MCP. O que acontece às verificações de argumentos e à aprovação?", options: ["Podem ser tiradas, porque o MCP trata da segurança", "Passam para a aplicação de IA", "Mantém-nas na ferramenta", "Só a aprovação fica"], answer: 2, why: "O MCP liga ferramentas; não substitui as verificações e aprovações do seu próprio código." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Construir a automação do relatório semanal",
          minutes: 6,
          goal: "Juntar as ferramentas, o ciclo e as regras de segurança numa só automação.",
          text: [
            "Agora junte tudo. Ferramentas: read_csv (leitura, validada), calculator (leitura, validada), save_report (escrita: validada, execução de teste, aprovação, sem repetições). O ciclo do curso 3 com um limite de passos e um registo. Um pedido de sistema do curso 2 com o objetivo: resumir a semana e guardar um relatório.",
            "Faça um pequeno ficheiro inventado para testar, como data/sales-week-42.csv com as colunas day, item, amount. Nunca teste com dados reais de clientes ou dados pessoais.",
            "Execute-o do início ao fim. Leia o registo: leu antes de calcular? Perguntou antes de guardar? Execute-o uma segunda vez para a mesma semana: não pode fazer uma repetição. Depois experimente um ficheiro com uma linha má (uma palavra onde devia estar um número) e verifique que ele informa o problema em vez de adivinhar."
          ],
          steps: ["Crie um CSV inventado numa pasta data.", "Registe as três ferramentas com os seus esquemas.", "Execute o ciclo com um limite de passos e um registo.", "Aprove a gravação uma vez; execute outra vez para testar que não há repetições.", "Teste um ficheiro com uma linha má."],
          words: [["Dados de teste", "dados inventados usados para verificar um programa sem pôr em risco informação real."], ["Teste do início ao fim", "executar a automação inteira, do princípio ao fim."]],
          slides: [
            { title: "Junte tudo", bullets: ["read_csv, calculator, save_report", "Ciclo com limite de passos e registo", "Pedido com o objetivo semanal"] },
            { title: "Teste com dados inventados", bullets: ["data/sales-week-42.csv", "Nunca dados reais de clientes ou dados pessoais"] },
            { title: "Verifique a execução", bullets: ["Leu antes de calcular?", "Perguntou antes de guardar?", "Segunda execução: sem repetição", "Linha má: informada, não adivinhada"] }
          ],
          tryIt: "Tarefa final: construa o agente do relatório semanal com read_csv, calculator e save_report (validada, execução de teste por defeito, aprovação sim/não, sem repetições). Execute-o com um CSV inventado, execute-o outra vez para a mesma semana e guarde o registo da execução completa.",
          youCanNow: "transformar um agente numa automação segura e repetível com ferramentas reais.",
          quickCheck: [
            { objective: "O6", q: "O que é um teste do início ao fim da sua automação?", options: ["Testar só a calculadora", "Executar a automação inteira do princípio ao fim", "Ler o código em voz alta", "Testar o modelo num chatbot"], answer: 1, why: "Do início ao fim quer dizer que todas as partes funcionam juntas, como vai ser a sério." },
            { objective: "O6", q: "O seu CSV tem a palavra \"none\" onde devia estar um número de vendas. O que deve fazer o agente?", options: ["Informar o problema no resumo", "Contá-lo como zero sem dizer nada", "Saltar o ficheiro inteiro", "Adivinhar um número"], answer: 0, why: "Um bom agente informa os dados maus em vez de os esconder." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Do agente à automação",
        questions: [
          { objective: "O4", q: "Qual é um gatilho de acontecimento?", options: ["Uma pessoa lê o registo", "Todas as segundas-feiras às 8 da manhã", "Chega um ficheiro novo a uma pasta", "O limite de passos"], answer: 2, why: "Um acontecimento, como um ficheiro novo, põe a execução a funcionar." },
          { objective: "O4", q: "Uma automação é idempotente quando:", options: ["Executá-la duas vezes dá o mesmo resultado que uma vez", "Funciona muito depressa", "Nunca falha", "Não usa ferramentas"], answer: 0, why: "As repetições seguras não duplicam o trabalho." },
          { objective: "O5", q: "O que faz um servidor MCP?", options: ["Treina o modelo", "Oferece ferramentas e dados a aplicações de IA", "Guarda a sua palavra-passe", "Substitui as verificações de argumentos"], answer: 1, why: "Os servidores oferecem ferramentas e dados; os clientes nas aplicações de IA ligam-se a eles." },
          { objective: "O5", q: "Encontrou num site desconhecido um servidor MCP que quer acesso aos seus ficheiros. Qual é a melhor escolha?", options: ["Usar só servidores de fontes em que confia, com o mínimo de acesso necessário", "Dar-lhe acesso a tudo", "Instalá-lo já", "Desligar as aprovações"], answer: 0, why: "Um servidor funciona com todo o acesso que você lhe der." },
          { objective: "O6", q: "Com que dados deve testar a sua automação?", options: ["Registos reais de clientes", "O seu extrato bancário", "Os e-mails do seu amigo", "Dados de teste inventados"], answer: 3, why: "Os dados de teste evitam pôr em risco informação real." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Uso de Ferramentas e Automação com Agentes de IA",
    questions: [
      { objective: "O1", q: "Um esquema de ferramenta inclui:", options: ["Os dados de treino do modelo", "Um nome, um propósito e entradas", "Uma palavra-passe", "Uma lista de preços"], answer: 1, why: "É isso que o modelo lê para escolher e usar a ferramenta." },
      { objective: "O1", q: "O JSON Schema serve para:", options: ["Guardar chaves de API", "Fazer imagens", "Descrever a forma das entradas das ferramentas", "Treinar modelos"], answer: 2, why: "Descreve os tipos e os campos obrigatórios." },
      { objective: "O1", q: "Uma boa ferramenta faz:", options: ["Tudo o que o modelo diz", "Todas as tarefas ao mesmo tempo", "Uma tarefa clara", "Nada"], answer: 2, why: "As ferramentas pequenas e específicas são mais fáceis de escolher e mais seguras." },
      { objective: "O2", q: "Quem tem de fazer cumprir as regras de uma ferramenta?", options: ["O próprio código da ferramenta", "O modelo", "O navegador do utilizador", "Ninguém"], answer: 0, why: "O modelo pode errar ou ser enganado." },
      { objective: "O2", q: "O nome de ficheiro '../secret.txt' é um exemplo de:", options: ["Um ficheiro normal", "Um gatilho", "Um esquema", "Path traversal (fuga de pasta)"], answer: 3, why: "../ tenta sair da pasta permitida." },
      { objective: "O2", q: "Uma lista de permitidos é:", options: ["Uma lista de utilizadores bloqueados", "Uma lista dos únicos valores aceites", "Uma lista de tarefas", "Uma definição do modelo"], answer: 1, why: "Só os valores da lista são aceites." },
      { objective: "O2", q: "Um agente deve executar texto escrito pelo modelo como comando da shell?", options: ["Sim, sempre", "Só ao fim de semana", "Só se for curto", "Não, nunca"], answer: 3, why: "Isso transforma um erro do modelo num problema do sistema." },
      { objective: "O3", q: "Uma execução de teste:", options: ["Apaga os ficheiros de teste", "Funciona sem modelo", "Mostra o que aconteceria sem o fazer", "Executa duas vezes"], answer: 2, why: "Mostra a ação antes, com segurança." },
      { objective: "O3", q: "Qual é uma ferramenta de escrita?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Guardar muda alguma coisa." },
      { objective: "O3", q: "Antes de uma escrita real, a pessoa deve ver:", options: ["Só um polegar para cima", "O ficheiro, o destinatário ou o valor exatos", "A chave de API", "Nada"], answer: 1, why: "A aprovação tem de ser sobre os detalhes reais." },
      { objective: "O3", q: "O modelo pede para guardar outra vez logo depois de você dizer não. Você deve:", options: ["Parar a execução e ler o registo", "Dizer sim para ele parar", "Desligar a aprovação", "Dar-lhe mais ferramentas"], answer: 0, why: "Tentar outra vez uma escrita recusada é um sinal de alerta." },
      { objective: "O4", q: "Qual é um gatilho de horário?", options: ["Uma linha má", "Uma nova resposta a um formulário", "Carregar num botão", "Todas as segundas-feiras às 8 da manhã"], answer: 3, why: "Os horários põem as execuções a funcionar a horas marcadas." },
      { objective: "O4", q: "Dar aos relatórios o nome da semana (week-42) ajuda a:", options: ["Tornar o modelo mais inteligente", "Evitar relatórios repetidos quando se executa outra vez", "Esconder o relatório", "Poupar tokens"], answer: 1, why: "O agente pode verificar se o relatório dessa semana já existe." },
      { objective: "O4", q: "O Google Colab é o lugar certo para executar um horário semanal?", options: ["Sim, funciona para sempre", "Sim, tem um calendário incorporado", "Não, serve para construir e testar", "Só para utilizadores pagos"], answer: 2, why: "Use um agendador ou um serviço de automação para as execuções agendadas." },
      { objective: "O4", q: "O cron e o Agendador de Tarefas do Windows servem para:", options: ["Verificar JSON", "Escrever pedidos", "Executar programas a horas marcadas", "Treinar modelos"], answer: 2, why: "São agendadores." },
      { objective: "O5", q: "MCP quer dizer:", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "É um padrão aberto para ligar aplicações de IA a ferramentas." },
      { objective: "O5", q: "No seu próprio site, o MCP é comparado a:", options: ["Um cabo de carregador de telefone só para a Apple", "Um gestor de palavras-passe", "Uma folha de cálculo", "Uma porta USB-C para aplicações de IA"], answer: 3, why: "Uma ligação padrão que muitas aplicações podem usar." },
      { objective: "O5", q: "Usar o MCP quer dizer que as suas verificações de argumentos:", options: ["Já não são precisas", "Continuam a ser precisas", "São feitas pelo site do servidor", "São feitas pelo modelo"], answer: 1, why: "O MCP liga ferramentas; não as torna seguras." },
      { objective: "O6", q: "Uma linha do CSV tem uma palavra onde devia estar um número. Um bom agente:", options: ["Adivinha um número", "Salta o relatório inteiro sem dizer nada", "Apaga o ficheiro", "Informa o problema"], answer: 3, why: "Informe os problemas nos dados; nunca adivinhe." },
      { objective: "O6", q: "Um teste do início ao fim quer dizer:", options: ["Testar uma função", "Ler o esquema", "Executar a automação inteira do princípio ao fim", "Verificar só a resposta final"], answer: 2, why: "Verifica todas as partes a funcionar juntas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 7, 9, 11, 12, 15, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Ferramentas descritas", objective: "O1", notYet: "Uma ferramenta não tem esquema, ou tem um nome ou um propósito vago.", meets: "read_csv, calculator e save_report têm cada uma um nome, um propósito e entradas com tipo.", exceeds: "As descrições são tão claras que o modelo escolhe a ferramenta certa logo à primeira." },
      { name: "Argumentos verificados", objective: "O2", notYet: "save_report aceita qualquer nome de ficheiro ou pasta.", meets: "Só ficheiros .txt ou .md, só na pasta reports; uma entrada má recebe um erro claro.", exceeds: "read_csv é verificada da mesma forma e os erros são testados." },
      { name: "Execução de teste e aprovação", objective: "O3", notYet: "O relatório é escrito sem execução de teste nem um sim.", meets: "A execução de teste está ligada por defeito e pergunta-se \"Save report? yes/no\" antes de escrever.", exceeds: "A aprovação mostra o nome exato do ficheiro e uma pré-visualização do texto." },
      { name: "Repetição segura", objective: "O4", notYet: "Uma segunda execução para a mesma semana faz um relatório repetido.", meets: "Uma segunda execução para a mesma semana para sem repetir.", exceeds: "Diz claramente de que semana é o relatório que já existe." },
      { name: "Execução completa registada", objective: "O6", notYet: "Não há registo, ou a execução não terminou.", meets: "O registo mostra uma execução completa, desde a leitura do CSV até à aprovação.", exceeds: "O resumo informa as linhas más que houver nos dados." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que passam para o curso 5 do programa de agentes em 30 dias",
      "Alunos que dizem ter executado uma automação agendada com aprovação nas ações de escrita em 30 dias (inquérito de seguimento)",
      "Alunos que dizem não ter tido escritas indesejadas nem repetições nas suas automações (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com navegador de internet e internet; o Colab ou o Python no seu próprio computador",
      "Uma chave de API de um modelo do curso 2, ou um modelo local gratuito",
      "Um ficheiro CSV inventado de vendas ou despesas",
      "O seu ciclo de agente do curso 3",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois construam ao vivo cada camada de segurança: esquema, verificações, execução de teste, aprovação.",
      "Dê a todos o mesmo CSV inventado para que os resultados possam ser comparados; nunca use registos reais de clientes ou de dinheiro.",
      "Peça aos alunos que experimentem em grupo, em voz alta, os nomes de ficheiro maus da Lição 2, para verem cada erro.",
      "Sublinhe que só se devem usar servidores MCP de confiança, com o mínimo de acesso necessário.",
      "Avalie a tarefa final com a grelha de avaliação e peça a cada aluno que mostre a segunda execução a parar sem repetir."
    ]
  }
};
