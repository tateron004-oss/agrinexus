"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-digital-empowerment.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: Lifeline, SNAP, Medicaid, 211 and .gov stay as US names, with short explanations.

module.exports = {
  id: "underserved-ai-digital-empowerment-pt",
  lang: "pt",
  translationOf: "underserved-ai-digital-empowerment",
  category: "Undeserved Community",
  name: "Introdução à IA e Autonomia Digital",
  skills: "Ter acesso à internet de graça ou a baixo custo, Abrir um assistente de IA gratuito, Pedir ajuda com palavras simples, Transformar uma carta difícil numa lista de tarefas, Verificar respostas e proteger as suas informações",
  outcome: "ter acesso à internet numa biblioteca, num centro comunitário ou no seu telefone, e usar um assistente de IA gratuito para transformar uma carta ou um aviso confuso em palavras simples e numa lista curta de tarefas, sem partilhar informações privadas.",
  about: [
    "Este curso é para quem sente que ficou para trás com a tecnologia, ou a quem disseram que os computadores e a IA \"não são para pessoas como nós\". São para você, e muitas das melhores ferramentas são gratuitas.",
    "Você vai encontrar maneiras gratuitas ou baratas de ter acesso à internet, abrir um assistente de IA gratuito e usá-lo em tarefas reais da família: ler uma carta difícil, planear uma semana cheia ou escrever uma mensagem para uma escola ou um senhorio.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Pegue numa carta ou num aviso verdadeiro que recebeu (de uma escola, clínica, senhorio ou empresa de água, luz ou gás). Tape ou deixe de fora todos os números e nomes privados. Peça a um assistente de IA gratuito para a explicar com palavras simples e fazer uma lista curta de tarefas com datas. Depois verifique uma data ou um número de telefone no site oficial ou ligando para o serviço.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos de comunidades desfavorecidas que sentem que ficaram para trás com a tecnologia: famílias com poucos rendimentos, pessoas mais velhas, pais e mães, pessoas sem computador em casa e pessoas que falam o inglês como segunda língua.",
    startingPoint: "Sabem fazer chamadas e enviar SMS num telefone. Usam pouco ou nada computadores, navegadores de internet ou assistentes de IA, e a alguns disseram que a tecnologia \"não é para pessoas como nós\".",
    gap: "As escolas, as clínicas, os senhorios e os serviços enviam cartas e esperam que as pessoas tratem das coisas pela internet. Os alunos precisam de um lugar gratuito para ter acesso à internet e de uma maneira segura de usar um assistente de IA gratuito para perceber as cartas e planear o que fazer, sem serem enganados por respostas erradas ou burlas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: talvez só um telefone simples ou um computador da biblioteca com tempo limitado",
      "Custo: só ferramentas gratuitas e lugares gratuitos para ter acesso à internet",
      "Risco alto de burlas e de perda de privacidade: nenhum número ou nome privado verdadeiro nas tarefas de prática",
      "Tempo: lições curtas que cabem entre o trabalho, a família e as consultas"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "No lugar onde vive", action: "dizer lugares gratuitos para ter acesso à internet e um programa que pode baixar a sua conta de telefone ou de internet", standard: "dizendo pelo menos dois lugares com os seus horários" },
    { id: "O2", condition: "Com uma lista de tarefas do dia a dia", action: "identificar em quais um assistente de IA pode ajudar e quem decide o que fazer com a resposta dele", standard: "acertando pelo menos 4 de 5" },
    { id: "O3", condition: "Usando um computador da biblioteca ou um telefone", action: "abrir um assistente de IA gratuito a partir da sua aplicação ou site oficial e fazer uma pergunta com o que precisa, a sua situação e como quer a resposta", standard: "sem ajuda" },
    { id: "O4", condition: "Com uma carta ou um aviso confuso", action: "pedir a um assistente de IA para o explicar com palavras simples e fazer uma lista de tarefas com datas, usando marcadores no lugar dos dados privados", standard: "sem nenhum nome ou número verdadeiro no pedido" },
    { id: "O5", condition: "Com uma resposta da IA que tem uma data, um número de telefone ou uma regra", action: "verificá-la na carta, no site oficial .gov, no serviço ou no 211", standard: "antes de agir" },
    { id: "O6", condition: "Quando escreve um pedido ou recebe uma mensagem urgente", action: "deixar de fora as informações privadas e reconhecer os sinais de alerta de uma burla", standard: "sem partilhar números privados e contactando os serviços só por um número ou site que você mesmo encontrou" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ligar-se à internet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Maneiras gratuitas e baratas de ter acesso à internet",
          minutes: 5,
          goal: "Dizer dois lugares perto de você onde pode usar a internet de graça, e um programa que pode baixar a sua conta de telefone ou de internet.",
          text: [
            "Não precisa de ter um computador para usar a tecnologia. As bibliotecas públicas têm computadores gratuitos e Wi-Fi gratuito, e muitas também emprestam computadores portáteis ou hotspots. Os centros comunitários, os centros de emprego e algumas igrejas também têm computadores que pode usar.",
            "O Lifeline é um programa federal dos Estados Unidos que baixa o custo mensal do telefone ou da internet para pessoas com poucos rendimentos ou que participam em programas como o SNAP (ajuda para comprar comida) ou o Medicaid (seguro de saúde público). Você faz o pedido pela internet e depois escolhe uma empresa de telefone ou de internet que participa.",
            "Os funcionários da biblioteca podem ajudar você a começar. Pedir ajuda é normal; ajudar as pessoas com os computadores faz parte do trabalho deles."
          ],
          steps: ["Procure a biblioteca pública mais perto de você e o seu horário.", "Pergunte se empresta computadores portáteis ou hotspots, e se tem aulas de informática gratuitas.", "Se o dinheiro estiver apertado, leia sobre o Lifeline no site oficial e veja se tem direito.", "Escreva o lugar e a hora em que vai usar a internet esta semana."],
          words: [["Wi-Fi", "uma maneira de se ligar à internet sem cabo."], ["Hotspot", "um pequeno aparelho (ou uma opção do telefone) que partilha uma ligação à internet com outros aparelhos."], ["Lifeline", "um programa federal dos Estados Unidos que dá um desconto mensal no telefone ou na internet a quem tem direito."]],
          sources: [{ name: "Lifeline Support (USAC, o site oficial do Lifeline)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Pode usar a internet sem ter computador", bullets: ["Bibliotecas públicas: computadores e Wi-Fi gratuitos", "Centros comunitários e centros de emprego", "Algumas bibliotecas emprestam portáteis e hotspots"] },
            { title: "Baixe a sua conta de telefone ou internet", bullets: ["O Lifeline dá um desconto mensal a quem tem direito", "Pode ter direito pelos rendimentos, pelo SNAP ou pelo Medicaid", "Faça o pedido no site oficial do Lifeline"] },
            { title: "Peça ajuda", bullets: ["Os funcionários da biblioteca ajudam com computadores todos os dias", "Pergunte por aulas de informática gratuitas", "Pedir ajuda é uma escolha inteligente, não uma fraqueza"] }
          ],
          tryIt: "Escreva dois lugares perto de você onde pode usar a internet de graça, com os seus horários. Se for difícil pagar a sua conta de telefone ou de internet, abra lifelinesupport.org e leia quem tem direito.",
          youCanNow: "dizer lugares gratuitos para ter acesso à internet e saber onde aprender sobre o Lifeline.",
          quickCheck: [
            { objective: "O1", q: "O que é um hotspot que algumas bibliotecas emprestam?", options: ["Um pequeno aparelho que deixa você entrar na internet", "Um aquecedor para salas frias", "Um plano de telefone gratuito", "Uma aula de informática"], answer: 0, why: "Um hotspot é um pequeno aparelho que lhe dá internet para poder usá-la fora da biblioteca." },
            { objective: "O1", q: "É difícil pagar a sua conta de internet e recebe o SNAP. O que faz?", options: ["Cancela a internet de vez", "Lê sobre o Lifeline no site oficial para ver se tem direito", "Pede a um desconhecido na internet para pagar", "Espera que a empresa lhe telefone"], answer: 1, why: "O Lifeline baixa o custo mensal para pessoas com poucos rendimentos ou em programas como o SNAP." }
          ]
        },
        {
          objectives: ["O2"],
          title: "O que é a IA, em palavras do dia a dia",
          minutes: 4,
          goal: "Explicar o que é um assistente de IA e dizer três maneiras de ele ajudar a sua família.",
          text: [
            "IA quer dizer inteligência artificial. Um assistente de IA é um programa a quem pode escrever, ou com quem pode falar, com as suas palavras. Ele escreve uma resposta em segundos. Alguns gratuitos são o ChatGPT, o Microsoft Copilot e o Google Gemini.",
            "Ele pode explicar uma carta difícil, escrever uma mensagem curta, planear refeições com pouco dinheiro, ajudar uma criança a perceber os trabalhos de casa ou traduzir de uma língua para outra.",
            "Ele é um ajudante, não um chefe. Não conhece a sua vida e às vezes erra nos dados. Você decide o que perguntar e o que usar."
          ],
          words: [["IA", "inteligência artificial: programas de computador que fazem tarefas como escrever e responder a perguntas."], ["Assistente de IA", "um programa de IA com quem você conversa, a escrever ou a falar."]],
          slides: [
            { title: "Um assistente de IA é um ajudante", bullets: ["Você escreve ou fala com as suas palavras", "Ele escreve uma resposta em segundos", "Gratuitos: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Maneiras de ajudar a sua família", bullets: ["Explicar uma carta difícil", "Planear refeições com pouco dinheiro", "Ajudar com dúvidas dos trabalhos de casa", "Traduzir uma mensagem"] },
            { title: "Quem manda é você", bullets: ["Ele não conhece a sua vida", "Ele pode errar nos dados", "Você decide o que perguntar e o que usar"] }
          ],
          tryIt: "Escreva três tarefas da sua semana em que um assistente de IA pode ajudar você, a sua família ou o seu grupo da comunidade.",
          youCanNow: "dizer o que é um assistente de IA e dar três maneiras de ele ajudar você.",
          quickCheck: [
            { objective: "O2", q: "O que é um assistente de IA?", options: ["Uma pessoa que lê o seu correio", "Um serviço do governo", "Um programa a quem escreve ou fala com as suas palavras", "Uma empresa de telefones"], answer: 2, why: "Um assistente de IA é um programa que escreve uma resposta quando você pergunta com as suas palavras." },
            { objective: "O2", q: "O seu filho está com dificuldade nos trabalhos de casa. Como pode um assistente de IA ajudar?", options: ["Fazer o teste todo por ele", "Assinar os papéis da escola", "Telefonar ao professor por você", "Explicar o assunto com palavras mais simples"], answer: 3, why: "A IA pode explicar as coisas com palavras mais simples; você e o seu filho continuam a mandar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Abrir um assistente de IA gratuito e fazer a primeira pergunta",
          minutes: 5,
          goal: "Abrir um assistente de IA gratuito e fazer-lhe uma pergunta clara sobre uma tarefa real.",
          text: [
            "Num computador da biblioteca ou de um centro comunitário, abra o navegador de internet e vá a copilot.microsoft.com, chatgpt.com ou gemini.google.com. Num telefone, instale a aplicação oficial a partir da loja de aplicações.",
            "Procure a caixa onde se escreve. Faça a pergunta como a faria a um vizinho prestável: diga o que precisa, um pouco sobre a sua situação e como quer a resposta.",
            "Por exemplo: \"Tenho $60 para as compras de comida esta semana para uma família de quatro pessoas. Dê-me cinco ideias de jantares baratos com uma lista de compras. Use palavras simples.\""
          ],
          steps: ["Abra o navegador ou a aplicação oficial.", "Encontre a caixa de mensagem.", "Escreva o que precisa, a sua situação (sem dados privados) e como quer a resposta.", "Carregue em Enter ou toque na seta de enviar e depois leia a resposta."],
          words: [["Navegador de internet", "o programa que usa para visitar sites, como o Chrome, o Edge ou o Safari."], ["Pedido (prompt)", "a pergunta ou o pedido que você escreve a um assistente de IA."]],
          slides: [
            { title: "Abra-o", bullets: ["Computador: copilot.microsoft.com, chatgpt.com ou gemini.google.com", "Telefone: a aplicação oficial da loja de aplicações"] },
            { title: "Pergunte como a um vizinho", bullets: ["O que você precisa", "Um pouco sobre a sua situação", "Como quer a resposta"] },
            { title: "Exemplo", bullets: ["\"Tenho $60 para as compras de uma família de quatro.", "Dê-me cinco jantares baratos e uma lista de compras.", "Use palavras simples.\""] }
          ],
          tryIt: "Abra um assistente de IA gratuito. Peça ajuda com uma tarefa da sua lista da Lição 2, usando as três partes de uma boa pergunta. Leia a resposta.",
          youCanNow: "abrir um assistente de IA gratuito e fazer uma pergunta clara que dá uma resposta útil.",
          quickCheck: [
            { objective: "O3", q: "Num computador da biblioteca, onde escreve copilot.microsoft.com?", options: ["Na barra de endereço do navegador de internet", "Numa mensagem SMS", "No menu da impressora", "Num email para a biblioteca"], answer: 0, why: "Abre o navegador de internet e escreve o endereço para chegar ao assistente de IA." },
            { objective: "O3", q: "Quer ajuda para planear uma festa de anos com pouco dinheiro. Qual é a melhor pergunta?", options: ["\"Festa.\"", "\"Ajude-me a planear uma festa para 8 crianças com $50. Dê-me uma lista simples.\"", "\"Diga-me tudo.\"", "\"O que é uma festa?\""], answer: 1, why: "Diz o que precisa, a sua situação e como quer a resposta." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ligar-se à internet",
        questions: [
          { objective: "O1", q: "Não tem computador. Onde pode normalmente usar um de graça?", options: ["Numa biblioteca pública", "Num stand de carros", "No cofre de um banco", "Numa bomba de gasolina"], answer: 0, why: "As bibliotecas públicas têm computadores e Wi-Fi gratuitos." },
          { objective: "O1", q: "O que faz o Lifeline?", options: ["Dá-lhe um carro grátis", "Baixa o custo mensal do telefone ou da internet para quem tem direito", "Paga a sua renda de casa", "Dá-lhe um computador novo todos os anos"], answer: 1, why: "O Lifeline é um desconto federal no telefone ou na internet." },
          { objective: "O2", q: "Qual destes é um assistente de IA gratuito?", options: ["Uma aplicação de calculadora", "Uma impressora", "Microsoft Copilot", "Uma mensagem SMS"], answer: 2, why: "O Copilot, o ChatGPT e o Gemini são assistentes de IA gratuitos conhecidos." },
          { objective: "O2", q: "Quem decide o que fazer com a resposta de um assistente de IA?", options: ["A IA", "A loja de aplicações", "A biblioteca", "Você"], answer: 3, why: "A IA é um ajudante; quem manda é você." },
          { objective: "O3", q: "Que pergunta vai dar a resposta mais útil?", options: ["\"comida\"", "\"Tenho $60 para as compras de quatro pessoas. Dê-me cinco jantares baratos e uma lista com palavras simples.\"", "\"ajuda\"", "\"diga-me coisas\""], answer: 1, why: "Diz o que precisa, a sua situação e como quer a resposta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a IA na vida real, com segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Transformar uma carta difícil em palavras simples",
          minutes: 5,
          goal: "Usar um assistente de IA para explicar uma carta confusa e fazer uma lista de tarefas.",
          text: [
            "As cartas das escolas, clínicas, senhorios e serviços podem estar cheias de palavras difíceis. Um assistente de IA pode passá-las para palavras simples e mostrar o que você tem de fazer e até quando.",
            "Primeiro, tire os dados privados. Escreva ou cole só as palavras que explicam do que trata a carta, e troque os nomes e os números por marcadores como [o meu nome] ou [número da conta].",
            "Depois peça: \"Explique esta carta com palavras simples. O que tenho de fazer, e até que data? Faça uma lista curta de tarefas.\""
          ],
          steps: ["Leia a carta uma vez e marque as partes que não percebe.", "Copie ou escreva essas partes, trocando os nomes e os números por marcadores.", "Peça à IA para a explicar com palavras simples e fazer uma lista de tarefas com datas.", "Faça um pedido de seguimento se alguma coisa ainda não estiver clara, como \"O que quer dizer 'recertificação'?\""],
          words: [["Marcador", "algo como [o meu nome] que escreve no lugar dos dados privados verdadeiros."], ["Pedido de seguimento", "uma segunda pergunta que parte da primeira resposta."]],
          slides: [
            { title: "Cartas difíceis, palavras simples", bullets: ["Cartas da escola, clínica, senhorio ou serviço", "A IA pode explicar as palavras difíceis", "Pode fazer a lista do que fazer e até quando"] },
            { title: "Primeiro tire os dados privados", bullets: ["Troque os nomes por [o meu nome]", "Troque os números por [número da conta]", "Deixe só as palavras que explicam a carta"] },
            { title: "O que pedir", bullets: ["\"Explique isto com palavras simples.\"", "\"O que tenho de fazer, e até quando?\"", "\"Faça uma lista curta de tarefas.\""] }
          ],
          tryIt: "Escolha uma carta ou um aviso que tenha (ou um exemplo do site de uma escola). Tire os dados privados e depois peça a um assistente de IA para o explicar e fazer uma lista de tarefas.",
          youCanNow: "transformar uma carta confusa em palavras simples e numa lista de tarefas, deixando de fora os seus dados privados.",
          quickCheck: [
            { objective: "O4", q: "Qual é um bom marcador num pedido?", options: ["O seu número de conta verdadeiro", "O nome completo do seu filho", "[número da conta]", "A morada da sua casa"], answer: 2, why: "Um marcador como [número da conta] fica no lugar do dado verdadeiro, para ele continuar privado." },
            { objective: "O4", q: "A explicação da IA ainda usa a palavra \"recertificação\" e você não a conhece. O que faz?", options: ["Desiste da carta", "Adivinha o que quer dizer", "Cola o seu número de processo", "Pergunta: \"O que quer dizer recertificação?\""], answer: 3, why: "Um pedido de seguimento pede à IA para explicar a palavra difícil." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar o que a IA lhe diz",
          minutes: 4,
          goal: "Verificar uma data, um número de telefone ou uma regra de uma resposta da IA na fonte oficial.",
          text: [
            "Os assistentes de IA podem errar. Podem dar um número de telefone antigo, o prazo errado ou uma regra de outro estado.",
            "Antes de agir sobre qualquer coisa que tenha a ver com dinheiro, apoios, saúde, escola, habitação ou a lei, verifique. Veja a própria carta, o site oficial (nos Estados Unidos os sites do governo costumam acabar em .gov), ou ligue para o serviço.",
            "Se não encontrar a resposta, ligue para o 211. É uma linha gratuita e confidencial que liga você a ajuda local com comida, habitação, contas de água, luz e gás, e mais."
          ],
          steps: ["Marque todas as datas, números e regras na resposta da IA.", "Compare cada um com a carta original.", "Veja o site oficial ou ligue para o serviço.", "Se estiver com dificuldade, ligue para o 211 ou pergunte a um bibliotecário."],
          words: [[".gov", "o final dos endereços dos sites oficiais do governo dos Estados Unidos."], ["211", "uma linha de telefone gratuita e confidencial que liga as pessoas a ajuda local."]],
          sources: [{ name: "211.org: Sobre o 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "A IA pode errar", bullets: ["Números de telefone antigos", "Prazos errados", "Regras de outro estado"] },
            { title: "Verifique sempre", bullets: ["Dinheiro e apoios", "Saúde e escola", "Habitação e a lei"] },
            { title: "Onde verificar", bullets: ["A carta original", "O site oficial, muitas vezes acaba em .gov", "Ligue para o serviço, ou para o 211 para ajuda local"] }
          ],
          tryIt: "Pegue na lista de tarefas da Lição 4. Verifique uma data ou um número de telefone na carta original ou no site oficial.",
          youCanNow: "verificar uma resposta da IA na fonte oficial antes de agir.",
          quickCheck: [
            { objective: "O5", q: "O que é o 211?", options: ["Uma linha gratuita e confidencial que liga você a ajuda local", "O número de emergência da polícia", "Um serviço jurídico pago", "Um site de compras"], answer: 0, why: "O 211 é gratuito e confidencial e liga as pessoas a ajuda local, como comida e contas de água e luz." },
            { objective: "O5", q: "A IA dá-lhe um número de telefone do serviço de habitação. O que faz antes de ligar?", options: ["Liga logo", "Verifica-o no site oficial do serviço ou na sua carta", "Publica-o nas redes sociais", "Pergunta à IA se tem a certeza"], answer: 1, why: "A IA pode dar números antigos ou errados, por isso verifique primeiro na fonte oficial." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger as suas informações e a sua família",
          minutes: 5,
          goal: "Deixar as informações privadas fora das ferramentas de IA e reconhecer uma mensagem de burla.",
          text: [
            "Nunca escreva isto num assistente de IA: números da Segurança Social (Social Security), números de processo ou de apoios, números de banco ou de cartão, palavras-passe, ou os nomes completos dos seus filhos com a escola deles.",
            "Os burlões atacam as famílias que estão a passar dificuldades. Tenha cuidado com mensagens que prometem dinheiro grátis ou subsídios do governo, que dizem que os seus apoios acabam se não agir já, ou que pedem para pagar com cartões-presente.",
            "Os serviços verdadeiros não pedem pagamentos em cartões-presente. Se uma mensagem o preocupar, não carregue nos links dela. Vá você mesmo ao site oficial ou ligue para um número que já conhece."
          ],
          steps: ["Leia cada pedido antes de o enviar e tire os dados privados.", "Desconfie de mensagens que apressam você ou prometem dinheiro grátis.", "Nunca pague com cartões-presente só porque uma mensagem mandou.", "Contacte o serviço usando um número ou um site que você mesmo encontrou."],
          words: [["Burla", "um truque para roubar dinheiro ou informações."], ["Phishing", "uma mensagem falsa que tenta levar você a carregar num link ou a partilhar dados privados."]],
          slides: [
            { title: "Nunca escreva na IA", bullets: ["Números da Segurança Social, de processo ou de apoios", "Números de banco ou de cartão, palavras-passe", "Os nomes completos e a escola dos seus filhos"] },
            { title: "Sinais de alerta de burla", bullets: ["Promessas de dinheiro grátis ou subsídios", "\"Os seus apoios acabam hoje\"", "Pagar com cartões-presente"] },
            { title: "Proteja-se", bullets: ["Não carregue em links de mensagens preocupantes", "Vá você mesmo ao site oficial", "Ligue para um número que já sabe que é verdadeiro"] }
          ],
          tryIt: "Tarefa final: pegue numa carta ou num aviso verdadeiro, tire todos os dados privados, peça a um assistente de IA para o explicar e fazer uma lista de tarefas com datas, e depois verifique uma data ou um número de telefone na fonte oficial.",
          youCanNow: "usar a IA numa tarefa real da família mantendo as suas informações seguras e reconhecendo as burlas.",
          quickCheck: [
            { objective: "O6", q: "Qual destes é um sinal de alerta de burla?", options: ["Uma carta que bate certo com o site do serviço", "Um lembrete da secretaria da escola do seu filho", "Uma mensagem que apressa você a pagar com cartões-presente", "Uma conta com o valor certo"], answer: 2, why: "Os serviços verdadeiros não pedem cartões-presente nem apressam você a pagar já." },
            { objective: "O6", q: "Uma SMS diz que ganhou um subsídio do governo e tem um link. O que faz?", options: ["Carrega no link para o receber", "Responde com o seu número do banco", "Reenvia-a aos amigos", "Não carrega; procura você mesmo o serviço"], answer: 3, why: "Ir ao site oficial ou a um número que você mesmo encontrou protege você dos links falsos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a IA na vida real, com segurança",
        questions: [
          { objective: "O4", q: "Antes de colar uma carta num assistente de IA, o que deve fazer?", options: ["Acrescentar o seu número da Segurança Social", "Trocar os nomes e os números por marcadores", "Acrescentar os seus dados do banco para ele ajudar mais", "Nada"], answer: 1, why: "Os marcadores deixam você ter ajuda sem partilhar dados privados." },
          { objective: "O5", q: "A IA diz que o seu prazo é 5 de junho, mas a carta diz 1 de junho. Em qual confia?", options: ["Na IA", "Em nenhum", "No que for mais tarde", "Na carta ou no serviço oficial"], answer: 3, why: "Quando a IA não concorda com a fonte oficial, vale a fonte oficial." },
          { objective: "O5", q: "O que é o 211?", options: ["Uma linha gratuita e confidencial que liga você a ajuda local", "Um banco", "Uma aplicação de IA", "Um número de burla"], answer: 0, why: "O 211 liga as pessoas a ajuda local com comida, habitação e mais." },
          { objective: "O6", q: "Uma SMS diz que os seus apoios acabam hoje se não pagar com cartões-presente. Isto é:", options: ["Um aviso normal", "Uma regra nova", "Um sinal de alerta de burla", "Uma mensagem da escola"], answer: 2, why: "Apressar você e pedir cartões-presente são sinais de burla." },
          { objective: "O6", q: "Uma mensagem preocupa você. Qual é a maneira mais segura de a verificar?", options: ["Carregar no link dela", "Responder com os seus dados", "Reenviá-la aos amigos", "Ir você mesmo ao site oficial ou ligar para um número que conhece"], answer: 3, why: "Contactar você mesmo o serviço evita os links falsos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à IA e Autonomia Digital",
    questions: [
      { objective: "O1", q: "Onde pode muitas vezes pedir emprestado um computador portátil ou um hotspot?", options: ["Em algumas bibliotecas públicas", "Em qualquer mercearia", "Num apartado dos correios", "Num parque de estacionamento"], answer: 0, why: "Muitas bibliotecas emprestam computadores portáteis e hotspots." },
      { objective: "O1", q: "O Lifeline ajuda com:", options: ["Reparações do carro", "O custo mensal do telefone ou da internet", "A renda de casa", "As compras de comida"], answer: 1, why: "O Lifeline é um desconto no telefone ou na internet." },
      { objective: "O1", q: "Onde deve ler sobre o Lifeline?", options: ["Num anúncio nas redes sociais", "Na SMS de um desconhecido", "No site oficial do Lifeline", "Numa janela que aparece no ecrã"], answer: 2, why: "Os sites oficiais têm as regras verdadeiras e o pedido." },
      { objective: "O2", q: "Um assistente de IA é:", options: ["Uma pessoa na biblioteca", "Um serviço do governo", "Uma empresa de telefones", "Um programa com quem conversa com as suas palavras"], answer: 3, why: "É um programa de computador a quem escreve ou fala." },
      { objective: "O2", q: "Em que pode um assistente de IA ajudar?", options: ["Planear refeições com pouco dinheiro", "Assinar o seu contrato de arrendamento", "Ir à sua consulta", "Pagar as suas contas a partir da sua conta"], answer: 0, why: "Ele é bom em planos, listas e explicações." },
      { objective: "O2", q: "A IA às vezes erra nos dados. Isso quer dizer que deve:", options: ["Nunca a usar", "Verificar os dados importantes", "Confiar mais nela", "Pagar por uma melhor"], answer: 1, why: "É útil, mas os dados importantes têm de ser verificados." },
      { objective: "O3", q: "Num computador da biblioteca, como abre o Copilot?", options: ["Telefona para a biblioteca", "Desliga e liga o computador", "Escreve copilot.microsoft.com no navegador", "Envia um email"], answer: 2, why: "O endereço do site abre o Copilot no navegador." },
      { objective: "O3", q: "Uma boa pergunta à IA inclui:", options: ["A sua palavra-passe", "Só uma palavra", "O seu número do banco", "O que precisa, a sua situação e como quer a resposta"], answer: 3, why: "Essas três partes dão uma resposta útil." },
      { objective: "O3", q: "Onde instala uma aplicação de IA num telefone?", options: ["Na loja de aplicações oficial", "A partir de um link na SMS de um desconhecido", "A partir de um anúncio que aparece no ecrã", "Em qualquer site"], answer: 0, why: "A loja de aplicações oficial é o lugar seguro." },
      { objective: "O4", q: "O que é um marcador?", options: ["Um tipo de aplicação", "Algo como [o meu nome] no lugar dos dados verdadeiros", "Uma palavra-passe", "Um site"], answer: 1, why: "Mantém os dados privados fora do seu pedido." },
      { objective: "O4", q: "Quer ajuda com uma carta da escola. Qual é um bom pedido?", options: ["\"carta\"", "\"Aqui está o nome completo e o número de identificação do meu filho\"", "\"Explique isto com palavras simples e faça a lista do que tenho de fazer e até quando.\"", "\"escola\""], answer: 2, why: "Pede palavras simples e uma lista de tarefas, sem dados privados." },
      { objective: "O4", q: "A IA usa uma palavra difícil que você não conhece. Você pode:", options: ["Desistir", "Fingir que a conhece", "Fechar o navegador", "Fazer um pedido de seguimento: \"O que quer dizer essa palavra?\""], answer: 3, why: "Os pedidos de seguimento esclarecem as partes confusas." },
      { objective: "O5", q: "O que deve verificar sempre antes de agir?", options: ["Um prazo para os apoios", "Uma ideia para o jantar", "Uma piada", "Uma lista de cores"], answer: 0, why: "Os prazos, o dinheiro e os apoios têm de ser verificados na fonte oficial." },
      { objective: "O5", q: "Os sites do governo dos EUA costumam acabar em:", options: [".win", ".gov", ".gift", ".shop"], answer: 1, why: ".gov é usado pelos sites oficiais do governo dos EUA." },
      { objective: "O5", q: "Não encontra ajuda local para a sua conta da luz. Para quem pode ligar?", options: ["Para um número de um anúncio no ecrã", "Para ninguém", "Para o 211", "Para um número qualquer da internet"], answer: 2, why: "O 211 liga você a ajuda local com contas, comida e habitação." },
      { objective: "O6", q: "O que nunca deve escrever num assistente de IA?", options: ["\"Use palavras simples\"", "\"Faça uma lista\"", "Uma ideia para o jantar", "O número do seu cartão do banco"], answer: 3, why: "Os números de banco e de cartão são privados." },
      { objective: "O6", q: "Uma mensagem promete um subsídio do governo grátis se pagar primeiro uma taxa. Provavelmente é:", options: ["Uma burla", "Um programa normal", "Um aviso da escola", "Um reembolso de impostos"], answer: 0, why: "Pagar para receber dinheiro \"grátis\" é uma burla comum." },
      { objective: "O6", q: "Os serviços verdadeiros pedem pagamentos em:", options: ["Cartões-presente", "Nunca em cartões-presente", "Cartões-presente só ao fim de semana", "Dinheiro por SMS"], answer: 1, why: "Os pagamentos em cartões-presente são um sinal de burla." },
      { objective: "O6", q: "Uma SMS diz \"Carregue aqui já ou perde os seus apoios.\" O que faz?", options: ["Carrega depressa", "Responde com o seu número de processo", "Não carrega; vai ao site oficial ou liga para um número conhecido", "Partilha-a com os vizinhos"], answer: 2, why: "Contacte você mesmo o serviço em vez de usar o link da mensagem." },
      { objective: "O5", q: "Na tarefa final, depois de a IA fazer a sua lista de tarefas, você:", options: ["Apaga a carta", "Publica-a na internet", "Acrescenta os seus dados do banco", "Verifica uma data ou um número de telefone na fonte oficial"], answer: 3, why: "Verificar na fonte oficial é o último passo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      7,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Dados privados tirados",
        objective: "O6",
        notYet: "O pedido tem um nome, um número de processo, um número de conta ou uma morada verdadeiros.",
        meets: "Todos os nomes e números privados foram deixados de fora ou trocados por um marcador.",
        exceeds: "Usa marcadores claros como [o meu nome] para a resposta continuar a fazer sentido."
      },
      {
        name: "Pedido claro",
        objective: "O3",
        notYet: "O pedido é vago, por exemplo \"ajude-me com isto\".",
        meets: "Diz o que precisa, a sua situação e como quer a resposta.",
        exceeds: "A primeira resposta está perto do que precisa."
      },
      {
        name: "Palavras simples e lista de tarefas",
        objective: "O4",
        notYet: "Não há explicação com palavras simples ou não há lista de tarefas.",
        meets: "Recebe uma explicação com palavras simples e uma lista curta de tarefas com datas.",
        exceeds: "Fez um pedido de seguimento para explicar uma palavra difícil ou um passo."
      },
      {
        name: "Dado verificado",
        objective: "O5",
        notYet: "Nenhuma data ou número de telefone foi verificado.",
        meets: "Verificou uma data ou um número de telefone na carta ou na fonte oficial.",
        exceeds: "Sabe dizer onde verificou e o que encontrou."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter usado um assistente de IA com segurança para uma carta, um formulário ou uma mensagem em 30 dias (inquérito de seguimento)",
      "Alunos que pedem o Lifeline ou começam a usar um computador ou um hotspot da biblioteca",
      "Alunos que começam outro curso da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou de um centro comunitário",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Uma carta verdadeira com os dados privados tapados, ou uma carta de exemplo do site de uma escola",
      "Papel e caneta para as notas e a lista de tarefas",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Comece por dizer que a tecnologia é para todos e que pedir ajuda é normal.",
      "Traga cartas de exemplo para ninguém ter de partilhar o seu próprio correio.",
      "Verifique cada pedido antes de ser enviado: nenhum nome, número de processo ou número de conta verdadeiro.",
      "Tenha à mão as informações do 211 e do Lifeline, e confirme que os alunos terminam a sessão nos computadores partilhados.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
