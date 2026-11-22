"use strict";

// Koach Learn course (Portuguese translation of shared/time-management-goals.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "time-management-goals-pt",
  lang: "pt",
  translationOf: "time-management-goals",
  category: "Athletes",
  name: "Gestão do Tempo e Definição de Objetivos",
  skills: "Escrever objetivos SMART, Dividir objetivos em passos semanais, Planear uma semana, Escolher prioridades, Vencer a procrastinação, Acompanhar o progresso",
  outcome: "transformar algo que deseja num objetivo SMART, dividi-lo em passos semanais, planear a sua semana à volta das suas prioridades principais, começar mesmo quando não lhe apetece e acompanhar o seu progresso com uma revisão semanal curta.",
  about: [
    "Todos têm as mesmas 24 horas. A diferença está em saber com clareza o que queremos e em como usamos o tempo que temos. A boa notícia: planear é uma habilidade, e qualquer pessoa pode aprendê-la.",
    "Este curso é para atletas que equilibram treino e escola, trabalhadores e quem procura emprego, donos de negócios, antigos militares que começam algo novo, jovens e qualquer pessoa que está a refazer a sua rotina depois de uma grande mudança, como voltar para casa depois da prisão. Os exemplos são do dia a dia: procurar emprego, um objetivo de forma física, um pequeno negócio, poupar dinheiro, terminar um curso.",
    "Você vai escrever um objetivo real, dividi-lo em passos, planear uma semana, escolher o que mais importa, vencer a procrastinação e acompanhar o seu progresso. Pode usar papel, um calendário gratuito no telefone ou uma aplicação; um assistente de IA pode ajudar a dividir um objetivo em passos, mas o plano é feito por você. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva um objetivo SMART para as próximas quatro semanas. Divida-o em passos semanais, planeie a próxima semana com blocos de tempo para as suas três prioridades principais, registe o que realmente faz durante sete dias e termine com uma revisão semanal de cinco minutos que diga o que funcionou e o que vai mudar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas que equilibram treino e escola, trabalhadores e quem procura emprego, donos de negócios, antigos militares que começam algo novo, jovens e qualquer pessoa que está a refazer a rotina depois de uma grande mudança, como voltar para casa depois da prisão.",
    startingPoint: "Têm coisas que querem fazer e alguma rotina diária, mas os objetivos são muitas vezes desejos vagos, as semanas não são planeadas, as tarefas urgentes tiram o lugar às importantes e deixar as coisas para depois é comum.",
    gap: "Sem objetivos claros e um plano semanal, as pessoas andam ocupadas sem avançar na procura de emprego, no treino, no negócio ou na poupança. Os alunos precisam de um sistema simples para definir um objetivo, planear a semana, começar tarefas difíceis e rever o progresso, para alcançarem os objetivos que lhes importam.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Ferramentas: papel, um calendário gratuito no telefone ou uma aplicação; a IA pode sugerir passos, mas o plano é feito pelo aluno",
      "Os alunos têm compromissos fixos, como turnos de trabalho, treinos, escola, consultas ou apresentações à supervisão",
      "Tempo: lições de cerca de cinco minutos, mais sete dias de registo"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um desejo vago", action: "reescrevê-lo como um objetivo SMART para as próximas quatro semanas", standard: "verificando cada letra de SMART" },
    { id: "O2", condition: "A partir do seu objetivo SMART", action: "dividi-lo num passo por semana e numa pequena próxima ação", standard: "com uma próxima ação que consegue fazer em cerca de 15 minutos" },
    { id: "O3", condition: "Para a próxima semana", action: "planear o seu calendário com as coisas fixas primeiro, blocos de tempo para o seu objetivo e um bloco de reserva", standard: "com pelo menos dois blocos para o objetivo e uma reserva vazia" },
    { id: "O4", condition: "Com uma lista de dez tarefas", action: "ordenar as tarefas por urgentes e importantes e escolher as suas três principais", standard: "fazendo um círculo à volta da que vai fazer primeiro" },
    { id: "O5", condition: "Com uma tarefa que tem andado a adiar", action: "começá-la com um primeiro passo muito pequeno, sem distrações e com um temporizador de 10 minutos", standard: "começando na mesma sessão" },
    { id: "O6", condition: "Depois de sete dias de registo", action: "fazer uma revisão semanal de cinco minutos e mudar o plano da semana seguinte", standard: "respondendo às três perguntas da revisão e fazendo pelo menos uma mudança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Definir objetivos e planear",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever um objetivo SMART",
          minutes: 5,
          goal: "Transformar um desejo vago num objetivo SMART.",
          text: [
            "\"Ficar em forma\" ou \"arranjar emprego\" são desejos. São um bom começo, mas não lhe dizem o que fazer hoje. Um objetivo SMART transforma um desejo em algo que pode pôr em prática e medir.",
            "SMART vem do inglês: Specific (específico: exatamente o quê), Measurable (mensurável: um número ou uma meta clara), Achievable (alcançável: exigente mas possível), Relevant (relevante: importa para você) e Time-bound (com prazo: uma data-limite). \"Arranjar emprego\" passa a \"Candidatar-me a 10 empregos em armazéns ou cozinhas até 30 de novembro.\" \"Ficar mais rápido\" passa a \"Tirar 2 segundos ao meu tempo nos 400 metros até ao fim da época.\"",
            "Repare que o objetivo do emprego fala do que você controla (candidatar-se), e não do que não controla (ser contratado). Objetivos que você controla fazem-no avançar mesmo quando os outros demoram a responder."
          ],
          steps: ["Escreva o seu desejo em poucas palavras.", "Torne-o específico: exatamente o quê?", "Acrescente um número ou uma meta clara.", "Confirme que é possível com o tempo e a ajuda que tem.", "Confirme que importa para você.", "Acrescente uma data-limite."],
          words: [["Objetivo SMART", "um objetivo específico, mensurável, alcançável, relevante e com prazo (as letras vêm das palavras em inglês)."], ["Data-limite", "a data até à qual uma coisa deve estar feita."]],
          slides: [
            { title: "Desejo e objetivo", bullets: ["Desejo: \"Arranjar emprego\"", "Objetivo: \"Candidatar-me a 10 empregos em cozinhas até 30 de novembro\""] },
            { title: "SMART", bullets: ["Específico e mensurável", "Alcançável e relevante", "Com prazo: tem uma data-limite"] },
            { title: "Mais exemplos", bullets: ["\"Poupar $200 até 31 de dezembro\"", "\"Tirar 2 segundos aos meus 400 m até ao fim da época\"", "\"Ter 5 clientes que pagam este mês\""] },
            { title: "Aponte ao que você controla", bullets: ["Candidatar-se, não ser contratado", "Treinar, não ganhar", "Ligar aos clientes, não a resposta deles"] }
          ],
          tryIt: "Escreva um desejo que tem neste momento. Depois reescreva-o como um objetivo SMART para as próximas quatro semanas. Verifique cada letra: S, M, A, R, T.",
          youCanNow: "transformar um desejo vago num objetivo SMART com um número e uma data-limite.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer o M de SMART?", options: ["Measurable (mensurável)", "Meaningful (com significado)", "Monthly (mensal)", "Maximum (máximo)"], answer: 0, why: "Mensurável quer dizer que pode contar ou verificar se o fez." },
            { objective: "O1", q: "O seu desejo é \"ficar em forma\". O que escreveria no lugar?", options: ["\"Ficar mesmo em forma um dia\"", "\"Nunca falhar um treino\"", "\"Correr devagar 20 minutos, 3 dias por semana, durante as próximas 4 semanas\"", "\"Ser a pessoa mais forte do ginásio\""], answer: 2, why: "Este objetivo é específico, mensurável, alcançável, relevante e com prazo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dividir um objetivo em passos semanais",
          minutes: 5,
          goal: "Dividir um objetivo SMART em passos semanais e numa primeira ação pequena.",
          text: [
            "Um objetivo de quatro semanas pode parecer grande. Dividi-lo em passos semanais torna-o possível. Trabalhe de trás para a frente a partir da data-limite: o que tem de estar feito no fim da semana 4, da semana 3, da semana 2 e da semana 1?",
            "Para \"Candidatar-me a 10 empregos até 30 de novembro\": semana 1, atualizar o currículo e fazer uma lista de 15 lugares; semana 2, candidatar-se a 3; semana 3, candidatar-se a 4; semana 4, candidatar-se a 3 e contactar de novo todos. Para um objetivo de negócio de 5 novos clientes: semana 1, fazer uma lista de 30 pessoas a contactar; semanas 2 a 4, contactar 10 por semana.",
            "Depois escolha a próxima ação, pequena o suficiente para fazer em 15 minutos ou menos, como \"Abrir o meu currículo e corrigir o número de telefone.\" Um assistente de IA pode sugerir passos se estiver bloqueado; peça-lhe, e depois corte a lista até ficar só o que cabe na sua semana real."
          ],
          steps: ["Escreva o objetivo e a data-limite no topo.", "Trabalhe de trás para a frente: o que tem de ser feito em cada semana?", "Escreva um passo por semana.", "Escreva a próxima ação pequena que consegue fazer em 15 minutos.", "Faça essa ação hoje, se puder."],
          words: [["Etapa", "um ponto de controlo no caminho para um objetivo, como o fim de cada semana."], ["Próxima ação", "a próxima coisa pequena e concreta que vai fazer."]],
          slides: [
            { title: "Objetivos grandes pesam", bullets: ["Divida-os em passos semanais", "Trabalhe de trás para a frente a partir da data-limite"] },
            { title: "Exemplo: 10 candidaturas de emprego", bullets: ["Semana 1: currículo + lista de 15 lugares", "Semanas 2-4: candidatar-se a 3, 4 e depois 3", "Semana 4: contactar de novo todos"] },
            { title: "A próxima ação", bullets: ["Pequena: 15 minutos ou menos", "Concreta: abrir, ligar, escrever, corrigir", "\"Abrir o meu currículo e corrigir o número de telefone\""] },
            { title: "A IA pode ajudar", bullets: ["Peça-lhe que sugira passos", "Corte a lista até caber na sua semana"] }
          ],
          tryIt: "Pegue no seu objetivo SMART da Lição 1. Escreva um passo para cada uma das quatro semanas, depois escreva a próxima ação pequena e faça-a agora, se puder.",
          youCanNow: "dividir um objetivo em passos semanais e escolher uma próxima ação pequena.",
          quickCheck: [
            { objective: "O2", q: "O que é uma próxima ação?", options: ["O resultado final do seu objetivo", "Um passo pequeno e concreto que consegue fazer em cerca de 15 minutos", "Um objetivo para o próximo ano", "Uma recompensa depois de terminar"], answer: 1, why: "Uma próxima ação é pequena e clara, para poder começar logo." },
            { objective: "O2", q: "Um assistente de IA dá-lhe 25 passos para o seu objetivo. O que faria?", options: ["Tentar fazer os 25 esta semana", "Ignorar a lista", "Pedir à IA que faça o objetivo por você", "Cortar a lista até ficarem os passos que cabem na sua semana real"], answer: 3, why: "A IA pode sugerir passos, mas é você que os corta para caberem no seu tempo real." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear a sua semana",
          minutes: 5,
          goal: "Planear uma semana com blocos de tempo para o que mais importa.",
          text: [
            "Um plano para a semana transforma objetivos em tempo no calendário. Escolha uma hora certa, como domingo à noite, e dedique-lhe 15 minutos.",
            "Primeiro, ponha o que é fixo: turnos de trabalho, aulas, treinos, consultas, apresentações da liberdade condicional ou da pena suspensa, deveres da família e sono. Depois acrescente blocos de tempo para os passos do seu objetivo, como \"Terça-feira 18h-19h: candidatar-me a 2 empregos.\" Trate estes blocos como compromissos consigo mesmo.",
            "Deixe algum espaço vazio. As coisas correm mal, os autocarros atrasam-se e as crianças ficam doentes. Um plano sem espaço para surpresas falha no primeiro dia. Use aquilo que vai mesmo olhar: uma agenda de papel, um quadro branco ou um calendário gratuito no telefone com lembretes."
          ],
          steps: ["Escolha uma hora para planear cada semana (por exemplo domingo à noite).", "Ponha as coisas fixas: trabalho, escola, treino, consultas, sono.", "Acrescente blocos de tempo para o passo do objetivo desta semana.", "Deixe algum espaço vazio para surpresas.", "Ponha lembretes para os blocos mais importantes."],
          words: [["Bloco de tempo", "um pedaço de tempo marcado no seu calendário para uma tarefa."], ["Reserva", "tempo livre que deixa vazio para as surpresas."]],
          slides: [
            { title: "Planeie uma vez por semana", bullets: ["À mesma hora cada semana, cerca de 15 minutos", "Por exemplo, domingo à noite"] },
            { title: "Primeiro as coisas fixas", bullets: ["Trabalho, escola, treino", "Consultas e apresentações", "Deveres da família e sono"] },
            { title: "Depois os blocos do objetivo", bullets: ["\"Terça-feira 18h-19h: candidatar-me a 2 empregos\"", "Trate-o como um compromisso marcado"] },
            { title: "Deixe espaço", bullets: ["Guarde algum tempo de reserva vazio", "Use papel ou o calendário do telefone", "Ponha lembretes nos blocos principais"] }
          ],
          tryIt: "Planeie a próxima semana em papel ou no calendário do telefone. Ponha as coisas fixas e depois acrescente pelo menos dois blocos de tempo para o passo do seu objetivo e um bloco de reserva vazio.",
          youCanNow: "planear uma semana com compromissos fixos, blocos de tempo para o objetivo e tempo de reserva.",
          quickCheck: [
            { objective: "O3", q: "O que é um bloco de reserva?", options: ["Tempo vazio deixado na sua semana para surpresas", "Tempo para a sua tarefa mais importante", "Um bloco de tempo só para dormir", "Uma reunião com o seu chefe"], answer: 0, why: "O tempo de reserva dá espaço ao seu plano quando as coisas correm mal." },
            { objective: "O3", q: "Está a planear a próxima semana. O que poria primeiro no calendário?", options: ["Os blocos do objetivo", "Tempo para as redes sociais", "As coisas fixas, como trabalho, treino e consultas", "Nada; planeia cada dia de manhã"], answer: 2, why: "As coisas fixas entram primeiro e depois os blocos do objetivo encaixam à volta delas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Definir objetivos e planear",
        questions: [
          { objective: "O1", q: "Qual é um objetivo SMART?", options: ["\"Ficar mais saudável\"", "\"Ser melhor com o dinheiro\"", "\"Caminhar 30 minutos, 5 dias por semana, durante as próximas 4 semanas\"", "\"Esforçar-me mais no trabalho\""], answer: 2, why: "É específico, mensurável e tem um prazo." },
          { objective: "O1", q: "O que quer dizer o T de SMART?", options: ["Time-bound (com prazo)", "Tough (duro)", "Team (equipa)", "Trusted (de confiança)"], answer: 0, why: "Um objetivo SMART tem uma data-limite." },
          { objective: "O2", q: "O seu objetivo é fazer 10 candidaturas de emprego em 4 semanas. Qual é uma boa próxima ação?", options: ["Ser contratado amanhã", "Abrir o seu currículo e corrigir o número de telefone", "Pensar nisso no próximo mês", "Candidatar-se a 100 empregos hoje"], answer: 1, why: "Uma próxima ação é pequena, concreta e pode ser feita já." },
          { objective: "O3", q: "Quando planeia uma semana, o que entra primeiro no calendário?", options: ["Extras divertidos", "Nada; logo se vê", "Só os blocos do objetivo", "As coisas fixas, como trabalho, escola, treino e sono"], answer: 3, why: "Os compromissos fixos vêm primeiro; os blocos do objetivo encaixam à volta deles." },
          { objective: "O3", q: "Porque deixar tempo de reserva vazio na sua semana?", options: ["As coisas correm mal e os planos precisam de espaço", "Para perder tempo", "Porque planear é opcional", "Para nunca terminar"], answer: 0, why: "Um plano sem espaço falha na primeira surpresa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pôr em prática",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escolher prioridades",
          minutes: 5,
          goal: "Ordenar tarefas por urgentes e importantes e escolher as suas três principais.",
          text: [
            "Há sempre mais para fazer do que o tempo permite. As prioridades decidem o que recebe o seu melhor tempo. Uma ferramenta simples põe as tarefas em quatro caixas com duas perguntas: É importante (faz avançar os meus objetivos ou protege a minha saúde, família, emprego ou liberdade)? É urgente (tem de ser feito agora)?",
            "Importante e urgente: faça já (uma renda que vence hoje, uma apresentação marcada). Importante, não urgente: marque-a no calendário (estudar, treinar, fazer crescer o seu negócio). Urgente, não importante: faça depressa ou passe a outra pessoa (muitas chamadas e mensagens). Nenhuma das duas: deixe de lado (passar o tempo sem fim nas redes sociais).",
            "A maior parte do crescimento está na caixa do importante mas não urgente, e é a mais fácil de saltar. Todas as manhãs ou noites, escolha as suas três tarefas principais para o dia seguinte e faça primeiro a mais importante, antes que as mensagens o distraiam."
          ],
          steps: ["Escreva tudo o que tem na cabeça.", "Pergunte sobre cada uma: é importante? É urgente?", "Ponha cada tarefa numa de quatro caixas: fazer já, marcar, fazer depressa ou passar a outra pessoa, deixar de lado.", "Escolha as suas três principais para amanhã.", "Faça primeiro a mais importante."],
          words: [["Prioridade", "algo que importa mais e é feito primeiro."], ["Urgente", "tem de ser feito em breve."], ["Importante", "faz avançar os seus objetivos ou protege o que mais importa."]],
          slides: [
            { title: "Duas perguntas", bullets: ["É importante?", "É urgente?"] },
            { title: "Quatro caixas", bullets: ["Importante + urgente: faça já", "Importante, não urgente: marque no calendário", "Urgente, não importante: faça depressa ou passe a outra pessoa", "Nenhuma das duas: deixe de lado"] },
            { title: "O crescimento está na caixa 2", bullets: ["Estudar, treinar, fazer crescer o seu negócio", "Fácil de saltar porque não é urgente", "Ponha-a no calendário"] },
            { title: "As três principais", bullets: ["Escolha três tarefas para amanhã", "Faça primeiro a mais importante", "Antes que as mensagens o distraiam"] }
          ],
          tryIt: "Escreva dez coisas da sua lista de tarefas. Ponha cada uma numa das quatro caixas. Depois escolha as suas três principais para amanhã e faça um círculo à volta da que vai fazer primeiro.",
          youCanNow: "ordenar tarefas por importantes e urgentes e escolher as três principais de cada dia.",
          quickCheck: [
            { objective: "O4", q: "Em que caixa entra uma apresentação marcada para hoje?", options: ["Não urgente e não importante", "Urgente mas não importante", "Importante mas não urgente", "Urgente e importante"], answer: 3, why: "Tem de ser feita hoje e importa, por isso é urgente e importante." },
            { objective: "O4", q: "O seu telefone não para de vibrar com mensagens de um grupo enquanto faz uma candidatura de emprego. O que faria?", options: ["Responder logo a todas as mensagens", "Terminar a candidatura primeiro e ver as mensagens depois", "Parar a candidatura por hoje", "Sair do grupo para sempre"], answer: 1, why: "A maioria das mensagens parece urgente, mas é menos importante do que a sua tarefa principal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vencer a procrastinação",
          minutes: 5,
          goal: "Usar truques simples para começar uma tarefa que tem andado a adiar.",
          text: [
            "Procrastinar não é preguiça. Normalmente adiamos as coisas porque a tarefa parece grande demais, pouco clara, aborrecida ou assustadora. A solução é tornar o começo mais fácil.",
            "Quatro truques que funcionam. Encolha-a: torne o primeiro passo muito pequeno, como \"escrever uma frase da carta de apresentação.\" Use um temporizador: trabalhe só 10 minutos; pode parar depois, mas muitas vezes continua. Tire as distrações: ponha o telefone noutra divisão ou ligue o modo não incomodar. Junte-a a algo: faça a tarefa à mesma hora e no mesmo lugar todos os dias, ou com um colega de estudo ou de treino.",
            "Seja gentil consigo mesmo quando falhar. Culpar-se torna a tarefa ainda mais pesada. Repare no que aconteceu, escolha o primeiro passo pequeno e comece de novo."
          ],
          steps: ["Diga o nome da tarefa que está a evitar.", "Pergunte porquê: grande demais, pouco clara, aborrecida ou assustadora?", "Encolha-a até um primeiro passo muito pequeno.", "Ponha um temporizador de 10 minutos.", "Guarde o telefone e comece.", "Quando o temporizador acabar, escolha: parar ou continuar."],
          words: [["Procrastinação", "adiar algo que sabe que devia fazer."], ["Não incomodar", "uma opção do telefone que silencia as chamadas e os alertas durante algum tempo."]],
          slides: [
            { title: "Porque adiamos as coisas", bullets: ["Grande demais ou pouco clara", "Aborrecida", "Assustadora"] },
            { title: "Torne o começo fácil", bullets: ["Encolha-a até um primeiro passo muito pequeno", "Ponha um temporizador de 10 minutos", "Telefone guardado ou em não incomodar"] },
            { title: "Crie um hábito", bullets: ["À mesma hora e no mesmo lugar todos os dias", "Um colega de estudo ou de treino"] },
            { title: "Quando falhar", bullets: ["Seja gentil consigo mesmo", "Escolha o primeiro passo pequeno", "Comece de novo"] }
          ],
          tryIt: "Escolha uma tarefa que tem andado a evitar. Encolha-a até um primeiro passo muito pequeno, guarde o telefone, ponha um temporizador de 10 minutos e comece agora mesmo.",
          youCanNow: "começar uma tarefa que tem andado a evitar, encolhendo-a, usando um temporizador e tirando as distrações.",
          quickCheck: [
            { objective: "O5", q: "Porque é que as pessoas muitas vezes adiam uma tarefa?", options: ["Parece grande demais, pouco clara, aborrecida ou assustadora", "Têm tempo livre demais", "A tarefa é fácil demais", "Já a terminaram"], answer: 0, why: "As tarefas que parecem grandes, pouco claras, aborrecidas ou assustadoras são as que evitamos." },
            { objective: "O5", q: "Há meses que evita arrumar a sua garagem. O que faria?", options: ["Esperar até se sentir motivado", "Planear fazer tudo no próximo sábado", "Pegar numa caixa, pôr um temporizador de 10 minutos e começar agora", "Pedir a outra pessoa que decida"], answer: 2, why: "Um primeiro passo muito pequeno e um temporizador tornam mais fácil começar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Acompanhar o progresso e a revisão semanal",
          minutes: 5,
          goal: "Acompanhar o seu progresso e ajustar o seu plano numa revisão semanal de cinco minutos.",
          text: [
            "O que é registado acaba por ser feito. Um registo simples mostra que está a avançar, e isso dá-lhe força para continuar. Pode ser uma lista em papel com um visto em cada dia em que fez o seu passo, um número nas notas do telefone (candidaturas enviadas, dinheiro poupado, quilómetros corridos) ou uma aplicação gratuita de hábitos.",
            "Uma vez por semana, faça uma revisão de cinco minutos. Faça três perguntas: O que consegui fazer? O que me atrapalhou? O que vou mudar na próxima semana? Depois planeie a semana seguinte com o que aprendeu.",
            "Se continua a falhar um passo, o problema é o plano, não você. Torne o passo mais pequeno, mude a hora ou mude a data-limite. Os treinadores mudam o plano de treino quando um atleta não está a progredir; faça o mesmo por si. Celebre também as pequenas vitórias."
          ],
          steps: ["Escolha um número ou um visto para registar cada dia.", "Registe-o à mesma hora todos os dias.", "Uma vez por semana, pergunte: o que fiz, o que me atrapalhou, o que vou mudar?", "Ajuste o plano da semana seguinte.", "Celebre uma pequena vitória."],
          words: [["Registo", "uma anotação simples do que fez em cada dia."], ["Revisão semanal", "um olhar curto para trás, todas as semanas, para aprender e ajustar o seu plano."]],
          slides: [
            { title: "O que é registado é feito", bullets: ["Faça um visto numa lista, anote um número ou use uma aplicação de hábitos", "Ver o progresso dá força para continuar"] },
            { title: "Revisão semanal de cinco minutos", bullets: ["O que consegui fazer?", "O que me atrapalhou?", "O que vou mudar na próxima semana?"] },
            { title: "Falha passos?", bullets: ["Mude o plano; o seu valor não muda", "Passo mais pequeno, nova hora ou nova data-limite"] },
            { title: "Continue", bullets: ["Celebre as pequenas vitórias", "Planeie a próxima semana com o que aprendeu"] }
          ],
          tryIt: "Tarefa final: registe o passo do seu objetivo todos os dias durante sete dias. No dia 7, responda por escrito às três perguntas da revisão e planeie a semana seguinte com pelo menos uma mudança.",
          youCanNow: "acompanhar o progresso num objetivo e usar uma revisão semanal para ajustar o seu plano.",
          quickCheck: [
            { objective: "O6", q: "Quanto tempo deve demorar uma revisão semanal?", options: ["Cerca de cinco minutos", "Um dia inteiro", "Duas horas", "Não é precisa"], answer: 0, why: "Uma revisão curta é fácil de continuar a fazer todas as semanas." },
            { objective: "O6", q: "O seu registo mostra que nunca fez o passo do seu objetivo nas manhãs dos dias de semana. O que faria?", options: ["Desistir do objetivo", "Manter o mesmo plano e esperar", "Culpar o seu horário", "Mudar o passo para uma hora que funcionou melhor"], answer: 3, why: "A revisão serve para mudar o plano quando ele não está a funcionar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Pôr em prática",
        questions: [
          { objective: "O4", q: "Estudar para um teste daqui a três semanas é:", options: ["Urgente e não importante", "Nenhuma das duas", "Importante mas não urgente", "Algo para deixar de lado"], answer: 2, why: "Importa, mas não é para hoje, por isso marca-se no calendário." },
          { objective: "O4", q: "O que deve fazer com uma tarefa importante e urgente, como uma apresentação marcada para hoje?", options: ["Deixá-la de lado", "Marcá-la para o próximo mês", "Passá-la a um amigo", "Fazê-la já"], answer: 3, why: "As tarefas importantes e urgentes são feitas primeiro." },
          { objective: "O5", q: "Continua a adiar um relatório grande. Qual é um bom primeiro passo?", options: ["Esperar até se sentir pronto", "Escrever só a primeira frase com um temporizador de 10 minutos", "Fazer tudo de uma vez à meia-noite", "Ver primeiro as redes sociais"], answer: 1, why: "Encolher a tarefa e usar um temporizador torna o começo mais fácil." },
          { objective: "O6", q: "Que pergunta faz parte de uma revisão semanal?", options: ["O que vou mudar na próxima semana?", "Quem posso culpar?", "Como posso evitar planear?", "Porque sou tão mau nisto?"], answer: 0, why: "A revisão olha para trás para ajustar o plano." },
          { objective: "O6", q: "Falhou o seu passo três semanas seguidas. Qual é a melhor decisão?", options: ["Desistir do objetivo", "Culpar-se", "Mudar o plano: passo mais pequeno, nova hora ou nova data-limite", "Manter o mesmo plano e esperar"], answer: 2, why: "Quando os passos continuam a falhar, ajuste o plano." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gestão do Tempo e Definição de Objetivos",
    questions: [
      { objective: "O1", q: "SMART quer dizer (em inglês):", options: ["Simple, Modern, Active, Ready, Tough (simples, moderno, ativo, pronto, duro)", "Specific, Measurable, Achievable, Relevant, Time-bound (específico, mensurável, alcançável, relevante, com prazo)", "Strong, Mighty, Able, Rich, Tall (forte, poderoso, capaz, rico, alto)", "Short, Monthly, Annual, Real, Total (curto, mensal, anual, real, total)"], answer: 1, why: "Estas cinco letras tornam um objetivo claro e possível." },
      { objective: "O1", q: "Que objetivo é mensurável?", options: ["\"Ser um jogador melhor\"", "\"Fazer mais publicidade\"", "\"Sentir-me mais feliz\"", "\"Poupar $50 por semana durante 8 semanas\""], answer: 3, why: "Tem um número que pode verificar." },
      { objective: "O1", q: "Porque apontar um objetivo ao que você controla?", options: ["Faz você avançar mesmo quando os outros demoram", "É mais fácil fazer batota", "Soa melhor", "Os outros fazem-no por você"], answer: 0, why: "Pode sempre agir sobre o que controla." },
      { objective: "O1", q: "Qual é um objetivo melhor para a procura de emprego?", options: ["\"Ser contratado até sexta-feira\"", "\"Esperar que alguém ligue\"", "\"Candidatar-me a 3 empregos esta semana\"", "\"Pensar em empregos\""], answer: 2, why: "Candidatar-se está no seu controlo e é mensurável." },
      { objective: "O2", q: "Dividir um objetivo em passos semanais funciona melhor quando:", options: ["Começa pela semana mais difícil", "Trabalha de trás para a frente a partir da data-limite", "Salta a primeira semana", "Guarda tudo na cabeça"], answer: 1, why: "Trabalhar de trás para a frente mostra o que cada semana precisa." },
      { objective: "O2", q: "Uma \"próxima ação\" deve ser:", options: ["Pequena, concreta e possível de fazer em cerca de 15 minutos", "O maior possível", "Algo para o próximo ano", "Vaga, para ter opções"], answer: 0, why: "As ações pequenas são fáceis de começar." },
      { objective: "O2", q: "Como pode um assistente de IA ajudar com os objetivos?", options: ["Faz o objetivo por você", "Decide os seus objetivos", "Substitui o seu calendário", "Pode sugerir passos que depois você corta para caberem na sua semana real"], answer: 3, why: "A IA pode ajudar a ter ideias; o plano é feito por você." },
      { objective: "O3", q: "Quando é uma boa altura para planear a sua semana?", options: ["Nunca", "À mesma hora cada semana, como domingo à noite", "Só quando as coisas correm mal", "Uma vez por ano"], answer: 1, why: "Uma hora regular para planear cria o hábito." },
      { objective: "O3", q: "Um bloco de tempo é:", options: ["Um pedaço de tempo marcado no seu calendário para uma tarefa", "Uma pausa no trabalho", "Um tipo de alarme", "Um exercício de desporto"], answer: 0, why: "Reserva tempo para uma tarefa específica." },
      { objective: "O3", q: "O que entra no seu plano antes dos blocos do objetivo?", options: ["Tempo para as redes sociais", "Extras opcionais", "As coisas fixas, como turnos de trabalho, treinos e consultas", "Nada"], answer: 2, why: "Os compromissos fixos entram primeiro." },
      { objective: "O3", q: "Um plano sem nenhum tempo vazio normalmente:", options: ["Funciona perfeitamente", "Falha na primeira surpresa", "Poupa mais tempo", "Deixa você rico"], answer: 1, why: "O tempo de reserva absorve as surpresas." },
      { objective: "O4", q: "Passar o tempo sem fim nas redes sociais normalmente é:", options: ["Importante e urgente", "Importante, não urgente", "Urgente, não importante", "Nem importante nem urgente"], answer: 3, why: "Não faz avançar os objetivos nem tem de ser feito agora." },
      { objective: "O4", q: "Onde acontece a maior parte do crescimento a longo prazo?", options: ["Nas tarefas importantes mas não urgentes", "Nas tarefas urgentes mas não importantes", "Nas tarefas que deixa de lado", "Em tarefas ao acaso"], answer: 0, why: "O treino, o estudo e o crescimento do negócio acontecem aqui, por isso marque-os no calendário." },
      { objective: "O4", q: "Porque fazer primeiro a sua tarefa mais importante de cada dia?", options: ["É sempre a mais fácil", "As mensagens e as surpresas podem distraí-lo mais tarde", "Torna o dia mais comprido", "Mais ninguém vai verificar"], answer: 1, why: "Fazê-la primeiro protege-a das distrações." },
      { objective: "O5", q: "Muitas vezes procrastinamos porque uma tarefa parece:", options: ["Pequena e clara demais", "Divertida demais", "Grande demais, pouco clara, aborrecida ou assustadora", "Já feita"], answer: 2, why: "Esses sentimentos tornam o começo difícil." },
      { objective: "O5", q: "O truque do temporizador de 10 minutos quer dizer:", options: ["Trabalhar só 10 minutos por semana", "Começar durante 10 minutos; depois escolher parar ou continuar", "Terminar tudo em 10 minutos", "Esperar 10 minutos antes de começar"], answer: 1, why: "Um temporizador curto torna mais fácil começar." },
      { objective: "O5", q: "O que ajuda a tirar as distrações?", options: ["Deixar todos os alertas ligados", "Trabalhar em frente da televisão", "Ver as mensagens a cada minuto", "Pôr o telefone noutra divisão ou em não incomodar"], answer: 3, why: "Menos distrações tornam mais fácil concentrar-se." },
      { objective: "O6", q: "Qual é uma forma simples de acompanhar o progresso?", options: ["Fazer um visto numa lista em cada dia em que faz o seu passo", "Tentar lembrar-se", "Perguntar a um desconhecido", "Não registar nada"], answer: 0, why: "Um registo à vista mostra que está a avançar." },
      { objective: "O6", q: "Na revisão semanal, pergunta o que fez, o que o atrapalhou e:", options: ["Quem tem a culpa", "O que vou mudar na próxima semana", "Como saltar a próxima semana", "O que os outros fizeram"], answer: 1, why: "A revisão leva a uma semana seguinte melhor." },
      { objective: "O6", q: "O seu treinador muda o seu treino quando deixa de melhorar. O que é que isso ensina sobre os seus próprios planos?", options: ["Nunca mudar um plano", "Desistir quando o progresso para", "Ajustar o plano quando não está a funcionar", "Os planos não importam"], answer: 2, why: "Os bons planos mudam conforme os resultados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 5, 8, 10, 12, 15, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Objetivo SMART", objective: "O1", notYet: "O objetivo é vago ou não tem data-limite nem número.", meets: "Um objetivo de quatro semanas que é específico, mensurável, alcançável, relevante e com prazo.", exceeds: "O objetivo foca-se em ações que o aluno controla." },
      { name: "Passos semanais", objective: "O2", notYet: "Não há passos semanais, ou os passos são grandes demais para começar.", meets: "Um passo para cada semana e uma próxima ação pequena.", exceeds: "Os passos foram planeados de trás para a frente a partir da data-limite." },
      { name: "Plano da semana", objective: "O3", notYet: "Não há blocos de tempo, ou faltam as coisas fixas.", meets: "Primeiro as coisas fixas, blocos de tempo para as três prioridades principais e um bloco de reserva.", exceeds: "A tarefa mais importante está planeada cedo no dia." },
      { name: "Começar e registar", objective: "O5", notYet: "Adiou os passos, ou registou menos de sete dias.", meets: "Sete dias registados, que mostram o que foi realmente feito.", exceeds: "Anota que truques para começar ajudaram nos dias difíceis." },
      { name: "Revisão semanal", objective: "O6", notYet: "Falta a revisão, ou não há nenhuma mudança planeada.", meets: "Responde ao que foi feito, ao que atrapalhou e ao que vai mudar, com pelo menos uma mudança.", exceeds: "A mudança já está posta no calendário da próxima semana." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que fazem uma revisão semanal durante quatro semanas seguidas (inquérito de seguimento)",
      "Alunos que dizem ter alcançado o seu objetivo SMART de quatro semanas",
      "Alunos que dizem ter usado o sistema num objetivo de procura de emprego, treino, negócio ou poupança",
      "Alunos que começam outro curso da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta, um calendário gratuito no telefone ou uma aplicação de planeamento",
      "Um assistente de IA gratuito (opcional) para sugerir passos",
      "Um temporizador num telefone ou relógio",
      "Cerca de 60 minutos para as lições e as verificações, mais sete dias de registo"
    ],
    facilitatorNotes: [
      "Dê o curso em duas sessões com uma semana de intervalo, para que os alunos possam registar sete dias entre elas.",
      "Peça aos alunos para partilharem um objetivo SMART com um colega e verificarem-no letra a letra.",
      "Ajude os alunos com compromissos fixos, como turnos, treinos ou apresentações à supervisão, a pô-los primeiro no calendário.",
      "Use um temporizador de 10 minutos para todo o grupo, para praticarem juntos começar uma tarefa adiada.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
