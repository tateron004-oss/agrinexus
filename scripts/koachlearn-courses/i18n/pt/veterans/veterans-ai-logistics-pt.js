"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-logistics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: US agencies, sites and benefits keep their names.

module.exports = {
  id: "veterans-ai-logistics-pt",
  lang: "pt",
  translationOf: "veterans-ai-logistics",
  category: "Veterans (military)",
  name: "IA para Logística e Operações",
  skills: "Falar a linguagem civil da cadeia de abastecimento, Saber onde a IA entra na logística, Construir uma folha de reposição de stock, Preparar um horário de entregas com IA, Apresentar um plano de operações",
  outcome: "construir uma folha simples de reposição de stock e um horário de entregas com a ajuda de um assistente de IA e de uma folha de cálculo gratuita, verificar você mesmo as contas e apresentar o plano com os termos civis da logística.",
  about: [
    "Se nas forças armadas você movimentou pessoas, peças, combustível, comida ou veículos, você já fez logística. Os armazéns, as empresas de transporte, os hospitais e as lojas online civis precisam das mesmas habilidades, e hoje usam ferramentas de IA para planear.",
    "Neste curso vai aprender as palavras civis para o que fez, ver onde a IA entra hoje na logística e construir duas ferramentas reais: uma folha de reposição de stock e um horário de entregas. No fim vai apresentar o plano, como apresentaria a um comandante, mas com termos civis.",
    "Cada lição dura cerca de cinco minutos. Precisa de uma folha de cálculo gratuita (Google Sheets ou Microsoft Excel na web) e de um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Faça um resumo de operações de uma página para um pequeno negócio inventado (por exemplo um banco alimentar ou uma loja de peças): uma folha de stock com um ponto de reposição para cinco artigos, um horário de entregas de uma semana preparado com IA e verificado por você, três riscos com um plano alternativo para cada um, e duas linhas de currículo que descrevam o seu trabalho de logística militar com palavras civis.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição que no serviço movimentaram pessoas, peças, combustível, comida ou veículos e querem trabalho civil em armazéns, transporte, hospitais, bancos alimentares ou lojas online.",
    startingPoint: "Conhecem bem o trabalho de abastecimento, transporte e manutenção, e sabem usar um telefone ou um computador. A maioria usa termos militares, nunca construiu uma folha de reposição numa folha de cálculo gratuita e nunca usou IA para planear horários ou ler dados.",
    gap: "Os empregadores civis da logística usam os seus próprios termos e ferramentas de planeamento com IA, e precisam de pessoas que saibam verificar os planos da IA contra os limites reais. Os alunos precisam de falar a linguagem civil da cadeia de abastecimento, construir e verificar uma folha de reposição e um horário com a ajuda da IA, e apresentar um plano com clareza.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; os passos da folha de cálculo são mostrados um de cada vez",
      "Aparelhos: um computador é melhor para folhas de cálculo; uma ferramenta gratuita como o Google Sheets ou o Microsoft Excel online",
      "Privacidade: só negócios inventados; nada de nomes de clientes nem moradas de casa em ferramentas de IA públicas",
      "Verificação das contas: os alunos verificam à mão as fórmulas e os tempos da IA, com uma calculadora e uma aplicação de mapas",
      "Tempo: lições de cerca de 5 minutos, mais prática na folha de cálculo"
    ],
    prerequisites: "Nenhum. Alguma prática com folhas de cálculo ajuda, mas não é obrigatória."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com tarefas de logística do seu serviço", action: "traduzir termos de logística militar para as palavras civis que os empregadores usam", standard: "com cinco termos traduzidos e dois cargos civis que correspondam" },
    { id: "O2", condition: "Com exemplos de IA em armazéns e no transporte", action: "descrever quatro formas de usar a IA na logística e a decisão que uma pessoa ainda toma em cada uma", standard: "dizendo uma coisa que uma pessoa tem de verificar em cada uma" },
    { id: "O3", condition: "Com o consumo diário, o prazo de entrega e o stock de segurança de cinco artigos", action: "construir uma folha de cálculo que calcula quando repor cada artigo", standard: "com uma linha verificada à mão numa calculadora" },
    { id: "O4", condition: "Com paragens, horários, veículos e motoristas", action: "usar um assistente de IA para preparar um horário de entregas de uma semana e verificá-lo contra os limites reais", standard: "corrigindo todos os problemas que encontrar com uma aplicação de mapas e os horários das paragens" },
    { id: "O5", condition: "Com uma pequena tabela de dados de entregas", action: "usar a IA para encontrar padrões e confirmar você mesmo um deles com um filtro da folha de cálculo", standard: "e escrever a causa, uma solução e como a vai medir" },
    { id: "O6", condition: "Usando a sua folha, o seu horário e os seus riscos", action: "apresentar um plano de operações com termos civis e escrever duas linhas de currículo sobre o seu trabalho de logística", standard: "com a situação, o plano, três riscos e uma alternativa para cada um" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Da logística militar às cadeias de abastecimento civis",
      lessons: [
        {
          objectives: ["O1"],
          title: "Falar a linguagem civil da cadeia de abastecimento",
          minutes: 5,
          goal: "Traduzir cinco termos de logística militar para as palavras civis que os empregadores usam.",
          text: [
            "Uma cadeia de abastecimento é cada passo que leva um produto do lugar onde é feito até à pessoa que o usa. A logística é a parte de planear e movimentar dessa cadeia.",
            "Muitos termos militares têm um gémeo civil. Um paiol ou armazém é gestão de stock (inventário). Uma coluna de viaturas é transporte ou carga. Um parque de viaturas é manutenção de frota. O planeamento das classes de abastecimento I a IX é planeamento da procura. O último troço até ao utilizador chama-se \"entrega de última milha\".",
            "O My Next Move for Veterans (mynextmove.org/vets), do Departamento do Trabalho dos EUA, deixa você escrever o seu cargo militar e ver carreiras civis parecidas, como logístico, supervisor de armazém ou despachante."
          ],
          steps: ["Escreva cinco tarefas de logística que fez no serviço.", "Pergunte a um assistente de IA: \"Traduza estas tarefas de logística militar para termos civis da cadeia de abastecimento.\"", "Procure o seu cargo militar em mynextmove.org/vets.", "Escreva os cargos civis que melhor correspondem."],
          words: [["Cadeia de abastecimento", "cada passo desde o fabrico de um produto até à pessoa que o usa."], ["Stock (inventário)", "os artigos que um negócio guarda para usar ou vender."], ["Entrega de última milha", "a viagem final que leva um artigo até ao cliente."], ["3PL", "logística de terceiros: uma empresa contratada para guardar e enviar mercadorias de outro negócio."]],
          slides: [
            { title: "Cadeia de abastecimento e logística", bullets: ["Cadeia de abastecimento: cada passo até ao utilizador", "Logística: a parte de planear e movimentar"] },
            { title: "Do militar ao civil", bullets: ["Paiol ou armazém = gestão de stock", "Coluna de viaturas = transporte ou carga", "Parque de viaturas = manutenção de frota", "Planeamento do abastecimento = planeamento da procura"] },
            { title: "Encontre trabalhos que correspondem", bullets: ["mynextmove.org/vets (Departamento do Trabalho)", "Logístico, supervisor de armazém, despachante"] }
          ],
          sources: [{ name: "My Next Move for Veterans (Departamento do Trabalho dos EUA)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Escreva cinco tarefas de logística do seu serviço. Peça a um assistente de IA para as traduzir para termos civis, depois procure o seu cargo militar em mynextmove.org/vets e escreva dois cargos que correspondam.",
          youCanNow: "descrever o seu trabalho de logística militar com as palavras que os empregadores civis usam.",
          quickCheck: [
            { objective: "O1", q: "O que é uma cadeia de abastecimento?", options: ["Só os camiões que uma empresa tem", "Cada passo desde o fabrico de um produto até à pessoa que o usa", "A porta da frente de um armazém", "Uma lista de telefones de fornecedores"], answer: 1, why: "A cadeia de abastecimento inclui cada passo desde a produção até ao utilizador final." },
            { objective: "O1", q: "O seu currículo diz \"Chefiei o parque de viaturas\". Que palavras civis usa?", options: ["Deixa como \"parque de viaturas\"", "\"Conduzi carros\"", "\"Fiz coisas de veículos\"", "\"Geri a manutenção da frota\""], answer: 3, why: "Um parque de viaturas militar é o mais parecido com a manutenção de frota civil." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Onde a IA entra na logística",
          minutes: 4,
          goal: "Dizer quatro formas de usar a IA na logística e as decisões que as pessoas ainda tomam.",
          text: [
            "As empresas usam a IA para prever a procura (calcular quanto de um artigo as pessoas vão precisar), planear rotas que poupam combustível e tempo, ver cedo os envios atrasados e responder a perguntas dos clientes sobre entregas.",
            "A IA só conhece os dados que lhe dão. Se os dados forem antigos, errados ou faltarem, o plano também vai estar errado. Uma tempestade, uma estrada fechada ou a corrida das festas podem não estar nos dados.",
            "Quem decide continuam a ser as pessoas: verificar se o plano faz sentido, tratar dos imprevistos, manter os motoristas e os trabalhadores em segurança e falar com os clientes. Esse bom senso é exatamente o que a logística militar lhe ensinou."
          ],
          words: [["Previsão", "um cálculo cuidadoso do que vai acontecer, como quanto stock vai precisar."], ["Otimização de rotas", "encontrar a melhor ordem e o melhor caminho para as entregas."], ["Imprevisto (exceção)", "algo que não corre como planeado, como um camião atrasado."]],
          slides: [
            { title: "IA na logística", bullets: ["Prever a procura", "Planear rotas", "Ver envios atrasados", "Responder a perguntas sobre entregas"] },
            { title: "O ponto fraco da IA", bullets: ["Só conhece os dados que lhe dão", "Dados antigos ou em falta = plano errado", "Tempestades e estradas fechadas podem faltar"] },
            { title: "As pessoas ainda decidem", bullets: ["O plano faz sentido?", "Tratar dos imprevistos", "Segurança e clientes"] }
          ],
          tryIt: "Pergunte a um assistente de IA: \"Como é que os armazéns e as empresas de transporte usam a IA hoje? Dê quatro exemplos com palavras simples.\" Ao lado de cada um, escreva uma coisa que uma pessoa ainda tem de verificar.",
          youCanNow: "explicar onde a IA ajuda na logística e onde ainda é preciso o bom senso humano.",
          quickCheck: [
            { objective: "O2", q: "O que é a previsão da procura?", options: ["Encomendar tudo de uma vez", "Contar o stock no fim do ano", "Um cálculo cuidadoso de quanto vai ser preciso", "Uma previsão do tempo para os motoristas"], answer: 2, why: "A previsão da procura calcula quanto vai ser preciso, e a IA ajuda muitas vezes a fazê-la." },
            { objective: "O2", q: "Um plano de rota da IA manda um camião por uma estrada fechada esta manhã. Quem corrige?", options: ["Uma pessoa que sabe que a estrada está fechada", "A IA corrige-se sozinha mais tarde", "O cliente", "Ninguém; siga o plano"], answer: 0, why: "A IA só conhece os dados que tem, por isso são as pessoas que tratam de imprevistos como estradas fechadas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Construir uma folha de reposição de stock",
          minutes: 6,
          goal: "Construir uma folha de cálculo que mostra quando repor cada artigo.",
          text: [
            "O ponto de reposição é o nível de stock que lhe diz para encomendar mais antes de acabar. Uma fórmula simples é: consumo diário vezes prazo de entrega (dias até chegar uma entrega), mais stock de segurança (extra para surpresas).",
            "Exemplo: um banco alimentar usa 20 latas de feijão por dia, a entrega demora 5 dias e guarda 40 a mais. Ponto de reposição = 20 x 5 + 40 = 140. Quando o stock descer para 140, encomende mais.",
            "Um assistente de IA pode ajudar a montar as colunas e a fórmula da folha de cálculo. Teste sempre a fórmula numa linha à mão para ter a certeza de que está certa."
          ],
          steps: ["Abra uma folha nova no Google Sheets ou um livro novo no Excel.", "Faça as colunas: Artigo, Em stock, Consumo diário, Prazo de entrega (dias), Stock de segurança, Ponto de reposição, Encomendar já?", "Peça a um assistente de IA a fórmula do Ponto de reposição e de uma coluna \"Encomendar já?\" com sim/não.", "Acrescente cinco artigos com números inventados.", "Verifique uma linha à mão com uma calculadora."],
          words: [["Ponto de reposição", "o nível de stock que lhe diz para encomendar mais."], ["Prazo de entrega", "quantos dias uma encomenda demora a chegar."], ["Stock de segurança", "stock extra guardado para surpresas."], ["Fórmula", "um cálculo que a folha de cálculo faz por você."]],
          slides: [
            { title: "Ponto de reposição", bullets: ["Consumo diário x prazo de entrega + stock de segurança", "Quando o stock chega a esse número, encomende mais"] },
            { title: "Exemplo: feijão do banco alimentar", bullets: ["20 por dia x 5 dias + 40 extra = 140", "Com 140 latas, faça a encomenda"] },
            { title: "Construa com a ajuda da IA", bullets: ["Peça à IA as fórmulas das colunas", "Acrescente cinco artigos", "Verifique uma linha à mão"] }
          ],
          tryIt: "Construa a folha de reposição com cinco artigos. Peça a um assistente de IA as fórmulas, depois verifique uma linha com uma calculadora e corrija o que estiver errado.",
          youCanNow: "construir uma folha de cálculo que mostra quando cada artigo precisa de ser reposto.",
          quickCheck: [
            { objective: "O3", q: "O que é o stock de segurança?", options: ["Stock que está estragado", "Stock vendido com desconto", "Stock fechado num cofre", "Stock extra guardado para surpresas"], answer: 3, why: "O stock de segurança cobre surpresas como entregas atrasadas ou procura a mais." },
            { objective: "O3", q: "Consumo diário 5, prazo de entrega 6 dias, stock de segurança 10. Qual é o ponto de reposição?", options: ["21", "40", "60", "11"], answer: 1, why: "Consumo diário vezes prazo de entrega (5 x 6 = 30) mais stock de segurança (10) dá 40." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Da logística militar às cadeias de abastecimento civis",
        questions: [
          { objective: "O1", q: "Uma coluna de viaturas militar é mais parecida com que termo civil?", options: ["Folha de salários", "Marketing", "Transporte ou carga", "Recursos humanos"], answer: 2, why: "Movimentar mercadorias em veículos é transporte ou carga." },
          { objective: "O1", q: "O que é a entrega de última milha?", options: ["A viagem final até ao cliente", "A primeira milha de uma volta", "Uma corrida a pé", "Uma fábrica"], answer: 0, why: "É o último troço até à pessoa que usa o artigo." },
          { objective: "O2", q: "Porque é que um plano de rota da IA pode estar errado?", options: ["Os camiões nunca avariam", "A IA está sempre certa", "Os mapas nunca mudam", "A IA só conhece os dados que lhe dão"], answer: 3, why: "Dados em falta ou antigos levam a planos errados." },
          { objective: "O3", q: "Consumo diário 10, prazo de entrega 4 dias, stock de segurança 20. Qual é o ponto de reposição?", options: ["14", "34", "40", "60"], answer: 3, why: "10 x 4 + 20 = 60." },
          { objective: "O3", q: "Depois de uma IA escrever uma fórmula da folha de cálculo por você, deve:", options: ["Nunca olhar para ela", "Verificar uma linha à mão", "Apagar a folha", "Partilhá-la sem verificar"], answer: 1, why: "Uma verificação à mão prova que a fórmula está certa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear e apresentar operações",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparar um horário de entregas com IA",
          minutes: 5,
          goal: "Usar um assistente de IA para preparar um horário de entregas de uma semana e verificá-lo contra os limites reais.",
          text: [
            "Um horário de entregas diz quem vai aonde, quando e com o quê. A IA pode preparar um depressa se lhe der os dados: paragens, horários de abertura, número de veículos e de motoristas, horas dos motoristas e o que cada paragem precisa.",
            "Depois verifique-o como um plano de coluna de viaturas. Os tempos de viagem são realistas num mapa real? Os motoristas têm pausas? Alguma paragem recebe uma entrega quando está fechada?",
            "Use só dados inventados ou seguros para o negócio. Não cole nomes de clientes, moradas de casa nem nada que o seu empregador não tenha aprovado para ferramentas de IA."
          ],
          steps: ["Escreva as paragens, os horários, os veículos, os motoristas e o que cada paragem precisa.", "Pergunte a um assistente de IA: \"Faça um horário de entregas de uma semana numa tabela com estes limites.\"", "Verifique os tempos de viagem numa aplicação de mapas.", "Verifique as pausas, os horários de abertura e o espaço nos veículos.", "Corrija o horário e guarde-o ao lado da sua folha de stock."],
          words: [["Horário de entregas", "um plano de quem entrega o quê, onde e quando."], ["Restrição", "um limite que o plano tem de respeitar, como os horários de abertura ou as horas dos motoristas."]],
          slides: [
            { title: "Dê os dados à IA", bullets: ["Paragens e horários de abertura", "Veículos e motoristas", "O que cada paragem precisa"] },
            { title: "Verifique como um plano de coluna", bullets: ["Tempos de viagem reais num mapa", "Pausas dos motoristas", "Nenhuma entrega em paragens fechadas"] },
            { title: "Proteja os dados", bullets: ["Só dados inventados ou aprovados", "Nada de nomes de clientes nem moradas de casa"] }
          ],
          tryIt: "Para um banco alimentar inventado com três pontos de distribuição e uma carrinha, peça a um assistente de IA um horário de entregas de uma semana numa tabela. Verifique-o numa aplicação de mapas e corrija um problema que encontrar.",
          youCanNow: "preparar um horário de entregas com IA e verificá-lo contra os limites do mundo real.",
          quickCheck: [
            { objective: "O4", q: "O que é uma restrição num horário de entregas?", options: ["Um limite que o plano tem de respeitar, como os horários de abertura", "Um bónus para os motoristas", "Uma paragem a mais", "Um tipo de camião"], answer: 0, why: "As restrições são limites como horários, veículos e motoristas que o horário tem de respeitar." },
            { objective: "O4", q: "O horário da IA diz que uma viagem de 40 milhas demora 15 minutos. O que faz?", options: ["Confia", "Tira a paragem", "Verifica o tempo numa aplicação de mapas e corrige o horário", "Diz ao motorista para ir mais depressa"], answer: 2, why: "Você compara os tempos de viagem da IA com uma aplicação de mapas e corrige o que não for realista." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar problemas nos dados de operações",
          minutes: 5,
          goal: "Usar a IA para resumir uma pequena tabela de dados e confirmar você mesmo o que ela encontra.",
          text: [
            "As equipas de operações olham para dados todos os dias: entregas atrasadas, artigos a acabar, mercadoria danificada. A IA pode resumir uma tabela e apontar padrões, como \"As entregas de terça-feira são as que mais se atrasam.\"",
            "Trate o que a IA encontra como informação de reconhecimento: útil, mas confirme antes de agir. Ordene ou filtre você mesmo a folha de cálculo para ver se o padrão é real.",
            "Quando encontrar um problema real, escreva a causa que acha que é, uma solução e como vai saber que a solução funcionou."
          ],
          steps: ["Faça uma pequena tabela: data, paragem, a tempo (sim/não), motivo do atraso.", "Pergunte a um assistente de IA: \"Que padrões vê nesta tabela?\"", "Ordene ou filtre você mesmo a folha para confirmar.", "Escreva: problema, causa provável, solução, como a vai medir."],
          words: [["Padrão", "algo que acontece muitas vezes nos dados."], ["Filtro", "uma ferramenta da folha de cálculo que mostra só as linhas que você escolhe."]],
          slides: [
            { title: "A IA pode resumir dados", bullets: ["Entregas atrasadas, stock baixo, danos", "Ela aponta padrões"] },
            { title: "Trate como informação de reconhecimento", bullets: ["Útil, mas confirme antes de agir", "Ordene ou filtre você mesmo a folha"] },
            { title: "Escreva a solução", bullets: ["Problema e causa provável", "A solução", "Como a vai medir"] }
          ],
          tryIt: "Faça uma tabela de entregas com 10 linhas e algumas entregas atrasadas. Peça a um assistente de IA os padrões, depois filtre você mesmo a folha para confirmar um e escreva uma solução.",
          youCanNow: "usar a IA para encontrar um padrão nos dados de operações e confirmá-lo antes de agir.",
          quickCheck: [
            { objective: "O5", q: "O que faz um filtro da folha de cálculo?", options: ["Apaga linhas para sempre", "Mostra só as linhas que você escolhe", "Aumenta os números", "Envia a folha por email"], answer: 1, why: "Um filtro esconde as linhas de que não precisa para você verificar um padrão sozinho." },
            { objective: "O5", q: "A IA diz que a maioria das entregas atrasadas vem de um motorista. O que faz?", options: ["Fala logo com o motorista", "Ignora", "Apaga as linhas desse motorista", "Filtra você mesmo os dados para confirmar antes de agir"], answer: 3, why: "Trate o que a IA encontra como informação de reconhecimento: útil, mas confirme antes de agir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Apresentar o plano e encontrar trabalho",
          minutes: 5,
          goal: "Apresentar um plano de operações com termos civis e ligá-lo ao seu próximo passo no trabalho.",
          text: [
            "Os gestores civis gostam de apresentações curtas, tal como os comandantes: a situação, o plano, os riscos e os planos alternativos, e o que precisa deles. Use palavras civis: \"stock\", \"horário de entregas\", \"taxa de pontualidade\".",
            "Transforme o seu serviço em linhas de currículo com números, por exemplo: \"Geri um stock de 1200 artigos no valor de $2 milhões sem nenhuma perda na auditoria.\" Use só números que consegue confirmar.",
            "Para ajuda com emprego, o Serviço de Emprego e Formação para Veteranos (VETS) do Departamento do Trabalho dos EUA gere o Programa de Assistência à Transição (TAP) e indica aprendizagens profissionais. Se tem o GI Bill, o apoio de formação no trabalho e aprendizagem do VA pode pagar um valor mensal enquanto se forma com um empregador aprovado. Veja nas páginas oficiais quem tem direito."
          ],
          steps: ["Escreva a apresentação: situação, plano, riscos, alternativas, o que precisa.", "Use termos civis do princípio ao fim.", "Escreva duas linhas de currículo com números reais.", "Veja dol.gov/agencies/vets e a página de formação no trabalho do va.gov para os próximos passos."],
          words: [["Apresentação (briefing)", "um resumo curto, falado ou escrito, de um plano para quem decide."], ["Taxa de pontualidade", "a parte das entregas que chega quando foi prometido."]],
          slides: [
            { title: "Apresente como fazia no serviço", bullets: ["Situação, plano, riscos, alternativas", "O que precisa deles", "Com palavras civis"] },
            { title: "Linhas de currículo com números", bullets: ["\"Geri 1200 artigos no valor de $2M, zero perdas\"", "Só números que consegue confirmar"] },
            { title: "Ajuda oficial", bullets: ["DOL VETS: TAP e aprendizagens profissionais", "Formação no trabalho do VA (GI Bill)", "Veja quem tem direito nas páginas oficiais"] }
          ],
          sources: [
            { name: "Departamento do Trabalho dos EUA, Veterans' Employment and Training Service (VETS)", url: "https://www.dol.gov/agencies/vets" },
            { name: "VA: formação no trabalho e aprendizagens (On-the-job training and apprenticeships)", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Tarefa final: junte a sua folha de reposição, o horário de entregas verificado, três riscos com alternativas e duas linhas de currículo num resumo de operações de uma página.",
          youCanNow: "planear o stock e as entregas com a ajuda da IA, verificar você mesmo o plano e apresentá-lo com termos civis.",
          quickCheck: [
            { objective: "O6", q: "O que entra numa boa apresentação de operações?", options: ["Só as boas notícias", "Uma longa história da sua carreira", "Situação, plano, riscos e alternativas", "Cada linha da sua folha de cálculo"], answer: 2, why: "Uma apresentação dá a situação, o plano e os riscos com alternativas, de forma curta e clara." },
            { objective: "O6", q: "Que linha de currículo descreve melhor o trabalho de logística militar para um empregador civil?", options: ["\"Geri 800 artigos no valor de $1M sem nenhuma perda na auditoria.\"", "\"Fui NCOIC da secção S4.\"", "\"Fiz abastecimento.\"", "\"Tratei da CL IX.\""], answer: 0, why: "Usa palavras civis, um tamanho e um resultado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear e apresentar operações",
        questions: [
          { objective: "O4", q: "O que deve dar à IA para preparar um horário de entregas?", options: ["O acesso ao seu banco", "Só a palavra \"horário\"", "Moradas de casa dos clientes", "Paragens, horários, veículos, motoristas e necessidades"], answer: 3, why: "Os limites reais deixam a IA preparar um plano que se pode usar." },
          { objective: "O4", q: "O horário da IA manda uma carrinha a uma paragem quando está fechada. Você deve:", options: ["Corrigir o horário", "Mantê-lo na mesma", "Despedir o motorista", "Fechar o negócio"], answer: 0, why: "Verificar contra os limites é o seu trabalho." },
          { objective: "O5", q: "A IA diz que as terças-feiras são as que mais se atrasam. E agora?", options: ["Ignorar", "Cancelar as terças-feiras", "Filtrar você mesmo os dados para confirmar", "Publicar na internet"], answer: 2, why: "Confirme antes de agir, como faria com informação de reconhecimento." },
          { objective: "O6", q: "Uma boa apresentação de operações inclui:", options: ["Nenhum plano", "Só piadas", "Só códigos militares", "Situação, plano, riscos e alternativas"], answer: 3, why: "É disso que quem decide precisa." },
          { objective: "O6", q: "Que apoio do VA pode pagar um valor mensal enquanto se forma com um empregador aprovado?", options: ["Seguro de vida", "Crédito à habitação", "Formação no trabalho e aprendizagens", "Apoio para funeral"], answer: 2, why: "O va.gov descreve um pagamento mensal durante a formação no trabalho ou a aprendizagem aprovada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Logística e Operações",
    questions: [
      { objective: "O1", q: "Uma cadeia de abastecimento é:", options: ["Uma corrente num camião", "Cada passo desde o fabrico de um produto até à pessoa que o usa", "Um tipo de contrato", "A porta de um armazém"], answer: 1, why: "Inclui todo o caminho até ao utilizador." },
      { objective: "O1", q: "Um parque de viaturas militar é mais parecido com:", options: ["Manutenção de frota", "Contabilidade", "Marketing", "Jurídico"], answer: 0, why: "Os dois fazem a manutenção dos veículos." },
      { objective: "O1", q: "O que é uma 3PL?", options: ["Um posto militar", "Um tipo de camião", "Uma empresa contratada para guardar e enviar mercadorias de outro negócio", "Uma folha de cálculo"], answer: 2, why: "As empresas de logística de terceiros tratam do armazenamento e do envio." },
      { objective: "O1", q: "Que site gratuito liga os cargos militares a carreiras civis?", options: ["My Next Move for Veterans", "Uma aplicação de música", "Um site de compras", "Um jogo"], answer: 0, why: "O mynextmove.org/vets é gerido para o Departamento do Trabalho." },
      { objective: "O2", q: "Prever a procura quer dizer:", options: ["Contratar motoristas", "Entregar mais depressa", "Pintar camiões", "Um cálculo cuidadoso de quanto vai ser preciso"], answer: 3, why: "Uma previsão calcula a necessidade futura." },
      { objective: "O2", q: "O que pode escapar a um planeador de rotas com IA?", options: ["O número de paragens que lhe deu", "Uma estrada fechada esta manhã", "O mapa", "A palavra \"rota\""], answer: 1, why: "Os acontecimentos novos podem não estar nos seus dados." },
      { objective: "O2", q: "Quem trata de imprevistos como um camião atrasado?", options: ["Ninguém", "As pessoas", "Só a IA", "O cliente"], answer: 1, why: "O bom senso humano trata dos imprevistos." },
      { objective: "O3", q: "O prazo de entrega é:", options: ["As horas em que uma loja está aberta", "O tempo que um motorista chefia uma coluna", "A hora do almoço", "Os dias que uma encomenda demora a chegar"], answer: 3, why: "O prazo de entrega é a espera por uma entrega." },
      { objective: "O3", q: "O stock de segurança é:", options: ["Stock extra guardado para surpresas", "Stock fechado à chave", "Mercadoria danificada", "Stock vendido hoje"], answer: 0, why: "Cobre procura inesperada ou atrasos." },
      { objective: "O3", q: "Consumo diário 20, prazo de entrega 5, stock de segurança 40. Ponto de reposição?", options: ["25", "65", "100", "140"], answer: 3, why: "20 x 5 + 40 = 140." },
      { objective: "O3", q: "Como sabe que uma fórmula escrita pela IA está certa?", options: ["Apaga-a", "Confia nela", "Pergunta só a outra IA", "Verifica uma linha à mão"], answer: 3, why: "Uma verificação à mão confirma as contas." },
      { objective: "O4", q: "Uma restrição num horário é:", options: ["Uma entrega", "Um tipo de camião", "Um limite que o plano tem de respeitar", "Um cliente"], answer: 2, why: "Os horários de abertura e as horas dos motoristas são restrições." },
      { objective: "O4", q: "Como verifica os tempos de viagem da IA?", options: ["Adivinha", "Compara com uma aplicação de mapas", "Pede ao motorista para se apressar", "Ignora-os"], answer: 1, why: "Uma aplicação de mapas dá tempos realistas." },
      { objective: "O4", q: "O que NÃO deve ir para uma ferramenta de IA pública?", options: ["Nomes e moradas de casa dos clientes", "Paragens inventadas", "Horários de abertura de uma loja inventada", "Número de carrinhas"], answer: 0, why: "Os dados dos clientes são privados." },
      { objective: "O5", q: "O que a IA encontra nos dados deve ser tratado como:", options: ["Piadas", "Ordens que tem de cumprir", "Informação de reconhecimento: útil, mas confirme antes de agir", "A verdade final"], answer: 2, why: "Confirmar evita agir com base num erro." },
      { objective: "O5", q: "Um filtro da folha de cálculo deixa você:", options: ["Mostrar só as linhas que escolhe", "Apagar a folha", "Imprimir mais depressa", "Mudar a letra"], answer: 0, why: "Os filtros ajudam a verificar padrões." },
      { objective: "O5", q: "Depois de encontrar um problema real, escreva:", options: ["Uma palavra-passe nova", "Só quem tem a culpa", "Nada", "A causa, uma solução e como a vai medir"], answer: 3, why: "Uma solução medida prova que funcionou." },
      { objective: "O5", q: "Taxa de pontualidade quer dizer:", options: ["A velocidade do motorista", "A parte das entregas que chega quando foi prometido", "O custo do combustível", "O número de camiões"], answer: 1, why: "Mede as promessas cumpridas." },
      { objective: "O6", q: "Que linha de currículo é a mais forte?", options: ["\"Fiz coisas de abastecimento.\"", "\"Geri 1200 artigos no valor de $2M sem nenhuma perda na auditoria.\"", "\"Trabalhei muito.\"", "\"Exército.\""], answer: 1, why: "Os números e os resultados mostram o seu impacto." },
      { objective: "O6", q: "O serviço do DOL que gere os programas de emprego para veteranos, incluindo o TAP, é:", options: ["EPA", "IRS", "FAA", "VETS"], answer: 3, why: "O Veterans' Employment and Training Service gere o TAP para o DOL." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 5, 9, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Folha de reposição", objective: "O3", notYet: "Menos de cinco artigos, ou os pontos de reposição estão errados.", meets: "Cinco artigos com pontos de reposição certos, uma linha verificada à mão.", exceeds: "A folha assinala os artigos que estão no ponto de reposição ou abaixo dele." },
      { name: "Horário de entregas verificado", objective: "O4", notYet: "O horário da IA foi usado sem verificação, ou não respeita um limite.", meets: "Um horário de uma semana que respeita os horários das paragens, os veículos e os motoristas, com os tempos de viagem verificados numa aplicação de mapas.", exceeds: "O aluno diz o problema que encontrou e como o corrigiu." },
      { name: "Riscos e alternativas", objective: "O6", notYet: "Menos de três riscos, ou riscos sem alternativa.", meets: "Três riscos, cada um com um plano alternativo.", exceeds: "Cada alternativa diz quem age e quando." },
      { name: "Linhas de currículo civis", objective: "O1", notYet: "As linhas usam termos militares ou não têm resultado.", meets: "Duas linhas com palavras civis da logística, com um tamanho ou um resultado.", exceeds: "As linhas correspondem a um cargo civil do My Next Move for Veterans." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a um trabalho civil de logística, armazém ou transporte em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem um trabalho de logística, uma aprendizagem ou uma formação no trabalho em 90 dias",
      "Bancos alimentares parceiros ou pequenos negócios que usam a folha de reposição ou o horário de um aluno"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "Uma folha de cálculo gratuita: Google Sheets ou Microsoft Excel online",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini, e uma aplicação de mapas",
      "Uma calculadora",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Dê a todos os alunos o mesmo banco alimentar ou loja de peças inventada, para poderem comparar folhas e horários.",
      "Faça no quadro um cálculo do ponto de reposição antes de os alunos construírem as suas folhas.",
      "Use só paragens e dados inventados; nunca ponha nomes reais de clientes nem moradas de casa numa IA pública.",
      "Peça aos alunos para apresentarem o seu plano em voz alta em dois minutos, como fariam a um gestor civil.",
      "Avalie o resumo de operações com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
