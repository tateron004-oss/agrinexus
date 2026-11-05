"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-ai-program-impact.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-ai-program-impact-pt",
  lang: "pt",
  translationOf: "nonprofit-ai-program-impact",
  category: "Non Profits",
  name: "IA para a Execução de Programas e o Impacto",
  skills: "Construir um modelo lógico simples, Escolher medidas de resultados, Escrever um pequeno inquérito aos participantes com IA, Resumir resultados anónimos, Escrever um relatório de impacto de uma página",
  outcome: "usar a IA para construir um modelo lógico simples para um programa, escrever um pequeno inquérito aos participantes, resumir resultados anónimos e transformá-los num relatório de impacto honesto de uma página para a sua direção e os seus financiadores.",
  about: [
    "Este curso é para gestores de programas, coordenadores e voluntários de organizações sem fins lucrativos e de organizações religiosas que dirigem programas e precisam de mostrar a diferença que esses programas fazem.",
    "Você vai planear um programa numa página, escolher o que medir, usar a IA para escrever um inquérito justo, resumir os resultados sem expor as informações privadas de ninguém e escrever um relatório de impacto em que os financiadores e a sua direção possam confiar.",
    "Cada lição dura cerca de cinco minutos e constrói uma parte do seu relatório de impacto. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Para um programa real, escreva um relatório de impacto de uma página que inclua: um modelo lógico simples (recursos, atividades, produtos, resultados), duas medidas de resultados, um pequeno inquérito aos participantes que você preparou com a IA, um resumo de resultados anónimos (dados reais ou de prática, sem nomes), uma história partilhada com autorização e uma lição aprendida honesta.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Gestores de programas, coordenadores e voluntários de organizações sem fins lucrativos e de organizações religiosas que dirigem programas e precisam de mostrar a diferença que esses programas fazem.",
    startingPoint: "Dirigem programas e fazem contagens, como refeições servidas ou sessões realizadas. Muitos nunca construíram um modelo lógico, nunca mediram resultados antes e depois, nem escreveram um relatório de impacto.",
    gap: "Os financiadores e as direções pedem cada vez mais resultados, e não só contagens. Os alunos precisam de uma forma simples e honesta de planear, medir e relatar a mudança, usando a IA para poupar tempo, protegendo a privacidade dos participantes e mantendo cada número verdadeiro.",
    constraints: [
      "Equipas pequenas com pouco tempo para trabalhar com dados",
      "Privacidade: os inquéritos são voluntários e anónimos; nada de nomes, dados de saúde ou de imigração, a não ser que sejam mesmo precisos e guardados com segurança",
      "Só contagens, nunca respostas pessoais em bruto, vão para as ferramentas de IA",
      "A IA erra nas contas, por isso cada percentagem é verificada numa folha de cálculo",
      "Ferramentas gratuitas como o Google Forms ou o Microsoft Forms"
    ],
    prerequisites: "\"Introdução à IA para Organizações sem Fins Lucrativos\", ou alguma experiência no uso de um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de resultados de um programa", action: "identificar quais são produtos e quais são resultados", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com uma descrição pública de um programa", action: "construir com a ajuda da IA um modelo lógico de uma página com recursos, atividades, produtos e resultados", standard: "retirando tudo o que não faz na realidade" },
    { id: "O3", condition: "Com um resultado", action: "escolher duas medidas simples que a sua equipa consegue recolher, perguntadas antes e depois", standard: "que sejam honestas e realistas para o tempo dos seus funcionários e voluntários" },
    { id: "O4", condition: "Com as suas medidas de resultados", action: "escrever com a IA um pequeno inquérito anónimo aos participantes, de 5 a 8 perguntas", standard: "sem perguntas tendenciosas e com uma nota a dizer que é voluntário" },
    { id: "O5", condition: "Com as contagens de um inquérito anónimo", action: "resumir os resultados com a IA e verificar você mesmo cada percentagem", standard: "sem nenhum dado que possa identificar uma pessoa" },
    { id: "O6", condition: "Com o seu modelo lógico e os resultados verificados", action: "escrever um relatório de impacto de uma página com a necessidade, o que fez, o que mudou, uma história e uma lição aprendida", standard: "sem números nem afirmações que não estejam nos seus dados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear o que medir",
      lessons: [
        {
          objectives: ["O1"],
          title: "Produtos e resultados: qual é a diferença?",
          minutes: 4,
          goal: "Distinguir os produtos dos resultados num dos seus programas.",
          text: [
            "Os produtos contam o que você fez: 300 refeições servidas, 40 sessões de explicações, 25 voluntários formados. Os resultados descrevem o que mudou para as pessoas: as famílias preocupam-se menos com a comida, os alunos melhoraram as notas de leitura, os voluntários sentem-se prontos para liderar.",
            "Os financiadores e as direções pedem cada vez mais resultados, e não só produtos. Os resultados mostram que a sua missão está a funcionar.",
            "A IA pode ajudá-lo a pensar nisto. Pergunte: \"O nosso programa [descrição pública] faz [atividades]. Faça uma lista dos produtos prováveis e dos resultados prováveis a curto prazo para os participantes.\" Depois escolha os que são verdadeiros para o seu programa."
          ],
          words: [["Produto (output)", "uma contagem do que o seu programa fez, como as refeições servidas."], ["Resultado (outcome)", "uma mudança na vida das pessoas por causa do seu programa."], ["Impacto", "a diferença maior e mais duradoura que o seu trabalho faz na comunidade."]],
          slides: [
            { title: "Os produtos contam o que você fez", bullets: ["300 refeições servidas", "40 sessões de explicações", "25 voluntários formados"] },
            { title: "Os resultados mostram o que mudou", bullets: ["As famílias preocupam-se menos com a comida", "Os alunos melhoram as notas de leitura", "Os voluntários ficam prontos para liderar"] },
            { title: "Peça ideias à IA", bullets: ["Produtos e resultados prováveis", "Você escolhe o que é verdadeiro"] }
          ],
          tryIt: "Para um programa, escreva três produtos e dois resultados. Use a IA para ter ideias e depois guarde só os que são verdadeiros para o seu programa.",
          youCanNow: "distinguir os produtos dos resultados no seu próprio programa.",
          quickCheck: [
            { objective: "O1", q: "\"25 voluntários formados\" é um exemplo de quê?", options: ["Um produto", "Um resultado", "Um recurso", "Um inquérito"], answer: 0, why: "Os produtos contam o que você fez; os resultados descrevem o que mudou para as pessoas." },
            { objective: "O1", q: "O seu relatório só mostra as refeições servidas. Um financiador pede resultados. O que acrescenta?", options: ["Mais contagens de refeições", "O que mudou para as famílias, por exemplo preocuparem-se menos com a comida", "O custo da comida", "Uma lista de voluntários"], answer: 1, why: "Os resultados descrevem o que mudou para as pessoas por causa do programa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construir um modelo lógico simples",
          minutes: 5,
          goal: "Construir com a ajuda da IA um modelo lógico de uma página para um programa.",
          text: [
            "Um modelo lógico é uma imagem de uma página de como o seu programa funciona: recursos (o que você põe), atividades (o que você faz), produtos (o que você conta) e resultados (o que muda).",
            "Peça à IA: \"Faça uma tabela de modelo lógico para este programa: [descrição pública]. Colunas: recursos, atividades, produtos, resultados a curto prazo, resultados a longo prazo. Mantenha cada célula curta.\"",
            "Depois corrija-a para que corresponda à realidade. Retire tudo o que não faz. Um modelo lógico é um plano que você consegue defender, não uma lista de desejos."
          ],
          steps: ["Descreva o programa em três frases públicas.", "Peça à IA uma tabela de modelo lógico com cinco colunas.", "Retire tudo o que não faz na realidade.", "Verifique que cada resultado está ligado a uma atividade."],
          words: [["Modelo lógico", "uma tabela de uma página que mostra os recursos, as atividades, os produtos e os resultados."], ["Recurso (input)", "o que você põe num programa: funcionários, voluntários, dinheiro, espaço."]],
          slides: [
            { title: "Um modelo lógico mostra", bullets: ["Recursos: o que você põe", "Atividades: o que você faz", "Produtos: o que você conta", "Resultados: o que muda"] },
            { title: "Peça uma tabela à IA", bullets: ["Cinco colunas", "Células curtas"] },
            { title: "Torne-o real", bullets: ["Retire o que não faz", "Cada resultado ligado a uma atividade"] }
          ],
          tryIt: "Construa com a IA uma tabela de modelo lógico para o seu programa e depois corrija-a até cada célula ser verdadeira.",
          youCanNow: "construir um modelo lógico simples e honesto para um programa.",
          quickCheck: [
            { objective: "O2", q: "Num modelo lógico, o que são as atividades?", options: ["O que você conta", "O que muda", "O que você faz", "O que você põe"], answer: 2, why: "As atividades são o que você faz; os recursos entram, os produtos contam-se e os resultados são o que muda." },
            { objective: "O2", q: "O modelo lógico da IA tem um resultado a longo prazo que você não tem forma de alcançar. O que faz?", options: ["Deixa-o; os financiadores gostam de grandes objetivos", "Torna-o maior", "Copia-o para todos os programas", "Retira-o para que o modelo corresponda à realidade"], answer: 3, why: "Um modelo lógico é um plano que você consegue defender, não uma lista de desejos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escolher medidas de resultados",
          minutes: 5,
          goal: "Escolher duas medidas de resultados que consegue mesmo recolher.",
          text: [
            "Uma medida é a forma de saber que um resultado aconteceu. Para \"as famílias preocupam-se menos com a comida\", uma medida pode ser: a percentagem de famílias que dizem preocupar-se menos com ficar sem comida, perguntada na inscrição e três meses depois.",
            "As boas medidas são simples, a sua equipa consegue recolhê-las e são honestas. Comparar o antes e o depois é mais forte do que perguntar só uma vez.",
            "Peça à IA: \"Sugira três formas simples de uma pequena organização sem fins lucrativos medir este resultado: [resultado]. Temos [tempo de funcionários e voluntários].\" Escolha duas que consegue mesmo fazer."
          ],
          steps: ["Escolha dois resultados do seu modelo lógico.", "Peça à IA formas simples de medir cada um.", "Escolha as que a sua equipa consegue recolher.", "Planeie medir antes e depois, sempre que puder."],
          words: [["Medida", "a forma de saber que um resultado aconteceu, muitas vezes um número ou uma percentagem."], ["Antes e depois", "fazer a mesma pergunta no início e mais tarde, para ver a mudança."]],
          slides: [
            { title: "Uma medida mostra um resultado", bullets: ["\"Percentagem de famílias que se preocupam menos com a comida\"", "Perguntada na inscrição e três meses depois"] },
            { title: "As boas medidas são", bullets: ["Simples", "Possíveis de recolher pela sua equipa", "Honestas"] },
            { title: "Antes e depois", bullets: ["Mais forte do que perguntar uma vez", "Mostra a mudança ao longo do tempo"] }
          ],
          tryIt: "Escolha duas medidas de resultados para o seu programa, com as sugestões da IA, e escreva quando vai recolher cada uma.",
          youCanNow: "escolher medidas de resultados que a sua equipa consegue recolher.",
          quickCheck: [
            { objective: "O3", q: "Porque é que perguntar na inscrição e outra vez mais tarde é mais forte do que perguntar uma vez?", options: ["Mostra a mudança ao longo do tempo", "É mais curto", "Não precisa de tempo dos funcionários", "Evita usar números"], answer: 0, why: "Comparar o antes e o depois mostra a mudança." },
            { objective: "O3", q: "A IA sugere três medidas, mas uma precisa de horas de trabalho que você não tem. O que faz?", options: ["Usa as três na mesma", "Escolhe as duas que consegue mesmo recolher", "Contrata primeiro um consultor", "Não mede nada"], answer: 1, why: "As boas medidas podem ser recolhidas pela sua equipa; escolha duas que consegue mesmo fazer." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear o que medir",
        questions: [
          { objective: "O1", q: "Qual é um resultado?", options: ["As famílias preocupam-se menos com a comida", "300 refeições servidas", "40 sessões realizadas", "25 voluntários formados"], answer: 0, why: "Os resultados são mudanças na vida das pessoas." },
          { objective: "O1", q: "Qual é um produto?", options: ["Os alunos sentem-se mais confiantes", "40 sessões de explicações realizadas", "As famílias estão mais saudáveis", "Os voluntários sentem-se prontos para liderar"], answer: 1, why: "Os produtos contam o que você fez." },
          { objective: "O2", q: "O modelo lógico da IA tem uma atividade que você não faz. O que faz?", options: ["Deixa-a", "Começa a fazê-la em segredo", "Retira-a", "Pergunta a um financiador"], answer: 2, why: "Um modelo lógico tem de ser verdadeiro." },
          { objective: "O3", q: "Qual é o plano de medição mais forte?", options: ["Perguntar uma vez no fim", "Adivinhar", "Perguntar só aos funcionários", "Fazer a mesma pergunta na inscrição e três meses depois"], answer: 3, why: "O antes e o depois mostram a mudança." },
          { objective: "O2", q: "O que são os recursos?", options: ["O que você põe: funcionários, voluntários, dinheiro, espaço", "Respostas ao inquérito", "Nomes dos financiadores", "Resultados"], answer: 0, why: "Os recursos são o que um programa usa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Recolher, resumir e relatar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever um inquérito curto e justo aos participantes",
          minutes: 5,
          goal: "Usar a IA para preparar um inquérito curto que mede os seus resultados.",
          text: [
            "Um inquérito pergunta aos participantes o que mudou para eles. Mantenha-o curto, com cerca de 5 a 8 perguntas, em palavras simples e nas línguas que eles usam.",
            "Peça à IA: \"Escreva um inquérito anónimo de 6 perguntas para adultos do nosso programa de alimentação, para medir [resultado]. Use linguagem simples, ao nível do 6.º ano, sobretudo perguntas de escolha múltipla e uma pergunta aberta. Evite perguntas tendenciosas.\"",
            "Retire qualquer pergunta sobre nomes, dados de saúde ou situação de imigração, a não ser que precise mesmo dela e tenha uma forma segura de a guardar. Diga às pessoas que o inquérito é voluntário e não vai afetar os serviços que recebem. Ferramentas gratuitas como o Google Forms ou o Microsoft Forms podem recolher as respostas."
          ],
          steps: ["Peça à IA um inquérito anónimo curto que mede o seu resultado.", "Reescreva qualquer pergunta tendenciosa.", "Retire as perguntas sobre nomes ou dados sensíveis de que não precisa.", "Acrescente uma nota a dizer que o inquérito é voluntário.", "Crie-o numa ferramenta de formulários gratuita."],
          words: [["Inquérito", "um conjunto de perguntas para saber o que as pessoas pensam ou viveram."], ["Anónimo", "sem nomes nem dados que possam mostrar quem respondeu."], ["Pergunta tendenciosa", "uma pergunta que empurra as pessoas para uma resposta, como \"Quanto é que o nosso ótimo programa o ajudou?\""]],
          slides: [
            { title: "Mantenha-o curto", bullets: ["5 a 8 perguntas", "Palavras simples, nas línguas das pessoas"] },
            { title: "Peça à IA", bullets: ["Anónimo, ao nível do 6.º ano", "Sobretudo escolha múltipla, uma pergunta aberta", "Sem perguntas tendenciosas"] },
            { title: "Proteja as pessoas", bullets: ["Sem nomes nem dados sensíveis, a não ser que sejam precisos", "Voluntário: não vai afetar os serviços"] }
          ],
          tryIt: "Prepare com a IA um inquérito anónimo de 6 perguntas para o seu programa. Encontre e reescreva qualquer pergunta tendenciosa e acrescente uma nota a dizer que é voluntário.",
          youCanNow: "escrever com a ajuda da IA um inquérito curto, justo e anónimo aos participantes.",
          quickCheck: [
            { objective: "O4", q: "Que tipo de perguntas deve ter a maior parte do inquérito?", options: ["Perguntas longas de redação", "Perguntas sobre nomes e moradas", "Sobretudo escolha múltipla, com uma pergunta aberta", "Só sim ou não sobre os funcionários"], answer: 2, why: "O pedido diz sobretudo escolha múltipla e uma pergunta aberta." },
            { objective: "O4", q: "O inquérito da IA pergunta a todos os participantes que problemas de saúde têm. O que faz?", options: ["Deixa-a para ter mais dados", "Torna-a obrigatória", "Pede também os nomes", "Retira-a, a não ser que precise mesmo dela e a possa guardar com segurança"], answer: 3, why: "Retire as perguntas sobre saúde ou imigração, a não ser que sejam mesmo precisas e guardadas com segurança." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Resumir os resultados sem expor ninguém",
          minutes: 5,
          goal: "Resumir com a IA os resultados de um inquérito anónimo e verificar você mesmo os números.",
          text: [
            "Antes de usar a IA com os resultados, confirme que os dados não têm nomes, contactos nem nada que possa identificar uma pessoa. Se um grupo pequeno puder ser reconhecido (por exemplo, os únicos três idosos que falam espanhol), junte ou deixe de fora esses dados.",
            "A sua ferramenta de formulários ou a folha de cálculo pode contar as respostas por você. Depois pode colar na IA as contagens, não as respostas pessoais em bruto: \"Aqui estão as contagens do inquérito: [contagens]. Resuma as principais conclusões em 4 pontos e sugira um gráfico.\"",
            "Verifique você mesmo cada percentagem na folha de cálculo. A IA erra muitas vezes nas contas. Nas respostas abertas, leia-as primeiro você mesmo e retire tudo o que identifique alguém antes de pedir à IA para as agrupar em temas."
          ],
          steps: ["Retire os nomes e os dados que identificam alguém.", "Conte as respostas na ferramenta de formulários ou na folha de cálculo.", "Cole na IA as contagens, não as respostas pessoais em bruto.", "Peça um resumo curto e uma ideia de gráfico.", "Verifique você mesmo cada percentagem."],
          words: [["Dados", "informações que você recolheu, como as respostas a um inquérito."], ["Tema", "uma ideia que aparece muitas vezes nas respostas abertas."], ["Percentagem", "uma parte de 100, por exemplo 60 de 100 pessoas são 60 por cento."]],
          slides: [
            { title: "Primeiro, proteja as pessoas", bullets: ["Sem nomes nem contactos", "Grupos pequenos podem ser reconhecidos: junte-os"] },
            { title: "Conte e depois resuma", bullets: ["Deixe a folha de cálculo contar", "Dê à IA contagens, não respostas pessoais em bruto"] },
            { title: "Verifique as contas", bullets: ["A IA erra nas contas", "Verifique você mesmo cada percentagem"] }
          ],
          tryIt: "Use contagens de prática (por exemplo, 30 de 40 pessoas disseram que se preocupam menos com a comida). Peça à IA um resumo em 4 pontos e depois verifique cada percentagem com uma calculadora.",
          youCanNow: "resumir resultados anónimos com a IA e verificar os números.",
          quickCheck: [
            { objective: "O5", q: "O que faz com as respostas abertas antes de pedir à IA para encontrar temas?", options: ["Lê-as você mesmo e retira tudo o que identifique alguém", "Cola-as todas como estão", "Apaga-as", "Envia-as ao financiador"], answer: 0, why: "Leia primeiro as respostas abertas e retire tudo o que identifique alguém." },
            { objective: "O5", q: "Só dois participantes são homens com mais de 70 anos, por isso podem ser reconhecidos. O que faz?", options: ["Apresenta-os à parte, com o nome", "Junta ou deixa de fora esses dados", "Pede à IA para adivinhar quem são", "Publica as respostas deles na internet"], answer: 1, why: "Se um grupo pequeno puder ser reconhecido, junte ou deixe de fora esses dados." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever um relatório de impacto de uma página",
          minutes: 5,
          goal: "Transformar o seu modelo lógico e os seus resultados num relatório de impacto honesto de uma página.",
          text: [
            "Um relatório de impacto diz à sua direção, aos financiadores e à comunidade o que o seu programa fez e o que mudou. Uma página chega: a necessidade, o que fez (produtos), o que mudou (resultados com números), uma história e o que aprendeu.",
            "Peça à IA: \"Usando só esta informação, escreva um relatório de impacto de uma página com estes títulos: A necessidade, O que fizemos, O que mudou, Uma história, O que aprendemos. [o seu modelo lógico, as medidas, os resultados verificados, uma história partilhada com autorização].\"",
            "Inclua uma lição aprendida honesta. Os financiadores confiam nas organizações que dizem o que não funcionou e como vão melhorar. Nunca deixe a IA acrescentar números ou afirmações que não estejam nos seus dados."
          ],
          steps: ["Junte o seu modelo lógico, as medidas, os resultados verificados e uma história autorizada.", "Peça à IA um relatório de uma página com cinco títulos, usando só a sua informação.", "Verifique cada número na sua folha de cálculo.", "Acrescente uma lição aprendida honesta.", "Peça a um colega para o ler."],
          words: [["Relatório de impacto", "um relatório curto sobre o que um programa fez e o que mudou."], ["Lição aprendida", "algo que você descobriu e que o vai ajudar a fazer melhor da próxima vez."]],
          slides: [
            { title: "Uma página, cinco partes", bullets: ["A necessidade", "O que fizemos e o que mudou", "Uma história", "O que aprendemos"] },
            { title: "Peça à IA", bullets: ["\"Usando só esta informação...\"", "Cinco títulos"] },
            { title: "Seja honesto", bullets: ["Cada número vem dos seus dados", "Inclua uma lição aprendida", "Um colega lê o relatório"] }
          ],
          tryIt: "Tarefa final: escreva o seu relatório de impacto de uma página com um modelo lógico, duas medidas, o seu inquérito, um resumo de resultados anónimos, uma história partilhada com autorização e uma lição aprendida honesta.",
          youCanNow: "planear, medir e relatar o impacto de um programa com a ajuda da IA.",
          quickCheck: [
            { objective: "O6", q: "Que título faz parte do relatório de impacto de uma página da lição?", options: ["Palavras-passe dos doadores", "Salários dos funcionários", "O que aprendemos", "Moradas dos participantes"], answer: 2, why: "Os títulos são a necessidade, o que fizemos, o que mudou, uma história e o que aprendemos." },
            { objective: "O6", q: "O relatório da IA acrescenta \"90% das famílias encontraram emprego\", o que não está nos seus dados. O que faz?", options: ["Deixa; soa muito bem", "Muda para 80%", "Passa para uma nota de rodapé", "Retira, porque a IA não pode acrescentar afirmações que não estão nos seus dados"], answer: 3, why: "Nunca deixe a IA acrescentar números ou afirmações que não estejam nos seus dados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Recolher, resumir e relatar",
        questions: [
          { objective: "O4", q: "Qual é uma pergunta tendenciosa?", options: ["\"Quantas vezes se preocupou com a comida no mês passado?\"", "\"Quanto é que o nosso maravilhoso programa o ajudou?\"", "\"Em que dia vem cá?\"", "\"Como soube de nós?\""], answer: 1, why: "Empurra as pessoas para uma resposta positiva." },
          { objective: "O4", q: "O que deve dizer às pessoas sobre o seu inquérito?", options: ["Que é obrigatório para receber os serviços", "Nada", "Que é voluntário e não vai afetar os serviços que recebem", "Que as respostas delas vão ser publicadas"], answer: 2, why: "As pessoas devem sentir-se livres para responder com honestidade ou não responder." },
          { objective: "O5", q: "O que deve colar na IA para resumir os resultados?", options: ["Respostas em bruto com nomes", "Os números de telefone dos participantes", "Toda a base de dados de clientes", "Contagens sem nenhum dado que identifique alguém"], answer: 3, why: "As contagens protegem a privacidade." },
          { objective: "O5", q: "A IA diz que 30 de 40 são 80 por cento. O que faz?", options: ["Verifica você mesmo: são 75 por cento", "Usa esse número", "Arredonda para 100", "Retira todos os números"], answer: 0, why: "A IA erra nas contas; 30 de 40 são 75 por cento." },
          { objective: "O6", q: "Porque incluir uma lição aprendida num relatório de impacto?", options: ["Para encher espaço", "Os financiadores confiam em organizações honestas que melhoram", "A IA exige", "Para esconder resultados"], answer: 1, why: "Ser honesto sobre o que não funcionou cria confiança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Execução de Programas e o Impacto",
    questions: [
      { objective: "O1", q: "Um produto é:", options: ["Uma mudança na vida das pessoas", "Um doador", "Uma contagem do que o seu programa fez", "Uma pergunta de inquérito"], answer: 2, why: "Os produtos contam a atividade." },
      { objective: "O1", q: "Um resultado é:", options: ["O número de folhetos impressos", "O orçamento", "A morada do escritório", "Uma mudança na vida das pessoas por causa do seu programa"], answer: 3, why: "Os resultados são mudanças para as pessoas." },
      { objective: "O1", q: "Porque é que os financiadores pedem resultados?", options: ["Os resultados mostram que a missão está a funcionar", "São mais fáceis de contar", "São mais curtos", "Os financiadores não gostam de números"], answer: 0, why: "Os resultados mostram uma diferença real." },
      { objective: "O2", q: "O que NÃO faz parte de um modelo lógico?", options: ["Recursos", "Palavras-passe dos doadores", "Atividades", "Resultados"], answer: 1, why: "Um modelo lógico tem recursos, atividades, produtos e resultados." },
      { objective: "O2", q: "Um modelo lógico deve ser:", options: ["Uma lista de desejos", "Secreto", "Um plano que consegue defender, fiel ao que você faz", "Escrito só pela IA"], answer: 2, why: "Tem de corresponder à realidade." },
      { objective: "O2", q: "Cada resultado num modelo lógico deve estar ligado a:", options: ["Um doador", "Um logótipo", "Um feriado", "Uma atividade"], answer: 3, why: "As atividades levam aos resultados." },
      { objective: "O3", q: "Uma boa medida é:", options: ["Simples, possível de recolher e honesta", "Complicada e cara", "Impossível de recolher", "Inventada"], answer: 0, why: "A sua equipa tem de a conseguir recolher." },
      { objective: "O3", q: "Medir antes e depois ajuda-o a:", options: ["Evitar inquéritos", "Ver a mudança ao longo do tempo", "Saltar os resultados", "Esconder resultados"], answer: 1, why: "A comparação mostra a mudança." },
      { objective: "O4", q: "Que tamanho deve ter um inquérito aos participantes?", options: ["50 perguntas", "Uma palavra", "Cerca de 5 a 8 perguntas", "Sem limite"], answer: 2, why: "Os inquéritos curtos recebem mais respostas." },
      { objective: "O4", q: "Um inquérito anónimo:", options: ["Pede o nome completo", "É só para os funcionários", "Não tem perguntas", "Não tem nomes nem dados que mostrem quem respondeu"], answer: 3, why: "O anonimato protege os participantes." },
      { objective: "O4", q: "Que pergunta do inquérito deve normalmente retirar?", options: ["A situação de imigração, a não ser que seja mesmo precisa e guardada com segurança", "\"Quantas vezes nos visitou?\"", "\"Sentiu-se bem recebido?\"", "\"O que podemos melhorar?\""], answer: 0, why: "Os dados sensíveis põem as pessoas em risco." },
      { objective: "O4", q: "Que ferramentas gratuitas podem recolher as respostas a um inquérito?", options: ["Uma calculadora", "O Google Forms ou o Microsoft Forms", "Uma impressora", "Um carregador de telefone"], answer: 1, why: "As ferramentas de formulários recolhem e contam as respostas." },
      { objective: "O5", q: "Um grupo pequeno pode ser reconhecido nos seus resultados. Você deve:", options: ["Dizer os nomes", "Publicá-los", "Juntar ou deixar de fora esses dados", "Ignorar"], answer: 2, why: "Os grupos pequenos podem identificar pessoas." },
      { objective: "O5", q: "Quem deve contar as respostas ao inquérito?", options: ["A IA, a adivinhar", "Um doador", "Ninguém", "A sua ferramenta de formulários ou a folha de cálculo"], answer: 3, why: "As folhas de cálculo contam sem erros." },
      { objective: "O5", q: "A IA erra nas contas, por isso você deve:", options: ["Verificar você mesmo cada percentagem", "Confiar nela", "Retirar todos os números", "Perguntar duas vezes e escolher uma"], answer: 0, why: "Os números são da sua responsabilidade." },
      { objective: "O5", q: "Um tema nas respostas abertas é:", options: ["Um conjunto de cores", "Uma ideia que aparece muitas vezes", "Um tipo de doador", "O nome de um programa"], answer: 1, why: "Os temas resumem as respostas abertas." },
      { objective: "O6", q: "Um relatório de impacto deve ter:", options: ["100 páginas", "Só fotografias", "Cerca de uma página com a necessidade, o que fez, o que mudou, uma história e as lições", "Só um orçamento"], answer: 2, why: "Uma página clara chega." },
      { objective: "O6", q: "Que pedido mantém um relatório de impacto honesto?", options: ["\"Aumente os nossos números.\"", "\"Invente uma história de sucesso.\"", "\"Acrescente estatísticas impressionantes.\"", "\"Usando só esta informação, escreva...\""], answer: 3, why: "Limitar a IA aos seus dados impede afirmações inventadas." },
      { objective: "O6", q: "Uma história num relatório de impacto precisa de:", options: ["Autorização da pessoa", "O nome completo e a morada dela", "Uma pessoa famosa", "Nada"], answer: 0, why: "As histórias precisam de consentimento." },
      { objective: "O6", q: "Quem deve ler o relatório de impacto antes de ser enviado?", options: ["Ninguém", "Um colega", "Só a IA", "Um concorrente"], answer: 1, why: "Uma segunda pessoa a ler encontra erros." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      6,
      8,
      12,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Modelo lógico",
        objective: "O2",
        notYet: "Falta uma coluna, ou tem coisas que o programa não faz.",
        meets: "Recursos, atividades, produtos e resultados, todos fiéis ao programa.",
        exceeds: "Cada resultado está claramente ligado a uma atividade."
      },
      {
        name: "Medidas de resultados",
        objective: "O3",
        notYet: "As medidas são produtos, ou não podem ser recolhidas.",
        meets: "Duas medidas de resultados simples e honestas que a equipa consegue recolher.",
        exceeds: "As duas são perguntadas antes e depois, para mostrar a mudança."
      },
      {
        name: "Inquérito justo",
        objective: "O4",
        notYet: "Tem perguntas tendenciosas, ou pede nomes ou dados sensíveis sem necessidade.",
        meets: "5 a 8 perguntas simples, anónimo e voluntário.",
        exceeds: "Oferecido nas línguas que os participantes usam."
      },
      {
        name: "Resultados anónimos e verificados",
        objective: "O5",
        notYet: "Os resultados podem identificar alguém, ou uma percentagem está errada.",
        meets: "Resumo feito a partir de contagens sem dados que identifiquem alguém, com cada percentagem verificada.",
        exceeds: "As respostas abertas estão agrupadas em temas depois de retirar os dados que identificam alguém."
      },
      {
        name: "Relatório honesto de uma página",
        objective: "O6",
        notYet: "Um número ou uma afirmação não está nos dados, ou a história não tem autorização.",
        meets: "Uma página com a necessidade, os produtos, os resultados, uma história autorizada e uma lição aprendida.",
        exceeds: "Um colega leu-o e a lição aprendida diz como o programa vai melhorar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Programas que recolhem dados de resultados antes e depois em 90 dias (inquérito de seguimento)",
      "Relatórios de impacto partilhados com uma direção ou um financiador em 90 dias",
      "Renovações de subsídios ou novos financiamentos que as organizações ligam aos seus relatórios de impacto"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e uma folha de cálculo gratuita",
      "Um assistente de IA gratuito e o Google Forms ou o Microsoft Forms",
      "Uma descrição pública de um programa, e dados de prática sem nomes se os dados reais ainda não estiverem prontos",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Dê um conjunto de dados de prática sem nomes para que os alunos possam treinar a fazer resumos com segurança.",
      "Façam em grupo, como um jogo, a separação entre produtos e resultados antes da primeira verificação.",
      "Peça aos alunos que verifiquem juntos numa folha de cálculo as percentagens da IA, para verem quantas vezes é preciso corrigi-las.",
      "Lembre aos alunos que os inquéritos têm de ser voluntários e não podem afetar os serviços de ninguém.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
