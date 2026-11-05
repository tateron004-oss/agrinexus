"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-intro-ai-pt",
  lang: "pt",
  translationOf: "entrepreneurs-intro-ai",
  category: "Entrepreneurs",
  name: "Introdução à IA para Empreendedores",
  skills: "Identificar tarefas do negócio prontas para a IA, Escrever um pedido para o negócio, Melhorar um rascunho, Verificar dados e números, Proteger os dados do negócio e dos clientes",
  outcome: "escolher uma tarefa real do seu negócio, usar um assistente de IA gratuito para fazer um primeiro rascunho, melhorar e verificar o resultado, e deixar fora da conversa os dados dos clientes e do dinheiro.",
  about: [
    "Este curso é para quem está a começar ou a fazer crescer um pequeno negócio: uma carrinha de comida, um serviço de limpeza, um salão de beleza, uma loja na internet, um serviço de consultoria ou um negócio extra que quer fazer crescer.",
    "Você vai aprender o que os assistentes de IA podem fazer por um dono de negócio, como encontrar as tarefas da sua semana que a IA pode tornar mais rápidas, como escrever um pedido claro para o negócio, como melhorar e verificar o que a IA lhe dá e como proteger as informações dos seus clientes.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" com o seu próprio negócio. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escolha uma tarefa real do seu negócio (por exemplo uma tabela de preços, um email de boas-vindas para novos clientes ou uma publicação semanal nas redes sociais). Use um assistente de IA gratuito para fazer o rascunho com um pedido de três partes, peça duas melhorias, verifique você mesmo cada dado e cada número, tire quaisquer dados privados dos clientes ou do dinheiro e guarde a versão final pronta a usar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que estão a começar ou a fazer crescer um pequeno negócio, como uma carrinha de comida, um serviço de limpeza, um salão de beleza, uma loja na internet, um serviço de consultoria ou um negócio extra. A maioria faz sozinha todos os trabalhos do negócio.",
    startingPoint: "Fazem as tarefas do negócio à mão e usam um telefone ou um computador todos os dias. Muitos já ouviram falar de assistentes de IA mas nunca usaram um para o trabalho do negócio, ou já experimentaram um sem um método claro.",
    gap: "Os donos perdem horas todas as semanas com tarefas de escrita e de planeamento que um assistente de IA podia rascunhar em minutos. Usada sem cuidado, a IA pode pôr preços errados, afirmações falsas ou dados privados de clientes em nome do negócio. Os donos precisam de uma forma segura, que possam repetir, de rascunhar, melhorar e verificar os textos do negócio com a IA.",
    constraints: [
      "Palavras simples; não é preciso conhecimento técnico",
      "Aparelhos: um telefone ou um computador com um assistente de IA gratuito",
      "Tempo: cerca de cinco minutos por lição, encaixados no dia a dia do negócio",
      "A publicidade tem de dizer a verdade e ter provas; as perguntas sobre impostos e licenças vão para fontes oficiais ou para um profissional",
      "Nenhum número de cartão de clientes, dado bancário ou outro dado privado em nenhum pedido"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as suas próprias palavras", action: "explicar o que um assistente de IA pode e não pode fazer por um negócio", standard: "incluindo porque o dono verifica tudo antes de sair" },
    { id: "O2", condition: "Com uma lista de dez tarefas da sua semana", action: "separar as tarefas semanais do negócio em tarefas que a IA pode rascunhar, tarefas em que a IA o ajuda a pensar e tarefas que ficam para você", standard: "escolhendo uma primeira tarefa segura e útil para a IA" },
    { id: "O3", condition: "Com a tarefa que escolheu", action: "escrever um pedido para o negócio com uma tarefa, um contexto e um formato", standard: "para que o primeiro rascunho fique quase pronto a usar" },
    { id: "O4", condition: "Com um primeiro rascunho da IA", action: "fazer pedidos de seguimento, um de cada vez, e acrescentar os seus próprios dados verdadeiros", standard: "até soar como o seu negócio, em no máximo três pedidos de seguimento" },
    { id: "O5", condition: "Com um rascunho melhorado", action: "verificar cada dado, número e afirmação nos seus próprios registos ou numa fonte oficial", standard: "tirando qualquer afirmação que não consegue provar" },
    { id: "O6", condition: "Sempre que usa a IA para o negócio", action: "deixar fora dos pedidos os dados privados dos clientes e do dinheiro e reconhecer burlas de pagamento", standard: "usando marcadores e sem partilhar números de cartão, de banco ou de conta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que a IA pode fazer pelo seu negócio",
      lessons: [
        {
          title: "O que é a IA, em linguagem de negócio",
          objectives: ["O1"],
          minutes: 4,
          goal: "Explicar com as suas palavras o que um assistente de IA pode e não pode fazer por um negócio.",
          text: [
            "Um assistente de IA é um programa de computador a quem você escreve ou fala com palavras do dia a dia. Alguns gratuitos conhecidos são o ChatGPT, o Microsoft Copilot e o Google Gemini. Você pede alguma coisa e ele escreve um rascunho em segundos.",
            "Para um dono de negócio, pense nele como um ajudante rápido para primeiros rascunhos. É bom a escrever emails, publicações nas redes sociais e descrições de produtos, a transformar notas num plano, a resumir documentos longos, a dar ideias e nomes e a explicar palavras de negócio que você não conhece.",
            "Ele não é o seu contabilista, o seu advogado nem o seu cliente. Não conhece os seus preços, os seus clientes nem as regras do seu lugar, a não ser que você lhe diga, e pode estar errado mesmo quando parece seguro. O dono é você: você decide o que sai com o nome do seu negócio."
          ],
          words: [["Assistente de IA", "um programa de computador com quem conversa a escrever ou a falar, e que escreve respostas e rascunhos."], ["Primeiro rascunho", "uma primeira versão de alguma coisa, que você vai verificar e melhorar antes de usar."]],
          slides: [
            { title: "IA para o negócio = um ajudante rápido de rascunhos", bullets: ["Você pede com palavras do dia a dia", "Ele escreve um rascunho em segundos", "Opções gratuitas: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Bom a", bullets: ["Emails, publicações nas redes sociais, descrições de produtos", "Transformar notas em planos", "Resumos e ideias"] },
            { title: "Não é", bullets: ["O seu contabilista ou advogado", "Conhecedor dos seus preços ou clientes, a não ser que você diga", "Sempre certo, mesmo quando parece seguro"] }
          ],
          tryIt: "Escreva três coisas que fez para o seu negócio na semana passada que precisaram de escrever, planear ou explicar. Faça um círculo à volta da que lhe levou mais tempo.",
          youCanNow: "dizer o que um assistente de IA pode fazer por um negócio e porque você continua a verificar tudo antes de sair.",
          quickCheck: [
            { objective: "O1", q: "O que um assistente de IA precisa de você para escrever sobre o seu negócio?", options: ["Os seus preços, horários e dados verdadeiros", "Nada; ele já conhece o seu negócio", "A palavra-passe do seu banco", "Um plano pago"], answer: 0, why: "A IA não conhece o seu negócio a não ser que você lhe diga." },
            { objective: "O1", q: "A IA escreve um panfleto para o seu salão. O que faz antes de o imprimir?", options: ["Imprime logo", "Lê e verifica, porque sai com o seu nome", "Deixa a IA imprimir", "Envia primeiro aos clientes"], answer: 1, why: "O dono é responsável por tudo o que leva o nome do negócio." }
          ]
        },
        {
          title: "Encontrar as tarefas que a IA pode tornar mais rápidas",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fazer a lista das tarefas da sua semana que são boas para a IA e das que não são.",
          text: [
            "As melhores primeiras tarefas para a IA são as que você repete, que são feitas de palavras e em que um erro é fácil de apanhar antes de alguém o ver. Exemplos: responder a perguntas comuns dos clientes, escrever uma publicação semanal, rascunhar um panfleto, fazer uma lista de verificação para um novo ajudante ou resumir um email longo de um fornecedor.",
            "Tarefas que NÃO são boas para deixar só com a IA: tudo o que envia dinheiro, assina um contrato, define uma posição legal ou de impostos, ou faz uma promessa a um cliente sem você ler primeiro. A IA pode ajudar a preparar, mas a decisão final é sua.",
            "Uma forma simples de separar: escreva cada tarefa numa linha e marque-a com \"A IA rascunha, eu verifico\", \"A IA ajuda-me a pensar\" ou \"Faço eu mesmo\"."
          ],
          steps: ["Faça a lista de dez tarefas que fez nas últimas duas semanas.", "Marque cada uma: A IA rascunha / A IA ajuda-me a pensar / Faço eu mesmo.", "Escolha a tarefa \"A IA rascunha\" que lhe leva mais tempo.", "Essa é a sua primeira tarefa com IA."],
          words: [["Tarefa repetida", "um trabalho que faz uma e outra vez, como responder à mesma pergunta de um cliente."]],
          slides: [
            { title: "Boas primeiras tarefas para a IA", bullets: ["Você repete-as", "São quase só palavras", "Os erros são fáceis de apanhar antes de alguém ver"] },
            { title: "Exemplos", bullets: ["Respostas a perguntas comuns dos clientes", "Publicação semanal nas redes sociais ou panfleto", "Lista de verificação para um novo ajudante"] },
            { title: "Fica para você", bullets: ["Enviar dinheiro", "Assinar contratos, escolhas de impostos e legais", "Promessas a clientes que você não leu"] },
            { title: "Separe as suas tarefas", bullets: ["A IA rascunha, eu verifico", "A IA ajuda-me a pensar", "Faço eu mesmo"] }
          ],
          tryIt: "Faça a sua lista de dez tarefas e separe-as nos três grupos. Escolha a tarefa \"A IA rascunha, eu verifico\" que vai usar no resto deste curso.",
          youCanNow: "separar as tarefas do seu negócio e escolher uma primeira tarefa segura e útil para a IA.",
          quickCheck: [
            { objective: "O2", q: "O que faz de uma tarefa uma boa primeira tarefa para a IA?", options: ["Movimenta dinheiro", "Precisa de uma assinatura", "Repete-se, é quase só palavras e é fácil de verificar", "Tem dados privados de clientes"], answer: 2, why: "Tarefas de escrita repetidas e fáceis de verificar são ganhos seguros." },
            { objective: "O2", q: "Uma tarefa da sua lista é aprovar um pagamento a um fornecedor. Como a separa?", options: ["A IA rascunha, eu verifico", "A IA faz sozinha", "A IA ajuda-me a pensar", "Fica para mim"], answer: 3, why: "As decisões de dinheiro ficam com o dono." }
          ]
        },
        {
          title: "Escrever um pedido claro para o negócio",
          objectives: ["O3"],
          minutes: 5,
          goal: "Escrever um pedido de três partes para o negócio que dê um rascunho útil à primeira.",
          text: [
            "O que você escreve a um assistente de IA chama-se pedido (em inglês, \"prompt\"). Um pedido para o negócio funciona melhor com três partes: a tarefa, o contexto do negócio e o formato que quer.",
            "Exemplo: \"Escreva um email curto de boas-vindas para os novos clientes do meu serviço de limpeza de casas em Atlanta. Limpamos as casas de duas em duas semanas, e os clientes podem enviar-nos uma SMS para mudar a data. Faça-o simpático, com menos de 120 palavras e com um assunto claro.\"",
            "Um pedido fraco como \"escreva um email\" obriga o assistente a adivinhar. Ele não conhece o seu negócio, o seu cliente nem o seu tom, por isso o rascunho fica geral. Nunca ponha no pedido nomes de clientes, números de telefone, números de cartão ou palavras-passe; pode acrescentá-los você mesmo depois."
          ],
          steps: ["Tarefa: diga exatamente o que quer escrito ou planeado.", "Contexto: o que vende, quem é o cliente, onde está, o seu tom.", "Formato: tamanho, lista ou parágrafos, assunto, nível de leitura.", "Leia o pedido à procura de dados privados e tire-os antes de o enviar."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."], ["Contexto", "os factos de fundo de que a IA precisa, como o que você vende e a quem vende."]],
          slides: [
            { title: "Três partes de um pedido para o negócio", bullets: ["1. Tarefa: o que você quer", "2. Contexto: o seu negócio e o seu cliente", "3. Formato: tamanho, estilo, apresentação"] },
            { title: "Fraco e claro", bullets: ["Fraco: \"escreva um email\"", "Claro: email de boas-vindas, serviço de limpeza, Atlanta,", "simpático, menos de 120 palavras, com um assunto"] },
            { title: "Deixe fora do pedido", bullets: ["Nomes e números de telefone dos clientes", "Números de cartão e de banco", "Palavras-passe"] }
          ],
          tryIt: "Escreva um pedido de três partes para a tarefa que escolheu na Lição 2. Envie-o a um assistente de IA gratuito e guarde o primeiro rascunho.",
          youCanNow: "escrever um pedido para o negócio com uma tarefa, um contexto e um formato, e deixar de fora os dados privados.",
          quickCheck: [
            { objective: "O3", q: "Que parte de um pedido para o negócio é o formato?", options: ["\"Menos de 100 palavras, com um assunto\"", "\"Escreva um email de boas-vindas\"", "\"Somos uma loja de banhos e tosquias para animais em Phoenix\"", "\"Obrigado pela ajuda\""], answer: 0, why: "O formato diz como quer a resposta: tamanho, apresentação ou estilo." },
            { objective: "O3", q: "O seu pedido diz só \"escreva uma publicação\". O que acrescenta?", options: ["Mais nada", "O seu negócio, os seus clientes, e o tamanho e o estilo que quer", "A sua lista de clientes", "O saldo da sua conta bancária"], answer: 1, why: "O contexto e o formato transformam um pedido vago num rascunho útil." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que a IA pode fazer pelo seu negócio",
        questions: [
          { objective: "O1", q: "Qual é a melhor forma de pensar num assistente de IA no seu negócio?", options: ["O seu contabilista", "Algo que substitui o seu julgamento", "Um ajudante rápido de primeiros rascunhos que você verifica", "Um cliente"], answer: 2, why: "A IA rascunha depressa, mas é você que verifica e decide o que sai." },
          { objective: "O2", q: "Que tarefa é uma boa primeira tarefa para dar a um assistente de IA?", options: ["Rascunhar uma publicação semanal nas redes sociais que vai ler primeiro", "Pagar a um fornecedor", "Assinar um contrato de arrendamento", "Escolher a sua situação para a declaração de impostos"], answer: 0, why: "Repete-se, é quase só palavras e os erros são fáceis de apanhar antes de alguém ver." },
          { objective: "O3", q: "Qual é um pedido de três partes para o negócio?", options: ["\"escreva um email\"", "\"ajude-me\"", "\"coisas do negócio\"", "\"Email de boas-vindas para novos clientes de limpeza em Atlanta; limpamos de duas em duas semanas; simpático, menos de 120 palavras, com um assunto.\""], answer: 3, why: "Dá a tarefa, o contexto do negócio e o formato." },
          { objective: "O6", q: "O que deve deixar fora de um pedido?", options: ["O seu tipo de negócio", "O número do cartão de um cliente", "O tom que quer", "O tamanho que quer"], answer: 1, why: "Números de cartão e outros dados privados nunca devem entrar numa conversa com IA." },
          { objective: "O1", q: "Um rascunho da IA tem o nome do seu negócio. Quem é responsável por ele?", options: ["A empresa da IA", "Você, o dono", "Ninguém", "O cliente"], answer: 1, why: "Você decide o que sai com o nome do seu negócio." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a IA com segurança e bem",
      lessons: [
        {
          title: "Melhorar o rascunho com pedidos de seguimento",
          objectives: ["O4"],
          minutes: 4,
          goal: "Transformar um primeiro rascunho numa versão que usaria de verdade, com pedidos de seguimento.",
          text: [
            "A primeira resposta é um rascunho. O assistente lembra-se das mensagens anteriores na mesma conversa, por isso pode pedir-lhe para mudar uma coisa de cada vez.",
            "Pedidos de seguimento úteis para textos do negócio: \"Faça soar mais como um pequeno negócio do bairro.\" \"Corte para 80 palavras.\" \"Acrescente um próximo passo claro para o cliente.\" \"Dê-me três assuntos para escolher.\" \"Escreva num nível de leitura fácil.\"",
            "Acrescente os dados que só você conhece: os seus horários verdadeiros, os preços verdadeiros e as regras verdadeiras. Depois leia em voz alta. Se não soar como você, peça uma mudança ou corrija você mesmo."
          ],
          steps: ["Leia o primeiro rascunho.", "Escolha a coisa que mais quer mudar.", "Peça essa mudança.", "Acrescente os seus dados verdadeiros.", "Leia em voz alta e repita se for preciso."],
          words: [["Pedido de seguimento", "um segundo pedido na mesma conversa que muda a resposta ou parte dela."], ["Chamada à ação", "o próximo passo claro que quer que o cliente dê, como \"Envie-nos uma SMS para marcar\"."]],
          slides: [
            { title: "A primeira resposta é um rascunho", bullets: ["Peça uma mudança de cada vez", "A conversa lembra-se do que você disse"] },
            { title: "Pedidos de seguimento para o negócio", bullets: ["\"Faça soar mais como um pequeno negócio do bairro.\"", "\"Corte para 80 palavras.\"", "\"Acrescente um próximo passo claro para o cliente.\""] },
            { title: "Faça-o seu", bullets: ["Acrescente os seus horários, preços e regras verdadeiros", "Leia em voz alta", "Corrija até soar como você"] }
          ],
          tryIt: "Pegue no seu rascunho da Lição 3. Peça duas mudanças, uma de cada vez, e depois acrescente os seus próprios dados verdadeiros. Compare a primeira versão e a versão final.",
          youCanNow: "melhorar um rascunho da IA com pedidos de seguimento e fazê-lo soar como o seu negócio.",
          quickCheck: [
            { objective: "O4", q: "O que é um pedido de seguimento?", options: ["Uma conversa nova sobre outra coisa", "Um lembrete de pagamento", "Um segundo pedido na mesma conversa que muda a resposta", "Uma opinião de um cliente"], answer: 2, why: "Os pedidos de seguimento melhoram o rascunho que já tem." },
            { objective: "O4", q: "O rascunho está bom mas é longo demais. O que pede a seguir?", options: ["Começar de novo numa conversa nova", "Pedir mais cinco versões ao mesmo tempo", "Aceitar como está", "\"Faça mais curto, com menos de 80 palavras\""], answer: 3, why: "Uma mudança clara de cada vez melhora o rascunho." }
          ]
        },
        {
          title: "Verificar dados, números e afirmações",
          objectives: ["O5"],
          minutes: 5,
          goal: "Verificar um rascunho da IA à procura de dados errados, números errados e promessas que não pode cumprir.",
          text: [
            "A IA pode inventar coisas: um preço que você nunca definiu, uma regra que não existe, um total errado ou uma afirmação como \"o melhor da cidade\" que você não consegue provar. A isto às vezes chama-se \"alucinação\".",
            "Antes de qualquer coisa chegar a um cliente, verifique três coisas. Dados: horários, preços, moradas, regras. Números: os totais e as percentagens batem certo? Faça as contas você mesmo ou numa folha de cálculo. Afirmações: consegue provar? Nos Estados Unidos, a FTC diz que a publicidade tem de dizer a verdade, não enganar e ter provas.",
            "Para perguntas sobre impostos, lei, licenças ou dinheiro, use a IA só para perceber as palavras e depois confirme na fonte oficial (muitas vezes um site .gov) ou com um profissional, como um contabilista ou um advogado."
          ],
          steps: ["Marque cada dado, número e afirmação no rascunho.", "Verifique os dados nos seus próprios registos.", "Refaça você mesmo todas as contas.", "Tire ou suavize qualquer afirmação que não consegue provar.", "Confirme os pontos de impostos, lei ou licenças numa fonte oficial ou com um profissional."],
          words: [["Alucinação", "quando a IA escreve algo que parece verdade mas é inventado."], ["Afirmação", "algo que o seu negócio diz que é verdade, como \"serviço no mesmo dia\"."], ["FTC", "a Federal Trade Commission (Comissão Federal de Comércio), o serviço dos Estados Unidos que faz cumprir as regras sobre publicidade verdadeira."]],
          slides: [
            { title: "A IA pode inventar coisas", bullets: ["Preços que você nunca definiu", "Regras que não existem", "Totais errados"] },
            { title: "Verifique três coisas", bullets: ["Dados: horários, preços, regras", "Números: refaça as contas", "Afirmações: consegue provar?"] },
            { title: "Publicidade verdadeira", bullets: ["FTC: a publicidade tem de dizer a verdade e não enganar", "As afirmações precisam de provas"] },
            { title: "Impostos, lei, licenças", bullets: ["Use a IA para perceber as palavras", "Confirme no site oficial .gov", "Ou pergunte a um contabilista ou advogado"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (o básico da publicidade e do marketing)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Marque cada dado, número e afirmação no seu rascunho melhorado. Verifique cada um, corrija o que está errado e tire qualquer afirmação que não consegue provar.",
          youCanNow: "verificar um rascunho da IA à procura de dados errados, números errados e afirmações que não consegue provar.",
          quickCheck: [
            { objective: "O5", q: "O que é uma alucinação da IA?", options: ["Algo que parece verdade mas é inventado", "Um tipo de anúncio", "Uma ligação à internet lenta", "Uma queixa de um cliente"], answer: 0, why: "A IA pode escrever dados inventados que parecem seguros." },
            { objective: "O5", q: "O rascunho diz \"o número 1 da cidade\". Você não tem provas. O que faz?", options: ["Deixa ficar; soa bem", "Tira ou muda para algo verdadeiro", "Acrescenta \"talvez\"", "Pergunta à IA se é verdade"], answer: 1, why: "As afirmações na publicidade têm de dizer a verdade e ter provas." }
          ]
        },
        {
          title: "Proteger as informações dos clientes e do negócio",
          objectives: ["O6"],
          minutes: 5,
          goal: "Usar a IA nas tarefas do negócio sem partilhar dados privados dos clientes ou do dinheiro.",
          text: [
            "O que você escreve numa conversa com IA pode ficar guardado pela empresa que a gere e, em alguns planos gratuitos, pode ser usado para melhorar a IA dela. Leia as definições de privacidade da ferramenta e parta do princípio de que outra pessoa pode ver tudo o que escreve.",
            "Nunca escreva numa conversa com IA: nomes de clientes com números de telefone ou moradas, números de cartão ou de banco, palavras-passe, números da Segurança Social (Social Security) ou de contribuinte, ou dados privados de saúde. Use marcadores como \"[nome do cliente]\" e preencha-os você mesmo depois.",
            "Tenha também cuidado com burlas feitas com IA contra negócios: faturas falsas, emails que copiam o estilo de um fornecedor e chamadas com uma voz que parece de alguém que conhece a pedir um pagamento urgente. Antes de pagar, ligue de volta para um número que já sabe que é verdadeiro."
          ],
          steps: ["Antes de enviar um pedido, leia-o à procura de dados privados.", "Troque-os por marcadores como \"[nome do cliente]\".", "Verifique as definições de privacidade ou de dados da ferramenta.", "Confirme qualquer pedido de pagamento urgente ligando para um número que já conhece."],
          words: [["Marcador", "algo que fica no lugar, como \"[nome do cliente]\", e que depois troca pelo dado verdadeiro, fora da conversa com a IA."], ["Burla da fatura", "uma conta falsa feita para parecer que vem de um fornecedor verdadeiro."]],
          slides: [
            { title: "Parta do princípio de que pode ser visto", bullets: ["As conversas podem ficar guardadas", "Os planos gratuitos podem usar as conversas para melhorar a IA", "Verifique as definições de privacidade"] },
            { title: "Nunca escreva na IA", bullets: ["Números de telefone e moradas de clientes", "Números de cartão, de banco e de contribuinte", "Palavras-passe e dados de saúde"] },
            { title: "Use marcadores", bullets: ["\"[nome do cliente]\", \"[total da encomenda]\"", "Preencha você mesmo os dados verdadeiros depois"] },
            { title: "Burlas contra negócios", bullets: ["Faturas falsas que parecem verdadeiras", "Chamadas urgentes de pagamento com uma voz conhecida", "Ligue de volta para um número que conhece"] }
          ],
          tryIt: "Tarefa final: termine a tarefa do negócio que escolheu. Confirme que o pedido e a versão final não têm dados privados dos clientes nem do dinheiro, verifique cada dado, número e afirmação, e guarde-a pronta a usar.",
          youCanNow: "usar a IA numa tarefa real do negócio protegendo os seus clientes, o seu dinheiro e o seu nome.",
          quickCheck: [
            { objective: "O6", q: "O que é um marcador num pedido?", options: ["O número de telefone verdadeiro de um cliente", "Uma palavra-passe", "Uma etiqueta como [nome do cliente] no lugar dos dados verdadeiros", "Uma página em branco"], answer: 2, why: "Os marcadores deixam você ter ajuda sem partilhar dados privados." },
            { objective: "O6", q: "Uma mensagem do seu \"banco\" pede-lhe para confirmar o número da sua conta respondendo à mensagem. O que faz?", options: ["Responde com o número", "Pede à IA para responder por você", "Reencaminha para os clientes", "Contacta o banco por um número que já conhece"], answer: 3, why: "Use um contacto em que já confia, nunca o de uma mensagem urgente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a IA com segurança e bem",
        questions: [
          { objective: "O4", q: "O rascunho da IA soa formal demais para a sua pequena loja. O que faz?", options: ["Usa na mesma", "Apaga a aplicação de IA", "Envia a um advogado", "Pede: \"Faça soar mais como um pequeno negócio do bairro.\""], answer: 3, why: "Um pedido de seguimento pede ao assistente para mudar o tom." },
          { objective: "O5", q: "Um rascunho da IA diz \"aberto até às 21h\", mas você fecha às 19h. O que isto mostra?", options: ["A IA pode inventar dados, por isso você verifica-os", "A IA está sempre certa", "O seu horário está errado", "O cliente não vai reparar"], answer: 0, why: "A IA pode inventar dados; você verifica-os nos seus próprios registos." },
          { objective: "O5", q: "O rascunho diz \"o mais barato do estado\". Você não comparou preços. O que deve fazer?", options: ["Deixar ficar, soa bem", "Pôr em letras maiores", "Tirar ou mudar para algo que consegue provar", "Acrescentar \"garantido\""], answer: 2, why: "A publicidade tem de dizer a verdade e ter provas." },
          { objective: "O6", q: "Como deve pôr o nome de um cliente num pedido à IA?", options: ["Escrever o nome completo e o número de telefone", "Escrever também o número do cartão dele", "Pedir ao cliente a palavra-passe dele", "Usar um marcador como \"[nome do cliente]\""], answer: 3, why: "Os marcadores deixam os dados privados fora da conversa." },
          { objective: "O6", q: "Recebe uma chamada urgente com a voz do seu fornecedor a pedir para pagar hoje para uma conta nova. O que faz?", options: ["Paga logo", "Envia os dados de acesso ao seu banco", "Liga de volta ao fornecedor para um número que já conhece", "Responde com o código do seu telefone"], answer: 2, why: "As vozes podem ser copiadas pela IA; confirme por um número conhecido antes de pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à IA para Empreendedores",
    questions: [
      { objective: "O1", q: "No seu negócio, um assistente de IA é melhor usado como:", options: ["O seu advogado", "Um ajudante rápido de primeiros rascunhos", "O seu banco", "Quem toma a decisão final"], answer: 1, why: "Ele rascunha; você verifica e decide." },
      { objective: "O1", q: "Qual é um assistente de IA gratuito e conhecido?", options: ["Google Gemini", "Uma caixa registadora", "Uma impressora", "Uma célula de uma folha de cálculo"], answer: 0, why: "O Gemini, o ChatGPT e o Copilot são assistentes de IA conhecidos." },
      { objective: "O1", q: "Qual destas coisas um assistente de IA NÃO sabe a não ser que você lhe diga?", options: ["O que é um plano de negócios", "Como escrever uma lista", "Os seus preços verdadeiros", "Palavras comuns de negócio"], answer: 2, why: "Ele não conhece os seus preços, clientes ou regras a não ser que você os dê." },
      { objective: "O2", q: "Boas primeiras tarefas para a IA são as que:", options: ["Se repetem, são quase só palavras e são fáceis de verificar", "Enviam dinheiro", "Assinam contratos", "Definem a sua posição nos impostos"], answer: 0, why: "Têm pouco risco e poupam tempo." },
      { objective: "O2", q: "Que tarefa deve ficar para você?", options: ["Dar ideias de nomes para a loja", "Rascunhar um panfleto", "Fazer uma lista de verificação", "Aprovar um pagamento a um fornecedor"], answer: 3, why: "As decisões de dinheiro ficam com você." },
      { objective: "O2", q: "Ao separar as tarefas, \"A IA ajuda-me a pensar\" quer dizer:", options: ["A IA toma a decisão", "Usa a IA para dar ideias ou explicar, e depois decide você mesmo", "Nunca usa a IA", "A IA envia por você"], answer: 1, why: "A IA apoia o seu pensamento; quem decide é você." },
      { objective: "O3", q: "As três partes de um pedido para o negócio são:", options: ["Nome, palavra-passe, morada", "Tarefa, contexto, formato", "Olá, por favor, obrigado", "Preço, imposto, total"], answer: 1, why: "A tarefa, o contexto e o formato dão à IA o que ela precisa." },
      { objective: "O3", q: "Qual é contexto do negócio?", options: ["\"Menos de 100 palavras\"", "\"Escreva um email\"", "\"Obrigado\"", "\"Somos uma lavagem de carros ao domicílio em Dallas para pais com pouco tempo\""], answer: 3, why: "O contexto explica o seu negócio e o seu cliente." },
      { objective: "O3", q: "Qual é uma instrução de formato?", options: ["\"Dê-me uma lista de 5 tópicos curtos\"", "\"Vendemos bolos\"", "\"Os nossos clientes são estudantes\"", "\"Estamos em Lagos\""], answer: 0, why: "O formato diz como a resposta deve ficar." },
      { objective: "O4", q: "Um pedido de seguimento é:", options: ["Uma aplicação nova", "Uma opinião de um cliente", "Um segundo pedido na mesma conversa que muda a resposta", "Um tipo de fatura"], answer: 2, why: "Os pedidos de seguimento melhoram o rascunho passo a passo." },
      { objective: "O4", q: "Que pedido de seguimento acrescenta uma chamada à ação?", options: ["\"Faça mais comprido sem razão.\"", "\"Tire todos os detalhes.\"", "\"Acrescente a minha palavra-passe.\"", "\"Acrescente um próximo passo claro, como Envie-nos uma SMS para marcar.\""], answer: 3, why: "Uma chamada à ação diz ao cliente o que fazer a seguir." },
      { objective: "O4", q: "Porque ler um rascunho em voz alta?", options: ["Para a IA ficar mais rápida", "Para poupar bateria", "Para verificar se soa como você", "Porque a lei obriga"], answer: 2, why: "Ouvir ajuda a apanhar o tom e os erros." },
      { objective: "O5", q: "Uma \"alucinação\" da IA é:", options: ["Uma resposta lenta", "Algo que parece verdade mas é inventado", "Um tipo de logótipo", "Uma queixa de um cliente"], answer: 1, why: "A IA pode inventar dados que parecem verdadeiros." },
      { objective: "O5", q: "A IA soma mal a sua tabela de preços. Qual é a lição?", options: ["Refazer as contas você mesmo ou numa folha de cálculo", "Confiar nas contas da IA", "Subir os seus preços", "Deixar de vender"], answer: 0, why: "Verifique sempre os números antes de os usar." },
      { objective: "O5", q: "Segundo a FTC, as afirmações na publicidade têm de ser:", options: ["Engraçadas", "Escritas pela IA", "Verdadeiras, não enganosas e com provas", "Curtas"], answer: 2, why: "As regras da FTC sobre publicidade verdadeira exigem isto." },
      { objective: "O5", q: "Para uma pergunta sobre impostos ou licenças, a IA é melhor usada para:", options: ["Perceber as palavras antes de verificar na fonte oficial ou com um profissional", "Tomar a decisão final", "Entregar a declaração por você", "Substituir o seu contabilista"], answer: 0, why: "Confirme os pontos de impostos e de lei em fontes oficiais ou com profissionais." },
      { objective: "O6", q: "O que NUNCA deve entrar numa conversa com IA?", options: ["\"Faça mais simpático\"", "O seu tipo de negócio", "O tom que quer", "O número do cartão de um cliente"], answer: 3, why: "Os números de cartão são dados privados de dinheiro." },
      { objective: "O6", q: "Um marcador como \"[nome do cliente]\" deixa você:", options: ["Esconder os preços dos clientes", "Ter ajuda sem partilhar dados privados", "Saltar a verificação", "Pagar mais depressa"], answer: 1, why: "Você preenche o dado verdadeiro depois." },
      { objective: "O6", q: "Em alguns planos gratuitos de IA, as suas conversas podem:", options: ["Desaparecer antes de as ler", "Ficar guardadas e ser usadas para melhorar a IA", "Ser enviadas aos seus clientes", "Ser impressas"], answer: 1, why: "É por isso que verifica as definições de privacidade e deixa os dados privados de fora." },
      { objective: "O6", q: "Um email que parece do seu fornecedor pede para pagar com urgência para uma conta bancária nova. Melhor passo?", options: ["Pagar já", "Responder com os dados de acesso ao seu banco", "Reencaminhar para todos os clientes", "Ligar ao fornecedor para um número que já conhece"], answer: 3, why: "As faturas falsas são comuns; confirme por um número conhecido." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pedido para o negócio", objective: "O3", notYet: "O pedido é vago, por exemplo \"escreva um email\".", meets: "O pedido tem uma tarefa, contexto sobre o negócio e um formato.", exceeds: "Também diz quem é o cliente e qual é o objetivo, e o primeiro rascunho está quase pronto." },
      { name: "Rascunho melhorado", objective: "O4", notYet: "O primeiro rascunho foi usado como estava.", meets: "Duas mudanças feitas com pedidos de seguimento, uma de cada vez, mais os dados do próprio dono.", exceeds: "Sabe dizer o que cada mudança corrigiu, e a versão final soa como o negócio." },
      { name: "Dados e afirmações verificados", objective: "O5", notYet: "Um preço, um horário, um total ou uma afirmação foi copiado sem verificar.", meets: "Cada dado e cada número verificados; cada afirmação é verdadeira e pode ser provada.", exceeds: "Anota onde verificou cada dado, e as contas foram refeitas numa folha de cálculo." },
      { name: "Dados privados de fora", objective: "O6", notYet: "O pedido ou a versão final tem dados de cartão, de banco ou dados privados de clientes.", meets: "Nenhum dado privado de clientes ou de dinheiro; marcadores usados onde era preciso.", exceeds: "Também verificou a definição de privacidade da ferramenta de IA sobre guardar as conversas." },
      { name: "Pronto a usar", objective: "O1", notYet: "A versão final não está terminada ou não foi guardada.", meets: "Guardada, verificada e pronta a usar para a tarefa escolhida.", exceeds: "Guardada como modelo que o dono pode voltar a usar da próxima vez." }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que usam um rascunho da IA para uma tarefa real do negócio em 30 dias (inquérito de seguimento)",
      "Donos que dizem poupar horas todas as semanas em escrita e planeamento",
      "Alunos que começam outro curso da Koach Learn para empreendedores em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini",
      "Os seus preços, horários e dados do negócio verdadeiros, para verificar",
      "Cerca de 60 minutos no total para as lições, a prática, as verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Numa oficina, peça a cada dono para trazer uma tarefa real e trabalhar nela ao longo das seis lições.",
      "Lembre aos donos que nunca colem números de cartão, dados bancários ou listas de clientes numa conversa com IA.",
      "Ponha os donos em pares para lerem os rascunhos um do outro em voz alta e encontrarem afirmações que precisam de provas.",
      "Encaminhe as perguntas sobre impostos e licenças para fontes oficiais ou para um profissional, não para a IA.",
      "Avalie a tarefa final com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
