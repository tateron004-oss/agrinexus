"use strict";

// Koach Learn course (Portuguese translation of shared/esl-workplace-english.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// ESL course: every English phrase being taught stays in English inside double quotes; only the explanations are translated.

module.exports = {
  id: "esl-workplace-english-pt",
  lang: "pt",
  translationOf: "esl-workplace-english",
  category: "Workforce Development",
  name: "Inglês para o Trabalho (ESL)",
  skills: "Responder a perguntas de entrevista de emprego, Palavras e sinais de segurança, Comunicar um problema ou uma lesão, Pedir ajuda e confirmar instruções, Falar sobre horários, Ajudar clientes",
  outcome: "usar um inglês curto e claro no trabalho: responder a perguntas comuns de entrevista, entender palavras de segurança e comunicar um problema, pedir ajuda e confirmar instruções, falar sobre o seu horário, e cumprimentar e ajudar um cliente.",
  about: [
    "Este curso é para adultos que estão a aprender inglês e querem arranjar um emprego ou sair-se melhor no emprego que já têm: em armazéns, cozinhas, limpeza, construção, lojas, cuidados a pessoas, fábricas e escritórios.",
    "Vai aprender o inglês de que mais precisa no trabalho: respostas para uma entrevista de emprego, palavras de segurança, como comunicar um problema, como pedir ajuda, como falar sobre o seu horário e como falar com clientes. Cada lição tem frases para dizer, um exemplo de conversa e uma dramatização que pode fazer em casa.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, leia o exemplo de conversa em voz alta e depois faça a tarefa \"Experimente agora\". Há duas perguntas rápidas depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final.",
    "No final, escreve o seu próprio guião de inglês para o trabalho que quer e pratica-o em voz alta."
  ],
  finalTask: "Escreva o seu guião de inglês para o trabalho que quer, numa página: (1) uma resposta curta a \"Tell me about yourself.\" (3 a 4 frases), (2) respostas a mais duas perguntas de entrevista, (3) três palavras ou sinais de segurança desse trabalho, com o que querem dizer, (4) uma mensagem para avisar que está doente ou atrasado, e (5) duas frases para ajudar um cliente ou pedir ajuda a um colega. Pratique o guião todo em voz alta ou numa dramatização com um parceiro, e grave-se se puder.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que aprendem inglês como segunda língua e procuram trabalho ou já trabalham nos Estados Unidos: imigrantes e refugiados, jovens adultos, pessoas que voltam para casa depois da prisão e trabalhadores em empregos de entrada que querem subir.",
    startingPoint: "Sabem cumprimentar pessoas e dizer frases simples em inglês. Entendem algumas palavras do trabalho, mas ficam nervosos nas entrevistas, ao telefone e com chefes ou clientes. Muitos têm boas competências de trabalho do seu país de origem.",
    gap: "Os trabalhadores que não conseguem responder a perguntas de entrevista, entender um aviso de segurança ou pedir a um chefe que explique uma tarefa perdem ofertas de emprego, cometem erros e podem magoar-se. Um pequeno conjunto de frases do trabalho e o hábito de confirmar instruções tornam-nos mais seguros, mais confiantes e mais fáceis de promover.",
    constraints: [
      "Nível de língua: inglês de principiante a pré-intermédio; palavras muito comuns e frases curtas",
      "O curso será traduzido: as frases em inglês que se ensinam ficam em inglês, entre aspas",
      "Aparelhos: um telefone ou um computador da biblioteca; a prática funciona com papel, um parceiro e a voz",
      "Tempo: lições de 4 a 6 minutos, que cabem entre os turnos de trabalho",
      "As regras do trabalho (como avisar faltas, regras de segurança) mudam de empregador para empregador: os alunos seguem o manual e a formação do seu próprio empregador"
    ],
    prerequisites: "Saber ler frases curtas e simples em inglês. \"Inglês para o Dia a Dia (ESL)\" é um bom primeiro curso para quem está a começar."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Numa entrevista de emprego", action: "responder a perguntas comuns de entrevista, como \"Tell me about yourself\", com respostas curtas preparadas", standard: "em 2 a 4 frases claras cada uma, com um exemplo real do seu trabalho ou da sua vida" },
    { id: "O2", condition: "Com palavras, sinais e avisos comuns de segurança no trabalho", action: "dizer o que cada um quer dizer e o que fazer, e comunicar um perigo ou uma lesão a um chefe", standard: "acertando pelo menos 4 de 5 e comunicando logo" },
    { id: "O3", condition: "Quando recebe uma instrução que não entende bem", action: "pedir ajuda a um chefe ou colega e repetir a instrução para a confirmar", standard: "antes de começar a tarefa" },
    { id: "O4", condition: "Com um horário de trabalho ou uma mudança nos seus planos", action: "ler as horas do seu turno e dizer ao seu chefe que vai chegar atrasado, que está doente ou que precisa de folga", standard: "dizendo o dia, a hora e o motivo, o mais cedo possível" },
    { id: "O5", condition: "Quando um cliente vem ter consigo", action: "cumprimentar o cliente, oferecer ajuda e chamar outro trabalhador quando não puder ajudar", standard: "com educação e sem adivinhar uma resposta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conseguir o emprego e trabalhar em segurança",
      lessons: [
        {
          title: "A entrevista de emprego: responder a perguntas comuns",
          objectives: ["O1"],
          minutes: 6,
          goal: "Responder a três perguntas comuns de entrevista com respostas curtas preparadas.",
          text: [
            "A maioria das entrevistas começa com as mesmas poucas perguntas. Pode preparar as suas respostas e praticá-las em voz alta. Respostas curtas e claras são melhores do que respostas longas.",
            "\"Tell me about yourself.\" (Fale-me de si.) Responda sobre o seu trabalho, não sobre a sua vida privada: \"I have three years of experience in a restaurant kitchen. I am fast and careful. I want to grow in food service.\" \"Why do you want this job?\" (Porque quer este emprego?) Resposta: \"I like working with my hands, and this company has good training.\" \"When can you start?\" (Quando pode começar?) Resposta: \"I can start next Monday.\"",
            "Outras perguntas comuns: \"What are your strengths?\" (\"I am on time and I learn fast.\") \"Can you work weekends?\" (\"Yes, I can work Saturdays.\") No final, muitas vezes perguntam \"Do you have any questions?\" Tenha uma pronta: \"What does a normal day look like?\" ou \"What are the hours?\"",
            "A experiência do seu país de origem conta. Diga-a: \"In Mexico I built houses for five years.\" Se não entendeu uma pergunta, use as frases que já sabe: \"Sorry, can you repeat the question, please?\""
          ],
          steps: ["Escreva respostas curtas para as perguntas comuns.", "Use um exemplo real do seu trabalho ou da sua vida em cada uma.", "Pratique em voz alta até conseguir dizê-las sem ler.", "Prepare uma pergunta para fazer no final.", "Se não perceber uma pergunta, peça para a repetirem."],
          words: [["\"Experience\"", "experiência: trabalho que já fez antes."], ["\"Strengths\"", "pontos fortes: coisas que faz bem."], ["\"Interview\"", "entrevista: uma reunião em que um empregador lhe faz perguntas para decidir se o contrata."]],
          slides: [
            { title: "Prepare e pratique", bullets: ["As mesmas perguntas aparecem uma e outra vez", "Respostas curtas e claras ganham", "Pratique em voz alta"] },
            { title: "\"Tell me about yourself.\"", bullets: ["Fale do trabalho, não da sua vida privada", "\"I have three years of experience in a kitchen.\"", "\"I am fast and careful.\""] },
            { title: "Mais perguntas comuns", bullets: ["\"Why do you want this job?\"", "\"What are your strengths?\"", "\"When can you start?\" \"Can you work weekends?\""] },
            { title: "A sua vez de perguntar", bullets: ["\"Do you have any questions?\"", "\"What does a normal day look like?\"", "\"What are the hours?\""] }
          ],
          sources: [{ name: "USA Learns: cursos de inglês gratuitos para adultos (Sacramento County Office of Education)", url: "https://www.usalearns.org/" }],
          tryIt: "Escreva as suas respostas a \"Tell me about yourself\", \"Why do you want this job?\" e \"When can you start?\" para um emprego que quer. Cada uma com 2 a 4 frases. Leia-as em voz alta três vezes e depois peça a um parceiro para o entrevistar, ou grave-se a responder.",
          youCanNow: "responder a perguntas comuns de entrevista com respostas curtas preparadas e fazer uma pergunta no final de uma entrevista.",
          quickCheck: [
            { objective: "O1", q: "O entrevistador diz \"Tell me about yourself.\" Qual é a melhor resposta?", options: ["\"I have two years of experience cleaning offices. I am careful and on time.\"", "\"I don't know.\"", "\"I have three children and I like soccer and my favorite food is rice.\"", "\"What is your name?\""], answer: 0, why: "Fala do trabalho e dos pontos fortes em frases curtas e claras." },
            { objective: "O1", q: "O entrevistador pergunta \"Do you have any questions?\" Qual é uma boa resposta?", options: ["\"No.\"", "\"Where is the bathroom?\"", "\"What does a normal day look like?\"", "\"Goodbye.\""], answer: 2, why: "Uma pergunta sobre o trabalho mostra que está interessado." }
          ]
        },
        {
          title: "Palavras, sinais e avisos de segurança",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dizer o que querem dizer os sinais e avisos comuns de segurança e o que fazer.",
          text: [
            "As palavras de segurança são o inglês mais importante no trabalho. Aprenda-as primeiro. Sinais: \"Danger\" quer dizer um perigo sério que pode matar ou ferir gravemente. \"Caution\" ou \"Warning\" quer dizer tenha cuidado. \"Exit\" é a saída. \"Authorized personnel only\" quer dizer que só podem entrar trabalhadores com autorização. \"Wet floor\" quer dizer que o chão está escorregadio.",
            "Os avisos falados são curtos e altos: \"Watch out!\" \"Stop!\" \"Look out!\" \"Heads up!\" (alguma coisa pode cair ou vir na sua direção). Quando ouvir um, pare, olhe e afaste-se do perigo.",
            "Palavras do equipamento de proteção: \"Wear your gloves.\" (Use as luvas.) \"Put on your safety glasses.\" (Ponha os óculos de proteção.) \"Hard hat\" (um capacete resistente). \"Safety vest\" (um colete de cor viva para os condutores o verem). \"Ear plugs\" (tampões para os ouvidos). O seu empregador dá-lhe formação sobre o equipamento do seu trabalho. Se não entender a formação, pergunte.",
            "Exemplo de conversa. Chefe: \"Heads up! Forklift coming.\" Trabalhador: \"Okay!\" (dá um passo atrás). Chefe: \"Always wear your vest in this area.\" Trabalhador: \"Yes. My vest, always in this area.\""
          ],
          words: [["\"Hazard\"", "perigo: alguma coisa que o pode magoar, como um chão molhado ou uma máquina a funcionar."], ["\"Danger\"", "palavra dos sinais para um perigo sério que pode matar ou ferir gravemente."], ["\"Caution\"", "palavra dos sinais que quer dizer tenha cuidado."], ["\"Protective equipment\"", "equipamento de proteção: o que o mantém seguro, como luvas, óculos de proteção ou capacete."]],
          slides: [
            { title: "Palavras dos sinais", bullets: ["\"Danger\": perigo sério", "\"Caution\" / \"Warning\": tenha cuidado", "\"Exit\": a saída", "\"Authorized personnel only\": precisa de autorização"] },
            { title: "Avisos falados", bullets: ["\"Watch out!\" \"Stop!\" \"Look out!\"", "\"Heads up!\": alguma coisa vem aí", "Pare, olhe, afaste-se"] },
            { title: "Equipamento de proteção", bullets: ["\"Wear your gloves.\"", "\"Put on your safety glasses.\"", "\"Hard hat\" \"Safety vest\" \"Ear plugs\""] }
          ],
          sources: [{ name: "OSHA: direitos dos trabalhadores (Departamento do Trabalho dos EUA)", url: "https://www.osha.gov/workers" }],
          tryIt: "Faça um cartão de palavras de segurança para o emprego que quer: escreva cinco palavras ou sinais de segurança que vai ver lá e o que cada um quer dizer. Diga cada um em voz alta. Depois peça a um parceiro para gritar avisos (\"Watch out!\" \"Heads up!\") enquanto você mostra o que faria.",
          youCanNow: "dizer o que querem dizer os sinais, os avisos e as palavras do equipamento de proteção mais comuns, e o que fazer quando ouve um aviso.",
          quickCheck: [
            { objective: "O2", q: "Um colega grita \"Heads up!\" O que faz?", options: ["Olha para o telefone", "Para, olha e afasta-se do que vem aí", "Continua a trabalhar", "Grita \"Heads up\" também e fica onde está"], answer: 1, why: "\"Heads up!\" quer dizer que alguma coisa pode cair ou vir na sua direção." },
            { objective: "O2", q: "Uma porta tem um sinal: \"Authorized personnel only\". O que quer dizer?", options: ["Qualquer pessoa pode entrar", "É a saída", "O chão está molhado", "Só podem entrar trabalhadores com autorização"], answer: 3, why: "\"Authorized personnel only\" quer dizer que precisa de autorização para entrar." }
          ]
        },
        {
          title: "Comunicar um problema ou uma lesão",
          objectives: ["O2"],
          minutes: 5,
          goal: "Comunicar logo um perigo ou uma lesão ao seu chefe.",
          text: [
            "Se vir alguma coisa perigosa, diga logo ao seu chefe: \"Excuse me, there is a problem. There is oil on the floor in aisle 4.\" \"This machine is making a strange noise.\" \"The ladder is broken.\"",
            "Se se magoar, mesmo pouco, diga ao seu chefe no mesmo dia: \"I hurt my hand. I cut it on a box.\" \"I hurt my back when I lifted that.\" Diga onde e quando: \"It happened at 10 o'clock, at the loading dock.\" Numa emergência, ligue para o 911.",
            "Nos Estados Unidos, a OSHA (a agência federal para a segurança no trabalho) diz que os trabalhadores têm direitos, entre eles formação de segurança numa língua que entendam, comunicar uma lesão de trabalho e pedir uma inspeção a um local de trabalho perigoso. A lei diz que o seu empregador não o pode castigar por usar estes direitos. Veja os pormenores em osha.gov/workers.",
            "Exemplo de conversa. Trabalhador: \"Excuse me, I need to report something. I slipped and hurt my knee.\" Chefe: \"When did it happen?\" Trabalhador: \"About ten minutes ago, near the freezer.\" Chefe: \"Okay, let's fill out a report.\""
          ],
          steps: ["Diga \"Excuse me, I need to report something.\"", "Diga o que está mal: o perigo ou a lesão.", "Diga onde e quando aconteceu.", "Comunique uma lesão no mesmo dia, mesmo que seja pequena.", "Numa emergência, ligue para o 911."],
          words: [["\"Report\"", "comunicar: contar um problema à pessoa certa."], ["\"Injury\"", "lesão: um mal no corpo, como um corte, uma queimadura ou dor nas costas."], ["\"Supervisor\"", "chefe: a pessoa responsável pelo seu trabalho."], ["OSHA", "a Occupational Safety and Health Administration, a agência federal dos EUA para a segurança no local de trabalho."]],
          slides: [
            { title: "Comunicar um perigo", bullets: ["\"Excuse me, there is a problem.\"", "\"There is oil on the floor in aisle 4.\"", "\"The ladder is broken.\""] },
            { title: "Comunicar uma lesão", bullets: ["\"I hurt my hand. I cut it on a box.\"", "Diga onde e quando", "No mesmo dia, mesmo que seja pequena"] },
            { title: "Os seus direitos (OSHA)", bullets: ["Formação de segurança numa língua que entende", "Comunicar uma lesão; pedir uma inspeção", "O seu empregador não o pode castigar por isso", "Pormenores: osha.gov/workers"] }
          ],
          sources: [{ name: "OSHA: direitos dos trabalhadores (Departamento do Trabalho dos EUA)", url: "https://www.osha.gov/workers" }],
          tryIt: "Só para praticar: escreva duas comunicações curtas, uma sobre um perigo (por exemplo um chão molhado) e outra sobre uma pequena lesão inventada. Cada uma diz o quê, onde e quando. Diga-as em voz alta como se estivesse a falar com o seu chefe.",
          youCanNow: "comunicar um perigo ou uma lesão ao seu chefe, dizendo o quê, onde e quando, e dizer quais são os seus direitos básicos de segurança.",
          quickCheck: [
            { objective: "O2", q: "Vê uma escada partida no trabalho. O que diz ao seu chefe?", options: ["Nada; outra pessoa vai ver", "\"Excuse me, the ladder in the back room is broken.\"", "\"Watch out!\" e vai para casa", "\"Can I have a day off?\""], answer: 1, why: "Dizer ao chefe o quê e onde deixa-o resolver o perigo antes de alguém se magoar." },
            { objective: "O2", q: "Corta um pouco o dedo no trabalho. Quando comunica?", options: ["No mês que vem", "Só se piorar", "Nunca", "No mesmo dia"], answer: 3, why: "Comunique todas as lesões de trabalho no mesmo dia, mesmo as pequenas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conseguir o emprego e trabalhar em segurança",
        questions: [
          { objective: "O1", q: "O entrevistador pergunta \"When can you start?\" Qual é uma resposta clara?", options: ["\"I can start next Monday.\"", "\"Maybe.\"", "\"I like this company.\"", "\"Where is the exit?\""], answer: 0, why: "Dá um dia claro." },
          { objective: "O1", q: "Não entendeu a pergunta da entrevista. O que diz?", options: ["\"Yes.\"", "Nada", "\"Sorry, can you repeat the question, please?\"", "\"Goodbye.\""], answer: 2, why: "Pedir para repetirem é melhor do que adivinhar a resposta." },
          { objective: "O2", q: "Um sinal diz \"Danger\". O que quer dizer?", options: ["A casa de banho", "Um lugar para descansar", "Um perigo sério que pode matar ou ferir gravemente", "Uma sala de pausa"], answer: 2, why: "\"Danger\" marca os perigos mais sérios." },
          { objective: "O2", q: "Que objeto é equipamento de proteção?", options: ["Óculos de proteção", "Um horário", "Um recibo de salário", "Um talão de compra"], answer: 0, why: "Os óculos de proteção protegem os seus olhos." },
          { objective: "O2", q: "Magoou as costas a levantar uma caixa. O que diz?", options: ["\"Watch out!\"", "\"When can I start?\"", "\"Do you have any questions?\"", "\"I need to report something. I hurt my back lifting a box at 2 o'clock.\""], answer: 3, why: "Diz o que aconteceu, como e quando." }
        ]
      }
    },
    {
      name: "Capítulo 2: O dia a dia no trabalho",
      lessons: [
        {
          title: "Pedir ajuda e confirmar instruções",
          objectives: ["O3"],
          minutes: 5,
          goal: "Pedir ajuda e repetir uma instrução antes de começar.",
          text: [
            "No trabalho, um erro pode custar tempo, dinheiro ou segurança. É sempre melhor perguntar do que adivinhar. Os bons trabalhadores fazem perguntas.",
            "Para pedir ajuda: \"Excuse me, can you help me?\" \"Can you show me how to do this?\" \"Where do I put these boxes?\" \"What should I do next?\" Se não entendeu: \"Sorry, can you explain that again, more slowly?\"",
            "Antes de começar, repita a instrução: \"So, first I clean the tables, then I fill the napkins?\" ou \"Okay, I put the blue boxes on shelf 3. Is that right?\" O seu chefe vai dizer \"Yes\" ou corrigir.",
            "Exemplo de conversa. Chefe: \"Please restock aisle 7 and then break down the empty boxes.\" Trabalhador: \"Okay. So, first I restock aisle 7, then I break down the boxes. Where do the boxes go?\" Chefe: \"In the recycling by the back door.\" Trabalhador: \"Got it. Thank you.\""
          ],
          steps: ["Ouça a instrução toda.", "Pergunte sobre tudo o que não entendeu.", "Repita os passos: \"So, first ..., then ...?\"", "Espere pelo \"Yes\" antes de começar.", "Pergunte outra vez se ficar parado: \"What should I do next?\""],
          words: [["\"Instruction\"", "instrução: palavras que dizem como fazer uma tarefa."], ["\"Show me\"", "mostre-me: faça à minha frente para eu ver como é."], ["\"Got it\"", "uma forma curta de dizer \"I understand\" (entendi)."]],
          slides: [
            { title: "Pergunte, não adivinhe", bullets: ["Os erros custam tempo, dinheiro e segurança", "Os bons trabalhadores fazem perguntas"] },
            { title: "Pedir ajuda", bullets: ["\"Excuse me, can you help me?\"", "\"Can you show me how to do this?\"", "\"What should I do next?\""] },
            { title: "Repita a instrução", bullets: ["\"So, first I clean the tables, then I fill the napkins?\"", "\"Is that right?\"", "Espere pelo \"Yes\" antes de começar"] }
          ],
          tryIt: "Peça a um parceiro ou a um familiar para lhe dar uma instrução de três passos em inglês (por exemplo como fazer uma sandes ou dobrar uma camisa). Repita-a com \"So, first ..., then ...?\" antes de a fazer. Depois troquem de papéis.",
          youCanNow: "pedir ajuda a um chefe ou colega e repetir uma instrução para a confirmar antes de começar.",
          quickCheck: [
            { objective: "O3", q: "O seu chefe dá uma instrução longa. O que faz antes de começar?", options: ["Começa e espera que esteja certo", "Repete os passos para confirmar", "Pergunta a um cliente", "Vai para a pausa"], answer: 1, why: "Repetir os passos apanha os erros antes de começar." },
            { objective: "O3", q: "Não sabe usar a máquina nova. O que diz?", options: ["\"Can you show me how to do this?\"", "\"Got it.\"", "\"Heads up!\"", "Nada; tenta na mesma"], answer: 0, why: "\"Can you show me?\" pede ajuda de forma segura e clara." }
          ]
        },
        {
          title: "Horários: turnos, atrasos, dias de doença e folgas",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ler as horas do seu turno e dizer ao seu chefe que vai chegar atrasado, que está doente ou que precisa de folga.",
          text: [
            "Um turno (\"shift\") é o tempo em que trabalha, por exemplo \"Monday, 7 a.m. to 3:30 p.m.\" \"a.m.\" é de manhã (antes do meio-dia) e \"p.m.\" é à tarde e à noite. O seu horário também pode dizer \"OFF\" nos dias em que não trabalha.",
            "Se vai chegar atrasado, diga ao seu chefe antes do turno: \"Hi, this is Carlos. I'm sorry, my bus is late. I will be about 20 minutes late.\" Se está doente: \"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\" Cada empregador tem as suas regras para avisar, por isso veja o seu manual ou pergunte ao seu chefe como e quando deve avisar.",
            "Para pedir uma folga, peça cedo, pessoalmente ou por escrito: \"Can I have Friday the 14th off? I have an appointment.\" Para trocar um turno com um colega: \"Can I switch shifts with Maria on Saturday?\"",
            "Exemplo de mensagem de texto: \"Hi Ms. Johnson, this is Carlos from the morning shift. I am sick today and cannot come in. I'm sorry. I will let you know about tomorrow.\""
          ],
          steps: ["Leia o seu horário: os dias, as horas de entrada e as horas de saída.", "Atrasado ou doente: diga ao seu chefe antes do turno.", "Diga quem é, o que se passa e quando vai chegar.", "Peça a folga cedo e diga a data.", "Siga as regras do seu empregador para avisar."],
          words: [["\"Shift\"", "turno: as horas em que trabalha num dia."], ["\"Call in sick\"", "avisar o empregador de que está doente e não pode trabalhar."], ["\"Time off\"", "folga: dias em que pede para não trabalhar."], ["\"Switch shifts\"", "trocar de turno com um colega."]],
          slides: [
            { title: "Leia o seu horário", bullets: ["\"Monday, 7 a.m. to 3:30 p.m.\"", "\"a.m.\" = manhã, \"p.m.\" = tarde e noite", "\"OFF\" = não trabalha"] },
            { title: "Atrasado ou doente", bullets: ["Avise antes do turno", "\"I will be about 20 minutes late.\"", "\"I'm sick today and I can't come in.\""] },
            { title: "Folgas e trocas", bullets: ["\"Can I have Friday the 14th off?\"", "\"Can I switch shifts with Maria on Saturday?\"", "Peça cedo"] },
            { title: "As regras do seu empregador", bullets: ["Cada empregador tem as suas regras para avisar", "Veja o seu manual ou pergunte ao seu chefe"] }
          ],
          tryIt: "Escreva duas mensagens a um chefe com um nome inventado: uma para dizer que vai chegar 15 minutos atrasado e outra para avisar que está doente. Cada uma diz quem é, o que se passa e quando vai chegar. Leia-as em voz alta como se fosse uma chamada.",
          youCanNow: "ler as horas do seu turno e dizer claramente ao seu chefe que vai chegar atrasado, que está doente ou que precisa de folga.",
          quickCheck: [
            { objective: "O4", q: "O seu horário diz \"Tuesday 2 p.m. - 10 p.m.\" A que horas começa a trabalhar?", options: ["Às 2 da manhã", "Às 10 da manhã", "Às 2 da tarde", "Às 10 da noite"], answer: 2, why: "\"p.m.\" quer dizer tarde ou noite, por isso 2 p.m. são as 2 da tarde." },
            { objective: "O4", q: "O seu autocarro está atrasado e vai perder o início do turno. O que faz?", options: ["Avisa o seu chefe antes de o turno começar", "Não diz nada e chega tarde", "Vai para casa", "Diz a um cliente"], answer: 0, why: "Avisar o chefe cedo é uma forma de respeito e ajuda-o a organizar o trabalho." }
          ]
        },
        {
          title: "Falar com clientes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Cumprimentar um cliente, oferecer ajuda e chamar outro trabalhador quando não puder ajudar.",
          text: [
            "Os clientes gostam de trabalhadores simpáticos e claros. Cumprimente-os: \"Hi, welcome!\" ou \"Good morning.\" Ofereça ajuda: \"Can I help you find something?\" \"What can I get for you?\"",
            "Se sabe a resposta, seja breve: \"Yes, it's in aisle 9.\" \"It comes with fries.\" Se não sabe, nunca adivinhe. Diga: \"Let me check for you.\" ou \"One moment, please. I'll get my manager.\"",
            "Se o cliente fala depressa demais: \"Sorry, could you say that again, please?\" Se está chateado, fique calmo e educado: \"I'm sorry about that. Let me get someone who can help.\" Termine com: \"Have a nice day!\"",
            "Exemplo de conversa. Trabalhador: \"Hi, welcome! Can I help you find something?\" Cliente: \"Do you have this jacket in a large?\" Trabalhador: \"Let me check for you. One moment, please.\" (vai ver) \"Yes, here you go.\" Cliente: \"Thanks!\" Trabalhador: \"You're welcome. Have a nice day!\""
          ],
          steps: ["Cumprimente: \"Hi, welcome!\"", "Ofereça ajuda: \"Can I help you find something?\"", "Responda de forma breve se sabe.", "Se não sabe: \"Let me check for you.\" ou chame um gerente.", "Termine: \"Have a nice day!\""],
          words: [["\"Customer\"", "cliente: uma pessoa que compra ou usa o que uma empresa vende."], ["\"Manager\"", "gerente: uma pessoa responsável por uma loja ou uma equipa."], ["\"Let me check\"", "uma forma educada de dizer que vai procurar a resposta."]],
          slides: [
            { title: "Cumprimente e ofereça ajuda", bullets: ["\"Hi, welcome!\"", "\"Can I help you find something?\"", "\"What can I get for you?\""] },
            { title: "Não sabe? Não adivinhe", bullets: ["\"Let me check for you.\"", "\"One moment, please. I'll get my manager.\""] },
            { title: "Momentos difíceis", bullets: ["\"Sorry, could you say that again, please?\"", "Cliente chateado: \"I'm sorry about that.\"", "\"Let me get someone who can help.\""] },
            { title: "Termine bem", bullets: ["\"You're welcome.\"", "\"Have a nice day!\""] }
          ],
          tryIt: "Tarefa final: escreva o seu guião de inglês para o trabalho que quer: a sua resposta a \"Tell me about yourself\", mais duas respostas de entrevista, três palavras de segurança com o que querem dizer, uma mensagem para avisar que está doente ou atrasado, e duas frases para um cliente ou para pedir ajuda a um colega. Pratique-o em voz alta ou numa dramatização, e grave-se se puder.",
          youCanNow: "cumprimentar um cliente, oferecer ajuda e chamar a pessoa certa quando não sabe a resposta.",
          quickCheck: [
            { objective: "O5", q: "Um cliente faz uma pergunta e você não sabe a resposta. O que diz?", options: ["Adivinha uma resposta", "\"I don't know\" e vai-se embora", "\"That's not my job.\"", "\"Let me check for you.\""], answer: 3, why: "Ir ver ou chamar um gerente é educado e dá ao cliente a resposta certa." },
            { objective: "O5", q: "Um cliente vem ter consigo. O que é bom dizer primeiro?", options: ["\"What?\"", "\"Hi, welcome! Can I help you find something?\"", "\"Heads up!\"", "\"I'm sick today.\""], answer: 1, why: "Um cumprimento e uma oferta de ajuda começam bem a conversa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: O dia a dia no trabalho",
        questions: [
          { objective: "O3", q: "O seu chefe diz \"Put the red boxes on shelf 2.\" Como confirma?", options: ["\"Got it\" e põe-nas na prateleira 3", "\"So, the red boxes go on shelf 2?\"", "Não diz nada", "\"Have a nice day!\""], answer: 1, why: "Repetir a instrução confirma que ouviu bem." },
          { objective: "O3", q: "Acabou a sua tarefa e não sabe o que fazer. O que pergunta?", options: ["\"What should I do next?\"", "\"Can I go home?\"", "\"Where is the exit?\"", "\"Watch out!\""], answer: 0, why: "Perguntar o que fazer a seguir mostra que está pronto para trabalhar." },
          { objective: "O4", q: "O que é um \"shift\"?", options: ["Um tipo de farda", "Um sinal de segurança", "As horas em que trabalha num dia", "Um dia de folga"], answer: 2, why: "Um turno é o tempo em que trabalha." },
          { objective: "O4", q: "Precisa da próxima sexta-feira de folga para uma consulta. O que diz, e quando?", options: ["Nada; simplesmente não vai", "Diz a um cliente na sexta-feira", "Envia uma mensagem ao chefe durante o turno de sexta-feira", "Pede cedo ao seu chefe: \"Can I have Friday the 14th off?\""], answer: 3, why: "Pedir cedo, com a data, dá ao seu chefe tempo para se organizar." },
          { objective: "O5", q: "Um cliente está chateado. Qual é a melhor coisa a dizer?", options: ["\"Not my problem.\"", "\"Calm down!\"", "\"I'm sorry about that. Let me get someone who can help.\"", "\"Goodbye.\""], answer: 2, why: "Ficar calmo e chamar ajuda é educado e resolve o problema." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Inglês para o Trabalho (ESL)",
    questions: [
      { objective: "O1", q: "Numa entrevista, \"Tell me about yourself\" quer dizer:", options: ["Fale-lhes do seu trabalho e dos seus pontos fortes", "Conte-lhes a história toda da sua vida", "Faça-lhes perguntas sobre eles", "Diga a sua morada"], answer: 0, why: "Querem ouvir sobre o seu trabalho, as suas competências e os seus objetivos em poucas frases." },
      { objective: "O1", q: "Qual é uma boa resposta a \"What are your strengths?\"", options: ["\"Nothing.\"", "\"I don't know.\"", "\"I'm sick today.\"", "\"I am always on time and I learn fast.\""], answer: 3, why: "Diz duas coisas que faz bem." },
      { objective: "O1", q: "Trabalhou como pedreiro no seu país de origem. Deve dizê-lo na entrevista?", options: ["Não, não conta", "Sim: \"In Mexico I built houses for five years.\"", "Só se perguntarem em espanhol", "Só no papel"], answer: 1, why: "A experiência de trabalho do seu país de origem conta e mostra as suas competências." },
      { objective: "O2", q: "O que quer dizer um sinal \"Caution\"?", options: ["Tenha cuidado", "A saída", "A sala de pausa", "Comida grátis"], answer: 0, why: "\"Caution\" quer dizer tenha cuidado." },
      { objective: "O2", q: "Alguém grita \"Watch out!\" O que faz?", options: ["Continua a andar", "Grita também", "Para, olha e afasta-se do perigo", "Fecha os olhos"], answer: 2, why: "\"Watch out!\" avisa de um perigo perto de si." },
      { objective: "O2", q: "O que é um \"hazard\"?", options: ["Um tipo de ferramenta", "Alguma coisa que o pode magoar", "Um cliente", "Um horário"], answer: 1, why: "Um \"hazard\" é alguma coisa que o pode magoar, como um chão molhado." },
      { objective: "O2", q: "Vê óleo no chão no corredor 4. O que diz ao seu chefe?", options: ["\"Have a nice day!\"", "\"Can I switch shifts?\"", "\"Got it.\"", "\"Excuse me, there is oil on the floor in aisle 4.\""], answer: 3, why: "Diga qual é o perigo e onde está." },
      { objective: "O2", q: "Qual destes é um direito do trabalhador na lista da OSHA?", options: ["Almoço grátis todos os dias", "Formação de segurança numa língua que entende", "Escolher o seu próprio salário", "Nenhum horário"], answer: 1, why: "A OSHA inclui a formação de segurança numa língua que entende entre os direitos do trabalhador." },
      { objective: "O2", q: "Quando deve comunicar uma pequena lesão no trabalho?", options: ["No mesmo dia", "Só se piorar", "No fim do ano", "Nunca"], answer: 0, why: "Comunique todas as lesões no mesmo dia, mesmo as pequenas." },
      { objective: "O3", q: "Não entende uma instrução. O que é melhor?", options: ["Adivinhar e começar", "Perguntar a um cliente", "Perguntar: \"Sorry, can you explain that again, more slowly?\"", "Ir para casa"], answer: 2, why: "Perguntar é mais seguro e mais rápido do que adivinhar." },
      { objective: "O3", q: "Que frase repete uma instrução?", options: ["\"Hi, welcome!\"", "\"Heads up!\"", "\"I'm sick today.\"", "\"So, first I sweep, then I mop. Is that right?\""], answer: 3, why: "Repete os passos e pergunta se estão certos." },
      { objective: "O3", q: "O que quer dizer \"Got it\"?", options: ["Entendi", "Estou constipado", "Perdi-o", "Dê-mo"], answer: 0, why: "\"Got it\" é uma forma curta de dizer \"I understand\" (entendi)." },
      { objective: "O4", q: "O que quer dizer \"a.m.\" num horário?", options: ["Tarde", "Noite", "Manhã, antes do meio-dia", "Um dia de folga"], answer: 2, why: "\"a.m.\" é a manhã." },
      { objective: "O4", q: "Está doente. Qual é uma boa mensagem para o seu chefe?", options: ["\"Not coming.\"", "\"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\"", "Nada", "\"Watch out!\""], answer: 1, why: "Diz quem é, o que se passa e que não vai." },
      { objective: "O4", q: "Como encontra as regras do seu local de trabalho para avisar faltas?", options: ["Pergunta a um cliente", "Adivinha", "Usa as regras de outra empresa", "Vê o seu manual ou pergunta ao seu chefe"], answer: 3, why: "Cada empregador tem as suas regras para avisar." },
      { objective: "O5", q: "O que quer dizer \"Let me check for you\"?", options: ["Vou procurar a resposta", "Vá-se embora", "Eu sou o gerente", "É grátis"], answer: 0, why: "Diz com educação que vai procurar a resposta." },
      { objective: "O5", q: "Um cliente pede uma coisa que você não conhece. O que NÃO deve fazer?", options: ["Chamar o seu gerente", "Dizer \"Let me check for you\"", "Adivinhar uma resposta", "Perguntar a um colega"], answer: 2, why: "Adivinhar pode dar ao cliente uma informação errada." },
      { objective: "O5", q: "Qual é uma forma educada de terminar com um cliente?", options: ["\"What?\"", "\"Have a nice day!\"", "\"Heads up!\"", "\"I'm late.\""], answer: 1, why: "\"Have a nice day!\" é uma despedida simpática." },
      { objective: "O1", q: "No final de uma entrevista, que pergunta é boa para fazer?", options: ["\"What does a normal day look like?\"", "\"Can I leave now?\"", "\"Watch out!\"", "\"Where is the bathroom?\""], answer: 0, why: "Uma pergunta sobre o trabalho mostra que está interessado." },
      { objective: "O3", q: "A sua nova tarefa tem um passo que não conhece. O que diz?", options: ["\"Have a nice day!\"", "\"I'm sick today.\"", "\"Let me check for you.\"", "\"Can you show me how to do this step?\""], answer: 3, why: "Pedir para lhe mostrarem é a forma segura de aprender um passo novo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, pratique essa parte e tente outra vez.",
    criteria: [
      { name: "Respostas de entrevista", objective: "O1", notYet: "Faltam respostas, são muito longas, ou falam da vida privada em vez do trabalho.", meets: "\"Tell me about yourself\" e mais duas respostas, cada uma com 2 a 4 frases claras e um exemplo real.", exceeds: "Diz as respostas em voz alta sem ler e acrescenta uma pergunta para fazer no final." },
      { name: "Palavras de segurança", objective: "O2", notYet: "Menos de três palavras, ou os significados estão errados.", meets: "Três palavras ou sinais de segurança do trabalho, cada um com o significado certo.", exceeds: "Também mostra como comunicar um perigo ou uma lesão: o quê, onde e quando." },
      { name: "Pedir ajuda", objective: "O3", notYet: "Nenhuma frase para pedir ajuda, ou nenhuma forma de confirmar uma instrução.", meets: "Uma frase para pedir ajuda e uma frase que repete uma instrução.", exceeds: "Usa-as bem numa dramatização com um parceiro." },
      { name: "Mensagem de atraso ou doença", objective: "O4", notYet: "Falta quem é, o que se passa ou quando vai chegar.", meets: "Uma mensagem clara e educada com o nome, o motivo e a hora.", exceeds: "Também anota como o seu empregador quer que se avise (manual ou chefe)." },
      { name: "Frases para clientes", objective: "O5", notYet: "Nenhuma frase para clientes, ou as frases não são educadas.", meets: "Um cumprimento com uma oferta de ajuda, e uma frase para quando não sabe.", exceeds: "Lida com educação com um cliente chateado numa dramatização." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que têm uma entrevista de emprego em inglês em 30 dias, e quantos recebem uma oferta (inquérito de seguimento)",
      "Alunos que dizem ter pedido ajuda a um chefe ou comunicado um perigo em inglês em 30 dias",
      "Os empregadores parceiros dizem ter menos erros e incidentes de segurança causados por instruções mal entendidas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador para ver as lições, ou uma cópia impressa do texto das lições",
      "Papel e caneta para os guiões e os cartões de palavras de segurança",
      "Um parceiro para as dramatizações, ou um telefone para se gravar",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Faça cada exemplo de conversa como uma dramatização: leiam-no, troquem de papéis e depois mudem os pormenores (outro trabalho, outra hora ou outro problema).",
      "As versões traduzidas mantêm as frases em inglês em inglês; explique-as na língua dos alunos, mas pratique-as em inglês.",
      "Adapte a lição de segurança aos empregos que os alunos procuram; se puder, traga sinais reais ou fotografias de locais de trabalho da zona.",
      "As regras para avisar faltas, para pedir folgas e de segurança mudam de empregador para empregador: lembre aos alunos que sigam o manual e a formação do seu próprio empregador. Este curso ensina a língua, não as regras do empregador.",
      "Use nomes e pormenores inventados nas comunicações e mensagens de prática. Junte este curso à ajuda na procura de emprego (veja \"Currículos, LinkedIn e Entrevistas de Emprego\")."
    ]
  }
};
