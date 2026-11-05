"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-agents-automation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "smallbiz-ai-agents-automation-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-agents-automation",
  category: "Small Business",
  name: "Agentes de IA para Automatizar o Negócio",
  skills: "Distinguir automações de agentes de IA, Mapear uma tarefa repetida passo a passo, Desenhar um fluxo com gatilho e ações, Acrescentar a aprovação de uma pessoa, Testar com dados de exemplo, Registar e acompanhar",
  outcome: "desenhar, construir e testar com segurança uma automação simples para o seu negócio, por exemplo transformar um novo pedido feito num formulário na internet numa linha da folha de cálculo, numa resposta em rascunho e num lembrete para você, com um passo de aprovação por uma pessoa antes de enviar qualquer coisa, um teste com dados de exemplo e um registo que verifica todas as semanas.",
  about: [
    "Este curso é para donos de pequenos negócios que repetem as mesmas tarefas no computador todos os dias: copiar respostas de formulários para uma folha, enviar o mesmo e-mail de seguimento, criar faturas, organizar pedidos de clientes. Os exemplos vêm de lojas, restaurantes, salões, serviços de limpeza e de reparação e pequenos escritórios.",
    "Vai aprender a diferença entre uma automação simples e um agente de IA, dividir uma tarefa em passos, desenhar um fluxo de trabalho com um gatilho e ações, e construir um com uma ferramenta sem código, como o Zapier, o Make ou o Microsoft Power Automate, ou com as funções de automação das ferramentas que já usa. O mais importante: uma pessoa continua no controlo.",
    "As ferramentas mudam muitas vezes os ecrãs e os preços, por isso explicamos o que fazer e não os nomes exatos dos menus; veja no site de cada ferramenta o plano gratuito atual. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Construa uma automação que funcione para uma tarefa real que repete: escreva o mapa de passos, escolha o gatilho e as ações, ponha um passo de aprovação por uma pessoa antes de qualquer envio ou pagamento, teste com três entradas de exemplo (sem dados verdadeiros de clientes), corrija o que falhar e prepare um registo simples e uma verificação semanal. Escreva uma descrição de uma página para que outra pessoa a possa entender ou desligar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios que repetem as mesmas tarefas no computador todos os dias, como copiar respostas de formulários para uma folha, enviar o mesmo e-mail de seguimento, criar faturas e organizar pedidos, em lojas, restaurantes, salões, serviços de limpeza e de reparação e pequenos escritórios.",
    startingPoint: "Usam e-mail, um formulário na internet ou uma ferramenta de marcações e uma folha de cálculo, e talvez já tenham experimentado um assistente de IA. A maioria nunca construiu uma automação nem usou uma ferramenta de automação sem código.",
    gap: "As tarefas repetidas levam horas todas as semanas e aparecem erros quando as pessoas estão cansadas. Os alunos precisam de automatizar os passos de rotina com segurança, com uma pessoa a aprovar tudo o que é enviado ou pago, para pouparem tempo sem perderem o controlo dos clientes, do dinheiro ou dos registos.",
    constraints: [
      "Ferramentas sem código gratuitas ou baratas; os planos gratuitos têm limites que mudam, por isso os alunos verificam no site de cada ferramenta",
      "Nenhum dado verdadeiro de clientes nos testes; só entradas de exemplo",
      "Uma pessoa aprova tudo o que gasta dinheiro, envia mensagens a clientes ou muda registos",
      "Segurança: início de sessão em dois passos, o mínimo de acesso, nenhum número de cartão nem palavra-passe nos passos de IA",
      "Tempo: cerca de 60 minutos no total, em lições de 5 minutos"
    ],
    prerequisites: "Saber usar o e-mail e uma folha de cálculo. Quem é novo nos assistentes de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma tarefa do negócio", action: "explicar se lhe serve uma automação fixa ou um passo de IA, e que partes ficam com uma pessoa", standard: "deixando o dinheiro, as mensagens a clientes e as mudanças nos registos com uma pessoa" },
    { id: "O2", condition: "Com uma tarefa que repete muitas vezes", action: "escrever um mapa de passos e marcar cada passo como Regra, Palavras, Decisão ou Dinheiro ou envio", standard: "incluindo todos os passos que faz hoje" },
    { id: "O3", condition: "Com o seu mapa de passos", action: "desenhar no papel um fluxo de trabalho com um gatilho, ações e um passo de aprovação por uma pessoa", standard: "com a aprovação antes de qualquer coisa sair do negócio" },
    { id: "O4", condition: "Usando uma ferramenta de automação sem código", action: "construir o fluxo de trabalho, ligar as suas contas e mapear os campos", standard: "com o passo de IA a receber só os campos de que precisa e a enviar o rascunho para você" },
    { id: "O5", condition: "Com três entradas de exemplo inventadas", action: "testar a automação e corrigir o que falha, uma mudança de cada vez", standard: "até passarem uma entrada normal, uma com um campo em falta e uma com texto estranho" },
    { id: "O6", condition: "Depois de a automação estar a funcionar", action: "preparar um registo, uma verificação semanal e uma descrição de uma página que diga como a desligar", standard: "para que outra pessoa a possa entender ou parar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Entender e desenhar a automação",
      lessons: [
        {
          objectives: ["O1"],
          title: "Automações e agentes de IA: qual é a diferença?",
          minutes: 5,
          goal: "Explicar a diferença entre uma automação fixa e um agente de IA, e quando serve cada um.",
          text: [
            "Uma automação segue regras fixas que você define: \"Quando chegar um novo formulário, acrescente uma linha à minha folha e envie-me um e-mail.\" Faz sempre a mesma coisa. É previsível e fácil de verificar.",
            "Um agente de IA é um sistema de IA que pode decidir alguns dos seus próprios passos para chegar a um objetivo, como ler um pedido, decidir de que tipo é, escrever um rascunho de resposta e escolher que ferramenta usar a seguir. Os agentes são mais flexíveis mas menos previsíveis, e podem errar com muita segurança.",
            "Num pequeno negócio, comece com automações fixas e acrescente IA num só passo em que ajude a escolher as palavras, como escrever o rascunho de uma resposta ou organizar mensagens. As pessoas continuam a mandar em tudo o que gasta dinheiro, envia mensagens a clientes ou muda registos."
          ],
          words: [["Automação", "um conjunto de passos fixos que o computador faz sozinho quando alguma coisa acontece."], ["Agente de IA", "um sistema de IA que pode escolher alguns dos seus próprios passos para chegar a um objetivo."], ["Fluxo de trabalho", "a série de passos que leva uma tarefa até ao fim."]],
          slides: [
            { title: "Automação", bullets: ["Regras fixas que você define", "O mesmo resultado todas as vezes", "Previsível e fácil de verificar"] },
            { title: "Agente de IA", bullets: ["Escolhe alguns dos seus próprios passos", "Flexível, mas menos previsível", "Pode errar com muita segurança"] },
            { title: "Comece pelo simples", bullets: ["Primeiro, a automação fixa", "Acrescente IA num passo de escrita", "As pessoas aprovam dinheiro, mensagens e registos"] }
          ],
          tryIt: "Escreva duas tarefas que repete no seu negócio. Para cada uma, escreva se uma automação fixa a pode fazer ou se precisa de critério (um possível passo de IA).",
          youCanNow: "explicar a diferença entre uma automação e um agente de IA e escolher a opção mais segura.",
          quickCheck: [
            { objective: "O1", q: "Qual é um ponto fraco dos agentes de IA comparados com as automações fixas?", options: ["São menos previsíveis e podem errar com muita segurança", "Nunca conseguem usar palavras", "Só funcionam à noite", "Não custam nada"], answer: 0, why: "Os agentes são mais flexíveis mas menos previsíveis, e podem errar com segurança." },
            { objective: "O1", q: "Quer que a IA responda aos pedidos e pague sozinha as faturas dos fornecedores. O que deve fazer?", options: ["Deixar o agente de IA fazer as duas coisas", "Deixar a IA escrever rascunhos de respostas, e o pagar e enviar ficam com uma pessoa", "Desligar todas as automações", "Deixar a IA pagar mas não responder"], answer: 1, why: "As pessoas continuam a mandar no gasto de dinheiro e no envio de mensagens a clientes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mapear uma tarefa repetida passo a passo",
          minutes: 5,
          goal: "Dividir uma tarefa repetida num mapa de passos claro.",
          text: [
            "Não consegue automatizar o que não escreveu. Escolha uma tarefa que faz muitas vezes e escreva cada passo como o faz hoje. Exemplo de um serviço de limpeza: (1) chega um pedido pelo formulário na internet, (2) copio o nome, a morada e o tipo de trabalho para a minha folha, (3) escrevo uma resposta com o meu intervalo de preços, (4) ponho um lembrete para ligar de volta, (5) envio o orçamento.",
            "Marque cada passo: Regra (sempre igual), Palavras (precisa de escrita ou de critério), Decisão (precisa do dono), Dinheiro ou envio (precisa de aprovação).",
            "Os passos marcados como Regra podem ser automatizados. Os passos de Palavras podem ter um rascunho feito pela IA. Os passos de Decisão e de Dinheiro ou envio ficam com uma pessoa."
          ],
          steps: ["Escolha uma tarefa que faz pelo menos uma vez por semana.", "Escreva cada passo como o faz agora.", "Marque cada um: Regra, Palavras, Decisão, Dinheiro ou envio.", "Faça um círculo nos passos de Regra para automatizar primeiro."],
          words: [["Mapa de passos", "uma lista numerada de todos os passos de uma tarefa."], ["Manual", "feito à mão por uma pessoa."]],
          slides: [
            { title: "Escreva antes de automatizar", bullets: ["Escolha uma tarefa frequente", "Faça a lista de cada passo como o faz hoje"] },
            { title: "Marque cada passo", bullets: ["Regra: sempre igual", "Palavras: escrita ou critério", "Decisão / Dinheiro ou envio: uma pessoa"] },
            { title: "O que se automatiza", bullets: ["Passos de Regra: automatizar", "Passos de Palavras: rascunho da IA", "Passos de decisão e de dinheiro: pessoas"] }
          ],
          tryIt: "Escreva o mapa de passos de uma tarefa repetida do seu negócio e marque cada passo como Regra, Palavras, Decisão ou Dinheiro/envio.",
          youCanNow: "dividir uma tarefa repetida num mapa de passos que mostra o que pode ser automatizado.",
          quickCheck: [
            { objective: "O2", q: "Que passos ficam com uma pessoa?", options: ["Os passos de Regra", "Os passos de Palavras", "Os passos de Decisão e de Dinheiro ou envio", "Todos os passos"], answer: 2, why: "Os passos de Decisão e de Dinheiro ou envio ficam com uma pessoa; os passos de Regra podem ser automatizados." },
            { objective: "O2", q: "Quer automatizar a forma como trata os novos pedidos. O que faz primeiro?", options: ["Compra a ferramenta mais cara", "Pede à IA para adivinhar o seu processo", "Começa logo a construir", "Escreve cada passo como o faz hoje"], answer: 3, why: "Não consegue automatizar o que não escreveu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Desenhar o fluxo de trabalho: gatilho, ações, aprovação",
          minutes: 5,
          goal: "Desenhar um fluxo de trabalho com um gatilho, ações e um passo de aprovação por uma pessoa.",
          text: [
            "Todas as automações têm um gatilho (o acontecimento que as faz começar) e ações (o que acontece a seguir). Gatilho: \"novo formulário enviado\". Ações: \"acrescentar uma linha à folha\", \"escrever um rascunho de resposta com IA\", \"enviar-me o rascunho para aprovar\", \"criar um lembrete no calendário\".",
            "Ponha a aprovação por uma pessoa antes de qualquer coisa sair do negócio: mensagens a clientes, pagamentos, mudanças de preço, apagar registos. A automação pode preparar tudo; quem carrega em enviar é você.",
            "Desenhe primeiro no papel, com caixas e setas. Escreva o nome da ferramenta em cada caixa: a sua ferramenta de formulários, o Google Sheets ou o Excel, um passo de IA, o seu e-mail, o seu calendário. Verifique se cada ferramenta se liga ao serviço de ligação que pensa usar."
          ],
          steps: ["Escreva o gatilho.", "Faça a lista das ações por ordem.", "Ponha um passo de aprovação antes de qualquer envio ou pagamento.", "Desenhe com caixas e setas.", "Escreva o nome da ferramenta em cada caixa e verifique se se liga."],
          words: [["Gatilho", "o acontecimento que faz começar uma automação."], ["Ação", "um passo que a automação faz depois do gatilho."], ["Passo de aprovação", "um ponto em que uma pessoa tem de dizer sim antes de o fluxo continuar."]],
          slides: [
            { title: "Gatilho e ações", bullets: ["Gatilho: novo formulário enviado", "Ações: acrescentar linha, rascunho da IA, lembrar-me"] },
            { title: "Aprovação por uma pessoa", bullets: ["Antes de as mensagens saírem do negócio", "Antes de pagamentos, mudanças de preço ou apagar", "A automação prepara; você carrega em enviar"] },
            { title: "Desenhe primeiro", bullets: ["Caixas e setas no papel", "O nome da ferramenta em cada caixa", "Verifique se cada ferramenta se liga"] }
          ],
          tryIt: "Desenhe o fluxo de trabalho da sua tarefa da Lição 2: gatilho, ações e um passo de aprovação. Escreva o nome da ferramenta em cada caixa.",
          youCanNow: "desenhar um fluxo de trabalho com um gatilho, ações e um passo de aprovação por uma pessoa.",
          quickCheck: [
            { objective: "O3", q: "Num fluxo de trabalho, o que são as \"ações\"?", options: ["O que acontece depois do gatilho", "O acontecimento que o faz começar", "A sua palavra-passe", "O preço da ferramenta"], answer: 0, why: "O gatilho faz começar a automação; as ações são o que acontece a seguir." },
            { objective: "O3", q: "No seu desenho, o passo de IA envia e-mails diretamente aos clientes. O que muda?", options: ["Nada; poupa tempo", "Enviar o rascunho para você aprovar antes de chegar ao cliente", "Tirar o gatilho", "Acrescentar um segundo passo de IA para verificar o primeiro"], answer: 1, why: "A aprovação por uma pessoa vem antes de qualquer coisa sair do negócio." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Entender e desenhar a automação",
        questions: [
          { objective: "O1", q: "O que descreve melhor uma automação fixa?", options: ["Escolhe os seus próprios objetivos", "Segue as regras que você define e faz sempre a mesma coisa", "É uma pessoa", "Nunca funciona"], answer: 1, why: "As automações seguem regras fixas." },
          { objective: "O1", q: "O que é mais previsível?", options: ["Nenhum dos dois funciona", "Um agente de IA", "São sempre iguais", "Uma automação fixa"], answer: 3, why: "Os agentes escolhem passos e são menos previsíveis." },
          { objective: "O2", q: "Num mapa de passos, \"enviar o orçamento\" é marcado como:", options: ["Dinheiro ou envio: precisa de aprovação", "Regra: automatizar por completo", "Ignorar", "Apagar"], answer: 0, why: "Tudo o que é enviado a um cliente precisa da aprovação de uma pessoa." },
          { objective: "O3", q: "O que é um gatilho?", options: ["Uma palavra-passe", "O último passo", "O acontecimento que faz começar uma automação", "Um preço"], answer: 2, why: "Os gatilhos fazem começar os fluxos de trabalho." },
          { objective: "O3", q: "Onde fica o passo de aprovação?", options: ["Em lado nenhum", "Depois de o cliente o receber", "Antes de qualquer coisa sair do negócio", "Só no fim do ano"], answer: 2, why: "Aprove antes de enviar, pagar ou apagar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir, testar e usar com segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construir com uma ferramenta sem código",
          minutes: 6,
          goal: "Construir o seu fluxo de trabalho numa ferramenta de automação sem código.",
          text: [
            "As ferramentas sem código deixam construir automações escolhendo nos menus em vez de escrever código. As mais comuns são o Zapier, o Make e o Microsoft Power Automate. Algumas aplicações que já usa, como a ferramenta de formulários, de marcações ou de e-mail, têm automações simples incluídas. Veja no site de cada ferramenta o plano gratuito e os seus limites.",
            "O padrão é igual em todo o lado: crie uma nova automação, escolha a aplicação e o acontecimento do gatilho, inicie sessão para ligar a sua conta, depois acrescente cada ação e mapeie os campos (por exemplo, o \"Nome\" do formulário vai para a coluna \"Nome\" da folha).",
            "Para um passo de IA, muitas ferramentas têm uma ação que envia texto a um modelo de IA e devolve um rascunho. Diga-lhe exatamente o que escrever e dê-lhe só os campos de que precisa. Envie o rascunho para você, não diretamente para o cliente."
          ],
          steps: ["Crie uma nova automação na ferramenta que escolheu.", "Escolha a aplicação e o acontecimento do gatilho; ligue a sua conta.", "Acrescente cada ação e mapeie os campos.", "Acrescente o passo de rascunho da IA com instruções claras e só os campos necessários.", "Envie o rascunho para você aprovar."],
          words: [["Sem código", "construir programas escolhendo opções em vez de escrever código."], ["Mapear campos", "dizer à ferramenta para onde vai cada informação."], ["Ligar uma conta", "deixar a ferramenta de automação usar uma das suas aplicações, depois de iniciar sessão."]],
          slides: [
            { title: "Ferramentas sem código", bullets: ["Zapier, Make, Microsoft Power Automate", "Automações incluídas nas aplicações que já usa", "Veja os limites do plano gratuito em cada site"] },
            { title: "O mesmo padrão", bullets: ["Escolha a aplicação e o acontecimento do gatilho", "Ligue a sua conta", "Acrescente ações e mapeie os campos"] },
            { title: "O passo de IA", bullets: ["Instruções claras", "Só os campos de que precisa", "O rascunho vai para você, não para o cliente"] }
          ],
          tryIt: "Construa o seu fluxo de trabalho no plano gratuito de uma ferramenta sem código (ou no papel, se ainda não se pode registar): gatilho, campos mapeados em cada ação e um rascunho da IA enviado para você.",
          youCanNow: "construir um fluxo de trabalho com gatilho e ações numa ferramenta de automação sem código.",
          quickCheck: [
            { objective: "O4", q: "O que uma ferramenta sem código deixa você fazer?", options: ["Escrever código mais depressa", "Ter listas de clientes de graça", "Construir automações escolhendo nos menus", "Usar as suas aplicações sem iniciar sessão"], answer: 2, why: "As ferramentas sem código deixam construir automações com menus em vez de escrever código." },
            { objective: "O4", q: "O formulário tem 12 campos, mas a IA só precisa do nome e do tipo de trabalho para escrever a resposta. O que lhe envia?", options: ["Os 12 campos, por segurança", "Também o número do cartão do cliente", "Nada", "Só o nome e o tipo de trabalho"], answer: 3, why: "Dê ao passo de IA só os campos de que precisa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Testar com dados de exemplo e corrigir o que falha",
          minutes: 5,
          goal: "Testar a automação com entradas de exemplo e corrigir os erros antes de a pôr a funcionar.",
          text: [
            "Nunca teste com clientes verdadeiros. Faça três entradas de exemplo com nomes inventados, como \"Cliente de Teste\", e um e-mail de teste que seja seu. Inclua uma entrada normal, uma com um campo em falta e uma com texto estranho (muito longo, noutra língua, com emojis).",
            "Faça correr cada uma e verifique cada passo: a linha ficou nas colunas certas? O rascunho da IA faz sentido e fala do assunto certo? A aprovação chegou a você? Foi enviada alguma coisa que não devia?",
            "Corrija uma coisa de cada vez e teste outra vez. Problemas comuns: campos mal mapeados, um passo que falha quando um campo está vazio, um rascunho da IA que inventa preços. Corrija as instruções (\"Use só o intervalo de preços do campo; não invente preços\") e teste outra vez."
          ],
          steps: ["Faça três entradas de exemplo: normal, campo em falta, texto estranho.", "Faça correr cada uma pela automação.", "Verifique o resultado de cada passo.", "Corrija um problema de cada vez e teste outra vez.", "Só ponha a funcionar quando as três passarem."],
          words: [["Dados de exemplo", "informações inventadas usadas para testar."], ["Caso extremo", "uma entrada fora do normal que pode estragar um processo, como um campo vazio."], ["Pôr a funcionar", "ligar a automação para o uso real."]],
          slides: [
            { title: "Teste com dados inventados", bullets: ["\"Cliente de Teste\" e o seu próprio e-mail de teste", "Normal, campo em falta, texto estranho"] },
            { title: "Verifique cada passo", bullets: ["Colunas certas?", "Rascunho da IA com sentido e no assunto?", "A aprovação chegou? Nada enviado por engano?"] },
            { title: "Corrija e teste outra vez", bullets: ["Uma correção de cada vez", "Diga ao passo de IA para não inventar preços", "Ponha a funcionar quando as três passarem"] }
          ],
          tryIt: "Faça correr três entradas de exemplo pela sua automação (ou siga-as pelo seu desenho no papel). Escreva o que aconteceu em cada passo e uma correção.",
          youCanNow: "testar uma automação com segurança e corrigir os problemas antes de chegar a clientes verdadeiros.",
          quickCheck: [
            { objective: "O5", q: "Qual é um exemplo de entrada com texto estranho?", options: ["Uma mensagem muito longa com emojis", "Um pedido normal", "Um formulário vazio", "O pedido de um cliente verdadeiro"], answer: 0, why: "A entrada com texto estranho tem texto muito longo, outra língua ou emojis." },
            { objective: "O5", q: "Um teste falha quando o campo do telefone está vazio. O que faz?", options: ["Põe a funcionar na mesma", "Corrige esse passo e testa outra vez", "Muda cinco coisas ao mesmo tempo", "Testa só com clientes verdadeiros"], answer: 1, why: "Corrija uma coisa de cada vez e teste outra vez." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar com segurança: registos, acompanhamento e um botão para desligar",
          minutes: 5,
          goal: "Preparar um registo, uma verificação semanal e uma forma de desligar a automação.",
          text: [
            "Depois de a pôr a funcionar, continue a observar. A maioria das ferramentas mostra um histórico de cada execução; veja-o todas as semanas para encontrar erros. Também pode acrescentar uma linha de registo numa folha: data, o que a fez começar, o que fez, quem aprovou.",
            "Escreva uma descrição de uma página: o que a automação faz, o gatilho e as ações, que contas usa, quem aprova e como a desligar. Guarde-a num lugar onde um familiar ou um funcionário a possa encontrar.",
            "Proteja o acesso: use o início de sessão em dois passos na ferramenta de automação e nas contas ligadas, dê-lhe acesso só ao que precisa, deixe os números de cartão dos clientes e as palavras-passe fora dos passos de IA, e tire o acesso quando um funcionário sair."
          ],
          steps: ["Veja o histórico de execuções todas as semanas.", "Acrescente uma linha de registo por cada execução.", "Escreva a descrição de uma página com o botão para desligar.", "Ative o início de sessão em dois passos e limite o acesso.", "Todos os meses, veja se ainda poupa tempo."],
          words: [["Histórico de execuções", "uma lista que a ferramenta guarda de todas as vezes que a automação correu."], ["Registo", "um apontamento do que aconteceu e quando."], ["Botão para desligar", "a forma de desligar uma automação depressa."]],
          slides: [
            { title: "Continue a observar", bullets: ["Veja o histórico de execuções todas as semanas", "Registo: data, gatilho, ação, quem aprovou"] },
            { title: "Descrição de uma página", bullets: ["O que faz e que contas usa", "Quem aprova", "Como a desligar"] },
            { title: "Proteja o acesso", bullets: ["Início de sessão em dois passos", "Só o acesso necessário", "Nenhum número de cartão nem palavra-passe nos passos de IA"] }
          ],
          tryIt: "Tarefa final: termine a sua automação: mapa de passos, fluxo de trabalho com aprovação, três testes que passam, um registo e uma verificação semanal, e uma descrição de uma página com o botão para desligar.",
          youCanNow: "usar uma automação do negócio com segurança, com aprovação, testes, registos e um botão para desligar.",
          quickCheck: [
            { objective: "O6", q: "O que vai numa linha de registo nesta lição?", options: ["Os números de cartão dos clientes", "A sua palavra-passe", "Data, gatilho, o que fez e quem aprovou", "Só a palavra \"feito\""], answer: 2, why: "Uma linha de registo guarda a data, o gatilho, o que fez e quem aprovou." },
            { objective: "O6", q: "Um funcionário que ajudava a aprovar rascunhos sai do negócio. O que faz?", options: ["Nada", "Partilha a sua palavra-passe com a pessoa nova", "Desliga o início de sessão em dois passos", "Tira-lhe o acesso à automação e às contas ligadas"], answer: 3, why: "Tire o acesso quando um funcionário sair." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir, testar e usar com segurança",
        questions: [
          { objective: "O4", q: "Qual é uma ferramenta de automação sem código?", options: ["Zapier", "Um agrafador", "Uma gaveta de caixa", "Um fax"], answer: 0, why: "O Zapier constrói automações sem código." },
          { objective: "O4", q: "O que é mapear campos?", options: ["Imprimir um mapa", "Desenhar uma machamba", "Escolher uma palavra-passe", "Dizer à ferramenta para onde vai cada informação"], answer: 3, why: "Liga os campos do formulário às colunas da folha." },
          { objective: "O5", q: "Com que dados deve testar?", options: ["Os dados de clientes verdadeiros", "Entradas de exemplo inventadas", "Números de cartão", "Os seus dados de acesso ao banco"], answer: 1, why: "Nunca teste com clientes verdadeiros." },
          { objective: "O5", q: "O rascunho da IA inventa um preço. O que corrige?", options: ["As instruções do passo de IA, e depois testa outra vez", "Nada", "Envia na mesma", "Apaga o negócio"], answer: 0, why: "Instruções claras diminuem os dados inventados." },
          { objective: "O6", q: "Porque escrever uma descrição de uma página com um botão para desligar?", options: ["Para decorar", "Para ficar mais longa", "Para que outra pessoa a possa entender ou parar", "Não serve para nada"], answer: 2, why: "Qualquer pessoa deve conseguir desligá-la depressa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Agentes de IA para Automatizar o Negócio",
    questions: [
      { objective: "O1", q: "Um agente de IA é:", options: ["Uma pessoa", "Um sistema de IA que pode escolher alguns dos seus próprios passos", "Uma regra fixa", "Uma impressora"], answer: 1, why: "Os agentes escolhem passos para chegar a um objetivo." },
      { objective: "O1", q: "Por onde deve começar um pequeno negócio?", options: ["Automatizar tudo de uma vez", "Um agente totalmente independente com acesso ao banco", "Por nada", "Automações fixas, depois um passo de IA"], answer: 3, why: "Primeiro o simples e previsível." },
      { objective: "O1", q: "O que deve ficar sempre com uma pessoa?", options: ["Formatar uma linha", "Copiar um formulário para uma folha", "Acrescentar um lembrete no calendário", "Gastar dinheiro"], answer: 3, why: "As decisões sobre dinheiro precisam de uma pessoa." },
      { objective: "O2", q: "O primeiro passo antes de automatizar é:", options: ["Comprar uma ferramenta", "Escrever um mapa de passos da tarefa", "Ligá-la", "Contratar alguém"], answer: 1, why: "Não consegue automatizar o que não escreveu." },
      { objective: "O2", q: "Um passo de \"Regra\" é um passo que é:", options: ["Sobre dinheiro", "Uma decisão grande", "Sempre igual", "Pouco claro"], answer: 2, why: "Os passos de Regra podem ser automatizados." },
      { objective: "O2", q: "Um passo de \"Palavras\" pode ter:", options: ["Um rascunho da IA", "Um pagamento", "Um apagamento", "Nada"], answer: 0, why: "A IA ajuda a escrever." },
      { objective: "O3", q: "\"Novo formulário enviado\" é um exemplo de:", options: ["Registo", "Ação", "Gatilho", "Palavra-passe"], answer: 2, why: "Faz começar o fluxo de trabalho." },
      { objective: "O3", q: "\"Acrescentar uma linha à folha\" é um exemplo de:", options: ["Ação", "Gatilho", "Aprovação", "Botão para desligar"], answer: 0, why: "As ações vêm depois do gatilho." },
      { objective: "O3", q: "Num fluxo de trabalho seguro, a IA escreve rascunhos de respostas aos clientes e depois:", options: ["Envia-os diretamente aos clientes", "Envia-os para você aprovar", "Apaga-os", "Publica-os para todos verem"], answer: 1, why: "Quem carrega em enviar é você." },
      { objective: "O3", q: "Porque desenhar primeiro o fluxo de trabalho no papel?", options: ["Não serve para nada", "A lei obriga", "Só para se divertir", "Para ver cada passo e cada ferramenta antes de construir"], answer: 3, why: "Planear evita erros." },
      { objective: "O4", q: "Quando liga uma conta a uma ferramenta de automação, você está a:", options: ["Deixar a ferramenta usar essa aplicação depois de iniciar sessão", "Apagar a aplicação", "Partilhá-la com todos", "Pagar uma multa"], answer: 0, why: "As ligações dão acesso à ferramenta." },
      { objective: "O4", q: "O que deve receber o passo de IA?", options: ["Palavras-passe", "Todos os dados dos clientes", "Números de cartão", "Só os campos de que precisa"], answer: 3, why: "O mínimo de dados necessário." },
      { objective: "O4", q: "Onde vê os limites do plano gratuito de uma ferramenta?", options: ["Num vídeo antigo", "Adivinhando", "No site oficial da ferramenta", "Num concorrente"], answer: 2, why: "Os planos mudam." },
      { objective: "O5", q: "Um caso extremo é:", options: ["O canto de uma mesa", "Uma entrada fora do normal que pode estragar o processo", "Uma entrada normal", "Uma palavra-passe"], answer: 1, why: "Teste também as entradas estranhas." },
      { objective: "O5", q: "Neste curso, quantas entradas de exemplo devem passar antes de pôr a funcionar?", options: ["Mil", "Nenhuma", "Um cliente verdadeiro", "Três: normal, campo em falta, texto estranho"], answer: 3, why: "Cobrem os problemas comuns." },
      { objective: "O5", q: "Corrija os problemas:", options: ["Ignorando-os", "Mudando tudo de uma vez", "Mudando uma coisa de cada vez e testando outra vez", "Pondo a funcionar na mesma"], answer: 2, why: "Uma correção de cada vez mostra o que funcionou." },
      { objective: "O6", q: "O histórico de execuções mostra:", options: ["Todas as vezes que a automação correu", "O histórico do seu navegador", "As palavras-passe dos clientes", "As declarações de impostos"], answer: 0, why: "Ajuda você a encontrar erros." },
      { objective: "O6", q: "Com que frequência deve verificar uma automação que está a funcionar?", options: ["Nunca", "Pelo menos todas as semanas", "Uma vez de poucos em poucos anos", "Só quando os clientes se queixam"], answer: 1, why: "Verificações regulares apanham os problemas cedo." },
      { objective: "O6", q: "O início de sessão em dois passos nas contas de automação:", options: ["Não atrasa nada de útil", "Torna mais difícil entrar nelas sem autorização", "Não é permitido", "Partilha a sua palavra-passe"], answer: 1, why: "Acrescenta uma segunda verificação." },
      { objective: "O6", q: "Todos os meses deve perguntar se a automação:", options: ["Ainda poupa tempo", "Tem um nome bonito", "Usa mais aplicações", "É popular"], answer: 0, why: "Se já não ajuda, mude-a ou pare-a." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 11, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Mapa de passos", objective: "O2", notYet: "Faltam passos ou não estão marcados.", meets: "Todos os passos da tarefa estão na lista e marcados como Regra, Palavras, Decisão ou Dinheiro ou envio.", exceeds: "Anota quanto tempo leva hoje cada passo." },
      { name: "Desenho do fluxo de trabalho", objective: "O3", notYet: "Não há passo de aprovação, ou alguma coisa é enviada ou paga sem uma pessoa.", meets: "Gatilho, ações e uma aprovação por uma pessoa antes de qualquer coisa sair do negócio.", exceeds: "Cada caixa tem o nome da sua ferramenta e as ligações foram verificadas." },
      { name: "Automação que funciona", objective: "O4", notYet: "A automação não corre ou os campos vão para os lugares errados.", meets: "Corre a partir do gatilho, mapeia bem os campos e envia o rascunho da IA para você.", exceeds: "O passo de IA recebe só os campos de que precisa e tem instruções claras." },
      { name: "Testada e corrigida", objective: "O5", notYet: "Testada com dados verdadeiros de clientes ou com menos de três entradas.", meets: "As entradas de exemplo normal, com campo em falta e com texto estranho passam todas depois das correções.", exceeds: "Faz a lista de cada problema encontrado e da única mudança que o corrigiu." },
      { name: "Uso seguro", objective: "O6", notYet: "Não há registo, verificação semanal nem forma de a desligar.", meets: "Registo, verificação semanal e uma descrição de uma página com o botão para desligar.", exceeds: "Início de sessão em dois passos ativo e acesso limitado ao necessário." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos com uma automação ainda a funcionar com segurança 30 dias depois (inquérito de seguimento)",
      "Horas por semana que os donos dizem poupar na tarefa automatizada",
      "Alunos que começam outro curso de pequenos negócios da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "Uma conta gratuita numa ferramenta de automação sem código, uma ferramenta de formulários e uma folha de cálculo como o Google Sheets ou o Excel",
      "Papel e caneta para o mapa de passos e o desenho do fluxo de trabalho",
      "Cerca de 60 minutos no total, mais o tempo para construir e testar"
    ],
    facilitatorNotes: [
      "Peça a cada aluno que escolha antes da sessão uma tarefa real, pequena e repetida; para uma primeira automação, quanto mais pequena melhor.",
      "Use só entradas de exemplo inventadas e um e-mail de teste do próprio aluno; nunca dados verdadeiros de clientes.",
      "Antes de os alunos começarem a construir, confirme que cada desenho tem uma aprovação por uma pessoa antes de qualquer envio ou pagamento.",
      "Ajude os alunos a ativar o início de sessão em dois passos na ferramenta de automação e nas contas ligadas.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
