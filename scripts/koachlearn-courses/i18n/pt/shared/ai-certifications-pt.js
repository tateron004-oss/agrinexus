"use strict";

// Koach Learn course (Portuguese translation of shared/ai-certifications.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Certification names, fees and formats as in the English (checked on the providers' official pages on 27 October 2026).

module.exports = {
  id: "ai-certifications-pt",
  lang: "pt",
  translationOf: "ai-certifications",
  category: "Re-Entry",
  name: "Certificações de IA: Qual Obter e Como se Preparar",
  skills: "Ligar uma certificação a um objetivo de trabalho, Ler uma página oficial de exame, Comparar custo e tempo, Encontrar formação gratuita e testes de prática, Fazer um plano de estudo, Estar pronto para o dia do exame",
  outcome: "escolher um certificado ou uma certificação de IA que sirva para um objetivo de trabalho real, ler a página oficial do exame para saber o custo, o formato e as competências avaliadas, fazer um plano de estudo com formação oficial gratuita e preparar-se para o dia do exame.",
  about: [
    "Os certificados e as certificações mostram aos empregadores que você tem uma competência. Isto pode ajudar muito se tem períodos sem trabalho no seu percurso, se não tem curso superior ou se tem registo criminal. Na IA, grandes empresas de tecnologia e organizações de formação já oferecem credenciais para principiantes.",
    "Este curso é para pessoas que voltam para casa depois da prisão, pessoas à procura de emprego em programas de emprego e formação e pessoas que querem mudar de profissão. Não ensina a matéria do exame. Ensina a escolher a credencial certa, a não gastar dinheiro à toa e a preparar-se de forma inteligente.",
    "Os nomes, os preços e os detalhes dos exames mudam muitas vezes, por isso vai aprender a verificar sempre a página oficial. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escolha uma credencial de IA que sirva para um anúncio de emprego real que lhe interessa. Na página oficial, anote o nome exato, a entidade que a oferece, o custo, a duração e o formato do exame, as competências avaliadas, as regras sobre o documento de identificação e por quanto tempo é válida. Depois faça um plano de estudo de quatro semanas com formação oficial gratuita e pelo menos um teste de prática, e marque uma sessão de prática ou uma data de exame.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e querem uma credencial reconhecida para mostrar novas competências aos empregadores. Muitas vezes procuram trabalho em escritório, atendimento ao cliente, administração, informática ou nuvem.",
    startingPoint: "Alguns já usaram um assistente de IA ou fizeram um curso curto pela internet; alguns ganharam certificados enquanto estavam presos. A maioria nunca escolheu, pagou nem fez um exame vigiado, e pode não ter um documento de identificação com fotografia válido.",
    gap: "Uma credencial pode ajudar a explicar um período sem trabalho e mostrar competências atuais, mas muitas pessoas escolhem a errada, pagam formação de que não precisavam, ficam presas nas regras do documento de identificação ou caem em burlas de venda de respostas de exame. Os alunos precisam de escolher uma credencial que corresponda a anúncios de emprego reais, tirar os dados da página oficial, estudar com formação gratuita e estar prontos no dia do exame.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; as credenciais técnicas são explicadas de forma simples",
      "Aparelhos: talvez só um telefone simples ou um computador da biblioteca com tempo limitado; os exames pela internet precisam de um computador adequado e de uma sala sossegada",
      "Dinheiro: as taxas dos exames variam; os alunos perguntam a programas de emprego, de reintegração ou de veteranos se há ajuda antes de pagar",
      "Os dados dos exames mudam; a página oficial do exame é a única fonte de confiança",
      "Identificação: muitas vezes é preciso um documento oficial com fotografia, válido, com o mesmo nome da inscrição"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e Confiança Digital\" ajuda quem ainda não conhece as ferramentas de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a descrição de uma credencial", action: "explicar se é um certificado de conclusão ou uma certificação com exame vigiado e o que mostra a um empregador", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com várias credenciais de IA para principiantes", action: "compará-las pela entidade que as oferece, pelo custo, pelo tempo e pelo nível", standard: "dizendo qual serve para um principiante e qual é mais técnica" },
    { id: "O3", condition: "Com cinco anúncios de emprego reais, o seu orçamento e o seu tempo", action: "escolher uma credencial e descobrir quem pode ajudar a pagá-la", standard: "com uma razão baseada nos anúncios de emprego" },
    { id: "O4", condition: "Usando a página oficial do exame da credencial", action: "escrever uma ficha de uma página com o nome do exame, o custo, o formato, as competências avaliadas, as regras de identificação e de repetição e por quanto tempo é válida", standard: "com todos os dados tirados da página oficial e a data em que verificou" },
    { id: "O5", condition: "Com a lista de competências avaliadas e formação oficial gratuita", action: "criar um plano de estudo de quatro semanas que usa a IA como explicador e inclui um teste de prática", standard: "com o tempo de estudo de acordo com o peso de cada tema no exame" },
    { id: "O6", condition: "Antes e depois do exame", action: "preparar-se para o dia do exame e acrescentar a credencial ao seu currículo", standard: "com o nome exato, a entidade e a data" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher a credencial certa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Certificados e certificações, e porque são importantes",
          minutes: 4,
          goal: "Distinguir um certificado de curso de uma certificação com exame vigiado e explicar o que cada um mostra a um empregador.",
          text: [
            "Um certificado de conclusão mostra que você terminou um curso. Uma certificação normalmente quer dizer que passou num exame vigiado que avalia as suas competências. Os empregadores costumam dar mais valor às certificações, mas um bom certificado também mostra esforço e novas competências.",
            "As credenciais de IA vão desde o nível de principiante (\"o que é a IA e como a uso no trabalho\") até ao nível técnico (\"criar soluções de IA na nuvem\"). As de principiante ajudam em trabalhos de escritório, atendimento ao cliente, vendas e administração. As técnicas ajudam em trabalhos de informática e de nuvem e muitas vezes exigem antes algum conhecimento de programação ou de nuvem.",
            "Uma credencial não garante um emprego. Funciona melhor com um currículo que mostra como usou a competência, mesmo num projeto pequeno. Junte-a a prática real."
          ],
          words: [["Certificado", "prova de que terminou um curso ou programa."], ["Certificação", "uma credencial que se ganha ao passar num exame que avalia as suas competências."], ["Exame vigiado", "um teste observado por uma pessoa ou por uma câmara para evitar batota (em inglês, \"proctored exam\")."], ["Credencial", "qualquer certificado, certificação ou licença que prova uma competência."]],
          slides: [
            { title: "Certificado e certificação", bullets: ["Certificado: você terminou um curso", "Certificação: você passou num exame vigiado"] },
            { title: "Principiante ou técnico", bullets: ["Principiante: usar a IA no trabalho", "Técnico: criar soluções de IA; pode exigir programação"] },
            { title: "Não garante um emprego", bullets: ["Junte-a a prática real", "Mostre como usou a competência"] }
          ],
          tryIt: "Escreva um trabalho que quer. Ao lado, escreva se lhe serve melhor uma credencial de IA para principiantes ou uma técnica, e porquê.",
          youCanNow: "distinguir um certificado de uma certificação e escolher o nível certo para um objetivo de trabalho.",
          quickCheck: [
            { objective: "O1", q: "O que mostra um certificado de conclusão?", options: ["Que passou num exame vigiado", "Que tem um emprego", "Que tem uma licença do Estado", "Que terminou um curso"], answer: 3, why: "Um certificado de conclusão mostra que terminou um curso." },
            { objective: "O1", q: "Um empregador pergunta o que prova a sua nova credencial de IA. Você passou num exame vigiado. O que responde?", options: ["Não prova nada", "Mostra que passei num exame vigiado que avaliou as minhas competências", "Quer dizer que tenho o emprego garantido", "Quer dizer que vi alguns vídeos"], answer: 1, why: "Uma certificação normalmente quer dizer que passou num exame vigiado que avalia competências." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Uma volta por credenciais de IA conhecidas para principiantes",
          minutes: 6,
          goal: "Comparar várias credenciais de IA para principiantes pela entidade, pelo custo, pelo tempo e pelo nível.",
          text: [
            "Estes dados foram verificados nas páginas oficiais em outubro de 2026; verifique sempre outra vez antes de pagar. O Google AI Essentials é um curso do Google na plataforma Coursera, ao seu ritmo, com menos de 5 horas e com certificado; nos EUA e no Canadá custa $49 por mês depois de 7 dias de teste grátis. Serve para quem quer usar ferramentas de IA no trabalho.",
            "O AWS Certified AI Practitioner é uma certificação de nível básico da Amazon Web Services (AWS): um exame de 90 minutos com 65 perguntas e uma taxa de $100. A certificação Generative AI Leader do Google Cloud não tem pré-requisitos: 90 minutos, 50-60 perguntas, $99, válida por 3 anos, feita pela internet ou num centro de exames.",
            "A Microsoft Certified: Azure AI Fundamentals usa agora o exame AI-901, atualizado em abril de 2026. O preço depende do seu país, a nota mínima para passar é 700, e agora espera algum conhecimento de Python e de Azure, por isso é mais técnica do que antes. A Microsoft oferece uma avaliação de prática gratuita depois de entrar na sua conta."
          ],
          words: [["Nível básico", "o primeiro nível de um percurso de certificações (em inglês, \"foundational\")."], ["Pré-requisito", "algo que precisa de ter ou de saber antes de começar."]],
          slides: [
            { title: "Google AI Essentials", bullets: ["Curso do Google na Coursera, menos de 5 horas", "EUA/Canadá: $49/mês depois de 7 dias de teste", "Certificado; usar a IA no trabalho"] },
            { title: "AWS Certified AI Practitioner", bullets: ["Certificação AWS de nível básico", "90 minutos, 65 perguntas, $100"] },
            { title: "Google Cloud Generative AI Leader", bullets: ["Sem pré-requisitos", "90 minutos, 50-60 perguntas, $99", "Válida por 3 anos"] },
            { title: "Azure AI Fundamentals (AI-901)", bullets: ["Atualizado em abril de 2026; o preço varia por país", "Nota mínima 700; espera algum Python", "Avaliação de prática gratuita depois de entrar na conta"] }
          ],
          sources: [{ name: "Grow with Google: Google AI Essentials", url: "https://grow.google/ai-essentials/" }, { name: "AWS Certified AI Practitioner", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" }, { name: "Google Cloud: Generative AI Leader", url: "https://cloud.google.com/learn/certification/generative-ai-leader" }, { name: "Microsoft Learn: Exam AI-901", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" }],
          tryIt: "Abra a página oficial de duas destas credenciais. Para cada uma, escreva o nome exato, a entidade, o custo, a duração e para quem é. Anote o que mudou desde que este curso foi escrito.",
          youCanNow: "comparar credenciais de IA para principiantes usando as páginas oficiais.",
          quickCheck: [
            { objective: "O2", q: "Que credencial da lição é um curso ao seu ritmo com certificado, e não um exame vigiado?", options: ["Google AI Essentials", "AWS Certified AI Practitioner", "Google Cloud Generative AI Leader", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 0, why: "O Google AI Essentials é um curso ao seu ritmo na Coursera que termina com um certificado." },
            { objective: "O2", q: "Você é totalmente novo na IA e quer usar ferramentas de IA num trabalho de escritório. Qual é a que menos lhe serve agora?", options: ["Um curso curto de IA para principiantes", "Google AI Essentials", "Microsoft Azure AI Fundamentals (AI-901), que agora espera algum Python e Azure", "Primeiro, formação gratuita para principiantes"], answer: 2, why: "O AI-901 agora espera algum conhecimento de Python e de Azure, por isso é mais técnico." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ligar uma credencial a um trabalho e a um orçamento",
          minutes: 5,
          goal: "Escolher uma credencial usando anúncios de emprego reais, o seu orçamento e o seu tempo.",
          text: [
            "Comece pelos empregos, não pelas credenciais. Procure empregos que quer e conte que credenciais e competências aparecem nos anúncios. Se vários falam de uma plataforma de nuvem, a credencial dessa plataforma pode valer a pena.",
            "Depois compare o custo total (taxa, taxa de repetição e qualquer formação), o tempo para se preparar e o seu nível atual. Se é totalmente novo, fazer primeiro um curso curto para principiantes pode poupar-lhe a taxa de um exame em que reprovaria.",
            "Procure ajuda para pagar. Programas de emprego e formação, os American Job Centers (centros de emprego públicos nos EUA), programas de reintegração, benefícios para veteranos, bibliotecas e alguns empregadores podem pagar a formação ou os exames; algumas entidades oferecem descontos ou apoio financeiro. Pergunte antes de pagar, e nunca pague a alguém que \"garante\" que vai passar ou que vende respostas de exame: isso é uma burla e pode fazer com que a sua credencial seja cancelada."
          ],
          steps: ["Encontre cinco anúncios de emprego que quer.", "Conte que credenciais e competências eles referem.", "Compare o custo total, o tempo e o nível das suas duas melhores opções.", "Pergunte ao seu programa de emprego ou de reintegração se ajuda a pagar.", "Escolha uma."],
          words: [["Taxa de repetição", "o que paga para fazer um exame outra vez se não passar."], ["Apoio financeiro", "ajuda para pagar estudos ou formação."]],
          slides: [
            { title: "Comece pelos empregos", bullets: ["Encontre cinco anúncios de emprego", "Conte as credenciais que eles referem"] },
            { title: "Compare o custo total", bullets: ["Taxa, repetições, formação", "Tempo e o seu nível atual"] },
            { title: "Peça ajuda para pagar", bullets: ["Programas de emprego, de reintegração e de veteranos", "Empregadores, bibliotecas, descontos das entidades", "Nunca pague por aprovações \"garantidas\""] }
          ],
          tryIt: "Encontre cinco anúncios de emprego que quer e faça uma lista das credenciais de IA ou de tecnologia que eles referem. Escolha uma credencial e escreva o seu custo total e quem pode ajudar a pagá-la.",
          youCanNow: "escolher uma credencial que sirva para empregos reais, para o seu orçamento e para o seu tempo.",
          quickCheck: [
            { objective: "O3", q: "O que entra no custo total de uma credencial?", options: ["Só a taxa do exame", "Só a formação", "A taxa do exame, qualquer taxa de repetição e qualquer formação", "Nada, se passar"], answer: 2, why: "O custo total inclui a taxa, as repetições e a formação." },
            { objective: "O3", q: "Três dos seus cinco anúncios de emprego referem a mesma plataforma de nuvem. O que deve considerar?", options: ["A credencial dessa plataforma, e perguntar a um programa de emprego se ajuda a pagar", "Uma credencial qualquer de um anúncio publicitário", "Comprar respostas de exame para poupar tempo", "Esquecer as credenciais de vez"], answer: 0, why: "Comece pelos anúncios de emprego; uma plataforma que aparece muitas vezes pode fazer a sua credencial valer a pena." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher a credencial certa",
        questions: [
          { objective: "O1", q: "Qual é a principal diferença entre um certificado e uma certificação?", options: ["Não há diferença", "Um certificado vale sempre mais", "Uma certificação normalmente exige passar num exame vigiado", "As certificações nunca têm exame"], answer: 2, why: "As certificações avaliam competências com um exame vigiado." },
          { objective: "O2", q: "Segundo a página da AWS, a taxa do exame AWS Certified AI Practitioner é:", options: ["$100", "$1,000", "Grátis", "$10"], answer: 0, why: "A AWS indica uma taxa de $100." },
          { objective: "O2", q: "A página de que credencial diz que agora espera algum conhecimento de Python e de Azure?", options: ["Google AI Essentials", "Nenhuma delas tem página", "Um cartão de manipulador de alimentos", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 3, why: "A página do AI-901 indica que é preciso conhecer um pouco de Python e de Azure." },
          { objective: "O3", q: "Por onde deve começar quando escolhe uma credencial?", options: ["Pela mais cara", "Pelos anúncios de emprego reais que quer", "Pelo que um desconhecido recomenda", "Por um anúncio publicitário qualquer"], answer: 1, why: "Os anúncios de emprego mostram o que os empregadores querem." },
          { objective: "O3", q: "Alguém oferece-se para lhe vender respostas de exame que \"garantem\" que vai passar. Isto é:", options: ["Um atalho inteligente", "Uma burla que pode fazer com que a sua credencial seja cancelada", "Permitido", "Formação gratuita"], answer: 1, why: "Comprar respostas é fazer batota e muitas vezes é uma burla." }
        ]
      }
    },
    {
      name: "Capítulo 2: Preparar-se e passar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ler a página oficial do exame",
          minutes: 5,
          goal: "Tirar os dados principais de uma página oficial de exame para uma ficha de uma página.",
          text: [
            "A página oficial do exame é a única fonte em que deve confiar para os dados do exame. Procure: o nome exato e o código do exame, o preço, a duração e o número de perguntas, a nota mínima, as línguas, como pode fazê-lo (pela internet ou num centro de exames), as competências avaliadas e o seu peso, e por quanto tempo a credencial é válida.",
            "A lista de competências avaliadas, às vezes chamada guia do exame ou guia de estudo, é o seu mapa. Se um tema vale 40% do exame, merece cerca de 40% do seu tempo de estudo.",
            "Verifique também as regras: o documento de identificação exigido (muitas vezes um documento oficial com fotografia, válido, com um nome igual ao da inscrição), as regras da sala para exames pela internet, os prazos para mudar a data e as regras de repetição. Se a sua situação com os documentos for complicada, resolva-a cedo."
          ],
          steps: ["Abra a página oficial do exame da entidade.", "Escreva o nome, o código, o preço, a duração, as perguntas e a nota mínima.", "Copie as competências avaliadas com as suas percentagens.", "Anote as regras de identificação, do exame e de repetição.", "Guarde o link da página e a data em que verificou."],
          words: [["Código do exame", "o código curto de um exame, como AI-901."], ["Competências avaliadas", "a lista de temas que um exame avalia, muitas vezes com percentagens (em inglês, \"skills measured\")."], ["Nota mínima", "a nota de que precisa para passar."]],
          slides: [
            { title: "Confie na página oficial", bullets: ["Nome, código, preço", "Duração, perguntas, nota mínima", "Pela internet ou num centro de exames"] },
            { title: "Competências avaliadas = o seu mapa", bullets: ["Temas e o seu peso", "40% do exame = 40% do tempo de estudo"] },
            { title: "Verifique as regras cedo", bullets: ["Documento com fotografia e o mesmo nome", "Regras da sala para exames pela internet", "Regras para mudar a data e repetir"] }
          ],
          tryIt: "Faça uma ficha de uma página da credencial que escolheu, a partir da página oficial, com as competências avaliadas e as suas percentagens, as regras de identificação e a data em que verificou.",
          youCanNow: "ler uma página oficial de exame e transformá-la numa ficha.",
          quickCheck: [
            { objective: "O4", q: "O que é a lista de competências avaliadas numa página de exame?", options: ["Uma lista de centros de exames", "O seu mapa do que o exame avalia e de quanto vale cada tema", "Uma lista de pessoas que já fizeram o exame", "As respostas do exame"], answer: 1, why: "A lista de competências avaliadas mostra cada tema e o seu peso no exame." },
            { objective: "O4", q: "O seu documento de identificação tem um apelido diferente do que vai usar na inscrição. O que faz?", options: ["Espera que ninguém verifique", "Usa o documento de um amigo", "Ignora as regras de identificação", "Resolve isso cedo, porque o nome do documento tem de ser igual ao da inscrição"], answer: 3, why: "Muitas vezes o nome do documento tem de ser igual ao da inscrição, por isso resolva-o cedo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um plano de estudo com formação gratuita e IA",
          minutes: 6,
          goal: "Fazer um plano de estudo de quatro semanas com formação oficial gratuita, explicações da IA e testes de prática.",
          text: [
            "A maioria das entidades oferece formação gratuita. O Microsoft Learn tem percursos de aprendizagem gratuitos e uma avaliação de prática gratuita para muitos exames; o AWS Skill Builder e o Google também oferecem formação gratuita. Comece por aí antes de pagar qualquer coisa.",
            "Use a IA como explicador, não para fazer batota. Peça: \"Explique [tema da lista de competências] com palavras simples e um exemplo da vida real. Depois faça-me cinco perguntas de escolha múltipla e explique os meus erros.\" Confirme na formação oficial tudo o que lhe parecer estranho, porque a IA pode estar errada ou desatualizada.",
            "Planeie quatro semanas: nas semanas 1-3 estude os temas pela ordem do seu peso no exame, um pouco cada dia; a semana 4 é para testes de prática e para rever os pontos fracos. Procure ter um bom resultado no teste de prática oficial antes de marcar o exame verdadeiro."
          ],
          steps: ["Faça a lista das competências avaliadas e do seu peso.", "Encontre a formação oficial gratuita para cada uma.", "Planeie 30-60 minutos por dia nas semanas 1-3, primeiro os temas com mais peso.", "Use a IA para lhe explicar e fazer perguntas; confirme na formação oficial.", "Semana 4: testes de prática e pontos fracos."],
          words: [["Percurso de aprendizagem", "um conjunto de lições por ordem sobre um tema (em inglês, \"learning path\")."], ["Teste de prática", "um exame de exemplo que mostra como é o verdadeiro."]],
          slides: [
            { title: "Primeiro, formação gratuita", bullets: ["Microsoft Learn, AWS Skill Builder, Google", "Testes de prática gratuitos quando existem"] },
            { title: "A IA como explicador", bullets: ["Explicar com palavras simples e exemplos", "Fazer-me perguntas e explicar os erros", "Confirmar na formação oficial"] },
            { title: "Plano de quatro semanas", bullets: ["Semanas 1-3: temas pelo seu peso", "Semana 4: testes de prática e pontos fracos", "Marque quando os resultados de prática forem bons"] }
          ],
          tryIt: "Escreva um plano de estudo de quatro semanas para a sua credencial. Depois peça a um assistente de IA que lhe explique um tema da lista de competências e lhe faça cinco perguntas.",
          youCanNow: "fazer um plano de estudo com formação gratuita, explicações da IA e testes de prática.",
          quickCheck: [
            { objective: "O5", q: "No plano de quatro semanas, para que serve a semana 4?", options: ["Aprender temas totalmente novos", "Fazer uma pausa", "Marcar um segundo exame", "Testes de prática e rever os pontos fracos"], answer: 3, why: "A semana 4 é para testes de prática e pontos fracos." },
            { objective: "O5", q: "A IA explica um tema de uma maneira, mas a formação oficial diz outra coisa. O que faz?", options: ["Confia na IA", "Confia na formação oficial", "Salta o tema", "Pergunta outra vez à IA até ela concordar"], answer: 1, why: "A IA pode estar errada ou desatualizada; a formação oficial é a fonte de confiança." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Preparar-se para o dia do exame e usar a sua credencial",
          minutes: 5,
          goal: "Preparar-se para o dia do exame e acrescentar a nova credencial ao seu currículo e aos seus perfis.",
          text: [
            "Antes do dia do exame, se o fizer pela internet, teste o seu equipamento: a maioria das entidades tem uma verificação do sistema. Arrume a mesa e a sala como as regras pedem. Se for num centro de exames, planeie o caminho e chegue cedo com o documento certo.",
            "Durante o exame: leia cada pergunta duas vezes, responda primeiro às fáceis, marque as difíceis e volte a elas depois, e não deixe nenhuma em branco, a não ser que as regras digam que as respostas erradas tiram pontos.",
            "Depois de passar, acrescente-a ao seu currículo na secção \"Certificações\" com o nome exato, a entidade e a data, e peça o crachá digital que a entidade oferecer para partilhar na internet. Se não passar, leia o relatório de resultados, estude os pontos fracos e use as regras de repetição. Muitas pessoas passam à segunda tentativa."
          ],
          steps: ["Faça a verificação do sistema para o exame pela internet ou planeie o caminho.", "Prepare o documento e a sala como as regras exigem.", "No exame, leia duas vezes, faça primeiro as fáceis, marque as difíceis.", "Depois de passar, ponha-a no currículo com o nome exato, a entidade e a data.", "Se não passar, estude os pontos fracos do relatório de resultados e repita."],
          words: [["Verificação do sistema", "um teste para confirmar que o computador, a câmara e a internet funcionam para um exame pela internet."], ["Crachá digital", "uma imagem na internet que prova que ganhou uma credencial (em inglês, \"digital badge\")."], ["Relatório de resultados", "os resultados que mostram como se saiu em cada parte do exame."]],
          slides: [
            { title: "Antes do dia do exame", bullets: ["Pela internet: faça a verificação do sistema", "Centro de exames: planeie o caminho, chegue cedo", "Documento certo, sala arrumada"] },
            { title: "Durante o exame", bullets: ["Leia cada pergunta duas vezes", "Primeiro as fáceis; marque as difíceis", "Não deixe respostas em branco"] },
            { title: "Depois do exame", bullets: ["Passou: ponha-a no currículo e peça o crachá", "Ainda não: estude os pontos fracos e repita"] }
          ],
          tryIt: "Tarefa final: complete a sua ficha e o seu plano de estudo de quatro semanas, faça um teste de prática oficial ou um questionário com a IA e marque uma data para começar a estudar ou uma data de exame. Escreva como a credencial vai aparecer no seu currículo.",
          youCanNow: "escolher, preparar e usar uma credencial de IA que sirva para o seu objetivo de trabalho.",
          quickCheck: [
            { objective: "O6", q: "O que deve fazer antes de um exame vigiado pela internet?", options: ["Fazer a verificação do sistema da entidade e preparar a sala", "Descarregar as respostas do exame", "Convidar um amigo para ajudar", "Usar qualquer documento que tenha"], answer: 0, why: "A verificação do sistema e uma sala preparada segundo as regras evitam problemas no dia do exame." },
            { objective: "O6", q: "Você passou. Como o põe no seu currículo?", options: ["\"Uma coisa de IA\"", "Só o logótipo da entidade", "Na secção Certificações, com o nome exato, a entidade e a data", "Não põe até alguém perguntar"], answer: 2, why: "Escreva o nome exato, a entidade e a data na secção Certificações." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Preparar-se e passar",
        questions: [
          { objective: "O4", q: "Qual é a fonte mais segura para o preço e o formato de um exame?", options: ["Uma publicação nas redes sociais", "Uma resposta de um chat de IA", "A memória de um amigo", "A página oficial do exame da entidade"], answer: 3, why: "As páginas oficiais têm os dados atuais." },
          { objective: "O4", q: "Um tema vale 40% do exame. Quanto tempo de estudo deve ter?", options: ["Cerca de 40%", "Nenhum", "5%", "Todo"], answer: 0, why: "O tempo de estudo deve seguir o peso no exame." },
          { objective: "O5", q: "Como deve usar a IA enquanto estuda?", options: ["Para fazer o exame por você", "Para encontrar respostas roubadas", "Como explicador que lhe explica e faz perguntas, confirmado na formação oficial", "De maneira nenhuma"], answer: 2, why: "A IA pode explicar, mas você tem de a verificar e nunca fazer batota." },
          { objective: "O6", q: "O que deve fazer antes de um exame vigiado pela internet?", options: ["Nada", "Convidar amigos para ajudar", "Deixar apontamentos abertos na mesa", "Fazer a verificação do sistema da entidade"], answer: 3, why: "A verificação do sistema evita problemas técnicos." },
          { objective: "O6", q: "Não passou. Qual é o melhor passo a seguir?", options: ["Desistir para sempre", "Comprar respostas de exame", "Estudar os pontos fracos do relatório de resultados e repetir", "Mentir no currículo"], answer: 2, why: "Muitas pessoas passam à segunda tentativa com estudo focado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Certificações de IA: Qual Obter e Como se Preparar",
    questions: [
      { objective: "O1", q: "Um certificado de conclusão mostra:", options: ["Que passou num exame vigiado", "Que terminou um curso", "Que tem licença para exercer advocacia", "Nada"], answer: 1, why: "Os certificados mostram que terminou um curso." },
      { objective: "O1", q: "Um exame vigiado é:", options: ["Observado por uma pessoa ou por uma câmara para evitar batota", "Um teste com consulta, feito com amigos", "Um inquérito", "Uma entrevista de emprego"], answer: 0, why: "A vigilância mantém o exame justo." },
      { objective: "O1", q: "Uma credencial garante um emprego?", options: ["Sim, sempre", "Só às segundas-feiras", "Não, junte-a a prática real e a um bom currículo", "Só se for cara"], answer: 2, why: "As credenciais ajudam, mas não garantem empregos." },
      { objective: "O2", q: "Segundo a página do Google, em que plataforma é oferecido o Google AI Essentials?", options: ["Coursera", "Um banco", "Um canal de televisão", "Uma operadora de telemóveis"], answer: 0, why: "O Google oferece-o na Coursera." },
      { objective: "O2", q: "Segundo o Google, quanto tempo dura o curso Google AI Essentials?", options: ["Quatro anos", "Cinco minutos", "Dois semestres", "Menos de 5 horas"], answer: 3, why: "O Google indica menos de 5 horas, ao seu ritmo." },
      { objective: "O2", q: "Quanto tempo dura o exame AWS Certified AI Practitioner?", options: ["3 dias", "8 horas", "10 minutos", "90 minutos"], answer: 3, why: "A AWS indica 90 minutos." },
      { objective: "O2", q: "Que pré-requisitos indica a certificação Generative AI Leader do Google Cloud?", options: ["Uma licenciatura em informática", "Nenhum", "Cinco anos de programação", "Outra certificação do Google"], answer: 1, why: "O Google não indica pré-requisitos." },
      { objective: "O2", q: "Segundo o Google Cloud, por quanto tempo é válida a certificação Generative AI Leader?", options: ["Para sempre", "1 mês", "10 anos", "3 anos"], answer: 3, why: "O Google indica uma validade de 3 anos." },
      { objective: "O2", q: "O exame para a Microsoft Certified: Azure AI Fundamentals é agora:", options: ["AI-901", "AZ-104", "Não há exame", "PMP"], answer: 0, why: "A Microsoft indica o AI-901 como o exame exigido." },
      { objective: "O2", q: "O preço do exame Azure AI Fundamentals:", options: ["É sempre grátis", "É $5 em todo o lado", "Depende do país onde o faz", "Paga-se com cartões-presente"], answer: 2, why: "A Microsoft define os preços dos exames por país ou região." },
      { objective: "O4", q: "Porque deve verificar outra vez as páginas oficiais antes de pagar?", options: ["As páginas nunca mudam", "Para perder tempo", "Não é preciso", "Os nomes, os preços e os detalhes mudam"], answer: 3, why: "As credenciais são atualizadas muitas vezes." },
      { objective: "O3", q: "Quando escolhe uma credencial, comece por:", options: ["O logótipo mais vistoso", "O exame mais longo", "Anúncios de emprego para os trabalhos que quer", "Uma escolha ao acaso"], answer: 2, why: "As necessidades dos empregadores orientam a escolha." },
      { objective: "O3", q: "O custo total de uma credencial inclui:", options: ["Só a taxa do exame", "A taxa do exame, as repetições e a formação", "Nada", "A sua renda de casa"], answer: 1, why: "Planeie todos os custos." },
      { objective: "O3", q: "Quem pode ajudar a pagar a formação ou os exames?", options: ["Programas de emprego, de reintegração ou de veteranos, ou um empregador", "Nunca ninguém", "Burlões", "Alguém que liga sem se saber quem é"], answer: 0, why: "Muitos programas pagam formação." },
      { objective: "O4", q: "A lista de competências avaliadas é:", options: ["Uma lista de vagas de emprego", "As respostas do exame", "O seu mapa do que deve estudar", "De leitura opcional"], answer: 2, why: "Mostra o que o exame avalia." },
      { objective: "O4", q: "Que problema com o documento de identificação deve resolver cedo?", options: ["Garantir que o seu documento com fotografia tem o mesmo nome da inscrição", "A sua cor preferida", "A capa do seu telefone", "O tipo de letra do seu email"], answer: 0, why: "Se os nomes não forem iguais, podem impedi-lo de fazer o exame." },
      { objective: "O5", q: "Onde deve procurar formação primeiro?", options: ["Só em cursos intensivos caros e não oficiais", "Em sites de respostas roubadas", "Em lado nenhum", "Na formação oficial gratuita da entidade"], answer: 3, why: "A formação oficial gratuita corresponde ao exame." },
      { objective: "O5", q: "A IA explica um tema de forma diferente da formação oficial. Você deve:", options: ["Confiar na IA", "Confiar na formação oficial", "Saltar o tema", "Denunciar a entidade"], answer: 1, why: "A IA pode estar errada ou desatualizada." },
      { objective: "O6", q: "Durante o exame, uma boa estratégia é:", options: ["Passar o tempo todo na pergunta 1", "Responder primeiro às perguntas fáceis e marcar as difíceis", "Deixar muitas em branco", "Adivinhar sem ler"], answer: 1, why: "Assim usa bem o seu tempo." },
      { objective: "O6", q: "Depois de passar, ponha a credencial no currículo com:", options: ["Uma nota inventada", "Só \"coisas de IA\"", "Nada", "O nome exato, a entidade e a data"], answer: 3, why: "Os dados exatos podem ser verificados e são profissionais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 5, 9, 10, 11, 13, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "A credencial serve para um emprego", objective: "O3", notYet: "A credencial não está ligada a um anúncio de emprego real.", meets: "Uma credencial escolhida e ligada a um anúncio de emprego real que o aluno quer.", exceeds: "Comparou duas opções pelo custo total, pelo tempo e pelo nível, e perguntou a um programa se ajuda a pagar." },
      { name: "Dados oficiais", objective: "O4", notYet: "Faltam dados, ou vêm de outro sítio que não a página oficial.", meets: "Nome exato, entidade, custo, duração e formato, competências avaliadas, regras de identificação e por quanto tempo é válida, tirados da página oficial.", exceeds: "Inclui o link da página, a data em que verificou e as regras de repetição." },
      { name: "Plano de estudo de quatro semanas", objective: "O5", notYet: "Não há plano, ou não há teste de prática.", meets: "Quatro semanas com formação oficial gratuita, primeiro os temas com mais peso, com pelo menos um teste de prática.", exceeds: "Inclui pedidos para a IA explicar e uma confirmação na formação oficial." },
      { name: "Exame marcado e tudo pronto", objective: "O6", notYet: "Não há sessão de prática nem data de exame.", meets: "Uma sessão de prática ou uma data de exame está marcada e o aluno sabe que documento precisa.", exceeds: "Fez a verificação do sistema ou planeou o caminho, e anotou como a credencial vai aparecer no currículo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem um teste de prática ou marcam um exame em 30 dias (inquérito de seguimento)",
      "Alunos que ganham a credencial em 90 dias, e quantos receberam ajuda para a pagar",
      "Alunos que acrescentam a credencial ao currículo e se candidatam a um emprego que a pede"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou um computador com internet; um computador adequado e uma sala sossegada para exames pela internet",
      "Formação oficial gratuita (como o Microsoft Learn, o AWS Skill Builder ou a formação gratuita do Google)",
      "Um assistente de IA gratuito para explicações e perguntas",
      "Papel e caneta, ou um documento, para a ficha e o plano de estudo",
      "Cerca de 60 minutos para as lições e as verificações, mais quatro semanas de estudo"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; abram juntos uma página oficial de exame num ecrã partilhado.",
      "Lembre aos alunos que os preços e os detalhes dos exames nas lições podem mudar; verifiquem sempre a página oficial antes de pagar.",
      "Ajude os alunos a verificar cedo se o seu documento com fotografia cumpre as regras do exame, e encaminhe-os para ajuda com documentos se for preciso.",
      "Ponha os alunos em contacto com os American Job Centers e com programas de emprego ou de reintegração que podem pagar as taxas dos exames; avise contra quem vende respostas de exame.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
