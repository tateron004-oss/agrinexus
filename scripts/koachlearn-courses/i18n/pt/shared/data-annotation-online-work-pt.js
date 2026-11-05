"use strict";

// Koach Learn course (Portuguese translation of shared/data-annotation-online-work.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const MINDRIFT = { name: "Mindrift (tarefas de treino de IA; diz que as tarefas da Toloka passaram para lá e que a inscrição é gratuita)", url: "https://mindrift.ai/welcome" };
const CROWDGEN = { name: "CrowdGen da Appen (projetos para colaboradores; diz que nunca pede pagamento para entrar)", url: "https://crowdgen.com/" };
const CLICKWORKER = { name: "Clickworker (microtarefas como dados de treino de IA, inquéritos e gravações de voz)", url: "https://www.clickworker.com/clickworker/" };
const SAMA = { name: "Sama, carreiras (escritórios em Nairobi, Quénia, e em Gulu e Kampala, Uganda)", url: "https://www.sama.com/careers" };
const FTC_JOBS = { name: "Comissão Federal de Comércio dos EUA (FTC): Burlas de emprego", url: "https://consumer.ftc.gov/articles/job-scams" };
const ILO_PLATFORMS = { name: "OIT: O papel das plataformas digitais de trabalho na transformação do mundo do trabalho", url: "https://www.ilo.org/publications/flagship-reports/role-digital-labour-platforms-transforming-world-work" };
const NDPC = { name: "Comissão de Proteção de Dados da Nigéria (NDPC)", url: "https://ndpc.gov.ng/" };

