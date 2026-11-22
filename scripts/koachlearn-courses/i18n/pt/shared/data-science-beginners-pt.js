"use strict";

// Koach Learn course (Portuguese translation of shared/data-science-beginners.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Code, column names and dataset values (Lunch, Dinner, tips) stay exactly as in the English.

const COLAB = { name: "Google Colab: Perguntas frequentes", url: "https://research.google.com/colaboratory/faq.html" };
const PANDAS = { name: "pandas: 10 minutos com o pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" };
const SEABORN = { name: "seaborn: load_dataset", url: "https://seaborn.pydata.org/generated/seaborn.load_dataset.html" };

module.exports = {
  id: "data-science-beginners-pt",
  lang: "pt",
  translationOf: "data-science-beginners",
  category: "Youth",
  name: "Introdução à Ciência de Dados e à Análise de Dados",
  skills: "Fazer uma pergunta que os dados podem responder, Calcular médias e encontrar valores atípicos, Carregar dados com o pandas, Limpar e agrupar dados, Fazer um gráfico e partilhar conclusões",
  outcome: "pegar num conjunto de dados real no Google Colab, carregá-lo com o pandas, limpá-lo, responder a uma pergunta clara com médias e grupos, fazer um gráfico e escrever três conclusões honestas.",
  about: [
    "Os analistas de dados transformam linhas de números em respostas que as pessoas podem usar: em que dia uma loja tem mais clientes, que treino ajuda mais a equipa, para onde vai o dinheiro de um programa. É uma das competências de trabalho mais úteis hoje, e você pode começar de graça.",
    "O Capítulo 1 ensina a forma de pensar, sem código: fazer uma boa pergunta, conhecer os seus dados e usar médias sem se deixar enganar. O Capítulo 2 passa para o Google Colab, um site gratuito que executa Python, onde você usa o pandas, a ferramenta de dados mais popular do Python, com dados reais de um restaurante.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "No Google Colab, carregue o conjunto de dados de gorjetas do restaurante com o pandas, verifique se há valores em falta, acrescente uma coluna com a gorjeta como percentagem da conta, calcule a percentagem média da gorjeta para cada dia e para o almoço e o jantar, faça um gráfico de barras de uma destas comparações e escreva três conclusões em frases simples, incluindo uma coisa que os dados não lhe podem dizer.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos que começam a trabalhar com dados: alunos do ensino secundário e da universidade, membros de programas para jovens, treinadores, trabalhadores de pequenas empresas e de organizações sem fins lucrativos, e pessoas que querem mudar de carreira e pensam em trabalhar como analistas de dados.",
    startingPoint: "Sabem usar um computador e um navegador de internet e já escreveram um pouco de Python. Muitos usam folhas de cálculo, mas nunca carregaram dados no pandas, nunca verificaram valores em falta, nunca compararam grupos nem escreveram conclusões que dizem os seus limites.",
    gap: "Equipas, escolas, empresas e organizações sem fins lucrativos tomam decisões com base em dados, e a análise de dados é uma porta de entrada comum para empregos em tecnologia. Sem os passos básicos, as pessoas respondem à pergunta errada, são enganadas por valores atípicos ou pela correlação, ou partilham gráficos e afirmações que os dados não confirmam.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; termos como DataFrame, mediana, valor atípico e correlação são explicados",
      "Aparelhos: um computador ou portátil com navegador de internet",
      "Contas e custo: uma conta Google gratuita para o Google Colab; o pandas e o seaborn já estão instalados",
      "Tempo: cerca de 5 a 6 minutos por lição mais a prática, cerca de 60 a 75 minutos no total",
      "Matemática: só médias e percentagens"
    ],
    prerequisites: "Introdução à Programação com Python."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma pergunta real, como a de um treinador ou de uma loja", action: "listar por ordem os cinco passos de um projeto de dados e ligar cada um ao exemplo", standard: "com os cinco passos (Perguntar, Obter, Limpar, Explorar, Partilhar) na ordem certa" },
    { id: "O2", condition: "Com uma tabela de dados e uma pergunta", action: "descrever o que cada coluna contém e o seu tipo, e verificar se os dados podem responder à pergunta", standard: "identificando bem as colunas numéricas e categóricas e dizendo quando uma pergunta não pode ser respondida" },
    { id: "O3", condition: "Com uma pequena lista de números ou uma afirmação sobre duas coisas", action: "calcular a média e a mediana, identificar qualquer valor atípico e verificar se uma afirmação confunde correlação com causa", standard: "com a média e a mediana certas e cada confusão entre correlação e causa apontada" },
    { id: "O4", condition: "No Google Colab com o pandas", action: "carregar um conjunto de dados num DataFrame e descrever as suas linhas, colunas e tipos", standard: "usando head(), shape, info() e describe() e relatando bem os resultados" },
    { id: "O5", condition: "Com um DataFrame já carregado", action: "verificar valores em falta, acrescentar uma coluna calculada, filtrar linhas e comparar grupos", standard: "com o código de cada passo a funcionar e toda a limpeza anotada" },
    { id: "O6", condition: "Com os resultados dos seus grupos", action: "fazer um gráfico de barras com título e escrever conclusões que digam os seus limites", standard: "com números dos seus próprios resultados e pelo menos um limite honesto" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pensar como um analista de dados",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a ciência de dados, e os cinco passos",
          minutes: 4,
          goal: "Dizer os cinco passos de um projeto de dados e ligá-los a um exemplo real.",
          text: [
            "Ciência de dados quer dizer usar dados para responder a perguntas e tomar melhores decisões. A análise de dados é a parte prática: limpar, contar, comparar e fazer gráficos.",
            "Quase todos os projetos seguem cinco passos. Perguntar: o que quer saber? Obter: encontrar os dados. Limpar: corrigir erros e falhas. Explorar: contar, calcular médias, comparar e fazer gráficos. Partilhar: dizer às pessoas o que encontrou com palavras simples.",
            "Exemplo: uma treinadora de futebol de jovens pergunta \"Marcamos mais golos na segunda parte?\" Ela obtém os resultados de cada jogo, tira um jogo que foi cancelado, soma os golos da primeira e da segunda parte e partilha um gráfico simples com a equipa."
          ],
          steps: ["Faça uma pergunta clara.", "Obtenha os dados.", "Limpe-os.", "Explore-os com contagens, médias e gráficos.", "Partilhe o que encontrou."],
          words: [["Dados", "factos e números recolhidos sobre alguma coisa."], ["Ciência de dados", "usar dados para responder a perguntas e orientar decisões."], ["Análise de dados", "limpar, resumir e pôr dados em gráficos para encontrar respostas."], ["Conjunto de dados", "uma coleção de dados, normalmente uma tabela (em inglês, \"dataset\")."]],
          slides: [
            { title: "A ciência de dados é", bullets: ["Usar dados para responder a perguntas", "E para tomar melhores decisões"] },
            { title: "Os cinco passos", bullets: ["Perguntar, Obter, Limpar", "Explorar, Partilhar"] },
            { title: "Exemplo: a treinadora de futebol", bullets: ["Perguntar: mais golos na segunda parte?", "Obter e limpar os resultados dos jogos", "Explorar e partilhar um gráfico simples"] }
          ],
          tryIt: "Pense numa pergunta da sua vida, do seu trabalho ou da sua comunidade que os dados possam responder (por exemplo \"Em que dia gasto mais?\"). Escreva o que faria em cada um dos cinco passos.",
          youCanNow: "descrever os cinco passos de um projeto de dados e planear um.",
          quickCheck: [
            { objective: "O1", q: "O que acontece no passo Limpar de um projeto de dados?", options: ["Você faz a pergunta", "Você corrige erros e falhas nos dados", "Você partilha o gráfico", "Você recolhe mais dados"], answer: 1, why: "Limpar quer dizer corrigir erros e falhas antes de explorar." },
            { objective: "O1", q: "O dono de uma loja pergunta: \"Em que dia vendemos mais?\" O que faria logo a seguir a este passo Perguntar?", options: ["Fazer um gráfico", "Escrever as conclusões", "Calcular a média dos dias da semana", "Obter os dados das vendas com as datas"], answer: 3, why: "Depois de Perguntar vem Obter: encontrar os dados que podem responder à pergunta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Conhecer os seus dados: linhas, colunas e tipos",
          minutes: 5,
          goal: "Ler uma tabela de dados e dizer o que cada coluna contém e de que tipo é.",
          text: [
            "A maioria dos dados vem numa tabela. Dados arrumados quer dizer que cada linha é uma coisa que você mediu (um jogo, uma venda, uma pessoa) e cada coluna é um facto sobre ela (data, valor, equipa).",
            "As colunas têm tipos. Números com que se pode fazer contas, como o preço ou os minutos. Categorias são grupos, como o dia da semana ou o nome da equipa: contam-se, mas não se calcula a sua média. As datas são um tipo à parte.",
            "Boas perguntas combinam com os dados que tem. \"Qual é a venda média aos sábados?\" precisa de uma coluna com o valor da venda e de uma coluna com o dia. Se os dados não a têm, não pode responder, e dizer isso faz parte do trabalho."
          ],
          steps: ["Diga o que representa uma linha.", "Liste cada coluna e o que quer dizer.", "Marque cada coluna como número, categoria ou data.", "Verifique se a sua pergunta pode ser respondida com estas colunas."],
          words: [["Linha", "um registo: uma coisa que você mediu."], ["Coluna", "um facto registado para cada linha."], ["Dados arrumados", "uma linha por coisa, uma coluna por facto."], ["Numérica", "uma coluna de números com que se pode fazer contas."], ["Categórica", "uma coluna de grupos ou nomes, como o dia ou a equipa."]],
          slides: [
            { title: "Dados arrumados", bullets: ["Cada linha: uma coisa medida", "Cada coluna: um facto sobre ela"] },
            { title: "Tipos de coluna", bullets: ["Números: preço, minutos", "Categorias: dia, equipa", "Datas"] },
            { title: "Ligar a pergunta aos dados", bullets: ["A pergunta precisa das colunas certas", "Falta a coluna = não pode responder", "Diga-o com honestidade"] }
          ],
          tryIt: "Faça uma pequena tabela dos seus últimos 7 dias: data, dia da semana, horas de sono e humor de 1 a 5. Marque cada coluna como número, categoria ou data, e escreva uma pergunta que a tabela pode responder e uma que não pode.",
          youCanNow: "ler uma tabela, dizer o tipo de cada coluna e verificar se uma pergunta combina com os dados.",
          quickCheck: [
            { objective: "O2", q: "O que é uma coluna categórica?", options: ["Uma coluna de preços", "Uma coluna só de datas", "Uma coluna de grupos, como o nome da equipa ou o dia da semana", "Uma coluna de médias"], answer: 2, why: "As categorias são grupos que se contam, não se calcula a sua média." },
            { objective: "O2", q: "A sua tabela de vendas tem as colunas valor e dia, mas não tem a hora do dia. Alguém pergunta se as manhãs vendem mais. O que diria?", options: ["Os dados não podem responder a isso, porque não há uma coluna da hora", "As manhãs vendem mais", "Calcular a média da coluna do dia", "Adivinhar a partir dos valores"], answer: 0, why: "Se os dados não o têm, não pode responder, e dizer isso faz parte do trabalho." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Médias, valores atípicos e não se deixar enganar",
          minutes: 6,
          goal: "Calcular a média e a mediana, encontrar um valor atípico e evitar um erro comum.",
          text: [
            "A média é o total dividido pela quantidade de valores. A mediana é o valor do meio quando os põe por ordem. Para 3, 4, 4, 5 e 34, a média é 50 / 5 = 10, mas a mediana é 4.",
            "Esse 34 é um valor atípico: um valor muito longe dos outros. Pode ser um erro de escrita, ou pode ser real e importante. Os valores atípicos puxam muito a média, mas quase não mexem na mediana; por isso, quando há valores atípicos, a mediana muitas vezes descreve melhor um valor típico.",
            "Quando duas coisas mudam juntas, chama-se correlação, mas isso não prova que uma causa a outra. As vendas de gelados e as queimaduras de sol sobem as duas no verão: é o sol que causa as duas. Antes de dizer que há uma causa, procure outra razão."
          ],
          steps: ["Ponha os números por ordem.", "Média: some-os e divida pela quantidade.", "Mediana: escolha o do meio (ou a média dos dois do meio).", "Procure valores muito longe dos outros e veja se são erros.", "Antes de dizer \"X causa Y\", procure outra explicação."],
          words: [["Média", "o total dividido pela quantidade."], ["Mediana", "o valor do meio quando os números estão por ordem."], ["Valor atípico", "um valor muito longe dos outros (em inglês, \"outlier\")."], ["Correlação", "duas coisas que costumam mudar juntas."], ["Causalidade", "uma coisa que faz mesmo outra acontecer."]],
          slides: [
            { title: "Média e mediana", bullets: ["Média: total / quantidade", "Mediana: o valor do meio, por ordem", "3, 4, 4, 5, 34: média 10, mediana 4"] },
            { title: "Valores atípicos", bullets: ["Muito longe dos outros valores", "Erro de escrita, ou real e importante", "Puxam a média, não a mediana"] },
            { title: "Correlação não é causa", bullets: ["Gelados e queimaduras de sol sobem juntos", "É o sol que causa os dois", "Procure primeiro outra razão"] }
          ],
          tryIt: "Aqui estão 7 tempos de entrega em minutos: 22, 25, 19, 24, 95, 21, 23. Calcule à mão a média e a mediana, diga qual é o valor atípico e escreva que número descreve melhor uma entrega típica e porquê. (Média cerca de 32,7, mediana 23.)",
          youCanNow: "calcular uma média e uma mediana, encontrar valores atípicos e não confundir correlação com causalidade.",
          quickCheck: [
            { objective: "O3", q: "Qual é a média de 2, 4, 6 e 8?", options: ["5", "4", "6", "20"], answer: 0, why: "2 + 4 + 6 + 8 = 20, e 20 / 4 = 5." },
            { objective: "O3", q: "Esta semana, as esperas pelo autocarro foram de 5, 6, 5, 7 e 60 minutos. Que número daria como espera típica?", options: ["A média, 16,6", "O maior, 60", "A mediana, 6", "O total, 83"], answer: 2, why: "O 60 é um valor atípico que puxa a média para cima; a mediana mostra uma espera típica." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Pensar como um analista de dados",
        questions: [
          { objective: "O1", q: "Qual é o primeiro passo de um projeto de dados?", options: ["Fazer um gráfico", "Apagar os valores atípicos", "Fazer uma pergunta clara", "Partilhar os resultados"], answer: 2, why: "Uma pergunta clara orienta todos os outros passos." },
          { objective: "O2", q: "Numa tabela de jogos, \"nome da equipa\" é que tipo de coluna?", options: ["Categórica", "Numérica", "Data", "Valor atípico"], answer: 0, why: "Os nomes das equipas são grupos, não números." },
          { objective: "O3", q: "Qual é a mediana de 2, 9, 3, 7, 5?", options: ["3", "5", "5,2", "7"], answer: 1, why: "Por ordem: 2, 3, 5, 7, 9. O valor do meio é 5." },
          { objective: "O3", q: "Uma casa numa lista custa dez vezes mais do que as outras. O que descreve melhor uma casa típica?", options: ["A média", "A mediana", "O preço mais alto", "O total"], answer: 1, why: "A mediana quase não é puxada por um único valor atípico grande." },
          { objective: "O3", q: "As crianças que praticam mais desporto têm melhores notas. O que NÃO deve concluir logo?", options: ["Que as duas coisas mudam juntas", "Que o desporto causa as melhores notas", "Que mais dados podiam ajudar", "Que pode haver outras razões"], answer: 1, why: "A correlação sozinha não prova a causalidade." }
        ]
      }
    },
    {
      name: "Capítulo 2: Analisar dados com Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Carregar e ver os dados com o pandas",
          minutes: 5,
          goal: "Carregar um conjunto de dados num DataFrame do pandas no Colab e descrevê-lo.",
          text: [
            "O pandas é uma biblioteca gratuita de Python para trabalhar com tabelas, e já vem no Google Colab. Uma tabela no pandas chama-se DataFrame, e normalmente tem o nome df.",
            "Para praticar, usamos dados reais de um restaurante, com 244 refeições, que vêm com o seaborn, uma biblioteca de gráficos: df = sns.load_dataset(\"tips\"). Precisa de internet, e o Colab tem. As colunas incluem total_bill (conta), tip (gorjeta), day (dia), time (Lunch ou Dinner, almoço ou jantar) e size (pessoas à mesa). Para os seus próprios dados, pd.read_csv(\"file.csv\") carrega um ficheiro CSV que você envia.",
            "Quatro comandos mostram o que você tem: df.head() mostra as primeiras cinco linhas, df.shape dá as linhas e as colunas, df.info() lista o tipo de cada coluna e df.describe() dá a contagem, a média, o mínimo, o máximo e mais para as colunas de números."
          ],
          steps: ["Num novo notebook do Colab, execute: import pandas as pd e import seaborn as sns", "Carregue: df = sns.load_dataset(\"tips\")", "Veja: df.head()", "Tamanho e tipos: df.shape e df.info()", "Resumo: df.describe()"],
          words: [["pandas", "uma biblioteca gratuita de Python para trabalhar com tabelas de dados."], ["DataFrame", "uma tabela no pandas, com linhas e colunas com nome."], ["CSV", "um ficheiro de texto simples com uma tabela, com vírgulas entre os valores."], ["head()", "mostra as primeiras linhas de um DataFrame."], ["describe()", "dá números de resumo para cada coluna de números."]],
          slides: [
            { title: "pandas e DataFrames", bullets: ["pandas: a ferramenta de tabelas do Python", "Uma tabela é um DataFrame, muitas vezes chamado df", "Já vem no Google Colab"] },
            { title: "Carregar os dados", bullets: ["df = sns.load_dataset(\"tips\")", "O seu próprio ficheiro: pd.read_csv(\"file.csv\")"] },
            { title: "Ver antes de analisar", bullets: ["df.head(): primeiras linhas", "df.shape e df.info(): tamanho e tipos", "df.describe(): números de resumo"] }
          ],
          sources: [PANDAS, SEABORN, COLAB],
          tryIt: "Carregue os dados tips no Colab. Anote quantas linhas e colunas tem, que colunas são números e quais são categorias, e a média e o máximo de total_bill que df.describe() mostra.",
          youCanNow: "carregar um conjunto de dados com o pandas e descrever o seu tamanho, as colunas e os números de resumo.",
          quickCheck: [
            { objective: "O4", q: "O que mostra df.info()?", options: ["Um gráfico de barras", "Só a primeira linha", "Os valores em falta já preenchidos", "O tipo de cada coluna"], answer: 3, why: "df.info() lista cada coluna e o seu tipo." },
            { objective: "O4", q: "Você enviou para o Colab o ficheiro attendance.csv do seu clube. Que linha usaria para o carregar?", options: ["sns.load_dataset(\"attendance\")", "df = pd.read_csv(\"attendance.csv\")", "df.head(\"attendance.csv\")", "df.describe(\"attendance.csv\")"], answer: 1, why: "pd.read_csv carrega um ficheiro CSV que você envia." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Limpar, filtrar e agrupar",
          minutes: 6,
          goal: "Verificar valores em falta, acrescentar uma coluna, filtrar linhas e comparar grupos.",
          text: [
            "Limpe primeiro. df.isna().sum() conta os valores em falta em cada coluna. Se faltarem alguns, pode tirar essas linhas com df.dropna() ou decidir como os preencher; anote o que fez. Veja também se há valores impossíveis, como uma conta negativa.",
            "Crie a coluna de que precisa. Uma gorjeta de $5 quer dizer coisas diferentes numa conta de $20 e numa conta de $100; por isso, acrescente uma medida justa: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100.",
            "Filtre linhas com uma condição: df[df[\"time\"] == \"Dinner\"] fica só com os jantares. Agrupe para comparar: df.groupby(\"day\")[\"tip_pct\"].mean() dá a percentagem média da gorjeta para cada dia. Se o pandas mostrar um aviso amarelo, leia-o, mas não é um erro. .round(1) deixa os números mais arrumados."
          ],
          steps: ["Conte os valores em falta: df.isna().sum()", "Acrescente uma coluna: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100", "Filtre: dinners = df[df[\"time\"] == \"Dinner\"]", "Agrupe: df.groupby(\"day\")[\"tip_pct\"].mean().round(1)", "Experimente outro grupo, como time ou size."],
          words: [["Valor em falta", "uma célula vazia; o pandas mostra-a como NaN."], ["Limpeza", "encontrar e corrigir valores em falta, errados ou impossíveis."], ["Filtrar", "ficar só com as linhas que cumprem uma condição."], ["groupby", "dividir as linhas em grupos e resumir cada grupo."]],
          slides: [
            { title: "Limpe primeiro", bullets: ["df.isna().sum() conta os valores em falta", "Tire ou preencha, e anote o que fez", "Procure valores impossíveis"] },
            { title: "Crie uma medida justa", bullets: ["tip_pct = tip / total_bill * 100", "Compara com justiça contas grandes e pequenas"] },
            { title: "Filtrar e agrupar", bullets: ["df[df[\"time\"] == \"Dinner\"]", "df.groupby(\"day\")[\"tip_pct\"].mean()", "Um aviso não é um erro"] }
          ],
          sources: [PANDAS],
          tryIt: "Verifique se os dados tips têm valores em falta. Acrescente a coluna tip_pct. Calcule a percentagem média da gorjeta para cada dia e para Lunch e Dinner. Anote que dia teve a média mais alta.",
          youCanNow: "verificar valores em falta nos dados, criar uma nova coluna, filtrar linhas e comparar grupos.",
          quickCheck: [
            { objective: "O5", q: "O que faz df.dropna()?", options: ["Acrescenta uma nova coluna", "Conta as linhas", "Tira as linhas que têm valores em falta", "Faz um gráfico"], answer: 2, why: "dropna() tira as linhas com valores em falta; anote que o fez." },
            { objective: "O5", q: "Você vê uma conta de -12.00 nos dados. O que faria?", options: ["Tratá-la como um valor impossível, corrigi-la ou tirá-la, e anotar o que fez", "Deixá-la; contas negativas são normais", "Calcular a média com as outras na mesma", "Escondê-la no gráfico"], answer: 0, why: "Procurar valores impossíveis, como uma conta negativa, faz parte da limpeza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer um gráfico e partilhar conclusões honestas",
          minutes: 6,
          goal: "Fazer um gráfico de barras claro e escrever conclusões em que as pessoas possam confiar.",
          text: [
            "Um gráfico mostra um padrão mais depressa do que uma tabela. Um gráfico de barras é o melhor para comparar grupos: tip_by_day = df.groupby(\"day\")[\"tip_pct\"].mean() e depois tip_by_day.plot(kind=\"bar\", title=\"Average tip % by day\"). Dê um título a cada gráfico e diga o que os números querem dizer.",
            "Escreva as conclusões em frases simples, com o número: \"Em média, as gorjetas de [dia] foram as mais altas, cerca de X por cento da conta.\" Use o número que o seu próprio código mostrou.",
            "Seja honesto sobre os limites. Diga quantas linhas tem um grupo: df[\"day\"].value_counts() mostra um dia com poucas refeições, por isso a sua média é menos fiável. Estes dados vieram de um só restaurante, por isso podem não valer para outros. E mostram o que aconteceu, não porquê."
          ],
          steps: ["Calcule os números por grupo.", "Faça o gráfico: .plot(kind=\"bar\", title=\"...\")", "Veja o tamanho dos grupos com value_counts().", "Escreva três conclusões com números reais.", "Acrescente um limite: o que os dados não lhe podem dizer."],
          words: [["Gráfico de barras", "um gráfico de barras usado para comparar grupos."], ["value_counts()", "conta quantas linhas tem cada grupo."], ["Conclusão", "uma frase clara sobre o que os dados mostram, com um número."], ["Limitação", "uma coisa que os seus dados ou a sua análise não lhe podem dizer."]],
          slides: [
            { title: "Os gráficos de barras comparam grupos", bullets: ["groupby, e depois .plot(kind=\"bar\")", "Ponha sempre um título"] },
            { title: "Escreva conclusões claras", bullets: ["Frase simples mais o número", "Use o número que o seu código mostrou"] },
            { title: "Seja honesto sobre os limites", bullets: ["Grupos pequenos são menos fiáveis", "Um restaurante, não todos os restaurantes", "Mostra o que aconteceu, não porquê"] }
          ],
          sources: [PANDAS],
          tryIt: "Tarefa final: num só notebook, carregue os dados tips, verifique os valores em falta, acrescente tip_pct, calcule a percentagem média da gorjeta por dia e por hora da refeição (time), faça um gráfico de barras de uma delas com título e escreva três conclusões com números, incluindo uma coisa que estes dados não lhe podem dizer.",
          youCanNow: "transformar um conjunto de dados num gráfico e em conclusões honestas, com palavras simples.",
          quickCheck: [
            { objective: "O6", q: "Que tipo de gráfico é o melhor para comparar grupos, como os dias?", options: ["Um gráfico circular de um só número", "Um gráfico de barras", "Uma tabela sem nomes", "Um gráfico sem título"], answer: 1, why: "Um gráfico de barras é o melhor para comparar grupos." },
            { objective: "O6", q: "O seu gráfico mostra que aos sábados as gorjetas foram mais altas. O que acrescentaria antes de o partilhar?", options: ["Uma afirmação de que os sábados causam gorjetas maiores em todo o lado", "Nada; os gráficos falam por si", "Um número inventado para ficar mais claro", "Um título e um limite honesto, como quantas refeições houve em cada dia"], answer: 3, why: "Um título e um limite honesto ajudam as pessoas a confiar na conclusão e a percebê-la." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Analisar dados com Python",
        questions: [
          { objective: "O4", q: "No pandas, o que é um DataFrame?", options: ["Uma moldura de fotografia", "Um gráfico", "Um erro do Python", "Uma tabela com linhas e colunas com nome"], answer: 3, why: "Os DataFrames são as tabelas do pandas." },
          { objective: "O5", q: "Que comando conta os valores em falta em cada coluna?", options: ["df.isna().sum()", "df.head()", "df.plot()", "df.shape"], answer: 0, why: "isna marca as células vazias e sum conta-as." },
          { objective: "O5", q: "Porque acrescentar uma coluna com a percentagem da gorjeta em vez de comparar a gorjeta em dólares?", options: ["Os dólares não são números", "O pandas não consegue usar dólares", "Uma percentagem compara com justiça contas grandes e pequenas", "Deixa a tabela mais pequena"], answer: 2, why: "A percentagem da conta é uma comparação justa." },
          { objective: "O5", q: "Que linha dá a percentagem média da gorjeta para cada dia?", options: ["df[\"day\"].plot()", "df.mean(\"day\")", "df.head(\"day\")", "df.groupby(\"day\")[\"tip_pct\"].mean()"], answer: 3, why: "groupby divide por dia; mean calcula a média de cada grupo." },
          { objective: "O6", q: "Um dia tem só 19 refeições. O que deve dizer o seu relatório?", options: ["Nada", "Que os dados estão errados", "Que a sua média é menos fiável porque o grupo é pequeno", "Que é o melhor dia"], answer: 2, why: "Grupos pequenos tornam as médias menos certas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Ciência de Dados e à Análise de Dados",
    questions: [
      { objective: "O1", q: "A ciência de dados trata sobretudo de:", options: ["Arranjar computadores", "Usar dados para responder a perguntas e tomar decisões", "Escrever mais depressa no teclado", "Construir sites"], answer: 1, why: "Ela transforma dados em respostas." },
      { objective: "O1", q: "Que ordem está certa para um projeto de dados?", options: ["Perguntar, Obter, Limpar, Explorar, Partilhar", "Partilhar, Perguntar, Limpar, Obter, Explorar", "Explorar, Partilhar, Perguntar, Obter, Limpar", "Limpar, Partilhar, Obter, Perguntar, Explorar"], answer: 0, why: "Comece pela pergunta e termine a partilhar." },
      { objective: "O2", q: "Em dados arrumados, cada linha é:", options: ["Uma coluna", "Um gráfico", "Uma coisa que você mediu", "Um total"], answer: 2, why: "Uma linha por registo." },
      { objective: "O2", q: "Que coluna é numérica?", options: ["Minutos jogados", "Nome da equipa", "Dia da semana", "Cidade"], answer: 0, why: "Com minutos pode fazer contas." },
      { objective: "O2", q: "Os seus dados não têm nenhuma coluna sobre o tempo (chuva ou sol). Pode responder a \"As pessoas dão mais gorjeta quando chove?\"", options: ["Sim, basta adivinhar", "Sim, use a média", "Sim, use um gráfico", "Não, e deve dizê-lo"], answer: 3, why: "Uma pergunta precisa de dados que a cubram." },
      { objective: "O3", q: "Qual é a média de 4, 6 e 8?", options: ["4", "6", "8", "18"], answer: 1, why: "18 / 3 = 6." },
      { objective: "O3", q: "Qual é a mediana de 1, 3, 3, 9, 50?", options: ["3", "9", "13,2", "50"], answer: 0, why: "O valor do meio, por ordem, é 3." },
      { objective: "O3", q: "Um valor atípico é:", options: ["A mediana", "Uma coluna em falta", "O título de um gráfico", "Um valor muito longe dos outros"], answer: 3, why: "Os valores atípicos ficam afastados dos outros." },
      { objective: "O3", q: "Os valores atípicos puxam mais que número?", options: ["A média", "A mediana", "O número de linhas", "Nenhum"], answer: 0, why: "A média usa todos os valores, por isso os extremos mexem nela." },
      { objective: "O3", q: "As vendas de guarda-chuvas e os acidentes de carro sobem nos dias de chuva. Isto mostra:", options: ["Os guarda-chuvas causam acidentes", "Os acidentes causam vendas de guarda-chuvas", "Uma correlação, provavelmente causada pela chuva", "Nada"], answer: 2, why: "Um terceiro fator, a chuva, provoca as duas coisas." },
      { objective: "O4", q: "O pandas é:", options: ["Uma aplicação paga de folhas de cálculo", "Um tipo de gráfico", "Um site", "Uma biblioteca gratuita de Python para tabelas de dados"], answer: 3, why: "O pandas trabalha com DataFrames em Python." },
      { objective: "O4", q: "Que comando mostra as primeiras cinco linhas?", options: ["df.tail(0)", "df.shape", "df.head()", "df.sum()"], answer: 2, why: "head mostra as linhas de cima." },
      { objective: "O4", q: "df.shape devolve (244, 7). O que quer dizer?", options: ["244 colunas e 7 linhas", "244 linhas e 7 colunas", "244 valores em falta", "7 gráficos"], answer: 1, why: "shape dá primeiro as linhas e depois as colunas." },
      { objective: "O4", q: "Qual carrega o seu próprio ficheiro CSV?", options: ["pd.read_csv(\"file.csv\")", "df.head(\"file.csv\")", "sns.plot(\"file.csv\")", "print(\"file.csv\")"], answer: 0, why: "read_csv lê um CSV para um DataFrame." },
      { objective: "O4", q: "df.describe() dá:", options: ["Um gráfico de barras", "O nome do ficheiro", "Números de resumo como a média, o mínimo e o máximo", "Correções dos valores em falta"], answer: 2, why: "describe resume as colunas de números." },
      { objective: "O5", q: "Qual fica só com as linhas dos jantares?", options: ["df[df[\"time\"] == \"Dinner\"]", "df[\"Dinner\"]", "df.dinner()", "df.drop(\"Dinner\")"], answer: 0, why: "Uma condição dentro de df[ ] filtra as linhas." },
      { objective: "O5", q: "Você encontra valores em falta e tira essas linhas. O que mais deve fazer?", options: ["Escondê-lo", "Apagar o conjunto de dados todo", "Nada", "Anotar o que fez"], answer: 3, why: "Registar os passos da limpeza mantém a análise honesta." },
      { objective: "O6", q: "Que gráfico é o melhor para comparar médias entre dias?", options: ["Uma fotografia", "Um gráfico de barras", "Um só número", "Uma nuvem de palavras"], answer: 1, why: "As barras comparam grupos com clareza." },
      { objective: "O6", q: "Qual é uma conclusão bem escrita?", options: ["\"As gorjetas são boas.\"", "\"As vendas do fim de semana foram em média $420 por dia, cerca de 30% mais do que nos dias úteis.\"", "\"Os dados mostram coisas.\"", "\"Os fins de semana são melhores porque as pessoas estão felizes.\""], answer: 1, why: "É concreta, usa um número e não afirma uma causa que não pode mostrar." },
      { objective: "O6", q: "Estes dados de gorjetas vieram de um só restaurante. Qual é o limite certo a dizer?", options: ["Os resultados valem em todo o lado", "Os dados são falsos", "Não há limites", "Os resultados podem não valer para outros restaurantes"], answer: 3, why: "Uma só fonte não pode falar por todos os restaurantes." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      4,
      6,
      8,
      9,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Carregar e verificar os dados",
        objective: "O4",
        notYet: "Os dados não carregam, ou os valores em falta não foram verificados.",
        meets: "Os dados tips estão carregados, descritos e verificados quanto a valores em falta.",
        exceeds: "Também anota o número de linhas e o tipo de cada coluna usada."
      },
      {
        name: "Coluna da percentagem da gorjeta",
        objective: "O5",
        notYet: "Não há coluna da percentagem da gorjeta, ou está mal calculada.",
        meets: "Uma coluna tip_pct igual a tip dividido por total_bill vezes 100.",
        exceeds: "Também procura valores impossíveis, como uma conta negativa."
      },
      {
        name: "Médias por grupo",
        objective: "O5",
        notYet: "Só uma comparação, ou as médias estão erradas.",
        meets: "Percentagem média da gorjeta para cada dia e para o almoço e o jantar, arredondada.",
        exceeds: "Também mostra quantas refeições há em cada grupo."
      },
      {
        name: "Gráfico de barras",
        objective: "O6",
        notYet: "Não há gráfico, ou o gráfico não tem título.",
        meets: "Um gráfico de barras de uma comparação, com um título claro.",
        exceeds: "Nomes nos eixos ou uma nota dizem o que os números querem dizer."
      },
      {
        name: "Conclusões honestas",
        objective: "O6",
        notYet: "Menos de três conclusões, ou nenhum limite dito.",
        meets: "Três conclusões simples com números dos resultados, incluindo uma coisa que os dados não podem dizer.",
        exceeds: "Também evita afirmar uma causa e fala dos grupos pequenos quando isso importa."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da rubrica da análise das gorjetas",
      "Alunos que dizem ter analisado um conjunto de dados seu, por exemplo de uma equipa, clube, turma ou trabalho, nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que seguem para um próximo curso, como Introdução à Aprendizagem Automática",
      "Alunos que juntam o notebook a um portefólio ou o usam numa candidatura a um emprego ou programa na área de dados"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou portátil com navegador de internet e acesso à internet",
      "Uma conta Google gratuita para usar o Google Colab",
      "Papel e caneta para escrever a pergunta e as conclusões",
      "Cerca de 60 a 75 minutos no total, mais o tempo de prática"
    ],
    facilitatorNotes: [
      "Comece por uma pergunta que interesse aos alunos, como os resultados de uma equipa ou as presenças num clube, antes de abrir qualquer código.",
      "Calculem juntos, à mão, a média e a mediana de uma pequena lista antes de usar o pandas.",
      "Os dados tips carregam a partir da internet; teste-os na sua rede antes da aula e tenha uma cópia em CSV pronta.",
      "Peça aos alunos que leiam as conclusões uns dos outros e apontem qualquer afirmação de causa ou qualquer limite em falta.",
      "Se os alunos trouxerem os seus próprios dados, verifique que não têm informações privadas sobre pessoas reais antes de os enviarem."
    ]
  }
};
