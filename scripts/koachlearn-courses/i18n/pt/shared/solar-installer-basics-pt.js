"use strict";

// Koach Learn course (Portuguese translation of shared/solar-installer-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US trade (OSHA, NEC, NABCEP, BLS, US states), as in the English. Numbers and units are kept exactly as in the English.

module.exports = {
  id: "solar-installer-basics-pt",
  lang: "pt",
  translationOf: "solar-installer-basics",
  category: "Workforce Development",
  name: "Noções Básicas de Instalação de Painéis Solares",
  skills: "Dar nome às partes de um sistema solar, Identificar os perigos numa obra solar, Fazer contas básicas de energia solar, Seguir os passos de uma instalação, Planear o caminho para uma credencial solar",
  outcome: "explicar como funciona um sistema solar de uma casa, identificar os principais perigos numa obra solar, fazer contas simples de prática, pôr por ordem os passos de uma instalação num telhado e escrever o seu próprio plano, com datas, para trabalhar no nível inicial da energia solar e obter a credencial NABCEP PV Associate.",
  about: [
    "Os instaladores solares colocam painéis solares em telhados e no chão e ajudam a ligá-los. Muitas pessoas começam como ajudantes numa equipa de instalação e aprendem no trabalho. Este curso é para quem procura emprego, antigos militares, jovens adultos, pessoas que voltam para casa depois da prisão e qualquer pessoa que queira trabalhar ao ar livre com as mãos.",
    "Você vai aprender as partes de um sistema solar, as regras de segurança que mantêm os instaladores vivos, as contas básicas que as equipas usam, os passos de uma instalação num telhado e as credenciais reais que os empregadores procuram, como a NABCEP PV Associate. Este curso prepara você; não lhe dá uma licença nem uma credencial. Essas vêm da NABCEP, do seu estado e de programas de formação aprovados.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" com papel e caneta ou com uma calculadora gratuita no telefone. Há uma pequena verificação depois de cada lição e de cada capítulo, e um questionário de 20 perguntas no final do curso. A última lição ajuda você a fazer o seu próprio Plano de Início na Energia Solar."
  ],
  finalTask: "Faça o seu Plano de Início na Energia Solar numa página: (1) explique em 3 a 4 frases como funciona um sistema solar de uma casa ligado à rede, com o nome das partes principais; (2) preencha uma lista de verificação de segurança para uma obra de prática num telhado; (3) resolva dois problemas de prática de dimensionamento e mostre as contas; (4) ponha por ordem os passos de uma instalação num telhado; (5) escreva o seu caminho para a credencial com datas reais (programa de formação, data prevista para o exame NABCEP PV Associate, e os requisitos do estado ou do empregador que verificou na página oficial); e (6) escreva uma secção \"Competências solares\" com 3 pontos para o seu currículo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que procuram um trabalho prático na energia limpa: pessoas à procura de emprego, antigos militares, jovens adultos, pessoas que voltam para casa depois da prisão, imigrantes e adultos que voltam a estudar. A maioria não tem experiência em energia solar; alguns já trabalharam na construção, em telhados ou como ajudantes de eletricista.",
    startingPoint: "Sabem fazer contas básicas com uma calculadora e ler instruções curtas. A maioria nunca esteve numa obra solar e não conhece as partes de um sistema solar, as regras de segurança nem as credenciais que os empregadores pedem.",
    gap: "As equipas solares contratam ajudantes que já conhecem as palavras básicas, respeitam as regras de segurança e mostram um plano de formação. Os alunos precisam de saber o suficiente para falar com confiança numa entrevista, ficar em segurança nas primeiras semanas numa equipa e escolher a formação e a credencial certas sem gastar dinheiro à toa.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano)",
      "Nada de trabalho prático em telhados ou com eletricidade neste curso: as instalações reais aprendem-se numa equipa com supervisão ou num programa de formação aprovado",
      "Só ferramentas gratuitas: papel, caneta, a calculadora do telefone e sites oficiais",
      "Os requisitos de licenças, taxas e credenciais mudam e variam de estado para estado: os alunos verificam as páginas oficiais",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e as consultas"
    ],
    prerequisites: "Nenhum. Os cursos \"Carreiras nos Ofícios Técnicos\" e \"Noções Básicas de Segurança no Trabalho (OSHA)\" ajudam, mas não são obrigatórios."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um desenho ou uma lista das partes de um sistema solar de uma casa ligado à rede", action: "dar nome a cada parte principal e dizer para que serve", standard: "acertando pelo menos 5 de 6 partes" },
    { id: "O2", condition: "Com uma situação de prática numa obra solar", action: "fazer a lista dos perigos e do passo de segurança para cada um", standard: "nomeando as quedas, o choque elétrico, o calor e o levantamento de peso, com um passo de segurança certo para cada um" },
    { id: "O3", condition: "Com números de prática de painéis, volts e amperes", action: "calcular os watts, o tamanho do sistema e a tensão de uma string", standard: "sem erros de contas e mostrando como chegou ao resultado" },
    { id: "O4", condition: "Com os passos de uma instalação solar num telhado fora de ordem", action: "pôr os passos na ordem certa e dizer quem faz cada um", standard: "com no máximo um passo fora do lugar" },
    { id: "O5", condition: "Usando os sites oficiais da NABCEP e do estado", action: "fazer a lista das credenciais e licenças para o trabalho solar de nível inicial onde vive", standard: "indicando a página de origem de cada uma" },
    { id: "O6", condition: "Usando as suas notas deste curso", action: "escrever um Plano de Início na Energia Solar com datas e uma secção de competências para o currículo", standard: "cumprindo todas as linhas da grelha de avaliação" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona a energia solar e como ficar em segurança",
      lessons: [
        {
          title: "As partes de um sistema solar de uma casa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dar nome às partes principais de um sistema solar ligado à rede e dizer para que serve cada uma.",
          text: [
            "Os painéis solares, também chamados módulos, transformam a luz do sol em eletricidade. O tipo de eletricidade que fazem é corrente contínua (DC). As casas usam corrente alternada (AC), por isso um inversor transforma a DC em AC.",
            "Os painéis assentam numa estrutura de montagem, uma armação de metal aparafusada ao telhado ou colocada no chão. Os fios vão dos painéis até ao inversor e depois até ao quadro elétrico principal da casa. Os interruptores de corte permitem aos trabalhadores desligar partes do sistema. Um contador mede a eletricidade que a casa usa e a que envia para a rede.",
            "A maioria dos sistemas das casas está ligada à rede: continuam ligados às linhas da empresa de eletricidade, a que se chama a rede. A energia que sobra pode ir para a rede, e à noite a casa usa a energia da rede. Algumas casas também juntam uma bateria para guardar energia para mais tarde ou para quando falta a luz."
          ],
          words: [["Painel solar (módulo)", "um painel plano que transforma a luz do sol em eletricidade."], ["PV (fotovoltaico)", "a tecnologia que produz eletricidade a partir da luz; os painéis solares são painéis PV."], ["DC (corrente contínua)", "eletricidade que corre num só sentido, como a de uma pilha ou de um painel solar."], ["AC (corrente alternada)", "eletricidade que muda de sentido muitas vezes por segundo; as casas usam AC."], ["Inversor", "a caixa que transforma a DC dos painéis em AC para a casa."], ["Estrutura de montagem (racking)", "a armação de metal que segura os painéis."], ["Ligado à rede (grid-tied)", "ligado às linhas da empresa de eletricidade."], ["Interruptor de corte (disconnect)", "um interruptor que corta a energia de uma parte do sistema."]],
          slides: [
            { title: "Os painéis fazem energia DC", bullets: ["Os painéis solares (módulos) transformam a luz do sol em eletricidade DC", "PV quer dizer fotovoltaico: energia a partir da luz"] },
            { title: "Do telhado para a casa", bullets: ["A estrutura de montagem segura os painéis", "Os fios vão até ao inversor", "O inversor transforma a DC em AC para a casa"] },
            { title: "Interruptores de segurança e o contador", bullets: ["Os interruptores de corte desligam partes do sistema", "O contador mede a energia usada e a enviada para a rede"] },
            { title: "Sistemas ligados à rede", bullets: ["Continuam ligados às linhas da empresa de eletricidade", "A energia que sobra pode ir para a rede", "A bateria é opcional: para usar mais tarde ou quando falta a luz"] }
          ],
          sources: [{ name: "Departamento de Energia dos EUA: Guia do proprietário para passar à energia solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" }],
          tryIt: "Numa folha, desenhe uma casa simples com painéis no telhado. Desenhe e escreva o nome de seis caixas, por ordem: painéis, estrutura de montagem, inversor, interruptor de corte, quadro elétrico principal, contador. Ao lado de cada uma, escreva uma linha curta sobre o que faz. Depois tape os nomes e diga cada parte em voz alta.",
          youCanNow: "dar nome às partes principais de um sistema solar ligado à rede e dizer para que serve cada uma.",
          quickCheck: [
            { objective: "O1", q: "Que parte transforma a DC dos painéis em AC para a casa?", options: ["A estrutura de montagem", "O contador", "O inversor", "O interruptor de corte"], answer: 2, why: "O inversor transforma a DC dos painéis na AC que as casas usam." },
            { objective: "O1", q: "O que quer dizer \"ligado à rede\"?", options: ["O sistema está ligado às linhas da empresa de eletricidade", "Os painéis estão presos com corda", "A casa não tem contador", "O sistema só funciona à noite"], answer: 0, why: "Um sistema ligado à rede continua ligado à rede elétrica, por isso a energia que sobra pode sair e a energia da rede pode entrar." }
          ]
        },
        {
          title: "Ficar em segurança numa obra solar",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fazer a lista dos principais perigos numa obra solar e do passo de segurança para cada um.",
          text: [
            "As quedas são o maior perigo no trabalho solar. Na construção, a OSHA exige proteção contra quedas quando se trabalha a 6 pés ou mais acima de um nível mais baixo. Num telhado, isso quer dizer normalmente um sistema pessoal de travamento de quedas: um arnês de corpo inteiro, um cabo de segurança (talabarte) e uma ancoragem no telhado, montados por uma pessoa com formação. Inspecione o seu arnês antes de cada uso.",
            "O choque elétrico é o segundo grande perigo. Os painéis solares fazem eletricidade sempre que a luz lhes toca, e não se pode desligar o sol. Os fios dos painéis podem ter corrente de dia, mesmo com um interruptor desligado. Como ajudante novo, você não liga nem toca nos fios: só trabalhadores qualificados e com formação fazem o trabalho elétrico, seguindo os passos de bloqueio e etiquetagem.",
            "Escadas: ponha-as em chão firme e plano, com as barras laterais pelo menos 3 pés acima da beira do telhado, e mantenha três pontos de contacto. Calor: beba água muitas vezes, descanse à sombra e avise o seu chefe de equipa se sentir tonturas ou se se sentir mal. Levantar peso: os painéis são grandes e apanham o vento, por isso carregue-os a dois e levante com as pernas.",
            "Use o seu equipamento de proteção (EPI): capacete, óculos de segurança, luvas de trabalho e botas que não escorregam. Pare o trabalho e avise o seu chefe de equipa sempre que alguma coisa não parecer segura."
          ],
          steps: ["Antes de subir: verifique a escada, o tempo e o seu arnês.", "No telhado: fique sempre preso a uma ancoragem quando estiver a 6 pés ou mais de altura.", "Trate cada painel e cada fio como se tivesse corrente; não toque nas ligações se não for qualificado.", "Beba água, faça pausas à sombra e levante os painéis com um colega.", "Pare e avise o seu chefe de equipa sobre qualquer perigo."],
          words: [["OSHA", "a Administração de Segurança e Saúde no Trabalho dos EUA, a agência federal para a segurança no trabalho."], ["Proteção contra quedas", "equipamento e montagens que impedem uma queda ou a param com segurança."], ["Sistema pessoal de travamento de quedas", "um arnês de corpo inteiro, um cabo de segurança e uma ancoragem que seguram você se cair."], ["EPI", "equipamento de proteção individual: o equipamento de segurança que veste, como o capacete e as luvas (em inglês, PPE)."], ["Bloqueio e etiquetagem (lockout/tagout)", "passos que desligam e trancam a energia para que ninguém a possa voltar a ligar durante o trabalho."], ["Com corrente (live)", "a levar eletricidade."]],
          slides: [
            { title: "Quedas: o maior perigo", bullets: ["OSHA: proteção contra quedas a partir de 6 pés na construção", "Arnês, cabo de segurança e ancoragem no telhado", "Inspecione o arnês antes de cada uso"] },
            { title: "Choque elétrico", bullets: ["Os painéis fazem energia sempre que a luz lhes toca", "Os fios podem ter corrente mesmo com um interruptor desligado", "Só trabalhadores qualificados fazem o trabalho elétrico"] },
            { title: "Escadas, calor e levantar peso", bullets: ["Barras da escada 3 pés acima da beira do telhado; chão firme e plano", "Água, sombra e pausas para descansar", "Carregue os painéis a dois"] },
            { title: "Equipe-se e fale", bullets: ["Capacete, óculos de segurança, luvas, botas que não escorregam", "Pare o trabalho e avise o chefe de equipa se algo não for seguro"] }
          ],
          sources: [
            { name: "OSHA: Proteção contra quedas", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.501, obrigação de ter proteção contra quedas (construção)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.501" },
            { name: "OSHA: 29 CFR 1926.1053, escadas", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" },
            { name: "OSHA: Calor", url: "https://www.osha.gov/heat-exposure" },
            { name: "Gabinete de Estatísticas do Trabalho dos EUA (BLS): Instaladores de sistemas solares fotovoltaicos", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" }
          ],
          tryIt: "Situação de prática: é uma manhã quente de julho. A sua equipa está a pôr 18 painéis no telhado de uma casa de dois andares. A escada está em relva mole, um colega não tem arnês e os fios de um painel estão soltos e pendurados. Numa folha, faça uma lista com duas colunas: Perigo e Passo de segurança. Escreva pelo menos quatro linhas (quedas, choque, calor, levantar peso e a escada).",
          youCanNow: "identificar os principais perigos numa obra solar e dizer o passo de segurança para cada um.",
          quickCheck: [
            { objective: "O2", q: "Na construção, a partir de que altura a OSHA exige proteção contra quedas?", options: ["10 pés", "20 pés", "Só no cimo do telhado", "6 pés"], answer: 3, why: "A regra da OSHA para a construção exige proteção contra quedas a 6 pés ou mais acima de um nível mais baixo." },
            { objective: "O2", q: "Está sol e o interruptor de corte está desligado. É seguro tocar nos fios do painel?", options: ["Sim, o interruptor torna tudo seguro", "Não, os painéis fazem energia sempre que a luz lhes toca, por isso trate os fios como se tivessem corrente", "Sim, se usar luvas de trabalho", "Só se o inversor estiver silencioso"], answer: 1, why: "Os painéis continuam a fazer eletricidade com luz, por isso os fios que saem deles podem ainda ter corrente." }
          ]
        },
        {
          title: "Contas básicas de energia solar (só para praticar)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular os watts, o tamanho do sistema e a tensão de uma string a partir de números de prática.",
          text: [
            "As equipas usam algumas fórmulas simples todos os dias. Todos os números desta lição são inventados, só para praticar. Os projetos reais usam a etiqueta do painel, a ficha técnica do fabricante e o código elétrico, e são verificados por um projetista qualificado.",
            "Potência: watts = volts x amperes. Um painel de prática que faz 40 volts a 10 amperes produz 40 x 10 = 400 watts. 1,000 watts são 1 quilowatt (kW).",
            "Tamanho do sistema: número de painéis x watts por painel. 20 painéis de prática de 400 watts cada = 8,000 watts, ou seja, 8 kW.",
            "Strings: painéis ligados em série formam uma string (fileira). Em série, as tensões somam-se e os amperes ficam iguais. Três painéis de prática de 40 volts cada, em série = 120 volts. Em paralelo, os amperes somam-se e a tensão fica igual."
          ],
          steps: ["Escreva primeiro a fórmula.", "Ponha os números com as unidades (V, A, W).", "Faça a conta na calculadora.", "Passe os watts a quilowatts dividindo por 1,000.", "Verifique: a resposta faz sentido?"],
          words: [["Volt (V)", "uma medida do empurrão ou da pressão elétrica (a tensão)."], ["Ampere (A)", "uma medida de quanta eletricidade está a correr."], ["Watt (W)", "uma medida de potência: volts vezes amperes."], ["Quilowatt (kW)", "1,000 watts."], ["Série", "ligados um a seguir ao outro numa só linha; as tensões somam-se."], ["Paralelo", "ligados lado a lado; os amperes somam-se."], ["String (fileira)", "um grupo de painéis ligados em série."]],
          slides: [
            { title: "Só para praticar", bullets: ["Números inventados para aprender o método", "Os projetos reais usam a ficha técnica, o código e um projetista qualificado"] },
            { title: "Watts = volts x amperes", bullets: ["40 V x 10 A = 400 W", "1,000 W = 1 kW"] },
            { title: "Tamanho do sistema", bullets: ["Painéis x watts por painel", "20 x 400 W = 8,000 W = 8 kW"] },
            { title: "Série e paralelo", bullets: ["Série: os volts somam-se, os amperes ficam iguais", "3 x 40 V em série = 120 V", "Paralelo: os amperes somam-se, os volts ficam iguais"] }
          ],
          tryIt: "Só para praticar. Resolva numa folha e mostre as contas: (a) Um painel faz 36 volts a 11 amperes. Quantos watts? (b) Uma casa tem 24 painéis de 350 watts. Qual é o tamanho do sistema em kW? (c) Cinco painéis de 40 volts cada estão ligados em série. Qual é a tensão da string? Respostas para se verificar: (a) 396 W, (b) 8,400 W = 8.4 kW, (c) 200 V.",
          youCanNow: "calcular os watts, o tamanho do sistema e a tensão de uma string a partir de números de prática e mostrar as contas.",
          quickCheck: [
            { objective: "O3", q: "Só para praticar: 15 painéis de 400 watts cada. Qual é o tamanho do sistema?", options: ["4 kW", "6 kW", "15 kW", "400 kW"], answer: 1, why: "15 x 400 W = 6,000 W, e 6,000 / 1,000 = 6 kW." },
            { objective: "O3", q: "Só para praticar: quatro painéis de 40 volts cada estão ligados em série. Qual é a tensão da string?", options: ["40 V", "80 V", "10 V", "160 V"], answer: 3, why: "Em série, as tensões somam-se: 4 x 40 V = 160 V." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona a energia solar e como ficar em segurança",
        questions: [
          { objective: "O1", q: "Que tipo de eletricidade fazem os painéis solares?", options: ["AC", "DC", "Energia a gás", "Energia só de bateria"], answer: 1, why: "Os painéis fazem corrente contínua (DC); o inversor transforma-a em AC." },
          { objective: "O1", q: "Para que serve a estrutura de montagem?", options: ["Segura os painéis no telhado ou no chão", "Mede a energia enviada para a rede", "Transforma DC em AC", "Guarda energia para a noite"], answer: 0, why: "A estrutura de montagem é a armação de metal que segura os painéis." },
          { objective: "O2", q: "Está num telhado a 12 pés de altura. O que tem de usar?", options: ["Nada, se tiver cuidado", "Só um capacete", "Proteção contra quedas, como um arnês preso a uma ancoragem", "Uma escada mais alta"], answer: 2, why: "A partir de 6 pés na construção, precisa de proteção contra quedas." },
          { objective: "O2", q: "É um ajudante novo e um colega pede-lhe para ligar dois fios de um painel. O que faz?", options: ["Liga-os depressa, de luvas", "Espera que passe uma nuvem", "Pede ajuda ao cliente", "Diz que não e avisa o chefe de equipa, porque só trabalhadores qualificados fazem o trabalho elétrico"], answer: 3, why: "As ligações elétricas são para trabalhadores qualificados e com formação; os ajudantes novos não tocam nos fios." },
          { objective: "O3", q: "Só para praticar: um painel faz 50 volts a 8 amperes. Quantos watts são?", options: ["58 W", "400 W", "42 W", "800 W"], answer: 1, why: "Watts = volts x amperes, por isso 50 x 8 = 400 W." }
        ]
      }
    },
    {
      name: "Capítulo 2: Do telhado ao seu primeiro emprego",
      lessons: [
        {
          title: "Os passos de uma instalação num telhado",
          objectives: ["O4"],
          minutes: 5,
          goal: "Pôr por ordem os passos de uma instalação solar num telhado e dizer quem faz cada um.",
          text: [
            "Cada instalação segue um caminho. Primeiro, a avaliação do local: alguém verifica a idade e o estado do telhado, para que lado está virado, a sombra das árvores e o quadro elétrico da casa. Depois, um projetista desenha a posição dos painéis e a ligação dos fios.",
            "A seguir vem a licença de obra. O serviço de obras da cidade ou do condado analisa os planos antes de começar o trabalho. No dia da instalação, a equipa monta o equipamento de segurança, marca o telhado e fixa os suportes de telhado nas vigas. Cada suporte leva rufo e é vedado para o telhado não deixar entrar água. Depois a equipa aparafusa a estrutura de montagem e monta os painéis.",
            "Um eletricista qualificado ou um trabalhador licenciado faz as ligações elétricas, seguindo o Código Elétrico Nacional (NEC) e as regras locais. Depois o sistema é inspecionado pelo fiscal de obras local. Por fim, a empresa de eletricidade aprova a ligação do sistema à rede, o que muitas vezes se chama autorização para funcionar. Só então o sistema é ligado.",
            "Os ajudantes sobretudo carregam e preparam os materiais, ajudam a montar a estrutura e os painéis, mantêm a obra limpa e seguem as instruções do chefe de equipa."
          ],
          steps: ["Avaliação do local: telhado, orientação, sombra, quadro elétrico.", "Projeto: posição dos painéis e plano dos fios.", "Licença da cidade ou do condado.", "Montagem da segurança e depois os suportes de telhado, com rufo e vedados.", "Estrutura de montagem e depois os painéis montados.", "Ligações elétricas feitas por trabalhadores qualificados.", "Inspeção pelo fiscal local.", "Aprovação da empresa de eletricidade (autorização para funcionar) e depois ligar."],
          words: [["Avaliação do local", "uma visita para ver se um telhado ou um quintal serve para energia solar."], ["Licença de obra", "a autorização oficial da cidade ou do condado para fazer o trabalho."], ["Rufo (flashing)", "metal ou outro material que impede a entrada de água onde alguma coisa atravessa o telhado."], ["Viga (rafter)", "uma das vigas de madeira que seguram o telhado."], ["NEC", "o Código Elétrico Nacional dos EUA (NFPA 70), as regras para um trabalho elétrico seguro que os estados e as cidades adotam."], ["Inspeção", "uma verificação feita por um fiscal para ver se o trabalho cumpre o código."], ["Autorização para funcionar (permission to operate)", "o OK da empresa de eletricidade para ligar um sistema ligado à rede."]],
          slides: [
            { title: "Antes de a equipa chegar", bullets: ["Avaliação do local: telhado, orientação, sombra, quadro", "Projeto: posição dos painéis e fios", "Licença da cidade ou do condado"] },
            { title: "Dia da instalação", bullets: ["Primeiro, a montagem da segurança", "Suportes nas vigas, com rufo e vedados", "Estrutura de montagem e depois os painéis"] },
            { title: "Acabamento", bullets: ["Trabalho elétrico por trabalhadores qualificados, segundo o NEC", "Inspeção local", "Aprovação da empresa de eletricidade e depois ligar"] },
            { title: "O que fazem os ajudantes", bullets: ["Carregam e preparam os materiais", "Ajudam a montar a estrutura e os painéis", "Mantêm a obra limpa; seguem o chefe de equipa"] }
          ],
          sources: [
            { name: "Departamento de Energia dos EUA: Guia do proprietário para passar à energia solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" },
            { name: "NFPA 70: Código Elétrico Nacional (verifique que edição o seu estado usa)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" }
          ],
          tryIt: "Escreva cada um dos 8 passos da instalação num pedaço de papel pequeno. Misture-os e volte a pô-los por ordem sem olhar para a lição. Ao lado de cada um, escreva quem o faz: projetista, cidade ou condado, equipa, eletricista qualificado, fiscal ou empresa de eletricidade. Compare a sua ordem com a lição.",
          youCanNow: "pôr por ordem os passos de uma instalação solar num telhado e dizer quem faz cada um.",
          quickCheck: [
            { objective: "O4", q: "O que vem normalmente logo antes do dia da instalação?", options: ["Obter a licença de obra", "A inspeção final", "A autorização para funcionar da empresa de eletricidade", "Ligar o sistema"], answer: 0, why: "A licença da cidade ou do condado vem antes de começar o trabalho no telhado." },
            { objective: "O4", q: "Porque é que os suportes de telhado levam rufo e são vedados?", options: ["Para os painéis brilharem", "Para o telhado não deixar entrar água", "Para a inspeção ser mais rápida", "Para os painéis produzirem mais energia"], answer: 1, why: "O rufo e a vedação impedem a entrada de água onde os parafusos atravessam o telhado." }
          ]
        },
        {
          title: "Credenciais, licenças e formação",
          objectives: ["O5"],
          minutes: 5,
          goal: "Fazer a lista das credenciais e licenças para o trabalho solar de nível inicial onde vive, com a fonte oficial de cada uma.",
          text: [
            "Muitos instaladores começam como ajudantes e aprendem no trabalho, muitas vezes durante um mês a um ano. Alguns fazem primeiro um curso curto num community college (escola superior local), numa escola técnica ou num programa de aprendizagem. Eletricistas, trabalhadores de telhados e da construção conseguem muitas vezes passar mais depressa para a energia solar.",
            "A NABCEP (o Conselho Norte-Americano de Profissionais Certificados em Energia) oferece credenciais solares muito conhecidas. A de nível inicial é a NABCEP PV Associate. Pode qualificar-se terminando um curso com um Formador Registado para o nível Associate da NABCEP, ou mostrando pelo menos seis meses de trabalho solar a tempo inteiro, e depois passando no exame. Mais tarde, os instaladores com experiência podem procurar a Certificação do Conselho da NABCEP, como a PV Installation Professional.",
            "As licenças são definidas pelos estados e por algumas cidades. Alguns estados exigem uma licença solar ou de eletricista para certos trabalhos; outros não. As taxas, as regras dos exames e os requisitos mudam, por isso verifique você mesmo a página oficial da NABCEP e o organismo de licenciamento do seu estado antes de pagar seja o que for.",
            "Este curso prepara você para começar. Não lhe dá uma credencial nem uma licença."
          ],
          steps: ["Leia a página do programa Associate da NABCEP.", "Encontre um formador registado ou conte os seus meses de trabalho solar.", "Procure as regras para a energia solar no organismo de licenciamento de empreiteiros ou de eletricistas do seu estado.", "Escreva cada requisito e a página onde o encontrou.", "Pergunte às empresas solares locais que credenciais querem."],
          words: [["NABCEP", "o Conselho Norte-Americano de Profissionais Certificados em Energia (North American Board of Certified Energy Practitioners), que oferece credenciais solares."], ["Credencial", "prova de que passou num teste ou cumpriu um padrão."], ["Licença", "autorização de um estado ou de uma cidade para fazer certos trabalhos."], ["Aprendizagem", "um emprego pago com formação, em que aprende com trabalhadores experientes."], ["Formador registado", "uma escola que a NABCEP indica como aprovada para preparar você para o exame Associate."]],
          slides: [
            { title: "Formas de entrar", bullets: ["Começar como ajudante e aprender no trabalho", "Cursos curtos, community colleges, programas de aprendizagem", "Trabalho de eletricidade, telhados ou construção ajuda"] },
            { title: "NABCEP PV Associate", bullets: ["Credencial solar de nível inicial", "Qualifique-se com um curso registado ou 6 meses de trabalho solar", "Depois passe no exame"] },
            { title: "As licenças são locais", bullets: ["Definidas pelo seu estado e, às vezes, pela sua cidade", "Alguns estados exigem uma licença solar ou de eletricista"] },
            { title: "Verifique antes de pagar", bullets: ["Página oficial da NABCEP e o organismo de licenciamento do seu estado", "Escreva cada requisito e a sua fonte", "Este curso prepara você; não lhe dá uma licença"] }
          ],
          sources: [
            { name: "NABCEP: Programa Associate (PV Associate)", url: "https://www.nabcep.org/certification/associate-program/" },
            { name: "NABCEP: Certificações", url: "https://www.nabcep.org/certifications/" },
            { name: "Gabinete de Estatísticas do Trabalho dos EUA (BLS): Como ser instalador de sistemas solares fotovoltaicos", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" },
            { name: "CareerOneStop: Pesquisa de licenças (License Finder)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Abra a página do programa Associate da NABCEP e escreva as formas de se qualificar para a PV Associate. Depois pesquise o nome do seu estado mais \"solar contractor license\" e encontre a página oficial do organismo de licenciamento do seu estado (muitas vezes acaba em .gov). Escreva uma linha sobre o que diz e o endereço da página.",
          youCanNow: "dizer o nome da credencial NABCEP de nível inicial, explicar como se qualificar para ela e encontrar as regras de licenciamento do seu estado na página oficial.",
          quickCheck: [
            { objective: "O5", q: "Qual é a credencial solar PV de nível inicial da NABCEP?", options: ["EPA Section 608", "CDL Class A", "NABCEP PV Associate", "CompTIA A+"], answer: 2, why: "A NABCEP PV Associate é a credencial solar PV de nível inicial." },
            { objective: "O5", q: "Onde verifica se o seu estado exige uma licença para o trabalho solar?", options: ["Numa publicação nas redes sociais", "Num anúncio de um curso rápido na internet", "Com um amigo de outro estado", "Na página oficial do organismo de licenciamento do seu estado"], answer: 3, why: "As licenças são definidas por cada estado, por isso a página oficial do organismo do estado é a fonte de confiança." }
          ]
        },
        {
          title: "O seu Plano de Início na Energia Solar",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever um Plano de Início na Energia Solar com datas e uma secção de competências para o currículo.",
          text: [
            "Agora junte tudo numa página que pode levar a um programa de formação ou a uma entrevista. Um plano com datas reais mostra a um empregador que você leva isto a sério.",
            "O seu plano tem seis partes: como funciona a energia solar, com as suas palavras; uma lista de verificação de segurança; dois problemas de prática com as contas mostradas; os passos da instalação por ordem; o seu caminho para a credencial, com datas e fontes; e uma secção \"Competências solares\" para o currículo.",
            "Na secção do currículo, escreva coisas verdadeiras que já sabe fazer, em pontos curtos que começam com uma palavra de ação. Por exemplo: \"Conheço as partes de um sistema PV ligado à rede e como a DC passa a AC.\" \"Formado nos perigos de uma obra solar: proteção contra quedas, choque, calor e levantar peso com segurança.\" \"Sei calcular o tamanho do sistema e a tensão de uma string.\" Junte trabalhos anteriores que ajudem: construção, telhados, vida militar, armazém ou qualquer trabalho com ferramentas, alturas ou trabalho em equipa.",
            "Antigos militares e pessoas com registo criminal: muitas empresas solares contratam pessoas destes grupos. Seja honesto nas candidaturas e pergunte a um centro de emprego local ou a um programa de reintegração sobre apoio para a formação."
          ],
          steps: ["Escreva a sua explicação de 3 a 4 frases de um sistema ligado à rede.", "Copie a sua lista de verificação de segurança da Lição 2 e termine-a.", "Junte dois problemas de prática com as contas.", "Escreva os 8 passos da instalação por ordem.", "Escreva o seu caminho para a credencial com datas previstas e as páginas de origem.", "Escreva 3 pontos para o currículo que comecem com uma palavra de ação."],
          words: [["Currículo", "um documento curto com as suas competências, trabalhos e formação, para os empregadores."], ["Data prevista", "o dia em que planeia terminar um passo."], ["Centro de emprego", "um serviço público gratuito que ajuda as pessoas a encontrar emprego e formação; nos EUA, muitos chamam-se American Job Centers."]],
          slides: [
            { title: "Uma página, seis partes", bullets: ["Como funciona a energia solar; lista de segurança", "Contas de prática; passos da instalação", "Caminho para a credencial com datas; secção do currículo"] },
            { title: "Datas reais", bullets: ["Quando vai começar a formação", "Quando pensa fazer o exame NABCEP PV Associate", "Quando vai candidatar-se a empregos de ajudante"] },
            { title: "Currículo: Competências solares", bullets: ["Pontos curtos que começam com uma palavra de ação", "Só coisas verdadeiras que sabe fazer", "Junte trabalhos anteriores com ferramentas, alturas ou trabalho em equipa"] },
            { title: "Peça ajuda", bullets: ["American Job Centers e programas de reintegração", "Pergunte sobre apoio para a formação e empresas locais"] }
          ],
          sources: [{ name: "CareerOneStop: Encontrar um American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Tarefa final: faça o seu Plano de Início na Energia Solar numa página, com as seis partes. Ponha uma data real ao lado de cada passo da credencial e do emprego, e o endereço da página de cada requisito que verificou. Leia os pontos do seu currículo em voz alta, como se estivesse numa entrevista.",
          youCanNow: "mostrar a um empregador ou a um programa de formação um plano escrito para começar a trabalhar na energia solar, com datas, fontes e uma secção de competências para o currículo.",
          quickCheck: [
            { objective: "O6", q: "Qual é o melhor ponto de currículo para um emprego de ajudante solar?", options: ["\"Trabalhador esforçado.\"", "\"Formado nos perigos de uma obra solar: proteção contra quedas, choque, calor e levantar peso com segurança.\"", "\"Eletricista solar licenciado.\" (quando não é)", "\"Gosto do sol.\""], answer: 1, why: "É verdadeiro, concreto e começa com uma palavra de ação; nunca diga que tem uma licença que não tem." },
            { objective: "O6", q: "O que torna um Plano de Início na Energia Solar mais forte?", options: ["Datas previstas reais e a página de origem de cada requisito", "Nenhuma data, para ficar flexível", "Copiar o plano de um amigo", "Deixar de fora a parte da segurança"], answer: 0, why: "As datas e as fontes oficiais transformam um desejo num plano em que um empregador pode confiar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Do telhado ao seu primeiro emprego",
        questions: [
          { objective: "O4", q: "Quem dá a aprovação final para ligar um sistema à rede?", options: ["O ajudante", "O fabricante dos painéis", "O vizinho do cliente", "A empresa de eletricidade"], answer: 3, why: "A empresa de eletricidade dá a autorização para funcionar antes de o sistema ser ligado." },
          { objective: "O4", q: "Que passo vem primeiro?", options: ["Montar os painéis", "A inspeção", "A avaliação do local", "Ligar o sistema"], answer: 2, why: "A avaliação do local verifica o telhado, a orientação, a sombra e o quadro elétrico antes de tudo." },
          { objective: "O5", q: "Qual é uma forma de se qualificar para o exame NABCEP PV Associate?", options: ["Terminar um curso com um Formador Registado para o nível Associate da NABCEP", "Comprar um painel solar", "Ver um vídeo na internet", "Trabalhar um dia num telhado"], answer: 0, why: "O caminho pela formação é um curso com um formador registado; outro caminho é pelo menos seis meses de trabalho solar." },
          { objective: "O5", q: "Este curso dá-lhe uma licença solar?", options: ["Sim, depois do questionário", "Não; prepara você, e as licenças vêm do seu estado ou da sua cidade", "Sim, se terminar num dia", "Só nos estados com muito sol"], answer: 1, why: "O curso prepara você; as credenciais vêm da NABCEP e as licenças do estado ou da cidade." },
          { objective: "O6", q: "O seu plano diz \"Fazer o exame PV Associate.\" O que deve juntar?", options: ["Nada", "O nome de um amigo", "Uma data prevista e a página oficial que verificou", "Uma fotografia de um painel"], answer: 2, why: "Uma data e uma fonte tornam o passo real e possível de verificar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Instalação de Painéis Solares",
    questions: [
      { objective: "O1", q: "Em que transformam os painéis solares a luz do sol?", options: ["Só em calor", "Em eletricidade DC", "Em gás natural", "Em eletricidade AC, sem inversor"], answer: 1, why: "Os painéis solares PV fazem eletricidade de corrente contínua (DC)." },
      { objective: "O1", q: "Que parte mede a eletricidade que uma casa usa e a que envia para a rede?", options: ["O contador", "A estrutura de montagem", "O rufo", "O arnês"], answer: 0, why: "O contador mede a energia que entra e que sai." },
      { objective: "O1", q: "Um sistema de uma casa que continua ligado às linhas da empresa de eletricidade chama-se:", options: ["Fora de estrada", "Autónomo", "Só de bateria", "Ligado à rede"], answer: 3, why: "Os sistemas ligados à rede estão ligados à rede elétrica." },
      { objective: "O1", q: "Para que serve uma bateria em algumas casas com energia solar?", options: ["Para segurar os painéis no telhado", "Para transformar AC em DC para o contador", "Para guardar energia para mais tarde ou para quando falta a luz", "Para substituir o inversor"], answer: 2, why: "Uma bateria guarda energia para usar mais tarde, por exemplo à noite ou quando falta a luz." },
      { objective: "O2", q: "Qual é o maior perigo no trabalho de instalação solar?", options: ["Cortes com papel", "Quedas de telhados e escadas", "Música alta", "Chuva em cima da carrinha"], answer: 1, why: "As quedas são o maior perigo para os instaladores solares." },
      { objective: "O2", q: "Que equipamento faz parte de um sistema pessoal de travamento de quedas?", options: ["Óculos de segurança", "Botas de trabalho", "Um arnês de corpo inteiro, um cabo de segurança e uma ancoragem", "Um cinto de ferramentas"], answer: 2, why: "Um arnês, um cabo de segurança e uma ancoragem, juntos, seguram uma queda." },
      { objective: "O2", q: "Está muito calor e um colega sente tonturas. O que faz?", options: ["Avisa o chefe de equipa, leva-o para a sombra e dá-lhe água", "Diz-lhe para continuar a trabalhar", "Manda-o subir a escada", "Ignora até ao almoço"], answer: 0, why: "As tonturas podem ser uma doença causada pelo calor: primeiro sombra, água, descanso e avisar o chefe de equipa." },
      { objective: "O2", q: "Como deve carregar um painel solar grande?", options: ["Sozinho, por cima da cabeça", "Na beira de um telhado com vento", "Pelos fios", "Com um colega, levantando com as pernas"], answer: 3, why: "Os painéis são grandes e apanham o vento, por isso duas pessoas carregam-nos usando as pernas." },
      { objective: "O3", q: "Só para praticar: 30 volts x 9 amperes = ?", options: ["39 W", "270 W", "21 W", "2,700 W"], answer: 1, why: "Watts = volts x amperes: 30 x 9 = 270 W." },
      { objective: "O3", q: "Só para praticar: 25 painéis de 400 watts. Qual é o tamanho do sistema?", options: ["10 kW", "4 kW", "25 kW", "1 kW"], answer: 0, why: "25 x 400 W = 10,000 W = 10 kW." },
      { objective: "O3", q: "Numa string em série, o que acontece à tensão?", options: ["Fica igual", "Vai a zero", "As tensões somam-se", "Fica a metade"], answer: 2, why: "Em série, a tensão de cada painel soma-se à tensão da string." },
      { objective: "O3", q: "Quantos watts há em 1 quilowatt?", options: ["10", "100", "10,000", "1,000"], answer: 3, why: "Quilo quer dizer 1,000, por isso 1 kW = 1,000 W." },
      { objective: "O4", q: "O que acontece antes de começar o trabalho no telhado?", options: ["A licença da cidade ou do condado", "A inspeção final", "A autorização para funcionar", "Ligar o sistema"], answer: 0, why: "A licença é aprovada antes de começar a instalação." },
      { objective: "O4", q: "Quem faz as ligações elétricas numa instalação solar?", options: ["Qualquer ajudante novo", "O cliente", "Um eletricista qualificado ou um trabalhador licenciado", "O leitor do contador da empresa de eletricidade"], answer: 2, why: "O trabalho elétrico é feito por trabalhadores qualificados, seguindo o NEC e as regras locais." },
      { objective: "O4", q: "Qual é o último passo antes de o sistema ser ligado?", options: ["A avaliação do local", "O projeto", "Montar a estrutura de montagem", "A autorização para funcionar da empresa de eletricidade"], answer: 3, why: "A aprovação da empresa de eletricidade vem depois da inspeção e antes de ligar." },
      { objective: "O5", q: "O que oferece a NABCEP?", options: ["Cartas de condução", "Credenciais solares, como a PV Associate", "Licenças de obra", "Contas de eletricidade"], answer: 1, why: "A NABCEP oferece credenciais solares e certificações do conselho." },
      { objective: "O5", q: "Quem define as regras de licenciamento para o trabalho solar e elétrico?", options: ["Cada estado e, às vezes, a cidade", "O fabricante dos painéis", "A NABCEP, para todos os estados", "O cliente"], answer: 0, why: "O licenciamento é definido pelos estados e, às vezes, pelos governos locais." },
      { objective: "O5", q: "Um anúncio na internet diz que você será \"instalador solar licenciado em 2 dias\". O que faz?", options: ["Paga logo", "Partilha com os amigos", "Dá-lhes o seu número da Segurança Social", "Verifica o que dizem nas páginas da NABCEP e do organismo de licenciamento do seu estado"], answer: 3, why: "As páginas oficiais dizem-lhe os requisitos reais antes de pagar." },
      { objective: "O6", q: "O que deve estar no seu Plano de Início na Energia Solar?", options: ["A palavra-passe do seu banco", "Datas previstas para a formação e para o exame PV Associate", "Uma lista das suas músicas favoritas", "Uma licença que não tem"], answer: 1, why: "As datas de cada passo tornam o plano real." },
      { objective: "O6", q: "Um bom ponto de currículo deve ser:", options: ["Longo e vago", "Copiado de um desconhecido", "Verdadeiro, concreto e começar com uma palavra de ação", "Sobre uma competência que pensa aprender um dia"], answer: 2, why: "Os empregadores confiam em pontos curtos, verdadeiros e concretos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe sobre energia solar?", from: [0, 2, 4, 6, 8, 10, 13, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Como funciona a energia solar", objective: "O1", notYet: "A explicação esquece o inversor ou confunde AC e DC.", meets: "Dá o nome aos painéis, à estrutura de montagem, ao inversor, ao interruptor de corte, ao contador e à rede, e diz para que serve cada um.", exceeds: "Também explica, com as suas palavras, porque é que o interruptor de corte é importante para a segurança durante a manutenção e porque é que os painéis têm corrente sempre que há luz do dia." },
      { name: "Lista de verificação de segurança", objective: "O2", notYet: "Esquece as quedas ou o choque elétrico, ou não dá nenhum passo de segurança.", meets: "Indica as quedas, o choque, o calor e o levantamento de peso, cada um com um passo de segurança certo (incluindo a proteção contra quedas a partir de 6 pés).", exceeds: "Junta a montagem da escada e uma regra de parar o trabalho, e diz a quem avisar." },
      { name: "Contas de prática", objective: "O3", notYet: "Um erro de contas, ou as contas não estão mostradas.", meets: "Os dois problemas estão certos, com a fórmula e as unidades mostradas.", exceeds: "Também verifica se cada resposta faz sentido e passa os watts a kW corretamente." },
      { name: "Passos da instalação", objective: "O4", notYet: "Dois ou mais passos fora de ordem, ou falta a licença ou a inspeção.", meets: "Os 8 passos por ordem, com no máximo um fora do lugar, e quem faz cada um.", exceeds: "Explica porque é que o rufo e a aprovação da empresa de eletricidade são importantes." },
      { name: "Caminho para a credencial", objective: "O5", notYet: "Sem datas, ou requisitos sem fonte.", meets: "Indica a NABCEP PV Associate e uma forma de se qualificar, mais a verificação do licenciamento no estado, cada um com uma data prevista e o endereço da página.", exceeds: "Indica um formador registado ou uma empresa local concreta e um plano alternativo." },
      { name: "Secção do currículo", objective: "O6", notYet: "Os pontos são vagos ou dizem que o aluno tem uma licença ou credencial que não tem.", meets: "Três pontos verdadeiros que começam com uma palavra de ação e correspondem ao trabalho solar.", exceeds: "Liga trabalhos anteriores (construção, vida militar, armazém) às tarefas da energia solar." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num programa de formação solar ou de aprendizagem em 90 dias",
      "Alunos que passam no exame NABCEP PV Associate em 12 meses (dito pelo próprio aluno)",
      "Alunos contratados como ajudantes ou instaladores solares em 6 meses (inquérito de seguimento ou relatório de um parceiro)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador com internet para ler as lições e verificar as páginas oficiais",
      "Papel, caneta e uma calculadora (a calculadora do telefone serve)",
      "Opcional: uma imagem impressa de um sistema solar de uma casa para pôr os nomes das partes",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Neste curso ninguém sobe a um telhado nem toca em peças elétricas. Se mostrar equipamento real, mantenha-o desligado, longe da luz e no chão.",
      "Façam o teste inicial juntos, depois um capítulo por sessão, e resolvam as contas de prática num quadro branco.",
      "Peça aos alunos que procurem, na hora, a página de licenciamento do seu próprio estado; os requisitos variam de estado para estado.",
      "Convide um instalador solar local, um centro de formação de um sindicato ou um formador registado da NABCEP para falar sobre contratações.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Para alunos com registo criminal ou sob supervisão: indique-lhes programas de reintegração e de emprego e lembre-os de serem honestos nas candidaturas."
    ]
  }
};
