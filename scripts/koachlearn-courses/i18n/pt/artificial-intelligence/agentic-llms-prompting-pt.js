"use strict";

// Koach Learn course (Portuguese translation of artificial-intelligence/agentic-llms-prompting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Code, URLs and product names stay exactly as in the English.

module.exports = {
  id: "agentic-llms-prompting-pt",
  lang: "pt",
  translationOf: "agentic-llms-prompting",
  category: "Artificial Intelligence",
  name: "Compreender os LLM e a Engenharia de Pedidos",
  skills: "Explicar tokens e contexto, Escrever um pedido de sistema, Usar exemplos, Obter respostas estruturadas em JSON, Chamar um LLM a partir de Python, Testar um pedido",
  outcome: "escrever e testar um pedido de sistema fiável para um agente: ele diz um papel, uma tarefa, regras e um formato de resposta com um exemplo, devolve JSON limpo, e você verificou-o com cinco entradas de teste num pequeno caderno de Python.",
  about: [
    "Este é o curso 2 do programa Desenhar, Construir e Pôr a Funcionar Agentes de IA Autónomos. O modelo dentro de cada agente é um grande modelo de linguagem (LLM, em inglês), e a forma como você lhe dá instruções decide se o agente se comporta bem. Este curso ensina, com palavras simples, como funcionam os LLM e como lhes dar boas instruções.",
    "O Capítulo 1 trata de como o modelo funciona e de como escrever um bom pedido num chatbot gratuito. O Capítulo 2 passa para Python no Google Colab, um caderno gratuito no seu navegador de internet, onde você chama um modelo a partir de código, pede JSON e testa o seu pedido como um engenheiro.",
    "O código aparece em linhas curtas no texto das lições. Pode copiá-las para o Colab. Se nunca programou, acompanhe na mesma; o curso \"Introdução à Programação com Python\" é um bom companheiro. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um pedido de sistema para uma tarefa do seu agente do curso 1 (por exemplo, \"classificar uma mensagem recebida em: pergunta, reclamação, encomenda, outro\"). Ele tem de dar um papel, a tarefa, três regras, o formato exato da resposta em JSON e um exemplo. Execute-o a partir de um caderno do Colab com cinco entradas de teste, incluindo uma difícil, registe se cada resposta foi JSON válido e correta, e mude o pedido uma vez para corrigir uma falha.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos a construir o seu primeiro agente de IA no programa Desenhar, Construir e Pôr a Funcionar Agentes de IA Autónomos: donos de pequenos negócios, pessoas a mudar de carreira, estudantes e funcionários que terminaram o curso 1 e planearam uma tarefa para um agente.",
    startingPoint: "Já usaram um chatbot gratuito e planearam um agente no papel no curso 1. A maioria tem pouca ou nenhuma experiência de programação e nunca chamou um modelo a partir de código.",
    gap: "Um agente só é tão fiável como as instruções que o seu modelo recebe. Os alunos precisam de escrever pedidos de sistema claros, obter respostas que um programa consiga ler e testar os pedidos de propósito; caso contrário, os seus agentes vão comportar-se de forma imprevisível e falhar com entradas estranhas.",
    constraints: [
      "Nível de leitura: palavras simples; código mostrado em linhas curtas para copiar",
      "Aparelhos: um computador com navegador de internet; o Google Colab é gratuito, mas os seus recursos não são garantidos",
      "Os níveis gratuitos das API têm limites e podem usar os dados, por isso nenhum dado privado ou de clientes na prática",
      "As chaves de API têm de ficar secretas e fora dos cadernos e das capturas de ecrã",
      "Tempo: lições curtas, com uma tarefa de prática cada"
    ],
    prerequisites: "O primeiro curso de Desenhar, Construir e Pôr a Funcionar Agentes de IA Autónomos. \"Introdução à Programação com Python\" é um companheiro útil."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma resposta errada mas segura de um chatbot", action: "explicar como os tokens, a previsão e a janela de contexto podem fazer um LLM parecer certo e mesmo assim estar errado", standard: "com as suas palavras, nomeando pelo menos duas causas" },
    { id: "O2", condition: "Para uma tarefa do seu agente", action: "escrever um pedido de sistema com um papel, uma tarefa, contexto, regras e um formato de resposta", standard: "com todas as partes presentes e regras que se podem verificar" },
    { id: "O3", condition: "Com o seu pedido de sistema", action: "acrescentar um exemplo resolvido e um formato exato de resposta em JSON", standard: "para que pelo menos 4 de 5 respostas sejam só JSON válido com as chaves certas" },
    { id: "O4", condition: "Num caderno gratuito do Google Colab", action: "chamar um LLM a partir de Python com a chave de API guardada como segredo", standard: "com a resposta impressa e nenhuma chave visível no código" },
    { id: "O5", condition: "Com uma resposta do modelo no seu caderno", action: "converter a resposta em JSON em dados de Python e tratar uma resposta má", standard: "sem o código falhar com uma resposta vazia ou estragada" },
    { id: "O6", condition: "Com cinco entradas de teste, incluindo uma entrada difícil", action: "testar o pedido, registar os resultados e mudar uma coisa para corrigir uma falha", standard: "voltando a executar todos os testes depois de cada mudança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam os LLM e como lhes dar instruções",
      lessons: [
        {
          objectives: ["O1"],
          title: "Como um LLM escreve: tokens, previsão e contexto",
          minutes: 5,
          goal: "Explicar porque um LLM pode parecer certo e mesmo assim estar errado.",
          text: [
            "Um LLM escreve um pequeno pedaço de texto de cada vez. Estes pedaços chamam-se tokens: uma palavra curta, parte de uma palavra mais longa ou um sinal de pontuação. Em cada passo, o modelo prevê um token seguinte provável a partir de tudo o que já viu.",
            "Tudo o que o modelo consegue ver de uma vez é a sua janela de contexto: o pedido de sistema, a conversa, os documentos que você cola e a sua própria resposta até ali. O que está fora da janela de contexto não existe para o modelo. Ele não se lembra de conversas antigas, a não ser que a aplicação as acrescente.",
            "Como prevê texto provável, um LLM pode escrever uma resposta fluente que é falsa. Ele não está a procurar factos, a não ser que tenha uma ferramenta de pesquisa. O seu pedido, o contexto que lhe dá e as verificações que constrói são o que o torna fiável."
          ],
          words: [["Token", "um pequeno pedaço de texto, muitas vezes parte de uma palavra, que um LLM lê e escreve."], ["Janela de contexto", "todo o texto que o modelo consegue ver de uma vez."], ["Previsão", "o modelo a escolher um token seguinte provável com base no que veio antes."]],
          slides: [
            { title: "Um LLM escreve token a token", bullets: ["Um token é uma palavra ou parte de uma palavra", "Em cada passo prevê um token seguinte provável"] },
            { title: "A janela de contexto", bullets: ["Tudo o que o modelo consegue ver de uma vez", "Pedido de sistema, conversa, documentos, a sua resposta", "O que está fora da janela não existe para ele"] },
            { title: "Porque pode estar errado", bullets: ["Prevê texto provável, não factos verificados", "O seu pedido, o contexto e as verificações tornam-no fiável"] }
          ],
          tryIt: "Num chatbot gratuito, pergunte: \"Quantas letras r há na palavra inglesa strawberry? Depois explique como os tokens podem tornar isto difícil para você.\" Anote se a primeira resposta estava certa e porque os tokens importam.",
          youCanNow: "explicar os tokens e a janela de contexto, e porque um LLM precisa de ser verificado.",
          quickCheck: [
            { objective: "O1", q: "O que faz um LLM quando escreve uma resposta?", options: ["Procura a resposta numa base de dados verificada", "Prevê tokens seguintes prováveis, um de cada vez", "Copia uma resposta guardada escrita por uma pessoa", "Faz uma pesquisa e lê o primeiro resultado"], answer: 1, why: "Um LLM prevê texto token a token, por isso pode parecer fluente sem verificar factos." },
            { objective: "O1", q: "Um chatbot dá uma resposta segura sobre uma regra importante para o seu trabalho. O que faz?", options: ["Usa-a, porque parecia segura", "Faz-lhe a mesma pergunta até ele concordar", "Verifica a regra numa fonte de confiança antes de a usar", "Cola a resposta numa conversa nova para a confirmar"], answer: 2, why: "Uma resposta fluente pode mesmo assim estar errada, por isso os factos importantes precisam de uma fonte de confiança." }
          ]
        },
        {
          objectives: ["O2"],
          title: "As partes de um bom pedido",
          minutes: 6,
          goal: "Escrever um pedido com um papel, uma tarefa, contexto, regras e um formato de resposta.",
          text: [
            "Um bom pedido para um agente tem cinco partes. Papel: quem o modelo é (\"Você classifica as mensagens dos clientes de uma pequena padaria.\"). Tarefa: o único trabalho. Contexto: os factos de que precisa. Regras: o que tem e não tem de fazer. Formato de resposta: exatamente como a resposta deve ser.",
            "O pedido de sistema guarda as partes que ficam iguais em cada execução: papel, regras e formato. A mensagem do utilizador guarda o que muda de cada vez: a nova mensagem a classificar, a nova pergunta.",
            "Seja concreto e diga o que fazer. \"Responda em duas frases\" funciona melhor do que \"não seja longo\". Diga o que fazer quando houver dúvida: \"Se a mensagem não couber em nenhuma categoria, use outro.\" Essa única regra evita muitos palpites errados."
          ],
          steps: ["Papel: quem é o modelo?", "Tarefa: um trabalho claro.", "Contexto: os factos de que precisa.", "Regras: o que tem de fazer, o que não pode fazer e o que fazer na dúvida.", "Formato: exatamente como a resposta deve ser."],
          words: [["Pedido de sistema", "as instruções fixas enviadas com cada pedido ao modelo (em inglês, \"system prompt\")."], ["Mensagem do utilizador", "a parte que muda de cada vez, como uma nova pergunta ou entrada."]],
          slides: [
            { title: "Cinco partes de um bom pedido", bullets: ["Papel", "Tarefa", "Contexto e regras", "Formato de resposta"] },
            { title: "Pedido de sistema e mensagem do utilizador", bullets: ["Sistema: o que fica igual (papel, regras, formato)", "Utilizador: o que muda em cada execução (a nova entrada)"] },
            { title: "Escreva regras claras", bullets: ["Diga o que fazer, não só o que não fazer", "Dê uma regra para quando houver dúvida", "Exemplo: se nada servir, use \"outro\""] }
          ],
          tryIt: "Escreva um pedido de sistema com as cinco partes para uma tarefa do seu agente do curso 1. Cole-o num chatbot gratuito, depois envie três entradas diferentes e veja se ele cumpre todas as regras.",
          youCanNow: "escrever um pedido com um papel, uma tarefa, contexto, regras e um formato de resposta.",
          quickCheck: [
            { objective: "O2", q: "O que é a parte do papel num pedido de sistema?", options: ["As chaves exatas de JSON que quer receber", "A mensagem que o utilizador envia desta vez", "A lista de entradas de teste", "Quem o modelo deve ser, por exemplo alguém que classifica pedidos de apoio"], answer: 3, why: "O papel diz ao modelo quem ele é para esta tarefa; as outras partes tratam da tarefa, do contexto, das regras e do formato." },
            { objective: "O2", q: "O seu pedido diz \"seja útil e bom\" e as respostas variam. O que mudaria?", options: ["Trocava por regras claras que o modelo consegue seguir e você consegue verificar", "Tornava o pedido mais longo, com mais palavras simpáticas", "Tirava todas as regras para o modelo decidir", "Mudava para outro chatbot"], answer: 0, why: "Palavras vagas não se podem verificar; regras concretas tornam o comportamento constante." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Exemplos, passos e respostas estruturadas",
          minutes: 5,
          goal: "Usar um exemplo e um formato JSON para obter respostas que um programa consegue ler.",
          text: [
            "Mostrar é melhor do que dizer. Um ou dois exemplos resolvidos no pedido (a entrada e a resposta exata que quer) melhoram muito os resultados. A isto chama-se \"few-shot prompting\" (pedido com alguns exemplos). \"Zero-shot\" quer dizer sem exemplos.",
            "Os agentes precisam de respostas que o código consiga ler, não de parágrafos de conversa. Peça JSON, um formato de texto simples com nomes e valores: {\"category\": \"order\", \"urgent\": false}. Diga: \"Responda só com JSON, sem mais nenhum texto\", e mostre as chaves exatas.",
            "Para tarefas mais difíceis, peça ao modelo para trabalhar por passos: primeiro listar os factos, depois decidir. Muitos serviços de modelos também conseguem obrigar a um JSON válido com uma opção chamada \"structured output\" (resposta estruturada); procure-a na documentação do seu fornecedor."
          ],
          words: [["Few-shot prompting", "dar ao modelo alguns exemplos de entrada e da resposta certa."], ["JSON", "um formato de texto simples com valores com nome, que os programas conseguem ler, como {\"name\": \"Ana\"}."], ["Structured output (resposta estruturada)", "uma opção do modelo que faz a resposta seguir um formato exato."]],
          slides: [
            { title: "Mostre, não diga só", bullets: ["Zero-shot: sem exemplos", "Few-shot: um a três exemplos resolvidos", "Os exemplos melhoram muito os resultados"] },
            { title: "Peça JSON", bullets: ["Os programas conseguem lê-lo", "\"Responda só com JSON, sem mais nenhum texto\"", "Mostre as chaves exatas que quer"] },
            { title: "Tarefas mais difíceis", bullets: ["Peça para listar os factos e depois decidir", "Use structured output se o seu fornecedor o tiver"] }
          ],
          tryIt: "Acrescente um exemplo resolvido e um formato JSON ao seu pedido da Lição 2. Envie cinco entradas. Conte quantas respostas foram só JSON com as chaves certas.",
          youCanNow: "usar exemplos e um formato JSON para obter respostas que o seu código consegue ler.",
          quickCheck: [
            { objective: "O3", q: "Porque acrescentar um exemplo resolvido a um pedido?", options: ["Faz o modelo trabalhar mais depressa", "Esconde as regras do utilizador", "Mostra ao modelo o tipo exato de resposta que você quer", "Deixa de ser preciso dar um papel"], answer: 2, why: "Um exemplo mostra ao modelo o padrão e o formato a copiar." },
            { objective: "O3", q: "Algumas respostas chegam em JSON com uma frase simpática à frente. O que faria?", options: ["Aceitava, porque o JSON está lá algures", "Dizia no pedido para devolver só JSON com as chaves exatas, e mostrava um exemplo", "Pedia uma resposta mais longa", "Tirava o formato de resposta para o modelo ficar livre"], answer: 1, why: "O código precisa só de JSON, por isso o pedido tem de o dizer com clareza e mostrá-lo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam os LLM e como lhes dar instruções",
        questions: [
          { objective: "O1", q: "O que é um token?", options: ["Uma palavra-passe para a IA", "Uma moeda para pagar a IA", "Um pequeno pedaço de texto que o modelo lê e escreve", "Um tipo de chatbot"], answer: 2, why: "Os LLM trabalham com tokens: palavras ou partes de palavras." },
          { objective: "O1", q: "Colou um documento numa conversa. Numa conversa nova, o modelo não o conhece. Porquê?", options: ["O documento agora está fora da sua janela de contexto", "O modelo está avariado", "Os documentos não são permitidos", "Precisa de um computador mais rápido"], answer: 0, why: "O modelo só vê o que está na janela de contexto atual." },
          { objective: "O2", q: "Que parte pertence ao pedido de sistema?", options: ["Uma piada qualquer", "A mensagem do cliente de hoje", "A sua palavra-passe", "As regras que valem em cada execução"], answer: 3, why: "O pedido de sistema guarda o que fica igual; a mensagem do utilizador guarda o que muda." },
          { objective: "O2", q: "Que regra está mais bem escrita?", options: ["\"Não seja longo.\"", "\"Responda em duas frases. Se tiver dúvidas, diga: não tenho a certeza.\"", "\"Esforce-se.\"", "\"Seja bom.\""], answer: 1, why: "É concreta, diz o que fazer e diz o que fazer quando há dúvida." },
          { objective: "O3", q: "Porque pedir JSON ao modelo de um agente?", options: ["Fica mais bonito", "Os modelos não conseguem escrever parágrafos", "É mais curto de escrever", "O seu código consegue ler a resposta de forma fiável"], answer: 3, why: "Os agentes passam as respostas ao código, e o código precisa de um formato fixo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Chamar e testar um LLM a partir de Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "A sua primeira chamada a um modelo no Google Colab",
          minutes: 6,
          goal: "Chamar um LLM a partir de um caderno de Python e imprimir a resposta.",
          text: [
            "O Google Colab é um caderno de Python gratuito que funciona no seu navegador; precisa de uma conta Google. Os recursos gratuitos não são garantidos e os cadernos parados desligam-se ao fim de algum tempo, por isso guarde o seu trabalho. Abra colab.research.google.com e crie um caderno novo.",
            "Para chamar um modelo precisa de uma chave de API, uma palavra-passe secreta para programas. A Gemini API da Google tem um nível gratuito para pequenos projetos; obtém a chave no Google AI Studio (aistudio.google.com/apikey). A Google diz que o conteúdo do nível gratuito pode ser usado para melhorar os seus produtos, por isso nunca envie dados privados ou de clientes no nível gratuito.",
            "O guia de início rápido atual da Google mostra linhas como estas: pip install -U google-genai, depois from google import genai, client = genai.Client(), depois interaction = client.interactions.create(model='MODEL_NAME', input='Explain an AI agent in one sentence'), depois print(interaction.output_text). Copie o nome exato do modelo e o código da página do guia, porque os nomes e o código mudam. A chave é lida de uma variável de ambiente chamada GEMINI_API_KEY.",
            "Nunca cole a sua chave num caderno partilhado, numa captura de ecrã ou num chatbot. Guarde-a numa definição secreta e crie uma chave nova se uma for exposta. Outros fornecedores (OpenAI, Anthropic, ou um modelo local gratuito com o Ollama) funcionam da mesma forma: um cliente, um nome de modelo, uma entrada e uma saída."
          ],
          steps: ["Abra colab.research.google.com e crie um caderno novo.", "Obtenha uma chave de API no Google AI Studio e mantenha-a secreta.", "Instale a biblioteca e copie o código do guia de início rápido.", "Use o nome do modelo que aparece na página do guia.", "Execute a célula e imprima a resposta."],
          words: [["API", "uma forma de um programa falar com outro, como o seu código a pedir uma resposta a um modelo."], ["Chave de API", "um código secreto que deixa o seu programa usar um serviço; trate-a como uma palavra-passe."], ["Variável de ambiente", "uma definição guardada fora do seu código, muitas vezes usada para segredos."]],
          slides: [
            { title: "Colab: Python gratuito no navegador", bullets: ["Precisa de uma conta Google", "Os recursos gratuitos não são garantidos", "Cadernos parados desligam-se: guarde o seu trabalho"] },
            { title: "Pôr um modelo a responder", bullets: ["Obtenha uma chave de API no Google AI Studio", "Copie o código e o nome do modelo do guia de início rápido", "Cliente, nome do modelo, entrada, saída"] },
            { title: "Proteja a sua chave", bullets: ["Nunca num caderno partilhado nem numa captura de ecrã", "Guarde-a numa definição secreta", "Crie uma chave nova se ela for exposta"] },
            { title: "Nível gratuito e privacidade", bullets: ["O conteúdo do nível gratuito pode ser usado para melhorar produtos", "Nunca envie nele dados privados ou de clientes"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }, { name: "Gemini API quickstart", url: "https://ai.google.dev/gemini-api/docs/quickstart" }, { name: "Gemini API pricing and free tier", url: "https://ai.google.dev/gemini-api/docs/pricing" }],
          tryIt: "Crie um caderno no Colab, configure uma chave da forma segura e ponha o modelo a responder a: \"Explique um agente de IA numa frase.\" Guarde o caderno com o nome agent-prompts.",
          youCanNow: "chamar um LLM a partir de Python num caderno gratuito e manter a sua chave de API secreta.",
          quickCheck: [
            { objective: "O4", q: "O que é o Google Colab?", options: ["Um caderno de Python gratuito que funciona num navegador de internet", "Um modelo de IA pago", "Um lugar para guardar palavras-passe", "Uma aplicação de telefone para conversar com IA"], answer: 0, why: "O Colab deixa executar Python no navegador de graça, com limites." },
            { objective: "O4", q: "Vai partilhar o seu caderno. A sua chave de API está escrita numa célula de código. O que faz?", options: ["Partilha, porque só os amigos vão ver", "Desfoca a chave numa captura de ecrã", "Muda o nome da variável para ser mais difícil de encontrar", "Passa a chave para uma definição secreta e cria uma chave nova se ela já foi vista"], answer: 3, why: "Uma chave é como uma palavra-passe: guarde-a numa definição secreta e troque-a se foi exposta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Enviar o seu pedido de sistema e ler JSON no código",
          minutes: 6,
          goal: "Enviar o seu pedido a partir do código e transformar a resposta em JSON em dados de Python.",
          text: [
            "Ponha o seu pedido de sistema numa variável de Python: SYSTEM = '''You sort messages for a bakery... Reply with only JSON.''' Ponha cada nova entrada noutra variável. A forma mais simples de as juntar é enviar SYSTEM mais a entrada como um único texto; a maioria dos fornecedores também tem uma opção separada para as instruções de sistema, explicada na sua documentação.",
            "Leia a resposta com a biblioteca json do Python: import json, depois data = json.loads(text). Agora data['category'] é um valor normal de Python com que o seu agente pode trabalhar.",
            "Às vezes o modelo vai pôr palavras à volta do JSON ou esquecer uma chave. Prepare-se para isso: ponha a conversão dentro de try e except e, se falhar, tente outra vez uma vez com \"Responda só com JSON\" ou marque a entrada como falhada. Nunca deixe uma resposta má fazer o agente falhar nem passar sem ninguém dar por isso."
          ],
          steps: ["Guarde o pedido de sistema numa variável.", "Envie o pedido de sistema e a entrada ao modelo.", "Converta a resposta com json.loads dentro de try / except.", "Verifique se as chaves de que precisa estão lá.", "Se falhar: tente outra vez uma vez, ou marque como falhada."],
          words: [["Converter (parse)", "transformar texto em dados que um programa pode usar."], ["try / except", "a forma de o Python apanhar um erro e tratá-lo em vez de parar."], ["Nova tentativa (retry)", "fazer o mesmo pedido outra vez depois de uma falha."]],
          slides: [
            { title: "O pedido no código", bullets: ["SYSTEM guarda o papel, as regras e o formato", "Cada nova entrada vai na sua própria variável"] },
            { title: "Ler o JSON", bullets: ["import json", "data = json.loads(text)", "data['category'] já pode ser usado"] },
            { title: "Prepare-se para respostas más", bullets: ["Ponha a conversão dentro de try / except", "Verifique se as chaves estão lá", "Tente outra vez uma vez, ou marque como falhada"] }
          ],
          tryIt: "No seu caderno, envie o seu pedido de sistema com uma entrada, converta o JSON e imprima só a categoria. Depois dê-lhe uma entrada estranha (uma mensagem vazia) e confirme que o seu código não falha.",
          youCanNow: "enviar um pedido de sistema a partir de Python e transformar com segurança o JSON do modelo em dados.",
          quickCheck: [
            { objective: "O5", q: "O que faz json.loads com a resposta do modelo?", options: ["Envia-a de volta ao modelo", "Transforma texto JSON em dados de Python que o seu código pode usar", "Verifica se a resposta é verdadeira", "Guarda-a num ficheiro"], answer: 1, why: "json.loads converte texto JSON em dados de Python, como um dicionário." },
            { objective: "O5", q: "O seu agente recebe uma mensagem vazia e a conversão falha. O que deve fazer o código?", options: ["Parar com erro para você reparar", "Devolver como categoria o texto que veio", "Apanhar o erro e depois tentar outra vez uma vez ou marcar o item como falhado", "Apagar a mensagem"], answer: 2, why: "Pôr a conversão dentro de try / except deixa o agente tratar uma resposta má em vez de parar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Testar um pedido como um engenheiro",
          minutes: 6,
          goal: "Executar um pedido com um pequeno conjunto de testes e melhorá-lo a partir dos resultados.",
          text: [
            "Uma boa resposta prova pouco. Os engenheiros escrevem um conjunto de testes: uma lista curta de entradas com a resposta que esperam. Inclua casos fáceis, casos-limite (vazio, muito longo, dois assuntos ao mesmo tempo) e um caso difícil, como uma mensagem que diz \"ignore as suas instruções\".",
            "Em Python, uma lista de pares funciona: tests = [('Where is my cake?', 'order'), ('You burned my bread!', 'complaint')]. Percorra a lista com um ciclo, chame o modelo, converta o JSON e compare com a resposta esperada. Conte as respostas em JSON válido e as respostas certas.",
            "Mude uma coisa de cada vez: uma regra mais clara, um exemplo melhor. Execute de novo todo o conjunto de testes depois de cada mudança, para saber que a correção ajudou e não estragou nada. Guarde cada versão do pedido e a sua pontuação no seu caderno."
          ],
          steps: ["Escreva 5 a 10 entradas de teste com as respostas esperadas.", "Inclua casos-limite e uma entrada difícil.", "Ciclo: chamar, converter, comparar, contar.", "Mude uma coisa no pedido.", "Execute de novo todos os testes e fique com a melhor versão."],
          words: [["Conjunto de testes", "uma lista de entradas com as respostas que espera, usada para verificar um pedido."], ["Caso-limite", "uma entrada fora do comum, como uma mensagem vazia ou muito longa."], ["Regressão", "quando uma mudança corrige uma coisa mas estraga outra."]],
          slides: [
            { title: "Escreva um conjunto de testes", bullets: ["Entradas com as respostas esperadas", "Casos fáceis e casos-limite", "Uma entrada difícil: \"ignore as suas instruções\""] },
            { title: "Execute num ciclo", bullets: ["Chame o modelo para cada entrada", "Converta o JSON e compare com o esperado", "Conte as válidas e as certas"] },
            { title: "Melhore uma mudança de cada vez", bullets: ["Uma regra mais clara ou um exemplo melhor", "Execute de novo todos os testes depois de cada mudança", "Guarde as versões e as pontuações"] }
          ],
          tryIt: "Tarefa final: escreva o seu pedido de sistema com papel, tarefa, três regras, um formato JSON e um exemplo. Teste-o no Colab com cinco entradas, incluindo uma difícil, registe para cada uma se foi JSON válido e se estava certa, mude o pedido uma vez para corrigir uma falha e execute de novo.",
          youCanNow: "testar e melhorar um pedido com um pequeno conjunto de testes, como fazem os construtores de agentes.",
          quickCheck: [
            { objective: "O6", q: "O que é uma regressão quando testa pedidos?", options: ["Um teste que passa à primeira", "Uma correção que faz falhar um teste que antes passava", "Uma entrada de teste escrita noutra língua", "Uma resposta mais lenta do modelo"], answer: 1, why: "Uma regressão é quando uma mudança estraga algo que antes funcionava." },
            { objective: "O6", q: "Um de cinco testes falha. Qual é o melhor passo a seguir?", options: ["Mudar uma coisa no pedido e executar de novo os cinco testes", "Reescrever o pedido todo desde o início", "Apagar o teste que falha", "Executar de novo só o teste que falha"], answer: 0, why: "Mudar uma coisa e executar de novo todos os testes mostra o que a mudança corrigiu e o que estragou." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Chamar e testar um LLM a partir de Python",
        questions: [
          { objective: "O4", q: "Onde deve ficar a sua chave de API?", options: ["Numa célula de um caderno partilhado", "Numa captura de ecrã para pedir ajuda", "Numa definição secreta ou variável de ambiente", "No chatbot, para ele se lembrar"], answer: 2, why: "As chaves são palavras-passe para programas e têm de ficar secretas." },
          { objective: "O4", q: "Porque copiar o nome do modelo da página do guia de início rápido do fornecedor?", options: ["Os nomes dos modelos e o código mudam com o tempo", "A lei obriga", "Torna a resposta mais curta", "Senão o Colab não funciona"], answer: 0, why: "Os fornecedores mudam o nome dos modelos e retiram-nos; a página deles está atualizada." },
          { objective: "O5", q: "json.loads(text) falha porque o modelo acrescentou palavras. Um bom agente:", options: ["Para com erro", "Apanha o erro e tenta outra vez uma vez ou marca como falhado", "Apaga a entrada", "Usa o texto na mesma"], answer: 1, why: "Prepare-se para respostas más, para que não façam o agente parar nem passem sem ninguém ver." },
          { objective: "O6", q: "O que pertence a um bom conjunto de testes?", options: ["Casos fáceis, casos-limite e uma entrada difícil", "Só uma entrada", "Só entradas fáceis", "As respostas que o modelo já deu"], answer: 0, why: "Os casos-limite e os difíceis mostram onde um pedido falha." },
          { objective: "O6", q: "Mudou o pedido e agora um teste passa. E a seguir?", options: ["Pô-lo logo a funcionar para todos", "Mudar mais cinco coisas de uma vez", "Apagar os testes antigos", "Executar de novo todo o conjunto de testes"], answer: 3, why: "Executar de novo tudo apanha as regressões." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Compreender os LLM e a Engenharia de Pedidos",
    questions: [
      { objective: "O1", q: "Um LLM escreve:", options: ["Copiando uma página de internet", "Prevendo um token de cada vez", "Perguntando a uma pessoa", "Procurando numa lista fixa de respostas"], answer: 1, why: "Ele prevê um token seguinte provável, vezes sem conta." },
      { objective: "O1", q: "A janela de contexto é:", options: ["Um separador do navegador", "O preço do modelo", "Tudo o que o modelo consegue ver de uma vez", "A cor do tema da aplicação de conversa"], answer: 2, why: "Só o texto dentro da janela existe para o modelo." },
      { objective: "O1", q: "Porque pode um modelo dizer algo falso com fluência?", options: ["Ficou sem tokens", "Está a mentir de propósito", "Prevê texto provável em vez de verificar factos", "A chave expirou"], answer: 2, why: "Prever não é verificar factos, a não ser que se acrescente uma ferramenta." },
      { objective: "O2", q: "Qual NÃO é uma das cinco partes de um bom pedido?", options: ["A sua palavra-passe", "Formato de resposta", "Regras", "Papel"], answer: 0, why: "As palavras-passe nunca devem estar nos pedidos." },
      { objective: "O2", q: "O que deve mudar em cada execução?", options: ["O pedido de sistema", "O formato de resposta", "O papel", "A mensagem do utilizador"], answer: 3, why: "A nova entrada vai na mensagem do utilizador." },
      { objective: "O2", q: "Uma boa regra para casos de dúvida é:", options: ["\"Adivinhe.\"", "\"Se nada servir, use outro.\"", "\"Nunca tenha dúvidas.\"", "\"Invente alguma coisa.\""], answer: 1, why: "Dizer o que fazer na dúvida evita palpites errados." },
      { objective: "O3", q: "Few-shot prompting quer dizer:", options: ["Só pedidos curtos", "Enviar menos pedidos", "Usar um modelo pequeno", "Incluir alguns exemplos resolvidos"], answer: 3, why: "Exemplos de entrada e de resposta guiam o modelo." },
      { objective: "O3", q: "Qual é JSON válido?", options: ["category = order", "<category>order", "{\"category\": \"order\"}", "category: order;"], answer: 2, why: "O JSON usa chavetas, nomes e valores entre aspas." },
      { objective: "O3", q: "Structured output (resposta estruturada) é:", options: ["Uma opção do modelo que obriga a um formato exato", "Uma resposta mais longa", "Um tipo de chatbot", "Um menu do Colab"], answer: 0, why: "Muitos fornecedores conseguem obrigar a um JSON válido com ela; veja a documentação." },
      { objective: "O4", q: "O Google Colab é:", options: ["Um servidor pago que tem de instalar", "Um caderno de Python gratuito no navegador", "Só uma aplicação de telefone", "Um modelo de IA"], answer: 1, why: "O Colab executa cadernos de Python no seu navegador de graça." },
      { objective: "O4", q: "Os recursos gratuitos do Colab:", options: ["Não são garantidos; os cadernos parados desligam-se", "São garantidos e ilimitados", "São só para escolas", "São só ao fim de semana"], answer: 0, why: "O Colab diz que os recursos gratuitos não são garantidos." },
      { objective: "O4", q: "Uma chave de API deve ser tratada como:", options: ["Um nome de utilizador público", "Um comentário", "Um nome de ficheiro", "Uma palavra-passe"], answer: 3, why: "Qualquer pessoa com a chave pode usar a sua conta." },
      { objective: "O4", q: "No nível gratuito da Gemini API não deve enviar:", options: ["Uma pergunta de teste", "Dados privados ou de clientes", "Uma mensagem de padaria de exemplo que você inventou", "\"Olá\""], answer: 1, why: "O conteúdo do nível gratuito pode ser usado para melhorar os produtos da Google." },
      { objective: "O4", q: "A sua chave apareceu numa captura de ecrã. Deve:", options: ["Esperar que ninguém tenha visto", "Publicá-la outra vez", "Criar uma chave nova e deixar de usar a antiga", "Enviá-la por e-mail ao apoio técnico"], answer: 2, why: "Uma chave exposta tem de ser trocada." },
      { objective: "O5", q: "json.loads transforma:", options: ["Dados numa imagem", "Python em JavaScript", "Texto JSON em dados de Python", "Um pedido num modelo"], answer: 2, why: "Converter torna a resposta utilizável no código." },
      { objective: "O5", q: "Pôr a conversão dentro de try / except deixa o seu agente:", options: ["Tratar uma resposta má em vez de parar", "Trabalhar mais depressa", "Saltar a chamada ao modelo", "Esconder a chave"], answer: 0, why: "Os erros são apanhados e tratados." },
      { objective: "O6", q: "Um caso-limite é:", options: ["Uma entrada muito comum", "Um nome de modelo", "O primeiro teste", "Uma entrada fora do comum, como uma mensagem vazia"], answer: 3, why: "Os casos-limite testam os limites de um pedido." },
      { objective: "O6", q: "Porque incluir nos testes uma entrada \"ignore as suas instruções\"?", options: ["Para tornar o modelo mais rápido", "Para verificar se o pedido resiste a uma injeção de instruções", "Para poupar tokens", "Porque a lei obriga"], answer: 1, why: "Os agentes leem texto em que não se pode confiar; o pedido deve manter as suas regras." },
      { objective: "O6", q: "Uma regressão é quando:", options: ["O modelo fica mais barato", "A chave expira", "Todos os testes passam", "Uma correção estraga algo que funcionava"], answer: 3, why: "Executar de novo todos os testes apanha as regressões." },
      { objective: "O6", q: "A melhor forma de melhorar um pedido é:", options: ["Mudar muitas coisas de uma vez", "Nunca o mudar", "Mudar uma coisa e executar de novo todos os testes", "Pedir só ao modelo para se avaliar a si próprio"], answer: 2, why: "Uma mudança de cada vez mostra o que realmente ajudou." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      3,
      5,
      7,
      8,
      11,
      13,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Pedido de sistema completo",
        objective: "O2",
        notYet: "Falta o papel, a tarefa ou uma das três regras, ou são vagos.",
        meets: "Dá um papel, a tarefa e três regras claras.",
        exceeds: "As regras também dizem o que fazer na dúvida ou quando nada serve."
      },
      {
        name: "Formato e exemplo",
        objective: "O3",
        notYet: "Não há um formato JSON exato ou não há exemplo.",
        meets: "Diz as chaves exatas do JSON e dá um exemplo resolvido.",
        exceeds: "O exemplo segue o formato à risca e a maioria das respostas é JSON válido."
      },
      {
        name: "Funciona no Colab com segurança",
        objective: "O4",
        notYet: "O caderno não funciona, ou a chave de API está visível.",
        meets: "O pedido funciona a partir do Colab com a chave guardada numa definição secreta.",
        exceeds: "O caderno está arrumado e outra pessoa podia executá-lo de novo com a sua própria chave."
      },
      {
        name: "Converte as respostas com segurança",
        objective: "O5",
        notYet: "Uma resposta má ou vazia faz o código parar com erro.",
        meets: "O JSON é convertido em dados e uma resposta má é apanhada.",
        exceeds: "Os itens falhados ficam marcados com clareza para poderem ser revistos."
      },
      {
        name: "Testado e melhorado",
        objective: "O6",
        notYet: "Menos de cinco entradas, nenhuma entrada difícil, ou resultados não registados.",
        meets: "Cinco entradas, incluindo uma difícil, JSON válido e resposta certa registados para cada uma, uma mudança feita e todos os testes executados de novo.",
        exceeds: "Sabe explicar porque a falha aconteceu e o que a mudança corrigiu."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que passam para o curso 3 do programa de agentes em 30 dias",
      "Alunos que dizem ter usado um pedido de sistema testado num agente real ou numa tarefa de trabalho em 30 dias (inquérito de seguimento)",
      "Alunos que dizem não ter tido nenhuma chave de API exposta (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com navegador de internet e ligação à internet",
      "Uma conta Google gratuita para o Google Colab",
      "Uma chave de API gratuita de um modelo de IA, obtida no site oficial do fornecedor",
      "O plano do agente do curso 1",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois o Capítulo 1 num chatbot gratuito, antes de alguém abrir o Colab.",
      "Mostre ao grupo, passo a passo, como guardar a chave de API como segredo, e confirme que nenhuma chave aparece nos ecrãs nem em cadernos partilhados.",
      "Lembre aos alunos que não devem enviar dados privados ou de clientes nos níveis gratuitos das API.",
      "Junte os alunos que nunca programaram com alguém que já programou, e peça-lhes para copiar as linhas de código exatamente como estão.",
      "Avalie a tarefa final com a grelha de avaliação e peça a cada aluno para mostrar os resultados dos seus cinco testes."
    ]
  }
};