module.exports = {
  id: "data-annotation-online-work-pt",
  lang: "pt",
  translationOf: "data-annotation-online-work",
  category: "Workforce Development",
  name: "Anotação de Dados para IA e Microtrabalhos na Internet",
  skills: "Reconhecer o trabalho de anotação de dados e de microtarefas, Rotular dados seguindo uma diretriz, Passar em testes de qualificação e manter a qualidade alta, Verificar se uma plataforma é verdadeira e recusar empregos falsos, Proteger os dados pessoais e os dados das tarefas, Calcular o seu verdadeiro ganho por hora",
  outcome: "rotular dados para IA seguindo uma diretriz escrita, verificar se uma plataforma de trabalho na internet é verdadeira antes de entrar, proteger os seus dados e os dados que vê, e calcular quanto o trabalho lhe paga realmente por hora.",
  about: [
    "As ferramentas de IA aprendem com exemplos que as pessoas preparam: fotos com caixas desenhadas à volta dos carros, frases marcadas como positivas ou negativas, gravações escritas em texto e respostas de IA classificadas da melhor para a pior. Este trabalho chama-se anotação de dados ou rotulagem de dados. Muitas pessoas fazem-no na internet como pequenas tarefas pagas, chamadas microtrabalhos, de Nairobi a Lagos, Acra, Dacar, Manila, Hyderabad, Bogotá, Cidade do México, Casablanca, Cairo e cidades de todos os Estados Unidos.",
    "Este curso é para jovens e adultos com um telefone ou computador que querem experimentar este trabalho com segurança. Vai aprender os principais tipos de tarefas, praticar a rotulagem com uma diretriz escrita em papel, perceber como funcionam os testes de qualificação e as pontuações de qualidade, verificar se uma plataforma é verdadeira, recusar os muitos \"empregos de IA\" falsos que pedem dinheiro, proteger dados privados e calcular o seu verdadeiro ganho por hora.",
    "Seja honesto consigo sobre o dinheiro. O pagamento é irregular: há semanas com muitas tarefas e semanas com muito poucas, e o tempo gasto em testes e à procura de tarefas muitas vezes não é pago. Uma plataforma verdadeira nunca lhe pede para pagar para começar. O curso não promete rendimento; ajuda-o a decidir de olhos abertos.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\" que pode fazer em papel ou no telefone. Há 2 perguntas rápidas depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o seu plano para começar no microtrabalho: (1) um conjunto de prática de 10 itens que rotulou com a sua própria diretriz de uma página, com os itens pouco claros sinalizados; (2) duas plataformas que verificou, com o que encontrou em cada verificação (site oficial, inscrição gratuita, se aceita o seu país, como paga); (3) a sua lista de cinco sinais de alerta de burla; (4) as suas três regras de segurança dos dados; e (5) um registo semanal de tempo e pagamento com um plano de 4 semanas e datas, incluindo como vai calcular o seu verdadeiro ganho por hora.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos nos Estados Unidos e noutros países (Quénia, Nigéria, Gana, Senegal, Costa do Marfim, Filipinas, Índia, México, Colômbia, Marrocos, Egito): quem acabou a escola, licenciados, pais e mães em casa, pessoas à procura de um rendimento extra e quem procura emprego e vê sempre anúncios de \"ganhe com IA\". O curso está traduzido em dez línguas.",
    startingPoint: "Sabem usar um smartphone, o WhatsApp e as redes sociais; alguns têm um portátil ou usam um cibercafé ou uma biblioteca. A maioria nunca rotulou dados, leu uma diretriz de tarefas ou fez um teste de qualificação. Muitos já viram ofertas de \"trabalho a partir de casa\" com tarefas que pediam um depósito.",
    gap: "Os alunos precisam de saber como é o verdadeiro trabalho com dados de IA, rotular com cuidado seguindo uma diretriz, avaliar se uma plataforma é verdadeira, proteger dados privados e calcular o pagamento real, para poderem ganhar onde há trabalho verdadeiro e não perderem dinheiro nem documentos de identificação em empregos falsos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; traduzido em dez línguas",
      "Aparelhos: muitas vezes só um smartphone; os dados móveis são caros; a eletricidade pode falhar",
      "Tempo: lições de 4 a 6 minutos; prática em papel",
      "As plataformas, os países que aceitam, as formas de pagamento e os valores mudam muitas vezes: os alunos verificam as páginas de cada plataforma",
      "Nunca pague para começar; nunca partilhe palavras-passe, PIN, códigos de uso único nem documentos de identificação fora da verificação oficial de uma plataforma"
    ],
    prerequisites: "Competências básicas de telefone ou computador e um endereço de email. Leitura cuidadosa na língua das tarefas."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de oito tarefas na internet", action: "identificar quais são de anotação de dados ou microtarefas e dizer a competência que cada uma pede", standard: "acertando pelo menos 6 de 8" },
    { id: "O2", condition: "Com uma diretriz de rotulagem curta e dez itens de exemplo", action: "rotular cada item seguindo a diretriz e sinalizar os pouco claros", standard: "igual à chave de respostas em pelo menos 8 de 10" },
    { id: "O3", condition: "Antes de começar um teste de qualificação", action: "listar os passos que vai seguir para ler a diretriz, praticar e verificar o seu próprio trabalho", standard: "para conseguir explicar como vai manter alta a sua pontuação de qualidade" },
    { id: "O4", condition: "Com uma plataforma ou uma oferta de emprego", action: "verificar se é verdadeira e dizer os sinais de alerta de emprego falso", standard: "antes de pagar qualquer coisa ou partilhar qualquer documento" },
    { id: "O5", condition: "Enquanto faz tarefas", action: "manter privados os seus dados pessoais e os dados das tarefas", standard: "sem partilhar palavras-passe, códigos nem conteúdo das tarefas fora da plataforma" },
    { id: "O6", condition: "Depois de uma semana de prática ou de tarefas reais", action: "registar o seu tempo e pagamento e calcular o seu verdadeiro ganho por hora", standard: "contando o tempo não pago, como testes e procura de tarefas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fazer bem o trabalho",
      lessons: [
        {
          title: "O que são a anotação de dados e os microtrabalhos",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar os principais tipos de tarefas com dados de IA e a competência que cada um pede.",
          text: [
            "As ferramentas de IA aprendem com exemplos. As pessoas preparam esses exemplos acrescentando rótulos: esta foto mostra uma bicicleta, esta mensagem é uma reclamação, esta frase está em hauçá, esta resposta da IA é melhor do que aquela. Acrescentar rótulos chama-se anotação de dados ou rotulagem de dados.",
            "Tipos comuns de tarefas: rotulagem de imagens (desenhar uma caixa à volta de cada carro, ou escolher uma categoria), rotulagem de texto (esta opinião é positiva, negativa ou neutra?), trabalho com áudio (escrever o que alguém diz, ou gravar a sua voz a ler frases) e classificação de respostas de IA (ler duas respostas de uma IA e escolher a melhor, com uma razão). Alguns projetos mais novos pedem especialistas, como enfermeiros, contabilistas ou pessoas que falam bem duas línguas.",
            "Os microtrabalhos são pequenas tarefas na internet pagas uma a uma, que muitas vezes levam de segundos a minutos. Algumas pessoas fazem-nas em plataformas abertas a partir de casa; outras são contratadas como funcionários num escritório, por exemplo por empresas com equipas de dados em Nairobi ou Kampala. Em qualquer caso, as competências principais são ler com atenção, seguir as regras à risca, manter a atenção e ser honesto."
          ],
          words: [["Anotação de dados (rotulagem de dados)", "acrescentar rótulos a fotos, textos, áudios ou vídeos para que uma ferramenta de IA aprenda com eles."], ["Microtrabalho (microtarefa)", "uma pequena tarefa na internet, paga uma a uma."], ["Classificação de respostas de IA", "ler respostas de uma ferramenta de IA e avaliar qual é melhor, seguindo regras."], ["Transcrição", "escrever exatamente o que é dito numa gravação."]],
          slides: [
            { title: "A IA aprende com exemplos rotulados", bullets: ["São as pessoas que acrescentam os rótulos", "Chama-se anotação de dados ou rotulagem de dados"] },
            { title: "Tipos comuns de tarefas", bullets: ["Imagens: caixas ou categorias", "Texto: positivo, negativo ou neutro", "Áudio: escrever o que é dito, ou gravar a sua voz", "Respostas de IA: escolher a melhor, com uma razão"] },
            { title: "Onde está o trabalho", bullets: ["Plataformas abertas na internet, tarefa a tarefa", "Empregos de escritório em empresas de dados, como funcionário", "Projetos para quem tem uma profissão ou fala duas línguas"] },
            { title: "As competências que mais contam", bullets: ["Ler com atenção", "Seguir as regras à risca", "Atenção constante e honestidade"] }
          ],
          sources: [SAMA, ILO_PLATFORMS],
          tryIt: "Escreva num papel os quatro tipos de tarefas (imagem, texto, áudio, classificação de IA). Ao lado de cada um, escreva uma competência que já tem e que serve, por exemplo \"Falo português e changana\" ao lado do áudio, ou \"Reparo em pequenos detalhes\" ao lado das imagens.",
          youCanNow: "dizer os principais tipos de tarefas com dados de IA e ligar cada um a uma competência que já tem.",
          quickCheck: [
            { objective: "O1", q: "Qual destas é uma tarefa de anotação de dados?", options: ["Vender telefones na internet", "Entregar comida de mota", "Desenhar uma caixa à volta de cada carro numa foto de uma rua", "Reparar o ecrã de um portátil"], answer: 2, why: "Desenhar caixas à volta de objetos é rotulagem de imagens, uma das principais tarefas de anotação." },
            { objective: "O1", q: "Uma tarefa mostra-lhe duas respostas de IA e pergunta qual é melhor e porquê. Que tipo de tarefa é?", options: ["Classificação de respostas de IA", "Transcrição", "Rotulagem de imagens", "Introdução de dados de faturas"], answer: 0, why: "Avaliar respostas de IA com uma razão é classificação de respostas de IA." }
          ]
        },
        {
          title: "Rotular seguindo a diretriz",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rotular dez itens de exemplo seguindo uma diretriz escrita e sinalizar os pouco claros.",
          text: [
            "Cada projeto tem uma diretriz: as regras de como rotular. Diz o que cada rótulo quer dizer, dá exemplos e explica os casos difíceis. A sua opinião conta menos do que a diretriz. Se a diretriz diz \"uma pessoa num cartaz conta como pessoa\", você rotula-a assim, mesmo que lhe pareça estranho.",
            "Leia a diretriz toda antes da primeira tarefa e depois mantenha-a aberta. Procure os exemplos e os casos-limite: os itens que podem caber em dois rótulos. A maioria dos erros acontece aí.",
            "Quando um item não é mesmo claro, não tente adivinhar ao acaso. Use a opção de saltar ou sinalizar, se existir, ou faça o que a diretriz manda fazer com itens pouco claros. Com cuidado e sempre da mesma forma é melhor do que depressa."
          ],
          steps: ["Leia a diretriz toda uma vez, devagar.", "Escreva cada rótulo e o que quer dizer, com as suas palavras.", "Estude os exemplos e os casos-limite.", "Rotule cada item, consultando a diretriz quando tiver dúvidas.", "Sinalize ou salte os itens que a diretriz não cobre, como ela manda."],
          words: [["Diretriz", "as regras escritas de um projeto de rotulagem: o que cada rótulo quer dizer e como tratar os casos difíceis."], ["Caso-limite", "um item que pode caber em mais de um rótulo, por isso é preciso consultar a regra."], ["Sinalizar", "marcar um item como pouco claro ou com defeito para que um revisor o veja."]],
          slides: [
            { title: "Quem manda é a diretriz", bullets: ["Diz o que cada rótulo quer dizer", "Dá exemplos e casos difíceis", "Siga-a, mesmo acima da sua opinião"] },
            { title: "Como rotular bem", bullets: ["Leia primeiro a diretriz toda", "Mantenha-a aberta enquanto trabalha", "Consulte-a sempre que tiver dúvidas"] },
            { title: "Casos-limite e itens pouco claros", bullets: ["A maioria dos erros acontece nos casos-limite", "Sinalize ou salte como diz a diretriz", "Com cuidado e sempre igual é melhor do que depressa"] }
          ],
          tryIt: "Pratique em papel. Diretriz: rotule cada mensagem POSITIVA (contente com o serviço), NEGATIVA (descontente) ou NEUTRA (uma pergunta ou um facto); se for contente e descontente ao mesmo tempo, rotule pelo pedido principal. Rotule estas dez: 1 \"Obrigado, a entrega foi rápida!\" 2 \"Onde fica a vossa loja em Kumasi?\" 3 \"O pão estava duro outra vez.\" 4 \"Ótimo preço, mas a caixa veio partida. Por favor troquem-na.\" 5 \"Abrem ao domingo?\" 6 \"O melhor alfaiate de Dacar!\" 7 \"Esperei duas horas.\" 8 \"A encomenda 2231 chegou.\" 9 \"Adoro, mas preciso de reembolso do segundo.\" 10 \"asdf\". Chave de respostas: 1 POS, 2 NEU, 3 NEG, 4 NEG, 5 NEU, 6 POS, 7 NEG, 8 NEU, 9 NEG, 10 sinalizar (não é uma mensagem verdadeira).",
          youCanNow: "ler uma diretriz de rotulagem, aplicá-la a cada item e sinalizar os itens que ela não cobre.",
          quickCheck: [
            { objective: "O2", q: "A diretriz diz que uma pessoa de desenho animado conta como pessoa. Você acha que não devia. O que faz?", options: ["Segue a sua própria opinião", "Rotula-a como pessoa, como diz a diretriz", "Salta todos os desenhos animados", "Pede a um amigo no WhatsApp para decidir"], answer: 1, why: "No trabalho de rotulagem, quem decide é a diretriz, não a opinião pessoal." },
            { objective: "O2", q: "Um item não cabe em nenhum rótulo da diretriz. Qual é o melhor passo?", options: ["Escolher um rótulo ao acaso para poupar tempo", "Dar-lhe o rótulo mais comum", "Sair da plataforma", "Sinalizá-lo ou saltá-lo como a diretriz manda"], answer: 3, why: "Sinalizar os itens pouco claros mantém os dados limpos e protege a sua pontuação de qualidade." }
          ]
        },
        {
          title: "Testes de qualificação e pontuações de qualidade",
          objectives: ["O3"],
          minutes: 5,
          goal: "Listar os passos que vai seguir para passar num teste de qualificação e manter alta a sua pontuação de qualidade.",
          text: [
            "A maioria dos projetos começa com um teste de qualificação: um pequeno conjunto de tarefas de prática com respostas conhecidas. Normalmente precisa de um bom resultado para ter trabalho pago. Em muitas plataformas, o tempo deste teste não é pago, por isso prepare-se bem e faça-o quando estiver descansado.",
            "Depois de começar, a plataforma continua a verificar o seu trabalho. Alguns itens têm respostas conhecidas escondidas, e há revisores que verificam amostras. Juntos, isto forma a sua pontuação de qualidade. Uma pontuação alta pode trazer mais tarefas; uma pontuação baixa pode tirá-lo de um projeto.",
            "Para manter a qualidade alta: leia os comentários que receber, volte a ler a diretriz quando ela muda, vá devagar nos casos-limite, faça pausas e nunca use truques nem copie respostas. Alguns projetos não deixam usar ferramentas de IA para fazer a tarefa por você; siga as regras do projeto."
          ],
          steps: ["Leia a diretriz toda antes do teste.", "Faça as tarefas de prática que houver.", "Faça o teste descansado, com internet estável.", "Depois de cada lote, leia os comentários e anote os seus erros.", "Volte a ler a diretriz sempre que for atualizada."],
          words: [["Teste de qualificação", "um pequeno teste de tarefas de prática em que tem de passar antes de ter trabalho pago num projeto."], ["Pontuação de qualidade", "uma medida de quantas vezes os seus rótulos estão certos, usada para decidir se recebe mais tarefas."], ["Pergunta de ouro", "uma tarefa escondida com resposta conhecida, usada para verificar se acerta."]],
          slides: [
            { title: "Antes do trabalho pago: um teste", bullets: ["Tarefas de prática com respostas conhecidas", "Muitas vezes não é pago, por isso prepare-se primeiro", "Faça-o descansado, com internet estável"] },
            { title: "O seu trabalho é sempre verificado", bullets: ["Respostas conhecidas escondidas", "Revisores verificam amostras", "Juntos formam a sua pontuação de qualidade"] },
            { title: "Mantenha a pontuação alta", bullets: ["Leia os comentários e anote os erros", "Volte a ler a diretriz quando muda", "Vá devagar nos casos-limite; faça pausas", "Siga as regras do projeto sobre ferramentas de IA"] }
          ],
          tryIt: "Corrija os seus dez rótulos de prática da lição anterior com a chave de respostas. Escreva a sua pontuação em 10, os itens que errou e uma regra que vai verificar com mais cuidado da próxima vez. Depois escreva o seu plano de cinco passos para o seu primeiro teste de qualificação verdadeiro.",
          youCanNow: "preparar-se para um teste de qualificação, verificar o seu trabalho com uma chave de respostas e explicar como vai manter alta a sua pontuação de qualidade.",
          quickCheck: [
            { objective: "O3", q: "O que é um teste de qualificação num projeto de rotulagem?", options: ["Um pequeno conjunto de tarefas de prática em que tem de passar antes do trabalho pago", "Um exame escolar que tem de pagar", "Um pedido de empréstimo", "Uma entrevista em vídeo com o chefe do cliente"], answer: 0, why: "Os projetos usam um teste de qualificação para ver se consegue seguir a diretriz antes de dar tarefas pagas." },
            { objective: "O3", q: "A sua pontuação de qualidade desce depois de uma atualização da diretriz. O que deve fazer primeiro?", options: ["Trabalhar mais depressa para compensar", "Abrir uma segunda conta", "Voltar a ler a diretriz atualizada e os seus comentários", "Ignorar; as pontuações não contam"], answer: 2, why: "Uma descida depois de uma atualização costuma querer dizer que uma regra mudou; voltar a lê-la e ler os comentários corrige a causa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fazer bem o trabalho",
        questions: [
          { objective: "O1", q: "Escrever exatamente o que alguém diz numa gravação chama-se:", options: ["Rotulagem de imagens", "Classificação de respostas de IA", "Contabilidade", "Transcrição"], answer: 3, why: "Transcrição quer dizer escrever exatamente o que é dito." },
          { objective: "O1", q: "Que competência conta mais no trabalho de rotulagem?", options: ["Escrever depressa com muitos erros", "Ler com atenção e seguir as regras à risca", "Ter um computador caro", "Saber programar"], answer: 1, why: "A rotulagem depende de ler as regras com atenção e aplicá-las sempre da mesma forma." },
          { objective: "O2", q: "Diretriz: rotule uma mensagem NEGATIVA se a pessoa está descontente. \"A comida chegou fria e atrasada.\" Que rótulo?", options: ["NEGATIVA", "POSITIVA", "NEUTRA", "Sinalizar"], answer: 0, why: "A pessoa está descontente com a comida, por isso a diretriz diz NEGATIVA." },
          { objective: "O2", q: "Onde acontece a maioria dos erros de rotulagem?", options: ["Só no primeiro item", "Nos itens com exemplos claros", "Nos casos-limite que podem caber em dois rótulos", "Nos itens que sinaliza"], answer: 2, why: "Os casos-limite podem caber em mais de um rótulo, por isso pedem uma verificação cuidadosa das regras." },
          { objective: "O3", q: "Que hábito ajuda a manter alta a sua pontuação de qualidade?", options: ["Copiar respostas de um grupo de conversa", "Ler os comentários depois de cada lote e anotar os erros", "Trabalhar dez horas sem pausas", "Adivinhar depressa nos itens difíceis"], answer: 1, why: "Os comentários mostram exatamente que regras lhe estão a falhar, para as poder corrigir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabalhar com segurança e ganhar com honestidade",
      lessons: [
        {
          title: "Verificar se uma plataforma é verdadeira e recusar empregos falsos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Verificar se uma plataforma ou oferta de emprego é verdadeira e dizer os sinais de alerta de uma falsa.",
          text: [
            "Existem plataformas verdadeiras. Exemplos que dizem nos seus próprios sites que a inscrição é gratuita são a CrowdGen da Appen, a Mindrift (para onde passaram as tarefas da Toloka) e a Clickworker. As plataformas mudam, fecham e aceitam países diferentes, por isso verifique sempre no site da própria plataforma se aceita o seu país, que trabalho oferece e como paga.",
            "Os \"empregos de IA\" falsos estão por todo o lado, no WhatsApp, no Telegram, no TikTok e no Facebook. O maior sinal: pedem-lhe para pagar. Um emprego verdadeiro nunca lhe pede uma taxa para entrar, para desbloquear tarefas, para formação, para um kit inicial ou para levantar o que ganhou. A Comissão Federal de Comércio dos EUA (FTC) diz que os empregadores honestos não cobram para lhe dar um emprego.",
            "Outros sinais de alerta: pagamento bom demais para trabalho fácil; um recrutador que só fala pelo WhatsApp ou pelo Telegram; tarefas como dar \"gosto\" em vídeos ou avaliar produtos em que tem de depositar dinheiro (muitas vezes criptomoeda) para continuar; receber um pagamento e depois pedirem-lhe para devolver uma parte; pedidos do seu documento de identificação, PIN do banco ou código de uso único numa conversa; e pressão para decidir hoje."
          ],
          steps: ["Encontre você mesmo o site oficial da plataforma; não use o link da mensagem.", "Confirme que a inscrição é gratuita e leia as páginas sobre ganhos e pagamentos.", "Confirme que aceita trabalhadores do seu país.", "Pesquise o nome da plataforma com a palavra \"burla\" (ou \"scam\") e leia o que outras pessoas contam.", "Recuse qualquer oferta que peça para pagar, depositar ou devolver dinheiro."],
          words: [["Burla de tarefas", "um emprego falso em que faz tarefas simples, vê ganhos falsos e lhe dizem para depositar dinheiro para continuar ou levantar."], ["Recrutador", "uma pessoa que procura trabalhadores para uma empresa. Os verdadeiros não cobram nada."], ["Site oficial", "o site da própria plataforma, que você encontra sozinho, não por um link que alguém lhe envia."]],
          slides: [
            { title: "Plataformas verdadeiras: verifique você mesmo", bullets: ["Encontre sozinho o site oficial", "A inscrição deve ser gratuita", "Veja o seu país, o trabalho e como paga"] },
            { title: "O sinal de alerta número um", bullets: ["Pedem-lhe para pagar", "Para entrar, desbloquear tarefas, ter formação ou levantar", "Empregos verdadeiros nunca cobram para trabalhar"] },
            { title: "Mais sinais de alerta", bullets: ["Pagamento alto demais para trabalho fácil", "Recrutadores que só falam por WhatsApp ou Telegram", "Depósitos para continuar, ou devolver dinheiro", "Pedidos do seu documento, PIN ou código numa conversa"] }
          ],
          sources: [CROWDGEN, MINDRIFT, CLICKWORKER, FTC_JOBS],
          tryIt: "Escolha duas plataformas (desta lição, ou uma que um amigo usa). Para cada uma, escreva: o site oficial que encontrou sozinho, se a inscrição é gratuita, se aceita o seu país, como paga e o que encontrou quando pesquisou o nome com \"burla\". Depois escreva a sua lista de cinco sinais de alerta de burla.",
          youCanNow: "verificar uma plataforma no seu próprio site e recusar um emprego falso dizendo os seus sinais de alerta.",
          quickCheck: [
            { objective: "O4", q: "Uma mensagem no WhatsApp oferece \"trabalho de classificação de IA\" mas pede uma taxa de ativação de $20. O que é isto?", options: ["Um custo normal para começar", "Uma taxa de formação justa", "Um sinal de alerta de burla: empregos verdadeiros nunca cobram para começar", "Um pagamento de imposto"], answer: 2, why: "Pedir-lhe para pagar para começar é o sinal mais claro de um emprego falso." },
            { objective: "O4", q: "Como deve abrir uma plataforma de que ouviu falar?", options: ["Clicar no link da mensagem do recrutador", "Encontrar você mesmo o site oficial e ler as suas páginas", "Pedir ao recrutador para enviar capturas de ecrã", "Descarregar um ficheiro que o recrutador envia"], answer: 1, why: "Encontrar o site sozinho evita páginas falsas parecidas e ficheiros perigosos." }
          ]
        },
        {
          title: "Proteger os seus dados e os dados das tarefas",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escrever três regras que mantêm privados os seus dados pessoais e os dados das tarefas.",
          text: [
            "Proteja-se a si mesmo. Use uma palavra-passe forte e única e ative a verificação em dois passos. Nunca partilhe um código de uso único, um PIN ou uma palavra-passe com ninguém, mesmo com alguém que diz ser da plataforma. As plataformas verdadeiras podem pedir um documento de identificação para o verificar, mas só dentro do seu site ou aplicação oficial, nunca numa conversa.",
            "Proteja os dados que vê. As tarefas podem mostrar fotos, vozes, mensagens ou dados médicos e de dinheiro de pessoas. Muitos projetos pedem-lhe que aceite manter as tarefas confidenciais. Nunca faça capturas de ecrã das tarefas, não as publique em grupos e não as cole noutras ferramentas de IA, a não ser que o projeto deixe. Os países têm leis e entidades de proteção de dados, por exemplo a Comissão de Proteção de Dados da Nigéria.",
            "Proteja a sua conta. Não partilhe nem venda a sua conta, e não deixe outra pessoa trabalhar nela. As plataformas podem fechar contas por isto, e pode perder ganhos ainda não pagos. Use só a sua identidade verdadeira."
          ],
          steps: ["Use uma palavra-passe forte e única e a verificação em dois passos.", "Partilhe o documento de identificação só dentro do site ou aplicação oficial da plataforma.", "Nunca partilhe códigos, PIN nem palavras-passe.", "Mantenha o conteúdo das tarefas dentro da plataforma: sem capturas de ecrã nem partilhas.", "Nunca partilhe, alugue nem venda a sua conta."],
          words: [["Verificação em dois passos", "uma segunda verificação, como um código enviado para o seu telefone, quando inicia sessão."], ["Confidencial", "privado: não pode partilhar com ninguém fora do trabalho."], ["Código de uso único", "um código curto enviado para confirmar que é mesmo você. Nunca o partilhe."]],
          slides: [
            { title: "Proteja-se a si mesmo", bullets: ["Palavra-passe forte e única e verificação em dois passos", "Nunca partilhe códigos, PIN nem palavras-passe", "Documento só dentro do site ou aplicação oficial"] },
            { title: "Proteja os dados das tarefas", bullets: ["As tarefas podem mostrar dados de pessoas reais", "Sem capturas de ecrã, sem partilhar em grupos", "Não cole noutras ferramentas de IA, a não ser que deixem"] },
            { title: "Proteja a sua conta", bullets: ["Não a partilhe, alugue nem venda", "Use só a sua própria identidade", "Quebrar isto pode custar-lhe ganhos por pagar"] }
          ],
          sources: [NDPC],
          tryIt: "Escreva as suas três regras de segurança dos dados com as suas palavras: uma para a sua conta, uma para o seu documento e os códigos, e uma para os dados das tarefas. Depois ative a verificação em dois passos na sua conta de email, se ainda não estiver ativa.",
          youCanNow: "manter seguros os seus dados pessoais e manter privados os dados das tarefas.",
          quickCheck: [
            { objective: "O5", q: "Alguém diz que é do apoio da plataforma e pede o código que acabou de chegar ao seu telefone. O que faz?", options: ["Nunca o partilha, e contacta o apoio pelo site oficial", "Envia-o, porque o apoio precisa dele", "Envia metade do código", "Publica-o num grupo para perguntar"], answer: 0, why: "Os códigos de uso único são só para você; partilhar um deixa alguém ficar com a sua conta." },
            { objective: "O5", q: "Uma tarefa mostra a foto de uma carta médica de um desconhecido. O que está certo?", options: ["Fazer uma captura de ecrã para praticar", "Partilhá-la no seu grupo de estudo", "Colá-la numa ferramenta de IA gratuita para a ler", "Rotulá-la dentro da plataforma e não a partilhar com ninguém"], answer: 3, why: "Os dados das tarefas são confidenciais e ficam dentro da plataforma." }
          ]
        },
        {
          title: "Calcular o seu pagamento real e fazer um plano",
          objectives: ["O6"],
          minutes: 6,
          goal: "Registar o seu tempo e pagamento e calcular o seu verdadeiro ganho por hora.",
          text: [
            "O pagamento dos microtrabalhos é irregular. Varia conforme o projeto, o país e a plataforma; há semanas com muitas tarefas e semanas sem nenhuma. O tempo de testes, formação e procura de tarefas muitas vezes não é pago. A Organização Internacional do Trabalho (OIT) estudou o trabalho em plataformas e pede que seja trabalho digno, com pagamento e condições justas.",
            "Por isso, meça-o. Faça um registo de cada sessão: data, minutos de trabalho (incluindo testes e espera), tarefas feitas e dinheiro ganho. Ganho real por hora = total de dinheiro ganho ÷ total de horas, contando todo o tempo. Exemplo: ganhou 6 dólares numa semana e gastou 4 horas no total, por isso o seu ganho real por hora é 1,50 dólares.",
            "Depois decida. Compare com outras opções perto de você. Muitas pessoas usam o microtrabalho como rendimento extra ou como primeiro passo para funções mais bem pagas, como revisor de qualidade, projetos para especialistas ou um emprego a tempo inteiro numa empresa de dados. Guarde os registos do que recebe e pergunte à autoridade tributária do seu país se e como deve declarar."
          ],
          steps: ["Registe cada sessão: data, total de minutos (com testes e espera), tarefas, dinheiro.", "Some o dinheiro da semana e as horas da semana.", "Divida o dinheiro pelas horas para ter o seu ganho real por hora.", "Compare com as suas outras opções.", "Planeie o próximo mês: horas, plataformas e uma competência a desenvolver."],
          words: [["Ganho real por hora", "todo o dinheiro que ganhou dividido por todas as horas que gastou, incluindo o tempo não pago."], ["Tempo não pago", "tempo em testes, formação e procura de tarefas que não dá dinheiro."], ["Registo", "uma lista simples escrita que preenche sempre que trabalha."]],
          slides: [
            { title: "O pagamento é irregular", bullets: ["Varia conforme o projeto, o país e a plataforma", "Semanas cheias e semanas vazias", "Testes e procura de tarefas muitas vezes não são pagos"] },
            { title: "Meça com um registo", bullets: ["Data, total de minutos, tarefas, dinheiro", "Conte também os testes e o tempo de espera"] },
            { title: "O seu ganho real por hora", bullets: ["Total de dinheiro ÷ total de horas", "Exemplo: 6 dólares ÷ 4 horas = 1,50 dólares por hora"] },
            { title: "Decida e planeie", bullets: ["Compare com outras opções perto de você", "Planeie horas, plataformas e uma competência a desenvolver", "Guarde registos; pergunte à autoridade tributária"] }
          ],
          sources: [ILO_PLATFORMS],
          tryIt: "Desenhe um registo com cinco colunas: data, minutos (todos), tarefas, dinheiro, notas. Preencha uma linha com a prática de hoje (dinheiro 0). Depois escreva um plano de 4 semanas com datas: que duas plataformas vai verificar ou em que vai entrar, quantas horas por semana e o dia de cada semana em que vai calcular o seu ganho real por hora.",
          youCanNow: "manter um registo de tempo e pagamento, calcular o seu ganho real por hora e planear as suas próximas quatro semanas.",
          quickCheck: [
            { objective: "O6", q: "Ganhou 10 dólares e gastou 5 horas no total, incluindo 1 hora de teste não paga. Qual é o seu ganho real por hora?", options: ["10 dólares por hora", "2,50 dólares por hora", "2 dólares por hora", "5 dólares por hora"], answer: 2, why: "O ganho real por hora conta todo o tempo: 10 dólares ÷ 5 horas = 2 dólares por hora." },
            { objective: "O6", q: "O que deve ter o seu registo de trabalho?", options: ["Só o dinheiro que ganhou", "Só os dias em que recebeu", "A sua palavra-passe, para não a esquecer", "Data, todos os minutos incluindo testes e espera, tarefas e dinheiro"], answer: 3, why: "Contar cada minuto e cada pagamento mostra quanto o trabalho paga de verdade." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Trabalhar com segurança e ganhar com honestidade",
        questions: [
          { objective: "O4", q: "Um \"emprego de tarefas\" no Telegram mostra os seus ganhos a crescer, mas diz que tem de depositar criptomoeda para levantar. O que é?", options: ["Um sistema normal de bónus", "Uma burla de tarefas", "Uma taxa do banco", "Um imposto do governo"], answer: 1, why: "Pedir um depósito para continuar ou levantar é o padrão de uma burla de tarefas." },
          { objective: "O4", q: "Qual é a melhor primeira verificação de uma plataforma?", options: ["Encontrar você mesmo o site oficial e confirmar que a inscrição é gratuita", "Confiar na foto de perfil do recrutador", "Contar os \"gostos\" do anúncio", "Pagar uma pequena taxa para experimentar"], answer: 0, why: "O site oficial, encontrado por você, mostra se é gratuito, verdadeiro e aberto ao seu país." },
          { objective: "O5", q: "Uma plataforma verdadeira pede para verificar o seu documento de identificação. Onde o deve enviar?", options: ["Numa conversa de WhatsApp com o recrutador", "Por email para qualquer endereço que derem", "Só dentro do site ou aplicação oficial da plataforma", "Num grupo público"], answer: 2, why: "O documento de identificação só vai no passo oficial de verificação, nunca numa conversa." },
          { objective: "O5", q: "Um amigo oferece-se para pagar para usar a sua conta na plataforma. O que faz?", options: ["Aluga-a por um mês", "Partilha a palavra-passe mas fica com os ganhos", "Deixa-o usar só à noite", "Recusa: partilhar ou vender uma conta quebra as regras e põe os seus ganhos em risco"], answer: 3, why: "As plataformas fecham contas partilhadas, e pode perder ganhos ainda não pagos." },
          { objective: "O6", q: "Porque contar no registo o tempo de testes não pago?", options: ["Para ver o seu ganho real por hora", "Porque a plataforma paga-o mais tarde", "Não é preciso", "Para o partilhar na internet"], answer: 0, why: "O tempo não pago baixa o que ganha realmente por hora, por isso tem de ser contado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Anotação de Dados para IA e Microtrabalhos na Internet",
    questions: [
      { objective: "O1", q: "O que é a anotação de dados?", options: ["Reparar computadores", "Acrescentar rótulos a dados para que as ferramentas de IA aprendam com eles", "Escrever notícias", "Vender dados a bancos"], answer: 1, why: "Anotação quer dizer acrescentar rótulos a fotos, textos, áudios ou vídeos para treinar IA." },
      { objective: "O1", q: "Qual é um microtrabalho?", options: ["Um contrato de dois anos como gerente", "Ser dono de uma loja", "Escolher a categoria da foto de um produto, pago por tarefa", "Conduzir um autocarro"], answer: 2, why: "Os microtrabalhos são pequenas tarefas na internet pagas uma a uma." },
      { objective: "O1", q: "Fala bem iorubá e inglês. Que tarefa pode servir para você?", options: ["Escrever ou verificar gravações em iorubá", "Reparar telefones", "Fazer entregas de carro", "Construir casas"], answer: 0, why: "As competências de língua servem para tarefas de áudio e de texto nessa língua." },
      { objective: "O2", q: "Para que serve a diretriz de um projeto?", options: ["Define o seu pagamento", "Lista as pontuações dos seus amigos", "Dá-lhe uma palavra-passe", "Diz o que cada rótulo quer dizer e como tratar os casos difíceis"], answer: 3, why: "A diretriz é o conjunto de regras de como rotular." },
      { objective: "O2", q: "Diretriz: rotule NEUTRA se a mensagem é só uma pergunta ou um facto. \"A que horas fecham?\" Que rótulo?", options: ["POSITIVA", "NEGATIVA", "NEUTRA", "Sinalizar"], answer: 2, why: "É só uma pergunta, por isso a diretriz diz NEUTRA." },
      { objective: "O2", q: "\"Sapatos bonitos, mas um está rasgado. Quero reembolso.\" A diretriz diz para rotular as mensagens mistas pelo pedido principal. Que rótulo?", options: ["NEGATIVA", "POSITIVA", "NEUTRA", "Saltar sem ler"], answer: 0, why: "O pedido principal é um reembolso por um sapato rasgado, por isso é NEGATIVA." },
      { objective: "O2", q: "Um áudio só tem silêncio. O que faz?", options: ["Escreve qualquer coisa para acabar depressa", "Sinaliza-o ou salta-o como a diretriz diz", "Copia a resposta de outro trabalhador", "Sai do projeto"], answer: 1, why: "Os itens com defeito ou vazios são sinalizados, não adivinhados." },
      { objective: "O3", q: "O que é uma pergunta de ouro?", options: ["Um pagamento de bónus", "Uma pergunta para quem vende ouro", "Uma tarefa escondida com resposta conhecida que verifica se acerta", "Um teste pago que compra"], answer: 2, why: "As plataformas escondem tarefas com respostas conhecidas no meio do seu trabalho para medir a qualidade." },
      { objective: "O3", q: "Qual é a melhor altura para fazer um teste de qualificação?", options: ["Logo, sem ler nada", "Depois de ler a diretriz e praticar, descansado e com internet estável", "Tarde da noite com poucos dados", "Enquanto faz outro trabalho"], answer: 1, why: "A preparação e boas condições dão-lhe a melhor hipótese, e o tempo do teste muitas vezes não é pago." },
      { objective: "O3", q: "O que pode acontecer se a sua pontuação de qualidade continuar baixa?", options: ["Recebe mais tarefas", "O seu pagamento duplica", "Nunca acontece nada", "Pode ser tirado do projeto"], answer: 3, why: "As plataformas usam as pontuações de qualidade para decidir quem continua a receber tarefas." },
      { objective: "O3", q: "As regras do projeto dizem para não usar ferramentas de IA para fazer as tarefas. O que faz?", options: ["Segue a regra e faz as tarefas você mesmo", "Usa ferramentas de IA às escondidas", "Pede a um amigo para usar IA por você", "Deixa de ler as regras"], answer: 0, why: "Quebrar as regras do projeto pode custar-lhe o projeto e a conta." },
      { objective: "O4", q: "Que oferta é mais provável ser verdadeira?", options: ["\"Pague 5,000 nairas para desbloquear tarefas\"", "\"Deposite criptomoeda para levantar os seus ganhos\"", "Uma plataforma que encontrou sozinho cujo site diz que a inscrição é gratuita", "\"Ganhe 200 dólares por dia a dar gosto em vídeos\""], answer: 2, why: "Inscrição gratuita e encontrada no site oficial são sinais de uma plataforma verdadeira; as outras são padrões de burla." },
      { objective: "O4", q: "Um \"recrutador\" paga-lhe 30 dólares e depois pede-lhe para devolver 25. O que é isto?", options: ["Uma burla: os empregadores verdadeiros não pedem para devolver dinheiro", "Um reembolso normal", "Um imposto", "Um bónus de formação"], answer: 0, why: "A FTC avisa que receber e depois pedirem para devolver dinheiro é uma burla." },
      { objective: "O4", q: "Qual NÃO é um sinal de alerta de emprego falso?", options: ["Pedem uma taxa para começar", "Só falam pelo Telegram e pressionam-no a decidir hoje", "Pedem o PIN do seu banco", "O site da própria plataforma explica as tarefas e diz que a inscrição é gratuita"], answer: 3, why: "Um site oficial claro com inscrição gratuita é um bom sinal; os outros são sinais de alerta." },
      { objective: "O5", q: "Qual é um bom hábito para a conta?", options: ["Usar a mesma palavra-passe em todo o lado", "Uma palavra-passe única e verificação em dois passos", "Escrever a palavra-passe no seu perfil", "Partilhar o seu acesso com a família"], answer: 1, why: "Uma palavra-passe única e a verificação em dois passos protegem a sua conta e os seus ganhos." },
      { objective: "O5", q: "Pode publicar imagens interessantes das tarefas no seu grupo de WhatsApp?", options: ["Sim, se as desfocar um pouco", "Sim, depois de acabar a tarefa", "Não: os dados das tarefas ficam dentro da plataforma", "Sim, se o grupo for pequeno"], answer: 2, why: "Os dados das tarefas são confidenciais; partilhá-los quebra as regras e pode prejudicar pessoas reais." },
      { objective: "O5", q: "Quem deve alguma vez receber o seu código de uso único para iniciar sessão?", options: ["Ninguém", "O apoio da plataforma numa conversa", "Um recrutador", "Um amigo que o ajuda"], answer: 0, why: "Os códigos de uso único são só para você; quem pede um está a tentar ficar com a sua conta." },
      { objective: "O6", q: "Ganhou 12 dólares numa semana e gastou 8 horas no total. Qual é o seu ganho real por hora?", options: ["12 dólares", "8 dólares", "4 dólares", "1,50 dólares"], answer: 3, why: "12 dólares ÷ 8 horas = 1,50 dólares por hora." },
      { objective: "O6", q: "Que frase sobre o pagamento dos microtrabalhos é verdadeira?", options: ["É igual todas as semanas", "É irregular e varia conforme o projeto, o país e a plataforma", "É sempre mais do que um emprego local", "É definido pelo governo"], answer: 1, why: "A quantidade de tarefas e os valores pagos mudam, por isso o pagamento é irregular." },
      { objective: "O6", q: "Guarda os registos do que ganha na internet. A quem pergunta sobre como declarar para impostos?", options: ["A um recrutador no Telegram", "A ninguém, o pagamento na internet nunca paga imposto", "À autoridade tributária do seu país", "Aos outros trabalhadores do seu grupo"], answer: 2, why: "As regras de impostos variam de país para país, por isso a autoridade tributária do seu país é a fonte certa." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 4, 7, 9, 11, 12, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Rótulos de prática", objective: "O2", notYet: "Menos de 8 de 10 iguais à chave, ou os itens pouco claros foram adivinhados.", meets: "Pelo menos 8 de 10 iguais à chave e o item pouco claro está sinalizado.", exceeds: "10 de 10, com uma diretriz de uma página nas suas palavras que cobre os casos-limite." },
      { name: "Plano de teste e qualidade", objective: "O3", notYet: "Não há plano, ou o plano é só \"trabalhar depressa\".", meets: "Cinco passos: ler a diretriz, praticar, fazer o teste descansado, ler os comentários, voltar a ler as atualizações.", exceeds: "Também lista os seus próprios erros na prática e a regra que vai verificar para cada um." },
      { name: "Plataformas verificadas", objective: "O4", notYet: "Uma plataforma foi escolhida a partir de um link numa mensagem, ou foi aceite uma taxa.", meets: "Duas plataformas verificadas nos sites oficiais: inscrição gratuita, o seu país, como paga.", exceeds: "Também inclui uma pesquisa de burlas para cada uma e uma lista de cinco sinais de burla nas suas palavras." },
      { name: "Regras de segurança dos dados", objective: "O5", notYet: "Faltam regras, ou o plano partilha códigos, documentos ou dados das tarefas numa conversa.", meets: "Três regras claras: conta, documento e códigos, e dados das tarefas.", exceeds: "A verificação em dois passos está ativa e as regras dizem o que fazer se alguém pedir um código." },
      { name: "Registo de pagamento e plano", objective: "O6", notYet: "Não há registo, ou o registo só conta o tempo pago.", meets: "Um registo que conta todos os minutos, a fórmula do ganho real por hora e um plano de 4 semanas com datas.", exceeds: "Também compara o resultado com outra opção e diz uma competência a desenvolver para trabalho mais bem pago." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que passam num teste de qualificação numa plataforma verdadeira e gratuita em 60 dias (inquérito de seguimento)",
      "Alunos que dizem ter pago uma taxa ou depósito a um \"emprego na internet\" depois do curso (meta: nenhum)",
      "Alunos que sabem dizer o seu ganho real por hora a partir do seu próprio registo no seguimento aos 30 dias",
      "Alunos que passam para uma função mais bem paga (revisor, projeto para especialistas ou emprego numa empresa de dados) em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com internet (a prática funciona em papel)",
      "Papel e caneta para a prática de rotulagem, a lista de sinais de burla e o registo de pagamento",
      "Uma conta de email com verificação em dois passos",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Façam juntos o teste inicial. Depois façam a prática de rotulagem em grupo e comparem as respostas: as diferenças de opinião são a melhor forma de ensinar os casos-limite.",
      "Traga mensagens de burla verdadeiras (sem nomes nem números) e deixe o grupo encontrar os sinais de alerta.",
      "Não recomende uma plataforma como rendimento garantido. As plataformas mudam e aceitam países diferentes; os alunos verificam as páginas de cada uma.",
      "Nunca recolha palavras-passe, códigos ou documentos de identificação dos alunos, e não lhes peça para se inscreverem durante a sessão se não estiverem prontos.",
      "Seja honesto sobre o pagamento. Ajude os alunos a comparar o microtrabalho com as opções locais e com formação para funções mais bem pagas.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
