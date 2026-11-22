"use strict";

// Koach Learn course (Portuguese translation of shared/ai-project-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-project-management-pt",
  lang: "pt",
  translationOf: "ai-project-management",
  category: "Veterans (military)",
  name: "Gestão de Projetos com IA",
  skills: "Escrever um termo de abertura do projeto com IA, Dividir o trabalho numa EAP, Fazer um cronograma com marcos, Atribuir papéis com uma matriz RACI, Manter um registo de riscos, Escrever relatórios de situação e lições aprendidas",
  outcome: "usar um assistente de IA para planear e gerir um pequeno projeto do início ao fim: um termo de abertura de uma página, uma divisão do trabalho, um cronograma com marcos, uma matriz RACI, um registo de riscos, relatórios de situação semanais e um fecho com lições aprendidas, verificando você mesmo cada rascunho da IA.",
  about: [
    "Os gestores de projetos planeiam o trabalho, organizam as pessoas e mantêm todos informados até o trabalho estar feito. Assistentes de IA como o ChatGPT, o Microsoft Copilot e o Google Gemini conseguem escrever os documentos em minutos, para você gastar o seu tempo com decisões e pessoas.",
    "Este curso é para veteranos militares que passam para funções de projeto na vida civil (muitos já lideraram missões, logística e equipas), para participantes de programas de emprego que procuram trabalho como coordenador ou assistente de projeto, e para quem lidera um projeto no trabalho ou na comunidade.",
    "Você vai planear um projeto real ou de prática, do termo de abertura ao fecho. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Planeie um projeto real ou de prática de quatro a doze semanas (por exemplo uma feira de emprego na comunidade, uma mudança de escritório ou o lançamento de um site) com ajuda da IA: um termo de abertura de uma página, uma estrutura analítica do projeto (EAP), um cronograma com pelo menos quatro marcos, uma matriz RACI, um registo com cinco riscos, um relatório de situação semanal e um modelo de lições aprendidas. Marque cada lugar onde corrigiu a IA.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos militares que passam para funções de projeto na vida civil, participantes de programas de emprego que procuram trabalho como coordenador ou assistente de projeto, e qualquer pessoa que lidera um projeto no trabalho ou na comunidade.",
    startingPoint: "Muitos já lideraram missões, logística ou equipas e sabem organizar pessoas e tarefas. A maioria nunca usou documentos de projeto civis, como um termo de abertura, uma matriz RACI ou um registo de riscos, nem usou IA para os escrever.",
    gap: "Os empregadores civis esperam que a equipa de projeto faça os documentos de planeamento habituais e relatórios de situação claros. Os alunos precisam de planear um projeto do termo de abertura ao fecho com rascunhos da IA que eles próprios verificam, para mostrarem capacidades de gestão de projetos nas entrevistas e no trabalho.",
    constraints: [
      "Tempo: lições de cerca de cinco minutos com tarefas de prática curtas",
      "Aparelhos: um computador ou telefone com um assistente de IA gratuito e uma folha de cálculo",
      "Nenhuma informação confidencial do empregador ou militar nos pedidos à IA",
      "As estimativas e os números da IA têm de ser verificados; as regras e taxas de certificação vêm de pmi.org",
      "Palavras civis simples; os termos militares são traduzidos, não se assume que todos os conhecem"
    ],
    prerequisites: "Nenhum. Quem nunca usou ferramentas de IA pode fazer primeiro o curso \"Introdução à IA e Confiança Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os dados principais de um projeto real ou de prática", action: "escrever um termo de abertura de uma página com o objetivo, o âmbito, o patrocinador, o orçamento, o prazo e as medidas de sucesso", standard: "com cada erro da IA corrigido e o acordo do patrocinador anotado" },
    { id: "O2", condition: "A partir do seu termo de abertura", action: "criar uma estrutura analítica do projeto (EAP) e um cronograma com durações, dependências e marcos", standard: "com pelo menos quatro marcos e as estimativas de tempo da IA verificadas" },
    { id: "O3", condition: "Com as tarefas principais do projeto", action: "fazer uma matriz RACI que mostra quem é Responsável, quem Aprova, quem é Consultado e quem é Informado", standard: "com exatamente uma pessoa que Aprova (A) por tarefa e o trabalho bem repartido" },
    { id: "O4", condition: "Com uma lista de riscos do projeto feita pela IA", action: "avaliar os cinco riscos mais reais e escolher uma resposta e um dono para cada um", standard: "usando bem evitar, reduzir, transferir ou aceitar" },
    { id: "O5", condition: "Para uma semana do projeto", action: "escrever um relatório de situação de meia página com um estado honesto vermelho, amarelo ou verde e as decisões necessárias", standard: "com cada data e número verificados" },
    { id: "O6", condition: "No fim de um projeto", action: "fazer uma revisão de lições aprendidas sem culpar ninguém e fechar o projeto comparando com o termo de abertura", standard: "respondendo às quatro perguntas da revisão e guardando os ficheiros" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear o projeto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever um termo de abertura do projeto com IA",
          minutes: 5,
          goal: "Escrever um termo de abertura de uma página que define o objetivo, o âmbito e o sucesso do projeto.",
          text: [
            "O termo de abertura do projeto é como a certidão de nascimento do projeto. Diz porque o projeto existe, o que vai entregar, o que está dentro e fora do âmbito, quem é o patrocinador, o orçamento e o prazo aproximados, e como vai saber que deu certo. É como uma ordem de missão: finalidade, resultado final, limites.",
            "Dê os dados à IA e deixe-a escrever o rascunho: \"Escreva um termo de abertura de uma página. Projeto: feira de emprego para veteranos no centro comunitário a 15 de março. Objetivo: 30 empregadores, 200 participantes. Orçamento: $3,000. Patrocinador: o diretor do centro. Fora do âmbito: comida além do café.\"",
            "Depois corrija-o. A IA pode inventar números, interessados ou objetivos. Cada dado tem de ser seu. Peça ao patrocinador que aprove o termo de abertura antes de o trabalho começar; isso evita discussões mais tarde sobre o que o projeto devia fazer."
          ],
          steps: ["Escreva a finalidade, o objetivo, o prazo, o orçamento e o patrocinador.", "Faça a lista do que está dentro e fora do âmbito.", "Peça à IA um rascunho de termo de abertura de uma página.", "Corrija tudo o que a IA inventou.", "Obtenha o acordo do patrocinador."],
          words: [["Termo de abertura do projeto", "um documento curto que autoriza um projeto e diz o seu objetivo, âmbito e limites."], ["Âmbito", "o trabalho que o projeto vai fazer e o que não vai fazer."], ["Patrocinador", "a pessoa que apoia e aprova o projeto."], ["Interessado", "qualquer pessoa afetada pelo projeto ou que participa nele."]],
          slides: [
            { title: "O termo de abertura é a ordem de missão", bullets: ["Finalidade e objetivo", "Âmbito: dentro e fora", "Patrocinador, orçamento, prazo, sucesso"] },
            { title: "A IA escreve a partir dos seus dados", bullets: ["Dê-lhe os números verdadeiros", "Peça uma página"] },
            { title: "Corrigir e aprovar", bullets: ["Tire os dados inventados", "O patrocinador aprova antes de o trabalho começar"] }
          ],
          tryIt: "Escolha um projeto real ou de prática. Escreva os dados principais, peça à IA um rascunho de termo de abertura de uma página e marque tudo o que corrigiu.",
          youCanNow: "escrever um termo de abertura de projeto de uma página com ajuda da IA.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer âmbito num termo de abertura?", options: ["Quanto custa o projeto", "O que o projeto vai fazer e o que não vai fazer", "Quem são os membros da equipa", "A data em que o projeto acaba"], answer: 1, why: "O âmbito marca os limites do projeto: o que está dentro e o que está fora." },
            { objective: "O1", q: "O rascunho da IA tem um orçamento que você nunca lhe deu. O que faria?", options: ["Mantê-lo porque parece certo", "Apagar a linha do orçamento de todos os documentos", "Trocá-lo pelo orçamento verdadeiro do patrocinador e marcar a correção", "Pedir à equipa que vote um orçamento"], answer: 2, why: "A IA preenche o que falta com palpites; o orçamento verdadeiro vem do patrocinador." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dividir o trabalho e fazer o cronograma",
          minutes: 6,
          goal: "Transformar o termo de abertura numa estrutura analítica do projeto e num cronograma com marcos.",
          text: [
            "A estrutura analítica do projeto (EAP; em inglês WBS) divide o projeto todo em partes mais pequenas, até cada parte ser uma tarefa que uma pessoa faz em poucos dias. Para uma feira de emprego: local, empregadores, divulgação, voluntários, organização no próprio dia, seguimento, e cada uma dividida em tarefas.",
            "Peça à IA: \"A partir deste termo de abertura, crie uma EAP com fases e tarefas. Depois estime a duração de cada tarefa e diga que tarefas dependem de outras.\" As dependências contam: não pode imprimir panfletos antes de o local e a data estarem confirmados.",
            "Passe isso para um cronograma numa folha de cálculo ou numa ferramenta gratuita, a contar para trás a partir do prazo. Marque os marcos, os grandes pontos de controlo como \"local reservado\" ou \"20 empregadores confirmados\". Compare as estimativas de tempo da IA com a sua experiência; ela costuma ser otimista demais."
          ],
          steps: ["Peça à IA uma EAP com fases e tarefas.", "Divida qualquer tarefa maior do que alguns dias.", "Acrescente durações e dependências.", "Faça o cronograma para trás a partir do prazo.", "Marque pelo menos quatro marcos."],
          words: [["EAP (WBS)", "estrutura analítica do projeto: o projeto todo dividido em tarefas mais pequenas."], ["Dependência", "uma tarefa que só pode começar quando outra acaba."], ["Marco", "um ponto de controlo importante num projeto."]],
          slides: [
            { title: "Estrutura analítica do projeto (EAP)", bullets: ["Do projeto todo para fases e tarefas", "Cada tarefa: uma pessoa, poucos dias"] },
            { title: "Durações e dependências", bullets: ["Quanto tempo leva cada tarefa", "O que tem de acabar primeiro"] },
            { title: "Cronograma e marcos", bullets: ["Conte para trás a partir do prazo", "Marque os pontos de controlo importantes", "As estimativas da IA são otimistas"] }
          ],
          tryIt: "Use a IA para criar uma EAP do seu projeto e depois faça um cronograma simples numa folha de cálculo com durações, dependências e pelo menos quatro marcos.",
          youCanNow: "dividir um projeto em tarefas e organizá-las num cronograma com marcos.",
          quickCheck: [
            { objective: "O2", q: "O que é um marco?", options: ["Um ponto importante que mostra que uma grande parte está feita", "A tarefa mais longa do cronograma", "Uma reunião com o patrocinador", "Um risco que aconteceu"], answer: 0, why: "Um marco assinala um resultado importante, como \"local reservado\"." },
            { objective: "O2", q: "A sua EAP tem uma tarefa chamada \"Planear o evento\" que vai levar seis semanas. O que faria?", options: ["Deixá-la como uma só tarefa", "Tirá-la do plano", "Dá-la ao patrocinador", "Dividi-la em tarefas mais pequenas que uma pessoa faz em poucos dias"], answer: 3, why: "As tarefas da EAP devem ser pequenas o bastante para uma pessoa em poucos dias." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Atribuir papéis com uma matriz RACI",
          minutes: 5,
          goal: "Fazer uma matriz RACI para todos saberem quem faz, quem decide e quem é informado.",
          text: [
            "A confusão sobre quem faz o quê afunda projetos. Uma matriz RACI tem as tarefas de cima para baixo e as pessoas da esquerda para a direita, e marca cada quadrado: R de Responsável (faz o trabalho), A de quem Aprova (é dono do resultado e dá o visto final; só um por tarefa), C de Consultado (dá a sua opinião) e I de Informado (recebe as novidades).",
            "Peça à IA: \"Faça uma matriz RACI para estas tarefas e papéis: [tarefas], [pessoas ou papéis].\" Depois verifique: cada tarefa tem exatamente um A? Há alguém com R's demais? Há alguém Consultado em tudo, a atrasar as coisas?",
            "Partilhe a matriz RACI com a equipa e o patrocinador. Quando surgirem perguntas, como quem aprova o panfleto, mostre a matriz."
          ],
          steps: ["Faça a lista das tarefas principais e das pessoas ou papéis.", "Peça à IA um rascunho de matriz RACI.", "Verifique que cada tarefa tem exatamente um A.", "Reparta os R's para ninguém ficar sobrecarregado.", "Partilhe-a com a equipa e o patrocinador."],
          words: [["Matriz RACI", "uma tabela que mostra, para cada tarefa, quem é Responsável, quem Aprova, quem é Consultado e quem é Informado."], ["Quem Aprova (A)", "a única pessoa que é dona do resultado e dá o visto final; em inglês \"Accountable\"."]],
          slides: [
            { title: "RACI", bullets: ["R: Responsável, faz o trabalho", "A: Aprova, é o dono; só um", "C: Consultado; I: Informado"] },
            { title: "Verifique a matriz", bullets: ["Exatamente um A por tarefa", "Ninguém sobrecarregado de R's", "Nem todos consultados em tudo"] },
            { title: "Use-a", bullets: ["Partilhe com a equipa e o patrocinador", "Mostre-a quando surgirem perguntas"] }
          ],
          tryIt: "Peça à IA um rascunho de matriz RACI para as tarefas principais do seu projeto. Corrija-a para cada tarefa ter exatamente um A e o trabalho ficar bem repartido.",
          youCanNow: "fazer e verificar uma matriz RACI que deixa os papéis claros.",
          quickCheck: [
            { objective: "O3", q: "Numa matriz RACI, o que quer dizer \"C\"?", options: ["Concluído", "Consultado: dá a sua opinião antes das decisões", "Controlador: faz o trabalho todo", "Cancelado"], answer: 1, why: "As pessoas consultadas dão a sua opinião antes do trabalho ou da decisão." },
            { objective: "O3", q: "Duas pessoas estão marcadas como quem Aprova (A) a mesma tarefa. O que faria?", options: ["Escolher uma só pessoa para Aprovar", "Manter as duas para o trabalho ser feito", "Marcar as duas como Informadas", "Tirar a tarefa"], answer: 0, why: "Cada tarefa precisa de exatamente uma pessoa que Aprova e é dona do resultado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear o projeto",
        questions: [
          { objective: "O1", q: "O que define um termo de abertura do projeto?", options: ["Só o almoço da equipa", "A declaração de impostos da empresa", "A finalidade, o âmbito, o patrocinador, o orçamento, o prazo e o sucesso do projeto", "Cada tarefa em detalhe"], answer: 2, why: "O termo de abertura é a base do projeto." },
          { objective: "O1", q: "A IA põe no seu termo de abertura o objetivo de \"100 empregadores\", mas você disse 30. O que faz?", options: ["Corrige para o seu objetivo verdadeiro", "Mantém", "Faz a média dos dois", "Apaga o termo de abertura"], answer: 0, why: "Cada dado do termo de abertura tem de ser seu." },
          { objective: "O2", q: "Uma dependência é:", options: ["Um membro da equipa", "Uma linha do orçamento", "Um marco", "Uma tarefa que só pode começar quando outra acaba"], answer: 3, why: "As dependências definem a ordem do trabalho." },
          { objective: "O3", q: "Numa matriz RACI, quantas pessoas devem Aprovar (A) uma tarefa?", options: ["Todos", "Exatamente uma", "Nenhuma", "Pelo menos cinco"], answer: 1, why: "Um só dono evita confusão." },
          { objective: "O2", q: "A IA estima que reservar um local leva uma hora. Segundo este curso, você deve:", options: ["Aceitar", "Comparar com a sua experiência; as estimativas da IA são otimistas", "Pôr zero", "Não fazer o cronograma"], answer: 1, why: "Use o seu próprio juízo sobre as durações." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir e fechar o projeto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Manter um registo de riscos",
          minutes: 5,
          goal: "Identificar e avaliar os riscos do projeto e planear respostas com ajuda da IA.",
          text: [
            "Um risco é algo que pode acontecer e que afetaria o projeto. Um registo de riscos tem cada risco, a probabilidade, a gravidade do impacto, o plano de resposta e um dono que o vigia.",
            "Peça à IA: \"Faça a lista de dez riscos para este projeto [cole o termo de abertura], avalie a probabilidade e o impacto como baixo, médio ou alto, e sugira uma resposta para cada um.\" Respostas: evitar, reduzir, transferir (por exemplo com um seguro ou um contrato) ou aceitar com um plano de recurso.",
            "Fique só com os riscos que são reais para o seu projeto, acrescente os que a IA esqueceu e reveja o registo todas as semanas. Os planeadores militares chamam a isto pensar nas alternativas e nos passos seguintes; na vida civil chama-se gestão de riscos."
          ],
          steps: ["Peça à IA uma lista de riscos a partir do seu termo de abertura.", "Avalie a probabilidade e o impacto.", "Escolha uma resposta: evitar, reduzir, transferir ou aceitar.", "Dê um dono a cada risco.", "Reveja o registo todas as semanas."],
          words: [["Risco", "algo que pode acontecer e afetar o projeto."], ["Registo de riscos", "uma lista de riscos com avaliações, respostas e donos."], ["Mitigação", "passos para reduzir a probabilidade ou o impacto de um risco."]],
          slides: [
            { title: "Colunas do registo de riscos", bullets: ["Risco, probabilidade, impacto", "Resposta e dono"] },
            { title: "Quatro respostas", bullets: ["Evitar ou reduzir", "Transferir (seguro, contrato)", "Aceitar com um plano de recurso"] },
            { title: "Só riscos reais", bullets: ["Tire os riscos que não se aplicam", "Acrescente o que a IA esqueceu", "Reveja todas as semanas"] }
          ],
          tryIt: "Peça à IA uma lista de riscos para o seu projeto. Fique com os cinco mais reais, avalie-os, escolha as respostas e dê-lhes donos.",
          youCanNow: "fazer e manter um registo de riscos com ajuda da IA.",
          quickCheck: [
            { objective: "O4", q: "Que resposta ao risco quer dizer tornar um risco menos provável ou menos grave?", options: ["Evitar", "Transferir", "Reduzir", "Aceitar"], answer: 2, why: "Reduzir baixa a probabilidade ou o dano de um risco." },
            { objective: "O4", q: "A IA dá 25 riscos possíveis para a sua feira de emprego. O que faria?", options: ["Pôr os 25 no registo", "Ignorá-los todos", "Escolher o primeiro da lista da IA", "Ficar com os cinco mais reais, avaliá-los e dar-lhes donos"], answer: 3, why: "Um registo útil foca-se nos riscos mais reais, cada um com uma resposta e um dono." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escrever relatórios de situação que as pessoas leem",
          minutes: 5,
          goal: "Escrever um relatório de situação semanal curto com um estado claro vermelho, amarelo ou verde.",
          text: [
            "O relatório de situação mantém o patrocinador e a equipa informados. Fique pela meia página: estado geral (verde no caminho certo, amarelo em risco, vermelho fora do caminho), o que foi feito esta semana, o que vem a seguir, riscos e problemas, e as decisões que o patrocinador tem de tomar.",
            "Cole na IA as atualizações do cronograma e as suas notas e peça: \"Escreva um relatório de situação semanal de meia página com a cor do estado geral, o que foi feito, os próximos passos, riscos e problemas, e as decisões necessárias. Seja direto.\"",
            "Seja honesto com o amarelo e o vermelho. Uma má notícia cedo é um presente: dá tempo ao patrocinador para ajudar. Esconder problemas até ao prazo é a maneira mais rápida de perder a confiança. Verifique cada data e número que a IA escreveu."
          ],
          steps: ["Atualize o cronograma e o registo de riscos.", "Cole as notas e atualizações na IA.", "Peça um relatório de meia página com a cor do estado.", "Verifique cada data e número.", "Envie-o no mesmo dia todas as semanas."],
          words: [["Relatório de situação", "uma atualização regular sobre o avanço, os riscos e as necessidades de um projeto."], ["Problema", "algo que está a acontecer agora, ao contrário de um risco, que pode acontecer."], ["Estado RAG", "vermelho, âmbar (amarelo) ou verde: um sinal rápido da saúde do projeto."]],
          slides: [
            { title: "Meia página", bullets: ["Cor do estado: verde, amarelo, vermelho", "Feito esta semana e próximos passos", "Riscos, problemas, decisões necessárias"] },
            { title: "A IA escreve a partir das suas notas", bullets: ["Cole as atualizações do cronograma", "Peça uma linguagem direta", "Verifique datas e números"] },
            { title: "Más notícias cedo", bullets: ["Dão tempo ao patrocinador para ajudar", "Esconder problemas faz perder a confiança"] }
          ],
          tryIt: "Escreva com ajuda da IA um relatório de situação semanal do seu projeto (semana 3, real ou imaginada). Ponha uma cor de estado honesta e pelo menos uma decisão necessária.",
          youCanNow: "escrever com ajuda da IA um relatório de situação semanal claro e honesto.",
          quickCheck: [
            { objective: "O5", q: "O que costuma querer dizer um estado amarelo?", options: ["O projeto acabou", "Há um problema que pode afetar o plano se não for resolvido", "Está tudo no caminho certo", "O projeto foi cancelado"], answer: 1, why: "O amarelo é um aviso: em risco, mas ainda se pode recuperar." },
            { objective: "O5", q: "Precisa que o patrocinador aprove mais dinheiro esta semana. O que faria no relatório de situação?", options: ["Deixar isso de fora para o relatório ficar verde", "Pôr isso na página três", "Falar disso só pessoalmente no próximo mês", "Escrever isso claramente nas decisões necessárias"], answer: 3, why: "As decisões necessárias devem ser fáceis de ver, para o patrocinador poder agir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fechar o projeto e registar as lições aprendidas",
          minutes: 5,
          goal: "Fechar bem um projeto e fazer uma revisão de lições aprendidas.",
          text: [
            "Muitos projetos simplesmente vão morrendo. Um fecho bem feito confirma que os objetivos foram atingidos (compare com o termo de abertura), passa a outros o que continua, paga as últimas contas, agradece à equipa e guarda os ficheiros onde outros os possam encontrar.",
            "Uma revisão de lições aprendidas, como uma revisão pós-ação militar, pergunta: o que planeámos, o que aconteceu, porquê, e o que devemos fazer de outra maneira da próxima vez? Recolha a opinião de todos, incluindo o que correu bem.",
            "A IA pode organizar as opiniões: \"Agrupe estes comentários de lições aprendidas por temas e escreva três recomendações para projetos futuros.\" Não culpe ninguém, foque-se no processo e verifique se o resumo é justo. Se quer crescer na gestão de projetos, o Project Management Institute (PMI, instituto de gestão de projetos) oferece certificações como a CAPM, a PMP e a PMI-CPMAI, focada em IA; veja em pmi.org os requisitos e as taxas atuais."
          ],
          steps: ["Compare os resultados com os objetivos do termo de abertura.", "Passe o trabalho que continua e pague as últimas contas.", "Faça uma revisão de lições aprendidas sem culpar ninguém.", "Use a IA para agrupar os comentários e escrever recomendações.", "Guarde todos os ficheiros e agradeça à equipa."],
          words: [["Fecho", "o fim formal de um projeto."], ["Lições aprendidas", "o que uma equipa aprendeu e que deve mudar a forma de gerir os próximos projetos."], ["Revisão pós-ação", "um olhar organizado para trás: o que se planeou, o que aconteceu, porquê, o que mudar."]],
          slides: [
            { title: "Feche bem", bullets: ["Compare os resultados com o termo de abertura", "Passe o trabalho, pague as contas, guarde os ficheiros", "Agradeça à equipa"] },
            { title: "Lições aprendidas", bullets: ["Planeado, aconteceu, porquê, mudar", "Também o que correu bem", "Sem culpar ninguém"] },
            { title: "Faça crescer a sua carreira", bullets: ["Certificações do PMI: CAPM, PMP, PMI-CPMAI", "Veja em pmi.org as regras e taxas atuais"] }
          ],
          sources: [{ name: "Project Management Institute: certificações", url: "https://www.pmi.org/certifications" }],
          tryIt: "Tarefa final: termine o plano do seu projeto com o termo de abertura, a EAP, o cronograma com marcos, a matriz RACI, o registo de riscos e um relatório de situação, e depois escreva um modelo de lições aprendidas com as quatro perguntas da revisão. Marque cada lugar onde corrigiu a IA.",
          youCanNow: "planear, gerir e fechar um projeto usando a IA para escrever os documentos enquanto você toma as decisões.",
          quickCheck: [
            { objective: "O6", q: "Para que serve uma revisão de lições aprendidas?", options: ["Para encontrar alguém a quem culpar", "Para melhorar o processo no próximo projeto", "Para acabar o projeto sem papelada", "Para dar prémios"], answer: 1, why: "As lições aprendidas não culpam ninguém e focam-se no que mudar da próxima vez." },
            { objective: "O6", q: "O projeto está feito. O que faria antes de o dar por fechado?", options: ["Apagar os ficheiros do projeto", "Começar logo o próximo projeto", "Comparar os resultados com o termo de abertura e guardar os ficheiros", "Enviar só uma mensagem de agradecimento"], answer: 2, why: "O fecho compara os resultados com o termo de abertura e guarda os registos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir e fechar o projeto",
        questions: [
          { objective: "O4", q: "Qual é a diferença entre um risco e um problema?", options: ["Não há diferença", "Os problemas são sempre bons", "Os riscos são só sobre dinheiro", "Um risco pode acontecer; um problema está a acontecer agora"], answer: 3, why: "Os riscos são possíveis; os problemas são atuais." },
          { objective: "O4", q: "Comprar um seguro contra uma perda possível é que resposta ao risco?", options: ["Transferir", "Evitar", "Aceitar", "Ignorar"], answer: 0, why: "O seguro transfere o impacto para outra pessoa." },
          { objective: "O5", q: "É provável que o seu projeto falhe um marco. Que estado deve mostrar o relatório?", options: ["Verde para não preocupar", "Nenhum estado", "Amarelo ou vermelho, com honestidade", "Roxo"], answer: 2, why: "Uma má notícia cedo deixa o patrocinador ajudar." },
          { objective: "O6", q: "Uma revisão de lições aprendidas deve ser:", options: ["Uma procura de alguém para despedir", "Saltada", "Só sobre o que correu mal", "Sem culpar ninguém e focada no processo"], answer: 3, why: "Revisões sem culpas recebem opiniões honestas." },
          { objective: "O6", q: "Onde deve verificar os requisitos e as taxas atuais das certificações do PMI?", options: ["Num fórum qualquer", "Num palpite da IA", "Em pmi.org", "Num panfleto"], answer: 2, why: "Os requisitos oficiais mudam; verifique na fonte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gestão de Projetos com IA",
    questions: [
      { objective: "O1", q: "O trabalho principal de um gestor de projetos é:", options: ["Fazer todas as tarefas sozinho", "Planear o trabalho, organizar as pessoas e manter todos informados", "Só aprovar orçamentos", "Escrever código"], answer: 1, why: "Os gestores de projetos planeiam, coordenam e comunicam." },
      { objective: "O1", q: "Neste curso, o papel da IA é:", options: ["Escrever rascunhos de documentos enquanto você toma as decisões", "Tomar todas as decisões", "Substituir o patrocinador", "Aprovar o orçamento"], answer: 0, why: "A IA escreve rascunhos; o gestor de projetos decide." },
      { objective: "O1", q: "Um termo de abertura parece-se mais com que documento militar?", options: ["Um pedido de licença", "Uma lista de verificação da farda", "Uma ordem de missão", "Um recibo de vencimento"], answer: 2, why: "Os dois dão a finalidade, o resultado final e os limites." },
      { objective: "O1", q: "\"Comida além do café\" na lista do que está fora do âmbito quer dizer:", options: ["O projeto não a vai fornecer", "É o objetivo principal", "É um risco", "É um marco"], answer: 0, why: "O trabalho fora do âmbito não faz parte do projeto." },
      { objective: "O1", q: "Quem deve aprovar o termo de abertura antes de o trabalho começar?", options: ["Ninguém", "Só a IA", "Um funcionário qualquer", "O patrocinador"], answer: 3, why: "O acordo do patrocinador evita discussões mais tarde." },
      { objective: "O2", q: "Uma EAP divide o projeto em:", options: ["Só linhas do orçamento", "Tarefas mais pequenas que uma pessoa faz em poucos dias", "Fotografias da equipa", "Salas do escritório"], answer: 1, why: "Tarefas pequenas são mais fáceis de planear e acompanhar." },
      { objective: "O2", q: "Não pode imprimir panfletos antes de o local estar confirmado. Isto é:", options: ["Um marco", "Uma dependência", "Um patrocinador", "Uma resposta ao risco"], answer: 1, why: "Uma tarefa depende de outra acabar." },
      { objective: "O2", q: "\"20 empregadores confirmados\" é um bom exemplo de:", options: ["Duração de uma tarefa", "Papel na RACI", "Cor do estado", "Marco"], answer: 3, why: "Os marcos são pontos de controlo importantes." },
      { objective: "O2", q: "Muitas vezes a melhor forma de fazer um cronograma é:", options: ["Contar para trás a partir do prazo", "Adivinhar", "Começar só pela última tarefa", "Não pôr datas"], answer: 0, why: "Contar para trás mostra o que tem de começar e quando." },
      { objective: "O3", q: "Na RACI, \"R\" quer dizer:", options: ["Reformado", "Só revisor", "Responsável: faz o trabalho", "Rejeitado"], answer: 2, why: "R é a pessoa que faz o trabalho." },
      { objective: "O3", q: "Na RACI, \"I\" quer dizer:", options: ["Incumbido de mandar", "Inspetor", "Ignorado", "Informado: recebe as novidades"], answer: 3, why: "As pessoas informadas recebem as atualizações." },
      { objective: "O3", q: "Uma matriz RACI mostra uma pessoa com R em 15 tarefas. Você deve:", options: ["Dar-lhe mais R's", "Tirar a matriz", "Repartir melhor o trabalho", "Ignorar"], answer: 2, why: "Pessoas sobrecarregadas atrasam o projeto." },
      { objective: "O4", q: "Um registo de riscos inclui:", options: ["Só o orçamento", "Risco, probabilidade, impacto, resposta e dono", "Os aniversários da equipa", "As opiniões dos clientes"], answer: 1, why: "Estas colunas tornam os riscos fáceis de gerir." },
      { objective: "O4", q: "Mudar o plano para que um risco não possa acontecer é que resposta?", options: ["Evitar", "Transferir", "Aceitar", "Comunicar"], answer: 0, why: "Evitar elimina o risco." },
      { objective: "O4", q: "Com que frequência se deve rever o registo de riscos?", options: ["Nunca", "Uma vez no fim", "Todas as semanas", "De dez em dez anos"], answer: 2, why: "Os riscos mudam à medida que o projeto avança." },
      { objective: "O5", q: "Um relatório de situação deve ter cerca de:", options: ["Meia página", "Cinquenta páginas", "Uma palavra", "O máximo possível"], answer: 0, why: "Relatórios curtos são lidos." },
      { objective: "O5", q: "O estado verde quer dizer:", options: ["Fora do caminho", "Cancelado", "Desconhecido", "No caminho certo"], answer: 3, why: "O verde mostra que o projeto está no caminho certo." },
      { objective: "O5", q: "Antes de enviar um relatório de situação escrito pela IA, você tem de:", options: ["Acrescentar mais cores", "Verificar cada data e número", "Tirar a parte das decisões", "Enviá-lo sem ler"], answer: 1, why: "A IA pode errar nos detalhes." },
      { objective: "O6", q: "Uma revisão de lições aprendidas pergunta:", options: ["Quem culpar", "O que planeámos, o que aconteceu, porquê, e o que mudar", "Como esconder os erros", "Nada"], answer: 1, why: "Segue o modelo da revisão pós-ação." },
      { objective: "O6", q: "Um fecho bem feito inclui:", options: ["Ir embora", "Apagar todos os registos", "Começar um projeto novo sem revisão", "Comparar os resultados com o termo de abertura e guardar os ficheiros"], answer: 3, why: "Fechar bem guarda o valor e as lições." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [2, 5, 7, 9, 11, 12, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Termo de abertura", objective: "O1", notYet: "Falta o objetivo, o âmbito, o patrocinador, o prazo ou as medidas de sucesso, ou ficaram palpites da IA.", meets: "Uma página com todas as partes e cada correção da IA marcada.", exceeds: "Também diz o que está fora do âmbito e como o sucesso vai ser medido." },
      { name: "EAP e cronograma", objective: "O2", notYet: "As tarefas são grandes demais, ou há menos de quatro marcos.", meets: "Tarefas pequenas, dependências e pelo menos quatro marcos, com as estimativas da IA verificadas.", exceeds: "Cronograma feito para trás a partir do prazo, com alguma margem de tempo." },
      { name: "Matriz RACI", objective: "O3", notYet: "Uma tarefa não tem ninguém que Aprova, ou tem mais do que um.", meets: "Exatamente um A por tarefa e o trabalho repartido com justiça.", exceeds: "Indica quem tem de ser consultado antes das decisões importantes." },
      { name: "Registo de riscos", objective: "O4", notYet: "Menos de cinco riscos, ou sem respostas nem donos.", meets: "Cinco riscos reais avaliados, cada um com uma resposta e um dono.", exceeds: "Mostra quando cada risco vai ser revisto e o que faria agir." },
      { name: "Relatório de situação", objective: "O5", notYet: "A cor do estado não é honesta, ou as datas e os números não foram verificados.", meets: "Meia página com uma cor honesta, o avanço, os próximos passos e as decisões necessárias.", exceeds: "Um patrocinador ocupado conseguiria agir com ele em menos de um minuto." },
      { name: "Fecho e lições aprendidas", objective: "O6", notYet: "Não há modelo de lições aprendidas, ou ele culpa pessoas.", meets: "Um modelo sem culpas com as quatro perguntas da revisão.", exceeds: "Também planeia como os resultados vão ser comparados com o termo de abertura e onde os ficheiros vão ser guardados." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que usam o plano para gerir um projeto real no trabalho ou na comunidade (inquérito de seguimento)",
      "Alunos que se candidatam a um trabalho de coordenador ou assistente de projeto em 90 dias",
      "Alunos que começam um percurso de certificação em gestão de projetos ou outro curso da Koach Learn em 30 dias",
      "Alunos que passam na tarefa final (grelha de avaliação)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou telefone com internet",
      "Um assistente de IA gratuito como o ChatGPT, o Microsoft Copilot ou o Google Gemini",
      "Uma folha de cálculo gratuita como o Google Sheets ou o Microsoft Excel",
      "Cerca de 60 minutos no total, mais tempo para terminar o plano do projeto"
    ],
    facilitatorNotes: [
      "Peça a cada aluno que escolha cedo um projeto real ou da comunidade, para cada tarefa partir do mesmo plano.",
      "Ajude os veteranos a traduzir a experiência militar (ordens de missão, logística) para palavras de projeto civis.",
      "Lembre aos alunos que nunca devem pôr informações confidenciais do empregador ou militares em ferramentas de IA.",
      "Confirme que os alunos marcam onde corrigiram a IA; é esta a principal capacidade que os empregadores querem ver.",
      "Avalie o plano final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
