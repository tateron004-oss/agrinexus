"use strict";

// Koach Learn course (Portuguese translation of shared/ai-skilled-trades-logistics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-skilled-trades-logistics-pt",
  lang: "pt",
  translationOf: "ai-skilled-trades-logistics",
  category: "Re-Entry",
  name: "IA para Ofícios Técnicos e Logística",
  skills: "Explicar manuais e especificações com IA, Escrever um orçamento de trabalho, Fazer uma lista de verificação de segurança, Registar o trabalho com fotos e notas, Planear rotas e cargas, Encontrar aprendizagens e empregos em ofícios",
  outcome: "usar um assistente de IA gratuito no telefone para perceber um manual, escrever um orçamento de trabalho claro, fazer uma lista de verificação de segurança e verificá-la com as regras oficiais, manter um registo de trabalho, planear uma rota de entregas ou de serviços e encontrar aprendizagens e empregos em ofícios.",
  about: [
    "Os ofícios técnicos (eletricidade, canalização, climatização (AVAC), carpintaria, soldadura, mecânica automóvel) e a logística (armazém, empilhador, entregas, camiões, envios) têm muita procura, e muitos caminhos começam com uma aprendizagem ou uma formação curta, e não com um curso universitário. Muitos empregadores nestas áreas contratam pessoas com cadastro.",
    "A IA não pega no martelo nem conduz o camião. Mas, no telefone, pode explicar um manual com palavras simples, escrever orçamentos e notas de trabalho, preparar listas de verificação de segurança e ajudar a planear rotas. Assim poupa tempo e ajuda você a parecer profissional.",
    "Este curso é para pessoas que voltam para casa depois da prisão, trabalhadores de programas de emprego e qualquer pessoa que começa num ofício ou num trabalho de logística. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. As regras de segurança vêm sempre do empregador, do fabricante e da OSHA (a agência de segurança no trabalho dos EUA), nunca da IA."
  ],
  finalTask: "Para um trabalho real ou de prática num ofício ou na logística, faça um dossier de trabalho com a ajuda da IA: um resumo com palavras simples de uma parte de um manual ou de uma especificação, um orçamento ou uma ordem de trabalho escrita, uma lista de verificação de segurança verificada numa fonte oficial, uma entrada no registo de trabalho com notas das fotos de antes e depois, e um plano de rota ou de carga. Depois encontre uma aprendizagem ou um emprego num ofício a que se possa candidatar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que voltam para casa depois da prisão, trabalhadores de programas de emprego e qualquer pessoa que começa num ofício técnico (eletricidade, canalização, climatização, carpintaria, soldadura, mecânica automóvel) ou num trabalho de logística (armazém, empilhador, entregas, camiões).",
    startingPoint: "Sabem usar o telefone para chamadas, SMS e fotos, e muitos têm experiência de trabalho prático. Poucos usaram um assistente de IA para ler manuais, escrever orçamentos ou planear rotas.",
    gap: "Espera-se que os trabalhadores dos ofícios e da logística leiam manuais técnicos, escrevam orçamentos e notas de trabalho, cumpram as regras de segurança e planeiem rotas. Usar a IA no telefone, e verificá-la em fontes oficiais, poupa tempo, dá um ar profissional e ajuda os alunos a entrar em aprendizagens e empregos em ofícios.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: muitas vezes só um telefone, usado na obra ou no camião",
      "As regras de segurança, o binário de aperto, a voltagem e os limites de peso vêm do manual, do empregador e da OSHA, nunca da IA",
      "Privacidade: nenhum documento ou dado privado de clientes nas fotos ou nos pedidos à IA",
      "Tempo: lições de cerca de cinco minutos, que cabem entre os turnos"
    ],
    prerequisites: "Nenhum. Quem é novo nas ferramentas de IA pode fazer primeiro o curso \"Introdução à IA e Confiança Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma parte de um manual ou de uma ficha de especificações", action: "usar a IA para a explicar com palavras simples e verificar cada número no manual", standard: "com todos os números iguais aos da fonte" },
    { id: "O2", condition: "Para um trabalho real ou de prática", action: "escrever um orçamento ou uma ordem de trabalho com mão de obra, peças, total, o que está incluído e uma data de validade", standard: "com as contas verificadas à mão e todas as partes necessárias" },
    { id: "O3", condition: "Para uma tarefa de trabalho real", action: "preparar uma lista de verificação de segurança com a IA e verificá-la no manual ou numa fonte oficial de segurança", standard: "juntando o que a IA esqueceu antes de o trabalho começar" },
    { id: "O4", condition: "Depois de um trabalho", action: "escrever uma entrada no registo de trabalho com data, local, trabalho feito, materiais, problemas, próximos passos e notas das fotos", standard: "com todas as partes e sem informações privadas de clientes" },
    { id: "O5", condition: "Com várias paragens ou artigos", action: "planear uma rota e uma lista simples de carga ou de inventário, e depois verificar a rota numa aplicação de mapas", standard: "com as cargas na ordem inversa das paragens e os tempos de condução verificados" },
    { id: "O6", condition: "Usando o Apprenticeship.gov ou um programa local", action: "encontrar uma aprendizagem ou um emprego num ofício a que se possa candidatar", standard: "e anotar os requisitos e como se candidatar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A IA no trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Perceber manuais e especificações com a IA",
          minutes: 5,
          goal: "Usar a IA para explicar um manual técnico ou uma especificação com palavras simples e depois verificá-la na fonte.",
          text: [
            "Os manuais, as fichas de especificações e os guias de instalação estão cheios de palavras difíceis. A IA pode explicá-las. Copie ou escreva uma parte, ou tire uma foto se a sua aplicação de IA lê imagens, e pergunte: \"Explique isto com palavras simples. Quais são os passos, que ferramentas preciso e quais são os avisos?\"",
            "Faça perguntas de seguimento: \"O que quer dizer 'apertar a 25 ft-lbs'?\" ou \"Qual é a diferença entre uma tomada GFCI (com proteção contra choques) e uma tomada normal?\" A IA é um ótimo explicador de termos e ideias.",
            "Mas quem manda é o manual. Números como o binário de aperto, a voltagem, a pressão, as distâncias de segurança e os limites de peso têm de vir do manual do fabricante, das normas da sua zona ou do seu supervisor. Se a IA e o manual não dizem o mesmo, siga o manual e pergunte ao seu supervisor."
          ],
          steps: ["Copie, escreva ou fotografe a parte do manual.", "Peça à IA para a explicar com palavras simples: passos, ferramentas, avisos.", "Faça perguntas de seguimento sobre os termos que não conhece.", "Verifique cada número no manual.", "Se não disserem o mesmo, siga o manual e pergunte ao seu supervisor."],
          words: [["Ficha de especificações", "um documento com as medidas e os requisitos exatos de um produto."], ["Binário de aperto", "a força com que se aperta uma coisa, como um parafuso (em inglês, \"torque\")."], ["Normas", "as regras oficiais de construção ou de eletricidade que uma zona exige (em inglês, \"code\")."]],
          slides: [
            { title: "A IA como explicador do manual", bullets: ["Cole, escreva ou fotografe uma parte", "Peça os passos, as ferramentas e os avisos", "Pergunte o que querem dizer os termos"] },
            { title: "Quem manda é o manual", bullets: ["Binário de aperto, voltagem, pressão, limites de peso", "Vêm do manual, das normas ou do supervisor"] },
            { title: "Quando não dizem o mesmo", bullets: ["Siga o manual", "Pergunte ao seu supervisor"] }
          ],
          tryIt: "Encontre um manual de algo que tem (uma ferramenta, um eletrodoméstico ou um veículo), na internet ou numa gaveta. Peça à IA para explicar uma parte com palavras simples e depois verifique cada número no manual.",
          youCanNow: "usar a IA para perceber manuais e especificações, confiando nos números oficiais.",
          quickCheck: [
            { objective: "O1", q: "O que é uma ficha de especificações?", options: ["Um folheto de vendas com preços", "Uma lista das medidas e dos requisitos exatos de um produto", "Um cartaz de segurança para a sala de descanso", "A opinião de um cliente sobre um produto"], answer: 1, why: "Uma ficha de especificações dá as medidas e os requisitos exatos que tem de cumprir." },
            { objective: "O1", q: "A IA explica uma parte do manual mas dá uma voltagem diferente da do manual. O que faria?", options: ["Usar a voltagem do manual e perguntar ao supervisor", "Usar o número da IA porque é mais recente", "Fazer a média dos dois números", "Saltar esse passo"], answer: 0, why: "Números como a voltagem vêm do manual, não da IA; na dúvida, pergunte ao supervisor." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever um orçamento ou uma ordem de trabalho clara",
          minutes: 5,
          goal: "Escrever um orçamento ou uma ordem de trabalho profissional com a ajuda da IA.",
          text: [
            "Os clientes e os supervisores confiam nos trabalhadores que põem as coisas por escrito. Um orçamento diz ao cliente o que você vai fazer e quanto vai custar, antes de começar. Uma ordem de trabalho regista um trabalho: o que foi pedido, o que foi feito, os materiais usados e o tempo gasto.",
            "Dê os dados à IA e deixe-a organizar: \"Escreva um orçamento simples para trocar uma torneira de casa de banho. Mão de obra 2 horas a $60 por hora. Peças: torneira $85, tubos de ligação $15. Válido 30 dias. O cliente escolhe o modelo da torneira.\" Verifique as contas e cada pormenor.",
            "Seja honesto: diga o que está incluído e o que não está, e avise que o preço pode mudar se encontrar problemas escondidos, sempre com a aprovação do cliente primeiro. Use um modelo gratuito no Google Docs ou no Word e guarde uma cópia de cada um."
          ],
          steps: ["Escreva o trabalho, as horas e o preço da mão de obra, e as peças com os preços.", "Peça à IA para organizar um orçamento ou uma ordem de trabalho simples.", "Verifique as contas e os pormenores.", "Junte o que está incluído, o que não está e quando deixa de ser válido.", "Guarde uma cópia."],
          words: [["Orçamento", "um preço escrito para um trabalho, antes de começar."], ["Ordem de trabalho", "o registo de um trabalho: o que foi pedido, o que foi feito, os materiais e o tempo."], ["Mão de obra", "o custo do tempo do trabalhador."]],
          slides: [
            { title: "Ponha por escrito", bullets: ["Orçamento: antes do trabalho", "Ordem de trabalho: registo do trabalho"] },
            { title: "Deixe a IA organizar", bullets: ["Dê-lhe a mão de obra, o preço por hora e as peças", "Verifique as contas"] },
            { title: "Seja honesto", bullets: ["O que está e não está incluído", "Mudanças só com a aprovação do cliente", "Guarde todas as cópias"] }
          ],
          tryIt: "Escreva um orçamento para um trabalho real ou de prática com a ajuda da IA: mão de obra, peças, total, o que está incluído e uma data de validade. Verifique as contas à mão.",
          youCanNow: "escrever um orçamento ou uma ordem de trabalho claro e honesto com a ajuda da IA.",
          quickCheck: [
            { objective: "O2", q: "O que quer dizer \"peças\" num orçamento?", options: ["O tempo do trabalhador", "O imposto sobre o trabalho", "Os materiais necessários para o trabalho", "O tempo de viagem"], answer: 2, why: "As peças são os materiais; a mão de obra é o tempo do trabalhador." },
            { objective: "O2", q: "A IA soma o seu orçamento em $310, mas as suas contas à mão dão $280. O que faria?", options: ["Enviar $310 porque a IA faz melhor as contas", "Enviar $280 sem verificar", "Enviar os dois números ao cliente", "Verificar outra vez cada linha e enviar o total certo"], answer: 3, why: "Verifique sempre as contas linha a linha antes de enviar um orçamento." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer uma lista de verificação de segurança do trabalho",
          minutes: 6,
          goal: "Preparar uma lista de verificação de segurança com a IA e verificá-la em fontes oficiais de segurança.",
          text: [
            "Muitos trabalhos de ofícios e de armazém usam uma análise de segurança do trabalho (ou de perigos): uma lista dos passos do trabalho, dos perigos em cada passo e de como os controlar. Exemplos de perigos: quedas, choques elétricos, lesões ao levantar pesos, máquinas em movimento como empilhadores, produtos químicos e calor.",
            "A IA pode preparar uma: \"Faça uma lista de verificação de segurança para trocar um candeeiro de teto: passos, perigos e controlos, incluindo o equipamento de proteção individual.\" Muitas vezes vai incluir coisas básicas boas, como desligar o disjuntor e testar que não há corrente.",
            "Mas a IA não é uma autoridade de segurança. Verifique a lista com o seu supervisor, as instruções do fabricante e fontes oficiais como a OSHA (osha.gov). As aulas Outreach da OSHA de 10 e de 30 horas ensinam o básico da segurança; a OSHA diz que o cartão é voluntário e não é uma certificação nem uma licença, mas alguns empregadores e estados exigem-no."
          ],
          steps: ["Escreva os passos do trabalho.", "Peça à IA os perigos e os controlos de cada passo, incluindo o equipamento de proteção.", "Verifique com o seu supervisor, o manual e o osha.gov.", "Corrija o que faltar ou estiver errado.", "Reveja a lista com a equipa antes de começar."],
          words: [["Perigo", "algo que pode magoar alguém."], ["EPI", "equipamento de proteção individual, como luvas, óculos de proteção, capacetes e botas com biqueira de aço (em inglês, \"PPE\")."], ["Análise de segurança do trabalho", "uma lista dos passos, dos perigos e dos controlos de um trabalho."]],
          slides: [
            { title: "Análise de segurança do trabalho", bullets: ["Os passos do trabalho", "Os perigos em cada passo", "Os controlos e o EPI"] },
            { title: "A IA prepara, as pessoas decidem", bullets: ["A IA lista os perigos comuns", "O supervisor, o manual e a OSHA confirmam"] },
            { title: "Cartões Outreach da OSHA", bullets: ["Aulas de segurança de 10 e de 30 horas", "Voluntário; não é certificação nem licença", "Alguns empregadores e estados exigem-no"] }
          ],
          sources: [{ name: "OSHA Outreach Training Program", url: "https://www.osha.gov/training/outreach" }, { name: "OSHA Outreach Training Program FAQs", url: "https://www.osha.gov/training/outreach/faq" }],
          tryIt: "Peça à IA uma lista de verificação de segurança para uma tarefa real (como levantar caixas pesadas ou mudar um pneu). Depois encontre uma página oficial de segurança ou o manual dessa tarefa e junte o que a IA esqueceu.",
          youCanNow: "preparar uma lista de verificação de segurança com a IA e verificá-la em fontes oficiais.",
          quickCheck: [
            { objective: "O3", q: "Que três coisas tem uma análise de segurança do trabalho?", options: ["Passos, perigos e controlos", "Ferramentas, preços e horários", "Trabalhadores, turnos e pausas", "Clientes, moradas e números de telefone"], answer: 0, why: "Uma análise de segurança do trabalho lista cada passo, os seus perigos e os controlos para eles." },
            { objective: "O3", q: "A sua lista de segurança da IA para levantar caixas não fala de luvas, mas a regra do empregador exige-as. O que faria?", options: ["Não usar luvas porque a IA não as pôs na lista", "Perguntar outra vez à IA até ela concordar", "Juntar as luvas à lista e cumprir a regra do empregador", "Usar luvas só nas caixas pesadas"], answer: 2, why: "As regras oficiais e do empregador mandam; junte o que a IA esqueceu." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A IA no trabalho",
        questions: [
          { objective: "O1", q: "A IA diz para apertar um parafuso a 40 ft-lbs, mas o manual diz 25. O que faz?", options: ["Segue a IA", "Escolhe a média", "Segue o manual e pergunta ao supervisor", "Aperta com toda a força"], answer: 2, why: "Os números oficiais vêm do manual." },
          { objective: "O2", q: "O que é um orçamento?", options: ["Um preço escrito para um trabalho, antes de começar", "Um recibo depois do pagamento", "Uma regra de segurança", "Um tipo de ferramenta"], answer: 0, why: "O orçamento diz o que esperar antes de o trabalho começar." },
          { objective: "O2", q: "Encontra um problema escondido que aumenta o preço. O que deve fazer?", options: ["Cobrar mais sem dizer nada", "Deixar o trabalho", "Esconder o problema", "Pedir a aprovação do cliente antes de fazer trabalho extra"], answer: 3, why: "As mudanças de preço precisam da aprovação do cliente." },
          { objective: "O3", q: "EPI quer dizer:", options: ["Empregado público pago", "Equipamento de proteção individual", "Extensão de ficha elétrica", "Entrada em propriedade privada"], answer: 1, why: "O EPI é o equipamento como luvas e óculos de proteção." },
          { objective: "O3", q: "Segundo a OSHA, o cartão de 10 horas da OSHA é:", options: ["Uma licença federal", "Voluntário e não é uma certificação nem uma licença", "Uma carta de condução", "Exigido pela OSHA em todos os trabalhos"], answer: 1, why: "A OSHA diz que o cartão Outreach não é uma certificação nem uma licença." }
        ]
      }
    },
    {
      name: "Capítulo 2: Logística, registos e carreiras",
      lessons: [
        {
          objectives: ["O4"],
          title: "Manter um registo de trabalho com fotos e notas",
          minutes: 5,
          goal: "Manter um registo de trabalho diário com fotos e notas curtas, usando a IA para as arrumar.",
          text: [
            "Um bom registo de trabalho protege você e impressiona os empregadores: mostra o que fez, quando, e que ficou bem feito. Tire fotos de antes e depois, anote os materiais usados, os problemas encontrados e o tempo gasto.",
            "Use o ditado por voz do telefone para dizer as suas notas no fim do trabalho e depois peça à IA: \"Transforme estas notas numa entrada curta e profissional do registo de trabalho, com data, local, trabalho feito, materiais, problemas e próximos passos.\" Verifique se está certa.",
            "Cumpra as regras do empregador sobre fotos: alguns locais não permitem fotos, e nunca deve fotografar clientes, os seus documentos privados ou os sistemas de segurança sem autorização. Guarde os registos onde o empregador disser."
          ],
          steps: ["Tire fotos de antes e depois, onde for permitido.", "Diga ou escreva notas rápidas no fim do trabalho.", "Peça à IA para organizar uma entrada do registo de trabalho.", "Verifique se está certa.", "Guarde-a onde o empregador disser."],
          words: [["Registo de trabalho", "um registo diário do trabalho que fez."], ["Ditado por voz", "uma função do telefone que transforma a sua fala em texto escrito."]],
          slides: [
            { title: "Porquê manter um registo", bullets: ["Prova o que fez e quando", "Protege você e impressiona os empregadores"] },
            { title: "Registar depressa", bullets: ["Fotos de antes e depois", "Diga as suas notas", "A IA organiza a entrada"] },
            { title: "Regras das fotos", bullets: ["Cumpra as regras do local", "Nada de clientes, documentos privados ou sistemas de segurança", "Guarde onde o empregador disser"] }
          ],
          tryIt: "Faça um pequeno trabalho em casa (arranjar, limpar ou arrumar alguma coisa). Tire fotos de antes e depois, diga as suas notas e peça à IA para as transformar numa entrada do registo de trabalho.",
          youCanNow: "manter um registo de trabalho profissional com fotos e notas arrumadas pela IA.",
          quickCheck: [
            { objective: "O4", q: "O que mostra uma foto de antes num registo de trabalho?", options: ["A rapidez com que trabalhou", "Como estava tudo antes de começar o trabalho", "A cara do cliente", "As suas ferramentas à venda"], answer: 1, why: "As fotos de antes e depois mostram o que mudou e que ficou bem feito." },
            { objective: "O4", q: "Um extrato bancário do cliente está no balcão onde está a trabalhar. O que faria antes de tirar uma foto?", options: ["Tirar a foto; é só para o registo", "Perguntar à IA se pode", "Aproximar a imagem do extrato para se ver bem", "Deixá-lo fora da foto ou pedir ao cliente para o tirar dali"], answer: 3, why: "Não fotografe documentos privados sem autorização." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear rotas, cargas e inventário",
          minutes: 5,
          goal: "Usar aplicações de mapas e a IA para planear uma rota e uma lista simples de carga ou de inventário.",
          text: [
            "Os motoristas de entregas, os técnicos de assistência e os trabalhadores de armazém planeiam rotas e cargas todos os dias. Aplicações de mapas gratuitas como o Google Maps deixam juntar várias paragens e mostram o trânsito. Muitas empresas usam o seu próprio programa de rotas; aprenda-o quando começar.",
            "A IA pode ajudar a pensar: \"Tenho 6 serviços: [zonas e horários]. Sugira uma ordem que poupe condução e cumpra os horários.\" Depois verifique na aplicação de mapas. Para as cargas: \"Faça uma lista de carga para estas entregas, para que os artigos da última paragem entrem primeiro.\"",
            "Para o inventário, ajuda uma folha simples com o artigo, o lugar (corredor, prateleira), a quantidade e o ponto de reencomenda. Nunca deixe a IA passar por cima dos limites de peso, das regras de fixação da carga ou das regras de horas de serviço dos motoristas; essas vêm do empregador e das regras oficiais de transporte."
          ],
          steps: ["Liste as paragens com as zonas e os horários.", "Peça à IA para sugerir uma ordem.", "Verifique numa aplicação de mapas com o trânsito.", "Faça uma lista de carga: a última paragem entra primeiro.", "Cumpra as regras de peso, de fixação e de horas de condução do empregador."],
          words: [["Rota", "a ordem e o caminho das paragens."], ["Fixação da carga", "amarrar a carga para que não se mexa nem caia."], ["Horas de serviço", "regras que limitam quanto tempo os motoristas profissionais podem conduzir e trabalhar."]],
          slides: [
            { title: "Planeie a rota", bullets: ["Liste as paragens e os horários", "A IA sugere uma ordem", "Verifique numa aplicação de mapas"] },
            { title: "Planeie a carga", bullets: ["A última paragem entra primeiro", "Inventário: artigo, lugar, quantidade"] },
            { title: "As regras vêm primeiro", bullets: ["Limites de peso e fixação da carga", "Horas de serviço dos motoristas", "Do empregador e das regras oficiais"] }
          ],
          tryIt: "Escolha cinco lugares reais da sua zona. Peça à IA para sugerir a melhor ordem para os visitar, depois verifique numa aplicação de mapas gratuita e compare os tempos de condução.",
          youCanNow: "planear uma rota e uma carga com a IA e aplicações de mapas, cumprindo as regras.",
          quickCheck: [
            { objective: "O5", q: "O que quer dizer inventário?", options: ["Uma lista do que tem em stock e de quantos há", "A rota mais rápida", "As horas de um motorista", "Uma regra de segurança para carregar"], answer: 0, why: "O inventário é a contagem dos artigos que tem." },
            { objective: "O5", q: "A IA sugere uma ordem para cinco paragens. O que faria a seguir?", options: ["Segui-la sem olhar", "Verificá-la numa aplicação de mapas com o trânsito antes de conduzir", "Pedir aos clientes para escolher", "Ir primeiro à paragem mais longe"], answer: 1, why: "As ideias de rota da IA precisam de ser verificadas numa aplicação de mapas com o trânsito do momento." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Encontrar aprendizagens e empregos em ofícios",
          minutes: 5,
          goal: "Encontrar uma aprendizagem registada ou um emprego num ofício e preparar a candidatura.",
          text: [
            "Uma Aprendizagem Registada (Registered Apprenticeship) deixa você ganhar um salário enquanto aprende um ofício, com formação em sala e um certificado reconhecido no fim. O Apprenticeship.gov, do Departamento do Trabalho dos EUA, tem um buscador de vagas de aprendizagem (Apprenticeship Job Finder). Os sindicatos, os colégios comunitários e os programas de pré-aprendizagem também oferecem caminhos.",
            "Peça à IA para explicar um ofício: \"O que faz no dia a dia um aprendiz de climatização (HVAC), que ferramentas usa e que matemática precisa?\" Depois peça ajuda para transformar a sua experiência num currículo para o ofício, com tudo verdadeiro.",
            "Alguns ofícios e trabalhos de condução precisam de licenças, exames ou de um registo de condução limpo, e algumas licenças têm em conta o cadastro criminal; verifique na agência de licenças do seu estado e pergunte ao seu programa de reintegração ou de emprego que empregadores e programas aceitam pessoas com cadastro. Seja de confiança e venha pronto para aprender: nos ofícios, é isso que conta mais."
          ],
          steps: ["Procure no buscador do Apprenticeship.gov e nos programas de sindicatos ou colégios locais.", "Peça à IA para explicar o ofício e as competências de que precisa.", "Verifique as regras de licenças e de cadastro na agência do seu estado.", "Peça ao seu programa de reintegração ou de emprego empregadores que dão uma segunda oportunidade.", "Faça um currículo verdadeiro para o ofício com a ajuda da IA."],
          words: [["Aprendizagem Registada", "um trabalho pago com formação que leva a um certificado reconhecido."], ["Pré-aprendizagem", "um programa curto que prepara você para entrar numa aprendizagem."], ["Oficial do ofício", "um trabalhador com a formação completa num ofício (em inglês, \"journeyworker\")."]],
          slides: [
            { title: "Ganhe enquanto aprende", bullets: ["Aprendizagem Registada: salário e formação", "Certificado reconhecido no fim"] },
            { title: "Onde procurar", bullets: ["Buscador do Apprenticeship.gov", "Sindicatos e colégios comunitários", "Programas de pré-aprendizagem"] },
            { title: "Verifique as regras", bullets: ["Licenças, exames, registo de condução", "Agência de licenças do estado", "Empregadores de segunda oportunidade através do seu programa"] }
          ],
          sources: [{ name: "Apprenticeship.gov (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Tarefa final: procure no Apprenticeship.gov ou num programa local uma aprendizagem ou um emprego num ofício a que se possa candidatar. Depois termine o seu dossier de trabalho: resumo do manual, orçamento ou ordem de trabalho, lista de segurança verificada, entrada do registo de trabalho e plano de rota ou de carga.",
          youCanNow: "usar a IA para trabalhar melhor num ofício ou na logística e encontrar um caminho para entrar.",
          quickCheck: [
            { objective: "O6", q: "O que é uma pré-aprendizagem?", options: ["Uma licença para trabalhar sozinho", "Um trabalho pago como supervisor", "Um programa que prepara você para entrar numa aprendizagem", "Um exame que se faz depois de uma aprendizagem"], answer: 2, why: "Uma pré-aprendizagem dá as bases para conseguir entrar numa aprendizagem." },
            { objective: "O6", q: "Quer saber se uma licença de que precisa tem em conta o cadastro criminal. O que faria?", options: ["Adivinhar pela história de um amigo", "Perguntar à IA e confiar na resposta", "Desistir desse ofício", "Verificar na agência de licenças do seu estado"], answer: 3, why: "A agência de licenças do estado tem as regras oficiais dessa licença." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Logística, registos e carreiras",
        questions: [
          { objective: "O4", q: "Porquê guardar fotos de antes e depois num registo de trabalho?", options: ["Para ter gostos nas redes sociais", "São exigidas por todas as leis", "Para fotografar os clientes", "Mostram o que fez e que ficou bem feito"], answer: 3, why: "As fotos provam o trabalho." },
          { objective: "O5", q: "Ao carregar um camião para várias paragens, que artigos entram primeiro?", options: ["Os artigos da última paragem", "Os artigos da primeira paragem", "Sempre os artigos mais leves", "Em qualquer ordem"], answer: 0, why: "A última paragem entra primeiro, assim os artigos da primeira paragem ficam fáceis de alcançar." },
          { objective: "O5", q: "De onde vêm os limites de peso e as regras de horas de condução?", options: ["De um chatbot de IA", "Dos seus amigos", "Do empregador e das regras oficiais de transporte", "De uma aplicação de mapas"], answer: 2, why: "As regras oficiais fixam esses limites." },
          { objective: "O6", q: "O que é uma Aprendizagem Registada?", options: ["Só um estágio sem salário", "Um curso universitário", "Um exame de licença", "Um trabalho pago com formação que leva a um certificado reconhecido"], answer: 3, why: "Os aprendizes ganham enquanto aprendem." },
          { objective: "O6", q: "Que site tem o buscador de vagas de aprendizagem do Departamento do Trabalho dos EUA?", options: ["Uma aplicação de redes sociais", "Um blogue qualquer", "Apprenticeship.gov", "Um site de compras"], answer: 2, why: "O Apprenticeship.gov é gerido pelo Departamento do Trabalho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Ofícios Técnicos e Logística",
    questions: [
      { objective: "O6", q: "Qual destes é um ofício técnico?", options: ["Influenciador nas redes sociais", "Eletricista", "Crítico de cinema", "Jogador da lotaria"], answer: 1, why: "O trabalho de eletricidade é um ofício técnico." },
      { objective: "O1", q: "Como pode a IA ajudar com um manual difícil?", options: ["Explicá-lo com palavras simples", "Trocar os números do manual", "Fazer o trabalho por você", "Aprovar a segurança"], answer: 0, why: "A IA é um bom explicador de termos e de passos." },
      { objective: "O1", q: "Uma ficha de especificações tem:", options: ["O seu horário de trabalho", "O seu salário", "As medidas e os requisitos exatos de um produto", "As opiniões dos clientes"], answer: 2, why: "As especificações dão os requisitos exatos." },
      { objective: "O1", q: "Que números têm de vir do manual ou das normas, e não da IA?", options: ["Voltagem, binário de aperto e limites de peso", "A data", "O seu nome", "A cor do camião"], answer: 0, why: "Os números importantes para a segurança precisam de fontes oficiais." },
      { objective: "O2", q: "Num orçamento, mão de obra quer dizer:", options: ["As peças", "O imposto", "A morada do cliente", "O custo do tempo do trabalhador"], answer: 3, why: "A mão de obra é o tempo pago." },
      { objective: "O2", q: "2 horas a $60 mais $100 em peças dá:", options: ["$62", "$120", "$160", "$220"], answer: 3, why: "2 x 60 = 120, mais 100 = 220." },
      { objective: "O2", q: "Um bom orçamento também diz:", options: ["Nada sobre o trabalho", "O que está incluído, o que não está e quando deixa de ser válido", "O seu número da Segurança Social", "Um preço fixo garantido aconteça o que acontecer"], answer: 1, why: "Condições claras evitam discussões." },
      { objective: "O3", q: "Uma análise de segurança do trabalho tem:", options: ["Só o preço", "Os aniversários da equipa", "As opiniões dos clientes", "Passos, perigos e controlos"], answer: 3, why: "Planeia a segurança de cada passo." },
      { objective: "O3", q: "Qual destes é EPI?", options: ["Óculos de proteção", "Uma capa de telefone", "Uma lancheira", "Uma aplicação de mapas"], answer: 0, why: "Os óculos de proteção protegem os seus olhos." },
      { objective: "O3", q: "Quem confirma uma lista de segurança que a IA preparou?", options: ["Ninguém", "A própria IA", "O seu supervisor, o manual e fontes oficiais como a OSHA", "Um vídeo qualquer"], answer: 2, why: "A IA não é uma autoridade de segurança." },
      { objective: "O3", q: "A aula Outreach de 10 horas da OSHA:", options: ["É uma licença de empreiteiro", "Substitui toda a formação no trabalho", "É dada pela IA", "Ensina o básico da segurança; o cartão é voluntário"], answer: 3, why: "A OSHA descreve-a como uma formação voluntária." },
      { objective: "O4", q: "O ditado por voz ajuda você a:", options: ["Fazer chamadas mais baratas", "Conduzir mais depressa", "Dizer as notas em vez de as escrever", "Só ler manuais em voz alta"], answer: 2, why: "Transforma a fala em texto." },
      { objective: "O4", q: "Que foto NÃO deve tirar sem autorização?", options: ["A reparação terminada", "Os documentos privados de um cliente", "A peça avariada", "A sua própria caixa de ferramentas"], answer: 1, why: "Respeite a privacidade do cliente." },
      { objective: "O4", q: "Uma entrada do registo de trabalho tem:", options: ["Data, local, trabalho feito, materiais, problemas e próximos passos", "Só a sua opinião", "As palavras-passe do cliente", "Nada"], answer: 0, why: "As entradas completas são registos úteis." },
      { objective: "O5", q: "Depois de a IA sugerir uma ordem de rota, você deve:", options: ["Segui-la sem olhar", "Ignorar os horários", "Verificá-la numa aplicação de mapas com o trânsito", "Conduzir mais depressa"], answer: 2, why: "As aplicações de mapas mostram os tempos de condução reais e o trânsito." },
      { objective: "O5", q: "Fixação da carga quer dizer:", options: ["Amarrar a carga para que não se mexa nem caia", "Fechar o escritório à chave", "Garantir um empréstimo", "Guardar um ficheiro"], answer: 0, why: "Uma carga bem fixa evita acidentes." },
      { objective: "O5", q: "As regras de horas de serviço limitam:", options: ["O horário de abertura das lojas", "As pausas para almoço só do pessoal de escritório", "O uso da internet", "Quanto tempo os motoristas profissionais podem conduzir e trabalhar"], answer: 3, why: "Evitam o cansaço dos motoristas." },
      { objective: "O6", q: "Uma pré-aprendizagem:", options: ["É uma licença completa", "Prepara você para entrar numa aprendizagem", "É um programa de empréstimos", "É um tipo de ferramenta"], answer: 1, why: "Dá as competências para entrar numa aprendizagem." },
      { objective: "O6", q: "Onde verifica se uma licença de um ofício tem em conta o cadastro criminal?", options: ["Num palpite da IA", "Na agência de licenças do seu estado", "Num comentário num anúncio de emprego", "Em lado nenhum"], answer: 1, why: "As agências do estado fixam as regras das licenças." },
      { objective: "O6", q: "Nos ofícios, o que conta mais para muitos empregadores no início?", options: ["Ter ferramentas caras", "Ter um curso universitário", "Conhecer toda a gente", "Ser de confiança e estar pronto para aprender"], answer: 3, why: "Ser de confiança e ter boa atitude abre portas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 5, 7, 9, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Resumo do manual", objective: "O1", notYet: "O resumo tem um número que não é igual ao do manual, ou não tem fonte.", meets: "Resumo com palavras simples e todos os números verificados no manual.", exceeds: "Também diz que passo precisa de um supervisor ou de um trabalhador licenciado." },
      { name: "Orçamento ou ordem de trabalho", objective: "O2", notYet: "Falta a mão de obra, as peças, o total, o que está incluído ou a data de validade, ou as contas estão erradas.", meets: "Tem todas as partes e as contas foram verificadas à mão.", exceeds: "Também diz o que não está incluído e como as mudanças serão aprovadas." },
      { name: "Lista de segurança", objective: "O3", notYet: "Copiada da IA sem nenhuma verificação oficial.", meets: "Verificada no manual ou numa fonte oficial, com o que faltava acrescentado.", exceeds: "Diz qual é a fonte e o EPI para cada perigo." },
      { name: "Registo de trabalho", objective: "O4", notYet: "Falta a data, o trabalho feito, os materiais, os problemas ou os próximos passos, ou mostra informações privadas.", meets: "Uma entrada completa com notas das fotos de antes e depois e sem informações privadas.", exceeds: "Outro trabalhador conseguiria continuar o trabalho só com esta entrada." },
      { name: "Plano de rota ou de carga", objective: "O5", notYet: "A rota não foi verificada, ou a carga está na ordem errada.", meets: "Rota verificada numa aplicação de mapas e cargas na ordem inversa das paragens.", exceeds: "Também lista as quantidades do inventário e anota as regras do empregador." },
      { name: "Próximo emprego encontrado", objective: "O6", notYet: "Não encontrou nenhuma aprendizagem nem emprego.", meets: "Uma aprendizagem ou um emprego real num ofício, com os requisitos e como se candidatar.", exceeds: "Também diz o primeiro passo que vai dar esta semana." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que se candidatam a uma aprendizagem, pré-aprendizagem ou emprego num ofício em 30 dias (inquérito de seguimento)",
      "Alunos que começam uma aprendizagem ou um emprego num ofício em 90 dias",
      "Alunos que dizem usar a IA para escrever um orçamento, um registo de trabalho ou uma lista de segurança no trabalho",
      "Alunos que começam outro curso da Koach Learn sobre ofícios ou carreiras em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com câmara e internet",
      "Um assistente de IA gratuito como o ChatGPT, o Microsoft Copilot ou o Google Gemini, e uma aplicação de mapas gratuita",
      "Um manual de uma ferramenta, de um eletrodoméstico ou de um veículo (em papel ou na internet)",
      "Papel e caneta ou uma aplicação de notas para o dossier de trabalho",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Repita em todas as sessões que os números e as regras de segurança vêm do manual, do empregador e da OSHA, não da IA.",
      "Traga manuais verdadeiros e exemplos de orçamentos de ofícios locais para os alunos praticarem com documentos reais.",
      "Não deixe os alunos fazer trabalhos de eletricidade, de gás ou outros trabalhos que precisam de licença como prática; use tarefas de casa seguras.",
      "Ligue os alunos a programas locais de pré-aprendizagem e a empregadores que contratam pessoas com cadastro.",
      "Avalie o dossier de trabalho com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
