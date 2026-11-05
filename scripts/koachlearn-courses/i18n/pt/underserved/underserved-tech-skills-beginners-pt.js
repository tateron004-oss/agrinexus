"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-tech-skills-beginners.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "underserved-tech-skills-beginners-pt",
  lang: "pt",
  translationOf: "underserved-tech-skills-beginners",
  category: "Undeserved Community",
  name: "Competências Digitais para Principiantes",
  skills: "Usar um ecrã tátil e um rato, Ligar-se à internet de graça ou a baixo custo, Pesquisar na internet e reconhecer sites de confiança, Enviar um email com um anexo, Criar uma palavra-passe forte, Pedir ajuda técnica à IA",
  outcome: "usar um telefone ou um computador gratuito da biblioteca para entrar na internet, pesquisar informações de confiança, enviar um email com uma foto ou um ficheiro anexado e proteger a sua conta com uma palavra-passe forte.",
  about: [
    "Este curso é para quem se sente novo ou nervoso com a tecnologia. Muitas pessoas nunca tiveram a oportunidade de aprender, e não faz mal. Começamos do início e avançamos um pequeno passo de cada vez.",
    "Você vai praticar o uso de um ecrã tátil e de um rato, encontrar formas gratuitas ou baratas de entrar na internet, pesquisar na internet, distinguir um site de confiança de um site perigoso, enviar um email com um anexo, criar uma palavra-passe forte e pedir ajuda a um assistente de IA gratuito quando não souber o que fazer.",
    "Pode usar o seu próprio telefone ou um computador gratuito numa biblioteca pública ou num centro comunitário. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Num telefone ou num computador da biblioteca, procure o horário da sua biblioteca pública no site oficial dela, tire uma captura de ecrã ou uma foto do horário e envie-a por email a um familiar ou amigo com uma mensagem curta e educada. Use uma conta protegida por uma palavra-passe forte e termine a sessão se usou um computador partilhado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos de comunidades desfavorecidas que são novos ou se sentem nervosos com a tecnologia: pessoas mais velhas, pessoas que nunca tiveram a oportunidade de aprender, pessoas que voltam depois de muito tempo fora e pessoas que falam outra língua.",
    startingPoint: "Podem ter um telefone simples para chamadas. Usam pouco ou nada ecrãs táteis, o rato, o teclado, a pesquisa na internet ou o email, e alguns nunca criaram uma conta nem uma palavra-passe.",
    gap: "Hoje, os empregos, as escolas, os centros de saúde e os serviços de apoio esperam que as pessoas entrem na internet, encontrem informações e enviem emails. Os alunos precisam destas primeiras competências, e de bons hábitos com palavras-passe e sites, para fazer as tarefas do dia a dia sem depender dos outros e sem cair em burlas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 4.º ao 5.º ano)",
      "Aparelhos: talvez só um telefone simples ou um computador da biblioteca com tempo limitado",
      "Custo: só lugares gratuitos para entrar na internet e email gratuito",
      "Privacidade: nenhuma palavra-passe ou código verdadeiro mostrado ou partilhado na prática; terminar a sessão nos computadores partilhados",
      "Ritmo: um pequeno passo de cada vez, com muita prática com as próprias mãos"
    ],
    prerequisites: "Nenhum. Este é o primeiro curso para quem é novo na tecnologia."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Num telefone ou num computador", action: "tocar, deslizar, clicar, percorrer a página e escrever, e corrigir um erro de escrita", standard: "sem ajuda" },
    { id: "O2", condition: "No lugar onde vive", action: "encontrar um lugar gratuito para entrar na internet, ligar um telefone ao Wi-Fi e ver se tem direito ao Lifeline", standard: "dizendo o nome do lugar e o seu horário" },
    { id: "O3", condition: "Com uma coisa que precisa de procurar", action: "pesquisar na internet e escolher um resultado de confiança", standard: "ignorando os anúncios e fechando as páginas com janelas que aparecem sozinhas ou prémios" },
    { id: "O4", condition: "Usando uma conta de email gratuita", action: "enviar um email com um assunto, uma mensagem curta e uma foto ou um ficheiro anexado", standard: "verificando o endereço, a mensagem e o anexo antes de enviar" },
    { id: "O5", condition: "Quando cria ou usa uma conta", action: "criar uma palavra-passe forte e proteger as suas contas", standard: "sem nunca partilhar um código e terminando a sessão nos computadores partilhados" },
    { id: "O6", condition: "Quando não sabe continuar uma tarefa no telefone ou no computador", action: "pedir passos curtos a um assistente de IA gratuito e descrever o que vê quando um passo não corresponde ao ecrã", standard: "sem escrever nenhuma palavra-passe, código ou número privado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ganhar confiança e entrar na internet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ecrãs táteis, ratos e teclados",
          minutes: 5,
          goal: "Tocar, deslizar, clicar, percorrer a página e escrever num telefone ou computador.",
          text: [
            "Num telefone ou tablet, você usa o dedo. Toque uma vez para abrir alguma coisa. Deslize (passe o dedo pelo ecrã) para ir para cima, para baixo ou para os lados. Carregue e mantenha o dedo para ver mais escolhas.",
            "Num computador, você usa um rato ou um touchpad (a placa tátil do portátil). Mexa-o para mexer a seta no ecrã. Clique uma vez no botão esquerdo para escolher alguma coisa. Faça duplo clique para abrir alguns ficheiros. Rode a roda do rato, ou deslize dois dedos no touchpad, para percorrer a página.",
            "O teclado escreve letras. A tecla Shift faz uma letra maiúscula. A tecla Backspace apaga a letra antes do cursor. A tecla Enter passa para uma linha nova ou faz uma pesquisa."
          ],
          steps: ["Telefone: toque numa aplicação para a abrir, deslize para percorrer, carregue no botão de início ou deslize para cima para voltar ao início.", "Computador: mexa o rato, clique uma vez para escolher, percorra a página com a roda.", "Teclado: escreva o seu primeiro nome, use Shift para a letra maiúscula e use Backspace para corrigir um erro."],
          words: [["Tocar", "tocar no ecrã uma vez, depressa."], ["Deslizar", "passar o dedo pelo ecrã."], ["Clicar", "carregar uma vez no botão do rato."], ["Cursor", "a linha que pisca e mostra onde vai aparecer o que escreve."]],
          slides: [
            { title: "Num telefone ou tablet", bullets: ["Toque para abrir", "Deslize para mover", "Carregue e mantenha para mais escolhas"] },
            { title: "Num computador", bullets: ["Mexa o rato para mexer a seta", "Clique uma vez para escolher", "Percorra com a roda ou com dois dedos"] },
            { title: "O básico do teclado", bullets: ["Shift: letra maiúscula", "Backspace: apagar um erro", "Enter: linha nova ou pesquisa"] }
          ],
          tryIt: "Num telefone ou computador, abra qualquer aplicação ou programa, percorra a página para baixo e para cima, depois escreva o seu primeiro nome com letra maiúscula e corrija um erro com Backspace.",
          youCanNow: "tocar, deslizar, clicar, percorrer a página e escrever num telefone ou computador.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer \"deslizar\" num telefone?", options: ["Passar o dedo pelo ecrã", "Tocar duas vezes depressa", "Carregar no botão de ligar", "Abanar o telefone"], answer: 0, why: "Deslizar é passar o dedo para ir para cima, para baixo ou para os lados." },
            { objective: "O1", q: "Precisa de uma letra maiúscula no início do seu nome. Que tecla mantém carregada?", options: ["Enter", "Shift", "Backspace", "Espaço"], answer: 1, why: "A tecla Shift faz uma letra maiúscula." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Entrar na internet de graça ou a baixo custo",
          minutes: 5,
          goal: "Encontrar um lugar gratuito para entrar na internet e conhecer o desconto Lifeline.",
          text: [
            "As bibliotecas públicas oferecem computadores e Wi-Fi gratuitos. Muitos centros comunitários, centros de emprego e alguns restaurantes também. Pergunte aos funcionários como se inscrever para usar um computador e durante quanto tempo o pode usar.",
            "O Lifeline é um programa federal dos Estados Unidos que baixa o custo mensal do serviço de telefone ou de internet para pessoas com baixo rendimento ou que recebem apoios como o SNAP ou o Medicaid. O desconto normal é de até $9.25 por mês. Faz o pedido em getinternet.gov e depois contacta uma empresa de telefone ou de internet que participa. Os valores e as regras podem mudar, por isso veja as informações mais recentes em lifelinesupport.org.",
            "No Wi-Fi público, se puder, não use o banco pela internet nem escreva palavras-passe de contas importantes. Nunca deixe um computador partilhado guardar a sua palavra-passe."
          ],
          steps: ["Ligue ou vá à sua biblioteca ou centro comunitário e pergunte pelos computadores e pelo Wi-Fi gratuitos.", "Para ligar um telefone ao Wi-Fi: abra as Definições, toque em Wi-Fi, escolha a rede e escreva a palavra-passe, se houver.", "Se o dinheiro for pouco, veja se tem direito ao Lifeline em lifelinesupport.org."],
          words: [["Wi-Fi", "uma forma de ligar à internet sem fios."], ["Lifeline", "um programa federal dos Estados Unidos que baixa as contas de telefone ou de internet de quem tem direito."], ["Wi-Fi público", "Wi-Fi gratuito partilhado por muitas pessoas num lugar público."]],
          sources: [{ name: "Lifeline Support (USAC, sob a supervisão da FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Lugares gratuitos para entrar na internet", bullets: ["Computadores e Wi-Fi da biblioteca pública", "Centros comunitários e centros de emprego", "Pergunte aos funcionários como se inscrever"] },
            { title: "O Lifeline baixa a sua conta", bullets: ["Para baixo rendimento ou quem recebe SNAP, Medicaid e outros", "Desconto normal de até $9.25 por mês", "Peça em getinternet.gov; veja lifelinesupport.org"] },
            { title: "Segurança no Wi-Fi público", bullets: ["Evite usar o banco no Wi-Fi público", "Não deixe computadores partilhados guardar palavras-passe"] }
          ],
          tryIt: "Descubra o horário de uso gratuito dos computadores na biblioteca ou no centro comunitário mais perto de você. Se tem um telefone, ligue-o a uma rede Wi-Fi em Definições e depois Wi-Fi.",
          youCanNow: "encontrar um lugar gratuito para entrar na internet, ligar-se ao Wi-Fi e saber onde ver como pagar menos pela internet.",
          quickCheck: [
            { objective: "O2", q: "Além das bibliotecas, onde mais encontra muitas vezes Wi-Fi gratuito?", options: ["Só em casa", "No cofre de um banco", "Em centros comunitários e centros de emprego", "Em nenhum outro lugar"], answer: 2, why: "Muitos centros comunitários, centros de emprego e alguns restaurantes oferecem Wi-Fi gratuito." },
            { objective: "O2", q: "Está no Wi-Fi gratuito de um café. O que deve evitar fazer?", options: ["Ler as notícias", "Ver o tempo", "Procurar o horário dos autocarros", "Usar o banco pela internet"], answer: 3, why: "No Wi-Fi público, evite, se puder, usar o banco e escrever palavras-passe importantes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pesquisar na internet e reconhecer sites de confiança",
          minutes: 5,
          goal: "Pesquisar informações e decidir se um site é de confiança.",
          text: [
            "Um motor de pesquisa, como o Google ou o Bing, encontra sites para você. Escreva algumas palavras importantes, como \"horário da biblioteca de Oakland\", na caixa de pesquisa e carregue em Enter.",
            "Nem todos os resultados são de confiança. Os resultados marcados \"Patrocinado\" ou \"Anúncio\" são anúncios pagos. Os sites oficiais do governo dos Estados Unidos acabam em .gov. Procure o nome verdadeiro do lugar no endereço do site.",
            "Tenha cuidado com sites que têm muitas janelas que aparecem sozinhas, que dizem que ganhou um prémio, que pedem para descarregar alguma coisa ou que pedem informações pessoais. Feche-os e volte para trás."
          ],
          steps: ["Abra um navegador de internet e escreva algumas palavras importantes na caixa de pesquisa.", "Ignore os resultados marcados Patrocinado ou Anúncio.", "Escolha um resultado cujo endereço tem o nome da organização verdadeira ou acaba em .gov.", "Feche qualquer página com janelas que aparecem sozinhas, prémios ou pedidos para descarregar."],
          words: [["Motor de pesquisa", "um site que encontra outros sites, como o Google ou o Bing."], ["Patrocinado", "um anúncio pago que aparece nos resultados da pesquisa."], ["Janela pop-up", "uma janela que aparece de repente por cima de uma página."]],
          slides: [
            { title: "Como pesquisar", bullets: ["Escreva algumas palavras importantes", "Exemplo: \"horário da biblioteca de Oakland\"", "Carregue em Enter"] },
            { title: "Sinais de confiança", bullets: ["Não está marcado Patrocinado nem Anúncio", "O endereço tem o nome verdadeiro", "Os sites do governo dos EUA acabam em .gov"] },
            { title: "Sinais de alerta", bullets: ["Muitas janelas pop-up", "\"Ganhou um prémio!\"", "Pede para descarregar ou partilhar dados pessoais"] }
          ],
          tryIt: "Procure o horário da sua biblioteca pública. Escolha o resultado do próprio site da biblioteca, não um anúncio, e escreva o horário.",
          youCanNow: "pesquisar na internet e escolher um site de confiança.",
          quickCheck: [
            { objective: "O3", q: "Que endereço é mais provável ser o site oficial de um serviço do governo dos EUA?", options: ["Um que acaba em .gov", "Um com muitas janelas pop-up", "Um marcado \"Patrocinado\"", "Um que diz que ganhou um prémio"], answer: 0, why: "Os sites oficiais do governo dos EUA costumam acabar em .gov." },
            { objective: "O3", q: "Procura o horário do seu centro de saúde. O primeiro resultado é um anúncio. O que faz?", options: ["Clica no anúncio", "Ignora-o e escolhe o próprio site do centro de saúde", "Descarrega o que ele oferece", "Escreve nele a sua palavra-passe"], answer: 1, why: "Os anúncios são resultados pagos; o próprio site do centro de saúde é mais de confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ganhar confiança e entrar na internet",
        questions: [
          { objective: "O1", q: "Num telefone, como abre uma aplicação?", options: ["Abana o telefone", "Toca nela uma vez", "Carrega em Backspace", "Desliga o telefone"], answer: 1, why: "Um toque abre uma aplicação." },
          { objective: "O1", q: "Que tecla apaga a letra antes do cursor?", options: ["Shift", "Enter", "Backspace", "Espaço"], answer: 2, why: "A tecla Backspace apaga a letra antes do cursor." },
          { objective: "O2", q: "Onde pode normalmente usar um computador e Wi-Fi de graça?", options: ["Num anúncio pop-up", "Num vendedor de carros", "No cofre de um banco", "Numa biblioteca pública"], answer: 3, why: "As bibliotecas públicas oferecem computadores e Wi-Fi gratuitos." },
          { objective: "O2", q: "O que é o Lifeline?", options: ["Um programa federal que baixa as contas de telefone ou de internet de quem tem direito", "Um jogo de telefone gratuito", "Um tipo de vírus", "Um motor de pesquisa"], answer: 0, why: "O Lifeline dá um desconto mensal no serviço de telefone ou de internet." },
          { objective: "O3", q: "Um resultado da pesquisa está marcado \"Patrocinado\". O que quer dizer?", options: ["É um site do governo", "É um anúncio pago", "É sempre a melhor resposta", "É o seu email"], answer: 1, why: "Os resultados patrocinados são anúncios." }
        ]
      }
    },
    {
      name: "Capítulo 2: Email, palavras-passe e pedir ajuda",
      lessons: [
        {
          objectives: ["O4"],
          title: "Enviar um email com um anexo",
          minutes: 5,
          goal: "Escrever e enviar um email com uma foto ou um ficheiro anexado.",
          text: [
            "O email deixa você enviar mensagens e ficheiros a qualquer pessoa que tenha um endereço de email. Há serviços de email gratuitos como o Gmail e o Outlook.com. A sua biblioteca pode ajudar a criar uma conta.",
            "Um email tem quatro partes: Para (o endereço de email da pessoa), Assunto (algumas palavras que dizem do que se trata), a mensagem e os anexos (ficheiros ou fotos que acrescenta). O ícone do clipe normalmente quer dizer anexar.",
            "Antes de carregar em Enviar, verifique se o endereço está certo, leia a mensagem uma vez e confirme que o ficheiro certo está anexado."
          ],
          steps: ["Abra o seu email e escolha Escrever ou Nova mensagem.", "Escreva o endereço da pessoa em Para.", "Escreva um Assunto curto.", "Escreva uma mensagem curta e educada.", "Toque ou clique no clipe, escolha uma foto ou um ficheiro e depois carregue em Enviar."],
          words: [["Endereço de email", "um endereço como nome@example.com onde recebe emails."], ["Assunto", "o título curto de um email."], ["Anexo", "um ficheiro ou uma foto enviados com um email."]],
          slides: [
            { title: "As quatro partes de um email", bullets: ["Para: o endereço de email da pessoa", "Assunto: algumas palavras", "Mensagem", "Anexo: um ficheiro ou uma foto"] },
            { title: "Anexar um ficheiro", bullets: ["Procure o ícone do clipe", "Escolha a foto ou o ficheiro", "Espere até acabar de ser acrescentado"] },
            { title: "Antes de carregar em Enviar", bullets: ["O endereço está certo?", "A mensagem faz sentido?", "O ficheiro certo está anexado?"] }
          ],
          tryIt: "Envie um email a um amigo ou familiar com o assunto \"Email de prática\", uma mensagem de uma linha e uma foto anexada.",
          youCanNow: "escrever e enviar um email com um anexo.",
          quickCheck: [
            { objective: "O4", q: "Num email, o que se escreve na linha Para?", options: ["A sua palavra-passe", "O assunto", "O endereço de email da pessoa", "A foto"], answer: 2, why: "A linha Para tem o endereço de email da pessoa a quem está a escrever." },
            { objective: "O4", q: "Escreveu o seu email mas esqueceu-se da foto. O que faz antes de enviar?", options: ["Envia e espera que corra bem", "Apaga o email", "Escreve \"a foto vem depois\"", "Clica no clipe e anexa a foto"], answer: 3, why: "O ícone do clipe anexa uma foto ou um ficheiro antes de carregar em Enviar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Criar uma palavra-passe forte e proteger as contas",
          minutes: 5,
          goal: "Criar uma palavra-passe forte e saber como proteger as suas contas.",
          text: [
            "Uma palavra-passe forte é comprida e difícil de adivinhar. Uma forma fácil: junte três ou quatro palavras ao acaso com um número e um símbolo, como \"Blue-Taco-River-58\". Não use o seu nome, a sua data de nascimento nem \"password123\".",
            "Use para o seu email uma palavra-passe diferente das outras contas. O seu email é a chave para mudar a palavra-passe de todas as outras.",
            "Ligue a verificação em dois passos, se a sua conta a tiver: depois da palavra-passe, também escreve um código enviado para o seu telefone. Nunca dê esse código a ninguém que lhe ligue ou envie mensagem, mesmo que diga que é da empresa."
          ],
          steps: ["Escolha três ou quatro palavras ao acaso.", "Junte-as e acrescente um número e um símbolo.", "Use-a só para esta conta.", "Ligue a verificação em dois passos nas definições de segurança da sua conta.", "Nunca partilhe o código enviado para o seu telefone."],
          words: [["Palavra-passe", "uma palavra ou frase secreta que só deixa você entrar numa conta."], ["Verificação em dois passos", "uma segunda verificação, normalmente um código enviado para o seu telefone, depois da palavra-passe."]],
          slides: [
            { title: "Uma palavra-passe forte", bullets: ["Comprida: três ou quatro palavras ao acaso", "Acrescente um número e um símbolo", "Exemplo do estilo: Blue-Taco-River-58"] },
            { title: "Evite", bullets: ["O seu nome ou a sua data de nascimento", "\"password123\"", "A mesma palavra-passe em todo o lado"] },
            { title: "Verificação em dois passos", bullets: ["Palavra-passe mais um código no seu telefone", "Ligue-a nas definições de segurança", "Nunca partilhe o código com ninguém"] }
          ],
          tryIt: "Invente uma palavra-passe forte com três palavras ao acaso, um número e um símbolo. Não use a que está escrita aqui. Escreva uma pista, não a palavra-passe, num lugar seguro em casa.",
          youCanNow: "criar uma palavra-passe forte e proteger a sua conta com a verificação em dois passos.",
          quickCheck: [
            { objective: "O5", q: "O que é a verificação em dois passos?", options: ["Uma segunda verificação, como um código no seu telefone", "Escrever a palavra-passe duas vezes", "Duas contas de email", "Um nome de utilizador mais comprido"], answer: 0, why: "Depois da palavra-passe, também escreve um código enviado para o seu telefone." },
            { objective: "O5", q: "Quer uma palavra-passe para o seu email novo. Qual é a melhor?", options: ["A sua data de nascimento", "Três palavras ao acaso juntas com um número e um símbolo", "O seu primeiro nome", "A mesma palavra-passe do seu banco"], answer: 1, why: "Palavras compridas e ao acaso com um número e um símbolo são difíceis de adivinhar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Pedir ajuda técnica a um assistente de IA gratuito",
          minutes: 5,
          goal: "Usar um assistente de IA gratuito para ter ajuda passo a passo com um problema no telefone ou no computador.",
          text: [
            "Quando não sabe continuar, um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, pode explicar como fazer alguma coisa, passo a passo, com palavras simples. Pode escrever-lhe ou falar com ele.",
            "Diga que aparelho tem e o que quer fazer. Por exemplo: \"Tenho um telefone Android. Como anexo uma foto a um email no Gmail? Dê-me passos curtos.\" Se um passo não corresponder ao seu ecrã, diga-lhe o que vê.",
            "Nunca escreva numa IA palavras-passe, códigos, números do banco ou o seu número da Segurança Social (Social Security). E um funcionário da biblioteca é sempre uma boa pessoa a quem perguntar também."
          ],
          steps: ["Abra um assistente de IA gratuito.", "Diga o seu aparelho e o que quer fazer.", "Peça passos curtos e simples.", "Se um passo não corresponder, descreva o que vê no seu ecrã."],
          words: [["Assistente de IA", "um programa de computador com quem conversa com palavras do dia a dia."], ["Aparelho", "um telefone, um tablet ou um computador."]],
          slides: [
            { title: "A IA pode ser a sua ajuda técnica", bullets: ["Explica os passos com palavras simples", "Pode escrever ou falar"] },
            { title: "Peça com clareza", bullets: ["Diga o seu aparelho", "Diga o que quer fazer", "Peça passos curtos"] },
            { title: "Proteja-se", bullets: ["Nada de palavras-passe, códigos ou números do banco", "Os funcionários da biblioteca também ajudam"] }
          ],
          tryIt: "Tarefa final: procure o horário da sua biblioteca no site oficial dela, tire uma captura de ecrã ou uma foto e envie-a por email a alguém com uma mensagem educada. Se não souber continuar, peça os passos a um assistente de IA. Termine a sessão se usou um computador partilhado.",
          youCanNow: "entrar na internet, encontrar informações de confiança, enviá-las por email e ter ajuda com segurança quando não souber continuar.",
          quickCheck: [
            { objective: "O6", q: "Que duas coisas deve dizer o seu primeiro pedido de ajuda técnica?", options: ["A sua palavra-passe e o seu email", "A sua idade e a sua morada", "O seu aparelho e o que quer fazer", "O seu banco e o seu código"], answer: 2, why: "A IA precisa de saber o seu aparelho e o seu objetivo para dar os passos certos." },
            { objective: "O6", q: "A IA diz para tocar em \"Definições\", mas você não as vê. O que faz?", options: ["Desiste", "Reinicia o telefone", "Escreve a sua palavra-passe para a IA", "Diz à IA o que vê no seu ecrã"], answer: 3, why: "Descrever o seu ecrã ajuda a IA a dar passos que correspondem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Email, palavras-passe e pedir ajuda",
        questions: [
          { objective: "O4", q: "O que faz normalmente o ícone do clipe no email?", options: ["Apaga o email", "Imprime o email", "Anexa um ficheiro ou uma foto", "Muda a sua palavra-passe"], answer: 2, why: "O clipe acrescenta um anexo." },
          { objective: "O5", q: "Qual é a palavra-passe mais forte?", options: ["password123", "A sua data de nascimento", "O seu primeiro nome", "Três palavras ao acaso com um número e um símbolo"], answer: 3, why: "Palavras-passe compridas e ao acaso são difíceis de adivinhar." },
          { objective: "O5", q: "Alguém liga a dizer que é da sua empresa de email e pede o código enviado para o seu telefone. Você:", options: ["Nunca o partilha e desliga", "Lê-o para a pessoa", "Envia-o por SMS", "Publica-o na internet"], answer: 0, why: "Esse código protege a sua conta; as empresas verdadeiras não o pedem." },
          { objective: "O5", q: "Porque é que a palavra-passe do seu email deve ser diferente das outras?", options: ["Fica mais bonita", "Com o email pode-se mudar a palavra-passe das outras contas", "É mais curta", "A lei obriga"], answer: 1, why: "Se alguém entrar no seu email, pode mudar a palavra-passe das outras contas." },
          { objective: "O6", q: "Qual é uma boa forma de pedir ajuda técnica à IA?", options: ["\"ajuda\"", "\"Aqui está a minha palavra-passe, resolva\"", "\"Tenho um telefone Android. Como anexo uma foto no Gmail? Passos curtos.\"", "\"telefone\""], answer: 2, why: "Diz o aparelho, a tarefa e o formato." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Competências Digitais para Principiantes",
    questions: [
      { objective: "O1", q: "Para subir e descer numa página no telefone, você:", options: ["Desliza", "Abana o telefone", "Carrega em Shift", "Desliga o telefone"], answer: 0, why: "Deslizar faz andar o ecrã." },
      { objective: "O1", q: "Num computador, clicar uma vez no botão esquerdo do rato:", options: ["Desliga-o", "Escolhe alguma coisa", "Apaga tudo", "Imprime a página"], answer: 1, why: "Um clique seleciona ou escolhe." },
      { objective: "O1", q: "O cursor mostra:", options: ["A hora", "A bateria", "Onde vai aparecer o que escreve", "A sua palavra-passe"], answer: 2, why: "A linha que pisca marca onde vai o texto." },
      { objective: "O2", q: "Para ligar um telefone ao Wi-Fi, normalmente abre:", options: ["A câmara", "A calculadora", "Um jogo", "As Definições e depois Wi-Fi"], answer: 3, why: "As definições de Wi-Fi estão na aplicação Definições." },
      { objective: "O2", q: "Quem pode pedir o Lifeline?", options: ["Pessoas com baixo rendimento ou que recebem apoios como o SNAP ou o Medicaid", "Só empresas", "Só pessoas com mais de 90 anos", "Qualquer pessoa que pague uma taxa"], answer: 0, why: "O Lifeline depende do rendimento ou de participar em certos programas de apoio." },
      { objective: "O2", q: "Onde vê os valores e as regras mais recentes do Lifeline?", options: ["Numa SMS de um desconhecido", "lifelinesupport.org", "Num anúncio pop-up", "Num comentário nas redes sociais"], answer: 1, why: "O Lifeline Support é o site oficial do programa." },
      { objective: "O2", q: "No Wi-Fi público, é melhor evitar:", options: ["Ler as notícias", "Ver o tempo", "Usar o banco pela internet", "Procurar o horário da biblioteca"], answer: 2, why: "As tarefas delicadas são mais seguras numa ligação privada." },
      { objective: "O3", q: "Um motor de pesquisa é:", options: ["Uma peça de carro", "Uma aplicação de email", "Uma palavra-passe", "Um site que encontra outros sites, como o Google ou o Bing"], answer: 3, why: "Os motores de pesquisa encontram sites para você." },
      { objective: "O3", q: "Os sites oficiais do governo dos EUA costumam acabar em:", options: [".gov", ".win", ".prize", ".xyz"], answer: 0, why: ".gov é para os sites do governo dos EUA." },
      { objective: "O3", q: "Uma página diz \"Ganhou um prémio! Descarregue já!\" Você deve:", options: ["Descarregar", "Fechar a página e voltar para trás", "Escrever o seu número do banco", "Partilhar com os amigos"], answer: 1, why: "Prémios e pedidos para descarregar são sinais de alerta." },
      { objective: "O4", q: "Num email, o Assunto é:", options: ["O endereço da pessoa", "O anexo", "Algumas palavras que dizem do que trata o email", "A sua palavra-passe"], answer: 2, why: "O assunto é o título curto do email." },
      { objective: "O4", q: "Antes de carregar em Enviar, deve verificar:", options: ["Nada", "Só o tipo de letra", "O tempo", "O endereço, a mensagem e o anexo"], answer: 3, why: "Uma verificação rápida evita erros." },
      { objective: "O4", q: "Qual é um serviço de email gratuito?", options: ["Gmail", "Uma máquina de fax", "Uma impressora", "Um router de Wi-Fi"], answer: 0, why: "O Gmail e o Outlook.com são serviços de email gratuitos." },
      { objective: "O5", q: "Qual é a palavra-passe mais fraca?", options: ["Blue-Taco-River-58", "password123", "Lamp!Garden!Seven!42", "Moon-Fork-Cactus-19"], answer: 1, why: "\"password123\" é uma das palavras-passe mais adivinhadas." },
      { objective: "O5", q: "A verificação em dois passos quer dizer:", options: ["Escrever a palavra-passe duas vezes", "Duas pessoas partilham uma conta", "Uma segunda verificação, como um código no seu telefone", "Dar dois passos a pé"], answer: 2, why: "Acrescenta uma segunda verificação depois da palavra-passe." },
      { objective: "O5", q: "Quando acaba num computador da biblioteca, deve:", options: ["Deixar o seu email aberto", "Guardar a sua palavra-passe", "Escrever a palavra-passe num papel colado", "Terminar a sessão e fechar o navegador"], answer: 3, why: "Terminar a sessão impede a próxima pessoa de entrar na sua conta." },
      { objective: "O6", q: "O que NUNCA deve escrever num assistente de IA?", options: ["O código enviado para o seu telefone", "\"Como anexo uma foto?\"", "\"Tenho um iPhone\"", "\"Dê-me passos curtos\""], answer: 0, why: "Os códigos e as palavras-passe têm de ficar privados." },
      { objective: "O6", q: "Um passo da IA não corresponde ao seu ecrã. Você deve:", options: ["Desistir", "Dizer-lhe o que vê no seu ecrã", "Reiniciar a internet", "Escrever a sua palavra-passe"], answer: 1, why: "Descrever o seu ecrã ajuda-a a dar os passos certos." },
      { objective: "O6", q: "Quem mais pode ajudar você com a tecnologia de graça?", options: ["Um anúncio pop-up", "Um desconhecido que lhe envia SMS", "Os funcionários da biblioteca", "Alguém que pede o seu código"], answer: 2, why: "Os funcionários da biblioteca ajudam pessoas com computadores todos os dias." },
      { objective: "O6", q: "Um bom primeiro pedido de ajuda técnica inclui:", options: ["O seu número do banco", "Só uma palavra", "O seu número da Segurança Social", "O seu aparelho e o que quer fazer"], answer: 3, why: "Isso dá à IA o que ela precisa para ajudar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 7, 8, 10, 13, 14, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Pesquisa de confiança",
        objective: "O3",
        notYet: "Usou um anúncio ou um site que não é o da própria biblioteca.",
        meets: "Encontrou o horário no site oficial da biblioteca.",
        exceeds: "Sabe dizer como soube que o site era oficial."
      },
      {
        name: "Captura de ecrã ou foto",
        objective: "O1",
        notYet: "Nenhuma captura de ecrã ou foto do horário.",
        meets: "Uma captura de ecrã ou foto nítida que mostra o horário.",
        exceeds: "Tirou-a sem ajuda."
      },
      {
        name: "Email enviado",
        objective: "O4",
        notYet: "Falta ao email o assunto, a mensagem ou o anexo.",
        meets: "Enviado com um assunto, uma mensagem curta e educada e a foto anexada.",
        exceeds: "A pessoa confirmou que o recebeu e conseguiu ver a foto."
      },
      {
        name: "Segurança da conta",
        objective: "O5",
        notYet: "Palavra-passe fraca, ou não terminou a sessão num computador partilhado.",
        meets: "A conta tem uma palavra-passe forte, e terminou a sessão em qualquer computador partilhado.",
        exceeds: "A verificação em dois passos está ligada."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que enviam um email ou procuram informações sozinhos em 30 dias (inquérito de seguimento)",
      "Alunos que pedem o Lifeline ou começam a usar os computadores gratuitos da biblioteca",
      "Alunos que começam outro curso da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone, ou um computador da biblioteca ou do centro comunitário",
      "Uma conta de email gratuita (Gmail ou Outlook.com); os funcionários da biblioteca podem ajudar a criar uma",
      "Um assistente de IA gratuito para a ajuda técnica",
      "Papel e caneta para notas e pistas das palavras-passe (não a própria palavra-passe)",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Vá devagar e deixe os alunos fazerem cada passo com as próprias mãos; não lhes tire o rato nem o telefone.",
      "Tenha funcionários prontos para ajudar os alunos a criar uma conta de email antes da Lição 4.",
      "Nunca peça aos alunos para mostrar ou dizer as suas palavras-passe ou códigos.",
      "Antes de os alunos saírem, confirme que cada um termina a sessão nos computadores partilhados.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
