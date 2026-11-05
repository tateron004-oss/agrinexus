"use strict";

// Koach Learn course (Portuguese translation of workforce/workforce-food-handler.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Temperatures stay in °F exactly as in the English (FDA Food Code figures); US names (FDA, USDA, ServSafe, ANSI, California) are kept.

module.exports = {
  id: "workforce-food-handler-pt",
  lang: "pt",
  translationOf: "workforce-food-handler",
  category: "Workforce Development",
  name: "Manipulador de Alimentos e Preparação para o Exame ServSafe",
  skills: "Lavar as mãos da forma certa, Evitar a contaminação cruzada, Manter os alimentos fora da zona de perigo de temperatura, Cozinhar a temperaturas seguras, Lidar com alergénios, Limpar e higienizar",
  outcome: "manipular alimentos com segurança num turno de restaurante ou de serviço de alimentação: lavar as mãos corretamente, evitar a contaminação cruzada, manter os alimentos fora da zona de perigo de temperatura, cozinhar e manter os alimentos a temperaturas seguras, proteger os clientes com alergias e limpar e higienizar uma superfície de trabalho, e estar pronto para fazer um exame de manipulador de alimentos.",
  about: [
    "Este curso é para quem trabalha com alimentos ou quer trabalhar: equipas de restaurantes e de comida rápida, pessoal de cantinas e de cozinhas escolares, serviços de catering, trabalhadores de carrinhas de comida, padarias e charcutarias, e pessoas que se preparam para o cartão de manipulador de alimentos ou para um exame ServSafe.",
    "Você vai aprender as habilidades básicas de segurança alimentar que todos os exames de manipulador de alimentos cobrem: lavagem das mãos e higiene pessoal, contaminação cruzada, controlo de tempo e temperatura, temperaturas de cozedura, alergénios, e a diferença entre limpar e higienizar. As perguntas de prática são nossas, escritas para o ajudar a pensar como no exame; não foram copiadas de nenhum exame verdadeiro.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As regras do cartão de manipulador de alimentos são definidas pelos estados e condados, e os códigos alimentares mudam com o tempo, por isso confirme as regras do lugar onde trabalha com o serviço de saúde local."
  ],
  finalTask: "Escreva uma \"Lista de Verificação para um Turno Seguro\" de uma página para uma cozinha real ou de prática: quando e como lavar as mãos, como guardar alimentos crus e prontos a comer para evitar a contaminação cruzada, as temperaturas de conservação a frio, de conservação a quente e de cozedura que vai verificar com um termómetro, os passos de arrefecimento, o que vai fazer quando um cliente disser que tem uma alergia, os passos para limpar e higienizar uma mesa de preparação, e os sintomas de doença que tem de comunicar. Depois descubra a regra do cartão de manipulador de alimentos do seu estado ou condado e escreva-a no topo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Trabalhadores do setor alimentar, novos e atuais, e pessoas à procura de emprego: equipas de restaurantes e de comida rápida, pessoal de cantinas e de cozinhas escolares, catering, trabalhadores de carrinhas de comida, padarias e charcutarias, e pessoas que se preparam para o cartão de manipulador de alimentos ou para um exame ServSafe.",
    startingPoint: "Sabem cozinhar ou preparar comida em casa e talvez já tenham feito um turno numa cozinha, mas não aprenderam as regras do serviço de alimentação sobre lavagem das mãos, ordem de arrumação, temperaturas de conservação e de cozedura, alergénios e higienização.",
    gap: "Muitos empregadores e serviços de saúde exigem um cartão de manipulador de alimentos pouco depois da contratação, e um único erro com temperaturas, contaminação cruzada ou uma alergia pode pôr os clientes doentes. Os alunos precisam destes hábitos e destes números para serem contratados, passarem no exame e manterem os clientes seguros.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um telefone ou um computador partilhado; um termómetro de alimentos ajuda mas é opcional",
      "Tempo: lições de cerca de cinco minutos, que cabem entre os turnos",
      "As regras mudam de estado para estado e de condado para condado, e os números do serviço de alimentação são diferentes dos conselhos para cozinhar em casa; os alunos confirmam com o serviço de saúde local",
      "Só educação geral: não substitui um curso acreditado de manipulador de alimentos nem a certificação de gerente"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Durante um turno na cozinha", action: "lavar as mãos da forma certa nos momentos certos e não tocar com as mãos nuas nos alimentos prontos a comer", standard: "esfregando durante pelo menos 20 segundos e dizendo pelo menos seis momentos em que deve lavar" },
    { id: "O2", condition: "Com alimentos crus e prontos a comer para guardar ou preparar", action: "guardá-los e prepará-los de modo que os germes não se espalhem", standard: "pondo cada alimento na prateleira certa da câmara frigorífica e usando utensílios separados ou higienizados" },
    { id: "O3", condition: "Quando um cliente tem uma alergia alimentar ou uma superfície precisa de ser limpa", action: "seguir os passos para alergias e limpar e higienizar uma superfície pela ordem certa", standard: "com todos os passos pela ordem e sem adivinhar os ingredientes" },
    { id: "O4", condition: "Com alimentos TCS frios e quentes e um termómetro", action: "verificar as temperaturas de conservação e descongelar alimentos com segurança", standard: "frios a 41°F ou menos e quentes a 135°F ou mais, sempre" },
    { id: "O5", condition: "Ao cozinhar, reaquecer ou arrefecer alimentos", action: "escolher a temperatura e o tempo seguros para cada alimento e planear um arrefecimento rápido", standard: "de acordo com os números do FDA Food Code ensinados no curso" },
    { id: "O6", condition: "Antes e durante um trabalho no serviço de alimentação", action: "identificar os sintomas de doença que tem de comunicar e encontrar a regra do cartão de manipulador de alimentos do lugar onde trabalha", standard: "dizendo os sintomas e o prazo, a validade do cartão e os cursos aceites pelo seu serviço de saúde" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Mãos limpas e alimentos limpos",
      lessons: [
        {
          objectives: ["O1", "O6"],
          title: "Lavagem das mãos e higiene pessoal",
          minutes: 5,
          goal: "Lavar as mãos da forma certa nos momentos certos e seguir as regras básicas de higiene.",
          text: [
            "As mãos espalham mais doenças transmitidas por alimentos do que quase tudo o resto. Lave-as num lavatório só para as mãos (nunca num lava-loiça de preparação de alimentos ou de loiça) com água corrente morna e sabão. Esfregue as mãos, entre os dedos, debaixo das unhas e até aos pulsos durante pelo menos 20 segundos, passe por água e seque com uma toalha de papel descartável ou um secador de mãos. Use a toalha para fechar a torneira se ela tiver manípulos.",
            "Lave quando começa o trabalho, depois de ir à casa de banho, depois de tocar em carne, aves ou peixe e marisco crus, depois de tocar na cara, no cabelo, no telefone ou no lixo, depois de comer, beber, fumar ou tossir, depois de limpar, e antes de pôr luvas. As luvas não substituem a lavagem das mãos, e você troca-as quando se rasgam, quando muda de tarefa e depois de mexer em alimentos crus.",
            "Não toque nos alimentos prontos a comer (alimentos que não vão ser cozinhados outra vez, como salada, pão ou um hambúrguer já cozinhado) com as mãos nuas. Use luvas, pinças, papel de charcutaria ou utensílios.",
            "Higiene pessoal: use roupa limpa e algo que prenda o cabelo, mantenha as unhas curtas e limpas, e cubra os cortes com um penso e uma luva. Diga ao seu gerente se tem vómitos, diarreia, pele ou olhos amarelos (icterícia), ou dor de garganta com febre, ou se lhe diagnosticaram certas doenças como norovírus, hepatite A ou salmonela. Pode ter de ficar em casa ou longe dos alimentos."
          ],
          steps: ["Use só o lavatório para as mãos.", "Molhe as mãos com água corrente morna e ponha sabão.", "Esfregue as mãos, os dedos, as unhas e os pulsos durante pelo menos 20 segundos.", "Passe por água e seque com uma toalha de papel ou um secador de mãos.", "Feche a torneira com a toalha.", "Ponha luvas novas se for mexer em alimentos prontos a comer."],
          words: [["Doença transmitida por alimentos", "doença causada por comer alimentos com germes ou toxinas."], ["Alimento pronto a comer", "alimento que vai ser comido sem mais cozedura, como salada, pão ou um hambúrguer já cozinhado."], ["Icterícia", "cor amarela na pele ou nos olhos, um sinal de doenças como a hepatite A."]],
          slides: [
            { title: "Lave da forma certa", bullets: ["Só no lavatório para as mãos", "Água morna e sabão", "Esfregue pelo menos 20 segundos; seque com toalha de papel"] },
            { title: "Quando lavar", bullets: ["No início do turno e depois da casa de banho", "Depois de carne crua, lixo, tocar na cara ou no telefone", "Antes de pôr luvas"] },
            { title: "Sem mãos nuas nos alimentos prontos a comer", bullets: ["Use luvas, pinças, papel de charcutaria ou utensílios", "Troque as luvas quando se rasgam ou quando muda de tarefa"] },
            { title: "Higiene e doença", bullets: ["Roupa limpa, cabelo preso, unhas curtas", "Cubra os cortes com um penso e uma luva", "Comunique vómitos, diarreia, icterícia, dor de garganta com febre"] }
          ],
          sources: [
            { name: "FDA: Manipulação segura de alimentos (lavar as mãos durante pelo menos 20 segundos)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" },
            { name: "FDA: Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Lave as mãos da forma completa e conte o tempo: pelo menos 20 segundos a esfregar. Depois escreva seis momentos num turno de cozinha em que tem de lavar as mãos.",
          youCanNow: "lavar as mãos corretamente, saber quando lavar, evitar tocar com as mãos nuas nos alimentos prontos a comer e saber que sintomas comunicar.",
          quickCheck: [
            { objective: "O1", q: "O que é um alimento pronto a comer?", options: ["Um alimento que não vai ser cozinhado outra vez, como salada ou pão", "Frango cru à espera de ser cozinhado", "Comida congelada no congelador", "Qualquer alimento numa embalagem fechada"], answer: 0, why: "O alimento pronto a comer não vai ser cozinhado outra vez, por isso não pode tocar em mãos nuas." },
            { objective: "O1", q: "Acabou de levar o lixo para fora e agora tem de fazer uma sandes. O que faz primeiro?", options: ["Põe luvas logo", "Lava as mãos e depois põe luvas novas", "Limpa as mãos ao avental", "Usa só desinfetante para as mãos"], answer: 1, why: "As luvas não substituem a lavagem das mãos; você lava depois de tocar no lixo e antes de pôr luvas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Evitar a contaminação cruzada",
          minutes: 5,
          goal: "Guardar e preparar os alimentos de modo que os germes e os alergénios não passem de um alimento ou superfície para outro.",
          text: [
            "A contaminação cruzada é quando os germes passam de uma coisa para outra: do frango cru para uma salada, de uma tábua de cortar suja para o pão, ou das suas mãos para uma sandes.",
            "Mantenha os alimentos crus e os prontos a comer separados. Use tábuas de cortar, facas e utensílios diferentes para a carne crua e para os legumes, a fruta ou a comida cozinhada; muitas cozinhas usam tábuas com cores diferentes. Se tiver de usar a mesma superfície, limpe-a e higienize-a entre as tarefas.",
            "Guarde os alimentos da forma certa na câmara frigorífica. Ponha os alimentos prontos a comer nas prateleiras de cima. Guarde os alimentos crus de origem animal por baixo, pela ordem da temperatura de cozedura: peças inteiras e peixe acima da carne picada, e as aves na prateleira de baixo, para que os sucos não pinguem sobre alimentos que precisam de menos cozedura. Tape e etiquete os alimentos com o nome e a data.",
            "Outros hábitos: nunca volte a pôr comida cozinhada num prato ou tabuleiro que teve carne crua; mantenha os produtos químicos longe e abaixo dos alimentos; e use uma pá limpa para o gelo, não um copo nem a mão."
          ],
          steps: ["Use tábuas e facas diferentes para a carne crua e para os alimentos prontos a comer.", "Limpe e higienize as superfícies entre as tarefas.", "Guarde os alimentos prontos a comer em cima na câmara frigorífica.", "Guarde a carne crua por baixo: peças inteiras e peixe, depois carne picada, e as aves em baixo de tudo.", "Tape e etiquete os alimentos guardados com o nome e a data.", "Mantenha os produtos químicos longe e abaixo dos alimentos."],
          words: [["Contaminação cruzada", "quando germes ou alergénios passam de um alimento, superfície ou mão para outro alimento."], ["Tábuas com cores diferentes", "tábuas de cortar de várias cores para alimentos diferentes, para os manter separados."]],
          slides: [
            { title: "O que é a contaminação cruzada", bullets: ["Os germes passam de uma coisa para outra", "Do frango cru para a salada; da tábua suja para o pão"] },
            { title: "Crus e prontos a comer separados", bullets: ["Tábuas, facas e utensílios diferentes", "Limpe e higienize entre as tarefas"] },
            { title: "Câmara frigorífica, de cima para baixo", bullets: ["Alimentos prontos a comer em cima", "Peças inteiras e peixe, depois carne picada", "Aves na prateleira de baixo"] },
            { title: "Outros hábitos", bullets: ["Nunca reutilize um prato de carne crua para comida cozinhada", "Produtos químicos longe e abaixo dos alimentos", "Use uma pá para o gelo"] }
          ],
          sources: [
            { name: "FDA: Manipulação segura de alimentos (separar alimentos crus e prontos a comer)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" }
          ],
          tryIt: "Desenhe uma câmara frigorífica com quatro prateleiras. Ponha estes alimentos nas prateleiras certas: um tabuleiro de coxas de frango cruas, uma caixa de alface cortada, carne de vaca picada crua e filetes de salmão crus. Escreva uma frase a dizer porque a ordem é importante.",
          youCanNow: "guardar e preparar os alimentos de modo que os germes não passem entre alimentos crus e prontos a comer.",
          quickCheck: [
            { objective: "O2", q: "O que é a contaminação cruzada?", options: ["Cozinhar a comida tempo demais", "Guardar comida no congelador", "Germes que passam de um alimento ou superfície para outro", "Misturar dois molhos"], answer: 2, why: "A contaminação cruzada é quando os germes passam de uma coisa, como o frango cru, para outra." },
            { objective: "O2", q: "Precisa de gelo para as bebidas. O que usa para o tirar?", options: ["Um copo de beber", "A sua mão limpa", "Um copo do escorredor da loiça", "Uma pá de gelo limpa"], answer: 3, why: "Uma pá limpa mantém as mãos e os vidros partidos fora do gelo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Alergénios, e limpar versus higienizar",
          minutes: 5,
          goal: "Servir com segurança um cliente com alergia alimentar e limpar e higienizar uma superfície corretamente.",
          text: [
            "Uma alergia alimentar pode matar. A FDA (a agência dos EUA para alimentos e medicamentos) indica nove alergénios alimentares principais: leite, ovos, peixe, crustáceos (como camarão e caranguejo), frutos de casca rija, amendoins, trigo, soja e sésamo. O sésamo foi acrescentado em 1 de janeiro de 2023.",
            "Quando um cliente diz que tem uma alergia, leve isso a sério. Avise o gerente ou o chefe de cozinha. Verifique a receita e os rótulos de todos os ingredientes. Lave as mãos, troque de luvas e use equipamento e superfícies limpos e higienizados para fazer a comida. Mantenha-a separada da outra comida e entregue-a à parte. Se não tiver a certeza de que o prato é seguro, diga isso; nunca adivinhe. Se um cliente tiver sinais de uma reação, como dificuldade em respirar ou inchaço, ligue para o 911 (o número de emergência nos EUA).",
            "Limpar e higienizar são coisas diferentes. Limpar tira a comida, a sujidade e a gordura que se veem. Higienizar reduz os germes para níveis seguros. Tem de limpar primeiro; o higienizante não funciona bem numa superfície suja.",
            "Para limpar e higienizar uma mesa de preparação: raspe a comida, lave com água e sabão, passe por água, aplique o higienizante na concentração certa (confirme com as tiras de teste que a sua cozinha usa e com as instruções do rótulo), deixe-o ficar durante o tempo de contacto indicado no rótulo e deixe secar ao ar. Não seque com uma toalha. A loiça num lava-loiça de três cubas segue a mesma ordem: lavar, passar por água, higienizar, secar ao ar."
          ],
          steps: ["Alergia: avise o gerente ou o chefe e verifique todos os ingredientes.", "Lave as mãos, troque de luvas, use utensílios limpos e higienizados.", "Mantenha o pedido com alergia separado e entregue-o à parte.", "Superfície: raspe, lave, passe por água.", "Higienize na concentração certa (tiras de teste) durante o tempo de contacto do rótulo.", "Deixe secar ao ar; não seque com toalha."],
          words: [["Alergénio", "um alimento que pode causar uma reação perigosa do sistema imunitário em algumas pessoas."], ["Higienizar", "reduzir os germes numa superfície limpa para níveis seguros, com calor ou um produto químico."], ["Tempo de contacto", "quanto tempo um higienizante tem de ficar molhado numa superfície para funcionar."], ["Tiras de teste", "tiras de papel que mostram se uma solução higienizante está na concentração certa."]],
          slides: [
            { title: "Os nove alergénios principais (FDA)", bullets: ["Leite, ovos, peixe, crustáceos", "Frutos de casca rija, amendoins, trigo, soja", "Sésamo (acrescentado em 1 de janeiro de 2023)"] },
            { title: "Um cliente tem uma alergia", bullets: ["Avise o gerente ou o chefe; verifique todos os rótulos", "Mãos limpas, luvas novas, utensílios higienizados", "Nunca adivinhe; ligue para o 911 se houver reação"] },
            { title: "Limpar versus higienizar", bullets: ["Limpar tira a sujidade que se vê", "Higienizar reduz os germes para níveis seguros", "Limpe sempre primeiro"] },
            { title: "Limpar e higienizar uma mesa", bullets: ["Raspe, lave, passe por água", "Higienize na concentração certa durante o tempo de contacto", "Seque ao ar; sem toalha"] }
          ],
          sources: [
            { name: "FDA: Alergias alimentares (os nove alergénios alimentares principais)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" }
          ],
          tryIt: "Escolha um prato que conhece, como um hambúrguer com queijo ou um salteado. Escreva quais dos nove alergénios principais ele pode ter. Depois escreva os seis passos que seguiria para limpar e higienizar a mesa de preparação depois de o fazer.",
          youCanNow: "tratar com segurança um pedido com alergia e limpar e higienizar uma superfície pela ordem certa.",
          quickCheck: [
            { objective: "O3", q: "Porque tem de limpar uma superfície antes de a higienizar?", options: ["O higienizante não funciona bem numa superfície suja", "Limpar faz o higienizante cheirar melhor", "Higienizar tira a gordura sozinho", "Só é preciso limpar uma vez por semana"], answer: 0, why: "O higienizante precisa de uma superfície limpa para reduzir os germes para níveis seguros." },
            { objective: "O3", q: "Um cliente pergunta se um prato tem sésamo e você não tem a certeza. O que diz?", options: ["\"Deve estar tudo bem.\"", "\"Não tenho a certeza; vou confirmar com o chefe e nos rótulos.\"", "\"Tire só o sésamo.\"", "\"Ninguém é alérgico ao sésamo.\""], answer: 1, why: "Nunca adivinhe sobre alergénios; verifique a receita e os rótulos com o chefe ou o gerente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Mãos limpas e alimentos limpos",
        questions: [
          { objective: "O1", q: "Quanto tempo deve esfregar as mãos quando as lava?", options: ["3 segundos", "Pelo menos 20 segundos", "Só até parecerem limpas", "2 minutos no lava-loiça da loiça"], answer: 1, why: "Esfregar durante pelo menos 20 segundos tira os germes; use o lavatório para as mãos." },
          { objective: "O1", q: "Um cozinheiro tem de pôr alface num hambúrguer já cozinhado. O que deve usar?", options: ["As mãos nuas, lavadas antes", "As mesmas luvas usadas para os hambúrgueres crus", "Luvas limpas, pinças ou um utensílio", "O avental"], answer: 2, why: "Os alimentos prontos a comer não podem ser tocados com as mãos nuas." },
          { objective: "O2", q: "Qual é a prateleira certa para o frango cru na câmara frigorífica?", options: ["A prateleira de baixo", "A prateleira de cima", "Acima da salada", "Ao lado do pão"], answer: 0, why: "As aves precisam da temperatura de cozedura mais alta, por isso ficam em baixo, onde os sucos não pingam sobre outros alimentos." },
          { objective: "O3", q: "Um cliente diz que é alérgico ao sésamo. O que faz primeiro?", options: ["Diz-lhe que o sésamo não é um alergénio", "Tira as sementes de sésamo do pão", "Adivinha que o prato está bem", "Avisa o gerente ou o chefe e verifica todos os ingredientes"], answer: 3, why: "As alergias têm de ser levadas a sério e verificadas, nunca adivinhadas." },
          { objective: "O3", q: "Qual é a ordem certa para tratar uma mesa de preparação?", options: ["Higienizar e depois lavar", "Raspar, lavar, passar por água, higienizar, secar ao ar", "Limpar só com uma toalha seca", "Passar por água e depois secar com toalha"], answer: 1, why: "O higienizante só funciona numa superfície que foi primeiro limpa e passada por água." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tempo e temperatura",
      lessons: [
        {
          objectives: ["O4"],
          title: "A zona de perigo de temperatura",
          minutes: 5,
          goal: "Manter os alimentos frios frios e os quentes quentes, e verificar as temperaturas com um termómetro.",
          text: [
            "Os germes crescem mais depressa entre 41°F e 135°F. Este intervalo chama-se zona de perigo de temperatura. No serviço de alimentação, o FDA Food Code (o código alimentar da FDA) diz para manter os alimentos frios a 41°F ou menos e os quentes a 135°F ou mais. (Os conselhos da FDA e do USDA para cozinhar em casa usam 40°F e 140°F; no trabalho, siga o código que o seu serviço de saúde usa.)",
            "Os alimentos que precisam deste controlo chamam-se alimentos TCS (controlo de tempo e temperatura para segurança): carne, aves, peixe, ovos, laticínios, arroz, feijão e batatas cozinhados, melão cortado, tomate cortado, folhas verdes cortadas, tofu e rebentos, entre outros.",
            "Use um termómetro de alimentos limpo e higienizado. Ponha a ponta na parte mais grossa do alimento, sem tocar no osso nem na panela. Verifique as temperaturas de conservação num horário, por exemplo a cada 2 horas, e escreva-as no registo. Calibre o termómetro como a sua cozinha lhe ensina.",
            "Descongele os alimentos com segurança: na câmara frigorífica, debaixo de água fria corrente, no micro-ondas se forem cozinhados logo a seguir, ou como parte da cozedura. Nunca descongele alimentos em cima da bancada."
          ],
          steps: ["Limpe e higienize o termómetro.", "Ponha a ponta na parte mais grossa do alimento.", "Alimentos frios: 41°F ou menos. Alimentos quentes: 135°F ou mais.", "Escreva a leitura e a hora no registo.", "Se um alimento estiver na zona de perigo, avise o seu gerente."],
          words: [["Zona de perigo de temperatura", "de 41°F a 135°F no serviço de alimentação: o intervalo em que os germes crescem mais depressa."], ["Alimento TCS", "alimento que precisa de controlo de tempo e temperatura para se manter seguro, como carne, laticínios, arroz cozinhado e melão cortado."], ["Calibrar", "verificar e acertar um termómetro para que dê a leitura certa."]],
          slides: [
            { title: "A zona de perigo", bullets: ["De 41°F a 135°F (FDA Food Code)", "Alimentos frios: 41°F ou menos", "Alimentos quentes: 135°F ou mais"] },
            { title: "Alimentos TCS", bullets: ["Carne, aves, peixe, ovos, laticínios", "Arroz, feijão e batatas cozinhados", "Melão cortado, tomate cortado, folhas verdes cortadas"] },
            { title: "Use um termómetro", bullets: ["Limpo e higienizado", "Na parte mais grossa, sem tocar no osso nem na panela", "Verifique e registe num horário"] },
            { title: "Descongele com segurança", bullets: ["Na câmara frigorífica ou debaixo de água fria corrente", "No micro-ondas se for cozinhado logo a seguir", "Nunca em cima da bancada"] }
          ],
          sources: [
            { name: "FDA: Temperaturas-chave para a segurança dos ovos no serviço de alimentação (41°F a frio, 135°F a quente)", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" },
            { name: "FDA: Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Use um termómetro de alimentos em casa ou no trabalho para verificar a temperatura dentro do seu frigorífico (ponha-o num copo de água no frigorífico durante alguns minutos) e a de um alimento quente. Escreva se cada um está seguro para a conservação no serviço de alimentação.",
          youCanNow: "dizer qual é a zona de perigo de temperatura, manter os alimentos TCS fora dela e verificar as temperaturas corretamente.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer alimento TCS?", options: ["Alimento que é sempre servido frio", "Alimento que vem em lata", "Alimento que precisa de controlo de tempo e temperatura para segurança", "Alimento que só se vende em lojas"], answer: 2, why: "O alimento TCS precisa de controlo de tempo e temperatura porque os germes podem crescer nele." },
            { objective: "O4", q: "Um tabuleiro de feijão em conservação a quente marca 120°F na verificação das 2 horas. O que faz?", options: ["Escreve no registo e continua a servir", "Junta mais feijão por cima", "Desliga o aquecedor", "Avisa o seu gerente, porque está na zona de perigo"], answer: 3, why: "Os alimentos quentes têm de ficar a 135°F ou mais, por isso uma leitura de 120°F está na zona de perigo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Temperaturas de cozedura, reaquecimento e arrefecimento",
          minutes: 6,
          goal: "Cozinhar, reaquecer e arrefecer os alimentos às temperaturas seguras do FDA Food Code.",
          text: [
            "Cozinhar à temperatura interna certa mata os germes. As principais temperaturas de cozedura do FDA Food Code para o serviço de alimentação são: aves (frango, peru) e alimentos recheados: 165°F durante menos de 1 segundo (instantâneo). Carne picada, como a dos hambúrgueres, e ovos que vão ficar guardados para mais tarde: 155°F durante 17 segundos. Peças inteiras de vaca e de porco, peixe, e ovos cozinhados para servir logo: 145°F durante 15 segundos.",
            "Reaquecimento: a comida cozinhada que arrefeceu e que vai ser mantida quente tem de ser reaquecida a 165°F durante 15 segundos, em no máximo 2 horas. A comida cozinhada no micro-ondas deve chegar a 165°F, ser mexida e tapada, e ficar a repousar 2 minutos.",
            "Arrefecimento: a comida cozinhada tem de arrefecer de 135°F para 70°F em 2 horas, e de 135°F para 41°F em 6 horas no total. Arrefeça mais depressa dividindo a comida por tabuleiros baixos, usando um banho de gelo ou uma vara de gelo, e mexendo. Nunca deixe uma panela grande a arrefecer em cima da bancada.",
            "O seu serviço de saúde local pode usar uma versão mais nova ou mais antiga do Food Code, e os conselhos para cozinhar em casa são diferentes (por exemplo 160°F para carne de vaca picada em casa). Para um exame ou um trabalho, aprenda os números que o seu curso e o seu serviço de saúde usam."
          ],
          steps: ["Verifique a parte mais grossa com um termómetro.", "Aves e alimentos recheados: 165°F.", "Carne picada e ovos guardados para mais tarde: 155°F durante 17 segundos.", "Peças inteiras, peixe, ovos para servir logo: 145°F durante 15 segundos.", "Reaquecer para manter quente: 165°F durante 15 segundos, em no máximo 2 horas.", "Arrefecer: de 135°F para 70°F em 2 horas, para 41°F em 6 horas no total."],
          words: [["Temperatura interna", "a temperatura na parte mais grossa do alimento, medida com um termómetro."], ["Vara de gelo", "uma pá de plástico fechada, cheia de gelo ou de água e congelada, usada para mexer e arrefecer a comida depressa."], ["Arrefecimento em duas fases", "arrefecer a comida cozinhada para 70°F em 2 horas, e depois para 41°F em 6 horas no total."]],
          slides: [
            { title: "Temperaturas de cozedura (Food Code)", bullets: ["Aves e alimentos recheados: 165°F, instantâneo", "Carne picada: 155°F durante 17 segundos", "Peças inteiras, peixe: 145°F durante 15 segundos"] },
            { title: "Reaquecer para manter quente", bullets: ["165°F durante 15 segundos", "Em no máximo 2 horas"] },
            { title: "Arrefecimento em duas fases", bullets: ["De 135°F para 70°F em 2 horas", "Até 41°F em 6 horas no total", "Tabuleiros baixos, banho de gelo, vara de gelo, mexer"] },
            { title: "Conheça os seus números", bullets: ["Os serviços de saúde podem usar versões diferentes do Food Code", "Em casa é diferente: 160°F para carne de vaca picada", "Aprenda o que o seu curso e o seu condado usam"] }
          ],
          sources: [
            { name: "FDA: Procedimentos de padronização dos inspetores de segurança alimentar no retalho (temperaturas de cozedura, reaquecimento e arrefecimento do Food Code)", url: "https://www.fda.gov/media/155354/download" },
            { name: "FDA: Temperaturas-chave para a segurança dos ovos no serviço de alimentação", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" }
          ],
          tryIt: "Faça um cartão de bolso com as temperaturas de cozedura, reaquecimento, conservação e arrefecimento desta lição. Depois planeie, passo a passo, como arrefeceria depressa uma panela cheia de chili.",
          youCanNow: "cozinhar, reaquecer, conservar e arrefecer os alimentos às temperaturas seguras do Food Code e verificá-las com um termómetro.",
          quickCheck: [
            { objective: "O5", q: "Qual é a temperatura de cozedura no serviço de alimentação para uma peça inteira de vaca ou de porco?", options: ["145°F durante 15 segundos", "120°F durante 1 minuto", "155°F durante 17 segundos", "165°F durante 15 segundos"], answer: 0, why: "Pelo FDA Food Code, as peças inteiras de vaca e de porco chegam a 145°F durante 15 segundos." },
            { objective: "O5", q: "Uma panela grande cheia de arroz tem de ser arrefecida. Qual é o melhor primeiro passo?", options: ["Deixar a panela em cima da bancada durante a noite", "Pôr a panela quente diretamente na câmara frigorífica com tampa", "Dividir o arroz por tabuleiros baixos", "Tapá-la com uma toalha"], answer: 2, why: "Os tabuleiros baixos deixam a comida passar pela zona de perigo depressa o suficiente." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Obter o seu cartão de manipulador de alimentos e passar no exame",
          minutes: 5,
          goal: "Encontrar a regra local do cartão de manipulador de alimentos e preparar-se para o exame.",
          text: [
            "As regras do cartão de manipulador de alimentos mudam de estado para estado e de condado para condado. Alguns estados exigem um cartão para a maioria dos trabalhadores do setor alimentar; outros deixam a decisão aos condados ou às cidades; outros não têm uma regra geral. O seu serviço de saúde local ou de saúde ambiental diz-lhe o que se aplica onde você trabalha.",
            "Exemplo: Califórnia. Pela secção 113948 do Código de Saúde e Segurança da Califórnia, os manipuladores de alimentos têm de obter um cartão de manipulador de alimentos da Califórnia em 30 dias depois de serem contratados por um estabelecimento alimentar. O cartão é válido durante três anos, e o curso tem de vir de um formador acreditado pelo American National Standards Institute (ANSI). Alguns lugares estão isentos, como certas mercearias e cantinas escolares, por isso confirme com o seu condado.",
            "Um cartão de manipulador de alimentos é diferente de uma certificação de gerente de alimentos (como o exame ServSafe Manager). Os cursos de manipulador de alimentos são curtos e cobrem o básico deste curso. A certificação de gerente é mais longa, vai mais fundo e costuma ser exigida à pessoa responsável.",
            "Para se preparar: faça um curso acreditado, reveja cada tema deste curso, use o cartão de bolso que fez, e pratique com perguntas que você mesmo escreve ou que vêm com o seu curso. Leia cada pergunta com atenção: palavras como \"primeiro\", \"melhor\" e \"nunca\" são importantes."
          ],
          steps: ["Pesquise o nome do seu estado ou condado mais \"food handler card\" e encontre a página do serviço de saúde (muitas vezes acaba em .gov).", "Escreva o prazo depois da contratação, quanto tempo o cartão é válido e que cursos são aceites.", "Escolha um curso acreditado da lista que o seu serviço de saúde indica.", "Reveja a lavagem das mãos, a contaminação cruzada, as temperaturas, os alergénios e a limpeza.", "Faça o curso e o teste, e guarde uma cópia do seu cartão."],
          words: [["Cartão de manipulador de alimentos", "prova de que terminou um curso básico de segurança alimentar; exigido aos trabalhadores do setor alimentar em alguns estados e condados."], ["ANSI", "o American National Standards Institute, que acredita os formadores de segurança alimentar."], ["Certificação de gerente de alimentos", "uma credencial de segurança alimentar mais avançada, normalmente para a pessoa responsável por uma cozinha."]],
          slides: [
            { title: "As regras mudam de lugar para lugar", bullets: ["Alguns estados exigem um cartão; outros deixam aos condados", "O seu serviço de saúde local sabe"] },
            { title: "Exemplo: Califórnia", bullets: ["Cartão em 30 dias depois da contratação", "Válido durante três anos", "Curso de um formador acreditado pelo ANSI"] },
            { title: "Cartão de manipulador versus certificação de gerente", bullets: ["Manipulador: curto, o básico", "Gerente: mais longo, para a pessoa responsável"] },
            { title: "Pronto para o exame", bullets: ["Faça um curso acreditado", "Use o seu cartão de bolso das temperaturas", "Atenção a palavras como primeiro, melhor, nunca"] }
          ],
          sources: [
            { name: "Condado de Sonoma, Califórnia: Cartão de manipulador de alimentos (30 dias, três anos, ANSI)", url: "https://sonomacounty.gov/Health/Environmental-Health/Food-Program/Food-Handler-Card/" },
            { name: "Departamento de Saúde Pública da Califórnia (CDPH): Formação em segurança alimentar no retalho (HSC 113948)", url: "https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/RetailFood/RetailFoodSafetyTraining.pdf" }
          ],
          tryIt: "Tarefa final: escreva a sua Lista de Verificação para um Turno Seguro (lavagem das mãos, arrumação, temperaturas, arrefecimento, passos para alergias, passos para limpar e higienizar, sintomas de doença a comunicar). Depois procure a regra do cartão de manipulador de alimentos do seu estado ou condado e escreva no topo o prazo, quanto tempo o cartão é válido e que cursos contam.",
          youCanNow: "encontrar a regra do cartão de manipulador de alimentos do lugar onde trabalha, escolher um curso aceite e preparar-se para o exame.",
          quickCheck: [
            { objective: "O6", q: "Qual é a diferença entre um cartão de manipulador de alimentos e uma certificação de gerente de alimentos?", options: ["São a mesma coisa", "O cartão de manipulador cobre o básico; a certificação de gerente vai mais fundo, para a pessoa responsável", "O cartão de manipulador é só para gerentes", "A certificação de gerente é mais curta"], answer: 1, why: "Os cursos de manipulador cobrem o básico; a certificação de gerente é mais longa e costuma ser exigida à pessoa responsável." },
            { objective: "O6", q: "Começa um novo trabalho numa cozinha na próxima semana. Como encontra a regra do cartão de manipulador de alimentos?", options: ["Pergunta a um amigo noutro estado", "Assume que não há regra", "Compra o primeiro curso que vê na internet", "Consulta a página do serviço de saúde do seu estado ou condado"], answer: 3, why: "As regras mudam de estado para estado e de condado para condado, por isso a fonte é o serviço de saúde local." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Tempo e temperatura",
        questions: [
          { objective: "O4", q: "No serviço de alimentação, qual é a zona de perigo de temperatura segundo o FDA Food Code?", options: ["De 0°F a 32°F", "De 41°F a 135°F", "De 165°F a 212°F", "Só de 70°F a 80°F"], answer: 1, why: "Os germes crescem mais depressa entre 41°F e 135°F." },
          { objective: "O5", q: "Qual é a temperatura mínima de cozedura do frango no serviço de alimentação?", options: ["145°F", "135°F", "155°F", "165°F"], answer: 3, why: "As aves têm de chegar a 165°F." },
          { objective: "O5", q: "Uma panela grande de sopa tem de ser arrefecida. Qual é o método mais seguro?", options: ["Dividi-la por tabuleiros baixos e usar um banho de gelo", "Deixá-la em cima da bancada durante a noite", "Pôr a panela quente inteira no fundo da câmara frigorífica com tampa", "Juntar água quente"], answer: 0, why: "Os tabuleiros baixos e o gelo arrefecem a comida depressa através da zona de perigo." },
          { objective: "O5", q: "A comida cozinhada tem de arrefecer de 135°F para 70°F em:", options: ["6 horas", "12 horas", "2 horas", "24 horas"], answer: 2, why: "A primeira fase do arrefecimento é de 135°F para 70°F em 2 horas." },
          { objective: "O6", q: "Na Califórnia, um novo manipulador de alimentos tem de obter o cartão de manipulador de alimentos em:", options: ["30 dias depois da contratação", "Um ano", "Antes dos 21 anos", "Nunca é exigido"], answer: 0, why: "A regra da Califórnia é 30 dias depois da contratação; o cartão é válido durante três anos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Manipulador de Alimentos e Preparação para o Exame ServSafe",
    questions: [
      { objective: "O1", q: "Onde devem os manipuladores de alimentos lavar as mãos?", options: ["No lava-loiça de preparação", "No lava-loiça da loiça", "No lavatório para as mãos", "Em qualquer lava-loiça que esteja vazio"], answer: 2, why: "Use só o lavatório para as mãos, para não contaminar os alimentos nem a loiça." },
      { objective: "O1", q: "Quando tem de lavar as mãos antes de pôr luvas?", options: ["Nunca; as luvas chegam", "Sempre", "Só uma vez por dia", "Só depois do almoço"], answer: 1, why: "As luvas não substituem a lavagem das mãos." },
      { objective: "O6", q: "Um cozinheiro tem diarreia e vomitou esta manhã. O que deve fazer?", options: ["Avisar o gerente antes de trabalhar com alimentos", "Trabalhar mas com dois pares de luvas", "Beber água e continuar a cozinhar", "Não dizer nada"], answer: 0, why: "Estes sintomas têm de ser comunicados; o trabalhador pode ter de ficar longe dos alimentos." },
      { objective: "O2", q: "Qual é um alimento pronto a comer?", options: ["Carne de vaca picada crua", "Frango cru", "Camarão cru", "Um tomate às rodelas para uma sandes"], answer: 3, why: "Vai ser comido sem mais cozedura, por isso não pode ser tocado com as mãos nuas." },
      { objective: "O1", q: "Tem um pequeno corte no dedo. Deve:", options: ["Ignorá-lo", "Cobri-lo com um penso e usar uma luva", "Usar só um penso", "Ir para casa durante uma semana"], answer: 1, why: "Um penso mais uma luva mantêm a ferida longe dos alimentos." },
      { objective: "O2", q: "Qual destes é contaminação cruzada?", options: ["Cozinhar frango a 165°F", "Lavar as mãos durante 20 segundos", "Cortar frango cru e depois salada na mesma tábua sem higienizar", "Etiquetar os alimentos com a data"], answer: 2, why: "Os germes passam do frango cru para a salada." },
      { objective: "O2", q: "Na câmara frigorífica, o que vai na prateleira de CIMA?", options: ["Alimentos prontos a comer, como fruta cortada", "Aves cruas", "Carne de vaca picada crua", "Produtos químicos"], answer: 0, why: "Os alimentos prontos a comer ficam acima dos crus para que nada pingue sobre eles." },
      { objective: "O2", q: "Onde devem ser guardados os produtos químicos de limpeza?", options: ["Na prateleira acima dos alimentos", "Ao lado do balcão de saladas", "Em embalagens de comida vazias", "Longe e abaixo dos alimentos"], answer: 3, why: "Guardar os produtos químicos longe e por baixo evita que pinguem ou se entornem sobre os alimentos." },
      { objective: "O3", q: "Quantos alergénios alimentares principais indica a FDA?", options: ["Cinco", "Nove", "Doze", "Três"], answer: 1, why: "Leite, ovos, peixe, crustáceos, frutos de casca rija, amendoins, trigo, soja e sésamo." },
      { objective: "O3", q: "Um cliente com alergia ao amendoim pede um prato. Que passo está ERRADO?", options: ["Avisar o chefe", "Verificar o rótulo de todos os ingredientes", "Usar utensílios limpos e higienizados", "Raspar os amendoins de um prato já pronto e servi-lo"], answer: 3, why: "Tirar o alergénio não torna o prato seguro; faça um novo com utensílios limpos." },
      { objective: "O3", q: "Qual é a diferença entre limpar e higienizar?", options: ["Limpar tira a sujidade; higienizar reduz os germes para níveis seguros", "São a mesma coisa", "Higienizar tira a sujidade; limpar mata os germes", "Limpar é só para o chão"], answer: 0, why: "Primeiro limpa, depois higieniza." },
      { objective: "O3", q: "Depois de higienizar uma tábua de cortar, deve:", options: ["Secá-la com uma toalha", "Tirar logo o higienizante com água", "Deixá-la secar ao ar", "Pô-la logo por baixo de carne crua"], answer: 2, why: "Secar ao ar deixa o higienizante atuar durante o tempo de contacto sem trazer germes de uma toalha." },
      { objective: "O3", q: "Como sabe se uma solução higienizante está na concentração certa?", options: ["Pelo cheiro", "Verifica-a com as tiras de teste que a sua cozinha usa", "Pela cor", "Põe mais para ter a certeza"], answer: 1, why: "As tiras de teste mostram a concentração; fraca demais não funciona, forte demais pode ser perigosa." },
      { objective: "O4", q: "No serviço de alimentação, a que temperatura ou menos devem ser mantidos os alimentos TCS frios?", options: ["50°F", "60°F", "45°F", "41°F"], answer: 3, why: "O Food Code diz que a conservação a frio é a 41°F ou menos." },
      { objective: "O4", q: "Os alimentos TCS quentes num bufete têm de ser mantidos a:", options: ["135°F ou mais", "100°F ou mais", "120°F ou mais", "Temperatura ambiente"], answer: 0, why: "Pelo Food Code, a conservação a quente é a 135°F ou mais." },
      { objective: "O4", q: "Qual é uma forma segura de descongelar frango congelado?", options: ["Em cima da bancada durante a noite", "Na câmara frigorífica", "Em água morna em cima da bancada", "Ao sol"], answer: 1, why: "Descongelar na câmara frigorífica mantém o frango fora da zona de perigo." },
      { objective: "O5", q: "Os hambúrgueres de carne de vaca picada num restaurante têm de chegar a:", options: ["135°F", "145°F durante 15 segundos", "155°F durante 17 segundos", "100°F"], answer: 2, why: "O Food Code define 155°F durante 17 segundos para a carne picada." },
      { objective: "O5", q: "Uma costeleta de porco ou um filete de salmão têm de chegar a:", options: ["165°F durante 15 segundos", "120°F", "100°F", "145°F durante 15 segundos"], answer: 3, why: "As peças inteiras e o peixe são 145°F durante 15 segundos." },
      { objective: "O5", q: "Chili que sobrou e foi arrefecido ontem vai para o recipiente de conservação a quente. Reaqueça-o a:", options: ["165°F durante 15 segundos, em no máximo 2 horas", "135°F ao longo de 6 horas", "100°F", "Só até ficar morno"], answer: 0, why: "A comida cozinhada e arrefecida no local é reaquecida a 165°F durante 15 segundos, em no máximo 2 horas, para ser mantida quente." },
      { objective: "O6", q: "Onde encontra a regra do cartão de manipulador de alimentos da sua zona?", options: ["Numa publicação nas redes sociais", "No palpite de um colega", "No serviço de saúde do seu estado ou condado", "Em qualquer site de exames"], answer: 2, why: "As regras mudam de estado para estado e de condado para condado, por isso a fonte oficial é o serviço de saúde local." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 5, 8, 10, 13, 16, 18, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Lavagem das mãos", objective: "O1", notYet: "Os passos ou os momentos da lavagem das mãos faltam ou estão errados.", meets: "Escreve todos os passos da lavagem das mãos e pelo menos seis momentos em que deve lavar.", exceeds: "Também diz quando trocar de luvas e como tratar os alimentos prontos a comer." },
      { name: "Arrumação e contaminação cruzada", objective: "O2", notYet: "Os alimentos crus estão guardados acima dos prontos a comer, ou não há utensílios separados.", meets: "Mostra a ordem certa das prateleiras e tábuas e facas separadas ou higienizadas.", exceeds: "Também fala de etiquetar com o nome e a data e de guardar os produtos químicos abaixo dos alimentos." },
      { name: "Passos para alergias e higienização", objective: "O3", notYet: "Faltam os passos para alergias ou a ordem de limpar e higienizar.", meets: "Escreve os passos para alergias e a ordem: raspar, lavar, passar por água, higienizar, secar ao ar.", exceeds: "Fala das tiras de teste e do tempo de contacto do rótulo do higienizante." },
      { name: "Temperaturas de conservação", objective: "O4", notYet: "As temperaturas de conservação faltam ou estão erradas.", meets: "Frios a 41°F ou menos e quentes a 135°F ou mais, verificados com um termómetro.", exceeds: "Acrescenta um horário de verificação e um registo." },
      { name: "Cozedura e arrefecimento", objective: "O5", notYet: "Os números de cozedura ou de arrefecimento faltam ou estão errados.", meets: "Dá as temperaturas de cozedura certas e os dois limites de tempo do arrefecimento.", exceeds: "Acrescenta a regra do reaquecimento e como arrefecer a comida depressa." },
      { name: "Doença e regra local do cartão", objective: "O6", notYet: "Não há sintomas de doença na lista, ou não há regra do cartão no topo.", meets: "Escreve os sintomas a comunicar e o prazo, a validade e os cursos aceites para o cartão local.", exceeds: "Diz o nome da página do serviço de saúde onde encontrou a regra." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que obtêm um cartão de manipulador de alimentos num curso acreditado em 60 dias",
      "Alunos que conseguem ou mantêm um trabalho no serviço de alimentação em 90 dias (inquérito de seguimento)",
      "Os empregadores parceiros dizem ter menos erros de segurança alimentar nas inspeções sanitárias ou nas verificações de turno"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador para ler as lições",
      "Um lavatório com sabão para praticar a lavagem das mãos",
      "Um termómetro de alimentos (opcional mas útil)",
      "Papel e caneta para o cartão de bolso e a Lista de Verificação para um Turno Seguro",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça uma demonstração ao vivo da lavagem das mãos e contem os 20 segundos juntos.",
      "Use imagens ou embalagens vazias para o exercício das prateleiras da câmara frigorífica; não é preciso comida crua.",
      "Lembre aos alunos que os números para cozinhar em casa são diferentes dos do serviço de alimentação, e que o código do seu serviço de saúde é o que conta.",
      "Ajude cada aluno a procurar a regra do cartão do seu próprio estado ou condado; muda de lugar para lugar.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
