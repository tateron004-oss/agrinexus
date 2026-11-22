"use strict";

// Koach Learn course (Portuguese translation of shared/electrical-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US trade (OSHA, NEC, BLS, US states), as in the English.

module.exports = {
  id: "electrical-basics-pt",
  lang: "pt",
  translationOf: "electrical-basics",
  category: "Workforce Development",
  name: "Noções Básicas do Ofício de Eletricista",
  skills: "Usar a lei de Ohm e a fórmula da potência, Ler um esquema simples de circuito, Seguir o bloqueio e etiquetagem e testar antes de tocar, Ler uma fita métrica e um multímetro, Planear o seu caminho para uma aprendizagem de eletricista",
  outcome: "fazer as contas básicas de eletricidade, ler um circuito simples, explicar os passos de segurança que mantêm os eletricistas vivos, fazer medições exatas e seguir um plano com datas para se candidatar a uma aprendizagem de eletricista e avançar para uma licença.",
  about: [
    "Os eletricistas fazem a instalação elétrica de casas, escritórios, fábricas, sistemas solares e carregadores de carros. A maioria aprende o ofício numa aprendizagem paga, e a maioria dos estados dos EUA exige licença aos eletricistas. Este curso é o primeiro passo: é para quem procura emprego, antigos militares, jovens adultos, pessoas que voltam para casa depois da prisão, imigrantes e adultos que voltam a estudar e querem entrar numa aprendizagem bem preparados.",
    "Você vai aprender o que são volts, amperes, ohms e watts e fazer as contas com a lei de Ohm. Vai ler um desenho simples de circuito e aprender porque as casas têm a instalação feita da forma como têm. Depois vai aprender os passos de segurança que todo o eletricista segue, as ferramentas e as medições que os aprendizes usam no primeiro dia e como se candidatar a uma aprendizagem.",
    "Este curso prepara você. Não dá licença nem certificado, e nunca pede que trabalhe com eletricidade ligada. O trabalho elétrico é perigoso e pode matar. A instalação elétrica real só se aprende num programa com supervisão e com o equipamento de proteção certo. As licenças são dadas pelo seu estado ou pela sua cidade.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. O seu produto final é o seu próprio kit inicial de eletricista com um plano com datas."
  ],
  finalTask: "Faça o seu kit inicial de eletricista: (1) cinco problemas da lei de Ohm ou de potência escritos por você, resolvidos com as contas à vista; (2) um desenho de um circuito paralelo simples com a fonte de energia, o disjuntor, o interruptor, duas cargas, a fase, o neutro e a terra identificados; (3) os seis passos do bloqueio e etiquetagem escritos por ordem num cartão; (4) cinco medições de objetos de casa com a fita métrica, aproximadas a 1/16 de polegada; e (5) um plano com datas para se candidatar a dois programas de aprendizagem de eletricista, com as regras de licença do seu estado tiradas da página oficial.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que querem um ofício qualificado sem um curso universitário de quatro anos: pessoas à procura de emprego, antigos militares, jovens adultos, pessoas que voltam para casa depois da prisão, imigrantes e adultos que voltam a estudar. Alguns já fizeram trabalho manual ou militar; a maioria não tem formação formal em eletricidade.",
    startingPoint: "Sabem fazer contas com números inteiros e algumas frações, e sabem que a eletricidade pode ser perigosa. A maioria ainda não sabe definir volts, amperes ou ohms, usar a lei de Ohm, ler um desenho de circuito nem explicar o bloqueio e etiquetagem.",
    gap: "Os programas de aprendizagem muitas vezes fazem testes de matemática e de leitura e procuram candidatos que conheçam os termos básicos e levem a segurança a sério. Os alunos precisam da matemática de base, das palavras, dos hábitos de segurança e de um plano claro para se candidatarem, para conseguirem entrar e trabalharem em segurança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano); todas as palavras do ofício são explicadas",
      "Nenhum trabalho com eletricidade ligada: a única prática com o medidor é numa pilha comum de casa",
      "Aparelhos: um telefone ou um computador da biblioteca para as páginas oficiais; papel, caneta, calculadora e fita métrica",
      "Tempo: lições de 5 a 6 minutos, que cabem entre o trabalho e as consultas",
      "As licenças mudam de estado para estado e de cidade para cidade: os alunos verificam a página oficial do lugar onde vivem"
    ],
    prerequisites: "Contas com números inteiros e frações simples. O curso \"Começar uma Carreira num Ofício Técnico\" ajuda a escolher um ofício; este curso vai mais fundo no ofício de eletricista."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com valores inventados para um circuito", action: "calcular volts, amperes, ohms ou watts usando a lei de Ohm e a fórmula da potência", standard: "acertando pelo menos 4 de 5 problemas de prática, com as contas à vista" },
    { id: "O2", condition: "Com um desenho simples de circuito", action: "dizer o nome de cada parte do circuito e dizer se as cargas estão em série ou em paralelo", standard: "com todas as partes bem identificadas" },
    { id: "O3", condition: "Com um trabalho em que é preciso mexer num equipamento", action: "listar por ordem os passos do bloqueio e etiquetagem e dizer os principais perigos elétricos e a proteção para cada um", standard: "com os seis passos na ordem certa e pelo menos três perigos ligados à sua proteção" },
    { id: "O4", condition: "Usando uma fita métrica e, se tiver, um multímetro numa pilha de casa", action: "ler medições aproximadas a 1/16 de polegada e ler a tensão de uma pilha", standard: "acertando pelo menos 4 de 5 leituras" },
    { id: "O5", condition: "Usando os sites oficiais do seu estado", action: "escrever um plano com datas para se candidatar a uma aprendizagem de eletricista e avançar para uma licença", standard: "com dois programas reais, os seus requisitos e uma data para cada passo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona a eletricidade",
      lessons: [
        {
          title: "Volts, amperes, ohms e watts",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar com as suas palavras o que são volts, amperes, ohms e watts, com um exemplo de cada.",
          text: [
            "A eletricidade é o movimento de partículas muito pequenas com carga (os eletrões) dentro de um fio. Quatro palavras descrevem-na, e você vai usá-las todos os dias no ofício.",
            "A tensão (volts, V) é o empurrão. A corrente (amperes, A) é a quantidade de eletricidade que passa. A resistência (ohms, Ω) é o quanto o material dificulta a passagem. A potência (watts, W) é o trabalho que a eletricidade faz, como aquecer, iluminar ou fazer girar um motor.",
            "Uma mangueira de jardim ajuda a perceber: a pressão da água é como os volts, a quantidade de água que passa é como os amperes, e uma dobra ou um bico estreito é como a resistência. Mais empurrão ou menos resistência quer dizer mais passagem.",
            "Nas casas dos EUA, a maioria das tomadas funciona a cerca de 120 volts, e os aparelhos grandes, como máquinas de secar roupa e fogões, usam cerca de 240 volts. As pilhas dão uma corrente pequena e constante, a corrente contínua (CC, em inglês DC); as casas usam corrente alternada (CA, em inglês AC), que muda de sentido muitas vezes por segundo."
          ],
          words: [
            ["Volts (V)", "o empurrão elétrico, também chamado tensão."],
            ["Amperes (A)", "a quantidade de corrente elétrica que passa, também chamada corrente."],
            ["Ohms (Ω)", "a resistência: o quanto um material segura a passagem."],
            ["Watts (W)", "a potência: o trabalho que a eletricidade está a fazer."],
            ["CA e CC (AC e DC)", "a corrente alternada (casas e edifícios) muda de sentido; a corrente contínua (pilhas) vai sempre no mesmo sentido."],
            ["Condutor", "um material que deixa a eletricidade passar com facilidade, como o fio de cobre."]
          ],
          slides: [
            { title: "Quatro palavras que você usa todos os dias", bullets: ["Volts: o empurrão", "Amperes: a passagem", "Ohms: a resistência", "Watts: o trabalho feito"] },
            { title: "A imagem da mangueira", bullets: ["Pressão da água = volts", "Água a passar = amperes", "Uma dobra ou um bico estreito = resistência"] },
            { title: "Nos edifícios dos EUA", bullets: ["A maioria das tomadas: cerca de 120 volts", "Máquinas de secar e fogões: cerca de 240 volts", "As casas usam CA; as pilhas dão CC"] }
          ],
          tryIt: "Num papel, escreva as quatro palavras (volts, amperes, ohms, watts). Ao lado de cada uma, escreva o que quer dizer com as suas palavras e um exemplo de casa. Por exemplo: watts, \"o meu micro-ondas diz 1,000 watts na etiqueta\". Veja a etiqueta de um candeeiro, de um carregador de telefone ou de um aparelho (desligado da tomada, e só a etiqueta) e copie os volts, amperes ou watts que lá estão.",
          youCanNow: "explicar o que são volts, amperes, ohms e watts e encontrá-los na etiqueta de um aparelho.",
          quickCheck: [
            { objective: "O1", q: "Que palavra quer dizer a quantidade de corrente elétrica que passa?", options: ["Volts", "Ohms", "Amperes", "Watts"], answer: 2, why: "Os amperes (a corrente) medem quanta eletricidade passa." },
            { objective: "O1", q: "Na imagem da mangueira de jardim, o que é como a resistência?", options: ["Uma dobra ou um bico estreito", "A pressão da água", "A quantidade de água", "A cor da mangueira"], answer: 0, why: "Uma dobra segura a passagem da água, como a resistência segura a corrente." }
          ]
        },
        {
          title: "A lei de Ohm e as contas da potência",
          objectives: ["O1"],
          minutes: 6,
          goal: "Calcular volts, amperes, ohms ou watts usando a lei de Ohm e a fórmula da potência.",
          text: [
            "A lei de Ohm liga o empurrão, a passagem e a resistência: volts = amperes × ohms, escrito V = I × R (o I quer dizer corrente). Se souber dois deles, pode encontrar o terceiro: I = V ÷ R e R = V ÷ I.",
            "A fórmula da potência: watts = volts × amperes, escrito P = V × I. Também pode encontrar os amperes a partir dos watts: I = P ÷ V.",
            "Exemplos resolvidos (só para praticar, números inventados): Uma pilha de 12 volts está ligada a uma carga de 4 ohms. Amperes = 12 ÷ 4 = 3 amperes. Um circuito de 120 volts leva 15 amperes. Watts = 120 × 15 = 1,800 watts. Um aquecedor de 1,500 watts em 120 volts puxa 1,500 ÷ 120 = 12.5 amperes.",
            "Porque é importante: cada circuito tem um disjuntor feito para um certo número de amperes. Se muitas coisas funcionarem ao mesmo tempo e puxarem mais amperes do que o circuito aguenta, ele fica sobrecarregado e o disjuntor desarma. Os eletricistas fazem estas contas para escolher fios e disjuntores com segurança, seguindo o código elétrico."
          ],
          steps: [
            "Escreva o que já sabe e o que precisa de encontrar.",
            "Escolha a fórmula: V = I × R, I = V ÷ R, R = V ÷ I, ou P = V × I.",
            "Ponha os números e faça a conta.",
            "Escreva a unidade (V, A, Ω ou W) e pergunte: a resposta faz sentido?"
          ],
          words: [
            ["Lei de Ohm", "a regra que diz que volts = amperes × ohms (V = I × R)."],
            ["Fórmula da potência", "watts = volts × amperes (P = V × I)."],
            ["Carga", "qualquer coisa que usa eletricidade, como uma lâmpada, um aquecedor ou um motor."],
            ["Disjuntor", "um interruptor de segurança no quadro elétrico que desliga um circuito quando passa corrente a mais."],
            ["Sobrecarga", "quando um circuito leva mais corrente do que devia."]
          ],
          slides: [
            { title: "A lei de Ohm", bullets: ["V = I × R", "I = V ÷ R", "R = V ÷ I"] },
            { title: "Potência", bullets: ["P = V × I (watts = volts × amperes)", "I = P ÷ V"] },
            { title: "Exemplos resolvidos (só para praticar)", bullets: ["12 V ÷ 4 Ω = 3 A", "120 V × 15 A = 1,800 W", "1,500 W ÷ 120 V = 12.5 A"] },
            { title: "Porque os eletricistas fazem estas contas", bullets: ["Os disjuntores são escolhidos em amperes", "Amperes a mais = sobrecarga, o disjuntor desarma", "As contas ajudam a escolher fios e disjuntores segundo o código"] }
          ],
          tryIt: "Só para praticar. Resolva e mostre as contas: (1) 9 volts e 3 ohms: quantos amperes? (2) 2 amperes e 6 ohms: quantos volts? (3) 120 volts e 10 amperes: quantos watts? (4) Um micro-ondas de 600 watts em 120 volts: quantos amperes? (5) 24 volts e 4 amperes: quantos ohms? Respostas: 3 A; 12 V; 1,200 W; 5 A; 6 Ω. Depois escreva um problema seu e resolva-o: é o começo da parte 1 da sua tarefa final.",
          youCanNow: "usar a lei de Ohm e a fórmula da potência para encontrar volts, amperes, ohms ou watts.",
          quickCheck: [
            { objective: "O1", q: "Só para praticar: 12 volts numa carga de 3 ohms. Quantos amperes passam?", options: ["36 amperes", "9 amperes", "15 amperes", "4 amperes"], answer: 3, why: "I = V ÷ R, então 12 ÷ 3 = 4 amperes." },
            { objective: "O1", q: "Só para praticar: um circuito de 120 volts leva 5 amperes. Quantos watts são?", options: ["24 watts", "600 watts", "125 watts", "115 watts"], answer: 1, why: "P = V × I, então 120 × 5 = 600 watts." }
          ]
        },
        {
          title: "Circuitos e como ler um esquema simples",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dizer o nome das partes de um circuito simples e distinguir série de paralelo num esquema.",
          text: [
            "Um circuito é um caminho fechado. Tem uma fonte de energia, condutores (fios), uma carga, uma forma de o controlar (um interruptor) e uma proteção (um disjuntor ou um fusível). Se o caminho estiver interrompido, nada passa.",
            "Num circuito em série, as cargas estão numa só linha, por isso a corrente passa por cada uma, uma depois da outra; se uma se apagar, apagam-se todas. Num circuito em paralelo, cada carga tem o seu próprio caminho, por isso cada uma recebe a tensão toda e uma pode apagar-se enquanto as outras ficam ligadas. As tomadas e as luzes de uma casa estão ligadas em paralelo.",
            "A maioria das instalações dos edifícios nos EUA tem três tipos de fio. A fase leva a corrente até à carga (muitas vezes preto ou vermelho). O neutro trá-la de volta (normalmente branco). A terra (cobre nu ou verde) dá um caminho seguro se alguma coisa correr mal. Os eletricistas testam sempre cada fio, porque as cores podem estar erradas em trabalhos antigos ou mal feitos.",
            "Dois tipos de proteção especial: um GFCI (interruptor de falha à terra) corta a energia depressa se houver fuga de corrente, por exemplo através de uma pessoa, e usa-se perto da água, como em cozinhas, casas de banho e no exterior. Um AFCI (interruptor de falha de arco) corta a energia quando deteta faíscas de arco que podem começar um incêndio. Um curto-circuito acontece quando a corrente segue um caminho fácil que não estava previsto; pode causar faíscas e incêndio, e o disjuntor deve desarmar."
          ],
          steps: [
            "Encontre a fonte de energia (pilha ou quadro elétrico).",
            "Siga o fio desde a fonte, passando pelo disjuntor ou fusível e pelo interruptor.",
            "Encontre cada carga e veja se está numa só linha (série) ou no seu próprio ramo (paralelo).",
            "Siga o caminho de volta até à fonte."
          ],
          words: [
            ["Circuito", "um caminho fechado por onde a eletricidade passa."],
            ["Circuito em série", "cargas numa só linha; a corrente passa por cada uma, uma depois da outra."],
            ["Circuito em paralelo", "cada carga no seu próprio ramo; cada uma recebe a tensão toda."],
            ["Fase, neutro e terra", "a fase leva a corrente até à carga, o neutro trá-la de volta e a terra é um caminho de segurança."],
            ["GFCI", "interruptor de falha à terra (ground-fault circuit interrupter): corta a energia depressa se houver fuga de corrente, para proteger as pessoas de choques."],
            ["AFCI", "interruptor de falha de arco (arc-fault circuit interrupter): corta a energia quando deteta arcos elétricos que podem causar um incêndio."],
            ["Curto-circuito", "a corrente segue um caminho fácil que não estava previsto; pode causar faíscas e incêndio."]
          ],
          slides: [
            { title: "As partes de qualquer circuito", bullets: ["Fonte, fios, carga", "Controlo: um interruptor", "Proteção: um disjuntor ou um fusível"] },
            { title: "Série ou paralelo", bullets: ["Série: uma linha, uma apaga = todas apagam", "Paralelo: ramo próprio, tensão toda para cada uma", "Casas: paralelo"] },
            { title: "Fase, neutro, terra", bullets: ["Fase: muitas vezes preto ou vermelho", "Neutro: normalmente branco", "Terra: cobre nu ou verde", "Teste sempre; as cores podem estar erradas"] },
            { title: "Proteção extra", bullets: ["GFCI: protege as pessoas perto da água", "AFCI: ajuda a evitar incêndios por arco", "Curto-circuito: o disjuntor deve desarmar"] }
          ],
          tryIt: "Num papel, desenhe uma pilha, um interruptor e duas lâmpadas em série. Depois desenhe as mesmas partes em paralelo. Identifique a fonte, o interruptor e as cargas nos dois desenhos, e escreva o que acontece em cada um se uma lâmpada fundir. A seguir, desenhe um circuito de casa: quadro elétrico, disjuntor, interruptor e duas luzes em paralelo, com a fase, o neutro e a terra identificados. Guarde-o: é a parte 2 da sua tarefa final.",
          youCanNow: "dizer o nome das partes de um circuito simples e distinguir série de paralelo num desenho.",
          quickCheck: [
            { objective: "O2", q: "Duas lâmpadas estão ligadas de forma que, quando uma funde, a outra continua acesa. Como estão ligadas?", options: ["Em série", "Em paralelo", "Sem interruptor", "Ao contrário"], answer: 1, why: "Em paralelo cada lâmpada tem o seu próprio caminho, por isso uma pode apagar-se e a outra continuar acesa." },
            { objective: "O2", q: "Que aparelho protege as pessoas de choques perto do lava-loiça da cozinha?", options: ["Um AFCI", "Um interruptor de luz", "Um regulador de intensidade", "Um GFCI"], answer: 3, why: "Um GFCI corta a energia depressa quando há fuga de corrente, por exemplo através de uma pessoa perto da água." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona a eletricidade",
        questions: [
          { objective: "O1", q: "Que palavra quer dizer o empurrão elétrico?", options: ["Volts", "Amperes", "Ohms", "Watts"], answer: 0, why: "A tensão é o empurrão que faz a corrente andar num circuito." },
          { objective: "O1", q: "Só para praticar: passam 2 amperes numa carga de 10 ohms. Qual é a tensão?", options: ["5 volts", "12 volts", "20 volts", "8 volts"], answer: 2, why: "V = I × R, então 2 × 10 = 20 volts." },
          { objective: "O1", q: "Só para praticar: um secador de cabelo de 1,200 watts funciona em 120 volts. Quantos amperes puxa?", options: ["10 amperes", "100 amperes", "1,320 amperes", "12 amperes"], answer: 0, why: "I = P ÷ V, então 1,200 ÷ 120 = 10 amperes." },
          { objective: "O2", q: "Que parte de um circuito o desliga se passar corrente a mais?", options: ["A carga", "O fio neutro", "A tampa do interruptor", "O disjuntor ou o fusível"], answer: 3, why: "Os disjuntores e os fusíveis protegem o circuito, parando a corrente quando está alta demais." },
          { objective: "O2", q: "Na maioria das instalações dos edifícios nos EUA, que fio é normalmente branco?", options: ["A fase", "O neutro", "A terra", "Nenhum; nunca se usam cores"], answer: 1, why: "O neutro é normalmente branco, mas os eletricistas testam na mesma, porque as cores podem estar erradas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Segurança, ferramentas e o seu caminho",
      lessons: [
        {
          title: "Segurança elétrica: bloqueio e etiquetagem e testar antes de tocar",
          objectives: ["O3"],
          minutes: 6,
          goal: "Listar por ordem os seis passos do bloqueio e etiquetagem e dizer os principais perigos elétricos.",
          text: [
            "A eletricidade pode matar. Os perigos elétricos incluem choque, eletrocussão, queimaduras, arco elétrico (uma explosão repentina de calor e luz causada por uma falha elétrica), incêndio e quedas depois de um choque. A OSHA lista causas comuns de acidentes elétricos, entre elas o contacto com linhas de energia, a falta de proteção contra falha à terra, um caminho para a terra interrompido, o uso errado de equipamentos e o mau uso de extensões.",
            "A forma mais segura de trabalhar é com a energia desligada e bloqueada. A regra de bloqueio e etiquetagem (lockout/tagout) da OSHA (29 CFR 1910.147) define a ordem para trabalhadores autorizados e formados: 1. Preparar: saber que energia existe e como controlá-la. 2. Desligar o equipamento. 3. Isolá-lo: abrir o seccionador ou o disjuntor. 4. Pôr o seu próprio cadeado e a sua etiqueta. 5. Libertar ou bloquear a energia acumulada (como condensadores carregados ou molas). 6. Verificar: testar que está mesmo desligado antes de começar.",
            "Testar antes de tocar: use um testador ou um medidor que primeiro verifica numa fonte que sabe estar ligada, depois teste o circuito, e depois verifique o testador outra vez. Só trabalhadores formados e qualificados fazem isto, dentro do programa de um empregador.",
            "Outros hábitos: use escadas que não conduzem eletricidade (de fibra de vidro) perto da eletricidade, fique bem longe das linhas de energia aéreas, use proteção GFCI nas ferramentas elétricas, nunca trabalhe em equipamento elétrico em lugares molhados, e use os óculos de segurança, as luvas e o outro EPI que o seu empregador exige."
          ],
          steps: [
            "Preparar: saber que energia existe e como controlá-la.",
            "Desligar o equipamento.",
            "Isolá-lo da fonte de energia.",
            "Pôr o seu próprio cadeado e a sua etiqueta.",
            "Libertar ou bloquear a energia acumulada.",
            "Verificar que está desligado: testar antes de tocar."
          ],
          words: [
            ["Eletrocussão", "morte causada por um choque elétrico."],
            ["Arco elétrico", "uma explosão repentina de calor, luz e pressão causada por uma falha elétrica (em inglês arc flash)."],
            ["Bloqueio e etiquetagem", "desligar e trancar a fonte de energia, com uma etiqueta, para que ninguém a possa ligar durante o trabalho (em inglês lockout/tagout)."],
            ["Energia acumulada", "energia que fica depois de a energia ser desligada, por exemplo num condensador ou numa mola."],
            ["Trabalhador qualificado", "alguém formado para conhecer os perigos e fazer com segurança uma tarefa elétrica específica."],
            ["OSHA", "a Administração de Segurança e Saúde no Trabalho dos EUA, que faz as regras de segurança nos locais de trabalho."],
            ["EPI", "equipamento de proteção individual, como óculos, luvas e capacete (em inglês PPE)."]
          ],
          slides: [
            { title: "A eletricidade pode matar", bullets: ["Choque, eletrocussão, queimaduras", "Arco elétrico e incêndio", "Quedas depois de um choque"] },
            { title: "Bloqueio e etiquetagem: seis passos", bullets: ["1. Preparar  2. Desligar  3. Isolar", "4. Cadeado e etiqueta  5. Libertar a energia acumulada", "6. Verificar: testar antes de tocar"] },
            { title: "Testar antes de tocar", bullets: ["Verifique o testador numa fonte que sabe estar ligada", "Teste o circuito", "Verifique o testador outra vez"] },
            { title: "Hábitos de todos os dias", bullets: ["Escadas de fibra de vidro perto da eletricidade", "Fique longe das linhas de energia aéreas", "GFCI nas ferramentas elétricas; nunca trabalhe molhado"] }
          ],
          sources: [
            { name: "OSHA (Administração de Segurança e Saúde no Trabalho dos EUA): Segurança elétrica", url: "https://www.osha.gov/electrical" },
            { name: "OSHA: Controlo de energia perigosa (bloqueio e etiquetagem), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Num cartão, escreva de memória e por ordem os seis passos do bloqueio e etiquetagem. Compare-os com a lição e corrija os erros. No verso, escreva três perigos elétricos e a proteção para cada um (por exemplo: linha de energia aérea, ficar bem longe e ligar para a empresa de eletricidade). Guarde o cartão: é a parte 3 da sua tarefa final.",
          youCanNow: "listar por ordem os seis passos do bloqueio e etiquetagem e ligar cada perigo elétrico à proteção certa.",
          quickCheck: [
            { objective: "O3", q: "Qual é o último passo do bloqueio e etiquetagem antes de o trabalho começar?", options: ["Verificar com um teste que o equipamento está desligado", "Pôr o seu cadeado", "Avisar o cliente", "Desligar o equipamento"], answer: 0, why: "Depois de bloquear e libertar a energia acumulada, você verifica que está mesmo desligado antes de tocar em qualquer coisa." },
            { objective: "O3", q: "Que escada é a escolha certa perto de equipamento elétrico?", options: ["De alumínio", "Qualquer escada", "De fibra de vidro", "Uma escada de madeira molhada"], answer: 2, why: "A fibra de vidro não conduz a eletricidade como o metal." }
          ]
        },
        {
          title: "Ferramentas, medições e o código elétrico",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ler uma fita métrica com aproximação a 1/16 de polegada e ler a tensão de uma pilha num multímetro.",
          text: [
            "Os aprendizes usam ferramentas manuais como alicate universal de eletricista, descarnador de fios, chaves de fendas isoladas, nível e fita métrica, e ferramentas de teste como o testador de tensão e o multímetro. O seu empregador ou o seu programa ensina que ferramentas comprar e como usar cada uma com segurança.",
            "Ler uma fita métrica: nos EUA, cada polegada está dividida em 16 marcas pequenas. As marcas mais compridas são a meia polegada, depois os quartos, depois os oitavos, depois os dezasseis avos. Conte as marcas pequenas depois da última polegada inteira e simplifique a fração: 5 polegadas e 6 marcas é 5 6/16, que é 5 3/8 polegadas. Meça duas vezes, corte uma vez.",
            "Um multímetro mede volts, amperes e ohms. Pratique só numa pilha AA comum: ponha o seletor em volts CC (DC), encoste a ponta vermelha ao lado + e a ponta preta ao lado -, e leia o ecrã. Uma pilha AA nova dá cerca de 1.5 volts. Nunca pratique numa tomada nem em nenhuma instalação da casa.",
            "Os eletricistas seguem o Código Elétrico Nacional dos EUA (NEC), também chamado NFPA 70, que define normas seguras para instalações e equipamentos. Os estados e as cidades adotam o código, às vezes com mudanças próprias, e os exames de licença cobrem o código e as regras locais. Você vai aprender a usar o livro do código na sua aprendizagem."
          ],
          steps: [
            "Fita: encontre a última polegada inteira.",
            "Conte as marcas de 1/16 depois dela.",
            "Simplifique a fração: 8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8.",
            "Medidor (só na pilha): ponha em volts CC, vermelho no +, preto no -, leia o ecrã."
          ],
          words: [
            ["Multímetro", "um medidor que mede volts, amperes e ohms."],
            ["Testador de tensão", "uma ferramenta que mostra se há tensão."],
            ["Pontas de prova", "os fios vermelho e preto com pontas que ligam o medidor ao que está a testar."],
            ["NEC (NFPA 70)", "o Código Elétrico Nacional dos EUA: normas seguras para instalações elétricas, adotadas pelos estados e pelas cidades."],
            ["Simplificar uma fração", "escrevê-la com os números mais pequenos possíveis, por exemplo 6/16 = 3/8."],
            ["Polegada", "uma medida de comprimento usada nos EUA; 1 polegada é cerca de 2.5 centímetros."]
          ],
          slides: [
            { title: "Ferramentas para começar", bullets: ["Alicate universal de eletricista, descarnador de fios", "Chaves de fendas isoladas, nível, fita métrica", "Testador de tensão e multímetro"] },
            { title: "Ler uma fita métrica", bullets: ["16 marcas por polegada", "Conte as marcas depois da polegada inteira", "5 6/16 = 5 3/8 polegadas"] },
            { title: "Prática com multímetro: só na pilha", bullets: ["Seletor em volts CC", "Vermelho no +, preto no -", "Uma AA nova dá cerca de 1.5 volts", "Nunca pratique em tomadas nem instalações"] },
            { title: "O código elétrico", bullets: ["NEC, também chamado NFPA 70", "Os estados e as cidades adotam-no", "Os exames de licença cobrem o código"] }
          ],
          sources: [
            { name: "NFPA: NFPA 70, Código Elétrico Nacional (National Electrical Code)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
            { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Eletricistas", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Meça cinco coisas em casa com uma fita métrica (uma porta, um livro, uma mesa, uma janela, uma caixa) com aproximação a 1/16 de polegada, e escreva cada medição com a fração simplificada. Depois pratique: 3 e 12/16 = ? 7 e 2/16 = ? 10 e 8/16 = ? (Respostas: 3 3/4, 7 1/8, 10 1/2.) Se tiver um multímetro, leia a tensão de uma pilha AA e anote-a. Guarde as suas medições: são a parte 4 da sua tarefa final.",
          youCanNow: "ler uma fita métrica com aproximação a 1/16 de polegada e ler a tensão de uma pilha com um multímetro.",
          quickCheck: [
            { objective: "O4", q: "Uma tábua mede 4 polegadas e 12 marcas de dezasseis avos. Quanto é, com a fração simplificada?", options: ["4 1/2 polegadas", "4 3/4 polegadas", "4 12 polegadas", "4 1/4 polegadas"], answer: 1, why: "12/16 simplifica para 3/4, por isso são 4 3/4 polegadas." },
            { objective: "O4", q: "Neste curso, onde é seguro praticar com um multímetro?", options: ["Numa tomada da parede", "Num quadro de disjuntores", "Num interruptor de luz", "Numa pilha AA"], answer: 3, why: "Uma pilha de casa tem tensão baixa e é segura; tomadas e instalações são para trabalho formado e com supervisão." }
          ]
        },
        {
          title: "Aprendizagem, licença e o seu plano",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escrever um plano com datas para se candidatar a uma aprendizagem de eletricista e avançar para uma licença.",
          text: [
            "O Departamento de Estatísticas do Trabalho dos EUA (BLS) diz que a maioria dos eletricistas aprende numa aprendizagem de 4 ou 5 anos. Cada ano inclui normalmente cerca de 2,000 horas de formação paga no trabalho, mais aulas de teoria elétrica, leitura de plantas e segurança. É preciso o diploma do ensino secundário ou equivalente (como o GED, o exame de equivalência dos EUA), e algumas pessoas frequentam primeiro uma escola técnica.",
            "A maioria dos estados exige que os eletricistas passem num exame e tenham licença. O exame cobre o Código Elétrico Nacional e os códigos estaduais e locais. Alguns lugares também exigem formação contínua para manter a licença. Títulos como aprendiz, oficial (journeyman) e mestre (master) mudam de estado para estado, por isso consulte o conselho de licenças elétricas do seu estado ou da sua localidade.",
            "Os programas de aprendizagem são organizados por sindicatos, associações de empreiteiros e empregadores. Muitos pedem o diploma ou o GED, um documento de identificação, às vezes a carta de condução, um teste de matemática e de leitura e uma entrevista, e alguns só aceitam candidaturas em certas alturas. Encontre programas em apprenticeship.gov, nos American Job Centers e nos community colleges (escolas superiores locais). Os antigos militares podem perguntar à VA (os serviços para veteranos) sobre a GI Bill; se tiver registo criminal, pergunte ao programa e ao conselho de licenças como o analisam.",
            "O seu plano transforma isto em passos com datas: o que estudar, a que programas se candidatar, quando abrem, e o que o conselho de licenças exige."
          ],
          steps: [
            "Escreva o seu objetivo, por exemplo \"começar uma aprendizagem de eletricista até ao próximo outono\".",
            "Encontre dois programas perto de você; escreva o que cada um pede e quando abrem as candidaturas.",
            "Encontre o conselho de licenças do seu estado ou da sua cidade e escreva o que exige (com o endereço do site).",
            "Junte os documentos: diploma ou GED, identificação, carta de condução se for preciso.",
            "Acrescente datas de estudo para matemática e leitura, e uma data para cada candidatura."
          ],
          words: [
            ["Aprendizagem", "um trabalho pago em que aprende com eletricistas experientes, mais aulas (em inglês apprenticeship)."],
            ["Oficial (journeyman)", "em muitos estados, um eletricista que terminou a aprendizagem e passou no exame de licença; os títulos mudam."],
            ["Conselho de licenças", "o serviço do estado ou da cidade que dá as licenças de eletricista."],
            ["Formação contínua", "cursos curtos que algumas licenças exigem para estar em dia com o código e a segurança."],
            ["American Job Center", "um centro local gratuito de ajuda para procurar emprego e formação, pago pelo Departamento do Trabalho dos EUA."]
          ],
          slides: [
            { title: "Como a maioria dos eletricistas aprende", bullets: ["Aprendizagem de 4 ou 5 anos (BLS)", "Cerca de 2,000 horas pagas por ano, mais aulas", "É preciso diploma ou GED"] },
            { title: "Licenças", bullets: ["A maioria dos estados exige exame e licença", "O exame cobre o NEC e os códigos locais", "Consulte o conselho do seu estado ou cidade"] },
            { title: "Como entrar", bullets: ["Programas de sindicatos, empreiteiros e empregadores", "Muitas vezes: teste de matemática e leitura, entrevista", "Alguns só aceitam candidaturas em certas alturas"] },
            { title: "O seu plano", bullets: ["Dois programas e os seus requisitos", "Regras da licença do conselho oficial", "Uma data para cada passo"] }
          ],
          sources: [
            { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Eletricistas, como se tornar um", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (pesquisa de aprendizagens)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License Finder (localizador de licenças)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Tarefa final: faça o seu kit inicial de eletricista. Junte os seus cinco problemas da lei de Ohm (Lição 2), o seu desenho de circuito identificado (Lição 3), o seu cartão de bloqueio e etiquetagem (Lição 4) e as suas cinco medições com a fita (Lição 5). Depois escreva o seu plano com datas: o seu objetivo, dois programas de aprendizagem perto de você com o que cada um pede e quando aceita candidaturas, o que o seu estado ou a sua cidade exige para a licença (com o endereço do site), e uma data para cada passo.",
          youCanNow: "seguir o seu próprio plano com datas para se candidatar a uma aprendizagem de eletricista e avançar para uma licença.",
          quickCheck: [
            { objective: "O5", q: "Segundo o BLS, como é que a maioria dos eletricistas aprende o ofício?", options: ["Um curso online de uma semana", "A ver vídeos em casa", "Uma aprendizagem paga de 4 ou 5 anos", "Só um curso universitário de quatro anos"], answer: 2, why: "A maioria dos eletricistas aprende numa aprendizagem de 4 ou 5 anos que junta trabalho pago e aulas." },
            { objective: "O5", q: "Onde fica a saber o que o seu estado exige para uma licença de eletricista?", options: ["No conselho de licenças elétricas do seu estado ou da sua localidade", "Num grupo de uma rede social", "Numa loja de ferramentas", "Neste curso"], answer: 0, why: "As regras das licenças mudam de estado para estado e de cidade para cidade, por isso a fonte é o conselho oficial." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Segurança, ferramentas e o seu caminho",
        questions: [
          { objective: "O3", q: "Que passo do bloqueio e etiquetagem vem logo depois de isolar o equipamento?", options: ["Verificar com um teste", "Pôr o seu próprio cadeado e a sua etiqueta", "Libertar a energia acumulada", "Preparar"], answer: 1, why: "A ordem é preparar, desligar, isolar, pôr cadeado e etiqueta, libertar a energia acumulada, verificar." },
          { objective: "O3", q: "Porque é que os trabalhadores libertam ou bloqueiam a energia acumulada depois de bloquear?", options: ["Para poupar eletricidade", "Para o cadeado servir", "Para acabar mais depressa", "Porque peças como os condensadores ainda podem dar choque depois de a energia ser desligada"], answer: 3, why: "A energia acumulada ainda pode magoar você depois de a energia ser desligada." },
          { objective: "O3", q: "A OSHA lista uma causa comum de acidentes elétricos. Qual é?", options: ["Contacto com linhas de energia", "Usar óculos de segurança", "Usar uma escada de fibra de vidro", "Ler o livro do código"], answer: 0, why: "O contacto com linhas de energia é uma das causas comuns que a OSHA lista." },
          { objective: "O4", q: "Quanto é 9/16 de polegada mais 7/16 de polegada?", options: ["1/2 polegada", "16 polegadas", "1 polegada", "2 polegadas"], answer: 2, why: "9/16 + 7/16 = 16/16, que é 1 polegada." },
          { objective: "O5", q: "Que passo do plano está completo?", options: ["\"Tornar-me eletricista\"", "\"Candidatar-me um dia\"", "\"Ver programas\"", "\"Candidatar-me ao programa de aprendizagem do condado até ao prazo de 1 de março, com o meu GED e a minha identificação\""], answer: 3, why: "Diz o programa, o prazo e o que levar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas do Ofício de Eletricista",
    questions: [
      { objective: "O1", q: "Que palavra quer dizer o trabalho que a eletricidade está a fazer?", options: ["Watts", "Ohms", "Amperes", "Volts"], answer: 0, why: "Os watts medem a potência: o trabalho feito, como calor ou luz." },
      { objective: "O1", q: "A lei de Ohm diz:", options: ["P = V + I", "V = I × R", "R = V × I", "I = V × R"], answer: 1, why: "Os volts são iguais aos amperes vezes os ohms." },
      { objective: "O1", q: "Só para praticar: 120 volts e 20 amperes. Quantos watts?", options: ["140 watts", "6 watts", "2,400 watts", "100 watts"], answer: 2, why: "P = V × I, então 120 × 20 = 2,400 watts." },
      { objective: "O1", q: "Só para praticar: 24 volts numa carga de 6 ohms. Quantos amperes?", options: ["144 amperes", "18 amperes", "30 amperes", "4 amperes"], answer: 3, why: "I = V ÷ R, então 24 ÷ 6 = 4 amperes." },
      { objective: "O1", q: "O que acontece quando um circuito puxa mais amperes do que devia?", options: ["A tensão duplica", "Fica sobrecarregado e o disjuntor deve desarmar", "Os fios ficam mais frios", "Nada"], answer: 1, why: "Corrente a mais é uma sobrecarga; o disjuntor desarma para proteger os fios." },
      { objective: "O2", q: "Num circuito em série com três lâmpadas, uma funde. O que acontece?", options: ["Apagam-se todas", "Só essa se apaga", "As outras ficam mais fortes", "O disjuntor fica maior"], answer: 0, why: "Em série só há um caminho, por isso uma interrupção para a corrente em todas." },
      { objective: "O2", q: "Como estão normalmente ligadas as tomadas de uma casa?", options: ["Em série", "Sem disjuntor", "Em paralelo", "Sem neutro"], answer: 2, why: "A ligação em paralelo dá a cada tomada a tensão toda e o seu próprio caminho." },
      { objective: "O2", q: "Que fio dá um caminho seguro se alguma coisa correr mal?", options: ["A fase", "O neutro", "O retorno do interruptor", "A terra"], answer: 3, why: "A terra (cobre nu ou verde) é o caminho de segurança." },
      { objective: "O2", q: "Que aparelho corta a energia quando deteta arcos elétricos que podem começar um incêndio?", options: ["Um GFCI", "Um AFCI", "Um regulador de intensidade", "Uma ficha"], answer: 1, why: "Um interruptor de falha de arco (AFCI) ajuda a evitar incêndios causados por arcos." },
      { objective: "O3", q: "Qual é o primeiro passo do bloqueio e etiquetagem?", options: ["Preparar: saber que energia existe e como controlá-la", "Pôr o seu cadeado", "Verificar com um teste", "Desligar"], answer: 0, why: "Começa por saber que energia existe e como a controlar." },
      { objective: "O3", q: "Quando testa antes de tocar, porque verifica primeiro o testador numa fonte que sabe estar ligada?", options: ["Para o aquecer", "Para carregar a pilha dele", "Para provar que o testador funciona, para poder confiar numa leitura de \"sem tensão\"", "Não é preciso"], answer: 2, why: "Um testador avariado pode mostrar \"sem tensão\" quando há tensão." },
      { objective: "O3", q: "O que é uma explosão repentina de calor e luz causada por uma falha elétrica?", options: ["Uma terra", "Uma carga", "Um disjuntor", "Um arco elétrico"], answer: 3, why: "O arco elétrico é uma explosão perigosa causada por uma falha elétrica." },
      { objective: "O3", q: "Neste curso, quando pode trabalhar numa instalação com eletricidade ligada?", options: ["Nunca; a instalação real aprende-se numa formação com supervisão", "Depois da Lição 2", "Quando o disjuntor está ligado", "Aos fins de semana"], answer: 0, why: "Este curso não faz trabalho com eletricidade ligada; isso pertence a um programa com supervisão e EPI." },
      { objective: "O4", q: "Uma fita métrica marca 6 polegadas e 4 marcas de dezasseis avos. Quanto é, com a fração simplificada?", options: ["6 1/2 polegadas", "6 1/4 polegadas", "6 4 polegadas", "6 1/8 polegadas"], answer: 1, why: "4/16 simplifica para 1/4." },
      { objective: "O4", q: "Quanto dá normalmente uma pilha AA nova num multímetro em volts CC?", options: ["Cerca de 120 volts", "Cerca de 12 volts", "Cerca de 1.5 volts", "Cerca de 240 volts"], answer: 2, why: "Uma pilha AA nova tem cerca de 1.5 volts." },
      { objective: "O4", q: "Que outro nome tem o Código Elétrico Nacional (NEC)?", options: ["OSHA 10", "EPA 608", "NFPA 70", "O GFCI"], answer: 2, why: "O NEC é publicado como NFPA 70." },
      { objective: "O5", q: "Este curso vai:", options: ["Dar-lhe uma licença de eletricista", "Preparar você para se candidatar; não dá licença nem certificado", "Contar como horas da sua aprendizagem", "Deixar você fazer instalações em casas"], answer: 1, why: "As licenças vêm do seu estado ou da sua cidade, e a formação real vem de uma aprendizagem." },
      { objective: "O5", q: "Que site gratuito ajuda a encontrar programas de aprendizagem perto de você?", options: ["Um anúncio que aparece no ecrã", "Uma secção de comentários", "Um folheto de uma loja de ferramentas", "apprenticeship.gov"], answer: 3, why: "O Apprenticeship.gov tem o Apprenticeship Job Finder do Departamento do Trabalho dos EUA." },
      { objective: "O5", q: "O que costumam cobrir os exames de licença para eletricistas?", options: ["O Código Elétrico Nacional e os códigos estaduais e locais", "Reparação de carros", "Só canalização", "Velocidade a escrever no teclado"], answer: 0, why: "O BLS diz que os exames de licença cobrem o NEC e os códigos estaduais e locais." },
      { objective: "O5", q: "Alguns programas só aceitam candidaturas em certas alturas. O que deve ter o seu plano?", options: ["Nada; é só aparecer", "Um palpite", "Só o logótipo do programa", "As datas em que as candidaturas abrem e fecham"], answer: 3, why: "Escrever as datas das candidaturas evita que perca o prazo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno ganhou
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 2, 5, 7, 9, 11, 13, 15, 16, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Problemas da lei de Ohm e de potência", objective: "O1", notYet: "Menos de 4 de 5 problemas certos, ou sem as contas à vista.", meets: "Pelo menos 4 de 5 certos, cada um com a fórmula, as contas e a unidade.", exceeds: "Os 5 certos, usando as quatro fórmulas, com uma verificação de que cada resposta faz sentido." },
      { name: "Desenho do circuito", objective: "O2", notYet: "Faltam partes ou as cargas não estão em paralelo.", meets: "A fonte, o disjuntor, o interruptor, duas cargas em paralelo, a fase, o neutro e a terra estão todos identificados.", exceeds: "Também mostra onde ficaria um GFCI e explica porquê." },
      { name: "Cartão de bloqueio e etiquetagem", objective: "O3", notYet: "Faltam passos ou estão fora de ordem.", meets: "Os seis passos por ordem, mais três perigos ligados à sua proteção.", exceeds: "Também explica o testar antes de tocar com a verificação ligado-desligado-ligado." },
      { name: "Medições", objective: "O4", notYet: "As leituras estão erradas ou as frações não estão simplificadas.", meets: "Pelo menos 4 de 5 leituras certas com aproximação a 1/16 de polegada, com a fração simplificada.", exceeds: "As cinco certas, mais uma leitura de pilha com o medidor bem regulado." },
      { name: "Plano com datas tirado de fontes oficiais", objective: "O5", notYet: "Os passos não têm datas, ou as regras vêm de anúncios ou publicações.", meets: "Dois programas reais com requisitos e datas de candidatura, regras da licença com o endereço do site oficial e uma data para cada passo.", exceeds: "Também tem um horário de estudo para o teste de entrada e um plano B, como um trabalho de ajudante." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a uma aprendizagem ou pré-aprendizagem de eletricista em 90 dias",
      "Alunos aceites numa aprendizagem ou contratados como ajudantes de eletricista em 6 meses",
      "Os programas parceiros dizem que os candidatos passam no teste de matemática de entrada e chegam a conhecer os passos básicos de segurança"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet para as páginas do BLS, da OSHA, do apprenticeship.gov e das licenças do estado",
      "Papel, caneta, cartões, uma calculadora e uma fita métrica",
      "Opcional: um multímetro simples e uma pilha AA (prática só na pilha)",
      "Cerca de 60 a 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Nenhum trabalho com eletricidade ligada, de nenhum tipo. A única prática com o medidor é numa pilha de casa; nunca deixe os alunos testarem tomadas ou quadros elétricos.",
      "Façam primeiro as contas juntos num quadro, depois peça aos alunos que escrevam e troquem os seus próprios problemas de prática.",
      "Convide um coordenador de aprendizagem ou um eletricista licenciado para explicar o processo de candidatura e o teste de entrada.",
      "Ajude cada aluno a encontrar a página de licenças do seu estado ou da sua cidade; as regras mudam, por isso não dê uma só resposta para o grupo todo.",
      "Ligue os alunos com registo criminal ou os antigos militares aos serviços de reintegração ou de veteranos; não prometa nenhum resultado de um programa ou de um conselho de licenças.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha em Ainda não de cada vez."
    ]
  }
};
