"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-career-transition.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the United States: US program and agency names (TAP, VA, CareerOneStop, USAJOBS, DD-214) are kept and explained.

module.exports = {
  id: "veterans-ai-career-transition-pt",
  lang: "pt",
  translationOf: "veterans-ai-career-transition",
  category: "Veterans (military)",
  name: "IA para a Transição de Carreira e o Emprego",
  skills: "Encontrar ajuda oficial para a transição, Ler um anúncio de emprego à procura de palavras-chave, Escrever um currículo civil adaptado a um emprego, Escrever uma carta de apresentação curta e um perfil, Praticar entrevistas com IA, Reconhecer burlas de emprego",
  outcome: "usar um assistente de IA para escrever um currículo civil de uma página adaptado a um anúncio de emprego real e uma resposta de 60 segundos a \"fale-me de si\", verificar os dois quanto à exatidão e às informações privadas, e saber onde obter ajuda oficial gratuita.",
  about: [
    "Este curso é para veteranos e militares em transição que se candidatam a empregos civis nos Estados Unidos. Você tem a experiência; agora o trabalho é mostrá-la com palavras que um recrutador civil entende, e estar pronto para a entrevista.",
    "Você vai encontrar ajuda oficial gratuita, ler um anúncio de emprego como um recrutador, usar um assistente de IA gratuito para fazer um currículo adaptado, uma carta de apresentação curta e um resumo de perfil na internet, e praticar respostas de entrevista. Também vai aprender a reconhecer burlas de emprego.",
    "Cada lição dura cerca de cinco minutos: leia, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha um anúncio de emprego civil real. Use um assistente de IA para escrever um currículo de uma página adaptado a ele (pelo menos cinco tópicos com palavras civis e números) e uma resposta de 60 segundos a \"fale-me de si\". Verifique que tudo o que diz é verdade, que não tem o número da Segurança Social, dados do DD-214 nem outros números privados, e pratique a resposta em voz alta duas vezes.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição que se candidatam a empregos civis, desde quem cumpriu o primeiro contrato até quem se reformou.",
    startingPoint: "Têm experiência real, disciplina e liderança, e sabem usar um computador ou um smartphone. A maioria nunca escreveu um currículo civil adaptado a um anúncio nem praticou uma entrevista civil, e poucos usaram um assistente de IA para ajudar.",
    gap: "Os recrutadores civis e os programas que leem currículos procuram as palavras do próprio anúncio e resultados claros, e as burlas de emprego visam pessoas em transição. Os alunos precisam de usar a IA para adaptar um currículo verdadeiro e sem dados privados, e uma resposta de entrevista, a um anúncio real, e de saber onde obter ajuda oficial gratuita.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um computador é mais fácil para o currículo; um smartphone serve para praticar",
      "Privacidade: nenhum número da Segurança Social, dado do DD-214 ou outro número privado em nenhum pedido à IA nem no currículo",
      "Honestidade: tudo o que o currículo diz, incluindo os números, tem de ser verdade",
      "Tempo: lições de cerca de 5 minutos, que cabem entre as consultas de transição e o trabalho"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e ao Futuro do Trabalho\" ajuda os alunos a transformar primeiro as suas funções em tópicos civis."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Na sua fase da transição", action: "identificar fontes oficiais gratuitas de ajuda para o emprego e escolher uma para contactar", standard: "com uma forma de contacto ou uma consulta anotada" },
    { id: "O2", condition: "Com um anúncio de emprego real", action: "fazer a lista dos requisitos obrigatórios, dos desejáveis e das palavras-chave com a ajuda da IA e ligá-los às suas competências", standard: "com pelo menos 10 palavras-chave do anúncio" },
    { id: "O3", condition: "Usando a sua lista de palavras-chave", action: "escrever com a ajuda da IA um currículo civil de uma página adaptado ao anúncio", standard: "com pelo menos cinco tópicos em palavras civis e números, tudo verdade e sem números privados" },
    { id: "O4", condition: "Para o mesmo emprego", action: "escrever com a ajuda da IA uma carta de apresentação curta e um resumo de perfil na internet", standard: "editados para soarem como você" },
    { id: "O5", condition: "Com uma IA a fazer de recrutador", action: "praticar em voz alta uma resposta de 60 segundos a \"fale-me de si\" e respostas STAR", standard: "pelo menos duas vezes, anotando um ponto forte e uma correção" },
    { id: "O6", condition: "Quando procura emprego", action: "procurar em fontes oficiais de emprego e identificar os sinais de alerta de uma burla de emprego", standard: "sem pagar nada e sem partilhar números privados antes de uma oferta real" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fazer o seu currículo civil",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ajuda oficial gratuita para a transição e o emprego",
          minutes: 5,
          goal: "Dizer três fontes oficiais gratuitas de ajuda para o emprego e escolher uma para contactar.",
          text: [
            "Você não tem de fazer isto sozinho. O Transition Assistance Program (TAP, programa de apoio à transição) é gerido por vários serviços do governo dos Estados Unidos, incluindo o Departamento do Trabalho, o Departamento da Defesa e a VA (o serviço dos veteranos). A parte do Departamento do Trabalho inclui workshops de emprego e ajuda individual através do seu Employment Navigator and Partnership Program em algumas bases. Encontre os horários das aulas no gabinete de transição da sua base.",
            "Depois de sair, os American Job Centers (quase 2.400 em todo o país, que se encontram através do CareerOneStop) ajudam na procura de emprego e na formação, e os veteranos têm prioridade no atendimento. O programa Personalized Career Planning and Guidance da VA dá aconselhamento gratuito sobre carreira e estudos, incluindo ajuda com o currículo, a veteranos e militares que cumprem os requisitos.",
            "A IA é uma ótima parceira para escrever, mas um conselheiro formado conhece o mercado de trabalho da sua zona e os seus benefícios. Use os dois."
          ],
          steps: ["Ainda no serviço: contacte o gabinete de transição da sua base sobre o TAP.", "Já fora do serviço: encontre o American Job Center mais perto no CareerOneStop.", "Leia a página Personalized Career Planning and Guidance da VA e veja se cumpre os requisitos.", "Marque uma consulta esta semana."],
          words: [["TAP", "Transition Assistance Program: formação e ajuda para militares que passam para a vida civil."], ["American Job Center", "um centro gratuito, pago pelo Departamento do Trabalho, que ajuda na procura de emprego e na formação."], ["Prioridade no atendimento", "os veteranos são atendidos primeiro em muitos programas de emprego e formação do Departamento do Trabalho."]],
          slides: [
            { title: "Ainda no serviço", bullets: ["Transition Assistance Program (TAP)", "Workshops de emprego do Departamento do Trabalho", "Ajuda individual em algumas bases"] },
            { title: "Depois de sair", bullets: ["American Job Centers, no CareerOneStop", "Os veteranos têm prioridade no atendimento", "Aconselhamento de carreira gratuito da VA"] },
            { title: "Use os dois", bullets: ["A IA para ajudar a escrever", "Um conselheiro para os empregos da zona e os benefícios"] }
          ],
          sources: [
            { name: "Departamento do Trabalho dos EUA: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "Departamento do Trabalho dos EUA (VETS): encontrar um emprego", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Escolha a fonte oficial desta lição que serve para você agora. Encontre a página ou o gabinete mais perto e anote como contactá-lo. Marque ou planeie uma consulta.",
          youCanNow: "dizer fontes oficiais gratuitas de ajuda para o emprego e escolher a certa para contactar.",
          quickCheck: [
            { objective: "O1", q: "Qual destas é uma fonte oficial gratuita de ajuda para o emprego para militares em transição?", options: ["Um site pago de currículos que viu num anúncio", "Um desconhecido nas redes sociais", "O TAP no gabinete de transição da sua base", "Uma SMS que garante emprego"], answer: 2, why: "O TAP é o programa de transição oficial e gratuito para militares." },
            { objective: "O1", q: "Usou a IA para fazer o rascunho do currículo. O que faz a seguir?", options: ["Pede a um conselheiro do TAP, de um American Job Center ou da VA para o rever", "Envia-o para todos os empregos sem o ler", "Não vai a conselheiros porque a IA chega", "Publica-o na internet com o seu número de telefone"], answer: 0, why: "A IA ajuda a escrever, mas um conselheiro conhece os empregos da zona e os benefícios e pode encontrar erros." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ler um anúncio de emprego como um recrutador",
          minutes: 5,
          goal: "Tirar de um anúncio de emprego os requisitos principais e as palavras-chave com a ajuda da IA.",
          text: [
            "Cada anúncio de emprego diz-lhe o que o empregador quer ouvir. Muitas empresas usam um sistema de gestão de candidaturas (em inglês, ATS) que lê os currículos à procura de palavras iguais às do anúncio, por isso usar as palavras do próprio anúncio é importante.",
            "Copie um anúncio real para um assistente de IA e peça: \"Faça a lista dos requisitos obrigatórios, das competências desejáveis e das 10 palavras-chave mais importantes deste anúncio. Depois diga-me quais das minhas competências correspondem: fui chefe de abastecimento nos Marines durante 7 anos, liderei 10 militares e geri 2 milhões de dólares em equipamento.\"",
            "Compare você mesmo a lista da IA com o anúncio. Se cumpre a maioria dos requisitos obrigatórios, candidate-se. Muitas pessoas candidatam-se sem cumprir todos os desejáveis."
          ],
          steps: ["Escolha um anúncio de emprego real.", "Cole o anúncio (não os seus dados privados) num assistente de IA.", "Peça os requisitos obrigatórios, os desejáveis e as principais palavras-chave.", "Pergunte quais das suas competências correspondem.", "Compare você mesmo a lista com o anúncio."],
          words: [["Sistema de gestão de candidaturas (ATS)", "um programa que os empregadores usam para receber currículos e procurar neles palavras iguais às do anúncio."], ["Palavra-chave", "uma palavra ou expressão importante do anúncio, como \"controlo de inventário\"."], ["Requisito obrigatório", "uma condição que precisa de cumprir para ser considerado."]],
          slides: [
            { title: "O anúncio diz-lhe o que dizer", bullets: ["Os empregadores procuram palavras iguais", "Use as palavras do próprio anúncio"] },
            { title: "Peça à IA para tirar", bullets: ["Os requisitos obrigatórios", "As competências desejáveis", "As 10 principais palavras-chave", "Quais das suas competências correspondem"] },
            { title: "Depois decida", bullets: ["Verifique você mesmo a lista", "Cumpre a maioria dos obrigatórios? Candidate-se"] }
          ],
          tryIt: "Encontre um anúncio de emprego real que gostaria de ter. Peça a um assistente de IA a lista dos requisitos obrigatórios, dos desejáveis e das 10 principais palavras-chave, e quais das suas competências correspondem.",
          youCanNow: "tirar os requisitos e as palavras-chave de um anúncio de emprego e ligá-los à sua experiência.",
          quickCheck: [
            { objective: "O2", q: "O que é um requisito desejável num anúncio de emprego?", options: ["Uma condição que tem de cumprir para se candidatar", "O salário", "A morada da empresa", "Uma competência que ajuda mas não é obrigatória"], answer: 3, why: "Os desejáveis são extras; pode candidatar-se na mesma se cumprir a maioria dos obrigatórios." },
            { objective: "O2", q: "Cola um anúncio de emprego numa IA. O que pede?", options: ["\"Este emprego é bom?\"", "\"Faça a lista dos obrigatórios, dos desejáveis e das 10 principais palavras-chave, e diga quais das minhas competências correspondem.\"", "\"Candidate-se por mim.\"", "\"Escreva nele o meu número da Segurança Social.\""], answer: 1, why: "Um pedido claro tira os requisitos e as palavras-chave de que precisa para adaptar o currículo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever um currículo civil adaptado",
          minutes: 6,
          goal: "Usar a IA para fazer o rascunho de um currículo de uma página adaptado a um anúncio, com palavras civis e números.",
          text: [
            "Um currículo civil tem normalmente uma ou duas páginas; não é a sua folha de serviço completa. Tem um resumo curto no topo, a sua experiência em tópicos, as suas competências, os estudos e as certificações. Use nomes de cargos civis quando servem (\"supervisor da cadeia de abastecimento\" em vez de \"chefe de abastecimento\") e explique o que fez, de que tamanho era e o resultado.",
            "Dê à IA a sua experiência em palavras simples e as palavras-chave da Lição 2: \"Escreva um currículo de uma página para este anúncio de coordenador de logística. Use estas palavras-chave. A minha experiência: [descrição simples]. Use verbos fortes e números, sem siglas militares.\"",
            "Deixe de fora o seu número da Segurança Social, os dados do DD-214 (o documento de saída do serviço), a data de nascimento completa e os detalhes da credencial de segurança além do que o anúncio pede. Nunca deixe a IA acrescentar coisas que você não fez. Depois peça a um conselheiro do TAP, de um American Job Center ou da VA para o ver."
          ],
          steps: ["Escreva a sua experiência em palavras simples: o quê, de que tamanho, que resultado.", "Dê à IA as palavras-chave do anúncio.", "Peça um currículo de uma página com um resumo, tópicos de experiência e competências.", "Troque os termos militares e verifique que tudo é verdade.", "Tire os dados privados e peça a um conselheiro para o rever."],
          words: [["Resumo", "duas ou três linhas no topo do currículo que dizem quem você é e o que oferece."], ["Adaptar", "mudar o seu currículo para corresponder a um emprego específico."]],
          slides: [
            { title: "A forma de um currículo civil", bullets: ["Resumo curto", "Tópicos de experiência com resultados", "Competências, estudos, certificações"] },
            { title: "Diga à maneira deles", bullets: ["Cargos civis quando servem", "O quê, de que tamanho, que resultado", "Use as palavras-chave do anúncio"] },
            { title: "Verdadeiro e seguro", bullets: ["Sem número da Segurança Social, dados do DD-214 nem data de nascimento completa", "Nunca deixe a IA acrescentar o que não fez", "Peça a um conselheiro para o rever"] }
          ],
          tryIt: "Use a sua lista de palavras-chave da Lição 2. Peça a um assistente de IA o rascunho de um currículo de uma página para esse anúncio. Mude qualquer linha que não seja exatamente verdade.",
          youCanNow: "escrever com a ajuda da IA um currículo civil de uma página adaptado a um anúncio de emprego específico.",
          quickCheck: [
            { objective: "O3", q: "Porque é que um currículo adaptado usa as palavras do próprio anúncio?", options: ["Para o programa que lê currículos e o recrutador verem a correspondência", "Para ficar mais comprido", "Para usar termos militares", "Para não precisar de carta de apresentação"], answer: 0, why: "Os sistemas de gestão de candidaturas e os recrutadores procuram as palavras-chave do anúncio." },
            { objective: "O3", q: "O rascunho da IA diz que tem uma certificação que você não tem. O que faz?", options: ["Deixa; ninguém verifica", "Diz que a vai ter em breve", "Tira-a, para que tudo seja verdade", "Acrescenta mais duas certificações"], answer: 2, why: "Tudo o que o currículo diz tem de ser verdade." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fazer o seu currículo civil",
        questions: [
          { objective: "O1", q: "Sai do serviço no próximo mês e quer ajuda individual para o emprego. Um bom primeiro passo é:", options: ["O gabinete de transição da sua base e o TAP", "Um site de emprego qualquer", "Um influenciador nas redes sociais", "Um serviço onde se paga para se candidatar"], answer: 0, why: "O TAP e o Departamento do Trabalho oferecem workshops e ajuda individual." },
          { objective: "O2", q: "O que é um sistema de gestão de candidaturas?", options: ["Um GPS para entrevistas de emprego", "Um programa que lê currículos à procura de palavras iguais às do anúncio", "Um benefício da VA", "Uma base de dados militar"], answer: 1, why: "Muitos empregadores usam-no para organizar os currículos." },
          { objective: "O2", q: "Porque usar no currículo as palavras do próprio anúncio?", options: ["Para copiar o empregador", "Para o tornar mais comprido", "Para o programa que lê currículos e os recrutadores verem a correspondência", "Porque a lei obriga"], answer: 2, why: "Palavras-chave iguais mostram que serve para o emprego." },
          { objective: "O3", q: "Que tópico de currículo funciona melhor para um emprego civil em logística?", options: ["\"S4 shop NCOIC\"", "\"Fiz coisas de abastecimento\"", "\"Hooah\"", "\"Geri 2 milhões de dólares em equipamento sem nenhuma perda em 3 inventários\""], answer: 3, why: "Palavras civis, números e um resultado." },
          { objective: "O3", q: "O que deve deixar FORA de um currículo civil?", options: ["O seu número da Segurança Social", "As suas competências", "Um resumo curto", "As suas certificações"], answer: 0, why: "Os números privados não pertencem a um currículo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Candidatar-se e fazer entrevistas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever uma carta de apresentação curta e um resumo de perfil",
          minutes: 5,
          goal: "Usar a IA para escrever uma carta de apresentação curta e um resumo de perfil na internet com a sua própria voz.",
          text: [
            "Uma carta de apresentação é uma carta curta que diz porque quer este emprego e porque serve para ele. Faça-a em três parágrafos curtos: porque este emprego, as suas duas ou três melhores correspondências com provas, e um fecho educado.",
            "Peça à IA: \"Escreva uma carta de apresentação de 3 parágrafos para este anúncio, usando o meu currículo. Com confiança mas sem ser rígida, sem jargão militar.\" Depois faça-a soar como você: mude as palavras que nunca diria.",
            "Um resumo de perfil na internet, por exemplo no LinkedIn (uma rede social para o trabalho), tem duas a quatro frases sobre quem você é e que trabalho quer. Peça à IA três versões, escolha uma e edite-a."
          ],
          steps: ["Dê à IA o anúncio e o seu currículo.", "Peça uma carta de apresentação de três parágrafos.", "Edite-a para soar como você.", "Peça três versões de um resumo de perfil de duas a quatro frases.", "Escolha uma, edite-a e use-a."],
          words: [["Carta de apresentação", "uma carta curta enviada com o currículo que diz porque quer o emprego e porque serve para ele."], ["Resumo de perfil", "algumas frases sobre você no topo de um perfil profissional na internet."]],
          slides: [
            { title: "Carta de apresentação: três parágrafos", bullets: ["Porque este emprego", "As suas melhores correspondências, com provas", "Um fecho educado"] },
            { title: "Faça-a sua", bullets: ["Com confiança, sem ser rígida", "Sem jargão militar", "Mude as palavras que nunca diria"] },
            { title: "Resumo de perfil", bullets: ["Duas a quatro frases", "Quem você é e que trabalho quer", "Peça à IA três versões"] }
          ],
          tryIt: "Peça a um assistente de IA uma carta de apresentação de três parágrafos para o emprego da Lição 2. Mude pelo menos três expressões para soar como você.",
          youCanNow: "escrever com a ajuda da IA uma carta de apresentação curta e um resumo de perfil, com a sua própria voz.",
          quickCheck: [
            { objective: "O4", q: "Qual é o tamanho de uma boa carta de apresentação?", options: ["Uma frase", "Três parágrafos curtos", "Três páginas inteiras", "O mesmo que o seu currículo"], answer: 1, why: "Três parágrafos curtos cobrem porque este emprego, as suas melhores correspondências e um fecho educado." },
            { objective: "O4", q: "A carta de apresentação da IA usa palavras que você nunca diria. O que faz?", options: ["Envia-a como está", "Pede uma versão mais comprida", "Copia a carta de um amigo", "Muda pelo menos três expressões para soar como você"], answer: 3, why: "A carta deve soar como você, para que a entrevista combine com a carta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Praticar entrevistas com a IA",
          minutes: 6,
          goal: "Praticar uma apresentação de 60 segundos e duas respostas STAR com uma IA a fazer de entrevistador.",
          text: [
            "A maioria das entrevistas começa com \"Fale-me de si\". Uma boa resposta dura cerca de 60 segundos: quem você é agora, a sua experiência mais importante para o emprego e porque quer este emprego. Não conte toda a sua história no serviço.",
            "Para perguntas do tipo \"Fale-me de uma vez em que...\", use STAR: situação, tarefa, ação, resultado. Exemplo: \"A prontidão das viaturas da nossa unidade estava em 70% (situação). Pediram-me para a subir antes de uma inspeção (tarefa). Criei um controlo diário de peças e um horário de dois turnos (ação). A prontidão chegou a 92% em seis semanas (resultado).\"",
            "Peça à IA para fazer de entrevistador: \"Faça de recrutador para este emprego. Faça-me uma pergunta de cada vez. Depois de cada resposta, diga-me uma coisa que fiz bem e uma coisa a melhorar.\" Pratique em voz alta. Se usar o modo de voz, fale com naturalidade."
          ],
          steps: ["Escreva uma resposta de 60 segundos a \"fale-me de si\".", "Escreva duas histórias STAR do seu tempo no serviço.", "Peça à IA para fazer de entrevistador, uma pergunta de cada vez.", "Responda em voz alta e peça, de cada vez, um ponto forte e uma correção.", "Pratique até parecer natural."],
          words: [["STAR", "situação, tarefa, ação, resultado (do inglês situation, task, action, result): uma forma de contar uma história curta sobre o seu trabalho."], ["Pergunta comportamental", "uma pergunta de entrevista sobre uma vez em que você fez alguma coisa."]],
          slides: [
            { title: "\"Fale-me de si\"", bullets: ["Cerca de 60 segundos", "Quem você é agora", "A experiência mais importante para o emprego", "Porque este emprego"] },
            { title: "Respostas STAR", bullets: ["Situação", "Tarefa", "Ação", "Resultado, com um número se puder"] },
            { title: "A IA como entrevistador", bullets: ["Uma pergunta de cada vez", "Um ponto forte e uma correção depois de cada resposta", "Pratique em voz alta"] }
          ],
          tryIt: "Peça a um assistente de IA para fazer de recrutador para o emprego que escolheu. Responda em voz alta a três perguntas, incluindo \"Fale-me de si\", e anote os comentários.",
          youCanNow: "fazer uma apresentação de 60 segundos e responder a perguntas comportamentais usando STAR.",
          quickCheck: [
            { objective: "O5", q: "O que quer dizer o A numa resposta STAR?", options: ["Prémio", "Atitude", "Ação", "Resposta"], answer: 2, why: "STAR é situação, tarefa, ação, resultado; a ação é o que você fez." },
            { objective: "O5", q: "Quer praticar com uma IA a fazer de entrevistador. Que pedido usa?", options: ["\"Faça uma pergunta de cada vez e dê-me um ponto forte e uma correção.\"", "\"Dê-me todas as respostas para decorar.\"", "\"Faça-me 30 perguntas de uma vez.\"", "\"Diga-me que sou perfeito.\""], answer: 0, why: "Uma pergunta de cada vez, com comentários, deixa-o praticar e melhorar cada resposta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Procurar bem e reconhecer burlas de emprego",
          minutes: 5,
          goal: "Procurar em fontes oficiais de emprego e reconhecer os sinais de alerta de uma burla de emprego.",
          text: [
            "Procure onde os empregos verdadeiros são publicados: sites das empresas, o CareerOneStop Job Finder, os American Job Centers e, para empregos federais, o USAJOBS e o site FedsHireVets do Office of Personnel Management (o serviço de pessoal do governo federal), que explica a contratação federal de veteranos, incluindo a preferência para veteranos.",
            "Os burlões visam quem procura emprego. Sinais de alerta: uma oferta de emprego sem entrevista, um pedido para pagar formação ou equipamento, um cheque para depositar e devolver parte do dinheiro, entrevistas só por mensagens escritas, ou um pedido do seu número da Segurança Social ou dados do banco antes de uma oferta real.",
            "Peça a uma IA para mostrar os sinais de alerta num anúncio suspeito, depois de tirar os seus dados. Depois verifique você mesmo a empresa no seu site oficial. Só dê dados privados para a papelada verdadeira, depois de uma oferta real, pelo processo oficial do empregador."
          ],
          steps: ["Procure nos sites das empresas, no CareerOneStop, nos American Job Centers e no USAJOBS.", "Procure sinais de alerta: sem entrevista, pagamento adiantado, cheque para devolver dinheiro, entrevistas só por mensagens.", "Não dê o número da Segurança Social nem dados do banco antes de uma oferta real.", "Verifique a empresa no seu site oficial.", "Peça à IA a lista dos sinais de alerta num anúncio suspeito."],
          words: [["Preferência para veteranos", "regras que dão uma vantagem aos veteranos que cumprem os requisitos na contratação federal."], ["Burla de emprego", "uma oferta de emprego falsa feita para roubar dinheiro ou informações pessoais."]],
          slides: [
            { title: "Procure onde estão os empregos verdadeiros", bullets: ["Sites das empresas", "CareerOneStop e American Job Centers", "USAJOBS e FedsHireVets para empregos federais"] },
            { title: "Sinais de alerta de burla de emprego", bullets: ["Oferta sem entrevista", "Pagar formação ou equipamento", "Depositar um cheque e devolver dinheiro", "Entrevistas só por mensagens"] },
            { title: "Proteja-se", bullets: ["Sem número da Segurança Social nem dados do banco antes de uma oferta real", "Verifique você mesmo a empresa", "Peça à IA para encontrar sinais de alerta"] }
          ],
          sources: [
            { name: "Departamento do Trabalho dos EUA (VETS): encontrar um emprego", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "Office of Personnel Management: FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Tarefa final: termine o seu currículo de uma página adaptado ao anúncio que escolheu e a sua resposta de 60 segundos a \"fale-me de si\". Verifique que tudo é verdade e que não há números privados, e depois diga a resposta em voz alta duas vezes.",
          youCanNow: "procurar em fontes oficiais de emprego, evitar burlas de emprego e candidatar-se com um currículo adaptado e uma apresentação praticada.",
          quickCheck: [
            { objective: "O6", q: "Onde são publicados os empregos federais dos EUA?", options: ["Só nas redes sociais", "Em SMS de desconhecidos", "Em sites pagos de currículos", "No USAJOBS"], answer: 3, why: "O USAJOBS é o site oficial dos anúncios de empregos federais." },
            { objective: "O6", q: "Um recrutador pede o seu número da Segurança Social antes de qualquer entrevista. O que faz?", options: ["Envia-o para não perder o emprego", "Não o envia; só o dá para a papelada verdadeira depois de uma oferta real", "Envia metade", "Envia o seu DD-214 em vez dele"], answer: 1, why: "Pedir números privados antes de qualquer entrevista ou oferta é um sinal de alerta de burla." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Candidatar-se e fazer entrevistas",
        questions: [
          { objective: "O4", q: "Uma boa carta de apresentação é:", options: ["Com cinco páginas", "Três parágrafos curtos: porque este emprego, as suas melhores correspondências, um fecho educado", "Uma cópia do seu currículo", "Cheia de siglas militares"], answer: 1, why: "Curta, focada e ligada ao emprego." },
          { objective: "O5", q: "Uma resposta a \"fale-me de si\" deve durar cerca de:", options: ["10 minutos", "Toda a sua história no serviço", "60 segundos: quem você é, a experiência importante, porque este emprego", "A história da sua família"], answer: 2, why: "Curta e focada no emprego." },
          { objective: "O5", q: "O que quer dizer o R em STAR?", options: ["Posto (rank)", "Razão", "Relatório", "Resultado"], answer: 3, why: "Termine com o resultado, se possível com um número." },
          { objective: "O6", q: "Uma \"empresa\" oferece-lhe um emprego sem entrevista e pede-lhe para pagar a formação. Isto é:", options: ["Um sinal de alerta de burla de emprego", "Uma oferta de emprego normal", "Um benefício para veteranos", "A preferência para veteranos"], answer: 0, why: "Sem entrevista e com pagamento adiantado são sinais clássicos de burla de emprego." },
          { objective: "O6", q: "Que site explica a contratação federal de veteranos, incluindo a preferência para veteranos?", options: ["Um anúncio que aparece no ecrã", "O FedsHireVets do OPM", "Um link numa SMS", "Qualquer chatbot de IA"], answer: 1, why: "O FedsHireVets é o recurso do OPM para veteranos que procuram carreiras federais." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Transição de Carreira e o Emprego",
    questions: [
      { objective: "O1", q: "TAP quer dizer:", options: ["Transition Assistance Program (programa de apoio à transição)", "Training and Pay (formação e salário)", "Total Army Program (programa total do Exército)", "Tech Apprentice Plan (plano de aprendizes de tecnologia)"], answer: 0, why: "O TAP ajuda os militares a passar para a vida civil." },
      { objective: "O1", q: "Que serviços fazem parte do TAP?", options: ["Só empresas privadas", "Vários, incluindo o Departamento do Trabalho, o Departamento da Defesa e a VA", "Só o Exército", "Só a VA"], answer: 1, why: "O TAP é um esforço de vários serviços juntos." },
      { objective: "O1", q: "Onde é que os veteranos têm prioridade no atendimento para a procura de emprego e a formação?", options: ["Num stand de automóveis", "Num grupo nas redes sociais", "Nos American Job Centers", "Num site onde se paga para se candidatar"], answer: 2, why: "O Departamento do Trabalho dá aos veteranos prioridade no atendimento nesses centros." },
      { objective: "O1", q: "Que programa da VA dá aconselhamento de carreira gratuito, incluindo ajuda com o currículo, aos veteranos que cumprem os requisitos?", options: ["Os empréstimos para casa da VA", "O TRICARE", "A GI Bill Comparison Tool", "Personalized Career Planning and Guidance"], answer: 3, why: "A VA apresenta-o como aconselhamento gratuito sobre carreira e estudos." },
      { objective: "O1", q: "Porque usar a IA e também um conselheiro?", options: ["A IA ajuda a escrever; um conselheiro conhece os empregos da zona e os benefícios", "A IA está sempre errada", "Os conselheiros escrevem tudo por você", "Só precisa de um"], answer: 0, why: "Cada um faz uma coisa que o outro não consegue." },
      { objective: "O2", q: "Um \"requisito obrigatório\" num anúncio de emprego é:", options: ["Um extra bom de ter", "Uma condição que precisa de cumprir para ser considerado", "O salário", "A morada do escritório"], answer: 1, why: "Os obrigatórios são os requisitos principais." },
      { objective: "O3", q: "Quando cola um anúncio de emprego numa IA, NÃO deve colar também:", options: ["O nome do cargo", "Os requisitos", "O seu número da Segurança Social", "As palavras-chave"], answer: 2, why: "Os números privados nunca vão para a IA." },
      { objective: "O2", q: "Cumpre a maioria dos obrigatórios mas não todos os desejáveis. Deve:", options: ["Nunca se candidatar", "Mentir sobre o resto", "Esperar cinco anos", "Candidatar-se"], answer: 3, why: "Muitas pessoas candidatam-se sem ter todos os desejáveis." },
      { objective: "O3", q: "Adaptar um currículo quer dizer:", options: ["Mudá-lo para corresponder a um emprego específico", "Torná-lo mais comprido", "Pôr todos os empregos que já teve", "Imprimi-lo a cores"], answer: 0, why: "Adaptar faz o currículo corresponder ao anúncio." },
      { objective: "O3", q: "Qual é o melhor nome de cargo civil para um chefe de abastecimento?", options: ["S4 NCOIC", "Supervisor da cadeia de abastecimento", "Gunny", "Chefe das Coisas"], answer: 1, why: "Os nomes de cargos civis ajudam os recrutadores a entender a sua função." },
      { objective: "O3", q: "O rascunho da IA diz que liderou 50 pessoas; você liderou 10. Você:", options: ["Deixa 50, soa melhor", "Muda para 100", "Muda para o número verdadeiro, 10", "Tira todos os números"], answer: 2, why: "Tudo o que diz tem de ser verdade." },
      { objective: "O3", q: "Quem deve rever o seu currículo antes de o enviar?", options: ["Um desconhecido na internet", "Ninguém", "Só a IA", "Um conselheiro do TAP, de um American Job Center ou da VA"], answer: 3, why: "Um conselheiro formado pode encontrar problemas que a IA não vê." },
      { objective: "O4", q: "Um resumo de perfil é:", options: ["Duas a quatro frases sobre quem você é e o trabalho que quer", "A sua folha de serviço completa", "A morada da sua casa", "Uma lista de palavras-passe"], answer: 0, why: "É uma apresentação curta no topo de um perfil na internet." },
      { objective: "O4", q: "Depois de a IA escrever a sua carta de apresentação, deve:", options: ["Enviá-la sem a ler", "Editá-la para soar como você", "Acrescentar jargão militar", "Fazê-la com cinco páginas"], answer: 1, why: "A sua carta deve soar como você." },
      { objective: "O5", q: "STAR quer dizer:", options: ["Competências, formação, prémios, posto", "Começar, tentar, responder, repetir", "Situação, tarefa, ação, resultado", "Falar, pensar, agir, descansar"], answer: 2, why: "STAR é uma forma de contar uma história curta de trabalho." },
      { objective: "O5", q: "Quando a IA faz de entrevistador, um bom pedido é:", options: ["\"Faça todas as perguntas de uma vez\"", "\"Responda por mim\"", "\"Diga-me que sou perfeito\"", "\"Faça uma pergunta de cada vez e dê um ponto forte e uma correção\""], answer: 3, why: "Uma de cada vez, com comentários, cria uma competência real." },
      { objective: "O5", q: "Praticar as respostas de entrevista em voz alta ajuda porque:", options: ["Falar é diferente de ler; torna as respostas naturais", "É obrigatório", "A IA não consegue ler texto", "É mais rápido do que escrever"], answer: 0, why: "Dizer em voz alta prepara-o para a entrevista verdadeira." },
      { objective: "O6", q: "Onde são publicados os empregos federais?", options: ["Só nas redes sociais", "No USAJOBS", "Em SMS", "Só nas bases"], answer: 1, why: "O USAJOBS é o site de emprego do governo federal." },
      { objective: "O6", q: "Um recrutador envia-lhe um cheque para depositar e pede-lhe para devolver uma parte. Isto é:", options: ["Um bónus de entrada", "Um benefício da VA", "Um sinal de alerta de burla de emprego", "A integração normal num emprego"], answer: 2, why: "O cheque para depositar e devolver é uma burla comum." },
      { objective: "O6", q: "Quando pode dar o seu número da Segurança Social a um empregador?", options: ["Na primeira conversa por mensagens", "Para ter uma entrevista", "Antes de qualquer oferta", "Para a papelada verdadeira depois de uma oferta real, pelo processo oficial"], answer: 3, why: "Os empregadores verdadeiros só precisam dele para a papelada da contratação depois de uma oferta." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      5,
      7,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Adaptado ao anúncio",
        objective: "O2",
        notYet: "O currículo podia ser para qualquer emprego; aparecem poucas palavras-chave do anúncio.",
        meets: "O currículo usa as palavras-chave do anúncio e mostra os requisitos obrigatórios que o aluno cumpre.",
        exceeds: "O aluno sabe mostrar onde aparece cada requisito obrigatório."
      },
      {
        name: "Tópicos civis com números",
        objective: "O3",
        notYet: "Menos de cinco tópicos, ou tópicos com gíria militar e sem números.",
        meets: "Pelo menos cinco tópicos em palavras civis, com números ou resultados, numa página.",
        exceeds: "Cada tópico mostra o que foi feito, de que tamanho era e o resultado."
      },
      {
        name: "Verdadeiro e privado",
        objective: "O6",
        notYet: "Alguma coisa não é verdade, ou aparece o número da Segurança Social, dados do DD-214 ou outro número privado.",
        meets: "Tudo é verdade e não aparece nenhum número privado.",
        exceeds: "Um conselheiro ou um leitor de confiança verificou-o."
      },
      {
        name: "Resposta de 60 segundos",
        objective: "O5",
        notYet: "A resposta é muito mais longa do que 60 segundos ou não é sobre este emprego.",
        meets: "Cerca de 60 segundos: quem é, a experiência importante e porque este emprego, dita em voz alta duas vezes.",
        exceeds: "O aluno usou os comentários da IA para melhorar uma parte entre as duas tentativas."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a pelo menos um emprego com o currículo adaptado em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem uma entrevista ou uma oferta de emprego em 90 dias",
      "Alunos que contactam o TAP, um American Job Center ou o aconselhamento de carreira da VA em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet (um smartphone serve para praticar entrevistas)",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Um anúncio de emprego civil real que o aluno quer",
      "Um processador de texto, como o Google Docs ou o Microsoft Word, para o currículo",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada aluno para trazer um anúncio de emprego real para a primeira sessão.",
      "Lembre aos alunos que o número da Segurança Social, os dados do DD-214 e outros números privados nunca vão para um pedido à IA nem para um currículo.",
      "Depois da prática com a IA, faça a prática de entrevista em pares: um pergunta, o outro responde em voz alta, e depois trocam.",
      "Avalie o currículo final e a resposta com a grelha de avaliação, e dê comentários sobre uma linha Ainda não de cada vez.",
      "Depois do curso, ponha os alunos em contacto com o TAP, um American Job Center ou o aconselhamento de carreira da VA para uma revisão."
    ]
  }
};
