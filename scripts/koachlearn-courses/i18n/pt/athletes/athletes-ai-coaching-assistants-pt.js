"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-coaching-assistants.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-ai-coaching-assistants-pt",
  lang: "pt",
  translationOf: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "Assistentes de IA para Treinadores",
  skills: "Configurar um assistente de IA com instruções de treino, Planear treinos com IA, Escrever mensagens para pais e jogadores, Criar fichas de exercícios e questionários, Manter os dados dos atletas privados e as decisões humanas",
  outcome: "configurar um assistente de IA como ajudante de treino, com as suas próprias instruções fixas, e depois usá-lo para planear um treino de 90 minutos, escrever uma mensagem clara para os pais e fazer uma ficha de exercício e um questionário de cinco perguntas sobre as jogadas, tudo verificado por você e sem dados privados dos atletas.",
  about: [
    "Este curso é para treinadores principais, treinadores adjuntos, diretores de clubes e atletas que ajudam a treinar jogadores mais novos. Os treinadores passam horas a planear e a tratar de papéis; um assistente de IA pode tirar-lhes parte desse trabalho.",
    "Você vai configurar um assistente de IA gratuito com instruções fixas sobre a sua equipa e depois usá-lo para planear treinos, escrever mensagens e fazer materiais de ensino. Também vai definir regras claras: o que fica privado e que decisões continuam a ser humanas.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso. Cumpra as regras da sua escola, clube ou liga sobre tecnologia, comunicação com menores e dados dos alunos."
  ],
  finalTask: "Escreva as instruções fixas do seu assistente de treino (nível da equipa, estilo, regras de segurança, o que não incluir) e depois use-o para fazer um plano de treino de 90 minutos, uma mensagem para os pais sobre o horário da próxima semana, uma ficha de exercício para um exercício e um questionário de cinco perguntas sobre as jogadas. Verifique e corrija cada parte, e confirme que não usou nenhuma informação privada dos atletas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Treinadores principais, treinadores adjuntos, diretores de clubes e atletas que ajudam a treinar jogadores mais novos, muitas vezes voluntários ou treinadores a tempo parcial com pouco tempo para planear.",
    startingPoint: "Já dirigem treinos e enviam mensagens à equipa. Alguns já experimentaram um assistente de IA, mas poucos lhe dão instruções fixas ou têm regras escritas sobre privacidade e segurança.",
    gap: "Planear e tratar de papéis leva horas, e um uso descuidado da IA pode divulgar dados privados dos atletas, propor exercícios perigosos ou substituir decisões que o treinador tem de tomar. Os treinadores precisam de usar a IA como um ajudante verificado, com limites claros, para pouparem tempo mantendo os atletas seguros e tratados com justiça.",
    constraints: [
      "Palavras simples; não é preciso conhecimento técnico",
      "Aparelhos: um telefone ou computador com um assistente de IA gratuito",
      "Tempo: cerca de cinco minutos por lição, numa semana de treinos cheia",
      "As regras da escola, do clube e da liga sobre tecnologia, mensagens a menores e dados dos alunos vêm primeiro",
      "Nenhum nome de jogador, dado de saúde ou outro dado privado de atleta em nenhum pedido"
    ],
    prerequisites: "Nenhum. Os treinadores que nunca usaram assistentes de IA podem fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas semanais de treino", action: "indicar que tarefas de treino dar a um assistente de IA para fazer um rascunho e que decisões guardar para si", standard: "deixando com o treinador as decisões sobre tempo de jogo, convocatória e segurança" },
    { id: "O2", condition: "Para a sua própria equipa", action: "escrever instruções fixas com o nível da equipa, a duração do treino, o estilo e as regras de segurança", standard: "incluindo uma regra para nunca usar nomes de jogadores nem dados de saúde" },
    { id: "O3", condition: "Usando as suas instruções fixas", action: "fazer com a IA um rascunho de um plano de treino de 90 minutos e ajustá-lo", standard: "para que os tempos batam certo, os exercícios sirvam para a idade e o material, e haja pelo menos duas mudanças" },
    { id: "O4", condition: "Com uma mudança de horário ou uma notícia da equipa", action: "escrever com a IA uma mensagem clara e simpática para pais ou jogadores e enviá-la por um canal aprovado", standard: "com todas as datas verificadas e nada sobre um só jogador numa mensagem de grupo" },
    { id: "O5", condition: "Com um exercício e uma jogada", action: "criar com a IA uma ficha de exercício e um questionário de cinco perguntas sobre a jogada", standard: "com cada passo e cada resposta verificados contra o seu exercício e a sua jogada reais" },
    { id: "O6", condition: "Antes de usar a IA para qualquer tarefa de treino", action: "escrever e cumprir limites para a privacidade, a segurança e a justiça", standard: "enviando as questões médicas e de calor para pessoal qualificado e para as orientações da federação" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Configurar o seu assistente de treino",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que um assistente de IA para treinadores pode fazer",
          minutes: 4,
          goal: "Fazer a lista das tarefas de treino a dar à IA e das decisões a guardar para si.",
          text: [
            "Um assistente de IA para treinadores é um assistente de IA geral, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, que você usa no trabalho de treinador. Pode fazer rascunhos de planos de treino, escrever emails, explicar regras, criar descrições de exercícios, questionários e horários, e resumir notas.",
            "Ele não consegue ver os seus jogadores, conhecer a saúde ou os sentimentos deles, nem assumir responsabilidade. O tempo de jogo, a disciplina, as lesões e as decisões de regresso ao jogo, as decisões de segurança e tudo o que tem a ver com o bem-estar de um jogador ficam com você e com os profissionais certos.",
            "Uma boa regra: a IA faz o rascunho, o treinador decide. Tudo o que ela escreve é um primeiro rascunho que você verifica."
          ],
          words: [["Assistente de IA para treinadores", "um assistente de IA geral usado para ajudar nas tarefas de treino."], ["Regresso ao jogo", "a decisão sobre quando um atleta lesionado pode voltar a jogar com segurança; é tomada por profissionais de saúde."]],
          slides: [
            { title: "A IA pode fazer rascunhos de", bullets: ["Planos de treino e horários", "Emails e mensagens", "Descrições de exercícios e questionários", "Resumos das suas notas"] },
            { title: "O treinador fica com", bullets: ["O tempo de jogo e a disciplina", "As decisões de segurança", "O bem-estar; as lesões vão para o pessoal médico"] },
            { title: "A regra", bullets: ["A IA faz o rascunho", "O treinador decide"] }
          ],
          tryIt: "Escreva duas listas: cinco tarefas semanais de treino que poderia dar à IA para fazer um rascunho, e cinco decisões que vai guardar sempre para si.",
          youCanNow: "decidir em que tarefas de treino a IA pode ajudar e que decisões continuam a ser humanas.",
          quickCheck: [
            { objective: "O1", q: "Que tarefa de treino a IA pode fazer em rascunho por você?", options: ["Um horário semanal de treinos", "Quem começa a jogar no sábado", "Se um jogador lesionado pode voltar", "Como um jogador se sente hoje"], answer: 0, why: "A IA pode fazer rascunhos de planos; a convocatória, as lesões e os sentimentos precisam do treinador e de pessoal qualificado." },
            { objective: "O1", q: "A IA sugere pôr um jogador no banco com base nas suas notas. O que faz?", options: ["Segue a sugestão à risca", "Toma você a decisão a partir do que viu", "Deixa os jogadores votar", "Pergunta outra vez à IA até ela concordar"], answer: 1, why: "A IA faz o rascunho, o treinador decide, sobretudo sobre o tempo de jogo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever instruções fixas",
          minutes: 5,
          goal: "Escrever instruções fixas que digam à IA como é a sua equipa e quais são as suas regras.",
          text: [
            "As instruções fixas são um parágrafo que você cola no início de uma conversa (ou guarda nas instruções personalizadas ou na função de projetos do assistente, se ele tiver) para que ele conheça sempre a sua situação.",
            "Inclua: a modalidade, o nível e o escalão de idade; o número de jogadores; a duração do treino e as instalações; o seu estilo de treino e os seus valores; as regras de segurança (exercícios adequados à idade, pausas para beber água, nada de exercício físico como castigo); e o que ele nunca deve incluir (nomes de jogadores, dados de saúde, notas escolares).",
            "Exemplo: \"Treino uma equipa de futebol feminino sub-12 com 16 jogadoras. Os treinos duram 90 minutos em meio campo, às terças e quintas. Valorizo o esforço, a diversão e o espírito de equipa. Os planos têm de incluir aquecimento, pausas para beber água a cada 20 minutos e exercícios adequados à idade. Nunca peça nem use nomes de jogadoras ou dados de saúde.\""
          ],
          steps: ["Escreva a modalidade, o nível, o escalão de idade e o número de jogadores.", "Acrescente a duração do treino e as instalações.", "Acrescente os seus valores e o seu estilo de treino.", "Acrescente as regras de segurança.", "Acrescente o que ele nunca deve incluir.", "Guarde-as num lugar de onde as possa colar sempre."],
          words: [["Instruções fixas", "a informação que você dá a uma IA no início para que cada resposta sirva para a sua situação."], ["Adequado à idade", "próprio para a idade e o desenvolvimento dos jogadores."]],
          slides: [
            { title: "Instruções fixas", bullets: ["Cole-as no início de cada conversa", "Ou guarde-as nas definições do assistente, se existir essa opção"] },
            { title: "Inclua", bullets: ["Modalidade, nível, idade, número de jogadores", "Duração do treino e espaço", "Valores e regras de segurança"] },
            { title: "Nunca inclua", bullets: ["Nomes de jogadores", "Dados de saúde", "Notas escolares ou dados da família"] }
          ],
          tryIt: "Escreva as suas instruções fixas num parágrafo e guarde-as numa nota. Cole-as num assistente de IA e pergunte: \"Resuma o que sabe sobre a minha equipa.\" Corrija o que ele tiver percebido mal.",
          youCanNow: "escrever instruções fixas que fazem as respostas da IA servir para a sua equipa.",
          quickCheck: [
            { objective: "O2", q: "O que são instruções fixas?", options: ["Uma lista dos números de telefone dos jogadores", "O livro de regras da liga", "Informação sobre a sua equipa e as suas regras que você dá à IA no início", "Um exercício de treino"], answer: 2, why: "As instruções fixas fazem cada resposta da IA servir para a sua equipa." },
            { objective: "O2", q: "O resumo da IA diz que a sua equipa é sub-16, mas é sub-12. O que faz?", options: ["Ignora", "Apaga a aplicação de IA", "Usa as respostas na mesma", "Corrige as instruções para terem o escalão certo"], answer: 3, why: "Informação errada dá planos errados, por isso corrija-a primeiro." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear um treino com a IA",
          minutes: 6,
          goal: "Usar a IA para fazer um rascunho de um plano de treino de 90 minutos e ajustá-lo.",
          text: [
            "Depois de colar as suas instruções fixas, peça: \"Planeie um treino de 90 minutos centrado em [habilidade]. Inclua aquecimento, três exercícios progressivos, um jogo reduzido, retorno à calma e pausas para beber água. Dê os tempos, a montagem, os pontos de treino e como tornar cada exercício mais fácil ou mais difícil.\"",
            "Verifique como um treinador: Os exercícios são seguros e adequados à idade? Os tempos batem certo? Tem o espaço e o material? O equilíbrio entre esforço e descanso está certo? Há filas demais e muito tempo parado?",
            "Faça pedidos de seguimento: \"Só temos 10 bolas.\" \"Há duas jogadoras novas.\" \"Troque o exercício 2 por um com mais toques na bola.\" Guarde os planos de que gosta numa pasta para os voltar a usar e melhorar."
          ],
          steps: ["Cole as suas instruções fixas.", "Peça um plano de 90 minutos com tempos, montagem e pontos de treino.", "Verifique a segurança, os tempos, o espaço e o material.", "Faça pedidos de seguimento para corrigir os problemas.", "Guarde o plano final."],
          words: [["Progressão", "exercícios que vão do simples ao mais difícil."], ["Jogo reduzido", "um jogo com menos jogadores e um espaço mais pequeno, para que todos toquem mais vezes na bola."]],
          slides: [
            { title: "Peça", bullets: ["Aquecimento, 3 exercícios progressivos", "Jogo reduzido, retorno à calma", "Tempos, montagem, pontos de treino"] },
            { title: "Verifique como um treinador", bullets: ["Seguro e adequado à idade?", "Os tempos batem certo? Espaço e material?", "Pouco tempo parado?"] },
            { title: "Ajuste", bullets: ["\"Só temos 10 bolas.\"", "\"Há duas jogadoras novas.\"", "Guarde os planos de que gosta"] }
          ],
          tryIt: "Use as suas instruções fixas para obter um plano de treino de 90 minutos para um treino real que vai ter em breve. Faça pelo menos duas mudanças com pedidos de seguimento e guarde-o.",
          youCanNow: "planear um treino seguro e com tempos certos com a ajuda da IA.",
          quickCheck: [
            { objective: "O3", q: "O que é uma progressão num plano de treino?", options: ["Exercícios que vão do simples ao mais difícil", "Uma lista de resultados de jogos", "A ordem em que os jogadores chegam", "Uma pausa para beber água"], answer: 0, why: "Uma progressão constrói as habilidades passo a passo." },
            { objective: "O3", q: "O plano da IA precisa de 20 cones e você tem 8. O que faz?", options: ["Cancela o treino", "Diz à IA que tem 8 cones e pede-lhe para ajustar", "Usa o plano e espera que corra bem", "Compra cones antes do treino"], answer: 1, why: "Dê à IA os seus limites reais para que o plano funcione no campo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Configurar o seu assistente de treino",
        questions: [
          { objective: "O1", q: "Que tarefa é boa para um assistente de IA para treinadores?", options: ["Decidir o regresso ao jogo depois de uma concussão", "Disciplinar um jogador", "Fazer o rascunho de um plano de treino", "Julgar os sentimentos de um jogador"], answer: 2, why: "A IA faz rascunhos; as decisões médicas e pessoais ficam com as pessoas." },
          { objective: "O1", q: "Qual é a regra do treinador para a IA?", options: ["A IA faz o rascunho, o treinador decide", "A IA decide tudo", "Nunca usar IA", "Os jogadores decidem"], answer: 0, why: "Tudo o que a IA produz é um primeiro rascunho." },
          { objective: "O2", q: "O que deve estar nas instruções fixas?", options: ["Nomes dos jogadores", "Dados de saúde dos jogadores", "Notas escolares dos jogadores", "O escalão de idade e a duração do treino"], answer: 3, why: "A informação sobre a equipa ajuda; os dados privados ficam de fora." },
          { objective: "O3", q: "O plano da IA tem um exercício perigoso para crianças de 10 anos. Você:", options: ["Usa-o na mesma", "Troca-o por um exercício adequado à idade", "Torna-o mais difícil", "Tira as pausas para beber água"], answer: 1, why: "A segurança e a adequação à idade vêm primeiro." },
          { objective: "O3", q: "Um jogo reduzido é útil porque:", options: ["É mais longo", "Todos tocam mais vezes na bola", "Precisa de mais material", "Os jogadores ficam em filas"], answer: 1, why: "Menos jogadores quer dizer mais participação." }
        ]
      }
    },
    {
      name: "Capítulo 2: Comunicação, materiais e limites",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mensagens para pais e jogadores",
          minutes: 5,
          goal: "Escrever com a IA uma mensagem clara e simpática para pais ou jogadores e enviá-la por canais aprovados.",
          text: [
            "Os treinadores escrevem muitas mensagens: horários, mudanças, lembretes, regras da equipa. Peça: \"Escreva uma mensagem curta e simpática para os pais sobre as mudanças nos treinos da próxima semana: o treino de terça passa para as 17h, o de quinta é cancelado por causa da reparação do campo. Diga o que devem trazer. Menos de 100 palavras.\"",
            "Verifique os dados, as datas e o tom. As mensagens de grupo são sobre a equipa; nunca fale do desempenho, da saúde ou do comportamento de um jogador numa mensagem de grupo.",
            "Use o meio de comunicação aprovado pela sua escola ou clube. Muitas organizações têm regras para os treinadores que enviam mensagens a menores, por exemplo incluir um dos pais ou outro treinador. As conversas difíceis, como sobre o tempo de jogo ou o comportamento, correm melhor em pessoa ou por telefone, e não em mensagens escritas pela IA."
          ],
          steps: ["Peça à IA um rascunho curto e simpático.", "Verifique os dados, as datas e o tom.", "Mantenha as mensagens de grupo sobre a equipa.", "Envie por canais aprovados.", "Trate as conversas difíceis em pessoa."],
          words: [["Canal aprovado", "o meio de comunicação que a sua escola ou clube permite aos treinadores."], ["Tom", "a forma como uma mensagem soa: simpática, firme, calorosa."]],
          slides: [
            { title: "A IA faz rascunhos de mensagens", bullets: ["Horários, mudanças, lembretes", "Curtas e simpáticas"] },
            { title: "Verifique", bullets: ["Dados e datas", "O tom", "Só assuntos da equipa nos grupos"] },
            { title: "Envie da forma certa", bullets: ["Canais aprovados", "Cumpra as regras sobre mensagens a menores", "Conversas difíceis em pessoa"] }
          ],
          tryIt: "Use a IA para escrever uma mensagem real ou de prática para os pais sobre uma mudança de horário. Verifique cada data e envie-a (ou guarde-a) pelo seu canal aprovado.",
          youCanNow: "escrever mensagens claras para a equipa com a IA e enviá-las da forma certa.",
          quickCheck: [
            { objective: "O4", q: "Sobre o que deve ser uma mensagem de grupo da equipa?", options: ["O comportamento de um jogador", "A lesão de um jogador", "A equipa, como horários e locais", "Quem vai para o banco"], answer: 2, why: "As mensagens de grupo são para notícias da equipa; os assuntos de um jogador são privados." },
            { objective: "O4", q: "A IA escreve uma mensagem para os pais a dizer que o treino é na terça-feira, dia 14. O que faz antes de enviar?", options: ["Envia logo", "Acrescenta mais emojis", "Envia-a da sua conta pessoal só para os jogadores", "Verifica a data no calendário"], answer: 3, why: "A IA pode errar as datas, por isso verifique cada data." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fichas de exercícios e questionários sobre as jogadas",
          minutes: 5,
          goal: "Criar uma ficha de exercício e um questionário de cinco perguntas sobre as jogadas.",
          text: [
            "As fichas de exercícios ajudam os treinadores adjuntos e os jogadores a fazer os exercícios sempre da mesma maneira. Peça: \"Faça uma ficha de uma página para [exercício]: objetivo, montagem, passos, pontos de treino, erros comuns e como o tornar mais fácil ou mais difícil.\" Acrescente um desenho simples numa ferramenta como o Canva ou à mão.",
            "Os questionários ajudam os jogadores a aprender as jogadas e as regras. Peça: \"Escreva cinco perguntas de escolha múltipla sobre a nossa jogada de reposição lateral: [descreva-a]. Uma resposta certa em cada uma, com uma explicação curta.\" Verifique cada resposta contra a sua jogada real.",
            "Use uma ferramenta de questionários como o Google Forms para o partilhar, sem recolher mais informações pessoais do que as necessárias."
          ],
          steps: ["Peça à IA uma ficha de exercício com objetivo, montagem, passos e pontos de treino.", "Acrescente um desenho simples.", "Descreva uma jogada e peça cinco perguntas de questionário.", "Verifique cada resposta contra a sua jogada real.", "Partilhe com um formulário simples, recolhendo o mínimo de informações."],
          words: [["Ficha de exercício", "um guia de uma página que explica como fazer um exercício."], ["Livro de jogadas", "o conjunto de jogadas de uma equipa e as regras para as fazer."]],
          slides: [
            { title: "Ficha de exercício", bullets: ["Objetivo, montagem, passos", "Pontos de treino, erros comuns", "Versões mais fáceis e mais difíceis"] },
            { title: "Questionário sobre as jogadas", bullets: ["Descreva a jogada", "Cinco perguntas com explicações", "Verifique cada resposta"] },
            { title: "Partilhe de forma simples", bullets: ["Google Forms ou parecido", "Recolha o mínimo de informações pessoais"] }
          ],
          tryIt: "Faça com a IA uma ficha de exercício e um questionário de cinco perguntas sobre uma das suas jogadas. Verifique os dois e corrija o que estiver errado.",
          youCanNow: "criar fichas de exercícios e questionários sobre as jogadas com a ajuda da IA.",
          quickCheck: [
            { objective: "O5", q: "Para que serve uma ficha de exercício?", options: ["Para fazer um exercício sempre da mesma maneira", "Para escolher os capitães da equipa", "Para pagar as quotas do clube", "Para reservar um autocarro"], answer: 0, why: "Uma ficha de exercício dá o objetivo, a montagem, os passos e os pontos de treino para que todos o façam da mesma maneira." },
            { objective: "O5", q: "Uma resposta do questionário da IA não corresponde à sua jogada real. O que faz?", options: ["Partilha na mesma", "Corrige a resposta antes de partilhar", "Muda a sua jogada para ficar igual", "Tira o questionário do curso"], answer: 1, why: "Cada resposta do questionário tem de corresponder à forma como a sua equipa faz realmente a jogada." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Limites: privacidade, segurança e justiça",
          minutes: 5,
          goal: "Escrever os seus limites para usar a IA no treino e cumpri-los.",
          text: [
            "Privacidade: nunca cole em ferramentas de IA nomes de jogadores com informações de saúde, lesões, notas escolares, situação familiar, contactos ou fotografias de menores. Use posições ou números. Veja as regras da sua organização sobre que ferramentas podem ser usadas com dados de alunos ou jogadores.",
            "Segurança: a IA pode sugerir exercícios, preparação física ou práticas no calor antigas ou perigosas. Verifique os exercícios com as orientações da sua federação e com o seu fisioterapeuta ou preparador da equipa, e nunca use a IA para decisões médicas, de concussão ou de regresso ao jogo; a formação gratuita HEADS UP do CDC (o centro de saúde pública dos Estados Unidos) é um lugar para aprender o básico sobre concussões.",
            "Justiça e honestidade: as decisões sobre convocatória e tempo de jogo vêm do que você observa e são explicadas aos jogadores em pessoa. Diga às famílias com franqueza que usa a IA para planear, se a sua organização o pedir."
          ],
          steps: ["Escreva a sua regra de privacidade: nada de nomes com informações privadas.", "Escreva a sua regra de segurança: verificar os exercícios; nenhuma decisão médica.", "Escreva a sua regra de justiça: decisões a partir da observação, explicadas em pessoa.", "Veja as regras de tecnologia da sua organização.", "Partilhe os limites com a sua equipa técnica."],
          words: [["Limite", "uma regra que o mantém em segurança enquanto usa uma ferramenta."], ["Federação", "a organização que define as regras da sua modalidade ou do seu nível."]],
          slides: [
            { title: "Privacidade", bullets: ["Nada de nomes com saúde, notas ou dados da família", "Use posições ou números", "Cumpra as regras da sua organização sobre ferramentas"] },
            { title: "Segurança", bullets: ["Verifique os exercícios e a preparação física", "Nenhuma decisão médica ou de regresso ao jogo", "CDC HEADS UP para o básico sobre concussões"] },
            { title: "Justiça", bullets: ["Decisões a partir do que observa", "Explicadas em pessoa"] }
          ],
          sources: [{ name: "CDC: formação HEADS UP sobre concussões", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Tarefa final: escreva os seus limites e as suas instruções fixas e depois faça com a IA um plano de treino, uma mensagem para os pais, uma ficha de exercício e um questionário, verificando cada um e confirmando que não usou dados privados dos atletas.",
          youCanNow: "usar um assistente de IA para treinadores com limites claros de privacidade, segurança e justiça.",
          quickCheck: [
            { objective: "O6", q: "O que é um limite para usar a IA no treino?", options: ["Uma vedação à volta do campo", "Um exercício para defesas", "Uma regra que o mantém em segurança enquanto usa a IA", "Um tipo de gráfico"], answer: 2, why: "Os limites definem o que vai e não vai fazer com a IA." },
            { objective: "O6", q: "Quer a ajuda da IA na recuperação de uma concussão de um jogador. O que faz?", options: ["Cola as notas médicas", "Segue a data de regresso dada pela IA", "Pergunta aos colegas de equipa do jogador", "Deixa isso com os profissionais de saúde"], answer: 3, why: "As decisões de regresso ao jogo depois de uma concussão pertencem aos profissionais de saúde." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Comunicação, materiais e limites",
        questions: [
          { objective: "O4", q: "Onde se deve falar do comportamento de um jogador?", options: ["No grupo de conversa da equipa", "Nas redes sociais", "Numa mensagem de grupo escrita pela IA", "Em privado, em pessoa ou por telefone"], answer: 3, why: "As mensagens de grupo são só sobre a equipa." },
          { objective: "O5", q: "Uma ficha de exercício inclui:", options: ["Objetivo, montagem, passos e pontos de treino", "As notas escolares dos jogadores", "Notas sobre a saúde dos jogadores", "Nada"], answer: 0, why: "Ajuda todos a fazer o exercício da mesma maneira." },
          { objective: "O5", q: "A IA escreve um questionário sobre as jogadas. Antes de partilhar, você:", options: ["Partilha sem ler", "Acrescenta respostas com rasteira", "Verifica cada resposta contra a sua jogada real", "Deixa a IA dar notas aos jogadores"], answer: 2, why: "A IA pode perceber mal a sua jogada." },
          { objective: "O6", q: "O que é seguro colar na IA?", options: ["\"Maria Lopez, rotura do ligamento cruzado, a tomar medicamentos\"", "A morada de um jogador", "A fotografia e o nome completo de um menor", "\"A nossa defesa esquerda perde sempre a marcação nos cantos\""], answer: 3, why: "Posições sem nomes nem dados de saúde protegem a privacidade." },
          { objective: "O6", q: "Quem toma as decisões de regresso ao jogo depois de uma concussão?", options: ["Um assistente de IA", "Os profissionais de saúde", "O capitão da equipa", "Os pais num grupo de conversa"], answer: 1, why: "As decisões médicas pertencem a profissionais qualificados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Assistentes de IA para Treinadores",
    questions: [
      { objective: "O1", q: "Um assistente de IA para treinadores é:", options: ["Um robô no banco", "Um árbitro", "Um assistente de IA geral usado nas tarefas de treino", "Um olheiro pago"], answer: 2, why: "Os treinadores usam assistentes gratuitos no trabalho de treino." },
      { objective: "O1", q: "O que a IA NÃO consegue fazer?", options: ["Ver os seus jogadores e conhecer os sentimentos deles", "Fazer o rascunho de um horário", "Escrever a descrição de um exercício", "Resumir notas"], answer: 0, why: "Ela só sabe o que você lhe diz." },
      { objective: "O1", q: "Quem decide o tempo de jogo?", options: ["O treinador", "A IA", "Um grupo de conversa dos pais", "O adversário"], answer: 0, why: "O tempo de jogo é uma decisão humana." },
      { objective: "O2", q: "As instruções fixas são:", options: ["Um alongamento da equipa", "Um livro de regras", "A informação que você dá à IA no início", "Um troféu"], answer: 2, why: "Fazem as respostas servir para a sua equipa." },
      { objective: "O2", q: "Que regra de segurança cabe nas instruções fixas?", options: ["Nunca descansar", "Pausas para beber água a cada 20 minutos", "Voltas ao campo como castigo", "Saltar o aquecimento"], answer: 1, why: "As regras de segurança fazem parte das instruções." },
      { objective: "O2", q: "O que as instruções fixas devem dizer para nunca incluir?", options: ["A duração do treino", "O escalão de idade", "O tamanho do campo", "Nomes e dados de saúde dos jogadores"], answer: 3, why: "Os dados privados ficam de fora." },
      { objective: "O3", q: "Uma progressão é:", options: ["Um desfile", "Uma fase final", "Exercícios que vão do simples ao mais difícil", "Uma mudança de horário"], answer: 2, why: "As progressões constroem as habilidades passo a passo." },
      { objective: "O3", q: "Os tempos do plano da IA somam 120 minutos para um treino de 90 minutos. Você:", options: ["Faz 120 minutos na mesma", "Salta o aquecimento", "Ignora", "Pede-lhe para corrigir os tempos"], answer: 3, why: "Verifique que os tempos batem certo." },
      { objective: "O3", q: "Só tem 10 bolas. Você:", options: ["Diz à IA e pede-lhe para ajustar", "Cancela o treino", "Compra 50 hoje", "Ignora o plano"], answer: 0, why: "Os pedidos de seguimento adaptam o plano aos seus recursos." },
      { objective: "O4", q: "Uma mensagem para os pais sobre uma mudança de horário deve ser:", options: ["Longa e vaga", "Curta, simpática e com as datas verificadas", "Enviada sem verificar", "Enviada de uma conta pessoal contra as regras do clube"], answer: 1, why: "Clara e certa é o melhor." },
      { objective: "O4", q: "As mensagens de grupo devem ser sobre:", options: ["Os erros de um jogador", "Os detalhes da lesão de um jogador", "A equipa", "Mexericos"], answer: 2, why: "Os assuntos de cada jogador ficam privados." },
      { objective: "O4", q: "As regras para enviar mensagens a menores muitas vezes exigem:", options: ["Incluir um dos pais ou outro treinador", "Mensagens secretas", "Mensagens tarde da noite", "Contas pessoais nas redes sociais"], answer: 0, why: "Estas regras protegem os atletas e os treinadores." },
      { objective: "O4", q: "As conversas difíceis sobre o tempo de jogo correm melhor:", options: ["Numa mensagem escrita pela IA", "Nas redes sociais", "No grupo de conversa", "Em pessoa ou por telefone"], answer: 3, why: "As conversas difíceis precisam de um toque humano." },
      { objective: "O5", q: "Uma ficha de exercício ajuda:", options: ["A esconder o exercício", "Os adjuntos e os jogadores a fazer os exercícios da mesma maneira", "A substituir o treino", "A registar as notas escolares"], answer: 1, why: "Fazer tudo da mesma maneira melhora o treino." },
      { objective: "O5", q: "Um questionário sobre as jogadas verifica:", options: ["A saúde dos jogadores", "Se os jogadores conhecem as jogadas", "As notas escolares dos jogadores", "Os horários dos pais"], answer: 1, why: "Os questionários reforçam a aprendizagem." },
      { objective: "O5", q: "Quando partilha um questionário num formulário, recolha:", options: ["Moradas", "Palavras-passe", "Historial médico", "Só as informações de que precisa"], answer: 3, why: "O mínimo de dados protege os jogadores." },
      { objective: "O6", q: "Um limite é:", options: ["Uma regra que o mantém em segurança enquanto usa uma ferramenta", "Uma vedação", "Um exercício", "Um equipamento"], answer: 0, why: "Os limites evitam o mau uso." },
      { objective: "O6", q: "A IA sugere preparação física intensa com muito calor. Você:", options: ["Faz", "Torna-a mais longa", "Verifica com o seu fisioterapeuta ou preparador e com as orientações da federação", "Tira as pausas para beber água"], answer: 2, why: "A IA pode sugerir práticas perigosas." },
      { objective: "O6", q: "Uma federação é:", options: ["Um ginásio", "Um patrocinador", "Um grupo de pais", "A organização que define as regras da sua modalidade ou do seu nível"], answer: 3, why: "Define as regras oficiais." },
      { objective: "O1", q: "As decisões de convocatória devem vir:", options: ["De palpites da IA", "Do que o treinador observa", "Das redes sociais", "De boatos"], answer: 1, why: "As decisões justas vêm da observação real." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Instruções fixas",
        objective: "O2",
        notYet: "Falta o nível da equipa, a duração do treino ou as regras de segurança.",
        meets: "Nível da equipa, duração, estilo, regras de segurança e uma regra de não usar dados privados.",
        exceeds: "Também indica o material e o espaço, para que os planos sirvam para o campo real."
      },
      {
        name: "Plano de treino",
        objective: "O3",
        notYet: "Os tempos não somam 90 minutos ou um exercício é perigoso para o escalão de idade.",
        meets: "Um plano de 90 minutos com tempos certos e exercícios seguros, mudado pelo menos duas vezes.",
        exceeds: "Tem uma progressão clara e pausas para beber água, e explica porque cada mudança foi feita."
      },
      {
        name: "Mensagem para os pais",
        objective: "O4",
        notYet: "Datas erradas, um tom pouco simpático ou dados privados de jogadores.",
        meets: "Curta, simpática, com as datas verificadas, enviada ou guardada por um canal aprovado.",
        exceeds: "Também diz a quem contactar em caso de dúvidas, cumprindo as regras sobre mensagens a menores."
      },
      {
        name: "Ficha de exercício e questionário",
        objective: "O5",
        notYet: "Um passo ou uma resposta do questionário não corresponde ao exercício ou à jogada real.",
        meets: "Ficha de exercício com objetivo, montagem, passos e pontos de treino; cinco perguntas verificadas.",
        exceeds: "O questionário não recolhe mais informações do que as necessárias e cobre os momentos-chave da jogada."
      },
      {
        name: "Limites e privacidade",
        objective: "O6",
        notYet: "Um pedido tem nomes de jogadores ou dados de saúde, ou a IA tomou uma decisão do treinador.",
        meets: "Limites escritos e cumpridos; nenhum dado privado de atletas usado; decisões tomadas pelo treinador.",
        exceeds: "Os limites também dizem para onde vão as questões médicas e de calor."
      }
    ]
  },
  evaluation: {
    results: [
      "Treinadores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Treinadores que dizem poupar tempo no planeamento semanal e nas mensagens (inquérito de seguimento aos 30 dias)",
      "Clubes ou escolas que adotam limites escritos para o uso da IA pelos seus treinadores",
      "Alunos que começam outro curso da Koach Learn para atletas em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com um assistente de IA gratuito",
      "Uma aplicação de notas ou papel para guardar as instruções fixas e os limites",
      "O horário da sua equipa, a lista do material e uma jogada ou um exercício para trabalhar",
      "Cerca de 60 minutos no total para as lições, as tarefas de prática, as verificações e o questionário"
    ],
    facilitatorNotes: [
      "Faça-o como uma formação de treinadores: escrevam juntos as instruções fixas e depois cada treinador faz um plano para a sua própria equipa.",
      "Partilhe as regras do seu clube ou escola sobre mensagens a menores e dados dos alunos antes da Lição 4.",
      "Confirme que ninguém cola nomes de jogadores, dados de saúde ou fotografias de menores numa ferramenta de IA.",
      "Peça a um fisioterapeuta, preparador ou responsável pela segurança para rever as orientações sobre calor e preparação física.",
      "Avalie a tarefa final com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
