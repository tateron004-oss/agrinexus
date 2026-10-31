"use strict";

// Koach Learn course (Portuguese translation of shared/quality-six-sigma-yellow-belt.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Numbers are kept exactly as in the English course (decimal point, thousands comma).

const ASQ = { name: "ASQ: Certified Six Sigma Yellow Belt (requisitos, exame e Body of Knowledge)", url: "https://www.asq.org/cert/six-sigma-yellow-belt" };
const IASSC = { name: "IASSC: Certified Lean Six Sigma Yellow Belt (ICYB)", url: "https://www.iassc.org/six-sigma-certification/yellow-belt-certification/" };

module.exports = {
  id: "quality-six-sigma-yellow-belt-pt",
  lang: "pt",
  translationOf: "quality-six-sigma-yellow-belt",
  category: "Workforce Development",
  name: "Noções Básicas de Qualidade (Preparação para o Six Sigma Yellow Belt)",
  skills: "Usar as etapas DMAIC, Escrever uma descrição do problema, Recolher dados numa folha de verificação, Encontrar causas raiz com Pareto e os 5 Porquês, Eliminar o desperdício e manter o ganho, Planear um exame Yellow Belt",
  outcome: "fazer uma pequena melhoria de qualidade num processo real com as cinco etapas DMAIC (Definir, Medir, Analisar, Melhorar e Controlar), mostrá-la numa só página e seguir um plano com datas para se preparar para um exame Six Sigma Yellow Belt.",
  about: [
    "Em todos os locais de trabalho há processos que correm mal: encomendas atrasadas, faturas erradas, longas esperas, peças que não encaixam. O Six Sigma é uma forma de os corrigir com factos em vez de palpites, e o Lean é uma forma de eliminar passos desperdiçados. Os empregadores na indústria, armazéns, saúde, governo, hotéis e escritórios procuram pessoas que conheçam o básico.",
    "Este curso é para quem procura emprego, trabalhadores da linha da frente que querem subir, antigos militares que passam para trabalhos civis de operações e donos de pequenos negócios. Não precisa de matemática além de somar, dividir e calcular percentagens.",
    "Você vai escolher um processo real do seu trabalho, do seu negócio ou da sua casa e melhorá-lo passo a passo, uma etapa DMAIC por lição. O curso PREPARA você para um exame Yellow Belt, como o ASQ Certified Six Sigma Yellow Belt ou o IASSC Certified Lean Six Sigma Yellow Belt; não dá nenhum certificado. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" e uma verificação rápida de duas perguntas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um projeto de melhoria de uma página para um processo real: uma descrição do problema e um objetivo, um mapa simples do processo, uma folha de verificação com pelo menos 20 dados e a taxa de defeitos, um gráfico de Pareto e os 5 Porquês para o maior problema, uma pequena correção que testou e uma verificação de controlo para manter o ganho. Junte um plano de estudo e de exame com datas para o exame Yellow Belt que escolher, com a página oficial onde verificou as regras atuais.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos à procura de trabalho ou de uma promoção em operações, indústria, armazéns, escritórios de saúde, hotelaria e governo; antigos militares que passam para funções civis de operações e de qualidade; donos de pequenos negócios que querem menos erros e menos desperdício.",
    startingPoint: "A maioria já viu problemas repetirem-se no trabalho e tem ideias para os resolver, mas nunca usou um método organizado, nunca recolheu dados de propósito nem usou palavras da qualidade como defeito, causa raiz ou DMAIC. A matemática é a do dia a dia: contar, dividir e calcular percentagens.",
    gap: "As competências de qualidade e de melhoria contínua aparecem em muitos anúncios de emprego, e o Yellow Belt é um primeiro certificado comum. Os alunos precisam de fazer uma pequena melhoria com factos e mostrá-la numa página, de que possam falar numa entrevista, e de conhecer os passos reais para um exame reconhecido.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo da qualidade é explicado na primeira vez",
      "Aparelhos: papel e caneta chegam; uma folha de cálculo gratuita (Google Sheets ou Excel) ajuda nos gráficos",
      "Tempo: lições de 5 minutos, mais cerca de uma a duas semanas de recolha de dados para a tarefa final",
      "As regras, os formatos e as taxas dos exames mudam e variam conforme a entidade certificadora; os alunos verificam a página oficial",
      "Nenhum nome de cliente, dado de doente ou segredo da empresa nos dados de prática"
    ],
    prerequisites: "Nenhum. Quem não se sente à vontade com percentagens pode fazer primeiro o curso \"Matemática do Dia a Dia\", e o curso \"Excel e Folhas de Cálculo\" ajuda nos gráficos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a descrição de um projeto de melhoria", action: "dizer as cinco etapas DMAIC pela ordem certa e o que acontece em cada uma", standard: "acertando as cinco" },
    { id: "O2", condition: "Com um processo que tem um problema que se repete", action: "escrever uma descrição do problema e um objetivo mensurável e desenhar um mapa simples do processo", standard: "com o quê, onde, quando e de que tamanho, e sem causa nem solução na descrição" },
    { id: "O3", condition: "Com um processo para observar durante uma a duas semanas", action: "recolher dados numa folha de verificação e calcular uma taxa de defeitos", standard: "com pelo menos 20 dados e as contas mostradas" },
    { id: "O4", condition: "Com os dados da sua folha de verificação", action: "encontrar o maior problema com um gráfico de Pareto e chegar à sua causa raiz com os 5 Porquês", standard: "de modo que a causa encontrada seja uma sobre a qual a equipa pode agir" },
    { id: "O5", condition: "Com uma causa raiz", action: "escolher uma correção que elimine desperdício ou erros, testá-la em pequena escala e criar uma verificação de controlo", standard: "com dados de antes e de depois da correção" },
    { id: "O6", condition: "Usando a página oficial da ASQ ou da IASSC", action: "fazer um plano de estudo e de exame com datas para um exame Yellow Belt", standard: "com o formato e as regras do exame verificados nessa página" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Definir e medir o problema",
      lessons: [
        {
          title: "Qualidade, Six Sigma e as cinco etapas DMAIC",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dizer as cinco etapas DMAIC e o que faz um Yellow Belt em cada uma.",
          text: [
            "Qualidade quer dizer dar ao cliente aquilo de que precisa, da mesma forma, sempre. Um defeito é tudo o que o cliente não aceitaria: uma encomenda errada, uma entrega atrasada, uma peça em falta, um erro na fatura.",
            "O Six Sigma é um método para reduzir os defeitos usando dados em vez de palpites. O Lean é um método para reduzir o desperdício, ou seja, os passos que gastam tempo mas não acrescentam valor. Muitos empregadores ensinam os dois juntos, com o nome Lean Six Sigma.",
            "Os projetos seguem cinco etapas chamadas DMAIC (do inglês): Definir o problema, Medir o seu tamanho, Analisar para encontrar a causa raiz, Melhorar testando uma correção e Controlar para manter o ganho. As faixas (belts, em inglês) mostram o nível de formação: um Yellow Belt (faixa amarela) conhece o básico e ajuda nos projetos, muitas vezes a recolher dados e a mapear os passos; os Green Belts e os Black Belts lideram projetos maiores.",
            "Dois certificados Yellow Belt conhecidos são o ASQ Certified Six Sigma Yellow Belt e o IASSC Certified Lean Six Sigma Yellow Belt. Este curso prepara você; só a entidade certificadora dá o certificado."
          ],
          steps: ["Definir: qual é o problema e qual é o objetivo?", "Medir: com que frequência acontece agora?", "Analisar: qual é a causa raiz?", "Melhorar: que correção funciona quando a testa?", "Controlar: como mantém o ganho?"],
          words: [["Defeito", "tudo o que o cliente não aceitaria, como um artigo errado, atrasado ou partido."], ["Six Sigma", "um método para reduzir os defeitos usando dados; qualidade muito alta quer dizer cerca de 3.4 defeitos por cada milhão de oportunidades."], ["Lean", "um método para eliminar os passos que desperdiçam tempo ou materiais."], ["DMAIC", "Define, Measure, Analyze, Improve, Control (Definir, Medir, Analisar, Melhorar, Controlar): as cinco etapas de um projeto Six Sigma."], ["Yellow Belt", "\"faixa amarela\": uma pessoa formada no básico que ajuda em projetos de melhoria."]],
          slides: [
            { title: "Qualidade e defeitos", bullets: ["Qualidade: o que o cliente precisa, da mesma forma, sempre", "Defeito: tudo o que o cliente não aceitaria"] },
            { title: "Six Sigma e Lean", bullets: ["Six Sigma: menos defeitos, usando dados", "Lean: menos passos desperdiçados", "Juntos: Lean Six Sigma"] },
            { title: "DMAIC pela ordem", bullets: ["Definir o problema", "Medir o seu tamanho", "Analisar a causa raiz", "Melhorar com uma correção testada e depois Controlar para a manter"] },
            { title: "Faixas e certificados", bullets: ["Yellow Belt: conhece o básico e ajuda nos projetos", "A ASQ e a IASSC têm exames Yellow Belt", "Este curso prepara você; não dá certificado"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Escolha um processo que conhece e que corre mal muitas vezes, no trabalho, num negócio ou em casa (por exemplo, encomendas enviadas com atraso, pedidos de almoço errados ou faturas enviadas com erros). Escreva-o no topo de uma folha, depois escreva D, M, A, I, C de lado e uma pergunta que faria em cada etapa.",
          youCanNow: "dizer as cinco etapas DMAIC pela ordem, explicar o que faz um Yellow Belt e escolher um processo para melhorar.",
          quickCheck: [
            { objective: "O1", q: "Qual é a ordem certa das etapas DMAIC?", options: ["Desenhar, Fazer, Avaliar, Inspecionar, Fechar", "Medir, Definir, Melhorar, Analisar, Controlar", "Definir, Medir, Analisar, Melhorar, Controlar", "Definir, Gerir, Agir, Melhorar, Verificar"], answer: 2, why: "DMAIC quer dizer Definir, Medir, Analisar, Melhorar, Controlar, por esta ordem." },
            { objective: "O1", q: "A sua equipa está a testar uma nova forma de embalar as encomendas para ver se os erros diminuem. Que etapa é esta?", options: ["Melhorar", "Definir", "Medir", "Controlar"], answer: 0, why: "Testar uma correção para ver se funciona faz-se na etapa Melhorar." }
          ]
        },
        {
          title: "Definir: a descrição do problema e o mapa do processo",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escrever uma descrição do problema e um objetivo, e desenhar um mapa simples do processo.",
          text: [
            "Um bom projeto começa com uma descrição clara do problema. Diz o que está errado, onde, desde quando e de que tamanho, e porque é importante. Ainda NÃO indica uma causa nem uma solução, porque ainda não as encontrou. Exemplo: \"Desde junho, 12 em cada 100 pedidos de almoço no café do centro saem errados, o que causa reembolsos e reclamações.\"",
            "O objetivo diz quanto melhor e até quando: \"Reduzir os pedidos de almoço errados para 3 em cada 100 até ao fim de setembro.\"",
            "Depois, faça o mapa do processo. Escreva cada passo numa caixa, do início ao fim, e ligue-as com setas. Um SIPOC é uma tabela rápida da visão geral: Fornecedores (Suppliers), Entradas (Inputs), Passos do processo (Process), Saídas (Outputs) e Clientes (Customers). A voz do cliente (VOC) é aquilo que os clientes dizem que precisam; as partes que mais lhes importam chamam-se críticas para a qualidade (CTQ)."
          ],
          steps: ["Escreva o que está errado, onde, desde quando e de que tamanho.", "Acrescente porque é importante (custo, tempo, clientes, segurança).", "Verifique: nenhuma causa e nenhuma solução na descrição.", "Escreva um objetivo com um número e uma data.", "Desenhe o processo em 5 a 8 caixas, do início ao fim."],
          words: [["Descrição do problema", "um texto curto, com factos, sobre o que está errado, onde, quando e de que tamanho."], ["Mapa do processo", "um desenho dos passos de um processo pela ordem, com caixas e setas."], ["SIPOC", "uma tabela de uma página com Fornecedores, Entradas, Processo, Saídas e Clientes (as iniciais em inglês)."], ["Voz do cliente (VOC)", "aquilo que os clientes dizem que precisam ou de que se queixam."], ["Crítico para a qualidade (CTQ)", "uma característica que mais importa ao cliente, como chegar a tempo ou estar certo."]],
          slides: [
            { title: "Uma boa descrição do problema", bullets: ["O quê, onde, desde quando, de que tamanho", "Porque é importante", "Ainda sem causa e sem solução"] },
            { title: "Um bom objetivo", bullets: ["Quanto melhor e até quando", "Exemplo: pedidos errados de 12 para 3 em cada 100 até ao fim de setembro"] },
            { title: "Faça o mapa do processo", bullets: ["5 a 8 caixas, do início ao fim", "As setas mostram a ordem", "SIPOC: Fornecedores, Entradas, Processo, Saídas, Clientes"] },
            { title: "Ouça o cliente", bullets: ["Voz do cliente: aquilo de que precisa", "Crítico para a qualidade: o que mais lhe importa"] }
          ],
          tryIt: "Para o processo que escolheu, escreva uma descrição do problema com o quê, onde, desde quando e de que tamanho (por agora, use a sua melhor estimativa), um objetivo com um número e uma data, e um mapa do processo com 5 a 8 caixas em papel.",
          youCanNow: "escrever uma descrição do problema e um objetivo, e desenhar um mapa simples do processo.",
          quickCheck: [
            { objective: "O2", q: "Qual é a melhor descrição do problema?", options: ["\"O cozinheiro novo é descuidado.\"", "\"Desde março, 8 em cada 50 envios do armazém leste chegam atrasados, o que causa reembolsos aos clientes.\"", "\"Precisamos de um sistema informático novo.\"", "\"Os envios estão mal.\""], answer: 1, why: "Diz o quê, onde, desde quando e de que tamanho, e não culpa uma causa nem indica uma solução." },
            { objective: "O2", q: "O que quer dizer o P em SIPOC?", options: ["Preço", "Pessoas", "Plano", "Processo"], answer: 3, why: "SIPOC quer dizer Fornecedores, Entradas, Processo, Saídas e Clientes (as iniciais em inglês)." }
          ]
        },
        {
          title: "Medir: folhas de verificação e taxas de defeitos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Recolher dados numa folha de verificação e calcular uma taxa de defeitos.",
          text: [
            "Na etapa Medir, você descobre com que frequência o problema acontece de verdade. Os palpites muitas vezes estão errados, por isso conte.",
            "Uma folha de verificação é um formulário simples, em papel ou numa folha de cálculo. De lado, escreva os tipos de defeito (artigo errado, artigo em falta, atraso). Em cima, escreva os dias. Faça um risco cada vez que um acontece, e conte também o total de unidades que verificou.",
            "A taxa de defeitos é o número de unidades com defeito a dividir pelo total de unidades, vezes 100. Se 15 de 200 encomendas estavam erradas: 15 / 200 = 0.075, ou seja, 7.5%. O Six Sigma usa também o DPMO, defeitos por milhão de oportunidades: defeitos a dividir por (unidades vezes oportunidades por unidade), vezes 1,000,000. Se 500 faturas têm cada uma 4 hipóteses de erro e encontra 10 erros: 10 / (500 x 4) = 0.005, vezes 1,000,000 = 5,000 DPMO.",
            "Meça sempre da mesma forma: a mesma definição de defeito, a mesma hora do dia, a mesma pessoa ou regras claras. Esta é a sua linha de base, o número de \"antes\" que vai comparar mais tarde."
          ],
          steps: ["Escreva uma definição clara de cada defeito.", "Faça uma folha de verificação: tipos de defeito de lado, dias em cima.", "Marque cada defeito com um risco e conte o total de unidades verificadas.", "Taxa de defeitos = unidades com defeito / total de unidades x 100.", "Registe isto como a sua linha de base."],
          words: [["Folha de verificação", "um formulário simples para contar com que frequência acontece cada tipo de problema."], ["Taxa de defeitos", "a parte das unidades que tem defeito, em percentagem."], ["DPMO", "defeitos por milhão de oportunidades: defeitos / (unidades x hipóteses por unidade) x 1,000,000."], ["Linha de base", "como o processo funciona antes de o mudar."]],
          slides: [
            { title: "Conte, não adivinhe", bullets: ["Meça com que frequência o problema acontece", "Use uma só definição clara de defeito"] },
            { title: "A folha de verificação", bullets: ["Tipos de defeito de lado", "Dias em cima", "Riscos de contagem, mais o total de unidades verificadas"] },
            { title: "As contas", bullets: ["Taxa de defeitos = com defeito / total x 100", "15 errados em 200 = 7.5%", "DPMO = defeitos / (unidades x hipóteses) x 1,000,000"] },
            { title: "A sua linha de base", bullets: ["O número de \"antes\"", "Meça sempre da mesma forma", "Vai compará-lo depois da correção"] }
          ],
          tryIt: "Faça uma folha de verificação para o seu processo, em papel ou numa folha de cálculo. Recolha pelo menos 20 dados durante a próxima semana (comece hoje) e depois calcule a sua taxa de defeitos e mostre as contas. Pratique agora: 9 atrasadas em 150 entregas são que percentagem? (Resposta: 9 / 150 = 0.06 = 6%.)",
          youCanNow: "recolher dados numa folha de verificação, calcular uma taxa de defeitos e definir a sua linha de base.",
          quickCheck: [
            { objective: "O3", q: "Verificou 80 encomendas e 4 estavam erradas. Qual é a taxa de defeitos?", options: ["5%", "4%", "20%", "8%"], answer: 0, why: "4 / 80 = 0.05, ou seja, 5%." },
            { objective: "O3", q: "Porque escreve uma definição clara de cada defeito antes de contar?", options: ["Para o gráfico ficar mais bonito", "Para o chefe poder assinar", "Para todos contarem da mesma forma e os números serem de confiança", "Para precisar de menos dados"], answer: 2, why: "Se as pessoas contarem coisas diferentes, os dados não podem ser comparados nem merecem confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Definir e medir o problema",
        questions: [
          { objective: "O1", q: "Em que etapa DMAIC procura a causa raiz?", options: ["Definir", "Analisar", "Controlar", "Medir"], answer: 1, why: "Analisar é a etapa em que usa dados e ferramentas para encontrar a causa raiz." },
          { objective: "O1", q: "O que faz normalmente um Yellow Belt num projeto?", options: ["É dono da empresa", "Dá os certificados", "Aprova o orçamento sozinho", "Ajuda em tarefas como recolher dados e mapear os passos"], answer: 3, why: "Os Yellow Belts conhecem o básico e apoiam os projetos, muitas vezes a recolher dados e a mapear o processo." },
          { objective: "O2", q: "Uma descrição do problema diz: \"Os erros acontecem porque o pessoal não se importa.\" O que está mal?", options: ["Culpa uma causa antes de recolher qualquer dado", "É curta demais para ler", "Usa números", "Não tem nada de mal"], answer: 0, why: "A descrição do problema descreve o problema com factos; a causa encontra-se mais tarde, na etapa Analisar." },
          { objective: "O3", q: "Verificou 250 formulários e encontrou 10 com erros. Qual é a taxa de defeitos?", options: ["10%", "2.5%", "4%", "25%"], answer: 2, why: "10 / 250 = 0.04, ou seja, 4%." },
          { objective: "O3", q: "O que é uma linha de base?", options: ["O objetivo que quer atingir", "A linha de baixo de um gráfico", "O relatório final", "Como o processo funciona antes de o mudar"], answer: 3, why: "A linha de base é o número de \"antes\" que compara depois da correção." }
        ]
      }
    },
    {
      name: "Capítulo 2: Analisar, melhorar e controlar",
      lessons: [
        {
          title: "Analisar: gráficos de Pareto, espinhas de peixe e os 5 Porquês",
          objectives: ["O4"],
          minutes: 6,
          goal: "Encontrar o maior problema com um gráfico de Pareto e a sua causa raiz com os 5 Porquês.",
          text: [
            "Um gráfico de Pareto é um gráfico de barras ordenado da barra maior para a mais pequena. Mostra que poucas causas costumam fazer a maior parte dos problemas, o que muitas vezes se chama a regra 80/20. Comece pela barra maior.",
            "Um diagrama de espinha de peixe (também chamado diagrama de causa e efeito ou de Ishikawa) ajuda uma equipa a listar as causas possíveis. Escreva o problema na \"cabeça\" e depois desenhe espinhas para os grupos de causas, como Métodos, Máquinas, Materiais, Pessoas, Medição e Ambiente.",
            "Depois, pergunte \"Porquê?\" cerca de cinco vezes para ir do sintoma até uma causa raiz que possa corrigir. Exemplo: As encomendas estão erradas. Porquê? O cozinheiro leu mal o talão. Porquê? O talão foi escrito à mão. Porquê? A impressora está avariada. Porquê? Ninguém é responsável por a arranjar. Porquê? Não há verificação de manutenção. Causa raiz: não há verificação de manutenção da impressora.",
            "Culpar alguém não é uma causa raiz. Se a resposta for \"alguém foi descuidado\", continue a perguntar porque é que o processo deixou o erro acontecer."
          ],
          steps: ["Some cada tipo de defeito da sua folha de verificação.", "Ordene-os do maior para o mais pequeno e desenhe as barras.", "Escolha a barra maior.", "Liste as causas possíveis numa espinha de peixe.", "Pergunte \"Porquê?\" cerca de cinco vezes até chegar a uma causa sobre a qual possa agir."],
          words: [["Gráfico de Pareto", "um gráfico de barras ordenado do maior para o mais pequeno, para mostrar os poucos problemas que mais importam."], ["Regra 80/20", "o padrão em que poucas causas fazem muitas vezes a maior parte dos problemas."], ["Diagrama de espinha de peixe", "um desenho que agrupa as causas possíveis de um problema; também se chama diagrama de Ishikawa."], ["Causa raiz", "a razão verdadeira por que um problema acontece; corrija-a e o problema para ou diminui."], ["5 Porquês", "perguntar \"Porquê?\" várias vezes, cerca de cinco, para chegar à causa raiz."]],
          slides: [
            { title: "Gráfico de Pareto", bullets: ["Barras ordenadas da maior para a mais pequena", "Poucas causas fazem a maioria dos problemas (80/20)", "Comece pela barra maior"] },
            { title: "Diagrama de espinha de peixe", bullets: ["O problema na cabeça", "Espinhas: Métodos, Máquinas, Materiais, Pessoas, Medição, Ambiente"] },
            { title: "5 Porquês", bullets: ["Pergunte \"Porquê?\" cerca de cinco vezes", "Encomendas erradas, talões à mão, impressora avariada, sem verificação"] },
            { title: "Culpar não é uma causa raiz", bullets: ["Pergunte porque é que o processo deixou o erro acontecer", "Encontre uma causa sobre a qual possa agir"] }
          ],
          tryIt: "Some cada tipo de defeito da sua folha de verificação, ordene-os e desenhe um gráfico de Pareto em papel ou numa folha de cálculo. Depois, escreva os 5 Porquês para a barra maior. Pare quando chegar a uma causa que possa corrigir e que não culpe uma pessoa.",
          youCanNow: "desenhar um gráfico de Pareto, escolher o maior problema e chegar à sua causa raiz com os 5 Porquês.",
          quickCheck: [
            { objective: "O4", q: "O seu gráfico de Pareto mostra: tamanho errado 40, artigo em falta 25, atraso 10, danificado 5. Por onde começa?", options: ["Danificado, porque é o mais fácil", "Os quatro ao mesmo tempo", "Atraso, porque os clientes detestam esperar", "Tamanho errado, a barra maior"], answer: 3, why: "O gráfico de Pareto diz para começar pela barra maior, onde uma correção ajuda mais." },
            { objective: "O4", q: "Os seus 5 Porquês terminam em \"o trabalhador foi descuidado\". O que deve fazer?", options: ["Parar aí e repreender o trabalhador por escrito", "Continuar a perguntar porque é que o processo deixou o erro acontecer", "Começar um projeto novo", "Tirar o trabalhador do gráfico"], answer: 1, why: "Culpar não é uma causa raiz; procure o que no processo permitiu o erro." }
          ]
        },
        {
          title: "Melhorar: eliminar o desperdício e evitar os erros",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escolher uma correção que elimine desperdício ou erros e testá-la em pequena escala.",
          text: [
            "O Lean indica oito tipos de desperdício. Uma forma fácil de os lembrar é a palavra inglesa DOWNTIME: Defects (defeitos), Overproduction (produzir demais), Waiting (esperas), Non-used talent (talento não usado), Transportation (transporte), Inventory (stock a mais), Motion (movimento: andar ou esticar-se a mais) e Extra processing (trabalho a mais).",
            "As boas correções tornam muitas vezes a forma certa na forma fácil. Os 5S organizam uma área de trabalho: Separar, Organizar, Limpar, Padronizar e Manter (em inglês: Sort, Set in order, Shine, Standardize, Sustain). A prova de erros (poka-yoke, em japonês) torna os erros difíceis ou impossíveis, como uma ficha que só encaixa de uma forma, um formulário que não se envia com uma caixa em branco ou um caixote com cor própria.",
            "Teste primeiro a correção em pequena escala: um turno, uma secretária ou uma semana. A isto chama-se um piloto. Meça da mesma forma que a linha de base e compare. Se os números melhoraram, alargue a todos; se não, experimente a ideia seguinte."
          ],
          steps: ["Liste correções que atacam a causa raiz.", "Prefira correções que eliminam desperdício ou dificultam os erros.", "Faça um pequeno piloto: um turno, uma secretária ou uma semana.", "Meça da mesma forma que a linha de base.", "Compare o antes e o depois."],
          words: [["Desperdício", "qualquer passo que gasta tempo ou materiais mas não acrescenta valor para o cliente."], ["DOWNTIME", "palavra inglesa para lembrar os oito desperdícios: Defects, Overproduction, Waiting, Non-used talent, Transportation, Inventory, Motion, Extra processing."], ["5S", "Separar, Organizar, Limpar, Padronizar, Manter (Sort, Set in order, Shine, Standardize, Sustain): uma forma de organizar uma área de trabalho."], ["Prova de erros (poka-yoke)", "um desenho que torna os erros difíceis ou impossíveis."], ["Piloto", "um teste pequeno e curto de uma correção antes de a usar em todo o lado."]],
          slides: [
            { title: "Os oito desperdícios: DOWNTIME", bullets: ["Defeitos, Produzir demais, Esperas, Talento não usado", "Transporte, Stock a mais, Movimento, Trabalho a mais"] },
            { title: "5S", bullets: ["Separar, Organizar, Limpar", "Padronizar, Manter"] },
            { title: "Prova de erros", bullets: ["Tornar a forma certa na forma fácil", "Uma ficha que só encaixa de uma forma; um formulário que bloqueia caixas em branco"] },
            { title: "Primeiro um piloto", bullets: ["Um turno, uma secretária ou uma semana", "Meça como na linha de base", "Melhorou? Alargue a todos. Não melhorou? Experimente a ideia seguinte"] }
          ],
          tryIt: "Escreva três correções possíveis para a sua causa raiz. Indique que desperdício cada uma elimina ou como evita os erros. Escolha uma, planeie um pequeno piloto (onde, quanto tempo, quem) e comece a medi-lo da mesma forma que a sua linha de base.",
          youCanNow: "reconhecer os oito desperdícios, escolher uma correção que elimine desperdício ou erros e testá-la com um pequeno piloto.",
          quickCheck: [
            { objective: "O5", q: "Os trabalhadores atravessam o armazém muitas vezes por dia para ir buscar fita-cola. Que desperdício é este?", options: ["Produzir demais", "Defeitos", "Movimento", "Stock a mais"], answer: 2, why: "Andar e esticar-se a mais é o desperdício de movimento." },
            { objective: "O5", q: "Tem uma correção que acha que vai funcionar. Qual é o melhor passo seguinte?", options: ["Testá-la em pequena escala e comparar com a linha de base", "Aplicá-la em todos os locais de uma só vez", "Não medir, porque tem a certeza", "Esperar um ano para ver"], answer: 0, why: "Um pequeno piloto medido como a linha de base mostra se a correção funciona mesmo." }
          ]
        },
        {
          title: "Controlar o ganho e planear o seu exame Yellow Belt",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Criar uma verificação de controlo para a correção e fazer um plano de estudo e de exame com datas.",
          text: [
            "Muitas correções desaparecem quando as pessoas voltam aos velhos hábitos. Na etapa Controlar, você mantém o ganho: escreva a nova forma como trabalho padrão (uma lista curta ou uma imagem dos passos certos), forme as pessoas e continue a medir. Um gráfico de execução mostra os seus números ao longo do tempo com uma linha central; um gráfico de controlo acrescenta limites que mostram quando o processo mudou mais do que o normal. Escreva um plano de controlo simples: o que verificar, com que frequência, quem verifica e o que fazer se o número piorar.",
            "Agora, planeie o seu certificado. O ASQ Certified Six Sigma Yellow Belt não exige experiência nem estudos, e os seus exames são de consulta, com os seus próprios materiais de referência encadernados, segundo asq.org. O IASSC Certified Lean Six Sigma Yellow Belt não tem pré-requisitos, e o seu exame é sem consulta e vigiado, segundo iassc.org. Os formatos, as taxas e as regras mudam, por isso leia a página oficial antes de se inscrever. Alguns empregadores também dão a sua própria formação Yellow Belt interna.",
            "Descarregue o Body of Knowledge (\"corpo de conhecimentos\": a lista de temas que o exame pode incluir) da entidade certificadora, marque cada tema que já conhece e planeie tempo de estudo para os outros. Ponha datas reais no calendário e marque o exame só quando os resultados dos seus testes de prática estiverem estáveis."
          ],
          steps: ["Escreva a nova forma como trabalho padrão.", "Faça um plano de controlo: o quê, com que frequência, quem e o que fazer se piorar.", "Mantenha um gráfico de execução durante pelo menos algumas semanas.", "Escolha um exame e leia a sua página oficial.", "Use o Body of Knowledge para planear as datas de estudo e uma data para o exame."],
          words: [["Trabalho padrão", "a melhor forma combinada de fazer uma tarefa, escrita em passos simples ou imagens."], ["Gráfico de execução", "um gráfico de linha de uma medida ao longo do tempo, usado para ver tendências (em inglês, run chart)."], ["Gráfico de controlo", "um gráfico de execução com limites que mostram quando um processo muda mais do que o normal."], ["Plano de controlo", "um plano curto que diz o que verificar, com que frequência, quem verifica e o que fazer se piorar."], ["Body of Knowledge", "\"corpo de conhecimentos\": a lista oficial de temas que um exame pode incluir."]],
          slides: [
            { title: "Manter o ganho", bullets: ["Escreva a nova forma como trabalho padrão", "Forme as pessoas", "Continue a medir"] },
            { title: "Gráficos que vigiam o processo", bullets: ["Gráfico de execução: números ao longo do tempo com uma linha central", "Gráfico de controlo: acrescenta limites para a variação normal"] },
            { title: "Dois exames Yellow Belt", bullets: ["ASQ CSSYB: com consulta, sem exigir experiência", "IASSC ICYB: sem consulta, vigiado, sem pré-requisitos", "Verifique a página oficial: as regras mudam"] },
            { title: "O seu plano de estudo e de exame", bullets: ["Descarregue o Body of Knowledge", "Marque o que já sabe; planeie o resto", "Datas reais; marque o exame quando os testes de prática se mantiverem"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Tarefa final: termine o seu projeto de uma página (descrição do problema e objetivo, mapa do processo, folha de verificação e taxa de defeitos, gráfico de Pareto e 5 Porquês, a correção que testou no piloto com os números de antes e de depois, e um plano de controlo). Depois, abra a página Yellow Belt da ASQ ou da IASSC, escreva o formato do exame que lá encontrou e faça um plano de estudo com pelo menos quatro sessões de estudo com data e uma data para o exame.",
          youCanNow: "manter um ganho com trabalho padrão e um plano de controlo, e seguir um plano com datas até um exame Yellow Belt.",
          quickCheck: [
            { objective: "O5", q: "Três meses depois de uma correção, os erros estão a voltar a subir. Que etapa faltou?", options: ["Definir", "Controlar", "Medir", "Analisar"], answer: 1, why: "Controlar mantém o ganho com trabalho padrão, formação e verificações contínuas." },
            { objective: "O6", q: "Onde deve verificar as regras e o formato atuais de um exame Yellow Belt?", options: ["Numa publicação nas redes sociais", "Com um amigo que passou há anos", "Num anúncio de um curso barato", "Na página oficial da entidade certificadora, como asq.org ou iassc.org"], answer: 3, why: "As regras, os formatos e as taxas dos exames mudam; a página da própria entidade certificadora é a fonte de confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Analisar, melhorar e controlar",
        questions: [
          { objective: "O4", q: "O que mostra um gráfico de Pareto?", options: ["Os poucos problemas que causam a maior parte das dificuldades", "Os passos de um processo pela ordem", "O orçamento de um projeto", "Quem tem a culpa"], answer: 0, why: "O gráfico de Pareto ordena os problemas do maior para o mais pequeno, para ver os poucos que mais importam." },
          { objective: "O4", q: "Que ferramenta agrupa as causas possíveis em espinhas como Métodos, Máquinas e Materiais?", options: ["Uma folha de verificação", "Um gráfico de execução", "Um diagrama de espinha de peixe", "Um SIPOC"], answer: 2, why: "O diagrama de espinha de peixe (Ishikawa) agrupa as causas possíveis de um problema." },
          { objective: "O5", q: "Um formulário não se envia enquanto todas as caixas obrigatórias não estiverem preenchidas. Isto é um exemplo de:", options: ["Produzir demais", "Prova de erros", "Stock a mais", "Um gráfico de controlo"], answer: 1, why: "A prova de erros (poka-yoke) torna o erro difícil ou impossível." },
          { objective: "O5", q: "Quais são as etapas dos 5S?", options: ["Vender, Enviar, Poupar, Servir, Sorrir", "Ver, Dizer, Parar, Começar, Assinar", "Ler, Pontuar, Resolver, Ordenar, Mandar", "Separar, Organizar, Limpar, Padronizar, Manter"], answer: 3, why: "Os 5S são Separar, Organizar, Limpar, Padronizar e Manter." },
          { objective: "O6", q: "O que é um Body of Knowledge?", options: ["A lista oficial de temas que um exame pode incluir", "Um livro de medicina", "O manual da empresa", "Uma lista de respostas de exames antigos"], answer: 0, why: "A entidade certificadora publica o Body of Knowledge para você saber o que estudar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Qualidade (Preparação para o Six Sigma Yellow Belt)",
    questions: [
      { objective: "O1", q: "O que quer dizer DMAIC?", options: ["Do, Make, Ask, Inspect, Close (Fazer, Produzir, Perguntar, Inspecionar, Fechar)", "Design, Monitor, Act, Inform, Check (Desenhar, Vigiar, Agir, Informar, Verificar)", "Define, Measure, Analyze, Improve, Control (Definir, Medir, Analisar, Melhorar, Controlar)", "Decide, Measure, Approve, Install, Count (Decidir, Medir, Aprovar, Instalar, Contar)"], answer: 2, why: "As cinco etapas de um projeto Six Sigma são Definir, Medir, Analisar, Melhorar e Controlar." },
      { objective: "O1", q: "Escrever a descrição do problema e o objetivo acontece em que etapa?", options: ["Definir", "Melhorar", "Controlar", "Analisar"], answer: 0, why: "Definir apresenta o problema, o objetivo e o processo." },
      { objective: "O1", q: "Qual destas frases sobre um curso Yellow Belt como este é verdadeira?", options: ["Terminá-lo dá o certificado da ASQ", "Substitui qualquer exame", "Só os Black Belts o podem fazer", "Prepara você; é a entidade certificadora que dá o certificado"], answer: 3, why: "Um curso prepara você; só a entidade certificadora, como a ASQ ou a IASSC, dá o certificado." },
      { objective: "O2", q: "O que inclui uma boa descrição do problema?", options: ["A solução que prefere", "O quê, onde, desde quando e de que tamanho", "O nome do trabalhador a culpar", "Só a palavra \"problema\""], answer: 1, why: "Dá os factos do problema sem indicar uma causa ou uma solução." },
      { objective: "O2", q: "Qual é um objetivo mensurável?", options: ["\"Fazer melhor nas encomendas\"", "\"Esforçar-se mais\"", "\"Reduzir as entregas atrasadas de 10% para 3% até 31 de dezembro\"", "\"Deixar os clientes mais contentes um dia\""], answer: 2, why: "Tem um número e uma data, por isso consegue saber se o atingiu." },
      { objective: "O2", q: "Um mapa do processo mostra:", options: ["Os passos de um processo pela ordem, com caixas e setas", "Os lucros da empresa", "Onde fica o escritório num mapa da cidade", "Que trabalhador é o mais rápido"], answer: 0, why: "Um mapa do processo desenha cada passo do início ao fim." },
      { objective: "O3", q: "Para que serve uma folha de verificação?", options: ["Pagar aos trabalhadores", "Assinar contratos", "Escrever o objetivo", "Contar com que frequência acontece cada tipo de problema"], answer: 3, why: "Uma folha de verificação é um formulário simples para contar os defeitos por tipo." },
      { objective: "O3", q: "Verificou 400 faturas e 12 tinham erros. Qual é a taxa de defeitos?", options: ["12%", "3%", "4%", "0.3%"], answer: 1, why: "12 / 400 = 0.03, ou seja, 3%." },
      { objective: "O3", q: "100 unidades, cada uma com 5 hipóteses de erro, têm 2 erros no total. Qual é o DPMO?", options: ["2,000", "400", "4,000", "20,000"], answer: 2, why: "2 / (100 x 5) = 0.004, e 0.004 x 1,000,000 = 4,000." },
      { objective: "O4", q: "A regra 80/20 num gráfico de Pareto quer dizer:", options: ["Poucas causas fazem muitas vezes a maior parte dos problemas", "80 trabalhadores fazem 20 erros", "Corrigir 20 problemas por dia", "Todas as causas contam o mesmo"], answer: 0, why: "O Pareto mostra as poucas causas que mais importam, por isso começa pela barra maior." },
      { objective: "O4", q: "Porque pergunta \"Porquê?\" cerca de cinco vezes?", options: ["Para atrasar a reunião", "Para encontrar alguém a quem culpar", "Porque o exame exige exatamente cinco", "Para ir além do sintoma até uma causa raiz que possa corrigir"], answer: 3, why: "Cada \"porquê\" desce um nível até chegar a uma causa sobre a qual possa agir." },
      { objective: "O4", q: "Que resposta é uma causa raiz sobre a qual pode agir?", options: ["\"As pessoas são preguiçosas\"", "\"Não há verificação de manutenção da impressora de talões\"", "\"Azar\"", "\"Os clientes são difíceis\""], answer: 1, why: "Uma causa raiz é uma falha no processo que pode corrigir, não uma culpa nem o azar." },
      { objective: "O5", q: "Caixas de stock a mais enchem o armazém dos fundos e algumas passam do prazo. Que desperdício é este?", options: ["Movimento", "Esperas", "Stock a mais", "Talento não usado"], answer: 2, why: "Ter stock a mais é o desperdício de inventário." },
      { objective: "O5", q: "Antes de aplicar uma correção em todo o lado, deve:", options: ["Testá-la num pequeno piloto e comparar com a linha de base", "Não medir", "Mudar cinco coisas ao mesmo tempo", "Pedir aos clientes que esperem"], answer: 0, why: "Um piloto mostra se a correção funciona antes de gastar tempo e dinheiro a alargá-la." },
      { objective: "O5", q: "O que diz um plano de controlo?", options: ["Quem recebe um prémio", "Só a data de início do projeto", "Como escrever uma descrição do problema", "O que verificar, com que frequência, quem verifica e o que fazer se piorar"], answer: 3, why: "Um plano de controlo mantém o ganho com verificações regulares e uma resposta definida." },
      { objective: "O5", q: "Um gráfico de execução é:", options: ["Uma lista dos oito desperdícios", "Um gráfico de linha de uma medida ao longo do tempo", "Um desenho das causas", "Uma planta do edifício"], answer: 1, why: "Um gráfico de execução mostra os dados ao longo do tempo para ver se o ganho se mantém." },
      { objective: "O6", q: "Segundo asq.org, o exame ASQ Certified Six Sigma Yellow Belt é:", options: ["Só para pessoas com cinco anos de experiência", "Feito só numa sala de aula pelo seu empregador", "De consulta, sem exigir experiência nem estudos", "Sem consulta e sem notas"], answer: 2, why: "A ASQ diz que o CSSYB não exige experiência nem estudos e que os seus exames são de consulta." },
      { objective: "O6", q: "Segundo iassc.org, o exame Yellow Belt da IASSC é:", options: ["Sem consulta e vigiado", "De consulta, com quaisquer notas", "Feito sem limite de tempo", "Só para membros da ASQ"], answer: 0, why: "A IASSC indica que o exame ICYB é sem consulta e vigiado." },
      { objective: "O6", q: "Qual é o melhor primeiro passo para fazer o seu plano de estudo?", options: ["Marcar o exame para amanhã", "Comprar o curso mais caro", "Decorar respostas de exames antigos de um site", "Descarregar o Body of Knowledge e marcar os temas que precisa de estudar"], answer: 3, why: "O Body of Knowledge mostra o que o exame inclui, para poder planear o estudo do que lhe falta." },
      { objective: "O6", q: "Quando deve marcar a data do seu exame?", options: ["Antes de estudar qualquer coisa", "Quando os resultados dos testes de prática estiverem estáveis e tiver verificado as regras oficiais", "Nunca; os certificados não são precisos", "Só quando o seu empregador mandar"], answer: 1, why: "Resultados de prática estáveis e regras atualizadas querem dizer que está pronto para o exame." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 7, 9, 10, 12, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Problema e objetivo", objective: "O2", notYet: "A descrição é vaga ou indica uma causa ou uma solução; o objetivo não tem número nem data.", meets: "A descrição diz o quê, onde, desde quando e de que tamanho; o objetivo tem um número e uma data; inclui um mapa do processo com 5 a 8 passos.", exceeds: "Também inclui um SIPOC ou indica o que mais importa ao cliente (CTQ)." },
      { name: "Dados e taxa de defeitos", objective: "O3", notYet: "Menos de 20 dados, ou nenhuma definição clara de defeito.", meets: "Uma folha de verificação com pelo menos 20 dados e a taxa de defeitos com as contas mostradas.", exceeds: "Também dá o DPMO, ou mostra que as mesmas regras de contagem foram usadas todos os dias." },
      { name: "Causa raiz", objective: "O4", notYet: "Não há gráfico de Pareto, ou os 5 Porquês terminam numa culpa.", meets: "Um gráfico de Pareto ordenado do maior para o mais pequeno e uns 5 Porquês que terminam numa causa do processo sobre a qual alguém pode agir.", exceeds: "Também usa uma espinha de peixe para mostrar outras causas que a equipa pôs de parte." },
      { name: "Correção e controlo", objective: "O5", notYet: "A correção não foi testada, ou não há números de antes e de depois.", meets: "Uma correção testada em piloto, com números de antes e de depois e um plano de controlo (o quê, com que frequência, quem, o que fazer se piorar).", exceeds: "Também inclui trabalho padrão ou um gráfico de execução de várias semanas." },
      { name: "História DMAIC", objective: "O1", notYet: "A página salta de um lado para o outro e faltam etapas ou estão fora de ordem.", meets: "A página segue Definir, Medir, Analisar, Melhorar e Controlar, por esta ordem.", exceeds: "O aluno consegue explicar o projeto em menos de dois minutos, como numa entrevista de emprego." },
      { name: "Plano de estudo e de exame", objective: "O6", notYet: "Sem datas, ou nenhuma página oficial verificada.", meets: "Indica um exame, o formato verificado na sua página oficial, pelo menos quatro sessões de estudo com data e uma data para o exame.", exceeds: "Também liga as sessões de estudo aos temas do Body of Knowledge e inclui datas de testes de prática." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem um exame Yellow Belt e passam em 6 meses (inquérito de seguimento)",
      "Alunos que usam o seu projeto de uma página numa entrevista, ou conseguem um emprego, uma promoção ou um lugar numa equipa de melhoria (inquérito de seguimento)",
      "Alunos e donos de pequenos negócios que dizem ter uma taxa de defeitos mais baixa ou menos desperdício no processo escolhido 30 dias depois"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, caneta e uma régua para as folhas de verificação, os gráficos e os mapas do processo",
      "Opcional: uma folha de cálculo gratuita (Google Sheets ou Microsoft Excel) para os gráficos de Pareto e de execução",
      "Um processo real para observar durante uma a duas semanas (no trabalho, num negócio ou em casa)",
      "Acesso à internet para ler a página oficial Yellow Belt da ASQ ou da IASSC",
      "Cerca de 60 minutos de lições e verificações, mais uma a duas semanas de recolha de dados para a tarefa final"
    ],
    facilitatorNotes: [
      "Em grupo: façam o teste inicial juntos e depois um capítulo por sessão. Peça a cada aluno que escolha o seu processo na primeira sessão, para a recolha de dados começar cedo.",
      "Pratiquem em grupo um gráfico de Pareto e uns 5 Porquês com um exemplo comum (como os pedidos errados no café) antes de os alunos fazerem os seus.",
      "Pare quaisquer 5 Porquês que terminem numa culpa e pergunte o que no processo deixou o erro acontecer.",
      "Lembre aos alunos que não registem nomes de clientes, dados de doentes nem segredos da empresa nos seus dados.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez; peça aos alunos que pratiquem explicar o projeto como resposta numa entrevista.",
      "Não indique taxas de exame nem notas mínimas de memória; envie os alunos para asq.org ou iassc.org para as regras atuais."
    ]
  }
};
