"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-programs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const ODPC = { name: "Gabinete do Comissário de Proteção de Dados do Quénia (ODPC)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Comissão de Proteção de Dados da Nigéria (NDPC)", url: "https://ndpc.gov.ng" };
const QGIS = { name: "QGIS (SIG gratuito e de código aberto)", url: "https://qgis.org/" };
const COPERNICUS = { name: "Copernicus Browser (imagens de satélite Sentinel gratuitas)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_ITU_DRONES = { name: "FAO e UIT: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const KCAA_UAS = { name: "Autoridade da Aviação Civil do Quénia (KCAA): sistemas de aeronaves não tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autoridade da Aviação Civil da Nigéria (NCAA): Nig.CARs 2023 Parte 21, aeronaves pilotadas remotamente (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-programs-pt",
  lang: "pt",
  translationOf: "agri-drones-programs",
  category: "Agriculture (Africa)",
  name: "Drones para a Monitorização Agrícola 5: Integração de Dados, SIG e Desenho de Programas",
  skills: "Organizar e fazer cópias de segurança dos dados de drone, Combinar mapas de drone com camadas SIG e imagens de satélite, Proteger os dados dos agricultores e obter o seu consentimento, Definir o objetivo e os utilizadores de um programa de monitorização, Planear a equipa, o equipamento, o calendário e o orçamento, Medir e comunicar os resultados",
  outcome: "desenhar um programa de monitorização agrícola com drones para um grupo de agricultores: o objetivo, os utilizadores, o plano de dados com integração em SIG e proteção de dados, a equipa, o calendário, o orçamento, como o serviço se paga a si próprio e como vai medir e comunicar os resultados.",
  about: [
    "Este é o Curso 5 da série de monitorização com drones. É para gestores de extensão rural, líderes de cooperativas e de grupos de agricultores, técnicos de agricultura de condados e estados, responsáveis de programas de ONG, gestores de agronegócios e empreendedores de drones no Quénia, na Nigéria e em toda a África que querem fazer monitorização com drones para muitas explorações, e não só para uma.",
    "O Capítulo 1 trata dos dados: dar nomes, guardar e fazer cópias de segurança dos dados de drone; juntar mapas de drone com limites de campos, imagens de satélite e registos da exploração num SIG; e proteger os dados pessoais dos agricultores de acordo com leis como a Lei de Proteção de Dados de 2019 do Quénia e a Lei de Proteção de Dados de 2023 da Nigéria. O Capítulo 2 trata do desenho do programa: partir de um problema real e de utilizadores reais, planear pessoas, equipamento, voos e dinheiro, e provar que o programa funciona.",
    "No final, terá o desenho de um programa que pode apresentar à direção de uma cooperativa, a um serviço de condado ou de estado, a um doador ou a um investidor. Cada capítulo termina com uma verificação de conhecimentos e o curso termina com um questionário de 20 perguntas."
  ],
  finalTask: "Escreva, em duas páginas, o desenho de um programa de monitorização com drones para uma cooperativa de 200 pequenos agricultores (por exemplo milho e feijão em Trans Nzoia, café em Nyeri ou mandioca no Estado de Ogun): o problema e o objetivo, os utilizadores e o que cada um recebe, o plano de dados (armazenamento, camadas SIG, uso de satélite, consentimento e proteção de dados), a equipa e o equipamento, o calendário de voos para uma campanha agrícola, um orçamento simples e como o serviço é pago, as medidas de sucesso e como os resultados serão comunicados.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Gestores de extensão rural, líderes de cooperativas e de grupos de agricultores, técnicos de agricultura de condados e estados, responsáveis de programas de ONG, gestores de agronegócios e empreendedores de drones no Quénia, na Nigéria e em toda a África que querem fazer monitorização com drones para muitas explorações.",
    startingPoint: "Os alunos sabem fazer e ler mapas de drone e já viram trabalho com drones numa só exploração (Cursos 1 a 4). Poucos já organizaram dados de centenas de explorações, combinaram mapas de drone com imagens de satélite e registos num SIG, trataram dados pessoais de agricultores de acordo com a lei, ou planearam e orçamentaram um programa que dure para além de um subsídio.",
    gap: "Muitos projetos com drones começam pelo drone em vez de um problema, perdem dados, tratam mal as informações pessoais dos agricultores ou param quando o subsídio acaba. Um desenho de programa claro, com plano de dados, consentimento, equipa, calendário, orçamento e medidas, permite a uma cooperativa, a um condado ou a uma empresa ter um serviço em que os agricultores confiam e que se paga a si próprio.",
    constraints: [
      "Nível de leitura: palavras simples; todos os termos de dados e de SIG são explicados",
      "Aparelhos: um portátil com o QGIS gratuito e uma folha de cálculo; dados de drone e de satélite, ou exemplos",
      "Lei: aplicam-se leis de proteção de dados (a Lei de Proteção de Dados de 2019 do Quénia, a Lei de Proteção de Dados de 2023 da Nigéria ou a lei do país do aluno)",
      "Regras da aviação: os pilotos precisam de licença e a organização pode precisar de um certificado de operador",
      "Os custos e as taxas mudam de país para país e com o tempo: os alunos usam orçamentos locais reais"
    ],
    prerequisites: "\"Drones para a Monitorização Agrícola 4: Precisão, Clima e Monitorização do Gado\", ou experiência equivalente com mapas de drone."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para dados de drone de muitas explorações", action: "criar uma estrutura de pastas, uma regra de nomes, um registo de voos e cópias de segurança 3-2-1", standard: "usando IDs de exploração em vez de nomes e verificando que as cópias de segurança abrem" },
    { id: "O2", condition: "Com mapas de drone, limites de campos, imagens de satélite e registos da exploração", action: "planear um projeto SIG que os ponha em camadas e ligue os registos aos campos pelo ID", standard: "com todas as camadas no mesmo sistema de coordenadas" },
    { id: "O3", condition: "Quando um programa recolhe dados pessoais de agricultores", action: "escrever uma declaração de consentimento e passos de proteção de dados que cumpram a lei", standard: "dizendo o que é recolhido, porquê, quem o vê, quanto tempo é guardado e que os agricultores podem dizer não" },
    { id: "O4", condition: "Para um grupo de agricultores", action: "escrever um objetivo do programa com um número e uma data e listar os utilizadores e o que cada um recebe", standard: "partindo de um problema que importa aos utilizadores e sobre o qual podem agir" },
    { id: "O5", condition: "Para uma campanha agrícola do programa", action: "planear a equipa, o equipamento, o calendário de voos e o orçamento, e como o serviço é pago", standard: "incluindo licenças, custos únicos e custos correntes, e um plano para depois do fim de qualquer subsídio" },
    { id: "O6", condition: "No fim de uma campanha agrícola", action: "escolher medidas de sucesso e comunicar os resultados a cada utilizador", standard: "em comparação com uma linha de base e com honestidade sobre o que não funcionou" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Gestão e integração de dados",
      lessons: [
        {
          objectives: ["O1"],
          title: "Organizar, guardar e fazer cópias de segurança dos dados de drone",
          minutes: 5,
          goal: "Criar um sistema de pastas, nomes e cópias de segurança para dados de drone de muitas explorações.",
          text: [
            "Um só voo de mapeamento pode produzir centenas de fotos e vários mapas grandes. Em 200 explorações e numa campanha inteira, isso passa a milhares de ficheiros. Sem um sistema, os dados perdem-se, misturam-se ou são apagados por cima, e o programa perde a confiança das pessoas.",
            "Use uma só estrutura de pastas clara e uma só regra de nomes para todos: por exemplo Programa / ID da exploração / ID do campo / Data / brutos, processados, relatórios. Use o número de ID da exploração em vez do nome do agricultor nos nomes dos ficheiros. Mantenha um registo simples (uma folha de cálculo) de cada voo: data, ID da exploração, campo, piloto, drone, ficheiros, processado sim ou não.",
            "Siga a ideia de cópia de segurança 3-2-1: três cópias, em dois tipos diferentes de armazenamento (por exemplo um portátil e um disco externo), com uma cópia noutro lugar ou num serviço de nuvem de confiança. Verifique que as cópias de segurança abrem. Decida quanto tempo guarda as fotos brutas, porque enchem o armazenamento depressa."
          ],
          steps: ["Combinem uma só estrutura de pastas e uma só regra de nomes para toda a equipa.", "Dê um número de ID a cada exploração e a cada campo; não ponha nomes nos nomes dos ficheiros.", "Mantenha uma folha de cálculo com o registo de voos.", "Faça cópias de segurança: três cópias, dois tipos de armazenamento, uma fora do local.", "Decida quanto tempo guarda as fotos brutas."],
          words: [["Dados brutos", "as fotos e os registos originais, tal como saem do drone."], ["Cópia de segurança", "uma cópia extra dos dados, guardada para o caso de o original se perder."], ["Registo", "uma lista que anota cada voo e os seus ficheiros."]],
          slides: [
            { title: "Os dados crescem depressa", bullets: ["Centenas de fotos por voo", "Milhares de ficheiros por campanha", "Dados perdidos ou misturados fazem perder a confiança"] },
            { title: "Um só sistema para todos", bullets: ["Programa / ID da exploração / ID do campo / Data", "Brutos, processados, relatórios", "IDs, e não nomes, nos nomes dos ficheiros"] },
            { title: "Mantenha um registo de voos", bullets: ["Data, exploração, campo, piloto, drone", "Ficheiros e estado do processamento"] },
            { title: "Cópia de segurança 3-2-1", bullets: ["Três cópias", "Dois tipos de armazenamento", "Uma cópia noutro lugar"] }
          ],
          tryIt: "Crie no seu computador ou telefone a estrutura de pastas para um programa de exemplo com três explorações, e comece uma folha de cálculo de registo de voos com as colunas desta lição. Acrescente dois voos de exemplo.",
          youCanNow: "organizar, registar e fazer cópias de segurança dos dados de drone de um programa com muitas explorações.",
          quickCheck: [
            { objective: "O1", q: "Porque decidir quanto tempo guardar as fotos brutas?", options: ["É ilegal guardar fotos brutas", "Os agricultores pedem-nas todos os dias", "As fotos brutas enchem o armazenamento depressa", "Não se podem fazer mapas com elas"], answer: 2, why: "As fotos brutas enchem o armazenamento depressa, por isso o programa decide quanto tempo as guarda." },
            { objective: "O1", q: "Dois pilotos dão nomes diferentes aos ficheiros da mesma exploração. O que faz?", options: ["Combinar uma só estrutura de pastas e uma só regra de nomes para todos", "Deixar cada piloto usar o seu próprio sistema", "Usar o nome do agricultor em todos os ficheiros", "Apagar os ficheiros mais antigos"], answer: 0, why: "Uma só estrutura de pastas e uma só regra de nomes para todos evita que os dados se percam ou se misturem." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Combinar mapas de drone com SIG, satélite e registos da exploração",
          minutes: 6,
          goal: "Montar um projeto SIG com camadas de mapas de drone, limites de campos, imagens de satélite e registos da exploração.",
          text: [
            "Um SIG (sistema de informação geográfica) deixa-o empilhar diferentes tipos de dados num só mapa. Num programa, as camadas de base são os limites dos campos (percorridos a pé com o GPS do telefone ou desenhados num mapa de drone) e os pontos das explorações. Por cima vão os ortomosaicos e os mapas NDVI do drone, imagens de satélite gratuitas e registos como a data de sementeira, a variedade, os insumos e a produção.",
            "As imagens de satélite gratuitas Sentinel-2, que pode ver no Copernicus Browser, chegam de poucos em poucos dias, com cerca de 10 metros por píxel. São grosseiras demais para ver plantas uma a uma, mas boas para acompanhar as 200 explorações entre voos de drone. Use os satélites para decidir que explorações precisam de uma visita do drone, e os drones para o detalhe.",
            "Ligue os registos aos campos com o ID do campo, para poder fazer perguntas como: os campos que receberam o conselho do drone produziram mais? O QGIS consegue juntar uma folha de cálculo a uma camada de campos pelo ID. Use o mesmo sistema de coordenadas em todas as camadas, senão elas não ficam alinhadas."
          ],
          steps: ["Faça uma camada de limites de campos com um ID para cada campo.", "Acrescente os mapas de drone dos campos que sobrevoou.", "Acrescente uma imagem de satélite gratuita da zona para o mesmo período.", "Junte a sua folha de cálculo de registos à camada de campos pelo ID do campo.", "Verifique que todas as camadas ficam alinhadas (mesmo sistema de coordenadas)."],
          words: [["Limite do campo", "uma forma num mapa que contorna um campo."], ["Sentinel-2", "um par de satélites europeus cujas imagens são gratuitas; cerca de 10 m por píxel."], ["Junção", "ligar uma tabela às formas de um mapa usando um ID comum."], ["Sistema de coordenadas", "a regra que um mapa usa para colocar as coisas na Terra; as camadas têm de partilhar o mesmo para ficarem alinhadas."]],
          slides: [
            { title: "Empilhe as suas camadas", bullets: ["Limites dos campos e pontos das explorações", "Mapas de drone e NDVI", "Imagens de satélite", "Registos de sementeira, insumos e produção"] },
            { title: "Satélite mais drone", bullets: ["Sentinel-2: gratuito, de poucos em poucos dias, cerca de 10 m", "Acompanhe todas as explorações entre voos", "Envie o drone onde é preciso detalhe"] },
            { title: "Ligue os registos pelo ID do campo", bullets: ["Junte folhas de cálculo aos campos no QGIS", "Pergunte: os campos aconselhados produziram mais?", "O mesmo sistema de coordenadas em todas as camadas"] }
          ],
          sources: [QGIS, COPERNICUS],
          tryIt: "Abra o Copernicus Browser e encontre a sua zona. Depois, no QGIS, desenhe dois limites de campos de exemplo, dê-lhes IDs de campo e junte uma pequena folha de cálculo com a data de sementeira e a variedade de cada um.",
          youCanNow: "combinar mapas de drone, imagens de satélite, limites de campos e registos da exploração num só projeto SIG.",
          quickCheck: [
            { objective: "O2", q: "O que é que um SIG lhe permite fazer?", options: ["Pilotar o drone automaticamente", "Empilhar diferentes tipos de dados num só mapa", "Carregar as baterias mais depressa", "Pagar aos agricultores por dinheiro móvel"], answer: 1, why: "Um SIG empilha camadas como limites, mapas de drone, imagens de satélite e registos num só mapa." },
            { objective: "O2", q: "Uma cooperativa quer acompanhar as 200 explorações todas as semanas, mas tem um só drone. O que planeia?", options: ["Sobrevoar todas as explorações todos os dias", "Desistir da monitorização", "Sobrevoar só a exploração do presidente", "Usar imagens de satélite gratuitas para acompanhar todas e enviar o drone onde mostram um problema"], answer: 3, why: "Os satélites acompanham todas as explorações entre voos; os drones dão o detalhe onde é preciso." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Proteger os dados dos agricultores e obter o seu consentimento",
          minutes: 5,
          goal: "Recolher e usar os dados dos agricultores dentro da lei, com consentimento claro e armazenamento seguro.",
          text: [
            "Um programa de monitorização guarda dados pessoais: nomes, números de telefone, números de dinheiro móvel, localização das explorações, produções e fotos das casas. Aplicam-se leis de proteção de dados. No Quénia, a Lei de Proteção de Dados de 2019 é supervisionada pelo Gabinete do Comissário de Proteção de Dados (ODPC), que regista os responsáveis e os subcontratantes do tratamento de dados. Na Nigéria, a Lei de Proteção de Dados de 2023 é supervisionada pela Comissão de Proteção de Dados da Nigéria (NDPC). Outros países têm as suas próprias leis. Verifique se a sua organização tem de se registar e o que a lei exige.",
            "Obtenha um consentimento claro na língua do agricultor: o que recolhe, porquê, quem vê, quanto tempo guarda, e que ele pode dizer não ou pedir que os dados sejam apagados. Recolha só o que precisa. Não partilhe dados com compradores, credores ou outros sem autorização.",
            "Guarde os dados em segurança: palavras-passe nos portáteis e telefones, acesso limitado, e dados pessoais guardados à parte dos mapas sempre que puder. Os agricultores devem tirar proveito dos seus próprios dados, como os seus mapas e relatórios, e não apenas entregá-los."
          ],
          steps: ["Liste os dados pessoais que o programa vai guardar.", "Verifique a lei de proteção de dados do seu país e se tem de se registar.", "Escreva uma declaração de consentimento curta na língua do agricultor.", "Recolha só o que precisa; guarde-o com palavras-passe e acesso limitado.", "Dê aos agricultores os seus próprios mapas e relatórios."],
          words: [["Dados pessoais", "informações sobre uma pessoa que pode ser identificada, como o nome, o número de telefone ou a localização da exploração."], ["Consentimento", "um sim claro de uma pessoa, depois de ela perceber o que vai acontecer aos seus dados."], ["Responsável pelo tratamento", "a organização que decide porquê e como os dados pessoais são usados."]],
          slides: [
            { title: "O seu programa guarda dados pessoais", bullets: ["Nomes, telefones, números de dinheiro móvel", "Localização das explorações, produções, fotos"] },
            { title: "A lei aplica-se", bullets: ["Quénia: Lei de Proteção de Dados de 2019, ODPC", "Nigéria: Lei de Proteção de Dados de 2023, NDPC", "Outros países: a sua própria lei"] },
            { title: "Consentimento e o mínimo de dados", bullets: ["O quê, porquê, quem vê, quanto tempo", "Os agricultores podem dizer não", "Recolha só o que precisa"] },
            { title: "Seguro e justo", bullets: ["Palavras-passe, acesso limitado", "Nada de partilhar sem autorização", "Os agricultores recebem os seus próprios mapas"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Escreva uma declaração de consentimento de cinco frases para os agricultores que entram num programa de monitorização com drones, com palavras simples (e numa língua local, se puder): o que recolhe, porquê, quem vê, quanto tempo guarda e como dizer não.",
          youCanNow: "recolher e tratar os dados dos agricultores com consentimento, cumprindo a lei de proteção de dados do seu país.",
          quickCheck: [
            { objective: "O3", q: "No Quénia, quem é que o ODPC regista?", options: ["Pilotos de drones", "Vendedores de sementes", "Só compradores de produtos agrícolas", "Responsáveis e subcontratantes do tratamento de dados"], answer: 3, why: "O ODPC do Quénia regista os responsáveis e os subcontratantes do tratamento de dados ao abrigo da Lei de Proteção de Dados de 2019." },
            { objective: "O3", q: "Uma agricultora pede-lhe que apague os dados dela do programa. O que faz?", options: ["Recusa, porque os dados pertencem ao programa", "Respeita o pedido e apaga-os, como o consentimento dizia que ela podia", "Vende-os primeiro e depois apaga-os", "Ignora o pedido"], answer: 1, why: "O consentimento diz aos agricultores que podem dizer não ou pedir que os seus dados sejam apagados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Gestão e integração de dados",
        questions: [
          { objective: "O1", q: "Porque usar IDs de exploração em vez dos nomes dos agricultores nos nomes dos ficheiros?", options: ["Os nomes são compridos demais", "Protege a privacidade e mantém os nomes coerentes", "Os programas não conseguem ler nomes", "O drone exige isso"], answer: 1, why: "Os IDs protegem os dados pessoais e mantêm os ficheiros arrumados." },
          { objective: "O1", q: "A ideia de cópia de segurança 3-2-1 quer dizer:", options: ["Três cópias, dois tipos de armazenamento, uma fora do local", "Três drones, dois pilotos, uma exploração", "Fazer uma cópia de segurança de três em três anos", "Apagar duas cópias"], answer: 0, why: "Várias cópias em lugares diferentes protegem contra a perda." },
          { objective: "O2", q: "Num programa, as imagens gratuitas Sentinel-2 servem sobretudo para:", options: ["Contar plantas uma a uma", "Substituir todos os voos de drone", "Ler os nomes dos agricultores", "Acompanhar todas as explorações entre voos e escolher onde enviar o drone"], answer: 3, why: "Com cerca de 10 m, mostram padrões gerais, e não plantas uma a uma." },
          { objective: "O2", q: "Duas camadas do mapa não ficam alinhadas. Uma causa provável é:", options: ["Sobreposição a mais", "O telefone do agricultor", "Sistemas de coordenadas diferentes", "Explorações a mais"], answer: 2, why: "As camadas têm de partilhar um sistema de coordenadas para ficarem alinhadas." },
          { objective: "O3", q: "Quem supervisiona a proteção de dados no Quénia?", options: ["O Gabinete do Comissário de Proteção de Dados (ODPC)", "A KCAA", "O vendedor do drone", "A assembleia do condado"], answer: 0, why: "O ODPC supervisiona a Lei de Proteção de Dados de 2019 do Quénia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Desenhar um programa de monitorização com drones",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comece pelo problema e pelos utilizadores",
          minutes: 5,
          goal: "Escrever um objetivo claro para o programa e listar os utilizadores e o que cada um recebe.",
          text: [
            "Muitos projetos com drones falham porque começam pelo drone e não pelo problema. Comece por um problema que importa aos agricultores e aos seus parceiros e sobre o qual podem agir: deteção tardia da lagarta-do-cartucho numa cooperativa de milho, qualidade desigual do chá entre plantações, falhas de plantas na mandioca de produtores contratados, ou estragos de cheias em perímetros de arroz.",
            "Escreva uma frase de objetivo com um número e uma data, por exemplo: Até ao fim das chuvas longas de 2027, encontrar os focos de lagarta-do-cartucho em 200 explorações de membros até uma semana depois dos primeiros estragos, e fazer chegar um conselho confirmado a cada agricultor afetado em três dias.",
            "Liste os utilizadores e o que cada um recebe: os agricultores (um mapa e um conselho simples no telefone), os extensionistas (onde visitar primeiro), a direção da cooperativa (um resumo da campanha), os compradores ou processadores (volumes esperados, sem dados pessoais a não ser que os agricultores concordem), e o serviço de agricultura do condado ou do estado, se for parceiro."
          ],
          steps: ["Diga o problema numa frase.", "Confirme que importa aos utilizadores e que eles podem agir sobre ele.", "Escreva um objetivo com um número e uma data.", "Liste cada grupo de utilizadores, o que recebe e em que formato."],
          words: [["Programa", "um serviço organizado que funciona ao longo do tempo para muitas pessoas, e não um voo único."], ["Utilizador", "uma pessoa ou um grupo que recebe os resultados do programa e age com base neles."]],
          slides: [
            { title: "Primeiro o problema, depois o drone", bullets: ["Um problema que importa às pessoas", "E sobre o qual podem agir"] },
            { title: "Um objetivo com um número e uma data", bullets: ["Encontrar focos de lagarta-do-cartucho em 200 explorações", "Até uma semana depois dos primeiros estragos", "Conselho em três dias"] },
            { title: "Os utilizadores e o que recebem", bullets: ["Agricultores: mapa e conselho simples no telefone", "Extensão: onde visitar primeiro", "Direção e parceiros: resumo da campanha"] }
          ],
          tryIt: "Para um programa que poderia fazer, escreva o problema, uma frase de objetivo com um número e uma data, e uma tabela com pelo menos quatro grupos de utilizadores e o que cada um recebe.",
          youCanNow: "definir com clareza o problema, o objetivo e os utilizadores de um programa com drones.",
          quickCheck: [
            { objective: "O4", q: "O que torna claro o objetivo de um programa?", options: ["Uma frase com um número e uma data", "Uma lista comprida de tudo o que os drones fazem", "A marca do drone", "Uma foto da exploração"], answer: 0, why: "Um objetivo claro é uma frase com um número e uma data, para saber quando foi atingido." },
            { objective: "O4", q: "Um membro da direção quer comprar drones primeiro e encontrar uma utilidade depois. O que aconselha?", options: ["Comprar o drone mais caro", "Comprar drones e decidir no próximo ano", "Partir de um problema que importa aos agricultores e sobre o qual podem agir", "Perguntar a um vendedor de drones o que fazer"], answer: 2, why: "Muitos projetos com drones falham porque começam pelo drone e não pelo problema." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear pessoas, equipamento, calendário e dinheiro",
          minutes: 6,
          goal: "Planear a equipa, o equipamento, o calendário de voos e o orçamento de uma campanha.",
          text: [
            "Pessoas: pilotos remotos com licença e observadores, alguém para processar e analisar os dados, extensionistas para verificar no terreno e aconselhar, e um coordenador. Se o seu programa voa para outros ou contra pagamento, a sua organização pode precisar de um certificado de operador da autoridade da aviação, e cada piloto precisa da licença que as suas regras exigem.",
            "Equipamento: drones (e um de reserva), baterias para um dia inteiro, carregadores (com opção solar ou pelo veículo onde a eletricidade falha), um portátil capaz de processar mapas, armazenamento, telefones ou tablets, equipamento de segurança e transporte. Calendário: siga o calendário agrícola da cultura e decida quantos voos por exploração em cada campanha; agrupe as explorações por zona para que uma equipa cubra muitas num só dia.",
            "Dinheiro: liste os custos únicos (drones, portátil, formação, licenças e certificados) e os custos correntes (pessoal, transporte, pacotes de dados, reparações, seguro, taxas). Depois decida como é pago: uma taxa por acre ou por hectare cobrada por dinheiro móvel, uma contribuição da cooperativa sobre as entregas, um comprador ou processador que beneficia, ou um subsídio do governo ou de um doador para o período de arranque. Planeie para depois do fim do subsídio."
          ],
          steps: ["Liste as funções e as licenças ou certificados de que cada uma precisa.", "Liste o equipamento, incluindo reservas e carregamento.", "Faça o calendário da campanha a partir do calendário agrícola; agrupe as explorações por zona.", "Liste os custos únicos e os custos correntes.", "Escolha como o serviço é pago e como continua depois de qualquer subsídio."],
          words: [["Custo único", "um custo pago uma só vez, como a compra de um drone."], ["Custo corrente", "um custo que se repete, como o transporte e o pessoal."], ["Contribuição", "uma pequena quantia cobrada aos membros, por exemplo por quilo entregue."]],
          slides: [
            { title: "Pessoas", bullets: ["Pilotos com licença e observadores", "Quem processa e analisa os dados", "Extensionistas e um coordenador", "Certificado de operador, se as suas regras o exigirem"] },
            { title: "Equipamento", bullets: ["Drones e um de reserva, baterias para um dia", "Carregamento solar ou pelo veículo", "Portátil, armazenamento, telefones, transporte"] },
            { title: "Calendário", bullets: ["Siga o calendário agrícola", "Voos por exploração em cada campanha", "Agrupe as explorações por zona"] },
            { title: "Dinheiro", bullets: ["Custos únicos e custos correntes", "Taxa por hectare por dinheiro móvel, contribuição, comprador, subsídio", "Planeie para depois do subsídio"] }
          ],
          sources: [KCAA_UAS, NCAA_P21, FAO_ITU_DRONES],
          tryIt: "Para o seu programa da Lição 4, escreva uma lista da equipa, uma lista do equipamento, um calendário da campanha (em que semanas voa e onde) e uma tabela simples de orçamento com os custos únicos e correntes e como cada um será pago.",
          youCanNow: "planear a equipa, o equipamento, o calendário e o orçamento de um programa de monitorização com drones.",
          quickCheck: [
            { objective: "O5", q: "Qual é um custo único num programa com drones?", options: ["O transporte de cada semana", "Os pacotes de dados de cada mês", "A compra dos drones e do portátil", "Os salários do pessoal"], answer: 2, why: "O equipamento, como os drones e o portátil, é um custo único; o transporte, os dados e os salários são custos correntes." },
            { objective: "O5", q: "Um voluntário oferece-se para voar para o programa, mas não tem licença de piloto remoto. O que faz?", options: ["Não o deixa voar até ter a licença que as regras exigem", "Deixa-o voar só em explorações pequenas", "Deixa-o voar se o coordenador estiver a ver", "Deixa-o voar aos fins de semana"], answer: 0, why: "Cada piloto precisa da licença que as regras do país exigem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir os resultados e comunicá-los",
          minutes: 5,
          goal: "Escolher medidas de sucesso e comunicar os resultados com honestidade aos agricultores e aos parceiros.",
          text: [
            "Um programa só vale a pena continuar se fizer diferença. Escolha algumas medidas ligadas ao seu objetivo: a rapidez com que os problemas foram encontrados, quantos agricultores receberam conselho a tempo, quantos agiram, a produção ou a qualidade em comparação com explorações ou campanhas sem o programa, e o custo por exploração.",
            "Recolha uma linha de base antes de começar (por exemplo as produções ou os tempos de deteção da campanha anterior), para poder comparar. Pergunte também aos agricultores: o conselho foi claro e útil, e pagariam por ele? As respostas deles contam tanto como os números.",
            "Comunique num formato que cada utilizador possa usar: uma mensagem curta para os agricultores, um resumo de uma página com um mapa para a direção, um relatório mais completo para os parceiros. Seja honesto sobre o que não funcionou. Depois melhore o desenho para a próxima campanha."
          ],
          steps: ["Escolha de três a cinco medidas ligadas ao objetivo.", "Registe uma linha de base antes de o programa começar.", "Recolha as medidas e a opinião dos agricultores durante a campanha.", "Comunique no formato certo para cada utilizador.", "Liste o que melhorar na próxima campanha."],
          words: [["Linha de base", "a situação antes de o programa começar, usada para comparar."], ["Medida de sucesso", "um número que mostra se o programa atingiu o seu objetivo."]],
          slides: [
            { title: "Meça o que importa", bullets: ["Rapidez da deteção", "Agricultores aconselhados a tempo, e quem agiu", "Produção ou qualidade face à linha de base", "Custo por exploração"] },
            { title: "Linha de base e opinião", bullets: ["Registe o ponto de partida", "Pergunte aos agricultores: foi útil? pagaria?"] },
            { title: "Comunique e melhore", bullets: ["Mensagens curtas para os agricultores", "Uma página e um mapa para a direção", "Seja honesto; melhore na próxima campanha"] }
          ],
          tryIt: "Tarefa final: escreva, em duas páginas, o desenho do seu programa para uma cooperativa de 200 pequenos agricultores: problema e objetivo, utilizadores, plano de dados com SIG e consentimento, equipa e equipamento, calendário da campanha, orçamento e modelo de pagamento, medidas de sucesso com linha de base, e comunicação dos resultados.",
          youCanNow: "medir, comunicar e melhorar um programa de monitorização com drones, e apresentar o desenho completo de um programa.",
          quickCheck: [
            { objective: "O6", q: "Qual é um exemplo de linha de base?", options: ["A meta da próxima campanha", "As produções ou os tempos de deteção da campanha anterior, registados antes de começar", "O preço do drone", "A data da reunião da direção"], answer: 1, why: "Uma linha de base é a situação antes do programa, para poder comparar os resultados." },
            { objective: "O6", q: "Os agricultores dizem que os mapas estavam certos mas o conselho era difícil de entender. O que faz?", options: ["Deixa isso fora do relatório", "Comunica só os mapas certos", "Para o programa", "Comunica isso com honestidade e muda a forma de dar conselhos na próxima campanha"], answer: 3, why: "Seja honesto sobre o que não funcionou e depois melhore o desenho para a próxima campanha." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Desenhar um programa de monitorização com drones",
        questions: [
          { objective: "O4", q: "Porque é que muitos projetos com drones falham?", options: ["Os drones são pequenos demais", "Começam pelo drone em vez de um problema real", "Os agricultores não gostam de mapas", "As baterias são grandes demais"], answer: 1, why: "Os programas funcionam quando resolvem um problema que importa aos utilizadores." },
          { objective: "O4", q: "Qual é o melhor objetivo de programa?", options: ["Voar muito com drones", "Usar tecnologia", "Encontrar focos de lagarta-do-cartucho em 200 explorações até uma semana depois dos primeiros estragos, até ao fim das chuvas longas de 2027", "Ser inovador"], answer: 2, why: "Tem um número, um prazo e um resultado claros." },
          { objective: "O5", q: "O seu programa vai voar para agricultores que pagam. O que tem de verificar?", options: ["Se a sua organização precisa de um certificado de operador e se os pilotos precisam de licença", "Só a cor do drone", "Só o tempo que faz", "Nada; os agricultores concordaram"], answer: 0, why: "Voar com fins comerciais costuma exigir um certificado de operador e pilotos com licença." },
          { objective: "O5", q: "Qual é um custo corrente?", options: ["Comprar o primeiro drone", "Comprar um portátil", "A formação inicial", "O transporte para as explorações todas as semanas"], answer: 3, why: "Os custos correntes repetem-se ao longo do programa." },
          { objective: "O6", q: "Porque recolher uma linha de base?", options: ["Para preencher um formulário", "Para comparar os resultados com a situação antes do programa", "Para apagar dados antigos", "Para escolher um drone"], answer: 1, why: "Sem um ponto de partida, não consegue mostrar a mudança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones para a Monitorização Agrícola 5: Integração de Dados, SIG e Desenho de Programas",
    questions: [
      { objective: "O1", q: "Sem um sistema de dados, um grande programa com drones corre o risco de:", options: ["Ficheiros perdidos, misturados ou apagados por cima", "Mapas melhores", "Voos mais rápidos", "Drones mais baratos"], answer: 0, why: "Milhares de ficheiros precisam de um sistema claro." },
      { objective: "O1", q: "Um registo de voos anota:", options: ["Os preços das culturas", "Data, exploração, campo, piloto, drone, ficheiros e estado", "Só o tempo que fazia", "Os dados bancários dos agricultores"], answer: 1, why: "Acompanha cada voo e os seus dados." },
      { objective: "O1", q: "Qual é uma boa regra para as pastas?", options: ["Nomes ao acaso", "O nome completo e o telefone do agricultor", "Programa / ID da exploração / ID do campo / Data", "Tudo numa só pasta"], answer: 2, why: "Uma estrutura coerente, baseada em IDs, mantém os dados arrumados e privados." },
      { objective: "O1", q: "Na regra 3-2-1, o 1 quer dizer:", options: ["Um drone", "Um agricultor", "Um dia", "Uma cópia noutro lugar"], answer: 3, why: "Uma cópia fora do local resiste a roubo, incêndio ou avaria no escritório." },
      { objective: "O2", q: "Num SIG, as camadas de base de um programa costumam incluir:", options: ["Limites dos campos e pontos das explorações", "Ficheiros de música", "Só fotos da equipa", "Faturas"], answer: 0, why: "Tudo o resto é colocado por cima dos campos e das explorações." },
      { objective: "O2", q: "As imagens Sentinel-2 têm cerca de quantos metros por píxel?", options: ["0.01", "10", "1,000", "100,000"], answer: 1, why: "As imagens gratuitas Sentinel-2 têm cerca de 10 m por píxel." },
      { objective: "O2", q: "Para juntar uma folha de cálculo a uma camada de campos é preciso:", options: ["A mesma cor", "Um drone", "Um ID comum, como o ID do campo", "Uma impressora"], answer: 2, why: "O ID liga cada linha ao seu campo." },
      { objective: "O2", q: "Que pergunta um projeto SIG com dados juntos pode ajudar a responder?", options: ["Qual é a palavra-passe do agricultor?", "De que cor é o drone?", "Quem ganhou o jogo de futebol?", "Os campos que receberam conselho do drone produziram mais?"], answer: 3, why: "Ligar os registos aos campos permite fazer essas comparações." },
      { objective: "O3", q: "A lei de proteção de dados da Nigéria é supervisionada por:", options: ["A Comissão de Proteção de Dados da Nigéria (NDPC)", "A NCAA", "O fabricante do drone", "Uma cooperativa"], answer: 0, why: "A NDPC foi criada pela Lei de Proteção de Dados de 2023 da Nigéria." },
      { objective: "O3", q: "Um consentimento válido quer dizer que o agricultor:", options: ["Não foi informado de nada", "Percebe o que recolhe, porquê, quem vê, e pode dizer não", "Assinou sem ler", "Deu o seu PIN"], answer: 1, why: "O consentimento tem de ser informado e dado livremente." },
      { objective: "O3", q: "Um comprador pede uma lista com os nomes e as produções dos agricultores. Deve:", options: ["Enviá-la logo", "Publicá-la para todos", "Partilhar só com autorização dos agricultores", "Vendê-la"], answer: 2, why: "Os dados pessoais não se partilham sem autorização." },
      { objective: "O3", q: "Recolher só o que precisa chama-se:", options: ["Acumulação de dados", "Cópia de segurança", "Sobreposição", "Minimização dos dados"], answer: 3, why: "Menos dados quer dizer menos risco, e é um princípio da proteção de dados." },
      { objective: "O4", q: "Um programa deve partir de:", options: ["Um problema que importa aos utilizadores e sobre o qual podem agir", "O drone mais novo", "Um logótipo", "Um comunicado de imprensa"], answer: 0, why: "Os programas que partem do problema dão resultados que valem." },
      { objective: "O4", q: "De que precisam mais os agricultores no programa?", options: ["Ficheiros de fotos brutas", "Um mapa e um conselho simples no telefone", "Programas de SIG", "A licença do piloto"], answer: 1, why: "Informação simples e prática ajuda os agricultores a agir." },
      { objective: "O5", q: "Onde a eletricidade falha, planeie:", options: ["Nenhuma bateria", "Voar só à noite", "Carregamento solar ou pelo veículo", "Um voo por ano"], answer: 2, why: "As opções de carregamento mantêm a equipa a voar o dia inteiro." },
      { objective: "O5", q: "Agrupar as explorações por zona no calendário ajuda a:", options: ["Gastar mais combustível", "Deixar os mapas desfocados", "Evitar as licenças", "Cobrir muitas explorações num só dia"], answer: 3, why: "Menos viagens quer dizer mais explorações por dia e menos custo." },
      { objective: "O5", q: "Uma forma de pagar um serviço de drones de uma cooperativa é:", options: ["Uma pequena taxa por hectare paga por dinheiro móvel", "Grátis para sempre, sem plano", "Vender os dados dos agricultores", "Não fazer reparações"], answer: 0, why: "Taxas, contribuições, compradores ou subsídios podem pagar o serviço de forma honesta." },
      { objective: "O5", q: "Porque planear para depois do fim de um subsídio?", options: ["Os subsídios nunca acabam", "Para o serviço continuar quando o subsídio parar", "Para gastar mais depressa", "Não é preciso"], answer: 1, why: "Os programas que dependem só de subsídios muitas vezes param." },
      { objective: "O6", q: "Qual é uma medida de sucesso?", options: ["O número de fotos tiradas pelo drone", "A cor do drone", "Agricultores aconselhados até três dias depois da deteção", "O tamanho do escritório"], answer: 2, why: "Mede o resultado que importa aos utilizadores." },
      { objective: "O6", q: "Quando comunica os resultados, deve:", options: ["Esconder o que não funcionou", "Enviar a todos o mesmo relatório de 50 páginas", "Comunicar só ao doador", "Ser honesto e usar um formato que cada utilizador possa usar"], answer: 3, why: "Relatórios honestos e adaptados a cada utilizador criam confiança e melhoria." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do desenho e verifique outra vez.",
    criteria: [
      {
        name: "Problema, objetivo e utilizadores",
        objective: "O4",
        notYet: "Começa pelo drone, ou o objetivo não tem número nem data.",
        meets: "Um problema real, um objetivo com um número e uma data, e cada utilizador com o que recebe.",
        exceeds: "Mostra que os utilizadores concordaram com o problema, por exemplo numa reunião com agricultores."
      },
      {
        name: "Plano de dados",
        objective: "O1",
        notYet: "Não há plano de armazenamento, de nomes nem de cópias de segurança.",
        meets: "Estrutura de pastas, IDs de exploração, um registo de voos e cópias de segurança 3-2-1.",
        exceeds: "Diz quanto tempo as fotos brutas são guardadas e quem verifica as cópias de segurança."
      },
      {
        name: "Uso de SIG e de satélite",
        objective: "O2",
        notYet: "Não há camadas SIG nem uso de satélite.",
        meets: "Camadas SIG listadas, registos ligados pelo ID do campo, e satélites usados para escolher onde voar.",
        exceeds: "Diz uma pergunta a que os dados juntos vão responder, como a produção com e sem conselho."
      },
      {
        name: "Consentimento e proteção de dados",
        objective: "O3",
        notYet: "Não há consentimento nem passos de proteção de dados.",
        meets: "Consentimento na língua do agricultor, minimização dos dados, armazenamento seguro e nada partilhado sem autorização, de acordo com a lei certa.",
        exceeds: "Verifica se a organização tem de se registar junto da autoridade de proteção de dados."
      },
      {
        name: "Equipa, calendário e orçamento",
        objective: "O5",
        notYet: "Faltam as licenças, o calendário ou a forma de pagamento.",
        meets: "Equipa com licença, equipamento, um calendário de voos da campanha, custos únicos e correntes, e como o serviço é pago.",
        exceeds: "Mostra um plano para depois do fim de qualquer subsídio."
      },
      {
        name: "Medidas e comunicação",
        objective: "O6",
        notYet: "Não há medidas nem linha de base.",
        meets: "Algumas medidas ligadas ao objetivo, uma linha de base e um formato de relatório para cada utilizador.",
        exceeds: "Inclui a opinião dos agricultores sobre se o conselho foi útil e se vale a pena pagar por ele."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do desenho do programa",
      "Alunos que apresentam o desenho do seu programa à direção de uma cooperativa, a um serviço de condado ou de estado, a um doador ou a um investidor em 90 dias (inquérito de seguimento)",
      "Programas desenhados no curso que começam uma campanha-piloto com consentimento escrito dos agricultores",
      "Alunos que seguem para o Curso 6 da série de drones"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um portátil com o QGIS gratuito e uma folha de cálculo",
      "Mapas de drone, limites de campos e registos de explorações de exemplo, ou os do próprio aluno",
      "Orçamentos locais para drones, transporte, dados e seguro, se houver",
      "Cerca de 60 minutos no total, em sessões curtas, mais o tempo para escrever o desenho de duas páginas"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois trabalhem em grupo uma cooperativa de exemplo antes de os alunos escreverem o seu próprio desenho.",
      "Use IDs de exploração, e não nomes ou números verdadeiros de agricultores, em todos os exemplos da aula.",
      "Peça aos alunos que vejam no site da autoridade de proteção de dados do seu próprio país as regras de registo.",
      "Incentive os alunos a testar o objetivo e o orçamento com uma cooperativa ou um parceiro real antes de terminarem.",
      "Avalie o desenho do programa com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
