"use strict";

// Koach Learn course (Portuguese translation of shared/safe-labor-migration.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "safe-labor-migration-pt",
  lang: "pt",
  translationOf: "safe-labor-migration",
  category: "Workforce Development",
  name: "Migrar para Trabalhar com Segurança",
  skills: "Encontrar informação oficial sobre migração, Verificar a licença de uma agência de recrutamento, Reconhecer recrutadores falsos, Ler uma oferta de emprego e um contrato, Reconhecer o tráfico de pessoas e pedir ajuda, Fazer uma lista de segurança para a migração",
  outcome: "planear uma ida para trabalhar no estrangeiro por um caminho legal: verificar se o recrutador tem licença, recusar qualquer emprego que lhe peça para pagar por ele, ler o contrato antes de assinar, conhecer os sinais de tráfico de pessoas e onde pedir ajuda, e levar consigo uma lista pessoal de segurança para a migração.",
  about: [
    "Todos os anos, milhões de pessoas vão para outro país para trabalhar: enfermeiros das Filipinas e da Nigéria, motoristas e pedreiros da Índia e do Quénia, trabalhadores agrícolas do México, cuidadores do Gana e da Colômbia, trabalhadores de lojas e hotéis de Marrocos, do Egito e do Senegal. A maioria encontra trabalho honesto. Alguns são enganados por recrutadores falsos, pagam taxas altas, perdem o passaporte ou acabam em trabalho forçado.",
    "Este curso ensina como se proteger antes de partir e depois de chegar. Você vai aprender a encontrar informação oficial sobre os caminhos legais, a verificar se uma agência de recrutamento tem licença, os sinais de alerta de um emprego falso, o que uma oferta de emprego e um contrato justos têm de dizer, os sinais de tráfico de pessoas e onde pedir ajuda.",
    "O curso não dá conselhos jurídicos nem sobre vistos, e não lhe arranja emprego. As regras são diferentes em cada país e mudam, por isso cada lição mostra onde verificar a página oficial do governo do seu país e do país onde quer trabalhar.",
    "Cada lição dura cerca de cinco minutos. Faça a tarefa \"Experimente agora\" em papel ou no telefone. Há uma pequena verificação depois de cada lição e de cada capítulo, e um questionário de 20 perguntas no final. No fim, terá a sua própria lista de segurança para a migração."
  ],
  finalTask: "Faça a sua própria lista de segurança para a migração, em papel ou no telefone, para um emprego real no estrangeiro que esteja a considerar (ou uma oferta de emprego de prática). Tem de ter: as páginas oficiais do governo e da embaixada que vai usar; o nome da agência e como verificou a licença dela; uma lista dos custos e de quem os paga; os detalhes do emprego que precisa de ter por escrito antes de assinar; os sinais de alerta que o fariam parar; e um plano de ajuda com cópias dos seus documentos, um contacto de confiança em casa, e os números da embaixada e de ajuda que você mesmo procurou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos que pensam em trabalhar no estrangeiro, sobretudo em África, na Ásia e na América Latina (por exemplo no Quénia, Nigéria, Gana, Senegal, Marrocos, Egito, Índia, Filipinas, México e Colômbia), e também as suas famílias e os trabalhadores comunitários que os aconselham. Muitos ouviram falar de empregos por amigos, redes sociais ou agentes locais. O curso está traduzido em muitas línguas.",
    startingPoint: "Sabem usar um telefone simples e aplicações de mensagens. Conhecem alguém que trabalhou no estrangeiro. Raramente leram um contrato de trabalho e não sabem que os recrutadores têm de ter licença nem que os trabalhadores não devem pagar taxas de recrutamento.",
    gap: "Os alunos precisam de distinguir uma oferta de emprego legal e justa de uma burla ou de uma armadilha de tráfico antes de pagarem dinheiro, entregarem o passaporte ou viajarem. Sem estas habilidades, as pessoas perdem as poupanças, ficam endividadas e podem acabar em trabalho forçado, longe de qualquer ajuda.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas, para quem lê numa segunda língua e para a tradução",
      "Aparelhos: um smartphone simples ou um computador partilhado; algumas tarefas são em papel",
      "As regras mudam de país para país e mudam muitas vezes: o curso aponta para páginas oficiais e não dá conselhos jurídicos nem sobre vistos",
      "Segurança: nenhum número verdadeiro de passaporte, identificação ou banco na prática; quem está em perigo é orientado a ligar primeiro para os serviços de emergência locais",
      "Alguns alunos já podem estar numa situação difícil no estrangeiro; o curso dá caminhos de ajuda sem culpar ninguém"
    ],
    prerequisites: "Nenhum. Quem é novo na internet pode fazer primeiro o curso \"Noções Básicas de Internet\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um país onde quer trabalhar", action: "encontrar as páginas oficiais do governo e da embaixada sobre vistos de trabalho e caminhos legais", standard: "e distinguir uma página oficial da página de um agente ou de um desconhecido" },
    { id: "O2", condition: "Com o nome de uma agência de recrutamento", action: "verificar se a agência tem licença da autoridade de trabalho ou de migração do seu país", standard: "antes de pagar qualquer coisa ou entregar documentos" },
    { id: "O3", condition: "Com um anúncio de emprego ou uma mensagem de um recrutador", action: "fazer a lista dos sinais de alerta de um recrutador falso ou de uma burla de emprego", standard: "encontrando pelo menos 3 de 4 sinais num anúncio de prática" },
    { id: "O4", condition: "Com uma oferta de emprego ou um contrato", action: "verificar se o empregador, o trabalho, o salário, o horário, o local, os custos e as condições de regresso estão por escrito", standard: "e listar tudo o que falta ou foi mudado antes de assinar" },
    { id: "O5", condition: "Com a história de um trabalhador no estrangeiro", action: "identificar os sinais de tráfico de pessoas ou de trabalho forçado e dizer onde pedir ajuda", standard: "dizendo pelo menos 3 sinais e 2 lugares onde pedir ajuda" },
    { id: "O6", condition: "Antes de sair de casa", action: "escrever uma lista de segurança para a migração com cópias dos documentos, contactos e números de ajuda", standard: "que cubra todas as partes da grelha de avaliação do curso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher um caminho seguro e legal",
      lessons: [
        {
          title: "Caminhos legais e onde encontrar informação oficial",
          objectives: ["O1"],
          minutes: 5,
          goal: "Encontrar as páginas oficiais para trabalhar legalmente no país para onde quer ir.",
          text: [
            "Um caminho legal quer dizer que você viaja com o visto ou a autorização de trabalho certa para o emprego, emitida pelo governo do país onde vai trabalhar. Trabalhar com um visto de turista, ou atravessar uma fronteira com um contrabandista, põe você em grande risco: pode ser preso, mandado de volta para casa ou ficar preso nas mãos de pessoas que sabem que tem medo da polícia.",
            "Só os governos decidem os vistos e as autorizações de trabalho. A informação de confiança vem do site oficial de imigração do país onde quer trabalhar, da embaixada ou do consulado desse país no seu país, e do ministério do trabalho ou da migração do seu próprio país. Muitos países de origem também têm serviços que ajudam os trabalhadores migrantes, por exemplo o Departamento dos Trabalhadores Migrantes (DMW) nas Filipinas e o portal eMigrate do Ministério dos Negócios Estrangeiros da Índia.",
            "Agentes, páginas nas redes sociais, canais de vídeo e amigos podem ajudar você a começar, mas não são oficiais. Verifique cada dado que lhe dizem na página do governo. Este curso não dá conselhos jurídicos nem sobre vistos; se o seu caso for complicado, pergunte à embaixada ou a um advogado com licença.",
            "Contrabando de migrantes e tráfico de pessoas são coisas diferentes. Contrabando é pagar a alguém para atravessar uma fronteira de forma ilegal. Tráfico é quando alguém recruta ou leva uma pessoa usando a força, mentiras ou abuso, para a explorar. Os contrabandistas podem tornar-se traficantes: mais uma razão para usar só caminhos legais."
          ],
          steps: ["Escreva o país e o tipo de trabalho.", "Procure o site oficial de imigração ou de vistos desse país e a embaixada dele no seu país.", "Verifique o endereço: os governos costumam usar um final oficial como .gov, .gov.ph ou .go.ke; procure o brasão do governo e a página de contactos.", "Encontre a página sobre vistos ou autorizações de trabalho e anote o que diz que precisa.", "Encontre a página do ministério do trabalho ou da migração do seu país para quem trabalha no estrangeiro."],
          words: [["Caminho legal", "uma forma de viajar e trabalhar que os governos permitem, com o visto ou a autorização certa."], ["Autorização de trabalho", "permissão oficial para fazer trabalho pago num país."], ["Embaixada ou consulado", "o serviço do seu país noutro país, ou o serviço de outro país no seu, que trata dos vistos e ajuda os cidadãos."], ["Contrabando de migrantes", "pagar a alguém para levar você através de uma fronteira de forma ilegal."], ["Tráfico de pessoas", "recrutar ou levar uma pessoa usando a força, mentiras ou abuso, para a explorar."]],
          slides: [
            { title: "Um caminho legal", bullets: ["O visto ou a autorização de trabalho certa para o emprego", "Emitida pelo governo do país onde vai trabalhar", "Nada de trabalhar com visto de turista, nada de contrabandistas"] },
            { title: "De onde vêm os dados oficiais", bullets: ["O site de imigração do país de destino", "A embaixada ou o consulado desse país no seu país", "O ministério do trabalho ou da migração do seu país"] },
            { title: "Não é oficial", bullets: ["Agentes, páginas nas redes sociais e canais de vídeo", "Histórias de amigos", "Verifique cada dado na página do governo"] },
            { title: "Contrabando não é tráfico", bullets: ["Contrabando: pagar para atravessar uma fronteira ilegalmente", "Tráfico: força, mentiras ou abuso para explorar uma pessoa", "Os contrabandistas podem tornar-se traficantes"] }
          ],
          sources: [
            { name: "UNODC: Tráfico de pessoas e contrabando de migrantes (Educação para a Justiça)", url: "https://www.unodc.org/e4j/en/secondary/human-trafficking-and-migrant-smuggling.html" },
            { name: "Filipinas: Departamento dos Trabalhadores Migrantes (DMW)", url: "https://dmw.gov.ph/" },
            { name: "Índia, Ministério dos Negócios Estrangeiros: eMigrate", url: "https://emigrate.gov.in/" }
          ],
          tryIt: "Escolha um país onde talvez queira trabalhar. Num telefone ou computador, encontre (1) a página oficial de imigração ou de vistos de trabalho desse país e (2) a embaixada ou o consulado dele no seu país. Escreva os dois endereços num papel e uma coisa que cada página diz que precisa.",
          youCanNow: "encontrar as páginas oficiais do governo e da embaixada para trabalhar noutro país e distingui-las das páginas dos agentes.",
          quickCheck: [
            { objective: "O1", q: "Quem decide se você recebe um visto de trabalho para outro país?", options: ["O agente de recrutamento", "O governo desse país", "Um canal de vídeo famoso sobre empregos no estrangeiro", "Só o seu futuro empregador"], answer: 1, why: "Só o governo do país de destino emite vistos e autorizações de trabalho." },
            { objective: "O1", q: "Um amigo diz que pode trabalhar lá com um visto de turista. O que faz?", options: ["Vai, porque o seu amigo fez isso", "Paga a um agente para tratar disso depressa", "Primeiro verifica a página oficial de imigração ou a embaixada", "Pergunta nas redes sociais"], answer: 2, why: "Trabalhar com o visto errado pode levar à prisão ou a ficar preso numa armadilha; a página oficial diz o que é legal." }
          ]
        },
        {
          title: "Verificar se uma agência de recrutamento tem licença",
          objectives: ["O2"],
          minutes: 5,
          goal: "Verificar a licença de uma agência na lista oficial do seu governo.",
          text: [
            "Em muitos países, as agências que enviam trabalhadores para o estrangeiro têm de ter uma licença do governo. A licença quer dizer que o governo sabe quem elas são e pode agir quando há queixas. Um agente sem licença não tem ninguém a controlá-lo.",
            "Exemplos: nas Filipinas, o Departamento dos Trabalhadores Migrantes (DMW) deixa verificar pela internet a situação de uma agência de recrutamento. Na Índia, o portal eMigrate tem a lista dos agentes de recrutamento registados, e o agente deve mostrar um certificado de registo válido. No Quénia, a Autoridade Nacional de Emprego (NEA) tem a lista das agências privadas de emprego registadas. Noutros países, pergunte ao ministério do trabalho, ao serviço público de emprego ou a um escritório da OIM que lista deve usar.",
            "Verifique o nome exato e o número da licença. Alguns agentes falsos copiam o nome de uma agência verdadeira, ou usam uma licença que já expirou ou foi cancelada. Verifique outra vez perto do dia em que vai pagar ou assinar, porque as licenças podem ser suspensas. Verifique também se a oferta de vagas ou o pedido de trabalhadores está aprovado, quando o seu país o exige."
          ],
          steps: ["Peça à agência, por escrito, o nome legal completo, a morada e o número da licença.", "Abra a lista oficial do seu governo (não um link que o agente lhe envia).", "Procure o nome e o número da licença e veja se correspondem.", "Verifique se a licença é válida hoje e não está suspensa nem cancelada.", "Se a agência não estiver na lista, pare e denuncie-a à autoridade."],
          words: [["Agência de recrutamento", "uma empresa que encontra trabalhadores para empregadores, às vezes noutros países."], ["Licença", "permissão oficial do governo para fazer um tipo de negócio."], ["Pedido de trabalhadores", "o pedido oficial de um empregador para contratar trabalhadores, que alguns países têm de aprovar."], ["OIM", "a Organização Internacional para as Migrações (em inglês, IOM), a agência das Nações Unidas para a migração."]],
          slides: [
            { title: "Porque a licença importa", bullets: ["O governo sabe quem é a agência", "Pode fazer queixa se alguma coisa correr mal", "Os agentes sem licença não têm ninguém a controlá-los"] },
            { title: "Onde verificar (exemplos)", bullets: ["Filipinas: verificação da situação das agências no DMW", "Índia: lista de agentes registados no eMigrate", "Quénia: lista da Autoridade Nacional de Emprego"] },
            { title: "Como verificar", bullets: ["Obtenha o nome exato e o número da licença por escrito", "Use a lista oficial, não o link do agente", "O nome e o número têm de corresponder e ser válidos hoje"] },
            { title: "Não está na lista?", bullets: ["Pare: não pague nem entregue documentos", "Denuncie à autoridade do trabalho ou da migração"] }
          ],
          sources: [
            { name: "Filipinas, DMW: agências de recrutamento", url: "https://dmw.gov.ph/archives/poea/services/recruiters.html" },
            { name: "Índia, Ministério dos Negócios Estrangeiros: perguntas frequentes de quem quer emigrar", url: "https://www.mea.gov.in/issues-of-intending-emigrants.htm" },
            { name: "Quénia: Autoridade Nacional de Emprego (NEA)", url: "https://www.nea.go.ke/" },
            { name: "OIM IRIS: Recrutamento ético", url: "https://iris.iom.int/" }
          ],
          tryIt: "Encontre a lista oficial do seu país das agências de recrutamento com licença (ou o serviço que a guarda). Escreva o endereço do site. Depois procure uma agência de que já ouviu falar, ou qualquer agência da lista, e escreva o nome dela, o número da licença e se a licença é válida.",
          youCanNow: "encontrar a lista oficial do seu país das agências com licença e verificar o nome, o número e a situação de uma agência.",
          quickCheck: [
            { objective: "O2", q: "Um agente envia-lhe o link de uma página que diz que a agência tem licença. Qual é a verificação mais segura?", options: ["Confiar no link porque parece oficial", "Pedir ao agente uma captura de ecrã", "Contar os comentários bons nas redes sociais", "Abrir você mesmo a lista oficial do seu governo e procurar o nome e o número"], answer: 3, why: "Os agentes falsos conseguem fazer páginas falsas; ir você mesmo à lista oficial é a verificação verdadeira." },
            { objective: "O2", q: "O nome da agência corresponde à lista oficial, mas o número da licença é diferente. O que isto sugere?", options: ["Alguém pode estar a copiar o nome de uma agência verdadeira", "Nada; os números não são importantes", "A agência é ainda mais segura", "Deve pagar mais depressa"], answer: 0, why: "Os agentes falsos copiam nomes verdadeiros; o nome e o número têm de corresponder a uma licença válida." }
          ]
        },
        {
          title: "Reconhecer recrutadores falsos e burlas de emprego",
          objectives: ["O3"],
          minutes: 5,
          goal: "Fazer a lista dos sinais de alerta num anúncio de emprego ou numa mensagem de um recrutador.",
          text: [
            "O recrutamento justo tem uma regra simples que pode lembrar: os trabalhadores não devem pagar para conseguir um emprego. As orientações da Organização Internacional do Trabalho (OIT) sobre recrutamento justo dizem que não se deve cobrar aos trabalhadores nem a quem procura emprego nenhuma taxa de recrutamento nem custos ligados a ela. Quem paga é o empregador. A isto chama-se princípio do empregador pagador. Alguns países ainda permitem certas taxas por lei, por isso, se alguém lhe pedir dinheiro, verifique primeiro as regras oficiais do seu país.",
            "Sinais de alerta comuns: tem de pagar ao agente uma taxa de colocação, de formação, de exame médico ou de visto antes de ver um contrato; o salário é muito mais alto do que o normal para esse trabalho; a oferta chega só pelas redes sociais ou por mensagens, sem morada da empresa; apressam você a decidir hoje; pedem-lhe para viajar com visto de turista; querem ficar com o seu passaporte; ou o trabalho, o empregador ou o país mudam a toda a hora.",
            "Outros sinais: dizem-lhe para mentir às autoridades no aeroporto, para pedir dinheiro emprestado ao agente, ou para esconder a oferta da sua família. Um empregador verdadeiro pode ser verificado: tem uma morada verdadeira, um site, e um pedido de trabalhadores ou um contrato que você pode ler antes de pagar ou de viajar."
          ],
          steps: ["Leia o anúncio ou a mensagem com calma.", "Faça um círculo à volta de qualquer pedido de dinheiro, do seu passaporte ou de segredo.", "Veja se o salário e o trabalho fazem sentido.", "Verifique a empresa e a agência nas páginas oficiais.", "Se vir um sinal de alerta, pare e pergunte à autoridade ou a um conselheiro de confiança."],
          words: [["Taxa de recrutamento", "dinheiro cobrado a um trabalhador para conseguir um emprego ou ser colocado nele."], ["Princípio do empregador pagador", "a regra de que é o empregador, e não o trabalhador, que paga os custos do recrutamento."], ["OIT", "a Organização Internacional do Trabalho (em inglês, ILO), a agência das Nações Unidas para o trabalho e os direitos dos trabalhadores."]],
          slides: [
            { title: "Lembre-se de uma regra", bullets: ["Os trabalhadores não devem pagar para conseguir um emprego", "O empregador paga os custos do recrutamento", "Pediram-lhe dinheiro? Verifique primeiro as regras oficiais"] },
            { title: "Sinais de alerta", bullets: ["Taxas ao agente antes de um contrato", "Salário muito acima do normal", "Pressa: decida hoje", "Visto de turista para um emprego"] },
            { title: "Mais sinais de alerta", bullets: ["Querem ficar com o seu passaporte", "O trabalho, o empregador ou o país mudam a toda a hora", "Mentir no aeroporto, pedir emprestado ao agente, guardar segredo"] },
            { title: "Uma oferta verdadeira pode ser verificada", bullets: ["Morada e site verdadeiros da empresa", "Agência com licença", "Um contrato que lê antes de pagar ou de viajar"] }
          ],
          sources: [
            { name: "OIT: Princípios gerais e orientações operacionais para o recrutamento justo e definição de taxas de recrutamento e custos relacionados", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" },
            { name: "OIM IRIS: Recrutamento ético (princípio do empregador pagador)", url: "https://iris.iom.int/" }
          ],
          tryIt: "Leia este anúncio de prática: Empregos em hotéis no Dubai! Salário 3 vezes o normal. Sem experiência. Envie hoje 500 dólares para tratar do visto, só restam 5 vagas. Só por WhatsApp. Escreva todos os sinais de alerta que encontrar (há pelo menos quatro).",
          youCanNow: "fazer a lista dos sinais de alerta de um recrutador falso ou de uma burla de emprego num anúncio ou numa mensagem.",
          quickCheck: [
            { objective: "O3", q: "Um recrutador pede-lhe para pagar uma taxa de colocação antes de ver um contrato. O que é isto?", options: ["Normal em todos os empregos no estrangeiro", "Um sinal de que o emprego é muito bom", "Um sinal de alerta; os trabalhadores não devem pagar para conseguir um emprego", "Um imposto do governo"], answer: 2, why: "As orientações da OIT sobre recrutamento justo dizem que não se deve cobrar taxas de recrutamento aos trabalhadores; pagar antes de um contrato é um sinal forte de burla." },
            { objective: "O3", q: "Que mensagem tem MAIS sinais de alerta?", options: ["Aqui está a nossa morada e o número da licença; leia primeiro o contrato", "Pague hoje, guarde segredo e viaje com visto de turista", "Por favor, envie o seu currículo para a entrevista", "O empregador paga a sua viagem de avião; veja o contrato em anexo"], answer: 1, why: "A pressa, o segredo e um visto de turista para um emprego são todos sinais de alerta." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher um caminho seguro e legal",
        questions: [
          { objective: "O1", q: "Qual é o lugar de mais confiança para verificar as regras dos vistos de trabalho?", options: ["A página de um recrutador nas redes sociais", "Um vídeo de alguém que foi para o estrangeiro", "O conselho de um amigo", "O site oficial de imigração ou a embaixada do país de destino"], answer: 3, why: "Só o governo decide os vistos, por isso as páginas oficiais dele são a fonte de confiança." },
          { objective: "O1", q: "Qual é a diferença entre contrabando de migrantes e tráfico de pessoas?", options: ["Contrabando é pagar para atravessar uma fronteira ilegalmente; tráfico usa a força, mentiras ou abuso para explorar uma pessoa", "Querem dizer a mesma coisa", "O contrabando é legal", "O tráfico só acontece nas fronteiras"], answer: 0, why: "O tráfico tem a ver com explorar uma pessoa; o contrabando tem a ver com atravessar uma fronteira ilegalmente." },
          { objective: "O2", q: "Onde deve verificar se uma agência tem licença?", options: ["Só no site da própria agência", "Na lista oficial do seu governo das agências com licença", "Perguntando a outras pessoas à procura de emprego num grupo de conversa", "Olhando para os móveis do escritório da agência"], answer: 1, why: "A lista oficial da autoridade do trabalho ou da migração mostra se a licença é verdadeira e válida." },
          { objective: "O2", q: "A agência não está na lista oficial. O que faz?", options: ["Paga um depósito mais pequeno", "Dá-lhes uma cópia do seu passaporte para guardarem", "Para, e denuncia-a à autoridade do trabalho ou da migração", "Pede-lhes um site mais bonito"], answer: 2, why: "Um agente sem licença não tem ninguém a controlá-lo; pare e denuncie." },
          { objective: "O3", q: "O que quer dizer o princípio do empregador pagador?", options: ["O trabalhador paga metade", "O governo paga as taxas do trabalhador", "O agente decide quem paga", "É o empregador, e não o trabalhador, que paga os custos do recrutamento"], answer: 3, why: "No recrutamento justo, os custos do recrutamento são pagos pelo empregador, não pelos trabalhadores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger-se antes e depois de partir",
      lessons: [
        {
          title: "Ler a oferta de emprego e o contrato",
          objectives: ["O4"],
          minutes: 6,
          goal: "Verificar se uma oferta de emprego tem por escrito os detalhes que tem de ter.",
          text: [
            "Um emprego justo vem com uma oferta ou um contrato por escrito, que você pode ler numa língua que entende, antes de pagar qualquer coisa, assinar ou viajar. Peça uma cópia para guardar. Se não entender uma palavra, peça à agência, ao serviço do trabalho ou a uma pessoa de confiança para a explicar.",
            "Verifique se diz: o empregador e a morada dele; o trabalho e as tarefas principais; onde vai trabalhar; o salário, de quanto em quanto tempo e como é pago; o horário, os dias de folga e as horas extra; a duração do contrato; a casa e a comida, e se são descontadas do seu salário; quem paga a viagem de avião, o visto, o exame médico e os custos do recrutamento; e como pode terminar o contrato e voltar para casa.",
            "A troca de contrato é um truque comum: você assina um contrato em casa e, quando chega, recebe outro, diferente e pior. Tire uma foto de cada página que assina. Se o contrato que lhe dão no estrangeiro for diferente, não o assine à pressa; contacte a sua embaixada ou o serviço do trabalho."
          ],
          steps: ["Obtenha a oferta ou o contrato completo por escrito e guarde uma cópia.", "Use uma lista: empregador, trabalho, local, salário, horário, dias de folga, duração, casa, custos, regresso.", "Marque tudo o que falta ou é diferente do que lhe disseram.", "Peça as respostas por escrito antes de assinar.", "Fotografe cada página que assina e guarde as fotos num lugar seguro."],
          words: [["Contrato", "um acordo por escrito entre você e o empregador sobre o trabalho."], ["Horas extra", "trabalho para além do seu horário normal, que deve ser pago."], ["Desconto", "dinheiro tirado do seu salário, por exemplo para a casa."], ["Troca de contrato", "quando o contrato que recebe no estrangeiro é diferente e pior do que o que assinou em casa."]],
          slides: [
            { title: "Antes de pagar, assinar ou viajar", bullets: ["Obtenha a oferta por escrito", "Numa língua que entende", "Guarde a sua própria cópia"] },
            { title: "Tem de dizer", bullets: ["Empregador, trabalho, local de trabalho", "Salário, horário, dias de folga, horas extra", "Duração do contrato, casa, descontos"] },
            { title: "E também tem de dizer", bullets: ["Quem paga a viagem, o visto, o exame médico e o recrutamento", "Como terminar o contrato e voltar para casa"] },
            { title: "Cuidado com a troca de contrato", bullets: ["Fotografe cada página que assina", "Um contrato diferente no estrangeiro? Não se apresse", "Contacte a sua embaixada ou o serviço do trabalho"] }
          ],
          sources: [
            { name: "OIT: Princípios gerais e orientações operacionais para o recrutamento justo", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" }
          ],
          tryIt: "Escreva num papel a lista de dez pontos do contrato desta lição. Depois leia uma oferta de prática (invente uma, ou use uma verdadeira com os seus números privados tapados) e marque cada ponto que está por escrito. Faça um círculo à volta de cada ponto que falta.",
          youCanNow: "verificar se uma oferta de emprego ou um contrato tem os detalhes que deve ter e listar o que falta antes de assinar.",
          quickCheck: [
            { objective: "O4", q: "Quando deve ler o contrato completo?", options: ["Depois de chegar ao novo país", "Antes de pagar, assinar ou viajar", "Só se houver um problema", "O agente lê-o por você"], answer: 1, why: "Precisa de conhecer as condições antes de entregar dinheiro, assinar ou sair de casa." },
            { objective: "O4", q: "No novo emprego dão-lhe um contrato diferente, com salário mais baixo. Como se chama isto?", options: ["Uma promoção", "Uma atualização normal", "Troca de contrato", "Um bónus"], answer: 2, why: "Trocar por um contrato pior depois da chegada chama-se troca de contrato, um abuso conhecido." }
          ]
        },
        {
          title: "Conhecer os sinais de tráfico de pessoas e de trabalho forçado",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dizer os sinais de tráfico de pessoas e os lugares onde pedir ajuda.",
          text: [
            "As Nações Unidas definem o tráfico de pessoas em três partes: um ato (recrutar, levar, manter ou receber uma pessoa), um meio (força, ameaças, mentiras, abuso de poder ou da fraqueza de alguém) e uma finalidade (exploração, como trabalho forçado ou exploração sexual). Para crianças com menos de 18 anos, não é preciso força nem mentiras para ser tráfico.",
            "Sinais a que deve estar atento: o seu passaporte ou identificação é tirado e guardado pelo empregador ou pelo agente; tem uma dívida que não para de crescer e não pode sair até a pagar; não lhe pagam, ou pagam muito menos do que prometeram; não pode sair livremente do local de trabalho ou da casa; é ameaçado, ou dizem-lhe que a polícia o vai prender; trabalha muitas horas sem dias de folga; está isolado da família e sem telefone.",
            "Há ajuda. Contacte a embaixada ou o consulado do seu país, o serviço do trabalho ou a polícia do país onde está, um escritório da OIM, ou uma organização de trabalhadores de confiança. Muitos países têm linhas de ajuda para trabalhadores migrantes e vítimas de tráfico: procure já o número oficial e guarde-o. Se você ou outra pessoa estiver em perigo agora, ligue primeiro para o número de emergência local."
          ],
          words: [["Trabalho forçado", "trabalho que uma pessoa é obrigada a fazer com ameaças ou castigos e com o qual não concordou livremente."], ["Servidão por dívida", "ser obrigado a trabalhar para pagar uma dívida que parece nunca acabar."], ["Exploração", "usar uma pessoa de forma injusta para proveito de outra."]],
          slides: [
            { title: "O tráfico tem três partes", bullets: ["Ato: recrutar, levar, manter ou receber uma pessoa", "Meio: força, ameaças, mentiras, abuso de poder", "Finalidade: exploração, como o trabalho forçado"] },
            { title: "Sinais a que deve estar atento", bullets: ["Passaporte ou identificação tirados e guardados", "Uma dívida que não para de crescer", "Sem salário ou muito menos do que o prometido"] },
            { title: "Mais sinais", bullets: ["Não é livre de sair do trabalho ou da casa", "Ameaças, ou dizem que a polícia o vai prender", "Isolado da família e sem telefone"] },
            { title: "Onde pedir ajuda", bullets: ["Perigo agora: primeiro o número de emergência local", "A sua embaixada ou consulado, o serviço do trabalho, a polícia", "Escritório da OIM, grupos de trabalhadores, linhas de ajuda oficiais"] }
          ],
          sources: [
            { name: "UNODC: Perguntas frequentes sobre o tráfico de pessoas", url: "https://www.unodc.org/unodc/en/human-trafficking/faqs.html" },
            { name: "UNODC Educação para a Justiça: o crime de tráfico de pessoas", url: "https://www.unodc.org/e4j/en/tip-and-som/module-6/key-issues/crime-of-trafficking-in-persons.html" },
            { name: "OIM: Organização Internacional para as Migrações", url: "https://www.iom.int/" }
          ],
          tryIt: "Leia esta história de prática: a Amina foi para o estrangeiro limpar casas. Quando chegou, o agente ficou com o passaporte dela \"para o guardar em segurança\". Dizem-lhe que deve 2,000 dólares da viagem, e a dívida cresce todos os meses. Ela trabalha 14 horas por dia sem nenhum dia de folga e dizem-lhe que a polícia a vai prender se ela sair. Escreva todos os sinais de tráfico de pessoas ou de trabalho forçado, e dois lugares onde a Amina pode pedir ajuda.",
          youCanNow: "reconhecer os sinais de tráfico de pessoas e de trabalho forçado e dizer lugares onde um trabalhador pode pedir ajuda.",
          quickCheck: [
            { objective: "O5", q: "O seu empregador no estrangeiro diz que tem de ficar com o seu passaporte. O que é isto?", options: ["Um sinal de alerta de trabalho forçado ou de tráfico", "Um serviço normal para o guardar em segurança", "Uma obrigação legal em todo o lado", "Um sinal de um bom empregador"], answer: 0, why: "Tirar e guardar o passaporte de um trabalhador é um sinal comum de trabalho forçado e de tráfico." },
            { objective: "O5", q: "Um trabalhador está em perigo neste momento. Qual é o primeiro passo?", options: ["Publicar sobre isso nas redes sociais", "Esperar até o contrato acabar", "Ligar para o número de emergência local", "Pagar a dívida ao empregador"], answer: 2, why: "Em perigo imediato, o número de emergência local vem primeiro; depois a embaixada e outras ajudas." }
          ]
        },
        {
          title: "A sua lista de segurança para a migração",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever um plano de segurança com os seus documentos, contactos e números de ajuda antes de partir.",
          text: [
            "Antes de partir, faça um plano. Guarde o seu próprio passaporte e os seus documentos consigo. Faça cópias: uma cópia em papel em casa, com alguém de confiança, e uma foto num lugar seguro que possa abrir em qualquer telefone, como o seu próprio email. Não publique fotos do seu passaporte na internet.",
            "Escreva os seus contactos: uma pessoa de confiança em casa que espera ter notícias suas em dias combinados; os nomes completos, as moradas e os números de telefone do empregador e da agência; a embaixada ou o consulado do seu país no país de destino; e as linhas de ajuda oficiais que procurou nas páginas do governo. Combine com a sua pessoa de confiança uma palavra-código que quer dizer \"preciso de ajuda\".",
            "Mantenha um registo simples do seu trabalho: os dias e as horas que trabalha e quanto lhe pagam. Guarde as fotos do contrato. Se alguma coisa correr mal, estes registos ajudam a embaixada, o serviço do trabalho ou um advogado a ajudar você. Depois junte tudo isto, com as verificações das lições anteriores, numa só lista: essa é a sua tarefa final."
          ],
          steps: ["Faça a lista das páginas oficiais que usou (imigração, embaixada, ministério do trabalho do seu país).", "Escreva o nome da agência, o número da licença e como o verificou.", "Faça a lista de todos os custos e de quem os paga.", "Marque os pontos da lista do contrato.", "Escreva os sinais de alerta que o fazem parar.", "Escreva o seu plano de ajuda: cópias dos documentos, contacto de confiança, dias de contacto, palavra-código, números da embaixada e das linhas de ajuda que você mesmo procurou."],
          words: [["Contacto de confiança", "uma pessoa em casa que conhece os seus planos e espera ter notícias suas."], ["Contacto combinado", "uma mensagem ou chamada planeada para dizer que está bem."], ["Palavra-código", "uma palavra que combinam e que quer dizer, em segredo, \"preciso de ajuda\"."]],
          slides: [
            { title: "Guarde os seus documentos", bullets: ["O seu passaporte fica consigo", "Cópia em papel em casa, com alguém de confiança", "Foto num lugar seguro, nunca publicada na internet"] },
            { title: "Os seus contactos", bullets: ["Pessoa de confiança em casa, dias de contacto, palavra-código", "Nomes e moradas do empregador e da agência", "Embaixada e linhas de ajuda oficiais que procurou"] },
            { title: "Mantenha registos", bullets: ["Os dias e as horas que trabalha", "Quanto lhe pagam", "Fotos do seu contrato"] },
            { title: "A sua lista", bullets: ["Páginas oficiais e verificação da licença da agência", "Custos e quem paga, detalhes do contrato", "Sinais de alerta e o seu plano de ajuda"] }
          ],
          sources: [
            { name: "OIM: Organização Internacional para as Migrações", url: "https://www.iom.int/" },
            { name: "Filipinas: Departamento dos Trabalhadores Migrantes (exemplo de um serviço para trabalhadores migrantes)", url: "https://dmw.gov.ph/" }
          ],
          tryIt: "Tarefa final: faça a sua lista de segurança para a migração para um emprego real ou de prática no estrangeiro. Inclua as páginas oficiais, a verificação da licença da agência, os custos e quem paga, os detalhes do contrato, os seus sinais para parar e o seu plano de ajuda. Use espaços em branco como [número do passaporte] em vez de números verdadeiros.",
          youCanNow: "escrever uma lista de segurança para a migração que deixa prontos os seus documentos, contactos e números de ajuda antes de partir.",
          quickCheck: [
            { objective: "O6", q: "Onde deve estar o seu passaporte quando trabalha no estrangeiro?", options: ["Com o agente", "Com o empregador", "Com um amigo que conheceu na viagem", "Consigo, com cópias guardadas em casa"], answer: 3, why: "Guarde o seu próprio passaporte; as cópias com uma pessoa de confiança ajudam se ele for perdido ou tirado." },
            { objective: "O6", q: "Porque combinar uma palavra-código com uma pessoa de confiança em casa?", options: ["Para ter desconto nas chamadas", "Para poder pedir ajuda sem que os outros saibam", "Para desbloquear o telefone", "Para ter um visto mais depressa"], answer: 1, why: "Uma palavra-código deixa você avisar de um perigo mesmo que alguém esteja a ouvir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Proteger-se antes e depois de partir",
        questions: [
          { objective: "O4", q: "Que ponto TEM de estar por escrito antes de assinar?", options: ["Quem paga a viagem de avião, o visto e os custos do recrutamento", "A cidade preferida do agente", "A cor do seu uniforme", "Os seus planos para as férias"], answer: 0, why: "Os custos e quem os paga protegem você de taxas escondidas e de dívidas." },
          { objective: "O4", q: "A oferta não diz quantas horas vai trabalhar. O que faz?", options: ["Assina; as horas não importam", "Adivinha as horas", "Pede as horas por escrito antes de assinar", "Espera para ver depois de chegar"], answer: 2, why: "As condições que faltam devem ser respondidas por escrito antes de se comprometer." },
          { objective: "O5", q: "Qual é um sinal de servidão por dívida?", options: ["Recebe um recibo de salário todos os meses", "Uma dívida que não para de crescer e não pode sair até ela estar paga", "Tem um dia de folga por semana", "Pode ligar para a sua família"], answer: 1, why: "Uma dívida que cresce e que impede você de sair é servidão por dívida, uma forma de trabalho forçado." },
          { objective: "O5", q: "Qual é um lugar onde um trabalhador migrante com problemas pode pedir ajuda?", options: ["O agente que ficou com o passaporte", "Um desconhecido na internet que pede uma taxa", "O empregador que não está a pagar", "A embaixada ou o consulado do seu país"], answer: 3, why: "A embaixada ou o consulado ajuda os seus cidadãos no estrangeiro, junto com o serviço do trabalho, a polícia, a OIM e as linhas de ajuda." },
          { objective: "O6", q: "Onde deve obter os números das linhas de ajuda para o seu plano?", options: ["Nas páginas oficiais do governo ou da embaixada que você mesmo procurou", "Na mensagem do recrutador", "Num comentário nas redes sociais", "Não precisa deles"], answer: 0, why: "Os números das páginas oficiais são verdadeiros; um burlão pode enviar números de ajuda falsos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Migrar para Trabalhar com Segurança",
    questions: [
      { objective: "O1", q: "O que é um caminho legal para trabalhar no estrangeiro?", options: ["Viajar com visto de turista e arranjar trabalho", "Pagar a um contrabandista para atravessar a fronteira", "Trabalhar com o visto ou a autorização de trabalho certa do governo do país de destino", "Usar o passaporte de um amigo"], answer: 2, why: "Um caminho legal usa o visto ou a autorização que o governo do país de destino emite para esse trabalho." },
      { objective: "O1", q: "Que fonte é oficial?", options: ["O site da embaixada do país de destino", "O vídeo de um recrutador", "Um grupo de conversa sobre empregos", "Um cartaz numa paragem de autocarro"], answer: 0, why: "As embaixadas e os sites de imigração são geridos pelos governos." },
      { objective: "O1", q: "Porque é que o contrabando pode ser perigoso para um trabalhador?", options: ["É sempre mais barato", "Os contrabandistas podem tornar-se traficantes, e você não tem proteção legal", "Dá-lhe uma autorização de trabalho", "As embaixadas preferem-no"], answer: 1, why: "Sem situação legal é fácil ameaçar você, e os contrabandistas podem explorá-lo." },
      { objective: "O2", q: "Porque é que a licença de uma agência de recrutamento importa?", options: ["Faz o emprego pagar mais", "Quer dizer que o emprego é garantido", "Deixa a agência cobrar qualquer taxa", "O governo conhece a agência e pode agir quando há queixas"], answer: 3, why: "Uma licença põe a agência sob as regras do governo e os sistemas de queixa." },
      { objective: "O2", q: "Nas Filipinas, que serviço deixa verificar a situação de uma agência de recrutamento?", options: ["O Departamento dos Trabalhadores Migrantes (DMW)", "Uma página privada nas redes sociais", "A companhia aérea", "Qualquer banco"], answer: 0, why: "O DMW dá licenças às agências e oferece uma verificação da situação das agências pela internet." },
      { objective: "O2", q: "Que duas coisas devem corresponder na lista oficial?", options: ["O telefone e o email do agente", "O logótipo e as cores da agência", "O nome exato da agência e o número da licença", "O tamanho do escritório e o número de funcionários"], answer: 2, why: "Os agentes falsos copiam nomes verdadeiros, por isso o nome e o número da licença têm de corresponder a uma licença válida." },
      { objective: "O3", q: "Segundo as orientações da OIT sobre recrutamento justo, quem deve pagar as taxas de recrutamento?", options: ["O trabalhador", "A família do trabalhador", "O empregador, e não o trabalhador", "A aldeia do trabalhador"], answer: 2, why: "As orientações dizem que não se deve cobrar aos trabalhadores taxas de recrutamento nem custos ligados a elas: quem paga é o empregador." },
      { objective: "O3", q: "Qual é um sinal de alerta de um emprego falso?", options: ["Um contrato por escrito antes de pagar", "Uma agência com licença e com morada", "Um salário normal para o trabalho", "Um salário muito mais alto do que o normal sem experiência"], answer: 3, why: "As ofertas que parecem boas demais para ser verdade são uma forma comum de apanhar as pessoas numa armadilha." },
      { objective: "O3", q: "Um recrutador diz para esconder o emprego da sua família. O que isto sugere?", options: ["Um sinal de alerta; os empregos honestos não precisam de segredo", "Uma regra normal da empresa", "Um sinal de um salário alto", "Uma exigência do visto"], answer: 0, why: "O segredo afasta você das pessoas que podiam avisá-lo ou ajudá-lo." },
      { objective: "O3", q: "Dizem-lhe para dizer no aeroporto que é turista. O que faz?", options: ["Faz isso; toda a gente faz", "Para: é um sinal de alerta de um caminho ilegal e perigoso", "Pede um salário mais alto", "Mente, mas leva dinheiro a mais"], answer: 1, why: "Mandarem-no mentir às autoridades quer dizer que o caminho não é legal e que pode ficar preso numa armadilha." },
      { objective: "O4", q: "Qual destas coisas um contrato justo tem de dizer?", options: ["A idade do agente", "A sua religião", "O salário e como é pago", "O seu nome nas redes sociais"], answer: 2, why: "O salário, o horário, o local, os custos e as condições de regresso têm de estar por escrito." },
      { objective: "O4", q: "Porque fotografar cada página que assina?", options: ["Para a publicar na internet", "Para provar o que combinou se o contrato for mudado mais tarde", "Para mostrar aos amigos", "Porque o agente pede"], answer: 1, why: "As fotos protegem você contra a troca de contrato." },
      { objective: "O4", q: "O contrato está numa língua que não sabe ler. Qual é o melhor passo?", options: ["Pedi-lo numa língua que entende, ou pedir a uma pessoa de confiança que o explique, antes de assinar", "Assinar depressa", "Pedir ao agente que assine por você", "Ignorá-lo"], answer: 0, why: "Deve entender todas as condições antes de assinar." },
      { objective: "O5", q: "Qual é uma das três partes do tráfico de pessoas na definição da ONU?", options: ["Um bilhete de avião", "Um anúncio de emprego", "Um visto", "A exploração como finalidade"], answer: 3, why: "O tráfico tem um ato, um meio e uma finalidade: a exploração." },
      { objective: "O5", q: "Qual é um sinal de trabalho forçado?", options: ["Receber o salário a tempo", "Dizerem-lhe que a polícia o vai prender se sair", "Ter um dia de folga", "Guardar o seu próprio passaporte"], answer: 1, why: "As ameaças para impedir um trabalhador de sair são um sinal de trabalho forçado." },
      { objective: "O5", q: "Para uma criança com menos de 18 anos, o que é verdade sobre o tráfico?", options: ["Só é tráfico se for usada a força", "As crianças não podem ser vítimas de tráfico", "Não é preciso força nem mentiras para ser tráfico", "Só os pais podem denunciar"], answer: 2, why: "Segundo o Protocolo da ONU, recrutar ou levar uma criança para a explorar é tráfico mesmo sem força nem mentiras." },
      { objective: "O5", q: "Qual é um lugar onde pedir ajuda no estrangeiro?", options: ["Um escritório da OIM", "O empregador que tem o seu passaporte", "Um agiota", "Um agente sem licença"], answer: 0, why: "A OIM, as embaixadas, os serviços do trabalho, a polícia e as linhas de ajuda oficiais podem ajudar." },
      { objective: "O6", q: "O que deve pôr no seu plano de ajuda?", options: ["Só as suas músicas preferidas", "O PIN do seu banco", "O seu passaporte entregue ao agente", "Um contacto de confiança, dias de contacto, uma palavra-código e números de ajuda oficiais"], answer: 3, why: "Isto garante que alguém repara se você estiver com problemas e que sabe a quem ligar." },
      { objective: "O6", q: "Onde deve guardar uma cópia do seu passaporte?", options: ["Publicada nas redes sociais", "Com uma pessoa de confiança em casa e num lugar seguro que possa abrir", "Só com o recrutador", "Em lado nenhum"], answer: 1, why: "As cópias com uma pessoa de confiança e num lugar privado e seguro ajudam se o passaporte for perdido ou tirado." },
      { objective: "O6", q: "Porque manter um registo das suas horas e do seu salário no estrangeiro?", options: ["Para se mostrar", "Porque o empregador pede", "Ajuda a embaixada ou o serviço do trabalho a ajudar você se alguma coisa correr mal", "É preciso para um visto de turista"], answer: 2, why: "Os registos são a prova do que trabalhou e do que lhe pagaram." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 10, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Informação oficial", objective: "O1", notYet: "Usa só a página de um agente, de um amigo ou das redes sociais.", meets: "Indica a página oficial de imigração do país de destino e a embaixada dele no seu país.", exceeds: "Indica também a página do ministério do trabalho ou da migração do seu país e o que cada página diz que precisa." },
      { name: "Agência verificada", objective: "O2", notYet: "Nenhuma verificação da agência, ou a verificação usou um link do agente.", meets: "O nome e o número da licença da agência foram verificados na lista oficial e são válidos hoje.", exceeds: "Verificou também se o pedido de trabalhadores ou a vaga está aprovado, quando o seu país o exige." },
      { name: "Custos e sinais de alerta", objective: "O3", notYet: "Os custos não estão na lista, ou uma taxa paga pelo trabalhador é aceite sem perguntas.", meets: "Cada custo está na lista com quem o paga, e há pelo menos quatro sinais para parar escritos.", exceeds: "Verificou as regras oficiais do seu país sobre as taxas e escreveu onde verificou." },
      { name: "Detalhes do contrato", objective: "O4", notYet: "Menos de seis dos dez pontos do contrato foram verificados.", meets: "Os dez pontos do contrato estão na lista e os que faltam estão marcados.", exceeds: "Escreveu as perguntas a fazer por escrito para cada ponto que falta." },
      { name: "Plano de ajuda", objective: "O5", notYet: "Nenhum número de ajuda, ou números tirados do recrutador.", meets: "A embaixada e pelo menos uma linha de ajuda oficial, procuradas em páginas oficiais, e também o número de emergência local.", exceeds: "Indica também um escritório da OIM ou uma organização de trabalhadores perto do local de trabalho." },
      { name: "Documentos e contactos", objective: "O6", notYet: "Sem cópias dos documentos nem contacto de confiança.", meets: "Cópias dos documentos guardadas em casa e num lugar seguro, um contacto de confiança e dias de contacto.", exceeds: "Também uma palavra-código e um plano para registar as horas e o salário." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter verificado a licença de uma agência antes de pagar ou assinar (seguimento após 30 dias)",
      "Alunos que dizem ter recusado ou denunciado uma oferta de emprego que lhes pedia uma taxa ou o passaporte",
      "As organizações parceiras dizem que menos alunos perdem dinheiro com recrutadores falsos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para procurar as páginas oficiais",
      "Papel e caneta para as listas e as histórias de prática",
      "Os endereços da autoridade do trabalho ou da migração do seu país e da lista de agências (o facilitador pode procurá-los antes)",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Antes da sessão, encontre a lista oficial do seu país das agências com licença, o serviço para trabalhadores migrantes e os números das linhas de ajuda oficiais, e verifique se estão atualizados.",
      "Não dê conselhos sobre vistos nem conselhos jurídicos; mande os alunos para a embaixada, a página oficial de imigração ou um advogado com licença.",
      "Nunca peça aos alunos para partilhar números verdadeiros de passaporte, identificação ou banco; use espaços em branco como [número do passaporte].",
      "Alguns alunos ou as suas famílias podem ter sido enganados ou explorados. Fale sem culpar ninguém e partilhe os serviços de ajuda locais em privado.",
      "Se um aluno disser que ele ou outra pessoa está em perigo agora, ajude-o a ligar primeiro para o número de emergência local."
    ]
  }
};
