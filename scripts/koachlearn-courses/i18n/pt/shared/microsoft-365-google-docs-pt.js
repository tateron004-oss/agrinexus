"use strict";

// Koach Learn course (Portuguese translation of shared/microsoft-365-google-docs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Button names are given as the Portuguese apps show them, with the English name in brackets where it helps.

module.exports = {
  id: "microsoft-365-google-docs-pt",
  lang: "pt",
  translationOf: "microsoft-365-google-docs",
  category: "Seniors and Technology",
  name: "Noções Básicas de Microsoft 365 e Google Docs",
  skills: "Criar e guardar um documento, Formatar texto, Partilhar e comentar, Fazer uma folha de cálculo simples, Somar com uma fórmula, Transferir como PDF",
  outcome: "fazer um documento arrumado de uma página e uma folha de cálculo simples com um total, no Google Docs e Sheets ou no Microsoft Word e Excel na web, e depois partilhá-los com segurança e guardar uma cópia em PDF.",
  about: [
    "Hoje, a maioria dos empregos, escolas, igrejas, clubes e famílias escreve e partilha documentos pela internet. As duas escolhas gratuitas mais comuns são o Google Docs e o Sheets (com uma conta Google) e o Microsoft Word e o Excel na web (com uma conta Microsoft). Os botões têm nomes um pouco diferentes, mas as competências são as mesmas.",
    "No Capítulo 1, você cria, formata e partilha um documento. No Capítulo 2, faz uma pequena folha de cálculo, soma uma coluna com uma fórmula e guarda o seu trabalho em PDF para enviar ou imprimir.",
    "Cada lição dura cerca de cinco minutos. Mantenha a aplicação aberta enquanto lê, para poder fazer logo a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Faça um folheto ou uma carta de uma página (por exemplo, uma venda de garagem, um dia de voluntariado ou um recado para o senhorio) com um título em negrito, uma lista com marcadores e uma linha de contacto, e uma pequena folha de cálculo com pelo menos cinco custos e o total feito com uma fórmula SUM. Partilhe o documento com uma pessoa como \"só ver\" e transfira os dois ficheiros em PDF.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que precisam de documentos de escritório do dia a dia: idosos, pessoas à procura de emprego, voluntários, pessoas que voltam ao trabalho, membros de pequenas associações e grupos comunitários, e jovens que começam a escola ou o trabalho.",
    startingPoint: "Sabem usar um rato ou um ecrã tátil, abrir um navegador de internet e escrever. Muitos têm uma conta de email, mas nunca fizeram um documento ou uma folha de cálculo na internet, nunca partilharam um ficheiro nem guardaram um PDF.",
    gap: "Cartas, folhetos, orçamentos, listas de inscrição e formulários de emprego são hoje feitos e enviados como ficheiros na internet, e os escritórios pedem muitas vezes PDFs. Sem estas competências, as pessoas dependem de outros, pagam por ajuda para imprimir ou partilham ficheiros com dados privados com demasiadas pessoas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; palavras como célula, fórmula e PDF são explicadas",
      "Aparelhos: um computador ou tablet com navegador de internet é o melhor; um telefone também serve, mas é mais difícil",
      "Contas: é preciso uma conta Google ou Microsoft gratuita; nenhum plano pago",
      "Tempo: lições de 4 a 6 minutos, cerca de 60 minutos no total",
      "Privacidade: ficheiros com moradas, números de identificação ou informações de saúde nunca são partilhados com \"Qualquer pessoa com o link\""
    ],
    prerequisites: "Nenhum, mas o curso Competências Básicas de Informática ou o curso «Noções Básicas de Internet» ajuda quem ainda não está habituado ao rato e ao navegador."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o Google Docs ou o Word na web", action: "abrir um novo documento em branco, dar-lhe um nome claro e dizer onde fica guardado", standard: "com um nome que diz o que é o ficheiro e o armazenamento na internet certo indicado (Google Drive ou OneDrive)" },
    { id: "O2", condition: "Com uma página de texto simples", action: "formatar um título, uma lista com marcadores e o texto principal para a página ficar fácil de ler", standard: "com o título no estilo Título 1 (Heading 1), uma lista com marcadores e uma palavra em negrito" },
    { id: "O3", condition: "Com um documento e uma pessoa que precisa de o ver", action: "partilhar o documento com o nível de acesso mais baixo de que a pessoa precisa e deixar um comentário", standard: "escolhendo sempre o nível certo e nunca usando \"Qualquer pessoa com o link\" para dados privados" },
    { id: "O4", condition: "Usando o Google Sheets ou o Excel na web", action: "criar uma folha de cálculo com títulos na linha 1 e cinco linhas de dados", standard: "com uma coisa por linha e os números escritos sem palavras" },
    { id: "O5", condition: "Com uma coluna de números numa folha de cálculo", action: "escrever uma fórmula SUM que soma a coluna e se atualiza sozinha", standard: "com um total certo que muda quando se muda um número" },
    { id: "O6", condition: "Com um documento ou uma folha de cálculo pronta", action: "transferi-lo em PDF e imprimi-lo depois de ver a pré-visualização", standard: "encontrando o PDF na pasta Transferências e sem nada cortado na pré-visualização" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escrever e partilhar um documento",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abrir o Google Docs ou o Word na web",
          minutes: 5,
          goal: "Abrir um novo documento em branco, dar-lhe um nome e saber onde fica guardado.",
          text: [
            "O Google Docs é gratuito com uma conta Google (a mesma conta do Gmail). Vá a docs.google.com e escolha Documento em branco. O Microsoft Word na web é gratuito com uma conta Microsoft (a mesma conta do Outlook.com). Vá a microsoft365.com, escolha Word e depois Documento em branco.",
            "Os dois guardam o seu trabalho sozinhos enquanto você escreve. O Google guarda-o no Google Drive; a Microsoft guarda-o no OneDrive. Os dois são armazenamento na internet, também chamado nuvem, por isso pode abrir o ficheiro outra vez em qualquer computador ou telefone depois de iniciar sessão.",
            "Dê a cada ficheiro um nome claro, no canto superior esquerdo, como \"Folheto Dia de Voluntariado - Maio\". Nomes claros tornam os ficheiros fáceis de encontrar mais tarde."
          ],
          steps: ["Vá a docs.google.com (Google) ou microsoft365.com (Microsoft) e inicie sessão.", "Escolha um documento em branco.", "Clique no nome no canto superior esquerdo e escreva um nome claro para o ficheiro.", "Escreva uma frase e veja a mensagem de que foi guardado, perto do topo."],
          words: [["Nuvem", "armazenamento na internet, para poder chegar aos seus ficheiros em qualquer aparelho depois de iniciar sessão."], ["Google Drive / OneDrive", "o armazenamento na internet do Google e da Microsoft, onde os seus ficheiros ficam guardados."], ["Conta", "o seu nome de utilizador e a sua palavra-passe para um serviço."]],
          sources: [{ name: "Microsoft: Word, Excel e PowerPoint gratuitos na web", url: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web" }, { name: "Google Docs", url: "https://docs.google.com" }],
          slides: [
            { title: "Duas escolhas gratuitas", bullets: ["Google Docs: docs.google.com com uma conta Google", "Word na web: microsoft365.com com uma conta Microsoft"] },
            { title: "Guarda sozinho", bullets: ["O Google guarda no Google Drive", "A Microsoft guarda no OneDrive", "Abra-o outra vez em qualquer aparelho depois de iniciar sessão"] },
            { title: "Dê nome a cada ficheiro", bullets: ["Clique no nome no canto superior esquerdo", "Use nomes claros: \"Folheto Dia de Voluntariado - Maio\""] }
          ],
          tryIt: "Abra um documento em branco no Google Docs ou no Word na web. Dê-lhe o nome \"O Meu Documento de Prática\" e escreva uma frase sobre a sua semana.",
          youCanNow: "abrir um novo documento, dar-lhe um nome e saber que ele se guarda sozinho na nuvem.",
          quickCheck: [
            { objective: "O1", q: "O que é a nuvem?", options: ["Armazenamento na internet a que pode chegar em qualquer aparelho depois de iniciar sessão", "Uma pasta que só existe num computador", "Um tipo de impressora", "Uma aplicação paga que tem de comprar"], answer: 0, why: "O Google Drive e o OneDrive são armazenamento na internet, também chamado nuvem." },
            { objective: "O1", q: "Escreveu uma carta no Google Docs e quer encontrá-la outra vez na próxima semana. O que faria agora?", options: ["Deixá-la com o nome \"Documento sem título\"", "Imprimi-la para não a perder", "Clicar no nome no canto superior esquerdo e escrever um nome claro, como \"Carta ao Senhorio - Junho\"", "Copiá-la para um email para si mesmo"], answer: 2, why: "Um nome de ficheiro claro torna o documento fácil de encontrar mais tarde." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Deixar um documento arrumado",
          minutes: 5,
          goal: "Formatar um título, uma lista e o texto principal para a página ficar fácil de ler.",
          text: [
            "Formatar quer dizer mudar o aspeto do texto. Primeiro selecione o texto: carregue no botão do rato e arraste por cima dele, ou faça duplo clique numa palavra. Depois use a barra de ferramentas no topo: B para negrito, I para itálico, a caixa do tamanho para aumentar o texto e os botões de lista para marcadores ou números.",
            "Use um estilo de título para os títulos. Na barra de ferramentas, encontre a caixa que diz \"Texto normal\" (Google) ou \"Normal\" (Word) e escolha Título 1 (Heading 1). Os títulos ficam arrumados e ajudam os leitores de ecrã.",
            "Mantenha tudo simples: um tipo de letra fácil de ler, tamanho 11 a 14 para o texto principal, um título em negrito, parágrafos curtos e listas com marcadores. Se errar, carregue em Ctrl+Z (Command+Z num Mac) para desfazer."
          ],
          steps: ["Selecione o texto que quer mudar.", "Escolha Título 1 (Heading 1) para o título.", "Selecione algumas linhas e clique no botão da lista com marcadores.", "Use o B para pôr uma palavra importante em negrito.", "Carregue em Ctrl+Z (Command+Z no Mac) para desfazer um erro."],
          words: [["Formatar", "mudar o aspeto do texto: tamanho, negrito, listas, títulos."], ["Selecionar", "marcar o texto arrastando por cima dele, para o poder mudar."], ["Barra de ferramentas", "a fila de botões no topo da aplicação."]],
          slides: [
            { title: "Selecione e depois mude", bullets: ["Arraste por cima do texto ou faça duplo clique numa palavra", "Depois use a barra de ferramentas"] },
            { title: "O básico da barra de ferramentas", bullets: ["B = negrito, I = itálico", "A caixa do tamanho aumenta ou diminui o texto", "Os botões de lista fazem marcadores ou números"] },
            { title: "Use estilos de título", bullets: ["Mude \"Texto normal\" para Título 1 (Heading 1)", "Fica arrumado e ajuda os leitores de ecrã"] },
            { title: "Mantenha simples", bullets: ["Um tipo de letra, tamanho 11 a 14", "Parágrafos curtos e marcadores", "Ctrl+Z (Command+Z no Mac) desfaz um erro"] }
          ],
          tryIt: "No seu documento de prática, escreva um título e três itens, como três coisas para levar a um piquenique da família. Ponha o título em Título 1, faça dos itens uma lista com marcadores e ponha uma palavra em negrito.",
          youCanNow: "formatar uma página com um título, uma lista com marcadores e texto em negrito.",
          quickCheck: [
            { objective: "O2", q: "Que tamanho de letra a lição sugere para o texto principal?", options: ["6 a 8", "20 a 24", "30 ou mais", "11 a 14"], answer: 3, why: "O tamanho 11 a 14 é fácil de ler no texto principal." },
            { objective: "O2", q: "Quer que três linhas fiquem numa lista com marcadores. O que faria primeiro?", options: ["Carregar em Ctrl+Z", "Selecionar as três linhas", "Mudar o tipo de letra da página toda", "Clicar em Partilhar"], answer: 1, why: "Primeiro seleciona o texto e depois escolhe o botão da lista com marcadores." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Partilhar com segurança e usar comentários",
          minutes: 5,
          goal: "Partilhar um documento com uma pessoa no nível de acesso certo e deixar um comentário.",
          text: [
            "As duas aplicações têm um botão Partilhar (Share) no canto superior direito. Escreva o endereço de email da pessoa e escolha o que ela pode fazer: só ver (ler), comentar (sugerir) ou editar (mudar o ficheiro). Dê o nível mais baixo de que a pessoa precisa.",
            "Tenha cuidado com \"Qualquer pessoa com o link\". Qualquer pessoa que receba o link, mesmo reencaminhado, pode abrir o ficheiro. Não o use para ficheiros com dados privados, como moradas, números de identificação ou informações de saúde.",
            "Os comentários deixam as pessoas dar a sua opinião sem mudar as suas palavras. Selecione algum texto e depois escolha o botão de comentário (um balão de fala) ou clique com o botão direito e escolha Comentar. Quando o problema estiver resolvido, escolha Resolver."
          ],
          steps: ["Clique em Partilhar no canto superior direito.", "Escreva o endereço de email da pessoa.", "Escolha Ver, Comentar ou Editar; escolha o nível mais baixo de que ela precisa.", "Envie.", "Para comentar: selecione o texto, escolha Comentar, escreva e publique o comentário."],
          words: [["Partilhar", "deixar outra pessoa abrir o seu ficheiro."], ["Nível de acesso", "o que uma pessoa pode fazer com o seu ficheiro: ver, comentar ou editar."], ["Comentário", "uma nota ao lado do ficheiro que não muda o texto."]],
          slides: [
            { title: "Botão Partilhar, canto superior direito", bullets: ["Escreva o email da pessoa", "Escolha Ver, Comentar ou Editar", "Dê o nível mais baixo de que ela precisa"] },
            { title: "Cuidado com \"Qualquer pessoa com o link\"", bullets: ["Quem receber o link pode abrir o ficheiro", "Nunca para dados privados"] },
            { title: "Comentários", bullets: ["Opinião sem mudar as suas palavras", "Selecione o texto e escolha Comentar", "Escolha Resolver quando estiver corrigido"] }
          ],
          tryIt: "Partilhe o seu documento de prática com um amigo ou familiar como só ver. Depois acrescente um comentário ao seu título que diga \"Este título está claro?\"",
          youCanNow: "partilhar um documento no nível de acesso certo e usar comentários para receber opiniões.",
          quickCheck: [
            { objective: "O3", q: "Que nível de acesso deixa alguém mudar as palavras do seu ficheiro?", options: ["Só ver", "Comentar", "Editar", "Transferir"], answer: 2, why: "Editar deixa a pessoa mudar o ficheiro; ver e comentar não." },
            { objective: "O3", q: "Um amigo corrigiu o problema que você apontou num comentário. O que faria com o comentário?", options: ["Escolher Resolver", "Apagar o documento todo", "Partilhar o ficheiro com Qualquer pessoa com o link", "Deixar um novo comentário em cada linha"], answer: 0, why: "Resolver fecha um comentário quando o problema está corrigido." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escrever e partilhar um documento",
        questions: [
          { objective: "O1", q: "Onde é que o Google Docs guarda o seu trabalho?", options: ["Só numa pen USB", "Não guarda", "No Google Drive, na internet", "Numa impressora"], answer: 2, why: "O Google Docs guarda automaticamente no Google Drive." },
          { objective: "O1", q: "Qual é o melhor nome de ficheiro?", options: ["\"Documento sem título\"", "\"asdf\"", "\"doc1\"", "\"Folheto Dia de Voluntariado - Maio\""], answer: 3, why: "Um nome claro torna o ficheiro fácil de encontrar mais tarde." },
          { objective: "O2", q: "Antes de pôr um texto em negrito, primeiro você:", options: ["Fecha a aplicação", "Imprime a página", "Seleciona o texto", "Partilha o ficheiro"], answer: 2, why: "Seleciona o texto e depois muda-o com a barra de ferramentas." },
          { objective: "O3", q: "O seu vizinho só precisa de ler o seu folheto. Que nível de acesso lhe dá?", options: ["Editar", "Proprietário", "Só ver", "Qualquer pessoa com o link"], answer: 2, why: "Dê o nível mais baixo de que a pessoa precisa." },
          { objective: "O3", q: "Um documento tem a morada da sua casa e o seu telefone. Que forma de partilha deve evitar?", options: ["Partilhar com uma pessoa por email", "Só ver", "Só comentar", "Qualquer pessoa com o link"], answer: 3, why: "Qualquer pessoa que receba o link pode abrir um ficheiro com dados privados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Folhas de cálculo e acabamento",
      lessons: [
        {
          objectives: ["O4"],
          title: "A sua primeira folha de cálculo",
          minutes: 5,
          goal: "Fazer uma folha de cálculo com títulos e cinco linhas de dados.",
          text: [
            "Uma folha de cálculo é uma grelha de caixas para listas e números. A do Google é o Sheets (sheets.google.com); a da Microsoft é o Excel (escolha Excel em microsoft365.com). É ótima para orçamentos, listas de inscrição, horários e inventários.",
            "As colunas vão de cima para baixo e têm letras (A, B, C). As linhas vão da esquerda para a direita e têm números (1, 2, 3). Cada caixa é uma célula, com o nome da sua coluna e da sua linha, por isso B2 é a coluna B, linha 2.",
            "Ponha os títulos na linha 1, como \"Item\" em A1 e \"Custo\" em B1. Depois escreva uma coisa por linha por baixo. Escreva os números sem palavras (12.50, e não \"12.50 dólares\") para a folha de cálculo poder fazer contas com eles."
          ],
          steps: ["Abra o Google Sheets ou o Excel na web e escolha uma folha de cálculo em branco.", "Dê nome ao ficheiro.", "Escreva os títulos na linha 1 (A1: Item, B1: Custo).", "Escreva cinco itens na coluna A e os seus custos na coluna B.", "Ponha a linha 1 em negrito."],
          words: [["Folha de cálculo", "uma grelha de células para listas e números, como o Google Sheets ou o Excel."], ["Célula", "uma caixa numa folha de cálculo, com o nome da letra da coluna e do número da linha, como B2."], ["Coluna / linha", "as colunas vão de cima para baixo (letras); as linhas vão da esquerda para a direita (números)."]],
          slides: [
            { title: "Para que serve uma folha de cálculo", bullets: ["Orçamentos e custos", "Listas de inscrição e horários", "Inventários"] },
            { title: "Colunas, linhas, células", bullets: ["Colunas: letras A, B, C", "Linhas: números 1, 2, 3", "Célula B2 = coluna B, linha 2"] },
            { title: "Prepare a folha", bullets: ["Títulos na linha 1", "Uma coisa por linha", "Números sem palavras: 12.50"] }
          ],
          tryIt: "Faça uma folha de cálculo chamada \"Orçamento de Prática\". Ponha Item e Custo na linha 1 e depois cinco custos verdadeiros de uma semana ou de um evento, como compras de comida, bilhete de autocarro ou decorações.",
          youCanNow: "preparar uma folha de cálculo com títulos e linhas de dados.",
          quickCheck: [
            { objective: "O4", q: "Numa folha de cálculo, o que é uma célula?", options: ["Uma página inteira de dados", "Uma caixa, com o nome da sua coluna e da sua linha", "Uma fórmula que soma números", "O nome do ficheiro no topo"], answer: 1, why: "Cada caixa é uma célula, como B2 para a coluna B, linha 2." },
            { objective: "O4", q: "Está a fazer uma lista de inscrição. Onde escreveria os títulos \"Nome\" e \"Telefone\"?", options: ["No fundo da folha", "No nome do ficheiro", "Todos numa só célula", "Na linha 1, um título por coluna"], answer: 3, why: "Os títulos vão na linha 1, com uma coisa por linha por baixo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Somar tudo com uma fórmula",
          minutes: 5,
          goal: "Usar SUM para somar uma coluna de forma que o total se atualize sozinho.",
          text: [
            "Uma fórmula diz à folha de cálculo para fazer contas. Todas as fórmulas começam com um sinal de igual (=). Para somar as células de B2 a B6, clique numa célula vazia por baixo delas, escreva =SUM(B2:B6) e carregue em Enter.",
            "Os dois pontos querem dizer \"até\", por isso B2:B6 é B2, B3, B4, B5 e B6. Se mudar um número, o total muda sozinho. Esta é a grande vantagem em relação a uma calculadora.",
            "Outras fórmulas simples: =AVERAGE(B2:B6) dá a média, e =B2*2 dobra uma célula. Se aparecer um erro como #NAME?, verifique a escrita e o sinal de igual. (Se a sua aplicação estiver em português, as mesmas fórmulas podem chamar-se SOMA e MÉDIA.)"
          ],
          steps: ["Clique na célula vazia por baixo dos seus números.", "Escreva =SUM(B2:B6) com o seu próprio intervalo de células.", "Carregue em Enter.", "Mude um número e veja o total atualizar-se.", "Escreva a palavra Total na célula à esquerda."],
          words: [["Fórmula", "uma instrução que começa com = e diz à folha de cálculo para calcular."], ["SUM", "uma fórmula que soma um grupo de células (em português pode chamar-se SOMA)."], ["Intervalo", "um grupo de células, escrito como B2:B6 (de B2 até B6)."]],
          slides: [
            { title: "As fórmulas começam com =", bullets: ["=SUM(B2:B6) soma de B2 até B6", "Carregue em Enter para ver a resposta"] },
            { title: "Atualiza-se sozinha", bullets: ["Mude um número", "O total também muda"] },
            { title: "Mais fórmulas simples", bullets: ["=AVERAGE(B2:B6) dá a média", "=B2*2 dobra uma célula", "#NAME? quer dizer: verifique a escrita"] }
          ],
          tryIt: "No seu Orçamento de Prática, escreva Total em A7 e =SUM(B2:B6) em B7. Depois mude um custo e verifique que o total muda.",
          youCanNow: "somar uma coluna com SUM e saber que o total se atualiza quando os números mudam.",
          quickCheck: [
            { objective: "O5", q: "Qual é a grande vantagem de uma fórmula SUM em relação a somar numa calculadora?", options: ["O total atualiza-se sozinho quando um número muda", "Põe os números em negrito", "Transforma a folha num PDF", "Partilha o ficheiro com outras pessoas"], answer: 0, why: "Uma fórmula volta a calcular sempre que muda um número do seu intervalo." },
            { objective: "O5", q: "Os seus custos estão de B2 a B8. O que escreveria em B9 para os somar?", options: ["SUM B2 B8", "=B2+B8", "=SUM(B2:B8)", "=AVERAGE(B2:B8)"], answer: 2, why: "=SUM(B2:B8) soma de B2 até B8; =B2+B8 soma só duas células." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Guardar em PDF e imprimir",
          minutes: 4,
          goal: "Transferir um documento ou uma folha de cálculo em PDF e imprimi-lo.",
          text: [
            "Um PDF é um ficheiro que tem o mesmo aspeto em todos os telefones e computadores, e as pessoas não o conseguem mudar com facilidade. Muitas candidaturas de emprego, escritórios e escolas pedem PDFs.",
            "No Google Docs ou no Sheets: abra o menu Ficheiro, escolha Transferir (Download) e depois PDF. No Word ou no Excel na web: abra o menu Ficheiro e procure Guardar como ou Transferir, e depois escolha PDF. O ficheiro vai para a sua pasta Transferências (Downloads).",
            "Para imprimir, abra o menu Ficheiro e escolha Imprimir, ou carregue em Ctrl+P (Command+P num Mac). Veja primeiro a pré-visualização, para nada ficar cortado. Numa biblioteca, pergunte aos funcionários como se paga a impressão."
          ],
          steps: ["Abra o menu Ficheiro.", "Escolha Transferir (Google) ou Guardar como / Transferir (Microsoft).", "Escolha PDF.", "Encontre o ficheiro na sua pasta Transferências.", "Para imprimir: Ctrl+P (Command+P no Mac), veja a pré-visualização e depois imprima."],
          words: [["PDF", "um tipo de ficheiro que tem o mesmo aspeto em todo o lado e é difícil de mudar."], ["Pasta Transferências (Downloads)", "o lugar no computador para onde vão os ficheiros transferidos."]],
          slides: [
            { title: "Porquê PDF?", bullets: ["Tem o mesmo aspeto em todo o lado", "Difícil de mudar sem querer", "Muitas vezes pedido por empregos e escritórios"] },
            { title: "Fazer um PDF", bullets: ["Menu Ficheiro e depois Transferir (Google)", "Menu Ficheiro e depois Guardar como ou Transferir (Microsoft)", "Escolha PDF; procure em Transferências"] },
            { title: "Imprimir", bullets: ["Ctrl+P (Command+P no Mac)", "Veja primeiro a pré-visualização"] }
          ],
          tryIt: "Tarefa final: faça um folheto ou uma carta de uma página com um título, uma lista com marcadores e uma linha de contacto, e também uma folha de cálculo com cinco custos e um total SUM. Partilhe o documento como só ver e depois transfira os dois em PDF.",
          youCanNow: "terminar um documento e uma folha de cálculo, partilhá-los com segurança e guardá-los em PDF.",
          quickCheck: [
            { objective: "O6", q: "Para onde vai normalmente um PDF transferido?", options: ["Para a caixa de entrada do seu email", "Para a reciclagem", "Só para a nuvem", "Para a sua pasta Transferências"], answer: 3, why: "Os ficheiros transferidos vão para a pasta Transferências do seu aparelho." },
            { objective: "O6", q: "Vai imprimir um folheto na biblioteca. O que faria primeiro?", options: ["Imprimir logo dez cópias", "Ver a pré-visualização da impressão para nada ficar cortado", "Apagar o ficheiro", "Transformar o ficheiro numa folha de cálculo"], answer: 1, why: "A pré-visualização mostra se alguma coisa fica cortada antes de pagar a impressão." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Folhas de cálculo e acabamento",
        questions: [
          { objective: "O4", q: "O que é a célula C4?", options: ["Linha C, coluna 4", "Uma fórmula", "O quarto ficheiro", "Coluna C, linha 4"], answer: 3, why: "As células têm o nome da letra da coluna e depois do número da linha." },
          { objective: "O4", q: "Como deve escrever um custo de doze dólares e cinquenta?", options: ["\"doze e cinquenta\"", "\"12.50 dólares\"", "12.50", "\"cerca de 12\""], answer: 2, why: "Números sem palavras deixam a folha de cálculo fazer contas." },
          { objective: "O5", q: "Que fórmula soma as células de B2 a B6?", options: ["add(B2-B6)", "SUM B2 B6", "=SUM(B2:B6)", "B2+B6"], answer: 2, why: "As fórmulas começam com =, e B2:B6 quer dizer de B2 até B6." },
          { objective: "O5", q: "Muda um custo no seu orçamento. O que acontece ao total SUM?", options: ["Nada", "Transforma-se num erro", "Tem de o escrever outra vez", "Atualiza-se sozinho"], answer: 3, why: "As fórmulas voltam a calcular quando os números mudam." },
          { objective: "O6", q: "Um escritório pede a sua carta num ficheiro que tenha o mesmo aspeto em todo o lado. Você envia:", options: ["Uma captura de ecrã do seu telefone", "Uma foto do ecrã", "Um link para qualquer pessoa", "Um PDF"], answer: 3, why: "Um PDF tem o mesmo aspeto em todos os aparelhos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Microsoft 365 e Google Docs",
    questions: [
      { objective: "O1", q: "De que precisa para usar o Google Docs de graça?", options: ["Uma conta Google", "Uma licença paga", "Uma impressora", "Uma conta Microsoft"], answer: 0, why: "O Google Docs é gratuito com uma conta Google." },
      { objective: "O1", q: "Onde é que o Word na web guarda os seus ficheiros?", options: ["Google Drive", "Uma disquete", "OneDrive", "Em lado nenhum"], answer: 2, why: "A Microsoft guarda no OneDrive." },
      { objective: "O1", q: "A nuvem quer dizer:", options: ["O tempo que faz", "Um vírus", "Um tipo de impressora", "Armazenamento na internet a que pode chegar em qualquer aparelho"], answer: 3, why: "O armazenamento na nuvem deixa abrir os ficheiros em qualquer lugar depois de iniciar sessão." },
      { objective: "O1", q: "Onde muda o nome de um documento do Google Docs?", options: ["Clicando no nome no canto superior esquerdo", "Reiniciando o computador", "Imprimindo-o primeiro", "Enviando-o por email para si mesmo"], answer: 0, why: "O nome do ficheiro está no canto superior esquerdo." },
      { objective: "O2", q: "Para mudar o aspeto de uma palavra, primeiro você:", options: ["Partilha o ficheiro", "Transfere um PDF", "Seleciona a palavra", "Fecha o separador"], answer: 2, why: "Primeiro seleciona, depois formata." },
      { objective: "O2", q: "Qual é a melhor forma de fazer um título?", options: ["Escrevê-lo todo em maiúsculas com espaços", "Pô-lo no fundo da página", "Fazê-lo muito pequeno", "Escolher o estilo Título 1 (Heading 1)"], answer: 3, why: "Os estilos de título ficam arrumados e ajudam os leitores de ecrã." },
      { objective: "O2", q: "Fez um erro de formatação. O que o desfaz?", options: ["Ctrl+P", "Ctrl+Z (Command+Z no Mac)", "Fechar o navegador", "O botão Partilhar"], answer: 1, why: "Ctrl+Z ou Command+Z desfaz a última mudança." },
      { objective: "O3", q: "Onde fica o botão Partilhar nas duas aplicações?", options: ["No canto superior direito", "No fundo da página", "Na pré-visualização da impressão", "Numa célula da folha de cálculo"], answer: 0, why: "As duas aplicações põem o Partilhar no canto superior direito." },
      { objective: "O3", q: "O seu colega deve sugerir mudanças, mas não mudar as suas palavras. Dê-lhe:", options: ["Editar", "Comentar", "Proprietário", "Nenhum acesso"], answer: 1, why: "O acesso Comentar deixa sugerir sem editar." },
      { objective: "O3", q: "Porque deve ter cuidado com \"Qualquer pessoa com o link\"?", options: ["Apaga o ficheiro", "Qualquer pessoa que receba o link pode abri-lo", "Custa dinheiro", "Transforma o ficheiro num PDF"], answer: 1, why: "Os links reencaminhados podem chegar a desconhecidos." },
      { objective: "O3", q: "Um comentário é:", options: ["Uma mudança no seu texto", "Uma nota ao lado que não muda o texto", "Um PDF", "Uma fórmula"], answer: 1, why: "Os comentários dão opinião sem editar." },
      { objective: "O4", q: "Qual é um bom uso para uma folha de cálculo?", options: ["Um orçamento da família", "Uma carta de amor", "Um álbum de fotografias", "Uma chamada telefónica"], answer: 0, why: "As folhas de cálculo servem para listas e números." },
      { objective: "O4", q: "Numa folha de cálculo, as colunas têm nomes com:", options: ["Números", "Letras", "Cores", "Emojis"], answer: 1, why: "As colunas usam letras; as linhas usam números." },
      { objective: "O4", q: "Onde ficam normalmente títulos como \"Item\" e \"Custo\"?", options: ["Na linha 1", "Na última linha", "Num comentário", "No nome do ficheiro"], answer: 0, why: "Os títulos vão na linha de cima." },
      { objective: "O5", q: "Todas as fórmulas começam com:", options: ["Um cifrão", "Um sinal de igual (=)", "A palavra Total", "Um espaço"], answer: 1, why: "O = diz à folha de cálculo que é uma fórmula." },
      { objective: "O5", q: "Em =SUM(B2:B6), os dois pontos querem dizer:", options: ["Dividir", "Até", "Menos", "Parar"], answer: 1, why: "B2:B6 quer dizer de B2 até B6." },
      { objective: "O5", q: "Vê #NAME? numa célula. O que deve verificar?", options: ["A impressora", "A escrita da fórmula", "A sua palavra-passe", "A cor do ficheiro"], answer: 1, why: "#NAME? quer dizer, normalmente, uma fórmula mal escrita." },
      { objective: "O5", q: "Que fórmula dá a média de B2 a B6?", options: ["=AVERAGE(B2:B6)", "=SUM(B2)", "AVG B2-B6", "=B2"], answer: 0, why: "AVERAGE calcula a média de um intervalo." },
      { objective: "O6", q: "No Google Docs, como faz um PDF?", options: ["Menu Ficheiro, Transferir, PDF", "Partilhar, Qualquer pessoa com o link", "Carregar em Ctrl+Z", "Clicar com o botão direito e Comentar"], answer: 0, why: "Ficheiro, Transferir, PDF guarda um PDF." },
      { objective: "O6", q: "Antes de imprimir, deve:", options: ["Ver a pré-visualização da impressão", "Apagar o ficheiro", "Partilhá-lo com toda a gente", "Mudar todos os tipos de letra"], answer: 0, why: "A pré-visualização mostra se alguma coisa fica cortada." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      5,
      9,
      13,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Documento arrumado de uma página",
        objective: "O2",
        notYet: "Falta o título, a lista com marcadores ou a linha de contacto.",
        meets: "Um título em negrito no estilo Título 1, uma lista com marcadores e uma linha de contacto, tudo numa só página.",
        exceeds: "Também usa um tipo de letra fácil, parágrafos curtos e um nome de ficheiro claro."
      },
      {
        name: "Partilha segura",
        objective: "O3",
        notYet: "O documento não está partilhado, ou está partilhado com acesso de edição ou com \"Qualquer pessoa com o link\".",
        meets: "Partilhado com uma pessoa como só ver.",
        exceeds: "Também deixa um comentário a pedir opinião e resolve-o depois de uma resposta."
      },
      {
        name: "Folha de cálculo",
        objective: "O4",
        notYet: "Faltam os títulos ou há menos de cinco custos.",
        meets: "Os títulos Item e Custo na linha 1 e pelo menos cinco custos, um por linha, escritos como números.",
        exceeds: "A linha 1 está em negrito e o ficheiro tem um nome claro."
      },
      {
        name: "Total SUM",
        objective: "O5",
        notYet: "O total foi escrito à mão ou a fórmula dá um erro.",
        meets: "Uma fórmula SUM dá o total certo e atualiza-se quando um custo muda.",
        exceeds: "Também põe um rótulo no total e acrescenta uma fórmula AVERAGE."
      },
      {
        name: "PDFs",
        objective: "O6",
        notYet: "Um ou os dois ficheiros não foram guardados em PDF.",
        meets: "O documento e a folha de cálculo foram transferidos em PDF e encontram-se em Transferências.",
        exceeds: "Também vê a pré-visualização da impressão para nada ficar cortado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter feito um documento, um orçamento ou uma lista de inscrição verdadeira nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que enviam um PDF para uma candidatura de emprego, uma escola ou um formulário de um escritório sem ajuda",
      "Alunos que seguem para outro curso, como o curso «E-mail e Comunicação pela Internet» ou de procura de emprego"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou tablet com internet e um navegador de internet (um telefone também serve, mas é mais difícil)",
      "Uma conta Google ou Microsoft gratuita",
      "Uma tarefa verdadeira para praticar, como um folheto, uma carta ou um orçamento semanal",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Antes da sessão, confirme que cada aluno consegue iniciar sessão numa conta Google ou Microsoft; ajude a criar as contas antes, para que o tempo da aula seja para os documentos.",
      "Deixe cada aluno escolher Google ou Microsoft e ficar com essa escolha durante todo o curso; junte em pares os alunos que usam a mesma.",
      "Para praticar a partilha, peça aos alunos que partilhem com um colega na sala como só ver, nunca com \"Qualquer pessoa com o link\", e que não usem moradas nem números de identificação verdadeiros.",
      "Nas salas de informática, lembre aos alunos que terminem a sessão no fim, para que a pessoa seguinte não consiga abrir os seus ficheiros.",
      "Se imprimir custar dinheiro no lugar onde se reúnem, mostre a pré-visualização da impressão e a transferência em PDF, e imprima só quando for preciso."
    ]
  }
};
