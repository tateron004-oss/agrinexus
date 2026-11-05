"use strict";

// Koach Learn course (Portuguese translation of shared/excel-spreadsheets.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Formulas stay in English as written, with the Portuguese Excel name given (SUM = SOMA, AVERAGE = MÉDIA, IF = SE). Menu names are the Portuguese (Portugal) versions.

module.exports = {
  id: "excel-spreadsheets-pt",
  lang: "pt",
  translationOf: "excel-spreadsheets",
  category: "Small Business",
  name: "Excel e Folhas de Cálculo para o Trabalho",
  skills: "Introduzir e formatar dados, Somar totais e médias com SUM e AVERAGE, Tomar decisões com IF, Ordenar e filtrar, Fazer um gráfico simples, Fixar os cabeçalhos e partilhar uma folha",
  outcome: "construir uma folha de cálculo de trabalho organizada no Excel ou no Google Sheets: introduzir e formatar dados, somar totais e médias com fórmulas, classificar linhas com IF, ordenar e filtrar, fazer um gráfico simples, fixar a linha de cabeçalhos e partilhá-la com segurança com um colega.",
  about: [
    "As folhas de cálculo são usadas em quase todos os locais de trabalho: uma loja regista as vendas, uma organização sem fins lucrativos regista os donativos e as horas dos voluntários, um chefe de equipa regista os turnos e uma família regista o orçamento. Saber usá-las bem é uma competência que os empregadores pedem.",
    "Este curso funciona no Microsoft Excel (num computador, ou grátis na internet em office.com com uma conta Microsoft) e no Google Sheets (grátis com uma conta Google em sheets.google.com). As fórmulas são iguais nos dois. Quando os menus têm nomes diferentes, a lição dá os dois nomes ou descreve a ação.",
    "Os nomes das funções aparecem em inglês. Se o seu Excel estiver em português, a função tem um nome traduzido, por exemplo SUM (no Excel em português: SOMA); a lição dá os dois. Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" numa folha de cálculo verdadeira. Vai construir uma única folha de prática ao longo do curso. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Construa uma folha de \"Vendas da semana\" (ou \"Horas de voluntariado\" ou \"Horas por turno\") com pelo menos 8 linhas: cabeçalhos a negrito, o dinheiro em formato de moeda, um total com SUM (SOMA) e uma média com AVERAGE (MÉDIA), uma coluna com IF (SE) que classifica cada linha (por exemplo \"Meta atingida\" ou \"Abaixo da meta\"), os dados ordenados do maior para o menor, um filtro na linha de cabeçalhos, um gráfico de colunas, a linha de cima fixa e o ficheiro partilhado com uma pessoa como leitor.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios, os seus funcionários, pessoas à procura de emprego e voluntários que precisam de registar vendas, horas, stock ou donativos no trabalho. Muitos já viram folhas de cálculo, mas nunca construíram uma do zero.",
    startingPoint: "Sabem usar um computador ou um telefone, escrever e abrir um navegador de internet. Usam pouco ou nada as fórmulas, a ordenação, os gráficos ou as definições de partilha.",
    gap: "Muitos empregos e pequenos negócios esperam competências básicas de folhas de cálculo, e os registos em papel ou em folhas desorganizadas causam erros. Construir uma folha organizada com totais, classificações, um gráfico e partilha segura poupa tempo e ajuda o aluno a conseguir emprego.",
    constraints: [
      "Nível de leitura: palavras simples e passos curtos",
      "Aparelhos: um computador com Excel, Excel na internet ou Google Sheets funciona melhor; num telefone é mais difícil",
      "Tempo: cerca de 5 minutos por lição, mais a prática",
      "Os menus são um pouco diferentes no Excel e no Google Sheets; mostram-se os dois",
      "Privacidade: nada de palavras-passe, números da Segurança Social ou dados bancários na prática nem nas folhas partilhadas"
    ],
    prerequisites: "Nenhum. Quem é novo nos computadores pode fazer primeiro um curso de competências básicas de informática."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Num ficheiro em branco do Excel ou do Google Sheets", action: "introduzir uma pequena tabela com os cabeçalhos na linha 1 e um registo em cada linha", standard: "com um só tipo de dados por coluna" },
    { id: "O2", condition: "Com uma tabela de dados", action: "formatar os cabeçalhos a negrito, o dinheiro como moeda e ajustar a largura das colunas", standard: "para que se leia com clareza num relance" },
    { id: "O3", condition: "Com uma coluna de números", action: "escrever fórmulas SUM, AVERAGE e de linha e copiá-las para baixo com a marca de preenchimento", standard: "com resultados certos e sem mensagens de erro" },
    { id: "O4", condition: "Com uma regra, como uma meta de vendas ou 40 horas", action: "escrever uma fórmula IF que classifica cada linha", standard: "com a classificação certa em todas as linhas" },
    { id: "O5", condition: "Com uma tabela de pelo menos 8 linhas", action: "ordenar a tabela inteira, acrescentar um filtro e fixar a linha de cabeçalhos", standard: "sem misturar nenhuma linha" },
    { id: "O6", condition: "Com classificações e números", action: "fazer um gráfico de colunas e partilhar o ficheiro com o menor acesso de que a pessoa precisa", standard: "sem nenhuma informação privada na folha partilhada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Construir a sua folha",
      lessons: [
        {
          objectives: ["O1"],
          title: "Células, linhas, colunas e introduzir dados",
          minutes: 5,
          goal: "Abrir uma folha de cálculo nova e introduzir uma pequena tabela de dados com cabeçalhos.",
          text: [
            "Uma folha de cálculo é uma grelha. As colunas vão de cima para baixo e têm letras (A, B, C). As linhas vão de um lado ao outro e têm números (1, 2, 3). Cada caixa é uma célula, com o nome da sua coluna e da sua linha: a célula do canto de cima à esquerda é a A1. Um ficheiro pode ter várias folhas, que aparecem como separadores em baixo.",
            "Para introduzir dados, clique numa célula, escreva e carregue em Enter para descer ou em Tab para ir para a direita. Ponha os cabeçalhos na linha 1, como Data, Artigo, Quantidade e Preço, e um registo em cada linha abaixo. Mantenha um só tipo de dados por coluna: só datas na coluna Data, só números na coluna Preço.",
            "Para corrigir uma célula, clique nela e escreva por cima, ou faça duplo clique para mudar só uma parte. Anular (Ctrl+Z no Windows, Cmd+Z num Mac) desfaz a sua última mudança. O Excel na internet e o Google Sheets guardam enquanto trabalha; no Excel do computador, guarde muitas vezes.",
            "Para começar: no Google Sheets, vá a sheets.google.com e escolha uma folha de cálculo em branco. No Excel, abra o Excel (ou o Excel na internet em office.com) e escolha um livro em branco."
          ],
          steps: ["Abra uma folha de cálculo em branco no Google Sheets ou no Excel.", "Clique na célula A1 e escreva o primeiro cabeçalho. Carregue em Tab para ir para a direita.", "Escreva os outros cabeçalhos na linha 1.", "Introduza um registo por linha, a começar na linha 2.", "Dê ao ficheiro um nome claro, como \"Vendas da semana - março\"."],
          words: [["Célula", "uma caixa da grelha, com o nome da letra da coluna e do número da linha, como B3."], ["Cabeçalho", "a etiqueta no topo de uma coluna que diz o que está nela."], ["Livro", "um ficheiro do Excel (em inglês, \"workbook\"); pode ter várias folhas."]],
          slides: [
            { title: "A grelha", bullets: ["As colunas têm letras; as linhas têm números", "Uma célula chama-se, por exemplo, A1 ou B3", "Os separadores em baixo são folhas diferentes"] },
            { title: "Introduzir dados", bullets: ["Clique, escreva e depois Enter (para baixo) ou Tab (para a direita)", "Cabeçalhos na linha 1", "Um registo por linha, um tipo de dados por coluna"] },
            { title: "Corrigir e guardar", bullets: ["Escreva por cima de uma célula ou faça duplo clique para mudar", "Anular: Ctrl+Z (Windows) ou Cmd+Z (Mac)", "As versões na internet guardam enquanto trabalha"] }
          ],
          tryIt: "Abra uma folha de cálculo em branco. Na linha 1 escreva os cabeçalhos Dia, Artigo, Quantidade, Preço. Introduza 8 linhas de vendas de prática (por exemplo Seg, Café, 12, 3.50). Dê ao ficheiro o nome \"Vendas de prática\".",
          youCanNow: "abrir uma folha de cálculo, encontrar qualquer célula pelo nome e introduzir uma tabela organizada com cabeçalhos.",
          quickCheck: [
            { objective: "O1", q: "O que é uma célula?", options: ["Uma coluna inteira", "Um separador em baixo no ficheiro", "Uma caixa da grelha, com o nome da sua coluna e da sua linha", "O nome do ficheiro"], answer: 2, why: "Cada caixa da grelha é uma célula, com o nome da letra da coluna e do número da linha, como A1." },
            { objective: "O1", q: "Está a fazer uma lista de preços. O que vai na coluna Preço?", options: ["Preços e nomes de artigos misturados", "Só preços", "Preços e notas sobre cada cliente", "Qualquer coisa que caiba"], answer: 1, why: "Mantenha um só tipo de dados por coluna, por isso a coluna Preço tem só números." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Formatar para ser fácil de ler",
          minutes: 4,
          goal: "Formatar os cabeçalhos, o dinheiro e a largura das colunas para a folha ficar clara.",
          text: [
            "Formatar muda o aspeto dos dados, não o que eles são. Uma boa formatação torna a folha fácil de ler num relance.",
            "Ponha os cabeçalhos a negrito: selecione a linha 1 e clique no botão Negrito na barra de ferramentas (B, ou N em algumas versões em português), ou carregue em Ctrl+B (Cmd+B num Mac). Também pode dar uma cor de preenchimento à linha de cabeçalhos.",
            "Mostre o dinheiro como moeda: selecione a coluna Preço, abra o menu de formato de número e escolha Moeda. No Excel isto está no separador Base; no Google Sheets está em Formatar, depois Número, e há também um botão de moeda na barra de ferramentas.",
            "Ajuste as colunas: faça duplo clique na linha entre duas letras de coluna, no topo, e a coluna da esquerda fica com a largura da sua entrada mais comprida. Isto funciona no Excel e no Google Sheets."
          ],
          steps: ["Selecione a linha 1 clicando no número 1 à esquerda.", "Clique em Negrito (B ou N) ou carregue em Ctrl+B.", "Selecione a coluna Preço clicando na sua letra.", "Escolha Moeda no menu de formato de número (Excel: separador Base; Sheets: Formatar > Número, ou o botão de moeda).", "Faça duplo clique na linha entre as letras das colunas para ajustar a largura."],
          words: [["Formatar", "mudar o aspeto dos dados (negrito, cor, moeda) sem mudar o valor."], ["Selecionar", "clicar ou arrastar sobre as células para as escolher antes de fazer alguma coisa com elas."]],
          slides: [
            { title: "Formatar muda o aspeto", bullets: ["Não o valor que está dentro", "Torna a folha fácil de ler"] },
            { title: "Cabeçalhos a negrito", bullets: ["Selecione a linha 1", "Clique em Negrito ou carregue em Ctrl+B (Cmd+B no Mac)", "Se quiser, acrescente uma cor de preenchimento"] },
            { title: "Dinheiro como moeda", bullets: ["Selecione a coluna", "Excel: menu de formato de número no separador Base", "Sheets: Formatar > Número, ou o botão de moeda"] },
            { title: "Ajustar as colunas", bullets: ["Duplo clique na linha entre as letras das colunas", "Funciona no Excel e no Google Sheets"] }
          ],
          tryIt: "Na sua folha Vendas de prática, ponha a linha 1 a negrito com uma cor de preenchimento clara, mostre a coluna Preço como moeda e ajuste a largura de todas as colunas.",
          youCanNow: "formatar os cabeçalhos, o dinheiro e a largura das colunas para a folha ficar clara e profissional.",
          quickCheck: [
            { objective: "O2", q: "O que muda a formatação?", options: ["O aspeto dos dados, não o que eles são", "Os números nas suas células", "As fórmulas da sua folha", "Quem pode abrir o ficheiro"], answer: 0, why: "A formatação muda o aspeto dos dados, como o negrito ou a moeda, não o valor." },
            { objective: "O2", q: "Uma coluna é estreita demais e corta o texto. O que faz?", options: ["Apaga as entradas compridas", "Põe a letra minúscula", "Escreve o texto de novo em duas células", "Faz duplo clique na linha entre as letras das colunas, no topo"], answer: 3, why: "O duplo clique na linha ajusta a coluna à sua entrada mais comprida." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Totais e médias com SUM e AVERAGE",
          minutes: 5,
          goal: "Escrever fórmulas SUM e AVERAGE e copiar uma fórmula para baixo numa coluna.",
          text: [
            "Uma fórmula começa sempre com o sinal de igual (=). Pode fazer contas com os nomes das células: =C2*D2 multiplica a quantidade em C2 pelo preço em D2. Se mudar C2, o resultado atualiza-se sozinho.",
            "SUM (no Excel em português: SOMA) soma um intervalo de células. Um intervalo escreve-se assim: primeira célula, dois pontos, última célula: =SUM(E2:E9) soma de E2 a E9. AVERAGE (no Excel em português: MÉDIA) calcula a média: =AVERAGE(E2:E9). As duas funcionam da mesma forma no Excel e no Google Sheets. Num Excel em português escreve =SOMA(E2:E9) e =MÉDIA(E2:E9).",
            "Para copiar uma fórmula para baixo numa coluna, clique na célula com a fórmula e arraste para baixo o pequeno quadrado no canto de baixo à direita (a marca de preenchimento). Os nomes das células mudam em cada linha: E2 passa a E3, E4 e assim por diante.",
            "Verifique o seu trabalho: se uma fórmula mostrar um erro como #NAME? ou #VALUE! (no Excel em português: #NOME? ou #VALOR!), procure um erro no nome da função ou texto numa coluna de números."
          ],
          steps: ["Em E1 escreva o cabeçalho Total.", "Em E2 escreva =C2*D2 e carregue em Enter.", "Arraste a marca de preenchimento de E2 até à última linha.", "Abaixo da última linha, escreva =SUM(E2:E9) (em português: =SOMA(E2:E9)) para o total geral.", "Por baixo, escreva =AVERAGE(E2:E9) (em português: =MÉDIA(E2:E9)) para a venda média."],
          words: [["Fórmula", "um cálculo numa célula que começa com = e se atualiza quando os dados mudam."], ["Intervalo", "um bloco de células escrito primeira:última, como E2:E9."], ["Marca de preenchimento", "o pequeno quadrado no canto de baixo à direita de uma célula selecionada, que se arrasta para copiar."]],
          slides: [
            { title: "As fórmulas começam com =", bullets: ["=C2*D2 multiplica duas células", "Mude os dados e o resultado atualiza-se"] },
            { title: "SUM e AVERAGE", bullets: ["=SUM(E2:E9) soma um intervalo (em português: SOMA)", "=AVERAGE(E2:E9) calcula a média (em português: MÉDIA)", "Igual no Excel e no Google Sheets"] },
            { title: "Copiar uma fórmula para baixo", bullets: ["Arraste a marca de preenchimento no canto da célula", "Os nomes das células ajustam-se a cada linha"] },
            { title: "Erros", bullets: ["#NAME? (#NOME?): verifique a escrita", "#VALUE! (#VALOR!): texto onde devia estar um número"] }
          ],
          tryIt: "Na sua folha, acrescente uma coluna Total com =C2*D2 copiada para baixo e depois, por baixo da coluna, um total geral com SUM (SOMA) e a venda média com AVERAGE (MÉDIA). Mude uma quantidade e veja os totais a atualizar.",
          youCanNow: "escrever fórmulas SUM e AVERAGE (SOMA e MÉDIA), multiplicar células e copiar uma fórmula para baixo numa coluna.",
          quickCheck: [
            { objective: "O3", q: "O que faz =C2*D2?", options: ["Soma C2 e D2", "Multiplica o valor em C2 pelo valor em D2", "Copia C2 para D2", "Mostra um erro"], answer: 1, why: "O sinal * multiplica, por isso =C2*D2 multiplica a quantidade pelo preço." },
            { objective: "O3", q: "Precisa do total de E2 a E9. O que escreve?", options: ["SUM E2 a E9", "=E2+E9", "=SUM(E2:E9)", "=TOTAL E2-E9"], answer: 2, why: "SUM soma um intervalo escrito primeira célula, dois pontos, última célula, e todas as fórmulas começam com =. No Excel em português é =SOMA(E2:E9)." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Construir a sua folha",
        questions: [
          { objective: "O1", q: "Qual é o nome da célula na coluna C, linha 4?", options: ["4C", "C4", "Linha C", "Célula 34"], answer: 1, why: "Uma célula tem o nome da letra da coluna e depois o número da linha." },
          { objective: "O1", q: "Onde devem ficar os seus cabeçalhos?", options: ["Na linha 1, um por coluna", "Em baixo", "Em células ao acaso", "Num ficheiro à parte"], answer: 0, why: "Os cabeçalhos na linha 1 dão nome a cada coluna de dados abaixo." },
          { objective: "O2", q: "Quer que os preços apareçam com o símbolo da moeda. O que faz?", options: ["Escreve o símbolo antes de cada número", "Põe a coluna a negrito", "Apaga os preços", "Escolhe Moeda no menu de formato de número"], answer: 3, why: "O formato de moeda acrescenta o símbolo e as casas decimais em todas as células." },
          { objective: "O3", q: "Que fórmula soma as células de B2 a B10?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "As fórmulas começam com = e um intervalo usa dois pontos. No Excel em português é =SOMA(B2:B10)." },
          { objective: "O3", q: "O que acontece quando arrasta para baixo a marca de preenchimento de uma célula com =C2*D2?", options: ["A fórmula é copiada e ajusta-se a cada linha", "A célula é apagada", "Todas as linhas ficam exatamente com =C2*D2", "A folha é partilhada"], answer: 0, why: "Os nomes das células mudam linha a linha: C3*D3, C4*D4 e assim por diante." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabalhar com os seus dados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tomar decisões com IF",
          minutes: 5,
          goal: "Escrever uma fórmula IF que classifica cada linha segundo uma regra.",
          text: [
            "IF (no Excel em português: SE) verifica uma condição e mostra um resultado se for verdadeira e outro se for falsa. O modelo é =IF(teste, valor se verdadeiro, valor se falso).",
            "Exemplos: =IF(E2>=50,\"Goal met\",\"Below goal\") classifica uma venda. =IF(C2>40,\"Overtime\",\"Regular\") classifica uma semana de horas. =IF(D2=\"\",\"Missing\",\"OK\") assinala uma célula vazia. Pode trocar as palavras entre aspas pelas suas, por exemplo \"Meta atingida\". As respostas em texto vão entre aspas; os números não.",
            "Sinais de comparação: > maior que, < menor que, >= maior ou igual a, <= menor ou igual a, = igual a, <> diferente de.",
            "IF funciona da mesma forma no Excel e no Google Sheets. Se a definição de região da sua folha usar a vírgula para as casas decimais, como em Moçambique e Angola, o separador pode ser o ponto e vírgula (;) em vez da vírgula; a aplicação mostra-lhe o modelo enquanto escreve. Num Excel em português escreve =SE(...)."
          ],
          steps: ["Acrescente um cabeçalho, como Estado, na próxima coluna vazia.", "Na linha 2 escreva =IF(", "Escreva o teste, como E2>=50, e depois uma vírgula.", "Escreva o resultado verdadeiro entre aspas, uma vírgula, o resultado falso entre aspas e ).", "Carregue em Enter e copie a fórmula para baixo com a marca de preenchimento."],
          words: [["IF (SE)", "uma função que mostra um resultado quando um teste é verdadeiro e outro quando é falso."], ["Condição", "o teste numa fórmula IF, como E2>=50."]],
          slides: [
            { title: "O modelo de IF", bullets: ["=IF(teste, se verdadeiro, se falso)", "Igual no Excel e no Google Sheets (em português: SE)"] },
            { title: "Exemplos", bullets: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(C2>40,\"Overtime\",\"Regular\")", "Texto entre aspas; números sem aspas"] },
            { title: "Sinais de comparação", bullets: ["> maior, < menor", ">= pelo menos, <= no máximo", "= igual, <> diferente"] }
          ],
          tryIt: "Acrescente à sua folha uma coluna Estado com =IF(E2>=50,\"Meta atingida\",\"Abaixo da meta\") e copie-a para baixo. Mude um total para passar dos 50 e veja a classificação mudar.",
          youCanNow: "escrever uma fórmula IF que classifica as linhas automaticamente segundo uma regra.",
          quickCheck: [
            { objective: "O4", q: "O que faz a função IF?", options: ["Soma uma coluna de números", "Ordena a tabela", "Faz um gráfico", "Mostra um resultado se um teste for verdadeiro e outro se for falso"], answer: 3, why: "O modelo é =IF(teste, valor se verdadeiro, valor se falso)." },
            { objective: "O4", q: "Quer classificar as vendas de 50 ou mais como \"Goal met\". Que fórmula escreve na linha 2?", options: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(E2<50,Goal met,Below goal)", "=SUM(E2>=50)", "=IF(\"Goal met\")"], answer: 0, why: "O teste E2>=50 vem primeiro, e os resultados em texto vão entre aspas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ordenar, filtrar e fixar a linha de cabeçalhos",
          minutes: 5,
          goal: "Ordenar os seus dados, filtrá-los para mostrar só algumas linhas e fixar a linha de cabeçalhos.",
          text: [
            "Ordenar põe as linhas em ordem, como a maior venda primeiro ou os nomes de A a Z. Filtrar esconde as linhas de que não precisa agora, como mostrar só as linhas \"Abaixo da meta\". Nenhum dos dois apaga dados.",
            "Excel: clique em qualquer célula da tabela, vá ao separador Dados e escolha Ordenar para escolher uma coluna e uma ordem, ou escolha Filtrar para pôr setas na linha de cabeçalhos. Google Sheets: selecione os dados, abra o menu Dados e escolha Ordenar intervalo (marque que os dados têm uma linha de cabeçalho), ou escolha Criar um filtro para pôr as setas. Clique numa seta de um cabeçalho para ordenar ou para marcar só os valores que quer ver.",
            "Ordene sempre a tabela inteira, nunca uma coluna sozinha, senão as linhas ficam misturadas. Selecionar uma célula dentro da tabela no Excel, ou o intervalo todo no Sheets, mantém as linhas juntas.",
            "Fixar mantém a linha de cabeçalhos no ecrã quando desce numa lista comprida. Excel: separador Ver, Fixar Painéis e depois Fixar Linha de Cima. Google Sheets: menu Ver, Fixar e depois 1 linha."
          ],
          steps: ["Clique dentro da tabela (Excel) ou selecione a tabela inteira (Sheets).", "Ordenar: Excel separador Dados > Ordenar; Sheets Dados > Ordenar intervalo, com linha de cabeçalho.", "Filtrar: Excel separador Dados > Filtrar; Sheets Dados > Criar um filtro.", "Use a seta de um cabeçalho para mostrar só as linhas que quer.", "Fixar: Excel Ver > Fixar Painéis > Fixar Linha de Cima; Sheets Ver > Fixar > 1 linha."],
          words: [["Ordenar", "pôr as linhas em ordem segundo uma coluna, mantendo cada linha junta."], ["Filtrar", "esconder as linhas que não correspondem ao que escolhe, sem as apagar."], ["Fixar", "manter linhas ou colunas no ecrã enquanto desce ou anda para o lado."]],
          slides: [
            { title: "Ordenar e filtrar", bullets: ["Ordenar: pôr as linhas em ordem", "Filtrar: mostrar só as linhas que quer", "Nenhum dos dois apaga dados"] },
            { title: "No Excel", bullets: ["Separador Dados > Ordenar", "Separador Dados > Filtrar põe setas nos cabeçalhos", "Ver > Fixar Painéis > Fixar Linha de Cima"] },
            { title: "No Google Sheets", bullets: ["Dados > Ordenar intervalo (os dados têm linha de cabeçalho)", "Dados > Criar um filtro", "Ver > Fixar > 1 linha"] },
            { title: "Manter as linhas juntas", bullets: ["Ordene a tabela inteira, nunca uma coluna sozinha"] }
          ],
          tryIt: "Ordene a sua folha por Total, do maior para o menor. Acrescente um filtro e mostre só as linhas \"Abaixo da meta\"; depois limpe o filtro. Fixe a linha de cima e desça para confirmar que os cabeçalhos ficam no ecrã.",
          youCanNow: "ordenar e filtrar dados com segurança e fixar a linha de cabeçalhos.",
          quickCheck: [
            { objective: "O5", q: "O que faz fixar a linha de cabeçalhos?", options: ["Bloqueia o ficheiro para ninguém o editar", "Mantém a linha de cabeçalhos no ecrã quando desce", "Apaga as linhas abaixo", "Pinta o cabeçalho de azul"], answer: 1, why: "Fixar mantém o cabeçalho visível enquanto desce numa lista comprida." },
            { objective: "O5", q: "Quer ver só as linhas \"Abaixo da meta\" por agora, sem perder dados. O que usa?", options: ["Apaga as outras linhas", "Ordena uma coluna sozinha", "Um filtro na linha de cabeçalhos", "Fixar Painéis"], answer: 2, why: "Um filtro esconde as linhas de que não precisa agora e não apaga nada." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer um gráfico e partilhar a sua folha",
          minutes: 5,
          goal: "Fazer um gráfico de colunas simples e partilhar a folha com a permissão certa.",
          text: [
            "Um gráfico transforma números numa imagem. Um gráfico de colunas é bom para comparar quantidades, como as vendas por dia ou as horas de voluntariado por pessoa.",
            "Selecione duas colunas: as etiquetas (como Dia) e os números (como Total), com os cabeçalhos. Para selecionar duas colunas que não estão lado a lado, mantenha carregada a tecla Ctrl (Cmd num Mac) enquanto seleciona a segunda. Excel: vá ao separador Inserir e escolha um gráfico de colunas (ou Gráficos Recomendados). Google Sheets: abra o menu Inserir e escolha Gráfico; o editor de gráficos abre-se à direita, onde pode escolher Gráfico de colunas. Clique no título do gráfico para lhe mudar o nome.",
            "Para partilhar: no Google Sheets, clique no botão Partilhar no canto de cima à direita, escreva o email da pessoa e escolha Leitor, Comentador ou Editor. No Excel, o ficheiro tem de estar guardado no OneDrive ou no SharePoint; depois clique em Partilhar, acrescente o email e escolha se a pessoa pode editar ou só ver.",
            "Partilhe com segurança: dê o menor acesso de que a pessoa precisa (só ver, se ela só precisa de ler), e nunca ponha palavras-passe, números da Segurança Social ou dados bancários numa folha partilhada."
          ],
          steps: ["Selecione a coluna das etiquetas e a coluna dos números, com os cabeçalhos.", "Excel: separador Inserir > um gráfico de colunas. Sheets: Inserir > Gráfico e depois escolha Gráfico de colunas.", "Mude o nome do título do gráfico.", "Clique em Partilhar e acrescente o email da pessoa.", "Escolha só ver, a não ser que a pessoa precise de editar, e depois envie."],
          words: [["Gráfico de colunas", "um gráfico com barras de pé, bom para comparar quantidades."], ["Leitor", "alguém que pode ver um ficheiro partilhado, mas não o pode mudar."], ["Editor", "alguém que pode mudar um ficheiro partilhado."]],
          slides: [
            { title: "Escolha o gráfico certo", bullets: ["Gráfico de colunas: comparar quantidades", "Exemplo: vendas por dia, horas por pessoa"] },
            { title: "Fazer o gráfico", bullets: ["Selecione as etiquetas e os números com os cabeçalhos", "Excel: separador Inserir > gráfico de colunas", "Sheets: Inserir > Gráfico > Gráfico de colunas"] },
            { title: "Partilhar", bullets: ["Clique em Partilhar e acrescente um email", "Escolha ver ou editar", "Os ficheiros do Excel têm de estar no OneDrive ou no SharePoint"] },
            { title: "Partilhar com segurança", bullets: ["Dê o menor acesso necessário", "Nada de palavras-passe, números de identificação ou do banco em folhas partilhadas"] }
          ],
          tryIt: "Tarefa final: termine a sua folha com pelo menos 8 linhas, cabeçalhos a negrito, moeda, SUM e AVERAGE (SOMA e MÉDIA), uma coluna Estado com IF (SE), ordenada do maior para o menor, um filtro, um gráfico de colunas de Dia e Total e a linha de cima fixa. Depois partilhe-a com uma pessoa como leitor.",
          youCanNow: "fazer um gráfico de colunas a partir dos seus dados e partilhar uma folha de cálculo com a permissão certa.",
          quickCheck: [
            { objective: "O6", q: "Que gráfico é bom para comparar quantidades, como as horas por pessoa?", options: ["Um gráfico de colunas", "Uma folha em branco", "Um filtro", "Uma linha fixa"], answer: 0, why: "A lição diz que um gráfico de colunas é bom para comparar quantidades." },
            { objective: "O6", q: "O seu chefe só precisa de ler a sua folha. Que acesso lhe dá quando a partilha?", options: ["Editor", "Proprietário", "Qualquer pessoa com o link pode editar", "Leitor"], answer: 3, why: "Dê o menor acesso de que a pessoa precisa; só ver, se ela só precisa de ler." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Trabalhar com os seus dados",
        questions: [
          { objective: "O4", q: "O que mostra =IF(C2>40,\"Overtime\",\"Regular\") quando C2 é 45?", options: ["Regular", "45", "Overtime", "Um erro"], answer: 2, why: "45 é maior que 40, por isso aparece o resultado verdadeiro." },
          { objective: "O4", q: "Numa fórmula IF, onde ficam os resultados em texto?", options: ["Entre aspas", "Entre parênteses retos", "Depois de um sinal #", "Em lado nenhum"], answer: 0, why: "Os resultados em texto têm de estar entre aspas." },
          { objective: "O5", q: "O que faz um filtro?", options: ["Apaga linhas", "Muda os números", "Partilha o ficheiro", "Esconde as linhas que não correspondem, sem as apagar"], answer: 3, why: "Filtrar só esconde linhas; quando limpa o filtro, elas voltam a aparecer." },
          { objective: "O5", q: "Como mantém a linha de cabeçalhos no ecrã no Google Sheets?", options: ["Formatar > Negrito", "Ver > Fixar > 1 linha", "Inserir > Gráfico", "Dados > Ordenar intervalo"], answer: 1, why: "Fixar a linha 1 mantém-na visível enquanto desce." },
          { objective: "O6", q: "Um voluntário só precisa de ler a sua folha. Que acesso lhe dá?", options: ["Editor", "Proprietário", "Leitor", "Nenhum; envia a sua palavra-passe"], answer: 2, why: "Dê o menor acesso de que a pessoa precisa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Excel e Folhas de Cálculo para o Trabalho",
    questions: [
      { objective: "O1", q: "Numa folha de cálculo, as colunas são marcadas com:", options: ["Números", "Letras", "Cores", "Datas"], answer: 1, why: "As colunas usam letras; as linhas usam números." },
      { objective: "O1", q: "Que tecla leva você uma célula para a direita depois de escrever?", options: ["Tab", "Enter", "Shift", "Esc"], answer: 0, why: "Tab vai para a direita; Enter vai para baixo." },
      { objective: "O1", q: "Qual é a melhor organização para uma lista de donativos?", options: ["Cada donativo num ficheiro diferente", "Todos os dados numa só célula", "Células ao acaso pela folha", "Cabeçalhos na linha 1 e um donativo por linha"], answer: 3, why: "Um registo por linha, com cabeçalhos claros, mantém os dados fáceis de usar." },
      { objective: "O1", q: "Escreveu o número errado. A forma mais rápida de desfazer a sua última mudança é:", options: ["Fechar o ficheiro", "Anular: Ctrl+Z (Cmd+Z no Mac)", "Apagar a coluna", "Começar um ficheiro novo"], answer: 1, why: "Anular desfaz a sua última ação." },
      { objective: "O2", q: "Formatar um número como moeda:", options: ["Muda o aspeto, não o valor", "Duplica o valor", "Apaga o número", "Transforma-o em texto que não se pode somar"], answer: 0, why: "A formatação só muda o aspeto." },
      { objective: "O2", q: "Como faz uma coluna ficar com a largura da sua entrada mais comprida?", options: ["Escreve espaços", "Apaga o cabeçalho", "Faz duplo clique na linha entre as letras das colunas", "Carrega duas vezes em Enter"], answer: 2, why: "O duplo clique na linha ajusta a coluna automaticamente." },
      { objective: "O3", q: "Todas as fórmulas começam com:", options: ["Só um sinal de mais", "Um cifrão", "Uma letra", "Um sinal de igual"], answer: 3, why: "O = diz à aplicação que é uma fórmula." },
      { objective: "O3", q: "Qual calcula a média de D2 a D20?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE com um intervalo escrito primeira:última. No Excel em português é =MÉDIA(D2:D20)." },
      { objective: "O3", q: "Muda uma quantidade usada por uma fórmula SUM. O que acontece ao total?", options: ["Nada", "Atualiza-se sozinho", "Mostra um erro", "É apagado"], answer: 1, why: "As fórmulas recalculam quando os seus dados mudam." },
      { objective: "O3", q: "Uma célula mostra #NAME? (#NOME?). Qual é a causa provável?", options: ["O ficheiro está partilhado", "A coluna está a negrito", "O nome da função está mal escrito", "A folha está fixa"], answer: 2, why: "#NAME? quer dizer normalmente que a aplicação não reconhece o nome da função." },
      { objective: "O3", q: "O que é a marca de preenchimento?", options: ["Um menu", "O pequeno quadrado no canto de baixo à direita de uma célula, usado para copiar", "O botão Partilhar", "Um tipo de gráfico"], answer: 1, why: "Arrastá-la copia a fórmula e ajusta os nomes das células." },
      { objective: "O4", q: "Que fórmula mostra \"Missing\" quando D2 está vazia e \"OK\" quando não está?", options: ["=IF(D2=\"\",\"Missing\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Missing)", "=AVERAGE(\"Missing\")"], answer: 0, why: "O teste D2=\"\" verifica se a célula está vazia." },
      { objective: "O4", q: "O que quer dizer <> numa fórmula?", options: ["Maior que", "Igual a", "Menor que", "Diferente de"], answer: 3, why: "<> quer dizer diferente de." },
      { objective: "O5", q: "No Excel, onde estão Ordenar e Filtrar?", options: ["Separador Ficheiro", "Separador Dados", "Separador Ajuda", "Separador Desenhar"], answer: 1, why: "Ordenar e Filtrar estão no separador Dados do Excel." },
      { objective: "O5", q: "No Google Sheets, como põe setas de filtro na linha de cabeçalhos?", options: ["Dados > Criar um filtro", "Inserir > Gráfico", "Formatar > Número", "Ficheiro > Partilhar"], answer: 0, why: "Criar um filtro põe setas em cada cabeçalho." },
      { objective: "O5", q: "Porque nunca deve ordenar só uma coluna de uma tabela?", options: ["É lento demais", "Apaga a folha", "As linhas ficam misturadas", "Partilha o ficheiro"], answer: 2, why: "Ordenar uma coluna sozinha separa os valores do resto da sua linha." },
      { objective: "O5", q: "No Excel, como mantém a linha 1 visível enquanto desce?", options: ["Inserir > Gráfico", "Base > Negrito", "Dados > Filtrar", "Ver > Fixar Painéis > Fixar Linha de Cima"], answer: 3, why: "Fixar Linha de Cima mantém o cabeçalho no ecrã." },
      { objective: "O6", q: "Que gráfico é melhor para comparar as vendas por dia?", options: ["Um gráfico de colunas", "Nenhum gráfico", "Um gráfico sem etiquetas", "Um desenho de um bolo feito por você"], answer: 0, why: "Os gráficos de colunas comparam quantidades lado a lado." },
      { objective: "O6", q: "No Google Sheets, como começa um gráfico?", options: ["Dados > Ordenar intervalo", "Inserir > Gráfico", "Ver > Fixar", "Formatar > Negrito"], answer: 1, why: "Inserir > Gráfico abre o editor de gráficos." },
      { objective: "O6", q: "O que NUNCA deve ir numa folha que partilha?", options: ["Totais de vendas", "Nomes de produtos", "Palavras-passe e números da Segurança Social", "Datas"], answer: 2, why: "Os números privados podem ser mal usados se o ficheiro for partilhado." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Tabela de dados organizada",
        objective: "O1",
        notYet: "Menos de 8 linhas, cabeçalhos em falta ou dados misturados numa coluna.",
        meets: "Cabeçalhos na linha 1, pelo menos 8 linhas, um tipo de dados por coluna.",
        exceeds: "O ficheiro e o separador da folha têm nomes claros."
      },
      {
        name: "Fácil de ler",
        objective: "O2",
        notYet: "Os cabeçalhos estão simples, o dinheiro não tem formato de moeda ou o texto está cortado.",
        meets: "Cabeçalhos a negrito, dinheiro como moeda, colunas com a largura das suas entradas.",
        exceeds: "A linha de cabeçalhos também tem uma cor de preenchimento e a folha está arrumada."
      },
      {
        name: "Totais e média",
        objective: "O3",
        notYet: "Totais escritos à mão ou uma fórmula mostra um erro.",
        meets: "Um total com SUM e uma média com AVERAGE que dão os resultados certos.",
        exceeds: "Os totais das linhas usam uma fórmula copiada para baixo com a marca de preenchimento."
      },
      {
        name: "Classificações com IF",
        objective: "O4",
        notYet: "Não há coluna com IF, ou as classificações estão erradas.",
        meets: "Uma coluna com IF classifica bem todas as linhas, como \"Meta atingida\" ou \"Abaixo da meta\".",
        exceeds: "Sabe explicar o teste e mudar o número da meta para atualizar as classificações."
      },
      {
        name: "Ordenada, filtrada e fixa",
        objective: "O5",
        notYet: "As linhas estão misturadas, ou falta a ordenação, o filtro ou a linha fixa.",
        meets: "Dados ordenados do maior para o menor, um filtro na linha de cabeçalhos e a linha de cima fixa.",
        exceeds: "Sabe usar o filtro para mostrar só uma classificação e depois limpá-lo."
      },
      {
        name: "Gráfico e partilha segura",
        objective: "O6",
        notYet: "Não há gráfico, ou foi partilhado com acesso de edição sem pensar ou com dados privados.",
        meets: "Um gráfico de colunas com título, e o ficheiro partilhado com uma pessoa como leitor, sem dados privados.",
        exceeds: "Sabe dizer porque escolheu aquele nível de acesso."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter usado uma folha de cálculo no trabalho ou no seu negócio em 30 dias (inquérito de seguimento)",
      "Alunos que põem as competências de folhas de cálculo no currículo ou conseguem um emprego que as usa",
      "Alunos que começam outro curso da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com Excel, Excel na internet ou Google Sheets (grátis com uma conta Google)",
      "Dados de exemplo: uma semana de vendas, horas por turno ou horas de voluntariado, com pelo menos 8 linhas",
      "O email de uma pessoa com quem partilhar a folha terminada",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Mostre cada passo uma vez num ecrã projetado, no Excel e no Google Sheets, e depois deixe os alunos repetirem.",
      "Dê aos alunos um conjunto de dados de exemplo já pronto, para ninguém ter de usar dados reais de clientes ou dados privados.",
      "Esteja atento aos alunos que ordenam uma coluna sozinha; peça-lhes que anulem e ordenem a tabela inteira.",
      "Lembre aos alunos que partilhem como Leitor, a não ser que a pessoa precise de editar, e que nunca ponham palavras-passe ou números de identificação numa folha partilhada.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
