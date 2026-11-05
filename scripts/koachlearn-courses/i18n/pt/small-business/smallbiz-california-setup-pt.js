"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: California and US office, form and program names are kept in English and explained.

const SOS_LLC = { name: "Secretary of State da Califórnia: sociedades de responsabilidade limitada (formulários e taxas, em inglês)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" };
const SOS_CORP = { name: "Secretary of State da Califórnia: sociedades anónimas (formulários e taxas, em inglês)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const BIZFILE = { name: "Secretary of State da Califórnia: bizfile Online", url: "https://bizfileonline.sos.ca.gov/" };
const FTB_LLC = { name: "Franchise Tax Board: sociedade de responsabilidade limitada (em inglês)", url: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" };
const FTB_CORP = { name: "Franchise Tax Board: sociedades anónimas (em inglês)", url: "https://www.ftb.ca.gov/file/business/types/corporations/index.html" };
const FTB_FORMS = { name: "Franchise Tax Board: guia das formas comuns de propriedade (FTB 1123, em inglês)", url: "https://www.ftb.ca.gov/forms/misc/1123.html" };
const CDTFA = { name: "CDTFA: licenças e autorizações (em inglês)", url: "https://www.cdtfa.ca.gov/services/permits-licenses.htm" };
const CDTFA_FAQ = { name: "CDTFA: como obter uma licença de vendedor (perguntas frequentes, em inglês)", url: "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm" };
const IRS_EIN = { name: "IRS: obter um número de identificação do empregador (EIN, em inglês)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const CALGOLD = { name: "CalGold: ajuda com licenças na Califórnia (em inglês)", url: "https://www.calgold.ca.gov/" };
const EDD = { name: "EDD: passo 1, registar-se como empregador (em inglês)", url: "https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/" };
const LA_FBN = { name: "County Clerk de Los Angeles: requisitos do nome comercial fictício (condado de exemplo, em inglês)", url: "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing/requirements" };
const CALOSBA = { name: "Gabinete do Defensor das Pequenas Empresas da Califórnia: montar o seu negócio (em inglês)", url: "https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/" };

module.exports = {
  id: "smallbiz-california-setup-pt",
  lang: "pt",
  translationOf: "smallbiz-california-setup",
  category: "Small Business",
  name: "Abrir um Pequeno Negócio na Califórnia, com os Custos",
  skills: "Escolher a forma jurídica do negócio, Registar no estado e no condado, Obter um EIN e uma licença de vendedor, Encontrar as licenças locais, Fazer uma folha de custos iniciais e de prazos",
  outcome: "fazer um plano de abertura de uma página para o seu negócio na Califórnia: a forma jurídica que vai usar, cada registo e licença de que precisa pela ordem certa, o serviço oficial de cada um, quanto custa cada um (ou onde ver o custo) e os prazos que não pode falhar.",
  about: [
    "Este curso é para quem está a abrir um pequeno negócio na Califórnia: uma carrinha de comida, um salão de cabeleireiro, um serviço de limpeza, uma loja de bairro, uma loja na internet ou uma padaria em casa. Muitos dos nossos alunos abrem um negócio pela primeira vez, muitos são de minorias e muitos fazem isto sem advogado.",
    "Você vai aprender os passos pela ordem: escolher a forma jurídica, registar o nome, obter um número fiscal federal gratuito, obter uma licença de vendedor se vender produtos, encontrar as licenças da sua cidade e do seu condado, e planear o imposto anual do estado e as declarações. Todas as taxas do estado neste curso foram verificadas na página oficial do governo, e cada lição mostra essas páginas.",
    "As taxas e as regras mudam. Antes de pagar qualquer coisa, abra a página oficial indicada na lição e veja o valor atual. As taxas da cidade e do condado são diferentes em cada lugar, por isso este curso mostra onde as procurar em vez de adivinhar. Para a sua situação, um mentor gratuito do SCORE, um centro de apoio a pequenas empresas (SBDC) ou um profissional de impostos podem ajudar.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As tarefas juntam-se para formar o seu plano de abertura."
  ],
  finalTask: "Faça um plano de abertura de uma página para o seu negócio com cinco colunas: Passo, Serviço (com o site oficial), Custo (ou \"ver em ...\"), Prazo, Feito. Inclua a forma jurídica, o registo do nome, o EIN, a licença de vendedor (ou porque não precisa dela), a licença comercial da cidade, as licenças especiais que o CalGold mostra para o seu tipo de negócio e, se formar uma LLC ou uma sociedade anónima, o imposto anual de $800 e o Statement of Information.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que estão a abrir um pequeno negócio na Califórnia, como uma carrinha de comida, um salão de cabeleireiro, um serviço de limpeza, uma loja de bairro, uma loja na internet ou uma padaria em casa. Muitos abrem um negócio pela primeira vez, são de minorias e fazem isto sem advogado.",
    startingPoint: "Têm uma ideia de negócio e sabem usar um telefone ou computador para visitar sites. A maioria não conhece os passos de abertura, que serviço trata de cada um, quais são as taxas do estado nem que declarações e impostos anuais vêm com cada forma jurídica.",
    gap: "Falhar um registo, uma licença ou uma declaração anual pode trazer multas e penalizações, e sites pagos que imitam os oficiais cobram demais por serviços gratuitos. Os alunos precisam de um plano de abertura com cada passo pela ordem, o serviço oficial, o custo e o prazo, para começarem dentro da lei e fazerem um orçamento certo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou computador com internet para abrir as páginas oficiais .gov",
      "Tempo: lições de cerca de 5 minutos, que cabem entre o trabalho de gerir ou planear um negócio",
      "As taxas e as regras mudam, e as taxas da cidade e do condado são diferentes; os alunos verificam cada página oficial antes de pagar",
      "Não é aconselhamento jurídico nem fiscal; privacidade: o número da Segurança Social só vai no formulário oficial do IRS"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA para Pequenos Negócios\" ajuda se os alunos quiserem usar IA para organizar o plano."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a sua ideia de negócio, os donos e os riscos", action: "escolher uma forma jurídica para o negócio e indicar quanto custa formá-la", standard: "com uma razão para a escolha e a taxa verificada na página do Secretary of State" },
    { id: "O2", condition: "Com o nome e a forma jurídica do seu negócio", action: "descobrir como registar o nome do seu negócio", standard: "com o serviço certo, a página da taxa e a regra de publicação escritos no seu plano" },
    { id: "O3", condition: "Com o seu tipo de negócio", action: "decidir se precisa de uma licença de vendedor e indicar como obter um EIN gratuito", standard: "indicando o IRS e a CDTFA como os serviços e sem usar nenhum serviço pago de EIN" },
    { id: "O4", condition: "Usando o CalGold e o site da sua cidade", action: "fazer a lista das licenças locais de que o seu negócio precisa", standard: "com o site de cada serviço e a taxa ou onde a ver" },
    { id: "O5", condition: "Com a sua forma jurídica e os seus planos de contratar", action: "fazer a lista dos custos e prazos anuais do estado", standard: "incluindo o imposto de $800, o Statement of Information e o registo no EDD quando se aplicam, cada um verificado na página oficial" },
    { id: "O6", condition: "Com todos os passos do curso", action: "criar um plano de abertura de uma página com os passos pela ordem, os serviços, os custos e os prazos", standard: "com cada custo verificado na página oficial ou marcado \"ver em\" com o lugar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher e registar o seu negócio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher a forma jurídica do negócio",
          minutes: 6,
          goal: "Escolher a forma jurídica que serve o seu negócio hoje e saber quanto custa formá-la.",
          text: [
            "A forma jurídica é a forma legal do seu negócio. As escolhas mais comuns para pequenos negócios são o empresário individual (sole proprietorship), a sociedade em nome coletivo (general partnership), a sociedade de responsabilidade limitada (LLC) e a sociedade anónima (corporation).",
            "Um empresário individual é uma pessoa a fazer negócio. Não entrega documentos de constituição ao Secretary of State da Califórnia (o serviço do estado que regista as empresas), por isso não há taxa de constituição no estado. Mas para a lei você e o negócio são a mesma coisa: se o negócio ficar a dever dinheiro ou for processado, os seus bens pessoais podem ficar em risco. Uma sociedade em nome coletivo é a mesma ideia com dois ou mais donos.",
            "Uma LLC ou uma sociedade anónima é uma entidade legal separada. Você forma-a com um registo no Secretary of State da Califórnia. O Secretary of State indica a taxa de $70 para os estatutos de uma LLC (Articles of Organization, formulário LLC-1) e de $100 para os estatutos de uma sociedade anónima por ações (Articles of Incorporation, formulário ARTS-GS). Uma LLC ou sociedade anónima pode ajudar a proteger os seus bens pessoais das dívidas do negócio, mas custa mais todos os anos (Lição 6).",
            "Não há uma única resposta certa. Um serviço de limpeza de uma pessoa que está a começar pode abrir como empresário individual; um restaurante com contrato de arrendamento, funcionários e mais risco forma muitas vezes uma LLC ou sociedade anónima. Fale sobre isto com um conselheiro gratuito do SBDC, um mentor do SCORE ou um profissional de impostos antes de decidir."
          ],
          steps: ["Escreva quem é dono do negócio e quanto risco ele tem (arrendamento, funcionários, clientes no local, empréstimos).", "Leia o guia da FTB sobre as formas comuns de propriedade.", "Compare os custos anuais, não só a taxa de abertura.", "Escolha uma forma jurídica e pergunte a um conselheiro se tiver dúvidas."],
          words: [["Forma jurídica", "a forma legal de um negócio, como empresário individual, LLC ou sociedade anónima."], ["Empresário individual (sole proprietorship)", "um negócio de uma só pessoa que, para a lei, não está separado do dono."], ["LLC", "sociedade de responsabilidade limitada: um negócio registado no estado que está separado dos donos."], ["Responsabilidade", "ser legalmente responsável por uma dívida ou um dano."]],
          slides: [
            { title: "Quatro formas jurídicas comuns", bullets: ["Empresário individual (um dono)", "Sociedade em nome coletivo (dois ou mais donos)", "Sociedade de responsabilidade limitada (LLC)", "Sociedade anónima (corporation)"] },
            { title: "Empresário individual ou sociedade em nome coletivo", bullets: ["Nenhum registo de constituição no Secretary of State", "Para a lei, você e o negócio são o mesmo", "Os seus bens pessoais podem ficar em risco"] },
            { title: "LLC ou sociedade anónima", bullets: ["Formada com um registo no Secretary of State", "LLC-1: $70. Sociedade anónima por ações ARTS-GS: $100", "Separada de você, mas custa mais todos os anos"] },
            { title: "Escolher", bullets: ["Pense no risco: arrendamento, funcionários, clientes, empréstimos", "Compare os custos anuais, não só as taxas de abertura", "Pergunte a um conselheiro gratuito do SBDC ou do SCORE"] }
          ],
          sources: [SOS_LLC, SOS_CORP, FTB_FORMS],
          tryIt: "Comece o seu plano de abertura. No topo escreva a sua ideia de negócio, quem é o dono e os maiores riscos. Depois escreva a forma jurídica que escolheria hoje e uma razão.",
          youCanNow: "dizer as formas jurídicas comuns, dizer quanto custa no estado formar uma LLC ou uma sociedade anónima, e escolher uma para o seu negócio.",
          quickCheck: [
            { objective: "O1", q: "Que forma jurídica não precisa de registo de constituição no Secretary of State da Califórnia?", options: ["LLC", "Sociedade anónima", "Empresário individual", "Associação sem fins lucrativos"], answer: 2, why: "Um empresário individual não entrega documentos de constituição ao Secretary of State." },
            { objective: "O1", q: "Quer formar uma LLC e vê uma taxa na internet. O que faz antes de pagar?", options: ["Verifica a taxa atual na página oficial do Secretary of State", "Paga no primeiro site que aparece", "Pergunta a um amigo quanto pagou há anos", "Usa o que a IA disser"], answer: 0, why: "As taxas mudam, por isso verifica a página oficial antes de pagar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dar nome e registar o seu negócio",
          minutes: 5,
          goal: "Registar o nome do seu negócio da forma certa para a sua forma jurídica.",
          text: [
            "Uma LLC ou sociedade anónima regista o nome quando entrega os documentos de constituição ao Secretary of State. Pode fazer isto pela internet no bizfile Online (bizfileonline.sos.ca.gov). Procure lá o nome primeiro para ver se outro negócio já o usa.",
            "Se fizer negócio com um nome que não é o seu nome legal, entrega uma declaração de nome comercial fictício (Fictitious Business Name, FBN), também chamada DBA (\"doing business as\", ou seja, \"a fazer negócio como\"), ao County Clerk (o serviço de registos do condado) onde o negócio está. Por exemplo, se Maria Lopez gere a \"Sunrise Tamales\", ela entrega um FBN. Uma LLC que usa um nome diferente do nome registado também entrega um FBN.",
            "A taxa de um FBN é definida por cada condado, por isso veja-a no site do County Clerk do seu condado. Os condados também exigem que publique o FBN num jornal local uma vez por semana durante quatro semanas, normalmente a começar nos 30 dias depois do registo, e que depois entregue a prova da publicação. Verifique as regras exatas do seu condado."
          ],
          steps: ["Procure a sua ideia de nome no bizfile Online.", "LLC ou sociedade anónima: entregue os documentos de constituição no bizfile Online.", "Se usa um nome que não é o seu nome legal: entregue um FBN ao County Clerk do seu condado.", "Publique o FBN num jornal como o seu condado exige e entregue a prova.", "Escreva cada passo, o seu serviço e o seu custo no plano."],
          words: [["Nome comercial fictício (FBN)", "um nome de negócio que não é o nome legal do dono; também se chama DBA."], ["DBA", "\"doing business as\" (\"a fazer negócio como\"): o nome que um negócio usa com o público."], ["County Clerk", "o serviço do condado que regista os FBN e outros documentos públicos."]],
          slides: [
            { title: "LLC ou sociedade anónima", bullets: ["O nome fica registado quando a forma", "Registe pela internet em bizfileonline.sos.ca.gov", "Procure o nome primeiro"] },
            { title: "Nome comercial fictício (DBA)", bullets: ["Para um nome que não é o seu nome legal", "Entregue ao County Clerk do seu condado", "Exemplo: Maria Lopez a fazer negócio como Sunrise Tamales"] },
            { title: "Custos e publicação do FBN", bullets: ["A taxa é definida por cada condado: veja o site dele", "Publique num jornal local uma vez por semana durante 4 semanas", "Depois entregue a prova; veja os prazos do seu condado"] }
          ],
          sources: [BIZFILE, LA_FBN, CALOSBA],
          tryIt: "Procure o nome do seu negócio no bizfile Online. Depois encontre a página de FBN do County Clerk do seu condado e escreva no plano a taxa de registo e a regra de publicação.",
          youCanNow: "ver se um nome de negócio está livre, e dizer quando precisa de um nome comercial fictício e onde o entregar.",
          quickCheck: [
            { objective: "O2", q: "O que é um DBA?", options: ["Um formulário de impostos", "Uma licença comercial", "Um tipo de LLC", "O nome que um negócio usa com o público, se não for o nome legal do dono"], answer: 3, why: "Um DBA é o nome público de um negócio que é diferente do nome legal do dono." },
            { objective: "O2", q: "Registou um nome comercial fictício no seu condado. O que faz muito provavelmente a seguir?", options: ["Mais nada", "Publica-o num jornal local como o seu condado exige", "Regista-o outra vez no IRS", "Espera cinco anos"], answer: 1, why: "A maioria dos condados da Califórnia exige que publique o FBN num jornal local." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Obter o seu EIN gratuito e uma licença de vendedor",
          minutes: 5,
          goal: "Pedir um EIN ao IRS e decidir se precisa de uma licença de vendedor da Califórnia.",
          text: [
            "Um EIN (Employer Identification Number, número de identificação do empregador) é o número fiscal federal do seu negócio. As LLC, as sociedades anónimas, as sociedades em nome coletivo e qualquer negócio com funcionários precisam de um; um empresário individual sem funcionários pode usar o seu próprio número, mas muitas vezes pede um EIN para separar o negócio da vida pessoal. O IRS (o serviço federal de impostos) diz que nunca tem de pagar uma taxa por um EIN. Peça-o em irs.gov e tenha cuidado com sites que cobram por isso.",
            "A licença de vendedor (seller's permit) vem do Departamento de Administração de Impostos e Taxas da Califórnia (CDTFA). Se vende ou aluga produtos que normalmente pagam imposto na Califórnia, precisa de uma, e tem de a mostrar no seu local de negócio. Uma loja, uma boutique, uma carrinha de comida e um restaurante normalmente precisam. Um serviço puro, como limpeza de casas ou explicações, muitas vezes não precisa, mas verifique.",
            "A CDTFA diz que não há taxa pela licença de vendedor, mas pode pedir uma caução, e decide o valor quando faz o pedido. Se vender num só lugar durante 90 dias ou menos, como numa banca de época, pode precisar de uma licença de vendedor temporária. Registe-se pela internet na CDTFA."
          ],
          steps: ["Vá a irs.gov e procure \"apply for an EIN\".", "Faça o pedido pela internet de uma só vez e guarde a carta de confirmação.", "Decida se vende produtos que pagam imposto.", "Se sim, registe-se para uma licença de vendedor em cdtfa.ca.gov.", "Mostre a licença no lugar onde faz negócio."],
          words: [["EIN", "Employer Identification Number: um número fiscal federal gratuito para um negócio, dado pelo IRS."], ["Licença de vendedor (seller's permit)", "uma licença da Califórnia, dada pela CDTFA, para vender produtos que pagam imposto e cobrar o imposto sobre as vendas."], ["CDTFA", "California Department of Tax and Fee Administration: o Departamento de Administração de Impostos e Taxas da Califórnia."], ["Caução", "dinheiro que a CDTFA pode guardar para o caso de o imposto sobre as vendas não ser pago mais tarde."]],
          slides: [
            { title: "EIN: o número fiscal do seu negócio", bullets: ["Do IRS, em irs.gov", "Sempre grátis: o IRS nunca cobra por um EIN", "Cuidado com sites que cobram uma taxa"] },
            { title: "Licença de vendedor: quem precisa", bullets: ["Quem vende ou aluga produtos que pagam imposto na Califórnia", "Lojas, carrinhas de comida e restaurantes normalmente precisam", "Serviços puros muitas vezes não: verifique"] },
            { title: "Licença de vendedor: custo", bullets: ["Nenhuma taxa para pedir (CDTFA)", "A CDTFA pode pedir uma caução", "Vende 90 dias ou menos? Pergunte por uma licença temporária"] }
          ],
          sources: [IRS_EIN, CDTFA, CDTFA_FAQ],
          tryIt: "Acrescente duas linhas ao seu plano: EIN (IRS, grátis, pedir em irs.gov) e licença de vendedor (CDTFA, sem taxa, possível caução) ou uma nota a dizer porque não precisa dela. Não escreva o seu número da Segurança Social em nenhum lugar a não ser no formulário oficial do IRS.",
          youCanNow: "pedir um EIN gratuito no site oficial do IRS e decidir se o seu negócio precisa de uma licença de vendedor.",
          quickCheck: [
            { objective: "O3", q: "Que serviço dá as licenças de vendedor da Califórnia?", options: ["O IRS", "O County Clerk do seu condado", "A CDTFA", "O Secretary of State"], answer: 2, why: "O Departamento de Administração de Impostos e Taxas da Califórnia (CDTFA) dá as licenças de vendedor." },
            { objective: "O3", q: "Planeia vender produtos só num mercado de festas durante algumas semanas. O que faz?", options: ["Pergunta à CDTFA por uma licença de vendedor temporária", "Não pede licenças porque é pouco tempo", "Pede um EIN em vez disso", "Paga a um site privado por uma licença"], answer: 0, why: "Quem vende por pouco tempo pode perguntar à CDTFA por uma licença de vendedor temporária." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher e registar o seu negócio",
        questions: [
          { objective: "O1", q: "Que taxa o Secretary of State indica para os estatutos de uma LLC (formulário LLC-1)?", options: ["$800", "$70", "$20", "Grátis"], answer: 1, why: "A página de formulários de LLC do Secretary of State indica $70 para o formulário LLC-1." },
          { objective: "O1", q: "O Kevin tem um negócio de jardinagem como empresário individual. O que é verdade?", options: ["Tem de pagar $100 ao Secretary of State para o formar", "Não pode usar um nome de negócio", "Tem de formar primeiro uma sociedade anónima", "Não entrega documentos de constituição ao Secretary of State"], answer: 3, why: "Os empresários individuais não entregam documentos de constituição ao Secretary of State." },
          { objective: "O2", q: "Maria Lopez vende comida como \"Sunrise Tamales\". Onde entrega o seu nome comercial fictício?", options: ["No County Clerk do seu condado", "Na CDTFA", "No IRS", "Na Franchise Tax Board"], answer: 0, why: "Os FBN são entregues ao County Clerk do condado onde o negócio está." },
          { objective: "O3", q: "Um site pede $150 para lhe arranjar um EIN. O que faz?", options: ["Paga; é mais rápido", "Usa o EIN de um amigo", "Pede-o grátis em irs.gov", "Fica sem EIN para sempre"], answer: 2, why: "O IRS diz que nunca tem de pagar uma taxa por um EIN." },
          { objective: "O3", q: "Que negócio é mais provável precisar de uma licença de vendedor da Califórnia?", options: ["Um serviço de limpeza de casas", "Um serviço de explicações", "Uma boutique que vende roupa", "Um serviço de contabilidade"], answer: 2, why: "Vender produtos que pagam imposto, como roupa, precisa de uma licença de vendedor." }
        ]
      }
    },
    {
      name: "Capítulo 2: Licenças locais, custos anuais e o seu plano",
      lessons: [
        {
          objectives: ["O4","O6"],
          title: "Encontrar as licenças da sua cidade e do seu condado",
          minutes: 5,
          goal: "Usar o CalGold e o site da sua cidade para fazer a lista das licenças locais de que o seu negócio precisa.",
          text: [
            "A maioria das cidades exige uma licença comercial ou um certificado de imposto comercial, mesmo para um negócio em casa. O custo é definido por cada cidade (ou pelo condado, se estiver fora de uma cidade) e muitas vezes depende do tipo de negócio ou do seu rendimento. Veja-o no site da sua cidade ou ligue para a câmara municipal (city hall).",
            "Alguns negócios precisam de licenças especiais. Um restaurante ou uma carrinha de comida precisa de uma licença sanitária do departamento de saúde ambiental do condado. Uma padaria em casa pode precisar de um registo ou licença de comida caseira (cottage food) do condado. Um salão precisa de licenças do conselho estadual para os trabalhadores. Muitos lugares também pedem uma verificação de zonamento, uma inspeção de incêndio ou uma licença para placas.",
            "O CalGold (calgold.ca.gov) é uma ferramenta gratuita do estado que ajuda a encontrar informação sobre licenças. Você escolhe a sua cidade ou condado e o seu tipo de negócio, e ele mostra os serviços e como os contactar. O CalGold não dá licenças e diz que ainda está a ser construído, por isso ligue para o serviço para confirmar."
          ],
          steps: ["Abra calgold.ca.gov.", "Escolha a sua cidade ou o seu condado.", "Escolha o seu tipo de negócio (ou \"General Business Information\").", "Escreva cada licença e o serviço que a dá.", "Vá a cada serviço ou ligue para confirmar a taxa e como pedir."],
          words: [["Licença comercial", "uma autorização da cidade ou do condado para ter um negócio lá; às vezes chama-se certificado de imposto comercial."], ["Zonamento", "regras locais sobre que tipo de negócio pode funcionar numa morada."], ["CalGold", "um site gratuito da Califórnia que mostra informação sobre licenças por lugar e tipo de negócio."]],
          slides: [
            { title: "Licença comercial da cidade", bullets: ["A maioria das cidades exige uma, mesmo em casa", "A taxa é definida por cada cidade ou condado", "Veja o site da sua cidade ou ligue para a câmara municipal"] },
            { title: "Licenças especiais", bullets: ["Comida: licença de saúde ambiental do condado", "Padaria em casa: regras de comida caseira do condado", "Zonamento, inspeção de incêndio e licenças para placas"] },
            { title: "Use o CalGold", bullets: ["calgold.ca.gov: escolha a cidade e o tipo de negócio", "Mostra os serviços; não dá licenças", "Ligue para cada serviço para confirmar a taxa"] }
          ],
          sources: [CALGOLD, CALOSBA],
          tryIt: "Use o CalGold para a sua cidade e o seu tipo de negócio. Acrescente ao plano cada licença que ele mostra, com o site do serviço. Para cada uma, escreva a taxa ou \"ver em\" e o lugar.",
          youCanNow: "encontrar as licenças da cidade e do condado de que o seu negócio precisa e o serviço que dá cada uma.",
          quickCheck: [
            { objective: "O4", q: "O que faz o CalGold?", options: ["Dá todas as licenças de que precisa", "Cobra os seus impostos", "Forma a sua LLC", "Mostra informação sobre licenças e serviços para a sua cidade e o seu tipo de negócio"], answer: 3, why: "O CalGold mostra as licenças e os serviços, mas não as dá." },
            { objective: "O4", q: "O CalGold mostra uma licença para a sua carrinha de comida. O que faz a seguir?", options: ["Considera que já a tem", "Contacta o serviço indicado para confirmar a taxa e fazer o pedido", "Pede à IA para fazer o pedido por você", "Espera até um inspetor aparecer"], answer: 1, why: "O CalGold não dá licenças, por isso contacta cada serviço." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Os custos anuais: o imposto de $800, as declarações e os salários",
          minutes: 6,
          goal: "Fazer a lista dos custos e prazos anuais do estado que vêm com a sua forma jurídica.",
          text: [
            "LLC: a Franchise Tax Board (FTB) diz que todas as LLC que fazem negócio ou foram formadas na Califórnia têm de pagar um imposto anual de $800, todos os anos, até a LLC ser cancelada, mesmo que não faça negócio. O primeiro pagamento vence até ao 15.º dia do 4.º mês depois do registo no Secretary of State. As LLC que ganham mais de $250,000 também pagam uma taxa de LLC. Uma isenção do primeiro ano que existiu de 2021 a 2023 já não se aplica.",
            "Sociedades anónimas: a FTB diz que as sociedades anónimas pagam um imposto de franquia mínimo de $800, mas as sociedades anónimas novas não têm de pagar o mínimo no primeiro ano fiscal. Mesmo assim podem dever imposto sobre o rendimento e têm de fazer pagamentos estimados.",
            "Statement of Information (declaração de informação): as LLC e as sociedades anónimas entregam uma ao Secretary of State. A de uma LLC (LLC-12) custa $20, vence nos 90 dias depois da formação e depois a cada dois anos. A de uma sociedade anónima por ações (SI-550) custa $25. Falhá-la pode trazer penalizações.",
            "Contratar trabalhadores: registe-se no Employment Development Department (EDD) nos 15 dias depois de pagar mais de $100 em salários num trimestre. As regras dos salários são detalhadas, por isso muitos donos usam um serviço de processamento de salários ou um profissional de impostos."
          ],
          words: [["Franchise Tax Board (FTB)", "o serviço de impostos do estado da Califórnia para o imposto sobre o rendimento e o imposto de franquia."], ["Imposto anual", "o imposto de $800 que todas as LLC da Califórnia pagam por ano."], ["Statement of Information", "um formulário curto que as LLC e as sociedades anónimas entregam ao Secretary of State para manter os seus dados atualizados."], ["EDD", "Employment Development Department: o serviço do estado para os impostos sobre salários e para os empregadores."]],
          slides: [
            { title: "LLC: $800 todos os anos", bullets: ["Vence até ao 15.º dia do 4.º mês depois da formação", "Deve-se mesmo sem vendas, até cancelar", "Rendimento acima de $250,000: também uma taxa de LLC"] },
            { title: "Sociedade anónima: mínimo de $800", bullets: ["Imposto de franquia mínimo: $800", "Não é exigido no primeiro ano fiscal", "Podem vencer pagamentos estimados na mesma"] },
            { title: "Statement of Information", bullets: ["LLC (LLC-12): $20, nos 90 dias, depois a cada 2 anos", "Sociedade anónima por ações (SI-550): $25", "Falhá-la pode trazer penalizações"] },
            { title: "Contratar trabalhadores", bullets: ["Registe-se no EDD nos 15 dias", "Depois de pagar mais de $100 em salários num trimestre", "Pense num serviço de salários ou num profissional de impostos"] }
          ],
          sources: [FTB_LLC, FTB_CORP, SOS_LLC, SOS_CORP, EDD],
          tryIt: "Acrescente ao plano as linhas anuais que servem a sua forma jurídica: o imposto de $800 e o seu prazo, o Statement of Information e a sua taxa, e o registo no EDD se for contratar. Abra cada página oficial e verifique o valor antes de o escrever.",
          youCanNow: "fazer a lista dos custos e prazos anuais do estado para a sua forma jurídica e dizer que serviço cobra cada um.",
          quickCheck: [
            { objective: "O5", q: "Depois do primeiro, de quanto em quanto tempo uma LLC entrega um Statement of Information?", options: ["Todos os meses", "A cada cinco anos", "Só uma vez", "A cada dois anos"], answer: 3, why: "Depois do primeiro, uma LLC entrega um Statement of Information a cada dois anos." },
            { objective: "O5", q: "A sua LLC não ganhou dinheiro este ano. Para que se deve preparar?", options: ["Nada, porque não houve negócio", "Cancelar o plano de impostos", "O imposto anual de $800 continua a ser devido até a LLC ser cancelada", "Só um imposto federal"], answer: 2, why: "Uma LLC deve o imposto anual de $800 até ser cancelada, mesmo sem negócio." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Juntar tudo: o seu plano de abertura e o orçamento",
          minutes: 5,
          goal: "Fazer um plano de abertura de uma página com os passos pela ordem, os serviços, os custos e os prazos.",
          text: [
            "Agora ponha tudo numa só página. A ordem importa: escolher a forma jurídica, formar a LLC ou sociedade anónima (se for o caso), obter o EIN, entregar o FBN (se precisar), obter a licença de vendedor (se precisar) e depois obter as licenças da cidade e do condado. Muitas licenças pedem o seu EIN ou o número da sua entidade, por isso faça esses primeiro.",
            "Some os custos que conhece e marque os que ainda tem de procurar. Exemplo para uma carrinha de comida que é uma LLC: LLC-1 $70, Statement of Information $20, EIN grátis, licença de vendedor sem taxa (possível caução), imposto anual de $800, mais as taxas da licença sanitária do condado, da licença da cidade e do FBN, que procura no seu lugar.",
            "Um assistente de IA pode ajudar a organizar a tabela e fazer uma lista de verificação, mas pode estar errado sobre taxas e datas. Use sempre a página oficial para o valor. Não escreva o seu número da Segurança Social, os seus dados bancários nem palavras-passe numa ferramenta de IA. Quando acabar, mostre o plano a um conselheiro gratuito do SBDC ou a um profissional de impostos."
          ],
          steps: ["Faça a lista dos passos pela ordem.", "Acrescente o serviço e o site oficial de cada um.", "Acrescente o custo da página oficial, ou \"ver em ...\".", "Acrescente o prazo de cada item anual.", "Some os custos conhecidos e mostre o plano a um conselheiro."],
          words: [["Custos iniciais", "o dinheiro que gasta uma vez para abrir o negócio."], ["Custos recorrentes", "custos que paga outra vez todos os anos, como o imposto de $800."]],
          slides: [
            { title: "A ordem", bullets: ["1. Forma jurídica  2. Formar a LLC ou sociedade anónima", "3. EIN  4. FBN se precisar  5. Licença de vendedor", "6. Licenças da cidade e do condado"] },
            { title: "Exemplo: carrinha de comida como LLC", bullets: ["LLC-1 $70; Statement of Information $20", "EIN grátis; licença de vendedor sem taxa", "Imposto anual de $800; taxas locais: procure-as"] },
            { title: "Usar a IA com segurança aqui", bullets: ["A IA pode organizar a sua tabela e lista", "Tire cada taxa e data da página oficial", "Nunca escreva o seu SSN, dados bancários ou palavras-passe"] }
          ],
          sources: [SOS_LLC, FTB_LLC, CDTFA, IRS_EIN, CALGOLD],
          tryIt: "Tarefa final: acabe o seu plano de uma página com cinco colunas: Passo, Serviço (site), Custo, Prazo, Feito. Preencha cada linha deste curso, some os custos conhecidos e marque cada taxa local que ainda tem de procurar.",
          youCanNow: "fazer e usar um plano de abertura completo para abrir um negócio na Califórnia.",
          quickCheck: [
            { objective: "O6", q: "Por que ordem deve normalmente fazer estes passos?", options: ["Escolher a forma jurídica, formá-la, obter o EIN e depois as licenças locais", "Licenças locais e depois escolher a forma jurídica", "Obter o EIN antes de escolher o nome ou a forma jurídica e formá-la no fim", "Qualquer ordem dá no mesmo"], answer: 0, why: "Cada passo depende do anterior, a começar pela forma jurídica." },
            { objective: "O6", q: "Ainda não sabe a taxa da licença comercial da sua cidade. O que escreve no plano?", options: ["Um palpite", "Zero", "\"Ver em\" e o site oficial da cidade", "A taxa de outra cidade"], answer: 2, why: "As taxas locais são diferentes, por isso escreve onde as ver em vez de adivinhar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Licenças locais, custos anuais e o seu plano",
        questions: [
          { objective: "O4", q: "O que faz o CalGold?", options: ["Mostra informação sobre licenças e serviços para a sua cidade e o seu tipo de negócio", "Dá a sua licença comercial", "Cobra o imposto de $800", "Dá-lhe um EIN"], answer: 0, why: "O CalGold encontra informação sobre licenças; não dá licenças." },
          { objective: "O4", q: "Quem define a taxa de uma licença comercial da cidade?", options: ["O IRS", "O Secretary of State", "A CDTFA", "Cada cidade ou condado"], answer: 3, why: "As taxas das licenças locais são definidas por cada cidade ou condado." },
          { objective: "O5", q: "Uma LLC não fez negócio este ano. Deve o imposto anual de $800?", options: ["Não, só se ganhou dinheiro", "Sim, até a LLC ser cancelada", "Só no primeiro ano", "Só se tiver trabalhadores"], answer: 1, why: "A FTB diz que o imposto anual é devido mesmo que a LLC não faça negócio, até ser cancelada." },
          { objective: "O5", q: "Quando vence o primeiro Statement of Information de uma LLC?", options: ["Nos 90 dias depois da formação", "Todos os meses", "Só quando fecha", "Nos 10 anos"], answer: 0, why: "O Secretary of State diz que vence nos 90 dias depois do registo e depois a cada dois anos." },
          { objective: "O5", q: "Vai contratar o seu primeiro trabalhador. Em que serviço se regista?", options: ["No CalGold", "No County Clerk", "No EDD", "No DMV"], answer: 2, why: "Os empregadores registam-se no EDD nos 15 dias depois de pagarem mais de $100 em salários num trimestre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Abrir um Pequeno Negócio na Califórnia, com os Custos",
    questions: [
      { objective: "O1", q: "Que forma jurídica não precisa de registo de constituição no Secretary of State da Califórnia?", options: ["LLC", "Empresário individual", "Sociedade anónima", "Associação sem fins lucrativos"], answer: 1, why: "Os empresários individuais não entregam documentos de constituição ao Secretary of State." },
      { objective: "O1", q: "Qual é uma razão principal para os donos formarem uma LLC?", options: ["É sempre grátis", "Substitui todas as licenças", "Acaba com todos os impostos", "Pode ajudar a separar os bens pessoais das dívidas do negócio"], answer: 3, why: "Uma LLC é uma entidade legal separada que pode ajudar a proteger o dono." },
      { objective: "O1", q: "A taxa do Secretary of State para os estatutos de uma sociedade anónima por ações (ARTS-GS) é:", options: ["$20", "$70", "$100", "$800"], answer: 2, why: "O Secretary of State indica $100 para o ARTS-GS." },
      { objective: "O1", q: "Onde entrega pela internet os documentos de constituição de uma LLC?", options: ["irs.gov", "bizfileonline.sos.ca.gov", "calgold.ca.gov", "edd.ca.gov"], answer: 1, why: "O bizfile Online é o site de registos do Secretary of State." },
      { objective: "O2", q: "O que é um DBA?", options: ["Um formulário de impostos", "Um tipo de licença para comida", "O nome que um negócio usa com o público, se não for o nome legal do dono", "Uma conta bancária"], answer: 2, why: "DBA quer dizer \"doing business as\" (\"a fazer negócio como\"); entrega-se como nome comercial fictício." },
      { objective: "O2", q: "Depois de entregar um FBN, a maioria dos condados da Califórnia também exige que:", options: ["O publique num jornal local durante quatro semanas", "Pague ao IRS", "Obtenha uma licença de vendedor", "Forme uma LLC"], answer: 0, why: "Os condados exigem que o FBN seja publicado uma vez por semana durante quatro semanas." },
      { objective: "O2", q: "Onde deve ver a taxa de FBN do seu condado?", options: ["Num assistente de IA", "No IRS", "No site do County Clerk do seu condado", "Numa publicação nas redes sociais"], answer: 2, why: "Cada condado define a sua própria taxa de FBN." },
      { objective: "O3", q: "Quanto cobra o IRS por um EIN?", options: ["Nada", "$70", "$50", "$800"], answer: 0, why: "O IRS diz que nunca tem de pagar uma taxa por um EIN." },
      { objective: "O3", q: "Que serviço dá as licenças de vendedor da Califórnia?", options: ["A FTB", "A CDTFA", "O EDD", "O County Clerk"], answer: 1, why: "O Departamento de Administração de Impostos e Taxas da Califórnia (CDTFA) dá as licenças de vendedor." },
      { objective: "O3", q: "O que pode a CDTFA pedir quando obtém uma licença de vendedor, mesmo sem taxa?", options: ["Um registo de sociedade anónima", "A palavra-passe do seu banco", "Um anúncio no jornal", "Uma caução"], answer: 3, why: "A CDTFA diz que pode exigir uma caução." },
      { objective: "O3", q: "Uma banca de abóboras de época vende num só lugar durante seis semanas. O que deve o dono perguntar à CDTFA?", options: ["Por uma licença de vendedor temporária", "Por um EIN", "Por um FBN", "Por um Statement of Information"], answer: 0, why: "Vendas num só lugar durante 90 dias ou menos podem precisar de uma licença de vendedor temporária." },
      { objective: "O4", q: "Uma carrinha de comida normalmente precisa de uma licença sanitária de:", options: ["O IRS", "O EDD", "O Secretary of State", "O departamento de saúde ambiental do condado"], answer: 3, why: "Os negócios de comida obtêm as licenças sanitárias na saúde ambiental do condado." },
      { objective: "O6", q: "O CalGold diz que não dá licenças. Por isso, depois de o usar, você deve:", options: ["Ignorar a lista", "Pagar ao CalGold", "Contactar cada serviço da lista para confirmar a taxa e fazer o pedido", "Pedir a uma IA para fazer o pedido por você"], answer: 2, why: "O CalGold mostra os serviços; você faz o pedido em cada um." },
      { objective: "O4", q: "Um negócio de explicações em casa provavelmente ainda precisa de:", options: ["Uma licença de vendedor", "Uma licença comercial ou certificado de imposto comercial da cidade", "Uma licença sanitária", "Uma licença para vender álcool"], answer: 1, why: "A maioria das cidades exige uma licença comercial, mesmo para negócios em casa." },
      { objective: "O5", q: "Quanto é o imposto anual de uma LLC na Califórnia?", options: ["$20", "$70", "$250", "$800"], answer: 3, why: "A FTB diz que todas as LLC têm de pagar um imposto anual de $800." },
      { objective: "O5", q: "Quando vence o primeiro imposto anual de $800 de uma LLC?", options: ["Só quando ganha $250,000", "Nunca no primeiro ano", "Até ao 15.º dia do 4.º mês depois do registo no Secretary of State", "A 31 de dezembro"], answer: 2, why: "A FTB indica o 15.º dia do 4.º mês depois do registo." },
      { objective: "O5", q: "Uma sociedade anónima nova, no primeiro ano fiscal:", options: ["Não tem de pagar o imposto de franquia mínimo de $800", "Paga $1,600", "Nunca paga impostos", "Tem de pagar a taxa de LLC"], answer: 0, why: "A FTB diz que as sociedades anónimas novas não têm de pagar o mínimo no primeiro ano fiscal." },
      { objective: "O5", q: "Depois do primeiro, de quanto em quanto tempo uma LLC entrega um Statement of Information?", options: ["Todos os meses", "A cada dois anos", "A cada dez anos", "Nunca"], answer: 1, why: "O Secretary of State diz que é a cada dois anos depois do primeiro." },
      { objective: "O6", q: "Por que ordem deve normalmente fazer estes passos?", options: ["Licença da cidade, depois formar a LLC, depois escolher a forma jurídica", "Escolher a forma jurídica, formá-la, obter o EIN e depois as licenças locais", "Licença de vendedor, depois EIN, depois forma jurídica", "Qualquer ordem serve"], answer: 1, why: "Muitas licenças pedem o seu EIN e o número da entidade, por isso forme e obtenha o EIN primeiro." },
      { objective: "O6", q: "Um assistente de IA diz-lhe a taxa de FBN do seu condado. O que faz?", options: ["Verifica-a primeiro na página oficial do County Clerk do seu condado", "Põe-na no plano sem verificar", "Paga à ferramenta de IA", "Escreve o seu SSN para ter uma resposta melhor"], answer: 0, why: "A IA pode estar errada; as taxas vêm da página oficial." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      4,
      7,
      8,
      11,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Forma jurídica e nome",
        objective: "O1",
        notYet: "Nenhuma forma jurídica escolhida, ou falta o registo do nome.",
        meets: "Forma jurídica com uma razão, mais o registo certo do nome e o seu serviço.",
        exceeds: "Também anota a regra de publicação do FBN, se se aplicar."
      },
      {
        name: "EIN e licença de vendedor",
        objective: "O3",
        notYet: "Faltam, ou usa um serviço pago de EIN.",
        meets: "EIN de irs.gov sem custo, e uma linha da licença de vendedor ou uma razão por que não é precisa.",
        exceeds: "Anota uma possível caução da CDTFA."
      },
      {
        name: "Licenças locais",
        objective: "O4",
        notYet: "Nenhuma licença da cidade nem licenças do CalGold na lista.",
        meets: "Licença comercial da cidade e todas as licenças do CalGold, cada uma com o site do serviço.",
        exceeds: "Cada taxa local está preenchida a partir da página oficial."
      },
      {
        name: "Custos anuais e prazos",
        objective: "O5",
        notYet: "Falta o imposto de $800 ou o Statement of Information para uma LLC ou sociedade anónima.",
        meets: "Linhas anuais que servem a forma jurídica, com os prazos.",
        exceeds: "Inclui o registo no EDD se for contratar, e cada valor verificado na página oficial."
      },
      {
        name: "Plano pela ordem com os custos",
        objective: "O6",
        notYet: "Passos fora de ordem, ou custos adivinhados.",
        meets: "Cinco colunas preenchidas pela ordem, com os custos conhecidos somados e as taxas desconhecidas marcadas \"ver em\".",
        exceeds: "Todos os sites oficiais estão na lista e a coluna Feito está a ser usada."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem pelo menos um registo ou licença em 60 dias (inquérito de seguimento)",
      "Alunos que abrem o seu negócio dentro da lei em 6 meses",
      "Alunos que se reúnem com um mentor do SCORE ou um conselheiro do SBDC em 60 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Papel, ou uma folha de cálculo gratuita, para o plano de abertura de cinco colunas",
      "As páginas oficiais indicadas em cada lição: bizfile Online, irs.gov, CDTFA, CalGold, FTB e EDD",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes de cada sessão, abra as páginas oficiais e confirme que as taxas do estado no curso continuam atuais.",
      "Procure as páginas do County Clerk e da licença comercial da cidade do seu lugar para poder mostrar aos alunos os sites locais verdadeiros.",
      "Nunca peça aos alunos para escrever um número da Segurança Social num ecrã partilhado; os pedidos de EIN fazem-se só em irs.gov, em privado.",
      "Este curso não é aconselhamento jurídico nem fiscal; convide um mentor do SCORE, um conselheiro do SBDC ou um profissional de impostos para perguntas sobre a situação de cada aluno.",
      "Avalie o plano de abertura com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
