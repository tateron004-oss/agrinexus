"use strict";

// Koach Learn course (Portuguese translation of youth/youth-leadership-confidence.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-leadership-confidence-pt",
  lang: "pt",
  translationOf: "youth-leadership-confidence",
  category: "Youth",
  name: "Liderança, Confiança e Resolução de Problemas",
  skills: "Dizer os seus pontos fortes, Definir um objetivo SMART, Praticar falar em público com encenação com IA, Resolver um problema em cinco passos, Conduzir uma reunião curta de equipa, Lidar com desacordos com calma",
  outcome: "liderar um pequeno projeto de grupo do início ao fim: dizer qual é o problema, pensar em soluções e escolher uma, dar uma função a cada pessoa, conduzir uma reunião curta com uma ordem de trabalhos e falar com confiança, usando a IA como parceira de prática pelo caminho.",
  about: [
    "Este curso é para jovens de cerca de 13 a 18 anos que querem sentir-se mais confiantes e assumir a liderança, seja num clube, numa equipa, numa banda, num trabalho de turma, num grupo de jogos ou num trabalho a tempo parcial.",
    "Você vai dizer quais são os seus pontos fortes, definir um objetivo que consegue mesmo alcançar, praticar falar em público, aprender uma forma simples de resolver problemas em cinco passos, conduzir uma reunião curta e lidar com desacordos com calma. Um assistente de IA pode ser o seu parceiro de prática: pode fazer encenações, dar ideias e ajudar a planear.",
    "Use só ferramentas de IA próprias para a sua idade e que cumpram as regras da sua escola, e fale com um dos pais ou com o seu encarregado de educação antes de se inscrever em algo novo. Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\"."
  ],
  finalTask: "Planeie um pequeno projeto para um grupo real de que faz parte (um clube, uma equipa, uma turma ou um grupo de jovens): escreva o problema numa frase, faça uma lista de três soluções e escolha uma, dê uma função a cada pessoa, escreva uma ordem de trabalhos para uma reunião de 15 minutos e pratique em voz alta uma apresentação de um minuto do plano (com encenação com IA ou com um amigo).",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens de cerca de 13 a 18 anos que querem sentir-se mais confiantes e assumir a liderança num clube, numa equipa, numa banda, num trabalho de turma, num grupo de jogos, num grupo de jovens ou num trabalho a tempo parcial.",
    startingPoint: "Fazem parte de pelo menos um grupo e têm ideias, mas muitos ficam nervosos ao falar, definem objetivos vagos e nunca conduziram uma reunião nem seguiram um processo organizado para resolver problemas.",
    gap: "Sem ferramentas simples de liderança, os grupos ficam parados, as reuniões perdem o rumo e os desacordos tornam-se pessoais. Os jovens que sabem dizer os seus pontos fortes, definir objetivos alcançáveis, falar com clareza e conduzir uma reunião curta e justa ganham uma confiança que ajuda na escola, no trabalho e na comunidade.",
    constraints: [
      "Limites de idade e regras da escola para ferramentas de IA; um dos pais ou o encarregado de educação aprova contas novas",
      "Privacidade: nenhum dado privado nas encenações nem nas histórias contadas à IA",
      "Lições curtas para horários cheios; palavras simples",
      "A prática precisa de um grupo real ou de um grupo imaginado",
      "Segurança: bullying, ameaças ou danos são contados logo a um adulto de confiança"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Pensando nas vezes em que sentiu orgulho", action: "dizer três dos seus pontos fortes com um exemplo real de cada um", standard: "com cada ponto forte apoiado em algo que você fez de verdade" },
    { id: "O2", condition: "A partir de um desejo sobre confiança ou liderança", action: "escrever um objetivo SMART com um primeiro passo para esta semana", standard: "com as cinco partes do SMART" },
    { id: "O3", condition: "Antes de uma conversa real ou de uma fala curta", action: "praticá-la com encenação com IA usando Ponto, Razão, Exemplo, Ponto, e depois dizê-la em voz alta a uma pessoa", standard: "falando com clareza durante cerca de um minuto" },
    { id: "O4", condition: "Com um problema real num grupo de que faz parte", action: "resolver o problema em cinco passos: dizer qual é, encontrar a causa, fazer uma lista de soluções, escolher uma e verificá-la", standard: "com o problema numa frase e pelo menos três soluções" },
    { id: "O5", condition: "Para uma reunião de grupo", action: "planear e conduzir uma reunião de 15 minutos com ordem de trabalhos, funções e tarefas a fazer", standard: "terminando com quem faz o quê e até quando" },
    { id: "O6", condition: "Quando o seu grupo não está de acordo", action: "usar ouvir, repetir, responder e uma forma justa de decidir", standard: "falando do problema e não da pessoa, e chamando um adulto se deixar de ser seguro" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ganhar confiança",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conhecer os seus pontos fortes",
          minutes: 4,
          goal: "Dizer três dos seus pontos fortes com um exemplo real de cada um.",
          text: [
            "A confiança cresce quando você sabe em que é bom. Os pontos fortes não são só notas ou desporto. Saber ouvir, ficar calmo, fazer as pessoas rir, ser organizado ou nunca desistir também são pontos fortes.",
            "Pense nas vezes em que sentiu orgulho ou em que as pessoas lhe agradeceram. O que fez? Isso mostra um ponto forte. Também pode perguntar a pessoas que o conhecem: um treinador, um professor, um amigo ou um familiar.",
            "A IA pode ajudar a encontrar palavras para os seus pontos fortes. Conte-lhe uma história (sem dados privados) e pergunte: \"Que pontos fortes isto mostra?\" Quem decide quais servem é você."
          ],
          steps: ["Lembre-se de duas ou três vezes em que sentiu orgulho.", "Escreva o que fez em cada uma.", "Pergunte a uma pessoa de confiança ou à IA que pontos fortes isso mostra.", "Escolha três e escreva um exemplo de cada um."],
          words: [["Ponto forte", "algo que você faz bem ou uma qualidade que ajuda você e os outros."], ["Confiança", "acreditar que é capaz de lidar com alguma coisa."]],
          slides: [
            { title: "Pontos fortes são mais do que notas", bullets: ["Saber ouvir, ficar calmo, ter humor", "Ser organizado, não desistir"] },
            { title: "Encontre os seus pontos fortes", bullets: ["Vezes em que sentiu orgulho", "Aquilo por que as pessoas lhe agradecem", "Pergunte a um treinador, professor ou amigo"] },
            { title: "A IA pode ajudar a dar-lhes nome", bullets: ["Conte uma história curta, sem dados privados", "Pergunte: \"Que pontos fortes isto mostra?\"", "Quem decide o que serve é você"] }
          ],
          tryIt: "Escreva, em três frases, sobre uma vez em que sentiu orgulho. Pergunte a um assistente de IA ou a uma pessoa de confiança que pontos fortes isso mostra. Anote os seus três principais pontos fortes com um exemplo de cada um.",
          youCanNow: "dizer três dos seus pontos fortes e apoiar cada um com um exemplo.",
          quickCheck: [
            { objective: "O1", q: "Qual destes conta como ponto forte?", options: ["Só as melhores notas", "Só os troféus de desporto", "Ficar calmo quando as coisas correm mal", "Ser o que fala mais alto"], answer: 2, why: "Os pontos fortes incluem qualidades como ficar calmo, saber ouvir e ser organizado, não só notas ou desporto." },
            { objective: "O1", q: "Não tem a certeza de quais são os seus pontos fortes. Qual é um bom passo a seguir?", options: ["Perguntar a um treinador, professor ou amigo o que vê em você", "Decidir que não tem nenhum", "Copiar a lista de um amigo", "Esperar até ser mais velho"], answer: 0, why: "As pessoas que o conhecem podem ajudar a ver pontos fortes que você não nota." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Definir um objetivo que consegue alcançar",
          minutes: 5,
          goal: "Transformar um desejo num objetivo SMART com um primeiro passo.",
          text: [
            "\"Quero falar melhor em público\" é um desejo. \"Vou falar uma vez em cada discussão da turma nas próximas duas semanas\" é um objetivo. Os objetivos que funcionam são SMART (palavra inglesa): específicos, mensuráveis (dá para medir), alcançáveis, relevantes e com prazo.",
            "A IA pode ajudar: \"Transforme isto num objetivo SMART: quero ser mais confiante na minha equipa de futebol.\" Depois torne-o seu, verificando se é realista para a sua vida.",
            "Cada objetivo precisa de um primeiro passo que consiga fazer esta semana. Pequenas vitórias criam confiança."
          ],
          steps: ["Escreva o seu desejo.", "Torne-o específico e mensurável.", "Verifique se é realista e se é importante para você.", "Acrescente um prazo e um primeiro passo para esta semana."],
          words: [["Objetivo SMART", "um objetivo específico, mensurável, alcançável, relevante e com prazo (das palavras inglesas Specific, Measurable, Achievable, Relevant, Time-bound)."]],
          slides: [
            { title: "Desejo e objetivo", bullets: ["Desejo: \"falar melhor\"", "Objetivo: \"falar uma vez em cada discussão da turma durante 2 semanas\""] },
            { title: "SMART", bullets: ["Específico e mensurável", "Alcançável e relevante", "Com prazo: tem uma data-limite"] },
            { title: "Comece pequeno", bullets: ["Um primeiro passo esta semana", "Pequenas vitórias criam confiança"] }
          ],
          tryIt: "Escreva um desejo sobre confiança ou liderança. Transforme-o num objetivo SMART (com a ajuda da IA, se quiser) e depois escreva o primeiro passo que vai dar esta semana.",
          youCanNow: "definir um objetivo SMART com um primeiro passo.",
          quickCheck: [
            { objective: "O2", q: "O que quer dizer o M de SMART?", options: ["Marcante", "Moderno", "Mandatório", "Mensurável (Measurable)"], answer: 3, why: "SMART quer dizer específico, mensurável, alcançável, relevante e com prazo." },
            { objective: "O2", q: "O seu objetivo é \"Conduzir uma reunião todas as semanas durante um ano\", mas tem pouco tempo livre. O que muda?", options: ["Nada; quanto maior, melhor", "Torná-lo alcançável, como conduzir uma reunião este mês", "Tirar o prazo", "Torná-lo mais vago"], answer: 1, why: "Um objetivo tem de ser realista para a sua vida; pequenas vitórias criam confiança." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Praticar falar em público com encenação com IA",
          minutes: 5,
          goal: "Praticar uma conversa difícil ou uma fala curta com a IA antes de a fazer a sério.",
          text: [
            "Falar fica mais fácil com prática. A IA pode fazer um papel para você praticar: \"Finja que é o orientador do meu clube. Quero pedir para começar um projeto novo. Faça-me perguntas difíceis.\"",
            "Pratique o modelo PREP para falas curtas: Ponto (diga a sua ideia principal), Razão (porquê), Exemplo (um real), e outra vez o Ponto. Ajuda a ser claro mesmo quando está nervoso.",
            "Depois de praticar com a IA, pratique em voz alta com um amigo ou um familiar. As pessoas reais reagem de formas que a IA não consegue. Respire devagar antes de começar."
          ],
          steps: ["Escolha uma situação real: fazer uma pergunta, apresentar uma ideia, dizer não.", "Peça à IA para fazer o papel da outra pessoa.", "Use Ponto, Razão, Exemplo, Ponto.", "Pratique também em voz alta com uma pessoa real."],
          words: [["Encenação", "representar uma situação para a praticar (em inglês, \"role-play\")."], ["PREP", "Ponto, Razão, Exemplo, Ponto: uma forma simples de fazer uma fala curta."]],
          slides: [
            { title: "Pratique com encenação com IA", bullets: ["\"Finja que é o orientador do meu clube\"", "\"Faça-me perguntas difíceis\""] },
            { title: "PREP para falas curtas", bullets: ["Ponto: a sua ideia principal", "Razão: porquê", "Exemplo: um real", "Ponto: diga-o outra vez"] },
            { title: "Depois, a sério", bullets: ["Pratique com um amigo ou um familiar", "Respire devagar primeiro"] }
          ],
          tryIt: "Escolha uma conversa real que precisa de ter. Peça à IA para fazer o papel da outra pessoa. Responda usando o PREP. Depois diga-o uma vez em voz alta a alguém de confiança.",
          youCanNow: "praticar falar em público com encenação e o modelo PREP.",
          quickCheck: [
            { objective: "O3", q: "No PREP, o que diz primeiro?", options: ["O seu ponto principal", "Uma piada", "O seu exemplo", "Um pedido de desculpa"], answer: 0, why: "O PREP começa pelo Ponto, depois a Razão, um Exemplo e outra vez o Ponto." },
            { objective: "O3", q: "Praticou com a IA o pedido ao seu orientador para um projeto novo. Qual é o passo seguinte?", options: ["Enviar as palavras da IA por SMS", "Saltar a conversa real", "Praticar em voz alta com um amigo ou um familiar", "Pedir à IA para falar com o seu orientador"], answer: 2, why: "As pessoas reais reagem de formas que a IA não consegue, por isso pratique também com uma pessoa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ganhar confiança",
        questions: [
          { objective: "O1", q: "Qual destes é um ponto forte?", options: ["Perder as chaves", "Saber ouvir", "Chegar atrasado", "Ignorar os amigos"], answer: 1, why: "Os pontos fortes incluem saber lidar com pessoas, como saber ouvir." },
          { objective: "O1", q: "Uma boa forma de encontrar os seus pontos fortes é:", options: ["Adivinhar ao acaso", "Copiar a lista de um amigo", "Olhar só para as notas", "Lembrar-se das vezes em que sentiu orgulho e do que fez"], answer: 3, why: "Os momentos de orgulho mostram pontos fortes reais." },
          { objective: "O2", q: "Qual é um objetivo SMART?", options: ["\"Falar uma vez em cada discussão da turma nas próximas duas semanas\"", "\"Ser mais confiante\"", "\"Ser o melhor\"", "\"Esforçar-me mais um dia\""], answer: 0, why: "É específico, mensurável e tem prazo." },
          { objective: "O3", q: "O que quer dizer PREP?", options: ["Planear, Correr, Escrever, Partir", "Praticar, Repousar, Entrar, Parar", "Ponto, Razão, Exemplo, Ponto", "Papel, Rádio, E-mail, Publicação"], answer: 2, why: "O PREP é um modelo simples para falas curtas." },
          { objective: "O3", q: "Depois de praticar com encenação com IA, deve:", options: ["Nunca mais praticar", "Deixar a IA fazer a fala", "Praticar também em voz alta com uma pessoa real", "Saltar a conversa real"], answer: 2, why: "As pessoas reais reagem de formas que a IA não consegue." }
        ]
      }
    },
    {
      name: "Capítulo 2: Liderar e resolver problemas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Resolver um problema em cinco passos",
          minutes: 5,
          goal: "Usar cinco passos para resolver um problema real num grupo.",
          text: [
            "Os líderes resolvem problemas de forma organizada. Cinco passos funcionam em quase todo o lado: 1. Diga o problema numa frase. 2. Encontre a causa. 3. Faça uma lista de várias soluções. 4. Escolha uma e experimente-a. 5. Verifique se funcionou.",
            "Exemplo: \"Só 4 pessoas vêm às reuniões do nosso clube de arte.\" Causa: as reuniões calham ao mesmo tempo que os treinos de desporto. Soluções: mudar o dia, reunir à hora do almoço, publicar os trabalhos na internet. Experimente uma durante um mês e depois verifique.",
            "A IA é ótima no passo 3. Pergunte: \"Dê-me 8 ideias para resolver este problema num clube de uma escola secundária.\" Quem escolhe e verifica continua a ser você e o seu grupo."
          ],
          steps: ["Diga o problema numa frase.", "Encontre a causa.", "Faça uma lista de várias soluções (a IA pode ajudar).", "Escolha uma e experimente-a.", "Verifique se funcionou."],
          words: [["Causa principal", "a verdadeira razão por que um problema acontece."]],
          slides: [
            { title: "Cinco passos", bullets: ["1. Diga qual é  2. Encontre a causa", "3. Faça a lista de soluções  4. Experimente uma", "5. Verifique se funcionou"] },
            { title: "Exemplo: pouca gente no clube", bullets: ["Causa: calha ao mesmo tempo que os treinos", "Ideias: outro dia, reunião ao almoço, na internet", "Experimente uma e depois verifique"] },
            { title: "Onde a IA ajuda", bullets: ["A pensar em muitas soluções", "Quem decide continua a ser você e o grupo"] }
          ],
          tryIt: "Escolha um problema real num grupo de que faz parte. Escreva-o numa frase, diga qual é a causa, peça 8 soluções à IA e marque com um círculo a que experimentaria primeiro.",
          youCanNow: "resolver um problema de grupo usando cinco passos claros.",
          quickCheck: [
            { objective: "O4", q: "Qual é o último dos cinco passos para resolver problemas?", options: ["Dizer qual é o problema", "Fazer a lista de soluções", "Encontrar a causa", "Verificar se funcionou"], answer: 3, why: "Depois de experimentar uma solução, verifica se funcionou." },
            { objective: "O4", q: "A sua banda falha sempre os ensaios. Antes de fazer a lista de soluções, o que faz?", options: ["Expulsar alguém", "Encontrar a causa, como um choque com os horários de trabalho", "Pedir à IA para escolher por você", "Acabar com a banda"], answer: 1, why: "Encontrar a causa vem antes de fazer a lista de soluções." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Conduzir uma reunião curta de equipa",
          minutes: 5,
          goal: "Planear e conduzir uma reunião de 15 minutos com ordem de trabalhos e funções.",
          text: [
            "As boas reuniões são curtas e claras. A ordem de trabalhos é uma lista do que vão falar e de quanto tempo dura cada parte. A IA pode fazer um rascunho depressa: \"Faça uma ordem de trabalhos de 15 minutos para a reunião do nosso clube para planear uma venda de bolos para angariar fundos.\"",
            "Dê uma função a cada pessoa para o trabalho ficar dividido: quem toma notas, quem controla o tempo e um responsável por cada tarefa. Um líder garante que todos têm a vez de falar, sobretudo as pessoas mais caladas.",
            "Termine cada reunião com os próximos passos: quem faz o quê e até quando. Depois envie um resumo curto."
          ],
          steps: ["Escreva um objetivo para a reunião.", "Faça uma ordem de trabalhos de 15 minutos com os tempos.", "Dê funções: quem toma notas, quem controla o tempo, responsáveis pelas tarefas.", "Convide as pessoas mais caladas a falar.", "Termine com quem faz o quê e até quando."],
          words: [["Ordem de trabalhos", "uma lista dos temas de uma reunião, com os tempos (em inglês, \"agenda\")."], ["Tarefa a fazer", "uma tarefa que alguém aceita fazer até uma data (em inglês, \"action item\")."]],
          slides: [
            { title: "Curta e clara", bullets: ["Tenha um objetivo", "Use uma ordem de trabalhos com os tempos", "A IA pode fazer o rascunho"] },
            { title: "Divida o trabalho", bullets: ["Quem toma notas e quem controla o tempo", "Um responsável por cada tarefa", "Convide as vozes mais caladas"] },
            { title: "Termine com os próximos passos", bullets: ["Quem faz o quê e até quando", "Envie um resumo curto"] }
          ],
          tryIt: "Peça à IA um rascunho de uma ordem de trabalhos de 15 minutos para uma reunião de grupo real ou imaginada. Mude-a para servir ao seu grupo, acrescente funções e escreva três tarefas a fazer com nomes e datas.",
          youCanNow: "planear e conduzir uma reunião curta e útil.",
          quickCheck: [
            { objective: "O5", q: "O que faz quem toma notas numa reunião?", options: ["Controla o relógio", "Conduz todos os temas", "Escreve as decisões e os próximos passos", "Escolhe os lanches"], answer: 2, why: "Quem toma notas regista o que foi decidido para poder ser partilhado depois." },
            { objective: "O5", q: "Na sua reunião, só duas pessoas falam. O que faz como líder?", options: ["Convida as pessoas mais caladas a partilhar as suas ideias", "Deixa-as continuar", "Acaba a reunião mais cedo", "Cancela as próximas reuniões"], answer: 0, why: "Um líder garante que todos têm a vez de falar, sobretudo as pessoas mais caladas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lidar com desacordos com calma",
          minutes: 5,
          goal: "Usar ouvir-repetir-responder para acalmar um desacordo e chegar a uma decisão.",
          text: [
            "Os grupos discordam, e isso é normal. Um bom líder fala do problema e não da pessoa.",
            "Experimente ouvir, repetir, responder. Ouça até ao fim. Repita o que ouviu: \"Então você acha que a venda de bolos deve ser na sexta-feira porque há mais gente por perto.\" Depois responda com a sua opinião e procure o que ambos querem.",
            "Se o grupo não chegar a acordo, use uma forma justa de decidir: uma votação, uma experiência, ou perguntar ao seu orientador ou treinador. Se um desacordo se transformar em bullying, ameaças ou alguém se magoar, afaste-se e conte logo a um adulto de confiança. Também pode praticar antes as conversas difíceis com encenação com IA."
          ],
          steps: ["Fale do problema, não da pessoa.", "Ouça até ao fim.", "Repita o que ouviu.", "Responda e procure objetivos comuns.", "Se não avançarem, votem ou experimentem uma opção; chame um adulto se deixar de ser seguro."],
          words: [["Compromisso", "um acordo em que cada lado cede um pouco."], ["Escuta ativa", "ouvir com atenção e mostrar que percebeu."]],
          slides: [
            { title: "Discordar é normal", bullets: ["Fale do problema, não da pessoa"] },
            { title: "Ouvir, repetir, responder", bullets: ["Ouça até ao fim", "\"Então você acha que...\"", "Diga a sua opinião e encontre objetivos comuns"] },
            { title: "Se não avançarem", bullets: ["Votem ou façam uma experiência", "Perguntem a um orientador ou treinador", "Não é seguro ou há bullying? Conte a um adulto de confiança"] }
          ],
          tryIt: "Tarefa final: planeie um pequeno projeto para um grupo real: o problema numa frase, três soluções e a sua escolha, uma função para cada pessoa, uma ordem de trabalhos de 15 minutos e uma apresentação de um minuto praticada em voz alta com encenação com IA ou com um amigo.",
          youCanNow: "liderar um grupo num problema, numa reunião e num desacordo com confiança.",
          quickCheck: [
            { objective: "O6", q: "Em ouvir, repetir, responder, porque repete o que ouviu?", options: ["Para ganhar a discussão", "Para mostrar à outra pessoa que foi ouvida e confirmar que percebeu", "Para tornar a reunião mais longa", "Para copiar a ideia dela"], answer: 1, why: "Repetir mostra que ouviu e garante que percebeu antes de responder." },
            { objective: "O6", q: "Um desacordo sobre uma angariação de fundos transforma-se em ameaças. O que faz?", options: ["Faz uma votação", "Ignora", "Faz uma piada", "Afasta-se e conta logo a um adulto de confiança"], answer: 3, why: "Bullying, ameaças ou alguém magoado precisam logo de um adulto de confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Liderar e resolver problemas",
        questions: [
          { objective: "O4", q: "Qual é o primeiro dos cinco passos para resolver problemas?", options: ["Dizer o problema numa frase", "Experimentar uma solução", "Verificar se funcionou", "Culpar alguém"], answer: 0, why: "Começa por dizer o problema com clareza." },
          { objective: "O4", q: "Onde a IA ajuda mais a resolver problemas?", options: ["A tomar a decisão final pelo grupo", "A fazer o trabalho do grupo", "A culpar pessoas", "A pensar em muitas soluções"], answer: 3, why: "A IA é boa a fazer listas de ideias; quem decide é o grupo." },
          { objective: "O5", q: "O que é uma ordem de trabalhos?", options: ["Um lanche", "Uma lista dos temas da reunião com os tempos", "Um tipo de votação", "Uma palavra-passe"], answer: 1, why: "A ordem de trabalhos mantém a reunião no rumo certo." },
          { objective: "O5", q: "Como deve terminar cada reunião?", options: ["Com quem faz o quê e até quando", "Sem plano", "Com uma discussão", "Com todos a sair mais cedo"], answer: 0, why: "Tarefas a fazer claras transformam a conversa em ação." },
          { objective: "O6", q: "Um desacordo transforma-se em ameaças. O líder deve:", options: ["Ignorar", "Juntar-se", "Afastar-se e contar a um adulto de confiança", "Publicar na internet"], answer: 2, why: "A segurança vem primeiro; envolva um adulto." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Liderança, Confiança e Resolução de Problemas",
    questions: [
      { objective: "O1", q: "Confiança quer dizer:", options: ["Nunca ficar nervoso", "Acreditar que é capaz de lidar com alguma coisa", "Ser sempre o que fala mais alto", "Ser perfeito"], answer: 1, why: "A confiança é acreditar em si mesmo, mesmo com nervos." },
      { objective: "O1", q: "Qual destes NÃO é um ponto forte?", options: ["Ficar calmo", "Ser organizado", "Nunca desistir", "Ignorar os colegas de equipa"], answer: 3, why: "Ignorar os colegas de equipa prejudica o grupo." },
      { objective: "O1", q: "Quando pede à IA para dizer os seus pontos fortes, deve:", options: ["Partilhar a sua morada", "Deixar a IA decidir quem você é", "Partilhar a sua palavra-passe", "Partilhar uma história curta sem dados privados"], answer: 3, why: "Histórias sem dados privados dão à IA o suficiente para ajudar." },
      { objective: "O2", q: "Os objetivos SMART são específicos, mensuráveis, alcançáveis, relevantes e:", options: ["Secretos", "Com prazo", "Enormes", "Opcionais"], answer: 1, why: "Uma data-limite dá prazo a um objetivo." },
      { objective: "O2", q: "Porque acrescentar um primeiro passo a um objetivo?", options: ["Torna o objetivo mais longo", "Os professores exigem", "Pequenas vitórias criam confiança e começam o progresso", "Não é preciso"], answer: 2, why: "Começar pequeno põe você em movimento." },
      { objective: "O2", q: "Qual é um desejo, e não um objetivo?", options: ["\"Quero ser melhor a liderar\"", "\"Vou conduzir uma reunião do clube até 1 de março\"", "\"Vou falar na turma duas vezes por semana durante um mês\"", "\"Vou correr 2 milhas três vezes por semana durante 4 semanas\""], answer: 0, why: "Não tem medida nem prazo." },
      { objective: "O3", q: "Um bom pedido para uma encenação é:", options: ["\"Fale com o meu orientador por mim\"", "\"Finja que é o orientador do meu clube e faça-me perguntas difíceis\"", "\"Dê-me um discurso para ler\"", "\"Faça os meus trabalhos de casa\""], answer: 1, why: "A encenação deixa você praticar a conversa real." },
      { objective: "O3", q: "No PREP, o E quer dizer:", options: ["Entrada", "Energia", "E-mail", "Exemplo"], answer: 3, why: "Ponto, Razão, Exemplo, Ponto." },
      { objective: "O3", q: "Antes de uma conversa difícil, uma forma rápida de acalmar os nervos é:", options: ["Respirar devagar", "Fugir dela", "Gritar", "Ler o telefone"], answer: 0, why: "Respirar devagar ajuda a ficar firme." },
      { objective: "O4", q: "Para resolver um problema em cinco passos, depois de fazer a lista de soluções, você:", options: ["Para", "Culpa alguém", "Escolhe uma e experimenta-a", "Começa um problema novo"], answer: 2, why: "Depois verifica se funcionou." },
      { objective: "O4", q: "A causa principal é:", options: ["A raiz de uma planta", "Um tipo de reunião", "A verdadeira razão por que um problema acontece", "Uma palavra-passe"], answer: 2, why: "Corrigir a causa principal resolve o problema." },
      { objective: "O4", q: "Vem pouca gente ao clube porque as reuniões calham ao mesmo tempo que os treinos. Uma boa primeira solução a experimentar é:", options: ["Mudar o dia da reunião", "Acabar com o clube", "Culpar os membros", "Não fazer nada"], answer: 0, why: "Ataca a causa." },
      { objective: "O4", q: "Quem toma a decisão final quando a IA faz a lista de soluções?", options: ["A IA", "Um desconhecido na internet", "Ninguém", "Você e o seu grupo"], answer: 3, why: "A IA sugere; as pessoas decidem." },
      { objective: "O5", q: "Uma reunião de 15 minutos precisa de:", options: ["Nenhum plano", "Uma ordem de trabalhos com os tempos", "Duas horas", "Só lanches"], answer: 1, why: "A ordem de trabalhos mantém as reuniões curtas." },
      { objective: "O5", q: "O que faz quem controla o tempo?", options: ["Mantém a reunião dentro do horário", "Toma notas", "Traz os lanches", "Vota duas vezes"], answer: 0, why: "Quem controla o tempo está atento ao relógio." },
      { objective: "O5", q: "Um bom líder numa reunião:", options: ["Fala o tempo todo", "Ignora ideias novas", "Convida as pessoas mais caladas a falar", "Deixa uma pessoa decidir tudo"], answer: 2, why: "As ideias de todos ajudam o grupo." },
      { objective: "O5", q: "Uma tarefa a fazer é:", options: ["Um filme", "Uma tarefa que alguém aceita fazer até uma data", "Um lanche da reunião", "Uma discussão"], answer: 1, why: "As tarefas a fazer transformam os planos em trabalho." },
      { objective: "O6", q: "Em ouvir-repetir-responder, o passo \"repetir\" soa assim:", options: ["\"Você está errado\"", "\"Tanto faz\"", "\"Vou-me embora\"", "\"Então você acha que a venda deve ser na sexta-feira porque há mais gente por perto\""], answer: 3, why: "Repetir mostra que percebeu." },
      { objective: "O6", q: "O seu grupo não chega a acordo sobre uma data. Uma forma justa de decidir é:", options: ["Ganha quem fala mais alto", "Desistir", "Brigar por causa disso", "Uma votação ou uma experiência"], answer: 3, why: "Votações e experiências são formas justas de decidir." },
      { objective: "O6", q: "Um compromisso é:", options: ["Um lado ganha tudo", "Um acordo em que cada lado cede um pouco", "Acabar com a amizade", "Ignorar o problema"], answer: 1, why: "Os dois lados cedem um pouco para chegar a acordo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 5, 7, 9, 10, 13, 15, 17, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Problema dito", objective: "O4", notYet: "O problema é vago ou tem mais de uma frase.", meets: "O problema é uma frase clara com a sua causa.", exceeds: "Também diz como o grupo vai saber que está resolvido." },
      { name: "Soluções e escolha", objective: "O4", notYet: "Só uma solução, ou nenhuma escolha feita.", meets: "Três soluções na lista e uma escolhida com uma razão.", exceeds: "Inclui um plano para verificar se a escolha funcionou." },
      { name: "Funções", objective: "O5", notYet: "Algumas pessoas não têm função, ou uma pessoa faz tudo.", meets: "Cada pessoa tem uma função, incluindo quem toma notas e quem controla o tempo.", exceeds: "As funções correspondem aos pontos fortes das pessoas." },
      { name: "Ordem de trabalhos da reunião", objective: "O5", notYet: "Sem ordem de trabalhos, ou sem tempos.", meets: "Uma ordem de trabalhos de 15 minutos com os tempos, que termina com quem faz o quê e até quando.", exceeds: "Inclui uma forma de convidar as pessoas mais caladas a falar." },
      { name: "Apresentação de um minuto", objective: "O3", notYet: "A apresentação não foi praticada em voz alta.", meets: "Uma apresentação clara usando Ponto, Razão, Exemplo, Ponto, praticada em voz alta.", exceeds: "Praticada com encenação com IA e com uma pessoa real, e melhorada depois." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que conduzem uma reunião ou um projeto de grupo real em 30 dias (inquérito de seguimento)",
      "Alunos que dão o primeiro passo do seu objetivo SMART",
      "Alunos que assumem uma nova função de liderança num clube, numa equipa ou num grupo de jovens em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, um computador da escola ou da biblioteca com internet",
      "Um assistente de IA gratuito que o aluno pode usar para encenações e ideias",
      "Papel ou um documento para o plano do projeto e a ordem de trabalhos",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça o curso com um clube ou uma equipa real para os alunos planearem juntos um projeto verdadeiro.",
      "Forme pares para a prática da apresentação PREP e de ouvir-repetir-responder, para todos falarem em voz alta.",
      "Faça rodar as funções da reunião (líder, quem toma notas, quem controla o tempo) para cada aluno experimentar liderar.",
      "Deixe claro que bullying, ameaças ou danos são contados logo a um adulto de confiança, e diga quem é esse adulto no seu programa.",
      "Avalie o plano do projeto com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
