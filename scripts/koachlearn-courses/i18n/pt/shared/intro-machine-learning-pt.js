"use strict";

// Koach Learn course (Portuguese translation of shared/intro-machine-learning.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python code stays exactly as in the English.

const COLAB = { name: "Google Colab: Frequently Asked Questions", url: "https://research.google.com/colaboratory/faq.html" };
const SKLEARN = { name: "scikit-learn: Getting Started", url: "https://scikit-learn.org/stable/getting_started.html" };

module.exports = {
  id: "intro-machine-learning-pt",
  lang: "pt",
  translationOf: "intro-machine-learning",
  category: "Youth",
  name: "Introdução à Aprendizagem Automática",
  skills: "Explicar como as máquinas aprendem, Escolher características e rótulos, Dividir os dados para treino e teste, Treinar um modelo com scikit-learn, Medir e comparar a exatidão",
  outcome: "treinar dois modelos simples de aprendizagem automática no Google Colab com scikit-learn, testá-los com dados que eles ainda não viram, comparar a exatidão deles e explicar qual usaria e quais são os seus limites.",
  about: [
    "A aprendizagem automática está por trás dos filtros de spam, das sugestões de filmes, dos tempos de trânsito nos mapas e dos alertas de fraude do cartão do banco. Este curso mostra como funciona e depois põe você a construir um modelo.",
    "O Capítulo 1 não precisa de código: você aprende as ideias com exemplos do dia a dia e pequenas tabelas feitas por você. O Capítulo 2 passa para o Google Colab, um site gratuito que corre Python, onde você treina e testa modelos verdadeiros com uma biblioteca gratuita chamada scikit-learn. Saber um pouco de Python ajuda, mas todas as linhas de código são dadas e explicadas.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "No Google Colab, carregue o conjunto de dados das flores iris, divida-o em conjunto de treino e conjunto de teste, treine uma árvore de decisão e um modelo k-vizinhos mais próximos, mostre a exatidão de cada modelo no conjunto de teste, use o melhor para prever a espécie de uma flor nova e escreva duas frases: que modelo escolheria e um limite do seu modelo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos com um pouco de experiência em Python que querem perceber e experimentar a aprendizagem automática: alunos do ensino secundário e da universidade, membros de clubes de programação, pessoas a mudar de carreira e formandos a caminho de trabalhos em dados ou IA.",
    startingPoint: "Sabem escrever e correr pequenos programas em Python no Google Colab e usar listas e funções. A maioria já ouviu falar de IA e de aprendizagem automática, mas nunca treinou um modelo, nunca dividiu dados em conjunto de treino e de teste, nem mediu e comparou a exatidão.",
    gap: "A aprendizagem automática está por trás dos filtros de spam, das sugestões, dos mapas e de muitas ferramentas de trabalho, e os primeiros empregos em dados e IA esperam que as pessoas saibam como os modelos aprendem e como falham. Sem prática, os alunos não conseguem julgar os resultados de um modelo, reconhecer dados fracos nem ver porque é importante verificar a justiça.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; termos como característica, rótulo, sobreajuste e exatidão são explicados",
      "Aparelhos: um computador ou portátil com navegador de internet",
      "Contas e custo: uma conta Google gratuita para o Google Colab; o scikit-learn já vem instalado",
      "Tempo: cerca de 5 a 6 minutos por lição mais a prática, cerca de 60 a 75 minutos no total",
      "Matemática: só percentagens e medidas simples; sem fórmulas"
    ],
    prerequisites: "Introdução à Programação com Python."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Sem notas", action: "explicar o que é a aprendizagem automática e identificar se uma tarefa é de classificação ou de regressão", standard: "com uma explicação correta e pelo menos 4 de 5 tarefas bem classificadas" },
    { id: "O2", condition: "Com um problema de previsão", action: "criar um pequeno conjunto de dados com características sensatas e um rótulo e procurar falhas nele", standard: "com características que afetam a resposta, uma coluna de rótulo e pelo menos uma falha possível indicada" },
    { id: "O3", condition: "Com um conjunto de dados e os resultados de teste de um modelo", action: "explicar porque os dados são divididos em conjunto de treino e de teste e calcular a exatidão", standard: "com a exatidão certa até à percentagem inteira mais próxima" },
    { id: "O4", condition: "No Google Colab com scikit-learn", action: "carregar um conjunto de dados de prática e descrever as suas linhas, características e rótulos", standard: "dizendo o número de linhas e de colunas e o que significa o rótulo" },
    { id: "O5", condition: "Com o conjunto de dados iris", action: "dividir os dados, treinar uma árvore de decisão e mostrar a sua exatidão no conjunto de teste", standard: "com o código a correr sem erros e a exatidão mostrada" },
    { id: "O6", condition: "Com dois modelos treinados", action: "comparar a exatidão de teste deles, prever um exemplo novo e escrever um limite do modelo escolhido", standard: "escolhendo um modelo com uma razão e indicando um limite real" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como as máquinas aprendem",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a aprendizagem automática",
          minutes: 4,
          goal: "Explicar com as suas palavras o que é a aprendizagem automática e reconhecê-la no dia a dia.",
          text: [
            "Na programação normal, uma pessoa escreve as regras. Na aprendizagem automática (em inglês, machine learning ou ML), você dá ao computador muitos exemplos com as respostas certas e ele encontra as regras sozinho. O resultado chama-se modelo.",
            "Exemplos do dia a dia: o seu email aprende como é o spam a partir de milhões de emails marcados. Uma aplicação de música sugere canções a partir do que pessoas parecidas com você ouviram. Uma aplicação de mapas prevê o trânsito a partir de viagens passadas.",
            "Dois trabalhos comuns: a classificação põe as coisas em grupos (spam ou não spam, que tipo de flor). A regressão prevê um número (o preço de uma casa, os minutos até o autocarro chegar). Quando os exemplos vêm com respostas, chama-se aprendizagem supervisionada, e é isso que este curso ensina."
          ],
          words: [["Aprendizagem automática (ML)", "computadores a encontrar padrões em exemplos, em vez de seguirem regras escritas por uma pessoa."], ["Modelo", "o que a aprendizagem automática produz: um conjunto de padrões aprendidos que faz previsões."], ["Classificação", "prever um grupo ou uma categoria."], ["Regressão", "prever um número."], ["Aprendizagem supervisionada", "aprender com exemplos que vêm com as respostas certas."]],
          slides: [
            { title: "Regras ou aprendizagem", bullets: ["Programação: uma pessoa escreve as regras", "ML: o computador encontra as regras a partir de exemplos", "O resultado é um modelo"] },
            { title: "ML que você já usa", bullets: ["Filtros de spam", "Sugestões de canções e vídeos", "Tempos de trânsito nos mapas", "Alertas de fraude do cartão"] },
            { title: "Dois trabalhos comuns", bullets: ["Classificação: que grupo?", "Regressão: que número?", "Supervisionada: os exemplos vêm com respostas"] }
          ],
          tryIt: "Escreva três aplicações que usa e que provavelmente usam aprendizagem automática. Para cada uma, escreva o que ela prevê e se isso é classificação (um grupo) ou regressão (um número).",
          youCanNow: "explicar o que é a aprendizagem automática e distinguir classificação de regressão.",
          quickCheck: [
            { objective: "O1", q: "Na aprendizagem automática, o que é um modelo?", options: ["Uma lista de regras escritas à mão por uma pessoa", "Uma folha de cálculo com dados", "Um tipo de computador", "O resultado de um computador encontrar padrões em exemplos"], answer: 3, why: "O modelo é o que o computador produz depois de encontrar padrões em exemplos." },
            { objective: "O1", q: "Uma loja quer separar os emails dos clientes em \"reclamação\" ou \"pergunta\". Que tipo de trabalho é este?", options: ["Regressão", "Classificação", "Teste", "Sobreajuste"], answer: 1, why: "Pôr coisas em grupos é classificação; prever um número é regressão." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dados: características e rótulos",
          minutes: 5,
          goal: "Construir um pequeno conjunto de dados com características e um rótulo.",
          text: [
            "A aprendizagem automática aprende com dados, normalmente uma tabela. Cada linha é um exemplo. As colunas que descrevem o exemplo são as características. A coluna com a resposta que quer prever é o rótulo.",
            "Exemplo: para prever se um autocarro vai chegar atrasado, cada linha é uma viagem. As características podem ser a hora do dia, o dia da semana e se choveu. O rótulo é atrasado ou a horas.",
            "Boas características são coisas que afetam mesmo a resposta. Mais linhas costumam ajudar. Os dados também têm de ser justos e completos: se só recolher viagens de dias úteis, o modelo vai ser fraco ao fim de semana. Um modelo só pode ser tão bom como os seus dados."
          ],
          steps: ["Decida o que quer prever: esse é o seu rótulo.", "Escreva as coisas que podem afetá-lo: essas são as suas características.", "Faça uma tabela com uma linha por exemplo.", "Preencha pelo menos 10 linhas com casos da vida real.", "Verifique: faltam alguns tipos de exemplos?"],
          words: [["Conjunto de dados", "uma coleção de exemplos, normalmente uma tabela (em inglês, dataset)."], ["Característica", "uma coluna que descreve um exemplo, usada para fazer a previsão (em inglês, feature)."], ["Rótulo", "a coluna da resposta que o modelo aprende a prever (em inglês, label)."], ["Enviesamento nos dados", "quando os dados deixam de fora ou contam a mais alguns grupos, e o modelo fica injusto ou errado para eles."]],
          slides: [
            { title: "Os dados são uma tabela", bullets: ["Cada linha: um exemplo", "Características: as colunas que descrevem", "Rótulo: a resposta a prever"] },
            { title: "Exemplo: o autocarro vai atrasar?", bullets: ["Características: hora, dia, chuva", "Rótulo: atrasado ou a horas"] },
            { title: "Bons dados", bullets: ["Características que contam mesmo", "Linhas suficientes", "Nenhum grupo em falta, como o fim de semana"] }
          ],
          tryIt: "Escolha algo do dia a dia que possa prever, como se vai ficar cansado depois do treino ou se uma loja vai estar cheia. Faça uma tabela com duas ou três características e um rótulo, e preencha 10 linhas.",
          youCanNow: "escolher um rótulo e características úteis e construir um pequeno conjunto de dados.",
          quickCheck: [
            { objective: "O2", q: "Numa tabela de dados, o que são as características?", options: ["As colunas que descrevem cada exemplo", "A resposta que quer prever", "A exatidão do modelo", "O conjunto de teste"], answer: 0, why: "As características descrevem o exemplo; o rótulo é a resposta a prever." },
            { objective: "O2", q: "Você recolhe dados sobre que alunos terminam os trabalhos de casa, mas só de uma turma. O que faria antes de treinar?", options: ["Treinar logo; uma turma chega para todos", "Apagar a coluna do rótulo", "Recolher dados de mais turmas para o modelo ser justo com os outros alunos", "Usar só as primeiras cinco linhas"], answer: 2, why: "Dados de um só grupo podem tornar o modelo fraco ou injusto para os outros." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Treino e teste: o modelo é bom?",
          minutes: 5,
          goal: "Dividir os dados em conjunto de treino e conjunto de teste e medir a exatidão.",
          text: [
            "O treino é quando o modelo estuda exemplos para encontrar padrões. Mas um modelo que só decorou os seus exemplos pode parecer perfeito e mesmo assim falhar com exemplos novos. Isso chama-se sobreajuste, como um aluno que decorou as respostas do teste do ano passado.",
            "Por isso, você guarda alguns dados à parte. O conjunto de treino (muitas vezes cerca de 75 a 80 por cento das linhas) é usado para aprender. O conjunto de teste (o resto) fica escondido até ao fim e serve para verificar o modelo com exemplos que ele nunca viu.",
            "A exatidão é a parte dos exemplos de teste que ele acertou. 18 certos em 20 são 90 por cento. Pergunte sempre quanto custa um erro: uma sugestão de canção errada não faz mal, um alerta de fraude que falha faz."
          ],
          steps: ["Baralhe as suas linhas.", "Ponha cerca de 75 por cento no conjunto de treino.", "Guarde o resto como conjunto de teste e não olhe para ele.", "Encontre um padrão (uma regra) só a partir do conjunto de treino.", "Use-o no conjunto de teste e conte quantos acertou."],
          words: [["Treino", "o modelo a aprender padrões a partir de exemplos."], ["Conjunto de treino", "as linhas usadas para aprender."], ["Conjunto de teste", "linhas guardadas à parte para verificar o modelo com exemplos novos."], ["Sobreajuste", "quando um modelo decora os dados de treino e se sai mal com dados novos (em inglês, overfitting)."], ["Exatidão", "a parte das previsões que estavam certas (em inglês, accuracy)."]],
          slides: [
            { title: "Treino", bullets: ["O modelo estuda exemplos", "Encontra padrões", "Decorar não é aprender"] },
            { title: "Guarde dados à parte", bullets: ["Conjunto de treino: cerca de 75-80% das linhas", "Conjunto de teste: o resto, escondido até ao fim"] },
            { title: "Exatidão", bullets: ["Respostas certas / total de exemplos de teste", "18 certos em 20 = 90%", "Pergunte quanto custa um erro"] }
          ],
          tryIt: "Pegue na sua tabela de 10 linhas da Lição 2. Tape as últimas 2 linhas. A partir das primeiras 8, escreva uma regra simples (por exemplo \"se choveu, o autocarro atrasa\"). Teste a regra nas 2 linhas escondidas e calcule a exatidão.",
          youCanNow: "dividir os dados em conjunto de treino e de teste e calcular a exatidão.",
          quickCheck: [
            { objective: "O3", q: "O que é o sobreajuste?", options: ["Quando um modelo é pequeno demais", "Quando há dados de teste a mais", "Quando um modelo decora os exemplos de treino e falha com exemplos novos", "Quando a exatidão é de 50 por cento"], answer: 2, why: "O sobreajuste é como decorar as respostas do teste do ano passado." },
            { objective: "O3", q: "Um modelo de fraude tem 95% de exatidão, mas os erros são fraudes reais. O que perguntaria a seguir?", options: ["Quanto custam os erros?", "Podemos saltar o conjunto de teste?", "Podemos treinar com o conjunto de teste?", "95% chega sempre?"], answer: 0, why: "Pergunte sempre quanto custa um erro; um alerta de fraude que falha conta muito." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como as máquinas aprendem",
        questions: [
          { objective: "O1", q: "Com que aprende um modelo de aprendizagem automática?", options: ["Regras escritas por uma pessoa para cada caso", "A bateria do computador", "Exemplos, muitas vezes com as respostas certas", "Só palpites ao acaso"], answer: 2, why: "A aprendizagem automática encontra padrões em exemplos." },
          { objective: "O1", q: "Prever a temperatura de amanhã em graus é:", options: ["Regressão", "Classificação", "Não é aprendizagem automática", "Um rótulo"], answer: 0, why: "Prever um número é regressão." },
          { objective: "O2", q: "Numa tabela para prever se uma loja está cheia, \"cheia ou não cheia\" é:", options: ["A característica", "O conjunto de teste", "A exatidão", "O rótulo"], answer: 3, why: "O rótulo é a resposta que quer prever." },
          { objective: "O3", q: "Porque se guarda o conjunto de teste escondido até ao fim?", options: ["Para o treino ser mais rápido", "Para verificar o modelo com exemplos que ele nunca viu", "Porque está estragado", "Para ter mais dados"], answer: 1, why: "Testar com dados novos mostra se o modelo aprendeu mesmo." },
          { objective: "O3", q: "Um modelo acerta 15 de 20 exemplos de teste. Qual é a sua exatidão?", options: ["15%", "20%", "50%", "75%"], answer: 3, why: "15 a dividir por 20 dá 0,75, ou seja, 75 por cento." }
        ]
      }
    },
    {
      name: "Capítulo 2: Treinar o seu primeiro modelo no Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Carregar um conjunto de dados com scikit-learn",
          minutes: 5,
          goal: "Carregar um conjunto de dados de prática no Colab e ver as suas características e rótulos.",
          text: [
            "O scikit-learn é uma biblioteca gratuita de Python para aprendizagem automática, que já vem instalada no Google Colab. Traz pequenos conjuntos de dados de prática. O conjunto iris tem 150 flores. Cada uma tem quatro características (comprimento e largura de duas partes da flor, em centímetros) e um rótulo: uma de três espécies.",
            "Carregue-o com: from sklearn.datasets import load_iris, e depois iris = load_iris(). As características estão em iris.data e os rótulos em iris.target. iris.feature_names e iris.target_names dizem o que significam as colunas e os rótulos.",
            "Olhe sempre para os dados antes de treinar: quantas linhas, quais são as colunas e alguns exemplos de linhas. iris.data.shape diz as linhas e as colunas: (150, 4)."
          ],
          steps: ["Abra um caderno novo em colab.research.google.com.", "Corra: from sklearn.datasets import load_iris", "Corra: iris = load_iris()", "Mostre iris.data.shape, iris.feature_names e iris.target_names.", "Mostre as três primeiras linhas: print(iris.data[:3], iris.target[:3])"],
          words: [["scikit-learn", "uma biblioteca gratuita de Python para aprendizagem automática, importada como sklearn."], ["Conjunto de dados iris", "um conjunto de dados de prática famoso, com 150 flores de três espécies."], ["shape", "o número de linhas e de colunas dos dados."], ["X e y", "nomes comuns: X para as características, y para os rótulos."]],
          slides: [
            { title: "scikit-learn", bullets: ["Biblioteca gratuita de ML em Python", "Já está no Google Colab", "Traz conjuntos de dados de prática"] },
            { title: "O conjunto de dados iris", bullets: ["150 flores, 4 características cada", "Rótulo: uma de 3 espécies", "iris.data e iris.target"] },
            { title: "Olhe antes de treinar", bullets: ["iris.data.shape dá (150, 4)", "feature_names e target_names", "Mostre algumas linhas"] }
          ],
          sources: [SKLEARN, COLAB],
          tryIt: "Carregue o conjunto de dados iris no Colab. Mostre o shape, os nomes das quatro características, os nomes das três espécies e as cinco primeiras linhas com os seus rótulos. Anote que número corresponde a que espécie.",
          youCanNow: "carregar um conjunto de dados no Colab e descrever as suas características, rótulos e tamanho.",
          quickCheck: [
            { objective: "O4", q: "No conjunto de dados iris do scikit-learn, o que guarda iris.target?", options: ["As medidas das flores", "Os rótulos das espécies", "Os nomes das colunas", "A exatidão"], answer: 1, why: "iris.target guarda os rótulos; iris.data guarda as características." },
            { objective: "O4", q: "Acabou de carregar um conjunto de dados novo. O que faria antes de treinar um modelo?", options: ["Treinar logo sem olhar", "Apagar metade das linhas", "Mudar os rótulos à mão", "Ver o shape, os nomes das colunas e alguns exemplos de linhas"], answer: 3, why: "Olhe sempre para os dados antes de treinar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Treinar e testar uma árvore de decisão",
          minutes: 6,
          goal: "Dividir os dados, treinar uma árvore de decisão e medir a sua exatidão.",
          text: [
            "Uma árvore de decisão aprende uma série de perguntas de sim ou não, como um fluxograma: \"A pétala tem menos de 2,5 cm? Então é a espécie 0.\" É fácil de explicar, por isso é um bom primeiro modelo.",
            "Todos os modelos do scikit-learn funcionam da mesma maneira: criar, ajustar (fit) com os dados de treino e depois prever (predict) com dados novos. O código: X, y = load_iris(return_X_y=True). X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42). model = DecisionTreeClassifier(random_state=42). model.fit(X_train, y_train).",
            "Depois teste-o: predictions = model.predict(X_test) e print(accuracy_score(y_test, predictions)). random_state=42 só fixa a mistura para ter o mesmo resultado sempre que corre o código."
          ],
          steps: ["Importe: from sklearn.model_selection import train_test_split", "Importe: from sklearn.tree import DecisionTreeClassifier", "Importe: from sklearn.metrics import accuracy_score", "Divida com train_test_split(X, y, test_size=0.25, random_state=42).", "Crie o modelo, chame model.fit(X_train, y_train), depois preveja em X_test e mostre a exatidão."],
          words: [["Árvore de decisão", "um modelo que aprende um fluxograma de perguntas de sim ou não."], ["fit", "treinar o modelo com dados."], ["predict", "usar o modelo treinado para adivinhar os rótulos de dados novos."], ["train_test_split", "a ferramenta do scikit-learn que divide os dados em conjunto de treino e de teste."], ["random_state", "um número que fixa a mistura ao acaso para os resultados se repetirem."]],
          slides: [
            { title: "Árvores de decisão", bullets: ["Um fluxograma de perguntas de sim ou não", "Fácil de explicar", "Um bom primeiro modelo"] },
            { title: "O padrão de todos os modelos", bullets: ["Criar o modelo", "fit(X_train, y_train)", "predict(X_test)"] },
            { title: "Medir", bullets: ["accuracy_score(y_test, predictions)", "test_size=0.25 guarda 25% para teste", "random_state faz os resultados repetirem-se"] }
          ],
          sources: [SKLEARN],
          tryIt: "Escreva e corra no Colab o código completo da árvore de decisão. Mostre a exatidão. Depois mude test_size para 0.5, corra outra vez e anote se a exatidão subiu ou desceu.",
          youCanNow: "dividir os dados, treinar uma árvore de decisão com fit, prever com ela e medir a exatidão.",
          quickCheck: [
            { objective: "O5", q: "Porque é que uma árvore de decisão é um bom primeiro modelo?", options: ["É fácil de explicar, como um fluxograma de perguntas de sim ou não", "Nunca erra", "Não precisa de dados", "Só funciona com flores"], answer: 0, why: "As perguntas de uma árvore de decisão leem-se como um fluxograma." },
            { objective: "O5", q: "Treinou o seu modelo e quer verificá-lo. Que linha correria?", options: ["model.fit(X_test, y_test)", "load_iris()", "predictions = model.predict(X_test), e depois accuracy_score(y_test, predictions)", "random_state=42"], answer: 2, why: "Preveja com o conjunto de teste e depois compare com os rótulos verdadeiros para ter a exatidão." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Comparar modelos e conhecer os seus limites",
          minutes: 6,
          goal: "Treinar um segundo modelo, compará-lo com o primeiro, prever um exemplo novo e indicar um limite.",
          text: [
            "Raramente há um modelo perfeito, por isso experimenta-se mais do que um. O k-vizinhos mais próximos (em inglês, k-nearest neighbors ou KNN) prevê procurando os k exemplos mais parecidos nos dados de treino e fazendo uma votação. Crie-o com KNeighborsClassifier(n_neighbors=5) a partir de sklearn.neighbors; usa os mesmos passos fit e predict.",
            "Compare os dois modelos com o mesmo conjunto de teste. Para prever uma flor nova, dê ao modelo uma lista dentro de uma lista: model.predict([[5.1, 3.5, 1.4, 0.2]]). Ele devolve o número da espécie; iris.target_names transforma-o num nome.",
            "Conheça os limites. Estes modelos só conhecem estas três espécies e estas quatro medidas: mostre-lhes uma rosa e eles vão dizer na mesma o nome de uma iris. Um conjunto de teste pequeno pode fazer a exatidão parecer melhor ou pior do que é. E com dados reais sobre pessoas, verifique se o modelo funciona de forma justa para todos os grupos antes de alguém confiar nele."
          ],
          steps: ["Importe: from sklearn.neighbors import KNeighborsClassifier", "Crie knn = KNeighborsClassifier(n_neighbors=5) e ajuste-o (fit) com os mesmos dados de treino.", "Mostre as duas exatidões.", "Preveja uma flor nova com o melhor modelo: model.predict([[5.1, 3.5, 1.4, 0.2]])", "Escreva que modelo escolheria e um limite."],
          words: [["k-vizinhos mais próximos (KNN)", "um modelo que prevê por votação dos exemplos de treino mais parecidos."], ["n_neighbors", "quantos exemplos parecidos o KNN olha (o k)."], ["Limite", "um caso com que o modelo não lida bem."], ["Justiça", "um modelo funcionar igualmente bem para todos os grupos de pessoas que afeta."]],
          slides: [
            { title: "Experimente mais do que um modelo", bullets: ["KNN: votação dos k exemplos mais parecidos", "KNeighborsClassifier(n_neighbors=5)", "Os mesmos passos fit e predict"] },
            { title: "Comparar e prever", bullets: ["O mesmo conjunto de teste para os dois modelos", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "target_names transforma números em nomes"] },
            { title: "Conheça os limites", bullets: ["Só conhece aquilo com que foi treinado", "Conjuntos de teste pequenos podem enganar", "Com dados de pessoas, verifique a justiça"] }
          ],
          sources: [SKLEARN],
          tryIt: "Tarefa final: num só caderno, treine a árvore de decisão e um modelo KNN com a mesma divisão, mostre as duas exatidões, preveja a espécie da flor [6.0, 2.9, 4.5, 1.5] com o melhor modelo e mostre o nome, depois escreva duas frases sobre o modelo que escolheu e um limite que ele tem.",
          youCanNow: "treinar, testar e comparar dois modelos, fazer uma previsão e explicar os limites de um modelo.",
          quickCheck: [
            { objective: "O6", q: "O que significa n_neighbors=5 num modelo KNN?", options: ["Treina cinco vezes", "Olha para os 5 exemplos de treino mais parecidos e faz uma votação", "Guarda 5 por cento para teste", "Prevê 5 flores de uma vez"], answer: 1, why: "O KNN prevê por votação dos k exemplos mais parecidos." },
            { objective: "O6", q: "O seu modelo previu a espécie 0 para uma flor nova. Como transformaria esse número num nome?", options: ["Adivinhar o nome", "Treinar o modelo outra vez", "Mudar o tamanho do teste", "Procurá-lo em iris.target_names"], answer: 3, why: "iris.target_names transforma o número da espécie num nome." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Treinar o seu primeiro modelo no Colab",
        questions: [
          { objective: "O4", q: "O que diz iris.data.shape (150, 4)?", options: ["150 espécies e 4 flores", "O modelo tem 150% de exatidão", "4 linhas e 150 colunas", "150 linhas e 4 colunas de características"], answer: 3, why: "O shape dá primeiro as linhas e depois as colunas." },
          { objective: "O5", q: "Qual é a ordem certa dos passos para um modelo do scikit-learn?", options: ["Criar, ajustar (fit) com os dados de treino e depois prever", "predict, depois fit, depois criar", "fit com o conjunto de teste e depois prever com os dados de treino", "Só prever"], answer: 0, why: "Todos os modelos são criados, ajustados e depois usados para prever." },
          { objective: "O5", q: "O que significa test_size=0.25 em train_test_split?", options: ["Usar 25 linhas", "Treinar durante 25 minutos", "Guardar 25% das linhas para teste", "A exatidão tem de ser 25%"], answer: 2, why: "test_size define a parte das linhas guardada à parte." },
          { objective: "O6", q: "Como faz uma previsão o k-vizinhos mais próximos?", options: ["Pergunta a uma pessoa", "Atira uma moeda ao ar", "Escreve regras à mão", "Faz uma votação dos exemplos de treino mais parecidos"], answer: 3, why: "O KNN usa os k exemplos mais próximos." },
          { objective: "O6", q: "O seu modelo iris recebe as medidas de uma rosa. O que acontece?", options: ["Diz \"rosa\"", "Recusa-se", "Diz na mesma o nome de uma das três espécies de iris", "Aprende sozinho o que são rosas"], answer: 2, why: "Um modelo só conhece os rótulos com que foi treinado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Aprendizagem Automática",
    questions: [
      { objective: "O1", q: "Aprendizagem automática quer dizer:", options: ["Uma pessoa escreve todas as regras", "Um computador encontra padrões a partir de exemplos", "Um robô que anda", "Uma internet mais rápida"], answer: 1, why: "A aprendizagem automática aprende com dados." },
      { objective: "O1", q: "Qual é um uso do dia a dia da aprendizagem automática?", options: ["Um filtro de spam no email", "Um interruptor de luz", "Um mapa de papel", "Uma calculadora a somar 2 + 2"], answer: 0, why: "Os filtros de spam aprendem com muitos emails marcados." },
      { objective: "O1", q: "Decidir se uma foto mostra um gato ou um cão é:", options: ["Regressão", "Sobreajuste", "Classificação", "Uma característica"], answer: 2, why: "Escolher um grupo é classificação." },
      { objective: "O1", q: "Prever quantos minutos faltam para o autocarro chegar é:", options: ["Regressão", "Classificação", "Um conjunto de rótulos", "Teste"], answer: 0, why: "Prever um número é regressão." },
      { objective: "O1", q: "A aprendizagem supervisionada usa:", options: ["Nenhuns dados", "Só imagens", "Só um professor na sala", "Exemplos com as respostas certas"], answer: 3, why: "Supervisionada quer dizer que os exemplos têm rótulo." },
      { objective: "O2", q: "Num conjunto de dados, cada linha é normalmente:", options: ["Uma característica", "Um exemplo", "O modelo inteiro", "Uma nota de teste"], answer: 1, why: "As linhas são exemplos; as colunas são características ou o rótulo." },
      { objective: "O2", q: "Para prever se os bilhetes de um jogo vão esgotar, qual é uma característica sensata?", options: ["A cor do site dos bilhetes", "O dia da semana e o adversário", "A exatidão do modelo", "O rótulo"], answer: 1, why: "As características devem afetar mesmo a resposta." },
      { objective: "O2", q: "Os seus dados de autocarro só têm viagens de dias úteis. Qual é o risco?", options: ["Nenhum", "Vai treinar depressa demais", "A exatidão vai ser 100%", "O modelo vai ser fraco a prever o fim de semana"], answer: 3, why: "Faltar um tipo de exemplos torna o modelo errado para eles." },
      { objective: "O3", q: "O sobreajuste é quando um modelo:", options: ["Decora os dados de treino e falha com dados novos", "É pequeno demais para carregar", "Tem poucas características", "Fica sem memória"], answer: 0, why: "Um modelo com sobreajuste não generaliza." },
      { objective: "O3", q: "Que dados deve usar para medir a exatidão?", options: ["O conjunto de treino", "Quaisquer dados que quiser", "O conjunto de teste que o modelo não viu", "Só uma linha"], answer: 2, why: "Só dados que o modelo não viu mostram o desempenho real." },
      { objective: "O3", q: "Um modelo acerta 45 de 50 linhas de teste. A exatidão é:", options: ["45%", "50%", "90%", "95%"], answer: 2, why: "45 a dividir por 50 dá 0,9." },
      { objective: "O4", q: "O scikit-learn é:", options: ["Uma aplicação paga", "Um tipo de conjunto de dados", "Uma biblioteca gratuita de Python para aprendizagem automática", "Uma folha de cálculo"], answer: 2, why: "O scikit-learn (sklearn) é gratuito e de código aberto." },
      { objective: "O4", q: "No conjunto de dados iris, a espécie é:", options: ["A característica", "O rótulo", "O shape", "O modelo"], answer: 1, why: "A espécie é o que prevemos, por isso é o rótulo." },
      { objective: "O5", q: "Que linha treina um modelo?", options: ["model.fit(X_train, y_train)", "model.predict(X_test)", "print(model)", "load_iris()"], answer: 0, why: "fit treina o modelo." },
      { objective: "O5", q: "Que linha dá as previsões para o conjunto de teste?", options: ["model.fit(X_test)", "accuracy_score(X_test)", "model.predict(X_test)", "train_test_split(model)"], answer: 2, why: "predict usa o modelo treinado com dados novos." },
      { objective: "O5", q: "Porque se define random_state=42?", options: ["Para os resultados serem iguais em cada execução", "Para o modelo ficar 42% melhor", "Para usar 42 linhas", "É obrigatório para correr Python"], answer: 0, why: "Fixa a mistura ao acaso." },
      { objective: "O5", q: "Uma árvore de decisão é como:", options: ["Uma votação de vizinhos", "Um total de folha de cálculo", "Um palpite ao acaso", "Um fluxograma de perguntas de sim ou não"], answer: 3, why: "As árvores dividem os dados com perguntas." },
      { objective: "O6", q: "Para prever uma flor nova, escreve:", options: ["model.predict(5.1, 3.5, 1.4, 0.2)", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "model.fit([5.1])", "predict.model(5.1)"], answer: 1, why: "O modelo espera uma lista de linhas, por isso uma linha vai dentro de outra lista." },
      { objective: "O6", q: "Dois modelos têm 93% e 97% no mesmo conjunto de teste. Um bom passo seguinte é:", options: ["Apagar os dois", "Escolher o de 97% e pensar também nos seus limites e no custo dos erros", "Treinar outra vez com o conjunto de teste", "Escolher o mais lento"], answer: 1, why: "Compare de forma justa e depois pese os limites e o custo dos erros." },
      { objective: "O6", q: "Antes de usar um modelo que toma decisões sobre pessoas, você deve:", options: ["Saltar o teste", "Esconder como funciona", "Usar só os dados de treino", "Verificar se funciona de forma justa para todos os grupos"], answer: 3, why: "Verificar a justiça protege as pessoas que o modelo afeta." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 3, 6, 8, 10, 11, 13, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Carregar e dividir os dados", objective: "O5", notYet: "Os dados não carregam, ou o modelo é testado com os dados de treino.", meets: "Os dados iris são carregados e divididos em conjunto de treino e de teste com train_test_split.", exceeds: "Também mostra o shape de cada conjunto e explica a divisão." },
      { name: "Dois modelos treinados e testados", objective: "O5", notYet: "Só um modelo é treinado, ou falta a exatidão.", meets: "Uma árvore de decisão e um modelo KNN são treinados, e a exatidão de teste de cada um é mostrada.", exceeds: "Também experimenta um segundo valor de n_neighbors e compara." },
      { name: "Previsão para uma flor nova", objective: "O6", notYet: "Não há previsão, ou os dados de entrada estão na forma errada.", meets: "O melhor modelo prevê uma flor nova e o nome da espécie é mostrado.", exceeds: "Também explica porque a previsão faz sentido a partir das medidas." },
      { name: "Escolha e limites", objective: "O6", notYet: "Faltam as duas frases, ou não é indicado nenhum limite real.", meets: "Duas frases: que modelo e porquê, e um limite real.", exceeds: "Também fala do custo dos erros ou da justiça com dados sobre pessoas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter treinado um modelo com outro conjunto de dados nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que seguem para um curso seguinte, como Aprendizagem Profunda ou Ciência de Dados para Principiantes",
      "Alunos que juntam o caderno a um portefólio, a um projeto escolar ou a uma candidatura de emprego"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou portátil com navegador de internet",
      "Uma conta Google gratuita para usar o Google Colab (o scikit-learn já vem instalado)",
      "Papel e caneta para desenhar as características e os rótulos na tarefa do conjunto de dados",
      "Cerca de 60 a 75 minutos no total, mais o tempo de prática"
    ],
    facilitatorNotes: [
      "Antes da aula, confirme que os alunos conseguem abrir o Google Colab; algumas contas escolares bloqueiam-no.",
      "Façam em grupo, em papel, a atividade do conjunto de dados do autocarro atrasado ou dos trabalhos de casa, antes de qualquer código.",
      "Peça aos alunos para comparar as exatidões no quadro; valores diferentes de random_state dão resultados diferentes, o que dá uma boa discussão.",
      "Fale abertamente sobre justiça: pergunte o que pode correr mal se um modelo como este tomasse decisões sobre pessoas.",
      "Incentive os pares a explicar um ao outro cada linha de código antes de a correr."
    ]
  }
};
