"use strict";

// Koach Learn course (Portuguese translation of leadership/lead-managing-teams.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "lead-managing-teams-pt",
  lang: "pt",
  translationOf: "lead-managing-teams",
  category: "Leadership Development",
  name: "Gerir Equipas",
  skills: "Definir expectativas claras, Delegar trabalho, Fazer reuniões individuais, Dar feedback situação-comportamento-impacto, Tratar o baixo desempenho com justiça, Fazer reuniões de equipa e reconhecer o bom trabalho",
  outcome: "gerir uma pequena equipa semana a semana: definir expectativas claras, passar trabalho a outros, fazer reuniões individuais úteis, dar feedback justo e concreto, tratar um problema de desempenho passo a passo e fazer uma reunião de equipa curta que termina com ações claras e um agradecimento verdadeiro.",
  about: [
    "Este curso é para gestores novos e para quem vai ser gestor em breve: o chefe de turno numa loja, o chefe de equipa numa machamba ou numa fazenda, um supervisor numa organização sem fins lucrativos, ou qualquer pessoa a quem acabaram de pedir que cuide do trabalho de outras pessoas.",
    "Você vai praticar os hábitos do dia a dia dos bons gestores: passar de fazer o trabalho a liderá-lo, dizer com clareza como é um bom resultado, delegar, reunir-se a sós com cada pessoa, dar feedback que ajuda, tratar um problema com justiça e fazer reuniões que as pessoas não temem.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" com a sua equipa ou com uma equipa que conhece. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Os assistentes de IA podem ajudar a escrever rascunhos de notas e de agendas, mas a habilidade é sua."
  ],
  finalTask: "Escreva um plano de uma página para os \"primeiros 30 dias\" de uma equipa que lidera ou conhece: expectativas claras para uma função, uma tarefa que vai delegar (com o resultado, o prazo e o acompanhamento), uma agenda de reunião individual, um feedback escrito na forma situação-comportamento-impacto e uma agenda de reunião de equipa de 20 minutos que termina com ações e um agradecimento concreto.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Chefes de equipa, supervisores e donos de pequenos negócios, novos ou que querem vir a ser, incluindo pessoas promovidas da linha da frente e voluntários que lideram equipas em grupos comunitários.",
    startingPoint: "São bons no seu próprio trabalho e sabem seguir instruções. Muitos nunca tiveram formação em gestão, e alguns agora gerem antigos colegas.",
    gap: "Os gestores novos muitas vezes continuam a fazer o trabalho eles próprios, dão instruções vagas, evitam conversas difíceis e fazem reuniões sem ações. Isso cansa-os até ao esgotamento e atrasa a equipa. Precisam de hábitos simples, que se repetem, para as expectativas, a delegação, as reuniões individuais, o feedback, os problemas de desempenho e as reuniões.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Tempo: lições curtas que cabem num dia de trabalho",
      "Aparelhos: um telefone ou um computador; o plano pode ser feito em papel",
      "As regras do trabalho variam: avisos formais e despedimentos seguem a política da organização e os recursos humanos",
      "Privacidade: as notas das reuniões individuais e os detalhes de desempenho ficam privados e são tratados com respeito"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Quando começa a gerir pessoas", action: "descrever como o seu trabalho muda e escolher uma tarefa que vai deixar de fazer você mesmo", standard: "nomeando pelo menos duas partes do trabalho principal de um gestor" },
    { id: "O2", condition: "Com uma tarefa para um membro da equipa", action: "escrever uma expectativa clara e uma delegação com o resultado, o prazo, o que a pessoa pode decidir e um acompanhamento", standard: "para que a pessoa consiga repetir a tarefa com as suas próprias palavras" },
    { id: "O3", condition: "Para um membro da equipa", action: "planear uma agenda de reunião individual que começa pelo que a pessoa tem em mente", standard: "cobrindo o progresso, os bloqueios e o crescimento" },
    { id: "O4", condition: "Com algo que um membro da equipa fez", action: "escrever um feedback na forma situação-comportamento-impacto e perguntar como a pessoa vê a situação", standard: "nomeando um comportamento concreto que viu ou ouviu, sem \"sempre\" nem \"nunca\"" },
    { id: "O5", condition: "Com um problema de desempenho", action: "planear uma conversa privada e um plano de melhoria por escrito", standard: "verificando primeiro as expectativas e incluindo como é um bom resultado, o apoio que vai dar e uma data de revisão" },
    { id: "O6", condition: "Para uma reunião de equipa regular", action: "escrever uma agenda curta que termina com ações e um agradecimento concreto", standard: "com quem faz o quê e até quando, enviada no mesmo dia" }
  ],
  chapters: [
    {
      name: "Capítulo 1: De quem faz a quem gere",
      lessons: [
        {
          objectives: ["O1"],
          title: "Passar de quem faz a quem gere",
          minutes: 4,
          goal: "Descrever como o seu trabalho muda quando começa a gerir pessoas e escolher o que vai deixar de fazer você mesmo.",
          text: [
            "Muitos gestores recebem o cargo porque eram bons no trabalho. Mas agora o trabalho é outro: os seus resultados são os resultados da equipa. Se continuar a fazer tudo sozinho, a equipa deixa de crescer e você fica esgotado.",
            "O seu novo trabalho é deixar o objetivo claro, dar às pessoas o que precisam, tirar o que as bloqueia, ajudá-las a melhorar e reparar no bom trabalho. Você ainda pode dar uma mão quando isso ajuda de verdade, mas já não é o seu trabalho principal.",
            "É normal isto parecer estranho, sobretudo se agora gere antigos colegas. Seja simpático, seja justo com todos e diga com honestidade que a sua função mudou. Pergunte ao seu próprio chefe como é o sucesso para você."
          ],
          steps: ["Escreva as tarefas que ainda faz você mesmo todas as semanas.", "Marque as que alguém da equipa poderia aprender a fazer.", "Escolha uma para passar a outra pessoa este mês.", "Pergunte ao seu chefe: \"O que faria da minha equipa um sucesso daqui a seis meses?\""],
          words: [["Gestor", "uma pessoa responsável pelos resultados de um grupo de pessoas, e não só pelo seu próprio trabalho."], ["Subordinado direto", "uma pessoa de quem você é o gestor."]],
          slides: [
            { title: "O seu trabalho mudou", bullets: ["Antes: os seus próprios resultados", "Agora: os resultados da equipa", "Fazer tudo sozinho impede a equipa de crescer"] },
            { title: "O que um gestor faz", bullets: ["Deixa o objetivo claro", "Dá às pessoas o que precisam", "Tira os bloqueios", "Ajuda as pessoas a melhorar e repara no bom trabalho"] },
            { title: "Gerir antigos colegas", bullets: ["Seja simpático e justo com todos", "Diga com honestidade que a sua função mudou", "Pergunte ao seu chefe como é o sucesso"] }
          ],
          tryIt: "Faça uma lista de cinco tarefas que faz todas as semanas. Faça um círculo à volta de uma que alguém da sua equipa poderia aprender. Escreva uma frase sobre quem poderia ficar com ela e porque isso o ajudaria.",
          youCanNow: "explicar em que o trabalho de um gestor é diferente do trabalho de quem faz, e escolher uma tarefa que vai deixar de fazer você mesmo.",
          quickCheck: [
            { objective: "O1", q: "Qual destas coisas faz parte do novo trabalho de um gestor?", options: ["Fazer pessoalmente todas as tarefas difíceis", "Deixar o objetivo claro e reparar no bom trabalho", "Evitar os antigos colegas", "Verificar todos os e-mails que a equipa envia"], answer: 1, why: "O trabalho do gestor é deixar o objetivo claro, tirar os bloqueios, ajudar as pessoas a melhorar e reparar no bom trabalho." },
            { objective: "O1", q: "É novo como gestor e não sabe bem como é o sucesso para você. O que faz?", options: ["Adivinha e espera que corra bem", "Copia exatamente o último gestor", "Pede à equipa que decida", "Pergunta ao seu próprio chefe como é o sucesso"], answer: 3, why: "A lição diz para perguntar ao seu próprio chefe como é o sucesso." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Definir expectativas claras e delegar",
          minutes: 6,
          goal: "Escrever uma expectativa clara e passar uma tarefa a alguém com um resultado, um prazo e um acompanhamento.",
          text: [
            "A maioria dos problemas de uma equipa começa com expectativas pouco claras. As pessoas não conseguem acertar num alvo que não veem. Uma expectativa clara diz qual é o resultado, que qualidade precisa de ter e até quando. \"Mantenha a loja limpa\" é vago. \"Reponha e arrume as prateleiras da frente até às 9 da manhã todos os dias\" é claro.",
            "Delegar quer dizer dar a alguém uma tarefa e a autoridade para a fazer, e não só os trabalhos chatos. Diga que resultado quer e porque é importante, o prazo, o que a pessoa pode decidir sozinha e quando vão falar sobre o andamento. Depois deixe-a fazer à sua maneira.",
            "Adapte a passagem da tarefa à pessoa. Alguém novo precisa de mais passos e de mais acompanhamento. Alguém com experiência pode só precisar do objetivo. Peça à pessoa para repetir o que ouviu, para os dois saberem que estão de acordo."
          ],
          steps: ["Diga o resultado que quer e porque é importante.", "Diga que qualidade precisa de ter e o prazo.", "Diga o que a pessoa pode decidir sozinha e quando lhe deve perguntar.", "Combinem uma hora de acompanhamento.", "Peça à pessoa para repetir a tarefa com as suas próprias palavras."],
          words: [["Expectativa", "uma frase clara sobre o resultado pelo qual alguém é responsável e como vai ser avaliado."], ["Delegar", "dar a alguém uma tarefa e a autoridade para a fazer."], ["Acompanhamento", "uma conversa curta e marcada para ver como está a correr uma tarefa."]],
          slides: [
            { title: "Expectativas claras", bullets: ["Que resultado", "Que qualidade precisa de ter", "Até quando"] },
            { title: "Vago e claro", bullets: ["Vago: \"Mantenha a loja limpa\"", "Claro: \"Reponha e arrume as prateleiras da frente até às 9 da manhã, todos os dias\""] },
            { title: "Cinco partes de uma boa passagem de tarefa", bullets: ["O resultado e porque é importante", "A qualidade e o prazo", "O que a pessoa decide sozinha", "A hora do acompanhamento, e depois a pessoa repete a tarefa"] },
            { title: "Adapte a passagem à pessoa", bullets: ["Nova: mais passos, mais acompanhamento", "Com experiência: o objetivo e espaço para trabalhar"] }
          ],
          tryIt: "Pegue na tarefa que marcou na Lição 1. Escreva a passagem da tarefa com as cinco partes. Leia-a a um amigo ou diga-a em voz alta e depois pergunte a si mesmo: alguém conseguiria fazer isto sem me fazer dez perguntas?",
          youCanNow: "escrever uma expectativa clara e delegar uma tarefa com um resultado, um prazo, limites para as decisões e um acompanhamento.",
          quickCheck: [
            { objective: "O2", q: "Que três coisas diz uma expectativa clara?", options: ["O resultado, que qualidade precisa de ter e até quando", "Quem manda, o nome da equipa e o local", "O salário, o horário e as pausas", "As regras, os castigos e os formulários"], answer: 0, why: "Uma expectativa clara nomeia o resultado, a qualidade e o prazo." },
            { objective: "O2", q: "Passa uma tarefa a um membro da equipa com experiência. O que faz?", options: ["Dá todos os passos e verifica de hora a hora", "Não dá nenhum prazo", "Dá o objetivo e o prazo e depois deixa-o fazer à sua maneira", "Faz primeiro metade da tarefa"], answer: 2, why: "Adapte a passagem à pessoa; quem tem experiência pode só precisar do objetivo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer reuniões individuais úteis",
          minutes: 5,
          goal: "Planear e fazer uma reunião individual regular que pertence ao membro da equipa.",
          text: [
            "Uma reunião individual é uma reunião curta, regular e privada entre você e uma pessoa da sua equipa, muitas vezes de 20 a 30 minutos, todas as semanas ou de duas em duas semanas. É o melhor lugar para apanhar os problemas cedo, criar confiança e ajudar as pessoas a crescer.",
            "Faça dela a reunião da pessoa. Comece pelo que ela tem em mente. Depois falem do progresso do trabalho dela, do que a está a bloquear e do seu crescimento. As informações sobre o ponto da situação que poderia ler numa mensagem ficam para a mensagem.",
            "Proteja esse tempo: não cancele muitas vezes, guarde o telefone e ouça mais do que fala. Anote cada promessa que faz e cumpra-a. Mantenha as notas privadas e respeitosas."
          ],
          steps: ["Marque uma hora regular e cumpra-a.", "Comece com: \"O que é que tem em mente?\"", "Pergunte pelo progresso e pelo que a está a bloquear.", "Fale do crescimento: \"Em que é que quer melhorar?\"", "Termine combinando os próximos passos e anote-os."],
          words: [["Reunião individual", "uma reunião privada e regular entre um gestor e um membro da equipa."], ["Bloqueio", "qualquer coisa que impede alguém de fazer o seu trabalho."]],
          slides: [
            { title: "O que é uma reunião individual", bullets: ["Curta, privada e regular", "Muitas vezes 20-30 minutos, todas as semanas ou de duas em duas", "Apanha os problemas cedo e cria confiança"] },
            { title: "Faça dela a reunião da pessoa", bullets: ["Comece: \"O que é que tem em mente?\"", "Progresso e bloqueios", "Crescimento", "Próximos passos, anotados"] },
            { title: "Proteja esse tempo", bullets: ["Não cancele muitas vezes", "Telefone guardado; ouça mais do que fala", "Cumpra cada promessa que faz"] }
          ],
          tryIt: "Escreva uma agenda de reunião individual para um membro da equipa, real ou inventado, com quatro perguntas: uma para começar, uma sobre o progresso, uma sobre os bloqueios e uma sobre o crescimento.",
          youCanNow: "planear e fazer uma reunião individual que põe em primeiro lugar as necessidades do membro da equipa e termina com próximos passos claros.",
          quickCheck: [
            { objective: "O3", q: "O que é uma reunião individual?", options: ["Uma avaliação anual", "Uma reunião curta, regular e privada com um membro da equipa", "Uma reunião com toda a equipa", "Uma audiência disciplinar"], answer: 1, why: "As reuniões individuais duram muitas vezes 20 a 30 minutos, todas as semanas ou de duas em duas semanas." },
            { objective: "O3", q: "As suas reuniões individuais estão sempre a virar um ponto da situação. O que muda?", options: ["Cancela-as", "Torna-as mais longas", "Fá-las em grupo", "Passa o ponto da situação para uma mensagem e começa pelo que a pessoa tem em mente"], answer: 3, why: "Faça dela a reunião da pessoa; o ponto da situação que se pode ler fica numa mensagem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: De quem faz a quem gere",
        questions: [
          { objective: "O1", q: "Qual é a maior mudança quando passa de quem faz a quem gere?", options: ["Trabalha menos horas", "Os seus resultados passam a ser os resultados da equipa", "Já não precisa de ouvir", "Faz você mesmo todas as tarefas difíceis"], answer: 1, why: "Um gestor é avaliado pelo que toda a equipa consegue." },
          { objective: "O2", q: "Qual é a expectativa mais clara?", options: ["\"Faça o seu melhor\"", "\"Mantenha as coisas arrumadas\"", "\"Esteja mais atento\"", "\"Envie a encomenda semanal ao fornecedor até quinta-feira ao meio-dia\""], answer: 3, why: "Nomeia o resultado e o prazo." },
          { objective: "O2", q: "Delega um relatório a um membro novo da equipa. O que deve acrescentar?", options: ["Mais passos e um acompanhamento cedo", "Nada; deixe-o adivinhar", "Um aviso de que vai refazer o trabalho", "Só o prazo"], answer: 0, why: "Alguém novo precisa de mais orientação e de um acompanhamento mais cedo." },
          { objective: "O3", q: "De quem é, sobretudo, uma reunião individual?", options: ["Do chefe do gestor", "De toda a equipa", "Do membro da equipa", "Dos recursos humanos"], answer: 2, why: "Comece pelo que a pessoa tem em mente; o tempo é dela." },
          { objective: "O2", q: "Depois de delegar uma tarefa, uma boa maneira de confirmar que estão de acordo é:", options: ["Enviá-la outra vez em letras maiúsculas", "Pedir à pessoa para repetir a tarefa com as suas próprias palavras", "Verificar de hora a hora", "Fazê-la você mesmo, por precaução"], answer: 1, why: "Repetir a tarefa mostra se os dois entenderam a mesma coisa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Feedback, desempenho e a equipa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dar feedback com situação-comportamento-impacto",
          minutes: 5,
          goal: "Dar feedback concreto, positivo ou para corrigir, usando situação-comportamento-impacto.",
          text: [
            "O feedback funciona quando é concreto, dado a tempo e sobre o que a pessoa fez, e não sobre quem ela é. Uma maneira simples de o dizer é situação-comportamento-impacto, muitas vezes chamada SBI (das palavras em inglês).",
            "Situação: quando e onde. Comportamento: o que a pessoa fez e que você viu ou ouviu. Impacto: o que aconteceu por causa disso. Por exemplo: \"Na chamada com a cliente esta manhã (situação), interrompeu a cliente duas vezes (comportamento). Ela ficou chateada e pediu para falar com um supervisor (impacto).\" Depois pergunte: \"Como é que viu a situação?\" e combinem juntos um próximo passo.",
            "Use o SBI também para elogiar: \"Na recolha de alimentos de sábado, preparou cedo a mesa de registo. Registámos 40 voluntários sem fila.\" Dê o feedback pouco depois, em privado quando é para corrigir, e evite palavras como \"sempre\" e \"nunca\"."
          ],
          steps: ["Situação: diga quando e onde.", "Comportamento: descreva o que a pessoa fez, como uma câmara de vídeo o veria.", "Impacto: diga o que aconteceu por causa disso.", "Pergunte como a pessoa vê a situação e ouça.", "Combinem um próximo passo."],
          words: [["Feedback", "informação sobre como as ações de alguém afetaram o trabalho, dada para que a pessoa continue a fazer assim ou mude."], ["SBI", "situação-comportamento-impacto (em inglês situation-behavior-impact): uma maneira de dar feedback que diz quando, o que a pessoa fez e o que aconteceu."]],
          slides: [
            { title: "O bom feedback é", bullets: ["Concreto", "Dado pouco depois de acontecer", "Sobre o que a pessoa fez, não sobre quem ela é"] },
            { title: "Situação-comportamento-impacto", bullets: ["Situação: quando e onde", "Comportamento: o que a pessoa fez", "Impacto: o que aconteceu por causa disso"] },
            { title: "Depois conversem", bullets: ["Pergunte: \"Como é que viu a situação?\"", "Ouça", "Combinem um próximo passo"] },
            { title: "Use-o também para elogiar", bullets: ["Um agradecimento concreto chega melhor do que \"bom trabalho\"", "Corrija em privado", "Evite \"sempre\" e \"nunca\""] }
          ],
          tryIt: "Escreva duas frases SBI sobre momentos reais que viu: uma para elogiar um bom trabalho e outra para corrigir um problema. Verifique que a parte do comportamento descreve só o que viu ou ouviu.",
          youCanNow: "dar feedback concreto e justo com situação, comportamento e impacto, e transformá-lo num próximo passo.",
          quickCheck: [
            { objective: "O4", q: "No feedback SBI, o que é o \"impacto\"?", options: ["O que aconteceu por causa do que a pessoa fez", "Quando e onde aconteceu", "O que você pensa da pessoa", "O castigo para a próxima vez"], answer: 0, why: "O impacto é o resultado do comportamento." },
            { objective: "O4", q: "Um membro da equipa ficou até tarde para corrigir a encomenda de um cliente. O que diz?", options: ["\"Você é sempre ótimo.\"", "\"Obrigado, acho eu.\"", "\"Ontem à noite corrigiu a encomenda da Sra. Lee, por isso ela recebeu-a a tempo e agradeceu-nos.\"", "Nada; é o trabalho dele"], answer: 2, why: "O SBI funciona também para elogiar: situação, comportamento e impacto." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tratar o baixo desempenho com justiça",
          minutes: 6,
          goal: "Levar um problema de desempenho por passos claros, justos e escritos.",
          text: [
            "Quando alguém não está a cumprir as expectativas, aja cedo. Esperar normalmente piora as coisas e é injusto para o resto da equipa. Primeiro verifique-se a si mesmo: a expectativa estava clara? A pessoa tinha a formação, as ferramentas e o tempo?",
            "Fale em privado. Use o SBI para nomear a diferença e depois pergunte o que está a atrapalhar. Às vezes há uma causa que você não conhecia, como um problema de saúde ou de família, uma ferramenta avariada ou instruções confusas. Combinem juntos um plano: como é um bom resultado, que apoio você vai dar e uma data para rever.",
            "Escreva o que combinaram e volte ao assunto nessa data. Trate todos com o mesmo critério. Se as coisas não melhorarem, ou antes de qualquer aviso formal ou despedimento, siga a política da sua organização e fale com os recursos humanos ou com o seu próprio chefe. As regras variam de lugar para lugar, por isso peça conselho quando tiver dúvidas."
          ],
          steps: ["Verifique: a expectativa estava clara, e a pessoa tinha o que precisava?", "Reúna-se em privado e nomeie a diferença com o SBI.", "Pergunte o que está a atrapalhar e ouça.", "Combinem como é um bom resultado, o seu apoio e uma data de revisão.", "Escreva tudo e volte ao assunto nessa data.", "Antes de passos formais, siga a sua política e fale com os RH ou com o seu chefe."],
          words: [["Baixo desempenho", "quando o trabalho de alguém não está a cumprir as expectativas que foram definidas."], ["Plano de melhoria", "um acordo escrito sobre o que tem de mudar, o apoio dado e uma data para rever."], ["RH", "recursos humanos: as pessoas que tratam das contratações, das políticas e dos assuntos dos trabalhadores."]],
          slides: [
            { title: "Aja cedo", bullets: ["Esperar piora as coisas", "É injusto para o resto da equipa"] },
            { title: "Verifique-se primeiro a si mesmo", bullets: ["A expectativa estava clara?", "A pessoa tinha formação, ferramentas e tempo?"] },
            { title: "A conversa", bullets: ["Em privado, usando o SBI", "Pergunte o que está a atrapalhar", "Combinem como é um bom resultado, o apoio e uma data"] },
            { title: "Mantenha a justiça", bullets: ["Escreva o que combinaram", "Volte ao assunto nessa data", "O mesmo critério para todos", "Siga a política; fale com os RH antes de passos formais"] }
          ],
          tryIt: "Pense num problema de desempenho, real ou inventado. Escreva o plano de melhoria em quatro linhas: a diferença (na forma SBI), como é um bom resultado, o apoio que vai dar e a data de revisão.",
          youCanNow: "tratar um problema de desempenho cedo e com justiça, com uma conversa privada, um plano escrito e um acompanhamento.",
          quickCheck: [
            { objective: "O5", q: "O que deve verificar antes de falar de um problema de desempenho?", options: ["Se a expectativa estava clara e a pessoa tinha o que precisava", "Se os outros também não gostam dela", "Se pode despedi-la hoje", "Se os RH estão ocupados"], answer: 0, why: "Primeiro verifique-se a si mesmo: expectativas claras, formação, ferramentas e tempo." },
            { objective: "O5", q: "Combinou um plano de melhoria com uma data de revisão. O que faz nessa data?", options: ["Esquece-o se as coisas parecerem bem", "Volta ao assunto e escreve o que aconteceu", "Dá um aviso formal sem conversar", "Começa um plano novo com outra pessoa"], answer: 1, why: "Escreva o que combinaram e volte ao assunto nessa data." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reuniões de equipa e reconhecimento",
          minutes: 5,
          goal: "Fazer uma reunião de equipa curta que termina com ações claras e agradecimentos concretos.",
          text: [
            "Uma boa reunião de equipa tem um objetivo, uma agenda enviada antes, uma hora de início e de fim, e uma lista de ações no final. Se só precisa de partilhar notícias, envie uma mensagem em vez disso.",
            "Cumpra o horário. Dê a vez a cada pessoa para que as mais caladas falem, deixe os assuntos paralelos para depois e termine lendo cada ação em voz alta: quem faz o quê, até quando. Envie as ações no mesmo dia. Um assistente de IA pode ajudar a transformar as suas notas numa lista limpa, mas verifique-a.",
            "O reconhecimento dá ânimo às pessoas. Agradeça muitas vezes, pouco depois e de forma concreta, e diga como o trabalho delas ajudou. Algumas pessoas gostam de ser elogiadas em público; outras preferem uma palavra ou um bilhete em privado. Pergunte-lhes o que preferem."
          ],
          steps: ["Escreva o objetivo e uma agenda curta; envie-a antes.", "Comece e termine a horas.", "Convide cada pessoa a falar.", "Termine lendo as ações em voz alta: quem, o quê, até quando.", "Envie as ações no mesmo dia.", "Dê um agradecimento concreto."],
          words: [["Agenda", "a lista dos assuntos de uma reunião, por ordem."], ["Ação", "uma tarefa combinada numa reunião, com uma pessoa responsável e um prazo."], ["Reconhecimento", "mostrar às pessoas que reparou no trabalho delas e que lhe dá valor."]],
          slides: [
            { title: "Antes da reunião", bullets: ["Um objetivo claro", "Uma agenda curta enviada antes", "Só notícias? Envie uma mensagem em vez disso"] },
            { title: "Durante a reunião", bullets: ["Comece e termine a horas", "Convide todos a falar", "Deixe os assuntos paralelos para depois"] },
            { title: "Termine com ações", bullets: ["Quem faz o quê, até quando", "Envie-as no mesmo dia"] },
            { title: "Reconhecimento", bullets: ["Muitas vezes, pouco depois e concreto", "Diga como o trabalho ajudou", "Pergunte se a pessoa prefere agradecimento em público ou em privado"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de uma página para os \"primeiros 30 dias\". Inclua as expectativas para uma função, uma tarefa para delegar, uma agenda de reunião individual, uma nota de feedback SBI e uma agenda de reunião de 20 minutos que termina com ações e um agradecimento concreto.",
          youCanNow: "fazer uma reunião de equipa curta e focada, terminá-la com ações claras e reconhecer o bom trabalho de uma forma que as pessoas valorizam.",
          quickCheck: [
            { objective: "O6", q: "O que tem uma boa reunião de equipa?", options: ["Nenhuma agenda, para ser flexível", "Um objetivo, uma agenda enviada antes, horas de início e de fim, e ações", "Só o gestor a falar", "Nenhuma hora de fim marcada"], answer: 1, why: "Estas partes mantêm a reunião curta e útil." },
            { objective: "O6", q: "Um membro calado da equipa gosta de agradecimentos em privado. O que faz?", options: ["Elogia-o em voz alta na reunião na mesma", "Não lhe agradece", "Agradece-lhe no grupo de conversa da equipa", "Dá-lhe um agradecimento concreto numa palavra ou num bilhete em privado"], answer: 3, why: "Pergunte às pessoas que tipo de reconhecimento preferem e respeite isso." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Feedback, desempenho e a equipa",
        questions: [
          { objective: "O4", q: "Em situação-comportamento-impacto, o que é a parte do \"comportamento\"?", options: ["A sua opinião sobre a atitude da pessoa", "O que outras pessoas disseram dela", "O que a pessoa fez e que você viu ou ouviu", "O cargo dela"], answer: 2, why: "O comportamento é o que a pessoa fez de facto, descrito de forma simples." },
          { objective: "O4", q: "Qual destas frases é feedback SBI?", options: ["\"Você é preguiçoso.\"", "\"Na reunião de terça-feira acabou o orçamento cedo, por isso conseguimos aprová-lo a tempo.\"", "\"Você estraga sempre tudo.\"", "\"Bom trabalho, acho eu.\""], answer: 1, why: "Nomeia a situação, o comportamento e o impacto." },
          { objective: "O5", q: "Antes de falar de um problema de desempenho, o que deve verificar primeiro?", options: ["Se a expectativa estava clara e a pessoa tinha o que precisava", "Se os outros não gostam dela", "Se pode despedi-la hoje", "As redes sociais dela"], answer: 0, why: "Muitos problemas vêm de expectativas pouco claras ou de falta de ferramentas." },
          { objective: "O5", q: "O trabalho de um membro da equipa está sempre a piorar. Quando deve agir?", options: ["Na avaliação anual", "Nunca; pode resolver-se sozinho", "Só depois de os outros se queixarem", "Cedo, numa conversa privada"], answer: 3, why: "Agir cedo é mais humano e mais justo do que esperar." },
          { objective: "O6", q: "Com que deve terminar cada reunião de equipa?", options: ["Um discurso longo", "Ações: quem faz o quê, até quando", "Uma reunião nova", "Nada por escrito"], answer: 1, why: "Ações claras transformam a conversa em trabalho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gerir Equipas",
    questions: [
      { objective: "O1", q: "Uma gestora nova continua a fazer ela mesma todas as tarefas difíceis. Qual é o principal risco?", options: ["A equipa aprende mais depressa", "Os clientes ficam mais contentes", "A equipa deixa de crescer e ela fica esgotada", "Nada muda"], answer: 2, why: "Fazer tudo sozinho bloqueia o crescimento da equipa." },
      { objective: "O1", q: "Qual destas coisas faz parte do trabalho principal de um gestor?", options: ["Tirar o que bloqueia a equipa", "Fazer todas as tarefas sozinho", "Evitar conversas difíceis", "Manter os objetivos em segredo"], answer: 0, why: "Os gestores tiram os bloqueios para que a equipa possa trabalhar." },
      { objective: "O1", q: "Agora gere antigos colegas. Uma boa maneira de agir é:", options: ["Fingir que nada mudou", "Ajudar só os seus amigos", "Evitar falar com eles", "Ser simpático, justo com todos e honesto sobre a mudança da sua função"], answer: 3, why: "A justiça e a honestidade criam confiança numa função nova." },
      { objective: "O2", q: "Uma expectativa clara inclui:", options: ["Só um sentimento", "O resultado, que qualidade precisa de ter e até quando", "Uma ameaça", "Uma longa história"], answer: 1, why: "O resultado, a qualidade e o prazo tornam-na clara." },
      { objective: "O2", q: "Delegar quer dizer:", options: ["Passar a outros só os trabalhos de que não gosta", "Vigiar cada passo", "Dar a alguém uma tarefa e a autoridade para a fazer", "Fazê-la você mesmo mais tarde"], answer: 2, why: "Delegar de verdade inclui a autoridade para agir." },
      { objective: "O2", q: "Quando delega, deve dizer o que a pessoa pode:", options: ["Decidir sozinha", "Nunca perguntar", "Esconder de você", "Saltar"], answer: 0, why: "Os limites para as decisões deixam a pessoa agir sem ficar à sua espera." },
      { objective: "O3", q: "Com que frequência se fazem normalmente as reuniões individuais?", options: ["Uma vez por ano", "Só quando há um problema", "Nunca", "Todas as semanas ou de duas em duas semanas"], answer: 3, why: "As reuniões regulares apanham os problemas cedo." },
      { objective: "O3", q: "Uma boa maneira de começar uma reunião individual é:", options: ["\"Aqui está o que fez de errado.\"", "\"O que é que tem em mente?\"", "\"Vamos ser rápidos.\"", "Olhar para o seu telefone"], answer: 1, why: "Faz da reunião a reunião da pessoa." },
      { objective: "O3", q: "Numa reunião individual prometeu arranjar um leitor de códigos avariado. O que faz?", options: ["Anota e faz", "Esquece", "Pede à pessoa para o arranjar", "Espera que a pessoa volte a pedir"], answer: 0, why: "Cumprir as promessas cria confiança." },
      { objective: "O4", q: "O que quer dizer SBI?", options: ["Falar, culpar, insistir", "Habilidades, orçamento, ideias", "Situação, comportamento, impacto", "Horário, pausa, informar"], answer: 2, why: "Situação, comportamento e impacto." },
      { objective: "O4", q: "Onde se deve normalmente dar o feedback para corrigir?", options: ["À frente de toda a equipa", "Nas redes sociais", "Numa mensagem de grupo", "Em privado"], answer: 3, why: "Corrigir em privado protege a dignidade da pessoa." },
      { objective: "O4", q: "Depois de dar feedback SBI, o passo seguinte é:", options: ["Ir-se embora", "Perguntar como a pessoa vê a situação e combinar um próximo passo", "Repetir mais alto", "Contar à equipa"], answer: 1, why: "Uma conversa nos dois sentidos leva à mudança." },
      { objective: "O4", q: "Que palavra deve evitar no feedback?", options: ["\"Hoje\"", "\"Obrigado\"", "\"Sempre\"", "\"Porque\""], answer: 2, why: "\"Sempre\" e \"nunca\" exageram e deixam as pessoas na defensiva." },
      { objective: "O5", q: "O trabalho de uma pessoa baixa depois de anos de bom trabalho. O que deve perguntar numa conversa privada?", options: ["\"O que é que está a atrapalhar?\"", "\"Porque é que é tão mau?\"", "\"Quer desistir?\"", "Nada; registe logo uma falta"], answer: 0, why: "Pode haver uma causa que você não conhece." },
      { objective: "O5", q: "Um plano de melhoria deve incluir:", options: ["Só um aviso", "Como é um bom resultado, o apoio que vai dar e uma data de revisão", "Nenhuma data", "Uma lista dos defeitos da pessoa"], answer: 1, why: "Objetivos claros, apoio e uma data tornam-no justo." },
      { objective: "O5", q: "Antes de um aviso formal ou de um despedimento, deve:", options: ["Publicar no grupo de conversa da equipa", "Agir sozinho de imediato", "Pedir à equipa que vote", "Seguir a sua política e falar com os RH ou com o seu chefe"], answer: 3, why: "As políticas e as leis variam; peça conselho primeiro." },
      { objective: "O6", q: "A reunião é só para partilhar notícias. O que é melhor?", options: ["Uma reunião de duas horas", "Enviar uma mensagem em vez disso", "Cancelar todas as reuniões para sempre", "Ler as notícias em voz alta"], answer: 1, why: "Guarde as reuniões para conversar e decidir." },
      { objective: "O6", q: "Duas pessoas nunca falam nas reuniões. O que ajuda?", options: ["Dar a vez a cada pessoa, para todos falarem", "Ignorá-las", "Chamá-las à atenção com dureza", "Fazer reuniões mais longas"], answer: 0, why: "Dar a vez a cada pessoa convida as mais caladas a participar." },
      { objective: "O6", q: "Quando deve enviar as ações da reunião?", options: ["No mês seguinte", "Nunca", "Só se alguém pedir", "No mesmo dia"], answer: 3, why: "Enviar depressa mantém as ações no caminho certo." },
      { objective: "O6", q: "Qual é o melhor reconhecimento?", options: ["\"Bom trabalho.\"", "Nada, porque é o trabalho dela", "\"A sua chamada ao fornecedor fez a nossa encomenda chegar um dia mais cedo, por isso não ficámos sem stock.\"", "Um e-mail ao grupo sem detalhes"], answer: 2, why: "Um agradecimento concreto que diz o impacto é o que mais conta." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      6,
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Expectativas claras",
        objective: "O2",
        notYet: "A expectativa é vaga, por exemplo \"mantenha as coisas arrumadas\".",
        meets: "Diz o resultado, que qualidade precisa de ter e até quando.",
        exceeds: "Diz também porque o resultado é importante."
      },
      {
        name: "Tarefa delegada",
        objective: "O2",
        notYet: "A tarefa não tem prazo nem acompanhamento.",
        meets: "Diz o resultado, o prazo, o que a pessoa pode decidir e um acompanhamento.",
        exceeds: "Adapta a passagem da tarefa à experiência da pessoa."
      },
      {
        name: "Agenda da reunião individual",
        objective: "O3",
        notYet: "A agenda é só pontos da situação.",
        meets: "Começa pelo que a pessoa tem em mente e cobre o progresso, os bloqueios e o crescimento.",
        exceeds: "Inclui uma maneira de acompanhar as promessas que você faz."
      },
      {
        name: "Feedback SBI",
        objective: "O4",
        notYet: "O feedback é sobre a pessoa, ou usa \"sempre\" ou \"nunca\".",
        meets: "Nomeia a situação, um comportamento concreto e o seu impacto.",
        exceeds: "Termina com uma pergunta que convida a pessoa a dar a sua opinião e com um próximo passo."
      },
      {
        name: "Reunião de equipa e agradecimento",
        objective: "O6",
        notYet: "Não há ações no final, ou o agradecimento é geral.",
        meets: "Uma agenda de 20 minutos que termina com quem faz o quê até quando, e um agradecimento concreto.",
        exceeds: "Dá a vez às pessoas mais caladas e prevê enviar as ações no mesmo dia."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem reuniões individuais regulares em 30 dias (inquérito de seguimento)",
      "Membros das equipas que dizem ter expectativas mais claras e feedback mais concreto",
      "Alunos que fazem outro curso de liderança da Koach Learn"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador para ver as lições",
      "Papel ou um documento para o plano de uma página dos \"primeiros 30 dias\"",
      "Uma equipa que lidera ou conhece bem, para usar como exemplo",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Em grupo, façam o teste inicial juntos e depois ponha os alunos a praticar o feedback SBI em pares, em voz alta, com situações inventadas.",
      "Façam uma simulação de uma reunião individual em que o \"membro da equipa\" começa pelo que tem em mente.",
      "Lembre aos alunos que os avisos formais e os despedimentos seguem a política da sua própria organização e os recursos humanos.",
      "Peça aos alunos que não partilhem nomes verdadeiros nem detalhes privados de membros da equipa nos trabalhos em grupo.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
