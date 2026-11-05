"use strict";

// Koach Learn course (Portuguese translation of shared/ai-in-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-in-business-pt",
  lang: "pt",
  translationOf: "ai-in-business",
  category: "Small Business",
  name: "IA nos Negócios: Estratégias e Aplicações",
  skills: "Encontrar oportunidades para a IA, Ligar tarefas a ferramentas de IA, Avaliar valor e risco, Escrever uma justificação de uma página, Fazer um pequeno piloto, Medir resultados",
  outcome: "encontrar o melhor lugar para usar IA numa empresa ou organização, avaliá-lo em valor e risco, escrever uma justificação de negócio de uma página, e fazer e medir um pequeno piloto de duas semanas.",
  about: [
    "A IA já faz parte do dia a dia dos negócios: escrita, atendimento ao cliente, horários, vendas, contabilidade e planeamento. A parte difícil não é a ferramenta. É escolher o trabalho certo para ela e provar que ajuda.",
    "Este curso é para donos de pequenas empresas, líderes de organizações sem fins lucrativos, gestores, jovens empreendedores e qualquer pessoa que queira trazer a IA para o seu local de trabalho de forma inteligente e segura. Os exemplos incluem um salão de cabeleireiro, um banco alimentar, uma equipa de jardinagem e uma loja gerida por estudantes.",
    "Você vai mapear para onde vai o tempo numa organização, escolher a melhor oportunidade para a IA, justificar essa escolha e testá-la com um pequeno piloto. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Para uma organização real ou de prática, escreva uma justificação de negócio de IA de uma página: a tarefa, a ferramenta de IA, o tempo ou o dinheiro que espera poupar, os riscos e como os vai controlar, e como será o sucesso. Depois faça um piloto de duas semanas (ou uma versão de prática de um dia), registe os números de antes e de depois, e escreva uma recomendação de três frases: alargar, mudar ou parar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos, gestores e funcionários de pequenas empresas, e líderes de organizações sem fins lucrativos e comunitárias que querem usar a IA para poupar tempo ou servir melhor os clientes.",
    startingPoint: "Conhecem bem a sua empresa ou organização e talvez já tenham experimentado um assistente de IA. Poucos mediram para onde vai o tempo dos funcionários, pesaram os riscos da IA ou testaram uma ferramenta nova de forma planeada.",
    gap: "Muitos donos evitam a IA ou experimentam-na ao acaso e desistem. Os alunos precisam de uma forma simples e repetível de escolher a tarefa certa, pesar o valor e o risco, ganhar apoio com uma justificação curta e provar os resultados com um pequeno piloto, para que a IA poupe tempo de verdade sem pôr em risco os dados ou a confiança dos clientes.",
    constraints: [
      "Nível de leitura: palavras simples de negócio; não é preciso formação técnica",
      "Aparelhos: um telefone ou computador; uma folha de cálculo ajuda no levantamento do tempo",
      "Tempo: lições de 5 minutos, mais um piloto de duas semanas ou uma versão de prática de um dia",
      "Privacidade: nenhum dado privado de clientes, funcionários ou doadores, palavras-passe ou números de banco nas ferramentas de IA",
      "Nenhuma decisão legal, médica ou fiscal entregue à IA; uma pessoa verifica e decide"
    ],
    prerequisites: "Nenhum. Quem nunca usou assistentes de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas de negócio", action: "identificar quais as ferramentas de IA de hoje fazem bem e quais precisam de uma pessoa para verificar ou decidir", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Para uma organização real ou de prática", action: "fazer a lista das tarefas repetidas numa semana normal e calcular as horas que cada uma leva", standard: "com as cinco tarefas com mais horas assinaladas com um círculo" },
    { id: "O3", condition: "Com as suas melhores candidatas para a IA", action: "avaliar cada uma em valor, esforço e risco e escolher uma para começar", standard: "anotando os dados privados envolvidos" },
    { id: "O4", condition: "Para a tarefa que escolheu", action: "escrever uma justificação de negócio de IA de uma página", standard: "com as seis partes e números reais do seu levantamento do tempo" },
    { id: "O5", condition: "Para um pequeno piloto de IA", action: "planear e fazer o piloto com uma linha de base, regras claras e um registo diário", standard: "registando os mesmos números antes e depois" },
    { id: "O6", condition: "Com os seus números da linha de base e do piloto", action: "comparar os resultados e recomendar alargar, mudar ou parar", standard: "contando o tempo gasto a corrigir erros da IA, em três frases" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar a oportunidade certa para a IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que a IA faz bem nos negócios hoje",
          minutes: 5,
          goal: "Dizer que tipos de trabalho de negócio as ferramentas de IA de hoje fazem bem e mal.",
          text: [
            "A maior parte da IA nos negócios hoje é IA generativa: ferramentas como o ChatGPT, o Microsoft Copilot e o Google Gemini, que escrevem, resumem, organizam e respondem com palavras simples. Outra IA vem dentro de programas que talvez já use, como os filtros do email, as previsões de vendas e os alertas de fraude.",
            "A IA é forte em primeiros rascunhos (emails, publicações, propostas), resumos (reuniões, documentos longos, avaliações de clientes), organizar e etiquetar (perguntas de clientes, recibos), ter ideias e responder a perguntas comuns a partir das suas próprias informações.",
            "A IA é fraca em dados exatos que ninguém lhe deu, decisões finais sobre pessoas ou dinheiro, tudo o que precisa de uma licença (conselhos legais, médicos ou fiscais) e situações em que um erro custa caro e é difícil de apanhar. Nesses casos, uma pessoa tem de verificar ou decidir."
          ],
          words: [["IA generativa", "IA que cria texto, imagens ou outros conteúdos a partir de um pedido."], ["Caso de uso", "um trabalho concreto para o qual se usa uma ferramenta."]],
          slides: [
            { title: "A IA é forte em", bullets: ["Primeiros rascunhos e resumos", "Organizar e etiquetar", "Ter ideias e responder a perguntas comuns"] },
            { title: "A IA é fraca em", bullets: ["Dados exatos que ninguém lhe deu", "Decisões finais sobre pessoas ou dinheiro", "Conselhos com licença: legais, médicos, fiscais"] },
            { title: "Regra prática", bullets: ["A IA faz o rascunho; as pessoas decidem", "Quanto mais caro o erro, mais verificação"] }
          ],
          tryIt: "Faça a lista de cinco tarefas de uma empresa ou organização que conhece. Marque cada uma como \"IA forte\", \"IA com verificação\" ou \"fica para as pessoas\", com uma razão.",
          youCanNow: "dizer que tarefas de negócio a IA faz bem e quais precisam de uma pessoa.",
          quickCheck: [
            { objective: "O1", q: "Em que tarefa a IA de hoje é fraca?", options: ["Resumir uma reunião longa", "Fazer o rascunho de uma publicação nas redes sociais", "Dar o conselho fiscal final para a sua empresa", "Organizar as perguntas dos clientes por tema"], answer: 2, why: "Tudo o que precisa de uma licença, como conselhos fiscais, precisa de uma pessoa ou de um profissional." },
            { objective: "O1", q: "A sua loja recebe centenas de avaliações na internet. Como pode a IA ajudar primeiro?", options: ["Resumi-las para encontrar as queixas mais comuns", "Responder a clientes zangados sem ninguém verificar", "Decidir que funcionários despedir com base nas avaliações", "Apagar as avaliações más"], answer: 0, why: "Resumir muitas avaliações é um ponto forte da IA, e uma pessoa continua a decidir o que fazer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mapear para onde vai o tempo",
          minutes: 5,
          goal: "Mapear as tarefas repetidas de uma organização e encontrar as melhores candidatas para a IA.",
          text: [
            "As melhores oportunidades para a IA escondem-se no trabalho repetido que leva muito tempo. Percorra uma semana normal e faça a lista das tarefas por departamento ou função: vendas, atendimento ao cliente, marketing, administração, finanças, operações.",
            "Para cada tarefa, calcule mais ou menos quantas vezes acontece e quanto tempo leva. Uma tarefa feita 20 vezes por semana durante 10 minutos são mais de três horas por semana. É aí que a IA compensa.",
            "Procure padrões: responder às mesmas perguntas, escrever emails parecidos, copiar informações de um lugar para outro, resumir notas, fazer horários. Estas são candidatas clássicas para a IA ou para a automatização."
          ],
          steps: ["Faça a lista das tarefas feitas numa semana normal, por função.", "Calcule mais ou menos quantas vezes e quanto tempo para cada uma.", "Multiplique para ter as horas por semana.", "Faça um círculo nas cinco com mais horas.", "Marque quais delas combinam com os pontos fortes da IA."],
          words: [["Tarefa repetitiva", "trabalho feito da mesma maneira vezes sem conta."], ["Levantamento do tempo", "uma lista de tarefas e do tempo que cada uma leva."]],
          slides: [
            { title: "Procure trabalho repetido", bullets: ["Mesmas perguntas, emails parecidos", "Copiar informações de um lugar para outro", "Resumos e horários"] },
            { title: "Faça as contas", bullets: ["Quantas vezes x quanto tempo = horas por semana", "20 vezes x 10 minutos = mais de 3 horas"] },
            { title: "Escolha as candidatas", bullets: ["As cinco com mais horas", "Ligue-as aos pontos fortes da IA"] }
          ],
          tryIt: "Faça um levantamento do tempo para uma função numa organização real ou de prática. Faça a lista de pelo menos oito tarefas com as horas por semana e faça um círculo nas três melhores candidatas para a IA.",
          youCanNow: "mapear o trabalho repetido de uma organização e encontrar as melhores candidatas para a IA.",
          quickCheck: [
            { objective: "O2", q: "Uma tarefa acontece 12 vezes por semana e leva 15 minutos de cada vez. Quantas horas por semana são?", options: ["1 hora", "2 horas", "12 horas", "3 horas"], answer: 3, why: "12 vezes 15 minutos são 180 minutos, ou seja, 3 horas." },
            { objective: "O2", q: "Está a mapear o tempo numa organização sem fins lucrativos. Que tarefa olha primeiro para a IA?", options: ["Uma votação da direção uma vez por ano", "Escrever o mesmo email de agradecimento aos doadores todas as semanas", "Escolher o novo diretor executivo", "Assinar contratos"], answer: 1, why: "As tarefas de escrita repetidas e parecidas são onde a IA mais compensa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Avaliar oportunidades em valor e risco",
          minutes: 5,
          goal: "Avaliar ideias de IA em valor, esforço e risco e escolher uma para começar.",
          text: [
            "Nem todas as ideias de IA valem a pena para começar. Dê a cada candidata uma nota de 1 a 5 em três coisas. Valor: quanto tempo, dinheiro ou satisfação dos clientes traz. Esforço: quão difícil é de preparar e de aprender. Risco: o que acontece se a IA errar, e se há dados privados envolvidos.",
            "Escolha uma vitória rápida: valor alto, esforço baixo, risco baixo. Fazer rascunhos de respostas a emails comuns de clientes, com uma pessoa a revê-los, é uma vitória rápida clássica. Usar a IA para decidir quem é contratado ou quem recebe ajuda é de risco alto e não é um primeiro projeto.",
            "Verifique os dados e a privacidade cedo. Se a tarefa usa informações de clientes, funcionários, doadores ou de saúde, descubra o que a sua ferramenta de IA faz com os dados e se é preciso uma versão empresarial com mais privacidade."
          ],
          steps: ["Faça a lista das suas três melhores candidatas.", "Dê a cada uma uma nota de 1 a 5 em valor, esforço e risco.", "Prefira valor alto, esforço baixo, risco baixo.", "Anote os dados privados envolvidos.", "Escolha uma para começar."],
          words: [["Vitória rápida", "um projeto que dá valor claro depressa, com pouco esforço e pouco risco."], ["Risco", "a probabilidade e o custo de alguma coisa correr mal."]],
          slides: [
            { title: "Nota de 1 a 5", bullets: ["Valor: tempo, dinheiro, satisfação dos clientes", "Esforço: preparar e aprender", "Risco: custo dos erros, dados privados"] },
            { title: "Comece com uma vitória rápida", bullets: ["Valor alto, esforço baixo, risco baixo", "Exemplo: a IA faz rascunhos de respostas, uma pessoa revê"] },
            { title: "Não é um primeiro projeto", bullets: ["Decisões de contratação ou de aprovação", "Tudo o que envolve decisões de saúde ou de dinheiro"] }
          ],
          tryIt: "Dê notas de valor, esforço e risco às suas três melhores candidatas numa pequena tabela. Escolha uma vitória rápida e escreva duas frases sobre porquê.",
          youCanNow: "avaliar ideias de IA em valor, esforço e risco e escolher um primeiro projeto inteligente.",
          quickCheck: [
            { objective: "O3", q: "Quando avalia uma ideia de IA, o que quer dizer \"esforço\"?", options: ["Quão difícil é de preparar e de aprender", "Quanto dinheiro dá", "Quantos clientes gostam dela", "Quão privados são os dados"], answer: 0, why: "O esforço é quão difícil a ideia é de preparar e de aprender." },
            { objective: "O3", q: "Duas ideias têm o mesmo valor. Uma usa registos de saúde e a outra usa dados públicos dos produtos. Qual escolhe primeiro?", options: ["A dos registos de saúde, porque é mais difícil", "Nenhuma; a IA nunca é segura", "A dos dados dos produtos, porque tem menos risco", "As duas ao mesmo tempo"], answer: 2, why: "Com o mesmo valor, escolha a ideia de menor risco, que não envolve dados privados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar a oportunidade certa para a IA",
        questions: [
          { objective: "O1", q: "Em que tarefa a IA generativa de hoje é mais forte?", options: ["Decidir quem contratar", "Dar conselhos fiscais", "Fazer o rascunho de uma resposta a um email comum de um cliente", "Assinar contratos"], answer: 2, why: "Os primeiros rascunhos são um ponto forte principal; as decisões e os conselhos com licença precisam de pessoas." },
          { objective: "O2", q: "Uma tarefa acontece 30 vezes por semana e leva 6 minutos. Quantas horas por semana são?", options: ["3 horas", "30 horas", "6 horas", "Meia hora"], answer: 0, why: "30 x 6 minutos = 180 minutos = 3 horas." },
          { objective: "O3", q: "O que é uma vitória rápida?", options: ["Risco alto, esforço alto", "Qualquer projeto com IA no nome", "A ferramenta mais cara", "Valor alto, esforço baixo, risco baixo"], answer: 3, why: "As vitórias rápidas provam o valor depressa, com pouco risco." },
          { objective: "O3", q: "Porque é que usar a IA para aprovar ou rejeitar candidatos a emprego é um mau primeiro projeto?", options: ["É fácil demais", "É de risco alto: os erros prejudicam pessoas e podem ser injustos", "A IA não sabe ler", "Não poupa tempo"], answer: 1, why: "As decisões sobre pessoas são de risco alto e precisam de um controlo humano cuidadoso." },
          { objective: "O3", q: "Uma tarefa usa dados de doadores ou de clientes. O que deve verificar cedo?", options: ["As cores da ferramenta", "O que a ferramenta de IA faz com esses dados", "Nada", "Quantos emojis ela usa"], answer: 1, why: "A privacidade tem de ser verificada antes de pôr dados privados numa ferramenta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Justificar e provar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever uma justificação de negócio de IA de uma página",
          minutes: 5,
          goal: "Escrever uma justificação de negócio de uma página a que um chefe, uma direção ou um parceiro possa dizer sim.",
          text: [
            "Uma justificação de negócio explica porque um projeto vale a pena. Mantenha-a numa página para que as pessoas ocupadas a leiam.",
            "Inclua seis partes: o problema (em horas ou dólares), a solução de IA proposta e a ferramenta, o benefício esperado, o custo (assinaturas, tempo de formação), os riscos e como os vai controlar, e como vai medir o sucesso.",
            "Use números reais do seu levantamento do tempo. \"Os funcionários passam 4 horas por semana a responder às mesmas 10 perguntas. Uma biblioteca de respostas feitas pela IA, verificadas pelos funcionários, pode baixar isso para 1,5 horas, poupando cerca de 10 horas por mês.\" A IA pode ajudar a fazer o rascunho da página; os dados vêm de você."
          ],
          steps: ["Problema: quanto custa agora em tempo ou dinheiro.", "Solução: a ferramenta de IA e como vai ser usada.", "Benefício: a poupança ou a melhoria esperada.", "Custo: dinheiro e tempo de formação.", "Riscos e controlos: quem verifica o trabalho da IA.", "Medida de sucesso: o número que vai acompanhar."],
          words: [["Justificação de negócio", "um documento curto que explica porque um projeto vale a pena (em inglês, \"business case\")."], ["Controlo", "um passo que reduz o risco, como uma pessoa a rever o que a IA produziu."]],
          slides: [
            { title: "Mantenha numa página", bullets: ["As pessoas ocupadas leem documentos curtos", "Use números reais"] },
            { title: "Seis partes", bullets: ["Problema, solução, benefício", "Custo, riscos e controlos", "Medida de sucesso"] },
            { title: "A IA faz o rascunho, os dados vêm de você", bullets: ["Cole os números do seu levantamento", "Verifique cada número no rascunho"] }
          ],
          tryIt: "Escreva uma justificação de negócio de uma página para a vitória rápida que escolheu, com as seis partes. Pode pedir à IA para arrumar as palavras, mas verifique cada número.",
          youCanNow: "escrever uma justificação de negócio curta, baseada em números, para um projeto de IA.",
          quickCheck: [
            { objective: "O4", q: "Que parte de uma justificação de negócio diz quem verifica o trabalho da IA?", options: ["O problema", "Riscos e controlos", "O benefício", "O custo"], answer: 1, why: "Os riscos e controlos dizem o que pode correr mal e quem verifica o que a IA produz." },
            { objective: "O4", q: "O seu chefe pergunta porque o projeto de IA vale a pena. O que torna a sua justificação mais forte?", options: ["Um relatório longo sem números", "Dizer que a IA é o futuro", "Uma lista de todas as ferramentas de IA que encontrou", "Números reais do seu levantamento do tempo que mostram as horas poupadas"], answer: 3, why: "Números reais do seu próprio levantamento do tempo mostram claramente o benefício esperado." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um pequeno piloto",
          minutes: 5,
          goal: "Planear e fazer um piloto de IA de duas semanas com regras claras e uma medida de antes e depois.",
          text: [
            "Um piloto é um teste pequeno e com tempo limitado. Deixa você aprender gastando pouco antes de gastar mais. Duas semanas com uma ou duas pessoas muitas vezes chegam.",
            "Meça antes de começar. Acompanhe os números atuais durante alguns dias: tempo gasto, número de tarefas, erros ou queixas de clientes. Depois faça o piloto e acompanhe os mesmos números.",
            "Defina regras claras: que tarefas usam IA, quem verifica o resultado, que informações nunca podem entrar na ferramenta (dados privados de clientes, funcionários ou doadores, palavras-passe, números de banco) e o que fazer se a IA errar."
          ],
          steps: ["Escolha uma ou duas pessoas e um período de duas semanas.", "Registe os números da linha de base durante alguns dias.", "Escreva regras simples: tarefas, quem verifica, o que nunca entra.", "Faça o piloto e mantenha um registo diário curto.", "Registe os mesmos números no fim."],
          words: [["Piloto", "um teste pequeno e com tempo limitado de uma ideia nova."], ["Linha de base", "os números antes de uma mudança, usados para comparar depois."]],
          slides: [
            { title: "Pequeno e com tempo limitado", bullets: ["Duas semanas, uma ou duas pessoas", "Aprender gastando pouco antes de gastar mais"] },
            { title: "Meça antes e depois", bullets: ["Tempo gasto, tarefas feitas", "Erros ou queixas"] },
            { title: "Regras do piloto", bullets: ["Que tarefas usam IA e quem verifica", "Nenhum dado privado na ferramenta", "O que fazer quando a IA erra"] }
          ],
          tryIt: "Escreva um plano de piloto para a sua vitória rápida: pessoas, datas, números da linha de base, regras e o formato do registo diário. Se puder, faça uma versão de prática de um dia e registe os números.",
          youCanNow: "planear e fazer um pequeno piloto de IA com regras e números de antes e depois.",
          quickCheck: [
            { objective: "O5", q: "Quanto tempo dura um pequeno piloto de IA típico neste curso?", options: ["Um ano", "Seis meses", "Duas semanas", "Uma hora"], answer: 2, why: "Duas semanas com uma ou duas pessoas muitas vezes chegam para aprender gastando pouco." },
            { objective: "O5", q: "Vai começar um piloto amanhã. O que tem de fazer primeiro?", options: ["Registar os números da linha de base durante alguns dias", "Comprar o plano mais caro", "Dar à ferramenta os dados de todos os clientes", "Dizer aos funcionários para deixarem de verificar o que a IA produz"], answer: 0, why: "Uma linha de base deixa você comparar o antes e o depois." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir os resultados e decidir o passo seguinte",
          minutes: 5,
          goal: "Comparar os resultados do piloto com a linha de base e recomendar alargar, mudar ou parar.",
          text: [
            "No fim do piloto, compare. O tempo baixou? A qualidade manteve-se ou melhorou? Os clientes ou os funcionários notaram? Os números contam, mas pergunte também às pessoas que a usaram o que ajudou e o que atrapalhou.",
            "Atenção aos custos escondidos: tempo gasto a corrigir erros da IA, confusão dos funcionários ou clientes que não gostaram da mudança. Uma ferramenta que poupa 3 horas mas causa 2 horas de correções só poupa 1.",
            "Faça uma recomendação clara. Alargue se funcionou. Mude se funcionou em parte. Pare se não funcionou, e diga o que aprendeu. Parar um piloto não é um fracasso; poupou você de um erro maior."
          ],
          steps: ["Ponha os números da linha de base e do piloto lado a lado.", "Tire o tempo gasto a corrigir erros da IA.", "Faça duas perguntas às pessoas que a usaram: o que ajudou, o que atrapalhou.", "Recomende alargar, mudar ou parar, em três frases."],
          words: [["Custo escondido", "um custo fácil de esquecer, como o tempo gasto a corrigir erros."], ["Recomendação", "o seu conselho sobre o que fazer a seguir, com razões."]],
          slides: [
            { title: "Compare com honestidade", bullets: ["Tempo, qualidade, reação dos clientes", "Pergunte às pessoas que a usaram"] },
            { title: "Conte os custos escondidos", bullets: ["Tempo a corrigir erros da IA", "Confusão ou clientes descontentes"] },
            { title: "Decida", bullets: ["Alargar, mudar ou parar", "Parar um piloto é uma lição, não um fracasso"] }
          ],
          tryIt: "Tarefa final: ponha os seus números de antes e depois numa tabela (reais ou do seu dia de prática), tire os custos escondidos e escreva uma recomendação de três frases para juntar à sua justificação de negócio de uma página.",
          youCanNow: "encontrar, justificar, testar e avaliar um projeto de IA numa empresa ou organização.",
          quickCheck: [
            { objective: "O6", q: "Porque perguntar às pessoas que usaram a ferramenta de IA o que atrapalhou?", options: ["Para as culpar", "Porque os números nunca são úteis", "Para fazer o piloto durar mais", "Para encontrar problemas que os números podem não mostrar"], answer: 3, why: "Quem usou a ferramenta consegue apontar custos escondidos e problemas que os números não mostram." },
            { objective: "O6", q: "O piloto poupou tempo, mas os clientes queixaram-se das novas respostas. O que recomenda?", options: ["Alargá-lo já a todos", "Mudá-lo, por exemplo juntando um passo de revisão por um funcionário, e testar outra vez", "Esconder as queixas", "Deixar de medir"], answer: 1, why: "Se funcionou em parte, mude e teste outra vez." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Justificar e provar",
        questions: [
          { objective: "O4", q: "O que faz parte de uma justificação de negócio de IA?", options: ["As palavras-passe dos funcionários", "Uma lista de todas as ferramentas de IA que já existiram", "Os números de telefone dos clientes", "Os riscos e quem verifica o trabalho da IA"], answer: 3, why: "Os riscos e controlos são uma das seis partes." },
          { objective: "O5", q: "O que é uma linha de base?", options: ["Os números antes de uma mudança, usados para comparar", "Só um termo do desporto", "O preço da IA", "O relatório final"], answer: 0, why: "Você compara os resultados do piloto com a linha de base." },
          { objective: "O5", q: "Qual é uma boa regra de piloto?", options: ["Deixar a IA enviar tudo sem verificação", "Não medir", "Nunca pôr dados privados de clientes na ferramenta de IA", "Fazê-lo primeiro durante três anos"], answer: 2, why: "Manter os dados privados de fora é uma regra principal." },
          { objective: "O6", q: "A IA poupou 3 horas, mas os funcionários passaram 2 horas a corrigir os erros dela. Qual é a poupança real?", options: ["5 horas", "3 horas", "Nada conta", "1 hora"], answer: 3, why: "Os custos escondidos saem da poupança." },
          { objective: "O6", q: "O piloto não poupou tempo. O que deve recomendar?", options: ["Alargá-lo a toda a empresa", "Esconder os resultados", "Pará-lo ou mudá-lo, e registar o que aprendeu", "Comprar um plano mais caro sem testar"], answer: 2, why: "Resultados honestos guiam o passo seguinte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA nos Negócios: Estratégias e Aplicações",
    questions: [
      { objective: "O1", q: "A IA generativa é uma IA que:", options: ["Só faz contas", "Cria texto, imagens ou outros conteúdos a partir de um pedido", "Substitui todos os trabalhadores", "Só funciona sem internet"], answer: 1, why: "Ela gera conteúdos a partir de um pedido." },
      { objective: "O1", q: "Qual é um bom uso da IA numa pequena empresa?", options: ["Resumir as avaliações dos clientes para encontrar as queixas mais comuns", "Decidir sozinha o salário dos funcionários", "Dar conselhos legais aos clientes", "Assinar cheques"], answer: 0, why: "Resumir é um ponto forte principal da IA." },
      { objective: "O1", q: "Quem deve tomar as decisões finais sobre pessoas ou dinheiro?", options: ["A IA", "Ninguém", "Uma pessoa", "O fornecedor do programa"], answer: 2, why: "A IA faz o rascunho; as pessoas decidem." },
      { objective: "O2", q: "Um levantamento do tempo é uma lista de:", options: ["Tarefas e do tempo que cada uma leva", "Aniversários dos funcionários", "Só preços de programas", "Seguidores nas redes sociais"], answer: 0, why: "Mostra para onde vai o tempo." },
      { objective: "O2", q: "Que tarefa é uma candidata clássica para a IA?", options: ["Uma inspeção única a um edifício", "Um aperto de mão com um cliente novo", "Assinar um contrato de arrendamento", "Escrever emails parecidos vezes sem conta"], answer: 3, why: "As tarefas de escrita repetidas são boas para a IA." },
      { objective: "O2", q: "15 tarefas por semana de 20 minutos cada são:", options: ["5 horas", "15 horas", "20 horas", "35 minutos"], answer: 0, why: "15 x 20 = 300 minutos = 5 horas." },
      { objective: "O3", q: "Quando avalia uma ideia de IA, \"risco\" quer dizer:", options: ["O preço da ferramenta", "A probabilidade e o custo de alguma coisa correr mal", "Quão divertida é", "Quantas pessoas gostam dela"], answer: 1, why: "O risco tem a ver com os erros e o seu custo." },
      { objective: "O3", q: "Qual é o melhor primeiro projeto de IA?", options: ["A IA decide quem recebe serviços", "A IA escolhe que funcionários despedir", "A IA dá conselhos médicos", "A IA faz rascunhos de respostas a emails comuns, uma pessoa revê"], answer: 3, why: "Tem valor alto, esforço baixo e risco baixo." },
      { objective: "O3", q: "Porque verificar o que uma ferramenta de IA faz com os dados?", options: ["Os dados privados de clientes ou doadores têm de ser protegidos", "Muda o tipo de letra", "Não é importante", "Só para grandes empresas"], answer: 0, why: "A privacidade conta em todas as organizações." },
      { objective: "O4", q: "Uma justificação de negócio deve ser:", options: ["Com cinquenta páginas", "Escrita sem números", "Curta, cerca de uma página, com números reais", "Secreta para quem decide"], answer: 2, why: "As pessoas ocupadas leem documentos curtos e claros." },
      { objective: "O4", q: "O que é um \"controlo\"?", options: ["Comprar mais ferramentas de IA", "Desligar o computador", "Ignorar os erros", "Uma pessoa a rever o que a IA produziu antes de ser enviado"], answer: 3, why: "Os controlos reduzem o risco." },
      { objective: "O4", q: "A IA faz o rascunho da sua justificação de negócio. O seu trabalho é:", options: ["Enviá-la sem ler", "Tirar todos os números", "Verificar cada número e cada dado", "Juntar poupanças falsas"], answer: 2, why: "Os dados vêm de você, e você verifica-os." },
      { objective: "O5", q: "Um piloto é:", options: ["Pôr a ferramenta em toda a empresa", "Um teste pequeno e com tempo limitado", "Um tipo de modelo de IA", "Um contrato permanente"], answer: 1, why: "Os pilotos deixam você aprender gastando pouco." },
      { objective: "O5", q: "Quando deve registar os números da linha de base?", options: ["Antes de o piloto começar", "Só depois de acabar", "Nunca", "Um ano depois"], answer: 0, why: "Precisa dos números de antes para comparar." },
      { objective: "O5", q: "O que NUNCA deve entrar numa ferramenta de IA durante um piloto?", options: ["Uma pergunta de exemplo", "Um rascunho de email geral", "Números de banco e palavras-passe dos clientes", "O horário da sua empresa"], answer: 2, why: "Os dados privados e financeiros ficam de fora." },
      { objective: "O5", q: "Um registo diário durante um piloto ajuda você a:", options: ["Lembrar o que funcionou e o que correu mal", "Esconder problemas", "Evitar medir", "Saltar a revisão"], answer: 0, why: "As notas tornam a revisão final mais exata." },
      { objective: "O6", q: "Qual é um custo escondido?", options: ["O preço anunciado da ferramenta", "A data de início do piloto", "O número de utilizadores", "O tempo gasto a corrigir erros da IA"], answer: 3, why: "É fácil esquecer o tempo de corrigir erros." },
      { objective: "O6", q: "Além dos números, o que deve recolher no fim de um piloto?", options: ["As palavras-passe deles", "O que os utilizadores dizem que ajudou ou atrapalhou", "As moradas de casa deles", "Nada"], answer: 1, why: "A opinião dos utilizadores explica os números." },
      { objective: "O6", q: "Um piloto funcionou em parte. Uma recomendação sensata é:", options: ["Alargá-lo a todo o lado de uma vez", "Mudá-lo e testar outra vez", "Escondê-lo", "Nunca mais experimentar IA"], answer: 1, why: "Sucesso em parte quer dizer ajustar e testar outra vez." },
      { objective: "O6", q: "Parar um piloto que não funcionou é:", options: ["Sempre um fracasso", "Contra a lei", "Impossível", "Uma lição útil que evitou um erro maior"], answer: 3, why: "Os pilotos existem para descobrir as coisas gastando pouco." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 2, 4, 5, 7, 10, 12, 14, 16, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Tarefa e ferramenta", objective: "O3", notYet: "A tarefa é de risco alto, como decisões de contratação, ou não diz o nome de nenhuma ferramenta.", meets: "Uma tarefa repetida e de menor risco e uma ferramenta de IA com nome, com os dados privados anotados.", exceeds: "Mostra as notas de valor, esforço e risco que levaram a esta escolha." },
      { name: "Justificação de negócio", objective: "O4", notYet: "Faltam partes, ou não tem números.", meets: "Uma página com o problema, a solução, o benefício, o custo, os riscos e controlos, e uma medida de sucesso.", exceeds: "Cada número vem do levantamento do tempo e é fácil de verificar." },
      { name: "Cálculo do tempo poupado", objective: "O2", notYet: "A poupança é um palpite sem levantamento do tempo.", meets: "A poupança baseia-se em quantas vezes a tarefa acontece e quanto tempo leva.", exceeds: "Também calcula o tempo preciso para verificar o trabalho da IA." },
      { name: "Piloto e linha de base", objective: "O5", notYet: "Não há linha de base, ou o piloto não teve regras.", meets: "Números da linha de base e do fim registados, com regras sobre as tarefas, quem verifica e o que nunca entra.", exceeds: "Um registo diário mostra o que funcionou e o que correu mal." },
      { name: "Recomendação", objective: "O6", notYet: "Não há recomendação clara, ou ela ignora os números.", meets: "Três frases a recomendar alargar, mudar ou parar, com base nos números de antes e depois.", exceeds: "Tira o tempo gasto a corrigir erros da IA e inclui o que os utilizadores disseram." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações que fazem um piloto em 30 dias (inquérito de seguimento)",
      "Horas por semana poupadas na tarefa do piloto, segundo a organização",
      "Organizações que alargam, mudam ou param o seu piloto com base nos resultados medidos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini), ou a ferramenta que a organização já usa",
      "Uma folha de cálculo (Google Sheets ou Excel) para o levantamento do tempo e os números do piloto",
      "Cerca de 60 minutos para as lições e as verificações, mais um piloto de duas semanas ou uma versão de prática de um dia"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; construa um exemplo de levantamento do tempo num ecrã partilhado.",
      "Peça aos alunos para trazerem a lista de tarefas de uma semana real da sua própria organização.",
      "Antes de qualquer piloto, revejam as regras para que nenhum dado privado de clientes, funcionários ou doadores entre nas ferramentas de IA.",
      "Convide os alunos a apresentar a sua justificação de negócio de uma página ao grupo para receberem comentários.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
