"use strict";

// Koach Learn course (Portuguese translation of shared/ai-automation-workflows.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-automation-workflows-pt",
  lang: "pt",
  translationOf: "ai-automation-workflows",
  category: "Small Business",
  name: "Automação com IA e Fluxos de Trabalho Inteligentes",
  skills: "Mapear um fluxo de trabalho, Encontrar o que automatizar, Desenhar automações com gatilho e ações, Juntar um passo de IA, Construir e testar uma automação, Acompanhar e corrigir a automação",
  outcome: "mapear uma tarefa repetida, desenhar uma automação com um gatilho, ações e um passo de IA, construí-la numa ferramenta sem código, testá-la com dados de exemplo e manter uma pessoa no controlo onde os erros teriam importância.",
  about: [
    "Automação quer dizer que um programa faz por você os passos aborrecidos: copiar as respostas de um formulário para uma folha de cálculo, enviar um e-mail de confirmação, arquivar um recibo, lembrar alguém de um prazo. Com IA, a automação também pode ler, separar e escrever, por exemplo resumir um pedido ou escrever o rascunho de uma resposta.",
    "Este curso é para donos de pequenas empresas, funcionários e voluntários de organizações sem fins lucrativos, e trabalhadores que querem uma competência que os empregadores valorizam. Os exemplos incluem uma empresa de limpeza que recebe pedidos de orçamento, uma organização que inscreve voluntários e um assistente de escritório que trata faturas.",
    "Você vai mapear uma tarefa real, desenhar a automação no papel e depois construí-la numa ferramenta sem código, como Zapier, Microsoft Power Automate ou Make, ou com as funções que já vêm no Google Forms e no Google Sheets. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Construa uma automação que funcione para uma organização real ou de prática: por exemplo, um formulário de pedidos que guarda cada resposta numa folha de cálculo, usa um passo de IA para resumir e classificar o pedido e envia por e-mail o rascunho de uma resposta a um funcionário para ele aprovar. Registe o mapa do fluxo de trabalho, o gatilho e as ações, cinco testes com os resultados e quem verifica o que sai.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenas empresas, gestores e funcionários de escritório, e coordenadores de organizações sem fins lucrativos ou de igrejas que tratam os mesmos formulários, e-mails, inscrições e lembretes todas as semanas.",
    startingPoint: "Usam e-mail, folhas de cálculo e formulários na internet, e alguns já experimentaram um assistente de IA. A maioria nunca construiu uma automação nem ligou duas aplicações, e não tem experiência de programação.",
    gap: "Perdem-se horas a copiar, arquivar, lembrar e confirmar à mão, e há coisas que ficam esquecidas. Os alunos precisam de desenhar e construir uma automação segura sem código, com um passo de IA, testá-la e deixar uma pessoa no comando onde os erros fariam mal, para pouparem tempo sem enviar mensagens erradas nem deixar sair dados.",
    constraints: [
      "Nível de leitura: palavras simples; sem programação",
      "Aparelhos: é preciso um computador para construir a automação",
      "Custo: os planos gratuitos e os períodos de experiência têm limites; as ferramentas e os preços mudam, por isso os alunos verificam cada página de preços",
      "Privacidade: nenhum número de cartão, número da Segurança Social (Social Security), dado de saúde ou palavra-passe passa por um passo de IA; teste só com dados inventados",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total, mais o tempo para construir e testar"
    ],
    prerequisites: "Nenhum. Ajuda saber usar o Google Forms ou o Microsoft Forms e uma folha de cálculo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma automação do dia a dia", action: "identificar o seu gatilho, as suas ações e onde entra um passo de IA", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Para uma tarefa feita pelo menos uma vez por semana", action: "mapear cada passo com quem o faz, que ferramenta usa e quanto tempo leva, e marcar cada passo como automatizar, rascunho da IA com verificação humana, ou deixar com uma pessoa", standard: "com uma estimativa do tempo poupado por semana" },
    { id: "O3", condition: "Antes de usar qualquer ferramenta", action: "escrever o desenho de uma automação com o gatilho, as ações, o pedido à IA, os pontos de verificação humana e as regras sobre os dados", standard: "com uma aprovação humana sempre que um erro faria mal" },
    { id: "O4", condition: "Usando um formulário, uma folha de cálculo e uma ferramenta sem código", action: "construir uma automação que guarda as respostas, executa um passo de IA e envia um rascunho para aprovação", standard: "de modo que o fluxo básico funcione antes de juntar o passo de IA" },
    { id: "O5", condition: "Com a automação que você construiu", action: "testá-la com cinco entradas de exemplo, incluindo algumas difíceis, e corrigir o que falhar", standard: "usando só dados inventados, com cada falha corrigida e testada outra vez" },
    { id: "O6", condition: "Quando a automação começar a funcionar a sério", action: "acompanhar o histórico de execuções, criar um alerta de erro, nomear um responsável e escrever uma folha de instruções de uma página", standard: "para que outra pessoa a possa pôr a funcionar ou desligar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Desenhar fluxos de trabalho inteligentes",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que são a automação e os fluxos de trabalho com IA",
          minutes: 4,
          goal: "Explicar o que são gatilhos e ações, e onde entra um passo de IA.",
          text: [
            "Todas as automações têm a mesma forma. Um gatilho é o acontecimento que a faz começar: alguém envia um formulário, chega um e-mail, chega uma data. As ações são o que acontece a seguir: juntar uma linha a uma folha de cálculo, enviar um e-mail, criar uma tarefa.",
            "A automação simples segue regras fixas: se chegar um formulário, copie-o para a folha. Um passo de IA junta um trabalho parecido com pensar: ler uma mensagem e decidir se é uma reclamação, uma pergunta ou um possível cliente; resumi-la em duas frases; escrever o rascunho de uma resposta educada.",
            "Cada ferramenta usa nomes diferentes. O Zapier chama a uma automação Zap, o Power Automate chama-lhe fluxo (flow) e o Make chama-lhe cenário (scenario). A ideia é a mesma: quando isto acontece, faça aquilo."
          ],
          words: [["Automação", "um programa que faz passos por você, sem precisar de uma pessoa de cada vez."], ["Gatilho", "o acontecimento que faz começar uma automação."], ["Ação", "um passo que a automação faz depois do gatilho."], ["Fluxo de trabalho", "a série de passos usados para fazer uma tarefa."]],
          slides: [
            { title: "Quando isto acontece, faça aquilo", bullets: ["Gatilho: o acontecimento que a faz começar", "Ações: o que acontece a seguir"] },
            { title: "Juntar um passo de IA", bullets: ["Separar: reclamação, pergunta ou possível cliente", "Resumir em duas frases", "Escrever o rascunho de uma resposta para uma pessoa verificar"] },
            { title: "A mesma ideia, nomes diferentes", bullets: ["Zapier: Zap", "Power Automate: fluxo (flow)", "Make: cenário (scenario)"] }
          ],
          tryIt: "Escreva três automações \"quando isto acontece, faça aquilo\" que gostaria de ter no trabalho, em casa ou num grupo de que faz parte. Faça um círculo à volta da que poderia usar um passo de IA.",
          youCanNow: "descrever qualquer automação como um gatilho mais ações, e dizer onde a IA pode ajudar.",
          quickCheck: [
            { objective: "O1", q: "Como é que o Power Automate chama a uma automação?", options: ["Um Zap", "Um cenário", "Um fluxo", "Uma macro"], answer: 2, why: "O Power Automate chama-lhe fluxo; o Zapier chama-lhe Zap e o Make chama-lhe cenário." },
            { objective: "O1", q: "Quer que cada mensagem nova seja separada como reclamação, pergunta ou possível cliente. Que parte faz isso?", options: ["Um passo de IA", "O gatilho", "Uma linha da folha de cálculo", "O endereço de e-mail"], answer: 0, why: "Ler uma mensagem e separá-la é um trabalho parecido com pensar, feito por um passo de IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mapear um fluxo de trabalho e encontrar o que automatizar",
          minutes: 5,
          goal: "Mapear uma tarefa repetida passo a passo e escolher os passos a automatizar.",
          text: [
            "Antes de construir, faça o mapa da tarefa como é feita hoje. Escreva cada passo, quem o faz, que ferramenta usa e quanto tempo leva. A inscrição de um voluntário pode ser: ler o e-mail, copiar os dados para uma folha de cálculo, ver o horário, enviar um e-mail de boas-vindas, criar um lembrete no calendário.",
            "Os bons passos para automatizar são repetidos, seguem regras e são aborrecidos: copiar, arquivar, lembrar, confirmar. Os passos que precisam de bom senso, de bondade ou de uma decisão sobre a vida de alguém devem ficar com uma pessoa, ou usar a IA só para escrever um rascunho.",
            "Marque cada passo: automatizar, rascunho da IA com verificação humana, ou deixar com uma pessoa. Esse mapa marcado é o seu desenho."
          ],
          steps: ["Escolha uma tarefa feita pelo menos uma vez por semana.", "Escreva cada passo por ordem, com quem o faz, que ferramenta usa e quanto tempo leva.", "Marque cada passo: automatizar, rascunho da IA com verificação humana, ou deixar com uma pessoa.", "Calcule mais ou menos o tempo poupado por semana."],
          words: [["Mapa do fluxo de trabalho", "uma lista ou um desenho, passo a passo, de como uma tarefa é feita."], ["Pessoa no circuito", "uma pessoa verifica ou aprova antes de a automação continuar (em inglês, \"human in the loop\")."]],
          slides: [
            { title: "Primeiro, faça o mapa", bullets: ["Cada passo por ordem", "Quem, que ferramenta, quanto tempo"] },
            { title: "Bom para automatizar", bullets: ["Copiar e arquivar", "Lembretes e confirmações", "Passos repetidos que seguem regras"] },
            { title: "Marque cada passo", bullets: ["Automatizar", "Rascunho da IA com verificação humana", "Deixar com uma pessoa"] }
          ],
          tryIt: "Faça o mapa de uma tarefa repetida com pelo menos cinco passos. Marque cada passo como automatizar, rascunho da IA com verificação humana, ou deixar com uma pessoa, e calcule o tempo poupado por semana.",
          youCanNow: "mapear um fluxo de trabalho e decidir que passos automatizar, quais a IA pode rascunhar e quais ficam com uma pessoa.",
          quickCheck: [
            { objective: "O2", q: "Que passo é um bom candidato para automatizar por completo?", options: ["Decidir quem recebe uma bolsa de estudo", "Consolar um voluntário que está aborrecido", "Escolher um novo funcionário", "Criar um lembrete no calendário depois da inscrição"], answer: 3, why: "Passos repetidos que seguem regras, como os lembretes, são bons para automatizar." },
            { objective: "O2", q: "O seu mapa tem \"responder a uma família que pede ajuda para pagar a renda da casa\". Como marca este passo?", options: ["Automatizar por completo", "Rascunho da IA com verificação humana, ou deixar com uma pessoa", "Apagar o passo", "Não enviar resposta"], answer: 1, why: "Os passos que precisam de bondade ou que afetam a vida de alguém ficam com uma pessoa, ou a IA só escreve o rascunho." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Desenhar a automação no papel",
          minutes: 5,
          goal: "Escrever o desenho completo de uma automação: gatilho, ações, pedido à IA, verificações e regras sobre os dados.",
          text: [
            "Desenhe no papel antes de mexer numa ferramenta. Escreva o gatilho, cada ação por ordem e o pedido exato à IA, se houver um passo de IA, por exemplo: \"Leia este pedido. Responda com uma só palavra: Orçamento, Pergunta ou Reclamação. Depois escreva um resumo de duas frases.\"",
            "Ponha um ponto de verificação humana sempre que um erro faria mal: tudo o que é enviado a um cliente, dinheiro que se movimenta ou uma decisão sobre uma pessoa. A automação pode escrever o rascunho e depois esperar pela aprovação.",
            "Escreva as regras sobre os dados: que informação passa pela automação, onde fica guardada e o que nunca pode passar por um passo de IA, como números de cartão, números da Segurança Social (Social Security), dados de saúde ou palavras-passe. Veja o que cada ferramenta ligada faz com os seus dados."
          ],
          steps: ["Escreva o gatilho.", "Faça a lista de cada ação por ordem.", "Escreva o pedido exato para cada passo de IA.", "Ponha uma aprovação humana onde os erros fariam mal.", "Escreva as regras sobre os dados: o que passa, onde fica guardado, o que nunca passa pela IA."],
          words: [["Pedido à IA (prompt)", "a instrução que você dá a um passo de IA."], ["Ponto de verificação", "um momento em que uma pessoa revê antes de a automação continuar."]],
          slides: [
            { title: "Desenhe antes de construir", bullets: ["Gatilho e ações por ordem", "O pedido exato à IA"] },
            { title: "Pontos de verificação humana", bullets: ["Tudo o que é enviado a clientes", "Dinheiro que se movimenta", "Decisões sobre pessoas"] },
            { title: "Regras sobre os dados", bullets: ["O que passa e onde fica guardado", "Nunca cartões, Segurança Social, saúde ou palavras-passe pela IA"] }
          ],
          tryIt: "Escreva o desenho da sua automação numa página: gatilho, ações, pedido à IA, ponto de verificação humana e regras sobre os dados.",
          youCanNow: "desenhar uma automação com um passo de IA, um ponto de verificação humana e regras seguras sobre os dados.",
          quickCheck: [
            { objective: "O3", q: "O que dizem as regras sobre os dados num desenho?", options: ["Que letra o e-mail usa", "O que passa, onde fica guardado e o que nunca passa pela IA", "A velocidade do computador", "Quem desenhou o logótipo"], answer: 1, why: "As regras sobre os dados dizem que informação passa, onde fica guardada e o que nunca passa pela IA." },
            { objective: "O3", q: "A sua automação vai enviar respostas a clientes. Onde põe um ponto de verificação humana?", options: ["Em lado nenhum; isso poupa tempo", "Só uma vez por ano", "Depois de a resposta ser enviada", "Antes de a resposta ser enviada, para uma pessoa aprovar o rascunho"], answer: 3, why: "Tudo o que é enviado a um cliente deve esperar pela aprovação de uma pessoa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Desenhar fluxos de trabalho inteligentes",
        questions: [
          { objective: "O1", q: "Em \"Quando alguém envia um formulário, juntar uma linha a uma folha de cálculo\", qual é o gatilho?", options: ["Juntar uma linha", "A folha de cálculo", "Alguém envia um formulário", "O e-mail"], answer: 2, why: "O gatilho é o acontecimento que faz começar a automação." },
          { objective: "O1", q: "O que é que um passo de IA junta a uma automação?", options: ["A capacidade de ler, separar, resumir ou escrever rascunhos", "Eletricidade grátis", "Pagamentos automáticos a qualquer pessoa", "Nada"], answer: 0, why: "Os passos de IA fazem tarefas com a língua, como separar e escrever rascunhos." },
          { objective: "O2", q: "Que passo é o melhor candidato para automatizar por completo?", options: ["Decidir se aprova o pedido de casa de alguém", "Consolar um cliente que está aborrecido", "Despedir um funcionário", "Copiar as respostas de um formulário para uma folha de cálculo"], answer: 3, why: "Copiar, um passo repetido que segue regras, é ideal para automatizar." },
          { objective: "O3", q: "O que quer dizer \"pessoa no circuito\" (human in the loop)?", options: ["Uma pessoa está presa num círculo", "Uma pessoa verifica ou aprova antes de a automação continuar", "A automação funciona sem nenhuma pessoa", "Um tipo de gatilho"], answer: 1, why: "Mantém uma pessoa no controlo onde os erros têm importância." },
          { objective: "O3", q: "O que nunca deve passar por um passo de IA?", options: ["Um resumo geral de um pedido", "Os números de cartão dos clientes", "A palavra \"Pergunta\"", "O horário da empresa"], answer: 1, why: "Os dados de pagamento são privados e arriscados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir, testar e pôr a funcionar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construir a sua primeira automação",
          minutes: 6,
          goal: "Construir uma automação simples que vai de um formulário a uma folha de cálculo e a um e-mail.",
          text: [
            "Comece pela versão mais simples que funciona. O Google Forms pode guardar cada resposta numa folha do Google Sheets sem outra ferramenta, e o Microsoft Forms pode enviar as respostas para o Excel. Só isso já é uma automação.",
            "Para juntar ações, use uma ferramenta sem código, como Zapier, Power Automate ou Make. A maioria tem planos gratuitos ou períodos de experiência com limites; veja a página de preços de cada ferramenta, porque os planos mudam. Ligue as suas contas, escolha o gatilho (nova resposta ao formulário ou nova linha na folha de cálculo) e depois junte ações (enviar um e-mail, criar uma tarefa).",
            "Junte o passo de IA no fim, quando o fluxo básico já funcionar. Muitas ferramentas têm uma ação de IA incluída ou ligam-se a um serviço de IA. Cole o pedido que escreveu no seu desenho e envie o resultado para a ação seguinte, como um rascunho de e-mail que espera que uma pessoa o aprove."
          ],
          steps: ["Faça um formulário com os campos de que precisa.", "Ligue-o a uma folha de cálculo.", "Numa ferramenta sem código, escolha o gatilho: nova resposta ou nova linha.", "Junte uma ação: enviar um e-mail ou criar uma tarefa.", "Junte o passo de IA com o seu pedido, e envie o resultado para um rascunho a aprovar."],
          words: [["Ferramenta sem código", "um programa que permite construir sem escrever código (em inglês, \"no-code\")."], ["Ligar", "dar autorização a uma aplicação para trabalhar com outra."], ["Campo", "uma pergunta ou uma caixa num formulário."]],
          slides: [
            { title: "Comece pelo simples", bullets: ["O Google Forms guarda no Google Sheets", "O Microsoft Forms pode enviar para o Excel"] },
            { title: "Junte ações", bullets: ["Zapier, Power Automate ou Make", "Os planos gratuitos e de experiência têm limites", "Veja cada página de preços"] },
            { title: "A IA fica para o fim", bullets: ["Quando o fluxo básico já funcionar", "Cole o seu pedido", "O resultado vai para um rascunho a aprovar"] }
          ],
          sources: [{ name: "Zapier", url: "https://zapier.com/" }, { name: "Microsoft Power Automate", url: "https://www.microsoft.com/power-platform/products/power-automate" }, { name: "Make", url: "https://www.make.com/" }],
          tryIt: "Construa a primeira parte da sua automação: um formulário ligado a uma folha de cálculo. Se puder, junte uma ação numa ferramenta sem código, como um e-mail para si mesmo por cada resposta nova.",
          youCanNow: "construir, com ferramentas sem código, uma automação básica de formulário para folha de cálculo e para e-mail.",
          quickCheck: [
            { objective: "O4", q: "Que montagem simples já é uma automação, sem outra ferramenta?", options: ["O Microsoft Forms a enviar as respostas para o Excel", "Escrever à mão as respostas do formulário numa folha", "Imprimir cada resposta", "Ler as respostas no telefone"], answer: 0, why: "O Microsoft Forms pode enviar as respostas para o Excel de forma automática." },
            { objective: "O4", q: "O seu fluxo básico de formulário para e-mail funciona. O que junta a seguir?", options: ["Mais cinco aplicações de uma vez", "Números de cartão verdadeiros de clientes", "O passo de IA com o pedido do seu desenho", "Nada; apague o fluxo"], answer: 2, why: "Junte o passo de IA no fim, quando o fluxo básico já funcionar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Testar com dados de exemplo",
          minutes: 5,
          goal: "Testar uma automação com entradas de exemplo normais e difíceis, e corrigir o que falhar.",
          text: [
            "Nunca ligue uma automação para pessoas reais antes de ela passar nos testes. Use entradas de exemplo inventadas, não dados verdadeiros de clientes.",
            "Teste cinco casos: uma entrada normal, um campo em branco, uma mensagem muito comprida, uma entrada com erros de escrita ou fora do comum, e uma que o passo de IA possa separar mal. Verifique cada passo: a linha apareceu? O e-mail foi para o sítio certo? A IA separou e resumiu bem?",
            "Escreva um registo de testes: entrada, resultado esperado, resultado real, passou ou falhou, correção. Correções frequentes: tornar obrigatório um campo do formulário, tornar mais preciso o pedido à IA (\"Responda com exatamente uma palavra\") ou juntar um filtro para que só certas entradas continuem."
          ],
          steps: ["Escreva cinco entradas de exemplo, incluindo algumas difíceis.", "Passe cada uma pela automação.", "Verifique o resultado de cada passo.", "Anote passou ou falhou num registo de testes.", "Corrija as falhas e teste outra vez."],
          words: [["Caso de teste", "uma entrada de exemplo usada para verificar que uma coisa funciona."], ["Filtro", "uma regra que deixa só certos itens continuar numa automação."]],
          slides: [
            { title: "Teste antes de pôr a funcionar", bullets: ["Só dados de exemplo inventados", "Nunca dados verdadeiros de clientes nos testes"] },
            { title: "Cinco casos de teste", bullets: ["Normal, campo em branco, muito comprido", "Com erros de escrita ou fora do comum", "Um que a IA possa separar mal"] },
            { title: "Registe e corrija", bullets: ["Campos obrigatórios e filtros", "Pedidos à IA mais precisos", "Teste outra vez depois de cada correção"] }
          ],
          tryIt: "Passe cinco entradas de exemplo pela sua automação, incluindo pelo menos duas difíceis. Escreva um registo de testes e corrija um problema.",
          youCanNow: "testar uma automação com dados de exemplo, registar os resultados e corrigir o que falhar.",
          quickCheck: [
            { objective: "O5", q: "O que se escreve no registo de testes de uma automação?", options: ["Os dados verdadeiros dos clientes", "Só os testes que passaram", "O preço da ferramenta", "Entrada, resultado esperado, resultado real, passou ou falhou, e correção"], answer: 3, why: "Um registo de testes anota o que entrou, o que devia acontecer, o que aconteceu e a correção." },
            { objective: "O5", q: "Uma entrada de teste com o campo do e-mail em branco faz falhar o fluxo. Qual é uma correção frequente?", options: ["Tornar obrigatório o campo do e-mail no formulário", "Ligar a automação mesmo assim", "Tirar o passo do e-mail", "Usar dados verdadeiros de clientes para testar"], answer: 0, why: "Tornar o campo obrigatório impede que as entradas em branco façam falhar o fluxo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Pôr a funcionar, acompanhar e melhorar",
          minutes: 5,
          goal: "Ligar a automação com segurança, acompanhá-la e saber o que fazer quando falha.",
          text: [
            "Primeiro, ligue-a para um grupo pequeno, como um só formulário ou uma semana. No início, veja os resultados todos os dias. A maioria das ferramentas mostra um histórico de execuções, com cada execução e se correu bem.",
            "As automações avariam: uma palavra-passe muda, um campo muda de nome, um plano gratuito chega ao limite ou o passo de IA começa a separar de forma estranha. Crie um alerta de erro para o seu e-mail e nomeie um responsável que o verifica.",
            "Escreva uma folha de instruções de uma página: o que a automação faz, onde está, quem é o responsável e como a desligar. Se o responsável sair, outra pessoa pode mantê-la a funcionar. Reveja-a de poucos em poucos meses e pergunte: ainda está a poupar tempo?"
          ],
          steps: ["Ligue-a para um grupo pequeno ou durante uma semana.", "No início, veja o histórico de execuções todos os dias.", "Crie um alerta de erro e nomeie um responsável.", "Escreva uma folha de instruções de uma página.", "Reveja de poucos em poucos meses."],
          words: [["Histórico de execuções", "uma lista de cada vez que uma automação correu e se funcionou."], ["Alerta de erro", "uma mensagem que diz que uma automação falhou."]],
          slides: [
            { title: "Comece pequeno", bullets: ["Um formulário ou uma semana", "No início, veja os resultados todos os dias"] },
            { title: "Porque é que as automações avariam", bullets: ["Mudam as palavras-passe ou os nomes dos campos", "Chega-se ao limite do plano", "A IA começa a separar de outra forma"] },
            { title: "Mantenha-a saudável", bullets: ["Alertas de erro e um responsável", "Folha de instruções de uma página", "Rever de poucos em poucos meses"] }
          ],
          tryIt: "Tarefa final: termine a sua automação com o passo de IA e a aprovação humana, passe cinco entradas de teste e depois escreva a folha de instruções de uma página, com o mapa do fluxo de trabalho, o gatilho e as ações, os resultados dos testes e o responsável.",
          youCanNow: "desenhar, construir, testar e pôr a funcionar uma automação com IA, com uma pessoa no controlo.",
          quickCheck: [
            { objective: "O6", q: "O que faz um alerta de erro?", options: ["Torna a automação mais rápida", "Envia um e-mail ao responsável quando uma execução falha", "Apaga as execuções antigas", "Muda a sua palavra-passe"], answer: 1, why: "Um alerta de erro avisa logo o responsável quando alguma coisa avaria." },
            { objective: "O6", q: "A pessoa que construiu a sua automação vai sair. O que a mantém a funcionar?", options: ["Esperar que nada avarie", "Desligá-la para sempre", "Uma folha de instruções de uma página e um novo responsável que verifica os alertas", "Mudar todas as palavras-passe sem dizer a ninguém"], answer: 2, why: "A folha de instruções e um responsável com nome deixam outra pessoa pô-la a funcionar ou desligá-la." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir, testar e pôr a funcionar",
        questions: [
          { objective: "O4", q: "Qual é a automação mais simples que pode construir sem outra ferramenta?", options: ["Um braço robô", "Uma aplicação de telefone feita de propósito", "Um servidor pago", "O Google Forms a guardar as respostas numa folha do Google Sheets"], answer: 3, why: "Os formulários podem guardar sozinhos as respostas numa folha de cálculo." },
          { objective: "O4", q: "Quando deve juntar o passo de IA?", options: ["Depois de o fluxo básico funcionar", "Antes de tudo", "Nunca", "Só ao fim de semana"], answer: 0, why: "Construa primeiro o simples, depois junte a IA." },
          { objective: "O5", q: "Que dados deve usar nos testes?", options: ["Números de cartão de clientes verdadeiros", "Fichas verdadeiras de doentes", "Entradas de exemplo inventadas", "Palavras-passe"], answer: 2, why: "Teste com dados de exemplo para proteger as pessoas reais." },
          { objective: "O5", q: "O passo de IA devolve frases compridas quando você queria uma só palavra. Qual é a correção?", options: ["Apagar a automação", "Não ligar", "Juntar um segundo formulário", "Tornar o pedido mais preciso: \"Responda com exatamente uma palavra\""], answer: 3, why: "Pedidos mais claros dão respostas da IA mais previsíveis." },
          { objective: "O6", q: "Porque escrever uma folha de instruções de uma página?", options: ["Para a tornar mais lenta", "É obrigatório por lei", "Para que outra pessoa possa pôr a automação a funcionar ou desligá-la", "Para partilhar palavras-passe"], answer: 2, why: "Mantém a automação a funcionar se o responsável sair." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Automação com IA e Fluxos de Trabalho Inteligentes",
    questions: [
      { objective: "O1", q: "Automação quer dizer:", options: ["Contratar mais funcionários", "Um programa que faz passos por você, sem precisar de uma pessoa de cada vez", "Trabalhar mais horas", "Comprar um robô"], answer: 1, why: "As automações fazem os passos sozinhas." },
      { objective: "O1", q: "Um e-mail que chega e faz começar uma automação é:", options: ["Gatilho", "Filtro", "Campo", "Histórico de execuções"], answer: 0, why: "O acontecimento que faz começar é o gatilho." },
      { objective: "O1", q: "\"Enviar um e-mail de confirmação\" numa automação é:", options: ["Gatilho", "Pedido à IA", "Ação", "Responsável"], answer: 2, why: "As ações são o que acontece depois do gatilho." },
      { objective: "O1", q: "O Zapier chama a uma automação:", options: ["Zap", "Fluxo", "Cenário", "Ficha de receita"], answer: 0, why: "O nome que o Zapier usa é Zap." },
      { objective: "O2", q: "Que tarefa é melhor deixar com uma pessoa?", options: ["Arquivar um recibo", "Enviar um lembrete", "Copiar os dados de um formulário", "Decidir se alguém tem direito a ajuda"], answer: 3, why: "As decisões sobre pessoas precisam do bom senso de uma pessoa." },
      { objective: "O2", q: "Um mapa do fluxo de trabalho mostra:", options: ["Só o resultado final", "Cada passo, quem o faz, a ferramenta e o tempo", "Os salários dos funcionários", "As moradas dos escritórios"], answer: 1, why: "Mostra como a tarefa é feita hoje." },
      { objective: "O2", q: "\"Rascunho da IA com verificação humana\" serve para que passo?", options: ["Juntar uma linha a uma folha", "Escrever uma resposta a um cliente", "Guardar um ficheiro", "Fazer começar a automação"], answer: 1, why: "As mensagens para clientes devem ser verificadas antes de serem enviadas." },
      { objective: "O3", q: "Um bom pedido à IA numa automação é:", options: ["Vago, como \"faça alguma coisa\"", "Vazio", "Uma palavra-passe", "Exato, como \"Responda com uma só palavra: Orçamento, Pergunta ou Reclamação\""], answer: 3, why: "Os pedidos exatos dão respostas previsíveis." },
      { objective: "O3", q: "Onde deve pôr um ponto de verificação humana?", options: ["Sempre que um erro faria mal, como nas mensagens para clientes", "Em lado nenhum", "Só no gatilho", "Só depois de apagar a automação"], answer: 0, why: "Os pontos de verificação apanham erros que custam caro." },
      { objective: "O3", q: "As regras sobre os dados no seu desenho dizem:", options: ["Que letra usar", "Quem recebe um prémio", "O que passa, onde fica guardado e o que nunca passa pela IA", "Nada"], answer: 2, why: "Protegem a informação privada." },
      { objective: "O4", q: "Uma pergunta ou uma caixa de um formulário chama-se:", options: ["Gatilho", "Zap", "Filtro", "Campo"], answer: 3, why: "Cada caixa é um campo." },
      { objective: "O4", q: "Os planos gratuitos das ferramentas sem código:", options: ["Não têm limites, para sempre", "Custam sempre $1,000", "Têm limites; veja a página de preços", "Não existem"], answer: 2, why: "Os planos mudam, por isso veja a página oficial de preços." },
      { objective: "O4", q: "Ligar aplicações numa ferramenta de automação quer dizer:", options: ["Ligar cabos", "Dar autorização a uma aplicação para trabalhar com outra", "Partilhar a sua palavra-passe com todos", "Comprar computadores novos"], answer: 1, why: "As ligações são autorizações entre aplicações." },
      { objective: "O5", q: "Quantos casos de teste, no mínimo, o curso aconselha?", options: ["Cinco", "Um", "Zero", "Quinhentos"], answer: 0, why: "Cinco casos cobrem entradas normais e difíceis." },
      { objective: "O5", q: "Qual é um caso de teste difícil?", options: ["Só uma entrada perfeitamente normal", "Nenhuma entrada, nunca testada", "Um formulário com um campo em branco", "A sua palavra-passe"], answer: 2, why: "Os campos em branco fazem muitas vezes falhar as automações." },
      { objective: "O5", q: "Um filtro numa automação:", options: ["Deixa só certos itens continuar", "Limpa o ecrã", "Apaga a folha de cálculo", "Faz começar a automação"], answer: 0, why: "Os filtros controlam que itens seguem em frente." },
      { objective: "O6", q: "Quando começa a pôr a automação a funcionar, deve:", options: ["Ligá-la para todos e nunca verificar", "Apagar o registo de testes", "Tirar o ponto de verificação humana", "Começar pequeno e ver os resultados todos os dias"], answer: 3, why: "Começar pequeno limita os estragos dos problemas." },
      { objective: "O6", q: "O histórico de execuções mostra:", options: ["O seu histórico da internet", "Cada vez que a automação correu e se funcionou", "As horas dos funcionários", "As palavras-passe dos clientes"], answer: 1, why: "Ajuda a encontrar as falhas." },
      { objective: "O6", q: "Qual é uma razão frequente para as automações avariarem?", options: ["O sol pôs-se", "Mudou uma palavra-passe ou o nome de um campo", "Clientes contentes demais", "O logótipo mudou de cor"], answer: 1, why: "As mudanças nas aplicações ligadas fazem avariar as automações." },
      { objective: "O6", q: "Todas as automações devem ter:", options: ["Ninguém responsável", "Acesso sem limites a todos os dados", "Um lugar secreto", "Um responsável que verifica os alertas de erro"], answer: 3, why: "Um responsável mantém-na saudável." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 2, 4, 6, 8, 9, 11, 14, 16, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Mapa do fluxo de trabalho", objective: "O2", notYet: "Faltam passos, ou nenhum passo está marcado.", meets: "Cada passo com quem o faz, a ferramenta e o tempo, marcado como automatizar, rascunho da IA com verificação humana, ou deixar com uma pessoa.", exceeds: "Inclui uma estimativa do tempo poupado por semana." },
      { name: "Gatilho, ações e passo de IA", objective: "O4", notYet: "A automação não começa com o seu gatilho, ou falta o passo de IA.", meets: "Um gatilho que funciona, ações por ordem e um passo de IA que resume e classifica o pedido.", exceeds: "Usa um filtro ou um pedido preciso de uma só palavra para que os resultados sejam sempre iguais." },
      { name: "Verificação humana e regras sobre os dados", objective: "O3", notYet: "As respostas saem sem aprovação, ou passam dados privados pelo passo de IA.", meets: "Uma pessoa aprova o rascunho da resposta, e as regras sobre os dados dizem o que nunca passa pela IA.", exceeds: "Anota o que cada ferramenta ligada faz com os dados." },
      { name: "Cinco testes", objective: "O5", notYet: "Menos de cinco testes, dados verdadeiros usados, ou falhas não corrigidas.", meets: "Cinco entradas de teste inventadas, incluindo algumas difíceis, registadas com passou ou falhou e as correções.", exceeds: "Cada falha foi testada outra vez e passou." },
      { name: "Responsável e instruções", objective: "O6", notYet: "Não há responsável com nome nem instruções.", meets: "Um responsável com nome, um alerta de erro e uma folha de instruções de uma página.", exceeds: "A folha diz como desligar a automação e quando vai ser revista." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Automações que ainda funcionam e têm responsável 60 dias depois (inquérito de seguimento)",
      "Horas por semana poupadas na tarefa automatizada, segundo a organização",
      "Organizações que dizem que a automação não enviou mensagens erradas nem expôs dados privados"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "Google Forms e Google Sheets, ou Microsoft Forms e Excel",
      "Uma ferramenta de automação sem código, como Zapier, Power Automate ou Make (veja os limites atuais do plano gratuito)",
      "Papel ou um documento para o mapa do fluxo de trabalho, o desenho e o registo de testes",
      "Cerca de 60 minutos para as lições e as verificações, mais o tempo para construir e testar"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; construa ao vivo, num ecrã partilhado, um fluxo de formulário para folha de cálculo.",
      "Peça aos alunos que desenhem no papel e que um colega reveja o desenho antes de abrirem qualquer ferramenta.",
      "Use só entradas de exemplo inventadas nos testes; nunca dados verdadeiros de clientes, utentes ou doadores.",
      "Confirme que todas as automações que enviam mensagens a pessoas têm um passo de aprovação humana.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
