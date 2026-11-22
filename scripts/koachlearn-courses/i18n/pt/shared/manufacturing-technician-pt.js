"use strict";

// Koach Learn course (Portuguese translation of shared/manufacturing-technician.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US (MSSC, OSHA, Department of Labor, apprenticeship.gov); numbers and units (inches, mm) are kept as in the English.

const MSSC_CPT = { name: "MSSC: Técnico de Produção Certificado (Certified Production Technician, CPT 4.0)", url: "https://www.msscusa.org/certification/production-certification-cpt/" };
const MSSC_COURSES = { name: "MSSC: módulos e cursos do CPT 4.0", url: "https://www.msscusa.org/certified-production-technician-cpt-courses/" };
const OSHA_LOTO = { name: "OSHA: controlo de energia perigosa (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" };
const OSHA_147 = { name: "OSHA 29 CFR 1910.147: controlo de energia perigosa (bloqueio e etiquetagem)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" };
const OSHA_GUARD = { name: "OSHA: proteção de máquinas (Machine Guarding)", url: "https://www.osha.gov/machine-guarding" };
const OSHA_212 = { name: "OSHA 29 CFR 1910.212: requisitos gerais para todas as máquinas (proteções)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212" };
const DOL_YOUTH = { name: "Departamento do Trabalho dos EUA: trabalhos proibidos a menores de 18 anos", url: "https://www.dol.gov/agencies/whd/child-labor/what-jobs-are-off-limits" };
const APPRENTICE = { name: "Apprenticeship.gov: Apprenticeship Finder (pesquisa de aprendizagens, Departamento do Trabalho dos EUA)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" };

