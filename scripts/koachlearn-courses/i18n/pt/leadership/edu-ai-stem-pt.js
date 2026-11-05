"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ai-stem.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "edu-ai-stem-pt",
  lang: "pt",
  translationOf: "edu-ai-stem",
  category: "Leadership Development",
  name: "IA no Ensino de STEM",
  skills: "Criar problemas de STEM com soluções verificadas, Usar a IA como ajudante de programação em investigações com dados, Ensinar como a IA aprende com dados, Verificar afirmações da IA como um cientista, Usar a IA no processo de design de engenharia, Desenhar tarefas que mostram o raciocínio",
  outcome: "planear e dar uma aula de STEM em que os alunos usam a IA como ferramenta, para ajudar a escrever código, analisar dados ou ter ideias de design, e depois verificam o que ela produz como cientistas e engenheiros, com tarefas que tornam visível o raciocínio dos alunos.",
  about: [
    "Este curso é para professores, formadores pedagógicos e líderes de ciência, tecnologia, engenharia e matemática (STEM, a sigla em inglês). A IA é ao mesmo tempo uma ferramenta para aprender STEM e um tema de STEM. Os alunos devem aprender a usá-la, a verificá-la e a perceber como funciona.",
    "O Capítulo 1 usa a IA como ferramenta do professor e do aluno: listas de problemas com soluções verificadas, simulações e gráficos, e investigações com dados em que a IA ajuda a escrever código. O Capítulo 2 faz da IA o tema: como as máquinas aprendem com dados, verificar afirmações da IA como um cientista, a IA no processo de design de engenharia e tarefas que mantêm o raciocínio dos alunos no centro.",
    "O uso de ferramentas de IA pelos alunos depende da aprovação do seu distrito escolar e das regras de idade de cada ferramenta. Não coloque informações dos alunos em ferramentas não aprovadas. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Planeie e (se puder) dê uma aula de STEM em que os alunos usam uma ferramenta de IA aprovada como parte de uma investigação, por exemplo pedindo à IA que ajude a escrever código Python no Google Colab para fazer o gráfico de um conjunto de dados público, ou que dê ideias de design para um desafio de engenharia. A aula tem de incluir um passo de verificação (os alunos verificam o código, os números ou as afirmações da IA com dados, um cálculo ou um teste), uma tarefa em que os alunos explicam o seu raciocínio com as suas próprias palavras e um nível de uso de IA para a tarefa.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Professores de ciência, tecnologia, engenharia e matemática, formadores pedagógicos e líderes escolares que querem que os alunos usem a IA como ferramenta em investigações e em design, continuando a desenvolver um raciocínio verdadeiro.",
    startingPoint: "Sabem ensinar conteúdos de STEM, fazer aulas de laboratório e passar listas de problemas. Alguns já usaram um assistente de IA para criar problemas de prática. Poucos têm uma rotina para verificar a matemática, o código ou as afirmações da IA, ou para desenhar tarefas em que o raciocínio dos alunos fica visível.",
    gap: "A IA comete erros com muita segurança em matemática de vários passos, em código, em diagramas e em citações, e consegue resolver muitos problemas dos manuais pelos alunos. Os professores precisam de aulas em que os alunos usam a IA como fariam cientistas e engenheiros: como um ajudante cujo resultado é uma hipótese a testar, com os alunos a explicar o seu próprio raciocínio.",
    constraints: [
      "Tempo: lições curtas que cabem num tempo de planificação",
      "Aparelhos: um computador da escola; algumas ferramentas (Google Colab, Teachable Machine) pedem contas e aprovação do distrito",
      "Privacidade e regras: veja a política do distrito e os termos da ferramenta antes de os alunos usarem qualquer IA ou ferramenta online",
      "Os recursos gratuitos das ferramentas não são garantidos, por isso os planos precisam de uma alternativa e os alunos devem guardar o trabalho muitas vezes",
      "Cada problema, explicação e pedaço de código feito pela IA tem de ser verificado antes de os alunos o verem"
    ],
    prerequisites: "Nenhum. Professores que nunca usaram ferramentas de IA podem fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com problemas de prática de STEM feitos pela IA e as suas soluções", action: "verificar cada solução com um segundo método, uma calculadora ou uma ferramenta de gráficos", standard: "antes de os alunos verem qualquer problema" },
    { id: "O2", condition: "Com um conjunto de dados público e um ajudante de programação com IA", action: "planear uma investigação com dados em que os alunos comentam cada linha de código, preveem o resultado e verificam um número à mão", standard: "com todos os passos de compreensão incluídos" },
    { id: "O3", condition: "Com uma explicação, uma analogia ou um diagrama feito pela IA", action: "encontrar e corrigir conceções erradas, comparando-o com o seu programa curricular ou com uma fonte de confiança", standard: "antes de o usar na aula" },
    { id: "O4", condition: "Usando uma ferramenta gratuita ou uma atividade com cartões, sem aparelhos", action: "explicar como a aprendizagem automática usa dados de treino para fazer previsões e porque os dados variados são importantes", standard: "com um exemplo de sala de aula que funciona" },
    { id: "O5", condition: "Com uma afirmação da IA, como uma estatística, uma conversão ou uma citação", action: "aplicar a rotina afirmação, evidência, teste, conclusão", standard: "chegando a aceitar, rejeitar ou evidência insuficiente, com uma razão" },
    { id: "O6", condition: "Ao planear uma tarefa ou um desafio de design de STEM", action: "desenhar uma tarefa em que os alunos mostram o seu próprio raciocínio e indicar o seu nível de uso de IA", standard: "com um passo de verificação e uma explicação com as palavras dos próprios alunos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A IA como ferramenta de STEM",
      lessons: [
        {
          objectives: ["O1"],
          title: "Listas de problemas com soluções verificadas",
          minutes: 5,
          goal: "Criar exercícios de STEM com a IA e verificar cada solução.",
          text: [
            "A IA consegue criar muitos problemas de prática depressa: problemas com contextos da vida real, problemas em vários níveis de dificuldade e soluções resolvidas passo a passo. Isso poupa tempo, mas é sabido que a IA comete erros de cálculo e de raciocínio, sobretudo em problemas de vários passos, e pode dar uma resposta errada com toda a segurança.",
            "Por isso, verifique cada solução. Resolva você mesmo, verifique com uma calculadora ou com uma ferramenta de gráficos como o Desmos, ou peça à IA que verifique a resposta por um segundo método e compare. Se os dois métodos não derem o mesmo, resolva você mesmo.",
            "Peça problemas com números redondos para praticar, ou com números realistas e \"desarrumados\" para aplicar. Peça os erros comuns que os alunos cometem em cada problema; são boas perguntas para discussão."
          ],
          steps: ["Peça problemas no nível e no contexto de que precisa.", "Peça soluções passo a passo.", "Resolva ou verifique cada resposta com uma calculadora ou uma ferramenta de gráficos.", "Peça um segundo método e compare.", "Peça os erros comuns para discutir."],
          words: [["Solução resolvida", "uma solução que mostra todos os passos."], ["Verificar", "confirmar que uma coisa está certa usando outro método ou outra fonte."]],
          slides: [
            { title: "Exercícios rápidos", bullets: ["Problemas com contextos da vida real", "Vários níveis de dificuldade", "Soluções passo a passo"] },
            { title: "A IA erra na matemática", bullets: ["Sobretudo em problemas de vários passos", "Pode errar com toda a segurança", "Verifique cada resposta"] },
            { title: "Como verificar", bullets: ["Resolva você mesmo", "Calculadora ou ferramenta de gráficos como o Desmos", "Segundo método; compare"] }
          ],
          tryIt: "Peça à IA seis problemas de vários passos sobre um tema que ensina, com as soluções. Verifique cada um e conte quantos estavam errados.",
          youCanNow: "criar exercícios de STEM com a IA e verificar cada solução antes de os alunos a verem.",
          quickCheck: [
            { objective: "O1", q: "Onde é que a IA tem mais probabilidade de errar em matemática?", options: ["A copiar o enunciado de um problema", "Em problemas de vários passos", "A escrever o contexto de um problema", "A escolher números redondos"], answer: 1, why: "A IA comete erros de cálculo e de raciocínio, sobretudo ao longo de vários passos." },
            { objective: "O1", q: "A solução resolvida da IA e a verificação com a calculadora dão respostas diferentes. O que faria?", options: ["Confiar na IA porque mostrou os passos", "Confiar na calculadora sem olhar", "Tirar o problema sem verificar", "Resolver você mesmo o problema"], answer: 3, why: "Quando dois métodos não dão o mesmo, a lição diz para resolver você mesmo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Investigações com dados, com a IA como ajudante de programação",
          minutes: 6,
          goal: "Planear uma investigação com dados em que a IA ajuda a escrever código que os alunos verificam e explicam.",
          text: [
            "Os dados reais tornam o STEM real. Os alunos podem investigar conjuntos de dados públicos (tempo, saúde, desporto, ambiente) no Google Colab, um caderno de Python gratuito no navegador; precisa de uma conta Google, e os recursos gratuitos não são garantidos, por isso guarde o trabalho muitas vezes. Veja primeiro as regras do seu distrito sobre contas Google para alunos.",
            "A IA pode ser um ajudante de programação: os alunos descrevem o que querem (\"leia este CSV e faça um gráfico de linhas da temperatura por mês\") e a IA sugere código. Assim, muitos alunos conseguem correr código que ainda não saberiam escrever sozinhos, e aprendem com ele.",
            "Inclua a compreensão: os alunos têm de acrescentar um comentário a cada linha a explicar o que ela faz, prever o gráfico antes de correr o código e verificar à mão um número do resultado. Se não conseguem explicar o código, ainda não o aprenderam."
          ],
          steps: ["Escolha um conjunto de dados público e uma pergunta.", "Os alunos pedem à IA que ajude a escrever o código de um passo.", "Os alunos comentam cada linha com as suas palavras.", "Prevejam o resultado e depois corram o código.", "Verifiquem um número à mão."],
          words: [["Conjunto de dados", "uma coleção organizada de dados, muitas vezes uma tabela."], ["CSV", "um formato simples de ficheiro para tabelas, com os valores separados por vírgulas."], ["Comentário de código", "uma nota no código, que muitas vezes começa com #, a explicar o que o código faz."]],
          slides: [
            { title: "Dados reais, ferramentas gratuitas", bullets: ["Dados públicos: tempo, saúde, desporto", "Google Colab: gratuito, no navegador", "Veja as regras do distrito sobre contas de alunos"] },
            { title: "A IA como ajudante de programação", bullets: ["Descreva o passo em palavras", "A IA sugere código", "Os alunos correm o que ainda não sabiam escrever"] },
            { title: "Construir a compreensão", bullets: ["Comentar cada linha", "Prever e depois correr", "Verificar um número à mão"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }],
          tryIt: "Encontre um conjunto de dados público sobre um tema de que os seus alunos gostam. Use a IA para ajudar a escrever código no Colab que faça o gráfico de uma variável, acrescente um comentário a cada linha e verifique um número à mão.",
          youCanNow: "planear uma investigação com dados em que a IA ajuda com o código e os alunos mostram que compreendem.",
          quickCheck: [
            { objective: "O2", q: "O que é o Google Colab?", options: ["Um caderno de Python gratuito que funciona no navegador", "Um programa de estatística pago", "Uma ferramenta que só faz slides", "Um conjunto de dados sobre o tempo"], answer: 0, why: "O Colab deixa os alunos correr Python no navegador com uma conta Google." },
            { objective: "O2", q: "Um aluno correu código escrito pela IA e obteve um gráfico, mas não sabe dizer o que o código faz. O que faria?", options: ["Aceitar o gráfico como trabalho acabado", "Pedir-lhe que comente cada linha com as suas palavras e verifique um número à mão", "Pedir à IA um programa mais comprido", "Dar-lhe uma nota mais baixa e seguir em frente"], answer: 1, why: "Se os alunos não conseguem explicar o código, ainda não o aprenderam." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Simulações, imagens e explicações",
          minutes: 5,
          goal: "Usar a IA para criar explicações e imagens, e verificar se têm conceções erradas.",
          text: [
            "A IA consegue explicar ideias de STEM de várias maneiras (uma analogia, passo a passo, uma história) e sugerir diagramas, simulações ou demonstrações. Ferramentas gratuitas de simulação e de gráficos, como as simulações PhET e o Desmos, deixam os alunos explorar; a IA pode ajudá-lo a escrever as perguntas orientadoras.",
            "Tenha atenção às conceções erradas. As analogias da IA podem enganar (por exemplo, explicar a corrente elétrica com a água a correr de maneiras que deixam de funcionar), e os diagramas feitos pela IA podem estar cientificamente errados. Compare cada explicação com o seu programa curricular e com uma fonte de confiança.",
            "Uma estratégia útil na aula: dê aos alunos uma explicação da IA com um erro, de propósito ou verdadeiro, e peça-lhes que o encontrem e corrijam. Encontrar erros no que a IA produz é uma competência científica."
          ],
          steps: ["Peça à IA duas ou três explicações de um conceito.", "Compare cada uma com o seu programa curricular e com uma fonte de confiança.", "Use a IA para escrever perguntas orientadoras para uma simulação.", "Verifique se os diagramas estão cientificamente certos.", "Peça aos alunos que encontrem erros numa explicação da IA."],
          words: [["Simulação", "um modelo de computador que deixa explorar como uma coisa funciona."], ["Analogia", "explicar uma coisa comparando-a com outra que já se conhece."], ["Conceção errada", "uma ideia errada comum sobre como uma coisa funciona."]],
          slides: [
            { title: "Explicações e simulações", bullets: ["Várias maneiras de explicar uma ideia", "Perguntas orientadoras para PhET ou Desmos"] },
            { title: "Atenção às conceções erradas", bullets: ["As analogias podem enganar", "Os diagramas da IA podem estar errados", "Compare com uma fonte de confiança"] },
            { title: "Encontre o erro", bullets: ["Dê aos alunos uma explicação da IA com falhas", "Eles encontram e corrigem o erro"] }
          ],
          tryIt: "Peça à IA que explique de duas maneiras diferentes um conceito de STEM que ensina. Encontre as conceções erradas em cada uma e escreva uma tarefa \"encontre o erro\" para os alunos.",
          youCanNow: "usar explicações e simulações da IA, apanhando as suas conceções erradas.",
          quickCheck: [
            { objective: "O3", q: "Qual é o risco de uma analogia da IA em ciência?", options: ["É sempre comprida demais", "Não pode ser impressa", "Pode enganar no ponto em que a analogia deixa de funcionar", "Só funciona em matemática"], answer: 2, why: "Analogias como a da água para a corrente elétrica podem deixar de funcionar e criar conceções erradas." },
            { objective: "O3", q: "Um diagrama feito pela IA que pensa mostrar parece errado num ponto. O que faria?", options: ["Compará-lo com o seu programa curricular ou com uma fonte de confiança e corrigi-lo", "Mostrá-lo na mesma porque foi a IA que o fez", "Pedir aos alunos que o decorem", "Apagar todos os diagramas da IA que tem"], answer: 0, why: "Os diagramas da IA podem estar cientificamente errados, por isso verifique-os antes de os usar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A IA como ferramenta de STEM",
        questions: [
          { objective: "O1", q: "A IA dá uma solução passo a passo para um problema de vários passos. Você deve:", options: ["Usá-la tal como está", "Torná-la mais comprida", "Verificá-la antes de os alunos a verem", "Apagar os passos"], answer: 2, why: "A IA comete erros de cálculo e de raciocínio." },
          { objective: "O1", q: "Uma boa maneira de verificar uma resposta da IA é:", options: ["Verificá-la com um segundo método ou uma calculadora", "Fazer a mesma pergunta outra vez e aceitar a mesma resposta", "Confiar nela se parecer segura", "Pedir a um aluno que adivinhe"], answer: 0, why: "Um segundo método apanha os erros." },
          { objective: "O2", q: "Os recursos gratuitos do Google Colab são:", options: ["Garantidos e ilimitados", "Só pagos", "Só para professores", "Não garantidos; guarde o trabalho muitas vezes"], answer: 3, why: "O Colab diz que os recursos gratuitos não são garantidos." },
          { objective: "O2", q: "Os alunos usaram a IA para escrever código. Como mostram que compreendem?", options: ["Correm-no sem o ler", "Comentam cada linha com as suas palavras e verificam um resultado à mão", "Copiam-no para outro caderno", "Pedem à IA que o explique ao professor"], answer: 1, why: "Explicar e verificar constroem a compreensão." },
          { objective: "O3", q: "Porque dar aos alunos uma explicação da IA com um erro?", options: ["Para os confundir", "É um teste de rapidez", "Para poupar tempo", "Encontrar erros no que a IA produz é uma competência científica"], answer: 3, why: "Verificar afirmações é o que os cientistas fazem." }
        ]
      }
    },
    {
      name: "Capítulo 2: A IA como tema de STEM",
      lessons: [
        {
          objectives: ["O4"],
          title: "Como as máquinas aprendem com dados",
          minutes: 6,
          goal: "Ensinar a ideia básica da aprendizagem automática com um exemplo prático.",
          text: [
            "A aprendizagem automática (\"machine learning\") é um tema de STEM que os alunos conseguem perceber. A ideia central: em vez de escrever regras, mostramos a um programa muitos exemplos com rótulo (dados de treino) e ele encontra padrões e depois faz previsões sobre exemplos novos. A sua exatidão depende dos dados: exemplos a menos, ou exemplos pouco variados, levam a previsões erradas.",
            "Na prática: ferramentas gratuitas como o Teachable Machine, da Google, deixam os alunos treinar no navegador um classificador simples de imagens ou de sons; veja os termos e a aprovação do seu distrito antes de os alunos o usarem. Uma versão sem aparelhos também funciona: os alunos separam cartões de animais pelas suas características e escrevem regras, e depois testam com cartões novos.",
            "Depois faça as grandes perguntas: O que acontece se os dados de treino só mostrarem um tipo de exemplo? Como mediríamos a exatidão? Isto liga a aprendizagem automática à estatística, à qualidade dos dados e à justiça."
          ],
          steps: ["Explique: entram exemplos com rótulo, encontram-se padrões, saem previsões.", "Treine um classificador simples, ou faça a separação de cartões sem aparelhos.", "Teste-o com exemplos novos.", "Mude os dados de treino e veja o que acontece.", "Discuta a exatidão, a qualidade dos dados e a justiça."],
          words: [["Aprendizagem automática", "programas que aprendem padrões a partir de exemplos em vez de seguirem regras escritas à mão."], ["Dados de treino", "os exemplos com rótulo com que um programa aprende."], ["Classificador", "um programa que separa as coisas por categorias."]],
          slides: [
            { title: "A aprendizagem automática numa linha", bullets: ["Entram exemplos com rótulo", "Encontram-se padrões", "Previsões sobre exemplos novos"] },
            { title: "Na prática", bullets: ["Treinar um classificador simples no navegador", "Ou separar cartões, sem aparelhos", "Veja primeiro os termos e a aprovação"] },
            { title: "Grandes perguntas", bullets: ["E se os dados forem de um só lado?", "Como medimos a exatidão?", "Ligações à estatística e à justiça"] }
          ],
          tryIt: "Planeie uma atividade de 20 minutos em que os alunos treinam (ou simulam, sem aparelhos) um classificador simples, depois mudam os dados de treino e explicam o que aconteceu às previsões.",
          youCanNow: "ensinar a ideia central da aprendizagem automática com uma atividade prática.",
          quickCheck: [
            { objective: "O4", q: "Qual é a ideia central da aprendizagem automática?", options: ["Uma pessoa escreve cada regra à mão", "O programa decora uma resposta", "O computador adivinha ao acaso", "Um programa encontra padrões em muitos exemplos com rótulo"], answer: 3, why: "A aprendizagem automática aprende com dados de treino em vez de regras escritas à mão." },
            { objective: "O4", q: "A sua turma não tem aparelhos para o Teachable Machine. O que faria?", options: ["Saltar o tema", "Fazer a versão sem aparelhos: separar cartões de animais por características, escrever regras, testar com cartões novos", "Só mostrar um vídeo", "Esperar pelo próximo ano"], answer: 1, why: "A atividade com cartões ensina a mesma ideia sem aparelhos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar afirmações da IA como um cientista",
          minutes: 5,
          goal: "Ensinar aos alunos uma rotina para testar afirmações da IA com evidências.",
          text: [
            "O pensamento científico é a melhor defesa contra os erros da IA. Ensine uma rotina de quatro passos: Afirmação: o que diz exatamente a IA? Evidência: que dados ou que fonte mostrariam que é verdade? Teste: compare a afirmação com dados, um cálculo, uma experiência ou uma fonte de confiança. Conclusão: aceitar, rejeitar ou \"evidência insuficiente\".",
            "Pratique com afirmações de STEM em que a IA pode errar: uma conversão de unidades, uma estatística, uma afirmação de causa e efeito, uma fórmula química ou uma citação que talvez não exista. Os alunos aprendem que as fontes dadas pela IA têm de ser encontradas e verificadas, não aceites só por confiança.",
            "Esta rotina funciona em todas as disciplinas e cria o hábito que quer para a vida: o que a IA produz é uma hipótese a testar, não uma resposta para copiar."
          ],
          steps: ["Afirmação: diga exatamente o que a IA diz.", "Evidência: o que mostraria que é verdade?", "Teste: dados, cálculo, experiência ou fonte de confiança.", "Conclusão: aceitar, rejeitar ou evidência insuficiente."],
          words: [["Afirmação", "uma frase que diz que uma coisa é verdade."], ["Hipótese", "uma ideia que pode ser testada."], ["Citação", "uma referência a uma fonte de informação."]],
          slides: [
            { title: "Rotina de quatro passos", bullets: ["Afirmação", "Evidência", "Teste", "Conclusão"] },
            { title: "Afirmações para praticar", bullets: ["Conversões de unidades e estatísticas", "Causa e efeito", "Citações que talvez não existam"] },
            { title: "O hábito para a vida", bullets: ["O que a IA produz é uma hipótese", "Teste-o, não o copie"] }
          ],
          tryIt: "Recolha três afirmações de STEM de uma ferramenta de IA sobre um tema que ensina. Passe cada uma pela rotina de quatro passos e anote quais se confirmaram.",
          youCanNow: "ensinar os alunos a testar afirmações da IA como cientistas.",
          quickCheck: [
            { objective: "O5", q: "Na rotina de verificação, o que vem logo a seguir a \"Afirmação\"?", options: ["Conclusão", "Teste", "Evidência", "Publicar"], answer: 2, why: "A rotina é Afirmação, Evidência, Teste, Conclusão." },
            { objective: "O5", q: "A IA dá aos alunos uma estatística com uma citação. O que devem fazer?", options: ["Copiar a citação para o seu relatório", "Perguntar à IA se a citação é verdadeira", "Ignorar a estatística", "Encontrar a fonte e verificar que existe e que diz isso"], answer: 3, why: "As fontes dadas pela IA têm de ser encontradas e verificadas, não aceites só por confiança." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Design de engenharia e tarefas que mostram o raciocínio",
          minutes: 6,
          goal: "Usar a IA no processo de design de engenharia e desenhar tarefas em que o raciocínio fica visível.",
          text: [
            "No processo de design de engenharia (definir o problema, ter ideias, planear, construir, testar, melhorar), a IA é mais útil nas fases de ter ideias e de melhorar: criar muitas ideias de design, sugerir testes ou explicar porque um protótipo falhou. Os alunos continuam a escolher, construir, testar e justificar.",
            "Como a IA consegue resolver muitos problemas dos manuais, desenhe tarefas em que o raciocínio é visível: peça aos alunos que expliquem porque um método funciona, comparem dois métodos, encontrem um erro, façam uma previsão antes de calcular ou apliquem a ideia aos seus próprios dados ou ao seu design. As explicações orais e os cadernos de laboratório mostram o pensamento.",
            "Indique em cada tarefa um nível de uso de IA, para os alunos saberem quando a IA é uma ferramenta e quando a competência tem de ser mostrada sozinhos, e explique porquê."
          ],
          steps: ["Use a IA para ter ideias e melhorar no design.", "Os alunos escolhem, constroem, testam e justificam.", "Desenhe tarefas: explicar, comparar, encontrar erros, prever, aplicar.", "Use explicações orais e cadernos de laboratório.", "Indique o nível de uso de IA de cada tarefa."],
          words: [["Processo de design de engenharia", "o ciclo de definir um problema, desenhar, construir, testar e melhorar."], ["Protótipo", "um primeiro modelo construído para testar uma ideia."], ["Caderno de laboratório", "um registo do que o aluno fez, observou e concluiu."]],
          slides: [
            { title: "A IA no design de engenharia", bullets: ["Ter muitas ideias", "Sugerir testes; explicar falhas", "Os alunos escolhem, constroem, testam, justificam"] },
            { title: "Manter o raciocínio visível", bullets: ["Explicar porquê, comparar métodos", "Encontrar o erro, prever primeiro", "Aplicar aos seus próprios dados ou design"] },
            { title: "Indicar o nível de uso de IA", bullets: ["Quando a IA é uma ferramenta", "Quando a competência é mostrada sozinho"] }
          ],
          tryIt: "Tarefa final: planeie a sua aula de STEM em que os alunos usam uma ferramenta de IA aprovada numa investigação ou num desafio de design, com um passo de verificação, uma tarefa de raciocínio com as palavras deles e um nível de uso de IA. Dê a aula, se puder, e anote o que os alunos descobriram quando verificaram a IA.",
          youCanNow: "orientar a aprendizagem de STEM em que os alunos usam a IA como ferramenta, a verificam com rigor e mantêm visível o seu próprio raciocínio.",
          quickCheck: [
            { objective: "O6", q: "Em que fases do processo de design de engenharia a IA é mais útil?", options: ["Ter ideias e melhorar", "Só construir e testar", "Só definir o problema", "Em nenhuma das fases"], answer: 0, why: "A IA ajuda a criar ideias e a explicar falhas; os alunos continuam a escolher, construir, testar e justificar." },
            { objective: "O6", q: "A IA consegue resolver a sua lista de problemas do manual. O que mudaria para o raciocínio ficar visível?", options: ["Passar mais problemas iguais", "Proibir as calculadoras", "Pedir aos alunos que prevejam primeiro e expliquem porque o método funciona", "Dar as respostas antes"], answer: 2, why: "Prever, explicar e comparar métodos mostram um pensamento que a IA não pode fazer por eles." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: A IA como tema de STEM",
        questions: [
          { objective: "O4", q: "Na aprendizagem automática, os dados de treino são:", options: ["A nota final", "O código do programa", "Os exemplos com rótulo com que um programa aprende", "Uma palavra-passe"], answer: 2, why: "Os padrões são aprendidos a partir de exemplos." },
          { objective: "O4", q: "Um classificador treinado só com fotos de um tipo de cão vai provavelmente:", options: ["Fazer previsões erradas com exemplos variados", "Reconhecer todos os animais na perfeição", "Recusar funcionar", "Ficar mais rápido"], answer: 0, why: "Dados de um só lado levam a más previsões." },
          { objective: "O5", q: "Qual é o passo 3 da rotina de verificação?", options: ["Afirmação", "Teste", "Evidência", "Conclusão"], answer: 1, why: "Teste a afirmação com dados ou com uma fonte de confiança." },
          { objective: "O5", q: "A IA dá uma citação para uma estatística. Os alunos devem:", options: ["Encontrar a fonte e verificar que existe e que diz isso", "Copiá-la", "Ignorá-la", "Citar a IA em vez dela"], answer: 0, why: "As citações da IA podem não existir." },
          { objective: "O6", q: "Que tarefa mantém melhor visível o raciocínio dos alunos?", options: ["Resolver em casa 20 problemas do manual", "Só ver um vídeo", "Copiar as respostas", "Prever antes de calcular e explicar porque o método funciona"], answer: 3, why: "Prever e explicar mostram o pensamento." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA no Ensino de STEM",
    questions: [
      { objective: "O1", q: "STEM quer dizer:", options: ["Estudantes, professores, editores, gestores", "Ciência, tecnologia, engenharia e matemática", "Estudar, testar, avaliar, decorar", "Software, ferramentas, e-mail, media"], answer: 1, why: "As quatro áreas." },
      { objective: "O1", q: "A IA erra sobretudo em:", options: ["Listas de cores", "Mensagens de saudação", "Problemas de matemática de vários passos", "Ortografia de palavras comuns"], answer: 2, why: "O raciocínio de vários passos causa erros." },
      { objective: "O1", q: "O Desmos é útil para:", options: ["E-mail", "Corrigir redações", "Fazer gráficos e verificar a matemática", "Marcar as presenças"], answer: 2, why: "As ferramentas de gráficos verificam as respostas de forma visual." },
      { objective: "O1", q: "Pedir à IA os erros comuns num problema dá-lhe:", options: ["Perguntas para discussão sobre conceções erradas", "A resposta final", "Uma nota", "Um atalho"], answer: 0, why: "Os erros são bons para discussão." },
      { objective: "O2", q: "O Google Colab é:", options: ["Uma aplicação de vídeo", "Um portátil pago", "Uma ferramenta para dar notas", "Um caderno de Python gratuito no navegador"], answer: 3, why: "Corre Python na internet." },
      { objective: "O2", q: "Um ficheiro CSV é:", options: ["Uma imagem", "Um ficheiro simples de tabela com os valores separados por vírgulas", "Um vídeo", "Um ficheiro de palavras-passe"], answer: 1, why: "É comum para conjuntos de dados." },
      { objective: "O2", q: "Um comentário de código explica:", options: ["Nada", "O tempo", "A nota do aluno", "O que uma linha de código faz"], answer: 3, why: "Os comentários mostram a compreensão." },
      { objective: "O2", q: "Prever um gráfico antes de correr o código ajuda os alunos a:", options: ["Correr o código mais depressa", "Saltar a aprendizagem", "Pensar no que o código deve fazer", "Evitar erros automaticamente"], answer: 2, why: "Prever constrói o raciocínio." },
      { objective: "O3", q: "As analogias da IA em ciência podem:", options: ["Enganar se deixarem de funcionar", "Nunca estar erradas", "Substituir as experiências", "Provar afirmações"], answer: 0, why: "Verifique se as analogias criam conceções erradas." },
      { objective: "O3", q: "Uma simulação deixa os alunos:", options: ["Não pensar", "Explorar como uma coisa funciona com um modelo", "Darem nota a si próprios", "Saltar a aula"], answer: 1, why: "Os modelos apoiam a exploração." },
      { objective: "O4", q: "A aprendizagem automática encontra:", options: ["Padrões em exemplos com rótulo", "Só regras escritas à mão", "Palavras-passe", "Ficheiros perdidos"], answer: 0, why: "Aprende com dados." },
      { objective: "O4", q: "Se os dados de treino não forem variados, as previsões:", options: ["Param completamente", "Estão sempre certas", "Ficam mais rápidas", "Podem estar erradas com exemplos novos"], answer: 3, why: "A qualidade dos dados decide a exatidão." },
      { objective: "O4", q: "Antes de os alunos usarem uma ferramenta como o Teachable Machine, verifique:", options: ["A sua cor", "Os seus termos e a aprovação do seu distrito", "Se é popular", "Nada"], answer: 1, why: "O uso pelos alunos precisa de aprovação e de verificar a idade." },
      { objective: "O4", q: "Uma atividade de aprendizagem automática sem aparelhos usa:", options: ["Só telefones", "Só portáteis", "Cartões e regras, sem aparelhos", "Robôs"], answer: 2, why: "As ideias podem ser ensinadas sem aparelhos." },
      { objective: "O5", q: "Na rotina de verificação, a \"conclusão\" pode ser:", options: ["Rejeitar sempre", "Aceitar sempre", "Aceitar, rejeitar ou evidência insuficiente", "Saltar"], answer: 2, why: "A evidência decide." },
      { objective: "O5", q: "O que a IA produz deve ser tratado como:", options: ["Uma hipótese a testar", "Uma resposta final", "Uma lei", "Uma nota"], answer: 0, why: "Teste antes de confiar." },
      { objective: "O6", q: "No design de engenharia, a IA é mais útil para:", options: ["Dar notas aos designs", "Construir o protótipo pelos alunos", "Testar ela própria os materiais físicos", "Ter ideias e melhorar"], answer: 3, why: "Os alunos continuam a construir, testar e justificar." },
      { objective: "O6", q: "Um protótipo é:", options: ["Um produto final", "Um primeiro modelo para testar uma ideia", "Uma nota de teste", "Uma licença de software"], answer: 1, why: "Os protótipos são testados e melhorados." },
      { objective: "O6", q: "Um caderno de laboratório mostra:", options: ["As presenças", "Só a resposta final", "O plano do professor", "O que o aluno fez, observou e concluiu"], answer: 3, why: "Torna o pensamento visível." },
      { objective: "O6", q: "Cada tarefa de STEM deve indicar:", options: ["Uma palavra-passe", "Um preço", "Um nível de uso de IA", "Nada"], answer: 2, why: "Os alunos precisam de saber quando a IA é permitida." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      7,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "A IA como ferramenta numa investigação",
        objective: "O2",
        notYet: "A IA faz a investigação pelos alunos, ou a ferramenta não está aprovada.",
        meets: "Os alunos usam uma ferramenta de IA aprovada numa parte clara, como escrever código ou ter ideias de design.",
        exceeds: "Os alunos também preveem o que o resultado da IA deve mostrar antes de o correrem."
      },
      {
        name: "Passo de verificação",
        objective: "O5",
        notYet: "Não há nenhum passo em que os alunos verificam o que a IA produziu.",
        meets: "Os alunos verificam o código, os números ou as afirmações da IA com dados, um cálculo ou um teste.",
        exceeds: "Os alunos registam uma conclusão: aceitar, rejeitar ou evidência insuficiente, com uma razão."
      },
      {
        name: "Raciocínio com as suas palavras",
        objective: "O6",
        notYet: "Os alunos só entregam uma resposta ou um gráfico.",
        meets: "Uma tarefa em que os alunos explicam o seu raciocínio com as suas próprias palavras.",
        exceeds: "Os alunos também comparam dois métodos ou encontram um erro."
      },
      {
        name: "Nível de uso de IA",
        objective: "O6",
        notYet: "Não é dado nenhum nível de uso de IA.",
        meets: "A tarefa indica um nível de uso de IA.",
        exceeds: "O plano explica aos alunos porque esse nível serve para a tarefa."
      },
      {
        name: "O professor verificou os materiais",
        objective: "O1",
        notYet: "Os problemas, o código ou as explicações feitos pela IA não foram verificados.",
        meets: "Todas as soluções e explicações feitas pela IA foram verificadas antes da aula.",
        exceeds: "O plano indica o método usado para verificar, como uma calculadora, o Desmos ou uma fonte de confiança."
      }
    ]
  },
  evaluation: {
    results: [
      "Professores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Professores que dão uma aula de STEM com um passo de verificação da IA em 30 dias (inquérito de seguimento)",
      "Alunos que sabem dizer um erro da IA que encontraram e como o verificaram",
      "Professores que fazem outro curso da Koach Learn sobre IA para educadores"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com um assistente de IA que o seu distrito permite",
      "Ferramentas gratuitas como o Desmos, as simulações PhET, o Google Colab ou o Teachable Machine, quando o seu distrito as aprova",
      "Uma aula de STEM ou um desafio de design que vai dar em breve",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça-o como uma sessão de departamento: façam o teste inicial juntos e depois cada professor planeia uma aula para a sua turma.",
      "Veja a aprovação do distrito e as regras sobre contas de alunos antes de alguém experimentar o Colab ou o Teachable Machine com alunos.",
      "Peça a pares que troquem uma lista de problemas feita pela IA e verifiquem as soluções um do outro com um segundo método.",
      "Use a atividade com cartões sem aparelhos quando os aparelhos ou as aprovações não estiverem prontos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
