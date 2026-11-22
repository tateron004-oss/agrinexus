"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-data-analytics-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Formulas (=SUM, =AVERAGE) stay exactly as in the English.

module.exports = {
  id: "underserved-data-analytics-tools-pt",
  lang: "pt",
  translationOf: "underserved-data-analytics-tools",
  category: "Undeserved Community",
  name: "Introdução às Ferramentas e Técnicas de Análise de Dados",
  skills: "Montar uma folha de cálculo organizada, Ordenar e filtrar dados, Usar SUM e AVERAGE, Fazer um gráfico, Usar a IA para explicar fórmulas, Partilhar uma conclusão com palavras simples",
  outcome: "colocar informação real numa folha de cálculo gratuita (Google Sheets ou Excel para a web), ordená-la e filtrá-la, calcular o total e a média com fórmulas, fazer um gráfico e explicar o que ele mostra em duas frases simples.",
  about: [
    "Análise de dados quer dizer usar informação para responder a uma pergunta. Um banco alimentar quer saber qual é o seu dia com mais movimento. Uma família quer saber para onde vai o seu dinheiro. Uma liga de jovens quer saber quantas crianças vieram em cada semana. Pode responder a perguntas como estas com ferramentas gratuitas.",
    "Neste curso vai usar uma folha de cálculo gratuita, o Google Sheets ou o Excel para a web, num telefone, num computador de casa ou num computador da biblioteca. Vai introduzir dados, ordená-los e filtrá-los, usar fórmulas simples, fazer um gráfico e usar um assistente de IA gratuito para ajudar quando ficar preso.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" que constrói a mesma folha de cálculo, passo a passo. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Construa uma folha de cálculo com um mês de dados reais ou de prática (por exemplo visitas ao banco alimentar por dia, ou gastos da família por categoria). Ordene-a, filtre-a, acrescente um total com SUM e uma média com AVERAGE, faça um gráfico e escreva duas frases simples que digam o que os dados mostram.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos de comunidades desfavorecidas que querem uma habilidade de computador útil para o trabalho, ou que precisam de registar números de uma família, banco alimentar, igreja, liga de jovens ou pequena organização sem fins lucrativos.",
    startingPoint: "Sabem usar um telefone e talvez um computador para navegar na internet. Muitos nunca usaram uma folha de cálculo, nunca escreveram uma fórmula nem fizeram um gráfico, e alguns sentem-se inseguros com a matemática.",
    gap: "Muitos trabalhos de escritório, de comércio e em organizações sem fins lucrativos pedem habilidades com folhas de cálculo, e os grupos da comunidade precisam de mostrar o que os seus números querem dizer. Os alunos precisam de introduzir dados organizados, ordenar, filtrar, somar, fazer gráficos e explicar, usando ferramentas gratuitas e mantendo privadas as informações das pessoas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um computador da biblioteca ou de casa funciona melhor; uma aplicação no telefone serve para folhas pequenas",
      "Custo: Google Sheets ou Excel para a web gratuitos, com uma conta gratuita",
      "Privacidade: nenhum nome, número de telefone ou número de conta de pessoas reais colado na IA",
      "Nível de matemática: só somar e fazer médias; a folha de cálculo faz as contas"
    ],
    prerequisites: "Nenhum. Quem nunca usou um rato ou um teclado de computador pode fazer primeiro um curso básico de computador."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com algo que é importante para você em casa, no trabalho ou na sua comunidade", action: "escrever uma pergunta clara que os dados possam responder e fazer a lista dos dados de que precisa", standard: "começando por qual, quantos ou quanto" },
    { id: "O2", condition: "Usando o Google Sheets ou o Excel para a web", action: "criar uma folha de cálculo com títulos claros e introduzir dados organizados", standard: "um título por coluna na linha 1 e um registo por linha, com pelo menos dez linhas" },
    { id: "O3", condition: "Com uma folha de cálculo com dados", action: "ordenar uma coluna do maior para o menor e filtrar para mostrar só algumas linhas", standard: "e depois limpar o filtro para todas as linhas voltarem" },
    { id: "O4", condition: "Com uma coluna de números", action: "calcular um total com SUM e uma média com AVERAGE", standard: "usando o intervalo certo, para que os dois se atualizem quando um número muda" },
    { id: "O5", condition: "Com os seus dados e um assistente de IA gratuito", action: "criar um gráfico com um título claro e pedir à IA para explicar uma fórmula ou um erro", standard: "escolhendo o tipo de gráfico certo e sem colar dados privados" },
    { id: "O6", condition: "Quando a sua folha estiver pronta", action: "escrever duas frases simples que respondam à sua pergunta, verificar o seu trabalho e partilhá-lo com segurança", standard: "com um número que apoie a resposta e partilhando só com as pessoas que precisam" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar os seus dados",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a análise de dados, e fazer uma boa pergunta",
          minutes: 4,
          goal: "Escrever uma pergunta clara que os dados possam responder.",
          text: [
            "Dados são informações que pode contar ou pôr numa lista: datas, valores, nomes de lugares, número de visitantes. Análise quer dizer olhar para esses dados para responder a uma pergunta.",
            "Todo bom projeto começa com uma pergunta clara. \"Em que dia da semana o nosso banco alimentar recebe mais visitantes?\" é clara. \"Fale-me do banco alimentar\" não é.",
            "Uma pergunta clara diz-lhe que dados recolher. Para encontrar o dia com mais movimento, precisa da data e do número de visitantes de cada dia."
          ],
          steps: ["Escolha algo que é importante para você: família, trabalho, escola ou comunidade.", "Escreva uma pergunta que comece por qual, quantos ou quanto.", "Faça a lista dos dados de que precisa para responder."],
          words: [["Dados", "informações que pode contar ou pôr numa lista, como datas, valores ou nomes."], ["Análise", "olhar para os dados para responder a uma pergunta."]],
          slides: [
            { title: "Dados e análise", bullets: ["Dados: informações que pode contar ou pôr numa lista", "Análise: usar dados para responder a uma pergunta"] },
            { title: "Comece com uma pergunta clara", bullets: ["Clara: \"Que dia recebe mais visitantes?\"", "Pouco clara: \"Fale-me do banco alimentar\""] },
            { title: "A pergunta diz-lhe o que recolher", bullets: ["Dia com mais movimento? Precisa de datas e do número de visitantes", "Maior gasto? Precisa de categorias e valores"] }
          ],
          tryIt: "Escreva uma pergunta clara sobre a sua família, trabalho, escola ou comunidade que os números possam responder. Por baixo, faça a lista dos dois ou três tipos de dados de que precisaria.",
          youCanNow: "escrever uma pergunta clara e dizer que dados são precisos para lhe responder.",
          quickCheck: [
            { objective: "O1", q: "O que são dados?", options: ["Informações que pode contar ou pôr numa lista", "Só os números de um extrato do banco", "Um tipo de computador", "Um site"], answer: 0, why: "Dados são informações como datas, valores, lugares e número de visitantes." },
            { objective: "O1", q: "A sua igreja quer saber se vem mais gente no inverno. De que dados precisa?", options: ["O número de telefone do pastor", "A data e o número de pessoas em cada culto", "A cor do edifício", "Nada; basta adivinhar"], answer: 1, why: "Uma pergunta clara diz-lhe para recolher a data e a contagem de cada culto." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir uma folha de cálculo gratuita e introduzir dados",
          minutes: 5,
          goal: "Criar uma folha de cálculo com títulos de coluna claros e os seus dados.",
          text: [
            "Uma folha de cálculo é uma grelha de caixas chamadas células. As colunas vão de cima para baixo e têm letras (A, B, C). As linhas vão da esquerda para a direita e têm números (1, 2, 3). A célula B2 está na coluna B, linha 2.",
            "Opções gratuitas: o Google Sheets em sheets.google.com, com uma conta Google gratuita, ou o Excel para a web em office.com, com uma conta Microsoft gratuita. Os dois funcionam num navegador de internet e como aplicações no telefone.",
            "Mantenha os dados organizados: um título por coluna na linha 1 (como Data, Dia, Visitantes), uma linha para cada registo, e os números escritos só como números, sem palavras a mais. Dados organizados tornam mais fácil cada passo seguinte."
          ],
          steps: ["Abra sheets.google.com ou office.com e comece uma folha de cálculo em branco.", "Dê ao ficheiro um nome claro.", "Escreva um título em cada coluna da linha 1.", "Introduza um registo por linha, por baixo dos títulos."],
          words: [["Folha de cálculo", "uma grelha de linhas e colunas para trabalhar com números e listas."], ["Célula", "uma caixa da folha de cálculo, com o nome da letra da coluna e do número da linha, como B2."], ["Título", "o nome no topo de uma coluna."]],
          slides: [
            { title: "Uma folha de cálculo é uma grelha", bullets: ["As colunas têm letras: A, B, C", "As linhas têm números: 1, 2, 3", "Célula B2 = coluna B, linha 2"] },
            { title: "Folhas de cálculo gratuitas", bullets: ["Google Sheets: sheets.google.com", "Excel para a web: office.com", "Os dois funcionam num computador da biblioteca ou no telefone"] },
            { title: "Mantenha os dados organizados", bullets: ["Um título por coluna na linha 1", "Um registo por linha", "Números só como números"] }
          ],
          tryIt: "Abra uma folha de cálculo gratuita. Faça três títulos para a sua pergunta (por exemplo Data, Dia, Visitantes) e introduza pelo menos dez linhas de dados reais ou de prática.",
          youCanNow: "começar uma folha de cálculo gratuita e introduzir dados organizados com títulos claros.",
          quickCheck: [
            { objective: "O2", q: "Numa folha de cálculo, como se chamam as linhas?", options: ["Com letras", "Com cores", "Com números", "Com nomes"], answer: 2, why: "As linhas vão da esquerda para a direita e têm números; as colunas têm letras." },
            { objective: "O2", q: "Escreveu \"cerca de 40 pessoas\" na coluna Visitantes. O que muda?", options: ["Nada", "Acrescenta mais palavras", "Põe em negrito", "Escreve só 40, como um número"], answer: 3, why: "Dados organizados usam só números, para a folha de cálculo poder fazer contas com eles." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ordenar e filtrar",
          minutes: 5,
          goal: "Ordenar os seus dados do maior para o menor e filtrá-los para mostrar só algumas linhas.",
          text: [
            "Ordenar põe as linhas por ordem, por exemplo do maior para o menor. Ordenar a coluna Visitantes do maior para o menor põe o dia com mais movimento no topo.",
            "Filtrar esconde as linhas de que não precisa agora. Pode filtrar a coluna Dia para mostrar só os sábados. Filtrar não apaga nada; pode desligar o filtro e todas as linhas voltam.",
            "Tanto no Google Sheets como no Excel para a web, ordenar e filtrar estão no menu Dados ou no separador Dados. Se não os encontrar, pergunte a um assistente de IA gratuito: \"Como ordeno uma coluna do maior para o menor no Google Sheets?\""
          ],
          steps: ["Clique numa célula qualquer dos seus dados.", "Abra o menu Dados ou o separador Dados e ligue um filtro.", "Use a pequena seta num título para ordenar do maior para o menor.", "Use a seta noutro título para mostrar só alguns valores e depois limpe o filtro."],
          words: [["Ordenar", "pôr as linhas por ordem, como do maior para o menor ou de A a Z."], ["Filtrar", "mostrar só as linhas que correspondem ao que escolhe, sem apagar as outras."]],
          slides: [
            { title: "Ordenar: pôr as linhas por ordem", bullets: ["Do maior para o menor põe o valor mais alto primeiro", "De A a Z põe os nomes por ordem"] },
            { title: "Filtrar: mostrar só o que precisa", bullets: ["Exemplo: só os sábados", "Nada é apagado", "Desligue o filtro e todas as linhas voltam"] },
            { title: "Onde os encontrar", bullets: ["O menu Dados ou o separador Dados", "Ficou preso? Pergunte à IA como se faz na sua ferramenta"] }
          ],
          tryIt: "Ordene a sua coluna principal de números do maior para o menor e anote a linha do topo. Depois filtre para mostrar só um tipo de linha e limpe o filtro.",
          youCanNow: "ordenar e filtrar uma folha de cálculo para encontrar o que procura.",
          quickCheck: [
            { objective: "O3", q: "O que faz ordenar?", options: ["Põe as linhas por ordem, como do maior para o menor", "Apaga as linhas de que não precisa", "Soma uma coluna", "Faz um gráfico"], answer: 0, why: "Ordenar põe as linhas numa ordem, como o número maior primeiro." },
            { objective: "O3", q: "Só quer ver as linhas das segundas-feiras. O que usa?", options: ["SUM", "Um filtro na coluna Dia", "Um gráfico circular", "Apagar as outras linhas"], answer: 1, why: "Um filtro esconde as linhas de que não precisa sem as apagar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar os seus dados",
        questions: [
          { objective: "O1", q: "Qual é a pergunta de dados mais clara?", options: ["\"Fale-me do banco alimentar\"", "\"Coisas?\"", "\"Em que dia da semana o banco alimentar recebe mais visitantes?\"", "\"Dados, por favor\""], answer: 2, why: "Diz exatamente o que encontrar, por isso sabe que dados recolher." },
          { objective: "O2", q: "O que é a célula C4?", options: ["A caixa na coluna C, linha 4", "O quarto ficheiro", "Linha C, coluna 4", "Um número de telefone"], answer: 0, why: "As células têm o nome da letra da coluna e depois do número da linha." },
          { objective: "O2", q: "Onde devem ficar os títulos das colunas?", options: ["Em baixo", "Na linha 1, um título por coluna", "Num ficheiro à parte", "Em lado nenhum"], answer: 1, why: "Os títulos na linha 1 mantêm os dados organizados e fáceis de ordenar." },
          { objective: "O3", q: "Filtra para mostrar só os sábados. O que acontece às outras linhas?", options: ["São apagadas para sempre", "Passam para um ficheiro novo", "Transformam-se num gráfico", "Ficam escondidas e voltam quando limpa o filtro"], answer: 3, why: "Filtrar esconde linhas; não as apaga." },
          { objective: "O3", q: "Quer o dia com mais movimento no topo. O que faz?", options: ["Ordena a coluna dos visitantes do maior para o menor", "Apaga as outras linhas", "Muda o nome do ficheiro", "Põe o texto em negrito"], answer: 0, why: "Ordenar do maior para o menor põe o número mais alto primeiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar e partilhar respostas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fórmulas: SUM e AVERAGE",
          minutes: 5,
          goal: "Usar SUM para somar uma coluna e AVERAGE para encontrar a sua média.",
          text: [
            "Uma fórmula é uma pequena instrução que faz as contas por você. Todas as fórmulas começam com um sinal de igual (=).",
            "=SUM(C2:C31) soma todos os números da célula C2 à célula C31. =AVERAGE(C2:C31) encontra a média desses números. C2:C31 chama-se intervalo: todas as células de C2 até C31.",
            "Se mudar um número na coluna, o total e a média atualizam-se sozinhos. Essa é a força de uma folha de cálculo: não precisa de voltar a contar à mão."
          ],
          steps: ["Clique numa célula vazia por baixo da sua coluna de números.", "Escreva =SUM( depois a primeira célula, dois pontos e a última célula, e depois ).", "Carregue em Enter para ver o total.", "Noutra célula vazia, faça o mesmo com =AVERAGE( ... )."],
          words: [["Fórmula", "uma instrução que começa com = e faz contas numa folha de cálculo. Se a sua folha estiver em português, SUM pode aparecer como SOMA e AVERAGE como MÉDIA."], ["Intervalo", "um grupo de células, escrito como C2:C31."], ["Média", "o total dividido pela quantidade de números."]],
          slides: [
            { title: "As fórmulas começam com =", bullets: ["Fazem as contas por você", "Atualizam-se quando os números mudam"] },
            { title: "Duas fórmulas para saber", bullets: ["=SUM(C2:C31) soma todos", "=AVERAGE(C2:C31) encontra a média"] },
            { title: "O que é um intervalo?", bullets: ["C2:C31 quer dizer de C2 até C31", "Primeira célula, dois pontos, última célula"] }
          ],
          tryIt: "Por baixo da sua coluna de números, acrescente um total com =SUM e uma média com =AVERAGE. Mude um número e veja os dois a atualizarem-se.",
          youCanNow: "calcular o total e a média de uma coluna com SUM e AVERAGE.",
          quickCheck: [
            { objective: "O4", q: "O que é um intervalo como B2:B20?", options: ["Uma só célula", "Um tipo de gráfico", "Todas as células de B2 até B20", "O nome de um ficheiro"], answer: 2, why: "Um intervalo são todas as células da primeira à última, ligadas por dois pontos." },
            { objective: "O4", q: "Quer o total dos gastos de D2 a D15. O que escreve?", options: ["SUM D2 D15", "=AVERAGE(D2:D15)", "=D2+D15", "=SUM(D2:D15)"], answer: 3, why: "=SUM(D2:D15) soma todos os números de D2 a D15." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um gráfico, com a IA como ajudante",
          minutes: 5,
          goal: "Fazer um gráfico simples e usar a IA para explicar uma fórmula ou corrigir um erro.",
          text: [
            "Um gráfico transforma números numa imagem. Um gráfico de barras compara quantidades, como visitantes por dia. Um gráfico de linhas mostra a mudança ao longo do tempo. Um gráfico circular mostra as partes de um todo, como os gastos por categoria.",
            "Para fazer um, selecione os títulos e os dados e depois insira um gráfico a partir do menu Inserir ou do separador Inserir. Mude o título para dizer o que o gráfico mostra.",
            "Um assistente de IA gratuito pode explicar fórmulas e erros. Escreva a fórmula ou o erro e pergunte: \"Explique isto com palavras simples e diga como o corrigir.\" Não cole dados privados como nomes, moradas ou números de conta; descreva as colunas em vez disso."
          ],
          steps: ["Selecione os títulos e os dados que quer mostrar.", "Abra o menu Inserir ou o separador Inserir e escolha Gráfico.", "Escolha barras, linhas ou circular.", "Dê ao gráfico um título claro."],
          words: [["Gráfico de barras", "um gráfico que compara quantidades com barras."], ["Gráfico de linhas", "um gráfico que mostra a mudança ao longo do tempo."], ["Gráfico circular", "um círculo que mostra as partes de um todo."]],
          slides: [
            { title: "Escolha o gráfico certo", bullets: ["Barras: comparar quantidades", "Linhas: mudança ao longo do tempo", "Circular: partes de um todo"] },
            { title: "Fazer um gráfico", bullets: ["Selecione os títulos e os dados", "Inserir, depois Gráfico", "Dê-lhe um título claro"] },
            { title: "A IA como ajudante", bullets: ["Peça-lhe para explicar uma fórmula ou um erro", "Descreva as colunas; não cole dados privados"] }
          ],
          tryIt: "Faça um gráfico de barras ou de linhas com os seus dados e dê-lhe um título claro. Depois peça a um assistente de IA para explicar com palavras simples o que faz =AVERAGE(C2:C31).",
          youCanNow: "fazer um gráfico e usar a IA para entender fórmulas sem partilhar dados privados.",
          quickCheck: [
            { objective: "O5", q: "Que gráfico compara quantidades, como visitantes por dia?", options: ["Gráfico de barras", "Gráfico de linhas", "Gráfico circular", "Nenhum gráfico"], answer: 0, why: "Um gráfico de barras compara quantidades lado a lado." },
            { objective: "O5", q: "A sua fórmula mostra um erro e a folha tem nomes de clientes. O que cola na IA?", options: ["A folha inteira", "A fórmula e uma descrição das colunas", "Os números de telefone dos clientes", "A palavra-passe da sua conta"], answer: 1, why: "Descreva as colunas e cole a fórmula, não os dados privados." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dizer o que os dados mostram",
          minutes: 5,
          goal: "Escrever duas frases simples que respondam à sua pergunta e partilhar a folha com segurança.",
          text: [
            "O seu trabalho só está acabado quando alguém o entende. Escreva duas frases: uma com a resposta e outra com um número que a apoie. Por exemplo: \"O sábado é o nosso dia com mais movimento. Tivemos em média 64 visitantes aos sábados, contra 38 nos outros dias.\"",
            "Verifique o seu trabalho antes de partilhar. Procure erros nos números, linhas em branco e totais que parecem grandes ou pequenos demais. Se alguma coisa parece errada, provavelmente está.",
            "Para partilhar, use o botão Partilhar e escolha quem pode ver. Para dados sobre pessoas, partilhe só com quem precisa e tire os nomes ou números de telefone se não forem precisos."
          ],
          steps: ["Escreva uma frase com a resposta à sua pergunta.", "Escreva uma frase com um número que a apoie.", "Procure erros nos números, linhas em branco e totais estranhos.", "Partilhe só com as pessoas que precisam."],
          words: [["Conclusão", "o que os dados mostram, dito com palavras simples."]],
          slides: [
            { title: "Diga o que mostra", bullets: ["Frase 1: a resposta", "Frase 2: um número que a apoie"] },
            { title: "Verifique antes de partilhar", bullets: ["Erros nos números", "Linhas em branco", "Totais que parecem grandes ou pequenos demais"] },
            { title: "Partilhe com segurança", bullets: ["Use o botão Partilhar", "Só com as pessoas que precisam", "Tire nomes ou números de telefone se não forem precisos"] }
          ],
          tryIt: "Tarefa final: termine a sua folha de cálculo com ordenação, um filtro, SUM, AVERAGE e um gráfico. Escreva duas frases simples que respondam à sua pergunta, verifique o seu trabalho e partilhe-o com uma pessoa.",
          youCanNow: "transformar dados numa conclusão clara e verificada e partilhá-la com segurança.",
          quickCheck: [
            { objective: "O6", q: "Que duas partes tem uma boa conclusão?", options: ["Um título e uma cor", "Um gráfico e uma fórmula", "Uma resposta e um número que a apoie", "Um nome e um número de telefone"], answer: 2, why: "Uma frase dá a resposta e outra dá um número que a apoia." },
            { objective: "O6", q: "A sua média de visitantes por dia mostra 4,200, mas o banco alimentar é pequeno. O que faz?", options: ["Partilha logo", "Apaga a folha", "Arredonda para 4,000", "Procura erros nos números, linhas em branco e o intervalo da fórmula"], answer: 3, why: "Um número que parece errado provavelmente está, por isso verifica primeiro o seu trabalho." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Encontrar e partilhar respostas",
        questions: [
          { objective: "O4", q: "Todas as fórmulas de uma folha de cálculo começam com:", options: ["Um cifrão", "Um ponto de interrogação", "Uma letra", "Um sinal de igual (=)"], answer: 3, why: "As fórmulas começam com =." },
          { objective: "O4", q: "O que faz =SUM(B2:B10)?", options: ["Soma os números de B2 a B10", "Encontra a média", "Ordena a coluna", "Faz um gráfico"], answer: 0, why: "SUM soma todos os números do intervalo." },
          { objective: "O5", q: "Que gráfico mostra melhor a mudança ao longo do tempo?", options: ["Gráfico circular", "Gráfico de linhas", "Nenhum gráfico", "Uma fotografia"], answer: 1, why: "Os gráficos de linhas mostram como uma coisa muda ao longo do tempo." },
          { objective: "O5", q: "Quer que a IA explique um erro numa folha com nomes e números de telefone de clientes. O que deve fazer?", options: ["Colar tudo", "Colar só os números de telefone", "Descrever as colunas e colar a fórmula, sem dados privados", "Desistir"], answer: 2, why: "Pode ter ajuda sem partilhar informações privadas." },
          { objective: "O6", q: "Qual é a melhor conclusão para partilhar?", options: ["\"O sábado tem mais movimento. Tivemos em média 64 visitantes aos sábados e 38 nos outros dias.\"", "\"Números.\"", "\"É um gráfico.\"", "\"Veja a folha.\""], answer: 0, why: "Dá a resposta e um número que a apoia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução às Ferramentas e Técnicas de Análise de Dados",
    questions: [
      { objective: "O1", q: "Análise de dados quer dizer:", options: ["Apagar ficheiros antigos", "Usar dados para responder a uma pergunta", "Comprar um computador", "Escrever depressa"], answer: 1, why: "Análise é olhar para os dados para encontrar uma resposta." },
      { objective: "O1", q: "Porque começar com uma pergunta clara?", options: ["Diz-lhe que dados recolher", "Torna o ficheiro maior", "Não é preciso", "Esconde os dados"], answer: 0, why: "A pergunta define os dados de que precisa." },
      { objective: "O1", q: "Para saber que categoria de gastos custa mais, precisa de:", options: ["Só datas", "A sua palavra-passe", "Categorias e valores", "Números de telefone"], answer: 2, why: "Categorias e valores deixam-no comparar os gastos." },
      { objective: "O2", q: "Qual é uma folha de cálculo gratuita?", options: ["Um relógio com calculadora", "Um caderno de papel", "Um anúncio que aparece no ecrã", "Google Sheets"], answer: 3, why: "O Google Sheets é gratuito com uma conta Google; o Excel para a web é gratuito com uma conta Microsoft." },
      { objective: "O2", q: "Numa folha de cálculo, as colunas têm o nome de:", options: ["Letras", "Números", "Cores", "Emojis"], answer: 0, why: "As colunas são A, B, C; as linhas são 1, 2, 3." },
      { objective: "O2", q: "Quais são dados organizados?", options: ["Muitos títulos numa só célula", "\"mais ou menos 20\" numa célula de números", "Um título por coluna e só números", "Linhas em branco entre cada registo"], answer: 2, why: "Dados organizados têm títulos claros e só números." },
      { objective: "O3", q: "Ordenar do maior para o menor põe:", options: ["O número menor primeiro", "O número maior primeiro", "As linhas ao acaso", "Tudo num gráfico"], answer: 1, why: "Do maior para o menor começa pelo valor mais alto." },
      { objective: "O3", q: "Filtrar uma coluna:", options: ["Apaga linhas para sempre", "Envia a folha por email", "Muda os números", "Esconde as linhas que não correspondem, sem as apagar"], answer: 3, why: "Os filtros só escondem linhas até os limpar." },
      { objective: "O3", q: "Onde ficam normalmente ordenar e filtrar?", options: ["No menu Dados ou no separador Dados", "No botão Imprimir", "No caixote do lixo", "No nome do ficheiro"], answer: 0, why: "As duas ferramentas têm-nos em Dados." },
      { objective: "O4", q: "O que encontra =AVERAGE(C2:C31)?", options: ["O número maior", "A média de C2 a C31", "O número de linhas", "O primeiro valor"], answer: 1, why: "AVERAGE divide o total pela quantidade de números." },
      { objective: "O4", q: "Em C2:C31, os dois pontos querem dizer:", options: ["Dividir", "Parar", "De C2 até C31", "Multiplicar"], answer: 2, why: "Os dois pontos fazem um intervalo de células." },
      { objective: "O4", q: "Muda um número na coluna. O total de SUM:", options: ["Fica igual para sempre", "Desaparece", "Transforma-se em texto", "Atualiza-se sozinho"], answer: 3, why: "As fórmulas voltam a calcular quando os dados mudam." },
      { objective: "O5", q: "Que gráfico compara quantidades, como visitantes por dia?", options: ["Gráfico de barras", "Gráfico circular de um só item", "Nenhum gráfico", "Um mapa"], answer: 0, why: "Os gráficos de barras comparam quantidades lado a lado." },
      { objective: "O5", q: "Que gráfico mostra as partes de um todo, como os gastos por categoria?", options: ["Gráfico de linhas", "Gráfico circular", "Uma tabela de datas", "Um título"], answer: 1, why: "Os gráficos circulares mostram como um todo está dividido." },
      { objective: "O5", q: "Para fazer um gráfico, primeiro:", options: ["Apaga os títulos", "Fecha o ficheiro", "Seleciona os títulos e os dados", "Muda o tipo de letra"], answer: 2, why: "O gráfico precisa de saber que dados mostrar." },
      { objective: "O5", q: "O que NÃO deve colar num assistente de IA?", options: ["Uma fórmula", "Uma mensagem de erro", "Uma descrição das suas colunas", "Nomes e números de telefone das pessoas que atende"], answer: 3, why: "As informações pessoais devem ficar privadas." },
      { objective: "O6", q: "Uma boa conclusão tem:", options: ["Uma resposta e um número que a apoie", "Só um gráfico", "Nenhum número", "A sua palavra-passe"], answer: 0, why: "Duas frases: a resposta e a prova." },
      { objective: "O6", q: "O seu total parece grande demais. O que faz?", options: ["Partilha na mesma", "Procura erros nos números, linhas em branco e o intervalo da fórmula", "Apaga o ficheiro", "Põe a letra mais pequena"], answer: 1, why: "Totais estranhos costumam querer dizer que há um erro para encontrar." },
      { objective: "O6", q: "Quando partilha uma folha sobre pessoas, deve:", options: ["Publicá-la para todos", "Partilhá-la com todas as pessoas que conhece", "Partilhar só com quem precisa e tirar os dados que não são precisos", "Imprimi-la e deixá-la à vista"], answer: 2, why: "Partilhar menos mantém seguras as informações das pessoas." },
      { objective: "O2", q: "Que ferramenta gratuita deixa usar o Excel num navegador de internet?", options: ["O Excel para a web em office.com", "Uma máquina de fax", "Uma mensagem SMS", "Um cartão-presente"], answer: 0, why: "O Excel para a web é gratuito com uma conta Microsoft." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 4, 6, 9, 12, 15, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Dados organizados", objective: "O2", notYet: "Faltam títulos, há palavras misturadas com números, ou há menos de dez linhas.", meets: "Um título por coluna, um registo por linha e só números, para um mês de dados.", exceeds: "O ficheiro tem um nome claro e os dados não precisam de correções." },
      { name: "Ordenar e filtrar", objective: "O3", notYet: "Os dados não foram ordenados nem filtrados.", meets: "A coluna principal de números está ordenada do maior para o menor, e um filtro foi usado e limpo.", exceeds: "Sabe dizer o que a ordenação e o filtro mostraram." },
      { name: "SUM e AVERAGE", objective: "O4", notYet: "Faltam as fórmulas ou usam o intervalo errado.", meets: "SUM e AVERAGE certos na coluna de números.", exceeds: "Mostra que os dois se atualizam quando um número muda." },
      { name: "Gráfico", objective: "O5", notYet: "Não há gráfico, ou é do tipo errado e sem título.", meets: "Um gráfico do tipo certo com um título claro.", exceeds: "O gráfico torna fácil ver a resposta à pergunta." },
      { name: "Conclusão em duas frases", objective: "O6", notYet: "Não há resposta, ou não há um número que a apoie.", meets: "Uma frase com a resposta e outra com um número que a apoia.", exceeds: "O trabalho foi verificado e partilhado só com as pessoas que precisam." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que usam uma folha de cálculo para a família, o trabalho ou um grupo da comunidade em 30 dias (inquérito de seguimento)",
      "Alunos que põem as habilidades com folhas de cálculo no currículo ou conseguem um trabalho de escritório em 90 dias",
      "Os parceiros da comunidade dizem usar folhas e gráficos feitos pelos alunos em relatórios ou reuniões"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet (da biblioteca ou de casa); uma aplicação no telefone serve para folhas pequenas",
      "Uma conta Google ou Microsoft gratuita para o Google Sheets ou o Excel para a web",
      "Um mês de dados reais ou de prática, como visitas ao banco alimentar ou gastos por categoria",
      "Um assistente de IA gratuito para explicar fórmulas e erros",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Tenha um conjunto de dados de prática para os alunos que não têm os seus.",
      "Mostre ao vivo, num projetor, como ordenar, filtrar e usar SUM antes de os alunos experimentarem.",
      "Lembre aos alunos que nunca devem colar nomes, números de telefone ou números de conta na IA; devem descrever as colunas.",
      "Junte os alunos que são novos no computador com um colega com mais experiência.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
