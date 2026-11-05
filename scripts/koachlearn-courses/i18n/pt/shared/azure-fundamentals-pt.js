"use strict";

// Koach Learn course (Portuguese translation of shared/azure-fundamentals.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Exam facts as in the English (checked 27 October 2026 on learn.microsoft.com, skills measured as of July 20, 2026).

const CERT = { name: "Microsoft Learn: Microsoft Certified: Azure Fundamentals", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" };
const STUDY = { name: "Microsoft Learn: Study guide for Exam AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" };
const FREE = { name: "Microsoft Azure: Free services", url: "https://azure.microsoft.com/en-us/pricing/free-services" };
const CALC = { name: "Microsoft Azure: Pricing calculator", url: "https://azure.microsoft.com/en-us/pricing/calculator/" };

module.exports = {
  id: "azure-fundamentals-pt",
  lang: "pt",
  translationOf: "azure-fundamentals",
  category: "Undeserved Community",
  name: "Fundamentos do Microsoft Azure",
  skills: "Explicar os conceitos de nuvem, Distinguir IaaS, PaaS e SaaS, Organizar os recursos do Azure, Ligar necessidades aos serviços principais do Azure, Estimar e controlar os custos da nuvem, Planear o exame AZ-900",
  outcome: "planear uma pequena configuração do Azure para uma necessidade real da comunidade: escolher os serviços certos, explicar como estão organizados e protegidos, estimar o custo mensal com a calculadora de preços do Azure e traçar o seu próprio caminho até à certificação Azure Fundamentals (AZ-900).",
  about: [
    "O Microsoft Azure é uma das maiores plataformas de nuvem do mundo, e as competências de nuvem abrem portas para trabalhos de suporte informático, apoio ao utilizador (help desk) e nuvem. Este curso é um começo gratuito e em linguagem simples para quem é novo na tecnologia, para quem quer mudar de profissão e para membros da comunidade que querem uma primeira certificação reconhecida.",
    "Você vai aprender as ideias que o exame Microsoft Azure Fundamentals (AZ-900) avalia: os conceitos de nuvem, os blocos de construção e os serviços principais do Azure, e como o Azure é gerido, protegido e pago. Não precisa de uma conta do Azure: as partes práticas usam ferramentas públicas e gratuitas da Microsoft, como a calculadora de preços e a avaliação de prática gratuita.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Este curso ajuda você a preparar-se; não é o exame oficial, e as páginas da própria Microsoft têm a última palavra sobre os detalhes do exame."
  ],
  finalTask: "Escreva um plano do Azure de uma página para o site e o armazenamento de ficheiros de uma pequena organização comunitária: indique o tipo de serviço (IaaS, PaaS ou SaaS) e os serviços do Azure que usaria, a região e o grupo de recursos, como as pessoas vão iniciar sessão com segurança, como vai controlar os custos (orçamento, etiquetas) e o custo mensal estimado pela calculadora de preços do Azure. Depois faça a avaliação de prática gratuita do AZ-900 da Microsoft e escreva as suas duas áreas mais fracas para estudar a seguir.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos de comunidades mal servidas que são novos na tecnologia ou estão a mudar de profissão, e membros da comunidade que querem uma primeira certificação reconhecida. Muitos procuram trabalhos de suporte informático, de apoio ao utilizador (help desk) ou de nuvem de nível inicial.",
    startingPoint: "Sabem usar um computador e um navegador de internet, o e-mail e as aplicações do dia a dia. Têm pouca ou nenhuma experiência com servidores, redes ou plataformas de nuvem, e não se espera que tenham uma conta do Azure.",
    gap: "Os trabalhos de informática e de nuvem de nível inicial pedem muitas vezes as bases da nuvem e uma primeira certificação como o AZ-900. Os alunos precisam das ideias e das palavras principais, e do hábito de planear, proteger e calcular o preço de uma pequena configuração, para se candidatarem com confiança e evitarem contas da nuvem inesperadas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; os termos técnicos são explicados da primeira vez",
      "Aparelhos: um computador ou tablet com navegador de internet; num telefone a calculadora de preços é difícil de usar",
      "Custo: não é preciso conta do Azure nem cartão de pagamento; as partes práticas usam ferramentas públicas e gratuitas da Microsoft",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total, mais a avaliação de prática",
      "Os detalhes e os preços do exame mudam; os alunos verificam as páginas oficiais da Microsoft"
    ],
    prerequisites: "Nenhum. O curso \"Noções Básicas de Computação na Nuvem\" é um começo mais suave para quem nunca ouviu a palavra nuvem."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um exemplo do dia a dia, como o site muito visitado de um banco alimentar", action: "explicar o que é a computação em nuvem e indicar os seus principais benefícios e modelos de nuvem", standard: "com as suas palavras, com pelo menos dois benefícios certos" },
    { id: "O2", condition: "Com um serviço de nuvem", action: "classificá-lo como IaaS, PaaS ou SaaS e dizer o que protege o fornecedor e o que protege o cliente", standard: "acertando pelo menos 4 de 5" },
    { id: "O3", condition: "Para um pequeno projeto no Azure", action: "escolher uma região e um grupo de recursos e descrever como se encaixam numa subscrição", standard: "com uma razão para a região escolhida" },
    { id: "O4", condition: "Com uma necessidade comum, como um site, um servidor completo ou cópias de segurança", action: "ligar a necessidade ao serviço principal certo do Azure", standard: "acertando pelo menos 4 de 5" },
    { id: "O5", condition: "Para as pessoas e os recursos do seu plano", action: "indicar como vai proteger o início de sessão e o acesso e aplicar regras com MFA, RBAC, etiquetas, Azure Policy ou bloqueios de recursos", standard: "indicando pelo menos três destas ferramentas e o que cada uma faz" },
    { id: "O6", condition: "Usando a calculadora de preços gratuita do Azure e o Microsoft Learn", action: "estimar um custo mensal para o seu plano e escrever um plano de estudo para o AZ-900", standard: "com um total estimado e as suas duas áreas mais fracas do exame" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conceitos de nuvem e os blocos do Azure",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a nuvem e porque as organizações a usam",
          minutes: 5,
          goal: "Explicar a computação em nuvem e os seus principais benefícios com um exemplo do dia a dia.",
          text: [
            "Computação em nuvem quer dizer alugar poder de computação, armazenamento e programas pela internet, em vez de comprar e manter os seus próprios servidores. O Microsoft Azure, a Amazon Web Services e o Google Cloud são os maiores fornecedores de nuvem.",
            "É como a eletricidade: você não constrói uma central elétrica, liga-se à rede e paga o que usa. Isto chama-se modelo baseado no consumo, ou pagar conforme o uso. Em vez de uma grande compra no início (despesa de capital, CapEx), você paga um custo contínuo (despesa operacional, OpEx).",
            "Principais benefícios: escalabilidade (acrescentar mais poder quando a página de inscrição de um banco alimentar fica muito cheia e depois reduzir), alta disponibilidade (continua a funcionar se uma máquina falhar), fiabilidade, ferramentas de segurança e gestão mais fácil. Há três modelos de nuvem: pública (fornecedor partilhado, como o Azure), privada (usada só por uma organização) e híbrida (uma mistura das duas)."
          ],
          words: [["Computação em nuvem", "alugar poder de computação, armazenamento e programas pela internet."], ["Modelo baseado no consumo", "você paga só o que usa."], ["CapEx / OpEx", "a despesa de capital é uma grande compra no início; a despesa operacional é um custo contínuo."], ["Escalabilidade", "acrescentar ou retirar recursos quando a procura muda."], ["Alta disponibilidade", "um serviço continua a funcionar mesmo quando algumas partes falham."], ["Nuvem híbrida", "uma mistura da nuvem pública com os sistemas privados da própria organização."]],
          slides: [
            { title: "A computação em nuvem é", bullets: ["Alugar computação pela internet", "Como a eletricidade: ligar e pagar o que usa", "Azure, AWS e Google Cloud são os três maiores"] },
            { title: "Como se paga", bullets: ["Baseado no consumo: paga o que usa", "CapEx: grande compra no início", "OpEx: custo contínuo"] },
            { title: "Principais benefícios", bullets: ["Escalabilidade e alta disponibilidade", "Fiabilidade e ferramentas de segurança", "Gestão mais fácil"] },
            { title: "Três modelos de nuvem", bullets: ["Pública: fornecedor partilhado", "Privada: só uma organização", "Híbrida: uma mistura das duas"] }
          ],
          sources: [STUDY],
          tryIt: "Escolha uma organização local que conhece (uma igreja, um centro de saúde, uma escola, um banco alimentar ou uma pequena loja). Escreva duas formas de ela usar a nuvem e que benefício (escalabilidade, disponibilidade, pagar conforme o uso) cada uma lhe dá.",
          youCanNow: "explicar a computação em nuvem, o modelo de pagar conforme o uso, os seus benefícios e os três modelos de nuvem.",
          quickCheck: [
            { objective: "O1", q: "O que é OpEx na computação em nuvem?", options: ["Uma grande compra de servidores no início", "Um custo contínuo que paga enquanto usa o serviço", "Um tipo de máquina virtual", "Um período de experiência gratuito que nunca acaba"], answer: 1, why: "Pagar conforme o uso transforma uma grande compra no início (CapEx) numa despesa operacional contínua (OpEx)." },
            { objective: "O1", q: "Um centro de saúde tem de guardar alguns dados nos seus próprios servidores, mas quer o Azure para o seu site. Que modelo de nuvem serve?", options: ["Só pública", "Só privada", "Nenhuma nuvem", "Híbrida"], answer: 3, why: "A nuvem híbrida mistura os servidores da própria organização com uma nuvem pública como o Azure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "IaaS, PaaS, SaaS e quem é responsável por quê",
          minutes: 5,
          goal: "Classificar um serviço como IaaS, PaaS ou SaaS e dizer quem trata de quê.",
          text: [
            "Os serviços de nuvem são de três tipos. IaaS (infraestrutura como serviço): você aluga máquinas virtuais e redes e gere quase tudo nelas, como alugar um apartamento vazio. PaaS (plataforma como serviço): o fornecedor mantém os servidores e o software do sistema; você traz a sua aplicação ou os seus dados, como um apartamento mobilado. SaaS (software como serviço): você só usa um programa pronto, como o e-mail Outlook ou o Microsoft Teams, como um quarto de hotel.",
            "Sem servidor (serverless) é um tipo de PaaS em que o seu código só corre quando alguma coisa o ativa e você paga por uso, sem nenhum servidor para gerir (o Azure Functions é um exemplo).",
            "O modelo de responsabilidade partilhada diz quem protege o quê. O fornecedor protege sempre os centros de dados físicos. Você é sempre responsável pelos seus dados, pelas suas contas e por quem tem acesso. No meio, quanto mais passa de IaaS para SaaS, mais coisas o fornecedor trata."
          ],
          steps: ["Pergunte: somos nós que gerimos o sistema operativo? Se sim, é IaaS.", "Só trazemos a nossa aplicação ou os nossos dados? Então é PaaS.", "Só iniciamos sessão e usamos o programa? Então é SaaS.", "Lembre-se: os seus dados e as suas contas são sempre trabalho seu."],
          words: [["IaaS", "infraestrutura como serviço: você aluga máquinas virtuais e gere-as."], ["PaaS", "plataforma como serviço: o fornecedor mantém a plataforma; você traz a sua aplicação."], ["SaaS", "software como serviço: um programa pronto a usar pela internet."], ["Sem servidor (serverless)", "código que só corre quando é ativado, sem servidor para você gerir."], ["Modelo de responsabilidade partilhada", "como as tarefas de segurança são divididas entre o fornecedor de nuvem e você."]],
          slides: [
            { title: "Três tipos de serviço", bullets: ["IaaS: apartamento vazio, você gere quase tudo", "PaaS: mobilado, você traz a sua aplicação", "SaaS: quarto de hotel, só usar"] },
            { title: "Sem servidor (serverless)", bullets: ["O código só corre quando é ativado", "Paga por uso, sem servidor para gerir", "Exemplo: Azure Functions"] },
            { title: "Responsabilidade partilhada", bullets: ["Fornecedor: sempre o centro de dados físico", "Você: sempre os seus dados, contas e acessos", "De IaaS para SaaS: o fornecedor faz mais"] }
          ],
          sources: [STUDY],
          tryIt: "Classifique como IaaS, PaaS ou SaaS: o e-mail Microsoft Outlook, uma máquina virtual do Azure, o Azure App Service para um site, o Microsoft Teams e o Azure Functions. Depois escreva uma coisa pela qual você é sempre responsável, seja qual for o tipo.",
          youCanNow: "distinguir IaaS, PaaS e SaaS e explicar o modelo de responsabilidade partilhada.",
          quickCheck: [
            { objective: "O2", q: "Que tipo é como alugar um apartamento mobilado: o fornecedor mantém os servidores e você traz a sua aplicação?", options: ["PaaS", "IaaS", "SaaS", "Uma nuvem privada"], answer: 0, why: "Em PaaS o fornecedor mantém os servidores e o software do sistema; você traz a sua aplicação ou os seus dados." },
            { objective: "O2", q: "A sua organização sem fins lucrativos passa de IaaS para SaaS. O que acontece ao seu trabalho de segurança?", options: ["Agora tem de vigiar o centro de dados", "Não muda nada", "O fornecedor trata de mais coisas, mas os seus dados e contas continuam a ser trabalho seu", "O fornecedor passa a ser responsável pelas suas palavras-passe"], answer: 2, why: "Ir para SaaS passa mais trabalho para o fornecedor, mas os seus dados e acessos são sempre seus." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Como o Azure se organiza: regiões, zonas e grupos de recursos",
          minutes: 6,
          goal: "Descrever onde o Azure funciona e como os recursos são organizados e encontrados no portal do Azure.",
          text: [
            "O Azure funciona em centros de dados espalhados pelo mundo, agrupados em regiões, como East US ou South Africa North. Você escolhe uma região para cada coisa que cria: mais perto dos seus utilizadores costuma ser mais rápido, e alguns dados têm regras sobre o país onde devem ficar. Muitas regiões têm zonas de disponibilidade: centros de dados separados, com a sua própria energia e refrigeração, para que, se um falhar, outro continue a funcionar. As regiões também estão emparelhadas com outra região da mesma zona geográfica para recuperação em caso de desastre.",
            "Tudo o que cria (uma máquina virtual, uma base de dados, uma conta de armazenamento) é um recurso. Os recursos vão para grupos de recursos, pastas para coisas que andam juntas, como tudo o que é de um site. Os grupos de recursos ficam numa subscrição, que é a conta de faturação. As grandes organizações agrupam subscrições com grupos de gestão.",
            "Você gere tudo isto no portal do Azure, um site em portal.azure.com. Também pode usar o Azure Cloud Shell, a Azure CLI ou o Azure PowerShell para gerir escrevendo comandos."
          ],
          steps: ["Escolha uma região perto dos seus utilizadores que cumpra as regras sobre dados.", "Use zonas de disponibilidade quando o serviço não pode parar.", "Ponha os recursos relacionados num só grupo de recursos.", "Saiba que subscrição os paga.", "Gira tudo no portal do Azure ou com ferramentas de linha de comandos."],
          words: [["Região", "uma zona geográfica com um ou mais centros de dados do Azure."], ["Zona de disponibilidade", "um centro de dados separado numa região, com a sua própria energia, refrigeração e rede."], ["Recurso", "qualquer coisa que cria no Azure, como uma máquina virtual ou uma base de dados."], ["Grupo de recursos", "uma pasta que guarda recursos relacionados."], ["Subscrição", "a conta para onde vão as faturas do Azure."], ["Grupo de gestão", "uma forma de juntar várias subscrições com regras comuns."], ["Portal do Azure", "o site para gerir o Azure."]],
          slides: [
            { title: "Onde o Azure funciona", bullets: ["Centros de dados agrupados em regiões", "Escolha a região pelos utilizadores e pelas regras", "Zonas de disponibilidade: centros de dados separados"] },
            { title: "Como se organiza", bullets: ["Recurso: uma coisa que você cria", "Grupo de recursos: recursos relacionados", "Subscrição: faturação", "Grupo de gestão: muitas subscrições"] },
            { title: "Como se gere", bullets: ["Portal do Azure em portal.azure.com", "Cloud Shell, Azure CLI, Azure PowerShell"] }
          ],
          sources: [STUDY],
          tryIt: "Planeie a estrutura para um centro comunitário que quer um site e um lugar para guardar fichas de inscrição: dê um nome a um grupo de recursos, escreva dois recursos que ficam nele e escolha uma região perto de si. Escreva uma razão para a região escolhida.",
          youCanNow: "explicar as regiões, as zonas de disponibilidade, os recursos, os grupos de recursos, as subscrições e os grupos de gestão.",
          quickCheck: [
            { objective: "O3", q: "O que é um grupo de recursos no Azure?", options: ["Uma equipa de funcionários da Microsoft", "Um tipo de máquina virtual", "Uma conta de faturação", "Uma pasta para recursos que andam juntos, como um site"], answer: 3, why: "Os grupos de recursos guardam recursos relacionados; a subscrição é a conta de faturação." },
            { objective: "O3", q: "Os seus utilizadores estão na África do Sul e os dados deles têm de ficar no país. Como escolhe a região?", options: ["Escolher a região mais barata em qualquer lugar", "Escolher uma região perto dos utilizadores que cumpra as regras sobre dados", "Escolher uma região ao acaso", "Usar todas as regiões ao mesmo tempo"], answer: 1, why: "Escolha uma região perto dos utilizadores que também cumpra as regras sobre onde os dados devem ficar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conceitos de nuvem e os blocos do Azure",
        questions: [
          { objective: "O1", q: "O que é o modelo baseado no consumo?", options: ["Compra todos os servidores no início", "Tudo é sempre gratuito", "Paga só o que usa", "Paga um preço fixo para sempre"], answer: 2, why: "Os serviços de nuvem costumam ser pagos conforme o uso." },
          { objective: "O1", q: "O site de um banco alimentar fica muito cheio uma vez por mês. Que benefício da nuvem ajuda mais?", options: ["Escalabilidade", "Nuvem privada", "CapEx", "SaaS"], answer: 0, why: "A escalabilidade acrescenta recursos quando a procura sobe e retira-os depois." },
          { objective: "O2", q: "O Microsoft Teams usado num navegador de internet é um exemplo de:", options: ["IaaS", "PaaS", "Uma região", "SaaS"], answer: 3, why: "É um programa pronto a usar entregue pela internet." },
          { objective: "O2", q: "No modelo de responsabilidade partilhada, o que é SEMPRE trabalho seu?", options: ["Construir o centro de dados", "Os seus dados e quem tem acesso a eles", "Refrigerar os servidores", "Trocar discos rígidos avariados"], answer: 1, why: "Os clientes são sempre donos dos seus dados, contas e acessos." },
          { objective: "O3", q: "O que guarda recursos do Azure relacionados, como tudo o que é de um site?", options: ["Uma região", "Um grupo de recursos", "Uma zona de disponibilidade", "Uma palavra-passe"], answer: 1, why: "Os grupos de recursos organizam os recursos que andam juntos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Serviços principais, custos e a sua certificação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Serviços principais do Azure: computação, rede, armazenamento e dados",
          minutes: 6,
          goal: "Ligar uma necessidade comum ao serviço principal certo do Azure.",
          text: [
            "A computação faz correr os seus programas. As Azure Virtual Machines dão-lhe um computador completo na nuvem (IaaS). O Azure App Service aloja sites e aplicações web sem você gerir servidores (PaaS). Os contentores empacotam uma aplicação com tudo o que ela precisa, para funcionar igual em qualquer lugar. O Azure Functions corre pequenos pedaços de código quando é ativado (sem servidor). O Azure Virtual Desktop dá às pessoas um ambiente de trabalho Windows a que podem chegar a partir de qualquer aparelho.",
            "A rede liga as coisas. Uma rede virtual do Azure é a sua rede privada na nuvem. Um VPN Gateway liga-a ao seu escritório pela internet; o ExpressRoute é uma ligação privada que não passa pela internet pública. O Azure DNS transforma nomes em endereços.",
            "O armazenamento guarda ficheiros e dados. Uma conta de armazenamento tem Blob storage (fotos, vídeos, cópias de segurança), Azure Files (pastas partilhadas), filas e tabelas. Os níveis de armazenamento (frequente, esporádico, frio, arquivo) custam menos quanto menos vezes abre os ficheiros. As opções de redundância guardam cópias extra para que uma falha não faça perder dados. Para bases de dados, o Azure tem opções geridas como o Azure SQL Database e o Azure Cosmos DB."
          ],
          steps: ["Precisa de um site? Veja o Azure App Service.", "Precisa de controlo total de um servidor? Azure Virtual Machines.", "Precisa de código que corra quando algo acontece? Azure Functions.", "Precisa de guardar ficheiros ou cópias de segurança? Uma conta de armazenamento com Blob storage.", "Ficheiros que quase nunca abre? Use um nível mais frio e mais barato."],
          words: [["Máquina virtual (VM)", "um computador que funciona como programa na nuvem."], ["Azure App Service", "um serviço PaaS para alojar sites e aplicações web."], ["Contentor", "um pacote com uma aplicação e tudo o que ela precisa para funcionar."], ["Rede virtual", "uma rede privada para os seus recursos do Azure."], ["Blob storage", "armazenamento para ficheiros grandes, como fotos, vídeos e cópias de segurança."], ["Nível de armazenamento", "um nível de preço conforme as vezes que abre os dados: frequente, esporádico, frio ou arquivo."], ["Redundância", "guardar cópias extra para que os dados sobrevivam a uma falha."]],
          slides: [
            { title: "Computação", bullets: ["Virtual Machines: computador completo (IaaS)", "App Service: sites (PaaS)", "Functions: código quando é ativado", "Contentores e Virtual Desktop"] },
            { title: "Rede", bullets: ["Rede virtual: a sua rede privada na nuvem", "VPN Gateway: ligação ao seu escritório", "ExpressRoute: ligação privada", "Azure DNS: nomes em endereços"] },
            { title: "Armazenamento e bases de dados", bullets: ["Conta de armazenamento: Blob, Files, filas, tabelas", "Níveis: frequente, esporádico, frio, arquivo", "A redundância guarda cópias extra", "Azure SQL Database, Azure Cosmos DB"] }
          ],
          sources: [STUDY],
          tryIt: "Para o centro comunitário da Lição 3, escolha um serviço para cada necessidade: um site público, um lugar para guardar as fichas de inscrição digitalizadas e fotos antigas que quase nunca são abertas. Escreva que serviço e, para as fotos, que nível de armazenamento.",
          youCanNow: "ligar necessidades comuns aos serviços de computação, rede, armazenamento e bases de dados do Azure.",
          quickCheck: [
            { objective: "O4", q: "Que serviço do Azure corre pequenos pedaços de código só quando alguma coisa o ativa?", options: ["Azure Virtual Machines", "Azure DNS", "Azure Functions", "ExpressRoute"], answer: 2, why: "O Azure Functions é sem servidor: o código corre quando é ativado e você paga por uso." },
            { objective: "O4", q: "Um centro juvenil precisa de uma pasta partilhada que toda a equipa possa abrir. O que sugeriria?", options: ["Azure Files numa conta de armazenamento", "Azure Virtual Desktop", "Um VPN Gateway", "Azure SQL Database"], answer: 0, why: "O Azure Files numa conta de armazenamento oferece pastas partilhadas." }
          ]
        },
        {
          objectives: ["O5","O6"],
          title: "Segurança, governação e controlo dos custos",
          minutes: 6,
          goal: "Indicar as ferramentas do Azure que protegem as contas, aplicam regras e evitam contas inesperadas.",
          text: [
            "Identidade: o Microsoft Entra ID é o serviço de início de sessão e de diretório do Azure. Ative a autenticação multifator (MFA), que pede uma segunda prova, como um código numa aplicação, para que uma palavra-passe roubada não chegue. O início de sessão único (SSO) deixa as pessoas usarem uma só conta para muitas aplicações. O controlo de acesso baseado em funções (RBAC) dá a cada pessoa só o acesso de que o seu trabalho precisa. Zero Trust quer dizer nunca supor que um pedido é seguro; verificar sempre.",
            "Governação: o Azure Policy define regras, como \"criar recursos só nestas regiões\". Os bloqueios de recursos impedem que recursos importantes sejam apagados ou alterados por engano. As etiquetas (tags) são rótulos como department=youth ou project=website que ajudam a organizar e a acompanhar os custos. O Microsoft Defender for Cloud verifica a sua configuração à procura de problemas de segurança.",
            "Custos: o que paga depende do serviço, do tamanho, da região, de quanto tempo funciona e de quantos dados saem do Azure. A calculadora de preços gratuita do Azure estima um custo mensal antes de criar qualquer coisa. O Cost Management deixa definir orçamentos e alertas. Uma regra simples: apague o que não usa."
          ],
          steps: ["Ative a MFA em todas as contas.", "Dê às pessoas só o acesso de que o trabalho delas precisa (RBAC).", "Ponha etiquetas em todos os recursos.", "Use o Azure Policy e bloqueios de recursos para as regras importantes.", "Estime primeiro os custos na calculadora de preços e depois defina um alerta de orçamento."],
          words: [["Microsoft Entra ID", "o serviço de início de sessão e de diretório na nuvem da Microsoft."], ["Autenticação multifator (MFA)", "iniciar sessão com uma palavra-passe e mais uma segunda prova."], ["RBAC", "controlo de acesso baseado em funções: acesso conforme o trabalho da pessoa."], ["Zero Trust", "uma forma de fazer segurança: nunca supor confiança, verificar sempre."], ["Azure Policy", "uma ferramenta que aplica regras sobre o que pode ser criado."], ["Bloqueio de recurso", "impede que um recurso seja apagado ou alterado por engano."], ["Etiqueta (tag)", "um rótulo num recurso usado para o organizar e acompanhar os custos."]],
          slides: [
            { title: "Identidade e acesso", bullets: ["Microsoft Entra ID para iniciar sessão", "MFA: uma segunda prova", "RBAC: só o acesso de que o trabalho precisa", "Zero Trust: verificar sempre"] },
            { title: "Governação", bullets: ["Azure Policy: aplicar regras", "Bloqueios de recursos: evitar acidentes", "Etiquetas: organizar e acompanhar custos", "Defender for Cloud: encontrar pontos fracos"] },
            { title: "Controlar os custos", bullets: ["O custo depende do serviço, tamanho, região e tempo", "Calculadora de preços: estimar primeiro", "Orçamentos e alertas no Cost Management", "Apague o que não usa"] }
          ],
          sources: [STUDY, CALC],
          tryIt: "Escreva três regras de segurança e de custos para a configuração do Azure do centro comunitário, uma para o início de sessão, uma para o acesso e uma para os gastos. Exemplo: \"Todas as contas de voluntários usam MFA.\" Depois escreva duas etiquetas que poria em todos os recursos.",
          youCanNow: "descrever como o Azure protege as contas, aplica regras e mantém os custos sob controlo.",
          quickCheck: [
            { objective: "O5", q: "O que quer dizer Zero Trust?", options: ["Confiar em todos os pedidos de dentro do escritório", "Verificar sempre; nunca supor que um pedido é seguro", "Desligar as palavras-passe", "Confiar só no fornecedor de nuvem"], answer: 1, why: "Zero Trust quer dizer que cada pedido é verificado em vez de se supor que é seguro." },
            { objective: "O5", q: "A palavra-passe de um voluntário foi roubada, mas o ladrão não conseguiu iniciar sessão. Que definição o travou, muito provavelmente?", options: ["Uma etiqueta no recurso", "Um nível de armazenamento mais frio", "Um grupo de recursos", "Autenticação multifator (MFA)"], answer: 3, why: "A MFA pede uma segunda prova, por isso uma palavra-passe roubada sozinha não chega." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Estimar custos e planear o seu caminho para o AZ-900",
          minutes: 6,
          goal: "Estimar um custo mensal na calculadora de preços e fazer um plano de estudo para o AZ-900.",
          text: [
            "A calculadora de preços é gratuita no site da Microsoft. Você acrescenta os serviços que pensa usar, escolhe uma região e opções como o tamanho e as horas, e ela mostra um custo mensal estimado. Os preços mudam e dependem da região, por isso use sempre a calculadora em vez de um número que leu em algum lugar.",
            "Se quiser praticar no próprio Azure, a Microsoft oferece aos novos clientes uma conta gratuita com alguns serviços grátis durante 12 meses e mais de 65 serviços grátis todos os meses, até certos limites. Leia as condições atuais na página de serviços gratuitos da Microsoft antes de se registar, defina um alerta de orçamento e apague os recursos de prática quando terminar. Os estudantes podem ter direito a uma oferta separada, o Azure for Students, com um e-mail académico.",
            "O exame da certificação Microsoft Certified: Azure Fundamentals é o AZ-900. O guia de estudo da Microsoft indica três áreas: conceitos de nuvem (25-30%), arquitetura e serviços do Azure (35-40%) e gestão e governação do Azure (30-35%). Precisa de uma pontuação de 700 ou mais para passar. A página do exame indica 45 minutos para a avaliação, e o preço depende do país onde faz o exame, por isso verifique-o lá. O Microsoft Learn tem formação gratuita e uma avaliação de prática gratuita."
          ],
          steps: ["Abra a calculadora de preços do Azure.", "Acrescente os serviços do seu plano e escolha a região e os tamanhos.", "Anote o total mensal estimado.", "Abra a página do AZ-900 no Microsoft Learn e faça a avaliação de prática gratuita.", "Escreva as suas duas áreas mais fracas e os módulos gratuitos do Microsoft Learn para elas."],
          words: [["Calculadora de preços", "a ferramenta gratuita da Microsoft para estimar os custos do Azure antes de criar."], ["AZ-900", "o código do exame Microsoft Certified: Azure Fundamentals."], ["Avaliação de prática", "perguntas de prática gratuitas no Microsoft Learn que mostram se você está pronto."], ["Microsoft Learn", "o site gratuito de formação e certificação da Microsoft."]],
          slides: [
            { title: "Estime antes de criar", bullets: ["Calculadora de preços gratuita do Azure", "Acrescente serviços, região e tamanhos", "Os preços mudam: verifique sempre outra vez"] },
            { title: "Praticar com segurança", bullets: ["Leia primeiro as condições da conta gratuita", "Defina um alerta de orçamento", "Apague os recursos de prática no fim"] },
            { title: "O exame AZ-900", bullets: ["Conceitos de nuvem: 25-30%", "Arquitetura e serviços: 35-40%", "Gestão e governação: 30-35%", "Nota para passar: 700; o preço varia por país"] },
            { title: "O seu próximo passo", bullets: ["Avaliação de prática gratuita no Microsoft Learn", "Estude as suas duas áreas mais fracas"] }
          ],
          sources: [CALC, FREE, CERT, STUDY],
          tryIt: "Tarefa final: escreva o plano do Azure de uma página para o site e o armazenamento de ficheiros de uma organização comunitária (serviços e tipo, região, grupo de recursos, início de sessão seguro, etiquetas e orçamento), acrescente a estimativa mensal da calculadora de preços, depois faça a avaliação de prática gratuita do AZ-900 e escreva as suas duas áreas mais fracas.",
          youCanNow: "planear e calcular o preço de uma pequena configuração do Azure e seguir um caminho claro até à certificação AZ-900.",
          quickCheck: [
            { objective: "O6", q: "Porquê usar a calculadora de preços do Azure em vez de um preço que leu na internet?", options: ["Os preços mudam e dependem da região, por isso a calculadora dá uma estimativa atual", "A calculadora torna o Azure gratuito", "Os preços na internet são sempre mais altos", "A calculadora regista você automaticamente"], answer: 0, why: "Os preços mudam e são diferentes conforme a região, por isso estime com a calculadora para as suas próprias escolhas." },
            { objective: "O6", q: "Fez a avaliação de prática gratuita do AZ-900. Qual é o melhor passo a seguir?", options: ["Marcar o exame hoje sem estudar", "Repeti-la até decorar as respostas", "Escrever as suas duas áreas mais fracas e encontrar os módulos gratuitos do Microsoft Learn para elas", "Parar, porque as notas de prática não contam"], answer: 2, why: "As suas áreas mais fracas mostram o que estudar a seguir, e o Microsoft Learn tem módulos gratuitos para cada uma." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Serviços principais, custos e a sua certificação",
        questions: [
          { objective: "O4", q: "Que serviço do Azure aloja um site sem você gerir servidores?", options: ["Azure Virtual Machines", "ExpressRoute", "Bloqueios de recursos", "Azure App Service"], answer: 3, why: "O App Service é alojamento web PaaS." },
          { objective: "O4", q: "Fotos antigas quase nunca são abertas. Que escolha de armazenamento poupa dinheiro?", options: ["Um nível mais frio, como esporádico, frio ou arquivo", "O nível frequente", "Uma máquina virtual maior", "Uma segunda subscrição"], answer: 0, why: "Os níveis mais frios custam menos para dados que raramente abre." },
          { objective: "O5", q: "Que ferramenta impede que um recurso importante seja apagado por engano?", options: ["Uma etiqueta", "A calculadora de preços", "Um bloqueio de recurso", "Uma região"], answer: 2, why: "Os bloqueios evitam que se apague ou altere por acidente." },
          { objective: "O5", q: "O que a MFA acrescenta ao início de sessão?", options: ["Um nome de utilizador mais comprido", "Uma subscrição gratuita", "Uma nova região", "Uma segunda prova, como um código numa aplicação"], answer: 3, why: "Com MFA, uma palavra-passe roubada sozinha não chega." },
          { objective: "O6", q: "Onde deve ver o preço atual do exame AZ-900?", options: ["No palpite de um amigo", "Num artigo antigo de um blogue", "Na página oficial do exame da Microsoft para o seu país", "Em qualquer chatbot de IA"], answer: 2, why: "O preço depende do país, e a página oficial está atualizada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Fundamentos do Microsoft Azure",
    questions: [
      { objective: "O1", q: "Computação em nuvem quer dizer:", options: ["Guardar ficheiros só numa pen USB", "Alugar poder de computação e serviços pela internet", "Previsão do tempo", "Comprar um computador portátil novo"], answer: 1, why: "Nuvem quer dizer usar os computadores de um fornecedor pela internet." },
      { objective: "O1", q: "Pagar uma quantia grande no início para comprar servidores é:", options: ["CapEx", "OpEx", "SaaS", "Sem servidor"], answer: 0, why: "A despesa de capital é uma compra feita no início." },
      { objective: "O1", q: "Um serviço continua a funcionar mesmo quando uma máquina falha. Isto é:", options: ["Uma etiqueta", "Um grupo de gestão", "Alta disponibilidade", "CapEx"], answer: 2, why: "A alta disponibilidade mantém os serviços a funcionar apesar das falhas." },
      { objective: "O1", q: "Uma organização usa os seus próprios servidores e o Azure ao mesmo tempo. Isso é:", options: ["Nuvem híbrida", "Só nuvem privada", "Só nuvem pública", "SaaS"], answer: 0, why: "A híbrida mistura a privada e a pública." },
      { objective: "O2", q: "Aluga uma máquina virtual e gere o sistema operativo dela. Isso é:", options: ["SaaS", "PaaS", "Uma região", "IaaS"], answer: 3, why: "Gerir o sistema operativo de máquinas alugadas é IaaS." },
      { objective: "O2", q: "Código que só corre quando é ativado, sem servidor para gerir, chama-se:", options: ["Um bloqueio de recurso", "Sem servidor (serverless)", "Armazenamento de arquivo", "Uma VPN"], answer: 1, why: "O sem servidor corre quando é preciso; o Azure Functions é um exemplo." },
      { objective: "O2", q: "Quem protege sempre o centro de dados físico?", options: ["O cliente", "O fornecedor de nuvem", "O banco do utilizador", "Ninguém"], answer: 1, why: "A segurança física é sempre trabalho do fornecedor." },
      { objective: "O3", q: "Uma região do Azure é:", options: ["Uma conta de faturação", "Um tipo de base de dados", "Uma regra de palavras-passe", "Uma zona geográfica com um ou mais centros de dados"], answer: 3, why: "As regiões são onde ficam os centros de dados do Azure." },
      { objective: "O3", q: "As zonas de disponibilidade são:", options: ["Centros de dados separados numa região, com a sua própria energia e refrigeração", "Níveis de preço do armazenamento", "Grupos de utilizadores", "Países"], answer: 0, why: "As zonas protegem contra a falha de um centro de dados." },
      { objective: "O3", q: "Qual é a conta de faturação que guarda os grupos de recursos?", options: ["Uma etiqueta", "Um contentor", "Uma subscrição", "Uma região"], answer: 2, why: "As subscrições são faturadas e contêm grupos de recursos." },
      { objective: "O3", q: "Onde gere o Azure num navegador de internet?", options: ["Numa loja de aplicações", "Num nível de armazenamento", "No ExpressRoute", "No portal do Azure"], answer: 3, why: "O portal do Azure é o site de gestão." },
      { objective: "O4", q: "Que serviço lhe dá um computador completo na nuvem?", options: ["Azure DNS", "Azure Policy", "Azure Virtual Machines", "Etiquetas"], answer: 2, why: "As Virtual Machines são computação IaaS." },
      { objective: "O4", q: "Qual é uma ligação privada ao Azure que não usa a internet pública?", options: ["VPN Gateway", "ExpressRoute", "Azure DNS", "Blob storage"], answer: 1, why: "O ExpressRoute é uma ligação privada." },
      { objective: "O4", q: "Onde guardaria cópias de segurança e vídeos?", options: ["Blob storage numa conta de armazenamento", "Azure Policy", "Um grupo de gestão", "Microsoft Entra ID"], answer: 0, why: "O Blob storage guarda ficheiros grandes." },
      { objective: "O5", q: "Qual é o serviço de início de sessão e de diretório do Azure?", options: ["Azure Advisor", "Azure Functions", "Microsoft Entra ID", "Nível de arquivo"], answer: 2, why: "O Entra ID gere as identidades e o início de sessão." },
      { objective: "O5", q: "Um voluntário só precisa de ler relatórios. Que ideia o limita a isso?", options: ["Controlo de acesso baseado em funções (RBAC)", "Nuvem híbrida", "Escalabilidade", "Armazenamento de arquivo"], answer: 0, why: "O RBAC dá só o acesso de que uma função precisa." },
      { objective: "O5", q: "Quer impedir que alguém crie recursos fora da sua região. Que ferramenta usa?", options: ["Etiquetas", "A calculadora de preços", "Um contentor", "Azure Policy"], answer: 3, why: "O Azure Policy aplica regras, como as regiões permitidas." },
      { objective: "O5", q: "Rótulos como project=website nos recursos chamam-se:", options: ["Bloqueios", "Etiquetas", "Zonas", "Níveis"], answer: 1, why: "As etiquetas organizam os recursos e ajudam a acompanhar os custos." },
      { objective: "O6", q: "Antes de criar qualquer coisa, como estima o custo mensal?", options: ["Adivinhar", "Usar a calculadora de preços do Azure", "Esperar pela primeira fatura", "Perguntar a um desconhecido na internet"], answer: 1, why: "A calculadora estima os custos antes de criar." },
      { objective: "O6", q: "Que pontuação precisa para passar no AZ-900, segundo o guia de estudo da Microsoft?", options: ["500", "600", "700 ou mais", "900 ou mais"], answer: 2, why: "O guia de estudo da Microsoft diz que é preciso uma pontuação de 700 ou mais." }
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
      7,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Tipo de serviço e serviços",
        objective: "O4",
        notYet: "O plano não indica nenhum serviço do Azure, ou os serviços não servem para um site e armazenamento de ficheiros.",
        meets: "Indica o tipo de serviço (IaaS, PaaS ou SaaS) e serviços adequados, como o App Service e uma conta de armazenamento.",
        exceeds: "Diz porque cada serviço serve melhor do que outra escolha."
      },
      {
        name: "Região e organização",
        objective: "O3",
        notYet: "Não indica nenhuma região nem grupo de recursos.",
        meets: "Indica uma região com uma razão e põe os recursos num só grupo de recursos.",
        exceeds: "Também indica a subscrição que paga e se são precisas zonas de disponibilidade."
      },
      {
        name: "Início de sessão seguro e regras",
        objective: "O5",
        notYet: "Não diz como as pessoas iniciam sessão nem quem pode fazer o quê.",
        meets: "Usa MFA e dá a cada pessoa só o acesso de que precisa (RBAC).",
        exceeds: "Também acrescenta etiquetas, uma política ou um bloqueio de recurso e diz o que cada um protege."
      },
      {
        name: "Estimativa de custos",
        objective: "O6",
        notYet: "Não há estimativa, ou o número não vem da calculadora de preços.",
        meets: "Dá um total mensal estimado pela calculadora de preços e um alerta de orçamento.",
        exceeds: "Indica uma mudança que baixaria o custo, como um nível de armazenamento mais frio."
      },
      {
        name: "Plano de estudo",
        objective: "O6",
        notYet: "Não fez a avaliação de prática.",
        meets: "Fez a avaliação de prática gratuita e escreveu as duas áreas mais fracas.",
        exceeds: "Ligou cada área fraca a um módulo gratuito do Microsoft Learn e a uma data para a estudar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem o exame oficial AZ-900 em 90 dias, e quantos passam",
      "Alunos que se candidatam ou começam um trabalho ou estágio de suporte informático, apoio ao utilizador (help desk) ou nuvem",
      "Organizações comunitárias que usam o plano de um aluno para passar um site ou ficheiros para a nuvem"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou tablet com navegador de internet e ligação à internet",
      "A calculadora de preços gratuita do Azure da Microsoft e uma conta gratuita do Microsoft Learn para a avaliação de prática",
      "Um modelo de plano de uma página, ou papel e caneta",
      "Cerca de 60 minutos para as lições, as verificações e o plano, mais cerca de 45 minutos para a avaliação de prática"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; trabalhem a calculadora de preços num ecrã partilhado.",
      "Não é precisa nenhuma conta do Azure. Se os alunos decidirem abrir uma conta gratuita, peça-lhes que leiam as condições atuais, definam um alerta de orçamento e apaguem os recursos de prática quando terminarem.",
      "Use uma organização local real, como um banco alimentar ou um centro juvenil, como exemplo para o plano de uma página.",
      "Lembre aos alunos que os detalhes e os preços do exame mudam; mande-os para a página oficial do exame da Microsoft para o seu país.",
      "Avalie o plano com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
