"use strict";

// Koach Learn course (Portuguese translation of leadership/lead-inclusive-teams.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "lead-inclusive-teams-pt",
  lang: "pt",
  translationOf: "lead-inclusive-teams",
  category: "Leadership Development",
  name: "Liderar Equipas Inclusivas",
  skills: "Criar sentimento de pertença, Verificar o preconceito inconsciente, Hábitos justos de contratação e promoção, Reuniões onde todos são ouvidos, Acessibilidade e linguagem respeitosa, Responder à exclusão ou ao assédio",
  outcome: "liderar uma equipa onde todos podem contribuir: criar sentimento de pertença, verificar as suas decisões para evitar preconceitos, contratar e promover com hábitos justos, conduzir reuniões onde todas as vozes são ouvidas, tornar o trabalho acessível, usar linguagem respeitosa e responder depressa e de forma correta quando alguém é excluído ou assediado.",
  about: [
    "Este curso é para líderes de equipa, supervisores, treinadores, coordenadores de voluntários e donos de negócios que querem que cada pessoa da sua equipa seja tratada com justiça e possa fazer o seu melhor trabalho.",
    "É prático, não político. Você vai aprender pequenos hábitos do dia a dia: como notar o preconceito nas suas próprias decisões, como tornar a contratação e a promoção mais justas, como conduzir uma reunião para que as pessoas mais caladas sejam ouvidas, como tornar o trabalho acessível e o que fazer quando alguém é deixado de fora ou maltratado.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso não é aconselhamento jurídico; para os deveres legais, consulte as fontes oficiais indicadas nas lições ou pergunte a um profissional qualificado."
  ],
  finalTask: "Escreva um plano de uma página com \"hábitos de inclusão\" para a sua equipa: um hábito de pertença, uma verificação de preconceito que vai usar numa decisão real, três hábitos justos de contratação ou promoção, uma rotina de reunião que garanta que todas as vozes são ouvidas, uma melhoria de acessibilidade e os passos que vai seguir se alguém denunciar exclusão ou assédio, incluindo a quem vai dizer e onde estão as regras oficiais.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Líderes de equipa, supervisores, gestores, donos de pequenos negócios e líderes de organizações sem fins lucrativos que querem que todos na sua equipa contribuam e sejam tratados com justiça.",
    startingPoint: "Querem ser justos e sabem gerir o trabalho diário de uma equipa. Poucos têm uma rotina para verificar o preconceito nas decisões, fazer entrevistas estruturadas, tornar reuniões e documentos acessíveis ou responder a uma denúncia de assédio.",
    gap: "Sem hábitos simples, algumas pessoas ficam caladas, a contratação e a promoção acabam por favorecer pessoas parecidas connosco, e os líderes tratam mal as denúncias de assédio. Os líderes precisam de hábitos práticos para a pertença, a verificação de preconceitos, a contratação justa, as reuniões inclusivas, a acessibilidade e uma resposta clara à exclusão ou ao assédio.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Tempo: lições curtas que cabem num dia de trabalho",
      "As leis mudam de país para país e com o tamanho da organização; os alunos nos Estados Unidos consultam eeoc.gov e falam com os recursos humanos ou com um advogado do trabalho sobre os seus deveres",
      "Privacidade: os pedidos de adaptação e as denúncias de assédio são tratados em privado e seguem a política da organização",
      "Segurança: quem estiver em perigo imediato liga para os serviços de emergência"
    ],
    prerequisites: "Nenhum. O curso \"Gerir Equipas\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para uma equipa que lidera ou conhece", action: "identificar os sinais de pertença e escolher um hábito que a cria", standard: "indicando um hábito que pode repetir todas as semanas" },
    { id: "O2", condition: "Com uma decisão real sobre pessoas", action: "aplicar uma verificação de preconceito: definir os critérios primeiro, escrever as suas razões e perguntar se decidiria o mesmo para alguém de outro grupo", standard: "antes de a decisão ser final" },
    { id: "O3", condition: "Com uma vaga de emprego ou uma promoção", action: "planear hábitos justos de contratação ou promoção, como requisitos ligados ao trabalho e entrevistas estruturadas", standard: "avaliando cada candidato pelos mesmos critérios ligados ao trabalho" },
    { id: "O4", condition: "Para uma reunião regular da equipa", action: "planear uma rotina de reunião que dê a cada pessoa uma oportunidade justa de falar", standard: "incluindo pelo menos duas ferramentas, como a volta à mesa, a escrita em silêncio ou dar a palavra primeiro a quem está à distância" },
    { id: "O5", condition: "Para uma parte do trabalho da sua equipa", action: "escolher uma melhoria de acessibilidade e usar linguagem respeitosa para nomes e pronomes", standard: "tratando os pedidos em privado" },
    { id: "O6", condition: "Quando alguém denuncia ou você vê exclusão ou assédio", action: "listar os passos que vai seguir, a quem vai dizer e onde estão as regras oficiais", standard: "agindo logo e protegendo a pessoa contra represálias" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pertença e decisões justas",
      lessons: [
        {
          title: "Como é a pertença numa equipa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Indicar os sinais de pertença numa equipa e escolher um hábito que a cria.",
          text: [
            "Uma equipa tem pertença quando cada pessoa se sente respeitada, segura para falar e valorizada pelo que traz. As pessoas que sentem que pertencem partilham ideias, admitem os erros cedo e ficam mais tempo. As pessoas que se sentem de fora ficam caladas, e a equipa perde as suas ideias.",
            "A pertença constrói-se com pequenas ações repetidas do líder: aprender a dizer bem o nome de cada pessoa, partilhar a informação importante com todos ao mesmo tempo, distribuir com justiça as tarefas que fazem crescer e agradecer às pessoas que levantam problemas em vez de as castigar.",
            "Pergunte, não adivinhe. Uma pergunta curta e em privado, como \"O que tornaria mais fácil para você falar aqui?\", diz-lhe mais do que qualquer suposição."
          ],
          steps: ["Repare em quem fala e em quem fica calado.", "Partilhe a informação importante com todos ao mesmo tempo.", "Distribua as boas tarefas com justiça.", "Agradeça a quem levanta problemas.", "Pergunte em privado o que ajudaria cada pessoa a falar."],
          words: [["Inclusão", "garantir que cada pessoa pode participar por inteiro e com justiça."], ["Pertença", "o sentimento de ser respeitado e valorizado como parte de um grupo."], ["Segurança psicológica", "a convicção partilhada de que se pode falar, fazer perguntas ou admitir erros sem ser castigado ou gozado."]],
          slides: [
            { title: "Sinais de pertença", bullets: ["As pessoas sentem-se respeitadas e valorizadas", "Falam e admitem os erros cedo", "Ficam mais tempo"] },
            { title: "Pequenos hábitos que a criam", bullets: ["Diga bem o nome de cada pessoa", "Partilhe as notícias com todos ao mesmo tempo", "Distribua as boas tarefas com justiça", "Agradeça a quem levanta problemas"] },
            { title: "Pergunte, não adivinhe", bullets: ["\"O que tornaria mais fácil para você falar aqui?\""] }
          ],
          tryIt: "Durante uma semana, repare em quem fala nas reuniões da sua equipa e em quem não fala. Escreva um hábito de pertença desta lição que vai começar e uma pessoa a quem vai perguntar em privado o que a ajudaria a falar.",
          youCanNow: "descrever como é a pertença e começar um hábito que a cria.",
          quickCheck: [
            { objective: "O1", q: "O que acontece quando as pessoas de uma equipa se sentem de fora?", options: ["Trabalham mais para provar o seu valor", "Ficam caladas e a equipa perde as suas ideias", "Nada muda", "Vão sempre embora nesse dia"], answer: 1, why: "As pessoas que se sentem de fora ficam caladas, e as suas ideias perdem-se." },
            { objective: "O1", q: "Não sabe porque um membro da equipa nunca fala nas reuniões. O que faria?", options: ["Perguntar-lhe em privado o que tornaria mais fácil falar", "Supor que não tem nada a dizer", "Dar-lhe a palavra primeiro, à frente de todos", "Perguntar ao resto da equipa sobre ele"], answer: 0, why: "Pergunte, não adivinhe; uma pergunta curta em privado diz-lhe mais." }
          ]
        },
        {
          title: "Reconhecer o preconceito inconsciente",
          objectives: ["O2"],
          minutes: 5,
          goal: "Usar uma verificação simples para apanhar o preconceito numa decisão real.",
          text: [
            "Preconceito inconsciente são julgamentos rápidos que o nosso cérebro faz sem darmos conta, com base em coisas como a idade, o sotaque, o sexo, a raça, a deficiência, a origem de alguém ou a escola onde estudou. Todos temos. Tê-los não faz de você uma má pessoa, mas agir com base neles pode levar a decisões injustas.",
            "Armadilhas comuns: gostar de pessoas que nos lembram nós mesmos (preconceito de afinidade), deixar que uma qualidade boa ou má pinte tudo o resto (efeito de halo) e reparar só nos factos que combinam com o que já pensamos (preconceito de confirmação).",
            "Não se elimina o preconceito só com força de vontade, por isso ponha verificações nas decisões. Decida os critérios antes de olhar para as pessoas. Escreva as suas razões. Pergunte: \"Decidiria o mesmo se esta pessoa fosse de outro grupo?\" Peça uma segunda opinião nas decisões importantes."
          ],
          steps: ["Escreva os critérios antes de olhar para as pessoas ou as opções.", "Avalie cada pessoa pelos mesmos critérios.", "Escreva a razão da sua decisão.", "Pergunte: \"Decidiria o mesmo se esta pessoa fosse de outro grupo?\"", "Peça uma segunda opinião nas decisões grandes."],
          words: [["Preconceito inconsciente", "um julgamento rápido sobre as pessoas que fazemos sem dar conta."], ["Preconceito de afinidade", "favorecer pessoas que parecem connosco."], ["Efeito de halo", "deixar que uma qualidade nos faça julgar tudo o resto de uma pessoa como bom ou mau."], ["Critérios", "as regras que usa para tomar uma decisão."]],
          slides: [
            { title: "Todos temos preconceitos", bullets: ["Julgamentos rápidos de que não damos conta", "Não é uma falha moral", "Agir com base neles leva a decisões injustas"] },
            { title: "Armadilhas comuns", bullets: ["Afinidade: favorecer pessoas como nós", "Efeito de halo: uma qualidade pinta tudo", "Confirmação: só ver o que combina"] },
            { title: "Ponha verificações", bullets: ["Primeiro os critérios, depois as pessoas", "Os mesmos critérios para todos", "Escreva as suas razões", "\"Decidiria o mesmo...?\" e uma segunda opinião"] }
          ],
          tryIt: "Pense numa decisão recente sobre pessoas, como quem ficou com um turno, um projeto ou a oportunidade de falar. Escreva os critérios que devia ter usado e depois aplique a pergunta \"decidiria o mesmo?\". Escreva uma coisa que faria de forma diferente.",
          youCanNow: "nomear preconceitos comuns e usar uma verificação simples para tomar uma decisão mais justa.",
          quickCheck: [
            { objective: "O2", q: "O que é o preconceito de confirmação?", options: ["Favorecer pessoas como nós", "Julgar tudo por uma só qualidade", "Reparar só nos factos que combinam com o que já pensamos", "Confirmar a hora de uma reunião"], answer: 2, why: "O preconceito de confirmação filtra os factos para combinarem com a nossa opinião." },
            { objective: "O2", q: "Está a escolher quem lidera um novo projeto. O que faria primeiro?", options: ["Escolher a pessoa com quem se dá melhor", "Decidir os critérios antes de olhar para as pessoas", "Deixar a pessoa que fala mais alto escolher", "Escolher depressa e explicar depois"], answer: 1, why: "Decidir os critérios primeiro é uma verificação dentro da própria decisão." }
          ]
        },
        {
          title: "Hábitos justos de contratação e promoção",
          objectives: ["O3"],
          minutes: 6,
          goal: "Montar um processo de contratação ou promoção que avalie todos pelos mesmos critérios ligados ao trabalho.",
          text: [
            "A contratação justa começa pelo trabalho, não pela pessoa. Escreva o que o trabalho precisa de verdade e tire os requisitos que não importam, como um diploma para um trabalho que não precisa dele. Divulgue as vagas amplamente, não só através dos amigos da equipa atual.",
            "Use entrevistas estruturadas: faça a cada candidato as mesmas perguntas ligadas ao trabalho, pontue as respostas na mesma escala e tenha mais de uma pessoa a pontuar. Não pergunte sobre coisas que nada têm a ver com o trabalho, como planos de ter filhos, a religião ou a idade.",
            "Nas promoções, torne os critérios conhecidos e dê a todos uma oportunidade justa nas tarefas desafiantes que levam à promoção. Nos Estados Unidos, a Comissão para a Igualdade de Oportunidades no Emprego (EEOC) aplica as leis federais contra a discriminação no trabalho com base na raça, cor, religião, sexo (a EEOC diz que isto inclui a gravidez, a orientação sexual e o estatuto de pessoa transgénero), origem nacional, idade (40 anos ou mais), deficiência e informação genética. Se uma lei se aplica à sua organização pode depender do seu tamanho, por isso consulte eeoc.gov e fale com os recursos humanos ou com um advogado do trabalho sobre os seus deveres."
          ],
          steps: ["Liste o que o trabalho precisa de verdade; tire o que não precisa.", "Divulgue a vaga amplamente.", "Faça a cada candidato as mesmas perguntas ligadas ao trabalho.", "Pontue as respostas na mesma escala, com mais de uma pessoa a pontuar.", "Torne conhecidos os critérios de promoção e distribua com justiça as tarefas desafiantes.", "Consulte eeoc.gov ou pergunte aos recursos humanos sobre os deveres legais."],
          words: [["Entrevista estruturada", "uma entrevista em que cada candidato recebe as mesmas perguntas e é pontuado da mesma forma."], ["EEOC", "a Comissão para a Igualdade de Oportunidades no Emprego dos EUA, o órgão federal que aplica as leis contra a discriminação no trabalho."], ["Característica protegida", "uma característica, como a raça, o sexo, a idade (40 anos ou mais) ou a deficiência, que a lei diz que não pode ser a base de decisões de trabalho."]],
          slides: [
            { title: "Comece pelo trabalho", bullets: ["Liste o que o trabalho precisa de verdade", "Tire os requisitos que não importam", "Divulgue as vagas amplamente"] },
            { title: "Entrevistas estruturadas", bullets: ["As mesmas perguntas ligadas ao trabalho para todos", "A mesma escala de pontuação", "Mais de uma pessoa a pontuar"] },
            { title: "Promoções justas", bullets: ["Torne os critérios conhecidos", "Distribua com justiça as tarefas desafiantes"] },
            { title: "Conheça as regras (EUA)", bullets: ["A EEOC aplica as leis federais contra a discriminação", "A aplicação pode depender do tamanho do empregador", "Consulte eeoc.gov; pergunte aos recursos humanos ou a um advogado"] }
          ],
          sources: [{ name: "EEOC: Employers", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Escolha um trabalho real ou imaginário da sua equipa. Escreva três requisitos indispensáveis, tire um que não é mesmo necessário e escreva três perguntas de entrevista que faria a cada candidato, com o que seria uma boa resposta.",
          youCanNow: "desenhar um processo de contratação ou promoção que avalia cada candidato pelos mesmos critérios ligados ao trabalho e saber onde consultar a lei.",
          quickCheck: [
            { objective: "O3", q: "O que é uma entrevista estruturada?", options: ["Cada entrevistador pergunta o que quiser", "Uma conversa ao almoço", "Uma entrevista sem pontuação", "Cada candidato recebe as mesmas perguntas ligadas ao trabalho, pontuadas na mesma escala"], answer: 3, why: "As mesmas perguntas e a mesma escala ajudam a avaliar todos com justiça." },
            { objective: "O3", q: "Quer divulgar uma nova vaga. O que faria?", options: ["Perguntar só aos amigos da equipa atual", "Divulgá-la amplamente, não só através dos amigos da equipa", "Guardar segredo até encontrar alguém", "Publicá-la só num grupo privado"], answer: 1, why: "A contratação justa divulga as vagas amplamente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Pertença e decisões justas",
        questions: [
          { objective: "O1", q: "Qual é um sinal de pertença numa equipa?", options: ["Só o líder fala", "As pessoas escondem os erros", "As pessoas novas ficam de fora das notícias", "As pessoas falam e admitem os erros cedo"], answer: 3, why: "Quando as pessoas se sentem seguras, falam e partilham os problemas cedo." },
          { objective: "O2", q: "O que é o preconceito de afinidade?", options: ["Favorecer pessoas que parecem connosco", "Gostar de secretárias arrumadas", "Ser bom a matemática", "Contratar só especialistas"], answer: 0, why: "O preconceito de afinidade puxa-nos para pessoas parecidas connosco." },
          { objective: "O2", q: "Qual é a melhor forma de reduzir o preconceito numa decisão?", options: ["Confiar no instinto", "Decidir os critérios primeiro e avaliar todos por eles", "Decidir depressa", "Perguntar só aos amigos"], answer: 1, why: "Defina critérios e verificações; a força de vontade sozinha não elimina o preconceito." },
          { objective: "O3", q: "Numa entrevista estruturada, você:", options: ["Pergunta a cada pessoa o que lhe vier à cabeça", "Pergunta sobre os planos de família", "Faz a cada candidato as mesmas perguntas ligadas ao trabalho", "Não pontua"], answer: 2, why: "As mesmas perguntas e a mesma pontuação tornam a comparação justa." },
          { objective: "O3", q: "Nos EUA, que órgão aplica as leis federais contra a discriminação no trabalho?", options: ["O IRS", "Os Correios", "A FAA", "A EEOC"], answer: 3, why: "A Comissão para a Igualdade de Oportunidades no Emprego aplica essas leis." }
        ]
      }
    },
    {
      name: "Capítulo 2: Inclusão no dia a dia",
      lessons: [
        {
          title: "Conduzir reuniões onde todos são ouvidos",
          objectives: ["O4"],
          minutes: 5,
          goal: "Usar uma rotina de reunião que dê a cada pessoa uma oportunidade justa de falar.",
          text: [
            "Em muitas reuniões, poucas pessoas falam quase o tempo todo. Nem sempre é porque as outras não têm nada a dizer. Podem ser mais novas na equipa, mais caladas, falar numa segunda língua, participar à distância ou estar habituadas a ser interrompidas.",
            "Ferramentas simples ajudam: envie a agenda antes para as pessoas se prepararem, faça uma volta à mesa, dê um minuto de escrita em silêncio antes da discussão, dê a palavra primeiro a quem está à distância e aceite ideias por escrito depois da reunião.",
            "Esteja atento às interrupções e às pessoas cujas ideias são repetidas por outra pessoa que fica com o mérito. Intervenha com gentileza: \"Vamos deixar a Amina terminar\" ou \"Isso parte do que o Luís disse antes.\" Faça rodar funções como a de quem toma notas, para que não sejam sempre as mesmas pessoas a ficar com as tarefas de bastidores."
          ],
          steps: ["Envie a agenda antes.", "Comece com uma volta à mesa ou um minuto de escrita em silêncio.", "Dê a palavra primeiro a quem está à distância.", "Trave as interrupções com gentileza e dê o mérito das ideias a quem as disse.", "Faça rodar quem toma notas.", "Aceite ideias por escrito depois da reunião."],
          words: [["Volta à mesa", "dar a cada pessoa a sua vez de falar, uma de cada vez."], ["Reunião híbrida", "uma reunião em que algumas pessoas estão na sala e outras participam pela internet."]],
          slides: [
            { title: "Porque faltam algumas vozes", bullets: ["Mais novas na equipa ou mais caladas", "Falam numa segunda língua", "À distância, ou habituadas a ser interrompidas"] },
            { title: "Ferramentas que ajudam", bullets: ["Agenda enviada antes", "Volta à mesa ou escrita em silêncio", "Primeiro quem está à distância", "Ideias por escrito depois"] },
            { title: "Intervenha com gentileza", bullets: ["\"Vamos deixar a Amina terminar.\"", "\"Isso parte do que o Luís disse.\"", "Faça rodar quem toma notas"] }
          ],
          tryIt: "Planeie a próxima reunião da sua equipa usando pelo menos três ferramentas desta lição. Escreva-as na agenda. Depois da reunião, anote quem falou e normalmente não fala.",
          youCanNow: "conduzir uma reunião que dá a cada pessoa uma oportunidade justa de falar e de receber o mérito.",
          quickCheck: [
            { objective: "O4", q: "Porque enviar a agenda da reunião antes?", options: ["Para as pessoas se poderem preparar", "Para a reunião poder ser mais longa", "Para ninguém precisar de vir", "Para o líder não ter de planear"], answer: 0, why: "Preparar antes ajuda as pessoas mais caladas e quem fala numa segunda língua a contribuir." },
            { objective: "O4", q: "São sempre as mesmas duas pessoas a tomar notas. O que faria?", options: ["Deixar assim; elas fazem isso bem", "Tomar notas você mesmo todas as vezes", "Fazer rodar a função de quem toma notas", "Deixar de tomar notas"], answer: 2, why: "Fazer rodar as funções impede que sejam sempre as mesmas pessoas a ficar com as tarefas de bastidores." }
          ]
        },
        {
          title: "Acessibilidade e linguagem respeitosa",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tornar uma parte do trabalho da sua equipa mais acessível e usar linguagem respeitosa.",
          text: [
            "Acessibilidade quer dizer que as pessoas com deficiência, e todas as outras, conseguem usar o seu local de trabalho, documentos, ferramentas e reuniões. Muitas deficiências não se veem. Passos simples ajudam muita gente: legendas nos vídeos e nas reuniões pela internet, letras fáceis de ler e bom contraste, documentos que funcionam com leitores de ecrã, espaços sem degraus e lugares sossegados para trabalhar.",
            "Torne fácil pedir o que alguém precisa e trate os pedidos em privado. Nos EUA, a Job Accommodation Network (askjan.org), uma rede de apoio sobre adaptações no trabalho, dá orientação gratuita e confidencial, e a página da EEOC para empregadores explica quando recusar uma adaptação necessária pode ser contra a lei.",
            "Linguagem respeitosa quer dizer chamar as pessoas como elas pedem: diga bem os nomes, use os pronomes que as pessoas indicam e, na dúvida, pergunte com educação ou use simplesmente o nome. Evite piadas sobre a identidade de alguém. Se errar, peça desculpa em poucas palavras, corrija e siga em frente."
          ],
          steps: ["Ligue as legendas nas reuniões pela internet e nos vídeos.", "Use letras claras, bom contraste e títulos nos documentos.", "Diga às pessoas como pedir uma adaptação e mantenha os pedidos em privado.", "Use os nomes e os pronomes que as pessoas indicam.", "Se errar: peça desculpa em poucas palavras, corrija e siga em frente."],
          words: [["Acessibilidade", "pensar os lugares, as ferramentas e a informação para que as pessoas com deficiência os possam usar."], ["Adaptação", "uma mudança num trabalho ou no local de trabalho que permite a uma pessoa com deficiência, uma necessidade religiosa ou uma necessidade ligada à gravidez fazer o trabalho."], ["Leitor de ecrã", "um programa que lê em voz alta o texto do ecrã para pessoas cegas ou com pouca visão."]],
          slides: [
            { title: "A acessibilidade ajuda todos", bullets: ["Legendas nos vídeos e nas reuniões", "Letras fáceis de ler, contraste e títulos", "Espaços sem degraus e sossegados"] },
            { title: "Adaptações", bullets: ["Torne fácil pedir", "Mantenha os pedidos em privado", "Orientação gratuita (EUA): askjan.org"] },
            { title: "Linguagem respeitosa", bullets: ["Diga bem os nomes", "Use os pronomes que as pessoas indicam", "Nada de piadas sobre a identidade"] },
            { title: "Errou?", bullets: ["Peça desculpa em poucas palavras", "Corrija", "Siga em frente"] }
          ],
          sources: [{ name: "Job Accommodation Network (JAN)", url: "https://askjan.org/" }, { name: "EEOC: Employers", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Verifique uma coisa que a sua equipa usa muitas vezes, como um formulário de inscrição, um vídeo de formação ou a reunião semanal. Liste duas melhorias de acessibilidade e faça uma delas esta semana.",
          youCanNow: "tornar o trabalho da equipa mais acessível, tratar com respeito os pedidos de adaptação e usar linguagem respeitosa.",
          quickCheck: [
            { objective: "O5", q: "Qual é um passo simples de acessibilidade?", options: ["Usar letras minúsculas para caber mais numa página", "Passar vídeos sem som", "Fazer documentos só com imagens", "Ligar as legendas nos vídeos e nas reuniões pela internet"], answer: 3, why: "As legendas ajudam muita gente, incluindo pessoas com deficiência auditiva." },
            { objective: "O5", q: "Não sabe bem como se referir a um novo colega. O que faria?", options: ["Adivinhar e esperar que esteja certo", "Perguntar com educação ou usar o nome", "Evitar falar com ele", "Pedir a outro colega para descobrir"], answer: 1, why: "Na dúvida, pergunte com educação ou use simplesmente o nome." }
          ]
        },
        {
          title: "Responder à exclusão ou ao assédio",
          objectives: ["O6"],
          minutes: 6,
          goal: "Responder depressa e de forma correta quando alguém é excluído, maltratado ou assediado.",
          text: [
            "A exclusão pode ser pequena: deixar sempre uma pessoa de fora do convite para almoçar, ignorar as suas ideias ou fazer piadas à custa dela. O assédio é mais grave: um comportamento indesejado com base em coisas como a raça, cor, religião, sexo, origem nacional, idade, deficiência ou informação genética. Como líder, não pode ignorar nenhum dos dois.",
            "Se vir, aja. Interrompa com calma no momento (\"Isso não é aceitável aqui\") e depois fale em privado com a pessoa afetada e pergunte o que ela precisa. Se alguém lhe contar um caso de assédio, ouça, agradeça, não prometa guardar segredo se a sua política o obriga a comunicar, escreva o que a pessoa disse e comunique logo aos recursos humanos ou à pessoa indicada na sua política.",
            "Proteja as pessoas contra represálias: ninguém deve ser castigado por levantar uma preocupação ou ajudar numa investigação. Nos EUA, a EEOC explica o assédio, as represálias e como apresentar uma queixa em eeoc.gov. Se alguém estiver em perigo, ligue para os serviços de emergência. Peça conselho aos recursos humanos ou a um advogado do trabalho sobre os seus deveres legais."
          ],
          steps: ["Se vir, interrompa com calma no momento.", "Fale em privado com a pessoa afetada e pergunte o que ela precisa.", "Se alguém denunciar assédio: ouça, agradeça e escreva o que disse.", "Não prometa segredo se a sua política diz que tem de comunicar.", "Comunique logo aos recursos humanos ou à pessoa indicada na sua política.", "Garanta que ninguém é castigado por falar."],
          words: [["Assédio", "um comportamento indesejado com base numa característica protegida, grave ou frequente o suficiente para tornar o trabalho hostil."], ["Represália", "castigar alguém por se queixar de discriminação ou por ajudar numa investigação."], ["Testemunha", "uma pessoa que vê acontecer algo de errado a outra pessoa."]],
          slides: [
            { title: "Exclusão e assédio", bullets: ["Exclusão: deixado de fora, ignorado, gozado", "Assédio: comportamento indesejado com base numa característica protegida", "Os líderes não podem ignorar nenhum dos dois"] },
            { title: "Se vir", bullets: ["Interrompa com calma: \"Isso não é aceitável aqui\"", "Fale em privado com a pessoa afetada", "Pergunte o que ela precisa"] },
            { title: "Se alguém lhe contar", bullets: ["Ouça e agradeça", "Escreva o que disse", "Não prometa um segredo que não pode guardar", "Comunique logo aos recursos humanos"] },
            { title: "Proteja e verifique", bullets: ["Nenhum castigo por falar", "Regras nos EUA: eeoc.gov", "Perigo? Ligue para os serviços de emergência"] }
          ],
          sources: [{ name: "EEOC: Employers (harassment, retaliation, accommodation)", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Tarefa final: escreva o seu plano de uma página com hábitos de inclusão. Inclua um hábito de pertença, uma verificação de preconceito, três hábitos justos de contratação ou promoção, uma rotina de reunião, uma melhoria de acessibilidade e os passos que vai seguir se alguém denunciar exclusão ou assédio, com a quem vai dizer e onde consultar as regras.",
          youCanNow: "responder à exclusão ou ao assédio depressa e de forma correta, proteger as pessoas que falam e saber onde consultar os seus deveres legais.",
          quickCheck: [
            { objective: "O6", q: "Qual é um exemplo de pequena exclusão do dia a dia?", options: ["Deixar sempre uma pessoa de fora do convite para almoçar", "Dar prazos claros", "Fazer conversas individuais", "Partilhar as notícias com todos ao mesmo tempo"], answer: 0, why: "A exclusão pode ser pequena mas repetida, e os líderes não a devem ignorar." },
            { objective: "O6", q: "Alguém que levantou uma preocupação é de repente tirado de um projeto pelo seu chefe. Isto é sinal de quê?", options: ["Organização normal do trabalho", "Promoção justa", "Possível represália, que você tem de travar", "Uma entrevista estruturada"], answer: 2, why: "Ninguém deve ser castigado por levantar uma preocupação." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Inclusão no dia a dia",
        questions: [
          { objective: "O4", q: "Um membro da equipa que está à distância quase nunca fala nas reuniões híbridas. O que ajuda?", options: ["Dar a palavra primeiro a quem está à distância", "Desligar a câmara dele", "Deixar de o convidar", "Só enviar as notas depois"], answer: 0, why: "Dar a palavra primeiro a quem está à distância dá-lhes uma vez justa." },
          { objective: "O4", q: "A ideia de alguém é repetida por um colega que fala mais alto e é elogiado. O que diz?", options: ["Nada", "\"Ótima ideia!\" à pessoa que fala mais alto", "\"Isso parte do que o Luís disse antes.\"", "\"Vamos passar à frente.\""], answer: 2, why: "Dê o mérito da ideia a quem a disse primeiro." },
          { objective: "O5", q: "Qual é um passo de acessibilidade para reuniões pela internet?", options: ["Falar mais depressa", "Ligar as legendas", "Usar letras minúsculas", "Desligar o chat"], answer: 1, why: "As legendas ajudam pessoas surdas ou com dificuldade de audição, e muitas outras." },
          { objective: "O5", q: "Usa o pronome errado para um colega. O que faz?", options: ["Discute sobre isso", "Faz uma piada", "Evita a pessoa", "Pede desculpa em poucas palavras, corrige e segue em frente"], answer: 3, why: "Um pedido de desculpa curto e a correção são respeitosos sem tornar a situação constrangedora." },
          { objective: "O6", q: "Um membro da equipa denuncia assédio e pede-lhe segredo. A sua política obriga a comunicar. Você deve:", options: ["Explicar que tem de comunicar e depois comunicar logo aos recursos humanos", "Prometer segredo", "Ignorar", "Contar a toda a equipa"], answer: 0, why: "Não prometa um segredo que não pode guardar; siga a sua política." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Liderar Equipas Inclusivas",
    questions: [
      { objective: "O1", q: "Segurança psicológica quer dizer que as pessoas:", options: ["Nunca discordam", "Podem falar ou admitir erros sem ser castigadas ou gozadas", "Trabalham sozinhas", "Não têm prazos"], answer: 1, why: "A segurança para falar é o centro disto." },
      { objective: "O1", q: "Que hábito cria pertença?", options: ["Partilhar as notícias primeiro com algumas pessoas", "Dar as melhores tarefas aos amigos", "Dizer mal os nomes", "Agradecer a quem levanta problemas"], answer: 3, why: "Agradecer a quem levanta problemas torna seguro falar." },
      { objective: "O1", q: "Para saber o que ajudaria alguém a falar, você deve:", options: ["Perguntar-lhe em privado", "Adivinhar", "Perguntar aos colegas dele", "Esperar"], answer: 0, why: "Perguntar é melhor do que supor." },
      { objective: "O2", q: "O preconceito inconsciente é:", options: ["Sempre de propósito", "Um problema só das más pessoas", "Um julgamento rápido que fazemos sem dar conta", "Proibido por lei"], answer: 2, why: "Todos o temos; o problema é agir com base nele." },
      { objective: "O2", q: "O efeito de halo é quando:", options: ["Uma qualidade pinta a forma como julgamos tudo o resto de alguém", "Gostamos de escritórios claros", "Trabalhamos até tarde", "Contratamos de muitos lugares"], answer: 0, why: "Uma qualidade boa ou má espalha-se a toda a nossa opinião." },
      { objective: "O2", q: "Uma boa pergunta para verificar o preconceito é:", options: ["\"Gosto desta pessoa?\"", "\"Decidiria o mesmo se esta pessoa fosse de outro grupo?\"", "\"É parecida comigo?\"", "\"O que diz o meu instinto?\""], answer: 1, why: "Testa se pertencer a um grupo mudou a sua decisão." },
      { objective: "O3", q: "O anúncio de emprego pede um diploma, mas o trabalho não precisa dele. A contratação justa diz:", options: ["Mantenha-o para ter menos candidatos", "Acrescente mais dois diplomas", "Tire os requisitos de que o trabalho não precisa de verdade", "Esconda o anúncio"], answer: 2, why: "Requisitos a mais deixam de fora pessoas capazes." },
      { objective: "O3", q: "Que pergunta de entrevista NÃO deve fazer?", options: ["\"Fale-me de uma vez em que resolveu um problema de um cliente.\"", "\"Como lidaria com uma entrega atrasada?\"", "\"Que passos de segurança segue?\"", "\"Está a pensar ter filhos?\""], answer: 3, why: "Os planos de família não estão ligados ao trabalho e podem levar à discriminação." },
      { objective: "O3", q: "Onde podem os empregadores dos EUA consultar os deveres federais contra a discriminação?", options: ["eeoc.gov", "Uma publicação nas redes sociais", "O site de um concorrente", "Em lado nenhum"], answer: 0, why: "O site oficial da EEOC explica os deveres dos empregadores." },
      { objective: "O3", q: "Pelas regras da EEOC, a proteção contra a discriminação por idade abrange pessoas com:", options: ["Menos de 25 anos", "40 anos ou mais", "Só mais de 70 anos", "Qualquer idade abaixo de 18 anos"], answer: 1, why: "A EEOC indica 40 anos ou mais." },
      { objective: "O4", q: "Um minuto de escrita em silêncio antes da discussão ajuda porque:", options: ["Termina a reunião mais depressa", "As pessoas mais caladas têm tempo para formar as suas ideias", "Ninguém tem de falar", "Substitui a agenda"], answer: 1, why: "Dá a todos tempo para pensar antes de as vozes mais altas tomarem conta." },
      { objective: "O4", q: "Porque fazer rodar a função de quem toma notas?", options: ["Para que não sejam sempre as mesmas pessoas a ficar com as tarefas de bastidores", "Para confundir as pessoas", "Porque as notas não são precisas", "Para castigar quem chega atrasado"], answer: 0, why: "Fazer rodar as tarefas de bastidores é mais justo." },
      { objective: "O4", q: "Um colega está sempre a interromper a Amina. Você diz:", options: ["Nada", "\"Amina, seja mais rápida.\"", "\"Vamos deixar a Amina terminar.\"", "\"Vamos fazer uma pausa.\""], answer: 2, why: "Intervir com gentileza protege a vez dela." },
      { objective: "O5", q: "Que serviço gratuito dos EUA dá orientação confidencial sobre adaptações no trabalho?", options: ["Um anúncio num motor de busca", "A Job Accommodation Network (askjan.org)", "Um site de jogos", "Uma aplicação de compras"], answer: 1, why: "A JAN dá orientação gratuita e confidencial sobre adaptações." },
      { objective: "O5", q: "Um trabalhador pede uma mudança para fazer o seu trabalho por causa de uma deficiência. Você deve:", options: ["Discutir o assunto com toda a equipa", "Dizer logo que não", "Pedir-lhe que prove em público", "Tratar em privado e seguir o seu processo de adaptações"], answer: 3, why: "Os pedidos devem ser privados e levados a sério." },
      { objective: "O5", q: "Quando não sabe bem os pronomes de alguém, uma opção respeitosa é:", options: ["Adivinhar em voz alta", "Evitar falar com a pessoa", "Perguntar com educação ou usar o nome", "Fazer uma piada"], answer: 2, why: "Perguntar com educação ou usar o nome é respeitoso." },
      { objective: "O6", q: "Ouve uma \"piada\" a gozar com o sotaque de um colega. Qual é o melhor primeiro passo?", options: ["Interromper com calma: \"Isso não é aceitável aqui\", e depois ver como está o colega", "Rir também", "Esperar para ver se volta a acontecer", "Publicar sobre isso na internet"], answer: 0, why: "Aja no momento e apoie a pessoa afetada." },
      { objective: "O6", q: "Represália quer dizer:", options: ["Dar um aumento", "Castigar alguém por se queixar de discriminação ou por ajudar numa investigação", "Uma festa da equipa", "Uma sessão de formação"], answer: 1, why: "A represália é proibida em si mesma e tem de ser evitada." },
      { objective: "O6", q: "Depois de alguém lhe denunciar assédio, você deve:", options: ["Esperar algumas semanas", "Dizer-lhe para resolver sozinho", "Confrontar a pessoa acusada à frente da equipa", "Escrever o que a pessoa disse e comunicar logo aos recursos humanos"], answer: 3, why: "Comunicar depressa e por escrito segue as boas práticas e a política." },
      { objective: "O6", q: "Alguém está em perigo imediato no trabalho. Você deve:", options: ["Enviar um e-mail aos recursos humanos amanhã", "Ligar para os serviços de emergência", "Fazer uma reunião", "Não fazer nada"], answer: 1, why: "A segurança vem primeiro; ligue para os serviços de emergência." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 6, 10, 12, 13, 15, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Hábito de pertença", objective: "O1", notYet: "Nenhum hábito, ou um evento único.", meets: "Um hábito de pertença que o líder pode repetir.", exceeds: "Diz como vai perguntar à equipa se ajuda." },
      { name: "Verificação de preconceito", objective: "O2", notYet: "Nenhuma verificação, ou a verificação vem depois da decisão.", meets: "Uma verificação de preconceito usada numa decisão real: primeiro os critérios, razões escritas.", exceeds: "Também pede uma segunda opinião sobre a decisão." },
      { name: "Contratação ou promoção justa", objective: "O3", notYet: "Menos de três hábitos, ou hábitos não ligados ao trabalho.", meets: "Três hábitos que avaliam todos pelos mesmos critérios ligados ao trabalho.", exceeds: "Inclui perguntas de entrevista estruturada pontuadas por mais de uma pessoa." },
      { name: "Reuniões e acessibilidade", objective: "O4", notYet: "Nenhuma rotina de reunião ou nenhuma melhoria de acessibilidade.", meets: "Uma rotina de reunião que dá a vez a todas as vozes, e uma melhoria de acessibilidade.", exceeds: "Diz como vai intervir nas interrupções ou nas ideias apropriadas sem dar o mérito." },
      { name: "Passos de resposta", objective: "O6", notYet: "Faltam passos, ou o plano promete guardar segredo de uma denúncia contra a política.", meets: "Passos para uma denúncia de exclusão ou assédio, a quem vai dizer e onde estão as regras oficiais.", exceeds: "Inclui proteger a pessoa contra represálias e ligar para os serviços de emergência se alguém estiver em perigo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que usam uma entrevista estruturada ou uma verificação de preconceito em 90 dias (inquérito de seguimento)",
      "Membros da equipa que dizem conseguir falar nas reuniões",
      "Alunos que fazem outro curso de liderança da Koach Learn"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador para ver as lições",
      "Papel ou um documento para o plano de uma página com hábitos de inclusão",
      "A política da sua organização sobre assédio e adaptações, se existir",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Defina primeiro as regras do grupo: nada de nomes verdadeiros nem de histórias que identifiquem pessoas dos locais de trabalho dos alunos na discussão em grupo.",
      "Pratique em voz alta como intervir, com frases como \"Vamos deixar a Amina terminar.\"",
      "Peça aos alunos que encontrem a política de denúncia da sua própria organização antes de escreverem os passos de resposta.",
      "Lembre aos alunos fora dos EUA que as leis são diferentes e que devem consultar as regras do seu próprio país e os recursos humanos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
