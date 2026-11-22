"use strict";

// Koach Learn course (Portuguese translation of shared/ged-science.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// This is a US course: GED, GED Testing Service, GED Ready, HiSET, TI-30XS and ged.com are kept as written. Units (miles, cm, degrees C) kept as in the English.

const GED_SUBJECTS = { name: "GED Testing Service: disciplinas do exame (tempo, tipos de perguntas, calculadora)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SCIENCE = { name: "GED Testing Service: exame de Ciências", url: "https://ged.com/about_test/test_subjects/science/" };
const GED_SCORES = { name: "GED Testing Service: pontuações", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: exames de amostra gratuitos (em inglês e espanhol)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, o exame de prática oficial", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, outro exame de equivalência ao ensino secundário (site oficial)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-science-pt",
  lang: "pt",
  translationOf: "ged-science",
  category: "Workforce Development",
  name: "Preparação para o Exame GED: Ciências",
  skills: "Ler textos de ciências, Identificar as variáveis de uma experiência, Ler tabelas e gráficos, Matemática das ciências (média, mediana, amplitude, fórmulas), Avaliar conclusões, Fazer um plano de estudo",
  outcome: "ler um texto de ciências, uma tabela ou um gráfico e responder a perguntas do tipo GED sobre eles, dizer quais são as variáveis de uma experiência, fazer as contas de ciências que o exame pede e avaliar se uma conclusão é apoiada pelos dados.",
  about: [
    "Este curso é para adultos que se preparam para o exame de Ciências do GED: pessoas à procura de emprego, pessoas que voltam para casa depois da prisão, antigos militares, jovens adultos, imigrantes e qualquer pessoa que volta a estudar. Não precisa de ser especialista em ciências. O exame é sobretudo sobre ler textos de ciências, entender experiências e trabalhar com números e gráficos.",
    "O curso prepara você para o exame. Não lhe dá o diploma GED. O GED Testing Service organiza o exame, e o seu estado define as regras para o fazer. Alguns estados usam outro exame chamado HiSET. Consulte ged.com e o serviço de educação de adultos do seu estado para ver as regras, os preços e os locais de exame atuais.",
    "Cada lição ensina uma competência com exemplos resolvidos e uma prática \"Experimente agora\" com as respostas explicadas, e depois uma verificação rápida de duas perguntas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final.",
    "A tarefa final é a sua própria experiência pequena e segura na cozinha: planeia um teste justo, regista os dados numa tabela, calcula a média, desenha um gráfico e escreve uma conclusão que os dados apoiam."
  ],
  finalTask: "Planeie e faça uma experiência pequena e segura na cozinha (por exemplo: mexer mais ou menos muda a rapidez com que o açúcar se dissolve na água?). Escreva uma pergunta e uma hipótese, diga quais são as variáveis independente, dependente e controladas, repita cada ensaio três vezes, registe os resultados numa tabela, calcule a média de cada grupo, desenhe um gráfico de barras e escreva uma conclusão de duas frases que os dados apoiam. Junte no fim o seu plano de estudo para o GED, com datas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que se preparam para o exame de Ciências do GED: pessoas à procura de emprego, pessoas que voltam para casa depois da prisão, antigos militares, jovens adultos que deixaram a escola, imigrantes e adultos que voltam a estudar depois de muitos anos.",
    startingPoint: "Sabem ler textos do dia a dia e fazer contas simples. Muitos não têm uma aula de ciências há anos e acham que a disciplina é difícil ou cheia de factos para decorar. Alguns ainda estão a ganhar confiança no inglês ou na matemática.",
    gap: "O exame de Ciências do GED é sobre ler textos de ciências, entender como funcionam as experiências e usar números, tabelas e gráficos. São competências que se aprendem, e também se usam no trabalho na saúde, na indústria, nos laboratórios e nos ofícios.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra de ciências é explicada",
      "Aparelhos: um telefone, um computador da biblioteca, ou papel e caneta; uma calculadora simples ajuda",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho, as consultas e a família",
      "Segurança: as experiências em casa usam só água, açúcar, sal e água da torneira à temperatura ambiente ou morna; sem calor, chamas nem produtos químicos",
      "As regras, os preços e o exame que cada estado usa (GED ou HiSET) mudam; os alunos consultam ged.com e o seu estado"
    ],
    prerequisites: "Nenhum. Quem precisa de ajuda com médias ou com a leitura de gráficos pode fazer ao mesmo tempo o curso de Matemática do GED ou um curso de matemática do dia a dia."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o site oficial do GED", action: "enumerar as partes, os tipos de perguntas, o tempo e as ferramentas do exame de Ciências do GED e escrever um plano de estudo com datas", standard: "com as três áreas de competências indicadas e pelo menos uma data de estudo por semana até ao exame" },
    { id: "O2", condition: "Com um texto curto de ciências", action: "identificar a ideia principal e a afirmação que as provas do texto apoiam", standard: "apontando a frase ou o número que apoia cada resposta" },
    { id: "O3", condition: "Com a descrição de uma experiência", action: "dizer qual é a hipótese e quais são as variáveis independente, dependente e controladas", standard: "acertando pelo menos 4 de 5" },
    { id: "O4", condition: "Com uma tabela ou um gráfico", action: "ler valores, descrever a tendência e escolher a conclusão que os dados apoiam", standard: "sem acrescentar factos que não estão nos dados" },
    { id: "O5", condition: "Com um pequeno conjunto de dados ou uma fórmula", action: "calcular a média, a mediana, a moda e a amplitude ou usar a fórmula para encontrar uma resposta", standard: "com as unidades certas e acertando pelo menos 4 de 5" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ler ciências e entender experiências",
      lessons: [
        {
          title: "Como funciona o exame de Ciências do GED",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar as partes e as ferramentas do exame de Ciências do GED e escrever um plano de estudo com datas.",
          text: [
            "O GED tem quatro exames: Matemática, Raciocínio através da Língua (Reasoning Through Language Arts), Ciências e Estudos Sociais. Pode fazê-los um de cada vez. O GED Testing Service faz o exame. Alguns estados usam outro exame de equivalência ao ensino secundário, o HiSET, por isso confirme que exame o seu estado usa.",
            "Em ged.com, o exame de Ciências aparece com 90 minutos, sem intervalo. Cobre três áreas de competências: ler para entender textos de ciências, planear e interpretar experiências científicas, e usar números e gráficos em ciências. As perguntas são de escolha múltipla, preencher o espaço, arrastar e largar, selecionar uma área e lista suspensa.",
            "Recebe uma calculadora no ecrã e uma folha de referência da calculadora, e ged.com diz que pode levar a sua própria calculadora TI-30XS para um centro de exames. Ged.com também diz que não precisa de decorar fórmulas: a informação de que precisa vem com cada pergunta. Não é um exame de factos decorados; avalia como você lê e raciocina.",
            "Ged.com indica uma nota mínima de aprovação de 145 em cada disciplina. Os tempos e as regras podem mudar, por isso consulte ged.com antes de marcar. Ged.com tem exames de amostra gratuitos e um exame de prática oficial, o GED Ready."
          ],
          steps: ["Vá a ged.com e leia a página do exame de Ciências.", "Anote o tempo, as três áreas de competências e as ferramentas que recebe.", "Faça o exame de amostra gratuito de Ciências para ver o seu nível.", "Escolha uma semana-alvo para o exame.", "Escreva pelo menos uma data de estudo por semana, com a competência que vai praticar."],
          words: [["GED", "um exame de equivalência ao ensino secundário dos EUA; passar nas quatro disciplinas dá um diploma que muitos empregadores e faculdades aceitam como o diploma do secundário."], ["HiSET", "outro exame de equivalência ao ensino secundário que alguns estados usam."], ["TI-30XS", "o modelo de calculadora de mão que o exame GED usa no ecrã e permite nos centros de exames."], ["Folha de referência da calculadora", "uma folha dada no exame que mostra como usar as teclas da calculadora."]],
          slides: [
            { title: "O exame de Ciências do GED (consulte ged.com)", bullets: ["90 minutos, sem intervalo", "Escolha múltipla e outros tipos de perguntas", "Nota mínima indicada: 145"] },
            { title: "Três áreas de competências", bullets: ["Ler para entender textos de ciências", "Planear e interpretar experiências", "Usar números e gráficos"] },
            { title: "Ferramentas que recebe", bullets: ["Calculadora no ecrã e folha de referência", "Pode levar uma TI-30XS para um centro de exames", "A informação necessária vem com cada pergunta"] },
            { title: "Faça um plano", bullets: ["Faça primeiro o exame de amostra gratuito", "Escolha uma semana-alvo para o exame", "Estude um pouco, quase todos os dias da semana"] }
          ],
          sources: [GED_SUBJECTS, GED_SCIENCE, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Abra ged.com e faça o exame de amostra gratuito de Ciências (ou leia a página de Ciências se não o puder fazer agora). Escreva o seu plano de estudo: a sua semana-alvo para o exame e uma data por semana com a competência que vai praticar: ler ciências, experiências, ou números e gráficos. Guarde-o para a tarefa final.",
          youCanNow: "dizer quais são as partes e as ferramentas do exame de Ciências do GED e seguir um plano de estudo com datas.",
          quickCheck: [
            { objective: "O1", q: "Segundo ged.com, o que precisa de decorar para o exame de Ciências do GED?", options: ["Todas as fórmulas das ciências", "A tabela periódica", "Fórmulas não: a informação de que precisa vem com cada pergunta", "Os nomes de todos os cientistas"], answer: 2, why: "Ged.com diz que não precisa de decorar fórmulas; a informação necessária é dada." },
            { objective: "O1", q: "Qual é uma das três áreas de competências do exame de Ciências?", options: ["Planear e interpretar experiências científicas", "Soletrar palavras de ciências", "Desenhar animais", "Montar um computador"], answer: 0, why: "Ged.com indica ler para entender, experiências, e números e gráficos." }
          ]
        },
        {
          title: "Ler um texto de ciências",
          objectives: ["O2"],
          minutes: 5,
          goal: "Identificar a ideia principal de um texto de ciências e a afirmação que as suas provas apoiam.",
          text: [
            "Os textos de ciências parecem difíceis por causa das palavras novas, mas lêem-se da mesma maneira que qualquer outro texto. Descubra sobre o que é sobretudo o texto e encontre os factos e os números que o confirmam. Muitas vezes o texto explica a palavra difícil logo ali. Procure \"chama-se\", \"quer dizer\" ou uma explicação entre vírgulas a seguir à palavra.",
            "Exemplo resolvido. \"O suor arrefece o corpo. Quando o suor evapora, ou seja, passa de líquido a gás, leva calor da pele. Nos dias húmidos, o ar já tem muita água, por isso o suor evapora mais devagar.\" Ideia principal: suar arrefece o corpo por evaporação. Afirmação apoiada: pode sentir mais calor nos dias húmidos porque o suor seca mais devagar.",
            "Uma afirmação só é apoiada se o texto der provas dela. \"Suar queima gordura\" não é apoiada; o texto não diz nada sobre gordura. Escolha a resposta que o texto prova, não a que parece mais científica."
          ],
          steps: ["Leia primeiro a pergunta.", "Leia o texto; sublinhe as palavras novas e procure o significado perto delas.", "Diga a ideia principal numa frase.", "Para cada opção de resposta, pergunte: onde é que o texto prova isto?", "Risque as opções que acrescentam factos que o texto não dá."],
          words: [["Evaporar", "passar de líquido a gás, como uma poça de água que seca."], ["Húmido", "quando o ar tem muito vapor de água."], ["Afirmação", "uma frase que diz que algo é verdade."], ["Apoiada", "confirmada por provas no texto ou nos dados."]],
          slides: [
            { title: "Leia ciências como qualquer texto", bullets: ["Sobre o que é sobretudo?", "Que factos e números o confirmam?"] },
            { title: "Palavras novas", bullets: ["Procure \"chama-se\" ou \"quer dizer\"", "Procure um significado entre vírgulas a seguir à palavra"] },
            { title: "Apoiada ou não?", bullets: ["Apoiada: o texto prova-a", "Não apoiada: acrescenta factos que não estão no texto", "Não escolha uma resposta só porque parece inteligente"] }
          ],
          tryIt: "Texto de prática: \"As plantas fazem o seu próprio alimento pela fotossíntese. Usam luz, água e dióxido de carbono, um gás do ar, para fazer açúcar. Como resultado, libertam oxigénio.\" 1) Qual é a ideia principal? 2) Que afirmação é apoiada: (a) uma planta guardada num armário escuro vai ter dificuldade em fazer alimento, ou (b) as plantas precisam de refrigerante para crescer? Respostas: 1) As plantas fazem alimento a partir de luz, água e dióxido de carbono. 2) (a): o texto diz que as plantas precisam de luz. (b) não está no texto.",
          youCanNow: "encontrar a ideia principal de um texto de ciências e escolher a afirmação que as suas provas apoiam.",
          quickCheck: [
            { objective: "O2", q: "Um texto diz: \"As vacinas treinam o sistema imunitário, o sistema de defesa do corpo, para reconhecer os micróbios.\" O que quer dizer \"sistema imunitário\" aqui?", options: ["Um tipo de micróbio", "O sistema de defesa do corpo", "Um consultório médico", "Um tipo de remédio que se engole"], answer: 1, why: "O significado está entre as vírgulas logo a seguir à palavra." },
            { objective: "O2", q: "Um texto diz que o aço enferruja mais depressa em ar húmido e salgado. Que afirmação é apoiada?", options: ["O aço nunca enferruja", "O sal torna o aço mais forte", "A ferrugem só acontece nos desertos", "Uma ponte de aço perto do mar pode precisar de mais proteção contra a ferrugem"], answer: 3, why: "O ar do mar é húmido e salgado, e o texto diz que isso acelera a ferrugem." }
          ]
        },
        {
          title: "Experiências: hipótese e variáveis",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dizer qual é a hipótese e quais são as variáveis independente, dependente e controladas de uma experiência.",
          text: [
            "Uma experiência testa uma pergunta. A hipótese é um palpite que se pode testar sobre a resposta, muitas vezes escrito \"Se ..., então ...\". Por exemplo: \"Se as plantas tiverem mais horas de luz, então vão crescer mais.\"",
            "A variável independente é a única coisa que o cientista muda de propósito (horas de luz). A variável dependente é o que se mede para ver o efeito (altura da planta). As variáveis controladas ficam iguais para o teste ser justo (o mesmo tipo de planta, o mesmo vaso, a mesma água, a mesma terra).",
            "Um truque para lembrar: a variável dependente depende da independente. A altura depende da luz. Um teste justo muda só uma coisa de cada vez. Se mudar a luz e a água ao mesmo tempo, não consegue saber qual delas fez a planta crescer.",
            "As boas experiências repetem cada ensaio várias vezes e muitas vezes têm um grupo de controlo, um grupo que não recebe nenhuma mudança, para comparar. Mais ensaios tornam os resultados mais fiáveis."
          ],
          steps: ["Encontre a pergunta que está a ser testada.", "Encontre a única coisa mudada de propósito: a variável independente.", "Encontre o que é medido: a variável dependente.", "Faça a lista do que fica igual: as variáveis controladas.", "Confirme que só uma coisa muda e que os ensaios são repetidos."],
          words: [["Hipótese", "um palpite que se pode testar, muitas vezes \"Se ..., então ...\"."], ["Variável independente", "a única coisa que você muda de propósito."], ["Variável dependente", "o que você mede para ver o efeito."], ["Variável controlada", "uma coisa que você mantém igual para o teste ser justo."], ["Grupo de controlo", "um grupo que não recebe nenhuma mudança, usado para comparar."]],
          slides: [
            { title: "Hipótese", bullets: ["Um palpite que se pode testar", "\"Se mais luz, então plantas mais altas\""] },
            { title: "Três tipos de variáveis", bullets: ["Independente: o que você muda", "Dependente: o que você mede", "Controlada: o que você mantém igual"] },
            { title: "Um teste justo", bullets: ["Mude só uma coisa", "Repita cada ensaio", "Compare com um grupo de controlo"] }
          ],
          tryIt: "Prática: Um trabalhador testa se uma luva nova mantém as mãos mais quentes. Dez trabalhadores usam a luva nova e dez usam a luva antiga, ao ar livre durante 30 minutos, à mesma hora. Mede-se a temperatura das mãos. Diga: 1) a variável independente, 2) a variável dependente, 3) duas variáveis controladas, 4) uma hipótese. Respostas: 1) o tipo de luva; 2) a temperatura das mãos; 3) o tempo ao ar livre, o mesmo tempo atmosférico, a mesma hora do dia; 4) \"Se os trabalhadores usarem a luva nova, então as mãos deles vão ficar mais quentes.\"",
          youCanNow: "ler uma experiência e dizer qual é a sua hipótese e quais são as suas variáveis, e reconhecer um teste que não é justo.",
          quickCheck: [
            { objective: "O3", q: "Um estudante testa se o sal muda a rapidez com que o gelo derrete. Qual é a variável dependente?", options: ["A quantidade de sal", "O tamanho dos cubos de gelo", "A temperatura da sala", "O tempo que o gelo leva a derreter"], answer: 3, why: "O tempo de derretimento é o que se mede; depende do sal." },
            { objective: "O3", q: "Porque é que uma experiência deve mudar só uma coisa de cada vez?", options: ["Para saber que mudança causou o resultado", "Para ser mais rápida", "Para gastar menos papel", "Não tem importância"], answer: 0, why: "Se duas coisas mudarem, não consegue saber qual fez a diferença." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ler ciências e entender experiências",
        questions: [
          { objective: "O1", q: "Que ferramenta diz ged.com que recebe no exame de Ciências?", options: ["Um telefone", "Uma calculadora no ecrã e uma folha de referência da calculadora", "Um livro de ciências", "Um caderno com fórmulas escritas por você"], answer: 1, why: "Ged.com indica uma calculadora no ecrã e uma folha de referência da calculadora." },
          { objective: "O2", q: "Um texto diz: \"O exercício aumenta a frequência cardíaca, o número de batimentos do coração por minuto.\" Que afirmação é apoiada?", options: ["O exercício baixa a frequência cardíaca", "A frequência cardíaca mede-se em milhas", "O exercício faz o coração bater mais vezes por minuto", "A frequência cardíaca não muda"], answer: 2, why: "O texto diz que o exercício aumenta os batimentos por minuto." },
          { objective: "O3", q: "\"Se eu regar os tomateiros todos os dias, então eles vão dar mais frutos.\" O que é isto?", options: ["Uma conclusão", "Uma hipótese", "Uma tabela de dados", "Um grupo de controlo"], answer: 1, why: "É um palpite que se pode testar, do tipo \"Se ..., então ...\"." },
          { objective: "O3", q: "No teste dos tomateiros, qual é a variável independente?", options: ["Com que frequência as plantas são regadas", "A quantidade de frutos", "O tipo de terra", "O tamanho dos vasos"], answer: 0, why: "A rega é o que se muda de propósito." },
          { objective: "O3", q: "Qual é uma variável controlada no teste dos tomateiros?", options: ["Com que frequência são regados", "O número de tomates produzidos", "A hipótese", "O mesmo tipo de tomateiro em todos os grupos"], answer: 3, why: "Usar o mesmo tipo de planta mantém o teste justo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Números, tabelas e gráficos em ciências",
      lessons: [
        {
          title: "Ler tabelas e gráficos",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ler valores de uma tabela ou de um gráfico, descrever a tendência e escolher a conclusão que os dados apoiam.",
          text: [
            "Muitas perguntas de ciências dão-lhe uma tabela ou um gráfico. Primeiro leia o título, as legendas e as unidades. Num gráfico, a legenda de baixo (eixo x) é normalmente a variável independente, e a legenda do lado (eixo y) é a variável dependente.",
            "Exemplo resolvido. Tabela: \"Horas de luz por dia: 4, 8, 12. Altura média das plantas depois de 3 semanas: 5 cm, 9 cm, 14 cm.\" Ler um valor: com 8 horas, as plantas cresceram 9 cm. Tendência: quando a luz aumenta, a altura aumenta. Conclusão apoiada: neste teste, mais luz andou junto com plantas mais altas.",
            "Não vá além dos dados. A tabela não mostra 20 horas de luz, por isso não pode dizer o que acontece nesse caso. Também não mostra a água nem a terra, por isso uma conclusão sobre elas não é apoiada.",
            "Tipos de gráficos: um gráfico de barras compara grupos, um gráfico de linhas mostra a mudança ao longo do tempo ou uma tendência, e um gráfico circular mostra as partes de um todo."
          ],
          steps: ["Leia o título, as legendas e as unidades.", "Encontre o valor que a pergunta pede.", "Descreva a tendência: sobe, desce, ou não há um padrão claro.", "Escolha a conclusão que fica dentro dos dados.", "Risque as respostas sobre coisas que os dados não mostram."],
          words: [["Tendência", "a direção geral dos dados: a subir, a descer ou a ficar igual."], ["Eixo x", "a linha de baixo de um gráfico, de um lado ao outro."], ["Eixo y", "a linha do lado de um gráfico, de baixo para cima."], ["Unidades", "aquilo em que um número é medido, como cm, graus ou minutos."]],
          slides: [
            { title: "Leia primeiro as legendas", bullets: ["Título, legendas e unidades", "Em baixo (eixo x): normalmente o que foi mudado", "Do lado (eixo y): normalmente o que foi medido"] },
            { title: "Encontre a tendência", bullets: ["Sobe, desce, ou não há um padrão claro", "Diga-a numa frase"] },
            { title: "Fique dentro dos dados", bullets: ["Não adivinhe além dos números mostrados", "Sem conclusões sobre coisas que não foram medidas"] },
            { title: "Tipos de gráficos", bullets: ["Barras: compara grupos", "Linhas: mudança ao longo do tempo", "Circular: partes de um todo"] }
          ],
          tryIt: "Tabela de prática: \"Temperatura da água (graus C): 10, 20, 30, 40. Tempo para um cubo de açúcar se dissolver (segundos): 120, 90, 60, 40.\" 1) Quanto tempo a 30 graus? 2) Qual é a tendência? 3) Que conclusão é apoiada: (a) neste teste, a água mais quente dissolveu o açúcar mais depressa, ou (b) o sal dissolve-se mais depressa do que o açúcar? Respostas: 1) 60 segundos. 2) Quando a temperatura sobe, o tempo para dissolver desce. 3) (a); o sal não foi testado.",
          youCanNow: "ler uma tabela ou um gráfico, descrever a sua tendência e escolher uma conclusão que os dados apoiam.",
          quickCheck: [
            { objective: "O4", q: "Um gráfico mostra a temperatura média de uma cidade a subir em cada década, de 1980 a 2020. Qual é a tendência?", options: ["A descer", "Sem mudança", "A subir ao longo do tempo", "Não se consegue ler"], answer: 2, why: "Os valores sobem de década para década." },
            { objective: "O4", q: "Uma tabela mostra a altura das plantas com 4, 8 e 12 horas de luz. Que conclusão vai além dos dados?", options: ["As plantas com 8 horas cresceram mais do que as plantas com 4", "As plantas com 24 horas de luz vão ser as mais altas", "A altura subiu quando a luz subiu", "As plantas com 12 horas foram as que mais cresceram neste teste"], answer: 1, why: "As 24 horas não foram testadas, por isso os dados não podem dizer isso." }
          ]
        },
        {
          title: "Matemática das ciências: médias, amplitude e fórmulas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular a média, a mediana, a moda e a amplitude de um conjunto de dados e usar uma fórmula dada.",
          text: [
            "Conjunto de dados (só para prática): frequência cardíaca depois de uma caminhada, em batimentos por minuto: 80, 84, 84, 90, 92. Média: some todos e divida pelo número de valores: 430 / 5 = 86. Mediana: o número do meio quando estão por ordem: 84. Moda: o número que aparece mais vezes: 84. Amplitude: o maior menos o menor: 92 - 80 = 12.",
            "Se houver um número par de valores, a mediana é a média dos dois números do meio. Para 3, 5, 7, 9: (5 + 7) / 2 = 6.",
            "As fórmulas são dadas no exame. Substitua os números e mantenha as unidades. Velocidade = distância / tempo: um camião percorre 120 milhas em 2 horas, por isso velocidade = 120 / 2 = 60 milhas por hora. Densidade = massa / volume: um bloco de 40 gramas com um volume de 20 centímetros cúbicos tem densidade 40 / 20 = 2 gramas por centímetro cúbico.",
            "Confirme que a resposta faz sentido. Uma média tem de estar entre o valor mais pequeno e o maior. Escreva a unidade em cada resposta."
          ],
          steps: ["Ponha os dados por ordem, do mais pequeno para o maior.", "Média: some todos os valores e divida pelo número de valores.", "Mediana: encontre o do meio (ou a média dos dois do meio).", "Moda: o valor mais comum. Amplitude: o maior menos o menor.", "Para uma fórmula: escreva-a, substitua os números, resolva e junte as unidades."],
          words: [["Média", "o total dividido pelo número de valores."], ["Mediana", "o valor do meio quando os números estão por ordem."], ["Moda", "o valor que aparece mais vezes."], ["Amplitude", "o maior valor menos o menor."], ["Densidade", "quanta massa cabe num espaço: a massa dividida pelo volume."]],
          slides: [
            { title: "Quatro números que descrevem dados", bullets: ["Média: o total dividido pelo número de valores", "Mediana: o valor do meio, por ordem", "Moda: o valor mais comum", "Amplitude: o maior menos o menor"] },
            { title: "Exemplo resolvido", bullets: ["Dados: 80, 84, 84, 90, 92", "Média 86, mediana 84, moda 84, amplitude 12"] },
            { title: "Usar uma fórmula dada", bullets: ["Velocidade = distância / tempo", "Densidade = massa / volume", "Substitua, resolva, escreva as unidades"] }
          ],
          tryIt: "Só para prática. 1) Minutos para um cubo de gelo derreter em cinco ensaios: 6, 7, 7, 8, 12. Calcule a média, a mediana, a moda e a amplitude. 2) Um ciclista percorre 30 milhas em 3 horas. Velocidade = distância / tempo. Respostas: 1) Média 40 / 5 = 8 minutos; mediana 7; moda 7; amplitude 12 - 6 = 6 minutos. 2) 30 / 3 = 10 milhas por hora.",
          youCanNow: "calcular a média, a mediana, a moda e a amplitude de dados e usar uma fórmula de ciências com as unidades certas.",
          quickCheck: [
            { objective: "O5", q: "Dados: 2, 4, 4, 6, 9. Qual é a média?", options: ["4", "5", "6", "7"], answer: 1, why: "2 + 4 + 4 + 6 + 9 = 25, e 25 / 5 = 5." },
            { objective: "O5", q: "Uma pedra tem massa de 60 gramas e volume de 20 centímetros cúbicos. Densidade = massa / volume. Qual é a densidade?", options: ["40 gramas por centímetro cúbico", "1200 gramas por centímetro cúbico", "80 gramas por centímetro cúbico", "3 gramas por centímetro cúbico"], answer: 3, why: "60 / 20 = 3 gramas por centímetro cúbico." }
          ]
        },
        {
          title: "Juntar tudo: o seu próprio teste justo",
          objectives: ["O3", "O4", "O5"],
          minutes: 6,
          goal: "Planear um teste justo, registar dados numa tabela, calcular a média e escrever uma conclusão que os dados apoiam.",
          text: [
            "Agora use todas as competências ao mesmo tempo. Muitas perguntas do exame descrevem uma experiência inteira com uma tabela e depois perguntam sobre as variáveis, as contas e a conclusão. Fazer você mesmo uma pequena experiência torna estas perguntas muito mais fáceis.",
            "Exemplo seguro na cozinha. Pergunta: mexer muda a rapidez com que o açúcar se dissolve? Hipótese: se a água for mexida, então o açúcar vai dissolver-se mais depressa. Variável independente: mexida ou não mexida. Variável dependente: tempo para dissolver (segundos). Controladas: o mesmo copo, a mesma quantidade de água da torneira, a mesma temperatura da água, um cubo de açúcar de cada vez. Faça três ensaios de cada.",
            "Resultados de exemplo (só para prática). Mexida: 40, 45, 50 segundos; média 45. Não mexida: 170, 180, 190 segundos; média 180. Conclusão: neste teste, mexer fez o açúcar dissolver-se mais depressa, cerca de 4 vezes mais depressa em média. Um gráfico de barras com duas barras (mexida, não mexida) mostra isto claramente.",
            "Segurança: use só água da torneira à temperatura ambiente ou morna da torneira, açúcar ou sal, e copos limpos. Sem fogão, sem chamas e sem produtos de limpeza. Não beba nem prove nada durante o teste."
          ],
          steps: ["Escreva a sua pergunta e uma hipótese \"Se ..., então ...\".", "Diga quais são as variáveis independente, dependente e controladas.", "Faça pelo menos três ensaios de cada grupo e escreva os resultados numa tabela.", "Calcule a média de cada grupo.", "Desenhe um gráfico de barras e escreva uma conclusão de duas frases que fica dentro dos seus dados."],
          words: [["Ensaio", "uma vez que se faz uma experiência."], ["Tabela de dados", "linhas e colunas onde ficam os seus resultados."], ["Conclusão", "o que os resultados mostram, numa ou duas frases."]],
          slides: [
            { title: "O seu teste justo", bullets: ["Pergunta e hipótese", "Variáveis independente, dependente e controladas", "Três ensaios por grupo"] },
            { title: "Registar e calcular", bullets: ["Escreva os resultados numa tabela", "Calcule a média de cada grupo", "Desenhe um gráfico de barras"] },
            { title: "Escrever a conclusão", bullets: ["Diga o que os dados mostram", "Fique dentro dos seus dados", "Diga uma maneira de melhorar o teste"] },
            { title: "Segurança", bullets: ["Só água da torneira, açúcar ou sal", "Sem fogão, chamas nem produtos químicos", "Não prove nem beba as amostras"] }
          ],
          tryIt: "Tarefa final: faça a sua própria experiência pequena e segura na cozinha (mexer e açúcar, ou outro teste com uma só mudança, com água, açúcar ou sal). Escreva a pergunta, a hipótese e as variáveis, registe três ensaios por grupo numa tabela, calcule cada média, desenhe um gráfico de barras e escreva uma conclusão de duas frases. Junte no fim o seu plano de estudo para o GED, com datas, e avalie o trabalho com a grelha de avaliação.",
          youCanNow: "planear e fazer um teste justo, registar os dados e calcular a média, e escrever uma conclusão que os dados apoiam.",
          quickCheck: [
            { objective: "O3", q: "No teste de mexer, o que tem de ficar igual para o teste ser justo?", options: ["A quantidade e a temperatura da água", "Se a água é mexida ou não", "O tempo para dissolver", "A conclusão"], answer: 0, why: "A quantidade e a temperatura da água são variáveis controladas; só o mexer muda." },
            { objective: "O4", q: "Média mexida: 45 segundos. Média não mexida: 180 segundos. Que conclusão é apoiada?", options: ["Mexer torna o açúcar mais doce", "Neste teste, mexer fez o açúcar dissolver-se mais depressa", "O sal dissolve-se mais depressa do que o açúcar", "Mexer não tem efeito"], answer: 1, why: "Nos copos mexidos o açúcar dissolveu-se muito mais depressa, e a conclusão fica dentro dos dados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Números, tabelas e gráficos em ciências",
        questions: [
          { objective: "O4", q: "Na maioria dos gráficos de ciências, o que aparece no eixo de baixo (eixo x)?", options: ["O título", "A conclusão", "Normalmente a variável independente, o que foi mudado", "As unidades de dinheiro"], answer: 2, why: "O eixo x mostra normalmente o que o cientista mudou." },
          { objective: "O4", q: "Que gráfico é melhor para comparar a altura média das plantas em três grupos?", options: ["Um gráfico de barras", "Um mapa", "Um gráfico circular de todo o jardim", "Uma fotografia"], answer: 0, why: "Os gráficos de barras comparam grupos lado a lado." },
          { objective: "O5", q: "Dados: 10, 12, 15, 15, 18. Qual é a amplitude?", options: ["15", "14", "13", "8"], answer: 3, why: "18 - 10 = 8." },
          { objective: "O5", q: "Dados: 3, 8, 6, 1, 7. Qual é a mediana?", options: ["3", "6", "7", "5"], answer: 1, why: "Por ordem: 1, 3, 6, 7, 8. O valor do meio é 6." },
          { objective: "O5", q: "Um autocarro percorre 150 milhas em 3 horas. Velocidade = distância / tempo. Qual é a velocidade?", options: ["450 milhas por hora", "153 milhas por hora", "50 milhas por hora", "147 milhas por hora"], answer: 2, why: "150 / 3 = 50 milhas por hora." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para o Exame GED: Ciências",
    questions: [
      { objective: "O1", q: "O que faz este curso por você?", options: ["Prepara você para o exame de Ciências do GED", "Dá-lhe um diploma GED", "Torna-o um cientista com licença", "Substitui o exame GED"], answer: 0, why: "O curso prepara você; o GED Testing Service organiza o exame e o seu estado atribui o diploma." },
      { objective: "O1", q: "Qual é outro exame de equivalência ao ensino secundário que alguns estados usam?", options: ["ACT", "CDL", "HiSET", "TOEFL"], answer: 2, why: "O HiSET é outro exame de equivalência ao ensino secundário." },
      { objective: "O1", q: "Que área de competências do exame de Ciências indica ged.com?", options: ["Decorar os nomes dos ossos", "Usar números e gráficos em ciências", "Desenhar mapas", "Escrever poemas"], answer: 1, why: "As três áreas são ler para entender, experiências, e números e gráficos." },
      { objective: "O1", q: "Onde deve consultar o tempo, os preços e as regras atuais do exame GED?", options: ["Num folheto antigo", "Com um amigo", "Num comentário de um vídeo", "Em ged.com e no serviço de educação de adultos do seu estado"], answer: 3, why: "As regras e os preços mudam; as fontes oficiais têm os atuais." },
      { objective: "O2", q: "Um texto explica uma palavra nova entre vírgulas logo a seguir a ela. O que deve fazer?", options: ["Saltar o texto", "Usar esse significado para entender o texto", "Adivinhar outro significado", "Procurá-la no telefone durante o exame"], answer: 1, why: "Os textos muitas vezes explicam as palavras difíceis no próprio texto." },
      { objective: "O2", q: "Um texto diz que as abelhas levam pólen de flor em flor, o que ajuda muitas culturas a dar fruto. Que afirmação é apoiada?", options: ["Menos abelhas podem significar menos fruto em algumas culturas", "As abelhas fazem todos os alimentos", "As abelhas comem fruta", "As flores não precisam de pólen"], answer: 0, why: "Se as abelhas ajudam as culturas a dar fruto, menos abelhas podem dar menos fruto." },
      { objective: "O2", q: "Que opção de resposta deve riscar?", options: ["Uma que o texto prova", "Uma com um número do texto", "Uma que acrescenta factos que o texto nunca dá", "Uma que repete a ideia principal"], answer: 2, why: "As respostas que acrescentam factos que não estão no texto não são apoiadas." },
      { objective: "O3", q: "O que é uma hipótese?", options: ["A resposta final", "Um palpite que se pode testar, muitas vezes \"Se ..., então ...\"", "Um gráfico", "Uma lista de ferramentas"], answer: 1, why: "Uma hipótese é um palpite que se pode testar sobre o que vai acontecer." },
      { objective: "O3", q: "Um teste verifica se a música muda a rapidez com que os trabalhadores embalam caixas. Qual é a variável independente?", options: ["O número de caixas embaladas", "O tamanho das caixas", "A hora do dia", "Com música ou sem música"], answer: 3, why: "A música é a única coisa mudada de propósito." },
      { objective: "O3", q: "No teste da música, qual é a variável dependente?", options: ["O número de caixas embaladas", "Com música ou sem música", "Os nomes dos trabalhadores", "O tipo de fita-cola"], answer: 0, why: "As caixas embaladas são o que se mede." },
      { objective: "O3", q: "Porque é que se repete cada ensaio várias vezes?", options: ["Para gastar mais material", "Para o teste ficar mais longo", "Para tornar os resultados mais fiáveis", "Para mudar mais variáveis"], answer: 2, why: "Mais ensaios reduzem a hipótese de um resultado estranho o enganar." },
      { objective: "O3", q: "O que é um grupo de controlo?", options: ["O grupo com mais pessoas", "Um grupo que não recebe nenhuma mudança, para comparar", "Os cientistas que fazem o teste", "Um grupo que muda duas coisas"], answer: 1, why: "O grupo de controlo mostra o que acontece sem a mudança." },
      { objective: "O4", q: "Um gráfico de linhas mostra a temperatura de um doente a descer a cada hora depois do remédio (só para prática). Qual é a tendência?", options: ["A descer", "A subir", "A ficar igual", "Sem dados"], answer: 0, why: "Os valores descem a cada hora." },
      { objective: "O4", q: "O que deve ler primeiro num gráfico?", options: ["O número mais pequeno", "Só as opções de resposta", "A cor das barras", "O título, as legendas e as unidades"], answer: 3, why: "As legendas e as unidades dizem o que os números querem dizer." },
      { objective: "O4", q: "Uma tabela testou água a 10, 20 e 30 graus. Que frase vai além dos dados?", options: ["Foi testada água a 30 graus", "O resultado a 20 graus está na tabela", "A 100 graus o açúcar dissolve-se num instante", "O teste usou três temperaturas"], answer: 2, why: "Os 100 graus não foram testados, por isso os dados não podem mostrar isso." },
      { objective: "O4", q: "Que gráfico mostra as partes de um todo?", options: ["Gráfico de linhas", "Gráfico circular", "Gráfico de dispersão", "Reta numérica"], answer: 1, why: "Um gráfico circular divide um todo em partes." },
      { objective: "O5", q: "Dados: 5, 7, 7, 9, 12. Qual é a moda?", options: ["5", "8", "12", "7"], answer: 3, why: "O 7 aparece mais vezes." },
      { objective: "O5", q: "Dados: 6, 8, 10, 12. Qual é a mediana?", options: ["9", "8", "10", "36"], answer: 0, why: "Os dois valores do meio são 8 e 10, e (8 + 10) / 2 = 9." },
      { objective: "O5", q: "Um carro percorre 200 milhas em 4 horas. Velocidade = distância / tempo. Qual é a velocidade?", options: ["800 milhas por hora", "50 milhas por hora", "204 milhas por hora", "196 milhas por hora"], answer: 1, why: "200 / 4 = 50 milhas por hora." },
      { objective: "O5", q: "Dados: 20, 30, 40. Qual é a média?", options: ["90", "20", "30", "40"], answer: 2, why: "20 + 30 + 40 = 90, e 90 / 3 = 30." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [2, 3, 5, 8, 9, 13, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e faça o teste outra vez.",
    criteria: [
      { name: "Pergunta e hipótese", objective: "O3", notYet: "Não há pergunta, ou a hipótese não se pode testar.", meets: "Uma pergunta clara e uma hipótese \"Se ..., então ...\".", exceeds: "A hipótese também diz porque é que quem a escreve espera esse resultado." },
      { name: "Variáveis e teste justo", objective: "O3", notYet: "Faltam variáveis ou muda mais do que uma coisa.", meets: "As variáveis independente, dependente e pelo menos duas controladas estão indicadas; só muda uma coisa.", exceeds: "Também tem um grupo de controlo e explica porque é que cada variável controlada é importante." },
      { name: "Dados e contas", objective: "O5", notYet: "Menos de três ensaios por grupo, ou a média está errada.", meets: "Três ensaios por grupo numa tabela, com a média certa e as unidades.", exceeds: "Também dá a amplitude de cada grupo e comenta quanto variaram os ensaios." },
      { name: "Gráfico e conclusão", objective: "O4", notYet: "Não há gráfico, ou a conclusão afirma mais do que os dados mostram.", meets: "Um gráfico de barras com legendas e uma conclusão de duas frases que fica dentro dos dados.", exceeds: "Também diz uma maneira de melhorar o teste da próxima vez." },
      { name: "Ler os resultados", objective: "O2", notYet: "A conclusão não corresponde aos números.", meets: "A conclusão corresponde aos números da tabela.", exceeds: "Aponta os números exatos que apoiam a conclusão." },
      { name: "Plano de estudo", objective: "O1", notYet: "Não há plano de estudo, ou não tem datas.", meets: "Um plano de estudo com pelo menos uma data por semana até à semana-alvo do exame.", exceeds: "Também tem uma data para o GED Ready ou uma data de exame marcada." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou melhor em todas as linhas da grelha de avaliação",
      "Alunos que fazem o GED Ready ou um exame de amostra gratuito de ged.com em 30 dias",
      "Alunos que marcam ou passam no exame de Ciências do GED em 90 dias (dito pelo próprio aluno)",
      "Os programas parceiros dizem que mais alunos avançam para formação profissional na saúde, em laboratórios ou nos ofícios"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador com internet, ou as lições impressas",
      "Papel, caneta e uma calculadora simples (a calculadora do telefone serve para praticar)",
      "Para a tarefa final: dois copos limpos, água da torneira, cubos de açúcar ou sal, uma colher e o temporizador do telefone",
      "Exames de amostra gratuitos de ged.com; o GED Ready se o aluno decidir comprá-lo",
      "Cerca de 90 minutos para as lições e as verificações, mais cerca de 45 minutos para a tarefa final"
    ],
    facilitatorNotes: [
      "Comece pelo teste inicial e pelo exame de amostra gratuito de Ciências de ged.com para ver de que área de competências cada aluno mais precisa.",
      "Faça primeiro a experiência de mexer como demonstração em grupo e depois peça aos alunos que planeiem o seu próprio teste com uma só mudança.",
      "Verifique a segurança de cada plano de experiência antes de os alunos o fazerem: sem fontes de calor, chamas, produtos químicos nem provar nada.",
      "Pratiquem a leitura de gráficos em voz alta: título, legendas, unidades, tendência e depois a conclusão.",
      "Confirme que exame o seu estado usa (GED ou HiSET) e partilhe os locais de exame da zona e qualquer ajuda com os preços."
    ]
  }
};
