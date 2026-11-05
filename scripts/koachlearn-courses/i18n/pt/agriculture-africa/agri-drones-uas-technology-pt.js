"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-uas-technology.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KCAA_UAS = { name: "Autoridade da Aviação Civil do Quénia (KCAA): Sistemas de Aeronaves Não Tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autoridade da Aviação Civil da Nigéria (NCAA): Nig.CARs 2023, Parte 21, Sistemas de Aeronaves Pilotadas Remotamente", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO e UIT: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology-pt",
  lang: "pt",
  translationOf: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Drones Agrícolas: Tecnologia UAS e Manutenção",
  skills: "Dizer o nome das partes de um sistema de drone e o que cada uma faz, Cuidar com segurança das baterias de lítio-polímero, Escolher e manusear cargas úteis, Fazer inspeções antes e depois do voo, Manter um plano de manutenção e registos, Resolver avarias comuns",
  outcome: "explicar como funciona cada parte de um sistema de drone agrícola, cuidar com segurança das suas baterias e cargas úteis e gerir um programa de manutenção com inspeções, um plano, passos para resolver avarias e registos completos para um drone.",
  about: [
    "Este curso é para pilotos de drone, técnicos, empresas de serviços com drones, pessoal de agronegócios e de grandes explorações agrícolas, e jovens que querem manter os drones agrícolas a voar com segurança no Quénia, na Nigéria e em toda a África.",
    "O Capítulo 1 abre o sistema de drone: estrutura, motores e hélices, controlador de voo e sensores, ligação de rádio e estação de terra, baterias e cargas úteis como câmaras e sistemas de pulverização. O Capítulo 2 é a manutenção: inspeções diárias, manutenção programada, resolver avarias comuns, atualizações de firmware, registos, e manter os drones a funcionar com poeira, calor, chuva e em lugares onde a eletricidade falha.",
    "Siga sempre primeiro o manual do fabricante e o seu manual de operações; este curso ensina as competências gerais que estão por trás deles. As autoridades da aviação esperam que os operadores façam a manutenção das aeronaves e guardem registos, por isso uma boa manutenção é ao mesmo tempo segurança e cumprimento das regras. Cada capítulo termina com uma verificação de conhecimentos e o curso termina com um questionário de 20 perguntas."
  ],
  finalTask: "Escreva um programa de manutenção para um drone agrícola (real ou de exemplo, como um multirrotor de mapeamento usado por uma cooperativa): uma lista de partes com o que cada uma faz, um procedimento de cuidado e carga das baterias, uma lista de verificação antes e depois do voo, um plano de manutenção por horas de voo e por calendário, uma tabela para resolver pelo menos cinco avarias comuns e um modelo de registo de manutenção com dois exemplos preenchidos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pilotos de drone, técnicos, empresas de serviços com drones, pessoal de agronegócios e de grandes explorações agrícolas, e jovens no Quénia, na Nigéria e em toda a África que querem manter os drones agrícolas a voar com segurança.",
    startingPoint: "A maioria já viu ou pilotou um drone agrícola e sabe carregar uma bateria e descolar com a aplicação. Poucos sabem dizer o nome de todas as partes do sistema e o que fazem, seguir uma lista de verificação escrita, planear a manutenção por horas de voo ou manter um registo de manutenção.",
    gap: "Os drones são caros e estragam-se facilmente com poeira, calor e chuva, e as baterias de lítio mal tratadas podem pegar fogo. Um drone que cai ou fica parado perde clientes e dinheiro, e as autoridades, os clientes e as seguradoras esperam registos de manutenção. Conhecer o sistema e gerir um programa de manutenção mantém os drones seguros, a funcionar e dentro das regras.",
    constraints: [
      "Nível de leitura: palavras simples; cada termo técnico é explicado",
      "Aparelhos: um telefone ou computador para o curso; um drone verdadeiro ajuda mas não é obrigatório",
      "Segurança: as baterias de lítio podem pegar fogo; nenhuma reparação dentro das baterias ou da eletrónica",
      "O manual do fabricante e o manual de operações vêm primeiro; o curso ensina as competências gerais por trás deles",
      "Condições no terreno: poeira, calor, chuva e eletricidade que falha em muitas zonas"
    ],
    prerequisites: "Recomenda-se fazer primeiro o curso \"Drones para a Monitorização Agrícola 1: Introdução, Regulamentos e Segurança\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um sistema de drone agrícola", action: "dizer o nome de cada parte principal da aeronave e do sistema de terra e explicar o que faz", standard: "incluindo o controlador de voo, os sensores, a ligação C2 e a carga útil" },
    { id: "O2", condition: "Com um conjunto de baterias de drone", action: "descrever como carregá-las, guardá-las, transportá-las e retirá-las de uso com segurança", standard: "seguindo todos os passos de segurança, sem usar nenhuma bateria inchada ou danificada" },
    { id: "O3", condition: "Com uma câmara, um sensor ou um sistema de pulverização", action: "descrever como o montar, limpar e verificar", standard: "com a carga útil bem presa, as lentes limpas e as peças de pulverização verificadas quanto ao desgaste" },
    { id: "O4", condition: "Antes e depois de cada voo", action: "fazer uma inspeção antes e depois do voo e registar o que encontrou", standard: "verificando todos os itens da lista" },
    { id: "O5", condition: "Para um drone", action: "escrever um plano de manutenção por horas de voo e por calendário, uma rotina de atualização de firmware e um registo de manutenção", standard: "com intervalos \"o que vier primeiro\" e todos os campos do registo preenchidos" },
    { id: "O6", condition: "Perante uma avaria ou condições difíceis no terreno", action: "resolver a avaria passo a passo e proteger o drone da poeira, do calor, da chuva e dos cortes de eletricidade", standard: "deixando o drone em terra quando uma avaria de segurança se repete" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona um sistema de drone agrícola",
      lessons: [
        {
          objectives: ["O1"],
          title: "As partes de um sistema de drone",
          minutes: 6,
          goal: "Dizer o nome das partes principais de um sistema de drone e explicar o que cada uma faz.",
          text: [
            "As autoridades chamam ao drone um sistema (UAS ou RPAS) porque a aeronave é só uma parte. O sistema inclui a aeronave, a estação de terra (comando, telefone ou tablet, programa), a ligação de rádio entre eles (muitas vezes chamada ligação de comando e controlo, ou C2), as baterias e carregadores, e a carga útil (câmara, sensor ou sistema de pulverização).",
            "Na aeronave: a estrutura (corpo e braços, ou asas); os motores e as hélices que fazem o drone subir; os controladores eletrónicos de velocidade (ESC) que dizem a cada motor a que velocidade rodar; o controlador de voo, o cérebro do drone; e os sensores: GNSS (posição por satélite, como o GPS), bússola, uma unidade de medição inercial (IMU) que sente a inclinação e o movimento, um barómetro para a altura e, muitas vezes, sensores de obstáculos.",
            "O controlador de voo lê os sensores centenas de vezes por segundo e ajusta cada motor para manter o drone estável e no caminho certo. Se um sensor der dados errados, como uma bússola perto de metal, o drone inteiro pode comportar-se de forma estranha. É por isso que a calibração e a escolha cuidadosa do lugar de descolagem são importantes."
          ],
          words: [["Estrutura", "o corpo, os braços ou as asas do drone."], ["ESC", "controlador eletrónico de velocidade: controla a que velocidade roda cada motor."], ["Controlador de voo", "o computador a bordo do drone que o mantém estável e no caminho certo."], ["GNSS", "sistemas globais de navegação por satélite, como o GPS, usados para saber a posição."], ["IMU", "unidade de medição inercial: sente a inclinação, as viragens e o movimento."], ["Ligação C2", "ligação de comando e controlo: a ligação de rádio entre o comando e o drone."]],
          slides: [
            { title: "Um sistema, não só uma aeronave", bullets: ["Aeronave", "Estação de terra: comando, telefone, programa", "Ligação de rádio C2", "Baterias e carga útil"] },
            { title: "Na aeronave", bullets: ["Estrutura, motores, hélices", "Os ESC controlam cada motor", "Controlador de voo: o cérebro"] },
            { title: "Sensores", bullets: ["GNSS para a posição, bússola para a direção", "IMU para a inclinação e o movimento", "Barómetro para a altura, sensores de obstáculos"] },
            { title: "Porque é importante", bullets: ["Dados errados de um sensor = comportamento estranho", "Calibre e escolha com cuidado o lugar de descolagem"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Pegue num drone (ou numa foto ou desenho claro de um) e marque pelo menos oito partes: estrutura, motores, hélices, lugar do controlador de voo, módulo GNSS, câmara ou carga útil, bateria, comando. Ao lado de cada uma, escreva numa linha o que ela faz.",
          youCanNow: "dizer o nome das partes de um sistema de drone e o que cada uma faz.",
          quickCheck: [
            { objective: "O1", q: "O que é o controlador de voo?", options: ["O comando que o piloto segura na mão", "O cérebro do drone, que lê os sensores e ajusta os motores", "O carregador da bateria", "O suporte da câmara"], answer: 1, why: "O controlador de voo lê os sensores muitas vezes por segundo e ajusta cada motor para manter o drone estável." },
            { objective: "O1", q: "Vai descolar ao lado de um tanque de água de metal e o drone desvia-se de forma estranha. Qual é uma causa provável?", options: ["As hélices são novas demais", "A carga útil está limpa demais", "A bateria está cheia demais", "Dados errados da bússola por causa do metal perto"], answer: 3, why: "Uma bússola perto de metal dá dados errados, e o drone inteiro pode comportar-se de forma estranha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Baterias: a parte que precisa de mais cuidado",
          minutes: 6,
          goal: "Carregar, guardar, transportar e retirar de uso as baterias de drone com segurança.",
          text: [
            "A maioria dos drones usa baterias de lítio-polímero (LiPo) ou outras baterias de lítio parecidas. Elas guardam muita energia para o seu peso, e é por isso que também podem pegar fogo se estiverem danificadas, carregadas demais, descarregadas demais ou quentes demais. Cuidar das baterias é o trabalho de manutenção mais importante.",
            "Carregue só com o carregador certo, sobre uma superfície que não arde, nunca sem ninguém a vigiar, e nunca uma bateria inchada, furada ou quente. Deixe a bateria arrefecer depois do voo antes de a carregar, e deixe-a arrefecer ou aquecer até à temperatura normal antes de voar. Não deixe baterias num carro quente nem ao sol direto no campo.",
            "Para guardar mais de alguns dias, mantenha as baterias com carga de armazenamento (meio carregadas, nem cheias nem vazias; muitas baterias inteligentes fazem isto sozinhas), num lugar fresco e seco, de preferência num saco ou caixa resistente ao fogo. Anote os ciclos de carga e o estado de cada bateria. Retire de uso as baterias inchadas ou danificadas e entregue-as num ponto de recolha de lixo eletrónico ou de baterias, nunca no fogo nem no lixo comum. Levar baterias em aviões tem as suas próprias regras de cada companhia aérea."
          ],
          steps: ["Dê um número a cada bateria e anote os seus ciclos.", "Carregue com o carregador certo, sobre uma superfície que não arde, sempre a vigiar.", "Nunca carregue nem voe com uma bateria inchada, furada ou quente.", "Mantenha as baterias longe de carros quentes e do sol direto.", "Guarde com carga de armazenamento num recipiente fresco, seco e resistente ao fogo.", "Entregue as baterias danificadas num ponto de recolha próprio."],
          words: [["LiPo", "bateria de lítio-polímero: leve e potente, mas pode pegar fogo se for mal tratada."], ["Ciclo de carga", "um uso completo da capacidade de uma bateria, de carregada a gasta e de volta."], ["Carga de armazenamento", "um nível de carga parcial que mantém as baterias de lítio saudáveis quando não estão a ser usadas."], ["Lixo eletrónico", "resíduos de aparelhos eletrónicos, que precisam de recolha e reciclagem especiais."]],
          slides: [
            { title: "Energia com um risco", bullets: ["LiPo: muita energia para o seu peso", "Pode pegar fogo se for danificada ou mal tratada", "Cuidar das baterias é o trabalho número um"] },
            { title: "Regras para carregar", bullets: ["Carregador certo, superfície que não arde", "Nunca sem vigiar", "Nunca inchada, furada ou quente"] },
            { title: "Calor e armazenamento", bullets: ["Nada de carros quentes nem sol direto", "Carga de armazenamento, lugar fresco e seco", "Saco ou caixa resistente ao fogo"] },
            { title: "Anotar e retirar de uso", bullets: ["Numere as baterias, anote os ciclos", "Retire de uso as inchadas ou danificadas", "Entregue num ponto de recolha próprio"] }
          ],
          tryIt: "Escreva um procedimento de uma página sobre baterias para uma equipa de drones: numeração, carga, cuidados no campo com calor, armazenamento, registo de ciclos e retirada de uso. Acrescente uma tabela de registo das baterias com colunas para o número da bateria, data, ciclos, estado e notas.",
          youCanNow: "carregar, guardar, transportar e retirar de uso as baterias de drone com segurança e manter um registo das baterias.",
          quickCheck: [
            { objective: "O2", q: "O que é a carga de armazenamento?", options: ["Meio carregada, nem cheia nem vazia, para guardar mais de alguns dias", "Totalmente carregada", "Completamente vazia", "Carregada num carro quente"], answer: 0, why: "As baterias guardadas mais de alguns dias ficam meio carregadas num lugar fresco e seco." },
            { objective: "O2", q: "Acabou de aterrar e quer voar outra vez em breve. A bateria está quente. O que faz?", options: ["Carrega-a logo ao sol", "Carrega-a no carro e vai-se embora", "Deixa-a arrefecer antes de a carregar, e carrega-a a vigiar sobre uma superfície que não arde", "Põe-na no congelador"], answer: 2, why: "Carregar uma bateria quente ou carregar sem vigiar aumenta o risco de incêndio." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Cargas úteis: câmaras, sensores e sistemas de pulverização",
          minutes: 5,
          goal: "Manusear, montar e cuidar das principais cargas úteis dos drones agrícolas.",
          text: [
            "A carga útil é o que o drone leva para fazer o trabalho. Os drones de mapeamento levam uma câmara RGB (cores normais), muitas vezes num estabilizador (gimbal) que a mantém firme. Os drones para a saúde das culturas podem levar uma câmara multiespectral com um sensor de luz solar e um painel de calibração. As câmaras térmicas medem o calor. Os drones de pulverização levam um tanque, uma bomba, mangueiras e bicos, e alguns espalham grânulos ou sementes.",
            "Cuide das lentes: mantenha as lentes e o sensor de luz solar limpos com um pano macio para lentes, proteja-os com as tampas e mantenha as câmaras longe da poeira e da humidade. Verifique se o estabilizador se move livremente e se a carga útil está bem presa; uma carga útil solta desequilibra o drone e perturba o controlador de voo.",
            "Os sistemas de pulverização precisam de mais cuidado: depois de cada uso são enxaguados e limpos como o fabricante e o rótulo do pesticida mandam, os bicos são verificados quanto ao desgaste e entupimentos, e todo o sistema é calibrado para aplicar a quantidade certa. Lembre-se de que pulverizar com drone precisa de autorizações da aviação e de pesticidas; a manutenção não as substitui."
          ],
          words: [["Carga útil", "o equipamento que o drone leva para fazer o trabalho, como uma câmara ou um tanque de pulverização."], ["Estabilizador (gimbal)", "um suporte com motor que mantém a câmara firme."], ["Sensor de luz solar", "um pequeno sensor em cima de alguns drones multiespectrais que mede a luz que chega para corrigir as leituras."], ["Bico", "a ponta que transforma o líquido em gotas de pulverização."]],
          slides: [
            { title: "Cargas úteis comuns", bullets: ["Câmara RGB num estabilizador", "Multiespectral com sensor de luz solar", "Câmara térmica", "Tanque, bomba, bicos; espalhadores"] },
            { title: "Cuidar das lentes", bullets: ["Limpe lentes e sensores com um pano macio", "Tampas postas, longe da poeira e da humidade", "Estabilizador livre, suporte bem preso"] },
            { title: "Sistemas de pulverização", bullets: ["Enxague e limpe como o fabricante e o rótulo mandam", "Verifique o desgaste e entupimento dos bicos", "Calibre a dose; as autorizações continuam a ser precisas"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Escolha uma carga útil (câmara RGB, câmara multiespectral ou sistema de pulverização). Escreva uma lista de cuidados com pelo menos seis itens para antes e depois de cada uso.",
          youCanNow: "montar, limpar e verificar as principais cargas úteis dos drones agrícolas.",
          quickCheck: [
            { objective: "O3", q: "O que é a carga útil num drone agrícola?", options: ["A bateria", "A estação de terra", "O que o drone leva para fazer o trabalho, como uma câmara ou um sistema de pulverização", "A ligação de rádio"], answer: 2, why: "A carga útil é a câmara, o sensor ou o sistema de pulverização ou de espalhar que faz o trabalho." },
            { objective: "O3", q: "Depois de um trabalho de pulverização, o que faz com o sistema de pulverização?", options: ["Enxagua-o e limpa-o como o fabricante e o rótulo mandam, e verifica os bicos", "Deixa o resto da mistura no tanque", "Lava o drone inteiro com um jato de água", "Guarda-o molhado ao sol"], answer: 0, why: "Os sistemas de pulverização são enxaguados e limpos depois de cada uso, e os bicos são verificados quanto ao desgaste e entupimentos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona um sistema de drone agrícola",
        questions: [
          { objective: "O1", q: "Porque se chama sistema (UAS ou RPAS) a um drone?", options: ["Porque soa melhor", "Inclui aeronave, estação de terra, ligação de rádio, baterias e carga útil", "Tem muitas hélices", "É feito numa fábrica"], answer: 1, why: "Todas as partes juntas fazem o drone funcionar." },
          { objective: "O1", q: "O que sente a IMU?", options: ["A inclinação, as viragens e o movimento", "A humidade do solo", "Os preços das culturas", "A cor da bateria"], answer: 0, why: "A IMU sente o movimento do drone para que o controlador de voo o possa estabilizar." },
          { objective: "O2", q: "Uma bateria está um pouco inchada depois de um voo. Deve:", options: ["Carregá-la depressa", "Apertá-la para ficar plana", "Voar com ela mais uma vez", "Deixar de a usar e retirá-la de uso com segurança"], answer: 3, why: "O inchaço é sinal de dano e de risco de incêndio." },
          { objective: "O2", q: "Onde se devem guardar as baterias de drone durante uma pausa longa?", options: ["Totalmente carregadas num carro quente", "Vazias ao sol direto", "Com carga de armazenamento num recipiente fresco, seco e resistente ao fogo", "No fogo da cozinha"], answer: 2, why: "A carga de armazenamento e um lugar fresco mantêm as baterias de lítio seguras e saudáveis." },
          { objective: "O3", q: "O que faz um estabilizador (gimbal)?", options: ["Mantém a câmara firme", "Carrega a bateria", "Pulveriza pesticida", "Mede a altura"], answer: 0, why: "O estabilizador mantém a câmara firme para imagens nítidas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manutenção no campo e na oficina",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inspeções antes e depois de cada voo",
          minutes: 5,
          goal: "Fazer uma inspeção antes e depois do voo e registar o que encontrou.",
          text: [
            "As inspeções apanham pequenos problemas antes de causarem uma queda. A inspeção antes do voo verifica se o drone está pronto para voar agora; a inspeção depois do voo encontra danos ou desgaste do voo que acabou e prepara o dia seguinte.",
            "Antes do voo: estrutura e braços sem rachas, braços trancados; hélices limpas, bem apertadas e sem lascas nem rachas; motores a rodar livremente sem raspar; carga útil bem presa e lente limpa; bateria bem encaixada e trancada; sensores e janelas de visão limpos; comando e aplicação prontos; estado do firmware verificado antes de sair da base.",
            "Depois do voo: deixe arrefecer os motores e as baterias; sinta o calor dos motores (um motor muito mais quente do que o normal pode estar a avariar); procure danos novos, poeira ou capim nos motores e nas aberturas de ar; limpe o drone com uma escova macia ou um pano seco (nada de jatos de água na eletrónica); anote no registo o tempo de voo, os problemas e as mensagens de aviso."
          ],
          steps: ["Antes do voo: estrutura, braços, hélices, motores, carga útil, bateria, sensores, comando.", "Voe só se todos os itens passarem.", "Depois do voo: arrefecer, sentir o calor dos motores, procurar danos e sujidade.", "Limpe com uma escova macia ou um pano seco.", "Anote o tempo de voo, os problemas e os avisos."],
          words: [["Inspeção", "uma verificação cuidadosa para encontrar danos, desgaste ou avarias."], ["Firmware", "o programa que vem dentro do drone, do comando e das baterias."]],
          slides: [
            { title: "Duas inspeções", bullets: ["Antes do voo: está pronto para voar agora?", "Depois do voo: danos ou desgaste de hoje?"] },
            { title: "Antes do voo", bullets: ["Estrutura, braços trancados, hélices sem danos", "Motores rodam livres, carga útil presa", "Bateria trancada, sensores limpos, aplicação pronta"] },
            { title: "Depois do voo", bullets: ["Arrefecer; sentir o calor dos motores", "Danos, poeira, capim nos motores e aberturas", "Limpar a seco; anotar tempo, problemas, avisos"] }
          ],
          tryIt: "Escreva uma lista de verificação antes do voo e outra depois do voo, com pelo menos oito itens cada, para um drone de mapeamento. Se tiver um drone, use-as uma vez e anote os resultados.",
          youCanNow: "inspecionar um drone antes e depois de cada voo e registar o que encontrou.",
          quickCheck: [
            { objective: "O4", q: "Para que serve a inspeção antes do voo?", options: ["Só para encontrar danos do último voo", "Para carregar a bateria", "Para atualizar o firmware no campo", "Para verificar se o drone está pronto para voar agora"], answer: 3, why: "A inspeção antes do voo verifica se o drone está pronto para voar antes da descolagem." },
            { objective: "O4", q: "Na verificação antes do voo, um motor faz um ruído de raspar quando o roda. O que faz?", options: ["Voa com cuidado", "Não voa; verifica se o motor tem areia, capim ou danos", "Põe óleo na hélice", "Faz uma missão mais curta"], answer: 1, why: "Os motores devem rodar livremente; um ruído de raspar quer dizer um problema a resolver antes de voar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Manutenção programada, firmware e registos",
          minutes: 5,
          goal: "Fazer um plano de manutenção por horas de voo e por calendário, e manter registos de manutenção.",
          text: [
            "Algumas partes gastam-se com o uso. As hélices, os motores, os rolamentos, os estabilizadores, o trem de aterragem e as bombas e bicos de pulverização têm de ser trocados segundo um plano. O manual do fabricante dá os intervalos; o seu manual de operações define o seu próprio plano. Planeie por horas de voo (por exemplo a cada 50 horas) e por calendário (por exemplo a cada três meses), o que vier primeiro.",
            "As atualizações de firmware corrigem erros e acrescentam funções de segurança, mas uma atualização também pode mudar o comportamento do drone. Leia as notas da versão, atualize antes de sair da base (não no campo), atualize o drone, o comando e as baterias ao mesmo tempo, e teste com um voo curto antes do trabalho a sério.",
            "Mantenha um registo de manutenção para cada drone: data, horas de voo, o que foi inspecionado, trocado ou reparado, peças usadas, versão do firmware, quem fez o trabalho e o resultado. As autoridades esperam que os operadores façam a manutenção das aeronaves e guardem registos; os clientes e as seguradoras também os podem pedir."
          ],
          steps: ["Leia os intervalos de manutenção do fabricante.", "Escreva o seu plano por horas de voo e por calendário.", "Planeie as atualizações de firmware na base, depois de ler as notas da versão, com um voo de teste.", "Mantenha um registo de manutenção para cada drone.", "Tenha hélices de reserva e peças comuns em stock."],
          words: [["Manutenção programada", "verificações e trocas de peças planeadas em intervalos fixos."], ["Registo de manutenção", "o registo de toda a manutenção feita num drone."], ["Notas da versão", "a descrição do fabricante sobre o que uma atualização de programa muda."]],
          slides: [
            { title: "As partes gastam-se", bullets: ["Hélices, motores, rolamentos, estabilizador", "Trem de aterragem, bombas, bicos", "Troque segundo um plano"] },
            { title: "Horas e calendário", bullets: ["Por exemplo a cada 50 horas ou 3 meses", "O que vier primeiro", "Siga o manual do fabricante"] },
            { title: "Firmware com segurança", bullets: ["Leia as notas da versão", "Atualize na base, todas as partes juntas", "Voo de teste antes do trabalho a sério"] },
            { title: "Registo de manutenção", bullets: ["Data, horas, trabalho feito, peças, firmware", "Quem fez e o resultado", "Para a segurança, autoridades, clientes, seguradoras"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Faça uma tabela com o plano de manutenção de um drone com pelo menos seis itens (hélices, motores, estabilizador, trem de aterragem, baterias, firmware), cada um com um intervalo em horas e em meses, e comece um registo de manutenção com um exemplo preenchido.",
          youCanNow: "planear a manutenção programada e as atualizações de firmware e manter um registo de manutenção correto.",
          quickCheck: [
            { objective: "O5", q: "O que quer dizer \"o que vier primeiro\" num plano de manutenção?", options: ["Fazer o trabalho só a cada três meses", "Fazer o trabalho quando chegar ao limite de horas de voo ou à data do calendário, o que chegar primeiro", "Saltar o trabalho se o drone voar bem", "Fazer o trabalho só depois de uma queda"], answer: 1, why: "Planear por horas de voo e por calendário, o que vier primeiro, impede que as partes se gastem demais." },
            { objective: "O5", q: "Aparece uma atualização de firmware quando está na machamba de um cliente. O que faz?", options: ["Instala-a logo no campo", "Atualiza só o drone e não o comando", "Desliga todas as atualizações para sempre", "Espera, e depois atualiza na base, lê as notas da versão e testa com um voo curto"], answer: 3, why: "As atualizações podem mudar o comportamento, por isso fazem-se na base, todas juntas, e testam-se antes do trabalho a sério." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Resolver avarias e as condições do terreno em África",
          minutes: 6,
          goal: "Encontrar passo a passo a causa das avarias comuns e proteger os drones da poeira, do calor, da chuva e dos cortes de eletricidade.",
          text: [
            "Resolva as avarias um passo de cada vez: leia a mensagem de aviso na aplicação, verifique primeiro as causas mais simples, mude uma coisa e teste. Avarias comuns: erro da bússola (afaste-se de metal, veículos e linhas elétricas, e volte a calibrar se a aplicação pedir); GNSS fraco (espere por mais satélites, afaste-se de árvores altas); vibração ou balanço (verifique se há uma hélice danificada ou solta ou um braço torto); erro do motor (verifique se há capim, areia ou um motor danificado); voos curtos (bateria velha, calor ou uma carga útil pesada).",
            "A poeira e a areia entram nos motores e nos estabilizadores: descole de um tapete ou de uma lona, limpe depois do voo e guarde numa mala fechada. O calor encurta a vida das baterias e pode aquecer demais a eletrónica: ponha as baterias e o comando à sombra, voe nas horas mais frescas e deixe o drone descansar entre voos. A chuva e a humidade estragam a eletrónica, a não ser que o drone seja feito para isso: não voe à chuva, seque o equipamento e guarde-o com saquinhos que absorvem a humidade.",
            "Onde a eletricidade falha, planeie a carga: um inversor no veículo ou um kit de carga solar, baterias suficientes para o dia e carga durante a noite na base. Saiba quando parar: se uma avaria se repete ou afeta a segurança, deixe o drone em terra e envie-o ao centro de assistência do fabricante ou a um técnico qualificado."
          ],
          steps: ["Leia a mensagem de aviso exata.", "Verifique primeiro as causas mais simples.", "Mude uma coisa de cada vez e depois teste.", "Use um tapete de aterragem; limpe e guarde o drone na mala depois de trabalhos com poeira.", "Baterias à sombra; voe nas horas mais frescas; não voe à chuva se o drone não for feito para isso.", "Deixe o drone em terra se uma avaria de segurança se repetir."],
          words: [["Resolver avarias", "encontrar passo a passo a causa de uma avaria."], ["Calibração", "um procedimento que acerta um sensor, como a bússola, para que leia corretamente."], ["Em terra (parado)", "proibido de voar até ser reparado."]],
          slides: [
            { title: "Resolver avarias passo a passo", bullets: ["Leia o aviso", "Primeiro as causas mais simples", "Mude uma coisa e depois teste"] },
            { title: "Avarias comuns", bullets: ["Erro da bússola: longe de metal, volte a calibrar", "Balanço: hélices ou braços", "Voos curtos: bateria velha, calor, carga pesada"] },
            { title: "Poeira, calor e chuva", bullets: ["Tapete de aterragem, limpar, mala fechada", "Baterias à sombra, voar nas horas frescas", "Sem chuva se não for feito para isso; secar e guardar bem"] },
            { title: "Eletricidade e limites", bullets: ["Carga no veículo ou solar, baterias de reserva", "Drone em terra se uma avaria de segurança se repetir"] }
          ],
          tryIt: "Tarefa final: escreva o programa de manutenção de um drone: lista de partes com o que fazem, procedimento das baterias, listas de verificação antes e depois do voo, plano por horas e por calendário, uma tabela para resolver pelo menos cinco avarias e um modelo de registo de manutenção com dois exemplos preenchidos.",
          youCanNow: "resolver avarias comuns dos drones, proteger os drones nas condições do terreno em África e gerir um programa de manutenção completo.",
          quickCheck: [
            { objective: "O6", q: "Qual é o primeiro passo para resolver uma avaria?", options: ["Ler a mensagem de aviso e verificar primeiro as causas mais simples", "Trocar várias peças de uma vez", "Abrir a bateria", "Voar mais alto para testar"], answer: 0, why: "Leia a mensagem, verifique primeiro as causas simples, mude uma coisa e teste." },
            { objective: "O6", q: "Vai voar o dia todo numa machamba quente e com poeira, sem eletricidade. O que planeia?", options: ["Uma bateria e descolar da areia sem nada por baixo", "Deixar as baterias ao sol para ficarem quentes", "Um tapete para descolar, sombra para as baterias, horas mais frescas e baterias carregadas suficientes ou um carregador solar ou no veículo", "Voar sem deixar o drone descansar"], answer: 2, why: "Os tapetes evitam a poeira, a sombra e as horas frescas protegem as baterias, e a carga tem de ser planeada onde a eletricidade falha." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manutenção no campo e na oficina",
        questions: [
          { objective: "O4", q: "Uma hélice tem uma pequena lasca na borda. Deve:", options: ["Voar com cuidado", "Pôr-lhe fita-cola", "Trocá-la antes de voar", "Lixá-la e voar"], answer: 2, why: "As hélices danificadas causam vibração e podem partir-se em voo." },
          { objective: "O4", q: "Depois de um voo, um motor está muito mais quente do que os outros. Isto pode querer dizer:", options: ["O motor está a avariar ou está bloqueado", "O drone voou bem", "A câmara está suja", "A bateria é nova"], answer: 0, why: "Um calor fora do normal pode ser sinal de um rolamento mau, de sujidade ou de um motor a avariar." },
          { objective: "O5", q: "Quando deve instalar uma atualização de firmware?", options: ["No meio do campo de um cliente", "Durante um voo", "Nunca", "Na base, depois de ler as notas da versão, e depois fazer um voo de teste"], answer: 3, why: "As atualizações podem mudar o comportamento; teste antes do trabalho a sério." },
          { objective: "O6", q: "A aplicação mostra um erro da bússola na descolagem. Um bom primeiro passo é:", options: ["Descolar mesmo assim", "Afastar-se de metal, veículos e linhas elétricas e voltar a calibrar se a aplicação pedir", "Tirar a bússola", "Voar no modo desportivo"], answer: 1, why: "O metal e as fontes magnéticas perturbam a bússola." },
          { objective: "O6", q: "Como protege um drone da poeira numa machamba seca?", options: ["Descolar de um tapete, limpar depois do voo, guardar numa mala fechada", "Lavá-lo com uma mangueira", "Voar mais perto do chão", "Deixá-lo destapado"], answer: 0, why: "A poeira estraga os motores e os estabilizadores; os tapetes, a limpeza e as malas ajudam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones Agrícolas: Tecnologia UAS e Manutenção",
    questions: [
      { objective: "O1", q: "A ligação C2 é:", options: ["Um tipo de bateria", "A ligação de rádio entre o comando e o drone", "Um tamanho de hélice", "Uma lente de câmara"], answer: 1, why: "A ligação de comando e controlo leva os comandos e os dados." },
      { objective: "O1", q: "Os ESC controlam:", options: ["O zoom da câmara", "O armazenamento das baterias", "A velocidade a que roda cada motor", "Os satélites de GPS"], answer: 2, why: "Os controladores eletrónicos de velocidade comandam os motores." },
      { objective: "O1", q: "O controlador de voo é:", options: ["O cérebro a bordo do drone que o mantém estável", "A pessoa que pilota", "A caixa do comando à distância", "O lugar de aterragem"], answer: 0, why: "Lê os sensores e ajusta os motores muitas vezes por segundo." },
      { objective: "O1", q: "O GNSS dá ao drone a sua:", options: ["Cor", "Temperatura", "Carga da bateria", "Posição a partir de satélites"], answer: 3, why: "O GNSS, como o GPS, dá a posição." },
      { objective: "O1", q: "Num drone, o barómetro mede:", options: ["A direção do vento", "A pressão do ar, usada para a altura", "A saúde das culturas", "Os ciclos da bateria"], answer: 1, why: "A pressão do ar muda com a altura." },
      { objective: "O2", q: "Porque podem as baterias LiPo ser perigosas?", options: ["São pesadas", "Fazem barulho", "Podem pegar fogo se forem danificadas, carregadas demais ou aquecidas demais", "Nunca carregam"], answer: 2, why: "Muita energia num pequeno espaço quer dizer muito risco quando são mal tratadas." },
      { objective: "O2", q: "As baterias devem ser carregadas:", options: ["Com o carregador certo, a vigiar, sobre uma superfície que não arde", "Durante a noite em cima de uma cama", "Dentro de um carro quente", "Com qualquer carregador que encaixe"], answer: 0, why: "Estes passos reduzem o risco de incêndio." },
      { objective: "O2", q: "Um ciclo de carga é:", options: ["Uma peça de bicicleta", "Um plano de voo", "Um padrão do tempo", "Um uso completo da capacidade de uma bateria"], answer: 3, why: "Anotar os ciclos mostra o envelhecimento da bateria." },
      { objective: "O2", q: "Uma bateria de drone danificada e retirada de uso deve ir para:", options: ["Um fogo de cozinha", "Um ponto de recolha de lixo eletrónico ou de baterias", "O lixo comum", "Um rio"], answer: 1, why: "As baterias de lítio precisam de recolha e reciclagem seguras." },
      { objective: "O3", q: "O sensor de luz solar de um drone multiespectral:", options: ["Carrega a bateria", "Mede o vento", "Mede a luz que chega para corrigir as leituras", "Pulveriza água"], answer: 2, why: "Ajuda a corrigir as mudanças da luz." },
      { objective: "O3", q: "Uma carga útil solta pode:", options: ["Desequilibrar o drone e perturbar o controlo", "Melhorar as fotos", "Tornar o drone mais leve", "Carregar mais depressa"], answer: 0, why: "O controlador de voo conta com uma carga bem presa e equilibrada." },
      { objective: "O3", q: "Os bicos de pulverização devem ser verificados quanto a:", options: ["Cor", "Autocolantes da marca", "Música", "Desgaste e entupimentos"], answer: 3, why: "Os bicos gastos ou entupidos aplicam a quantidade errada." },
      { objective: "O3", q: "Uma boa manutenção do sistema de pulverização substitui as autorizações para pulverizar?", options: ["Sim", "Não; as autorizações da aviação e de pesticidas continuam a ser precisas", "Só em machambas pequenas", "Só à noite"], answer: 1, why: "A manutenção e a autorização legal são exigências separadas." },
      { objective: "O4", q: "A inspeção depois do voo faz-se para:", options: ["Carregar o comando", "Planear o próximo cliente", "Encontrar danos ou desgaste do voo que acabou", "Editar fotos"], answer: 2, why: "Apanha os problemas antes do voo seguinte." },
      { objective: "O4", q: "Como deve limpar um drone depois de um voo com poeira?", options: ["Com uma escova macia ou um pano seco", "Com água a alta pressão", "Com lixa", "Com gasolina"], answer: 0, why: "A água e os produtos químicos podem estragar a eletrónica." },
      { objective: "O5", q: "A manutenção programada é planeada por:", options: ["Só a cor", "Só o tempo que faz", "Só o cliente", "Horas de voo e calendário, o que vier primeiro"], answer: 3, why: "As partes gastam-se com o uso e com o tempo." },
      { objective: "O5", q: "Um registo de manutenção anota:", options: ["Só o preço do drone", "Data, horas, trabalho feito, peças, firmware, quem fez, resultado", "Os números de telefone dos agricultores", "Os preços das culturas"], answer: 1, why: "Registos completos ajudam a segurança e o cumprimento das regras." },
      { objective: "O6", q: "O drone balança em voo. Verifique primeiro:", options: ["O mapa do cliente", "A previsão do tempo para o próximo mês", "As hélices e os braços, se estão danificados ou soltos", "O cartão de memória"], answer: 2, why: "As hélices danificadas e os braços tortos causam vibração." },
      { objective: "O6", q: "Com tempo muito quente, deve:", options: ["Pôr as baterias à sombra e voar nas horas mais frescas", "Deixar as baterias ao sol", "Voar sem parar e sem descanso", "Carregar as baterias ainda quentes"], answer: 0, why: "O calor encurta a vida das baterias e força a eletrónica." },
      { objective: "O6", q: "Uma avaria de segurança volta sempre depois das suas reparações. Deve:", options: ["Continuar a voar", "Escondê-la dos clientes", "Tapar o aviso", "Deixar o drone em terra e enviá-lo a um técnico qualificado"], answer: 3, why: "As avarias de segurança que se repetem precisam de reparação por um especialista antes de voar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do programa e verifique outra vez.",
    criteria: [
      {
        name: "Lista de partes",
        objective: "O1",
        notYet: "Faltam partes principais, ou não se explica o que fazem.",
        meets: "Todas as partes principais da aeronave e do sistema de terra estão na lista com o que fazem.",
        exceeds: "Indica que partes se gastam e quais precisam de calibração."
      },
      {
        name: "Cuidado com as baterias",
        objective: "O2",
        notYet: "Faltam passos de carga, armazenamento ou retirada de uso, ou não são seguros.",
        meets: "Passos seguros de carga, arrefecimento, carga de armazenamento, transporte e retirada de uso, com registo dos ciclos.",
        exceeds: "Inclui um plano contra incêndios para o lugar onde se carrega."
      },
      {
        name: "Listas de verificação",
        objective: "O4",
        notYet: "Não há lista, ou faltam itens importantes como as hélices e a trava da bateria.",
        meets: "As listas antes e depois do voo cobrem estrutura, hélices, motores, carga útil, bateria, sensores e notas no registo.",
        exceeds: "As verificações da carga útil servem para o trabalho real do drone, como mapeamento ou pulverização."
      },
      {
        name: "Plano e registo",
        objective: "O5",
        notYet: "Não há intervalos, ou faltam campos no registo.",
        meets: "Um plano por horas de voo e por calendário, uma rotina de firmware e um modelo de registo com dois exemplos preenchidos.",
        exceeds: "Os intervalos vêm do manual do fabricante e a fonte está indicada."
      },
      {
        name: "Tabela de avarias",
        objective: "O6",
        notYet: "Menos de cinco avarias, ou sem passos.",
        meets: "Pelo menos cinco avarias comuns, cada uma com as primeiras verificações simples e quando deixar o drone em terra.",
        exceeds: "Acrescenta passos para a poeira, o calor, a chuva e os cortes de eletricidade nas machambas do próprio aluno."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do programa de manutenção",
      "Alunos que dizem usar uma lista de verificação escrita e um registo de manutenção 30 dias depois (inquérito de seguimento)",
      "Empresas de drones ou cooperativas que dizem ter menos quedas, incidentes com baterias ou dias com drones parados depois da formação",
      "Alunos que fazem o curso de drones seguinte ou uma formação de técnico de um fabricante"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador para as lições; um drone agrícola verdadeiro, ou fotos claras de um, para praticar",
      "O manual do fabricante do drone, se houver",
      "Um caderno ou uma folha de cálculo para as listas de verificação, o plano e o registo",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo para escrever o programa de manutenção"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois andem à volta de um drone verdadeiro (desligado, sem hélices) para dizer o nome de cada parte.",
      "Manuseie as baterias só sobre uma superfície que não arde, e nunca carregue, fure nem abra uma bateria inchada na aula.",
      "Use o manual do próprio drone para os intervalos e os procedimentos; o curso dá só o método geral.",
      "Não ponha os sistemas de pulverização a funcionar com pesticida na aula; pratique as inspeções com água limpa ou sem líquido.",
      "Avalie o programa de manutenção com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
