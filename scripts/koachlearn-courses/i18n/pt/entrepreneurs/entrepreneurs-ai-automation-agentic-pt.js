"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-automation-agentic.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-automation-agentic-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-automation-agentic",
  category: "Entrepreneurs",
  name: "Automação com IA e Fluxos de Trabalho com Agentes",
  skills: "Mapear um fluxo de trabalho, Pensar em gatilhos e ações, Criar uma automação sem código, Acrescentar um passo de IA, Definir limites para agentes de IA, Acompanhar e corrigir automações",
  outcome: "mapear um processo repetido do seu negócio, criar para ele uma automação sem código que funcione, com um passo de IA, acrescentar um limite de aprovação por uma pessoa, e testá-la e acompanhá-la para que falhe com segurança.",
  about: [
    "Automação quer dizer que um computador faz por você um trabalho repetido quando alguma coisa acontece: alguém preenche um formulário, chega um email, uma encomenda é paga. A IA acrescenta a capacidade de ler, organizar e escrever como parte desse trabalho. As ferramentas \"com agentes\" vão mais longe: você dá-lhes um objetivo e elas planeiam e fazem vários passos sozinhas.",
    "Este curso é para donos de negócios que querem deixar de copiar e colar as mesmas informações o dia todo. Você vai mapear um processo, aprender a pensar em gatilhos e ações, criar uma automação real com uma ferramenta sem código (como o Zapier, o Make ou o Microsoft Power Automate), acrescentar um passo de IA e definir limites para que nada importante aconteça sem a sua aprovação.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As funções das ferramentas e os limites dos planos gratuitos mudam muitas vezes, por isso consulte as páginas de preços e de ajuda de cada ferramenta."
  ],
  finalTask: "Crie e teste uma automação para o seu negócio, por exemplo: quando um cliente preenche o seu formulário de pedido de informações, junte o pedido a uma folha de cálculo, peça à IA um rascunho de resposta e envie o rascunho para você aprovar antes de qualquer coisa chegar ao cliente. Escreva um registo de uma página: o mapa do fluxo de trabalho, o gatilho e as ações, a instrução para a IA, o passo de aprovação, três resultados de testes e o que vai verificar todas as semanas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios que passam horas a copiar as mesmas informações entre formulários, email e folhas de cálculo e querem que um computador o faça por eles.",
    startingPoint: "Usam formulários na internet, email e folhas de cálculo, e já usaram um assistente de IA. Poucos já criaram uma automação ou pensaram no que um agente de IA deve e não deve fazer sozinho.",
    gap: "Copiar as mesmas coisas faz perder horas e causa erros, mas automações e agentes que agem sem limites podem enviar respostas erradas, gastar dinheiro ou expor dados de clientes. Os donos precisam de criar uma pequena automação com um passo de IA, um limite de aprovação, testes e uma verificação semanal, para que poupe tempo e falhe com segurança.",
    constraints: [
      "Sem programação; palavras simples e o plano gratuito de uma ferramenta sem código",
      "Aparelhos: um computador com uma ferramenta de formulários, uma folha de cálculo e email",
      "Tempo: cerca de cinco minutos por lição, mais o tempo para criar e testar",
      "As funções das ferramentas e os limites dos planos gratuitos mudam muitas vezes; consulte as páginas de preços e de ajuda de cada ferramenta",
      "Teste com dados inventados e mantenha números de cartão e outros dados privados fora dos passos de IA"
    ],
    prerequisites: "\"Ferramentas de IA que Todo o Empreendedor Deve Conhecer\", ou estar à vontade com formulários na internet e folhas de cálculo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um processo que repete todas as semanas", action: "mapeá-lo em passos do início ao fim, marcando cada um como cópia, decisão ou escrita", standard: "com tudo o que a IA errou corrigido" },
    { id: "O2", condition: "Com o seu mapa do fluxo de trabalho", action: "escrever o fluxo de trabalho como um gatilho e uma lista de ações", standard: "com a ação de IA e o passo de aprovação marcados" },
    { id: "O3", condition: "Usando o plano gratuito de uma ferramenta sem código", action: "criar uma automação que passa as respostas de um formulário para uma folha de cálculo e avisa você", standard: "testada com dados inventados e a funcionar" },
    { id: "O4", condition: "Com a sua automação a funcionar", action: "acrescentar um passo de IA que escreve um rascunho de resposta ou classifica um pedido e o envia para você", standard: "com regras claras, testado com três pedidos diferentes e sem passar dados privados" },
    { id: "O5", condition: "Para a sua automação ou qualquer agente de IA", action: "escrever uma lista de limites com o que pode fazer sozinho e o que precisa sempre da sua aprovação", standard: "com o envio a clientes e o gasto de dinheiro a precisarem sempre de aprovação" },
    { id: "O6", condition: "Antes e depois de ligar a sua automação", action: "testá-la com dados estranhos, ligar os alertas de falha e planear uma verificação semanal", standard: "para que pare e avise você quando alguma coisa corre mal" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pensar em fluxos de trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mapear um processo que você repete",
          minutes: 5,
          goal: "Desenhar um processo repetido do negócio como uma lista de passos do início ao fim.",
          text: [
            "Antes de automatizar qualquer coisa, escreva-a. Um fluxo de trabalho são os passos por que um trabalho passa do início ao fim. Exemplo, o pedido de informações de um cliente novo: chega o formulário, você copia os dados para uma folha de cálculo, escreve uma resposta e acrescenta um lembrete para voltar a contactar.",
            "Escolha um processo que acontece muitas vezes, que segue os mesmos passos todas as vezes e que lhe faz perder tempo a copiar, colar ou escrever de novo. Esses são os melhores para automatizar.",
            "A IA pode ajudar a mapeá-lo. Descreva o que faz com as suas palavras e peça: \"Transforme isto num fluxo de trabalho numerado. Marque que passos são cópia de informações, quais precisam de uma decisão e quais precisam de escrita.\""
          ],
          steps: ["Escolha um processo que faz pelo menos uma vez por semana.", "Descreva-o a um assistente de IA com as suas palavras.", "Peça um fluxo de trabalho numerado, marcando os passos de cópia, decisão e escrita.", "Compare o mapa com o que faz na realidade e corrija-o."],
          words: [["Fluxo de trabalho", "os passos por que um trabalho passa do início ao fim."], ["Automatizar", "pôr um computador a fazer um trabalho repetido sem você fazer cada passo."]],
          slides: [
            { title: "Primeiro, escreva", bullets: ["Fluxo de trabalho = os passos do início ao fim", "Exemplo: formulário, folha de cálculo, resposta, lembrete"] },
            { title: "Os melhores processos para automatizar", bullets: ["Acontecem muitas vezes", "Os mesmos passos todas as vezes", "Muita cópia e muita escrita repetida"] },
            { title: "Mapeie com a IA", bullets: ["Descreva o que faz", "Peça passos numerados", "Marque os passos de cópia, decisão e escrita"] }
          ],
          tryIt: "Mapeie com a ajuda da IA um processo que repete todas as semanas. Marque cada passo como cópia, decisão ou escrita, e corrija tudo o que a IA errou.",
          youCanNow: "mapear um processo repetido do negócio em passos claros.",
          quickCheck: [
            { objective: "O1", q: "O que é um fluxo de trabalho?", options: ["Os passos por que um trabalho passa do início ao fim", "Um tipo de folha de cálculo", "Uma reclamação de um cliente", "Uma aplicação de IA"], answer: 0, why: "Um fluxo de trabalho mostra cada passo de um processo, por ordem." },
            { objective: "O1", q: "O mapa que a IA fez do seu processo de encomendas esquece o passo em que verifica o stock. O que faz?", options: ["Usa o mapa como está", "Acrescenta você mesmo o passo que falta", "Começa a automatizar na mesma", "Apaga o mapa todo"], answer: 1, why: "Ninguém conhece o seu processo melhor do que você, por isso é você quem corrige o mapa da IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gatilhos e ações",
          minutes: 5,
          goal: "Transformar o seu mapa do fluxo de trabalho num gatilho e numa lista de ações.",
          text: [
            "Cada automação tem um gatilho e uma ou mais ações. O gatilho é o acontecimento que a põe a andar: \"uma nova resposta a um formulário\", \"um novo email com a palavra fatura\", \"uma nova encomenda paga\". As ações são o que acontece a seguir: \"juntar uma linha a uma folha de cálculo\", \"enviar-me uma mensagem\", \"criar um evento na agenda\".",
            "Os passos de cópia transformam-se facilmente em ações. Os passos de escrita podem tornar-se ações de IA. Os passos de decisão normalmente ficam com você, ou tornam-se um passo de aprovação em que a automação espera pelo seu sim.",
            "Ferramentas sem código como o Zapier, o Make e o Microsoft Power Automate ligam aplicações que você já usa através de gatilhos e ações. A maioria tem planos gratuitos com limites; veja na página de preços de cada ferramenta o que está incluído hoje."
          ],
          steps: ["Encontre o acontecimento que começa o seu fluxo de trabalho: esse é o gatilho.", "Transforme cada passo de cópia numa ação.", "Transforme os passos de escrita em ações de IA.", "Transforme os passos de decisão num passo de aprovação ou faça-os você mesmo.", "Escreva assim: Quando [gatilho], então [ação 1], [ação 2]..."],
          words: [["Gatilho", "o acontecimento que põe uma automação a andar."], ["Ação", "um passo que a automação faz depois do gatilho."], ["Ferramenta sem código", "uma ferramenta que deixa criar automações clicando e escolhendo, sem programar."]],
          slides: [
            { title: "Um gatilho, algumas ações", bullets: ["Gatilho: o acontecimento que a põe a andar", "Ações: o que acontece a seguir"] },
            { title: "Transforme passos em ações", bullets: ["Passos de cópia: ações fáceis", "Passos de escrita: ações de IA", "Decisões: um passo de aprovação ou você"] },
            { title: "Ferramentas sem código", bullets: ["Zapier, Make, Microsoft Power Automate", "Ligam aplicações que você já usa", "Veja os limites do plano gratuito nos sites delas"] }
          ],
          sources: [{ name: "Zapier: Preços", url: "https://zapier.com/pricing" }, { name: "Make: Preços", url: "https://www.make.com/en/pricing" }],
          tryIt: "Escreva o seu fluxo de trabalho como \"Quando [gatilho], então [ações]\". Marque que ação é de IA e onde quer um passo de aprovação.",
          youCanNow: "descrever qualquer automação como um gatilho mais ações, com as decisões sob o seu controlo.",
          quickCheck: [
            { objective: "O2", q: "Em \"Quando chega um pagamento, enviar um recibo\", qual é a ação?", options: ["Chega um pagamento", "O cliente", "Enviar um recibo", "O banco"], answer: 2, why: "A ação é o que acontece depois do gatilho." },
            { objective: "O2", q: "Um passo do seu fluxo de trabalho é decidir se devolve o dinheiro a um cliente. Como trata esse passo?", options: ["Deixa a automação decidir", "Deixa a IA decidir", "Tira o passo", "Mantém-no como um passo de aprovação para você"], answer: 3, why: "Os passos de decisão tornam-se aprovações ou ficam com você." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Criar a sua primeira automação sem código",
          minutes: 6,
          goal: "Criar uma automação que funcione, que passa as respostas de um formulário para uma folha de cálculo e avisa você.",
          text: [
            "Comece com uma automação simples e segura: quando alguém preenche o seu formulário de pedido de informações (por exemplo um Google Form ou um Microsoft Form), junte as respostas a uma folha de cálculo e envie-lhe um aviso. Por enquanto, nada vai para o cliente.",
            "Na sua ferramenta sem código, crie uma automação nova, escolha a aplicação de formulários como gatilho, ligue a sua conta e escolha o formulário. Depois acrescente uma ação para a folha de cálculo e faça corresponder cada pergunta do formulário a uma coluna. Acrescente uma segunda ação para lhe enviar um email ou uma mensagem.",
            "Teste-a com um pedido falso, usando um nome inventado como \"Test Customer\" (cliente de teste). Veja se a linha aparece nas colunas certas e se recebeu a mensagem. Só depois a ligue."
          ],
          steps: ["Faça um formulário curto de pedido de informações com nome, email e pedido.", "Na ferramenta sem código, escolha o formulário como gatilho.", "Acrescente uma ação de folha de cálculo e faça corresponder as perguntas às colunas.", "Acrescente uma ação para avisar você.", "Teste com dados de \"Test Customer\", veja os resultados e depois ligue-a."],
          words: [["Ligar uma conta", "dar à ferramenta de automação autorização para usar uma das suas aplicações."], ["Correspondência de campos", "pôr cada informação no lugar onde deve ir, como uma pergunta do formulário numa coluna da folha de cálculo."]],
          slides: [
            { title: "Comece simples e seguro", bullets: ["Respostas do formulário numa folha de cálculo", "Um aviso para você", "Por enquanto, nada vai para o cliente"] },
            { title: "Crie a automação", bullets: ["Gatilho: nova resposta ao formulário", "Ação: juntar linha à folha de cálculo, ligar os campos", "Ação: avisar você"] },
            { title: "Teste antes de ligar", bullets: ["Use dados de \"Test Customer\"", "Veja as colunas e o aviso", "Depois ligue-a"] }
          ],
          tryIt: "Crie a automação de formulário para folha de cálculo com aviso no plano gratuito de uma ferramenta sem código. Teste-a com dados inventados e confirme que funciona.",
          youCanNow: "criar e testar uma automação simples sem código entre aplicações que usa.",
          quickCheck: [
            { objective: "O3", q: "O que é a correspondência de campos numa ferramenta sem código?", options: ["Pôr cada informação no lugar onde deve ir", "Desenhar um mapa da sua loja", "Escolher um tipo de letra", "Pagar um plano"], answer: 0, why: "A correspondência de campos envia cada resposta para a coluna certa." },
            { objective: "O3", q: "A sua automação está criada. O que faz antes de a ligar?", options: ["Envia-a a todos os clientes", "Testa-a com dados inventados como \"Test Customer\"", "Apaga o formulário", "Salta o teste para poupar tempo"], answer: 1, why: "Testar com dados inventados encontra problemas sem riscos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Pensar em fluxos de trabalho",
        questions: [
          { objective: "O1", q: "Que processo é melhor automatizar primeiro?", options: ["Uma decisão legal que só acontece uma vez", "Um que acontece muitas vezes, com os mesmos passos e muita cópia", "Uma coisa que faz uma vez por ano", "Contratar o seu primeiro trabalhador"], answer: 1, why: "O trabalho de cópia frequente e repetido é o que mais tempo poupa." },
          { objective: "O2", q: "Em \"Quando chega uma nova resposta ao formulário, juntar uma linha à folha de cálculo\", qual é o gatilho?", options: ["O seu email", "Juntar uma linha à folha de cálculo", "A folha de cálculo", "Chega uma nova resposta ao formulário"], answer: 3, why: "O gatilho é o acontecimento que põe a automação a andar." },
          { objective: "O2", q: "O que acontece normalmente aos passos de decisão numa automação?", options: ["Tornam-se um passo de aprovação ou ficam com você", "A ferramenta adivinha", "São apagados", "O cliente decide"], answer: 0, why: "As decisões precisam do seu juízo." },
          { objective: "O3", q: "O que é a correspondência de campos?", options: ["Escolher um tipo de letra", "Desenhar o mapa de uma machamba", "Pôr cada informação no lugar onde deve ir", "Pagar uma conta"], answer: 2, why: "Liga as perguntas do formulário às colunas da folha de cálculo." },
          { objective: "O3", q: "Que dados deve usar para testar uma automação nova?", options: ["A sua palavra-passe", "O número do cartão de um cliente verdadeiro", "Dados de teste inventados como \"Test Customer\"", "Nenhum teste"], answer: 2, why: "Os dados falsos deixam testar com segurança." }
        ]
      }
    },
    {
      name: "Capítulo 2: Acrescentar IA e manter o controlo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Acrescentar um passo de IA",
          minutes: 5,
          goal: "Acrescentar uma ação de IA que escreve um rascunho de resposta ou classifica um pedido.",
          text: [
            "Muitas ferramentas sem código deixam acrescentar uma ação de IA: enviar texto a um modelo de IA com uma instrução e receber a resposta como parte da automação. Usos comuns: classificar um pedido numa categoria, tirar os dados principais ou escrever um rascunho de resposta. Em algumas ferramentas o passo de IA só existe nos planos pagos (quando se verificou em outubro de 2026, os passos de IA do Zapier precisavam de um plano pago); veja a página de preços. Se o seu plano não o incluir, faça a automação enviar-lhe o pedido e cole-o você mesmo num assistente de conversa gratuito.",
            "Escreva a instrução para a IA com cuidado, como um pedido que se usa muitas vezes: \"Leia este pedido do cliente. Responda em menos de 100 palavras, de forma simpática e clara. Use só os dados do negócio dados aqui: [horário, serviços]. Nunca dê um preço. Se tiver dúvidas, escreva [CHECK].\"",
            "Envie o rascunho da IA para VOCÊ, não para o cliente. Pense em que informações do cliente passam para o serviço de IA; leia as condições de dados e de privacidade da ferramenta, e não envie por ela números de cartão, números de identificação nem dados de saúde."
          ],
          steps: ["Acrescente uma ação de IA depois do passo da folha de cálculo.", "Escreva uma instrução cuidadosa com regras e os dados do seu negócio.", "Passe só o texto do pedido de que a IA precisa.", "Envie o rascunho da IA para você rever.", "Teste com três pedidos inventados diferentes."],
          words: [["Ação de IA", "um passo numa automação que envia texto a uma IA e usa a resposta dela."], ["Condições de dados", "as regras sobre como uma ferramenta guarda e usa as informações que lhe envia."]],
          slides: [
            { title: "O que um passo de IA pode fazer", bullets: ["Classificar um pedido numa categoria", "Tirar os dados principais", "Escrever um rascunho de resposta", "Pode precisar de um plano pago: veja a página de preços"] },
            { title: "Uma instrução cuidadosa", bullets: ["Tamanho e tom", "Usar só os dados dados", "Nunca dar preços; marcar [CHECK] se tiver dúvidas"] },
            { title: "Mantenha a segurança", bullets: ["O rascunho vai para você, não para o cliente", "Envie só o que a IA precisa", "Leia as condições de dados da ferramenta"] }
          ],
          sources: [{ name: "Zapier: Preços (passos de IA e limites dos planos)", url: "https://zapier.com/pricing" }],
          tryIt: "Acrescente à sua automação um passo de IA que escreve um rascunho de resposta e o envia para você. Teste-o com três pedidos inventados diferentes e anote os erros.",
          youCanNow: "acrescentar um passo de IA a uma automação, com regras claras e sem dados privados.",
          quickCheck: [
            { objective: "O4", q: "Que regra deve estar na instrução de um passo de IA?", options: ["\"Invente um preço se tiver dúvidas\"", "\"Envie diretamente ao cliente\"", "\"Use só os dados dados; nunca dê um preço\"", "\"Inclua o número do cartão\""], answer: 2, why: "Regras claras mantêm os rascunhos da IA certos e seguros." },
            { objective: "O4", q: "O seu formulário pede um número de cartão. O que faz com o passo de IA?", options: ["Envia tudo para a IA", "Pede à IA para o esconder", "Guarda-o na resposta", "Deixa esse campo de fora do que o passo de IA recebe"], answer: 3, why: "Números de cartão e dados privados não devem passar pelo passo de IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Agentes e limites",
          minutes: 5,
          goal: "Decidir o que um agente de IA pode fazer sozinho e o que precisa da sua aprovação.",
          text: [
            "Um agente de IA recebe um objetivo, planeia e faz vários passos sozinho, como pesquisar, preencher formulários ou usar as suas aplicações. Os agentes podem poupar tempo, mas também podem cometer erros depressa e em grande quantidade.",
            "Os limites são as regras que você define. Uma regra simples: um agente pode ler, organizar e escrever rascunhos sozinho, mas tem de ter a sua aprovação antes de enviar qualquer coisa a um cliente, gastar dinheiro, apagar alguma coisa, mudar preços ou inscrever-se em qualquer coisa. Dê-lhe acesso só às aplicações e pastas de que precisa.",
            "Guarde um registo do que o agente fez (a maioria das ferramentas tem um histórico ou registo) e comece com tarefas pequenas e de pouco risco. Dê-lhe mais liberdade só depois de ter funcionado bem durante algum tempo."
          ],
          steps: ["Faça a lista do que o agente vai fazer.", "Marque cada ação: pode fazer sozinho, ou precisa da sua aprovação.", "Exija aprovação para enviar, gastar, apagar, mudar preços e fazer inscrições.", "Limite o acesso só às aplicações e pastas de que precisa.", "Veja o histórico ou registo com regularidade."],
          words: [["Agente de IA", "uma ferramenta de IA que faz vários passos sozinha para chegar a um objetivo."], ["Limite", "uma regra que impede uma automação ou um agente de fazer uma coisa arriscada."], ["Registo", "uma lista do que uma automação ou um agente fez e quando."]],
          slides: [
            { title: "O que é um agente", bullets: ["Recebe um objetivo", "Planeia e faz vários passos sozinho", "Rápido, também a cometer erros"] },
            { title: "Precisa da sua aprovação", bullets: ["Enviar a clientes", "Gastar dinheiro ou mudar preços", "Apagar coisas ou fazer inscrições"] },
            { title: "Limite e vigie", bullets: ["Acesso só ao que precisa", "Veja o histórico ou registo", "Comece pequeno, dê liberdade aos poucos"] }
          ],
          tryIt: "Escreva uma lista de limites para a sua automação: o que pode fazer sozinha e as cinco coisas que precisam sempre da sua aprovação. Acrescente um passo de aprovação se a sua ferramenta o permitir.",
          youCanNow: "definir limites para que automações e agentes nunca façam passos arriscados sem você.",
          quickCheck: [
            { objective: "O5", q: "O que é um limite numa automação?", options: ["Uma regra que impede ações arriscadas", "Um gatilho mais rápido", "Uma coluna de folha de cálculo", "Uma função paga"], answer: 0, why: "Os limites impedem a automação de fazer coisas arriscadas sozinha." },
            { objective: "O5", q: "Uma ferramenta de agente pede acesso a todas as suas pastas e ao seu banco. O que lhe dá?", options: ["Tudo o que pede", "Só as aplicações e pastas de que precisa", "A sua palavra-passe", "Direitos de administrador"], answer: 1, why: "O acesso mínimo limita os estragos se alguma coisa correr mal." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Testar, acompanhar e falhar com segurança",
          minutes: 5,
          goal: "Testar a sua automação à procura de problemas e marcar uma verificação semanal.",
          text: [
            "As automações avariam: uma aplicação muda, uma pergunta do formulário muda de nome, uma palavra-passe expira, ou a IA dá uma resposta estranha. Teste com dados estranhos: um campo vazio, uma mensagem muito longa, uma mensagem noutra língua, uma mensagem mal-educada.",
            "Configure-a para falhar com segurança: se alguma coisa correr mal, a automação deve parar e avisar você, e não enviar uma mensagem a meio. A maioria das ferramentas pode enviar-lhe um email quando uma execução falha; ligue essa opção.",
            "Uma vez por semana, veja o registo: quantas execuções, quantas falharam e dois ou três rascunhos da IA. Conte os minutos poupados. Se der mais trabalho do que poupa, mude-a ou desligue-a."
          ],
          steps: ["Teste com um campo vazio, uma mensagem muito longa e uma mensagem fora do normal.", "Ligue os alertas de falha.", "Confirme que uma falha para a execução em vez de enviar alguma coisa.", "Todas as semanas, veja as execuções, as falhas e alguns rascunhos da IA.", "Mantenha, mude ou desligue conforme o tempo poupado."],
          words: [["Falhar com segurança", "quando alguma coisa corre mal, parar e avisar uma pessoa em vez de fazer algo que cause dano."], ["Execução", "cada vez que a automação começa e faz os seus passos."]],
          slides: [
            { title: "As automações avariam", bullets: ["As aplicações mudam", "As perguntas do formulário mudam de nome", "A IA dá respostas estranhas"] },
            { title: "Teste com dados estranhos", bullets: ["Campo vazio", "Mensagem muito longa", "Outra língua ou uma mensagem mal-educada"] },
            { title: "Falhar com segurança", bullets: ["Parar e avisar você", "Nunca enviar mensagens a meio", "Ligar os emails de falha"] },
            { title: "Verificação semanal", bullets: ["Execuções e falhas no registo", "Leia alguns rascunhos da IA", "Conte os minutos poupados"] }
          ],
          tryIt: "Tarefa final: teste a sua automação com três dados estranhos, ligue os alertas de falha e escreva o seu registo de uma página: mapa, gatilho e ações, instrução para a IA, passo de aprovação, resultados dos testes e verificação semanal.",
          youCanNow: "criar, proteger, testar e acompanhar uma automação com IA para o seu negócio.",
          quickCheck: [
            { objective: "O6", q: "O que é um teste com dados estranhos?", options: ["Testar só aos fins de semana", "Testar com o seu melhor cliente", "Testar com dados fora do normal, como um campo vazio", "Testar com números de cartão verdadeiros"], answer: 2, why: "Os dados estranhos mostram como a automação lida com problemas." },
            { objective: "O6", q: "A sua verificação semanal mostra cinco execuções falhadas. O que faz?", options: ["Ignora-as", "Desliga os alertas de falha", "Dá mais acesso à automação", "Encontra a causa, corrige e testa de novo"], answer: 3, why: "Acompanhar serve para apanhar e corrigir falhas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Acrescentar IA e manter o controlo",
        questions: [
          { objective: "O4", q: "Para onde deve ir o rascunho de resposta da IA na sua primeira automação?", options: ["Para você rever", "Diretamente para o cliente", "Para as redes sociais", "Para lado nenhum"], answer: 0, why: "Você revê os rascunhos antes de os clientes os verem." },
          { objective: "O4", q: "Que informação NÃO deve passar pelo passo de IA?", options: ["A sua lista de serviços", "O texto do pedido", "O seu horário de funcionamento", "O número do cartão de um cliente"], answer: 3, why: "Números de cartão e dados parecidos nunca devem ser enviados a ferramentas de IA." },
          { objective: "O5", q: "Que ação deve precisar sempre da sua aprovação?", options: ["Ler um email", "Gastar dinheiro", "Classificar um pedido", "Escrever um rascunho de resposta para você"], answer: 1, why: "Gastar dinheiro é uma ação de alto risco." },
          { objective: "O6", q: "O que quer dizer \"falhar com segurança\"?", options: ["Parar e avisar uma pessoa quando alguma coisa corre mal", "Continuar aconteça o que acontecer", "Apagar os dados", "Enviar email a todos os clientes"], answer: 0, why: "Parar evita ações a meio que causam dano." },
          { objective: "O6", q: "A sua automação dá mais trabalho a corrigir do que poupa. O que faz?", options: ["Ignora", "Acrescenta mais passos de IA", "Muda-a ou desliga-a", "Dá-lhe mais acesso"], answer: 2, why: "As automações devem poupar tempo, não gastá-lo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Automação com IA e Fluxos de Trabalho com Agentes",
    questions: [
      { objective: "O1", q: "Automação quer dizer:", options: ["Contratar mais pessoas", "Um computador faz um trabalho repetido quando alguma coisa acontece", "Escrever todos os emails à mão", "Desligar o computador"], answer: 1, why: "Essa é a ideia básica." },
      { objective: "O1", q: "O primeiro passo antes de automatizar é:", options: ["Apagar dados antigos", "Comprar a ferramenta mais cara", "Dar acesso total a um agente", "Mapear o processo em passos"], answer: 3, why: "Só pode automatizar o que entende." },
      { objective: "O1", q: "Um fluxo de trabalho é:", options: ["Uma palavra-passe", "Um tipo de folha de cálculo", "Um pagamento", "Os passos por que um trabalho passa do início ao fim"], answer: 3, why: "Essa é a definição." },
      { objective: "O1", q: "Que passo é mais fácil de automatizar?", options: ["Decidir se contrata alguém", "Copiar as respostas de um formulário para uma folha de cálculo", "Assinar um contrato de arrendamento", "Escolher o nome de um negócio"], answer: 1, why: "Copiar é repetitivo e segue regras." },
      { objective: "O2", q: "O gatilho é:", options: ["O modelo de IA", "O último passo", "O acontecimento que põe a automação a andar", "O preço"], answer: 2, why: "Os gatilhos põem as automações a andar." },
      { objective: "O2", q: "Qual destes é uma ação?", options: ["Juntar uma linha a uma folha de cálculo", "Uma nova resposta a um formulário", "Uma nova encomenda paga", "Chega um novo email"], answer: 0, why: "Os outros são gatilhos." },
      { objective: "O3", q: "O Zapier, o Make e o Microsoft Power Automate são:", options: ["Redes sociais", "Bancos", "Ferramentas de automação sem código", "Impressoras"], answer: 2, why: "Ligam aplicações através de gatilhos e ações." },
      { objective: "O3", q: "Onde deve ver os limites do plano gratuito de uma ferramenta sem código?", options: ["Na página de preços da própria ferramenta", "Adivinhando", "Num vídeo antigo", "Perguntando a um cliente"], answer: 0, why: "Os planos e os limites mudam." },
      { objective: "O3", q: "Antes de ligar uma automação, deve:", options: ["Enviá-la a todos os clientes", "Testá-la com dados inventados", "Saltar o teste", "Tirar os avisos"], answer: 1, why: "Testar apanha os erros com segurança." },
      { objective: "O4", q: "Uma ação de IA numa automação pode:", options: ["Aprovar-se a si mesma", "Assinar contratos", "Pagar os seus impostos", "Classificar um pedido ou escrever um rascunho de resposta"], answer: 3, why: "Ler, classificar e escrever rascunhos são bons usos da IA." },
      { objective: "O4", q: "Uma boa instrução para a IA inclui:", options: ["Regras como \"Use só os dados dados; nunca dê um preço\"", "\"Faça o que quiser\"", "A sua palavra-passe", "Os números de cartão dos clientes"], answer: 0, why: "As regras reduzem os erros." },
      { objective: "O4", q: "Porque ler as condições de dados de uma ferramenta de automação?", options: ["Não é preciso", "Para mudar o seu logótipo", "Para ter um desconto", "Para saber como as informações dos clientes que envia são guardadas e usadas"], answer: 3, why: "Os dados dos clientes passam por estas ferramentas." },
      { objective: "O5", q: "Um agente de IA é:", options: ["Uma folha de cálculo", "Um vendedor humano", "Uma ferramenta de IA que faz vários passos sozinha para chegar a um objetivo", "Um motorista de entregas"], answer: 2, why: "Os agentes planeiam e agem sozinhos." },
      { objective: "O5", q: "Um limite é:", options: ["Um tipo de gatilho", "Uma regra que impede ações arriscadas", "Uma linha de internet rápida", "Uma aplicação nova"], answer: 1, why: "Os limites mantêm você no controlo." },
      { objective: "O5", q: "Um agente deve ter a sua aprovação antes de:", options: ["Escrever um rascunho de nota para você", "Ler um email", "Organizar uma lista", "Enviar qualquer coisa a um cliente"], answer: 3, why: "Enviar a clientes é de alto risco." },
      { objective: "O5", q: "Quanto acesso deve ter um agente?", options: ["Os seus dados de entrada no banco", "Tudo o que é seu", "Só as aplicações e pastas de que precisa", "Todos os ficheiros dos clientes"], answer: 2, why: "O acesso limitado limita os estragos dos erros." },
      { objective: "O5", q: "Quando dá mais liberdade a um agente, deve:", options: ["Começar pequeno e dar mais liberdade depois de funcionar bem", "Dar liberdade total no primeiro dia", "Nunca ver o registo", "Desligar os alertas"], answer: 0, why: "A confiança ganha-se com bons resultados ao longo do tempo." },
      { objective: "O6", q: "Qual é um bom teste com dados estranhos?", options: ["Só mensagens perfeitas", "Uma mensagem com um campo vazio", "Nenhum teste", "O número do cartão de um cliente verdadeiro"], answer: 1, why: "Os dados estranhos mostram os pontos fracos." },
      { objective: "O6", q: "Se uma execução da automação falhar, ela deve:", options: ["Enviar uma mensagem a meio", "Parar e avisar você", "Apagar a sua folha de cálculo", "Tentar de novo para sempre, sem avisar"], answer: 1, why: "Isso é falhar com segurança." },
      { objective: "O6", q: "Na sua verificação semanal, você vê:", options: ["As execuções, as falhas, alguns rascunhos da IA e os minutos poupados", "Só o logótipo da ferramenta", "Nada", "As palavras-passe dos concorrentes"], answer: 0, why: "Isto mostra se a automação ainda funciona e se vale a pena." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 4, 6, 8, 9, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Mapa do fluxo de trabalho", objective: "O1", notYet: "Faltam passos ou não estão marcados.", meets: "Todos os passos do início ao fim, marcados como cópia, decisão ou escrita.", exceeds: "Anota quanto tempo cada passo leva hoje feito à mão." },
      { name: "Gatilho e ações", objective: "O2", notYet: "O gatilho ou as ações não estão claros.", meets: "Um gatilho claro e uma lista de ações, com o passo de IA e a aprovação marcados.", exceeds: "A correspondência de campos está escrita para cada informação." },
      { name: "Automação a funcionar", objective: "O3", notYet: "Não funciona, ou foi testada com dados de clientes verdadeiros.", meets: "O formulário para a folha de cálculo com aviso funciona, testado com dados inventados.", exceeds: "Anota os limites do plano gratuito vistos na página de preços da própria ferramenta." },
      { name: "Passo de IA e limites", objective: "O5", notYet: "A IA pode enviar a clientes ou fazer passos arriscados sem aprovação.", meets: "Os rascunhos da IA vão para o dono aprovar; lista de limites com cinco coisas que precisam de aprovação.", exceeds: "A instrução para a IA tem regras claras e os campos privados ficam fora do passo de IA." },
      { name: "Testes e acompanhamento", objective: "O6", notYet: "Menos de três testes, ou sem alerta de falha.", meets: "Três testes com dados estranhos, alertas de falha ligados e uma verificação semanal escrita.", exceeds: "A verificação semanal inclui os minutos poupados e uma regra para decidir quando a desligar." }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos cuja automação ainda funciona com segurança passados 30 dias (inquérito de seguimento)",
      "Minutos poupados por semana em cópias e respostas, segundo os donos",
      "Alunos que começam outro curso da Koach Learn para empreendedores em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com uma ferramenta de formulários gratuita, uma folha de cálculo e uma conta de email",
      "O plano gratuito de uma ferramenta sem código como o Zapier, o Make ou o Microsoft Power Automate",
      "Dados de teste inventados, por exemplo \"Test Customer\"",
      "Cerca de 75 minutos no total para as lições, criar, testar e escrever o registo de uma página"
    ],
    facilitatorNotes: [
      "Crie ao vivo uma automação de exemplo para todos antes de os alunos criarem a sua.",
      "Antes da sessão, veja os limites atuais dos planos gratuitos na página de preços de cada ferramenta.",
      "Não deixe os alunos ligarem contas bancárias nem enviarem nada a clientes verdadeiros durante o curso.",
      "Peça aos alunos para trocarem as listas de limites e procurarem alguma ação arriscada deixada sem aprovação.",
      "Avalie o registo de uma página com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
