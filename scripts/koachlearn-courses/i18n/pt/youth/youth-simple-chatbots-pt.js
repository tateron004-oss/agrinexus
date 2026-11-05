"use strict";

// Koach Learn course (Portuguese translation of youth/youth-simple-chatbots.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python code stays exactly as in the English.

module.exports = {
  id: "youth-simple-chatbots-pt",
  lang: "pt",
  translationOf: "youth-simple-chatbots",
  category: "Youth",
  name: "Criar Chatbots Simples com IA",
  skills: "Planear o que um chatbot deve fazer, Criar um chatbot de palavras-chave em Python, Escrever instruções de bot para um assistente de IA, Testar com perguntas reais, Tornar um bot seguro e honesto",
  outcome: "criar um chatbot simples de perguntas e respostas para um clube da escola: um bot de palavras-chave em Python que responde a pelo menos cinco perguntas comuns, e um conjunto de instruções que transforma um assistente de IA gratuito num ajudante do clube, ambos testados com perguntas reais e mantidos seguros e honestos.",
  about: [
    "Este curso é para adolescentes que querem saber como funcionam os chatbots criando um. Não precisa de experiência em programação; vai copiar pequenos modelos de código e mudá-los.",
    "Vai planear um chatbot para algo real, como o seu clube de robótica, a sua banda ou a sua equipa desportiva. Primeiro vai criar um bot simples de palavras-chave em Python no Google Colab, um caderno gratuito que funciona no navegador de internet. Depois vai escrever instruções que fazem um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, agir como ajudante do clube, e comparar os dois. Por fim vai testar os dois e torná-los seguros e honestos.",
    "O Google Colab e os assistentes de IA precisam de contas e têm idades mínimas. Leia as condições de cada ferramenta, siga as regras de IA da sua escola e peça ajuda a um pai, mãe ou encarregado de educação quando criar a conta. Cada lição termina com uma tarefa \"Experimente agora\", há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Crie um chatbot para um clube ou uma equipa da escola. Parte 1: um bot de palavras-chave em Python no Google Colab que cumprimenta o utilizador, responde a pelo menos cinco perguntas comuns (como a hora, o lugar das reuniões e como entrar no clube), diz \"Não sei, por favor pergunte ao orientador do clube\" para tudo o resto e para quando o utilizador escreve bye. Parte 2: um cartão de instruções que faz um assistente de IA gratuito agir como ajudante do clube. Teste os dois com 10 perguntas reais, anote o que cada um acertou e errou, e faça uma melhoria em cada um.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adolescentes que querem perceber como funcionam os chatbots criando um para um grupo real, como um clube, uma banda ou uma equipa desportiva, com ou sem experiência em programação.",
    startingPoint: "Já usaram chatbots em sites, jogos ou assistentes de IA. A maioria nunca escreveu código, nunca planeou o trabalho de um bot nem testou um bot para corrigir o que falhou.",
    gap: "Os chatbots estão em todo o lado, mas a maioria dos adolescentes só os usa. Criar um bot simples de palavras-chave e um ajudante de IA mostra como funcionam os dois, onde cada um falha e porque os bots têm de ser honestos e proteger a privacidade. São habilidades reais para a programação, para carreiras em tecnologia e para servir os seus próprios grupos.",
    constraints: [
      "Limites de idade: o Google Colab e os assistentes de IA precisam de contas e têm idades mínimas; um pai, mãe ou encarregado de educação participa na criação das contas",
      "Regras de IA e de tecnologia da escola; o orientador do clube aprova a partilha do bot",
      "Principiantes: pequenos modelos de código para copiar e mudar; cerca de cinco minutos por lição",
      "Aparelhos: um computador com navegador de internet; nada para instalar",
      "Privacidade: os bots nunca pedem nem guardam palavras-passe, números de telefone, moradas ou números de identificação"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à Programação com IA\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com exemplos de chatbots", action: "explicar como funcionam um chatbot de palavras-chave e um chatbot de IA, com um ponto forte e um limite de cada um", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Para um clube, uma equipa ou um grupo real", action: "escrever um plano de bot com quem ele ajuda, cinco ou mais respostas verificadas, uma resposta de recurso e o que ele nunca deve fazer", standard: "com cada resposta verificada com o orientador do clube" },
    { id: "O3", condition: "Usando o Google Colab", action: "criar um chatbot de palavras-chave em Python com um ciclo, respostas por palavra-chave, uma resposta de recurso e uma despedida", standard: "para que funcione e responda a pelo menos cinco perguntas" },
    { id: "O4", condition: "Usando um assistente de IA gratuito", action: "escrever um cartão de instruções com o papel, os dados verificados, o tom e os limites que faz o assistente agir como ajudante do clube", standard: "para que envie as perguntas desconhecidas para o orientador e não peça informações pessoais" },
    { id: "O5", condition: "Com 10 perguntas de teste realistas", action: "testar os dois bots, marcar cada resposta como certa, errada ou inventada, e corrigir o que falha", standard: "fazendo pelo menos uma correção em cada bot e testando outra vez" },
    { id: "O6", condition: "Antes de partilhar o seu bot", action: "acrescentar uma saudação que diz que é um bot e limites de privacidade e de segurança, e obter a aprovação do orientador", standard: "com as perguntas sérias ou desconhecidas enviadas para um adulto de confiança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam os chatbots, e o seu primeiro bot",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é um chatbot, e duas formas de o criar",
          minutes: 4,
          goal: "Explicar a diferença entre um chatbot de palavras-chave e um chatbot de IA.",
          text: [
            "Um chatbot é um programa com quem você conversa a escrever ou a falar. Vê-os em sites (\"Como posso ajudar?\"), em jogos e em aplicações.",
            "Há dois tipos principais. Um chatbot de palavras-chave segue regras que uma pessoa escreveu: se a mensagem tem a palavra \"time\" (hora), responde com a hora da reunião. É simples e previsível, mas só sabe o que você lhe ensinou. Um chatbot de IA usa um grande modelo de linguagem, que aprendeu com enormes quantidades de texto. Consegue responder a quase tudo com palavras naturais, mas também pode estar errado ou inventar coisas.",
            "Neste curso vai criar os dois para um uso real, como responder às perguntas dos novos membros do seu clube, para ver os pontos fortes e os limites de cada um."
          ],
          words: [["Chatbot", "um programa com quem conversa a escrever ou a falar."], ["Palavra-chave", "uma palavra que o bot procura para decidir como responder."], ["Grande modelo de linguagem", "o tipo de IA por trás de assistentes como o ChatGPT; aprendeu padrões com enormes quantidades de texto."]],
          slides: [
            { title: "Um chatbot é...", bullets: ["Um programa com quem você conversa", "Em sites, jogos e aplicações"] },
            { title: "Chatbot de palavras-chave", bullets: ["Segue regras que uma pessoa escreveu", "Simples e previsível", "Só sabe o que você lhe ensinou"] },
            { title: "Chatbot de IA", bullets: ["Usa um grande modelo de linguagem", "Responde com palavras naturais", "Pode estar errado ou inventar coisas"] }
          ],
          tryIt: "Escolha um clube, uma equipa ou um grupo de que faz parte. Escreva cinco perguntas que os novos membros fazem sempre, como quando se reúnem, onde, e como entrar.",
          youCanNow: "explicar a diferença entre os chatbots de palavras-chave e os chatbots de IA, e escolher um uso real para um bot.",
          quickCheck: [
            { objective: "O1", q: "Qual é um limite de um chatbot de palavras-chave?", options: ["É imprevisível", "Só sabe o que você lhe ensinou", "Inventa dados muitas vezes", "Precisa de um grande modelo de linguagem"], answer: 1, why: "Um bot de palavras-chave segue regras que uma pessoa escreveu, por isso só sabe o que lhe ensinaram." },
            { objective: "O1", q: "Precisa de um bot que dê sempre a mesma hora de reunião, já verificada. Que tipo é mais seguro?", options: ["Um chatbot de IA sem instruções", "Nenhum dos dois consegue fazer isto", "Um bot qualquer de um site", "Um chatbot de palavras-chave com a resposta verificada"], answer: 3, why: "Os bots de palavras-chave são simples e previsíveis; os bots de IA podem estar errados ou inventar coisas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Planear o trabalho do seu bot",
          minutes: 5,
          goal: "Escrever um plano simples: quem o bot ajuda, a que responde e o que nunca deve fazer.",
          text: [
            "Os bons bots têm um trabalho pequeno e claro. Escreva um plano de bot com quatro partes: quem ele ajuda (por exemplo, os novos membros do clube de xadrez), as perguntas a que responde, as respostas (verificadas com o seu orientador) e o que deve dizer quando não sabe.",
            "Decida também o que o bot nunca deve fazer: nunca pedir palavras-passe, números de telefone ou moradas, nunca fingir ser uma pessoa real e nunca dar conselhos sobre saúde, dinheiro ou leis. Na dúvida, envia as pessoas para um adulto real, como o orientador do clube.",
            "Um assistente de IA pode ajudar a pensar em mais perguntas: \"Que perguntas podem fazer os novos membros de um clube de xadrez de uma escola secundária? Faça uma lista de 10.\" Depois verifique você mesmo as respostas."
          ],
          steps: ["Escreva quem o bot ajuda.", "Faça a lista de 5 a 10 perguntas a que ele vai responder.", "Escreva uma resposta curta e verificada para cada uma.", "Escreva a resposta \"Não sei\" que envia as pessoas para um adulto real.", "Faça a lista do que o bot nunca deve fazer."],
          words: [["Plano de bot", "uma descrição curta do que um bot faz e não faz."], ["Resposta de recurso", "o que um bot diz quando não sabe a resposta."]],
          slides: [
            { title: "Um trabalho pequeno e claro", bullets: ["Quem ele ajuda", "Perguntas e respostas verificadas", "O que diz quando não sabe"] },
            { title: "Nunca", bullets: ["Pedir palavras-passe, números de telefone ou moradas", "Fingir ser uma pessoa real", "Dar conselhos de saúde, de dinheiro ou legais"] },
            { title: "Pense em ideias com a IA", bullets: ["Peça mais perguntas prováveis", "Verifique você mesmo cada resposta"] }
          ],
          tryIt: "Escreva o seu plano de bot: quem ele ajuda, as suas cinco perguntas com respostas verificadas, a sua resposta de recurso e três coisas que ele nunca deve fazer. Peça a um assistente de IA mais cinco perguntas que possa ter esquecido.",
          youCanNow: "planear o trabalho, as respostas, a resposta de recurso e as regras de segurança de um chatbot.",
          quickCheck: [
            { objective: "O2", q: "O que é um bom trabalho para um bot?", options: ["Um trabalho pequeno e claro, como responder às perguntas dos novos membros", "Responder a todas as perguntas do mundo", "Dar conselhos de saúde", "Fingir ser o presidente do clube"], answer: 0, why: "Os bons bots têm um trabalho pequeno e claro." },
            { objective: "O2", q: "A IA sugere uma resposta sobre as quotas do clube para o seu plano de bot. O que faz?", options: ["Usa-a como está", "Deixa as quotas fora do plano para sempre", "Verifica-a com o orientador do clube antes de a acrescentar", "Inventa outro número"], answer: 2, why: "As respostas do bot têm de ser verificadas com o orientador, e não tiradas da IA." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Criar um chatbot de palavras-chave em Python",
          minutes: 6,
          goal: "Criar e pôr a funcionar um chatbot de palavras-chave no Google Colab.",
          text: [
            "Abra o Google Colab em colab.research.google.com, inicie sessão com uma conta que tem permissão para usar e comece um caderno novo. O bot usa um ciclo que continua a pedir mensagens, e instruções if que procuram palavras-chave.",
            "Aqui está o modelo, linha a linha: while True: começa um ciclo que se repete. Dentro dele, msg = input(\"You: \").lower() lê a mensagem em letras minúsculas. if \"bye\" in msg: print(\"Bot: See you!\") e depois break para o ciclo. elif \"time\" in msg: print(\"Bot: We meet Tuesdays at 3:30.\") responde a uma pergunta. else: print(\"Bot: I don't know. Please ask the club advisor.\") é a resposta de recurso. Faça o recuo (indentação) das linhas dentro do ciclo e dentro de cada if.",
            "Acrescente um elif para cada pergunta do seu plano. Se aparecer um erro, leia a última linha e o número da linha, procure dois pontos, aspas ou um recuo em falta e, se ficar bloqueado, cole o código e o erro num assistente de IA e peça-lhe para explicar."
          ],
          steps: ["Abra um caderno novo no Colab.", "Escreva while True: e faça o recuo das linhas seguintes.", "Leia a mensagem: msg = input(\"You: \").lower()", "Acrescente if \"bye\" in msg: com um print de despedida e break.", "Acrescente um elif por pergunta e um else de recurso. Ponha a funcionar e converse com o seu bot."],
          words: [["Ciclo (loop)", "código que se repete; while True repete até um break."], ["elif", "abreviatura de else if (senão, se): verifica outra condição."], ["break", "para um ciclo."], [".lower()", "muda o texto para letras minúsculas, para que \"TIME\" e \"time\" sejam iguais."]],
          slides: [
            { title: "O modelo", bullets: ["while True: mantém a conversa a continuar", "msg = input(\"You: \").lower()", "if \"bye\" in msg: despeça-se e depois break"] },
            { title: "Respostas", bullets: ["elif \"time\" in msg: mostre a hora com print", "Um elif por pergunta", "else: a resposta de recurso"] },
            { title: "Se der erro", bullets: ["Leia a última linha do erro", "Verifique os dois pontos, as aspas e os recuos", "Peça à IA para explicar o erro"] }
          ],
          tryIt: "Crie o seu bot de palavras-chave no Colab com uma despedida, pelo menos três respostas do seu plano e uma resposta de recurso. Converse com ele e experimente uma pergunta que ele não deve saber.",
          youCanNow: "criar e pôr a funcionar um chatbot de palavras-chave em Python com respostas, uma resposta de recurso e uma forma de parar.",
          quickCheck: [
            { objective: "O3", q: "No bot em Python, o que faz a linha else?", options: ["Termina o programa", "Dá a resposta de recurso quando nenhuma palavra-chave corresponde", "Lê a mensagem do utilizador", "Começa o ciclo"], answer: 1, why: "O else apanha tudo o que as outras verificações não encontraram." },
            { objective: "O3", q: "O seu bot responde a \"time\" mas não a \"TIME\". O que acrescenta?", options: [".lower() ao ler a mensagem", "Outro break", "Um segundo while True:", "Nada; não se pode corrigir"], answer: 0, why: ".lower() muda a mensagem para letras minúsculas, por isso as duas formas de escrever correspondem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam os chatbots, e o seu primeiro bot",
        questions: [
          { objective: "O1", q: "Como decide um chatbot de palavras-chave o que dizer?", options: ["Lê os seus pensamentos", "Segue regras que procuram palavras na sua mensagem", "Pesquisa a internet inteira", "Pergunta a um professor"], answer: 1, why: "Os bots de palavras-chave seguem regras que uma pessoa escreveu." },
          { objective: "O1", q: "Qual é um ponto fraco de um chatbot de IA?", options: ["Pode estar errado ou inventar coisas", "Só consegue dizer uma frase", "Não percebe palavras normais", "Não precisa de eletricidade"], answer: 0, why: "Os grandes modelos de linguagem podem dar respostas erradas que parecem certas." },
          { objective: "O2", q: "O que é uma resposta de recurso?", options: ["A primeira saudação", "Uma palavra-passe", "O que o bot diz quando não sabe", "O nome do bot"], answer: 2, why: "A resposta de recurso trata das perguntas a que o bot não consegue responder." },
          { objective: "O2", q: "O que o bot do seu clube NUNCA deve pedir?", options: ["O que o utilizador quer saber", "Se quer entrar no clube", "A sua abertura de xadrez preferida", "A morada de casa"], answer: 3, why: "Os bots nunca devem recolher dados privados." },
          { objective: "O3", q: "No bot em Python, o que faz o break?", options: ["Para o ciclo, e a conversa termina", "Avaria o computador", "Acrescenta uma resposta nova", "Apaga o caderno"], answer: 0, why: "O break termina o ciclo while." }
        ]
      }
    },
    {
      name: "Capítulo 2: Bots ajudantes de IA, testes e segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever instruções para um bot ajudante de IA",
          minutes: 5,
          goal: "Escrever um cartão de instruções que faz um assistente de IA gratuito agir como ajudante do seu clube.",
          text: [
            "Pode transformar um assistente de IA geral num ajudante para um só trabalho começando uma conversa com instruções claras. Algumas ferramentas também deixam guardar as instruções como um bot personalizado; os menus e as regras de idade variam, por isso confirme na sua ferramenta. Colar as instruções no início de uma conversa nova funciona na maioria dos assistentes.",
            "Um bom cartão de instruções tem: o papel do bot (\"Você é o ajudante do clube de xadrez da Escola Secundária Lincoln\"), os dados que pode usar (as suas respostas verificadas), o tom (simpático, respostas curtas) e os limites (\"Se não souber, diga: por favor pergunte à professora Rivera, a orientadora do clube. Nunca peça informações pessoais.\").",
            "Diga-lhe para usar só os dados que você lhe deu. Isto diminui a probabilidade de inventar horas de reunião ou regras."
          ],
          steps: ["Escreva o papel: quem é o bot e quem ele ajuda.", "Cole os seus dados e respostas verificados.", "Defina o tom: simpático, respostas curtas.", "Acrescente limites: usar só estes dados; enviar o que não sabe para o orientador; nunca pedir informações pessoais.", "Comece uma conversa nova, cole o cartão e depois faça uma pergunta de teste."],
          words: [["Cartão de instruções", "as regras escritas que dá a um assistente de IA no início de uma conversa."], ["Papel", "quem o bot deve fingir ser no seu trabalho."], ["Tom", "a forma como o bot fala: simpático, formal, curto."]],
          slides: [
            { title: "Transforme um assistente num ajudante", bullets: ["Cole as instruções no início de uma conversa", "Algumas ferramentas guardam bots personalizados; confirme na sua"] },
            { title: "O cartão de instruções", bullets: ["Papel", "Dados verificados", "Tom", "Limites"] },
            { title: "Use só estes dados", bullets: ["Menos respostas inventadas", "O que não sabe vai para o orientador", "Nunca pede informações pessoais"] }
          ],
          tryIt: "Escreva um cartão de instruções para o bot ajudante do seu clube. Comece uma conversa nova num assistente de IA gratuito, cole-o e faça três perguntas do seu plano e uma que ele não deve saber.",
          youCanNow: "escrever instruções claras que transformam um assistente de IA gratuito num bot ajudante focado e com limites.",
          quickCheck: [
            { objective: "O4", q: "O que faz a linha do \"papel\" num cartão de instruções?", options: ["Faz a lista das perguntas de teste", "Escolhe o tipo de letra", "Diz à IA quem ela é e quem ajuda", "Guarda palavras-passe"], answer: 2, why: "A linha do papel, como \"Você é o ajudante do clube de xadrez\", define o trabalho do bot." },
            { objective: "O4", q: "O seu ajudante de IA também responde a perguntas sobre os trabalhos de casa. O que acrescenta ao cartão?", options: ["Mais dados sobre os trabalhos de casa", "Uma regra para usar só os dados do clube e enviar as outras perguntas para o orientador", "Uma saudação mais longa", "Nada; mais respostas é melhor"], answer: 1, why: "Os limites mantêm o ajudante no seu trabalho e diminuem a probabilidade de inventar coisas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Testar e melhorar os seus bots",
          minutes: 5,
          goal: "Testar os dois bots com perguntas reais e corrigir o que falha.",
          text: [
            "Testar quer dizer experimentar o seu bot como as pessoas reais o fariam. Escreva 10 perguntas de teste: as cinco do seu plano, algumas feitas com outras palavras (\"a que horas é que vocês se juntam?\"), uma com um erro de escrita e uma a que ele não deve responder.",
            "Faça cada pergunta aos dois bots e marque cada resposta como certa, errada ou inventada. O bot de palavras-chave pode falhar perguntas feitas com outras palavras; corrija isso acrescentando mais palavras-chave. O ajudante de IA pode parecer certo mas inventar detalhes; corrija isso tornando as instruções mais rigorosas.",
            "Peça a um amigo ou a um membro do clube para experimentar também o seu bot. As pessoas perguntam sempre coisas que você não esperava."
          ],
          steps: ["Escreva 10 perguntas de teste, incluindo outras palavras e um erro de escrita.", "Faça cada pergunta aos dois bots.", "Marque cada resposta como certa, errada ou inventada.", "Bot de palavras-chave: acrescente palavras-chave. Ajudante de IA: torne as instruções mais rigorosas.", "Peça a outra pessoa para testar."],
          words: [["Testar", "experimentar um programa de propósito para encontrar o que não funciona."], ["Caso de teste", "uma pergunta ou entrada que usa para testar um programa."]],
          slides: [
            { title: "10 perguntas de teste", bullets: ["As perguntas do seu plano", "Outras palavras e um erro de escrita", "Uma a que ele não deve responder"] },
            { title: "Marque cada resposta", bullets: ["Certa", "Errada", "Inventada"] },
            { title: "Corrija e teste outra vez", bullets: ["Bot de palavras-chave: acrescente palavras-chave", "Ajudante de IA: instruções mais rigorosas", "Deixe um amigo experimentar"] }
          ],
          tryIt: "Faça as suas 10 perguntas de teste aos dois bots, marque cada resposta e faça uma correção em cada bot. Teste outra vez para ver se as correções funcionaram.",
          youCanNow: "testar chatbots com perguntas reais, encontrar o que falha e melhorá-los.",
          quickCheck: [
            { objective: "O5", q: "O que deve estar num bom conjunto de perguntas de teste?", options: ["Só perguntas copiadas palavra a palavra do seu plano", "Só uma pergunta", "Perguntas que sabe que vão funcionar", "A mesma pergunta feita com outras palavras"], answer: 3, why: "As pessoas reais perguntam com outras palavras e cometem erros de escrita, por isso os testes também devem ter isso." },
            { objective: "O5", q: "O ajudante de IA deu, muito seguro, uma sala de reunião inventada. Como a marca?", options: ["Certa, porque parecia seguro", "Inventada, e depois torna as instruções mais rigorosas", "Salta essa pergunta", "Certa, se estava perto"], answer: 1, why: "Marque os detalhes inventados como inventados e corrija as instruções." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tornar o seu bot seguro e honesto",
          minutes: 5,
          goal: "Acrescentar regras de segurança e de honestidade, e depois terminar o chatbot do seu clube.",
          text: [
            "Um bot deve dizer que é um bot. As pessoas têm o direito de saber que não estão a falar com uma pessoa real. Comece com uma saudação como \"Olá, sou o bot do clube de xadrez. Respondo a perguntas básicas. Para tudo o resto, pergunte à professora Rivera.\"",
            "Deve proteger a privacidade: nunca pedir nem guardar palavras-passe, números de telefone, moradas ou números de cartão de estudante. Deve ficar no seu trabalho: nada de conselhos de saúde, de dinheiro, legais ou pessoais, e deve indicar um adulto de confiança para tudo o que for sério.",
            "Antes de partilhar um bot com o seu clube, obtenha a aprovação do orientador, siga as regras da sua escola sobre IA e tecnologia, e mantenha as respostas atualizadas quando as horas das reuniões mudarem."
          ],
          steps: ["Acrescente uma saudação que diz que é um bot e o que ele faz.", "Confirme que ele nunca pede informações privadas.", "Faça-o enviar as perguntas sérias ou desconhecidas para um adulto de confiança.", "Obtenha a aprovação do orientador antes de o partilhar.", "Atualize as respostas quando os dados mudarem."],
          words: [["Transparência", "ser aberto e honesto, por exemplo dizer que um bot é um bot."], ["Privacidade", "manter as informações pessoais em segurança."]],
          slides: [
            { title: "Diga que é um bot", bullets: ["Saudação clara", "O que pode e não pode fazer", "A quem perguntar para saber mais"] },
            { title: "Proteja a privacidade", bullets: ["Nada de palavras-passe, números de telefone ou moradas", "Nada de números de cartão de estudante"] },
            { title: "Fique no seu trabalho", bullets: ["Nada de conselhos de saúde, de dinheiro ou legais", "As perguntas sérias vão para um adulto de confiança", "Aprovação do orientador antes de partilhar"] }
          ],
          tryIt: "Tarefa final: termine o seu bot de palavras-chave em Python (cinco respostas, resposta de recurso, bye) e o cartão de instruções do seu ajudante de IA. Acrescente uma saudação que diz que é um bot, teste os dois com 10 perguntas, escreva o que cada um acertou e errou, e faça uma melhoria em cada um.",
          youCanNow: "criar, testar e partilhar um chatbot simples que é útil, seguro e honesto sobre ser um bot.",
          quickCheck: [
            { objective: "O6", q: "Qual destes o seu bot nunca deve pedir?", options: ["Que pergunta a pessoa tem", "Se quer saber a hora da reunião", "Se quer dizer bye", "O número do cartão de estudante"], answer: 3, why: "Os bots nunca devem pedir nem guardar palavras-passe, números de telefone, moradas ou números de identificação." },
            { objective: "O6", q: "O seu bot está pronto. O que faz antes de o partilhar com o clube?", options: ["Obtém a aprovação do orientador e segue as regras da escola", "Publica-o logo para todos", "Tira a saudação", "Deixa-o pedir números de telefone para dar seguimento"], answer: 0, why: "Obtenha a aprovação do orientador e siga as regras da escola antes de partilhar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Bots ajudantes de IA, testes e segurança",
        questions: [
          { objective: "O4", q: "O que deve estar no cartão de instruções de um ajudante de IA?", options: ["A sua palavra-passe", "Papel, dados verificados, tom e limites", "Uma história qualquer", "Nada; basta começar a conversar"], answer: 1, why: "Essas quatro partes dão foco e limites ao bot." },
          { objective: "O4", q: "Porque dizer ao ajudante de IA para usar só os dados que você lhe deu?", options: ["Para o tornar mais lento", "Para diminuir a probabilidade de inventar detalhes", "Para o tornar mais comprido", "A lei obriga"], answer: 1, why: "Os limites reduzem as respostas inventadas." },
          { objective: "O5", q: "O seu bot de palavras-chave não percebe \"a que horas é que vocês se juntam?\". Como corrige?", options: ["Apaga o bot", "Tira a resposta de recurso", "Acrescenta mais palavras-chave, como \"juntam\"", "Culpa o utilizador"], answer: 2, why: "Mais palavras-chave apanham outras formas de perguntar." },
          { objective: "O6", q: "Porque deve um bot dizer que é um bot?", options: ["As pessoas têm o direito de saber que não estão a falar com uma pessoa", "Parece mais fixe", "Torna o código mais curto", "Nunca é preciso"], answer: 0, why: "A transparência cria confiança." },
          { objective: "O6", q: "Antes de partilhar o seu bot com o clube, deve:", options: ["Acrescentar um pedido de números de telefone", "Saltar os testes", "Esconder que é um bot", "Obter a aprovação do orientador e seguir as regras da escola"], answer: 3, why: "A aprovação de um adulto e as regras da escola vêm primeiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criar Chatbots Simples com IA",
    questions: [
      { objective: "O1", q: "Um chatbot é:", options: ["Um programa com quem conversa a escrever ou a falar", "Uma capa de telefone", "Um tipo de braço robótico", "Um endereço de site"], answer: 0, why: "Os chatbots são programas de conversa." },
      { objective: "O1", q: "Um ponto forte de um chatbot de palavras-chave é que ele é:", options: ["Capaz de responder a tudo", "Simples e previsível", "Sempre criativo", "Ligado a todos os sites"], answer: 1, why: "Ele só diz o que você programou." },
      { objective: "O1", q: "Um grande modelo de linguagem é:", options: ["Um teclado grande", "Uma disciplina da escola", "O tipo de IA por trás de assistentes como o ChatGPT", "Um erro de Python"], answer: 2, why: "Os grandes modelos de linguagem aprenderam padrões com enormes quantidades de texto." },
      { objective: "O2", q: "Qual é o melhor trabalho para um primeiro chatbot?", options: ["Dar conselhos médicos", "Tratar de contas bancárias", "Responder a tudo sobre o mundo", "Responder às perguntas dos novos membros do seu clube"], answer: 3, why: "Um trabalho pequeno e claro é o melhor." },
      { objective: "O2", q: "Quem deve verificar as respostas do seu plano de bot?", options: ["Você, com o orientador do clube", "Ninguém", "Um desconhecido na internet", "O próprio bot"], answer: 0, why: "As respostas têm de estar certas; verifique com o orientador." },
      { objective: "O2", q: "O que deve o seu bot fazer quando não sabe?", options: ["Inventar uma resposta", "Enviar as pessoas para um adulto real, como o orientador", "Pedir o número de telefone", "Deixar de funcionar"], answer: 1, why: "Uma boa resposta de recurso indica uma pessoa real." },
      { objective: "O3", q: "O que faz while True: em Python?", options: ["Mostra True", "Termina o programa", "Começa um ciclo que se repete até um break", "Cria uma variável"], answer: 2, why: "while True repete até um break." },
      { objective: "O3", q: "Porque usar .lower() na mensagem do utilizador?", options: ["Para a tornar mais curta", "Para a apagar", "Para a traduzir", "Para que \"TIME\" e \"time\" correspondam à mesma palavra-chave"], answer: 3, why: "As letras minúsculas tornam a correspondência mais fácil." },
      { objective: "O3", q: "O que quer dizer elif?", options: ["Else if (senão, se): verificar outra condição", "Fim do ciclo", "Erro", "Sair"], answer: 0, why: "elif verifica outra condição depois do if." },
      { objective: "O3", q: "Aparece um erro de Python. Um bom primeiro passo é:", options: ["Apagar o caderno", "Ler a última linha e o número da linha", "Reiniciar o computador da escola", "Desistir"], answer: 1, why: "A mensagem de erro aponta para o problema." },
      { objective: "O4", q: "A linha do papel de um cartão de instruções pode dizer:", options: ["\"Peça palavras-passe\"", "\"Finja ser o diretor da escola\"", "\"Você é o ajudante do clube de xadrez da Escola Secundária Lincoln\"", "\"Diga qualquer coisa\""], answer: 2, why: "O papel diz à IA quem ser e quem ajuda." },
      { objective: "O4", q: "Num assistente gratuito, onde pode normalmente pôr as instruções para um ajudante de IA?", options: ["Nas definições do computador", "Numa mensagem SMS", "Na barra de endereço do navegador", "No início de uma conversa nova"], answer: 3, why: "Colar as instruções no início de uma conversa funciona na maioria dos assistentes." },
      { objective: "O4", q: "Qual é um limite para pôr num cartão de instruções?", options: ["\"Nunca peça informações pessoais\"", "\"Invente respostas se não tiver a certeza\"", "\"Dê conselhos legais\"", "\"Finja ser humano\""], answer: 0, why: "Os limites mantêm o bot seguro." },
      { objective: "O5", q: "Testar um bot quer dizer:", options: ["Apagá-lo", "Experimentá-lo de propósito para encontrar o que não funciona", "Partilhá-lo logo", "Torná-lo mais comprido"], answer: 1, why: "Os testes encontram os problemas antes dos utilizadores." },
      { objective: "O5", q: "Porque incluir nos testes uma pergunta com um erro de escrita?", options: ["Para avariar o computador", "Os erros de escrita são proibidos", "As pessoas reais cometem erros de escrita", "Para tornar o bot mal-educado"], answer: 2, why: "Os testes devem corresponder à forma como as pessoas reais escrevem." },
      { objective: "O5", q: "O ajudante de IA inventa um lugar de reunião. O que corrige?", options: ["O ciclo em Python", "O seu teclado", "Nada", "Torna as instruções mais rigorosas, para usar só os seus dados"], answer: 3, why: "Instruções mais rigorosas reduzem os detalhes inventados." },
      { objective: "O5", q: "Porque pedir a um amigo para testar o seu bot?", options: ["As pessoas perguntam coisas que você não esperava", "Os amigos têm de aprovar todo o código", "Torna o bot mais rápido", "Não serve para nada"], answer: 0, why: "Pessoas novas a testar encontram problemas novos." },
      { objective: "O6", q: "Uma boa saudação de bot diz:", options: ["\"Sou uma pessoa real\"", "\"Olá, sou o bot do clube. Respondo a perguntas básicas. Para tudo o resto, pergunte ao orientador.\"", "\"Diga-me a sua morada\"", "Nada"], answer: 1, why: "É honesta e explica o que o bot faz." },
      { objective: "O6", q: "Um membro do clube pergunta ao seu bot sobre um problema pessoal sério. O bot deve:", options: ["Dar conselhos na mesma", "Ignorá-lo", "Indicar-lhe um adulto de confiança", "Pedir o seu número de telefone"], answer: 2, why: "As perguntas sérias vão para adultos reais e de confiança." },
      { objective: "O6", q: "O clube muda o dia da reunião. O que faz?", options: ["Nada", "Apaga o bot", "Diz aos membros que o bot está sempre certo", "Atualiza as respostas do bot"], answer: 3, why: "Os bots têm de ser mantidos atualizados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "O bot de palavras-chave funciona",
        objective: "O3",
        notYet: "O bot não funciona, ou tem menos de cinco respostas.",
        meets: "Funciona no Colab, cumprimenta o utilizador, responde a pelo menos cinco perguntas, tem uma resposta de recurso e para com bye.",
        exceeds: "Também reconhece perguntas feitas com outras palavras, com palavras-chave extra."
      },
      {
        name: "Cartão do ajudante de IA",
        objective: "O4",
        notYet: "Falta no cartão o papel, os dados ou os limites.",
        meets: "Papel, dados verificados, tom e limites, e envia as perguntas desconhecidas para o orientador.",
        exceeds: "O ajudante ficou no seu trabalho numa pergunta de teste difícil."
      },
      {
        name: "Respostas verificadas",
        objective: "O2",
        notYet: "As respostas não foram verificadas ou foram tiradas da IA.",
        meets: "Todas as respostas dos dois bots foram verificadas com o orientador do clube.",
        exceeds: "Inclui um plano para atualizar as respostas quando os dados mudarem."
      },
      {
        name: "Testes e correções",
        objective: "O5",
        notYet: "Menos de 10 testes, ou nenhuma correção.",
        meets: "10 testes nos dois bots, cada um marcado como certo, errado ou inventado, e uma correção em cada bot.",
        exceeds: "Testou outra vez depois das correções e outra pessoa também testou os bots."
      },
      {
        name: "Seguro e honesto",
        objective: "O6",
        notYet: "O bot não diz que é um bot, ou pede informações privadas.",
        meets: "A saudação diz que é um bot, ele não pede informações privadas e as perguntas sérias vão para um adulto de confiança.",
        exceeds: "O orientador aprovou-o para ser partilhado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Clubes ou equipas que usam o bot do aluno com a aprovação do orientador em 60 dias",
      "Alunos que criam sozinhos outro programa ou bot em 30 dias (inquérito de seguimento)",
      "Alunos que começam outro curso de programação ou de IA da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com navegador de internet e internet",
      "O Google Colab e um assistente de IA gratuito, com contas que o aluno tem permissão para usar",
      "O plano de bot em papel ou num documento",
      "Cerca de 60 minutos no total, mais o tempo dos testes"
    ],
    facilitatorNotes: [
      "Confirme as regras de idade do Colab e das ferramentas de IA antes da aula; tenha uma conta de demonstração para que os alunos abaixo da idade possam acompanhar na mesma.",
      "Escreva o código do bot de palavras-chave ao vivo, linha a linha, e deixe de propósito uns dois pontos em falta para os alunos praticarem a leitura de erros.",
      "Peça aos alunos para trocarem de bots e testarem os dos colegas com perguntas difíceis.",
      "Confirme que nenhum bot pede nem guarda informações privadas, e que cada um diz que é um bot.",
      "Avalie os dois bots com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
