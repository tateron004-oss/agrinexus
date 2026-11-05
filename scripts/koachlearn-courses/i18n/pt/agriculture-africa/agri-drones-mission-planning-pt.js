"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-drones-mission-planning.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KCAA_UAS = { name: "Autoridade de Aviação Civil do Quénia (KCAA): Sistemas de Aeronaves Não Tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Sistema online de drones (RPAS) da KCAA", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autoridade de Aviação Civil da Nigéria (NCAA): Nig.CARs 2023 Parte 21, Sistemas de Aeronaves Pilotadas Remotamente", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KMD = { name: "Departamento Meteorológico do Quénia (KMD)", url: "https://meteo.go.ke" };
const NIMET = { name: "Agência Meteorológica da Nigéria (NiMet)", url: "https://nimet.gov.ng" };

module.exports = {
  id: "agri-drones-mission-planning-pt",
  lang: "pt",
  translationOf: "agri-drones-mission-planning",
  category: "Agriculture (Africa)",
  name: "Drones Agrícolas: Planeamento de Missões e Operações de Voo",
  skills: "Transformar o pedido de um cliente no âmbito de uma missão, Fazer o levantamento de um local e verificar o espaço aéreo e as autorizações, Escrever uma avaliação de riscos, Fazer um plano de voo com planos de contingência, Dirigir o briefing da equipa e voar a missão, Fazer as verificações depois do voo e comunicar incidentes",
  outcome: "planear e realizar uma missão profissional com drone agrícola, desde o pedido do cliente até à entrega dos dados, com um dossiê de missão completo: âmbito, levantamento do local, verificação do espaço aéreo e das autorizações, avaliação de riscos, plano de voo, briefing da equipa, planos de contingência e registos depois do voo.",
  about: [
    "Este curso é para pilotos remotos, empresas de serviços com drones, equipas de drones de plantações e agronegócios, e programas de extensão no Quénia, na Nigéria e em toda a África que voam missões com drone para outras pessoas. Parte do princípio de que você já sabe o básico de voar e fazer mapas e conhece as regras de drones do seu país (veja a série de monitorização e o curso sobre regulamentos).",
    "O Capítulo 1 é o planeamento: combinar o que o cliente precisa de verdade, fazer o levantamento do local, verificar o espaço aéreo e as autorizações, avaliar os riscos e fazer um plano de voo com a altura, a sobreposição, as baterias e os horários calculados. O Capítulo 2 são as operações: as funções da equipa e o briefing, voar e acompanhar a missão, lidar com o que corre mal e fechar o trabalho com a verificação dos dados, os registos e os relatórios de incidentes.",
    "Os exemplos são tipos de trabalho reais: mapear 40 hectares de abacate para um exportador em Murang'a, contar plantas em 25 machambas de mandioca de produtores contratados no Estado de Oyo, inspecionar a rega numa exploração de horticultura perto de Naivasha. Nunca voe uma missão sem o registo, as licenças, o certificado de operador e as autorizações que o seu país exige. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Faça um dossiê de missão completo para um trabalho com drone agrícola (real ou de exemplo, como mapear 40 hectares de abacate para um exportador): o âmbito da missão combinado com o cliente, um levantamento do local com os perigos e um mapa desenhado à mão, a verificação do espaço aéreo e das autorizações com as fontes, uma tabela de avaliação de riscos, o plano de voo (área, altura, detalhe da imagem, sobreposição, velocidade, baterias, horários, limites de tempo meteorológico), as funções da equipa e as notas do briefing, os planos de contingência e a lista de verificação e o registo depois do voo que vai preencher.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pilotos remotos, empresas de serviços com drones, equipas de drones de plantações e agronegócios, e programas de extensão no Quénia, na Nigéria e em toda a África que voam missões com drones agrícolas para clientes.",
    startingPoint: "Os alunos já sabem voar um drone, fazer um voo simples de mapeamento e conhecem as regras de drones do seu país. Poucos transformam o pedido de um cliente num âmbito escrito, escrevem uma avaliação de riscos e planos de contingência, fazem o briefing de uma equipa ou fecham um trabalho com a verificação dos dados, os registos e os relatórios de incidentes.",
    gap: "Missões sem um âmbito claro levam a conflitos, e missões sem levantamento, avaliação de riscos e briefing levam a acidentes, dados recusados e clientes perdidos. Um dossiê de missão completo permite a uma equipa de drones entregar o que o cliente precisa com segurança, dentro da lei e a tempo, e mostra aos clientes e às autoridades que a empresa é profissional.",
    constraints: [
      "Nível de leitura: palavras simples; os termos de drones e de segurança são explicados",
      "Aparelhos: um telefone ou um portátil com uma aplicação de mapas; um drone e uma aplicação de planeamento ajudam, mas não são obrigatórios",
      "Regras: cada missão precisa do registo, das licenças, do certificado de operador e das autorizações que o país exige",
      "Condições no campo: calor, vento, chuva, rede fraca e curiosos nas explorações agrícolas africanas",
      "Tempo: lições curtas, mais tempo para fazer o dossiê de missão"
    ],
    prerequisites: "\"Drones Agrícolas em África: Regulamentos de Aviação e Licenças\" e a série \"Drones para a Monitorização Agrícola\", ou experiência de voo equivalente."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o pedido de um cliente para um trabalho com drone", action: "escrever o âmbito de uma missão com a decisão, a área, as entregas, as datas, o contacto, o preço e a partilha dos dados", standard: "incluindo o que o drone não pode fazer" },
    { id: "O2", condition: "Para o local de uma missão", action: "fazer um levantamento no escritório e no terreno e confirmar os limites do espaço aéreo e todas as autorizações", standard: "registados com datas e fontes antes do voo" },
    { id: "O3", condition: "Para uma missão planeada", action: "escrever uma avaliação de riscos, um plano de voo e planos de contingência", standard: "com uma medida de controlo para cada perigo e os limites de tempo meteorológico definidos" },
    { id: "O4", condition: "Antes do primeiro voo de uma missão", action: "atribuir as funções da equipa e dirigir um briefing", standard: "que cubra os perigos, os limites, os planos de contingência, as ordens padrão e quem pode mandar parar" },
    { id: "O5", condition: "Durante uma missão", action: "acompanhar o voo e a telemetria e tomar decisões de avançar ou não avançar", standard: "fazendo uma pausa ou aterrando sempre que um limite é ultrapassado" },
    { id: "O6", condition: "No fim de uma missão", action: "verificar os dados, preencher os registos e comunicar qualquer incidente", standard: "antes de sair do local, com as falhas voadas outra vez e uma cópia de segurança dos dados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear a missão",
      lessons: [
        {
          objectives: ["O1"],
          title: "Do pedido do cliente ao âmbito da missão",
          minutes: 5,
          goal: "Transformar o pedido de um cliente num âmbito de missão claro e escrito.",
          text: [
            "Muitas vezes os clientes pedem \"um voo de drone\" quando precisam de uma resposta: Que talhões têm poucas plantas? Onde está a rega a perder água? Quantas árvores temos? Comece por perguntar que decisão querem tomar e o que vão fazer com os resultados.",
            "Depois combine o âmbito por escrito: a área (com um mapa ou um ficheiro dos limites), a pergunta e as entregas (por exemplo um ortomosaico, um mapa NDVI, uma contagem de árvores, um relatório de uma página), o nível de detalhe necessário, o período de datas, as condições de acesso, quem é o contacto na exploração, o preço e a forma de pagamento (como dinheiro móvel na entrega) e como os dados vão ser partilhados e guardados.",
            "Diga claramente o que o drone não pode fazer. Um mapa pode mostrar onde as árvores estão em stress; sozinho, não pode dizer que doença é. Um âmbito claro protege você e o cliente de desilusões e conflitos."
          ],
          steps: ["Pergunte que decisão o cliente quer tomar.", "Combine a área e peça os limites ou um desenho.", "Combine as entregas, o detalhe, as datas e os contactos.", "Combine o preço, o pagamento e a partilha dos dados.", "Diga os limites do que o drone pode mostrar.", "Ponha tudo por escrito e confirmem os dois."],
          words: [["Âmbito da missão", "o acordo escrito sobre o que um trabalho com drone vai cobrir e entregar."], ["Entrega", "um produto que o cliente recebe, como um mapa ou um relatório."]],
          slides: [
            { title: "Encontre a pergunta verdadeira", bullets: ["Que decisão o cliente vai tomar?", "O que vai fazer com os resultados?"] },
            { title: "Combine por escrito", bullets: ["Área e limites", "Entregas e detalhe", "Datas, acesso, contacto na exploração", "Preço, pagamento, partilha dos dados"] },
            { title: "Diga os limites", bullets: ["Os mapas mostram onde, nem sempre porquê", "Um âmbito claro evita conflitos"] }
          ],
          tryIt: "Um exportador de abacate diz: \"Voe os nossos 40 hectares na próxima semana.\" Escreva cinco perguntas que faria e depois escreva um âmbito de missão de um parágrafo com a área, as entregas, as datas, o contacto, um espaço para o preço e os limites.",
          youCanNow: "transformar um pedido vago de um cliente num âmbito de missão claro e escrito.",
          quickCheck: [
            { objective: "O1", q: "O que é uma entrega no âmbito de uma missão?", options: ["A bateria do drone", "O número de telefone do cliente", "A altura do voo", "O que o cliente recebe, como um mapa ou um relatório"], answer: 3, why: "As entregas são o que você entrega, como um ortomosaico, um mapa NDVI, uma contagem de árvores ou um relatório." },
            { objective: "O1", q: "Um cliente quer que o seu mapa NDVI diga o nome da doença dos abacateiros. O que escreve no âmbito?", options: ["Que o mapa vai dizer o nome de todas as doenças", "Que o mapa mostra as árvores em stress, mas a doença tem de ser identificada no terreno", "Nada sobre isso", "Que também vai pulverizar as árvores"], answer: 1, why: "Um mapa pode mostrar onde as árvores estão em stress, mas sozinho não pode dizer que doença é." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Levantamento do local, espaço aéreo e autorizações",
          minutes: 6,
          goal: "Fazer o levantamento de um local e confirmar os limites do espaço aéreo e todas as autorizações antes do voo.",
          text: [
            "Faça primeiro um levantamento no escritório: veja a área numa aplicação de mapas e na vista de satélite, à procura de pistas de aterragem, aeroportos, estradas, vilas, linhas elétricas, antenas, rios, áreas protegidas e zonas de segurança. Depois verifique as regras e os mapas da sua autoridade sobre áreas restritas e distâncias aos aeródromos, e se o trabalho precisa de uma autorização de operação específica. Dê tempo para que a aprovação chegue.",
            "Depois faça o levantamento no terreno, se puder, ou peça fotos ao contacto da exploração: locais de descolagem e aterragem, obstáculos e as suas alturas, pessoas e animais, casas, estradas de acesso, cobertura da rede móvel e onde a equipa se pode abrigar do sol e da chuva.",
            "Confirme as autorizações: o dono ou o gestor da terra por escrito, os vizinhos se vai passar por cima das terras deles, os líderes comunitários onde isso é costume, e a autoridade de aviação como for exigido. Registe tudo no dossiê de missão com datas e fontes."
          ],
          steps: ["Levantamento no escritório: mapa e vista de satélite da área.", "Verifique as regras da aviação: áreas restritas, distâncias aos aeródromos, autorizações.", "Levantamento no terreno ou fotos: locais de descolagem, obstáculos, pessoas, rede.", "Obtenha por escrito a autorização do dono da terra e dos vizinhos.", "Registe todas as verificações com datas e fontes."],
          words: [["Levantamento no escritório", "verificar um local com mapas e documentos antes de ir lá."], ["Área restrita", "espaço aéreo onde voar é limitado ou precisa de uma autorização especial."], ["Autorização de operação", "permissão da autoridade de aviação para um tipo específico de operação."]],
          slides: [
            { title: "Levantamento no escritório", bullets: ["Mapa e vista de satélite", "Pistas, estradas, vilas, linhas elétricas, antenas", "Áreas protegidas e de segurança"] },
            { title: "Espaço aéreo e aprovações", bullets: ["Áreas restritas e distâncias aos aeródromos", "Precisa de uma autorização de operação específica?", "Dê tempo para a aprovação"] },
            { title: "Levantamento no terreno", bullets: ["Locais de descolagem, obstáculos, alturas", "Pessoas, animais, casas, rede", "Abrigo para a equipa"] },
            { title: "Autorizações por escrito", bullets: ["Dono ou gestor da terra", "Vizinhos, líderes comunitários", "Autoridade de aviação, como for exigido"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Para uma exploração que consiga encontrar numa aplicação de mapas, faça um levantamento no escritório: liste todas as pistas de aterragem, estradas, linhas elétricas, povoações e áreas protegidas a poucos quilómetros, e escreva que regras da aviação tem de verificar e que autorizações precisa.",
          youCanNow: "fazer o levantamento de um local, verificar os limites do espaço aéreo e obter todas as autorizações antes de uma missão.",
          quickCheck: [
            { objective: "O2", q: "O que é um levantamento no escritório?", options: ["Uma reunião na secretária do cliente", "Fazer um voo de teste", "Ver mapas e vistas de satélite à procura de perigos e áreas restritas antes de ir ao local", "Contar a equipa"], answer: 2, why: "Um levantamento no escritório verifica os mapas, as vistas de satélite e as regras da autoridade antes da visita ao local." },
            { objective: "O2", q: "As suas linhas de voo vão passar por cima das terras de um vizinho. O que faz antes do voo?", options: ["Obtém a autorização do vizinho e regista-a no dossiê de missão", "Voa alto para ele não reparar", "Voa só de manhã cedo", "Pede ao cliente para lhe dizer depois"], answer: 0, why: "As autorizações dos donos da terra e dos vizinhos são confirmadas e registadas antes do voo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Avaliação de riscos e plano de voo",
          minutes: 6,
          goal: "Escrever uma avaliação de riscos e um plano de voo completo com planos de contingência.",
          text: [
            "Uma avaliação de riscos lista o que pode correr mal, qual a probabilidade e a gravidade, e o que vai fazer para reduzir o risco. Por exemplo: perigo, uma linha elétrica ao longo do limite norte; risco, colisão; medida de controlo, planear as linhas a 30 m de distância e pôr o regresso à base acima dela. Outros perigos comuns: pessoas que entram na área, gado, aves de rapina, ventos fortes à tarde, calor, perda de ligação atrás de montes e uma pista de aterragem perto.",
            "O plano de voo define: a área dividida em voos que cabem numa bateria cada; a altura e o detalhe da imagem que ela dá (dentro do limite legal de altura); a sobreposição; a velocidade; o número de baterias, com baterias de reserva; os pontos de descolagem e aterragem; o horário (por exemplo das 10:00 às 14:00 para uma luz uniforme); e os limites de tempo meteorológico (vento máximo, sem chuva, visibilidade). Veja a previsão do serviço meteorológico nacional na véspera e na manhã do trabalho.",
            "Os planos de contingência dizem o que vai fazer se as coisas mudarem: vento acima do limite, faz uma pausa; chuva, arruma tudo e volta na data de reserva; uma pessoa entra na área, para no ar ou aterra; perda de ligação, o regresso à base está definido; avaria de uma bateria, aterra no ponto de aterragem alternativo."
          ],
          steps: ["Liste os perigos; avalie a probabilidade e a gravidade; escreva uma medida de controlo para cada um.", "Divida a área em voos de uma bateria.", "Defina a altura, o detalhe, a sobreposição, a velocidade e as baterias com reservas.", "Defina o horário e os limites de tempo meteorológico; veja a previsão.", "Escreva os planos de contingência e os pontos de aterragem alternativos."],
          words: [["Avaliação de riscos", "uma verificação escrita do que pode correr mal e de como vai reduzir o risco."], ["Medida de controlo", "uma ação que reduz um risco."], ["Plano de contingência", "uma ação planeada antes, para o caso de alguma coisa mudar ou correr mal."]],
          slides: [
            { title: "Avaliação de riscos", bullets: ["Perigo, probabilidade, gravidade, controlo", "Linhas elétricas, pessoas, gado, aves", "Vento, calor, perda de ligação, pistas"] },
            { title: "O plano de voo", bullets: ["Voos de uma bateria, reservas", "Altura, detalhe, sobreposição, velocidade", "Descolagem, aterragem, horário"] },
            { title: "Tempo meteorológico", bullets: ["Defina limites: vento, chuva, visibilidade", "Veja a previsão nacional na véspera e na manhã do trabalho"] },
            { title: "Planos de contingência", bullets: ["Vento: pausa. Chuva: data de reserva", "Pessoa entra: parar no ar ou aterrar", "Perda de ligação: RTH definido. Avaria: aterragem alternativa"] }
          ],
          sources: [KMD, NIMET, NCAA_P21],
          tryIt: "Escreva uma tabela de avaliação de riscos com pelo menos seis perigos para o trabalho dos 40 hectares de abacate e depois escreva o plano de voo e cinco planos de contingência.",
          youCanNow: "escrever uma avaliação de riscos e um plano de voo completo com planos de contingência.",
          quickCheck: [
            { objective: "O3", q: "Numa avaliação de riscos, o que é um perigo?", options: ["Uma coisa que pode causar dano, como uma linha elétrica", "O pagamento do cliente", "A entrega do voo", "A cor do drone"], answer: 0, why: "Um perigo é o que pode correr mal; a avaliação de riscos junta a probabilidade, a gravidade e uma medida de controlo." },
            { objective: "O3", q: "O seu plano define um vento máximo. A previsão da manhã mostra vento acima dele o dia todo. O que faz?", options: ["Voa mesmo assim e espera pelo melhor", "Tira o limite de vento do plano", "Voa só do outro lado da exploração", "Usa a data de reserva do plano de contingência"], answer: 3, why: "Os planos de contingência dizem o que fazer quando as condições passam um limite, como voltar na data de reserva." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear a missão",
        questions: [
          { objective: "O1", q: "Um cliente pede \"um voo de drone\". A sua primeira pergunta deve ser:", options: ["De que cor quer o drone?", "Que decisão quer tomar com os resultados?", "Posso voar hoje?", "Tem um drone?"], answer: 1, why: "A decisão define que dados e que entregas são necessários." },
          { objective: "O1", q: "O que faz parte do âmbito escrito de uma missão?", options: ["A música preferida do piloto", "Só o preço", "Nada; combina-se por telefone", "Área, entregas, datas, contacto, preço e partilha dos dados"], answer: 3, why: "Um âmbito escrito e claro evita conflitos." },
          { objective: "O2", q: "No levantamento no escritório, encontra uma pista de aterragem a 3 km. Você deve:", options: ["Verificar as regras de distância aos aeródromos e as autorizações necessárias", "Ignorá-la", "Voar só de manhã", "Voar mais alto"], answer: 0, why: "Muitas regras limitam os drones perto dos aeródromos." },
          { objective: "O3", q: "Numa avaliação de riscos, uma medida de controlo é:", options: ["O comando remoto", "Uma ação que reduz um risco", "Uma queixa do cliente", "Uma bateria"], answer: 1, why: "As medidas de controlo baixam a probabilidade ou a gravidade." },
          { objective: "O3", q: "A previsão mostra ventos fortes à tarde. Um plano sensato é:", options: ["Voar à tarde mesmo assim", "Cancelar o trabalho para sempre", "Pôr o horário nas horas mais calmas e ter uma data de reserva", "Tirar as hélices"], answer: 2, why: "Planeie à volta dos limites de tempo meteorológico, com uma data de reserva." }
        ]
      }
    },
    {
      name: "Capítulo 2: Voar a missão",
      lessons: [
        {
          objectives: ["O4"],
          title: "Funções da equipa e o briefing",
          minutes: 5,
          goal: "Atribuir as funções da equipa e dirigir um briefing claro antes da missão.",
          text: [
            "Até as missões pequenas correm melhor com funções claras. O piloto remoto em comando é responsável pela segurança do voo e tem a última palavra. O observador vigia o drone e o céu e avisa quando há aeronaves, aves, pessoas e animais. Um operador de terra ou de carga pode tratar das baterias, da câmara, da área de aterragem e do cliente.",
            "Antes do primeiro voo, o piloto em comando faz o briefing a todos, incluindo o contacto da exploração: a área e as linhas de voo, a altura, o tempo de cada bateria, os pontos de descolagem e aterragem, os perigos e as medidas de controlo da avaliação de riscos, os limites de tempo meteorológico, os planos de contingência, as palavras que vão usar (por exemplo \"parar\", \"aterrar já\") e quem pode mandar parar. Qualquer pessoa pode mandar parar por segurança.",
            "Confirme que cada membro da equipa tem água, proteção contra o sol e equipamento de segurança, como coletes refletores, e que a área de descolagem está marcada e livre de curiosos."
          ],
          steps: ["Atribua o piloto em comando, o observador e o operador de terra ou de carga.", "Briefing: área, altura, baterias, descolagem e aterragem, perigos, limites de tempo meteorológico.", "Combine os planos de contingência e as ordens padrão (parar, aterrar já).", "Confirme que qualquer pessoa pode mandar parar.", "Marque a área de descolagem; verifique água, proteção contra o sol e coletes."],
          words: [["Piloto em comando", "o piloto remoto responsável pela segurança do voo, que tem a última palavra."], ["Ordens padrão", "palavras curtas e combinadas que a equipa usa para que todos entendam logo."]],
          slides: [
            { title: "Funções da equipa", bullets: ["Piloto em comando: última palavra sobre a segurança", "Observador: drone, céu, pessoas, animais", "Operador de terra ou de carga: baterias, câmara, cliente"] },
            { title: "O briefing", bullets: ["Área, altura, baterias, descolagem, aterragem", "Perigos, limites de tempo, planos de contingência", "Ordens padrão: parar, aterrar já"] },
            { title: "Cuide da equipa", bullets: ["Qualquer pessoa pode mandar parar", "Água, proteção contra o sol, coletes", "Área de descolagem marcada, sem curiosos"] }
          ],
          tryIt: "Escreva um guião de briefing de uma página para a missão do abacate, que um piloto em comando consiga ler em voz alta em três minutos, com todos os pontos desta lição.",
          youCanNow: "atribuir as funções da equipa e dirigir um briefing claro antes da missão.",
          quickCheck: [
            { objective: "O4", q: "O que faz o observador?", options: ["Paga à equipa", "Vigia o drone, o céu e o chão e avisa o piloto", "Escreve o relatório do cliente", "Cobra ao cliente"], answer: 1, why: "O observador vigia as aeronaves, as aves, as pessoas e os animais e avisa o piloto." },
            { objective: "O4", q: "O contacto da exploração vai ficar perto da área de descolagem. O que faz no briefing?", options: ["Deixa-o fora do briefing", "Diz-lhe para ficar calado", "Inclui-o, explica os perigos e as ordens padrão e diz-lhe que qualquer pessoa pode mandar parar", "Pede-lhe para voar o drone"], answer: 2, why: "O briefing inclui todas as pessoas no local, incluindo o contacto da exploração, e qualquer pessoa pode mandar parar por segurança." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Realizar e acompanhar a missão",
          minutes: 5,
          goal: "Voar uma missão planeada, acompanhá-la e tomar decisões de avançar ou não avançar.",
          text: [
            "Antes de cada voo, siga a lista de verificação antes do voo e confirme que as condições estão dentro dos limites. Carregue ou verifique a rota planeada, confirme o ponto de partida e a altura de regresso à base, e confirme que o observador está no lugar.",
            "Durante o voo, o piloto vigia o drone e a telemetria (bateria, sinal, satélites, avisos de vento, altura, avanço ao longo das linhas). O observador vigia o céu e o chão. Esteja pronto para pegar no controlo manual a qualquer momento. Troque as baterias entre os voos seguindo o seu procedimento de baterias e marque que linhas estão feitas.",
            "Tome decisões de avançar ou não avançar durante todo o dia. Se o vento subir acima do seu limite, uma pessoa entrar na área, uma tempestade se formar ou um aviso se repetir, faça uma pausa ou aterre. Acabar amanhã é melhor do que um acidente hoje. Mantenha o cliente informado do avanço e de qualquer mudança."
          ],
          steps: ["Lista de verificação antes do voo; condições dentro dos limites?", "Verifique a rota, o ponto de partida e a altura de regresso à base.", "Voe; o piloto vigia o drone e a telemetria, o observador vigia o céu e o chão.", "Troque as baterias com segurança; marque as linhas feitas.", "Faça uma pausa ou aterre se os limites forem ultrapassados; avise o cliente."],
          words: [["Telemetria", "dados ao vivo que o drone envia para o comando: bateria, altura, posição, sinal, avisos."], ["Avançar / não avançar", "a decisão sobre se é seguro voar ou continuar."]],
          slides: [
            { title: "Antes de cada voo", bullets: ["Lista de verificação e limites", "Rota, ponto de partida, altura de RTH", "Observador no lugar"] },
            { title: "Durante o voo", bullets: ["Piloto: drone e telemetria", "Observador: céu e chão", "Pronto para o controlo manual"] },
            { title: "Avançar ou não, todo o dia", bullets: ["Vento, pessoas, tempestades, avisos repetidos", "Pausa ou aterragem", "Amanhã é melhor do que um acidente"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Escreva um cartão de avançar / não avançar para a sua missão: cinco condições que querem dizer avançar e cinco que querem dizer parar ou aterrar, com palavras curtas que uma equipa consiga ler no campo.",
          youCanNow: "voar e acompanhar uma missão planeada e tomar boas decisões de avançar ou não avançar.",
          quickCheck: [
            { objective: "O5", q: "O que é a telemetria?", options: ["O contrato do cliente", "A previsão do tempo", "Dados do voo ao vivo, como a bateria, a altura, o sinal e os avisos", "A escala da equipa"], answer: 2, why: "A telemetria são os dados ao vivo que o piloto vigia durante o voo." },
            { objective: "O5", q: "Está a formar-se uma tempestade e metade das linhas está feita. O que faz?", options: ["Aterra e acaba o resto mais tarde", "Voa mais depressa para acabar", "Desliga os avisos", "Deixa o observador voar enquanto você arruma"], answer: 0, why: "Acabar amanhã é melhor do que um acidente hoje; faça uma pausa ou aterre quando as condições ficam perigosas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fechar a missão: verificação dos dados, registos e incidentes",
          minutes: 5,
          goal: "Verificar os dados, preencher os registos e tratar dos relatórios de incidentes antes de sair do local.",
          text: [
            "Antes de sair do local, verifique os dados: conte as imagens de cada voo, veja uma amostra para ver se estão desfocadas ou com má exposição, procure falhas na cobertura e, se puder, faça uma junção rápida em baixa resolução num portátil. Volte a voar as falhas enquanto a equipa e as condições estão lá. Faça uma cópia de segurança dos dados num segundo aparelho.",
            "Preencha os registos: os registos de voo de cada voo (hora, bateria, piloto, problemas), as notas das baterias e da manutenção, e as condições reais no dossiê de missão. Agradeça ao contacto da exploração e confirme quando vai receber as entregas.",
            "Se alguma coisa correu mal (uma queda, um quase acidente com uma aeronave, um ferimento, danos a bens, um drone que fugiu ao controlo), primeiro ponha a área em segurança, depois registe o que aconteceu e comunique-o à sua autoridade de aviação como as regras dela exigem, e à sua seguradora. Analise o incidente com a equipa e atualize os seus procedimentos para que não volte a acontecer."
          ],
          steps: ["Conte as imagens, veja uma amostra para ver se estão desfocadas, procure falhas na cobertura.", "Volte a voar as falhas; faça uma cópia dos dados num segundo aparelho.", "Preencha os registos de voo, das baterias e da manutenção.", "Confirme a data de entrega com o cliente.", "Em qualquer incidente: pôr em segurança, registar, comunicar como exigido, analisar e atualizar os procedimentos."],
          words: [["Quase acidente", "um acontecimento em que um acidente quase aconteceu."], ["Falha na cobertura", "uma zona com imagens em falta ou de má qualidade."]],
          slides: [
            { title: "Verifique os dados no local", bullets: ["Conte as imagens, veja se estão desfocadas", "Procure falhas na cobertura; junção rápida", "Volte a voar as falhas, cópia num segundo aparelho"] },
            { title: "Preencha os registos", bullets: ["Registos de voo, baterias e manutenção", "Condições reais no dossiê de missão", "Confirme a data de entrega"] },
            { title: "Se alguma coisa correu mal", bullets: ["Ponha a área em segurança", "Registe e comunique como exigido; avise a seguradora", "Analise e atualize os procedimentos"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Tarefa final: junte o seu dossiê de missão completo: âmbito, levantamento do local e mapa desenhado à mão, verificação do espaço aéreo e das autorizações com as fontes, avaliação de riscos, plano de voo, funções da equipa e briefing, planos de contingência, cartão de avançar / não avançar, e a lista de verificação e o modelo de registo depois do voo.",
          youCanNow: "fechar uma missão de forma profissional, com a verificação dos dados, os registos completos e o tratamento correto dos incidentes.",
          quickCheck: [
            { objective: "O6", q: "Para que serve uma junção rápida em baixa resolução?", options: ["Fazer o relatório final", "Carregar as baterias", "Enviar a fatura", "Procurar falhas na cobertura antes de sair do local"], answer: 3, why: "Uma junção rápida mostra as falhas enquanto a equipa e as condições ainda estão lá para as voar outra vez." },
            { objective: "O6", q: "O seu drone bateu num poste da vedação e partiu uma hélice. O que faz primeiro?", options: ["Comunica no próximo mês", "Põe a área em segurança, depois regista e comunica como as regras exigem", "Esconde o dano do cliente", "Voa a missão seguinte com a mesma hélice"], answer: 1, why: "Primeiro ponha a área em segurança, depois registe o incidente e comunique-o à autoridade e à seguradora como exigido." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Voar a missão",
        questions: [
          { objective: "O4", q: "Quem tem a última palavra sobre a segurança de um voo?", options: ["O cliente", "O observador", "O piloto em comando", "O fabricante do drone"], answer: 2, why: "O piloto em comando é responsável pela segurança do voo." },
          { objective: "O4", q: "Quem pode mandar parar por segurança durante uma missão?", options: ["Qualquer pessoa da equipa", "Só o cliente", "Só o observador", "Ninguém, depois de o drone estar a voar"], answer: 0, why: "Qualquer pessoa que veja um perigo pode mandar parar." },
          { objective: "O5", q: "A telemetria mostra que o vento está agora acima do seu limite. Você deve:", options: ["Voar mais depressa para acabar", "Desligar os avisos", "Subir mais", "Fazer uma pausa ou aterrar"], answer: 3, why: "Passar os limites quer dizer parar; acabe mais tarde." },
          { objective: "O6", q: "Antes de sair do local, você deve:", options: ["Apagar fotos para libertar espaço", "Verificar se as imagens estão desfocadas ou têm falhas e voar as falhas outra vez", "Sair sem avisar o cliente", "Formatar o cartão de memória"], answer: 1, why: "Corrigir as falhas no local poupa uma segunda viagem." },
          { objective: "O6", q: "O seu drone tem um quase acidente com uma pequena aeronave. Depois de pôr tudo em segurança, deve:", options: ["Registá-lo e comunicá-lo como a sua autoridade exige", "Guardar segredo", "Fugir depressa", "Culpar a aeronave"], answer: 0, why: "Comunicar ajuda a segurança e muitas vezes é exigido pelas regras." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Drones Agrícolas: Planeamento de Missões e Operações de Voo",
    questions: [
      { objective: "O1", q: "O âmbito de uma missão é:", options: ["A câmara do drone", "O acordo escrito sobre o que um trabalho cobre e entrega", "Um boletim meteorológico", "Um registo de voo"], answer: 1, why: "Define a área, as entregas, as datas, o preço e os limites." },
      { objective: "O1", q: "Qual destas é uma entrega?", options: ["A licença do piloto", "Uma bateria", "Um mapa NDVI e um relatório de uma página", "Uma hélice"], answer: 2, why: "As entregas são o que o cliente recebe." },
      { objective: "O1", q: "Porque é que se dizem os limites de um mapa de drone no âmbito?", options: ["Para evitar desilusões e conflitos", "Para cobrar mais", "Para confundir o cliente", "Não é preciso"], answer: 0, why: "Limites claros criam expectativas honestas." },
      { objective: "O2", q: "Um levantamento no escritório usa:", options: ["Só uma pá", "O drone a voar", "Um trator", "Mapas e vistas de satélite antes de ir ao local"], answer: 3, why: "Os levantamentos no escritório encontram cedo os perigos e os problemas de espaço aéreo." },
      { objective: "O2", q: "O que deve confirmar por escrito antes de voar sobre a exploração de um cliente?", options: ["O número de sapato do piloto", "A autorização do dono ou do gestor da terra", "O preço da colheita", "Nada"], answer: 1, why: "Uma autorização escrita protege todos." },
      { objective: "O2", q: "Porque é que se verifica a cobertura da rede móvel no levantamento no terreno?", options: ["Para ouvir música", "Para as redes sociais", "As aplicações, os mapas e a comunicação podem precisar dela", "Não é útil"], answer: 2, why: "Sem rede, os mapas, a coordenação e as emergências podem ser afetados." },
      { objective: "O3", q: "Uma avaliação de riscos lista:", options: ["Perigos, probabilidade, gravidade e medidas de controlo", "Só os custos", "Os nomes dos clientes", "As variedades das culturas"], answer: 0, why: "Mostra o que pode correr mal e como reduzir o risco." },
      { objective: "O3", q: "Uma linha elétrica passa ao longo da borda do campo. Uma boa medida de controlo é:", options: ["Voar mais perto para ter fotos melhores", "Ignorá-la", "Voar à noite", "Manter as linhas de voo bem longe e pôr a altura de RTH acima dela"], answer: 3, why: "A distância e uma altura de RTH segura reduzem o risco de colisão." },
      { objective: "O3", q: "Porque é que se divide uma área grande em voos de uma bateria?", options: ["Para usar menos imagens", "Para que cada voo acabe em segurança com uma bateria", "Para confundir o programa", "Porque a sobreposição o exige"], answer: 1, why: "Planear por bateria evita emergências por bateria fraca." },
      { objective: "O3", q: "Onde deve obter a previsão do tempo?", options: ["Um palpite", "A opinião de um amigo", "O serviço meteorológico nacional, na véspera e na manhã do trabalho", "O diário do ano passado"], answer: 2, why: "As previsões oficiais são as mais fiáveis." },
      { objective: "O3", q: "Um plano de contingência é:", options: ["Uma ação planeada antes, para o caso de alguma coisa mudar ou correr mal", "Uma definição da câmara", "Um pagamento", "Uma peça do drone"], answer: 0, why: "Os planos de contingência permitem à equipa agir depressa e com segurança." },
      { objective: "O4", q: "A principal tarefa do observador é:", options: ["Processar os dados", "Pagar à equipa", "Voar o drone", "Vigiar o drone, o céu e o chão e avisar o piloto"], answer: 3, why: "O observador está atento aos perigos." },
      { objective: "O4", q: "Ordens padrão como \"parar\" e \"aterrar já\" ajudam porque:", options: ["Soam profissionais", "Todos as entendem logo", "O drone exige-as", "Poupam bateria"], answer: 1, why: "Palavras curtas e combinadas reduzem a confusão quando há pressa." },
      { objective: "O5", q: "A telemetria inclui:", options: ["Os preços das colheitas", "Os nomes dos agricultores", "Bateria, altura, posição, sinal e avisos", "O tempo do próximo mês"], answer: 2, why: "A telemetria são dados do voo ao vivo." },
      { objective: "O5", q: "Uma pessoa entra na área de voo. A equipa deve:", options: ["Parar o drone no ar ou aterrá-lo", "Voar mais baixo por cima dela", "Continuar a voar as linhas", "Pedir-lhe para correr"], answer: 0, why: "Pessoas na área aumentam o risco; faça uma pausa ou aterre." },
      { objective: "O5", q: "\"Acabar amanhã é melhor do que um acidente hoje\" quer dizer:", options: ["Voar sempre tarde", "Nunca acabar os trabalhos", "Cobrar mais pelos atrasos", "Parar quando as condições são perigosas, mesmo que o trabalho não esteja feito"], answer: 3, why: "A segurança vem antes do horário." },
      { objective: "O6", q: "Porque é que se faz uma cópia dos dados num segundo aparelho antes de sair?", options: ["Para encher o armazenamento", "Para que os dados não se percam se um aparelho avariar ou se perder", "Porque o drone o exige", "Para partilhar com estranhos"], answer: 1, why: "Uma segunda cópia protege os dados do cliente e o seu trabalho." },
      { objective: "O6", q: "Os registos de voo depois de uma missão anotam:", options: ["Só o nome do cliente", "Só o preço", "A hora, a bateria, o piloto e os problemas de cada voo", "Nada"], answer: 2, why: "Os registos apoiam a segurança, a manutenção e o cumprimento das regras." },
      { objective: "O6", q: "Depois de um incidente, a primeira prioridade é:", options: ["Pôr a área em segurança", "Publicar fotos na internet", "Sair depressa", "Apagar os registos"], answer: 0, why: "As pessoas e os bens vêm primeiro." },
      { objective: "O6", q: "Porque é que se analisa um incidente com a equipa?", options: ["Para culpar alguém", "Para passar o tempo", "Não é útil", "Para atualizar os procedimentos para que não volte a acontecer"], answer: 3, why: "Aprender com os incidentes melhora a segurança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      3,
      4,
      6,
      10,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do dossiê e verifique-a outra vez.",
    criteria: [
      {
        name: "Âmbito da missão",
        objective: "O1",
        notYet: "Falta a decisão do cliente, a área ou as entregas.",
        meets: "A decisão, a área, as entregas, o detalhe, as datas, o contacto, o preço e a partilha dos dados estão escritos, com o que o drone não pode fazer.",
        exceeds: "Assinado ou confirmado por escrito pelo cliente."
      },
      {
        name: "Levantamento do local e autorizações",
        objective: "O2",
        notYet: "Não há levantamento, ou faltam as autorizações e a verificação do espaço aéreo.",
        meets: "Levantamento no escritório e no terreno com um mapa desenhado à mão dos perigos, verificação do espaço aéreo com as fontes e autorizações escritas.",
        exceeds: "Inclui a cobertura da rede, o abrigo da equipa e as datas de cada verificação."
      },
      {
        name: "Avaliação de riscos",
        objective: "O3",
        notYet: "Os perigos estão listados sem medidas de controlo.",
        meets: "Uma tabela com o perigo, a probabilidade, a gravidade e a medida de controlo para cada perigo principal.",
        exceeds: "Cobre o calor, o vento, os curiosos, a perda de ligação e qualquer pista de aterragem perto."
      },
      {
        name: "Plano de voo e planos de contingência",
        objective: "O3",
        notYet: "Falta a altura, a sobreposição, as baterias ou os limites de tempo meteorológico.",
        meets: "Área dividida em voos, altura, detalhe da imagem, sobreposição, velocidade, baterias com reservas, horários, limites de tempo meteorológico e planos de contingência.",
        exceeds: "Mostra o cálculo do número de baterias e uma data de reserva."
      },
      {
        name: "Equipa e briefing",
        objective: "O4",
        notYet: "Não há funções nem notas do briefing.",
        meets: "Funções com nomes e notas do briefing com os perigos, os limites, os planos de contingência e as ordens padrão.",
        exceeds: "Inclui o equipamento de segurança, a água e como os curiosos são mantidos afastados."
      },
      {
        name: "Fechar a missão",
        objective: "O6",
        notYet: "Não há lista de verificação nem registo depois do voo.",
        meets: "Uma lista de verificação depois do voo com a verificação dos dados, as cópias de segurança, os registos de voo e os passos para comunicar incidentes.",
        exceeds: "Inclui como as lições dos incidentes atualizam os procedimentos."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do dossiê de missão",
      "Alunos que dizem ter usado um dossiê de missão escrito num trabalho real para um cliente em 60 dias (inquérito de seguimento)",
      "Empresas de drones que dizem ter menos voos repetidos, conflitos ou incidentes depois da formação",
      "Alunos que fazem outro curso de drones ou conseguem um cliente que volta"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um portátil com uma aplicação de mapas e vista de satélite",
      "Modelos ou um caderno para o âmbito, a avaliação de riscos, o plano de voo e os registos",
      "Um drone e a sua aplicação de planeamento, se houver, para uma missão de prática",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo para fazer o dossiê de missão"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois façam um dossiê de missão de exemplo em grupo antes de os alunos fazerem o seu.",
      "Façam um briefing em dramatização com um piloto, um observador e um contacto da exploração, e pratiquem as ordens padrão.",
      "Qualquer voo de prática tem de seguir as regras de drones do país, com pilotos licenciados e as aprovações em ordem.",
      "Use os trabalhos de exemplo do curso se os alunos ainda não tiverem um cliente.",
      "Avalie o dossiê de missão com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
