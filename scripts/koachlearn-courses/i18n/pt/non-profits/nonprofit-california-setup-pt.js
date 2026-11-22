"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: California and US agency, form and site names stay in English, explained the first time.

const SOS_ARTICLES = { name: "Secretário de Estado da Califórnia (Secretary of State): formulários e taxas das corporações da Califórnia", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const SOS_SI = { name: "Secretário de Estado da Califórnia: Declaração de Informações (SI-100 para organizações sem fins lucrativos)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-statement-information" };
const BIZFILE = { name: "Secretário de Estado da Califórnia: bizfile Online", url: "https://bizfileonline.sos.ca.gov" };
const IRS_EIN = { name: "IRS: obter um Número de Identificação de Empregador (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const IRS_FEE = { name: "IRS: valor da taxa de análise dos Formulários 1023 e 1023-EZ", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" };
const IRS_1023 = { name: "IRS: sobre o Formulário 1023", url: "https://www.irs.gov/forms-pubs/about-form-1023" };
const IRS_1023EZ = { name: "IRS: sobre o Formulário 1023-EZ (a folha de elegibilidade está nas instruções)", url: "https://www.irs.gov/forms-pubs/about-form-1023-ez" };
const IRS_990N = { name: "IRS: Formulário 990-N (e-Postcard) para pequenas organizações isentas", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" };
const IRS_CHURCH = { name: "IRS, Publicação 1828: guia fiscal para igrejas e organizações religiosas", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" };
const FTB = { name: "Franchise Tax Board da Califórnia: instituições de caridade e sem fins lucrativos (Formulário 3500 / 3500A)", url: "https://www.ftb.ca.gov/file/business/types/charities-and-nonprofits/index.html" };
const AG_INITIAL = { name: "Procurador-Geral da Califórnia (Attorney General): Registo de Instituições de Caridade, registo inicial (CT-1)", url: "https://oag.ca.gov/charities/initial-reg" };
const AG_RENEW = { name: "Procurador-Geral da Califórnia: Registo de Instituições de Caridade, renovação anual (RRF-1)", url: "https://oag.ca.gov/charities/renewals" };

module.exports = {
  id: "nonprofit-california-setup-pt",
  lang: "pt",
  translationOf: "nonprofit-california-setup",
  category: "Non Profits",
  name: "Criar uma Organização Sem Fins Lucrativos na Califórnia, com os Custos",
  skills: "Escolher o tipo certo de organização sem fins lucrativos, Entregar os estatutos de constituição ao Secretário de Estado, Obter um EIN gratuito, Pedir a isenção de impostos federal e estadual, Registar-se no Procurador-Geral, Fazer um orçamento e um calendário de criação",
  outcome: "fazer um plano completo e com datas para criar uma organização sem fins lucrativos de benefício público na Califórnia: cada pedido na ordem certa, o serviço que o recebe, o nome do formulário, a taxa oficial e os pedidos anuais que a mantêm em situação regular.",
  about: [
    "Este curso é para quem está a criar uma instituição de caridade, um ministério, um grupo comunitário ou um programa na Califórnia: fundadores, pastores, membros da direção e voluntários que querem fazer tudo bem desde a primeira vez.",
    "Vai aprender os passos por ordem: escolher o tipo de organização e a direção, entregar os estatutos de constituição ao Secretário de Estado, obter um EIN gratuito do IRS, pedir o estatuto 501(c)(3), obter a isenção de impostos da Califórnia no Franchise Tax Board e registar-se no Registo de Instituições de Caridade do Procurador-Geral. Depois vai aprender os pedidos anuais e fazer um orçamento dos custos.",
    "Cada lição dura cerca de cinco minutos. Leia-a, veja os slides e depois faça a tarefa \"Experimente agora\". Todas as taxas deste curso foram verificadas na página oficial do governo a 27 de outubro de 2026, e o link está na lista para as poder verificar outra vez. As taxas mudam, por isso confirme sempre na página oficial antes de pagar. Este curso é educação, não é aconselhamento jurídico nem fiscal: para o seu caso, fale com um advogado de organizações sem fins lucrativos, um contabilista ou um centro gratuito de apoio a estas organizações."
  ],
  finalTask: "Faça um plano de criação de uma página para a sua organização (real ou de prática): uma tabela com cada pedido por ordem, o serviço, o nome do formulário, a taxa da página oficial, a data em que pensa entregá-lo e os pedidos anuais com as datas-limite. Acrescente o custo total de arranque e o link para cada página oficial.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que estão a criar uma instituição de caridade, um ministério, um grupo comunitário ou um programa na Califórnia: fundadores, pastores, membros da direção e voluntários que querem fazer tudo bem desde a primeira vez.",
    startingPoint: "Têm uma missão e muitas vezes já um grupo de ajudantes. A maioria nunca entregou nada ao Secretário de Estado, ao IRS, ao Franchise Tax Board ou ao Procurador-Geral, e não conhece a ordem nem os custos.",
    gap: "Os fundadores entregam os pedidos na ordem errada, pagam a sites por serviços que são gratuitos ou esquecem os pedidos anuais e perdem a isenção de impostos. Os alunos precisam de um plano com datas com cada pedido, serviço, formulário, taxa oficial e data-limite anual, para que a organização comece bem e fique em situação regular.",
    constraints: [
      "As taxas e os formulários mudam; cada taxa é verificada na página oficial antes de entregar",
      "Não é aconselhamento jurídico nem fiscal: na dúvida, os alunos perguntam a um advogado, a um centro de apoio ou a um profissional",
      "Privacidade: os números da Segurança Social ou ITIN vão só para o site oficial do IRS, nunca para ferramentas de IA ou e-mail",
      "As igrejas e os grupos religiosos têm regras especiais que é preciso verificar",
      "Palavras simples para quem cria uma organização pela primeira vez; cerca de 60 minutos no total"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os passos para criar uma instituição de caridade na Califórnia", action: "fazer a lista dos principais pedidos de criação por ordem e do serviço que trata de cada um", standard: "com todos os pedidos na ordem certa" },
    { id: "O2", condition: "Com o objetivo da sua organização", action: "escolher o formulário certo dos estatutos de constituição e planear a Declaração de Informações", standard: "com o lugar de entrega e as datas-limite certos" },
    { id: "O3", condition: "Depois de entregar os estatutos", action: "obter um EIN gratuito em irs.gov e planear a primeira reunião da direção", standard: "escrevendo os números privados só no site oficial do IRS e com todas as decisões da primeira reunião na lista" },
    { id: "O4", condition: "Usando a folha de elegibilidade do IRS", action: "escolher entre o Formulário 1023 e o Formulário 1023-EZ e dizer onde se entrega", standard: "com a taxa tirada da página oficial" },
    { id: "O5", condition: "Depois da aprovação federal ou do seu primeiro donativo", action: "planear a isenção no Franchise Tax Board e o registo no Registo do Procurador-Geral", standard: "com o formulário certo e o prazo de 30 dias do Registo" },
    { id: "O6", condition: "Com as taxas e as datas-limite verificadas", action: "fazer um orçamento de arranque e um calendário anual de pedidos", standard: "com cada taxa e data-limite verificada na página oficial" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Constituir a corporação",
      lessons: [
        {
          objectives: ["O1"],
          title: "O mapa: o que uma organização sem fins lucrativos precisa na Califórnia",
          minutes: 5,
          goal: "Fazer a lista dos principais pedidos de criação na ordem certa e do serviço que trata de cada um.",
          text: [
            "Na Califórnia, uma instituição de caridade costuma tornar-se uma corporação sem fins lucrativos de benefício público (nonprofit public benefit corporation). Ser uma corporação sem fins lucrativos é um assunto do estado. Estar isenta de impostos é um passo separado: uma vez no IRS (federal) e outra no Franchise Tax Board (estado). As instituições que angariam fundos também se registam no Procurador-Geral.",
            "A ordem habitual é: 1) escolher o objetivo, o nome e a primeira direção; 2) entregar os estatutos de constituição ao Secretário de Estado; 3) obter um EIN do IRS; 4) aprovar o regulamento interno e fazer a primeira reunião da direção; 5) entregar a Declaração de Informações; 6) pedir o estatuto federal 501(c)(3); 7) pedir a isenção da Califórnia no Franchise Tax Board; 8) registar-se no Registo de Instituições de Caridade do Procurador-Geral.",
            "Fazer isto por ordem é importante. Por exemplo, o IRS diz às corporações para se registarem no estado antes de pedirem um EIN, e o Procurador-Geral pede os estatutos e o regulamento interno quando se regista."
          ],
          steps: ["Escreva a sua missão em uma ou duas frases.", "Escolha três ou mais pessoas para a sua primeira direção, se puder.", "Escreva os oito passos por ordem numa página.", "Ao lado de cada passo, escreva o serviço: Secretário de Estado, IRS, Franchise Tax Board ou Procurador-Geral."],
          words: [["Corporação sem fins lucrativos de benefício público", "o tipo de corporação da Califórnia que a maioria das instituições de caridade usa; serve o público, não donos."], ["501(c)(3)", "a secção do código fiscal federal para as instituições de caridade; os donativos a elas normalmente podem ser deduzidos nos impostos."], ["Isenta de impostos", "que não tem de pagar imposto sobre o rendimento, depois de um serviço o aprovar."]],
          slides: [
            { title: "Quatro serviços com que vai tratar", bullets: ["Secretário de Estado: cria a corporação", "IRS: EIN e estatuto federal 501(c)(3)", "Franchise Tax Board: isenção de impostos da Califórnia", "Procurador-Geral: Registo de Instituições de Caridade"] },
            { title: "A ordem, parte 1", bullets: ["1. Missão, nome, primeira direção", "2. Estatutos de constituição (Secretário de Estado)", "3. EIN (IRS, gratuito)", "4. Regulamento interno e primeira reunião da direção"] },
            { title: "A ordem, parte 2", bullets: ["5. Declaração de Informações (Secretário de Estado)", "6. Pedido 501(c)(3) (IRS)", "7. Formulário 3500 ou 3500A (Franchise Tax Board)", "8. Registo no Procurador-Geral (CT-1)"] },
            { title: "Dois tipos de estatuto", bullets: ["Corporação sem fins lucrativos: assunto do estado", "Isenta de impostos: uma aprovação federal e estadual separada"] }
          ],
          sources: [SOS_ARTICLES, IRS_EIN, FTB, AG_INITIAL],
          tryIt: "Escreva a missão da sua organização em uma ou duas frases. Depois escreva os oito passos de criação por ordem e o serviço de cada um. Guarde esta página: vai tornar-se o seu plano final de criação.",
          youCanNow: "fazer a lista dos pedidos de criação de uma organização sem fins lucrativos na Califórnia por ordem e dizer o serviço que trata de cada um.",
          quickCheck: [
            { objective: "O1", q: "Que serviço trata da isenção de impostos da Califórnia?", options: ["O Franchise Tax Board", "O Secretário de Estado", "O Procurador-Geral", "A câmara municipal"], answer: 0, why: "A isenção de impostos é no IRS (federal) e no Franchise Tax Board (estado)." },
            { objective: "O1", q: "Um fundador quer pedir um EIN antes de entregar os estatutos. O que lhe diz?", options: ["Qualquer ordem serve", "Entregue primeiro os estatutos ao Secretário de Estado, como o IRS diz às corporações", "Salte os estatutos", "Registe-se primeiro no Procurador-Geral"], answer: 1, why: "O IRS diz às corporações para se registarem no estado antes de pedirem um EIN." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Entregar os estatutos de constituição",
          minutes: 5,
          goal: "Escolher o formulário certo dos estatutos e entregá-lo ao Secretário de Estado.",
          text: [
            "Os estatutos de constituição (articles of incorporation) criam a sua corporação. O Secretário de Estado da Califórnia tem três versões para organizações sem fins lucrativos: Formulário ARTS-PB (benefício público), Formulário ARTS-RE (religiosa) e Formulário ARTS-MU (benefício mútuo). A taxa de entrega de cada um era de $30 quando verificámos.",
            "A maioria das instituições de caridade usa o benefício público. Uma igreja ou um ministério pode usar o formulário religioso. O benefício mútuo é para grupos que servem os próprios membros, como alguns clubes, e não serve para a maioria das instituições de caridade. Se pensa pedir o estatuto 501(c)(3), o IRS precisa de certas frases nos seus estatutos sobre o seu objetivo e sobre o que acontece aos seus bens se fechar. Leia as instruções do formulário e peça a um advogado ou a um centro de apoio para os rever.",
            "Pode entregar pela internet no bizfile Online (bizfileonline.sos.ca.gov), ou pelo correio, ou pessoalmente. Pesquise primeiro o nome para ter a certeza de que está livre. Em 90 dias, entrega também uma Declaração de Informações (Formulário SI-100, $20), e outra vez de dois em dois anos."
          ],
          steps: ["Pesquise o seu nome no bizfile Online.", "Escolha o formulário: ARTS-PB para a maioria das instituições de caridade, ARTS-RE para grupos religiosos.", "Preencha-o com o nome, o objetivo e o agente para receber citações.", "Entregue pela internet e pague a taxa indicada na página oficial.", "Ponha a Declaração de Informações (SI-100) no calendário: em 90 dias, depois de dois em dois anos."],
          words: [["Estatutos de constituição", "o documento curto que cria legalmente a sua corporação."], ["Agente para receber citações", "a pessoa ou empresa que aceita receber documentos legais em nome da organização (agent for service of process)."], ["Declaração de Informações", "um formulário que diz ao estado a sua morada e os seus dirigentes; as organizações sem fins lucrativos entregam o SI-100."]],
          slides: [
            { title: "Três formulários de estatutos sem fins lucrativos", bullets: ["ARTS-PB: benefício público (a maioria das instituições de caridade)", "ARTS-RE: religiosa", "ARTS-MU: benefício mútuo (serve os membros)"] },
            { title: "Taxas quando verificadas (27 out 2026)", bullets: ["Estatutos: $30", "Declaração de Informações SI-100: $20", "Confirme sempre em sos.ca.gov antes de pagar"] },
            { title: "Como entregar", bullets: ["Pesquise primeiro o nome", "Entregue pela internet em bizfileonline.sos.ca.gov", "Ou pelo correio, ou pessoalmente"] },
            { title: "Não se esqueça", bullets: ["SI-100 em 90 dias depois da entrega", "Depois de dois em dois anos", "Frases do 501(c)(3): peça para reverem os estatutos"] }
          ],
          sources: [SOS_ARTICLES, SOS_SI, BIZFILE],
          tryIt: "Abra a página de formulários do Secretário de Estado. Encontre o formulário de estatutos que serve para o seu grupo e anote o nome do formulário e a taxa atual. Depois encontre a taxa do SI-100 e acrescente as duas ao seu plano, com uma data-limite para o SI-100.",
          youCanNow: "escolher o formulário certo dos estatutos, encontrar a taxa na página oficial e marcar a sua Declaração de Informações.",
          quickCheck: [
            { objective: "O2", q: "Que formulário de estatutos não serve para a maioria das instituições de caridade?", options: ["ARTS-PB", "ARTS-RE", "ARTS-MU (benefício mútuo)", "Nenhum deles serve"], answer: 2, why: "O benefício mútuo é para grupos que servem os próprios membros e não serve para a maioria das instituições de caridade." },
            { objective: "O2", q: "Quer dar à sua organização o nome \"Hope Kitchen\". O que faz antes de entregar?", options: ["Entrega já", "Pergunta à IA se o nome está livre", "Paga a um site para o reservar", "Pesquisa primeiro o nome para ter a certeza de que está livre"], answer: 3, why: "Pesquise primeiro o nome para ter a certeza de que está livre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Obter o EIN, o regulamento interno e a primeira reunião da direção",
          minutes: 5,
          goal: "Obter um EIN gratuito com segurança e preparar a primeira reunião da direção.",
          text: [
            "Um EIN (Employer Identification Number, número de identificação de empregador) é o número fiscal federal da organização. Precisa dele para uma conta no banco, para os salários e para os pedidos de isenção de impostos. O IRS diz que nunca tem de pagar por um EIN. Alguns sites cobram por ele: evite-os e faça o pedido em irs.gov.",
            "A ferramenta do IRS na internet precisa do número da Segurança Social (Social Security) ou do ITIN da pessoa responsável, e tem de ser terminada de uma só vez. Escreva estes números privados só no site oficial do IRS, nunca numa ferramenta de IA, num e-mail ou num site qualquer. Imprima ou guarde a carta de confirmação.",
            "O regulamento interno (bylaws) são as suas regras: quantos diretores há, como são eleitos, como funcionam as reuniões e quem assina os cheques. Na primeira reunião, a direção aprova o regulamento interno, elege os dirigentes, aprova a abertura de uma conta no banco e aprova uma política de conflito de interesses. Escreva a ata e guarde-a."
          ],
          steps: ["Espere até o Secretário de Estado registar os seus estatutos.", "Vá a irs.gov e peça o EIN com a ferramenta gratuita na internet.", "Guarde a carta de confirmação do EIN na pasta dos seus documentos.", "Escreva um rascunho do regulamento interno e de uma política de conflito de interesses.", "Faça a primeira reunião da direção e escreva a ata."],
          words: [["EIN", "Employer Identification Number: o número fiscal federal gratuito de uma organização."], ["Regulamento interno", "as regras escritas de como funcionam a organização e a sua direção (bylaws)."], ["Ata", "o registo escrito do que a direção decidiu numa reunião."], ["Política de conflito de interesses", "regras sobre o que um membro da direção tem de fazer quando uma decisão o pode beneficiar pessoalmente."]],
          slides: [
            { title: "O seu EIN", bullets: ["O número fiscal federal da organização", "Gratuito em irs.gov: nunca pague a um site por ele", "Precisa dele para o banco e para os pedidos de isenção"] },
            { title: "Mantenha os números privados em privado", bullets: ["O número da Segurança Social ou ITIN vai só para o site oficial do IRS", "Nunca para ferramentas de IA, e-mail ou outros sites", "Guarde a carta de confirmação"] },
            { title: "Primeira reunião da direção", bullets: ["Aprovar o regulamento interno", "Eleger os dirigentes", "Aprovar uma conta no banco", "Aprovar uma política de conflito de interesses"] }
          ],
          sources: [IRS_EIN],
          tryIt: "Faça uma ordem de trabalhos para a primeira reunião com cinco pontos: aprovar o regulamento interno, eleger os dirigentes, aprovar a conta no banco, aprovar a política de conflito de interesses e marcar a data da próxima reunião. Acrescente \"Pedir o EIN em irs.gov (gratuito)\" ao seu plano, com uma data depois da entrega dos estatutos.",
          youCanNow: "obter um EIN com segurança e de graça, e conduzir uma primeira reunião da direção com as decisões certas na ordem de trabalhos.",
          quickCheck: [
            { objective: "O3", q: "Para que precisa de um EIN?", options: ["Uma conta no banco, salários e pedidos de isenção de impostos", "Só para comprar um edifício", "Só para igrejas", "Para nada; é só um enfeite opcional"], answer: 0, why: "O EIN é o número fiscal federal da organização para o banco, os salários e os pedidos de isenção." },
            { objective: "O3", q: "Está a preencher a ferramenta do EIN do IRS na internet e precisa de parar a meio. O que deve saber?", options: ["Pode guardar e terminar na próxima semana", "Tem de ser terminada de uma só vez", "A IA pode terminar por você", "Pode enviar o resto ao IRS por e-mail"], answer: 1, why: "A ferramenta do IRS na internet tem de ser terminada de uma só vez." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Constituir a corporação",
        questions: [
          { objective: "O1", q: "Que serviço cria uma corporação sem fins lucrativos na Califórnia?", options: ["O IRS", "O Secretário de Estado da Califórnia", "O Procurador-Geral", "O registo do condado"], answer: 1, why: "Os estatutos de constituição são entregues ao Secretário de Estado." },
          { objective: "O2", q: "Um banco alimentar para toda a comunidade vai muito provavelmente entregar que formulário de estatutos?", options: ["ARTS-MU (benefício mútuo)", "ARTS-RE (religiosa)", "ARTS-PB (benefício público)", "Um formulário de empresa LLC"], answer: 2, why: "As instituições de caridade que servem o público costumam entregar estatutos de benefício público." },
          { objective: "O3", q: "Um site oferece-se para obter o seu EIN por $79. O que deve fazer?", options: ["Pagar, é mais rápido", "Fazer o pedido de graça em irs.gov", "Pedir ao Procurador-Geral para pagar", "Não obter o EIN"], answer: 1, why: "O IRS diz que um EIN nunca custa dinheiro; faça o pedido em irs.gov." },
          { objective: "O2", q: "Quando deve ser entregue a primeira Declaração de Informações (SI-100)?", options: ["Em 90 dias depois da entrega dos estatutos", "Só quando fechar", "De dez em dez anos", "Nunca, para organizações sem fins lucrativos"], answer: 0, why: "O Secretário de Estado diz em 90 dias, e depois de dois em dois anos." },
          { objective: "O3", q: "Qual é uma tarefa da primeira reunião da direção?", options: ["Entregar o 990-N", "Aprovar o regulamento interno e eleger os dirigentes", "Pagar a taxa de análise do IRS", "Renovar no Procurador-Geral"], answer: 1, why: "A primeira reunião aprova o regulamento interno, elege os dirigentes e aprova o básico, como a conta no banco." }
        ]
      }
    },
    {
      name: "Capítulo 2: Isenção de impostos, registo e custos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir o estatuto federal 501(c)(3)",
          minutes: 6,
          goal: "Escolher entre o Formulário 1023 e o Formulário 1023-EZ e saber a taxa.",
          text: [
            "Para ser uma instituição de caridade 501(c)(3), a maioria das organizações faz o pedido ao IRS. Há dois formulários. O Formulário 1023 é o pedido completo; a taxa de análise era de $600 quando verificámos. O Formulário 1023-EZ é um formulário mais curto para pequenas organizações; a taxa era de $275. Os dois são entregues pela internet no Pay.gov, e a taxa é paga lá quando entrega.",
            "Nem todos podem usar o 1023-EZ. O IRS tem uma folha de elegibilidade no fim das instruções do Formulário 1023-EZ. Ela olha para coisas como quanto dinheiro espera angariar e os seus bens. Preencha a folha com honestidade antes de escolher.",
            "As igrejas têm regras especiais: o IRS trata as igrejas de forma diferente das outras instituições de caridade, e muitas não são obrigadas a fazer o pedido, embora algumas o façam. Leia a Publicação 1828 do IRS ou pergunte a um profissional. Quando o IRS o aprovar, envia uma carta de decisão (determination letter). Guarde-a para sempre: os doadores, os financiadores e o estado vão pedi-la."
          ],
          steps: ["Abra as instruções do Formulário 1023-EZ em irs.gov e preencha a folha de elegibilidade.", "Se cumprir as condições e servir, planeie o 1023-EZ; se não, planeie o Formulário 1023.", "Crie uma conta no Pay.gov e preencha o formulário lá.", "Pague a taxa de análise indicada na página de taxas do IRS.", "Guarde a carta de decisão quando chegar."],
          words: [["Formulário 1023", "o pedido completo ao IRS para o estatuto 501(c)(3)."], ["Formulário 1023-EZ", "o pedido curto ao IRS para pequenas organizações que passam na folha de elegibilidade."], ["Taxa de análise", "a taxa que o IRS cobra para analisar o pedido (user fee)."], ["Carta de decisão", "a carta do IRS que diz que a sua organização está isenta de impostos."]],
          slides: [
            { title: "Dois formulários federais", bullets: ["Formulário 1023: pedido completo, taxa $600", "Formulário 1023-EZ: formulário curto, taxa $275", "Taxas quando verificadas, 27 out 2026: confirme em irs.gov"] },
            { title: "Qual escolher?", bullets: ["Faça a folha de elegibilidade das instruções do 1023-EZ", "Cumpre as condições e serve: 1023-EZ", "Não cumpre: Formulário 1023"] },
            { title: "Como entregar", bullets: ["Pela internet no Pay.gov", "Pague a taxa de análise quando entregar"] },
            { title: "As igrejas e a carta", bullets: ["As igrejas têm regras especiais: veja a Publicação 1828 do IRS", "Guarde a carta de decisão para sempre"] }
          ],
          sources: [IRS_FEE, IRS_1023, IRS_1023EZ, IRS_CHURCH],
          tryIt: "Abra as instruções do Formulário 1023-EZ em irs.gov e leia a folha de elegibilidade. Decida que formulário a sua organização entregaria e depois acrescente ao seu plano esse formulário, a taxa da página de taxas do IRS e uma data prevista.",
          youCanNow: "decidir entre o Formulário 1023 e o 1023-EZ, encontrar a taxa atual e saber onde entregar.",
          quickCheck: [
            { objective: "O4", q: "Quando se paga a taxa de análise do IRS para o Formulário 1023 ou 1023-EZ?", options: ["Um ano depois da aprovação", "Com um cheque ao Secretário de Estado", "No Pay.gov, quando entrega", "Nunca"], answer: 2, why: "Os dois formulários são entregues pela internet no Pay.gov, e a taxa é paga lá quando entrega." },
            { objective: "O4", q: "O IRS envia a sua carta de decisão. O que faz com ela?", options: ["Deita-a fora depois de um ano", "Dá a única cópia a um doador", "Cola-a numa IA", "Guarda-a para sempre, porque os doadores, os financiadores e o estado vão pedi-la"], answer: 3, why: "Guarde a carta de decisão para sempre; muitos vão pedi-la." }
          ]
        },
        {
          objectives: ["O5"],
          title: "A isenção da Califórnia e o Registo de Instituições de Caridade",
          minutes: 5,
          goal: "Planear a isenção no Franchise Tax Board e o registo no Procurador-Geral.",
          text: [
            "A aprovação federal sozinha não o isenta dos impostos da Califórnia. Também faz o pedido ao Franchise Tax Board (FTB). O Formulário 3500 é o pedido completo da Califórnia. O Formulário 3500A é um formulário mais curto para organizações que já têm a carta de decisão do IRS. Veja em ftb.ca.gov o formulário atual, as instruções e qualquer taxa antes de entregar, porque não conseguimos confirmar a taxa na página do FTB para este curso.",
            "As instituições que guardam ou angariam dinheiro para fins de caridade na Califórnia também se registam no Registo de Instituições de Caridade do Procurador-Geral. Regista-se pela internet com o Formulário CT-1 em 30 dias depois de receber pela primeira vez bens de caridade, como o seu primeiro donativo. A taxa era de $50 quando verificámos. Carrega os seus estatutos, o regulamento interno, a carta de decisão do IRS (ou o seu EIN, se ainda não a tiver) e o seu Formulário 1023 ou 1023-EZ, se entregou um.",
            "Alguns grupos podem estar dispensados do registo. Se pensa que o seu é um deles (por exemplo, uma organização religiosa), leia as páginas do Registo ou pergunte ao Registo antes de o saltar."
          ],
          steps: ["Depois de chegar a carta do IRS, planeie o Formulário 3500A em ftb.ca.gov (ou o Formulário 3500 se fizer o pedido sem ela).", "Anote a data em que recebe pela primeira vez um donativo ou outro bem de caridade.", "Em 30 dias a partir dessa data, registe-se pela internet com o Formulário CT-1.", "Carregue os estatutos, o regulamento interno, a carta do IRS ou o EIN, e o seu 1023 ou 1023-EZ.", "Pague a taxa do Registo indicada em oag.ca.gov."],
          words: [["Franchise Tax Board (FTB)", "o serviço de impostos do estado da Califórnia."], ["Formulário 3500A", "o formulário curto de isenção da Califórnia para grupos que já têm uma carta federal 501(c)(3)."], ["Registo de Instituições de Caridade", "o serviço do Procurador-Geral que regista e fiscaliza as instituições de caridade na Califórnia (Registry of Charities)."], ["CT-1", "o formulário de registo inicial das instituições de caridade no Procurador-Geral."]],
          slides: [
            { title: "Isenção de impostos da Califórnia (FTB)", bullets: ["Separada da aprovação do IRS", "Formulário 3500: pedido completo", "Formulário 3500A: se já tem a carta do IRS", "Veja a taxa atual em ftb.ca.gov"] },
            { title: "Registo de Instituições de Caridade (Procurador-Geral)", bullets: ["Formulário CT-1, entregue pela internet", "Em 30 dias depois de receber pela primeira vez bens de caridade", "Taxa: $50 quando verificada, 27 out 2026"] },
            { title: "Tenha isto pronto para o CT-1", bullets: ["Estatutos e regulamento interno", "Carta de decisão do IRS, ou o EIN se ainda não a tiver", "O seu Formulário 1023 ou 1023-EZ, se o entregou"] }
          ],
          sources: [FTB, AG_INITIAL],
          tryIt: "Acrescente duas linhas ao seu plano: a isenção no FTB (nome do formulário, \"ver a taxa em ftb.ca.gov\", data prevista depois da carta do IRS) e o CT-1 do Procurador-Geral ($50, em 30 dias depois do seu primeiro donativo). Faça a lista dos quatro documentos que vai carregar.",
          youCanNow: "planear a isenção de impostos da Califórnia e o registo no Registo de Instituições de Caridade com os formulários, os prazos e os documentos certos.",
          quickCheck: [
            { objective: "O5", q: "Que formulário é o pedido completo de isenção da Califórnia?", options: ["Formulário 3500", "Formulário CT-1", "Formulário SI-100", "Formulário RRF-1"], answer: 0, why: "O Formulário 3500 é o pedido completo da Califórnia; o 3500A é o mais curto." },
            { objective: "O5", q: "O seu ministério pensa que pode estar dispensado do registo no Registo. O que faz?", options: ["Salta-o sem verificar", "Lê as páginas do Registo ou pergunta ao Registo antes de o saltar", "Pergunta a um amigo", "Regista-se no IRS em vez disso"], answer: 1, why: "Verifique as páginas do Registo ou pergunte ao Registo antes de saltar o registo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter a situação regular e o seu orçamento de criação",
          minutes: 6,
          goal: "Fazer um orçamento de arranque e um calendário anual de pedidos.",
          text: [
            "Começar não é o fim. Todos os anos entrega uma declaração ao IRS: os grupos pequenos com receitas brutas normalmente de $50,000 ou menos costumam poder entregar o Formulário 990-N e-Postcard; os maiores entregam o Formulário 990-EZ ou 990. Se falhar três anos seguidos, o IRS tira-lhe automaticamente a isenção de impostos.",
            "Todos os anos também renova no Procurador-Geral com o Formulário RRF-1. A taxa depende da receita total: quando verificámos era de $25 abaixo de $50,000, $50 de $50,000 a $100,000 e $75 de $100,001 a $250,000, e sobe para instituições maiores. O prazo é de 4 meses e 15 dias depois do fim do seu ano fiscal (15 de maio para um ano que acaba a 31 de dezembro). Tem também a Declaração de Informações de dois em dois anos e as declarações anuais da Califórnia no FTB: veja em ftb.ca.gov que formulário é o seu.",
            "Taxas do governo para começar, como verificadas: estatutos $30, Declaração de Informações $20, EIN gratuito, IRS $275 (1023-EZ) ou $600 (1023), Registo $50, mais qualquer taxa do FTB. Isto dá cerca de $375 com o 1023-EZ ou $700 com o Formulário 1023, antes de qualquer taxa do FTB, de um serviço de agente registado ou de um advogado. Use a IA para ajudar a fazer o rascunho de uma tabela de orçamento ou de uma lista de lembretes, mas verifique cada número na página oficial."
          ],
          steps: ["Faça a lista de cada taxa de arranque a partir das páginas oficiais.", "Some-as para o formulário que escolheu (1023-EZ ou 1023).", "Acrescente os pedidos anuais: série 990 do IRS, RRF-1 do Procurador-Geral, declaração anual do FTB.", "Acrescente a Declaração de Informações de dois em dois anos.", "Ponha cada data-limite num calendário partilhado com dois lembretes."],
          words: [["Formulário 990-N", "o e-Postcard do IRS: um aviso anual curto pela internet para pequenos grupos isentos."], ["RRF-1", "o formulário de renovação anual das instituições de caridade no Procurador-Geral."], ["Ano fiscal", "o período de 12 meses que a sua organização usa para as contas, muitas vezes de janeiro a dezembro."], ["Situação regular", "estar em dia com todos os pedidos e taxas obrigatórios (good standing)."]],
          slides: [
            { title: "Todos os anos", bullets: ["IRS: 990-N, 990-EZ ou 990", "Procurador-Geral: RRF-1, taxa conforme a receita", "FTB: veja em ftb.ca.gov o seu formulário anual"] },
            { title: "Atenção", bullets: ["Falhar a declaração do IRS 3 anos seguidos: perde a isenção", "RRF-1: prazo de 4 meses e 15 dias depois do fim do ano", "SI-100 de dois em dois anos"] },
            { title: "Taxas de arranque (verificadas a 27 out 2026)", bullets: ["Estatutos $30 + SI-100 $20 + EIN gratuito", "IRS: $275 (1023-EZ) ou $600 (1023)", "Registo CT-1 $50, mais qualquer taxa do FTB"] },
            { title: "O seu total", bullets: ["Cerca de $375 com o 1023-EZ, $700 com o 1023", "Antes da taxa do FTB, do serviço de agente ou do advogado", "Confirme cada taxa na página oficial"] }
          ],
          sources: [IRS_990N, AG_RENEW, SOS_SI, IRS_FEE, SOS_ARTICLES, AG_INITIAL, FTB],
          tryIt: "Tarefa final: termine o seu plano de criação de uma página. Faça uma tabela com cada pedido por ordem, o serviço, o formulário, a taxa da página oficial e a data prevista. Acrescente os pedidos anuais e as datas-limite, o custo total de arranque e o link oficial de cada linha.",
          youCanNow: "fazer um plano completo de criação de uma organização sem fins lucrativos na Califórnia, com os custos e um calendário anual que a mantém em situação regular.",
          quickCheck: [
            { objective: "O6", q: "Que pedido anual vai para o Procurador-Geral?", options: ["Formulário 990-N", "Formulário 1023", "Formulário RRF-1", "Formulário ARTS-PB"], answer: 2, why: "Todos os anos renova no Procurador-Geral com o Formulário RRF-1." },
            { objective: "O6", q: "A IA faz o rascunho da sua tabela de orçamento de arranque. O que faz com as taxas que lá estão?", options: ["Confia nelas; a IA está atualizada", "Arredonda-as para cima", "Deixa-as em branco", "Verifica cada número na página oficial"], answer: 3, why: "Use a IA para fazer o rascunho da tabela, mas verifique cada número na página oficial." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Isenção de impostos, registo e custos",
        questions: [
          { objective: "O4", q: "Quais eram as taxas de análise do IRS para o Formulário 1023 e o Formulário 1023-EZ quando verificadas?", options: ["$100 e $50", "$600 e $275", "Gratuitas para os dois", "$1,000 e $500"], answer: 1, why: "A página de taxas do IRS indicava $600 para o Formulário 1023 e $275 para o Formulário 1023-EZ." },
          { objective: "O5", q: "A sua organização já tem a carta de decisão do IRS. Que formulário da Califórnia é feito para você?", options: ["Formulário 3500A", "Formulário CT-1", "Formulário SI-100", "Formulário 990-N"], answer: 0, why: "O Formulário 3500A é o formulário curto do FTB para grupos que já têm a carta federal." },
          { objective: "O5", q: "Recebeu o seu primeiro donativo a 1 de março. Quando tem de se registar no Registo de Instituições de Caridade?", options: ["Em 30 dias", "Em 2 anos", "Só depois de angariar $50,000", "Nunca"], answer: 0, why: "O Procurador-Geral diz para se registar em 30 dias depois de receber pela primeira vez bens de caridade." },
          { objective: "O6", q: "O que acontece se falhar a declaração anual do IRS três anos seguidos?", options: ["Nada", "Uma multa de $10", "Perda automática da isenção de impostos", "O seu EIN muda"], answer: 2, why: "O IRS retira automaticamente a isenção depois de três anos seguidos sem declaração." },
          { objective: "O6", q: "Uma instituição com $40,000 de receita total renova no Procurador-Geral. Qual era a taxa do RRF-1 quando verificada?", options: ["$200", "$100", "$75", "$25"], answer: 3, why: "A tabela do RRF-1 indicava $25 para uma receita total abaixo de $50,000." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criar uma Organização Sem Fins Lucrativos na Califórnia, com os Custos",
    questions: [
      { objective: "O1", q: "Tornar-se uma corporação sem fins lucrativos e ficar isenta de impostos são:", options: ["O mesmo passo", "Só assuntos federais", "Só necessários para igrejas", "Passos separados, com serviços diferentes"], answer: 3, why: "O estado cria a corporação; o IRS e o FTB dão a isenção em separado." },
      { objective: "O1", q: "O que vem primeiro?", options: ["Registar-se no Procurador-Geral", "Entregar os estatutos ao Secretário de Estado", "Entregar o Formulário 3500A", "Entregar o RRF-1"], answer: 1, why: "A corporação tem de existir antes dos outros pedidos." },
      { objective: "O1", q: "Que serviço trata do Registo de Instituições de Caridade?", options: ["O IRS", "O Franchise Tax Board", "O Procurador-Geral da Califórnia", "O Secretário de Estado"], answer: 2, why: "O Registo de Instituições de Caridade faz parte do gabinete do Procurador-Geral." },
      { objective: "O2", q: "A maioria das instituições de caridade na Califórnia entrega que tipo de estatutos?", options: ["Benefício mútuo", "Sociedade comercial por ações", "LLC", "Benefício público"], answer: 3, why: "As corporações de benefício público servem o público, o que serve para a maioria das instituições de caridade." },
      { objective: "O2", q: "Qual era a taxa do Secretário de Estado para os estatutos sem fins lucrativos quando verificada?", options: ["$30", "$300", "$600", "Gratuita"], answer: 0, why: "A página de formulários indicava $30 para o ARTS-PB, o ARTS-RE e o ARTS-MU." },
      { objective: "O2", q: "Onde pode entregar os estatutos pela internet?", options: ["Pay.gov", "irs.gov", "Qualquer ferramenta de IA", "bizfileonline.sos.ca.gov"], answer: 3, why: "O bizfile Online é o site de entregas pela internet do Secretário de Estado." },
      { objective: "O2", q: "Depois da primeira, de quanto em quanto tempo se entrega a Declaração de Informações (SI-100)?", options: ["Todos os meses", "Todos os anos", "De dois em dois anos", "Nunca mais"], answer: 2, why: "O Secretário de Estado diz de dois em dois anos." },
      { objective: "O3", q: "Quanto cobra o IRS por um EIN?", options: ["$50", "$25", "Depende do seu estado", "Nada"], answer: 3, why: "O IRS diz que nunca tem de pagar uma taxa por um EIN." },
      { objective: "O3", q: "Onde deve escrever o número da Segurança Social da pessoa responsável para o EIN?", options: ["Só no site oficial do IRS", "Num assistente de IA para o verificar", "Num e-mail de grupo para a direção", "Em qualquer site que ofereça ajuda"], answer: 0, why: "Os números privados vão só para o site oficial do serviço." },
      { objective: "O3", q: "Que decisão pertence à primeira reunião da direção?", options: ["Entregar o 990-N", "Aprovar a política de conflito de interesses", "Pagar o RRF-1", "Receber a carta do IRS"], answer: 1, why: "A primeira reunião aprova o regulamento interno e as políticas e elege os dirigentes." },
      { objective: "O4", q: "Como decide se pode usar o Formulário 1023-EZ?", options: ["Pergunta a qualquer site", "Escolhe o mais barato", "O Procurador-Geral decide", "Preenche a folha de elegibilidade do IRS nas instruções do 1023-EZ"], answer: 3, why: "A folha de elegibilidade do IRS decide quem pode usar o formulário curto." },
      { objective: "O4", q: "Onde se entregam o Formulário 1023 e o 1023-EZ?", options: ["Por fax para Sacramento", "No serviço do condado", "Pela internet no Pay.gov", "No bizfile Online"], answer: 2, why: "O IRS diz que os dois são preenchidos e pagos no Pay.gov." },
      { objective: "O4", q: "O que mostra uma carta de decisão do IRS?", options: ["O nome da sua corporação foi aprovado", "A sua organização está isenta de impostos pela lei federal", "Pagou a taxa do Registo", "O seu número EIN"], answer: 1, why: "A carta de decisão confirma a isenção de impostos federal." },
      { objective: "O4", q: "Uma igreja quer saber se tem de entregar o Formulário 1023. Onde deve procurar primeiro?", options: ["Na Publicação 1828 do IRS ou com um profissional", "Numa publicação nas redes sociais", "No serviço de viação (DMV)", "No Formulário SI-100"], answer: 0, why: "As igrejas têm regras especiais do IRS explicadas na Publicação 1828." },
      { objective: "O5", q: "Depois da aprovação federal, uma organização sem fins lucrativos da Califórnia fica isenta dos impostos do estado:", options: ["Automaticamente", "Só depois de o FTB a aprovar (Formulário 3500 ou 3500A)", "Só se for uma igreja", "Nunca"], answer: 1, why: "A isenção da Califórnia é um pedido separado ao Franchise Tax Board." },
      { objective: "O5", q: "Que documentos carrega para o CT-1 do Procurador-Geral?", options: ["Estatutos, regulamento interno, carta do IRS ou EIN, e o seu 1023 se o entregou", "Só uma fotografia do documento de identificação", "Nomes e moradas dos doadores", "A palavra-passe do seu banco"], answer: 0, why: "O Registo pede os documentos de fundação, o regulamento interno, a carta do IRS ou o EIN e o pedido de isenção." },
      { objective: "O5", q: "Qual era a taxa do registo inicial no Registo quando verificada?", options: ["$25", "$50", "$275", "$600"], answer: 1, why: "A página do registo inicial indicava uma taxa de $50." },
      { objective: "O6", q: "As receitas brutas de uma pequena instituição são normalmente de $50,000 ou menos. Que declaração anual do IRS costuma poder usar?", options: ["Formulário 1023", "Formulário 990-N e-Postcard", "Formulário CT-1", "Formulário ARTS-PB"], answer: 1, why: "O IRS deixa a maioria dos grupos pequenos abaixo desse valor entregar o 990-N." },
      { objective: "O6", q: "O seu ano fiscal acaba a 31 de dezembro. Quando é normalmente o prazo do RRF-1?", options: ["1 de janeiro", "1 de março", "15 de maio", "31 de dezembro"], answer: 2, why: "O prazo é de 4 meses e 15 dias depois do fim do ano, ou seja, 15 de maio." },
      { objective: "O6", q: "Com as taxas verificadas, quanto custam mais ou menos as taxas do governo para começar com o Formulário 1023-EZ, antes de qualquer taxa do FTB?", options: ["Cerca de $375", "Cerca de $50", "Cerca de $1,500", "Nada"], answer: 0, why: "$30 estatutos + $20 SI-100 + $275 1023-EZ + $50 CT-1 = $375, com o EIN gratuito." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 7, 10, 14, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pedidos por ordem", objective: "O1", notYet: "Falta um pedido ou está fora de ordem.", meets: "Todos os pedidos de criação estão na lista na ordem certa, com o serviço.", exceeds: "Explica porque a ordem é importante em pelo menos dois passos." },
      { name: "Formulários certos", objective: "O2", notYet: "Indica um formulário errado, como estatutos de benefício mútuo para uma instituição de caridade.", meets: "Cada pedido indica o formulário certo, incluindo os estatutos, o SI-100, o 1023 ou 1023-EZ, o 3500 ou 3500A e o CT-1.", exceeds: "Explica a escolha entre o 1023 e o 1023-EZ usando a folha de elegibilidade." },
      { name: "Taxas oficiais e links", objective: "O6", notYet: "Uma taxa foi adivinhada ou não tem link.", meets: "Cada taxa vem da página oficial, com um link, e o total de arranque está somado.", exceeds: "Indica a data em que cada taxa foi verificada." },
      { name: "Datas planeadas", objective: "O5", notYet: "Não há datas planeadas, ou os prazos de 30 dias do Registo e de 90 dias do SI-100 não são cumpridos.", meets: "Uma data planeada para cada pedido que cumpre todos os prazos.", exceeds: "Diz quem na direção é responsável por cada pedido." },
      { name: "Calendário anual", objective: "O6", notYet: "Faltam os pedidos anuais.", meets: "Declaração anual do IRS, RRF-1, Declaração de Informações de dois em dois anos e declarações do FTB, com as datas-limite.", exceeds: "As datas-limite estão marcadas como lembretes no calendário da direção." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Fundadores que entregam os estatutos de constituição em 90 dias (inquérito de seguimento)",
      "Organizações que recebem uma carta de decisão do IRS e se registam no Registo de Instituições de Caridade",
      "Organizações ainda em situação regular um ano depois, com os pedidos anuais em dia"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "Links para as páginas oficiais: Secretário de Estado, IRS, Pay.gov, Franchise Tax Board e o Registo de Instituições de Caridade do Procurador-Geral",
      "Uma folha de cálculo ou papel para a tabela do plano de criação",
      "Cerca de 60 minutos no total, mais tempo para verificar as taxas nas páginas oficiais"
    ],
    facilitatorNotes: [
      "Peça aos alunos para verificarem cada taxa na página oficial durante a sessão, porque as taxas mudam.",
      "Convide um advogado de organizações sem fins lucrativos ou um voluntário de um centro de apoio para responder a perguntas sobre as frases dos estatutos e as regras das igrejas.",
      "Lembre aos alunos que nunca escrevam números da Segurança Social ou ITIN em ferramentas de IA ou e-mail.",
      "Os alunos sem uma organização real podem fazer um plano de prática para uma instituição de caridade de exemplo.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
