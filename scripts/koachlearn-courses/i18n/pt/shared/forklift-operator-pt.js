"use strict";

// Koach Learn course (Portuguese translation of shared/forklift-operator.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US rule (OSHA 29 CFR 1910.178); US names, units (lb, polegadas, pés) and numbers are kept as in the English.

const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Veículos industriais motorizados (a regra federal dos EUA sobre empilhadores)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const OSHA_ETOOL = { name: "OSHA eTool: Powered Industrial Trucks (Empilhadores)", url: "https://www.osha.gov/etools/powered-industrial-trucks" };
const OSHA_TYPES = { name: "OSHA eTool: Tipos de empilhadores (Classes I a VII)", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/types" };
const OSHA_PARTS = { name: "OSHA eTool: Peças do empilhador", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts" };
const OSHA_PREOP = { name: "OSHA eTool: Inspeção antes da operação", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" };
const OSHA_LOAD = { name: "OSHA eTool: Manuseamento de cargas", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/load-handling" };
const OSHA_TRAVEL = { name: "OSHA eTool: Circulação e manobras", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" };
const OSHA_DOCKS = { name: "OSHA eTool: Cais de carga", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/loading-docks" };
const OSHA_TRAINING = { name: "OSHA eTool: Formação de operadores", url: "https://www.osha.gov/etools/powered-industrial-trucks/training" };
const AGE_RULE = { name: "29 CFR 570.58: Proibição de operar empilhadores para trabalhadores com menos de 18 anos (regra do Departamento do Trabalho dos EUA, cópia do Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/29/570.58" };

module.exports = {
  id: "forklift-operator-pt",
  lang: "pt",
  translationOf: "forklift-operator",
  category: "Workforce Development",
  name: "Noções Básicas de Operador de Empilhador",
  skills: "Conhecer os tipos e as peças do empilhador, Fazer a inspeção antes do turno, Ler a placa de capacidade, Manusear cargas com segurança, Conduzir com segurança perto de pessoas e de cais",
  outcome: "dizer os principais tipos e peças de um empilhador, fazer uma inspeção completa antes do turno e retirar de serviço um empilhador inseguro, decidir se uma carga é segura para levantar usando a placa de capacidade, escolher a ação segura ao conduzir, empilhar, trabalhar no cais e estacionar, e fazer um plano para receber formação e avaliação de um empregador.",
  about: [
    "Os operadores de empilhador movem mercadorias em armazéns, lojas, fábricas, quintas e obras. Este curso é para quem procura emprego, para pessoas que voltam para casa depois da prisão, para antigos militares e para qualquer pessoa que queira começar este trabalho.",
    "Você vai aprender os tipos e as peças de um empilhador, a inspeção diária, como ler a placa de capacidade e avaliar uma carga, as regras para conduzir perto de pessoas, rampas e cais de carga, e como estacionar com segurança.",
    "Importante: este curso prepara você, mas não o certifica. Pela regra da OSHA sobre empilhadores (29 CFR 1910.178), o seu empregador tem de lhe dar formação, ver você a conduzir o empilhador dele no local de trabalho dele e avaliá-lo antes de você operar sozinho. Um curso pela internet ou um cartão, sozinhos, não chegam. Tem de ter pelo menos 18 anos. Não conduza um empilhador para praticar até estar numa formação com supervisão.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" em papel. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um dossiê de preparação para empilhador: uma lista de inspeção antes do turno para um tipo de empilhador, três decisões de carga a partir de placas de capacidade de prática com a sua razão para cada uma, um cartão de bolso com os passos de estacionamento e do cais, e um plano para receber formação e avaliação de um empregador, com uma linha honesta para o currículo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que procuram trabalho em armazéns, centros de distribuição, armazéns de lojas ou fábricas: pessoas à procura de emprego, pessoas que voltam para casa depois da prisão, antigos militares e jovens adultos com 18 anos ou mais. Alguns já conduziram empilhadores de maneira informal; a maioria não.",
    startingPoint: "Sabem conduzir um carro ou andar de bicicleta e seguir uma lista de verificação. Sabem pouco sobre as peças do empilhador, a estabilidade, a capacidade de carga ou as regras da OSHA. Alguns acreditam que um cartão obtido pela internet basta para ficarem certificados.",
    gap: "Os empilhadores estão por trás de muitos ferimentos graves em armazéns, como capotamentos, pessoas atingidas e quedas do cais. Os empregadores têm de dar formação e avaliar cada operador, e contratam pessoas que já conhecem a inspeção, as regras de carga e os hábitos de segurança. Os alunos precisam desse conhecimento, e de uma ideia verdadeira de como funciona a certificação, para estarem prontos para a formação do empregador e não pagarem por uma \"certificação instantânea\" enganosa.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo é explicado",
      "Neste curso não se conduz nenhum empilhador: a prática só acontece na formação do empregador, com supervisão",
      "Os alunos têm de ter pelo menos 18 anos para operar um empilhador no trabalho",
      "Aparelhos: um telefone ou um computador da biblioteca para as páginas da OSHA; papel para as listas",
      "As regras aqui são as da OSHA federal dos EUA; alguns estados têm os seus próprios planos da OSHA, com regras pelo menos tão rigorosas"
    ],
    prerequisites: "Nenhum. O curso \"Noções Básicas de Segurança no Trabalho (OSHA)\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com imagens ou descrições de empilhadores", action: "identificar o tipo de empilhador e apontar as peças principais", standard: "dizendo pelo menos 6 peças e para que serve cada uma" },
    { id: "O2", condition: "Usando uma lista de inspeção", action: "fazer uma inspeção antes do turno e decidir se o empilhador pode ser usado", standard: "verificando todos os pontos e retirando de serviço qualquer empilhador inseguro" },
    { id: "O3", condition: "Com uma placa de capacidade e a descrição de uma carga", action: "decidir se a carga é segura para levantar e explicar porquê", standard: "acertando pelo menos 4 de 5 decisões de carga" },
    { id: "O4", condition: "Com uma situação de condução, empilhamento, cais ou estacionamento", action: "escolher a ação segura segundo as regras da OSHA", standard: "acertando pelo menos 4 de 5 situações" },
    { id: "O5", condition: "Usando o que a OSHA exige dos empregadores", action: "escrever um plano para receber formação e avaliação e uma linha honesta para o currículo", standard: "que diga o papel do empregador e não declare nenhuma certificação que você não tem" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O trabalho, o empilhador e a verificação diária",
      lessons: [
        {
          title: "O trabalho de operador de empilhador e a regra de formação da OSHA",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explicar quem dá formação e certifica um operador de empilhador e quando é preciso repetir a formação.",
          text: [
            "A OSHA chama aos empilhadores \"veículos industriais motorizados\" (powered industrial trucks). A sua regra, 29 CFR 1910.178, diz que o empregador tem de garantir que cada operador é competente. Isso quer dizer formação (aulas e prática com as mãos, com um formador qualificado) e uma avaliação de você a conduzir no local de trabalho real.",
            "Depois, o empregador certifica que você recebeu formação e foi avaliado. O registo mostra o seu nome, as datas da formação e da avaliação, e quem as fez. A sua avaliação tem de ser repetida pelo menos uma vez a cada três anos.",
            "Você também recebe formação de atualização se for visto a conduzir de forma insegura, tiver um acidente ou um quase acidente, tiver uma avaliação fraca, for mudado para outro tipo de empilhador, ou se o local de trabalho mudar de uma forma que afete a segurança.",
            "As regras federais do trabalho dos EUA não deixam ninguém com menos de 18 anos operar um empilhador no trabalho. E um curso pela internet ou um cartão de bolso, sozinhos, não fazem de você uma pessoa certificada: só a formação e a avaliação do seu empregador o fazem."
          ],
          words: [["OSHA", "a Occupational Safety and Health Administration, o serviço do governo dos EUA para a segurança no trabalho."], ["Veículo industrial motorizado", "o nome que a OSHA dá aos empilhadores e a máquinas parecidas que levantam e movem cargas."], ["Avaliação", "uma pessoa qualificada observa você a operar no local de trabalho para ver se trabalha com segurança."], ["Formação de atualização", "formação extra para corrigir um problema ou preparar você para um novo empilhador ou local de trabalho."], ["Quase acidente", "um acontecimento em que ninguém se magoou, mas alguém podia ter-se magoado."]],
          slides: [
            { title: "Quem certifica você?", bullets: ["O seu empregador, não um site", "Formação: aulas mais prática com um formador", "Avaliação: você a conduzir no local de trabalho real"] },
            { title: "O registo", bullets: ["O seu nome", "Datas da formação e da avaliação", "Quem lhe deu formação e quem o avaliou"] },
            { title: "Quando volta a ter formação", bullets: ["Pelo menos a cada três anos: uma nova avaliação", "Depois de um acidente, quase acidente ou condução insegura", "Novo tipo de empilhador ou local de trabalho mudado"] },
            { title: "Antes de começar", bullets: ["Tem de ter pelo menos 18 anos", "Nada de conduzir para praticar sem um formador"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING, AGE_RULE],
          tryIt: "Em papel, escreva três frases com as suas palavras: quem dá formação e avalia um operador de empilhador, de quanto em quanto tempo a avaliação é repetida, e dois acontecimentos que querem dizer que precisa de formação de atualização.",
          youCanNow: "explicar quem dá formação e certifica um operador de empilhador, de quanto em quanto tempo é avaliado e quando precisa de formação de atualização.",
          quickCheck: [
            { objective: "O5", q: "Quem tem de lhe dar formação e avaliá-lo antes de operar um empilhador no trabalho?", options: ["Qualquer site que vende cartões", "O seu empregador, no seu local de trabalho", "Um amigo que conduz empilhadores", "Ninguém"], answer: 1, why: "A regra da OSHA põe a formação e a avaliação a cargo do empregador, no local de trabalho real." },
            { objective: "O5", q: "Você bate numa estante com o empilhador. Ninguém se magoa. O que é verdade?", options: ["Não é preciso fazer nada", "Perde o emprego automaticamente", "Tem de comprar um cartão novo pela internet", "É uma razão para formação de atualização"], answer: 3, why: "Um acidente ou um quase acidente é uma das situações em que a OSHA exige formação de atualização." }
          ]
        },
        {
          title: "Tipos e peças de empilhadores",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar o tipo de empilhador e dizer as suas peças principais.",
          text: [
            "A OSHA divide os empilhadores em sete classes. Classe I: empilhadores elétricos com condutor sentado ou de pé. Classe II: empilhadores elétricos para corredores estreitos. Classe III: empilhadores elétricos manuais, incluindo os porta-paletes que se conduzem a pé. Classes IV e V: empilhadores com motor a combustão, com pneus maciços para pisos lisos de interior (IV) ou pneus com ar para o exterior (V). Classe VI: tratores que rebocam. Classe VII: empilhadores todo-o-terreno para obras e quintas.",
            "A maioria dos empilhadores de contrapeso tem as mesmas peças principais. Os garfos levantam a carga. Os garfos estão pendurados no porta-garfos, que sobe e desce no mastro. O encosto de carga impede a carga de cair para trás, na sua direção. A proteção superior protege você de objetos que caem. O contrapeso, atrás, equilibra a carga.",
            "No lugar do condutor tem o volante, o comando de direção (para a frente e marcha-atrás), as alavancas de elevação e de inclinação, a buzina, os travões e o cinto de segurança. A placa de capacidade (também chamada placa de identificação) diz quanto o empilhador consegue levantar."
          ],
          words: [["Mastro", "a estrutura vertical por onde os garfos sobem e descem."], ["Porta-garfos", "a placa no mastro que segura os garfos."], ["Encosto de carga", "uma estrutura por cima dos garfos que impede a carga de cair para trás, para o operador."], ["Proteção superior", "a estrutura em forma de teto que protege o operador de objetos que caem."], ["Contrapeso", "um peso pesado na parte de trás do empilhador que equilibra a carga."], ["Placa de capacidade", "a placa no empilhador que mostra o modelo e quanto ele consegue levantar."]],
          slides: [
            { title: "Sete classes", bullets: ["I, II, III: elétricos (com condutor, corredor estreito, manuais)", "IV, V: com motor, para interior ou exterior", "VI: tratores de reboque; VII: todo-o-terreno"] },
            { title: "Peças que levantam", bullets: ["Garfos no porta-garfos", "O porta-garfos move-se no mastro", "O encosto de carga mantém a carga longe de você"] },
            { title: "Peças que protegem", bullets: ["Proteção superior por cima da cabeça", "Contrapeso atrás", "Cinto de segurança, buzina e luzes"] },
            { title: "A placa de capacidade", bullets: ["Mostra o modelo do empilhador", "Mostra quanto ele consegue levantar", "Tem de estar no lugar e legível"] }
          ],
          sources: [OSHA_TYPES, OSHA_PARTS],
          tryIt: "Desenhe uma vista de lado simples de um empilhador com condutor sentado (caixas e linhas servem). Escreva o nome de pelo menos seis peças: garfos, porta-garfos, mastro, encosto de carga, proteção superior, contrapeso. Ao lado de cada uma, escreva uma linha sobre para que serve.",
          youCanNow: "dizer em que classe está um empilhador e dizer as suas peças principais e para que servem.",
          quickCheck: [
            { objective: "O1", q: "Que peça impede uma carga de cair para trás, na direção do operador?", options: ["O encosto de carga", "O contrapeso", "Os pneus", "A buzina"], answer: 0, why: "O encosto de carga fica por cima dos garfos e impede a carga de cair na sua direção." },
            { objective: "O1", q: "Um empilhador feito para terreno irregular numa obra é de que classe?", options: ["Classe I", "Classe III", "Classe VII", "Classe IV"], answer: 2, why: "A Classe VII são os empilhadores todo-o-terreno para chão irregular no exterior." }
          ]
        },
        {
          title: "A inspeção antes do turno",
          objectives: ["O2"],
          minutes: 6,
          goal: "Preencher uma lista de inspeção antes do turno e decidir se o empilhador é seguro para usar.",
          text: [
            "A OSHA exige que cada empilhador seja examinado antes de ser usado, pelo menos uma vez por dia; se os empilhadores trabalham dia e noite, depois de cada turno. Se alguma coisa torna o empilhador inseguro, ele é retirado de serviço até ser reparado.",
            "Comece com a chave desligada. Veja os níveis de fluidos e se há fugas, rachas e mangueiras ou correntes do mastro danificadas (nunca ponha as mãos dentro do mastro). Verifique os pneus, os garfos, o encosto de carga, a proteção superior, e se a placa de capacidade e os autocolantes de aviso estão no lugar e legíveis. Verifique o cinto de segurança.",
            "Empilhadores elétricos: veja os cabos, as ligações e a fixação da bateria. Empilhadores a gás propano: verifique se a botija está bem montada, se a válvula de segurança aponta para cima e se não há fugas.",
            "Depois, com o empilhador a trabalhar, teste os travões, o volante, a marcha para a frente e a marcha-atrás, subir, descer, inclinar, a buzina, as luzes e o alarme de marcha-atrás. Se alguma coisa estiver mal: não use o empilhador, ponha-lhe uma etiqueta ou comunique o problema, escreva-o na lista e diga ao seu supervisor. Só pessoas com formação e autorização fazem reparações."
          ],
          steps: ["Chave desligada: fluidos, fugas, mangueiras e correntes (olhe, não meta as mãos).", "Pneus, garfos, encosto de carga, proteção superior.", "Placa de capacidade e autocolantes de aviso no lugar e legíveis; o cinto de segurança funciona.", "Chave ligada: travões, volante, para a frente e marcha-atrás.", "Subir, descer, inclinar, buzina, luzes, alarme de marcha-atrás.", "Assine a lista; comunique e ponha etiqueta em qualquer defeito e não use o empilhador."],
          words: [["Inspeção antes do turno", "a verificação de um empilhador antes de ser usado no turno."], ["Fora de serviço", "não pode ser usado até ser reparado; normalmente fica marcado com uma etiqueta."], ["Correntes do mastro", "as correntes que levantam o porta-garfos e os garfos ao longo do mastro."]],
          slides: [
            { title: "Quando inspecionar", bullets: ["Antes de usar, pelo menos uma vez por dia", "Depois de cada turno, se os empilhadores trabalham dia e noite"] },
            { title: "Chave desligada", bullets: ["Fluidos, fugas, mangueiras, correntes: olhe, não meta as mãos", "Pneus, garfos, encosto, proteção superior", "Placa de capacidade, autocolantes, cinto de segurança"] },
            { title: "Chave ligada", bullets: ["Travões, volante, para a frente e marcha-atrás", "Subir, descer, inclinar", "Buzina, luzes, alarme de marcha-atrás"] },
            { title: "Encontrou um problema?", bullets: ["Não use o empilhador", "Ponha uma etiqueta, escreva o problema, diga ao supervisor", "Só pessoas autorizadas o reparam"] }
          ],
          sources: [OSHA_PREOP, OSHA_178],
          tryIt: "Escreva a sua própria lista de inspeção antes do turno com duas colunas, \"Chave desligada\" e \"Chave ligada\", usando a página da OSHA sobre a inspeção antes da operação. Depois leia este caso de prática: a buzina não funciona e um garfo tem uma racha. Escreva o que faz, passo a passo.",
          youCanNow: "preencher uma lista de inspeção antes do turno e retirar de serviço um empilhador inseguro.",
          quickCheck: [
            { objective: "O2", q: "De quanto em quanto tempo um empilhador tem de ser examinado antes de ser usado?", options: ["Uma vez por mês", "Uma vez por ano", "Só quando avaria", "Pelo menos uma vez por dia, antes de usar"], answer: 3, why: "A OSHA exige um exame antes de usar, pelo menos uma vez por dia, e depois de cada turno quando se trabalha dia e noite." },
            { objective: "O2", q: "Durante a sua verificação, os travões parecem fracos. O que faz?", options: ["Usa-o com cuidado hoje", "Comunica, põe uma etiqueta de fora de serviço e não o usa", "Repara os travões você mesmo", "Diz a um colega para o usar"], answer: 1, why: "Um empilhador inseguro é retirado de serviço e comunicado; só pessoas autorizadas o reparam." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O trabalho, o empilhador e a verificação diária",
        questions: [
          { objective: "O5", q: "Fez um curso de empilhador pela internet e recebeu um cartão. Agora pode conduzir qualquer empilhador num emprego novo?", options: ["Não; o empregador tem de lhe dar formação e avaliá-lo no empilhador e no local dele", "Sim, o cartão é tudo o que precisa", "Sim, se o cartão for plastificado", "Só aos fins de semana"], answer: 0, why: "A OSHA exige que o empregador dê formação e avalie cada operador no local de trabalho." },
          { objective: "O5", q: "No mínimo, de quanto em quanto tempo tem de ser repetida a avaliação de um operador?", options: ["Todos os meses", "A cada dez anos", "Uma vez a cada três anos", "Nunca"], answer: 2, why: "A OSHA diz que a avaliação de cada operador é feita pelo menos uma vez a cada três anos." },
          { objective: "O1", q: "Para que serve o contrapeso?", options: ["Levanta os garfos", "Segura a buzina", "Protege a sua cabeça", "Equilibra a carga que está à frente"], answer: 3, why: "O contrapeso pesado atrás equilibra o peso que está nos garfos." },
          { objective: "O1", q: "Onde encontra quanto um empilhador consegue levantar?", options: ["Nos pneus", "Na placa de capacidade", "Na buzina", "No assento"], answer: 1, why: "A placa de capacidade mostra quanto o empilhador consegue levantar." },
          { objective: "O2", q: "Que verificação é feita com o empilhador a trabalhar?", options: ["Testar os travões, o volante, a elevação e a inclinação", "Olhar para os pneus", "Ler os autocolantes", "Verificar os níveis de fluidos"], answer: 0, why: "Travões, volante, elevação e inclinação são verificações de funcionamento feitas com o empilhador a trabalhar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cargas, condução e conseguir emprego",
      lessons: [
        {
          title: "Ler a placa de capacidade e avaliar uma carga",
          objectives: ["O3"],
          minutes: 6,
          goal: "Decidir se uma carga é segura para levantar usando a placa de capacidade e o centro de carga.",
          text: [
            "A placa de capacidade mostra o máximo que o empilhador consegue levantar a um certo centro de carga. O centro de carga é a distância entre a face da frente dos garfos e o meio (centro de gravidade) da carga. Muitos empilhadores são classificados para um centro de carga de 24 polegadas. Se o meio da carga estiver mais longe do que isso, ou se o empilhador tiver um acessório, a capacidade segura é menor: verifique a placa e pergunte ao seu supervisor.",
            "Um empilhador equilibra-se como um baloiço sobre as rodas da frente. A carga nos garfos está de um lado; o empilhador e o contrapeso estão do outro. Peso a mais, uma carga muito para a frente, ou uma carga levantada e inclinada para a frente podem fazer o empilhador tombar para a frente. Virar depressa demais pode fazê-lo tombar de lado.",
            "Levante só cargas estáveis e dentro da capacidade. Centre a carga entre os garfos e meta os garfos por baixo dela em pelo menos dois terços do comprimento da carga. Levante um pouco, incline o mastro ligeiramente para trás para a carga ficar encostada ao encosto de carga, e mantenha-a baixa."
          ],
          steps: ["Descubra o peso da carga (etiqueta, documentos ou pergunte).", "Leia a placa de capacidade: capacidade e centro de carga.", "O meio da carga está dentro do centro de carga? O peso está abaixo da capacidade?", "A carga está estável, embrulhada e sem danos?", "Se sim: centre-a, garfos pelo menos dois terços por baixo, levante um pouco, incline para trás. Se não, ou se tiver dúvidas: pare e pergunte."],
          words: [["Capacidade", "o peso máximo que um empilhador consegue levantar com segurança, mostrado na placa de capacidade."], ["Centro de carga", "a distância entre a frente dos garfos e o meio da carga."], ["Centro de gravidade", "o ponto onde o peso de um objeto fica equilibrado."], ["Capotamento", "quando um empilhador tomba para a frente ou de lado."]],
          slides: [
            { title: "A placa de capacidade diz-lhe", bullets: ["Capacidade: o máximo que o empilhador levanta", "A um centro de carga, muitas vezes 24 polegadas", "Carga mais para a frente = levanta menos"] },
            { title: "Como um baloiço", bullets: ["As rodas da frente são o ponto de apoio", "A carga de um lado, o contrapeso do outro", "Pesada demais ou muito para a frente: tomba"] },
            { title: "Levante-a bem", bullets: ["Carga estável, dentro da capacidade", "Centrada, garfos dois terços por baixo", "Levante um pouco, incline para trás, mantenha baixa"] },
            { title: "Tem dúvidas? Pare e pergunte", bullets: ["Peso desconhecido", "Carga danificada ou inclinada", "Os acessórios mudam a capacidade"] }
          ],
          sources: [OSHA_LOAD, OSHA_178],
          tryIt: "Só para praticar, números inventados. A placa de um empilhador diz 4000 lb a um centro de carga de 24 polegadas. Decida sim ou não, com uma razão: (1) uma palete de 3200 lb, centrada e embrulhada; (2) uma caixa de 4600 lb; (3) uma carga de 2500 lb inclinada e rasgada; (4) uma carga de 3000 lb cujo meio está muito além das 24 polegadas. Escreva o que faria em cada caso.",
          youCanNow: "ler uma placa de capacidade e decidir se uma carga é segura para levantar, e dizer porquê.",
          quickCheck: [
            { objective: "O3", q: "A placa diz 5000 lb a 24 polegadas. A carga tem 5800 lb. O que faz?", options: ["Levanta-a devagar", "Põe uma pessoa atrás como peso extra", "Não a levanta; diz ao seu supervisor", "Levanta-a bem alto para ficar equilibrada"], answer: 2, why: "Nunca levante mais do que a capacidade indicada; nunca se permitem pessoas extra a bordo." },
            { objective: "O3", q: "Até onde devem os garfos entrar por baixo de uma carga?", options: ["Só as pontas", "Pelo menos dois terços do comprimento da carga", "Até à palete seguinte, atrás dela", "Não importa"], answer: 1, why: "A orientação da OSHA é pelo menos dois terços do comprimento da carga, sem bater nas cargas que estão atrás." }
          ]
        },
        {
          title: "Conduzir, trabalhar no cais e estacionar com segurança",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escolher a ação segura ao conduzir, no cais e ao estacionar.",
          text: [
            "Circule com a carga baixa e inclinada para trás, nunca levantada nem inclinada para a frente. Conduza a uma velocidade que lhe permita parar com segurança, e abrande em pisos molhados, nas curvas e nos cruzamentos de corredores. Toque a buzina nos cruzamentos de corredores e nas esquinas sem visibilidade. Olhe para onde vai. Se a carga tapar a vista, conduza em marcha-atrás. Mantenha cerca de três comprimentos de empilhador atrás de outro empilhador.",
            "Pessoas: ninguém fica de pé nem passa por baixo dos garfos levantados, com ou sem carga. Nada de passageiros, a não ser que o empilhador tenha um lugar seguro para eles e isso seja permitido. Nunca conduza na direção de alguém que está de pé à frente de uma parede ou estante.",
            "Rampas: vá devagar. Com carga, mantenha a carga do lado de cima da rampa: conduza para a frente a subir e em marcha-atrás a descer. Nunca vire numa rampa. Cais: antes de entrar num reboque, os travões do reboque têm de estar acionados e as rodas de trás calçadas; verifique se o piso do reboque tem buracos ou partes fracas; mantenha-se longe da beira do cais.",
            "Estacionar: se deixar o empilhador (ou estiver a 25 pés ou mais dele, ou se ele estiver fora da sua vista), baixe os garfos até ao fim, ponha os comandos em ponto morto, desligue-o e acione o travão; calce as rodas numa inclinação. Se um empilhador com condutor sentado começar a tombar: não salte. Fique no assento com o cinto de segurança posto, segure o volante, firme os pés e incline-se para o lado contrário à queda."
          ],
          steps: ["Carga baixa, inclinada para trás; buzina nos cruzamentos de corredores; olhe para onde conduz.", "A carga tapa a vista: conduza em marcha-atrás.", "Rampas: carga do lado de cima, sem virar na rampa.", "Cais: travões do reboque acionados, rodas calçadas, piso verificado.", "Estacionar: garfos em baixo, ponto morto, desligado, travão acionado.", "Se tombar: fique dentro, cinto posto, segure-se, incline-se para o outro lado."],
          words: [["Cruzamento de corredores", "o sítio onde dois corredores se encontram, como um cruzamento de estradas."], ["Calço de roda", "uma cunha posta contra uma roda para o reboque não rolar."], ["Beira do cais", "a beira do cais de carga onde o chão acaba e há uma queda."], ["Sem vigilância", "deixado sozinho: você está a 25 pés ou mais do empilhador, ou não o consegue ver."]],
          slides: [
            { title: "Conduzir", bullets: ["Carga baixa e inclinada para trás", "Buzina nos cruzamentos e nos pontos sem visibilidade", "Não vê para além da carga? Conduza em marcha-atrás"] },
            { title: "Pessoas", bullets: ["Ninguém por baixo dos garfos levantados", "Nada de passageiros", "Nunca prenda alguém contra uma parede ou estante"] },
            { title: "Rampas e cais", bullets: ["Carga do lado de cima; sem virar nas rampas", "Travões do reboque acionados e rodas calçadas", "Verifique o piso do reboque; longe da beira"] },
            { title: "Estacionar e capotamento", bullets: ["Garfos em baixo, ponto morto, desligado, travão acionado", "Se tombar: fique dentro, cinto posto, incline-se para o outro lado"] }
          ],
          sources: [OSHA_TRAVEL, OSHA_DOCKS, OSHA_178],
          tryIt: "Faça um cartão de bolso com duas listas: \"Antes de entrar num reboque\" e \"Quando estaciono\". Depois responda por escrito a este caso de prática: você leva uma carga alta que lhe tapa a vista e tem de descer uma rampa. O que faz?",
          youCanNow: "escolher a ação segura ao conduzir, no cais, numa rampa, ao estacionar e se um empilhador começar a tombar.",
          quickCheck: [
            { objective: "O4", q: "Um colega quer ficar por baixo dos seus garfos levantados para arranjar uma etiqueta. O que diz?", options: ["\"Vá, mas seja rápido.\"", "\"Só se os garfos estiverem vazios.\"", "\"Só se usar capacete.\"", "\"Não. Ninguém vai para baixo dos garfos levantados. Primeiro vou baixá-los.\""], answer: 3, why: "A OSHA proíbe que alguém fique ou passe por baixo dos garfos levantados, com ou sem carga." },
            { objective: "O4", q: "O seu empilhador com condutor sentado começa a tombar. O que faz?", options: ["Fica no assento, com o cinto posto, segura o volante e inclina-se para o outro lado", "Salta depressa", "Agarra-se ao mastro", "Levanta os garfos"], answer: 0, why: "Num empilhador com condutor sentado, ficar dentro com o cinto posto é a forma de evitar ser esmagado." }
          ]
        },
        {
          title: "Receber formação e ser contratado como operador de empilhador",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escrever um plano para receber formação e avaliação, e uma linha honesta para o currículo.",
          text: [
            "Muitos empregadores de armazéns, distribuição e comércio contratam pessoas para trabalho geral de armazém e depois dão-lhes formação em empilhadores. Algumas agências de trabalho temporário, centros de emprego e escolas superiores comunitárias (community colleges) também dão formação em empilhadores com prática. Pergunte se inclui conduzir com um formador e uma avaliação prática.",
            "Lembre-se: onde quer que faça a formação, cada novo empregador tem de garantir que você tem formação e foi avaliado para os empilhadores dele e para o local de trabalho dele antes de conduzir sozinho. A formação anterior ajuda, e um empregador pode não precisar de repetir temas que você já aprendeu e em que já foi avaliado.",
            "No seu currículo, seja honesto. Se terminou este curso, escreva que concluiu uma formação de conhecimentos de segurança em empilhadores. Se um empregador lhe deu formação e o avaliou, escreva os tipos de empilhador e o ano. Nunca escreva \"certificado\" se não foi.",
            "Numa entrevista, fale da verificação antes do turno, da placa de capacidade e da segurança das pessoas a pé. Os empregadores querem operadores que sejam primeiro cuidadosos e só depois rápidos."
          ],
          steps: ["Faça uma lista de três empregadores ou programas da sua zona que dão formação a operadores de empilhador (sites de emprego, centro de emprego, community college).", "Pergunte a cada um: inclui condução com supervisão e uma avaliação?", "Escreva uma linha honesta para o currículo sobre o que já fez.", "Pratique uma resposta de 30 segundos: \"Como se mantém seguro num empilhador?\""],
          words: [["Agência de trabalho temporário", "uma empresa que coloca trabalhadores em empregos noutras empresas."], ["Centro de emprego", "um serviço público (nos EUA muitas vezes chamado American Job Center) que ajuda as pessoas a encontrar emprego e formação."]],
          slides: [
            { title: "Onde acontece a formação", bullets: ["Empregadores que contratam e depois dão formação", "Centros de emprego e community colleges", "Pergunte: condução com supervisão e uma avaliação?"] },
            { title: "Cada empregador avalia você", bullets: ["Para os empilhadores e o local de trabalho dele", "Antes de conduzir sozinho"] },
            { title: "Seja honesto no currículo", bullets: ["Curso: formação de conhecimentos de segurança em empilhadores", "Formação do empregador: tipos de empilhador e o ano", "Nunca diga \"certificado\" se não é"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING],
          tryIt: "Escreva o seu plano: três sítios que lhe podem dar formação, a pergunta que vai fazer a cada um, uma linha honesta para o currículo e a sua resposta de 30 segundos a \"Como se mantém seguro num empilhador?\" Leia a resposta em voz alta.",
          youCanNow: "escrever um plano para receber formação e avaliação em empilhadores e descrever a sua formação com honestidade num currículo.",
          quickCheck: [
            { objective: "O5", q: "Terminou este curso, mas nenhum empregador o avaliou. Que linha de currículo é honesta?", options: ["\"Operador de empilhador certificado, todas as classes\"", "\"Concluí formação de conhecimentos de segurança em empilhadores (Koach Learn), 2026\"", "\"Condutor de empilhador com licença da OSHA\"", "\"Especialista em empilhadores, 10 anos\""], answer: 1, why: "Diz exatamente o que fez, sem declarar uma certificação que não tem." },
            { objective: "O5", q: "O que deve perguntar a um programa de formação em empilhadores?", options: ["Se inclui condução com supervisão e uma avaliação prática", "Se dá um cartão bonito", "Se pode saltar a parte prática", "Se é o mais barato da internet"], answer: 0, why: "A formação da OSHA inclui prática e uma avaliação, por isso verifique se o programa as tem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Cargas, condução e conseguir emprego",
        questions: [
          { objective: "O3", q: "O que é o centro de carga?", options: ["O meio do armazém", "O centro do volante", "A distância entre a face dos garfos e o meio da carga", "A altura do mastro"], answer: 2, why: "O centro de carga mede-se da face da frente dos garfos até ao centro de gravidade da carga." },
          { objective: "O3", q: "Uma carga está inclinada e o plástico que a embrulha está rasgado. O que faz?", options: ["Levanta-a depressa", "Levanta-a bem alto para conseguir ver", "Empurra-a com os garfos", "Não a levanta; comunica para ser arranjada ou empilhada de novo"], answer: 3, why: "Só se devem manusear cargas estáveis e bem arrumadas." },
          { objective: "O4", q: "A sua carga tapa-lhe a vista à frente. Como circula?", options: ["Em marcha-atrás, a olhar para onde vai", "Para a frente, com a carga levantada", "Para a frente, mais depressa", "Com um colega em cima dos garfos"], answer: 0, why: "Se a carga tapar a vista, circule com a carga atrás de você (em marcha-atrás)." },
          { objective: "O4", q: "Antes de entrar com o empilhador no reboque de um camião, no cais, o que tem de ser feito?", options: ["Nada", "Abrir as janelas de trás do reboque", "Acionar os travões do reboque, calçar as rodas e verificar o piso", "Buzinar três vezes"], answer: 2, why: "A OSHA exige travões acionados e rodas calçadas, e o piso do reboque verificado, antes de entrar nele." },
          { objective: "O5", q: "Muda para um emprego que usa outro tipo de empilhador. O que é verdade?", options: ["Precisa de formação e avaliação para o novo tipo", "O seu cartão antigo serve para tudo", "Pode aprender sozinho depois do horário", "Nada muda"], answer: 0, why: "Um tipo diferente de empilhador é uma razão para formação e avaliação nesse empilhador." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Operador de Empilhador",
    questions: [
      { objective: "O5", q: "Pela regra da OSHA, quem certifica que um operador de empilhador recebeu formação e foi avaliado?", options: ["O operador", "Um site", "O empregador", "O fabricante do empilhador"], answer: 2, why: "O empregador certifica a formação e a avaliação do operador." },
      { objective: "O5", q: "Qual é a idade mínima para operar um empilhador no trabalho?", options: ["16", "18", "14", "21"], answer: 1, why: "As regras federais do trabalho dos EUA proíbem trabalhadores com menos de 18 anos de operar empilhadores." },
      { objective: "O5", q: "Qual é uma razão para formação de atualização?", options: ["Um quase acidente com um peão", "Uma farda nova", "Um aumento de salário", "Um feriado"], answer: 0, why: "Um acidente ou um quase acidente é uma das razões da OSHA para formação de atualização." },
      { objective: "O1", q: "Para que serve a proteção superior?", options: ["Segura a carga", "Equilibra o empilhador", "Dirige o empilhador", "Protege o operador de objetos que caem"], answer: 3, why: "A proteção superior protege o operador de objetos que caem de cima." },
      { objective: "O1", q: "Em que peça estão pendurados os garfos?", options: ["No contrapeso", "No porta-garfos", "Nos pneus", "No assento"], answer: 1, why: "Os garfos estão pendurados no porta-garfos, que sobe e desce no mastro." },
      { objective: "O1", q: "Um porta-paletes elétrico conduzido a pé é de que classe?", options: ["Classe VII", "Classe V", "Classe III", "Classe VI"], answer: 2, why: "A Classe III inclui os empilhadores elétricos manuais, incluindo os que se conduzem a pé." },
      { objective: "O2", q: "Quando tem de ser examinado um empilhador?", options: ["Antes de usar, pelo menos uma vez por dia", "Uma vez por ano", "Só depois de um acidente", "Só quando é novo"], answer: 0, why: "A OSHA exige um exame antes de usar, pelo menos uma vez por dia." },
      { objective: "O2", q: "Porque é que não mete as mãos dentro do mastro para verificar as correntes?", options: ["Está sujo", "Não faz parte da verificação", "É o supervisor que faz isso", "O mastro pode mexer-se e esmagar-lhe as mãos"], answer: 3, why: "As peças do mastro que se mexem podem esmagar as mãos; a orientação da OSHA é olhar, ou usar um pau para verificar a tensão." },
      { objective: "O2", q: "Um empilhador não tem a placa de capacidade. O que faz?", options: ["Adivinha a capacidade", "Comunica; a placa tem de estar no lugar e legível", "Usa uma foto no telefone da placa de outro empilhador", "Ignora"], answer: 1, why: "As placas e marcações têm de ficar no lugar e legíveis; comunique antes de usar." },
      { objective: "O2", q: "Quem pode reparar um empilhador?", options: ["Só pessoas com formação e autorização", "Qualquer operador", "Qualquer pessoa com ferramentas", "O trabalhador mais novo"], answer: 0, why: "Só pessoas autorizadas e com formação devem fazer reparações." },
      { objective: "O3", q: "A placa diz 3000 lb a 24 polegadas. Que carga pode levantar (só para praticar)?", options: ["Uma caixa de 3500 lb", "Uma carga de 3000 lb cujo meio está a 40 polegadas", "Uma carga de 1000 lb rasgada e inclinada", "Uma palete embrulhada de 2400 lb, centrada"], answer: 3, why: "Está abaixo da capacidade, estável e centrada dentro do centro de carga indicado." },
      { objective: "O3", q: "O que acontece quando o meio da carga está mais longe do que o centro de carga indicado?", options: ["O empilhador consegue levantar mais", "A capacidade segura baixa", "Nada muda", "O empilhador anda mais depressa"], answer: 1, why: "Um centro de carga mais longe torna o empilhador menos estável, por isso ele levanta menos." },
      { objective: "O3", q: "Depois de levantar um pouco uma carga, o que faz antes de circular?", options: ["Inclina o mastro ligeiramente para trás para a carga ficar no encosto", "Inclina-o para a frente", "Levanta-a o mais alto possível", "Pede a alguém para a segurar"], answer: 0, why: "Inclinar ligeiramente para trás firma a carga contra o encosto." },
      { objective: "O4", q: "Como deve levar uma carga enquanto conduz?", options: ["Alta, para conseguir ver", "Inclinada para a frente", "Baixa e inclinada para trás", "Com uma pessoa a segurá-la"], answer: 2, why: "Uma carga baixa e inclinada para trás mantém o empilhador estável; nunca circule com ela levantada ou inclinada para a frente." },
      { objective: "O4", q: "Chega a um cruzamento de corredores onde não consegue ver o que está depois da esquina. O que faz?", options: ["Acelera para passar depressa", "Abranda e toca a buzina", "Levanta os garfos", "Fecha os olhos e avança"], answer: 1, why: "A OSHA diz para abrandar e tocar a buzina onde a vista está tapada." },
      { objective: "O4", q: "Desce uma rampa com um empilhador carregado. Em que sentido?", options: ["Para a frente, com a carga à frente", "De lado", "Vira a meio da descida", "Em marcha-atrás, para a carga ficar do lado de cima"], answer: 3, why: "Mantenha a carga do lado de cima: para a frente a subir, em marcha-atrás a descer, e nunca vire numa rampa." },
      { objective: "O4", q: "Afasta-se do seu empilhador para uma pausa. O que tem de fazer?", options: ["Baixar os garfos, pôr em ponto morto, desligá-lo e acionar o travão", "Deixá-lo a trabalhar para estar pronto", "Deixar os garfos levantados", "Pedir a um colega para o vigiar"], answer: 0, why: "Um empilhador sem vigilância fica com os garfos em baixo, comandos em ponto morto, desligado e com o travão acionado." },
      { objective: "O4", q: "A que distância deve ficar atrás de outro empilhador?", options: ["Um pé", "O mais perto possível", "Cerca de três comprimentos de empilhador", "Não importa"], answer: 2, why: "A OSHA pede cerca de três comprimentos de empilhador entre empilhadores." },
      { objective: "O5", q: "Um site diz que o seu vídeo na internet faz de você \"certificado pela OSHA\" em 20 minutos. O que é verdade?", options: ["Substitui a formação do empregador", "A OSHA vende o cartão", "Chega para qualquer emprego", "A formação prática e a avaliação do empregador continuam a ser obrigatórias"], answer: 3, why: "Só a formação e a avaliação do empregador no local de trabalho cumprem a regra da OSHA." },
      { objective: "O1", q: "O que mostra a placa de capacidade?", options: ["O modelo do empilhador e quanto ele consegue levantar", "O nome do operador", "A morada do armazém", "O preço do combustível"], answer: 0, why: "A placa de capacidade mostra o modelo e a informação sobre a capacidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 10, 11, 13, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Lista de inspeção", objective: "O2", notYet: "Faltam verificações com a chave desligada ou ligada, ou não há um passo para um empilhador inseguro.", meets: "Cobre todos os pontos com a chave desligada e ligada para o tipo de empilhador escolhido e diz o que fazer com um defeito.", exceeds: "Junta as verificações extra para empilhadores elétricos ou a gás propano." },
      { name: "Peças nomeadas", objective: "O1", notYet: "Menos de seis peças nomeadas, ou usos errados.", meets: "Pelo menos seis peças nomeadas, com para que serve cada uma, e a classe do empilhador.", exceeds: "Explica como o contrapeso e o encosto de carga mantêm o operador seguro." },
      { name: "Decisões de carga", objective: "O3", notYet: "Uma carga acima da capacidade ou instável é marcada como segura.", meets: "As três decisões de carga estão certas, com uma razão que usa a placa de capacidade.", exceeds: "Diz quando perguntar a um supervisor, por exemplo com um peso desconhecido ou um acessório." },
      { name: "Cartão de condução, cais e estacionamento", objective: "O4", notYet: "Falta a verificação do cais ou um passo de estacionamento.", meets: "Lista os passos do cais (travões, calços, piso) e os quatro passos de estacionamento.", exceeds: "Junta as regras das rampas, das pessoas a pé e do capotamento." },
      { name: "Plano de formação e linha do currículo", objective: "O5", notYet: "Diz que é certificado, ou diz que não é precisa formação do empregador.", meets: "Diz três sítios para ter formação, diz que o empregador tem de avaliar e dá uma linha honesta para o currículo.", exceeds: "Inclui uma resposta de segurança de 30 segundos já praticada para entrevistas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e um dossiê de preparação que cumpre a grelha de avaliação",
      "Alunos que começam uma formação em empilhadores de um empregador ou de um programa em 60 dias (inquérito de seguimento)",
      "Alunos contratados para trabalhos de armazém ou de operador de empilhador (relatórios dos parceiros e de seguimento)",
      "Os empregadores parceiros dizem que os novos contratados passam na avaliação prática à primeira"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para as páginas do eTool da OSHA",
      "Papel e caneta para o desenho, a lista e o cartão de bolso",
      "Opcional: imagens impressas de empilhadores e uma placa de capacidade de exemplo",
      "Cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Deixe claro logo no início: este curso não certifica ninguém; é o empregador que dá formação e avalia.",
      "Não deixe os alunos praticarem em empilhadores verdadeiros como parte deste curso. Se o seu programa tiver um empilhador de formação, a prática só acontece com um formador qualificado.",
      "Use placas de capacidade impressas com números inventados para a prática de cargas.",
      "Esteja atento a alunos com menos de 18 anos; podem fazer o curso, mas não podem operar empilhadores no trabalho.",
      "Avalie o dossiê de preparação com a grelha de avaliação e reveja uma linha Ainda não de cada vez."
    ]
  }
};
