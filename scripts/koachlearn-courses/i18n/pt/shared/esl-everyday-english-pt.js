"use strict";

// Koach Learn course (Portuguese translation of shared/esl-everyday-english.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// ESL course: every English phrase being taught stays in English inside double quotes; only the explanations are translated.

module.exports = {
  id: "esl-everyday-english-pt",
  lang: "pt",
  translationOf: "esl-everyday-english",
  category: "Workforce Development",
  name: "Inglês para o Dia a Dia (ESL)",
  skills: "Apresentar-se, Pedir a alguém para repetir ou falar mais devagar, Fazer compras e pagar, Falar com o médico e marcar consultas, Pedir indicações do caminho",
  outcome: "usar frases curtas e educadas em inglês para se apresentar, pedir às pessoas que repitam ou falem mais devagar, fazer compras e pagar, dizer ao médico o que tem, marcar uma consulta por telefone e pedir indicações do caminho.",
  about: [
    "Este curso é para adultos que estão a aprender inglês e querem usá-lo no dia a dia nos Estados Unidos: na loja, no médico, ao telefone, na escola do seu filho e na rua.",
    "Cada lição dá-lhe frases curtas para dizer, uma pequena conversa de exemplo e uma prática que pode fazer em voz alta em casa, sozinho ou com um parceiro. Não precisa de uma gramática perfeita. Precisa de frases que funcionam e de coragem para as usar.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, leia a conversa de exemplo em voz alta e depois faça a tarefa \"Experimente agora\". Há duas perguntas rápidas depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final.",
    "No final, você faz o seu próprio cartão de frases de inglês do dia a dia, com as frases de que mais precisa, e pratica-o em voz alta."
  ],
  finalTask: "Faça o seu próprio cartão de frases de inglês do dia a dia e pratique-o em voz alta. Numa página escreva: (1) uma apresentação sobre você com 3 a 4 frases, (2) três frases para pedir a alguém que repita, fale mais devagar ou soletre, (3) duas perguntas para uma loja onde costuma ir, (4) um pequeno guião de telefone para marcar uma consulta no médico e (5) uma pergunta para pedir o caminho para um lugar onde vai muitas vezes. Leia o cartão todo em voz alta, ou faça a cena com um parceiro, e grave-se se puder.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que estão a aprender inglês como segunda língua nos Estados Unidos: imigrantes e refugiados, pessoas à procura de emprego, pais e mães, pessoas mais velhas e pessoas que voltam para casa depois da prisão cuja primeira língua não é o inglês.",
    startingPoint: "Conhecem algumas palavras em inglês e sabem dizer alguns cumprimentos. Conseguem ler frases curtas e simples. Muitas vezes entendem mais do que conseguem dizer, e ficam nervosos ao falar com desconhecidos ou ao telefone.",
    gap: "O dia a dia pede inglês falado e curto: conhecer pessoas, fazer compras, ir ao médico, fazer chamadas e pedir o caminho. Sem algumas frases prontas e sem uma maneira de pedir às pessoas que repitam ou falem mais devagar, os alunos evitam estas conversas, dependem de outras pessoas ou entendem mal coisas importantes, como a hora de uma consulta.",
    constraints: [
      "Nível de língua: inglês de iniciante a pré-intermédio; palavras muito comuns e frases curtas",
      "O curso vai ser traduzido: as frases em inglês que se ensinam ficam em inglês, entre aspas",
      "Aparelhos: um telefone ou um computador da biblioteca; a prática funciona com papel e com a voz",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e a família",
      "Privacidade: a prática usa nomes, números e datas de nascimento inventados, nunca números privados verdadeiros"
    ],
    prerequisites: "Saber ler o alfabeto e palavras simples em inglês. Quem ainda não lê inglês pode fazer o curso com um professor ou um ajudante que lê em voz alta."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Quando conhece uma pessoa nova", action: "apresentar-se em inglês com o seu nome, de onde é e o que faz, e fazer uma pergunta de volta", standard: "em pelo menos três frases curtas" },
    { id: "O2", condition: "Quando não entende o que alguém diz", action: "pedir à pessoa que repita, fale mais devagar ou soletre uma palavra, com uma frase educada em inglês", standard: "em vez de fingir que entendeu" },
    { id: "O3", condition: "Numa loja", action: "perguntar onde está um artigo, perguntar o preço e dizer como vai pagar", standard: "usando frases da lição" },
    { id: "O4", condition: "No consultório do médico ou ao telefone", action: "dizer o que tem e marcar uma consulta para um dia e uma hora que lhe sirvam", standard: "dizendo o seu nome, o problema e a hora, e repetindo a hora" },
    { id: "O5", condition: "Com um lugar aonde precisa de ir", action: "pedir o caminho e repetir as indicações para as confirmar", standard: "usando palavras de direção como left, right, straight e next to" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer pessoas e fazer compras",
      lessons: [
        {
          title: "Cumprimentar e apresentar-se",
          objectives: ["O1"],
          minutes: 5,
          goal: "Apresentar-se em três frases curtas e fazer uma pergunta de volta.",
          text: [
            "Quando conhece alguém novo, comece com um cumprimento: \"Hello.\" ou \"Hi.\" De manhã pode dizer \"Good morning.\" Depois diga o seu nome: \"My name is Ana.\" ou \"I'm Ana.\"",
            "Acrescente de onde é e o que faz: \"I'm from Guatemala.\" \"I work at a restaurant.\" \"I'm looking for a job.\" Depois faça uma pergunta de volta: \"What's your name?\" \"Where are you from?\" Quando a pessoa responder, diga \"Nice to meet you.\"",
            "Conversa de exemplo. A: \"Hi, I'm Ana. What's your name?\" B: \"I'm Sam. Nice to meet you.\" A: \"Nice to meet you too. I'm from Guatemala. I work at a restaurant.\" B: \"Oh, which one?\"",
            "Não precisa de frases longas. Três frases curtas e claras são uma boa apresentação. Sorria, olhe para a pessoa e fale um pouco devagar."
          ],
          steps: ["Cumprimente: \"Hello.\" ou \"Good morning.\"", "Diga o seu nome: \"My name is ...\" ou \"I'm ...\"", "Diga de onde é: \"I'm from ...\"", "Diga o que faz: \"I work at ...\" ou \"I'm looking for a job.\"", "Faça uma pergunta de volta: \"What's your name?\" Depois diga \"Nice to meet you.\""],
          words: [["\"I'm\"", "uma forma curta de dizer \"I am\" (eu sou, eu estou)."], ["\"Nice to meet you\"", "uma frase educada que se diz quando se conhece alguém pela primeira vez (muito prazer)."], ["Apresentar-se", "dizer a uma pessoa nova quem você é."]],
          slides: [
            { title: "Cumprimente a pessoa", bullets: ["\"Hello.\" \"Hi.\"", "\"Good morning.\" \"Good afternoon.\""] },
            { title: "Três frases curtas", bullets: ["\"My name is Ana.\"", "\"I'm from Guatemala.\"", "\"I work at a restaurant.\""] },
            { title: "Faça uma pergunta de volta", bullets: ["\"What's your name?\"", "\"Where are you from?\"", "Depois: \"Nice to meet you.\""] },
            { title: "Dicas", bullets: ["Curto e claro é forte", "Sorria e olhe para a pessoa", "Fale um pouco devagar"] }
          ],
          sources: [{ name: "USA Learns: cursos de inglês gratuitos para adultos (Sacramento County Office of Education)", url: "https://www.usalearns.org/" }],
          tryIt: "Escreva a sua própria apresentação: o seu nome, de onde é e o que faz, em três frases curtas em inglês. Acrescente uma pergunta para fazer de volta. Leia-a em voz alta três vezes. Depois diga-a sem olhar para o papel.",
          youCanNow: "apresentar-se em três frases curtas em inglês e fazer uma pergunta de volta a uma pessoa nova.",
          quickCheck: [
            { objective: "O1", q: "Alguém diz \"Nice to meet you.\" Qual é uma boa resposta?", options: ["\"Goodbye.\"", "\"Nice to meet you too.\"", "\"I don't know.\"", "\"How much is it?\""], answer: 1, why: "\"Nice to meet you too\" é a resposta educada quando conhece alguém." },
            { objective: "O1", q: "Que apresentação tem um nome, de onde a pessoa é e o que faz?", options: ["\"Hello. Hello. Hello.\"", "\"Where is the bus?\"", "\"I like pizza.\"", "\"I'm Ali. I'm from Somalia. I drive a truck.\""], answer: 3, why: "Dá o nome, o país e o trabalho em três frases curtas." }
          ]
        },
        {
          title: "Pedir a alguém para repetir, falar mais devagar ou soletrar",
          objectives: ["O2"],
          minutes: 5,
          goal: "Pedir a uma pessoa que repita, fale mais devagar ou soletre uma palavra, com uma frase educada.",
          text: [
            "Toda a gente perde palavras às vezes, até quem fala inglês desde criança. É normal e educado perguntar. É muito melhor do que dizer \"yes\" (sim) quando não entendeu.",
            "Frases úteis: \"Sorry, can you repeat that, please?\" \"Can you speak more slowly, please?\" \"How do you spell that?\" \"What does that word mean?\" \"Can you write it down, please?\"",
            "Para confirmar que entendeu, repita: \"So, Tuesday at 3 o'clock?\" Se perdeu só uma parte, pergunte por essa parte: \"Sorry, what time?\"",
            "Conversa de exemplo. A: \"Your pickup is at the side entrance at four fifteen.\" B: \"Sorry, can you speak more slowly, please?\" A: \"Side entrance. Four fifteen.\" B: \"So, the side door at 4:15?\" A: \"Yes, that's right.\""
          ],
          steps: ["Não finja que entendeu.", "Diga \"Sorry,\" e peça: repetir, falar mais devagar, soletrar ou escrever.", "Repita a parte importante para a confirmar.", "Espere pelo \"Yes, that's right.\""],
          words: [["\"Repeat\"", "dizer outra vez."], ["\"Slowly\"", "devagar, não depressa."], ["\"Spell\"", "dizer as letras de uma palavra, uma a uma (soletrar)."]],
          slides: [
            { title: "Perguntar é normal e educado", bullets: ["Toda a gente perde palavras às vezes", "Perguntar é melhor do que um \"yes\" errado"] },
            { title: "Frases para pedir", bullets: ["\"Sorry, can you repeat that, please?\"", "\"Can you speak more slowly, please?\"", "\"How do you spell that?\"", "\"Can you write it down, please?\""] },
            { title: "Confirme o que ouviu", bullets: ["Repita: \"So, Tuesday at 3 o'clock?\"", "Pergunte por uma parte: \"Sorry, what time?\""] }
          ],
          tryIt: "Escreva as quatro frases para pedir ajuda num cartão pequeno e guarde-o no bolso ou no telefone. Leia cada uma em voz alta cinco vezes. Depois ponha uma rádio de conversa ou um vídeo em inglês e, cada vez que perder alguma coisa, diga uma das frases em voz alta.",
          youCanNow: "pedir a alguém que repita, fale mais devagar, soletre ou escreva uma palavra, e repetir o que ouviu para o confirmar.",
          quickCheck: [
            { objective: "O2", q: "Um funcionário fala muito depressa e você não entende. O que diz?", options: ["\"Can you speak more slowly, please?\"", "\"Yes, yes.\"", "Nada; vai-se embora", "\"Goodbye.\""], answer: 0, why: "Pedir à pessoa que fale mais devagar é educado e dá-lhe a informação." },
            { objective: "O2", q: "A enfermeira diz o nome do seu médico e você não o consegue escrever. O que pergunta?", options: ["\"How much is it?\"", "\"Where are you from?\"", "\"How do you spell that?\"", "\"What time is it?\""], answer: 2, why: "\"How do you spell that?\" pede as letras para poder escrever o nome." }
          ]
        },
        {
          title: "Fazer compras: encontrar coisas, preços e pagar",
          objectives: ["O3"],
          minutes: 5,
          goal: "Perguntar onde está um artigo, perguntar o preço e dizer como vai pagar.",
          text: [
            "Para encontrar alguma coisa, diga \"Excuse me\" e pergunte: \"Where can I find the rice?\" ou \"Do you have diapers?\" (fraldas). O funcionário pode dizer \"Aisle 5\" (um corredor da loja com número) ou \"Sorry, we're out of it.\" (acabou).",
            "Para perguntar o preço: \"How much is this?\", ou \"How much are these?\" para mais de uma coisa. Na caixa, o operador de caixa pode perguntar: \"Cash or card?\" \"Do you want a bag?\" \"Do you want your receipt?\" Responda: \"Card, please.\" \"No bag, thanks.\" \"Yes, please.\"",
            "Guarde o seu recibo. Para devolver alguma coisa, diga: \"I'd like to return this, please. Here is my receipt.\" Cada loja tem as suas próprias regras de devolução, por isso pode perguntar: \"What is your return policy?\"",
            "Conversa de exemplo. A: \"Excuse me, where can I find the milk?\" B: \"In the back, next to the eggs.\" A: \"Thanks. How much is this?\" B: \"Three ninety-nine.\" A: \"Okay. Card, please.\""
          ],
          steps: ["Diga \"Excuse me\" para pedir ajuda.", "Pergunte \"Where can I find ...?\"", "Pergunte \"How much is this?\"", "Na caixa, responda a \"Cash or card?\" e a \"Do you want a bag?\"", "Guarde o recibo para devoluções."],
          words: [["\"Aisle\"", "um corredor da loja com prateleiras dos dois lados. Soa como \"I'll\"."], ["\"Receipt\"", "o papel que mostra o que comprou e pagou (recibo). O p não se pronuncia."], ["\"Return\"", "levar uma coisa de volta à loja para receber o seu dinheiro (devolver)."], ["\"Cashier\"", "o funcionário que recebe o seu dinheiro na caixa (operador de caixa)."]],
          slides: [
            { title: "Encontrar coisas", bullets: ["\"Excuse me, where can I find the rice?\"", "\"Do you have diapers?\"", "Resposta: \"Aisle 5.\""] },
            { title: "Perguntar o preço", bullets: ["Uma coisa: \"How much is this?\"", "Mais de uma: \"How much are these?\""] },
            { title: "Na caixa", bullets: ["\"Cash or card?\" - \"Card, please.\"", "\"Do you want a bag?\" - \"No bag, thanks.\"", "\"Do you want your receipt?\" - \"Yes, please.\""] },
            { title: "Devoluções", bullets: ["Guarde o seu recibo", "\"I'd like to return this, please.\"", "\"What is your return policy?\""] }
          ],
          tryIt: "Faça a cena com um parceiro, ou faça os dois papéis em voz alta: você está num supermercado. Pergunte onde estão duas coisas, pergunte o preço de uma e responda às três perguntas do operador de caixa. Da próxima vez que for às compras, use uma frase a sério.",
          youCanNow: "perguntar onde está uma coisa numa loja, perguntar o preço, responder ao operador de caixa e pedir para devolver uma coisa.",
          quickCheck: [
            { objective: "O3", q: "Quer saber o preço de duas camisas. O que pergunta?", options: ["\"Where are you from?\"", "\"Can you spell that?\"", "\"What time is it?\"", "\"How much are these?\""], answer: 3, why: "\"How much are these?\" pergunta o preço de mais de uma coisa." },
            { objective: "O3", q: "A operadora de caixa pergunta \"Cash or card?\" O que ela quer saber?", options: ["Como vai pagar", "O seu nome", "Onde mora", "Se quer um saco"], answer: 0, why: "\"Cash or card?\" pergunta como vai pagar (dinheiro ou cartão)." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer pessoas e fazer compras",
        questions: [
          { objective: "O1", q: "Qual é uma boa primeira frase quando conhece alguém?", options: ["\"How much is this?\"", "\"Hi, my name is Rosa.\"", "\"Turn left.\"", "\"I have a fever.\""], answer: 1, why: "Um cumprimento e o seu nome são o começo de uma apresentação." },
          { objective: "O1", q: "Já disse o seu nome. Qual é uma boa pergunta para fazer de volta?", options: ["\"Where is the milk?\"", "\"Cash or card?\"", "\"What's your name?\"", "\"Can I return this?\""], answer: 2, why: "Perguntar o nome da outra pessoa mantém a conversa." },
          { objective: "O2", q: "Não entendeu uma morada. Qual é a melhor coisa a fazer?", options: ["Dizer \"yes\" e adivinhar", "Perguntar \"Can you write it down, please?\"", "Ir-se embora", "Perguntar \"How much is it?\""], answer: 1, why: "Pedir à pessoa que a escreva dá-lhe a morada exata." },
          { objective: "O2", q: "Alguém diz \"Your appointment is Friday at nine.\" Como confirma que ouviu bem?", options: ["\"So, Friday at 9?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"I'm from Haiti.\""], answer: 0, why: "Repetir o dia e a hora deixa a pessoa confirmar ou corrigir." },
          { objective: "O3", q: "Quer devolver uns sapatos que não servem. O que diz?", options: ["\"Where are you from?\"", "\"How do you spell that?\"", "\"Turn right.\"", "\"I'd like to return this, please. Here is my receipt.\""], answer: 3, why: "Esta frase pede para devolver o artigo e mostra o recibo." }
        ]
      }
    },
    {
      name: "Capítulo 2: O médico, o telefone e andar pela cidade",
      lessons: [
        {
          title: "No médico: dizer o que tem",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dizer a um médico ou enfermeiro o que tem, onde dói e há quanto tempo.",
          text: [
            "Na receção, diga: \"Hi, I have an appointment at 10 o'clock. My name is Ana Lopez.\" Podem pedir a sua data de nascimento e o seu cartão do seguro de saúde.",
            "Para dizer o que tem: \"I have a headache.\" \"I have a fever.\" \"My stomach hurts.\" \"My back hurts.\" \"I feel dizzy.\" Depois diga há quanto tempo: \"It started two days ago.\" ou \"I've had it since Monday.\" O médico pode perguntar: \"Does it hurt here?\" Responda: \"Yes, there.\" ou \"No.\"",
            "Se precisar de ajuda com o inglês, pode perguntar: \"Do you have an interpreter?\" Um intérprete é uma pessoa que o ajuda a falar com o médico na sua língua. Peça ao médico que escreva as instruções: \"Can you write that down, please?\" Este curso ensina só palavras. As perguntas sobre a sua saúde são para o seu médico ou enfermeiro.",
            "Numa emergência, como dificuldade em respirar ou dor no peito, ligue para o 911 e diga: \"I need an ambulance.\" Depois diga onde está."
          ],
          steps: ["Na receção: diga a hora da consulta e o seu nome.", "Diga o que tem: \"I have a ...\" ou \"My ... hurts.\"", "Diga há quanto tempo: \"for two days\" ou \"since Monday\".", "Peça um intérprete ou instruções por escrito se precisar."],
          words: [["\"Appointment\"", "um dia e uma hora marcados para ver alguém, como um médico (consulta)."], ["\"Fever\"", "quando o corpo está quente demais porque está doente (febre)."], ["\"Interpreter\"", "uma pessoa que ajuda duas pessoas a falar em línguas diferentes (intérprete)."], ["\"Insurance card\"", "o cartão do seu seguro de saúde, que o consultório pede para ver."]],
          slides: [
            { title: "Na receção", bullets: ["\"I have an appointment at 10 o'clock.\"", "\"My name is Ana Lopez.\""] },
            { title: "Diga o que tem", bullets: ["\"I have a headache.\" \"I have a fever.\"", "\"My stomach hurts.\" \"My back hurts.\"", "\"I feel dizzy.\""] },
            { title: "Diga há quanto tempo", bullets: ["\"for two days\"", "\"since Monday\""] },
            { title: "Peça ajuda para entender", bullets: ["\"Do you have an interpreter?\"", "\"Can you write that down, please?\"", "Emergência: ligue para o 911, \"I need an ambulance.\""] }
          ],
          tryIt: "Só para praticar, com um problema inventado: escreva três frases para o médico, por exemplo \"I have a sore throat. It started on Sunday. It hurts when I swallow.\" Leia-as em voz alta. Depois pratique a frase da receção com um nome e uma hora inventados.",
          youCanNow: "apresentar-se na receção, dizer o que tem e há quanto tempo, e pedir um intérprete ou instruções por escrito.",
          quickCheck: [
            { objective: "O4", q: "Dói-lhe a cabeça desde ontem. O que diz ao médico?", options: ["\"I've had a headache since yesterday.\"", "\"How much is this?\"", "\"Turn left.\"", "\"Cash, please.\""], answer: 0, why: "Diz o problema e há quanto tempo dura." },
            { objective: "O4", q: "Não entende bem o médico. O que pode perguntar?", options: ["\"Where is aisle 5?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"Do you have an interpreter?\""], answer: 3, why: "Um intérprete ajuda você e o médico a entenderem-se." }
          ]
        },
        {
          title: "Chamadas: marcar uma consulta e ligar para a escola",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Marcar uma consulta por telefone e repetir o dia e a hora.",
          text: [
            "As chamadas são difíceis porque não vê a pessoa. Prepare as suas palavras antes de ligar e tenha uma caneta e papel à mão.",
            "Para marcar uma consulta: \"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\" Eles perguntam: \"What is it for?\" \"What day works for you?\" Responda: \"I have a cough.\" \"Tuesday morning is good.\" Depois repita: \"So, Tuesday the 12th at 9:30?\" Para mudar: \"I need to change my appointment, please.\"",
            "Para ligar para a escola do seu filho quando ele está doente: \"Hi, this is Ana Lopez. My son, David Lopez, is sick today. He is in second grade. He will not come to school today.\"",
            "Se a chamada for depressa demais, use as frases da Lição 2: \"Sorry, can you speak more slowly, please?\" \"Can you spell that?\" Se disserem um número de telefone, repita-o em grupos: \"5-5-5, 0-1-2-3?\""
          ],
          steps: ["Escreva o que vai dizer antes de ligar.", "Diga o seu nome e porque está a ligar.", "Responda: para que é, e que dia e hora lhe servem.", "Escreva o dia e a hora, e depois repita-os.", "Termine: \"Thank you. Bye.\""],
          words: [["\"Make an appointment\"", "marcar um dia e uma hora para ver alguém."], ["\"Change\" / \"cancel\"", "mudar para outra hora / desmarcar a consulta."], ["\"What works for you?\"", "uma pergunta que quer dizer \"que dia ou hora é bom para você?\""]],
          slides: [
            { title: "Antes de ligar", bullets: ["Escreva o que vai dizer", "Caneta e papel à mão"] },
            { title: "Marcar uma consulta", bullets: ["\"I'd like to make an appointment, please.\"", "\"What day works for you?\" - \"Tuesday morning.\"", "Repita: \"So, Tuesday the 12th at 9:30?\""] },
            { title: "Ligar para a escola", bullets: ["\"My son, David Lopez, is sick today.\"", "\"He is in second grade.\"", "\"He will not come to school today.\""] },
            { title: "Quando vai depressa demais", bullets: ["\"Can you speak more slowly, please?\"", "Repita os números em grupos"] }
          ],
          tryIt: "Escreva um pequeno guião de telefone para marcar uma consulta no médico, com um nome e um problema inventados. Faça a cena com um parceiro, ou diga os dois papéis em voz alta. No fim, não se esqueça de repetir o dia e a hora.",
          youCanNow: "marcar ou mudar uma consulta por telefone, ligar para a escola do seu filho e repetir o dia e a hora para os confirmar.",
          quickCheck: [
            { objective: "O4", q: "O consultório diz \"What day works for you?\" O que querem?", options: ["A sua morada", "O seu trabalho", "Um dia que seja bom para você", "O seu cartão do seguro"], answer: 2, why: "\"What day works for you?\" pergunta que dia é bom para você." },
            { objective: "O2", q: "O consultório diz a hora da sua consulta. O que faz a seguir?", options: ["Desliga logo", "Repete o dia e a hora para confirmar", "Diz \"Nice to meet you\"", "Pergunta \"How much are these?\""], answer: 1, why: "Repetir o dia e a hora garante que ouviu bem." }
          ]
        },
        {
          title: "Pedir indicações do caminho",
          objectives: ["O5"],
          minutes: 5,
          goal: "Pedir o caminho para um lugar e repetir as indicações para as confirmar.",
          text: [
            "Comece com \"Excuse me.\" Depois pergunte: \"How do I get to the library?\" ou \"Where is the bus stop?\" ou \"Is the post office near here?\"",
            "Palavras de direção: \"Go straight.\" \"Turn left.\" \"Turn right.\" \"It's on the corner.\" \"It's next to the bank.\" \"It's across from the park.\" \"Go two blocks.\" Um \"block\" (quarteirão) é a parte de uma rua entre duas esquinas.",
            "Repita as indicações: \"So, go straight two blocks, then turn left?\" A pessoa vai dizer \"Yes\" ou corrigir. Se for demasiado, pergunte: \"Can you show me on my phone?\" ou \"Can you point?\"",
            "Conversa de exemplo. A: \"Excuse me, how do I get to the clinic?\" B: \"Go straight two blocks and turn right. It's next to the pharmacy.\" A: \"So, straight two blocks, turn right, next to the pharmacy?\" B: \"That's right.\" A: \"Thank you!\""
          ],
          steps: ["Diga \"Excuse me.\"", "Pergunte \"How do I get to ...?\" ou \"Where is ...?\"", "Esteja atento a left, right, straight, blocks e next to.", "Repita as indicações.", "Diga \"Thank you!\""],
          words: [["\"Straight\"", "em frente, sem virar."], ["\"Block\"", "a parte de uma rua entre duas esquinas (quarteirão)."], ["\"Across from\"", "do outro lado da rua, em frente a alguma coisa."], ["\"Next to\"", "mesmo ao lado de alguma coisa."]],
          slides: [
            { title: "Pergunte o caminho", bullets: ["\"Excuse me, how do I get to the library?\"", "\"Where is the bus stop?\"", "\"Is the post office near here?\""] },
            { title: "Palavras de direção", bullets: ["\"Go straight.\" \"Turn left.\" \"Turn right.\"", "\"Go two blocks.\"", "\"Next to\" / \"across from\" / \"on the corner\""] },
            { title: "Confirme", bullets: ["\"So, straight two blocks, then left?\"", "\"Can you show me on my phone?\""] }
          ],
          sources: [{ name: "USA Learns: prática de inglês gratuita para adultos", url: "https://www.usalearns.org/" }],
          tryIt: "Tarefa final: faça o seu cartão de frases de inglês do dia a dia. Escreva a sua apresentação, três frases para pedir a alguém que repita ou fale mais devagar, duas perguntas para a loja, um pequeno guião de telefone para uma consulta no médico e uma pergunta para pedir o caminho para um lugar onde vai muitas vezes. Leia o cartão todo em voz alta, ou faça a cena com um parceiro, e grave-se se puder.",
          youCanNow: "pedir o caminho, entender left, right, straight e next to, e repetir as indicações para as confirmar.",
          quickCheck: [
            { objective: "O5", q: "A pessoa diz \"It's across from the park.\" Onde fica?", options: ["Dentro do parque", "Longe do parque", "Do outro lado da rua, em frente ao parque", "Atrás de você"], answer: 2, why: "\"Across from\" quer dizer do outro lado da rua." },
            { objective: "O5", q: "Que pergunta pede o caminho?", options: ["\"How much is this?\"", "\"How do I get to the bus station?\"", "\"Do you have an interpreter?\"", "\"What's your name?\""], answer: 1, why: "\"How do I get to ...?\" pergunta o caminho para um lugar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: O médico, o telefone e andar pela cidade",
        questions: [
          { objective: "O4", q: "Chega à clínica. O que diz na receção?", options: ["\"I have an appointment at 2 o'clock. My name is Li Wei.\"", "\"Turn right.\"", "\"Cash or card?\"", "\"Where are you from?\""], answer: 0, why: "Diga a hora da consulta e o seu nome quando chega." },
          { objective: "O4", q: "Que frase diz há quanto tempo está doente?", options: ["\"My stomach hurts.\"", "\"I feel dizzy.\"", "\"I have an appointment.\"", "\"I've had a fever since Monday.\""], answer: 3, why: "\"Since Monday\" diz ao médico há quanto tempo." },
          { objective: "O4", q: "Não pode ir à consulta na sexta-feira. O que diz ao telefone?", options: ["\"I need to change my appointment, please.\"", "\"Nice to meet you.\"", "\"Where is aisle 3?\"", "\"Go straight.\""], answer: 0, why: "Esta frase pede para mudar a consulta para outra hora." },
          { objective: "O5", q: "O que quer dizer \"Go two blocks\"?", options: ["Esperar dois minutos", "Andar e passar duas esquinas", "Apanhar o autocarro número dois", "Virar duas vezes"], answer: 1, why: "Um \"block\" é a parte de uma rua entre duas esquinas." },
          { objective: "O5", q: "Alguém lhe dá indicações. Como confirma que entendeu?", options: ["Diz \"Okay\" e vai-se embora", "Pergunta \"How much is it?\"", "Repete as indicações", "Pergunta \"What's your name?\""], answer: 2, why: "Repetir as indicações deixa a pessoa confirmar ou corrigir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Inglês para o Dia a Dia (ESL)",
    questions: [
      { objective: "O1", q: "Qual é a melhor maneira de começar uma apresentação?", options: ["\"Hello, I'm Marco.\"", "\"How much is this?\"", "\"Turn left.\"", "\"My back hurts.\""], answer: 0, why: "Um cumprimento e o seu nome começam uma apresentação." },
      { objective: "O1", q: "O que quer dizer \"I'm\"?", options: ["I will", "I have", "I am", "I can"], answer: 2, why: "\"I'm\" é a forma curta de dizer \"I am\"." },
      { objective: "O1", q: "Um novo colega de trabalho diz \"I'm from Nigeria.\" Qual é uma boa pergunta de volta?", options: ["\"Cash or card?\"", "\"Where is the bus stop?\"", "\"Can you spell that?\"", "\"How long have you been here?\""], answer: 3, why: "Uma pergunta simpática sobre a pessoa mantém a conversa." },
      { objective: "O2", q: "Alguém fala depressa demais. O que diz?", options: ["\"Yes, yes, okay.\"", "\"Can you speak more slowly, please?\"", "\"Nice to meet you.\"", "\"Goodbye.\""], answer: 1, why: "Pedir à pessoa que fale mais devagar é educado e ajuda-o a entender." },
      { objective: "O2", q: "Porque é melhor perguntar do que dizer \"yes\" quando não entendeu?", options: ["Pode perder informação importante, como uma hora ou um lugar", "Perguntar é falta de educação", "As pessoas não gostam de perguntas", "É mais rápido adivinhar"], answer: 0, why: "Um \"yes\" errado pode fazer perder uma hora, um lugar ou uma instrução." },
      { objective: "O2", q: "Precisa de escrever o nome de uma rua que ouviu. O que pergunta?", options: ["\"How much is it?\"", "\"Do you want a bag?\"", "\"How do you spell that?\"", "\"What's your name?\""], answer: 2, why: "\"How do you spell that?\" pede as letras." },
      { objective: "O3", q: "Não encontra o pão numa loja. O que pergunta a um funcionário?", options: ["\"I have a fever.\"", "\"So, Tuesday at 3?\"", "\"Nice to meet you.\"", "\"Excuse me, where can I find the bread?\""], answer: 3, why: "\"Where can I find ...?\" pergunta onde está um artigo." },
      { objective: "O3", q: "O que é um \"receipt\"?", options: ["O papel que mostra o que comprou e pagou", "Um saco de compras", "Um funcionário da loja", "Um corredor da loja"], answer: 0, why: "O recibo mostra o que comprou; guarde-o para devoluções." },
      { objective: "O3", q: "A operadora de caixa pergunta \"Do you want a bag?\" Você não quer. O que diz?", options: ["\"Aisle 5.\"", "\"No bag, thanks.\"", "\"Turn right.\"", "\"I'm from Peru.\""], answer: 1, why: "\"No bag, thanks\" diz que não, com educação." },
      { objective: "O4", q: "Que frase diz ao médico o que tem?", options: ["\"Go straight.\"", "\"How much are these?\"", "\"My stomach hurts.\"", "\"Nice to meet you.\""], answer: 2, why: "\"My stomach hurts\" diz o problema." },
      { objective: "O4", q: "O que é um \"interpreter\"?", options: ["Um médico para crianças", "Uma pessoa que ajuda duas pessoas a falar em línguas diferentes", "Um tipo de medicamento", "Um formulário que se preenche"], answer: 1, why: "Um intérprete ajuda você e o médico a entenderem-se." },
      { objective: "O4", q: "Alguém tem dor no peito e dificuldade em respirar. O que faz?", options: ["Liga para o 911 e diz \"I need an ambulance.\"", "Marca uma consulta para a próxima semana", "Vai às compras", "Envia uma mensagem a um amigo"], answer: 0, why: "Dor no peito e dificuldade em respirar são emergências: ligue para o 911." },
      { objective: "O4", q: "Liga para marcar uma consulta. Qual é a primeira coisa a dizer?", options: ["\"Turn left.\"", "\"How much is this?\"", "\"Do you want a bag?\"", "\"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\""], answer: 3, why: "Diga o seu nome e porque está a ligar." },
      { objective: "O4", q: "O consultório diz \"Thursday at 4:15.\" O que diz a seguir?", options: ["\"So, Thursday at 4:15?\"", "\"Where are you from?\"", "\"Cash, please.\"", "\"Go straight.\""], answer: 0, why: "Repetir o dia e a hora confirma que ouviu bem." },
      { objective: "O4", q: "A sua filha está doente e vai faltar à escola. Para quem liga e o que diz?", options: ["Para a loja: \"Where is the milk?\"", "Para a escola: \"My daughter is sick today. She will not come to school.\"", "Para a empresa de autocarros: \"Turn right.\"", "Para ninguém"], answer: 1, why: "Ligue para a escola, diga o nome da sua filha e que ela está doente hoje." },
      { objective: "O5", q: "O que quer dizer \"Turn right\"?", options: ["Parar de andar", "Voltar para trás", "Mudar de direção para o lado direito", "Ir em frente"], answer: 2, why: "\"Turn right\" quer dizer virar à direita." },
      { objective: "O5", q: "O banco fica \"next to\" a farmácia. Onde fica?", options: ["Longe da farmácia", "Dentro da farmácia", "Noutra rua", "Mesmo ao lado da farmácia"], answer: 3, why: "\"Next to\" quer dizer mesmo ao lado." },
      { objective: "O5", q: "As indicações são longas e confusas. O que pode perguntar?", options: ["\"Can you show me on my phone?\"", "\"Do you want a bag?\"", "\"I have a headache.\"", "\"Nice to meet you.\""], answer: 0, why: "Um mapa no telefone, ou a pessoa apontar, torna as indicações claras." },
      { objective: "O2", q: "Numa frase longa, perdeu só a hora. Qual é a melhor pergunta?", options: ["\"Goodbye.\"", "\"Sorry, what time?\"", "\"How much are these?\"", "\"Where are you from?\""], answer: 1, why: "Perguntar só pela parte que perdeu é rápido e claro." },
      { objective: "O1", q: "Que apresentação é clara e completa?", options: ["\"Me, me, job.\"", "\"Where is the bank?\"", "\"Hi, I'm Fatima. I'm from Syria. I'm a cook.\"", "\"Card, please.\""], answer: 2, why: "Dá o nome, o país e o trabalho em frases curtas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 6, 9, 13, 15, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, pratique essa parte e tente outra vez.",
    criteria: [
      { name: "Apresentação", objective: "O1", notYet: "Menos de três frases, ou sem nome ou sem pergunta de volta.", meets: "Diz o nome, de onde é e o que faz, e faz uma pergunta de volta.", exceeds: "Di-la em voz alta sem ler e acrescenta mais um detalhe, como um objetivo." },
      { name: "Pedir para repetir ou falar mais devagar", objective: "O2", notYet: "Sem frases, ou as frases não são educadas.", meets: "Três frases educadas para pedir que repitam, falem mais devagar, soletrem ou escrevam.", exceeds: "Também mostra como repetir uma coisa para a confirmar, como \"So, Tuesday at 3?\"" },
      { name: "Perguntas na loja", objective: "O3", notYet: "Sem perguntas para a loja, ou não perguntam por um artigo nem por um preço.", meets: "Duas perguntas claras, como onde está um artigo e o preço.", exceeds: "Também responde às perguntas do operador de caixa numa cena." },
      { name: "Guião de telefone para uma consulta", objective: "O4", notYet: "Falta o nome, o motivo ou o dia e a hora.", meets: "Diz o nome, o motivo, um dia e uma hora que servem, e repete a hora.", exceeds: "Também mostra como mudar a consulta ou pedir um intérprete." },
      { name: "Pedir o caminho", objective: "O5", notYet: "Sem pergunta, ou a pergunta não diz o nome de um lugar.", meets: "Uma pergunta clara para um lugar real, e uma frase que repete as indicações.", exceeds: "Usa bem três palavras de direção numa cena." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter feito sozinhos, em inglês, uma chamada, uma marcação ou um pedido numa loja em 30 dias (inquérito de seguimento)",
      "Alunos que começam o curso \"Inglês para o Trabalho (ESL)\" ou uma aula de inglês para adultos em 30 dias",
      "Os programas parceiros dizem ter menos consultas perdidas por mal-entendidos de língua"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador para ver as lições, ou uma cópia impressa do texto das lições",
      "Papel e caneta para os cartões de frases e os guiões",
      "Um parceiro para as cenas, ou um telefone para se gravar",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Leia primeiro em voz alta cada conversa de exemplo, depois peça aos alunos que a leiam aos pares e depois troquem de papel.",
      "As versões traduzidas mantêm as frases em inglês em inglês; explique-as na língua dos alunos, mas pratique-as em inglês.",
      "Use nomes, datas de nascimento e números de telefone inventados em toda a prática; nunca recolha dados privados verdadeiros.",
      "Celebre as tentativas, não a gramática perfeita. O objetivo são frases que funcionam e coragem para as usar.",
      "A lição do médico ensina só palavras; as perguntas de saúde são para um médico ou enfermeiro. Indique aos alunos aulas de inglês gratuitas para adultos perto de casa (escolas de adultos, bibliotecas, community colleges) e prática gratuita como o USA Learns."
    ]
  }
};
