"use strict";

// Koach Learn course (Portuguese translation of shared/typing-keyboarding.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "typing-keyboarding-pt",
  lang: "pt",
  translationOf: "typing-keyboarding",
  category: "Workforce Development",
  name: "Dactilografia e Uso do Teclado",
  skills: "Postura segura para escrever, Escrever sem olhar a partir da fila base, Números e o teclado numérico, Medir a velocidade e a precisão, Atalhos de teclado, Planear a prática diária",
  outcome: "preparar um lugar seguro para escrever, escrever sem olhar para as teclas a partir da fila base, introduzir números e símbolos, medir a sua própria velocidade e precisão, usar os principais atalhos de edição e seguir um plano de prática de quatro semanas para se preparar para um teste de dactilografia de emprego.",
  about: [
    "Muitos empregos pedem que você escreva no computador: trabalho de escritório e de receção, chat de atendimento ao cliente, introdução de dados, registos médicos, trabalhos escolares e candidaturas pela internet. Alguns empregadores fazem um pequeno teste de dactilografia antes de contratar. Este curso é para jovens à procura do primeiro emprego, adultos que mudam de profissão, idosos que querem escrever com menos esforço e qualquer pessoa que escreve com dois dedos e quer fazer melhor.",
    "Você vai preparar a cadeira e o teclado para que escrever não doa, aprender onde vai cada dedo, praticar números e símbolos, medir o seu tempo e calcular as suas palavras por minuto e a sua precisão, e aprender os atalhos que poupam tempo no trabalho. No final, escreve o seu próprio plano de prática de quatro semanas, com uma pontuação inicial e uma meta.",
    "Só precisa de um teclado de computador e de qualquer programa onde possa escrever, como o Notepad, o TextEdit, o Google Docs ou o Microsoft Word. Um site de prática gratuito ajuda, mas não é obrigatório: todos os exercícios funcionam também com um editor de texto, papel e o cronómetro do telefone.",
    "Cada lição dura cerca de cinco minutos e é seguida de um exercício \"Experimente agora\" e de uma verificação rápida de duas perguntas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. A escrita melhora com a prática diária, por isso o curso dá-lhe um plano, não um atalho."
  ],
  finalTask: "Faça o seu plano de prática de dactilografia de quatro semanas. Faça um teste cronometrado de um minuto e anote as suas palavras por minuto e a sua precisão iniciais, defina uma meta para as duas e escreva um plano diário com datas: 10 a 15 minutos por dia com um aquecimento, um exercício para as teclas mais fracas, um exercício de números ou de atalhos e um teste cronometrado por semana. Acrescente uma tabela de registo para preencher todas as semanas e uma nota sobre como vai fazer um teste de dactilografia de emprego.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas de todas as idades à procura de emprego: jovens à procura do primeiro emprego, adultos que mudam de profissão ou voltam a trabalhar, idosos, pessoas que voltam para casa depois da prisão e pessoas que falam uma segunda língua. Muitas usam o telefone todos os dias, mas escrevem no computador com dois dedos a olhar para as teclas.",
    startingPoint: "Sabem ligar um computador, abrir um programa e escrever uma frase a olhar para as teclas (como ensinado em \"Competências Básicas de Informática\"). A maioria nunca aprendeu a fila base, não sabe a sua velocidade e usa o rato para cada copiar, colar e anular.",
    gap: "Os empregos de escritório, de atendimento ao cliente, de introdução de dados e de saúde esperam uma escrita regular e precisa, e alguns empregadores testam a velocidade de escrita antes de contratar. Escrever à procura de cada tecla é lento, cansativo e cheio de erros. Os alunos precisam de bons hábitos de dedos, de uma forma de medir o progresso, de uma postura segura e de um plano diário que consigam manter sozinhos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um teclado de computador de secretária ou portátil; o teclado no ecrã de um telefone ou tablet não serve para os exercícios de escrita sem olhar",
      "Alguns alunos só têm um computador da biblioteca ou de um programa por pouco tempo",
      "Tempo: lições de 4 a 6 minutos e mais 10 a 15 minutos de prática por dia",
      "Conforto e saúde: pare se escrever causar dor ou dormência e fale com um profissional de saúde"
    ],
    prerequisites: "Saber ligar um computador e abrir um programa para escrever. Quem nunca usou um computador faz primeiro o curso \"Competências Básicas de Informática\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma cadeira, uma mesa e um computador", action: "ajustar a cadeira, o teclado e o ecrã e sentar-se numa postura segura para escrever", standard: "cumprindo pelo menos 5 dos 6 pontos da lista de verificação de preparação" },
    { id: "O2", condition: "Usando um teclado de computador", action: "pôr os dedos na fila base e carregar em cada tecla de letra com o dedo certo", standard: "escrevendo uma linha inteira de exercício sem olhar para as teclas" },
    { id: "O3", condition: "Com um teste de dactilografia cronometrado de um minuto ou mais", action: "calcular as suas palavras por minuto e a sua precisão", standard: "com os dois números calculados corretamente" },
    { id: "O4", condition: "Com uma lista de números de telefone, preços, datas e maiúsculas", action: "escrever números, símbolos e letras maiúsculas com a fila dos números, as teclas Shift e o teclado numérico", standard: "com no máximo 2 erros em 10 linhas" },
    { id: "O5", condition: "Enquanto escreve e corrige um documento curto", action: "usar atalhos de teclado para selecionar, copiar, colar, anular e guardar", standard: "fazendo os cinco sem o rato" },
    { id: "O6", condition: "Usando a sua própria pontuação do teste inicial", action: "escrever um plano de prática de quatro semanas com uma meta, exercícios diários, datas e um registo", standard: "que cumpra todas as linhas da grelha de avaliação do curso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar as mãos",
      lessons: [
        {
          title: "Preparar-se para escrever com segurança",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ajustar a cadeira, o teclado e o ecrã e sentar-se numa postura que não force o corpo.",
          text: [
            "Escrever durante horas numa má posição pode causar dores no pescoço, nas costas, nos pulsos e nas mãos. Uma boa preparação não custa nada e ajuda-o a escrever mais depressa, porque as mãos relaxadas mexem-se com mais facilidade.",
            "A OSHA, a agência dos EUA para a segurança no trabalho, descreve uma postura neutra para o trabalho no computador: cabeça e pescoço equilibrados e alinhados com o corpo, ombros relaxados, cotovelos perto do corpo, pulsos e mãos direitos e alinhados com os antebraços, parte de baixo das costas apoiada e pés assentes no chão. A parte de cima do ecrã deve ficar à altura dos olhos ou um pouco abaixo. Não há uma posição perfeita para todos, por isso ajuste até se sentir à vontade.",
            "Mantenha o teclado perto, para não ter de esticar os braços. Deixe os dedos flutuar sobre as teclas e toque-lhes de leve; não apoie os pulsos com força na beira da mesa enquanto escreve. Faça pequenas pausas para se levantar, alongar e olhar para longe do ecrã. Se escrever alguma vez causar dor, formigueiro ou dormência que não passa, pare e fale com um médico ou enfermeiro."
          ],
          steps: ["Sente-se bem para trás na cadeira para que a parte de baixo das costas fique apoiada. Use uma toalha enrolada ou uma almofada se precisar.", "Ponha os pés assentes no chão ou numa caixa ou apoio para os pés.", "Puxe o teclado para perto para que os cotovelos fiquem junto ao corpo.", "Mantenha os pulsos direitos, alinhados com os antebraços, e os ombros relaxados.", "Mova o ecrã para que a parte de cima fique à altura dos olhos ou um pouco abaixo.", "Planeie uma pequena pausa para se levantar e alongar mais ou menos a cada 30 a 60 minutos."],
          words: [["Postura", "a forma como segura o corpo quando está sentado ou de pé."], ["Postura neutra", "uma posição relaxada e equilibrada em que as articulações não estão dobradas nem torcidas."], ["Ergonomia", "preparar o trabalho e as ferramentas para que se adaptem ao corpo e não o magoem."], ["OSHA", "a Occupational Safety and Health Administration, a agência dos EUA para a segurança no trabalho."]],
          slides: [
            { title: "Porque é que a preparação importa", bullets: ["Uma má postura pode magoar o pescoço, as costas e os pulsos", "Mãos relaxadas escrevem mais depressa", "Uma boa preparação é gratuita"] },
            { title: "A postura neutra", bullets: ["Cabeça alinhada com o corpo, ombros relaxados", "Cotovelos perto, pulsos direitos", "Costas apoiadas em baixo, pés assentes no chão"] },
            { title: "Teclado e ecrã", bullets: ["Teclado perto para não esticar os braços", "Parte de cima do ecrã à altura dos olhos ou um pouco abaixo", "Toque nas teclas de leve; deixe os dedos flutuar"] },
            { title: "Cuide do seu corpo", bullets: ["Faça pequenas pausas para se levantar e alongar", "Dor, formigueiro ou dormência: pare e consulte um médico ou enfermeiro"] }
          ],
          sources: [{ name: "OSHA: Computer Workstations eTool", url: "https://www.osha.gov/etools/computer-workstations" }],
          tryIt: "Copie esta lista de seis pontos para um papel: costas apoiadas, pés assentes, cotovelos perto, pulsos direitos, ombros relaxados, parte de cima do ecrã à altura dos olhos ou abaixo. Sente-se no computador onde vai praticar, marque cada ponto que cumpre e corrija os que não cumpre.",
          youCanNow: "ajustar uma cadeira, um teclado e um ecrã para escrever com segurança e verificar a sua postura com uma lista de seis pontos.",
          quickCheck: [
            { objective: "O1", q: "Onde deve ficar a parte de cima do ecrã do computador?", options: ["Bem acima da sua cabeça", "À altura dos olhos ou um pouco abaixo", "Deitado na mesa", "Ao lado dos joelhos"], answer: 1, why: "A orientação da OSHA põe a parte de cima do monitor à altura dos olhos ou um pouco abaixo, para que o pescoço fique equilibrado." },
            { objective: "O1", q: "Os seus pulsos dobram-se muito para cima enquanto escreve. O que muda?", options: ["Escrevo mais depressa para acabar mais cedo", "Empurro o teclado para mais longe", "Levanto os ombros", "Ajusto a cadeira ou o teclado para que os pulsos fiquem direitos"], answer: 3, why: "Os pulsos devem ficar direitos, alinhados com os antebraços; pulsos dobrados forçam mais." }
          ]
        },
        {
          title: "A fila base e o mapa dos dedos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Pôr os dedos na fila base e carregar em cada tecla de letra com o dedo certo sem olhar.",
          text: [
            "Escrever sem olhar (dactilografia) quer dizer escrever sem olhar para as teclas. Cada dedo tem as suas teclas, por isso as mãos aprendem onde estão as letras. No início parece mais lento, mas depois de algumas semanas de prática fica mais rápido e mais preciso do que olhar.",
            "Os dedos começam e voltam sempre à fila base. Mão esquerda: mindinho no A, anelar no S, dedo do meio no D, indicador no F. Mão direita: indicador no J, dedo do meio no K, anelar no L, mindinho no ponto e vírgula (;). Os polegares descansam na barra de espaço. A maioria dos teclados tem um pequeno relevo no F e no J para encontrar a posição base sem olhar.",
            "Cada dedo sobe e desce a partir da sua tecla base. Mindinho esquerdo: Q, A, Z. Anelar esquerdo: W, S, X. Dedo do meio esquerdo: E, D, C. Indicador esquerdo: R, F, V e também T, G, B. Indicador direito: Y, H, N e também U, J, M. Dedo do meio direito: I, K e a vírgula. Anelar direito: O, L e o ponto final. Mindinho direito: P, o ponto e vírgula, a barra e a tecla Enter. Depois de cada movimento, o dedo volta à base."
          ],
          steps: ["Encontre os relevos no F e no J com os dedos indicadores.", "Pouse os outros dedos em A S D e K L ;, e os polegares na barra de espaço.", "Olhe para o ecrã, não para as mãos. Cubra as mãos com um pano se continuar a olhar.", "Escreva devagar: chegue à tecla com o dedo certo e depois volte à base.", "No início, diga baixinho cada letra enquanto a escreve e mantenha um ritmo regular."],
          words: [["Dactilografia (escrever sem olhar)", "escrever sem olhar para as teclas, usando sempre o mesmo dedo para cada tecla."], ["Fila base", "a fila do meio das letras onde os dedos descansam: A S D F e J K L ;."], ["Escrever à procura das teclas","procurar cada tecla com os olhos e carregar nela com um ou dois dedos."], ["Movimento", "levar um dedo da sua tecla base para outra tecla e voltar."]],
          slides: [
            { title: "Escrever sem olhar", bullets: ["Escreva sem olhar para as teclas", "Cada dedo tem as suas próprias teclas", "Mais lento no início, mais rápido com prática"] },
            { title: "Fila base", bullets: ["Esquerda: A S D F", "Direita: J K L ;", "Polegares na barra de espaço; relevos no F e no J"] },
            { title: "Movimentos", bullets: ["Cada dedo sobe ou desce a partir da base", "Os indicadores também cobrem T G B e Y H N", "Volte à base depois de cada movimento"] },
            { title: "Hábitos que funcionam", bullets: ["Olhos no ecrã", "Ritmo lento e regular", "Primeiro a precisão; a velocidade vem depois"] }
          ],
          tryIt: "Abra o Notepad, o TextEdit, o Google Docs ou o Word. Sem olhar para as mãos, escreva cada linha três vezes: asdf jkl; depois fdsa ;lkj depois sad lad fall flask depois dad has a glass. Depois escreva: the quick brown fox jumps over the lazy dog. Conte quantas vezes olhou para baixo.",
          youCanNow: "encontrar a fila base pelo tato, usar o dedo certo para cada letra e praticar uma linha sem olhar para as teclas.",
          quickCheck: [
            { objective: "O2", q: "Que teclas têm pequenos relevos para ajudar a encontrar a fila base?", options: ["F e J", "A e ;", "Q e P", "Z e M"], answer: 0, why: "Os relevos no F e no J deixam os indicadores encontrar a base sem olhar." },
            { objective: "O2", q: "Que dedo escreve a letra E?", options: ["O indicador direito", "O mindinho esquerdo", "O dedo do meio esquerdo", "O polegar direito"], answer: 2, why: "O E fica logo acima do D, que pertence ao dedo do meio esquerdo." }
          ]
        },
        {
          title: "Maiúsculas, números, símbolos e o teclado numérico",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escrever letras maiúsculas, números e símbolos comuns, e introduzir números no teclado numérico.",
          text: [
            "Para uma letra maiúscula, segure a tecla Shift com o mindinho da OUTRA mão, carregue na letra e depois solte. Para um A maiúsculo (mão esquerda), use o Shift da direita. Para um J maiúsculo (mão direita), use o Shift da esquerda. O Caps Lock serve para escrever uma palavra inteira em maiúsculas; desligue-o depois.",
            "A fila dos números fica por cima das letras. Cada dedo sobe a partir da sua tecla base: o mindinho esquerdo escreve o 1, o anelar esquerdo o 2, o dedo do meio esquerdo o 3, o indicador esquerdo o 4 e o 5, o indicador direito o 6 e o 7, o dedo do meio direito o 8, o anelar direito o 9 e o mindinho direito o 0. Os símbolos nas mesmas teclas, como $ % @ # e !, precisam do Shift.",
            "Muitos teclados de computador de secretária têm um teclado numérico à direita, organizado como uma calculadora. Os empregos de introdução de dados, faturação, banca e armazém usam-no muito. Ligue o Num Lock. Pouse o indicador direito no 4, o dedo do meio no 5 (tem um relevo) e o anelar no 6. O polegar carrega no 0 e o mindinho carrega no Enter. Muitos portáteis não têm teclado numérico; nesse caso use a fila dos números."
          ],
          steps: ["Maiúsculas: segure o Shift com o mindinho da mão oposta, carregue na letra e solte.", "Fila dos números: suba a partir da base com o mesmo dedo e depois volte.", "Símbolos: segure o Shift e carregue na tecla do número que mostra o símbolo.", "Teclado numérico: ligue o Num Lock e pouse os dedos no 4 5 6, usando o relevo do 5.", "Verifique os números duas vezes; um algarismo errado num preço ou num número de telefone é um erro a sério."],
          words: [["Tecla Shift", "a tecla que segura para ter uma letra maiúscula ou o símbolo de cima de uma tecla."], ["Caps Lock", "uma tecla que põe todas as letras em maiúsculas até carregar nela outra vez."], ["Teclado numérico", "o bloco de teclas de números do lado direito de muitos teclados, também chamado numpad ou 10-key."], ["Num Lock", "a tecla que liga os números do teclado numérico."], ["Introdução de dados", "escrever informações como nomes, números e códigos num sistema de computador."]],
          slides: [
            { title: "Letras maiúsculas", bullets: ["Segure o Shift com a mão oposta", "A maiúsculo: Shift da direita; J maiúsculo: Shift da esquerda", "Caps Lock só para palavras inteiras"] },
            { title: "Fila dos números e símbolos", bullets: ["Suba a partir da base com o mesmo dedo", "Símbolos como $ % @ precisam do Shift", "Volte à base depois de cada movimento"] },
            { title: "O teclado numérico (10-key)", bullets: ["Ligue o Num Lock", "Pouse os dedos no 4 5 6; o relevo está no 5", "Polegar no 0, mindinho no Enter"] },
            { title: "Os números têm de estar exatos", bullets: ["Um algarismo errado é um erro a sério", "Verifique duas vezes preços, datas e números de telefone"] }
          ],
          tryIt: "Escreva estas dez linhas e depois compare cada uma com a página: (555) 014-2290 | $12.75 | 03/15/2026 | Order #4471 | 40% off | Maria Lopez | Dr. Kim, Room 210 | 7:30 a.m. | ID 88-31-05 | Total: $1,049.60. Use o teclado numérico se tiver um. Conte os seus erros e pratique as linhas em que errou.",
          youCanNow: "escrever maiúsculas com a tecla Shift oposta, introduzir números e símbolos a partir da fila dos números e usar o teclado numérico a partir do 4 5 6.",
          quickCheck: [
            { objective: "O4", q: "Quer um P maiúsculo (uma tecla da mão direita). Que Shift segura?", options: ["O Shift da direita", "O Caps Lock", "Qualquer Shift com a mesma mão", "O Shift da esquerda"], answer: 3, why: "Use o Shift da mão oposta, para que a mão direita fique livre para carregar no P." },
            { objective: "O4", q: "No teclado numérico, onde descansa o seu dedo do meio?", options: ["No 0", "No 5, a tecla com o relevo", "No Enter", "No 9"], answer: 1, why: "As teclas base do teclado numérico são 4 5 6, e o 5 tem o relevo para o dedo do meio." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar as mãos",
        questions: [
          { objective: "O1", q: "O que faz parte de uma postura segura para escrever?", options: ["Pés assentes no chão e a parte de baixo das costas apoiada", "Ombros levantados em direção às orelhas", "Pulsos muito dobrados para cima", "Teclado à distância de um braço esticado"], answer: 0, why: "Pés assentes, costas apoiadas e ombros relaxados fazem parte da postura neutra que a OSHA descreve." },
          { objective: "O1", q: "Depois de uma hora a escrever, a sua mão tem formigueiro e não passa. O que faz?", options: ["Escrevo com mais força para a aquecer", "Ignoro e continuo", "Paro e falo com um médico ou enfermeiro", "Passo a escrever com um dedo só"], answer: 2, why: "Dor, formigueiro ou dormência que não passam são um sinal para parar e ser visto por um profissional de saúde." },
          { objective: "O2", q: "Onde descansa o seu indicador direito?", options: ["No F", "No H", "No ;", "No J"], answer: 3, why: "O indicador direito descansa no J, a tecla com o relevo." },
          { objective: "O2", q: "Continua a olhar para as mãos. O que ajuda mais?", options: ["Olhar para as teclas com mais atenção", "Cobrir as mãos com um pano e escrever devagar", "Passar a escrever com dois dedos", "Desligar o ecrã"], answer: 1, why: "Cobrir as mãos obriga-o a confiar na memória dos dedos, que é como se aprende a escrever sem olhar." },
          { objective: "O4", q: "Um formulário de emprego pede um preço: $49.99. Como escreve o sinal $?", options: ["Seguro o Shift e carrego na tecla 4", "Carrego no Caps Lock e depois no 4", "Carrego duas vezes na tecla 4", "Seguro o Shift e carrego na tecla S"], answer: 0, why: "O $ é o símbolo com Shift na tecla 4 da fila dos números de um teclado dos EUA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Velocidade, precisão e um plano",
      lessons: [
        {
          title: "Medir a sua velocidade e a sua precisão",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular as suas palavras por minuto e a sua precisão a partir de um teste de dactilografia cronometrado.",
          text: [
            "A velocidade de escrita conta-se em palavras por minuto (WPM, do inglês words per minute). Como as palavras têm tamanhos diferentes, os testes contam cada 5 caracteres (letras, espaços e pontuação) como uma palavra. Assim, se escrever 200 caracteres num minuto, isso é 200 a dividir por 5 = 40 WPM. Num teste mais longo, divida também pelos minutos: 450 caracteres em 3 minutos são 90 palavras a dividir por 3 = 30 WPM.",
            "A precisão diz-lhe quantas das suas palavras estavam certas. Precisão = palavras certas a dividir por todas as palavras escritas, vezes 100. Se escreveu 50 palavras e 4 tinham erros, a precisão é 46 a dividir por 50 = 92%. Alguns testes também dão as WPM líquidas, que descontam os erros: os erros a dividir pelos minutos, subtraídos à sua velocidade.",
            "A precisão importa mais do que a velocidade. Quem escreve depressa mas faz muitos erros é lento no trabalho, porque cada erro tem de ser encontrado e corrigido. Primeiro ganhe precisão, depois velocidade. Pode medir o tempo com o cronómetro do telefone e um editor de texto (muitos programas mostram a contagem de caracteres), ou usar um site de prática gratuito como o typing.com, que lhe mostra a velocidade e a precisão."
          ],
          steps: ["Escolha um parágrafo que ainda não praticou, de um livro, de uma notícia ou de um anúncio de emprego.", "Ponha o cronómetro em 1 minuto (ou 3 minutos para uma pontuação mais estável).", "Escreva ao seu ritmo normal sem parar para corrigir erros.", "Conte os caracteres, incluindo os espaços, ou use a contagem de caracteres do programa.", "Velocidade: caracteres a dividir por 5 e depois a dividir pelos minutos.", "Precisão: palavras certas a dividir por palavras escritas, vezes 100. Anote os dois com a data."],
          words: [["WPM", "palavras por minuto (words per minute): quantas palavras escreve num minuto."], ["Palavra padrão", "5 caracteres, incluindo espaços e pontuação, contados como uma palavra nos testes de dactilografia."], ["Precisão", "a percentagem do que escreveu que está certa."], ["WPM líquidas", "a sua velocidade depois de descontar os erros."], ["Caráter", "qualquer letra, número, espaço ou símbolo que escreve."]],
          slides: [
            { title: "Palavras por minuto", bullets: ["Cada 5 caracteres contam como 1 palavra", "200 caracteres em 1 minuto = 40 WPM", "450 caracteres em 3 minutos = 30 WPM"] },
            { title: "Precisão", bullets: ["Palavras certas a dividir por palavras escritas, vezes 100", "46 certas em 50 = 92%", "As WPM líquidas descontam os erros"] },
            { title: "Primeiro a precisão", bullets: ["Cada erro custa tempo a corrigir", "Ganhe precisão, depois velocidade"] },
            { title: "Como fazer o seu teste", bullets: ["Um parágrafo novo e o cronómetro do telefone", "Ou um site gratuito como o typing.com", "Anote a pontuação e a data"] }
          ],
          sources: [{ name: "Typing.com (free typing lessons and tests)", url: "https://www.typing.com/" }],
          tryIt: "Faça um teste de um minuto: ligue o cronómetro, escreva um parágrafo novo de um anúncio de emprego ou de uma notícia e pare quando o tempo acabar. Conte os caracteres (ou use a contagem de caracteres), calcule as suas WPM, marque os erros e calcule a sua precisão. Escreva os dois números e a data de hoje no topo de uma folha. Esta é a sua pontuação inicial.",
          youCanNow: "medir o seu tempo, calcular as suas palavras por minuto e a sua precisão e registar uma pontuação inicial.",
          quickCheck: [
            { objective: "O3", q: "Escreveu 250 caracteres num minuto. Qual é a sua velocidade?", options: ["25 WPM", "250 WPM", "100 WPM", "50 WPM"], answer: 3, why: "250 caracteres a dividir por 5 são 50 palavras, num minuto: 50 WPM." },
            { objective: "O3", q: "Escreveu 40 palavras e 2 tinham erros. Qual é a sua precisão?", options: ["80%", "98%", "95%", "38%"], answer: 2, why: "38 certas a dividir por 40 escritas é 0,95, ou seja, 95%." }
          ]
        },
        {
          title: "Atalhos e teclas de edição que poupam tempo",
          objectives: ["O5"],
          minutes: 5,
          goal: "Usar atalhos de teclado para selecionar, copiar, colar, anular e guardar sem o rato.",
          text: [
            "Cada vez que estende a mão para o rato, as suas mãos saem da fila base. Os atalhos de teclado deixam-no editar sem parar. No Windows usam a tecla Ctrl; num Mac, a maioria usa antes a tecla Command.",
            "Os cinco principais: Ctrl+A seleciona tudo, Ctrl+C copia, Ctrl+V cola, Ctrl+Z anula a última alteração e Ctrl+S guarda. Ctrl+X corta (tira e copia). Para fazer um atalho, segure o Ctrl, toque na letra e depois solte as duas teclas.",
            "As teclas de edição também ajudam. O Backspace apaga à esquerda do cursor; o Delete apaga à direita. As setas mexem o cursor. Home e End saltam para o início ou o fim de uma linha. Segure o Shift com uma seta para selecionar texto uma letra de cada vez. Em muitos programas, Ctrl com a seta para a esquerda ou para a direita salta uma palavra inteira. Corrija um erro quando o vê, mas não pare de escrever para rever cada letra."
          ],
          steps: ["Segure o Ctrl (Command num Mac) com o mindinho esquerdo.", "Toque na letra: A selecionar tudo, C copiar, X cortar, V colar, Z anular, S guardar.", "Solte as duas teclas.", "Use o Shift com as setas para selecionar parte de uma linha.", "Pratique cada atalho cinco vezes para que se torne um hábito."],
          words: [["Atalho", "uma combinação de teclas que faz uma tarefa sem o rato."], ["Ctrl", "a tecla Control de um teclado Windows, usada na maioria dos atalhos."], ["Tecla Command", "a tecla com o símbolo ⌘ nos teclados Mac, que faz o que o Ctrl faz no Windows."], ["Cursor", "o traço a piscar que mostra onde vai aparecer o que escreve."], ["Anular", "desfazer a última alteração que fez."]],
          slides: [
            { title: "Porquê atalhos", bullets: ["As mãos ficam no teclado", "Menos idas ao rato", "Windows: Ctrl; Mac: normalmente Command"] },
            { title: "Os cinco principais", bullets: ["Ctrl+A selecionar tudo, Ctrl+C copiar, Ctrl+V colar", "Ctrl+Z anular", "Ctrl+S guardar; Ctrl+X cortar"] },
            { title: "Teclas de edição", bullets: ["Backspace apaga à esquerda; Delete apaga à direita", "Home e End saltam para o início ou o fim da linha", "Shift + seta seleciona texto"] }
          ],
          tryIt: "Escreva três linhas curtas sobre um emprego que quer. Depois, sem tocar no rato: selecione tudo (Ctrl+A), copie (Ctrl+C), vá até ao fim com a tecla End e as setas, cole (Ctrl+V), anule a colagem (Ctrl+Z) e guarde o ficheiro (Ctrl+S). Num Mac, use Command em vez de Ctrl. Faça isto duas vezes.",
          youCanNow: "selecionar, copiar, cortar, colar, anular e guardar com o teclado e mover-se numa linha com as teclas de edição.",
          quickCheck: [
            { objective: "O5", q: "Acabou de apagar um parágrafo sem querer. Que atalho o traz de volta no Windows?", options: ["Ctrl+Z", "Ctrl+S", "Ctrl+A", "Ctrl+P"], answer: 0, why: "Ctrl+Z anula a última alteração." },
            { objective: "O5", q: "Num Mac, que tecla usa a maioria dos atalhos em vez do Ctrl?", options: ["Shift", "Command", "Caps Lock", "Tab"], answer: 1, why: "A maioria dos atalhos do Mac usa a tecla Command onde o Windows usa o Ctrl." }
          ]
        },
        {
          title: "O seu plano de prática e o teste de dactilografia de emprego",
          objectives: ["O6", "O3"],
          minutes: 6,
          goal: "Escrever um plano de prática de quatro semanas com a sua pontuação inicial, uma meta, exercícios diários e um registo.",
          text: [
            "A escrita melhora com prática curta todos os dias, não com sessões longas ao fim de semana. 10 a 15 minutos por dia, na maioria dos dias, resultam melhor do que uma hora uma vez por semana, porque os dedos criam hábitos pela repetição. Mantenha os olhos no ecrã e a postura neutra sempre.",
            "Uma boa sessão diária tem quatro partes: um aquecimento de 2 minutos na fila base, um exercício para as teclas mais fracas (as que mais errou no teste), um exercício curto de números ou de atalhos, e texto real como um anúncio de emprego ou uma notícia. Uma vez por semana, faça um teste cronometrado e escreva a pontuação no seu registo. Defina primeiro uma meta de precisão, depois de velocidade, e compare cada semana com a sua pontuação inicial.",
            "Alguns empregadores fazem um teste de dactilografia antes de contratar. O anúncio de emprego ou o serviço de recrutamento normalmente diz o que é testado e a velocidade que querem; se não disser, pergunte. Antes do teste: sente-se numa boa posição, aqueça durante dois minutos, leia as instruções e escreva com regularidade, sem pressa. Nunca pague a um site que promete um certificado de dactilografia como condição para ter um emprego; o empregador faz o seu próprio teste."
          ],
          steps: ["Escreva as suas WPM, a precisão e a data iniciais da Lição 4.", "Defina uma meta para a semana 4: primeiro a precisão, depois a velocidade.", "Faça a lista das suas teclas mais fracas a partir do teste.", "Planeie cada dia: aquecimento, exercício das teclas fracas, exercício de números ou atalhos, texto real.", "Escolha um dia por semana para um teste cronometrado e faça uma tabela de registo: data, WPM, precisão, nota.", "Acrescente um plano para o dia do teste: postura, aquecimento, ler as instruções, ritmo regular."],
          words: [["Plano de prática", "um horário escrito do que vai praticar, quando e como vai medir o progresso."], ["Registo", "uma tabela onde escreve as suas pontuações todas as semanas."], ["Teclas fracas", "as teclas em que mais erra ou mais abranda."], ["Teste antes da contratação", "um teste que um empregador faz para verificar uma competência antes de contratar."]],
          slides: [
            { title: "Pouco e muitas vezes", bullets: ["10 a 15 minutos por dia, na maioria dos dias", "Melhor do que uma sessão longa por semana", "Olhos no ecrã e boa postura sempre"] },
            { title: "Uma sessão diária", bullets: ["Aquecimento na fila base", "Exercício das teclas mais fracas", "Números ou atalhos, depois texto real"] },
            { title: "Acompanhar o progresso", bullets: ["Um teste cronometrado por semana", "Registo: data, WPM, precisão, nota", "Primeiro a meta de precisão, depois a velocidade"] },
            { title: "O teste de dactilografia de emprego", bullets: ["O anúncio ou o empregador diz o que é testado", "Aqueça, leia as instruções, ritmo regular", "Nunca pague a um site por um certificado para ser contratado"] }
          ],
          sources: [{ name: "Typing.com (free typing lessons and tests)", url: "https://www.typing.com/" }],
          tryIt: "Tarefa final: escreva o seu plano de prática de quatro semanas. Ponha no topo as suas WPM e a precisão iniciais da Lição 4, defina uma meta para cada uma, faça a lista das teclas mais fracas e escreva a sessão de 10 a 15 minutos de cada dia, com datas. Acrescente uma tabela de registo com quatro linhas de testes semanais e um pequeno plano para o dia do teste.",
          youCanNow: "escrever e seguir um plano de dactilografia de quatro semanas com uma pontuação inicial, metas, exercícios diários e um registo semanal, e preparar-se para um teste de dactilografia de emprego.",
          quickCheck: [
            { objective: "O6", q: "Que horário de prática costuma desenvolver melhor a escrita?", options: ["Uma sessão de três horas por mês", "Praticar só na noite antes de um teste", "10 a 15 minutos na maioria dos dias", "Praticar só quando lhe apetece"], answer: 2, why: "A prática curta e regular cria hábitos nos dedos pela repetição." },
            { objective: "O6", q: "O que deve estar no topo do seu plano de prática?", options: ["O seu número da Segurança Social", "Uma lista de sites de dactilografia", "A sua música preferida", "As suas WPM, a precisão e a data iniciais"], answer: 3, why: "Uma pontuação inicial permite-lhe definir uma meta e ver o seu progresso todas as semanas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Velocidade, precisão e um plano",
        questions: [
          { objective: "O3", q: "Num teste de dactilografia, quantos caracteres contam como uma palavra?", options: ["1", "10", "5", "3"], answer: 2, why: "Os testes de dactilografia contam cada 5 caracteres, incluindo espaços, como uma palavra padrão." },
          { objective: "O3", q: "Escreveu 600 caracteres em 3 minutos. Qual é a sua velocidade?", options: ["40 WPM", "120 WPM", "200 WPM", "60 WPM"], answer: 0, why: "600 a dividir por 5 são 120 palavras; 120 a dividir por 3 minutos são 40 WPM." },
          { objective: "O5", q: "Que atalho copia o texto selecionado no Windows?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+S", "Ctrl+Z"], answer: 1, why: "Ctrl+C copia; Ctrl+V cola." },
          { objective: "O5", q: "Quer selecionar um documento inteiro para mudar o tipo de letra. Em que carrega?", options: ["Ctrl+X", "Home", "Backspace", "Ctrl+A"], answer: 3, why: "Ctrl+A seleciona todo o texto." },
          { objective: "O6", q: "O seu teste mostra que erra mais o P, o Q e o Z. O que acrescenta ao seu plano?", options: ["Um exercício diário de P, Q e Z", "Nada; salto essas letras", "Escrevo mais depressa para esconder os erros", "Pratico só a fila base"], answer: 0, why: "Treinar as teclas mais fracas é como um plano corrige os erros que o teste encontrou." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Dactilografia e Uso do Teclado",
    questions: [
      { objective: "O1", q: "Numa postura neutra para escrever, os seus pulsos ficam:", options: ["Muito dobrados para cima", "Direitos, alinhados com os antebraços", "Apoiados com força na beira da mesa", "Torcidos para o lado"], answer: 1, why: "Pulsos direitos e alinhados com os antebraços reduzem o esforço." },
      { objective: "O1", q: "Os seus pés não chegam ao chão na cadeira do escritório. O que pode fazer?", options: ["Deixá-los pendurados", "Sentar-me na ponta da cadeira", "Cruzar as pernas com força", "Usar uma caixa ou um apoio para que fiquem assentes"], answer: 3, why: "Os pés devem ficar assentes e apoiados; um apoio para os pés ou uma caixa faz isso." },
      { objective: "O1", q: "Porque é que se mantém o teclado perto de si?", options: ["Para os cotovelos ficarem perto do corpo e não ter de esticar os braços", "Para ver melhor as teclas", "Para o ecrã parecer maior", "Para poder escrever com uma mão"], answer: 0, why: "Um teclado perto mantém os cotovelos junto ao corpo e os ombros relaxados." },
      { objective: "O2", q: "O que é escrever sem olhar (dactilografia)?", options: ["Escrever num ecrã tátil", "Escrever com um dedo", "Escrever sem olhar para as teclas, com dedos fixos para cada tecla", "Escrever só letras maiúsculas"], answer: 2, why: "Escrever sem olhar usa o mesmo dedo para cada tecla, por isso não precisa de olhar." },
      { objective: "O2", q: "Que teclas formam a fila base da mão esquerda?", options: ["A S D F", "Q W E R", "Z X C V", "J K L ;"], answer: 0, why: "Os dedos esquerdos descansam em A S D F; os direitos em J K L ;." },
      { objective: "O2", q: "O seu indicador esquerdo vai até ao T. O que faz a seguir?", options: ["Fica no T", "Volta ao F, a sua tecla base", "Vai para a barra de espaço", "Vai para o J"], answer: 1, why: "Depois de cada movimento, o dedo volta à sua tecla base." },
      { objective: "O2", q: "Que dedo carrega na barra de espaço?", options: ["O mindinho esquerdo", "O anelar direito", "O indicador esquerdo", "Um polegar"], answer: 3, why: "Os polegares descansam na barra de espaço e carregam nela." },
      { objective: "O4", q: "Para escrever um S maiúsculo (uma tecla da mão esquerda), segura:", options: ["O Shift da esquerda", "O Caps Lock durante a frase toda", "O Shift da direita", "A tecla Ctrl"], answer: 2, why: "Use a tecla Shift da mão oposta à da letra." },
      { objective: "O4", q: "O teclado numérico escreve setas em vez de números. O que verifica?", options: ["Que o Num Lock está ligado", "Que o Caps Lock está ligado", "Que o ecrã está com brilho", "Que o Ctrl está a ser segurado"], answer: 0, why: "O Num Lock liga os números do teclado numérico." },
      { objective: "O4", q: "Está a introduzir o número de telefone de um cliente. Porque o verifica duas vezes?", options: ["Para escrever mais depressa", "Um algarismo errado torna o número todo errado", "Os números não contam como erros", "Para o ecrã o guardar"], answer: 1, why: "Nos números, um algarismo errado é um erro a sério que pode chegar à pessoa errada." },
      { objective: "O3", q: "O que quer dizer WPM?", options: ["Método de prática de escrita", "Trabalho por mês", "Palavras impressas por minuto", "Palavras por minuto (words per minute)"], answer: 3, why: "WPM quer dizer palavras por minuto, a medida habitual da velocidade de escrita." },
      { objective: "O3", q: "Escreveu 300 caracteres em 2 minutos. Qual é a sua velocidade?", options: ["60 WPM", "150 WPM", "30 WPM", "15 WPM"], answer: 2, why: "300 a dividir por 5 são 60 palavras; 60 a dividir por 2 minutos são 30 WPM." },
      { objective: "O3", q: "Escreveu 60 palavras e 6 tinham erros. A sua precisão é:", options: ["90%", "94%", "54%", "10%"], answer: 0, why: "54 certas a dividir por 60 escritas é 0,90, ou seja, 90%." },
      { objective: "O3", q: "O que deve desenvolver primeiro?", options: ["A velocidade, mesmo com muitos erros", "A precisão, depois a velocidade", "Nenhuma; só a postura importa", "Só a velocidade no teclado numérico"], answer: 1, why: "Cada erro leva tempo a corrigir, por isso começar pela precisão torna-o mais rápido no trabalho real." },
      { objective: "O5", q: "Que atalho guarda o seu ficheiro no Windows?", options: ["Ctrl+A", "Ctrl+V", "Ctrl+X", "Ctrl+S"], answer: 3, why: "Ctrl+S guarda." },
      { objective: "O5", q: "Porque é que se usam atalhos de teclado ao escrever?", options: ["Tornam o texto maior", "Ligam o Num Lock", "As mãos ficam no teclado, por isso trabalha mais depressa", "Verificam a ortografia"], answer: 2, why: "Os atalhos evitam idas ao rato e mantêm as mãos perto da fila base." },
      { objective: "O5", q: "Que tecla salta para o fim da linha?", options: ["End", "Tab", "Caps Lock", "Shift"], answer: 0, why: "End salta para o fim da linha; Home salta para o início." },
      { objective: "O6", q: "Com que frequência deve fazer um teste cronometrado no seu plano de quatro semanas?", options: ["De poucos em poucos minutos", "Uma vez por semana, escrito no registo", "Nunca; os testes atrasam-no", "Só uma vez, mesmo no fim"], answer: 1, why: "Um teste semanal num registo mostra o progresso sem tirar tempo à prática." },
      { objective: "O6", q: "Um site diz que tem de pagar o certificado de dactilografia dele para ser contratado. O que faz?", options: ["Pago logo", "Dou os meus dados bancários para reservar um lugar", "Envio o link a amigos para pagarem", "Não pago; os empregadores fazem o seu próprio teste"], answer: 3, why: "Os empregadores testam a escrita eles mesmos; pagar a um site para ser contratado é um sinal de alerta." },
      { objective: "O6", q: "Que sessão diária se encaixa num bom plano de prática?", options: ["Uma hora só da fila base", "Escrever qualquer coisa sem olhar para o ecrã", "Aquecimento, exercício das teclas fracas, exercício de números ou atalhos e depois texto real", "Só testes cronometrados todos os dias"], answer: 2, why: "Uma sessão curta que aquece, corrige as teclas fracas e usa texto real desenvolve a competência com regularidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 10, 12, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pontuação inicial", objective: "O3", notYet: "Não há pontuação inicial, ou as WPM e a precisão estão mal calculadas.", meets: "WPM e precisão iniciais de um teste cronometrado, bem calculadas, com a data.", exceeds: "Também mostra as contas (caracteres, minutos, erros) para que outra pessoa as possa verificar." },
      { name: "Metas e datas", objective: "O6", notYet: "Não há meta, ou não há datas para as quatro semanas.", meets: "Uma meta de precisão e uma de velocidade, com datas para cada dia ou semana.", exceeds: "A meta é realista para 10 a 15 minutos por dia e tem um ponto de controlo na semana 2." },
      { name: "Exercícios diários", objective: "O2", notYet: "A prática é só \"escrever mais\".", meets: "Cada sessão tem um aquecimento na fila base, um exercício de teclas fracas com nome e texto real.", exceeds: "As teclas fracas mudam de semana para semana com base no registo." },
      { name: "Números e atalhos", objective: "O4", notYet: "Não há prática de números, símbolos ou atalhos no plano.", meets: "O plano inclui linhas de números ou de teclado numérico e os atalhos principais.", exceeds: "A prática de números corresponde a um emprego-alvo, como preços para o comércio ou códigos para a introdução de dados." },
      { name: "Uso de atalhos", objective: "O5", notYet: "Usa o rato para cada copiar, colar, anular e guardar.", meets: "Consegue mostrar selecionar tudo, copiar, colar, anular e guardar com o teclado.", exceeds: "Também usa Home, End e Shift com as setas para editar." },
      { name: "Preparação segura e dia do teste", objective: "O1", notYet: "Não há verificação da postura nem plano para o dia do teste.", meets: "O plano começa cada sessão com a verificação de preparação de seis pontos e tem um plano para o dia do teste.", exceeds: "Inclui pausas planeadas e o que fazer se escrever doer." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Mudança nas WPM e na precisão entre a pontuação inicial e o teste da semana 4",
      "Alunos que dizem ter passado num teste de dactilografia ou de introdução de dados de um empregador em 30 dias (inquérito de seguimento)",
      "Alunos que se candidatam ou começam um emprego de escritório, de atendimento ao cliente ou de introdução de dados em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador de secretária ou portátil com teclado físico (um teclado numérico ajuda, mas não é obrigatório)",
      "Qualquer programa para escrever: Notepad, TextEdit, Google Docs ou Microsoft Word",
      "Um cronómetro de telefone ou de cozinha, papel e caneta para o registo",
      "Opcional: um site de prática gratuito como o typing.com",
      "Cerca de 45 minutos para as lições e as verificações, mais 10 a 15 minutos de prática na maioria dos dias durante quatro semanas"
    ],
    facilitatorNotes: [
      "Comece com a verificação de preparação de seis pontos em cada posto; ajuste cadeiras e ecrãs antes de alguém começar a escrever.",
      "Faça o teste inicial e um teste cronometrado de um minuto no primeiro dia, para que cada aluno tenha uma pontuação inicial.",
      "Conte que a velocidade baixe durante uma ou duas semanas quando os alunos deixam de escrever com dois dedos; diga-lhes que isto é normal.",
      "Deixe os alunos que continuam a olhar para baixo cobrir as mãos com um pano ou papel.",
      "Faça um teste cronometrado em grupo uma vez por semana e peça aos alunos que atualizem os seus próprios registos; elogie os ganhos de precisão, não só de velocidade.",
      "Em computadores partilhados ou da biblioteca, lembre os alunos de não guardar palavras-passe e de terminar a sessão quando acabarem."
    ]
  }
};
