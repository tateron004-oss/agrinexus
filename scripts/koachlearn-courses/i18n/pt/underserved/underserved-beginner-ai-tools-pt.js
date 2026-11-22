"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-beginner-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "underserved-beginner-ai-tools-pt",
  lang: "pt",
  translationOf: "underserved-beginner-ai-tools",
  category: "Undeserved Community",
  name: "Ferramentas de IA Fáceis para Principiantes",
  skills: "Escolher a ferramenta de IA gratuita certa, Falar com a IA usando a voz, Traduzir com a câmara do telefone, Fazer um folheto simples com o Canva, Escrever mensagens curtas com um assistente de IA",
  outcome: "escolher a ferramenta de IA gratuita certa para uma tarefa do dia a dia e usá-la: falar com um assistente usando a voz, traduzir um cartaz ou uma carta com a câmara do telefone e fazer um folheto simples de uma página para um evento da comunidade.",
  about: [
    "Há muitas ferramentas de IA gratuitas, e é difícil saber por onde começar. Este curso mostra um pequeno grupo de ferramentas fáceis para principiantes, que não custam nada e funcionam num telefone ou num computador da biblioteca.",
    "Você vai usar a voz em vez de escrever, traduzir palavras com a câmara do telefone, escrever mensagens curtas com um assistente de IA e criar um folheto simples com a versão gratuita do Canva.",
    "Cada lição dura cerca de cinco minutos. Faça a tarefa \"Experimente agora\" depois de cada uma. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Faça um folheto de uma página para um evento da comunidade, real ou inventado, como uma recolha de alimentos, uma limpeza do bairro ou uma angariação de fundos para a escola. Use um assistente de IA para escrever um título curto e três linhas de detalhes, crie o folheto na versão gratuita do Canva e use uma ferramenta de tradução para pôr as mesmas palavras numa segunda língua que os seus vizinhos falam.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos de comunidades desfavorecidas que são novos nas ferramentas de IA: pais, pessoas mais velhas, voluntários da comunidade, pessoas sem computador em casa e pessoas que em casa falam outra língua que não o inglês.",
    startingPoint: "Usam o telefone para chamadas, SMS e talvez redes sociais. Já ouviram falar de IA, mas não sabem que ferramentas gratuitas existem nem para que serve cada uma. Para alguns, escrever é lento ou difícil.",
    gap: "As ferramentas gratuitas conseguem escrever mensagens, traduzir cartazes e cartas e criar folhetos, mas os alunos não sabem por onde começar. Escolher a ferramenta gratuita certa para cada tarefa poupa tempo e dinheiro e ajuda a partilhar notícias com os vizinhos em mais de uma língua.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca",
      "Custo: só versões gratuitas das ferramentas",
      "A tradução automática não é perfeita: papéis médicos ou legais importantes precisam de um intérprete",
      "Privacidade: terminar a sessão nos computadores partilhados e não pôr dados privados nos pedidos"
    ],
    prerequisites: "Nenhum. Quem é novo nos assistentes de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma tarefa do dia a dia", action: "escolher a ferramenta gratuita que serve para ela: um assistente de conversa, uma aplicação de tradução ou uma ferramenta de design", standard: "acertando o tipo de ferramenta em pelo menos 4 de 5 tarefas" },
    { id: "O2", condition: "Usando um telefone ou uma aplicação de assistente de IA", action: "fazer uma pergunta a falar e corrigir as palavras que a escrita por voz percebeu mal", standard: "antes de a enviar" },
    { id: "O3", condition: "Com um cartaz, rótulo ou aviso impresso noutra língua", action: "traduzi-lo com a câmara do telefone e decidir quando pedir um intérprete ou alguém que leia bem essa língua", standard: "usando um intérprete para papéis médicos ou legais" },
    { id: "O4", condition: "Com uma mensagem que precisa de enviar", action: "pedir a um assistente de IA uma mensagem curta dizendo o leitor, o conteúdo, o tom e o tamanho, e depois editá-la e verificar cada dado", standard: "para que soe como você e todas as datas e lugares estejam certos" },
    { id: "O5", condition: "Usando a versão gratuita do Canva", action: "criar um folheto de uma página a partir de um modelo, com um título, o quê, quando e onde, e uma imagem", standard: "descarregado ou partilhado, e com a sessão terminada num computador partilhado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A sua caixa de ferramentas de IA gratuitas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher a ferramenta gratuita certa para cada trabalho",
          minutes: 4,
          goal: "Ligar uma tarefa do dia a dia à ferramenta de IA gratuita que serve para ela.",
          text: [
            "Pense nas ferramentas de IA como os utensílios numa gaveta da cozinha. Cada um é bom para um trabalho diferente.",
            "Um assistente de conversa com IA (ChatGPT, Microsoft Copilot ou Google Gemini) é bom para escrever, explicar e planear. Uma aplicação de tradução (como o Google Tradutor) é boa para outras línguas. Uma ferramenta de design (como o Canva, que tem uma versão gratuita) é boa para folhetos e cartões.",
            "Comece pela tarefa, não pela ferramenta. Pergunte a si mesmo: preciso de palavras escritas, de palavras traduzidas ou de algo bonito para imprimir ou partilhar?"
          ],
          steps: ["Escreva a tarefa que precisa de fazer.", "Decida: precisa de palavras escritas, traduzidas ou de um design?", "Escolha a ferramenta certa: assistente de conversa, aplicação de tradução ou ferramenta de design.", "Use primeiro a versão gratuita."],
          words: [["Assistente de conversa", "um programa de IA a quem você escreve ou fala, e que lhe escreve respostas."], ["Versão gratuita", "o nível sem custo de uma ferramenta; algumas ferramentas também vendem funções extra."]],
          slides: [
            { title: "As ferramentas são como uma gaveta da cozinha", bullets: ["Cada ferramenta é boa para um trabalho diferente", "Comece pela tarefa, não pela ferramenta"] },
            { title: "Três ferramentas gratuitas para começar", bullets: ["Assistente de conversa: escrever, explicar, planear", "Aplicação de tradução: outras línguas", "Canva gratuito: folhetos e cartões"] },
            { title: "Pergunte a si mesmo", bullets: ["Preciso de palavras escritas?", "De palavras traduzidas?", "De algo com design para imprimir ou partilhar?"] }
          ],
          tryIt: "Escreva três tarefas que tem este mês. Ao lado de cada uma, escreva o tipo de ferramenta que serve: assistente de conversa, aplicação de tradução ou ferramenta de design.",
          youCanNow: "ligar uma tarefa do dia a dia à ferramenta de IA gratuita certa.",
          quickCheck: [
            { objective: "O1", q: "Que tipo de ferramenta é melhor para pôr uma carta noutra língua?", options: ["Uma aplicação de tradução", "Uma ferramenta de design", "Um editor de fotografias", "Uma aplicação de calendário"], answer: 0, why: "Uma aplicação de tradução é feita para passar palavras para outra língua." },
            { objective: "O1", q: "Precisa de um cartão de agradecimento bonito para imprimir para os voluntários. O que abre primeiro?", options: ["Uma aplicação de tradução", "Uma ferramenta de design como o Canva", "Uma calculadora", "A escrita por voz"], answer: 1, why: "Uma ferramenta de design é feita para cartões e folhetos bonitos para imprimir ou partilhar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Falar com a IA usando a voz",
          minutes: 5,
          goal: "Fazer uma pergunta a um assistente de IA a falar em vez de escrever.",
          text: [
            "Se escrever é lento ou difícil para você, pode falar. A maioria das aplicações de assistente de IA tem um botão de microfone. Toque nele, diga a sua pergunta, e a aplicação transforma as suas palavras em texto.",
            "Os telefones também têm escrita por voz no teclado. Procure um pequeno microfone no teclado quando estiver a escrever uma mensagem.",
            "Fale com clareza e um pouco mais devagar do que o normal. Diga o que precisa, por exemplo: \"Ajude-me a escrever um bilhete curto para a professora do meu filho a dizer que ele vai faltar à escola na sexta-feira por causa de uma consulta médica.\" Leia as palavras antes de as enviar, porque a escrita por voz pode ouvir mal."
          ],
          steps: ["Abra a aplicação do assistente de IA ou uma mensagem no telefone.", "Encontre o botão de microfone.", "Toque nele e diga a sua pergunta com clareza.", "Leia as palavras que ele ouviu, corrija os erros e depois envie."],
          words: [["Escrita por voz", "uma função do telefone que transforma o que você diz em palavras escritas."], ["Botão de microfone", "um pequeno botão com o desenho de um microfone que deixa o aparelho ouvir."]],
          slides: [
            { title: "Fale em vez de escrever", bullets: ["A maioria das aplicações de IA tem um botão de microfone", "Os telefones têm escrita por voz no teclado"] },
            { title: "Como falar com ele", bullets: ["Fale com clareza, um pouco mais devagar", "Diga o que precisa e como o quer"] },
            { title: "Verifique antes de enviar", bullets: ["A escrita por voz pode ouvir mal as palavras", "Leia, corrija e depois envie"] }
          ],
          tryIt: "Use o botão de microfone para pedir a um assistente de IA que escreva um bilhete de duas frases para um professor, um chefe ou um vizinho. Leia-o e corrija os erros.",
          youCanNow: "pedir ajuda a um assistente de IA usando a voz e verificar o que ele ouviu.",
          quickCheck: [
            { objective: "O2", q: "Onde costuma encontrar a escrita por voz num telefone?", options: ["Nas definições da câmara", "No menu da bateria", "Num pequeno microfone no teclado", "Nos contactos do telefone"], answer: 2, why: "Os teclados dos telefones costumam ter um pequeno botão de microfone para a escrita por voz." },
            { objective: "O2", q: "Ditou um bilhete e a aplicação escreveu \"compra pão\" em vez de \"comprar pão\". O que faz?", options: ["Envia mesmo assim", "Apaga a aplicação", "Começa de novo em papel", "Corrige as palavras antes de enviar"], answer: 3, why: "A escrita por voz pode ouvir mal, por isso leia e corrija as palavras antes de enviar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Traduzir com a câmara do telefone",
          minutes: 5,
          goal: "Traduzir um cartaz, rótulo ou carta impressa apontando a câmara do telefone para ele.",
          text: [
            "Aplicações gratuitas como o Google Tradutor (Google Translate) conseguem ler palavras impressas pela câmara do telefone e mostrá-las noutra língua. Isto ajuda com cartazes, rótulos de medicamentos, avisos da escola e formulários escritos numa língua que você não lê bem.",
            "Na aplicação, escolha as duas línguas (a do papel e a que quer), escolha a opção da câmara e aponte o telefone para as palavras.",
            "A tradução automática ajuda, mas não é perfeita. Para medicamentos, papéis legais ou qualquer coisa importante, peça um intérprete. Muitos hospitais, clínicas e serviços do governo oferecem um sem custo; pergunte na receção."
          ],
          steps: ["Instale uma aplicação de tradução gratuita a partir da loja de aplicações oficial.", "Escolha a língua do papel e a língua que quer.", "Escolha a opção da câmara e aponte o telefone para as palavras.", "Para papéis importantes, peça um intérprete ao serviço."],
          words: [["Traduzir", "passar palavras de uma língua para outra."], ["Intérprete", "uma pessoa formada que traduz o que se diz entre duas línguas."]],
          slides: [
            { title: "A sua câmara consegue traduzir", bullets: ["Cartazes, rótulos, avisos da escola, formulários", "Aplicações gratuitas como o Google Tradutor"] },
            { title: "Como fazer", bullets: ["Escolha as duas línguas", "Escolha a opção da câmara", "Aponte o telefone para as palavras"] },
            { title: "Papéis importantes", bullets: ["A tradução automática não é perfeita", "Peça um intérprete ao serviço", "Muitas clínicas e serviços oferecem um de graça"] }
          ],
          tryIt: "Aponte a câmara de uma aplicação de tradução para um rótulo ou cartaz impresso em sua casa (uma caixa de comida serve). Traduza-o para outra língua e depois de volta.",
          youCanNow: "traduzir palavras impressas com a câmara do telefone e saber quando pedir antes a ajuda de uma pessoa.",
          quickCheck: [
            { objective: "O3", q: "O que é verdade sobre a tradução automática?", options: ["Ajuda, mas não é perfeita", "Está sempre exatamente certa", "Só funciona em inglês", "Precisa de uma conta paga"], answer: 0, why: "A tradução gratuita é uma grande ajuda, mas pode errar." },
            { objective: "O3", q: "O rótulo do seu medicamento está numa língua que você não lê bem. Qual é o passo mais seguro?", options: ["Adivinhar pelas imagens", "Pedir um intérprete à farmácia ou à clínica", "Usar só a tradução da câmara", "Perguntar a um desconhecido na internet"], answer: 1, why: "Para medicamentos e papéis legais, um intérprete formado é a ajuda mais segura." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A sua caixa de ferramentas de IA gratuitas",
        questions: [
          { objective: "O1", q: "Precisa de um folheto para uma venda de bolos da escola. Que tipo de ferramenta serve melhor?", options: ["Uma aplicação de tradução", "Uma ferramenta de design como o Canva", "Uma calculadora", "Uma aplicação de mapas"], answer: 1, why: "As ferramentas de design são feitas para folhetos e cartões." },
          { objective: "O2", q: "Escrever é difícil para você. Como pode mesmo assim fazer uma pergunta a um assistente de IA?", options: ["Não pode", "Pagar primeiro um curso de teclado", "Usar o botão de microfone e falar", "Pedir a outra pessoa para escrever a sua palavra-passe"], answer: 2, why: "A entrada por voz deixa você falar em vez de escrever." },
          { objective: "O2", q: "Porque ler o que a escrita por voz escreveu antes de enviar?", options: ["Pode ouvir mal as palavras", "Acrescenta sempre a sua morada", "Cobra dinheiro", "Apaga a sua mensagem"], answer: 0, why: "A escrita por voz pode errar as palavras." },
          { objective: "O3", q: "Quer ler um cartaz noutra língua. O que usa?", options: ["Uma ferramenta de design", "Uma aplicação de música", "Uma lanterna", "Uma aplicação de tradução com a opção da câmara"], answer: 3, why: "A opção da câmara lê e traduz palavras impressas." },
          { objective: "O3", q: "Precisa de perceber as instruções do seu médico noutra língua. O que é melhor?", options: ["Pedir um intérprete à clínica", "Adivinhar", "Usar só uma tradução no telefone", "Ignorar as instruções"], answer: 0, why: "Para medicamentos e papéis importantes, um intérprete formado é o mais seguro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer coisas com a IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever mensagens curtas com um assistente de IA",
          minutes: 4,
          goal: "Pedir a um assistente de IA que escreva uma mensagem curta e clara no tom que quer.",
          text: [
            "Um assistente de IA pode escrever mensagens curtas por você: um lembrete para o seu grupo da comunidade, um bilhete para o senhorio ou um agradecimento a um voluntário.",
            "Diga-lhe para quem é a mensagem, o que tem de dizer e o tom: simpático, educado ou firme. Diga o tamanho: \"três frases\" ou \"menos de 50 palavras\".",
            "Depois torne-a sua. Mude as palavras que não soam como você e verifique você mesmo os nomes, as datas e os lugares."
          ],
          steps: ["Diga para quem é a mensagem.", "Diga o que tem de incluir: data, hora, lugar, o que levar.", "Diga o tom e o tamanho.", "Edite-a para soar como você e verifique cada dado."],
          words: [["Tom", "a forma como uma mensagem soa: simpática, educada, séria ou firme."]],
          slides: [
            { title: "Mensagens curtas que a IA pode escrever", bullets: ["Lembretes para o seu grupo", "Bilhetes para o senhorio ou a escola", "Agradecimentos a voluntários"] },
            { title: "Diga-lhe quatro coisas", bullets: ["Para quem é", "O que tem de dizer", "O tom", "O tamanho"] },
            { title: "Torne-a sua", bullets: ["Mude as palavras que não soam como você", "Verifique nomes, datas e lugares"] }
          ],
          tryIt: "Peça a um assistente de IA: \"Escreva um lembrete simpático de três frases para os meus vizinhos sobre uma limpeza do bairro no sábado às 9 da manhã. Tragam luvas.\" Depois mude uma linha para soar como você.",
          youCanNow: "pedir a um assistente de IA uma mensagem curta com o tom e o tamanho certos e depois torná-la sua.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer \"tom\" numa mensagem?", options: ["O tamanho dela", "Para quem é", "Como soa, por exemplo simpática ou firme", "A data em que é enviada"], answer: 2, why: "O tom é a forma como uma mensagem soa a quem a lê." },
            { objective: "O4", q: "O lembrete da IA diz que a limpeza é no domingo, mas é no sábado. O que faz?", options: ["Envia; a IA sabe melhor", "Pede a todos que venham nos dois dias", "Apaga a mensagem toda", "Muda para sábado antes de enviar"], answer: 3, why: "Você verifica cada dado e corrige-o antes de enviar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Criar um folheto simples com o Canva",
          minutes: 6,
          goal: "Fazer um folheto de uma página na versão gratuita do Canva.",
          text: [
            "O Canva é um site e uma aplicação de design com uma versão gratuita. Tem modelos já feitos, por isso não precisa de ser artista. Pode usá-lo em canva.com num computador da biblioteca ou na aplicação do seu telefone.",
            "Procure no Canva um modelo, por exemplo \"folheto\" ou \"folheto de evento\". Clique num de que goste e depois clique nas palavras para as trocar pelas suas. Mantenha-o simples: um título grande, três linhas curtas (o quê, quando, onde) e uma imagem.",
            "Quando acabar, descarregue-o para imprimir ou partilhe-o por SMS ou email. O Canva pede que crie uma conta gratuita; num computador partilhado, termine a sessão quando acabar."
          ],
          steps: ["Vá a canva.com ou abra a aplicação do Canva e crie uma conta gratuita.", "Procure um modelo de folheto e escolha um.", "Clique em cada parte do texto e escreva as suas palavras.", "Fique por um título, três linhas curtas e uma imagem.", "Descarregue-o ou partilhe-o, e termine a sessão num computador partilhado."],
          words: [["Modelo", "um design já feito que você preenche com as suas palavras e imagens."], ["Descarregar", "guardar uma cópia de um ficheiro no seu aparelho."]],
          slides: [
            { title: "Canva: ferramenta de design gratuita", bullets: ["O site canva.com ou a aplicação do Canva", "Modelos já feitos", "Não precisa de saber desenhar"] },
            { title: "Faça o seu folheto", bullets: ["Procure um modelo de folheto", "Clique nas palavras e escreva as suas", "Título + o quê, quando, onde + uma imagem"] },
            { title: "Acabar e partilhar", bullets: ["Descarregue para imprimir", "Partilhe por SMS ou email", "Termine a sessão num computador partilhado"] }
          ],
          tryIt: "Abra o Canva, escolha um modelo de folheto e troque as palavras pelo lembrete que escreveu na Lição 4. Descarregue-o ou guarde-o na sua conta.",
          youCanNow: "fazer um folheto simples e claro usando um modelo gratuito do Canva.",
          quickCheck: [
            { objective: "O5", q: "O que é um modelo no Canva?", options: ["Um design já feito que você preenche com as suas palavras", "Um extra pago", "Um tipo de impressora", "Um filtro de fotografia"], answer: 0, why: "Um modelo é um design já feito, por isso só muda as palavras e as imagens." },
            { objective: "O5", q: "O seu folheto tem oito linhas de letra pequena. Como o torna mais fácil de ler?", options: ["Põe a letra mais pequena", "Reduz para um título e três linhas curtas", "Acrescenta mais imagens", "Usa cinco cores"], answer: 1, why: "Um título grande e três linhas curtas (o quê, quando, onde) são o mais fácil de ler." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Juntar as ferramentas",
          minutes: 5,
          goal: "Usar juntos um assistente de conversa, uma ferramenta de design e uma ferramenta de tradução para fazer um folheto acabado em duas línguas.",
          text: [
            "Os projetos reais muitas vezes usam mais de uma ferramenta. Para um folheto da comunidade, pode usar o assistente de conversa para escrever as palavras, o Canva para o design e uma ferramenta de tradução para fazer uma segunda versão.",
            "Peça à IA um título curto e três linhas de detalhes. Cole-os num modelo do Canva. Depois traduza as mesmas palavras para uma segunda língua que os seus vizinhos falam e faça uma cópia do folheto com elas.",
            "Se puder, peça a alguém que fala essa língua para ler a tradução. As ferramentas gratuitas são um bom começo; uma pessoa que lê bem essa língua deixa tudo certo."
          ],
          steps: ["Peça a um assistente de conversa um título e três linhas de detalhes.", "Ponha as palavras num modelo de folheto do Canva.", "Traduza as palavras para uma segunda língua.", "Faça uma cópia do folheto com a tradução.", "Se puder, peça a alguém que fala bem essa língua para o ler."],
          words: [["Projeto", "um trabalho com um resultado final claro, como um folheto."]],
          slides: [
            { title: "Um projeto, três ferramentas", bullets: ["Assistente de conversa: as palavras", "Canva: o design", "Aplicação de tradução: uma segunda língua"] },
            { title: "Os passos", bullets: ["Escreva as palavras com a IA", "Ponha-as num modelo do Canva", "Traduza e faça uma segunda cópia"] },
            { title: "Deixe tudo certo", bullets: ["Verifique cada data e lugar", "Peça a quem fala bem a língua para ler a tradução"] }
          ],
          tryIt: "Tarefa final: faça um folheto de uma página para um evento da comunidade. Use um assistente de IA para escrever um título e três linhas, crie o design no Canva e faça uma segunda cópia traduzida para outra língua que os seus vizinhos falam.",
          youCanNow: "usar várias ferramentas de IA gratuitas juntas para acabar um projeto real para a sua comunidade.",
          quickCheck: [
            { objective: "O5", q: "No projeto combinado, o que cola no modelo do Canva?", options: ["O seu número de telefone", "A conversa toda com a IA", "O título e as três linhas que a IA escreveu", "Um link para o site da IA"], answer: 2, why: "O assistente de conversa escreve as palavras e você põe-nas no folheto do Canva." },
            { objective: "O3", q: "Traduziu o seu folheto para espanhol, mas não fala espanhol. O que faz antes de o partilhar?", options: ["Partilha logo", "Traduz uma segunda vez", "Tira a cópia em espanhol", "Pede a alguém que fala bem espanhol para o ler"], answer: 3, why: "Uma pessoa que lê bem a língua apanha os erros que a ferramenta gratuita deixou passar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer coisas com a IA",
        questions: [
          { objective: "O4", q: "Que quatro coisas deve dizer a um assistente de IA quando pede uma mensagem curta?", options: ["A sua palavra-passe, morada, idade e banco", "Para quem é, o que tem de dizer, o tom e o tamanho", "Só a data", "Nada; ele adivinha"], answer: 1, why: "Estes quatro detalhes dão uma mensagem que serve." },
          { objective: "O5", q: "O que é um modelo?", options: ["Um vírus", "Uma palavra-passe", "Um design já feito que você preenche com as suas palavras", "Uma definição do telefone"], answer: 2, why: "Os modelos deixam os principiantes fazer designs bonitos." },
          { objective: "O5", q: "O que deve ter um folheto simples?", options: ["Um título grande e o quê, quando e onde", "Dez parágrafos", "O seu número da Segurança Social", "Só imagens, sem palavras"], answer: 0, why: "Os folhetos simples são fáceis de ler: título, detalhes e uma imagem." },
          { objective: "O5", q: "Usou o Canva num computador da biblioteca. O que faz no fim?", options: ["Deixa a sua conta aberta", "Guarda a palavra-passe no navegador", "Escreve a palavra-passe no ecrã", "Termina a sessão"], answer: 3, why: "Terminar a sessão protege a sua conta num computador partilhado." },
          { objective: "O3", q: "Traduziu o seu folheto com uma ferramenta gratuita. Como pode ter a certeza de que está certo?", options: ["Pedir a alguém que fala bem a língua para o ler", "Traduzi-lo mais dez vezes", "Pôr a letra maior", "Acrescentar mais imagens"], answer: 0, why: "Uma pessoa que lê bem a língua apanha os erros que as máquinas fazem." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ferramentas de IA Fáceis para Principiantes",
    questions: [
      { objective: "O1", q: "Quando escolhe uma ferramenta de IA, deve começar por:", options: ["A ferramenta mais cara", "A tarefa que precisa de fazer", "A aplicação mais nova", "O que um desconhecido sugerir"], answer: 1, why: "Comece pela tarefa e depois escolha a ferramenta que serve." },
      { objective: "O1", q: "Que ferramenta é melhor para escrever e explicar?", options: ["Uma aplicação de câmara", "Uma aplicação de lanterna", "Um assistente de conversa como o Copilot, o ChatGPT ou o Gemini", "Um leitor de música"], answer: 2, why: "Os assistentes de conversa são bons a escrever, explicar e planear." },
      { objective: "O1", q: "O Canva serve sobretudo para:", options: ["Criar folhetos e cartões", "Operações bancárias", "Chamadas telefónicas", "O tempo"], answer: 0, why: "O Canva é uma ferramenta de design com uma versão gratuita." },
      { objective: "O1", q: "O que deve experimentar primeiro quando escolhe uma ferramenta?", options: ["O plano mais caro", "Um curso pago", "Um anúncio que aparece no ecrã", "A versão gratuita"], answer: 3, why: "As versões gratuitas chegam para a maioria das tarefas de principiante." },
      { objective: "O2", q: "Como faz uma pergunta a falar na maioria das aplicações de IA?", options: ["Abana o telefone", "Toca no botão de microfone", "Desliga o telefone", "Abre a câmara"], answer: 1, why: "O botão de microfone deixa a aplicação ouvir." },
      { objective: "O2", q: "Quando usa a escrita por voz, ajuda:", options: ["Falar com clareza e um pouco mais devagar", "Sussurrar", "Falar muito depressa", "Tapar o microfone"], answer: 0, why: "Uma fala clara e mais lenta é ouvida com mais precisão." },
      { objective: "O2", q: "A escrita por voz escreveu \"sexta-feira\" como \"cesta feira\". Você deve:", options: ["Enviar mesmo assim", "Apagar a aplicação", "Corrigir antes de enviar", "Começar de novo num telefone novo"], answer: 2, why: "Leia e corrija sempre o que a escrita por voz ouviu." },
      { objective: "O3", q: "Para traduzir um aviso impresso da escola, pode:", options: ["Usar uma ferramenta de design", "Usar a opção da câmara de uma aplicação de tradução", "Usar a calculadora", "Esperar que alguém ligue"], answer: 1, why: "A opção da câmara lê e traduz palavras impressas." },
      { objective: "O3", q: "Numa aplicação de tradução, primeiro escolhe:", options: ["Uma palavra-passe", "Um tipo de letra", "Uma cor", "A língua do papel e a língua que quer"], answer: 3, why: "A aplicação precisa de saber as duas línguas." },
      { objective: "O3", q: "Para um papel legal numa língua que você não lê bem, a ajuda mais segura é:", options: ["Um intérprete formado", "Adivinhar", "Uma imagem engraçada da internet", "Saltá-lo"], answer: 0, why: "Os papéis importantes precisam de uma pessoa formada, não só de uma máquina." },
      { objective: "O4", q: "Qual é um bom pedido para uma mensagem curta?", options: ["\"mensagem\"", "\"Escreva um bilhete educado de duas frases para o meu senhorio a perguntar quando vai ser arranjado o aquecedor.\"", "\"escreve\"", "\"coisas para o senhorio\""], answer: 1, why: "Diz para quem, o quê, o tom e o tamanho." },
      { objective: "O4", q: "Depois de a IA escrever a sua mensagem, você deve:", options: ["Enviá-la sem ler", "Acrescentar os seus dados do banco", "Editá-la para soar como você e verificar os dados", "Publicá-la para todos"], answer: 2, why: "Você torna-a sua e verifica nomes, datas e lugares." },
      { objective: "O4", q: "Tom quer dizer:", options: ["Como uma mensagem soa, por exemplo simpática ou firme", "O tamanho da mensagem", "O tamanho da letra", "O volume do telefone"], answer: 0, why: "O tom é a forma como a mensagem soa a quem a lê." },
      { objective: "O5", q: "O que o Canva pede que crie antes de poder fazer um design?", options: ["Um pagamento", "Uma chamada telefónica", "Uma conta gratuita", "Um formulário impresso"], answer: 2, why: "O Canva usa uma conta gratuita para guardar os seus designs." },
      { objective: "O5", q: "Que folheto é mais fácil de ler?", options: ["Uma página cheia de letra minúscula", "Um título, três linhas curtas e uma imagem", "Dez imagens e nenhuma palavra", "Só um número de telefone"], answer: 1, why: "Curto e claro é o melhor para um folheto." },
      { objective: "O5", q: "Para ter uma cópia do seu folheto para imprimir, você:", options: ["Tira uma fotografia ao ecrã", "Fecha o navegador", "Envia um email ao Canva", "Descarrega-o"], answer: 3, why: "Descarregar guarda uma cópia que pode imprimir." },
      { objective: "O1", q: "No projeto combinado, que ferramenta escreve as palavras?", options: ["O assistente de conversa", "A aplicação de tradução", "A impressora", "A câmara"], answer: 0, why: "O assistente de conversa escreve o título e os detalhes." },
      { objective: "O3", q: "Porque fazer uma segunda cópia do folheto noutra língua?", options: ["Fica mais bonito", "Para mais vizinhos o poderem ler", "O Canva obriga", "Para gastar mais papel"], answer: 1, why: "Uma segunda língua chega a mais pessoas da sua comunidade." },
      { objective: "O4", q: "Antes de partilhar o folheto acabado, deve verificar:", options: ["O tempo", "A bateria do telefone", "Que todas as datas e lugares estão certos", "A cor da impressora"], answer: 2, why: "Dados errados num folheto mandam as pessoas para o lugar errado." },
      { objective: "O3", q: "Na tarefa final, a última ferramenta que usa é:", options: ["Uma calculadora", "Uma aplicação de música", "Um mapa", "Uma ferramenta de tradução para uma cópia numa segunda língua"], answer: 3, why: "O último passo faz o folheto numa segunda língua." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 4, 6, 7, 9, 10, 13, 14, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Palavras do assistente", objective: "O4", notYet: "Não há título nem detalhes, ou as palavras não foram verificadas.", meets: "Um título curto e três linhas da IA, editados para soarem bem, com as datas e os lugares verificados.", exceeds: "Pediu uma mudança à IA, como um tom mais simpático ou um título mais curto." },
      { name: "Design do folheto", objective: "O5", notYet: "Não há folheto, ou está cheio demais e é difícil de ler.", meets: "Um folheto de uma página no Canva com um título grande, o quê, quando e onde, e uma imagem.", exceeds: "Descarregou-o ou partilhou-o, e lê-se bem do outro lado de uma sala." },
      { name: "Segunda língua", objective: "O3", notYet: "Não há cópia traduzida.", meets: "Uma segunda cópia com as palavras traduzidas para uma língua que os vizinhos falam.", exceeds: "Uma pessoa que fala bem a língua leu a tradução e ela foi corrigida se foi preciso." },
      { name: "A ferramenta certa em cada passo", objective: "O1", notYet: "Não sabe dizer que ferramenta fez que trabalho.", meets: "Diz o nome do assistente de conversa, do Canva e da ferramenta de tradução em cada passo.", exceeds: "Explica porque cada ferramenta serve para o seu trabalho." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem um folheto ou uma mensagem real para um grupo da comunidade, uma escola ou um negócio em 30 dias (inquérito de seguimento)",
      "Os parceiros da comunidade dizem que há mais eventos divulgados em duas ou mais línguas",
      "Alunos que começam outro curso da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou de um centro comunitário",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Uma aplicação de tradução gratuita, como o Google Tradutor, e uma conta gratuita do Canva",
      "Um rótulo ou cartaz impresso para praticar a tradução com a câmara",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Ponha a trabalhar juntos alunos que falam línguas diferentes, para lerem as traduções uns dos outros.",
      "Ajude primeiro a criar a conta do Canva; é o que leva mais tempo aos principiantes.",
      "Lembre aos alunos que os medicamentos e os papéis legais precisam de um intérprete, não só de uma aplicação.",
      "Confirme que os alunos terminam a sessão no Canva e nas ferramentas de IA nos computadores partilhados.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
