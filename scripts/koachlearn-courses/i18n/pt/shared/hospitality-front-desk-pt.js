"use strict";

// Koach Learn course (Portuguese translation of shared/hospitality-front-desk.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US names (AHLEI, CFDR, ADA, DHS, 911, dol.gov) are kept: the course is about US hotel rules, with local emergency numbers mentioned where the English does.

module.exports = {
  id: "hospitality-front-desk-pt",
  lang: "pt",
  translationOf: "hospitality-front-desk",
  category: "Workforce Development",
  name: "Carreiras em Hotelaria: Receção e Atendimento ao Hóspede",
  skills: "Fazer o check-in e o check-out dos hóspedes, Ler a conta do hóspede (fólio), Resolver problemas dos hóspedes, Proteger a privacidade e a segurança dos hóspedes, Fazer um turno na receção, Planear a certificação CFDR",
  outcome: "fazer um turno na receção de um hotel da forma certa: fazer o check-in e o check-out de um hóspede, explicar uma conta, resolver um problema com calma, proteger a privacidade e a segurança dos hóspedes e seguir um plano escrito para conseguir um emprego na receção e uma certificação.",
  about: [
    "Os hotéis contratam rececionistas em todas as cidades e em muitas vilas pequenas, e muitos contratam pessoas sem experiência em hotelaria se forem simpáticas, de confiança e cuidadosas. Este curso é para quem procura emprego, jovens adultos, pessoas que voltam para casa depois da prisão e qualquer pessoa que queira dar um primeiro passo na hotelaria.",
    "Você vai praticar o trabalho real da receção: fazer o check-in de um hóspede, ler a conta do hóspede (o fólio), fazer o check-out, lidar com um hotel cheio ou com um hóspede chateado e seguir as regras que protegem os hóspedes, como nunca dizer o número do quarto em voz alta.",
    "O curso prepara você para o emprego e para uma certificação de receção, como a START Certified Front Desk Representative (CFDR) do American Hotel & Lodging Educational Institute (AHLEI), um instituto de formação em hotelaria dos Estados Unidos. Este curso não dá essa certificação; você ganha-a fazendo o curso e o exame do próprio AHLEI.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" e uma verificação rápida de duas perguntas. Há uma verificação de conhecimentos depois de cada capítulo, um questionário de 20 perguntas no final e uma tarefa final que pode mostrar numa entrevista."
  ],
  finalTask: "Prepare o seu kit para um emprego na receção: (1) uma lista de tarefas de uma página para o início, o meio e o fim de um turno na receção; (2) um guião de check-in que pode dizer em voz alta, com a regra da privacidade incluída; (3) um plano de 30 dias com datas: três hotéis onde vai candidatar-se, quando vai praticar o guião com alguém e quando vai ver a página da CFDR do AHLEI ou perguntar a um empregador sobre formação para a receção.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos à procura de um primeiro emprego ou de um emprego melhor: pessoas à procura de trabalho, pessoas que voltam para casa depois da prisão, imigrantes, pessoas que mudam de profissão e jovens em programas de emprego. A maioria já usou um telefone e falou com clientes, mas nunca trabalhou num hotel.",
    startingPoint: "Sabem cumprimentar pessoas e usar um smartphone. A maioria nunca usou o programa informático de um hotel, nunca leu a conta de um hóspede nem lidou com pagamentos, chaves e regras de privacidade dos hóspedes.",
    gap: "Os hotéis contratam para a receção durante todo o ano e muitas vezes formam no próprio trabalho, mas querem pessoas que já conheçam os passos básicos do check-in e do check-out, consigam manter a calma com hóspedes chateados e protejam a privacidade e a segurança dos hóspedes. Conhecer esses passos, e ter um plano para uma certificação, torna o aluno mais fácil de contratar e ajuda-o a manter o emprego.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 7.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca; toda a prática pode ser feita em papel",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e as consultas",
      "Não é preciso nenhum programa de hotel verdadeiro; os sistemas mudam de hotel para hotel, por isso o curso ensina os passos, não os nomes dos menus",
      "Privacidade: a prática usa só hóspedes, números de cartão e números de quarto inventados",
      "As regras de contratação mudam: os limites de idade para adolescentes e as verificações de registo criminal variam por estado e por empregador"
    ],
    prerequisites: "Nenhum. O curso \"Excelência no Atendimento ao Cliente\" é um bom complemento para as competências gerais de atendimento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um anúncio de emprego para a receção", action: "listar as principais tarefas da receção, as competências que os hotéis pedem e uma certificação que combina com o emprego", standard: "indicando pelo menos quatro tarefas e onde verificar a certificação" },
    { id: "O2", condition: "Com um hóspede de prática que tem uma reserva", action: "fazer o check-in do hóspede passo a passo, desde o cumprimento até à entrega da chave", standard: "sem saltar nenhum passo e sem dizer o número do quarto em voz alta" },
    { id: "O3", condition: "Com um fólio de prática no momento do check-out", action: "explicar cada valor do fólio e fazer o check-out do hóspede", standard: "com todos os valores explicados e qualquer valor errado enviado a um gerente ou corrigido segundo as regras" },
    { id: "O4", condition: "Com um hóspede chateado ou um hotel cheio", action: "resolver o problema do hóspede com um pedido de desculpa, opções e uma nota de seguimento", standard: "mantendo a calma e dando ao hóspede pelo menos duas opções" },
    { id: "O5", condition: "Com uma situação de privacidade, segurança ou emergência na receção", action: "responder segundo as regras de segurança e privacidade do hotel", standard: "nunca dando o número do quarto nem a chave de um hóspede, e ligando para o 911 ou para um gerente quando for preciso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Trabalhar na receção",
      lessons: [
        {
          title: "O trabalho na receção e o caminho até ele",
          objectives: ["O1"],
          minutes: 5,
          goal: "Listar as principais tarefas da receção e a certificação que pode ajudar você a ser contratado.",
          text: [
            "A receção é o centro de um hotel. Os rececionistas (também chamados agentes de atendimento ao hóspede) recebem os hóspedes, fazem o check-in e o check-out, fazem reservas, atendem o telefone, tratam dos pagamentos e das chaves, resolvem problemas e passam mensagens à limpeza dos quartos e à manutenção. O auditor noturno trabalha durante a noite, verifica os números do dia e fecha o dia de trabalho.",
            "Os hotéis contratam primeiro pela atitude e pela confiança. Os anúncios pedem muitas vezes uma maneira simpática, falar com clareza, conhecimentos básicos de computador, cuidado com dinheiro e cartões e disponibilidade para trabalhar à noite, aos fins de semana e nos feriados. Falar uma segunda língua é uma vantagem em muitas cidades.",
            "Uma certificação pode ajudar você a destacar-se. O American Hotel & Lodging Educational Institute (AHLEI) oferece o curso e o exame online START Certified Front Desk Representative (CFDR). Este curso prepara você para o emprego e para esse tipo de exame; não dá a certificação. Veja os detalhes atuais na página do AHLEI, ou pergunte a um hotel se paga a formação. Alguns empregadores também oferecem aprendizagens, listadas em apprenticeship.gov.",
            "Adolescentes: os empregos e as horas que pode fazer dependem da sua idade e do seu estado. Veja dol.gov/youthrules e o serviço de trabalho do seu estado. Se tem registo criminal, muitos hotéis contratam de forma justa: seja honesto na candidatura e esteja pronto para falar do que fez desde então."
          ],
          words: [["Rececionista", "o trabalhador do hotel que faz o check-in e o check-out dos hóspedes e os ajuda durante a estadia; também chamado agente de atendimento ao hóspede."], ["Auditor noturno", "o rececionista do turno da noite que verifica os valores e pagamentos do dia e fecha o dia de trabalho."], ["Certificação", "um certificado que mostra que você passou num curso ou num exame."], ["AHLEI", "o American Hotel & Lodging Educational Institute, um instituto dos Estados Unidos que oferece formação em hotelaria e exames de certificação."]],
          slides: [
            { title: "O que a receção faz", bullets: ["Receber os hóspedes e fazer o check-in e o check-out", "Fazer reservas e atender o telefone", "Tratar dos pagamentos e das chaves dos quartos", "Resolver problemas e passar mensagens às outras equipas"] },
            { title: "O que os hotéis procuram", bullets: ["Simpatia, clareza e confiança", "Cuidado com dinheiro, cartões e chaves", "Conhecimentos básicos de computador", "Noites, fins de semana e feriados"] },
            { title: "Uma certificação que pode ajudar", bullets: ["AHLEI START Certified Front Desk Representative (CFDR)", "Este curso prepara você; o exame do AHLEI dá a certificação", "Veja os detalhes atuais na página do AHLEI"] },
            { title: "Verifique as suas próprias regras", bullets: ["Adolescentes: dol.gov/youthrules e o serviço de trabalho do seu estado", "Aprendizagens: apprenticeship.gov", "Registo criminal: seja honesto e mostre o que fez desde então"] }
          ],
          sources: [
            { name: "AHLEI: START Certified Front Desk Representative (CFDR) Online Course and Exam", url: "https://shopahlei.servsafebrands.com/start-cfdr-online-course-and-exam" },
            { name: "AHLEI: exames de certificação", url: "https://shopahlei.servsafebrands.com/training-and-certification/resourcetype/certification-exam" },
            { name: "Apprenticeship.gov (Departamento do Trabalho dos EUA)", url: "https://www.apprenticeship.gov/" },
            { name: "YouthRules! (Departamento do Trabalho dos EUA)", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Encontre um anúncio verdadeiro para rececionista ou agente de atendimento ao hóspede perto de si (num site de emprego ou na página de carreiras de um hotel). Em papel, escreva quatro tarefas que o anúncio indica, três competências que pede e os horários dos turnos. Faça um círculo à volta de uma competência que já tem e de uma que precisa de desenvolver.",
          youCanNow: "dizer o que um rececionista faz, indicar as competências que os hotéis pedem e indicar uma certificação que pode ajudar e onde verificá-la.",
          quickCheck: [
            { objective: "O1", q: "Qual destas é uma tarefa normal da receção?", options: ["Arranjar o ar condicionado de um quarto", "Cozinhar o pequeno-almoço dos hóspedes", "Fazer o check-in e o check-out dos hóspedes", "Limpar a piscina"], answer: 2, why: "O check-in e o check-out são o trabalho principal da receção; reparações, cozinha e limpeza são de outras equipas." },
            { objective: "O1", q: "O que faz este curso pela certificação CFDR?", options: ["Dá o certificado CFDR", "Prepara você; a certificação ganha-se com o curso e o exame do AHLEI", "Substitui qualquer formação", "É o mesmo que uma licença do estado"], answer: 1, why: "O AHLEI dá a CFDR depois do seu próprio curso e exame; este curso só prepara você." }
          ]
        },
        {
          title: "Fazer o check-in de um hóspede",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fazer o check-in de um hóspede de prática em sete passos, do cumprimento à chave.",
          text: [
            "O check-in é o primeiro momento real do hóspede com o hotel. Faça-o sempre pela mesma ordem para não esquecer nada, mesmo quando há uma fila.",
            "Cumprimente o hóspede, encontre a reserva e verifique se o documento de identificação com fotografia corresponde ao nome. Confirme as datas, o tipo de quarto e a tarifa. Receba o cartão de pagamento, ou um depósito segundo as regras do hotel; muitos hotéis fazem uma retenção no cartão para a estadia e os gastos extra, e você explica isso com palavras simples.",
            "Entregue o cartão-chave e aponte para o número do quarto escrito na capa do cartão ou num papel, mas não diga o número do quarto em voz alta: outras pessoas no átrio podem ouvir. Explique o básico (Wi-Fi, pequeno-almoço, hora do check-out) e pergunte se precisa de mais alguma coisa.",
            "Todos os hotéis usam um sistema informático, chamado sistema de gestão hoteleira (PMS, em inglês), para registar tudo isto. Os sistemas são diferentes, e o hotel vai formar você no seu próprio sistema; os passos continuam os mesmos."
          ],
          steps: ["Cumprimente o hóspede com um sorriso e diga o seu nome.", "Encontre a reserva e verifique se o documento com fotografia corresponde a ela.", "Confirme as datas, o tipo de quarto e a tarifa.", "Receba o cartão de pagamento ou o depósito e explique qualquer retenção.", "Prepare o cartão-chave e escreva o número do quarto na capa do cartão; não o diga em voz alta.", "Explique o Wi-Fi, o pequeno-almoço e a hora do check-out.", "Pergunte \"Posso ajudar em mais alguma coisa?\" e deseje uma boa estadia."],
          words: [["Reserva", "um pedido que guarda um quarto para um hóspede em certas datas."], ["Tarifa", "o preço do quarto por noite."], ["Retenção (autorização)", "um valor que o hotel bloqueia no cartão do hóspede para cobrir a estadia e os gastos extra; não é o pagamento final."], ["Sistema de gestão hoteleira (PMS)", "o sistema informático do hotel para reservas, quartos, check-in, contas e check-out."]],
          slides: [
            { title: "Check-in, sempre da mesma maneira", bullets: ["Cumprimente com um sorriso e diga o seu nome", "Encontre a reserva e verifique o documento com fotografia", "Confirme as datas, o tipo de quarto e a tarifa"] },
            { title: "Pagamento e chaves", bullets: ["Receba o cartão ou o depósito segundo as regras do hotel", "Explique qualquer retenção com palavras simples", "Prepare o cartão-chave"] },
            { title: "A regra da privacidade", bullets: ["Escreva o número do quarto na capa do cartão", "Aponte para ele; nunca o diga em voz alta", "Outras pessoas no átrio podem ouvir"] },
            { title: "Termine bem", bullets: ["Wi-Fi, pequeno-almoço e hora do check-out", "\"Posso ajudar em mais alguma coisa?\"", "Deseje uma boa estadia"] }
          ],
          tryIt: "Com um amigo ou em frente ao espelho, faça o check-in de um hóspede inventado: \"Sra. Rivera, duas noites, um quarto com cama king.\" Diga os sete passos em voz alta. Escreva o quarto 214 numa capa de cartão em papel e aponte para ele em vez de o dizer. Faça isto duas vezes, a segunda em menos de três minutos.",
          youCanNow: "fazer o check-in de um hóspede em sete passos e entregar a chave sem dizer o número do quarto em voz alta.",
          quickCheck: [
            { objective: "O2", q: "Está a entregar a chave a um hóspede. O que faz com o número do quarto?", options: ["Diz em voz alta para ele não esquecer", "Diz a toda a fila para todos saberem", "Envia por mensagem a um amigo do hóspede", "Escreve-o na capa do cartão e aponta para ele"], answer: 3, why: "Dizer o número do quarto em voz alta deixa estranhos no átrio saber onde o hóspede está." },
            { objective: "O2", q: "O que verifica logo depois de encontrar a reserva?", options: ["Que o documento com fotografia corresponde ao nome da reserva", "O emprego do hóspede", "Como o hóspede chegou ao hotel", "A morada do hóspede nas redes sociais"], answer: 0, why: "Comparar o documento com a reserva garante que o quarto vai para a pessoa certa." }
          ]
        },
        {
          title: "Ler o fólio e fazer o check-out de um hóspede",
          objectives: ["O3"],
          minutes: 5,
          goal: "Explicar cada valor do fólio de um hóspede e fazer o check-out.",
          text: [
            "O fólio é a conta do hóspede. Mostra a tarifa do quarto de cada noite, os impostos e qualquer gasto extra, como estacionamento, serviço de quartos, minibar ou uma taxa por check-out tardio, e cada pagamento.",
            "No check-out, cumprimente o hóspede, pergunte como foi a estadia e imprima ou envie o fólio por e-mail. Reveja-o linha a linha se o hóspede quiser, e ouça qualquer coisa que tenha corrido mal na estadia.",
            "Se o hóspede questionar um valor, mantenha a calma e vejam-no juntos. Se for um erro claro que o hotel deixa você corrigir, corrija-o e diga isso. Se não puder retirá-lo, diga \"Vou chamar o meu gerente para resolvermos isto\", e não discuta. Muitos hotéis também oferecem check-out rápido por telefone, pela televisão ou por uma aplicação.",
            "Proteja os dados do cartão: nunca escreva nem leia em voz alta o número completo de um cartão. Os fólios mostram só os últimos algarismos."
          ],
          steps: ["Cumprimente o hóspede e pergunte como foi a estadia.", "Imprima ou envie o fólio por e-mail.", "Reveja cada valor se o hóspede pedir.", "Corrija um erro claro se o seu hotel deixar; se não, chame o gerente.", "Receba o pagamento final, agradeça ao hóspede e convide-o a voltar."],
          words: [["Fólio", "a conta do hóspede, com os valores do quarto, os impostos, os extras e os pagamentos."], ["Extras (incidentais)", "gastos a mais durante a estadia, como estacionamento, comida ou chamadas telefónicas."], ["Check-out tardio", "sair depois da hora normal do check-out, às vezes com uma taxa."], ["Check-out rápido", "fazer o check-out sem passar pela receção, por telefone, pela televisão ou por uma aplicação."]],
          slides: [
            { title: "O fólio é a conta do hóspede", bullets: ["A tarifa do quarto de cada noite, mais os impostos", "Extras: estacionamento, comida, check-out tardio", "Cada pagamento feito"] },
            { title: "Fazer o check-out", bullets: ["Pergunte como foi a estadia", "Imprima ou envie o fólio por e-mail", "Reveja os valores se o hóspede pedir"] },
            { title: "Um valor é questionado", bullets: ["Mantenha a calma e vejam-no juntos", "Corrija um erro claro se tiver autorização", "Se não: \"Vou chamar o meu gerente.\""] },
            { title: "Proteja os dados do cartão", bullets: ["Nunca escreva o número completo de um cartão", "Nunca o leia em voz alta", "Os fólios mostram só os últimos algarismos"] }
          ],
          tryIt: "Faça em papel um fólio de prática para um hóspede inventado: duas noites a $129, o imposto numa linha à parte (use qualquer valor inventado), estacionamento a $15 por noite e um valor de $12 de serviço de quartos que o hóspede diz que não pediu. Some tudo e depois escreva o que diria sobre cada linha e como trataria o valor do serviço de quartos.",
          youCanNow: "ler um fólio linha a linha, explicar cada valor e tratar com calma um valor questionado, segundo as regras do hotel.",
          quickCheck: [
            { objective: "O3", q: "O que é um fólio?", options: ["A chave do quarto do hóspede", "A conta do hóspede, com os valores e os pagamentos", "Uma lista de regras do hotel", "O horário da limpeza dos quartos"], answer: 1, why: "O fólio mostra cada valor do quarto, imposto, extra e pagamento da estadia." },
            { objective: "O3", q: "Um hóspede questiona um valor que você não pode retirar. O que diz?", options: ["\"Azar, tem de pagar.\"", "\"Eu apago isso e pronto.\"", "\"Vou chamar o meu gerente para resolvermos isto.\"", "\"Ligue para o seu banco.\""], answer: 2, why: "Chamar um gerente mantém você calmo e dentro das regras, e dá uma resposta ao hóspede." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Trabalhar na receção",
        questions: [
          { objective: "O1", q: "Que trabalhador verifica os valores do dia durante a noite e fecha o dia de trabalho?", options: ["O auditor noturno", "O empregado da limpeza", "O cozinheiro", "O manobrista que estaciona os carros"], answer: 0, why: "O auditor noturno confere os valores e os pagamentos do dia e fecha o dia." },
          { objective: "O1", q: "Onde verifica os detalhes atuais da certificação START CFDR?", options: ["Numa publicação nas redes sociais", "Com um amigo que ouviu falar dela", "Em qualquer site que venda um certificado", "Na página oficial do AHLEI"], answer: 3, why: "É o AHLEI que oferece a CFDR, por isso a sua página oficial tem os detalhes atuais." },
          { objective: "O2", q: "No check-in, num átrio cheio, um hóspede pergunta: \"Qual é o meu quarto?\" O que faz?", options: ["Diz o número em voz alta", "Aponta para o número escrito na capa do cartão", "Recusa-se a dizer", "Escreve-o no quadro do átrio"], answer: 1, why: "Apontar para o número escrito informa o hóspede sem informar todas as outras pessoas." },
          { objective: "O2", q: "Porque é que explica a retenção no cartão no check-in?", options: ["Para o hóspede saber que um valor fica bloqueado para a estadia e os extras, e não é o pagamento final", "Para o hóspede pagar duas vezes", "Porque é a conta final", "As retenções são secretas e não se explicam"], answer: 0, why: "Uma explicação clara evita surpresas e reclamações quando os hóspedes veem a retenção no cartão." },
          { objective: "O3", q: "Um fólio mostra estacionamento de três noites, mas o hóspede ficou duas. Qual é o melhor primeiro passo?", options: ["Ignorar", "Dizer ao hóspede que ele está enganado", "Verem juntos e corrigir ou chamar um gerente, segundo as regras", "Cobrar mais uma noite para os números baterem certo"], answer: 2, why: "Verificar juntos e seguir as regras para correções trata o hóspede com justiça." }
        ]
      }
    },
    {
      name: "Capítulo 2: Problemas, privacidade e o seu turno",
      lessons: [
        {
          title: "Resolver problemas dos hóspedes, mesmo com o hotel cheio",
          objectives: ["O4"],
          minutes: 5,
          goal: "Resolver o problema de um hóspede com um pedido de desculpa, duas opções e uma nota de seguimento.",
          text: [
            "Nos hotéis, as coisas correm mal: um quarto não está pronto, o ar condicionado faz barulho, uma reserva desapareceu. O hóspede está cansado e quer uma solução. O seu trabalho é manter a calma, assumir o problema e oferecer opções.",
            "Use quatro passos: ouça sem interromper, peça desculpa (\"Peço desculpa, não é essa a estadia que queremos para si\"), ofereça pelo menos duas opções (outro quarto, uma reparação até uma certa hora, uma oferta do gerente) e depois faça o seguimento e escreva-o no registo do turno para o turno seguinte saber.",
            "Às vezes um hotel tem reservas a mais e um hóspede com reserva fica sem quarto. Os hotéis podem \"transferir\" o hóspede: reservar-lhe um quarto num hotel próximo. Siga a regra do seu hotel para estas transferências e chame um gerente. Nunca prometa dinheiro ou noites grátis que não tem autorização para dar.",
            "Se um hóspede gritar, ameaçar ou se tornar perigoso, você não tem de resolver isso sozinho. Afaste-se e chame o seu gerente ou a segurança."
          ],
          steps: ["Ouça o problema todo sem interromper.", "Peça desculpa e agradeça ao hóspede por lhe dizer.", "Ofereça pelo menos duas opções que tem autorização para dar.", "Faça o que prometeu, ou chame um gerente.", "Faça o seguimento com o hóspede e escreva-o no registo do turno."],
          words: [["Reservas a mais (overbooking)", "quando o hotel tem mais reservas do que quartos."], ["Transferir um hóspede", "reservar outro hotel próximo para um hóspede que não pode ter quarto, segundo a regra do hotel; em inglês, \"walking a guest\"."], ["Registo do turno", "um caderno ou registo no computador onde a receção escreve problemas e mensagens para o turno seguinte."]],
          slides: [
            { title: "Quatro passos para qualquer problema", bullets: ["Ouça sem interromper", "Peça desculpa e agradeça", "Ofereça pelo menos duas opções", "Faça o seguimento e escreva no registo"] },
            { title: "Quando o hotel está cheio", bullets: ["Os hotéis podem \"transferir\" um hóspede para um hotel próximo", "Siga a regra das transferências e chame um gerente", "Nunca prometa o que não pode dar"] },
            { title: "Se um hóspede se tornar perigoso", bullets: ["Afaste-se do balcão", "Chame o seu gerente ou a segurança", "Não enfrente ameaças sozinho"] }
          ],
          tryIt: "Escreva o que diria a este hóspede: \"Reservei um quarto com duas camas e deram-me um com uma cama king. Os meus filhos estão comigo.\" Escreva o seu pedido de desculpa, duas opções que poderia oferecer e a nota de uma linha que poria no registo do turno. Depois diga tudo em voz alta.",
          youCanNow: "acalmar um hóspede chateado, oferecer duas opções, fazer o seguimento e registar o problema, e saber quando chamar um gerente.",
          quickCheck: [
            { objective: "O4", q: "O quarto de um hóspede não está pronto. Que resposta segue os quatro passos?", options: ["\"Não é culpa minha, volte mais tarde.\"", "\"Os quartos nunca estão prontos a horas.\"", "\"Tome, uma semana grátis.\"", "\"Peço desculpa. Posso guardar as suas malas e ligar-lhe até às 15h, ou ver agora outro quarto.\""], answer: 3, why: "Pede desculpa e oferece duas opções que o rececionista pode dar." },
            { objective: "O4", q: "O hotel tem reservas a mais e um hóspede está sem quarto. O que faz?", options: ["Segue a regra das transferências e chama um gerente", "Diz ao hóspede para dormir no átrio", "Promete devolver o dinheiro de um mês inteiro", "Cancela o quarto de outro hóspede sem perguntar"], answer: 0, why: "Transferir um hóspede segundo a regra, com um gerente, é a forma justa de os hotéis lidarem com reservas a mais." }
          ]
        },
        {
          title: "Privacidade dos hóspedes, chaves e segurança",
          objectives: ["O5"],
          minutes: 6,
          goal: "Responder a situações de privacidade, chaves e segurança segundo as regras do hotel.",
          text: [
            "A privacidade dos hóspedes protege as pessoas. Nunca diga a quem liga ou a um visitante se alguém está hospedado no hotel nem em que quarto está. Diga \"Não posso dar informações sobre os hóspedes, mas posso ligar para o quarto se a pessoa estiver hospedada aqui\" ou anote uma mensagem. Nunca dê uma chave a alguém cujo nome não está no quarto sem seguir o processo de identificação do hotel.",
            "Cartões-chave: verifique a identificação antes de fazer uma nova chave, nunca deixe cartões-chave nem a máquina das chaves ao alcance dos hóspedes e comunique logo a perda de uma chave-mestra.",
            "Animais de serviço: segundo a ADA (uma lei dos Estados Unidos), quando não é evidente, o pessoal só pode fazer duas perguntas: o cão é necessário por causa de uma deficiência, e que trabalho ou tarefa foi treinado para fazer. Não pode pedir documentos nem cobrar uma taxa de animal de estimação por um animal de serviço.",
            "Esteja atento aos sinais de tráfico de seres humanos, como uma pessoa que parece controlada por outra, ensinada sobre o que dizer ou com medo. Não confronte ninguém. Avise o seu gerente e siga a regra do hotel; pode denunciar à Linha Nacional contra o Tráfico de Seres Humanos dos EUA pelo 1-888-373-7888. Em qualquer emergência (incêndio, problema de saúde, violência), ligue primeiro para o 911 (ou para o número de emergência local) e depois para o seu gerente."
          ],
          steps: ["Nunca confirme que um hóspede está hospedado nem dê o número do quarto.", "Ofereça-se para ligar a chamada para o quarto ou anotar uma mensagem.", "Verifique a identificação antes de fazer qualquer nova chave.", "Para um animal de serviço, faça só as duas perguntas permitidas, quando for preciso.", "Comunique sinais de tráfico ao seu gerente; não confronte ninguém.", "Numa emergência, ligue primeiro para o 911 e depois para o seu gerente."],
          words: [["Controlo das chaves", "as regras para fazer, guardar e controlar as chaves dos quartos, para que só as pessoas certas entrem."], ["ADA", "a Americans with Disabilities Act, a lei dos Estados Unidos que protege as pessoas com deficiência, incluindo o uso de animais de serviço."], ["Animal de serviço", "segundo a ADA, um cão treinado para fazer trabalhos ou tarefas para uma pessoa com deficiência."], ["Tráfico de seres humanos", "usar a força, o engano ou ameaças para obrigar alguém a trabalhar ou a ter atos sexuais."]],
          slides: [
            { title: "Proteja a privacidade dos hóspedes", bullets: ["Nunca confirme quem está hospedado", "Nunca dê o número de um quarto", "\"Posso ligar para o quarto ou anotar uma mensagem.\""] },
            { title: "Controlo das chaves", bullets: ["Verifique a identificação antes de qualquer nova chave", "Guarde as chaves e a máquina fora do alcance", "Comunique logo a perda de uma chave-mestra"] },
            { title: "Animais de serviço (ADA)", bullets: ["Pergunte só: é necessário por causa de uma deficiência?", "E: que trabalho ou tarefa foi treinado para fazer?", "Sem documentos e sem taxa de animal para um animal de serviço"] },
            { title: "Sinais de tráfico e emergências", bullets: ["Atenção a alguém controlado, ensinado sobre o que dizer ou com medo", "Não confronte; avise o seu gerente", "Linha de denúncia: 1-888-373-7888", "Emergência: ligue primeiro para o 911, depois para o gerente"] }
          ],
          sources: [
            { name: "ADA.gov: ADA Requirements: Service Animals", url: "https://www.ada.gov/resources/service-animals-2010-requirements/" },
            { name: "DHS Blue Campaign: Indicators of Human Trafficking", url: "https://www.dhs.gov/blue-campaign/indicators-human-trafficking" },
            { name: "AHLA Foundation: No Room For Trafficking (formação gratuita para o pessoal de hotel)", url: "https://www.ahlafoundation.org/nrft/" }
          ],
          tryIt: "Escreva a sua resposta a cada caso: (1) Uma pessoa liga e diz \"Passe-me à minha mulher, Jane Lee. Em que quarto ela está?\" (2) Um homem sem identificação diz que perdeu a chave do quarto 305. (3) Um hóspede tem um cão e você não tem a certeza de que é um animal de serviço. Depois, se puder, faça a formação gratuita de 30 minutos \"Your Role in Preventing Human Trafficking\" (em inglês), com ligação na página No Room For Trafficking da AHLA Foundation.",
          youCanNow: "proteger a privacidade dos hóspedes ao telefone e na receção, controlar as chaves, tratar de um animal de serviço segundo a ADA e comunicar sinais de tráfico e emergências da forma certa.",
          quickCheck: [
            { objective: "O5", q: "Alguém liga e pergunta em que quarto está um hóspede. O que diz?", options: ["Dá o número do quarto", "\"Não posso dar informações sobre os hóspedes, mas posso ligar para o quarto ou anotar uma mensagem.\"", "\"Ela fez o check-out há uma hora.\"", "\"Ligue quando eu já não estiver de turno.\""], answer: 1, why: "Nunca confirme que um hóspede está hospedado nem dê o número do quarto; ligar para o quarto ou anotar uma mensagem protege o hóspede." },
            { objective: "O5", q: "Um hóspede tem um cão e não é evidente que seja um animal de serviço. O que pode perguntar?", options: ["Os documentos de certificação do cão", "Qual é a deficiência do hóspede", "Que pague primeiro a taxa de animal", "Se o cão é necessário por causa de uma deficiência e que tarefa foi treinado para fazer"], answer: 3, why: "A ADA só permite essas duas perguntas; sem documentos e sem taxa de animal para um animal de serviço." }
          ]
        },
        {
          title: "A sua lista de tarefas do turno e o seu plano de emprego",
          objectives: ["O1", "O2"],
          minutes: 5,
          goal: "Escrever uma lista de tarefas para um turno na receção e um plano de 30 dias para conseguir um emprego na receção.",
          text: [
            "Os bons rececionistas trabalham com uma lista de tarefas. No início do turno: chegue cedo, leia o registo do turno, conte a sua caixa com um gerente ou segundo o processo do hotel, e veja as chegadas, as partidas e os quartos prontos do dia.",
            "Durante o turno: cumprimente todos os hóspedes, faça o check-in e o check-out sempre com os mesmos passos, atenda o telefone até ao terceiro toque se puder, mantenha o balcão arrumado e as chaves seguras. No fim: termine as tarefas pendentes, conte a caixa outra vez e escreva no registo tudo o que o turno seguinte precisa de saber.",
            "Agora planeie o seu caminho. Escolha três hotéis perto de si, pratique o seu guião de check-in com uma pessoa real e decida quando vai ver a página da CFDR do AHLEI ou perguntar a um empregador se paga a formação. Ponha datas reais em cada passo. Leve a sua lista e o seu guião à entrevista: mostra que já conhece o trabalho."
          ],
          steps: ["Escreva as tarefas do início do turno.", "Escreva as tarefas durante o turno.", "Escreva as tarefas do fim do turno.", "Escreva o seu guião de check-in com a regra da privacidade incluída.", "Escreva um plano de 30 dias com datas: três hotéis, a prática e a verificação da certificação."],
          words: [["Caixa (fundo de caixa)", "o dinheiro pelo qual o rececionista é responsável durante o turno; é contado no início e no fim."], ["Chegadas e partidas", "as listas dos hóspedes que fazem o check-in e o check-out hoje."], ["Passagem de turno", "passar as tarefas pendentes e as notas ao turno seguinte."]],
          slides: [
            { title: "Início do turno", bullets: ["Chegue cedo e leia o registo do turno", "Conte a caixa segundo o processo do hotel", "Veja as chegadas, as partidas e os quartos prontos"] },
            { title: "Durante o turno", bullets: ["Sempre os mesmos passos de check-in e check-out", "Atenda o telefone depressa e com educação", "Balcão arrumado e chaves seguras"] },
            { title: "Fim do turno", bullets: ["Termine as tarefas pendentes", "Conte a caixa outra vez", "Escreva o que o turno seguinte precisa de saber"] },
            { title: "O seu plano de 30 dias", bullets: ["Três hotéis onde se candidatar, com datas", "Pratique o guião com uma pessoa real", "Veja a página da CFDR do AHLEI ou pergunte sobre formação"] }
          ],
          tryIt: "Prepare o seu kit de emprego em papel ou num documento gratuito: a sua lista de tarefas do turno (início, durante, fim), o seu guião de check-in em sete passos e um plano de 30 dias com datas reais. Peça a alguém que faça de hóspede enquanto lê o guião.",
          youCanNow: "mostrar a quem contrata uma lista de tarefas para um turno na receção, um guião de check-in e um plano com datas para conseguir o emprego e uma certificação.",
          quickCheck: [
            { objective: "O1", q: "O que deve estar num plano de 30 dias para um emprego na receção?", options: ["\"Um dia procurar emprego\"", "\"Candidatar-me a três hotéis com nome até dia 15 e praticar o meu guião no dia 10\"", "\"Pagar a alguém por um emprego garantido\"", "\"Esperar que um hotel me ligue\""], answer: 1, why: "Um plano real indica passos concretos com datas." },
            { objective: "O2", q: "Qual é uma boa tarefa para o início do turno?", options: ["Ler o registo do turno e ver as chegadas do dia", "Deixar a caixa por contar", "Desligar os telefones", "Dar chaves a mais para poupar tempo"], answer: 0, why: "Ler o registo e as chegadas diz-lhe o que o turno precisa antes de os hóspedes chegarem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Problemas, privacidade e o seu turno",
        questions: [
          { objective: "O4", q: "O que deve fazer sempre depois de resolver o problema de um hóspede?", options: ["Esquecer", "Publicar sobre isso na internet", "Fazer o seguimento e escrever no registo do turno", "Cobrar mais ao hóspede"], answer: 2, why: "Fazer o seguimento e registar deixa o turno seguinte saber e mostra ao hóspede que você se importa." },
          { objective: "O4", q: "Um hóspede começa a gritar ameaças na receção. O que faz?", options: ["Grita também", "Afasta-se e chama o seu gerente ou a segurança", "Salta por cima do balcão", "Ignora e continua a escrever no computador"], answer: 1, why: "Não enfrenta ameaças sozinho; afastar-se e pedir ajuda mantém todos em segurança." },
          { objective: "O5", q: "Um visitante sem identificação diz que perdeu a chave do quarto 305. O que faz?", options: ["Faz uma chave depressa", "Dá-lhe a chave-mestra", "Diz-lhe quem está no 305", "Segue o processo de identificação; sem ele, não há chave"], answer: 3, why: "Controlar as chaves é verificar a identificação antes de qualquer nova chave, para que estranhos não entrem nos quartos." },
          { objective: "O5", q: "Um hóspede desmaia no átrio. Qual é o seu primeiro passo?", options: ["Ligar para o 911 (ou para o número de emergência local) e depois para o gerente", "Terminar o check-in do hóspede seguinte", "Publicar sobre isso", "Esperar para ver se ele se levanta"], answer: 0, why: "Em qualquer emergência de saúde, ligue primeiro para o 911; depois avise o seu gerente." },
          { objective: "O5", q: "Repara num jovem que parece controlado e ensinado sobre o que dizer por um adulto. O que faz?", options: ["Confronta o adulto", "Pergunta em voz alta ao jovem se é vítima de tráfico", "Não confronta; avisa o seu gerente e segue a regra do hotel", "Ignora"], answer: 2, why: "Confrontar pode pôr pessoas em perigo; comunique ao seu gerente e à linha de denúncia certa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Carreiras em Hotelaria: Receção e Atendimento ao Hóspede",
    questions: [
      { objective: "O1", q: "Qual é uma tarefa principal de um rececionista?", options: ["Arranjar a canalização dos quartos", "Fazer reservas e atender o telefone", "Lavar a roupa do hotel", "Cozinhar para o serviço de quartos"], answer: 1, why: "Reservas e telefone são trabalho da receção; as outras tarefas são de outras equipas." },
      { objective: "O1", q: "Quem oferece a certificação START Certified Front Desk Representative (CFDR)?", options: ["O American Hotel & Lodging Educational Institute (AHLEI)", "O IRS, o serviço de impostos dos EUA", "O serviço de viação (DMV) do seu estado", "Qualquer hóspede do hotel"], answer: 0, why: "O AHLEI oferece o curso e o exame CFDR." },
      { objective: "O1", q: "Um adolescente quer trabalhar na receção. Onde deve verificar que empregos e horas são permitidos?", options: ["No palpite de um amigo", "Em qualquer anúncio de emprego", "Em dol.gov/youthrules e no serviço de trabalho do seu estado", "Em lado nenhum; as regras para adolescentes são iguais em todo o lado"], answer: 2, why: "As regras de trabalho para jovens dependem da idade e do estado, por isso veja as páginas oficiais." },
      { objective: "O1", q: "O que procuram os hotéis primeiro num novo rececionista?", options: ["Só anos de experiência em hotelaria", "Só um curso superior", "Só ter carro", "Uma pessoa simpática, de confiança e cuidadosa com o dinheiro e as chaves"], answer: 3, why: "Os hotéis formam muitas vezes no próprio trabalho e contratam pela atitude e pela confiança." },
      { objective: "O2", q: "Qual é a ordem certa para começar um check-in?", options: ["Fazer a chave e depois cumprimentar o hóspede", "Cumprimentar, encontrar a reserva, verificar a identificação", "Receber o pagamento e depois descobrir quem é", "Dizer o número do quarto e depois cumprimentar"], answer: 1, why: "Primeiro cumprimente, depois encontre a reserva e compare a identificação." },
      { objective: "O2", q: "O que é um sistema de gestão hoteleira (PMS)?", options: ["O sistema informático do hotel para reservas, quartos e contas", "Um horário de limpeza", "Uma aplicação de estacionamento", "Um tipo de cartão-chave"], answer: 0, why: "O PMS regista as reservas, o check-in, as contas e o check-out." },
      { objective: "O2", q: "Como diz a um hóspede o número do quarto no check-in?", options: ["Anuncia-o a todo o átrio", "Grita-o quando ele se afasta", "Escreve-o na capa do cartão e aponta para ele", "Afixa-o no quadro"], answer: 2, why: "Escrever e apontar mantém o número do quarto em privado." },
      { objective: "O2", q: "O que deve explicar antes de o hóspede sair do balcão?", options: ["A morada de casa do gerente", "Os números dos quartos de outros hóspedes", "Os códigos do alarme do hotel", "O Wi-Fi, o pequeno-almoço e a hora do check-out"], answer: 3, why: "Este básico ajuda o hóspede e diminui as chamadas para a receção." },
      { objective: "O3", q: "Qual destes é um gasto extra (incidental)?", options: ["Estacionamento ou serviço de quartos", "A renda da casa do hóspede", "A conta da luz do hotel", "O seu salário"], answer: 0, why: "Os extras são gastos a mais durante a estadia, como estacionamento e comida." },
      { objective: "O3", q: "Como deve aparecer o número completo de um cartão quando fala da conta com um hóspede?", options: ["Lido em voz alta, completo", "Escrito num papel autocolante", "Nunca lido em voz alta nem escrito; só os últimos algarismos", "Enviado por mensagem ao hóspede"], answer: 2, why: "Proteger os números dos cartões evita fraudes; os fólios mostram só os últimos algarismos." },
      { objective: "O3", q: "Um hóspede diz que um valor de serviço de quartos não é dele. Você não pode retirar valores. O que faz?", options: ["Discute até ele pagar", "Apaga-o na mesma", "Diz-lhe para contestar no banco", "Vê o valor com ele e chama o seu gerente"], answer: 3, why: "Manter a calma e chamar um gerente segue as regras e dá uma resposta ao hóspede." },
      { objective: "O3", q: "O que é o check-out rápido?", options: ["Fazer o check-out sem passar pela receção, por telefone, pela televisão ou por uma aplicação", "Sair sem pagar", "Um elevador mais rápido", "Fazer o check-out só à meia-noite"], answer: 0, why: "O check-out rápido deixa os hóspedes sair sem esperar na fila." },
      { objective: "O4", q: "Quais são os quatro passos para o problema de um hóspede?", options: ["Ignorar, esperar, culpar, sair", "Ouvir, pedir desculpa, oferecer opções, fazer o seguimento e registar", "Discutir, devolver o dinheiro, pedir desculpa, esquecer", "Passar a chamada, desligar, registar, repetir"], answer: 1, why: "Ouvir, pedir desculpa, oferecer opções e fazer o seguimento resolve a maioria dos problemas." },
      { objective: "O4", q: "O que quer dizer \"transferir um hóspede\" (\"walking a guest\")?", options: ["Acompanhar um hóspede até ao elevador", "Levar o cão de um hóspede a passear", "Reservar um quarto para o hóspede num hotel próximo quando o seu tem reservas a mais", "Pedir a um hóspede que saia"], answer: 2, why: "Os hotéis transferem hóspedes para outro hotel, segundo a sua regra, quando têm reservas a mais." },
      { objective: "O4", q: "Um hóspede quer uma semana grátis porque a televisão não funcionou. Você não pode dar isso. O que faz?", options: ["Promete na mesma", "Diz-lhe que está a mentir", "Desliga-lhe o telefone", "Pede desculpa, oferece as opções que pode dar e chama um gerente para o resto"], answer: 3, why: "Nunca prometa o que não pode dar; ofereça o que pode e chame um gerente." },
      { objective: "O4", q: "Porque é que se escrevem os problemas dos hóspedes no registo do turno?", options: ["Para o turno seguinte saber e poder fazer o seguimento", "Para culpar o hóspede", "Porque os hóspedes o leem", "Não é preciso"], answer: 0, why: "O registo passa informação importante ao turno seguinte." },
      { objective: "O5", q: "Alguém na receção pergunta: \"O meu chefe, o Sr. Diaz, está hospedado aqui?\" O que diz?", options: ["\"Sim, no quarto 410.\"", "\"Não posso dar informações sobre os hóspedes, mas posso anotar uma mensagem.\"", "\"Ele fez o check-in ontem.\"", "\"Deixe-me procurar a morada de casa dele.\""], answer: 1, why: "Nunca confirme que um hóspede está hospedado; anotar uma mensagem protege-o." },
      { objective: "O5", q: "Segundo a ADA, o que NÃO pode fazer com um animal de serviço?", options: ["Perguntar se o cão é necessário por causa de uma deficiência", "Perguntar que tarefa foi treinado para fazer", "Cobrar uma taxa de animal ou pedir documentos", "Receber bem o hóspede"], answer: 2, why: "A ADA proíbe taxas de animal e pedidos de documentos para animais de serviço." },
      { objective: "O5", q: "Qual é o número da Linha Nacional contra o Tráfico de Seres Humanos dos EUA?", options: ["411", "1-800-555-0000", "A extensão da receção do hotel", "1-888-373-7888"], answer: 3, why: "O 1-888-373-7888 é a Linha Nacional contra o Tráfico de Seres Humanos indicada pelo DHS." },
      { objective: "O5", q: "O alarme de incêndio toca e cheira a fumo. O que vem primeiro?", options: ["Ligar para o 911 (ou para o número de emergência local) e seguir o plano de emergência do hotel", "Terminar o check-in que está a fazer", "Publicar um vídeo", "Esperar que um hóspede se queixe"], answer: 0, why: "Numa emergência, ligue primeiro para o 911 e siga o plano de emergência do hotel." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno aprendeu
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 6, 8, 10, 12, 13, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Lista de tarefas do turno", objective: "O1", notYet: "Faltam na lista o início, o meio ou o fim do turno.", meets: "Tem tarefas para o início, durante e o fim, incluindo o registo do turno e a contagem da caixa.", exceeds: "Também junta tarefas de controlo das chaves e do telefone e cabe numa página clara." },
      { name: "Guião de check-in", objective: "O2", notYet: "Faltam passos ou o guião diz o número do quarto em voz alta.", meets: "Os sete passos por ordem, com o número do quarto escrito e apontado, não dito.", exceeds: "Lido em voz alta a um colega em menos de três minutos, com um cumprimento e uma despedida calorosos." },
      { name: "Fólio e check-out", objective: "O3", notYet: "Não sabe explicar os valores, ou discutiria por causa de um valor questionado.", meets: "Explica cada valor de um fólio de prática e diz que corrige um erro claro ou chama um gerente.", exceeds: "Também explica uma retenção no cartão com palavras simples e nunca mostra o número completo de um cartão." },
      { name: "Resolver problemas", objective: "O4", notYet: "A resposta discute, culpa ou promete o que o rececionista não pode dar.", meets: "Pede desculpa, oferece pelo menos duas opções permitidas e escreve uma nota no registo do turno.", exceeds: "Também diz quando chamar um gerente e como faria o seguimento com o hóspede." },
      { name: "Privacidade e segurança", objective: "O5", notYet: "Diz um número de quarto, dá uma chave sem identificação ou confrontaria um suspeito de tráfico.", meets: "Protege as informações dos hóspedes, verifica a identificação para as chaves e comunica bem as emergências e os sinais de tráfico.", exceeds: "Também trata de um animal de serviço só com as duas perguntas da ADA e já fez uma formação gratuita sobre tráfico." },
      { name: "Plano de 30 dias", objective: "O1", notYet: "Sem datas, ou sem hotéis com nome.", meets: "Três hotéis com nome, uma data de prática e uma data para ver a página da CFDR ou perguntar sobre formação.", exceeds: "Também indica quem vai ser a sua referência e como vai chegar a cada turno." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a pelo menos três empregos em hotelaria em 30 dias (inquérito de seguimento)",
      "Alunos contratados para a receção, o atendimento ao hóspede ou outro trabalho num hotel em 90 dias",
      "Alunos que começam uma certificação de receção, como a CFDR do AHLEI, em 90 dias",
      "Os hotéis parceiros dizem que os novos trabalhadores precisam de menos formação básica de receção"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet, ou as lições em papel",
      "Papel e caneta para os fólios de prática, as capas dos cartões-chave e a lista de tarefas do turno",
      "Um colega para fazer de hóspede (um amigo, um familiar ou um colega de turma)",
      "Cerca de 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Monte uma receção de prática com uma mesa, uma capa de cartão-chave em papel e um fólio de prática; os alunos fazem à vez de rececionista e de hóspede.",
      "Use só nomes de hóspedes, números de cartão e números de quarto inventados em toda a prática.",
      "Convide um gerente de um hotel local para ver as simulações de check-in e falar de como contrata.",
      "Programas para jovens: verifique as regras do estado sobre as horas de trabalho dos adolescentes antes de colocar alguém; programas de reintegração: indique aos alunos empregadores conhecidos por darem uma segunda oportunidade a quem tem registo criminal.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha em Ainda não de cada vez."
    ]
  }
};
