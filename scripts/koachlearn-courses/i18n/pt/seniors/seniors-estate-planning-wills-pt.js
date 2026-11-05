"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-estate-planning-wills.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US names (LawHelp.org, Eldercare Locator, CFPB, MedlinePlus, Medicare) are kept as written; the course says laws differ by state and country.

module.exports = {
  id: "seniors-estate-planning-wills-pt",
  lang: "pt",
  translationOf: "seniors-estate-planning-wills",
  category: "Seniors and Technology",
  name: "Planeamento da Herança e Testamentos",
  skills: "Saber o que faz um testamento, Verificar os seus beneficiários, Compreender a procuração e as diretivas de cuidados de saúde, Fazer a lista do que tem e do que deve, Preparar-se para um advogado ou apoio jurídico, Organizar e guardar os seus documentos",
  outcome: "preparar e organizar o planeamento da sua herança: uma lista do que tem e do que deve, uma verificação dos seus beneficiários, as pessoas que quer nomear, as suas perguntas para um advogado ou apoio jurídico e uma nota clara a dizer à sua família onde estão os seus documentos importantes.",
  about: [
    "Este curso é para pessoas mais velhas que querem facilitar a vida da família, e para filhos e netos adultos que as ajudam. Não precisa de ser rico: qualquer pessoa com uma conta no banco, uma casa, um carro, uma pensão, um animal de estimação ou netos pequenos a seu cuidado pode beneficiar de um plano.",
    "Vai aprender o que fazem um testamento, os beneficiários, uma procuração e uma diretiva de cuidados de saúde. Depois vai fazer as listas e as escolhas que um advogado lhe vai pedir, e organizar tudo para que as pessoas certas o possam encontrar.",
    "Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As leis sobre testamentos e estes documentos são diferentes em cada estado dos EUA e em cada país. Este curso ajuda você a preparar-se; para tornar os documentos legais, procure um advogado ou apoio jurídico gratuito onde vive."
  ],
  finalTask: "Faça a sua pasta do planeamento da herança: (1) uma lista do que tem e do que deve; (2) uma verificação dos beneficiários de cada conta ou apólice que os tenha; (3) as pessoas que nomearia como testamenteiro, procurador para o dinheiro e procurador para a saúde, com um substituto para cada uma; (4) pelo menos cinco perguntas para um advogado ou apoio jurídico; (5) uma nota de uma página \"onde estão os meus documentos\" para a sua família. Depois encontre um lugar perto de você que dê ajuda jurídica.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas, e os familiares que as ajudam, que não fizeram um planeamento da herança ou que têm um plano desatualizado. Algumas estão a criar netos; muitas têm seguro de vida, contas de reforma ou uma casa.",
    startingPoint: "Sabem que os testamentos existem, mas muitos não têm testamento, nunca verificaram os formulários de beneficiários e não sabem o que faz uma procuração ou uma diretiva de cuidados de saúde. Os documentos estão muitas vezes espalhados pela casa.",
    gap: "Sem um plano, é a lei que decide quem herda, formulários de beneficiários antigos podem mandar o dinheiro para a pessoa errada, e a família pode ter de ir a tribunal se a pessoa não conseguir decidir por si. Preparar as listas, as pessoas e as perguntas, e organizar os documentos, poupa à família stress e dinheiro e torna a consulta com o advogado mais rápida e mais barata.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: papel e uma pasta chegam; um telefone ou computador ajuda a encontrar ajuda jurídica",
      "Tempo: cerca de 5 minutos por lição, com calma, mais tempo para juntar os documentos",
      "As leis mudam de estado para estado e de país para país; o curso prepara, e um advogado ou apoio jurídico torna os documentos legais",
      "Privacidade: só os últimos quatro algarismos dos números de conta, nenhuma palavra-passe e nenhum dado privado em ferramentas de IA"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as palavras básicas do planeamento da herança", action: "explicar o que faz um testamento, o que faz um testamenteiro e o que pode acontecer sem testamento", standard: "com as suas palavras, acertando pelo menos 4 de 5 perguntas" },
    { id: "O2", condition: "Com o seu seguro de vida e as suas contas de reforma e do banco", action: "verificar quem está nomeado como beneficiário e como substituto em cada um", standard: "marcando todos os formulários desatualizados" },
    { id: "O3", condition: "Com as pessoas da sua vida", action: "escolher um testamenteiro, um procurador para o dinheiro e um procurador para a saúde, com um substituto para cada um", standard: "escolhendo pessoas de confiança, contactáveis e que vão seguir a sua vontade" },
    { id: "O4", condition: "Usando papel ou um ficheiro privado", action: "fazer a lista do que tem e do que deve", standard: "mostrando só os últimos quatro algarismos de cada número e nenhuma palavra-passe" },
    { id: "O5", condition: "Antes de falar com um advogado ou apoio jurídico", action: "encontrar uma fonte de ajuda jurídica perto de você e escrever pelo menos cinco perguntas claras", standard: "incluindo quanto vai custar e o que está incluído" },
    { id: "O6", condition: "Com os seus documentos importantes", action: "organizá-los numa só pasta e escrever uma nota \"onde estão os meus documentos\" para a sua família", standard: "partilhada com as pessoas que nomeou" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer os documentos",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é o planeamento da herança e o que faz um testamento",
          minutes: 5,
          goal: "Explicar o que faz um testamento e o que pode acontecer sem ele.",
          text: [
            "Planear a herança quer dizer decidir antes o que acontece ao seu dinheiro e aos seus bens quando morrer, e quem decide por você se ficar doente demais para decidir. A sua herança (o seu património) é tudo o que tem, menos o que deve.",
            "Um testamento é um documento legal que diz quem fica com os seus bens e nomeia um testamenteiro: a pessoa que cumpre a sua vontade, paga as últimas contas e entrega o que sobra. Em muitos lugares, um testamento também pode nomear um tutor para crianças com menos de 18 anos a seu cuidado, como netos que está a criar.",
            "Se morrer sem testamento, é a lei do lugar onde vive que decide quem herda, e um tribunal escolhe quem trata da herança. O resultado pode não ser o que você queria.",
            "Cada estado e cada país tem as suas regras para um testamento ser válido, como a forma de o assinar e as testemunhas. Um testamento que não segue essas regras pode não contar. É por isso que este curso ajuda você a preparar-se, e um advogado ou apoio jurídico ajuda a torná-lo legal."
          ],
          words: [["Herança (património)", "tudo o que tem, como dinheiro, uma casa, um carro e bens, menos o que deve."], ["Testamento", "um documento legal que diz quem fica com os seus bens depois de morrer e quem cumpre a sua vontade."], ["Testamenteiro", "a pessoa nomeada num testamento para cumprir a sua vontade e tratar da sua herança."], ["Tutor", "uma pessoa nomeada para cuidar de uma criança com menos de 18 anos."]],
          slides: [
            { title: "Planear a herança é decidir antes", bullets: ["O que acontece às suas coisas quando morrer", "Quem decide por você se estiver doente demais"] },
            { title: "Um testamento", bullets: ["Diz quem fica com os seus bens", "Nomeia um testamenteiro", "Pode nomear um tutor para crianças a seu cuidado"] },
            { title: "Sem testamento", bullets: ["Decide a lei do lugar onde vive", "Um tribunal escolhe quem trata da herança", "Pode não ser o que você queria"] },
            { title: "As regras mudam de lugar para lugar", bullets: ["Cada estado e cada país tem as suas regras", "Prepare-se aqui; torne-o legal com um advogado ou apoio jurídico"] }
          ],
          sources: [{ name: "LawHelp.org: encontrar ajuda jurídica gratuita e informações no seu estado (EUA)", url: "https://www.lawhelp.org/" }],
          tryIt: "Escreva três coisas que mais lhe importa deixar, como uma casa, poupanças, uma Bíblia da família, um carro ou o cuidado de um animal, e quem gostaria que ficasse com cada uma. É uma lista privada para você, não um documento legal.",
          youCanNow: "explicar o que são um testamento e um testamenteiro, e porque um testamento tem de seguir as regras do lugar onde vive.",
          quickCheck: [
            { objective: "O1", q: "O que é um testamenteiro?", options: ["A pessoa que cumpre a vontade escrita no seu testamento", "Um juiz", "Uma conta no banco", "O seu médico"], answer: 0, why: "O testamenteiro cumpre a sua vontade, paga as últimas contas e entrega o que sobra." },
            { objective: "O1", q: "Um amigo diz: \"Não preciso de testamento; a minha família resolve.\" O que pode acontecer sem testamento?", options: ["Nada muda", "A família vota", "A lei do lugar onde vive decide quem herda, e isso pode não ser a vontade dele", "O banco fica com tudo"], answer: 2, why: "Sem testamento, a lei decide quem herda e um tribunal escolhe quem trata da herança." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Verificar os seus beneficiários",
          minutes: 5,
          goal: "Encontrar todas as contas e apólices que têm um beneficiário e verificar quem está nomeado.",
          text: [
            "Algum dinheiro não passa pelo seu testamento. O seguro de vida, muitas contas de reforma e pensões, e algumas contas no banco deixam você nomear um beneficiário: a pessoa que recebe esse dinheiro quando você morrer. Estes formulários normalmente decidem quem recebe esse dinheiro, mesmo que o testamento diga outra coisa.",
            "É por isso que os formulários antigos causam problemas. Uma apólice de seguro de vida pode ainda nomear um ex-cônjuge, um pai ou uma mãe que já morreu, ou um filho de antes de os netos nascerem.",
            "Faça uma lista de todas as suas contas e apólices. Para cada uma, pergunte à empresa ou veja na sua conta na internet quem está nomeado como beneficiário e como substituto (muitas vezes chamado beneficiário contingente). Corrija as que estiverem erradas com o formulário da própria empresa.",
            "Reveja os seus beneficiários depois de grandes acontecimentos da vida: um casamento, um divórcio, uma morte, um nascimento ou um novo neto. Pergunte a um advogado antes de nomear uma criança menor ou uma pessoa que recebe apoios por deficiência, porque pode haver regras especiais."
          ],
          steps: ["Faça a lista de todos os seguros de vida, contas de reforma, pensões e contas no banco.", "Para cada um, descubra quem está nomeado como beneficiário e como substituto.", "Marque os que estão desatualizados.", "Atualize-os com o formulário da própria empresa.", "Reveja outra vez depois de um casamento, divórcio, morte ou nascimento."],
          words: [["Beneficiário", "a pessoa que você nomeia para receber o dinheiro de uma conta ou apólice quando morrer."], ["Beneficiário contingente", "o substituto que recebe o dinheiro se o primeiro beneficiário já tiver morrido."], ["Acontecimento da vida", "uma grande mudança, como um casamento, divórcio, morte ou nascimento."]],
          slides: [
            { title: "Algum dinheiro não passa pelo testamento", bullets: ["Seguro de vida, muitas contas de reforma", "Algumas contas no banco", "Normalmente decide o formulário de beneficiários"] },
            { title: "Formulários antigos causam problemas", bullets: ["Um ex-cônjuge ainda nomeado", "Uma pessoa que já morreu", "Netos novos deixados de fora"] },
            { title: "Verifique todos", bullets: ["Faça a lista das contas e apólices", "Encontre o beneficiário nomeado e o substituto", "Atualize com o formulário da empresa"] },
            { title: "Reveja depois de acontecimentos da vida", bullets: ["Casamento, divórcio, morte, nascimento", "Pergunte a um advogado sobre menores ou apoios por deficiência"] }
          ],
          sources: [{ name: "CFPB: Gerir o dinheiro de outra pessoa (guias para famílias, em inglês)", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }],
          tryIt: "Faça a lista de todas as contas ou apólices que podem ter um beneficiário. Escolha uma, verifique quem está nomeado (na internet, nos seus papéis ou ligando para a empresa) e escreva se ainda está certo.",
          youCanNow: "encontrar as suas contas que têm beneficiários, verificar quem está nomeado e saber quando os atualizar.",
          quickCheck: [
            { objective: "O2", q: "O que é um beneficiário?", options: ["A pessoa que escreve o seu testamento", "A pessoa nomeada para receber o dinheiro de uma conta ou apólice quando você morrer", "O seu advogado", "O gerente do seu banco"], answer: 1, why: "Um beneficiário é a pessoa nomeada numa conta ou apólice para receber esse dinheiro." },
            { objective: "O2", q: "O formulário da sua pensão ainda nomeia o seu falecido marido como beneficiário. O que faz?", options: ["Deixa assim; o testamento resolve", "Risca o nome dele na sua cópia", "Conta a um amigo", "Atualiza-o com o formulário da própria empresa"], answer: 3, why: "Os formulários de beneficiários normalmente decidem quem recebe esse dinheiro, por isso atualize-os com o formulário da empresa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Procuração e diretivas de cuidados de saúde",
          minutes: 6,
          goal: "Explicar quem decidiria por você sobre o dinheiro e sobre a saúde se você não conseguisse.",
          text: [
            "Um testamento só funciona depois de morrer. Outros documentos protegem você enquanto está vivo, se uma doença ou um acidente o deixar sem conseguir decidir por si.",
            "Uma procuração para assuntos financeiros nomeia um procurador: uma pessoa de confiança que trata do dinheiro e dos bens por você, por exemplo pagar contas ou falar com o banco. O Consumer Financial Protection Bureau (CFPB, o serviço do governo dos EUA que protege os consumidores) tem guias gratuitos para quem é nomeado procurador. Sem procuração, a sua família pode ter de ir a tribunal para que seja nomeado um tutor ou curador, o que leva tempo e custa dinheiro.",
            "Uma diretiva de cuidados de saúde, também chamada diretiva antecipada, trata das decisões médicas. Uma procuração para cuidados de saúde nomeia uma pessoa de confiança para tomar decisões de saúde se você não conseguir. Um testamento vital escreve que tratamentos você quereria ou não quereria se estivesse a morrer ou inconsciente para sempre, como máquinas para respirar ou alimentação por sonda.",
            "Escolha pessoas de confiança, que vivam perto ou que se consigam contactar, e que sigam a sua vontade, não a delas. Nomeie um substituto para cada uma. Depois fale com elas, e com o seu médico, sobre o que quer. Os formulários e as regras mudam de estado para estado e de país para país, por isso obtenha-os com um advogado, apoio jurídico, o consultório do seu médico ou o hospital, e pergunte como assiná-los corretamente."
          ],
          words: [["Procuração", "um documento legal que deixa uma pessoa escolhida por você agir em seu nome."], ["Procurador", "a pessoa que você nomeia numa procuração."], ["Diretiva antecipada", "documentos que dizem aos médicos e à família a sua vontade sobre os cuidados de saúde e quem decide por você."], ["Testamento vital", "um documento que diz que tratamentos você quer ou não quer no fim da vida."], ["Procurador para a saúde", "a pessoa que você nomeia para tomar decisões de saúde se você não conseguir."]],
          slides: [
            { title: "Planos para enquanto está vivo", bullets: ["Um testamento só funciona depois da morte", "Estes servem para doença ou acidente"] },
            { title: "Procuração para assuntos financeiros", bullets: ["Nomeia um procurador para o dinheiro e os bens", "Paga contas, fala com o banco", "Sem ela, a família pode precisar do tribunal"] },
            { title: "Diretivas de cuidados de saúde", bullets: ["Procurador para a saúde: quem decide", "Testamento vital: que tratamentos quer", "Fale sobre elas com o seu médico"] },
            { title: "Escolha bem", bullets: ["De confiança e contactável", "Vai seguir a sua vontade", "Nomeie um substituto; os formulários mudam por estado"] }
          ],
          sources: [
            { name: "MedlinePlus: Diretivas antecipadas (em inglês)", url: "https://medlineplus.gov/advancedirectives.html" },
            { name: "CFPB: Gerir o dinheiro de outra pessoa (em inglês)", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }
          ],
          tryIt: "Escreva o nome da pessoa que escolheria como procurador para o dinheiro e como procurador para a saúde, e um substituto para cada um. Ao lado de cada nome, escreva uma razão por que confia nessa pessoa.",
          youCanNow: "explicar uma procuração para assuntos financeiros, um procurador para a saúde e um testamento vital, e escolher em quem confia para cada um.",
          quickCheck: [
            { objective: "O3", q: "O que faz uma procuração para assuntos financeiros?", options: ["Nomeia alguém para tratar do seu dinheiro e dos seus bens se você não conseguir", "Diz quem fica com a sua casa quando morrer", "Faz a lista dos seus medicamentos", "Fecha a sua conta no banco"], answer: 0, why: "Uma procuração para assuntos financeiros nomeia um procurador para gerir o dinheiro por você enquanto está vivo." },
            { objective: "O3", q: "Está a escolher um procurador para a saúde. Qual é a melhor escolha?", options: ["O familiar que mais discute", "Alguém que não vê há anos", "Uma pessoa de confiança, que consegue contactar e que vai seguir a sua vontade, com um substituto", "Quem pedir primeiro"], answer: 2, why: "Escolha alguém de confiança, contactável e disposto a seguir a sua vontade, e nomeie um substituto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer os documentos",
        questions: [
          { objective: "O1", q: "O que faz um testamenteiro?", options: ["Cumpre a vontade escrita no seu testamento e trata da sua herança", "Escreve os seus registos médicos", "Vende-lhe seguros", "Decide o seu plano do Medicare"], answer: 0, why: "O testamenteiro é nomeado no testamento para cumprir a sua vontade." },
          { objective: "O1", q: "O que pode acontecer se morrer sem testamento?", options: ["Não acontece nada aos seus bens", "O seu banco fica com tudo", "A lei do lugar onde vive decide quem herda", "O seu vizinho escolhe"], answer: 2, why: "Sem testamento, decidem a lei do estado ou do país e um tribunal." },
          { objective: "O2", q: "O seu testamento deixa tudo à sua filha, mas o formulário do seu seguro de vida ainda nomeia o seu ex-marido. Quem recebe normalmente o seguro?", options: ["A sua filha", "O tribunal", "O agente de seguros", "A pessoa nomeada no formulário de beneficiários"], answer: 3, why: "Os formulários de beneficiários normalmente decidem esse dinheiro, mesmo que o testamento diga outra coisa." },
          { objective: "O3", q: "Que documento nomeia alguém para tomar decisões médicas se você não conseguir?", options: ["Um extrato do banco", "Uma procuração para cuidados de saúde", "Um formulário de beneficiários", "Uma lista de compras"], answer: 1, why: "O procurador para a saúde é a pessoa que você nomeia para as decisões de saúde." },
          { objective: "O1", q: "Porque precisa de um advogado ou apoio jurídico para terminar estes documentos?", options: ["Porque as ferramentas de IA não os podem ler", "Porque têm de ser escritos à máquina", "Porque as regras para os tornar legais mudam de estado para estado e de país para país", "Porque só os advogados podem ter uma casa"], answer: 2, why: "Um documento que não segue as regras do lugar pode não contar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Preparar e organizar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer a lista do que tem e do que deve",
          minutes: 5,
          goal: "Fazer uma lista simples dos seus bens e dívidas que um advogado e a sua família possam usar.",
          text: [
            "Antes de falar com um advogado, faça uma lista do que tem e do que deve. Esta lista ajuda o advogado a dar bons conselhos, e mais tarde ajuda o seu testamenteiro a encontrar tudo.",
            "O que tem (bens): contas no banco e em cooperativas de crédito, contas de reforma e pensões, seguro de vida, a sua casa ou terreno, veículos, objetos de valor, e coisas com valor para a família, como joias ou fotografias. Ponha também as contas na internet, como o e-mail e onde guarda fotografias, e os animais de estimação que vão precisar de uma nova casa.",
            "O que deve (dívidas): um empréstimo da casa, um empréstimo do carro, cartões de crédito, contas médicas e qualquer empréstimo pessoal.",
            "Para cada coisa, escreva a empresa e o tipo de conta, mas não o número completo da conta nem palavras-passe. Escreva \"acaba em 1234\" no lugar. Guarde esta lista num lugar seguro. Não a escreva num assistente de IA nem a envie por e-mail a ninguém que não tenha sido escolhido para ajudar você."
          ],
          steps: ["Escreva um título: O que tenho. Ponha contas, apólices, propriedades, veículos e objetos de valor.", "Acrescente as contas na internet e os animais de estimação.", "Escreva um título: O que devo. Ponha cada dívida e com quem é.", "Use só os últimos quatro algarismos de cada número, e nunca escreva palavras-passe nesta lista.", "Guarde-a num lugar seguro."],
          words: [["Bem", "uma coisa que tem e que tem valor, como dinheiro, uma casa ou um carro."], ["Dívida", "dinheiro que deve, como um empréstimo da casa ou um cartão de crédito."], ["Inventário", "uma lista completa do que tem."]],
          slides: [
            { title: "Porquê fazer a lista", bullets: ["Ajuda o seu advogado a aconselhar você", "Ajuda o seu testamenteiro a encontrar tudo"] },
            { title: "O que tem", bullets: ["Contas, pensões, seguro de vida", "Casa, terreno, veículos, objetos de valor", "Contas na internet e animais de estimação"] },
            { title: "O que deve", bullets: ["Empréstimo da casa, empréstimo do carro, cartões de crédito", "Contas médicas, empréstimos pessoais"] },
            { title: "Mantenha-a privada", bullets: ["Só os últimos quatro algarismos", "Nenhuma palavra-passe na lista", "Nunca a cole numa ferramenta de IA"] }
          ],
          tryIt: "Comece já a sua lista em papel: escreva pelo menos cinco coisas que tem e todas as dívidas que tem, com o nome da empresa e só os últimos quatro algarismos de cada número.",
          youCanNow: "fazer uma lista privada e organizada do que tem e do que deve para o seu advogado e a sua família.",
          quickCheck: [
            { objective: "O4", q: "Quais são os seus bens?", options: ["As suas dívidas", "Os seus médicos", "As suas perguntas para um advogado", "O que tem, como contas, propriedades e objetos de valor"], answer: 3, why: "Os bens são o que tem; as dívidas são o que deve." },
            { objective: "O4", q: "Está a escrever a sua conta poupança na lista. Como escreve o número?", options: ["O número completo e a palavra-passe", "\"Acaba em 1234\"", "Só o número completo", "Deixa a conta de fora"], answer: 1, why: "Escreva só os últimos quatro algarismos, e nunca escreva palavras-passe na lista." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Preparar-se para um advogado ou apoio jurídico",
          minutes: 5,
          goal: "Encontrar ajuda jurídica perto de você e preparar as escolhas e as perguntas que vai levar.",
          text: [
            "A ajuda para planear a herança não tem de ser cara. Pode haver ajuda gratuita ou barata em grupos de apoio jurídico, serviços jurídicos para idosos, clínicas de faculdades de direito e programas de advogados voluntários. No site LawHelp.org (EUA) escolhe o seu estado para encontrar ajuda jurídica gratuita de organizações sem fins lucrativos. O Eldercare Locator (1-800-677-1116) liga pessoas mais velhas e famílias a serviços locais; pergunte-lhes por ajuda jurídica para idosos perto de você. A ordem dos advogados do seu estado ou da sua zona também pode ter um serviço que indica advogados.",
            "Existem formulários e kits de testamento na internet, mas um formulário que não corresponde às regras do seu estado, ou à situação da sua família, pode falhar. Um advogado ou apoio jurídico pode dizer-lhe se um formulário simples chega ou não para você.",
            "Leve o que preparou: a lista do que tem e do que deve, a verificação dos beneficiários e as pessoas que escolheu para testamenteiro, tutor, procurador para o dinheiro e procurador para a saúde, com os substitutos. Leve também perguntas.",
            "Boas perguntas: Preciso de um testamento, de um trust (fundo fiduciário) ou dos dois? Como deve o meu testamento ser assinado e testemunhado aqui? O que acontece à minha casa? O que devo fazer por um neto a meu cuidado? Quanto vai custar e o que está incluído? Um assistente de IA pode ajudar a escrever as suas perguntas com palavras claras, mas deixe de fora nomes e números, e deixe as respostas legais para o advogado."
          ],
          steps: ["Vá ao LawHelp.org e escolha o seu estado, ou ligue para o Eldercare Locator.", "Pergunte por ajuda gratuita ou barata para idosos planearem a herança.", "Junte as suas listas e as pessoas que escolheu.", "Escreva pelo menos cinco perguntas.", "Pergunte quanto vai custar e o que está incluído antes de começar."],
          words: [["Apoio jurídico", "ajuda jurídica gratuita de organizações sem fins lucrativos para pessoas que cumprem as condições."], ["Serviço que indica advogados", "um serviço, muitas vezes da ordem dos advogados, que põe você em contacto com um advogado."], ["Trust (fundo fiduciário)", "um acordo legal em que uma pessoa gere bens para outras; um advogado pode dizer se precisa de um."]],
          slides: [
            { title: "Onde encontrar ajuda", bullets: ["LawHelp.org: escolha o seu estado", "Eldercare Locator: 1-800-677-1116", "Ordem dos advogados: serviço que indica advogados"] },
            { title: "Cuidado com os kits", bullets: ["Um formulário tem de seguir as regras do seu estado", "Pergunte a um advogado se um formulário simples chega"] },
            { title: "Leve a sua preparação", bullets: ["O que tem e o que deve", "Verificação dos beneficiários", "As pessoas que escolheu, com substitutos"] },
            { title: "Leve perguntas", bullets: ["Testamento, trust ou os dois?", "Como se assina e testemunha aqui?", "Quanto vai custar?"] }
          ],
          sources: [
            { name: "LawHelp.org: encontrar ajuda jurídica gratuita (EUA, em inglês)", url: "https://www.lawhelp.org/" },
            { name: "Eldercare Locator (Administration for Community Living, EUA)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Vá ao LawHelp.org, escolha o seu estado e encontre um grupo de apoio jurídico ou um serviço jurídico para idosos perto de você. Escreva o nome e o número de telefone, e escreva cinco perguntas que lhes faria.",
          youCanNow: "encontrar ajuda jurídica gratuita ou barata perto de você e chegar à consulta preparado.",
          quickCheck: [
            { objective: "O5", q: "O que é o LawHelp.org?", options: ["Um site para encontrar ajuda jurídica gratuita de organizações sem fins lucrativos no seu estado", "Um kit de testamento na internet", "Um banco", "Um serviço do governo para apoios"], answer: 0, why: "No LawHelp.org escolhe o seu estado para encontrar ajuda jurídica gratuita." },
            { objective: "O5", q: "Quer que a IA ajude a escrever as suas perguntas para o advogado. O que deixa de fora?", options: ["A palavra \"testamento\"", "As suas perguntas", "Nomes e números de conta", "A palavra \"custo\""], answer: 2, why: "A IA pode ajudar com palavras claras, mas deixe de fora nomes e números e deixe o advogado responder." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Organizar e guardar os seus documentos importantes",
          minutes: 5,
          goal: "Pôr os seus documentos num só lugar seguro e dizer às pessoas certas onde estão.",
          text: [
            "Um plano só ajuda se as pessoas o encontrarem. Muitas famílias procuram durante dias um testamento, uma apólice de seguro ou a escritura de uma casa. Você pode poupá-las a isso.",
            "Faça uma pasta ou um dossiê. Ponha lá dentro, ou escreva onde encontrar: o seu testamento e outros documentos legais, a sua procuração e a diretiva de cuidados de saúde, a lista do que tem e do que deve, as apólices de seguro, as escrituras e os títulos de propriedade, os seus cartões do Medicare ou outros cartões de saúde (cópias), e uma lista de contactos: o seu advogado, o médico, o banco e as pessoas que nomeou.",
            "Pergunte ao seu advogado onde deve ficar o original assinado do testamento, porque as regras e as escolhas mudam. Dê uma cópia da sua diretiva de cuidados de saúde ao seu procurador para a saúde e ao seu médico, para que esteja lá numa emergência. Guarde o dossiê num lugar seguro em casa que o seu testamenteiro conheça.",
            "Escreva uma nota de uma página \"onde estão os meus documentos\" e dê-a às pessoas que nomeou. Reveja tudo de poucos em poucos anos e depois de grandes acontecimentos da vida. Quando mudar alguma coisa, diga à sua família e tire as versões antigas para ninguém usar a errada."
          ],
          steps: ["Faça um dossiê ou uma pasta para os documentos importantes.", "Ponha lá cada documento, ou uma nota a dizer onde está.", "Pergunte ao seu advogado onde guardar o original do testamento.", "Dê a sua diretiva de cuidados de saúde ao seu procurador para a saúde e ao seu médico.", "Escreva uma nota \"onde estão os meus documentos\" e partilhe-a com as pessoas que nomeou.", "Reveja depois de grandes acontecimentos da vida e tire as versões antigas."],
          words: [["Original", "o próprio documento assinado, não uma cópia."], ["Escritura", "o papel legal que mostra quem é o dono de uma casa ou de um terreno."], ["Título de propriedade", "o papel que mostra quem é o dono de um veículo."]],
          slides: [
            { title: "As pessoas têm de conseguir encontrá-lo", bullets: ["As famílias podem procurar durante dias", "Um só dossiê poupa-as a isso"] },
            { title: "O que vai no dossiê", bullets: ["Testamento, procuração, diretiva de saúde", "A lista do que tem e do que deve", "Apólices, escrituras, títulos, contactos"] },
            { title: "Onde guardar as coisas", bullets: ["Pergunte ao advogado sobre o original do testamento", "Diretiva de saúde: para o procurador e o médico", "Dossiê: um lugar seguro que o testamenteiro conhece"] },
            { title: "Diga e reveja", bullets: ["Partilhe uma nota \"onde estão os meus documentos\"", "Reveja depois de acontecimentos da vida", "Tire as versões antigas"] }
          ],
          sources: [{ name: "MedlinePlus: Diretivas antecipadas (em inglês)", url: "https://medlineplus.gov/advancedirectives.html" }],
          tryIt: "Tarefa final: faça a sua pasta do planeamento da herança com a lista do que tem e do que deve, a verificação dos beneficiários, as pessoas que nomearia com os substitutos, pelo menos cinco perguntas para um advogado ou apoio jurídico e uma nota de uma página \"onde estão os meus documentos\". Depois encontre um serviço de ajuda jurídica perto de você e escreva como o contactar.",
          youCanNow: "organizar os seus documentos importantes, guardá-los com segurança e dizer às pessoas certas onde estão.",
          quickCheck: [
            { objective: "O6", q: "Porque dar uma cópia da sua diretiva de cuidados de saúde ao seu médico?", options: ["Para que esteja lá numa emergência", "Para o médico a poder mudar", "Para pagar menos pelos cuidados", "Não é preciso"], answer: 0, why: "O seu procurador e o seu médico precisam de uma cópia para que esteja disponível quando importa." },
            { objective: "O6", q: "Atualizou o seu testamento. O que faz com a versão antiga?", options: ["Guarda as duas no dossiê", "Envia a antiga pelo correio a um familiar", "Esconde a nova", "Segue o conselho do seu advogado e garante que ninguém usa a antiga"], answer: 3, why: "Tire as versões antigas para ninguém usar a errada, e diga à sua família o que mudou." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Preparar e organizar",
        questions: [
          { objective: "O4", q: "Como devem aparecer os números de conta na lista do que tem?", options: ["O número completo e a palavra-passe", "Só os últimos quatro algarismos, sem palavras-passe", "Escritos na capa da pasta", "Publicados na internet para a sua família"], answer: 1, why: "Os últimos quatro algarismos identificam a conta sem a expor." },
          { objective: "O4", q: "Qual é uma dívida?", options: ["A sua conta poupança", "O seu carro", "Uma apólice de seguro de vida", "O saldo de um cartão de crédito"], answer: 3, why: "Uma dívida é dinheiro que deve." },
          { objective: "O5", q: "Onde pode procurar ajuda jurídica gratuita no seu estado?", options: ["LawHelp.org", "Um anúncio qualquer na internet", "Um link numa SMS", "Um comentário nas redes sociais"], answer: 0, why: "O LawHelp.org mostra o apoio jurídico sem fins lucrativos por estado." },
          { objective: "O6", q: "Quem deve receber uma cópia da sua diretiva de cuidados de saúde?", options: ["Ninguém", "O funcionário do seu banco", "O seu procurador para a saúde e o seu médico", "Um desconhecido na internet"], answer: 2, why: "Eles precisam dela para seguir a sua vontade numa emergência." },
          { objective: "O6", q: "Mudou o seu testamento. O que deve fazer com a versão antiga?", options: ["Guardar as duas no dossiê sem nenhuma nota", "Dá-la a um vizinho", "Escondê-la noutra divisão da casa", "Seguir o conselho do seu advogado e garantir que ninguém usa a antiga"], answer: 3, why: "As versões antigas podem confundir a família; o seu advogado pode dizer como tratar delas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Planeamento da Herança e Testamentos",
    questions: [
      { objective: "O1", q: "A sua herança (património) é:", options: ["Só a sua casa", "Só a sua conta no banco", "O seu quintal", "Tudo o que tem, menos o que deve"], answer: 3, why: "A herança inclui todos os seus bens, menos as dívidas." },
      { objective: "O1", q: "Um testamento diz principalmente:", options: ["A que médico vai", "Quem fica com os seus bens e quem cumpre a sua vontade", "O seu orçamento do mês", "O seu plano do Medicare"], answer: 1, why: "Um testamento diz quem herda e nomeia um testamenteiro." },
      { objective: "O1", q: "Uma avó está a criar os seus dois netos. O que pode um testamento muitas vezes fazer por eles?", options: ["Nada", "Pagar as propinas da escola automaticamente", "Nomear um tutor para eles", "Mudar as certidões de nascimento"], answer: 2, why: "Em muitos lugares, um testamento pode nomear um tutor para crianças com menos de 18 anos." },
      { objective: "O1", q: "Porque pode falhar um testamento escrito num formulário gratuito?", options: ["Pode não seguir as regras de assinatura e de testemunhas do lugar onde vive", "Os formulários gratuitos são sempre ilegais", "Os testamentos têm de ser a cores", "É curto demais"], answer: 0, why: "Cada estado e cada país tem as suas regras para um testamento válido." },
      { objective: "O2", q: "O seguro de vida normalmente vai para:", options: ["Quem o testamento nomear", "O testamenteiro", "A pessoa nomeada no formulário de beneficiários", "O governo"], answer: 2, why: "Os formulários de beneficiários normalmente decidem esse dinheiro." },
      { objective: "O2", q: "Quando deve rever os seus beneficiários?", options: ["Nunca", "Só uma vez, quando abre a conta", "Só quando a empresa telefona", "Depois de um casamento, divórcio, morte ou nascimento"], answer: 3, why: "É depois de acontecimentos da vida que os formulários ficam desatualizados." },
      { objective: "O2", q: "Um beneficiário contingente é:", options: ["O substituto, se o primeiro beneficiário já tiver morrido", "O seu advogado", "O seu médico", "O gerente do banco"], answer: 0, why: "O beneficiário contingente é o substituto." },
      { objective: "O3", q: "Uma procuração para assuntos financeiros nomeia alguém para:", options: ["Tomar decisões médicas", "Tratar do seu dinheiro e dos seus bens se você não conseguir", "Ler o seu testamento em voz alta", "Escolher a sua igreja"], answer: 1, why: "O procurador age por você nos assuntos de dinheiro." },
      { objective: "O3", q: "Sem procuração para assuntos financeiros, se você não conseguir gerir o dinheiro, a sua família pode ter de:", options: ["Não fazer nada", "Ir a tribunal para que seja nomeado um tutor ou curador", "Ligar para uma rádio", "Fechar todas as suas contas"], answer: 1, why: "O tribunal pode ser lento e caro; uma procuração evita isso." },
      { objective: "O3", q: "Um testamento vital diz:", options: ["Quem fica com a sua casa", "O saldo da sua conta no banco", "Que tratamentos quer ou não quer no fim da vida", "A sua lista de compras"], answer: 2, why: "Um testamento vital regista a sua vontade sobre os tratamentos." },
      { objective: "O3", q: "Quem é uma boa escolha para procurador para a saúde?", options: ["Alguém que vai seguir a vontade dele próprio", "Um desconhecido que lhe telefona", "Qualquer pessoa que peça", "Uma pessoa de confiança e contactável que vai seguir a sua vontade"], answer: 3, why: "O seu procurador tem de falar por você, não por ele próprio." },
      { objective: "O3", q: "Além do seu advogado, com quem deve falar sobre a sua vontade nos cuidados de saúde?", options: ["Com o seu médico e o seu procurador para a saúde", "Com quem telefona a vender coisas", "Com ninguém", "Com um grupo nas redes sociais"], answer: 0, why: "São eles que vão agir segundo a sua vontade." },
      { objective: "O4", q: "O que vai na lista do que tem?", options: ["A sua palavra-passe completa", "O carro do seu vizinho", "O seu PIN", "A sua casa, contas, veículos e objetos de valor"], answer: 3, why: "Ponha os bens com a empresa e os últimos quatro algarismos, sem palavras-passe." },
      { objective: "O4", q: "Deve colar a lista completa das suas contas num assistente de IA?", options: ["Sim, para poupar tempo", "Não; mantenha os dados privados fora das ferramentas de IA", "Sim, se a IA pedir", "Só num computador da biblioteca"], answer: 1, why: "Nunca escreva números privados nem dados de contas em ferramentas de IA." },
      { objective: "O5", q: "Que número de telefone liga para o Eldercare Locator?", options: ["1-800-677-1116", "911", "1-800-MEDICARE", "411"], answer: 0, why: "O Eldercare Locator liga pessoas mais velhas a serviços locais." },
      { objective: "O5", q: "Antes de contratar um advogado, uma pergunta inteligente é:", options: ["Qual é a sua cor preferida?", "Consegue adivinhar a minha vontade?", "Quanto vai custar e o que está incluído?", "Posso não assinar?"], answer: 2, why: "Saber o custo antes evita surpresas." },
      { objective: "O5", q: "Qual é um bom uso de um assistente de IA no planeamento da herança?", options: ["Escrever sozinho o seu testamento legal", "Ajudar a escrever as suas perguntas com palavras claras, sem nomes nem números", "Guardar as suas palavras-passe", "Decidir quem herda"], answer: 1, why: "A IA pode ajudar com as palavras, mas as respostas legais vêm de um advogado." },
      { objective: "O6", q: "Onde deve ficar o original assinado do testamento?", options: ["Em qualquer lado, não importa", "No carro", "No lixo, depois de tirar uma cópia", "Onde o seu advogado aconselhar, e o seu testamenteiro deve saber"], answer: 3, why: "As regras e as escolhas mudam; pergunte ao seu advogado." },
      { objective: "O6", q: "Uma nota \"onde estão os meus documentos\" deve ir para:", options: ["Toda a gente na internet", "Ninguém", "As pessoas que nomeou no seu plano", "Quem telefona a vender coisas"], answer: 2, why: "As pessoas que vão agir por você precisam de encontrar os seus documentos." },
      { objective: "O1", q: "As leis sobre o planeamento da herança:", options: ["São diferentes em cada estado e em cada país", "São iguais em todo o mundo", "Nunca mudam", "Só se aplicam a pessoas ricas"], answer: 0, why: "As regras mudam de lugar para lugar, por isso procure um advogado ou apoio jurídico onde vive." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      7,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "O que tenho e o que devo",
        objective: "O4",
        notYet: "Faltam coisas importantes na lista, ou mostra números de conta completos ou palavras-passe.",
        meets: "Uma lista de bens e dívidas com a empresa e o tipo de conta, usando só os últimos quatro algarismos.",
        exceeds: "Também tem as contas na internet e os animais de estimação, e está guardada num lugar seguro."
      },
      {
        name: "Verificação dos beneficiários",
        objective: "O2",
        notYet: "Algumas contas ou apólices não foram verificadas.",
        meets: "Todas as contas ou apólices com beneficiário estão na lista, com a pessoa nomeada e o substituto.",
        exceeds: "Os formulários desatualizados estão marcados e o formulário de atualização já foi pedido."
      },
      {
        name: "Pessoas nomeadas",
        objective: "O3",
        notYet: "Falta um ou mais papéis, ou não há substitutos.",
        meets: "Um testamenteiro, um procurador para o dinheiro e um procurador para a saúde, cada um com um substituto.",
        exceeds: "Falou com as pessoas escolhidas sobre o papel delas e sobre a sua vontade."
      },
      {
        name: "Perguntas para um advogado",
        objective: "O5",
        notYet: "Menos de cinco perguntas, ou nenhuma fonte de ajuda jurídica.",
        meets: "Pelo menos cinco perguntas claras, incluindo o custo, e um lugar perto de você que dá ajuda jurídica.",
        exceeds: "Já contactou a ajuda jurídica ou marcou uma consulta."
      },
      {
        name: "Onde estão os meus documentos",
        objective: "O6",
        notYet: "Não há nota, ou a nota não diz onde estão documentos importantes.",
        meets: "Uma nota de uma página que diz onde está cada documento importante.",
        exceeds: "A nota foi entregue às pessoas nomeadas no plano."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que atualizam pelo menos um formulário de beneficiários em 60 dias (inquérito de seguimento)",
      "Alunos que falam com um advogado ou apoio jurídico e assinam um testamento, uma procuração ou uma diretiva de cuidados de saúde",
      "Alunos que partilham com a família uma nota \"onde estão os meus documentos\""
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Uma pasta ou dossiê, papel e caneta",
      "As apólices de seguro, os extratos das contas e qualquer testamento ou diretiva que o aluno já tenha (mantidos privados)",
      "Um telefone ou computador para encontrar ajuda jurídica no LawHelp.org ou ligar para o Eldercare Locator",
      "Cerca de 60 minutos no total, em sessões curtas e calmas, mais tempo em casa para juntar os documentos"
    ],
    facilitatorNotes: [
      "Não dê conselhos jurídicos nem ajude a escrever um testamento; o curso prepara os alunos para um advogado ou apoio jurídico.",
      "Os alunos mantêm os seus documentos privados; nunca recolha números de conta nem documentos.",
      "Alguns alunos podem estar de luto ou pouco à vontade para falar da morte; mantenha um tom suave e prático.",
      "Encontre o apoio jurídico local ou os serviços jurídicos para idosos antes da sessão, para os alunos saírem com um contacto real.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
