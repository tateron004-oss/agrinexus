"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-government-contracts.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US and California agency, program and site names are kept as written.

module.exports = {
  id: "smallbiz-government-contracts-pt",
  lang: "pt",
  translationOf: "smallbiz-government-contracts",
  category: "Small Business",
  name: "Ganhar Contratos com o Governo",
  skills: "Registar-se no SAM.gov, Escolher códigos NAICS, Usar as certificações da SBA e da Califórnia, Encontrar oportunidades de contrato, Ler um concurso, Escrever uma declaração de capacidades",
  outcome: "registar a sua empresa para vender ao governo, escolher os seus códigos NAICS, encontrar oportunidades de contrato adequadas, ler um concurso para decidir se concorre e escrever uma declaração de capacidades de uma página.",
  about: [
    "Os governos federal, estadual e local compram quase tudo: limpeza, catering, construção, jardinagem, impressão, informática, formação, transporte de carga e muito mais. Uma parte dessas compras é reservada para pequenas empresas, e outra para pequenas empresas certificadas, como as que pertencem a mulheres ou a veteranos.",
    "Este curso leva você pelos passos, por ordem: registar-se no SAM.gov e obter o seu Unique Entity ID, escolher códigos NAICS, entender as certificações da SBA e as certificações Small Business e DVBE da Califórnia, encontrar oportunidades, ler um concurso e escrever uma declaração de capacidades que pode enviar aos compradores.",
    "As regras, os limites e os sites mudam. Cada lição mostra a página oficial a verificar. Há ajuda gratuita nos APEX Accelerators, nos escritórios distritais da SBA e nos Small Business Development Centers; não precisa de pagar a ninguém para se registar.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa que faz logo. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva uma declaração de capacidades de uma página para a sua empresa, com quatro partes: competências principais, trabalhos anteriores, o que a torna diferente e dados da empresa (nome legal, UEI, códigos NAICS, certificações, contactos). Depois encontre uma oportunidade real no SAM.gov ou no Cal eProcure que corresponda a um código NAICS da sua declaração.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenas empresas, muitos deles de minorias, mulheres e veteranos na Califórnia, que vendem serviços ou produtos como limpeza, catering, construção, jardinagem, impressão, informática, formação ou transporte de carga e querem vender ao governo federal, estadual e local.",
    startingPoint: "Têm uma empresa a funcionar, com clientes, e conhecem bem os seus serviços. A maioria nunca se registou no SAM.gov, nunca procurou um código NAICS nem leu um concurso do governo.",
    gap: "Os compradores do governo gastam muito com pequenas empresas e empresas certificadas, mas os passos de registo, os códigos e os concursos longos afastam muitos donos, e empresas burlonas cobram por registos que são gratuitos. Os alunos precisam de se registar sozinhos e de graça, encontrar concursos adequados, decidir quando concorrer e apresentar a empresa com uma declaração de capacidades.",
    constraints: [
      "As regras, os padrões de tamanho e os limites das certificações mudam; os alunos verificam no SAM.gov, na SBA e no Department of General Services da Califórnia",
      "Privacidade: os dados bancários e o EIN vão só para o SAM.gov, nunca para uma ferramenta de IA nem para um e-mail",
      "Risco de burla: ofertas com ar oficial para registar ou renovar a troco de dinheiro",
      "Tempo: cerca de 60 minutos no total, mais o tempo do registo real",
      "Palavras simples para donos que são novos nas compras do governo"
    ],
    prerequisites: "Uma empresa registada, com nome legal, morada e EIN ou número fiscal."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o nome legal, a morada, o EIN e os dados bancários da sua empresa", action: "registar a sua empresa no SAM.gov sozinho e obter um UEI", standard: "de graça, renovando a cada 365 dias e ignorando ofertas de registo pago" },
    { id: "O2", condition: "Usando a página NAICS do Census e a Size Standards Tool da SBA", action: "escolher um código NAICS principal e verificar se a sua empresa conta como pequena para esse código", standard: "com o código a corresponder ao seu serviço principal" },
    { id: "O3", condition: "Com as regras básicas das certificações da SBA e da Califórnia", action: "identificar as certificações que a sua empresa talvez possa ter e onde pedi-las", standard: "indicando o site certo para cada uma" },
    { id: "O4", condition: "Usando o SAM.gov e o Cal eProcure", action: "encontrar oportunidades que correspondam aos seus códigos NAICS e guardar a pesquisa", standard: "para que as novas oportunidades cheguem ao seu e-mail" },
    { id: "O5", condition: "Com um concurso", action: "encontrar o caderno de encargos, as instruções, os critérios de avaliação e o prazo, e decidir se concorre", standard: "respondendo a todas as perguntas de concorrer ou não concorrer" },
    { id: "O6", condition: "Para compradores do governo e empreiteiros principais", action: "escrever uma declaração de capacidades de uma página com competências principais, trabalhos anteriores, diferenciais e dados da empresa", standard: "sem números privados como dados bancários ou o EIN" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se para vender ao governo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Registar-se no SAM.gov e obter um UEI",
          minutes: 6,
          goal: "Juntar o que precisa e registar a sua empresa no SAM.gov sozinho, de graça.",
          text: [
            "O SAM.gov (System for Award Management, o sistema de gestão de contratos) é o site oficial do governo dos Estados Unidos para fazer negócios com as agências federais. Para concorrer e ganhar contratos federais, a sua empresa tem de estar registada lá. O registo dá-lhe um Unique Entity ID (UEI), um código de 12 caracteres, com letras e números, que identifica a sua empresa.",
            "Pode pedir só um UEI sem o registo completo, mas só com um UEI não pode candidatar-se diretamente a contratos e apoios federais. Para contratos, faça o registo completo. Tem de o renovar a cada 365 dias para o manter ativo.",
            "O registo no SAM.gov é gratuito. Algumas empresas enviam e-mails ou cartas com ar oficial a oferecer registar ou renovar o seu registo a troco de dinheiro, ou avisam que o seu registo está quase a acabar. Nunca tem de lhes pagar. Registe-se só em sam.gov e, se ficar parado, peça ajuda gratuita a um APEX Accelerator.",
            "Antes de começar, junte o nome legal da empresa e a morada física exatamente como o IRS (a autoridade fiscal dos EUA) os tem, o seu Employer Identification Number (EIN) ou número fiscal, e os dados bancários para os pagamentos. Escreva-os só no próprio SAM.gov, nunca numa ferramenta de IA nem num e-mail."
          ],
          steps: ["Junte o nome legal da empresa, a morada física, o EIN e os dados bancários.", "Vá a sam.gov e crie um acesso (login).", "Escolha registar a sua entidade, e não só obter um UEI.", "Responda a todas as secções; o nome e a morada da empresa têm de ser iguais aos registos do IRS.", "Anote o seu UEI e a data em que o registo acaba.", "Ponha um lembrete para renovar antes dos 365 dias."],
          words: [["SAM.gov", "o System for Award Management, o site federal onde as empresas se registam para vender ao governo."], ["UEI", "Unique Entity ID: o código de 12 caracteres que identifica a sua empresa perante o governo."], ["EIN", "Employer Identification Number: o número fiscal da sua empresa, dado pelo IRS."], ["APEX Accelerator", "um centro de aconselhamento gratuito que ajuda as empresas a vender ao governo."]],
          slides: [
            { title: "O SAM.gov é a porta de entrada", bullets: ["Registe-se para concorrer a contratos federais", "Recebe um Unique Entity ID de 12 caracteres", "Renove a cada 365 dias"] },
            { title: "Só o UEI ou registo completo", bullets: ["Só o UEI: não pode candidatar-se a contratos", "Registo completo: necessário para contratos"] },
            { title: "É gratuito", bullets: ["Ignore ofertas pagas para registar ou renovar", "Registe-se só em sam.gov", "Ajuda gratuita: APEX Accelerators"] },
            { title: "Tenha à mão", bullets: ["Nome legal e morada iguais aos do IRS", "EIN ou número fiscal e dados bancários", "Escreva-os só no SAM.gov"] }
          ],
          sources: [
            { name: "SAM.gov: Entity registration", url: "https://sam.gov/content/entity-registration" },
            { name: "SBA: Basic requirements for government contracting", url: "https://www.sba.gov/federal-contracting/contracting-guide/basic-requirements" }
          ],
          tryIt: "Faça uma lista de verificação do registo no SAM.gov para a sua empresa: nome legal, morada física, EIN, dados bancários, pessoa de contacto. Marque o que já tem. Se já estiver registado, veja a data em que o registo acaba e ponha um lembrete para renovar.",
          youCanNow: "preparar e fazer um registo gratuito no SAM.gov, explicar o que é um UEI e reconhecer burlas de registo pago.",
          quickCheck: [
            { objective: "O1", q: "O nome legal e a morada no SAM.gov têm de ser iguais a quê?", options: ["Ao que o IRS tem para a sua empresa", "À sua página nas redes sociais", "Ao seu logótipo", "À sua morada pessoal para correio"], answer: 0, why: "O nome legal e a morada têm de ser exatamente iguais aos do IRS." },
            { objective: "O1", q: "Ficou parado num passo do registo no SAM.gov. Onde pode ter ajuda gratuita?", options: ["Numa empresa que lhe enviou um e-mail a oferecer ajuda por $300", "Num APEX Accelerator", "Numa ferramenta de IA, colando lá os seus dados bancários", "Em lado nenhum; tem de pagar a alguém"], answer: 1, why: "Os APEX Accelerators dão ajuda gratuita; nunca tem de pagar para se registar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escolher códigos NAICS e verificar o seu tamanho",
          minutes: 5,
          goal: "Escolher um código NAICS principal e verificar se a sua empresa conta como pequena para esse código.",
          text: [
            "Os códigos NAICS (North American Industry Classification System, a classificação de atividades da América do Norte) organizam as empresas pelo que vendem. Cada contrato do governo tem um código NAICS, e os compradores procuram empresas pelo código. Por exemplo, há códigos para serviços de limpeza, impressão comercial e desenho de sistemas informáticos.",
            "Procure os códigos na página NAICS do US Census Bureau (census.gov/naics), escrevendo palavras que descrevem o seu trabalho. Escolha um código principal para o seu serviço principal e acrescente outros para as outras coisas que vende.",
            "Cada código NAICS tem um padrão de tamanho: o tamanho máximo que uma empresa pode ter e continuar a contar como pequena para esse código, medido pelas receitas anuais ou pelo número de empregados. A maioria dos fabricantes com 500 empregados ou menos e a maioria das outras empresas com uma média de menos de $7.5 milhões por ano contam como pequenas, mas isto varia. Verifique o seu na Size Standards Tool da SBA.",
            "Ser pequena para um código deixa a sua empresa concorrer a contratos reservados para pequenas empresas nesse código."
          ],
          steps: ["Escreva com palavras simples o que vende.", "Procure em census.gov/naics os códigos que correspondem.", "Escolha um código principal e mais dois ou três.", "Verifique cada código na Size Standards Tool da SBA.", "Acrescente os códigos ao seu registo no SAM.gov."],
          words: [["Código NAICS", "um número que descreve o tipo de empresa que você tem."], ["Código NAICS principal", "o código do seu produto ou serviço principal."], ["Padrão de tamanho", "o tamanho máximo que uma empresa pode ter e continuar a contar como pequena para um código NAICS."], ["Reserva (set-aside)", "um contrato a que só certas empresas, como as pequenas, podem concorrer."]],
          slides: [
            { title: "Para que servem os códigos NAICS", bullets: ["Organizam as empresas pelo que vendem", "Cada contrato tem um código", "Os compradores procuram empresas pelo código"] },
            { title: "Encontrar os seus códigos", bullets: ["Procure em census.gov/naics", "Um código principal para o seu serviço principal", "Acrescente códigos para as outras coisas que vende"] },
            { title: "Padrões de tamanho", bullets: ["Cada código tem um limite de pequena empresa", "Pelas receitas anuais ou pelos empregados", "Verifique na Size Standards Tool da SBA"] }
          ],
          sources: [
            { name: "SBA: Size standards", url: "https://www.sba.gov/federal-contracting/contracting-guide/size-standards" },
            { name: "US Census Bureau: NAICS", url: "https://www.census.gov/naics/" }
          ],
          tryIt: "Procure em census.gov/naics o seu serviço principal e anote o seu código NAICS principal e mais dois. Depois verifique um deles na Size Standards Tool da SBA e escreva se a sua empresa conta como pequena.",
          youCanNow: "escolher códigos NAICS para a sua empresa e verificar se ela conta como pequena para cada um.",
          quickCheck: [
            { objective: "O2", q: "Quantos códigos NAICS tem cada contrato do governo?", options: ["Nenhum", "Dez", "Um", "Os que o concorrente quiser"], answer: 2, why: "Cada contrato tem um código NAICS, e os compradores procuram pelo código." },
            { objective: "O2", q: "Tem uma empresa de limpeza que também vende alguns produtos. Como escolhe os códigos?", options: ["Escolhe um código ao acaso", "Escolhe só o código dos produtos", "Não escolhe códigos; os compradores procuram pelo nome", "Escolhe a limpeza como código principal e acrescenta outros para o resto que vende"], answer: 3, why: "Escolha um código principal para o seu serviço principal e acrescente outros para as outras coisas que vende." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Certificações da SBA e da Califórnia",
          minutes: 6,
          goal: "Decidir que certificações federais e da Califórnia a sua empresa talvez possa ter.",
          text: [
            "As certificações deixam você concorrer a contratos reservados para certas pequenas empresas. As certificações federais pedem-se em certifications.sba.gov. Cada uma tem regras; aqui está o básico, por isso veja as páginas da SBA para a lista completa.",
            "8(a) Business Development: para pequenas empresas em que pelo menos 51% pertencem e são controlados por cidadãos dos EUA social e economicamente desfavorecidos, com limites de património pessoal, rendimento e bens, normalmente dois anos de atividade, e um programa único de até nove anos. HUBZone: a sua sede fica numa HUBZone (Historically Underutilized Business Zone, uma zona historicamente pouco aproveitada) e pelo menos 35% dos empregados vivem numa. Women-Owned Small Business (WOSB): pelo menos 51% pertencem e são controlados por mulheres cidadãs dos EUA; o governo procura dar 5% do dinheiro dos contratos a empresas WOSB. Empresas de veteranos (VOSB) e de veteranos com deficiência ligada ao serviço (SDVOSB): certificadas pelo programa VetCert da SBA desde 2023.",
            "A Califórnia tem as suas próprias certificações, dadas pelo Office of Small Business and DVBE Services do Department of General Services, e pedidas no Cal eProcure. Small Business (SB): empresa independente, sede na Califórnia e, com as empresas associadas, 100 empregados ou menos e receitas brutas anuais médias de $19 milhões ou menos (ou um fabricante com 100 empregados ou menos). Disabled Veteran Business Enterprise (DVBE): pelo menos 51% pertencem e são geridos por veteranos com uma deficiência ligada ao serviço de pelo menos 10%.",
            "Muitas cidades, condados e distritos escolares também aceitam as certificações do estado. Pergunte a um APEX Accelerator quais servem para você."
          ],
          words: [["8(a)", "um programa da SBA para pequenas empresas de pessoas social e economicamente desfavorecidas."], ["HUBZone", "uma Historically Underutilized Business Zone (zona historicamente pouco aproveitada); as empresas aí podem ter ajuda para obter contratos."], ["WOSB", "Women-Owned Small Business: pequena empresa que pertence a mulheres."], ["SDVOSB", "Service-Disabled Veteran-Owned Small Business: pequena empresa de veteranos com deficiência ligada ao serviço."], ["DVBE", "Disabled Veteran Business Enterprise, uma certificação da Califórnia para empresas de veteranos com deficiência."]],
          slides: [
            { title: "Porquê certificar-se", bullets: ["Concorrer a contratos reservados para certas empresas", "Federais: certifications.sba.gov"] },
            { title: "Certificações federais", bullets: ["8(a): donos desfavorecidos, até 9 anos", "HUBZone: sede numa zona, 35% do pessoal vive numa", "WOSB: 51% de mulheres; VOSB/SDVOSB: VetCert da SBA"] },
            { title: "Certificações da Califórnia", bullets: ["Peça no Cal eProcure (DGS)", "SB: sede na Califórnia, 100 empregados ou menos, receitas até $19M", "DVBE: 51% de veteranos com deficiência"] },
            { title: "Peça ajuda gratuita", bullets: ["APEX Accelerators", "Escritórios distritais da SBA", "Verifique as regras completas de cada programa"] }
          ],
          sources: [
            { name: "SBA: 8(a) Business Development program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
            { name: "SBA: HUBZone program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program" },
            { name: "SBA: Women-Owned Small Business program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contract-program" },
            { name: "SBA: Veteran contracting assistance (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "California DGS: Apply for Small Business and DVBE certification", url: "https://www.dgs.ca.gov/PD/Services/Page-Content/Procurement-Division-Services-List-Folder/Apply-for-or-Re-apply-as-Small-Business-Disabled-Veteran-Business-Enterprise" }
          ],
          tryIt: "Faça uma tabela com as seis certificações desta lição (8(a), HUBZone, WOSB, VOSB ou SDVOSB, SB da Califórnia, DVBE da Califórnia). Para cada uma, escreva sim, talvez ou não para a sua empresa, e a regra que decide. Faça um círculo à volta da que vai estudar primeiro.",
          youCanNow: "dizer quais são as principais certificações da SBA e da Califórnia, verificar quais a sua empresa talvez possa ter e saber onde pedi-las.",
          quickCheck: [
            { objective: "O3", q: "Onde se pedem as certificações federais da SBA?", options: ["certifications.sba.gov", "census.gov/naics", "Em qualquer escritório do condado", "Num site privado que cobra uma taxa"], answer: 0, why: "As certificações federais pedem-se em certifications.sba.gov." },
            { objective: "O3", q: "É um veterano com deficiência e dono de uma empresa na Califórnia. Que certificação do estado deve estudar?", options: ["HUBZone", "DVBE, através do Cal eProcure", "WOSB", "Nenhuma; a Califórnia não tem certificações"], answer: 1, why: "A DVBE da Califórnia é para empresas em que pelo menos 51% pertencem e são geridos por veteranos com deficiência." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se para vender ao governo",
        questions: [
          { objective: "O1", q: "O que recebe quando se regista no SAM.gov?", options: ["Um empréstimo bancário", "Um Unique Entity ID (UEI)", "Um contrato garantido", "Uma licença comercial"], answer: 1, why: "O registo no SAM.gov dá à sua empresa um Unique Entity ID de 12 caracteres." },
          { objective: "O1", q: "Uma empresa envia um e-mail a dizer que renova o seu registo no SAM.gov por $500. O que faz?", options: ["Paga depressa antes que acabe", "Envia-lhes o seu EIN e os dados bancários", "Responde com a sua palavra-passe", "Ignora e renova você mesmo, de graça, em sam.gov"], answer: 3, why: "O registo no SAM.gov é gratuito; nunca tem de pagar a outra empresa." },
          { objective: "O1", q: "De quanto em quanto tempo tem de renovar o registo no SAM.gov?", options: ["A cada 365 dias", "A cada 10 anos", "Nunca", "Todas as semanas"], answer: 0, why: "O SAM.gov diz que tem de renovar a cada 365 dias para se manter ativo." },
          { objective: "O2", q: "O que descreve um código NAICS?", options: ["A sua conta bancária", "A morada da sua casa", "O tipo de empresa que você tem e o que vende", "A sua pontuação de crédito"], answer: 2, why: "Os códigos NAICS organizam as empresas pelos seus produtos ou serviços." },
          { objective: "O3", q: "A sua sede fica numa HUBZone e 40% dos seus trabalhadores vivem numa. Que certificação deve estudar?", options: ["WOSB", "DVBE", "Só 8(a)", "HUBZone"], answer: 3, why: "A HUBZone exige a sede numa HUBZone e pelo menos 35% dos empregados a viver numa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar e ganhar contratos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar oportunidades",
          minutes: 5,
          goal: "Procurar no SAM.gov e no Cal eProcure oportunidades que correspondam aos seus códigos NAICS e guardar a pesquisa.",
          text: [
            "As agências federais publicam oportunidades de contrato no SAM.gov. Procure em Contract Opportunities pelo seu código NAICS, pelo seu estado e pelo tipo de reserva, como pequena empresa, 8(a), HUBZone, WOSB ou SDVOSB. Guarde a pesquisa para que as novas oportunidades cheguem ao seu e-mail.",
            "As agências do estado da Califórnia publicam concursos no Cal eProcure (caleprocure.ca.gov). Registe-se lá, acrescente palavras-chave e códigos de produto UNSPSC ao seu perfil e ligue as notificações. O Cal eProcure também mostra o que os departamentos compraram antes e a que preços, o que ajuda a definir os seus.",
            "Não tem de ganhar primeiro um contrato grande. Muitas pequenas empresas começam como subempreiteiras de empreiteiros principais maiores. Os departamentos da Califórnia têm SB/DVBE Advocates que ajudam as empresas certificadas, e os APEX Accelerators ajudam a encontrar concursos de graça.",
            "Procure oportunidades que correspondam ao que já faz bem, numa zona que consegue servir e de um tamanho que consegue aguentar."
          ],
          steps: ["No SAM.gov, procure em Contract Opportunities pelo seu código NAICS e pelo seu estado.", "Filtre pelas reservas a que tem direito.", "Guarde a pesquisa para que as novas oportunidades cheguem por e-mail.", "Registe-se no Cal eProcure e acrescente palavras-chave e códigos UNSPSC para as notificações.", "Contacte um APEX Accelerator ou um SB/DVBE Advocate para ter pistas."],
          words: [["Oportunidade de contrato", "um anúncio publicado de que o governo quer comprar alguma coisa."], ["Empreiteiro principal", "a empresa que tem o contrato com o governo."], ["Subempreiteiro", "uma empresa contratada pelo empreiteiro principal para fazer parte do trabalho."], ["UNSPSC", "um código de produtos e serviços usado pelo sistema de concursos da Califórnia."]],
          slides: [
            { title: "Federal: SAM.gov", bullets: ["Procure em Contract Opportunities por NAICS e estado", "Filtre pelas suas reservas", "Guarde a pesquisa para ter alertas por e-mail"] },
            { title: "Califórnia: Cal eProcure", bullets: ["Registe-se e acrescente palavras-chave e códigos UNSPSC", "Ligue as notificações de concursos", "Veja compras e preços anteriores"] },
            { title: "Comece onde pode ganhar", bullets: ["Seja subempreiteiro de um empreiteiro principal", "Os SB/DVBE Advocates e os APEX Accelerators ajudam", "Combine com as suas capacidades, zona e tamanho"] }
          ],
          sources: [
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "California DGS: How to do business with the State of California", url: "https://www.dgs.ca.gov/PD/Resources/Page-Content/Procurement-Division-Resources-List-Folder/How-to-do-business-with-the-state-of-California" },
            { name: "Cal eProcure: Find bid opportunities", url: "https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx" }
          ],
          tryIt: "Procure em Contract Opportunities do SAM.gov com o seu código NAICS principal e o seu estado. Anote duas oportunidades: a agência, o que querem, a reserva e o prazo. Guarde a pesquisa.",
          youCanNow: "encontrar oportunidades de contrato federais e da Califórnia que correspondam aos seus códigos e configurar alertas.",
          quickCheck: [
            { objective: "O4", q: "Onde publicam concursos as agências do estado da Califórnia?", options: ["Só no SAM.gov", "Nas redes sociais", "No Cal eProcure", "No Census Bureau"], answer: 2, why: "As agências do estado da Califórnia publicam concursos no Cal eProcure." },
            { objective: "O4", q: "Encontra um contrato enorme, muito longe da sua zona, que não conseguiria aguentar. O que faz?", options: ["Concorre na mesma", "Pede à IA para concorrer por você", "Copia a proposta de outra empresa", "Procura oportunidades que correspondam ao que faz bem, de um tamanho que consegue aguentar"], answer: 3, why: "Procure trabalho que faz bem, numa zona que consegue servir e de um tamanho que consegue aguentar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ler um concurso",
          minutes: 6,
          goal: "Ler as partes principais de um concurso e decidir se concorre.",
          text: [
            "Um concurso (em inglês, \"solicitation\") é o pedido de propostas do governo. Pode chamar-se Request for Quote (RFQ, pedido de cotação), Request for Proposal (RFP, pedido de proposta) ou Invitation for Bid (IFB, convite para licitar). Podem ser longos, mas primeiro só precisa de encontrar algumas partes principais.",
            "Encontre estas: o caderno de encargos (\"statement of work\", o que querem que seja feito), as instruções (o que enviar e como), os critérios de avaliação (como vão escolher o vencedor, por exemplo o preço mais baixo ou a melhor relação qualidade-preço), o dia e a hora do prazo, o prazo para perguntas e o nome do responsável pela contratação. Veja também se há aditamentos, que são mudanças publicadas mais tarde.",
            "Depois decida se concorre ou não. Pergunte: Conseguimos fazer bem este trabalho? Cumprimos todos os requisitos, como licenças, seguros e a reserva? Conseguimos entregar a tempo e a um preço que ainda dê lucro? Temos trabalhos anteriores parecidos para mostrar?",
            "Falhar uma única instrução, como um limite de páginas ou um formulário obrigatório, pode fazer a proposta ser rejeitada. Faça uma lista de verificação a partir das instruções e marque cada ponto antes de enviar. Um assistente de IA pode ajudar a resumir um concurso público longo, mas você tem de ler as instruções verdadeiras."
          ],
          steps: ["Encontre o caderno de encargos, as instruções e os critérios de avaliação.", "Anote o dia e a hora do prazo, o prazo para perguntas e o responsável pela contratação.", "Veja se há aditamentos.", "Responda às quatro perguntas de concorrer ou não concorrer.", "Se concorrer, transforme as instruções numa lista de verificação e marque cada ponto."],
          words: [["Concurso", "o pedido de propostas do governo, como um RFQ, um RFP ou um IFB."], ["Caderno de encargos (statement of work)", "a parte que diz exatamente que trabalho é pedido."], ["Critérios de avaliação", "como o governo vai escolher o vencedor."], ["Aditamento", "uma mudança num concurso, publicada depois de ele sair."], ["Responsável pela contratação (contracting officer)", "a pessoa do governo com autoridade para assinar o contrato."]],
          slides: [
            { title: "Nomes que vai ver", bullets: ["RFQ: Request for Quote (pedido de cotação)", "RFP: Request for Proposal (pedido de proposta)", "IFB: Invitation for Bid (convite para licitar)"] },
            { title: "Encontre primeiro estas partes", bullets: ["Caderno de encargos e instruções", "Critérios de avaliação", "Prazo, prazo para perguntas, aditamentos"] },
            { title: "Concorrer ou não?", bullets: ["Conseguimos fazer bem?", "Cumprimos todos os requisitos?", "Entregamos a tempo e com lucro? Trabalhos anteriores?"] },
            { title: "Siga todas as instruções", bullets: ["Uma falha pode fazer você ser rejeitado", "Faça uma lista de verificação e marque cada ponto"] }
          ],
          tryIt: "Abra uma das oportunidades que encontrou na lição anterior. Escreva numa frase o caderno de encargos, os critérios de avaliação, o dia e a hora do prazo e o prazo para perguntas. Depois responda às quatro perguntas de concorrer ou não concorrer e decida.",
          youCanNow: "encontrar as partes principais de um concurso e tomar uma decisão clara de concorrer ou não.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é outro nome para um concurso?", options: ["Request for Proposal (RFP)", "Declaração de capacidades", "UEI", "Padrão de tamanho"], answer: 0, why: "Um concurso pode chamar-se RFQ, RFP ou IFB." },
            { objective: "O5", q: "As instruções põem um limite de 10 páginas. O que faz?", options: ["Envia 15 páginas para mostrar mais", "Põe isso na sua lista de verificação e marca antes de enviar", "Deixa a IA decidir o tamanho", "Ignora; é só uma sugestão"], answer: 1, why: "Falhar uma única instrução, como um limite de páginas, pode fazer a sua proposta ser rejeitada." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever uma declaração de capacidades",
          minutes: 6,
          goal: "Escrever uma declaração de capacidades de uma página que diga ao comprador o que faz e como o contactar.",
          text: [
            "Uma declaração de capacidades (em inglês, \"capability statement\") é um resumo de uma página sobre a sua empresa para compradores do governo e empreiteiros principais. Envia-a quando conhece compradores, em eventos de divulgação e quando se apresenta a um responsável pela contratação ou a um SB/DVBE Advocate.",
            "Tem quatro partes. Competências principais: o que faz melhor, em tópicos curtos. Trabalhos anteriores: dois ou três trabalhos que fez, com o tipo de cliente, o que fez e o resultado. Diferenciais: o que a torna diferente, como rapidez, uma capacidade especial ou presença local. Dados da empresa: nome legal, UEI, código CAGE se tiver, códigos NAICS, certificações e contactos.",
            "Mantenha-a numa página, fácil de ler de relance, com o seu logótipo e os contactos no topo. Use as palavras do comprador do caderno de encargos quando servirem. Faça uma versão para cada tipo de comprador se vende serviços diferentes.",
            "Um assistente de IA pode ajudar a encurtar os tópicos ou a torná-los mais claros. Não cole números privados como os seus dados bancários ou o EIN; o UEI e os códigos NAICS podem ser mostrados."
          ],
          steps: ["Escreva três a cinco competências principais em tópicos curtos.", "Acrescente dois ou três exemplos de trabalhos anteriores: tipo de cliente, trabalho, resultado.", "Escreva dois ou três diferenciais.", "Acrescente os dados da empresa: nome legal, UEI, código CAGE, códigos NAICS, certificações e contactos.", "Faça caber tudo numa página e guarde-a em PDF."],
          words: [["Declaração de capacidades", "um resumo de uma página sobre a sua empresa para compradores do governo."], ["Competências principais", "as coisas que a sua empresa faz melhor."], ["Trabalhos anteriores", "trabalho que já fez e que mostra que consegue entregar."], ["Diferencial", "algo que torna a sua empresa diferente das outras."], ["Código CAGE", "um código que identifica as empresas que trabalham para o governo, dado com o registo no SAM."]],
          slides: [
            { title: "O que é", bullets: ["Uma página sobre a sua empresa", "Para compradores do governo e empreiteiros principais", "Envie-a quando se apresenta"] },
            { title: "Quatro partes", bullets: ["Competências principais", "Trabalhos anteriores", "Diferenciais", "Dados da empresa: UEI, NAICS, certificações, contactos"] },
            { title: "Fácil de ler de relance", bullets: ["Uma página, logótipo e contactos no topo", "Use as palavras do comprador quando servirem", "Uma versão para cada tipo de comprador"] },
            { title: "Usar a IA para melhorar", bullets: ["Encurtar e clarificar os tópicos", "Sem dados bancários nem EIN nos pedidos", "O UEI e os códigos NAICS podem ser mostrados"] }
          ],
          tryIt: "Tarefa final: escreva a sua declaração de capacidades de uma página com competências principais, trabalhos anteriores, diferenciais e dados da empresa. Depois encontre uma oportunidade real no SAM.gov ou no Cal eProcure que corresponda a um código NAICS da sua declaração e anote o título e o prazo.",
          youCanNow: "escrever uma declaração de capacidades de uma página e ligá-la a oportunidades reais do governo.",
          quickCheck: [
            { objective: "O6", q: "Que tamanho deve ter uma declaração de capacidades?", options: ["Dez páginas", "O maior possível", "Uma página", "Uma frase"], answer: 2, why: "É um resumo de uma página, fácil de ler de relance." },
            { objective: "O6", q: "Está a escrever a parte dos dados da empresa. O que deixa de fora?", options: ["O seu UEI", "Os seus códigos NAICS", "Os seus contactos", "Os seus dados bancários e o EIN"], answer: 3, why: "O UEI e os códigos NAICS podem ser mostrados; números privados como os dados bancários e o EIN não." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Encontrar e ganhar contratos",
        questions: [
          { objective: "O4", q: "Onde publicam as agências federais as oportunidades de contrato?", options: ["SAM.gov", "Numa rede social", "No site do seu banco", "No serviço de viação (DMV)"], answer: 0, why: "As oportunidades de contrato federais são publicadas no SAM.gov." },
          { objective: "O5", q: "Que parte de um concurso diz como o vencedor vai ser escolhido?", options: ["A página de capa", "Os critérios de avaliação", "O logótipo da agência", "Os números das páginas"], answer: 1, why: "Os critérios de avaliação explicam como as propostas são avaliadas." },
          { objective: "O5", q: "Não consegue entregar na data pedida. Qual é a decisão inteligente?", options: ["Concorre na mesma e espera pelo melhor", "Promete e chega atrasado", "Decide não concorrer a este", "Ignora a data"], answer: 2, why: "Se não consegue cumprir um requisito importante, não concorrer protege a sua reputação." },
          { objective: "O6", q: "O que entra na parte dos dados da empresa de uma declaração de capacidades?", options: ["O número da sua conta bancária", "O seu EIN", "A sua palavra-passe", "O seu UEI e os seus códigos NAICS"], answer: 3, why: "O UEI, os códigos NAICS, as certificações e os contactos ajudam os compradores a encontrar e verificar a sua empresa." },
          { objective: "O6", q: "Qual é uma boa maneira de uma pequena empresa nova começar?", options: ["Concorrer só aos maiores contratos", "Ser subempreiteira de um empreiteiro principal", "Pagar a alguém para ganhar contratos por você", "Esperar que o governo telefone"], answer: 1, why: "Ser subempreiteiro cria trabalhos anteriores com menos risco." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ganhar Contratos com o Governo",
    questions: [
      { objective: "O1", q: "O que é o SAM.gov?", options: ["O site federal onde as empresas se registam para vender ao governo", "Um programa de empréstimos", "Um formulário de impostos", "Só um site do estado"], answer: 0, why: "O SAM.gov é o System for Award Management." },
      { objective: "O1", q: "Quantos caracteres tem um UEI?", options: ["4", "12", "20", "100"], answer: 1, why: "Um UEI é um código de 12 caracteres, com letras e números." },
      { objective: "O1", q: "Só com um UEI, sem o registo completo, você:", options: ["Pode ganhar qualquer contrato", "Recebe pagamentos automaticamente", "Não pode candidatar-se diretamente a contratos e apoios federais", "Fica com a certificação 8(a)"], answer: 2, why: "O SAM.gov diz que só um UEI não deixa candidatar-se a contratos e apoios federais." },
      { objective: "O1", q: "Quanto custa o registo no SAM.gov?", options: ["$500", "$99 por ano", "Uma percentagem de cada contrato", "Nada; é gratuito"], answer: 3, why: "O registo é gratuito; ignore ofertas pagas para o registar." },
      { objective: "O1", q: "Onde deve escrever os seus dados bancários para o SAM.gov?", options: ["Só no próprio SAM.gov", "Num assistente de IA", "Num e-mail para um desconhecido", "Nas redes sociais"], answer: 0, why: "Os dados privados vão só para o site oficial." },
      { objective: "O2", q: "Onde pode procurar códigos NAICS?", options: ["Num blogue qualquer", "census.gov/naics", "Na câmara do seu telefone", "Numa mensagem SMS"], answer: 1, why: "O US Census Bureau publica os códigos NAICS." },
      { objective: "O2", q: "Um padrão de tamanho diz-lhe:", options: ["O tamanho do seu logótipo", "Que tamanho o seu escritório tem de ter", "O tamanho máximo que pode ter e continuar a contar como pequena para um código NAICS", "Quantos contratos pode ganhar"], answer: 2, why: "Os padrões de tamanho definem o limite de pequena empresa para cada código NAICS." },
      { objective: "O2", q: "Uma reserva (set-aside) é:", options: ["Um reembolso de impostos", "Um empréstimo", "Uma multa por atraso", "Um contrato a que só certas empresas podem concorrer"], answer: 3, why: "As reservas guardam contratos para grupos como as pequenas empresas." },
      { objective: "O3", q: "Onde se pedem as certificações federais da SBA, como WOSB e VetCert?", options: ["certifications.sba.gov", "Só a um consultor pago", "Na biblioteca do seu condado", "irs.gov"], answer: 0, why: "As certificações da SBA pedem-se em certifications.sba.gov." },
      { objective: "O3", q: "Que certificação é para empresas em que pelo menos 51% pertencem e são controlados por mulheres cidadãs dos EUA?", options: ["HUBZone", "WOSB", "DVBE", "Só 8(a)"], answer: 1, why: "WOSB quer dizer Women-Owned Small Business, pequena empresa que pertence a mulheres." },
      { objective: "O3", q: "Quem certifica hoje as pequenas empresas de veteranos e de veteranos com deficiência ligada ao serviço para contratos federais?", options: ["O IRS", "A sua cidade", "A SBA, através do VetCert", "Ninguém"], answer: 2, why: "O programa VetCert da SBA passou a fazer a certificação em 2023." },
      { objective: "O3", q: "Onde se pede a certificação Small Business e DVBE da Califórnia?", options: ["SAM.gov", "No FBI", "Num banco", "No Cal eProcure, através do Department of General Services"], answer: 3, why: "A certificação SB e DVBE da Califórnia faz-se através do Cal eProcure." },
      { objective: "O3", q: "Numa DVBE da Califórnia, pelo menos 51% têm de pertencer a:", options: ["Veteranos com deficiência", "Quaisquer amigos de veteranos", "Investidores de fora do estado", "Funcionários do governo"], answer: 0, why: "Nas DVBE, pelo menos 51% pertencem e são geridos por veteranos com deficiência." },
      { objective: "O4", q: "Como pode receber as novas oportunidades do SAM.gov?", options: ["Telefonar todos os dias a cada agência", "Guardar a pesquisa para receber as novas oportunidades por e-mail", "Pagar pelos alertas", "Não pode"], answer: 1, why: "As pesquisas guardadas enviam as novas oportunidades por e-mail." },
      { objective: "O6", q: "Um empreiteiro principal é:", options: ["Um funcionário do governo", "Um banco", "A empresa que tem o contrato com o governo", "Uma certificação"], answer: 2, why: "O empreiteiro principal tem o contrato e pode contratar subempreiteiros." },
      { objective: "O4", q: "Quem pode ajudar você a encontrar concursos de graça?", options: ["Uma empresa que cobra para registar você", "Um desconhecido na internet", "Ninguém", "Um APEX Accelerator"], answer: 3, why: "Os APEX Accelerators dão ajuda gratuita com os contratos do governo." },
      { objective: "O5", q: "O que é um aditamento a um concurso?", options: ["Uma mudança publicada depois de ele sair", "O logótipo da sua empresa", "Um formulário de impostos", "Um depósito no banco"], answer: 0, why: "Os aditamentos mudam um concurso, por isso veja sempre se há algum." },
      { objective: "O5", q: "Que parte diz exatamente que trabalho é pedido?", options: ["O prazo", "O caderno de encargos", "O cargo do responsável pela contratação", "A morada da agência"], answer: 1, why: "O caderno de encargos descreve o trabalho." },
      { objective: "O5", q: "Porquê transformar as instruções de um concurso numa lista de verificação?", options: ["Para o tornar mais longo", "Para saltar passos", "Falhar uma única instrução pode fazer a sua proposta ser rejeitada", "É obrigatório pelo SAM.gov"], answer: 2, why: "Uma lista de verificação ajuda a cumprir todas as instruções." },
      { objective: "O6", q: "Qual destes é uma parte da declaração de capacidades?", options: ["A palavra-passe do seu banco", "Só a morada da sua casa", "Uma história de dez páginas", "Trabalhos anteriores"], answer: 3, why: "Os trabalhos anteriores mostram aos compradores que consegue entregar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 5, 9, 13, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Competências principais", objective: "O6", notYet: "Vagas ou em falta, por exemplo \"fazemos de tudo\".", meets: "Tópicos curtos com o que a empresa faz melhor.", exceeds: "Usa as palavras do comprador de um caderno de encargos quando servem." },
      { name: "Trabalhos anteriores", objective: "O6", notYet: "Nenhum trabalho anterior, ou trabalhos sem resultados.", meets: "Dois ou três trabalhos com o tipo de cliente, o que foi feito e o resultado.", exceeds: "Escolhe os trabalhos mais parecidos com o que os compradores do governo querem." },
      { name: "Diferenciais", objective: "O6", notYet: "Nada que distinga a empresa.", meets: "Diz claramente o que torna a empresa diferente.", exceeds: "Apoia cada ponto num facto de um trabalho real, como rapidez ou presença local." },
      { name: "Dados da empresa", objective: "O2", notYet: "Falta o UEI ou os códigos NAICS, ou mostra os dados bancários ou o EIN.", meets: "Nome legal, UEI, códigos NAICS, certificações e contactos, sem números privados.", exceeds: "O código NAICS principal foi verificado em relação ao padrão de tamanho." },
      { name: "Oportunidade correspondente", objective: "O4", notYet: "Nenhuma oportunidade encontrada, ou não corresponde a um código NAICS da declaração.", meets: "Uma oportunidade real no SAM.gov ou no Cal eProcure que corresponde a um código NAICS da declaração.", exceeds: "A pesquisa está guardada e a decisão de concorrer ou não está escrita." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Empresas com um registo ativo no SAM.gov em 60 dias (inquérito de seguimento)",
      "Empresas que pedem uma certificação da SBA ou da Califórnia, ou que enviam a primeira proposta ou oferta de subcontratação",
      "Contratos ou subcontratos ganhos em 12 meses, segundo os alunos ou os parceiros"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "O nome legal da empresa, a morada, o EIN e os dados bancários, escritos só no SAM.gov",
      "Um assistente de IA gratuito para encurtar os tópicos da declaração de capacidades",
      "Cerca de 60 minutos no total, mais o tempo para fazer o registo real"
    ],
    facilitatorNotes: [
      "Trabalhe com um APEX Accelerator local ou um SB/DVBE Advocate para responder a perguntas sobre registo e certificações.",
      "Mostre um exemplo real de um e-mail de burla de registo pago para os alunos o saberem reconhecer.",
      "Lembre aos alunos que nunca escrevam os dados bancários ou o EIN numa ferramenta de IA nem num e-mail.",
      "Use um concurso público real para o exercício de concorrer ou não concorrer, e peça aos alunos que façam juntos a lista de verificação das instruções.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
