"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-ai-donor-analytics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-ai-donor-analytics-pt",
  lang: "pt",
  translationOf: "nonprofit-ai-donor-analytics",
  category: "Non Profits",
  name: "Análise de Doadores com IA",
  skills: "Preparar uma folha de cálculo de doadores segura, Medir a retenção e a doação média, Agrupar doadores em segmentos, Usar a IA para explicar números, Transformar resultados num plano de angariação de fundos",
  outcome: "pegar numa folha de cálculo de doadores sem nomes, calcular a sua taxa de retenção, a doação média e os grupos de doadores, usar um assistente de IA para explicar o que os números querem dizer e escrever um plano de uma página para o seu próximo apelo.",
  about: [
    "Este curso é para funcionários de organizações sem fins lucrativos e de organizações religiosas, responsáveis de angariação de fundos, membros de direção e voluntários que têm uma lista de doadores e querem angariar mais ao compreendê-la.",
    "Você vai aprender alguns números simples sobre doadores, como calculá-los numa folha de cálculo como o Google Sheets ou o Microsoft Excel, como usar a IA para os explicar e fazer gráficos sem partilhar informações privadas de ninguém, e como transformar o que descobre em ação.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça uma cópia segura da sua lista de doadores (ou da lista de prática da Lição 1) com os nomes e contactos trocados por códigos de doador. Calcule a sua taxa de retenção e a doação média, separe os doadores em pelo menos três grupos, peça a um assistente de IA para explicar os resultados e sugerir uma ação para cada grupo, e escreva um plano de apelo de uma página que você mesmo verifica.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Funcionários de organizações sem fins lucrativos e de organizações religiosas, responsáveis de angariação de fundos, membros de direção e voluntários que têm uma lista de doadores e querem angariar mais ao compreendê-la.",
    startingPoint: "Guardam os registos dos doadores numa folha de cálculo ou num sistema de doadores e enviam apelos. Muitos nunca calcularam uma taxa de retenção, nunca agruparam doadores em segmentos nem usaram IA para explicar os seus números.",
    gap: "Sem saber quem volta e quem se afasta, as organizações enviam o mesmo apelo a todos e perdem doadores que podiam ter mantido. Os alunos precisam de transformar os seus próprios registos em alguns números importantes e num plano, usando a IA com segurança sem expor informações dos doadores.",
    constraints: [
      "Privacidade: nomes, contactos e notas são retirados antes de qualquer análise; só números resumidos vão para a IA",
      "Conhecimentos básicos de folha de cálculo: SUM, AVERAGE, ordenar, filtrar e um gráfico simples",
      "A IA pode errar nas contas e inventar valores de referência, por isso cada número é verificado de novo",
      "Aplicam-se as regras de contacto com doadores e de recusa de contacto, e a política de privacidade da organização",
      "Tempo: cerca de 60 minutos no total, em lições de 5 minutos"
    ],
    prerequisites: "Uso básico de folha de cálculo. O curso \"Introdução à IA para Organizações sem Fins Lucrativos\" ajuda."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de doadores", action: "fazer uma cópia de trabalho anónima, com os nomes trocados por códigos e os contactos apagados", standard: "guardando só o código, a data da doação, o valor e a campanha" },
    { id: "O2", condition: "Com uma folha de cálculo de doadores anónima", action: "calcular o total angariado, a doação média e a taxa de retenção de doadores", standard: "acertando em cada número" },
    { id: "O3", condition: "Com os códigos dos seus doadores e o histórico de doações", action: "separar os doadores nos segmentos Novos, Repetentes, Afastados e Maiores e contar cada grupo", standard: "com cada código de doador num segmento" },
    { id: "O4", condition: "Com os seus números resumidos", action: "pedir a um assistente de IA que os explique com palavras simples e verificar de novo qualquer conta ou valor de referência que ele dê", standard: "colando só números resumidos, nunca a lista de doadores" },
    { id: "O5", condition: "Com as contagens dos seus segmentos", action: "criar um gráfico de barras com um título claro no Google Sheets ou no Excel", standard: "que mostre uma só mensagem" },
    { id: "O6", condition: "Com os seus resultados", action: "escrever um plano de apelo de uma página com uma ação, um responsável e uma data para cada segmento", standard: "usando marcadores no lugar dos nomes dos doadores e verificado com o seu diretor" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conheça os números dos seus doadores",
      lessons: [
        {
          objectives: ["O1"],
          title: "Preparar os dados dos doadores com segurança",
          minutes: 5,
          goal: "Fazer uma cópia limpa e anónima de uma lista de doadores, segura para analisar.",
          text: [
            "Análise de doadores quer dizer olhar para os registos de doações para saber quem doa, quanto, com que frequência e se volta a doar. Só precisa de uma folha de cálculo.",
            "Os nomes, moradas, e-mails e valores doados pelos doadores são privados e têm de ser protegidos. Antes de analisar qualquer coisa com IA, faça uma cópia e troque cada nome por um código como D001. Apague moradas, números de telefone, e-mails e notas. Guarde só o código, a data da doação, o valor e, se tiver, a campanha ou o fundo.",
            "Guarde a lista verdadeira no seu sistema de doadores ou num ficheiro protegido. A cópia anónima é aquela com que trabalha. Siga a política de privacidade da sua organização e as promessas que fez aos doadores."
          ],
          steps: ["Exporte ou copie a sua lista de doadores para uma folha de cálculo.", "Guarde uma cópia separada com o nome \"donors-anonymous\".", "Troque cada nome por um código como D001, D002.", "Apague moradas, números de telefone, e-mails e notas.", "Guarde só o código, a data da doação, o valor e a campanha."],
          words: [["Análise de doadores", "estudar os registos de doações para saber quem doa, quanto, com que frequência e se volta."], ["Anónimo", "sem nomes nem contactos, para que ninguém saiba quem é quem."], ["Folha de cálculo", "uma tabela de linhas e colunas, como o Google Sheets ou o Microsoft Excel."]],
          slides: [
            { title: "O que é a análise de doadores", bullets: ["Quem doa, quanto, com que frequência", "Se os doadores voltam", "Só precisa de uma folha de cálculo"] },
            { title: "Primeiro, proteja os doadores", bullets: ["Faça uma cópia separada", "Troque os nomes por códigos como D001", "Apague moradas, telefones, e-mails e notas"] },
            { title: "Guarde só", bullets: ["Código do doador", "Data e valor da doação", "Campanha ou fundo"] }
          ],
          tryIt: "Faça uma lista de prática numa folha de cálculo com 12 linhas: código (D001 a D010, alguns repetidos), data da doação (ano passado e este ano) e valor. Ou faça uma cópia anónima da sua lista verdadeira seguindo os passos.",
          youCanNow: "preparar uma lista de doadores segura para analisar, sem nomes nem contactos.",
          quickCheck: [
            { objective: "O1", q: "O que apaga da cópia anónima?", options: ["Moradas, números de telefone, e-mails e notas", "Os valores das doações", "As datas das doações", "Os códigos dos doadores"], answer: 0, why: "Apague os contactos e as notas; guarde o código, a data, o valor e a campanha." },
            { objective: "O1", q: "Um voluntário quer analisar a lista verdadeira de doadores no seu computador pessoal. O que faz?", options: ["Envia-lhe a lista verdadeira por e-mail", "Dá-lhe a cópia anónima e guarda a lista verdadeira no ficheiro protegido", "Imprime-lhe a lista verdadeira", "Cola a lista verdadeira na IA por ele"], answer: 1, why: "Mantenha a lista verdadeira protegida; trabalhe com a cópia anónima." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Três números que todas as organizações devem conhecer",
          minutes: 6,
          goal: "Calcular o total angariado, a doação média e a taxa de retenção de doadores.",
          text: [
            "O total angariado é a soma de todas as doações. A doação média é o total angariado dividido pelo número de doações. Numa folha de cálculo, =SUM() soma uma coluna e =AVERAGE() dá a média.",
            "A taxa de retenção de doadores diz quantos dos doadores do ano passado voltaram a doar este ano. Conte os doadores que doaram no ano passado. Conte quantos desses também doaram este ano. Divida o segundo número pelo primeiro e multiplique por 100. Se 40 doadores doaram no ano passado e 18 deles voltaram a doar, a retenção é 18 / 40 = 45 por cento.",
            "A retenção é importante porque manter um doador costuma custar menos do que encontrar um novo. Uma taxa baixa é um sinal para agradecer e informar melhor os doadores."
          ],
          steps: ["Total angariado: =SUM() da coluna dos valores.", "Doação média: =AVERAGE() da coluna dos valores.", "Conte os doadores diferentes que doaram no ano passado.", "Conte quantos deles também doaram este ano.", "Retenção = doadores que repetiram este ano / doadores do ano passado x 100."],
          words: [["Doação média", "o total angariado dividido pelo número de doações."], ["Taxa de retenção", "a percentagem dos doadores do ano passado que voltaram a doar este ano."], ["Fórmula", "um cálculo escrito numa célula da folha de cálculo, que começa com =. No Excel em português, =SUM() pode chamar-se =SOMA() e =AVERAGE() pode chamar-se =MÉDIA()."]],
          slides: [
            { title: "Total e média", bullets: ["Total angariado: =SUM(valores)", "Doação média: =AVERAGE(valores)"] },
            { title: "Taxa de retenção", bullets: ["Doadores do ano passado que voltaram a doar", "A dividir por todos os doadores do ano passado", "Vezes 100 = percentagem"] },
            { title: "Exemplo", bullets: ["40 doadores no ano passado", "18 deles voltaram a doar", "18 / 40 = 45 por cento de retenção"] },
            { title: "Porque é importante", bullets: ["Manter doadores custa menos do que encontrar novos", "Retenção baixa = agradecer e informar melhor"] }
          ],
          tryIt: "Com a sua lista de prática ou a cópia anónima, calcule o total angariado, a doação média e a taxa de retenção. Escreva os três números.",
          youCanNow: "calcular o total angariado, a doação média e a taxa de retenção de doadores numa folha de cálculo.",
          quickCheck: [
            { objective: "O2", q: "Que fórmula soma uma coluna de doações?", options: ["=AVERAGE()", "=COUNT()", "=SUM()", "=IF()"], answer: 2, why: "=SUM() soma uma coluna; =AVERAGE() dá a média." },
            { objective: "O2", q: "20 doadores doaram no ano passado e 10 deles voltaram a doar. Qual é a sua taxa de retenção?", options: ["10 por cento", "20 por cento", "200 por cento", "50 por cento"], answer: 3, why: "10 / 20 = 0,5, vezes 100 = 50 por cento." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Agrupar doadores em segmentos",
          minutes: 5,
          goal: "Separar os doadores em grupos simples para que cada grupo receba a mensagem certa.",
          text: [
            "Um segmento é um grupo de doadores parecidos numa coisa que importa. Grupos diferentes precisam de mensagens diferentes.",
            "Segmentos simples para começar: doadores Novos (primeira doação este ano), doadores Repetentes (doaram no ano passado e este ano), doadores Afastados (doaram no ano passado mas não este ano) e doadores Maiores (doações acima de um valor que você escolhe, como os seus 10 por cento de topo).",
            "Acrescente uma coluna chamada Segmento e preencha-a para cada código de doador. Pode usar o filtro ou a ordenação da folha de cálculo para os agrupar. Conte quantos doadores há em cada grupo."
          ],
          steps: ["Acrescente uma coluna chamada Segmento.", "Marque cada código de doador como Novo, Repetente, Afastado ou Maior.", "Use ordenar ou filtrar para os agrupar.", "Conte os doadores de cada grupo."],
          words: [["Segmento", "um grupo de doadores parecidos numa coisa que importa, como novos ou afastados."], ["Doador afastado", "alguém que já doou mas não doou este ano."]],
          slides: [
            { title: "O que é um segmento", bullets: ["Um grupo de doadores parecidos", "Cada grupo recebe a mensagem certa"] },
            { title: "Quatro segmentos para começar", bullets: ["Novos: primeira doação este ano", "Repetentes: doaram no ano passado e este ano", "Afastados: doaram no ano passado, não este ano", "Maiores: acima de um valor que você escolhe"] },
            { title: "Na folha de cálculo", bullets: ["Acrescente uma coluna Segmento", "Ordene ou filtre para agrupar", "Conte cada grupo"] }
          ],
          tryIt: "Acrescente uma coluna Segmento à sua lista. Marque cada código de doador e conte quantos são Novos, Repetentes, Afastados e Maiores.",
          youCanNow: "separar os doadores em segmentos e contar cada grupo.",
          quickCheck: [
            { objective: "O3", q: "Em que segmento fica um doador que doou no ano passado e este ano?", options: ["Repetentes", "Novos", "Afastados", "Maiores"], answer: 0, why: "Os doadores repetentes doaram no ano passado e este ano." },
            { objective: "O3", q: "Quer ver todos os doadores afastados juntos. O que faz na folha de cálculo?", options: ["Escreve-os de novo numa página nova", "Usa o filtro ou a ordenação na coluna Segmento", "Apaga todos os outros", "Pede à IA para os adivinhar"], answer: 1, why: "Use o filtro ou a ordenação da folha de cálculo para os agrupar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conheça os números dos seus doadores",
        questions: [
          { objective: "O1", q: "Antes de analisar dados de doadores com IA, o que deve fazer?", options: ["Colar a lista completa com nomes", "Enviá-la por e-mail aos voluntários", "Fazer uma cópia com os nomes trocados por códigos e os contactos apagados", "Publicá-la na internet"], answer: 2, why: "Uma cópia anónima protege as informações privadas dos doadores." },
          { objective: "O2", q: "40 doadores doaram no ano passado e 18 deles voltaram a doar este ano. Qual é a taxa de retenção?", options: ["18 por cento", "40 por cento", "45 por cento", "58 por cento"], answer: 2, why: "18 a dividir por 40 dá 0,45, ou seja, 45 por cento." },
          { objective: "O2", q: "Que fórmula da folha de cálculo dá a doação média?", options: ["=COUNT()", "=TODAY()", "=MAX()", "=AVERAGE()"], answer: 3, why: "=AVERAGE() divide o total pelo número de doações." },
          { objective: "O3", q: "Um doador doou no ano passado mas não este ano. Em que segmento fica?", options: ["Novos", "Afastados", "Repetentes", "Maiores"], answer: 1, why: "Os doadores afastados já doaram mas não este ano." },
          { objective: "O2", q: "Porque é que a retenção é importante?", options: ["A IA exige-a", "Manter doadores costuma custar menos do que encontrar novos", "Torna a folha de cálculo maior", "Define a taxa de imposto"], answer: 1, why: "Uma boa retenção mantém as doações estáveis com menos custos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dos números à ação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar a IA para explicar os seus números",
          minutes: 5,
          goal: "Pedir a um assistente de IA que explique números anónimos de doadores com palavras simples.",
          text: [
            "Pode colar os seus números resumidos, e não a sua lista de doadores, num assistente de IA como o ChatGPT, o Microsoft Copilot ou o Google Gemini e perguntar o que querem dizer.",
            "Por exemplo: \"Dirijo um pequeno banco alimentar. No ano passado, 40 doadores; este ano, 35. Retenção de 45 por cento. Doação média de $85. Segmentos: 17 novos, 18 repetentes, 22 afastados, 4 maiores. Explique com palavras simples o que estes números me dizem e que perguntas devo fazer a seguir.\"",
            "A IA também pode sugerir fórmulas ou tipos de gráfico se você ficar sem saber o que fazer. Verifique você mesmo qualquer conta que ela faça; a IA pode errar nas contas e pode inventar valores de referência que parecem verdadeiros."
          ],
          steps: ["Escreva os seus números resumidos, não doadores individuais.", "Diga que tipo de organização é a sua.", "Peça à IA para explicar os números com palavras simples.", "Pergunte que perguntas deve fazer a seguir.", "Verifique você mesmo todas as contas."],
          words: [["Números resumidos", "totais, médias e contagens, não informações sobre uma pessoa."], ["Valor de referência", "um número típico usado para comparar; a IA pode inventá-los, por isso verifique a fonte."]],
          slides: [
            { title: "Partilhe resumos, não pessoas", bullets: ["Totais, médias, contagens", "Nunca nomes nem doações individuais com nomes"] },
            { title: "Um bom pedido", bullets: ["O que a sua organização faz", "Os seus números resumidos", "\"Explique com palavras simples; o que devo perguntar a seguir?\""] },
            { title: "Verifique a IA", bullets: ["Refaça você mesmo as contas", "Cuidado com os valores de referência", "Pergunte de onde vem um número"] }
          ],
          tryIt: "Cole só os seus números resumidos (totais, retenção, doação média, contagens dos segmentos) num assistente de IA e peça-lhe para os explicar e sugerir três perguntas para fazer a seguir.",
          youCanNow: "usar um assistente de IA para explicar números de doadores sem partilhar informações privadas de nenhum doador.",
          quickCheck: [
            { objective: "O4", q: "Além de explicar números, em que mais pode a IA ajudar nesta lição?", options: ["Encontrar as moradas dos doadores", "Decidir quanto cada doador doa", "Sugerir fórmulas ou tipos de gráfico", "Enviar apelos sozinha"], answer: 2, why: "A IA pode sugerir fórmulas ou tipos de gráfico se você ficar sem saber o que fazer." },
            { objective: "O4", q: "A IA diz que a sua doação média é $95, mas a sua folha de cálculo diz $85. O que faz?", options: ["Usa $95", "Usa a média dos dois", "Pede à IA para concordar com você", "Verifica você mesmo a conta e usa o número certo"], answer: 3, why: "A IA pode errar nas contas, por isso verifique você mesmo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um gráfico simples",
          minutes: 4,
          goal: "Fazer um gráfico que mostre claramente os segmentos dos seus doadores.",
          text: [
            "Um gráfico ajuda a sua direção e a sua equipa a ver a história depressa. Um gráfico de barras funciona bem para segmentos: uma barra para Novos, Repetentes, Afastados e Maiores.",
            "No Google Sheets ou no Excel, ponha os nomes dos segmentos numa coluna e as contagens na seguinte. Selecione as duas colunas e depois use o menu Inserir para acrescentar um gráfico e escolha um gráfico de barras ou de colunas.",
            "Dê ao gráfico um título claro como \"Os nossos doadores este ano por grupo\". Mantenha-o simples: uma mensagem por gráfico."
          ],
          steps: ["Faça uma pequena tabela: nome do segmento e contagem.", "Selecione as duas colunas.", "Insira um gráfico e escolha um gráfico de barras ou de colunas.", "Dê-lhe um título claro.", "Verifique se os números são iguais aos da tabela."],
          words: [["Gráfico de barras", "um gráfico que compara quantidades com barras de comprimentos diferentes."]],
          slides: [
            { title: "Porquê um gráfico", bullets: ["A sua direção vê a história depressa", "Uma mensagem por gráfico"] },
            { title: "Faça-o", bullets: ["Tabela: segmento e contagem", "Selecione as duas colunas", "Inserir e depois escolha um gráfico de barras"] },
            { title: "Termine-o", bullets: ["Acrescente um título claro", "Verifique se os números são iguais"] }
          ],
          tryIt: "Faça um gráfico de barras das contagens dos seus quatro segmentos, com um título claro.",
          youCanNow: "fazer um gráfico de barras claro dos segmentos de doadores para a sua equipa ou direção.",
          quickCheck: [
            { objective: "O5", q: "O que seleciona antes de inserir um gráfico?", options: ["Os nomes dos segmentos e as suas contagens", "A lista completa de doadores com nomes", "Só o título", "Uma coluna vazia"], answer: 0, why: "Selecione a coluna dos nomes dos segmentos e a coluna das contagens e depois insira o gráfico." },
            { objective: "O5", q: "O seu gráfico tenta mostrar segmentos, valores das doações e meses ao mesmo tempo. O que faz?", options: ["Acrescenta mais cores", "Fica com uma mensagem por gráfico", "Tira o título", "Usa um gráfico 3D"], answer: 1, why: "Mantenha-o simples: uma mensagem por gráfico." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Transformar os resultados num plano de apelo",
          minutes: 6,
          goal: "Escrever um plano de uma página com uma ação para cada segmento de doadores.",
          text: [
            "Os números só importam se mudarem o que você faz. Para cada segmento, escolha uma ação. Doadores novos: umas boas-vindas calorosas e uma história sobre o que a doação fez. Doadores repetentes: um agradecimento e um convite para doar todos os meses. Doadores afastados: uma nota \"temos saudades suas\" com notícias. Doadores maiores: uma chamada ou visita pessoal de um líder.",
            "A IA pode escrever o rascunho de cada mensagem. Use marcadores como [nome do doador] e [resultado do programa] e depois preencha-os você mesmo no seu sistema de doadores ou na impressão em série.",
            "Escreva um plano de uma página: os seus três números principais, o gráfico, uma ação por segmento, quem a faz e até quando. Verifique-o com o seu diretor antes de enviar alguma coisa. Siga as regras da sua organização sobre contacto com doadores e recusa de contacto."
          ],
          steps: ["Escreva os seus três números principais no topo.", "Acrescente o seu gráfico.", "Escolha uma ação por segmento.", "Peça à IA para escrever o rascunho de cada mensagem com marcadores.", "Acrescente quem faz o quê e até quando, e obtenha aprovação."],
          words: [["Apelo", "um pedido aos apoiantes para que doem."], ["Impressão em série (mail merge)", "uma ferramenta que preenche cada carta ou e-mail com os dados de uma pessoa a partir de uma lista."]],
          slides: [
            { title: "Uma ação por segmento", bullets: ["Novos: boas-vindas e uma história", "Repetentes: agradecimento e convite para doar todos os meses", "Afastados: \"temos saudades suas\" e notícias", "Maiores: chamada pessoal de um líder"] },
            { title: "Rascunhos com IA", bullets: ["Use [nome do doador] e [resultado do programa]", "Preencha você mesmo os dados verdadeiros"] },
            { title: "O seu plano de uma página", bullets: ["Três números principais e o gráfico", "Ação por segmento", "Quem faz e até quando", "Aprovado antes de enviar"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de apelo de uma página com os seus três números, o gráfico, uma ação por segmento e os responsáveis. Peça à IA para escrever o rascunho da nota \"temos saudades suas\" com marcadores e depois edite-a com as suas palavras.",
          youCanNow: "transformar números de doadores num plano de apelo prático que respeita a privacidade dos doadores.",
          quickCheck: [
            { objective: "O6", q: "Qual é uma boa ação para os doadores novos?", options: ["Ignorá-los até ao próximo ano", "Pedir-lhes logo para doar todos os meses", "Umas boas-vindas calorosas e uma história sobre o que a doação fez", "Uma nota \"temos saudades suas\""], answer: 2, why: "Os doadores novos recebem umas boas-vindas calorosas e uma história sobre o que a doação fez." },
            { objective: "O6", q: "O seu plano de apelo está escrito. O que faz antes de enviar alguma coisa?", options: ["Envia-o a todos os doadores de uma vez", "Publica-o nas redes sociais", "Pede à IA para o aprovar", "Verifica-o com o seu diretor e segue as suas regras de contacto com doadores e de recusa de contacto"], answer: 3, why: "Verifique com o seu diretor e siga as suas regras sobre contacto com doadores e recusa de contacto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Dos números à ação",
        questions: [
          { objective: "O4", q: "O que é seguro colar num assistente de IA?", options: ["A sua lista completa de doadores", "Os e-mails dos doadores", "As moradas dos doadores", "Números resumidos como a retenção e as contagens dos segmentos"], answer: 3, why: "Os resumos não revelam nenhuma pessoa." },
          { objective: "O4", q: "A IA diz \"a maioria dos bancos alimentares mantém 70 por cento dos doadores\". O que faz?", options: ["Pede uma fonte e verifica-a antes de usar", "Põe-no logo no relatório para a direção", "Assume que é verdade", "Apaga os seus próprios números"], answer: 0, why: "A IA pode inventar valores de referência; verifique a fonte." },
          { objective: "O5", q: "Que gráfico funciona bem para comparar as contagens dos segmentos?", options: ["Um mapa", "Uma fotografia", "Um gráfico de barras", "Um calendário"], answer: 2, why: "As barras facilitam comparar o tamanho dos grupos." },
          { objective: "O6", q: "Qual é uma boa ação para os doadores afastados?", options: ["Retirá-los para sempre", "Pedir o número da conta bancária deles", "Não enviar nada", "Uma nota \"temos saudades suas\" com notícias"], answer: 3, why: "Notícias calorosas convidam-nos a voltar." },
          { objective: "O6", q: "Quando a IA escreve rascunhos de cartas para doadores, como aparecem os nomes?", options: ["Nomes verdadeiros escritos no pedido", "Nunca há nomes, nem na carta final", "Marcadores como [nome do doador] preenchidos depois", "Só os apelidos"], answer: 2, why: "Os marcadores mantêm os nomes fora da ferramenta de IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Análise de Doadores com IA",
    questions: [
      { objective: "O1", q: "A análise de doadores é:", options: ["Vender listas de doadores", "Estudar os registos de doações para saber quem doa, quanto e com que frequência", "Adivinhar quem pode doar", "Um tipo de aplicação de IA"], answer: 1, why: "Usa os seus próprios registos para orientar a angariação de fundos." },
      { objective: "O1", q: "Por que troca os nomes dos doadores na sua cópia de trabalho?", options: ["Por códigos como D001", "Por alcunhas", "Por números de telefone", "Por nada"], answer: 0, why: "Os códigos deixam analisar sem mostrar quem é quem." },
      { objective: "O1", q: "Que colunas deve guardar a cópia anónima?", options: ["Morada e e-mail", "Telefone e notas", "Código, data da doação, valor e campanha", "Dados bancários"], answer: 2, why: "É tudo o que precisa para os números." },
      { objective: "O1", q: "Onde deve ficar a lista verdadeira de doadores?", options: ["No seu sistema de doadores ou num ficheiro protegido", "Numa pasta pública", "Numa conversa com a IA", "Num grupo de mensagens"], answer: 0, why: "Os registos privados ficam protegidos." },
      { objective: "O2", q: "O total angariado encontra-se com:", options: ["=TODAY()", "=COUNT() das datas", "Um palpite", "=SUM() dos valores"], answer: 3, why: "=SUM() soma todas as doações." },
      { objective: "O2", q: "A doação média é igual a:", options: ["A maior doação", "O total angariado a dividir pelo número de doações", "O número de doadores", "A menor doação vezes dois"], answer: 1, why: "É essa a definição de média." },
      { objective: "O2", q: "50 doadores doaram no ano passado; 30 deles voltaram a doar. A retenção é:", options: ["30 por cento", "50 por cento", "60 por cento", "80 por cento"], answer: 2, why: "30 / 50 = 0,6, ou seja, 60 por cento." },
      { objective: "O2", q: "Uma taxa de retenção baixa sugere que deve:", options: ["Parar de angariar fundos", "Subir os preços", "Apagar os doadores antigos", "Agradecer e informar melhor os doadores"], answer: 3, why: "Cuidar melhor dos doadores fá-los voltar." },
      { objective: "O3", q: "A primeira doação de um doador foi este ano. O seu segmento é:", options: ["Novos", "Afastados", "Repetentes", "Maiores"], answer: 0, why: "Os doadores novos doaram pela primeira vez este ano." },
      { objective: "O3", q: "Um segmento é:", options: ["Um só doador", "Um tipo de gráfico", "Um grupo de doadores parecidos numa coisa que importa", "Um formulário de impostos"], answer: 2, why: "Os segmentos deixam enviar a mensagem certa a cada grupo." },
      { objective: "O3", q: "Para agrupar doadores numa folha de cálculo, pode:", options: ["Imprimir e cortar o papel", "Pedir aos doadores que se separem sozinhos", "Apagar linhas", "Acrescentar uma coluna Segmento e ordenar ou filtrar"], answer: 3, why: "Ordenar e filtrar agrupa as linhas por segmento." },
      { objective: "O4", q: "Que pedido é seguro e útil?", options: ["\"Aqui estão os nomes e as doações de todos os nossos doadores...\"", "\"Aqui está o nosso acesso ao banco.\"", "\"Retenção de 45 por cento, doação média de $85, 22 afastados. Explique com palavras simples.\"", "\"Adivinhe os nossos doadores.\""], answer: 2, why: "Partilha só números resumidos e faz uma pergunta clara." },
      { objective: "O4", q: "A IA fez algumas contas com os seus números. Você deve:", options: ["Confiar totalmente", "Verificá-las você mesmo", "Enviá-las à direção sem verificar", "Ignorar todos os números"], answer: 1, why: "A IA pode errar nas contas." },
      { objective: "O4", q: "Um valor de referência dado pela IA sem fonte deve ser:", options: ["Verificado antes de o usar", "Usado no seu relatório de subvenção", "Publicado no seu site", "Partilhado com os doadores"], answer: 0, why: "A IA pode inventar números que parecem verdadeiros." },
      { objective: "O5", q: "Para fazer um gráfico no Sheets ou no Excel, primeiro:", options: ["Fecha o ficheiro", "Escreve uma palavra-passe", "Seleciona a tabela com os nomes dos segmentos e as contagens", "Apaga os dados"], answer: 2, why: "O gráfico é feito a partir dos dados selecionados." },
      { objective: "O5", q: "Um bom título de gráfico é:", options: ["\"Os nossos doadores este ano por grupo\"", "\"Gráfico 1\"", "Sem título", "\"Dados\""], answer: 0, why: "Um título claro diz a mensagem a quem lê." },
      { objective: "O6", q: "Uma boa ação para os doadores repetentes é:", options: ["Ignorá-los", "Pedir as palavras-passe deles", "Retirá-los da lista", "Um agradecimento e um convite para doar todos os meses"], answer: 3, why: "Os doadores fiéis são os melhores candidatos para doar todos os meses." },
      { objective: "O6", q: "Para os doadores maiores, uma boa ação é:", options: ["Só uma carta padrão", "Uma chamada ou visita pessoal de um líder", "Nenhum contacto", "Uma SMS a pedir números de cartão"], answer: 1, why: "O contacto pessoal honra compromissos maiores." },
      { objective: "O6", q: "O seu plano de uma página deve incluir:", options: ["A morada de cada doador", "Números principais, gráfico, ações, responsáveis e datas", "Só o gráfico", "Só as opiniões da IA"], answer: 1, why: "Um plano diz o que vai ser feito, por quem e quando." },
      { objective: "O6", q: "Antes de enviar qualquer apelo, deve:", options: ["Enviá-lo a todos de uma vez sem verificar", "Deixar a IA enviá-lo", "Não fazer a revisão do texto", "Obter aprovação e seguir as suas regras de contacto com doadores e de recusa de contacto"], answer: 3, why: "A aprovação e o respeito pelas recusas de contacto protegem a confiança dos doadores." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      6,
      8,
      11,
      14,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Cópia segura",
        objective: "O1",
        notYet: "Ainda há um nome, morada, telefone, e-mail ou nota na cópia.",
        meets: "Nomes trocados por códigos; só o código, a data, o valor e a campanha guardados.",
        exceeds: "Anota onde fica a lista verdadeira e quem a pode abrir."
      },
      {
        name: "Números principais",
        objective: "O2",
        notYet: "A taxa de retenção ou a doação média está mal calculada.",
        meets: "O total angariado, a doação média e a taxa de retenção estão todos certos.",
        exceeds: "Mostra a fórmula ou o cálculo de cada número."
      },
      {
        name: "Segmentos de doadores",
        objective: "O3",
        notYet: "Menos de três grupos, ou doadores deixados de fora.",
        meets: "Pelo menos três segmentos, cada código de doador num deles, com contagens.",
        exceeds: "Usa os quatro segmentos, com um valor indicado para os doadores Maiores."
      },
      {
        name: "Explicação da IA verificada",
        objective: "O4",
        notYet: "Foram colados dados de doadores individuais, ou as contas ou os valores de referência da IA foram usados sem verificar.",
        meets: "Só foram colados números resumidos; as contas da IA e qualquer valor de referência foram verificados de novo.",
        exceeds: "Lista as perguntas que a IA sugeriu fazer a seguir e as respostas."
      },
      {
        name: "Plano de apelo",
        objective: "O6",
        notYet: "Falta uma ação para um segmento, ou falta um responsável ou uma data.",
        meets: "Uma página com números principais, gráfico, uma ação por segmento, responsável e data.",
        exceeds: "Os rascunhos das mensagens usam marcadores e o plano está aprovado pelo diretor."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações que calculam a sua taxa de retenção de doadores pela primeira vez (inquérito de seguimento)",
      "Mudança na taxa de retenção de doadores um ano depois, indicada pelas organizações",
      "Doadores afastados que voltam a doar depois de uma nota \"temos saudades suas\""
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com o Google Sheets ou o Excel",
      "Uma cópia anónima da sua lista de doadores, ou a lista de prática da Lição 1",
      "Um assistente de IA gratuito, usado só com números resumidos",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Use a lista de prática na aula; os alunos só trabalham com dados verdadeiros nos seus próprios ficheiros protegidos.",
      "Façam juntos o cálculo da taxa de retenção antes de os alunos tentarem com os seus.",
      "Mostre um caso em que as contas da IA estão erradas para os alunos verem porque as verificam de novo.",
      "Convide o diretor ou o responsável de angariação de fundos para que o plano de apelo possa ser aprovado na hora.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
