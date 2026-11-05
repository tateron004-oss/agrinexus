"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-nutrition-recovery-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// General education only: every health lesson sends the student to a coach, athletic trainer, doctor or registered dietitian. No doses, calorie targets or medical advice.

module.exports = {
  id: "athletes-nutrition-recovery-ai-pt",
  lang: "pt",
  translationOf: "athletes-nutrition-recovery-ai",
  category: "Athletes",
  name: "Nutrição e Recuperação com IA",
  skills: "Planear refeições equilibradas à volta do treino, Criar uma rotina de comida e água para o dia do jogo, Usar IA para listas de compras e ideias de refeições, Acompanhar hábitos de sono e de recuperação, Saber quando procurar um profissional",
  outcome: "usar um assistente de IA para planear uma semana de refeições simples e equilibradas e uma rotina de recuperação à volta do seu horário de treinos, e depois verificar o plano com um nutricionista, um fisioterapeuta desportivo ou um médico.",
  about: [
    "Este curso é para atletas e treinadores que querem perceber o básico de comer, beber e recuperar bem, e usar a IA para facilitar o planeamento. É educação geral, não é aconselhamento médico nem de nutrição.",
    "Cada corpo é diferente. A sua idade, o seu desporto, a sua saúde e os seus objetivos mudam aquilo de que precisa. Por isso o plano que vai criar aqui é um rascunho para verificar com um nutricionista, o seu fisioterapeuta desportivo ou o seu médico.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Use um assistente de IA para escrever o rascunho de um plano de uma semana de refeições e recuperação à volta do seu horário real de treinos e jogos: pratos equilibrados, uma rotina de comida e água para o dia do jogo, uma lista de compras dentro do seu orçamento e uma rotina de sono. Tire todos os dados privados de saúde, depois mostre o plano a um nutricionista, a um fisioterapeuta desportivo ou a um médico e mude-o de acordo com o que eles disserem.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e de clubes, e os treinadores que os apoiam, que querem comer, beber e recuperar bem e usar a IA para facilitar o planeamento.",
    startingPoint: "Comem e dormem à volta de um horário cheio de treinos, aulas e jogos e usam um smartphone todos os dias. Muitos saltam refeições, adivinham o que comer e beber no dia do jogo, dormem pouco e não sabem quando uma dor muscular precisa de um profissional.",
    gap: "Pouca comida, pouca água e pouco sono travam o rendimento e aumentam o risco de lesões e de doenças causadas pelo calor, e os conselhos da IA ou da internet sobre calorias e suplementos podem ser perigosos. Um plano semanal simples, verificado por um profissional, ajuda os atletas a recuperar e a manter a saúde.",
    constraints: [
      "Linguagem simples, mais ou menos ao nível do 7.º ano",
      "Só educação geral, não aconselhamento médico nem de nutrição; as quantidades exatas vêm de um nutricionista, de um fisioterapeuta desportivo ou de um médico",
      "Um telefone ou computador com um assistente de IA gratuito; os planos têm de caber num orçamento real de comida e numa cozinha real",
      "Cerca de 60 minutos no total",
      "Nada de registos médicos, medicamentos ou dados privados de saúde colados na IA; o corpo e o peso são temas sensíveis"
    ],
    prerequisites: "Nenhum"
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando alimentos que já come", action: "montar um prato equilibrado com hidratos de carbono, proteína, e fruta e legumes", standard: "com as três partes no prato e mais energia planeada para os dias de treino duro" },
    { id: "O2", condition: "Com a hora de início de um jogo ou de um treino duro", action: "planear uma rotina de comida e água para o dia do jogo, desde a refeição antes até à recuperação depois", standard: "com uma refeição e um lanche conhecidos, água ao longo do dia e um lanche de recuperação com hidratos de carbono e proteína" },
    { id: "O3", condition: "Usando um assistente de IA gratuito", action: "criar uma semana de ideias de refeições e uma lista de compras que caibam no seu horário, no seu orçamento e na sua cozinha", standard: "com as alergias descritas em palavras gerais e sem pedir metas de calorias, planos para perder peso ou doses de suplementos" },
    { id: "O4", condition: "Com o seu horário de treinos e jogos", action: "planear uma rotina de sono com uma hora fixa para acordar, uma hora para deitar e uma hora para desligar os ecrãs", standard: "com a rotina registada durante uma semana" },
    { id: "O5", condition: "Com a descrição de uma dor muscular, de uma dor forte ou de uma pancada na cabeça", action: "explicar se é uma dor muscular normal ou um sinal para parar e avisar o seu fisioterapeuta desportivo", standard: "acertando em todos os casos de dor aguda, inchaço ou sintomas depois de uma pancada na cabeça" },
    { id: "O6", condition: "Usando o seu horário e um assistente de IA", action: "criar um plano de uma semana de refeições e recuperação e pedir que um nutricionista, um fisioterapeuta desportivo ou um médico o verifique", standard: "com os dados privados de saúde retirados e o plano atualizado com os conselhos deles" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comer bem à volta do treino",
      lessons: [
        {
          objectives: ["O1"],
          title: "O prato equilibrado do atleta",
          minutes: 5,
          goal: "Montar um prato equilibrado com alimentos que já come.",
          text: [
            "A comida dá-lhe energia para treinar e o material para recuperar. Uma forma simples de pensar numa refeição é um prato com três partes principais: hidratos de carbono para a energia (arroz, massa, pão, batata, fruta), proteína para ajudar os músculos a recuperar (ovos, feijão, peixe, frango, iogurte), e fruta e legumes para as vitaminas e os minerais.",
            "Os atletas que treinam duro muitas vezes precisam de mais energia do que quem não é atleta, e os dias mais duros costumam pedir mais hidratos de carbono. A quantidade de que precisa depende do seu corpo, do seu desporto e do seu treino; por isso um nutricionista é a pessoa certa para as suas quantidades exatas.",
            "Saltar refeições ou cortar grupos inteiros de alimentos para ter uma certa aparência pode prejudicar o seu rendimento e a sua saúde. Se a comida, o peso ou a imagem do corpo o preocupam, fale com alguém de confiança e com o seu fisioterapeuta desportivo ou o seu médico."
          ],
          words: [["Hidratos de carbono", "alimentos como arroz, pão, massa, batata e fruta que dão energia rápida."], ["Proteína", "alimentos como ovos, feijão, peixe, carne e iogurte que ajudam o corpo a reparar os músculos."], ["Nutricionista (dietista)", "um profissional com licença na área da alimentação e da nutrição. Nos EUA chama-se \"registered dietitian\" (RD ou RDN)."]],
          slides: [
            { title: "Três partes do prato", bullets: ["Hidratos de carbono: energia", "Proteína: reparação", "Fruta e legumes: vitaminas e minerais"] },
            { title: "Dias duros, mais energia", bullets: ["Os dias de treino muitas vezes pedem mais energia", "Quantidades exatas: pergunte a um nutricionista"] },
            { title: "Cuidado com", bullets: ["Saltar refeições", "Cortar grupos inteiros de alimentos", "Preocupação com a comida ou o corpo: fale com alguém"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Find a Nutrition Expert", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Escreva o que comeu ontem numa refeição. Marque o hidrato de carbono, a proteína e a fruta ou o legume. O que podia acrescentar para ter um prato equilibrado?",
          youCanNow: "montar um prato equilibrado com hidratos de carbono, proteína, e fruta e legumes.",
          quickCheck: [
            { objective: "O1", q: "Qual é a principal função da proteína no prato de um atleta?", options: ["Energia rápida", "Ajudar os músculos a recuperar", "Só dar vitaminas", "Manter o corpo fresco"], answer: 1, why: "A proteína dá o material de que os músculos precisam para se repararem." },
            { objective: "O1", q: "Amanhã é um dia de treino duro. Que mudança no prato faz sentido?", options: ["Saltar o pequeno-almoço", "Cortar os hidratos de carbono", "Acrescentar mais hidratos de carbono para ter energia", "Comer só legumes"], answer: 2, why: "Os dias mais duros costumam pedir mais hidratos de carbono para ter energia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rotina de comida e água para o dia do jogo",
          minutes: 5,
          goal: "Planear o que e quando come e bebe num dia de jogo ou de treino duro.",
          text: [
            "A hora conta. Muitos atletas comem uma refeição normal e equilibrada algumas horas antes do jogo e um lanche pequeno e leve mais perto do início, como fruta ou bolachas. No dia do jogo, o melhor são os alimentos a que está habituado: não experimente nada novo.",
            "A água conta durante o dia todo, não só durante o jogo. Leve uma garrafa de água, beba com regularidade e beba mais quando faz calor. Sede, urina escura, dor de cabeça e cãibras podem ser sinais de que precisa de mais líquido. Sentir tonturas, confusão ou sentir-se muito mal com o calor é uma emergência: pare e avise logo o seu treinador ou o fisioterapeuta desportivo.",
            "Depois de um treino duro, comer uma refeição ou um lanche com hidratos de carbono e proteína ajuda a recuperar. O seu fisioterapeuta desportivo ou nutricionista pode dizer-lhe o que funciona para o seu corpo e o seu desporto."
          ],
          steps: ["Escreva a hora de início do jogo ou do treino.", "Planeie uma refeição normal e equilibrada algumas horas antes.", "Planeie um lanche pequeno e conhecido mais perto do início.", "Planeie a sua garrafa de água para o dia todo.", "Planeie uma refeição ou um lanche de recuperação para depois."],
          words: [["Hidratação", "manter água suficiente no corpo."], ["Refeição de recuperação", "comida depois do treino que ajuda o corpo a repor a energia e a reparar-se."]],
          slides: [
            { title: "Antes do jogo", bullets: ["Refeição equilibrada algumas horas antes", "Lanche pequeno e conhecido mais perto do início", "Nada de novo no dia do jogo"] },
            { title: "Água o dia todo", bullets: ["Leve uma garrafa", "Mais quando faz calor", "Tonturas ou confusão com calor? Pare e avise já a equipa técnica"] },
            { title: "Depois", bullets: ["Hidratos de carbono e proteína", "Pergunte ao fisioterapeuta desportivo o que funciona para você"] }
          ],
          tryIt: "Escreva um horário do dia do jogo para o seu próximo jogo ou treino duro: refeição, lanche, água e comida de recuperação, com as horas.",
          youCanNow: "planear uma rotina simples de comida e água para o dia do jogo.",
          quickCheck: [
            { objective: "O2", q: "Quando é que muitos atletas comem a sua refeição normal e equilibrada no dia do jogo?", options: ["Algumas horas antes do jogo", "Mesmo quando o jogo começa", "Só depois do jogo", "Só na noite anterior"], answer: 0, why: "Uma refeição normal algumas horas antes e um lanche pequeno mais perto do início é uma rotina comum." },
            { objective: "O2", q: "Está um dia quente e tem um treino longo. O que planeia?", options: ["Beber só quando o treinador manda", "Não beber água para não ter cãibras", "Esperar até ao fim do treino para beber", "Levar uma garrafa de água e beber com regularidade o dia todo, mais com o calor"], answer: 3, why: "A água conta durante o dia todo, e precisa de mais quando faz calor." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar a IA para ideias de refeições e listas de compras",
          minutes: 5,
          goal: "Usar um assistente de IA para fazer uma semana de ideias de refeições e uma lista de compras dentro do seu orçamento.",
          text: [
            "Os assistentes de IA são bons a dar ideias de refeições, receitas e listas de compras. Diga-lhes o seu horário, o seu orçamento, a sua cozinha e aquilo de que gosta. Exemplo: \"Sou atleta universitário, tenho um micro-ondas no quarto da residência e um orçamento de $50 por semana para comida. O treino é das 3 às 6 da tarde. Dê-me 7 dias de refeições simples e equilibradas e uma lista de compras.\"",
            "Fale-lhe das alergias a alimentos ou das regras religiosas ou culturais sobre comida com palavras gerais, para as ideias servirem para você. Não cole registos médicos nem medicamentos.",
            "Não peça à IA metas de calorias, planos para perder peso ou doses de suplementos. Isso depende da sua saúde, e as respostas podem estar erradas ou ser perigosas. Isso é trabalho de um nutricionista ou de um médico."
          ],
          steps: ["Diga o seu horário, o seu orçamento e a sua cozinha.", "Diga de que alimentos gosta e quais evita.", "Peça ideias de refeições equilibradas para 7 dias.", "Peça uma lista de compras organizada por secção da loja.", "Verifique os preços na sua loja e ajuste."],
          words: [["Orçamento", "o dinheiro que planeia gastar."], ["Alergia", "quando o corpo reage mal a um alimento; pode ser grave."]],
          slides: [
            { title: "Dê os detalhes à IA", bullets: ["Horário e orçamento", "Cozinha: residência, casa, nenhuma", "Alimentos de que gosta e que evita"] },
            { title: "Peça", bullets: ["7 dias de ideias de refeições equilibradas", "Lista de compras por secção da loja"] },
            { title: "NÃO peça à IA", bullets: ["Metas de calorias ou planos para perder peso", "Doses de suplementos", "Conselhos médicos"] }
          ],
          tryIt: "Peça a um assistente de IA sete dias de refeições simples e equilibradas e uma lista de compras para o seu orçamento e a sua cozinha reais. Verifique três preços na sua loja.",
          youCanNow: "usar a IA para ter ideias de refeições e uma lista de compras que caibam no seu orçamento e no seu horário.",
          quickCheck: [
            { objective: "O3", q: "Que detalhes ajudam um assistente de IA a dar ideias úteis de refeições?", options: ["Os seus registos médicos", "O seu horário, o seu orçamento e a sua cozinha", "Os seus medicamentos", "A sua meta de peso"], answer: 1, why: "O horário, o orçamento e a cozinha fazem as ideias servirem para a sua vida sem partilhar dados privados de saúde." },
            { objective: "O3", q: "Quer saber exatamente quantas calorias deve comer para perder peso. A quem pergunta?", options: ["A um assistente de IA", "A um colega de equipa", "A um nutricionista ou a um médico", "A um influenciador das redes sociais"], answer: 2, why: "As metas de calorias dependem da sua saúde e são trabalho de um nutricionista ou de um médico." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Comer bem à volta do treino",
        questions: [
          { objective: "O1", q: "Qual é a principal função dos hidratos de carbono para os atletas?", options: ["Só reparar os músculos", "Só dar vitaminas", "Energia", "Nenhuma"], answer: 2, why: "Os hidratos de carbono são a principal fonte de energia rápida do corpo." },
          { objective: "O1", q: "Quem é a pessoa certa para as suas quantidades exatas de comida?", options: ["Um nutricionista", "Um assistente de IA", "Um influenciador das redes sociais", "Um colega de equipa"], answer: 0, why: "Os nutricionistas dão conselhos de nutrição pessoais." },
          { objective: "O2", q: "No dia do jogo, qual é o melhor lanche?", options: ["Uma bebida energética nova que nunca experimentou", "Nada o dia todo", "Uma refeição enorme e gordurosa mesmo antes", "Um lanche pequeno e conhecido, como fruta"], answer: 3, why: "Alimentos conhecidos e leves são os mais seguros no dia do jogo." },
          { objective: "O2", q: "Um colega de equipa está com tonturas e confuso no treino, com calor. O que faz?", options: ["Diz-lhe para aguentar", "Avisa logo o treinador ou o fisioterapeuta desportivo", "Espera até ao fim do treino", "Dá-lhe uma bebida energética e vai-se embora"], answer: 1, why: "Esses sinais podem ser uma emergência; a equipa técnica tem de agir já." },
          { objective: "O3", q: "Que pedido NÃO deve fazer a um assistente de IA?", options: ["Uma lista de compras com um orçamento de $50", "Uma dose de suplemento para você", "Ideias de refeições no micro-ondas", "Receitas com feijão"], answer: 1, why: "As doses dependem da sua saúde; pergunte a um nutricionista ou a um médico." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hábitos de recuperação",
      lessons: [
        {
          objectives: ["O4"],
          title: "O sono: a sua melhor ferramenta de recuperação",
          minutes: 5,
          goal: "Criar uma rotina de sono simples que caiba no seu horário.",
          text: [
            "É durante o sono que o corpo se repara e o cérebro guarda o que treinou. Os adolescentes geralmente precisam de dormir mais do que os adultos, e muitos atletas não dormem o suficiente.",
            "Uma rotina de sono ajuda: uma hora fixa para deitar e para acordar, ecrãs desligados antes de dormir, um quarto fresco e escuro, e cafeína só no início do dia. A IA pode ajudá-lo a fazer um plano para a hora de deitar à volta de treinos cedo ou de jogos tarde.",
            "Se muitas vezes não consegue dormir, ressona alto ou se sente esgotado mesmo depois de dormir, fale com o seu médico."
          ],
          steps: ["Escolha uma hora fixa para acordar.", "Conte para trás até uma hora de deitar que lhe dê sono suficiente.", "Marque uma hora para desligar os ecrãs antes de dormir.", "Beba cafeína só no início do dia.", "Registe as suas horas de sono durante uma semana."],
          words: [["Rotina de sono", "os mesmos passos à mesma hora todas as noites para ajudar a adormecer."], ["Cafeína", "um estimulante que há no café, no chá, nos refrigerantes e nas bebidas energéticas e que pode tirar o sono."]],
          slides: [
            { title: "Porque o sono conta", bullets: ["O corpo repara-se", "O cérebro guarda o que aprendeu", "Os adolescentes precisam de mais do que os adultos"] },
            { title: "Uma rotina simples", bullets: ["A mesma hora para deitar e para acordar", "Ecrãs desligados antes de dormir", "Quarto fresco e escuro", "Cafeína só cedo"] },
            { title: "Vá ao médico se", bullets: ["Muitas vezes não consegue dormir", "Ressona alto", "Está sempre esgotado"] }
          ],
          tryIt: "Pergunte a um assistente de IA: \"Tenho treino às 6 da manhã nos dias de semana e os jogos acabam às 9 da noite às sextas-feiras. Ajude-me a fazer uma rotina de sono simples.\" Escolha a sua hora de deitar e registe o seu sono nas próximas três noites.",
          youCanNow: "criar e acompanhar uma rotina de sono simples.",
          quickCheck: [
            { objective: "O4", q: "Qual destes faz parte de uma boa rotina de sono?", options: ["Cafeína tarde à noite", "Uma hora de deitar diferente todas as noites", "Um quarto claro e quente", "Uma hora fixa para deitar e para acordar"], answer: 3, why: "Horas fixas, ecrãs desligados, um quarto fresco e escuro e cafeína só cedo ajudam a dormir." },
            { objective: "O4", q: "O treino começa às 6 da manhã. Como escolhe a sua hora de deitar?", options: ["Escolhe a hora de acordar e conta para trás até uma hora de deitar que dê sono suficiente", "Deita-se quando acabar de usar o telefone", "Dorme até tarde nos dias de treino", "Não dorme antes do treino cedo"], answer: 0, why: "Contar para trás a partir de uma hora fixa de acordar dá uma hora de deitar com sono suficiente." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dias de descanso, dores musculares e dor",
          minutes: 5,
          goal: "Distinguir a dor muscular normal do treino de uma dor que precisa de um profissional.",
          text: [
            "Os dias de descanso fazem parte do treino, não são uma pausa no treino. O seu treinador planeia-os para o corpo se adaptar e ficar mais forte.",
            "A dor muscular normal é um cansaço geral e surdo nos músculos um ou dois dias depois de um treino duro, e melhora devagar. Uma dor aguda, numa articulação ou num osso, que o faz coxear, que causa inchaço ou que piora é diferente: pare e avise o seu fisioterapeuta desportivo.",
            "As lesões na cabeça precisam de cuidado especial. Se você ou um colega levarem uma pancada e tiverem dor de cabeça, tonturas, confusão ou se sentirem \"estranhos\", parem de jogar e avisem o treinador ou o fisioterapeuta desportivo. A formação gratuita HEADS UP do CDC (a agência de saúde pública dos EUA) explica os sinais."
          ],
          steps: ["Repare onde e como dói.", "Surda, geral e a melhorar: dor muscular normal.", "Aguda, numa articulação, com inchaço, a coxear ou a piorar: avise o fisioterapeuta desportivo.", "Qualquer pancada na cabeça com sintomas: pare e avise a equipa técnica."],
          words: [["Dor muscular", "cansaço surdo nos músculos depois de um treino duro, que passa em um ou dois dias."], ["Concussão", "uma lesão no cérebro causada por uma pancada ou um abanão forte na cabeça ou no corpo."]],
          slides: [
            { title: "Os dias de descanso são treino", bullets: ["O corpo adapta-se nos dias de descanso", "Siga o plano que o treinador marca"] },
            { title: "Dor muscular ou dor", bullets: ["Dor muscular: surda, geral, a passar", "Dor: aguda, articulação, inchaço, coxear, a piorar"] },
            { title: "Pancada na cabeça?", bullets: ["Dor de cabeça, tonturas, confusão, \"estranho\"", "Pare de jogar e avise a equipa técnica", "Aprenda os sinais: CDC HEADS UP"] }
          ],
          sources: [{ name: "CDC: HEADS UP concussion training", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Escreva duas listas: sinais de dor muscular normal e sinais de dor que deve comunicar. Depois escreva a quem da sua equipa contaria e como chegaria a essa pessoa.",
          youCanNow: "distinguir a dor muscular normal de uma dor que precisa do seu fisioterapeuta desportivo, e saber o que fazer depois de uma pancada na cabeça.",
          quickCheck: [
            { objective: "O5", q: "Qual é um sinal de dor que precisa do seu fisioterapeuta desportivo?", options: ["Cansaço surdo nas pernas no dia a seguir a um treino duro", "Dor aguda numa articulação que está a piorar", "Dor muscular ligeira que passa em dois dias", "Ter fome depois do treino"], answer: 1, why: "Dor aguda, dor numa articulação ou num osso, inchaço, coxear ou dor que piora precisam de um profissional." },
            { objective: "O5", q: "Um colega leva uma pancada na cabeça e diz que tem tonturas. O que acontece?", options: ["Continua a jogar se quiser", "Descansa durante uma jogada", "Para de jogar e você avisa o treinador ou o fisioterapeuta desportivo", "Bebe água e volta ao jogo"], answer: 2, why: "Uma pancada na cabeça com sintomas quer dizer parar de jogar e avisar a equipa técnica." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Criar o seu plano de recuperação",
          minutes: 5,
          goal: "Juntar a comida, a água e o sono num plano semanal de recuperação e verificá-lo com um profissional.",
          text: [
            "Agora junte tudo. O seu plano semanal tem refeições à volta dos treinos, uma rotina para o dia do jogo, um hábito de beber água e uma rotina de sono.",
            "Peça a um assistente de IA para juntar tudo: \"Aqui está o meu horário de treinos e jogos, o meu orçamento e a minha cozinha. Faça uma tabela de uma semana com refeições, lanches, lembretes para beber água e horas de deitar.\" Tire primeiro todos os dados privados de saúde.",
            "Depois leve-o a um nutricionista, ao seu fisioterapeuta desportivo ou ao seu médico. Pergunte: \"Isto serve para o meu corpo e o meu desporto? O que mudaria?\" O plano que eles o ajudam a corrigir é o que deve seguir. Uma escola, uma equipa ou um centro de saúde para estudantes pode ajudá-lo a encontrar um."
          ],
          steps: ["Junte as informações do seu horário, do seu orçamento e da sua cozinha.", "Peça à IA uma tabela de uma semana: refeições, lanches, água, horas de deitar.", "Tire os dados privados de saúde.", "Mostre-a a um nutricionista, a um fisioterapeuta desportivo ou a um médico.", "Atualize-a com os conselhos deles."],
          words: [["Plano de recuperação", "a sua rotina semanal de comida, água, sono e descanso que ajuda o corpo a recuperar."]],
          slides: [
            { title: "O seu plano de recuperação", bullets: ["Refeições à volta dos treinos", "Rotina para o dia do jogo", "Hábito de beber água", "Rotina de sono"] },
            { title: "A IA faz o rascunho", bullets: ["Tabela de uma semana", "Sem dados privados de saúde"] },
            { title: "Um profissional verifica", bullets: ["Nutricionista, fisioterapeuta desportivo ou médico", "\"O que mudaria?\"", "Siga o plano corrigido"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Find a Nutrition Expert", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Tarefa final: use um assistente de IA para fazer o rascunho do seu plano de uma semana de refeições e recuperação, tire os dados privados de saúde e mostre-o a um nutricionista, a um fisioterapeuta desportivo ou a um médico.",
          youCanNow: "criar com a IA um plano semanal de comida, água e sono e pedir a um profissional que o verifique.",
          quickCheck: [
            { objective: "O6", q: "O que entra no seu plano de recuperação de uma semana?", options: ["Refeições e lanches, lembretes para beber água e horas de deitar", "Só os seus treinos", "Só o seu horário de jogos", "Uma lista de suplementos"], answer: 0, why: "O plano junta a comida, a água e o sono à volta do seu horário." },
            { objective: "O6", q: "O seu fisioterapeuta desportivo sugere mudanças ao plano feito com a IA. O que faz?", options: ["Fica com a versão da IA", "Pede à IA para discutir com ele", "Usa metade de cada um", "Atualiza o plano com os conselhos dele e segue essa versão"], answer: 3, why: "O plano que o profissional o ajuda a corrigir é o que deve seguir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Hábitos de recuperação",
        questions: [
          { objective: "O4", q: "Porque é que o sono conta para os atletas?", options: ["Não conta", "Substitui o treino", "Só para o peso", "O corpo repara-se e o cérebro guarda o que aprendeu"], answer: 3, why: "É durante o sono que acontecem a reparação e a aprendizagem." },
          { objective: "O4", q: "Qual destes faz parte de uma boa rotina de sono?", options: ["Ecrãs desligados antes de dormir", "Bebidas energéticas à noite", "Uma hora de deitar diferente todas as noites", "O telefone na cama até adormecer"], answer: 0, why: "Desligar os ecrãs antes de dormir ajuda a adormecer." },
          { objective: "O5", q: "O seu joelho tem uma dor aguda e está inchado depois do treino. O que faz?", options: ["Ignora", "Pede um tratamento à IA", "Avisa o seu fisioterapeuta desportivo", "Corre mais para soltar"], answer: 2, why: "Uma dor aguda com inchaço precisa de um profissional." },
          { objective: "O5", q: "Um colega sente tonturas e está \"estranho\" depois de uma pancada na cabeça. O que deve acontecer?", options: ["Continua a jogar", "Faz uma pausa curta e volta ao jogo", "Pergunta a uma aplicação", "Para de jogar e avisa a equipa técnica"], answer: 3, why: "Pode ser uma concussão: pare e avise o treinador ou o fisioterapeuta desportivo." },
          { objective: "O6", q: "Quem deve verificar o seu plano de recuperação feito com a IA?", options: ["Uma secção de comentários qualquer", "Um nutricionista, um fisioterapeuta desportivo ou um médico", "Outra vez a IA", "Ninguém"], answer: 1, why: "Um profissional pode ajustar o plano ao seu corpo e ao seu desporto." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Nutrição e Recuperação com IA",
    questions: [
      { objective: "O1", q: "Que alimento é principalmente uma proteína?", options: ["Arroz", "Maçãs", "Ovos", "Pão"], answer: 2, why: "Os ovos são um alimento de proteína." },
      { objective: "O1", q: "As três partes principais de um prato equilibrado são:", options: ["Hidratos de carbono, proteína, fruta e legumes", "Doces, refrigerantes, batatas fritas de pacote", "Só proteína", "Só legumes"], answer: 0, why: "Essas três partes cobrem a energia, a reparação e as vitaminas." },
      { objective: "O1", q: "Os dias de treino duro costumam pedir:", options: ["Mais energia da comida", "Saltar refeições", "Nada de água", "Só lanches"], answer: 0, why: "Mais treino normalmente quer dizer que precisa de mais energia." },
      { objective: "O1", q: "A comida ou a imagem do corpo estão a preocupá-lo. Deve:", options: ["Deixar de comer", "Esconder isso", "Falar com alguém de confiança e com o seu fisioterapeuta desportivo ou o seu médico", "Pedir uma dieta à IA"], answer: 2, why: "Estas preocupações merecem apoio verdadeiro." },
      { objective: "O2", q: "No dia do jogo, escolha:", options: ["Um alimento totalmente novo", "Alimentos a que está habituado", "Nada o dia todo", "Um suplemento novo"], answer: 1, why: "Os alimentos conhecidos são os mais seguros." },
      { objective: "O2", q: "Quando deve beber água?", options: ["Só durante o jogo", "Nunca antes dos jogos", "Só quando mandam", "Ao longo do dia, mais quando faz calor"], answer: 3, why: "A hidratação é um hábito de todo o dia." },
      { objective: "O2", q: "Qual pode ser um sinal de que precisa de mais líquido?", options: ["Sentir-se descansado", "Pensar com clareza", "Urina escura e dor de cabeça", "Dormir bem"], answer: 2, why: "Urina escura, dor de cabeça e cãibras podem mostrar que falta líquido." },
      { objective: "O2", q: "Depois de um treino duro, um lanche de recuperação tem:", options: ["Só água", "Só doces", "Nada", "Hidratos de carbono e proteína"], answer: 3, why: "Os hidratos de carbono repõem a energia; a proteína ajuda a reparar." },
      { objective: "O3", q: "O que deve dar à IA para ter ideias úteis de refeições?", options: ["O seu horário, o seu orçamento e a sua cozinha", "Os seus registos médicos", "A sua palavra-passe", "O seu cartão do banco"], answer: 0, why: "Esses detalhes fazem as ideias servirem para a sua vida." },
      { objective: "O3", q: "O que NÃO deve pedir à IA?", options: ["Receitas no micro-ondas", "Uma meta de calorias para perder peso", "Uma lista de compras", "Ideias de refeições com feijão"], answer: 1, why: "As metas de calorias dependem da sua saúde; pergunte a um nutricionista." },
      { objective: "O3", q: "Como deve falar de uma alergia a alimentos à IA?", options: ["Colando o seu processo médico", "Escrevendo as notas do seu médico", "Com palavras gerais, como \"sem amendoim\"", "Não fala disso"], answer: 2, why: "Palavras gerais dão ideias seguras sem partilhar registos." },
      { objective: "O3", q: "Depois de a IA fazer uma lista de compras, deve:", options: ["Verificar os preços na sua loja", "Confiar nos preços", "Comprar tudo duas vezes", "Publicá-la"], answer: 0, why: "A IA não pode saber os preços reais da sua loja." },
      { objective: "O3", q: "Os suplementos são arriscados porque:", options: ["São sempre ilegais", "São grátis", "São os treinadores que os vendem", "Não são verificados pela FDA (a agência dos EUA para alimentos e medicamentos) antes da venda e alguns têm substâncias proibidas"], answer: 3, why: "A USADA (a agência antidopagem dos EUA) avisa sobre suplementos contaminados e com rótulos errados." },
      { objective: "O4", q: "O que ajuda a adormecer?", options: ["Cafeína tarde à noite", "Um quarto fresco e escuro", "Ver o telefone na cama", "Uma hora de deitar diferente todas as noites"], answer: 1, why: "Um quarto fresco e escuro ajuda a dormir." },
      { objective: "O4", q: "Está sempre esgotado mesmo depois de dormir. Deve:", options: ["Beber mais bebidas energéticas", "Falar com o seu médico", "Ignorar", "Treinar com mais força"], answer: 1, why: "Um cansaço que não passa é razão para ir ao médico." },
      { objective: "O5", q: "Os dias de descanso são:", options: ["Preguiça", "Proibidos", "Só para jogadores lesionados", "Parte do treino"], answer: 3, why: "O corpo adapta-se e fica mais forte nos dias de descanso." },
      { objective: "O5", q: "O que parece uma dor muscular normal?", options: ["Cansaço surdo nos músculos que passa em um ou dois dias", "Dor aguda numa articulação", "Inchaço e coxear", "Dor que continua a piorar"], answer: 0, why: "A dor muscular normal é surda e passa." },
      { objective: "O5", q: "Onde pode aprender de graça os sinais de uma concussão?", options: ["Num meme qualquer", "Num anúncio de bebida desportiva", "CDC HEADS UP", "Em lado nenhum"], answer: 2, why: "O CDC oferece a formação gratuita HEADS UP." },
      { objective: "O6", q: "Antes de colar o seu plano na IA, tire:", options: ["As horas de treino", "O seu orçamento", "Os seus alimentos preferidos", "Os dados privados de saúde"], answer: 3, why: "Os dados de saúde ficam privados." },
      { objective: "O6", q: "O plano que deve seguir é:", options: ["O primeiro rascunho da IA", "O que foi corrigido com um nutricionista, um fisioterapeuta desportivo ou um médico", "O plano de um influenciador", "O plano do seu rival"], answer: 1, why: "Um profissional ajusta o plano a você." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      8,
      9,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Refeições equilibradas",
        objective: "O1",
        notYet: "As refeições deixam de fora um grupo inteiro de alimentos, ou faltam refeições à volta dos treinos.",
        meets: "Cada refeição principal tem hidratos de carbono, proteína, e fruta ou legumes.",
        exceeds: "Há mais energia planeada nos dias duros e as refeições usam alimentos de que o atleta já gosta."
      },
      {
        name: "Rotina do dia do jogo",
        objective: "O2",
        notYet: "Sem horas, sem plano de água, ou com um alimento novo no dia do jogo.",
        meets: "Uma refeição conhecida algumas horas antes, um lanche pequeno mais perto do início, água o dia todo e um lanche de recuperação depois.",
        exceeds: "Inclui um plano para o calor e os sinais de alerta que querem dizer parar e avisar a equipa técnica."
      },
      {
        name: "Lista de compras dentro do orçamento",
        objective: "O3",
        notYet: "Não há lista de compras, ou o plano pede à IA metas de calorias ou doses de suplementos.",
        meets: "Uma lista de compras que cabe no orçamento e na cozinha indicados, com as alergias ditas em palavras gerais.",
        exceeds: "Os preços foram verificados na loja do atleta e a lista foi ajustada."
      },
      {
        name: "Rotina de sono",
        objective: "O4",
        notYet: "Não há hora fixa para acordar nem para deitar.",
        meets: "Uma hora fixa para acordar, para deitar e para desligar os ecrãs, que cabe no horário.",
        exceeds: "As horas de sono foram registadas durante uma semana e a rotina foi ajustada aos treinos cedo ou aos jogos tarde."
      },
      {
        name: "Verificação por um profissional",
        objective: "O6",
        notYet: "O plano não foi mostrado a um profissional, ou tem dados privados de saúde.",
        meets: "Dados privados retirados, plano mostrado a um nutricionista, a um fisioterapeuta desportivo ou a um médico, e atualizado com os conselhos deles.",
        exceeds: "O atleta escreve o que foi mudado e porquê."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam a tarefa final e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que dizem seguir o seu plano verificado de refeições e sono 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter falado sobre o seu plano com um nutricionista, um fisioterapeuta desportivo ou um médico",
      "Alunos que dizem ter avisado a equipa técnica sobre uma dor aguda, sinais de doença causada pelo calor ou uma pancada na cabeça em vez de continuar a jogar"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "O seu horário de treinos e jogos, o orçamento semanal para comida e os detalhes da sua cozinha",
      "O contacto de um nutricionista, de um fisioterapeuta desportivo, de um centro de saúde para estudantes ou de um médico",
      "Cerca de 60 minutos, mais o tempo para o encontro com o profissional"
    ],
    facilitatorNotes: [
      "Diga com clareza que isto é educação geral; não dê no grupo conselhos individuais sobre calorias, peso ou suplementos.",
      "Tenha cuidado com o peso e a imagem do corpo: nunca pese nem compare atletas, e saiba a quem encaminhar alguém que esteja com dificuldades.",
      "Combine o acesso a um nutricionista, a um fisioterapeuta desportivo ou a um centro de saúde para estudantes antes da tarefa final, para que todos os atletas possam ter o plano verificado.",
      "Reveja com todo o grupo os sinais de doença causada pelo calor e de pancada na cabeça e confirme que os atletas sabem a quem avisar.",
      "Respeite os orçamentos de comida, as alergias e as regras culturais ou religiosas sobre comida quando partilhar exemplos de refeições."
    ]
  }
};
