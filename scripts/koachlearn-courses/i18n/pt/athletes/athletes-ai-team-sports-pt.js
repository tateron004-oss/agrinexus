"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-team-sports.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-ai-team-sports-pt",
  lang: "pt",
  translationOf: "athletes-ai-team-sports",
  category: "Athletes",
  name: "IA para Desportos de Equipa",
  skills: "Registar estatísticas simples da equipa, Encontrar padrões de formações e de jogadas, Escrever um resumo de observação do adversário com IA, Planear a comunicação com a equipa, Proteger a privacidade dos jogadores e a justiça",
  outcome: "usar uma folha de cálculo partilhada e um assistente de IA para registar estatísticas simples de uma equipa, encontrar um padrão de formação ou de jogada, escrever um resumo de uma página sobre o adversário e partilhá-lo com a equipa de uma forma que proteja a privacidade dos jogadores.",
  about: [
    "Este curso é para treinadores, gestores de equipa, capitães e analistas de equipa em qualquer desporto coletivo: basquetebol, futebol, voleibol, futebol americano, hóquei, basebol, softbol e outros.",
    "As equipas profissionais têm departamentos de análise. Você pode fazer uma versão simples com uma folha de cálculo e um assistente de IA gratuito: registar o que importa, ver padrões, observar adversários e comunicar com clareza com os jogadores e as famílias.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Uma verificação de conhecimentos fecha cada capítulo, e um questionário de 20 perguntas fecha o curso. Os dados apoiam a decisão do treinador; nunca a substituem."
  ],
  finalTask: "Para a sua equipa, crie uma folha de estatísticas partilhada para três jogos ou treinos, encontre um padrão de formação ou de jogada com a ajuda da IA, escreva um resumo de uma página sobre um adversário real usando vídeos ou resultados públicos, e escreva uma mensagem à equipa que partilhe o ponto principal sem expor informações privadas de nenhum jogador.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Treinadores, gestores de equipa, capitães e analistas de equipa em qualquer desporto coletivo, como basquetebol, futebol, voleibol, futebol americano, hóquei, basebol e softbol.",
    startingPoint: "Conhecem bem o seu desporto e a sua equipa e usam um smartphone e talvez uma folha de cálculo. A maioria regista poucas estatísticas ou regista-as de forma irregular, observa os adversários de memória e não definiu regras para partilhar dados dos jogadores nem para usar IA com eles.",
    gap: "Sem estatísticas e observação regulares, as equipas perdem padrões que podiam mudar os treinos e os planos de jogo, e uma partilha descuidada pode expor informações privadas dos jogadores. Uma folha partilhada simples, um uso cuidadoso da IA e regras claras de privacidade ajudam as equipas a melhorar enquanto protegem os jogadores.",
    constraints: [
      "Linguagem simples, com um nível de leitura de cerca do 8.º ano",
      "Um telefone ou computador com o Google Sheets gratuito e um assistente de IA gratuito",
      "Cerca de 60 minutos de lições, mais as estatísticas de três jogos ou treinos",
      "Regras da escola, da liga e do clube sobre dados de alunos, aplicações aprovadas, troca de vídeos e contacto com menores",
      "Nada de nomes completos nem informações de saúde, escolares ou de contacto nas folhas de estatísticas ou nas ferramentas de IA"
    ],
    prerequisites: "Nenhum. O curso \"Análise de Vídeo e Inteligência de Jogo\" ajuda a marcar vídeos de jogos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a identidade da sua equipa", action: "escolher de três a cinco estatísticas da equipa e escrever uma definição clara para cada uma", standard: "com cada estatística possível de recolher em todos os jogos e uma pessoa encarregada de a recolher" },
    { id: "O2", condition: "Usando o Google Sheets", action: "criar uma folha de estatísticas partilhada da equipa com um separador de resumo e acesso seguro", standard: "com acesso de edição só para a equipa técnica que recolhe os dados, só de leitura para os outros, nunca público, e sem informações médicas, de notas escolares ou de contacto" },
    { id: "O3", condition: "Com estatísticas de pelo menos três jogos ou treinos", action: "identificar um padrão de formação ou de jogada usando ordenação, filtros ou um assistente de IA", standard: "só com números ou iniciais dos jogadores, as contas da IA verificadas, e amostras pequenas tratadas como perguntas" },
    { id: "O4", condition: "Com resultados públicos e vídeos permitidos de um adversário real", action: "escrever um resumo de observação de uma página sobre o ataque, a defesa, os jogadores principais e três chaves para os vencer", standard: "com cada ponto tirado das suas próprias notas e cumprindo as regras de observação da liga" },
    { id: "O5", condition: "Com os seus dados e o seu resumo de observação", action: "escrever uma mensagem curta à equipa com um a três pontos principais", standard: "enviada pelo canal aprovado da equipa, com as observações individuais mantidas em privado" },
    { id: "O6", condition: "Para os dados da sua equipa", action: "escrever regras de dados da equipa que protejam a privacidade dos jogadores e mantenham as decisões justas", standard: "cobrindo o que recolher, onde guardar, o que nunca vai para a IA, quem aprova as aplicações e como as decisões são explicadas aos jogadores" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Dados da equipa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher as estatísticas da equipa que importam",
          minutes: 5,
          goal: "Escolher de três a cinco estatísticas ligadas à forma como a sua equipa quer jogar.",
          text: [
            "A análise de equipa começa pela identidade da sua equipa. Uma equipa de basquetebol de contra-ataque rápido preocupa-se com os pontos em transição e as perdas de bola. Uma equipa de futebol de posse de bola preocupa-se com os passes certos e os remates de dentro da área. Uma equipa de voleibol preocupa-se com a receção do serviço e a percentagem de recuperação do serviço.",
            "Escolha de três a cinco estatísticas que consegue mesmo recolher em todos os jogos com as pessoas que tem: um gestor, um pai voluntário, um jogador lesionado, ou o vídeo depois do jogo.",
            "Escreva uma definição clara para cada uma, para que todos contem da mesma forma: \"Uma perda de bola é qualquer posse perdida sem remate.\""
          ],
          steps: ["Escreva a identidade da sua equipa numa frase.", "Faça uma lista de estatísticas que combinem com ela.", "Escolha de três a cinco que consegue recolher em todos os jogos.", "Escreva uma definição clara para cada uma.", "Decida quem as recolhe."],
          words: [["Análise de equipa", "usar números sobre uma equipa para perceber e melhorar a forma como ela joga."], ["Definição", "uma regra clara sobre o que conta exatamente."]],
          slides: [
            { title: "Comece pela identidade", bullets: ["Contra-ataque? Posse de bola? Defesa primeiro?", "Estatísticas que combinem com a forma de jogar"] },
            { title: "Escolha 3-5 estatísticas", bullets: ["Que consegue recolher em todos os jogos", "Com as pessoas que tem"] },
            { title: "Defina cada uma", bullets: ["Todos contam da mesma forma", "Decida quem a recolhe"] }
          ],
          tryIt: "Escreva a identidade da sua equipa numa frase. Peça a um assistente de IA que sugira estatísticas que combinem com ela, depois escolha de três a cinco e escreva as definições.",
          youCanNow: "escolher e definir estatísticas que combinem com a forma como a sua equipa joga.",
          quickCheck: [
            { objective: "O1", q: "Que estatísticas servem para uma equipa de futebol de posse de bola?", options: ["Passes certos e remates de dentro da área", "Lances livres", "Receção do serviço", "Home runs"], answer: 0, why: "As estatísticas devem combinar com a forma como a sua equipa quer jogar." },
            { objective: "O1", q: "Dois voluntários contam as perdas de bola de forma diferente. O que faz?", options: ["Faz a média dos números deles", "Deixa de registar as perdas de bola", "Deixa cada um contar à sua maneira", "Escreve uma definição clara que todos usam"], answer: 3, why: "Uma definição clara faz com que todos contem da mesma forma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Uma folha de estatísticas partilhada da equipa",
          minutes: 5,
          goal: "Criar uma folha do Google partilhada para as estatísticas da equipa, com acesso seguro.",
          text: [
            "Use uma folha do Google Sheets com um separador por jogo, ou uma tabela longa com as colunas: Data, Adversário, Período ou Set, Formação, e as suas estatísticas. Um separador de resumo pode somar a época.",
            "Partilhe-a só com a equipa técnica e os gestores que precisam de editar. Use ligações só de leitura para os outros, e nunca torne pública na internet uma folha com informações dos jogadores.",
            "Guarde só estatísticas de jogo nesta folha. Não coloque notas médicas, notas escolares, informações da família nem contactos numa folha de estatísticas da equipa; isso pertence aos sistemas oficiais da sua escola, com as proteções de privacidade certas."
          ],
          steps: ["Crie uma folha do Google com colunas claras.", "Adicione um separador de resumo para os totais da época.", "Dê acesso de edição só à equipa técnica que recolhe os dados.", "Use acesso só de leitura para os outros; nunca público.", "Deixe de fora informações médicas, notas escolares e contactos."],
          words: [["Folha partilhada", "uma folha de cálculo que várias pessoas podem abrir, com um acesso que você controla."], ["Só de leitura", "as pessoas podem ver, mas não podem mudar."]],
          slides: [
            { title: "Organização da folha", bullets: ["Data, Adversário, Período, Formação", "As suas 3-5 estatísticas", "Separador de resumo da época"] },
            { title: "Acesso", bullets: ["Edição: equipa técnica que recolhe", "Só de leitura para os outros", "Nunca público"] },
            { title: "Deixe de fora", bullets: ["Notas médicas", "Notas escolares e dados da família", "Contactos"] }
          ],
          tryIt: "Crie a folha de estatísticas da sua equipa, introduza um jogo passado de memória ou a partir de uma ficha de jogo, e verifique as definições de partilha.",
          youCanNow: "criar uma folha de estatísticas partilhada da equipa com acesso seguro.",
          quickCheck: [
            { objective: "O2", q: "Para que serve um separador de resumo na folha da equipa?", options: ["Guardar os números de telefone dos jogadores", "Somar a época", "Esconder os dados", "Enviar mensagens aos jogadores"], answer: 1, why: "Um separador de resumo pode somar a época a partir de cada jogo." },
            { objective: "O2", q: "Um pai pede a ligação da folha de estatísticas da equipa. O que partilha?", options: ["Acesso de edição", "Uma ligação pública na internet", "Uma ligação só de leitura, se as suas regras o permitirem", "A pasta inteira com as notas médicas"], answer: 2, why: "Use acesso só de leitura para quem não recolhe dados, e nunca a torne pública." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar padrões de formações e de jogadas",
          minutes: 6,
          goal: "Usar a sua folha e um assistente de IA para ver um padrão de formação ou de jogada.",
          text: [
            "Depois de alguns jogos, procure padrões: Que formações marcam mais do que os adversários? Em que período ou set temos mais dificuldades? Que tipo de jogada dá mais pontos?",
            "Use a ordenação, os filtros ou uma tabela dinâmica no Google Sheets. Ou copie a tabela (com as iniciais ou os números dos jogadores em vez dos nomes completos) para um assistente de IA e pergunte: \"Que formações têm a melhor diferença de pontos? Qual é o período mais fraco? Mostre as contas.\" Verifique as contas dele na folha.",
            "Amostras pequenas enganam. Uma formação que jogou quatro minutos não está provada. Trate os padrões como perguntas para o treino e para o vídeo, não como respostas finais; quem decide é o treinador."
          ],
          steps: ["Ordene ou filtre por formação e por período.", "Com a IA, use números ou iniciais dos jogadores, não nomes completos.", "Peça à IA que encontre padrões e mostre as contas.", "Verifique as contas.", "Transforme um padrão numa pergunta para o treino ou para o vídeo."],
          words: [["Diferença de pontos", "pontos marcados menos pontos sofridos."], ["Tabela dinâmica", "uma ferramenta da folha de cálculo que agrupa e soma dados, como os pontos por formação."], ["Tamanho da amostra", "a quantidade de dados que você tem; amostras pequenas podem enganar."]],
          slides: [
            { title: "Perguntas sobre padrões", bullets: ["Que formações marcam mais do que os adversários?", "Qual é o período mais fraco?", "Que tipo de jogada marca mais?"] },
            { title: "Encontre-os", bullets: ["Ordenação, filtros ou tabela dinâmica", "IA com iniciais, não nomes completos", "\"Mostre as contas\" e verifique-as"] },
            { title: "Cuidado", bullets: ["Amostras pequenas enganam", "Os padrões são perguntas", "Quem decide é o treinador"] }
          ],
          tryIt: "Introduza pelo menos dois jogos na sua folha. Peça a um assistente de IA que encontre o melhor e o pior período ou formação e mostre as contas. Verifique-as e escreva uma pergunta para o treino.",
          youCanNow: "encontrar padrões de formações e de jogadas e tratá-los como perguntas para o treinador.",
          quickCheck: [
            { objective: "O3", q: "O que deve pedir à IA além de encontrar padrões de formações?", options: ["Que mostre as contas", "Que escolha os titulares", "Que classifique os jogadores em público", "Que adivinhe os jogos em falta"], answer: 0, why: "Peça à IA que mostre as contas para as poder verificar na folha." },
            { objective: "O3", q: "O seu terceiro período foi fraco em todos os jogos até agora. O que faz com este padrão?", options: ["Manda a equipa toda para o banco", "Publica-o na internet", "Ignora-o", "Leva-o para o treino e para o vídeo como uma pergunta para o treinador"], answer: 3, why: "Trate os padrões como perguntas para o treino e para o vídeo; quem decide é o treinador." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Dados da equipa",
        questions: [
          { objective: "O1", q: "Por onde deve começar a análise de equipa?", options: ["Pelo que os profissionais registam", "Por todas as estatísticas possíveis", "Pela identidade da sua equipa e a forma como quer jogar", "Pelos números das redes sociais"], answer: 2, why: "As estatísticas devem combinar com o seu estilo de jogo." },
          { objective: "O1", q: "Porque escrever uma definição para cada estatística?", options: ["Para que todos contem da mesma forma", "Para a tornar mais longa", "Para confundir os adversários", "Não é preciso"], answer: 0, why: "Contar sempre da mesma forma torna os dados fiáveis." },
          { objective: "O2", q: "Quem deve ter acesso de edição à folha de estatísticas da equipa?", options: ["Toda a gente na internet", "Os treinadores adversários", "Os adeptos", "A equipa técnica que recolhe as estatísticas"], answer: 3, why: "Limite a edição às pessoas que precisam dela." },
          { objective: "O2", q: "O que NÃO deve ir para uma folha de estatísticas da equipa?", options: ["Pontos por período", "As notas médicas de um jogador", "Perdas de bola", "Formações"], answer: 1, why: "As informações médicas pertencem a sistemas oficiais protegidos." },
          { objective: "O3", q: "Uma formação jogou quatro minutos e ficou com +6. Você deve:", options: ["Pô-la a começar todos os jogos", "Tratar isso como uma pergunta para analisar melhor", "Ignorar todos os dados", "Publicar isso na internet"], answer: 1, why: "Amostras pequenas podem enganar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Observação e comunicação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Observar um adversário com IA",
          minutes: 6,
          goal: "Escrever um resumo de uma página sobre o adversário a partir de informação pública.",
          text: [
            "Observar um adversário quer dizer aprender como ele joga antes de o defrontar. Use fontes públicas: resultados passados, fichas de jogo publicadas, páginas de estatísticas da liga e vídeos de jogos que a sua equipa tem ou que estão publicados. Cumpra as regras da sua liga sobre troca de vídeos e observação.",
            "Veja os jogos com três perguntas: O que fazem mais no ataque? O que fazem mais na defesa? Quem são os jogadores principais e o que gostam de fazer?",
            "Cole as suas notas num assistente de IA e peça: \"Transforme estas notas de observação num resumo de uma página: o ataque, a defesa, os jogadores principais e três chaves para os vencer. Pontos curtos.\" Verifique que cada ponto veio das suas notas e não de suposições da IA."
          ],
          steps: ["Junte resultados públicos, estatísticas e vídeos permitidos.", "Veja os jogos com três perguntas.", "Escreva notas com os minutos do vídeo.", "Peça à IA um resumo de uma página só a partir das suas notas.", "Verifique cada ponto com as suas notas."],
          words: [["Relatório de observação", "um resumo de como um adversário joga e de como o vencer."], ["Tendência", "algo que uma equipa ou um jogador faz muitas vezes numa certa situação."]],
          slides: [
            { title: "Fontes públicas", bullets: ["Resultados e fichas de jogo", "Páginas de estatísticas da liga", "Vídeos de jogos permitidos"] },
            { title: "Três perguntas", bullets: ["O ataque deles", "A defesa deles", "Os jogadores principais e o que gostam de fazer"] },
            { title: "Resumo com IA", bullets: ["Só a partir das suas notas", "Três chaves para os vencer", "Verifique cada ponto"] }
          ],
          tryIt: "Escolha um adversário real com quem vai jogar em breve. Junte informação pública, escreva notas com as três perguntas e use a IA para fazer um resumo de uma página. Verifique cada ponto.",
          youCanNow: "escrever um resumo de uma página sobre o adversário a partir de fontes públicas, com a ajuda da IA.",
          quickCheck: [
            { objective: "O4", q: "Qual destas é uma das três perguntas de observação?", options: ["Qual é a mascote deles?", "O que fazem mais no ataque?", "Quantos adeptos têm?", "De que cor são as camisolas deles?"], answer: 1, why: "Observe o ataque, a defesa e os jogadores principais." },
            { objective: "O4", q: "Você quer um vídeo de um adversário que não é público. O que faz?", options: ["Filma o treino deles às escondidas", "Pede a um amigo da equipa deles que o envie", "Cumpre as regras da sua liga sobre troca de vídeos", "Usa a IA para adivinhar o que eles fazem"], answer: 2, why: "Cumpra as regras da sua liga sobre troca de vídeos e observação." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Comunicação clara com a equipa",
          minutes: 5,
          goal: "Transformar dados e observação em mensagens curtas e claras para a equipa.",
          text: [
            "Os jogadores não precisam de todos os números. Precisam de um a três pontos claros: \"Eles fazem pressão depois de cada cesto marcado. Reponham a bola pelo meio.\" As mensagens curtas ficam na memória.",
            "Use a IA para transformar o seu resumo em várias versões: uma conversa de 30 segundos para o balneário, um gráfico de um slide para a sessão de vídeo e uma mensagem curta para a aplicação oficial de comunicação da equipa. Cumpra as regras da sua escola sobre como os treinadores contactam os jogadores, sobretudo os menores.",
            "Elogie em público, corrija em privado. As mensagens à equipa falam da equipa, não dos erros de um jogador."
          ],
          steps: ["Escolha de um a três pontos principais.", "Peça à IA uma conversa de 30 segundos, um slide e uma mensagem curta.", "Envie pelo canal oficial da sua equipa.", "Mantenha as observações individuais em privado."],
          words: [["Ponto principal", "a única coisa de que os jogadores se têm de lembrar."], ["Canal oficial", "o meio de comunicação que a sua escola ou clube aprova para as mensagens da equipa."]],
          slides: [
            { title: "Menos é mais", bullets: ["De um a três pontos", "As mensagens curtas ficam na memória"] },
            { title: "Três versões com IA", bullets: ["Conversa de 30 segundos no balneário", "Gráfico de um slide", "Mensagem curta à equipa"] },
            { title: "Respeito", bullets: ["Use os canais oficiais", "Elogie em público, corrija em privado"] }
          ],
          tryIt: "Pegue no seu resumo de observação e use a IA para fazer uma conversa de 30 segundos e uma mensagem de três frases à equipa, com no máximo três pontos principais.",
          youCanNow: "transformar dados em mensagens curtas, claras e respeitosas para a equipa.",
          quickCheck: [
            { objective: "O5", q: "De que precisam os jogadores numa mensagem à equipa?", options: ["De um a três pontos claros", "De todos os números da folha", "De um relatório longo", "Das estatísticas de outras equipas"], answer: 0, why: "As mensagens curtas, com poucos pontos claros, ficam na memória." },
            { objective: "O5", q: "Um jogador continua a cometer o mesmo erro. Como trata disso?", options: ["Aponta o erro no grupo da equipa", "Publica-o na página da equipa", "Mostra-o no slide da sessão de vídeo", "Fala com o jogador em privado"], answer: 3, why: "Elogie em público, corrija em privado." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Privacidade e justiça nos dados da equipa",
          minutes: 5,
          goal: "Definir regras de dados da equipa que protejam os jogadores e mantenham as decisões justas.",
          text: [
            "Os dados dos jogadores são pessoais. As estatísticas, os vídeos e sobretudo as informações de saúde, de aparelhos de monitorização e escolares precisam de cuidado. Recolha só o que precisa, guarde em locais aprovados e apague o que já não precisa, de acordo com as regras da sua escola.",
            "Não cole nomes completos, informações de saúde nem dados privados em ferramentas de IA. Use números ou iniciais. Muitas escolas e ligas têm regras sobre dados de alunos e aplicações aprovadas; pergunte ao seu diretor desportivo.",
            "Justiça: os números podem não mostrar coisas como o esforço, a liderança ou a defesa que não aparece na ficha de jogo, e amostras pequenas podem ser injustas para os suplentes. Use os dados para fazer melhores perguntas e explique as decisões aos jogadores como pessoas."
          ],
          steps: ["Recolha só o que precisa.", "Guarde em locais aprovados.", "Com a IA, use números ou iniciais.", "Pergunte ao seu diretor desportivo sobre as regras de dados e de aplicações.", "Explique as decisões aos jogadores como pessoas."],
          words: [["Dados de alunos", "informações sobre alunos, que as escolas têm de proteger."], ["Viés", "uma injustiça que pode vir de dados incompletos ou de suposições."]],
          slides: [
            { title: "Os dados dos jogadores são pessoais", bullets: ["Recolha só o que precisa", "Só em locais aprovados", "Apague o que já não precisa"] },
            { title: "Com a IA", bullets: ["Números ou iniciais", "Sem dados de saúde nem privados", "Veja as regras de aplicações da escola"] },
            { title: "Justiça", bullets: ["Os números não mostram esforço nem liderança", "Amostras pequenas podem ser injustas", "Explique as decisões aos jogadores"] }
          ],
          tryIt: "Tarefa final: escreva cinco regras de dados da equipa, depois termine a sua folha de estatísticas, um padrão, o seu resumo de observação de uma página e uma mensagem à equipa que proteja a privacidade dos jogadores.",
          youCanNow: "usar os dados da equipa de uma forma que proteja os jogadores e mantenha as decisões justas.",
          quickCheck: [
            { objective: "O6", q: "O que deve fazer com os dados dos jogadores de que já não precisa?", options: ["Guardá-los para sempre", "Apagá-los de acordo com as regras da sua escola", "Partilhá-los com outras equipas", "Publicá-los na internet"], answer: 1, why: "Recolha só o que precisa e apague o que já não precisa, segundo as regras da sua escola." },
            { objective: "O6", q: "Um suplente tem números fracos de apenas seis minutos jogados. O que é justo?", options: ["Tirá-lo da equipa", "Partilhar as estatísticas dele com todos", "Tratar a amostra pequena com cuidado e falar com ele como pessoa", "Nunca mais o pôr a jogar"], answer: 2, why: "Amostras pequenas podem ser injustas para os suplentes; explique as decisões aos jogadores como pessoas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Observação e comunicação",
        questions: [
          { objective: "O4", q: "Qual destas é uma fonte justa para a observação?", options: ["Filmar às escondidas o treino fechado deles", "Piratear a aplicação deles", "Pedir as palavras-passe aos jogadores deles", "Fichas de jogo públicas e vídeos de jogos permitidos"], answer: 3, why: "Use fontes públicas e permitidas, cumprindo as regras da liga." },
          { objective: "O4", q: "A IA acrescenta um ponto principal que não está nas suas notas. Você:", options: ["Retira-o ou verifica-o você mesmo", "Mantém-no", "Põe-no a negrito", "Diz à equipa que é verdade"], answer: 0, why: "Use só o que as suas notas confirmam." },
          { objective: "O5", q: "Quantos pontos principais deve ter uma mensagem à equipa?", options: ["Vinte", "Nenhum", "De um a três", "Todas as estatísticas"], answer: 2, why: "As mensagens curtas ficam na memória." },
          { objective: "O5", q: "Onde devem ser feitas as correções individuais?", options: ["No grupo de conversa da equipa", "Nas redes sociais", "À frente dos adeptos", "Em privado"], answer: 3, why: "Elogie em público, corrija em privado." },
          { objective: "O6", q: "O que deve colar na IA em vez dos nomes dos jogadores?", options: ["Nomes completos e datas de nascimento", "Números ou iniciais", "Notas médicas", "Moradas"], answer: 1, why: "Isto protege a privacidade dos jogadores." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Desportos de Equipa",
    questions: [
      { objective: "O1", q: "Análise de equipa quer dizer:", options: ["Contar só os adeptos", "Substituir o treinador", "Usar números para perceber e melhorar a forma como uma equipa joga", "Vender bilhetes"], answer: 2, why: "Ajuda a tomar melhores decisões para a equipa." },
      { objective: "O1", q: "Uma equipa de contra-ataque rápido deve registar:", options: ["Pontos em transição e perdas de bola", "As cores das camisolas", "Os horários do autocarro", "O tamanho do público"], answer: 0, why: "Estas combinam com um estilo de contra-ataque rápido." },
      { objective: "O1", q: "Com quantas estatísticas da equipa deve começar?", options: ["De três a cinco", "Cinquenta", "Nenhuma", "Cem"], answer: 0, why: "Poucas estatísticas que consiga recolher em todos os jogos." },
      { objective: "O1", q: "Quem pode ajudar a recolher as estatísticas?", options: ["O árbitro", "O adversário", "Um gestor, um voluntário ou um jogador lesionado", "Ninguém"], answer: 2, why: "Use as pessoas que tem." },
      { objective: "O2", q: "Uma folha de estatísticas da equipa deve ser:", options: ["Pública na internet", "Partilhada só com quem precisa dela", "Enviada por email aos adversários", "Impressa para os adeptos"], answer: 1, why: "Limite o acesso para proteger os jogadores." },
      { objective: "O2", q: "Acesso só de leitura quer dizer que as pessoas:", options: ["Podem apagá-la", "Podem editar tudo", "Não a podem abrir", "Podem ver, mas não podem mudar"], answer: 3, why: "Protege os seus dados." },
      { objective: "O3", q: "A diferença de pontos é:", options: ["O total de pontos", "Só os lances livres", "Os pontos marcados menos os pontos sofridos", "O seu número de seguidores"], answer: 2, why: "Mostra como uma formação se sai." },
      { objective: "O3", q: "Uma tabela dinâmica:", options: ["É um tipo de exercício", "É um movimento de basquetebol", "Apaga linhas", "Agrupa e soma dados"], answer: 3, why: "Resume os dados depressa." },
      { objective: "O3", q: "Quando pergunta à IA sobre formações, peça-lhe também que:", options: ["Mostre as contas", "Escolha os titulares", "Publique os resultados", "Adivinhe"], answer: 0, why: "Você precisa de verificar o trabalho dela." },
      { objective: "O3", q: "Os padrões dos dados devem ser tratados como:", options: ["Respostas finais", "Perguntas para o treino e para o vídeo", "Segredos", "Publicações nas redes sociais"], answer: 1, why: "Os dados apoiam a decisão do treinador." },
      { objective: "O4", q: "Um relatório de observação resume:", options: ["Só as suas próprias estatísticas", "Os lanches da equipa", "Como um adversário joga e como o vencer", "Os nomes dos árbitros"], answer: 2, why: "Prepara a sua equipa." },
      { objective: "O4", q: "Uma tendência é:", options: ["Algo que uma equipa faz muitas vezes numa situação", "Uma jogada que acontece uma só vez", "Uma regra", "Um resultado"], answer: 0, why: "As tendências ajudam a prever o que eles vão fazer." },
      { objective: "O4", q: "A observação deve cumprir:", options: ["Nenhuma regra", "Os desejos do adversário", "As modas das redes sociais", "As regras da sua liga sobre vídeos e observação"], answer: 3, why: "As ligas definem regras justas de observação." },
      { objective: "O4", q: "Os resumos de observação feitos com IA devem vir de:", options: ["Suposições da IA", "Só das suas próprias notas", "Boatos", "Comentários de adeptos"], answer: 1, why: "As notas são as suas provas." },
      { objective: "O5", q: "Uma conversa de 30 segundos no balneário deve ter:", options: ["Todas as estatísticas", "De um a três pontos principais", "Nenhum ponto", "Dez slides"], answer: 1, why: "Os jogadores lembram-se de poucos pontos claros." },
      { objective: "O5", q: "Os treinadores devem contactar os jogadores através:", options: ["De qualquer aplicação ao acaso", "De contas secretas", "De comentários públicos", "Do canal aprovado da escola ou do clube"], answer: 3, why: "As regras protegem os menores e os treinadores." },
      { objective: "O6", q: "Que dados precisam de mais cuidado?", options: ["Informações de saúde e escolares", "Resultados finais", "Datas dos jogos", "Cores da equipa"], answer: 0, why: "São privados e protegidos." },
      { objective: "O6", q: "Quem lhe pode dizer que aplicações a sua escola permite para dados de alunos?", options: ["Um adepto", "Uma IA", "O diretor desportivo", "Um adversário"], answer: 2, why: "As escolas definem as regras de dados." },
      { objective: "O6", q: "As fichas de jogo podem não mostrar:", options: ["Pontos", "Ressaltos", "Resultados finais", "Esforço, liderança e defesa sem bola"], answer: 3, why: "Nem tudo aparece nos números." },
      { objective: "O6", q: "Quando uma decisão usa dados, os treinadores devem:", options: ["Escondê-la", "Explicá-la aos jogadores como pessoas", "Culpar a folha de cálculo", "Publicá-la"], answer: 1, why: "Os jogadores merecem respeito e clareza." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      2,
      4,
      8,
      10,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Folha de estatísticas",
        objective: "O2",
        notYet: "Menos de três jogos, estatísticas pouco claras, ou partilha insegura ou dados privados na folha.",
        meets: "De três a cinco estatísticas definidas para três jogos ou treinos, um separador de resumo e acesso seguro conforme a função de cada pessoa.",
        exceeds: "Há uma pessoa encarregada de cada estatística e as definições estão num separador que todos podem ler."
      },
      {
        name: "Padrão encontrado",
        objective: "O3",
        notYet: "Nenhum padrão, contas da IA não verificadas, ou nomes completos usados com a IA.",
        meets: "Um padrão de formação ou de jogada com as contas verificadas, usando só números ou iniciais.",
        exceeds: "Indica o tamanho da amostra e transforma o padrão numa pergunta de treino ou de vídeo para o treinador."
      },
      {
        name: "Resumo de observação",
        objective: "O4",
        notYet: "Pontos que não vieram das notas, ou fontes fora das regras da liga.",
        meets: "Uma página com o ataque, a defesa, os jogadores principais e três chaves, com cada ponto tirado das notas do aluno e de fontes permitidas.",
        exceeds: "Inclui os minutos do vídeo que mostram cada ponto principal."
      },
      {
        name: "Mensagem à equipa e privacidade",
        objective: "O5",
        notYet: "Pontos a mais, ou é partilhado o erro de um jogador ou informação privada.",
        meets: "De um a três pontos principais enviados pelo canal aprovado, sem informações privadas dos jogadores.",
        exceeds: "Versões para uma conversa no balneário, um slide e uma mensagem, todas a respeitar a privacidade."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam a tarefa final e têm Atinge ou Supera em todas as linhas da grelha",
      "Equipas que ainda recolhem as estatísticas definidas 30 dias depois (inquérito de seguimento)",
      "Treinadores que relatam uma mudança no treino ou no plano de jogo a partir de um padrão ou de um resumo de observação",
      "Equipas que adotam regras escritas de privacidade dos dados aprovadas pelo diretor desportivo"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Uma conta Google gratuita para o Google Sheets",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Resultados públicos, fichas de jogo ou vídeos permitidos de um adversário",
      "As regras da sua escola ou liga sobre dados de alunos e aplicações aprovadas",
      "Cerca de 60 minutos de lições, mais as estatísticas de três jogos ou treinos"
    ],
    facilitatorNotes: [
      "Confirme com o diretor desportivo que aplicações estão aprovadas para dados de alunos antes de as equipas criarem as folhas.",
      "Mostre como trocar os nomes por números ou iniciais antes de colar qualquer coisa na IA.",
      "Lembre à equipa técnica que as informações de saúde, escolares e de contacto nunca vão para a folha de estatísticas.",
      "Cumpra as regras da liga sobre observação e troca de vídeos; não filme os treinos fechados de outras equipas.",
      "Fale sobre justiça: os dados levantam perguntas, quem decide é o treinador, e as decisões são explicadas aos jogadores como pessoas."
    ]
  }
};
