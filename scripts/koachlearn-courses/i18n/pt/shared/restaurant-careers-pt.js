"use strict";

// Koach Learn course (Portuguese translation of shared/restaurant-careers.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US rules (FLSA, OSHA, IRS, Department of Labor); US names are kept and explained.

module.exports = {
  id: "restaurant-careers-pt",
  lang: "pt",
  translationOf: "restaurant-careers",
  category: "Workforce Development",
  name: "Carreiras em Restaurantes: Empregado de Mesa, Cozinheiro e o Básico da Cozinha",
  skills: "Empregos e carreiras em restaurantes, Anotar e repetir um pedido, Salário com gorjetas e regras das gorjetas, Segurança na cozinha, Preparar a estação e as comandas, Um plano para ser contratado",
  outcome: "escolher um emprego de entrada num restaurante que combine consigo, fazer as tarefas básicas da forma certa (anotar um pedido, preparar uma estação, trabalhar com segurança), verificar se o seu salário com gorjetas está certo e seguir um plano de 30 dias para ser contratado.",
  about: [
    "Os restaurantes contratam durante todo o ano, e muitos contratam pessoas sem experiência: jovens à procura do primeiro emprego, adultos que mudam de carreira e pessoas que voltam da prisão. Muitos cozinheiros, gerentes e donos começaram como lavadores de louça, ajudantes de mesa ou recepcionistas.",
    "Neste curso você vai conhecer os empregos da sala (recepcionista, ajudante de mesa, empregado de mesa, barman) e da cozinha (lavador de louça, ajudante de cozinha, cozinheiro de linha), como anotar um pedido sem erros, como funciona o salário com gorjetas pela lei federal dos Estados Unidos, como estar seguro perto de facas, calor e chão molhado, e como preparar uma estação antes da hora de maior movimento.",
    "Este curso prepara você; não dá licença nem certificado. Ele mostra-lhe credenciais reais: um cartão de manipulador de alimentos (do seu estado ou condado, ou de um curso como o ServSafe Food Handler da National Restaurant Association, a associação nacional de restaurantes dos EUA), formação para servir álcool onde o seu estado a exige, o ProStart para alunos do ensino secundário e, mais tarde, a certificação da American Culinary Federation (ACF) para cozinheiros.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" que pode fazer em casa com papel e caneta. Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o seu Plano de Emprego em Restaurante numa página: o emprego que quer e dois lugares reais para se candidatar, a credencial que vai obter primeiro e a sua página oficial, a sua disponibilidade semanal, uma lista do turno para esse emprego (preparação, durante o turno, fecho) e uma apresentação de 30 segundos a dizer \"porque me devem contratar\", com uma data para cada passo nos próximos 30 dias.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Grupo misto: adolescentes e jovens adultos à procura do primeiro emprego, adultos que mudam de carreira, pessoas que voltam da prisão, imigrantes e pessoas que falam inglês como segunda língua. A maioria já comeu em restaurantes, mas nunca trabalhou num. Alguns vão trabalhar em comida rápida, outros em restaurantes com mesa, outros em cantinas ou hotéis.",
    startingPoint: "Conseguem seguir instruções faladas, fazer contas simples de dinheiro e ler um menu curto. A maioria não conhece as palavras dos restaurantes (sala, comanda, 86, \"atrás\"), como funciona o salário com gorjetas, que tarefas da cozinha são perigosas ou proibidas para adolescentes, nem como preparar uma estação.",
    gap: "Os restaurantes contratam depressa, mas os trabalhadores novos que não conhecem o básico erram nos pedidos, magoam-se com facas, queimaduras e quedas, ou desistem nas primeiras semanas. Conhecer os empregos, os hábitos de segurança e as regras do salário ajuda os alunos a serem contratados, a manterem o emprego e a subirem, e protege-os de receberem menos do que devem.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca; todas as práticas funcionam em papel",
      "Tempo: lições de 4 a 6 minutos, entre a escola, o trabalho ou consultas",
      "As habilidades práticas com facas, fritadeiras e equipamentos aprendem-se no trabalho ou numa aula com um formador qualificado, não neste curso",
      "As regras de salário e de trabalho de adolescentes mudam de estado para estado; cada aluno verifica na entidade de trabalho do seu estado",
      "Alguns alunos têm registo criminal; o curso indica empregadores de segunda oportunidade e não promete nenhum emprego"
    ],
    prerequisites: "Nenhum. Quem vai mexer em comida deve fazer também o curso \"Manipulador de Alimentos e Preparação para o Exame ServSafe\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de empregos de restaurante", action: "ligar cada emprego de entrada às suas tarefas principais e à primeira credencial ou formação que ajuda a consegui-lo", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com uma mesa de clientes num jogo de papéis", action: "anotar um pedido pela ordem certa do serviço, perguntar sobre alergias e repetir o pedido", standard: "sem faltar nenhum item nem nenhuma alteração" },
    { id: "O3", condition: "Com uma semana de exemplo de horas e gorjetas", action: "verificar se o salário com gorjetas chega ao mínimo federal e se nenhum gerente ficou com parte das gorjetas", standard: "usando as regras federais e dizendo onde verificar a regra do seu estado" },
    { id: "O4", condition: "Com uma cena de cozinha com um perigo", action: "dizer qual é o perigo e a ação segura para facas, superfícies quentes, chão molhado, cargas pesadas ou equipamentos que um adolescente não pode usar", standard: "para todos os perigos da cena" },
    { id: "O5", condition: "Com uma lista de preparação e um conjunto de comandas", action: "preparar uma estação com mise en place e anunciar as comandas e os movimentos na cozinha com clareza", standard: "com tudo pronto antes do serviço e sem nenhuma chamada perdida" },
    { id: "O6", condition: "Usando os seus próprios objetivos e horário", action: "escrever um plano de 30 dias para um emprego em restaurante, com um emprego alvo, uma credencial, a disponibilidade e uma apresentação", standard: "com uma data e um link oficial para cada passo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A sala do restaurante",
      lessons: [
        {
          title: "Empregos de restaurante e o caminho para subir",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ligar os empregos de entrada num restaurante às suas tarefas e às credenciais que ajudam a consegui-los.",
          text: [
            "Um restaurante tem dois lados. A sala (em inglês, front of the house, FOH) é onde estão os clientes: o recepcionista recebe-os e senta-os, o ajudante de mesa levanta e prepara de novo as mesas, o empregado de mesa anota os pedidos e traz a comida, o corredor leva os pratos e o barman faz as bebidas. A cozinha (back of the house, BOH) é a parte de trás: o lavador de louça mantém a louça e os utensílios limpos, o ajudante de cozinha corta e divide a comida em porções antes do serviço, e o cozinheiro de linha cozinha os pedidos durante o serviço.",
            "Muitas pessoas começam como lavador de louça, ajudante de mesa ou recepcionista e vão subindo: de lavador de louça a ajudante de cozinha, a cozinheiro de linha, a subchefe; de ajudante de mesa ou recepcionista a empregado de mesa, a chefe de turno, a gerente. Chegar a horas e aprender todas as estações é a forma de subir.",
            "As credenciais ajudam. Muitos estados ou condados exigem um cartão de manipulador de alimentos; um curso como o ServSafe Food Handler, da National Restaurant Association, é uma forma comum de se preparar para ele. Quem serve álcool pode precisar de uma formação do estado para servir álcool, como o ServSafe Alcohol. Os alunos do ensino secundário podem entrar no ProStart, um programa de dois anos de culinária e gestão de restaurantes. Mais tarde, os cozinheiros podem obter certificações da American Culinary Federation (ACF), como a Certified Fundamentals Cook. O programa Restaurant Ready, feito com grupos da comunidade, forma pessoas que não estão a estudar nem a trabalhar.",
            "Este curso prepara você; não dá nenhum cartão nem certificado. Verifique sempre o que o seu estado, o seu condado e o empregador exigem."
          ],
          words: [["Sala (FOH)", "a parte do restaurante onde estão os clientes: entrada, sala de jantar, bar."], ["Cozinha (BOH)", "a cozinha, a zona da louça e o armazém."], ["Cartão de manipulador de alimentos", "um cartão que mostra que você terminou uma formação aprovada sobre segurança dos alimentos; obrigatório em alguns estados e condados."], ["ProStart", "um programa de dois anos do ensino secundário em culinária e gestão de restaurantes."], ["ACF", "a American Culinary Federation, que certifica cozinheiros e chefes nos Estados Unidos."]],
          slides: [
            { title: "A sala", bullets: ["Recepcionista: recebe e senta os clientes", "Ajudante de mesa: levanta e prepara as mesas", "Empregado de mesa e corredor: pedidos e pratos", "Barman: bebidas"] },
            { title: "A cozinha", bullets: ["Lavador de louça: louça e utensílios limpos", "Ajudante de cozinha: corta e divide em porções antes do serviço", "Cozinheiro de linha: cozinha os pedidos durante o serviço"] },
            { title: "O caminho para subir", bullets: ["Lavador de louça, ajudante de cozinha, cozinheiro de linha, subchefe", "Ajudante de mesa ou recepcionista, empregado de mesa, chefe de turno, gerente"] },
            { title: "Credenciais que ajudam", bullets: ["Cartão de manipulador de alimentos (regra do estado ou condado)", "Formação para servir álcool onde for exigida", "ProStart (ensino secundário), ACF para cozinheiros mais tarde"] }
          ],
          sources: [
            { name: "National Restaurant Association: ServSafe Alcohol e ServSafe Food Handler", url: "https://www.servsafe.com/ServSafe-Alcohol" },
            { name: "National Restaurant Association Educational Foundation: ProStart", url: "https://chooserestaurants.org/prostart" },
            { name: "National Restaurant Association Educational Foundation: Restaurant Ready", url: "https://chooserestaurants.org/programs/restaurant-ready" },
            { name: "American Culinary Federation: certificação", url: "https://www.acfchefs.org/ACF/Certify/ACF/Certify/" }
          ],
          tryIt: "Dobre uma folha ao meio. Escreva SALA de um lado e COZINHA do outro. Escreva cada emprego desta lição no lado certo, com uma tarefa para cada um. Faça um círculo à volta do emprego em que gostaria de começar e escreva a credencial que ajudaria a consegui-lo.",
          youCanNow: "dizer os empregos da sala e da cozinha de um restaurante, o que cada um faz e uma credencial que ajuda a ser contratado.",
          quickCheck: [
            { objective: "O1", q: "Que emprego é da cozinha?", options: ["Recepcionista", "Empregado de mesa", "Ajudante de cozinha", "Barman"], answer: 2, why: "O ajudante de cozinha trabalha na cozinha; os outros trabalham onde estão os clientes." },
            { objective: "O1", q: "Você quer servir bebidas com álcool. Que formação o seu estado pode exigir?", options: ["Formação para servir álcool, como o ServSafe Alcohol", "Uma carta de condução profissional", "Um cartão de empilhadora", "Nunca é exigida nenhuma formação"], answer: 0, why: "Muitos estados têm regras de formação para servir álcool; veja a página do seu estado." }
          ]
        },
        {
          title: "Anotar um pedido da forma certa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Anotar o pedido de uma mesa, perguntar sobre alergias e repetir o pedido.",
          text: [
            "A maioria dos erros acontece quando se anota o pedido. Um empregado de mesa que segue sempre os mesmos passos erra menos e recebe melhores gorjetas.",
            "Cumprimente a mesa em um ou dois minutos, diga o seu nome e ofereça bebidas. Quando estiverem prontos, pergunte: \"Alguém tem alguma alergia alimentar que eu deva saber?\" Escreva o pedido pelo número do lugar, para o corredor saber quem recebe cada prato. Escreva todas as alterações, como sem cebola ou molho à parte.",
            "Repita o pedido à mesa antes de sair. Depois, registe-o no sistema de ponto de venda (POS) ou escreva a comanda com clareza. Se um cliente tiver uma alergia, marque-a na comanda e diga-o também pessoalmente à cozinha ou ao gerente. Nunca adivinhe se um prato é seguro; pergunte à cozinha. Se um cliente tiver dificuldade em respirar ou uma reação forte, ligue para o 911 (ou o número de emergência do seu local) e chame o gerente.",
            "Volte à mesa alguns minutos depois de a comida chegar, levante os pratos quando todos tiverem terminado e traga a conta quando a mesa pedir ou já tiver claramente terminado."
          ],
          steps: ["Cumprimente a mesa, diga o seu nome e ofereça bebidas.", "Pergunte sobre alergias alimentares.", "Escreva o pedido pelo número do lugar, com todas as alterações.", "Repita o pedido.", "Registe-o no POS ou escreva uma comanda clara; marque qualquer alergia e diga-o pessoalmente à cozinha.", "Volte à mesa depois de a comida chegar; levante os pratos e traga a conta."],
          words: [["Passos do serviço", "a ordem das tarefas que o empregado de mesa segue em cada mesa."], ["Número do lugar", "um número para cada cadeira, para o prato certo ir para o cliente certo."], ["POS", "sistema de ponto de venda: o ecrã onde os pedidos são registados e pagos."], ["Comanda", "o pedido impresso ou no ecrã a partir do qual a cozinha cozinha."], ["Alteração", "uma mudança num prato, como sem cebola ou mais molho."]],
          slides: [
            { title: "Cumprimentar e perguntar", bullets: ["Cumprimente em um ou dois minutos; diga o seu nome", "Ofereça bebidas", "Pergunte: \"Alguém tem alguma alergia alimentar?\""] },
            { title: "Escrever bem", bullets: ["Escreva pelo número do lugar", "Escreva todas as alterações", "Repita o pedido à mesa"] },
            { title: "Alergias", bullets: ["Marque-a na comanda", "Diga-o pessoalmente à cozinha ou ao gerente", "Nunca adivinhe; uma reação forte é para ligar para o 911"] },
            { title: "Terminar a mesa", bullets: ["Volte à mesa depois de a comida chegar", "Levante os pratos quando todos terminarem", "Traga a conta"] }
          ],
          tryIt: "Faça um jogo de papéis com um amigo ou familiar (ou faça os dois papéis em voz alta). Anote um pedido para três pessoas a partir de qualquer menu, pelo número do lugar, com pelo menos uma alteração e uma alergia. Repita o pedido. Depois, veja o seu papel: estão lá todos os itens e alterações?",
          youCanNow: "anotar um pedido passo a passo, perguntar sobre alergias, escrevê-lo pelo número do lugar e repeti-lo.",
          quickCheck: [
            { objective: "O2", q: "Porque se escreve um pedido pelo número do lugar?", options: ["Para a conta ficar maior", "Para o prato certo ir para o cliente certo", "Porque o POS precisa de um número de telefone", "Para não ter de repetir o pedido"], answer: 1, why: "Com o número do lugar, quem leva a comida põe cada prato à frente da pessoa certa." },
            { objective: "O2", q: "Uma cliente diz que é alérgica a amendoim. O que faz?", options: ["Diz-lhe que a comida deve estar boa", "Escreve e espera que o cozinheiro veja", "Escolhe você um prato para ela", "Marca-o na comanda e diz pessoalmente à cozinha"], answer: 3, why: "Uma alergia é marcada e dita em voz alta à cozinha; nunca adivinhe se um prato é seguro." }
          ]
        },
        {
          title: "O seu salário: valor por hora, gorjetas e o crédito de gorjetas",
          objectives: ["O3"],
          minutes: 6,
          goal: "Verificar se uma semana de salário com gorjetas chega ao mínimo federal e se as gorjetas foram tratadas dentro da lei.",
          text: [
            "Pela lei federal dos EUA (a Fair Labor Standards Act, ou FLSA), um empregador pode pagar a um trabalhador que recebe gorjetas um salário em dinheiro de apenas $2.13 por hora e contar as gorjetas para o resto do salário mínimo federal de $7.25. Isto chama-se crédito de gorjetas. Um trabalhador com gorjetas é alguém que recebe regularmente mais de $30 por mês em gorjetas.",
            "A regra: o seu salário em dinheiro mais as suas gorjetas têm de chegar a pelo menos $7.25 por cada hora que trabalha na semana. Se não chegarem, o empregador tem de pagar a diferença. Muitos estados têm um salário mínimo mais alto, e alguns, como a Califórnia, o Minnesota e Washington, exigem o salário mínimo completo do estado antes das gorjetas. Veja o seu estado na página de salários com gorjetas do Departamento do Trabalho dos EUA.",
            "As suas gorjetas são suas. O empregador não pode ficar com nenhuma parte delas. Um fundo de gorjetas, onde as gorjetas são divididas entre os trabalhadores, é permitido, mas os gerentes e supervisores não podem tirar gorjetas do fundo.",
            "O IRS (a autoridade de impostos dos EUA) diz para manter um registo diário das suas gorjetas e para informar o empregador das gorjetas em dinheiro de $20 ou mais num mês até ao dia 10 do mês seguinte. As gorjetas são rendimento que paga impostos, por isso declará-las protege você."
          ],
          steps: ["Some as horas que trabalhou esta semana.", "Multiplique as horas por $7.25 (ou pelo mínimo do seu estado, se for mais alto).", "Some o seu salário em dinheiro e as suas gorjetas da semana.", "Se o total for menor do que o mínimo, o empregador deve a diferença.", "Veja a regra do seu estado na página de salários com gorjetas do Departamento do Trabalho dos EUA."],
          words: [["Crédito de gorjetas", "a parte do salário mínimo que o empregador pode cobrir com gorjetas (federal: até $5.12 por hora)."], ["Salário em dinheiro", "o valor por hora que o empregador lhe paga diretamente, antes das gorjetas."], ["Fundo de gorjetas", "um sistema em que as gorjetas são juntadas e divididas entre os trabalhadores."], ["FLSA", "a Fair Labor Standards Act, a lei federal sobre salário mínimo, horas extra e trabalho infantil."]],
          slides: [
            { title: "O crédito de gorjetas federal", bullets: ["O salário em dinheiro pode ser de apenas $2.13 por hora", "As gorjetas podem contar para o mínimo de $7.25", "O seu estado pode exigir mais"] },
            { title: "Faça a conta", bullets: ["Horas x $7.25 = o mínimo que tem de receber", "Salário em dinheiro + gorjetas têm de chegar a esse valor", "Se não chegarem, o empregador paga a diferença"] },
            { title: "As suas gorjetas são suas", bullets: ["O empregador não pode ficar com nenhuma parte", "Os fundos de gorjetas são permitidos", "Os gerentes não podem tirar do fundo"] },
            { title: "Mantenha um registo", bullets: ["Escreva as suas gorjetas todos os dias", "Informe o empregador de $20 ou mais por mês", "Até ao dia 10 do mês seguinte (IRS)"] }
          ],
          sources: [
            { name: "Departamento do Trabalho dos EUA: Fact Sheet 15, Tipped Employees under the FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" },
            { name: "Departamento do Trabalho dos EUA: salários mínimos para trabalhadores com gorjetas por estado", url: "https://www.dol.gov/agencies/whd/state/minimum-wage/tipped" },
            { name: "IRS: registo e declaração de gorjetas", url: "https://www.irs.gov/businesses/small-businesses-self-employed/tip-recordkeeping-and-reporting" }
          ],
          tryIt: "Só para praticar, com números inventados. O Sam trabalhou 20 horas, recebeu um salário em dinheiro de $2.13 por hora e teve $70 em gorjetas. Faça a conta: 20 x $7.25 = $145. Salário em dinheiro 20 x $2.13 = $42.60. $42.60 + $70 = $112.60. Chega? Quanto deve o empregador? (Resposta: $32.40.) Depois, procure o seu estado na página de salários com gorjetas do Departamento do Trabalho e escreva a regra.",
          youCanNow: "verificar se uma semana de salário com gorjetas chega ao salário mínimo, reconhecer uma prática ilegal com gorjetas e manter um registo das suas gorjetas.",
          quickCheck: [
            { objective: "O3", q: "Pela lei federal, a quanto têm de chegar o salário em dinheiro mais as gorjetas por cada hora?", options: ["Pelo menos $7.25", "Pelo menos $2.13", "Pelo menos $30", "O que o gerente decidir"], answer: 0, why: "O salário em dinheiro mais as gorjetas têm de chegar ao mínimo federal de $7.25; se não, o empregador paga a diferença." },
            { objective: "O3", q: "O seu gerente tira uma parte do fundo de gorjetas todas as noites. O que é verdade?", options: ["Isso é normal e legal", "Só é legal aos fins de semana", "Os gerentes e supervisores não podem tirar gorjetas de um fundo de gorjetas", "É legal se o gerente também levantar mesas"], answer: 2, why: "A FLSA proíbe os gerentes e supervisores de receberem gorjetas de um fundo de gorjetas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A sala do restaurante",
        questions: [
          { objective: "O1", q: "Que emprego normalmente cozinha os pedidos dos clientes durante o serviço?", options: ["Recepcionista", "Cozinheiro de linha", "Ajudante de mesa", "Corredor"], answer: 1, why: "Os cozinheiros de linha cozinham os pedidos na linha durante o serviço." },
          { objective: "O1", q: "Um aluno do ensino secundário quer formação em restaurantes com mentores e competições. Que programa serve?", options: ["Um curso de carta de condução profissional", "O GED", "Formação de empilhadora", "ProStart"], answer: 3, why: "O ProStart é um programa de dois anos do ensino secundário em culinária e gestão de restaurantes." },
          { objective: "O2", q: "O que faz logo depois de escrever o pedido de uma mesa?", options: ["Repete o pedido à mesa", "Traz a conta", "Levanta os pratos", "Senta os próximos clientes"], answer: 0, why: "Repetir o pedido apanha os erros antes de a cozinha começar a cozinhar." },
          { objective: "O2", q: "Um cliente tem dificuldade em respirar depois de comer. O que faz primeiro?", options: ["Traz água e espera", "Pergunta ao cozinheiro o que tinha o prato", "Liga para o 911 (ou o número de emergência do seu local) e chama o gerente", "Oferece uma sobremesa grátis"], answer: 2, why: "Uma reação alérgica forte é uma emergência; peça ajuda imediatamente." },
          { objective: "O3", q: "Trabalhou 10 horas com um salário em dinheiro de $2.13 e teve $20 em gorjetas. Pelas regras federais, o empregador deve mais?", options: ["Não, $20 em gorjetas chegam", "Sim; $21.30 + $20 = $41.30, que é menos do que $72.50", "Não, as gorjetas nunca contam", "Sim, mas só se pedir por escrito"], answer: 1, why: "10 horas x $7.25 = $72.50, por isso o empregador tem de pagar a diferença de $31.20." }
        ]
      }
    },
    {
      name: "Capítulo 2: O básico da cozinha e ser contratado",
      lessons: [
        {
          title: "Segurança na cozinha: facas, calor, chão e regras para adolescentes",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dizer os perigos comuns da cozinha e a ação segura para cada um.",
          text: [
            "O guia da OSHA (a agência federal de segurança no trabalho dos EUA) para jovens que trabalham em restaurantes indica os principais perigos da cozinha: cortes com facas e máquinas, queimaduras com fritadeiras, grelhas e líquidos quentes, escorregões e quedas em chão molhado, lesões por levantar pesos e perigos elétricos. O seu empregador tem de lhe dar um local de trabalho seguro e formação.",
            "Facas: use uma faca afiada numa tábua de cortar com um pano húmido por baixo para não escorregar. Dobre os dedos da mão que segura a comida. Nunca tente apanhar uma faca a cair. Leve-a com a ponta para baixo, junto ao corpo, e diga \"faca\" ou \"afiado\" enquanto anda. Nunca deixe uma faca dentro de um lava-loiça com água. Queimaduras: diga \"quente\" ou \"quente atrás\" quando levar algo quente, use panos secos ou luvas de forno (um pano molhado deixa passar o calor) e vire os cabos das panelas para dentro. Chão: use sapatos fechados e antiderrapantes e limpe logo o que cair, ou ponha uma placa de chão molhado. Levantar pesos: dobre os joelhos, mantenha a carga perto do corpo e peça ajuda com caixas pesadas.",
            "Adolescentes: as regras federais de trabalho infantil limitam o trabalho na cozinha. Aos 14 e 15 anos não pode fazer pão e bolos no forno, cozinhar em chama aberta, usar a maioria das fritadeiras (só as que sobem e descem os cestos sozinhas) nem usar fatiadoras, picadoras, processadores ou batedeiras elétricas. Aos 16 e 17 anos continua a não poder usar, limpar ou montar fatiadoras de carne, picadoras de carne ou batedeiras industriais. Os jovens de 14 e 15 anos também têm limites de horas. O seu estado pode ter regras mais rigorosas.",
            "O uso de facas, da fritadeira e dos equipamentos aprende-se pessoalmente com um cozinheiro ou formador preparado. Se se magoar ou vir um perigo, diga logo ao seu gerente."
          ],
          steps: ["Procure o perigo: lâmina, calor, água no chão, carga pesada, máquina.", "Use o hábito seguro: mão protegida, pano seco, avisar em voz alta, limpar o que caiu, levantar com as pernas.", "Se tiver menos de 18 anos, veja se a tarefa ou a máquina é permitida para a sua idade.", "Diga ao gerente qualquer perigo ou lesão."],
          words: [["OSHA", "a Occupational Safety and Health Administration, a agência federal dos EUA para a segurança no trabalho."], ["Mão-guia", "a mão que segura a comida enquanto a outra corta; com as pontas dos dedos dobradas para dentro."], ["Sapatos antiderrapantes", "sapatos de trabalho fechados, com solas que agarram em chão molhado ou com gordura."], ["Regras de trabalho infantil", "leis sobre que trabalhos e horários são permitidos para trabalhadores com menos de 18 anos."]],
          slides: [
            { title: "Principais perigos da cozinha (OSHA)", bullets: ["Cortes com facas e máquinas", "Queimaduras com fritadeiras, grelhas, líquidos quentes", "Escorregões, quedas e lesões por levantar pesos"] },
            { title: "Hábitos com facas e calor", bullets: ["Dobre os dedos da mão-guia; nunca apanhe uma faca a cair", "Diga \"faca\", \"quente\", \"atrás\" quando se mexe", "Panos secos ou luvas; cabos virados para dentro"] },
            { title: "Chão e levantar pesos", bullets: ["Sapatos fechados e antiderrapantes", "Limpe logo o que cair ou ponha uma placa", "Dobre os joelhos; peça ajuda com cargas pesadas"] },
            { title: "Regras para adolescentes (federais)", bullets: ["14-15: sem forno de pão e bolos, chama aberta, maioria das fritadeiras, fatiadoras ou batedeiras elétricas", "16-17: sem fatiadoras de carne, picadoras ou batedeiras industriais", "O seu estado pode ser mais rigoroso"] }
          ],
          sources: [
            { name: "OSHA: Young Worker Safety in Restaurants eTool", url: "https://www.osha.gov/etools/young-workers-restaurant-safety" },
            { name: "Departamento do Trabalho dos EUA: Fact Sheet 2A, regras de trabalho infantil para restaurantes", url: "https://www.dol.gov/agencies/whd/fact-sheets/2a-child-labor-restaurants" },
            { name: "Departamento do Trabalho dos EUA: YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Desenhe uma cozinha simples numa folha: um fogão, uma fritadeira, uma tábua de cortar, um lava-loiça e uma câmara frigorífica. Marque três perigos com um X (por exemplo, algo entornado perto da fritadeira, uma faca no lava-loiça, o cabo de uma panela para fora). Ao lado de cada X, escreva a ação segura. Depois, escreva que tarefas do seu desenho um jovem de 15 anos não poderia fazer.",
          youCanNow: "reconhecer os perigos da cozinha, usar o hábito seguro para cada um e dizer que tarefas da cozinha são proibidas para adolescentes.",
          quickCheck: [
            { objective: "O4", q: "Uma faca escorrega da bancada. O que faz?", options: ["Apanha-a pelo cabo", "Afasta-a com o pé", "Agarra-a com um pano", "Dá um passo atrás e deixa-a cair"], answer: 3, why: "Nunca tente apanhar uma faca a cair; afaste-se e apanhe-a do chão quando parar." },
            { objective: "O4", q: "Pedem a um jovem de 15 anos para cortar carne numa fatiadora elétrica. O que é verdade?", options: ["Pode, se usar luvas", "As regras federais não o permitem para um jovem de 15 anos", "Pode, aos fins de semana", "Pode, se um amigo estiver a ver"], answer: 1, why: "As regras federais de trabalho infantil proíbem os jovens de 14 e 15 anos (e de 16 e 17) de usar fatiadoras de carne elétricas." }
          ]
        },
        {
          title: "Preparar a estação, as comandas e os avisos na cozinha",
          objectives: ["O5"],
          minutes: 5,
          goal: "Preparar uma estação a partir de uma lista de preparação e anunciar as comandas e os movimentos com clareza.",
          text: [
            "Mise en place (diz-se \"miz an plas\") é francês e quer dizer \"cada coisa no seu lugar\". Antes do serviço, o cozinheiro lê a lista de preparação, deixa prontos todos os ingredientes, utensílios e recipientes e arruma-os no mesmo sítio todos os dias, para não faltar nada quando começa a hora de maior movimento.",
            "Durante o serviço, os pedidos chegam como comandas, impressas ou num ecrã da cozinha. O expedidor (expo) ou o chefe anuncia cada comanda. Você responde \"ouvido\" ou \"sim, chefe\" para saberem que recebeu. Cozinhe primeiro as comandas mais antigas e diga logo ao chefe se algo estiver a acabar; quando um item acaba, diz-se que está \"86\".",
            "As cozinhas são apertadas e movimentadas, por isso as pessoas anunciam os seus movimentos: \"atrás\" quando passa por trás de alguém, \"esquina\" quando vira uma esquina sem visibilidade, \"quente\" ou \"afiado\" quando leva algo perigoso. Limpe enquanto trabalha: limpe a tábua, arrume os utensílios e mantenha a estação arrumada."
          ],
          steps: ["Leia a lista de preparação da sua estação.", "Junte todos os ingredientes, utensílios e recipientes da lista.", "Arrume-os sempre no mesmo sítio; ponha etiqueta e data nos recipientes.", "Veja a lista outra vez antes do serviço: não falta nada.", "Durante o serviço: responda \"ouvido\" a cada aviso, cozinhe primeiro as comandas mais antigas, anuncie os seus movimentos, limpe enquanto trabalha."],
          words: [["Mise en place", "francês para cada coisa no seu lugar: todos os ingredientes e utensílios prontos antes de cozinhar."], ["Lista de preparação", "a lista do que tem de ser cortado, dividido em porções ou feito antes do serviço."], ["Expo (expedidor)", "a pessoa que anuncia as comandas e verifica cada prato antes de sair."], ["Ouvido", "o que o cozinheiro diz para mostrar que ouviu um aviso."], ["86", "palavra da cozinha para um item que acabou."]],
          slides: [
            { title: "Mise en place", bullets: ["Cada coisa no seu lugar, antes do serviço", "Leia a lista de preparação; junte tudo", "Mesmo sítio todos os dias; etiqueta e data"] },
            { title: "Comandas", bullets: ["O expo anuncia a comanda", "Responda \"ouvido\"", "As comandas mais antigas primeiro", "Está a acabar? Diga ao chefe: pode ficar 86"] },
            { title: "Anuncie os seus movimentos", bullets: ["\"Atrás\" quando passa por trás de alguém", "\"Esquina\" numa esquina sem visibilidade", "\"Quente\" e \"afiado\" quando leva algo perigoso"] },
            { title: "Limpe enquanto trabalha", bullets: ["Limpe a sua tábua", "Arrume os utensílios", "Uma estação arrumada é uma estação rápida"] }
          ],
          tryIt: "Escolha um prato simples que consiga fazer em casa, como uma sanduíche ou uma salada. Escreva uma lista de preparação para o fazer para 10 pessoas. Depois, prepare a sua mise en place numa mesa: todos os ingredientes e utensílios de que precisa no seu lugar antes de começar. Escreva uma coisa de que se teria esquecido sem a lista.",
          youCanNow: "preparar uma estação com mise en place, responder às comandas e trabalhá-las por ordem, e anunciar os seus movimentos numa cozinha movimentada.",
          quickCheck: [
            { objective: "O5", q: "O que quer dizer mise en place?", options: ["Cozinhar primeiro a comanda mais nova", "Limpar só na hora de fechar", "Cada coisa no seu lugar, pronta antes do serviço", "Um tipo de molho francês"], answer: 2, why: "Mise en place quer dizer que todos os ingredientes e utensílios estão prontos antes de começar a cozinhar." },
            { objective: "O5", q: "Você passa por trás de um cozinheiro com uma panela quente. O que diz?", options: ["\"Quente atrás\"", "\"Ouvido\"", "\"86\"", "Nada, para não fazer barulho"], answer: 0, why: "Dizer \"quente atrás\" avisa o cozinheiro para ele não dar um passo atrás e chocar consigo." }
          ]
        },
        {
          title: "Ser contratado: o seu plano de emprego em restaurante",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Escrever um plano de 30 dias para conseguir o seu primeiro emprego num restaurante.",
          text: [
            "Os restaurantes muitas vezes contratam depressa, às vezes na mesma semana. Muitos pedem para se candidatar pela internet ou pessoalmente e podem chamá-lo para uma entrevista curta ou para uma entrevista de trabalho prático (um stage, diz-se \"stage\" à francesa), em que trabalha parte de um turno para verem como trabalha. Pergunte se a entrevista prática é paga; pela lei federal dos EUA, o tempo em que faz trabalho produtivo para a empresa é normalmente tempo de trabalho que tem de ser pago.",
            "Os gerentes querem saber sobretudo três coisas: quando pode trabalhar, se chega a horas e se é simpático e tem vontade de aprender. Os fins de semana, as noites e os feriados são as alturas de mais movimento, por isso estar disponível nesses dias ajuda. Candidate-se pessoalmente entre as horas das refeições (por exemplo, a meio da tarde), não durante o almoço ou o jantar.",
            "Se tiver registo criminal, saiba que muitos restaurantes contratam pessoas com registo. Seja honesto quando perguntarem, seja breve e fale do que fez desde então, como formação, trabalho e o seu cartão de manipulador de alimentos. Programas como o Restaurant Ready e os centros locais de reintegração e de emprego podem pô-lo em contacto com empregadores.",
            "O seu plano junta tudo: o emprego que quer, a credencial que vai obter primeiro, a sua disponibilidade, uma lista do turno e uma apresentação de 30 segundos."
          ],
          steps: ["Escolha um emprego para começar e dois lugares reais para se candidatar.", "Escolha uma credencial para obter primeiro (por exemplo, um cartão de manipulador de alimentos) e encontre a sua página oficial.", "Escreva a sua disponibilidade semanal.", "Escreva uma lista do turno para o emprego: preparação, durante o turno, fecho.", "Escreva uma apresentação de 30 segundos: quem é, quando pode trabalhar, porque vai ser de confiança.", "Ponha uma data em cada passo nos próximos 30 dias."],
          words: [["Entrevista prática (stage)", "um turno curto de experiência para o restaurante ver você a trabalhar."], ["Disponibilidade", "os dias e as horas em que pode trabalhar cada semana."], ["Apresentação", "uma introdução curta, falada, que diz porque alguém o deve contratar."], ["Empregador de segunda oportunidade", "um empregador disposto a contratar pessoas com registo criminal."]],
          slides: [
            { title: "Como os restaurantes contratam", bullets: ["Candidatura pela internet ou pessoalmente", "Entrevista curta ou entrevista prática (stage)", "Pergunte se a entrevista prática é paga"] },
            { title: "O que os gerentes querem", bullets: ["A sua disponibilidade, sobretudo noites e fins de semana", "Chegar a horas, sempre", "Simpatia e vontade de aprender"] },
            { title: "Se tiver registo criminal", bullets: ["Muitos restaurantes contratam pessoas com registo", "Seja honesto e breve", "Fale da formação e do trabalho desde então"] },
            { title: "O seu plano de 30 dias", bullets: ["Emprego e dois lugares para se candidatar", "Primeira credencial e a sua página oficial", "Disponibilidade, lista do turno, apresentação, datas"] }
          ],
          sources: [
            { name: "National Restaurant Association Educational Foundation: Restaurant Ready", url: "https://chooserestaurants.org/programs/restaurant-ready" },
            { name: "Departamento do Trabalho dos EUA: YouthRules (autorizações de trabalho e horários para adolescentes)", url: "https://www.dol.gov/agencies/whd/youthrules" },
            { name: "Departamento do Trabalho dos EUA: Fact Sheet 15, Tipped Employees under the FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" }
          ],
          tryIt: "Tarefa final: faça o seu Plano de Emprego em Restaurante numa página. Escreva o emprego que quer e dois lugares reais para se candidatar, a credencial que vai obter primeiro e a sua página oficial, a sua disponibilidade semanal, uma lista do turno (preparação, durante, fecho) e uma apresentação de 30 segundos. Ponha uma data em cada passo nos próximos 30 dias. Leia a apresentação em voz alta duas vezes.",
          youCanNow: "escrever um plano de 30 dias para conseguir um emprego num restaurante e fazer uma apresentação curta a um gerente que está a contratar.",
          quickCheck: [
            { objective: "O6", q: "Qual é uma boa altura para entrar num restaurante e candidatar-se?", options: ["A meio da hora de maior movimento do almoço", "Entre as horas das refeições, por exemplo a meio da tarde", "Mesmo à hora de fechar", "Durante o jantar de sexta-feira"], answer: 1, why: "Os gerentes têm tempo para falar entre as horas de movimento, não quando há clientes à espera." },
            { objective: "O6", q: "Qual é a apresentação mais forte?", options: ["\"Preciso de qualquer emprego.\"", "\"Não gosto muito das manhãs.\"", "\"Posso trabalhar a qualquer hora, acho eu.\"", "\"Sou o Jordan. Posso trabalhar à noite e aos fins de semana, tenho o meu cartão de manipulador de alimentos e chego sempre a horas.\""], answer: 3, why: "Diz quem é, a disponibilidade, uma credencial e porque vai ser de confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: O básico da cozinha e ser contratado",
        questions: [
          { objective: "O4", q: "Que pano deve usar para pegar no cabo de uma panela quente?", options: ["Um pano molhado", "Um guardanapo de papel", "Um pano seco ou uma luva de forno", "O seu avental"], answer: 2, why: "Um pano molhado deixa passar o calor e pode queimar; um pano seco ou uma luva protege." },
          { objective: "O4", q: "Vê uma poça de óleo perto da fritadeira. O que faz?", options: ["Limpa-a logo ou põe uma placa de chão molhado e avisa alguém", "Passa por cima", "Espera pela hora de fechar", "Tapa-a com um pano e deixa-a"], answer: 0, why: "O que cai no chão provoca escorregões e quedas; limpe logo ou avise os outros." },
          { objective: "O5", q: "O expo anuncia uma comanda para a sua estação. O que responde?", options: ["\"Atrás\"", "\"86\"", "\"Esquina\"", "\"Ouvido\""], answer: 3, why: "\"Ouvido\" diz ao expo que recebeu o pedido." },
          { objective: "O5", q: "O frango está quase a acabar a meio do serviço. O que faz?", options: ["Não diz nada e espera que chegue", "Diz logo ao chefe para ele o pôr como 86 ou mandar preparar mais", "Usa outra carne sem perguntar", "Sai da sua estação para cozinhar mais"], answer: 1, why: "O chefe precisa de saber cedo para os empregados de mesa deixarem de o vender ou para se preparar mais." },
          { objective: "O6", q: "Um restaurante pede-lhe para trabalhar três horas como entrevista prática. O que é inteligente perguntar?", options: ["Se esse tempo é pago", "Se pode saltar a entrevista", "Se pode começar como gerente", "Nada; nunca faça perguntas"], answer: 0, why: "Pela lei federal, o trabalho produtivo para a empresa é normalmente tempo de trabalho pago, por isso é justo perguntar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Carreiras em Restaurantes: Empregado de Mesa, Cozinheiro e o Básico da Cozinha",
    questions: [
      { objective: "O1", q: "Que emprego levanta e prepara de novo as mesas?", options: ["Cozinheiro de linha", "Ajudante de mesa", "Ajudante de cozinha", "Lavador de louça"], answer: 1, why: "O ajudante de mesa levanta e prepara de novo as mesas na sala." },
      { objective: "O1", q: "Qual é um caminho comum para subir na cozinha?", options: ["De recepcionista a barman, a chefe", "De cozinheiro de linha a lavador de louça, a ajudante de mesa", "De lavador de louça a ajudante de cozinha, a cozinheiro de linha", "De empregado de mesa a lavador de louça, a recepcionista"], answer: 2, why: "Muitos cozinheiros começam a lavar louça e depois passam à preparação e à linha." },
      { objective: "O1", q: "Que organização certifica cozinheiros e chefes, com níveis como Certified Fundamentals Cook?", options: ["A American Culinary Federation", "A OSHA", "O IRS", "O DMV (serviço de cartas de condução)"], answer: 0, why: "A American Culinary Federation (ACF) dá certificações de cozinheiro e de chefe." },
      { objective: "O1", q: "Terminar este curso dá-lhe um cartão de manipulador de alimentos?", options: ["Sim, automaticamente", "Sim, se passar no questionário", "Só na Califórnia", "Não; o curso prepara você, e o cartão vem de um curso aprovado ou do seu estado ou condado"], answer: 3, why: "O curso prepara você; o cartão vem de uma formação aprovada que o seu estado ou condado aceita." },
      { objective: "O2", q: "O que deve o empregado de mesa perguntar a cada mesa antes de anotar o pedido da comida?", options: ["Quanto pensam dar de gorjeta", "Se alguém tem alguma alergia alimentar", "Onde trabalham", "Se querem a conta já"], answer: 1, why: "Perguntar cedo sobre alergias mantém os clientes seguros." },
      { objective: "O2", q: "Um cliente pede um hambúrguer sem cebola. Onde se escreve \"sem cebola\"?", options: ["Na comanda, como alteração, ao lado desse número do lugar", "Em lado nenhum; você vai lembrar-se", "Só na conta", "Num papel autocolante para o recepcionista"], answer: 0, why: "Cada alteração é escrita ao lado do lugar e registada na comanda para a cozinha a ver." },
      { objective: "O2", q: "Porque se repete o pedido à mesa?", options: ["Para a mesa esperar mais", "É uma lei", "Para apanhar erros antes de a cozinha cozinhar", "Para ter uma gorjeta maior"], answer: 2, why: "Repetir o pedido apanha cedo os itens em falta e as alterações erradas." },
      { objective: "O3", q: "Qual é o salário mínimo federal em dinheiro para um trabalhador com gorjetas?", options: ["$7.25", "$5.12", "$30.00", "$2.13"], answer: 3, why: "A lei federal permite um salário em dinheiro de apenas $2.13 por hora se as gorjetas levarem o total até $7.25." },
      { objective: "O3", q: "Quem NÃO pode tirar gorjetas de um fundo de gorjetas?", options: ["Empregados de mesa", "Ajudantes de mesa", "Gerentes e supervisores", "Corredores"], answer: 2, why: "A FLSA proíbe os gerentes e supervisores de receberem dinheiro do fundo de gorjetas." },
      { objective: "O3", q: "Onde pode verificar a regra de salários com gorjetas do seu estado?", options: ["Na página de salários com gorjetas do Departamento do Trabalho dos EUA ou na entidade de trabalho do seu estado", "Numa publicação nas redes sociais", "No menu do restaurante", "Com um cliente da sua mesa"], answer: 0, why: "O Departamento do Trabalho mostra a regra de cada estado, e a entidade de trabalho do estado tem os detalhes." },
      { objective: "O3", q: "Que tipo de registo de gorjetas o IRS diz para manter?", options: ["Uma estimativa anual", "Um registo diário das gorjetas", "Nenhum registo", "Só um registo das gorjetas pagas com cartão"], answer: 1, why: "O IRS diz para manter um registo diário das gorjetas e informar o empregador de $20 ou mais por mês." },
      { objective: "O4", q: "Como deve levar uma faca pela cozinha?", options: ["Com a ponta para cima, acima da cabeça", "No bolso do avental", "Atrás das costas, em silêncio", "Com a ponta para baixo junto ao corpo, a dizer \"faca\" ou \"afiado\""], answer: 3, why: "A ponta para baixo junto ao corpo e um aviso em voz alta protegem você e as pessoas à sua volta." },
      { objective: "O4", q: "Que sapatos são mais seguros numa cozinha?", options: ["Sandálias", "Sapatos fechados e antiderrapantes", "Quaisquer sapatos de que goste", "Só meias"], answer: 1, why: "Os sapatos fechados e antiderrapantes protegem os pés e agarram em chão molhado ou com gordura." },
      { objective: "O4", q: "Que tarefa um jovem de 14 ou 15 anos NÃO pode fazer pelas regras federais?", options: ["Usar a máquina de lavar louça", "Levantar mesas", "Fazer pão e bolos no forno", "Usar uma torradeira"], answer: 2, why: "As regras federais dizem que os jovens de 14 e 15 anos não podem fazer nenhum trabalho de forno de pão e bolos." },
      { objective: "O4", q: "Magoou a mão numa fatiadora. O que faz?", options: ["Diz logo ao seu gerente", "Esconde para não ser mandado para casa", "Continua a trabalhar e não diz a ninguém", "Espera pela próxima semana"], answer: 0, why: "Avisar logo garante que é tratado e ajuda a acabar com o perigo para os outros." },
      { objective: "O5", q: "Quando deve estar pronta a mise en place?", options: ["Depois da hora de maior movimento", "No fecho", "A meio do serviço", "Antes de o serviço começar"], answer: 3, why: "Tudo fica pronto antes do serviço para não faltar nada na hora de maior movimento." },
      { objective: "O5", q: "Numa cozinha, o que quer dizer \"86\"?", options: ["A mesa tem 86 clientes", "O item acabou", "Pôr o forno a 86 graus", "O cozinheiro está em pausa"], answer: 1, why: "86 quer dizer que um item acabou e não pode ser vendido." },
      { objective: "O5", q: "Que comandas deve cozinhar primeiro?", options: ["As comandas mais antigas", "As comandas mais novas", "As mais fáceis", "As maiores"], answer: 0, why: "Trabalhar por ordem mantém o tempo de espera justo para todas as mesas." },
      { objective: "O6", q: "Que parte pertence ao seu plano de 30 dias para um emprego em restaurante?", options: ["A palavra-passe do seu banco", "Uma lista de restaurantes de que não gosta", "A sua disponibilidade semanal", "O seu número da Segurança Social"], answer: 2, why: "A disponibilidade é uma das primeiras coisas que o gerente pergunta; os números privados nunca vão num plano." },
      { objective: "O6", q: "Um gerente pergunta sobre o seu registo criminal. Qual é uma boa forma de responder?", options: ["Inventar uma história", "Zangar-se e ir embora", "Falar dez minutos sobre o caso", "Ser honesto e breve, e depois falar da sua formação e do trabalho desde então"], answer: 3, why: "Uma resposta curta e honesta que passa ao que fez desde então mostra que está pronto para trabalhar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 7, 8, 11, 13, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Emprego e lugares para se candidatar", objective: "O1", notYet: "Nenhum emprego claro, ou nenhum lugar real indicado.", meets: "Indica um emprego para começar, com as suas tarefas principais, e dois lugares reais para se candidatar.", exceeds: "Indica também o emprego seguinte para subir e o que é preciso para lá chegar." },
      { name: "Credencial com página oficial", objective: "O1", notYet: "Nenhuma credencial, ou um link que não é oficial.", meets: "Indica uma credencial (por exemplo, um cartão de manipulador de alimentos) e a sua página oficial do estado, do condado ou do programa.", exceeds: "Diz também se o emprego precisa de formação para servir álcool ou, para um adolescente, de alguma autorização de trabalho do estado." },
      { name: "Lista do turno", objective: "O5", notYet: "Faltam tarefas de preparação, durante o turno ou de fecho.", meets: "Indica as tarefas de preparação, durante o turno e de fecho do emprego, incluindo a mise en place ou a preparação das mesas.", exceeds: "Junta os avisos em voz alta e os passos para alergias que o emprego usa." },
      { name: "Segurança e salário", objective: "O4", notYet: "Nenhum hábito de segurança nem verificação do salário no plano.", meets: "Indica dois hábitos de segurança para o emprego e como verificar o salário com gorjetas ou o salário por hora em relação ao mínimo.", exceeds: "Para um adolescente, indica as tarefas que não pode fazer na sua idade; para um emprego com gorjetas, indica a regra do estado." },
      { name: "Apresentação e datas", objective: "O6", notYet: "Nenhuma apresentação, ou nenhuma data nos passos.", meets: "Uma apresentação de 30 segundos com a disponibilidade e a fiabilidade, e uma data em cada passo nos próximos 30 dias.", exceeds: "A apresentação foi treinada em voz alta com outra pessoa e melhorada." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (rubrica)",
      "Alunos que obtêm um cartão de manipulador de alimentos ou formação para servir álcool em 30 dias (inquérito de seguimento)",
      "Alunos que se candidatam a pelo menos dois restaurantes em 30 dias, e os que são contratados",
      "Alunos que continuam a trabalhar em restauração depois de 90 dias, e relatos dos parceiros de menos lesões e erros nos pedidos no primeiro mês"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta; um menu impresso ou da internet de qualquer restaurante local para o jogo de papéis do pedido",
      "Um telefone ou um computador da biblioteca para procurar as páginas oficiais",
      "Para a Lição 5: alguns objetos de cozinha ou imagens para preparar uma mise en place",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Faça a Lição 2 como jogo de papéis ao vivo em pares, um cliente e um empregado de mesa, e depois troquem; avalie com a lista de verificação do pedido.",
      "Não dê facas verdadeiras aos alunos nem ponha equipamentos a funcionar neste curso; as habilidades com facas e fritadeiras são ensinadas pessoalmente por um cozinheiro ou formador preparado.",
      "Para grupos de jovens, reveja as regras federais de trabalho infantil, as regras mais rigorosas do seu estado e o processo de autorização de trabalho antes da Lição 4.",
      "Para grupos de reintegração, convide para a Lição 6 um empregador local de segunda oportunidade na restauração ou o parceiro Restaurant Ready da associação de restaurantes do estado.",
      "As contas de gorjetas da Lição 3 usam só números inventados; antes de ensinar, verifique os valores federais e estaduais atuais nas páginas do Departamento do Trabalho."
    ]
  }
};
