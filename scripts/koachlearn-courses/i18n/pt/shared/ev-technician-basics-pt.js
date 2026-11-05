"use strict";

// Koach Learn course (Portuguese translation of shared/ev-technician-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US names (ASE, OSHA, EVITP, American Job Centers) are kept, with a short explanation.

module.exports = {
  id: "ev-technician-basics-pt",
  lang: "pt",
  translationOf: "ev-technician-basics",
  category: "Workforce Development",
  name: "Noções Básicas de Técnico de Veículos Elétricos (VE)",
  skills: "Nomear as peças de um VE, Seguir as regras de segurança de alta tensão, Fazer contas de carregamento, Planear a manutenção de baixa tensão de um VE, Planear um percurso de certificação ASE",
  outcome: "explicar como funciona um veículo elétrico, seguir as regras de segurança de alta tensão que um novo trabalhador de oficina deve cumprir, calcular tempos de carregamento de prática, planear a manutenção do dia a dia de que um VE precisa e escrever o seu próprio plano com datas rumo à certificação ASE e ao trabalho de técnico de VE.",
  about: [
    "Todos os anos há mais veículos elétricos e híbridos na estrada, e as oficinas precisam de técnicos que os entendam. Este curso é para quem procura emprego, antigos militares, jovens adultos, pessoas que já reparam carros e qualquer pessoa curiosa sobre o trabalho com VE.",
    "Você vai aprender as peças principais de um VE, os perigos da alta tensão e as regras que o protegem, como funciona o carregamento, que tarefas de manutenção os VE ainda precisam e o verdadeiro percurso de certificação: os testes ASE A6 e A8 e depois o teste L3 de veículos híbridos e elétricos. Este curso prepara você. Não lhe dá certificação e nunca lhe pede para tocar em peças de alta tensão. Esse trabalho só se aprende numa formação supervisionada e aprovada, com o equipamento de proteção certo.",
    "Cada lição dura cerca de cinco minutos. Leia-a, veja os slides e depois faça a tarefa \"Experimente agora\" com papel, uma caneta e a calculadora do telefone. Há uma pequena verificação depois de cada lição e de cada capítulo, e um questionário de 20 perguntas no final do curso. A última lição constrói o seu próprio Plano de Início como Técnico de VE."
  ],
  finalTask: "Faça o seu Plano de Início como Técnico de VE numa página: (1) explique em 3 a 4 frases como funciona um VE, nomeando as peças principais; (2) escreva as regras de segurança de alta tensão que vai seguir como novo trabalhador de oficina; (3) resolva dois problemas de prática sobre tempo de carregamento e mostre as contas; (4) escreva uma lista de verificação de manutenção de baixa tensão para um VE; (5) escreva o seu percurso de certificação com datas reais (programa de formação, ASE A6 e A8, depois L3, e qualquer formação do empregador ou do fabricante), com a página oficial de cada passo; e (6) escreva uma secção de 3 pontos \"Competências em VE\" para o seu currículo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos à procura de um emprego qualificado na manutenção automóvel: quem procura emprego, antigos militares (muitos com experiência em veículos ou eletricidade), jovens adultos, imigrantes e técnicos de mudança de óleo ou de pneus que querem subir. Alguns já repararam carros a gasolina; muitos nunca trabalharam num VE.",
    startingPoint: "Sabem fazer contas simples com uma calculadora e ler instruções curtas. Alguns conhecem motores a gasolina e cuidados básicos com o carro; a maioria não conhece as peças de um VE, os perigos da alta tensão nem as certificações que as oficinas pedem.",
    gap: "As oficinas precisam de trabalhadores que façam a manutenção de VE com segurança e saibam quando parar. Um trabalhador novo que toque em peças laranja de alta tensão sem formação pode morrer. Os alunos precisam do vocabulário, das regras de segurança, das tarefas de manutenção do dia a dia e de um percurso de certificação claro para serem contratados e subirem na carreira.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano)",
      "Nenhum trabalho prático de alta tensão neste curso: nunca tocar em cabos laranja, na bateria nem nas peças internas dos carregadores",
      "Só ferramentas gratuitas: papel, caneta, a calculadora do telefone e sites oficiais",
      "As regras e as taxas de certificação mudam: os alunos confirmam em ase.com e noutras páginas oficiais",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e as consultas"
    ],
    prerequisites: "Nenhum. Os cursos \"Carreiras em Ofícios Qualificados\" e \"Noções Básicas de Segurança no Trabalho (OSHA)\" ajudam, mas não são obrigatórios."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista ou um desenho das peças de um VE", action: "nomear as peças principais de um veículo elétrico e dizer o que cada uma faz", standard: "acertando pelo menos 5 de 6 peças" },
    { id: "O2", condition: "Com uma situação de oficina com um VE", action: "listar os perigos de alta tensão e a regra de segurança para cada um", standard: "incluindo \"não tocar em cabos laranja nem na bateria sem formação\" e o bloqueio e etiquetagem" },
    { id: "O3", condition: "Com números de prática de bateria e de carregador", action: "calcular a energia necessária e o tempo de carregamento", standard: "sem erros de contas e mostrando o trabalho" },
    { id: "O4", condition: "Com um VE que entra para manutenção de rotina", action: "escrever uma lista de verificação de manutenção de baixa tensão que siga as informações de serviço do fabricante", standard: "com pelo menos 6 itens corretos e nenhuma tarefa de alta tensão" },
    { id: "O5", condition: "Usando ase.com e outras páginas oficiais", action: "listar os passos de certificação rumo ao trabalho de técnico de VE", standard: "indicando a página de origem de cada passo" },
    { id: "O6", condition: "Usando as suas notas deste curso", action: "escrever um Plano de Início como Técnico de VE com datas e uma secção de competências para o currículo", standard: "cumprindo todas as linhas da grelha de avaliação" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam os VE e como se proteger",
      lessons: [
        {
          title: "As peças de um veículo elétrico",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nomear as peças principais de um VE e dizer o que cada uma faz.",
          text: [
            "Um veículo elétrico (VE) funciona com eletricidade guardada numa grande bateria de alta tensão, normalmente debaixo do piso. Em muitos VE, esta bateria trabalha a cerca de 400 a 1.000 volts. Isso é muito mais do que uma tomada de casa, e pode matar.",
            "A bateria guarda corrente contínua (DC). Um inversor transforma-a na corrente alternada (AC) que o motor elétrico usa. O motor faz girar as rodas. Quando o condutor abranda, o motor funciona ao contrário, como um gerador, e devolve alguma energia à bateria. A isto chama-se travagem regenerativa.",
            "O carregador de bordo transforma a corrente AC de um posto de carregamento em DC para encher a bateria. Um conversor DC-DC baixa a alta tensão para carregar a bateria normal de 12 volts, que continua a alimentar as luzes, o rádio e os computadores. Os cabos de alta tensão são normalmente cor de laranja vivo.",
            "Um híbrido (HEV) tem um motor a gasolina e um motor elétrico com uma bateria mais pequena. Um híbrido plug-in (PHEV) tem uma bateria maior que se pode carregar numa tomada, mais um motor a gasolina."
          ],
          words: [["VE (veículo elétrico)", "um veículo que funciona só com eletricidade de uma bateria. Em inglês: EV."], ["Híbrido (HEV)", "um veículo com motor a gasolina e motor elétrico que não se liga à tomada."], ["Híbrido plug-in (PHEV)", "um híbrido com uma bateria maior que se pode carregar numa tomada."], ["Bateria de alta tensão", "a bateria grande que alimenta o motor; pode ser mortal."], ["Inversor", "a peça que transforma a corrente DC da bateria em AC para o motor."], ["Travagem regenerativa", "abrandar o carro usando o motor como gerador, o que devolve energia à bateria."], ["Carregador de bordo", "a peça dentro do carro que transforma a corrente AC de um carregador em DC para a bateria."], ["Conversor DC-DC", "a peça que baixa a alta tensão para carregar a bateria de 12 volts."]],
          slides: [
            { title: "A bateria grande", bullets: ["Bateria de alta tensão, normalmente debaixo do piso", "Muitas vezes cerca de 400 a 1.000 volts: mortal", "Os cabos laranja levam alta tensão"] },
            { title: "Pôr o carro a andar", bullets: ["Inversor: DC da bateria para AC do motor", "O motor faz girar as rodas", "A travagem regenerativa devolve energia"] },
            { title: "O carregamento e a bateria de 12 volts", bullets: ["Carregador de bordo: AC do posto para DC da bateria", "O conversor DC-DC carrega a bateria de 12 volts"] },
            { title: "VE, HEV, PHEV", bullets: ["VE: só bateria", "HEV: motor a gasolina mais motor elétrico, sem tomada", "PHEV: bateria maior que se liga à tomada, mais motor a gasolina"] }
          ],
          sources: [{ name: "Departamento de Energia dos EUA, Alternative Fuels Data Center: Manutenção e segurança de veículos elétricos", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Num papel, desenhe um carro simples visto de lado. Desenhe e identifique seis peças: bateria de alta tensão, inversor, motor elétrico, carregador de bordo, conversor DC-DC e bateria de 12 volts. Desenhe os cabos laranja com outra cor. Ao lado de cada peça, escreva uma linha sobre o que ela faz.",
          youCanNow: "nomear as peças principais de um VE e dizer o que cada uma faz.",
          quickCheck: [
            { objective: "O1", q: "De que cor são normalmente os cabos de alta tensão nos VE?", options: ["Preto", "Verde", "Laranja", "Branco"], answer: 2, why: "Os cabos de alta tensão são normalmente laranja vivo para que os trabalhadores vejam o perigo." },
            { objective: "O1", q: "O que faz a travagem regenerativa?", options: ["Usa o motor para abrandar o carro e devolver energia à bateria", "Acrescenta óleo dos travões automaticamente", "Carrega o carro a partir de um depósito de gasolina", "Desliga a bateria de 12 volts"], answer: 0, why: "Ao abrandar, o motor funciona como gerador e manda energia de volta para a bateria." }
          ]
        },
        {
          title: "Segurança de alta tensão: saiba quando parar",
          objectives: ["O2"],
          minutes: 6,
          goal: "Listar os perigos de alta tensão numa oficina e a regra de segurança para cada um.",
          text: [
            "O sistema de alta tensão pode causar choque elétrico, queimaduras e arco elétrico. Pode continuar perigoso depois de o carro ser desligado, e uma bateria danificada pode pegar fogo, mesmo horas ou dias depois.",
            "A primeira regra para um trabalhador novo: não toque em cabos laranja, na bateria nem em nenhuma peça com etiqueta de aviso de alta tensão. Só técnicos com formação e autorizados trabalham no sistema de alta tensão. Eles seguem as informações de serviço do fabricante para desligar o sistema, esperar o tempo indicado e testar que já não tem tensão.",
            "Os técnicos com formação usam luvas isolantes adequadas à tensão, verificadas antes de cada uso, e fazem o bloqueio e etiquetagem (lockout/tagout) para que ninguém possa voltar a ligar a energia enquanto trabalham. A regra de bloqueio e etiquetagem da OSHA, a agência de segurança no trabalho dos EUA, é a 29 CFR 1910.147.",
            "As outras regras da oficina continuam a valer: levante o carro só nos pontos de elevação do fabricante (a bateria está por baixo), mantenha a área livre e avise um supervisor sobre qualquer bateria danificada, a pingar, a deitar fumo ou quente. Afaste-se dela e não tente repará-la."
          ],
          steps: ["Procure cabos laranja e etiquetas de aviso de alta tensão.", "Não lhes toque se não tiver formação e autorização.", "Levante o carro só nos pontos de elevação do fabricante.", "Comunique qualquer bateria danificada, quente, a deitar fumo ou a pingar e afaste-se.", "Técnicos com formação: desligar, esperar, testar, bloquear e etiquetar, conforme as informações de serviço."],
          words: [["Choque elétrico", "lesão quando a eletricidade passa pelo seu corpo."], ["Arco elétrico", "uma explosão súbita de calor e luz quando a eletricidade salta pelo ar. Em inglês: arc flash."], ["Autorizado", "com permissão do empregador porque tem a formação certa."], ["Luvas isolantes", "luvas especiais de borracha feitas para proteger contra uma certa tensão."], ["Bloqueio e etiquetagem (lockout/tagout)", "passos que cortam e trancam a energia para que ninguém a possa voltar a ligar durante o trabalho."], ["Informações de serviço", "os passos oficiais de reparação do fabricante para um veículo."], ["Ponto de elevação", "o lugar debaixo do carro onde é seguro levantá-lo."]],
          slides: [
            { title: "Os perigos", bullets: ["Choque, queimaduras e arco elétrico", "Pode continuar perigoso com o carro desligado", "Baterias danificadas podem pegar fogo mais tarde"] },
            { title: "Regra número um para trabalhadores novos", bullets: ["Não toque em cabos laranja nem na bateria", "Não toque em peças com etiquetas de alta tensão", "Só técnicos com formação e autorizados fazem esse trabalho"] },
            { title: "Como trabalham os técnicos com formação", bullets: ["Seguem as informações de serviço do fabricante", "Desligam, esperam e testam que não há tensão", "Luvas isolantes adequadas; bloqueio e etiquetagem"] },
            { title: "Regras do dia a dia na oficina", bullets: ["Levante só nos pontos de elevação do fabricante", "Comunique baterias danificadas, quentes ou com fumo", "Afaste-se; não tente reparar"] }
          ],
          sources: [
            { name: "OSHA: Controlo de energia perigosa (bloqueio e etiquetagem)", url: "https://www.osha.gov/control-hazardous-energy" },
            { name: "Departamento de Energia dos EUA, Alternative Fuels Data Center: Segurança dos VE e resposta a emergências", url: "https://afdc.energy.gov/vehicles/electric-maintenance" },
            { name: "Gabinete de Estatísticas do Trabalho dos EUA (BLS): Técnicos e mecânicos de manutenção automóvel", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Situação de prática: um VE chega depois de um pequeno acidente. Há uma amolgadela debaixo do carro, perto da bateria, e um cheiro forte. Um colega diz: \"Desliga só esse cabo laranja para o podermos levantar.\" Num papel, faça uma lista com duas colunas: Perigo e O que eu faço. Escreva pelo menos quatro linhas.",
          youCanNow: "identificar os perigos de alta tensão numa oficina e dizer a regra de segurança para cada um, incluindo quando parar e chamar um técnico com formação.",
          quickCheck: [
            { objective: "O2", q: "Você é novo e vê um cabo laranja debaixo de um carro em que está a trabalhar. O que faz?", options: ["Desliga-o por segurança", "Puxa-o para o lado", "Enrola-o com fita", "Não lhe toca; avisa um técnico com formação"], answer: 3, why: "Os cabos laranja levam alta tensão; só técnicos com formação e autorizados trabalham neles." },
            { objective: "O2", q: "Para que serve o bloqueio e etiquetagem?", options: ["Fechar a oficina à noite", "Garantir que ninguém volta a ligar a energia durante o trabalho", "Etiquetar pneus para guardar", "Guardar as chaves do cliente à chave"], answer: 1, why: "O bloqueio e etiquetagem mantém a energia desligada enquanto alguém trabalha no sistema." }
          ]
        },
        {
          title: "Noções de carregamento e contas de carregamento (só prática)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular a energia necessária e o tempo de carregamento a partir de números de prática.",
          text: [
            "Nos EUA há três níveis de carregamento comuns. O Nível 1 usa uma tomada normal de 120 volts e é lento. O Nível 2 usa 240 volts em casa ou 208 volts em muitas empresas; é o carregador público mais comum. O carregamento rápido DC manda corrente DC diretamente para a bateria e é o mais rápido.",
            "As fichas comuns são a J1772 (Nível 1 e 2), a CCS (J1772 mais dois pinos para carregamento rápido DC) e a J3400, também chamada NACS, baseada no desenho da Tesla. Instalar um carregador numa casa ou empresa é trabalho elétrico para um eletricista licenciado.",
            "O tamanho da bateria mede-se em quilowatts-hora (kWh). A potência do carregador mede-se em quilowatts (kW). Fórmula de prática: horas = kWh necessários / kW do carregador. Todos os números aqui são inventados, só para prática. Na vida real, o carregamento fica mais lento quando a bateria está quase cheia, e as perdas fazem-no demorar mais."
          ],
          steps: ["Encontre o tamanho da bateria em kWh.", "Calcule quanto precisa: kWh da bateria x (percentagem a acrescentar / 100).", "Divida os kWh necessários pelos kW do carregador.", "Escreva a resposta em horas e diga que é uma estimativa."],
          words: [["Nível 1", "carregamento lento numa tomada normal de 120 volts."], ["Nível 2", "carregamento mais rápido a 240 ou 208 volts."], ["Carregamento rápido DC", "o carregamento mais rápido, que manda corrente DC diretamente para a bateria."], ["Quilowatt-hora (kWh)", "uma medida de energia; o tamanho da bateria é em kWh."], ["Quilowatt (kW)", "uma medida de potência; a velocidade do carregador é em kW."], ["J1772, CCS, J3400 (NACS)", "nomes de fichas comuns de carregamento de VE nos EUA."]],
          slides: [
            { title: "Três níveis de carregamento", bullets: ["Nível 1: tomada de 120 volts, lento", "Nível 2: 240 ou 208 volts, a maioria dos carregadores públicos", "Rápido DC: corrente DC diretamente para a bateria"] },
            { title: "Fichas", bullets: ["J1772 para o Nível 1 e 2", "A CCS acrescenta pinos de carregamento rápido DC", "J3400 (NACS), baseada no desenho da Tesla"] },
            { title: "Contas de carregamento (só prática)", bullets: ["Horas = kWh necessários / kW do carregador", "Exemplo: 60 kWh x 50% = 30 kWh; 30 / 7,5 kW = 4 horas"] },
            { title: "A vida real é mais lenta", bullets: ["O carregamento abranda quando a bateria enche", "As respostas são estimativas", "A instalação de carregadores é para eletricistas licenciados"] }
          ],
          sources: [
            { name: "Departamento de Energia dos EUA, Alternative Fuels Data Center: Carregar veículos elétricos", url: "https://afdc.energy.gov/fuels/electricity-stations" },
            { name: "EVITP: Programa de Formação em Infraestrutura para Veículos Elétricos (para eletricistas licenciados)", url: "https://evitp.org/" }
          ],
          tryIt: "Só prática. Resolva no papel e mostre as contas: (a) Uma bateria de 80 kWh passa de 20% para 80%. Quantos kWh são? (b) Quanto tempo demoraria num carregador de Nível 2 de 9,6 kW? (c) Uma bateria de 40 kWh precisa de 10 kWh numa tomada de Nível 1 de 1,25 kW. Quantas horas? Respostas para se corrigir: (a) 48 kWh, (b) 5 horas, (c) 8 horas.",
          youCanNow: "nomear os níveis de carregamento e as fichas e estimar o tempo de carregamento a partir de números de prática.",
          quickCheck: [
            { objective: "O3", q: "Só prática: precisa de 24 kWh e o carregador dá 6 kW. Quanto tempo, mais ou menos?", options: ["2 horas", "18 horas", "4 horas", "30 horas"], answer: 2, why: "Horas = kWh / kW, por isso 24 / 6 = 4 horas." },
            { objective: "O3", q: "Que nível de carregamento usa uma tomada doméstica normal de 120 volts?", options: ["Nível 1", "Nível 2", "Carregamento rápido DC", "Só J3400"], answer: 0, why: "O Nível 1 usa uma tomada normal de 120 volts." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam os VE e como se proteger",
        questions: [
          { objective: "O1", q: "Que peça transforma a corrente DC da bateria em AC para o motor?", options: ["A bateria de 12 volts", "O inversor", "As pastilhas dos travões", "A tampa da entrada de carga"], answer: 1, why: "O inversor transforma a corrente DC da bateria em AC para o motor." },
          { objective: "O1", q: "O que faz o conversor DC-DC?", options: ["Enche a bateria grande a partir da parede", "Faz girar as rodas", "Carrega a bateria de 12 volts a partir do sistema de alta tensão", "Arrefece o interior do carro"], answer: 2, why: "Ele baixa a alta tensão para manter a bateria de 12 volts carregada." },
          { objective: "O2", q: "O carro está desligado. O sistema de alta tensão é seguro de tocar?", options: ["Sim, sempre", "Sim, se o rádio estiver desligado", "Sim, depois de um minuto", "Não necessariamente; só técnicos com formação seguem os passos de desligar e testar"], answer: 3, why: "A alta tensão pode continuar perigosa com o carro desligado; os técnicos com formação desligam, esperam e testam primeiro." },
          { objective: "O2", q: "Uma bateria debaixo de um carro está quente e a deitar fumo. O que faz?", options: ["Afasta-se e avisa logo um supervisor", "Atira-lhe água você mesmo", "Levanta o carro para ver", "Desliga os cabos laranja"], answer: 0, why: "Uma bateria danificada pode pegar fogo; afaste-se e comunique." },
          { objective: "O3", q: "Só prática: bateria de 60 kWh, acrescentar 50%. Quantos kWh são?", options: ["50 kWh", "110 kWh", "30 kWh", "10 kWh"], answer: 2, why: "60 x 50 / 100 = 30 kWh." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabalho de manutenção e o seu caminho até ao emprego",
      lessons: [
        {
          title: "Tarefas de manutenção do dia a dia nos VE",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escrever uma lista de verificação de manutenção de baixa tensão para um VE que siga as informações de serviço do fabricante.",
          text: [
            "Os VE precisam de menos manutenção do que os carros a gasolina: não há mudanças de óleo, velas nem escape. Mas continuam a precisar de manutenção, e grande parte é trabalho de baixa tensão que um técnico novo pode aprender.",
            "Pneus: os VE são muitas vezes pesados, por isso verifique a pressão, o piso e o desgaste dos pneus e faça a rotação dos pneus como o fabricante indica. Travões: com a travagem regenerativa as pastilhas gastam-se devagar, mas os travões continuam a precisar de ser verificados, e as peças pouco usadas podem enferrujar ou prender. Verifique também as escovas do para-brisas, as luzes, a suspensão e a direção, o filtro de ar do habitáculo e a bateria de 12 volts.",
            "Alguns VE usam líquido de refrigeração para a bateria e para a eletrónica. As verificações e as mudanças seguem o calendário e os passos do fabricante; nunca abra uma peça de refrigeração de alta tensão se não tiver formação.",
            "Use sempre as informações de serviço do fabricante para o carro exato: o calendário, os pontos de elevação e os passos. Se uma tarefa mexer em algo laranja ou com etiqueta de alta tensão, pare e entregue-a a um técnico com formação."
          ],
          steps: ["Procure as informações de serviço para a marca, o modelo e o ano exatos.", "Levante só nos pontos de elevação indicados.", "Verifique pneus, travões, escovas, luzes, suspensão e direção.", "Verifique o filtro de ar do habitáculo e a bateria de 12 volts.", "Verifique o líquido de refrigeração só como as informações de serviço dizem.", "Pare e passe a outro tudo o que for laranja ou tiver etiqueta de alta tensão."],
          words: [["Baixa tensão", "os sistemas normais de 12 volts, como as luzes e o rádio, que são mais seguros para trabalhar."], ["Rotação dos pneus", "trocar os pneus de lugar para que se gastem por igual."], ["Filtro de ar do habitáculo", "o filtro que limpa o ar que entra no interior do carro."], ["Líquido de refrigeração", "o líquido que impede as peças de aquecerem demasiado."], ["Calendário de manutenção", "a lista do fabricante com o que verificar e quando."]],
          slides: [
            { title: "Menos manutenção, mas não zero", bullets: ["Sem mudanças de óleo, velas nem escape", "Continua a precisar de verificações regulares"] },
            { title: "Pneus e travões", bullets: ["Carros pesados: verifique pressão, piso e desgaste", "Os travões gastam-se devagar, mas podem enferrujar ou prender", "Faça a rotação dos pneus como o fabricante indica"] },
            { title: "Outras verificações", bullets: ["Escovas, luzes, suspensão, direção", "Filtro de ar do habitáculo e bateria de 12 volts", "Refrigeração só conforme as informações de serviço"] },
            { title: "Conheça o seu limite", bullets: ["Use as informações de serviço desse carro exato", "Levante só nos pontos indicados", "Laranja ou etiqueta de alta tensão? Pare e passe a outro"] }
          ],
          sources: [{ name: "Departamento de Energia dos EUA, Alternative Fuels Data Center: Manutenção de veículos elétricos", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Escolha qualquer modelo de VE que já tenha visto. Num papel, escreva uma lista de verificação com pelo menos 8 itens para uma visita de rotina. Marque cada um com BT (baixa tensão, pode fazer) ou PARE (alta tensão, passe a outro). Depois confirme: pôs alguma coisa laranja na coluna BT? Se sim, corrija.",
          youCanNow: "escrever uma lista de verificação de manutenção de baixa tensão para um VE e dizer que trabalhos passar a um técnico de alta tensão com formação.",
          quickCheck: [
            { objective: "O4", q: "De que trabalho um VE NÃO precisa?", options: ["Rotação dos pneus", "Mudanças de óleo", "Verificação dos travões", "Verificação do filtro de ar do habitáculo"], answer: 1, why: "Um veículo só a bateria não tem óleo de motor para mudar." },
            { objective: "O4", q: "Onde encontra os pontos de elevação certos e o calendário de manutenção de um VE?", options: ["Um palpite a partir de outro carro", "Um vídeo nas redes sociais", "A memória do cliente", "As informações de serviço do fabricante para esse carro exato"], answer: 3, why: "As informações de serviço do fabricante têm os pontos de elevação e o calendário corretos." }
          ]
        },
        {
          title: "Certificações e formação para trabalhar com VE",
          objectives: ["O5"],
          minutes: 5,
          goal: "Listar os passos de certificação rumo ao trabalho de técnico de VE, com a fonte oficial de cada um.",
          text: [
            "A maioria dos técnicos automóveis começa com um programa de formação numa escola secundária, num instituto comunitário ou numa escola técnica, ou começa como técnico de mudança de óleo ou de pneus e aprende no trabalho. Os estágios profissionais (aprendizagem) e os programas de formação dos fabricantes são outros caminhos de entrada.",
            "A ASE (National Institute for Automotive Service Excellence, o instituto dos EUA que certifica técnicos automóveis) oferece as certificações de técnico mais conhecidas. O seu teste L3, Light Duty Hybrid/Electric Vehicle Specialist (especialista em veículos ligeiros híbridos e elétricos), cobre o diagnóstico do sistema da bateria, do sistema de tração, da eletrónica de potência e mais. Antes de se inscrever no L3, tem de passar no A6 (Sistemas Elétricos/Eletrónicos) e no A8 (Desempenho do Motor). A certificação ASE também exige experiência prática de trabalho; confirme as regras atuais em ase.com.",
            "Muitos fabricantes de carros também formam técnicos nos seus próprios VE. Os eletricistas que instalam carregadores podem fazer a formação EVITP, que é para eletricistas licenciados. As taxas, as regras dos testes e as exigências de experiência mudam, por isso confirme cada página oficial antes de pagar.",
            "Este curso prepara você para começar. Não lhe dá certificação."
          ],
          steps: ["Procure programas de tecnologia automóvel e estágios profissionais perto de si.", "Leia a página do L3 da ASE e anote os pré-requisitos (A6 e A8).", "Leia as regras de experiência de trabalho da ASE.", "Pergunte a oficinas e concessionários locais que certificações e formações de fabricante querem.", "Escreva cada passo, uma data-alvo e a página oficial."],
          words: [["ASE", "o National Institute for Automotive Service Excellence, que certifica técnicos automóveis nos EUA."], ["Certificação", "prova de que passou num teste e cumpriu as regras de experiência."], ["Pré-requisito", "algo que tem de terminar antes de poder começar o passo seguinte."], ["Diagnosticar", "descobrir o que está mal e porquê."], ["EVITP", "o Electric Vehicle Infrastructure Training Program, que forma eletricistas licenciados para instalar carregadores."]],
          slides: [
            { title: "Caminhos de entrada", bullets: ["Cursos de mecânica na escola ou no instituto comunitário", "Começar como técnico de óleo ou de pneus", "Estágios profissionais e formação dos fabricantes"] },
            { title: "Percurso ASE para trabalhar com VE", bullets: ["Passar no A6 Sistemas Elétricos/Eletrónicos", "Passar no A8 Desempenho do Motor", "Depois o L3 Especialista em Veículos Ligeiros Híbridos/Elétricos"] },
            { title: "Mais a saber", bullets: ["A ASE também exige experiência prática de trabalho", "Os fabricantes formam técnicos nos seus próprios VE", "O EVITP é para eletricistas licenciados que instalam carregadores"] },
            { title: "Confirme antes de pagar", bullets: ["As regras e as taxas mudam: use ase.com", "Escreva cada passo, uma data e a fonte", "Este curso prepara você; não dá certificação"] }
          ],
          sources: [
            { name: "ASE: Teste L3 Light Duty Hybrid/Electric Vehicle Specialist", url: "https://www.ase.com/tests/l3/" },
            { name: "ASE: Testes", url: "https://www.ase.com/tests" },
            { name: "EVITP: Programa de Formação em Infraestrutura para Veículos Elétricos", url: "https://evitp.org/" },
            { name: "Gabinete de Estatísticas do Trabalho dos EUA (BLS): Como se tornar técnico de manutenção automóvel", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Abra a página do teste L3 da ASE. Anote os dois testes em que tem de passar primeiro e três temas que o L3 cobre. Depois procure um programa de tecnologia automóvel ou um estágio profissional perto de si e escreva o nome e o endereço web.",
          youCanNow: "nomear o percurso ASE para trabalhar com VE (A6, A8 e depois L3), dizer o que mais é preciso e encontrar formação perto de si em páginas oficiais.",
          quickCheck: [
            { objective: "O5", q: "Qual é o teste ASE de especialista em veículos híbridos e elétricos?", options: ["A1", "L3", "A5", "T2"], answer: 1, why: "O L3 é o teste ASE de especialista em veículos ligeiros híbridos e elétricos." },
            { objective: "O5", q: "Em que tem de passar antes de se inscrever no ASE L3?", options: ["A6 e A8", "Um teste de carta de condução profissional (CDL)", "O teste de ciências do GED", "EPA Secção 608"], answer: 0, why: "A ASE exige o A6 Sistemas Elétricos/Eletrónicos e o A8 Desempenho do Motor antes do L3." }
          ]
        },
        {
          title: "O seu Plano de Início como Técnico de VE",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever um Plano de Início como Técnico de VE com datas e uma secção de competências para o currículo.",
          text: [
            "Agora junte tudo numa página que pode levar a um programa de formação, a uma oficina ou a um concessionário. Um plano com datas reais mostra que você leva isto a sério.",
            "O seu plano tem seis partes: como funciona um VE, com as suas palavras; as suas regras de segurança de alta tensão; dois problemas de prática de carregamento com as contas; uma lista de verificação de manutenção de baixa tensão; o seu percurso de certificação com datas e fontes; e uma secção \"Competências em VE\" para o currículo.",
            "Para o currículo, escreva coisas verdadeiras que já sabe fazer, em pontos curtos que comecem com um verbo de ação. Por exemplo: \"Conheço as peças principais do sistema de tração de um VE e de um híbrido.\" \"Formação em consciência de segurança de alta tensão: identifico cabos laranja e paro para chamar um técnico qualificado.\" \"Sei estimar o tempo de carregamento a partir do tamanho da bateria e do carregador.\" Acrescente trabalho anterior que ajude: cuidados com carros, trabalho com pneus ou óleo, veículos militares, ajudante de eletricista ou equipamento de armazém.",
            "Antigos militares: muitas competências com veículos militares e eletricidade servem aqui. Pergunte num centro de emprego local sobre apoio à formação."
          ],
          steps: ["Escreva a sua explicação de 3 a 4 frases sobre como funciona um VE.", "Escreva as suas regras de segurança de alta tensão.", "Acrescente dois problemas de prática de carregamento com as contas.", "Acrescente a sua lista de verificação de manutenção de baixa tensão.", "Escreva o seu percurso de certificação com datas-alvo e páginas de origem.", "Escreva 3 pontos para o currículo que comecem com um verbo de ação."],
          words: [["Currículo", "um documento curto que lista as suas competências, trabalhos e formação para os empregadores."], ["Data-alvo", "o dia em que planeia terminar um passo."], ["Centro de emprego", "um serviço público gratuito que ajuda as pessoas a encontrar emprego e formação; nos EUA muitos chamam-se American Job Centers."]],
          slides: [
            { title: "Uma página, seis partes", bullets: ["Como funciona um VE; regras de segurança", "Contas de carregamento; lista de manutenção", "Percurso de certificação com datas; secção do currículo"] },
            { title: "Datas reais", bullets: ["Quando começa um programa de formação", "Quando quer passar no A6 e no A8", "Quando quer fazer o L3, depois da experiência de trabalho"] },
            { title: "Currículo: competências em VE", bullets: ["Pontos curtos que começam com um verbo de ação", "Só coisas verdadeiras que sabe fazer", "Acrescente trabalho anterior com carros, ferramentas ou eletricidade"] },
            { title: "Peça ajuda", bullets: ["American Job Centers e serviços para antigos militares", "Pergunte às oficinas e concessionários locais o que querem"] }
          ],
          sources: [{ name: "CareerOneStop: Encontrar um American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Tarefa final: faça o seu Plano de Início como Técnico de VE numa página, com as seis partes. Ponha uma data real ao lado de cada passo de formação e de certificação, e o endereço web de cada exigência que confirmou. Leia os pontos do seu currículo em voz alta, como se estivesse numa entrevista.",
          youCanNow: "mostrar a uma oficina ou a um programa de formação um plano escrito para começar a trabalhar com VE, com datas, fontes e uma secção de competências para o currículo.",
          quickCheck: [
            { objective: "O6", q: "Qual é o melhor ponto de currículo para um emprego de entrada numa oficina de VE?", options: ["\"Certificado ASE L3.\" (quando não é)", "\"Gosto de carros.\"", "\"Sei estimar o tempo de carregamento a partir do tamanho da bateria e do carregador.\"", "\"Gosto de Teslas.\""], answer: 2, why: "É verdadeiro e concreto; nunca diga que tem uma certificação que não tem." },
            { objective: "O6", q: "O seu plano diz \"Obter certificação ASE.\" O que o torna mais forte?", options: ["Apagá-lo", "Escrevê-lo em maiúsculas", "Acrescentar o nome de um amigo", "Nomear o A6, o A8 e o L3 com datas-alvo e a página ase.com"], answer: 3, why: "Testes com nome, datas e a fonte oficial transformam um desejo num plano." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Trabalho de manutenção e o seu caminho até ao emprego",
        questions: [
          { objective: "O4", q: "Porque é que os travões de um VE ainda precisam de ser verificados, mesmo gastando-se devagar?", options: ["As peças pouco usadas podem enferrujar ou prender", "Os VE não têm travões", "Os travões carregam a bateria por completo", "Nunca precisam de ser verificados"], answer: 0, why: "A travagem regenerativa faz com que os travões se usem menos, por isso as peças podem enferrujar ou prender." },
          { objective: "O4", q: "Na sua lista de manutenção, uma tarefa mexe num cabo laranja. Como a marca?", options: ["BT, posso fazer", "Salto-a e não digo a ninguém", "PARE: passo-a a um técnico de alta tensão com formação", "Faço-a depressa"], answer: 2, why: "Tudo o que for laranja ou tiver etiqueta de alta tensão vai para um técnico com formação e autorizado." },
          { objective: "O5", q: "Além de passar num teste, o que mais exige a certificação ASE?", options: ["Um curso superior", "Experiência prática de trabalho", "Uma carta CDL", "Ter um VE"], answer: 1, why: "A certificação ASE exige experiência de trabalho, além de passar no teste." },
          { objective: "O5", q: "Para quem é a formação EVITP de instalação de carregadores?", options: ["Qualquer pessoa com telefone", "Vendedores de carros", "Clientes", "Eletricistas licenciados"], answer: 3, why: "O EVITP forma eletricistas licenciados que instalam carregadores de VE." },
          { objective: "O6", q: "O que deve ter cada passo do seu Plano de Início como Técnico de VE?", options: ["Uma data-alvo e a página oficial que confirmou", "Um preço adivinhado", "A assinatura de um amigo", "Nada mais"], answer: 0, why: "As datas e as fontes tornam cada passo real e verificável." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Técnico de Veículos Elétricos (VE)",
    questions: [
      { objective: "O1", q: "Onde fica normalmente a bateria de alta tensão de um VE?", options: ["Na tampa da mala", "Debaixo do piso", "Atrás do rádio", "No volante"], answer: 1, why: "A maioria das baterias de VE fica debaixo do piso." },
      { objective: "O1", q: "O que alimenta as luzes e o rádio de um VE?", options: ["A bateria de 12 volts", "Os pneus", "O cabo de carregamento", "O depósito de gasolina"], answer: 0, why: "Uma bateria normal de 12 volts continua a alimentar os sistemas de baixa tensão." },
      { objective: "O1", q: "O que é um híbrido plug-in (PHEV)?", options: ["Um carro sem bateria", "Um carro a gasolina com carregador de telefone", "Um VE sem motor", "Um híbrido com uma bateria maior que se pode carregar numa tomada"], answer: 3, why: "Um PHEV tem um motor a gasolina e uma bateria maior que se liga à tomada." },
      { objective: "O1", q: "Que peça transforma a corrente AC de um posto de carregamento em DC para a bateria?", options: ["O motor", "As pastilhas dos travões", "O carregador de bordo", "O filtro de ar do habitáculo"], answer: 2, why: "O carregador de bordo converte a corrente AC do posto em DC para a bateria." },
      { objective: "O2", q: "Como trabalhador novo, em que peça NUNCA deve tocar sem formação?", options: ["Escovas do para-brisas", "Cabos laranja de alta tensão", "Tampas das válvulas dos pneus", "Filtro de ar do habitáculo"], answer: 1, why: "Os cabos laranja levam alta tensão mortal." },
      { objective: "O2", q: "O que é um arco elétrico?", options: ["Uma explosão súbita de calor e luz quando a eletricidade salta pelo ar", "Uma regulação dos faróis", "Um tipo de pneu", "Uma ficha de carregamento"], answer: 0, why: "O arco elétrico é uma explosão elétrica que pode queimar e ferir." },
      { objective: "O2", q: "Antes de um técnico com formação trabalhar em alta tensão, o que faz?", options: ["Aumenta o volume do rádio", "Só abre o capô", "Usa luvas de algodão", "Desliga, espera, testa que não há tensão e bloqueia, conforme as informações de serviço"], answer: 3, why: "Desligar, esperar, testar e bloquear e etiquetar seguem os passos do fabricante." },
      { objective: "O2", q: "Onde se levanta um VE num elevador de oficina?", options: ["Debaixo da bateria", "Em qualquer sítio plano", "Só nos pontos de elevação do fabricante", "Pelos para-choques"], answer: 2, why: "A bateria fica por baixo; os pontos de elevação indicados protegem a bateria e você." },
      { objective: "O3", q: "Só prática: 36 kWh necessários num carregador de 9 kW. Quanto tempo?", options: ["4 horas", "45 horas", "27 horas", "3 horas"], answer: 0, why: "36 / 9 = 4 horas." },
      { objective: "O3", q: "O tamanho da bateria mede-se em:", options: ["Milhas por galão", "Quilowatts-hora (kWh)", "Libras por polegada quadrada", "Galões"], answer: 1, why: "A energia da bateria mede-se em quilowatts-hora." },
      { objective: "O3", q: "Qual é normalmente a forma mais rápida de carregar?", options: ["Nível 1", "Nível 2", "Um cabo de arranque de 12 volts", "Carregamento rápido DC"], answer: 3, why: "O carregamento rápido DC manda corrente DC diretamente para a bateria com alta potência." },
      { objective: "O3", q: "Porque é que uma resposta de tempo de carregamento é só uma estimativa?", options: ["Os carregadores nunca funcionam", "As baterias não têm tamanho", "O carregamento abranda quando a bateria enche, e há perdas", "kWh e kW querem dizer o mesmo"], answer: 2, why: "Na vida real, o carregamento abranda perto do fim e perde-se alguma energia." },
      { objective: "O4", q: "Qual é um bom item para uma lista de manutenção de um VE?", options: ["Verificar a pressão e o piso dos pneus", "Mudar o óleo do motor", "Substituir as velas", "Reparar o tubo de escape"], answer: 0, why: "Os VE precisam de verificação dos pneus; não têm óleo de motor, velas nem escape." },
      { objective: "O4", q: "Porque deve vigiar de perto o desgaste dos pneus nos VE?", options: ["Os VE não têm pneus", "Os VE são muitas vezes pesados", "Os pneus carregam a bateria", "Os pneus dos VE nunca se gastam"], answer: 1, why: "Os veículos pesados podem gastar os pneus mais depressa, por isso verifique-os muitas vezes." },
      { objective: "O4", q: "Onde encontra os passos corretos do líquido de refrigeração de um VE?", options: ["Num manual de qualquer carro a gasolina", "Num palpite", "Na memória de um colega", "Nas informações de serviço do fabricante"], answer: 3, why: "As verificações do líquido de refrigeração de cada VE seguem as informações de serviço do fabricante." },
      { objective: "O5", q: "O que quer dizer ASE?", options: ["Auto Sales Experts", "Association of Safe Electricians", "National Institute for Automotive Service Excellence", "American Solar Energy"], answer: 2, why: "ASE é o National Institute for Automotive Service Excellence." },
      { objective: "O5", q: "Onde confirma as regras e as taxas atuais dos testes ASE?", options: ["ase.com", "Uma publicação nas redes sociais", "Um anúncio de vendas", "As notas antigas de um amigo"], answer: 0, why: "O site oficial da ASE tem as regras atuais." },
      { objective: "O5", q: "Este curso dá-lhe certificação como técnico de VE?", options: ["Sim, depois do questionário", "Não; prepara você, e a certificação vem da ASE e de outros programas", "Sim, se terminar num só dia", "Só para híbridos"], answer: 1, why: "O curso prepara você; as certificações vêm da ASE, dos fabricantes e de programas aprovados." },
      { objective: "O6", q: "O que pertence ao seu Plano de Início como Técnico de VE?", options: ["A sua palavra-passe do banco", "Uma certificação que não tem", "As suas cores de carro preferidas", "Datas-alvo para o A6, o A8 e o L3"], answer: 3, why: "As datas de cada passo tornam o plano real." },
      { objective: "O6", q: "Um bom ponto de currículo deve ser:", options: ["Longo e vago", "Sobre uma competência que espera aprender", "Verdadeiro, concreto e começar com um verbo de ação", "Copiado de um desconhecido"], answer: 2, why: "Os empregadores confiam em pontos curtos, verdadeiros e concretos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe sobre os VE?", from: [0, 3, 4, 7, 8, 10, 12, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Como funciona um VE", objective: "O1", notYet: "Esquece a bateria ou o inversor, ou confunde as suas funções.", meets: "Nomeia a bateria, o inversor, o motor, o carregador de bordo, o conversor DC-DC e a bateria de 12 volts, e diz o que cada um faz.", exceeds: "Também explica a travagem regenerativa e a diferença entre um VE, um HEV e um PHEV." },
      { name: "Regras de segurança de alta tensão", objective: "O2", notYet: "Não diz para ficar longe dos cabos laranja e da bateria.", meets: "Diz para não tocar em peças laranja ou com etiqueta de alta tensão sem formação, para usar os pontos de elevação do fabricante e para comunicar baterias danificadas.", exceeds: "Também explica desligar, esperar, testar e o bloqueio e etiquetagem, e quem tem autorização para os fazer." },
      { name: "Contas de carregamento", objective: "O3", notYet: "Um erro de contas, ou nenhum trabalho mostrado.", meets: "Os dois problemas estão certos, com a fórmula e as unidades mostradas.", exceeds: "Também diz porque o tempo real será maior." },
      { name: "Lista de manutenção", objective: "O4", notYet: "Inclui mudanças de óleo ou uma tarefa de alta tensão marcada como possível.", meets: "Pelo menos 6 itens corretos de baixa tensão, com as tarefas de alta tensão marcadas PARE.", exceeds: "Indica que cada item segue as informações de serviço do fabricante para o carro exato." },
      { name: "Percurso de certificação", objective: "O5", notYet: "Sem datas, ou passos sem fonte.", meets: "Nomeia um caminho de formação e os testes ASE A6, A8 e L3, cada um com data-alvo e endereço web.", exceeds: "Acrescenta um programa de formação de fabricante ou um empregador local e um plano alternativo." },
      { name: "Secção do currículo", objective: "O6", notYet: "Os pontos são vagos ou dizem ter uma certificação que o aluno não tem.", meets: "Três pontos verdadeiros que começam com um verbo de ação e correspondem ao trabalho numa oficina de VE.", exceeds: "Liga trabalho anterior (cuidados com carros, veículos militares, eletricidade) a tarefas com VE." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num programa de tecnologia automóvel, estágio profissional ou formação de fabricante em 90 dias",
      "Alunos que passam no ASE A6 ou A8 em 12 meses (segundo os próprios)",
      "Alunos contratados numa oficina ou num serviço pós-venda de concessionário em 6 meses (inquérito de seguimento ou relatório de parceiro)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador com internet para ler as lições e consultar páginas oficiais",
      "Papel, caneta, canetas de cores e uma calculadora (a do telefone serve)",
      "Opcional: uma imagem impressa das peças de um VE para identificar",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Ninguém toca no sistema de alta tensão de um veículo neste curso. Se visitarem uma oficina ou mostrarem um veículo, quem orienta é um técnico com formação e autorizado, e os alunos só observam.",
      "Façam o teste inicial juntos, depois um capítulo por sessão, e resolvam as contas de carregamento num quadro branco.",
      "Peça aos alunos que abram a página do L3 da ASE na hora e encontrem eles mesmos os pré-requisitos.",
      "Convide um chefe de oficina de um concessionário local, um formador de mecânica de um instituto comunitário ou um técnico de VE com certificação ASE para falar sobre contratação.",
      "Avalie a tarefa final com a grelha e dê comentários sobre uma linha Ainda não de cada vez.",
      "Encaminhe antigos militares e pessoas que voltam ao trabalho para os American Job Centers para apoio à formação."
    ]
  }
};
