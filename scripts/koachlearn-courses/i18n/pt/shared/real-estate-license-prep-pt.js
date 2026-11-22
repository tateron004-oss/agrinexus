"use strict";

// Koach Learn course (Portuguese translation of shared/real-estate-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US state real estate licensing (ARELLO, California DRE, Texas TREC, HUD, CFPB); many readers are immigrants in the US.

const SRC = {
  arello: { name: "ARELLO (Association of Real Estate License Law Officials): Regulatory agencies", url: "https://arello.org/resources/regulatory-agencies/" },
  caDre: { name: "California Department of Real Estate: Salesperson license requirements", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html" },
  txTrec: { name: "Texas Real Estate Commission: Become a sales agent", url: "https://www.trec.texas.gov/become-licensed/sales-agent" },
  hudFha: { name: "HUD: Fair Housing Act overview", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
  cfpbLe: { name: "CFPB: What is a Loan Estimate?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-loan-estimate-en-1995/" },
  cfpbCd: { name: "CFPB: What is a Closing Disclosure?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/" },
  cfpbHome: { name: "CFPB: Buying a house (Owning a Home)", url: "https://www.consumerfinance.gov/owning-a-home/" }
};

module.exports = {
  id: "real-estate-license-prep-pt",
  lang: "pt",
  translationOf: "real-estate-license-prep",
  category: "Workforce Development",
  name: "Preparação para o Exame de Licença Imobiliária",
  skills: "Encontrar os passos da licença no seu estado, Usar os termos de propriedade e posse, Aplicar as regras de representação e de habitação justa, Seguir um contrato até ao fecho, Resolver a matemática do exame imobiliário, Fazer um plano de estudo e de exame com datas",
  outcome: "encontrar os passos da licença imobiliária do seu estado na página oficial, explicar as ideias principais que o exame avalia (propriedade, representação, habitação justa, contratos e fecho), resolver a matemática comum do exame e seguir um plano de estudo e de exame com datas feito por você.",
  about: [
    "Este curso é para adultos que querem ser vendedores imobiliários com licença (em alguns estados chamam-se agentes de vendas): pessoas a mudar de carreira, pessoas a começar um pequeno negócio, veteranos, pais que voltam ao trabalho e qualquer pessoa que quer um trabalho onde possa crescer. Muitos agentes trabalham por conta própria sob um corretor com licença (broker), por isso o curso também serve para empreendedores.",
    "Nos Estados Unidos, cada estado dá a licença aos agentes imobiliários. O órgão regulador do estado decide as aulas obrigatórias antes da licença, o exame, a verificação de antecedentes e as taxas. Este curso PREPARA você; não dá uma licença e não substitui as aulas aprovadas pelo seu estado. Cada lição mostra onde verificar as regras do seu próprio estado.",
    "Vai aprender as ideias principais que a maioria dos exames estaduais avalia, praticar a matemática com números inventados e terminar com o seu próprio plano de estudo e de exame com datas. Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\" em papel ou no telefone. Este curso ensina como funciona o setor imobiliário; não dá conselhos sobre comprar propriedades nem sobre investir."
  ],
  finalTask: "Faça o seu próprio Plano de Estudo e de Exame para a Licença Imobiliária (uma ou duas páginas): (1) o órgão regulador do seu estado, a página oficial que usou e os passos que ela indica (idade, formação antes da licença, exame, impressões digitais ou verificação de antecedentes, corretor patrocinador), cada um com uma data-alvo; (2) os temas do programa oficial do exame do seu estado, com os seus três temas mais fracos marcados e um plano para cada um; (3) uma folha de regras de uma página sobre os deveres de representação, as sete classes protegidas pela lei federal de habitação justa e as partes de um contrato válido; (4) cinco problemas de matemática de prática (comissão, relação empréstimo-valor, imposto predial, rateio, área) com as contas mostradas; (5) um horário de estudo semanal até à data-alvo do exame.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos nos Estados Unidos que se preparam para a licença estadual de vendedor imobiliário (agente de vendas): pessoas a mudar de carreira, donos de pequenos negócios, empreendedores, veteranos, pessoas que voltam ao trabalho e jovens adultos com mais de 18 anos. Alguns só terminaram o ensino secundário ou o GED (o diploma equivalente ao secundário nos EUA); alguns falam inglês como segunda língua.",
    startingPoint: "Sabem ler um formulário simples e fazer contas básicas com uma calculadora. A maioria não sabe quem dá a licença aos agentes no seu estado, a ordem dos passos da licença, nem as palavras legais que o exame usa (fee simple, servidão, fiduciário, contrapartida, rateio).",
    gap: "Muitas pessoas pagam aulas ou um exame sem um plano, esquecem um passo (como as impressões digitais ou um corretor patrocinador) ou reprovam no exame por causa do vocabulário e da matemática. Um aluno que conhece os passos oficiais, as ideias principais e a matemática do exame, e que tem um plano com datas, tem muito mais hipóteses de passar e começar a trabalhar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 7.º ao 8.º ano); cada palavra legal é explicada",
      "Aparelhos: um telefone ou computador da biblioteca para ler a página oficial do estado; papel, caneta e uma calculadora simples para cada tarefa",
      "Tempo: lições de 4 a 6 minutos que cabem à volta de um trabalho",
      "As regras mudam de estado para estado: horas de formação, formato do exame, nota para passar e taxas verificam-se na página do órgão regulador, nunca se adivinham",
      "Este curso prepara; não substitui a formação aprovada pelo estado antes da licença nem dá uma licença",
      "Nenhum conselho de investimento, legal ou fiscal; a matemática usa números inventados, só para praticar"
    ],
    prerequisites: "Nenhum. Quem quer rever as percentagens pode fazer primeiro o curso \"Matemática do Dia a Dia\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o site oficial do órgão regulador imobiliário do seu estado", action: "listar pela ordem certa os passos para a licença de vendedor", standard: "sem faltar nenhum passo e com o nome da página oficial" },
    { id: "O2", condition: "Com uma descrição curta de uma situação de propriedade ou de posse", action: "identificar o termo imobiliário certo para essa situação", standard: "acertando pelo menos 4 de 5" },
    { id: "O3", condition: "Com uma situação com um cliente ou uma pessoa à procura de casa", action: "escolher a ação que segue os deveres de representação e a lei de habitação justa", standard: "acertando pelo menos 4 de 5 situações e dizendo o nome da regra" },
    { id: "O4", condition: "Com um exemplo de proposta de compra", action: "verificar se tem as partes de um contrato válido e pôr os passos do fecho por ordem", standard: "sem faltar nenhuma parte e com os prazos federais dos documentos certos" },
    { id: "O5", condition: "Com um problema escrito ao estilo do exame e uma calculadora", action: "calcular a comissão, a relação empréstimo-valor, o imposto predial, o rateio e a área", standard: "acertando pelo menos 4 de 5 com as contas mostradas" },
    { id: "O6", condition: "Usando o programa oficial do exame do seu estado e um calendário", action: "escrever um plano de estudo e de exame com datas", standard: "cobrindo todos os temas do programa e os seus três temas mais fracos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A licença e as ideias principais",
      lessons: [
        {
          title: "Como funciona a licença imobiliária no seu estado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Listar os passos do seu estado para a licença de vendedor a partir da página oficial.",
          text: [
            "Nos Estados Unidos não há uma licença imobiliária nacional. Cada estado tem o seu próprio órgão regulador, muitas vezes chamado comissão imobiliária (real estate commission) ou departamento imobiliário (department of real estate). Ele decide as aulas, o exame, a verificação de antecedentes e as taxas. A ARELLO, a associação dos responsáveis pelas leis de licenças, tem uma lista dos órgãos reguladores que pode usar para encontrar o seu.",
            "Na maioria dos estados os passos são parecidos: cumprir a regra da idade, terminar as aulas aprovadas pelo estado antes da licença, fazer o pedido, passar numa verificação de antecedentes (muitas vezes com impressões digitais), passar no exame e trabalhar sob um corretor com licença. Muitos exames têm uma parte nacional e uma parte sobre a lei do estado.",
            "Os detalhes mudam muito. A Califórnia pede três cursos de nível universitário (Real Estate Principles, Real Estate Practice e um curso opcional). O Texas pede 180 horas de aulas em seis cursos, impressões digitais com a polícia estadual e exames feitos pela empresa Pearson. O seu estado pode ser diferente, por isso leia sempre a página do seu próprio estado."
          ],
          steps: ["Encontre o órgão regulador imobiliário do seu estado (use a lista da ARELLO ou pesquise o nome do seu estado mais \"real estate commission\" e procure um endereço .gov).", "Abra a página da nova licença de vendedor (salesperson ou sales agent).", "Escreva cada passo por ordem: idade, aulas, pedido, verificação de antecedentes, exame, corretor.", "Anote o endereço da página e a data em que a verificou."],
          words: [["Órgão regulador imobiliário", "o serviço do estado que dá a licença aos agentes e faz cumprir as regras, como uma comissão imobiliária."], ["Vendedor (agente de vendas)", "a primeira licença imobiliária; você trabalha sob um corretor."], ["Corretor (broker)", "uma licença mais alta; o corretor pode dirigir uma agência imobiliária e supervisionar vendedores."], ["Formação antes da licença", "as aulas aprovadas pelo estado que tem de terminar antes do exame ou da licença."], ["Corretor patrocinador", "o corretor que aceita supervisionar você depois de ter a licença."]],
          slides: [
            { title: "A licença é dada pelo estado", bullets: ["Não há licença imobiliária nacional", "O órgão regulador do seu estado decide aulas, exame e taxas", "A ARELLO tem a lista dos órgãos reguladores"] },
            { title: "Passos na maioria dos estados", bullets: ["Regra da idade e aulas antes da licença", "Pedido e verificação de antecedentes", "Exame (muitas vezes com parte nacional e parte estadual)", "Trabalhar sob um corretor com licença"] },
            { title: "Os estados são diferentes: dois exemplos", bullets: ["Califórnia: três cursos de nível universitário", "Texas: 180 horas em seis cursos, exames da Pearson", "Leia sempre a página do seu próprio estado"] }
          ],
          sources: [SRC.arello, SRC.caDre, SRC.txTrec],
          tryIt: "Encontre o órgão regulador imobiliário do seu estado. Num papel, liste por ordem todos os passos para a licença de vendedor, com o endereço da página e a data de hoje. Faça um círculo à volta de cada passo que não conhecia.",
          youCanNow: "encontrar o órgão regulador imobiliário do seu estado e listar por ordem os passos para a licença de vendedor.",
          quickCheck: [
            { objective: "O1", q: "Quem decide as aulas e o exame da licença de vendedor imobiliário?", options: ["Uma comissão imobiliária nacional", "A empresa imobiliária onde vai trabalhar", "O órgão regulador imobiliário do seu estado", "O banco que empresta dinheiro aos compradores"], answer: 2, why: "As licenças imobiliárias são dadas por cada estado, e o órgão regulador do estado decide os requisitos." },
            { objective: "O1", q: "Um site que encontrou diz que as aulas duram 60 horas. O que faz?", options: ["Verifica as horas na página oficial do órgão regulador do seu estado", "Confia se o site parecer profissional", "Paga já a aula mais barata", "Pergunta a um amigo de outro estado"], answer: 0, why: "As horas mudam de estado para estado e ao longo do tempo, por isso só a página oficial do seu estado é de confiança." }
          ]
        },
        {
          title: "Palavras de propriedade e de posse que o exame usa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identificar o termo certo para uma situação de propriedade ou de posse.",
          text: [
            "Propriedade imóvel (real property) é o terreno e tudo o que está preso a ele, como uma casa, uma vedação ou uma árvore, mais os direitos que vêm com ele. Propriedade móvel (personal property) é o que se pode mudar de sítio, como um sofá. Um elemento fixo (fixture) era um bem móvel mas agora está preso, como uma ventoinha de teto ou uma máquina de lavar loiça embutida, por isso normalmente fica com a casa.",
            "Ser dono de uma propriedade imóvel quer dizer ter um conjunto de direitos: ocupar, usar, aproveitar, impedir a entrada de outros e vender ou deixar a alguém. Fee simple é a forma mais completa de ser dono. Quando duas ou mais pessoas são donas em conjunto, a joint tenancy normalmente inclui o direito de sobrevivência (quando um dono morre, a sua parte passa para os outros donos), e a tenancy in common não inclui.",
            "A escritura (deed) passa a posse de uma pessoa para outra; o título (title) é o próprio direito de ser dono. O que limita ou pesa sobre uma propriedade chama-se encargo (encumbrance): um ónus (lien), que é uma dívida ligada à propriedade, como uma hipoteca ou um imposto por pagar, e uma servidão (easement), que é o direito de usar o terreno de outra pessoa, como para uma linha de eletricidade. O terreno descreve-se de três formas principais: metes and bounds (medidas e limites), o sistema de levantamento retangular (do governo) e lote e quarteirão (lot and block) a partir de um mapa registado."
          ],
          words: [["Propriedade imóvel (real property)", "o terreno, o que está preso a ele e os direitos de ser dono."], ["Elemento fixo (fixture)", "um objeto preso à propriedade, por isso é tratado como parte dela."], ["Fee simple", "a forma mais completa de ser dono."], ["Direito de sobrevivência", "quando um dos donos morre, a sua parte passa para os outros donos."], ["Encargo (encumbrance)", "tudo o que limita ou pesa sobre uma propriedade, como um ónus ou uma servidão."], ["Ónus (lien)", "um direito legal de cobrar dinheiro ligado a uma propriedade."], ["Servidão (easement)", "o direito de usar parte do terreno de outra pessoa para um fim definido."]],
          slides: [
            { title: "Propriedade imóvel e móvel", bullets: ["Imóvel: o terreno e o que está preso a ele", "Móvel: coisas que se podem mudar de sítio", "Elemento fixo: está preso, por isso normalmente fica"] },
            { title: "Ser dono", bullets: ["Conjunto de direitos: ocupar, usar, aproveitar, impedir, vender", "Fee simple: a forma mais completa de ser dono", "Joint tenancy tem direito de sobrevivência; tenancy in common não tem"] },
            { title: "Título e limites", bullets: ["A escritura passa a posse; o título é o direito de ser dono", "Ónus (lien): uma dívida ligada à propriedade", "Servidão: o direito de usar o terreno de outra pessoa"] },
            { title: "Descrever o terreno", bullets: ["Metes and bounds (medidas e limites)", "Levantamento retangular (do governo)", "Lote e quarteirão a partir de um mapa registado"] }
          ],
          tryIt: "Faça 10 cartões de estudo em papel: o termo na frente e, atrás, o significado com as suas palavras mais um exemplo (propriedade imóvel, propriedade móvel, elemento fixo, fee simple, joint tenancy, tenancy in common, escritura, título, ónus, servidão). Faça o teste a si mesmo duas vezes.",
          youCanNow: "dizer o termo imobiliário certo para situações comuns de propriedade e de posse.",
          quickCheck: [
            { objective: "O2", q: "A companhia de eletricidade tem o direito de passar uma linha pelas traseiras de um quintal. Isto é:", options: ["Um elemento fixo", "Fee simple", "Propriedade móvel", "Uma servidão"], answer: 3, why: "Uma servidão é o direito de usar parte do terreno de outra pessoa para um fim definido." },
            { objective: "O2", q: "Duas irmãs são donas de uma casa. Quando uma morre, a parte dela passa automaticamente para a outra. O mais provável é terem o título em:", options: ["Tenancy in common", "Joint tenancy", "Arrendamento", "Ónus"], answer: 1, why: "A joint tenancy normalmente inclui o direito de sobrevivência; a tenancy in common não inclui." }
          ]
        },
        {
          title: "Deveres de representação e habitação justa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escolher, numa situação, a ação que segue os deveres de representação e a lei de habitação justa.",
          text: [
            "Quando representa um cliente, você é o agente dele e tem deveres fiduciários para com ele. Muitos livros resumem-nos com a sigla inglesa OLDCAR: Obedience (obedecer às instruções legais), Loyalty (lealdade), Disclosure (revelar os factos importantes), Confidentiality (confidencialidade), Accounting (prestar contas do dinheiro que guarda) e Reasonable care (cuidado razoável). A lei do seu estado decide os deveres exatos e os formulários de informação.",
            "Representar o comprador e o vendedor no mesmo negócio chama-se dupla representação (dual agency). Alguns estados só a permitem com consentimento por escrito dos dois lados, e outros limitam-na ou proíbem-na. Verifique as regras do seu estado.",
            "A lei federal Fair Housing Act (lei de habitação justa) proíbe discriminar na habitação por causa da raça, da cor, da origem nacional, da religião, do sexo, da situação familiar (como ter filhos) ou da deficiência. Os estados e as cidades podem juntar mais grupos. Práticas ilegais incluem o steering (levar pessoas para certas zonas ou afastá-las delas por causa de uma classe protegida), o blockbusting (pressionar donos a vender dizendo que um certo grupo está a chegar ao bairro) e o redlining (recusar empréstimos ou seguros em certas zonas)."
          ],
          steps: ["Pergunte: quem é o meu cliente e o que lhe devo?", "Pergunte: este pedido trata alguém de forma diferente por causa de uma classe protegida?", "Se sim, não o faça; explique a lei com educação.", "Anote o que aconteceu e informe o seu corretor."],
          words: [["Agente", "uma pessoa autorizada a agir por outra (o cliente ou mandante)."], ["Fiduciário", "uma pessoa numa posição de confiança que tem de pôr os interesses do cliente em primeiro lugar."], ["Dupla representação (dual agency)", "um agente ou uma agência que representa o comprador e o vendedor no mesmo negócio."], ["Classe protegida", "um grupo que a lei protege da discriminação, como a raça ou a deficiência."], ["Steering", "levar pessoas para certas zonas ou afastá-las delas por causa de uma classe protegida; é ilegal."]],
          slides: [
            { title: "Deveres para com o seu cliente (OLDCAR)", bullets: ["Obediência, lealdade, revelar os factos", "Confidencialidade, prestar contas, cuidado razoável", "A lei do seu estado decide os deveres exatos"] },
            { title: "Dupla representação", bullets: ["Representar os dois lados no mesmo negócio", "As regras mudam: consentimento, limites ou proibição", "Verifique o seu estado"] },
            { title: "Fair Housing Act: 7 classes", bullets: ["Raça, cor, origem nacional, religião", "Sexo, situação familiar, deficiência", "Estados e cidades podem juntar mais"] },
            { title: "Práticas ilegais", bullets: ["Steering", "Blockbusting", "Redlining"] }
          ],
          sources: [SRC.hudFha],
          tryIt: "Escreva três situações curtas em que um vendedor ou um comprador lhe pede para fazer algo injusto (por exemplo, \"Não mostre a minha casa a famílias com crianças\"). Para cada uma, escreva a classe protegida em causa e uma frase educada que diria em vez disso.",
          youCanNow: "aplicar os deveres de representação e a lei de habitação justa para escolher a ação certa com os clientes.",
          quickCheck: [
            { objective: "O3", q: "Um vendedor diz: \"Mostre a minha casa só a pessoas sem filhos.\" O que faz?", options: ["Explica que a situação familiar é protegida e que tem de mostrar a casa a todos", "Aceita, porque o vendedor é o seu cliente", "Mostra a casa só nos dias de semana", "Pergunta aos compradores quantos filhos têm"], answer: 0, why: "A situação familiar é uma classe protegida pela Fair Housing Act, e a obediência só vale para instruções legais." },
            { objective: "O3", q: "O seu vendedor diz-lhe o preço mais baixo que aceita. Um comprador pergunta-lhe esse preço. Que dever se aplica?", options: ["Prestar contas", "Confidencialidade", "Revelar ao comprador", "Obediência ao comprador"], answer: 1, why: "Um agente guarda em segredo as informações privadas do cliente, como o seu preço mais baixo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A licença e as ideias principais",
        questions: [
          { objective: "O1", q: "Qual é normalmente o PRIMEIRO passo para a licença de vendedor?", options: ["Entrar na agência de um corretor patrocinador", "Fazer o exame do estado", "Arranjar o primeiro cliente", "Ler os requisitos do órgão regulador do seu estado"], answer: 3, why: "Precisa da lista oficial dos passos antes de pagar aulas ou o exame." },
          { objective: "O2", q: "Uma máquina de lavar loiça embutida, presa à cozinha, é muito provavelmente:", options: ["Propriedade móvel", "Um elemento fixo", "Uma servidão", "Um ónus"], answer: 1, why: "Um objeto preso à propriedade é um elemento fixo e normalmente fica com a casa." },
          { objective: "O2", q: "Um imposto predial por pagar dá ao condado um direito sobre a casa. Isto é:", options: ["Um ónus", "Uma escritura", "Fee simple", "Joint tenancy"], answer: 0, why: "Um ónus é um direito legal de cobrar dinheiro ligado a uma propriedade." },
          { objective: "O3", q: "Um agente diz a um comprador: \"Ficaria mais à vontade num bairro com pessoas da sua religião.\" Isto é:", options: ["Um bom atendimento ao cliente", "Blockbusting", "Steering, que é ilegal", "Redlining"], answer: 2, why: "Levar pessoas para certas zonas ou afastá-las delas por causa de uma classe protegida é steering." },
          { objective: "O3", q: "Qual NÃO é uma classe protegida pela lei federal Fair Housing Act?", options: ["Deficiência", "Origem nacional", "Situação familiar", "Equipa de desporto preferida"], answer: 3, why: "As sete classes federais são raça, cor, origem nacional, religião, sexo, situação familiar e deficiência." }
        ]
      }
    },
    {
      name: "Capítulo 2: Contratos, matemática e o seu plano de exame",
      lessons: [
        {
          title: "Contratos e o caminho até ao fecho",
          objectives: ["O4"],
          minutes: 6,
          goal: "Verificar se uma proposta de compra tem as partes de um contrato válido e pôr os passos do fecho por ordem.",
          text: [
            "Um contrato válido precisa de: partes que podem assinar legalmente (capazes), uma oferta e uma aceitação (acordo dos dois lados), uma contrapartida (algo de valor dado por cada lado) e um fim legal. Um contrato de compra ou venda de imóveis normalmente tem de ser por escrito para se poder fazer cumprir; esta regra chama-se statute of frauds.",
            "Um contrato é nulo (void) se nunca foi válido (por exemplo, com um fim ilegal). É anulável (voidable) se um dos lados o pode cancelar, por exemplo quando foi assinado por um menor. A maioria das propostas de compra inclui condições (contingencies), como conseguir um empréstimo ou ter uma boa inspeção, e um sinal (earnest money), um depósito que mostra que o comprador está a falar a sério.",
            "Um caminho comum é: oferta, aceitação, abertura da conta de garantia (escrow) ou do agente de fecho, inspeção, avaliação e aprovação do empréstimo, vistoria final e fecho. As regras federais protegem quem pede o empréstimo: o credor entrega uma Loan Estimate (estimativa do empréstimo) até três dias úteis depois do pedido de empréstimo, e uma Closing Disclosure (declaração de fecho) pelo menos três dias úteis antes do fecho, para o comprador as poder comparar."
          ],
          steps: ["Verifique que as partes estão nomeadas e podem assinar.", "Verifique que há uma oferta clara e uma aceitação assinada.", "Verifique o preço, o sinal e o que cada lado dá (contrapartida).", "Verifique que está por escrito e tem um fim legal.", "Liste as condições e os seus prazos.", "Ponha os passos do fecho por ordem, com os prazos da Loan Estimate e da Closing Disclosure."],
          words: [["Contrapartida", "algo de valor que cada lado dá, como dinheiro ou uma promessa."], ["Statute of frauds", "a regra de que os contratos imobiliários normalmente têm de ser por escrito para se poderem fazer cumprir."], ["Nulo / anulável", "nulo: nunca foi um contrato válido; anulável: é válido, mas um dos lados o pode cancelar."], ["Condição (contingency)", "algo que tem de acontecer para o negócio avançar, como a aprovação do empréstimo."], ["Sinal (earnest money)", "um depósito que o comprador faz para mostrar que está a falar a sério."], ["Closing Disclosure", "o formulário final do credor com as condições do empréstimo e os custos do fecho."]],
          slides: [
            { title: "Partes de um contrato válido", bullets: ["Partes capazes", "Oferta e aceitação", "Contrapartida e fim legal", "Por escrito, no caso de imóveis"] },
            { title: "Nulo, anulável, com condições", bullets: ["Nulo: nunca foi válido", "Anulável: um dos lados pode cancelar", "Condição: algo que tem de acontecer, como a aprovação do empréstimo"] },
            { title: "Caminho até ao fecho", bullets: ["Oferta, aceitação, conta de garantia (escrow)", "Inspeção, avaliação, aprovação do empréstimo", "Vistoria final e depois o fecho"] },
            { title: "Formulários federais do empréstimo (CFPB)", bullets: ["Loan Estimate: até 3 dias úteis depois do pedido", "Closing Disclosure: 3 ou mais dias úteis antes do fecho"] }
          ],
          sources: [SRC.cfpbLe, SRC.cfpbCd, SRC.cfpbHome],
          tryIt: "Escreva uma proposta de compra curta e inventada (nomes, morada, preço, sinal, uma condição, assinaturas). Depois verifique-a com os seis passos acima e liste o que falta. Termine com os passos do fecho por ordem.",
          youCanNow: "verificar se uma proposta de compra tem as partes de um contrato válido e pôr os passos até ao fecho por ordem.",
          quickCheck: [
            { objective: "O4", q: "Um comprador e um vendedor combinam a venda de uma casa só por telefone. Segundo o statute of frauds, o negócio:", options: ["Pode ser totalmente cumprido", "Pode ser cumprido depois de uma semana", "Normalmente não se pode fazer cumprir até estar por escrito", "É ilegal"], answer: 2, why: "Os contratos imobiliários normalmente têm de ser por escrito para se poderem fazer cumprir." },
            { objective: "O4", q: "Quando é que quem pede o empréstimo tem de receber a Closing Disclosure?", options: ["Pelo menos três dias úteis antes do fecho", "No dia do fecho", "Até um mês depois do fecho", "Antes de fazer uma oferta"], answer: 0, why: "O CFPB diz que o credor entrega a Closing Disclosure pelo menos três dias úteis antes do fecho." }
          ]
        },
        {
          title: "Matemática do exame imobiliário",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular a comissão, a relação empréstimo-valor, o imposto predial, o rateio e a área.",
          text: [
            "Só para praticar: todos os números aqui são inventados. Comissão: preço de venda vezes a taxa. Uma venda de $300,000 a 6% dá $18,000. Se a agência que tinha a casa à venda fica com metade, são $9,000; se a parte do agente é 60%, o agente recebe $5,400.",
            "A relação empréstimo-valor (LTV, loan-to-value) é o empréstimo dividido pelo valor. Um empréstimo de $240,000 para uma casa de $300,000 dá 0,80, ou seja 80%. O imposto predial é o valor tributável vezes a taxa do imposto: $200,000 vezes 1,5% dá $3,000 por ano, ou $250 por mês.",
            "O rateio divide um custo pelos dias. Se o imposto anual é $3,650 e o ano tem 365 dias, são $10 por dia; se o vendedor foi dono da casa durante 120 dias e o comprador paga a conta mais tarde, o vendedor deve $1,200 ao comprador. Área: comprimento vezes largura. Um lote de 50 pés por 120 pés tem 6,000 pés quadrados. Um acre tem 43,560 pés quadrados. Verifique se o seu exame usa um ano de 360 ou de 365 dias."
          ],
          steps: ["Leia a pergunta e sublinhe o que ela pede.", "Escreva a fórmula (parte = total vezes taxa).", "Passe as percentagens para decimais (6% = 0,06).", "Faça um passo de cada vez no papel.", "Pergunte: a resposta faz sentido?"],
          words: [["Comissão", "o valor pago pela venda, normalmente uma percentagem do preço de venda."], ["Divisão (split)", "como uma comissão é repartida entre agências ou entre um corretor e um agente."], ["Relação empréstimo-valor (LTV)", "o valor do empréstimo dividido pelo valor da propriedade, em percentagem."], ["Valor tributável", "o valor que o governo local usa para calcular o imposto predial."], ["Rateio", "dividir um custo entre o comprador e o vendedor pelos dias em que cada um é dono da propriedade."]],
          slides: [
            { title: "Comissão", bullets: ["Preço de venda x taxa", "$300,000 x 6% = $18,000", "Metade para a agência = $9,000; parte de 60% = $5,400"] },
            { title: "LTV e imposto predial", bullets: ["LTV = empréstimo / valor: $240,000 / $300,000 = 80%", "Imposto = valor tributável x taxa: $200,000 x 1,5% = $3,000"] },
            { title: "Rateio e área", bullets: ["$3,650 / 365 = $10 por dia; 120 dias = $1,200", "50 pés x 120 pés = 6,000 pés quadrados", "1 acre = 43,560 pés quadrados"] },
            { title: "Método", bullets: ["Sublinhe a pergunta", "Escreva a fórmula, use decimais", "Verifique se a resposta faz sentido"] }
          ],
          tryIt: "Só para praticar. Resolva no papel com uma calculadora: (1) comissão de 5% sobre $250,000; (2) LTV de um empréstimo de $180,000 para uma casa de $200,000; (3) imposto anual sobre um valor tributável de $150,000 a 2%; (4) parte do vendedor de um imposto anual de $1,825 durante 73 dias (ano de 365 dias); (5) pés quadrados de um lote de 80 pés por 100 pés. Respostas: $12,500; 90%; $3,000; $365; 8,000.",
          youCanNow: "resolver a matemática comum de um exame imobiliário e mostrar as suas contas.",
          quickCheck: [
            { objective: "O5", q: "Só para praticar: qual é a LTV de um empréstimo de $270,000 para uma casa de $300,000?", options: ["80%", "85%", "111%", "90%"], answer: 3, why: "$270,000 a dividir por $300,000 dá 0,90, ou seja 90%." },
            { objective: "O5", q: "Só para praticar: um lote tem 100 pés por 150 pés. Quantos pés quadrados tem?", options: ["250", "15,000", "1,500", "43,560"], answer: 1, why: "A área é comprimento vezes largura: 100 vezes 150 dá 15,000 pés quadrados." }
          ]
        },
        {
          title: "O seu plano de estudo e de exame",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Escrever um plano de estudo e de exame com datas a partir do programa oficial do exame do seu estado.",
          text: [
            "O seu estado ou a empresa que faz os exames publica um manual do candidato (candidate handbook). Normalmente tem o programa do exame (os temas e quantas perguntas há sobre cada um), as regras do dia do exame, o documento de identificação que tem de levar e como marcar o exame. Descarregue-o do site oficial, não de uma cópia que alguém publicou.",
            "Transforme o programa num plano. Liste todos os temas, dê a si mesmo uma nota de 1 a 3 em cada um e marque os seus três mais fracos. Ponha as datas importantes num calendário, contando para trás a partir de uma data-alvo para o exame: terminar as aulas, fazer o pedido, tirar as impressões digitais, marcar o exame. Depois marque blocos curtos de estudo em cada semana, com perguntas de prática e matemática todas as semanas.",
            "Os testes de prática ajudam mais quando revê cada resposta errada e escreve porque é que a resposta certa está certa. Cuidado com qualquer site que promete \"aprovação garantida\" ou vende as perguntas verdadeiras do exame; isso é burla ou batota, e os estados podem recusar uma licença por isso."
          ],
          steps: ["Descarregue o manual do candidato do seu estado a partir do site oficial.", "Copie os temas do programa do exame.", "Dê a si mesmo uma nota de 1 a 3 em cada tema; marque os seus três mais fracos.", "Escolha uma data-alvo para o exame e conte para trás até cada passo.", "Planeie blocos de estudo semanais com perguntas de prática e matemática.", "Reveja cada resposta errada e escreva porque é que a resposta certa está certa."],
          words: [["Manual do candidato", "o guia oficial do exame: temas, regras, identificação e marcação."], ["Programa do exame", "a lista dos temas do exame e quanto conta cada um."], ["Data-alvo", "a data em que quer fazer o exame; planeia contando para trás a partir dela."]],
          slides: [
            { title: "Comece pelo manual oficial", bullets: ["Programa do exame", "Regras e identificação para o dia do exame", "Como marcar o exame"] },
            { title: "Faça o plano", bullets: ["Dê uma nota de 1 a 3 a cada tema", "Marque os seus três mais fracos", "Conte para trás a partir de uma data-alvo para o exame"] },
            { title: "Pratique com inteligência", bullets: ["Perguntas de prática e matemática todas as semanas", "Reveja cada resposta errada", "Nada de \"aprovação garantida\" nem perguntas roubadas"] }
          ],
          sources: [SRC.arello, SRC.txTrec, SRC.caDre],
          tryIt: "Tarefa final: faça o seu Plano de Estudo e de Exame para a Licença Imobiliária: os passos do seu estado com datas e a página oficial, os temas do programa com os seus três mais fracos marcados, uma folha de regras sobre representação, habitação justa e contratos, cinco problemas de matemática resolvidos e um horário semanal até à data do exame.",
          youCanNow: "transformar o programa do exame do seu estado num plano de estudo e de exame com datas e segui-lo.",
          quickCheck: [
            { objective: "O6", q: "De onde deve vir a lista de temas do seu plano de estudo?", options: ["De uma publicação numa rede social", "Do programa oficial do exame do seu estado", "Dos temas de que mais gosta", "De um site que vende perguntas verdadeiras do exame"], answer: 1, why: "O programa oficial mostra o que o exame avalia de verdade." },
            { objective: "O6", q: "Continua a errar as perguntas de rateio nos testes de prática. Qual é o melhor plano?", options: ["Saltar o rateio; são só algumas perguntas", "Fazer o exame mais cedo", "Marcá-lo como tema fraco e juntar prática de matemática todas as semanas", "Comprar um pacote de \"aprovação garantida\""], answer: 2, why: "Marcar os temas fracos e praticá-los todas as semanas fecha a lacuna antes do dia do exame." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Contratos, matemática e o seu plano de exame",
        questions: [
          { objective: "O4", q: "Qual NÃO é uma das partes de um contrato válido?", options: ["Oferta e aceitação", "Contrapartida", "Um carimbo de notário em cada página", "Fim legal"], answer: 2, why: "Um contrato válido precisa de partes capazes, acordo dos dois lados, contrapartida e um fim legal; um carimbo em cada página não é uma delas." },
          { objective: "O4", q: "Uma proposta de compra diz que o negócio só avança se o comprador conseguir um empréstimo. Isto é:", options: ["Uma condição", "Um ónus", "Uma servidão", "Uma comissão"], answer: 0, why: "Uma condição é algo que tem de acontecer para o negócio avançar." },
          { objective: "O5", q: "Só para praticar: uma venda de $400,000 com 5% de comissão dá:", options: ["$2,000", "$4,000", "$200,000", "$20,000"], answer: 3, why: "$400,000 vezes 0,05 dá $20,000." },
          { objective: "O5", q: "Só para praticar: um valor tributável de $250,000 com uma taxa de imposto de 2% dá um imposto anual de:", options: ["$5,000", "$500", "$50,000", "$2,500"], answer: 0, why: "$250,000 vezes 0,02 dá $5,000." },
          { objective: "O6", q: "Qual é a melhor forma de usar um teste de prática?", options: ["Decorar só as respostas", "Rever cada resposta errada e escrever porque é que a certa está certa", "Fazê-lo uma vez e parar", "Partilhar as perguntas na internet"], answer: 1, why: "Rever porque é que cada resposta está certa constrói a compreensão que o exame verdadeiro avalia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para o Exame de Licença Imobiliária",
    questions: [
      { objective: "O1", q: "Quem dá as licenças de vendedor imobiliário nos Estados Unidos?", options: ["O governo federal", "O órgão regulador imobiliário de cada estado", "A National Association of Realtors (associação nacional de agentes)", "O seu banco local"], answer: 1, why: "A licença é dada por cada estado, através do seu órgão regulador imobiliário." },
      { objective: "O1", q: "Que passo existe na maioria dos estados antes de poder trabalhar como vendedor?", options: ["Ser dono de uma casa", "Vender cinco casas", "Passar no exame do estado e numa verificação de antecedentes", "Tornar-se corretor"], answer: 2, why: "A maioria dos estados exige o exame e uma verificação de antecedentes, e depois trabalho sob um corretor." },
      { objective: "O1", q: "Um vendedor tem de trabalhar sob:", options: ["Um corretor com licença", "Um banco", "Um inspetor de casas", "Uma empresa de títulos"], answer: 0, why: "Os vendedores são supervisionados por um corretor com licença." },
      { objective: "O2", q: "Qual é propriedade móvel?", options: ["Um aquecedor central embutido", "Uma árvore no quintal", "O terreno", "Um sofá na sala"], answer: 3, why: "A propriedade móvel pode mudar de sítio; o sofá não está preso." },
      { objective: "O2", q: "A forma mais completa de ser dono é:", options: ["Servidão", "Fee simple", "Ónus", "Arrendamento"], answer: 1, why: "Fee simple dá ao dono o conjunto mais completo de direitos." },
      { objective: "O2", q: "Que forma de descrever o terreno usa um mapa registado de um loteamento?", options: ["Metes and bounds", "Fee simple", "Lote e quarteirão", "Rateio"], answer: 2, why: "Lote e quarteirão refere-se aos lotes num mapa registado de um loteamento." },
      { objective: "O2", q: "Donos em conjunto cujas partes NÃO passam automaticamente de um para o outro quando morrem têm o título em:", options: ["Tenancy in common", "Joint tenancy", "Corretagem", "Ónus"], answer: 0, why: "A tenancy in common não tem direito de sobrevivência." },
      { objective: "O3", q: "Qual é um dos deveres fiduciários de um agente para com o cliente?", options: ["Dizer ao outro lado o preço mais baixo do cliente", "Lealdade", "Escolher o credor pelo cliente", "Ignorar as instruções legais do cliente"], answer: 1, why: "A lealdade é um dever fiduciário principal (OLDCAR)." },
      { objective: "O3", q: "Dizer aos donos para venderem depressa porque um certo grupo está a chegar ao bairro chama-se:", options: ["Steering", "Redlining", "Dupla representação", "Blockbusting"], answer: 3, why: "O blockbusting pressiona os donos a vender criando medo de um grupo que está a chegar." },
      { objective: "O3", q: "Recusar empréstimos numa zona por causa de quem lá vive chama-se:", options: ["Redlining", "Rateio", "Steering", "Escrow"], answer: 0, why: "Redlining é recusar empréstimos ou seguros em certas zonas; é ilegal." },
      { objective: "O3", q: "Um comprador que usa cadeira de rodas pede para ver uma casa. Segundo a Fair Housing Act, você:", options: ["Mostra só casas com rampas sem perguntar", "Recusa por causa das escadas", "Mostra a casa nas mesmas condições que a qualquer outra pessoa", "Pede uma declaração do médico"], answer: 2, why: "A deficiência é uma classe protegida, por isso o comprador tem tratamento igual." },
      { objective: "O4", q: "Um contrato assinado por um menor, que o menor pode cancelar, é:", options: ["Nulo", "Anulável", "Totalmente cumprível", "Um ónus"], answer: 1, why: "Anulável quer dizer válido, mas um dos lados o pode cancelar." },
      { objective: "O4", q: "Até quantos dias úteis depois do pedido de empréstimo o credor tem de entregar a Loan Estimate?", options: ["Três", "Dez", "Trinta", "Um"], answer: 0, why: "O CFPB diz que a Loan Estimate chega até três dias úteis depois do pedido." },
      { objective: "O4", q: "O sinal (earnest money) é:", options: ["A comissão do agente", "O imposto predial anual", "Um ónus sobre a casa", "Um depósito que mostra que o comprador está a falar a sério"], answer: 3, why: "O sinal é o depósito de boa-fé do comprador." },
      { objective: "O5", q: "Só para praticar: um agente recebe 50% de uma comissão de $9,000. O agente recebe:", options: ["$900", "$9,000", "$4,500", "$18,000"], answer: 2, why: "$9,000 vezes 0,50 dá $4,500." },
      { objective: "O5", q: "Só para praticar: um empréstimo de $160,000 para uma casa de $200,000 tem uma LTV de:", options: ["60%", "125%", "40%", "80%"], answer: 3, why: "$160,000 a dividir por $200,000 dá 0,80, ou seja 80%." },
      { objective: "O5", q: "Só para praticar: o imposto anual é $3,650 (ano de 365 dias). O vendedor foi dono da casa durante 30 dias. A parte do vendedor é:", options: ["$300", "$365", "$100", "$3,000"], answer: 0, why: "$3,650 a dividir por 365 dá $10 por dia; 30 dias dão $300." },
      { objective: "O5", q: "Quantos pés quadrados tem um acre?", options: ["5,280", "43,560", "10,000", "640"], answer: 1, why: "Um acre tem 43,560 pés quadrados." },
      { objective: "O6", q: "O manual do candidato do seu estado normalmente diz-lhe:", options: ["As perguntas exatas do exame", "Que casa comprar", "O programa do exame e as regras do dia do exame", "O seu salário futuro"], answer: 2, why: "O manual dá o programa, as regras, a identificação necessária e como marcar o exame." },
      { objective: "O6", q: "Um bom plano de estudo começa por:", options: ["Escolher uma data-alvo para o exame e contar para trás até cada passo", "Comprar o curso mais caro", "Estudar só os seus temas preferidos", "Esperar até se sentir pronto"], answer: 0, why: "Planear para trás a partir de uma data-alvo põe cada passo e cada bloco de estudo no calendário." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 4, 7, 8, 12, 14, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Passos oficiais", objective: "O1", notYet: "Faltam passos, estão fora de ordem ou foram copiados de um site não oficial.", meets: "Todos os passos da página do órgão regulador do estado estão listados por ordem, com o endereço da página e a data em que foi verificada.", exceeds: "Também anota os custos e os documentos de cada passo exatamente como a página oficial os indica." },
      { name: "Termos principais", objective: "O2", notYet: "Vários termos de propriedade ou de posse estão errados ou faltam na folha de regras.", meets: "A folha de regras define corretamente, com palavras simples, os termos principais de propriedade e de posse.", exceeds: "Cada termo tem um exemplo da vida real inventado pelo aluno." },
      { name: "Representação e habitação justa", objective: "O3", notYet: "Os deveres fiduciários ou as sete classes protegidas federais faltam ou estão errados.", meets: "Lista os deveres e as sete classes federais, mais o steering, o blockbusting e o redlining.", exceeds: "Junta outras classes protegidas do estado ou da cidade do aluno, com a fonte." },
      { name: "Contrato e fecho", objective: "O4", notYet: "Faltam partes do contrato ou passos do fecho, ou os prazos da Loan Estimate e da Closing Disclosure estão errados.", meets: "Lista todas as partes de um contrato válido e os passos do fecho por ordem, com os prazos certos dos documentos.", exceeds: "Junta as condições e os seus prazos a partir de um exemplo de proposta." },
      { name: "Matemática", objective: "O5", notYet: "Menos de 4 dos 5 problemas estão certos, ou as contas não estão mostradas.", meets: "Pelo menos 4 de 5 problemas estão certos, com as contas mostradas.", exceeds: "Os 5 certos, mais um problema extra escrito e resolvido pelo aluno." },
      { name: "Plano com datas", objective: "O6", notYet: "Não há data-alvo, ou os temas não vêm do programa oficial do exame.", meets: "Cobre todos os temas do programa, marca os três mais fracos e tem blocos de estudo semanais até uma data-alvo.", exceeds: "Inclui datas para rever testes de prática e uma data de exame de reserva." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que terminam a formação aprovada pelo estado antes da licença em 6 meses (inquérito de seguimento)",
      "Alunos que passam no exame imobiliário do estado, e em que tentativa (dito pelo próprio aluno)",
      "Alunos que têm licença e trabalham sob um corretor patrocinador em 12 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador para ler a página oficial do órgão regulador do estado e o manual do candidato",
      "Papel, caneta e uma calculadora simples",
      "Um calendário (em papel ou no telefone) para o plano de estudo e de exame",
      "Cerca de 60 a 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Se o grupo for todo do mesmo estado, abram juntos a página do órgão regulador desse estado na Lição 1 e usem o seu manual do candidato na Lição 6.",
      "Deixe claro que este curso prepara os alunos; não substitui as aulas aprovadas pelo estado antes da licença nem dá uma licença.",
      "Faça a lição de matemática em pares no quadro: um resolve, o outro verifica os passos.",
      "Use dramatizações para as situações de habitação justa; pare e diga o nome da regra de cada vez.",
      "Não dê conselhos sobre comprar propriedades, investir, empréstimos ou impostos; encaminhe os alunos para fontes oficiais e profissionais com licença.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
