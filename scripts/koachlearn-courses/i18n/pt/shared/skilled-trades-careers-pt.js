"use strict";

// Koach Learn course (Portuguese translation of shared/skilled-trades-careers.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US (US agencies and sites keep their English names); many readers are immigrants in the US.

module.exports = {
  id: "skilled-trades-careers-pt",
  lang: "pt",
  translationOf: "skilled-trades-careers",
  category: "Re-Entry",
  name: "Começar uma Carreira num Ofício Técnico",
  skills: "Comparar ofícios técnicos, Consultar salários e formação em sites oficiais, Entender aprendizagens e pré-aprendizagens, Conhecer os passos de licença e certificação, Trabalhar com ferramentas em segurança, Encontrar um programa e candidatar-se",
  outcome: "escolher um ofício técnico que combine com você, consultar o salário real e o caminho de formação em sites oficiais, encontrar uma aprendizagem ou pré-aprendizagem perto de você e fazer um plano passo a passo para se candidatar, incluindo opções de segunda oportunidade se tiver registo criminal.",
  about: [
    "Os ofícios técnicos são carreiras práticas, como eletricista, canalizador, técnico de AVAC, soldador, instalador solar, carpinteiro e motorista de camião. Muitos deixam você ganhar dinheiro enquanto aprende, sem um curso universitário de quatro anos.",
    "Este curso é para jovens a escolher um caminho, veteranos a passar para o trabalho civil, pessoas que voltam da prisão e qualquer pessoa pronta para trabalhar com as mãos. Você vai comparar ofícios, aprender como funcionam as aprendizagens e as licenças, aprender hábitos básicos de ferramentas e segurança e fazer um plano para entrar num programa.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As regras, os salários e as licenças mudam de estado para estado e com o tempo, por isso cada lição mostra o lugar oficial onde verificar."
  ],
  finalTask: "Faça um \"Plano de Início no Ofício\" de uma página para um ofício: como é o trabalho, o salário mediano e as perspetivas de emprego em bls.gov/ooh, a licença ou certificação que precisa no seu estado, dois programas de aprendizagem ou pré-aprendizagem perto de você em apprenticeship.gov ou num centro de emprego local, o equipamento de segurança e as ferramentas básicas de que vai precisar, os recursos de segunda oportunidade que se aplicam a você e os seus três primeiros passos com datas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens a escolher um caminho, veteranos a passar para o trabalho civil, pessoas que voltam da prisão e qualquer pessoa pronta para trabalhar com as mãos num ofício como eletricista, canalizador, técnico de AVAC, soldador, instalador solar, carpinteiro ou motorista de camião.",
    startingPoint: "Têm interesse em trabalho prático e podem ter experiência ligada a isso, de empregos, do serviço militar, do desporto ou de programas feitos na prisão. A maioria não conhece os salários reais dos ofícios, como funcionam as aprendizagens e as licenças, nem como encontrar um programa perto de si.",
    gap: "Os ofícios técnicos oferecem formação paga e boas carreiras sem um curso de quatro anos, mas muitas pessoas não os conhecem ou gastam dinheiro na formação errada. Os alunos precisam de escolher um ofício, verificar o salário e o caminho em sites oficiais e planear como entrar num programa, incluindo opções de segunda oportunidade se tiverem registo criminal.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Os salários, as licenças e as regras mudam de estado para estado e com o tempo; os alunos verificam em sites oficiais (bls.gov/ooh, apprenticeship.gov, conselhos estaduais de licenciamento)",
      "Aparelhos: um telefone ou um computador da biblioteca com internet",
      "Os alunos com registo criminal falam com o conselho estadual de licenciamento antes de pagar qualquer formação",
      "Tempo: lições de cerca de cinco minutos, mais tempo de pesquisa"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com sete ofícios comuns e os seus próprios interesses e limites", action: "descrever o que faz cada ofício e escolher dois que combinem com você", standard: "com uma razão para cada escolha" },
    { id: "O2", condition: "Usando o Occupational Outlook Handbook em bls.gov/ooh", action: "consultar o salário mediano, a formação habitual, as licenças necessárias e as perspetivas de emprego de um ofício", standard: "anotando o ano do valor do salário" },
    { id: "O3", condition: "Para o seu ofício preferido", action: "explicar como funcionam a aprendizagem, a pré-aprendizagem e a licença ou certificação", standard: "com a página oficial do conselho estadual encontrada" },
    { id: "O4", condition: "Para o seu ofício preferido", action: "listar o equipamento de segurança, os hábitos de segurança e as ferramentas básicas de que o trabalho precisa", standard: "comparado com a lista oficial de ferramentas de um programa" },
    { id: "O5", condition: "Se você ou alguém que ajuda tem registo criminal", action: "encontrar programas de segunda oportunidade e preparar perguntas para o conselho de licenciamento", standard: "nomeando o Federal Bonding Program e o Work Opportunity Tax Credit" },
    { id: "O6", condition: "Usando apprenticeship.gov ou um centro de emprego local", action: "encontrar dois programas perto de você e escrever os seus três primeiros passos para se candidatar", standard: "com uma data para cada passo e as datas de candidatura de cada programa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher um ofício",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que são os ofícios técnicos",
          minutes: 5,
          goal: "Descrever sete ofícios comuns e escolher dois que combinem com você.",
          text: [
            "Os eletricistas instalam e reparam fios, luzes e energia em casas e edifícios. Os canalizadores instalam e consertam canos, esquentadores e esgotos. Os técnicos de AVAC trabalham com aquecimento, ventilação, ar condicionado e refrigeração. Os soldadores unem metal com calor para edifícios, navios, oleodutos e fábricas.",
            "Os instaladores solares colocam painéis solares nos telhados e no chão e ligam-nos. Os carpinteiros constroem e reparam estruturas, pisos, escadas e armários. Os motoristas de camião com CDL transportam mercadorias pela cidade ou pelo país com uma carta de condução comercial.",
            "Pense no que combina com você. Gosta de trabalhar dentro ou fora? No alto ou no chão? Gosta de matemática e de resolver problemas? Pode ficar longe de casa durante dias, como acontece muitas vezes com os motoristas de longa distância? Gosta de consertar coisas para clientes ou de construir coisas novas? As suas respostas apontam para um ofício.",
            "Muitas competências passam de um lugar para outro. A mecânica e a logística militares, a disciplina e o trabalho em equipa do desporto e os programas de trabalho ou formação feitos na prisão (manutenção, cozinha, construção) contam todos."
          ],
          words: [["Ofício técnico", "um trabalho que precisa de formação prática especial, como eletricista ou soldador."], ["AVAC", "aquecimento, ventilação e ar condicionado (em inglês, HVAC)."], ["CDL", "carta de condução comercial dos EUA, necessária para conduzir camiões grandes e autocarros."]],
          slides: [
            { title: "Dentro dos edifícios", bullets: ["Eletricista: fios, luzes e energia", "Canalizador: canos, esquentadores, esgotos", "AVAC: aquecimento, arrefecimento, refrigeração"] },
            { title: "Construir e transportar", bullets: ["Soldador: une metal com calor", "Instalador solar: coloca e liga painéis", "Carpinteiro: estruturas, pisos, escadas, armários", "Motorista com CDL: transporta mercadorias de camião"] },
            { title: "O que combina com você?", bullets: ["Dentro ou fora? No alto ou no chão?", "Matemática e resolver problemas?", "Em casa todas as noites, ou fora durante dias?"] },
            { title: "As suas competências contam", bullets: ["Mecânica e logística militares", "Disciplina e trabalho em equipa do desporto", "Programas de trabalho e formação na prisão"] }
          ],
          tryIt: "Responda por escrito às perguntas \"O que combina com você?\". Depois escolha os dois ofícios que melhor combinam com as suas respostas e escreva uma frase para cada um a dizer porquê.",
          youCanNow: "descrever ofícios técnicos comuns e escolher dois que combinem com a sua forma de trabalhar.",
          quickCheck: [
            { objective: "O1", q: "Com que trabalha principalmente um eletricista?", options: ["Sistemas de fios, energia e iluminação", "Canos de água e esgotos", "Aparelhos de aquecimento e arrefecimento", "Unir metal com calor"], answer: 0, why: "Os eletricistas instalam e consertam fios, energia e iluminação." },
            { objective: "O1", q: "Você gosta de resolver problemas, não se importa com espaços apertados e quer trabalho perto de casa. Como escolheria?", options: ["Escolher o ofício que um amigo escolheu", "Escolher o que tem o nome mais bonito", "Comparar os ofícios com as suas respostas e escolher dois que combinem", "Escolher camiões de longa distância porque paga"], answer: 2, why: "Comparar os ofícios com os seus próprios interesses e limites dá a melhor escolha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Verificar salários e formação em sites oficiais",
          minutes: 5,
          goal: "Consultar o salário, a formação e as perspetivas de emprego de um ofício no Occupational Outlook Handbook.",
          text: [
            "Não confie nos valores de salário de anúncios ou das redes sociais. O Bureau of Labor Statistics dos EUA (o serviço de estatísticas do trabalho) publica o Occupational Outlook Handbook (guia das profissões) em bls.gov/ooh. É gratuito e é atualizado com regularidade.",
            "Cada profissão tem uma ficha com separadores. \"Pay\" (salário) mostra o salário mediano: metade dos trabalhadores ganha mais e metade ganha menos. \"How to Become One\" (como chegar lá) mostra a formação, como uma aprendizagem, e se é preciso licença. \"Job Outlook\" (perspetivas) mostra se se espera que o número de empregos cresça. \"State and Area Data\" (dados por estado e área) mostra o salário onde você vive.",
            "Por exemplo, a ficha dos eletricistas diz que a maioria dos eletricistas aprende numa aprendizagem de 4 ou 5 anos e que a maioria dos estados exige que os eletricistas tenham licença. O salário inicial de um aprendiz é mais baixo do que o mediano e normalmente sobe à medida que ganha competências.",
            "Os assistentes de IA podem ajudar a explicar as palavras destas páginas, mas tire os números da página oficial, não da IA."
          ],
          steps: ["Vá a bls.gov/ooh.", "Procure o ofício, por exemplo \"electricians\" (eletricistas) ou \"plumbers\" (canalizadores).", "Abra a ficha e leia o separador Pay: anote o salário mediano e o ano.", "Leia How to Become One: anote a formação e a licença.", "Leia Job Outlook e State and Area Data."],
          words: [["Salário mediano", "o salário do meio: metade dos trabalhadores ganha mais e metade ganha menos."], ["Perspetivas de emprego", "se se espera que o número de empregos numa área cresça ou diminua."], ["BLS", "o Bureau of Labor Statistics dos EUA, o serviço do governo que recolhe dados sobre empregos e salários."]],
          slides: [
            { title: "Use o guia oficial", bullets: ["bls.gov/ooh: gratuito e atualizado com regularidade", "Não anúncios nem publicações nas redes sociais"] },
            { title: "Leia cada ficha", bullets: ["Pay: o salário mediano", "How to Become One: formação e licença", "Job Outlook e State and Area Data"] },
            { title: "Exemplo: eletricistas", bullets: ["A maioria aprende numa aprendizagem de 4 ou 5 anos", "A maioria dos estados exige licença", "O salário do aprendiz costuma subir com a competência"] },
            { title: "A IA explica, mas não dá os números", bullets: ["Peça à IA para explicar palavras difíceis", "Tire os números da página oficial"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Occupational Outlook Handbook (guia das profissões)", url: "https://www.bls.gov/ooh/" },
            { name: "Occupational Outlook Handbook: Electricians (eletricistas)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Procure os seus dois ofícios da Lição 1 em bls.gov/ooh. Para cada um, escreva o salário mediano e o ano a que se refere, a formação habitual, se é preciso licença e as perspetivas de emprego.",
          youCanNow: "encontrar o salário mediano real, o caminho de formação e as perspetivas de emprego de um ofício no guia oficial.",
          quickCheck: [
            { objective: "O2", q: "O que lhe dizem as perspetivas de emprego?", options: ["A cor do uniforme", "Quão depressa se espera que os empregos do ofício cresçam", "O salário de um só trabalhador", "Onde fica a escola de formação"], answer: 1, why: "As perspetivas de emprego mostram se se espera que o número de empregos cresça ou diminua." },
            { objective: "O2", q: "Um vídeo diz que todos os canalizadores ganham muito dinheiro. O que faria?", options: ["Acreditar porque é popular", "Perguntar nos comentários do vídeo", "Escolher canalização logo", "Verificar o salário mediano e o ano em bls.gov/ooh"], answer: 3, why: "Os dados oficiais de salários em bls.gov/ooh são o lugar onde verificar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Aprendizagens, pré-aprendizagens e licenças",
          minutes: 6,
          goal: "Explicar como funcionam as aprendizagens, as pré-aprendizagens e as licenças no seu ofício.",
          text: [
            "Uma Registered Apprenticeship (aprendizagem registada) é um emprego pago com formação. O site apprenticeship.gov, do Departamento do Trabalho dos EUA, diz que os aprendizes ganham experiência de trabalho paga com um mentor, um salário que sobe à medida que as suas competências crescem e, no fim, um certificado reconhecido em todo o país. Você aprende no trabalho e em aulas.",
            "Uma pré-aprendizagem prepara você para entrar numa aprendizagem. Pode durar de algumas semanas a alguns meses e pode ser paga ou não. Muitas vezes inclui matemática básica, uso de ferramentas, segurança e preparação para o trabalho, e pode ajudar você a ser aceite. Muitos programas de reintegração e escolas comunitárias (community colleges) organizam pré-aprendizagens.",
            "As licenças e os certificados mudam de ofício para ofício e de estado para estado. Os eletricistas e os canalizadores normalmente precisam de uma licença estadual ou local depois da formação. Os técnicos de AVAC que lidam com fluidos refrigerantes têm de ter a certificação EPA Section 608. Os novos motoristas de camião têm de terminar a formação inicial de condutor com um formador inscrito no registo federal Training Provider Registry antes de fazer os exames da CDL. Os soldadores e os instaladores solares muitas vezes obtêm certificações do setor que os empregadores pedem.",
            "Veteranos: o VA (serviço dos veteranos) diz que os benefícios do GI Bill podem ser usados em muitas aprendizagens e formações no trabalho, e o programa Helmets to Hardhats liga veteranos a aprendizagens na construção."
          ],
          words: [["Registered Apprenticeship (aprendizagem registada)", "um emprego pago com formação, aprovado pelo Departamento do Trabalho ou por um estado, que termina com um certificado reconhecido."], ["Pré-aprendizagem", "um programa curto que prepara você para entrar numa aprendizagem."], ["Licença", "autorização oficial de um estado ou de uma cidade para fazer certo trabalho, como trabalho elétrico."], ["Certificação", "prova de que passou num exame ou numa formação de uma competência."]],
          slides: [
            { title: "Aprendizagem registada", bullets: ["Um emprego pago com um mentor", "O salário sobe à medida que as competências crescem", "Um certificado reconhecido em todo o país"] },
            { title: "Pré-aprendizagem", bullets: ["De algumas semanas a alguns meses", "Matemática, ferramentas, segurança, preparação para o trabalho", "Ajuda você a entrar numa aprendizagem"] },
            { title: "Licenças e certificados", bullets: ["Eletricistas, canalizadores: licença estadual ou local", "AVAC: EPA Section 608 para refrigerantes", "CDL: formação inicial com um formador registado"] },
            { title: "Para veteranos", bullets: ["O GI Bill pode pagar muitas aprendizagens", "Helmets to Hardhats: carreiras na construção"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Career seekers (para quem procura uma carreira)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: What is a pre-apprenticeship? (o que é uma pré-aprendizagem?)", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "EPA: Section 608 technician certification (certificação de técnicos)", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "FMCSA Training Provider Registry: quem precisa da formação inicial de condutor", url: "https://tpr.fmcsa.dot.gov/Drivers/Applicability" },
            { name: "VA: On-the-job training and apprenticeships (formação no trabalho e aprendizagens)", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Para o seu ofício preferido, escreva: normalmente aprende-se numa aprendizagem? Que licença ou certificação precisa? Depois pesquise \"[o seu estado] [ofício] license\" e encontre a página oficial do conselho estadual (procure um endereço que termine em .gov).",
          youCanNow: "explicar como funcionam as aprendizagens, as pré-aprendizagens e as licenças e encontrar a página de licenças do seu estado.",
          quickCheck: [
            { objective: "O3", q: "Em que é que uma aprendizagem é diferente de uma aula normal?", options: ["Paga mais", "Não aprende nenhuma competência", "Trabalha e recebe um salário enquanto aprende", "Nunca leva a um certificado"], answer: 2, why: "Os aprendizes são pagos para trabalhar enquanto aprendem o ofício." },
            { objective: "O3", q: "Quer saber que licença o seu ofício precisa no seu estado. O que faria?", options: ["Encontrar a página oficial do conselho estadual que termina em .gov", "Perguntar a um grupo qualquer nas redes sociais", "Pensar que não é preciso licença", "Comprar o primeiro curso online que vir"], answer: 0, why: "A página oficial do conselho estadual tem as regras reais das licenças." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher um ofício",
        questions: [
          { objective: "O1", q: "Que ofício trabalha com aquecimento, arrefecimento e refrigeração?", options: ["Carpinteiro", "Soldador", "Técnico de AVAC", "Instalador solar"], answer: 2, why: "AVAC quer dizer aquecimento, ventilação e ar condicionado." },
          { objective: "O2", q: "Qual é o melhor lugar para consultar o salário real de um ofício?", options: ["Um anúncio nas redes sociais", "bls.gov/ooh", "O palpite de um amigo", "Qualquer resposta de uma IA"], answer: 1, why: "O Occupational Outlook Handbook é a fonte oficial e gratuita." },
          { objective: "O2", q: "O que quer dizer \"salário mediano\"?", options: ["O salário mais alto do ofício", "O salário inicial no primeiro dia", "O salário depois dos impostos", "O do meio: metade ganha mais e metade ganha menos"], answer: 3, why: "A mediana é o valor do meio." },
          { objective: "O3", q: "O que é uma Registered Apprenticeship (aprendizagem registada)?", options: ["Um emprego pago com formação que termina com um certificado reconhecido", "Um estágio sem salário", "Um curso universitário de quatro anos", "Uma só aula de segurança"], answer: 0, why: "Os aprendizes ganham enquanto aprendem e recebem um certificado." },
          { objective: "O3", q: "Um técnico de AVAC vai lidar com fluidos refrigerantes. De que precisa?", options: ["Uma CDL", "A certificação EPA Section 608", "Um certificado de soldadura", "De nada"], answer: 1, why: "A EPA exige que os técnicos que possam libertar refrigerantes sejam certificados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Entrar e trabalhar em segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ferramentas e segurança no trabalho",
          minutes: 5,
          goal: "Nomear o equipamento de segurança e os hábitos básicos que todos os ofícios esperam.",
          text: [
            "Todos os ofícios esperam que você trabalhe em segurança desde o primeiro dia. O equipamento de proteção individual (EPI) comum inclui óculos de segurança, capacete, luvas, botas com biqueira de aço ou de segurança, proteção auditiva e coletes refletores. Os soldadores também precisam de uma máscara de soldar e de roupa resistente ao fogo. Quem trabalha em telhados precisa de proteção contra quedas.",
            "Hábitos básicos: verifique as ferramentas antes de as usar; mantenha a sua área limpa; nunca tire a proteção de uma máquina; use a escada certa e mantenha três pontos de apoio; e levante pesos com as pernas, não com as costas. Os eletricistas e os trabalhadores de manutenção têm de seguir as regras de bloqueio e etiquetagem (lockout/tagout), que mantêm as máquinas e a energia desligadas enquanto alguém trabalha nelas.",
            "Muitos empregadores e sindicatos pedem aos novos trabalhadores um curso de segurança OSHA de 10 horas. É um cartão de formação, não uma licença, mas mostra que conhece o básico.",
            "O seu empregador tem de fornecer o equipamento de segurança e a formação obrigatórios. Pergunte ao seu programa que ferramentas tem de comprar você mesmo; os aprendizes muitas vezes começam com um pequeno conjunto de ferramentas manuais, como uma fita métrica, um x-ato, um alicate, chaves de fendas e uma bolsa de ferramentas."
          ],
          steps: ["Use o EPI que o trabalho exige antes de começar.", "Verifique se as ferramentas e os cabos têm danos.", "Mantenha as proteções nas máquinas e a área de trabalho limpa.", "Use as escadas com três pontos de apoio.", "Pergunte antes de fazer qualquer coisa para a qual não teve formação."],
          words: [["EPI", "equipamento de proteção individual (em inglês, PPE): coisas como óculos, luvas e capacetes que protegem você."], ["Bloqueio e etiquetagem (lockout/tagout)", "passos que mantêm uma máquina ou a energia desligada e trancada enquanto alguém trabalha nela."], ["OSHA 10", "um curso básico de segurança de 10 horas para trabalhadores, com um cartão de conclusão. A OSHA é o serviço de segurança no trabalho dos EUA."]],
          slides: [
            { title: "EPI comum", bullets: ["Óculos de segurança, capacete, luvas", "Botas de segurança, proteção auditiva", "Máscara de soldar; proteção contra quedas no alto"] },
            { title: "Hábitos seguros", bullets: ["Verifique as ferramentas antes de usar", "Nunca tire as proteções das máquinas", "Três pontos de apoio nas escadas", "Levante com as pernas"] },
            { title: "Bloqueio e etiquetagem, e OSHA 10", bullets: ["Energia desligada e trancada antes do trabalho", "OSHA 10: um cartão básico de segurança que muitos empregadores pedem"] },
            { title: "O seu kit inicial", bullets: ["O empregador fornece o equipamento de segurança obrigatório", "Pergunte que ferramentas manuais tem de levar"] }
          ],
          tryIt: "Para o seu ofício preferido, faça a lista do EPI que usaria e de cinco ferramentas manuais de que provavelmente precisaria. Depois peça a um programa perto de você, ou veja no site dele, a lista oficial de ferramentas.",
          youCanNow: "nomear o equipamento de segurança e os hábitos que o seu ofício espera e preparar uma lista de ferramentas iniciais.",
          quickCheck: [
            { objective: "O4", q: "Qual é um hábito básico de segurança nos ofícios?", options: ["Tirar as proteções para trabalhar mais depressa", "Usar o EPI certo para a tarefa", "Faltar à formação de segurança", "Trabalhar com a energia ligada para poupar tempo"], answer: 1, why: "Usar o EPI certo protege você dos perigos comuns." },
            { objective: "O4", q: "O seu programa envia uma lista de ferramentas iniciais, mas uma loja sugere um kit caro. O que faria?", options: ["Comprar o kit caro", "Não comprar nenhuma ferramenta", "Pegar em ferramentas emprestadas sem pedir", "Seguir a lista oficial de ferramentas do programa"], answer: 3, why: "A lista do programa diz-lhe o que realmente precisa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Opções de segunda oportunidade se tiver registo criminal",
          minutes: 5,
          goal: "Encontrar programas e incentivos de segunda oportunidade e planear como lidar com um registo criminal nos ofícios.",
          text: [
            "Um registo criminal não tem de bloquear uma carreira nos ofícios. Muitos programas de aprendizagem, sindicatos e empregadores contratam pessoas com registo criminal, e muitas organizações de reintegração têm programas de pré-aprendizagem para pessoas que voltam para casa.",
            "Duas ferramentas federais ajudam os empregadores a dizer sim. O Federal Bonding Program pode dar ao empregador uma garantia (bond) gratuita durante os primeiros seis meses do emprego, sem custo para você nem para o empregador, como explica a EEOC (comissão para a igualdade no emprego). O Work Opportunity Tax Credit dá aos empregadores um crédito de impostos por contratarem certas pessoas, incluindo um \"qualified ex-felon\" (pessoa condenada por crime grave que cumpre as condições) contratado até um ano depois da condenação ou da saída da prisão. O empregador e o candidato preenchem o formulário IRS Form 8850 até ao dia da oferta de emprego, por isso diga aos empregadores que pode ter direito.",
            "As licenças e alguns empregos verificam o registo criminal. Muitos conselhos estaduais de licenciamento analisam cada caso. Antes de gastar dinheiro em formação, contacte o conselho do seu ofício e pergunte como analisa os registos criminais. Algumas autorizações especiais da CDL, como a de materiais perigosos, precisam de uma verificação federal de antecedentes.",
            "Pergunte a um serviço de apoio jurídico gratuito ou ao seu programa de reintegração se o seu registo pode ser selado ou apagado no seu estado, e treine uma resposta curta e honesta sobre o seu registo para as entrevistas."
          ],
          steps: ["Procure programas de pré-aprendizagem de reintegração ou de segunda oportunidade perto de você.", "Pergunte aos empregadores se usam o Federal Bonding Program ou o Work Opportunity Tax Credit.", "Contacte o conselho estadual de licenciamento do seu ofício e pergunte como analisa os registos criminais.", "Pergunte ao apoio jurídico sobre selar ou apagar o registo.", "Treine uma resposta curta e honesta sobre o seu registo."],
          words: [["Federal Bonding Program", "um programa gratuito do Departamento do Trabalho dos EUA que segura os empregadores nos primeiros meses quando contratam pessoas com registo criminal ou outras barreiras."], ["Work Opportunity Tax Credit", "um crédito de impostos federal que os empregadores podem receber por contratarem pessoas de certos grupos, incluindo algumas pessoas condenadas por crimes graves."], ["Conselho de licenciamento", "o serviço do estado que emite e analisa as licenças dos ofícios."]],
          slides: [
            { title: "Um registo criminal não é o fim", bullets: ["Muitos programas, sindicatos e empregadores contratam pessoas com registo", "Procure programas de pré-aprendizagem de reintegração"] },
            { title: "Ferramentas que ajudam a dizer sim", bullets: ["Federal Bonding Program: garantia gratuita durante 6 meses", "Work Opportunity Tax Credit: crédito de impostos para empregadores", "O Form 8850 é feito até ao dia da oferta de emprego"] },
            { title: "Verifique antes de pagar a formação", bullets: ["Pergunte ao conselho como analisa os registos", "Algumas autorizações da CDL precisam de verificação de antecedentes"] },
            { title: "Próximos passos", bullets: ["Pergunte ao apoio jurídico sobre selar ou apagar", "Treine uma resposta curta e honesta"] }
          ],
          sources: [
            { name: "EEOC: Arrest and conviction records (registos de detenção e condenação; fala do Federal Bonding Program)", url: "https://www.eeoc.gov/arrestandconviction" },
            { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "Departamento do Trabalho dos EUA: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }
          ],
          tryIt: "Escreva três perguntas para fazer ao conselho estadual de licenciamento do seu ofício sobre como analisa os registos criminais. Depois escreva duas frases que poderia dizer a um empregador sobre o Federal Bonding Program e o Work Opportunity Tax Credit. (Se não tem registo criminal, faça isto para um amigo ou como prática.)",
          youCanNow: "nomear ferramentas de segunda oportunidade para os ofícios e verificar como um conselho de licenciamento analisa os registos antes de pagar a formação.",
          quickCheck: [
            { objective: "O5", q: "O que é o Work Opportunity Tax Credit?", options: ["Um empréstimo para trabalhadores", "Um crédito de impostos que os empregadores podem receber por contratarem pessoas de certos grupos", "Um kit de ferramentas gratuito", "Uma licença de ofício"], answer: 1, why: "O WOTC dá aos empregadores um crédito de impostos por contratarem pessoas de certos grupos, incluindo algumas pessoas com registo criminal." },
            { objective: "O5", q: "Você tem registo criminal e quer uma licença de ofício. O que faria antes de pagar a formação?", options: ["Perguntar ao conselho estadual de licenciamento como analisa os registos", "Esconder o registo na candidatura", "Pagar a formação e esperar pelo melhor", "Desistir dos ofícios"], answer: 0, why: "Muitos conselhos analisam cada caso, por isso pergunte primeiro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Encontrar um programa e candidatar-se",
          minutes: 5,
          goal: "Encontrar dois programas perto de você e fazer um plano para se candidatar.",
          text: [
            "Comece em apprenticeship.gov. O seu Apprenticeship Job Finder (pesquisa de aprendizagens) deixa pesquisar por carreira e por local e candidatar-se diretamente ao empregador ou ao programa. Se não encontrar nada, o Partner Finder (pesquisa de parceiros) mostra organizações que aceitam candidaturas de novos aprendizes.",
            "Outros lugares onde procurar: o American Job Center da sua zona (ajuda gratuita para procurar emprego e às vezes dinheiro para formação), as escolas comunitárias, os centros de formação dos sindicatos de cada ofício, os programas de reintegração e os programas para veteranos.",
            "Os programas muitas vezes pedem um diploma do ensino secundário ou o GED, um documento de identificação válido, uma carta de condução para alguns ofícios, um teste de matemática básica, um teste de drogas e uma entrevista. Informe-se sobre os passos e as datas de candidatura, porque algumas aprendizagens só aceitam candidaturas em certas alturas do ano.",
            "Prepare-se: reveja a matemática básica (frações, medições, álgebra simples), junte os seus documentos e treine respostas de entrevista sobre segurança, responsabilidade e porque quer o ofício."
          ],
          steps: ["Pesquise em apprenticeship.gov por ofício e local.", "Anote dois programas, os seus requisitos e as suas datas de candidatura.", "Contacte o American Job Center da sua zona ou um centro de formação de um sindicato.", "Junte os seus documentos: identificação, diploma ou GED, carta de condução se for preciso.", "Treine a matemática básica e as suas respostas de entrevista.", "Candidate-se e ponha a data de seguimento no seu calendário."],
          words: [["American Job Center", "um serviço gratuito, pago pelo governo dos EUA, que ajuda as pessoas a encontrar emprego e formação."], ["GED", "um exame que dá um certificado equivalente ao ensino secundário nos EUA."], ["Centro de formação do sindicato", "uma escola gerida por um sindicato do ofício e por empregadores para formar aprendizes."]],
          slides: [
            { title: "Comece em apprenticeship.gov", bullets: ["Apprenticeship Job Finder: pesquise por carreira e local", "Partner Finder: programas que aceitam candidaturas"] },
            { title: "Outros lugares onde procurar", bullets: ["American Job Centers", "Escolas comunitárias e centros de formação dos sindicatos", "Programas de reintegração e para veteranos"] },
            { title: "O que os programas costumam pedir", bullets: ["Diploma ou GED, identificação, às vezes carta de condução", "Teste de matemática, teste de drogas, entrevista", "Datas de candidatura: alguns só abrem em certas alturas"] },
            { title: "Prepare-se", bullets: ["Treine frações e medições", "Junte os documentos", "Treine as respostas de entrevista"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (pesquisa de aprendizagens)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Find an American Job Center (encontrar um American Job Center)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Tarefa final: faça o seu Plano de Início no Ofício de uma página. Inclua o ofício, o salário mediano e as perspetivas em bls.gov/ooh, a licença ou certificação, dois programas perto de você, o seu equipamento de segurança e ferramentas iniciais, os recursos de segunda oportunidade e os seus três primeiros passos com datas.",
          youCanNow: "encontrar programas de aprendizagem e pré-aprendizagem perto de você e fazer um plano com datas para se candidatar.",
          quickCheck: [
            { objective: "O6", q: "Porque é que deve anotar as datas de candidatura de cada programa?", options: ["Alguns programas só aceitam candidaturas em certas alturas", "Os programas nunca fecham", "As datas não importam", "Para mostrar aos amigos"], answer: 0, why: "Perder o prazo de candidatura pode significar esperar meses." },
            { objective: "O6", q: "Um programa perto de você tem um teste de entrada com medições e frações. O que faria?", options: ["Faltar ao teste", "Esperar que seja fácil", "Treinar frações, medições e álgebra simples antes do teste", "Candidatar-se a outro ofício"], answer: 2, why: "Treinar a matemática antes ajuda a passar nos testes de entrada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Entrar e trabalhar em segurança",
        questions: [
          { objective: "O4", q: "O que quer dizer EPI?", options: ["Exame Prático de Instalação", "Equipamento de proteção individual", "Escola Profissional Industrial", "Energia Para Instalações"], answer: 1, why: "O EPI é equipamento como óculos, luvas e capacetes que protege você." },
          { objective: "O4", q: "O que é o bloqueio e etiquetagem (lockout/tagout)?", options: ["Trancar a caixa de ferramentas à noite", "Uma votação do sindicato", "Manter uma máquina ou a energia desligada e trancada enquanto alguém trabalha nela", "Uma forma de marcar a saída do trabalho"], answer: 2, why: "Impede que uma máquina arranque enquanto alguém está a trabalhar nela." },
          { objective: "O5", q: "O que pode o Federal Bonding Program dar a um empregador que contrata alguém com registo criminal?", options: ["Uma garantia gratuita durante os primeiros seis meses", "Um camião grátis", "Uma licença para o trabalhador", "Nada"], answer: 0, why: "A garantia é gratuita para o trabalhador e para o empregador e cobre os primeiros seis meses." },
          { objective: "O5", q: "Você tem registo criminal e quer uma licença de eletricista. O que deve fazer antes de pagar a formação?", options: ["Esconder o registo", "Desistir", "Pagar primeiro e perguntar depois", "Perguntar ao conselho estadual de licenciamento como analisa os registos"], answer: 3, why: "Os conselhos muitas vezes analisam cada caso; perguntar primeiro protege o seu tempo e o seu dinheiro." },
          { objective: "O6", q: "Onde pode pesquisar aprendizagens por carreira e por local?", options: ["Só num grupo das redes sociais", "No Apprenticeship Job Finder em apprenticeship.gov", "No site do IRS", "Num anúncio na televisão"], answer: 1, why: "É a ferramenta oficial de pesquisa do Departamento do Trabalho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Começar uma Carreira num Ofício Técnico",
    questions: [
      { objective: "O1", q: "Que ofício une metal com calor?", options: ["Canalizador", "Soldador", "Carpinteiro", "Técnico de AVAC"], answer: 1, why: "Os soldadores unem metal com calor." },
      { objective: "O1", q: "O que lhe permite fazer uma CDL?", options: ["Instalar fios elétricos", "Consertar canos", "Conduzir camiões grandes e autocarros", "Soldar aço"], answer: 2, why: "É preciso uma carta de condução comercial para camiões grandes e autocarros." },
      { objective: "O1", q: "Você detesta alturas e quer estar em casa todas as noites. O que provavelmente não combina com você?", options: ["Conduzir camiões de longa distância e instalar painéis solares em telhados", "Reparações de canalização dentro de casa", "Soldadura numa oficina", "Carpintaria de armários"], answer: 0, why: "A condução de longa distância deixa você fora durante dias, e o trabalho nos telhados é no alto." },
      { objective: "O1", q: "Que experiência pode contar para uma carreira nos ofícios?", options: ["Só empregos civis pagos", "Nada antes dos 25 anos", "Só aulas na universidade", "Mecânica militar, trabalho em equipa no desporto e programas de formação feitos na prisão"], answer: 3, why: "As competências práticas e a disciplina passam de muitos lugares." },
      { objective: "O2", q: "Que site é a fonte oficial e gratuita sobre salários e perspetivas dos ofícios?", options: ["bls.gov/ooh", "Um anúncio de emprego", "Um comentário num vídeo", "Uma conversa com um amigo"], answer: 0, why: "O Bureau of Labor Statistics publica o Occupational Outlook Handbook." },
      { objective: "O2", q: "Numa ficha do guia, que separador mostra a formação de que precisa?", options: ["Pay (salário)", "Job Outlook (perspetivas)", "How to Become One (como chegar lá)", "Similar Occupations (profissões parecidas)"], answer: 2, why: "How to Become One descreve a escolaridade, a formação e as licenças." },
      { objective: "O2", q: "Um assistente de IA dá-lhe um valor de salário para soldadores. O que deve fazer?", options: ["Confiar nele", "Publicá-lo na internet", "Usá-lo no seu plano tal como está", "Verificar o número em bls.gov/ooh"], answer: 3, why: "Tire os números da página oficial; a IA pode estar errada ou desatualizada." },
      { objective: "O3", q: "Segundo o guia, a maioria dos eletricistas aprende o ofício através de:", options: ["Uma aula de fim de semana", "Uma aprendizagem de 4 ou 5 anos", "Só vídeos na internet", "Um curso universitário de quatro anos"], answer: 1, why: "A ficha do BLS diz que a maioria aprende numa aprendizagem de 4 ou 5 anos." },
      { objective: "O3", q: "Como são normalmente pagos os aprendizes?", options: ["Pagam para trabalhar", "Nunca", "Com um salário que sobe à medida que as competências crescem", "Só depois de terminarem"], answer: 2, why: "Os aprendizes ganham enquanto aprendem, com aumentos de salário." },
      { objective: "O3", q: "O que é uma pré-aprendizagem?", options: ["Um programa curto que ajuda você a entrar numa aprendizagem", "Uma licença", "Um formulário de impostos", "Uma quota do sindicato"], answer: 0, why: "Prepara você com o básico, como matemática, ferramentas e segurança." },
      { objective: "O3", q: "Um novo motorista de camião quer uma CDL de Classe A. Antes dos exames tem de:", options: ["Comprar um camião", "Terminar a formação inicial de condutor com um formador registado", "Obter um cartão EPA 608", "Fazer um exame de soldadura"], answer: 1, why: "As regras federais exigem formação com um formador inscrito no Training Provider Registry." },
      { objective: "O3", q: "Quem pode muitas vezes usar os benefícios do GI Bill em aprendizagens?", options: ["Só militares no ativo", "Ninguém", "Só pessoas com mais de 65 anos", "Muitos veteranos"], answer: 3, why: "O VA diz que os benefícios do GI Bill podem pagar muitas aprendizagens e formações no trabalho." },
      { objective: "O4", q: "O que é EPI?", options: ["Uma fita métrica", "Óculos de segurança", "Um recibo de salário", "Um currículo"], answer: 1, why: "Os óculos de segurança protegem os olhos; são equipamento de proteção individual." },
      { objective: "O4", q: "A proteção de uma rebarbadora está a atrapalhar. Você deve:", options: ["Manter a proteção e pedir ajuda se o trabalho precisar de outra ferramenta", "Tirar a proteção", "Segurar o disco com a mão", "Trabalhar mais depressa"], answer: 0, why: "Tirar as proteções causa ferimentos graves." },
      { objective: "O4", q: "O que é o OSHA 10?", options: ["Uma licença para trabalhar como eletricista", "Uma autorização especial da CDL", "Um curso básico de segurança de 10 horas com um cartão de conclusão", "Um crédito de impostos"], answer: 2, why: "É formação de segurança, não uma licença." },
      { objective: "O5", q: "Quem preenche o IRS Form 8850 para o Work Opportunity Tax Credit, e quando?", options: ["Só o trabalhador, depois de um ano", "O estado, no fim do ano", "Ninguém; é automático", "O empregador e o candidato, até ao dia da oferta de emprego"], answer: 3, why: "O IRS diz que o formulário é preenchido até ao dia da oferta de emprego." },
      { objective: "O5", q: "Muitos conselhos estaduais de licenciamento analisam os registos criminais:", options: ["Nunca", "Caso a caso", "Só para canalizadores", "Só pela internet"], answer: 1, why: "Pergunte ao conselho como analisa os registos antes de pagar a formação." },
      { objective: "O6", q: "Que lugares podem ajudar você a encontrar um programa de ofícios?", options: ["Só anúncios privados", "Só uma lotaria", "American Job Centers, escolas comunitárias, centros de formação dos sindicatos e programas de reintegração", "Nenhum; tem de esperar que o chamem"], answer: 2, why: "São lugares comuns, gratuitos ou baratos, para começar." },
      { objective: "O6", q: "Algumas aprendizagens só aceitam candidaturas em certas alturas. Por isso, deve:", options: ["Anotar as datas de candidatura de cada programa", "Candidatar-se quando se lembrar", "Ignorar os programas com datas", "Candidatar-se só no verão"], answer: 0, why: "Saber as datas evita que perca o prazo." },
      { objective: "O6", q: "Que matemática vale mais a pena treinar antes de um teste de entrada nos ofícios?", options: ["Cálculo", "Frações, medições e álgebra simples", "Teoria da estatística", "Nunca se usa matemática"], answer: 1, why: "Os ofícios usam frações, medições e álgebra básica todos os dias." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      2,
      4,
      6,
      8,
      9,
      12,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Ofício e escolha",
        objective: "O1",
        notYet: "Nenhum ofício claro, ou nenhuma ideia de como é o trabalho.",
        meets: "Um ofício com uma descrição curta do trabalho e porque combina com você.",
        exceeds: "Compara-o com um segundo ofício e explica a escolha."
      },
      {
        name: "Salário e perspetivas",
        objective: "O2",
        notYet: "Falta o salário, vem de uma fonte não oficial ou não tem ano.",
        meets: "Salário mediano com o ano e as perspetivas de emprego de bls.gov/ooh.",
        exceeds: "Também indica a formação habitual segundo o guia."
      },
      {
        name: "Licença e programas",
        objective: "O3",
        notYet: "A licença não foi verificada, ou há menos de dois programas.",
        meets: "A licença ou certificação da página oficial do estado e dois programas perto de você.",
        exceeds: "Inclui as datas de candidatura e os requisitos de cada programa."
      },
      {
        name: "Equipamento de segurança e ferramentas",
        objective: "O4",
        notYet: "Falta o EPI ou as ferramentas.",
        meets: "Lista o EPI e as ferramentas iniciais do ofício.",
        exceeds: "Comparado com a lista oficial de ferramentas de um programa."
      },
      {
        name: "Recursos de segunda oportunidade",
        objective: "O5",
        notYet: "Faltam os recursos quando se aplicam.",
        meets: "Lista os recursos de segunda oportunidade que se aplicam, ou indica que nenhum se aplica.",
        exceeds: "Inclui perguntas para o conselho de licenciamento e o que dizer a um empregador."
      },
      {
        name: "Três primeiros passos",
        objective: "O6",
        notYet: "Os passos são vagos ou não têm datas.",
        meets: "Três passos claros com datas.",
        exceeds: "O primeiro passo já está feito."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que se candidatam a uma pré-aprendizagem, aprendizagem ou programa de ofício no prazo de 60 dias (inquérito de seguimento)",
      "Alunos que começam um programa de ofício ou um emprego num ofício no prazo de 6 meses",
      "Alunos que contactam um conselho estadual de licenciamento, um American Job Center ou um centro de formação de um sindicato no prazo de 30 dias",
      "Alunos que começam outro curso de ofícios da Koach Learn no prazo de 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Sites oficiais: bls.gov/ooh, apprenticeship.gov e o conselho de licenciamento do seu estado",
      "Papel e caneta ou um documento para o Plano de Início no Ofício",
      "Cerca de 60 minutos para as lições e as verificações, mais tempo de pesquisa"
    ],
    facilitatorNotes: [
      "Convide um centro de formação de um sindicato, uma escola comunitária ou um programa de pré-aprendizagem da zona para falar com o grupo.",
      "Ajude os alunos a usar bls.gov/ooh e apprenticeship.gov ao vivo na aula; os salários e os programas mudam.",
      "Com os alunos que têm registo criminal, insista em verificar com o conselho estadual de licenciamento antes de pagar qualquer formação.",
      "Ajude os veteranos a verificar os benefícios do GI Bill para aprendizagens nas fontes oficiais do VA.",
      "Avalie o Plano de Início no Ofício com a grelha de avaliação e dê comentários sobre uma linha em Ainda não de cada vez."
    ]
  }
};
