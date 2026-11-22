"use strict";

// Koach Learn course (Portuguese translation of shared/data-analytics-excel-sql.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// SQL, spreadsheet formulas, menu names (as they appear in the English interface) and the practice data values stay exactly as in the English course.

const DATAPLUS = { name: "CompTIA Data+ (DA0-002): página oficial", url: "https://www.comptia.org/en-us/certifications/data/" };
const SQLITE_ONLINE = { name: "SQLite Online (editor de SQL no navegador)", url: "https://sqliteonline.com/" };
const DB_BROWSER = { name: "DB Browser for SQLite (programa gratuito de código aberto para o computador)", url: "https://sqlitebrowser.org/" };

module.exports = {
  id: "data-analytics-excel-sql-pt",
  lang: "pt",
  translationOf: "data-analytics-excel-sql",
  category: "Workforce Development",
  name: "Análise de Dados com Folhas de Cálculo e SQL",
  skills: "Fazer uma pergunta sobre dados, Limpar dados, Tabelas dinâmicas e COUNTIFS/SUMIFS, Escrever consultas SQL, Agrupar e juntar tabelas, Apresentar conclusões",
  outcome: "trabalhar como um analista de dados em início de carreira: transformar uma necessidade da empresa numa pergunta clara, limpar uma folha de cálculo desarrumada, resumi-la com uma tabela dinâmica e SUMIFS, responder a perguntas com SQL (SELECT, WHERE, ORDER BY, GROUP BY e JOIN) e escrever conclusões curtas e honestas que pode mostrar a um empregador.",
  about: [
    "Os analistas de dados transformam linhas de números em respostas que ajudam as pessoas a agir: que loja vende mais, que programa ajuda mais pessoas, para onde vai o dinheiro. Quase todo o tipo de empregador precisa disto, desde lojas e hospitais até serviços municipais e organizações sem fins lucrativos.",
    "Vai usar duas ferramentas que os analistas usam todos os dias: uma folha de cálculo (Google Sheets, gratuito, ou Excel) e SQL, a linguagem para fazer perguntas a uma base de dados. Vai praticar SQL de graça no seu navegador de internet. Todos os dados de prática são inventados e pequenos, por isso pode verificar cada resposta à mão.",
    "Se quiser um certificado, o CompTIA Data+ é um para analistas de dados em início de carreira. Este curso ajuda-o a preparar-se e treina competências que o exame cobre, mas não dá o Data+ nem nenhum certificado; veja na página oficial o exame atual, o preço e as formas de fazer o exame.",
    "Ajuda saber primeiro o básico das folhas de cálculo (curso \"Excel e Folhas de Cálculo para o Trabalho\"). Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um projeto de análise de uma página para o seu portefólio: (1) uma pergunta clara sobre os dados de vendas de prática (ou um pequeno conjunto de dados público à sua escolha); (2) os dados limpos no Google Sheets ou no Excel, com uma coluna Revenue (receita) e uma tabela dinâmica que responde à pergunta; (3) pelo menos duas consultas SQL que executou, uma com WHERE e ORDER BY e outra com GROUP BY, com os seus resultados; (4) três conclusões em frases simples com números, um limite dos dados e um próximo passo sugerido; e (5) uma linha para o currículo que descreve o projeto.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas à procura de emprego, jovens adultos, antigos militares e pessoas que mudam de carreira, que querem um primeiro trabalho na área de dados (analista de dados, assistente de relatórios, analista de operações ou de negócio) ou querem competências de dados no trabalho atual. Origens variadas; muitos já usaram folhas de cálculo, mas nunca SQL.",
    startingPoint: "Sabem introduzir dados, usar SUM e AVERAGE e ordenar numa folha de cálculo. Nunca limparam dados desarrumados, criaram uma tabela dinâmica nem escreveram uma consulta. Poucos sabem como os analistas apresentam conclusões.",
    gap: "Os primeiros empregos na área de dados pedem análise em folhas de cálculo, SQL básico e uma comunicação clara dos resultados. Os alunos precisam de prática real com dados realistas e desarrumados, com ferramentas gratuitas, e de um pequeno projeto que possam mostrar a um empregador.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo é explicado",
      "Aparelhos: um computador com navegador de internet; o ecrã do telefone é pequeno demais para praticar SQL",
      "Só ferramentas gratuitas: Google Sheets (ou Excel, se o tiver) e um editor de SQL gratuito no navegador",
      "Os dados de prática são inventados; nunca coloque dados verdadeiros de clientes, doentes ou empregadores em ferramentas online",
      "Tempo: lições de 4 a 6 minutos; o projeto leva mais uma ou duas horas"
    ],
    prerequisites: "Competências básicas de folhas de cálculo. O curso \"Excel e Folhas de Cálculo para o Trabalho\" ensina-as."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma necessidade da empresa dada por um chefe", action: "escrever uma pergunta sobre dados clara e mensurável e fazer a lista dos dados necessários para lhe responder", standard: "com quem ou o quê, uma medida e um período de tempo" },
    { id: "O2", condition: "Com uma folha de cálculo desarrumada", action: "limpar os dados, tirando as linhas repetidas e os espaços a mais e deixando os nomes e os formatos iguais", standard: "sem ficar nenhuma linha repetida nem nome diferente" },
    { id: "O3", condition: "Com dados limpos no Google Sheets ou no Excel", action: "criar uma tabela dinâmica e uma fórmula SUMIFS ou COUNTIFS que respondem à pergunta", standard: "com totais iguais aos de uma verificação à mão" },
    { id: "O4", condition: "Usando um editor de SQL gratuito e uma tabela de prática", action: "escrever consultas SELECT com WHERE e ORDER BY que devolvem as linhas pedidas", standard: "devolvendo exatamente as linhas certas pela ordem certa" },
    { id: "O5", condition: "Usando duas tabelas de prática", action: "escrever consultas que usam GROUP BY com SUM, COUNT ou AVG, e um JOIN entre as tabelas", standard: "com resultados iguais aos de uma verificação à mão" },
    { id: "O6", condition: "Com os resultados da sua análise", action: "escrever três conclusões com números, um limite dos dados e um próximo passo", standard: "em frases simples com que um chefe possa agir" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Análise em folhas de cálculo",
      lessons: [
        {
          title: "O trabalho do analista: de uma necessidade a uma pergunta clara",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escrever uma pergunta sobre dados clara e mensurável a partir do pedido de um chefe.",
          text: [
            "Os analistas seguem um caminho simples: fazer uma pergunta clara, obter os dados, limpá-los, analisá-los e partilhar o que significam. A maior parte do trabalho começa com a pergunta. Um pedido vago recebe uma resposta vaga.",
            "Um chefe diz: \"Como estão as vendas?\" Isto é uma necessidade, não uma pergunta. Uma pergunta clara diz quem ou o quê, uma medida e um período de tempo: \"Qual das nossas três lojas teve mais receita de 1 a 4 de outubro?\" Agora sabe de que dados precisa: datas, lojas, quantidades e preços.",
            "Boas perguntas são mensuráveis (pode responder com um número), específicas e úteis (a resposta ajuda alguém a decidir alguma coisa). Escreva os dados de que precisa antes de abrir qualquer ficheiro.",
            "Empregos que usam estas competências incluem analista de dados, analista de relatórios, analista de operações e analista de negócio. Se quiser um certificado, o CompTIA Data+ (exame DA0-002 quando verificámos, em outubro de 2026) cobre conceitos de dados, preparação de dados, análise, visualização e relatórios, e governação de dados. Veja os detalhes atuais na página oficial."
          ],
          steps: ["Escreva a necessidade do chefe com as palavras dele.", "Transforme-a numa pergunta com quem ou o quê, uma medida e um período de tempo.", "Verifique: um número pode responder-lhe?", "Faça a lista das colunas de dados de que precisa."],
          words: [["Analista de dados", "uma pessoa que transforma dados em respostas que as pessoas podem usar."], ["Mensurável", "que se pode responder com um número ou uma contagem."], ["Conjunto de dados (dataset)", "um grupo de dados, muitas vezes uma tabela com linhas e colunas."], ["Receita (revenue)", "o dinheiro que entra com as vendas: quantidade vezes preço."]],
          slides: [
            { title: "O caminho do analista", bullets: ["Perguntar, obter dados, limpar, analisar, partilhar", "Começa com uma pergunta clara"] },
            { title: "Necessidade e pergunta", bullets: ["Necessidade: \"Como estão as vendas?\"", "Pergunta: \"Que loja teve mais receita, de 1 a 4 de outubro?\""] },
            { title: "Uma pergunta clara tem", bullets: ["Quem ou o quê", "Uma medida", "Um período de tempo"] },
            { title: "Um certificado para que se preparar", bullets: ["CompTIA Data+ (DA0-002, verificado em out. 2026)", "Este curso prepara; quem dá o certificado é a CompTIA", "Veja os detalhes atuais em comptia.org"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Transforme cada necessidade numa pergunta clara e faça a lista dos dados necessários: (a) \"O banco alimentar tem tido mais gente ultimamente?\" (b) \"De que produto devemos encomendar mais?\" Escreva cada uma com quem ou o quê, uma medida e um período de tempo.",
          youCanNow: "transformar um pedido vago numa pergunta clara e mensurável e fazer a lista dos dados de que ela precisa.",
          quickCheck: [
            { objective: "O1", q: "Qual é a pergunta sobre dados mais clara?", options: ["\"Como vai o negócio?\"", "\"Fale-me das vendas.\"", "\"As coisas estão bem?\"", "\"Que artigo vendeu mais unidades em setembro na loja North?\""], answer: 3, why: "Diz o quê (artigo), a medida (unidades), o lugar e o período de tempo." },
            { objective: "O1", q: "A sua pergunta é \"Que loja teve mais receita na semana passada?\" De que dados precisa?", options: ["Loja, data, quantidade e preço de cada venda", "Só os nomes das lojas", "As moradas dos funcionários", "O tempo que fez"], answer: 0, why: "A receita precisa da quantidade e do preço; a loja e a data separam-na por lugar e por tempo." }
          ]
        },
        {
          title: "Limpar dados desarrumados numa folha de cálculo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Limpar uma tabela desarrumada tirando linhas repetidas, espaços a mais e corrigindo nomes.",
          text: [
            "Os dados verdadeiros são desarrumados. A mesma loja pode estar escrita \"North\", \"north\" e \" North\" (com um espaço). Uma venda pode estar escrita duas vezes. As datas podem ter formatos diferentes. Se não limpar, os seus totais ficam errados, porque a folha de cálculo trata \"North\" e \"north \" como lojas diferentes.",
            "No Google Sheets, selecione os dados e use Data > Data cleanup > Remove duplicates (remover linhas repetidas) e Data > Data cleanup > Trim whitespace (tirar espaços a mais). No Excel, use Data > Remove Duplicates e a função TRIM para tirar espaços a mais. Use Find and replace (localizar e substituir) para corrigir nomes, por exemplo trocar \"north\" por \"North\". Com o programa em português, os menus têm nomes em português.",
            "Faça com que cada coluna tenha um só tipo: datas como datas, números como números (sem escrever \"$\"), texto escrito sempre da mesma forma. Depois acrescente as colunas de que precisa, como Revenue = Qty vezes Price (por exemplo =D2*E2).",
            "Guarde sempre uma cópia dos dados brutos no seu próprio separador e limpe uma cópia. Escreva cada mudança que fez, para que outra pessoa possa confiar no seu trabalho e repeti-lo."
          ],
          steps: ["Copie os dados brutos para um novo separador chamado Clean.", "Tire as linhas repetidas.", "Tire os espaços a mais.", "Corrija os nomes com Find and replace para que cada nome tenha uma só escrita.", "Faça com que cada coluna tenha um só tipo: datas, números ou texto.", "Acrescente colunas calculadas, como Revenue = Qty * Price.", "Escreva uma lista curta das mudanças que fez."],
          words: [["Limpeza de dados", "corrigir erros, linhas repetidas e entradas diferentes para que os resultados fiquem certos."], ["Linha repetida (duplicate)", "uma linha que aparece mais de uma vez por engano."], ["Espaços em branco (whitespace)", "espaços a mais antes ou depois do texto, difíceis de ver."], ["Dados brutos", "os dados exatamente como os recebeu, antes de qualquer mudança."]],
          slides: [
            { title: "Porquê limpar?", bullets: ["\"North\", \"north\" e \" North\" contam como diferentes", "Linhas repetidas contam as vendas duas vezes", "Dados desarrumados dão totais errados"] },
            { title: "Ferramentas de limpeza", bullets: ["Sheets: Data > Data cleanup > Remove duplicates", "Sheets: Data > Data cleanup > Trim whitespace", "Excel: Remove Duplicates e TRIM", "Find and replace para corrigir nomes"] },
            { title: "Um só tipo por coluna", bullets: ["Datas como datas, números como números", "Acrescente Revenue = Qty * Price"] },
            { title: "Bons hábitos", bullets: ["Guarde os dados brutos no seu próprio separador", "Escreva cada mudança"] }
          ],
          tryIt: "No Google Sheets, escreva esta tabela de prática com os cabeçalhos Date, Store, Item, Qty, Price: 2026-10-01, North, Coffee, 3, 2.50 / 2026-10-01, South, Bagel, 5, 1.75 / 2026-10-02, north , Bagel, 2, 1.75 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-03, South, Coffee, 4, 2.50 / 2026-10-03, North, Juice, 1, 3.00 / 2026-10-04, East, Bagel, 8, 1.75 / 2026-10-04, South, Juice, 2, 3.00. Copie-a para um separador Clean, tire a linha East repetida, corrija \"north \" para \"North\" e acrescente uma coluna Revenue. Deve ficar com 8 linhas.",
          youCanNow: "limpar uma tabela desarrumada para que todos os totais feitos a partir dela fiquem certos.",
          quickCheck: [
            { objective: "O2", q: "O total de \"North\" parece baixo demais. Algumas linhas dizem \"north \" com um espaço. O que faz?", options: ["Apaga essas linhas", "Tira os espaços e escreve \"North\" em todo o lado", "Ignora", "Aumenta o tamanho da letra"], answer: 1, why: "Tirar os espaços e corrigir os nomes faz com que todas as linhas North contem juntas." },
            { objective: "O2", q: "Antes de limpar, o que deve fazer com os dados brutos?", options: ["Apagá-los", "Enviá-los por e-mail a toda a gente", "Guardar uma cópia no seu próprio separador e limpar uma cópia", "Imprimi-los"], answer: 2, why: "Guardar os dados brutos deixa-o verificar ou refazer o seu trabalho." }
          ]
        },
        {
          title: "Resumir com tabelas dinâmicas, SUMIFS e COUNTIFS",
          objectives: ["O3"],
          minutes: 6,
          goal: "Criar uma tabela dinâmica e uma fórmula SUMIFS que respondem à sua pergunta.",
          text: [
            "Uma tabela dinâmica (pivot table) resume uma tabela grande em segundos: por exemplo, a receita total de cada loja. No Google Sheets, selecione os dados limpos e escolha Insert > Pivot table. No Excel, escolha Insert > PivotTable. Ponha Store em Rows (linhas) e Revenue em Values (valores), resumido com SUM.",
            "Com os dados de prática limpos, a tabela dinâmica deve mostrar East 29.00, South 24.75 e North 14.00. Por isso, a loja East teve mais receita de 1 a 4 de outubro.",
            "As fórmulas respondem a uma pergunta de cada vez. SUMIFS soma os números que cumprem uma regra: =SUMIFS(F:F, B:B, \"South\") soma a coluna Revenue (F) onde a coluna Store (B) diz South, e dá 24.75. COUNTIFS conta as linhas que cumprem a regra: =COUNTIFS(C:C, \"Coffee\") conta as vendas de Coffee, e dá 3. AVERAGEIFS funciona da mesma forma para médias.",
            "Verifique sempre um número à mão. Se a tabela dinâmica e a sua verificação à mão não forem iguais, os dados provavelmente ainda precisam de ser limpos."
          ],
          steps: ["Selecione os dados limpos, com os cabeçalhos.", "Insira uma tabela dinâmica numa folha nova.", "Ponha a categoria (Store) em Rows.", "Ponha a medida (Revenue) em Values, resumida com SUM.", "Ordene do maior para o menor.", "Verifique um total à mão ou com SUMIFS."],
          words: [["Tabela dinâmica (pivot table)", "uma ferramenta que agrupa e resume uma tabela, por exemplo totais por loja."], ["SUMIFS", "uma fórmula que soma os números que cumprem uma ou mais regras."], ["COUNTIFS", "uma fórmula que conta as linhas que cumprem uma ou mais regras."], ["Medida", "o número que está a somar ou de que está a fazer a média, como a receita."]],
          slides: [
            { title: "Tabelas dinâmicas", bullets: ["Sheets: Insert > Pivot table", "Excel: Insert > PivotTable", "Rows: Store; Values: SUM de Revenue"] },
            { title: "A resposta da prática", bullets: ["East 29.00, South 24.75, North 14.00", "East teve mais receita, de 1 a 4 de outubro"] },
            { title: "Fórmulas com regras", bullets: ["=SUMIFS(F:F, B:B, \"South\") dá 24.75", "=COUNTIFS(C:C, \"Coffee\") dá 3", "AVERAGEIFS para médias"] },
            { title: "Verifique à mão", bullets: ["Some você mesmo um grupo", "Não é igual? Limpe os dados outra vez"] }
          ],
          tryIt: "Com os seus dados de prática limpos, crie uma tabela dinâmica da receita por loja e ordene-a. Depois escreva uma SUMIFS para East e uma COUNTIFS para Bagel. Verifique: East deve dar 29.00 e Bagel deve contar 3 linhas. Faça uma segunda tabela dinâmica de Qty por Item.",
          youCanNow: "resumir uma tabela com uma tabela dinâmica e verificá-la com SUMIFS e COUNTIFS.",
          quickCheck: [
            { objective: "O3", q: "Numa tabela dinâmica da receita por loja, onde vai Store?", options: ["Rows", "Values", "Só em Filters", "Não se usa"], answer: 0, why: "A categoria pela qual agrupa vai em Rows; o número que soma vai em Values." },
            { objective: "O3", q: "Que fórmula soma a Revenue (coluna F) só da loja North (coluna B)?", options: ["=SUM(F:F)", "=COUNTIFS(B:B, \"North\")", "=AVERAGE(B:B)", "=SUMIFS(F:F, B:B, \"North\")"], answer: 3, why: "SUMIFS soma o intervalo da soma (F) onde o intervalo da regra (B) é igual a North." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Análise em folhas de cálculo",
        questions: [
          { objective: "O1", q: "Qual é uma necessidade, e ainda não uma pergunta clara?", options: ["\"Como estamos?\"", "\"Que loja teve a maior receita em outubro?\"", "\"Quantas vendas de Coffee houve no dia 2 de outubro?\"", "\"Qual foi o tamanho médio das encomendas na semana passada?\""], answer: 0, why: "Não tem medida nem período de tempo, por isso um número ainda não lhe pode responder." },
          { objective: "O2", q: "Uma venda foi escrita duas vezes. O que acontece se não tirar a linha repetida?", options: ["Nada muda", "O total conta essa venda duas vezes", "A folha de cálculo corrige sozinha", "A venda desaparece"], answer: 1, why: "As linhas repetidas contam duas vezes, por isso os totais ficam altos demais." },
          { objective: "O2", q: "Que menu do Google Sheets tira os espaços a mais?", options: ["Insert > Chart", "Format > Theme", "Data > Data cleanup > Trim whitespace", "File > Print"], answer: 2, why: "Trim whitespace tira os espaços antes e depois do texto." },
          { objective: "O3", q: "O que devolve =COUNTIFS(C:C, \"Juice\") com os dados de prática limpos?", options: ["1", "3", "8", "2"], answer: 3, why: "Juice aparece em duas linhas (North no dia 3 de outubro e South no dia 4 de outubro)." },
          { objective: "O3", q: "O total da tabela dinâmica para South não é igual à sua verificação à mão. Qual é a razão mais provável?", options: ["Os dados ainda têm uma linha repetida ou um nome diferente", "As tabelas dinâmicas não sabem somar", "Precisa de um ecrã maior", "As verificações à mão estão sempre erradas"], answer: 0, why: "As diferenças costumam mostrar dados que ainda precisam de ser limpos." }
        ]
      }
    },
    {
      name: "Capítulo 2: SQL e partilha de resultados",
      lessons: [
        {
          title: "As suas primeiras consultas SQL: SELECT, WHERE e ORDER BY",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escrever consultas SELECT com WHERE e ORDER BY num editor de SQL gratuito.",
          text: [
            "As grandes organizações guardam os dados em bases de dados, não em folhas de cálculo. SQL (muitas vezes lido \"síquel\", em inglês) é a linguagem para fazer perguntas a uma base de dados. Uma consulta (query) é uma pergunta. O SQL parece inglês simples e é usado em quase todos os empregos na área de dados.",
            "Pode praticar de graça no navegador no SQLite Online (sqliteonline.com): escreva SQL no editor e carregue em Run. Pode oferecer extras pagos; não precisa deles. O DB Browser for SQLite é uma opção gratuita, de código aberto, para o computador. Use só dados de prática em ferramentas online, nunca dados verdadeiros de clientes.",
            "Crie a tabela de prática executando: CREATE TABLE sales (id INTEGER, sale_date TEXT, store TEXT, item TEXT, qty INTEGER, price REAL); depois INSERT INTO sales VALUES (1,'2026-10-01','North','Coffee',3,2.50),(2,'2026-10-01','South','Bagel',5,1.75),(3,'2026-10-02','North','Bagel',2,1.75),(4,'2026-10-02','East','Coffee',6,2.50),(5,'2026-10-03','South','Coffee',4,2.50),(6,'2026-10-03','North','Juice',1,3.00),(7,'2026-10-04','East','Bagel',8,1.75),(8,'2026-10-04','South','Juice',2,3.00);",
            "Agora pergunte. SELECT * FROM sales; mostra todas as linhas. SELECT item, qty FROM sales WHERE store = 'North'; mostra só os artigos da loja North. SELECT * FROM sales WHERE qty >= 4 ORDER BY qty DESC; mostra as quatro maiores vendas, da maior para a menor (8, 6, 5, 4). O texto vai entre aspas simples; os números não."
          ],
          steps: ["Abra um editor de SQL gratuito no navegador.", "Execute a linha CREATE TABLE e depois a linha INSERT.", "Execute SELECT * FROM sales; para ver as 8 linhas.", "Acrescente WHERE para ficar só com as linhas que quer.", "Acrescente ORDER BY para ordenar; acrescente DESC para pôr a maior primeiro.", "Verifique o resultado olhando você mesmo para as linhas."],
          words: [["Base de dados", "um lugar organizado onde se guardam dados, em tabelas."], ["SQL", "Structured Query Language (linguagem de consulta estruturada): a linguagem para fazer perguntas a uma base de dados."], ["Consulta (query)", "uma pergunta escrita em SQL."], ["SELECT / FROM", "SELECT diz as colunas que quer; FROM diz a tabela."], ["WHERE", "fica só com as linhas que cumprem uma regra."], ["ORDER BY", "ordena os resultados; DESC quer dizer do maior para o menor."]],
          slides: [
            { title: "SQL em palavras simples", bullets: ["A linguagem para fazer perguntas a uma base de dados", "Uma pergunta = uma consulta", "Usado em quase todos os empregos na área de dados"] },
            { title: "Pratique de graça", bullets: ["SQLite Online no navegador: escreva e carregue em Run", "DB Browser for SQLite no seu computador", "Só dados de prática"] },
            { title: "Três consultas", bullets: ["SELECT * FROM sales;", "SELECT item, qty FROM sales WHERE store = 'North';", "... WHERE qty >= 4 ORDER BY qty DESC;"] },
            { title: "Regras para lembrar", bullets: ["Texto entre aspas simples: 'North'", "Números sem aspas", "Termine cada consulta com ;"] }
          ],
          sources: [SQLITE_ONLINE, DB_BROWSER],
          tryIt: "Crie a tabela sales e execute as três consultas. Depois escreva a sua: todas as vendas de Coffee, ordenadas por qty da maior para a menor. Deve obter 3 linhas: qty 6, 4 e 3. Guarde cada consulta e o seu resultado para a tarefa final.",
          youCanNow: "criar uma tabela de prática e escrever consultas SQL que filtram e ordenam linhas.",
          quickCheck: [
            { objective: "O4", q: "Que consulta mostra só as vendas da loja South?", options: ["SELECT * FROM sales ORDER BY store;", "SELECT * FROM sales WHERE store = 'South';", "SELECT South FROM sales;", "SELECT * WHERE sales = South;"], answer: 1, why: "WHERE store = 'South' fica só com as linhas dessa loja." },
            { objective: "O4", q: "O que faz DESC em ORDER BY qty DESC?", options: ["Apaga a coluna", "Descreve a tabela", "Ordena do maior para o menor", "Fica só com uma linha"], answer: 2, why: "DESC quer dizer descendente: o maior primeiro." }
          ]
        },
        {
          title: "Totais com GROUP BY e juntar duas tabelas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escrever uma consulta GROUP BY com SUM e um JOIN entre duas tabelas.",
          text: [
            "No SQL, GROUP BY faz o mesmo trabalho que uma tabela dinâmica numa folha de cálculo. SELECT store, SUM(qty * price) AS revenue FROM sales GROUP BY store ORDER BY revenue DESC; dá East 29.0, South 24.75, North 14.0, o mesmo que a sua tabela dinâmica. AS dá um nome à nova coluna.",
            "Outras funções de resumo: COUNT(*) conta linhas, AVG(qty) dá a média, MIN e MAX dão o menor e o maior. SELECT item, SUM(qty) FROM sales GROUP BY item; dá Bagel 15, Coffee 13, Juice 3.",
            "Muitas vezes os dados estão divididos por várias tabelas. Uma segunda tabela pode guardar a cidade de cada loja: CREATE TABLE stores (store TEXT, city TEXT); INSERT INTO stores VALUES ('North','Fresno'),('South','Bakersfield'),('East','Modesto'); Um JOIN junta as linhas em que uma coluna é igual nas duas tabelas.",
            "SELECT sales.item, sales.qty, stores.city FROM sales JOIN stores ON sales.store = stores.store; mostra cada venda com a sua cidade. Se o nome de uma loja estiver escrito de forma diferente nas duas tabelas, o JOIN não a encontra; é mais uma razão para limpar os dados primeiro."
          ],
          steps: ["Escolha a coluna pela qual agrupar (store, item, data).", "Escolha o resumo: SUM, COUNT, AVG, MIN ou MAX.", "Escreva SELECT coluna, SUM(...) AS nome FROM tabela GROUP BY coluna;", "Acrescente ORDER BY para ordenar os grupos.", "Para um JOIN, diga as duas tabelas e a coluna que liga as duas depois de ON.", "Compare os resultados com a sua tabela dinâmica."],
          words: [["GROUP BY", "agrupa as linhas que têm o mesmo valor para poder somar ou contar cada grupo."], ["Função de agregação", "um resumo como SUM, COUNT, AVG, MIN ou MAX."], ["AS", "dá um nome a uma coluna do resultado."], ["JOIN", "junta linhas de duas tabelas que têm uma coluna com os mesmos valores."], ["Chave (key)", "a coluna usada para ligar as linhas entre tabelas."]],
          slides: [
            { title: "GROUP BY = uma tabela dinâmica em SQL", bullets: ["SELECT store, SUM(qty * price) AS revenue", "FROM sales GROUP BY store ORDER BY revenue DESC;", "East 29.0, South 24.75, North 14.0"] },
            { title: "Funções de resumo", bullets: ["COUNT(*), SUM, AVG, MIN, MAX", "Unidades por artigo: Bagel 15, Coffee 13, Juice 3"] },
            { title: "Juntar duas tabelas", bullets: ["Tabela stores: store e city", "JOIN stores ON sales.store = stores.store", "Cada venda mostra agora a sua cidade"] },
            { title: "Chaves limpas são importantes", bullets: ["Escritas diferentes: o JOIN perde linhas", "Primeiro limpe, depois junte"] }
          ],
          sources: [SQLITE_ONLINE],
          tryIt: "Execute a consulta GROUP BY da receita e verifique se é igual à sua tabela dinâmica. Escreva uma consulta que conta as vendas de cada loja (COUNT(*)); deve obter 3, 3 e 2. Depois crie a tabela stores e execute o JOIN. Guarde cada consulta e o seu resultado.",
          youCanNow: "somar e contar grupos com GROUP BY e juntar duas tabelas com um JOIN.",
          quickCheck: [
            { objective: "O5", q: "Que consulta dá o total de unidades vendidas de cada artigo?", options: ["SELECT item, SUM(qty) FROM sales GROUP BY item;", "SELECT * FROM sales;", "SELECT item FROM sales WHERE qty = SUM;", "SELECT SUM(item) FROM sales;"], answer: 0, why: "GROUP BY item faz um grupo por artigo, e SUM(qty) soma cada um." },
            { objective: "O5", q: "Um JOIN entre sales e stores perde as linhas North. Qual é a razão mais provável?", options: ["O SQL não consegue juntar texto", "Há linhas demais", "O nome da loja está escrito de forma diferente nas duas tabelas", "O JOIN só funciona às segundas-feiras"], answer: 2, why: "Um JOIN liga valores exatamente iguais; escritas diferentes não ligam." }
          ]
        },
        {
          title: "Transformar resultados em conclusões, e o seu projeto",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever três conclusões com números, um limite e um próximo passo.",
          text: [
            "Só números não ajudam um chefe. Uma conclusão é uma frase que diz o que os dados mostram, com o número: \"A loja East teve mais receita de 1 a 4 de outubro: $29.00, mais do dobro dos $14.00 da North.\"",
            "Seja honesto sobre os limites. Os dados de prática cobrem só 4 dias e 8 vendas, por isso não dizem nada sobre um ano inteiro. Correlação não é causa: se o Coffee vendeu mais num dia frio, só os dados não provam que foi o tempo que causou isso. Diga o que os dados não lhe podem dizer.",
            "Termine com um próximo passo com que alguém possa agir: \"Juntar as vendas de um mês inteiro antes de decidir para onde mandar mais produtos.\" Faça só uma página, com um gráfico ou uma tabela clara da sua tabela dinâmica.",
            "Por fim, transforme o projeto numa linha para o currículo: \"Limpei e analisei dados de vendas no Google Sheets e em SQL (GROUP BY, JOIN); encontrei a loja com mais receita e apresentei as conclusões.\" Isto mostra a um empregador o que sabe fazer. Use só dados inventados ou públicos num portefólio, nunca dados privados de um empregador."
          ],
          steps: ["Escreva a pergunta no topo.", "Acrescente uma tabela ou um gráfico da sua tabela dinâmica.", "Escreva três conclusões, cada uma com um número.", "Escreva um limite: o que os dados não lhe podem dizer.", "Escreva um próximo passo.", "Acrescente as suas consultas SQL e os seus resultados.", "Escreva uma linha para o currículo sobre o projeto."],
          words: [["Conclusão", "uma frase que diz o que os dados mostram, com um número."], ["Limitação", "algo que os dados não podem dizer, ou uma razão para ter cuidado com eles."], ["Correlação", "duas coisas que mudam ao mesmo tempo; não prova que uma causa a outra."], ["Portefólio", "um conjunto de exemplos do seu trabalho que mostra aos empregadores."]],
          slides: [
            { title: "Uma boa conclusão", bullets: ["Uma frase, um número", "\"East teve mais receita: $29.00, o dobro dos $14.00 da North.\""] },
            { title: "Seja honesto sobre os limites", bullets: ["Só 4 dias e 8 vendas", "Correlação não é causa"] },
            { title: "Uma página", bullets: ["Pergunta, um gráfico ou uma tabela", "Três conclusões, um limite, um próximo passo", "As suas consultas SQL e os resultados"] },
            { title: "Mostre o trabalho", bullets: ["Escreva uma linha para o currículo", "Use só dados inventados ou públicos"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Tarefa final: faça o seu projeto de uma página com a pergunta, os dados limpos e a tabela dinâmica, pelo menos duas consultas SQL com resultados, três conclusões com números, um limite, um próximo passo e uma linha para o currículo. Leia em voz alta: um chefe ocupado conseguiria agir com isto num minuto?",
          youCanNow: "transformar uma análise em conclusões claras e honestas e num projeto que pode mostrar a um empregador.",
          quickCheck: [
            { objective: "O6", q: "Qual é a melhor conclusão?", options: ["\"Houve vendas.\"", "\"Os dados são interessantes.\"", "\"A South vendeu 11 unidades de comida e bebida e ganhou $24.75, em segundo lugar entre três lojas.\"", "\"Os números subiram e desceram.\""], answer: 2, why: "Diz o que aconteceu, com números e uma comparação." },
            { objective: "O6", q: "O Juice vendeu mais no dia mais quente dos seus dados. O que pode dizer com honestidade?", options: ["O tempo quente causa as vendas de Juice", "Aqui o Juice e os dias quentes andaram juntos, mas isto não prova a causa", "O Juice vai vender sempre mais no verão", "Os dados estão errados"], answer: 1, why: "Correlação não é causa; um conjunto de dados pequeno não prova porquê." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: SQL e partilha de resultados",
        questions: [
          { objective: "O4", q: "O que faz SELECT * FROM sales; ?", options: ["Apaga a tabela sales", "Mostra todas as colunas e linhas da tabela sales", "Conta as linhas", "Ordena a tabela"], answer: 1, why: "* quer dizer todas as colunas e, sem WHERE, vêm todas as linhas." },
          { objective: "O4", q: "Qual está bem escrita?", options: ["SELECT * FROM sales WHERE item = 'Bagel';", "SELECT * FROM sales WHERE item = Bagel", "FROM sales SELECT Bagel;", "SELECT Bagel WHERE sales;"], answer: 0, why: "Os valores de texto vão entre aspas simples, e a ordem é SELECT, FROM, WHERE." },
          { objective: "O5", q: "Que parte do SQL faz o mesmo trabalho que Rows numa tabela dinâmica?", options: ["ORDER BY", "WHERE", "FROM", "GROUP BY"], answer: 3, why: "GROUP BY faz um grupo por valor, como as linhas de uma tabela dinâmica." },
          { objective: "O5", q: "O que devolve COUNT(*) para cada loja nos dados de prática?", options: ["A receita total", "O preço médio", "O número de linhas de vendas", "A cidade"], answer: 2, why: "COUNT(*) conta as linhas de cada grupo." },
          { objective: "O6", q: "O que deve ir na parte dos limites do seu relatório?", options: ["\"Os dados cobrem só 4 dias, por isso não podem mostrar um padrão anual.\"", "\"A East é a melhor loja para sempre.\"", "\"O SQL é difícil.\"", "\"Gosto de café.\""], answer: 0, why: "Um limite diz ao leitor o que os dados não podem mostrar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Análise de Dados com Folhas de Cálculo e SQL",
    questions: [
      { objective: "O1", q: "Uma pergunta sobre dados clara inclui:", options: ["Só um tema", "Quem ou o quê, uma medida e um período de tempo", "Um gráfico", "Uma palavra-passe"], answer: 1, why: "Estas três partes permitem responder com um número." },
      { objective: "O1", q: "Qual é o primeiro passo no caminho do analista?", options: ["Fazer um gráfico", "Escrever SQL", "Fazer uma pergunta clara", "Partilhar conclusões"], answer: 2, why: "A pergunta decide de que dados precisa e como os analisar." },
      { objective: "O1", q: "Que certificado da CompTIA é para analistas de dados em início de carreira?", options: ["Data+", "A+", "Security+", "Network+"], answer: 0, why: "O CompTIA Data+ cobre conceitos de dados, preparação, análise, visualização e governação." },
      { objective: "O2", q: "Porque é que \"North\" e \"north \" causam um problema?", options: ["Deixam o ficheiro maior", "As folhas de cálculo não leem letras minúsculas", "Mudam o tipo de letra", "São contadas como duas lojas diferentes"], answer: 3, why: "Escritas diferentes dividem um grupo em dois, por isso os totais ficam errados." },
      { objective: "O2", q: "Que ferramenta do Excel tira as linhas repetidas?", options: ["Insert > Chart", "Data > Remove Duplicates", "View > Zoom", "File > Save As"], answer: 1, why: "Remove Duplicates apaga as linhas que aparecem mais de uma vez." },
      { objective: "O2", q: "Qual é um bom hábito de limpeza?", options: ["Limpar a única cópia dos dados", "Guardar os dados brutos e escrever cada mudança", "Apagar qualquer linha que pareça estranha", "Escrever o sinal $ nas células de números"], answer: 1, why: "Guardar os dados brutos e uma lista das mudanças torna o seu trabalho verificável." },
      { objective: "O3", q: "Numa tabela dinâmica, onde vai o número que soma?", options: ["Values", "Rows", "No título", "Só em Filters"], answer: 0, why: "Values guarda a medida, resumida com SUM, COUNT ou AVERAGE." },
      { objective: "O3", q: "O que faz COUNTIFS?", options: ["Soma números", "Calcula a média", "Conta as linhas que cumprem uma ou mais regras", "Ordena uma coluna"], answer: 2, why: "COUNTIFS conta as linhas que cumprem as regras que lhe dá." },
      { objective: "O3", q: "Nos dados de prática limpos, que loja teve mais receita?", options: ["North", "South", "Foram todas iguais", "East"], answer: 3, why: "East teve 29.00, South 24.75 e North 14.00." },
      { objective: "O4", q: "Para que serve o SQL?", options: ["Fazer desenhos", "Fazer perguntas a uma base de dados", "Enviar e-mails", "Fazer slides"], answer: 1, why: "SQL é a linguagem para fazer consultas a bases de dados." },
      { objective: "O4", q: "Qual fica só com as linhas em que qty é 4 ou mais?", options: ["ORDER BY qty", "GROUP BY qty", "WHERE qty >= 4", "SELECT qty"], answer: 2, why: "WHERE filtra as linhas com uma regra." },
      { objective: "O4", q: "Para ordenar os resultados com o maior primeiro, escreve:", options: ["ORDER BY qty DESC", "ORDER BY qty ASC", "WHERE qty BIG", "SORT qty"], answer: 0, why: "DESC ordena do maior para o menor." },
      { objective: "O4", q: "Que dados é seguro colocar numa ferramenta online de prática de SQL?", options: ["A lista de clientes do seu empregador", "Registos de doentes", "Dados de prática inventados", "Os seus extratos bancários"], answer: 2, why: "Use só dados de prática ou públicos em ferramentas online." },
      { objective: "O5", q: "SELECT store, SUM(qty * price) FROM sales GROUP BY store; devolve:", options: ["Todas as vendas", "A receita total de cada loja", "O número de lojas", "A cidade de cada loja"], answer: 1, why: "GROUP BY store com SUM dá um total de receita por loja." },
      { objective: "O5", q: "Que função dá uma média?", options: ["COUNT", "MAX", "SUM", "AVG"], answer: 3, why: "AVG devolve a média de uma coluna." },
      { objective: "O5", q: "Um JOIN liga as linhas de duas tabelas através de:", options: ["Uma coluna com os mesmos valores nas duas", "A cor da linha", "O tamanho da tabela", "Só a ordem alfabética"], answer: 0, why: "JOIN ... ON liga as linhas em que a coluna-chave é igual." },
      { objective: "O6", q: "Uma conclusão deve incluir:", options: ["Só um gráfico sem palavras", "Um número e o que ele significa", "Todas as linhas dos dados", "A sua opinião sem dados"], answer: 1, why: "Uma conclusão clara diz o que aconteceu com um número." },
      { objective: "O6", q: "Os seus dados cobrem uma semana. Qual é a frase honesta?", options: ["\"Isto prova a tendência do ano.\"", "\"Isto nunca vai mudar.\"", "\"Os dados são perfeitos.\"", "\"Só esta semana; precisamos de mais dados para ver um padrão.\""], answer: 3, why: "Dizer o limite impede os leitores de tirarem conclusões erradas." },
      { objective: "O6", q: "Que linha de currículo mostra melhor este projeto?", options: ["\"Sou bom com computadores.\"", "\"Limpei e analisei dados de vendas no Google Sheets e em SQL (GROUP BY, JOIN) e apresentei as conclusões.\"", "\"Sei alguma coisa de dados.\"", "\"Usei a internet.\""], answer: 1, why: "Diz as ferramentas, as competências e o resultado." },
      { objective: "O6", q: "Com o que deve terminar o seu relatório de uma página?", options: ["Um próximo passo claro com que alguém possa agir", "Uma lista longa de dados brutos", "A sua palavra-passe", "Nada"], answer: 0, why: "Um próximo passo transforma as conclusões em ação." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pergunta clara", objective: "O1", notYet: "A pergunta é vaga ou não se pode responder com um número.", meets: "A pergunta diz quem ou o quê, uma medida e um período de tempo.", exceeds: "Também diz quem vai usar a resposta e que decisão ela ajuda a tomar." },
      { name: "Dados limpos", objective: "O2", notYet: "Ficaram linhas repetidas ou nomes diferentes, ou os dados brutos perderam-se.", meets: "Sem linhas repetidas, nomes e tipos iguais, dados brutos guardados, mudanças escritas.", exceeds: "A lista de mudanças é clara o suficiente para outra pessoa repetir a limpeza." },
      { name: "Tabela dinâmica e fórmulas", objective: "O3", notYet: "Não há tabela dinâmica, ou os totais não são iguais aos de uma verificação à mão.", meets: "Uma tabela dinâmica responde à pergunta e uma SUMIFS ou COUNTIFS dá o mesmo resultado.", exceeds: "Uma segunda tabela dinâmica ou fórmula acrescenta uma comparação útil." },
      { name: "Consultas com filtros", objective: "O4", notYet: "Nenhuma consulta funciona, ou devolve as linhas erradas.", meets: "Uma consulta com WHERE e ORDER BY devolve exatamente as linhas certas.", exceeds: "As consultas estão bem escritas e cada uma tem uma nota de uma linha sobre o que responde." },
      { name: "Agrupar e juntar", objective: "O5", notYet: "Não há consulta GROUP BY, ou os totais estão errados.", meets: "Uma consulta GROUP BY com SUM, COUNT ou AVG é igual à tabela dinâmica.", exceeds: "Também inclui um JOIN que funciona e explica a coluna que liga as tabelas." },
      { name: "Conclusões e linha do currículo", objective: "O6", notYet: "As conclusões não têm números, ou falta o limite ou o próximo passo.", meets: "Três conclusões com números, um limite, um próximo passo e uma linha para o currículo.", exceeds: "Um chefe conseguiria agir com isto num minuto, e o gráfico ou a tabela tem nomes claros." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que acrescentam o projeto a um currículo ou portefólio em 30 dias (inquérito de seguimento)",
      "Alunos que se candidatam ou começam um trabalho de dados, relatórios ou analista, ou usam estas competências no trabalho, em 6 meses",
      "Alunos que marcam ou passam o CompTIA Data+ ou outro certificado de dados em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com navegador de internet (o ecrã do telefone é pequeno demais para praticar SQL)",
      "Uma conta Google gratuita para o Google Sheets, ou o Excel se o tiver",
      "Um editor de SQL gratuito: o SQLite Online no navegador, ou o DB Browser for SQLite instalado",
      "Cerca de 90 minutos para as lições, mais 1 a 2 horas para o projeto final"
    ],
    facilitatorNotes: [
      "Antes da sessão, abra o editor de SQL nos computadores da sala e confirme que carrega; algumas redes bloqueiam sites.",
      "Dê aos alunos a tabela de prática num ficheiro ou em papel para poupar tempo a escrever; escrever também é uma boa prática.",
      "Junte os alunos em pares nas Lições 4 e 5: um escreve a consulta, o outro verifica o resultado à mão, e depois trocam.",
      "Insista na regra de privacidade: só dados inventados ou públicos nas ferramentas online e nos portefólios.",
      "Se os alunos quiserem um certificado, indique-lhes a página oficial do CompTIA Data+; este curso prepara, mas não dá o certificado.",
      "Avalie o projeto final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
