"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-sports-analytics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-sports-analytics-pt",
  lang: "pt",
  translationOf: "athletes-sports-analytics",
  category: "Athletes",
  name: "Fundamentos de Análise de Dados no Desporto",
  skills: "Fazer uma pergunta de análise, Limpar uma tabela de dados desportivos, Calcular médias, percentagens e taxas, Fazer um gráfico claro, Explicar um resultado com honestidade",
  outcome: "responder com dados a uma pergunta real sobre um jogador ou uma equipa: recolher e limpar uma pequena tabela, calcular médias, percentagens e taxas por jogo no Google Sheets, fazer um gráfico claro e explicar o resultado e os seus limites em três frases.",
  about: [
    "Este curso é para atletas, treinadores, responsáveis de equipa e adeptos que querem entender os números por trás do desporto e usá-los bem. Não precisa de matemática além das contas básicas.",
    "A análise de dados não é ter o maior número de números. É fazer uma boa pergunta, usar dados limpos, fazer contas simples sem erros, mostrar tudo com clareza e ser honesto sobre o que os números não provam. Vai usar o Google Sheets e um assistente de IA como ajuda.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Responda com dados a uma pergunta sobre a sua equipa ou uma equipa de que gosta: escreva a pergunta, recolha dados de pelo menos 10 jogos a partir de uma ficha de jogo ou de uma página oficial de estatísticas, limpe-os, calcule pelo menos uma média, uma percentagem e uma taxa por jogo, faça um gráfico e escreva um resultado em três frases que inclua um limite dos seus dados.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas, treinadores, responsáveis de equipa e adeptos que querem usar bem os números do desporto. Muitos já seguem estatísticas, mas nunca trabalharam com elas numa folha de cálculo.",
    startingPoint: "Sabem ler uma ficha de jogo e fazer contas básicas. Usam pouco ou nada fórmulas e gráficos numa folha de cálculo, e têm pouca prática a julgar se um número prova alguma coisa.",
    gap: "As conversas sobre desporto estão cheias de números que enganam: amostras muito pequenas, percentagens mal calculadas e correlação tomada como causa. Os alunos precisam de responder a uma pergunta real com dados limpos, contas simples e certas, um gráfico claro e um limite honesto, para que os seus resultados ajudem um treinador ou uma equipa em vez de os confundir.",
    constraints: [
      "Matemática: só contas básicas; as fórmulas são mostradas passo a passo",
      "Aparelhos: um telefone ou computador com o Google Sheets gratuito",
      "Tempo: cerca de cinco minutos por lição, mais o tempo para introduzir os dados de 10 jogos",
      "Os dados têm de vir de estatísticas oficiais da equipa, da liga ou da escola",
      "Os dados de cada jogador só são partilhados em público com autorização"
    ],
    prerequisites: "Nenhum. Quem nunca usou uma folha de cálculo pode fazer primeiro um curso básico de Google Sheets."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma equipa ou um jogador que segue", action: "escrever uma pergunta de análise concreta a que os dados de uma ficha de jogo podem responder", standard: "dizendo a estatística, os jogos e a comparação" },
    { id: "O2", condition: "Usando uma fonte oficial de estatísticas e o Google Sheets", action: "recolher os dados de pelo menos 10 jogos e limpá-los", standard: "com um jogo por linha e cada falta ou diferença corrigida a partir da fonte" },
    { id: "O3", condition: "Com uma tabela limpa", action: "calcular uma média, uma percentagem e uma taxa por jogo com fórmulas da folha de cálculo", standard: "com um resultado verificado à mão numa calculadora" },
    { id: "O4", condition: "Com os resultados que calculou", action: "escolher e fazer um gráfico que responda à sua pergunta", standard: "com um título que diz o resultado e os dois eixos identificados" },
    { id: "O5", condition: "Com um resultado", action: "verificar se há amostras pequenas, correlação tomada como causa ou falta de contexto", standard: "escrevendo o tamanho da amostra e pelo menos duas outras explicações possíveis" },
    { id: "O6", condition: "Com o seu gráfico e as suas verificações", action: "escrever e partilhar um resultado em três frases com os seus limites", standard: "incluindo um número, porque é importante e um limite dos dados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Perguntas e dados",
      lessons: [
        {
          objectives: ["O1"],
          title: "Começar com uma boa pergunta",
          minutes: 4,
          goal: "Escrever uma pergunta de análise clara a que pode responder com dados.",
          text: [
            "A análise de dados começa com uma pergunta, não com uma folha de cálculo. Uma boa pergunta é concreta e tem resposta: \"A nossa equipa tem melhor percentagem de lançamentos de três pontos em casa ou fora?\" \"O meu serviço é mais certeiro no primeiro set ou no terceiro?\"",
            "Evite perguntas grandes demais (\"Quem é o melhor jogador de sempre?\") ou a que os dados não conseguem responder (\"Quem se esforça mais?\").",
            "Escreva de que dados precisa para responder: que estatísticas, quantos jogos e onde as vai obter."
          ],
          steps: ["Escreva uma pergunta sobre a sua equipa ou um jogador.", "Torne-a concreta: quem, que estatística, que comparação.", "Verifique se os dados podem responder.", "Faça a lista dos dados de que precisa e de onde os obter."],
          words: [["Análise de dados", "usar dados para responder a perguntas e tomar melhores decisões."], ["Dados", "factos e números, como pontos, tentativas e cestos marcados."]],
          slides: [
            { title: "Primeiro a pergunta", bullets: ["Não a folha de cálculo", "Concreta e com resposta"] },
            { title: "Boa ou grande demais", bullets: ["Boa: % de três pontos em casa ou fora", "Grande demais: \"o melhor de sempre?\"", "Não são dados: \"quem se esforça mais?\""] },
            { title: "Planear os dados", bullets: ["Que estatísticas", "Quantos jogos", "Onde os vai obter"] }
          ],
          tryIt: "Escreva três perguntas de análise sobre a sua equipa ou uma equipa de que gosta. Pergunte a um assistente de IA qual delas tem mais resposta com fichas de jogo. Escolha uma e faça a lista dos dados de que precisa.",
          youCanNow: "escrever uma pergunta de análise concreta e planear os dados para lhe responder.",
          quickCheck: [
            { objective: "O1", q: "O que faz uma pergunta de análise ter resposta?", options: ["Diz uma estatística e uma comparação que pode contar", "Pergunta quem é a melhor pessoa", "Pergunta sobre sentimentos", "Não tem nenhum número"], answer: 0, why: "Uma boa pergunta aponta para dados que pode recolher e comparar." },
            { objective: "O1", q: "A sua pergunta é \"A nossa equipa é boa?\". O que faz?", options: ["Deixa-a como está", "Torna-a concreta, por exemplo comparar ressaltos por jogo em casa e fora", "Pede a um adepto para votar", "Salta a pergunta e começa a fazer gráficos"], answer: 1, why: "Uma pergunta concreta diz-lhe exatamente que dados recolher." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Recolher e limpar os dados",
          minutes: 6,
          goal: "Recolher os dados de pelo menos 10 jogos e limpá-los para estarem prontos a usar.",
          text: [
            "Obtenha os dados de fontes de confiança: as estatísticas oficiais da sua equipa, os sites da liga ou do desporto escolar, ou as fichas de jogo oficiais. Anote de onde veio cada número.",
            "Ponha-os no Google Sheets: uma linha por jogo, uma coluna por estatística, com uma linha de cabeçalho (Data, Adversário, Casa/Fora, 3PA, 3PM). Limpar quer dizer corrigir problemas: erros de escrita, valores em falta, a mesma equipa escrita de duas maneiras, números guardados como texto ou linhas repetidas.",
            "Um assistente de IA pode ajudar a encontrar problemas: cole a tabela e peça: \"Encontre erros de escrita, linhas repetidas, valores em falta ou nomes diferentes para a mesma coisa. Não mude os números, só faça a lista dos problemas.\" Depois corrija-os você mesmo, usando a fonte original."
          ],
          steps: ["Encontre uma fonte oficial para as suas estatísticas.", "Prepare uma linha por jogo e uma coluna por estatística.", "Introduza pelo menos 10 jogos.", "Procure erros de escrita, linhas repetidas, valores em falta e nomes diferentes.", "Corrija-os usando a fonte, não palpites."],
          words: [["Ficha de jogo (box score)", "uma tabela com as estatísticas de um jogo. 3PA são os lançamentos de três pontos tentados e 3PM os marcados."], ["Limpeza de dados", "corrigir erros e faltas nos dados antes de os usar."], ["Valor em falta", "um espaço em branco onde devia estar um número."]],
          slides: [
            { title: "Fontes de confiança", bullets: ["Estatísticas oficiais da equipa", "Sites da liga ou do desporto escolar", "Anote a fonte"] },
            { title: "Forma da tabela", bullets: ["Uma linha por jogo", "Uma coluna por estatística", "Linha de cabeçalho com nomes claros"] },
            { title: "Limpe-a", bullets: ["Erros de escrita, linhas repetidas, espaços em branco", "O mesmo nome escrito de duas maneiras", "A IA faz a lista dos problemas; você corrige a partir da fonte"] }
          ],
          tryIt: "Introduza no Google Sheets os dados de pelo menos 10 jogos a partir de uma fonte oficial. Peça à IA a lista dos problemas e depois corrija cada um a partir da fonte.",
          youCanNow: "recolher dados desportivos de fontes de confiança e limpá-los.",
          quickCheck: [
            { objective: "O2", q: "O que deve ter cada linha da sua tabela de estatísticas?", options: ["Uma época", "A carreira inteira de um jogador", "Um jogo", "O nome de uma equipa"], answer: 2, why: "Um jogo por linha torna os dados fáceis de contar e verificar." },
            { objective: "O2", q: "Falta o número de tentativas no jogo 7. O que faz?", options: ["Adivinha um número", "Usa a estimativa da IA", "Apaga todos os jogos", "Procura-o na ficha de jogo oficial"], answer: 3, why: "As faltas corrigem-se a partir da fonte original, não com palpites." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Médias, percentagens e taxas",
          minutes: 6,
          goal: "Calcular uma média, uma percentagem e uma taxa por jogo no Google Sheets.",
          text: [
            "Média: some os valores e divida pelo número de valores. No Sheets, =AVERAGE(B2:B11) dá a média dessas células.",
            "Percentagem: cestos marcados a dividir por tentativas. Percentagem de três pontos = 3PM / 3PA. Some primeiro os totais e depois divida: =SUM(E2:E11)/SUM(D2:D11). Fazer a média da percentagem de cada jogo pode dar uma resposta errada quando o número de tentativas muda muito.",
            "Taxa: uma estatística por jogo, por minuto ou por tentativa permite comparações justas quando o tempo de jogo é diferente. Pontos por jogo = total de pontos / jogos disputados. Um assistente de IA pode explicar qualquer fórmula; verifique os resultados de uma linha com uma calculadora."
          ],
          steps: ["Use =AVERAGE() para uma média.", "Para uma percentagem, divida o total de cestos marcados pelo total de tentativas.", "Para uma taxa, divida um total pelos jogos ou pelos minutos.", "Formate as percentagens como percentagem.", "Verifique um resultado com uma calculadora."],
          words: [["Média", "o total a dividir pelo número de valores."], ["Percentagem", "uma parte em 100, como os cestos marcados em relação às tentativas."], ["Taxa", "uma estatística por unidade, como por jogo ou por minuto."]],
          slides: [
            { title: "Média", bullets: ["Total / número de valores", "=AVERAGE(B2:B11)"] },
            { title: "Percentagem", bullets: ["Total marcado / total de tentativas", "=SUM(marcados)/SUM(tentativas)", "Não faça a média das percentagens dos jogos"] },
            { title: "Taxa", bullets: ["Por jogo, por minuto, por tentativa", "Justa quando o tempo de jogo é diferente", "Verifique uma com uma calculadora"] }
          ],
          tryIt: "Na sua folha, calcule uma média, uma percentagem (método dos totais) e uma taxa por jogo. Verifique uma delas com uma calculadora.",
          youCanNow: "calcular médias, percentagens e taxas sem erros numa folha de cálculo.",
          quickCheck: [
            { objective: "O3", q: "O que é uma taxa por jogo?", options: ["Um total a dividir pelo número de jogos", "O resultado do último jogo", "O número mais alto de uma coluna", "Um palpite sobre o próximo jogo"], answer: 0, why: "Uma taxa reparte um total pelos jogos para comparar jogadores de forma justa." },
            { objective: "O3", q: "Calculou uma percentagem da equipa com uma fórmula. Como a verifica?", options: ["Confia na fórmula", "Faz um resultado com uma calculadora", "Pergunta a um adepto", "Muda os dados até parecer certo"], answer: 1, why: "Verificar um resultado à mão apanha erros na fórmula." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Perguntas e dados",
        questions: [
          { objective: "O1", q: "Qual é uma boa pergunta de análise?", options: ["\"Quem é o melhor de sempre?\"", "\"Quem se esforça mais?\"", "\"Lançamos melhor de três pontos em casa ou fora?\"", "\"O desporto é divertido?\""], answer: 2, why: "É concreta e os dados podem responder." },
          { objective: "O2", q: "De onde devem vir os seus dados?", options: ["De estatísticas oficiais da equipa, da liga ou da escola", "Só da memória", "De um comentário qualquer", "De palpites"], answer: 0, why: "Fontes de confiança dão respostas de confiança." },
          { objective: "O2", q: "Limpar os dados quer dizer:", options: ["Apagar todos os dados", "Tornar os números maiores", "Mudar a fonte", "Corrigir erros e faltas antes de usar os dados"], answer: 3, why: "Dados limpos dão resultados certos." },
          { objective: "O3", q: "A melhor maneira de calcular a percentagem de três pontos da equipa em 10 jogos é:", options: ["Fazer a média da percentagem de cada jogo", "Total marcado a dividir pelo total de tentativas", "Somar as percentagens", "Adivinhar"], answer: 1, why: "Os totais tratam bem os jogos com números de tentativas diferentes." },
          { objective: "O3", q: "Porque usar taxas por jogo ou por minuto?", options: ["Para tornar os números maiores", "Para comparar de forma justa quando o tempo de jogo é diferente", "Porque está na moda", "Para esconder dados"], answer: 1, why: "As taxas têm em conta as oportunidades de cada um." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mostrar e explicar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer um gráfico claro",
          minutes: 5,
          goal: "Fazer um gráfico que responda à sua pergunta à primeira vista.",
          text: [
            "Escolha o gráfico que serve para a pergunta. Comparar grupos (casa e fora): um gráfico de barras. Mudança ao longo do tempo (pontos jogo a jogo): um gráfico de linhas. Partes de um todo: normalmente um gráfico de barras é mais claro do que um gráfico circular.",
            "Mantenha-o claro: um título que diz o resultado (\"Em casa lançamos de três pontos 6 pontos percentuais melhor\"), eixos identificados, o eixo vertical a começar no zero nos gráficos de barras, e nenhuma decoração a mais.",
            "No Google Sheets, selecione os dados e insira um gráfico, depois escolha o tipo de gráfico e edite os nomes. Pode perguntar a um assistente de IA que tipo de gráfico serve para a sua pergunta."
          ],
          steps: ["Decida: comparar grupos ou mudança ao longo do tempo?", "Escolha barras ou linhas.", "Insira o gráfico no Sheets.", "Escreva um título que diga o resultado.", "Identifique os eixos; os gráficos de barras começam no zero."],
          words: [["Gráfico de barras", "um gráfico com barras para comparar grupos."], ["Gráfico de linhas", "um gráfico com uma linha para mostrar a mudança ao longo do tempo."], ["Eixo", "a linha ao lado ou em baixo de um gráfico, com os nomes e os valores."]],
          slides: [
            { title: "Escolha o gráfico", bullets: ["Comparar grupos: barras", "Mudança ao longo do tempo: linhas", "Barras costumam ser mais claras do que um gráfico circular"] },
            { title: "Mantenha-o claro", bullets: ["O título diz o resultado", "Eixos identificados", "As barras começam no zero"] },
            { title: "No Sheets", bullets: ["Selecione os dados, insira um gráfico", "Escolha o tipo, edite os nomes"] }
          ],
          tryIt: "Faça um gráfico que responda à sua pergunta. Dê-lhe um título que diga o resultado e identifique os dois eixos.",
          youCanNow: "fazer um gráfico claro que responde a uma pergunta à primeira vista.",
          quickCheck: [
            { objective: "O4", q: "O que deve fazer um bom título de gráfico?", options: ["Dizer só \"Gráfico 1\"", "Mostrar todos os números", "Dizer o resultado", "Ficar em branco"], answer: 2, why: "Um título que diz o resultado deixa as pessoas entender o gráfico à primeira vista." },
            { objective: "O4", q: "Está a comparar os lançamentos em casa e fora. Que gráfico escolhe?", options: ["Um gráfico circular", "Um mapa", "Uma tabela sem gráfico", "Um gráfico de barras"], answer: 3, why: "Os gráficos de barras comparam bem alguns grupos lado a lado." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Correlação, tamanho da amostra e outras armadilhas",
          minutes: 5,
          goal: "Reconhecer três armadilhas comuns que fazem os números enganar.",
          text: [
            "Amostras pequenas: três jogos não chegam para provar muito. Um jogador que marca 4 em 5 não é com certeza um atirador de 80 por cento. Mais jogos dão mais confiança.",
            "Correlação não é causa: se uma equipa ganha mais quando joga de azul, a camisola provavelmente não é a razão. Duas coisas que mudam juntas não querem dizer que uma causa a outra; procure outras explicações, como a força do adversário ou os jogos em casa.",
            "O contexto conta: as estatísticas não mostram tudo, como o esforço na defesa, as lesões ou a qualidade dos adversários. Um assistente de IA pode ajudar a fazer a lista de outras explicações: \"Que mais pode explicar este padrão?\""
          ],
          steps: ["Verifique o tamanho da amostra.", "Pergunte: outra coisa pode explicar isto?", "Veja o contexto: adversários, lesões, casa ou fora.", "Peça à IA outras explicações.", "Escreva quanta confiança tem."],
          words: [["Tamanho da amostra", "quantos jogos ou tentativas os seus dados têm."], ["Correlação", "duas coisas que costumam mudar juntas."], ["Causa (causalidade)", "quando uma coisa faz mesmo acontecer outra."]],
          slides: [
            { title: "Amostras pequenas", bullets: ["4 em 5 não prova 80%", "Mais jogos, mais confiança"] },
            { title: "Correlação não é causa", bullets: ["Camisolas azuis não ganham jogos", "Procure outras explicações"] },
            { title: "Contexto", bullets: ["Adversários, lesões, casa ou fora", "O esforço e a defesa nem sempre são contados"] }
          ],
          tryIt: "Olhe para o seu resultado. Escreva o tamanho da amostra, duas outras coisas que o podem explicar e quanta confiança tem (pouca, média, muita).",
          youCanNow: "reconhecer amostras pequenas, confusões entre correlação e causa e falta de contexto.",
          quickCheck: [
            { objective: "O5", q: "O que é a armadilha da amostra pequena?", options: ["Tirar uma grande conclusão de poucos jogos ou tentativas", "Usar dados oficiais", "Fazer um gráfico de barras", "Identificar os eixos"], answer: 0, why: "Poucos jogos ou tentativas podem mudar muito por acaso." },
            { objective: "O5", q: "A sua equipa marcou mais depois de um novo aquecimento, mas também jogou com adversários mais fracos. O que escreve?", options: ["O aquecimento foi a causa", "Os adversários mais fracos também podem explicar isso", "Nada; está provado", "Apaga o resultado"], answer: 1, why: "Outros fatores podem explicar um padrão, por isso diga quais são." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Explicar o seu resultado",
          minutes: 5,
          goal: "Escrever e partilhar um resultado em três frases com os seus limites.",
          text: [
            "Um bom resultado tem três frases: 1. O que descobriu, com um número. 2. Porque pode ser importante para a equipa. 3. Um limite dos dados. Exemplo: \"Em 12 jogos lançámos de três pontos com 38% em casa e 31% fora. Se isto se mantiver, treinar rotinas para os jogos fora pode ajudar. Com só 6 jogos fora, isto pode ser acaso.\"",
            "Peça a um assistente de IA para deixar as suas frases mais claras e depois verifique você mesmo os números. Mostre o gráfico junto.",
            "Partilhe-o com o seu treinador como informação, não como uma exigência. Os treinadores juntam os números com o que veem. Nunca partilhe em público os dados de um jogador sem autorização."
          ],
          steps: ["Frase 1: o que descobriu, com um número.", "Frase 2: porque pode ser importante.", "Frase 3: um limite.", "Junte o seu gráfico.", "Partilhe com o seu treinador, não em público."],
          words: [["Resultado", "o que a sua análise mostra."], ["Limite", "uma razão pela qual o resultado pode não ser totalmente fiável."]],
          slides: [
            { title: "Três frases", bullets: ["1. O que descobriu, com um número", "2. Porque pode ser importante", "3. Um limite"] },
            { title: "Melhorar", bullets: ["A IA deixa mais claro", "Você verifica os números", "Junte o seu gráfico"] },
            { title: "Partilhar bem", bullets: ["Informação, não exigência", "O treinador junta dados e o que vê", "Dados de jogadores em público só com autorização"] }
          ],
          tryIt: "Tarefa final: escreva o seu resultado em três frases com o gráfico, o tamanho da amostra e a fonte, e partilhe-o com o seu treinador ou com um colega de equipa.",
          youCanNow: "explicar com honestidade um resultado de dados, incluindo os seus limites.",
          quickCheck: [
            { objective: "O6", q: "Quais são as três partes de um bom resultado?", options: ["Uma piada, um gráfico e um palpite", "Só o número maior", "Um número, porque é importante e um limite", "Uma exigência, um prazo e um nome"], answer: 2, why: "Essas três partes tornam um resultado claro e honesto." },
            { objective: "O6", q: "Quer publicar na internet as estatísticas de um colega de equipa. O que faz primeiro?", options: ["Publica-as logo", "Muda um pouco o nome dele", "Publica só os jogos maus", "Pede-lhe autorização"], answer: 3, why: "Os dados de cada jogador só são partilhados em público com autorização." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Mostrar e explicar",
        questions: [
          { objective: "O4", q: "Que gráfico serve para \"pontos jogo a jogo ao longo da época\"?", options: ["Um gráfico circular", "Nenhum gráfico", "Um mapa", "Um gráfico de linhas"], answer: 3, why: "Os gráficos de linhas mostram a mudança ao longo do tempo." },
          { objective: "O4", q: "Um bom título de gráfico:", options: ["Diz o resultado", "Diz \"Gráfico 1\"", "Fica em branco", "É uma piada"], answer: 0, why: "Diz a quem lê o que deve ver." },
          { objective: "O5", q: "Um jogador marca 4 em 5 lançamentos num jogo. Isto prova:", options: ["Que é um atirador de 80%", "Que deve fazer todos os lançamentos", "Pouco; a amostra é pequena", "Nada sobre coisa nenhuma, nunca"], answer: 2, why: "Amostras pequenas podem enganar." },
          { objective: "O5", q: "Uma equipa ganha mais com camisolas azuis. O mais provável é que:", options: ["O azul causa as vitórias", "Nunca se deve jogar de vermelho", "Os dados são falsos", "Outra coisa explique isso"], answer: 3, why: "Correlação não é causa." },
          { objective: "O6", q: "A frase 3 de um resultado é:", options: ["Uma exigência ao treinador", "Um limite dos dados", "Uma piada", "A sua palavra-passe"], answer: 1, why: "Os resultados honestos incluem os limites." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Fundamentos de Análise de Dados no Desporto",
    questions: [
      { objective: "O1", q: "A análise de dados começa com:", options: ["Uma folha de cálculo", "Um gráfico", "Uma pergunta", "Um palpite"], answer: 2, why: "A pergunta guia todo o resto." },
      { objective: "O1", q: "A que pergunta os dados NÃO conseguem responder bem?", options: ["\"Quem se esforça mais?\"", "\"Marcamos mais em casa?\"", "\"O meu serviço é melhor no set 1?\"", "\"Perdemos mais bolas no 4.º período?\""], answer: 0, why: "O esforço não é medido nas fichas de jogo." },
      { objective: "O2", q: "Uma ficha de jogo é:", options: ["Uma tabela com as estatísticas de um jogo", "Uma caixa de presente", "Um tipo de gráfico", "Um banco de suplentes"], answer: 0, why: "Mostra as estatísticas de um jogo." },
      { objective: "O2", q: "Na sua tabela, cada linha deve ser:", options: ["Uma época", "Um número qualquer", "Um jogo", "Um gráfico"], answer: 2, why: "Uma linha por jogo mantém a tabela organizada." },
      { objective: "O2", q: "\"Lincoln HS\" e \"Lincoln High\" na mesma coluna são:", options: ["Normais", "Nomes diferentes para limpar", "Um gráfico", "Uma fórmula"], answer: 1, why: "A mesma equipa escrita de duas maneiras estraga as contagens." },
      { objective: "O2", q: "A IA encontra um valor em falta. Corrige-o:", options: ["Adivinhando", "Deixando a IA inventá-lo", "Apagando a coluna", "Verificando a fonte original"], answer: 3, why: "Corrija a partir da fonte, não com palpites." },
      { objective: "O3", q: "=AVERAGE(B2:B11) dá:", options: ["O total", "O valor maior", "A média dessas células", "O gráfico"], answer: 2, why: "AVERAGE calcula a média." },
      { objective: "O3", q: "A percentagem de três pontos é igual a:", options: ["3PA a dividir por 3PM", "3PM mais 3PA", "Pontos a dividir por jogos", "3PM a dividir por 3PA"], answer: 3, why: "Cestos marcados a dividir por tentativas." },
      { objective: "O3", q: "Porque não fazer a média da percentagem de cada jogo?", options: ["Os jogos com números de tentativas diferentes ficam com o peso errado", "É proibido", "Está sempre certo", "O Sheets não consegue"], answer: 0, why: "Use os totais para uma percentagem verdadeira." },
      { objective: "O3", q: "Pontos por jogo é:", options: ["Uma percentagem", "Uma taxa", "Um gráfico", "Uma ficha de jogo"], answer: 1, why: "É uma estatística por jogo." },
      { objective: "O3", q: "Verifica uma fórmula:", options: ["Confiando nela", "Apagando-a", "Fazendo uma linha com uma calculadora", "Perguntando a um adepto"], answer: 2, why: "Uma verificação à mão apanha os erros." },
      { objective: "O4", q: "Para comparar casa e fora, use:", options: ["Um gráfico de barras", "Só um gráfico de linhas ao longo do tempo", "Nenhum gráfico", "Uma fotografia"], answer: 0, why: "As barras comparam grupos." },
      { objective: "O4", q: "Nos gráficos de barras, o eixo vertical deve normalmente começar:", options: ["No valor mais pequeno", "No 100", "Em qualquer lado", "No zero"], answer: 3, why: "Se não, as diferenças parecem maiores do que são." },
      { objective: "O4", q: "Normalmente mais claro do que um gráfico circular:", options: ["Um gráfico circular em 3D", "Um gráfico de barras", "Uma nuvem de palavras", "Uma página em branco"], answer: 1, why: "As barras são mais fáceis de comparar." },
      { objective: "O5", q: "Tamanho da amostra quer dizer:", options: ["O número do seu sapato", "Quantos jogos ou tentativas os seus dados têm", "O tamanho do gráfico", "O tamanho da equipa"], answer: 1, why: "Mais dados dão mais confiança." },
      { objective: "O5", q: "Correlação quer dizer:", options: ["Uma coisa causa a outra", "Um tipo de gráfico", "Um passo da limpeza", "Duas coisas costumam mudar juntas"], answer: 3, why: "Mudar juntas não é causar." },
      { objective: "O5", q: "Que contexto as estatísticas podem não mostrar?", options: ["A força do adversário e as lesões", "Os pontos", "Os ressaltos", "O resultado final"], answer: 0, why: "O contexto explica os números." },
      { objective: "O6", q: "Um bom resultado inclui:", options: ["Só opiniões", "Todas as estatísticas", "Um número, porque é importante e um limite", "Nenhum número"], answer: 2, why: "É o formato das três frases." },
      { objective: "O6", q: "Partilha um resultado com o seu treinador como:", options: ["Uma ordem", "Uma publicação nas redes sociais", "Um segredo", "Informação, não uma exigência"], answer: 3, why: "Os treinadores juntam os dados com o que veem." },
      { objective: "O6", q: "Os dados de cada jogador devem ser partilhados em público:", options: ["Sempre", "Só com autorização", "Com as equipas rivais", "Nos comentários"], answer: 1, why: "Os dados de um jogador são pessoais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 5, 7, 8, 11, 14, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pergunta", objective: "O1", notYet: "A pergunta é vaga ou não tem resposta com estatísticas.", meets: "A pergunta diz uma estatística, os jogos e uma comparação.", exceeds: "Também diz porque a resposta é importante para a equipa." },
      { name: "Dados limpos", objective: "O2", notYet: "Menos de 10 jogos, sem fonte, ou com faltas e nomes diferentes que ficaram.", meets: "Pelo menos 10 jogos de uma fonte oficial, um por linha, limpos.", exceeds: "Anota cada correção feita e onde foi verificada." },
      { name: "Cálculos", objective: "O3", notYet: "Falta um cálculo ou a percentagem é a média das percentagens dos jogos.", meets: "Uma média, uma percentagem pelo método dos totais e uma taxa por jogo, uma delas verificada à mão.", exceeds: "As fórmulas têm nomes para que outra pessoa as possa seguir." },
      { name: "Gráfico", objective: "O4", notYet: "Tipo de gráfico errado, sem título ou eixos sem nome.", meets: "Um gráfico que serve, com um título que diz o resultado e eixos identificados.", exceeds: "Os gráficos de barras começam no zero e nada a mais distrai do resultado." },
      { name: "Resultado honesto", objective: "O6", notYet: "Diz que prova algo ou deixa de fora o tamanho da amostra e os limites.", meets: "Três frases: um número, porque é importante e um limite, com a fonte.", exceeds: "Também diz outras explicações possíveis e um nível de confiança." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que partilham um resultado de dados com um treinador ou uma equipa em 30 dias (inquérito de seguimento)",
      "Treinadores ou equipas que dizem ter usado a análise de um aluno numa decisão",
      "Alunos que começam outro curso da Koach Learn sobre atletas ou dados em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com o Google Sheets gratuito",
      "Acesso a uma página oficial de estatísticas da equipa, da liga ou da escola",
      "Uma calculadora e um assistente de IA gratuito",
      "Cerca de 60 minutos para as lições, as verificações e o questionário, mais o tempo para introduzir os dados de 10 jogos"
    ],
    facilitatorNotes: [
      "Deixe pequenos grupos escolher uma equipa e dividir a introdução dos dados; depois comparem as folhas limpas.",
      "Mostre ao vivo o método dos totais para as percentagens; é o erro mais comum.",
      "Use estatísticas da equipa ou públicas para praticar; peça autorização antes de partilhar os números de qualquer jogador.",
      "Peça a cada grupo para ler o seu resultado em voz alta e dizer um limite antes de o partilhar com um treinador.",
      "Avalie a tarefa final com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
