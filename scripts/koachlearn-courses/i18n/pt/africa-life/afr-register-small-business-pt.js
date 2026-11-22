"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-register-small-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const BRS = { name: "Business Registration Service (BRS), Quénia: registe o seu negócio pela internet através do eCitizen (em inglês)", url: "https://brs.go.ke/" };
const CAC = { name: "Corporate Affairs Commission (CAC), Nigéria: registo de empresas, nomes comerciais e associações (portal icrp.cac.gov.ng, em inglês)", url: "https://www.cac.gov.ng/" };
const ORC = { name: "Office of the Registrar of Companies (ORC), Gana: nomes comerciais, empresas, renovações (também por *222#) e declarações anuais (em inglês)", url: "https://orc.gov.gh/" };
const APIX = { name: "APIX, Senegal: agência de promoção do investimento e balcão único de criação de empresas (em francês)", url: "https://www.apix.sn/" };
const CEPICI = { name: "CEPICI, Costa do Marfim: centro de promoção do investimento e balcão único de criação de empresas (em francês)", url: "https://cepici.ci/" };
const OHADA = { name: "OHADA: Organização para a Harmonização do Direito dos Negócios em África (17 países membros)", url: "https://www.ohada.org/en/" };
const MA_AE = { name: "Marrocos: portal do estatuto de autoempreendedor (auto-entrepreneur)", url: "https://www.ae.gov.ma/" };
const KRA = { name: "Kenya Revenue Authority (KRA): sobre o KRA PIN (obtenha-o no iTax, em inglês)", url: "https://www.kra.go.ke/individual/individual-pin-registration/learn-about-pin/about-pin" };
const NRS = { name: "Nigeria Revenue Service (NRS): a autoridade tributária federal da Nigéria (em inglês)", url: "https://www.nrs.gov.ng/" };
const GRA = { name: "Ghana Revenue Authority (GRA): registo com TIN ou PIN do Ghana Card; regime simplificado para pequenos negócios (em inglês)", url: "https://gra.gov.gh/" };
const SMEDAN = { name: "SMEDAN, Nigéria: apoio a nano, micro, pequenas e médias empresas (registo gratuito, SME Digital Academy, em inglês)", url: "https://smedan.gov.ng/" };

