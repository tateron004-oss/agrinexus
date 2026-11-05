"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-export-gap-certification.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const GGAP_IFA = { name: "GLOBALG.A.P.: Garantia Integrada da Exploração Agrícola (IFA) para frutas e hortícolas (temas, opção para grupos de produtores, elementos de custo, passos até à certificação)", url: "https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/" };
const GGAP_PORTAL = { name: "GLOBALG.A.P.: Supply Chain Portal (verificar um certificado com o número GLOBALG.A.P.)", url: "https://globalgap.org/supply-chain-portal/" };
const EU_MRL = { name: "Comissão Europeia: Base de Dados de Pesticidas da UE (limites máximos de resíduos por alimento e por pesticida)", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" };
const CODEX = { name: "Codex Alimentarius (FAO/OMS): normas alimentares internacionais, incluindo limites de resíduos de pesticidas", url: "https://codex.fao.org/" };
const KE_VEG_DROP = { name: "Business Daily (dados do KNBS, relatório da AFA): as receitas de exportação de hortícolas do Quénia caem com as regras da UE sobre pesticidas; as interceções por LMR subiram de 25 (2023) para 57 (2024)", url: "https://www.businessdailyafrica.com/bd/economy/kenya-s-vegetable-export-earnings-down-on-eu-pesticide-rules-5392706" };
const FAO_PEST_REG = { name: "Kit de Ferramentas da FAO para o Registo de Pesticidas: registos nacionais de pesticidas em África", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const KE_AFA = { name: "Autoridade da Agricultura e Alimentação do Quénia (AFA), Direção das Culturas Hortícolas: licenças e registo para exportar (verifique as regras atuais)", url: "https://www.afa.go.ke" };
const KEPHIS_PHYTO = { name: "KEPHIS (Quénia): serviços fitossanitários e certificação para exportação", url: "https://www.kephis.go.ke/phytosanitary-services" };
const NEPC = { name: "Conselho de Promoção das Exportações da Nigéria (NEPC): registo eletrónico de exportadores", url: "https://nepc.gov.ng/get-started/e-registration/" };
const GEPA = { name: "Autoridade de Promoção das Exportações do Gana (GEPA): registar-se como exportador", url: "https://www.gepaghana.org/" };

module.exports = {
  id: "agri-export-gap-certification-pt",
  lang: "pt",
  translationOf: "agri-export-gap-certification",
  category: "Agriculture (Africa)",
  name: "Vender a Supermercados, Processadores e Compradores de Exportação: Normas e Certificação",
  skills: "Ler os requisitos de um comprador, Usar as Boas Práticas Agrícolas, Manter registos de rastreabilidade, Pesar os prós e contras da certificação, Cumprir os limites de resíduos e as regras de exportação, Fazer uma oferta de fornecimento",
  outcome: "verificar se a sua machamba ou o seu grupo está pronto para fornecer um supermercado, um processador ou um comprador de exportação, fechar as principais lacunas nas práticas, nos registos e na certificação, e fazer uma oferta de fornecimento escrita que consegue cumprir.",
  about: [
    "Os supermercados, os processadores e os compradores de exportação podem comprar muito mais do que um mercado local e muitas vezes pagam mais por uma qualidade estável. Mas pedem coisas que a maioria das pequenas machambas ainda não faz: volume estável, a mesma classe sempre, registos que seguem cada caixa, segurança dos alimentos e, às vezes, um certificado como o GLOBALG.A.P. Este curso é para agricultores comerciais em crescimento, grupos de produtores, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, no Senegal e em toda a África.",
    "Vai aprender o que os grandes compradores querem, as Boas Práticas Agrícolas que estão por trás disso, como manter registos que seguem a produção até ao campo, quanto custa e o que traz a certificação, porque é que os envios para exportação são rejeitados por resíduos de pesticidas, que organismos nacionais controlam as exportações, e como encontrar um comprador, negociar um contrato de fornecimento e avaliar um esquema de produtores contratados.",
    "Parte do curso \"Cooperativas de Agricultores e Chegar ao Mercado\", que trata de vender em grupo e de ler um contrato. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". As regras, as taxas e os limites mudam, por isso cada lição diz onde verificar. Os valores em dinheiro são só exemplos."
  ],
  finalTask: "Faça uma lista de verificação de prontidão para o comprador, para a sua machamba ou o seu grupo, para uma cultura e um tipo de comprador (supermercado, processador ou exportador), marcando o que já cumpre e o que tem de corrigir. Depois escreva uma oferta de fornecimento de uma página para esse comprador: cultura e classe, volume e calendário, como mantém a produção segura e rastreável, qualquer certificação, a base do preço e as condições que quer no contrato.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agricultores comerciais em crescimento, grupos de produtores e cooperativas, gestores de machambas, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, na África Ocidental francófona e em toda a África, que vendem hortícolas e frutas (feijão-verde, abacate, manga, ananás, tomate) ou culturas básicas (mandioca, milho, mapira, arroz) a compradores maiores.",
    startingPoint: "Sabem produzir uma boa colheita e vender nos mercados locais ou através de um grupo. Alguns mantêm registos básicos da machamba. Poucos sabem o que um supermercado ou um exportador audita, como funciona a certificação ou o que é um limite de resíduos.",
    gap: "Os grandes compradores rejeitam os agricultores que não conseguem mostrar volume e classe estáveis, registos rastreáveis e uso seguro de pesticidas. O próprio regulador do Quénia ligou uma forte queda das receitas de exportação de hortícolas sobretudo às interceções da UE por resíduos de pesticidas. Os agricultores precisam de ver as suas lacunas, corrigir as práticas e os registos, pesar a certificação e fazer uma oferta que consigam cumprir.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos falam português como segunda língua",
      "Aparelhos: um telefone simples ou um smartphone; cadernos de registo em papel",
      "Dinheiro: a certificação e as análises custam dinheiro; as opções em grupo são importantes para as pequenas machambas",
      "Regras: as licenças de exportação, os limites de resíduos e as regras de certificação mudam e são diferentes em cada país e mercado; os alunos verificam nas fontes oficiais",
      "Segurança: só pesticidas registados, usados como diz o rótulo, com equipamento de proteção; nenhuma dose em números no curso"
    ],
    prerequisites: "Útil: \"Cooperativas de Agricultores e Chegar ao Mercado\" e \"Registos da Machamba e Noções de Negócio\" (Agronegócio e Gestão da Machamba). Leitura e contas básicas."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os requisitos de um supermercado, de um processador ou de um comprador de exportação", action: "listar o que o comprador pede e comparar com o que a sua machamba ou o seu grupo fornece agora", standard: "cobrindo volume, regularidade, classe, rastreabilidade e segurança dos alimentos, com cada lacuna marcada" },
    { id: "O2", condition: "Para uma cultura da sua machamba", action: "escrever as Boas Práticas Agrícolas que vai seguir", standard: "cobrindo pesticidas registados usados como diz o rótulo, equipamento de proteção, o intervalo de segurança antes da colheita indicado no rótulo, água limpa, higiene na colheita e segurança dos trabalhadores" },
    { id: "O3", condition: "Com uma certificação como o GLOBALG.A.P.", action: "comparar os custos e os benefícios para a sua machamba ou o seu grupo e dizer o caminho que escolheria", standard: "dizendo os três elementos de custo, os passos até à auditoria e se uma opção em grupo serve" },
    { id: "O4", condition: "Para uma época de uma cultura", action: "montar registos de rastreabilidade que liguem cada lote ao seu campo, aos insumos e à data da colheita", standard: "para que qualquer caixa possa ser seguida até ao campo e a cada pulverização em poucos minutos" },
    { id: "O5", condition: "Com um mercado de exportação escolhido", action: "verificar os limites de resíduos e os organismos nacionais de exportação que se aplicam", standard: "dizendo onde encontrar os limites (por exemplo a Base de Dados de Pesticidas da UE ou o Codex) e os organismos de exportação e de sanidade vegetal do seu país" },
    { id: "O6", condition: "Com uma reunião com um comprador ou uma proposta de esquema de produtores contratados", action: "escrever uma oferta de fornecimento e as condições de contrato de que precisa", standard: "dizendo a classe, o volume, o calendário, a base do preço, as regras de rejeição, as condições de pagamento e o que acontece se uma das partes falhar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que os grandes compradores querem e preparar a sua machamba",
      lessons: [
        {
          title: "O que querem os supermercados, os processadores e os exportadores",
          objectives: ["O1"],
          minutes: 5,
          goal: "Listar os requisitos de um grande comprador e marcar onde a sua machamba fica aquém.",
          text: [
            "Os grandes compradores vendem a clientes que esperam o mesmo produto, seguro e na prateleira, todas as semanas. Por isso querem cinco coisas de você: volume (o suficiente para as suas encomendas), regularidade (fornecer semana após semana, não só na colheita), classe (tamanho, cor, maturação e defeitos conforme a especificação deles), rastreabilidade (conseguem saber de que machamba e de que campo veio uma caixa) e segurança dos alimentos (sem resíduos perigosos, micróbios ou sujidade).",
            "Cada comprador é diferente. Um supermercado em Nairobi ou em Acra pode querer tomate de um tamanho e numa caixa definidos, entregue duas vezes por semana. Um processador na Nigéria que compra mandioca para amido ou tomate para polpa quer grandes volumes com uma qualidade definida e pode importar-se menos com o aspeto. Um exportador que envia feijão-verde do Quénia ou manga do Senegal para a Europa tem de cumprir as regras do país que importa e muitas vezes pede um certificado.",
            "Peça ao comprador a especificação dele por escrito. Depois compare-a, ponto por ponto, com o que você fornece agora. As lacunas que encontrar são o seu plano de trabalho. Muitas pequenas machambas fecham as lacunas de volume e de regularidade trabalhando em grupo e escalonando as datas de plantação."
          ],
          steps: ["Peça a um comprador a especificação escrita e o tamanho da encomenda.", "Liste as necessidades dele em volume, regularidade, classe, rastreabilidade e segurança dos alimentos.", "Ao lado de cada uma, escreva o que a sua machamba ou o seu grupo fornece agora.", "Marque cada lacuna e como a pode fechar (por exemplo em grupo ou com plantação escalonada)."],
          words: [["Especificação", "a descrição escrita do comprador do produto que quer: tamanho, cor, maturação, embalagem e defeitos permitidos."], ["Rastreabilidade", "conseguir seguir a produção até à machamba, ao campo e aos insumos de onde veio."], ["Regularidade", "fornecer a mesma qualidade e quantidade, a tempo, vezes sem conta."]],
          slides: [
            { title: "Cinco coisas que os grandes compradores querem", bullets: ["Volume e regularidade", "Classe conforme a especificação deles", "Rastreabilidade e segurança dos alimentos"] },
            { title: "Os compradores são diferentes", bullets: ["Supermercado: tamanho e caixa definidos, duas vezes por semana", "Processador: grande volume, qualidade definida", "Exportador: regras do país que importa, muitas vezes um certificado"] },
            { title: "Encontre as suas lacunas", bullets: ["Peça a especificação por escrito", "Compare ponto por ponto com o que fornece", "Lacunas = o seu plano de trabalho; um grupo fecha lacunas de volume"] }
          ],
          tryIt: "Escolha um grande comprador perto de você (um supermercado, um processador ou um exportador). Escreva as necessidades dele nos cinco títulos, o que você fornece agora ao lado de cada uma, e marque as lacunas. Este é o início da sua lista de verificação de prontidão para o comprador.",
          youCanNow: "listar o que um grande comprador quer e marcar onde a sua machamba ou o seu grupo fica aquém.",
          quickCheck: [
            { objective: "O1", q: "Um supermercado quer tomate todas as semanas, o ano inteiro. Você colhe uma vez por época. Que necessidade não cumpre?", options: ["Classe", "Regularidade do fornecimento", "Rastreabilidade", "Segurança dos alimentos"], answer: 1, why: "Fornecer todas as semanas, e não só na colheita, é a regularidade." },
            { objective: "O1", q: "Qual é a melhor maneira de saber exatamente o que um comprador quer?", options: ["Adivinhar pelo que está na loja dele", "Perguntar a um vizinho que lhe vendeu uma vez", "Enviar produção e ver se ele aceita", "Pedir a especificação dele por escrito"], answer: 3, why: "Uma especificação escrita mostra o tamanho, a qualidade e a embalagem exatos que o comprador aceita." }
          ]
        },
        {
          title: "Boas Práticas Agrícolas na sua machamba",
          objectives: ["O2"],
          minutes: 6,
          goal: "Escrever as Boas Práticas Agrícolas que vai seguir para uma cultura.",
          text: [
            "As Boas Práticas Agrícolas (BPA, em inglês GAP) são os hábitos da machamba que mantêm a produção segura, protegem os trabalhadores e o ambiente, e tornam a qualidade estável. Os esquemas de certificação e os compradores auditam-nas. Pode começar a maioria delas com pouco dinheiro.",
            "Pesticidas: use só produtos registados pelo organismo do seu país (por exemplo o Pest Control Products Board do Quénia, a NAFDAC da Nigéria ou a EPA do Gana), verifique a lista atual, e use-os exatamente como diz o rótulo. Use o equipamento de proteção que o rótulo pede, guarde os químicos fechados à chave e longe dos alimentos, e respeite o intervalo de segurança do rótulo, o tempo de espera entre a última pulverização e a colheita. Pulverizar perto demais da colheita é uma das principais causas de rejeição por resíduos. Use a gestão integrada de pragas para pulverizar menos.",
            "E também: água limpa para pulverizar, lavar e regar; caixas de colheita limpas e fora do chão; casas de banho e lavagem das mãos para os trabalhadores; nenhum animal ou estrume perto da produção pouco antes da colheita; primeiros socorros e formação para os trabalhadores; e eliminação segura das embalagens vazias como dizem o rótulo ou o organismo do seu país. Escreva tudo isto como as regras de BPA da sua machamba."
          ],
          steps: ["Verifique se cada pesticida que usa está no registo do organismo do seu país.", "Escreva o equipamento de proteção e o intervalo de segurança do rótulo ao lado de cada produto.", "Prepare lavagem das mãos, casas de banho e caixas limpas para a colheita.", "Escreva as suas regras de BPA e dê formação a cada trabalhador sobre elas."],
          words: [["Boas Práticas Agrícolas (BPA)", "hábitos da machamba que mantêm a produção segura e protegem os trabalhadores e o ambiente."], ["Intervalo de segurança", "o tempo de espera indicado no rótulo entre a última pulverização e a colheita."], ["Pesticida registado", "um produto que o organismo do seu país aprovou para essa cultura e esse uso."], ["Gestão integrada de pragas", "controlar as pragas com vários métodos para pulverizar só quando é preciso."]],
          slides: [
            { title: "O que as BPA cobrem", bullets: ["Produção segura", "Segurança e bem-estar dos trabalhadores", "Ambiente e qualidade estável"] },
            { title: "Pesticidas da maneira certa", bullets: ["Só produtos registados: veja as listas do PCPB, da NAFDAC e da EPA do Gana", "Exatamente como diz o rótulo, com equipamento de proteção", "Respeite o intervalo de segurança do rótulo"] },
            { title: "Colheita limpa", bullets: ["Água limpa; caixas fora do chão", "Casas de banho e lavagem das mãos para os trabalhadores", "Nenhum animal ou estrume perto da produção na colheita"] },
            { title: "Escreva e dê formação", bullets: ["As regras de BPA da sua machamba numa página", "Dê formação a cada trabalhador", "Guarde os químicos fechados à chave, longe dos alimentos"] }
          ],
          sources: [FAO_PEST_REG],
          tryIt: "Escreva numa página as regras de BPA da sua machamba para uma cultura: os pesticidas registados que usa, com o equipamento de proteção e o intervalo de segurança do rótulo, a sua higiene da água e da colheita, e a segurança dos trabalhadores. Acrescente as lacunas à sua lista de verificação de prontidão para o comprador.",
          youCanNow: "escrever regras de Boas Práticas Agrícolas para uma cultura, incluindo o uso seguro de pesticidas registados.",
          quickCheck: [
            { objective: "O2", q: "Onde encontra quanto tempo esperar entre a última pulverização e a colheita?", options: ["No rótulo do produto (o intervalo de segurança)", "Com o motorista do comprador", "Na memória de um vizinho", "Não importa para a exportação"], answer: 0, why: "O rótulo dá o intervalo de segurança; respeitá-lo mantém os resíduos dentro dos limites." },
            { objective: "O2", q: "Um comerciante oferece um pesticida barato sem número de registo. O que faz?", options: ["Compra-o se for barato", "Mistura-o com um registado", "Não o usa; usa só produtos do registo do seu país", "Usa metade da quantidade"], answer: 2, why: "Os produtos não registados podem ser falsos ou proibidos e podem causar rejeições e danos." }
          ]
        },
        {
          title: "Registos que seguem cada caixa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Montar registos que seguem uma caixa até ao seu campo, aos insumos e à data da colheita.",
          text: [
            "Se um comprador encontrar um resíduo ou um problema, vai perguntar: que machamba, que campo, o que foi pulverizado e quando? Os registos de rastreabilidade respondem em minutos. Sem eles, um comprador pode deixar de comprar ao grupo inteiro.",
            "Dê a cada campo ou talhão um código, por exemplo KB-F2 para a machamba de Kiambu, campo 2. Mantenha um registo de pulverizações e insumos para cada campo: data, nome do produto e número de registo, quantidade, quem pulverizou e o intervalo de segurança do rótulo. Mantenha um registo de colheita: data, código do campo, caixas ou quilos, e um número de lote. Escreva o número de lote em cada caixa ou guia de entrega.",
            "Guarde os registos num caderno ou numa folha de cálculo simples no telefone, e guarde os recibos dos insumos. Os grupos de produtores mantêm um registo dos membros e os registos de cada membro. O Quénia está a introduzir o mapeamento e o registo digital das machambas de exportação, por isso confirme com a AFA o que a sua cultura precisa."
          ],
          steps: ["Dê a cada campo ou talhão um código curto.", "Mantenha um registo de pulverizações e insumos por campo: data, produto, número de registo, quantidade, quem pulverizou, intervalo de segurança.", "Mantenha um registo de colheita com um número de lote para cada colheita.", "Escreva o número de lote em cada caixa ou guia de entrega.", "Pratique: escolha uma caixa e siga-a até à origem em minutos."],
          words: [["Número de lote", "um código para uma colheita de um campo num dia, escrito nas caixas."], ["Registo de pulverizações", "uma lista escrita de cada pesticida usado: quando, qual, quanto e por quem."], ["Auditoria", "uma verificação por um comprador ou por um certificador de que você faz o que diz."]],
          slides: [
            { title: "Porquê seguir a produção?", bullets: ["O comprador encontra um problema: que campo, que pulverização, quando?", "Bons registos respondem em minutos", "Sem registos: o grupo inteiro pode ser posto de lado"] },
            { title: "Três registos", bullets: ["Códigos dos campos (por exemplo KB-F2)", "Registo de pulverizações e insumos por campo", "Registo de colheita com um número de lote"] },
            { title: "Mantenha-os a funcionar", bullets: ["Número de lote em cada caixa", "Caderno ou folha de cálculo no telefone; guarde os recibos", "Pratique seguir uma caixa até à origem"] }
          ],
          sources: [KE_AFA],
          tryIt: "Prepare os três registos para uma cultura: códigos dos campos, um registo de pulverizações e insumos, e um registo de colheita com números de lote. Preencha uma linha real ou de prática em cada um e depois siga essa caixa até ao campo e à última pulverização.",
          youCanNow: "manter registos dos campos, das pulverizações e das colheitas que seguem qualquer caixa até ao seu campo e aos insumos.",
          quickCheck: [
            { objective: "O4", q: "O que liga uma caixa na prateleira do comprador ao seu campo?", options: ["A cor da caixa", "O nome do motorista", "O preço de mercado", "Um número de lote escrito na caixa e no seu registo de colheita"], answer: 3, why: "Um número de lote na caixa e nos seus registos segue-a até ao campo e à data." },
            { objective: "O4", q: "Que dado pertence a um registo de pulverizações?", options: ["O número de telefone do comprador", "Data, produto, número de registo, quantidade e quem pulverizou", "A previsão do tempo para o mês que vem", "O preço da cultura"], answer: 1, why: "Estes dados mostram o que foi pulverizado e quando, e os compradores e certificadores verificam-nos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que os grandes compradores querem e preparar a sua machamba",
        questions: [
          { objective: "O1", q: "Qual NÃO é uma das cinco coisas que os grandes compradores costumam querer?", options: ["Volume", "Rastreabilidade", "Um presente para o comprador", "Segurança dos alimentos"], answer: 2, why: "Os compradores querem volume, regularidade, classe, rastreabilidade e segurança dos alimentos; presentes não são um requisito." },
          { objective: "O1", q: "O seu grupo só consegue preencher metade da encomenda semanal de um comprador. O que pode fechar a lacuna?", options: ["Mais membros e datas de plantação escalonadas", "Enviar produção de classe mais baixa", "Prometer mais do que tem", "Ignorar o tamanho da encomenda"], answer: 0, why: "Mais produtores e plantação escalonada aumentam o volume e mantêm o fornecimento estável." },
          { objective: "O2", q: "Que prática faz parte das BPA?", options: ["Guardar os pesticidas ao lado dos alimentos", "Pulverizar na véspera da colheita, diga o rótulo o que disser", "Deixar as cabras pastar perto da produção na colheita", "Usar o equipamento de proteção que o rótulo pede"], answer: 3, why: "Seguir o rótulo, incluindo o equipamento de proteção, protege os trabalhadores e a produção." },
          { objective: "O4", q: "O que é um número de lote?", options: ["O preço por caixa", "Um código para uma colheita de um campo num dia", "O número de trabalhadores", "O tamanho da machamba"], answer: 1, why: "Um número de lote identifica uma colheita para que possa ser seguida." },
          { objective: "O4", q: "Um comprador comunica um resíduo numa entrega. Bons registos permitem-lhe:", options: ["Culpar o comprador", "Mudar os registos", "Seguir até ao campo e à pulverização, e corrigir a causa", "Deixar de vender a todos"], answer: 2, why: "A rastreabilidade mostra onde o problema começou para que o possa corrigir e manter o comprador." }
        ]
      }
    },
    {
      name: "Capítulo 2: Certificação, regras de exportação e contratos de fornecimento",
      lessons: [
        {
          title: "GLOBALG.A.P. e certificação: custo e benefício",
          objectives: ["O3"],
          minutes: 6,
          goal: "Comparar os custos e os benefícios da certificação para a sua machamba e escolher um caminho.",
          text: [
            "Certificação quer dizer que um organismo independente verifica a sua machamba segundo uma norma e lhe dá um certificado se passar. O GLOBALG.A.P. é a norma agrícola mais conhecida, pedida por muitos supermercados e exportadores europeus. A sua norma de Garantia Integrada da Exploração Agrícola (IFA) para frutas e hortícolas cobre a segurança dos alimentos e a rastreabilidade, a saúde, a segurança e o bem-estar dos trabalhadores, e o ambiente (água, fertilizantes, gestão de pragas e produtos fitofarmacêuticos). Alguns compradores pedem outras normas, como esquemas biológicos ou de comércio justo.",
            "O GLOBALG.A.P. diz que há três elementos de custo: os seus próprios custos para se preparar (formação, casas de banho, armazém de químicos, registos); as taxas do organismo de certificação pela auditoria e pela deslocação; e as taxas de registo e de licença do GLOBALG.A.P., que dependem da sua área e da opção. As auditorias são anuais e um certificado dura um ano. Há uma opção para grupos de produtores, incluindo pequenos agricultores, em que um certificado de grupo cobre os membros que seguem um sistema de qualidade comum com inspeções internas.",
            "Os passos: descarregar as regras e a lista de verificação gratuitas, pôr os requisitos em prática, fazer uma autoavaliação, pedir uma auditoria a um organismo de certificação aprovado que trabalhe no seu país, corrigir os problemas no prazo dado, e receber o certificado. Os compradores podem verificar os certificados no Supply Chain Portal do GLOBALG.A.P. Antes de pagar, pergunte ao seu comprador: precisa deste certificado, e vai comprar mais ou pagar mais se eu o tiver? Peça orçamentos a mais do que um organismo de certificação."
          ],
          steps: ["Pergunte ao seu comprador que certificado exige, se exigir algum.", "Descarregue as regras e a lista de verificação gratuitas da norma e faça uma autoavaliação.", "Liste os três elementos de custo e peça orçamentos a organismos de certificação aprovados.", "Compare os custos com o benefício: novos compradores, mais volume ou um preço melhor.", "Decida: certificar sozinho, certificar em grupo ou ainda não."],
          words: [["Certificação", "uma verificação independente de que uma machamba cumpre uma norma, provada por um certificado."], ["Organismo de certificação", "a empresa aprovada que audita a sua machamba e emite o certificado."], ["Certificação em grupo", "um só certificado para um grupo de produtores cujos membros seguem um sistema de qualidade comum."], ["Autoavaliação", "verificar a sua própria machamba com a lista de verificação da norma antes da auditoria verdadeira."]],
          slides: [
            { title: "O que o GLOBALG.A.P. IFA cobre", bullets: ["Segurança dos alimentos e rastreabilidade", "Saúde, segurança e bem-estar dos trabalhadores", "Ambiente: água, fertilizantes, gestão de pragas"] },
            { title: "Três elementos de custo", bullets: ["Os seus custos para se preparar", "Taxas de auditoria e deslocação do organismo de certificação", "Taxas de registo e de licença do GLOBALG.A.P."] },
            { title: "Passos até ao certificado", bullets: ["Regras e lista de verificação gratuitas; autoavaliação", "Auditoria por um organismo de certificação aprovado", "Corrigir os problemas; certificado por um ano"] },
            { title: "Vale a pena?", bullets: ["Pergunte ao comprador se precisa dele", "Vai comprar mais ou pagar mais?", "Opção em grupo para pequenos agricultores; peça vários orçamentos"] }
          ],
          sources: [GGAP_IFA, GGAP_PORTAL],
          tryIt: "Para a sua cultura e o seu comprador, escreva uma nota de custo e benefício sobre a certificação: se o comprador precisa dela, os três elementos de custo (com orçamentos, se os conseguir), o benefício que espera, e a sua escolha: sozinho, em grupo ou ainda não.",
          youCanNow: "comparar os custos e os benefícios de uma certificação como o GLOBALG.A.P. e escolher um caminho para a sua machamba ou o seu grupo.",
          quickCheck: [
            { objective: "O3", q: "Qual é um dos três elementos de custo do GLOBALG.A.P.?", options: ["Os custos de transporte do comprador", "As propinas da sua escola", "As taxas de auditoria e deslocação do organismo de certificação", "O preço da cultura"], answer: 2, why: "O GLOBALG.A.P. lista os seus custos de preparação, as taxas do organismo de certificação e as suas próprias taxas de registo e de licença." },
            { objective: "O3", q: "Vinte pequenos agricultores querem a certificação mas cada um não consegue pagar uma auditoria. O que pode servir?", options: ["Certificação em grupo com um sistema de qualidade comum", "Cada um copiar o certificado de um vizinho", "Saltar a auditoria", "Comprar um certificado na internet"], answer: 0, why: "A opção para grupos de produtores deixa um só certificado cobrir os membros que seguem um sistema comum com inspeções internas." }
          ]
        },
        {
          title: "Limites de resíduos, regras de exportação e porque os envios são rejeitados",
          objectives: ["O5"],
          minutes: 6,
          goal: "Verificar os limites de resíduos e os organismos de exportação que se aplicam à sua cultura e ao seu mercado.",
          text: [
            "Um limite máximo de resíduos (LMR, em inglês MRL) é a maior quantidade de um pesticida que pode ficar num alimento. Cada mercado que importa fixa os seus. A União Europeia lista os seus limites na Base de Dados de Pesticidas da UE; o Codex Alimentarius fixa limites internacionais que muitos países usam. Um produto pode ser legal no seu país e mesmo assim ficar acima do limite na Europa, ou um pesticida pode nem sequer estar aprovado lá.",
            "Este não é um risco pequeno. A Autoridade da Agricultura e Alimentação do Quénia ligou uma forte queda das receitas de exportação de hortícolas sobretudo às interceções da UE por resíduos de pesticidas, que subiram de 25 casos em 2023 para 57 em 2024, e a UE aumentou os controlos ao feijão e às ervilhas do Quénia. Causas comuns: pulverizar perto demais da colheita, usar um produto não permitido nesse mercado, misturar mal, deriva da pulverização de um vizinho, e misturar produção de machambas não rastreadas.",
            "As exportações também precisam de aprovações nacionais. No Quénia, a Direção das Culturas Hortícolas da AFA licencia os exportadores e regista os agentes, e o KEPHIS emite os certificados fitossanitários. Na Nigéria, os exportadores registam-se no Conselho de Promoção das Exportações da Nigéria (NEPC). No Gana, os exportadores registam-se na Autoridade de Promoção das Exportações do Gana (GEPA). A inspeção de sanidade vegetal é feita pelo organismo de proteção das plantas de cada país. As regras mudam, por isso verifique com cada organismo antes da época."
          ],
          steps: ["Diga o seu mercado-alvo (por exemplo a UE, o Reino Unido ou um mercado regional).", "Procure os limites de resíduos para a sua cultura na base de dados desse mercado ou no Codex.", "Verifique se cada pesticida que usa é permitido lá e siga o intervalo de segurança do rótulo.", "Pergunte ao seu comprador se são precisas análises de resíduos antes do envio.", "Liste os organismos de exportação e de sanidade vegetal do seu país e o que exigem."],
          words: [["Limite máximo de resíduos (LMR)", "a maior quantidade de um pesticida que pode ficar num alimento num mercado."], ["Interceção", "quando um país que importa trava um envio na fronteira porque não cumpre uma regra."], ["Certificado fitossanitário", "um documento oficial que diz que um produto vegetal está livre das pragas e doenças listadas."]],
          slides: [
            { title: "O que é um LMR", bullets: ["A maior quantidade de pesticida permitida num alimento", "Cada mercado fixa os seus", "Base de Dados de Pesticidas da UE; limites do Codex"] },
            { title: "Porque os envios são rejeitados", bullets: ["Pulverizou perto demais da colheita", "Produto não permitido nesse mercado", "Mistura errada, deriva, produção não rastreada"] },
            { title: "O aviso do Quénia", bullets: ["AFA: interceções da UE por resíduos de 25 (2023) para 57 (2024)", "As receitas de exportação de hortícolas caíram muito", "Mais controlos da UE ao feijão e às ervilhas"] },
            { title: "Organismos de exportação (verifique as regras atuais)", bullets: ["Quénia: Direção das Culturas Hortícolas da AFA; KEPHIS", "Nigéria: registo no NEPC", "Gana: registo na GEPA; organismos de proteção das plantas"] }
          ],
          sources: [EU_MRL, CODEX, KE_VEG_DROP, KE_AFA, KEPHIS_PHYTO, NEPC, GEPA],
          tryIt: "Para a sua cultura e o seu mercado-alvo, encontre onde estão listados os limites de resíduos e verifique dois pesticidas que usa. Depois liste os organismos de exportação e de sanidade vegetal do seu país e uma pergunta para fazer a cada um. Acrescente os resultados à sua lista de verificação.",
          youCanNow: "encontrar os limites de resíduos para o seu mercado e dizer os organismos de exportação e de sanidade vegetal com que tem de lidar.",
          quickCheck: [
            { objective: "O5", q: "O seu pesticida está registado no seu país. A produção ainda pode ser rejeitada na Europa?", options: ["Não, o registo no seu país chega", "Sim, se os resíduos passarem o limite da UE ou se o produto não for permitido lá", "Só se as caixas estiverem sujas", "Só para as flores"], answer: 1, why: "Cada mercado fixa os seus limites, por isso produção legal no seu país pode não cumprir as regras da UE." },
            { objective: "O5", q: "No Quénia, quem emite os certificados fitossanitários para exportação?", options: ["KEBS", "NAFDAC", "NEPC", "KEPHIS"], answer: 3, why: "O KEPHIS trata da inspeção de sanidade vegetal e dos certificados fitossanitários para as exportações do Quénia." }
          ]
        },
        {
          title: "Encontrar compradores, contratos de fornecimento e esquemas de produtores contratados",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever uma oferta de fornecimento e listar as condições de contrato de que precisa de um comprador.",
          text: [
            "Quando se encontrar com um comprador, vá preparado: a sua cultura, a classe, quanto consegue fornecer e quando, como mantém a produção segura e rastreada, qualquer certificado, e amostras. Prometa só o que consegue entregar. Uma entrega falhada prejudica mais a confiança do que uma oferta menor.",
            "Negocie as condições, não só o preço. Combine a classe e como é verificada, o volume e o calendário, o preço ou como é fixado (fixo, ou ligado a um preço de mercado), quem paga o transporte e a embalagem, as regras de rejeição (quem verifica, quando, e o que acontece à produção rejeitada), a data e a forma de pagamento, e o que acontece se a sua colheita falhar ou se o comprador não vier buscar. Vender por fora a outro comprador quebra a confiança e muitas vezes quebra o contrato.",
            "Num esquema de produtores contratados, uma empresa como um processador ou um exportador contrata muitos pequenos agricultores, muitas vezes dá sementes, insumos, formação ou crédito, e compra a colheita. Pode abrir um mercado estável, mas verifique: os insumos são descontados do seu pagamento e a que preço, quem define a classe, e se os preços subirem, e pode sair? Leia cada contrato até ao fim, guarde uma cópia, e pergunte a um conselheiro de confiança, a um extensionista ou a um técnico de cooperativas antes de assinar."
          ],
          steps: ["Prepare a sua oferta: cultura, classe, volume, calendário, segurança e rastreabilidade, certificado, amostras.", "Liste as condições de que precisa: verificação da classe, base do preço, transporte, regras de rejeição, data de pagamento, cláusulas de falha.", "Num esquema de produtores contratados, pergunte como os insumos são cobrados, quem classifica e como pode sair.", "Leia o contrato até ao fim e pergunte a um conselheiro de confiança antes de assinar.", "Guarde uma cópia e entregue exatamente o que prometeu."],
          words: [["Oferta de fornecimento", "uma oferta escrita a um comprador do que pode fornecer, quando e em que condições."], ["Esquema de produtores contratados", "um acordo em que uma empresa contrata muitos pequenos agricultores para produzir para ela, muitas vezes dando insumos e comprando a colheita."], ["Venda por fora", "vender a outro comprador a produção que está sob contrato."], ["Regras de rejeição", "as regras combinadas para verificar a produção e o que acontece à produção que o comprador recusa."]],
          slides: [
            { title: "Vá preparado", bullets: ["Cultura, classe, volume e calendário", "Como mantém a produção segura e rastreada", "Certificado e amostras; prometa só o que consegue entregar"] },
            { title: "Negocie as condições", bullets: ["Verificação da classe, base do preço, transporte", "Regras de rejeição e data de pagamento", "E se a colheita falhar ou o comprador não vier buscar?"] },
            { title: "Esquemas de produtores contratados", bullets: ["Mercado estável; insumos, formação ou crédito", "Verifique: cobrança dos insumos, quem classifica, pode sair?", "Vender por fora quebra a confiança e os contratos"] },
            { title: "Antes de assinar", bullets: ["Leia cada linha; guarde uma cópia", "Pergunte a um extensionista, a um técnico de cooperativas ou a um conselheiro", "Entregue exatamente o que prometeu"] }
          ],
          tryIt: "Tarefa final: termine a sua lista de verificação de prontidão para o comprador, marcando o que cumpre e o que vai corrigir. Depois escreva uma oferta de fornecimento de uma página para esse comprador: cultura e classe, volume e calendário, segurança e rastreabilidade, certificação, base do preço e as condições de contrato que quer.",
          youCanNow: "fazer uma oferta de fornecimento a um grande comprador e listar as condições de contrato que o protegem, incluindo num esquema de produtores contratados.",
          quickCheck: [
            { objective: "O6", q: "Que condição o protege se o comprador recusar parte de uma entrega?", options: ["Regras de rejeição claras: quem verifica, quando, e o que acontece à produção recusada", "O logótipo do comprador", "Um preço baixo", "Uma entrega maior"], answer: 0, why: "As regras de rejeição evitam recusas injustas e dizem quem fica com o prejuízo." },
            { objective: "O6", q: "Uma empresa de produtores contratados dá sementes e fertilizante a crédito. O que deve perguntar primeiro?", options: ["De que cor são os sacos", "Se os vizinhos aderiram", "Como os insumos são cobrados e descontados do seu pagamento", "Se pode vender por fora"], answer: 2, why: "A cobrança dos insumos pode levar grande parte do seu pagamento, por isso saiba o preço e como é descontado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Certificação, regras de exportação e contratos de fornecimento",
        questions: [
          { objective: "O3", q: "Por quanto tempo é válido um certificado GLOBALG.A.P. IFA?", options: ["Um ano, com auditorias anuais", "Para sempre", "Dez anos", "Até o comprador mudar"], answer: 0, why: "O GLOBALG.A.P. diz que as auditorias são anuais e que um certificado é válido por um ano." },
          { objective: "O3", q: "Antes de pagar a certificação, o que deve perguntar ao seu comprador?", options: ["A morada de casa dele", "A cultura preferida dele", "Nada, é só certificar", "Precisa dele, e vai comprar mais ou pagar mais se eu o tiver?"], answer: 3, why: "A certificação custa dinheiro, por isso confirme que traz um mercado ou um preço melhor." },
          { objective: "O5", q: "Onde pode procurar os limites de resíduos da UE para uma cultura?", options: ["Numa rádio local", "Na Base de Dados de Pesticidas da UE", "No seu pacote de sementes", "No estado de WhatsApp de um comprador"], answer: 1, why: "A Base de Dados de Pesticidas da UE, da Comissão Europeia, lista os LMR por alimento e por pesticida." },
          { objective: "O6", q: "O que é vender por fora?", options: ["Vender à beira da estrada", "Vender a dois mercados ao mesmo tempo com autorização", "Vender a outro comprador a produção que está sob contrato", "Vender a granel"], answer: 2, why: "Vender por fora quebra um contrato e prejudica a confiança do comprador." },
          { objective: "O6", q: "Você consegue fornecer 2 toneladas por semana. O comprador pede 4. O que faz?", options: ["Promete 4 e espera", "Envia produção não escolhida para completar o peso", "Não diz nada e entrega 2", "Oferece 2 toneladas, ou trabalha com um grupo para fornecer mais"], answer: 3, why: "Prometa só o que consegue entregar; um grupo pode ajudar a chegar a um volume maior." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Vender a Supermercados, Processadores e Compradores de Exportação: Normas e Certificação",
    questions: [
      { objective: "O1", q: "Que conjunto lista o que os grandes compradores costumam querer?", options: ["Preço baixo, machamba grande, trator novo", "Só biológico, mais nada", "Presentes, crédito, transporte grátis", "Volume, regularidade, classe, rastreabilidade, segurança dos alimentos"], answer: 3, why: "Estas cinco são as necessidades comuns dos supermercados, dos processadores e dos exportadores." },
      { objective: "O1", q: "Um processador que compra mandioca para amido preocupa-se sobretudo com:", options: ["Grandes volumes com uma qualidade definida", "Cor e forma bonitas", "Embalagens pequenas para os clientes", "Rótulos bonitos"], answer: 0, why: "Os processadores precisam de volume e qualidade estáveis para a fábrica; o aspeto importa menos." },
      { objective: "O1", q: "Comparou a especificação de um comprador com o que fornece. Em que se tornam as lacunas?", options: ["Razões para desistir", "Segredos para esconder do grupo", "O seu plano de trabalho", "Um problema do comprador"], answer: 2, why: "Cada lacuna é uma tarefa a corrigir antes de poder fornecer esse comprador." },
      { objective: "O2", q: "O que quer dizer BPA (em inglês GAP) neste curso?", options: ["Bónus de Pagamento Agrícola", "Boas Práticas Agrícolas", "Banco de Produtos Agrícolas", "Boletim de Permissão Agrícola"], answer: 1, why: "As Boas Práticas Agrícolas são os hábitos da machamba que os compradores e os certificadores verificam." },
      { objective: "O2", q: "Que pesticidas deve usar?", options: ["Qualquer produto barato do mercado", "Produtos que um vizinho recomenda", "Produtos sem rótulo em garrafas velhas", "Produtos registados pelo organismo do seu país, usados como diz o rótulo"], answer: 3, why: "Produtos registados usados como diz o rótulo protegem as pessoas e mantêm os resíduos dentro dos limites." },
      { objective: "O2", q: "Porquê ter casas de banho e lavagem das mãos para os trabalhadores da colheita?", options: ["Para impedir que os micróbios cheguem à produção", "Para agradar aos vizinhos", "Porque os compradores gostam de edifícios", "Para guardar os químicos"], answer: 0, why: "A higiene na colheita mantém a produção livre de micróbios, e os compradores auditam isso." },
      { objective: "O4", q: "Para que serve o código de um campo?", options: ["Pagar aos trabalhadores", "Seguir a produção até ao campo exato", "Escolher um comprador", "Fixar o preço"], answer: 1, why: "Um código de campo liga os registos de colheita e de pulverizações a um campo." },
      { objective: "O4", q: "Onde deve aparecer o número de lote?", options: ["Só na sua cabeça", "No carro do comprador", "Em cada caixa ou guia de entrega, e no seu registo de colheita", "No pacote de sementes"], answer: 2, why: "Escrevê-lo nas caixas e nos registos permite a qualquer pessoa seguir a produção até à origem." },
      { objective: "O4", q: "Que registo mostra o que foi pulverizado num campo e quando?", options: ["Registo dos membros", "Livro de vendas", "Guia de entrega", "Registo de pulverizações e insumos"], answer: 3, why: "O registo de pulverizações e insumos lista a data, o produto, a quantidade e quem pulverizou." },
      { objective: "O3", q: "O que cobre o GLOBALG.A.P. IFA para frutas e hortícolas?", options: ["Segurança dos alimentos, bem-estar dos trabalhadores e ambiente", "Só a cor da produção", "Só o preço", "Só o tamanho da machamba"], answer: 0, why: "A IFA cobre a segurança dos alimentos e a rastreabilidade, a saúde e o bem-estar dos trabalhadores, e o ambiente." },
      { objective: "O3", q: "Quem faz uma auditoria GLOBALG.A.P.?", options: ["O motorista do comprador", "Um organismo de certificação aprovado", "Um vizinho", "O banco"], answer: 1, why: "Só um organismo de certificação aprovado que trabalhe no seu país pode auditar e certificar." },
      { objective: "O3", q: "Como pode um comprador verificar que o seu certificado é verdadeiro?", options: ["Pedir-lhe que jure", "Olhar para a placa da sua machamba", "No Supply Chain Portal do GLOBALG.A.P.", "Não consegue verificar"], answer: 2, why: "O estado do certificado aparece na plataforma do GLOBALG.A.P. com o seu número." },
      { objective: "O3", q: "Qual é o primeiro passo para a certificação?", options: ["Pagar as taxas logo", "Imprimir um certificado", "Dizer ao comprador que está certificado", "Descarregar as regras e a lista de verificação gratuitas e fazer uma autoavaliação"], answer: 3, why: "Uma autoavaliação mostra as suas lacunas antes de pagar uma auditoria." },
      { objective: "O5", q: "O que é um LMR?", options: ["Um tipo de fertilizante", "Uma variedade de semente", "A maior quantidade de um pesticida que pode ficar num alimento", "Uma licença de transporte"], answer: 2, why: "Um limite máximo de resíduos é o limite legal de resíduo de um pesticida num alimento." },
      { objective: "O5", q: "O que disse o regulador do Quénia sobre as interceções da UE por resíduos?", options: ["Desceram para zero", "Subiram de 25 em 2023 para 57 em 2024", "Nunca acontecem", "Só afetam as flores"], answer: 1, why: "A AFA informou que as interceções mais do que duplicaram e ligou-as a uma forte queda das receitas de exportação de hortícolas." },
      { objective: "O5", q: "Qual é uma causa comum de rejeição por resíduos?", options: ["Pulverizar perto demais da colheita", "Manter bons registos", "Usar caixas limpas", "Dar formação aos trabalhadores"], answer: 0, why: "Ignorar o intervalo de segurança deixa resíduos acima do limite." },
      { objective: "O5", q: "Um grupo nigeriano quer exportar hibisco seco. Em que organismo se registam como exportadores?", options: ["KEPHIS", "GEPA", "AFA", "O Conselho de Promoção das Exportações da Nigéria (NEPC)"], answer: 3, why: "Os exportadores nigerianos registam-se no NEPC e devem verificar os seus requisitos atuais." },
      { objective: "O6", q: "O que deve ter uma oferta de fornecimento?", options: ["Cultura, classe, volume, calendário, segurança, certificado e base do preço", "Só um preço baixo", "O PIN do seu banco", "A promessa de qualquer volume pedido"], answer: 0, why: "Uma oferta clara mostra ao comprador exatamente o que pode entregar e como." },
      { objective: "O6", q: "Antes de assinar um contrato de produtores contratados, você deve:", options: ["Assinar depressa antes dos outros", "Ler só a primeira página", "Lê-lo até ao fim, guardar uma cópia e perguntar a um conselheiro de confiança", "Deixar a empresa ficar com a única cópia"], answer: 2, why: "Ler até ao fim e pedir conselho protege-o de condições que não esperava." },
      { objective: "O6", q: "A sua colheita falha depois de uma seca. Que condição do contrato importa agora?", options: ["O logótipo do comprador", "O que acontece se uma das partes não conseguir cumprir", "A cor das caixas", "O horário do escritório do comprador"], answer: 1, why: "Uma cláusula de falha diz o que acontece quando uma colheita falha, para que não seja castigado injustamente." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte da lista de verificação ou da oferta e tente outra vez.",
    criteria: [
      { name: "Requisitos do comprador e lacunas", objective: "O1", notYet: "As necessidades do comprador são vagas, ou as lacunas não estão marcadas.", meets: "Volume, regularidade, classe, rastreabilidade e segurança dos alimentos estão listados, com o que fornece agora e cada lacuna marcada.", exceeds: "Baseado na especificação escrita do comprador, com um plano e uma data para fechar cada lacuna." },
      { name: "Boas Práticas Agrícolas", objective: "O2", notYet: "Não há regras de BPA escritas, ou há pesticidas não registados ou falta equipamento de proteção.", meets: "Regras escritas: pesticidas registados usados como diz o rótulo, equipamento de proteção, intervalo de segurança, água, higiene na colheita e segurança dos trabalhadores.", exceeds: "Os trabalhadores receberam formação e as regras estão afixadas onde eles trabalham." },
      { name: "Registos de rastreabilidade", objective: "O4", notYet: "Não há códigos dos campos, registo de pulverizações nem números de lote.", meets: "Códigos dos campos, um registo de pulverizações e insumos e um registo de colheita com números de lote; uma caixa pode ser seguida até à origem.", exceeds: "Os registos são mantidos para o grupo inteiro e foi feito um teste de rastreio em poucos minutos." },
      { name: "Certificação e regras de exportação", objective: "O3", notYet: "A certificação é dada como certa ou ignorada, ou não há organismos de exportação indicados.", meets: "Uma nota de custo e benefício diz os três elementos de custo e um caminho (sozinho, em grupo ou ainda não).", exceeds: "Inclui orçamentos reais de organismos de certificação e a resposta do comprador sobre se é preciso." },
      { name: "Limites de resíduos", objective: "O5", notYet: "Não verificou os limites de resíduos do mercado.", meets: "Diz onde os limites estão listados e verifica os pesticidas usados com eles, e também os organismos de exportação e de sanidade vegetal.", exceeds: "Perguntou ao comprador ou a um laboratório sobre análises de resíduos antes do envio." },
      { name: "Oferta de fornecimento e condições", objective: "O6", notYet: "Não há oferta, ou ela promete mais do que a machamba ou o grupo consegue entregar.", meets: "Uma oferta de uma página com classe, volume, calendário, segurança, certificado, base do preço e as condições de contrato pretendidas.", exceeds: "Inclui regras de rejeição, cláusulas de falha e condições de pagamento, e foi mostrada a um conselheiro." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos ou grupos que enviam uma oferta de fornecimento a um supermercado, processador ou exportador em 90 dias (inquérito de seguimento)",
      "Alunos ou grupos que ganham um contrato de fornecimento ou um acordo de produtores contratados em seis meses",
      "Alunos que mantêm registos de pulverizações e de colheita com números de lote durante uma época inteira",
      "Alunos ou grupos que começam ou terminam uma autoavaliação para a certificação, ou que chegam à certificação"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone (um smartphone ajuda) e um caderno para os registos",
      "Uma especificação real de um comprador, se possível (peça a um supermercado, processador ou exportador local)",
      "Os rótulos dos pesticidas que os alunos usam, para ler o equipamento de proteção e o intervalo de segurança",
      "Opcional: a lista de verificação gratuita do GLOBALG.A.P., em globalgap.org",
      "Cerca de 90 minutos no total, em sessões curtas, mais tempo para contactar compradores e organismos"
    ],
    facilitatorNotes: [
      "Sempre que possível, dê este curso a grupos de produtores: o volume, os registos e a certificação em grupo funcionam melhor juntos.",
      "Traga rótulos reais de pesticidas e pratique encontrar o equipamento de proteção e o intervalo de segurança; nunca dê você mesmo números de doses ou de intervalos.",
      "Convide um comprador, um exportador ou um organismo de certificação para falar do que auditam; peça-lhes uma especificação de exemplo.",
      "Antes da sessão, verifique as regras atuais com a AFA e o KEPHIS (Quénia), o NEPC (Nigéria), a GEPA (Gana) e o organismo de proteção das plantas do seu país; as regras e as taxas mudam.",
      "Avalie a tarefa final com a grelha de avaliação; faça um jogo de papéis de uma reunião com um comprador em que o \"comprador\" pressiona por mais volume do que o grupo consegue fornecer."
    ]
  }
};