module.exports = {
  id: "manufacturing-technician-pt",
  lang: "pt",
  translationOf: "manufacturing-technician",
  category: "Workforce Development",
  name: "Noções Básicas de Técnico de Produção Industrial",
  skills: "Identificar perigos das máquinas e usar o bloqueio e etiquetagem, Medir peças e compará-las com uma tolerância, Fazer verificações de qualidade e encontrar causas raiz, Usar os 5S, a produção enxuta e os cuidados diários com as máquinas, Planear a preparação para o MSSC CPT 4.0",
  outcome: "identificar os perigos de uma máquina e escolher a proteção certa, medir uma peça e decidir se está dentro da tolerância, registar defeitos e encontrar uma causa raiz, aplicar os 5S e as verificações diárias numa zona de trabalho e fazer um plano com datas para se preparar para as provas do MSSC Certified Production Technician (CPT 4.0) e para um primeiro emprego na produção.",
  about: [
    "As fábricas fazem carros, alimentos, medicamentos, móveis, peças de metal e aparelhos eletrónicos, e contratam trabalhadores de produção, operadores de máquinas e técnicos. Este curso é para quem procura emprego, jovens adultos, antigos militares, pessoas que voltam da prisão e qualquer pessoa que queira começar uma carreira no chão de fábrica.",
    "Você vai aprender as quatro áreas em que se baseiam o trabalho de entrada na indústria e o Certified Production Technician (CPT 4.0, Técnico de Produção Certificado) do Manufacturing Skill Standards Council (MSSC, conselho de normas de competências da indústria dos EUA): segurança, qualidade e medição, produção e noções de manutenção. Vai praticar em papel e com uma régua em casa.",
    "Importante: este curso prepara você; não lhe dá o CPT 4.0 nem nenhum outro certificado. É o MSSC que faz as provas e emite as credenciais. Trabalhar com máquinas, fazer o bloqueio e etiquetagem e usar ferramentas de precisão aprende-se pessoalmente com um instrutor qualificado ou com um formador da empresa, com o equipamento de proteção certo. Não pratique sozinho em máquinas reais.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há duas perguntas rápidas depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um dossiê de preparação para técnico de produção: uma lista de perigos e proteções de uma máquina, um registo de medições com a decisão dentro ou fora da tolerância para cinco peças de prática, um 5 Porquês para um defeito de prática, um plano de 5S e de verificação diária para uma zona de trabalho e um plano com datas para se preparar para as quatro provas do CPT 4.0, com uma linha honesta para o currículo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos que procuram emprego como trabalhador de produção, operador de máquinas, montador ou técnico: pessoas à procura de emprego, antigos militares, pessoas que voltam da prisão, imigrantes e jovens que acabam a escola. Alguns já trabalharam em armazéns ou em linhas de montagem; a maioria nunca estudou a indústria.",
    startingPoint: "Sabem seguir passos escritos e fazer contas simples com números inteiros. A maioria nunca usou um paquímetro, nunca leu uma tolerância, nunca fez bloqueio e etiquetagem e nunca ouviu falar de 5S, produção enxuta ou análise de causa raiz. Muitos não sabem que existe uma credencial da indústria para o trabalho de produção de entrada.",
    gap: "Os empregadores querem novos trabalhadores que trabalhem com segurança perto das máquinas, meçam com rigor, apanhem as peças más e mantenham a sua zona em ordem. As lesões causadas por máquinas podem ser graves, como amputações, por isso os hábitos de segurança vêm primeiro. Os alunos precisam desse conhecimento, e de um caminho claro para uma credencial reconhecida como o MSSC CPT 4.0, para concorrerem a empregos de produção e a aprendizagens.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; o MSSC recomenda cerca do 9.º ano em matemática e do 10.º ano em leitura para o CPT 4.0, por isso as contas são mostradas passo a passo",
      "Neste curso não se trabalha com máquinas: a prática só acontece com um instrutor qualificado ou um formador da empresa",
      "As regras federais sobre trabalho infantil proíbem os menores de 18 anos de trabalhar com muitas máquinas de fábrica",
      "Aparelhos: um telefone ou um computador da biblioteca para as páginas oficiais; uma régua ou fita métrica e papel em casa",
      "Os requisitos, os preços e as datas das provas do CPT 4.0 mudam: os alunos verificam em msscusa.org ou num centro de provas"
    ],
    prerequisites: "Contas básicas com números inteiros. Os cursos \"Matemática do Dia a Dia\" e \"Noções Básicas de Segurança no Trabalho (OSHA)\" são bons complementos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma descrição ou uma imagem de uma máquina e de uma tarefa", action: "identificar os perigos e escolher a proteção certa, incluindo o bloqueio e etiquetagem", standard: "nomeando pelo menos 3 perigos e a proteção correta para cada um" },
    { id: "O2", condition: "Com uma leitura de régua ou de paquímetro e a tolerância de uma peça", action: "medir uma peça e decidir se está dentro da tolerância", standard: "acertando pelo menos 4 de 5 decisões de prática" },
    { id: "O3", condition: "Perante um problema de qualidade numa linha de produção", action: "registar os defeitos e encontrar uma causa raiz provável com os 5 Porquês", standard: "separando as peças más e chegando a uma causa que se pode corrigir" },
    { id: "O4", condition: "Com uma zona de trabalho e uma máquina", action: "aplicar os 5S e uma verificação diária do operador à zona", standard: "indicando uma ação para cada um dos 5 S e pelo menos 5 pontos de verificação diária" },
    { id: "O5", condition: "Usando a página do MSSC CPT 4.0 e as opções de formação locais", action: "escrever um plano com datas para se preparar para o CPT 4.0 e para um primeiro emprego na produção", standard: "que nomeie os quatro módulos obrigatórios, uma data de prova a confirmar e uma linha honesta para o currículo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O trabalho, a segurança e a medição",
      lessons: [
        {
          title: "O trabalho de técnico de produção e o CPT 4.0",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explicar o que faz um técnico de produção e que credencial mostra aos empregadores que você está preparado.",
          text: [
            "Um técnico de produção ajuda a fazer produtos com segurança e sem erros. Num turno normal, pode preparar ou pôr a trabalhar uma máquina, montar peças, verificar peças com instrumentos de medição, registar números numa folha ou num ecrã, manter a sua zona limpa e comunicar problemas com máquinas ou peças.",
            "Muitos empregadores procuram o Certified Production Technician (CPT 4.0) do Manufacturing Skill Standards Council (MSSC). Tem cinco provas: Segurança (Safety); Práticas de Qualidade e Medição (Quality Practices & Measurement); Processo de Fabrico e Produção (Manufacturing Process & Production); Noções de Manutenção (Maintenance Awareness); e Produção Verde (Green Production). Você recebe um certificado por cada prova em que passa. As quatro primeiras juntas dão o CPT 4.0 completo. A Produção Verde é opcional.",
            "O MSSC diz que as provas são de escolha múltipla e podem ser feitas online ou em papel. Há formação em colégios comunitários (community colleges), programas de emprego e algumas escolas secundárias. O MSSC também tem uma opção prática chamada CPT+ com Skill Boss. Veja em msscusa.org os preços, os centros de provas e os requisitos atuais; este curso não dá a credencial.",
            "Outros caminhos para este trabalho: aprendizagens registadas, em que você ganha enquanto aprende (pesquise em apprenticeship.gov), e empregos em que é a empresa que dá a formação. Os antigos militares que fizeram manutenção ou abastecimento nas forças armadas têm muitas vezes competências que servem."
          ],
          words: [["Técnico de produção", "um trabalhador que põe a trabalhar, prepara, verifica e cuida do equipamento que faz os produtos."], ["MSSC", "o Manufacturing Skill Standards Council, a organização que faz as provas do CPT e emite as credenciais."], ["Prova", "um teste que mostra se você conhece a matéria."], ["Módulo", "uma área do CPT, com a sua própria prova e o seu próprio certificado."], ["Aprendizagem registada", "um emprego pago com formação e um mentor, reconhecido pelo Departamento do Trabalho dos EUA ou por um estado."]],
          slides: [
            { title: "Como é o trabalho", bullets: ["Preparar ou pôr máquinas a trabalhar, montar peças", "Medir e verificar peças, registar números", "Manter a zona limpa, comunicar problemas"] },
            { title: "MSSC CPT 4.0", bullets: ["Segurança (Safety)", "Práticas de Qualidade e Medição", "Processo de Fabrico e Produção", "Noções de Manutenção"] },
            { title: "Como funciona", bullets: ["Um certificado por cada módulo em que passa", "Os quatro primeiros módulos = CPT 4.0 completo", "A Produção Verde é opcional"] },
            { title: "Outras entradas", bullets: ["Aprendizagens registadas: apprenticeship.gov", "Empresas que dão formação a quem entra", "Este curso prepara; o MSSC certifica"] }
          ],
          sources: [MSSC_CPT, MSSC_COURSES, APPRENTICE],
          tryIt: "Em papel, escreva os quatro módulos do CPT 4.0 de que precisa para a certificação completa. Ao lado de cada um, escreva uma coisa que já sabe sobre ele e uma pergunta que tem. Depois abra msscusa.org e escreva onde procuraria um centro de provas.",
          youCanNow: "explicar o que faz um técnico de produção e nomear os quatro módulos do CPT 4.0 de que precisa para a credencial completa.",
          quickCheck: [
            { objective: "O5", q: "Em quantos módulos do CPT 4.0 tem de passar para ter a certificação completa?", options: ["Dois", "Todos os cinco, incluindo a Produção Verde", "Os quatro primeiros", "Só a Segurança"], answer: 2, why: "O MSSC diz que os candidatos têm de obter os quatro primeiros certificados para ter o CPT 4.0 completo; a Produção Verde é opcional." },
            { objective: "O5", q: "Quem emite a credencial CPT 4.0?", options: ["O Manufacturing Skill Standards Council (MSSC)", "Este curso online", "A OSHA", "A biblioteca do seu bairro"], answer: 0, why: "O MSSC faz as provas e emite as credenciais; este curso só prepara você." }
          ]
        },
        {
          title: "Segurança nas máquinas: proteções, EPI e bloqueio e etiquetagem",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identificar os perigos de uma máquina e escolher a proteção certa.",
          text: [
            "A OSHA (agência de segurança no trabalho dos EUA) diz que qualquer parte, função ou processo de uma máquina que possa causar lesões tem de ter proteção. A sua regra sobre máquinas nomeia perigos como o ponto de operação (onde a máquina corta, prensa ou dá forma), os pontos de entalamento (onde duas peças rodam uma contra a outra e o podem puxar), as peças rotativas e as aparas e faíscas que saltam. As lesões podem incluir esmagamento, amputação, queimaduras e cegueira.",
            "A sua proteção, da mais forte para a mais fraca: proteções que mantêm o seu corpo fora da zona de perigo (nunca tire nem contorne uma), procedimentos seguros e equipamento de proteção individual (EPI), como óculos de segurança, proteção auditiva, luvas onde forem permitidas e sapatos com biqueira de aço. Mantenha a roupa larga, o cabelo comprido e as joias longe das peças em movimento; as luvas podem ser apanhadas por peças rotativas, por isso siga a regra de cada máquina.",
            "O bloqueio e etiquetagem (lockout/tagout, LOTO) é a regra 29 CFR 1910.147 da OSHA. Quando se faz manutenção numa máquina ou se desencrava uma peça, a sua energia (elétrica, mecânica, hidráulica, pneumática, química ou térmica) tem de ser desligada e trancada para a máquina não arrancar. Só trabalhadores formados e autorizados põem cadeados. Todos os outros aprendem que nunca devem tirar um cadeado nem voltar a ligar um equipamento bloqueado.",
            "As regras federais sobre trabalho infantil proíbem os menores de 18 anos de trabalhar com muitas máquinas elétricas, como máquinas de conformar, puncionar e cortar metal, serras elétricas e empilhadores. Se tem menos de 18 anos, veja a página do Departamento do Trabalho."
          ],
          steps: ["Preparar: conhecer todas as fontes de energia da máquina.", "Avisar os trabalhadores afetados de que a máquina vai ser desligada.", "Desligar a máquina da forma normal.", "Isolar a energia: desligar o interruptor, fechar válvulas, desconectar.", "Pôr o seu próprio cadeado e a sua etiqueta.", "Libertar ou travar a energia acumulada (molas, ar, pressão, calor).", "Verificar: tentar pôr a máquina a trabalhar e depois voltar a pôr os comandos em desligado."],
          words: [["Ponto de operação", "o lugar onde a máquina corta, dobra, prensa ou dá forma ao material."], ["Ponto de entalamento", "onde duas peças em movimento se juntam e podem puxar dedos, cabelo ou roupa."], ["Proteção (resguardo)", "uma barreira que mantém o seu corpo longe das peças em movimento."], ["EPI", "equipamento de proteção individual, como óculos de segurança, tampões para os ouvidos e sapatos de segurança."], ["Bloqueio e etiquetagem (LOTO)", "desligar a energia de uma máquina e pôr um cadeado e uma etiqueta para que não arranque enquanto alguém trabalha nela."], ["Energia acumulada", "energia que fica numa máquina depois de desligada, como uma mola, ar sob pressão ou calor."]],
          slides: [
            { title: "Onde as máquinas ferem as pessoas", bullets: ["Ponto de operação", "Pontos de entalamento e peças rotativas", "Aparas e faíscas que saltam"] },
            { title: "A sua proteção", bullets: ["Proteções: nunca as tire nem contorne", "Procedimentos seguros", "EPI: óculos, proteção auditiva, sapatos"] },
            { title: "Bloqueio e etiquetagem", bullets: ["Para manutenção e para desencravar peças", "Desligar, isolar, trancar, etiquetar", "Libertar a energia acumulada e depois verificar"] },
            { title: "Conheça os limites", bullets: ["Só pessoas autorizadas põem cadeados", "Nunca tire o cadeado de outra pessoa", "Menores de 18: muitas máquinas são proibidas"] }
          ],
          sources: [OSHA_GUARD, OSHA_212, OSHA_LOTO, OSHA_147, DOL_YOUTH],
          tryIt: "Escolha uma máquina que conhece ou que pode ver num vídeo: um engenho de furar, uma trituradora de papel ou um tapete transportador. Escreva pelo menos três perigos (ponto de operação, pontos de entalamento, peças rotativas, aparas que saltam) e a proteção para cada um. Depois leia este caso de prática: uma peça está encravada numa prensa. Escreva o que tem de acontecer antes de alguém meter a mão.",
          youCanNow: "identificar os perigos de uma máquina e escolher proteções, EPI ou o bloqueio e etiquetagem para proteger você e os outros.",
          quickCheck: [
            { objective: "O1", q: "Uma proteção atrasa o seu trabalho e um colega diz para a tirar. O que faz?", options: ["Tira-a quando o supervisor não está", "Dobra-a para o lado", "Tira-a só durante um turno", "Deixa-a no lugar e comunica o problema ao supervisor"], answer: 3, why: "As proteções mantêm o seu corpo fora da zona de perigo e nunca se podem tirar nem contornar." },
            { objective: "O1", q: "É preciso fazer manutenção numa máquina. Que passo vem logo depois de pôr o seu cadeado e a sua etiqueta?", options: ["Pôr a máquina a trabalhar", "Libertar ou travar a energia acumulada e depois verificar que não arranca", "Tirar a proteção e começar", "Tirar o cadeado para o testar"], answer: 1, why: "Depois de trancar, você liberta a energia acumulada e verifica que a máquina não consegue arrancar." }
          ]
        },
        {
          title: "Medir peças e ler uma tolerância",
          objectives: ["O2"],
          minutes: 6,
          goal: "Medir uma peça e decidir se está dentro da tolerância.",
          text: [
            "Cada peça tem uma medida-alvo no seu desenho, chamada medida nominal, e uma tolerância: quanto se pode afastar do alvo e continuar boa. Por exemplo, 1.250 ± 0.005 polegadas quer dizer que qualquer medida de 1.245 a 1.255 polegadas está boa. Tudo o que for mais pequeno ou maior está fora da tolerância.",
            "Instrumentos comuns: uma fita métrica ou uma régua de aço para medidas aproximadas; um paquímetro para medidas exteriores, interiores e de profundidade, muitas vezes até à milésima de polegada (0.001) ou à centésima de milímetro (0.01); e um micrómetro para medidas exteriores ainda mais finas. Muitas oficinas usam paquímetros digitais.",
            "Bons hábitos: limpe a peça e o instrumento, ponha o paquímetro a zero com os bicos fechados, segure os bicos direitos em relação à peça sem apertar, leia o número de frente e escreva-o logo. Meça mais de uma vez se tiver dúvidas. Aprenda a usar instrumentos de precisão com um instrutor, que também lhe vai ensinar a ler as escalas de mostrador e de nónio."
          ],
          steps: ["Ler o desenho: medida nominal e tolerância.", "Calcular os limites: a medida nominal menos e mais a tolerância.", "Limpar a peça e o instrumento; pôr o paquímetro a zero.", "Medir direito, sem apertar; ler o número.", "Escrever. Dentro dos limites = boa; fora = fora da tolerância."],
          words: [["Medida nominal", "a medida-alvo que aparece no desenho."], ["Tolerância", "quanto uma medida pode variar em relação ao alvo e continuar boa."], ["Paquímetro", "um instrumento com bicos deslizantes que mede medidas exteriores, interiores e de profundidade."], ["Micrómetro", "um instrumento de rosca que mede medidas exteriores com muita precisão."], ["Pôr a zero", "acertar o instrumento para mostrar 0 com os bicos fechados, para que as leituras comecem no ponto certo."]],
          slides: [
            { title: "Alvo e tolerância", bullets: ["Nominal: a medida-alvo", "Tolerância: quanto pode variar", "1.250 ± 0.005 = de 1.245 a 1.255"] },
            { title: "Os instrumentos", bullets: ["Fita ou régua de aço: medidas aproximadas", "Paquímetro: exterior, interior, profundidade", "Micrómetro: medidas exteriores muito finas"] },
            { title: "Medir como um profissional", bullets: ["Peça e instrumento limpos; zero primeiro", "Bicos direitos, sem apertar", "Ler de frente; escrever logo"] },
            { title: "Decidir", bullets: ["Dentro dos limites: peça boa", "Fora: fora da tolerância, comunique"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Só para praticar, números inventados. Uma peça tem 2.000 ± 0.010 polegadas. Calcule os limites e depois decida se cada medida está boa ou fora da tolerância: 1.995, 2.012, 1.989, 2.010, 2.004. A seguir, meça em casa três objetos com uma régua (um livro, um telefone, uma colher), duas vezes cada um, e escreva as duas leituras.",
          youCanNow: "calcular os limites de uma tolerância, medir uma peça com cuidado e decidir se está boa ou fora da tolerância.",
          quickCheck: [
            { objective: "O2", q: "Uma peça tem 0.500 ± 0.002 polegadas. Que intervalo está bom?", options: ["De 0.400 a 0.600", "De 0.498 a 0.502", "Só de 0.500 a 0.502", "De 0.490 a 0.510"], answer: 1, why: "Subtraia e some 0.002 a 0.500: o intervalo bom é de 0.498 a 0.502." },
            { objective: "O2", q: "O que faz a um paquímetro digital antes de medir?", options: ["Aperta os bicos com força", "Mede a peça ainda suja", "Fecha os bicos e põe-no a zero", "Lê o número de lado"], answer: 2, why: "Pôr a zero com os bicos fechados faz cada leitura começar no ponto certo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O trabalho, a segurança e a medição",
        questions: [
          { objective: "O5", q: "Que módulo é opcional para o CPT 4.0 completo?", options: ["Segurança", "Produção Verde", "Noções de Manutenção", "Práticas de Qualidade e Medição"], answer: 1, why: "O MSSC diz que a Produção Verde não faz parte da certificação CPT 4.0 completa." },
          { objective: "O1", q: "O lugar onde dois rolos rodam um para o outro e podem puxar a sua manga chama-se:", options: ["A placa de características", "A tolerância", "O contrapeso", "Um ponto de entalamento"], answer: 3, why: "Um ponto de entalamento é onde duas peças em movimento se juntam e o podem puxar." },
          { objective: "O1", q: "Uma peça está encravada numa máquina. O que tem de acontecer antes de alguém meter a mão?", options: ["Bloqueio e etiquetagem feitos por uma pessoa autorizada", "Pôr a máquina em velocidade lenta", "Pôr luvas e meter a mão depressa", "Pedir a um colega para vigiar o interruptor"], answer: 0, why: "Desencravar uma peça é trabalho de manutenção, por isso a energia da máquina tem de ser bloqueada primeiro." },
          { objective: "O2", q: "Uma peça tem 25.00 ± 0.10 mm. Você mede 25.14 mm. O que é verdade?", options: ["Está boa", "Está boa se tiver bom aspeto", "Está fora da tolerância", "A tolerância não se aplica a peças em milímetros"], answer: 2, why: "O limite superior é 25.10 mm, e 25.14 mm está acima dele." },
          { objective: "O2", q: "Que instrumento é melhor para medir a largura interior de uma ranhura?", options: ["Um martelo", "Um nível", "Um pincel", "Um paquímetro"], answer: 3, why: "O paquímetro tem bicos interiores feitos para medir medidas interiores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Qualidade, produção e conseguir emprego",
      lessons: [
        {
          title: "Verificações de qualidade e encontrar a causa raiz",
          objectives: ["O3"],
          minutes: 6,
          goal: "Registar defeitos e encontrar uma causa raiz provável com os 5 Porquês.",
          text: [
            "Qualidade quer dizer que cada peça cumpre a sua especificação, os requisitos escritos de medida, aspeto e funcionamento. Uma peça que não cumpre é um defeito, ou peça não conforme. O seu trabalho é apanhar os defeitos cedo, mantê-los longe das peças boas e comunicá-los.",
            "Use uma folha de verificação: uma tabela simples em que faz um risco cada vez que vê um tipo de defeito, como risco na superfície, medida errada ou furo em falta. No fim do turno, os riscos mostram que problema acontece mais vezes. Ponha as peças más numa caixa de rejeitados marcada ou etiquete-as, para ninguém as enviar por engano.",
            "Para resolver um problema de vez, encontre a sua causa raiz, e não só o sintoma. Os 5 Porquês são simples: diga qual é o problema, pergunte \"Porquê?\" e depois pergunte \"Porquê?\" sobre essa resposta, cerca de cinco vezes, até chegar a uma causa que pode corrigir. Muitas fábricas usam depois o ciclo Planear-Executar-Verificar-Agir (PDCA): planear uma correção, experimentá-la, verificar os resultados e torná-la a regra se funcionar."
          ],
          steps: ["Verificar as peças em relação à especificação.", "Marcar cada tipo de defeito numa folha de verificação.", "Etiquetar as peças más ou pô-las na caixa de rejeitados; comunicar.", "Perguntar \"Porquê?\" cerca de cinco vezes para chegar a uma causa raiz.", "Propor uma correção; verificar que os defeitos diminuem."],
          words: [["Especificação", "os requisitos escritos que uma peça tem de cumprir."], ["Defeito", "uma peça ou um produto que não cumpre a especificação; também se diz não conforme."], ["Folha de verificação", "uma tabela para contar quantas vezes acontece cada tipo de defeito."], ["Causa raiz", "a verdadeira razão de um problema; corrigi-la impede o problema de voltar."], ["5 Porquês", "perguntar \"Porquê?\" várias vezes para passar de um sintoma à sua causa raiz."], ["Planear-Executar-Verificar-Agir", "um ciclo de quatro passos para testar uma correção e torná-la a regra (em inglês, Plan-Do-Check-Act)."]],
          slides: [
            { title: "Qualidade na linha", bullets: ["Cada peça cumpre a especificação", "Apanhar os defeitos cedo", "Manter as peças más longe das boas"] },
            { title: "Folhas de verificação", bullets: ["Marcar cada tipo de defeito", "Ver que problema acontece mais", "Etiquetar ou separar os rejeitados; comunicar"] },
            { title: "Os 5 Porquês", bullets: ["Dizer qual é o problema", "Perguntar \"Porquê?\" cerca de cinco vezes", "Parar numa causa que se pode corrigir"] },
            { title: "Planear-Executar-Verificar-Agir", bullets: ["Planear uma correção e experimentá-la", "Verificar os resultados", "Torná-la a regra se funcionar"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Caso de prática: os furos feitos em suportes estão no lugar errado em cerca de uma peça em cada dez. Faça uma folha de verificação com três tipos de defeito e preencha-a com riscos inventados. Depois escreva uma cadeia de 5 Porquês (por exemplo: o gabarito mexe-se, porque um grampo está solto, porque ...) e termine com uma correção que poderia propor ao seu supervisor.",
          youCanNow: "registar defeitos numa folha de verificação, separar as peças más e usar os 5 Porquês para encontrar uma causa raiz.",
          quickCheck: [
            { objective: "O3", q: "Encontra cinco peças riscadas numa caixa de peças boas. O que faz primeiro?", options: ["Separa-as e etiqueta-as, depois comunica", "Envia-as; os riscos são pequenos", "Deita-as fora e não diz nada", "Pole-as você mesmo"], answer: 0, why: "As peças más ficam longe das boas e são comunicadas para se encontrar a causa." },
            { objective: "O3", q: "Qual é o objetivo dos 5 Porquês?", options: ["Culpar um colega", "Contar as peças", "Atrasar a linha", "Encontrar uma causa raiz que se pode corrigir"], answer: 3, why: "Os 5 Porquês levam de um sintoma à causa raiz, para a correção durar." }
          ]
        },
        {
          title: "Produção enxuta, 5S e cuidados diários com a máquina",
          objectives: ["O4"],
          minutes: 6,
          goal: "Aplicar os 5S e uma verificação diária do operador a uma zona de trabalho.",
          text: [
            "Produção enxuta (lean) quer dizer fazer o que o cliente precisa com menos desperdício. O desperdício inclui esperas, produzir demais, movimentos a mais, manuseamento a mais, stock a mais, defeitos e passos que não acrescentam valor. Ver o desperdício e propor pequenas melhorias faz parte do trabalho de um técnico.",
            "Os 5S mantêm uma zona de trabalho segura e eficiente. Separar: tirar o que não precisa. Arrumar: um lugar marcado para cada ferramenta. Limpar: limpar a zona e a máquina, o que também mostra fugas e danos. Padronizar: escrever como a zona deve estar. Manter: continuar a fazê-lo em todos os turnos.",
            "As noções de manutenção começam com os cuidados diários do operador. Antes e durante o seu turno, procure fugas, parafusos soltos, correias gastas, falta de óleo ou de líquido de refrigeração, ruídos estranhos, calor, vibração e proteções ou cabos danificados. Siga a lista de verificação da máquina. Comunique o que encontrar; só pessoas formadas e autorizadas reparam máquinas, e as reparações exigem bloqueio e etiquetagem.",
            "A manutenção preventiva é um cuidado planeado, como lubrificar e trocar filtros segundo um calendário, para as máquinas avariarem menos. As suas notas na lista de verificação ajudam a equipa de manutenção a apanhar os problemas cedo."
          ],
          steps: ["Separar: tirar o que não precisa.", "Arrumar: um lugar marcado para cada ferramenta.", "Limpar: limpar e, ao limpar, procurar fugas e danos.", "Padronizar: escrever ou afixar como a zona deve estar.", "Manter: fazê-lo em todos os turnos.", "Verificação diária: fugas, ruído, calor, vibração, correias, líquidos, proteções; comunicar problemas."],
          words: [["Produção enxuta (lean)", "uma forma de trabalhar que elimina o desperdício para o valor chegar ao cliente."], ["Desperdício", "tudo o que acrescenta tempo ou custo mas não valor, como esperar ou movimentos a mais."], ["5S", "Separar, Arrumar, Limpar, Padronizar, Manter: um método para ter uma zona de trabalho em ordem (em inglês, Sort, Set in order, Shine, Standardize, Sustain)."], ["Manutenção preventiva", "cuidados planeados segundo um calendário para as máquinas avariarem menos."], ["Vibração", "tremor que pode ser sinal de uma peça solta ou gasta."]],
          slides: [
            { title: "Produção enxuta: cortar o desperdício", bullets: ["Esperas, movimentos a mais, manuseamento a mais", "Produzir demais, stock a mais", "Defeitos e passos sem valor"] },
            { title: "5S", bullets: ["Separar e Arrumar", "Limpar: limpar e inspecionar", "Padronizar e Manter"] },
            { title: "Verificação diária da máquina", bullets: ["Fugas, parafusos soltos, correias gastas", "Ruído, calor, vibração", "Líquidos, proteções e cabos"] },
            { title: "Comunique, não repare", bullets: ["Escreva na lista de verificação", "Só pessoas autorizadas reparam", "As reparações exigem bloqueio e etiquetagem"] }
          ],
          sources: [MSSC_COURSES, OSHA_147],
          tryIt: "Escolha uma zona de trabalho que consegue ver agora: uma bancada de cozinha, uma prateleira da garagem ou uma secretária. Escreva uma ação para cada um dos 5 S. Depois escreva uma lista de verificação diária com pelo menos cinco pontos para uma máquina que conhece (um carro, uma bicicleta, um corta-relva ou uma máquina de lavar roupa) e o que comunicaria.",
          youCanNow: "ver o desperdício, aplicar os 5S numa zona de trabalho e fazer uma verificação diária do operador, comunicando os problemas em vez de os reparar você mesmo.",
          quickCheck: [
            { objective: "O4", q: "Que passo dos 5S quer dizer \"um lugar marcado para cada ferramenta\"?", options: ["Separar", "Limpar", "Arrumar", "Manter"], answer: 2, why: "Arrumar dá a cada ferramenta um lugar marcado, para ser fácil encontrá-la e devolvê-la." },
            { objective: "O4", q: "Durante a sua verificação diária ouve um ruído novo, como de algo a raspar. O que faz?", options: ["Aumenta o volume da música", "Escreve na lista de verificação e comunica", "Desmonta a máquina", "Ignora até avariar"], answer: 1, why: "Os operadores comunicam ruídos estranhos; pessoas formadas e autorizadas fazem a reparação." }
          ]
        },
        {
          title: "O seu plano: preparação para o CPT 4.0 e o primeiro emprego na produção",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escrever um plano com datas para se preparar para o CPT 4.0 e se candidatar a empregos de produção.",
          text: [
            "Comece pela página oficial. Em msscusa.org, veja os módulos atuais, como são feitas as provas, os preços e onde fazer a prova. Muitos colégios comunitários e centros de emprego (muitas vezes chamados American Job Centers) dão formação para o CPT e podem ajudar a pagá-la. Pergunte se o programa inclui prática com ferramentas e máquinas reais.",
            "Planeie um módulo de cada vez. A Segurança é um bom primeiro módulo. Para cada um, marque semanas de estudo, uma forma de praticar (notas, cartões de memória, a prática deste curso) e uma data-alvo para a prova, que confirma com o centro de provas.",
            "Candidate-se enquanto estuda. Procure empregos de auxiliar de produção, operador de máquinas, montador e técnico de produção e pesquise aprendizagens registadas em apprenticeship.gov. Algumas empresas contratam pessoas com registo criminal; os programas de emprego e de reinserção podem indicar-lhe quais.",
            "No seu currículo, seja honesto. Escreva \"Concluiu Noções Básicas de Técnico de Produção Industrial (Koach Learn), 2026\" e só ponha os módulos do CPT depois de passar neles. Nas entrevistas, fale primeiro da segurança, de medir com cuidado, de apanhar peças más e de manter a sua zona em ordem."
          ],
          steps: ["Ler a página do CPT 4.0 em msscusa.org; anotar os quatro módulos obrigatórios.", "Encontrar um programa de formação ou centro de provas perto de você e o que oferece.", "Marcar semanas de estudo e uma data-alvo para cada módulo; confirmar as datas com o centro.", "Escrever três cargos e três empresas ou aprendizagens a que se candidatar.", "Escrever uma linha honesta para o currículo e uma resposta de 30 segundos: \"Porquê a indústria?\""],
          words: [["American Job Center", "um centro público de emprego que ajuda as pessoas a encontrar trabalho e formação."], ["Auxiliar de produção", "um cargo de entrada comum no chão de fábrica (em inglês, production associate)."], ["Centro de provas", "uma escola ou um centro aprovado para fazer a prova."]],
          slides: [
            { title: "Comece pelo MSSC", bullets: ["Veja módulos, provas e preços em msscusa.org", "Encontre um programa ou centro de provas perto", "Pergunte pela prática com máquinas reais"] },
            { title: "Um módulo de cada vez", bullets: ["A Segurança é um bom primeiro módulo", "Semanas de estudo e forma de praticar", "Uma data-alvo que você confirma"] },
            { title: "Candidate-se enquanto estuda", bullets: ["Auxiliar de produção, operador, montador", "Aprendizagens registadas", "Programas de emprego e de reinserção"] },
            { title: "Seja honesto", bullets: ["Indique o curso que concluiu", "Só ponha módulos do CPT depois de passar", "Fale primeiro de segurança e de qualidade"] }
          ],
          sources: [MSSC_CPT, APPRENTICE],
          tryIt: "Escreva o seu plano numa página: os quatro módulos, com a semana de início do estudo e a data-alvo da prova para cada um, um programa ou centro de provas a contactar, três empregos ou aprendizagens a que se candidatar e a sua linha honesta para o currículo. Leia em voz alta a sua resposta de 30 segundos a \"Porquê a indústria?\".",
          youCanNow: "escrever um plano com datas para se preparar para o CPT 4.0 e para um primeiro emprego na produção e descrever a sua formação com honestidade.",
          quickCheck: [
            { objective: "O5", q: "Só passou no módulo de Segurança. Que linha do currículo é honesta?", options: ["\"Certificação CPT 4.0 completa\"", "\"Técnico mestre\"", "\"Maquinista certificado pela OSHA\"", "\"Certificado de Segurança do MSSC (módulo do CPT 4.0), 2026\""], answer: 3, why: "Diz exatamente o que você obteve e não afirma ter o CPT 4.0 completo." },
            { objective: "O5", q: "Onde confirma os preços e os centros de provas atuais do CPT?", options: ["No site oficial do MSSC ou num centro de provas aprovado", "Num anúncio nas redes sociais", "No palpite de um amigo", "Em qualquer site de empregos"], answer: 0, why: "Os preços e as provas mudam, por isso confirme diretamente com o MSSC ou com o centro de provas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Qualidade, produção e conseguir emprego",
        questions: [
          { objective: "O3", q: "O que lhe mostra uma folha de verificação no fim de um turno?", options: ["Que tipo de defeito acontece mais", "O preço da máquina", "O tempo que vai fazer", "Quem chegou atrasado"], answer: 0, why: "Os riscos numa folha de verificação mostram quantas vezes acontece cada tipo de defeito." },
          { objective: "O3", q: "As peças estão compridas demais. Porquê? O batente mexeu-se. Porquê? O seu parafuso está solto. Porquê? Ninguém o verifica. Qual é uma boa correção?", options: ["Fazer peças mais depressa", "Culpar o turno anterior", "Juntar o parafuso do batente à verificação diária", "Deitar fora todas as peças"], answer: 2, why: "A correção ataca a causa raiz a que os 5 Porquês chegaram: o parafuso nunca é verificado." },
          { objective: "O4", q: "Os trabalhadores esperam 20 minutos em cada turno que as peças cheguem. Na produção enxuta, isto é:", options: ["Valor", "Desperdício", "5S", "Tolerância"], answer: 1, why: "Esperar acrescenta tempo mas não valor, por isso é um dos desperdícios da produção enxuta." },
          { objective: "O4", q: "Que passo dos 5S também ajuda a ver fugas e danos?", options: ["Separar", "Manter", "Padronizar", "Limpar"], answer: 3, why: "Limpar a máquina no passo Limpar mostra fugas, fissuras e desgaste." },
          { objective: "O5", q: "Qual é um bom primeiro passo num plano para o CPT 4.0?", options: ["Ler a página do CPT 4.0 em msscusa.org e encontrar um centro de provas", "Comprar um certificado online", "Fazer as cinco provas no mesmo dia sem estudar", "Esperar que alguém lhe diga"], answer: 0, why: "Começar pela página oficial dá-lhe os módulos, as provas e os centros atuais." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Técnico de Produção Industrial",
    questions: [
      { objective: "O5", q: "Que organização dá o Certified Production Technician (CPT 4.0)?", options: ["A OSHA", "Só o seu empregador", "O Manufacturing Skill Standards Council (MSSC)", "Este curso"], answer: 2, why: "O MSSC faz as provas do CPT e emite as credenciais." },
      { objective: "O5", q: "Que módulos formam o CPT 4.0 completo?", options: ["Segurança; Práticas de Qualidade e Medição; Processo de Fabrico e Produção; Noções de Manutenção", "Soldadura, canalização, condução e cozinha", "Só a Produção Verde", "Empilhador, grua, escada e telhado"], answer: 0, why: "O MSSC diz que os quatro primeiros módulos dão o CPT 4.0 completo." },
      { objective: "O1", q: "Qual é um perigo que a regra da OSHA sobre máquinas nomeia?", options: ["Um chão limpo", "Um quadro de 5S afixado", "Um lápis afiado", "Peças rotativas"], answer: 3, why: "A regra geral da OSHA sobre máquinas indica as peças rotativas, com o ponto de operação, os pontos de entalamento e as aparas que saltam." },
      { objective: "O1", q: "Qual é a proteção mais forte contra as peças em movimento de uma máquina?", options: ["Trabalhar mais depressa", "Uma proteção que mantém o seu corpo fora da zona de perigo", "Luvas largas", "Um grito de aviso"], answer: 1, why: "As proteções mantêm você longe do perigo e nunca se podem tirar nem contornar." },
      { objective: "O1", q: "Vê o cadeado de outro trabalhador numa máquina de que precisa. O que faz?", options: ["Corta o cadeado", "Fala com o seu supervisor; nunca tira o cadeado de outra pessoa", "Põe a máquina a trabalhar na mesma", "Tira só a etiqueta"], answer: 1, why: "Só o trabalhador que pôs o cadeado o tira, seguindo o procedimento." },
      { objective: "O1", q: "Você tem 17 anos. Que trabalho é proibido pelas regras federais sobre trabalho infantil?", options: ["Varrer a sala de descanso", "Arquivar papéis", "Arrumar caixas leves à mão", "Trabalhar com uma máquina de puncionar metal"], answer: 3, why: "Os menores de 18 anos não podem trabalhar com máquinas elétricas de conformar, puncionar ou cortar metal." },
      { objective: "O2", q: "Uma peça tem 3.000 ± 0.005 polegadas. Você mede 2.996. Está boa?", options: ["Sim, está entre 2.995 e 3.005", "Não, tem de ter exatamente 3.000", "Não, é grande demais", "Só se estiver a brilhar"], answer: 0, why: "2.996 está dentro dos limites de 2.995 a 3.005." },
      { objective: "O2", q: "O que é a tolerância?", options: ["O peso de uma peça", "A velocidade da máquina", "Quanto uma medida pode variar em relação ao alvo e continuar boa", "O preço de uma peça"], answer: 2, why: "A tolerância define o intervalo permitido à volta da medida nominal." },
      { objective: "O2", q: "Que hábito dá uma leitura certa do paquímetro?", options: ["Apertar os bicos com toda a força", "Limpar a peça, pôr o instrumento a zero e segurar os bicos direitos", "Medir por cima de uma luva", "Adivinhar o último algarismo"], answer: 1, why: "Superfícies limpas, um instrumento a zero e bicos direitos dão leituras exatas." },
      { objective: "O2", q: "Uma peça tem 10.00 ± 0.05 mm. Que leitura está fora da tolerância?", options: ["9.97 mm", "10.04 mm", "10.00 mm", "10.08 mm"], answer: 3, why: "O limite superior é 10.05 mm, por isso 10.08 mm é grande demais." },
      { objective: "O3", q: "Uma peça que não cumpre a sua especificação chama-se:", options: ["Não conforme (um defeito)", "Nominal", "Enxuta", "Posta a zero"], answer: 0, why: "Uma peça que falha a especificação é um defeito, ou peça não conforme." },
      { objective: "O3", q: "Porque é que etiqueta ou separa logo as peças más?", options: ["Para a caixa ficar pesada", "Para as peças poderem ser pintadas", "Para ninguém as misturar com as boas nem as enviar", "Para as esconder do supervisor"], answer: 2, why: "Separar os rejeitados impede que as peças más cheguem ao cliente." },
      { objective: "O3", q: "No ciclo Planear-Executar-Verificar-Agir, o que acontece em \"Verificar\"?", options: ["Planeia a correção", "Para a linha de vez", "Encomenda máquinas novas", "Vê se a correção funcionou"], answer: 3, why: "Verificar quer dizer olhar para os resultados para ver se a correção funcionou." },
      { objective: "O4", q: "Qual é um desperdício da produção enxuta?", options: ["Levar peças de um lado para o outro sem necessidade", "Uma peça boa enviada ao cliente", "Uma zona de trabalho limpa", "Uma verificação de segurança terminada"], answer: 0, why: "Movimentos e manuseamento a mais acrescentam tempo e custo mas não valor." },
      { objective: "O4", q: "O que quer dizer \"Manter\" nos 5S?", options: ["Deitar fora o que não se usa", "Continuar a fazer os 5S em todos os turnos", "Pintar o chão", "Comprar ferramentas novas"], answer: 1, why: "Manter quer dizer tornar os 5S um hábito, para a zona continuar em ordem." },
      { objective: "O4", q: "Durante uma verificação diária encontra uma fuga de óleo debaixo de uma máquina. Qual é a ação certa?", options: ["Limpa e não diz nada", "Repara você mesmo o tubo com a máquina a trabalhar", "Comunica e segue a lista de verificação; deixa as pessoas autorizadas fazer a reparação", "Põe uma caixa por cima"], answer: 2, why: "Os operadores comunicam os problemas; as pessoas autorizadas reparam-nos com bloqueio e etiquetagem." },
      { objective: "O4", q: "O que é a manutenção preventiva?", options: ["Reparar uma máquina só depois de avariar", "Cuidados planeados segundo um calendário para as máquinas avariarem menos", "Limpar a sala de descanso", "Comprar fardas de reserva"], answer: 1, why: "A manutenção preventiva é um cuidado com calendário que evita avarias." },
      { objective: "O5", q: "Quer um emprego pago que inclua formação e um mentor. Onde pode procurar?", options: ["Num site de lotaria", "Numa aplicação de cupões", "No Apprenticeship Finder de apprenticeship.gov", "Num fórum de jogos"], answer: 2, why: "O Apprenticeship Finder do Departamento do Trabalho mostra vagas de aprendizagens registadas." },
      { objective: "O1", q: "No bloqueio e etiquetagem, porque tenta pôr a máquina a trabalhar depois de a trancar?", options: ["Para a aquecer", "Para testar a cor do cadeado", "Para acabar o trabalho mais depressa", "Para verificar que a energia está mesmo desligada antes de trabalhar"], answer: 3, why: "Verificar mostra que a energia está isolada; depois volta a pôr os comandos em desligado." },
      { objective: "O3", q: "A tinta está a descascar em muitas peças. Porquê? A superfície tem óleo. Porquê? O passo de lavagem foi saltado. Que resposta está mais perto de uma causa raiz?", options: ["As peças são más", "O passo de lavagem foi saltado", "A tinta está a descascar", "O cliente é exigente"], answer: 1, why: "O passo de lavagem saltado é uma causa que se pode corrigir; a tinta a descascar é só o sintoma." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 6, 7, 10, 12, 13, 15] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Lista de perigos e proteções", objective: "O1", notYet: "Menos de três perigos, ou um perigo sem proteção ou com a proteção errada.", meets: "Pelo menos três perigos de uma máquina, cada um com a proteção, o EPI ou o procedimento certo, e quando é preciso bloqueio e etiquetagem.", exceeds: "Indica os passos do bloqueio e etiquetagem por ordem e nomeia as fontes de energia da máquina." },
      { name: "Registo de medições", objective: "O2", notYet: "Limites mal calculados, ou duas ou mais decisões erradas.", meets: "Os limites estão certos e pelo menos 4 de 5 peças de prática estão bem avaliadas.", exceeds: "As 5 estão certas, com os hábitos de medição usados escritos ao lado do registo." },
      { name: "Registo de defeitos e 5 Porquês", objective: "O3", notYet: "As peças más não são separadas, ou a cadeia para no sintoma.", meets: "Uma folha de verificação, um passo para etiquetar as peças más e uns 5 Porquês que terminam numa causa que se pode corrigir.", exceeds: "Junta uma nota Planear-Executar-Verificar-Agir sobre como verificar que a correção funcionou." },
      { name: "Plano de 5S e de verificação diária", objective: "O4", notYet: "Falta um dos 5 S, ou há menos de cinco pontos de verificação.", meets: "Uma ação para cada S e pelo menos cinco pontos de verificação diária com o que comunicar.", exceeds: "Nomeia pelo menos dois desperdícios da zona e uma pequena melhoria para cada um." },
      { name: "Plano para o CPT 4.0 e para o emprego", objective: "O5", notYet: "Módulos errados, sem datas, ou uma linha de currículo que afirma uma credencial não obtida.", meets: "Nomeia os quatro módulos obrigatórios com datas-alvo a confirmar, um programa ou centro de provas, três ofertas de emprego e uma linha honesta para o currículo.", exceeds: "Inclui uma resposta de 30 segundos ensaiada e um caminho alternativo, como uma aprendizagem." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e um dossiê de preparação que cumpre a rubrica",
      "Alunos que se inscrevem numa formação para o CPT 4.0 ou fazem um primeiro módulo do CPT em 90 dias (inquérito de acompanhamento)",
      "Alunos que passam em um ou mais módulos do CPT 4.0 (declaração própria com a credencial do MSSC)",
      "Alunos contratados para empregos de produção ou aprendizagens registadas (relatórios dos parceiros e de acompanhamento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para msscusa.org, osha.gov e apprenticeship.gov",
      "Uma régua ou fita métrica, papel e caneta",
      "Opcional: um paquímetro digital e algumas peças pequenas (parafusos, anilhas) para medir com um instrutor",
      "Cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Diga desde o início e muitas vezes: este curso prepara os alunos; o MSSC emite as credenciais CPT e as competências com máquinas ensinam-se pessoalmente.",
      "Neste curso, não ponha os alunos a trabalhar com máquinas nem a praticar o bloqueio e etiquetagem em equipamento ligado. Use imagens, vídeos e peças de demonstração desligadas da corrente.",
      "Antes da sessão, verifique os preços atuais do MSSC, as opções de prova e os centros de provas locais, e partilhe qualquer apoio financeiro que o seu programa de emprego ofereça.",
      "Faça as contas da tolerância devagar no quadro; muitos alunos precisam de dois ou três exemplos resolvidos.",
      "Atenção aos alunos com menos de 18 anos: podem fazer o curso, mas muitas máquinas de fábrica são-lhes proibidas no trabalho.",
      "Avalie o dossiê de preparação com a rubrica e reveja uma linha Ainda não de cada vez."
    ]
  }
};