module.exports = {
  id: "afr-register-small-business-pt",
  lang: "pt",
  translationOf: "afr-register-small-business",
  category: "Africa: Life and Work",
  name: "Registar e Gerir um Pequeno Negócio em África",
  skills: "Escolher a forma do negócio, Encontrar o registo oficial, Preparar uma lista para o registo, Obter um número fiscal e licenças locais, Manter um livro de caixa simples, Planear renovações e declarações",
  outcome: "tornar o seu pequeno negócio oficial e mantê-lo em ordem: escolher a forma de negócio certa, encontrar o registo oficial do seu país, preparar tudo o que precisa para o registo, saber que número fiscal e que licenças se aplicam, manter um livro de caixa simples e planear as suas renovações e declarações de cada ano.",
  about: [
    "Muitos pequenos negócios em África funcionam sem registo. Isso pode funcionar durante algum tempo, mas o registo pode abrir portas: contas bancárias em nome do negócio, contratos com empresas e com o governo, contas em plataformas de venda, empréstimos e alguns programas de apoio. Este curso é para comerciantes, artesãos, donos de salões, quem vende comida, alfaiates e qualquer pessoa com um negócio extra no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim, nos Camarões, em Marrocos e em toda a África.",
    "Você vai escolher uma forma de negócio que sirva para você, encontrar o registo oficial do seu país e evitar falsos agentes, preparar uma lista para o registo, saber que número fiscal e que licenças locais se aplicam, começar um livro de caixa simples e fazer um calendário das renovações e declarações de cada ano.",
    "Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\" para o seu próprio negócio. As regras, os formulários e as taxas mudam e são diferentes em cada país, por isso o curso dá os nomes dos serviços e mostra como verificar. Não dá taxas nem conselhos jurídicos; para uma decisão grande, pergunte ao registo, a um centro de apoio a empresas ou a um contabilista ou advogado qualificado."
  ],
  finalTask: "Faça uma lista para o registo do seu próprio negócio: a forma de negócio que escolheu e porquê, o registo oficial e o seu site, três escolhas de nome, os documentos e dados de que precisa, o número fiscal e as licenças locais que se aplicam (e onde verificou), como vai manter o seu livro de caixa, e um calendário anual de renovações e declarações.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios e de negócios informais em toda a África: vendedores de mercado, artesãos, alfaiates, cabeleireiros, quem vende comida, mecânicos, vendedores pela internet e jovens que estão a começar, no Quénia, na Nigéria, no Gana, na África Ocidental e Central francófona e no Norte de África.",
    startingPoint: "Gerem um negócio no dia a dia e lidam com dinheiro vivo e dinheiro móvel. A maioria não fez o registo, não sabe a que serviço ir, mistura o dinheiro do negócio com o da casa e escreve poucos registos. Alguns pagaram a falsos agentes ou ouviram conselhos confusos.",
    gap: "Sem registo e sem registos simples, muitos pequenos negócios não conseguem abrir uma conta bancária de empresa, ganhar contratos, vender em algumas plataformas ou pedir apoio. Outros registam-se uma vez e depois atrasam-se nas renovações ou declarações e pagam multas. Os alunos precisam de escolher uma forma, registar-se pelo canal oficial, saber que número fiscal e que licenças se aplicam, e manter os seus registos e datas em ordem.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos falam a língua do curso como segunda língua (o curso também existe em inglês, francês e árabe)",
      "Aparelhos: um telefone simples, às vezes um computador de um cibercafé; os dados móveis são caros",
      "Regras: as formas de negócio, as taxas, os impostos e as licenças são diferentes em cada país e mudam; o curso nunca dá taxas nem prazos e indica sempre o serviço oficial",
      "Segurança: existem falsos agentes e falsos sites de registo; os alunos usam só sites oficiais e nunca partilham palavras-passe nem PIN",
      "Não é conselho jurídico nem fiscal: os alunos verificam o seu caso com o registo, a autoridade tributária ou um profissional qualificado"
    ],
    prerequisites: "Ter ou estar a planear um pequeno negócio. Saber somar e subtrair."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Conhecendo o tamanho, os donos e os riscos do seu negócio", action: "escolher uma forma de negócio, como um nome comercial em nome individual ou uma sociedade limitada, e escrever porque serve", standard: "dizendo uma vantagem e um dever da forma escolhida" },
    { id: "O2", condition: "Conhecendo o país onde faz negócio", action: "identificar o registo oficial de empresas e abrir o seu site ou serviço oficial", standard: "sem usar um agente não oficial nem um site falso parecido" },
    { id: "O3", condition: "Antes de começar um registo", action: "preparar uma lista para o registo com três escolhas de nome, os dados dos donos, a atividade do negócio, a morada e os documentos", standard: "para poder preencher o pedido de uma só vez" },
    { id: "O4", condition: "Para o seu negócio e a sua cidade", action: "fazer a lista do número fiscal, da licença local de comércio e de qualquer licença do setor que se apliquem, e de onde obter cada um", standard: "verificando o serviço oficial de cada um" },
    { id: "O5", condition: "Durante uma semana de negócio", action: "registar cada venda e cada custo num livro de caixa simples, separado do dinheiro da casa", standard: "com as contas de entradas e saídas da semana certas" },
    { id: "O6", condition: "Depois de o seu negócio estar registado", action: "fazer um calendário anual de renovações, declarações e datas das licenças", standard: "com cada data verificada no site oficial e um lembrete marcado antes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher e registar",
      lessons: [
        {
          title: "Porquê registar, e que forma de negócio serve para você",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher uma forma de negócio que sirva para o seu negócio e escrever porquê.",
          text: [
            "Registar diz ao governo que o seu negócio existe e dá-lhe um nome oficial. As vantagens podem ser uma conta bancária do negócio, contratos com empresas e com o governo, vender em algumas plataformas, a confiança dos clientes e poder pedir empréstimos e apoios. Os deveres podem ser manter registos, renovar, entregar declarações e pagar impostos.",
            "As formas mais comuns: o empresário em nome individual (um só dono, muitas vezes registado como nome comercial); a sociedade de pessoas (dois ou mais donos que dividem o lucro e as dívidas); e a sociedade limitada (uma pessoa jurídica separada, por isso a casa e as poupanças dos donos ficam mais protegidas das dívidas do negócio, mas com mais papelada). Os nomes mudam de país para país: a Nigéria e o Gana registam nomes comerciais e empresas; no Quénia, o Business Registration Service trata de nomes comerciais e empresas.",
            "Nos 17 países da OHADA, incluindo o Senegal, a Costa do Marfim, os Camarões, o Mali, o Burkina Faso e a RD Congo, o direito dos negócios é comum. Um pequeno comerciante pode registar-se como empresa individual (entreprise individuelle) ou criar uma sociedade como uma SARL. Em Marrocos, muitos pequenos vendedores usam o estatuto de autoempreendedor (auto-entrepreneur).",
            "A maioria dos vendedores de mercado e artesãos começa como empresário em nome individual ou com um nome comercial. Uma sociedade pode servir quando tem sócios, contratos maiores ou riscos maiores. Para uma decisão grande, pergunte ao registo ou a um contabilista ou advogado qualificado."
          ],
          steps: ["Escreva quem é dono do negócio: só você, ou com outras pessoas.", "Escreva o maior risco: dívidas, ferimentos, contratos grandes.", "Compare um nome comercial (nome individual), uma sociedade de pessoas e uma sociedade limitada.", "Escolha uma e escreva uma vantagem e um dever."],
          words: [["Empresário em nome individual", "um negócio que pertence a uma só pessoa e é gerido por ela, que responde pessoalmente pelas dívidas."], ["Sociedade limitada", "um negócio que é uma pessoa jurídica própria, por isso os bens pessoais dos donos ficam mais protegidos das suas dívidas."], ["OHADA", "uma organização de 17 países africanos que partilham as mesmas leis dos negócios, sobretudo na África Ocidental e Central."]],
          slides: [
            { title: "Porquê registar?", bullets: ["Conta bancária do negócio e contratos", "Plataformas de venda, empréstimos e apoios", "Confiança dos clientes", "Deveres: registos, renovações, declarações, impostos"] },
            { title: "Três formas comuns", bullets: ["Nome individual / nome comercial: um dono", "Sociedade de pessoas: dois ou mais donos", "Sociedade limitada: pessoa jurídica separada, mais papelada"] },
            { title: "África francófona e Norte de África", bullets: ["17 países da OHADA partilham o direito dos negócios", "Empresa individual ou uma sociedade como uma SARL", "Marrocos: estatuto de autoempreendedor"] },
            { title: "Escolher", bullets: ["A maioria dos pequenos comerciantes começa com um nome comercial", "Sociedade: sócios, contratos grandes, riscos grandes", "Decisão grande? Pergunte ao registo ou a um profissional"] }
          ],
          tryIt: "Escreva quem são os donos do seu negócio e qual é o maior risco. Depois escolha uma forma de negócio e escreva uma vantagem e um dever dessa forma.",
          youCanNow: "comparar as formas de negócio mais comuns e escolher a que serve para o seu negócio.",
          quickCheck: [
            { objective: "O1", q: "A Fatima vende tecidos sozinha num mercado em Kano. Com que forma começam a maioria dos comerciantes como ela?", options: ["Uma grande empresa pública", "Um nome comercial em nome individual", "Um serviço do governo", "Uma instituição de caridade"], answer: 1, why: "Um só dono com um negócio pequeno costuma começar com um nome comercial." },
            { objective: "O1", q: "Qual é uma razão principal para escolher uma sociedade limitada?", options: ["Não tem papelada", "Nunca paga impostos", "Protege melhor os bens pessoais dos donos das dívidas do negócio", "Não pode abrir uma conta bancária"], answer: 2, why: "Uma sociedade é uma pessoa jurídica separada, o que limita o risco pessoal dos donos." }
          ],
          sources: [OHADA, MA_AE]
        },
        {
          title: "Encontrar o registo oficial e evitar falsos agentes",
          objectives: ["O2"],
          minutes: 5,
          goal: "Encontrar o registo oficial de empresas do seu país e abrir o seu site oficial.",
          text: [
            "Cada país tem um serviço oficial que regista os negócios. Quénia: o Business Registration Service (BRS), pela internet através do eCitizen. Nigéria: a Corporate Affairs Commission (CAC). Gana: o Office of the Registrar of Companies (ORC). Senegal: a APIX, o balcão único de criação de empresas. Costa do Marfim: o CEPICI. Em Marrocos, o estatuto de autoempreendedor tem o seu próprio portal nacional.",
            "Use só o site ou o serviço oficial. Os sites oficiais do governo costumam acabar com a terminação do governo do país, como .go.ke, .gov.ng ou .gov.gh. Existem sites falsos parecidos e pessoas que oferecem registo \"rápido\" ou \"grátis\"; o próprio site do BRS do Quénia avisa contra falsas ofertas de registo \"grátis\".",
            "Pode pagar a um agente acreditado ou a um advogado para ajudar, mas verifique que são verdadeiros, peça um recibo oficial e confirme que o negócio fica registado em seu nome. Nunca dê a ninguém a palavra-passe da sua conta do eCitizen, da CAC ou de outra conta, nem um código de uso único enviado para o seu telefone.",
            "Se um site não abrir, tente mais tarde ou vá ao balcão do registo ou a um centro de serviços do governo. Não pague a um desconhecido em vez disso."
          ],
          steps: ["Escreva o registo do seu país a partir da lista desta lição.", "Escreva você mesmo o endereço; não carregue em links de mensagens desconhecidas.", "Verifique o final do endereço, como .go.ke, .gov.ng ou .gov.gh.", "Se usar um agente, verifique que é verdadeiro e peça um recibo oficial.", "Nunca partilhe a sua palavra-passe nem o código de uso único."],
          words: [["Registo", "o serviço do governo que regista os negócios e as empresas."], ["Site falso parecido", "um site falso feito para parecer oficial, muitas vezes para ficar com o seu dinheiro."], ["Código de uso único", "um código curto enviado para o seu telefone para confirmar que é você; nunca o partilhe."]],
          slides: [
            { title: "Registos oficiais", bullets: ["Quénia: BRS através do eCitizen", "Nigéria: Corporate Affairs Commission (CAC)", "Gana: Registrar of Companies (ORC)", "Senegal: APIX; Costa do Marfim: CEPICI"] },
            { title: "Use só o site oficial", bullets: ["Escreva você mesmo o endereço", "Verifique finais como .go.ke, .gov.ng, .gov.gh", "Cuidado com ofertas de registo \"rápido\" ou \"grátis\""] },
            { title: "Se usar um agente", bullets: ["Verifique que é verdadeiro", "Peça um recibo oficial", "O negócio tem de ficar em SEU nome"] },
            { title: "Nunca partilhe", bullets: ["A palavra-passe da sua conta", "Um código de uso único enviado para o seu telefone"] }
          ],
          tryIt: "Encontre o registo de empresas do seu país. Escreva você mesmo o endereço do site, verifique o final e anote o endereço e um serviço que ele oferece.",
          youCanNow: "encontrar o registo oficial de empresas do seu país e distinguir um site verdadeiro de um falso.",
          quickCheck: [
            { objective: "O2", q: "Onde regista um nome comercial na Nigéria?", options: ["Na Corporate Affairs Commission (CAC)", "Num grupo de WhatsApp", "Em qualquer banco", "Na esquadra da polícia"], answer: 0, why: "A CAC regista nomes comerciais, empresas e associações na Nigéria." },
            { objective: "O2", q: "Uma mensagem oferece \"registo de empresa grátis em 1 hora\" através de um link. O que faz?", options: ["Carrega no link e paga depressa", "Envia a sua palavra-passe", "Reencaminha para os amigos", "Ignora o link e escreve você mesmo o endereço do registo oficial"], answer: 3, why: "As ofertas falsas usam links; o site oficial que você mesmo escreve é seguro." }
          ],
          sources: [BRS, CAC, ORC, APIX, CEPICI, MA_AE]
        },
        {
          title: "Preparar a sua lista para o registo",
          objectives: ["O3"],
          minutes: 5,
          goal: "Preparar uma lista para o registo para poder fazer o pedido de uma só vez.",
          text: [
            "Os formulários na internet podem expirar, e os dados móveis custam dinheiro. Prepare tudo primeiro e depois faça o pedido de uma só vez.",
            "A maioria dos registos pede coisas parecidas: três nomes possíveis para o negócio (caso a primeira escolha já esteja ocupada; o BRS do Quénia pede três escolhas), os nomes completos dos donos e os dados do bilhete de identidade ou passaporte, telefone e email, a morada ou o local do negócio, uma descrição curta da atividade e, às vezes, uma fotografia tipo passe ou uma assinatura. Uma sociedade também precisa de administradores, sócios e dos seus estatutos. A lista exata está no site do registo.",
            "Escolha nomes claros, que ninguém esteja já a usar e que não copiem uma marca famosa. Exemplo: o Kofi, em Takoradi, escreve \"Kofi Fresh Fish Supplies\", \"Takoradi Fresh Catch\" e \"Sea Gold Fish Supplies\".",
            "Anote a taxa que aparece no site oficial no dia em que faz o pedido, e como pagar. Guarde todos os recibos e o certificado de registo, em papel e em fotografia num lugar seguro."
          ],
          steps: ["Escreva três escolhas de nome.", "Escreva os nomes dos donos, os dados de identificação, o telefone e o email.", "Escreva a morada ou o local e a atividade do negócio.", "Leia a lista do próprio registo para ver documentos extra.", "Escreva a taxa atual e a forma de pagar, do site oficial.", "Faça o pedido de uma só vez e guarde todos os recibos e o certificado."],
          words: [["Pesquisa / reserva de nome", "verificar se um nome de negócio está livre e guardá-lo para você enquanto faz o registo."], ["Certificado de registo", "o papel oficial que mostra que o seu negócio está registado."], ["Administrador", "uma pessoa que dirige uma sociedade e tem deveres legais para com ela."]],
          slides: [
            { title: "Prepare primeiro, faça o pedido uma vez", bullets: ["Os formulários podem expirar", "Os dados móveis custam dinheiro", "Tenha tudo pronto"] },
            { title: "Costumam pedir", bullets: ["Três escolhas de nome", "Nomes dos donos, identificação, telefone e email", "Morada e atividade do negócio", "Sociedade: administradores e sócios"] },
            { title: "Bons nomes", bullets: ["Claros e que ninguém use já", "Não copie uma marca famosa", "Veja a lista do próprio registo"] },
            { title: "Depois do pedido", bullets: ["Anote a taxa do site oficial", "Guarde todos os recibos", "Guarde o certificado, em papel e em fotografia"] }
          ],
          tryIt: "Escreva a sua lista para o registo: três escolhas de nome, os dados dos donos (sem escrever o seu número de identificação num lugar partilhado), a morada, a atividade do negócio, os documentos e o site do registo.",
          youCanNow: "preparar uma lista para o registo para poder fazer o pedido de uma só vez.",
          quickCheck: [
            { objective: "O3", q: "Porque preparar três escolhas de nome para o negócio?", options: ["A lei exige três negócios", "Caso a primeira escolha já esteja ocupada", "Para confundir os falsos agentes", "Para pagar menos impostos"], answer: 1, why: "Se o primeiro nome estiver ocupado, a escolha seguinte evita um segundo pedido." },
            { objective: "O3", q: "Onde encontra os documentos exatos de que o seu registo precisa?", options: ["Na memória de um vizinho", "Num comentário nas redes sociais", "No site ou no balcão oficial do registo", "Num anúncio de um agente desconhecido"], answer: 2, why: "As exigências mudam, e só o registo tem a certeza." }
          ],
          sources: [BRS, ORC]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher e registar",
        questions: [
          { objective: "O1", q: "Dois amigos abrem juntos um negócio de comida para eventos e dividem o lucro. Com que forma isto se parece mais?", options: ["Empresário em nome individual", "Serviço do governo", "Uma sociedade de pessoas ou uma sociedade limitada", "Uma instituição de caridade"], answer: 2, why: "Dois ou mais donos que dividem o lucro formam uma sociedade de pessoas, ou podem criar uma sociedade limitada." },
          { objective: "O1", q: "No Senegal e na Costa do Marfim, o direito dos negócios vem:", options: ["Só das regras de cada cidade", "Da OHADA, comum a 17 países", "Da plataforma onde vende", "Do seu banco"], answer: 1, why: "As leis uniformes da OHADA aplicam-se nos seus países membros." },
          { objective: "O2", q: "Que final de endereço é sinal de um site do governo do Quénia?", options: [".go.ke", ".win", ".shop", ".xyz"], answer: 0, why: "Os sites do governo do Quénia costumam acabar em .go.ke." },
          { objective: "O2", q: "Um agente oferece-se para registar o seu negócio. O que tem de verificar?", options: ["Que tem um escritório bonito", "Que é rápido", "Que só aceita dinheiro vivo", "Que é verdadeiro, dá um recibo oficial e regista o negócio em seu nome"], answer: 3, why: "Um agente verdadeiro, um recibo oficial e o seu próprio nome no negócio protegem você." },
          { objective: "O3", q: "O que deve guardar depois de registar?", options: ["Nada", "Só uma mensagem SMS", "O certificado de registo e todos os recibos, em papel e em fotografia", "A palavra do agente"], answer: 2, why: "Vai precisar do certificado e dos recibos para bancos, renovações e contratos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir o negócio como deve ser",
      lessons: [
        {
          title: "Número fiscal e licenças locais",
          objectives: ["O4"],
          minutes: 6,
          goal: "Fazer a lista do número fiscal e das licenças de que o seu negócio precisa e de onde obter cada um.",
          text: [
            "Registar o nome muitas vezes é só o primeiro passo. A maioria dos negócios também precisa de um número de identificação fiscal, de uma licença local de comércio e, para alguns tipos de trabalho, de uma licença do setor.",
            "Número fiscal: no Quénia, o KRA PIN da Kenya Revenue Authority, que obtém no iTax; é preciso para o registo do negócio e para muitas outras coisas. Na Nigéria, a autoridade tributária federal é o Nigeria Revenue Service (NRS), e cada estado tem o seu próprio serviço de receitas. No Gana, a Ghana Revenue Authority usa o seu TIN ou o PIN do Ghana Card, e tem um regime simplificado de impostos para pequenos negócios (Modified Taxation Scheme). Pergunte na repartição de finanças que imposto de pequeno negócio se aplica a você.",
            "Licença local: muitas cidades e condados exigem uma licença de comércio ou de atividade, renovada regularmente. No Quénia é do governo do seu condado; na Nigéria, do governo do estado ou do governo local; no Gana, da assembleia distrital ou municipal. Licenças do setor: quem vende comida, salões, clínicas, transportes e outros podem precisar de um certificado sanitário ou de uma licença de um organismo do setor.",
            "Pergunte no serviço do governo local ou num centro de apoio a empresas, como a SMEDAN na Nigéria. Escreva cada exigência, o serviço e a data em que verificou. O seu número de identificação ou número fiscal é privado: não o publique nem o envie a desconhecidos."
          ],
          steps: ["Encontre a sua autoridade tributária e pergunte como um pequeno negócio obtém um número fiscal.", "Pergunte ao seu condado, estado, governo local ou assembleia sobre uma licença de comércio.", "Pergunte se o seu tipo de trabalho precisa de um certificado sanitário ou de uma licença do setor.", "Escreva cada um, o serviço e a data em que verificou."],
          words: [["Número de identificação fiscal (TIN)", "o número que a autoridade tributária lhe dá para declarar e pagar impostos; no Quénia é o KRA PIN."], ["Licença de comércio", "a autorização do seu governo local para ter um negócio nessa zona."], ["Licença do setor", "uma licença para certos tipos de trabalho, como comida, saúde ou transportes."]],
          slides: [
            { title: "Depois do nome: mais três verificações", bullets: ["Número fiscal", "Licença local de comércio", "Licença do setor para alguns tipos de trabalho"] },
            { title: "Números fiscais", bullets: ["Quénia: KRA PIN no iTax", "Nigéria: Nigeria Revenue Service e serviço de receitas do estado", "Gana: GRA, TIN ou PIN do Ghana Card"] },
            { title: "Licenças locais e do setor", bullets: ["Condado, estado, governo local ou assembleia", "Comida, salões, transportes podem precisar de mais", "Pergunte num centro de apoio a empresas"] },
            { title: "Escreva tudo", bullets: ["Cada exigência e o serviço", "A data em que verificou", "Mantenha privados os números de identificação e fiscais"] }
          ],
          tryIt: "Faça uma tabela com três linhas: número fiscal, licença local, licença do setor. Para cada uma, escreva o serviço, o site ou a morada, e se se aplica a você. Verifique pelo menos uma com o serviço esta semana.",
          youCanNow: "fazer a lista do número fiscal e das licenças de que o seu negócio precisa e do serviço de cada um.",
          quickCheck: [
            { objective: "O4", q: "No Quénia, como obtém um KRA PIN?", options: ["Na comissão do mercado", "No iTax, da Kenya Revenue Authority", "Com o gerente do seu banco", "Com um agente de WhatsApp"], answer: 1, why: "A KRA emite o PIN através do seu sistema iTax." },
            { objective: "O4", q: "A Grace abre uma banca de comida em Acra. Além do registo, sobre o que deve perguntar?", options: ["Mais nada", "Uma carta de condução", "Uma licença de comércio e qualquer certificado de alimentação ou sanitário", "Um passaporte"], answer: 2, why: "As licenças locais e as regras de segurança alimentar aplicam-se muitas vezes a quem vende comida." }
          ],
          sources: [KRA, NRS, GRA, SMEDAN]
        },
        {
          title: "Um livro de caixa simples: separar o dinheiro do negócio",
          objectives: ["O5"],
          minutes: 5,
          goal: "Registar cada venda e cada custo num livro de caixa simples durante uma semana.",
          text: [
            "Os registos mostram se você está mesmo a ganhar dinheiro. Também ajudam com os impostos, os empréstimos e as renovações. Comece de forma simples: um caderno ou uma página de notas no telefone.",
            "Um livro de caixa tem quatro colunas: data, o que aconteceu, entradas, saídas. Escreva cada venda e cada custo no mesmo dia, incluindo o dinheiro móvel. No fim do dia ou da semana, some as entradas, some as saídas e tire uma da outra. Exemplo de Douala: na segunda-feira, o Paul vende 12 capas de telefone por 24,000 XAF e compra mercadoria por 15,000 XAF; as entradas menos as saídas dão 9,000 XAF (números de exemplo).",
            "Mantenha o dinheiro do negócio separado do dinheiro da casa. Se tirar dinheiro para comida ou para as propinas da escola, escreva \"o dono tirou\" para o poder ver. Uma linha ou conta de dinheiro móvel só para o negócio torna isto mais fácil. Guarde os recibos num envelope ou tire fotografias deles."
          ],
          steps: ["Desenhe quatro colunas: data, o que aconteceu, entradas, saídas.", "Escreva cada venda e cada custo no mesmo dia.", "Escreva o dinheiro que tira para a casa como \"o dono tirou\".", "No fim da semana, some cada coluna e encontre a diferença.", "Guarde os recibos num envelope ou em fotografia."],
          words: [["Livro de caixa", "um registo simples do dinheiro que entra e sai do negócio."], ["O dono tirou (levantamentos)", "dinheiro que o dono tira do negócio para uso pessoal."]],
          slides: [
            { title: "Porquê manter registos", bullets: ["Ver se está mesmo a ganhar dinheiro", "Precisa deles para impostos, empréstimos e renovações"] },
            { title: "Quatro colunas", bullets: ["Data", "O que aconteceu", "Entradas", "Saídas"] },
            { title: "Separe o dinheiro do negócio", bullets: ["Escreva os gastos da casa como \"o dono tirou\"", "Uma linha de dinheiro móvel separada ajuda", "Guarde os recibos ou fotografias deles"] }
          ],
          tryIt: "Comece hoje um livro de caixa. Escreva cada venda e cada custo durante uma semana, incluindo o dinheiro que tira para a casa. No último dia, some cada coluna e escreva a diferença.",
          youCanNow: "manter um livro de caixa simples e separar o dinheiro do negócio do dinheiro da casa.",
          quickCheck: [
            { objective: "O5", q: "Quais são as quatro colunas de um livro de caixa simples?", options: ["Data, o que aconteceu, entradas, saídas", "Nome, idade, cidade, telefone", "Preço, cor, tamanho, marca", "De segunda a quinta-feira"], answer: 0, why: "Estas quatro colunas mostram cada movimento de dinheiro." },
            { objective: "O5", q: "Tira 2,000 NGN do negócio para comida em casa. O que escreve?", options: ["Nada", "Uma venda", "Um cliente novo", "\"O dono tirou 2,000 NGN\" nas saídas"], answer: 3, why: "Escrever o que o dono tira mantém os registos verdadeiros." }
          ]
        },
        {
          title: "Manter o registo: renovações, declarações e um calendário anual",
          objectives: ["O6"],
          minutes: 5,
          goal: "Fazer um calendário anual de renovações, declarações e datas das licenças.",
          text: [
            "Registar uma vez não é o fim. Muitos negócios têm de renovar, entregar declarações anuais ou declarações de impostos, e renovar as licenças locais. Falhar uma data pode trazer multas ou a perda do registo.",
            "Exemplos: o ORC do Gana diz que todas as sociedades constituídas têm de entregar declarações anuais, e que os nomes comerciais podem ser renovados pela internet, incluindo marcando *222#. A CAC da Nigéria supervisiona as declarações anuais. A KRA do Quénia espera declarações de quem tem obrigações fiscais. As licenças locais muitas vezes duram um ano. As datas e as taxas exatas são diferentes, por isso verifique cada uma no site oficial ou no balcão.",
            "Faça um calendário anual: escreva cada dever, o serviço, o mês em que é devido e a data em que verificou. Marque um lembrete no telefone um mês antes. Mantenha o livro de caixa em dia, porque as declarações usam esses números.",
            "Se não tem a certeza do que se aplica a você, pergunte ao registo, à repartição de finanças, a um centro de apoio a empresas ou a um contabilista qualificado. Se alguém ligar a dizer que o seu registo vai ser cancelado hoje se não lhe pagar já, verifique primeiro você mesmo com o registo."
          ],
          steps: ["Faça a lista de cada dever: renovação, declaração anual, declaração de impostos, renovação de licença.", "Verifique cada data e serviço no site oficial.", "Escreva-os num calendário de 12 meses.", "Marque um lembrete no telefone um mês antes de cada data.", "Verifique você mesmo com o registo os pedidos de pagamento com pressa."],
          words: [["Declaração anual", "um relatório que se entrega todos os anos ao registo para dizer que o negócio ainda existe e que os seus dados estão certos."], ["Renovação", "pagar ou entregar de novo para que um registo ou uma licença continue válido."], ["Multa", "um valor a pagar por estar atrasado ou por não cumprir uma regra."]],
          slides: [
            { title: "Registar não é o fim", bullets: ["Renovações e declarações anuais", "Declarações de impostos", "Renovação das licenças locais"] },
            { title: "Exemplos", bullets: ["ORC do Gana: declarações anuais das sociedades; renovar nomes por *222#", "CAC da Nigéria: declarações anuais", "KRA do Quénia: declarações se tem obrigações fiscais"] },
            { title: "O seu calendário anual", bullets: ["Dever, serviço, mês em que é devido", "A data em que verificou", "Lembrete no telefone um mês antes"] },
            { title: "Proteja-se", bullets: ["Na dúvida? Pergunte ao serviço ou a um contabilista", "Chamadas com pressa a dizer \"pague já\": verifique você mesmo com o registo"] }
          ],
          tryIt: "Tarefa final: junte a sua lista para o registo com a forma de negócio, o registo, as escolhas de nome, os documentos, o número fiscal e as licenças, o plano do livro de caixa e um calendário de 12 meses de renovações e declarações com lembretes marcados.",
          youCanNow: "planear as suas renovações e declarações de cada ano para que o seu negócio continue registado e em dia.",
          quickCheck: [
            { objective: "O6", q: "Quando deve marcar um lembrete para uma renovação?", options: ["Depois de a data passar", "Nunca", "Cerca de um mês antes da data", "Só se alguém lhe ligar"], answer: 2, why: "Um lembrete um mês antes dá tempo para preparar e pagar." },
            { objective: "O6", q: "Alguém liga a dizer que o seu negócio vai ser cancelado hoje se não lhe pagar já. O que faz?", options: ["Verifica você mesmo com o registo antes de pagar a alguém", "Paga-lhe depressa", "Envia a sua palavra-passe", "Fecha o negócio"], answer: 0, why: "Pedidos de pagamento com pressa são sinal de burla; o próprio registo pode dizer-lhe a situação do seu negócio." }
          ],
          sources: [ORC, CAC, KRA]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir o negócio como deve ser",
        questions: [
          { objective: "O4", q: "Além de registar o nome, muitos negócios também precisam de:", options: ["Um número fiscal e uma licença local de comércio", "Nada", "Um telefone novo", "Uma conta numa plataforma de venda"], answer: 0, why: "Os números fiscais e as licenças locais são separados do registo do nome." },
          { objective: "O4", q: "No Quénia, onde pergunta sobre uma licença de comércio?", options: ["A um agente de dinheiro móvel", "Ao governo do seu condado", "Numa escola", "Numa rádio"], answer: 1, why: "Os condados do Quénia emitem as licenças de atividade da sua zona." },
          { objective: "O5", q: "Porque separar o dinheiro do negócio do dinheiro da casa?", options: ["É mais divertido", "Para o banco lhe pagar", "Para ver se o negócio está mesmo a ganhar dinheiro", "Para não pagar impostos"], answer: 2, why: "Misturar o dinheiro esconde se o negócio está a ganhar." },
          { objective: "O5", q: "A sua semana mostra entradas de 40,000 KES e saídas de 31,000 KES. A diferença é:", options: ["71,000 KES", "31,000 KES", "40,000 KES", "9,000 KES"], answer: 3, why: "40,000 menos 31,000 dá 9,000." },
          { objective: "O6", q: "O que é uma declaração anual?", options: ["Um relatório que se entrega todos os anos ao registo a dizer que o negócio e os seus dados estão atualizados", "Um reembolso dos clientes", "Umas férias", "Um empréstimo do banco"], answer: 0, why: "As declarações anuais mantêm atualizado o registo do seu negócio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Registar e Gerir um Pequeno Negócio em África",
    questions: [
      { objective: "O1", q: "Qual é uma vantagem de registar um negócio?", options: ["Nunca pagar impostos", "Abrir uma conta bancária do negócio e ganhar contratos", "Não precisar de registos", "Não ter nenhum dever"], answer: 1, why: "O registo abre contas bancárias, contratos e programas, e também traz deveres." },
      { objective: "O1", q: "Um empresário em nome individual é:", options: ["Um negócio que pertence a uma só pessoa", "Um serviço do governo", "Uma sociedade com muitos sócios", "Um grupo de poupança"], answer: 0, why: "Um só dono, que responde pessoalmente pelo negócio." },
      { objective: "O1", q: "Muitos pequenos vendedores em Marrocos usam:", options: ["Uma empresa pública", "Só a SARL da OHADA", "O estatuto de autoempreendedor", "Nunca se registam"], answer: 2, why: "Marrocos tem um estatuto de autoempreendedor para pequenas atividades." },
      { objective: "O1", q: "A quem deve perguntar antes de uma decisão grande sobre a forma do seu negócio?", options: ["A um desconhecido na internet", "A ninguém", "A um vendedor do mercado", "Ao registo ou a um contabilista ou advogado qualificado"], answer: 3, why: "O registo ou um profissional podem aconselhar sobre o seu próprio caso." },
      { objective: "O2", q: "No Gana, os nomes comerciais são registados:", options: ["Pelo Office of the Registrar of Companies (ORC)", "Só pela Ghana Revenue Authority", "Por um agente de dinheiro móvel", "Por uma igreja"], answer: 0, why: "O ORC regista nomes comerciais e empresas no Gana." },
      { objective: "O2", q: "No Quénia, regista um negócio pela internet através:", options: ["De uma página de Facebook", "Do eCitizen, com o Business Registration Service", "De um grupo privado de WhatsApp", "Da aplicação do seu banco"], answer: 1, why: "O registo no BRS é feito pela internet através do eCitizen." },
      { objective: "O2", q: "Qual é a forma mais segura de chegar ao site do registo?", options: ["Carregar num link de uma SMS desconhecida", "Usar um anúncio que aparece no ecrã", "Escrever você mesmo o endereço oficial e verificar o final", "Pedir a um desconhecido para o fazer com a sua palavra-passe"], answer: 2, why: "Escrever você mesmo o endereço evita os sites falsos parecidos." },
      { objective: "O3", q: "Antes de começar um registo pela internet, deve:", options: ["Preparar primeiro todos os nomes, dados e documentos", "Começar e esperar que corra bem", "Partilhar a sua palavra-passe com um agente", "Pagar a um desconhecido"], answer: 0, why: "Estar pronto deixa-o acabar de uma só vez e poupa dados móveis." },
      { objective: "O3", q: "Um bom nome de negócio é:", options: ["Uma cópia de uma marca famosa", "Claro e que nenhum outro negócio use já", "Muito comprido e difícil de escrever", "Igual ao do seu vizinho"], answer: 1, why: "Um nome claro e livre tem mais hipóteses de ser aceite." },
      { objective: "O3", q: "Onde encontra a taxa de registo atual?", options: ["Num cartaz antigo", "Num boato", "No seu melhor palpite", "No site ou no balcão oficial do registo"], answer: 3, why: "As taxas mudam, por isso a fonte oficial é a única segura." },
      { objective: "O4", q: "O KRA PIN é:", options: ["Um PIN de dinheiro móvel", "Uma palavra-passe para partilhar", "O número de identificação fiscal do Quénia", "Uma licença de atividade"], answer: 2, why: "O KRA PIN é o seu número fiscal na Kenya Revenue Authority." },
      { objective: "O4", q: "A autoridade tributária federal da Nigéria é:", options: ["O Nigeria Revenue Service (NRS)", "A Corporate Affairs Commission", "A SMEDAN", "O sindicato do seu mercado"], answer: 0, why: "O NRS é a autoridade tributária federal da Nigéria; os estados têm os seus próprios serviços de receitas." },
      { objective: "O4", q: "Um salão ou uma banca de comida também pode precisar de:", options: ["Uma licença de piloto", "Mais nada", "Um curso universitário", "Um certificado sanitário ou uma licença do setor"], answer: 3, why: "Alguns tipos de trabalho precisam de licenças do setor por razões de saúde e segurança." },
      { objective: "O5", q: "Um livro de caixa regista:", options: ["Os aniversários dos clientes", "As entradas e as saídas de dinheiro, com datas", "Só as vendas grandes", "Só os empréstimos do banco"], answer: 1, why: "Regista cada movimento de dinheiro, com a data e o que aconteceu." },
      { objective: "O5", q: "Quando deve escrever uma venda no livro de caixa?", options: ["Uma vez por ano", "Só quando se lembrar", "No mesmo dia", "Nunca, se for dinheiro móvel"], answer: 2, why: "Escrever no mesmo dia mantém o registo completo e verdadeiro." },
      { objective: "O5", q: "O dinheiro que tira do negócio para as propinas da escola escreve-se como:", options: ["\"O dono tirou\" nas saídas", "Uma venda", "Nada", "Um presente de um cliente"], answer: 0, why: "Registar o que o dono tira mantém claro o dinheiro do negócio e o da casa." },
      { objective: "O6", q: "O ORC do Gana deixa renovar os nomes comerciais:", options: ["Só em pessoa no estrangeiro", "Nunca", "Pela internet, incluindo marcando *222#", "Através de um agente de WhatsApp"], answer: 2, why: "O ORC diz que as renovações podem ser feitas pela internet e por *222#." },
      { objective: "O6", q: "Um calendário anual de obrigações tem:", options: ["Só os feriados", "As moradas dos clientes", "Os jogos de futebol", "Cada renovação, declaração e licença, o seu serviço e o mês em que é devida"], answer: 3, why: "Um só calendário mostra todos os deveres e datas." },
      { objective: "O6", q: "Falhar uma renovação ou uma declaração anual pode levar a:", options: ["Um presente grátis", "Multas ou à perda do registo", "Preços mais baixos", "Nada, nunca"], answer: 1, why: "As entregas atrasadas podem trazer multas ou a saída do registo." },
      { objective: "O6", q: "Antes de cada data limite, deve:", options: ["Verificar a data no site oficial e marcar um lembrete", "Esperar que alguém lhe ligue para lembrar", "Pagar a quem pedir", "Ignorar"], answer: 0, why: "Verificar na fonte oficial e marcar um lembrete mantém você a tempo e protegido das burlas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 5, 7, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Forma do negócio", objective: "O1", notYet: "Nenhuma forma escolhida, ou nenhuma razão dada.", meets: "Uma forma escolhida com uma vantagem e um dever, adequada aos donos e aos riscos.", exceeds: "Compara duas formas e diz quando o negócio pode mudar de forma." },
      { name: "Registo oficial", objective: "O2", notYet: "Nenhum registo indicado, ou um site ou agente não oficial.", meets: "O registo oficial certo e o seu site oficial ou a morada do balcão.", exceeds: "Também diz como reconhecer um site ou agente falso." },
      { name: "Lista para o registo", objective: "O3", notYet: "Faltam as escolhas de nome, os dados dos donos ou a atividade.", meets: "Três nomes, dados dos donos, morada, atividade, documentos e a taxa do site oficial.", exceeds: "Também indica os documentos de que uma sociedade precisaria, ou onde guardar o certificado em segurança." },
      { name: "Número fiscal e licenças", objective: "O4", notYet: "Nenhum número fiscal ou licença na lista, ou nenhum serviço indicado.", meets: "Número fiscal, licença local e qualquer licença do setor, cada um com o seu serviço e a data em que verificou.", exceeds: "Pelo menos um foi confirmado com o serviço em pessoa ou por telefone." },
      { name: "Livro de caixa", objective: "O5", notYet: "Nenhum livro de caixa, ou dinheiro do negócio e da casa misturados.", meets: "Uma semana de registos com quatro colunas, entradas \"o dono tirou\" e totais semanais certos.", exceeds: "Uma linha ou conta de dinheiro só para o negócio e os recibos guardados." },
      { name: "Calendário anual", objective: "O6", notYet: "Nenhum calendário, ou datas adivinhadas.", meets: "Um calendário de 12 meses de renovações, declarações e licenças com os serviços, as datas verificadas e lembretes marcados.", exceeds: "Indica a quem perguntar (registo, repartição de finanças ou contabilista) sobre cada dever." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que registam o seu negócio ou uma licença em 60 dias (inquérito de seguimento)",
      "Alunos que mantêm um livro de caixa durante pelo menos quatro semanas depois do curso",
      "Alunos que abrem uma conta bancária ou de dinheiro móvel do negócio, ganham um contrato ou entram num programa de apoio em seis meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador de um cibercafé com internet",
      "Um caderno para a lista, o livro de caixa e o calendário",
      "Os endereços dos sites oficiais do seu registo, da autoridade tributária e do governo local",
      "Cerca de 60 minutos no total, em sessões curtas, mais uma semana de prática com o livro de caixa"
    ],
    facilitatorNotes: [
      "Antes do curso, procure o registo, a autoridade tributária e o serviço de licenças locais do seu país e da sua cidade nos sites oficiais, e imprima os endereços.",
      "Nunca recolha os números de identificação, as palavras-passe ou os números fiscais dos alunos; as listas dizem o que é preciso, não os próprios números.",
      "Convide alguém do registo, de um centro de apoio a empresas (por exemplo a SMEDAN na Nigéria) ou um contabilista local para responder a perguntas.",
      "Não diga taxas nem prazos de memória; mostre aos alunos como verificá-los no site oficial.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
