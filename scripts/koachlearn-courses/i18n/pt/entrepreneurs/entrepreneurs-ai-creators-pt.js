"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-creators.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-creators-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-creators",
  category: "Entrepreneurs",
  name: "IA para Criadores de Conteúdo e Influenciadores",
  skills: "Definir o seu nicho e os pilares de conteúdo, Escrever guiões com IA, Editar e reaproveitar conteúdo, Rotular conteúdo de IA nas plataformas, Divulgar parcerias com marcas, Proteger os seus direitos e os dos outros",
  outcome: "planear, escrever e produzir uma semana de conteúdo com a ajuda da IA, reaproveitar um vídeo em várias publicações, rotular corretamente o conteúdo de IA realista, divulgar parcerias com marcas como a FTC espera e respeitar os direitos de autor e a voz e o rosto das outras pessoas.",
  about: [
    "Os criadores de conteúdo e os influenciadores gerem pequenas empresas de media: fazem conteúdo, fazem crescer um público e ganham dinheiro com parcerias com marcas, links de afiliado, produtos e programas das plataformas. A IA pode ajudar com ideias, guiões, edição, legendas e reaproveitamento, para que uma só pessoa faça o trabalho de uma pequena equipa.",
    "Este curso é para criadores de qualquer tamanho que querem trabalhar mais depressa sem perder a sua voz nem a confiança do seu público. No Capítulo 1 vai definir o seu nicho e os pilares de conteúdo, escrever guiões com IA, e editar e reaproveitar. No Capítulo 2 vai aprender quando rotular conteúdo de IA nas plataformas, como divulgar parcerias com marcas segundo as orientações da FTC (a agência de defesa do consumidor dos Estados Unidos) e como proteger os seus direitos e respeitar os dos outros.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As regras das plataformas mudam muitas vezes; consulte as páginas de ajuda de cada plataforma. Isto não é aconselhamento jurídico; fale com um advogado sobre contratos e direitos."
  ],
  finalTask: "Produza um kit de conteúdo de criador: a frase do seu nicho e três pilares de conteúdo, um plano de conteúdo de 7 dias, um guião de vídeo completo com um gancho forte (escrito com IA, com a sua voz), um vídeo ou publicação longa reaproveitado em pelo menos três peças curtas com legendas, uma lista de verificação de rótulos de IA para as suas plataformas e um exemplo de publicação patrocinada com uma divulgação correta e clara.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Criadores de conteúdo e influenciadores, novos ou em crescimento, que gerem uma pequena empresa de media em plataformas como o YouTube, o TikTok ou o Instagram e ganham dinheiro com parcerias com marcas, links de afiliado, produtos ou programas das plataformas.",
    startingPoint: "Sabem filmar com o telefone, publicar conteúdo e usar aplicações sociais. Alguns já experimentaram ferramentas de IA para legendas ou ideias, mas sem um plano, sem uma voz definida e sem conhecer bem as regras de rótulos, de divulgação e de direitos de autor.",
    gap: "Os criadores que publicam sem plano esgotam-se, e os que usam a IA sem cuidado podem perder a sua voz, publicar dados errados, quebrar as regras de rótulos das plataformas ou falhar as regras de divulgação da FTC. Os alunos precisam de um método de trabalho com IA, que possam repetir, e que mantenha o seu conteúdo honesto, legal e deles.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou computador com internet e um assistente de IA gratuito",
      "Tempo: lições de cerca de 5 minutos, que cabem entre os horários de publicação",
      "Regras: as regras de rótulos de IA das plataformas, as regras da FTC sobre recomendações e os direitos de autor aplicam-se e podem mudar",
      "Privacidade e direitos: nunca clonar a voz ou o rosto de outra pessoa, e não colocar dados privados nas ferramentas de IA"
    ],
    prerequisites: "Nenhum. Quem é novo nas ferramentas de IA pode fazer primeiro o curso \"Introdução à IA e Confiança Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um assistente de IA para ter ideias", action: "escrever a frase do seu nicho, três pilares de conteúdo e um plano de conteúdo de 7 dias", standard: "para que cada publicação do plano caiba num dos pilares" },
    { id: "O2", condition: "Com exemplos das suas próprias legendas ou da sua fala", action: "escrever com a ajuda da IA um guião de vídeo curto com um gancho forte", standard: "para que soe como você quando lido em voz alta e cada dado esteja verificado" },
    { id: "O3", condition: "Com um vídeo ou uma publicação longa", action: "reaproveitá-lo em pelo menos três peças curtas com legendas", standard: "com todos os erros das legendas corrigidos e cada peça a fazer sentido sozinha" },
    { id: "O4", condition: "Com uma lista de publicações e as regras da sua plataforma", action: "decidir que publicações precisam de um rótulo de IA e escrever uma lista de verificação de rótulos", standard: "rotulando todas as publicações de IA realistas e rotulando na dúvida" },
    { id: "O5", condition: "Com uma parceria com uma marca ou um produto grátis", action: "escrever uma publicação patrocinada com uma divulgação clara no início", standard: "com a divulgação mostrada e dita cedo e cada afirmação honesta" },
    { id: "O6", condition: "Usando ferramentas de IA e contratos com marcas", action: "fazer uma lista de regras para usar o trabalho dos outros e proteger o seu próprio conteúdo e a sua imagem", standard: "com pelo menos três regras, incluindo não copiar vozes nem rostos sem autorização" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Criar mais depressa com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "O seu nicho e os pilares de conteúdo",
          minutes: 5,
          goal: "Escrever a frase do seu nicho e três pilares de conteúdo para o seu canal.",
          text: [
            "O público segue criadores que falam claramente de alguma coisa. A frase do nicho diz para quem você faz conteúdo e o que essas pessoas ganham: \"Cozinha caseira barata para estudantes universitários\", \"Musculação para iniciantes, para mulheres com mais de 40 anos\", \"Dicas de negócio para barbeiros\".",
            "Os pilares de conteúdo são os três ou quatro temas a que você volta sempre. Para a cozinha barata: receitas baratas, truques para as compras, básicos da cozinha e um dia na minha vida. Os pilares tornam o planeamento fácil e ajudam o público a saber o que esperar.",
            "Peça à IA: \"O meu nicho é [nicho]. Sugira cinco pilares de conteúdo e dez ideias de vídeo para cada um.\" Fique com as ideias que combinam com a sua experiência real e a sua personalidade; a sua voz é o que a IA não consegue copiar."
          ],
          steps: ["Escreva para quem faz conteúdo e o que essas pessoas ganham.", "Peça à IA cinco pilares possíveis e ideias para cada um.", "Escolha três pilares que combinam com a sua experiência real.", "Faça um plano de 7 dias a partir das ideias."],
          words: [["Nicho", "o tema e o público específicos a que o seu conteúdo se dirige."], ["Pilar de conteúdo", "um tema principal sobre o qual publica muitas vezes."]],
          slides: [
            { title: "Fale claramente de alguma coisa", bullets: ["Para quem é", "O que as pessoas ganham", "\"Cozinha barata para estudantes universitários\""] },
            { title: "Pilares de conteúdo", bullets: ["Três ou quatro temas que se repetem", "Planeamento fácil", "O público sabe o que esperar"] },
            { title: "IA para ter ideias", bullets: ["Pilares e dez ideias para cada um", "Fique com o que combina com a sua experiência", "A sua voz é sua"] }
          ],
          tryIt: "Escreva a frase do seu nicho, escolha três pilares com a ajuda da IA e faça um plano de conteúdo de 7 dias.",
          youCanNow: "definir o seu nicho e planear o conteúdo à volta de pilares claros.",
          quickCheck: [
            { objective: "O1", q: "O que diz às pessoas a frase do nicho?", options: ["Quantos seguidores você tem", "Que aplicações usa", "Para quem faz conteúdo e o que essas pessoas ganham", "Com que frequência publica"], answer: 2, why: "A frase do nicho diz qual é o seu público e o que ele ganha com você." },
            { objective: "O1", q: "A IA sugere uma ideia de publicação que não cabe em nenhum dos seus três pilares. O que faria?", options: ["Publicá-la na mesma porque a IA a sugeriu", "Deixá-la de lado ou mudá-la para caber num pilar", "Criar um pilar novo para cada ideia", "Apagar os seus pilares e começar de novo"], answer: 1, why: "Os pilares mantêm o plano focado, por isso as ideias devem caber num deles." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever guiões com IA com a sua própria voz",
          minutes: 5,
          goal: "Escrever com a ajuda da IA um guião de vídeo curto, com um gancho forte, que soe como você.",
          text: [
            "Os vídeos curtos ganham ou perdem nos primeiros segundos. O gancho é a frase de abertura que faz as pessoas ficarem: um dado surpreendente, uma promessa forte que consegue cumprir, ou uma pergunta que o seu público já faz.",
            "Ajude a IA a soar como você: cole duas das suas próprias legendas ou a transcrição de você a falar, e diga \"Imite esta voz.\" Depois peça: \"Escreva um guião de 45 segundos sobre [ideia]. Dê-me cinco opções de gancho e depois o guião, com uma ideia clara e um apelo à ação.\" Escolha um gancho e edite o guião lendo-o em voz alta.",
            "Verifique os dados, sobretudo em temas de saúde, dinheiro, exercício físico ou leis. A IA pode inventar estudos e números. Se não consegue confirmar um dado, tire-o ou diga onde as pessoas podem verificá-lo."
          ],
          steps: ["Dê à IA exemplos da sua voz verdadeira.", "Peça cinco ganchos e um guião curto.", "Escolha um gancho e leia o guião em voz alta.", "Edite até soar como você.", "Verifique cada dado; tire o que não consegue confirmar."],
          words: [["Gancho", "a frase de abertura que faz as pessoas continuarem a ver."], ["Apelo à ação", "o que pede às pessoas para fazerem a seguir, como seguir ou comentar."], ["Transcrição", "as palavras escritas de algo que foi dito."]],
          slides: [
            { title: "Os primeiros segundos contam", bullets: ["Um dado surpreendente", "Uma promessa que consegue cumprir", "Uma pergunta que o público já faz"] },
            { title: "Faça a IA soar como você", bullets: ["Cole as suas legendas ou uma transcrição", "\"Imite esta voz\"", "Cinco ganchos e depois o guião"] },
            { title: "Verifique os dados", bullets: ["A IA pode inventar estudos e números", "Saúde, dinheiro, exercício, leis: confirme", "Não consegue confirmar? Tire"] }
          ],
          tryIt: "Escreva um guião de 45 segundos com a ajuda da IA, usando exemplos da sua própria voz. Escolha um gancho, leia em voz alta, edite e verifique cada dado.",
          youCanNow: "escrever guiões com IA que prendem a atenção e soam como você.",
          quickCheck: [
            { objective: "O2", q: "Para que serve o gancho de um guião?", options: ["Para manter as pessoas a ver desde a primeira frase", "Para listar os seus patrocinadores", "Para terminar o vídeo", "Para mostrar o nome do seu canal"], answer: 0, why: "O gancho é a frase de abertura que faz as pessoas ficarem." },
            { objective: "O2", q: "O guião da IA soa rígido e nada parecido com você. O que faria?", options: ["Publicá-lo como está", "Pedir à IA para o fazer mais comprido", "Dar à IA exemplos das suas próprias palavras e depois lê-lo em voz alta e editá-lo", "Usar outro tema"], answer: 2, why: "Os seus próprios exemplos e uma edição em voz alta fazem o guião soar como você." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Editar e reaproveitar com IA",
          minutes: 5,
          goal: "Transformar um vídeo ou uma publicação longa em várias peças curtas com legendas.",
          text: [
            "Reaproveitar quer dizer transformar uma peça de conteúdo em muitas. Um vídeo de 10 minutos pode virar três clipes curtos, uma publicação em carrossel, um parágrafo de newsletter e algumas citações. As ferramentas de IA podem encontrar os melhores momentos, cortar clipes, pôr legendas e mudar o tamanho para cada plataforma.",
            "Muitas aplicações de edição (por exemplo o CapCut, o Canva, o Descript ou o editor da própria plataforma) já têm funções de IA como legendas automáticas, remoção do fundo e sugestões de clipes. As funções e os planos mudam; consulte as páginas de ajuda de cada aplicação.",
            "Reveja sempre as legendas da IA à procura de erros, sobretudo nomes, números e calão, e veja se cada clipe ainda faz sentido sozinho e não torce o que você ou um convidado disse."
          ],
          steps: ["Escolha um vídeo ou uma publicação longa.", "Use a IA para encontrar três a cinco melhores momentos.", "Corte os clipes e ponha legendas automáticas.", "Corrija os erros das legendas e mude o tamanho para cada plataforma.", "Escreva um texto para cada um com a ajuda da IA."],
          words: [["Reaproveitar", "transformar uma peça de conteúdo em várias outras."], ["Legendas automáticas", "legendas feitas automaticamente a partir do som."], ["Carrossel", "uma publicação com várias imagens que as pessoas passam com o dedo."]],
          slides: [
            { title: "Uma peça, muitas publicações", bullets: ["Clipes curtos", "Carrossel e citações", "Parágrafo de newsletter"] },
            { title: "Funções de edição com IA", bullets: ["Encontrar os melhores momentos e cortar clipes", "Legendas automáticas e mudança de tamanho", "Consulte as páginas de ajuda de cada aplicação"] },
            { title: "Reveja tudo", bullets: ["Corrija nomes, números, calão", "Os clipes têm de fazer sentido sozinhos", "Nunca torça o que alguém disse"] }
          ],
          tryIt: "Reaproveite um vídeo ou uma publicação longa em pelo menos três peças curtas com legendas. Corrija todos os erros das legendas.",
          youCanNow: "reaproveitar conteúdo com ferramentas de IA mantendo-o correto.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer reaproveitar conteúdo?", options: ["Apagar publicações antigas", "Copiar o vídeo de outro criador", "Publicar o mesmo clipe muitas vezes no mesmo dia", "Transformar uma peça de conteúdo em várias peças"], answer: 3, why: "Reaproveitar faz várias peças, como clipes curtos, a partir de uma peça longa." },
            { objective: "O3", q: "Cortou um clipe curto, mas sozinho ele faz parecer que o convidado diz o contrário do que quis dizer. O que faria?", options: ["Publicá-lo porque vai ter visualizações", "Escolher outro corte que mantenha o sentido verdadeiro", "Pôr uma legenda a dizer que foi editado", "Publicá-lo só numa plataforma"], answer: 1, why: "Um clipe curto tem de fazer sentido sozinho e não torcer o que foi dito." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Criar mais depressa com IA",
        questions: [
          { objective: "O1", q: "Qual é uma frase de nicho clara?", options: ["Conteúdo", "Cozinha caseira barata para estudantes universitários", "Vídeos sobre coisas", "Tudo para todos"], answer: 1, why: "Diz para quem é e o que as pessoas ganham." },
          { objective: "O1", q: "O que são pilares de conteúdo?", options: ["O seu equipamento de filmagem", "Colunas na sala onde filma", "O seu número de seguidores", "Três ou quatro temas sobre os quais publica muitas vezes"], answer: 3, why: "Os pilares guiam o planeamento." },
          { objective: "O2", q: "Como pode ajudar a IA a escrever com a sua voz?", options: ["Colar exemplos das suas próprias legendas ou da sua fala", "Pedir-lhe para copiar outro criador", "Dar-lhe a sua palavra-passe", "Usar mais emojis"], answer: 0, why: "Os exemplos mostram à IA o seu estilo." },
          { objective: "O2", q: "O guião de exercício físico da IA cita um estudo que você não encontra. O que faz?", options: ["Inventa um link", "Deixa ficar", "Tira-o ou diz às pessoas onde podem verificar", "Di-lo mais alto"], answer: 2, why: "A IA pode inventar estudos; não partilhe dados que não confirmou." },
          { objective: "O3", q: "As legendas automáticas escreveram mal o nome de um convidado. O que faz?", options: ["Tira o convidado", "Publica na mesma", "Corrige antes de publicar", "Desliga o som"], answer: 2, why: "Reveja as legendas da IA à procura de erros." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter a confiança do seu público",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rotular conteúdo de IA nas plataformas",
          minutes: 5,
          goal: "Decidir quando uma plataforma exige que rotule conteúdo de IA realista, e rotulá-lo.",
          text: [
            "As plataformas estão a criar regras para o conteúdo de IA. O YouTube, por exemplo, exige que os criadores divulguem conteúdo que parece realista e foi feito ou mudado de forma importante com IA: fazer uma pessoa real parecer dizer ou fazer algo que não fez, mudar imagens de um acontecimento ou de um lugar real, ou criar uma cena realista que não aconteceu. A divulgação faz-se com a opção de uso de IA quando carrega o vídeo.",
            "O YouTube não exige divulgação para conteúdo claramente irreal, pequenas edições como correção de cor, filtros de beleza ou fundo desfocado, nem para o uso de IA para ideias, guiões, títulos ou miniaturas. Os criadores que falham muitas vezes a divulgação podem receber rótulos, ver o conteúdo removido ou perder o acesso ao programa de parceiros.",
            "Outras plataformas, como o TikTok e as aplicações da Meta, têm as suas próprias regras de rótulos; consulte as páginas de ajuda de cada plataforma. Na dúvida, rotule: a honestidade mantém a confiança do seu público."
          ],
          steps: ["Pergunte: isto parece realista, e a IA fez ou mudou isto de forma importante?", "Se sim, use o rótulo de IA ou a opção de divulgação da plataforma.", "Consulte a página de ajuda de cada plataforma para ver as suas regras.", "Na dúvida, rotule."],
          words: [["Conteúdo sintético", "imagens, vídeo ou som feitos ou mudados pela IA."], ["Opção de divulgação", "uma opção ao publicar que marca o conteúdo como feito ou mudado pela IA."]],
          slides: [
            { title: "YouTube: divulgue quando é realista", bullets: ["Uma pessoa real a dizer o que não disse", "Acontecimentos ou lugares reais mudados", "Cenas realistas que não aconteceram"] },
            { title: "YouTube: não é obrigatório", bullets: ["Conteúdo claramente irreal", "Correção de cor, filtros, fundo desfocado", "IA para ideias, guiões, títulos, miniaturas"] },
            { title: "Cada plataforma é diferente", bullets: ["Consulte as páginas de ajuda do TikTok e da Meta", "Na dúvida, rotule"] }
          ],
          sources: [{ name: "Ajuda do YouTube: Divulgar o uso de conteúdo alterado ou sintético", url: "https://support.google.com/youtube/answer/14328491" }],
          tryIt: "Olhe para as suas últimas cinco publicações ou para o plano da próxima semana. Para cada uma, decida se precisa de um rótulo de IA na sua plataforma e porquê. Escreva uma lista curta de verificação de rótulos.",
          youCanNow: "rotular corretamente o conteúdo de IA realista nas suas plataformas.",
          quickCheck: [
            { objective: "O4", q: "Que tipo de publicação tem mais probabilidade de precisar de um rótulo de IA?", options: ["Um vídeo de IA realista de um lugar real que parece verdadeiro", "Um guião que a IA ajudou a escrever", "Um vídeo com legendas automáticas", "Uma foto com um filtro de cor simples"], answer: 0, why: "As plataformas pedem para rotular conteúdo de IA realista que as pessoas podem confundir com o real." },
            { objective: "O4", q: "Não tem a certeza se uma publicação precisa de um rótulo de IA. O que faria?", options: ["Deixá-la sem rótulo", "Apagar a publicação", "Rotulá-la", "Perguntar aos seguidores nos comentários"], answer: 2, why: "Na dúvida, rotular é a escolha segura." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Divulgar parcerias com marcas como a FTC pede",
          minutes: 5,
          goal: "Escrever uma publicação patrocinada com uma divulgação clara e correta.",
          text: [
            "Se uma marca lhe paga, lhe dá produtos grátis, uma comissão ou uma viagem, e o seu público não esperaria essa ligação, tem de o divulgar, mesmo que fique com um produto grátis e mesmo para presentes pequenos. Divulgue em cada publicação patrocinada; não pode supor que as pessoas viram as anteriores.",
            "As orientações da FTC sobre recomendações dizem que as divulgações têm de ser fáceis de ver e de entender. \"#ad\" ou \"Ad:\" no início, ou \"Patrocinado por XYZ\", funcionam bem. Etiquetas vagas como \"#partner\", \"#ambassador\" ou \"#sp\", ou divulgações escondidas nos comentários, no fim de legendas longas ou atrás de \"mais\", muitas vezes não funcionam. Nos vídeos, divulgue no próprio vídeo, de preferência dito e mostrado, e cedo; repita durante as transmissões ao vivo.",
            "Diga só o que acredita honestamente a partir do uso real, e nunca publique avaliações falsas. As ferramentas de divulgação das plataformas ajudam mas podem não ser suficientes sozinhas; acrescente a sua. A IA pode escrever rascunhos de legendas patrocinadas, mas o responsável pela divulgação e por cada afirmação é você."
          ],
          steps: ["Veja se tem uma ligação material: pagamento, produto grátis, comissão, viagem.", "Ponha \"#ad\" ou \"Patrocinado\" no início da legenda.", "Nos vídeos, diga e mostre cedo; repita durante as transmissões ao vivo.", "Faça só afirmações a partir da sua experiência honesta.", "Use as ferramentas da plataforma E a sua própria divulgação."],
          words: [["Ligação material", "uma relação, como pagamento ou produtos grátis, que as pessoas podem não esperar."], ["Recomendação", "uma mensagem que as pessoas pensam que mostra a sua opinião honesta sobre um produto."]],
          slides: [
            { title: "Quando divulgar", bullets: ["Pagamento, produtos grátis, comissões, viagens", "Mesmo presentes pequenos", "Em cada publicação patrocinada"] },
            { title: "Como divulgar", bullets: ["\"#ad\" ou \"Ad:\" no início", "\"Patrocinado por XYZ\"", "Não escondido nos comentários nem depois de \"mais\""] },
            { title: "Em vídeos e transmissões ao vivo", bullets: ["Diga e mostre", "Cedo no vídeo", "Repita durante as transmissões ao vivo"] },
            { title: "Afirmações honestas", bullets: ["Só a sua experiência real", "Acrescente também a sua própria divulgação"] }
          ],
          sources: [{ name: "FTC: Guias de Recomendações, o que as pessoas perguntam", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Escreva com a ajuda da IA um exemplo de publicação patrocinada para um produto que usa de verdade. Ponha uma divulgação clara no início, escreva a divulgação falada para o vídeo e verifique que cada afirmação é honesta.",
          youCanNow: "divulgar parcerias com marcas de forma clara e honesta, como a FTC espera.",
          quickCheck: [
            { objective: "O5", q: "Onde deve aparecer a divulgação de uma parceria numa legenda?", options: ["Mesmo no fim, depois das hashtags", "Só na biografia do seu perfil", "Num comentário por baixo da publicação", "No início, onde as pessoas veem primeiro"], answer: 3, why: "Uma divulgação clara fica onde as pessoas a veem logo." },
            { objective: "O5", q: "Recebe dinheiro para falar de um produto num vídeo. O que faria?", options: ["Falar da parceria só na descrição", "Dizer e mostrar a divulgação cedo no vídeo", "Não divulgar porque a marca é conhecida", "Divulgar só se alguém perguntar"], answer: 1, why: "Num vídeo, a divulgação deve ser dita e mostrada cedo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger os seus direitos e respeitar os dos outros",
          minutes: 5,
          goal: "Usar a IA sem copiar os outros, e proteger o seu próprio conteúdo e a sua imagem.",
          text: [
            "Não use a IA para copiar os vídeos de outro criador, o logótipo de uma marca, ou a voz ou o rosto de alguém sem autorização. Fazer uma pessoa real parecer dizer ou fazer coisas que não fez pode enganar as pessoas, quebrar as regras das plataformas e levar a queixas legais. Use música e clipes para os quais tem direitos, ou a biblioteca com licença da plataforma.",
            "Propriedade: o Copyright Office dos Estados Unidos (o serviço dos direitos de autor) diz que o material feito só pela IA não é protegido por direitos de autor, mas o seu próprio trabalho criativo, incluindo as suas edições humanas e a forma como organiza tudo, pode ser. Quanto mais o seu conteúdo for a sua própria voz, as suas imagens e as suas ideias, mais ele é seu.",
            "Proteja-se: leia os contratos com marcas para ver quem fica dono do conteúdo, durante quanto tempo o podem usar e se podem usar o seu rosto ou a sua voz com IA. Guarde os originais do seu trabalho. Peça a um advogado para rever qualquer contrato que entregue direitos sobre o seu conteúdo ou a sua imagem."
          ],
          steps: ["Nunca use a IA para copiar outro criador, uma marca ou a voz ou o rosto de uma pessoa sem autorização.", "Use música e clipes com licença.", "Ponha a sua própria voz, as suas imagens e as suas ideias no centro.", "Leia os contratos: propriedade, tempo de uso e uso da sua imagem com IA.", "Peça a um advogado para rever contratos que entregam direitos."],
          words: [["Imagem", "o seu rosto, a sua voz e a sua identidade."], ["Licença", "autorização para usar algo com condições definidas."], ["Direitos de uso", "o que uma marca pode fazer com o seu conteúdo e durante quanto tempo."]],
          slides: [
            { title: "Respeite os outros", bullets: ["Não copie criadores, logótipos, vozes nem rostos", "Use música e clipes com licença"] },
            { title: "Direitos de autor e IA", bullets: ["Material feito só pela IA: não é protegido", "O seu trabalho criativo humano pode ser", "A sua voz e as suas imagens = suas"] },
            { title: "Proteja-se", bullets: ["Quem fica dono do conteúdo? Durante quanto tempo?", "Podem usar o seu rosto ou a sua voz com IA?", "Advogado para rever acordos de direitos"] }
          ],
          sources: [{ name: "Copyright Office dos EUA: Direitos de autor e inteligência artificial", url: "https://www.copyright.gov/ai/" }, { name: "Copyright Office dos EUA: anúncio do relatório Parte 2 sobre proteção por direitos de autor", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Tarefa final: escreva três regras que vai seguir sobre o uso do trabalho dos outros e os seus próprios direitos, e depois junte o seu kit de conteúdo de criador: nicho e pilares, plano de 7 dias, guião, peças reaproveitadas, lista de verificação de rótulos de IA e exemplo de publicação patrocinada.",
          youCanNow: "criar com IA como criador de conteúdo mantendo a confiança do seu público e protegendo os direitos de todos.",
          quickCheck: [
            { objective: "O6", q: "O que deve verificar num contrato com uma marca?", options: ["Quem fica dono do conteúdo, durante quanto tempo, e o uso da sua imagem com IA", "Só o valor do pagamento", "Só a data de publicação", "As cores do logótipo da marca"], answer: 0, why: "A propriedade, os prazos e os direitos sobre a sua imagem protegem você e o seu trabalho." },
            { objective: "O6", q: "Um fã pede-lhe para usar a IA para copiar a voz de um criador famoso num vídeo de brincadeira. O que faria?", options: ["Fazer, porque é só uma brincadeira", "Fazer, mas pôr uma pequena nota", "Fazer só numa plataforma", "Dizer que não, a menos que tenha a autorização desse criador"], answer: 3, why: "Copiar a voz de outra pessoa sem autorização não está certo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter a confiança do seu público",
        questions: [
          { objective: "O4", q: "No YouTube, o que precisa de divulgação de IA?", options: ["Um vídeo realista de uma pessoa real a dizer algo que nunca disse", "Uma correção de cor", "Usar a IA para ter ideias de títulos", "Um dragão de desenho animado"], answer: 0, why: "Conteúdo realista alterado que mostra uma pessoa real precisa de divulgação." },
          { objective: "O4", q: "O YouTube exige divulgação quando a IA só ajudou a escrever o seu guião?", options: ["Só para vídeos longos", "Sim, sempre", "Só aos domingos", "Não"], answer: 3, why: "Usar a IA para ideias ou guiões não exige divulgação." },
          { objective: "O5", q: "Uma marca enviou-lhe ténis grátis e você publica sobre eles. O que deve fazer?", options: ["Nada, ficou com eles", "Divulgar claramente, como \"Oferecido por XYZ\" ou \"#ad\" no início", "Esconder nos comentários", "Usar \"#sp\" no fim"], answer: 1, why: "Os produtos grátis são uma ligação material que precisa de divulgação clara." },
          { objective: "O5", q: "Num vídeo patrocinado, a divulgação deve estar:", options: ["No próprio vídeo, dita e mostrada, cedo", "Só na descrição", "Só num link", "Só mesmo no fim"], answer: 0, why: "As orientações da FTC dizem para divulgar no vídeo, de preferência das duas formas." },
          { objective: "O6", q: "Pode usar a IA para clonar a voz de outro criador no seu vídeo sem autorização?", options: ["Só se for curto", "Sim", "Não", "Só para brincadeiras"], answer: 2, why: "Copiar a voz de alguém sem autorização pode enganar as pessoas e violar direitos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Criadores de Conteúdo e Influenciadores",
    questions: [
      { objective: "O1", q: "Os criadores muitas vezes ganham dinheiro com:", options: ["Só prémios da lotaria", "Parcerias com marcas, links de afiliado, produtos e programas das plataformas", "Só apoios do governo", "Nada"], answer: 1, why: "Estas são fontes de rendimento comuns dos criadores." },
      { objective: "O1", q: "A frase do nicho diz:", options: ["O seu número de seguidores", "A marca da sua câmara", "A sua palavra-passe", "Para quem faz conteúdo e o que essas pessoas ganham"], answer: 3, why: "Define o seu público e o valor que lhe dá." },
      { objective: "O1", q: "Porque ter pilares de conteúdo?", options: ["Escondem os anúncios", "São obrigatórios por lei", "Substituem os guiões", "Tornam o planeamento fácil e dizem ao público o que esperar"], answer: 3, why: "Os pilares dão estrutura." },
      { objective: "O2", q: "O gancho é:", options: ["A última imagem", "A frase de abertura que faz as pessoas ficarem", "O logótipo de um patrocinador", "O tamanho da miniatura"], answer: 1, why: "Os primeiros segundos decidem se as pessoas ficam." },
      { objective: "O2", q: "Depois de a IA escrever o rascunho de um guião, você deve:", options: ["Copiá-lo para outro criador", "Publicá-lo sem ler", "Lê-lo em voz alta e editá-lo para soar como você", "Acrescentar dados inventados"], answer: 2, why: "A sua voz mantém o seu público." },
      { objective: "O2", q: "Em temas de saúde ou dinheiro, os dados da IA devem ser:", options: ["Confirmados antes de partilhar", "Totalmente confiáveis", "Exagerados", "Escondidos"], answer: 0, why: "A IA pode inventar dados e estudos." },
      { objective: "O3", q: "Reaproveitar quer dizer:", options: ["Comprar seguidores", "Apagar vídeos antigos", "Transformar uma peça de conteúdo em várias", "Voltar a publicar o vídeo de outra pessoa"], answer: 2, why: "Um vídeo pode virar muitas publicações." },
      { objective: "O3", q: "Antes de publicar legendas da IA, verifique:", options: ["Nomes, números e calão", "Nada", "Só o tipo de letra", "Só os emojis"], answer: 0, why: "As legendas automáticas erram muitas vezes nisso." },
      { objective: "O3", q: "Um clipe curto tem de:", options: ["Chocar a qualquer custo", "Fazer sentido sozinho e não torcer o que foi dito", "Tirar todo o contexto", "Mudar as palavras de um convidado"], answer: 1, why: "Ser correto mantém a confiança." },
      { objective: "O4", q: "No YouTube, a divulgação de IA faz-se:", options: ["De forma nenhuma", "Só nos comentários", "Por email para o YouTube", "Com a opção de uso de IA quando carrega o vídeo"], answer: 3, why: "O YouTube Studio tem uma opção de uso de IA ao carregar." },
      { objective: "O4", q: "O que NÃO precisa de divulgação no YouTube?", options: ["Um filtro de beleza", "Uma notícia falsa realista", "Uma pessoa real a quem fazem dizer coisas falsas", "Uma cena realista que nunca aconteceu"], answer: 0, why: "Pequenas edições de aparência estão isentas." },
      { objective: "O4", q: "Falhar muitas vezes a divulgação no YouTube pode levar a:", options: ["Nada", "Mais visualizações", "Um prémio", "Rótulos, remoção ou perda do acesso ao programa de parceiros"], answer: 3, why: "A página de ajuda do YouTube lista estas consequências." },
      { objective: "O4", q: "Quando não tem a certeza se deve rotular conteúdo de IA, você deve:", options: ["Apagar a sua conta", "Escondê-lo", "Rotulá-lo", "Pedir às pessoas para adivinhar"], answer: 2, why: "A honestidade protege a confiança." },
      { objective: "O5", q: "Uma ligação material é:", options: ["O seu cabo de internet", "Uma relação, como pagamento ou produtos grátis, que as pessoas podem não esperar", "O comentário de um amigo", "O seu programa de edição"], answer: 1, why: "É isso que tem de ser divulgado." },
      { objective: "O5", q: "Que divulgação é clara?", options: ["\"#partner\" depois de \"mais\"", "\"#sp\" no fim", "Uma nota nos comentários", "\"#ad\" no início da legenda"], answer: 3, why: "A FTC diz que \"#ad\" no início provavelmente funciona." },
      { objective: "O5", q: "Durante uma transmissão ao vivo com um patrocinador, você deve:", options: ["Nunca falar disso", "Dizer uma vez antes de começar", "Repetir a divulgação durante a transmissão", "Pô-la numa publicação antiga"], answer: 2, why: "As pessoas entram nas transmissões ao vivo em momentos diferentes." },
      { objective: "O5", q: "A ferramenta de parceria paga da plataforma basta sempre sozinha?", options: ["Nem sempre; acrescente também a sua própria divulgação", "Sim, sempre", "Não é permitida", "Só para criadores grandes"], answer: 0, why: "As orientações da FTC dizem que as ferramentas das plataformas não são uma garantia." },
      { objective: "O6", q: "Segundo o Copyright Office, o material feito só pela IA:", options: ["Pertence à plataforma", "Não é protegido por direitos de autor", "Pertence-lhe automaticamente", "É propriedade pública da marca"], answer: 1, why: "Os direitos de autor protegem a criação humana." },
      { objective: "O6", q: "Num contrato com uma marca, deve verificar:", options: ["Só o logótipo", "Quem fica dono do conteúdo, durante quanto tempo, e o uso da sua imagem com IA", "Nada", "Só o estilo dos emojis"], answer: 1, why: "Estas condições afetam os seus direitos." },
      { objective: "O6", q: "Quem deve rever um contrato que entrega direitos sobre o seu rosto ou a sua voz?", options: ["Um advogado", "Só a IA", "Os seus seguidores", "Ninguém"], answer: 0, why: "Um advogado pode proteger os seus direitos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      5,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Nicho, pilares e plano",
        objective: "O1",
        notYet: "O nicho é vago, ou o plano tem publicações que não cabem em nenhum pilar.",
        meets: "Uma frase de nicho clara, três pilares e um plano de 7 dias em que cada publicação cabe num pilar.",
        exceeds: "O plano também mistura formatos e diz o que o público ganha com cada publicação."
      },
      {
        name: "Guião com a sua voz",
        objective: "O2",
        notYet: "O guião não tem gancho, não soa como você, ou tem dados não verificados.",
        meets: "Um guião curto com um gancho forte que soa como você, com os dados verificados.",
        exceeds: "Experimentou mais de um gancho e sabe dizer porque escolheu este."
      },
      {
        name: "Peças reaproveitadas",
        objective: "O3",
        notYet: "Menos de três peças, ou legendas com erros.",
        meets: "Pelo menos três peças curtas com legendas corretas, e cada uma faz sentido sozinha.",
        exceeds: "Cada peça está adaptada à plataforma onde vai ser publicada."
      },
      {
        name: "Lista de verificação de rótulos de IA",
        objective: "O4",
        notYet: "Não há lista, ou há conteúdo de IA realista sem rótulo.",
        meets: "Uma lista que diz quando rotular conteúdo de IA nas suas plataformas, incluindo na dúvida.",
        exceeds: "Também diz onde encontrar a regra de cada plataforma, para poder verificar se mudou."
      },
      {
        name: "Divulgação da publicação patrocinada",
        objective: "O5",
        notYet: "A divulgação falta, está escondida ou aparece tarde.",
        meets: "Uma divulgação clara no início, mais uma divulgação falada para o vídeo, e afirmações honestas.",
        exceeds: "Também planeia repetir a divulgação nas transmissões ao vivo ou nos vídeos longos."
      },
      {
        name: "Regras sobre direitos",
        objective: "O6",
        notYet: "Menos de três regras, ou uma regra que permite copiar o trabalho ou a imagem dos outros.",
        meets: "Três regras claras sobre usar o trabalho dos outros e proteger o seu.",
        exceeds: "As regras também dizem o que verificar num contrato com uma marca antes de assinar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que publicam segundo o seu plano de 7 dias durante pelo menos uma semana completa (inquérito de seguimento)",
      "Alunos que conseguem uma parceria com uma marca ou rendimento de afiliado em 90 dias, com a divulgação correta",
      "Alunos que começam outro curso de negócios da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet e a câmara de um telefone",
      "Um assistente de IA gratuito (como o ChatGPT, o Microsoft Copilot ou o Google Gemini) e um editor de vídeo gratuito com legendas automáticas",
      "Um vídeo ou uma publicação longa sua para reaproveitar",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada aluno para trazer exemplos das suas próprias legendas ou um clipe gravado, para que os rascunhos da IA possam imitar a sua voz.",
      "Abram juntos a página de ajuda sobre rótulos de IA de cada plataforma, porque as regras mudam; não confiem em resumos feitos pela IA.",
      "Nas tarefas práticas, use só conteúdo que o aluno fez ou que tem autorização para usar.",
      "Lembre aos alunos que um advogado deve rever os contratos que entregam direitos sobre o seu rosto ou a sua voz.",
      "Avalie o kit de conteúdo com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
