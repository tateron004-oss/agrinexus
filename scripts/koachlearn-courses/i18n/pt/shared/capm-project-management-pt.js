"use strict";

// Koach Learn course (Portuguese translation of shared/capm-project-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// PMI, CAPM, PMP, Exam Content Outline, GI Bill and VA names are kept in English. No PMI fee, hour, question count or pass mark is stated.

module.exports = {
  id: "capm-project-management-pt",
  lang: "pt",
  translationOf: "capm-project-management",
  category: "Workforce Development",
  name: "Noções Básicas de Gestão de Projetos (Preparação para o CAPM)",
  skills: "Definir um projeto e as suas restrições, Escrever um termo de abertura do projeto, Construir uma EDT e encontrar o caminho crítico, Gerir riscos e alterações, Escolher uma abordagem preditiva ou Agile, Planear o exame CAPM",
  outcome: "planear um pequeno projeto real da forma que o exame CAPM espera: escrever um termo de abertura, decompor o trabalho, encontrar o caminho crítico, acompanhar riscos e alterações, escolher uma abordagem adequada e construir o seu próprio plano com datas para se preparar para o CAPM.",
  about: [
    "Este curso é para quem procura emprego, veteranos, jovens adultos, donos de pequenas empresas e qualquer pessoa que queira um cargo de entrada em projetos, como coordenador de projeto, assistente de projeto ou chefe de equipa. É também um primeiro passo para o Certified Associate in Project Management (CAPM), uma certificação de nível de entrada do Project Management Institute (PMI).",
    "Você vai aprender as ferramentas principais: o termo de abertura do projeto, a lista de partes interessadas, a estrutura de decomposição do trabalho, um cronograma com o caminho crítico, um registo de riscos e um registo de alterações. Vai praticar cada uma em papel ou numa folha de cálculo gratuita, usando um pequeno projeto da sua vida ou do seu trabalho.",
    "Este curso PREPARA você. Não lhe dá o CAPM. Só o PMI o atribui, e o PMI define as regras: quem se pode candidatar, as horas de formação de que precisa, a taxa, o exame e como renovar. Estas regras podem mudar, por isso você mesmo vai verificá-las em pmi.org.",
    "Cada lição dura cerca de cinco minutos e é seguida de uma tarefa \"Experimente agora\" e de duas perguntas rápidas. Há um teste inicial no começo, uma verificação de conhecimentos depois de cada capítulo e um questionário final de 20 perguntas."
  ],
  finalTask: "Faça a sua própria preparação para o CAPM como um projeto. Faça um termo de abertura de uma página (objetivo, âmbito, patrocinador, medida de sucesso), uma estrutura de decomposição do trabalho do seu estudo, um cronograma com datas e marcos que termine numa data-alvo para o exame e mostre o caminho crítico, um registo de riscos com pelo menos três riscos (cada um com uma pontuação, uma resposta e um responsável) e uma lista das páginas oficiais do PMI que verificou sobre os requisitos de elegibilidade, as taxas e o Exam Content Outline atuais.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos nos Estados Unidos e noutros países que querem um cargo de entrada em projetos ou o CAPM: pessoas à procura de emprego, veteranos a passar para o trabalho civil, pessoas que voltam para casa depois da prisão, donos de pequenas empresas, funcionários de organizações sem fins lucrativos e trabalhadores que já coordenam tarefas sem ter o título.",
    startingPoint: "A maioria já organizou trabalho de forma informal (um evento, uma mudança de casa, uma escala de turnos, uma missão militar, um programa da igreja), mas nunca usou as ferramentas nem o vocabulário formais de projetos. Alguns sabem usar uma folha de cálculo simples; poucos já viram um gráfico de Gantt ou um registo de riscos.",
    gap: "Os empregadores pedem coordenação de projetos e o CAPM nos anúncios de emprego, e o exame usa o vocabulário do PMI. Os alunos precisam de transformar o que já fazem de forma informal nas ferramentas e palavras padrão, e precisam de um plano realista para cumprir os requisitos do PMI e passar no exame.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; todos os termos do PMI explicados",
      "Aparelhos: todas as tarefas podem ser feitas com papel e caneta; uma folha de cálculo gratuita (Google Sheets ou Excel online) ajuda",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e a família",
      "As regras, as taxas e o Exam Content Outline do PMI mudam: os alunos confirmam-nos em pmi.org, não neste curso",
      "O curso prepara; não atribui o CAPM nem conta automaticamente para as horas de formação do PMI"
    ],
    prerequisites: "Nenhum. Quem é novo nas folhas de cálculo pode fazer primeiro o curso \"Excel e Folhas de Cálculo\"; \"Gestão Ágil de Projetos\" é um bom curso para fazer a seguir."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a descrição de um trabalho", action: "identificar se é um projeto e dizer as fases do seu ciclo de vida e as suas principais restrições", standard: "acertando pelo menos 4 de 5 exemplos" },
    { id: "O2", condition: "Para um pequeno projeto real", action: "escrever um termo de abertura do projeto de uma página e uma lista de partes interessadas com o interesse e a influência de cada pessoa", standard: "incluindo objetivo, o que está dentro e fora do âmbito, patrocinador, prazo e uma medida de sucesso mensurável" },
    { id: "O3", condition: "Com um objetivo de projeto e uma lista de tarefas com durações", action: "construir uma estrutura de decomposição do trabalho e um cronograma que marque o caminho crítico", standard: "com todas as dependências mostradas e a duração do caminho crítico calculada corretamente" },
    { id: "O4", condition: "Para o mesmo projeto", action: "anotar os riscos num registo de riscos e tratar um pedido de alteração pelo controlo de alterações", standard: "com uma pontuação, uma resposta e um único responsável para cada risco, e nenhuma alteração feita sem aprovação" },
    { id: "O5", condition: "Com um cenário curto de projeto", action: "escolher uma abordagem preditiva, Agile ou híbrida e explicar a escolha", standard: "dando pelo menos duas razões tiradas do cenário" },
    { id: "O6", condition: "Usando as páginas oficiais do PMI", action: "construir um plano de estudo e de exame para o CAPM com datas", standard: "com a elegibilidade verificada, os temas do Exam Content Outline listados e uma data-alvo para o exame" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Começar um projeto da forma certa",
      lessons: [
        {
          title: "O que faz de um trabalho um projeto",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar se um trabalho é um projeto e dizer as suas fases e restrições.",
          text: [
            "Um projeto é um trabalho temporário para criar algo novo: tem um começo, um fim e um resultado único. Abrir uma roulotte de comida, mudar um escritório, fazer uma campanha de recenseamento de eleitores ou construir um site são projetos. Cozinhar o mesmo menu de almoço todos os dias, ou atender os telefones em cada turno, são operações contínuas, não um projeto.",
            "A maioria dos projetos passa por fases. Uma forma simples de as ver: começar (acordar o porquê e o quê), planear (como, quando, quem, quanto), fazer o trabalho, acompanhar e controlar, e encerrar (entregar o resultado e registar as lições aprendidas). O PMI chama \"gestão de projetos\" às pessoas e às práticas que orientam isto.",
            "Todos os projetos são limitados por restrições. As três clássicas são o âmbito (o que vai entregar), o cronograma (o tempo) e o custo (o dinheiro). A qualidade, os recursos e o risco também contam. Se uma muda, as outras sentem: acrescente âmbito com o mesmo prazo e vai precisar de mais pessoas ou dinheiro, ou a qualidade baixa."
          ],
          steps: ["Pergunte: este trabalho tem um começo e um fim claros?", "Pergunte: cria algo novo ou diferente?", "Se a resposta for sim às duas, é um projeto. Se se repete todos os dias, são operações.", "Diga em que fase está agora e qual é a sua restrição mais apertada."],
          words: [["Projeto", "trabalho temporário com um começo, um fim e um resultado único."], ["Operações", "trabalho contínuo e repetido que mantém uma empresa a funcionar."], ["Restrição", "um limite do projeto, como o tempo, o dinheiro ou o âmbito."], ["Âmbito (scope)", "todo o trabalho e todos os resultados que o projeto vai entregar, e nada mais."], ["Ciclo de vida", "as fases por que um projeto passa, do começo ao encerramento."]],
          slides: [
            { title: "Projeto ou operações?", bullets: ["Projeto: temporário, com um começo, um fim e um resultado único", "Operações: o mesmo trabalho repetido todos os dias"] },
            { title: "Cinco fases simples", bullets: ["Começar: porquê e o quê", "Planear: como, quando, quem, quanto", "Fazer, depois acompanhar e controlar", "Encerrar: entregar e registar as lições aprendidas"] },
            { title: "As restrições", bullets: ["Âmbito, cronograma e custo", "Também qualidade, recursos e risco", "Mude uma e as outras sentem"] }
          ],
          sources: [{ name: "Project Management Institute: What is project management? (O que é a gestão de projetos?)", url: "https://www.pmi.org/about/learn-about-pmi/what-is-project-management" }],
          tryIt: "Escreva cinco trabalhos da sua vida, do seu emprego ou do seu serviço militar. Marque cada um com P (projeto) ou O (operações). Para cada projeto, escreva a sua restrição mais apertada: âmbito, tempo ou dinheiro.",
          youCanNow: "distinguir um projeto das operações contínuas, dizer as suas fases e qual é a restrição mais apertada.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um projeto?", options: ["Repor as prateleiras todas as noites", "Atender chamadas de clientes em cada turno", "Abrir uma segunda loja até junho", "Processar os salários de duas em duas semanas"], answer: 2, why: "Abrir uma nova loja é temporário, tem uma data de fim e cria algo novo." },
            { objective: "O1", q: "O patrocinador acrescenta três funcionalidades novas, mas mantém o mesmo prazo e orçamento. O que é mais provável sofrer?", options: ["Nada; o âmbito não afeta as outras restrições", "A qualidade, a não ser que se acrescente mais tempo, pessoas ou dinheiro", "Só o nome do projeto", "A lista de partes interessadas"], answer: 1, why: "O âmbito, o cronograma e o custo estão ligados; mais âmbito com o mesmo tempo e dinheiro põe pressão na qualidade." }
          ]
        },
        {
          title: "O termo de abertura do projeto e as partes interessadas",
          objectives: ["O2"],
          minutes: 6,
          goal: "Escrever um termo de abertura de uma página e uma lista de partes interessadas para um pequeno projeto.",
          text: [
            "O termo de abertura do projeto (em inglês, \"project charter\") é o documento que inicia oficialmente um projeto. Diz quem é o patrocinador (a pessoa que o aprova e financia) e dá ao gestor do projeto autoridade para usar pessoas e dinheiro. Pense nele como a ordem de missão: sem termo de abertura, não há projeto.",
            "Um bom termo de abertura de uma página tem: o propósito (porquê), um objetivo com uma medida (\"abrir a inscrição online do banco alimentar até 1 de março, com 50 famílias inscritas no primeiro mês\"), o que está dentro e fora do âmbito, o prazo e os marcos principais, o orçamento, os riscos principais e o nome do patrocinador.",
            "As partes interessadas (em inglês, \"stakeholders\") são todas as pessoas que afetam o projeto ou são afetadas por ele: o patrocinador, a equipa, os clientes, os vizinhos, os inspetores, os fornecedores. Faça a lista e depois coloque cada uma numa grelha simples de influência (alta ou baixa) e interesse (alto ou baixo). Influência alta e interesse alto: gerir de perto. Influência alta e interesse baixo: manter satisfeitas. Influência baixa e interesse alto: manter informadas. Baixo e baixo: falar com elas de vez em quando."
          ],
          steps: ["Escreva o propósito numa frase.", "Escreva o objetivo com um número e uma data.", "Faça a lista do que está dentro e fora do âmbito.", "Acrescente o prazo, os marcos, o orçamento e o patrocinador.", "Faça a lista das partes interessadas e coloque cada uma na grelha de influência e interesse."],
          words: [["Termo de abertura do projeto", "o documento que inicia oficialmente o projeto e dá autoridade ao gestor do projeto."], ["Patrocinador", "a pessoa ou o grupo que aprova, financia e apoia o projeto."], ["Parte interessada", "qualquer pessoa que afeta o projeto ou é afetada por ele."], ["Marco", "um ponto importante do cronograma, sem duração própria, como \"licença aprovada\"."]],
          slides: [
            { title: "O termo de abertura inicia o projeto", bullets: ["Diz quem é o patrocinador", "Dá autoridade ao gestor do projeto", "Sem termo de abertura, não há projeto"] },
            { title: "O que vai numa página", bullets: ["Propósito e um objetivo mensurável", "O que está dentro e fora do âmbito", "Prazo, marcos, orçamento, riscos principais"] },
            { title: "Grelha das partes interessadas", bullets: ["Influência alta, interesse alto: gerir de perto", "Influência alta, interesse baixo: manter satisfeitas", "Influência baixa, interesse alto: manter informadas"] }
          ],
          tryIt: "Escolha um pequeno projeto real, como um encontro de família, uma angariação de fundos da igreja, uma venda de garagem ou arrumar um armazém no trabalho. Escreva um termo de abertura de uma página com todas as partes acima e depois faça uma lista de pelo menos cinco partes interessadas e coloque cada uma na grelha.",
          youCanNow: "escrever um termo de abertura de uma página e decidir como trabalhar com cada parte interessada.",
          quickCheck: [
            { objective: "O2", q: "Qual é o melhor objetivo para um termo de abertura?", options: ["\"Melhorar o site\"", "\"Fazer um ótimo trabalho nas inscrições\"", "\"Tentar acabar em breve\"", "\"Abrir a inscrição online até 1 de março com 50 famílias inscritas no primeiro mês\""], answer: 3, why: "Um bom objetivo tem um número e uma data, para que todos possam ver se foi cumprido." },
            { objective: "O2", q: "O inspetor da câmara municipal tem muita influência, mas pouco interesse no seu projeto. Como trata o inspetor?", options: ["Mantém-no satisfeito: responde às suas necessidades sem muitas atualizações", "Ignora-o até ao fim", "Envia-lhe todas as atualizações diárias", "Torna-o o patrocinador"], answer: 0, why: "As partes interessadas com influência alta e interesse baixo são mantidas satisfeitas para não bloquearem o projeto." }
          ]
        },
        {
          title: "Decompor o trabalho e encontrar o caminho crítico",
          objectives: ["O3"],
          minutes: 6,
          goal: "Construir uma estrutura de decomposição do trabalho e um cronograma, e marcar o caminho crítico.",
          text: [
            "Uma estrutura de decomposição do trabalho (EDT; em inglês, WBS) divide o projeto todo em partes mais pequenas das entregas, nível a nível, até cada parte ser pequena o suficiente para ser estimada e dada a uma pessoa. A parte mais pequena é um pacote de trabalho. Se não está na EDT, não está no projeto.",
            "A seguir, faça a lista das tarefas, de quanto tempo cada uma leva (duração) e de quais têm de acabar antes de outra poder começar (dependências). Desenhe-as como caixas com setas, da esquerda para a direita. Exemplo: A, obter a licença (2 dias); B, construir a banca (3 dias, depois de A); C, encomendar as placas (1 dia, depois de A); D, montar na feira (2 dias, depois de B e C).",
            "Some cada caminho do começo ao fim. A-B-D leva 2 + 3 + 2 = 7 dias. A-C-D leva 2 + 1 + 2 = 5 dias. O caminho mais longo é o caminho crítico: define o fim mais cedo possível, 7 dias. Um atraso em A, B ou D atrasa o projeto todo. C tem uma folga de 7 - 5 = 2 dias: pode atrasar 2 dias sem mudar a data de fim."
          ],
          steps: ["Escreva as entregas principais do projeto como o primeiro nível da EDT.", "Decomponha cada uma até uma parte ser pequena o suficiente para uma pessoa a estimar.", "Faça a lista das tarefas com as durações e aquilo de que cada uma tem de esperar.", "Desenhe caixas e setas e depois some todos os caminhos.", "O caminho mais longo é o caminho crítico; os outros têm folga."],
          words: [["Estrutura de decomposição do trabalho (EDT, em inglês WBS)", "uma árvore que divide as entregas do projeto em partes mais pequenas."], ["Pacote de trabalho", "a parte mais pequena da EDT, pequena o suficiente para ser estimada e atribuída."], ["Dependência", "uma ligação que quer dizer que uma tarefa tem de acabar (ou começar) antes de outra poder começar."], ["Caminho crítico", "a cadeia mais longa de tarefas ligadas; define o mais cedo que o projeto pode acabar."], ["Folga (float ou slack)", "quanto tempo uma tarefa pode atrasar sem atrasar o fim do projeto."], ["Gráfico de Gantt", "um gráfico de barras que mostra cada tarefa num calendário."]],
          slides: [
            { title: "Estrutura de decomposição do trabalho (EDT)", bullets: ["O projeto todo, depois as entregas, depois os pacotes de trabalho", "Cada pacote de trabalho: um responsável, fácil de estimar", "Se não está na EDT, não está no projeto"] },
            { title: "Durações e dependências", bullets: ["Quanto tempo leva cada tarefa", "O que tem de acabar antes de ela começar", "Desenhe caixas e setas, da esquerda para a direita"] },
            { title: "Encontrar o caminho crítico", bullets: ["Some todos os caminhos do começo ao fim", "Exemplo: A-B-D = 7 dias, A-C-D = 5 dias", "Caminho mais longo = caminho crítico = 7 dias"] },
            { title: "Folga", bullets: ["A tarefa C pode atrasar 2 dias sem mudar a data de fim", "As tarefas do caminho crítico têm folga zero", "Acompanhe as tarefas críticas mais de perto"] }
          ],
          tryIt: "Pegue no projeto do seu termo de abertura. Desenhe em papel uma EDT com pelo menos dois níveis. Depois faça a lista de cinco a oito tarefas com durações e dependências, desenhe-as como caixas e setas, some cada caminho e faça um círculo à volta do caminho crítico. Escreva a folga de uma tarefa que não está nele.",
          youCanNow: "decompor um projeto numa EDT, construir um cronograma simples e encontrar o caminho crítico e a folga.",
          quickCheck: [
            { objective: "O3", q: "O Caminho 1 leva 9 dias e o Caminho 2 leva 6 dias. Qual é o caminho crítico e quanto tempo dura o projeto?", options: ["Caminho 2, 6 dias", "Os dois caminhos, 15 dias", "Caminho 1, 9 dias", "Caminho 1, 3 dias"], answer: 2, why: "O caminho mais longo é o caminho crítico e define o fim mais cedo possível: 9 dias." },
            { objective: "O3", q: "Uma tarefa tem 2 dias de folga e atrasa 1 dia. O que acontece à data de fim?", options: ["Não muda", "Passa 1 dia para mais tarde", "Passa 2 dias para mais tarde", "O projeto é cancelado"], answer: 0, why: "Uma tarefa pode atrasar até ao valor da sua folga sem atrasar o fim." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Começar um projeto da forma certa",
        questions: [
          { objective: "O1", q: "O que torna um projeto diferente das operações?", options: ["Um projeto custa mais", "Um projeto é temporário e cria um resultado único", "As operações nunca usam um cronograma", "Um projeto não tem orçamento"], answer: 1, why: "Os projetos têm um começo, um fim e um resultado único; as operações repetem-se." },
          { objective: "O2", q: "Que documento inicia oficialmente um projeto e dá autoridade ao gestor do projeto?", options: ["O registo de riscos", "O gráfico de Gantt", "O relatório de lições aprendidas", "O termo de abertura do projeto"], answer: 3, why: "O termo de abertura autoriza o projeto e diz quem é o patrocinador." },
          { objective: "O2", q: "Os vizinhos importam-se muito com a limpeza do seu parque, mas não a podem impedir. Qual é a melhor abordagem?", options: ["Mantê-los informados", "Geri-los tão de perto como o patrocinador", "Deixá-los fora da lista", "Pedir-lhes para a financiar"], answer: 0, why: "As partes interessadas com influência baixa e interesse alto são mantidas informadas." },
          { objective: "O3", q: "O que é um pacote de trabalho?", options: ["A caixa em que chegam os materiais do projeto", "O relatório final", "A parte mais pequena da EDT, pequena o suficiente para ser estimada e atribuída", "O orçamento do patrocinador"], answer: 2, why: "Um pacote de trabalho é o nível mais baixo da estrutura de decomposição do trabalho." },
          { objective: "O3", q: "Tarefas: A (3 dias), depois B (4 dias) e C (2 dias), as duas depois de A, e depois D (1 dia) depois de B e C. Quanto dura o caminho crítico?", options: ["6 dias", "10 dias", "7 dias", "8 dias"], answer: 3, why: "A-B-D = 3 + 4 + 1 = 8 dias, mais longo do que A-C-D = 6 dias." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter o projeto no caminho certo e preparar-se para o CAPM",
      lessons: [
        {
          title: "Riscos, problemas e controlo de alterações",
          objectives: ["O4"],
          minutes: 6,
          goal: "Anotar os riscos num registo de riscos e passar um pedido de alteração pelo controlo de alterações.",
          text: [
            "Um risco é algo que PODE acontecer e que afetaria o projeto. Um problema (em inglês, \"issue\") é algo que está a acontecer AGORA. Anote os riscos cedo num registo de riscos: o risco, a sua probabilidade (quão provável, de 1 a 5), o seu impacto (quão grave, de 1 a 5), uma pontuação (probabilidade vezes impacto), uma resposta e um único responsável.",
            "Há quatro respostas principais a uma ameaça. Evitar (mudar o plano para que não possa acontecer). Transferir (passá-la para outra pessoa, por exemplo com um seguro ou um contrato). Mitigar (torná-la menos provável ou menos prejudicial). Aceitar (não fazer nada agora, mas acompanhá-la, e talvez guardar algum tempo ou dinheiro de reserva). Exemplo: chuva num evento ao ar livre, probabilidade 3, impacto 4, pontuação 12; resposta: mitigar alugando uma tenda; responsável: Maria.",
            "As alterações vão aparecer. O aumento descontrolado do âmbito (em inglês, \"scope creep\") é quando se acrescenta trabalho sem aprovação. Para o travar, use o controlo de alterações: escreva um pedido de alteração, veja o seu efeito no âmbito, no tempo, no custo, na qualidade e no risco, faça com que a pessoa certa (muitas vezes o patrocinador ou um comité de alterações) o aprove ou rejeite, e depois atualize o plano e o registo de alterações. Sem aprovação, não há alteração."
          ],
          steps: ["Faça a lista do que pode correr mal (e do que pode correr melhor do que o planeado).", "Dê uma pontuação a cada risco: probabilidade x impacto.", "Escolha uma resposta: evitar, transferir, mitigar ou aceitar.", "Dê a cada risco um único responsável.", "Para qualquer alteração: escreva-a, veja o impacto, obtenha aprovação e depois atualize o plano."],
          words: [["Risco", "algo incerto que pode acontecer e que afetaria o projeto."], ["Problema (issue)", "um problema que já está a acontecer."], ["Registo de riscos", "uma tabela de riscos com pontuações, respostas e responsáveis."], ["Mitigar", "tornar um risco menos provável ou menos prejudicial."], ["Aumento descontrolado do âmbito (scope creep)", "trabalho acrescentado ao projeto sem aprovação."], ["Controlo de alterações", "o processo para analisar, aprovar ou rejeitar alterações antes de serem feitas."]],
          slides: [
            { title: "Risco ou problema?", bullets: ["Risco: pode acontecer", "Problema: está a acontecer agora", "Anote os riscos cedo"] },
            { title: "O registo de riscos", bullets: ["Probabilidade x impacto = pontuação", "Uma resposta e um responsável por risco", "Reveja-o em todas as reuniões da equipa"] },
            { title: "Quatro respostas a uma ameaça", bullets: ["Evitar, transferir, mitigar, aceitar", "Exemplo: risco de chuva, pontuação 12, mitigar com uma tenda"] },
            { title: "Controlo de alterações", bullets: ["Escreva o pedido", "Veja o efeito no âmbito, tempo, custo, qualidade e risco", "Aprove ou rejeite e depois atualize o plano"] }
          ],
          tryIt: "Faça um registo de riscos para o seu projeto numa folha de cálculo ou em papel com as colunas: risco, probabilidade, impacto, pontuação, resposta, responsável. Acrescente pelo menos três riscos. Depois escreva um pedido de alteração que alguém poderia fazer e anote o seu efeito no tempo e no custo e quem o tem de aprovar.",
          youCanNow: "manter um registo de riscos e travar o aumento descontrolado do âmbito com o controlo de alterações.",
          quickCheck: [
            { objective: "O4", q: "Um risco tem probabilidade 4 e impacto 3. Qual é a sua pontuação?", options: ["7", "12", "1", "43"], answer: 1, why: "Pontuação = probabilidade x impacto = 4 x 3 = 12." },
            { objective: "O4", q: "Um membro da equipa acrescenta uma funcionalidade nova porque um cliente lhe pediu no corredor. O que correu mal?", options: ["Nada; os clientes estão primeiro", "O registo de riscos era longo demais", "O termo de abertura era curto demais", "Aumento descontrolado do âmbito: a alteração saltou o controlo de alterações"], answer: 3, why: "As alterações têm de ser escritas, analisadas quanto ao impacto e aprovadas antes de o trabalho começar." }
          ]
        },
        {
          title: "Preditiva, Agile ou híbrida: escolher a abordagem",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escolher uma abordagem preditiva, Agile ou híbrida para um projeto e dar as razões.",
          text: [
            "Uma abordagem preditiva (às vezes chamada em cascata, \"waterfall\", ou baseada em plano) planeia o âmbito, o cronograma e o custo no início e segue o plano, com as alterações a passar pelo controlo de alterações. Serve para trabalho em que os requisitos são claros e estáveis e as alterações custam caro, como construir uma rampa, mudar um armazém ou uma obra de construção com licenças.",
            "Uma abordagem Agile (ágil) entrega em ciclos curtos (iterações ou sprints), recebe comentários de cada vez e ajusta o plano. Serve para trabalho em que as necessidades não são claras ou vão mudar, como uma aplicação nova ou um serviço novo em que tem de descobrir o que os clientes querem. O Scrum e o Kanban são métodos Agile comuns.",
            "Uma abordagem híbrida mistura as duas: por exemplo, um plano preditivo para comprar o equipamento e uma data de abertura fixa, com sprints Agile para o site e o marketing. Seja qual for a abordagem, alguém tem de compreender os requisitos: aquilo de que o cliente precisa de verdade. Recolher, escrever e verificar os requisitos chama-se análise de negócio, e faz parte do que o CAPM abrange."
          ],
          steps: ["Pergunte: os requisitos são claros e estáveis?", "Pergunte: quanto custa uma alteração no fim do projeto?", "Pergunte: podemos entregar e receber comentários em partes pequenas?", "Claros e caros de alterar: preditiva. Pouco claros e fáceis de entregar em partes: Agile. Uma mistura: híbrida."],
          words: [["Abordagem preditiva", "planear o âmbito, o tempo e o custo no início e depois seguir o plano; também chamada em cascata (waterfall)."], ["Abordagem Agile", "entregar em ciclos curtos, receber comentários e ajustar o plano."], ["Abordagem híbrida", "uma mistura de partes preditivas e Agile num só projeto."], ["Requisito", "uma necessidade que o resultado tem de cumprir, como \"os clientes podem pagar pelo telefone\"."], ["Análise de negócio", "descobrir, escrever e verificar aquilo de que o cliente precisa de verdade."]],
          slides: [
            { title: "Preditiva (baseada em plano)", bullets: ["Planear o âmbito, o cronograma e o custo no início", "Melhor quando os requisitos são claros e estáveis", "Exemplo: construir uma rampa para cadeiras de rodas"] },
            { title: "Agile", bullets: ["Ciclos curtos com comentários de cada vez", "Melhor quando as necessidades não são claras ou vão mudar", "Exemplo: uma aplicação nova de telefone para os clientes"] },
            { title: "Híbrida e requisitos", bullets: ["Misturar as duas num só projeto", "Descobrir sempre aquilo de que o cliente precisa de verdade", "Esse trabalho é a análise de negócio"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development (Manifesto para o Desenvolvimento Ágil de Software)", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide (O Guia do Scrum)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Leia estes três: (1) asfaltar o parque de estacionamento de uma igreja com uma licença e um orçamento fixos; (2) uma aplicação nova de entregas em que os clientes estão sempre a pedir alterações; (3) abrir um restaurante com uma data fixa e um site novo de encomendas online. Escreva preditiva, Agile ou híbrida para cada um, com duas razões. Depois decida que abordagem serve para o seu próprio projeto e porquê.",
          youCanNow: "escolher uma abordagem preditiva, Agile ou híbrida e explicar porque serve.",
          quickCheck: [
            { objective: "O5", q: "Uma equipa está a construir uma aplicação nova e ainda não sabe que funcionalidades os clientes vão usar. Que abordagem serve melhor?", options: ["Preditiva, com todas as funcionalidades fixadas agora", "Nenhuma abordagem", "Agile, entregando partes pequenas e recebendo comentários", "Esperar até os clientes enviarem uma lista completa"], answer: 2, why: "Necessidades pouco claras servem para Agile: ciclos curtos e comentários mostram o que os clientes querem." },
            { objective: "O5", q: "Asfaltar um parque de estacionamento com uma licença fixa, um orçamento fixo e especificações claras serve para que abordagem?", options: ["Preditiva", "Agile", "Só Kanban", "Nenhuma, porque são operações"], answer: 0, why: "Requisitos claros e estáveis e alterações tardias caras servem para um plano preditivo." }
          ]
        },
        {
          title: "O CAPM: verificar as regras e planear o seu exame",
          objectives: ["O6"],
          minutes: 6,
          goal: "Construir um plano de estudo e de exame para o CAPM com datas, a partir das páginas oficiais do PMI.",
          text: [
            "O Certified Associate in Project Management (CAPM) é uma certificação de nível de entrada atribuída só pelo Project Management Institute (PMI). É feita para quem está a começar, por isso não pede anos de experiência em projetos como pede o Project Management Professional (PMP) do PMI. O PMI exige alguma formação em gestão de projetos antes de fazer o exame. Este curso prepara você; não é a certificação, e pode contar ou não para as horas de formação do PMI, por isso verifique em pmi.org.",
            "Antes de planear, leia a página oficial do CAPM no PMI e o manual do CAPM (handbook) e o Exam Content Outline (a lista oficial dos temas do exame) para os quais ela tem links. Anote: quem é elegível, quantas horas de formação precisa e o que conta, a taxa atual (os membros e os não membros do PMI podem pagar valores diferentes), como e onde pode fazer o exame, e como manter a certificação (tem de ser renovada). As versões recentes do outline abrangeram as noções básicas de gestão de projetos, os métodos preditivos, os métodos Agile e a análise de negócio, mas use o outline que o PMI mostra hoje.",
            "Veteranos: o GI Bill pode reembolsar as taxas de exames de licenças e certificações. Veja a página do VA sobre taxas de exames e a sua ferramenta GI Bill Comparison Tool para saber se um exame está aprovado. Fora dos Estados Unidos, o PMI tem capítulos locais em muitos países; procure um em pmi.org para encontrar grupos de estudo. Cuidado com quem vende \"aprovação garantida\" ou perguntas verdadeiras do exame: isso viola as regras do PMI e pode fazê-lo perder a certificação."
          ],
          steps: ["Abra pmi.org e encontre a página do CAPM, o manual e o Exam Content Outline.", "Anote a elegibilidade, as horas de formação, a taxa, o formato do exame e as regras de renovação.", "Escolha uma data-alvo para o exame daqui a 8 a 12 semanas (ou o que servir para a sua vida).", "Divida o seu estudo numa EDT por tema do exame, com marcos e testes de prática.", "Acrescente um registo de riscos: horário de trabalho, família, ansiedade nos exames, custo."],
          words: [["CAPM", "Certified Associate in Project Management, uma certificação de nível de entrada do PMI."], ["PMI", "Project Management Institute, a organização que atribui o CAPM e o PMP."], ["Exam Content Outline", "a lista oficial do PMI com os temas que um exame abrange."], ["PMP", "Project Management Professional, a certificação do PMI para gestores de projetos com experiência."], ["Elegibilidade", "os requisitos que tem de cumprir antes de se poder candidatar ao exame."]],
          slides: [
            { title: "O que é o CAPM", bullets: ["Certificação de nível de entrada, atribuída só pelo PMI", "Não pede anos de experiência em projetos, ao contrário do PMP", "Este curso prepara você; não é a certificação"] },
            { title: "Verifique em pmi.org", bullets: ["Elegibilidade e horas de formação", "Taxa atual, para membros e não membros", "Formato do exame, Exam Content Outline, renovação"] },
            { title: "Ajuda com os custos", bullets: ["Veteranos: o GI Bill pode reembolsar as taxas de exames de certificação", "Veja va.gov e a GI Bill Comparison Tool", "Noutros países: procure um capítulo local do PMI"] },
            { title: "Planeie o seu exame como um projeto", bullets: ["Termo de abertura: objetivo e data-alvo do exame", "EDT por tema do exame, com marcos", "Registo de riscos; nunca compre \"perguntas verdadeiras do exame\""] }
          ],
          sources: [{ name: "PMI: Certified Associate in Project Management (CAPM)", url: "https://www.pmi.org/certifications/certified-associate-capm" }, { name: "PMI: Certifications (Certificações)", url: "https://www.pmi.org/certifications" }, { name: "U.S. Department of Veterans Affairs: Reimbursement for licensing or certification test fees (Reembolso de taxas de exames de licenças ou certificações)", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" }],
          tryIt: "Tarefa final: abra a página do CAPM no PMI e anote a elegibilidade, as horas de formação, a taxa e os temas do exame. Depois planeie a sua preparação para o CAPM como um projeto: um termo de abertura de uma página com uma data-alvo para o exame, uma EDT do seu estudo por tema, um cronograma com datas e marcos e o caminho crítico marcado, e um registo de riscos com pelo menos três riscos. Acrescente a lista das páginas do PMI que verificou.",
          youCanNow: "verificar as regras atuais do CAPM no PMI e construir o seu próprio plano de estudo e de exame com datas.",
          quickCheck: [
            { objective: "O6", q: "Quem atribui o CAPM?", options: ["Este curso", "A entidade de licenciamento do seu estado", "Qualquer empresa de formação", "O Project Management Institute (PMI)"], answer: 3, why: "Só o PMI atribui o CAPM; os cursos só preparam você." },
            { objective: "O6", q: "Onde deve verificar a taxa atual do CAPM e as horas de formação?", options: ["Numa publicação nas redes sociais", "Na página oficial do CAPM e no manual em pmi.org", "Num vendedor de exames de prática", "Na resposta de um chatbot de IA"], answer: 1, why: "As taxas e os requisitos mudam; as páginas do próprio PMI são a fonte oficial." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter o projeto no caminho certo e preparar-se para o CAPM",
        questions: [
          { objective: "O4", q: "O seu fornecedor pode atrasar-se. Você combina com um segundo fornecedor, por precaução. Que resposta é esta?", options: ["Aceitar", "Evitar", "Mitigar", "Ignorar"], answer: 2, why: "Um fornecedor de reserva torna a ameaça menos prejudicial, o que é mitigação." },
          { objective: "O4", q: "O patrocinador pede um palco maior. O que deve acontecer primeiro?", options: ["Construí-lo logo", "Escrever um pedido de alteração e ver o seu efeito no tempo e no custo", "Dizer não a todas as alterações", "Tirar outra tarefa sem dizer a ninguém"], answer: 1, why: "O controlo de alterações vê o impacto e obtém aprovação antes de qualquer alteração." },
          { objective: "O5", q: "Que situação serve para uma abordagem híbrida?", options: ["Um restaurante novo com uma data de abertura fixa e um site novo de encomendas construído em sprints", "Asfaltar uma estrada com um desenho fixo", "Atender telefones todos os dias", "Pintar uma sala"], answer: 0, why: "A híbrida mistura um plano preditivo para as partes fixas com Agile para as partes que vão mudar." },
          { objective: "O6", q: "Em que é que o CAPM é diferente do PMP?", options: ["O CAPM é atribuído pelo seu estado", "Não há diferença", "O PMP é para principiantes", "O CAPM é de nível de entrada e não exige anos de experiência em projetos"], answer: 3, why: "O CAPM é a certificação de nível de entrada do PMI; o PMP é para gestores de projetos com experiência." },
          { objective: "O6", q: "Alguém na internet vende \"as perguntas verdadeiras do exame CAPM\". O que faz?", options: ["Compra-as para passar mais depressa", "Partilha-as com o seu grupo de estudo", "Recusa: isso viola as regras do PMI e pode fazê-lo perder a certificação", "Usa-as só uma vez"], answer: 2, why: "Usar conteúdo do exame que foi divulgado viola as regras do PMI; estude pelo outline e com testes de prática honestos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Gestão de Projetos (Preparação para o CAPM)",
    questions: [
      { objective: "O1", q: "Qual destes são operações contínuas, e não um projeto?", options: ["Construir um site novo", "Processar as encomendas dos clientes todos os dias", "Mudar um escritório para uma nova cidade", "Organizar uma feira de emprego que só acontece uma vez"], answer: 1, why: "Processar as encomendas todos os dias repete-se; os outros são temporários e têm um resultado único." },
      { objective: "O1", q: "Que três restrições formam a tripla restrição clássica?", options: ["Papel, canetas e impressoras", "Patrocinador, equipa e cliente", "Risco, problema e alteração", "Âmbito, cronograma e custo"], answer: 3, why: "O âmbito, o cronograma e o custo são as três clássicas, e afetam-se umas às outras." },
      { objective: "O1", q: "Em que fase entrega o resultado e regista as lições aprendidas?", options: ["Encerramento", "Começo", "Planeamento", "Execução do trabalho"], answer: 0, why: "O encerramento entrega o resultado e guarda as lições para a próxima vez." },
      { objective: "O2", q: "Quem aprova e financia o projeto?", options: ["O membro mais novo da equipa", "Todas as partes interessadas por igual", "O patrocinador", "O fornecedor"], answer: 2, why: "O patrocinador aprova, financia e apoia o projeto." },
      { objective: "O2", q: "O que deve estar num termo de abertura do projeto?", options: ["Um objetivo com uma medida e uma data, e o que está dentro e fora do âmbito", "O pedido de almoço de cada membro da equipa", "A lista detalhada das tarefas diárias", "A declaração de impostos do ano passado"], answer: 0, why: "O termo de abertura dá o propósito, um objetivo mensurável, o âmbito, o prazo, o orçamento e o patrocinador." },
      { objective: "O2", q: "Um vereador da câmara municipal tem influência alta e interesse alto na sua horta comunitária. Como o trata?", options: ["Mantém-no informado com uma nota por ano", "Fala com ele de vez em quando", "Deixa-o fora da lista", "Gere-o de perto"], answer: 3, why: "As partes interessadas com influência alta e interesse alto são geridas de perto." },
      { objective: "O3", q: "Para que serve uma estrutura de decomposição do trabalho?", options: ["Para fazer a lista dos riscos do projeto", "Para dividir as entregas em partes mais pequenas que se podem estimar e atribuir", "Para aprovar alterações", "Para pagar à equipa"], answer: 1, why: "A EDT decompõe o projeto todo em pacotes de trabalho." },
      { objective: "O3", q: "O que é o caminho crítico?", options: ["A cadeia mais curta de tarefas", "As tarefas de que o patrocinador mais gosta", "A cadeia mais longa de tarefas ligadas, que define o fim mais cedo", "A lista dos riscos"], answer: 2, why: "O caminho mais longo define a duração mais curta possível do projeto." },
      { objective: "O3", q: "Caminhos: A-B-E = 10 dias, A-C-E = 7 dias, A-D-E = 9 dias. Qual é a folga do caminho A-D-E?", options: ["0 dias", "3 dias", "9 dias", "1 dia"], answer: 3, why: "O caminho crítico tem 10 dias, por isso A-D-E pode atrasar 10 - 9 = 1 dia." },
      { objective: "O3", q: "Uma tarefa do caminho crítico atrasa 2 dias. O que acontece?", options: ["O fim do projeto passa 2 dias para mais tarde, a não ser que recupere o tempo", "Nada, porque tem folga", "Só o orçamento muda", "A tarefa sai da EDT"], answer: 0, why: "As tarefas do caminho crítico têm folga zero, por isso o seu atraso muda a data de fim." },
      { objective: "O4", q: "Qual é a diferença entre um risco e um problema?", options: ["Não há nenhuma", "Um problema pode acontecer; um risco está a acontecer agora", "Um risco pode acontecer; um problema está a acontecer agora", "Os riscos são só sobre dinheiro"], answer: 2, why: "Um risco é incerto e está no futuro; um problema é uma dificuldade atual." },
      { objective: "O4", q: "Compra um seguro para o evento para o caso de o local cancelar. Que resposta é esta?", options: ["Evitar", "Transferir", "Aceitar", "Mitigar"], answer: 1, why: "O seguro passa o impacto em dinheiro para outra pessoa, o que é transferir." },
      { objective: "O4", q: "O que é o aumento descontrolado do âmbito (scope creep)?", options: ["Uma ferramenta de cronograma", "Uma forma de pontuar riscos", "Um tipo de parte interessada", "Trabalho acrescentado ao projeto sem aprovação"], answer: 3, why: "É trabalho acrescentado sem aprovação; o controlo de alterações trava-o." },
      { objective: "O5", q: "Os requisitos são claros e estáveis, e as alterações tardias custam muito caro. Que abordagem serve?", options: ["Preditiva", "Agile", "Nenhum plano", "Mudar todas as semanas"], answer: 0, why: "Necessidades claras e estáveis e alterações caras servem para uma abordagem baseada em plano." },
      { objective: "O5", q: "O que é a análise de negócio?", options: ["Contar o dinheiro no fim", "Escolher o almoço da equipa", "Descobrir, escrever e verificar aquilo de que o cliente precisa de verdade", "Assinar o termo de abertura"], answer: 2, why: "A análise de negócio descobre os requisitos reais." },
      { objective: "O5", q: "Uma organização sem fins lucrativos está a construir uma aplicação nova para voluntários e espera que os comentários mudem as funcionalidades. Que abordagem serve melhor?", options: ["Preditiva, com todas as funcionalidades fixadas agora", "Agile, entregando partes pequenas com comentários", "Nenhuma abordagem", "Construir tudo e mostrar só no fim"], answer: 1, why: "Necessidades que mudam servem para os ciclos curtos e os comentários do Agile." },
      { objective: "O6", q: "O que é que este curso lhe dá para o CAPM?", options: ["A própria certificação CAPM", "Uma aprovação garantida", "Uma inscrição como membro do PMI", "Preparação nas ideias principais; só o PMI atribui o CAPM"], answer: 3, why: "O curso prepara você; só o PMI atribui a certificação." },
      { objective: "O6", q: "Que documento oficial faz a lista dos temas que o exame CAPM abrange?", options: ["O Exam Content Outline do PMI", "Uma publicação num fórum", "A descrição do seu emprego", "Um anúncio nas redes sociais"], answer: 0, why: "O PMI publica o Exam Content Outline de cada exame." },
      { objective: "O6", q: "Um veterano quer ajuda para pagar a taxa do exame CAPM. Onde deve verificar?", options: ["Num vendedor de testes de prática", "No seu banco", "Na página do VA sobre taxas de exames de licenças e certificações e na GI Bill Comparison Tool", "Num fórum qualquer"], answer: 2, why: "O GI Bill pode reembolsar as taxas de exames de certificação aprovados; as páginas do VA explicam como." },
      { objective: "O6", q: "Qual é a melhor forma de planear o exame CAPM?", options: ["Estudar quando se lembrar", "Tratá-lo como um projeto: termo de abertura, EDT por tema, cronograma com datas e registo de riscos", "Comprar perguntas verdadeiras do exame", "Fazer o exame sem verificar a elegibilidade"], answer: 1, why: "Um plano com datas, construído a partir do outline oficial do PMI, é o caminho fiável." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e entregue outra vez.",
    criteria: [
      { name: "Termo de abertura", objective: "O2", notYet: "O objetivo é vago ou não tem data, ou falta o que está dentro e fora do âmbito.", meets: "Uma página com o propósito, um objetivo com um número e uma data, o que está dentro e fora do âmbito, o patrocinador e os marcos.", exceeds: "Também faz a lista das partes interessadas, com a influência e o interesse de cada uma e como cada uma vai ser mantida informada." },
      { name: "EDT e cronograma", objective: "O3", notYet: "As tarefas estão numa lista sem decomposição, durações nem dependências.", meets: "Uma EDT com pelo menos dois níveis e um cronograma com datas, marcos, dependências e o caminho crítico marcado.", exceeds: "Mostra a folga das tarefas que não são críticas e a duração do caminho crítico está calculada corretamente." },
      { name: "Registo de riscos", objective: "O4", notYet: "Menos de três riscos, ou riscos sem resposta ou sem responsável.", meets: "Pelo menos três riscos, cada um com probabilidade, impacto, pontuação, uma resposta e um único responsável.", exceeds: "Usa mais de um tipo de resposta e inclui uma nota de controlo de alterações sobre como o plano vai ser alterado." },
      { name: "Abordagem", objective: "O5", notYet: "Nenhuma abordagem escolhida, ou nenhuma razão dada.", meets: "Diz preditiva, Agile ou híbrida para o plano de estudo e dá duas razões.", exceeds: "Mostra como a abordagem é usada, por exemplo ciclos de estudo semanais com uma revisão." },
      { name: "Regras oficiais do CAPM verificadas", objective: "O6", notYet: "As taxas, as horas ou os temas do exame foram copiados de uma fonte não oficial ou ficaram de fora.", meets: "Faz a lista da elegibilidade, das horas de formação, da taxa e dos temas do exame a partir das páginas do PMI, com os nomes das páginas.", exceeds: "Também faz a lista de ajudas com os custos (por exemplo o GI Bill ou o apoio do empregador) e de um capítulo local do PMI ou grupo de estudo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam ao CAPM ou terminam a formação exigida pelo PMI em 90 dias (inquérito de seguimento)",
      "Alunos que passam no CAPM ou são contratados ou promovidos para um cargo de coordenador de projeto, assistente de projeto ou chefe de equipa",
      "Alunos que dizem ter usado um termo de abertura, um cronograma ou um registo de riscos no trabalho ou na sua comunidade em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta, ou uma folha de cálculo gratuita (Google Sheets ou Excel online)",
      "Acesso à internet para ler a página do CAPM, o manual e o Exam Content Outline em pmi.org",
      "Um pequeno projeto real para planear (da família, do trabalho, da igreja, da comunidade ou de uma unidade militar)",
      "Cerca de 75 a 90 minutos no total, em sessões curtas, mais o tempo para a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; resolva o exemplo do caminho crítico num quadro branco antes de os alunos fazerem o seu.",
      "Deixe os alunos usar um projeto da sua própria vida; os veteranos podem passar um plano de missão para o termo de abertura, a EDT e o registo de riscos.",
      "Abram pmi.org juntos na última sessão para os alunos verem a elegibilidade, as taxas e o Exam Content Outline atuais; não diga números de memória.",
      "Deixe claro que o curso prepara os alunos e não atribui o CAPM; diga-lhes para verificarem com o PMI se conta para as horas de formação exigidas.",
      "Avise contra quem vende perguntas verdadeiras do exame ou aprovações garantidas, e avalie a tarefa final com a grelha de avaliação."
    ]
  }
};
