"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-biomechanics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// General education only: technique and injury questions go to the coach, athletic trainer, physical therapist or doctor.

module.exports = {
  id: "athletes-ai-biomechanics-pt",
  lang: "pt",
  translationOf: "athletes-ai-biomechanics",
  category: "Athletes",
  name: "Biomecânica com IA",
  skills: "Explicar termos básicos de biomecânica, Filmar um movimento para análise, Dividir um gesto técnico em fases, Usar ferramentas de estimativa de pose e de revisão imagem a imagem, Comparar a técnica antes e depois com o seu treinador",
  outcome: "filmar um movimento desportivo dos ângulos certos, dividi-lo em fases, usar a revisão imagem a imagem (e, se quiser, uma ferramenta gratuita de estimativa de pose) para descrever um ponto da técnica e montar uma comparação de antes e depois para rever com o seu treinador.",
  about: [
    "A biomecânica é o estudo de como o corpo se move. Este curso é para atletas e treinadores que querem entender melhor a técnica com a câmara do telefone e ferramentas de IA, em desportos com corrida de velocidade, saltos, lançamentos, remates, batidas e chutos.",
    "Você vai aprender alguns termos importantes, filmar bem um movimento, dividi-lo em fases e usar câmara lenta, revisão imagem a imagem e ferramentas de pose com IA para ver o que está a acontecer. Depois vai comparar o antes e o depois com o seu treinador.",
    "Isto é educação geral. As mudanças de técnica devem vir do seu treinador, e as perguntas sobre dor, lesões ou regresso ao jogo são para o seu preparador físico (athletic trainer), um fisioterapeuta ou um médico. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\"; há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha um movimento do seu desporto. Filme-o de lado e de frente, divida-o em fases, use a revisão imagem a imagem para descrever um ponto da técnica com capturas de ecrã, combine uma indicação com o seu treinador, pratique-a e filme outra vez duas semanas depois para uma comparação de antes e depois, lado a lado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas e treinadores de desportos com corrida de velocidade, saltos, lançamentos, remates, batidas e chutos, que querem ver a técnica com mais clareza usando a câmara do telefone e ferramentas de IA gratuitas.",
    startingPoint: "Sabem gravar vídeo no telefone e vê-lo depois. A maioria nunca filmou para análise, nunca dividiu um gesto técnico em fases nem usou uma ferramenta de estimativa de pose.",
    gap: "A técnica é difícil de ver à velocidade normal, e um vídeo mal filmado ou números de aplicações em que se confia demais levam a conclusões erradas. Os alunos precisam de filmar bem, descrever um ponto com provas e confirmar as mudanças com o treinador, para que o tempo de treino vá para a correção certa.",
    constraints: [
      "Palavras simples; alguns termos técnicos explicados na primeira vez que aparecem",
      "Aparelhos: um telefone com câmara lenta; uma aplicação de pose gratuita é opcional",
      "Tempo: cerca de cinco minutos por lição, mais as filmagens no treino",
      "É preciso autorização antes de filmar colegas de equipa ou menores, e as aplicações de pose precisam de uma verificação de privacidade",
      "Só educação geral: as mudanças de técnica vêm do treinador, e a dor ou as lesões são para um preparador físico, um fisioterapeuta ou um médico"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um movimento do seu próprio desporto", action: "explicar termos básicos de biomecânica como a cadeia cinética, a amplitude de movimento e o centro de massa", standard: "com um exemplo correto para cada termo" },
    { id: "O2", condition: "Usando um telefone no treino", action: "filmar um movimento de lado e de frente, com os lugares da câmara marcados e em câmara lenta", standard: "com pelo menos três repetições em cada vista e autorização de todas as pessoas filmadas" },
    { id: "O3", condition: "Com o movimento que filmou", action: "dividir o gesto técnico em fases e captar uma imagem-chave com legenda para cada fase", standard: "com as fases confirmadas pelo seu treinador" },
    { id: "O4", condition: "Com uma ferramenta de estimativa de pose ou o seu resultado", action: "explicar o que a estimativa de pose mostra e dizer o que a pode fazer errar", standard: "tratando os ângulos dela como estimativas, não como medições de laboratório" },
    { id: "O5", condition: "Com as suas imagens-chave", action: "descrever um ponto da técnica com palavras neutras e capturas de ecrã e transformá-lo numa pergunta para o seu treinador", standard: "trabalhando só um ponto de cada vez" },
    { id: "O6", condition: "Depois de praticar uma indicação do treinador durante cerca de duas semanas", action: "montar uma comparação de antes e depois, lado a lado, filmada da mesma maneira", standard: "parando e pedindo ajuda se a mudança causar dor" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ver o movimento",
      lessons: [
        {
          objectives: ["O1"],
          title: "A biomecânica em palavras simples",
          minutes: 5,
          goal: "Explicar cinco termos básicos de biomecânica com um exemplo do seu desporto.",
          text: [
            "A biomecânica estuda como as forças e as posições do corpo criam o movimento. Os treinadores usam-na para tornar a técnica mais eficiente e reduzir o risco de lesões.",
            "Cinco palavras úteis: Ângulo da articulação (o ângulo no joelho, na anca ou no cotovelo). Amplitude de movimento (até onde uma articulação se move). Centro de massa (o ponto de equilíbrio do seu corpo). Cadeia cinética (como a força passa do chão pelas pernas, anca, tronco e braços). Força de reação do solo (o empurrão que o chão devolve quando você empurra contra ele).",
            "Exemplo: num lançamento em suspensão no basquetebol, a força começa nas pernas, passa pela anca e pelo tronco e termina no braço e no pulso. Isso é a cadeia cinética. Um assistente de IA pode explicar qualquer termo com um exemplo do seu desporto."
          ],
          words: [["Biomecânica", "o estudo de como as forças e as posições do corpo criam o movimento."], ["Cadeia cinética", "a maneira como a força passa de uma parte do corpo para a seguinte, por exemplo das pernas para a anca e para os braços."], ["Centro de massa", "o ponto de equilíbrio do seu corpo."]],
          slides: [
            { title: "Biomecânica", bullets: ["Como as forças e as posições criam o movimento", "Técnica mais eficiente", "Menos risco de lesões"] },
            { title: "Cinco palavras importantes", bullets: ["Ângulo da articulação, amplitude de movimento", "Centro de massa", "Cadeia cinética, força de reação do solo"] },
            { title: "Exemplo do lançamento em suspensão", bullets: ["Pernas -> anca -> tronco -> braço -> pulso", "Isso é a cadeia cinética"] }
          ],
          tryIt: "Escolha um movimento do seu desporto. Peça a um assistente de IA para explicar a cadeia cinética nesse movimento com palavras simples. Escreva-a com as suas palavras em três frases.",
          youCanNow: "explicar termos básicos de biomecânica com um exemplo do seu desporto.",
          quickCheck: [
            { objective: "O1", q: "O que descreve a amplitude de movimento?", options: ["Até onde uma articulação se move", "A velocidade a que corre", "Quanto você pesa", "Quanto tempo treina"], answer: 0, why: "A amplitude de movimento é até onde uma articulação se consegue mover." },
            { objective: "O1", q: "Quer explicar a cadeia cinética no seu lançamento em suspensão. O que descreveria?", options: ["Só o movimento do pulso", "Como a força passa das pernas, subindo pelo corpo, até à bola", "A cor da bola", "O barulho do público"], answer: 1, why: "A cadeia cinética é como a força passa de uma parte do corpo para a seguinte." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Filmar um movimento para análise",
          minutes: 5,
          goal: "Filmar um movimento dos ângulos certos para que possa ser analisado.",
          text: [
            "A análise precisa de um bom vídeo. Filme de lado (para ver os ângulos das articulações para a frente e para trás) e de frente ou de costas (para ver os joelhos a fecharem para dentro, a anca a cair ou os braços a cruzarem). Mantenha a câmara mais ou menos à altura da anca, parada e longe o suficiente para ver o corpo todo.",
            "Use o modo de câmara lenta do telefone e boa luz. Use roupa que mostre a forma do corpo e ponha marcas de fita no chão para poder filmar do mesmo lugar da próxima vez.",
            "Filme várias repetições, não só uma, e filme depois de aquecer. Peça autorização antes de filmar outras pessoas e cumpra as regras da sua equipa."
          ],
          steps: ["Ponha o telefone à altura da anca num tripé ou suporte.", "Filme de lado.", "Filme de frente ou de costas.", "Use câmara lenta e boa luz.", "Marque os lugares da câmara e do atleta para a próxima vez.", "Filme de três a cinco repetições."],
          words: [["Vista sagital", "uma vista de lado, que mostra o movimento para a frente e para trás."], ["Vista frontal", "uma vista de frente ou de costas, que mostra o movimento de um lado para o outro."]],
          slides: [
            { title: "Dois ângulos", bullets: ["De lado: ângulos das articulações", "De frente ou de costas: joelhos, anca, braços"] },
            { title: "Preparar a câmara", bullets: ["À altura da anca, parada", "O corpo todo na imagem", "Câmara lenta, boa luz"] },
            { title: "Para repetir igual", bullets: ["Marque os lugares da câmara e do atleta", "De três a cinco repetições, depois de aquecer"] }
          ],
          tryIt: "Filme um movimento de lado e de frente, três repetições de cada, com o telefone à altura da anca e a câmara lenta ligada. Marque os lugares.",
          youCanNow: "filmar bem um movimento para análise biomecânica.",
          quickCheck: [
            { objective: "O2", q: "O que mostra melhor uma vista de lado?", options: ["Os joelhos a fecharem para dentro", "O público", "O movimento para a frente e para trás e os ângulos das articulações", "A marca dos seus sapatos"], answer: 2, why: "Uma vista de lado mostra com clareza o movimento para a frente e para trás e os ângulos das articulações." },
            { objective: "O2", q: "Quer filmar a partida de velocidade de um colega de equipa. O que faz primeiro?", options: ["Filma sem perguntar", "Publica logo na internet", "Usa o zoom de muito longe", "Pede-lhe autorização"], answer: 3, why: "Peça sempre autorização antes de filmar outras pessoas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dividir um gesto técnico em fases",
          minutes: 5,
          goal: "Dividir o seu movimento em fases e encontrar as posições-chave.",
          text: [
            "A maioria dos gestos técnicos do desporto tem fases. Um lançamento: preparação, passada, armar o braço, aceleração, soltura, acompanhamento. Uma partida de velocidade: posição de \"prontos\", impulsão, aceleração, transição. Um salto: corrida de balanço, apoio, chamada, voo, receção.",
            "Em cada fase há posições-chave que os treinadores observam: onde o pé toca no chão, o ângulo do joelho na chamada, o ângulo do tronco na soltura. O seu treinador pode dizer-lhe quais são as mais importantes para você.",
            "Use a revisão imagem a imagem na aplicação de vídeo do telefone ou numa ferramenta de vídeo gratuita. Pare na imagem-chave de cada fase e faça uma captura de ecrã. Peça a um assistente de IA a lista das fases habituais do seu gesto técnico e depois confirme-as com o seu treinador."
          ],
          steps: ["Peça à IA as fases habituais do seu gesto técnico.", "Confirme as fases com o seu treinador.", "Avance no seu vídeo imagem a imagem.", "Faça uma captura de ecrã da imagem-chave de cada fase.", "Ponha uma legenda em cada captura de ecrã."],
          words: [["Fase", "uma parte de um movimento, como a preparação ou a soltura."], ["Posição-chave", "uma posição importante do corpo num certo momento."], ["Imagem a imagem", "avançar num vídeo uma imagem de cada vez."]],
          slides: [
            { title: "Os gestos técnicos têm fases", bullets: ["Lançamento: da preparação ao acompanhamento", "Partida de velocidade: de \"prontos\" à transição", "Salto: da corrida de balanço à receção"] },
            { title: "Posições-chave", bullets: ["Onde o pé toca no chão", "Ângulo do joelho na chamada", "Ângulo do tronco na soltura"] },
            { title: "Imagem a imagem", bullets: ["Pare em cada imagem-chave", "Faça a captura de ecrã e ponha legenda", "Confirme as fases com o seu treinador"] }
          ],
          tryIt: "Divida em fases o movimento que filmou. Faça uma captura de ecrã de uma imagem-chave de cada fase e ponha-lhe uma legenda.",
          youCanNow: "dividir um gesto técnico em fases e captar as suas posições-chave.",
          quickCheck: [
            { objective: "O3", q: "O que é uma imagem-chave?", options: ["Uma única imagem que mostra uma posição importante de uma fase", "O primeiro segundo de qualquer vídeo", "Um filtro de vídeo", "Um plano de treino"], answer: 0, why: "Uma imagem-chave capta a posição-chave de uma fase." },
            { objective: "O3", q: "A IA sugere quatro fases para o seu lançamento. O que faz a seguir?", options: ["Usa-as sem verificar", "Confirma-as com o seu treinador", "Apaga o seu vídeo", "Acrescenta mais dez fases"], answer: 1, why: "O seu treinador confirma as fases e as posições-chave do seu desporto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ver o movimento",
        questions: [
          { objective: "O1", q: "O que é a cadeia cinética?", options: ["Uma peça de bicicleta", "Uma máquina de musculação", "Como a força passa de uma parte do corpo para a seguinte", "Um tipo de sapato"], answer: 2, why: "A força passa das pernas para a anca, para o tronco e para os braços." },
          { objective: "O2", q: "Que vista da câmara mostra melhor os joelhos a fecharem para dentro?", options: ["Vista de frente ou de costas", "Só a vista de lado", "Só de cima", "Um grande plano da cara"], answer: 0, why: "O movimento de um lado para o outro vê-se melhor de frente ou de costas." },
          { objective: "O2", q: "A que altura deve estar a câmara?", options: ["No chão", "Acima da sua cabeça", "Em qualquer lugar", "Mais ou menos à altura da anca"], answer: 3, why: "À altura da anca, a imagem do corpo fica menos deformada." },
          { objective: "O2", q: "Porque filmar várias repetições?", options: ["Para encher a memória", "Uma só repetição pode não ser a habitual", "É uma regra", "Para ficar mais comprido"], answer: 1, why: "Várias repetições mostram a sua maneira real de fazer o movimento." },
          { objective: "O3", q: "Quem deve confirmar as suas fases e posições-chave?", options: ["Um vídeo qualquer", "O seu treinador", "Um adepto", "Ninguém"], answer: 1, why: "O seu treinador sabe o que é importante na sua técnica." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ferramentas de IA e mudança real",
      lessons: [
        {
          objectives: ["O4"],
          title: "Estimativa de pose: IA que encontra as suas articulações",
          minutes: 5,
          goal: "Explicar o que faz a estimativa de pose e quais são os seus limites.",
          text: [
            "A estimativa de pose é uma IA que encontra pontos do corpo, como ombros, cotovelos, anca, joelhos e tornozelos, numa foto ou num vídeo e os liga num boneco de palitos. Algumas aplicações depois estimam os ângulos das articulações.",
            "Estas ferramentas são úteis para ver posições e comparar repetições, mas cometem erros: roupa larga, movimento rápido, imagem tremida, pouca luz, outras pessoas na imagem ou uma parte do corpo escondida atrás de outra podem enganá-las. Os ângulos de um vídeo 2D de telefone são estimativas, não medições de laboratório.",
            "Se experimentar uma aplicação de pose, leia a política de privacidade, porque o vídeo do seu corpo é um dado pessoal. Para menores, um dos pais deve aprovar. Compare sempre o boneco de palitos com o vídeo real antes de confiar num número."
          ],
          steps: ["Escolha um vídeo curto, nítido e com boa luz.", "Se usar uma aplicação de pose, leia primeiro a política de privacidade.", "Passe o vídeo na aplicação e olhe para o boneco de palitos.", "Verifique se ele coincide com o corpo real em cada imagem-chave.", "Trate os ângulos como estimativas."],
          words: [["Estimativa de pose", "IA que encontra pontos do corpo num vídeo e desenha um boneco de palitos."], ["Vídeo 2D", "vídeo plano de uma só câmara; não consegue medir a profundidade na perfeição."]],
          slides: [
            { title: "Estimativa de pose", bullets: ["A IA encontra ombros, anca, joelhos, tornozelos", "Desenha um boneco de palitos", "Algumas aplicações estimam ângulos"] },
            { title: "Limites", bullets: ["Imagem tremida, roupa larga, pouca luz", "Partes do corpo escondidas", "Os ângulos em 2D são estimativas"] },
            { title: "Usar com segurança", bullets: ["Leia a política de privacidade", "Menores: um dos pais aprova", "Compare com o vídeo real"] }
          ],
          tryIt: "Peça a um assistente de IA para explicar como funciona a estimativa de pose e três maneiras de ela errar. Depois olhe para as suas imagens-chave e escreva onde uma ferramenta de pose poderia ter dificuldades.",
          youCanNow: "explicar o que faz a estimativa de pose e porque os seus números precisam de ser verificados.",
          quickCheck: [
            { objective: "O4", q: "O que desenha uma ferramenta de estimativa de pose num vídeo?", options: ["Um gráfico do ritmo cardíaco", "Um mapa do tempo", "Um boneco de palitos sobre as articulações do corpo", "Um resultado do jogo"], answer: 2, why: "A estimativa de pose encontra pontos do corpo e liga-os num boneco de palitos." },
            { objective: "O4", q: "Uma aplicação de pose diz que o ângulo do seu joelho é de 143 graus num vídeo tremido. O que faz?", options: ["Confia no número exato", "Partilha-o como resultado de laboratório", "Muda logo a sua técnica", "Trata-o como uma estimativa e verifica você mesmo a imagem"], answer: 3, why: "A imagem tremida e o vídeo de um só telefone fazem dos ângulos estimativas, não medições." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Descrever um ponto da técnica",
          minutes: 5,
          goal: "Descrever com clareza um ponto da técnica usando as suas capturas de ecrã.",
          text: [
            "Escolha uma coisa para observar, não dez. Por exemplo: \"Na chamada, o meu joelho dobra muito menos na perna esquerda do que na direita.\" ou \"Na soltura, o meu cotovelo está abaixo do ombro.\"",
            "Descreva-o com provas: a fase, a captura de ecrã e o que vê em comparação com outra repetição ou com um modelo que o seu treinador lhe dá. Um assistente de IA pode ajudá-lo a escrever uma descrição clara e neutra: \"Ajude-me a descrever o que vejo nestas duas imagens-chave com palavras simples e neutras.\" Não lhe peça um diagnóstico nem uma solução para a dor.",
            "Leve-o ao seu treinador como uma pergunta: \"Reparei nisto. É algo em que devemos trabalhar? Que indicação devo usar?\""
          ],
          steps: ["Escolha um ponto da técnica.", "Escolha as capturas de ecrã que o mostram.", "Escreva uma descrição neutra com a fase.", "Pergunte ao seu treinador se é importante e que indicação usar."],
          words: [["Indicação", "uma instrução curta que ajuda a mudar um movimento, como \"peito alto\"."], ["Descrição neutra", "descrever o que vê sem julgar nem dar um diagnóstico."]],
          slides: [
            { title: "Um ponto, não dez", bullets: ["Exemplo: o joelho esquerdo dobra menos na chamada"] },
            { title: "Mostre provas", bullets: ["Fase e captura de ecrã", "Comparação com outra repetição ou com um modelo", "Palavras neutras; sem diagnóstico"] },
            { title: "Pergunte ao seu treinador", bullets: ["\"Devemos trabalhar nisto?\"", "\"Que indicação devo usar?\""] }
          ],
          tryIt: "Escreva um ponto da técnica em duas frases neutras, com a fase e as capturas de ecrã. Use a IA para o tornar mais claro e depois leve-o ao seu treinador.",
          youCanNow: "descrever um ponto da técnica com provas e transformá-lo numa pergunta para o seu treinador.",
          quickCheck: [
            { objective: "O5", q: "O que é uma descrição neutra da técnica?", options: ["Dizer o que vê sem dar um diagnóstico", "Dar o nome de uma lesão", "Dizer que o atleta é mau", "Adivinhar a causa da dor"], answer: 0, why: "Uma descrição neutra diz o que se vê e deixa o diagnóstico de fora." },
            { objective: "O5", q: "Vê três coisas que quer corrigir. O que leva ao seu treinador?", options: ["As três ao mesmo tempo", "Um ponto, com a fase e as capturas de ecrã", "Nada até a época acabar", "Um novo plano de treino feito pela IA"], answer: 1, why: "Trabalhar um ponto da técnica de cada vez torna a mudança mais clara." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Antes e depois: mudou?",
          minutes: 5,
          goal: "Fazer uma comparação lado a lado para ver se a técnica mudou.",
          text: [
            "Depois de praticar a indicação do seu treinador durante algumas semanas, filme outra vez dos mesmos lugares marcados, com os mesmos ângulos e a mesma luz. Ponha as imagens-chave do antes e do depois lado a lado num diapositivo ou numa página do Canva (uma aplicação gratuita de design).",
            "Olhe para a mesma posição-chave em cada uma. A mudança está lá? Está em todas as repetições ou só em algumas? Mudar leva muitas repetições; um pequeno progresso também é progresso.",
            "Se uma mudança causar dor, ou se um movimento doer, pare e diga ao seu preparador físico, fisioterapeuta ou médico. O trabalho de técnica nunca deve continuar apesar da dor."
          ],
          steps: ["Filme outra vez dos mesmos lugares e com os mesmos ângulos.", "Escolha as mesmas imagens-chave.", "Ponha o antes e o depois lado a lado.", "Anote o que mudou e em quantas repetições.", "Reveja com o seu treinador; fale de qualquer dor."],
          words: [["Lado a lado", "duas imagens ou vídeos postos um ao lado do outro para comparar."], ["Fisioterapeuta", "um profissional com licença que ajuda as pessoas a recuperar o movimento depois de uma lesão."]],
          slides: [
            { title: "A mesma preparação", bullets: ["Os mesmos lugares marcados", "Os mesmos ângulos e a mesma luz"] },
            { title: "Comparar", bullets: ["A mesma imagem-chave, lado a lado", "Em todas as repetições ou só em algumas?", "Um pequeno progresso conta"] },
            { title: "Segurança", bullets: ["Dor? Pare", "Diga ao preparador físico, fisioterapeuta ou médico"] }
          ],
          tryIt: "Tarefa final: pratique a indicação do seu treinador, filme outra vez daqui a duas semanas dos mesmos lugares e monte uma comparação de antes e depois, lado a lado, para rever com o seu treinador.",
          youCanNow: "comparar a técnica antes e depois de forma justa e saber quando parar por causa da dor.",
          quickCheck: [
            { objective: "O6", q: "O que torna justa uma comparação de antes e depois?", options: ["Filmar de ângulos novos de cada vez", "Usar uma luz diferente", "Filmar dos mesmos lugares, com os mesmos ângulos e a mesma luz", "Usar só a melhor repetição"], answer: 2, why: "Entre os dois vídeos, só a técnica deve mudar." },
            { objective: "O6", q: "A nova indicação começa a doer-lhe no ombro. O que faz?", options: ["Continua apesar da dor", "Pede um diagnóstico à IA", "Pratica-a o dobro", "Para e diz ao seu preparador físico, fisioterapeuta ou médico"], answer: 3, why: "A dor é uma razão para parar e consultar um profissional com formação." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ferramentas de IA e mudança real",
        questions: [
          { objective: "O4", q: "O que faz a estimativa de pose?", options: ["Diagnostica lesões", "Escreve planos de treino", "Conta seguidores", "Encontra pontos do corpo num vídeo e desenha um boneco de palitos"], answer: 3, why: "Encontra as articulações nas imagens." },
          { objective: "O4", q: "O que pode fazer errar uma ferramenta de pose?", options: ["Imagem tremida e roupa larga", "Boa luz", "Roupa justa", "Um fundo limpo"], answer: 0, why: "A imagem tremida e a roupa larga escondem a posição das articulações." },
          { objective: "O4", q: "Os ângulos de um só vídeo de telefone são:", options: ["Perfeitos", "Diagnósticos médicos", "Estimativas, não medições de laboratório", "Inúteis"], answer: 2, why: "O vídeo 2D não consegue medir a profundidade na perfeição." },
          { objective: "O5", q: "O que deve pedir à IA quando descreve a sua técnica?", options: ["Que diagnostique a dor no seu joelho", "Que receite um tratamento", "Que contrarie o seu treinador", "Ajuda para descrever o que vê com palavras neutras"], answer: 3, why: "O diagnóstico e o tratamento são para os profissionais." },
          { objective: "O6", q: "Uma técnica nova causa dor. Você:", options: ["Continua apesar da dor", "Para e diz ao seu preparador físico, fisioterapeuta ou médico", "Ignora", "Pede analgésicos à IA"], answer: 1, why: "Nunca continue apesar da dor." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Biomecânica com IA",
    questions: [
      { objective: "O1", q: "A biomecânica estuda:", options: ["As finanças da equipa", "As redes sociais", "Como as forças e as posições do corpo criam o movimento", "O desenho dos estádios"], answer: 2, why: "É a ciência do movimento." },
      { objective: "O1", q: "A amplitude de movimento é:", options: ["Até onde uma articulação se move", "A distância que você corre", "Um marcador de resultados", "Um tipo de exercício"], answer: 0, why: "Descreve o movimento de uma articulação." },
      { objective: "O1", q: "O centro de massa é:", options: ["O ponto de equilíbrio do seu corpo", "O meio do campo", "Um ginásio", "Um músculo"], answer: 0, why: "É onde o seu peso fica em equilíbrio." },
      { objective: "O1", q: "A força de reação do solo é:", options: ["O vento", "Uma penalidade", "O empurrão que o chão devolve", "Uma regra da equipa"], answer: 2, why: "Você empurra o chão e o chão empurra de volta." },
      { objective: "O1", q: "Num lançamento em suspensão, a força começa:", options: ["No pulso", "Nas pernas", "Nos olhos", "Na bola"], answer: 1, why: "A cadeia cinética começa do chão para cima." },
      { objective: "O2", q: "Uma vista de lado mostra:", options: ["Só a cara", "Nada de útil", "Só o público", "O movimento para a frente e para trás e os ângulos das articulações"], answer: 3, why: "É a vista sagital." },
      { objective: "O2", q: "Porque marcar no chão os lugares da câmara?", options: ["Para decorar", "É uma regra", "Para filmar da mesma maneira da próxima vez", "Para confundir os outros"], answer: 2, why: "A mesma preparação permite comparações justas." },
      { objective: "O2", q: "A câmara lenta ajuda a:", options: ["Poupar bateria", "Esconder erros", "Pôr música", "Ver com clareza movimentos rápidos"], answer: 3, why: "Mostra os pormenores." },
      { objective: "O2", q: "Antes de filmar colegas de equipa, deve:", options: ["Pedir autorização", "Publicar primeiro", "Filmar às escondidas", "Não se preocupar com isso"], answer: 0, why: "Respeite a privacidade e as regras da equipa." },
      { objective: "O3", q: "Uma fase é:", options: ["Um período do jogo", "Uma parte de um movimento", "Uma equipa", "Um telefone"], answer: 1, why: "Os gestos técnicos dividem-se em fases." },
      { objective: "O3", q: "Qual é uma fase de um lançamento?", options: ["O intervalo", "O desconto de tempo", "A soltura", "A volta de arrefecimento"], answer: 2, why: "A soltura é uma fase do lançamento." },
      { objective: "O3", q: "A revisão imagem a imagem quer dizer:", options: ["Avançar no vídeo uma imagem de cada vez", "Ver a velocidade dupla", "Saltar para o fim", "Apagar imagens"], answer: 0, why: "Permite encontrar as posições-chave." },
      { objective: "O3", q: "A IA faz a lista das fases do seu gesto técnico. A seguir você:", options: ["Confia totalmente nelas", "Publica-as", "Ignora o seu treinador", "Confirma-as com o seu treinador"], answer: 3, why: "Os treinadores confirmam o que é importante." },
      { objective: "O4", q: "A estimativa de pose desenha:", options: ["Um logótipo", "Um boneco de palitos sobre o seu corpo", "Um mapa", "Um gráfico de seguidores"], answer: 1, why: "Liga os pontos do corpo que encontrou." },
      { objective: "O4", q: "Antes de usar uma aplicação de pose, verifique:", options: ["A cor dela", "A política de privacidade dela", "O logótipo dela", "Nada"], answer: 1, why: "O vídeo do corpo é um dado pessoal." },
      { objective: "O5", q: "Em quantos pontos da técnica deve trabalhar ao mesmo tempo?", options: ["Um", "Dez", "Todos", "Nenhum"], answer: 0, why: "Com um só foco é mais fácil mudar." },
      { objective: "O5", q: "Uma indicação é:", options: ["Uma instrução curta para mudar um movimento", "Um taco de bilhar", "Um resultado", "Uma aplicação de vídeo"], answer: 0, why: "As indicações guiam as mudanças de técnica." },
      { objective: "O5", q: "Uma descrição neutra:", options: ["Julga com dureza", "Diagnostica lesões", "Descreve o que vê sem dar um diagnóstico", "Ignora as provas"], answer: 2, why: "Fique pelo que vê." },
      { objective: "O6", q: "Os vídeos de antes e depois devem usar:", options: ["Ângulos diferentes de cada vez", "Qualquer preparação", "Nenhum vídeo", "Os mesmos lugares, ângulos e luz"], answer: 3, why: "A mesma preparação permite comparações justas." },
      { objective: "O6", q: "Quem ajuda as pessoas a recuperar o movimento depois de uma lesão?", options: ["Um adepto", "Um fisioterapeuta", "Uma aplicação de IA", "Um árbitro"], answer: 1, why: "Os fisioterapeutas têm licença para isso." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Filmagem",
        objective: "O2",
        notYet: "Só uma vista, ou a câmara mexeu-se ou estava alta ou baixa demais.",
        meets: "Vistas de lado e de frente à altura da anca, dos lugares marcados, três repetições de cada.",
        exceeds: "Também anota os lugares, a definição da câmara lenta e a luz, para qualquer pessoa poder repetir."
      },
      {
        name: "Fases e imagens-chave",
        objective: "O3",
        notYet: "Faltam as fases ou não têm legenda.",
        meets: "Cada fase tem uma imagem-chave com legenda, confirmada com o treinador.",
        exceeds: "As imagens-chave de várias repetições mostram sempre a mesma posição."
      },
      {
        name: "Ponto da técnica",
        objective: "O5",
        notYet: "Vários pontos ao mesmo tempo, ou palavras que dão diagnósticos ou julgam.",
        meets: "Um ponto em duas frases neutras, com a fase e as capturas de ecrã.",
        exceeds: "Também o transformou numa pergunta clara, a que o treinador respondeu com uma indicação."
      },
      {
        name: "Uso das ferramentas",
        objective: "O4",
        notYet: "Os números da aplicação foram tratados como medições exatas.",
        meets: "Todos os ângulos da ferramenta de pose são chamados estimativas e verificados na imagem.",
        exceeds: "Sabe dizer o que no vídeo pode fazer errar a ferramenta."
      },
      {
        name: "Antes e depois",
        objective: "O6",
        notYet: "O segundo vídeo foi filmado de outra maneira, ou não houve comparação.",
        meets: "Uma comparação lado a lado, dos mesmos lugares, com os mesmos ângulos e a mesma luz.",
        exceeds: "Também escreve o que mudou, o que não mudou e qualquer dor comunicada à pessoa certa."
      }
    ]
  },
  evaluation: {
    results: [
      "Atletas que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Atletas que mostram a sua comparação de antes e depois a um treinador em 30 dias (inquérito de seguimento)",
      "Treinadores que dizem ter conversas mais claras sobre técnica com os atletas que fizeram o curso",
      "Alunos que começam outro curso da Koach Learn para atletas em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com câmara e câmara lenta",
      "Fita ou cones para marcar os lugares da câmara",
      "Um assistente de IA gratuito; uma aplicação gratuita de estimativa de pose é opcional",
      "Cerca de 60 minutos para as lições, as verificações e o questionário, mais duas sessões de filmagem com duas semanas de intervalo"
    ],
    facilitatorNotes: [
      "Faça a filmagem como um exercício de grupo: um atleta faz o movimento, outro filma e outro verifica a altura e o lugar da câmara.",
      "Peça autorização por escrito antes de filmar menores e mantenha os vídeos deles fora de aplicações públicas.",
      "Peça ao treinador para confirmar as fases e as indicações; o curso não substitui o treino com o treinador.",
      "Qualquer atleta que diga ter dor para o exercício e é enviado ao preparador físico, ao fisioterapeuta ou ao médico.",
      "Avalie a comparação final com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
