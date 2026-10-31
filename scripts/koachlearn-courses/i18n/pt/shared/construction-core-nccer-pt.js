"use strict";

// Koach Learn course (Portuguese translation of shared/construction-core-nccer.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US (NCCER, OSHA, apprenticeship.gov); units (inches, feet) are kept as in the English.

module.exports = {
  id: "construction-core-nccer-pt",
  lang: "pt",
  translationOf: "construction-core-nccer",
  category: "Workforce Development",
  name: "Competências Básicas de Construção (Preparação para o NCCER Core)",
  skills: "Reconhecer os perigos da obra e as suas medidas de controlo, Ler uma fita métrica e fazer a matemática da construção, Escolher e verificar ferramentas manuais e elétricas, Ler desenhos de construção simples, Movimentar materiais com segurança, Planear a formação e os testes do NCCER Core",
  outcome: "preparar-se para a formação NCCER Core: nomear os principais perigos da obra e como controlá-los, ler uma fita métrica até ao dezasseis avos de polegada, transformar um desenho simples numa lista de corte, verificar uma ferramenta antes de a usar, planear uma elevação de cargas segura e escrever um plano com datas para fazer a formação e os testes num centro acreditado pelo NCCER.",
  about: [
    "O NCCER Core é o programa de formação inicial da maioria das profissões da construção nos Estados Unidos, como carpintaria, eletricidade, canalização, climatização (HVAC) e soldadura. Muitas escolas secundárias, faculdades comunitárias, programas de reinserção, programas para antigos militares e pré-aprendizagens ensinam-no. Este curso é para quem quer começar com vantagem: jovens, pessoas que mudam de carreira, antigos militares e pessoas que voltam da prisão.",
    "Você vai praticar os conhecimentos básicos: segurança na obra, matemática da construção com a fita métrica, ferramentas manuais e elétricas, leitura de desenhos, movimentação de materiais e como ser um bom membro da equipa. No final, faz um verdadeiro pacote de preparação: uma lista de corte para praticar e um plano com datas para a formação e os testes.",
    "Este curso PREPARA você. Não dá uma credencial do NCCER. As credenciais do NCCER obtêm-se em locais de formação acreditados pelo NCCER, com testes escritos e tarefas práticas feitas diante de um avaliador qualificado. Ferramentas, escadas e levantamento de cargas aprendem-se pessoalmente com um instrutor, nunca sozinho com um vídeo.",
    "Cada lição dura cerca de cinco minutos. Leia-a, veja os diapositivos e depois faça a tarefa \"Experimente agora\" com papel, um lápis e, se tiver, uma fita métrica. Há uma pequena verificação depois de cada lição e de cada capítulo, e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Faça o seu pacote de preparação Core. Parte 1: a partir de um desenho simples de uma moldura de madeira com 36 polegadas de largura e 24 polegadas de altura, feita de tábuas com 3/4 de polegada de espessura, escreva uma lista de corte (peça, quantidade, comprimento até ao dezasseis avos de polegada), nomeie a serra que usaria e três verificações que faz antes de a usar, planeie como carregaria e empilharia as tábuas, e nomeie os perigos dos Quatro Principais (Focus Four) que podem existir numa obra real, com uma medida de controlo para cada um. Parte 2: escreva um plano de formação e testes: o centro ou programa acreditado pelo NCCER mais próximo (da página Find a Center), os módulos Core que vai estudar, uma data de início, um tempo de estudo semanal e uma data-alvo para os seus testes Core.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas à procura de emprego que querem começar na construção: jovens adultos que saem da escola secundária, pessoas que mudam de carreira, antigos militares e pessoas que voltam da prisão. Algumas vão entrar numa pré-aprendizagem, numa aprendizagem ou num programa de emprego que ensina o NCCER Core; outras querem mostrar a um empregador que estão prontas para aprender.",
    startingPoint: "Sabem ler instruções curtas e fazer contas com números inteiros. Muitos nunca leram uma fita métrica além das marcas das polegadas, não trabalham com frações desde a escola, nunca leram um desenho de construção nem usaram ferramentas elétricas seguindo uma regra de segurança.",
    gap: "Os empregadores da construção e os programas de aprendizagem esperam que os novos trabalhadores conheçam a segurança básica, as medições, as ferramentas e os desenhos desde o primeiro dia. Os alunos que chegam com esses conhecimentos aprendem mais depressa na formação prática, trabalham com mais segurança na obra e têm mais probabilidade de terminar o Core e entrar numa profissão.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano); cada palavra da profissão é explicada",
      "Aparelhos: um telefone ou um computador da biblioteca; a prática faz-se em papel, com uma fita métrica se o aluno tiver",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e as consultas",
      "Segurança: nada de praticar sozinho com ferramentas elétricas, escadas ou levantamento de cargas; isso aprende-se com um instrutor",
      "O curso só prepara; as credenciais do NCCER vêm de programas acreditados, e os requisitos podem mudar"
    ],
    prerequisites: "Contas com números inteiros e leitura de instruções curtas. Os cursos \"Matemática do Dia a Dia\" e \"Noções Básicas de Segurança no Trabalho (OSHA)\" ajudam, mas não são obrigatórios."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma cena de obra ou uma lista de tarefas", action: "identificar os perigos dos Quatro Principais e nomear uma medida de controlo para cada um", standard: "acertando pelo menos 4 em 5, incluindo a regra da proteção contra quedas a 6 pés e as regras das escadas" },
    { id: "O2", condition: "Com uma fita métrica ou um desenho de uma, e papel", action: "ler medidas até ao 1/16 de polegada mais próximo e somar, subtrair e converter pés e polegadas", standard: "com pelo menos 4 em 5 respostas totalmente certas" },
    { id: "O3", condition: "Perante uma tarefa de cortar, furar ou fixar", action: "escolher uma ferramenta manual ou elétrica adequada e listar as verificações de segurança a fazer antes de a usar", standard: "nomeando pelo menos três verificações certas, incluindo as proteções, o cabo e desligar a corrente ao trocar uma lâmina ou broca" },
    { id: "O4", condition: "Com um desenho de construção simples", action: "encontrar a legenda do desenho, a escala, as vistas e as cotas e transformá-las numa lista de corte", standard: "com todos os comprimentos certos até ao 1/16 de polegada mais próximo" },
    { id: "O5", condition: "Perante uma carga de materiais para mover ou guardar", action: "planear como levantar, carregar e empilhar com segurança, incluindo quando pedir ajuda ou equipamento", standard: "cobrindo a verificação do peso, o percurso, a postura ao levantar e o empilhamento" },
    { id: "O6", condition: "Com o site do NCCER e o seu próprio calendário", action: "escrever um plano de formação e testes para o NCCER Core com um centro, os módulos e as datas", standard: "com um centro ou programa real, todos os módulos Core listados e uma data-alvo para o teste" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Segurança, matemática e medição",
      lessons: [
        {
          title: "O que é o NCCER Core e como se obtêm as credenciais",
          objectives: ["O6"],
          minutes: 5,
          goal: "Explicar o que o NCCER Core abrange e como um aluno obtém uma credencial do NCCER.",
          text: [
            "O NCCER é o National Center for Construction Education and Research (Centro Nacional de Educação e Investigação em Construção), nos Estados Unidos. Escreve formações para as profissões da construção e guarda o registo das credenciais que as pessoas obtêm. O Core é o programa inicial em que a maioria das profissões se apoia.",
            "Na 6.ª edição do Core, os módulos são: Basic Safety (Construction Site Safety Orientation), Introduction to Construction Math, Introduction to Hand Tools, Introduction to Power Tools, Introduction to Construction Drawings, Basic Communication Skills, Basic Employability Skills e Introduction to Materials Handling. Build Your Future in Construction e Introduction to Basic Rigging são opcionais. Consulte a página do Core, porque as edições mudam.",
            "As credenciais do NCCER obtêm-se em locais de formação acreditados. Você faz testes escritos sobre o que sabe e executa tarefas com segurança enquanto um avaliador observa. Os seus resultados ficam registados com o seu próprio número NCCER, para que os empregadores os possam confirmar na internet.",
            "O Core ensina-se muitas vezes em escolas secundárias, faculdades comunitárias, programas de emprego e de reinserção e pré-aprendizagens. Use a página Find a Center (Encontrar um Centro) do NCCER para procurar um perto de você. Este curso prepara você; não lhe dá a credencial."
          ],
          steps: ["Abra nccer.org e encontre a página do Core no catálogo de profissões.", "Anote os módulos Core da edição atual.", "Abra a página Find a Center e procure perto de você.", "Anote dois lugares perto de você e como contactá-los."],
          words: [["NCCER", "National Center for Construction Education and Research: a organização que escreve esta formação de construção e regista as credenciais."], ["Core", "o primeiro programa do NCCER; a maioria das profissões da construção começa por ele."], ["Módulo", "uma unidade de um programa, como um capítulo de um livro, com o seu próprio teste."], ["Credencial", "prova de que passou na formação e nos testes, que um empregador pode confirmar."], ["Acreditado", "aprovado pelo NCCER para formar e testar alunos para as credenciais do NCCER."], ["Pré-aprendizagem", "um programa curto que prepara você para entrar numa aprendizagem."]],
          slides: [
            { title: "NCCER Core", bullets: ["O programa inicial da maioria das profissões da construção", "Carpintaria, eletricidade, canalização, HVAC e soldadura partem dele"] },
            { title: "Módulos da 6.ª edição do Core", bullets: ["Segurança, matemática, ferramentas manuais, ferramentas elétricas, desenhos", "Comunicação, empregabilidade, movimentação de materiais", "Opcionais: Build Your Future, Basic Rigging"] },
            { title: "Como se obtém", bullets: ["Formar-se num local acreditado pelo NCCER", "Passar nos testes escritos", "Executar tarefas com segurança diante de um avaliador", "Resultados registados com o seu número NCCER"] },
            { title: "Este curso", bullets: ["Prepara você", "Não dá a credencial", "Use Find a Center para encontrar um programa"] }
          ],
          sources: [
            { name: "NCCER: programa Core (catálogo de profissões)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "NCCER: credenciais reconhecidas pela indústria", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "NCCER: Find a Center (Encontrar um Centro)", url: "https://www.nccer.org/find-a-center/" },
            { name: "Apprenticeship.gov: o que é uma pré-aprendizagem?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" }
          ],
          tryIt: "Abra a página do NCCER Core e a página Find a Center. Num papel, escreva os módulos Core e os nomes de dois lugares perto de você que ensinam ou fazem testes do NCCER. Se não conseguir entrar na internet, escreva os módulos a partir desta lição e pergunte ao seu American Job Center (centro de emprego público dos EUA) local que programas ensinam o NCCER Core.",
          youCanNow: "dizer o que o NCCER Core abrange, como se obtêm as suas credenciais e onde procurar um programa perto de você.",
          quickCheck: [
            { objective: "O6", q: "Onde se obtêm as credenciais do NCCER?", options: ["Em qualquer curso de vídeo na internet", "Num local de formação acreditado pelo NCCER", "Comprando um certificado na internet", "No departamento de trânsito (DMV) do seu estado"], answer: 1, why: "As credenciais do NCCER vêm de locais acreditados, com testes escritos e tarefas práticas." },
            { objective: "O6", q: "O que faz este curso da Koach Learn?", options: ["Dá a sua credencial NCCER Core", "Substitui os testes práticos", "Prepara você para a formação e os testes do Core", "Torna você um empreiteiro com licença"], answer: 2, why: "Prepara você; a credencial vem de um programa acreditado." }
          ]
        },
        {
          title: "Segurança na obra: os Quatro Principais e o seu controlo",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identificar os perigos dos Quatro Principais numa obra e nomear uma medida de controlo para cada um.",
          text: [
            "A OSHA (a agência de segurança no trabalho dos EUA) chama Focus Four, ou Quatro Principais, às quatro maiores causas de morte na construção: quedas, ser atingido por objetos, ficar preso ou entalado, e eletrocussão. A Segurança Básica do Core começa aqui.",
            "Quedas: a OSHA exige proteção contra quedas a partir de seis pés de altura na construção, como guarda-corpos, redes de segurança ou um sistema pessoal de travamento de quedas. Tape ou proteja os buracos. Numa escada portátil usada para chegar a um nível superior, as calhas laterais têm de passar pelo menos 3 pés acima do patamar, e o pé da escada fica cerca de um pé afastado por cada quatro pés de altura (a regra de 4 para 1).",
            "Ser atingido: use capacete e colete de alta visibilidade, não fique debaixo de cargas e nunca fique atrás de um veículo em marcha-atrás. Ficar preso ou entalado: não entre em valas sem proteção e afaste-se de peças em movimento e de máquinas que giram. Eletrocussão: olhe para cima à procura de linhas elétricas, use as ferramentas em tomadas com GFCI e nunca trabalhe em circuitos com corrente, a não ser que tenha formação e autorização.",
            "O EPI é a última linha de defesa. Óculos de segurança, capacete, luvas, proteção auditiva e botas protegem você, mas primeiro é preciso eliminar ou isolar o perigo. Se algo parecer perigoso, pare e avise o seu supervisor."
          ],
          steps: ["Observe a tarefa e a área à volta.", "Pergunte: alguém pode cair, ser atingido, ficar preso ou tocar em eletricidade?", "Nomeie o controlo: proteção, cobertura, distância, equipamento ou cortar a corrente.", "Ponha o EPI certo.", "Se não conseguir controlar o perigo, pare e avise o seu supervisor."],
          words: [["Quatro Principais (Focus Four)", "o nome que a OSHA dá às quatro principais causas de morte na construção: quedas, ser atingido, ficar preso ou entalado, e eletrocussão."], ["Proteção contra quedas", "guarda-corpos, redes de segurança ou um sistema de arnês que param ou evitam uma queda."], ["GFCI", "interruptor de falha à terra: um aparelho que corta a corrente muito depressa quando há uma fuga, para evitar choques."], ["EPI", "equipamento de proteção individual: capacete, óculos de segurança, luvas, botas, proteção auditiva, colete."], ["Controlo", "uma forma de eliminar ou reduzir um perigo."]],
          slides: [
            { title: "Os Quatro Principais", bullets: ["Quedas", "Ser atingido por objetos", "Ficar preso ou entalado", "Eletrocussão"] },
            { title: "Quedas", bullets: ["Proteção contra quedas a partir de 6 pés na construção", "Tape ou proteja os buracos", "Calhas da escada 3 pés acima do patamar; ângulo de 4 para 1"] },
            { title: "Ser atingido, ficar preso, eletrocussão", bullets: ["Capacete, colete, não fique debaixo de cargas", "Nada de valas sem proteção; longe de peças em movimento", "Olhe para as linhas elétricas; use GFCI; sem formação, nada de corrente ligada"] },
            { title: "O EPI é a última linha", bullets: ["Primeiro elimine ou isole o perigo", "Depois use o EPI certo", "Perigoso? Pare e avise o supervisor"] }
          ],
          sources: [
            { name: "OSHA: formação Focus Four para a construção", url: "https://www.osha.gov/training/outreach/construction/focus-four" },
            { name: "OSHA: proteção contra quedas", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.1053, Escadas", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" }
          ],
          tryIt: "Desenhe uma obra simples num papel: a estrutura de uma casa de dois andares, uma escada, uma vala, uma linha elétrica e um camião. Marque um perigo dos Quatro Principais para cada um e escreva o controlo ao lado. Depois calcule a que distância deve ficar o pé de uma escada que chega a 16 pés de altura (resposta: cerca de 4 pés).",
          youCanNow: "nomear os perigos dos Quatro Principais, dar um controlo para cada um e usar a regra dos 6 pés e as regras das escadas.",
          quickCheck: [
            { objective: "O1", q: "Um trabalhador está na beira de um telhado a 10 pés de altura, sem guarda-corpo. O que se aplica?", options: ["Nada, está abaixo de 20 pés", "Só é preciso capacete", "As luvas resolvem o problema", "É preciso proteção contra quedas a partir de 6 pés"], answer: 3, why: "A OSHA exige proteção contra quedas a partir de seis pés na construção." },
            { objective: "O1", q: "Uma escada chega a 12 pés de altura numa parede. A que distância, mais ou menos, deve ficar o pé?", options: ["3 pés", "6 pés", "1 pé", "12 pés"], answer: 0, why: "A regra de 4 para 1: 1 pé de afastamento por cada 4 pés de altura, então 12 / 4 = 3 pés." }
          ]
        },
        {
          title: "Matemática da construção: a fita métrica e as frações",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ler uma fita métrica até ao 1/16 de polegada mais próximo e somar e converter pés e polegadas.",
          text: [
            "Nos EUA, a maioria das fitas métricas da construção divide cada polegada em dezasseis avos. A linha mais comprida no meio de uma polegada é 1/2. As linhas um pouco mais curtas são 1/4 e 3/4, depois vêm os oitavos e as linhas mais curtas são os dezasseis avos. Conte as linhas pequenas depois da última polegada inteira: 6 linhas pequenas depois de 5 polegadas dá 5 6/16, que se simplifica para 5 3/8.",
            "Para simplificar, divida o número de cima e o de baixo por 2 até o de cima ser ímpar: 12/16 = 6/8 = 3/4. Para somar frações, dê-lhes o mesmo número de baixo: 2 3/4 + 1 5/8 = 2 6/8 + 1 5/8 = 3 11/8 = 4 3/8.",
            "Um pé tem 12 polegadas. Para passar pés a polegadas, multiplique por 12 e some as polegadas que sobram: 7 pés e 4 polegadas = 84 + 4 = 88 polegadas. Para passar polegadas a pés, divida por 12; o resto são polegadas: 100 polegadas = 8 pés e 4 polegadas.",
            "Verifique o esquadro com a regra 3-4-5: meça 3 pés num lado e 4 pés no outro; se a diagonal entre essas marcas medir 5 pés, o canto está em esquadro. Meça duas vezes, corte uma vez."
          ],
          steps: ["Encontre a última polegada inteira antes do fim do que está a medir.", "Conte as linhas de dezasseis avos depois dela.", "Escreva o número em dezasseis avos e depois simplifique.", "Para pés e polegadas, multiplique os pés por 12 e some as polegadas.", "Confirme a resposta medindo outra vez."],
          words: [["Dezasseis avos", "1/16 de polegada, a marca mais pequena na maioria das fitas métricas da construção."], ["Simplificar", "escrever uma fração com números mais pequenos que valem o mesmo, como 8/16 = 1/2."], ["Esquadro", "um canto com exatamente 90 graus."], ["Regra 3-4-5", "uma forma de confirmar que um canto está em esquadro: 3 e 4 nos lados dão 5 na diagonal."]],
          slides: [
            { title: "Ler a fita", bullets: ["Cada polegada divide-se em 16", "Linha mais comprida no meio: 1/2", "Depois 1/4 e 3/4, depois os oitavos, depois os dezasseis avos"] },
            { title: "Frações no trabalho", bullets: ["Simplificar: 12/16 = 6/8 = 3/4", "Mesmo número de baixo para somar: 2 3/4 + 1 5/8 = 4 3/8"] },
            { title: "Pés e polegadas", bullets: ["1 pé = 12 polegadas", "7 pés 4 pol = 88 pol", "100 pol = 8 pés 4 pol"] },
            { title: "Verificar o esquadro", bullets: ["3 pés para um lado, 4 pés para o outro", "Diagonal de 5 pés = em esquadro", "Meça duas vezes, corte uma vez"] }
          ],
          tryIt: "Num papel, resolva: (1) 9 pés e 7 polegadas em polegadas; (2) 3 7/16 + 2 5/8; (3) 50 polegadas em pés e polegadas; (4) 10/16 simplificado. Respostas: 115 polegadas; 6 1/16; 4 pés e 2 polegadas; 5/8. Se tiver uma fita métrica, meça uma mesa, uma porta e um livro até ao 1/16 de polegada mais próximo.",
          youCanNow: "ler uma fita métrica até 1/16 de polegada, simplificar e somar frações, converter pés e polegadas e verificar se um canto está em esquadro.",
          quickCheck: [
            { objective: "O2", q: "Quanto são 6 pés e 3 polegadas em polegadas?", options: ["63 polegadas", "75 polegadas", "72 polegadas", "93 polegadas"], answer: 1, why: "6 x 12 = 72, mais 3 = 75 polegadas." },
            { objective: "O2", q: "Quanto é 2 1/2 + 1 3/8?", options: ["3 4/10", "3 1/2", "3 7/8", "4 1/8"], answer: 2, why: "2 4/8 + 1 3/8 = 3 7/8." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Segurança, matemática e medição",
        questions: [
          { objective: "O6", q: "Qual destes é um módulo obrigatório do NCCER Core, 6.ª edição?", options: ["Introduction to Construction Math", "Advanced Pipe Welding", "Commercial Driving", "Real Estate Law"], answer: 0, why: "Introduction to Construction Math (Introdução à Matemática da Construção) é um dos módulos Core." },
          { objective: "O1", q: "Qual destes NÃO é um dos perigos dos Quatro Principais da OSHA?", options: ["Quedas", "Eletrocussão", "Erros na papelada", "Ser atingido por objetos"], answer: 2, why: "Os Quatro Principais são quedas, ser atingido, ficar preso ou entalado, e eletrocussão." },
          { objective: "O1", q: "Você liga uma serra na obra. O que protege você de um choque se houver fuga de corrente?", options: ["Um cabo mais comprido", "Luvas molhadas", "Pôr fita na ficha", "Um GFCI"], answer: 3, why: "Um GFCI corta a corrente muito depressa quando há uma fuga." },
          { objective: "O2", q: "Você conta 10 marcas de dezasseis avos depois de 4 polegadas. Qual é a medida?", options: ["4 1/10", "4 5/8", "4 3/4", "4 1/2"], answer: 1, why: "10/16 simplifica-se para 5/8, então 4 5/8 polegadas." },
          { objective: "O2", q: "Você mede 3 pés e 4 pés em dois lados de um canto. A diagonal mede 5 pés e 2 polegadas. O que significa?", options: ["O canto está em esquadro", "A fita está avariada", "O canto ainda não está em esquadro", "Tem de usar 6 pés"], answer: 2, why: "Um canto em esquadro dá exatamente 5 pés na diagonal." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ferramentas, desenhos e o seu plano",
      lessons: [
        {
          title: "Ferramentas manuais e elétricas: escolher, verificar e usar com segurança",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escolher uma ferramenta adequada para uma tarefa e listar as verificações de segurança antes de a usar.",
          text: [
            "Escolha a ferramenta feita para o trabalho. Um martelo de orelhas prega e arranca pregos; uma fita métrica, um esquadro rápido e um nível marcam e verificam; um serrote ou uma serra circular cortam tábuas; um berbequim aperta parafusos e faz furos; um x-ato corta placas de gesso. Usar a ferramenta errada, como uma chave de fendas como formão, causa ferimentos e estragos.",
            "Antes de usar qualquer ferramenta, inspecione-a. Ferramentas manuais: nada de cabeças soltas, cabos rachados ou pontas de impacto achatadas. Ferramentas elétricas: proteções no lugar e a funcionar, cabo e ficha sem cortes nem pino de terra em falta, interruptor a funcionar, lâmina ou broca afiada e do tipo certo.",
            "Quando trocar uma lâmina ou broca, desligue a ferramenta da tomada ou tire a bateria. Nunca carregue uma ferramenta pelo cabo nem a desligue puxando pelo cabo. Mantenha os cabos fora das passagens. Use sempre óculos de segurança, e proteção auditiva com ferramentas barulhentas.",
            "Usar ferramentas é uma competência prática. Aprenda e pratique cada ferramenta elétrica com um instrutor antes de a usar sozinho, e siga o manual do fabricante e as regras da obra."
          ],
          steps: ["Escolha a ferramenta feita para a tarefa.", "Inspecione-a: cabo de pegar, cabeça, proteção, cabo elétrico, ficha, interruptor, lâmina ou broca.", "Ponha os óculos de segurança e o resto do EPI.", "Desligue da tomada ou tire a bateria antes de trocar uma lâmina ou broca.", "Marque e comunique uma ferramenta danificada; não a use."],
          words: [["Proteção", "uma cobertura numa ferramenta elétrica que mantém as mãos longe da lâmina ou das peças em movimento."], ["Pino de terra", "o terceiro pino redondo de uma ficha, que ajuda a evitar choques."], ["Esquadro rápido", "uma ferramenta em forma de triângulo para marcar linhas retas e em ângulo."], ["Ponta achatada", "quando a ponta de impacto de um formão ou punção se espalha de tanto levar pancadas; podem saltar pedaços."]],
          slides: [
            { title: "Ferramenta certa, trabalho certo", bullets: ["Martelo: pregar e arrancar pregos", "Serra: cortar; berbequim: furos e parafusos", "Esquadro e nível: marcar e verificar"] },
            { title: "Inspecione antes de usar", bullets: ["Manuais: sem cabeças soltas nem cabos rachados", "Elétricas: proteção, cabo, ficha, interruptor, lâmina"] },
            { title: "Hábitos seguros", bullets: ["Desligue antes de trocar uma lâmina ou broca", "Nunca carregue pelo cabo", "Óculos de segurança sempre"] },
            { title: "Prática com um instrutor", bullets: ["Pratique cada ferramenta elétrica primeiro com um formador", "Siga o manual e as regras da obra", "Marque e comunique ferramentas danificadas"] }
          ],
          sources: [
            { name: "OSHA: ferramentas manuais e elétricas", url: "https://www.osha.gov/hand-power-tools" }
          ],
          tryIt: "Para cada tarefa, escreva a ferramenta e três verificações que faria: (1) cortar um 2x4 à medida; (2) aparafusar uma tábua de deck; (3) arrancar um prego torto. Exemplo para (1): serra circular; a proteção fecha sozinha, cabo e ficha sem danos, lâmina afiada e bem apertada.",
          youCanNow: "escolher uma ferramenta para uma tarefa, inspecioná-la e seguir os hábitos seguros para ferramentas manuais e elétricas.",
          quickCheck: [
            { objective: "O3", q: "Precisa de trocar a lâmina de uma serra circular. O que faz primeiro?", options: ["Desliga a serra da tomada", "Mantém o gatilho carregado", "Tira a proteção de vez", "Pede a um colega para a segurar a trabalhar"], answer: 0, why: "Desligar da tomada, ou tirar a bateria, impede que a serra arranque enquanto as suas mãos estão na lâmina." },
            { objective: "O3", q: "A ficha de uma extensão não tem o pino de terra. O que faz?", options: ["Usa-a se for rápido", "Tapa o buraco com fita", "Tira-a de uso e comunica", "Corta a ficha"], answer: 2, why: "Uma ficha danificada é um perigo de choque; marque-a como fora de uso e comunique." }
          ]
        },
        {
          title: "Ler desenhos de construção e fazer uma lista de corte",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Encontrar a legenda, a escala, as vistas e as cotas num desenho e escrever a partir dele uma lista de corte.",
          text: [
            "Os desenhos de construção, também chamados plantas ou projetos, mostram o que construir. Comece pela legenda do desenho (o carimbo): o nome do projeto, o número da folha, a data, quem desenhou e a escala. A lista de símbolos explica os símbolos e as abreviaturas.",
            "Os desenhos mostram vistas diferentes. Uma planta olha de cima para baixo. Um alçado olha de frente para um dos lados. Um corte é uma fatia do edifício que mostra o interior. Um pormenor é uma vista de perto de uma parte.",
            "A escala diz como o desenho se relaciona com o tamanho real. Com 1/4 de polegada = 1 pé, uma linha com 2 1/2 polegadas mede 10 pés. Use sempre as cotas escritas; se faltar uma cota ou ela não bater certo, pergunte ao seu supervisor em vez de medir o papel.",
            "Uma lista de corte transforma um desenho em peças para cortar: nome, quantidade, comprimento. Para uma moldura com 36 polegadas de largura e 24 de altura, feita de tábuas de 3/4 de polegada, com as peças laterais encaixadas entre a de cima e a de baixo: a de cima e a de baixo são 2 de 36 polegadas; as laterais são 2 de 24 - 3/4 - 3/4 = 22 1/2 polegadas."
          ],
          steps: ["Leia a legenda do desenho: projeto, folha, data e escala.", "Leia a lista de símbolos.", "Encontre a vista de que precisa: planta, alçado, corte ou pormenor.", "Escreva as cotas de cada parte.", "Subtraia nas partes que se sobrepõem e escreva a lista de corte: peça, quantidade, comprimento."],
          words: [["Legenda do desenho", "o quadro num desenho com o nome do projeto, o número da folha, a data e a escala (também chamado carimbo)."], ["Escala", "como o tamanho no desenho se relaciona com o tamanho real, como 1/4 de polegada = 1 pé."], ["Planta", "um desenho visto de cima para baixo."], ["Alçado", "um desenho que olha de frente para um dos lados."], ["Lista de corte", "uma lista de peças para cortar, com a quantidade e o comprimento."]],
          slides: [
            { title: "Comece pela legenda do desenho", bullets: ["Projeto, número da folha, data", "A escala", "Depois a lista de símbolos"] },
            { title: "Quatro vistas", bullets: ["Planta: de cima", "Alçado: um lado", "Corte: uma fatia; pormenor: uma vista de perto"] },
            { title: "Escala e cotas", bullets: ["1/4 de polegada = 1 pé: 2 1/2 polegadas no papel = 10 pés", "Use as cotas escritas; não meça o papel", "Falta ou está errada? Pergunte ao supervisor"] },
            { title: "Fazer uma lista de corte", bullets: ["Peça, quantidade, comprimento", "Subtraia onde as partes se sobrepõem", "Moldura 36 x 24: 2 de 36 pol, 2 de 22 1/2 pol"] }
          ],
          tryIt: "Desenhe uma caixa num papel e marque 48 polegadas de largura e 30 de altura, feita de tábuas de 3/4 de polegada, com as laterais encaixadas entre a de cima e a de baixo. Escreva a lista de corte. Resposta: 2 de 48 polegadas e 2 de 28 1/2 polegadas. Depois: com 1/4 de polegada = 1 pé, quanto mede uma parede desenhada com 3 3/4 polegadas? (Resposta: 15 pés.)",
          youCanNow: "ler a legenda, a escala e as vistas de um desenho simples e transformar as suas cotas numa lista de corte.",
          quickCheck: [
            { objective: "O4", q: "Onde encontra a escala e o número da folha num desenho?", options: ["No corte", "Na legenda do desenho", "No verso da folha", "Só na lista de símbolos"], answer: 1, why: "A legenda do desenho tem o nome do projeto, o número da folha, a data e a escala." },
            { objective: "O4", q: "A escala é 1/4 de polegada = 1 pé. Uma parede está desenhada com 2 polegadas. Quanto mede?", options: ["2 pés", "4 pés", "6 pés", "8 pés"], answer: 3, why: "2 polegadas são oito quartos de polegada, então 8 pés." }
          ]
        },
        {
          title: "Movimentação de materiais, trabalho em equipa e o seu plano Core",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Planear como levantar e carregar materiais com segurança e escrever um plano de formação e testes com datas para o NCCER Core.",
          text: [
            "Antes de levantar, avalie a carga: o peso, o tamanho, se tem arestas cortantes. Verifique o percurso, à procura de obstáculos e portas. Se for pesada ou difícil de pegar, chame um colega ou use um carrinho, um porta-paletes ou outro equipamento para o qual tenha formação. Levante com as pernas: pés afastados, joelhos dobrados, carga junto ao corpo, sem torcer. Vire-se com os pés.",
            "Empilhe os materiais em chão plano e firme, com as coisas pesadas em baixo, e use calços ou empilhamento cruzado para as pilhas não deslizarem nem rolarem. Mantenha as passagens e as saídas livres. Carregue as tábuas compridas com a ponta da frente levantada e vigie a ponta de trás quando virar.",
            "Os bons membros da equipa chegam a horas, prontos e com o seu EPI. Ouvem, repetem as instruções (\"Cortar quatro de 22 e meio, entendido\"), perguntam quando têm dúvidas e comunicam os perigos logo. O Core ensina isto em Basic Communication Skills e Basic Employability Skills.",
            "Agora faça o seu plano. Escolha um centro ou programa, liste os módulos Core, escolha uma data de início e um tempo de estudo semanal, e marque uma data-alvo para os testes. Ponha as datas no seu calendário e conte a alguém que vá acompanhar você."
          ],
          steps: ["Avalie a carga e o percurso.", "Peça ajuda ou equipamento para cargas pesadas ou difíceis.", "Levante com as pernas, carga junto ao corpo, sem torcer.", "Empilhe em chão firme, pesado em baixo, passagens livres.", "Escreva o seu plano: centro, módulos, data de início, tempo semanal, data do teste."],
          words: [["Calços", "pedaços de madeira colocados para impedir que uma pilha role ou deslize."], ["Empilhamento cruzado", "pôr cada camada atravessada sobre a de baixo, para a pilha ficar firme."], ["Repetir a instrução", "dizer a instrução de volta a quem a deu, para os dois saberem que foi bem ouvida."]],
          slides: [
            { title: "Antes de levantar", bullets: ["Avalie o peso, o tamanho e as arestas", "Verifique o percurso", "Pesada ou difícil? Peça ajuda ou equipamento"] },
            { title: "Levantar e empilhar", bullets: ["Joelhos dobrados, carga junto ao corpo, sem torcer", "Pesado em baixo, com calços ou empilhamento cruzado", "Passagens e saídas livres"] },
            { title: "Seja um bom membro da equipa", bullets: ["A horas, pronto, com EPI", "Repita as instruções", "Pergunte quando tiver dúvidas; comunique perigos"] },
            { title: "O seu plano Core", bullets: ["Centro ou programa perto de você", "Módulos Core e tempo de estudo semanal", "Data de início e data-alvo do teste"] }
          ],
          sources: [
            { name: "NCCER: Find a Center (Encontrar um Centro)", url: "https://www.nccer.org/find-a-center/" },
            { name: "NCCER: programa Core (catálogo de profissões)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "Apprenticeship.gov: pesquisa de aprendizagens (Apprenticeship Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Escreva um plano para levar dez tábuas 2x6 de 12 pés de um camião até uma área de trabalho a 50 pés de distância: a verificação do peso, o percurso, quem ajuda, como carrega e como empilha. Depois comece o seu plano Core: escreva o centro que encontrou na Lição 1, os módulos Core, uma data de início, o seu tempo de estudo semanal e uma data-alvo para o teste.",
          youCanNow: "planear como levantar, carregar e empilhar com segurança, agir como um bom membro da equipa e escrever um plano com datas para a formação e os testes do NCCER Core.",
          quickCheck: [
            { objective: "O5", q: "Uma caixa é mais pesada do que consegue levantar à vontade. O que faz?", options: ["Levanta-a depressa para acabar logo", "Torce o corpo para a balançar para cima", "Chama um colega ou usa um carrinho", "Arrasta-a por um canto"], answer: 2, why: "Cargas pesadas ou difíceis precisam de ajuda ou de equipamento." },
            { objective: "O6", q: "Qual plano de formação está completo?", options: ["\"Estudar algum tempo.\"", "\"Encontrar um centro mais tarde.\"", "\"Fazer o teste um dia.\"", "\"Centro: programa de emprego do condado; módulos Core; início a 3 de nov.; ter. e qui. 18h-20h; teste-alvo a 15 de fev.\""], answer: 3, why: "Nomeia um centro, os módulos, uma data de início, o tempo semanal e uma data-alvo para o teste." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ferramentas, desenhos e o seu plano",
        questions: [
          { objective: "O3", q: "Antes de usar uma serra elétrica, que verificação é mais importante?", options: ["A proteção funciona e o cabo não está danificado", "A serra tem uma cor bonita", "O cabo é comprido o suficiente para chegar ao seu carro", "A lâmina está romba para cortar devagar"], answer: 0, why: "Uma proteção a funcionar e um cabo seguro evitam cortes e choques." },
          { objective: "O4", q: "Que vista olha de frente para um dos lados de um edifício?", options: ["Planta", "Alçado", "Pormenor", "Legenda do desenho"], answer: 1, why: "Um alçado mostra um dos lados visto de frente." },
          { objective: "O4", q: "Uma moldura tem 40 polegadas de altura. As laterais encaixam entre as tábuas de cima e de baixo, com 3/4 de polegada de espessura. Quanto medem as laterais?", options: ["40 polegadas", "39 1/4 polegadas", "38 1/2 polegadas", "41 1/2 polegadas"], answer: 2, why: "40 - 3/4 - 3/4 = 38 1/2 polegadas." },
          { objective: "O5", q: "Como deve empilhar a madeira na obra?", options: ["Em lama mole", "À frente da porta de saída", "Com as coisas leves em baixo", "Em chão firme, com calços ou empilhamento cruzado, passagens livres"], answer: 3, why: "Chão firme, calços ou empilhamento cruzado e passagens livres mantêm as pilhas estáveis e as pessoas seguras." },
          { objective: "O5", q: "O seu chefe de equipa diz \"Corta quatro de 22 e meio.\" Qual é uma boa resposta?", options: ["\"Quatro de 22 e meio, entendido.\"", "Nada; começa logo a cortar", "\"Tanto faz.\"", "\"Eu adivinho o resto.\""], answer: 0, why: "Repetir a instrução mostra que foi bem ouvida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Competências Básicas de Construção (Preparação para o NCCER Core)",
    questions: [
      { objective: "O6", q: "O que quer dizer NCCER?", options: ["National Council for Contractor Employment Rules", "National Center for Construction Education and Research", "New Construction Codes and Electrical Regulations", "National Committee on Carpentry and Electrical Repair"], answer: 1, why: "NCCER é o National Center for Construction Education and Research (Centro Nacional de Educação e Investigação em Construção)." },
      { objective: "O6", q: "Como se obtém uma credencial do NCCER?", options: ["Vendo vídeos e imprimindo um certificado", "Pagando uma taxa na internet, sem teste", "Passando em testes escritos e executando tarefas diante de um avaliador num local acreditado", "Trabalhando um dia em qualquer obra"], answer: 2, why: "As credenciais exigem testes escritos e tarefas práticas num local acreditado." },
      { objective: "O6", q: "Que página do NCCER ajuda você a encontrar um lugar para a formação ou os testes?", options: ["Find a Center", "A lista de símbolos", "Uma ficha de dados de segurança", "O seu recibo de vencimento"], answer: 0, why: "A página Find a Center do NCCER lista os locais de formação e de testes." },
      { objective: "O1", q: "Que lista corresponde aos Quatro Principais da OSHA?", options: ["Ruído, calor, pó e frio", "Quedas, ser atingido, ficar preso ou entalado, eletrocussão", "Fogo, cheia, vento e neve", "Papelada, horas extra, pausas e salário"], answer: 1, why: "Estas quatro causam a maioria das mortes na construção." },
      { objective: "O1", q: "A partir de que altura a OSHA exige proteção contra quedas na construção?", options: ["2 pés", "20 pés", "10 pés", "6 pés"], answer: 3, why: "A OSHA exige proteção contra quedas a partir de seis pés na construção." },
      { objective: "O1", q: "Uma escada chega a um patamar superior. Quanto devem as calhas laterais passar acima do patamar?", options: ["Pelo menos 3 pés", "Exatamente ao nível dele", "6 polegadas", "Pelo menos 10 pés"], answer: 0, why: "A regra da OSHA para escadas: calhas laterais pelo menos 3 pés acima do patamar superior." },
      { objective: "O1", q: "Vê uma linha elétrica por cima do sítio onde a equipa quer levantar uma escada. O que faz?", options: ["Levanta-a depressa", "Usa uma escada de metal", "Para e avisa o supervisor antes de o trabalho continuar", "Toca na linha para testar"], answer: 2, why: "A eletrocussão é um dos Quatro Principais; pare e comunique." },
      { objective: "O2", q: "Quantas polegadas são 8 pés e 5 polegadas?", options: ["85", "96", "105", "101"], answer: 3, why: "8 x 12 = 96, mais 5 = 101 polegadas." },
      { objective: "O2", q: "Quanto é 14/16 simplificado?", options: ["7/8", "3/4", "1/2", "14/8"], answer: 0, why: "Divida o de cima e o de baixo por 2: 7/8." },
      { objective: "O2", q: "Quanto é 1 3/4 + 2 3/8?", options: ["3 6/12", "4 1/8", "3 3/8", "4 3/4"], answer: 1, why: "1 6/8 + 2 3/8 = 3 9/8 = 4 1/8." },
      { objective: "O3", q: "Que ferramenta é feita para pregar e arrancar pregos?", options: ["Esquadro rápido", "X-ato", "Martelo de orelhas", "Nível"], answer: 2, why: "Um martelo de orelhas prega e arranca pregos." },
      { objective: "O3", q: "A cabeça de um martelo está solta no cabo. O que faz?", options: ["Usa-o com cuidado", "Marca-o como fora de uso e comunica", "Enrola-o em fita", "Empresta-o a um colega"], answer: 1, why: "Uma cabeça solta pode saltar; tire a ferramenta de uso e comunique." },
      { objective: "O3", q: "Qual é um hábito seguro com ferramentas elétricas com cabo?", options: ["Carregar a ferramenta pelo cabo", "Tirar a proteção para ver melhor", "Puxar a ficha pelo cabo", "Manter os cabos fora das passagens e usar óculos de segurança"], answer: 3, why: "Passagens livres evitam tropeções, e os óculos de segurança protegem os olhos." },
      { objective: "O4", q: "Que vista do desenho olha de cima para baixo?", options: ["Planta", "Alçado", "Corte", "Pormenor"], answer: 0, why: "Uma planta olha de cima para baixo." },
      { objective: "O4", q: "Uma cota escrita num desenho não bate com o que você mede no papel. O que faz?", options: ["Usa a sua medida no papel", "Usa a cota escrita, ou pergunta ao supervisor se parecer errada", "Faz a média das duas", "Salta essa parte"], answer: 1, why: "As cotas escritas mandam; pergunte quando algo não bate certo." },
      { objective: "O4", q: "Com 1/4 de polegada = 1 pé, quanto mede uma parede desenhada com 5 polegadas?", options: ["5 pés", "10 pés", "20 pés", "25 pés"], answer: 2, why: "5 polegadas são vinte quartos de polegada, então 20 pés." },
      { objective: "O5", q: "Qual é a forma certa de levantar?", options: ["Dobrar a cintura com as pernas esticadas", "Torcer o corpo para pousar a carga", "Segurar a carga longe do corpo", "Dobrar os joelhos, manter a carga junto ao corpo, virar com os pés"], answer: 3, why: "Usar as pernas e manter a carga junto ao corpo protege as costas." },
      { objective: "O5", q: "Carrega uma tábua comprida por uma porta. O que vigia?", options: ["A ponta de trás da tábua quando vira", "Só o telefone", "Nada; as tábuas são leves", "As luzes do teto"], answer: 0, why: "A ponta de trás balança quando vira e pode bater em pessoas ou coisas." },
      { objective: "O5", q: "Antes de mover uma carga, o que avalia primeiro?", options: ["Quem está a ver", "O peso, o tamanho e as arestas da carga, e o percurso", "A cor da carga", "A que velocidade consegue correr com ela"], answer: 1, why: "Conhecer a carga e o percurso diz se precisa de ajuda ou de equipamento." },
      { objective: "O6", q: "O que deve estar num plano de formação e testes?", options: ["Só a palavra \"um dia\"", "O PIN do seu banco", "Um centro, os módulos, uma data de início, o tempo de estudo semanal e uma data-alvo para o teste", "Uma lista de ferramentas para comprar antes de começar"], answer: 2, why: "Um plano com um lugar, módulos e datas é um plano que consegue seguir." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 4, 5, 7, 9, 11, 13, 15, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Lista de corte", objective: "O4", notYet: "Faltam comprimentos ou não se contam as tábuas de 3/4 de polegada.", meets: "Duas peças de 36 polegadas e duas de 22 1/2 polegadas, com os nomes das peças e as quantidades.", exceeds: "Também tem em conta a largura do corte da serra e marca a face a partir da qual se mede." },
      { name: "Medição e matemática", objective: "O2", notYet: "As frações estão erradas ou não estão simplificadas.", meets: "Todos os comprimentos estão certos até ao 1/16 de polegada mais próximo e simplificados.", exceeds: "Mostra os cálculos e verifica o esquadro da moldura com a regra 3-4-5." },
      { name: "Escolha e verificação da ferramenta", objective: "O3", notYet: "Nenhuma ferramenta nomeada, ou menos de três verificações.", meets: "Nomeia uma serra adequada e três verificações certas, incluindo a proteção, o cabo e desligar da tomada para trocar a lâmina.", exceeds: "Também lista o EPI e diz que só vai usar a ferramenta depois da formação com um instrutor." },
      { name: "Movimentação segura", objective: "O5", notYet: "Nenhum plano para o peso, o percurso ou o empilhamento.", meets: "Cobre a verificação do peso, o percurso, a postura ao levantar e o empilhamento.", exceeds: "Também diz quando chamar um ajudante ou usar equipamento e como carregar tábuas compridas nas curvas." },
      { name: "Perigos da obra", objective: "O1", notYet: "Nenhum perigo nomeado.", meets: "Nomeia pelo menos dois perigos dos Quatro Principais que podem existir e um controlo para cada um.", exceeds: "Cobre os quatro, com os controlos." },
      { name: "Plano de formação e testes", objective: "O6", notYet: "Sem centro ou sem datas.", meets: "Um centro ou programa real, os módulos Core, uma data de início, o tempo de estudo semanal e uma data-alvo para o teste.", exceeds: "As datas estão num calendário e há uma pessoa de apoio nomeada." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num programa NCCER Core ou numa pré-aprendizagem em 60 dias (inquérito de seguimento)",
      "Alunos que obtêm credenciais NCCER Core, segundo o próprio aluno ou o programa parceiro",
      "Alunos contratados para um emprego na construção ou numa aprendizagem em 6 meses",
      "Os programas parceiros dizem que os novos alunos do Core chegam com menos falhas em segurança e matemática"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, lápis e uma régua; uma fita métrica, se houver",
      "Um telefone ou computador para abrir nccer.org e osha.gov",
      "Cópias impressas do desenho da moldura de prática para sessões em grupo",
      "Cerca de 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois ensine um capítulo por sessão, fazendo as tarefas \"Experimente agora\" ao vivo.",
      "Traga várias fitas métricas; ponha os alunos a ler marcas nas fitas uns dos outros e a confirmar as respostas aos pares.",
      "Não deixe os alunos usarem ferramentas elétricas, escadas ou equipamento de elevação neste curso; isso ensina-se pessoalmente com um instrutor NCCER qualificado.",
      "Ajude os alunos a usar a página Find a Center do NCCER e ponha-os em contacto com programas Core locais, pré-aprendizagens ou o American Job Center.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Para alunos em reinserção, indique empregadores e programas de segunda oportunidade; para antigos militares, verifique com o VA (Departamento dos Assuntos de Veteranos dos EUA) se podem usar os benefícios de educação para uma aprendizagem ou formação."
    ]
  }
};
