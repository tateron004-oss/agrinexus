"use strict";

// Koach Learn course (Portuguese translation of shared/ai-chatbots-no-code.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-chatbots-no-code-pt",
  lang: "pt",
  translationOf: "ai-chatbots-no-code",
  category: "Small Business",
  name: "Criar Chatbots com IA (Sem Programação)",
  skills: "Escolher a tarefa de um chatbot, Escrever as instruções do chatbot, Criar um ficheiro de conhecimento, Definir regras de segurança, Testar com perguntas reais, Lançar e melhorar",
  outcome: "criar, sem programação, um chatbot de IA que responde às perguntas comuns de uma empresa, associação ou clube a partir das suas próprias informações, com instruções claras e regras de segurança, testado com perguntas reais antes de alguém o usar.",
  about: [
    "Um chatbot responde a perguntas numa janela de conversa, a qualquer hora do dia. Com as ferramentas de IA de hoje, pode criar um sem escrever código: dá-lhe instruções e as suas próprias informações, e ele responde com palavras simples.",
    "Este curso é para donos de pequenas empresas, funcionários e voluntários de associações sem fins lucrativos, e jovens que querem um projeto real. Por exemplo: uma padaria a responder \"Estão abertos no domingo?\", um banco alimentar a explicar o que trazer, e um clube da escola a responder a perguntas sobre as seleções.",
    "Você vai planear a tarefa do chatbot, escrever as instruções, dar-lhe um ficheiro de conhecimento, juntar regras de segurança, testá-lo e lançá-lo. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Crie um chatbot sem programação que funcione, para uma organização real ou de prática: uma tarefa numa frase, instruções escritas com um tom e regras de segurança, um ficheiro de conhecimento de uma página com os dados, e um registo de testes com pelo menos dez perguntas reais e as correções que fez. Partilhe-o com uma pessoa e escreva a opinião dela.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenas empresas, os seus funcionários, e pessoas que dirigem associações sem fins lucrativos, igrejas ou clubes, que respondem sempre às mesmas perguntas por telefone, SMS, e-mail e redes sociais.",
    startingPoint: "Sabem usar um telefone ou computador, o e-mail e as redes sociais, e talvez já tenham experimentado um assistente de IA. Não têm experiência de programação, e a maioria nunca configurou um chatbot.",
    gap: "Responder a perguntas repetidas leva horas todas as semanas, e os clientes esperam respostas a qualquer hora. Os alunos precisam de criar um chatbot limitado e honesto a partir dos seus próprios dados, com regras de segurança e testes, para poupar tempo sem dar respostas erradas ou perigosas que façam perder a confiança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; sem código",
      "Aparelhos: um computador é mais fácil; algumas ferramentas funcionam no telefone",
      "Custo e funções: as funções e os planos das ferramentas de chatbot mudam; os alunos verificam a página de ajuda da ferramenta",
      "Privacidade: nenhum nome de cliente, número de telefone, dado de doador, palavra-passe ou dado bancário em nenhum ficheiro",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total, mais o tempo dos testes"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as perguntas que a sua organização já recebe", action: "escrever numa frase a tarefa de um chatbot e fazer a lista das dez perguntas a que ele tem de responder", standard: "sem perguntas perigosas sobre saúde, lei ou dinheiro na lista" },
    { id: "O2", condition: "Usando uma ferramenta de chatbot sem programação", action: "escrever instruções que definem o papel, o público, a tarefa, o tom e os limites do chatbot", standard: "com as cinco partes e uma linha sobre o que fazer quando ele não sabe" },
    { id: "O3", condition: "Com os dados da sua organização", action: "criar um ficheiro de conhecimento de uma página, com data, em forma de pergunta e resposta, e juntá-lo ao chatbot", standard: "sem nenhuma informação privada" },
    { id: "O4", condition: "Para um chatbot que o público vai usar", action: "escrever regras de segurança que o mantêm no tema, honesto e seguro", standard: "incluindo nenhum número privado, nenhum conselho profissional, dizer que é uma IA e enviar as emergências para o 911" },
    { id: "O5", condition: "Antes de alguém usar o chatbot", action: "testá-lo com pelo menos dez perguntas reais e difíceis, registar os resultados e corrigir as falhas", standard: "voltando a testar cada pergunta que falhou até passar" },
    { id: "O6", condition: "Quando o chatbot estiver pronto", action: "partilhá-lo com algumas pessoas, recolher opiniões e criar uma rotina de atualização", standard: "com uma pessoa sempre contactável para o que ele não consegue resolver" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear e criar o chatbot",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que um chatbot de IA pode fazer, e escolher a sua única tarefa",
          minutes: 4,
          goal: "Escrever numa frase a tarefa de um chatbot e fazer a lista das perguntas a que ele tem de responder.",
          text: [
            "Um chatbot de IA é um assistente de IA preparado para um só objetivo. Em vez de responder a tudo, responde a perguntas sobre a sua organização, usando as informações que você lhe dá.",
            "Boas primeiras tarefas são limitadas e repetidas: horário e localização, preços, como se inscrever, o que trazer, regras de devolução, turnos de voluntários. Más primeiras tarefas são as perigosas: conselhos de saúde, de lei ou de dinheiro, ou tudo o que precisa do juízo de uma pessoa.",
            "Comece pelas perguntas que as pessoas já fazem. Veja os seus e-mails, mensagens, chamadas e comentários nas redes sociais. As dez perguntas mais comuns passam a ser a tarefa do chatbot."
          ],
          steps: ["Escreva as dez perguntas que as pessoas lhe fazem mais.", "Risque as que precisam do juízo de uma pessoa ou que são perigosas.", "Escreva a tarefa do chatbot numa frase: \"Este chatbot responde a perguntas sobre [tema] para [quem].\""],
          words: [["Chatbot", "um programa que responde a perguntas numa janela de conversa."], ["Caso de uso", "a tarefa concreta para que se usa uma ferramenta."]],
          slides: [
            { title: "Um chatbot é um assistente focado", bullets: ["Preparado para um só objetivo", "Responde a partir das suas próprias informações"] },
            { title: "Boas primeiras tarefas", bullets: ["Horário, localização, preços", "Como se inscrever ou o que trazer", "Turnos de voluntários, regras de devolução"] },
            { title: "Deixe para as pessoas", bullets: ["Conselhos de saúde, de lei ou de dinheiro", "Queixas e decisões que pedem juízo"] },
            { title: "Comece pelas perguntas reais", bullets: ["E-mails, chamadas, mensagens, comentários", "As dez perguntas principais = a tarefa"] }
          ],
          tryIt: "Escolha uma empresa, associação ou clube (seu ou de prática). Escreva as suas dez perguntas mais comuns e a tarefa do chatbot numa frase.",
          youCanNow: "escolher uma tarefa segura e limitada para um chatbot e fazer a lista das perguntas a que ele tem de responder.",
          quickCheck: [
            { objective: "O1", q: "O que faz uma boa primeira tarefa para o chatbot de uma empresa?", options: ["Dar conselhos legais", "Decidir reembolsos caso a caso", "Responder a perguntas limitadas e repetidas, como o horário e a inscrição", "Responder a qualquer pergunta do mundo"], answer: 2, why: "Perguntas limitadas e repetidas têm pouco risco e poupam mais tempo." },
            { objective: "O1", q: "A sua barbearia recebe muitas perguntas. Qual risca da lista do chatbot?", options: ["\"Esta irritação no meu couro cabeludo é grave?\"", "\"Qual é o vosso horário ao sábado?\"", "\"Como marco uma hora?\"", "\"Onde se estaciona?\""], answer: 0, why: "Perguntas de saúde precisam do juízo de um profissional, por isso não são tarefa de um chatbot." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever as instruções do chatbot",
          minutes: 5,
          goal: "Escrever instruções claras que definem o papel, o tom e os limites do chatbot.",
          text: [
            "As ferramentas de chatbot sem programação deixam-no escrever instruções que a IA segue em todas as conversas. Por exemplo: os GPTs personalizados no ChatGPT, os Gems no Google Gemini e os agentes no Microsoft Copilot Studio. Os nomes das funções, os menus e os planos que as incluem mudam muitas vezes, por isso veja a página de ajuda da ferramenta para os passos atuais.",
            "Boas instruções tratam de cinco coisas: quem o chatbot é (\"Você é o assistente de ajuda do Banco Alimentar Sunrise\"), com quem fala, a que responde, como soa (simpático, curto, palavras simples) e o que não pode fazer.",
            "Escreva as instruções em frases curtas e diretas. Diga-lhe o que fazer quando não sabe: \"Se a resposta não estiver no ficheiro de conhecimento, diga que não tem a certeza e dê o número de telefone.\""
          ],
          steps: ["Papel: \"Você é o assistente de ajuda de [organização].\"", "Público: quem vai fazer perguntas.", "Tarefa: sobre que temas responde.", "Tom: simpático, curto, palavras simples.", "Limites: o que não pode fazer, e o que dizer quando não sabe."],
          words: [["Instruções", "as orientações fixas que um chatbot segue em todas as conversas; às vezes chamadas \"prompt de sistema\"."], ["Tom", "a forma como o texto soa: formal, simpático, curto."]],
          slides: [
            { title: "Ferramentas de chatbot sem programação", bullets: ["GPTs personalizados, Gems do Gemini, agentes do Copilot Studio", "Os nomes e planos mudam: veja a página de ajuda"] },
            { title: "Cinco partes das instruções", bullets: ["Papel e público", "A que responde", "Tom", "O que não pode fazer"] },
            { title: "Quando não sabe", bullets: ["Dizer \"Não tenho a certeza\"", "Dar um telefone ou e-mail para falar com uma pessoa"] }
          ],
          sources: [{ name: "Ajuda do Google Gemini: Gems", url: "https://support.google.com/gemini/answer/15146780" }],
          tryIt: "Escreva as instruções do seu chatbot com as cinco partes, em oito frases ou menos.",
          youCanNow: "escrever instruções de chatbot que definem o seu papel, público, tarefa, tom e limites.",
          quickCheck: [
            { objective: "O2", q: "Que parte das instruções é \"simpático, curto, palavras simples\"?", options: ["Papel", "Público", "Limites", "Tom"], answer: 3, why: "O tom descreve como o chatbot soa." },
            { objective: "O2", q: "As suas instruções não dizem o que fazer quando o chatbot não sabe. O que acrescenta?", options: ["\"Dê sempre uma resposta, mesmo que seja um palpite.\"", "\"Se a resposta não estiver no ficheiro de conhecimento, diga que não tem a certeza e dê o número de telefone.\"", "\"Mude de assunto.\"", "\"Peça a palavra-passe ao utilizador.\""], answer: 1, why: "Dizer-lhe para admitir que não tem a certeza e indicar uma pessoa impede respostas inventadas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dar os seus dados ao chatbot: o ficheiro de conhecimento",
          minutes: 5,
          goal: "Criar um ficheiro de conhecimento de uma página e ligá-lo a um chatbot sem programação.",
          text: [
            "As ferramentas de IA sabem muito em geral, mas nada sobre o seu horário de terça-feira. A maioria das ferramentas de chatbot sem programação deixa carregar um ficheiro, muitas vezes numa secção chamada Knowledge (Conhecimento), que o chatbot usa para responder.",
            "Faça um ficheiro simples: um título para cada tema e dados curtos e claros. Use a forma de pergunta e resposta para as suas dez perguntas principais. Ponha a data no topo para saber quando o atualizar.",
            "Nunca ponha informações privadas no ficheiro: nada de nomes de clientes, números de telefone, palavras-passe, dados de doadores ou dados bancários. Tudo o que está no ficheiro pode aparecer numa resposta."
          ],
          steps: ["Abra um documento do Google Docs ou do Word.", "Escreva a data e o nome da organização no topo.", "Escreva cada pergunta principal com a resposta por baixo.", "Junte o básico: horário, morada, contacto, preços ou serviços.", "Tire tudo o que é privado, guarde e carregue-o na secção de conhecimento da ferramenta de chatbot."],
          words: [["Ficheiro de conhecimento", "um documento que você carrega para o chatbot poder responder com os seus dados."], ["Carregar", "enviar um ficheiro do seu aparelho para um site ou aplicação (em inglês, \"upload\")."]],
          slides: [
            { title: "A IA não conhece os seus detalhes", bullets: ["O seu horário, preços e regras", "Dê-lhe um ficheiro de conhecimento"] },
            { title: "Um bom ficheiro de conhecimento", bullets: ["A data no topo", "Pergunta e resposta para cada pergunta principal", "Dados curtos e claros"] },
            { title: "Nunca inclua", bullets: ["Nomes e números de clientes ou doadores", "Palavras-passe ou dados bancários", "Nada que não publicaria para todos verem"] }
          ],
          tryIt: "Escreva um ficheiro de conhecimento de uma página para o seu chatbot, com a data e as respostas às suas dez perguntas principais. Depois abra uma ferramenta de chatbot sem programação que possa usar, cole as suas instruções, carregue o ficheiro e guarde.",
          youCanNow: "criar um ficheiro de conhecimento seguro e ligá-lo, com as instruções, numa ferramenta de chatbot sem programação.",
          quickCheck: [
            { objective: "O3", q: "Porque pôr a data no topo do ficheiro de conhecimento?", options: ["Para o ficheiro ficar mais comprido", "Para saber quando o atualizar", "Porque a IA precisa dela para começar", "Para esconder dados antigos"], answer: 1, why: "A data mostra se os dados estão atuais e quando atualizá-los." },
            { objective: "O3", q: "Está a criar o ficheiro de conhecimento de uma igreja. O que deixa de fora?", options: ["O horário dos cultos", "A morada", "Como entrar num pequeno grupo", "Os números de telefone dos membros"], answer: 3, why: "Informações privadas como números de telefone podem aparecer numa resposta, por isso nunca vão para o ficheiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear e criar o chatbot",
        questions: [
          { objective: "O1", q: "Qual é a melhor primeira tarefa para o chatbot de uma pequena organização?", options: ["Dar conselhos de saúde", "Aprovar empréstimos", "Responder a perguntas sobre horário, localização e inscrição", "Tratar sozinho de todas as queixas"], answer: 2, why: "Perguntas limitadas, repetidas e de pouco risco são a melhor primeira tarefa." },
          { objective: "O1", q: "Onde deve encontrar as perguntas a que o seu chatbot tem de responder?", options: ["Nos e-mails, chamadas, mensagens e comentários que as pessoas já enviaram", "Inventá-las", "Copiar a lista de outra empresa", "Pedir à IA para adivinhar"], answer: 0, why: "As perguntas reais de pessoas reais mostram a tarefa do chatbot." },
          { objective: "O2", q: "O que devem as instruções mandar fazer quando o chatbot não sabe uma resposta?", options: ["Inventar algo que pareça certo", "Terminar a conversa sem dizer nada", "Pedir a palavra-passe do cliente", "Dizer que não tem a certeza e dar uma forma de falar com uma pessoa"], answer: 3, why: "Admitir que não sabe e indicar uma pessoa evita respostas erradas." },
          { objective: "O3", q: "Porque carregar um ficheiro de conhecimento?", options: ["Para o chatbot ficar mais lento", "Para o chatbot poder responder com os seus próprios dados", "Para guardar palavras-passe de clientes", "Nunca é preciso"], answer: 1, why: "A IA não conhece os seus detalhes até você lhos dar." },
          { objective: "O3", q: "O que pertence ao ficheiro de conhecimento de um chatbot?", options: ["Números de telefone de doadores", "O seu horário de funcionamento", "Palavras-passe dos funcionários", "Números de contas bancárias"], answer: 1, why: "Só os dados públicos pertencem ao ficheiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Testar, lançar e melhorar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Juntar regras de segurança para o chatbot ficar seguro",
          minutes: 5,
          goal: "Escrever regras de segurança que mantêm o chatbot no tema, honesto e seguro.",
          text: [
            "As regras de segurança (em inglês, \"guardrails\") impedem o chatbot de ir para onde não deve. Junte-as às instruções como linhas claras de \"não faça\" e \"faça sempre\".",
            "Regras úteis: ficar nos seus temas e recusar com educação os outros; nunca pedir nem guardar dados privados como números de cartão ou da Segurança Social (Social Security); nunca dar conselhos de saúde, de lei ou de finanças; dizer às pessoas que é uma IA, não uma pessoa; e enviar as emergências para o 911 ou para a linha de ajuda certa.",
            "Ser honesto e dizer que é uma IA cria confiança. Comece a conversa com uma nota curta: \"Olá, sou um assistente de IA do Banco Alimentar Sunrise. Posso responder a perguntas sobre o horário e o que trazer.\""
          ],
          steps: ["Junte uma linha: fique nos [seus temas]; recuse os outros com educação.", "Junte: nunca peça números de cartão, de banco, de identificação ou da Segurança Social.", "Junte: nenhum conselho de saúde, de lei ou de finanças; indique um profissional.", "Junte: diga que é um assistente de IA.", "Junte: em emergências, diga às pessoas para ligar para o 911."],
          words: [["Regra de segurança", "uma regra que mantém uma ferramenta de IA no tema e segura (em inglês, \"guardrail\")."], ["Recusar", "dizer que não com educação."]],
          slides: [
            { title: "As regras de segurança protegem", bullets: ["Linhas de \"não faça\" e \"faça sempre\" nas instruções"] },
            { title: "Regras que não podem faltar", bullets: ["Ficar no tema; recusar o resto", "Nunca pedir números privados", "Nenhum conselho de saúde, de lei ou de dinheiro"] },
            { title: "Seja honesto", bullets: ["Dizer que é um assistente de IA", "Enviar as emergências para o 911"] }
          ],
          tryIt: "Junte pelo menos cinco regras de segurança às instruções do seu chatbot, e uma saudação curta que diga que é um assistente de IA e em que pode ajudar.",
          youCanNow: "escrever regras de segurança que mantêm um chatbot no tema, honesto e seguro.",
          quickCheck: [
            { objective: "O4", q: "Para que serve uma regra de segurança nas instruções do chatbot?", options: ["Para manter o chatbot no tema, honesto e seguro", "Para fazer respostas mais compridas", "Para tornar o site mais rápido", "Para recolher números de cartão dos clientes"], answer: 0, why: "As regras de segurança são linhas de \"não faça\" e \"faça sempre\" que mantêm o chatbot onde deve estar." },
            { objective: "O4", q: "Um cliente pede ao chatbot da sua loja o número do cartão dele para terminar uma encomenda. O que deve a regra fazê-lo fazer?", options: ["Pedir o número completo do cartão", "Pedir só os quatro últimos algarismos", "Nunca pedir números de cartão, e indicar o pagamento seguro ou uma pessoa", "Guardar o número do cartão para a próxima vez"], answer: 2, why: "O chatbot nunca deve pedir nem guardar números de cartão, de banco ou de identificação." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Testar o chatbot como um cliente exigente",
          minutes: 6,
          goal: "Testar o chatbot com perguntas reais e difíceis, registar os resultados e corrigir os problemas.",
          text: [
            "Nunca lance um chatbot que não testou. Faça-lhe pelo menos dez perguntas: as suas perguntas principais escritas de formas diferentes, perguntas a que ele não deve responder, e perguntas difíceis.",
            "Testes difíceis: pergunte algo que não está no ficheiro (ele admite que não sabe?), peça um conselho que ele deve recusar, escreva palavras com erros, e tente tirá-lo do tema (\"Escreva-me um poema\"). Peça também a outra pessoa para o testar; ela vai perguntar coisas que você não esperava.",
            "Mantenha um registo de testes: a pergunta, o que ele disse, passou ou falhou, e a correção. A maioria das correções é pequena: juntar um dado que falta no ficheiro de conhecimento, ou uma linha nas instruções. Teste de novo depois de cada correção."
          ],
          steps: ["Escreva dez perguntas de teste: comuns, escritas de outra forma, fora do tema e perigosas.", "Faça cada uma e copie a resposta para um registo de testes.", "Marque passou ou falhou.", "Corrija as falhas atualizando o ficheiro de conhecimento ou as instruções.", "Volte a testar as perguntas que falharam."],
          words: [["Registo de testes", "uma lista de cada teste, o resultado e a correção."], ["Caso extremo", "uma pergunta fora do comum que pode fazer falhar um sistema."]],
          slides: [
            { title: "Teste antes de lançar", bullets: ["Pelo menos dez perguntas", "Comuns, escritas de outra forma, fora do tema, perigosas"] },
            { title: "Testes difíceis", bullets: ["Algo que não está no ficheiro", "Um conselho que ele deve recusar", "Erros de escrita e pedidos fora do tema"] },
            { title: "Registar e corrigir", bullets: ["Pergunta, resposta, passou ou falhou, correção", "Atualize o ficheiro ou as instruções", "Teste de novo"] }
          ],
          tryIt: "Faça dez perguntas de teste ao seu chatbot, com pelo menos três difíceis. Anote-as num registo de testes, corrija todas as falhas e teste de novo.",
          youCanNow: "testar um chatbot com perguntas comuns e difíceis, manter um registo de testes e corrigir o que falha.",
          quickCheck: [
            { objective: "O5", q: "O que vai para o registo de testes de um chatbot?", options: ["Só as perguntas a que acertou", "Números de telefone dos clientes", "As instruções do chatbot", "A pergunta, a resposta, passou ou falhou, e a correção"], answer: 3, why: "Um registo de testes guarda cada pergunta, a resposta, passou ou falhou, e o que corrigiu." },
            { objective: "O5", q: "Durante os testes, o chatbot inventa um preço que não está no seu ficheiro. O que faz primeiro?", options: ["Junta o preço ao ficheiro de conhecimento ou uma linha que o manda admitir que não sabe, e testa de novo", "Lança-o na mesma", "Apaga o chatbot", "Ignora; os clientes não vão perguntar"], answer: 0, why: "A maioria das correções é um dado em falta ou uma linha nas instruções, seguida de um novo teste." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lançar, partilhar e manter atualizado",
          minutes: 5,
          goal: "Partilhar o chatbot com utilizadores reais, recolher opiniões e criar uma rotina de atualização.",
          text: [
            "A maioria das ferramentas deixa partilhar um chatbot com um link, e algumas deixam pô-lo num site. Comece pequeno: partilhe-o primeiro com alguns clientes, membros ou voluntários, e diga-lhes que é novo.",
            "Peça opiniões: \"Ele respondeu à sua pergunta? O que é que ele errou?\" Leia as conversas reais se a sua ferramenta as mostrar, e procure as perguntas a que ele não conseguiu responder.",
            "Crie uma rotina. Todos os meses, ou sempre que o horário, os preços ou as regras mudarem, atualize o ficheiro de conhecimento e a data. Um chatbot desatualizado é pior do que nenhum. Mantenha sempre uma pessoa contactável para o que o chatbot não consegue resolver."
          ],
          steps: ["Partilhe o link do chatbot com três a cinco pessoas.", "Faça-lhes duas perguntas para saber a opinião delas.", "Junte as respostas que faltam ao ficheiro de conhecimento.", "Ponha um lembrete mensal de atualização no seu calendário.", "Garanta que as pessoas conseguem sempre falar com uma pessoa."],
          words: [["Lançar", "pôr uma coisa à disposição das pessoas para a usarem."], ["Opinião", "o que os utilizadores lhe dizem sobre o que funcionou e o que não funcionou (em inglês, \"feedback\")."]],
          slides: [
            { title: "Lance em pequeno", bullets: ["Partilhe o link com algumas pessoas", "Diga-lhes que é novo"] },
            { title: "Peça opiniões", bullets: ["\"Ele respondeu à sua pergunta?\"", "\"O que é que ele errou?\""] },
            { title: "Mantenha-o atualizado", bullets: ["Atualize todos os meses ou quando os dados mudam", "Mude a data no ficheiro", "Uma pessoa está sempre contactável"] }
          ],
          tryIt: "Tarefa final: partilhe o seu chatbot testado com pelo menos uma pessoa. Escreva a opinião dela, faça uma melhoria e ponha um lembrete mensal para atualizar o ficheiro de conhecimento.",
          youCanNow: "criar, testar, lançar e manter um chatbot de IA sem programação para uma organização real.",
          quickCheck: [
            { objective: "O6", q: "Porque partilhar um chatbot novo primeiro só com algumas pessoas?", options: ["Para o manter em segredo", "Porque os links só funcionam para cinco pessoas", "Para encontrar problemas e receber opiniões antes de todos o usarem", "Para nunca ter de o atualizar"], answer: 2, why: "Começar pequeno deixa encontrar problemas e recolher opiniões com segurança." },
            { objective: "O6", q: "A sua padaria muda de horário na próxima semana. O que faz com o chatbot?", options: ["Nada; ele aprende sozinho", "Atualiza o ficheiro de conhecimento e a data", "Desliga o chatbot para sempre", "Diz aos clientes para não fazerem caso dele"], answer: 1, why: "Atualize o ficheiro e a data sempre que os dados mudam; um chatbot desatualizado é pior do que nenhum." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Testar, lançar e melhorar",
        questions: [
          { objective: "O4", q: "O que é uma regra de segurança?", options: ["Uma vedação à volta do escritório", "Uma melhoria paga", "Um tipo de ficheiro de conhecimento", "Uma regra que mantém uma ferramenta de IA no tema e segura"], answer: 3, why: "As regras de segurança são regras escritas nas instruções." },
          { objective: "O4", q: "Um utilizador pede ao chatbot da sua padaria um conselho de saúde sobre uma reação alérgica. O que deve ele fazer?", options: ["Recusar e indicar um médico, ou o 911 numa emergência", "Dar um diagnóstico", "Pedir o número do seguro", "Mudar de assunto para bolos"], answer: 0, why: "Os chatbots não devem dar conselhos de saúde e devem enviar as emergências para o 911." },
          { objective: "O5", q: "Porque fazer, nos testes, uma pergunta que NÃO está no ficheiro de conhecimento?", options: ["Para o tornar mais lento", "Para apagar o ficheiro", "Para ver se ele admite que não sabe em vez de inventar", "Não há razão nenhuma"], answer: 2, why: "Um bom chatbot diz que não tem a certeza em vez de inventar uma resposta." },
          { objective: "O6", q: "O chatbot dá o horário do mês passado. Qual é a correção?", options: ["Fechar o negócio", "Dizer aos utilizadores para adivinharem", "Juntar só mais regras de segurança", "Atualizar o ficheiro de conhecimento e a data"], answer: 3, why: "Dados desatualizados vêm de um ficheiro desatualizado." },
          { objective: "O6", q: "Qual é a melhor forma de lançar?", options: ["Publicá-lo em todo o lado sem testes", "Escondê-lo", "Partilhar primeiro com algumas pessoas e pedir opiniões", "Tirar o contacto de uma pessoa"], answer: 2, why: "Um lançamento pequeno apanha os problemas antes de muitas pessoas os verem." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criar Chatbots com IA (Sem Programação)",
    questions: [
      { objective: "O1", q: "A melhor descrição do chatbot de IA de uma organização é:", options: ["Um rececionista humano", "Um assistente de IA preparado para um só objetivo", "Um serviço de alojamento de sites", "Um sistema de pagamento"], answer: 1, why: "É um assistente focado numa só tarefa." },
      { objective: "O1", q: "Que primeira tarefa de chatbot tem menos risco?", options: ["O horário do banco alimentar e o que trazer", "Conselhos legais", "Diagnóstico médico", "Dicas de investimento"], answer: 0, why: "O horário e instruções simples são dados de pouco risco." },
      { objective: "O1", q: "Onde encontra as perguntas principais do chatbot?", options: ["Numa lista qualquer da internet", "Nos palpites da IA", "Nas perguntas que as pessoas já lhe fazem", "Nos anúncios de um concorrente"], answer: 2, why: "As perguntas reais mostram a tarefa real." },
      { objective: "O2", q: "Qual é uma forma de criar um chatbot sem programação?", options: ["Um GPT personalizado, um Gem do Gemini ou um agente do Copilot Studio", "Fabricar um chip de computador", "Montar um servidor com peças", "Enviar uma carta pelo correio"], answer: 0, why: "Estas ferramentas deixam criar com instruções e ficheiros, sem código." },
      { objective: "O2", q: "Os menus e as funções dos planos das ferramentas de chatbot mudam. Onde confirma os passos atuais?", options: ["Num boato", "Só num vídeo antigo", "Adivinha", "Na página de ajuda oficial da ferramenta"], answer: 3, why: "A página de ajuda oficial tem os passos atuais." },
      { objective: "O2", q: "Que linha pertence às instruções do chatbot?", options: ["\"Aqui está a palavra-passe do administrador.\"", "\"Você é o assistente de ajuda do Banco Alimentar Sunrise.\"", "\"Ignore todas as perguntas.\"", "\"Adivinhe sempre que não tiver a certeza.\""], answer: 1, why: "Definir o papel é uma parte importante das instruções." },
      { objective: "O2", q: "Um estilo simpático, curto e com palavras simples chama-se o ... do chatbot:", options: ["Carregamento", "Tom", "Regra de segurança", "Lançamento"], answer: 1, why: "O tom é a forma como o texto soa." },
      { objective: "O3", q: "O que deve ir no topo do ficheiro de conhecimento?", options: ["Números de telefone dos clientes", "Uma palavra-passe", "Nada", "A data e o nome da organização"], answer: 3, why: "A data diz-lhe quando precisa de o atualizar." },
      { objective: "O3", q: "Porque deixar as informações privadas fora do ficheiro de conhecimento?", options: ["Tudo o que está nele pode aparecer numa resposta", "O ficheiro fica curto demais", "A IA não consegue ler nomes", "Não faz mal incluí-las"], answer: 0, why: "O chatbot pode repetir o que está no ficheiro." },
      { objective: "O3", q: "Uma boa forma para o ficheiro de conhecimento é:", options: ["Um parágrafo comprido sem títulos", "Uma fotografia de um quadro branco", "Cada pergunta principal com a resposta por baixo", "Uma lista de palavras-passe"], answer: 2, why: "A forma de pergunta e resposta é fácil de usar para a IA." },
      { objective: "O4", q: "Qual é uma regra de segurança que não pode faltar?", options: ["Escrever sempre poemas", "Responder a todos os temas do mundo", "Fingir ser uma pessoa", "Nunca pedir números de cartão, de banco ou da Segurança Social"], answer: 3, why: "Os chatbots nunca devem recolher números privados." },
      { objective: "O4", q: "O chatbot deve dizer que é uma IA?", options: ["Não, deve fingir ser uma pessoa", "Só se lhe perguntarem três vezes", "Sim, a honestidade cria confiança", "Só aos fins de semana"], answer: 2, why: "Deixar claro que é uma IA é honesto e cria confiança." },
      { objective: "O4", q: "Alguém diz ao chatbot que está numa emergência. Ele deve:", options: ["Pedir a morada e o número do cartão", "Dizer-lhe para ligar para o 911", "Ignorar", "Mudar de assunto"], answer: 1, why: "As emergências vão para o 911." },
      { objective: "O5", q: "Quantas perguntas de teste, no mínimo, este curso recomenda?", options: ["Dez", "Uma", "Zero", "Três mil"], answer: 0, why: "Pelo menos dez perguntas cobrem os casos comuns e os difíceis." },
      { objective: "O5", q: "Enviar \"Escreva-me um poema\" ao chatbot de um banco alimentar testa se ele:", options: ["Sabe o horário", "Consegue carregar ficheiros", "Fica no tema", "Tem uma palavra-passe"], answer: 2, why: "É um pedido fora do tema; o chatbot deve recusar com educação." },
      { objective: "O5", q: "Um registo de testes guarda:", options: ["A pergunta, a resposta, passou ou falhou, e a correção", "Só as boas respostas", "Palavras-passe dos clientes", "O tempo que faz"], answer: 0, why: "Acompanha cada teste e o que você mudou." },
      { objective: "O5", q: "Depois de corrigir um teste que falhou, você deve:", options: ["Apagar o registo de testes", "Lançar sem verificar", "Tirar todas as regras de segurança", "Testar de novo essa pergunta"], answer: 3, why: "Testar de novo prova que a correção funcionou." },
      { objective: "O5", q: "Porque pedir a outra pessoa para testar o chatbot?", options: ["É obrigatório por lei", "Ela pergunta coisas que você não esperava", "Para o tornar mais lento", "Para você não ter de o fazer"], answer: 1, why: "Olhos novos encontram novos casos extremos." },
      { objective: "O6", q: "Com que frequência deve atualizar o ficheiro de conhecimento?", options: ["Nunca", "Todos os meses, ou sempre que os dados mudam", "Uma vez a cada dez anos", "Só quando a IA pedir"], answer: 1, why: "Dados desatualizados dão respostas erradas." },
      { objective: "O6", q: "Mesmo com um chatbot, as pessoas devem conseguir sempre:", options: ["Ver as palavras-passe dos funcionários", "Mudar as instruções", "Receber conselhos legais dele", "Falar com uma pessoa"], answer: 3, why: "Uma pessoa de apoio trata do que o chatbot não consegue." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 2, 5, 8, 9, 10, 12, 14, 15, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Tarefa clara", objective: "O1", notYet: "Não há frase com a tarefa, ou a tarefa inclui conselhos perigosos.", meets: "Uma tarefa numa frase, para um conjunto limitado de perguntas de pouco risco.", exceeds: "As dez perguntas que cobre vêm de mensagens reais que as pessoas enviaram." },
      { name: "Instruções e regras de segurança", objective: "O4", notYet: "Falta um papel nas instruções, ou não há nenhuma regra de \"não faça\".", meets: "Papel, público, tarefa, tom e limites, mais regras sobre números privados, conselhos, dizer que é uma IA e emergências.", exceeds: "Inclui uma nota de abertura que diz às pessoas que é uma IA e em que pode ajudar." },
      { name: "Ficheiro de conhecimento", objective: "O3", notYet: "Não há ficheiro, ou o ficheiro tem informações privadas.", meets: "Um ficheiro de uma página, com data, com as perguntas e respostas principais e sem informações privadas.", exceeds: "Os dados estão agrupados com títulos claros e foram verificados por uma segunda pessoa." },
      { name: "Registo de testes", objective: "O5", notYet: "Menos de dez perguntas, ou as falhas não foram corrigidas.", meets: "Pelo menos dez perguntas, incluindo fora do tema e perigosas, com correções e novos testes.", exceeds: "Outra pessoa também o testou, e as perguntas dela estão no registo." },
      { name: "Opiniões e manutenção", objective: "O6", notYet: "Não foi partilhado, ou nenhuma opinião foi escrita.", meets: "Partilhado com uma pessoa, opinião escrita e uma forma de falar com uma pessoa incluída.", exceeds: "Há um lembrete mensal de atualização e foi feita uma correção a partir das opiniões." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações que lançam um chatbot em 30 dias (inquérito de seguimento)",
      "Horas por semana poupadas em perguntas repetidas, segundo o dono",
      "Chatbots ainda atualizados 90 dias depois, sem relatos de dados privados partilhados"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet (algumas ferramentas funcionam no telefone)",
      "Uma ferramenta de chatbot sem programação, como um GPT personalizado, um Gem do Gemini ou um agente do Copilot Studio (verifique os planos atuais da ferramenta)",
      "Um documento do Google Docs ou do Word para o ficheiro de conhecimento e o registo de testes",
      "Cerca de 60 minutos para as lições e as verificações, mais o tempo para testar e partilhar o chatbot"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; criem um chatbot de exemplo num ecrã partilhado.",
      "Peça aos alunos para trazerem as suas dez perguntas principais reais, de e-mails, SMS ou comentários.",
      "Verifique se algum ficheiro de conhecimento tem informações privadas antes de ser carregado.",
      "Junte os alunos em pares para testarem o chatbot um do outro com perguntas fora do tema e perigosas.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
