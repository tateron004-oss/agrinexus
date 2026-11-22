"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-mental-performance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// General education only: points to coaches, athletic trainers, school counselors, licensed mental health professionals and the 988 Lifeline. No therapy or diagnosis.

module.exports = {
  id: "athletes-mental-performance-pt",
  lang: "pt",
  translationOf: "athletes-mental-performance",
  category: "Athletes",
  name: "Desempenho Mental e Concentração",
  skills: "Respiração quadrada para acalmar os nervos, Escrever palavras-chave e conversa interior, Criar uma rotina antes do jogo, Recomeçar depois de um erro, Saber quando e onde pedir apoio",
  outcome: "criar e usar uma rotina escrita antes do jogo, com uma pausa de respiração, palavras-chave e um plano para recomeçar depois de um erro, e saber exatamente a quem pedir ajuda quando o stress é mais do que nervos.",
  about: [
    "Este curso é para atletas que ficam nervosos, perdem a concentração ou têm dificuldade em recuperar depois de um erro, e para treinadores que querem ensinar competências mentais simples. São competências gerais de desempenho, não são terapia.",
    "Você vai praticar competências usadas por atletas de todos os níveis: respiração lenta, conversa interior útil, rotinas e pausas rápidas para recomeçar. Vai usar um assistente de IA para ajudar a escrever a sua rotina e vai aprender quando deve falar com uma pessoa real.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Se alguma vez se sentir em perigo ou sem esperança, ligue ou envie SMS para o 988 nos Estados Unidos, ou fale logo com um adulto de confiança."
  ],
  finalTask: "Escreva um cartão de uma página com a sua rotina antes do jogo: o horário antes do jogo, uma pausa de respiração quadrada, três palavras-chave e um plano de três passos para recomeçar depois de um erro. Use um assistente de IA para ajudar a escrever, pratique-o em dois treinos, depois mostre-o ao seu treinador e ajuste-o.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e de clubes que ficam nervosos, perdem a concentração ou têm dificuldade em recuperar depois de um erro, e treinadores que querem ensinar competências mentais simples.",
    startingPoint: "Competem com regularidade e sentem nervos no dia do jogo. A maioria não tem uma rotina escrita, usa conversa interior negativa sem reparar e não sabe bem a quem recorrer quando o stress é mais do que nervos.",
    gap: "Os nervos sem controlo e ficar preso aos erros prejudicam o desempenho dos atletas, e o stress sério pode passar despercebido. Competências simples e praticadas ajudam-nos a render sob pressão, e saber quando e onde ter apoio real pode proteger a sua saúde e a sua vida.",
    constraints: [
      "Linguagem simples, cerca do nível de leitura do 7.º ano",
      "Só competências gerais de desempenho, não é terapia nem substitui um conselheiro",
      "Um telefone ou computador com um assistente de IA gratuito, ou papel",
      "Cerca de 60 minutos de lições e prática em dois treinos da equipa",
      "A saúde mental é privada e sensível; os contactos de crise (988, 911) são dos Estados Unidos"
    ],
    prerequisites: "Nenhum"
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Pensando num jogo importante recente", action: "descrever os sinais do seu corpo e os pensamentos que vêm com os nervos, e quando começam", standard: "dizendo pelo menos dois sinais do corpo e um pensamento" },
    { id: "O2", condition: "Antes ou durante o treino", action: "mostrar a respiração quadrada durante quatro rondas", standard: "contando até quatro em cada parte, ou com respiração lenta sem pausas se segurar o ar for desconfortável" },
    { id: "O3", condition: "Com um pensamento negativo que tem muitas vezes", action: "escrever três palavras-chave que dizem ao seu corpo o que fazer", standard: "com cada palavra-chave de uma a três palavras e sobre algo que você controla" },
    { id: "O4", condition: "Usando o horário do seu dia de jogo", action: "escrever uma rotina antes do jogo, da noite anterior até ao apito inicial", standard: "só com passos que você controla, uma pausa de respiração, as suas palavras-chave e o horário confirmado com o treinador" },
    { id: "O5", condition: "Depois de um erro num jogo ou num treino", action: "usar os três passos para recomeçar: largar, acalmar e voltar a focar", standard: "fazendo os três passos antes da jogada seguinte e deixando a análise para depois do jogo" },
    { id: "O6", condition: "Com sinais de que o stress é mais do que nervos", action: "identificar os sinais de alerta e dizer a quem pedir ajuda, incluindo o 988 e o 911", standard: "dizendo pelo menos duas pessoas de confiança e o número certo para uma crise e para uma emergência" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Calma e concentração",
      lessons: [
        {
          objectives: ["O1"],
          title: "Entender os nervos do dia de jogo",
          minutes: 4,
          goal: "Reparar nos seus sinais de nervos e vê-los como energia que pode controlar.",
          text: [
            "Antes de um jogo importante, o coração bate mais depressa, as mãos podem suar e pode sentir um frio na barriga. É o seu corpo a preparar-se para competir. Um pouco disto ajuda; demais pode deixá-lo tenso ou apressado.",
            "Toda a gente sente isto, incluindo os profissionais. A competência não é fazer os nervos desaparecerem, mas reparar neles e baixá-los até um nível que o ajude.",
            "Comece por reparar. O que sente no corpo, que pensamentos aparecem e quando começam? Escrever isto torna mais fácil controlá-los."
          ],
          words: [["Nervos", "a reação natural do corpo antes de algo importante: coração mais rápido, mãos suadas, frio na barriga."], ["Nível de ativação", "o quanto se sente agitado, desde muito calmo até muito tenso."]],
          slides: [
            { title: "Os nervos são normais", bullets: ["Coração rápido, mãos suadas, frio na barriga", "O seu corpo a preparar-se", "Os profissionais também sentem"] },
            { title: "A competência", bullets: ["Não é zero nervos", "É a quantidade certa para você"] },
            { title: "Comece por reparar", bullets: ["O que sinto no corpo?", "Que pensamentos aparecem?", "Quando começam?"] }
          ],
          tryIt: "Pense no seu último jogo importante. Escreva três sinais do corpo e dois pensamentos que teve antes de começar, e quando surgiram.",
          youCanNow: "reparar nos seus sinais de nervos e descrevê-los.",
          quickCheck: [
            { objective: "O1", q: "O que é um frio na barriga antes de um jogo?", options: ["Um sinal de que não deve jogar", "Um sinal de que é fraco", "O seu corpo a preparar-se para competir", "Um sinal de que está doente"], answer: 2, why: "Estes sinais são o corpo a preparar-se; a competência é controlá-los." },
            { objective: "O1", q: "Quer começar a controlar os seus nervos. O que faz primeiro?", options: ["Escreve o que sente, o que pensa e quando começa", "Tenta fazer os nervos desaparecerem", "Ignora-os por completo", "Salta o aquecimento"], answer: 0, why: "Reparar e escrever torna os nervos mais fáceis de controlar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Respiração quadrada: uma pausa de 60 segundos",
          minutes: 5,
          goal: "Usar a respiração quadrada para acalmar o corpo em cerca de um minuto.",
          text: [
            "Respirar devagar é uma das formas mais rápidas de acalmar o corpo. A respiração quadrada é simples: inspire contando até quatro, segure o ar até quatro, expire até quatro, segure até quatro. Repita quatro vezes.",
            "Pode fazê-la no banco, na linha de lance livre com contagens mais curtas, no balneário ou antes de um teste. Pratique quando está calmo para que funcione quando está nervoso.",
            "Se segurar o ar for desconfortável, não faça as pausas: só inspire devagar e expire ainda mais devagar. Pare se sentir tonturas."
          ],
          steps: ["Inspire pelo nariz contando até 4.", "Segure o ar até 4.", "Expire devagar até 4.", "Segure até 4.", "Repita 4 rondas."],
          words: [["Respiração quadrada", "inspirar, segurar, expirar e segurar com contagens iguais, como os quatro lados de um quadrado."]],
          slides: [
            { title: "Respiração quadrada", bullets: ["Inspire 4", "Segure 4", "Expire 4", "Segure 4"] },
            { title: "Onde usar", bullets: ["No banco ou no balneário", "Antes de um lance livre ou de um serviço", "Antes de um teste"] },
            { title: "Dicas", bullets: ["Pratique quando está calmo", "Sem pausas se for desconfortável", "Pare se sentir tonturas"] }
          ],
          tryIt: "Faça agora quatro rondas de respiração quadrada. Dê uma nota de 1 a 10 a quão tenso se sente, antes e depois.",
          youCanNow: "usar a respiração quadrada para acalmar o corpo em cerca de um minuto.",
          quickCheck: [
            { objective: "O2", q: "Quantas rondas de respiração quadrada a lição sugere?", options: ["Uma", "Dez", "Quatro", "Vinte"], answer: 2, why: "Inspire 4, segure 4, expire 4, segure 4, e repita quatro vezes." },
            { objective: "O2", q: "Sente tonturas durante a respiração quadrada. O que faz?", options: ["Segura o ar mais tempo", "Para", "Respira mais depressa", "Continua mais dez rondas"], answer: 1, why: "A lição diz para parar se sentir tonturas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Palavras-chave e conversa interior",
          minutes: 5,
          goal: "Escrever três palavras-chave e transformar a conversa interior negativa em instruções úteis.",
          text: [
            "Conversa interior é o que você diz a si mesmo dentro da cabeça. \"Não falhes\" põe a imagem de falhar na sua mente. \"Lançamento suave, acompanha o movimento\" diz ao seu corpo o que fazer.",
            "Palavras-chave são uma a três palavras que apontam a sua concentração: \"olhos em cima\", \"pés rápidos\", \"próxima jogada\", \"forte e direito\". Escolha palavras sobre o que você controla, não sobre o resultado.",
            "Um assistente de IA pode ajudar. Experimente: \"Sou jogador de voleibol e faço o serviço. Quando fico nervoso penso 'não mandes a bola para a rede'. Dê-me cinco palavras-chave curtas que me digam o que fazer em vez disso.\" Escolha as que soam como você."
          ],
          steps: ["Escreva um pensamento negativo que tem muitas vezes.", "Pergunte: o que quero que o meu corpo faça em vez disso?", "Transforme-o em 1 a 3 palavras.", "Escolha três palavras-chave e pratique dizê-las."],
          words: [["Conversa interior", "as palavras que diz a si mesmo dentro da cabeça."], ["Palavra-chave", "uma palavra ou frase curta que aponta a sua concentração para o que fazer."]],
          slides: [
            { title: "A conversa interior guia a ação", bullets: ["\"Não falhes\" -> imagina falhar", "\"Lançamento suave\" -> diz o que fazer"] },
            { title: "Boas palavras-chave", bullets: ["1 a 3 palavras", "Sobre o que você controla", "\"Olhos em cima\" \"Pés rápidos\" \"Próxima jogada\""] },
            { title: "A IA pode ajudar", bullets: ["Dê-lhe o seu pensamento negativo", "Peça 5 frases curtas do que fazer", "Fique com as que servem para você"] }
          ],
          tryIt: "Escreva um pensamento negativo que tem nos jogos. Use um assistente de IA para obter cinco palavras-chave que lhe digam o que fazer em vez disso. Escolha as três melhores.",
          youCanNow: "escrever palavras-chave e transformar a conversa interior negativa em instruções úteis.",
          quickCheck: [
            { objective: "O3", q: "O que é uma palavra-chave?", options: ["Um discurso longo antes do jogo", "Uma palavra sobre o resultado", "Uma palavra que o adversário diz", "Uma a três palavras que apontam a sua concentração"], answer: 3, why: "Palavras-chave são frases curtas como \"olhos em cima\" que apontam a sua concentração." },
            { objective: "O3", q: "Antes de um penálti pensa muitas vezes \"não falhes\". Para o que muda?", options: ["\"Não falhes outra vez\"", "\"Contacto suave, acompanha o movimento\"", "\"Vamos perder se eu falhar\"", "\"Espero que entre\""], answer: 1, why: "A conversa interior útil diz ao corpo o que fazer, não o que evitar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Calma e concentração",
        questions: [
          { objective: "O1", q: "Antes de um jogo importante o seu coração dispara. Isto quer dizer:", options: ["Há algo errado com você", "Deve desistir", "O seu corpo está a preparar-se para competir", "Não é bom o suficiente"], answer: 2, why: "Os nervos são uma reação normal do corpo antes de momentos importantes." },
          { objective: "O1", q: "Qual é o objetivo com os nervos?", options: ["Levá-los a um nível que o ajude", "Fazê-los desaparecer por completo", "Ignorá-los sempre", "Torná-los maiores"], answer: 0, why: "Alguns nervos ajudam; a competência é controlar o nível." },
          { objective: "O2", q: "Quais são as contagens da respiração quadrada?", options: ["Inspire 1, expire 10", "Inspire 10, segure 10", "Só respirações rápidas", "Inspire 4, segure 4, expire 4, segure 4"], answer: 3, why: "Contagens iguais, como os lados de um quadrado." },
          { objective: "O3", q: "Qual é uma palavra-chave útil?", options: ["\"Não estragues tudo\"", "\"Pés rápidos\"", "\"Não falhes\"", "\"Eu falho sempre sob pressão\""], answer: 1, why: "Diz ao seu corpo o que fazer." },
          { objective: "O2", q: "Quando deve praticar a respiração quadrada?", options: ["Só no jogo mais importante", "Quando está calmo, para funcionar quando está nervoso", "Nunca", "Só à noite"], answer: 1, why: "Praticar com calma deixa a competência pronta para a pressão." }
        ]
      }
    },
    {
      name: "Capítulo 2: Rotinas, recomeços e apoio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Criar uma rotina antes do jogo",
          minutes: 5,
          goal: "Escrever uma rotina antes do jogo com horários e passos que você controla.",
          text: [
            "Uma rotina é um conjunto de passos que faz da mesma maneira antes de cada jogo. Dá à sua mente algo conhecido a que se agarrar, por isso sente-se pronto seja qual for o adversário.",
            "Uma rotina simples: a noite anterior (preparar o saco, rotina de sono), a refeição do dia de jogo, a chegada, o aquecimento, uma pausa de respiração de um minuto, as suas palavras-chave e a concentração na sua primeira tarefa no jogo.",
            "Mantenha os passos sobre coisas que você controla. As superstições podem ser divertidas, mas a rotina deve funcionar mesmo que se esqueça das meias da sorte. Confirme o horário com o treinador para caber no aquecimento da equipa."
          ],
          steps: ["Faça a lista do que faz desde a noite anterior até ao apito inicial.", "Acrescente uma pausa de respiração e as suas palavras-chave.", "Diga qual é a sua primeira tarefa no jogo.", "Fique só com os passos que você controla.", "Confirme que cabe no aquecimento da equipa."],
          words: [["Rotina", "passos que repete da mesma maneira todas as vezes."], ["Controlável", "algo que você pode escolher ou mudar sozinho, como o esforço ou a preparação."]],
          slides: [
            { title: "Porque as rotinas funcionam", bullets: ["Algo conhecido a que se agarrar", "Pronto contra qualquer adversário"] },
            { title: "Uma rotina simples", bullets: ["Noite anterior: preparar o saco, dormir", "Refeição do dia de jogo e chegada", "Aquecimento, pausa de respiração, palavras-chave", "Primeira tarefa no jogo"] },
            { title: "Mantenha-a controlável", bullets: ["Funciona sem as meias da sorte", "Cabe no aquecimento da equipa"] }
          ],
          tryIt: "Peça a um assistente de IA para transformar a sua lista de passos antes do jogo num horário limpo, da noite anterior até ao apito inicial. Corrija-o para corresponder ao seu dia de jogo real.",
          youCanNow: "escrever uma rotina antes do jogo feita com passos que você controla.",
          quickCheck: [
            { objective: "O4", q: "O que é uma rotina antes do jogo?", options: ["Passos que faz da mesma maneira antes de cada jogo", "Um plano novo para cada adversário", "Uma lista de amuletos da sorte", "O plano de jogo do treinador"], answer: 0, why: "Uma rotina é o mesmo conjunto de passos em cada jogo, e dá à mente algo conhecido." },
            { objective: "O4", q: "A sua rotina depende de usar uma camisola da sorte. O que faz?", options: ["Acrescenta mais superstições", "Falta ao jogo se se esquecer da camisola", "Garante que a rotina funciona com passos que você controla", "Pede ao treinador para trazer uma de reserva"], answer: 2, why: "Mantenha os passos sobre coisas que você controla para a rotina funcionar na mesma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Recomeçar depois de um erro",
          minutes: 5,
          goal: "Usar três passos para recomeçar e seguir em frente depois de um erro num jogo.",
          text: [
            "Todos os atletas cometem erros. O que importa é a rapidez com que passa para a jogada seguinte. Ficar preso a um erro muitas vezes causa o próximo.",
            "Três passos para recomeçar: 1. Largar: uma ação física que diz \"acabou\", como limpar as mãos, tocar no sapato ou soltar o ar. 2. Acalmar: uma respiração lenta. 3. Voltar a focar: diga a sua palavra-chave para a jogada seguinte.",
            "Depois do jogo, e não durante, olhe para o erro para aprender com ele, com o treinador ou com o vídeo. No momento, a única tarefa é a jogada seguinte."
          ],
          steps: ["Largar: uma ação física que quer dizer \"acabou\".", "Acalmar: uma respiração lenta.", "Voltar a focar: diga a sua palavra-chave da próxima jogada.", "Aprenda com o erro depois do jogo, não durante."],
          words: [["Recomeço", "uma rotina rápida para limpar a mente e preparar-se para o momento seguinte."], ["Mentalidade da próxima jogada", "concentrar-se no que vem a seguir, não no que acabou de acontecer."]],
          slides: [
            { title: "Os erros acontecem", bullets: ["Ficar preso a um erro causa o próximo", "A rapidez do recomeço importa"] },
            { title: "Três passos para recomeçar", bullets: ["1. Largar: um \"acabou\" físico", "2. Acalmar: uma respiração lenta", "3. Voltar a focar: palavra-chave da próxima jogada"] },
            { title: "Aprenda depois", bullets: ["Analise depois do jogo", "Com o treinador ou com o vídeo"] }
          ],
          tryIt: "Escolha a sua ação para largar e a sua palavra-chave da próxima jogada. No próximo treino, use os três passos depois de cada erro e conte quantas vezes os usou.",
          youCanNow: "usar três passos para recomeçar e seguir em frente depressa depois de um erro.",
          quickCheck: [
            { objective: "O5", q: "Qual é o passo de largar no recomeço depois de um erro?", options: ["Discutir com o árbitro", "Repetir o erro na cabeça", "Dizer aos colegas o que correu mal", "Uma ação física que diz \"acabou\""], answer: 3, why: "Largar é uma ação física como limpar as mãos ou tocar no sapato." },
            { objective: "O5", q: "Acabou de deixar cair um passe. Qual é a sua tarefa agora?", options: ["Pensar porque aconteceu", "Largar, fazer uma respiração lenta e dizer a palavra-chave da próxima jogada", "Ver a repetição", "Pedir para sair"], answer: 1, why: "No momento, a única tarefa é a jogada seguinte; aprenda com o erro depois do jogo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Quando é mais do que nervos: pedir apoio",
          minutes: 5,
          goal: "Identificar os sinais de que o stress precisa de apoio real e dizer a quem recorrer.",
          text: [
            "As competências mentais ajudam com a pressão normal. Mas às vezes o stress é maior: sente-se em baixo na maioria dos dias, perde o interesse pelas coisas de que gostava, não consegue dormir nem comer, sente-se sem esperança ou pensa em fazer mal a si mesmo. Isso não é fraqueza, e não é algo que um exercício de respiração ou um chatbot de IA consiga resolver.",
            "Fale com uma pessoa real: um pai, uma mãe ou um adulto de confiança, o seu treinador, o seu fisioterapeuta desportivo (athletic trainer), um conselheiro da escola, o médico da equipa ou um profissional de saúde mental licenciado. Muitas escolas e universidades oferecem aconselhamento gratuito.",
            "Se você ou alguém que conhece está em crise ou a pensar em suicídio nos Estados Unidos, ligue ou envie SMS para o 988 ou converse em 988lifeline.org. É gratuito e está aberto 24 horas por dia, 7 dias por semana. Numa emergência, ligue para o 911."
          ],
          steps: ["Repare nos sinais de que é mais do que nervos.", "Conte a um adulto de confiança, treinador, fisioterapeuta desportivo ou conselheiro.", "Encontre o serviço de aconselhamento da sua escola.", "Em crise: ligue ou envie SMS para o 988. Numa emergência: 911."],
          words: [["Profissional de saúde mental licenciado", "um conselheiro, psicólogo ou terapeuta formado e com licença para trabalhar."], ["988 Lifeline", "a linha gratuita de prevenção do suicídio e de crise dos EUA: ligue, envie SMS ou converse, 24 horas por dia, 7 dias por semana."]],
          slides: [
            { title: "É mais do que nervos se", bullets: ["Em baixo na maioria dos dias", "Perdeu o interesse, não consegue dormir nem comer", "Sente-se sem esperança ou pensa em fazer mal a si mesmo"] },
            { title: "Fale com uma pessoa real", bullets: ["Adulto de confiança, treinador, fisioterapeuta desportivo", "Conselheiro da escola ou médico da equipa", "Profissional de saúde mental licenciado"] },
            { title: "Em crise", bullets: ["Ligue ou envie SMS para o 988 (EUA), grátis, 24/7", "Converse em 988lifeline.org", "Emergência: 911"] }
          ],
          sources: [{ name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }],
          tryIt: "Tarefa final: escreva o seu cartão de uma página com a rotina antes do jogo, a pausa de respiração, três palavras-chave e os três passos para recomeçar depois de um erro. No fundo, escreva o nome de duas pessoas com quem pode falar e como contactar o serviço de aconselhamento da sua escola. Mostre o cartão ao seu treinador.",
          youCanNow: "usar a sua rotina de desempenho mental e saber quando e onde pedir apoio real.",
          quickCheck: [
            { objective: "O6", q: "Qual é um sinal de que o stress precisa de apoio real?", options: ["Sentir-se sem esperança na maioria dos dias", "Nervos antes de um jogo importante", "Coração rápido na linha de partida", "Mãos suadas na linha de lance livre"], answer: 0, why: "Sentir-se em baixo ou sem esperança na maioria dos dias é mais do que nervos normais." },
            { objective: "O6", q: "Um amigo envia-lhe uma SMS a dizer que está a pensar em suicídio. Nos Estados Unidos, o que faz?", options: ["Guarda segredo", "Diz-lhe para fazer respiração quadrada", "Pergunta a um chatbot de IA o que fazer", "Conta logo a um adulto de confiança e partilha o 988, ou liga para o 911 se ele estiver em perigo agora"], answer: 3, why: "Tem de ajudar uma pessoa real; o 988 é a linha de crise e o 911 é para emergências." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Rotinas, recomeços e apoio",
        questions: [
          { objective: "O4", q: "Porque é que os atletas usam rotinas antes do jogo?", options: ["Para não fazer o aquecimento", "Para impressionar os adeptos", "Para evitar o treinador", "Para dar à mente algo conhecido e sentir-se pronto"], answer: 3, why: "As rotinas criam um caminho conhecido para se sentir pronto." },
          { objective: "O4", q: "Que passo da rotina é controlável?", options: ["A sua pausa de respiração de um minuto", "As decisões do árbitro", "O tempo que faz", "A equipa inicial do adversário"], answer: 0, why: "É você que escolhe fazer a sua pausa de respiração." },
          { objective: "O5", q: "Qual é o passo 1 do recomeço depois de um erro?", options: ["Discutir com o árbitro", "Repetir o erro na cabeça", "Largar: uma ação física que quer dizer \"acabou\"", "Sair do jogo"], answer: 2, why: "Largar com o corpo ajuda a deixar o erro para trás." },
          { objective: "O5", q: "Quando deve analisar um erro?", options: ["A meio da jogada seguinte", "Nunca", "Enquanto o treinador está a falar", "Depois do jogo, com o treinador ou com o vídeo"], answer: 3, why: "Durante o jogo, a única tarefa é a jogada seguinte." },
          { objective: "O6", q: "Um colega de equipa diz que se sente sem esperança e fala em fazer mal a si mesmo. O que faz?", options: ["Diz-lhe para fazer respiração quadrada", "Conta logo a um adulto de confiança e partilha a 988 Lifeline", "Guarda segredo", "Diz-lhe para perguntar a um chatbot"], answer: 1, why: "Isto precisa já de pessoas reais e de apoio de crise." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Desempenho Mental e Concentração",
    questions: [
      { objective: "O1", q: "Mãos suadas antes de um jogo são:", options: ["Um sinal para desistir", "Sempre perigosas", "Um sinal normal de nervos", "Uma infração às regras"], answer: 2, why: "É o seu corpo a preparar-se." },
      { objective: "O1", q: "Os atletas profissionais sentem nervos?", options: ["Sim, e controlam-nos", "Nunca", "Só os novatos", "Só nos treinos"], answer: 0, why: "Toda a gente sente nervos; os profissionais controlam-nos." },
      { objective: "O1", q: "O primeiro passo para controlar os nervos é:", options: ["Reparar no que sente e pensa", "Ignorá-los", "Gritar", "Faltar ao jogo"], answer: 0, why: "Não consegue controlar aquilo em que não repara." },
      { objective: "O2", q: "Quantas partes iguais tem a respiração quadrada?", options: ["Duas", "Três", "Quatro", "Cinco"], answer: 2, why: "Inspirar, segurar, expirar, segurar." },
      { objective: "O2", q: "Se segurar o ar lhe faz sentir mal, pode:", options: ["Segurar mais tempo", "Não fazer as pausas e expirar devagar", "Parar de respirar", "Respirar muito depressa"], answer: 1, why: "A respiração lenta sem pausas também acalma." },
      { objective: "O3", q: "A conversa interior é:", options: ["Falar com o árbitro", "Um cântico da equipa", "Uma publicação na internet", "O que diz a si mesmo dentro da cabeça"], answer: 3, why: "É a sua voz interior." },
      { objective: "O3", q: "Que conversa interior ajuda mais?", options: ["\"Não falhes\"", "\"Eu falho sempre sob pressão\"", "\"Lançamento suave, acompanha o movimento\"", "\"Isto não tem esperança\""], answer: 2, why: "Diz ao seu corpo o que fazer." },
      { objective: "O3", q: "Boas palavras-chave concentram-se em:", options: ["No resultado", "No público", "Na outra equipa", "No que você controla"], answer: 3, why: "Controle o que pode controlar." },
      { objective: "O3", q: "Como pode a IA ajudar com as palavras-chave?", options: ["Pode sugerir frases curtas do que fazer, e você escolhe", "Pode jogar por você", "Pode diagnosticar ansiedade", "Não pode ajudar nada"], answer: 0, why: "A IA é boa a escolher palavras; você escolhe o que lhe serve." },
      { objective: "O4", q: "Uma rotina antes do jogo deve funcionar mesmo que:", options: ["Ganhe", "Se esqueça das meias da sorte", "O treinador saia", "Chova"], answer: 1, why: "É feita com passos controláveis, não com sorte." },
      { objective: "O4", q: "Com quem deve confirmar o horário da sua rotina?", options: ["Com o seu rival", "Com um desconhecido na internet", "Com o seu treinador", "Com ninguém"], answer: 2, why: "Tem de caber no aquecimento da equipa." },
      { objective: "O5", q: "O que é a mentalidade da próxima jogada?", options: ["Concentrar-se no que vem, não no que aconteceu", "Repetir os erros na cabeça", "Culpar os colegas", "Olhar para o marcador"], answer: 0, why: "A próxima jogada é a única que pode mudar." },
      { objective: "O5", q: "Qual é o passo 2 do recomeço depois de um erro?", options: ["Discutir", "Sair do campo", "Ver as redes sociais", "Uma respiração lenta"], answer: 3, why: "Largar, acalmar com uma respiração, voltar a focar." },
      { objective: "O5", q: "Qual é o passo 3 do recomeço depois de um erro?", options: ["Gritar", "Voltar a focar com a palavra-chave da próxima jogada", "Repetir o erro na cabeça", "Olhar para o público"], answer: 1, why: "A palavra-chave aponta-o para a tarefa seguinte." },
      { objective: "O6", q: "Qual é um sinal de que o stress é mais do que nervos?", options: ["Frio na barriga antes de um jogo", "Sentir-se em baixo na maioria dos dias e perder o interesse", "Estar entusiasmado", "Coração rápido antes do pontapé de saída"], answer: 1, why: "Um humor em baixo que não passa precisa de apoio real." },
      { objective: "O6", q: "Um chatbot de IA pode substituir um conselheiro?", options: ["Sim", "Só ao fim de semana", "Só para atletas", "Não, fale com uma pessoa real"], answer: 3, why: "O stress sério precisa de uma pessoa formada." },
      { objective: "O6", q: "Com quem pode falar sobre stress sério?", options: ["Um adulto de confiança, treinador, fisioterapeuta desportivo ou conselheiro da escola", "Só consigo mesmo", "Com ninguém", "Com os adversários"], answer: 0, why: "Estas pessoas podem ajudar ou levá-lo até à ajuda." },
      { objective: "O6", q: "Nos EUA, o número da linha de crise é:", options: ["411", "311", "988", "0"], answer: 2, why: "Ligue ou envie SMS para o 988, a linha de prevenção do suicídio e de crise." },
      { objective: "O6", q: "Quando está aberta a 988 Lifeline?", options: ["Só nos dias úteis", "Só à noite", "Só durante a época", "24/7"], answer: 3, why: "É gratuita e está aberta 24 horas por dia, todos os dias." },
      { objective: "O6", q: "Numa emergência em que alguém está em perigo agora, liga para:", options: ["Só para o treinador", "911", "Um amigo mais tarde", "Ninguém"], answer: 1, why: "O 911 é para emergências que estão a acontecer agora." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [2, 3, 6, 9, 12, 14, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Horário antes do jogo", objective: "O4", notYet: "Faltam horários nos passos, ou os passos dependem de coisas que o atleta não controla.", meets: "Um horário da noite anterior até ao apito inicial, só com passos controláveis, confirmado com o treinador.", exceeds: "Diz qual é a primeira tarefa do atleta no jogo e cabe exatamente no aquecimento da equipa." },
      { name: "Pausa de respiração", objective: "O2", notYet: "Não há pausa de respiração, ou as contagens não estão claras.", meets: "A respiração quadrada (ou respiração lenta sem pausas) está no cartão num momento fixo e foi praticada em dois treinos.", exceeds: "Inclui uma versão mais curta para momentos do jogo, como a linha de lance livre." },
      { name: "Palavras-chave", objective: "O3", notYet: "Menos de três palavras-chave, ou são sobre o resultado ou sobre o que evitar.", meets: "Três palavras-chave, cada uma de uma a três palavras, sobre o que o atleta controla.", exceeds: "Cada palavra-chave substitui um pensamento negativo concreto que o atleta tem muitas vezes." },
      { name: "Recomeço depois de um erro", objective: "O5", notYet: "Falta um ou mais dos três passos.", meets: "Largar, acalmar e voltar a focar estão escritos com a ação e a palavra-chave do próprio atleta.", exceeds: "O atleta diz que o usou no treino e anota o que vai analisar depois do jogo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o cartão da rotina e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que dizem ainda usar a rotina e o recomeço depois de um erro 30 dias depois (inquérito de seguimento)",
      "Alunos que, no seguimento, sabem dizer a quem recorrer e conhecem a 988 Lifeline",
      "Treinadores que dizem ter acrescentado ao treino uma pausa de respiração ou um recomeço depois de um erro em equipa"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel ou uma nota no telefone para o cartão da rotina",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini), opcional",
      "A hora do seu próximo jogo e o plano de aquecimento da equipa",
      "Os contactos do conselheiro da escola ou do fisioterapeuta desportivo (athletic trainer)",
      "Cerca de 60 minutos, e prática em dois treinos da equipa"
    ],
    facilitatorNotes: [
      "Diga com clareza que estas são competências de desempenho, não terapia; não tente aconselhar os atletas em grupo.",
      "Antes da Lição 6, descubra qual é o serviço de aconselhamento da sua escola e partilhe-o junto com o 988 e o 911.",
      "Se um atleta disser que está em crise ou a pensar em fazer mal a si mesmo, fique com ele e chame logo um adulto de confiança ou um profissional.",
      "Pratiquem a respiração quadrada juntos quando estão calmos; diga aos atletas para não fazerem as pausas ou pararem se sentirem tonturas.",
      "Mantenha os cartões da rotina privados, a não ser que o atleta escolha mostrá-los ao treinador."
    ]
  }
};
