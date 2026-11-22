"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-video-analysis.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-video-analysis-pt",
  lang: "pt",
  translationOf: "athletes-video-analysis",
  category: "Athletes",
  name: "Análise de Vídeo e Inteligência de Jogo",
  skills: "Filmar vídeo útil de jogos e treinos, Ver o vídeo com uma pergunta, Marcar jogadas numa folha de cálculo, Usar a IA para resumir as jogadas marcadas, Transformar o vídeo num foco de treino",
  outcome: "filmar um jogo ou um treino, marcar pelo menos 20 jogadas numa folha de cálculo com uma pergunta clara em mente, usar um assistente de IA para resumir os padrões e transformá-los num foco de treino combinado com o seu treinador.",
  about: [
    "Este curso é para atletas e treinadores que querem aprender com vídeo sem programas caros. Vai usar a câmara do telefone, uma folha de cálculo gratuita e um assistente de IA gratuito.",
    "Ver vídeo de jogos é uma habilidade. A maioria das pessoas só vê os melhores momentos. Vai aprender a ver com uma pergunta, marcar o que acontece, encontrar padrões e transformá-los em algo para treinar.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Filme um jogo ou um treino (com autorização), escolha uma pergunta, marque pelo menos 20 jogadas numa folha do Google Sheets, peça a um assistente de IA para resumir os padrões a partir das suas marcações e escreva um foco de treino. Reveja-o com o seu treinador.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas e treinadores do ensino secundário, da universidade e de clubes que querem aprender com vídeo de jogos e treinos sem programas caros.",
    startingPoint: "Sabem gravar vídeo no telefone e já viram vídeos de jogos, normalmente pelos melhores momentos. Poucos filmaram com um plano, marcaram jogadas, contaram padrões numa folha de cálculo ou verificaram um resumo da IA com as suas próprias contagens.",
    gap: "Ver vídeo sem uma pergunta mostra sobretudo os melhores momentos e os grandes erros, por isso o treino não muda. Marcar e contar transforma o vídeo em provas que levam a um foco de treino claro e a uma conversa melhor com o treinador.",
    constraints: [
      "Linguagem simples, mais ou menos ao nível de leitura do 7.º ano",
      "A câmara do telefone, o Google Sheets gratuito e um assistente de IA gratuito; não é preciso nenhum programa pago",
      "Cerca de 60 minutos de lições, mais o tempo para filmar e marcar um jogo ou treino",
      "Regras da equipa, da escola e da liga sobre filmagens; os vídeos de jovens mostram filhos de outras pessoas",
      "Os nomes e as informações privadas dos outros jogadores ficam fora das ferramentas de IA"
    ],
    prerequisites: "Nenhum. O curso \"Ferramentas de IA para Atletas\" ajuda se nunca usou o Google Sheets."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um telefone num jogo ou treino", action: "filmar vídeo útil de um lugar alto e central, com uma imagem larga e estável", standard: "com autorização do seu treinador antes de filmar e antes de partilhar" },
    { id: "O2", condition: "Antes de ver o vídeo de um jogo ou treino", action: "escrever uma pergunta precisa e ver o vídeo duas vezes, parando nas jogadas que respondem a ela", standard: "com uma pergunta por visualização e uma nota curta para cada jogada ligada a ela" },
    { id: "O3", condition: "Usando o Google Sheets e o seu vídeo", action: "marcar jogadas com Jogada n.º, Tempo, Situação, O que aconteceu, Resultado e Nota", standard: "marcando pelo menos 20 jogadas com as mesmas palavras de marcação todas as vezes" },
    { id: "O4", condition: "Com pelo menos 20 jogadas marcadas", action: "contar as suas marcações com ordenar, filtrar ou COUNTIF e escrever os dois principais padrões com números", standard: "com qualquer padrão baseado em poucas jogadas marcado como \"ver mais\"" },
    { id: "O5", condition: "Usando um assistente de IA gratuito e a sua tabela de marcações", action: "pedir um resumo dos principais padrões com contagens e compará-lo com as suas próprias contagens", standard: "sem os nomes e as informações privadas dos outros jogadores e com todas as contagens iguais às da sua folha" },
    { id: "O6", condition: "Com o seu padrão mais forte", action: "escrever um foco de treino e levá-lo ao seu treinador com números, tempos do vídeo e uma pergunta", standard: "com o foco combinado com o seu treinador e um plano para voltar a filmar e a marcar mais tarde" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conseguir um bom vídeo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Filmar um vídeo que consegue mesmo usar",
          minutes: 5,
          goal: "Preparar um telefone para filmar vídeo útil de um jogo ou treino.",
          text: [
            "Um bom vídeo começa num bom lugar para a câmara. Se puder, filme de um lugar alto, como o topo da bancada, para ver a jogada inteira e o espaço entre os jogadores. Segure o telefone deitado (na horizontal) e mantenha-o estável com um tripé ou apoiando-o.",
            "Siga a bola, mas mantenha à vista campo suficiente para ver o que fazem os jogadores sem bola. Não aproxime demasiado a imagem (zoom).",
            "Peça autorização. A sua equipa, escola ou liga pode ter regras sobre filmagens, e os vídeos de desporto de jovens mostram filhos de outras pessoas. Pergunte ao seu treinador antes de filmar e antes de partilhar qualquer coisa."
          ],
          steps: ["Peça ao seu treinador autorização para filmar.", "Encontre um lugar alto e central.", "Ponha o telefone na horizontal e mantenha-o estável.", "Mantenha uma imagem larga; siga a bola.", "Verifique a bateria e o espaço de memória antes do jogo."],
          words: [["Horizontal", "segurar o telefone deitado, para o vídeo ficar largo."], ["Tripé", "um suporte com três pernas que mantém uma câmara estável."]],
          slides: [
            { title: "Lugar da câmara", bullets: ["Alto e central, se puder", "Ver a jogada inteira e o espaço"] },
            { title: "Preparar a câmara", bullets: ["Telefone na horizontal", "Estável: tripé ou apoiado", "Imagem larga; siga a bola"] },
            { title: "Antes de filmar", bullets: ["Pergunte ao seu treinador", "Verifique a bateria e a memória", "Pergunte antes de partilhar"] }
          ],
          tryIt: "No seu próximo treino, com a autorização do seu treinador, filme cinco minutos do lugar mais alto que encontrar. Veja o vídeo: consegue ver todos os que participam em cada jogada?",
          youCanNow: "preparar um telefone para filmar vídeo útil de um jogo ou treino, com autorização.",
          quickCheck: [
            { objective: "O1", q: "Porque manter uma imagem larga em vez de aproximar muito?", options: ["O vídeo largo ocupa menos memória", "As imagens de perto são proibidas", "Para ver o que fazem os jogadores sem bola", "O zoom gasta a bateria"], answer: 2, why: "Uma imagem larga mostra o espaço e os jogadores longe da bola." },
            { objective: "O1", q: "Quer filmar o jogo de jovens da sua irmã mais nova e publicá-lo. O que faz primeiro?", options: ["Publica e apaga se alguém se queixar", "Pergunta ao treinador quais são as regras antes de filmar e partilhar", "Filma só a outra equipa", "Desfoca a sua própria cara"], answer: 1, why: "As equipas e as ligas podem ter regras sobre filmagens, e o vídeo mostra filhos de outras pessoas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ver o vídeo com uma pergunta",
          minutes: 5,
          goal: "Escolher uma pergunta clara antes de ver o vídeo.",
          text: [
            "Se vir o vídeo sem plano, repara sobretudo nos melhores momentos e nos seus piores erros. Os treinadores veem com uma pergunta.",
            "As boas perguntas são precisas: \"Onde perco a bola?\" \"Com que rapidez volto para a defesa?\" \"Que formações na receção do serviço perdem pontos?\" \"O que faz a outra equipa na terceira tentativa?\"",
            "Escolha uma pergunta por visualização. Veja uma vez à velocidade normal para ter a ideia geral, depois veja de novo e pare em cada jogada que responde à sua pergunta."
          ],
          steps: ["Escreva uma pergunta precisa.", "Veja uma vez à velocidade normal.", "Veja de novo e pare em cada jogada ligada à sua pergunta.", "Escreva uma nota curta para cada jogada."],
          words: [["Estudo de vídeo", "ver vídeos de jogos ou treinos para aprender e melhorar."], ["Inteligência de jogo", "perceber porque as jogadas acontecem, e não só o que aconteceu."]],
          slides: [
            { title: "Sem plano = só melhores momentos", bullets: ["Vê as grandes jogadas e os grandes erros", "Não vê os padrões"] },
            { title: "Perguntas precisas", bullets: ["\"Onde perco a bola?\"", "\"Com que rapidez volto para a defesa?\"", "\"O que fazem eles na terceira tentativa?\""] },
            { title: "Duas visualizações", bullets: ["1. Velocidade normal: ideia geral", "2. Pare nas jogadas que respondem à sua pergunta"] }
          ],
          tryIt: "Escreva três perguntas possíveis para o seu desporto e a sua posição. Escolha uma e veja cinco minutos de vídeo com ela, escrevendo uma nota cada vez que ela aparece.",
          youCanNow: "ver o vídeo com uma pergunta clara e tomar notas sobre as jogadas que respondem a ela.",
          quickCheck: [
            { objective: "O2", q: "Qual é uma pergunta precisa para o vídeo?", options: ["Com que rapidez volto para a defesa?", "Jogámos bem?", "Foi uma boa época?", "Quem é o melhor jogador?"], answer: 0, why: "As perguntas precisas apontam para jogadas concretas em que pode parar e tomar notas." },
            { objective: "O2", q: "Tem duas perguntas sobre o seu vídeo. O que faz?", options: ["Responde às duas numa só visualização", "Deixa a segunda pergunta de lado", "Pede à IA para ver o vídeo por você", "Vê com uma pergunta de cada vez"], answer: 3, why: "Escolha uma pergunta por visualização." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Marcar jogadas numa folha de cálculo",
          minutes: 6,
          goal: "Marcar jogadas no Google Sheets para poder contar os padrões.",
          text: [
            "Marcar quer dizer escrever as mesmas poucas etiquetas para cada jogada. Isto transforma o vídeo em dados que pode contar.",
            "Faça colunas: Jogada n.º, Tempo no vídeo, Situação (por exemplo \"contra-ataque\" ou \"2.ª tentativa e longe\"), O que aconteceu, Resultado (bom, neutro ou mau) e Nota. Use as mesmas palavras todas as vezes, para que \"perda de bola\" seja sempre \"perda de bola\", e não às vezes \"bola perdida\".",
            "Muitas escolas usam aplicações de vídeo para equipas, como o Hudl, que marcam jogadas; se a sua equipa usa uma, pergunte ao seu treinador como usar as marcações dela. Uma folha de cálculo serve para qualquer pessoa, de graça."
          ],
          steps: ["Abra o Google Sheets.", "Colunas: Jogada n.º, Tempo, Situação, O que aconteceu, Resultado, Nota.", "Escolha uma lista curta de palavras de marcação e use sempre as mesmas.", "Pare o vídeo e preencha uma linha por jogada.", "Marque pelo menos 20 jogadas."],
          words: [["Marcação", "uma etiqueta que dá a cada jogada, como \"perda de bola\" ou \"contra-ataque\"."], ["Tempo do vídeo", "o momento do vídeo em que uma jogada começa, como 12:45."]],
          slides: [
            { title: "Marcar = vídeo em dados", bullets: ["As mesmas etiquetas em cada jogada", "Agora pode contar os padrões"] },
            { title: "As suas colunas", bullets: ["Jogada n.º, Tempo, Situação", "O que aconteceu, Resultado, Nota"] },
            { title: "Regras de marcação", bullets: ["Lista curta de palavras de marcação", "A mesma palavra todas as vezes", "Pelo menos 20 jogadas"] }
          ],
          tryIt: "Prepare a sua folha de marcação e marque 10 jogadas do seu vídeo usando a sua pergunta da Lição 2.",
          youCanNow: "marcar jogadas numa folha de cálculo com etiquetas sempre iguais e tempos do vídeo.",
          quickCheck: [
            { objective: "O3", q: "Que coluna regista se a jogada correu bem?", options: ["Jogada n.º", "Tempo", "Resultado", "Situação"], answer: 2, why: "O Resultado é bom, neutro ou mau." },
            { objective: "O3", q: "Escreveu \"bola perdida\" em algumas jogadas e \"perda de bola\" noutras. O que faz?", options: ["Muda todas para uma só palavra, como \"perda de bola\"", "Deixa assim; não faz diferença", "Apaga essas jogadas", "Acrescenta uma terceira palavra"], answer: 0, why: "Usar a mesma palavra todas as vezes mantém as suas contagens certas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conseguir um bom vídeo",
        questions: [
          { objective: "O1", q: "Qual é o melhor lugar para a câmara num vídeo de jogo?", options: ["Só no chão atrás da baliza", "Dentro da mochila", "Alto e central", "Com zoom na cara de um jogador"], answer: 2, why: "Alto e central mostra a jogada inteira e o espaço." },
          { objective: "O1", q: "Antes de filmar o treino, deve:", options: ["Pedir autorização ao seu treinador", "Transmiti-lo em direto", "Filmar o balneário da outra equipa", "Pôr o telefone na vertical"], answer: 0, why: "As equipas e as escolas muitas vezes têm regras sobre filmagens." },
          { objective: "O2", q: "Qual é uma boa pergunta para estudar o vídeo?", options: ["\"Foi um bom jogo?\"", "\"Porque somos maus?\"", "\"Quem tem os melhores sapatos?\"", "\"Onde perco a bola?\""], answer: 3, why: "As perguntas precisas levam a padrões que pode corrigir." },
          { objective: "O3", q: "Para que serve marcar?", options: ["Apaga as jogadas más", "Transforma o vídeo em dados que pode contar", "Acrescenta música", "Torna o vídeo mais curto"], answer: 1, why: "Etiquetas sempre iguais deixam você contar os padrões." },
          { objective: "O3", q: "Porque usar a mesma palavra de marcação todas as vezes?", options: ["Para ficar mais comprido", "Para as contagens ficarem certas", "Fica mais bonito", "Sem razão"], answer: 1, why: "Palavras diferentes para a mesma coisa estragam as suas contagens." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar padrões e usá-los",
      lessons: [
        {
          objectives: ["O4"],
          title: "Contar os padrões nas suas marcações",
          minutes: 5,
          goal: "Contar as suas marcações e encontrar os principais padrões.",
          text: [
            "Com 20 ou mais jogadas marcadas, conte quantas vezes aparece cada situação e cada resultado. No Google Sheets pode ordenar por uma coluna, usar um filtro ou usar a fórmula COUNTIF (em português pode aparecer como CONT.SE) para contar uma marcação.",
            "Procure padrões, não jogadas soltas: \"7 das minhas 9 perdas de bola foram quando driblei para a esquerda sob pressão\" é um padrão. Um passe mau não é.",
            "Números pequenos podem enganar. Se uma coisa aconteceu só duas vezes, veja mais vídeo antes de decidir que é um padrão verdadeiro."
          ],
          steps: ["Ordene ou filtre pelo Resultado.", "Conte cada Situação nos resultados maus.", "Escreva os dois principais padrões em frases com números.", "Marque qualquer padrão com poucas jogadas como \"ver mais\"."],
          words: [["Padrão", "algo que acontece muitas vezes em situações parecidas."], ["COUNTIF", "uma fórmula da folha de cálculo que conta as células iguais a uma palavra ou a um número."]],
          slides: [
            { title: "Conte as suas marcações", bullets: ["Ordene ou filtre pelo Resultado", "COUNTIF conta uma marcação"] },
            { title: "Padrão e jogada solta", bullets: ["Padrão: 7 de 9 perdas de bola a ir para a esquerda", "Não é padrão: um passe mau"] },
            { title: "Cuidado com números pequenos", bullets: ["Só duas vezes? Veja mais vídeo primeiro"] }
          ],
          tryIt: "Acabe de marcar 20 jogadas. Conte os seus resultados por situação e escreva os seus dois principais padrões em frases com números.",
          youCanNow: "contar marcações e descrever padrões com números.",
          quickCheck: [
            { objective: "O4", q: "Qual destes é um padrão?", options: ["Um passe mau na segunda parte", "5 dos meus 6 remates falhados foram depois de driblar", "O resultado final", "A melhor jogada do jogo"], answer: 1, why: "Um padrão repete-se e tem números; uma jogada não é um padrão." },
            { objective: "O4", q: "Um possível padrão aparece em só duas jogadas. O que faz?", options: ["Monta um treino inteiro à volta dele", "Ignora todas as suas marcações", "Diz à equipa que é o seu maior problema", "Marca-o como \"ver mais\" e filma mais primeiro"], answer: 3, why: "Números pequenos podem enganar, por isso veja mais vídeo antes de decidir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar a IA para resumir as notas do vídeo",
          minutes: 5,
          goal: "Pedir a um assistente de IA para resumir as jogadas marcadas e verificar o resumo.",
          text: [
            "Pode copiar a sua tabela de marcações (sem nomes de jogadores além do seu e sem informações privadas) para um assistente de IA e pedir: \"Aqui estão as minhas jogadas marcadas. Resuma os três principais padrões com contagens e sugira uma pergunta para fazer ao meu treinador.\"",
            "A IA é boa a encontrar padrões em tabelas de texto, mas pode contar mal ou inventar coisas. Compare as contagens dela com as suas da lição anterior. Se forem diferentes, confie na sua folha e corrija o pedido.",
            "Algumas ferramentas de IA conseguem ver imagens ou vídeo, mas podem ler mal as ações rápidas do desporto. Use as suas próprias marcações como fonte principal e a IA como ajuda."
          ],
          steps: ["Copie a sua tabela de marcações, tirando os nomes dos outros jogadores e as informações privadas.", "Peça os três principais padrões com contagens.", "Compare com as suas próprias contagens.", "Corrija os erros; a sua folha é que vale."],
          words: [["Resumo", "uma versão curta que guarda os pontos principais."]],
          slides: [
            { title: "Peça um resumo à IA", bullets: ["Cole a sua tabela de marcações", "\"Três principais padrões com contagens\"", "\"Uma pergunta para o meu treinador\""] },
            { title: "Verifique", bullets: ["A IA pode contar mal ou inventar", "Compare com as suas contagens", "A sua folha é que vale"] },
            { title: "Privacidade", bullets: ["Sem nomes de outros jogadores", "Sem informações privadas"] }
          ],
          tryIt: "Cole as suas 20 jogadas marcadas num assistente de IA e peça os três principais padrões com contagens. Verifique cada contagem com a sua folha.",
          youCanNow: "usar a IA para resumir as marcações do vídeo e comparar o resumo com as suas próprias contagens.",
          quickCheck: [
            { objective: "O5", q: "O que pode correr mal quando a IA resume a sua tabela de marcações?", options: ["Pode contar mal ou inventar coisas", "Apaga sempre a sua folha", "Partilha o vídeo com todos", "Nada pode correr mal"], answer: 0, why: "A IA encontra padrões mas pode contar mal, por isso compare com as suas próprias contagens." },
            { objective: "O5", q: "A sua tabela de marcações tem os nomes dos colegas de equipa. O que faz antes de a colar na IA?", options: ["Cola-a como está", "Acrescenta os números de telefone deles", "Tira os nomes dos outros jogadores e as informações privadas", "Pede aos colegas para a colarem eles"], answer: 2, why: "Mantenha os nomes e as informações privadas dos outros jogadores fora das ferramentas de IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Transformar o vídeo num foco de treino",
          minutes: 5,
          goal: "Transformar o seu principal padrão num foco de treino combinado com o seu treinador.",
          text: [
            "O vídeo só ajuda se mudar o treino. Pegue no seu padrão mais forte e transforme-o num foco: \"Proteger a bola quando sou pressionado do lado esquerdo\" ou \"Voltar para a defesa em três segundos depois de uma perda de bola.\"",
            "Leve ao seu treinador o padrão, os números e dois ou três tempos do vídeo que o mostram. Pergunte: \"Que exercício ajudaria nisto?\" Os treinadores gostam muito de atletas que chegam com provas e uma pergunta.",
            "Filme outra vez daqui a algumas semanas e volte a marcar com a mesma pergunta para ver se o padrão mudou. Isto é inteligência de jogo: aprender, treinar e verificar."
          ],
          steps: ["Escolha o seu padrão mais forte.", "Escreva um foco de treino.", "Escolha dois ou três tempos do vídeo que o mostram.", "Peça um exercício ao seu treinador.", "Volte a filmar e a marcar daqui a algumas semanas."],
          words: [["Foco de treino", "uma coisa concreta em que trabalha no treino."], ["Provas", "factos que mostram que algo é verdade, como contagens e tempos do vídeo."]],
          slides: [
            { title: "O vídeo tem de mudar o treino", bullets: ["Padrão mais forte -> um foco"] },
            { title: "Leve ao seu treinador", bullets: ["O padrão e os números", "Dois ou três tempos do vídeo", "\"Que exercício ajudaria?\""] },
            { title: "Feche o ciclo", bullets: ["Volte a filmar daqui a algumas semanas", "Volte a marcar com a mesma pergunta", "O padrão mudou?"] }
          ],
          tryIt: "Tarefa final: com as suas 20 jogadas marcadas e o resumo da IA, escreva um foco de treino e escolha dois tempos do vídeo. Mostre-o ao seu treinador e peça um exercício.",
          youCanNow: "transformar os padrões do vídeo num foco de treino e verificar mais tarde se melhorou.",
          quickCheck: [
            { objective: "O6", q: "O que faz um bom foco de treino?", options: ["\"Jogar melhor\"", "Uma lista de todos os erros", "Uma mudança concreta a partir do seu padrão mais forte", "O que a IA sugerir"], answer: 2, why: "Um foco tirado do seu padrão mais forte muda o treino." },
            { objective: "O6", q: "O seu treinador sugere um exercício para o seu foco. Como verifica se resultou?", options: ["Pergunta a um colega de equipa", "Volta a filmar daqui a algumas semanas e a marcar com a mesma pergunta", "Confia no que sente", "Pergunta à IA se resultou"], answer: 1, why: "Voltar a filmar e a marcar mostra se o padrão mudou." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Encontrar padrões e usá-los",
        questions: [
          { objective: "O4", q: "Qual é um padrão?", options: ["Um passe mau", "Um grande afundanço", "O resultado final", "7 de 9 perdas de bola foram a driblar para a esquerda sob pressão"], answer: 3, why: "Um padrão repete-se em muitas jogadas parecidas." },
          { objective: "O4", q: "O que faz a fórmula COUNTIF?", options: ["Conta as células iguais a uma marcação", "Reproduz vídeo", "Apaga linhas", "Acrescenta cores"], answer: 0, why: "A COUNTIF conta as células que correspondem." },
          { objective: "O5", q: "A contagem de perdas de bola da IA é diferente da sua folha. Em que confia?", options: ["Na IA", "Na que for maior", "Na sua folha, e depois corrige o pedido", "Em nenhuma"], answer: 2, why: "As suas marcações são a fonte principal; a IA pode contar mal." },
          { objective: "O5", q: "Antes de colar as marcações na IA, tire:", options: ["Os tempos do vídeo", "Os resultados", "As situações", "Os nomes dos outros jogadores e as informações privadas"], answer: 3, why: "Proteja a privacidade das outras pessoas." },
          { objective: "O6", q: "O que deve levar ao seu treinador?", options: ["Só queixas", "O padrão, os números e os tempos do vídeo, mais uma pergunta", "O vídeo inteiro sem notas", "Uma redação feita pela IA"], answer: 1, why: "Provas e uma pergunta tornam a conversa útil." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Análise de Vídeo e Inteligência de Jogo",
    questions: [
      { objective: "O1", q: "Segurar o telefone deitado ao filmar chama-se:", options: ["Vertical", "Selfie", "Horizontal", "Zoom"], answer: 2, why: "A horizontal dá uma imagem larga." },
      { objective: "O1", q: "Porque filmar de um lugar alto?", options: ["Para ver a jogada inteira e o espaço", "Para se esconder", "Para ter melhor som", "É uma regra"], answer: 0, why: "A altura mostra todos os que participam." },
      { objective: "O1", q: "O que mantém a câmara estável?", options: ["Um tripé ou apoiá-la", "Correr com ela", "Usar o zoom", "Abaná-la"], answer: 0, why: "Um vídeo estável é mais fácil de estudar." },
      { objective: "O1", q: "Os vídeos de desporto de jovens muitas vezes mostram outras crianças. Por isso deve:", options: ["Publicá-los em qualquer lado", "Não desfocar nada", "Perguntar antes de filmar e partilhar", "Vendê-los"], answer: 2, why: "As equipas e as famílias têm regras de privacidade." },
      { objective: "O2", q: "Ver o vídeo sem plano normalmente faz com que repare:", options: ["Em todos os padrões", "Só nos melhores momentos e nos grandes erros", "Em nada", "Nas notas do treinador"], answer: 1, why: "Sem uma pergunta, não vê os padrões." },
      { objective: "O2", q: "Quantas perguntas por visualização?", options: ["Dez", "Nenhuma", "O máximo possível", "Uma"], answer: 3, why: "Uma pergunta precisa mantém o foco." },
      { objective: "O2", q: "Na segunda visualização, você:", options: ["Avança tudo depressa", "Tira o som", "Para nas jogadas que respondem à sua pergunta", "Salta-a"], answer: 2, why: "Parar deixa você anotar os detalhes." },
      { objective: "O2", q: "Inteligência de jogo quer dizer perceber:", options: ["Só o resultado", "Só as estatísticas", "O calendário", "Porque as jogadas acontecem"], answer: 3, why: "Trata do porquê, e não só do quê." },
      { objective: "O3", q: "O tempo do vídeo de uma jogada é:", options: ["O momento do vídeo em que a jogada começa", "A data do jogo", "Um carimbo num bilhete", "O apito final"], answer: 0, why: "Os tempos do vídeo deixam você encontrar uma jogada depressa." },
      { objective: "O3", q: "Qual é uma coluna de marcação?", options: ["Música preferida", "Situação", "O tempo amanhã", "A sua palavra-passe"], answer: 1, why: "A Situação é uma marcação importante." },
      { objective: "O3", q: "Quantas jogadas deve marcar, pelo menos?", options: ["1", "3", "20", "500"], answer: 2, why: "Vinte chegam para ver padrões." },
      { objective: "O3", q: "Se a sua equipa usa uma aplicação de vídeo como o Hudl, deve:", options: ["Perguntar ao seu treinador como usar as marcações dela", "Ignorá-la", "Apagá-la", "Partilhar o acesso na internet"], answer: 0, why: "Use o que a sua equipa usa, da forma que o seu treinador quer." },
      { objective: "O4", q: "Uma coisa aconteceu só duas vezes. Deve:", options: ["Dizer que é um grande padrão", "Contar a toda a gente", "Mudar de posição", "Ver mais vídeo primeiro"], answer: 3, why: "Números pequenos podem enganar." },
      { objective: "O4", q: "Para encontrar os seus principais padrões no Sheets, pode:", options: ["Imprimir", "Ordenar, filtrar ou usar COUNTIF", "Mudar o tipo de letra", "Acrescentar imagens"], answer: 1, why: "Essas ferramentas contam e agrupam as marcações." },
      { objective: "O5", q: "O que deve pedir à IA para fazer com as suas marcações?", options: ["Escolher a sua equipa", "Resumir os principais padrões com contagens", "Publicá-las na internet", "Dar nota ao seu treinador"], answer: 1, why: "Resumir é um ponto forte da IA." },
      { objective: "O5", q: "As ferramentas de IA que leem o vídeo diretamente podem:", options: ["Nunca errar", "Substituir os treinadores", "Ser obrigatórias", "Ler mal as ações rápidas do desporto"], answer: 3, why: "Use as suas próprias marcações como fonte principal." },
      { objective: "O6", q: "Um bom foco de treino é:", options: ["\"Proteger a bola quando sou pressionado do lado esquerdo\"", "\"Ser melhor\"", "\"Ganhar\"", "\"Esforçar-me\""], answer: 0, why: "É concreto e dá para treinar." },
      { objective: "O6", q: "Que pergunta ao seu treinador é a melhor?", options: ["\"Porque não jogo mais?\"", "\"Ver vídeos é chato?\"", "\"Aqui estão 3 vídeos curtos deste padrão. Que exercício ajudaria?\"", "\"Posso faltar ao treino?\""], answer: 2, why: "Provas e uma pergunta trazem uma resposta útil." },
      { objective: "O6", q: "Como sabe se o seu foco de treino resultou?", options: ["Adivinha", "Pergunta a um adepto", "Vê as redes sociais", "Volta a filmar e a marcar com a mesma pergunta mais tarde"], answer: 3, why: "Voltar a marcar mostra se o padrão mudou." },
      { objective: "O6", q: "O vídeo só ajuda se:", options: ["Tiver muitas visualizações", "Mudar o que treina", "For comprido", "Tiver música"], answer: 1, why: "O objetivo é treinar e jogar melhor." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 5, 9, 12, 14, 16]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Vídeo e autorização", objective: "O1", notYet: "Filmou sem autorização, ou o vídeo treme demasiado ou está apertado demais para ver a jogada.", meets: "Com autorização, vídeo na horizontal de um lugar alto, com uma imagem larga e estável.", exceeds: "Bateria e memória verificadas e o jogo ou treino inteiro gravado sem falhas." },
      { name: "Folha de marcação", objective: "O3", notYet: "Menos de 20 jogadas, colunas em falta, ou as palavras de marcação mudam.", meets: "Pelo menos 20 jogadas marcadas nas seis colunas com as mesmas palavras de marcação todas as vezes.", exceeds: "Cada linha tem um tempo do vídeo e uma nota curta ligada à pergunta." },
      { name: "Padrões e verificação da IA", objective: "O5", notYet: "Sem contagens, ou o resumo da IA é usado sem verificar.", meets: "Principais padrões escritos com contagens e as contagens da IA verificadas com a folha, sem os nomes.", exceeds: "As diferenças são encontradas e o pedido é corrigido; os padrões com números pequenos estão marcados como \"ver mais\"." },
      { name: "Foco de treino", objective: "O6", notYet: "Sem foco, ou o foco é vago.", meets: "Um foco concreto a partir do padrão mais forte, revisto com o treinador usando números e tempos do vídeo.", exceeds: "Um exercício é combinado e é marcada uma data para voltar a filmar e a marcar com a mesma pergunta." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam a tarefa final e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que dizem ter voltado a filmar e a marcar com a mesma pergunta em 30 dias (inquérito de seguimento)",
      "Treinadores que dizem ter mudado um exercício ou um foco de treino por causa das provas em vídeo de um atleta",
      "Alunos que fazem outro curso de Atletas, como IA para Desportos de Equipa"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com câmara, carregado e com espaço de memória livre",
      "Um tripé ou uma forma de apoiar o telefone (opcional)",
      "Uma conta Google gratuita para o Google Sheets",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Cerca de 60 minutos de lições, mais 60 a 90 minutos para filmar e marcar"
    ],
    facilitatorNotes: [
      "Confirme as regras de filmagem da equipa, da escola e da liga antes de alguém filmar, sobretudo em jogos de jovens com menores.",
      "Combine com os atletas onde o vídeo fica guardado e que não é publicado sem autorização.",
      "Numa sessão de equipa, dê a todos a mesma lista de palavras de marcação para as contagens poderem ser comparadas.",
      "Mostre como tirar os nomes dos outros jogadores antes de colar na IA, e peça aos atletas para compararem as contagens da IA com a sua folha.",
      "Marque revisões curtas com o treinador para cada atleta poder apresentar o seu padrão, os tempos do vídeo e a sua pergunta."
    ]
  }
};
