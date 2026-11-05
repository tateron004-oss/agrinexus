"use strict";

// Koach Learn course (Portuguese translation of shared/insurance-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US state insurance licensing (NAIC, NIPR, Texas Department of Insurance, 18 U.S.C. 1033); many readers are immigrants in the US.

const SRC = {
  naicDepts: { name: "NAIC: Find your state insurance department", url: "https://content.naic.org/state-insurance-departments" },
  nipr: { name: "NIPR: National Insurance Producer Registry (apply for and renew producer licenses)", url: "https://nipr.com/" },
  tdiAgent: { name: "Texas Department of Insurance: Agent licenses", url: "https://www.tdi.texas.gov/agent/index.html" },
  tdiLifeApply: { name: "Texas Department of Insurance: How to apply for a general lines life, accident, health and HMO license", url: "https://www.tdi.texas.gov/agent/general-life-apply.html" },
  usc1033: { name: "18 U.S.C. 1033 (Cornell Legal Information Institute)", url: "https://www.law.cornell.edu/uscode/text/18/1033" },
  naicUtpa: { name: "NAIC Model Law 880: Unfair Trade Practices Act", url: "https://content.naic.org/sites/default/files/model-law-880.pdf" }
};

module.exports = {
  id: "insurance-license-prep-pt",
  lang: "pt",
  translationOf: "insurance-license-prep",
  category: "Workforce Development",
  name: "Preparação para o Exame de Licença de Agente de Seguros",
  skills: "Escolher um ramo de licença, Encontrar os passos de licenciamento do seu estado, Explicar termos de seguros, Calcular sinistros de prática, Reconhecer práticas de venda desonestas, Planear o exame",
  outcome: "preparar-se para o exame de licença de agente de seguros do seu estado: escolher o ramo de licença certo, encontrar os passos oficiais e o programa do exame do seu estado, explicar os termos principais, calcular sinistros de prática, reconhecer práticas de venda desonestas e seguir um plano de estudo e de exame com datas.",
  about: [
    "Este curso é para adultos que querem vender seguros como agente licenciado, também chamado produtor (producer): pessoas à procura de emprego, pessoas que mudam de carreira, pessoas que voltam da prisão, veteranos e pessoas que querem abrir a sua própria agência. Nos Estados Unidos, os agentes de seguros recebem a licença de cada estado, não do governo federal.",
    "Você vai aprender os principais ramos de licença, como encontrar os passos e o programa do exame do seu estado, as palavras e ideias principais que os exames avaliam, como calcular sinistros de prática com franquias e limites, e as regras de ética que protegem os clientes. No final, escreve o seu próprio plano de estudo e de exame com datas reais.",
    "Este curso PREPARA você para o exame. Não dá uma licença e não substitui nenhum curso de pré-licenciamento que o seu estado possa exigir. Os requisitos, as taxas e os detalhes do exame são definidos pelo departamento de seguros do seu estado e mudam, por isso cada lição indica a página oficial. Nada aqui é um conselho sobre comprar seguros ou investimentos."
  ],
  finalTask: "Escreva um Plano de Estudo e de Exame para a Licença de Seguros do seu estado, numa página: (1) o ramo de licença que vai tirar e porquê; (2) os passos oficiais do seu estado, por ordem (educação de pré-licenciamento, se for exigida, exame e empresa de exames, impressões digitais ou verificação de antecedentes, candidatura, nomeação), cada um com o endereço oficial na internet; (3) os temas e os pesos do programa do exame do seu estado; (4) um horário de estudo semanal com datas, uma data-alvo para o exame e pelo menos duas datas de testes de prática com uma meta de pontuação; (5) três sinistros de prática que calculou corretamente e três regras de ética com as suas palavras.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos nos Estados Unidos que querem trabalhar como agente de seguros (produtor) num centro de atendimento telefónico, num banco, numa agência ou numa seguradora, ou que querem abrir a sua própria agência. Grupo misto: pessoas à procura de emprego, pessoas que mudam de carreira, veteranos, pessoas que voltam da prisão, imigrantes e donos de pequenos negócios.",
    startingPoint: "Já compraram seguro de carro, de arrendatário ou de saúde, mas raramente leram uma apólice. Não sabem como funciona o licenciamento, que licença tirar nem as palavras usadas no exame. Sabem fazer contas simples de percentagens com alguma ajuda.",
    gap: "Muitas pessoas pagam um curso de pré-licenciamento ou um exame sem saber que licença serve para o trabalho, o que o seu estado exige ou como o exame é feito, e chumbam ou desistem. Conhecer o caminho, os termos principais, as contas dos sinistros e as regras de ética transforma um processo confuso num plano com datas, e leva a um trabalho que muitas vezes não exige curso superior.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 8.º ano); cada palavra do exame é explicada",
      "Aparelhos: um telefone ou um computador da biblioteca; papel, caneta e uma calculadora simples servem para todas as tarefas",
      "Tempo: lições de 4 a 6 minutos",
      "O licenciamento é feito por estado: os passos, as horas de pré-licenciamento, as taxas, a empresa de exames e a nota para passar mudam, por isso cada aluno verifica a página oficial do seu estado",
      "Verificação de antecedentes: alguns alunos têm registo criminal; o curso explica a regra com honestidade e indica o departamento do seu estado",
      "Nenhum conselho sobre que seguro ou investimento alguém deve comprar; a prática usa números inventados"
    ],
    prerequisites: "Nenhum. Quem quiser ajuda com contas de percentagens pode fazer primeiro o curso \"Matemática do Dia a Dia\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um trabalho ou um produto de seguros", action: "identificar que ramo de licença e que função lhe correspondem", standard: "acertando pelo menos 5 de 6 exemplos" },
    { id: "O2", condition: "Para o seu próprio estado", action: "encontrar os passos oficiais de licenciamento, a empresa de exames e o programa do exame", standard: "escrevendo cada passo com o seu endereço oficial na internet" },
    { id: "O3", condition: "Com uma lista de palavras e ideias do exame", action: "explicar com palavras simples os termos principais de seguros e os princípios do contrato", standard: "com o significado certo em pelo menos 8 de 10" },
    { id: "O4", condition: "Com um sinistro de prática com franquia, cosseguro ou limite da apólice", action: "calcular quanto paga a seguradora e quanto paga o segurado", standard: "certo até ao dólar em 3 sinistros de prática" },
    { id: "O5", condition: "Com uma situação de venda ou de atendimento", action: "reconhecer práticas desonestas ou ilegais e escolher a ação honesta", standard: "acertando pelo menos 4 de 5 situações" },
    { id: "O6", condition: "Usando os passos oficiais e o programa do exame do seu estado", action: "escrever um plano de estudo e de exame com datas para o seu exame de licença", standard: "cobrindo cada passo oficial, cada tema do programa e pelo menos duas datas de testes de prática" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O seu caminho para uma licença de seguros",
      lessons: [
        {
          title: "O que faz um agente e que ramo de licença você precisa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher o ramo de licença que serve para o trabalho de seguros que você quer.",
          text: [
            "Um agente de seguros, chamado produtor (producer) na lei, vende, procura clientes ou negocia seguros para os clientes. Todos os estados exigem uma licença para isto. Um agente exclusivo (captive agent) vende para uma só empresa. Um agente independente vende para várias empresas e muitas vezes gere um pequeno negócio. O agente também tem de ser nomeado por cada seguradora para a qual vende.",
            "Os estados dão licenças por ramo de autorização (line of authority). Os quatro ramos principais mais comuns são Vida (Life), Acidentes e Saúde (doença), Propriedade (Property) e Responsabilidade Civil (Casualty). Muitas pessoas começam com Vida e Saúde juntas, ou com Propriedade e Responsabilidade Civil juntas. Alguns estados também têm uma licença menor, Personal Lines, só para seguros de casa e de carro.",
            "Vida cobre a morte e algumas apólices de poupança de longo prazo. Acidentes e Saúde cobre despesas médicas, rendimento por incapacidade e custos parecidos. Propriedade cobre danos em coisas que você tem, como uma casa ou um carro. Responsabilidade Civil cobre a responsabilidade (liability), que é o dinheiro que você deve se ferir alguém ou danificar as coisas dessa pessoa.",
            "Outros trabalhos de seguros usam uma licença diferente. Um perito de sinistros (adjuster) investiga e resolve sinistros. Vender alguns produtos de investimento, como as anuidades variáveis (variable annuities), também exige uma licença de valores mobiliários (securities). Veja a lista de tipos de licença do seu estado antes de pagar qualquer curso."
          ],
          words: [["Produtor (producer)", "a palavra legal para um agente ou corretor de seguros licenciado que vende seguros."], ["Ramo de autorização", "um tipo de seguro que a sua licença deixa você vender, como Vida ou Propriedade."], ["Nomeação (appointment)", "a aprovação oficial de uma seguradora para você vender os produtos dela."], ["Responsabilidade (liability)", "o dinheiro que você deve por lei a alguém se o ferir ou danificar os bens dessa pessoa."], ["Perito de sinistros (adjuster)", "uma pessoa que investiga e resolve sinistros de seguros; normalmente é uma licença separada."]],
          slides: [
            { title: "Os agentes são produtores", bullets: ["Vendem, procuram clientes ou negociam seguros", "Todos os estados exigem uma licença", "Cada empresa para a qual vende tem de o nomear"] },
            { title: "Exclusivo ou independente", bullets: ["Exclusivo: vende para uma só empresa", "Independente: vende para várias empresas, muitas vezes gere um negócio"] },
            { title: "Os quatro ramos principais", bullets: ["Vida: paga quando alguém morre", "Acidentes e Saúde: despesas médicas, incapacidade", "Propriedade: danos nas suas coisas", "Responsabilidade Civil: quando você causa danos a outros"] },
            { title: "Verifique antes de pagar", bullets: ["Os peritos de sinistros precisam de outra licença", "Produtos variáveis também exigem licença de valores mobiliários", "Encontre primeiro a lista de tipos de licença do seu estado"] }
          ],
          tryIt: "Escreva três trabalhos de seguros a que poderia candidatar-se (por exemplo, agente num centro de atendimento a vender seguro de carro, funcionário de banco a vender seguro de vida, ou a sua própria agência). Ao lado de cada um, escreva o ramo ou ramos de licença que exige.",
          youCanNow: "dizer o que faz um produtor de seguros e escolher o ramo de licença que serve para um trabalho.",
          quickCheck: [
            { objective: "O1", q: "Um anúncio de emprego diz que vai vender seguros de carro e de casa. Que ramos de licença servem?", options: ["Vida e Saúde", "Propriedade e Responsabilidade Civil", "Só valores mobiliários", "Só perito de sinistros"], answer: 1, why: "As apólices de carro e de casa cobrem danos na propriedade e responsabilidade perante outros, que são Propriedade e Responsabilidade Civil." },
            { objective: "O1", q: "O que é um agente exclusivo (captive agent)?", options: ["Um agente que vende para uma só seguradora", "Um agente sem licença", "Um agente que só resolve sinistros", "Um agente que trabalha para o estado"], answer: 0, why: "Um agente exclusivo representa uma empresa; um agente independente representa várias." }
          ]
        },
        {
          title: "Encontrar os passos oficiais de licenciamento do seu estado",
          objectives: ["O2"],
          minutes: 6,
          goal: "Encontrar em páginas oficiais os passos de licenciamento, a empresa de exames e o programa do exame do seu estado.",
          text: [
            "O departamento de seguros do seu estado faz as regras. Para o encontrar, use a página da NAIC (National Association of Insurance Commissioners, a associação nacional dos reguladores de seguros) que tem ligações para todos os departamentos estaduais. Procure páginas com nomes como producer licensing, agent licensing ou how to apply.",
            "A maioria dos estados segue um caminho parecido: um curso de pré-licenciamento (exigido em muitos estados, não em todos), um exame estadual feito por uma empresa de exames, impressões digitais ou verificação de antecedentes, uma candidatura e depois a nomeação por uma seguradora. Depois de ter a licença, você renova-a e faz educação contínua. Por exemplo, o Texas, quando verificámos em outubro de 2026, fazia o exame através da Pearson VUE, exigia impressões digitais e recebia candidaturas pela Sircon ou pela NIPR só depois de passar no exame.",
            "A empresa de exames publica um manual do candidato (candidate handbook) e um programa do exame (content outline) para o seu estado. O programa lista cada tema e quantas perguntas vêm de cada um. É a ferramenta de estudo mais útil que tem, e é gratuita.",
            "Se tem registo criminal, seja honesto na candidatura. Uma lei federal (18 U.S.C. 1033) diz que uma pessoa condenada por um crime grave (felony) que envolva desonestidade ou quebra de confiança precisa do consentimento escrito de um regulador de seguros para trabalhar em seguros. O departamento do seu estado explica como pedir. Não deixe que um vendedor de cursos lhe diga que isso não importa."
          ],
          steps: ["Abra a página da NAIC com os departamentos estaduais de seguros e escolha o seu estado.", "Encontre a página de licenciamento de produtores ou agentes e a lista de tipos de licença.", "Escreva cada passo: educação de pré-licenciamento, exame, impressões digitais, candidatura, nomeação.", "Encontre o nome da empresa de exames e descarregue o manual do candidato e o programa do exame, que são gratuitos.", "Escreva o endereço oficial na internet de cada passo e a data em que o verificou."],
          words: [["NAIC", "National Association of Insurance Commissioners: o grupo dos reguladores de seguros dos estados."], ["Educação de pré-licenciamento", "um curso que alguns estados exigem antes de poder fazer o exame de licença."], ["Programa do exame (content outline)", "a lista dos temas do exame e de quantas perguntas vêm de cada um."], ["NIPR", "National Insurance Producer Registry: um site que muitos estados usam para candidaturas e renovações de licenças."], ["Educação contínua", "aulas que os agentes licenciados têm de fazer para renovar a licença."]],
          slides: [
            { title: "Comece na fonte oficial", bullets: ["O departamento de seguros do seu estado faz as regras", "Encontre-o a partir da página de departamentos da NAIC", "Procure licenciamento de produtores ou agentes"] },
            { title: "O caminho habitual", bullets: ["Curso de pré-licenciamento (muitos estados)", "Exame estadual com uma empresa de exames", "Impressões digitais ou verificação de antecedentes", "Candidatura e depois nomeação por uma seguradora"] },
            { title: "Obtenha o programa gratuito", bullets: ["A empresa de exames publica um manual do candidato", "O programa lista os temas e o número de perguntas", "Estude seguindo o programa"] },
            { title: "Um registo não é o fim", bullets: ["Seja honesto na candidatura", "Alguns crimes graves exigem consentimento escrito de um regulador", "Pergunte ao departamento do seu estado como fazer"] }
          ],
          sources: [SRC.naicDepts, SRC.nipr, SRC.tdiAgent, SRC.tdiLifeApply, SRC.usc1033],
          tryIt: "Abra a página da NAIC, escolha o seu estado e encontre a página de licenciamento de produtores. Escreva cada passo de licenciamento por ordem, o nome da empresa de exames e o endereço na internet do programa do exame.",
          youCanNow: "encontrar os passos oficiais de licenciamento, a empresa de exames e o programa do exame do seu estado.",
          quickCheck: [
            { objective: "O2", q: "Onde encontra os verdadeiros passos de licenciamento do seu estado?", options: ["Numa publicação nas redes sociais", "Num anúncio de um curso de pré-licenciamento", "Na página oficial do departamento de seguros do seu estado", "Com um amigo licenciado noutro estado"], answer: 2, why: "O departamento de seguros de cada estado define e publica as suas próprias regras de licenciamento." },
            { objective: "O2", q: "Que documento gratuito lhe diz que temas há no exame do seu estado?", options: ["Uma fatura de seguro de carro", "Uma página de declarações de uma apólice", "Um folheto de um recrutador", "O programa do exame da empresa de exames"], answer: 3, why: "O programa do exame lista cada tema e quantas perguntas vêm de cada um." }
          ]
        },
        {
          title: "Termos principais e como funciona um contrato de seguro",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explicar com as suas palavras os termos principais de seguros e as ideias do contrato.",
          text: [
            "O seguro passa o risco de uma pessoa para uma seguradora. O segurado paga um prémio. Em troca, a seguradora promete pagar certas perdas. A apólice é o contrato escrito, e a página de declarações (declarations page) lista quem e o que está coberto, os limites e o prémio.",
            "Os exames avaliam algumas ideias grandes. Interesse segurável: você tem de perder dinheiro se a perda acontecer. Indemnização: o seguro põe você onde estava, não melhor. Máxima boa-fé: os dois lados têm de ser honestos, por isso uma mentira na candidatura (declaração falsa, misrepresentation) pode anular a cobertura. Subscrição (underwriting): a seguradora estuda o risco e decide se o aceita e a que preço.",
            "Uma apólice de seguro é um contrato, por isso precisa de oferta e aceitação, contrapartida (o prémio e a promessa), partes capazes e um fim legal. É também um contrato de adesão: a seguradora escreve-o e o cliente aceita-o como está, por isso as palavras pouco claras costumam ser lidas a favor do cliente.",
            "Aprenda estas palavras com cartões de memória. Os exames muitas vezes dão uma pequena história e perguntam que ideia ela mostra."
          ],
          words: [["Prémio", "o dinheiro que o segurado paga pela cobertura."], ["Interesse segurável", "ter uma perda real de dinheiro se o acontecimento seguro acontecer."], ["Indemnização", "pagar a perda para você ficar onde estava, não melhor."], ["Subscrição (underwriting)", "estudar um risco para decidir se o segura e a que preço."], ["Página de declarações", "a página da apólice que lista quem está coberto, o que está coberto, os limites e o prémio."], ["Contrato de adesão", "um contrato escrito por um lado e aceite como está pelo outro."]],
          slides: [
            { title: "O seguro passa o risco", bullets: ["O segurado paga um prémio", "A seguradora promete pagar as perdas cobertas", "A apólice é o contrato"] },
            { title: "Ideias grandes no exame", bullets: ["Interesse segurável: você pode perder dinheiro", "Indemnização: voltar para onde estava", "Máxima boa-fé: os dois lados honestos", "Subscrição: decidir se aceita e a que preço"] },
            { title: "Uma apólice é um contrato", bullets: ["Oferta e aceitação, contrapartida", "Partes capazes, fim legal", "Adesão: palavras pouco claras favorecem o cliente"] }
          ],
          tryIt: "Faça 10 cartões de memória em papel ou no telefone: de um lado a palavra (prémio, interesse segurável, indemnização, subscrição, página de declarações, contrapartida, adesão, declaração falsa, segurado, seguradora), do outro o significado numa linha, com as suas palavras. Teste-se até acertar 8 de 10.",
          youCanNow: "explicar com palavras simples as palavras principais de seguros e as partes de um contrato de seguro.",
          quickCheck: [
            { objective: "O3", q: "Um homem quer comprar seguro contra incêndio para a casa de um desconhecido. Que ideia o impede?", options: ["Indemnização", "Subscrição", "Contrapartida", "Interesse segurável"], answer: 3, why: "Ele não perderia dinheiro se a casa do desconhecido ardesse, por isso não tem interesse segurável." },
            { objective: "O3", q: "Depois de um roubo coberto, a seguradora paga o valor da televisão roubada, não uma televisão maior. Que ideia é esta?", options: ["Indemnização", "Adesão", "Nomeação", "Responsabilidade"], answer: 0, why: "A indemnização põe o segurado onde estava, não melhor." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O seu caminho para uma licença de seguros",
        questions: [
          { objective: "O1", q: "Vai vender seguros de vida temporários e seguros de rendimento por incapacidade. Que ramos servem?", options: ["Propriedade e Responsabilidade Civil", "Vida e Acidentes e Saúde", "Só Personal Lines", "Perito de sinistros"], answer: 1, why: "As apólices de vida exigem o ramo Vida, e o rendimento por incapacidade é Acidentes e Saúde." },
          { objective: "O1", q: "O que faz a nomeação por uma seguradora?", options: ["Substitui o exame estadual", "Dá uma licença de valores mobiliários", "Aprova oficialmente você para vender os produtos dessa empresa", "Define a taxa de licenciamento do seu estado"], answer: 2, why: "A licença vem do estado; depois cada seguradora nomeia você para vender para ela." },
          { objective: "O2", q: "Quem dá as licenças de agente de seguros nos Estados Unidos?", options: ["O departamento de seguros de cada estado", "O governo federal", "A seguradora onde trabalha", "A empresa de exames"], answer: 0, why: "Os produtores de seguros recebem a licença estado a estado." },
          { objective: "O2", q: "Você tem uma condenação antiga por fraude, um crime grave. Qual é o primeiro passo honesto?", options: ["Deixá-la fora da candidatura", "Desistir de trabalhar em seguros", "Usar o nome de um amigo", "Perguntar ao departamento do seu estado como pedir o consentimento escrito de um regulador"], answer: 3, why: "A lei federal exige consentimento escrito para algumas condenações, e o departamento estadual explica como pedir." },
          { objective: "O3", q: "Numa candidatura, um comprador esconde um problema de saúde grave. Que princípio ele violou?", options: ["Indemnização", "Interesse segurável", "Máxima boa-fé", "Adesão"], answer: 2, why: "Os dois lados têm de ser honestos; uma mentira importante pode anular a cobertura." }
        ]
      }
    },
    {
      name: "Capítulo 2: O conteúdo do exame e estar pronto para o teste",
      lessons: [
        {
          title: "Bases de vida e saúde e as contas dos sinistros de saúde",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Calcular quem paga o quê num sinistro de saúde de prática com franquia e cosseguro.",
          text: [
            "Seguro de vida: o seguro de vida temporário (term life) cobre um número fixo de anos e não tem valor de resgate. O seguro de vida permanente, como o seguro de vida inteira (whole life), pode durar a vida toda e acumula valor de resgate (cash value). O beneficiário é a pessoa que recebe o capital por morte; um beneficiário suplente (contingent beneficiary) recebe-o se o primeiro já tiver morrido. O tomador da apólice controla a apólice e pode ser uma pessoa diferente do segurado.",
            "O seguro de saúde tem as suas próprias palavras. A franquia (deductible) é o que você paga cada ano antes de o plano começar a dividir os custos. O cosseguro (coinsurance) é a percentagem que você divide depois disso, como 80/20: o plano paga 80% e você paga 20%. O copagamento (copay) é um valor fixo em dólares por consulta. O máximo de despesas próprias (out-of-pocket maximum) é o máximo que você paga num ano pelos cuidados cobertos.",
            "Só para prática, números inventados: uma conta coberta de $3,000, uma franquia de $1,000 ainda não paga, cosseguro 80/20. Você paga os primeiros $1,000. Os $2,000 que faltam são divididos: o plano paga 80% ($1,600) e você paga 20% ($400). Você paga $1,400 no total; o plano paga $1,600. Verifique: $1,400 + $1,600 = $3,000."
          ],
          steps: ["Escreva o valor da conta coberta.", "Tire a parte da franquia que ainda falta pagar; o segurado paga essa parte.", "Divida o que sobra pelas percentagens do cosseguro.", "Some a franquia e o cosseguro do segurado; pare no máximo de despesas próprias.", "Verifique que as duas partes somam o valor da conta."],
          words: [["Beneficiário", "a pessoa que recebe o dinheiro quando a pessoa segura morre."], ["Valor de resgate (cash value)", "a poupança acumulada dentro de uma apólice de vida permanente."], ["Franquia (deductible)", "o valor que você paga antes de o seguro começar a pagar."], ["Cosseguro (coinsurance)", "a percentagem do custo que você divide com o plano depois da franquia."], ["Máximo de despesas próprias", "o máximo que você paga num ano do plano pelos cuidados cobertos."]],
          slides: [
            { title: "Palavras do seguro de vida", bullets: ["Temporário: anos fixos, sem valor de resgate", "Vida inteira: para toda a vida, acumula valor de resgate", "Beneficiário e beneficiário suplente"] },
            { title: "Palavras do seguro de saúde", bullets: ["Franquia: você paga primeiro", "Cosseguro: percentagem dividida, como 80/20", "Copagamento: valor fixo por consulta", "Máximo de despesas próprias: o teto anual"] },
            { title: "Sinistro de prática (inventado)", bullets: ["Conta de $3,000, franquia de $1,000, 80/20", "Você: $1,000 + 20% de $2,000 = $1,400", "Plano: 80% de $2,000 = $1,600"] }
          ],
          tryIt: "Só para prática: calcule este sinistro em papel. Uma conta coberta de $5,000, uma franquia de $500 ainda não paga, cosseguro 80/20. Quanto paga o segurado e quanto paga o plano? (Resposta: segurado $500 + $900 = $1,400; plano $3,600.)",
          youCanNow: "explicar as principais palavras do seguro de vida e de saúde e calcular um sinistro de saúde com franquia e cosseguro.",
          quickCheck: [
            { objective: "O4", q: "Só para prática: uma conta coberta de $2,000, uma franquia de $500 ainda não paga, cosseguro 80/20. Quanto paga o segurado?", options: ["$400", "$500", "$800", "$1,500"], answer: 2, why: "A franquia de $500 mais 20% dos $1,500 que faltam ($300) dá $800." },
            { objective: "O3", q: "Que apólice de seguro de vida acumula valor de resgate?", options: ["Vida inteira", "Temporário de dez anos", "Temporário de vinte anos", "Acidentes em viagem"], answer: 0, why: "As apólices permanentes, como a de vida inteira, acumulam valor de resgate; as temporárias não." }
          ]
        },
        {
          title: "Bases de propriedade e responsabilidade civil e as contas dos sinistros",
          objectives: ["O1", "O4"],
          minutes: 6,
          goal: "Calcular quanto paga uma apólice de propriedade ou de responsabilidade automóvel num sinistro de prática.",
          text: [
            "As apólices de propriedade pagam danos em coisas que você tem. O custo de substituição (replacement cost) paga para trocar o objeto por um novo do mesmo tipo. O valor real em dinheiro (actual cash value) paga o custo de substituição menos a depreciação (desgaste e idade). Só para prática: um sofá custa $1,200 novo e tem $500 de depreciação, por isso o seu valor real em dinheiro é $700. A franquia é tirada do pagamento.",
            "A cobertura de responsabilidade civil (liability) paga a outras pessoas quando você é legalmente responsável por lhes causar danos. Os limites de responsabilidade automóvel são muitas vezes escritos com três números, como 25/50/25: até $25,000 pelos ferimentos de uma pessoa, até $50,000 por todos os ferimentos num acidente, e até $25,000 por danos materiais. O seu estado define os mínimos; verifique-os.",
            "Só para prática: um condutor com limites 25/50/25 fere uma pessoa, cujas contas são de $40,000. A apólice paga $25,000, o seu limite por pessoa. O condutor pode ter de pagar os outros $15,000 do seu bolso. É por isso que os agentes explicam os limites com cuidado."
          ],
          steps: ["Encontre o valor da perda e o tipo de cobertura.", "Para o valor real em dinheiro, tire a depreciação do custo de substituição.", "Tire a franquia.", "Compare com o limite da apólice; a seguradora nunca paga mais do que o limite.", "Tudo o que passar do limite é o segurado que paga."],
          words: [["Custo de substituição", "o custo para trocar um objeto por um novo do mesmo tipo e qualidade."], ["Valor real em dinheiro (actual cash value)", "o custo de substituição menos a depreciação."], ["Depreciação", "a perda de valor por causa da idade e do desgaste."], ["Limite da apólice", "o máximo que a seguradora paga por uma perda coberta."], ["Limites divididos (split limits)", "limites de responsabilidade automóvel escritos com três números, como 25/50/25."]],
          slides: [
            { title: "Propriedade: duas formas de pagar", bullets: ["Custo de substituição: objeto novo do mesmo tipo", "Valor real em dinheiro: custo de substituição menos depreciação", "A franquia é tirada do pagamento"] },
            { title: "Responsabilidade civil perante outros", bullets: ["Paga quando você causa danos a outros e a lei o responsabiliza", "Limites automóvel como 25/50/25", "O seu estado define os mínimos"] },
            { title: "Sinistro de prática (inventado)", bullets: ["25/50/25, uma pessoa ferida, $40,000 em contas", "A apólice paga o limite de $25,000 por pessoa", "O condutor pode dever os outros $15,000"] }
          ],
          tryIt: "Só para prática: um incêndio na cozinha causa $18,000 de danos cobertos. A apólice da casa paga o custo de substituição, a franquia é de $1,000 e o limite da habitação é de $250,000. Escreva quanto paga a seguradora e quanto paga o dono da casa. (Resposta: seguradora $17,000; dono da casa $1,000.)",
          youCanNow: "distinguir a cobertura de propriedade da de responsabilidade civil e calcular sinistros de prática com depreciação, franquias e limites.",
          quickCheck: [
            { objective: "O4", q: "Só para prática: uma televisão custa $900 nova e tem $300 de depreciação. Qual é o seu valor real em dinheiro?", options: ["$300", "$900", "$1,200", "$600"], answer: 3, why: "O valor real em dinheiro é o custo de substituição menos a depreciação: $900 - $300 = $600." },
            { objective: "O1", q: "Um cliente fere sem querer um estafeta em casa e é processado. Que tipo de cobertura responde?", options: ["Vida", "Responsabilidade civil (liability)", "Rendimento por incapacidade", "Danos na própria casa"], answer: 1, why: "A cobertura de responsabilidade civil paga a outros quando o segurado é legalmente responsável por lhes causar danos." }
          ]
        },
        {
          title: "Regras de ética e o seu plano de estudo e de exame",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Reconhecer práticas de venda desonestas e escrever um plano de estudo e de exame com datas.",
          text: [
            "Os estados têm leis sobre práticas comerciais desleais, e todos os exames as avaliam. Declaração falsa (misrepresentation) é mentir ou esconder o que uma apólice faz. Twisting é convencer um cliente a trocar uma apólice com uma mentira ou uma comparação enganosa, para prejuízo dele. Churning é trocar apólices muitas vezes sobretudo para ganhar novas comissões. Rebating é dar parte da sua comissão ou um presente para conseguir uma venda; é ilegal em muitos estados, por isso veja a regra do seu. Os prémios que recebe pertencem ao cliente e à seguradora: o agente guarda-os em confiança (um dever fiduciário) e não os pode misturar com o seu dinheiro pessoal (commingling).",
            "A ação honesta é simples: diga a verdade sobre a cobertura, ponha as necessidades do cliente em primeiro lugar, compare apólices de forma justa, escreva tudo e mantenha o dinheiro dos prémios separado. Se não tiver a certeza, pergunte ao seu chefe ou ao departamento do estado.",
            "Agora planeie. Use o programa do exame do seu estado para listar cada tema e o seu número de perguntas. Dê mais dias de estudo aos temas pesados. Marque uma data-alvo para o exame, duas ou mais datas de testes de prática e uma meta de pontuação. Termine qualquer curso de pré-licenciamento exigido antes de marcar o exame. Leia cada pergunta do exame duas vezes e preste atenção a palavras como EXCEPT (exceto) e NOT (não).",
            "Tarefa final: escreva o seu Plano de Estudo e de Exame numa página, com o seu ramo de licença, os passos oficiais do seu estado com os endereços na internet, os temas e os pesos do programa, um horário semanal com datas, as datas dos testes de prática, três sinistros de prática e três regras de ética."
          ],
          steps: ["Liste os passos oficiais do seu estado, por ordem, com os endereços na internet.", "Copie cada tema do programa e o seu número de perguntas.", "Dê mais dias de estudo aos temas com mais perguntas.", "Escolha uma data-alvo para o exame e pelo menos duas datas de testes de prática com uma meta de pontuação.", "Junte três sinistros de prática e três regras de ética com as suas palavras."],
          words: [["Declaração falsa (misrepresentation)", "mentir ou esconder o que uma apólice faz ou custa."], ["Twisting", "usar mentiras ou comparações enganosas para levar um cliente a trocar uma apólice."], ["Churning", "trocar apólices muitas vezes sobretudo para ganhar comissões."], ["Rebating", "devolver parte de uma comissão ou dar um presente para ganhar uma venda; ilegal em muitos estados."], ["Fiduciário", "uma pessoa em quem se confia para tratar com honestidade o dinheiro de outra pessoa."], ["Commingling", "misturar o dinheiro dos prémios dos clientes com o seu próprio dinheiro."]],
          slides: [
            { title: "Práticas que o exame avalia", bullets: ["Declaração falsa: mentir sobre uma apólice", "Twisting: enganar um cliente para trocar uma apólice", "Churning: trocar apólices para ganhar comissões", "Rebating: ilegal em muitos estados, veja o seu"] },
            { title: "O dinheiro dos prémios", bullets: ["Você guarda-o em confiança: dever fiduciário", "Nunca o misture com o seu dinheiro"] },
            { title: "Construa o seu plano", bullets: ["Passos e endereços na internet do seu estado", "Temas e pesos do programa", "Horário semanal com datas e testes de prática"] },
            { title: "No dia do exame", bullets: ["Leia cada pergunta duas vezes", "Atenção a EXCEPT (exceto) e NOT (não)", "Leve o documento de identidade que o manual pede"] }
          ],
          sources: [SRC.naicUtpa, SRC.naicDepts],
          tryIt: "Tarefa final: escreva o seu Plano de Estudo e de Exame para a Licença de Seguros numa página, usando os passos oficiais e o programa do exame do seu estado, com datas reais para cada semana de estudo, dois testes de prática e a sua data-alvo para o exame.",
          youCanNow: "reconhecer práticas de venda desonestas, escolher a ação honesta e seguir um plano de estudo e de exame com datas para o seu exame de licença.",
          quickCheck: [
            { objective: "O5", q: "Um agente diz a uma senhora idosa que a apólice antiga dela \"não vale nada\" para ela comprar uma nova que paga mais ao agente. O que é isto?", options: ["Subscrição", "Indemnização", "Twisting", "Uma nomeação"], answer: 2, why: "Usar uma afirmação enganosa para levar um cliente a trocar uma apólice é twisting." },
            { objective: "O6", q: "O programa do seu estado dá a um tema muito mais perguntas do que aos outros. O que faz no seu plano?", options: ["Dá mais dias de estudo a esse tema", "Salta-o porque é longo", "Estuda só os temas mais pequenos", "Ignora o programa"], answer: 0, why: "Os temas com mais perguntas merecem mais tempo de estudo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: O conteúdo do exame e estar pronto para o teste",
        questions: [
          { objective: "O4", q: "Só para prática: uma conta coberta de $4,000, a franquia já paga, cosseguro 80/20. Quanto paga o plano?", options: ["$800", "$4,000", "$3,000", "$3,200"], answer: 3, why: "Com a franquia já paga, o plano paga 80% de $4,000, que dá $3,200." },
          { objective: "O4", q: "Só para prática: $12,000 de danos cobertos por uma tempestade, custo de substituição, uma franquia de $2,000. Quanto paga a seguradora?", options: ["$10,000", "$12,000", "$14,000", "$2,000"], answer: 0, why: "A franquia é tirada da perda: $12,000 - $2,000 = $10,000." },
          { objective: "O3", q: "Quem recebe o capital por morte se o beneficiário principal já tiver morrido?", options: ["O agente", "O beneficiário suplente", "A seguradora", "O estado"], answer: 1, why: "O beneficiário suplente é o seguinte na lista quando o beneficiário principal já morreu." },
          { objective: "O5", q: "Um cliente paga-lhe um prémio em dinheiro vivo. O que faz com ele?", options: ["Põe-no na sua conta pessoal por agora", "Gasta-o e devolve-o mais tarde", "Trata-o como dinheiro em confiança, guardado à parte como a sua agência e o estado exigem", "Devolve uma parte ao cliente como agradecimento"], answer: 2, why: "Os prémios são guardados em confiança; misturá-los com o seu dinheiro é commingling." },
          { objective: "O6", q: "O que deve ter um bom plano de estudo e de exame?", options: ["Só a data do exame", "Passos oficiais, temas do programa, semanas de estudo com datas e testes de prática", "Uma lista das comissões do agente", "Respostas copiadas de um site"], answer: 1, why: "Um plano completo cobre os passos oficiais, os temas do programa e datas reais para estudar e praticar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para o Exame de Licença de Agente de Seguros",
    questions: [
      { objective: "O1", q: "Qual é a palavra legal para um agente de seguros licenciado que vende seguros?", options: ["Produtor (producer)", "Subscritor (underwriter)", "Perito de sinistros (adjuster)", "Atuário (actuary)"], answer: 0, why: "As leis dos estados chamam produtores aos agentes e corretores licenciados." },
      { objective: "O1", q: "Um banco contrata você para vender seguros de vida e cobertura de incapacidade de longa duração. Que ramos precisa?", options: ["Propriedade e Responsabilidade Civil", "Personal Lines", "Vida e Acidentes e Saúde", "Perito de sinistros"], answer: 2, why: "As apólices de vida exigem Vida, e a cobertura de incapacidade é Acidentes e Saúde." },
      { objective: "O1", q: "Que trabalho costuma exigir uma licença separada da licença de agente?", options: ["Vender seguro de arrendatário", "Vender seguro de vida temporário", "Vender seguro de carro", "Investigar e resolver sinistros como perito de sinistros"], answer: 3, why: "Os peritos de sinistros investigam e resolvem sinistros e costumam precisar da sua própria licença." },
      { objective: "O2", q: "Que site ajuda você a encontrar o departamento de seguros de cada estado?", options: ["A página da NAIC com os departamentos estaduais de seguros", "O blogue de um vendedor de cursos", "Um grupo nas redes sociais", "Um fórum na internet"], answer: 0, why: "A NAIC, o grupo dos reguladores estaduais, tem ligações para todos os departamentos estaduais." },
      { objective: "O2", q: "No Texas, quando verificámos, quando podia candidatar-se a uma licença de ramos gerais?", options: ["Antes de fazer qualquer exame", "Depois de passar no exame estadual", "Só depois de cinco anos de trabalho", "Só através da seguradora"], answer: 1, why: "O TDI dizia para passar primeiro no exame e depois candidatar-se pela Sircon ou pela NIPR." },
      { objective: "O2", q: "Um amigo diz que um curso de 20 horas é exigido em todo o lado. O que faz?", options: ["Acredita", "Paga o curso mais longo que encontrar", "Verifica a página do departamento do seu próprio estado", "Não faz nenhum curso"], answer: 2, why: "As regras de pré-licenciamento mudam de estado para estado, por isso verifique a página oficial." },
      { objective: "O3", q: "O que é um prémio?", options: ["O valor que a seguradora paga num sinistro", "O dinheiro que o segurado paga pela cobertura", "A licença do agente", "O limite da apólice"], answer: 1, why: "O prémio é o que o segurado paga para comprar a cobertura." },
      { objective: "O3", q: "Que página de uma apólice lista quem está coberto, os limites e o prémio?", options: ["A carta de apresentação", "O formulário de sinistro", "A candidatura", "A página de declarações"], answer: 3, why: "A página de declarações resume quem e o que está coberto, os limites e o prémio." },
      { objective: "O3", q: "Porque é que as palavras pouco claras de uma apólice costumam ser lidas a favor do cliente?", options: ["Porque a apólice é um contrato de adesão escrito pela seguradora", "Porque foi o agente que a escreveu", "Porque o cliente tem sempre razão", "Por causa da indemnização"], answer: 0, why: "A seguradora escreve o contrato e o cliente aceita-o como está, por isso os termos pouco claros favorecem o cliente." },
      { objective: "O3", q: "Que apólice de vida cobre um número fixo de anos e não tem valor de resgate?", options: ["Seguro de vida inteira", "Seguro de vida universal", "Seguro de vida temporário", "Seguro de vida permanente"], answer: 2, why: "O seguro de vida temporário cobre um período fixo e não acumula valor de resgate." },
      { objective: "O4", q: "Só para prática: uma conta coberta de $6,000, uma franquia de $1,000 ainda não paga, cosseguro 80/20. Quanto paga o segurado?", options: ["$1,200", "$2,000", "$1,000", "$5,000"], answer: 1, why: "A franquia de $1,000 mais 20% dos $5,000 que faltam ($1,000) dá $2,000." },
      { objective: "O4", q: "Só para prática: um condutor com limites 25/50/25 fere uma pessoa cujas contas são de $30,000. Quanto paga a apólice por essa pessoa?", options: ["$30,000", "$50,000", "$5,000", "$25,000"], answer: 3, why: "O limite por pessoa para ferimentos é $25,000; o condutor pode dever os outros $5,000." },
      { objective: "O4", q: "Só para prática: um portátil custa $1,000 novo e tem $400 de depreciação; a franquia é de $100. Quanto paga uma apólice de valor real em dinheiro?", options: ["$500", "$600", "$900", "$1,000"], answer: 0, why: "O valor real em dinheiro é $1,000 - $400 = $600, menos a franquia de $100, que dá $500." },
      { objective: "O4", q: "Que valor põe um teto ao que uma pessoa paga por cuidados de saúde cobertos num ano?", options: ["O copagamento", "O prémio", "O máximo de despesas próprias", "A franquia"], answer: 2, why: "O máximo de despesas próprias é o máximo que o segurado paga num ano do plano pelos cuidados cobertos." },
      { objective: "O5", q: "Um agente oferece a um cliente um cartão-presente de $100 para comprar uma apólice. Como se chama isto?", options: ["Twisting", "Rebating", "Subscrição", "Indemnização"], answer: 1, why: "Dar algo de valor para ganhar uma venda é rebating, que é ilegal em muitos estados." },
      { objective: "O5", q: "Um agente troca a apólice de um cliente todos os anos sobretudo para ganhar novas comissões. O que é isto?", options: ["Churning", "Cosseguro", "Nomeação", "Máxima boa-fé"], answer: 0, why: "Trocar apólices muitas vezes sobretudo pelas comissões é churning." },
      { objective: "O5", q: "Um cliente pergunta se uma apólice barata cobre danos por inundação e você não tem a certeza. O que faz?", options: ["Diz que sim para fechar a venda", "Muda de assunto", "Diz que as inundações estão sempre cobertas", "Verifica as palavras da apólice ou pergunta à empresa antes de responder"], answer: 3, why: "Adivinhar sobre a cobertura arrisca uma declaração falsa; verifique primeiro e diga a verdade." },
      { objective: "O6", q: "Qual é o melhor primeiro passo para construir o seu plano de estudo para o exame?", options: ["Marcar o exame para amanhã", "Comprar o curso mais caro", "Obter os passos oficiais e o programa do exame do seu estado", "Decorar perguntas de prática ao acaso"], answer: 2, why: "Os passos oficiais e o programa mostram o que fazer e o que estudar." },
      { objective: "O6", q: "A pontuação do seu primeiro teste de prática fica abaixo da sua meta. O que muda no seu plano?", options: ["Junta dias de estudo aos temas mais fracos do programa e marca outro teste de prática", "Cancela o plano", "Faz já o exame real", "Estuda só os temas que já sabe"], answer: 0, why: "Os testes de prática mostram os temas fracos; dê-lhes mais tempo e teste outra vez antes do exame real." },
      { objective: "O6", q: "No exame, uma pergunta pede o item que está coberto \"EXCEPT\" (exceto). O que deve fazer?", options: ["Escolher a primeira afirmação verdadeira", "Saltá-la", "Adivinhar depressa", "Lê-la duas vezes e escolher o item que NÃO está coberto"], answer: 3, why: "EXCEPT pede a única opção que não encaixa; ler duas vezes evita um erro por descuido." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno ganhou
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 6, 8, 10, 12, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Ramo de licença certo", objective: "O1", notYet: "Nenhum ramo indicado, ou um ramo que não serve para o trabalho.", meets: "Indica o ramo de licença que serve para o trabalho e diz porquê.", exceeds: "Indica também um segundo ramo ou licença de que o aluno pode precisar mais tarde, e porquê." },
      { name: "Passos oficiais", objective: "O2", notYet: "Faltam passos ou vêm de anúncios ou de amigos.", meets: "Todos os passos da página oficial do estado, por ordem, com os endereços na internet.", exceeds: "Junta a data da verificação, o manual do candidato da empresa de exames e os passos de verificação de antecedentes." },
      { name: "Temas do programa e termos", objective: "O3", notYet: "Nenhum tema do programa, ou termos principais explicados de forma errada.", meets: "Lista todos os temas do programa com o seu peso e explica corretamente os termos principais.", exceeds: "Marca os temas mais fracos do aluno e junta cartões de memória para eles." },
      { name: "Sinistros de prática", objective: "O4", notYet: "Menos de três sinistros, ou respostas erradas.", meets: "Três sinistros de prática calculados corretamente, mostrando cada passo.", exceeds: "Os sinistros incluem uma franquia, um cosseguro e um limite da apólice, cada um com a verificação da conta." },
      { name: "Regras de ética", objective: "O5", notYet: "Regras em falta ou erradas.", meets: "Três regras de ética explicadas corretamente com as palavras do aluno.", exceeds: "Cada regra vem com um pequeno exemplo da ação honesta." },
      { name: "Plano com datas", objective: "O6", notYet: "Sem datas, ou sem testes de prática.", meets: "Um horário semanal com datas, uma data-alvo para o exame e dois testes de prática com uma meta de pontuação.", exceeds: "Os temas mais pesados do programa têm mais dias de estudo, e há uma data de exame de reserva." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que marcam o exame de licença do seu estado em 60 dias (inquérito de seguimento)",
      "Alunos que dizem ter passado no exame estadual e obtido a licença (inquérito de seguimento)",
      "Alunos que dizem ter recebido uma oferta de emprego ou uma nomeação como agente de seguros, ou ter aberto a sua própria agência"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para abrir as páginas oficiais do estado",
      "Papel, caneta e uma calculadora simples",
      "O programa do exame e o manual do candidato do estado do aluno (gratuitos na empresa de exames)",
      "Cerca de 60 a 75 minutos no total, em sessões curtas, mais tempo para o plano final"
    ],
    facilitatorNotes: [
      "Se puder, agrupe os alunos por estado e abram juntos a página de licenciamento de cada estado; não apresente as regras de um estado como se valessem em todo o lado.",
      "Deixe claro que o curso prepara os alunos e não substitui um curso de pré-licenciamento exigido pelo estado nem dá uma licença.",
      "Para alunos com registo criminal, explique com honestidade a regra do consentimento escrito e indique o departamento do seu estado; não adivinhe sobre o caso de ninguém.",
      "Todas as contas dos sinistros usam números inventados; não dê conselhos sobre que apólice alguém deve comprar.",
      "Avalie o plano final com a grelha de avaliação e verifique que cada passo tem um endereço oficial na internet."
    ]
  }
};
