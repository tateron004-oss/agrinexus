"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-mother-child-health.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept from the English: no medicine doses, treatment plans or diagnosis; every lesson points to the clinic, the midwife, the community health worker and the ministry of health.

const WHO_ANC = { name: "OMS (WHO): Novas diretrizes sobre os cuidados pré-natais para uma experiência positiva da gravidez (oito contactos, o primeiro nas primeiras 12 semanas)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" };
const WHO_MATERNAL = { name: "Ficha informativa da OMS: Mortalidade materna (principais causas; cuidados qualificados antes, durante e depois do parto)", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" };
const WHO_NEWBORN = { name: "Ficha informativa da OMS: Mortalidade neonatal (cuidados ao recém-nascido e sinais de perigo no recém-nascido)", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" };
const WHO_IYCF = { name: "Ficha informativa da OMS: Alimentação do lactente e da criança pequena", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_DIARRHOEA = { name: "Ficha informativa da OMS: Doenças diarreicas (prevenção, cuidados em casa, sinais de desidratação)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_IMMUNIZATION = { name: "Ficha informativa da OMS: Cobertura vacinal (o que as vacinas infantis previnem)", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" };

module.exports = {
  id: "afr-mother-child-health-pt",
  lang: "pt",
  translationOf: "afr-mother-child-health",
  category: "Africa: Life and Work",
  name: "Saúde da Mãe e da Criança: Gravidez, Parto e os Primeiros Anos",
  skills: "Planear as consultas na clínica durante a gravidez, Reconhecer sinais de perigo na gravidez e depois do parto, Fazer um plano de parto, Cuidar de um recém-nascido nos primeiros dias, Reconhecer sinais de perigo num bebé ou numa criança pequena, Manter o cartão de saúde da criança em dia",
  outcome: "fazer um plano simples de saúde da família para uma gravidez e uma criança pequena: quando ir à clínica, onde o bebé vai nascer e como vão chegar lá, como cuidar do recém-nascido, que sinais de perigo querem dizer \"vá já à clínica\" e como manter as vacinas e as consultas de crescimento em dia.",
  about: [
    "Este curso é para mães e futuras mães, pais, avós, irmãs mais velhas e qualquer pessoa que ajuda a cuidar de uma mulher grávida ou de uma criança pequena, nas cidades e nas aldeias de toda a África. Não precisa de nenhuma formação em saúde.",
    "O Capítulo 1 trata da gravidez e do parto: as consultas na clínica, os sinais de perigo que querem dizer \"vá já\" e o plano de parto. O Capítulo 2 trata dos primeiros dias e dos primeiros anos do bebé: os cuidados ao recém-nascido, os sinais de perigo nos bebés e nas crianças pequenas, e a alimentação, as vacinas e as consultas de crescimento.",
    "Este curso ensina a prevenção, os hábitos saudáveis e quando pedir ajuda. Não diz que medicamento tomar nem quanto, e não substitui a enfermeira, a parteira, o médico ou o agente comunitário de saúde. Siga sempre a sua clínica e o ministério da saúde do seu país. Cada lição dura cerca de cinco minutos e acaba com uma tarefa. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano de saúde da família de uma página para uma gravidez ou uma criança pequena da sua família (ou para um exemplo, como a Amina, grávida de 5 meses em Kano, ou o bebé Kofi, de 3 meses, em Kumasi): as consultas na clínica que ainda faltam, o plano de parto (lugar, profissional de saúde qualificado, transporte, dinheiro guardado, quem vai com ela e quem toma conta da casa), os cuidados ao recém-nascido no primeiro dia, os sinais de perigo para a mãe e para a criança com a clínica mais próxima e um número de telefone de emergência, e as datas da próxima vacina e da próxima consulta de crescimento tiradas do cartão de saúde.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Mães e futuras mães, pais, avós e outras pessoas que cuidam de crianças no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim, no Egito e em toda a África. Muitos vivem longe de um hospital, usam um telefone Android simples com dados caros e recebem conselhos de saúde da família, dos vizinhos e do agente comunitário de saúde.",
    startingPoint: "A maioria sabe que as mulheres grávidas devem ir à clínica, mas muitas começam tarde, vão menos vezes do que o aconselhado ou esperam em casa quando aparece um sinal de perigo. Poucas têm um plano de parto escrito, dinheiro guardado para o transporte ou uma lista dos sinais de perigo no recém-nascido e na criança. Muitas guardam o cartão de saúde da criança, mas não leem nele a data da próxima vacina.",
    gap: "A África Subsariana tem a maior parte das mortes do mundo na gravidez e no parto, e o primeiro mês é o tempo mais perigoso para um bebé. Muitas destas mortes acontecem por atrasos: em decidir ir, em chegar lá e em receber cuidados. As famílias que planeiam com antecedência, conhecem os sinais de perigo e vão às consultas a tempo agem mais depressa e mantêm as mães e as crianças mais seguras.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra de saúde é explicada",
      "Aparelhos: um telefone simples; o curso também pode ser dado em voz alta num grupo ou numa reunião de mulheres",
      "Os serviços de saúde, os programas de maternidade gratuita, os calendários de vacinação e os cartões de saúde mudam de país para país e com o tempo: os alunos confirmam com a clínica ou o ministério da saúde",
      "Sem doses de medicamentos, planos de tratamento nem diagnósticos: o curso ensina a prevenção e quando pedir ajuda",
      "Privacidade: os alunos nunca têm de partilhar no grupo os dados da sua própria gravidez ou saúde"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma gravidez na sua família e o mês previsto do parto", action: "escrever um plano de consultas na clínica para a gravidez que comece nas primeiras 12 semanas", standard: "com pelo menos oito contactos, como a OMS aconselha, ou o número que a sua clínica lhe der" },
    { id: "O2", condition: "Com uma lista de sinais durante a gravidez ou depois do parto", action: "escolher os sinais de perigo que querem dizer que a mulher tem de ir já à clínica", standard: "acertando pelo menos 4 de 5 e escolhendo \"ir já\" em vez de \"esperar para ver\"" },
    { id: "O3", condition: "Para um parto que vai chegar", action: "escrever um plano de parto com a unidade de saúde, o transporte, o dinheiro guardado e as pessoas que vão ajudar", standard: "com todas as partes preenchidas e combinadas com a família antes do último mês" },
    { id: "O4", condition: "Para o primeiro dia de um bebé", action: "fazer a lista dos cuidados ao recém-nascido: manter o bebé quente, dar o peito na primeira hora e manter o cordão limpo e seco", standard: "pela ordem certa e sem práticas perigosas" },
    { id: "O5", condition: "Com a descrição de um bebé ou de uma criança pequena doente", action: "identificar os sinais de perigo que querem dizer que a criança tem de ir já à clínica", standard: "acertando pelo menos 4 de 5" },
    { id: "O6", condition: "Usando o cartão ou a caderneta de saúde de uma criança", action: "encontrar as datas da próxima vacina e da próxima consulta de crescimento e escrever o passo de alimentação para a idade da criança", standard: "sem nenhuma consulta perdida por planear" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Uma gravidez saudável e um parto seguro",
      lessons: [
        {
          title: "Consultas na clínica durante a gravidez",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escrever um plano de consultas na clínica para uma gravidez, a começar nas primeiras 12 semanas.",
          text: [
            "Os cuidados durante a gravidez chamam-se cuidados pré-natais. Em cada consulta, a enfermeira ou a parteira mede a tensão arterial da mãe, o peso e verifica o sangue, ouve o bebé e dá os cuidados que a clínica do seu país oferece. Muitos problemas podem ser encontrados cedo, antes de ficarem perigosos.",
            "A OMS (Organização Mundial da Saúde) aconselha pelo menos oito contactos com um profissional de saúde durante a gravidez, e o primeiro nas primeiras 12 semanas (os primeiros três meses). Por isso, assim que uma mulher pensa que está grávida, vai à clínica. A sua clínica pode dar-lhe o seu próprio calendário; siga-o.",
            "Na primeira consulta, a clínica costuma dar uma caderneta ou um cartão de saúde da mãe e da criança. O nome muda de país para país (por exemplo, o Mother and Child Health Handbook no Quénia ou o Maternal and Child Health Record Book no Gana). Guarde-o num saco de plástico, leve-o a todas as consultas e escreva a próxima data no calendário do telefone.",
            "Os pais e a família também ajudam: ajudam com o dinheiro do transporte, vão com ela a uma consulta e deixam-na descansar. Pergunte na clínica ou no escritório do seu seguro de saúde se os cuidados na gravidez são gratuitos ou cobertos onde vive; isto muda, por isso pergunte sempre."
          ],
          steps: ["Vá à clínica assim que pensar que está grávida, de preferência nas primeiras 12 semanas.", "Pergunte quantas consultas a clínica planeia e quando.", "Escreva cada data na caderneta e no calendário do telefone.", "Leve a caderneta a todas as consultas.", "Se faltar a uma consulta, vá assim que puder; não espere pela próxima."],
          words: [["Cuidados pré-natais", "consultas de saúde para a mulher durante a gravidez, antes de o bebé nascer."], ["Contacto", "uma consulta ou um encontro com um profissional de saúde, na clínica ou em casa."], ["Parteira", "uma profissional de saúde formada que cuida das mulheres na gravidez, no parto e depois do parto."]],
          slides: [
            { title: "Cuidados pré-natais", bullets: ["Consultas de saúde durante a gravidez", "Encontram problemas cedo", "Tensão arterial, peso, sangue e o bebé"] },
            { title: "Quando ir", bullets: ["Primeira consulta nas primeiras 12 semanas", "A OMS aconselha pelo menos 8 contactos", "Siga o calendário da sua clínica"] },
            { title: "Guarde a caderneta", bullets: ["Leve-a a todas as consultas", "Mantenha-a seca num saco de plástico", "Escreva a próxima data no telefone"] },
            { title: "A família pode ajudar", bullets: ["Dinheiro para o transporte", "Ir com ela a uma consulta", "Deixá-la descansar"] }
          ],
          sources: [WHO_ANC],
          tryIt: "Pense numa gravidez na sua família, ou no exemplo da Fatou, em Thiès, no Senegal, que está grávida de 10 semanas. Escreva o mês da primeira consulta e faça a lista dos meses das consultas seguintes. Ao lado de cada uma, escreva quem vai com ela.",
          youCanNow: "planear as consultas na clínica para uma gravidez, começando cedo, e guardar as datas num lugar onde as vai ver.",
          quickCheck: [
            { objective: "O1", q: "Quando deve uma mulher fazer a primeira consulta na clínica na gravidez?", options: ["Só quando o bebé está quase a nascer", "Nos últimos três meses", "Assim que pensar que está grávida, de preferência nas primeiras 12 semanas", "Só se se sentir mal"], answer: 2, why: "A OMS aconselha o primeiro contacto nas primeiras 12 semanas, para encontrar os problemas cedo." },
            { objective: "O1", q: "Quantos contactos com um profissional de saúde a OMS aconselha durante a gravidez?", options: ["Pelo menos oito", "Um", "Dois", "Nenhum se ela se sentir bem"], answer: 0, why: "A OMS aconselha pelo menos oito contactos; a sua clínica pode dar o seu próprio calendário." }
          ]
        },
        {
          title: "Sinais de perigo na gravidez e depois do parto",
          objectives: ["O2"],
          minutes: 5,
          goal: "Identificar os sinais de perigo que querem dizer que uma grávida ou uma mãe recente tem de ir já à clínica.",
          text: [
            "A maioria das gravidezes corre bem. Mas alguns sinais querem dizer perigo para a mãe ou para o bebé. Com estes sinais, não espere para ver se passam e não espere pela próxima consulta. Vá já à clínica ou ao hospital, de dia ou de noite.",
            "Sinais de perigo na gravidez: sangramento pela vagina; dor de cabeça forte com visão turva; convulsões (ataques); inchaço da cara e das mãos; febre; dor forte na barriga; o bebé a mexer-se muito menos ou nada; a bolsa de águas rebentar antes do trabalho de parto; dificuldade em respirar.",
            "Sinais de perigo depois do parto: sangramento forte (encharca panos ou pensos depressa); febre; corrimento com mau cheiro; dor de cabeça forte, visão turva ou convulsões; dor ou inchaço numa perna; sentir-se muito triste ou sem forças para aguentar durante muitos dias.",
            "O sangramento forte, as infeções e a tensão arterial alta estão entre as principais causas de morte na gravidez e no parto, e podem matar depressa. A rapidez salva vidas. Pelo caminho, ligue ao agente comunitário de saúde ou ao número de emergência da sua zona."
          ],
          steps: ["Aprenda os sinais de perigo e cole a lista na parede de casa.", "Se vir um, pare o que está a fazer.", "Vá já à clínica ou ao hospital com a caderneta.", "Ligue antes ou ligue ao agente comunitário de saúde pelo caminho."],
          words: [["Sinal de perigo", "um sinal de que a mãe ou o bebé podem estar em perigo grave e precisam de cuidados já."], ["Convulsões (ataques)", "tremores súbitos do corpo que a pessoa não consegue controlar."], ["Corrimento", "líquido que sai pela vagina."]],
          slides: [
            { title: "Sinal de perigo quer dizer vá JÁ", bullets: ["Não espere para ver se passa", "Não espere pela próxima consulta", "De dia ou de noite"] },
            { title: "Na gravidez", bullets: ["Sangramento, convulsões, febre, dor forte na barriga", "Dor de cabeça forte com visão turva; cara ou mãos inchadas", "Bebé a mexer-se muito menos; a bolsa rebenta cedo; dificuldade em respirar"] },
            { title: "Depois do parto", bullets: ["Sangramento forte ou febre", "Corrimento com mau cheiro", "Dor de cabeça forte, visão turva ou convulsões", "Muito triste ou sem forças durante muitos dias"] },
            { title: "A rapidez salva vidas", bullets: ["Leve a caderneta", "Ligue ao profissional de saúde pelo caminho"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Escreva os sinais de perigo da gravidez e de depois do parto numa folha, na sua própria língua se preferir. Acrescente o nome da clínica mais próxima e um número de telefone de emergência. Ponha-a na parede ou guarde uma fotografia no telefone.",
          youCanNow: "escolher os sinais de perigo na gravidez e depois do parto e saber que deve ir logo à clínica.",
          quickCheck: [
            { objective: "O2", q: "A Mariam, em Bouaké, está grávida de 7 meses e tem uma dor de cabeça forte e visão turva. O que deve fazer?", options: ["Descansar e ver como se sente amanhã", "Esperar pela próxima consulta na clínica", "Beber mais água e deitar-se", "Ir já à clínica ou ao hospital"], answer: 3, why: "Uma dor de cabeça forte com visão turva é um sinal de perigo; pode querer dizer tensão arterial perigosamente alta." },
            { objective: "O2", q: "Qual é um sinal de perigo depois do parto?", options: ["Sentir-se cansada depois do parto", "Sangramento forte que encharca panos depressa", "Querer dormir quando o bebé dorme", "Ter fome"], answer: 1, why: "O sangramento forte depois do parto é uma das principais causas de morte das mães e precisa de cuidados já." }
          ]
        },
        {
          title: "Fazer um plano de parto",
          objectives: ["O3"],
          minutes: 5,
          goal: "Escrever um plano de parto com o lugar, o transporte, o dinheiro e as pessoas que ajudam.",
          text: [
            "Muitos perigos no parto acontecem depressa e são difíceis de prever. Os cuidados de um profissional de saúde qualificado (uma parteira, uma enfermeira ou um médico) durante e depois do parto salvam a vida das mães e dos bebés. Por isso, o plano mais seguro é ter o bebé numa unidade de saúde.",
            "Um plano de parto responde a perguntas simples antes de começar o trabalho de parto: Que unidade de saúde? Como vamos chegar lá à noite? Quem paga o transporte, e quanto já guardámos? Quem vai com ela? Quem toma conta das outras crianças? Quem poderia dar sangue se for preciso?",
            "Comece a poupar cedo, um pouco cada semana. Por exemplo, uma família em Kisumu guarda KES 200 por semana, e uma família em Tamale guarda GHS 20 por semana (são valores de exemplo; planeie os seus). Guarde já no telefone o número do mototáxi (boda boda, okada), do táxi ou da ambulância.",
            "Prepare um saco pequeno nos últimos meses: a caderneta de saúde, panos limpos, roupa e uma touca para o bebé, e coisas para a mãe. Combine o plano com toda a família para que ninguém discuta quando o trabalho de parto começar."
          ],
          steps: ["Escolha a unidade de saúde e visite-a antes do parto, se puder.", "Combine o transporte para o dia e para a noite e guarde os números.", "Guarde dinheiro todas as semanas para o transporte e os custos.", "Escolha quem vai com ela e quem toma conta da casa.", "Prepare o saco e combine o plano com a família."],
          words: [["Plano de parto", "um plano escrito de onde e como o bebé vai nascer e de como vão chegar lá."], ["Profissional de saúde qualificado", "uma parteira, uma enfermeira ou um médico formado para cuidar de partos."], ["Trabalho de parto", "as dores e o esforço do corpo que empurram o bebé para fora."]],
          slides: [
            { title: "Porquê um plano de parto", bullets: ["Os perigos do parto podem chegar depressa", "Os cuidados qualificados salvam mães e bebés", "Planeie antes de começar o trabalho de parto"] },
            { title: "O plano responde", bullets: ["Que unidade de saúde?", "Transporte, de dia e de noite?", "Dinheiro guardado?", "Quem vai com ela, quem toma conta da casa?"] },
            { title: "Poupe cedo", bullets: ["Um pouco cada semana (os valores são exemplos)", "Guarde já os números do transporte"] },
            { title: "Prepare o saco", bullets: ["Caderneta de saúde", "Panos limpos, roupa e touca para o bebé", "Coisas para a mãe"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Escreva um plano de parto para uma gravidez na sua família, ou para a Amina, em Kano, que vai ter o bebé daqui a três meses. Preencha: unidade de saúde, transporte (de dia e de noite), poupança semanal, quem vai com ela, quem toma conta da casa e o que está no saco.",
          youCanNow: "escrever um plano de parto com o lugar, o transporte, o dinheiro e as pessoas que ajudam.",
          quickCheck: [
            { objective: "O3", q: "Qual é o lugar mais seguro para ter o bebé?", options: ["Em casa, sem ninguém formado", "Onde começar o trabalho de parto", "Uma unidade de saúde com um profissional de saúde qualificado", "Pelo caminho, para ganhar tempo"], answer: 2, why: "Os cuidados qualificados durante e depois do parto salvam a vida das mães e dos recém-nascidos." },
            { objective: "O3", q: "Quando deve a família combinar o plano de parto?", options: ["Quando começar o trabalho de parto", "Antes do último mês da gravidez", "Depois de o bebé nascer", "Só se houver um problema"], answer: 1, why: "Planear com antecedência evita atrasos e discussões quando o trabalho de parto começa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Uma gravidez saudável e um parto seguro",
        questions: [
          { objective: "O1", q: "A Salma, em Assiut, pensa que está grávida de 8 semanas. Qual é o melhor passo a seguir?", options: ["Ir já à clínica para a primeira consulta", "Esperar até o bebé se mexer", "Esperar até ao último mês", "Perguntar a uma vizinha em vez de ir à clínica"], answer: 0, why: "A OMS aconselha o primeiro contacto nas primeiras 12 semanas." },
          { objective: "O1", q: "Porque levar a caderneta da mãe e da criança a todas as consultas?", options: ["A clínica vai vendê-la outra vez", "É só para o pai", "Tem o registo das consultas e as próximas datas", "Não é precisa depois da primeira consulta"], answer: 2, why: "A caderneta guarda a história e as datas das próximas consultas num só lugar." },
          { objective: "O2", q: "Qual destes é um sinal de perigo na gravidez?", options: ["Ter vontade de comer certos alimentos", "O bebé a mexer-se muito menos ou nada", "Sentir-se um pouco cansada", "Precisar de urinar mais vezes"], answer: 1, why: "Um bebé que se mexe muito menos pode estar em perigo; vá já." },
          { objective: "O2", q: "A Akosua tem febre e corrimento com mau cheiro cinco dias depois do parto. O que deve fazer a família?", options: ["Esperar uma semana", "Dar-lhe chá e deixá-la descansar", "Levá-la já à clínica", "Esperar pela consulta da vacina do bebé"], answer: 2, why: "A febre e o corrimento com mau cheiro são sinais de infeção depois do parto; ela precisa de cuidados já." },
          { objective: "O3", q: "Qual destes faz parte de um bom plano de parto?", options: ["Números de transporte guardados para o dia e para a noite", "Esperar para decidir quando começar o trabalho de parto", "Gastar primeiro a poupança", "Não contar à família"], answer: 0, why: "Transporte, dinheiro e pessoas combinados evitam atrasos perigosos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Os primeiros dias e os primeiros anos do seu bebé",
      lessons: [
        {
          title: "Cuidar de um recém-nascido nos primeiros dias",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fazer a lista dos cuidados ao recém-nascido no primeiro dia: calor, dar o peito cedo e um cordão limpo.",
          text: [
            "Um recém-nascido não consegue manter-se quente sozinho. Seque o bebé, depois ponha-o pele com pele no peito da mãe, com um pano por cima dos dois, e ponha-lhe uma touca. Adie o primeiro banho; pergunte ao profissional de saúde quando o dar.",
            "Comece a dar o peito na primeira hora depois do parto. O primeiro leite, grosso e amarelo (colostro), faz bem ao bebé; não o deite fora. A OMS aconselha só leite materno nos primeiros 6 meses: nada de água, chá, água com glicose ou outras bebidas ou alimentos.",
            "Mantenha o cordão limpo e seco. Não ponha nada nele, a não ser que o profissional de saúde lhe diga, e lave as mãos antes de lhe tocar. Lave as mãos com sabão antes de alimentar o bebé e depois de o mudar.",
            "Se puder, fique na unidade de saúde cerca de um dia depois do parto e vá às consultas pós-parto que a clínica marcar, para a mãe e para o bebé. Registe o nascimento e comece as vacinas dadas ao nascer."
          ],
          steps: ["Seque o bebé e ponha-o pele com pele com a mãe, tapado, com uma touca.", "Dê o peito na primeira hora.", "Dê só leite materno.", "Mantenha o cordão limpo e seco; lave as mãos antes de lhe tocar.", "Vá às consultas pós-parto; registe o nascimento; comece as vacinas."],
          words: [["Recém-nascido", "um bebé nos seus primeiros 28 dias."], ["Pele com pele", "segurar o bebé nu contra o peito nu da mãe para o manter quente."], ["Colostro", "o primeiro leite materno, grosso e amarelo, cheio de proteção para o bebé."], ["Cordão", "a parte do cordão umbilical que fica na barriga do bebé depois do parto."]],
          slides: [
            { title: "Mantenha o bebé quente", bullets: ["Seque o bebé", "Pele com pele com a mãe, tapados", "Touca na cabeça; adie o primeiro banho"] },
            { title: "Dê o peito cedo", bullets: ["Na primeira hora", "O colostro faz bem: não o deite fora", "Só leite materno durante 6 meses"] },
            { title: "Mantenha o cordão limpo", bullets: ["Limpo e seco", "Nada nele, a não ser que o profissional de saúde diga", "Lave as mãos primeiro"] },
            { title: "Depois do parto", bullets: ["Consultas para a mãe e para o bebé", "Registe o nascimento", "Comece as vacinas do nascimento"] }
          ],
          sources: [WHO_NEWBORN, WHO_IYCF],
          tryIt: "Escreva por ordem os cuidados ao recém-nascido no primeiro dia, numa lista curta que poderia dar a uma mãe recente ou a uma avó. Depois escreva um hábito perigoso de que já ouviu falar na sua zona e o passo seguro que o substitui.",
          youCanNow: "fazer a lista dos cuidados ao recém-nascido no primeiro dia: calor, dar o peito cedo, só leite materno e um cordão limpo.",
          quickCheck: [
            { objective: "O4", q: "Quando se deve começar a dar o peito?", options: ["Depois do primeiro banho do bebé", "Depois de três dias", "Quando o leite ficar branco", "Na primeira hora depois do parto"], answer: 3, why: "A OMS aconselha começar na primeira hora; o primeiro leite protege o bebé." },
            { objective: "O4", q: "Uma familiar diz para dar água ao recém-nascido porque está calor. O que aconselha a OMS?", options: ["Só leite materno nos primeiros 6 meses", "Água de hora a hora", "Água com açúcar", "Chá com o leite materno"], answer: 0, why: "O leite materno tem toda a água de que um bebé com menos de 6 meses precisa; outras bebidas podem trazer micróbios." }
          ]
        },
        {
          title: "Sinais de perigo nos bebés e nas crianças pequenas",
          objectives: ["O5"],
          minutes: 5,
          goal: "Identificar os sinais de perigo que querem dizer que um bebé ou uma criança pequena tem de ir já à clínica.",
          text: [
            "Os bebés e as crianças pequenas podem ficar muito doentes muito depressa. Alguns sinais querem dizer vá já à clínica, não amanhã.",
            "Num recém-nascido: não mama bem ou não consegue chupar; está menos ativo ou mole; respira depressa ou com dificuldade; tem febre ou está frio; tem convulsões.",
            "Numa criança pequena: não consegue beber nem mamar; vomita tudo; tem convulsões; está com muito sono ou é difícil de acordar; respira depressa ou com dificuldade; tem febre (numa zona com malária, faça o teste no mesmo dia); tem diarreia com sangue, ou com olhos encovados e a criança está com muita sede ou muito fraca.",
            "Com diarreia, continue a dar o peito, bebidas e comida, e pergunte ao profissional de saúde sobre a solução de reidratação oral (SRO) e o zinco. Mas se vir um sinal de perigo, vá já. Não use medicamentos do mercado ou de um vizinho sem o conselho de um profissional de saúde."
          ],
          steps: ["Procure os sinais de perigo, mesmo à noite.", "Se vir um, vá já à clínica com o cartão de saúde da criança.", "Continue a dar o peito e bebidas pelo caminho.", "Ligue ao agente comunitário de saúde se não conseguir chegar lá."],
          words: [["Convulsões (ataques)", "tremores súbitos que a criança não consegue controlar."], ["Desidratação", "quando o corpo perde água demais, por exemplo com diarreia ou vómitos."], ["SRO", "solução de reidratação oral: uma bebida de água limpa, sal e açúcar que repõe a água perdida com a diarreia."]],
          slides: [
            { title: "Vá já, não amanhã", bullets: ["As crianças ficam muito doentes muito depressa", "Leve o cartão de saúde da criança"] },
            { title: "Sinais de perigo no recém-nascido", bullets: ["Não mama ou não chupa", "Mole ou menos ativo", "Respira depressa ou com dificuldade; febre ou frio; convulsões"] },
            { title: "Sinais de perigo na criança pequena", bullets: ["Não consegue beber nem mamar; vomita tudo", "Convulsões; muito sono ou difícil de acordar", "Respira depressa ou com dificuldade; febre; diarreia com sangue"] },
            { title: "Diarreia", bullets: ["Continue a dar o peito e bebidas", "Pergunte ao profissional de saúde sobre a SRO e o zinco", "Olhos encovados ou muito fraca: vá já"] }
          ],
          sources: [WHO_NEWBORN, WHO_DIARRHOEA],
          tryIt: "Faça um cartão de sinais de perigo para bebés e crianças pequenas: uma coluna para os recém-nascidos e outra para os bebés mais velhos e as crianças. Acrescente a clínica mais próxima, o número do agente comunitário de saúde e como chegaria lá à noite.",
          youCanNow: "reconhecer os sinais de perigo num bebé ou numa criança pequena e levar logo a criança à clínica.",
          quickCheck: [
            { objective: "O5", q: "Um bebé de 3 semanas, em Kumasi, deixa de chupar e está frio. O que deve fazer a família?", options: ["Esperar até de manhã", "Dar água ao bebé", "Ir já à clínica", "Dar um medicamento do mercado"], answer: 2, why: "Não mamar e estar frio são sinais de perigo no recém-nascido que precisam de cuidados já." },
            { objective: "O5", q: "Uma criança de 2 anos com diarreia tem os olhos encovados e está muito fraca. O que está certo?", options: ["Parar todas as bebidas", "Ir já à clínica", "Parar de dar o peito", "Esperar três dias"], answer: 1, why: "Os olhos encovados e a fraqueza são sinais de desidratação, que pode matar uma criança; vá já." }
          ]
        },
        {
          title: "Alimentação, vacinas e consultas de crescimento",
          objectives: ["O6"],
          minutes: 6,
          goal: "Encontrar no cartão de saúde da criança as datas da próxima vacina e da próxima consulta de crescimento e escrever o passo de alimentação para a idade da criança.",
          text: [
            "O cartão ou a caderneta de saúde da criança mostra as vacinas dadas, as datas das próximas vacinas e a curva de crescimento. As vacinas protegem contra doenças como o sarampo, a poliomielite, a tosse convulsa, o tétano e alguns tipos de pneumonia e de diarreia. O calendário muda de país para país; siga o seu cartão e a sua clínica.",
            "Nas consultas de crescimento, na clínica ou com o agente comunitário de saúde, pesam e medem a criança. Uma linha de crescimento que fica plana ou desce é um aviso: pergunte ao profissional de saúde o que fazer.",
            "Alimentação por idade (OMS): só leite materno nos primeiros 6 meses. A partir dos 6 meses, mais ou menos, junte alimentos da família moles e esmagados e continue a dar o peito até aos 2 anos ou mais. Comece com pouca quantidade e dê aos poucos mais comida, mais grossa e de mais tipos. Os bebés de 6 a 8 meses precisam de 2 a 3 refeições por dia; as crianças de 9 a 23 meses precisam de 3 a 4 refeições, com 1 a 2 lanches se for preciso.",
            "Se faltar à data de uma vacina, não desista: vá assim que puder e a clínica põe a criança em dia. Escreva cada próxima data no calendário do telefone."
          ],
          steps: ["Abra o cartão de saúde da criança.", "Encontre a última vacina e a próxima data.", "Encontre a última consulta de crescimento e veja se a linha está a subir.", "Escreva o passo de alimentação para a idade da criança.", "Ponha as próximas datas no calendário do telefone."],
          words: [["Vacina", "medicamento dado para proteger uma criança de uma doença antes de a apanhar; a clínica dá-o segundo um calendário."], ["Curva de crescimento", "um gráfico no cartão que mostra o peso da criança ao longo do tempo."], ["Alimentação complementar", "juntar alimentos da família a partir dos 6 meses, mais ou menos, enquanto se continua a dar o peito."]],
          slides: [
            { title: "O cartão de saúde da criança", bullets: ["Vacinas dadas e próximas datas", "Curva de crescimento", "Leve-o a todas as consultas"] },
            { title: "Vacinas e crescimento", bullets: ["Siga o calendário do seu país", "Linha plana ou a descer: pergunte ao profissional de saúde", "Faltou a uma data? Vá assim que puder"] },
            { title: "Alimentação por idade (OMS)", bullets: ["0-6 meses: só leite materno", "A partir dos 6 meses, mais ou menos: alimentos da família moles e leite materno", "6-8 meses: 2-3 refeições; 9-23 meses: 3-4 refeições, 1-2 lanches"] }
          ],
          sources: [WHO_IMMUNIZATION, WHO_IYCF],
          tryIt: "Tarefa final: escreva o seu plano de saúde da família de uma página. Inclua as consultas na clínica que ainda faltam, o plano de parto, os cuidados ao recém-nascido no primeiro dia, os sinais de perigo para a mãe e para a criança com a clínica e um número de emergência, e as datas da próxima vacina e da próxima consulta de crescimento tiradas do cartão, com o passo de alimentação para a idade da criança.",
          youCanNow: "ler no cartão de saúde da criança as datas da próxima vacina e da próxima consulta de crescimento e planear a alimentação para a idade da criança.",
          quickCheck: [
            { objective: "O6", q: "O bebé Kofi faltou à data da vacina na semana passada. O que deve fazer a família?", options: ["Esperar pelo próximo ano", "Saltar essa vacina", "Começar outra vez desde a primeira vacina", "Ir à clínica o mais depressa possível para pôr em dia"], answer: 3, why: "A clínica pode pôr a criança em dia; vá assim que puder." },
            { objective: "O6", q: "Com que idade, mais ou menos, um bebé começa a comer alimentos da família além do leite materno?", options: ["Cerca de 6 meses", "2 semanas", "1 mês", "2 anos"], answer: 0, why: "A OMS aconselha juntar alimentos da família moles a partir dos 6 meses, mais ou menos, enquanto se continua a dar o peito." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Os primeiros dias e os primeiros anos do seu bebé",
        questions: [
          { objective: "O4", q: "Qual é a melhor maneira de manter um recém-nascido quente logo depois do parto?", options: ["Pele com pele no peito da mãe, tapado, com uma touca", "Um banho frio", "Deixar o bebé destapado", "Pôr o bebé noutro quarto"], answer: 0, why: "O contacto pele com pele mantém o bebé quente e ajuda a começar a dar o peito." },
          { objective: "O4", q: "O que se deve pôr no cordão?", options: ["Cinza ou bosta de vaca", "Nada, a não ser que o profissional de saúde diga; mantê-lo limpo e seco", "Manteiga", "Lama"], answer: 1, why: "Um cordão limpo e seco baixa o risco de infeção." },
          { objective: "O5", q: "Que sinal numa criança pequena quer dizer vá já à clínica?", options: ["Uma tosse pequena e a comer normalmente", "A criança não consegue beber nem mamar", "Os dentes a nascer", "Nariz a pingar e a brincar bem"], answer: 1, why: "Não conseguir beber nem mamar é um sinal geral de perigo." },
          { objective: "O5", q: "Uma criança em Kano respira depressa e com dificuldade à noite. O que devem fazer os pais?", options: ["Esperar pela clínica de manhã", "Dar um xarope para a tosse da loja", "Ir já à clínica ou ao hospital", "Esfregar o peito e esperar"], answer: 2, why: "Respirar depressa ou com dificuldade pode querer dizer pneumonia e precisa de cuidados já." },
          { objective: "O6", q: "A linha de crescimento no cartão está plana há dois meses. O que deve fazer o pai ou a mãe?", options: ["Nada; é normal", "Deixar de ir às consultas", "Dar só água", "Perguntar ao profissional de saúde"], answer: 3, why: "Uma linha plana ou a descer é um aviso; o profissional de saúde pode ajudar a descobrir porquê." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Saúde da Mãe e da Criança: Gravidez, Parto e os Primeiros Anos",
    questions: [
      { objective: "O1", q: "Os cuidados a uma mulher durante a gravidez chamam-se:", options: ["Cuidados pré-natais", "Cuidados pós-natais", "Primeiros socorros", "Consulta de crescimento"], answer: 0, why: "Pré-natal quer dizer antes do nascimento." },
      { objective: "O1", q: "A OMS aconselha o primeiro contacto na gravidez:", options: ["No último mês", "Nas primeiras 12 semanas", "Só se houver dor", "Depois de o bebé se mexer"], answer: 1, why: "Começar cedo ajuda a encontrar os problemas cedo." },
      { objective: "O1", q: "Uma grávida faltou a uma consulta na clínica. O que é melhor?", options: ["Esperar até ao trabalho de parto", "Deixar de ir", "Ir assim que puder", "Esperar pela consulta seguinte"], answer: 2, why: "Ir o mais depressa possível mantém os cuidados dela no caminho certo." },
      { objective: "O2", q: "Qual é um sinal de perigo na gravidez?", options: ["Ter fome", "Sentir o bebé dar pontapés", "Sangramento pela vagina", "Querer dormir mais"], answer: 2, why: "O sangramento na gravidez pode querer dizer perigo para a mãe e para o bebé." },
      { objective: "O2", q: "A cara e as mãos de uma grávida incham de repente e ela tem uma dor de cabeça forte. Ela deve:", options: ["Ir já à clínica", "Comer menos sal e esperar", "Esperar pela próxima consulta", "Dormir para passar"], answer: 0, why: "Podem ser sinais de tensão arterial perigosamente alta." },
      { objective: "O2", q: "Dois dias depois do parto, a mãe está a encharcar panos de sangue depressa. A família deve:", options: ["Esperar um dia", "Dar-lhe chá", "Levá-la já à clínica", "Pedir-lhe para descansar"], answer: 2, why: "O sangramento forte depois do parto pode matar depressa." },
      { objective: "O2", q: "Porque não deve \"esperar para ver\" com um sinal de perigo?", options: ["A clínica fecha cedo", "Os sinais de perigo podem piorar depressa e a rapidez salva vidas", "Esperar é mais barato", "Os sinais passam sempre"], answer: 1, why: "Muitas mortes acontecem por atrasos em decidir ir e em chegar lá." },
      { objective: "O3", q: "Que pergunta faz parte de um plano de parto?", options: ["De que cor vai ser a roupa do bebé?", "Como vamos chegar à unidade de saúde à noite?", "Quem vai cozinhar para as visitas?", "Como se vai chamar o bebé?"], answer: 1, why: "O transporte, sobretudo à noite, é uma parte importante do plano de parto." },
      { objective: "O3", q: "Uma família em Dakar quer ter dinheiro pronto para o parto. Um bom passo é:", options: ["Poupar um pouco cada semana, começando cedo", "Pedir emprestado no próprio dia", "Esperar que um vizinho pague", "Esperar até ao trabalho de parto"], answer: 0, why: "Poupar cedo quer dizer que o dinheiro está pronto quando o trabalho de parto começa." },
      { objective: "O3", q: "O que deve ir no saco do parto?", options: ["Nada; a clínica tem tudo", "Só dinheiro", "Comida para toda a família", "A caderneta de saúde, panos limpos e roupa do bebé"], answer: 3, why: "A caderneta e coisas limpas para a mãe e para o bebé são precisas no parto." },
      { objective: "O4", q: "O que é o colostro?", options: ["Uma vacina", "Um tipo de chá para bebés", "O primeiro leite materno, grosso e amarelo", "Um creme para bebés"], answer: 2, why: "O colostro é o primeiro leite e protege o bebé." },
      { objective: "O4", q: "Nos primeiros 6 meses, a OMS aconselha dar ao bebé:", options: ["Leite materno e água", "Só leite materno", "Papas", "Leite de vaca"], answer: 1, why: "Só leite materno; nenhuma outra bebida ou alimento." },
      { objective: "O4", q: "Que cuidado do primeiro dia está certo?", options: ["Dar logo banho ao bebé em água fria", "Pôr cinza no cordão", "Esperar dois dias para dar o peito", "Secar o bebé e pô-lo pele com pele"], answer: 3, why: "Secar e o contacto pele com pele mantêm o recém-nascido quente." },
      { objective: "O5", q: "Qual é um sinal de perigo no recém-nascido?", options: ["Dormir entre as mamadas", "Não conseguir chupar", "Espirrar uma vez", "Chorar antes de mamar"], answer: 1, why: "Um recém-nascido que não consegue chupar precisa de cuidados já." },
      { objective: "O5", q: "Uma criança vomita tudo e está com muito sono. A família deve:", options: ["Esperar até amanhã", "Dar um medicamento do mercado", "Não dar bebidas", "Ir já à clínica"], answer: 3, why: "Vomitar tudo e estar com muito sono são sinais gerais de perigo." },
      { objective: "O5", q: "Uma criança tem diarreia com sangue. A família deve:", options: ["Levar a criança à clínica", "Parar toda a comida e bebida", "Esperar que passe", "Dar os comprimidos de um vizinho"], answer: 0, why: "Sangue nas fezes é uma razão para procurar cuidados." },
      { objective: "O5", q: "A caminho da clínica com uma criança com diarreia, deve:", options: ["Parar de dar o peito", "Continuar a dar o peito e bebidas", "Não dar água", "Dar só chá forte"], answer: 1, why: "As bebidas e o leite materno repõem a água perdida." },
      { objective: "O6", q: "Onde encontra a data da próxima vacina?", options: ["No cartão de saúde da criança", "Na rádio", "Com um vendedor do mercado", "Em lado nenhum; adivinha-se"], answer: 0, why: "O cartão mostra as vacinas dadas e as próximas datas." },
      { objective: "O6", q: "Segundo a OMS, uma criança de 10 meses deve ter mais ou menos quantas refeições por dia?", options: ["Uma", "3 a 4, mais 1 a 2 lanches se for preciso", "Só leite materno", "Dez"], answer: 1, why: "A OMS aconselha 3 a 4 refeições dos 9 aos 23 meses, mais lanches se for preciso." },
      { objective: "O6", q: "Até que idade a OMS aconselha continuar a dar o peito?", options: ["3 meses", "6 meses", "1 ano exatamente", "2 anos ou mais"], answer: 3, why: "Dar o peito continua junto com os alimentos da família até aos 2 anos ou mais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 6, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Consultas na clínica", objective: "O1", notYet: "Não há datas de consultas, ou a primeira consulta é tarde na gravidez.", meets: "Faz a lista das consultas que ainda faltam, com a primeira nas primeiras 12 semanas, escritas na caderneta ou no telefone.", exceeds: "Também diz quem vai com ela a cada consulta e como é paga." },
      { name: "Plano de parto", objective: "O3", notYet: "Falta uma ou mais destas partes: lugar, transporte, dinheiro ou pessoas que ajudam.", meets: "Indica a unidade de saúde, o transporte de dia e de noite, a poupança semanal, quem vai com ela e quem toma conta da casa.", exceeds: "Também tem os números do transporte guardados, o saco pronto e o plano combinado com a família." },
      { name: "Primeiro dia do recém-nascido", objective: "O4", notYet: "Faltam passos, estão fora de ordem ou incluem uma prática perigosa.", meets: "Calor (pele com pele), dar o peito na primeira hora, só leite materno e um cordão limpo e seco.", exceeds: "Também indica um hábito perigoso da zona e o passo seguro que o substitui." },
      { name: "Sinais de perigo", objective: "O2", notYet: "A lista esquece sinais importantes ou diz para esperar para ver.", meets: "Faz a lista dos principais sinais de perigo para a mãe e para a criança, com a clínica mais próxima e um número de emergência.", exceeds: "Também trata do transporte à noite e do número do agente comunitário de saúde." },
      { name: "Sinais de perigo na criança", objective: "O5", notYet: "Faltam sinais de perigo na criança ou estão misturados com sinais normais.", meets: "Faz a lista dos sinais de perigo no recém-nascido e na criança pequena que querem dizer vá já.", exceeds: "Explica-os de forma tão clara que uma avó ou um irmão mais velho os consegue usar." },
      { name: "Cartão, vacinas e alimentação", objective: "O6", notYet: "Não há próximas datas, ou o conselho de alimentação não serve para a idade da criança.", meets: "Dá as datas da próxima vacina e da próxima consulta de crescimento tiradas do cartão e o passo de alimentação certo para a idade.", exceeds: "As datas estão no calendário do telefone com lembretes." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunas grávidas ou familiares que fazem uma primeira consulta na clínica nas primeiras 12 semanas (inquérito de seguimento aos 30 dias)",
      "Famílias que dizem ter um plano de parto escrito, com dinheiro guardado e transporte combinado",
      "Crianças cujas próximas consultas de vacina e de crescimento são feitas a tempo, segundo os alunos ou as clínicas parceiras",
      "Os agentes comunitários de saúde parceiros dizem que as famílias chegam mais cedo quando aparece um sinal de perigo"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone simples, ou uma sessão em grupo em que as lições são lidas em voz alta",
      "A caderneta de saúde da mãe e da criança ou o cartão de saúde da criança, se a família tiver um",
      "Papel e caneta para os cartões de sinais de perigo, o plano de parto e o plano de saúde da família",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Bons parceiros: agentes comunitários de saúde, parteiras das clínicas, grupos de mulheres, grupos de poupança e grupos religiosos; convide uma parteira ou uma enfermeira para responder às perguntas.",
      "Nunca peça aos alunos para partilhar no grupo os dados da sua própria gravidez, do seu estado de VIH ou outros dados de saúde; use os exemplos do curso.",
      "Não dê doses de medicamentos nem conselhos de tratamento; envie todas essas perguntas para a clínica.",
      "Confirme os dados locais antes da sessão: a unidade de saúde mais próxima, os números de emergência, o calendário de vacinação local e se os cuidados de maternidade são gratuitos ou cobertos.",
      "Convide os pais e as avós: as decisões de ir à clínica são muitas vezes tomadas pela família.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
