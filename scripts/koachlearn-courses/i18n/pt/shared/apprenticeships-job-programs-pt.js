"use strict";

// Koach Learn course (Portuguese translation of shared/apprenticeships-job-programs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course is about US programs: US names (apprenticeship.gov, American Job Center, WIOA, Job Corps, GI Bill) are kept and explained.

module.exports = {
  id: "apprenticeships-job-programs-pt",
  lang: "pt",
  translationOf: "apprenticeships-job-programs",
  category: "Workforce Development",
  name: "Encontrar Aprendizagens e Programas de Formação Profissional",
  skills: "Distinguir os tipos de programa, Pesquisar no apprenticeship.gov, Usar um American Job Center, Verificar se um programa é verdadeiro, Reunir os documentos da candidatura, Fazer um plano de candidatura",
  outcome: "encontrar aprendizagens verdadeiras e programas de formação profissional gratuitos ou baratos perto de você, verificar se são verdadeiros e se servem para você, reunir o que precisa para se candidatar e fazer um plano com datas para se candidatar a dois deles.",
  about: [
    "Este curso é para quem quer receber um salário enquanto aprende um ofício, ou ter formação gratuita para um emprego melhor: jovens que saem da escola, adultos que mudam de carreira, veteranos e pessoas que voltam para casa depois da prisão.",
    "Você vai aprender a diferença entre uma aprendizagem, uma pré-aprendizagem e um programa de formação profissional; a pesquisar no Job Finder oficial do apprenticeship.gov; a usar o seu American Job Center local; a reconhecer programas falsos e burlas de emprego; e a reunir os papéis que os programas pedem.",
    "Este curso PREPARA você para encontrar programas e se candidatar. Não inscreve você em nenhum programa nem promete uma vaga. As regras, as idades e as vagas mudam, por isso cada lição mostra a página oficial onde deve verificar.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" em papel ou no telefone. Há uma verificação rápida depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um \"Plano de Candidatura a Programas\" de uma página: o emprego que quer; dois programas verdadeiros que encontrou (no apprenticeship.gov, num American Job Center, no Job Corps, no YouthBuild, num sindicato ou numa faculdade), com o patrocinador, o local, os requisitos e a forma de se candidatar de cada um; as verificações que fez para ter a certeza de que cada um é verdadeiro; uma lista dos documentos que já tem e dos que ainda precisa; e cinco próximos passos, cada um com uma data.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas à procura de emprego nos EUA, a partir dos 16 anos: jovens que saem do ensino secundário ou que não têm diploma, adultos que mudam de carreira, veteranos e pessoas que voltam para casa depois da prisão. Muitos vivem em comunidades de baixos rendimentos ou rurais e precisam de ganhar dinheiro enquanto fazem a formação.",
    startingPoint: "Sabem usar um telefone ou um computador da biblioteca para pesquisar na internet. A maioria já ouviu falar de aprendizagens ou de formação, mas não sabe como encontrar um programa verdadeiro, quem o paga nem o que precisa para se candidatar. Alguns já foram alvo de burlas em que se paga para ter formação.",
    gap: "Há aprendizagens pagas e formação gratuita em todos os estados, mas as pessoas perdem-nas porque não sabem onde procurar nem o que perguntar. Os alunos precisam de encontrar programas verdadeiros em sites oficiais, verificá-los e candidatar-se a tempo, para passarem a um emprego mais bem pago sem ficarem com dívidas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca ou do centro de emprego com tempo limitado",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e a escola",
      "Os programas, as idades e as regras são diferentes em cada estado e mudam; os alunos verificam as páginas oficiais (apprenticeship.gov, dol.gov, jobcorps.gov, va.gov)",
      "Risco de burla: nunca pague para ter um emprego e nunca partilhe números privados nas tarefas de prática"
    ],
    prerequisites: "Nenhum. Quem ainda não escolheu uma área pode fazer primeiro o curso \"Carreiras nos Ofícios Especializados\"; quem precisa de um currículo pode fazer \"Currículo, LinkedIn e Entrevistas\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com descrições curtas de cinco programas", action: "identificar cada um como uma aprendizagem, uma pré-aprendizagem ou um programa de formação profissional", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Usando o Job Finder do apprenticeship.gov num telefone ou num computador", action: "procurar aprendizagens na sua área de trabalho e na sua região e anotar dois anúncios", standard: "com o patrocinador, o local e a forma de se candidatar de cada um" },
    { id: "O3", condition: "Usando o CareerOneStop ou a linha telefónica do DOL", action: "encontrar o American Job Center mais perto e escrever perguntas sobre formação gratuita", standard: "com pelo menos quatro perguntas, uma delas sobre fundos para a formação" },
    { id: "O4", condition: "Com um anúncio ou uma oferta de um programa", action: "verificar se o programa é verdadeiro e se vale o seu tempo", standard: "usando pelo menos três verificações, incluindo os sinais de alerta de uma burla em que se paga para ter um emprego" },
    { id: "O5", condition: "Para um programa que quer", action: "fazer a lista dos requisitos e dos documentos de que precisa para se candidatar", standard: "marcando os que já tem e onde arranjar os outros" },
    { id: "O6", condition: "Para dois programas que encontrou", action: "escrever um plano de candidatura com próximos passos e datas", standard: "com pelo menos cinco passos, os prazos e uma data de seguimento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer as opções e onde encontrá-las",
      lessons: [
        {
          title: "Aprendizagem, pré-aprendizagem ou programa de formação?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar os três principais tipos de programa e qual serve para você agora.",
          text: [
            "Uma Registered Apprenticeship (aprendizagem registada) é um emprego. O site apprenticeship.gov, do Departamento do Trabalho dos EUA, diz que os aprendizes recebem um salário desde o primeiro dia, têm aumentos à medida que as suas competências crescem, aprendem no trabalho e em aulas, e terminam com um certificado reconhecido em toda a sua área. Você candidata-se ao empregador ou ao patrocinador do programa, quase como a um emprego.",
            "Uma pré-aprendizagem prepara você para uma aprendizagem. O apprenticeship.gov diz que pode durar de algumas semanas a alguns meses, e o salário ou a bolsa não são obrigatórios. Muitas vezes ensina matemática básica, segurança e preparação para o trabalho. O YouthBuild é um exemplo para jovens.",
            "Um programa de formação profissional ensina competências para um emprego, muitas vezes numa sala de aula, e ajuda a encontrar trabalho no fim. Exemplos são o Job Corps, os certificados das faculdades comunitárias e a formação paga através do seu American Job Center local. Alguns são gratuitos; outros ajudam com os custos; normalmente não recebe salário enquanto aprende.",
            "Pergunte a si mesmo: preciso de ganhar dinheiro já (aprendizagem), preciso de me preparar primeiro (pré-aprendizagem) ou preciso de um curso curto para ter as condições para um emprego (programa de formação)?"
          ],
          words: [["Registered Apprenticeship (aprendizagem registada)", "um emprego pago com formação, aprovado pelo Departamento do Trabalho ou por um estado, que termina com um certificado reconhecido."], ["Pré-aprendizagem", "um programa curto que prepara você para entrar numa aprendizagem."], ["Patrocinador", "o empregador, o sindicato ou o grupo que organiza uma aprendizagem e contrata os aprendizes."], ["Bolsa", "um pequeno pagamento para ajudar com os custos durante a formação; não é um salário completo."], ["Certificado", "uma prova de uma competência, como um diploma de curso ou uma licença."]],
          slides: [
            { title: "Aprendizagem registada", bullets: ["Um emprego pago com formação", "Salário desde o primeiro dia, aumentos à medida que aprende", "Termina com um certificado reconhecido na área"] },
            { title: "Pré-aprendizagem", bullets: ["Prepara você para uma aprendizagem", "De algumas semanas a alguns meses", "Salário ou bolsa não são obrigatórios"] },
            { title: "Programa de formação profissional", bullets: ["Ensina competências para um emprego, muitas vezes em aula", "Exemplos: Job Corps, certificados de faculdade, formação do AJC", "Normalmente sem salário enquanto aprende"] },
            { title: "O que serve para você agora?", bullets: ["Precisa de ganhar já: aprendizagem", "Precisa de se preparar: pré-aprendizagem", "Precisa de um curso curto: programa de formação"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Career seekers (para quem procura uma carreira)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: What is a pre-apprenticeship? (o que é uma pré-aprendizagem)", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "Departamento do Trabalho dos EUA: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" }
          ],
          tryIt: "Num papel, faça três colunas: Aprendizagem, Pré-aprendizagem, Programa de formação. Escreva duas coisas boas e uma coisa difícil de cada uma para a SUA vida agora. Faça um círculo à volta da que serve melhor para você hoje.",
          youCanNow: "distinguir uma aprendizagem, uma pré-aprendizagem e um programa de formação profissional e escolher o tipo que serve para você agora.",
          quickCheck: [
            { objective: "O1", q: "Que programa paga um salário enquanto aprende no trabalho?", options: ["Um curso gratuito de vídeos na internet", "Uma aprendizagem registada", "Uma oficina na biblioteca", "Um site de testes de prática"], answer: 1, why: "Uma aprendizagem registada é um emprego pago com formação." },
            { objective: "O1", q: "Um programa de 10 semanas ensina matemática e segurança da construção para ajudar a entrar numa aprendizagem. O que é?", options: ["Uma pré-aprendizagem", "Um curso universitário", "Uma aprendizagem registada", "Um emprego temporário"], answer: 0, why: "Uma pré-aprendizagem prepara para entrar numa aprendizagem e pode durar de semanas a meses." }
          ]
        },
        {
          title: "Pesquisar no Job Finder do apprenticeship.gov",
          objectives: ["O2"],
          minutes: 5,
          goal: "Pesquisar no Job Finder oficial e anotar dois anúncios de aprendizagem perto de você.",
          text: [
            "O apprenticeship.gov é o site oficial de aprendizagens do Departamento do Trabalho dos EUA. O seu Apprenticeship Job Finder (pesquisa de aprendizagens) deixa você escrever uma carreira ou um local para encontrar vagas perto de você.",
            "O Job Finder junta anúncios de várias fontes. Cada anúncio tem uma etiqueta, como \"Registered Occupation\" ou \"Registered Partner\". Você candidata-se diretamente ao empregador ou ao patrocinador, não através do apprenticeship.gov.",
            "Experimente mais do que uma palavra, em inglês: \"electrician\" (eletricista), \"plumber\" (canalizador), \"IT support\" (apoio informático), \"medical assistant\" (assistente médico), \"truck driver\" (motorista de camião). As aprendizagens não são só na construção; também há na saúde, na informática, na indústria e noutras áreas. Se não encontrar nada perto, experimente uma cidade maior perto de você ou outro nome de emprego.",
            "Anote o que encontrar antes de fechar a página. Os anúncios mudam, por isso a data em que o viu é importante."
          ],
          steps: ["Vá ao apprenticeship.gov e abra o Apprenticeship Job Finder.", "Escreva uma carreira, a sua cidade ou o seu ZIP code, ou as duas coisas.", "Abra um anúncio e leia quem é o patrocinador, onde fica e como se candidatar.", "Anote o patrocinador, o nome do emprego, o local, como se candidatar e a data de hoje.", "Repita com outro nome de emprego até ter dois anúncios."],
          words: [["Anúncio", "uma vaga de emprego ou de programa publicada num site."], ["Carreira", "o tipo de trabalho que quer fazer ao longo do tempo, como eletricista ou apoio informático."], ["ZIP code", "o código postal de cinco algarismos da sua zona numa morada dos EUA."]],
          slides: [
            { title: "O sítio oficial para pesquisar", bullets: ["apprenticeship.gov, do Departamento do Trabalho dos EUA", "Use o Apprenticeship Job Finder", "Pesquise por carreira, por local ou pelos dois"] },
            { title: "Ler um anúncio", bullets: ["Quem é o patrocinador ou o empregador", "Onde fica o emprego", "Como se candidatar: diretamente ao patrocinador"] },
            { title: "Dicas de pesquisa", bullets: ["Experimente vários nomes de emprego", "Não é só construção: saúde, informática, indústria", "Nada perto? Experimente uma cidade maior perto de você"] },
            { title: "Anote", bullets: ["Patrocinador, nome do emprego, local", "Como se candidatar e a data em que o viu"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (pesquisa de aprendizagens)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov: Career seekers (para quem procura uma carreira)", url: "https://www.apprenticeship.gov/career-seekers" }
          ],
          tryIt: "Abra o Apprenticeship Job Finder. Procure uma carreira de que gosta perto do seu ZIP code. Anote dois anúncios: patrocinador, nome do emprego, local, como se candidatar e a data de hoje. Se não encontrar nenhum, experimente outros dois nomes de emprego ou uma cidade perto.",
          youCanNow: "pesquisar no Job Finder do apprenticeship.gov e anotar dois anúncios verdadeiros com a forma de se candidatar.",
          quickCheck: [
            { objective: "O2", q: "Encontrou uma aprendizagem no Job Finder. A quem se candidata?", options: ["À Casa Branca", "Aos funcionários do apprenticeship.gov", "A qualquer site que copie o anúncio", "Ao empregador ou ao patrocinador do anúncio"], answer: 3, why: "O apprenticeship.gov diz que se candidata diretamente ao empregador ou ao patrocinador." },
            { objective: "O2", q: "A sua pesquisa de \"electrician\" na sua pequena cidade não mostra nada. Qual é um bom próximo passo?", options: ["Desistir das aprendizagens", "Pagar a um site para encontrar uma por você", "Experimentar uma cidade maior perto ou outro nome de emprego", "Pesquisar só uma vez por ano"], answer: 2, why: "Alargar a zona ou experimentar outros nomes encontra muitas vezes anúncios que a primeira pesquisa não mostrou." }
          ]
        },
        {
          title: "O seu American Job Center e os programas de formação gratuitos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Encontrar o American Job Center mais perto e escrever as perguntas que vai fazer sobre formação gratuita.",
          text: [
            "Os American Job Centers (AJC, centros de emprego) são escritórios públicos gratuitos, com fundos do Departamento do Trabalho dos EUA (DOL), que ajudam as pessoas a encontrar emprego e formação. Encontre um no CareerOneStop.org (do Departamento do Trabalho) ou ligue para a linha do DOL 1-877-US-2JOBS (1-877-872-5627). Alguns estados dão-lhes um nome local, como WorkSource ou career center.",
            "Através da Workforce Innovation and Opportunity Act (WIOA, uma lei dos EUA), os funcionários do AJC podem oferecer serviços de carreira e ajuda para pagar a formação, se você cumprir as condições. O Departamento do Trabalho diz que a prioridade é para pessoas que recebem apoios sociais, outras pessoas de baixos rendimentos e pessoas que precisam de ajuda com competências básicas, e os veteranos têm prioridade de atendimento em todos os programas de emprego pagos pelo DOL. Os serviços variam de estado para estado, por isso pergunte.",
            "Outros programas sobre os quais pode perguntar: Job Corps (formação e alojamento gratuitos para jovens adultos, em geral dos 16 aos 24 anos; veja jobcorps.gov ou ligue 800-733-5627 para saber as vagas atuais); YouthBuild (dos 16 aos 24 anos, para quem saiu da escola sem diploma: construção e outras competências enquanto termina a escola); Reentry Employment Opportunities, para pessoas que voltam da prisão; e, para veteranos, o GI Bill, que o VA diz que pode ser usado em muitas aprendizagens e formações no trabalho.",
            "Vá com as perguntas escritas. Assim aproveita mais uma só visita."
          ],
          steps: ["Pesquise no CareerOneStop \"American Job Center\" e o seu ZIP code, ou ligue 1-877-US-2JOBS.", "Anote a morada, o horário e o número de telefone do centro.", "Escreva as suas perguntas: fundos para a formação, programas perto, aprendizagens, ajuda para a sua situação.", "Ligue ou vá lá e tome notas, incluindo o nome da pessoa com quem falou."],
          words: [["American Job Center (AJC)", "um escritório público gratuito que ajuda as pessoas a encontrar emprego e formação."], ["WIOA", "a Workforce Innovation and Opportunity Act, a lei dos EUA que paga os centros de emprego e a ajuda para a formação."], ["Cumprir as condições", "ter o que as regras pedem para receber um serviço."], ["Prioridade de atendimento", "ser atendido primeiro; os veteranos têm-na nos programas de emprego pagos pelo DOL."], ["GI Bill", "apoios do VA (serviço dos veteranos) para os estudos de veteranos e de alguns familiares."]],
          slides: [
            { title: "American Job Centers", bullets: ["Escritórios públicos gratuitos para emprego e formação", "Encontre um: CareerOneStop.org ou 1-877-US-2JOBS", "Podem ter um nome local no seu estado"] },
            { title: "Ajuda para pagar a formação (WIOA)", bullets: ["Serviços de carreira e fundos para a formação, se cumprir as condições", "Prioridade: apoios sociais, baixos rendimentos, competências básicas", "Os veteranos têm prioridade de atendimento"] },
            { title: "Mais programas sobre os quais perguntar", bullets: ["Job Corps: em geral 16-24 anos, gratuito, confirme as vagas", "YouthBuild: 16-24 anos sem diploma", "Programas de reintegração; GI Bill para aprendizagens de veteranos"] },
            { title: "Vá preparado", bullets: ["Escreva primeiro as suas perguntas", "Tome notas e o nome do funcionário"] }
          ],
          sources: [
            { name: "Departamento do Trabalho dos EUA: programa WIOA para adultos", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" },
            { name: "CareerOneStop: encontrar um American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "Job Corps", url: "https://www.jobcorps.gov/" },
            { name: "Departamento do Trabalho dos EUA: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" },
            { name: "Departamento do Trabalho dos EUA: programas para jovens e de reintegração", url: "https://www.dol.gov/agencies/eta/youth" },
            { name: "VA: formação no trabalho e aprendizagens", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Encontre o American Job Center mais perto e anote a morada, o horário e o telefone. Depois escreva quatro perguntas, por exemplo: \"A WIOA pode ajudar a pagar a formação na minha área?\", \"Que aprendizagens ou pré-aprendizagens há perto daqui?\", \"Há ajuda para jovens adultos, veteranos ou pessoas com registo criminal?\", \"O que devo levar na primeira visita?\"",
          youCanNow: "encontrar o seu American Job Center e ir lá com perguntas sobre formação gratuita e programas.",
          quickCheck: [
            { objective: "O3", q: "Onde pode ter ajuda gratuita para encontrar dinheiro para a formação e programas perto de você?", options: ["Num American Job Center", "Numa publicação de um desconhecido nas redes sociais", "Numa empresa que cobra para lhe arranjar colocação", "Só numa faculdade privada"], answer: 0, why: "Os American Job Centers são escritórios públicos gratuitos que ajudam com emprego e formação, incluindo os fundos da WIOA." },
            { objective: "O3", q: "Qual é a melhor pergunta para fazer num American Job Center?", options: ["\"Pode fazer o meu trabalho por mim?\"", "\"Vendem cartões-presente?\"", "\"Qual é a sua morada de casa?\"", "\"A WIOA pode ajudar a pagar a formação na minha área?\""], answer: 3, why: "Perguntar pelos fundos da WIOA pode abrir a porta a formação gratuita, se cumprir as condições." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer as opções e onde encontrá-las",
        questions: [
          { objective: "O1", q: "O que é verdade sobre uma aprendizagem registada?", options: ["Paga uma taxa alta para entrar", "Recebe um salário e aprende no trabalho", "É só um curso em sala de aula", "Nunca termina com um certificado"], answer: 1, why: "Os aprendizes recebem um salário desde o primeiro dia e terminam com um certificado reconhecido." },
          { objective: "O1", q: "A Maya, de 19 anos, não tem diploma e quer competências de construção enquanto termina a escola. Que programa serve?", options: ["Uma universidade de quatro anos", "Um empréstimo privado", "YouthBuild", "Um estágio sem pagamento no estrangeiro"], answer: 2, why: "O YouthBuild é para jovens dos 16 aos 24 anos que saíram da escola sem diploma e junta competências de trabalho e escola." },
          { objective: "O2", q: "Qual é o site oficial dos EUA para procurar aprendizagens?", options: ["apprenticeship.gov", "Qualquer site com \"jobs\" no nome", "Um grupo nas redes sociais", "Um link numa mensagem de texto"], answer: 0, why: "O apprenticeship.gov é o site oficial de aprendizagens do Departamento do Trabalho dos EUA, com o Job Finder." },
          { objective: "O2", q: "O que deve anotar de cada anúncio?", options: ["Só a cor do logótipo", "Nada; pode encontrá-lo depois", "A sua palavra-passe do site", "Patrocinador, nome do emprego, local, como se candidatar e a data"], answer: 3, why: "Os anúncios mudam, por isso anota os dados principais e a data em que os viu." },
          { objective: "O3", q: "O Darnell é veterano. O que diz o Departamento do Trabalho que ele tem nos programas de emprego pagos pelo DOL?", options: ["Nada a mais", "Um carro gratuito", "Prioridade de atendimento", "Um emprego garantido"], answer: 2, why: "Os veteranos têm prioridade de atendimento em todos os programas de emprego pagos pelo DOL." }
        ]
      }
    },
    {
      name: "Capítulo 2: Escolher bem e candidatar-se",
      lessons: [
        {
          title: "O programa é verdadeiro e vale a pena?",
          objectives: ["O4"],
          minutes: 5,
          goal: "Verificar num anúncio de um programa os sinais de que é verdadeiro e os sinais de uma burla.",
          text: [
            "Alguns anúncios prometem \"empregos garantidos\" se pagar uma formação ou um certificado. A FTC diz que os empregadores honestos, incluindo o governo federal, nunca pedem para pagar para ter um emprego, e que pagar por \"formações\" ou certificados inúteis é uma burla comum.",
            "Outros sinais de alerta da FTC: um cheque que tem de depositar e depois devolver parte do dinheiro, uma taxa adiantada de uma empresa de colocação, um desconhecido que contacta você do nada com um emprego, e muito dinheiro por pouco trabalho.",
            "Sinais de que um programa é verdadeiro: está na lista do apprenticeship.gov, do seu American Job Center, de um site .gov do estado, de um sindicato ou de uma faculdade comunitária; você consegue encontrar sozinho a morada e o telefone; e diz com clareza quanto custa, quanto tempo dura, que certificado recebe e quantas pessoas terminam e arranjam emprego.",
            "Um programa verdadeiro pode mesmo assim não servir para você. Veja o horário, o local e a viagem, e se o certificado é um que os empregadores da sua zona pedem."
          ],
          steps: ["Procure o programa num site oficial (apprenticeship.gov, o seu AJC, um site .gov do estado, um sindicato ou uma faculdade).", "Encontre você mesmo a morada e o telefone; não use só o número do anúncio.", "Procure sinais de burla: pagar para ter o emprego, taxas adiantadas, cheque para devolver, salário bom demais.", "Pergunte: custo, duração, certificado, horário e quantos terminam e arranjam emprego.", "Não tem a certeza? Pergunte ao seu American Job Center antes de assinar ou pagar alguma coisa."],
          words: [["Burla", "um truque para ficar com o seu dinheiro ou com as suas informações pessoais."], ["Taxa adiantada", "dinheiro que tem de pagar antes de receber alguma coisa."], ["FTC", "a Federal Trade Commission, o serviço do governo dos EUA que avisa sobre as burlas e as combate."], ["Taxa de conclusão", "quantas das pessoas que começam um programa o terminam."]],
          slides: [
            { title: "Nunca pague para ter um emprego", bullets: ["FTC: empregadores honestos nunca pedem para pagar para contratar", "Cuidado com \"formação\" paga que promete um emprego"] },
            { title: "Sinais de alerta de burla", bullets: ["Taxas adiantadas para lhe arranjar colocação", "Depositar um cheque e devolver dinheiro", "Um desconhecido oferece emprego; muito dinheiro, pouco trabalho"] },
            { title: "Sinais de que é verdadeiro", bullets: ["Está no apprenticeship.gov, num AJC, .gov, sindicato ou faculdade", "Você encontra sozinho a morada e o telefone", "Custo, duração, certificado e resultados de emprego claros"] },
            { title: "Verdadeiro, mas serve para você?", bullets: ["Horário e viagem", "Um certificado que os empregadores da zona querem"] }
          ],
          sources: [
            { name: "FTC: Job scams (burlas de emprego)", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (pesquisa de aprendizagens)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Escolha um programa que encontrou na lição 2 ou 3. Faça três verificações: está numa lista oficial, consegue encontrar sozinho a morada e o telefone, e tem algum sinal de burla? Escreva \"verdadeiro\", \"não sei\" ou \"burla\" e porquê. Depois leia este anúncio inventado e faça a lista dos sinais de alerta: \"Tenha um emprego garantido de $40/hora! Pague hoje $300 pelo seu certificado. Mande-nos uma mensagem já.\"",
          youCanNow: "verificar se um programa é verdadeiro e vale o seu tempo, e reconhecer os sinais de uma burla em que se paga para ter um emprego.",
          quickCheck: [
            { objective: "O4", q: "Um anúncio diz: \"Pague $250 pelo seu certificado e tenha um emprego garantido.\" O que faz?", options: ["Paga depressa antes que acabem as vagas", "Envia os seus dados bancários para reservar uma vaga", "Trata-o como uma provável burla e confirma com o seu AJC", "Partilha-o com amigos para eles também pagarem"], answer: 2, why: "A FTC diz que os empregadores honestos nunca pedem para pagar para ter um emprego." },
            { objective: "O4", q: "Qual é um sinal de que um programa é verdadeiro?", options: ["Está na lista do apprenticeship.gov ou de um site .gov do estado", "Só tem um número de telefone numa mensagem", "Pede para depositar um cheque e devolver dinheiro", "Não diz quanto custa"], answer: 0, why: "Estar num site oficial e ser claro sobre os custos são sinais de um programa verdadeiro." }
          ]
        },
        {
          title: "Requisitos e documentos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Fazer a lista dos requisitos de um programa e dos documentos de que precisa, e marcar os que já tem.",
          text: [
            "Cada programa define os seus próprios requisitos, e eles estão no anúncio ou no site do patrocinador. Os mais comuns são uma idade mínima, um diploma do ensino secundário ou um equivalente (GED ou HiSET), um teste básico de matemática ou de leitura, conseguir fazer o trabalho físico, uma carta de condução válida para alguns ofícios e um teste de drogas.",
            "Documentos comuns: um documento de identificação com fotografia, uma prova do seu diploma ou equivalente, os certificados de notas da escola, um currículo e, às vezes, o cartão da Social Security (segurança social) ou uma prova de que pode trabalhar nos EUA. Os veteranos podem precisar do DD-214 para mostrar o seu serviço, e quem usa o GI Bill pede os apoios de estudos do VA.",
            "Ainda não tem algum? Mesmo assim pode planear. Um documento de identificação do estado (state ID) é passado pelo DMV do seu estado. Uma cópia do diploma vem da sua antiga escola ou do serviço de educação do estado. O American Job Center pode ajudar com muitos destes, e os programas de reintegração ajudam muitas vezes as pessoas que voltam para casa a tirar um documento de identificação.",
            "Guarde cópias, não os originais, numa só pasta. Nunca envie números privados a ninguém sem ter verificado que é verdadeiro."
          ],
          steps: ["Abra o anúncio ou a página do patrocinador e encontre os requisitos.", "Escreva cada requisito e cada documento numa lista de verificação.", "Marque cada um: Já tenho, Preciso ou Não sei.", "Ao lado de cada Preciso, escreva onde o vai arranjar.", "Ponha as cópias numa só pasta ou num lugar seguro no telefone."],
          words: [["Requisito", "algo que tem de ter ou de fazer para se candidatar, como uma idade mínima ou um diploma."], ["Equivalente", "um exame, como o GED ou o HiSET, que vale como um diploma do ensino secundário."], ["Certificado de notas", "a lista oficial das disciplinas e das notas de uma escola."], ["DD-214", "o documento militar que mostra o serviço e a saída de um veterano."]],
          slides: [
            { title: "Requisitos comuns", bullets: ["Idade mínima; diploma, GED ou HiSET", "Um teste básico de matemática ou de leitura", "Carta de condução ou teste de drogas para alguns ofícios"] },
            { title: "Documentos comuns", bullets: ["Identificação com fotografia; diploma ou equivalente; notas", "Currículo; prova de que pode trabalhar nos EUA", "Veteranos: DD-214"] },
            { title: "Falta alguma coisa?", bullets: ["Identificação do estado: o DMV do seu estado", "Cópia do diploma: a sua antiga escola ou o serviço do estado", "Peça ajuda ao seu AJC ou ao programa de reintegração"] },
            { title: "Guarde em segurança", bullets: ["Cópias, não originais, numa só pasta", "Envie números privados só a programas verificados"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Career seekers (para quem procura uma carreira)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "VA: formação no trabalho e aprendizagens", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Para um programa que quer, faça uma lista de verificação com todos os requisitos e documentos do anúncio. Marque cada um com Já tenho, Preciso ou Não sei, e escreva onde vai arranjar cada Preciso. Não escreva nenhum número de identificação verdadeiro na lista.",
          youCanNow: "fazer a lista dos requisitos e dos documentos de um programa, ver o que falta e saber onde arranjá-lo.",
          quickCheck: [
            { objective: "O5", q: "Onde encontra os requisitos exatos de um programa?", options: ["No palpite de um amigo", "No anúncio do programa ou no site do próprio patrocinador", "Em qualquer comentário nas redes sociais", "São iguais em todos os programas"], answer: 1, why: "Cada programa define os seus requisitos, por isso lê o anúncio ou a página oficial." },
            { objective: "O5", q: "O Luis, veterano, quer usar o GI Bill numa aprendizagem. Que documento vai provavelmente ajudar a mostrar o seu serviço?", options: ["Um cartão do ginásio", "Um cartão da biblioteca", "Um recibo de uma loja", "O seu DD-214"], answer: 3, why: "O DD-214 mostra o serviço e a saída de um veterano." }
          ]
        },
        {
          title: "Fazer o seu plano de candidatura",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escrever um plano de candidatura para dois programas com passos datados e uma data de seguimento.",
          text: [
            "As aprendizagens e os programas de formação muitas vezes só abrem candidaturas em certas alturas, e alguns enchem depressa. Um plano escrito com datas evita que perca o prazo.",
            "Para cada programa, escreva o prazo ou a próxima data de abertura, como se candidatar (pela internet, pessoalmente ou numa sessão de informação) e a data de algum teste. Se não encontrar uma data, o seu primeiro passo é ligar ou enviar um email a perguntar.",
            "Depois escreva os próximos passos, cada um com uma data: arranjar um documento que falta, atualizar o currículo, praticar para o teste de matemática, ir a uma sessão de informação, entregar a candidatura, fazer o seguimento. Um bom seguimento é uma chamada ou um email curto e educado cerca de uma a duas semanas depois de se candidatar, a menos que o programa lhe diga outra altura.",
            "Candidate-se a mais do que um programa. Se um disser que não ou o puser numa lista de espera, ainda tem outro caminho, e pode perguntar o que o tornaria um candidato mais forte da próxima vez."
          ],
          steps: ["Escolha dois programas que verificou que são verdadeiros.", "Escreva o prazo ou a próxima data de abertura de cada um e como se candidatar.", "Faça a lista dos próximos passos, com uma data para cada um.", "Ponha as datas no calendário do telefone ou num papel que vê todos os dias.", "Marque uma data de seguimento depois de se candidatar."],
          words: [["Prazo", "o último dia em que se pode candidatar."], ["Sessão de informação", "uma reunião em que um programa explica como funciona e como se candidatar."], ["Lista de espera", "uma lista de pessoas que vão ter uma vaga se alguma abrir."], ["Fazer o seguimento", "contactar um programa depois de se candidatar para saber da sua candidatura."]],
          slides: [
            { title: "Porquê um plano com datas", bullets: ["Muitos programas só abrem em certas alturas", "Alguns enchem depressa", "As datas evitam que perca o prazo"] },
            { title: "Para cada programa, escreva", bullets: ["O prazo ou a próxima data de abertura", "Como se candidatar e a data de algum teste", "Não encontrou a data? Ligue ou envie um email a perguntar"] },
            { title: "Passos, cada um com uma data", bullets: ["Arranjar documentos; atualizar o currículo", "Praticar para o teste; ir a uma sessão", "Candidatar-se e depois fazer o seguimento"] },
            { title: "Tenha sempre um segundo caminho", bullets: ["Candidate-se a dois programas", "Um não ou uma lista de espera não é o fim", "Pergunte como ser mais forte da próxima vez"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (pesquisa de aprendizagens)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Departamento do Trabalho dos EUA: programa WIOA para adultos", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" }
          ],
          tryIt: "Faça o seu Plano de Candidatura a Programas: o emprego que quer, dois programas verificados com os prazos e como se candidatar, a sua lista de documentos e cinco próximos passos com datas, terminando com uma data de seguimento. Ponha hoje a data do primeiro passo no telefone ou no calendário.",
          youCanNow: "escrever um plano de candidatura com passos datados para dois programas e fazer o seguimento depois de se candidatar.",
          quickCheck: [
            { objective: "O6", q: "Não consegue encontrar o prazo de candidatura de um programa. Qual é o seu primeiro passo?", options: ["Ligar ou enviar um email ao programa a perguntar", "Pensar que não há prazo", "Esperar até ao próximo ano", "Candidatar-se a um programa qualquer"], answer: 0, why: "Perguntar diretamente ao programa dá-lhe a data verdadeira para o seu plano." },
            { objective: "O6", q: "Porque é melhor candidatar-se a dois programas em vez de um?", options: ["Os programas exigem isso", "Fica mais barato", "Para ainda ter um caminho se um disser que não ou o puser em lista de espera", "Para não ter de cumprir os prazos"], answer: 2, why: "Um segundo programa mantém você a avançar se o primeiro não resultar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Escolher bem e candidatar-se",
        questions: [
          { objective: "O4", q: "Qual é um sinal de alerta de uma burla de emprego, segundo a FTC?", options: ["O programa está no apprenticeship.gov", "Tem de pagar para ter o emprego", "O programa mostra a sua morada", "O programa explica quanto tempo dura"], answer: 1, why: "A FTC diz que os empregadores honestos nunca pedem para pagar para ter um emprego." },
          { objective: "O4", q: "Recebeu um cheque de um \"novo empregador\" e tem de devolver parte dele em cartões-presente. O que é isto?", options: ["Um passo normal da contratação", "Um prémio de formação", "Uma provável burla", "Um reembolso de impostos"], answer: 2, why: "A FTC diz que nenhum empregador honesto envia um cheque e pede para devolver parte dele." },
          { objective: "O5", q: "Um anúncio pede o diploma do ensino secundário, e a Tasha passou no GED. O que é verdade?", options: ["O GED é muitas vezes aceite como equivalente ao ensino secundário; ela confirma no anúncio", "Ela nunca se pode candidatar", "Ela tem de pagar para o substituir", "Ela não o deve mencionar"], answer: 0, why: "O GED é um equivalente ao ensino secundário que muitos programas aceitam; o anúncio diz o que é preciso." },
          { objective: "O5", q: "Precisa de uma identificação do estado para se candidatar. Onde a costuma tirar?", options: ["Num grupo das redes sociais", "No DMV do seu estado", "Com o patrocinador da aprendizagem", "Em qualquer site que vende documentos de identificação"], answer: 1, why: "A identificação do estado é passada pelo DMV do seu estado; o seu AJC ou um programa de reintegração pode ajudar." },
          { objective: "O6", q: "Que passo do plano está mais bem escrito?", options: ["\"Candidatar-me um dia\"", "\"Pensar nisso\"", "\"Talvez no próximo mês\"", "\"Entregar a candidatura de eletricidade da ACME pela internet até 3 de março\""], answer: 3, why: "Um bom passo diz o quê, como e quando." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Encontrar Aprendizagens e Programas de Formação Profissional",
    questions: [
      { objective: "O1", q: "O que é uma aprendizagem registada?", options: ["Um emprego pago com formação que termina com um certificado reconhecido", "Um curso gratuito de vídeos", "Uma feira de emprego de um dia", "Um empréstimo para a faculdade"], answer: 0, why: "Os aprendizes recebem um salário, aprendem no trabalho e em aulas, e terminam com um certificado." },
      { objective: "O1", q: "Para que serve uma pré-aprendizagem?", options: ["Substituir o diploma do ensino secundário", "Preparar você para entrar numa aprendizagem", "Pagar dívidas", "Terminar um curso universitário de quatro anos"], answer: 1, why: "Uma pré-aprendizagem prepara as pessoas para entrarem numa aprendizagem registada." },
      { objective: "O1", q: "O Jamal precisa de ganhar dinheiro já e quer aprender um ofício. O que serve melhor?", options: ["Um curso na internet sem pagamento", "Um programa universitário longo", "Uma aprendizagem registada", "Esperar um ano"], answer: 2, why: "Uma aprendizagem paga um salário enquanto aprende." },
      { objective: "O2", q: "O que pode escrever no Job Finder do apprenticeship.gov?", options: ["O seu número da Social Security", "O PIN do seu banco", "A sua palavra-passe", "Uma carreira ou um local"], answer: 3, why: "O Job Finder pesquisa por carreira, por local ou pelos dois." },
      { objective: "O2", q: "Em que áreas há aprendizagens?", options: ["Só na construção", "Em muitas áreas, incluindo saúde, informática e indústria", "Só nas forças armadas", "Só na agricultura"], answer: 1, why: "Há aprendizagens em muitas áreas, não só na construção." },
      { objective: "O2", q: "Porque deve anotar a data em que viu um anúncio?", options: ["Os anúncios mudam, por isso a data mostra se está atualizado", "O site exige isso", "Para ter um desconto", "Não serve para nada"], answer: 0, why: "As vagas mudam, por isso anotar a data ajuda a saber quando agir ou verificar outra vez." },
      { objective: "O3", q: "Como pode encontrar o American Job Center mais perto?", options: ["Perguntar a um desconhecido na internet", "Pagar a uma empresa de colocação", "Pesquisar no CareerOneStop ou ligar 1-877-US-2JOBS", "Esperar por uma carta"], answer: 2, why: "O CareerOneStop e a linha gratuita do DOL ajudam a encontrar o seu AJC local." },
      { objective: "O3", q: "Que lei dos EUA paga os centros de emprego e pode ajudar quem cumpre as condições a pagar a formação?", options: ["WIOA", "HIPAA", "OSHA", "FAFSA"], answer: 0, why: "A Workforce Innovation and Opportunity Act paga os American Job Centers e a ajuda para a formação." },
      { objective: "O3", q: "A Kayla tem 20 anos e quer formação profissional gratuita com alojamento. Que programa deve verificar, incluindo a sua situação atual?", options: ["Um empréstimo rápido", "O anúncio de um curso intensivo privado", "Uma oferta de cartões-presente", "Job Corps"], answer: 3, why: "O Job Corps é um programa gratuito para jovens adultos, em geral dos 16 aos 24 anos; ela vê as vagas atuais no jobcorps.gov." },
      { objective: "O3", q: "Que apoio para veteranos diz o VA que pode ser usado em muitas aprendizagens e formações no trabalho?", options: ["Medicare", "O GI Bill", "O subsídio de desemprego", "Social Security"], answer: 1, why: "O VA diz que os apoios do GI Bill podem ser usados em muitas aprendizagens e formações no trabalho." },
      { objective: "O4", q: "Um site pede uma taxa para lhe dar uma candidatura a um \"emprego federal\". O que é verdade?", options: ["Tem de pagar para se candidatar", "É um desconto", "As candidaturas a empregos federais são gratuitas, por isso é um sinal de alerta", "Só os veteranos pagam"], answer: 2, why: "A FTC diz que as candidaturas oficiais a empregos federais e dos correios são sempre gratuitas." },
      { objective: "O4", q: "Como deve arranjar o número de telefone de um programa para o verificar?", options: ["Encontrá-lo você mesmo num site oficial", "Usar só o número do anúncio", "Perguntar à pessoa que lhe mandou a mensagem", "Não precisa de verificar"], answer: 0, why: "Encontrar você mesmo os contactos evita o número falso de um burlão." },
      { objective: "O4", q: "Um programa é verdadeiro, mas só tem aulas no seu horário de trabalho, a duas horas de distância. O que faz?", options: ["Inscreve-se na mesma e deixa o emprego", "Paga mais para reservar um lugar", "Ignora o horário", "Pensa se lhe serve e procura um programa mais perto ou com melhor horário"], answer: 3, why: "Um programa verdadeiro também tem de servir para o seu horário e a sua viagem." },
      { objective: "O4", q: "Qual destes NÃO é um sinal de burla de emprego?", options: ["Um desconhecido oferece muito dinheiro por pouco trabalho", "O programa está na lista do site .gov do seu estado", "Uma taxa adiantada de colocação", "Um cheque de que tem de devolver uma parte"], answer: 1, why: "Estar num site oficial .gov é um sinal de um programa verdadeiro." },
      { objective: "O5", q: "O que deve fazer com os documentos de que precisa para se candidatar?", options: ["Guardar cópias numa só pasta segura", "Publicá-los nas redes sociais", "Enviar os originais a quem os pedir", "Deitá-los fora depois de os usar uma vez"], answer: 0, why: "Cópias num só lugar seguro deixam você pronto e protegem os originais." },
      { objective: "O5", q: "A sua lista diz \"Certificado de notas: Preciso\". O que escreve ao lado?", options: ["Nada", "\"Desistir deste programa\"", "Onde o vai arranjar, por exemplo na sua antiga escola", "A sua palavra-passe"], answer: 2, why: "Escrever onde arranjar cada coisa que falta transforma a lista num plano." },
      { objective: "O5", q: "Qual é um requisito comum para uma aprendizagem?", options: ["Ter uma casa", "Um curso universitário para todos os ofícios", "Ser membro pago de um site", "Um diploma ou equivalente e um teste básico de matemática"], answer: 3, why: "Muitos programas pedem um diploma ou equivalente e um teste de competências básicas; o anúncio diz quais." },
      { objective: "O6", q: "Quando é uma boa altura para fazer o seguimento depois de se candidatar, se o programa não disser outra coisa?", options: ["Na mesma hora", "Cerca de uma a duas semanas depois", "Nunca", "Todos os dias"], answer: 1, why: "Um seguimento curto e educado depois de uma a duas semanas mostra interesse sem pressionar." },
      { objective: "O6", q: "O que torna útil um próximo passo do seu plano?", options: ["Tem uma ação e uma data", "É muito comprido", "Não tem data, por isso é flexível", "Está só na sua cabeça"], answer: 0, why: "Os passos com uma ação e uma data são os que se fazem de verdade." },
      { objective: "O6", q: "Um programa põe você numa lista de espera. Qual é a melhor coisa a fazer?", options: ["Deixar de procurar programas", "Pagar para subir na lista", "Nunca mais os contactar", "Continuar com a outra candidatura e perguntar como ser mais forte"], answer: 3, why: "Um segundo caminho e pedir comentários mantêm você a avançar." }
    ]
  },
  // ---- ADDIE: Avaliação (teste inicial) ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 3, 6, 7, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "O tipo certo de programa", objective: "O1", notYet: "O plano não diz se cada programa é uma aprendizagem, uma pré-aprendizagem ou um programa de formação.", meets: "Cada programa tem o tipo certo, e o aluno sabe dizer porque serve agora.", exceeds: "O plano também diz o que o aluno faria a seguir depois de o terminar (por exemplo, pré-aprendizagem e depois aprendizagem)." },
      { name: "Dois programas verdadeiros encontrados", objective: "O2", notYet: "Menos de dois programas, ou um programa sem patrocinador, local ou forma de se candidatar.", meets: "Dois programas com patrocinador, local e forma de se candidatar, do apprenticeship.gov, de um AJC ou de outra fonte oficial.", exceeds: "Também anota a data em que encontrou cada um e um programa de reserva." },
      { name: "Perguntas para o centro de emprego", objective: "O3", notYet: "Nenhum American Job Center nem perguntas na lista.", meets: "O AJC mais perto e pelo menos quatro perguntas, uma delas sobre fundos para a formação.", exceeds: "O aluno ligou ou foi lá e anotou as respostas e o nome do funcionário." },
      { name: "Programas verificados", objective: "O4", notYet: "Nenhuma verificação, ou um programa que pede uma taxa para ter o emprego.", meets: "Pelo menos três verificações por programa, incluindo os sinais de alerta de burla, com um resultado.", exceeds: "Também compara o custo, a duração, o certificado e os resultados de emprego dos dois programas." },
      { name: "Documentos prontos", objective: "O5", notYet: "Nenhuma lista de documentos, ou números de identificação verdadeiros escritos nela.", meets: "Requisitos e documentos marcados com Já tenho / Preciso, com onde arranjar cada coisa que falta.", exceeds: "Todas as coisas que faltam têm uma data para as arranjar." },
      { name: "Plano com datas", objective: "O6", notYet: "Os passos não têm datas, ou são menos de cinco.", meets: "Cinco ou mais passos com datas, prazos e uma data de seguimento.", exceeds: "O primeiro passo já está feito ou no calendário do aluno." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que entregam pelo menos uma candidatura a uma aprendizagem ou formação em 30 dias (inquérito de seguimento)",
      "Alunos que vão ou ligam a um American Job Center em 30 dias",
      "Alunos aceites numa aprendizagem, pré-aprendizagem ou programa de formação em 6 meses, segundo os alunos ou os programas parceiros",
      "Alunos que dizem ter evitado uma oferta em que se paga para ter um emprego"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet (serve um computador da biblioteca ou do American Job Center)",
      "Sites gratuitos: apprenticeship.gov, careeronestop.org, dol.gov, jobcorps.gov, va.gov",
      "Papel e caneta, ou uma aplicação de notas, para as listas e o plano",
      "Um calendário (no telefone ou em papel)",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão, com as pesquisas do \"Experimente agora\" feitas ao vivo; junte em pares os alunos com menos confiança na internet.",
      "Antes da sessão, procure o American Job Center, o YouthBuild e os programas de pré-aprendizagem da sua zona, para poder mostrar opções locais verdadeiras.",
      "A situação dos programas muda: veja o jobcorps.gov e o apprenticeship.gov na semana em que dá a aula e corrija o que estiver desatualizado.",
      "Nunca peça aos alunos para escrever números verdadeiros de identificação, da Social Security ou do banco nas folhas de prática.",
      "Para alunos em reintegração, tenha prontos os contactos dos programas locais de reintegração e de ajuda com documentos de identificação; para veteranos, a página do GI Bill do VA e a GI Bill Comparison Tool.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
