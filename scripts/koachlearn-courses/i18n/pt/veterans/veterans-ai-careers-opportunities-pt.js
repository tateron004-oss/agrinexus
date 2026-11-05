"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-careers-opportunities.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US agency, program and tool names are kept as written, with a short explanation.

module.exports = {
  id: "veterans-ai-careers-opportunities-pt",
  lang: "pt",
  translationOf: "veterans-ai-careers-opportunities",
  category: "Veterans (military)",
  name: "Carreiras do Futuro e Oportunidades com IA",
  skills: "Ligar funções militares a carreiras civis, Reconhecer carreiras ligadas à IA que estão a crescer, Comparar carreiras com dados oficiais, Encontrar formação e apoios, Fazer um plano de carreira de 90 dias",
  outcome: "fazer uma lista curta de três carreiras civis que combinam com a sua experiência militar, comparar o salário, o crescimento e a formação delas com dados oficiais e escrever um plano de 90 dias para começar na melhor.",
  about: [
    "Este curso é para veteranos e militares em transição que estão a escolher o que fazer a seguir. Muitas carreiras estão a crescer por causa da IA, e muitas precisam exatamente do que você aprendeu no serviço: disciplina, habilidade técnica, liderança e trabalho sob pressão.",
    "Você vai ligar a sua função militar a carreiras civis com as ferramentas oficiais do Departamento do Trabalho dos EUA (Department of Labor), usar um assistente de IA para as explorar e comparar, verificar cada número com dados oficiais e encontrar formação que os seus apoios talvez possam pagar.",
    "Cada lição dura cerca de cinco minutos: leia, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Escreva um plano de carreira de uma página: três carreiras civis que combinam com a sua função militar (tiradas do O*NET Military Crosswalk ou do CareerOneStop), cada uma com o salário mediano e as perspetivas de emprego do Occupational Outlook Handbook e a lacuna de habilidades que precisa de fechar; depois escolha uma carreira e escreva três passos com data para os próximos 90 dias, incluindo uma opção de formação ou de apoio.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição a decidir que carreira civil seguir. Muitos têm experiência técnica, de logística ou de liderança, mas não sabem que carreiras estão a crescer nem como o seu serviço se encaixa nelas.",
    startingPoint: "Sabem usar um smartphone ou um computador e pesquisar na internet. Talvez já tenham experimentado um assistente de IA. Ainda não compararam carreiras com dados oficiais nem escreveram um plano com datas.",
    gap: "Escolher uma carreira por palpite ou só com respostas da IA pode fazer perder meses e apoios. Os alunos precisam de ligar a sua função militar a carreiras civis com ferramentas oficiais, comparar salário, perspetivas e formação com dados oficiais e comprometer-se com um plano curto e com datas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; não se espera formação técnica",
      "Aparelhos: um smartphone ou computador com internet, às vezes um computador partilhado da base ou da biblioteca",
      "Tempo: lições de cerca de 5 minutos, que cabem entre as consultas de transição e o trabalho",
      "Salários, condições de acesso e regras dos programas mudam, por isso os alunos verificam em bls.gov/ooh, va.gov e dol.gov em vez de confiar nos números da IA",
      "Privacidade: nenhum número da Segurança Social, de processo da VA ou de serviço em nenhum pedido à IA"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e ao Futuro do Trabalho\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a lista das áreas que estão a crescer com a IA", action: "identificar que áreas em crescimento combinam com a sua experiência militar", standard: "nomeando pelo menos duas, com uma razão tirada do seu serviço" },
    { id: "O2", condition: "Com o seu MOS, rating ou AFSC (o código da sua função militar)", action: "usar o O*NET Military Crosswalk e o CareerOneStop para fazer a lista dos trabalhos civis que combinam com a sua função militar", standard: "com pelo menos cinco trabalhos que combinam" },
    { id: "O3", condition: "Com uma carreira da sua lista", action: "usar um assistente de IA para descrever o trabalho do dia a dia, as habilidades e o caminho de entrada dessa carreira, e marcar cada dado que precisa de ser verificado", standard: "marcando cada número, certificação e exigência" },
    { id: "O4", condition: "Com três carreiras", action: "comparar o salário mediano, as perspetivas de emprego e a escolaridade de entrada delas usando o Occupational Outlook Handbook", standard: "com cada número tirado de bls.gov/ooh, e não da IA" },
    { id: "O5", condition: "Para a carreira que escolher", action: "encontrar uma opção de formação e um programa oficial que talvez ajude a pagá-la", standard: "com uma condição de acesso copiada da página oficial do programa" },
    { id: "O6", condition: "Usando a sua comparação e a formação que escolheu", action: "escrever um plano de carreira de 90 dias com três passos com data", standard: "com cada passo concreto, com data e incluindo uma opção de formação ou de apoio" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Onde estão as oportunidades",
      lessons: [
        {
          objectives: ["O1"],
          title: "Carreiras que estão a crescer com a IA",
          minutes: 5,
          goal: "Nomear quatro tipos de carreiras que crescem com a IA e dizer quais combinam com a sua experiência.",
          text: [
            "A IA não cria trabalho só para programadores. Está a mudar o trabalho em muitas áreas e aumenta a procura de pessoas que saibam pôr a funcionar, proteger, reparar e supervisionar os sistemas à volta dela.",
            "Áreas onde os veteranos costumam encaixar: cibersegurança (proteger redes e dados), dados e apoio informático (manter os sistemas e os dados a funcionar), logística e cadeia de abastecimento (planear, prever, transportar mercadorias), manutenção e trabalho de técnico especializado (equipamentos, energia, aviação, eletrónica) e gestão de projetos e de operações (liderar pessoas e planos).",
            "Muitos destes trabalhos ainda precisam de mãos, de bom julgamento e de confiança. Um especialista em logística que sabe ler uma previsão feita pela IA e depois decidir o que encomendar vale mais do que um que não sabe."
          ],
          words: [["Cibersegurança", "proteger computadores, redes e dados contra ataques."], ["Cadeia de abastecimento", "todos os passos que levam as mercadorias de quem as faz até quem as usa."]],
          slides: [
            { title: "A IA cria procura além dos programadores", bullets: ["Pessoas que põem a funcionar, protegem, reparam e supervisionam sistemas", "Pessoas que usam a IA e continuam a decidir"] },
            { title: "Áreas onde os veteranos encaixam", bullets: ["Cibersegurança e apoio informático", "Logística e cadeia de abastecimento", "Manutenção e técnicos especializados", "Gestão de projetos e de operações"] },
            { title: "A sua vantagem", bullets: ["Disciplina e habilidade técnica", "Liderança sob pressão", "Julgamento: ler os dados e depois decidir"] }
          ],
          tryIt: "Escreva as cinco áreas desta lição. Ao lado de cada uma, escreva uma coisa que fez no serviço que combina com ela, ou \"ainda nada\".",
          youCanNow: "nomear carreiras que crescem com a IA e dizer quais combinam com a sua experiência militar.",
          quickCheck: [
            { objective: "O1", q: "Porque é que a IA está a aumentar a procura de pessoas em algumas áreas?", options: ["A IA funciona sozinha e não precisa de ninguém", "Nessas áreas agora só trabalham robôs", "Alguém tem de pôr a funcionar, proteger, reparar e supervisionar os sistemas de IA", "A IA substituiu todos os trabalhos técnicos"], answer: 2, why: "À medida que a IA se espalha, são precisas pessoas para pôr a funcionar, proteger, reparar e supervisionar os sistemas." },
            { objective: "O1", q: "No serviço, você geria equipamento de rádio e de rede. Que área em crescimento escreve ao lado?", options: ["Cibersegurança ou apoio informático", "Nenhuma, porque as habilidades de rádio não servem noutro lado", "Só agricultura", "Só trabalhos que não pedem experiência"], answer: 0, why: "A experiência com redes e equipamentos combina com áreas em crescimento como o apoio informático e a cibersegurança." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ligar o seu MOS, rating ou AFSC a trabalhos civis",
          minutes: 5,
          goal: "Usar ferramentas oficiais de correspondência para fazer a lista dos trabalhos civis que combinam com a sua função militar.",
          text: [
            "Não comece com um palpite. Comece com a correspondência oficial. O O*NET OnLine, do Departamento do Trabalho dos EUA, tem uma pesquisa chamada Military Crosswalk: escolha o seu ramo, escreva o seu código ou título (por exemplo um MOS do Exército ou dos Fuzileiros, um rating da Marinha ou da Guarda Costeira, um AFSC da Força Aérea ou um SFSC da Força Espacial) e veja as profissões civis que combinam.",
            "A página Find a Job (Encontrar trabalho) do Departamento do Trabalho para veteranos também tem um link para o Veterans Job Matcher do CareerOneStop, que liga funções militares a carreiras civis. Use os dois e fique com os trabalhos que aparecem mais de uma vez.",
            "Depois use um assistente de IA para perceber a lista: \"Explique estes três trabalhos com palavras simples, como é um dia normal e que habilidades minhas servem. Fui especialista em logística na Marinha durante 8 anos.\""
          ],
          steps: ["Abra a pesquisa O*NET Military Crosswalk.", "Escolha o seu ramo e escreva o seu código ou título.", "Anote os trabalhos civis que combinam.", "Repita no Veterans Job Matcher do CareerOneStop.", "Peça a um assistente de IA para explicar os trabalhos que aparecem nas duas listas."],
          words: [["Crosswalk (correspondência)", "uma ferramenta que liga uma função militar a trabalhos civis."], ["Profissão", "um tipo de trabalho, como técnico de logística ou administrador de redes."]],
          slides: [
            { title: "Comece com a correspondência oficial", bullets: ["Pesquisa O*NET Military Crosswalk", "Escolha o ramo, escreva o código ou título", "Veja as profissões civis que combinam"] },
            { title: "Confirme noutra fonte", bullets: ["Veterans Job Matcher do CareerOneStop", "Fique com os trabalhos que aparecem nas duas listas"] },
            { title: "Depois peça à IA para explicar", bullets: ["O que é o trabalho, com palavras simples", "Como é um dia normal", "Que habilidades suas servem"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Procure a sua função militar no O*NET Military Crosswalk. Escolha cinco trabalhos civis que combinam e depois peça a um assistente de IA para explicar cada um em duas frases simples.",
          youCanNow: "usar ferramentas oficiais de correspondência e um assistente de IA para fazer a lista dos trabalhos civis que combinam com o seu serviço e percebê-los.",
          quickCheck: [
            { objective: "O2", q: "O que lhe dá o O*NET Military Crosswalk?", options: ["A sua taxa de incapacidade da VA", "Trabalhos civis que combinam com o código ou título da sua função militar", "Uma lista de anúncios de emprego perto de você", "O saldo do seu GI Bill"], answer: 1, why: "O crosswalk liga códigos e títulos de funções militares a profissões civis." },
            { objective: "O2", q: "Encontrou cinco trabalhos que combinam, mas alguns nomes não são claros. O que faz?", options: ["Deita fora todos os trabalhos com nome pouco claro", "Escolhe o que tem o nome mais comprido", "Adivinha o que é cada trabalho", "Pede a um assistente de IA para explicar cada um em duas frases simples"], answer: 3, why: "A IA é boa a explicar um trabalho com palavras simples depois de as ferramentas oficiais lhe darem a lista." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Explorar uma carreira com um assistente de IA",
          minutes: 5,
          goal: "Usar a IA para descrever o trabalho do dia a dia, as habilidades e o caminho de entrada de uma carreira, e marcar o que precisa de ser verificado.",
          text: [
            "Um assistente de IA é um bom parceiro de pesquisa para um primeiro olhar. Peça-lhe para descrever um dia no trabalho, as principais habilidades, as ferramentas habituais, os nomes comuns dos cargos de entrada e as perguntas que deve fazer a alguém que faz esse trabalho.",
            "Use um pedido claro. Exemplo: \"Sou veterano da Força Aérea com 6 anos em manutenção de aviões. Explique o trabalho de técnico de turbinas eólicas: um dia normal, as 5 principais habilidades, que habilidades minhas servem e o caminho de entrada habitual. Use tópicos curtos.\"",
            "Marque com um ponto de interrogação cada dado que pode mudar, como o salário, os nomes das certificações e as exigências. Vai verificá-los no próximo capítulo."
          ],
          steps: ["Escolha um trabalho da sua lista.", "Peça um dia normal, as principais habilidades, as habilidades que servem e o caminho de entrada.", "Pergunte: \"Que perguntas devo fazer a alguém que faz este trabalho?\"", "Ponha um ponto de interrogação ao lado do salário, das certificações e das exigências."],
          words: [["Caminho de entrada", "a forma habitual de as pessoas entrarem num trabalho: formação, certificação, aprendizagem paga ou curso superior."], ["Habilidade transferível", "uma habilidade de um trabalho que é útil noutro."]],
          slides: [
            { title: "Peça à IA um primeiro olhar", bullets: ["Um dia normal", "Principais habilidades e ferramentas", "Que habilidades suas servem", "O caminho de entrada habitual"] },
            { title: "Exemplo de pedido", bullets: ["Manutenção de aviões na Força Aérea, 6 anos", "Explique o trabalho de técnico de turbinas eólicas", "Dia, 5 habilidades, o que serve, caminho de entrada"] },
            { title: "Marque o que pode mudar", bullets: ["Salário", "Nomes e regras das certificações", "Ponha um ? ao lado para verificar depois"] }
          ],
          tryIt: "Peça a um assistente de IA para descrever uma carreira da sua lista usando o exemplo de pedido. Ponha um ponto de interrogação ao lado de cada número, certificação ou exigência na resposta.",
          youCanNow: "usar um assistente de IA para explorar uma carreira e marcar os dados que tem de verificar.",
          quickCheck: [
            { objective: "O3", q: "O que é um caminho de entrada?", options: ["A forma habitual de as pessoas entrarem num trabalho", "A porta da frente de uma empresa", "O salário de quem está no primeiro ano", "O último passo antes da reforma"], answer: 0, why: "O caminho de entrada é a via habitual para um trabalho, como uma formação, uma certificação ou uma aprendizagem paga." },
            { objective: "O3", q: "A IA diz que uma carreira \"exige a certificação Security+\". O que faz?", options: ["Inscreve-se logo no exame", "Ignora a resposta toda", "Põe um ponto de interrogação ao lado e verifica numa fonte oficial", "Copia para o seu plano como se fosse certo"], answer: 2, why: "Certificações e exigências são dados para verificar, não para confiar só porque a IA disse." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Onde estão as oportunidades",
        questions: [
          { objective: "O1", q: "Em qual destas áreas a IA está a aumentar a procura de pessoas?", options: ["Cibersegurança", "Só videojogos", "Só programação", "Em nenhuma; a IA acaba com todos os trabalhos"], answer: 0, why: "A IA aumenta a procura de pessoas que protegem, põem a funcionar e supervisionam sistemas, como na cibersegurança." },
          { objective: "O2", q: "Qual é o melhor lugar para COMEÇAR a ligar o seu MOS a trabalhos civis?", options: ["O palpite de um amigo", "O O*NET Military Crosswalk", "Um anúncio de emprego qualquer", "Uma publicação nas redes sociais"], answer: 1, why: "O crosswalk oficial liga o seu código militar a profissões civis." },
          { objective: "O2", q: "O O*NET e o CareerOneStop dão-lhe listas diferentes. O que é inteligente fazer?", options: ["Ignorar as duas", "Escolher a lista mais curta", "Ficar com os trabalhos que aparecem nas duas", "Pedir à IA para escolher um por você"], answer: 2, why: "Os trabalhos que aparecem nas duas listas oficiais combinam bem." },
          { objective: "O3", q: "Uma resposta da IA diz que um trabalho paga $95,000. O que faz?", options: ["Para de procurar; já encontrou", "Publica na internet", "Confia porque é um número exato", "Põe um ponto de interrogação ao lado e verifica com dados oficiais"], answer: 3, why: "O salário pode estar errado ou desatualizado, por isso tem de ser verificado." },
          { objective: "O3", q: "O que é uma habilidade transferível?", options: ["Uma habilidade de um trabalho que é útil noutro", "Uma habilidade que pode vender", "Uma habilidade só para oficiais", "Uma habilidade que a IA faz por você"], answer: 0, why: "As habilidades transferíveis passam de um trabalho para outro, como liderar uma equipa ou controlar um inventário." }
        ]
      }
    },
    {
      name: "Capítulo 2: Escolher e planear o seu caminho",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comparar carreiras com dados oficiais",
          minutes: 5,
          goal: "Comparar o salário, as perspetivas e a escolaridade de entrada de três carreiras usando o Occupational Outlook Handbook.",
          text: [
            "O Occupational Outlook Handbook (Manual de Perspetivas Profissionais) do Bureau of Labor Statistics, o serviço de estatísticas do trabalho dos EUA (bls.gov/ooh), é gratuito e oficial. Para cada profissão dá o salário mediano, a escolaridade normalmente pedida para entrar, a formação no próprio trabalho e as perspetivas de emprego: quanto se espera que o número de empregos cresça ou diminua.",
            "Faça uma tabela simples com as suas três carreiras nas linhas e estas colunas: salário mediano, escolaridade de entrada, formação, perspetivas de emprego e a sua lacuna de habilidades. Um assistente de IA pode fazer a tabela vazia por você; os números quem os preenche é você, a partir do Handbook.",
            "O salário mediano é o ponto do meio: metade dos trabalhadores ganha mais e metade ganha menos. O salário também muda de um lugar para outro, por isso use-o para comparar carreiras, não como uma promessa."
          ],
          steps: ["Vá a bls.gov/ooh e procure cada carreira.", "Anote o salário mediano, a escolaridade de entrada, a formação e as perspetivas de emprego.", "Escreva a sua lacuna de habilidades: o que ainda lhe falta.", "Ponha tudo numa só tabela."],
          words: [["Salário mediano", "o salário do meio: metade dos trabalhadores ganha mais e metade ganha menos."], ["Perspetivas de emprego", "quanto se espera que o número de empregos cresça ou diminua."], ["Lacuna de habilidades", "as habilidades ou os diplomas e certificados que ainda lhe faltam para um trabalho."]],
          slides: [
            { title: "A fonte oficial", bullets: ["Occupational Outlook Handbook: bls.gov/ooh", "Gratuito, do Bureau of Labor Statistics"] },
            { title: "O que anotar", bullets: ["Salário mediano", "Escolaridade de entrada e formação", "Perspetivas de emprego", "A sua lacuna de habilidades"] },
            { title: "Leia bem", bullets: ["Mediano = ponto do meio", "O salário muda de um lugar para outro", "Use-o para comparar, não como promessa"] }
          ],
          sources: [{ name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Peça a um assistente de IA uma tabela de comparação vazia com as suas três carreiras e as colunas desta lição. Preencha você mesmo os números a partir de bls.gov/ooh.",
          youCanNow: "comparar carreiras usando dados oficiais de salário, escolaridade e perspetivas.",
          quickCheck: [
            { objective: "O4", q: "De onde vêm os números da sua tabela de comparação?", options: ["Da resposta do assistente de IA", "Do palpite de um amigo", "De um anúncio de emprego de uma empresa", "Do Occupational Outlook Handbook em bls.gov/ooh"], answer: 3, why: "A IA pode fazer a tabela vazia, mas os números de salário e de perspetivas vêm dos dados oficiais." },
            { objective: "O4", q: "Uma carreira paga mais mas cresce devagar; outra paga um pouco menos e cresce depressa. O que faz?", options: ["Escolhe sempre o salário mais alto", "Compara o salário, as perspetivas e a formação juntos, e vê se combinam com você", "Escolhe a que tem o nome mais curto", "Deixa a IA escolher por você"], answer: 1, why: "Comparar várias colunas juntas, e ver se combinam com você, dá uma escolha melhor do que um só número." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar formação e apoios que a paguem",
          minutes: 5,
          goal: "Encontrar uma opção de formação para a carreira que escolheu e um programa oficial que talvez ajude a pagá-la.",
          text: [
            "Vários programas oficiais podem ajudar. O GI Bill pode pagar muitas escolas e programas de formação; a ferramenta GI Bill Comparison Tool da VA (o Departamento dos Assuntos dos Veteranos dos EUA) ajuda a compará-los. O VET TEC 2.0 paga certas formações de alta tecnologia sem diploma universitário (programação, dados, ciência da informação) a veteranos e militares que cumprem as condições, com um número limitado de vagas por ano.",
            "Ainda está no serviço ativo? O DoD SkillBridge, do Departamento da Defesa, deixa os militares fazer formação com uma empresa parceira durante os últimos 180 dias de serviço, com autorização do comando. As aprendizagens pagas deixam você ganhar enquanto aprende. Os American Job Centers do Departamento do Trabalho (encontre um no CareerOneStop) dão prioridade aos veteranos na formação profissional.",
            "As condições de acesso mudam. Peça à IA uma lista de opções e depois confirme cada uma em va.gov, dol.gov ou com um conselheiro antes de contar com ela. O programa Personalized Career Planning and Guidance da VA dá aconselhamento gratuito aos veteranos que cumprem as condições."
          ],
          steps: ["Diga que formação a sua carreira pede (certificação, curso, aprendizagem paga).", "Veja as opções do GI Bill com a GI Bill Comparison Tool.", "Se for uma carreira de tecnologia, leia a página do VET TEC 2.0.", "Ainda no serviço? Pergunte ao seu gabinete de transição sobre o SkillBridge.", "Confirme as condições de acesso em va.gov ou com um conselheiro."],
          words: [["GI Bill", "apoios da VA para estudos de veteranos e militares."], ["SkillBridge", "um programa do Departamento da Defesa para fazer formação com uma empresa parceira nos últimos 180 dias de serviço."], ["Aprendizagem paga (apprenticeship)", "um trabalho pago com formação organizada, para ganhar enquanto aprende."]],
          slides: [
            { title: "Programas que podem ajudar", bullets: ["GI Bill e a GI Bill Comparison Tool", "VET TEC 2.0 para formação em alta tecnologia", "Aprendizagens pagas: ganhe enquanto aprende"] },
            { title: "Ainda no serviço?", bullets: ["DoD SkillBridge: últimos 180 dias de serviço", "Precisa de autorização do comando"] },
            { title: "Confirme antes de contar com isso", bullets: ["As regras e as vagas mudam", "Verifique em va.gov e dol.gov", "O aconselhamento de carreira gratuito da VA pode ajudar"] }
          ],
          sources: [
            { name: "VA: About GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor VETS: Find a job (SkillBridge, American Job Centers)", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Para a sua carreira preferida, escreva uma opção de formação e um programa que talvez ajude a pagá-la. Abra a página oficial desse programa e anote uma condição de acesso.",
          youCanNow: "encontrar formação para uma carreira e um programa oficial que talvez ajude a pagá-la, e confirmar as regras.",
          quickCheck: [
            { objective: "O5", q: "O que é uma aprendizagem paga (apprenticeship)?", options: ["Uma escola que só ensina pela internet", "Um empréstimo que tem de devolver", "Um trabalho pago em que você aprende e ganha ao mesmo tempo", "Um exame que faz uma só vez"], answer: 2, why: "Uma aprendizagem paga deixa você ganhar enquanto aprende." },
            { objective: "O5", q: "Encontrou um programa que talvez pague a sua formação. O que verifica antes de contar com ele?", options: ["Uma condição de acesso na página oficial do programa", "Se um amigo o usou", "Se a IA disse que você tem direito", "Nada; todos os veteranos têm direito"], answer: 0, why: "As condições de acesso estão na página oficial; a IA e os amigos podem estar errados." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever o seu plano de carreira de 90 dias",
          minutes: 5,
          goal: "Escrever um plano de 90 dias com três passos com data rumo a uma carreira escolhida.",
          text: [
            "Você sabe planear uma missão de trás para a frente, a partir do objetivo. Faça o mesmo aqui. Escolha uma carreira da sua tabela e planeie de trás para a frente: o que tem de estar feito daqui a 90 dias, 60 dias e 30 dias?",
            "Bons passos são concretos e têm data: \"Até 15 de novembro: falar com uma pessoa que trabalha como técnico de logística.\" \"Até 1 de dezembro: candidatar-me ao programa de formação.\" \"Até 15 de janeiro: candidatar-me a cinco empregos.\" Passos vagos como \"ver isso\" não se fazem.",
            "Um assistente de IA pode transformar as suas notas num plano arrumado e sugerir passos que esqueceu. As datas quem decide é você, e o plano é seu. Partilhe-o com um mentor, um conselheiro ou alguém do TAP (o programa de transição dos militares) ou de um American Job Center que possa cobrar-lhe o cumprimento."
          ],
          steps: ["Escolha uma carreira da sua tabela de comparação.", "Escreva o que tem de estar feito daqui a 90 dias.", "Planeie de trás para a frente: os passos dos 60 e dos 30 dias.", "Torne cada passo concreto e com data.", "Peça à IA para o arrumar e sugerir o que falta.", "Partilhe-o com alguém que vai acompanhar você."],
          words: [["Planear de trás para a frente", "começar pelo objetivo e voltar passo a passo até hoje."], ["Marco", "um ponto de controlo que mostra que você está no bom caminho."]],
          slides: [
            { title: "Planeie a partir do objetivo", bullets: ["90 dias: o objetivo", "60 e 30 dias: os marcos", "Hoje: o primeiro passo"] },
            { title: "Concreto e com data", bullets: ["\"Até 15 nov: falar com um técnico de logística\"", "\"Até 1 dez: candidatar-me à formação\"", "Não: \"ver isso\""] },
            { title: "O plano é seu", bullets: ["A IA arruma e sugere", "Você marca as datas", "Partilhe-o com um mentor ou conselheiro"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de carreira de uma página com três carreiras, o salário e as perspetivas delas tirados de bls.gov/ooh, as suas lacunas de habilidades, a carreira que escolheu e três passos com data para os próximos 90 dias, incluindo uma opção de formação ou de apoio.",
          youCanNow: "transformar a sua pesquisa de carreira num plano de 90 dias com datas, que pode pôr em prática.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer planear de trás para a frente?", options: ["Fazer os passos numa ordem qualquer", "Começar pelo objetivo e voltar até hoje", "Planear só para o passado", "Deixar outra pessoa marcar as suas datas"], answer: 1, why: "Planear de trás para a frente começa pelo objetivo e volta até aos passos que dá agora." },
            { objective: "O6", q: "Qual é o melhor passo para o seu plano de 90 dias?", options: ["\"Pensar em informática um dia\"", "\"Ver umas coisas\"", "\"Arranjar um bom emprego\"", "\"Até 15 jan: acabar o módulo 1 do curso gratuito de apoio informático\""], answer: 3, why: "Um bom passo é concreto e tem uma data marcada por você." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Escolher e planear o seu caminho",
        questions: [
          { objective: "O4", q: "Que fonte oficial dá o salário mediano e as perspetivas de emprego das profissões civis?", options: ["Um anúncio de emprego", "O Occupational Outlook Handbook", "A primeira resposta da sua IA", "Um título de notícia"], answer: 1, why: "O Occupational Outlook Handbook do Bureau of Labor Statistics dá o salário e as perspetivas oficiais." },
          { objective: "O4", q: "O que quer dizer salário mediano?", options: ["O salário mais alto", "O salário inicial", "O ponto do meio: metade ganha mais e metade ganha menos", "O salário depois dos impostos"], answer: 2, why: "O mediano é o meio dos salários de todos os trabalhadores." },
          { objective: "O5", q: "Ainda está no serviço ativo e faltam 5 meses. Que programa pode deixar você fazer formação numa empresa?", options: ["O Occupational Outlook Handbook", "O Military Crosswalk", "O Google Gemini", "O DoD SkillBridge"], answer: 3, why: "O SkillBridge deixa os militares fazer formação com uma empresa parceira nos últimos 180 dias." },
          { objective: "O5", q: "Uma IA diz que você tem direito a um apoio para formação. O que deve fazer?", options: ["Confirmar em va.gov ou com um conselheiro", "Inscrever-se logo", "Ignorar todos os apoios", "Pagar a um site para verificar"], answer: 0, why: "As condições de acesso mudam; confirme na fonte oficial." },
          { objective: "O6", q: "Qual é o melhor passo para um plano de 90 dias?", options: ["\"Ver empregos\"", "\"Pensar em formação\"", "\"Até 1 dez: candidatar-me ao programa de formação em apoio informático\"", "\"Um dia tirar uma certificação\""], answer: 2, why: "Bons passos são concretos e têm data." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Carreiras do Futuro e Oportunidades com IA",
    questions: [
      { objective: "O1", q: "A IA está a aumentar a procura de pessoas que sabem:", options: ["Pôr a funcionar, proteger, reparar e supervisionar sistemas", "Evitar computadores", "Só escrever código", "Não fazer nada"], answer: 0, why: "Muitos trabalhos ligados à IA precisam de pessoas à volta dos sistemas, não só de programadores." },
      { objective: "O1", q: "Que área protege redes e dados contra ataques?", options: ["Cadeia de abastecimento", "Cibersegurança", "Comércio", "Restauração"], answer: 1, why: "A cibersegurança protege computadores, redes e dados." },
      { objective: "O1", q: "Um especialista em logística que sabe ler uma previsão da IA e depois decidir:", options: ["Já não é preciso", "É substituído pela previsão", "Vale mais", "Só é útil nas forças armadas"], answer: 2, why: "Bom julgamento por cima do que a IA produz é o que os empregadores querem." },
      { objective: "O2", q: "O O*NET Military Crosswalk deixa pesquisar por:", options: ["O seu número da Segurança Social", "O seu banco", "A sua morada", "Ramo e código ou título da função militar"], answer: 3, why: "Você escolhe o seu ramo e escreve o seu MOS, rating, AFSC ou SFSC." },
      { objective: "O2", q: "O Veterans Job Matcher do CareerOneStop tem um link a partir de:", options: ["A página Find a Job do Departamento do Trabalho para veteranos", "Um anúncio que aparece no ecrã", "Um grupo nas redes sociais", "O boletim da sua antiga unidade"], answer: 0, why: "A página Find a Job do DOL VETS tem um link para ele." },
      { objective: "O2", q: "Quando duas listas oficiais não dizem o mesmo, uma boa escolha é:", options: ["Não usar nenhuma", "Ficar com os trabalhos que aparecem nas duas", "Escolher o primeiro trabalho por ordem alfabética", "Perguntar a um desconhecido"], answer: 1, why: "O que aparece nas duas mostra que combina bem." },
      { objective: "O3", q: "Um bom pedido à IA para explorar uma carreira pede:", options: ["A sua palavra-passe", "Só o salário", "Um dia normal, as principais habilidades, as habilidades transferíveis e o caminho de entrada", "Uma palavra"], answer: 2, why: "Esses detalhes ajudam a avaliar se a carreira combina com você." },
      { objective: "O3", q: "Que dados numa resposta da IA sobre uma carreira deve marcar para verificar?", options: ["Só o nome do trabalho", "A saudação", "Nenhum", "Salário, certificações e exigências"], answer: 3, why: "Esses dados mudam e a IA pode errá-los." },
      { objective: "O3", q: "Um \"caminho de entrada\" é:", options: ["A forma habitual de as pessoas entrarem num trabalho", "A entrada de um prédio", "O início de sessão num site", "Um posto militar"], answer: 0, why: "É a via de formação, certificação, aprendizagem paga ou curso superior para entrar num trabalho." },
      { objective: "O4", q: "Quem publica o Occupational Outlook Handbook?", options: ["Uma empresa de IA", "O Bureau of Labor Statistics", "Um site privado de empregos", "A VA"], answer: 1, why: "É um recurso do Bureau of Labor Statistics." },
      { objective: "O4", q: "As perspetivas de emprego dizem-lhe:", options: ["O seu salário exato", "Onde fica o escritório", "Quanto se espera que o número de empregos cresça ou diminua", "Quem o vai contratar"], answer: 2, why: "As perspetivas são a mudança prevista no número de empregos." },
      { objective: "O4", q: "Porque usar o salário mediano para comparar e não como promessa?", options: ["Está sempre alto demais", "É inventado", "Só conta os oficiais", "O salário muda conforme o lugar e a pessoa"], answer: 3, why: "O mediano é um ponto do meio; o seu salário depende do lugar e da experiência." },
      { objective: "O5", q: "Uma lacuna de habilidades é:", options: ["As habilidades ou os certificados que ainda lhe faltam para um trabalho", "Um buraco nas datas do seu currículo", "Uma pausa entre empregos", "Um posto militar"], answer: 0, why: "Mostra o que ainda tem de aprender ou de conseguir." },
      { objective: "O5", q: "Que ferramenta da VA ajuda a comparar escolas e programas para usar o GI Bill?", options: ["O O*NET Crosswalk", "A GI Bill Comparison Tool", "O SkillBridge", "O TAP"], answer: 1, why: "A GI Bill Comparison Tool da VA ajuda a comparar as opções." },
      { objective: "O5", q: "O VET TEC 2.0 paga:", options: ["Reparações em casa", "Empréstimos para carros", "Certas formações de alta tecnologia sem diploma universitário para veteranos que cumprem as condições", "Qualquer curso superior"], answer: 2, why: "O VET TEC 2.0 cobre certos programas de tecnologia sem diploma universitário." },
      { objective: "O5", q: "Uma aprendizagem paga deixa você:", options: ["Saltar toda a formação", "Não trabalhar", "Tirar um curso superior de um dia para o outro", "Ganhar enquanto aprende"], answer: 3, why: "Quem faz uma aprendizagem paga recebe enquanto aprende." },
      { objective: "O5", q: "Onde é que os veteranos têm prioridade na formação profissional?", options: ["Nos American Job Centers", "Nas redes sociais", "Num stand de automóveis", "Numa loja de videojogos"], answer: 0, why: "O Departamento do Trabalho dá prioridade aos veteranos nos American Job Centers." },
      { objective: "O6", q: "Planear de trás para a frente quer dizer:", options: ["Fazer as tarefas numa ordem qualquer", "Começar pelo objetivo e voltar até hoje", "Planear só para hoje", "Nunca marcar datas"], answer: 1, why: "Você planeia a partir do objetivo para trás, como no planeamento de uma missão." },
      { objective: "O6", q: "No seu plano de 90 dias, quem marca as datas?", options: ["A IA", "O empregador", "Você", "Ninguém"], answer: 2, why: "A IA pode arrumar e sugerir; o plano é seu." },
      { objective: "O6", q: "Porque partilhar o seu plano com um mentor ou conselheiro?", options: ["Para ele o fazer por você", "Para receber dinheiro", "Porque a lei obriga", "Para alguém acompanhar você e mantê-lo no caminho"], answer: 3, why: "Ter a quem prestar contas ajuda a acabar o que planeou." }
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
      11,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Carreiras que combinam",
        objective: "O2",
        notYet: "As carreiras foram adivinhadas ou vieram só de uma resposta da IA.",
        meets: "Três carreiras que combinam com a função militar, encontradas no O*NET Military Crosswalk ou no CareerOneStop.",
        exceeds: "O aluno sabe dizer que habilidade do serviço combina com cada carreira."
      },
      {
        name: "Dados oficiais",
        objective: "O4",
        notYet: "Falta o salário ou as perspetivas, ou foram copiados da IA.",
        meets: "Cada carreira tem o salário mediano e as perspetivas de emprego de bls.gov/ooh.",
        exceeds: "A escolaridade de entrada também está na lista, e o aluno explica que carreira ganha e porquê."
      },
      {
        name: "Lacunas de habilidades",
        objective: "O3",
        notYet: "Não há nenhuma lacuna de habilidades, ou é vaga.",
        meets: "Cada carreira mostra a habilidade ou o certificado que ainda falta.",
        exceeds: "Cada lacuna foi verificada numa fonte oficial ou de um empregador."
      },
      {
        name: "Formação ou apoio",
        objective: "O5",
        notYet: "Não há opção de formação nem de apoio, ou foi tirada só da IA.",
        meets: "Uma opção de formação e um programa que talvez ajude a pagar, com uma condição de acesso tirada da página oficial.",
        exceeds: "O aluno também diz a quem perguntar para confirmar as condições, como um conselheiro da VA."
      },
      {
        name: "Plano de 90 dias",
        objective: "O6",
        notYet: "Os passos são vagos ou não têm data.",
        meets: "Três passos concretos e com data rumo a uma carreira escolhida.",
        exceeds: "O plano diz o nome de um mentor ou conselheiro que vai acompanhar o progresso."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem pelo menos um passo do seu plano de 90 dias em 30 dias (inquérito de seguimento)",
      "Alunos que se inscrevem numa formação, numa aprendizagem paga ou no SkillBridge em 90 dias",
      "Alunos que começam outro curso da Koach Learn para veteranos em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os sites gratuitos O*NET Military Crosswalk, CareerOneStop, bls.gov/ooh e va.gov",
      "Papel, uma aplicação de notas ou uma folha de cálculo para a tabela de comparação e o plano de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Numa aula de transição ou num centro de veteranos: façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Peça aos alunos para preencherem eles próprios os números da tabela de comparação a partir de bls.gov/ooh; não aceite números da IA.",
      "Convide um conselheiro da VA, de um American Job Center ou do TAP para a última sessão, para rever os planos e as dúvidas sobre condições de acesso.",
      "Avalie o plano final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Lembre aos alunos que nunca ponham o número da Segurança Social, de processo da VA ou de serviço em nenhum pedido à IA."
    ]
  }
};
