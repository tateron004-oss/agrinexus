"use strict";

// Koach Learn course (Portuguese translation of youth/youth-ai-activism.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-ai-activism-pt",
  lang: "pt",
  translationOf: "youth-ai-activism",
  category: "Youth",
  name: "IA para o Ativismo e o Impacto Social",
  skills: "Escolher um problema local, Pesquisar e verificar factos com IA, Planear uma pequena ação, Escrever uma mensagem a quem decide, Divulgar com segurança e respeito",
  outcome: "planear uma pequena ação segura sobre um problema da escola ou da comunidade que lhe importa, usando a IA para o pesquisar, verificar os factos em fontes de confiança, escrever uma mensagem respeitosa a quem decide e fazer um plano simples para a divulgar.",
  about: [
    "Este curso é para adolescentes que querem fazer a diferença: um parque mais limpo, uma passadeira mais segura perto da escola, mais caixotes de reciclagem, uma recolha de alimentos ou um clube que acolhe bem os novos alunos. Ações pequenas e locais são um ótimo ponto de partida.",
    "Você vai escolher um problema, usar um assistente de IA como o ChatGPT, o Microsoft Copilot ou o Google Gemini para o pesquisar e ter ideias de soluções, verificar cada facto em fontes de confiança, planear uma pequena ação, escrever uma carta ou um e-mail respeitoso a alguém que pode ajudar e divulgar a sua mensagem com segurança.",
    "Veja as regras da sua escola sobre a IA e a idade mínima de cada ferramenta, e envolva um pai, uma mãe, um encarregado de educação ou um professor antes de criar uma conta, contactar autoridades ou organizar um evento. Cada lição acaba com uma tarefa \"Experimente agora\", há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Faça um plano de ação de uma página para um problema da escola ou da comunidade que lhe importa: o problema numa frase, dois factos que verificou em fontes de confiança, uma pequena ação com data e ajudantes, e o adulto que o apoia. Use a IA para ajudar a escrever o rascunho de uma carta ou e-mail respeitoso a quem decide (um diretor da escola, a direção do distrito escolar ou um membro da câmara municipal), verifique-o e reescreva-o com as suas palavras, e faça um plano simples para divulgar a sua mensagem com segurança.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adolescentes que querem fazer a diferença na escola ou na comunidade, por exemplo um parque mais limpo, uma passadeira mais segura, mais caixotes de reciclagem, uma recolha de alimentos ou um clube mais acolhedor.",
    startingPoint: "Importam-se com os problemas e veem-nos à sua volta, usam as redes sociais e talvez assistentes de IA. Poucos já verificaram factos em fontes de confiança, planearam uma ação com autorizações ou escreveram a alguém que decide.",
    gap: "A vontade sem um plano pode apagar-se, e a IA pode espalhar factos inventados ou imagens falsas que destroem a confiança. Os adolescentes precisam de escolher uma mudança que conseguem fazer, verificar cada facto, planear com segurança com um adulto e falar com respeito com quem tem poder para ajudar, para que a sua voz traga resultados reais.",
    constraints: [
      "Limites de idade e regras da escola sobre a IA; um pai, mãe, encarregado de educação ou professor participa antes de contactar autoridades ou organizar um evento",
      "Segurança: autorizações para eventos, nunca ir sozinho e nenhum dado privado na internet",
      "Os factos têm de ser verificados em fontes de confiança; nenhuma imagem ou citação falsa",
      "Aparelhos: um telefone ou um computador da escola ou da biblioteca com ferramentas gratuitas",
      "Lições curtas e palavras simples"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Pensando na sua escola ou comunidade", action: "escolher um problema local e descrevê-lo numa frase, dizendo quem é afetado e quem o pode resolver", standard: "escolhendo um problema em que pode trabalhar com segurança" },
    { id: "O2", condition: "Usando um assistente de IA e fontes de confiança", action: "pesquisar o seu problema e verificar cada facto, e também juntar as suas próprias provas", standard: "usando só factos confirmados por um site oficial ou por uma pessoa real" },
    { id: "O3", condition: "Com o seu problema", action: "planear uma pequena ação com data, ajudantes, as autorizações necessárias e um adulto que o apoia", standard: "com a autorização obtida antes de começar" },
    { id: "O4", condition: "Com os seus factos verificados", action: "escrever uma mensagem curta e respeitosa a quem decide, com um pedido concreto", standard: "reescrita com as suas palavras e lida por um adulto antes de a enviar" },
    { id: "O5", condition: "Quando divulga a sua ação", action: "criar um cartaz ou uma publicação que diga o quê, quando, onde e porquê, e partilhá-lo com segurança", standard: "a partir de uma conta aprovada, sem dados privados e sem ataques pessoais" },
    { id: "O6", condition: "Antes de partilhar qualquer coisa sobre a sua causa", action: "confirmar que é verdade, verificado e justo, identificar as imagens feitas com IA e escrever um plano de ação de uma página", standard: "sem usar imagens falsas nem citações falsas de pessoas reais" }
  ],
  chapters: [
    {
      name: "Capítulo 1: De se importar a ter um plano",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher um problema que consegue mesmo mudar",
          minutes: 4,
          goal: "Escolher um problema local e descrevê-lo numa frase clara.",
          text: [
            "Impacto social quer dizer tornar as coisas melhores para outras pessoas. Ativismo quer dizer trabalhar por uma mudança. Não tem de resolver o mundo inteiro. Um problema pequeno e local que consegue ver, como bebedouros avariados na escola ou lixo na paragem do autocarro, é mais fácil de mudar e ensina como a mudança acontece.",
            "Pergunte: Quem é afetado? Como seria melhor? Quem tem o poder de o resolver, por exemplo o diretor da escola, o orientador de um clube, a direção do distrito escolar ou a câmara municipal?",
            "Um assistente de IA pode ajudá-lo a ter ideias: \"Tenho 15 anos. Que pequenos problemas os adolescentes podem ajudar a resolver numa escola secundária ou num bairro?\" Depois escolha um que lhe importa e em que pode trabalhar com segurança."
          ],
          words: [["Impacto social", "tornar as coisas melhores para outras pessoas."], ["Ativismo", "trabalhar por uma mudança na sua escola, na sua comunidade ou no mundo."], ["Quem decide", "uma pessoa ou um grupo com o poder de fazer uma mudança."]],
          slides: [
            { title: "Comece pequeno e local", bullets: ["Um problema que consegue ver", "Mais fácil de mudar", "Ensina como a mudança acontece"] },
            { title: "Três perguntas", bullets: ["Quem é afetado?", "Como seria melhor?", "Quem tem o poder de o resolver?"] },
            { title: "Ter ideias com a IA", bullets: ["Peça ideias em que os adolescentes podem trabalhar", "Escolha uma que lhe importa", "Escolha uma em que pode trabalhar com segurança"] }
          ],
          tryIt: "Escreva o seu problema numa frase, como \"A nossa escola não tem caixotes de reciclagem no refeitório, por isso as latas vão para o lixo.\" Acrescente quem é afetado e quem o pode resolver.",
          youCanNow: "escolher um problema local e dizer quem ele afeta e quem o pode mudar.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer ativismo?", options: ["Publicar sobre si mesmo", "Resolver o mundo inteiro de uma vez", "Trabalhar por uma mudança", "Discutir na internet"], answer: 2, why: "Ativismo quer dizer trabalhar por uma mudança; impacto social quer dizer tornar as coisas melhores para os outros." },
            { objective: "O1", q: "Importa-se com muitos problemas. Qual é a melhor primeira escolha?", options: ["O lixo na sua paragem do autocarro, que vê e pode ajudar a resolver", "Acabar com toda a poluição do mundo", "Um problema num país de que não sabe nada", "O que está na moda"], answer: 0, why: "Um problema pequeno e local é mais fácil de mudar e ensina como a mudança acontece." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pesquisar com a IA e verificar cada facto",
          minutes: 6,
          goal: "Usar a IA para começar a pesquisa e depois confirmar os factos em fontes de confiança.",
          text: [
            "A IA é um bom ponto de partida: \"Explique porque as escolas fazem reciclagem e o que normalmente as impede. Sugira perguntas que devo fazer ao diretor da escola.\" Mas a IA pode estar errada ou desatualizada, e às vezes inventa números ou fontes. A isto chama-se alucinação.",
            "Cada facto que quer usar numa mensagem tem de ser verificado. Fontes de confiança são o site da sua escola ou do distrito escolar, o site oficial da sua cidade, sites do governo (muitos acabam em .gov) e pessoas reais, como um professor, um bibliotecário ou o serviço responsável.",
            "As suas próprias provas também contam. Conte os caixotes do lixo a transbordar, tire fotografias do problema (não de pessoas sem autorização) ou faça um pequeno inquérito aos colegas com a autorização de um professor."
          ],
          steps: ["Peça à IA para explicar o problema e sugerir perguntas.", "Anote os factos que quer usar.", "Verifique cada facto num site oficial ou com uma pessoa real.", "Junte as suas próprias provas: contagens, fotografias de lugares, um pequeno inquérito.", "Deite fora qualquer facto que não consegue confirmar."],
          words: [["Alucinação", "quando a IA escreve algo que parece verdade mas é inventado."], ["Provas", "factos que confirmam o que você diz."], ["Inquérito", "um pequeno conjunto de perguntas que faz a muitas pessoas."]],
          slides: [
            { title: "A IA é um ponto de partida", bullets: ["Explica o problema", "Sugere perguntas a fazer", "Pode estar errada ou inventar coisas"] },
            { title: "Verifique cada facto", bullets: ["Site da escola ou da cidade", "Sites do governo, muitas vezes .gov", "Professores, bibliotecários, o serviço responsável"] },
            { title: "As suas próprias provas", bullets: ["Contagens e fotografias de lugares", "Um pequeno inquérito, com autorização de um professor", "Nenhuma fotografia de pessoas sem autorização"] }
          ],
          tryIt: "Peça a um assistente de IA para explicar o seu problema e dar-lhe três factos. Verifique cada facto numa fonte de confiança e marque-o \"confirmado\" ou \"não confirmado\". Depois junte uma prova sua.",
          youCanNow: "pesquisar um problema com a IA e ficar só com os factos que confirmou em fontes de confiança.",
          quickCheck: [
            { objective: "O2", q: "Qual é uma fonte de confiança para uma regra do distrito escolar?", options: ["Uma publicação qualquer nas redes sociais", "Uma resposta da IA sem fonte", "O palpite de um amigo", "O site da sua escola ou do distrito escolar"], answer: 3, why: "Os sites oficiais da escola, do distrito, da cidade e do governo são fontes de confiança." },
            { objective: "O2", q: "Quer fotografias que mostrem o problema do lixo. O que fotografa?", options: ["Desconhecidos a deitar lixo para o chão", "Os lugares com lixo, não pessoas sem autorização", "As caras dos seus colegas", "A morada da sua casa"], answer: 1, why: "Fotografias do problema são boas provas; não fotografe pessoas sem autorização." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear uma pequena ação",
          minutes: 5,
          goal: "Transformar o seu problema numa pequena ação com data, ajudantes e um adulto que o apoia.",
          text: [
            "As boas ações são concretas: um dia de limpeza, uma proposta ao diretor para pôr caixotes de reciclagem, uma recolha de materiais, um discurso numa reunião da associação de estudantes. Escolha uma que pode fazer nas próximas semanas.",
            "Peça à IA: \"Ajude-me a planear uma limpeza de uma hora num parque para 10 alunos. Faça a lista dos materiais, das regras de segurança, de a quem pedir autorização e um calendário simples.\" Depois verifique o plano com um adulto.",
            "Primeiro a segurança: peça autorização à escola ou ao dono do parque, envolva um pai, uma mãe, um encarregado de educação ou um professor, nunca vá sozinho, e cumpra as regras sobre luvas, estradas ou lixo."
          ],
          steps: ["Escolha uma ação concreta.", "Peça à IA uma lista: materiais, passos, calendário, autorizações.", "Escolha uma data e os ajudantes.", "Peça a um pai, mãe, encarregado de educação, professor ou orientador para o apoiar.", "Obtenha as autorizações necessárias antes de começar."],
          words: [["Plano de ação", "uma lista do que vai fazer, quando, e quem ajuda."], ["Apoiante", "um adulto que ajuda e verifica o seu plano."]],
          slides: [
            { title: "Uma ação concreta", bullets: ["Uma limpeza, uma proposta, uma recolha ou um discurso", "Possível de fazer nas próximas semanas"] },
            { title: "Planear com a IA", bullets: ["Materiais e passos", "Calendário", "A quem pedir autorização"] },
            { title: "Primeiro a segurança", bullets: ["Peça autorização", "Um adulto envolvido", "Nunca sozinho; cumpra as regras"] }
          ],
          tryIt: "Use um assistente de IA para planear uma pequena ação para o seu problema. Anote a data, dois ajudantes, a autorização de que precisa e o adulto que o vai apoiar.",
          youCanNow: "transformar um problema num plano de ação seguro e concreto, com o apoio de um adulto.",
          quickCheck: [
            { objective: "O3", q: "O que torna uma ação concreta?", options: ["Tem um \"o quê\" claro, uma data e quem ajuda", "É muito grande", "Não tem prazo", "É só uma ideia"], answer: 0, why: "As ações concretas dizem o que vai fazer, quando e com quem." },
            { objective: "O3", q: "Planeia uma limpeza num parque da cidade. O que faz antes do dia?", options: ["Simplesmente aparece", "Vai sozinho mais cedo", "Pede autorização ao dono do parque e envolve um adulto", "Publica a morada da sua casa para os ajudantes"], answer: 2, why: "Primeiro a segurança: peça autorização, envolva um adulto e nunca vá sozinho." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: De se importar a ter um plano",
        questions: [
          { objective: "O1", q: "Qual é o melhor problema para começar?", options: ["Acabar com toda a fome do mundo até sexta-feira", "Conseguir caixotes de reciclagem no refeitório da escola", "Mudar todas as leis", "Consertar a internet inteira"], answer: 1, why: "Os problemas pequenos e locais são mais fáceis de mudar e ensinam como se faz." },
          { objective: "O1", q: "Quem é \"quem decide\"?", options: ["Uma pessoa ou um grupo com o poder de fazer a mudança", "Qualquer utilizador das redes sociais", "Um assistente de IA", "Um colega que concorda consigo"], answer: 0, why: "Quem decide, como um diretor da escola ou a câmara municipal, pode fazer a mudança." },
          { objective: "O2", q: "A IA dá-lhe um número (uma estatística) para a sua carta. O que faz?", options: ["Usa-o logo", "Aumenta-o", "Verifica-o numa fonte de confiança antes de o usar", "Pergunta à IA se tem a certeza e depois usa-o"], answer: 2, why: "A IA pode inventar números; confirme em fontes de confiança." },
          { objective: "O2", q: "Qual destas é uma prova sua?", options: ["Um boato", "Um palpite", "Uma história inventada", "Uma contagem dos caixotes do lixo a transbordar"], answer: 3, why: "Contagens e fotografias de lugares são provas que você mesmo junta." },
          { objective: "O3", q: "Antes de uma limpeza num parque, o que tem de fazer?", options: ["Ir sozinho à noite", "Pedir autorização e envolver um adulto", "Saltar as regras de segurança", "Publicar a sua morada na internet"], answer: 1, why: "A autorização e o apoio de um adulto mantêm a ação segura." }
        ]
      }
    },
    {
      name: "Capítulo 2: Falar e divulgar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever uma mensagem respeitosa a quem decide",
          minutes: 5,
          goal: "Usar a IA para escrever o rascunho de uma carta ou e-mail claro e respeitoso, e depois torná-lo seu.",
          text: [
            "Uma mensagem forte é curta e educada: quem você é (primeiro nome, ano escolar, escola ou bairro), o problema numa frase, um ou dois factos verificados, um pedido concreto e um agradecimento.",
            "Peça à IA: \"Ajude-me a escrever um e-mail curto e respeitoso ao diretor da minha escola a pedir caixotes de reciclagem no refeitório. Estou no 10.º ano. Estes são os meus factos: [os seus factos verificados]. Menos de 150 palavras.\" Depois reescreva-o com as suas palavras e tire tudo o que não verificou.",
            "Para saber a quem escrever, veja o site da sua escola ou do distrito escolar, ou o site oficial da sua cidade. Nos Estados Unidos, o USA.gov (o portal oficial do governo) tem uma página com links para os eleitos federais, estaduais e locais. Peça a um pai, mãe, encarregado de educação ou professor para ler a sua mensagem antes de a enviar."
          ],
          steps: ["Diga quem é, sem dados privados além do primeiro nome e do ano escolar.", "Diga o problema numa frase.", "Acrescente um ou dois factos verificados.", "Faça um pedido concreto e agradeça.", "Reescreva o rascunho da IA com as suas palavras e peça a um adulto para o ler antes de enviar."],
          words: [["Pedido concreto", "a coisa exata que quer que a pessoa faça."], ["Eleito", "uma pessoa escolhida por voto para um cargo, como um membro da câmara municipal."]],
          slides: [
            { title: "Uma mensagem forte", bullets: ["Quem você é", "O problema numa frase", "Um ou dois factos verificados", "Um pedido concreto e um agradecimento"] },
            { title: "A IA escreve o rascunho, você decide", bullets: ["Dê-lhe só factos verificados", "Reescreva com as suas palavras", "Menos de 150 palavras"] },
            { title: "A quem escrever", bullets: ["Site da escola ou do distrito escolar", "Site oficial da cidade", "Página de eleitos do USA.gov"] }
          ],
          sources: [{ name: "USA.gov: Encontre os seus eleitos", url: "https://www.usa.gov/elected-officials" }],
          tryIt: "Use um assistente de IA para escrever o rascunho de uma mensagem a quem decide sobre o seu problema, usando só os seus factos confirmados. Reescreva-a com as suas palavras e peça a um adulto para a ler. Não a envie antes disso.",
          youCanNow: "escrever uma mensagem curta, respeitosa e com factos verificados, que pede a quem decide uma mudança concreta.",
          quickCheck: [
            { objective: "O4", q: "O que é um \"pedido concreto\" numa mensagem?", options: ["Uma longa lista de queixas", "Um pedido claro, como pôr caixotes de reciclagem no refeitório", "Uma pergunta sobre o tempo", "O seu número de telefone"], answer: 1, why: "Um pedido concreto diz a quem decide exatamente o que quer que faça." },
            { objective: "O4", q: "O rascunho da IA tem um número que nunca verificou. O que faz?", options: ["Deixa-o; soa bem", "Arredonda-o para cima", "Põe-no em negrito", "Tira-o ou verifica-o antes de enviar"], answer: 3, why: "Reescreva o rascunho e tire tudo o que não verificou." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Divulgar com segurança",
          minutes: 5,
          goal: "Fazer um cartaz ou uma publicação simples sobre a sua ação e partilhá-lo com segurança.",
          text: [
            "As pessoas juntam-se quando a mensagem é clara: o quê, quando, onde e porque é importante. A IA pode ajudar a escrever um slogan ou uma publicação curta, e ferramentas gratuitas como o Canva (um site para fazer desenhos e cartazes) podem ajudar a fazer um cartaz. Verifique cada data, hora e lugar.",
            "Fique seguro na internet: publique a partir da conta de um clube da escola ou de uma conta aprovada pela família, se puder, mantenha privados o seu nome completo, número de telefone e morada, e não partilhe fotografias de outras pessoas sem autorização.",
            "Algumas pessoas vão discordar. Não faz mal. Responda com educação ou não responda, e nunca publique ataques pessoais. Se alguém o ameaçar ou assediar, não responda; guarde a mensagem, bloqueie, denuncie e conte a um adulto de confiança."
          ],
          steps: ["Escreva em poucas palavras o quê, quando, onde e porquê.", "Peça à IA três ideias de slogan e escolha ou reescreva uma.", "Faça um cartaz ou uma publicação e verifique cada detalhe.", "Partilhe a partir da conta de um clube ou de uma conta aprovada pela família.", "Deixe de fora os dados privados e conte a um adulto qualquer ameaça."],
          words: [["Slogan", "uma frase curta e fácil de lembrar sobre a sua causa."], ["Assédio", "mensagens maldosas ou ameaçadoras repetidas."]],
          slides: [
            { title: "Uma mensagem clara", bullets: ["O quê, quando, onde, porquê", "Um slogan curto", "Verifique cada detalhe"] },
            { title: "Partilhe com segurança", bullets: ["Conta de um clube ou aprovada pela família", "Nem número de telefone nem morada", "Nenhuma fotografia de outros sem autorização"] },
            { title: "Quando as pessoas discordam", bullets: ["Seja educado ou não responda", "Nenhum ataque pessoal", "Ameaças: guarde, bloqueie, denuncie, conte a um adulto"] }
          ],
          tryIt: "Peça a um assistente de IA três ideias de slogan para a sua ação. Escolha uma, faça um cartaz ou uma publicação simples com o quê, quando, onde e porquê, e peça a um adulto para o verificar antes de partilhar.",
          youCanNow: "fazer uma mensagem clara sobre a sua causa e partilhá-la com segurança e respeito.",
          quickCheck: [
            { objective: "O5", q: "Que quatro coisas o cartaz da sua ação deve dizer às pessoas?", options: ["O quê, quando, onde e porquê", "O seu nome completo, telefone, morada e escola", "Só um slogan", "Quem é o culpado"], answer: 0, why: "Uma mensagem clara diz o quê, quando, onde e porque é importante." },
            { objective: "O5", q: "Alguém publica um comentário maldoso a chamar-lhe nomes. O que faz?", options: ["Insulta de volta", "Publica os dados pessoais dessa pessoa", "Responde com educação ou não responde, e conta a um adulto se se tornar uma ameaça", "Apaga a sua campanha toda"], answer: 2, why: "Nunca publique ataques pessoais; guarde, bloqueie, denuncie e conte a um adulto as ameaças." }
          ]
        },
        {
          objectives: ["O6"],
          title: "IA responsável no ativismo, e o seu plano de ação",
          minutes: 6,
          goal: "Evitar conteúdos enganadores e terminar um plano de ação de uma página.",
          text: [
            "Com a IA é fácil criar imagens falsas, citações falsas e notícias falsas. Usá-las, mesmo por uma boa causa, destrói a confiança e pode espalhar mentiras. Nunca faça fotografias ou citações falsas de pessoas reais, e identifique qualquer imagem feita com IA que usar.",
            "Antes de partilhar qualquer coisa, pergunte: É verdade? Verifiquei? É justo para as pessoas envolvidas? Ficaria bem se a pessoa sobre quem escrevo o lesse?",
            "Agora junte tudo numa página: o problema, dois factos verificados, uma ação com data e ajudantes, o adulto que o apoia, a sua mensagem a quem decide e como a vai divulgar. Depois pense: o que funcionou, e o que faria a seguir?"
          ],
          steps: ["Verifique que cada imagem e citação é real ou está claramente identificada como IA.", "Pergunte: é verdade, verificado e justo?", "Escreva o seu plano de ação de uma página.", "Junte a sua mensagem e o seu plano de divulgação.", "Depois da ação, escreva o que funcionou e o que vem a seguir."],
          words: [["Desinformação", "informação falsa, partilhada por engano ou de propósito."], ["Identificação", "uma nota que diz que algo foi feito com IA."]],
          slides: [
            { title: "Nada de falsos", bullets: ["Nenhuma fotografia ou citação falsa de pessoas reais", "Identifique as imagens feitas com IA", "O falso destrói a confiança, mesmo por boas causas"] },
            { title: "Antes de partilhar", bullets: ["É verdade?", "Verifiquei?", "É justo?"] },
            { title: "O seu plano de uma página", bullets: ["O problema e dois factos verificados", "Uma ação, data, ajudantes, adulto", "Mensagem e plano de divulgação"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de ação de uma página com o problema, dois factos verificados, uma ação com data e ajudantes, o adulto que o apoia, a sua mensagem reescrita a quem decide e o seu plano para a divulgar com segurança.",
          youCanNow: "usar a IA com responsabilidade para planear, falar e divulgar uma pequena ação que faz uma diferença real.",
          quickCheck: [
            { objective: "O6", q: "O que é desinformação?", options: ["Um facto verificado", "Uma identificação numa imagem de IA", "O desenho de um cartaz", "Informação falsa partilhada por engano ou de propósito"], answer: 3, why: "Desinformação é informação falsa, e a IA torna fácil criá-la." },
            { objective: "O6", q: "Uma citação inventada de um líder local faria a sua causa espalhar-se muito na internet. O que faz?", options: ["Usa-a uma vez", "Não a usa; as citações falsas destroem a confiança e espalham mentiras", "Usa-a mas esconde o nome", "Pede à IA para a fazer parecer verdadeira"], answer: 1, why: "Citações ou fotografias falsas de pessoas reais destroem a confiança, mesmo por uma boa causa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Falar e divulgar",
        questions: [
          { objective: "O4", q: "O que deve estar numa mensagem a quem decide?", options: ["Um pedido concreto e um agradecimento", "Insultos pessoais", "Factos que não verificou", "A sua morada e o seu número de telefone"], answer: 0, why: "Um pedido claro e a boa educação fazem uma mensagem forte." },
          { objective: "O4", q: "Onde pode encontrar links para os seus eleitos (nos EUA)?", options: ["Uma publicação qualquer nas redes sociais", "Um palpite da IA", "A página de eleitos do USA.gov", "Um e-mail em corrente"], answer: 2, why: "O USA.gov tem links para os eleitos federais, estaduais e locais." },
          { objective: "O5", q: "Alguém publica uma ameaça na publicação da sua campanha. O que faz?", options: ["Responde com uma ameaça", "Partilha a morada dessa pessoa", "Ignora e não conta a ninguém", "Guarda, bloqueia, denuncia e conta a um adulto de confiança"], answer: 3, why: "As ameaças devem ser guardadas, bloqueadas, denunciadas e contadas a um adulto." },
          { objective: "O6", q: "Um amigo sugere uma fotografia falsa do presidente da câmara feita com IA para chamar a atenção. Você:", options: ["Diz que não; o falso espalha mentiras e destrói a confiança", "Faz a fotografia mas não a identifica", "Faz a fotografia por uma boa causa", "Publica-a e apaga-a mais tarde"], answer: 0, why: "Imagens falsas de pessoas reais enganam, mesmo por boas causas." },
          { objective: "O6", q: "O que deve perguntar antes de partilhar qualquer coisa sobre a sua causa?", options: ["Vai espalhar-se muito?", "É verdade, verificado e justo?", "É a publicação mais longa?", "Foi a IA que escreveu tudo?"], answer: 1, why: "A verdade, a verificação e a justiça mantêm a sua campanha digna de confiança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Ativismo e o Impacto Social",
    questions: [
      { objective: "O1", q: "Impacto social quer dizer:", options: ["Tornar as coisas melhores para outras pessoas", "Ter gostos (likes)", "Ganhar discussões", "Usar muito a IA"], answer: 0, why: "Impacto social é melhorar a vida dos outros." },
      { objective: "O1", q: "Porque começar com um problema pequeno e local?", options: ["Não faz diferença", "É mais fácil de mudar e ensina como a mudança acontece", "Os grandes problemas são proibidos", "Os adultos exigem isso"], answer: 1, why: "As pequenas vitórias dão habilidades e confiança." },
      { objective: "O1", q: "Qual é um problema claro numa frase?", options: ["\"As coisas estão mal\"", "\"Tudo devia mudar\"", "\"O nosso refeitório não tem caixotes de reciclagem, por isso as latas vão para o lixo\"", "\"As pessoas são chatas\""], answer: 2, why: "Diz qual é o problema e porque é importante." },
      { objective: "O1", q: "Quem pode resolver um problema com os bebedouros da escola?", options: ["Uma empresa de jogos de vídeo", "Um assistente de IA", "Um seguidor qualquer", "O diretor da escola ou o distrito escolar"], answer: 3, why: "Os responsáveis da escola podem fazer as reparações na escola." },
      { objective: "O2", q: "Uma alucinação da IA quer dizer:", options: ["A IA escreveu algo que parece verdade mas é inventado", "A IA está avariada", "A IA é muito criativa", "A IA é lenta"], answer: 0, why: "A IA pode inventar factos e fontes." },
      { objective: "O2", q: "Qual é uma fonte de confiança para uma regra da cidade?", options: ["Um meme", "O site oficial da cidade", "Um comentário anónimo", "Só uma resposta da IA"], answer: 1, why: "Os sites oficiais são o lugar para confirmar as regras." },
      { objective: "O2", q: "Não consegue confirmar um facto que a IA lhe deu. Deve:", options: ["Usá-lo na mesma", "Fazê-lo parecer mais certo", "Deixá-lo de fora", "Dizer que veio da IA"], answer: 2, why: "Use só factos que confirmou." },
      { objective: "O2", q: "Antes de fazer um pequeno inquérito aos colegas, deve:", options: ["Pedir as moradas deles", "Fazê-lo em segredo", "Pedir palavras-passe", "Ter a autorização de um professor"], answer: 3, why: "Os inquéritos na escola devem ser aprovados por um professor." },
      { objective: "O3", q: "Que ação é concreta?", options: ["Uma limpeza de uma hora no parque no sábado, dia 14, com 10 alunos", "\"Fazer alguma coisa um dia\"", "\"Resolver o ambiente\"", "\"Ser mais simpático\""], answer: 0, why: "Tem o quê, quando e quem." },
      { objective: "O3", q: "O que deve pedir à IA quando planeia uma ação?", options: ["Que a faça por você", "Materiais, passos, um calendário e a quem pedir autorização", "Informações privadas de pessoas", "Que faça provas falsas"], answer: 1, why: "A IA pode fazer uma lista útil, que depois você verifica com um adulto." },
      { objective: "O3", q: "Qual é uma regra de segurança para uma ação na comunidade?", options: ["Ir sozinho", "Saltar a autorização", "Envolver um pai, mãe, encarregado de educação ou professor", "Trabalhar perto do trânsito sem um plano"], answer: 2, why: "O apoio de um adulto e a autorização mantêm todos seguros." },
      { objective: "O4", q: "O que deve estar na sua mensagem ao diretor da escola?", options: ["O seu número de telefone para desconhecidos", "Insultos", "Boatos não verificados", "O seu primeiro nome, o ano escolar e um pedido concreto"], answer: 3, why: "Diga quem é de forma simples e peça com clareza." },
      { objective: "O4", q: "Depois de a IA escrever o rascunho da sua carta, deve:", options: ["Reescrevê-la com as suas palavras e tirar os factos não verificados", "Enviá-la logo", "Torná-la mais longa", "Acrescentar uma citação falsa"], answer: 0, why: "A sua mensagem deve ser sua e correta." },
      { objective: "O4", q: "Quem deve ler a sua mensagem antes de a enviar?", options: ["Ninguém", "Um pai, mãe, encarregado de educação ou professor", "Um desconhecido na internet", "Só a IA"], answer: 1, why: "Um adulto pode encontrar erros e mantê-lo seguro." },
      { objective: "O5", q: "Um bom cartaz diz às pessoas:", options: ["A morada da sua casa", "Só um slogan", "O quê, quando, onde e porquê", "Uma redação longa"], answer: 2, why: "Esses detalhes ajudam as pessoas a juntar-se." },
      { objective: "O5", q: "Que conta é a melhor para partilhar a sua campanha?", options: ["A conta de um desconhecido", "Uma conta com o seu número de telefone na descrição", "Uma conta falsa", "A conta de um clube da escola ou uma conta aprovada pela família"], answer: 3, why: "As contas aprovadas mantêm você mais seguro." },
      { objective: "O5", q: "Alguém discorda com educação da sua publicação. Você:", options: ["Responde com educação ou não responde", "Insulta essa pessoa", "Partilha os dados pessoais dela", "Faz uma publicação falsa sobre ela"], answer: 0, why: "O respeito mantém a sua causa forte." },
      { objective: "O6", q: "Desinformação é:", options: ["Um tipo de cartaz", "Informação falsa, partilhada por engano ou de propósito", "Um facto verificado", "Um inquérito"], answer: 1, why: "Desinformação é informação falsa." },
      { objective: "O6", q: "Usa no seu cartaz uma imagem de um parque limpo feita com IA. Deve:", options: ["Dizer que é uma fotografia real", "Escondê-la em letra pequena", "Identificá-la como feita com IA", "Tirar a data"], answer: 2, why: "A identificação mantém você honesto com o seu público." },
      { objective: "O6", q: "Depois da sua ação, um bom último passo é:", options: ["Apagar tudo", "Nunca mais o fazer", "Culpar os outros", "Escrever o que funcionou e o que fazer a seguir"], answer: 3, why: "Pensar no que fez ajuda a sua próxima ação a correr melhor." }
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
      8,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Problema claro",
        objective: "O1",
        notYet: "O problema é vago ou grande demais para trabalhar nele.",
        meets: "O problema numa frase, com quem é afetado e quem o pode resolver.",
        exceeds: "Também diz como seria melhor."
      },
      {
        name: "Factos verificados",
        objective: "O2",
        notYet: "Os factos não foram verificados ou vêm só da IA.",
        meets: "Dois factos confirmados em fontes de confiança, e as fontes são indicadas.",
        exceeds: "Também inclui provas do próprio aluno, como uma contagem ou um inquérito."
      },
      {
        name: "Ação e segurança",
        objective: "O3",
        notYet: "Sem data, ajudantes ou adulto que apoia, ou sem autorização.",
        meets: "Uma pequena ação com data, ajudantes, um adulto que apoia e a autorização necessária.",
        exceeds: "Inclui uma pequena lista de segurança para o dia."
      },
      {
        name: "Mensagem a quem decide",
        objective: "O4",
        notYet: "A mensagem é mal-educada, vaga ou usa factos não verificados.",
        meets: "Uma mensagem curta e respeitosa com o problema, factos verificados, um pedido concreto e um agradecimento, com as palavras do próprio aluno.",
        exceeds: "Um adulto já a leu, e ela indica a pessoa certa a contactar."
      },
      {
        name: "Partilha segura e honesta",
        objective: "O6",
        notYet: "O plano de divulgação tem dados privados, imagens falsas ou conteúdo de IA sem identificação.",
        meets: "Um plano para partilhar a partir de uma conta aprovada, sem dados privados, e com qualquer imagem de IA identificada.",
        exceeds: "Também diz como o aluno vai responder a quem discorda."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem a ação planeada em 60 dias com um adulto que os apoia",
      "Mensagens enviadas a quem decide e as respostas ou mudanças que se seguiram",
      "Alunos que entram ou criam um clube de serviço, um projeto da associação de estudantes ou um grupo comunitário em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador da escola ou da biblioteca com internet",
      "Um assistente de IA gratuito que o aluno pode usar, e uma ferramenta gratuita de desenho como o Canva",
      "Papel ou um documento para o plano de ação de uma página",
      "Um adulto que apoia: pai, mãe, encarregado de educação, professor ou orientador",
      "Cerca de 60 minutos no total, mais o tempo da própria ação"
    ],
    facilitatorNotes: [
      "Ajude os alunos a escolher problemas locais em que podem trabalhar com segurança; afaste-os de tudo o que os obrigue a ir sozinhos ou a confrontar pessoas.",
      "Aprove as autorizações e o adulto que apoia antes de qualquer evento ou de qualquer mensagem enviada.",
      "Leia cada mensagem e cada cartaz antes de sair, para verificar os factos, o tom e a privacidade.",
      "Fale sobre como responder a quem discorda e ao assédio na internet, e diga a quem os alunos devem contar.",
      "Avalie o plano de ação com a grelha de avaliação e acompanhe os alunos depois da ação para os ajudar a pensar no que fizeram."
    ]
  }
};
