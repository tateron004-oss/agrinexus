"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "smallbiz-intro-ai-pt",
  lang: "pt",
  translationOf: "smallbiz-intro-ai",
  category: "Small Business",
  name: "Introdução à IA para Pequenos Negócios",
  skills: "Explicar o que a IA pode fazer por um negócio, Identificar tarefas que poupam tempo, Escrever um pedido para o negócio, Verificar e editar rascunhos da IA, Proteger as informações dos clientes e do negócio",
  outcome: "usar um assistente de IA gratuito para terminar uma tarefa real do seu negócio, como um aviso para os clientes, a descrição de um produto ou uma lista de tarefas da semana: escrever um pedido claro com os dados do seu negócio, melhorar o rascunho, verificar cada dado e deixar de fora as informações privadas.",
  about: [
    "Este curso é para donos de pequenos negócios que já ouviram falar de IA mas ainda a usaram pouco: donos de lojas, restaurantes e carrinhas de comida, barbeiros e cabeleireiros, empresas de limpeza, empreiteiros e negócios feitos em casa. Muitos dos nossos alunos têm o seu primeiro negócio, são de grupos minoritários e fazem tudo sozinhos.",
    "Você vai aprender o que é um assistente de IA, que trabalhos do seu negócio ele pode tornar mais rápidos, como lhe pedir ajuda com os dados do seu negócio, como verificar o trabalho dele e como proteger as informações dos seus clientes.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" com o seu próprio negócio. Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escolha uma tarefa real do seu negócio desta semana (um aviso sobre o novo horário, a descrição de um produto, uma resposta a um cliente ou uma lista de tarefas). Use um assistente de IA gratuito para a fazer: escreva um pedido com os dados do seu negócio, peça pelo menos uma mudança, verifique você mesmo cada dado (preços, horário, morada), tire qualquer informação privada e use-a no seu negócio.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios que já ouviram falar de IA mas a usaram pouco: donos de lojas, restaurantes e carrinhas de comida, barbeiros e cabeleireiros, empresas de limpeza, empreiteiros e negócios feitos em casa. Muitos têm o seu primeiro negócio, são de grupos minoritários e fazem tudo sozinhos.",
    startingPoint: "Gerem o negócio no dia a dia e usam o telefone para chamadas, SMS e redes sociais. Usam pouco ou nada os assistentes de IA e não sabem bem o que é seguro partilhar com eles.",
    gap: "Os donos que fazem tudo sozinhos passam horas a escrever avisos, respostas e descrições. Precisam de usar um assistente de IA gratuito para terminar tarefas reais mais depressa, verificando cada dado e protegendo as informações dos clientes, para pouparem tempo sem prejudicar a sua reputação.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um smartphone ou um computador, muitas vezes usado entre um cliente e outro",
      "Tempo: lições de cerca de 5 minutos, que cabem num dia de trabalho cheio",
      "Regras: impostos, licenças e assuntos legais ficam com pessoas e fontes oficiais, não com a IA",
      "Privacidade: nenhum nome de cliente, número de telefone, número de cartão ou dado privado do negócio nas ferramentas de IA"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com exemplos de tarefas de um negócio", action: "explicar o que um assistente de IA pode e não pode fazer por um pequeno negócio", standard: "dizendo que ele escreve rascunhos e só conhece os dados do seu negócio se você os disser" },
    { id: "O2", condition: "Com as tarefas do seu negócio", action: "fazer a lista das tarefas que a IA pode tornar mais rápidas e das que precisam de pessoas ou de fontes oficiais", standard: "com pelo menos cinco tarefas \"Experimentar com a IA\" e três tarefas \"Pessoas e fontes oficiais\"" },
    { id: "O3", condition: "Com uma tarefa real do negócio", action: "escrever um pedido com os dados do seu negócio e como a resposta deve ser", standard: "para que a primeira resposta sirva para o seu negócio" },
    { id: "O4", condition: "Com um primeiro rascunho da IA", action: "pedir mudanças uma de cada vez e editar a versão final com as suas palavras", standard: "até ser algo que você usaria de verdade" },
    { id: "O5", condition: "Com um rascunho da IA para os clientes", action: "verificar cada dado e cada promessa antes de publicar, imprimir ou enviar", standard: "com preços, horário, morada e promessas verificados e tudo o que está errado corrigido ou tirado" },
    { id: "O6", condition: "Quando usa a IA no seu negócio", action: "deixar de fora da IA as informações privadas dos clientes e do negócio e reconhecer burlas de pagamento", standard: "usando marcadores e verificando os pedidos de pagamento com pressa num número que já conhece" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que a IA pode fazer pelo seu negócio",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é um assistente de IA, em termos de negócio",
          minutes: 4,
          goal: "Explicar o que um assistente de IA pode e não pode fazer por um pequeno negócio.",
          text: [
            "Um assistente de IA é um programa de computador com quem você pode escrever ou falar com palavras do dia a dia. Você pede uma coisa e ele escreve-a em segundos. Alguns gratuitos conhecidos são o ChatGPT, o Microsoft Copilot e o Google Gemini.",
            "Pense nele como um ajudante rápido para escrever e pensar. Pode fazer o rascunho de um panfleto, da descrição de um prato do menu, de uma resposta a uma avaliação, de uma tabela de preços, de uma publicação nas redes sociais ou de uma lista de passos para abrir a loja.",
            "Ele não é o seu contabilista, advogado nem sócio. Não conhece os seus preços, os seus clientes nem a sua cidade, a não ser que você lhe diga, e pode estar errado mesmo quando parece seguro. O dono continua a ser você: você decide o que usar."
          ],
          words: [["IA", "inteligência artificial: programas de computador que fazem tarefas que normalmente precisam de uma pessoa, como escrever."], ["Assistente de IA", "um programa de IA com quem você conversa, a escrever ou a falar, como o ChatGPT, o Copilot ou o Gemini."], ["Rascunho", "uma primeira versão que você vai verificar e mudar."]],
          slides: [
            { title: "Um assistente de IA é...", bullets: ["Um programa com quem conversa com palavras do dia a dia", "Um ajudante rápido para escrever e pensar", "Versões gratuitas: ChatGPT, Copilot, Gemini"] },
            { title: "Num pequeno negócio, ele faz rascunhos de", bullets: ["Panfletos, avisos e publicações nas redes sociais", "Descrições de pratos e de produtos", "Respostas a clientes e a avaliações", "Listas de tarefas e horários"] },
            { title: "Ele NÃO é", bullets: ["O seu contabilista, advogado ou sócio", "Conhecedor dos seus preços, se você não os disser", "Sempre certo: o dono é você"] }
          ],
          tryIt: "Escreva três trabalhos de escrita que fez para o seu negócio no mês passado, por exemplo um aviso, uma SMS a um cliente ou uma tabela de preços. Faça um círculo à volta do que demorou mais.",
          youCanNow: "dizer o que é um assistente de IA e dar exemplos de trabalhos de escrita do seu negócio em que ele pode ajudar.",
          quickCheck: [
            { objective: "O1", q: "Onde é que um assistente de IA obtém os preços e o horário do seu negócio?", options: ["Procura-os no seu banco", "Já os conhece sempre", "De você, quando você os diz", "Dos telefones dos seus clientes"], answer: 2, why: "Um assistente de IA só conhece os dados do seu negócio se você os der." },
            { objective: "O1", q: "A IA escreveu um aviso para a sua loja. Quem decide se o usa?", options: ["A empresa da IA", "Você, o dono", "Os seus clientes", "Ninguém; publica-se sozinho"], answer: 1, why: "Você é responsável por tudo o que o seu negócio mostra ao público." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar as tarefas que vale a pena dar à IA",
          minutes: 5,
          goal: "Fazer uma lista das tarefas do seu negócio que a IA pode tornar mais rápidas, e das que ela não deve tocar.",
          text: [
            "Boas tarefas para a IA são repetidas, escritas e de baixo risco: responder às mesmas perguntas, descrever produtos, escrever publicações, fazer horários e listas, resumir e-mails compridos ou transformar notas desarrumadas numa lista limpa.",
            "Não deixe a IA tomar as decisões finais sobre dinheiro, impostos, contratos, contratar e despedir pessoas, regras de saúde e segurança, e qualquer assunto legal. Ela pode ajudá-lo a preparar perguntas para o seu contabilista, mas não é o contabilista.",
            "Um teste simples: se um erro for fácil de ver e corrigir, a IA pode ajudar. Se um erro puder custar dinheiro, a confiança de um cliente ou uma multa, uma pessoa verifica, e você verifica a fonte oficial."
          ],
          steps: ["Faça a lista dos trabalhos que faz todas as semanas.", "Marque cada um: é repetido? é escrito? é de baixo risco?", "Ponha as tarefas com três respostas sim numa lista \"Experimentar com a IA\".", "Ponha as decisões de dinheiro, legais e de segurança numa lista \"Pessoas e fontes oficiais\"."],
          words: [["Tarefa de baixo risco", "uma tarefa em que um erro é fácil de ver e corrigir."], ["Tarefa repetida", "uma coisa que faz vezes sem conta, como responder à mesma pergunta."]],
          slides: [
            { title: "Boas tarefas para a IA", bullets: ["Repetidas: as mesmas perguntas todos os dias", "Escritas: publicações, descrições, respostas", "De baixo risco: os erros são fáceis de ver"] },
            { title: "Deixe com pessoas e fontes oficiais", bullets: ["Dinheiro, impostos e contratos", "Contratar e despedir", "Regras de saúde, segurança e legais"] },
            { title: "O teste rápido", bullets: ["Fácil de ver e corrigir? A IA pode ajudar", "Pode custar dinheiro, confiança ou uma multa? Uma pessoa verifica"] }
          ],
          tryIt: "Faça duas listas para o seu negócio: \"Experimentar com a IA\" (pelo menos cinco tarefas) e \"Pessoas e fontes oficiais\" (pelo menos três).",
          youCanNow: "separar as tarefas do seu negócio entre as que a IA pode ajudar e as que têm de ficar com pessoas.",
          quickCheck: [
            { objective: "O2", q: "Que tarefa é boa para a IA?", options: ["Decidir a sua declaração de impostos", "Assinar um contrato de arrendamento", "Escolher o tipo de licença do negócio", "Escrever a mesma resposta a uma pergunta comum dos clientes"], answer: 3, why: "As tarefas repetidas, escritas e de baixo risco são boas para dar à IA." },
            { objective: "O2", q: "Precisa de saber que licença a sua carrinha de comida precisa. O que faz?", options: ["Verifica a página ou o serviço oficial do governo", "Usa o que a IA disser", "Pergunta a um cliente", "Adivinha e corrige depois"], answer: 0, why: "Um erro pode custar uma multa, por isso uma pessoa verifica a fonte oficial." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever um pedido claro para o negócio",
          minutes: 5,
          goal: "Escrever um pedido com os dados do seu negócio para que a resposta sirva para o seu negócio.",
          text: [
            "O que você escreve a um assistente de IA chama-se pedido (em inglês, \"prompt\"). Quanto mais ele souber sobre o seu negócio, melhor a resposta serve. Um bom pedido para o negócio tem quatro partes: quem você é, o que precisa, para quem é e como deve ser.",
            "Exemplo: \"Sou dono de um pequeno restaurante caribenho em Fresno. Escreva um aviso curto para a porta da frente a dizer que fechamos às 8 da noite aos domingos a partir de 5 de maio. Tom simpático, menos de 30 palavras.\"",
            "Um pedido fraco como \"escreva um aviso\" obriga a IA a adivinhar. Acrescente os seus dados reais: o tipo de negócio, a sua cidade, o seu horário, o seu estilo. Deixe de fora os dados privados, como números do banco ou o número de telefone de um cliente."
          ],
          steps: ["Quem você é: o tipo de negócio e onde fica.", "O que precisa: a coisa exata.", "Para quem é: clientes, funcionários, um fornecedor.", "Como deve ser: tamanho, tom, lista ou parágrafo."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."], ["Tom", "como um texto soa: simpático, formal, divertido."]],
          slides: [
            { title: "Quatro partes de um pedido para o negócio", bullets: ["1. Quem você é", "2. O que precisa", "3. Para quem é", "4. Como deve ser"] },
            { title: "Exemplo", bullets: ["\"Sou dono de um pequeno restaurante caribenho em Fresno.", "Escreva um aviso para a porta: fechamos às 8 da noite aos domingos a partir de 5 de maio.", "Tom simpático, menos de 30 palavras.\""] },
            { title: "Fraco e claro", bullets: ["Fraco: \"escreva um aviso\"", "Claro: o seu negócio, os dados, o estilo", "Nunca: números do banco ou telefones de clientes"] }
          ],
          tryIt: "Escolha uma tarefa da sua lista \"Experimentar com a IA\". Escreva um pedido com as quatro partes, envie-o a um assistente de IA gratuito e leia a resposta.",
          youCanNow: "escrever um pedido para o negócio com quem você é, o que precisa, para quem é e como deve ser.",
          quickCheck: [
            { objective: "O3", q: "O que é um pedido (prompt)?", options: ["Uma fatura da empresa da IA", "O que você escreve para pedir alguma coisa à IA", "Um aviso na sua montra", "A avaliação de um cliente"], answer: 1, why: "O pedido é aquilo que você pede à IA." },
            { objective: "O3", q: "Quer um aviso sobre o horário do feriado. Que pedido escreve?", options: ["\"Faça um aviso.\"", "\"Horário.\"", "\"Tenho uma padaria em Fresno. Escreva um aviso curto: fechado na quinta-feira por ser feriado. Simpático, menos de 20 palavras.\"", "\"Escreva uma coisa boa.\""], answer: 2, why: "O tipo de negócio, a cidade, a tarefa e o estilo dão à IA o que ela precisa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que a IA pode fazer pelo seu negócio",
        questions: [
          { objective: "O1", q: "O que é um assistente de IA?", options: ["Um novo funcionário", "Um programa com quem conversa e que escreve rascunhos", "Um banco", "Uma caixa registadora"], answer: 1, why: "É um programa de computador a quem você escreve ou fala." },
          { objective: "O2", q: "Que tarefa é boa para dar a um assistente de IA?", options: ["Decidir se assina um contrato de arrendamento", "Despedir um funcionário", "Fazer a declaração de impostos sozinho", "Fazer o rascunho da descrição de um produto"], answer: 3, why: "As descrições de produtos são escritas, repetidas e de baixo risco." },
          { objective: "O2", q: "Um erro pode custar-lhe uma multa. O que faz?", options: ["Pede a uma pessoa para verificar na fonte oficial", "Deixa a IA decidir", "Ignora", "Pergunta à IA duas vezes"], answer: 0, why: "As tarefas de alto risco precisam de uma pessoa e de uma fonte oficial." },
          { objective: "O3", q: "Qual é o pedido mais claro para o negócio?", options: ["\"aviso\"", "\"ajude o meu negócio\"", "\"Tenho uma barbearia em Oakland. Escreva um aviso curto: fechado na segunda-feira, 4 de julho. Simpático, menos de 25 palavras.\"", "\"escreva alguma coisa\""], answer: 2, why: "Diz quem você é, o que precisa, para quem é e como deve ser." },
          { objective: "O6", q: "O que deve deixar de fora de um pedido?", options: ["O tipo do seu negócio", "A sua cidade", "O número de telefone de um cliente", "O tom que quer"], answer: 2, why: "Os dados privados dos clientes ficam fora das ferramentas de IA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a IA com segurança e bem",
      lessons: [
        {
          objectives: ["O4"],
          title: "Melhorar o rascunho",
          minutes: 4,
          goal: "Usar pedidos de seguimento para transformar um primeiro rascunho em algo que você usaria de verdade.",
          text: [
            "A primeira resposta é um rascunho. Na mesma conversa, o assistente lembra-se do que você pediu, por isso pode dizer-lhe o que mudar.",
            "Pedidos de seguimento úteis para um negócio: \"Faça mais curto.\" \"Soe mais caloroso.\" \"Acrescente o nosso horário.\" \"Dê-me três versões.\" \"Escreva também em espanhol.\" \"Use palavras mais simples.\"",
            "Depois torne-o seu. Mude palavras para soar como você e a sua loja. Os clientes conhecem a sua maneira de falar; a versão final também deve ter essa maneira."
          ],
          steps: ["Leia o rascunho em voz alta.", "Escolha uma coisa para mudar e peça-a.", "Repita até funcionar.", "Edite a última versão com as suas palavras."],
          words: [["Pedido de seguimento", "um segundo pedido que parte da resposta que recebeu."], ["Versão", "uma de várias maneiras de escrever a mesma coisa."]],
          slides: [
            { title: "A primeira resposta é um rascunho", bullets: ["A conversa lembra-se do seu pedido", "Peça uma mudança de cada vez"] },
            { title: "Pedidos de seguimento para o negócio", bullets: ["\"Faça mais curto.\" \"Soe mais caloroso.\"", "\"Dê-me três versões.\"", "\"Escreva também em espanhol.\""] },
            { title: "Torne-o seu", bullets: ["Leia em voz alta", "Mude palavras para soar como você", "Os clientes conhecem a sua maneira de falar"] }
          ],
          tryIt: "Pegue na resposta da Lição 3. Peça duas mudanças, uma de cada vez, e depois edite a última versão para soar como você.",
          youCanNow: "melhorar um rascunho da IA com pedidos de seguimento e fazê-lo soar como o seu negócio.",
          quickCheck: [
            { objective: "O4", q: "Como deve tratar a primeira resposta da IA?", options: ["Como um rascunho que pode melhorar", "Como um trabalho acabado", "Como um facto que não pode mudar", "Como algo para publicar já"], answer: 0, why: "A primeira resposta é um rascunho que você molda com pedidos de seguimento." },
            { objective: "O4", q: "A descrição de produto feita pela IA é boa, mas soa rígida. O que faz?", options: ["Usa-a como está", "Começa de novo com outra ferramenta de IA", "Pede muitas mudanças numa só mensagem comprida", "Pede uma mudança e depois edita-a com as suas palavras"], answer: 3, why: "Uma mudança de cada vez e as suas próprias correções fazem-na soar como você." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar os dados antes de os clientes os verem",
          minutes: 5,
          goal: "Verificar cada dado de um rascunho da IA antes de o publicar, imprimir ou enviar.",
          text: [
            "A IA pode inventar coisas: um preço errado, um horário errado, uma promoção que você nunca planeou ou uma regra que não existe. A isto chama-se \"alucinação\". Se for parar ao seu aviso ou ao seu site, os clientes vão exigir que cumpra.",
            "Antes de usar qualquer coisa, verifique: preços, datas e horário, a sua morada e telefone, promessas (\"entrega grátis\", \"garantido\") e qualquer regra sobre licenças, impostos ou saúde. Compare com os seus próprios registos.",
            "Para regras e leis, a IA não é a fonte. Verifique a página oficial do governo (muitas vezes acaba em .gov) ou pergunte ao seu contabilista, aos serviços da sua cidade ou a um conselheiro gratuito para pequenos negócios, como o SCORE ou um Small Business Development Center (centro de apoio a pequenos negócios dos EUA)."
          ],
          steps: ["Sublinhe cada número, data, nome e promessa.", "Compare cada um com os seus próprios registos.", "Verifique qualquer regra ou lei na página oficial .gov.", "Apague qualquer promessa que não planeou fazer."],
          words: [["Alucinação", "quando a IA escreve algo que parece verdade mas é inventado."], ["Fonte oficial", "o serviço do governo ou a empresa que realmente define a regra ou o preço."]],
          slides: [
            { title: "A IA pode inventar coisas", bullets: ["Preços ou horários errados", "Promoções ou promessas que nunca planeou", "Regras que não existem"] },
            { title: "Verifique antes de os clientes verem", bullets: ["Preços, datas, horário", "Morada e telefone", "Promessas como \"grátis\" ou \"garantido\""] },
            { title: "Regras e leis", bullets: ["Verifique a página oficial .gov", "Pergunte ao seu contabilista ou aos serviços da cidade", "Ajuda gratuita: SCORE ou um SBDC"] }
          ],
          tryIt: "Peça a um assistente de IA para escrever um parágrafo curto \"Quem somos\" sobre o seu negócio. Sublinhe cada dado e cada promessa, verifique cada um e corrija ou apague o que está errado.",
          youCanNow: "encontrar e verificar cada dado e cada promessa de um rascunho da IA antes de os clientes o verem.",
          quickCheck: [
            { objective: "O5", q: "O que é uma alucinação da IA?", options: ["Uma imagem colorida feita pela IA", "Um dado inventado que parece verdade", "Uma resposta lenta", "Um erro de ortografia"], answer: 1, why: "A IA pode inventar dados que parecem reais, por isso você verifica-os." },
            { objective: "O5", q: "O \"Quem somos\" da IA diz que a sua loja abriu em 1995, mas abriu em 2015. O que faz?", options: ["Deixa; os clientes não vão reparar", "Pergunta à IA se tem a certeza", "Corrige o ano antes de publicar", "Apaga o parágrafo inteiro"], answer: 2, why: "Cada dado de um rascunho para os clientes tem de ser verificado e corrigido." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger as informações dos clientes e do negócio",
          minutes: 5,
          goal: "Usar a IA no seu negócio sem partilhar informações privadas dos clientes ou do negócio.",
          text: [
            "Não cole informações privadas num assistente de IA: nomes de clientes com números de telefone ou moradas, números de cartão ou do banco, palavras-passe, números da Segurança Social (Social Security) dos funcionários ou dados privados de saúde. Pode ter a ajuda de que precisa sem eles. Escreva \"[nome do cliente]\" no lugar.",
            "Leia as definições de privacidade da ferramenta que usa. Algumas ferramentas deixam desligar o uso das suas conversas para treino. As versões para empresas de algumas ferramentas dão mais proteção; verifique a página oficial da empresa antes de contar com isso.",
            "Os burlões também usam IA: faturas falsas, e-mails falsos de fornecedores e chamadas falsas. Se uma mensagem o apressar a pagar ou a mudar os dados do banco, pare e ligue de volta para o fornecedor num número que já conhece."
          ],
          steps: ["Antes de enviar um pedido, leia-o para encontrar dados privados.", "Troque-os por marcadores como \"[nome do cliente]\".", "Verifique as definições de privacidade da ferramenta.", "Antes de pagar qualquer pedido com pressa, ligue de volta para um número conhecido."],
          words: [["Marcador", "uma palavra no lugar de outra, como \"[nome do cliente]\", usada em vez dos dados privados verdadeiros."], ["Definições de privacidade", "as escolhas numa ferramenta sobre o que ela guarda e como usa os seus dados."]],
          slides: [
            { title: "Nunca cole na IA", bullets: ["Telefones e moradas de clientes", "Números de cartão e do banco e palavras-passe", "Números de identificação ou dados de saúde dos funcionários"] },
            { title: "Use marcadores", bullets: ["\"[nome do cliente]\" em vez do nome verdadeiro", "Mesmo assim tem a ajuda de que precisa"] },
            { title: "Definições e burlas", bullets: ["Verifique as definições de privacidade da ferramenta", "Faturas e e-mails falsos de fornecedores são comuns", "Ligue de volta para um número conhecido antes de pagar"] }
          ],
          tryIt: "Tarefa final: escolha uma tarefa real do seu negócio desta semana. Use um assistente de IA gratuito para a fazer com um pedido de quatro partes, peça pelo menos uma mudança, verifique você mesmo cada dado, tire qualquer informação privada e ponha-a em uso.",
          youCanNow: "usar a IA numa tarefa real do negócio mantendo seguras as informações dos clientes e do negócio.",
          quickCheck: [
            { objective: "O6", q: "O que é um marcador?", options: ["Uma palavra no lugar de outra, como \"[nome do cliente]\"", "O número de telefone verdadeiro de um cliente", "Uma palavra-passe", "Um tipo de ferramenta de IA"], answer: 0, why: "Os marcadores deixam você ter ajuda sem partilhar dados privados." },
            { objective: "O6", q: "Alguém liga e diz que tem de pagar hoje uma fatura em atraso com cartões-presente. O que faz?", options: ["Paga depressa para evitar problemas", "Dá-lhe antes o número do seu cartão", "Pede à IA para pagar", "Desliga e liga para o fornecedor num número que já conhece"], answer: 3, why: "Pedidos de pagamento com pressa e com cartões-presente são um sinal de alerta de burla." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a IA com segurança e bem",
        questions: [
          { objective: "O4", q: "O aviso da IA é comprido demais. O que pede?", options: ["\"Faça mais curto.\"", "\"Apague a minha conta.\"", "\"Acrescente o meu número do banco.\"", "Nada; imprime-o"], answer: 0, why: "Um pedido de seguimento pede a mudança que você quer." },
          { objective: "O5", q: "O rascunho da IA diz \"Entrega grátis em todas as encomendas\", mas você nunca ofereceu isso. O que faz?", options: ["Deixa; soa bem", "Pergunta à IA se é verdade", "Publica e vê o que acontece", "Apaga a promessa antes de usar o rascunho"], answer: 3, why: "Os clientes podem exigir que cumpra as promessas do seu aviso ou do seu site." },
          { objective: "O5", q: "Onde verifica uma regra sobre licenças de negócio?", options: ["Na resposta da IA", "Na página ou no serviço oficial do governo", "Numa publicação nas redes sociais", "Num concorrente"], answer: 1, why: "As regras vêm da fonte oficial." },
          { objective: "O6", q: "O que escreve em vez do nome e do telefone verdadeiros de um cliente?", options: ["Um marcador como \"[nome do cliente]\"", "Os dados verdadeiros", "O número do cartão dele", "Nada; nunca mais usa a IA"], answer: 0, why: "Os marcadores deixam as informações privadas de fora." },
          { objective: "O6", q: "Um e-mail \"do seu fornecedor\" diz para pagar hoje para uma nova conta bancária. O que faz?", options: ["Paga já", "Responde com a sua palavra-passe", "Liga de volta para o fornecedor num número que já conhece", "Reencaminha-o para os clientes"], answer: 2, why: "Mudanças de pagamento com pressa são uma burla comum." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à IA para Pequenos Negócios",
    questions: [
      { objective: "O1", q: "Qual é um assistente de IA gratuito?", options: ["Uma caixa registadora", "Microsoft Copilot", "Um leitor de códigos de barras", "Uma impressora de recibos"], answer: 1, why: "O Copilot, o ChatGPT e o Gemini são assistentes conhecidos." },
      { objective: "O1", q: "Um assistente de IA conhece os seus preços:", options: ["Sempre", "Pela sua cidade", "Pelo seu banco", "Só se você lhe disser"], answer: 3, why: "Ele não conhece o seu negócio a não ser que você lhe diga." },
      { objective: "O1", q: "Quem toma a decisão final sobre o trabalho da IA para o seu negócio?", options: ["A IA", "Os seus clientes", "A loja de aplicações", "Você, o dono"], answer: 3, why: "O dono continua a ser você e decide o que usar." },
      { objective: "O2", q: "Qual é uma tarefa repetida, escrita e de baixo risco?", options: ["Assinar um contrato de arrendamento", "Responder todos os dias à mesma pergunta dos clientes", "Pagar os impostos sobre salários", "Escolher um advogado"], answer: 1, why: "As respostas escritas e repetidas são boas tarefas para a IA." },
      { objective: "O2", q: "Qual pertence à lista \"Pessoas e fontes oficiais\"?", options: ["Publicações nas redes sociais", "Descrições do menu", "Decisões sobre impostos", "Listas de passos para abrir"], answer: 2, why: "As decisões de dinheiro e de impostos precisam de pessoas e de fontes oficiais." },
      { objective: "O2", q: "O teste rápido diz que a IA pode ajudar quando um erro é:", options: ["Fácil de ver e corrigir", "Caro", "Legal", "Escondido"], answer: 0, why: "As tarefas de baixo risco são seguras para experimentar com a IA." },
      { objective: "O3", q: "O que é um pedido (prompt)?", options: ["Um recibo", "Uma multa por atraso", "O que você escreve para pedir alguma coisa à IA", "Uma entrega"], answer: 2, why: "O pedido é aquilo que você pede." },
      { objective: "O3", q: "Que parte diz à IA o estilo que quer?", options: ["Como deve ser", "Quem você é", "O seu banco", "A sua palavra-passe"], answer: 0, why: "\"Como deve ser\" inclui o tamanho e o tom." },
      { objective: "O3", q: "Porque pôr o tipo do seu negócio e a sua cidade num pedido?", options: ["Para o tornar mais lento", "Para a resposta servir para o seu negócio", "É obrigatório por lei", "Para a IA lhe cobrar"], answer: 1, why: "Os dados fazem a resposta servir." },
      { objective: "O4", q: "A melhor maneira de tratar a primeira resposta da IA é como:", options: ["Final", "Uma lei", "Um contrato", "Um rascunho"], answer: 3, why: "Você melhora-a e verifica-a antes de a usar." },
      { objective: "O4", q: "Que pedido de seguimento ajuda clientes que falam espanhol?", options: ["\"Escreva também em espanhol.\"", "\"Acrescente a minha palavra-passe.\"", "\"Faça mais comprido.\"", "\"Apague.\""], answer: 0, why: "A IA pode fazer rascunhos noutras línguas; peça a alguém que fale bem a língua para verificar." },
      { objective: "O4", q: "Porque editar a última versão com as suas palavras?", options: ["Não serve para nada", "Para esconder erros", "Para a tornar mais comprida", "Para soar como você e o seu negócio"], answer: 3, why: "Os clientes conhecem a sua maneira de falar." },
      { objective: "O5", q: "O que é uma alucinação da IA?", options: ["Um problema do ecrã", "Uma ligação à internet lenta", "Um dado inventado que parece verdade", "Um tipo de aplicação"], answer: 2, why: "A IA pode inventar dados." },
      { objective: "O5", q: "O que tem de verificar antes de publicar um rascunho da IA?", options: ["Só a ortografia", "Preços, horário, morada e promessas", "Nada", "Só o tipo de letra"], answer: 1, why: "Dados ou promessas errados prejudicam a confiança." },
      { objective: "O5", q: "Entre os conselheiros gratuitos para pequenos negócios estão:", options: ["A própria IA", "Anúncios que aparecem no ecrã", "Fóruns quaisquer", "O SCORE e os Small Business Development Centers"], answer: 3, why: "O SCORE e os SBDC dão conselhos gratuitos." },
      { objective: "O6", q: "O que NUNCA deve colar numa ferramenta de IA?", options: ["\"Faça mais simpático\"", "O tipo do seu negócio", "O número do cartão de um cliente", "O seu horário de abertura"], answer: 2, why: "Os números de cartão são privados." },
      { objective: "O6", q: "Um marcador é:", options: ["Uma palavra no lugar de outra, como \"[nome do cliente]\"", "Um número de telefone verdadeiro", "Uma palavra-passe", "Um preço"], answer: 0, why: "Os marcadores ficam no lugar dos dados privados." },
      { objective: "O6", q: "Antes de contar com as promessas de privacidade de uma ferramenta, deve:", options: ["Adivinhar", "Verificar as definições e a página oficial da empresa", "Perguntar a um cliente", "Ignorar a privacidade"], answer: 1, why: "As definições e as páginas oficiais dizem o que a ferramenta guarda." },
      { objective: "O6", q: "Alguém liga e apressa-o a pagar uma \"fatura em atraso\" com cartões-presente. Isto é:", options: ["Normal nos negócios", "Um sinal de alerta de burla", "Uma regra dos impostos", "Um desconto"], answer: 1, why: "A pressa e os cartões-presente são sinais de burla." },
      { objective: "O6", q: "A melhor maneira de verificar um pedido de pagamento com pressa de um fornecedor é:", options: ["Ligar para o fornecedor num número que já conhece", "Responder ao mesmo e-mail", "Pagar metade", "Perguntar à IA"], answer: 0, why: "Um número conhecido chega ao fornecedor verdadeiro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 4, 6, 8, 9, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pedido claro para o negócio", objective: "O3", notYet: "O pedido é vago, por exemplo \"faça um aviso\".", meets: "O pedido tem o tipo de negócio, a tarefa, os seus dados e como deve ser.", exceeds: "A primeira resposta ficou quase pronta porque o pedido era muito claro." },
      { name: "Melhorou o rascunho", objective: "O4", notYet: "Usou o primeiro rascunho como estava.", meets: "Pediu pelo menos uma mudança e editou o resultado para soar como você.", exceeds: "Pediu duas ou mais mudanças, uma de cada vez, e sabe dizer o que cada uma corrigiu." },
      { name: "Dados verificados", objective: "O5", notYet: "Um preço, um horário, uma morada ou uma promessa não foi verificado.", meets: "Cada dado e cada promessa foi verificado, e corrigido ou tirado se estava errado.", exceeds: "Sabe dizer onde verificou cada dado." },
      { name: "Informações privadas de fora", objective: "O6", notYet: "O pedido tem o nome, o número ou outro dado privado de um cliente.", meets: "Nenhuma informação privada de clientes ou do negócio no pedido.", exceeds: "Usou marcadores e só os preencheu na versão final." },
      { name: "Posto em uso", objective: "O2", notYet: "A tarefa não é uma tarefa real do negócio, ou não foi usada.", meets: "Uma tarefa real do negócio foi terminada e usada.", exceeds: "O dono escolheu uma tarefa da lista \"Experimentar com a IA\" e anotou o tempo poupado." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que dizem usar a IA em pelo menos uma tarefa do negócio por semana (inquérito de seguimento aos 30 dias)",
      "Donos que dizem poupar tempo nas tarefas de escrita (inquérito de seguimento)",
      "Donos que começam outro curso da Koach Learn sobre pequenos negócios em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou um computador com internet",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Uma tarefa real do negócio para esta semana, como um aviso ou uma resposta a um cliente",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada dono para trazer uma tarefa real, para que a tarefa final lhe poupe tempo logo.",
      "Nunca peça aos donos para escrever nomes, números ou dados de cartão verdadeiros de clientes; pratique com marcadores.",
      "Envie as perguntas sobre impostos, licenças e assuntos legais para as fontes oficiais, o SCORE ou um Small Business Development Center.",
      "Junte donos de tipos de negócio diferentes para verem mais maneiras de usar a IA.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
