"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-digital-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KOBO = { name: "KoboToolbox (formulários gratuitos de recolha de dados que funcionam sem rede)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner (Gabinete do Comissário para a Proteção de Dados, Quénia)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC, Comissão de Proteção de Dados da Nigéria)", url: "https://ndpc.gov.ng" };
const GH_DPC = { name: "Data Protection Commission, Gana (Comissão de Proteção de Dados; Lei de Proteção de Dados de 2012, Act 843)", url: "https://dpc.gov.gh/" };
const FAO_CHILD = { name: "FAO: Trabalho infantil na agricultura", url: "https://www.fao.org/childlabouragriculture/en/" };

module.exports = {
  id: "agri-digital-farm-management-pt",
  lang: "pt",
  translationOf: "agri-digital-farm-management",
  category: "Agriculture (Africa)",
  name: "Gerir a Machamba com Dados e Aplicações Móveis",
  skills: "Escolher uma aplicação agrícola ou uma folha de cálculo partilhada, Criar um registo da machamba e do stock de insumos, Pagar os trabalhadores por dinheiro móvel com registos, Proteger os dados da machamba e dos trabalhadores, Gerir um gerente à distância, Acompanhar todas as semanas um painel de cinco números",
  outcome: "gerir a sua machamba a partir do telefone: manter um só registo dos campos, dos animais, do trabalho, dos trabalhadores e do stock de insumos, pagar os trabalhadores por dinheiro móvel com um registo de cada pagamento, receber do seu gerente um relatório diário que pode verificar e olhar para cinco números todas as semanas para decidir o que fazer a seguir.",
  about: [
    "Este curso é para agricultores que estão a crescer: tem trabalhadores, vários campos ou uma manada ou um bando de aves, e talvez viva na cidade enquanto um gerente cuida da machamba. Serve para pequenos produtores comerciais, jovens empreendedores agrícolas, donos que vivem longe, em Nairobi, Lagos, Acra ou Dacar, e os gerentes que lhes prestam contas.",
    "Vai além dos registos básicos. Vai escolher uma aplicação de gestão agrícola ou uma folha de cálculo partilhada, criar um registo de campos, animais, atividades e stock de insumos, pagar e registar os trabalhadores por dinheiro móvel, proteger os dados da machamba e dos trabalhadores, combinar com um gerente uma rotina de relatórios diários que pode verificar e montar um painel semanal de cinco números.",
    "O curso não recomenda nenhuma aplicação. Mostra as funções que deve procurar, para poder avaliar qualquer aplicação ou montar o mesmo sistema numa folha de cálculo gratuita. Os valores em dinheiro são só exemplos. Cada lição acaba com uma tarefa na sua própria machamba; uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso. Se nunca fez registos da machamba, faça primeiro o curso \"Dados e Tecnologia Agrícolas\"."
  ],
  finalTask: "Monte um painel semanal para a sua machamba (com números reais ou de exemplo): cinco números, cada um com a sua origem no registo, uma meta ou intervalo normal e a ação a tomar se estiver fora. Depois escreva uma rotina de relatórios de uma página para quem cuida da machamba no dia a dia: o que tem o relatório diário no WhatsApp (fotos, números, problemas), a que horas deve chegar, o encontro semanal, como vai verificar (visitas de surpresa, contagens do stock, extratos do dinheiro móvel) e quem pode ver que dados.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, jovens empreendedores agrícolas, donos que vivem longe da machamba e gerentes agrícolas no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim e em toda a África. Muitos têm culturas e animais ao mesmo tempo (milho, tomate, aves, cabritos, porcos, tilápia) e empregam trabalhadores eventuais ou permanentes.",
    startingPoint: "Usam o smartphone todos os dias para chamadas, WhatsApp e dinheiro móvel. Alguns anotam num caderno ou numa folha simples. Poucos têm um só sistema que junte campos, animais, trabalhadores, dinheiro e stock, e muitos donos dependem de chamadas para saber o que se passa na machamba.",
    gap: "Quando a machamba cresce, o dinheiro perde-se em dias de trabalho não registados, insumos que desaparecem, animais mortos descobertos tarde e decisões tomadas a adivinhar. Os alunos precisam de um sistema simples que junte registos, pagamentos e relatórios, e do hábito de olhar para poucos números todas as semanas, para poderem gerir à distância e ver os problemas cedo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o curso também existe em espanhol, francês e árabe",
      "Aparelhos: um telefone Android barato; um computador ajuda mas não é obrigatório",
      "Rede: a rede é fraca em muitas machambas, por isso as ferramentas têm de funcionar sem rede ou pelo WhatsApp",
      "Dinheiro: primeiro as ferramentas gratuitas; nenhuma aplicação é recomendada; todos os valores são exemplos",
      "As leis de proteção de dados aplicam-se aos dados dos trabalhadores (o Quénia, a Nigéria, o Gana e outros países têm estas leis)",
      "Nenhum PIN, palavra-passe ou número de identificação em nenhuma tarefa de prática"
    ],
    prerequisites: "Saber usar bem um smartphone, o WhatsApp e o dinheiro móvel. Recomenda-se fazer primeiro \"Dados e Tecnologia Agrícolas\" (registos básicos e folhas de cálculo)."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista do que a sua machamba precisa de acompanhar", action: "comparar aplicações de gestão agrícola ou uma folha de cálculo partilhada com uma lista de funções e escolher uma", standard: "dando pontos a pelo menos duas opções e escrevendo a razão da sua escolha" },
    { id: "O2", condition: "Usando a ferramenta que escolheu", action: "criar um registo da machamba com campos, animais, atividades e stock de insumos, com nomes e unidades fixos", standard: "para que cada registo possa ser somado por campo, grupo de animais ou insumo" },
    { id: "O3", condition: "Com uma semana de trabalho de trabalhadores eventuais e permanentes", action: "registar os dias e as tarefas de cada trabalhador e pagá-los por dinheiro móvel com um registo que confere", standard: "para que cada pagamento tenha data, trabalhador, tarefa, valor e código da transação" },
    { id: "O4", condition: "Quando um gerente ou um familiar cuida da machamba enquanto você está fora", action: "escrever uma rotina de relatórios diários com fotos e mensagens no WhatsApp, um encontro semanal e visitas de surpresa", standard: "dizendo o que relatar, até quando e como vai verificar" },
    { id: "O5", condition: "Usando o registo da sua machamba", action: "montar um painel semanal de cinco números e a ação que cada um provoca", standard: "atualizado todas as semanas a partir dos registos, e não de memória" },
    { id: "O6", condition: "Quando recolhe dados sobre a sua machamba e os seus trabalhadores", action: "decidir que dados recolher, quem os pode ver e como os proteger", standard: "recolhendo só o que precisa e sem partilhar PINs, palavras-passe ou números de identificação" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Montar o sistema da sua machamba",
      lessons: [
        {
          title: "Escolher uma aplicação agrícola ou uma folha de cálculo partilhada",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher uma aplicação de gestão agrícola ou uma folha de cálculo partilhada, dando pontos a cada uma com uma lista de funções.",
          text: [
            "Uma aplicação de gestão agrícola guarda os seus campos, animais, trabalho, stock e dinheiro num só lugar, no telefone. Há muitas e mudam muitas vezes, por isso este curso não recomenda nenhuma. Uma folha de cálculo partilhada gratuita (Google Sheets ou Microsoft Excel) pode fazer o mesmo trabalho se for bem montada. O que importa é que você e os seus trabalhadores a usem mesmo todos os dias.",
            "Comece pelo que precisa de acompanhar e depois dê pontos a cada opção. Funções a procurar: funciona sem rede e sincroniza depois (muitas machambas têm rede fraca); campos e grupos de animais em registos separados; uma forma simples de anotar atividades e insumos; stock que desce quando os insumos são usados; registos de trabalhadores e de pagamentos; fotos; vários utilizadores com acessos diferentes (um trabalhador pode anotar dados mas não ver os salários); exportação para uma folha de cálculo, para que os seus dados nunca fiquem presos; a sua língua; e um preço e uma política de privacidade claros.",
            "Tenha cuidado com aplicações que são gratuitas porque vendem os seus dados, que precisam de uma ligação rápida ou que não deixam sair com os seus dados. Pergunte a outros agricultores da sua zona o que usam, experimente qualquer aplicação durante duas semanas com registos reais e veja o preço depois do período gratuito antes de pôr nela todos os seus registos."
          ],
          steps: ["Faça a lista do que tem de acompanhar: campos, animais, trabalho, trabalhadores, stock, vendas.", "Escolha duas ou três opções, incluindo uma folha de cálculo partilhada gratuita.", "Dê pontos a cada uma com a lista: sem rede, utilizadores e acessos, stock, trabalhadores, fotos, exportação, língua, preço, privacidade.", "Experimente a melhor durante duas semanas com registos reais.", "Escreva a sua escolha e a razão."],
          words: [["Aplicação de gestão agrícola", "um programa no telefone ou na internet para registar e organizar os campos, os animais, o trabalho, o stock e o dinheiro de uma machamba."], ["Sincronizar", "quando uma aplicação envia para a internet os dados guardados no telefone, logo que há rede."], ["Exportar", "tirar os seus dados de uma aplicação, por exemplo como um ficheiro de folha de cálculo."]],
          slides: [
            { title: "Aplicação ou folha partilhada?", bullets: ["As duas podem funcionar", "O que importa: você e os trabalhadores usam-na todos os dias", "Nenhuma aplicação é recomendada aqui: avalie pelas funções"] },
            { title: "Funções a procurar", bullets: ["Funciona sem rede, sincroniza depois", "Campos, animais, atividades, stock, trabalhadores", "Vários utilizadores com acessos diferentes", "Exportação para uma folha de cálculo"] },
            { title: "Sinais de alerta", bullets: ["Gratuita porque vende os seus dados", "Precisa de uma ligação rápida", "Não consegue tirar os seus dados", "Preço pouco claro depois do período gratuito"] },
            { title: "Decidir", bullets: ["Dê pontos a duas ou três opções", "Experimente uma durante duas semanas", "Escreva a sua escolha e a razão"] }
          ],
          tryIt: "Escreva a lista do que a sua machamba tem de acompanhar. Faça uma tabela de pontos com as funções da lista de lado e duas ou três opções em cima (uma pode ser uma folha de cálculo partilhada gratuita). Dê pontos a cada uma e escreva a sua escolha e a razão.",
          youCanNow: "avaliar qualquer aplicação agrícola ou folha de cálculo pelas suas funções e escolher uma com uma razão clara.",
          quickCheck: [
            { objective: "O1", q: "A sua machamba em Kakamega muitas vezes não tem rede. Que função importa mais?", options: ["Cores vivas", "Funciona sem rede e sincroniza depois", "Um grande número de descargas", "Videochamadas"], answer: 1, why: "Se a aplicação não guarda registos sem rede, os trabalhadores deixam de a usar." },
            { objective: "O1", q: "Porque verificar se uma aplicação consegue exportar os seus dados?", options: ["Para que os seus registos nunca fiquem presos numa só aplicação", "Para o telefone ficar mais rápido", "Porque a lei obriga todos os agricultores a exportar", "Para ter um desconto"], answer: 0, why: "Exportar deixa-o passar os seus registos para uma folha de cálculo ou outra aplicação a qualquer momento." }
          ]
        },
        {
          title: "Criar o registo de campos, animais, atividades e stock de insumos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Criar um registo da machamba com nomes e unidades fixos e uma lista do stock de insumos.",
          text: [
            "O registo é a coluna vertebral do sistema. Dê a cada campo um nome curto fixo e o tamanho (por exemplo \"C1 Tomate 0,5 acre\"), e a cada grupo de animais ou tanque um nome e o número de animais (\"Poedeiras Pavilhão A, 500 aves\", \"Cabritos 24\", \"Tanque 2 tilápia\"). Use os mesmos nomes em todos os registos, para poder somar o custo e a produção por campo ou grupo.",
            "Depois faça um diário de atividades: data, campo ou grupo, atividade (sementeira, sacha, pulverização, alimentação, vacinação pelo veterinário, colheita, venda), quantidade, unidade, custo, quem fez e uma foto se for útil. Fixe as unidades: quilogramas, litros, sacos de 50 kg, caixas, cartelas de 30 ovos. Unidades misturadas dão totais errados.",
            "Acrescente uma lista do stock de insumos: cada insumo com a sua unidade, entradas, gasto e o que resta. Quando um trabalhador regista \"2 sacos de NPK usados no C1\", o que resta deve descer dois. Conte o armazém e compare com a lista todas as semanas. Se a contagem e o registo não batem certo, encontrou uma perda, um erro de registo ou um roubo, e pode perguntar porquê na mesma semana."
          ],
          steps: ["Dê nome a cada campo com o tamanho, e a cada grupo de animais, tanque ou pavilhão com o número de animais.", "Fixe as unidades de cada coisa: kg, litros, sacos de 50 kg, caixas, cartelas.", "Faça o diário de atividades: data, campo ou grupo, atividade, quantidade, unidade, custo, quem, foto.", "Faça a lista do stock: insumo, unidade, entradas, gasto, resta.", "Conte o armazém todas as semanas e compare com a lista."],
          words: [["Registo", "a lista principal dos seus campos, grupos de animais e insumos, a que todos os outros registos se referem."], ["Unidade", "aquilo em que mede, como quilogramas, litros ou sacos de 50 kg."], ["Contagem do stock", "contar com as mãos o que está no armazém e comparar com os registos."]],
          slides: [
            { title: "Nomes fixos", bullets: ["Campos com tamanho: C1 Tomate 0,5 acre", "Grupos de animais com número: Poedeiras Pavilhão A, 500", "Os mesmos nomes em todos os registos"] },
            { title: "O diário de atividades", bullets: ["Data, campo ou grupo, atividade", "Quantidade, unidade, custo", "Quem fez, foto"] },
            { title: "Stock de insumos", bullets: ["Entradas, gasto e o que resta de cada insumo", "Unidades fixas: kg, litros, sacos de 50 kg"] },
            { title: "Contagem semanal", bullets: ["Conte o armazém", "Compare com a lista", "Não bate certo? Pergunte porquê esta semana"] }
          ],
          tryIt: "Na ferramenta que escolheu, crie o registo da sua machamba: cada campo ou grupo de animais com o tamanho ou o número, um diário de atividades com pelo menos cinco registos reais desta semana e uma lista do stock com pelo menos quatro insumos. Depois conte um insumo no seu armazém e compare com a lista.",
          youCanNow: "criar um registo da machamba que soma por campo, grupo de animais e insumo, e verificar o seu stock com ele.",
          quickCheck: [
            { objective: "O2", q: "Um trabalhador escreve \"2 sacos\" e outro escreve \"100 kg\" para o mesmo adubo. Qual é a solução?", options: ["Ignorar; o total fica perto que chegue", "Apagar os dois registos", "Fixar uma unidade para esse insumo e usá-la sempre", "Deixar de registar o adubo"], answer: 2, why: "Unidades fixas permitem somar os registos corretamente." },
            { objective: "O2", q: "A lista do stock diz 6 sacos de ração para poedeiras, mas o armazém tem 4. O que faz?", options: ["Volta a pôr 6 na lista", "Espera até ao fim da época", "Compra mais 2 sacos e não diz nada", "Pergunta esta semana porque não batem certo: erro de registo, perda ou roubo"], answer: 3, why: "Uma contagem semanal apanha as diferenças enquanto são pequenas e fáceis de explicar." }
          ]
        },
        {
          title: "Acompanhar o trabalho e pagar os trabalhadores por dinheiro móvel",
          objectives: ["O3"],
          minutes: 6,
          goal: "Registar os dias e as tarefas de cada trabalhador e pagá-los por dinheiro móvel com um registo que confere.",
          text: [
            "A mão de obra é muitas vezes o maior custo de uma machamba em crescimento, e o menos registado. Tenha uma lista de trabalhadores (nome, número de telefone para o dinheiro móvel, valor por dia ou por mês, data de início) e um diário de presenças e tarefas: data, trabalhador, campo ou grupo, tarefa, dias ou horas. Um encarregado pode enviá-lo como foto da folha de presenças pelo WhatsApp ou preencher um formulário partilhado todas as noites.",
            "Pague por dinheiro móvel sempre que puder: M-Pesa no Quénia, MTN MoMo no Gana, Orange Money ou Wave no Senegal e na Costa do Marfim, ou uma transferência bancária ou de dinheiro móvel na Nigéria. Assim cada pagamento tem um código da transação. Copie a data, o trabalhador, o valor e o código da transação para o seu registo de pagamentos, ao lado dos dias trabalhados. No fim da semana, os dias vezes o valor por dia devem dar o que pagou. Só como exemplo: 6 dias x KES 500 = KES 3,000, ou 5 dias x NGN 4,000 = NGN 20,000.",
            "Pague de forma justa e a tempo, e confirme o salário mínimo legal e as regras do trabalho no ministério do trabalho do seu país. Não deixe crianças fazer trabalhos perigosos na machamba, como pulverizar, mexer em químicos ou usar máquinas. Diga aos trabalhadores o que regista e porquê, e confirme cada pagamento com eles, para que o registo proteja os dois lados."
          ],
          steps: ["Tenha uma lista de trabalhadores: nome, número do dinheiro móvel, valor, data de início.", "Registe as presenças e as tarefas todos os dias.", "Pague por dinheiro móvel e copie o código da transação para o registo de pagamentos.", "Todas as semanas verifique: dias x valor = valor pago.", "Confirme cada pagamento com o trabalhador."],
          words: [["Trabalhador eventual", "um trabalhador pago por dia ou por tarefa, e não com contrato mensal."], ["Código da transação", "o código único na mensagem do dinheiro móvel que prova que um pagamento foi feito."], ["Folha de salários", "o registo de quem recebe quanto e quando."]],
          slides: [
            { title: "Mão de obra: custo grande, poucos registos", bullets: ["Lista de trabalhadores: nome, número, valor", "Diário: data, trabalhador, campo, tarefa, dias"] },
            { title: "Pague com rasto", bullets: ["M-Pesa, MTN MoMo, Orange Money, Wave", "Copie o código da transação para o registo", "Só como exemplo: 6 dias x KES 500 = KES 3,000"] },
            { title: "Verificação semanal", bullets: ["Dias x valor = valor pago", "Confirme com cada trabalhador"] },
            { title: "Pague de forma justa e legal", bullets: ["Confirme o salário mínimo no ministério do trabalho", "Nenhum trabalho perigoso para crianças", "Diga aos trabalhadores o que regista"] }
          ],
          sources: [FAO_CHILD],
          tryIt: "Faça uma lista de trabalhadores e um diário de presenças e tarefas de uma semana para a sua machamba (real ou de exemplo). Preencha um registo de pagamentos com data, trabalhador, dias, valor por dia, valor pago e uma coluna para o código da transação, e verifique que os dias vezes o valor por dia dão o valor pago para cada trabalhador.",
          youCanNow: "acompanhar quem trabalhou, em quê e durante quanto tempo, e pagar os trabalhadores por dinheiro móvel com um registo que confere.",
          quickCheck: [
            { objective: "O3", q: "Que registo de pagamento está completo?", options: ["\"Pago ao Juma\"", "\"12 de maio, Juma, 6 dias a sachar o C2, KES 3,000 (exemplo), código QX7...\"", "\"Trabalhadores pagos esta semana\"", "\"KES 3,000\""], answer: 1, why: "Tem a data, o trabalhador, a tarefa, os dias, o valor e o código da transação." },
            { objective: "O3", q: "Uma trabalhadora diz que trabalhou 6 dias; o diário mostra 5. O que ajuda mais?", options: ["O diário de presenças e uma conversa com ela e com o encarregado", "Não pagar nada até ao mês que vem", "Aceitar o número maior sem perguntar", "Apagar o diário"], answer: 0, why: "Um diário diário dá aos dois lados um registo para verificarem juntos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Montar o sistema da sua machamba",
        questions: [
          { objective: "O1", q: "Qual é um sinal de alerta ao escolher uma aplicação agrícola?", options: ["Funciona sem rede", "Pode exportar os seus dados", "É gratuita porque vende os seus dados", "Os trabalhadores podem anotar dados sem ver os salários"], answer: 2, why: "Perde o controlo dos dados da machamba e dos trabalhadores." },
          { objective: "O1", q: "Antes de pôr todos os seus registos numa aplicação, deve:", options: ["Experimentá-la durante duas semanas com registos reais e ver o preço depois do período gratuito", "Pagar um ano inteiro de uma vez", "Escolher a que tem mais anúncios", "Pedir à aplicação para escolher por você"], answer: 0, why: "Uma experiência real mostra se você e os trabalhadores a vão usar e quanto vai custar." },
          { objective: "O2", q: "Porque dar a cada campo um nome fixo como \"C1 Tomate 0,5 acre\"?", options: ["Senão a aplicação não abre", "Para o custo e a produção somarem por campo", "Os compradores pedem", "É a lei"], answer: 1, why: "O mesmo nome em todos os registos deixa-o somar cada campo." },
          { objective: "O2", q: "A lista do stock diz que restam 10 sacos de NPK. A contagem do armazém dá 7. Isto mostra:", options: ["A lista do stock está sempre certa", "Nada de importante", "Precisa de uma nova aplicação", "Um erro, uma perda ou um roubo a ver esta semana"], answer: 3, why: "Uma diferença é um sinal para perguntar porquê enquanto é pequena." },
          { objective: "O3", q: "Porque pagar os trabalhadores por dinheiro móvel sempre que pode?", options: ["É sempre gratuito", "Os trabalhadores preferem dinheiro vivo", "Cada pagamento tem um código da transação que pode registar", "Evita pagar o salário mínimo"], answer: 2, why: "O código da transação é a prova do pagamento, para você e para o trabalhador." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir com dados, de perto ou de longe",
      lessons: [
        {
          title: "Proteger os dados da machamba e dos trabalhadores",
          objectives: ["O6"],
          minutes: 5,
          goal: "Decidir que dados recolher, quem os pode ver e como os proteger.",
          text: [
            "O seu sistema guarda agora informação valiosa e privada: os nomes e números de telefone dos trabalhadores, os salários, as suas vendas e o seu stock. O Quénia (Office of the Data Protection Commissioner), a Nigéria (Nigeria Data Protection Commission) e o Gana (Data Protection Commission) têm leis e autoridades de proteção de dados, e muitos outros países africanos também. Machambas e empresas maiores podem ter de se registar; consulte o site da sua autoridade.",
            "Recolha só o que precisa. Precisa do nome do trabalhador, do número do dinheiro móvel, dos dias e do salário. Não precisa do número de identificação dele numa folha partilhada nem de uma foto do seu documento num grupo de WhatsApp. Diga aos trabalhadores o que guarda e porquê. Nunca ponha PINs do dinheiro móvel, palavras-passe ou números de identificação na folha, na aplicação ou numa ferramenta de IA.",
            "Defina os acessos por função: os trabalhadores anotam as atividades; o gerente vê o stock e as presenças; só você (e o seu contabilista) vê os salários e as vendas. Use um bloqueio no telefone e a verificação em dois passos, retire no mesmo dia quem sai da machamba e tenha uma cópia de segurança. Se partilhar dados com um comprador, um credor ou um projeto, partilhe só o que eles precisam e pergunte como os vão usar."
          ],
          steps: ["Faça a lista dos dados que guarda e risque o que não precisa.", "Diga aos trabalhadores o que regista e porquê.", "Defina os acessos por função: trabalhador, gerente, dono.", "Bloqueie os telefones, ative a verificação em dois passos, faça uma cópia de segurança.", "Retire o acesso a quem sai, no mesmo dia."],
          words: [["Dados pessoais", "informação sobre uma pessoa, como o nome, o número de telefone ou o salário."], ["Acesso", "quem pode ver ou mudar que dados."], ["Verificação em dois passos", "uma segunda verificação quando entra na conta, como um código enviado para o seu telefone."]],
          slides: [
            { title: "Agora guarda dados privados", bullets: ["Nomes, números e salários dos trabalhadores", "As suas vendas e o seu stock", "As leis de proteção de dados aplicam-se"] },
            { title: "Recolha só o que precisa", bullets: ["Nome, número do dinheiro móvel, dias, salário", "Nada de fotos de documentos em grupos de WhatsApp", "Nunca PINs nem palavras-passe"] },
            { title: "Acesso por função", bullets: ["Trabalhadores: anotam as atividades", "Gerente: stock e presenças", "Dono: salários e vendas"] },
            { title: "Mantenha tudo seguro", bullets: ["Bloqueio do telefone, verificação em dois passos, cópia de segurança", "Retire quem sai no mesmo dia", "Partilhe só o que os outros precisam"] }
          ],
          sources: [ODPC, NDPC, GH_DPC],
          tryIt: "Faça a lista de todos os tipos de dados do sistema da sua machamba. Risque o que não precisa. Escreva uma tabela de acessos: para cada função (trabalhador, gerente, dono, contabilista), o que pode ver e o que pode anotar.",
          youCanNow: "recolher só os dados de que a sua machamba precisa e controlar quem os pode ver.",
          quickCheck: [
            { objective: "O6", q: "O que NÃO deve ir para a folha partilhada da machamba?", options: ["Os nomes dos trabalhadores", "Os dias trabalhados", "Os nomes dos campos", "Os PINs do dinheiro móvel dos trabalhadores"], answer: 3, why: "Os PINs são secretos; mais ninguém os deve ter." },
            { objective: "O6", q: "O seu gerente sai da machamba. Quando retira o acesso dele à folha e à aplicação?", options: ["No fim da época", "No mesmo dia", "Só se ele pedir", "Nunca; ele pode voltar"], answer: 1, why: "Retirar o acesso no mesmo dia protege os seus dados e os dos seus trabalhadores." }
          ]
        },
        {
          title: "Gerir a machamba à distância",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escrever uma rotina de relatórios diários que pode verificar.",
          text: [
            "Muitos donos gerem a machamba a partir da cidade, através de um gerente ou de um familiar. Funciona quando os relatórios são uma rotina, e não quando liga à sorte a perguntar \"Está tudo bem?\". Combine um relatório diário no WhatsApp até uma hora fixa, por exemplo às 18 horas: o que se fez em cada campo ou pavilhão, números (ovos apanhados, aves mortas, ração gasta, litros de leite, caixas vendidas, trabalhadores presentes), problemas e três fotos dos mesmos lugares todos os dias (a cultura, os animais, o armazém).",
            "Faça um encontro semanal curto por telefone ou vídeo a uma hora fixa: vejam os números da semana, a contagem do stock e o plano da semana seguinte. Decidam juntos e escrevam as decisões no grupo. Um bom gerente também deve ser pago e ter confiança para tomar pequenas decisões sem você.",
            "Confie, mas verifique. Compare os relatórios com coisas difíceis de falsificar: extratos do dinheiro móvel, recibos dos compradores, a contagem semanal do stock e fotos com data e local. Visite de vez em quando sem avisar muito antes e, às vezes, peça a um vizinho de confiança, ao veterinário ou ao extensionista uma segunda opinião. Quando um número parecer errado, pergunte com calma e cedo. A maioria das diferenças são erros, e verificar com regularidade mantém honestas as pessoas honestas."
          ],
          steps: ["Combine o relatório diário: hora, números, problemas, três fotos fixas.", "Marque um encontro semanal a uma hora fixa.", "Escreva as decisões no grupo.", "Verifique com extratos, recibos, contagens do stock e fotos com data.", "Visite às vezes sem avisar muito antes; pergunte cedo e com calma sobre números estranhos."],
          words: [["Dono ausente", "um dono de machamba que vive longe e gere a machamba através de outra pessoa."], ["Verificar", "confirmar que um relatório é verdadeiro usando uma segunda fonte."], ["Encontro semanal", "uma reunião curta e regular para rever números e planos."]],
          slides: [
            { title: "A rotina vence as chamadas à sorte", bullets: ["Relatório diário no WhatsApp até uma hora fixa", "Números, problemas, três fotos fixas"] },
            { title: "Encontro semanal", bullets: ["À mesma hora todas as semanas", "Números, contagem do stock, plano da semana seguinte", "Escreva as decisões no grupo"] },
            { title: "Confie, mas verifique", bullets: ["Extratos do dinheiro móvel e recibos", "Contagem semanal do stock, fotos com data", "Visitas e uma segunda opinião de confiança"] },
            { title: "Quando um número parece errado", bullets: ["Pergunte cedo e com calma", "A maioria das diferenças são erros", "Verificações regulares mantêm todos honestos"] }
          ],
          tryIt: "Escreva o modelo do relatório diário que o seu gerente vai enviar (os números, a linha dos problemas e os três lugares das fotos). Depois escreva três formas de verificar os relatórios, e o dia e a hora do seu encontro semanal.",
          youCanNow: "combinar com um gerente um relatório diário e um encontro semanal e verificar o que ele lhe diz.",
          quickCheck: [
            { objective: "O4", q: "Que relatório diário de um gerente de aves é mais útil?", options: ["\"Está tudo bem.\"", "Uma mensagem de voz a qualquer hora do dia", "\"18 h: 412 ovos, 2 aves mortas, 3 sacos de ração gastos, 4 trabalhadores, fotos do Pavilhão A, das aves e do armazém\"", "Só uma chamada por semana"], answer: 2, why: "Números fixos e fotos a uma hora fixa podem ser comparados de um dia para o outro." },
            { objective: "O4", q: "Qual é a melhor forma de verificar as vendas de ovos relatadas?", options: ["Compará-las com os extratos do dinheiro móvel e os recibos dos compradores", "Perguntar ao gerente se tem a certeza", "Contar os ovos na foto do WhatsApp", "Confiar porque ele é da família"], answer: 0, why: "Os pagamentos e os recibos são uma segunda fonte difícil de falsificar." }
          ]
        },
        {
          title: "O seu painel semanal: cinco números a acompanhar",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Montar um painel semanal de cinco números, cada um com um intervalo normal e uma ação.",
          text: [
            "Um painel é uma página curta com os poucos números que lhe dizem se a machamba vai no bom caminho. Cinco chegam para ler em dois minutos todas as semanas. Escolha números que vêm diretamente do seu registo, para ninguém ter de se lembrar deles.",
            "Boas escolhas para a maioria das machambas: (1) dinheiro que entrou e que saiu esta semana; (2) produção, como kg colhidos, ovos por dia, litros de leite ou crescimento dos peixes; (3) perdas, como aves mortas, animais doentes ou caixas rejeitadas; (4) stock de insumos que resta comparado com o que as próximas duas semanas precisam; (5) dias ou custo de mão de obra por campo ou grupo. Uma machamba de poedeiras no Gana pode acompanhar os ovos por dia, as aves mortas, a ração gasta, o dinheiro das vendas de ovos e o stock de ração. Um produtor de tomate no Senegal pode acompanhar as caixas colhidas, as caixas rejeitadas, os dias de trabalho, o dinheiro das vendas em XOF e o stock de pesticidas e adubos.",
            "Para cada número escreva um intervalo normal e uma ação. Exemplo: \"Mais de 3 aves mortas por dia: chamar o veterinário no mesmo dia.\" \"Ração para menos de 10 dias: encomendar ração.\" Ponha os cinco números numa pequena tabela com uma coluna por semana, para ver a tendência. Reveja-a no encontro semanal e troque um número se ele nunca levar a uma decisão."
          ],
          steps: ["Escolha cinco números que vêm do seu registo.", "Escreva um intervalo normal ou uma meta para cada um.", "Escreva a ação se um número estiver fora do intervalo.", "Faça uma tabela com uma coluna por semana.", "Reveja-a no encontro semanal e aja."],
          words: [["Painel", "um resumo curto dos números principais que mostram como vai a machamba."], ["Tendência", "o sentido em que um número se move ao longo de várias semanas."], ["Intervalo normal", "os valores que espera quando as coisas correm bem."]],
          slides: [
            { title: "Cinco números, dois minutos", bullets: ["Diretamente do seu registo", "Lidos todas as semanas"] },
            { title: "Boas escolhas", bullets: ["Dinheiro que entra e que sai", "Produção: kg, ovos, litros", "Perdas, stock que resta, custo da mão de obra"] },
            { title: "Intervalo e ação", bullets: ["Aves mortas acima do normal: chamar o veterinário", "Ração para menos de 10 dias: encomendar ração"] },
            { title: "Acompanhe a tendência", bullets: ["Uma coluna por semana", "Reveja no encontro semanal", "Tire os números que nunca levam a uma ação"] }
          ],
          tryIt: "Tarefa final: monte o painel semanal da sua machamba com cinco números, cada um com a sua origem no registo, um intervalo normal e a ação a tomar se estiver fora, e preencha pelo menos duas semanas. Depois escreva a sua rotina de relatórios de uma página: o relatório diário, o encontro semanal, como verifica e quem vê que dados.",
          youCanNow: "gerir a sua machamba com um painel semanal de cinco números e uma rotina de relatórios que pode verificar.",
          quickCheck: [
            { objective: "O5", q: "Porque é que os números do painel devem vir diretamente do registo?", options: ["Para parecerem mais profissionais", "Para ninguém ter de se lembrar deles ou adivinhá-los", "Porque as aplicações obrigam", "Para os trabalhadores não os verem"], answer: 1, why: "Os números dos registos são de confiança; os de memória não são." },
            { objective: "O5", q: "O seu painel diz \"ração para menos de 10 dias: encomendar ração\". O stock dá para 6 dias. E agora?", options: ["Esperar pela revisão do mês", "Tirar esse número do painel", "Pedir aos trabalhadores para darem menos ração", "Encomendar ração esta semana"], answer: 3, why: "Cada número tem uma ação; quando está fora do intervalo, você age." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir com dados, de perto ou de longe",
        questions: [
          { objective: "O6", q: "Quem deve ver os salários dos trabalhadores no sistema da machamba?", options: ["Todos os trabalhadores", "Qualquer pessoa no grupo de WhatsApp da machamba", "O dono e, se for preciso, o contabilista", "Os compradores"], answer: 2, why: "Os salários são privados; o acesso por função protege-os." },
          { objective: "O4", q: "O que torna fácil verificar um relatório diário da machamba?", options: ["Números fixos e os mesmos lugares das fotos a uma hora fixa", "Mensagens de voz longas", "Ligar quando se lembra", "Relatar só os problemas"], answer: 0, why: "O mesmo conteúdo todos os dias deixa-o comparar e ver as mudanças." },
          { objective: "O4", q: "As vendas relatadas pelo gerente são mais baixas do que os recibos do comprador. O que faz primeiro?", options: ["Despede-o logo", "Ignora", "Publica no grupo dos trabalhadores", "Pergunta com calma e cedo, e compara os registos juntos"], answer: 3, why: "A maioria das diferenças são erros; perguntar cedo com os registos mostra o que aconteceu." },
          { objective: "O5", q: "Qual é um bom número de painel para uma machamba leiteira?", options: ["A cor do estábulo", "Litros de leite por dia", "O número de mensagens de WhatsApp", "A vaca preferida do gerente"], answer: 1, why: "Números de produção como os litros por dia mostram se a machamba vai no bom caminho." },
          { objective: "O5", q: "Um número do painel nunca leva a nenhuma decisão. Deve:", options: ["Trocá-lo por um que leve", "Mantê-lo para sempre", "Acrescentar mais cinco iguais", "Esconder o painel"], answer: 0, why: "Um painel serve para decidir; tire os números que não ajudam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gerir a Machamba com Dados e Aplicações Móveis",
    questions: [
      { objective: "O1", q: "Qual é o teste mais importante de uma aplicação agrícola?", options: ["Tem mais funções", "É a mais cara", "Foi anunciada na rádio", "Você e os seus trabalhadores usam-na todos os dias"], answer: 3, why: "Uma ferramenta que ninguém usa não lhe dá dados." },
      { objective: "O1", q: "Que função deixa um trabalhador registar o trabalho sem ver os salários?", options: ["Vários utilizadores com acessos diferentes", "Modo escuro", "Videochamadas", "Fotos sem limite"], answer: 0, why: "O acesso por função mantém privados os dados privados." },
      { objective: "O1", q: "Uma folha de cálculo partilhada gratuita pode substituir uma aplicação agrícola?", options: ["Não, nunca", "Sim, se for bem montada e usada todos os dias", "Só em machambas muito grandes", "Só se for impressa"], answer: 1, why: "Uma folha partilhada bem montada pode acompanhar campos, trabalho, stock e salários." },
      { objective: "O2", q: "Qual é um bom nome de campo num registo?", options: ["\"O que fica perto da estrada\"", "\"Tomates\"", "\"C1 Tomate 0,5 acre\"", "Um nome diferente cada semana"], answer: 2, why: "Um nome curto fixo com o tamanho deixa os registos somarem." },
      { objective: "O2", q: "Porque fixar unidades como \"sacos de 50 kg\" para cada insumo?", options: ["Para os totais e o stock que resta estarem certos", "Porque os fornecedores obrigam", "Para os trabalhadores escreverem menos", "Não importa"], answer: 0, why: "Unidades misturadas dão totais errados." },
      { objective: "O2", q: "Quando um trabalhador regista \"2 sacos de NPK usados no C1\", a lista do stock deve:", options: ["Ficar igual", "Subir dois", "Ser apagada", "Descer dois"], answer: 3, why: "O que resta = entradas menos o que foi gasto." },
      { objective: "O2", q: "Com que frequência deve contar o armazém de insumos e comparar com a lista?", options: ["Uma vez por ano", "Só depois de um roubo", "Todas as semanas", "Nunca"], answer: 2, why: "As contagens semanais apanham as diferenças cedo." },
      { objective: "O3", q: "O que liga um pagamento por dinheiro móvel ao registo de um trabalhador?", options: ["O código da transação", "A cor do telefone", "A foto do documento do trabalhador no WhatsApp", "O tempo que faz"], answer: 0, why: "O código prova o pagamento e liga-o ao registo." },
      { objective: "O3", q: "Um trabalhador fez 5 dias a um valor de exemplo de NGN 4,000 por dia. O registo deve mostrar:", options: ["NGN 4,000", "NGN 20,000", "NGN 9,000", "NGN 45,000"], answer: 1, why: "5 x 4,000 = 20,000; os dias vezes o valor por dia devem dar o valor pago." },
      { objective: "O3", q: "Onde confirma o salário mínimo legal?", options: ["Num grupo de WhatsApp", "No vendedor de insumos", "Só num assistente de IA", "No ministério do trabalho do seu país"], answer: 3, why: "As regras dos salários vêm da autoridade oficial do trabalho e mudam com o tempo." },
      { objective: "O6", q: "De que dados precisa uma machamba sobre um trabalhador eventual?", options: ["Nome, número do dinheiro móvel, dias e salário", "O PIN dele", "Uma foto do documento dele no grupo de conversa", "A palavra-passe do banco dele"], answer: 0, why: "Recolha só o que precisa." },
      { objective: "O6", q: "Que serviço regula os dados pessoais no Quénia?", options: ["O Kenya Meteorological Department (serviço de meteorologia)", "O Pest Control Products Board (produtos contra pragas)", "O Office of the Data Protection Commissioner", "O KALRO (investigação agrícola)"], answer: 2, why: "O ODPC é a autoridade de proteção de dados do Quénia." },
      { objective: "O6", q: "Um comprador pede os registos da sua machamba. Você deve:", options: ["Enviar tudo, incluindo os salários", "Partilhar só o que ele precisa e perguntar como os vai usar", "Recusar vender-lhe", "Enviar a palavra-passe do seu telefone"], answer: 1, why: "Partilhe o mínimo e saiba como vai ser usado." },
      { objective: "O4", q: "O que deve ter um relatório diário da machamba?", options: ["Só boas notícias", "Histórias longas", "Nada; os relatórios não são precisos", "Números, problemas e fotos dos mesmos lugares"], answer: 3, why: "Um conteúdo fixo deixa-o comparar de um dia para o outro." },
      { objective: "O4", q: "O que é mais difícil de falsificar quando verifica um relatório?", options: ["Um extrato do dinheiro móvel", "Uma mensagem de voz", "Uma promessa", "Uma SMS a dizer \"tudo bem\""], answer: 0, why: "Os extratos e os recibos são registos independentes." },
      { objective: "O4", q: "Para que serve o encontro semanal?", options: ["Para gritar com o gerente", "Para rever juntos os números, o stock e o plano da semana seguinte", "Para substituir todos os registos", "Para pagar aos fornecedores"], answer: 1, why: "Transforma os números em decisões." },
      { objective: "O5", q: "Quantos números este curso sugere para um painel semanal?", options: ["Um", "Vinte", "Cinco", "Cinquenta"], answer: 2, why: "Cinco números podem ser lidos e usados em dois minutos." },
      { objective: "O5", q: "Qual é um número de perdas numa machamba de poedeiras?", options: ["Ovos vendidos", "Ração entregue", "Trabalhadores presentes", "Aves mortas esta semana"], answer: 3, why: "Perdas como as aves mortas avisam cedo." },
      { objective: "O5", q: "\"Mais de 3 aves mortas por dia: chamar o veterinário no mesmo dia\" é um exemplo de:", options: ["Um intervalo normal com uma ação", "Uma regra de proteção de dados", "Um código do dinheiro móvel", "Uma contagem do stock"], answer: 0, why: "Cada número do painel tem um intervalo e a ação que toma." },
      { objective: "O5", q: "Porque pôr uma coluna por semana no painel?", options: ["Para encher a página", "Para ver a tendência ao longo do tempo", "Porque as aplicações obrigam", "Para esconder as semanas más"], answer: 1, why: "As tendências mostram os problemas antes de ficarem grandes." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Cinco números úteis", objective: "O5", notYet: "Menos de cinco números, ou números que não levam a nenhuma decisão.", meets: "Cinco números sobre dinheiro, produção, perdas, stock e mão de obra, cada um com um intervalo normal e uma ação.", exceeds: "Pelo menos duas semanas preenchidas, e uma decisão já tomada por causa de um número." },
      { name: "Os números vêm dos registos", objective: "O2", notYet: "Os números são adivinhados ou de memória.", meets: "Cada número diz a sua origem no registo (diário de atividades, lista do stock, registo de pagamentos).", exceeds: "O registo usa nomes e unidades fixos, e a contagem do stock bate certo com a lista." },
      { name: "Mão de obra e salários registados", objective: "O3", notYet: "A mão de obra falta ou é paga sem registo.", meets: "Os dias de trabalho vêm do diário de presenças e os pagamentos têm códigos da transação.", exceeds: "Os dias x valor por dia são comparados com os pagamentos todas as semanas." },
      { name: "Rotina de relatórios", objective: "O4", notYet: "Nenhum relatório fixo, ou só \"ligar quando for preciso\".", meets: "Estão escritos o conteúdo e a hora do relatório diário, o encontro semanal e pelo menos duas formas de verificar.", exceeds: "Inclui visitas sem aviso ou uma segunda opinião de confiança, e como se levantam os números estranhos." },
      { name: "Dados protegidos", objective: "O6", notYet: "PINs, números de identificação ou salários estão à vista de todos.", meets: "Só se recolhem os dados precisos, e os acessos são definidos por função.", exceeds: "Inclui cópia de segurança, verificação em dois passos e retirar no mesmo dia quem sai." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que ainda revêem o seu painel semanal 30 dias depois (inquérito de seguimento)",
      "Alunos que encontraram e corrigiram uma diferença no stock, na mão de obra ou nas vendas em 60 dias",
      "Parte dos pagamentos aos trabalhadores feitos com um código da transação registado",
      "Grupos de agricultores ou programas que dizem ter menos perdas ou conflitos sobre salários depois do curso"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com WhatsApp e dinheiro móvel",
      "Uma aplicação de folha de cálculo gratuita (Google Sheets ou Microsoft Excel) ou uma aplicação agrícola que o aluno está a experimentar",
      "Os dados da machamba do próprio aluno, ou os números de exemplo das lições",
      "Papel e caneta para a tabela de pontos e a tabela de acessos",
      "Cerca de 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Funciona bem com grupos de agricultores, programas para jovens empreendedores agrícolas e associações de donos que vivem longe; um capítulo por sessão.",
      "Não recomende nem venda nenhuma aplicação na sessão; deixe os alunos darem pontos às opções com a lista de funções.",
      "Nunca peça aos alunos para mostrarem num grupo PINs, palavras-passe, números de identificação verdadeiros ou os salários de outras pessoas.",
      "Sempre que puder, junte os donos com os seus gerentes para a tarefa da Lição 5, para que a rotina seja combinada pelos dois.",
      "Lembre aos alunos que as regras dos salários, do trabalho e da proteção de dados mudam de país para país e com o tempo; consulte as fontes oficiais.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
